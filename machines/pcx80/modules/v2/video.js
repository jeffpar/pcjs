/**
 * @fileoverview Implements the PCx80 Video component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MemoryX80 from "./memory.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import DumpAPI from "../../../modules/v2/dumpapi.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, MAXDEBUG, globals } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class VideoX80
 * @unrestricted
 */
export default class VideoX80 extends Component {
    /**
     * VideoX80(parmsVideo, canvas, context, textarea, container)
     *
     * The VideoX80 component can be configured with the following (parmsVideo) properties:
     *
     *      screenWidth: width of the screen canvas, in pixels
     *      screenHeight: height of the screen canvas, in pixels
     *      screenColor: background color of the screen canvas (default is black)
     *      screenRotate: the amount of counter-clockwise screen rotation required (eg, -90 or 270)
     *      aspectRatio (eg, 1.33)
     *      bufferAddr: the starting address of the frame buffer (eg, 0x2400)
     *      bufferRAM: true to use existing RAM (default is false)
     *      bufferFormat: if defined, one of the recognized formats in VideoX80.FORMATS (eg, "vt100")
     *      bufferCols: the width of a single frame buffer row, in pixels (eg, 256)
     *      bufferRows: the number of frame buffer rows (eg, 224)
     *      bufferBits: the number of bits per column (default is 1)
     *      bufferLeft: the bit position of the left-most pixel in a byte (default is 0; CGA uses 7)
     *      bufferRotate: the amount of counter-clockwise buffer rotation required (eg, -90 or 270)
     *      interruptRate: normally the same as (or some multiple of) refreshRate (eg, 120)
     *      refreshRate: how many times updateScreen() should be performed per second (eg, 60)
     *
     *  In addition, if a text-only display is being emulated, define the following properties:
     *
     *      fontROM: URL of font ROM
     *      fontColor: default is white
     *      cellWidth: number (eg, 10 for VT100)
     *      cellHeight: number (eg, 10 for VT100)
     *
     * We record all the above values now, but we defer creation of the frame buffer until our initBus()
     * handler is called.  At that point, we will also compute the extent of the frame buffer, determine the
     * appropriate "cell" size (ie, the number of pixels that updateScreen() will fetch and process at once),
     * and then allocate our cell cache.
     *
     * Why interruptRate in addition to refreshRate?  A higher interrupt rate is required for Space Invaders,
     * because even though the CRT refreshes at 60Hz, the CRT controller interrupts the CPU *twice* per
     * refresh (once after the top half of the screen has been redrawn, and again after the bottom half has
     * been redrawn), so we need an interrupt rate of 120Hz.  We pass the higher rate on to the CPU, so that
     * it will call updateScreen() more frequently, but we still limit our screen updates to every *other* call.
     *
     * bufferRotate is an alternative to screenRotate; you may set one or the other (but not both) to -90 to
     * enable different approaches to counter-clockwise 90-degree image rotation.  screenRotate uses canvas
     * transformation methods (translate(), rotate(), and scale()), while bufferRotate inverts the dimensions
     * of the off-screen buffer and then relies on setPixel() to "rotate" the data into the proper location.
     *
     * @this {VideoX80}
     * @param {Object} parmsVideo
     * @param {Object} [canvas]
     * @param {Object} [context]
     * @param {Object} [textarea]
     * @param {Object} [container]
     */
    constructor(parmsVideo, canvas, context, textarea, container)
    {
        super("Video", parmsVideo, MESSAGE.VIDEO);

        let video = this, sProp, sEvent;
        this.fGecko = WebLib.isUserAgent("Gecko/");

        this.cxScreen = parmsVideo['screenWidth'];
        this.cyScreen = parmsVideo['screenHeight'];

        this.addrBuffer = parmsVideo['bufferAddr'];
        this.fUseRAM = parmsVideo['bufferRAM'];

        let sFormat = parmsVideo['bufferFormat'];
        this.nFormat = sFormat && VideoX80.FORMATS[sFormat.toUpperCase()] || VideoX80.FORMAT.UNKNOWN;

        this.nColsBuffer = parmsVideo['bufferCols'];
        this.nRowsBuffer = parmsVideo['bufferRows'];

        this.cxCellDefault = this.cxCell = parmsVideo['cellWidth'] || 1;
        this.cyCellDefault = this.cyCell = parmsVideo['cellHeight'] || 1;
        this.abFontData = null;
        this.fDotStretcher = false;

        this.nBitsPerPixel = parmsVideo['bufferBits'] || 1;
        this.iBitFirstPixel = parmsVideo['bufferLeft'] || 0;

        this.rotateBuffer = parmsVideo['bufferRotate'];
        if (this.rotateBuffer) {
            this.rotateBuffer = this.rotateBuffer % 360;
            if (this.rotateBuffer > 0) this.rotateBuffer -= 360;
            if (this.rotateBuffer != -90) {
                this.printf(MESSAGE.NOTICE, "unsupported buffer rotation: %d\n", this.rotateBuffer);
                this.rotateBuffer = 0;
            }
        }

        this.rateInterrupt = parmsVideo['interruptRate'];
        this.rateRefresh = parmsVideo['refreshRate'] || 60;

        this.canvasScreen = canvas;
        this.contextScreen = context;
        this.textareaScreen = textarea;
        this.inputScreen = textarea || canvas || null;

        /*
         * These variables are here in case we want/need to add support for borders later...
         */
        this.xScreenOffset = this.yScreenOffset = 0;
        this.cxScreenOffset = this.cxScreen;
        this.cyScreenOffset = this.cyScreen;

        this.cxScreenCell = (this.cxScreen / this.nColsBuffer)|0;
        this.cyScreenCell = (this.cyScreen / this.nRowsBuffer)|0;

        /*
         * Now that we've finished using nRowsBuffer to help define the screen size, we add one more
         * row for text modes, to account for the VT100's scroll line buffer (used for smooth scrolling).
         */
        if (this.cyCell > 1) {
            this.nRowsBuffer++;
            this.bScrollOffset = 0;
            this.fSkipSingleCellUpdate = false;
        }

        /*
         * Support for disabling (or, less commonly, enabling) image smoothing, which all browsers
         * seem to support now (well, OK, I still have to test the latest MS Edge browser), despite
         * it still being labelled "experimental technology".  Let's hope the browsers standardize
         * on this.  I see other options emerging, like the CSS property "image-rendering: pixelated"
         * that's apparently been added to Chrome.  Sigh.
         */
        let fSmoothing = parmsVideo['smoothing'];
        let sSmoothing = WebLib.getURLParm('smoothing');
        if (sSmoothing) fSmoothing = (sSmoothing == "true");
        this.fSmoothing = fSmoothing;
        this.sSmoothing = WebLib.findProperty(this.contextScreen, 'imageSmoothingEnabled');

        this.rotateScreen = parmsVideo['screenRotate'];
        if (this.rotateScreen) {
            this.rotateScreen = this.rotateScreen % 360;
            if (this.rotateScreen > 0) this.rotateScreen -= 360;
            /*
             * TODO: Consider also disallowing any rotateScreen value if bufferRotate was already set; setting
             * both is most likely a mistake, but who knows, maybe someone wants to use both for 180-degree rotation?
             */
            if (this.rotateScreen != -90) {
                this.printf(MESSAGE.NOTICE, "unsupported screen rotation: %d\n", this.rotateScreen);
                this.rotateScreen = 0;
            } else {
                this.contextScreen.translate(0, this.cyScreen);
                this.contextScreen.rotate((this.rotateScreen * Math.PI)/180);
                this.contextScreen.scale(this.cyScreen/this.cxScreen, this.cxScreen/this.cyScreen);
            }
        }

        /*
         * Here's the gross code to handle full-screen support across all supported browsers.  The lack of standards
         * is exasperating; browsers can't agree on 'Fullscreen' (most common) or 'FullScreen' (least common), and while
         * some browsers honor other browser prefixes, most don't.  Event handlers tend to be more consistent (ie, all
         * lower-case).
         */
        this.container = container;
        if (this.container) {
            sProp = WebLib.findProperty(container, 'requestFullscreen') || WebLib.findProperty(container, 'requestFullScreen');
            if (sProp) {
                this.container.doFullScreen = container[sProp];
                sEvent = WebLib.findProperty(document, 'on', 'fullscreenchange');
                if (sEvent) {
                    let sFullScreen = WebLib.findProperty(document, 'fullscreenElement') || WebLib.findProperty(document, 'fullScreenElement');
                    document.addEventListener(sEvent, function onFullScreenChange() {
                        video.notifyFullScreen(document[sFullScreen] != null);
                    }, false);
                }
                sEvent = WebLib.findProperty(document, 'on', 'fullscreenerror');
                if (sEvent) {
                    document.addEventListener(sEvent, function onFullScreenError() {
                        video.notifyFullScreen();
                    }, false);
                }
            }
        }

        this.sFontROM = parmsVideo['fontROM'];
        if (this.sFontROM) {
            let sFileExt = StrLib.getExtension(this.sFontROM);
            if (sFileExt != "json") {
                this.sFontROM = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + DumpAPI.QUERY.FILE + '=' + this.sFontROM + '&' + DumpAPI.QUERY.FORMAT + '=' + DumpAPI.FORMAT.BYTES;
            }
            WebLib.getResource(this.sFontROM, null, true, function(sURL, sResponse, nErrorCode) {
                video.doneLoad(sURL, sResponse, nErrorCode);
            });
        }

        this.ledBindings = {};
    }

    /**
     * initBuffers()
     *
     * @this {VideoX80}
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

        this.sizeBuffer = 0;
        if (!this.fUseRAM) {
            this.sizeBuffer = ((this.cxBuffer * this.nBitsPerPixel) >> 3) * this.cyBuffer;
            if (!this.bus.addMemory(this.addrBuffer, this.sizeBuffer, MemoryX80.TYPE.VIDEO)) {
                return false;
            }
        }

        /*
         * imageBuffer is only used for graphics modes.  For text modes, we create a canvas
         * for each font and draw characters by drawing from the font canvas to the target canvas.
         */
        if (this.sizeBuffer) {
            this.imageBuffer = this.contextScreen.createImageData(cxBuffer, cyBuffer);
            this.nPixelsPerCell = (16 / this.nBitsPerPixel)|0;
            this.initCellCache(this.sizeBuffer >> 1);
        } else {
            /*
             * We add an extra column per row to store the visible line length at the start of every row.
             */
            this.initCellCache((this.nColsBuffer + 1) * this.nRowsBuffer);
        }

        this.canvasBuffer = document.createElement("canvas");
        this.canvasBuffer.width = cxBuffer;
        this.canvasBuffer.height = cyBuffer;
        this.contextBuffer = this.canvasBuffer.getContext("2d");

        this.aFonts = {};
        this.initColors();

        if (this.nFormat == VideoX80.FORMAT.VT100) {
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
             *      builds a contiguous screen of test data starting at the default frame buffer address (0x2000).
             */
            this.rateMonitor = 60;

            /*
             * The default character-selectable attribute (reverse video vs. underline) is controlled by fUnderline.
             */
            this.fUnderline = false;

            this.abLineBuffer = new Array(this.nColsBuffer);
        }

        /*
         * Our 'smoothing' parameter defaults to null (which we treat the same as undefined), which means that
         * image smoothing will be selectively enabled (ie, true for text modes, false for graphics modes); otherwise,
         * we'll set image smoothing to whatever value was provided for ALL modes -- assuming the browser supports it.
         */
        if (this.sSmoothing) {
            this.contextScreen[this.sSmoothing] = (this.fSmoothing == null? false /* (this.nFormat == VideoX80.FORMAT.VT100? true : false) */ : this.fSmoothing);
        }

        return true;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {VideoX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "refresh")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let video = this;

        /*
         * TODO: A more general-purpose binding mechanism would be nice someday....
         */
        if (sHTMLType == "led" || sHTMLType == "rled") {
            this.ledBindings[sBinding] = control;
            return true;
        }

        switch (sBinding) {
        case "fullScreen":
            this.bindings[sBinding] = control;
            if (this.container && this.container.doFullScreen) {
                control.onclick = function onClickFullScreen() {
                    video.printf(MESSAGE.DEBUG, "fullScreen()\n");
                    video.doFullScreen();
                };
            } else {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "FullScreen API not available\n");
                control.parentNode.removeChild(/** @type {Node} */ (control));
            }
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {VideoX80}
     * @param {ComputerX80} cmp
     * @param {BusX80} bus
     * @param {CPUStateX80} cpu
     * @param {DebuggerX80} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;

        /*
         * Allocate the frame buffer (as needed) along with all other buffers.
         */
        this.initBuffers();

        /*
         * If we have an associated keyboard, then ensure that the keyboard will be notified
         * whenever the canvas gets focus and receives input.
         */
        this.kbd = /** @type {KeyboardX80} */ (cmp.getMachineComponent("Keyboard"));
        if (this.kbd) {
            for (let s in this.ledBindings) {
                this.kbd.setBinding("led", s, this.ledBindings[s]);
            }
            if (this.canvasScreen) {
                this.kbd.setBinding(this.textareaScreen? "textarea" : "canvas", "screen", /** @type {HTMLElement} */ (this.inputScreen));
            }
        }

        let video = this;
        this.timerUpdateNext = this.cpu.addTimer(this.id, function() {
            video.updateScreen();
        });
        this.cpu.setTimer(this.timerUpdateNext, this.getRefreshTime());
        this.nUpdates = 0;

        if (!this.sFontROM) this.setReady();
    }

    /**
     * doneLoad(sURL, sFontData, nErrorCode)
     *
     * @this {VideoX80}
     * @param {string} sURL
     * @param {string} sFontData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sFontData, nErrorCode)
    {
        if (nErrorCode) {
            this.printf(MESSAGE.NOTICE, "Unable to load font ROM (error %d: %s)\n", nErrorCode, sURL);
            return;
        }

        Component.addMachineResource(this.idMachine, sURL, sFontData);

        try {
            /*
             * The most likely source of any exception will be here: parsing the JSON-encoded data.
             */
            let ab = eval("(" + sFontData + ")");

            let abFontData = ab['bytes'] || ab;

            if (!abFontData || !abFontData.length) {
                Component.error("Empty font ROM: " + sURL);
                return;
            }
            else if (abFontData.length == 1) {
                Component.error(abFontData[0]);
                return;
            }

            /*
             * Minimal font data validation, just to make sure we're not getting garbage from the server.
             */
            if (abFontData.length == 2048) {
                this.abFontData = abFontData;
                this.createFonts();
            }
            else {
                this.printf(MESSAGE.NOTICE, "Unrecognized font data length (%d)\n", abFontData.length);
                return;
            }

        } catch (e) {
            this.printf(MESSAGE.NOTICE, "Font ROM data error: %s\n", e.message);
            return;
        }

        /*
         * If we're still here, then we're ready!
         *
         * UPDATE: Per issue #21, I'm issuing setReady() *only* if a valid contextScreen exists *or* a Debugger is attached.
         *
         * TODO: Consider a more general-purpose solution for deciding whether or not the user wants to run in a "headless" mode.
         */
        if (this.contextScreen || this.dbg) this.setReady();
    }

    /**
     * createFonts()
     *
     * @this {VideoX80}
     * @returns {boolean}
     */
    createFonts()
    {
        /*
         * We retain abFontData in case we have to rebuild the fonts (eg, when we switch from 80 to 132 columns)
         */
        if (this.abFontData) {
            this.fDotStretcher = (this.nFormat == VideoX80.FORMAT.VT100);
            this.aFonts[VideoX80.VT100.FONT.NORML] = [
                this.createFontVariation(this.cxCell, this.cyCell),
                this.createFontVariation(this.cxCell, this.cyCell, this.fUnderline)
            ];
            this.aFonts[VideoX80.VT100.FONT.DWIDE] = [
                this.createFontVariation(this.cxCell*2, this.cyCell),
                this.createFontVariation(this.cxCell*2, this.cyCell, this.fUnderline)
            ];
            this.aFonts[VideoX80.VT100.FONT.DHIGH] = this.aFonts[VideoX80.VT100.FONT.DHIGH_BOT] = [
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
     * @this {VideoX80}
     * @param {number} cxCell is the target width of each character in the grid
     * @param {number} cyCell is the target height of each character in the grid
     * @param {boolean} [fUnderline] (null for unmodified font, false for reverse video, true for underline)
     * @returns {Object}
     */
    createFontVariation(cxCell, cyCell, fUnderline)
    {
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
     * powerUp(data, fRepower)
     *
     * @this {VideoX80}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (data) {
                if (!this.restore(data)) return false;
            }
        }
        /*
         * Because the VT100 frame buffer can be located anywhere in RAM (above 0x2000), we must defer this
         * test code until the powerUp() notification handler is called, when all RAM has (hopefully) been allocated.
         *
         * NOTE: The following test screen was useful for early testing, but a *real* VT100 doesn't display a test screen,
         * so this code is no longer enabled by default.  Remove MAXDEBUG if you want to see it again.
         */
        if (MAXDEBUG && this.nFormat == VideoX80.FORMAT.VT100) {
            /*
             * Build a test screen in the VT100 frame buffer; we'll mimic the "SET-UP A" screen, since it uses
             * all the font variations.  The process involves iterating over 0-based row numbers -2 (or -5 if 50Hz
             * operation is selected) through 24, checking aLineData for a matching row number, and converting the
             * corresponding string(s) to appropriate byte values.  Negative row numbers correspond to "fill lines"
             * and do not require a row entry.  If multiple strings are present for a given row, we invert the
             * default character attribute for subsequent strings.  An empty array ends the screen build process.
             */
            let aLineData = {
                 0: [VideoX80.VT100.FONT.DHIGH, 'SET-UP A'],
                 2: [VideoX80.VT100.FONT.DWIDE, 'TO EXIT PRESS "SET-UP"'],
                22: [VideoX80.VT100.FONT.NORML, '        T       T       T       T       T       T       T       T       T'],
                23: [VideoX80.VT100.FONT.NORML, '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890', '1234567890'],
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
                        if (font == VideoX80.VT100.FONT.DHIGH) {
                            lineData = aLineData[iRow-1];
                            font = VideoX80.VT100.FONT.DHIGH_BOT;
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
                    b = (font & VideoX80.VT100.LINEATTR.FONTMASK) | ((addrNext >> 8) & VideoX80.VT100.LINEATTR.ADDRMASK) | VideoX80.VT100.LINEATTR.ADDRBIAS;
                    this.bus.setByteDirect(addr++, b);
                    this.bus.setByteDirect(addr++, addrNext & 0xff);
                    if (fBreak) break;
                }
                if (lineData) {
                    let attr = 0;
                    for (let j = 1; j < lineData.length; j++) {
                        let s = lineData[j];
                        for (let k = 0; k < s.length; k++) {
                            this.bus.setByteDirect(addr++, s.charCodeAt(k) | attr);
                        }
                        attr ^= 0x80;
                    }
                }
                this.bus.setByteDirect(addr++, VideoX80.VT100.LINETERM);
                addrNext = addr;
            }
            /*
             * NOTE: By calling updateVT100() directly, we are bypassing any checks that might block the update.
             */
            this.updateVT100();
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {VideoX80}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return !fSave || this.save();
    }

    /**
     * save()
     *
     * This implements save support for the VideoX80 component.
     *
     * @this {VideoX80}
     * @returns {Object|null}
     */
    save()
    {
        let state = new State(this);
        state.set(0, []);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the VideoX80 component.
     *
     * @this {VideoX80}
     * @param {Object} data
     * @returns {boolean} true if restore successful, false if not
     */
    restore(data)
    {
        return true;
    }

    /**
     * updateDimensions(nCols, nRows)
     *
     * Called from the ChipSet component whenever the screen dimensions have been dynamically altered.
     *
     * @this {VideoX80}
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
     * Called from the ChipSet component whenever the monitor refresh rate has been dynamically altered.
     *
     * @this {VideoX80}
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
     * Called from the ChipSet component whenever the screen scroll offset has been dynamically altered.
     *
     * @this {VideoX80}
     * @param {number} bScroll
     */
    updateScrollOffset(bScroll)
    {
        this.printf("updateScrollOffset(%s)\n", bScroll);
        if (this.bScrollOffset !== bScroll) {
            this.bScrollOffset = bScroll;
            /*
             * WARNING: If we immediately redraw the screen on the first wrap of the scroll offset back to zero,
             * we end up "slamming" the screen's contents back down again, because it seems that the frame buffer
             * contents haven't actually been scrolled yet.  So we redraw now ONLY if bScroll is non-zero, lest
             * we ruin the smooth-scroll effect.
             *
             * And this change, while necessary, is not sufficient, because another intervening updateScreen()
             * call could still occur before the frame buffer contents are actually scrolled; and ordinarily, if the
             * buffer hasn't changed, updateScreen() would do nothing, but alas, if the cursor happens to get toggled
             * in the interim, updateScreen() will want to update exactly ONE cell.
             *
             * So we deal with that by setting the fSkipSingleCellUpdate flag.  Now of course, there's no guarantee
             * that the next update of only ONE cell will always be a cursor update, but even if it isn't, skipping
             * that update doesn't seem like a huge cause for concern.
             */
            if (bScroll) {
                this.updateScreen(true);
            } else {
                this.fSkipSingleCellUpdate = true;
            }
        }
    }

    /**
     * doFullScreen()
     *
     * @this {VideoX80}
     * @returns {boolean} true if request successful, false if not (eg, failed OR not supported)
     */
    doFullScreen()
    {
        let fSuccess = false;
        if (this.container) {
            if (this.container.doFullScreen) {
                /*
                 * Styling the container with a width of "100%" and a height of "auto" works great when the aspect ratio
                 * of our virtual screen is at least roughly equivalent to the physical screen's aspect ratio, but now that
                 * we support virtual VGA screens with an aspect ratio of 1.33, that's very much out of step with modern
                 * wide-screen monitors, which usually have an aspect ratio of 1.6 or greater.
                 *
                 * And unfortunately, none of the browsers I've tested appear to make any attempt to scale our container to
                 * the physical screen's dimensions, so the bottom of our screen gets clipped.  To prevent that, I reduce
                 * the width from 100% to whatever percentage will accommodate the entire height of the virtual screen.
                 *
                 * NOTE: Mozilla recommends both a width and a height of "100%", but all my tests suggest that using "auto"
                 * for height works equally well, so I'm sticking with it, because "auto" is also consistent with how I've
                 * implemented a responsive canvas when the browser window is being resized.
                 */
                let sWidth = "100%";
                let sHeight = "auto";
                if (screen && screen.width && screen.height) {
                    let aspectPhys = screen.width / screen.height;
                    let aspectVirt = this.cxScreen / this.cyScreen;
                    if (aspectPhys > aspectVirt) {
                        sWidth = Math.round(aspectVirt / aspectPhys * 100) + '%';
                    }
                    // TODO: We may need to someday consider the case of a physical screen with an aspect ratio < 1.0....
                }
                if (!this.fGecko) {
                    this.container.style.width = sWidth;
                    this.container.style.height = sHeight;
                } else {
                    /*
                     * Sadly, the above code doesn't work for Firefox, because as http://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
                     * explains:
                     *
                     *      'It's worth noting a key difference here between the Gecko and WebKit implementations at this time:
                     *      Gecko automatically adds CSS rules to the element to stretch it to fill the screen: "width: 100%; height: 100%".
                     *
                     * Which would be OK if Gecko did that BEFORE we're called, but apparently it does that AFTER, effectively
                     * overwriting our careful calculations.  So we style the inner element (canvasScreen) instead, which
                     * requires even more work to ensure that the canvas is properly centered.  FYI, this solution is consistent
                     * with Mozilla's recommendation for working around their automatic CSS rules:
                     *
                     *      '[I]f you're trying to emulate WebKit's behavior on Gecko, you need to place the element you want
                     *      to present inside another element, which you'll make fullscreen instead, and use CSS rules to adjust
                     *      the inner element to match the appearance you want.'
                     */
                    this.canvasScreen.style.width = sWidth;
                    this.canvasScreen.style.width = sWidth;
                    this.canvasScreen.style.display = "block";
                    this.canvasScreen.style.margin = "auto";
                }
                this.container.style.backgroundColor = "black";
                this.container.doFullScreen();
                fSuccess = true;
            }
            this.setFocus();
        }
        return fSuccess;
    }

    /**
     * notifyFullScreen(fFullScreen)
     *
     * @this {VideoX80}
     * @param {boolean} [fFullScreen] (undefined if there was a full-screen error)
     */
    notifyFullScreen(fFullScreen)
    {
        if (!fFullScreen && this.container) {
            if (!this.fGecko) {
                this.container.style.width = this.container.style.height = "";
            } else {
                this.canvasScreen.style.width = this.canvasScreen.style.height = "";
            }
        }
        this.printf("notifyFullScreen(%s)\n", fFullScreen);
    }

    /**
     * setFocus()
     *
     * @this {VideoX80}
     */
    setFocus()
    {
        if (this.inputScreen) this.inputScreen.focus();
    }

    /**
     * getRefreshTime()
     *
     * @this {VideoX80}
     * @returns {number} (number of milliseconds per refresh)
     */
    getRefreshTime()
    {
        return 1000 / Math.max(this.rateRefresh, this.rateInterrupt);
    }

    /**
     * initCellCache(nCells)
     *
     * Initializes the contents of our internal cell cache.
     *
     * @this {VideoX80}
     * @param {number} nCells
     */
    initCellCache(nCells)
    {
        this.nCellCache = nCells;
        this.fCellCacheValid = false;
        if (this.aCellCache === undefined || this.aCellCache.length != this.nCellCache) {
            this.aCellCache = new Array(this.nCellCache);
        }
    }

    /**
     * initColors()
     *
     * This creates an array of nColors, with additional OVERLAY_TOTAL colors tacked on to the end of the array.
     *
     * @this {VideoX80}
     */
    initColors()
    {
        let rgbBlack  = [0x00, 0x00, 0x00, 0xff];
        let rgbWhite  = [0xff, 0xff, 0xff, 0xff];
        this.nColors = (1 << this.nBitsPerPixel);
        this.aRGB = new Array(this.nColors + VideoX80.COLORS.OVERLAY_TOTAL);
        this.aRGB[0] = rgbBlack;
        this.aRGB[1] = rgbWhite;
        if (this.nFormat == VideoX80.FORMAT.SI1978) {
            let rgbGreen  = [0x00, 0xff, 0x00, 0xff];
            //noinspection UnnecessaryLocalVariableJS
            let rgbYellow = [0xff, 0xff, 0x00, 0xff];
            this.aRGB[this.nColors + VideoX80.COLORS.OVERLAY_TOP] = rgbYellow;
            this.aRGB[this.nColors + VideoX80.COLORS.OVERLAY_BOTTOM] = rgbGreen;
        }
    }

    /**
     * setPixel(image, x, y, bPixel)
     *
     * @this {VideoX80}
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
        if (bPixel && this.nFormat == VideoX80.FORMAT.SI1978) {
            if (x >= 208 && x < 236) {
                bPixel = this.nColors + VideoX80.COLORS.OVERLAY_TOP;
            }
            else if (x >= 28 && x < 72) {
                bPixel = this.nColors + VideoX80.COLORS.OVERLAY_BOTTOM;
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
     * updateChar(idFont, col, row, data, context)
     *
     * Updates a particular character cell (row,col) in the associated window.
     *
     * @this {VideoX80}
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
            xDst = col * this.cxScreenCell;
            yDst = row * this.cyScreenCell;
            cxDst = this.cxScreenCell;
            cyDst = this.cyScreenCell;
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
            if (idFont == VideoX80.VT100.FONT.DHIGH_BOT) ySrc += this.cyCell;
            cySrc = this.cyCell;
            this.assert(font.cyCell == this.cyCell * 2);
        }

        if (context) {
            context.drawImage(font.canvas, xSrc, ySrc, cxSrc, cySrc, xDst, yDst, cxDst, cyDst);
        } else {
            xDst += this.xScreenOffset;
            yDst += this.yScreenOffset;
            this.contextScreen.drawImage(font.canvas, xSrc, ySrc, cxSrc, cySrc, xDst, yDst, cxDst, cyDst);
        }
    }

    /**
     * updateVT100(fForced)
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateVT100(fForced)
    {
        let addrNext = this.addrBuffer, fontNext = -1;

        let font, nRows = 0;
        let nFill = (this.rateMonitor == 60? 2 : 5);
        let iCell = 0, cUpdated = 0, iCellUpdated = -1;

        this.assert(this.abLineBuffer.length == this.nColsBuffer);

        while (nRows < this.nRowsBuffer) {
            /*
             * Populate the line buffer
             */
            let nCols = 0;
            let addr = addrNext;
            let nColsVisible = this.nColsBuffer;
            font = fontNext;
            if (font != VideoX80.VT100.FONT.NORML) nColsVisible >>= 1;
            while (true) {
                let data = this.bus.getByteDirect(addr++);
                if ((data & VideoX80.VT100.LINETERM) == VideoX80.VT100.LINETERM) {
                    let b = this.bus.getByteDirect(addr++);
                    fontNext = b & VideoX80.VT100.LINEATTR.FONTMASK;
                    addrNext = ((b & VideoX80.VT100.LINEATTR.ADDRMASK) << 8) | this.bus.getByteDirect(addr);
                    addrNext += (b & VideoX80.VT100.LINEATTR.ADDRBIAS)? VideoX80.VT100.ADDRBIAS_LO : VideoX80.VT100.ADDRBIAS_HI;
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
                let fLineCacheValid = this.fCellCacheValid && (this.aCellCache[iCell] == nColsVisible);
                this.aCellCache[iCell++] = nColsVisible;
                for (let iCol = 0; iCol < nCols; iCol++) {
                    let data = this.abLineBuffer[iCol];
                    if (!fLineCacheValid || data !== this.aCellCache[iCell]) {
                        this.aCellCache[iCellUpdated = iCell] = data;
                        this.updateChar(font, iCol, nRows, data, this.contextBuffer);
                        cUpdated++;
                    }
                    iCell++;
                }
            }
            nRows++;
        }

        this.fCellCacheValid = true;

        this.assert(font < 0 || iCell === this.nCellCache);

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
             * I then press SET-UP two times, the restored screen does NOT have the spurious "H".  So somehow the
             * firmware knows what should and shouldn't be on-screen.
             *
             * Possible VT100 firmware bug?  I'm not sure.  Anyway, this DEBUG-only code is here to help trap
             * that scenario, until I figure it out.
             */
            if (DEBUG && (this.aCellCache[iCellUpdated] & 0x7f) == 0x48) {
                console.log("spurious character?");
            }
            this.aCellCache[iCellUpdated] = -1;
            cUpdated = 0;
        }
        this.fSkipSingleCellUpdate = false;

        if ((cUpdated || fForced) && this.contextBuffer) {
            /*
             * We must subtract cyCell from cyBuffer to avoid displaying the extra "scroll line" that we normally
             * buffer, in support of smooth scrolling.  Speaking of which, we must also add bScrollOffset to ySrc
             * (well, ySrc is always relative to zero, so no add is actually required).
             */
            this.contextScreen.drawImage(
                this.canvasBuffer,
                0,                                  // xSrc
                this.bScrollOffset,                 // ySrc
                this.cxBuffer,                      // cxSrc
                this.cyBuffer - this.cyCell,        // cySrc
                this.xScreenOffset,                 // xDst
                this.yScreenOffset,                 // yDst
                this.cxScreenOffset,                // cxDst
                this.cyScreenOffset                 // cyDst
            );
        }
    }

    /**
     * updateScreen(fForced)
     *
     * Propagates the video buffer to the cell cache and updates the screen with any changes.  Forced updates
     * are generally internal updates triggered by an I/O operation or other state change, while non-forced updates
     * are the periodic updates coming from the CPU.
     *
     * For every cell in the video buffer, compare it to the cell stored in the cell cache, render if it differs,
     * and then update the cell cache to match.  Since initCellCache() sets every cell in the cell cache to an
     * invalid value, we're assured that the next call to updateScreen() will redraw the entire (visible) video buffer.
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateScreen(fForced)
    {
        let fUpdate = true;

        if (!fForced) {
            if (this.rateInterrupt) {
                /*
                 * TODO: Incorporate these hard-coded interrupt vector numbers into configuration blocks.
                 */
                if (this.rateInterrupt == 120) {
                    if (!(this.nUpdates & 1)) {
                        /*
                         * On even updates, call cpu.requestINTR(1), and also update our copy of the screen.
                         */
                        this.cpu.requestINTR(1);
                    } else {
                        /*
                         * On odd updates, call cpu.requestINTR(2), but do NOT update our copy of the screen, because
                         * the machine has presumably only updated the top half of the frame buffer at this point; it will
                         * update the bottom half of the frame buffer after acknowledging this interrupt.
                         */
                        this.cpu.requestINTR(2);
                        fUpdate = false;
                    }
                } else {
                    this.cpu.requestINTR(4);
                }
            }

            /*
             * Since this is not a forced update, if our cell cache is valid AND we allocated our own buffer AND the buffer
             * is clean, then there's nothing to do.
             */
            if (fUpdate && this.fCellCacheValid && this.sizeBuffer) {
                if (this.bus.cleanMemory(this.addrBuffer, this.sizeBuffer)) {
                    fUpdate = false;
                }
            }
            this.cpu.setTimer(this.timerUpdateNext, this.getRefreshTime());
            this.nUpdates++;
        }

        if (!fUpdate) {
            return;
        }

        if (this.cxCell > 1) {
            this.updateScreenText(fForced);
        } else {
            this.updateScreenGraphics(fForced);
        }
    }

    /**
     * updateScreenText(fForced)
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateScreenText(fForced)
    {
        switch(this.nFormat) {
        case VideoX80.FORMAT.VT100:
            this.updateVT100(fForced);
            break;
        }
    }

    /**
     * updateScreenGraphics(fForced)
     *
     * @this {VideoX80}
     * @param {boolean} [fForced]
     */
    updateScreenGraphics(fForced)
    {
        let addr = this.addrBuffer;
        let addrLimit = addr + this.sizeBuffer;

        let iCell = 0;
        let nPixelShift = 1;

        let xBuffer = 0, yBuffer = 0;
        let xDirty = this.cxBuffer, xMaxDirty = 0, yDirty = this.cyBuffer, yMaxDirty = 0;

        let nShiftInit = 0;
        let nShiftPixel = this.nBitsPerPixel;
        let nMask = (1 << nShiftPixel) - 1;
        if (this.iBitFirstPixel) {
            nShiftPixel = -nShiftPixel;
            nShiftInit = 16 + nShiftPixel;
        }

        while (addr < addrLimit) {
            let data = this.bus.getShortDirect(addr);
            this.assert(iCell < this.aCellCache.length);
            if (this.fCellCacheValid && data === this.aCellCache[iCell]) {
                xBuffer += this.nPixelsPerCell;
            } else {
                this.aCellCache[iCell] = data;
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
            addr += 2; iCell++;
            if (xBuffer >= this.cxBuffer) {
                xBuffer = 0; yBuffer++;
                if (yBuffer > this.cyBuffer) break;
            }
        }

        this.fCellCacheValid = true;

        /*
         * Instead of blasting the ENTIRE imageBuffer into contextBuffer, and then blasting the ENTIRE
         * canvasBuffer onto contextScreen, even for the smallest change, let's try to be a bit smarter about
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
                //noinspection JSSuspiciousNameCombination
                xDirty = yDirty;
                cxDirty = cyDirty;
                yDirty = this.cxBuffer - (xDirtyOrig + cxDirtyOrig);
                cyDirty = cxDirtyOrig;
            }
            this.contextBuffer.putImageData(this.imageBuffer, 0, 0, xDirty, yDirty, cxDirty, cyDirty);
            /*
             * As originally noted in /machines/pcx86/modules/v2/video.js, I would prefer to draw only the dirty portion
             * of canvasBuffer, but there usually isn't a 1-1 pixel mapping between canvasBuffer and contextScreen, so
             * if we draw interior rectangles, we can end up with subpixel artifacts along the edges of those rectangles.
             */
            this.contextScreen.drawImage(this.canvasBuffer, 0, 0, this.canvasBuffer.width, this.canvasBuffer.height, 0, 0, this.cxScreen, this.cyScreen);
        }
    }

    /**
     * VideoX80.init()
     *
     * This function operates on every HTML element of class "video", extracting the
     * JSON-encoded parameters for the Video constructor from the element's "data-value"
     * attribute, invoking the constructor to create a Video component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeVideo = Component.getElementsByClass(APPCLASS, "video");
        for (let iVideo = 0; iVideo < aeVideo.length; iVideo++) {

            let element = aeVideo[iVideo];
            let parmsVideo = Component.getComponentParms(element);

            /*
             * We used to create the canvas element ourselves:
             *
             *      let canvas = document.createElement("canvas");
             *
             * and then update its properties to match those specified in parmsVideo:
             *
             *      canvas.setAttribute("class", "pcjs-canvas");
             *      canvas.setAttribute("width", parmsVideo['screenWidth']);
             *      canvas.setAttribute("height", parmsVideo['screenHeight']);
             *
             * but now we prefer to let the XSL template create the canvas element for us, so that the HTML
             * we inject into the page is as fully-formed as possible, keeping disruption of page layout to a
             * minimum.
             */
            let canvas, context;
            let aCanvas = Component.getElementsByClass("pcjs-canvas", "", element);
            if (aCanvas && aCanvas.length && aCanvas[0].getContext) {
                canvas = aCanvas[0];
                canvas.style.backgroundColor = parmsVideo['screenColor'];
                context = canvas.getContext("2d");
            } else {
                element.innerHTML = "<br>Missing &lt;canvas&gt; support. Please try a newer web browser.";
            }

            /*
             * The "contenteditable" attribute on a canvas element NOTICEABLY slows down canvas drawing on
             * Safari as soon as you give the canvas focus (ie, click away from the canvas, and drawing speeds
             * up; click on the canvas, and drawing slows down).  So the "transparent textarea hack" that we
             * once employed as only a work-around for Android devices is now our default.
             *
             *      canvas.setAttribute("contenteditable", "true");
             *
             * HACK: A canvas style of "auto" provides for excellent responsive canvas scaling in EVERY browser
             * except IE9/IE10, so I recalculate the appropriate CSS height every time the parent DIV is resized;
             * IE11 works without this hack, so we take advantage of the fact that IE11 doesn't identify as "MSIE".
             *
             * The other reason it's good to keep this particular hack limited to IE9/IE10 is that most other
             * browsers don't actually support an 'onresize' handler on anything but the window object.
             */
            if (WebLib.getUserAgent().indexOf("MSIE") >= 0) {
                element['onresize'] = function(eParent, eChild, cx, cy) {
                    return function onResizeVideo() {
                        eChild.style.height = (((eParent.clientWidth * cy) / cx) | 0) + "px";
                    };
                }(element, canvas, parmsVideo['screenWidth'], parmsVideo['screenHeight']);
                element['onresize']();
            }

            /*
             * The following is a related hack that allows the user to force the screen to use a particular aspect
             * ratio if an 'aspect' attribute or URL parameter is set.  Initially, it's just for testing purposes
             * until we figure out a better UI.  And note that we use our WebLib.addPageEvent() helper function to make
             * sure we don't trample any other 'onresize' handler(s) attached to the window object.
             */
            let aspect = +(parmsVideo['aspect'] || WebLib.getURLParm('aspect'));

            /*
             * No 'aspect' parameter yields NaN, which is falsey, and anything else must satisfy my arbitrary
             * constraints of 0.3 <= aspect <= 3.33, to prevent any useless (or worse, browser-blowing) results.
             */
            if (aspect && aspect >= 0.3 && aspect <= 3.33) {
                WebLib.addPageEvent('resize', function(eParent, eChild, aspectRatio) {
                    return function onResizeWindow() {
                        /*
                         * Since aspectRatio is the target width/height, we have:
                         *
                         *      eParent.clientWidth / eChild.style.height = aspectRatio
                         *
                         * which means that:
                         *
                         *      eChild.style.height = eParent.clientWidth / aspectRatio
                         *
                         * so for example, if aspectRatio is 16:9, or 1.78, and clientWidth = 640,
                         * then the calculated height should approximately 360.
                         */
                        eChild.style.height = ((eParent.clientWidth / aspectRatio)|0) + "px";
                    };
                }(element, canvas, aspect));
                window['onresize']();
            }

            /*
             * HACK: Android-based browsers, like the Silk (Amazon) browser and Chrome for Android, don't honor the
             * "contenteditable" attribute; that is, when the canvas receives focus, they don't activate the on-screen
             * keyboard.  So my fallback is to create a transparent textarea on top of the canvas.
             *
             * The parent DIV must have a style of "position:relative" (alternatively, a class of "pcjs-container"),
             * so that we can position the textarea using absolute coordinates.  Also, we don't want the textarea to be
             * visible, but we must use "opacity:0" instead of "visibility:hidden", because the latter seems to prevent
             * the element from receiving events.  These styling requirements are taken care of in components.css
             * (see references to the "pcjs-video-object" class).
             *
             * UPDATE: Unfortunately, Android keyboards like to compose whole words before transmitting any of the
             * intervening characters; our textarea's keyDown/keyUp event handlers DO receive intervening key events,
             * but their keyCode property is ZERO.  Virtually the only usable key event we receive is the Enter key.
             * Android users will have to use machines that include their own on-screen "soft keyboard", or use an
             * external keyboard.
             *
             * The following attempt to use a password-enabled input field didn't work any better on Android.  You could
             * clearly see the overlaid semi-transparent input field, but none of the input characters were passed along,
             * with the exception of the "Go" (Enter) key.
             *
             *      var input = document.createElement("input");
             *      input.setAttribute("type", "password");
             *      input.setAttribute("style", "position:absolute; left:0; top:0; width:100%; height:100%; opacity:0.5");
             *      element.appendChild(input);
             *
             * See this Chromium issue for more information: https://code.google.com/p/chromium/issues/detail?id=118639
             */
            let textarea;
            if (globals.browser) {
                textarea = document.createElement("textarea");
                /*
                * As noted in keyboard.js, the keyboard on an iOS device tends to pop up with the SHIFT key depressed,
                * which is not the initial keyboard state that the Keyboard component expects, so hopefully turning off
                * these "auto" attributes will help.
                */
                if (WebLib.isUserAgent("iOS")) {
                    textarea.setAttribute("autocapitalize", "off");
                    textarea.setAttribute("autocorrect", "off");
                    textarea.setAttribute("spellcheck", "false");
                    /*
                    * One of the problems on iOS devices is that after a soft-key control is clicked, we need to give
                    * focus back to the above textarea, usually by calling cmp.updateFocus(), but in doing so, iOS may
                    * also "zoom" the page rather jarringly.  While it's a simple matter to completely disable zooming,
                    * by fiddling with the page's viewport, that prevents the user from intentionally zooming.  A bit of
                    * Googling reveals that another way to prevent those jarring unintentional zooms is to simply set the
                    * font-size of the text control to 16px.  So that's what we do.
                    */
                    textarea.style.fontSize = "16px";
                }
                element.appendChild(textarea);
            }

            /*
             * Now we can create the Video object, record it, and wire it up to the associated document elements.
             */
            let video = new VideoX80(parmsVideo, canvas, context, textarea /* || input */, element);

            /*
             * Bind any video-specific controls (eg, the Refresh button). There are no essential controls, however;
             * even the "Refresh" button is just a diagnostic tool, to ensure that the screen contents are up-to-date.
             */
            Component.bindComponentControls(video, element, APPCLASS);
        }
    }
}

VideoX80.COLORS = {
    OVERLAY_TOP:    0,
    OVERLAY_BOTTOM: 1,
    OVERLAY_TOTAL:  2
};

VideoX80.FORMAT = {
    UNKNOWN:        0,
    SI1978:         1,
    VT100:          2
};

VideoX80.FORMATS = {
    "SI1978":       VideoX80.FORMAT.SI1978,
    "VT100":        VideoX80.FORMAT.VT100
};


VideoX80.VT100 = {
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

/*
 * Initialize every Video module on the page.
 */
WebLib.onInit(VideoX80.init);
