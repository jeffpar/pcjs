/**
 * @fileoverview Implements Palm Pilot video hardware
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU68K  from "../../../../motorola/68k/modules/v3/cpu68k.js";
import MESSAGE from "../../../../modules/v3/message.js";
import Monitor from "../../../../modules/v3/monitor.js";

/**
 * @typedef {MonitorConfig} PilotVideoConfig
 * @property {string} bus
 * @property {number} bufferWidth
 * @property {number} bufferHeight
 * @property {string} [pixelColor]
 * @property {number} [refreshRate]
 */

/**
 * @class PilotVideo
 * @unrestricted
 * @property {PilotVideoConfig} config
 *
 * This is a port of DeviceScreen.java, which displays the contents of the LCD frame buffer, whose location
 * and format are determined by the DragonBall LCD controller registers (see PilotIO).
 */
export default class PilotVideo extends Monitor {
    /**
     * PilotVideo(idMachine, idDevice, config)
     *
     * The PilotVideo component can be configured with the following config properties:
     *
     *      bufferWidth: the width of the LCD, in pixels (eg, 160)
     *      bufferHeight: the height of the LCD, in pixels (eg, 160)
     *      monitorColor: the color of the LCD background (ie, a pixel with a value of zero)
     *      pixelColor: the color of an LCD pixel at maximum intensity
     *      refreshRate: how many times updateMonitor() should be performed per second (eg, 60)
     *
     * Unlike the frame buffers of most other machines, the location of the Pilot's frame buffer is programmable
     * (and is normally located in RAM), so we have no fixed buffer address.
     *
     * @this {PilotVideo}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.cxScreen = this.config['bufferWidth'] || 160;
        this.cyScreen = this.config['bufferHeight'] || 160;
        this.rateRefresh = this.config['refreshRate'] || 60;

        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['bus']));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.io = /** @type {PilotIO} */ (this.findDeviceByClass("PilotIO"));

        /**
         * The LCD controller (eg, SED1375) is optional; if none is specified, the DragonBall's own LCD controller
         * (ie, PilotIO) is used.  Either way, the LCD controller must provide getLCDStatus(), getBufferAddress(),
         * getBufferStride(), getBPP(), and optionally getPalette() (otherwise, the gray palette below is used).
         */
        this.lcd = this.config['lcd']? /** @type {Object} */ (this.findDevice(this.config['lcd'])) : this.io;

        /**
         * fEnabled records whether or not the machine has powered us; for the LCD to display anything, it must
         * be enabled AND the LCD hardware must be enabled (see resetScreen()).
         */
        this.fEnabled = false;
        this.fLCDOn = false;
        this.cBPP = 1;
        this.aCache = null;
        this.fCacheValid = false;

        this.imageBuffer = this.contextMonitor.createImageData(this.cxScreen, this.cyScreen);
        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = this.cxScreen;
        this.canvasBuffer.height = this.cyScreen;
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        /**
         * Since there's always a large disparity between the size of the LCD and the size of the monitor,
         * we disable image smoothing by default, unless the config (or URL) explicitly enables it.
         */
        if (this.sSmoothing) {
            this.contextMonitor[this.sSmoothing] = (this.fSmoothing == null? false : this.fSmoothing);
        }

        this.rgbBackground = this.parseColor(this.config['monitorColor'], [0x77, 0x8b, 0x76]);
        this.rgbPixel = this.parseColor(this.config['pixelColor'], [0x2e, 0x3a, 0x44]);
        this.initColors();

        this.timerUpdateNext = this.time.addTimer(this.idDevice, this.updateMonitor.bind(this));
        this.time.addUpdate(this);
        this.time.setTimer(this.timerUpdateNext, this.getRefreshTime());

        this.io.setVideo(this);
        if (this.lcd != this.io) this.lcd.setVideo(this);
        this.blankMonitor();
    }

    /**
     * parseColor(sColor, rgbDefault)
     *
     * @this {PilotVideo}
     * @param {string|undefined} sColor (eg, "#778b76")
     * @param {Array.<number>} rgbDefault
     * @returns {Array.<number>}
     */
    parseColor(sColor, rgbDefault)
    {
        let match = sColor && sColor.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
        if (match) {
            return [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)];
        }
        return rgbDefault;
    }

    /**
     * initColors()
     *
     * Creates an array of 16 colors, ranging from the LCD background color (intensity 0) to the pixel color
     * (intensity 15).  1BPP pixels use only the first and last colors, while 2BPP pixels are mapped through
     * the LCD controller's gray palette (see getPixelColors()).
     *
     * The Java implementation created a 256-color palette, but that was just to work around problems with
     * 4-bit color models in older JDKs.
     *
     * @this {PilotVideo}
     */
    initColors()
    {
        this.aRGB = new Array(16);
        for (let i = 0; i < this.aRGB.length; i++) {
            let rgb = [0, 0, 0, 0xff];
            for (let j = 0; j < 3; j++) {
                rgb[j] = Math.round(this.rgbBackground[j] + (this.rgbPixel[j] - this.rgbBackground[j]) * i / 15);
            }
            this.aRGB[i] = rgb;
        }
    }

    /**
     * getPixelColors()
     *
     * Returns an array of RGB values for each possible pixel value at the current color depth.
     *
     * For 2BPP modes, the 16-bit GPMR (Gray Palette Mapping Register) describes the intensity of pixels 00, 01, 10,
     * and 11 in bits 8-11, 12-15, 0-3, and 4-7, respectively; intensities range from 0 to 7.
     *
     * @this {PilotVideo}
     * @returns {Array.<Array.<number>>}
     */
    getPixelColors()
    {
        if (this.lcd.getPalette) return this.lcd.getPalette();
        let aColors = [];
        if (this.cBPP == 2) {
            let gpmr = this.io.getGrayPalette();
            let anShifts = [8, 12, 0, 4];
            for (let i = 0; i < 4; i++) {
                let level = Math.min((gpmr >> anShifts[i]) & 0xf, 7);
                aColors.push(this.aRGB[Math.round(level * 15 / 7)]);
            }
        } else {
            let nColors = 1 << this.cBPP;
            for (let i = 0; i < nColors; i++) {
                aColors.push(this.aRGB[Math.round(i * 15 / (nColors - 1))]);
            }
        }
        return aColors;
    }

    /**
     * blankMonitor()
     *
     * Overrides the Monitor's blankMonitor(), because a blank LCD isn't black.
     *
     * @this {PilotVideo}
     */
    blankMonitor()
    {
        if (this.contextMonitor) {
            let rgb = this.rgbBackground;
            this.contextMonitor.fillStyle = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
            this.contextMonitor.fillRect(0, 0, this.canvasMonitor.width, this.canvasMonitor.height);
        }
    }

    /**
     * getRefreshTime()
     *
     * @this {PilotVideo}
     * @returns {number} (number of milliseconds per refresh)
     */
    getRefreshTime()
    {
        return 1000 / this.rateRefresh;
    }

    /**
     * initCache()
     *
     * Invalidates our copy of the frame buffer, forcing the next updateScreen() to redraw everything.
     *
     * @this {PilotVideo}
     */
    initCache()
    {
        this.fCacheValid = false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event (the equivalent of DeviceScreen.Enable()).
     *
     * @this {PilotVideo}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (this.fEnabled != on) {
            this.fEnabled = on;
            this.resetScreen();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {PilotVideo}
     */
    onReset()
    {
        this.resetScreen();
    }

    /**
     * onUpdate(fTransition)
     *
     * This is our obligatory update() function, which every device with visual components should have.
     *
     * For the video device, our sole function is making sure the screen display is up-to-date.  However, calling
     * updateScreen() is a bad idea if the machine is running, because we already have a timer to take care of
     * that.  But we can also be called when the machine is NOT running (eg, the Debugger may be stepping through
     * some code, or editing the frame buffer directly, or something else).  Since we have no way of knowing, we
     * must force an update.
     *
     * @this {PilotVideo}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (!this.time.isRunning()) this.updateScreen();
    }

    /**
     * resetScreen()
     *
     * Recompute screen characteristics, and then enable or disable the screen, and refresh as appropriate
     * (the equivalent of DeviceScreen.Reset()).  This is called whenever the LCD hardware state changes, and
     * whenever power is applied or removed.
     *
     * @this {PilotVideo}
     */
    resetScreen()
    {
        this.fLCDOn = this.fEnabled && this.lcd.getLCDStatus();
        if (!this.fLCDOn) {
            this.printf(MESSAGE.VIDEO, "LCD off\n");
            this.blankMonitor();
            return;
        }
        this.cBPP = this.lcd.getBPP();
        this.printf(MESSAGE.VIDEO, "LCD on: %d BPP at %#010x\n", this.cBPP, this.lcd.getBufferAddress());
        this.initCache();
        this.updateScreen();
    }

    /**
     * updateMonitor()
     *
     * Our periodic "refresh" timer callback.
     *
     * @this {PilotVideo}
     */
    updateMonitor()
    {
        this.time.setTimer(this.timerUpdateNext, this.getRefreshTime());
        this.updateScreen();
    }

    /**
     * updateScreen()
     *
     * Check the screen buffer for changes, and then refresh the monitor (the equivalent of DeviceScreen.CheckBuffer()).
     *
     * Every byte of the frame buffer is compared to the byte in our cache, and any differences are propagated to
     * imageBuffer, while also updating the dirty rectangle; then only the dirty portion of imageBuffer is copied
     * to canvasBuffer, which is then drawn onto the monitor.
     *
     * @this {PilotVideo}
     */
    updateScreen()
    {
        if (!this.fLCDOn) return;

        let addrBuffer = this.lcd.getBufferAddress();
        let cbRow = this.lcd.getBufferStride();
        let cbBuffer = cbRow * this.cyScreen;
        if (!this.aCache || this.aCache.length != cbBuffer || this.cBPPCache != this.cBPP) {
            this.cBPPCache = this.cBPP;
            this.aCache = new Uint8Array(cbBuffer);
            this.fCacheValid = false;
        }

        let nPixelsPerByte = 8 / this.cBPP;
        let nMask = (1 << this.cBPP) - 1;
        let aColors = this.getPixelColors();
        let data = this.imageBuffer.data;
        let xDirty = this.cxScreen, xMaxDirty = 0, yDirty = this.cyScreen, yMaxDirty = 0;

        for (let y = 0, off = 0; y < this.cyScreen; y++) {
            for (let x = 0, offRow = off; x < this.cxScreen; x += nPixelsPerByte, offRow++) {
                let b = this.busMemory.readData((addrBuffer + offRow) & CPU68K.ADDR_MASK);
                if (this.fCacheValid && b === this.aCache[offRow]) continue;
                this.aCache[offRow] = b;
                for (let i = 0, nShift = 8 - this.cBPP; i < nPixelsPerByte; i++, nShift -= this.cBPP) {
                    let rgb = aColors[(b >> nShift) & nMask];
                    let index = ((y * this.cxScreen) + x + i) * 4;
                    data[index] = rgb[0];
                    data[index+1] = rgb[1];
                    data[index+2] = rgb[2];
                    data[index+3] = 0xff;
                }
                if (x < xDirty) xDirty = x;
                if (x + nPixelsPerByte > xMaxDirty) xMaxDirty = x + nPixelsPerByte;
                if (y < yDirty) yDirty = y;
                if (y >= yMaxDirty) yMaxDirty = y + 1;
            }
            off += cbRow;
        }
        this.fCacheValid = true;

        if (xDirty < xMaxDirty) {
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, xMaxDirty - xDirty, yMaxDirty - yDirty);
            /**
             * As originally noted in /machines/pcx86/modules/v2/video.js, I would prefer to draw only the dirty portion
             * of canvasBuffer, but there usually isn't a 1-1 pixel mapping between canvasBuffer and contextMonitor, so
             * if we draw interior rectangles, we can end up with subpixel artifacts along the edges of those rectangles.
             */
            this.contextMonitor.drawImage(this.canvasBuffer, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height, 0, 0, this.cxMonitor, this.cyMonitor);
        }
    }
}

PilotVideo.CLASSES["PilotVideo"] = PilotVideo;
