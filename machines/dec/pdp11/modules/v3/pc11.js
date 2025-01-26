/**
 * @fileoverview Implements PDP-11 High-Speed Paper Tape Reader/Punch (eg, PC11)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import PDP11   from "./pdp11.js";
import Device  from "../../../../modules/v3/device.js";
import MESSAGE from "../../../../modules/v3/message.js";

MESSAGE.PC11            = 0x000020000000;
MESSAGE.NAMES["pc11"]   = MESSAGE.PC11;

/**
 * The PC11 component has the following configuration properties:
 *
 *      name: PC11 device name; "PTR" if not specified.
 *
 *      autoLoad: the name, if any, of a paper tape image to automatically load at startup
 *      (only the "load" operation is supported; if you want to "read" a tape image directly
 *      into RAM at startup, you must ask the RAM device to do that).
 *
 *      baudReceive: the default number of bits/second that the device should receive data at;
 *      0 means use the device default (PDP11.PC11.PRS.BAUD).
 *
 *      baudTransmit: the default number of bits/second that the device should transmit data at;
 *      0 means use the device default (PDP11.PC11.PPS.BAUD); TODO: currently ignored, since punch
 *      support isn't implemented yet.
 *
 *      library: the name, if any, of a media library containing PC11 tape images.
 *
 * @typedef {Config} PC11Config
 * @property {string} name
 * @property {Media|string} autoLoad
 * @property {number} baudReceive
 * @property {number} [baudTransmit]
 * @property {Array.<Media>|string} library
 * @property {Media|null} mediaLoaded
 */

/**
 * @class PC11
 * @unrestricted
 */
export default class PC11 extends Device {
    /**
     * PC11(idMachine, idDevice, config)
     *
     * @this {PC11}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        this.name = this.config['name'] || "PTR";
        this.autoLoad = this.getMachineConfig('autoLoad') || "";
        this.baudReceive = +this.config['baudReceive'] || PDP11.PC11.PRS.BAUD;
        this.library = this.config['library'] || [];
        this.mediaLoaded = null;
        /**
         * Support for local tape images is currently limited to desktop browsers with FileReader support;
         * when this flag is set, setBinding() allows local tape bindings and informs initBus() to update the
         * LIST_TAPES binding accordingly.
         */
        this.fLocalTapes = (window && 'FileReader' in window);

        this.bus = /** @type {Bus} */ (this.findDeviceByClass("Bus"));
        this.time = /** @type {Time} */ (this.findDeviceByClass("Time"));
        this.timerReader = this.time.addTimer(this.idDevice + ".reader", this.advanceReader.bind(this));
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input"));

        this.fLoading = false;
        this.irqReader = null;

        this.regPRS = 0;                        // PRS register
        this.regPRB = 0;                        // PRB register
        this.regPPS = PDP11.PC11.PPS.ERROR;     // PPS register (TODO: Stop signaling error once punch is implemented)
        this.regPPB = 0;                        // PPB register
        this.iTapeData = 0;                     // buffer index
        this.aTapeData = [];                    // buffer for the PRB register
        this.sSource = PC11.SOURCE.NONE;
        this.nTarget = PC11.TARGET.NONE;
        this.nLastPercent = -1;                 // ensure the first displayProgress() displays something

        this.ports = /** @type {Ports} */ (this.findDeviceByClass("IOPage"));
        this.ports.addIOTable(this, PC11.IOTABLE);

        if (!this.getMedia(this.library, this.parseLibrary.bind(this))) {
            this.setReady(false);
        }
    }

    /**
     * addBinding(binding, element)
     *
     * v1 machines relied on setBinding(sHTMLType, sBinding, control, sValue); v2 machines use an addBinding() override.

     * @this {PC11}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let pc11 = this;
        let elementInput;
        let nTarget = PC11.TARGET.NONE;

        switch (binding) {
        /**
         * "readTape" operation must do pretty much everything that the "loadTape" does, but whereas the load
         * operation records the bytes in aTapeData, the read operation stuffs them directly into the machine's memory;
         * the former sets nTarget to TARGET.READER, while the latter sets it to TARGET.MEMORY.
         */
        case "readTape":
            nTarget = PC11.TARGET.MEMORY;
            /* falls through */

        case "loadTape":
            if (!nTarget) nTarget = PC11.TARGET.READER;
            element.onclick = function onClickReadTape(event) {
                let elementTapes = pc11.bindings[PC11.BINDING.LIST_TAPES];
                if (elementTapes) {
                    let media = pc11.library[elementTapes.selectedIndex];
                    if (media) pc11.loadMedia(media, nTarget);
                }
            };
            break;

        case "mountTape":
            elementInput = /** @type {Object} */ (element);
            if (!this.fLocalTapes) {
                this.printf("Local tape support not available\n");
                /**
                 * We could also simply hide the element; eg:
                 *
                 *      elementInput.style.display = "none";
                 *
                 * but removing the element altogether seems better.
                 */
                elementInput.parentNode.removeChild(/** @type {Node} */ (elementInput));
                break;
            }

            /**
             * Enable "Mount" button only if a file is actually selected
             */
            elementInput.addEventListener('change', function() {
                let fieldset = elementInput.children[0];
                let files = fieldset.children[0].files;
                let submit = fieldset.children[1];
                submit.disabled = !files.length;
            });

            elementInput.onsubmit = function(event) {
                let file = event.currentTarget[1].files[0];
                if (file) {
                    /**
                     * TODO: Provide a way to mount tapes into MEMORY as well as READER.
                     */
                    pc11.loadMedia({"name": this.getBaseName(file.name, true), "path": file.name}, PC11.TARGET.READER, file);
                }
                /**
                 * Prevent reloading of web page after form submission
                 */
                return false;
            };
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * onSelect(event)
     *
     * @this {PC11}
     * @param {Event} event
     */
    onSelect(event)
    {
        let elementDesc = this.bindings[PC11.BINDING.DESC_TAPE];
        let elementSelect = this.bindings[PC11.BINDING.LIST_TAPES];
        let elementOption = elementSelect.options[elementSelect.selectedIndex];
        if (elementDesc && elementOption) {
            let dataValue = {};
            let sValue = elementOption.getAttribute("data-value");
            if (sValue) {
                try {
                    dataValue = eval("(" + sValue + ")");
                } catch (err) {
                    this.printf("PC11 option error: %s", err.message);
                }
            }
            let sHTML = dataValue['desc'];
            if (sHTML === undefined) sHTML = "";
            let sHRef = dataValue['href'];
            if (sHRef !== undefined) sHTML = "<a href=\"" + sHRef + "\" target=\"_blank\">" + sHTML + "</a>";
            elementDesc.innerHTML = sHTML;
        }
    }

    /**
     * loadState(state)
     *
     * Memory and Ports states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {PC11}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        let idDevice = state.shift();
        if (this.idDevice == idDevice) {
            return true;
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * Memory and Ports states are managed by the Bus onSave() handler, which calls our saveState() handler.
     *
     * @this {PC11}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(this.idDevice);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {PC11}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (!this.cpu) {
            this.cpu = /** @type {PDP11} */ (this.findDeviceByClass("CPU"));
            this.irqReader = this.cpu.addIRQ(PDP11.PC11.RVEC, PDP11.PC11.PRI, MESSAGE.PC11);
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * TODO: Consider making our reset() handler ALSO restore the original loaded tape, in much the same
     * way the RAM component now restores the original predefined memory or tape image after resetting the RAM.
     *
     * @this {PC11}
     */
    onReset()
    {
        this.regPRS &= ~PDP11.PC11.PRS.CLEAR;
        this.regPRB = 0;
    }

    /**
     * loadMedia(media, nTarget, file)
     *
     * @this {PC11}
     * @param {Media} media
     * @param {number} nTarget
     * @param {File} [file] is set if there's an associated File object
     * @returns {boolean} true if load completed (successfully or not), false if queued
     */
    loadMedia(media, nTarget, file)
    {
        let name = media['name'];
        let path = media['path'];

        this.printf(MESSAGE.PC11, 'load("%s","%s")\n', name, path);

        if (!path) {
            this.unloadMedia(false);
            return true;
        }

        if (path == PC11.SOURCE.LOCAL) {
            this.alert('Use "Choose File" and "Mount" to select and load a local tape.');
            return true;
        }

        /**
         * If the special PC11.SOURCE.REMOTE path is selected, then we want to prompt the user for a URL.
         * Oh, and make sure we pass an empty string as the 2nd parameter to prompt(), so that IE won't display
         * "undefined" -- because after all, undefined and "undefined" are EXACTLY the same thing, right?
         *
         * TODO: This is literally all I've done to support remote tape images. There's probably more
         * I should do, like dynamically updating LIST_TAPES to include new entries, and adding new entries
         * to the save/restore data.
         */
        if (path == PC11.SOURCE.REMOTE) {
            path = window.prompt("Enter the URL of a remote tape image.", "") || "";
            if (!path) return false;
            name = this.getBaseName(path);
            this.printf('Attempting to load %s as "%s"', path, name);
            this.sSource = PC11.SOURCE.REMOTE;
        }
        else {
            this.sSource = path;
        }

        this.nTarget = nTarget;

        if (file) {
            let pc11 = this;
            let reader = new FileReader();
            reader.onload = function doneRead() {
                pc11.finishMedia(media, reader.result);
            };
            reader.readAsArrayBuffer(file);
            return false;
        }

        if (!media['values'] && !this.getMedia(media['path'], this.parseMedia.bind(this))) {
            return false;
        }

        this.parseMedia(media);
        return true;
    }

    /**
     * finishMedia(media, buffer)
     *
     * @this {PC11}
     * @param {Media} media
     * @param {?} buffer (we KNOW this is an ArrayBuffer, but we can't seem to convince the Closure Compiler)
     */
    finishMedia(media, buffer)
    {
        if (buffer) {
            media['values'] = new Uint8Array(buffer, 0, buffer.byteLength);
            this.parseMedia(media);
            this.sSource = PC11.SOURCE.LOCAL;
        }
        this.fLoading = false;
        this.displayTape();
    }

    /**
     * displayTape()
     *
     * @this {PC11}
     */
    displayTape()
    {
        if (this.mediaLoaded) {
            let listTapes = this.bindings[PC11.BINDING.LIST_TAPES];
            if (listTapes && listTapes.options) {
                let i;
                for (i = 0; i < listTapes.options.length; i++) {
                    if (listTapes.options[i].value == this.mediaLoaded['path']) {
                        if (listTapes.selectedIndex != i) {
                            listTapes.selectedIndex = i;
                        }
                        break;
                    }
                }
                if (i == listTapes.options.length) listTapes.selectedIndex = 0;
            }
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
            let element = this.bindings[PC11.BINDING.READ_PROGRESS];
            if (element) {
                let aElements = element.getElementsByClassName(PC11.CSSCLASS.PROGRESS_BAR);
                let progressBar = aElements && aElements[0];
                if (progressBar && progressBar.style) {
                    progressBar.style.width = nPercent + "%";
                }
            }
            this.nLastPercent = nPercent;
        }
    }

    /**
     * parseLibrary(media)
     *
     * @this {PC11}
     * @param {*} media
     */
    parseLibrary(media)
    {
        this.library = /** @type {Array.<Media>} */ (media || []);
        this.input.bindSelect(this, PC11.BINDING.LIST_TAPES, this.library, this.onSelect.bind(this));

        this.input.addSelect(this, PC11.BINDING.LIST_TAPES, "None", PC11.SOURCE.NONE, true);
        if (this.fLocalTapes) this.input.addSelect(this, PC11.BINDING.LIST_TAPES, "Local Tape", PC11.SOURCE.LOCAL);
        this.input.addSelect(this, PC11.BINDING.LIST_TAPES, "Remote Tape", PC11.SOURCE.REMOTE);
        this.setReady(true);

        /**
         * Now that the media library, if any, is loaded, look up the autoLoad media, if any.
         */
        let i = -1;
        if (this.autoLoad) {
            if (typeof this.autoLoad == "string") {
                for (i = 0; i < this.library.length; i++) {
                    let item = this.library[i];
                    if (typeof item == "object" && item['name'] == this.autoLoad) {
                        this.autoLoad = item;
                        break;
                    }
                }
                if (i == this.library.length) {
                    this.alert("Unable to find %s media: %s", this.idDevice, this.autoLoad);
                    this.autoLoad = "";
                }
            }
        }
        if (this.autoLoad) {
            /**
             * TODO: Provide a way to autoLoad tapes into MEMORY as well as READER.
             */
            if (!this.loadMedia(/** @type {Media} */ (this.autoLoad), PC11.TARGET.READER)) {
                this.setReady(false);
            }
        } else {
            /**
             * This likely happened because there was no autoLoad setting (or it was overridden with an empty value),
             * so just make sure the current selection is set to "None".
             */
            this.displayTape();
        }
    }

    /**
     * parseMedia(media)
     *
     * @this {PC11}
     * @param {*} media
     */
    parseMedia(media)
    {
        let name = media['name'];
        let aBytes = media['values'];
        let addrLoad = media['addrLoad'];
        let addrExec = media['addrExec'];

        this.mediaLoaded = media;
        this.setReady(true);

        if (this.nTarget == PC11.TARGET.MEMORY) {
            /**
             * Use parseTape() service to do our dirty work.  If the load succeeds, then depending on whether there
             * was also exec address, either the CPU will be stopped or the PC wil be reset.
             *
             * NOTE: Some tapes are not in the Absolute Loader format, so if the JSON-encoded tape resource file
             * we downloaded didn't ALSO include a load address, the load will fail.
             *
             * For example, the "Absolute Loader" tape is NOT itself in the Absolute Loader format.  You just have
             * to know that in order to load that tape, you must first load the appropriate "Bootstrap Loader" (which
             * DOES include its own hard-coded load address), load the "Absolute Loader" tape, and then run the
             * "Bootstrap Loader".
             */
            if (!this.parseTape(aBytes, addrLoad, addrExec, null, false)) {
                /**
                 * This doesn't seem to serve any purpose, other than to be annoying, because perhaps you accidentally
                 * clicked "Read" instead of "Load"....
                 *
                 *      this.mediaLoaded = null;
                 *      this.sSource = PC11.SOURCE.NONE;
                 *      this.nTarget = PC11.TARGET.NONE;
                 */
                this.alert('No valid memory address for tape "%s"', name);
                return;
            }
            this.printf('Read tape "%s"', name);
            return;
        }

        this.iTapeData = 0;
        this.aTapeData = aBytes;
        this.regPRS &= ~PDP11.PC11.PRS.ERROR;

        this.printf('Loaded tape "%s" (%d bytes)', name, aBytes.length);
        this.displayProgress(0);
    }

    /**
     * parseTape(aBytes, addrLoad, addrExec, addrInit, fStart)
     *
     * If the array contains a PAPER tape image in the "Absolute Format," load it as specified
     * by the format; otherwise, load it as-is using the address(es) supplied.
     *
     * @this {PC11}
     * @param {Array|Uint8Array} aBytes
     * @param {number|null} [addrLoad]
     * @param {number|null} [addrExec] (this CAN override any starting address INSIDE the image)
     * @param {number|null} [addrInit]
     * @param {boolean} [fStart]
     * @returns {boolean} (true if loaded, false if not)
     */
    parseTape(aBytes, addrLoad, addrExec, addrInit, fStart)
    {
        let fStop = false;
        let fLoaded = false;
        /**
         * Data on tapes in the "Absolute Format" is organized into blocks; each block begins with
         * a 6-byte header:
         *
         *      2-byte signature (0x0001)
         *      2-byte block length (N + 6, because it includes the 6-byte header)
         *      2-byte load address
         *
         * followed by N data bytes.  If N is zero, then the 2-byte load address is the exec address,
         * unless the address is odd (usually 1).  DEC's Absolute Loader jumps to the exec address
         * in former case, halts in the latter.
         *
         * All values are stored "little endian" (low byte followed by high byte), just like the
         * PDP-11's memory architecture.
         *
         * After the data bytes, there is a single checksum byte.  The 8-bit sum of all the bytes in
         * the block (including the header bytes and checksum byte) should be zero.
         *
         * ANOMALIES: Tape files don't always begin with a signature word, so I allow any number of
         * leading zeros before the first signature.  Tape files don't always end cleanly either, so as
         * soon as I see an invalid signature, I break out of the loop without signalling an error, as
         * long as at least ONE block was successfully processed.  In fact, it's possible that as
         * soon as a block with ZERO data bytes is encountered, processing is supposed to stop, but
         * I haven't examined enough tapes (or the Absolute Loader code) to know for sure.
         */
        if (addrLoad == null) {
            let off = 0, fError = false;
            while (off < aBytes.length - 1) {
                let w = (aBytes[off] & 0xff) | ((aBytes[off+1] & 0xff) << 8);
                if (!w) {           // ignore pairs of leading zeros
                    off += 2;
                    continue;
                }
                if (!(w & 0xff)) {  // as well as single bytes of zero
                    off++;
                    continue;
                }
                let offBlock = off;
                if (w != 0x0001) {
                    this.printf(MESSAGE.PC11, "invalid signature (%#06x) at offset %#06x\n", w, offBlock);
                    break;
                }
                if (off + 6 >= aBytes.length) {
                    this.printf(MESSAGE.PC11, "invalid block at offset %#06x\n", offBlock);
                    break;
                }
                off += 2;
                let checksum = w;
                let len = (aBytes[off++] & 0xff) | ((aBytes[off++] & 0xff) << 8);
                let addr = (aBytes[off++] & 0xff) | ((aBytes[off++] & 0xff) << 8);
                checksum += (len & 0xff) + (len >> 8) + (addr & 0xff) + (addr >> 8);
                let offData = off, cbData = len -= 6;
                while (len > 0 && off < aBytes.length) {
                    checksum += aBytes[off++] & 0xff;
                    len--;
                }
                if (len != 0 || off >= aBytes.length) {
                    this.printf(MESSAGE.PC11, "insufficient data for block at offset %#06x\n", offBlock);
                    break;
                }
                checksum += aBytes[off++] & 0xff;
                if (checksum & 0xff) {
                    this.printf(MESSAGE.PC11, "invalid checksum (%#04x) for block at offset %#06x\n", checksum, offBlock);
                    break;
                }
                if (!cbData) {
                    if (addr & 0x1) {
                        fStop = true;
                    } else {
                        if (addrExec == null) addrExec = addr;
                    }
                    if (addrExec != null) this.printf(MESSAGE.PC11, "starting address: %#06x\n", addrExec);
                } else {
                    this.printf(MESSAGE.PC11, "loading %#06x bytes at %#06x-%#06x\n", cbData, addr, addr + cbData);
                    while (cbData--) {
                        this.bus.writeDirect(addr++, aBytes[offData++] & 0xff);
                    }
                }
                fLoaded = true;
            }
        }
        if (!fLoaded) {
            if (addrLoad == null) addrLoad = addrInit;
            if (addrLoad != null) {
                for (let i = 0; i < aBytes.length; i++) {
                    this.bus.writeDirect(addrLoad + i, aBytes[i]);
                }
                fLoaded = true;
            }
        }
        if (fLoaded) {
            /**
             * Set the start address to whatever the caller provided, or failing that, whatever start
             * address was specified inside the image.
             *
             * For example, the diagnostic "MAINDEC-11-D0AA-PB" doesn't include a start address inside the
             * image, but we know that the directions for that diagnostic say to "Start and Restart at 200",
             * so we have manually inserted an "exec":128 in the JSON containing the image.
             */
            if (addrExec == null || fStop) {
                this.time.stop();
                fStart = false;
            }
            if (addrExec != null) {
                this.cpu.setReset(addrExec, fStart);
            }
        }
        return fLoaded;
    }

    /**
     * unloadMedia(fLoading)
     *
     * @this {PC11}
     * @param {boolean} [fLoading]
     */
    unloadMedia(fLoading)
    {
        if (this.mediaLoaded || fLoading === false) {
            this.mediaLoaded = null;
            /**
             * Avoid any unnecessary hysteresis regarding the display if this unload is merely a prelude to another load.
             */
            if (!fLoading) {
                if (this.nTarget) this.printf(this.nTarget == PC11.TARGET.READER? "tape detached" : "tape unloaded");
                this.sSource = PC11.SOURCE.NONE;
                this.nTarget = PC11.TARGET.NONE;
                this.displayTape();
            }
        }
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
        /**
         * TODO: Do a better job computing this, based on actual numbers of start, stop and parity bits,
         * instead of hard-coding the total number of bits per byte to 10.
         */
        let nBytesPerSecond = Math.round(nBaud / 10);
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
                    /**
                     * Here, as elsewhere (eg, the DL11 component), even if I trusted all incoming data
                     * to be byte values (which I don't), there's also the risk that it could be signed data
                     * (eg, -128 to 127, instead of 0 to 255).  Both risks are good reasons to always mask
                     * the data assigned to PRB with 0xff.
                     */
                    this.regPRB = this.aTapeData[this.iTapeData] & 0xff;
                    this.printf(MESSAGE.PC11, "%s.advanceReader(%d): %#02x\n", this.idDevice, this.iTapeData, this.regPRB);
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
            /**
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
                /**
                 * The PC11, by virtue of its "high speed", is supposed to deliver characters at 300 CPS, so
                 * that's the rate we'll choose as well (ie, 1000ms / 300).  As an aside, the original "low speed"
                 * version of the reader ran at 10 CPS.
                 */
                this.time.setTimer(this.timerReader, this.getBaudTimeout(this.baudReceive));
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
        /**
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

/**
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
    LIST_TAPES:     "listTapes",
    DESC_TAPE:      "descTape",
    READ_PROGRESS:  "readProgress"
};

PC11.CSSCLASS = {
    PROGRESS_BAR:   "progressBar"
};

PC11.IOTABLE = {
    [PDP11.UNIBUS.PRS]:     /* 177550 */    [null, null, PC11.prototype.readPRS,    PC11.prototype.writePRS,    "PRS"],
    [PDP11.UNIBUS.PRB]:     /* 177552 */    [null, null, PC11.prototype.readPRB,    PC11.prototype.writePRB,    "PRB"],
    [PDP11.UNIBUS.PPS]:     /* 177554 */    [null, null, PC11.prototype.readPPS,    PC11.prototype.writePPS,    "PPS"],
    [PDP11.UNIBUS.PPB]:     /* 177556 */    [null, null, PC11.prototype.readPPB,    PC11.prototype.writePPB,    "PPB"]
};

PC11.CLASSES["PC11"] = PC11;
