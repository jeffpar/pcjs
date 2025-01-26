/**
 * @fileoverview Simulates an LED Controller
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU   from "./cpu.js";
import Input from "./input.js";
import LED   from "./led.js";
import WebIO from "./webio.js";

/**
 * @typedef {Config} LEDCtrlConfig
 * @property {string} class
 * @property {Object} [bindings]
 * @property {number} [version]
 * @property {Array.<string>} [overrides]
 * @property {boolean} [wrap]
 * @property {string} [font]
 * @property {string} [rule]
 * @property {string} [pattern]
 * @property {Object} [patterns]
 * @property {string} [message]
 * @property {boolean} [toggleColor]
 * @property {Object} [colors]
 */

 /**
  * Since we currently don't use an external debugger, we have to define a dummy Debugger type.
  *
  * @typedef {Object} Debugger
  */

/**
 * LED Controller
 *
 * @class LEDCtrl
 * @unrestricted
 * @property {boolean} fWrap
 * @property {string} sFont
 * @property {string} sRule
 * @property {string} sPattern
 * @property {string} sMessage
 * @property {string} sMessageInit
 * @property {boolean} fToggleColor
 * @property {LED} leds
 * @property {Object} colorPalette
 * @property {string} colorDefault (obtained from the leds)
 * @property {string} colorSelected (set by updateColorSelection())
 * @property {Array.<string>} colors
 */
export default class LEDCtrl extends CPU {
    /**
     * LEDCtrl(idMachine, idDevice, config)
     *
     * @this {LEDCtrl}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {LEDCtrlConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        /**
         * These are grid "behavior" properties.  If 'wrap' is true, then any off-grid neighbor cell
         * locations are mapped to the opposite edge; otherwise, they are mapped to the LED "scratch" row.
         */
        this.fWrap = this.getDefaultBoolean('wrap', false);
        this.sFont = this.getDefaultString('font', "");
        this.font = this.sFont && LEDCtrl.FONTS[this.sFont] || LEDCtrl.FONTS["Helvetica"];
        this.sRule = this.getDefaultString('rule', "");
        this.sPattern = this.getDefaultString('pattern', "");
        this.setMessage(this.sMessageInit = this.getDefaultString('message', ""));

        /**
         * The 'toggleColor' property currently affects only grids that have a color palette: if true,
         * then only an LED's color is toggled; otherwise, only its state (ie, ON or OFF) is toggled.
         */
        this.fToggleColor = this.getDefaultBoolean('toggleColor', false);

        /**
         * Since all bindings should have been completed by super(), we can make a preliminary call
         * to getCounts() to determine how many counts are stored per LED, to preallocate a count buffer.
         */
        this.countBuffer = new Array(this.getCounts().length);

        /**
         * Get access to the LED device, so we can update its display.
         */
        let leds = /** @type {LED} */ (this.findDeviceByClass("LED", false));
        if (leds) {
            this.leds = leds;

            /**
             * If loadPattern() didn't load anything into the LED array, then call
             * clearBuffer(true), which performs a combination of clearBuffer() and drawBuffer().
             */
            if (!this.loadPattern()) leds.clearBuffer(true);

            /**
             * Get access to the Input device, so we can propagate its properties as needed.
             */
            this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
            let configInput = {
                "class":        "Input",
                "location":     [0, 0, leds.widthView, leds.heightView, leds.colsView, leds.rowsView],
                "drag":         !!(this.input && this.input.fDrag),
                "scroll":       !!(this.input && this.input.fScroll),
                "hexagonal":    leds.fHexagonal,
                "bindings":     {"surface": leds.idView}
            };

            let cpu = this;
            this.ledInput = new Input(idMachine, idDevice + "Input", configInput);
            this.ledInput.addInput(function onLEDInput(col, row) {
                cpu.onInput(col, row);
            });

            this.colors = [];
            this.colorDefault = leds.getDefaultColor();
            this.updateColorSelection(this.colorDefault);
            this.updateColorSwatches();
            this.updateBackgroundImage(this.config[LEDCtrl.BINDING.IMAGE_SELECTION]);

            /**
             * Establish an onCommand() handler.
             */
            this.addHandler(LED.HANDLER.COMMAND, this.onCommand.bind(this));
        }
    }

    /**
     * addBinding(binding, element)
     *
     * @this {LEDCtrl}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let cpu = this, elementInput, patterns;

        super.addBinding(binding, element);

        switch(binding) {
        case LEDCtrl.BINDING.COLOR_PALETTE:
        case LEDCtrl.BINDING.COLOR_SELECTION:
            element.onchange = function onSelectChange() {
                cpu.updateColorPalette(binding);
            };
            this.updateColorPalette();
            break;

        case LEDCtrl.BINDING.IMAGE_SELECTION:
            element.onchange = function onImageChange() {
                cpu.updateBackgroundImage();
            };
            break;

        case LEDCtrl.BINDING.PATTERN_SELECTION:
            this.addBindingOptions(element, this.buildPatternOptions(this.config[LEDCtrl.BINDING.PATTERN_SELECTION]), false, this.config['pattern']);
            element.onchange = function onPatternChange() {
                cpu.updatePattern();
            };
            break;

        case LEDCtrl.BINDING.SAVE:
            element.onclick = function onClickSave() {
                let sPattern = cpu.savePattern(true);
                let elementSymbol = cpu.bindings[LEDCtrl.BINDING.SYMBOL_INPUT];
                if (elementSymbol) {
                    sPattern = '"' + elementSymbol.value + '":"' + sPattern.replace(/^([0-9]+\/)*/, "") + '",';
                }
                cpu.printf("%s\n", sPattern);
            };
            break;

        case LEDCtrl.BINDING.SAVE_TO_URL:
            element.onclick = function onClickSaveToURL() {
                let sPattern = cpu.savePattern();
                cpu.printf("%s\n", sPattern);
                let href = window.location.href;
                if (href.indexOf('pattern=') >= 0) {
                    href = href.replace(/(pattern=)[^&]*/, "$1" + sPattern.replace(/\$/g, "$$$$"));
                } else {
                    href += ((href.indexOf('?') < 0)? '?' : '&') + "pattern=" + sPattern;
                }
                window.location = href;
            };
            break;

        case LEDCtrl.BINDING.SYMBOL_INPUT:
            elementInput = /** @type {HTMLInputElement} */ (element);
            elementInput.onkeypress = function onChangeSymbol(event) {
                elementInput.value = String.fromCharCode(event.charCode);
                let elementPreview = cpu.bindings[LEDCtrl.BINDING.SYMBOL_PREVIEW];
                if (elementPreview) elementPreview.textContent = elementInput.value;
                event.preventDefault();
            };
            break;

        default:
            if (binding.startsWith(LEDCtrl.BINDING.COLOR_SWATCH)) {
                element.onclick = function onClickColorSwatch() {
                    cpu.updateColorSwatches(binding);
                };
                break;
            }
            /**
             * This code allows you to bind a specific control (ie, a button) to a specific pattern;
             * however, it's preferable to use the PATTERN_SELECTION binding above, and use a single list.
             */
            patterns = this.config[LEDCtrl.BINDING.PATTERN_SELECTION];
            if (patterns && patterns[binding]) {
                element.onclick = function onClickPattern() {
                    cpu.loadPattern(binding);
                };
            }
        }
    }

    /**
     * buildPatternOptions(patterns)
     *
     * @this {LEDCtrl}
     * @param {Object} patterns
     * @returns {Object}
     */
    buildPatternOptions(patterns)
    {
        let options = {};
        for (let id in patterns) {
            let name = id;
            let lines = patterns[id];
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].indexOf("#N") == 0) {
                    name = lines[i].substr(2).trim();
                    break;
                }
            }
            options[name] = id;
        }
        return options;
    }

    /**
     * startClock(nCyclesTarget)
     *
     * @this {LEDCtrl}
     * @param {number} nCyclesTarget (0 to single-step)
     * @returns {number} (number of cycles actually "clocked")
     */
    startClock(nCyclesTarget = 0)
    {
        let nCyclesClocked = 0;
        if (nCyclesTarget >= 0) {
            let nActive, nCycles = 1;
            do {
                switch(this.sRule) {
                case LEDCtrl.RULES.ANIM4:
                    nActive = this.doCycling();
                    break;
                case LEDCtrl.RULES.LEFT1:
                    nCycles = nCyclesTarget || nCycles;
                    nActive = this.doShifting(nCycles);
                    break;
                case LEDCtrl.RULES.LIFE1:
                    nActive = this.doCounting();
                    break;
                }
                if (!nCyclesTarget) this.printf("active cells: %d\n", nActive);
                nCyclesClocked += nCycles;
            } while (nCyclesClocked < nCyclesTarget);
        }
        return nCyclesClocked;
    }

    /**
     * stopClock()
     *
     * @this {LEDCtrl}
     */
    stopClock()
    {
        return;         // unimplemented
    }

    /**
     * getClock()
     *
     * Returns the number of cycles executed so far during the current burst.
     *
     * @this {LEDCtrl}
     * @returns {number}
     */
    getClock()
    {
        return 0;       // unimplemented
    }

    /**
     * doCounting()
     *
     * Implements rule LIFE1 (straight-forward implementation of Conway's Game of Life rule "B3/S23").
     *
     * This iterates row-by-row and column-by-column.  It takes advantage of the one-dimensional LED
     * buffer layout to move through the entire grid with a "master" cell index (iCell) and corresponding
     * indexes for all 8 "neighboring" cells (iNO, iNE, iEA, iSE, iSO, iSW, iWE, and iNW), incrementing
     * them all in unison.
     *
     * The row and col variables are used only to detect when we are at the "edges" of the grid, and whether
     * (depending on the wrap setting) any north, east, south, or west indexes that are now "off the grid"
     * should be adjusted to the other side of the grid (or set to the dead "scratch" row at the end of the
     * grid if wrap is disabled).  Similarly, when we leave an "edge", those same indexes must be restored
     * to their normal positions, relative to the "master" index (iCell).
     *
     * The inline tests for whether iCell is at an edge are unavoidable, unless we break the logic up into
     * 5 discrete steps: one for the rectangle just inside the edges, and then four for each of the north,
     * east, south, and west edge strips.  But unless we really need that (presumably tiny) speed boost,
     * I'm inclined to keep the logic simple.
     *
     * The logic is still a bit cluttered by the all the edge detection checks (and the wrap checks within
     * each edge case), and perhaps I should have written two versions of this function (with and without wrap),
     * but again, that would produce more repetition of the rest of the game logic, so I'm still inclined to
     * leave it as-is.
     *
     * @this {LEDCtrl}
     * @returns {number}
     */
    doCounting()
    {
        let cActive = 0;
        let leds = this.leds;
        let buffer = leds.getBuffer();
        let bufferClone = leds.getBufferClone();
        let nCols = leds.colsView;
        let nRows = leds.rows;
        /**
         * The number of LED buffer elements per cell is an LED implementation detail that should not be
         * assumed, so we obtain it from the LED object, and use it to calculate the per-cell increment,
         * per-row increment, and per-grid increment; the latter gives us the offset of the LED buffer's
         * scratch row, which we rely upon when wrap is turned off.
         *
         * NOTE: Since we're only processing colsView, not cols, we must include nBufferIncExtra in nIncPerRow.
         */
        let nInc = leds.nBufferInc;
        let nIncPerRow = nCols * nInc + leds.nBufferIncExtra;
        let nIncPerGrid = nRows * nIncPerRow;

        let iCell = 0;
        let iCellDummy = nIncPerGrid;
        let iNO = iCell - nIncPerRow;
        let iNW = iNO - nInc;
        let iNE = iNO + nInc;
        let iWE = iCell - nInc;
        let iEA = iCell + nInc;
        let iSO = iCell + nIncPerRow;
        let iSW = iSO - nInc;
        let iSE = iSO + nInc;

        for (let row = 0; row < nRows; row++) {
            if (!row) {                         // at top (north) edge; restore will be done after the col loop ends
                if (!this.fWrap) {
                    iNO = iNW = iNE = iCellDummy;
                } else {
                    iNO += nIncPerGrid; iNW += nIncPerGrid; iNE += nIncPerGrid;
                }
            } else if (row == nRows - 1) {      // at bottom (south) edge
                if (!this.fWrap) {
                    iSO = iSW = iSE = iCellDummy;
                } else {
                    iSO -= nIncPerGrid; iSW -= nIncPerGrid; iSE -= nIncPerGrid;
                }
            }
            for (let col = 0; col < nCols; col++) {
                if (!col) {                     // at left (west) edge
                    if (!this.fWrap) {
                        iWE = iNW = iSW = iCellDummy;
                    } else {
                        iWE += nIncPerRow; iNW += nIncPerRow; iSW += nIncPerRow;
                    }
                } else if (col == 1) {          // just finished left edge, restore west indexes
                    if (!this.fWrap) {
                        iWE = iCell - nInc; iNW = iNO - nInc; iSW = iSO - nInc;
                    } else {
                        iWE -= nIncPerRow; iNW -= nIncPerRow; iSW -= nIncPerRow;
                    }
                } else if (col == nCols - 1) {  // at right (east) edge; restore will be done after the col loop ends
                    if (!this.fWrap) {
                        iEA = iNE = iSE = iCellDummy;
                    } else {
                        iEA -= nIncPerRow; iNE -= nIncPerRow; iSE -= nIncPerRow;
                    }
                }
                let state = buffer[iCell];
                let nNeighbors = buffer[iNW]+buffer[iNO]+buffer[iNE]+buffer[iEA]+buffer[iSE]+buffer[iSO]+buffer[iSW]+buffer[iWE];
                this.assert(!isNaN(nNeighbors));
                if (nNeighbors == 3) {
                    state = LED.STATE.ON;
                } else if (nNeighbors != 2) {
                    state = LED.STATE.OFF;
                }
                bufferClone[iCell] = state;
                bufferClone[iCell+1] = buffer[iCell+1];
                bufferClone[iCell+2] = buffer[iCell+2];
                bufferClone[iCell+3] = buffer[iCell+3] | ((buffer[iCell] !== state)? LED.FLAGS.MODIFIED : 0);
                iCell += nInc; iNW += nInc; iNO += nInc; iNE += nInc; iEA += nInc; iSE += nInc; iSO += nInc; iSW += nInc; iWE += nInc;
                if (state == LED.STATE.ON) cActive++;
            }
            if (!this.fWrap) {
                if (!row) {
                    iNO = iCell - nIncPerRow; iNW = iNO - nInc; iNE = iNO + nInc;
                }
                iEA = iCell + nInc; iNE = iNO + nInc; iSE = iSO + nInc;
            } else {
                if (!row) {
                    iNO -= nIncPerGrid; iNW -= nIncPerGrid; iNE -= nIncPerGrid;
                }
                iEA += nIncPerRow; iNE += nIncPerRow; iSE += nIncPerRow;
            }
        }
        this.assert(iCell == nIncPerGrid);
        /**
         * swapBuffers() takes care of setting the buffer-wide modified flags (leds.fBufferModified), so we don't have to.
         */
        leds.swapBuffers();
        return cActive;
    }

    /**
     * doCycling()
     *
     * Implements rule ANIM4 (animation using 4-bit counters for state/color cycling).
     *
     * @this {LEDCtrl}
     * @returns {number}
     */
    doCycling()
    {
        let cActive = 0;
        let leds = this.leds;
        let nCols = leds.colsView, nRows = leds.rows;
        let counts = this.countBuffer;
        for (let row = 0; row < nRows; row++) {
            for (let col = 0; col < nCols; col++) {
                if (!leds.getLEDCounts(col, row, counts)) continue;
                cActive++;
                /**
                 * Here's the layout of each cell's counts (which mirrors the LEDCtrl.COUNTS layout):
                 *
                 *      [0] is the "working" count
                 *      [1] is the ON count
                 *      [2] is the OFF count
                 *      [3] is the color-cycle count
                 *
                 * Whenever the working count is zero, we examine the cell's state and advance it to
                 * the next state: if it was ON, it goes to OFF (and the OFF count is loaded into
                 * the working count); if it was OFF, then color-cycle count (if any) is applied, and
                 * the state goes to ON (and the ON count is loaded).
                 */
                if (counts[0]) {
                    counts[0]--;
                }
                else {
                    let state = leds.getLEDState(col, row), stateNew = state || 0;
                    switch(state) {
                    case LED.STATE.ON:
                        stateNew = LED.STATE.OFF;
                        counts[0] = counts[2];
                        if (counts[0]) {
                            counts[0]--;
                            break;
                        }
                        /* falls through */
                    case LED.STATE.OFF:
                        if (counts[3]) {
                            let color = leds.getLEDColor(col, row);
                            let iColor = this.colors.indexOf(color);
                            if (iColor >= 0) {
                                iColor = (iColor + counts[3]);
                                while (iColor >= this.colors.length) iColor -= this.colors.length;
                                leds.setLEDColor(col, row, this.colors[iColor]);
                            }
                        }
                        stateNew = LED.STATE.ON;
                        counts[0] = counts[1];
                        if (counts[0]) {
                            counts[0]--;
                        }
                        break;
                    }
                    if (stateNew !== state) leds.setLEDState(col, row, stateNew);
                }
                leds.setLEDCounts(col, row, counts);
            }
        }
        return cActive;
    }

    /**
     * doShifting()
     *
     * Implements rule LEFT1 (shift left one cell).
     *
     * Some of the state we maintain outside of the LED array includes the number of columns of data remaining
     * in the "offscreen" portion of the array (nMessageCount).  Whenever we see that it's zero, we load it with the
     * next chuck of data (ie, the LED pattern for the next symbol in sMessage).
     *
     * @this {LEDCtrl}
     * @param {number} [shift] (default is 1, for a leftward shift of one cell)
     * @returns {number}
     */
    doShifting(shift = 1)
    {
        let cActive = 0;
        let leds = this.leds;
        let nCols = leds.cols, nRows = leds.rows;

        /**
         * If nShiftedLeft is already set, we can't allow another shift until the display has been redrawn.
         */
        if (leds.nShiftedLeft) {
            return 0;
        }

        /**
         * The way the code is currently written, shifting more than two cells at a time creates gap issues.
         */
        this.assert(shift <= 2);
        if (!this.processMessageCmd(shift)) {
            return 0;
        }

        //
        // This is a very slow and simple shift-and-exchange loop, which through a series of exchanges,
        // also migrates the left-most column to the right-most column.  Good for testing but not much else.
        //
        // for (let row = 0; row < nRows; row++) {
        //     for (let col = 0; col < nCols - 1; col++) {
        //         let stateLeft = leds.getLEDState(col, row) || LED.STATE.OFF;
        //         let stateRight = leds.getLEDState(col + 1, row) || LED.STATE.OFF;
        //         if (stateRight) cActive++;
        //         leds.setLEDState(col, row, stateRight);
        //         leds.setLEDState(col + 1, row, stateLeft);
        //     }
        // }
        // leds.nShiftedLeft = 1;
        //

        let buffer = leds.getBuffer();
        let nInc = leds.nBufferInc * shift;
        let nIncPerRow = leds.nBufferInc * nCols;

        let col = 0, nEmptyCols = 0, iCell = 0;
        this.nLeftEmpty = this.nRightEmpty = -1;

        while (col < nCols - shift) {
            let isEmptyCol = 1;
            let iCellOrig = iCell;
            for (let row = 0; row < nRows; row++) {
                let stateOld = buffer[iCell];
                let stateNew = (buffer[iCell] = buffer[iCell + nInc]);
                let flagsNew = ((stateNew !== stateOld)? LED.FLAGS.MODIFIED : 0);
                buffer[iCell + 1] = buffer[iCell + nInc + 1];
                buffer[iCell + 2] = buffer[iCell + nInc + 2];
                buffer[iCell + 3] = buffer[iCell + nInc + 3] | flagsNew;
                if (stateNew) {
                    cActive++;
                    isEmptyCol = 0;
                }
                iCell += nIncPerRow;
            }
            iCell = iCellOrig + leds.nBufferInc;
            if (col++ < leds.colsView) {
                if (isEmptyCol) {
                    nEmptyCols++;
                } else {
                    if (this.nLeftEmpty < 0) this.nLeftEmpty = nEmptyCols;
                    nEmptyCols = 0;
                }
            }
        }

        if (this.nLeftEmpty < 0) this.nLeftEmpty = nEmptyCols;
        this.nRightEmpty = nEmptyCols;

        while (col < nCols) {
            let iCellOrig = iCell;
            for (let row = 0; row < nRows; row++) {
                leds.initCell(buffer, iCell);
                iCell += nIncPerRow;
            }
            iCell = iCellOrig + leds.nBufferInc;
            col++;
        }

        leds.fBufferModified = true;
        leds.nShiftedLeft = shift;

        return cActive;
    }

    /**
     * getCount(binding)
     *
     * @this {LEDCtrl}
     * @param {string} binding
     * @returns {number}
     */
    getCount(binding)
    {
        let count = 0;
        let element = this.bindings[binding];
        if (element && element.options) {
            let option = element.options[element.selectedIndex];
            count = option && +option.value || 0;
        }
        return count;
    }

    /**
     * getCounts()
     *
     * @this {LEDCtrl}
     * @param {boolean} [fAdvance]
     * @returns {Array.<number>}
     */
    getCounts(fAdvance)
    {
        let init = 0;
        if (fAdvance) {
            let element = this.bindings[LEDCtrl.BINDING.COUNT_INIT];
            if (element && element.options) {
                let option = element.options[element.selectedIndex];
                if (option) {
                    init = +option.value || 0;
                    /**
                     * A more regular pattern results if we stick to a range of counts equal to the
                     * sum of the ON and OFF counts.  Let's get that sum now.  However, this assumes
                     * that the user is starting with an initial count of ZERO.  Also, we're only going
                     * to do this if the sum of ON and OFF counts is EVEN; if it's odd, then we'll let
                     * the user do their thing.
                     */
                    element.selectedIndex++;
                    let range = this.getCount(LEDCtrl.BINDING.COUNT_ON) + this.getCount(LEDCtrl.BINDING.COUNT_OFF);
                    let fReset = (!(range & 1) && init == range - 1);
                    if (fReset || element.selectedIndex < 0 || element.selectedIndex >= element.options.length) {
                        element.selectedIndex = 0;
                    }
                }
            }
        }
        let counts = [init];
        for (let i = 1; i < LEDCtrl.COUNTS.length; i++) {
            counts.push(this.getCount(LEDCtrl.COUNTS[i]));
        }
        return counts;
    }

    /**
     * loadPattern(id)
     *
     * If no id is specified, load the initialization pattern set via the LEDCtrlConfig
     * "pattern" property (which, in turn, can be set as URL override, if desired).
     *
     * NOTE: Our initialization pattern is a extended single-string version of the RLE pattern
     * file format: "col/row/width/height/tokens".  The default rule is assumed.
     *
     * @this {LEDCtrl}
     * @param {string} [id]
     * @returns {boolean}
     */
    loadPattern(id)
    {
        let leds = this.leds;
        let iCol = -1, iRow = -1, width, height, rule, sPattern = "";

        if (!id) {
            /**
             * If no id is provided, then we fallback to sPattern, which can be either an
             * id (if it doesn't start with a digit) or one of our own extended pattern strings.
             */
            if (!this.sPattern.match(/^[0-9]/)) id = /** @type {string} */ (this.sPattern);
        }

        if (!id) {
            if (!this.sPattern) {
                return false;
            }
            let i = 0;
            let aParts = this.sPattern.split('/');
            if (aParts.length == 5) {           // extended pattern string
                iCol = +aParts[i++];
                iRow = +aParts[i++];
            }
            if (aParts.length == 3 || aParts.length == 5) {
                width = +aParts[i++];           // conventional pattern string
                height = +aParts[i++];
                sPattern = aParts[i];
            }
            else {
                this.printf("unrecognized pattern: %s\n", this.sPattern);
                return false;
            }
            rule = this.sRule;  // TODO: If we ever support multiple rules, then allow rule overrides, too
        }
        else {
            let patterns = this.config[LEDCtrl.BINDING.PATTERN_SELECTION];
            let lines = patterns && patterns[id];
            if (!lines) {
                this.printf("unknown pattern: %s\n", id);
                return false;
            }
            this.printf("loading pattern \"%s\"\n", id);
            for (let i = 0, n = 0; i < lines.length; i++) {
                let sLine = lines[i];
                if (sLine[0] == '#') {
                    this.printf("%s\n", sLine);
                    continue;
                }
                if (!n++) {
                    let match = sLine.match(/x\s*=\s*([0-9]+)\s*,\s*y\s*=\s*([0-9]+)\s*(?:,\s*rule\s*=\s*(\S+)|)/i);
                    if (!match) {
                        this.printf("unrecognized header line\n");
                        return false;
                    }
                    width = +match[1];
                    height = +match[2];
                    rule = match[3];
                    continue;
                }
                let end = sLine.indexOf('!');
                if (end >= 0) {
                    sPattern += sLine.substr(0, end);
                    break;
                }
                sPattern += sLine;
            }
        }

        if (rule != this.sRule) {
            this.printf("unsupported rule: %s\n", rule);
            return false;
        }

        if (iCol < 0) iCol = (leds.cols - width) >> 1;
        if (iRow < 0) iRow = (leds.rows - height) >> 1;

        if (iCol < 0 || iCol + width > leds.cols || iRow < 0 || iRow + height > leds.rows) {
            this.printf("pattern too large (%d,%d)\n", width, height);
            return false;
        }

        return this.loadPatternString(iCol, iRow, sPattern) > 0;
    }

    /**
     * loadPatternString(col, row, sPattern, fOverwrite)
     *
     * @this {LEDCtrl}
     * @param {number} col
     * @param {number} row
     * @param {string} sPattern
     * @param {boolean} [fOverwrite]
     * @returns {number} (number of columns changed, 0 if none)
     */
    loadPatternString(col, row, sPattern, fOverwrite = false)
    {
        let leds = this.leds;
        let rgb = [0, 0, 0, 1], counts = 0;
        let fColors = false, fCounts = false;

        /**
         * TODO: Cache these pattern splits.
         */
        let aTokens = sPattern.split(/([a-z$])/i);

        if (!fOverwrite) leds.clearBuffer();

        /**
         * We could add checks that verify that col and row stay within the bounds of the specified
         * width and height of the pattern, but it's possible that there are some legit patterns out
         * there that didn't get their bounds quite right.  And in any case, no harm can come of it,
         * because setLEDState() will ignore any parameters outside the LED's array bounds.
         */
        let i = 0;
        let iCol = col;
        let colMax = 0;
        while (i < aTokens.length - 1) {
            let n = aTokens[i++];
            let token = aTokens[i++];
            let v = +n, nRepeat = (n === ""? 1 : v);
            while (nRepeat--) {
                let nAdvance = 0, fModified = false;
                switch(token) {
                case '$':
                    fColors = fCounts = false;
                    col = iCol;
                    row++;
                    break;
                case 'C':
                    counts = v;
                    fCounts = true;
                    break;
                case 'R':
                    rgb[0] = v;
                    fColors = true;
                    break;
                case 'G':
                    rgb[1] = v;
                    fColors = true;
                    break;
                case 'B':
                    rgb[2] = v;
                    fColors = true;
                    break;
                case 'A':
                    rgb[3] = v;
                    fColors = true;
                    break;
                case 'b':
                    fModified = leds.setLEDState(col, row, LED.STATE.OFF);
                    nAdvance++;
                    break;
                case 'o':
                    fModified = leds.setLEDState(col, row, LED.STATE.ON);
                    nAdvance++;
                    break;
                default:
                    this.printf("unrecognized pattern token: %s\n", token);
                    break;
                }
                if (fModified == null) {
                    this.printf("invalid pattern position (%d,%d)\n", col, row);
                } else {
                    if (fColors) {
                        let color = leds.getRGBColorString(rgb);
                        leds.setLEDColor(col, row, color);
                    }
                    if (fCounts) {
                        leds.setLEDCountsPacked(col, row, counts);
                    }
                    if (colMax < col) colMax = col;
                    col += nAdvance;
                }
            }
        }

        if (!fOverwrite) leds.drawBuffer(true);

        return ((colMax -= (iCol - 1)) < 0? 0 : colMax);
    }

    /**
     * loadState(state)
     *
     * If any saved values don't match (possibly overridden), abandon the given state and return false.
     *
     * @this {LEDCtrl}
     * @param {Array|Object} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let stateCPU = state['stateCPU'] || state[0];
        if (!stateCPU || !stateCPU.length) {
            this.printf("Invalid saved state\n");
            return false;
        }
        let version = stateCPU.shift();
        if ((version|0) !== (+LED.VERSION|0)) {
            this.printf("Saved state version mismatch: %3.2f\n", version);
            return false;
        }
        try {
            this.sMessage = stateCPU.shift();
            this.iMessageNext = stateCPU.shift();
            this.sMessageCmd = stateCPU.shift();
            this.nMessageCount = stateCPU.shift();
        } catch(err) {
            this.printf("Controller state error: %s\n", err.message);
            return false;
        }
        if (!WebIO.getURLParms()['message'] && !WebIO.getURLParms()['pattern'] && !WebIO.getURLParms()[LEDCtrl.BINDING.IMAGE_SELECTION]) {
            let stateLEDs = state['stateLEDs'] || state[1];
            if (stateLEDs && this.leds) {
                if (!this.leds.loadState(stateLEDs)) return false;
            }
        }
        return true;
    }

    /**
     * onCommand(aTokens)
     *
     * Processes commands for our "mini-debugger".
     *
     * @this {LEDCtrl}
     * @param {Array.<string>} aTokens
     * @returns {string|undefined}
     */
    onCommand(aTokens)
    {
        let result = "";
        let s = aTokens.shift();
        let c = aTokens.shift();

        switch(c[0]) {
        case 's':
            this.setMessage(aTokens.join(' '));
            break;

        case '?':
            result = "";
            LEDCtrl.COMMANDS.forEach((cmd) => {result += cmd + '\n';});
            if (result) result = "additional commands:\n" + result;
            break;

        default:
            if (s) result = "unrecognized command '" + s + "' (try '?')\n";
            break;
        }
        return result;
    }

    /**
     * onInput(col, row)
     *
     * @this {LEDCtrl}
     * @param {number} col
     * @param {number} row
     */
    onInput(col, row)
    {
        let leds = this.leds;
        if (col >= 0 && row >= 0) {
            if (this.colorSelected) {
                if (!leds.setLEDColor(col, row, this.colorSelected)) {
                    if (this.fToggleColor) {
                        leds.setLEDColor(col, row);
                    } else {
                        leds.setLEDState(col, row, LED.STATE.ON - leds.getLEDState(col, row));
                    }
                } else {
                    leds.setLEDState(col, row, LED.STATE.ON);
                }
            }
            else {
                leds.setLEDState(col, row, LED.STATE.ON - leds.getLEDState(col, row));
            }
            let fAdvance = !!leds.getLEDState(col, row);
            leds.setLEDCounts(col, row, this.getCounts(fAdvance));
            leds.drawBuffer();
        }
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {LEDCtrl}
     * @param {Array|Object} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        return state && this.loadState(state)? true : false;
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {LEDCtrl}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.time.start();
        } else {
            this.time.stop();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {LEDCtrl}
     */
    onReset()
    {
        this.printf("reset\n");
        this.leds.clearBuffer(true);
        this.leds.enableDisplay(true);
        if (this.sMessageInit) this.setMessage(this.sMessageInit);
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {LEDCtrl}
     * @param {Array} state
     */
    onSave(state)
    {
        this.saveState(state);
    }

    /**
     * onUpdate(fTransition)
     *
     * Called by Time's update() function whenever 1) its YIELDS_PER_UPDATE threshold is reached
     * (default is twice per second), 2) a step() operation has just finished (ie, the device is being
     * single-stepped), and 3) a start() or stop() transition has occurred.
     *
     * Of those, all we currently care about are step() and stop() notifications, because we want to make sure
     * the LED display is in sync with the last LED buffer update.  In both of those cases, time has stopped.
     * If time has NOT stopped, then the LED's normal animation function (ledAnimate()) takes care of updating
     * the LED display.
     *
     * @this {LEDCtrl}
     * @param {boolean} [fTransition]
     */
    onUpdate(fTransition)
    {
        if (!this.time.isRunning()) {
            this.leds.drawBuffer();
        }
    }

    /**
     * processMessageCmd(shift, cmd, count)
     *
     * @this {LEDCtrl}
     * @param {number} [shift]
     * @param {string} [cmd]
     * @param {number} [count]
     * @returns {boolean} (true to shift another cell, false if not)
     */
    processMessageCmd(shift = 1, cmd, count)
    {
        if (cmd) {
            this.sMessageCmd = cmd;
            this.nMessageCount = count;
        }

        // this.printf("processing command '%s', count %d\n", this.sMessageCmd, this.nMessageCount);

        switch(this.sMessageCmd) {

        case LEDCtrl.MESSAGE_CMD.HALT:
            return false;

        case LEDCtrl.MESSAGE_CMD.LOAD:
        case LEDCtrl.MESSAGE_CMD.SCROLL:
            if (this.nMessageCount > 0) {
                this.nMessageCount -= shift;
                return true;
            }
            break;

        case LEDCtrl.MESSAGE_CMD.PAUSE:
            if (this.nMessageCount > 0) {
                this.nMessageCount -= shift;
                return false;
            }
            break;

        case LEDCtrl.MESSAGE_CMD.CENTER:
            if (this.nLeftEmpty > this.nRightEmpty) return true;
            break;

        case LEDCtrl.MESSAGE_CMD.OFF:
            this.leds.enableDisplay(false);
            this.sMessageCmd = LEDCtrl.MESSAGE_CMD.PAUSE;
            break;

        case LEDCtrl.MESSAGE_CMD.ON:
            this.leds.enableDisplay(true);
            this.sMessageCmd = LEDCtrl.MESSAGE_CMD.PAUSE;
            break;

        default:
            this.assert(false);
            return false;
        }

        if (!cmd) return this.processMessageSymbol(shift);
        return false;
    }

    /**
     * processMessageSymbol(shift)
     *
     * @this {LEDCtrl}
     * @param {number} [shift]
     * @returns {boolean} (true if another message symbol loaded)
     */
    processMessageSymbol(shift = 1)
    {
        if (this.sMessage) {
            if (this.iMessageNext >= this.sMessage.length) {
                this.iMessageNext = 0;
            }
            let chSymbol = this.sMessage[this.iMessageNext++];
            if (chSymbol == '$') {
                let cols = 0;
                let i = this.iMessageNext;
                while (i < this.sMessage.length) {
                    let d = this.sMessage.charCodeAt(i) - 0x30;
                    if (d < 0 || d > 9) break;
                    cols = cols * 10 + d;
                    i++;
                }
                if (i < this.sMessage.length) {
                    let ch = this.sMessage[i++];
                    if (ch == '$') {
                        this.iMessageNext = i;
                    } else {
                        let cmd = LEDCtrl.MESSAGE_CODE[ch];
                        if (cmd) {
                            this.iMessageNext = i;
                            return this.processMessageCmd(shift, cmd, cols);
                        }
                        this.printf("unrecognized message code: $%s\n", ch);
                    }
                }
            }
            if (chSymbol == ' ') {
                this.nMessageCount += 2;
            } else {
                let col = this.leds.colsView + 1;
                let delta = (this.nMessageCount < 0? this.nMessageCount : 0);
                let sPattern = this.font[chSymbol] || this.font[chSymbol.toUpperCase()];
                let row = Math.round((this.leds.rowsView - this.font['height']) / 2);
                if (sPattern) this.nMessageCount += this.loadPatternString(col + delta, (row < 0? 0 : row), sPattern, true);
                this.nMessageCount += (2 - shift);
                // this.printf("loaded symbol '%s' at offscreen column %d (%d), new count %d\n", chSymbol, (col - this.leds.colsView), delta, this.nMessageCount);
            }
            this.sMessageCmd = LEDCtrl.MESSAGE_CMD.SCROLL;
            return true;
        }
        this.sMessageCmd = LEDCtrl.MESSAGE_CMD.HALT;
        return false;
    }

    /**
     * savePattern(fMinWidth, fMinHeight)
     *
     * We save our patterns as a string that is largely compatible with the "Game of Life RLE Format"
     * (refer to http://www.conwaylife.com/w/index.php?title=Run_Length_Encoded), which uses <repetition><tag>
     * pairs to describes runs of identical cells; the <tag> is either 'o' for "active" cells, 'b' for "inactive"
     * cells, or '$' for end of line.
     *
     * We say "largely" compatible because it's not really a goal for our pattern strings to be compatible
     * with any other RLE reader.  For example, we don't break our string into lines of 70 characters or less,
     * so that's already one incompatibility.  Also, we don't attempt to determine the minimum bounding
     * rectangle for the current pattern, because we use these strings to save/restore the entire grid as it
     * originally appeared, not just the pattern within the grid.  Both of those differences can be dealt with
     * in the future with a special RLE-compatibility flag, if we ever care.
     *
     * Moreover, we must deal with grids containing multi-color cells and additional state (eg, internal counters)
     * not found in typical "Game of Life" grids, so we may precede each <repetition><tag> pair with zero or more
     * <value><modifier> pairs, where <modifier> can be:
     *
     *      'R':    red color value (assumed zero if not present)
     *      'G':    green color value (assumed zero if not present)
     *      'B':    blue color value (assumed zero if not present)
     *      'C':    packed count value (ie, internal counts packed into a single unsigned 32-bit number)
     *
     * If we use any of the above modifiers, they are always preceded with a value unless the value is zero
     * (unlike the <repetition><tag> pairs, where a repetition of 1 is assumed if omitted).
     *
     * Also, a modifier remains in effect until modified by another modifier, reducing the amount of
     * "modifier noise" in the pattern string.
     *
     * @this {LEDCtrl}
     * @param {boolean} [fMinWidth] (set to true to determine the minimum width)
     * @param {boolean} [fMinHeight] (set to true to determine the minimum height)
     * @returns {string}
     */
    savePattern(fMinWidth, fMinHeight)
    {
        let leds = this.leds;

        let sPattern = "";
        let iCol = 0, iRow = 0;
        let nCols = this.leds.cols, nRows = this.leds.rows;

        let fColors = !!this.colors.length;
        let state, rgb = [0, 0, 0], counts;
        let stateLast = 0, rgbLast = [0, 0, 0, 1], countsLast = 0;
        let statePrev = 0, rgbPrev = [0, 0, 0, 1], countsPrev = 0, nPrev = 0;

        /**
         * flushRun(fEndRow)
         *
         * @param {boolean} [fEndRow]
         */
        let flushRun = function(fEndRow) {
            let fDelta = false;
            if (rgb[3] == null) rgb[3] = 1;
            if (nPrev) {
                if (fColors) {
                    if (rgb[0] !== rgbPrev[0] || rgb[1] !== rgbPrev[1] || rgb[2] !== rgbPrev[2] || rgb[3] !== rgbPrev[3]) {
                        fDelta = true;
                    }
                    if (counts !== countsPrev) {
                        fDelta = true;
                    }
                }
                if (state !== statePrev) {
                    fDelta = true;
                }
                if (fDelta || fEndRow && statePrev) {
                    if (fColors) {
                        if (rgbLast[0] !== rgbPrev[0]) {
                            rgbLast[0] = rgbPrev[0];
                            sPattern += (rgbPrev[0] || "") + 'R';
                        }
                        if (rgbLast[1] !== rgbPrev[1]) {
                            rgbLast[1] = rgbPrev[1];
                            sPattern += (rgbPrev[1] || "") + 'G';
                        }
                        if (rgbLast[2] !== rgbPrev[2]) {
                            rgbLast[2] = rgbPrev[2];
                            sPattern += (rgbPrev[2] || "") + 'B';
                        }
                        if (rgbLast[3] !== rgbPrev[3]) {
                            rgbLast[3] = rgbPrev[3];
                            sPattern += (rgbPrev[3] || "") + 'A';
                        }
                        if (countsLast !== countsPrev) {
                            countsLast = countsPrev;
                            sPattern += (countsPrev || "") + 'C';
                        }
                    }
                    if (nPrev > 1) sPattern += nPrev;
                    sPattern += (statePrev === LED.STATE.ON? 'o' : 'b');
                    stateLast = statePrev;
                    fDelta = true;
                }
            }
            if (fEndRow) {
                sPattern += '$';
                nPrev = 0;
            } else {
                if (!fDelta) {
                    nPrev++;
                } else {
                    nPrev = 1;
                }
                statePrev = state;
                rgbPrev[0] = rgb[0];
                rgbPrev[1] = rgb[1];
                rgbPrev[2] = rgb[2];
                rgbPrev[3] = rgb[3];
                countsPrev = counts;
            }
        };

        /**
         * Before we begin, see if either fMinWidth or fMinHeight are set, requiring a bounds prescan.
         */
        let colMin = 0;
        let colMax = leds.cols - 1;
        let rowMin = 0;
        let rowMax = leds.rows - 1;
        if (fMinWidth || fMinHeight) {
            if (fMinWidth) {
                colMin = colMax; colMax = 0;
            }
            if (fMinHeight) {
                rowMin = rowMax; rowMax = 0;
            }
            for (let row = 0; row < leds.rows; row++) {
                for (let col = 0; col < leds.cols; col++) {
                    state = leds.getLEDState(col, row);
                    if (state) {
                        if (fMinWidth) {
                            if (colMin > col) colMin = col;
                            if (colMax < col) colMax = col;
                        }
                        if (fMinHeight) {
                            if (rowMin > row) rowMin = row;
                            if (rowMax < row) rowMax = row;
                        }
                    }
                }
            }
            nCols = colMax - colMin + 1;
            nRows = rowMax - rowMin + 1;
            if (nCols < 0) nCols = 0;
            if (nRows < 0) nRows = 0;
        }

        /**
         * Begin pattern generation.
         */
        for (let row = rowMin; row <= rowMax; row++) {
            for (let col = colMin; col <= colMax; col++) {
                state = leds.getLEDState(col, row);
                leds.getLEDColorValues(col, row, rgb);
                counts = leds.getLEDCountsPacked(col, row);
                flushRun();
            }
            flushRun(true);
        }

        /**
         * Remove all '$' at the beginning of the pattern, if we've asked for the minimum height (or no minimums at all)
         */
        if (fMinHeight || !fMinWidth) {
            while (sPattern[0] == '$') {
                iRow++; nRows--;
                sPattern = sPattern.slice(1);
            }
        }

        /**
         * Similarly, remove all '$$' at the end of the pattern.
         */
        while (sPattern.slice(-2) == '$$') {
            nRows--;
            sPattern = sPattern.slice(0, -1);
        }
        if (sPattern == '$') nRows = 0;

        /**
         * If we've asked for either the minimum width or height, then don't bother including starting col and row (which
         * we only want for patterns used to save/restore the state of the entire grid).
         */
        sPattern = ((fMinWidth || fMinHeight)? "" : (iCol + '/' + iRow + '/')) + nCols + '/' + nRows + '/' + sPattern.slice(0, -1);
        sPattern = sPattern.replace(/\$+$/, '');
        return sPattern;
    }

    /**
     * saveState(state)
     *
     * @this {LEDCtrl}
     * @param {Array} state
     */
    saveState(state)
    {
        let stateCPU = [];
        let stateLEDs = [];
        stateCPU.push(+LED.VERSION);
        stateCPU.push(this.sMessage);
        stateCPU.push(this.iMessageNext);
        stateCPU.push(this.sMessageCmd);
        stateCPU.push(this.nMessageCount);
        if (this.leds) this.leds.saveState(stateLEDs);
        state.push(stateCPU);
        state.push(stateLEDs);
    }

    /**
     * setMessage(s)
     *
     * @this {LEDCtrl}
     * @param {string} s
     */
    setMessage(s)
    {
        if (this.sMessage != s) {
            if (s) this.printf("new message: \"%s\"\n", s);
            this.sMessage = s;
        }
        this.sMessageCmd = LEDCtrl.MESSAGE_CMD.LOAD;
        this.iMessageNext = this.nMessageCount = 0;
    }

    /**
     * toInstruction(addr, opcode)
     *
     * @this {LEDCtrl}
     * @param {number} addr
     * @param {number|undefined} opcode
     * @returns {string}
     */
    toInstruction(addr, opcode)
    {
        return "";
    }

    /**
     * toString()
     *
     * @this {LEDCtrl}
     * @returns {string}
     */
    toString()
    {
        return "";
    }

    /**
     * updateBackgroundImage(sImage)
     *
     * @this {LEDCtrl}
     * @param {string} [sImage]
     */
    updateBackgroundImage(sImage)
    {
        let element = this.bindings[LEDCtrl.BINDING.IMAGE_SELECTION];
        if (element && element.options.length) {
            if (sImage) {
                for (let i = 0; i < element.options.length; i++) {
                    if (element.options[i].value == sImage) {
                        element.selectedIndex = i;
                        break;
                    }
                }
            }
            sImage = element.options[element.selectedIndex].value;
            this.leds.setContainerStyle('backgroundImage', sImage? ("url('" + sImage + "')") : "none");
        }
    }

    /**
     * updateColorPalette(binding)
     *
     * In addition to being called whenever the COLOR_PALETTE or COLOR_SELECTION onChange handler is
     * called, this is also called when any of the color controls are initialized, because we don't know
     * in what order the elements will be bound.
     *
     * @this {LEDCtrl}
     * @param {string} [binding] (if set, the selection for the specified binding has changed)
     */
    updateColorPalette(binding)
    {
        let elementPalette = this.bindings[LEDCtrl.BINDING.COLOR_PALETTE];
        let elementSelection = this.bindings[LEDCtrl.BINDING.COLOR_SELECTION];

        let fPaletteChange = (binding === LEDCtrl.BINDING.COLOR_PALETTE);
        if (elementPalette && !elementPalette.options.length) {
            this.addBindingOptions(elementPalette, this.config['colors'], true);
            fPaletteChange = true;
        }

        if (elementPalette && elementSelection && (!elementSelection.options.length || fPaletteChange)) {
            let sPalette = elementPalette.options[elementPalette.selectedIndex].value;
            this.colorPalette = this.config['colors'][sPalette];
            for (let color in this.colorPalette) {
                let sColorOverride = this.config[color.toLowerCase()];
                if (sColorOverride) {
                    if (sColorOverride[0] != '#') sColorOverride = '#' + sColorOverride;
                    this.printf("overriding color \"%s\" with %s (formerly %s)\n", color, sColorOverride, this.colorPalette[color]);
                    this.colorPalette[color] = sColorOverride;
                }
            }
            this.addBindingOptions(elementSelection, this.colorPalette, true);
        }

        if (elementPalette && elementSelection && elementSelection.options.length) {
            this.colorSelected = elementSelection.options[elementSelection.selectedIndex].value;
            this.updateColorSwatches();
        }
    }

    /**
     * updateColorSelection(color)
     *
     * @this {LEDCtrl}
     * @param {string} color
     */
    updateColorSelection(color)
    {
        let element = this.bindings[LEDCtrl.BINDING.COLOR_SELECTION];
        if (element) {
            let i;
            for (i = 0; i < element.options.length; i++) {
                if (element.options[i].value == color) {
                    this.colorSelected = color;
                    if (element.selectedIndex != i) {
                        element.selectedIndex = i;
                    }
                    break;
                }
            }
            if (i == element.options.length) element.selectedIndex = 0;
        }
    }

    /**
     * updateColorSwatches(binding)
     *
     * @this {LEDCtrl}
     * @param {string} [binding] (set if a specific color swatch was just clicked)
     */
    updateColorSwatches(binding)
    {
        let i = 1, elementSwatch;
        /**
         * Some machines use a single swatch called COLOR_SWATCH_SELECTED; update as appropriate.
         */
        if (!binding) {
            if (this.colorSelected) {
                elementSwatch = this.bindings[LEDCtrl.BINDING.COLOR_SWATCH_SELECTED];
                if (elementSwatch) {
                    elementSwatch.style.backgroundColor = this.colorSelected;
                }
            }
        }
        /**
         * Other machines use a series of swatches named COLOR_SWATCH + "1", COLOR_SWATCH + "2", etc;
         * for each color in colorPalette, update the next available swatch.
         */
        if (this.colorPalette) {
            for (let idColor in this.colorPalette) {
                let color = this.colorPalette[idColor];
                if (this.colors) this.colors[i-1] = color;
                let idSwatch = LEDCtrl.BINDING.COLOR_SWATCH + i++;
                elementSwatch = this.bindings[idSwatch];
                if (!elementSwatch) break;
                elementSwatch.style.display = "inline-block";
                if (idSwatch == binding) {
                    this.updateColorSelection(color);
                }
                if (binding && binding != idSwatch || color != this.colorSelected) {
                    color = this.leds.getRGBAColor(color, 1.0, 0.50);
                }
                elementSwatch.style.backgroundColor = color;
            }
        }
        /**
         * Finally, for any remaining swatches in the series (ie, because the current palette doesn't need
         * them all), hide them.
         */
        while (true) {
            let idSwatch = LEDCtrl.BINDING.COLOR_SWATCH + i++;
            let elementSwatch = this.bindings[idSwatch];
            if (!elementSwatch) break;
            elementSwatch.style.display = "none";
        }
    }

    /**
     * updatePattern()
     *
     * @this {LEDCtrl}
     */
    updatePattern()
    {
        let element = this.bindings[LEDCtrl.BINDING.PATTERN_SELECTION];
        if (element && element.options.length) {
            let sPattern = element.options[element.selectedIndex].value;
            if (!sPattern) {
                this.onReset();
            } else {
                this.loadPattern(sPattern);
            }
        }
    }
}

LEDCtrl.BINDING = {
    COLOR_PALETTE:          "colorPalette",
    COLOR_SELECTION:        "colorSelection",
    COLOR_SWATCH:           "colorSwatch",
    COLOR_SWATCH_SELECTED:  "colorSwatchSelected",
    COUNT_INIT:             "countInit",
    COUNT_ON:               "countOn",
    COUNT_OFF:              "countOff",
    COUNT_CYCLE:            "countCycle",
    IMAGE_SELECTION:        "backgroundImage",
    PATTERN_SELECTION:      "patterns",
    SYMBOL_INPUT:           "symbolInput",
    SYMBOL_PREVIEW:         "symbolPreview",
    SAVE:                   "save",
    SAVE_TO_URL:            "saveToURL"
};

LEDCtrl.COUNTS = [null, LEDCtrl.BINDING.COUNT_ON, LEDCtrl.BINDING.COUNT_OFF, LEDCtrl.BINDING.COUNT_CYCLE];

LEDCtrl.COMMANDS = [
    "s\t\tset string"
];

LEDCtrl.MESSAGE_CMD = {
    LOAD:       "load",
    SCROLL:     "scroll",
    PAUSE:      "pause",
    HALT:       "halt",
    CENTER:     "center",
    OFF:        "off",
    ON:         "on"
};

/**
 * The symbol `$` is used as a prefix to embed "command codes" in an LED message.  Current command codes include:
 *
 *      $b (blank the display; turns all LEDs off)
 *      $c (center the current display contents; ie, continue scrolling until centered)
 *      $h (halt scrolling)
 *      $o (turn the display on; the opposite of blank)
 *      $p (pause scrolling)
 *      $s (scroll/shift the display one cell, without adding more symbols)
 *
 * The default operation is to scroll the display, adding new symbols to the vacated end of the display as needed.
 * When all symbols in the current message have been processed, processing returns to the beginning of the message.
 *
 * To change the default operation at any point, insert one or more command codes into the string.  Commands may also
 * include a count immediately after the `$` (eg, `$90s`), which determines how many "steps" (cycles) that command
 * should remain in effect before advancing to the next symbol (or command) in the message.  So, for example, `$90s`
 * will scroll the display 90 times (without adding new symbols) before continuing to the next symbol.  The default
 * count for an operation is 1.
 *
 * For convenience, commands that don't need a count (eg, `$b` and `$o`) automatically treat the count as a pause (`$p`).
 * In other words, `$30b` is equivalent to `$b$30p`.
 *
 * Finally, if you want to embed `$` as a normal symbol, use two of them (`$$`).
 */
LEDCtrl.MESSAGE_CODE = {
    'b':        LEDCtrl.MESSAGE_CMD.OFF,
    'c':        LEDCtrl.MESSAGE_CMD.CENTER,
    'h':        LEDCtrl.MESSAGE_CMD.HALT,
    'o':        LEDCtrl.MESSAGE_CMD.ON,
    'p':        LEDCtrl.MESSAGE_CMD.PAUSE,
    's':        LEDCtrl.MESSAGE_CMD.SCROLL
};

LEDCtrl.RULES = {
    ANIM4:      "A4",       // animation using 4-bit counters for state/color cycling
    LEFT1:      "L1",       // shift left one cell
    LIFE1:      "B3/S23"    // Game of Life v1.0 (births require 3 neighbors, survivors require 2 or 3)
};

/**
 * Symbols can be formed with the following grid patterns.
 */
LEDCtrl.FONTS = {
    "Helvetica": {          // designed for 16x16 grids
        "width": 16,
        "height": 16,
        "0":"$2b2o$bo2bo$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo$bo2bo$2b2o",
        "1":"$3bo$2b2o$4o$3bo$3bo$3bo$3bo$3bo$3bo$3bo$3bo",
        "2":"$2b3o$bo3bo$o5bo$o5bo$6bo$5bo$3b2o$2bo$bo$o$7o",
        "3":"$b4o$o4bo$o4bo$5bo$4bo$2b2o$4bo$5bo$o4bo$o4bo$b4o",
        "4":"$5bo$4b2o$3bobo$2bo2bo$bo3bo$o4bo$o4bo$8o$5bo$5bo$5bo",
        "5":"$6o$o$o$o$4o$4bo$5bo$5bo$5bo$o3bo$b3o",
        "6":"$2b4o$bo4bo$o$o$o$ob4o$2o4bo$o5bo$o5bo$bo4bo$2b4o",
        "7":"$8o$7bo$6bo$5bo$4bo$4bo$3bo$3bo$2bo$2bo$2bo",
        "8":"$b4o$o4bo$o4bo$o4bo$bo2bo$2b2o$bo2bo$o4bo$o4bo$o4bo$b4o",
        "9":"$b4o$o4bo$o5bo$o5bo$o4b2o$b4obo$6bo$6bo$6bo$o4bo$b4o",
        "A":"$3b2o$2bo2bo$bo4bo$bo4bo$o6bo$o6bo$o6bo$8o$o6bo$o6bo$o6bo",
        "B":"$6o$o5bo$o5bo$o5bo$o4bo$7o$o6bo$o6bo$o6bo$o6bo$7o",
        "C":"$2b4o$bo4bo$o6bo$o$o$o$o$o$o6bo$bo4bo$2b4o",
        "D":"$6o$o5bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o5bo$6o",
        "E":"$7o$o$o$o$o$6o$o$o$o$o$7o",
        "F":"$7o$o$o$o$o$6o$o$o$o$o$o",
        "G":"$2b4o$bo4bo$o$o$o$o3b4o$o6bo$o6bo$o6bo$bo4bo$2b4o",
        "H":"$o6bo$o6bo$o6bo$o6bo$o6bo$8o$o6bo$o6bo$o6bo$o6bo$o6bo",
        "I":"$o$o$o$o$o$o$o$o$o$o$o",
        "J":"$5bo$5bo$5bo$5bo$5bo$5bo$5bo$o4bo$o4bo$o4bo$b4o",
        "K":"$o6bo$o5bo$o4bo$o3bo$o2bo$ob2o$2o2bo$o4bo$o5bo$o6bo$o7bo",
        "L":"$o$o$o$o$o$o$o$o$o$o$7o",
        "M":"$o8bo$2o6b2o$obo4bobo$obo4bobo$o2bo2bo2bo$o2bo2bo2bo$o3b2o3bo$o8bo$o8bo$o8bo$o8bo",
        "N":"$2o5bo$obo4bo$obo4bo$o2bo3bo$o2bo3bo$o3bo2bo$o3bo2bo$o4bobo$o4bobo$o4bobo$o5b2o",
        "O":"$3b4o$2bo4bo$bo6bo$o8bo$o8bo$o8bo$o8bo$o8bo$bo6bo$2bo4bo$3b4o",
        "P":"$6o$o5bo$o6bo$o6bo$o6bo$o5bo$6o$o$o$o$o",
        "Q":"$3b4o$2bo4bo$bo6bo$o8bo$o8bo$o8bo$o8bo$o8bo$bo4bobo$2bo4bo$3b4obo$9bo",
        "R":"$6o$o5bo$o5bo$o5bo$o5bo$6o$o2bo$o3bo$o4bo$o5bo$o6bo",
        "S":"$2b4o$bo4bo$o6bo$o$bo$2b4o$6bo$7bo$o6bo$bo4bo$2b4o",
        "T":"$9o$4bo$4bo$4bo$4bo$4bo$4bo$4bo$4bo$4bo$4bo",
        "U":"$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$bo4bo$2b4o",
        "V":"$o8bo$o8bo$bo6bo$bo6bo$bo6bo$2bo4bo$2bo4bo$2bo4bo$3bo2bo$3bo2bo$4b2o",
        "W":"$o4b2o4bo$o4b2o4bo$o4b2o4bo$o3bo2bo3bo$bo2bo2bo2bo$bo2bo2bo2bo$bo2bo2bo2bo$bo2bo2bo2bo$2b2o4b2o$2b2o4b2o$2b2o4b2o",
        "X":"$o8bo$bo6bo$2bo4bo$3bo2bo$4b2o$4b2o$4b2o$3bo2bo$2bo4bo$bo6bo$o8bo",
        "Y":"$o5bo$o5bo$bo3bo$bo3bo$2bobo$2bobo$3bo$3bo$3bo$3bo$3bo",
        "Z":"$9o$8bo$7bo$6bo$5bo$4bo$3bo$2bo$bo$o$9o",
        "a":"$$$$b4o$o4bo$5bo$b5o$o4bo$o4bo$o3b2o$b3obo",
        "b":"$o$o$o$ob3o$2o3bo$o5bo$o5bo$o5bo$o5bo$2o3bo$ob3o",
        "c":"$$$$2b4o$bo4bo$o$o$o$o$bo4bo$2b4o",
        "d":"$6bo$6bo$6bo$2b3obo$bo3b2o$o5bo$o5bo$o5bo$o5bo$bo3b2o$2b3obo",
        "e":"$$$$2b3o$bo3bo$o5bo$7o$o$o$bo4bo$2b4o",
        "f":"$2b2o$bo2bo$bo$bo$4o$bo$bo$bo$bo$bo$bo",
        "g":"$$$$2b2obo$bo2b2o$o4bo$o4bo$o4bo$bo2b2o$2b2obo$5bo$5bo$o4bo$b4o",
        "h":"$o$o$o$ob3o$2o3bo$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo",
        "i":"$$o$$o$o$o$o$o$o$o$o",
        "j":"$$3bo$$3bo$3bo$3bo$3bo$3bo$3bo$3bo$3bo$3bo$o2bo$b2o",
        "k":"$o$o$o$o4bo$o3bo$o2bo$obo$2obo$o3bo$o4bo$o5bo",
        "l":"$o$o$o$o$o$o$o$o$o$o$o",
        "m":"$$$$ob2o3b2o$2o2bobo2bo$o4bo4bo$o4bo4bo$o4bo4bo$o4bo4bo$o4bo4bo$o4bo4bo",
        "n":"$$$$ob3o$2o3bo$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo",
        "o":"$$$$2b4o$bo4bo$o6bo$o6bo$o6bo$o6bo$bo4bo$2b4o",
        "p":"$$$$ob3o$2o3bo$o5bo$o5bo$o5bo$o5bo$2o3bo$ob3o$o$o$o",
        "q":"$$$$2b3obo$bo3b2o$o5bo$o5bo$o5bo$o5bo$bo3b2o$2b3obo$6bo$6bo$6bo",
        "r":"$$$$ob2o$2o2bo$o$o$o$o$o$o",
        "s":"$$$$b4o$o4bo$o$b4o$5bo$5bo$o4bo$b4o",
        "t":"$$bo$bo$4o$bo$bo$bo$bo$bo$bo2bo$2b2o",
        "u":"$$$$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo$o3b2o$b3obo",
        "v":"$$$$o5bo$o5bo$bo3bo$bo3bo$bo3bo$2bobo$2bobo$3bo",
        "w":"$$$$o3b2o3bo$o3b2o3bo$o3b2o3bo$o3b2o3bo$bobo2bobo$bobo2bobo$bobo2bobo$2bo4bo",
        "x":"$$$$$o5bo$bo3bo$2bobo$3bo$2bobo$bo3bo$o5bo",
        "y":"$$$$o5bo$o5bo$bo3bo$bo3bo$2bobo$2bobo$3bo$3bo$3bo$2bo$2o",
        "z":"$$$$6o$5bo$4bo$3bo$2bo$bo$o$6o",
        "!":"$o$o$o$o$o$o$o$o$$o$o",
        "\"":"$obo$obo$obo$obo",
        "#":"$2bo2bo$2bo2bo$2bo2bo$8o$2bo2bo$2bo2bo$2bo2bo$8o$2bo2bo$2bo2bo$2bo2bo",
        "$":"3bo$2b4o$bobo2bo$o2bo$o2bo$bobo$2b3o$3bobo$3bo2bo$3bo2bo$o2bobo$b4o$3bo",
        "%":"$b2o7bo$o2bo5bo$o2bo4bo$o2bo3bo$o2bo2bo$b2o2bo2b2o$4bo2bo2bo$3bo3bo2bo$2bo4bo2bo$bo5bo2bo$o7b2o",
        "&":"$b3o$o3bo$o3bo$o3bo$bobo$2bo$bobo$o3bobo$o4bo$o3bobo$b3o3bo",
        "'":"$o$o$o$o",
        "(":"$3bo$2bo$bo$bo$o$o$o$o$o$o$bo$bo$2bo$3bo",
        ")":"$o$bo$2bo$2bo$3bo$3bo$3bo$3bo$3bo$3bo$2bo$2bo$bo$o",
        "*":"2bo$obobo$b3o$b3o$o3bo",
        "+":"$$$$3bo$3bo$3bo$7o$3bo$3bo$3bo",
        ",":"$$$$$$$$$$2o$2o$bo$o",
        ".":"$$$$$$$$$$2o$2o",
        "/":"$3bo$3bo$2bo$2bo$2bo$bo$bo$bo$o$o$o",
        ":":"$$$$2o$2o$$$$$2o$2o",
        ";":"$$$$2o$2o$$$$$2o$2o$bo$o",
        "<":"$$$$6b2o$4b2o$2b2o$2o$2o$2b2o$4b2o$6b2o",
        ">":"$$$$2o$2b2o$4b2o$6b2o$6b2o$4b2o$2b2o$2o",
        "=":"$$$$$$8o$$$8o",
        "?":"$b4o$o4bo$o4bo$5bo$4bo$3bo$2bo$2bo$$2bo$2bo",
        "@":"$3b4o$2bo4bo$bo6bo$o3b2o3bo$o2bo2bo2bo$o2bo2bo2bo$o3b2o3bo$o5b3o$bo$2bo5bo$3b5o",
        "[":"$3o$o$o$o$o$o$o$o$o$o$o$o$o$3o",
        "]":"$3o$2bo$2bo$2bo$2bo$2bo$2bo$2bo$2bo$2bo$2bo$2bo$2bo$3o",
        "\\":"$o$o$bo$bo$bo$2bo$2bo$2bo$3bo$3bo$3bo",
        "^":"$2b2o$2b2o$bo2bo$bo2bo$o4bo$o4bo",
        "_":"$$$$$$$$$$$$$8o",
        "`":"o$bo$2bo",
        "{":"$2b2o$bo$bo$bo$bo$bo$bo$o$bo$bo$bo$bo$bo$2b2o",
        "}":"$2o$2bo$2bo$2bo$2bo$2bo$2bo$3bo$2bo$2bo$2bo$2bo$2bo$2o",
        "|":"o$o$o$o$o$o$o$o$o$o$o$o$o$o$o",
        "~":"$$$$$$b3o3bo$o3b3o"
    },
    "ATT4425": {            // designed for 9x13 grids
        "width": 9,
        "height": 13,
        "A":"$3bo$3bo$2bobo$2bobo$bo3bo$bo3bo$7o$o5bo$o5bo",
        "B":"$6o$bo4bo$bo4bo$bo3bo$b4o$bo3bo$bo4bo$bo4bo$6o",
        "C":"$2b5o$bo$o$o$o$o$o$bo$2b5o",
        "D":"$5o$bo3bo$bo4bo$bo4bo$bo4bo$bo4bo$bo4bo$bo3bo$5o",
        "E":"$6o$o$o$o$5o$o$o$o$6o",
        "F":"$6o$o$o$o$5o$o$o$o$o",
        "G":"$2b3o$bo3bo$o$o$o$o3b3o$o4bo$bo3bo$2b3o",
        "H":"$o5bo$o5bo$o5bo$o5bo$7o$o5bo$o5bo$o5bo$o5bo",
        "I":"$3o$bo$bo$bo$bo$bo$bo$bo$3o",
        "J":"$4bo$4bo$4bo$4bo$4bo$4bo$o3bo$o3bo$b3o",
        "K":"$o5bo$o4bo$o3bo$o2bo$3o$o2bo$o3bo$o4bo$o5bo",
        "L":"$o$o$o$o$o$o$o$o$7o",
        "M":"$o5bo$2o3b2o$obobobo$o2bo2bo$o5bo$o5bo$o5bo$o5bo$o5bo",
        "N":"$o5bo$2o4bo$obo3bo$obo3bo$o2bo2bo$o3bobo$o3bobo$o4b2o$o5bo",
        "O":"$2b3o$bo3bo$o5bo$o5bo$o5bo$o5bo$o5bo$bo3bo$2b3o",
        "P":"$6o$o5bo$o5bo$o5bo$6o$o$o$o$o",
        "Q":"$2b3o$bo3bo$o5bo$o5bo$o5bo$o5bo$o5bo$bo3bo$2b3o$3bo2bo$4b3o",
        "R":"$6o$o5bo$o5bo$o5bo$6o$o2bo$o3bo$o4bo$o5bo",
        "S":"$2b3o$bo3bo$bo$2bo$3bo$4bo$o4bo$bo3bo$2b3o",
        "T":"$5o$2bo$2bo$2bo$2bo$2bo$2bo$2bo$2bo",
        "U":"$o5bo$o5bo$o5bo$o5bo$o5bo$o5bo$o5bo$bo3bo$2b3o",
        "V":"$o5bo$o5bo$bo3bo$bo3bo$bo3bo$2bobo$2bobo$3bo$3bo",
        "W":"$o5bo$o5bo$o2bo2bo$o2bo2bo$obobobo$obobobo$2o3b2o$2o3b2o$o5bo",
        "X":"$o5bo$bo3bo$bo3bo$2bobo$3bo$2bobo$bo3bo$bo3bo$o5bo",
        "Y":"$o5bo$o5bo$bo3bo$2bobo$3bo$3bo$3bo$3bo$3bo",
        "Z":"$7o$6bo$5bo$4bo$3bo$2bo$bo$o$7o"
    }
};

LEDCtrl.CLASSES["LEDCtrl"] = LEDCtrl;
