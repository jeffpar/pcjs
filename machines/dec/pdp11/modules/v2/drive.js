/**
 * @fileoverview Implements a generic disk drive controller
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DiskPDP11 from "./disk.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DiskAPI from "../../../../modules/v2/diskapi.js";
import State from "../../../../modules/v2/state.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { DEBUG, MAXDEBUG, globals } from "./defines.js";

/**
 * @typedef {Object} Config
 * @property {number} PRI
 * @property {number} VEC
 * @property {number} DRIVES
 */

/**
 * Since the Closure Compiler treats ES6 classes as @struct rather than @dict by default,
 * it deters us from defining named properties on our components; eg:
 *
 *      this['exports'] = {...}
 *
 * results in an error:
 *
 *      Cannot do '[]' access on a struct
 *
 * So, in order to define 'exports', we must override the @struct assumption by annotating
 * the class as @unrestricted (or @dict).  Note that this must be done both here and in the
 * Component class, because otherwise the Compiler won't allow us to *reference* the named
 * property either.
 *
 * TODO: Consider marking ALL our classes unrestricted, because otherwise it forces us to
 * define every single property the class uses in its constructor, which results in a fair
 * bit of redundant initialization, since many properties aren't (and don't need to be) fully
 * initialized until the appropriate init(), reset(), restore(), etc. function is called.
 *
 * The upside, however, may be that since the structure of the class is completely defined by
 * the constructor, JavaScript engines may be able to optimize and run more efficiently.
 *
 * @unrestricted
 */
export default class DriveController extends Component {
    /**
     * DriveController(type, parms, bitsMessage, configDC, configDrive, configIO)
     *
     * The DriveController component has the following component-specific (parms) properties:
     *
     *      autoMount: one or more JSON-encoded objects, each containing 'name' and 'path' properties
     *
     * @this {DriveController}
     * @param {string} type
     * @param {Object} parms
     * @param {number} bitsMessage
     * @param {Config} configDC
     * @param {Array} configDrive
     * @param {Object} configIO
     */
    constructor(type, parms, bitsMessage, configDC, configDrive, configIO)
    {
        super(type, parms, bitsMessage);

        /*
         * We preliminarily parse and record any 'autoMount' object now, but we no longer process it
         * until initBus(), because the Computer's getMachineParm() service may have an override for us.
         */
        this.configMount = this.parseConfig(parms['autoMount']);
        this.cAutoMount = 0;

        this.configDC = configDC;
        this.configDrive = configDrive;
        this.configIO = configIO;

        this.nDrives = configDC.DRIVES;
        this.aDrives = new Array(this.nDrives);
        this.fLocalDisks = (!WebLib.isMobile() && 'FileReader' in globals.window);
        this.sDiskSource = DriveController.SOURCE.NONE;

        /*
         * The following array keeps track of every disk image we've ever mounted.  Each entry in the
         * array is another array whose elements are:
         *
         *      [0]: name of disk
         *      [1]: path of disk
         *      [2]: array of deltas, uninitialized until the disk is unmounted and/or all state is saved
         *
         * See functions addDiskHistory() and updateDiskHistory().
         */
        this.aDiskHistory = [];

        this.irq = null;

        this['exports'] = {
            'bootDisk':     this.bootSelectedDisk,
            'loadDisk':     this.loadSelectedDisk,
            'selectDrive':  this.selectDrive,
            'wait':         this.waitDrives
        };
    }

    /**
     * parseConfig(config)
     *
     * @this {DriveController}
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
     * @this {DriveController}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", etc)
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "listDisks")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        var dc = this;

        switch (sBinding) {

        case "listDisks":
            this.bindings[sBinding] = control;
            control.onchange = function onChangeListDisks(event) {
                dc.updateSelectedDisk();
            };
            return true;

        case "descDisk":
        case "listDrives":
            this.bindings[sBinding] = control;
            /*
             * I tried going with onclick instead of onchange, so that if you wanted to confirm what's
             * loaded in a particular drive, you could click the drive control without having to change it.
             * However, that doesn't seem to work for all browsers, so I've reverted to onchange.
             */
            var controlSelect = /** @type {HTMLSelectElement} */ (control);
            control.onchange = function onChangeListDrives(event) {
                var iDrive = StrLib.parseInt(controlSelect.value, 10);
                if (iDrive != null) dc.displayDisk(iDrive);
            };
            return true;

        case "loadDisk":
            this.bindings[sBinding] = control;
            control.onclick = function onClickLoadDrive(event) {
                dc.loadSelectedDisk();
            };
            return true;

        case "bootDisk":
            this.bindings[sBinding] = control;
            control.onclick = function onClickBootDisk(event) {
                dc.bootSelectedDisk();
            };
            return true;

        case "saveDisk":
            /*
             * Yes, technically, this feature does not require "Local disk support" (which is really a reference
             * to FileReader support), but since fLocalDisks is also false for all mobile devices, and since there
             * is an "orthogonality" to disabling both features in tandem, let's just let it slide, OK?
             */
            if (!this.fLocalDisks) {
                if (DEBUG) this.printf(MESSAGE.LOG, "Local disk support not available\n");
                /*
                 * We could also simply hide the control; eg:
                 *
                 *      control.style.display = "none";
                 *
                 * but removing the control altogether seems better.
                 */
                control.parentNode.removeChild(/** @type {Node} */ (control));
                return false;
            }

            this.bindings[sBinding] = control;

            control.onclick = function onClickSaveDrive(event) {
                var controlDrives = dc.bindings["listDrives"];
                if (controlDrives && controlDrives.options && dc.aDrives) {
                    var iDriveSelected = StrLib.parseInt(controlDrives.value, 10) || 0;
                    var drive = dc.aDrives[iDriveSelected];
                    if (drive) {
                        /*
                         * Note the similarity (and hence factoring opportunity) between this code and the HDC's "saveHD*" binding.
                         */
                        var disk = drive.disk;
                        if (disk) {
                            if (DEBUG) dc.printf("saving disk %s...\n", disk.sDiskPath);
                            var sAlert = WebLib.downloadFile(disk.encodeAsBinary(), "octet-stream", true, disk.sDiskFile.replace(".json", ".img"));
                            Component.alertUser(sAlert);
                        } else {
                            dc.printf(MESSAGE.NOTICE, "No disk loaded in drive.\n");
                        }
                    } else {
                        dc.printf(MESSAGE.NOTICE, "No disk drive selected.\n");
                    }
                }
            };
            return true;

        case "mountDisk":
            var controlInput = /** @type {Object} */ (control);

            if (!this.fLocalDisks) {
                if (DEBUG) this.printf(MESSAGE.LOG, "Local disk support not available\n");
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
                    var sDiskPath = file.name;
                    var sDiskName = StrLib.getBaseName(sDiskPath, true);
                    dc.loadSelectedDisk(sDiskName, sDiskPath, file);
                }
                /*
                 * Prevent reloading of web page after form submission
                 */
                return false;
            };
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {DriveController}
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

        var configMount = this.parseConfig(this.cmp.getMachineParm('autoMount'));

        /*
         * Add only drives from the machine-wide autoMount configuration that match drives managed by this component.
         */
        if (configMount) {
            for (var sDrive in configMount) {
                if (sDrive.substr(0, 2) != this.type.substr(0, 2)) continue;
                this.configMount[sDrive] = configMount[sDrive];
            }
        }

        /*
         * If we didn't need auto-mount support, we could defer controller and drive initialization until we received
         * a powerUp() notification, at which point reset() would call initController(), or restore() would restore the
         * controller.
         */
        this.reset();

        this.irq = this.cpu.addIRQ(this.configDC.VEC, this.configDC.PRI, this.bitsMessage);

        bus.addIOTable(this, this.configIO);
        bus.addResetHandler(this.reset.bind(this));

        this.addDisk("None", DriveController.SOURCE.NONE, true);
        if (this.fLocalDisks) this.addDisk("Local Disk", DriveController.SOURCE.LOCAL);
        this.addDisk("Remote Disk", DriveController.SOURCE.REMOTE);

        if (!this.autoMount()) this.setReady();
    }

    /**
     * getDriveName(iDrive)
     *
     * Form a drive name using the two-letter controller type prefix and the drive number.
     *
     * @this {DriveController}
     * @param {number} iDrive
     * @returns {string}
     */
    getDriveName(iDrive)
    {
        var drive = this.aDrives[iDrive];
        return drive.sName || "---";
    }

    /**
     * getDriveNumber(sDrive)
     *
     * @this {DriveController}
     * @param {string} sDrive
     * @returns {number} (0-3, or -1 if error)
     */
    getDriveNumber(sDrive)
    {
        var iDrive = -1;
        if (sDrive) {
            iDrive = sDrive.charCodeAt(sDrive.length - 1) - 0x30;
            if (iDrive < 0 || iDrive > 9) iDrive = -1;
        }
        return iDrive;
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {DriveController}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data) {
                this.reset();
                if (this.cmp.fReload) {
                    /*
                     * If the computer's fReload flag is set, we're required to toss all currently
                     * loaded disks and remount all disks specified in the auto-mount configuration.
                     */
                    this.unloadAllDrives(true);
                    this.autoMount(true);
                }
            } else {
                if (!this.restore(data)) return false;
            }
            /*
             * Populate the HTML controls to match the actual (well, um, specified) number of floppy drives.
             */
            var controlDrives;
            if ((controlDrives = this.bindings['listDrives'])) {
                while (controlDrives.firstChild) {
                    controlDrives.removeChild(controlDrives.firstChild);
                }
                controlDrives.value = "";
                for (var iDrive = 0; iDrive < this.nDrives; iDrive++) {
                    var controlOption = document.createElement("option");
                    controlOption.value = iDrive;
                    controlOption.text = this.getDriveName(iDrive);
                    controlDrives.appendChild(controlOption);
                }
                if (this.nDrives > 0) {
                    controlDrives.value = "0";
                    this.displayDisk(0);
                }
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {DriveController}
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
     * @this {DriveController}
     */
    reset()
    {
        this.initController();
        this.initDrives();
    }

    /**
     * save()
     *
     * This implements save support for the DriveController component.
     *
     * @this {DriveController}
     * @returns {Object}
     */
    save()
    {
        var state = new State(this);
        state.set(0, this.saveController());
        state.set(1, this.saveHistory());
        state.set(2, this.saveDrives());
        return state.data();
    }

    /**
     * restore(data)
     *
     * This implements restore support for the DriveController component.
     *
     * @this {DriveController}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        var fSuccess = true;
        if (!this.initController(data[0])) fSuccess = false;
        if (!this.initHistory(data[1])) fSuccess = false;
        if (!this.initDrives(data[2])) fSuccess = false;
        return fSuccess;
    }

    /**
     * initController(aRegs)
     *
     * Placeholder for subclasses.
     *
     * @this {DriveController}
     * @param {Array} [aRegs]
     * @returns {boolean} true if successful, false if failure
     */
    initController(aRegs)
    {
        return true;
    }

    /**
     * saveController()
     *
     * Placeholder for subclasses.
     *
     * @this {DriveController}
     * @returns {Array}
     */
    saveController()
    {
        return [];
    }

    /**
     * initDrive(drive, iDrive, configDrive, configDisk)
     *
     * @this {DriveController}
     * @param {Object} drive
     * @param {number} iDrive
     * @param {Array} configDrive
     * @param {Array} [configDisk]
     * @returns {boolean} true if successful, false if failure
     */
    initDrive(drive, iDrive, configDrive, configDisk)
    {
        var i = 0;
        var fSuccess = true;

        drive.iDrive = iDrive;
        drive.name = this.idComponent;
        drive.fBusy = drive.fLocal = false;
        drive.fnCallReady = null;
        drive.fRemovable = true;

        /*
         * NOTE: We initialize the following drive properties to their MAXIMUMs; disks may have
         * these or SMALLER values (subject to the limits of what the controller supports, of course).
         */
        drive.sName = configDrive[i++] + iDrive;
        drive.nCylinders = configDrive[i++];
        drive.nHeads = configDrive[i++];
        drive.nSectors = configDrive[i++];
        drive.cbSector = configDrive[i++];
        drive.iCylinderBoot = configDrive[i++];
        drive.iHeadBoot = configDrive[i++];
        drive.iSectorBoot = configDrive[i++];
        drive.cbSectorBoot = configDrive[i++];
        drive.status = configDrive[i];

        /*
         * The next group of properties are set by various controller command sequences.
         */
        drive.bHead = 0;
        drive.bCylinder = 0;
        drive.bSector = 1;
        drive.bSectorEnd = drive.nSectors;      // aka EOT
        drive.nBytes = drive.cbSector;

        /*
         * The next group of properties are managed by worker functions (eg, doRead()) to maintain state across DMA requests.
         */
        drive.ibSector = 0;
        drive.sector = null;

        if (!drive.disk) {
            drive.sDiskPath = "";               // ensure this is initialized to a default that displayDisk() can deal with
        }

        if (configDisk) {
            var fLocal = configDisk[0];
            var sDiskName = configDisk[1];
            var sDiskPath = configDisk[2];
            /*
             * If we're restoring a local disk image, then the entire disk contents should be captured in aDiskHistory,
             * so all we have to do is mount a blank disk and let disk.restore() do the rest; ie, there's nothing to
             * "load" (it's a purely synchronous operation).
             *
             * Otherwise, we must call loadDrive(); in the common case, loadDrive() will have already "auto-mounted"
             * the disk, so it will return true, and then we restore any deltas to the current image.
             *
             * However, if loadDrive() returns false, then it has initiated the load for a *different* disk image,
             * so we must mark ourselves as "not ready" again, and add another "wait for ready" test in Computer before
             * finally powering the CPU.
             */
            if (fLocal) {
                this.mountDrive(iDrive, sDiskName, sDiskPath);
            }
            else if (this.loadDrive(iDrive, sDiskName, sDiskPath, true)) {
                if (drive.disk) {
                    if (sDiskPath) {
                        this.addDiskHistory(sDiskName, sDiskPath, drive.disk);
                    } else {
                        if (MAXDEBUG) Component.warning("Disk '" + (drive.disk.sDiskName || sDiskName) + "' not recorded properly in drive " + iDrive);
                    }
                }
            } else {
                this.setReady(false);
            }
        }
        return fSuccess;
    }

    /**
     * initDrives(aConfigDisks)
     *
     * @this {DriveController}
     * @param {Array} [aConfigDisks]
     * @returns {boolean} true if successful, false if failure
     */
    initDrives(aConfigDisks)
    {
        var fSuccess = true;
        for (var iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            var drive = this.aDrives[iDrive];
            if (drive === undefined) {
                drive = this.aDrives[iDrive] = {};
            }
            var configDisk = aConfigDisks && aConfigDisks[iDrive];
            if (!this.initDrive(drive, iDrive, this.configDrive, configDisk)) {
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * saveDrive(drive)
     *
     * @this {DriveController}
     * @param {Object} drive
     * @returns {Array}
     */
    saveDrive(drive)
    {
        return [
            drive.fLocal,
            drive.sDiskName,
            drive.sDiskPath
        ];
    }

    /**
     * saveDrives()
     *
     * @this {DriveController}
     * @returns {Array}
     */
    saveDrives()
    {
        var data = [];
        for (var iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            data.push(this.saveDrive(this.aDrives[iDrive]));
        }
        return data;
    }

    /**
     * initHistory(aHistory)
     *
     * @this {DriveController}
     * @param {Array} [aHistory]
     * @returns {boolean} true if successful, false if failure
     */
    initHistory(aHistory)
    {
        /*
         * Initialize the disk history (if available) before initializing the drives, so that any disk deltas can be
         * applied to disk images that are already loaded.
         */
        if (aHistory) this.aDiskHistory = aHistory;

        return true;
    }

    /**
     * saveHistory()
     *
     * This returns an array of entries, one for each disk image we've ever mounted, including any deltas; ie:
     *
     *      [name, path, deltas]
     *
     * aDiskHistory contains exactly that, except that deltas may not be up-to-date for any currently mounted
     * disk image(s), so we call updateHistory() for all those disks, and then aDiskHistory is ready to be saved.
     *
     * @this {DriveController}
     * @returns {Array}
     */
    saveHistory()
    {
        for (var iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            var drive = this.aDrives[iDrive];
            if (drive.disk) {
                this.updateDiskHistory(drive.sDiskName, drive.sDiskPath, drive.disk);
            }
        }
        return this.aDiskHistory;
    }

    /**
     * autoMount(fRemount)
     *
     * @this {DriveController}
     * @param {boolean} [fRemount] is true if we're remounting all auto-mounted disks
     * @returns {boolean} true if one or more disk images are being auto-mounted, false if none
     */
    autoMount(fRemount)
    {
        if (!fRemount) this.cAutoMount = 0;
        for (var sDrive in this.configMount) {
            var configDisk = this.configMount[sDrive];
            var sDiskPath = configDisk['path'] || "";
            var sDiskName = configDisk['name'] || this.findDisk(sDiskPath);
            if (sDiskPath && sDiskName) {
                var iDrive = this.getDriveNumber(sDrive);
                if (iDrive >= 0 && iDrive < this.aDrives.length) {
                    if (!this.loadDrive(iDrive, sDiskName, sDiskPath, true) && fRemount) {
                        this.setReady(false);
                    }
                    continue;
                }
            }
            this.printf(MESSAGE.NOTICE, "Incorrect auto-mount settings for drive %s (%s)\n", sDrive, JSON.stringify(configDisk));
        }
        return !!this.cAutoMount;
    }

    /**
     * loadSelectedDisk(sDiskName, sDiskPath, file)
     *
     * @this {DriveController}
     * @param {string} [sDiskName]
     * @param {string} [sDiskPath]
     * @param {File} [file] is set if there's an associated File object
     * @returns {boolean}
     */
    loadSelectedDisk(sDiskName, sDiskPath, file)
    {
        if (!sDiskName && !sDiskPath) {
            var controlDisks = this.bindings["listDisks"];
            if (controlDisks && controlDisks.options) {
                sDiskName = controlDisks.options[controlDisks.selectedIndex].text;
                sDiskPath = controlDisks.value;
            }
        }

        var controlDrives = this.bindings["listDrives"];
        var iDrive = controlDrives && StrLib.parseInt(controlDrives.value, 10);

        if (iDrive === undefined || iDrive < 0 || iDrive >= this.aDrives.length) {
            this.printf(MESSAGE.NOTICE, "Unable to load the selected drive\n");
            return false;
        }

        if (!sDiskPath) {
            this.unloadDrive(iDrive);
            return true;
        }

        if (sDiskPath == DriveController.SOURCE.LOCAL) {
            this.printf(MESSAGE.NOTICE, "Use \"Choose File\" and \"Mount\" to select and load a local disk.\n");
            return false;
        }

        /*
         * If the special DriveController.SOURCE.REMOTE path is selected, then we want to prompt the user for a URL.
         * Oh, and make sure we pass an empty string as the 2nd parameter to prompt(), so that IE won't display
         * "undefined" -- because after all, undefined and "undefined" are EXACTLY the same thing, right?
         *
         * TODO: This is literally all I've done to support remote disk images. There's probably more
         * I should do, like dynamically updating "listDisks" to include new entries, and adding new entries
         * to the save/restore data.
         */
        if (sDiskPath == DriveController.SOURCE.REMOTE) {
            sDiskPath = globals.window.prompt("Enter the URL of a remote disk image.", "") || "";
            if (!sDiskPath) return false;
            sDiskName = StrLib.getBaseName(sDiskPath);
            this.printf(MESSAGE.STATUS, 'Attempting to load %s as "%s"\n', sDiskPath, sDiskName);
            this.sDiskSource = DriveController.SOURCE.REMOTE;
        }
        else {
            this.sDiskSource = sDiskPath;
        }

        this.loadDrive(iDrive, sDiskName, sDiskPath, false, file);
        return true;
    }

    /**
     * bootSelectedDisk()
     *
     * @this {DriveController}
     * @returns {boolean}
     */
    bootSelectedDisk()
    {
        var drive;
        var controlDrives = this.bindings["listDrives"];
        var iDrive = controlDrives && StrLib.parseInt(controlDrives.value, 10);

        if (iDrive == null || iDrive < 0 || iDrive >= this.aDrives.length || !(drive = this.aDrives[iDrive])) {
            this.printf(MESSAGE.NOTICE, "Unable to boot the selected drive\n");
            return false;
        }

        if (!drive.disk) {
            this.printf(MESSAGE.NOTICE, "Load a disk into the drive first\n");
            return false;
        }

        /*
         * NOTE: We're calling setReset() BEFORE reading the boot code in order to eliminate any side-effects
         * of the previous state of either the controller OR the CPU; for example, we don't want any previous MMU
         * or UNIBUS Map registers affecting the simulated readData() call.  Also, some boot code (eg, RSTS/E)
         * expects the controller to be in a READY state; since setReset() triggers a call to our reset() handler,
         * a READY state is assured, and the readData() call shouldn't do anything to change that.
         */
        this.cpu.setReset(0, true, iDrive);

        var err = this.readData(drive, drive.iCylinderBoot, drive.iHeadBoot, drive.iSectorBoot, drive.cbSectorBoot, 0x0000, 2);
        if (err) {
            this.printf(MESSAGE.NOTICE, "Unable to read the boot sector (%s)\n", err);
            return false;
        }
        return true;
    }

    /**
     * mountDrive(iDrive, sDiskName, sDiskPath)
     *
     * @this {DriveController}
     * @param {number} iDrive
     * @param {string} sDiskName
     * @param {string} sDiskPath
     */
    mountDrive(iDrive, sDiskName, sDiskPath)
    {
        var drive = this.aDrives[iDrive];
        this.unloadDrive(iDrive, true);
        drive.fLocal = true;
        var disk = new DiskPDP11(this, drive, DiskAPI.MODE.PRELOAD);
        this.doneLoadDrive(drive, disk, sDiskName, sDiskPath, true);
    }

    /**
     * loadDrive(iDrive, sDiskName, sDiskPath, fAutoMount, file)
     *
     * NOTE: If sDiskPath is already loaded, nothing needs to be done.
     *
     * @this {DriveController}
     * @param {number} iDrive
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {boolean} [fAutoMount]
     * @param {File} [file] is set if there's an associated File object
     * @returns {number} 1 if disk loaded, 0 if queued up (or busy), -1 if already loaded
     */
    loadDrive(iDrive, sDiskName, sDiskPath, fAutoMount, file)
    {
        var nResult = -1;
        var drive = this.aDrives[iDrive];

        if (drive.sDiskPath.toLowerCase() != sDiskPath.toLowerCase()) {

            nResult++;
            this.unloadDrive(iDrive, true);

            if (drive.fBusy) {
                this.printf(MESSAGE.NOTICE, "%s busy\n", this.type);
            }
            else {
                // this.printf(MESSAGE.STATUS, "disk queued: %s\n", sDiskName);
                drive.fBusy = true;
                if (fAutoMount) {
                    drive.fAutoMount = true;
                    this.cAutoMount++;
                    this.printf("auto-loading disk \"%s\"\n", sDiskName);
                }
                drive.fLocal = !!file;
                var disk = new DiskPDP11(this, drive, DiskAPI.MODE.PRELOAD);
                if (disk.load(sDiskName, sDiskPath, file, this.doneLoadDrive)) {
                    nResult++;
                }
            }
        }
        return nResult;
    }

    /**
     * doneLoadDrive(drive, disk, sDiskName, sDiskPath, fAutoMount)
     *
     * The disk parameter is set if the disk was successfully loaded, null if not.
     *
     * @this {DriveController}
     * @param {Object} drive
     * @param {DiskPDP11} disk
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {boolean} [fAutoMount]
     */
    doneLoadDrive(drive, disk, sDiskName, sDiskPath, fAutoMount)
    {
        drive.fBusy = false;

        if (disk) {
            /*
             * TODO: While this is a perfectly reasonable thing to do, one wonders if the Disk object shouldn't
             * have done this itself, since we passed our Drive object to it (it already knows the drive's limits).
             */
            if (disk.nCylinders > drive.nCylinders || disk.nHeads > drive.nHeads /* || disk.nSectors > drive.nSectors */) {
                this.printf(MESSAGE.NOTICE, "Disk \"%s\" too large for drive %s\n", sDiskName, this.getDriveName(drive.iDrive));
                disk = null;
            }
        }

        if (disk) {
            drive.disk = disk;
            drive.sDiskName = sDiskName;
            drive.sDiskPath = sDiskPath;

            /*
             * Inform the controller implementation (eg, RX11) of the disk change.
             */
            this.notifyLoad(drive.iDrive);

            /*
             * Adding local disk image names to the disk list seems like a nice idea, but it's too confusing,
             * because then it looks like the "Mount" button should be able to (re)load them, and that can NEVER
             * happen, for security reasons; local disk images can ONLY be loaded via the "Mount" button after
             * the user has selected them via the "Choose File" button.
             *
             *      this.addDisk(sDiskName, sDiskPath);
             *
             * So we're going to take a different approach: when displayDisk() is asked to display the name
             * of a local disk image, it will map all such disks to "Local Disk", and any attempt to "Mount" such
             * a disk, will essentially result in a "Disk not found" error.
             */
            this.addDiskHistory(sDiskName, sDiskPath, disk);

            /*
             * With the addition of notify(), users are now "alerted" whenever a disk has finished loading;
             * notify() is selective about its output, using print() if a print window is open, alert() otherwise.
             */
            this.printf(MESSAGE.NOTICE, "Loaded disk \"%s\" in drive %s\n", sDiskName, this.getDriveName(drive.iDrive));

            /*
             * Since you usually want the Computer to have focus again after loading a new disk, let's try automatically
             * updating the focus after a successful load.
             */
            if (this.cmp) this.cmp.setFocus();
        }
        else {
            drive.fLocal = false;
        }

        if (drive.fAutoMount) {
            drive.fAutoMount = false;
            if (!--this.cAutoMount) this.setReady();
        }

        this.displayDisk(drive.iDrive);

        if (drive.fnCallReady) {
            drive.fnCallReady();
            drive.fnCallReady = null;
        }
    }

    /**
     * addDisk(sName, sPath, fTop)
     *
     * @this {DriveController}
     * @param {string} sName
     * @param {string} sPath
     * @param {boolean} [fTop] (default is bottom)
     */
    addDisk(sName, sPath, fTop)
    {
        var controlDisks = this.bindings["listDisks"];
        if (controlDisks && controlDisks.options) {
            for (var i = 0; i < controlDisks.options.length; i++) {
                if (controlDisks.options[i].value == sPath) return;
            }
            var controlOption = document.createElement("option");
            controlOption.text = sName;
            controlOption.value = sPath;
            if (fTop && controlDisks.childNodes[0]) {
                controlDisks.insertBefore(controlOption, controlDisks.childNodes[0]);
            } else {
                controlDisks.appendChild(controlOption);
            }
        }
    }

    /**
     * findDisk(sPath)
     *
     * This is used to deal with mount requests (eg, autoMount) that supply a path without a name;
     * if we can find the path in the "listDisks" control, then we return the associated disk name.
     *
     * @this {DriveController}
     * @param {string} sPath
     * @returns {string|null}
     */
    findDisk(sPath)
    {
        var controlDisks = this.bindings["listDisks"];
        if (controlDisks && controlDisks.options) {
            for (var i = 0; i < controlDisks.options.length; i++) {
                var control = controlDisks.options[i];
                if (control.value == sPath) return control.text;
            }
        }
        return StrLib.getBaseName(sPath, true);
    }

    /**
     * displayDisk(iDrive, fUpdateDrive)
     *
     * This ensures that the selected disk matches the drive's sDiskPath property, and if fUpdateDrive is set,
     * it also ensures that the selected drive matches the specified drive number.
     *
     * @this {DriveController}
     * @param {number} iDrive (unvalidated)
     * @param {boolean} [fUpdateDrive] is true to update the drive list to match the specified drive (eg, the auto-mount case)
     * @returns {boolean} true if successful, false if not
     */
    displayDisk(iDrive, fUpdateDrive)
    {
        /*
         * First things first: validate iDrive.
         */
        var fSuccess = false;
        if (iDrive >= 0 && iDrive < this.aDrives.length) {
            var drive = this.aDrives[iDrive];
            var controlDisks = this.bindings["listDisks"];
            var controlDrives = this.bindings["listDrives"];
            /*
             * Next, make sure controls for both drives and disks exist.
             */
            if (controlDisks && controlDrives && controlDisks.options && controlDrives.options) {
                /*
                 * Next, update the drive if the caller has requested it.
                 */
                var i;
                if (fUpdateDrive) {
                    this.assert(iDrive == drive.iDrive);
                    for (i = 0; i < controlDrives.options.length; i++) {
                        if (StrLib.parseInt(controlDrives.options[i].value, 10) == drive.iDrive) {
                            if (controlDrives.selectedIndex != i) {
                                controlDrives.selectedIndex = i;
                            }
                            fSuccess = true;
                            break;
                        }
                    }
                }
                /*
                 * Next, make sure the drive whose disk we're updating is the currently selected drive.
                 */
                var iDriveSelected = StrLib.parseInt(controlDrives.value, 10);
                var sTargetPath = (drive.fLocal? DriveController.SOURCE.LOCAL : drive.sDiskPath);
                if (!isNaN(iDriveSelected) && iDriveSelected == iDrive) {
                    for (i = 0; i < controlDisks.options.length; i++) {
                        if (controlDisks.options[i].value == sTargetPath) {
                            if (controlDisks.selectedIndex != i) {
                                controlDisks.selectedIndex = i;
                            }
                            fSuccess = true;
                            break;
                        }
                    }
                    if (i == controlDisks.options.length) controlDisks.selectedIndex = 0;
                }
            }
        }
        return fSuccess;
    }

    /**
     * selectDrive(sDrive)
     *
     * Used to select a drive by name.
     *
     * @this {DriveController}
     * @param {number} sDrive
     * @returns {boolean} true if successful, false if not
     */
    selectDrive(sDrive)
    {
        var controlDrives = this.bindings["listDrives"];
        if (controlDrives && controlDrives.options) {
            var nDrives = controlDrives.options.length;
            for (var i = 0; i < nDrives; i++) {
                if (controlDrives.options[i].textContent == sDrive) {
                    var iDrive = StrLib.parseInt(controlDrives.options[i].value, 10);
                    if (iDrive >= 0) {
                        return this.displayDisk(iDrive, true);
                    }
                }
            }
        }
        return false;
    }

    /**
     * updateSelectedDisk()
     *
     * @this {DriveController}
     */
    updateSelectedDisk()
    {
        var control = this.bindings["listDisks"];
        var controlDesc = this.bindings["descDisk"];
        var controlOption = control.options && control.options[control.selectedIndex];
        if (controlDesc && controlOption) {
            var dataValue = {};
            var sValue = controlOption.getAttribute("data-value");
            if (sValue) {
                try {
                    dataValue = eval("(" + sValue + ")");
                } catch (e) {
                    Component.error(this.type + " option error: " + e.message);
                }
            }
            var sHTML = dataValue['desc'];
            if (sHTML === undefined) sHTML = "";
            var sHRef = dataValue['href'];
            if (sHRef !== undefined) sHTML = "<a href=\"" + sHRef + "\" target=\"_blank\">" + sHTML + "</a>";
            controlDesc.innerHTML = sHTML;
        }
    }

    /**
     * waitDrives(fnCallReady)
     *
     * @this {DriveController}
     * @param {function()|null} fnCallReady
     * @returns {boolean} false if wait required, true otherwise
     */
    waitDrives(fnCallReady)
    {
        for (var iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            var drive = this.aDrives[iDrive];
            if (drive && drive.fBusy) {
                if (!drive.fnCallReady) drive.fnCallReady = fnCallReady;
                return false;
            }
        }
        return true;
    }

    /**
     * unloadDrive(iDrive, fLoading)
     *
     * @this {DriveController}
     * @param {number} iDrive
     * @param {boolean} [fLoading]
     */
    unloadDrive(iDrive, fLoading)
    {
        var drive = this.aDrives[iDrive];

        if (drive.disk || fLoading === false) {

            /*
             * Before we toss the disk's information, capture any deltas that may have occurred.
             */
            this.updateDiskHistory(drive.sDiskName, drive.sDiskPath, drive.disk);

            drive.sDiskName = "";
            drive.sDiskPath = "";
            drive.disk = null;
            drive.fLocal = false;

            if (!fLoading) {
                this.printf(MESSAGE.NOTICE, "Drive %s unloaded\n", this.getDriveName(iDrive));
                this.sDiskSource = DriveController.SOURCE.NONE;
                this.displayDisk(iDrive);
            }

            /*
             * Inform the controller implementation (eg, RX11) of the disk removal.
             */
            this.notifyUnload(iDrive);
        }
    }

    /**
     * unloadAllDrives(fDiscard)
     *
     * @this {DriveController}
     * @param {boolean} fDiscard to discard all disk history before unloading
     */
    unloadAllDrives(fDiscard)
    {
        if (fDiscard) this.aDiskHistory = [];

        for (var iDrive = 0; iDrive < this.aDrives.length; iDrive++) {
            this.unloadDrive(iDrive, true);
        }
    }

    /**
     * addDiskHistory(sDiskName, sDiskPath, disk)
     *
     * @this {DriveController}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {DiskPDP11} disk containing corresponding disk image
     */
    addDiskHistory(sDiskName, sDiskPath, disk)
    {
        var i;
        this.assert(!!sDiskPath);
        for (i = 0; i < this.aDiskHistory.length; i++) {
            if (this.aDiskHistory[i][1] == sDiskPath) {
                var nChanges = disk.restore(this.aDiskHistory[i][2]);
                if (DEBUG) {
                    this.printf("disk \"%s\" restored from history (%d changes)\n", sDiskName, nChanges);
                }
                return;
            }
        }
        if (DEBUG) {
            this.printf("disk \"%s\" added to history (nothing to restore)\n", sDiskName);
        }
        this.aDiskHistory[i] = [sDiskName, sDiskPath, []];
    }

    /**
     * removeDiskHistory(sDiskName, sDiskPath)
     *
     * @this {DriveController}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     */
    removeDiskHistory(sDiskName, sDiskPath)
    {
        var i;
        for (i = 0; i < this.aDiskHistory.length; i++) {
            if (this.aDiskHistory[i][1] == sDiskPath) {
                this.aDiskHistory.splice(i, 1);
                if (DEBUG) {
                    this.printf("disk \"%s\" removed from history\n", sDiskName);
                }
                return;
            }
        }
        if (DEBUG) {
            this.printf("unable to remove disk \"%s\" from history (%s)\n", sDiskName, sDiskPath);
        }
    }

    /**
     * updateDiskHistory(sDiskName, sDiskPath, disk)
     *
     * @this {DriveController}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {DiskPDP11} disk containing corresponding disk image, with possible deltas
     */
    updateDiskHistory(sDiskName, sDiskPath, disk)
    {
        var i;
        for (i = 0; i < this.aDiskHistory.length; i++) {
            if (this.aDiskHistory[i][1] == sDiskPath) {
                this.aDiskHistory[i][2] = disk.save();
                if (DEBUG) {
                    this.printf("disk \"%s\" updated in history\n", sDiskName);
                }
                return;
            }
        }
        /*
         * I used to report this as an error (at least in the DEBUG release), but it's no longer really
         * an error, because if we're trying to re-mount a clean copy of a disk, we toss its history, then
         * unload, and then reload/remount.  And since unloadDrive's normal behavior is to call updateDiskHistory()
         * before unloading, the fact that the disk is no longer listed here can't be treated as an error.
         */
        if (DEBUG) {
            this.printf("unable to update disk \"%s\" in history (%s)\n", sDiskName, sDiskPath);
        }
    }

    /**
     * notifyLoad(iDrive)
     *
     * Placeholder for subclasses.  Called whenever DriveController has loaded a new disk into the specified drive.
     *
     * @this {RX11}
     * @param {number} iDrive
     */
    notifyLoad(iDrive)
    {
    }

    /**
     * notifyUnload(iDrive)
     *
     * Placeholder for subclasses.  Called whenever DriveController has unloaded a disk from the specified drive.
     *
     * @this {RX11}
     * @param {number} iDrive
     */
    notifyUnload(iDrive)
    {
    }

    /**
     * readData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * Placeholder for subclasses.  Implementation is optional, but the automatic BOOT feature will be unavailable.
     *
     * @this {DriveController}
     * @param {Object} drive
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {number} nWords
     * @param {number} addr
     * @param {number} inc (normally 2, unless inhibited, in which case it's 0)
     * @param {boolean} [fCheck]
     * @param {function(...)} [done]
     * @returns {boolean|number} true if complete, false if queued (or if no done() is supplied, the error code, if any)
     */
    readData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
    {
        return -1;
    }

    /**
     * writeData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
     *
     * Placeholder for subclasses.  Implementation is optional.
     *
     * @this {DriveController}
     * @param {Object} drive
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {number} nWords
     * @param {number} addr
     * @param {number} inc (normally 2, unless inhibited, in which case it's 0)
     * @param {boolean} [fCheck]
     * @param {function(...)} [done]
     * @returns {boolean|number} true if complete, false if queued (or if no done() is supplied, the error code, if any)
     */
    writeData(drive, iCylinder, iHead, iSector, nWords, addr, inc, fCheck, done)
    {
        return -1;
    }
}

/*
 * There's nothing super special about these values, except that NONE should be falsey and the others should not.
 */
DriveController.SOURCE = {
    NONE:   "",
    LOCAL:  "?",
    REMOTE: "??"
};
