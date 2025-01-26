/**
 * @fileoverview Implements VT100 video hardware
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Memory  from "../../../../modules/v3/memory.js";
import Monitor from "../../../../modules/v3/monitor.js";
import MESSAGE from "../../../../modules/v3/message.js";

/**
 * @typedef {MonitorConfig} VT100VideoConfig
 * @property {number} bufferWidth
 * @property {number} bufferHeight
 * @property {number} bufferAddr
 * @property {number} bufferBits
 * @property {number} bufferLeft
 * @property {number} interruptRate
 */

/**
 * @class VT100Video
 * @unrestricted
 * @property {VT100VideoConfig} config
 */
export default class VT100Video extends Monitor {
    /**
     * VT100Video(idMachine, idDevice, config)
     *
     * The VT100Video component can be configured with the following config properties:
     *
     *      bufferWidth: the width of a single frame buffer row, in pixels (eg, 256)
     *      bufferHeight: the number of frame buffer rows (eg, 224)
     *      bufferAddr: the starting address of the frame buffer (eg, 0x2400)
     *      bufferRAM: true to use existing RAM (default is false)
     *      bufferBits: the number of bits per column (default is 1)
     *      bufferLeft: the bit position of the left-most pixel in a byte (default is 0; CGA uses 7)
     *      interruptRate: normally the same as (or some multiple of) refreshRate (eg, 120)
     *      refreshRate: how many times updateMonitor() should be performed per second (eg, 60)
     *
     *  In addition, if a text-only display is being emulated, define the following properties:
     *
     *      fontROM: URL of font ROM
     *      fontColor: default is white
     *      cellWidth: number (eg, 10 for VT100)
     *      cellHeight: number (eg, 10 for VT100)
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
     * @this {VT100Video}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        /*
         * Setting the device's "messages" property eliminates the need for printf() calls to include this value;
         * any printf() that omits a MESSAGE parameter will use this value by default.
         */
        this.messages = MESSAGE.VIDEO;

        this.addrBuffer = this.config['bufferAddr'];
        this.fUseRAM = this.config['bufferRAM'];

        this.nColsBuffer = this.config['bufferWidth'];
        this.nRowsBuffer = this.config['bufferHeight'];

        this.cxCellDefault = this.cxCell = this.config['cellWidth'] || 1;
        this.cyCellDefault = this.cyCell = this.config['cellHeight'] || 1;

        this.abFontData = null;
        this.fDotStretcher = false;

        this.nBitsPerPixel = this.config['bufferBits'] || 1;
        this.iBitFirstPixel = this.config['bufferLeft'] || 0;

        this.rateInterrupt = this.config['interruptRate'];
        this.rateRefresh = this.config['refreshRate'] || 60;

        this.cxMonitorCell = (this.cxMonitor / this.nColsBuffer)|0;
        this.cyMonitorCell = (this.cyMonitor / this.nRowsBuffer)|0;

        /*
         * Now that we've finished using nRowsBuffer to help define the monitor size, we add one more
         * row for text modes, to account for the VT100's scroll line buffer (used for smooth scrolling).
         */
        if (this.cyCell > 1) {
            this.nRowsBuffer++;
            this.bScrollOffset = 0;
            this.fSkipSingleCellUpdate = false;
        }

        this.busMemory = /** @type {Bus} */ (this.findDevice(this.config['bus']));
        this.initBuffers();

        this.abFontData = this.config['fontROM'];
        this.createFonts();

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
     * simply force an update.
     *
     * @this {VT100Video}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (!this.time.isRunning()) this.updateScreen();
    }

    /**
     * initBuffers()
     *
     * @this {VT100Video}
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

        this.sizeBuffer = 0;
        if (!this.fUseRAM) {
            this.sizeBuffer = ((this.cxBuffer * this.nBitsPerPixel) >> 3) * this.cyBuffer;
            if (!this.busMemory.addBlocks(this.addrBuffer, this.sizeBuffer, Memory.TYPE.READWRITE)) {
                return false;
            }
        }

        /*
         * Since we will read video data from the bus at its default width, get that width now;
         * that width will also determine the size of a cell.
         */
        this.cellWidth = this.busMemory.dataWidth;

        /*
         * We add an extra column per row to store the visible line length at the start of every row.
         */
        this.initCache((this.nColsBuffer + 1) * this.nRowsBuffer);

        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = cxBuffer;
        this.canvasBuffer.height = cyBuffer;
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        this.aFonts = {};
        this.initColors();

        /*
         * Beyond fonts, VT100 support requires that we maintain a number of additional properties:
         *
         *      rateMonitor: must be either 50 or 60 (defaults to 60); we don't emulate the monitor refresh rate,
         *      but we do need to keep track of which rate has been selected, because that affects the number of
         *      "fill lines" present at the top of the VT100's frame buffer: 2 lines for 60Hz, 5 lines for 50Hz.
         *
         *      The VT100 July 1982 Technical Manual, p. 4-89, shows the following sample frame buffer layout:
         *
         *                  00  01  02  03  04  05  06  07  08  09  0A  0B  0C  0D  0E  0F
         *                  --------------------------------------------------------------
         *          0x2000: 7F  70  03  7F  F2  D0  7F  70  06  7F  70  0C  7F  70  0F  7F
         *          0x2010: 70  03  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..
         *          ...
         *          0x22D0: 'D' 'A' 'T' 'A' ' ' 'F' 'O' 'R' ' ' 'F' 'I' 'R' 'S' 'T' ' ' 'L'
         *          0x22E0: 'I' 'N' 'E' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
         *          ...
         *          0x2320: 7F  F3  23  'D' 'A' 'T' 'A' ' ' 'F' 'O' 'R' ' ' 'S' 'E' 'C' 'O'
         *          0x2330: 'N' 'D' ' ' 'L' 'I' 'N' 'E' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' ' '
         *          ...
         *          0x2BE0: ' ' ' ' 'E' 'N' 'D' ' ' 'O' 'F' ' ' 'L' 'A' 'S' 'T' ' ' 'L' 'I'
         *          0x2BF0: 'N' 'E' 7F  70  06  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..  ..
         *          0x2C00: [AVO SCREEN RAM, IF ANY, BEGINS HERE]
         *
         *      ERRATA: The manual claims that if you change the byte at 0x2002 from 03 to 09, the number of "fill
         *      lines" will change from 2 to 5 (for 50Hz operation), but it shows 06 instead of 0C at location 0x200B;
         *      if you follow the links, it's pretty clear that byte has to be 0C to yield 5 "fill lines".  Since the
         *      address following the terminator at 0x2006 points to itself, it never makes sense for that terminator
         *      to be used EXCEPT at the end of the frame buffer.
         *
         *      As an alternative to tracking the monitor refresh rate, we could hard-code some knowledge about how
         *      the VT100's 8080 code uses memory, and simply ignore lines below address 0x22D0.  But the VT100 Video
         *      Processor makes no such assumption, and it would also break our test code in createFonts(), which
         *      builds a contiguous image of test data starting at the default frame buffer address (0x2000).
         */
        this.rateMonitor = 60;

        /*
         * The default character-selectable attribute (reverse video vs. underline) is controlled by fUnderline.
         */
        this.fUnderline = false;
        this.abLineBuffer = new Array(this.nColsBuffer);

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
     * createFonts()
     *
     * @this {VT100Video}
     * @returns {boolean}
     */
    createFonts()
    {
        /*
         * We retain abFontData in case we have to rebuild the fonts (eg, when we switch from 80 to 132 columns)
         */
        if (this.abFontData) {
            this.fDotStretcher = true;
            this.aFonts[VT100Video.VT100.FONT.NORML] = [
                this.createFontVariation(this.cxCell, this.cyCell),
                this.createFontVariation(this.cxCell, this.cyCell, this.fUnderline)
            ];
            this.aFonts[VT100Video.VT100.FONT.DWIDE] = [
                this.createFontVariation(this.cxCell*2, this.cyCell),
                this.createFontVariation(this.cxCell*2, this.cyCell, this.fUnderline)
            ];
            this.aFonts[VT100Video.VT100.FONT.DHIGH] = this.aFonts[VT100Video.VT100.FONT.DHIGH_BOT] = [
                this.createFontVariation(this.cxCell*2, this.cyCell*2),
                this.createFontVariation(this.cxCell*2, this.cyCell*2, this.fUnderline)
            ];
            return true;
        }
        return false;
    }

    /**
     * createFontVariation(cxCell, cyCell, fUnderline)
     *
     * This creates a 16x16 character grid for the requested font variation.  Variations include:
     *
     *      1) no variation (cell size is this.cxCell x this.cyCell)
     *      2) double-wide characters (cell size is this.cxCell*2 x this.cyCell)
     *      3) double-high double-wide characters (cell size is this.cxCell*2 x this.cyCell*2)
     *      4) any of the above with either reverse video or underline enabled (default is neither)
     *
     * @this {VT100Video}
     * @param {number} cxCell is the target width of each character in the grid
     * @param {number} cyCell is the target height of each character in the grid
     * @param {boolean} [fUnderline] (null for unmodified font, false for reverse video, true for underline)
     * @returns {Object}
     */
    createFontVariation(cxCell, cyCell, fUnderline)
    {
        this.printf("createFontVariation(cxCell=%d, cyCell=%d, fUnderline=%b\n", cxCell, cyCell, fUnderline);

        /*
         * On a VT100, cxCell,cyCell is initially 10,10, but may change to 9,10 for 132-column mode.
         */
        this.assert(cxCell == this.cxCell || cxCell == this.cxCell*2);
        this.assert(cyCell == this.cyCell || cyCell == this.cyCell*2);

        /*
         * Create a font canvas that is both 16 times the target character width and the target character height,
         * ensuring that it will accommodate 16x16 characters (for a maximum of 256).  Note that the VT100 font ROM
         * defines only 128 characters, so that canvas will contain only 16x8 entries.
         */
        let nFontBytesPerChar = this.cxCellDefault <= 8? 8 : 16;
        let nFontByteOffset = nFontBytesPerChar > 8? 15 : 0;
        let nChars = this.abFontData.length / nFontBytesPerChar;

        /*
         * The absence of a boolean for fUnderline means that both fReverse and fUnderline are "falsey".  The presence
         * of a boolean means that fReverse will be true OR fUnderline will be true, but NOT both.
         */
        let fReverse = (fUnderline === false);

        let font = {cxCell: cxCell, cyCell: cyCell};
        font.canvas = document.createElement("canvas");
        font.canvas.width = cxCell * 16;
        font.canvas.height = cyCell * (nChars / 16);
        font.context = font.canvas.getContext("2d");

        let imageChar = font.context.createImageData(cxCell, cyCell);

        for (let iChar = 0; iChar < nChars; iChar++) {
            for (let y = 0, yDst = y; y < this.cyCell; y++) {
                let offFontData = iChar * nFontBytesPerChar + ((nFontByteOffset + y) & (nFontBytesPerChar - 1));
                let bits = (fUnderline && y == 8? 0xff : this.abFontData[offFontData]);
                for (let nRows = 0; nRows < (cyCell / this.cyCell); nRows++) {
                    let bitPrev = 0;
                    for (let x = 0, xDst = x; x < this.cxCell; x++) {
                        /*
                         * While x goes from 0 to cxCell-1, obviously we will run out of bits after x is 7;
                         * since the final bit must be replicated all the way to the right edge of the cell
                         * (so that line-drawing characters seamlessly connect), we ensure that the effective
                         * shift count remains stuck at 7 once it reaches 7.
                         */
                        let bitReal = bits & (0x80 >> (x > 7? 7 : x));
                        let bit = (this.fDotStretcher && !bitReal && bitPrev)? bitPrev : bitReal;
                        for (let nCols = 0; nCols < (cxCell / this.cxCell); nCols++) {
                            if (fReverse) bit = !bit;
                            this.setPixel(imageChar, xDst, yDst, bit? 1 : 0);
                            xDst++;
                        }
                        bitPrev = bitReal;
                    }
                    yDst++;
                }
            }
            /*
             * (iChar >> 4) performs the integer equivalent of Math.floor(iChar / 16), and (iChar & 0xf) is the equivalent of (iChar % 16).
             */
            font.context.putImageData(imageChar, (iChar & 0xf) * cxCell, (iChar >> 4) * cyCell);
        }
        return font;
    }

    /**
     * updateDimensions(nCols, nRows)
     *
     * Called from the Chip component whenever the monitor dimensions have been dynamically altered.
     *
     * @this {VT100Video}
     * @param {number} nCols (should be either 80 or 132; 80 is the default)
     * @param {number} nRows (should be either 24 or 14; 24 is the default)
     */
    updateDimensions(nCols, nRows)
    {
        this.printf("updateDimensions(%d,%d)\n", nCols, nRows);
        this.nColsBuffer = nCols;
        /*
         * Even when the number of effective rows is 14 (or 15 counting the scroll line buffer), we want
         * to leave the number of rows at 24 (or 25 counting the scroll line buffer), because the VT100 doesn't
         * actually change character height (only character width).
         *
         *      this.nRowsBuffer = nRows+1; // +1 for scroll line buffer
         */
        this.cxCell = this.cxCellDefault;
        if (nCols > 80) this.cxCell--;      // VT100 font cells are 9x10 instead of 10x10 in 132-column mode
        if (this.initBuffers()) {
            this.createFonts();
        }
    }

    /**
     * updateRate(nRate)
     *
     * Called from the Chip component whenever the monitor refresh rate has been dynamically altered.
     *
     * @this {VT100Video}
     * @param {number} nRate (should be either 50 or 60; 60 is the default)
     */
    updateRate(nRate)
    {
        this.printf("updateRate(%d)\n", nRate);
        this.rateMonitor = nRate;
    }

    /**
     * updateScrollOffset(bScroll)
     *
     * Called from the Chip component whenever the monitor scroll offset has been dynamically altered.
     *
     * @this {VT100Video}
     * @param {number} bScroll
     */
    updateScrollOffset(bScroll)
    {
        this.printf("updateScrollOffset(%d)\n", bScroll);
        if (this.bScrollOffset !== bScroll) {
            this.bScrollOffset = bScroll;
            /*
             * WARNING: If we immediately redraw the monitor on the first wrap of the scroll offset back to zero,
             * we end up "slamming" the monitor's contents back down again, because it seems that the frame buffer
             * contents haven't actually been scrolled yet.  So we redraw now ONLY if bScroll is non-zero, lest
             * we ruin the smooth-scroll effect.
             *
             * And this change, while necessary, is not sufficient, because another intervening updateMonitor()
             * call could still occur before the frame buffer contents are actually scrolled; and ordinarily, if the
             * buffer hasn't changed, updateMonitor() would do nothing, but alas, if the cursor happens to get toggled
             * in the interim, updateMonitor() will want to update exactly ONE cell.
             *
             * So we deal with that by setting the fSkipSingleCellUpdate flag.  Now of course, there's no guarantee
             * that the next update of only ONE cell will always be a cursor update, but even if it isn't, skipping
             * that update doesn't seem like a huge cause for concern.
             */
            if (bScroll) {
                this.updateMonitor(true);
            } else {
                this.fSkipSingleCellUpdate = true;
            }
        }
    }

    /**
     * getRefreshTime()
     *
     * @this {VT100Video}
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
     * @this {VT100Video}
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
        /*
         * Because the VT100 frame buffer can be located anywhere in RAM (above 0x2000), we must defer this
         * test code until the powerUp() notification handler is called, when all RAM has (hopefully) been allocated.
         *
         * NOTE: The following test image was useful for early testing, but a *real* VT100 doesn't display a test image,
         * so this code is no longer enabled by default.  Remove MAXDEBUG if you want to see it again.
         */
        if (VT100Video.MAXDEBUG && !this.test) {
            /*
             * Build a test image in the VT100 frame buffer; we'll mimic the "SET-UP A" image, since it uses
             * all the font variations.  The process involves iterating over 0-based row numbers -2 (or -5 if 50Hz
             * operation is selected) through 24, checking aLineData for a matching row number, and converting the
             * corresponding string(s) to appropriate byte values.  Negative row numbers correspond to "fill lines"
             * and do not require a row entry.  If multiple strings are present for a given row, we invert the
             * default character attribute for subsequent strings.  An empty array ends the image build process.
             */
            let aLineData = {
                 0: [VT100Video.VT100.FONT.DHIGH, 'SET-UP A'],
                 2: [VT100Video.VT100.FONT.DWIDE, 'TO EXIT PRESS "SET-UP"'],
                22: [VT100Video.VT100.FONT.NORML, '        T       T       T       T       T       T       T       T       T'],
                23: [VT100Video.VT100.FONT.NORML, '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890'],
                24: []
            };
            let addr = this.addrBuffer;
            let addrNext = -1, font = -1;
            let b, nFill = (this.rateMonitor == 60? 2 : 5);
            for (let iRow = -nFill; iRow < this.nRowsBuffer; iRow++) {
                let lineData = aLineData[iRow];
                if (addrNext >= 0) {
                    let fBreak = false;
                    addrNext = addr + 2;
                    if (!lineData) {
                        if (font == VT100Video.VT100.FONT.DHIGH) {
                            lineData = aLineData[iRow-1];
                            font = VT100Video.VT100.FONT.DHIGH_BOT;
                        }
                    }
                    else {
                        if (lineData.length) {
                            font = lineData[0];
                        } else {
                            addrNext = addr - 1;
                            fBreak = true;
                        }
                    }
                    b = (font & VT100Video.VT100.LINEATTR.FONTMASK) | ((addrNext >> 8) & VT100Video.VT100.LINEATTR.ADDRMASK) | VT100Video.VT100.LINEATTR.ADDRBIAS;
                    this.busMemory.writeData(addr++, b);
                    this.busMemory.writeData(addr++, addrNext & 0xff);
                    if (fBreak) break;
                }
                if (lineData) {
                    let attr = 0;
                    for (let j = 1; j < lineData.length; j++) {
                        let s = lineData[j];
                        for (let k = 0; k < s.length; k++) {
                            this.busMemory.writeData(addr++, s.charCodeAt(k) | attr);
                        }
                        attr ^= 0x80;
                    }
                }
                this.busMemory.writeData(addr++, VT100Video.VT100.LINETERM);
                addrNext = addr;
            }
            this.test = true;
        }
    }

    /**
     * initColors()
     *
     * @this {VT100Video}
     */
    initColors()
    {
        let rgbBlack  = [0x00, 0x00, 0x00, 0xff];
        let rgbWhite  = [0xff, 0xff, 0xff, 0xff];
        this.nColors = (1 << this.nBitsPerPixel);
        this.aRGB = new Array(this.nColors);
        this.aRGB[0] = rgbBlack;
        this.aRGB[1] = rgbWhite;
    }

    /**
     * setPixel(image, x, y, bPixel)
     *
     * @this {VT100Video}
     * @param {Object} image
     * @param {number} x
     * @param {number} y
     * @param {number} bPixel (ie, an index into aRGB)
     */
    setPixel(image, x, y, bPixel)
    {
        let index = (x + y * image.width);
        let rgb = this.aRGB[bPixel];
        index *= rgb.length;
        image.data[index] = rgb[0];
        image.data[index+1] = rgb[1];
        image.data[index+2] = rgb[2];
        image.data[index+3] = rgb[3];
    }

    /**
     * updateChar(idFont, col, row, data, context)
     *
     * Updates a particular character cell (row,col) in the associated window.
     *
     * @this {VT100Video}
     * @param {number} idFont
     * @param {number} col
     * @param {number} row
     * @param {number} data
     * @param {Object} [context]
     */
    updateChar(idFont, col, row, data, context)
    {
        let bChar = data & 0x7f;
        let font = this.aFonts[idFont][(data & 0x80)? 1 : 0];
        if (!font) return;

        let xSrc = (bChar & 0xf) * font.cxCell;
        let ySrc = (bChar >> 4) * font.cyCell;

        let xDst, yDst, cxDst, cyDst;

        let cxSrc = font.cxCell;
        let cySrc = font.cyCell;

        if (context) {
            xDst = col * this.cxCell;
            yDst = row * this.cyCell;
            cxDst = this.cxCell;
            cyDst = this.cyCell;
        } else {
            xDst = col * this.cxMonitorCell;
            yDst = row * this.cyMonitorCell;
            cxDst = this.cxMonitorCell;
            cyDst = this.cyMonitorCell;
        }

        /*
         * If font.cxCell > this.cxCell, then we assume the caller wants to draw a double-wide character,
         * so we will double xDst and cxDst.
         */
        if (font.cxCell > this.cxCell) {
            xDst *= 2;
            cxDst *= 2;
            this.assert(font.cxCell == this.cxCell * 2);
        }

        /*
         * If font.cyCell > this.cyCell, then we rely on idFont to indicate whether the top half or bottom half
         * of the character should be drawn.
         */
        if (font.cyCell > this.cyCell) {
            if (idFont == VT100Video.VT100.FONT.DHIGH_BOT) ySrc += this.cyCell;
            cySrc = this.cyCell;
            this.assert(font.cyCell == this.cyCell * 2);
        }

        if (context) {
            context.drawImage(font.canvas, xSrc, ySrc, cxSrc, cySrc, xDst, yDst, cxDst, cyDst);
        } else {
            xDst += this.xMonitorOffset;
            yDst += this.yMonitorOffset;
            this.contextMonitor.drawImage(font.canvas, xSrc, ySrc, cxSrc, cySrc, xDst, yDst, cxDst, cyDst);
        }
    }

    /**
     * updateMonitor(fForced)
     *
     * Forced updates are generally internal updates triggered by an I/O operation or other state change,
     * while non-forced updates are periodic "refresh" updates.
     *
     * @this {VT100Video}
     * @param {boolean} [fForced]
     */
    updateMonitor(fForced)
    {
        let fUpdate = true;
        if (!fForced) {
            if (this.rateInterrupt) {
                this.cpu.requestINTR(4);
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
        }
        if (!fUpdate) {
            return;
        }
        this.updateScreen(fForced);
    }

    /**
     * updateScreen(f)
     *
     * Propagates the video buffer to the cell cache and updates the screen with any changes on the monitor.
     *
     * For every cell in the video buffer, compare it to the cell stored in the cell cache, render if it differs,
     * and then update the cell cache to match.  Since initCache() sets every cell in the cell cache to an
     * invalid value, we're assured that the next call to updateScreen() will redraw the entire (visible) video buffer.
     *
     * @this {VT100Video}
     * @param {boolean} [fForced]
     */
    updateScreen(fForced)
    {
        let nRows = 0;
        let font, fontNext = -1;
        let nFill = (this.rateMonitor == 60? 2 : 5);
        let iCell = 0, cUpdated = 0, iCellUpdated = -1;

        let addrNext = this.addrBuffer;
        this.assert(this.abLineBuffer.length == this.nColsBuffer);

        while (nRows < this.nRowsBuffer) {
            /*
             * Populate the line buffer
             */
            let nCols = 0;
            let addr = addrNext;
            let nColsVisible = this.nColsBuffer;
            font = fontNext;
            if (font != VT100Video.VT100.FONT.NORML) nColsVisible >>= 1;
            while (true) {
                let data = this.busMemory.readData(addr++);
                if ((data & VT100Video.VT100.LINETERM) == VT100Video.VT100.LINETERM) {
                    let b = this.busMemory.readData(addr++);
                    fontNext = b & VT100Video.VT100.LINEATTR.FONTMASK;
                    addrNext = ((b & VT100Video.VT100.LINEATTR.ADDRMASK) << 8) | this.busMemory.readData(addr);
                    addrNext += (b & VT100Video.VT100.LINEATTR.ADDRBIAS)? VT100Video.VT100.ADDRBIAS_LO : VT100Video.VT100.ADDRBIAS_HI;
                    break;
                }
                if (nCols < nColsVisible) {
                    this.abLineBuffer[nCols++] = data;
                } else {
                    break;                          // ideally, we would wait for a LINETERM byte, but it's not safe to loop without limit
                }
            }

            /*
             * Skip the first few "fill lines"
             */
            if (nFill) {
                nFill--;
                continue;
            }

            /*
             * Pad the line buffer as needed
             */
            while (nCols < this.abLineBuffer.length) {
                this.abLineBuffer[nCols++] = 0;     // character code 0 is a empty font character
            }

            /*
             * Display the line buffer; ordinarily, the font number would be valid after processing the "fill lines",
             * but if the buffer isn't initialized yet, those lines might be missing, so the font number might not be set.
             */
            if (font >= 0) {
                /*
                 * Cell cache logic is complicated by the fact that a line may be single-width one frame and double-width
                 * the next.  So we store the visible line length at the start of each row in the cache, which must match if
                 * the cache can be considered valid for the current line.
                 */
                let fLineCacheValid = this.fCacheValid && (this.aCacheCells[iCell] == nColsVisible);
                this.aCacheCells[iCell++] = nColsVisible;
                for (let iCol = 0; iCol < nCols; iCol++) {
                    let data = this.abLineBuffer[iCol];
                    if (!fLineCacheValid || data !== this.aCacheCells[iCell]) {
                        this.aCacheCells[iCellUpdated = iCell] = data;
                        this.updateChar(font, iCol, nRows, data, this.contextBuffer);
                        cUpdated++;
                    }
                    iCell++;
                }
            }
            nRows++;
        }
        this.fCacheValid = true;

        this.assert(font < 0 || iCell === this.nCacheCells);

        if (!fForced && this.fSkipSingleCellUpdate && cUpdated == 1) {
            /*
             * We're going to blow off this update, since it comes on the heels of a smooth-scroll that *may*
             * not be completely finished yet, and at the same time, we're going to zap the only updated cell
             * cache entry, to guarantee that it's redrawn on the next update.
             */
            this.assert(iCellUpdated >= 0);
            /*
             * TODO: If I change the RECV rate to 19200 and enable smooth scrolling, I sometimes see a spurious
             * "H" on the bottom line after a long series of "HELLO WORLD!\r\n" tests.  Dumping video memory shows
             * "HELLO WORLD!" on 23 lines and an "H" on the 24th line, so it's really there.  But strangely, if
             * I then press SET-UP two times, the restored monitor does NOT have the spurious "H".  So somehow the
             * firmware knows what should and shouldn't be on-screen.
             *
             * Possible VT100 firmware bug?  I'm not sure.  Anyway, this DEBUG-only code is here to help trap
             * that scenario, until I figure it out.
             */
            if (VT100Video.DEBUG && (this.aCacheCells[iCellUpdated] & 0x7f) == 0x48) {
                this.printf("spurious 'H' character at offset %d\n", iCellUpdated);
            }
            this.aCacheCells[iCellUpdated] = -1;
            cUpdated = 0;
        }
        this.fSkipSingleCellUpdate = false;

        if ((cUpdated || fForced) && this.contextBuffer) {
            /*
             * We must subtract cyCell from cyBuffer to avoid displaying the extra "scroll line" that we normally
             * buffer, in support of smooth scrolling.  Speaking of which, we must also add bScrollOffset to ySrc
             * (well, ySrc is always relative to zero, so no add is actually required).
             */
            this.contextMonitor.drawImage(
                this.canvasBuffer,
                0,                                  // xSrc
                this.bScrollOffset,                 // ySrc
                this.cxBuffer,                      // cxSrc
                this.cyBuffer - this.cyCell,        // cySrc
                this.xMonitorOffset,                // xDst
                this.yMonitorOffset,                // yDst
                this.cxMonitorOffset,               // cxDst
                this.cyMonitorOffset                // cyDst
            );
        }
    }
}

VT100Video.VT100 = {
    /*
     * The following font IDs are nothing more than all the possible LINEATTR values masked with FONTMASK;
     * also, note that double-high implies double-wide; the VT100 doesn't support a double-high single-wide font.
     */
    FONT: {
        NORML:      0x60,       // normal font (eg, 10x10)
        DWIDE:      0x40,       // double-wide, single-high font (eg, 20x10)
        DHIGH:      0x20,       // technically, this means display only the TOP half of the double-high font (eg, 20x20)
        DHIGH_BOT:  0x00        // technically, this means display only the BOTTOM half of the double-high font (eg, 20x20)
    },
    LINETERM:       0x7F,
    LINEATTR: {
        ADDRMASK:   0x0F,
        ADDRBIAS:   0x10,       // 0x10 == ADDRBIAS_LO, 0x00 = ADDRBIAS_HI
        FONTMASK:   0x60,
        SCROLL:     0x80
    },
    ADDRBIAS_LO:    0x2000,
    ADDRBIAS_HI:    0x4000
};

VT100Video.CLASSES["VT100Video"] = VT100Video;
