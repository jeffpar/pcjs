/**
 * @fileoverview TI OMAP LCD Display
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Monitor from "../../../modules/v3/monitor.js";

/**
 * @typedef {Config} OMAPVideoConfig
 * @property {number} [bufferWidth] (width of the LCD, in pixels; default is 320)
 * @property {number} [bufferHeight] (height of the LCD, in pixels; default is 320)
 * @property {number} [refreshRate] (number of times per second that we update the monitor; default is 30)
 */

/**
 * OMAP LCD Display
 *
 * This device periodically asks the OMAP device to render whatever its LCD controller is displaying, and then
 * draws the result on the monitor.  All of the LCD emulation (the controller, the frame buffer, and the palette)
 * lives in the OMAP device.
 *
 * @class OMAPVideo
 * @unrestricted
 */
export default class OMAPVideo extends Monitor
{
    /**
     * OMAPVideo(idMachine, idDevice, config)
     *
     * @this {OMAPVideo}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.cxScreen = this.config['bufferWidth'] || 320;
        this.cyScreen = this.config['bufferHeight'] || 320;
        this.rateRefresh = this.config['refreshRate'] || 30;
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.omap = /** @type {OMAP} */ (this.findDeviceByClass("OMAP"));
        this.fLCDOn = false;

        /**
         * We draw the LCD's pixels into an off-screen canvas that's the same size as the LCD, and then let
         * the browser scale that canvas to the size of the monitor.
         */
        this.imageBuffer = this.contextMonitor.createImageData(this.cxScreen, this.cyScreen);
        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = this.cxScreen;
        this.canvasBuffer.height = this.cyScreen;
        this.contextBuffer = this.canvasBuffer.getContext("2d");
        if (this.sSmoothing) {
            this.contextMonitor[this.sSmoothing] = (this.fSmoothing == null? false : this.fSmoothing);
        }

        this.timerUpdate = this.time.addTimer(this.idDevice, this.updateMonitor.bind(this));
        this.time.addUpdate(this);
        this.time.setTimer(this.timerUpdate, 1000 / this.rateRefresh);
        this.blankMonitor();
    }

    /**
     * blankMonitor()
     *
     * @this {OMAPVideo}
     */
    blankMonitor()
    {
        this.contextMonitor.fillStyle = this.config['monitorColor'] || "black";
        this.contextMonitor.fillRect(0, 0, this.canvasMonitor.width, this.canvasMonitor.height);
    }

    /**
     * initCache()
     *
     * Called by the Monitor whenever the canvas changes (eg, when entering or leaving full-screen mode); we don't
     * cache anything, so there's nothing to do except redraw.
     *
     * @this {OMAPVideo}
     */
    initCache()
    {
        this.fLCDOn = false;
    }

    /**
     * onUpdate(fTransition)
     *
     * Called by the Time device; this keeps the monitor up-to-date when the machine is stopped or being stepped.
     *
     * @this {OMAPVideo}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (!this.time.isRunning()) this.updateScreen();
    }

    /**
     * updateMonitor()
     *
     * Called by our timer, at our refresh rate.
     *
     * @this {OMAPVideo}
     */
    updateMonitor()
    {
        this.time.setTimer(this.timerUpdate, 1000 / this.rateRefresh);
        this.updateScreen();
    }

    /**
     * updateScreen()
     *
     * @this {OMAPVideo}
     */
    updateScreen()
    {
        let info = this.omap.renderLCD(this.imageBuffer.data);
        if (!info || info.width != this.cxScreen || info.height != this.cyScreen) {
            if (this.fLCDOn) {
                this.fLCDOn = false;
                this.blankMonitor();
            }
            return;
        }
        this.fLCDOn = true;
        this.contextBuffer.putImageData(this.imageBuffer, 0, 0);
        this.contextMonitor.drawImage(this.canvasBuffer, 0, 0, this.cxScreen, this.cyScreen, 0, 0, this.cxMonitor, this.cyMonitor);
    }
}

OMAPVideo.CLASSES["OMAPVideo"] = OMAPVideo;
