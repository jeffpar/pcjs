/**
 * @fileoverview Implements Space Invaders video hardware
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Memory  from "../../../lib/memory.js";
import Monitor from "../../../lib/device.js";

/**
 * @typedef {MonitorConfig} InvadersVideoConfig
 * @property {number} bufferWidth
 * @property {number} bufferHeight
 * @property {number} bufferRotate
 * @property {number} bufferAddr
 * @property {number} bufferBits
 * @property {number} bufferLeft
 * @property {number} interruptRate
 */

/**
 * @class {InvadersVideo}
 * @unrestricted
 * @property {InvadersVideoConfig} config
 */
export default class InvadersVideo extends Monitor {
    /**
     * InvadersVideo(idMachine, idDevice, config)
     *
     * The InvadersVideo component can be configured with the following config properties:
     *
     *      bufferWidth: the width of a single frame buffer row, in pixels (eg, 256)
     *      bufferHeight: the number of frame buffer rows (eg, 224)
     *      bufferAddr: the starting address of the frame buffer (eg, 0x2400)
     *      bufferRAM: true to use existing RAM (default is false)
     *      bufferBits: the number of bits per column (default is 1)
     *      bufferLeft: the bit position of the left-most pixel in a byte (default is 0; CGA uses 7)
     *      bufferRotate: the amount of counter-clockwise buffer rotation required (eg, -90 or 270)
     *      interruptRate: normally the same as (or some multiple of) refreshRate (eg, 120)
     *      refreshRate: how many times updateMonitor() should be performed per second (eg, 60)
     *
     * We record all the above values now, but we defer creation of the frame buffer until initBuffers()
     * is called.  At that point, we will also compute the extent of the frame buffer, determine the
     * appropriate "cell" size (ie, the number of pixels that updateMonitor() will fetch and process at once),
     * and then allocate our cell cache.
     *
     * Why interruptRate in addition to refreshRate?  A higher interrupt rate is required for Space Invaders,
     * because even though the CRT refreshes at 60Hz, the CRT controller interrupts the CPU *twice* per
     * refresh (once after the top half of the image has been redrawn, and again after the bottom half has
     * been redrawn), so we need an interrupt rate of 120Hz.  We pass the higher rate on to the CPU, so that
     * it will call updateMonitor() more frequently, but we still limit our monitor updates to every *other* call.
     *
     * bufferRotate is an alternative to monitorRotate; you may set one or the other (but not both) to -90 to
     * enable different approaches to counter-clockwise 90-degree image rotation.  monitorRotate uses canvas
     * transformation methods (translate(), rotate(), and scale()), while bufferRotate inverts the dimensions
     * of the off-screen buffer and then relies on setPixel() to "rotate" the data into the proper location.
     *
     * @this {InvadersVideo}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        let video = this
        this.addrBuffer = this.config['bufferAddr'];
        this.fUseRAM = this.config['bufferRAM'];

        this.nColsBuffer = this.config['bufferWidth'];
        this.nRowsBuffer = this.config['bufferHeight'];

        this.cxCell = this.config['cellWidth'] || 1;
        this.cyCell = this.config['cellHeight'] || 1;

        this.nBitsPerPixel = this.config['bufferBits'] || 1;
        this.iBitFirstPixel = this.config['bufferLeft'] || 0;

        this.rotateBuffer = this.config['bufferRotate'];
        if (this.rotateBuffer) {
            this.rotateBuffer = this.rotateBuffer % 360;
            if (this.rotateBuffer > 0) this.rotateBuffer -= 360;
            if (this.rotateBuffer != -90) {
                this.printf("unsupported buffer rotation: %d\n", this.rotateBuffer);
                this.rotateBuffer = 0;
            }
        }

        this.rateInterrupt = this.config['interruptRate'];
        this.rateRefresh = this.config['refreshRate'] || 60;

        this.cxMonitorCell = (this.cxMonitor / this.nColsBuffer)|0;
        this.cyMonitorCell = (this.cyMonitor / this.nRowsBuffer)|0;

        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['bus']));
        this.initBuffers();

        this.cpu = /** @type {CPUx80} */ (this.findDeviceByClass("CPU"));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.timerUpdateNext = this.time.addTimer(this.idDevice, this.updateMonitor.bind(this));
        this.time.addUpdate(this);

        this.time.setTimer(this.timerUpdateNext, this.getRefreshTime());
        this.nUpdates = 0;
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
     * @this {InvadersVideo}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (!this.time.isRunning()) this.updateScreen();
    }

    /**
     * initBuffers()
     *
     * @this {InvadersVideo}
     * @returns {boolean}
     */
    initBuffers()
    {
        /*
         * Allocate off-screen buffers now
         */
        this.cxBuffer = this.nColsBuffer * this.cxCell;
        this.cyBuffer = this.nRowsBuffer * this.cyCell;

        let cxBuffer = this.cxBuffer;
        let cyBuffer = this.cyBuffer;
        if (this.rotateBuffer) {
            cxBuffer = this.cyBuffer;
            cyBuffer = this.cxBuffer;
        }

        this.sizeBuffer = ((this.cxBuffer * this.nBitsPerPixel) >> 3) * this.cyBuffer;
        if (!this.fUseRAM) {
            if (!this.busMemory.addBlocks(this.addrBuffer, this.sizeBuffer, Memory.TYPE.READWRITE)) {
                return false;
            }
        }

        /*
         * Since we will read video data from the bus at its default width, get that width now;
         * that width will also determine the size of a cell.
         */
        this.cellWidth = this.busMemory.dataWidth;
        this.imageBuffer = this.contextMonitor.createImageData(cxBuffer, cyBuffer);
        this.nPixelsPerCell = Math.trunc(this.cellWidth / this.nBitsPerPixel);

        /*
         * Since we calculated sizeBuffer as a number of bytes, convert that to the number of cells.
         */
        this.initCache(Math.ceil(this.sizeBuffer / (this.cellWidth >> 3)));

        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = cxBuffer;
        this.canvasBuffer.height = cyBuffer;
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        this.initColors();

        /*
         * Our 'smoothing' parameter defaults to null (which we treat the same as undefined), which means that
         * image smoothing will be selectively enabled (ie, true for text modes, false for graphics modes); otherwise,
         * we'll set image smoothing to whatever value was provided for ALL modes -- assuming the browser supports it.
         */
        if (this.sSmoothing) {
            this.contextMonitor[this.sSmoothing] = (this.fSmoothing == null? false : this.fSmoothing);
        }
        return true;
    }

    /**
     * getRefreshTime()
     *
     * @this {InvadersVideo}
     * @returns {number} (number of milliseconds per refresh)
     */
    getRefreshTime()
    {
        return 1000 / Math.max(this.rateRefresh, this.rateInterrupt);
    }

    /**
     * initCache(nCells)
     *
     * Initializes the contents of our internal cell cache.
     *
     * @this {InvadersVideo}
     * @param {number} [nCells]
     */
    initCache(nCells)
    {
        this.fCacheValid = false;
        if (nCells) {
            this.nCacheCells = nCells;
            if (this.aCacheCells === undefined || this.aCacheCells.length != this.nCacheCells) {
                this.aCacheCells = new Array(this.nCacheCells);
            }
        }
    }

    /**
     * initColors()
     *
     * This creates an array of nColors, with additional OVERLAY_TOTAL colors tacked on to the end of the array.
     *
     * @this {InvadersVideo}
     */
    initColors()
    {
        let rgbBlack  = [0x00, 0x00, 0x00, 0xff];
        let rgbWhite  = [0xff, 0xff, 0xff, 0xff];
        this.nColors = (1 << this.nBitsPerPixel);
        this.aRGB = new Array(this.nColors + InvadersVideo.COLORS.OVERLAY_TOTAL);
        this.aRGB[0] = rgbBlack;
        this.aRGB[1] = rgbWhite;
        let rgbGreen  = [0x00, 0xff, 0x00, 0xff];
        let rgbYellow = [0xff, 0xff, 0x00, 0xff];
        this.aRGB[this.nColors + InvadersVideo.COLORS.OVERLAY_TOP] = rgbYellow;
        this.aRGB[this.nColors + InvadersVideo.COLORS.OVERLAY_BOTTOM] = rgbGreen;
    }

    /**
     * setPixel(image, x, y, bPixel)
     *
     * @this {InvadersVideo}
     * @param {Object} image
     * @param {number} x
     * @param {number} y
     * @param {number} bPixel (ie, an index into aRGB)
     */
    setPixel(image, x, y, bPixel)
    {
        let index;
        if (!this.rotateBuffer) {
            index = (x + y * image.width);
        } else {
            index = (image.height - x - 1) * image.width + y;
        }
        if (bPixel) {
            if (x >= 208 && x < 236) {
                bPixel = this.nColors + InvadersVideo.COLORS.OVERLAY_TOP;
            }
            else if (x >= 28 && x < 72) {
                bPixel = this.nColors + InvadersVideo.COLORS.OVERLAY_BOTTOM;
            }
        }
        let rgb = this.aRGB[bPixel];
        index *= rgb.length;
        image.data[index] = rgb[0];
        image.data[index+1] = rgb[1];
        image.data[index+2] = rgb[2];
        image.data[index+3] = rgb[3];
    }

    /**
     * updateMonitor(fForced)
     *
     * Forced updates are generally internal updates triggered by an I/O operation or other state change,
     * while non-forced updates are periodic "refresh" updates.
     *
     * @this {InvadersVideo}
     * @param {boolean} [fForced]
     */
    updateMonitor(fForced)
    {
        let fUpdate = true;
        if (!fForced) {
            if (this.rateInterrupt) {
                /*
                 * TODO: Incorporate these hard-coded interrupt vector numbers into configuration blocks.
                 */
                if (this.rateInterrupt == 120) {
                    /*
                     * According to http://www.computerarcheology.com/Arcade/SpaceInvaders/Hardware.html:
                     *
                     *      The CPU's INT line is asserted via a D flip-flop at E3.
                     *      The flip-flop is clocked by the expression (!(64V | !128V) | VBLANK).
                     *      According to this, the LO to HI transition happens when the vertical
                     *      sync chain is 0x80 and 0xda and VBLANK is 0 and 1, respectively.
                     *      These correspond to lines 96 and 224 as displayed.
                     *      The interrupt vector is provided by the expression:
                     *      0xc7 | (64V << 4) | (!64V << 3), giving 0xcf and 0xd7 for the vectors.
                     *      The flip-flop, thus the INT line, is later cleared by the CPU via
                     *      one of its memory access control signals.
                     *
                     * Translation:
                     *
                     * Two different RST instructions are generated: RST 1 and RST 2.  It's believed that
                     * RST 1 occurs when the beam is near the middle of the image (and therefore it's safe to
                     * draw the top half of the image) and RST 2 occurs when the beam is at the bottom (and
                     * it's safe to draw the rest of the image).
                     */
                    if (!(this.nUpdates & 1)) {
                        /*
                         * On even updates, call cpu.requestINTR(1), and also update our copy of the image.
                         */
                        this.cpu.requestINTR(1);
                    } else {
                        /*
                         * On odd updates, call cpu.requestINTR(2), but do NOT update our copy of the image, because
                         * the machine has presumably only updated the top half of the frame buffer at this point; it will
                         * update the bottom half of the frame buffer after acknowledging this interrupt.
                         */
                        this.cpu.requestINTR(2);
                        fUpdate = false;
                    }
                }
            }

            /*
             * Since this is not a forced update, if our cell cache is valid AND we allocated our own buffer AND the buffer
             * is clean, then there's nothing to do.
             */
            if (fUpdate && this.fCacheValid && this.sizeBuffer) {
                if (this.busMemory.cleanBlocks(this.addrBuffer, this.sizeBuffer)) {
                    fUpdate = false;
                }
            }
            this.time.setTimer(this.timerUpdateNext, this.getRefreshTime());
            this.nUpdates++;
            if (!fUpdate) return;
        }
        this.updateScreen();
    }

    /**
     * updateScreen()
     *
     * Propagates the video buffer to the cell cache and updates the screen with any changes on the monitor.
     *
     * For every cell in the video buffer, compare it to the cell stored in the cell cache, render if it differs,
     * and then update the cell cache to match.  Since initCache() sets every cell in the cell cache to an
     * invalid value, we're assured that the next call to updateScreen() will redraw the entire (visible) video buffer.
     *
     * @this {InvadersVideo}
     */
    updateScreen()
    {
        let addr = this.addrBuffer;
        let addrLimit = addr + this.sizeBuffer;

        let iCell = 0, xBuffer = 0, yBuffer = 0;
        let xDirty = this.cxBuffer, xMaxDirty = 0, yDirty = this.cyBuffer, yMaxDirty = 0;

        let nShiftInit = 0;
        let nShiftPixel = this.nBitsPerPixel;
        let nMask = (1 << nShiftPixel) - 1;
        if (this.iBitFirstPixel) {
            nShiftPixel = -nShiftPixel;
            nShiftInit = this.cellWidth + nShiftPixel;
        }
        let addrInc = (this.cellWidth / this.busMemory.dataWidth)|0;

        while (addr < addrLimit) {
            let data = this.busMemory.readData(addr);
            this.assert(iCell < this.aCacheCells.length);
            if (this.fCacheValid && data === this.aCacheCells[iCell]) {
                xBuffer += this.nPixelsPerCell;
            } else {
                this.aCacheCells[iCell] = data;
                let nShift = nShiftInit;
                if (nShift) data = ((data >> 8) | ((data & 0xff) << 8));
                if (xBuffer < xDirty) xDirty = xBuffer;
                let cPixels = this.nPixelsPerCell;
                while (cPixels--) {
                    let bPixel = (data >> nShift) & nMask;
                    this.setPixel(this.imageBuffer, xBuffer++, yBuffer, bPixel);
                    nShift += nShiftPixel;
                }
                if (xBuffer > xMaxDirty) xMaxDirty = xBuffer;
                if (yBuffer < yDirty) yDirty = yBuffer;
                if (yBuffer >= yMaxDirty) yMaxDirty = yBuffer + 1;
            }
            addr += addrInc; iCell++;
            if (xBuffer >= this.cxBuffer) {
                xBuffer = 0; yBuffer++;
                if (yBuffer > this.cyBuffer) break;
            }
        }
        this.fCacheValid = true;

        /*
         * Instead of blasting the ENTIRE imageBuffer into contextBuffer, and then blasting the ENTIRE
         * canvasBuffer onto contextMonitor, even for the smallest change, let's try to be a bit smarter about
         * the update (well, to the extent that the canvas APIs permit).
         */
        if (xDirty < this.cxBuffer) {
            let cxDirty = xMaxDirty - xDirty;
            let cyDirty = yMaxDirty - yDirty;
            if (this.rotateBuffer) {
                /*
                 * If rotateBuffer is set, then it must be -90, so we must "rotate" the dirty coordinates as well,
                 * because they are relative to the frame buffer, not the rotated image buffer.  Alternatively, you
                 * can use the following call to blast the ENTIRE imageBuffer into contextBuffer instead:
                 *
                 *      this.contextBuffer.putImageData(this.imageBuffer, 0, 0);
                 */
                let xDirtyOrig = xDirty, cxDirtyOrig = cxDirty;
                xDirty = yDirty;
                cxDirty = cyDirty;
                yDirty = this.cxBuffer - (xDirtyOrig + cxDirtyOrig);
                cyDirty = cxDirtyOrig;
            }
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, cxDirty, cyDirty);
            /*
             * As originally noted in /modules/pcx86/lib/video.js, I would prefer to draw only the dirty portion of
             * canvasBuffer, but there usually isn't a 1-1 pixel mapping between canvasBuffer and contextMonitor, so
             * if we draw interior rectangles, we can end up with subpixel artifacts along the edges of those rectangles.
             */
            this.contextMonitor.drawImage(this.canvasBuffer, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height, 0, 0, this.cxMonitor, this.cyMonitor);
        }
    }
}

InvadersVideo.COLORS = {
    OVERLAY_TOP:    0,
    OVERLAY_BOTTOM: 1,
    OVERLAY_TOTAL:  2
};

InvadersVideo.CLASSES["InvadersVideo"] = InvadersVideo;
