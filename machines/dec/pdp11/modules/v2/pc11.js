/**
 * @fileoverview Implements the PDP-11 High-Speed Paper Tape Reader/Punch (eg, PC11)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DumpAPI from "../../../../modules/v2/dumpapi.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { CSSCLASS, DEBUG, PDP11, globals } from "./defines.js";

/**
 * @class PC11
 * @unrestricted
 */
export default class PC11 extends Component {
    /**
     * PC11(parms)
     *
     * The PC11 component has the following component-specific (parms) properties:
     *
     *      autoMount: a JSON-encoded object containing 'name' and 'path' properties, describing a
     *      tape resource to automatically load at startup (only the "load" operation is supported
     *      for autoMount; if you want to "read" a tape image directly into RAM at startup, you must
     *      ask the RAM component to do that).
     *
     *      baudReceive: the default number of bits/second that the device should receive data at;
     *      0 means use the device default (PDP11.PC11.PRS.BAUD)
     *
     *      baudTransmit: the default number of bits/second that the device should transmit data at;
     *      0 means use the device default (PDP11.PC11.PPS.BAUD); currently ignored, since punch
     *      support isn't implemented yet.
     *
     * NOTE: Since the XSL file defines the 'baud' properties as numbers, not strings, there's no need to
     * use parseInt(), and as an added benefit, we don't need to worry about whether a hex or decimal format
     * was used.
     *
     * @param {Object} parms
     */
    constructor(parms)
    {
        super("PC11", parms, MESSAGE.PC11);

        this.sDevice = "PTR";                   // TODO: Make the device name configurable

        /*
         * We preliminarily parse and record any 'autoMount' object now, but we no longer process it
         * until initBus(), because the Computer's getMachineParm() service may have an override for us.
         */
        this.configMount = this.parseConfig(parms['autoMount']);
        this.cAutoMount = 0;
        this.nBaudReceive = +parms['baudReceive'] || PDP11.PC11.PRS.BAUD;

        this.regPRS = 0;                        // PRS register
        this.regPRB = 0;                        // PRB register
        this.regPPS = PDP11.PC11.PPS.ERROR;     // PPS register (TODO: Stop signaling error once punch is implemented)
        this.regPPB = 0;                        // PPB register
        this.iTapeData = 0;                     // buffer index
        this.aTapeData = [];                    // buffer for the PRB register
        this.sTapeSource = PC11.SOURCE.NONE;
        this.nTapeTarget = PC11.TARGET.NONE;
        this.sTapeName = this.sTapePath = "";

        /*
         * These next few variables simply keep track of the previous parameters to parseTape(),
         * so that we can easily reparse the previous tape as needed.
         */
        this.aBytes = this.addrLoad = this.addrExec = null;

        this.nLastPercent = -1;     // ensure the first displayProgress() displays something

        /*
         * Support for local tape images is currently limited to desktop browsers with FileReader support;
         * when this flag is set, setBinding() allows local tape bindings and informs initBus() to update the
         * "listTapes" binding accordingly.
         */
        this.fLocalTapes = (!WebLib.isMobile() && 'FileReader' in globals.window);

        this.irqReader = null;
        this.timerReader = -1;
        this.ram = null;
    }

    /**
     * parseConfig(config)
     *
     * @this {PC11}
     * @param {*} config
     * @returns {*}
     */
    parseConfig(config)
    {
        if (config && typeof config == "string") {
            try {
                /*
                 * The most likely source of any exception will be right here, where we're parsing
                 * this JSON-encoded data.
                 */
                config = eval("(" + config + ")");
            } catch (e) {
                Component.error(this.type + " auto-mount error: " + e.message + " (" + config + ")");
                config = null;
            }
        }
        return config || {};
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {PC11}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "listTapes")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var pc11 = this;
        var nTapeTarget = PC11.TARGET.NONE;

        switch (sBinding) {

        case "listTapes":
            var controlSelect = /** @type {HTMLSelectElement} */ (control);
            this.bindings[sBinding] = controlSelect;
            controlSelect.onchange = function onChangeListTapes(event) {
                var controlDesc = pc11.bindings["descTape"];
                var controlOption = controlSelect.options[controlSelect.selectedIndex];
                if (controlDesc && controlOption) {
                    var dataValue = {};
                    var sValue = controlOption.getAttribute("data-value");
                    if (sValue) {
                        try {
                            dataValue = eval("(" + sValue + ")");
                        } catch (e) {
                            Component.error("PC11 option error: " + e.message);
                        }
                    }
                    var sHTML = dataValue['desc'];
                    if (sHTML === undefined) sHTML = "";
                    var sHRef = dataValue['href'];
                    if (sHRef !== undefined) sHTML = "<a href=\"" + sHRef + "\" target=\"_blank\">" + sHTML + "</a>";
                    controlDesc.innerHTML = sHTML;
                }
            };
            return true;

        case "descTape":
            this.bindings[sBinding] = control;
            return true;

        /*
         * "readTape" operation must do pretty much everything that the "loadTape" does, but whereas the load
         * operation records the bytes in aTapeData, the read operation stuffs them directly into the machine's memory;
         * the former sets nTapeTarget to TARGET.READER, while the latter sets it to TARGET.MEMORY.
         */
        case "readTape":
            nTapeTarget = PC11.TARGET.MEMORY;
            /* falls through */

        case "loadTape":
            if (!nTapeTarget) nTapeTarget = PC11.TARGET.READER;
            this.bindings[sBinding] = control;
            control.onclick = function onClickReadTape(event) {
                var controlTapes = pc11.bindings["listTapes"];
                if (controlTapes) {
                    var sTapeName = controlTapes.options[controlTapes.selectedIndex].text;
                    var sTapePath = controlTapes.value;
                    pc11.loadSelectedTape(sTapeName, sTapePath, nTapeTarget);
                }
            };
            return true;

        case "mountTape":
            var controlInput = /** @type {Object} */ (control);

            if (!this.fLocalTapes) {
                if (DEBUG) this.printf(MESSAGE.LOG, "Local tape support not available\n");
                /*
                 * We could also simply hide the control; eg:
                 *
                 *      controlInput.style.display = "none";
                 *
                 * but removing the control altogether seems better.
                 */
                controlInput.parentNode.removeChild(/** @type {Node} */ (controlInput));
                return false;
            }

            this.bindings[sBinding] = controlInput;

            /*
             * Enable "Mount" button only if a file is actually selected
             */
            controlInput.addEventListener('change', function() {
                var fieldset = controlInput.children[0];
                var files = fieldset.children[0].files;
                var submit = fieldset.children[1];
                submit.disabled = !files.length;
            });

            controlInput.onsubmit = function(event) {
                var file = event.currentTarget[1].files[0];
                if (file) {
                    var sTapePath = file.name;
                    var sTapeName = StrLib.getBaseName(sTapePath, true);
                    /*
                     * TODO: Provide a way to mount tapes into MEMORY as well as READER.
                     */
                    pc11.loadSelectedTape(sTapeName, sTapePath, PC11.TARGET.READER, file);
                }
                /*
                 * Prevent reloading of web page after form submission
                 */
                return false;
            };
            return true;

        case PC11.BINDING.READ_PROGRESS:
            this.bindings[sBinding] = control;
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {PC11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.ram = /** @type {RAMPDP11} */ (cmp.getMachineComponent("RAM"));

        var pc11 = this;

        var configMount = this.parseConfig(this.cmp.getMachineParm('autoMount'));

        /*
         * Add only devices from the machine-wide autoMount configuration that match devices managed by this component.
         */
        if (configMount) {
            for (var sDevice in configMount) {
                if (sDevice != this.sDevice) continue;
                this.configMount[sDevice] = configMount[sDevice];
            }
        }

        this.irqReader = this.cpu.addIRQ(PDP11.PC11.RVEC, PDP11.PC11.PRI, MESSAGE.PC11);

        this.timerReader = this.cpu.addTimer(function readyReader() {
            pc11.advanceReader();
        });

        bus.addIOTable(this, PC11.UNIBUS_IOTABLE);
        bus.addResetHandler(this.reset.bind(this));

        this.addTape("None", PC11.SOURCE.NONE, true);
        if (this.fLocalTapes) this.addTape("Local Tape", PC11.SOURCE.LOCAL);
        this.addTape("Remote Tape", PC11.SOURCE.REMOTE);

        if (!this.autoMount()) this.setReady();
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {PC11}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {PC11}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * TODO: Consider making our reset() handler ALSO restore the original loaded tape, in much the same
     * way the RAM component now restores the original predefined memory or tape image after resetting the RAM.
     *
     * @this {PC11}
     */
    reset()
    {
        this.regPRS &= ~PDP11.PC11.PRS.CLEAR;
        this.regPRB = 0;
    }

    /**
     * autoMount(fRemount)
     *
     * @this {PC11}
     * @param {boolean} [fRemount] is true if we're remounting all auto-mounted tapes
     * @returns {boolean} true if one or more tape images are being auto-mounted, false if none
     */
    autoMount(fRemount)
    {
        if (!fRemount) this.cAutoMount = 0;
        var configMount = this.configMount[this.sDevice];
        if (configMount) {
            var sTapePath = configMount['path'] || "";
            var sTapeName = configMount['name'] || this.findTape(sTapePath);
            if (sTapePath && sTapeName) {
                /*
                 * TODO: Provide a way to autoMount tapes into MEMORY as well as READER.
                 */
                if (!this.loadTape(sTapeName, sTapePath, PC11.TARGET.READER, true) && fRemount) {
                    this.setReady(false);
                }
            } else {
                /*
                 * This likely happened because there was no autoMount setting (or it was overridden with an empty value),
                 * so just make sure the current selection is set to "None".
                 */
                this.displayTape();
            }
        }
        return !!this.cAutoMount;
    }

    /**
     * loadSelectedTape(sTapeName, sTapePath, nTapeTarget, file)
     *
     * @this {PC11}
     * @param {string} sTapeName
     * @param {string} sTapePath
     * @param {number} nTapeTarget
     * @param {File} [file] is set if there's an associated File object
     */
    loadSelectedTape(sTapeName, sTapePath, nTapeTarget, file)
    {
        if (!sTapePath) {
            this.unloadTape(false);
            return;
        }

        if (sTapePath == PC11.SOURCE.LOCAL) {
            this.printf(MESSAGE.NOTICE, "Use \"Choose File\" and \"Mount\" to select and load a local tape.\n");
            return;
        }

        /*
         * If the special PC11.SOURCE.REMOTE path is selected, then we want to prompt the user for a URL.
         * Oh, and make sure we pass an empty string as the 2nd parameter to prompt(), so that IE won't display
         * "undefined" -- because after all, undefined and "undefined" are EXACTLY the same thing, right?
         *
         * TODO: This is literally all I've done to support remote tape images. There's probably more
         * I should do, like dynamically updating "listTapes" to include new entries, and adding new entries
         * to the save/restore data.
         */
        if (sTapePath == PC11.SOURCE.REMOTE) {
            sTapePath = globals.window.prompt("Enter the URL of a remote tape image.", "") || "";
            if (!sTapePath) return;
            sTapeName = StrLib.getBaseName(sTapePath);
            this.printf(MESSAGE.STATUS, 'Attempting to load %s as "%s"\n', sTapePath, sTapeName);
            this.sTapeSource = PC11.SOURCE.REMOTE;
        }
        else {
            this.sTapeSource = sTapePath;
        }

        this.loadTape(sTapeName, sTapePath, nTapeTarget, false, file);
    }

    /**
     * loadTape(sTapeName, sTapePath, nTapeTarget, fAutoMount, file)
     *
     * NOTE: If sTapePath is already loaded, nothing needs to be done.
     *
     * @this {PC11}
     * @param {string} sTapeName
     * @param {string} sTapePath
     * @param {number} nTapeTarget
     * @param {boolean} [fAutoMount]
     * @param {File} [file] is set if there's an associated File object
     * @returns {number} 1 if tape loaded, 0 if queued up (or busy), -1 if already loaded
     */
    loadTape(sTapeName, sTapePath, nTapeTarget, fAutoMount, file)
    {
        var nResult = -1;

        if (this.sTapePath.toLowerCase() != sTapePath.toLowerCase() || this.nTapeTarget != nTapeTarget) {

            nResult++;
            this.unloadTape(true);

            if (this.flags.busy) {
                this.printf(MESSAGE.NOTICE, "PC11 busy\n");
            }
            else {
                // this.printf(MESSAGE.STATUS, "tape queued: %s\n", sTapeName);
                if (fAutoMount) {
                    this.cAutoMount++;
                    this.printf("auto-loading tape \"%s\"\n", sTapeName);
                }
                if (this.load(sTapeName, sTapePath, nTapeTarget, file)) {
                    nResult++;
                } else {
                    this.flags.busy = true;
                }
            }
        }
        if (nResult) {
            /*
             * Now that we're calling parseTape() again (so that the current tape can either be restarted on
             * the reader or reloaded into RAM), we can also rely on it to display an appropriate status message, too.
             *
             *      this.printf(MESSAGE.STATUS, "%s\n", this.nTapeTarget == PC11.TARGET.READER? "tape loaded" : "tape read");
             */
            this.parseTape(this.sTapeName, this.sTapePath, this.nTapeTarget, this.aBytes, this.addrLoad, this.addrExec);
        }
        return nResult;
    }

    /**
     * load(sTapeName, sTapePath, nTapeTarget, file)
     *
     * @this {PC11}
     * @param {string} sTapeName
     * @param {string} sTapePath
     * @param {number} nTapeTarget
     * @param {File} [file] is set if there's an associated File object
     * @returns {boolean} true if load completed (successfully or not), false if queued
     */
    load(sTapeName, sTapePath, nTapeTarget, file)
    {
        var pc11 = this;
        var sTapeURL = sTapePath;

        if (DEBUG) {
            var sMessage = 'load("' + sTapeName + '","' + sTapePath + '")';
            this.printf("%s\n", sMessage);
        }

        if (file) {
            var reader = new FileReader();
            reader.onload = function doneRead() {
                pc11.finishRead(sTapeName, sTapePath, nTapeTarget, reader.result);
            };
            reader.readAsArrayBuffer(file);
            return false;
        }

        /*
         * If there's an occurrence of API_ENDPOINT anywhere in the path, we assume we can use it as-is;
         * ie, that the user has already formed a URL of the type we use ourselves for unconverted tape images.
         */
        if (sTapePath.indexOf(DumpAPI.ENDPOINT) < 0) {
            /*
             * If the selected tape image has a "json" extension, then we assume it's a pre-converted
             * JSON-encoded tape image, so we load it as-is; otherwise, we ask our server-side tape image
             * converter to return the corresponding JSON-encoded data.
             */
            var sTapeExt = StrLib.getExtension(sTapePath);
            if (sTapeExt != DumpAPI.FORMAT.JSON && sTapeExt != DumpAPI.FORMAT.JSON_GZ) {
                var sTapeParm = DumpAPI.QUERY.PATH;
                sTapeURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + sTapeParm + '=' + encodeURIComponent(sTapePath) + "&" + DumpAPI.QUERY.FORMAT + "=" + DumpAPI.FORMAT.JSON;
            }
        }

        return !!WebLib.getResource(sTapeURL, null, true, function doneLoad(sURL, sResponse, nErrorCode) {
            pc11.finishLoad(sTapeName, sTapePath, nTapeTarget, sResponse, sURL, nErrorCode);
        });
    }

    /**
     * finishLoad(sTapeName, sTapePath, sTapeData, nTapeTarget, sURL, nErrorCode)
     *
     * @this {PC11}
     * @param {string} sTapeName
     * @param {string} sTapePath
     * @param {string} sTapeData
     * @param {number} nTapeTarget
     * @param {string} sURL
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    finishLoad(sTapeName, sTapePath, nTapeTarget, sTapeData, sURL, nErrorCode)
    {
        var fPrintOnly = (nErrorCode < 0 && !!this.cmp && !this.cmp.flags.powered);

        if (nErrorCode) {
            /*
             * This can happen for innocuous reasons, such as the user switching away too quickly, forcing
             * the request to be cancelled.  And unfortunately, the browser cancels XMLHttpRequest requests
             * BEFORE it notifies any page event handlers, so if the Computer's being powered down, we won't know
             * that yet.  For now, we rely on the lack of a specific error (nErrorCode < 0), and suppress the
             * notify() alert if there's no specific error AND the computer is not powered up yet.
             */
            this.printf(MESSAGE.NOTICE, "Unable to load tape \"%s\" (error %d: %s)\n", sTapeName, nErrorCode, sURL);
        }
        else {
            if (DEBUG) {
                this.printf("finishLoad(\"%s\")\n", sTapePath);
            }
            Component.addMachineResource(this.idMachine, sURL, sTapeData);
            var resource = WebLib.parseMemoryResource(sURL, sTapeData);
            if (resource) {
                this.parseTape(sTapeName, sTapePath, nTapeTarget, resource.aBytes, resource.addrLoad, resource.addrExec);
            }
        }
        this.flags.busy = false;
        if (this.cAutoMount) {
            this.cAutoMount--;
            if (!this.cAutoMount) this.setReady();
        }
        this.displayTape();
    }

    /**
     * finishRead(sTapeName, sTapePath, nTapeTarget, buffer)
     *
     * @this {PC11}
     * @param {string} sTapeName
     * @param {string} sTapePath
     * @param {number} nTapeTarget
     * @param {?} buffer (we KNOW this is an ArrayBuffer, but we can't seem to convince the Closure Compiler)
     */
    finishRead(sTapeName, sTapePath, nTapeTarget, buffer)
    {
        if (buffer) {
            var aBytes = new Uint8Array(buffer, 0, buffer.byteLength);
            this.parseTape(sTapeName, sTapePath, nTapeTarget, aBytes);
            this.sTapeSource = PC11.SOURCE.LOCAL;
        }
        this.flags.busy = false;
        this.displayTape();
    }

    /**
     * addTape(sName, sPath, fTop)
     *
     * @this {PC11}
     * @param {string} sName
     * @param {string} sPath
     * @param {boolean} [fTop] (default is bottom)
     */
    addTape(sName, sPath, fTop)
    {
        var controlTapes = this.bindings["listTapes"];
        if (controlTapes && controlTapes.options) {
            for (var i = 0; i < controlTapes.options.length; i++) {
                if (controlTapes.options[i].value == sPath) return;
            }
            var controlOption = document.createElement("option");
            controlOption.text = sName;
            controlOption.value = sPath;
            if (fTop && controlTapes.childNodes[0]) {
                controlTapes.insertBefore(controlOption, controlTapes.childNodes[0]);
            } else {
                controlTapes.appendChild(controlOption);
            }
        }
    }

    /**
     * findTape(sPath)
     *
     * This is used to deal with mount requests (eg, autoMount) that supply a path without a name;
     * if we can find the path in the "listTapes" control, then we return the associated tape name.
     *
     * @this {PC11}
     * @param {string} sPath
     * @returns {string|null}
     */
    findTape(sPath)
    {
        var controlTapes = this.bindings["listTapes"];
        if (controlTapes && controlTapes.options) {
            for (var i = 0; i < controlTapes.options.length; i++) {
                var control = controlTapes.options[i];
                if (control.value == sPath) return control.text;
            }
        }
        return StrLib.getBaseName(sPath, true);
    }

    /**
     * displayTape()
     *
     * @this {PC11}
     */
    displayTape()
    {
        var controlTapes = this.bindings["listTapes"];
        if (controlTapes && controlTapes.options) {
            var sTargetPath = this.sTapeSource || this.sTapePath;
            for (var i = 0; i < controlTapes.options.length; i++) {
                if (controlTapes.options[i].value == sTargetPath) {
                    if (controlTapes.selectedIndex != i) {
                        controlTapes.selectedIndex = i;
                    }
                    break;
                }
            }
            if (i == controlTapes.options.length) controlTapes.selectedIndex = 0;
        }
    }

    /**
     * displayProgress(nPercent)
     *
     * @this {PC11}
     * @param {number} nPercent
     */
    displayProgress(nPercent)
    {
        nPercent |= 0;
        if (nPercent !== this.nLastPercent) {
            var control = this.bindings[PC11.BINDING.READ_PROGRESS];
            if (control) {
                var aeControls = Component.getElementsByClass(PC11.CSSCLASS.PROGRESS_BAR, "", control);
                var controlBar = aeControls && aeControls[0];
                if (controlBar && controlBar.style) {
                    controlBar.style.width = nPercent + "%";
                }
            }
            this.nLastPercent = nPercent;
        }
    }

    /**
     * parseTape(sTapeName, sTapePath, nTapeTarget, aBytes, addrLoad, addrExec)
     *
     * @this {PC11}
     * @param {string} sTapeName
     * @param {string} sTapePath
     * @param {number} nTapeTarget
     * @param {Array|Uint8Array} aBytes
     * @param {number|null} [addrLoad]
     * @param {number|null} [addrExec]
     */
    parseTape(sTapeName, sTapePath, nTapeTarget, aBytes, addrLoad, addrExec)
    {
        this.sTapeName = sTapeName;
        this.sTapePath = sTapePath;
        this.nTapeTarget = nTapeTarget;
        this.aBytes = aBytes;
        this.addrLoad = addrLoad;
        this.addrExec = addrExec;

        if (nTapeTarget == PC11.TARGET.MEMORY) {
            /*
             * Use the RAM component's loadImage() service to do our dirty work.  If the load succeeds, then
             * depending on whether there was also exec address, either the CPU will be stopped or the PC wil be
             * reset.
             *
             * NOTE: Some tapes are not in the Absolute Loader format, so if the JSON-encoded tape resource file
             * we downloaded didn't ALSO include a load address, the load will fail.
             *
             * For example, the "Absolute Loader" tape is NOT itself in the Absolute Loader format.  You just have
             * to know that in order to load that tape, you must first load the appropriate "Bootstrap Loader" (which
             * DOES include its own hard-coded load address), load the "Absolute Loader" tape, and then run the
             * "Bootstrap Loader".
             */
            if (!this.ram || !this.ram.loadImage(aBytes, addrLoad, addrExec, null, false)) {
                /*
                 * This doesn't seem to serve any purpose, other than to be annoying, because perhaps you accidentally
                 * clicked "Read" instead of "Load"....
                 *
                 *      this.sTapeName = "";
                 *      this.sTapePath = "";
                 *      this.sTapeSource = PC11.SOURCE.NONE;
                 *      this.nTapeTarget = PC11.TARGET.NONE;
                 */
                this.printf(MESSAGE.NOTICE, "No valid memory address for tape \"%s\"\n", sTapeName);
                return;
            }
            this.printf(MESSAGE.STATUS, 'Read tape "%s"\n', sTapeName);
            return;
        }

        this.iTapeData = 0;
        this.aTapeData = aBytes;
        this.regPRS &= ~PDP11.PC11.PRS.ERROR;

        this.printf(MESSAGE.STATUS, 'Loaded tape "%s" (%d bytes)\n', sTapeName, aBytes.length);
        this.displayProgress(0);
    }

    /**
     * unloadTape(fLoading)
     *
     * @this {PC11}
     * @param {boolean} [fLoading]
     */
    unloadTape(fLoading)
    {
        if (this.sTapePath || fLoading === false) {
            this.sTapeName = "";
            this.sTapePath = "";
            /*
             * Avoid any unnecessary hysteresis regarding the display if this unload is merely a prelude to another load.
             */
            if (!fLoading) {
                if (this.nTapeTarget) this.printf(MESSAGE.STATUS, "%s\n", this.nTapeTarget == PC11.TARGET.READER? "tape detached" : "tape unloaded");
                this.sTapeSource = PC11.SOURCE.NONE;
                this.nTapeTarget = PC11.TARGET.NONE;
                this.displayTape();
            }
        }
    }

    /**
     * save()
     *
     * This implements save support for the PC11 component.
     *
     * @this {PC11}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the PC11 component.
     *
     * @this {PC11}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        return true;
    }

    /**
     * getBaudTimeout(nBaud)
     *
     * Based on the selected baud rate (nBaud), convert that rate into a millisecond delay.
     *
     * @this {PC11}
     * @param {number} nBaud
     * @returns {number} (number of milliseconds per byte)
     */
    getBaudTimeout(nBaud)
    {
        /*
         * TODO: Do a better job computing this, based on actual numbers of start, stop and parity bits,
         * instead of hard-coding the total number of bits per byte to 10.
         */
        var nBytesPerSecond = Math.round(nBaud / 10);
        return 1000 / nBytesPerSecond;
    }

    /**
     * advanceReader()
     *
     * If the reader is enabled (RE is set) and there is no exceptional condition (ie, ERROR is set),
     * and if the buffer register is empty (DONE is clear), then if we have more data in our internal buffer,
     * store it in the buffer register, and optionally trigger an interrupt if device interrupts are enabled.
     *
     * @this {PC11}
     */
    advanceReader()
    {
        if ((this.regPRS & (PDP11.PC11.PRS.RE | PDP11.PC11.PRS.ERROR)) == PDP11.PC11.PRS.RE) {
            if (!(this.regPRS & PDP11.PC11.PRS.DONE)) {
                if (this.iTapeData < this.aTapeData.length) {
                    /*
                     * Here, as elsewhere (eg, the DL11 component), even if I trusted all incoming data
                     * to be byte values (which I don't), there's also the risk that it could be signed data
                     * (eg, -128 to 127, instead of 0 to 255).  Both risks are good reasons to always mask
                     * the data assigned to PRB with 0xff.
                     */
                    this.regPRB = this.aTapeData[this.iTapeData] & 0xff;
                    this.printf("%s.advanceReader(%d): %#04x\n", this.type, this.iTapeData, this.regPRB);
                    this.iTapeData++;
                    this.displayProgress(this.iTapeData / this.aTapeData.length * 100);
                }
                else {
                    this.regPRS |= PDP11.PC11.PRS.ERROR;
                }
                this.regPRS |= PDP11.PC11.PRS.DONE;
                this.regPRS &= ~PDP11.PC11.PRS.BUSY;
                if (this.regPRS & PDP11.PC11.PRS.IE) {
                    this.cpu.setIRQ(this.irqReader);
                }
            }
        }
    }

    /**
     * readPRS(addr)
     *
     * NOTE: We use the PRS RMASK to honor the "write-only" behavior of bit 0, the reader enable bit (RE), because
     * DEC's tiny Bootstrap Loader (/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.lst) repeatedly enables the reader using
     * the INC instruction, which causes the PRS to be read, incremented, and written, so if bit 0 isn't always read
     * as zero, the INC instruction would clear RE instead of setting it.
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PRS or 177550)
     * @returns {number}
     */
    readPRS(addr)
    {
        return this.regPRS & PDP11.PC11.PRS.RMASK;     // RMASK honors the "write-only" nature of the RE bit by returning zero on reads
    }

    /**
     * writePRS(data, addr)
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PRS or 177550)
     */
    writePRS(data, addr)
    {
        if (data & PDP11.PC11.PRS.RE) {
            /*
             * From the 1976 Peripherals Handbook, p. 4-378:
             *
             *      Set [RE] to allow the Reader to fetch one character. The setting of this bit clears Done,
             *      sets Busy, and clears the Reader Buffer (PRB). Operation of this bit is disabled if Error = 1;
             *      attempting to set it when Error = 1 will cause an immediate interrupt if Interrupt Enable = 1.
             */
            if (this.regPRS & PDP11.PC11.PRS.ERROR) {
                data &= ~PDP11.PC11.PRS.RE;
                if (this.regPRS & PDP11.PC11.PRS.IE) {
                    this.cpu.setIRQ(this.irqReader);
                }
            } else {
                this.regPRS &= ~PDP11.PC11.PRS.DONE;
                this.regPRS |= PDP11.PC11.PRS.BUSY;
                this.regPRB = 0;
                /*
                 * The PC11, by virtue of its "high speed", is supposed to deliver characters at 300 CPS, so
                 * that's the rate we'll choose as well (ie, 1000ms / 300).  As an aside, the original "low speed"
                 * version of the reader ran at 10 CPS.
                 */
                this.cpu.setTimer(this.timerReader, this.getBaudTimeout(this.nBaudReceive));
            }
        }
        this.regPRS = (this.regPRS & ~PDP11.PC11.PRS.WMASK) | (data & PDP11.PC11.PRS.WMASK);
    }

    /**
     * readPRB(addr)
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PRB or 177552)
     * @returns {number}
     */
    readPRB(addr)
    {
        /*
         * I'm guessing that the DONE and BUSY bits always remain more-or-less inverses of each other.  They definitely
         * start out that way when writePRS() sets the reader enable (RE) bit, and so that's how we treat them elsewhere, too.
         */
        this.regPRS &= ~PDP11.PC11.PRS.DONE;
        this.regPRS |= PDP11.PC11.PRS.BUSY;
        return this.regPRB;
    }

    /**
     * writePRB(data, addr)
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PRB or 177552)
     */
    writePRB(data, addr)
    {
    }

    /**
     * readPPS(addr)
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PPS or 177554)
     * @returns {number}
     */
    readPPS(addr)
    {
        return this.regPPS;
    }

    /**
     * writePPS(data, addr)
     *
     * NOTE: This was originally added ONLY because when RT-11 v4.0 copies from device "PC:" (the paper tape reader),
     * it executes the following code:
     *
     *      016010: 005037 177550          CLR   @#177550               ;history=2 PRS
     *      016014: 005037 177554          CLR   @#177554               ;history=1
     *
     * and as you can see, without this PPS handler, a TRAP to 4 would normally occur.  I guess since we claim to be
     * a PC11, that makes sense.  But what about PDP-11 machines with only a PR11 (ie, a reader-only unit)?
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PPS or 177554)
     */
    writePPS(data, addr)
    {
        this.regPPS = (this.regPPS & ~PDP11.PC11.PPS.WMASK) | (data & PDP11.PC11.PPS.WMASK);
    }

    /**
     * readPPB(addr)
     *
     * @this {PC11}
     * @param {number} addr (eg, PDP11.UNIBUS.PPB or 177556)
     * @returns {number}
     */
    readPPB(addr)
    {
        return this.regPPB;
    }

    /**
     * writePPB(data, addr)
     *
     * @this {PC11}
     * @param {number} data
     * @param {number} addr (eg, PDP11.UNIBUS.PPB or 177556)
     */
    writePPB(data, addr)
    {
        this.regPPB = (data & PDP11.PC11.PPB.MASK);
    }
}

/*
 * There's nothing super special about these values, except that NONE should be falsey and the others should not.
 */
PC11.SOURCE = {
    NONE:   "",
    LOCAL:  "?",
    REMOTE: "??"
};

PC11.TARGET = {
    NONE:   0,
    READER: 1,
    MEMORY: 2
};

PC11.BINDING = {
    READ_PROGRESS:  "readProgress"
};

PC11.CSSCLASS = {
    PROGRESS_BAR:   CSSCLASS + "-progress-bar"
};

/*
 * ES6 ALERT: As you can see below, I've finally started using computed property names.
 */
PC11.UNIBUS_IOTABLE = {
    [PDP11.UNIBUS.PRS]:     /* 177550 */    [null, null, PC11.prototype.readPRS,    PC11.prototype.writePRS,    "PRS"],
    [PDP11.UNIBUS.PRB]:     /* 177552 */    [null, null, PC11.prototype.readPRB,    PC11.prototype.writePRB,    "PRB"],
    [PDP11.UNIBUS.PPS]:     /* 177554 */    [null, null, PC11.prototype.readPPS,    PC11.prototype.writePPS,    "PPS"],
    [PDP11.UNIBUS.PPB]:     /* 177556 */    [null, null, PC11.prototype.readPPB,    PC11.prototype.writePPB,    "PPB"]
};
