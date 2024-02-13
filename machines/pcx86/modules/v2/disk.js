/**
 * @fileoverview Implements Disk support for FDC and HDC components
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import DiskAPI from "../../../modules/v2/diskapi.js";
import DumpAPI from "../../../modules/v2/dumpapi.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { BACKTRACK, DEBUG, SYMBOLS } from "./defines.js";

/**
 *  The Disk component provides methods for:
 *
 *      1) creating an empty disk: create()
 *      2) loading a disk image: load()
 *      3) getting disk information: info()
 *      4) seeking a disk sector: seek()
 *      5) reading data from a sector: read()
 *      6) writing data to a sector: write()
 *      7) save disk deltas: save()
 *      8) restore disk deltas: restore()
 *      9) converting disk contents: convertToJSON()
 *
 *  More functionality may be factored out of the FDC and HDC components later and moved here, to
 *  further reduce some of the duplication between them, but the above functionality is a good start.
 */

/**
 * Client/Server Disk I/O
 *
 * To support large disks without consuming large amounts of client-side memory, and to push
 * client-side disk changes back the server, we need a DiskIO API that can be used in place of
 * the DiskDump API.
 *
 * Use of the DiskIO API and any associated disk images must be tightly coupled to per-user
 * storage and specific machine configurations, to prevent the disk images from being corrupted
 * by inconsistent I/O operations.  Our basic User API (userapi.js) already provides some
 * per-user storage that we can use to get the design rolling.
 *
 * The DiskIO API must also provide the ability to create new (empty) hard disk images in per-user
 * storage and automatically associate them with the machine configurations that requested them.
 */

/**
 * Principles
 *
 * Originally, when the Disk class was given a disk image to load and mount, it would request the
 * ENTIRE disk image from the DiskDump module.  That works well for small (floppy) disk images, but
 * for larger disks -- let's just say anything stored on the server as an "img" file -- we'd prefer
 * to interact with that disk using "On-Demand I/O".  Any "img" file on the same server as the PCjs
 * application should be a candidate for on-demand access.
 *
 * On-Demand I/O means that nothing is initially transferred from the server.  As sectors are
 * requested by the PCx86 machine, PCx86 requests them from the server, and maintains an MRU cache
 * of sectors, periodically discarding the least-used clean sectors above a certain memory limit.
 * Dirty sectors (ie, those that the PCx86 machine has written to) must be periodically sent
 * back to the server and then marked as clean, so that they can be discarded like any other
 * sector.
 *
 * We also support "local" init-only disk images, which means that dirty sectors are never sent
 * back to the server and are instead retained by the client for the lifetime of the app; such
 * images are "read-only" as far as the server is concerned, but "read-write" as far as the client
 * is concerned.  Reloading/restarting an app with an "local" disk will return the disk to its
 * initial state.
 *
 * Practice
 *
 * Let's first look at what we *already* do for the HDC component:
 *
 *  1) Creating new (empty) disk images
 *  2) Pre-loading pre-built JSON-encoded disk images (converting them to JSON on the fly as needed)
 *
 * An example of #1 is in /devices/pc/machine/5160/cga/256kb/demo/machine.xml:
 *
 *      <hdc id="hdcXT" drives='[{name:"10Mb Hard Drive",type:3}]'/>
 *
 * and an example of #2 is in /disks/pc/fixed/win101.xml:
 *
 *      <hdc id="hdcXT" drives='[{name:"10Mb Hard Drive",path:"/disks/pc/fixed/win101/10mb.json",type:3}]'/>
 *
 * The HDC component expects an array of drive entries.  Array position determines drive numbering
 * (the first entry is drive 0, the second is drive 1, etc), and each entry contains the following
 * properties:
 *
 *      'name': user-friendly name for the disk, if any
 *      'path': URL of the disk image, if any
 *      'type': a drive type
 *
 * Of those properties, only 'type' is required, which provides an index into an HDC "Drive Type"
 * table that determines disk geometry and therefore disk size.  As we add support for larger disks and
 * newer disk controllers, the 'type' parameter will be superseded by either a user-defined 'geometry'
 * parameter that will define number of heads, cylinders, tracks, sectors per track, and (max) bytes per
 * sector, or perhaps a generic 'size' parameter that leaves geometry choices to the HDC component,
 * which will then pass those decisions on to the Disk component.
 *
 * We will enable on-demand I/O for a disk image with a new 'mode' parameter that looks like:
 *
 *      'mode': one of "local", "preload", "demandrw", "demandro"
 *
 * "preload" means the disk image will be completely preloaded, exactly as before; "demandrw" enables
 * full on-demand I/O support; and "demandro" enables on-demand I/O for reads only (all writes are retained
 * and never written back to the server).
 *
 * "ro" will be the fallback for "rw" unless TWO other important criteria are met: 1) the user has a
 * private user key, and therefore per-user storage; and 2) the disk image 'path' contains an asterisk (*)
 * that the server can internally remap to a directory in the user's storage; eg:
 *
 *      'path': <asterisk>/10mb.img (path components following the asterisk are optional)
 *
 * If the disk image does not already exist, it will be created (but not formatted).
 *
 * This preserves the promise that EVERYTHING a user does within a PCx86 machine is private (ie, not
 * visible to any other PCjs users).  I don't want to be in the business of saving any user machine
 * states or disk changes, but at least those operations are limited to users who have asked for (and
 * received) a private user key.
 *
 * Another important consideration at this stage is dealing with multiple machines writing to the same
 * disk image; even though we're limiting the "demandrw" mode to per-user images, a single user may still
 * inadvertently start up multiple machines that refer to the same disk image.
 *
 * So, every PCx86 machine needs to generate a unique token and include that token with every Disk I/O API
 * operation, so that the server can revoke a previous machine's "rw" access to a disk image when a new
 * machine requests "rw" access to the same disk image.
 *
 * From the client's perspective, revocation can be quietly dealt with by reverting to "demandro" mode;
 * that client becomes stuck with all their dirty sectors until they can reclaim "rw" access, which should
 * only happen if no intervening writes to the disk image on the server have occurred (if I bother allowing
 * reclamation at all).
 *
 * The real challenge here is avoiding revocation of a machine that still has critical changes to commit,
 * but since we can't even solve the problem of a user closing their browser at an inopportune time
 * and potentially leaving a disk image in an inconsistent state, premature revocation is the least of
 * our problems.  Since a real hard drive could suffer the same fate if the machine's power was turned off
 * at the wrong time, you could say that we're simply providing a faithful simulation of reality.
 */

/**
 * Every Sector object (once loaded, parsed, and "normalized") should have ALL of the following properties:
 *
 *      [ID]:       sector ID
 *      [LENGTH]:   size of the sector, in bytes
 *      [DATA]:     array of dwords
 *      pattern:    dword pattern to use for empty or partial sectors (or null if sector still needs to be loaded)
 *
 * initSector() also sets the following properties, to help us quickly identify its location within diskData:
 *
 *      iCylinder
 *      iHead
 *
 * In addition, we will maintain the following information on a per-sector basis, as sectors are modified:
 *
 *      iModify:    index of first modified dword in sector
 *      cModify:    number of modified dwords in sector
 *      fDirty:     true if sector is dirty, false if clean (or cleaning in progress)
 *
 * fDirty is used in conjunction with "demandrw" disks; it is set to true whenever the sector is modified, and is
 * set to false whenever the sector has been sent to the server.  If the server write succeeds and fDirty is still
 * false, then the sector modifications are removed (cModify is set to zero).  If the write succeeds but fDirty was
 * set to true again in the meantime, then all the sector modifications (even those that were just written) remain
 * in place (since we don't keep track of more than one modification range within a sector).  And if the write failed,
 * then fDirty is set back to true and again all modifications remain in place; the best we can do is schedule another
 * write attempt.
 *
 * TODO: Perhaps we should also maintain a failure count and stop trying to write sectors that reach a certain
 * threshold.  Error-handling, as usual, is the thorniest problem.
 *
 * @typedef {Object} Sector
 * @property {number} c (cylinder #)
 * @property {number} h (head #)
 * @property {number} s (sector ID)
 * @property {number} l (length of sector, in bytes)
 * @property {Array.<number>} d (array of 32-bit values)
 * @property {number} f (index into the disk's file table)
 * @property {number} o (offset of this sector within the file's data stream)
 * @property {number} iCylinder (deprecated; see c)
 * @property {number} iHead (deprecated; see h)
 * @property {number} sector (deprecated; see s)
 * @property {number} length (deprecated; see l)
 * @property {Array.<number>} data (deprecated; see d)
 * @property {number|null} pattern (deprecated)
 * @property {FileInfo} file
 * @property {number} offFile
 * @property {number} dataCRC
 * @property {boolean} dataError
 * @property {number} dataMark
 * @property {number} headCRC
 * @property {boolean} headError
 * @property {number} iModify (for internal use only)
 * @property {number} cModify (for internal use only)
 * @property {boolean} fDirty (for internal use only)
 */

/**
 * @typedef {Object} FileDesc
 * @property {string} hash
 * @property {string} path
 * @property {string} attr
 * @property {string} date
 * @property {number} size
 * @property {FileModule} [module]
 */

/**
 * @typedef {Object} FileModule
 * @property {string} name
 * @property {string} description
 * @property {Object.<FileSegment>} [segments]
 */

/**
 * @typedef {Object} FileSegment
 * @property {number} offStart
 * @property {number} offEnd
 * @property {Object.<FileOrdinal>} [ordinals]
 */

/**
 * @typedef {Object} FileOrdinal
 * @property {number} o (offset within segment)
 * @property {string} s (name of symbol, if any)
 */

/**
 * @class Disk
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class Disk extends Component {
    /**
     * Sector object "public" properties.
     */
    static SECTOR = {
        CYLINDER:   'c',                // cylinder number (0-based) [formerly iCylinder]
        HEAD:       'h',                // head number (0-based) [formerly iHead]
        ID:         's',                // sector ID (generally 1-based, except for unusual/copy-protected disks) [formerly 'sector']
        LENGTH:     'l',                // sector length, in bytes (generally 512, except for unusual/copy-protected disks) [formerly 'length']
        DATA:       'd',                // array of signed 32-bit values (if less than length/4, the last value is repeated) [formerly 'data']
        FILE_INDEX: 'f',                // "extended" JSON disk images only [formerly file]
        FILE_OFFSET:'o',                // "extended" JSON disk images only [formerly offFile]
        PATTERN:    'pattern',          // deprecated (no longer used in external images, still used internally)
        /**
         * The following properties occur very infrequently (and usually only in copy-protected or damaged disk images),
         * hence the longer, more meaningful IDs.
         */
        DATA_CRC:   'dataCRC',
        DATA_ERROR: 'dataError',
        DATA_MARK:  'dataMark',
        HEAD_CRC:   'headCRC',
        HEAD_ERROR: 'headError'
    };

    /**
     * The default number of milliseconds to wait before writing a dirty sector back to a remote disk image
     *
     * @const {number}
     */
    static REMOTE_WRITE_DELAY = 2000;   // 2-second delay

    /**
     * A global disk count, used to form unique Disk component IDs (totally optional; for debugging purposes only)
     */
    static nDisks = 0;

    /**
     * Disk(controller, drive, mode)
     *
     * Disk contents are stored as an array (diskData) of cylinders, each of which is an array of
     * heads, each of which is an array of sector objects; the latter contain sector numbers and
     * sector data, where sector data is an array of dwords.  The format does not impose any
     * limitations on number of cylinders, number of heads, sectors per track, or bytes per sector.
     *
     * WARNING: All accesses to disk sector properties must be via their string names, not their
     * "dot" names, otherwise code will break after it's been processed by the Closure Compiler,
     * and any dumped disks may be unmountable.  This is a side-effect of how we mount and dump
     * disk images (ie, as JSON-encoded streams).
     *
     * This means, for example, that all references to "track[iSector].data" must actually appear as
     * "track[iSector][Disk.SECTOR.DATA]".
     *
     * @this {Disk}
     * @param {HDC|FDC} controller
     * @param {Object} drive
     * @param {string} mode
     */
    constructor(controller, drive, mode)
    {
        super("Disk", {'id': controller.idMachine + ".disk" + StrLib.toHex(++Disk.nDisks, 4)}, MESSAGE.DISK);

        this.controller = controller;

        /**
         * Route all printing through this.controller (eg, controller.print()), because
         * the Computer component is unaware of any Disk objects and therefore will not set
         * up the usual overrides when a Control Panel is installed.
         */
        this.print = controller.print;

        this.cmp = controller.cmp;
        this.dbg = controller.dbg;
        this.drive = drive;

        /**
         * We pull out a number of drive properties that we may or may not need as defaults
         */
        this.sDiskName = drive.name;
        this.fRemovable = drive.fRemovable;
        this.fOnDemand = this.fRemote = false;

        /**
         * Initialize the disk contents
         */
        this.create(mode, drive.nCylinders, drive.nHeads, drive.nSectors, drive.cbSector);

        /**
         * The following dirty sector and timer properties are used only with fOnDemand disks,
         * assuming fRemote was successfully set.
         */
        this.aDirtySectors = [];
        this.aDirtyTimestamps = [];         // this array is parallel to aDirtySectors
        this.timerWrite = null;             // REMOTE_WRITE_DELAY timer in effect, if any
        this.msTimerWrite = 0;              // the time that the write timer, if any, is set to fire
        this.fWriteInProgress = false;

        /**
         * To make getModuleInfo() more reliable, we use aModules to cache any modules we see as
         * sectors are read.
         */
        this.aModules = {};

        this.setReady();
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * We have no real interest in this notification, other than to obtain a reference to the Debugger
     * for every disk loaded BEFORE the initBus() phase; any disk loaded AFTER that point will get its Debugger
     * reference, if any, from the disk controller passed to the Disk() constructor.
     *
     * @this {Disk}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.dbg = dbg;
    }

    /**
     * isRemote()
     *
     * @this {Disk}
     * @returns {boolean} true if remote disk, false if not
     */
    isRemote()
    {
        /**
         * Ironically, we can't rely on fRemote, because that is cleared and set across disconnect and
         * reconnect operations.  fOnDemand is the next best thing.
         */
        return this.fOnDemand;
    }

    /**
     * powerUp(data, fRepower)
     *
     * As with powerDown(), our sole concern here is for REMOTE disks: if a powerDown() call disconnected an
     * "on-demand" disk, we need to get reconnected.  Calling our own load() function should get the job done.
     *
     * The HDC component could have triggered this as well, but its powerUp() function only calls autoMount()
     * in case of page (ie, application) reload, which is fine for local disks but insufficient for remote disks,
     * which have a server connection that must be re-established.
     *
     * @this {Disk}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (this.fOnDemand && !this.fRemote) {
                this.setReady(false);
                this.load(this.sDiskName, this.sDiskPath, null, this.donePowerUp, this);
            }
        }
        return true;
    }

    /**
     * donePowerUp(drive, disk, sDiskName, sDiskPath)
     *
     * This is a callback issued by the Disk component once the load() from powerUp() has finished.
     *
     * @this {Disk}
     * @param {Object} drive
     * @param {Disk} disk is set if the disk was successfully mounted, null if not
     * @param {string} sDiskName
     * @param {string} sDiskPath
     */
    donePowerUp(drive, disk, sDiskName, sDiskPath)
    {
        this.setReady(true);
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * Our sole concern here is for REMOTE disks, making sure any unwritten changes get flushed to
     * the server during a shutdown.  No local state is ever returned, so fSave is ignored.
     *
     * Local disks are managed by the controller (ie, FDC or HDC) that mounted them; the controller's
     * powerDown() handler will take care of calling save() as needed.
     *
     * TODO: Consider taking responsibility for saving the state of local disks as well; the only reason
     * the controllers still take care of them is historical, because this component originally didn't
     * exist, and even after it was created, it didn't originally receive powerDown() notifications.
     *
     * @this {Disk}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean}
     */
    powerDown(fSave, fShutdown)
    {
        /**
         * If we're connected to a remote disk, take this opportunity to flush any remaining unwritten
         * changes and then close the connection.
         */
        if (this.fRemote) {
            let response;
            let nErrorCode = 0;
            if (this.fWriteInProgress) {
                /**
                 * TODO: Verify that the Computer's powerOff() handler will actually honor a false return value.
                 */
                if (!Component.confirmUser("Disk writes are still in progress, shut down anyway?")) {
                    return false;
                }
            }
            while ((response = this.findDirtySectors(false))) {
                if ((nErrorCode = response[0])) {
                    this.printf(MESSAGE.NOTICE, "Unable to save \"%s\" (error %d)\n", this.sDiskName, nErrorCode);
                    break;
                }
            }
            if (fShutdown) {
                this.disconnectRemoteDisk();
            }
            /**
             * I only report that changes to the disk have been "saved" if fSave is true, to avoid confusing
             * users who might not understand the difference between discarding local changes (which should restore
             * all diskettes to their original state) and discarding remote changes (which could leave the remote disk
             * in a bad state).
             */
            if (!nErrorCode && fSave) this.printf(MESSAGE.NOTICE, "\"%s\" saved\n", this.sDiskName);
        }
        return true;
    }

    /**
     * create()
     *
     * @this {Disk}
     * @param {string} mode
     * @param {number} nCylinders
     * @param {number} nHeads
     * @param {number} nSectors (per track)
     * @param {number} cbSector
     *
     * Initializes the disk contents according to the current drive mode and parameters.
     */
    create(mode, nCylinders, nHeads, nSectors, cbSector)
    {
        this.mode = mode;
        this.nCylinders = nCylinders;
        this.nHeads = nHeads;
        this.nSectors = nSectors;
        this.cbSector = cbSector;
        this.diskData = [];
        /**
         * If the drive is using PRELOAD mode, then it will use the load()/mount() process to initialize the disk contents;
         * it wouldn't hurt to let create() do its thing, too, but it's a waste of time.
         */
        if (this.mode != DiskAPI.MODE.PRELOAD) {

            this.printf(MESSAGE.DISK, "blank disk for \"%s\": %d cylinders, %d head(s)\n", this.sDiskName, this.nCylinders, this.nHeads);

            let aCylinders = new Array(this.nCylinders);
            for (let iCylinder = 0; iCylinder < aCylinders.length; iCylinder++) {
                let aHeads = new Array(this.nHeads);
                for (let iHead = 0; iHead < aHeads.length; iHead++) {
                    let aSectors = new Array(this.nSectors);
                    for (let iSector = 1; iSector <= aSectors.length; iSector++) {
                        /**
                         * Now that our read() and write() functions can deal with unallocated data
                         * arrays, and can read/write the specified pattern on-the-fly, we no longer need
                         * to pre-allocate and pre-initialize the DATA array.
                         *
                         * For "local" disks, we can assume a 'pattern' of 0, but for "demandrw" and "demandro"
                         * disks, 'pattern' is set to null, as yet another indication that I/O is required to load
                         * the sector from the server (or to write it back to the server).
                         */
                        aSectors[iSector - 1] = this.initSector(null, iCylinder, iHead, iSector, this.cbSector, (this.mode == DiskAPI.MODE.LOCAL? 0 : null));
                    }
                    aHeads[iHead] = aSectors;
                }
                aCylinders[iCylinder] = aHeads;
            }
            this.diskData = aCylinders;
        }
        this.dwChecksum = null;
    }

    /**
     * load(sDiskName, sDiskPath, file, fnNotify)
     *
     * TODO: Figure out how we can strongly type fnNotify, because the Closure Compiler has issues with:
     *
     *      param {function(Component,Object,Disk,string,string)} fnNotify
     *
     * for:
     *
     *     this.fnNotify.call(this.controller, this.drive, disk, this.sDiskName, this.sDiskPath);
     *
     * Also, while we're at it, learn if there are ways to:
     *
     *      1) declare a function taking NO parameters (ie, generate a warning if any parameters are specified)
     *      2) declare a type for a function's return value
     *
     * @this {Disk}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {File} [file] is set if there's an associated File object
     * @param {function(...)} [fnNotify]
     * @param {Component} [controller]
     * @returns {boolean} true if load completed (successfully or not), false if queued
     */
    load(sDiskName, sDiskPath, file, fnNotify, controller)
    {
        let sDiskURL = sDiskPath;

        this.printf(MESSAGE.DISK, 'load("%s","%s")\n', sDiskName, sDiskPath);

        if (this.fnNotify) {
            this.printf(MESSAGE.DISK, 'too many load requests for "%s" (%s)\n', sDiskName, sDiskPath);
            return true;
        }

        this.sDiskName = sDiskName;
        this.sDiskPath = sDiskPath;
        this.sDiskFile = StrLib.getBaseName(sDiskPath);
        this.sFormat = "json";

        let disk = this;
        this.fnNotify = fnNotify;
        this.controllerNotify = controller || this.controller;

        if (file) {
            let reader = new FileReader();
            if (file.type == "application/json") {
                reader.onload = function() {
                    disk.doneLoad(sDiskURL, /** @type {string} */ (reader.result), 0);
                };
                reader.onerror = function() {
                    disk.buildDisk(null, false, reader.error.message);
                };
                reader.readAsText(file);
            } else {
                reader.onload = function() {
                    disk.buildDisk(/** @type {ArrayBuffer} */ (reader.result), true);
                };
                reader.onerror = function() {
                    disk.buildDisk(null, false, reader.error.message);
                };
                reader.readAsArrayBuffer(file);
            }
            return true;
        }

        /**
         * If there's an occurrence of API_ENDPOINT anywhere in the path, we assume we can use it as-is;
         * ie, that the user has already formed a URL of the type we use ourselves for unconverted disk images.
         */
        if (sDiskPath.indexOf(DumpAPI.ENDPOINT) < 0) {
            /**
             * If the selected disk image has a "json" extension, then we assume it's a pre-converted
             * JSON-encoded disk image, so we load it as-is; otherwise, we ask our server-side disk image
             * converter to return the corresponding JSON-encoded data.
             */
            let sDiskExt = StrLib.getExtension(sDiskPath);
            if (sDiskExt != DumpAPI.FORMAT.JSON && sDiskExt != DumpAPI.FORMAT.JSON_GZ) {
                if (this.mode == DiskAPI.MODE.DEMANDRW || this.mode == DiskAPI.MODE.DEMANDRO) {
                    sDiskURL = this.connectRemoteDisk(sDiskPath);
                    this.fOnDemand = true;
                } else {
                    this.sFormat = "arraybuffer";
                }
            }
        }
        let sProgress = "Loading " + sDiskURL + "...";
        return !!WebLib.getResource(sDiskURL, this.sFormat, true, function loadDone(sURL, sResponse, nErrorCode) {
            disk.doneLoad(sURL, sResponse, nErrorCode);
        }, function(nState) {
            disk.printf(MESSAGE.PROGRESS, "%s\n", sProgress);
        });
    }

    /**
     * buildDisk(buffer, fModified, message)
     *
     * Builds a disk image from an ArrayBuffer (eg, from a FileReader object), rather than from JSON-encoded data.
     *
     * @this {Disk}
     * @param {ArrayBuffer|null} buffer
     * @param {boolean} [fModified] is true if we should mark the entire disk modified (to ensure that we save/restore it)
     * @param {string} [message] (usually only set if there was an error, and therefore buffer is null or undefined)
     */
    buildDisk(buffer, fModified, message)
    {
        let cbDiskData = 0, dv = null, disk;
        if (buffer) {
            cbDiskData = buffer.byteLength;
            dv = new DataView(buffer, 0, cbDiskData);
        }
        /**
         * Hard drive images using the PCJS MBR will have a special signature, and if that MBR also contains
         * a non-zero DiskInfo.MBR.DRIVE0PARMS.CYLS value, then we'll use the geometry stored in the MBR.
         */
        let nCylinders = 0;
        if (dv && dv.getUint32(0x199, true) == 0x534a4350) {    // if DiskInfo.MBR.PCJS_SIG == PCJS_VALUE
            nCylinders = dv.getUint16(0x19E, true);             // DiskInfo.MBR.DRIVE0PARMS.CYLS
        }
        if (nCylinders) {
            this.nCylinders = nCylinders;
            this.nHeads = dv.getUint8(0x1A0);                   // DiskInfo.MBR.DRIVE0PARMS.HEADS
            this.nSectors = dv.getUint8(0x1AC);                 // DiskInfo.MBR.DRIVE0PARMS.SECTORS
            this.cbSector = 512;
        }
        else {
            let diskFormat = DiskAPI.GEOMETRIES[cbDiskData];
            if (diskFormat) {
                /**
                 * This geometry lookup is primarily intended for diskette images, because there are a wide variety
                 * of diskette formats that can work within a drive's parameters.  So, I used to assert the number
                 * of cylinders match, but the assertion has been relaxed (we require only that the image have no
                 * MORE than the number of cylinders and heads than the drive can handle).
                 *
                 * For example, a 40-cylinder diskette image should be fine with an 80-cylinder high-capacity drive.
                 *
                 * There are also a couple of standard hard drive formats that PCjs likes to use (10Mb and 20Mb), which
                 * I could treat specially (based on diskFormat[4]), but since PCjs can use its own MBR for non-standard
                 * hard disk images now, I'd rather not do that.
                 */
                if (diskFormat[0] <= this.nCylinders && diskFormat[1] <= this.nHeads /* || !diskFormat[4] */) {
                    this.nCylinders = diskFormat[0];
                    this.nHeads = diskFormat[1];
                    this.nSectors = diskFormat[2];
                    this.cbSector = (diskFormat[3] || 512);
                } else {
                    this.nCylinders = 0;                        // we don't know what's going on here...
                }
            }
        }
        if (dv && this.nCylinders) {
            let ib = 0;
            let cdw = this.cbSector >> 2, dwPattern = 0, dwChecksum = 0;
            this.diskData = new Array(this.nCylinders);
            for (let iCylinder = 0; iCylinder < this.diskData.length; iCylinder++) {
                let cylinder = this.diskData[iCylinder] = new Array(this.nHeads);
                for (let iHead = 0; iHead < cylinder.length; iHead++) {
                    let head = cylinder[iHead] = new Array(this.nSectors);
                    for (let iSector = 0; iSector < head.length; iSector++) {
                        let sector = this.initSector(null, iCylinder, iHead, iSector + 1, this.cbSector, dwPattern);
                        let adw = sector[Disk.SECTOR.DATA];
                        for (let idw = 0; idw < cdw; idw++, ib += 4) {
                            let dw = adw[idw] = dv.getInt32(ib, true);
                            dwChecksum = (dwChecksum + dw) & (0xffffffff|0);
                        }
                        if (fModified) sector.cModify = cdw;
                        head[iSector] = sector;
                    }
                }
            }
            this.dwChecksum = dwChecksum;
            disk = this;
        } else {
            this.printf(MESSAGE.NOTICE, "%s\n", message || ("Unrecognized disk format (" + cbDiskData + " bytes)"));
        }

        if (this.fnNotify) {
            this.fnNotify.call(this.controller, this.drive, disk, this.sDiskName, this.sDiskPath);
            this.fnNotify = null;
        }
    }

    /**
     * doneLoad(sURL, imageData, nErrorCode)
     *
     * This function was originally called mount().  If the mount is successful, we pass the Disk object to the
     * caller's fnNotify handler; otherwise, we pass null.
     *
     * @this {Disk}
     * @param {string} sURL
     * @param {string|ArrayBuffer} imageData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, imageData, nErrorCode)
    {
        let disk = null;
        this.fWriteProtected = false;
        let idMessage = (nErrorCode < 0 && this.cmp && !this.cmp.flags.powered)? MESSAGE.STATUS : MESSAGE.NOTICE;

        if (this.fOnDemand) {
            if (!nErrorCode) {
                disk = this;
                this.printf(MESSAGE.DISK, "doneLoad(\"%s\")\n", this.sDiskPath);
                this.fRemote = true;
            } else {
                this.printf(idMessage, "Unable to connect to disk \"%s\" (error %d: %s)\n", this.sDiskPath, nErrorCode, imageData);
            }
        }
        else if (nErrorCode) {
            /**
             * This can happen for innocuous reasons, such as the user switching away too quickly, forcing
             * the request to be cancelled.  And unfortunately, the browser cancels XMLHttpRequest requests
             * BEFORE it notifies any page event handlers, so if the Computer's being powered down, we won't know
             * that yet.  For now, we rely on the lack of a specific error (nErrorCode < 0), and suppress the
             * notify() alert if there's no specific error AND the computer is not powered up yet.
             */
            this.printf(idMessage, "Unable to load disk \"%s\" (error %d: %s)\n", this.sDiskName, nErrorCode, sURL);
        } else {
            this.printf(MESSAGE.DISK, "doneLoad(\"%s\")\n", this.sDiskPath);

            /**
             * If we received binary data instead of JSON, we can use the same buildDisk() function that
             * our FileReader code uses.
             */
            if (typeof imageData != "string") {
                this.buildDisk(imageData);
                return;
            }

            try {
                /**
                 * The following code was a hack to turn on write-protection for a disk image if there was
                 * an initial comment line containing the string "write-protected".  However, since comments
                 * are technically not allowed in JSON, I needed an alternative solution.  So, if the basename
                 * contains the suffix "-readonly", then I'll turn on write-protection for that disk as well.
                 *
                 * TODO: Provide some UI for turning write-protection on/off for disks at will, and provide
                 * an XML-based solution (ie, a per-disk XML configuration option) for controlling it as well.
                 */
                let sBaseName = StrLib.getBaseName(this.sDiskFile, true).toLowerCase();
                if (sBaseName.indexOf("-readonly") > 0) {
                    this.fWriteProtected = true;
                } else {
                    let iEOL = imageData.indexOf("\n");
                    if (iEOL > 0 && iEOL < 1024) {
                        let sConfig = imageData.substring(0, iEOL);
                        if (sConfig.indexOf("write-protected") > 0) {
                            this.fWriteProtected = true;
                        }
                    }
                }
                let diskData, fileTable, imageInfo;
                /**
                 * The most likely source of any exception will be here, where we're parsing the disk data.
                 */
                if (imageData.substr(0, 1) == "<") {    // if the "data" begins with a "<"...
                    /**
                     * Early server configs reported an error (via the nErrorCode parameter) if a disk URL was invalid,
                     * but more recent server configs now display a somewhat friendlier HTML error page.  The downside,
                     * however, is that the original error has been buried, and we've received "data" that isn't actually
                     * disk data.
                     *
                     * So, if the data we've received appears to be "HTML-like", all we can really do is assume that the
                     * disk image is missing.  And so we pretend we received an error message to that effect.
                     */
                    diskData = ["Missing disk image: " + this.sDiskName];
                } else {
                    /**
                     * TODO: IE9 is rather unfriendly and restrictive with regard to how much data it's willing to
                     * eval().  In particular, the 10Mb disk image we use for the Windows 1.01 demo config fails in
                     * IE9 with an "Out of memory" exception.  One work-around would be to chop the data into chunks
                     * (perhaps one track per chunk, using regular expressions) and then manually re-assemble it.
                     *
                     * However, it turns out that using JSON.parse(imageData) instead of eval("(" + imageData + ")")
                     * is a much easier fix. The only drawback is that we must first quote any unquoted property names
                     * and remove any comments, because while eval() was cool with them, JSON.parse() is more particular;
                     * the following RegExp replacements take care of those requirements.
                     *
                     * The use of hex values is something else that eval() was OK with, but JSON.parse() is not, and
                     * while I've stopped using hex values in DumpAPI responses (at least when "format=json" is specified),
                     * I can't guarantee they won't show up in "legacy" images, and there's no simple RegExp replacement
                     * for transforming hex values into decimal values, so I cop out and fall back to eval() if I detect
                     * any hex prefixes ("0x") in the sequence.  Ditto for error messages, which appear like so:
                     *
                     *      ["unrecognized disk path: test.img"]
                     */
                    if (imageData[0] == '{') {
                        let image = JSON.parse(imageData);
                        diskData = image['diskData'];
                        fileTable = image['fileTable'];
                        imageInfo = image['imageInfo'];
                    } else if (imageData.indexOf("0x") < 0 && imageData.substr(0, 2) != "[\"") {
                        diskData = JSON.parse(imageData.replace(/([a-z]+):/gm, "\"$1\":").replace(/\/\/[^\n]*/gm, ""));
                    } else {
                        diskData = eval("(" + imageData + ")");
                    }
                }

                if (!diskData.length) {
                    Component.error("Empty disk image: " + this.sDiskName);
                }
                else if (diskData.length == 1) {
                    Component.error(diskData[0]);
                }
                /**
                 * diskData is an array of cylinders, each of which is an array of heads, each of which
                 * is an array of sector objects.  The format does not impose any limitations on number of
                 * cylinders, number of heads, or number of bytes in any of the sector object byte-arrays.
                 *
                 * WARNING: All accesses to sector object properties must be via their string names, not their
                 * "dot" names, otherwise code will break after it's been processed by the Closure Compiler.
                 *
                 * Sector object properties (from Disk.SECTOR) include:
                 *
                 *      [ID]        the sector ID (1-based, not required to be sequential)
                 *      [LENGTH]    the byte-length (ie, formatted length) of the sector
                 *      [DATA]      the dword-array containing the sector data
                 *
                 * We still support the older JSON encoding, where sector data was encoded as an array of 'bytes'
                 * rather than a dword DATA array.  However, our support is strictly limited to an on-the-fly
                 * conversion to a forward-compatible DATA array.
                 */
                else {
                    if (DEBUG && this.messageEnabled(MESSAGE.DISK + MESSAGE.DATA)) {
                        let sCylinders = diskData.length + " track" + (diskData.length > 1 ? "s" : "");
                        let nHeads = diskData[0].length;
                        let sHeads = nHeads + " head" + (nHeads > 1 ? "s" : "");
                        let nSectorsPerTrack = diskData[0][0].length;
                        let sSectorsPerTrack = nSectorsPerTrack + " sector" + (nSectorsPerTrack > 1 ? "s" : "") + "/track";
                        this.printf("%s, %s, %s\n", sCylinders, sHeads, sSectorsPerTrack);
                    }
                    /**
                     * Before the image is usable, we must "normalize" all the sectors.  In the past, this meant
                     * "inflating" them all.  However, that's no longer strictly necessary.  Mainly, it just means
                     * setting LENGTH and DATA properties, so that all the sectors are well-defined.
                     *
                     * This includes detecting sector data in older formats (eg, the old array of 'bytes' instead
                     * of the new DATA array of dwords) and converting them on-the-fly to the current format.
                     */
                    this.nCylinders = diskData.length;
                    this.nHeads = diskData[0].length;
                    this.nSectors = diskData[0][0].length;
                    let sector = diskData[0][0][0];
                    this.cbSector = (sector && (sector[Disk.SECTOR.LENGTH] || sector['length'])) || 512;

                    let dwChecksum = 0;
                    for (let iCylinder = 0; iCylinder < this.nCylinders; iCylinder++) {
                        for (let iHead = 0; iHead < this.nHeads; iHead++) {
                            for (let iSector = 0; iSector < this.nSectors; iSector++) {
                                sector = diskData[iCylinder][iHead][iSector];
                                if (!sector) continue;          // non-standard (eg, XDF) disk images may have "unused" (null) sectors
                                /**
                                 * "Upgrade" all sector object properties.
                                 */
                                let idSector = sector[Disk.SECTOR.ID];
                                if (idSector == undefined) {
                                    idSector = sector['sector'];
                                    sector[Disk.SECTOR.ID] = idSector;
                                    delete sector['sector'];
                                }
                                let length = sector[Disk.SECTOR.LENGTH];
                                if (length == undefined) {
                                    length = sector['length'] || 512;
                                    sector[Disk.SECTOR.LENGTH] = length;
                                    delete sector['length'];
                                }
                                let dwPattern = sector['pattern'];
                                if (dwPattern == undefined) {
                                    dwPattern = 0;
                                } else {
                                    delete sector['pattern'];
                                }
                                let adw = sector[Disk.SECTOR.DATA];
                                if (adw == undefined) {
                                    adw = sector['data'];
                                    if (adw != undefined) {
                                        sector[Disk.SECTOR.DATA] = adw;
                                        delete sector['data'];
                                    }
                                    else {
                                        let ab = sector['bytes'];
                                        if (ab === undefined || !ab.length) {
                                            /**
                                             * If there is neither a 'bytes' nor 'data' array, then our job is simple:
                                             * create an empty 'data' array; it will be filled in with the dword pattern
                                             * as needed later.
                                             *
                                             * The only wrinkle is if there *is* a 'bytes' array but it's empty, in which
                                             * case we must assume that the pattern was a byte pattern, so convert it to a
                                             * dword pattern.
                                             */
                                            sector[Disk.SECTOR.DATA] = adw = [];
                                            if (ab) {
                                                this.assert((dwPattern & 0xff) == dwPattern);
                                                dwPattern = (dwPattern | (dwPattern << 8) | (dwPattern << 16) | (dwPattern << 24));
                                            }
                                        }
                                        else {
                                            /**
                                             * To keep the conversion code simple, we'll do any necessary pattern-filling first,
                                             * to fully "inflate" the sector, eliminating the possibility of partial dwords and
                                             * saving any code downstream from dealing with byte-size patterns.
                                             */
                                            this.assert((dwPattern & 0xff) == dwPattern);
                                            for (let ib = ab.length; ib < length; ib++) {
                                                ab[ib] = dwPattern;         // the pattern for byte-arrays was only a byte
                                            }
                                            this.fill(sector, ab, 0);
                                        }
                                        delete sector['bytes'];
                                    }
                                }
                                else {
                                    if (adw.length < (length >> 2)) {
                                        /**
                                         * To minimize breakage and changes, I opted to convert new data arrays to the old format,
                                         * where the data array is just the non-repeating data and dwPattern is the repeating value,
                                         * like so:
                                         *
                                         *      dwPattern = adw[--adw.length];
                                         *
                                         * But that was a bone-headed move, because that line will ALWAYS return undefined, since the
                                         * array gets shortened BEFORE the fetch of the final value.
                                         */
                                        dwPattern = adw[adw.length - 1];
                                        if (adw.length) adw.length--;
                                    }
                                }

                                this.initSector(sector, iCylinder, iHead, idSector, this.cbSector, dwPattern);

                                /**
                                 * For the disk as a whole, we maintain a checksum of the original unmodified data:
                                 *
                                 *      dwChecksum: summation of all dwords in all non-empty sectors
                                 *
                                 * Pattern-filling of sectors is deferred until absolutely necessary (eg, when a sector is
                                 * being written).  So all we need to do at this point is checksum all the initial sector data.
                                 */
                                for (let idw = 0; idw < adw.length; idw++) {
                                    dwChecksum = (dwChecksum + adw[idw]) & (0xffffffff|0);
                                }
                            }
                        }
                    }
                    this.diskData = diskData;
                    this.dwChecksum = dwChecksum;
                    this.imageInfo = imageInfo;
                    if (BACKTRACK || SYMBOLS) this.buildFileTable(fileTable);
                    disk = this;
                }
            } catch (e) {
                Component.error("Disk image error (" + sURL + "): " + e.message);
                imageData = null;
            }

            if (imageData) {
                Component.addMachineResource(this.controller.idMachine, sURL, imageData);
            }
        }

        if (this.fnNotify) {
            this.fnNotify.call(this.controllerNotify, this.drive, disk, this.sDiskName, this.sDiskPath, nErrorCode);
            this.fnNotify = null;
        }
    }

    /**
     * buildFileTable(fileTable)
     *
     * This function builds a table of FileInfo objects from any and all file descriptors present in the
     * "extended" JSON disk image, and updates all the sector objects to point back to the corresponding FileInfo.
     * Used for BACKTRACK and SYMBOLS support.
     *
     * @this {Disk}
     * @param {Array.<FileDesc>} [fileTable] (array of FileDescs, if any, stored in the JSON disk image)
     */
    buildFileTable(fileTable)
    {
        if (BACKTRACK || SYMBOLS) {
            if (fileTable) {
                let diskData = this.diskData;
                this.aFileTable = [];
                for (let iCylinder = 0; iCylinder < diskData.length; iCylinder++) {
                    for (let iHead = 0; iHead < diskData[iCylinder].length; iHead++) {
                        for (let iSector = 0; iSector < diskData[iCylinder][iHead].length; iSector++) {
                            let sector = diskData[iCylinder][iHead][iSector];
                            if (sector) {
                                let index = sector[Disk.SECTOR.FILE_INDEX];
                                if (index != undefined) {
                                    let file = this.aFileTable[index];
                                    if (!file) {
                                        let desc = fileTable[index];
                                        file = new FileInfo(this, desc.path, StrLib.getBaseName(desc.path), +desc.attr, desc.size || 0, desc.module);
                                        this.aFileTable[index] = file;
                                    }
                                    sector.file = file;
                                    sector.offFile = sector[Disk.SECTOR.FILE_OFFSET];
                                }
                                delete sector[Disk.SECTOR.FILE_INDEX];
                                delete sector[Disk.SECTOR.FILE_OFFSET];
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * getFileInfo(sector)
     *
     * @this {Disk}
     * @param {Sector} sector
     * @returns {string}
     */
    getFileInfo(sector)
    {
        //
        // The following code would work if we retained the FILE_INDEX and FILE_OFFSET properties
        // from the original JSON data, but buildFileTable() converts those to file (FileInfo) and
        // offFile (number) properties and then discards them.  However, I may decide to leave
        // FILE_INDEX and FILE_OFFSET in place, and use this code in the future.  It would be a little
        // less overhead per sector (ie, using numbers of instead object references).
        //
        // if (this.aFileTable) {
        //     let iFile = sector[Disk.SECTOR.FILE_INDEX];
        //     if (iFile !== undefined) {
        //         let file = this.aFileTable[iFile];
        //         return file.path + "[" + StrLib.toHex(sector[Disk.SECTOR.FILE_OFFSET], 0, true) + "]";
        //     }
        // }
        return sector.file? (sector.file.path + "[" + StrLib.toHex(sector.offFile, 0, true) + "]") : "unknown";
    }

    /**
     * addModuleInfo(sector)
     *
     * @this {Disk}
     * @param {Sector|null} sector
     */
    addModuleInfo(sector)
    {
        if (SYMBOLS && sector && sector.file) {
            let module = sector.file.module;
            if (module) {
                this.aModules[module.name] = module;
            }
        }
    }

    /**
     * getModuleInfo(sModule, nSegment)
     *
     * If the given module and segment number is found, we return an Array of symbol offsets, indexed by symbol name.
     *
     * NOTE: Originally, this function simply iterated over the disk's file table, looking for a file with a matching
     * module name, but not only was that inefficient (since most files on a disk are not modules), it could actually
     * match the wrong file, since module names are not unique (eg, KRNL286.EXE and KRNL386.EXE are both named "KERNEL").
     *
     * By restricting the search to the most recent module that has actually been read from the disk, we should have much
     * more accurate results.
     *
     * @this {Disk}
     * @param {string} sModule
     * @param {number} nSegment
     * @returns {Object|null}
     */
    getModuleInfo(sModule, nSegment)
    {
        let aSymbols = null;
        if (SYMBOLS) {
            let module = this.aModules[sModule];
            if (module) {
                let segment = module['segments'] && module['segments'][nSegment];
                if (segment) {
                    aSymbols = {};
                    for (let ord in segment['ordinals']) {
                        let entry = segment['ordinals'][ord];
                        /**
                         * entry[1] is the symbol name, which becomes the index, and entry[0] is the offset.
                         */
                        aSymbols[entry['s']] = entry['o'];
                    }
                }
            }
        }
        return aSymbols;
    }

    /**
     * getSymbolInfo(sSymbol)
     *
     * For all whole or partial symbol matches, return them in an Array of entries:
     *
     *      [symbol, file name, segment number, segment offset, segment size].
     *
     * TODO: This function has many limitations (ie, slow, case-sensitive), but it gets the job done for now.
     *
     * @this {Disk}
     * @param {string} sSymbol
     * @returns {Array}
     */
    getSymbolInfo(sSymbol)
    {
        let aInfo = [];
        if (SYMBOLS && this.aFileTable) {
            let sSymbolUpper = sSymbol.toUpperCase();
            for (let iFile = 0; iFile < this.aFileTable.length; iFile++) {
                let file = this.aFileTable[iFile];
                /**
                 * NOTE: Given how we now build the file table based on file indexes in the sector
                 * data, there could well be "holes" in the file table (ie, entries that were used to
                 * describe a volume label or some other directory entry that has no associated sectors).
                 */
                if (!file || !file.module) continue;
                for (let seg in file.module['segments']) {
                    let segment = file.module['segments'][seg];
                    for (let ord in segment['ordinals']) {
                        let entry = segment['ordinals'][ord];
                        if (entry['s'] && entry['s'].indexOf(sSymbolUpper) >= 0) {
                            aInfo.push([entry['s'], file.name, +seg, entry['o'], segment['offEnd'] - segment['offStart']]);
                        }
                    }
                }
            }
        }
        return aInfo;
    }

    /**
     * getSector(lba)
     *
     * @this {Disk}
     * @param {number} lba (logical block address)
     * @returns {Sector|null} sector
     */
    getSector(lba)
    {
        let nSectorsPerCylinder = this.nHeads * this.nSectors;
        let iCylinder = (lba / nSectorsPerCylinder) | 0;
        if (iCylinder < this.nCylinders) {
            let nSectorsRemaining = (lba % nSectorsPerCylinder);
            let iHead = (nSectorsRemaining / this.nSectors) | 0;
            /**
             * LBAs are 0-based, but the sector numbers in CHS addressing are 1-based, so add one to iSector
             */
            let iSector = (nSectorsRemaining % this.nSectors) + 1;
            return this.seek(iCylinder, iHead, iSector);
        }
        return null;
    }

    /**
     * getSectorData(sector, off, len)
     *
     * WARNING: This function is restricted to reading data contained ENTIRELY within the specified sector.
     *
     * NOTE: Yes, this function is not the most efficient way to read a byte/word/dword value from within a sector,
     * but given the different states a sector may be in, it's certainly the simplest and safest, and since this is
     * only used by buildFileTable() and its progeny, it's not clear that we need to be superfast anyway.
     *
     * @this {Disk}
     * @param {Sector} sector
     * @param {number} off (byte offset)
     * @param {number} len (1 to 4 bytes)
     * @returns {number}
     */
    getSectorData(sector, off, len)
    {
        let dw = 0;
        let nShift = 0;
        this.assert(len > 0 && len <= 4);
        while (len--) {
            this.assert(off < sector[Disk.SECTOR.LENGTH]);
            let b = this.read(sector, off++);
            this.assert(b >= 0);
            if (b < 0) break;
            dw |= (b << nShift);
            nShift += 8;
        }
        return dw;
    }

    /**
     * initSector(sector, iCylinder, iHead, idSector, cbSector, dwPattern)
     *
     * Ensures every sector has ALL the properties of a proper Sector object.
     *
     * In addition, we will maintain the following information on a per-sector basis,
     * as sectors are modified:
     *
     *      dwPattern:  pattern used to fill partial sectors
     *      iModify:    index of first modified dword in sector
     *      cModify:    number of modified dwords in sector
     *      fDirty:     true if sector is dirty, false if clean (or cleaning in progress)
     *
     * @this {Disk}
     * @param {Sector|null} sector
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} idSector
     * @param {number} cbSector
     * @param {number|null} dwPattern
     * @returns {Sector}
     */
    initSector(sector, iCylinder, iHead, idSector, cbSector, dwPattern)
    {
        if (!sector) {
            sector = /** @type {Sector} */ ({
                [Disk.SECTOR.CYLINDER]: iCylinder,
                [Disk.SECTOR.HEAD]: iHead,
                [Disk.SECTOR.ID]: idSector,
                [Disk.SECTOR.LENGTH]: cbSector,
                [Disk.SECTOR.DATA]: []
            });
        } else {
            sector[Disk.SECTOR.CYLINDER] = iCylinder;
            sector[Disk.SECTOR.HEAD] = iHead;
            //
            // These asserts will fail on disks with non-standard formats (eg, copy-protected disks
            // like "ZORK1-READONLY.json"), so they have been disabled.
            //
            // this.assert(sector[Disk.SECTOR.ID] == idSector);
            // this.assert(sector[Disk.SECTOR.LENGTH] == cbSector);
        }
        sector[Disk.SECTOR.PATTERN] = dwPattern;
        sector.iModify = sector.cModify = 0;
        sector.fDirty = false;
        return sector;
    }

    /**
     * connectRemoteDisk(sDiskPath)
     *
     * Unlike disconnect(), we don't issue the connect request ourselves; instead, we piggyback on the existing
     * preload code in load() to establish the connection.  That, in turn, will trigger a call to mount(), which
     * will check fOnDemand and set fRemote if the connection was successful.
     *
     * @this {Disk}
     * @param {string} sDiskPath
     * @returns {string} is the URL connection string required to connect to sDiskPath
     */
    connectRemoteDisk(sDiskPath)
    {
        let sParms = DiskAPI.QUERY.ACTION + '=' + DiskAPI.ACTION.OPEN;
        sParms += '&' + DiskAPI.QUERY.VOLUME + '=' + sDiskPath;
        sParms += '&' + DiskAPI.QUERY.MODE + '=' + this.mode;
        sParms += '&' + DiskAPI.QUERY.CHS + '=' + this.nCylinders + ':' + this.nHeads + ':' + this.nSectors + ':' + this.cbSector;
        sParms += '&' + DiskAPI.QUERY.MACHINE + '=' + this.controller.getMachineID();
        sParms += '&' + DiskAPI.QUERY.USER + '=' + this.controller.getUserID();
        return WebLib.getHostOrigin() + DiskAPI.ENDPOINT + '?' + sParms;
    }

    /**
     * readRemoteSectors(iCylinder, iHead, iSector, nSectors, fAsync, done)
     *
     * @this {Disk}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {number} nSectors (to read)
     * @param {boolean} fAsync
     * @param {function(number,boolean)} [done]
     */
    readRemoteSectors(iCylinder, iHead, iSector, nSectors, fAsync, done)
    {
        this.printf(MESSAGE.DEBUG, "readRemoteSectors(CHS=%d:%d:%d,N=%d)\n", iCylinder, iHead, iSector, nSectors);

        if (this.fRemote) {
            let sParms = DiskAPI.QUERY.ACTION + '=' + DiskAPI.ACTION.READ;
            sParms += '&' + DiskAPI.QUERY.VOLUME + '=' + this.sDiskPath;
            sParms += '&' + DiskAPI.QUERY.CHS + '=' + this.nCylinders + ':' + this.nHeads + ':' + this.nSectors + ':' + this.cbSector;
            sParms += '&' + DiskAPI.QUERY.ADDR + '=' + iCylinder + ':' + iHead + ':' + iSector + ':' + nSectors;
            sParms += '&' + DiskAPI.QUERY.MACHINE + '=' + this.controller.getMachineID();
            sParms += '&' + DiskAPI.QUERY.USER + '=' + this.controller.getUserID();
            let disk = this;
            let sDiskURL = WebLib.getHostOrigin() + DiskAPI.ENDPOINT + '?' + sParms;
            WebLib.getResource(sDiskURL, null, fAsync, function(sURL, sResponse, nErrorCode) {
                disk.doneReadRemoteSectors(sURL, sResponse, nErrorCode, [iCylinder, iHead, iSector, nSectors, fAsync, done]);
            });
            return;
        }
        if (done) done(-1, false);
    }

    /**
     * doneReadRemoteSectors(sURLName, sURLData, nErrorCode, aRequest)
     *
     * @this {Disk}
     * @param {string} sURLName
     * @param {string} sURLData
     * @param {number} nErrorCode
     * @param {Array} aRequest ([iCylinder, iHead, iSector, nSectors, fAsync, done])
     */
    doneReadRemoteSectors(sURLName, sURLData, nErrorCode, aRequest)
    {
        let fAsync = false;

        let iCylinder = aRequest[0];
        let iHead = aRequest[1];
        let iSector = aRequest[2];
        let nSectors = aRequest[3];

        if (!nErrorCode) {
            let abData = JSON.parse(sURLData);
            let offData = 0;
            while (nSectors--) {
                /**
                 * We call seek with fWrite == true to prevent seek() from triggering another call
                 * to readRemoteSectors() and endlessly recursing.  That also forces seek() to:
                 *
                 *  1) zero the sector's 'pattern'
                 *  2) disable warning about reading an uninitialized sector
                 *
                 * We KNOW this is an uninitialized sector, because we're about to initialize it.
                 */
                let sector = this.seek(iCylinder, iHead, iSector, null, true);
                if (!sector) {
                    this.printf(MESSAGE.DEBUG, "doneReadRemoteSectors(): seek(CHS=%d:%d:%d) failed\n", iCylinder, iHead, iSector);
                    break;
                }
                this.fill(sector, abData, offData);
                offData += sector[Disk.SECTOR.LENGTH];
                /**
                 * We happen to know that when seek() calls readRemoteSectors(), it limits the number of sectors
                 * to the current track, so the only variable we need to advance is iSector.
                 */
                iSector++;
            }
            fAsync = aRequest[4];
        } else {
            this.printf(MESSAGE.DEBUG, "doneReadRemoteSectors(CHS=%d:%d:%d,N=%d) returned error %d\n", iCylinder, iHead, iSector, nSectors, nErrorCode);
        }
        let done = aRequest[5];
        if (done) done(nErrorCode, fAsync);
    }

    /**
     * writeRemoteSectors(iCylinder, iHead, iSector, nSectors, abSectors, fAsync)
     *
     * Writes to a remote disk are performed on a timer-driven basis.  When a sector is modified for the first time,
     * a reference to that sector is "pushed" onto (ie, appended to the end of) aDirtySectors, and if aDirtySectors was
     * originally empty, then a REMOTE_WRITE_DELAY timer is set.
     *
     * When the timer fires, the first batch of contiguous sectors is sent off the server, and when the server responds
     * (ie, when cleanDirtySectors() is called), if the response indicates success, every sector that was sent is marked
     * clean -- unless one or more writes to the sector occurred in the meantime, which we track through a per-sector
     * fDirty flag.
     *
     * @this {Disk}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {number} nSectors (to write)
     * @param {Array.<number>} abSectors
     * @param {boolean} fAsync
     * @returns {boolean|Array}
     */
    writeRemoteSectors(iCylinder, iHead, iSector, nSectors, abSectors, fAsync)
    {
        this.printf(MESSAGE.DEBUG, "writeRemoteSectors(CHS=%d:%d:%d,N=%d)\n", iCylinder, iHead, iSector, nSectors);

        if (this.fRemote) {
            let dataPost = {};
            this.fWriteInProgress = true;
            dataPost[DiskAPI.QUERY.ACTION] = DiskAPI.ACTION.WRITE;
            dataPost[DiskAPI.QUERY.VOLUME] = this.sDiskPath;
            dataPost[DiskAPI.QUERY.CHS] = this.nCylinders + ':' + this.nHeads + ':' + this.nSectors + ':' + this.cbSector;
            dataPost[DiskAPI.QUERY.ADDR] = iCylinder + ':' + iHead + ':' + iSector + ':' + nSectors;
            dataPost[DiskAPI.QUERY.MACHINE] = this.controller.getMachineID();
            dataPost[DiskAPI.QUERY.USER] = this.controller.getUserID();
            dataPost[DiskAPI.QUERY.DATA] = JSON.stringify(abSectors);
            let disk = this;
            let sDiskURL = WebLib.getHostOrigin() + DiskAPI.ENDPOINT;
            WebLib.getResource(sDiskURL, dataPost, fAsync, function(sURL, sResponse, nErrorCode) {
                disk.doneWriteRemoteSectors(sURL, sResponse, nErrorCode, [iCylinder, iHead, iSector, nSectors, fAsync]);
            });
        }
        return false;
    }

    /**
     * doneWriteRemoteSectors(sURLName, sURLData, nErrorCode, aRequest)
     *
     * @this {Disk}
     * @param {string} sURLName
     * @param {string} sURLData
     * @param {number} nErrorCode
     * @param {Array} aRequest ([iCylinder, iHead, iSector, nSectors, fAsync])
     */
    doneWriteRemoteSectors(sURLName, sURLData, nErrorCode, aRequest)
    {
        let iCylinder = aRequest[0];
        let iHead = aRequest[1];
        let iSector = aRequest[2];
        let nSectors = aRequest[3];
        let fAsync = aRequest[4];
        this.fWriteInProgress = false;

        if (iCylinder >= 0 && iCylinder < this.diskData.length && iHead >= 0 && iHead < this.diskData[iCylinder].length) {
            for (let i = iSector - 1; nSectors-- > 0 && i >= 0 && i < this.diskData[iCylinder][iHead].length; i++) {
                let sector = this.diskData[iCylinder][iHead][i];

                if (!nErrorCode) {
                    if (!sector.fDirty) {
                        sector.iModify = sector.cModify = 0;
                    }
                } else {
                    this.printf(MESSAGE.DEBUG, "doneWriteRemoteSectors(CHS=%d:%d:%d) returned error %d\n", iCylinder, iHead, sector[Disk.SECTOR.ID], nErrorCode);
                    this.queueDirtySector(sector, false);
                }
            }
        }
        if (fAsync) this.updateWriteTimer();
    }

    /**
     * disconnectRemoteDisk()
     *
     * This is called by our powerDown() notification handler.  If fRemote is true, we issue the disconnect
     * request and then immediately set fRemote to false; we don't wait for (or test) the response.
     *
     * @this {Disk}
     */
    disconnectRemoteDisk()
    {
        if (this.fRemote) {
            let sParms = DiskAPI.QUERY.ACTION + '=' + DiskAPI.ACTION.CLOSE;
            sParms += '&' + DiskAPI.QUERY.VOLUME + '=' + this.sDiskPath;
            sParms += '&' + DiskAPI.QUERY.MACHINE + '=' + this.controller.getMachineID();
            sParms += '&' + DiskAPI.QUERY.USER + '=' + this.controller.getUserID();
            let sDiskURL = WebLib.getHostOrigin() + DiskAPI.ENDPOINT + '?' + sParms;
            WebLib.getResource(sDiskURL, null, true);
            this.fRemote = false;
        }
    }

    /**
     * queueDirtySector(sector, fAsync)
     *
     * Mark the specified sector as dirty, add it to the queue (aDirtySectors) if not already added,
     * and establish a timeout handler (findDirtySectors) if not already established.
     *
     * A freshly dirtied sector should sit in the queue for a short period of time (eg, 2 seconds)
     * before we attempt to write it; that is, a REMOTE_WRITE_DELAY timer should start ticking again
     * for any sector that is rewritten.  However, there will be exceptions; for example, when a sector
     * is finally written, we want to take advantage of the write request to write any additional dirty
     * sectors that follow it, even if those additional sectors were written less than 2 seconds ago.
     *
     * @this {Disk}
     * @param {Sector} sector
     * @param {boolean} fAsync (true to update write timer, false to not)
     * @returns {boolean} true if write timer set, false if not
     */
    queueDirtySector(sector, fAsync)
    {
        sector.fDirty = true;

        let j = this.aDirtySectors.indexOf(sector);
        if (j >= 0) {
            this.aDirtySectors.splice(j, 1);
            this.aDirtyTimestamps.splice(j, 1);
        }
        this.aDirtySectors.push(sector);
        this.aDirtyTimestamps.push(Component.getTime());

        this.printf(MESSAGE.DEBUG, "queueDirtySector(CHS=%d:%d:%d): %d dirty\n", sector[Disk.SECTOR.CYLINDER], sector[Disk.SECTOR.HEAD], sector[Disk.SECTOR.ID], this.aDirtySectors.length);

        return fAsync && this.updateWriteTimer();
    }

    /**
     * updateWriteTimer()
     *
     * If a timer is already active, make sure it's still valid (ie, the time the timer is scheduled to fire is
     * >= the timestamp of the next dirty sector + REMOTE_WRITE_DELAY); if not, cancel the timer and start a new one.
     *
     * @this {Disk}
     * @returns {boolean} true if write timer set, false if not
     */
    updateWriteTimer()
    {
        if (this.aDirtySectors.length) {
            let msWrite = this.aDirtyTimestamps[0] + Disk.REMOTE_WRITE_DELAY;
            if (this.timerWrite) {
                if (this.msTimerWrite < msWrite) {
                    clearTimeout(this.timerWrite);
                    this.timerWrite = null;
                }
            }
            if (!this.timerWrite) {
                let obj = this;
                let msNow = Component.getTime();
                let msDelay = msWrite - msNow;
                if (msDelay < 0) msDelay = 0;
                if (msDelay > Disk.REMOTE_WRITE_DELAY) msDelay = Disk.REMOTE_WRITE_DELAY;
                this.timerWrite = setTimeout(function() {
                    obj.findDirtySectors(true);
                }, msDelay);
                this.msTimerWrite = msNow + msDelay;
            }
        } else {
            if (this.timerWrite) {
                clearTimeout(this.timerWrite);
                this.timerWrite = null;
            }
        }
        return this.timerWrite !== null;
    }

    /**
     * findDirtySectors(fAsync)
     *
     * Starting with the oldest dirty sector in the queue (aDirtySectors), determine the longest contiguous stretch of
     * dirty sectors (currently limited to the same track), mark them all as not dirty, and then call writeRemoteSectors().
     *
     * @this {Disk}
     * @param {boolean} fAsync is true if this function is being called asynchronously, false otherwise
     * @returns {boolean|Array} false if no dirty sectors, otherwise true (or a response array if not fAsync)
     */
    findDirtySectors(fAsync)
    {
        if (fAsync) {
            this.timerWrite = null;
        }
        let sector = this.aDirtySectors[0];
        if (sector) {
            let iCylinder = sector[Disk.SECTOR.CYLINDER];
            let iHead = sector[Disk.SECTOR.HEAD];
            let iSector = sector[Disk.SECTOR.ID];
            let nSectors = 0;
            let abSectors = [];
            for (let i = iSector - 1; i < this.diskData[iCylinder][iHead].length; i++) {
                let sectorNext = this.diskData[iCylinder][iHead][i];
                if (!sectorNext.fDirty) break;
                let j = this.aDirtySectors.indexOf(sectorNext);
                this.assert(j >= 0, "findDirtySectors(CHS=" + iCylinder + ':' + iHead + ':' + sectorNext[Disk.SECTOR.ID] + ") missing from aDirtySectors");
                this.printf(MESSAGE.DEBUG, "findDirtySectors(CHS=%d:%d:%d)\n", iCylinder, iHead, sectorNext[Disk.SECTOR.ID]);
                this.aDirtySectors.splice(j, 1);
                this.aDirtyTimestamps.splice(j, 1);
                abSectors = abSectors.concat(this.toBytes(sectorNext));
                sectorNext.fDirty = false;
                nSectors++;
            }
            this.assert(!!abSectors.length, "no data for dirty sector (CHS=" + iCylinder + ':' + iHead + ':' + sector[Disk.SECTOR.ID] + ")");
            let response = this.writeRemoteSectors(iCylinder, iHead, iSector, nSectors, abSectors, fAsync);
            return fAsync || response;
        }
        return false;
    }

    /**
     * info()
     *
     * @this {Disk}
     * @returns {Array} containing: [nCylinders, nHeads, nSectorsPerTrack, nBytesPerSector]
     */
    info()
    {
        if (!this.diskData.length) {
            return [0, 0, 0, 0];
        }
        return [this.diskData.length, this.diskData[0].length, this.diskData[0][0].length, this.diskData[0][0][0][Disk.SECTOR.LENGTH]];
    }

    /**
     * seek(iCylinder, iHead, iSector, sectorPrev, fWrite, done)
     *
     * TODO: There's some dodgy code in seek() that allows floppy images to be dynamically
     * reconfigured with more heads and/or sectors/track, and it does so by peeking at more drive
     * properties.  That code used to be in the FDC component, where it was perfectly reasonable
     * to access those properties.  We need a cleaner interface back to the drive, similar to the
     * info() interface we provide to the controller.
     *
     * Whether or not the "dynamic reconfiguration" feature itself is perfectly reasonable is,
     * of course, a separate question.
     *
     * @this {Disk}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {Sector|null} [sectorPrev]
     * @param {boolean} [fWrite]
     * @param {function(Sector,boolean)} [done]
     * @returns {Sector|null} is the requested sector, or null if not found (or not available yet)
     */
    seek(iCylinder, iHead, iSector, sectorPrev, fWrite, done)
    {
        let sector = null;
        let drive = this.drive;
        let cylinder = this.diskData[iCylinder];
        if (cylinder) {
            let i;
            let track = cylinder[iHead];
            /**
             * The following code allows a single-sided diskette image to be reformatted (ie, "expanded")
             * as a double-sided image, provided the drive has more than one head (see drive.nHeads).
             *
             * NOTE: Strangely, we must ignore the number of drive heads both here and in doFormat(); otherwise,
             * PC DOS 1.10 "FORMAT /1" will fail.  Even though "/1" means format as a single-sided diskette, FORMAT
             * still attempts to format the first track with head 1.
             */
            if (!track && drive.bFormatting && iHead < 2 /* drive.nHeads */) {
                track = new Array(drive.bSectorEnd);
                for (i = 0; i < track.length; i++) {
                    track[i] = this.initSector(null, iCylinder, iHead, i + 1, drive.nBytes, 0);
                }
                /**
                 * TODO: This is more dodginess, because we can't be certain that every cylinder on the disk
                 * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                 * properties (eg, this.nHeads), on the assumption that the disk's geometry is homogeneous.
                 */
                if (iHead < drive.nHeads) {
                    cylinder[iHead] = track;
                    this.nHeads = iHead + 1;
                }
            }
            if (track) {
                for (i = 0; i < track.length; i++) {
                    if (track[i] && track[i][Disk.SECTOR.ID] == iSector) {
                        sector = track[i];
                        /**
                         * When confronted with a series of sectors with the same sector ID (as found, for example, on
                         * the 1984 King's Quest copy-protected diskette), we're supposed to advance to another sector in
                         * the series.  So if the current sector matches the previous sector, we'll peek at the next sector
                         * (if any), and if it has the same sector ID, then we'll choose that sector instead.
                         */
                        if (sectorPrev && sectorPrev == sector) {
                            let j = i, sectorNext;
                            while (true) {
                                if (++j >= track.length) j = 0;
                                sectorNext = track[j];
                                if (!sectorNext || sectorNext == sector) break;
                                if (sectorNext[Disk.SECTOR.ID] == iSector) {
                                    sector = sectorNext;
                                    i = j;
                                    break;
                                }
                            }
                        }
                        /**
                         * If the sector's pattern is null, then this sector's true contents have not yet
                         * been fetched from the server.
                         */
                        if (sector[Disk.SECTOR.PATTERN] === null) {
                            if (fWrite) {
                                /**
                                 * Optimization: if the caller has explicitly told us that they're about to WRITE to the
                                 * sector, then we shouldn't need to read it from the server; assume a zero pattern and return.
                                 */
                                sector[Disk.SECTOR.PATTERN] = 0;
                            } else {
                                let nSectors = 1;
                                /**
                                 * We know we need to read at least 1 sector, but let's count the number of trailing sectors
                                 * on the same track that may also be required.
                                 */
                                while (++i < track.length) {
                                    if (track[i][Disk.SECTOR.PATTERN] === null) nSectors++;
                                }
                                this.readRemoteSectors(iCylinder, iHead, iSector, nSectors, done != null, function onReadRemoteComplete(err, fAsync) {
                                    if (err) sector = null;
                                    if (done) { //noinspection JSReferencingMutableVariableFromClosure
                                        done(sector, fAsync);
                                    }
                                });
                                return done? null : sector;
                            }
                        }
                        break;
                    }
                }
                /**
                 * The following code allows an 8-sector track to be reformatted (ie, "expanded") as a 9-sector track.
                 */
                if (!sector && drive.bFormatting && drive.bSector == 9) {
                    sector = track[i] = this.initSector(null, iCylinder, iHead, drive.bSector, drive.nBytes, 0);
                    /**
                     * TODO: This is more dodginess, because we can't be certain that every track on the disk
                     * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                     * properties (eg, this.nSectors), on the assumption that the disk's geometry is homogeneous.
                     */
                    if (this.nSectors < drive.bSector) this.nSectors = drive.bSector;
                }
            }
        }
        if (done) done(sector, false);
        this.addModuleInfo(sector);
        return sector;
    }

    /**
     * fill(sector, ab, off)
     *
     * @this {Disk}
     * @param {Sector} sector
     * @param {*} ab (technically, this should be typed as Array.<number> but I'm having trouble coercing JSON.parse() to that)
     * @param {number} off
     */
    fill(sector, ab, off)
    {
        let cdw = sector[Disk.SECTOR.LENGTH] >> 2;
        let adw = new Array(cdw);
        for (let idw = 0; idw < cdw; idw++) {
            adw[idw] = ab[off] | (ab[off + 1] << 8) | (ab[off + 2] << 16) | (ab[off + 3] << 24);
            off += 4;
        }
        sector[Disk.SECTOR.DATA] = adw;
        /**
         * TODO: Consider taking this opportunity to shrink DATA down by the number of dwords at the end of the buffer that
         * contain the same pattern, and setting dwPattern accordingly.
         */
    }

    /**
     * toBytes(sector)
     *
     * @this {Disk}
     * @param {Sector} sector
     * @returns {Array.<number>} is an array of bytes
     */
    toBytes(sector)
    {
        let cb = sector[Disk.SECTOR.LENGTH];
        let ab = new Array(cb);
        let ib = 0;
        let cdw = cb >> 2;
        let adw = sector[Disk.SECTOR.DATA];
        let dwPattern = sector[Disk.SECTOR.PATTERN];
        for (let idw = 0; idw < cdw; idw++) {
            let dw = (idw < adw.length? adw[idw] : dwPattern);
            ab[ib++] = dw & 0xff;
            ab[ib++] = (dw >> 8) & 0xff;
            ab[ib++] = (dw >> 16) & 0xff;
            ab[ib++] = (dw >> 24) & 0xff;
        }
        return ab;
    }

    /**
     * read(sector, iByte, fCompare)
     *
     * @this {Disk}
     * @param {Sector} sector (returned from a previous seek)
     * @param {number} iByte (byte index within the given sector)
     * @param {boolean} [fCompare] is true if this write-compare read
     * @returns {number} the specified (unsigned) byte, or -1 if no more data in the sector
     */
    read(sector, iByte, fCompare)
    {
        let b = -1;
        if (sector) {
            if (DEBUG && !iByte && !fCompare) {
                this.printf(MESSAGE.DISK + MESSAGE.ADDR, "read(\"%s\",CHS=%d:%d:%d): %s\n", this.sDiskFile, sector[Disk.SECTOR.CYLINDER], sector[Disk.SECTOR.HEAD], sector[Disk.SECTOR.ID], this.getFileInfo(sector));
            }
            if (iByte < sector[Disk.SECTOR.LENGTH]) {
                let adw = sector[Disk.SECTOR.DATA];
                let idw = iByte >> 2;
                let dw = (idw < adw.length ? adw[idw] : sector[Disk.SECTOR.PATTERN]);
                b = ((dw >> ((iByte & 0x3) << 3)) & 0xff);
            }
        }
        return b;
    }

    /**
     * write(sector, iByte, b)
     *
     * @this {Disk}
     * @param {Sector} sector (returned from a previous seek)
     * @param {number} iByte (byte index within the given sector)
     * @param {number} b the byte value to write
     * @returns {boolean|null} true if write successful, false if write-protected, null if out of bounds
     */
    write(sector, iByte, b)
    {
        if (this.fWriteProtected) {
            return false;
        }

        if (DEBUG && !iByte) {
            this.printf(MESSAGE.DISK + MESSAGE.ADDR, "write(\"%s\",CHS=%d:%d:%d)\n", this.sDiskFile, sector[Disk.SECTOR.CYLINDER], sector[Disk.SECTOR.HEAD], sector[Disk.SECTOR.ID]);
        }

        if (iByte < sector[Disk.SECTOR.LENGTH]) {
            if (b != this.read(sector, iByte, true)) {
                let adw = sector[Disk.SECTOR.DATA];
                let dwPattern = sector[Disk.SECTOR.PATTERN];
                let idw = iByte >> 2;
                let nShift = (iByte & 0x3) << 3;

                /**
                 * Ensure every byte up to the specified byte is properly initialized.
                 */
                for (let i = adw.length; i <= idw; i++) adw[i] = dwPattern;

                if (!sector.cModify) {
                    sector.iModify = idw;
                    sector.cModify = 1;
                } else if (idw < sector.iModify) {
                    sector.cModify += sector.iModify - idw;
                    sector.iModify = idw;
                } else if (idw >= sector.iModify + sector.cModify) {
                    sector.cModify += idw - (sector.iModify + sector.cModify) + 1;
                }
                adw[idw] = (adw[idw] & ~(0xff << nShift)) | (b << nShift);

                if (this.fRemote) this.queueDirtySector(sector, true);
            }
            return true;
        }
        return null;
    }

    /**
     * encodeAsBase64()
     *
     * @this {Disk}
     * @returns {string}
     */
    encodeAsBase64()
    {
        let s = "", lba = 0, sector;
        /**
         * Gross, but simple; more importantly, it works -- at least for disks of typical floppy magnitude.
         */
        while ((sector = this.getSector(lba++))) {
            for (let off = 0, len = sector[Disk.SECTOR.LENGTH]; off < len; off++) {
                s += String.fromCharCode(this.getSectorData(sector, off, 1));
            }
        }
        return btoa(s);
    }

    /**
     * encodeAsBinary()
     *
     * @this {Disk}
     * @returns {Uint8Array}
     */
    encodeAsBinary() {
        let s = [], lba = 0, sector;
        while ((sector = this.getSector(lba++))) {
            for (let off = 0, len = sector[Disk.SECTOR.LENGTH]; off < len; off++) {
                s.push(this.getSectorData(sector, off, 1));
            }
        }
        return new Uint8Array(s);
    }

    /**
     * save()
     *
     * The first array entry contains some disk information:
     *
     *      [sDiskPath, dwChecksum, nCylinders, nHeads, nSectors, cbSector]
     *
     * Each subsequent entry in the returned array contains the following:
     *
     *      [iCylinder, iHead, iSector, iModify, [...]]
     *
     * where [...] is an array of modified dword(s) in the corresponding sector.
     *
     * @this {Disk}
     * @returns {Array} of modified sectors
     */
    save()
    {
        let i = 0;
        let deltas = [];
        deltas[i++] = [this.sDiskPath, this.dwChecksum, this.nCylinders, this.nHeads, this.nSectors, this.cbSector];
        if (!this.fRemote && !this.fWriteProtected) {
            let diskData = this.diskData;
            for (let iCylinder = 0; iCylinder < diskData.length; iCylinder++) {
                for (let iHead = 0; iHead < diskData[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < diskData[iCylinder][iHead].length; iSector++) {
                        let sector = diskData[iCylinder][iHead][iSector];
                        if (sector && sector.cModify) {
                            let mods = [], n = 0;
                            let iModify = sector.iModify, iModifyLimit = sector.iModify + sector.cModify;
                            while (iModify < iModifyLimit) {
                                mods[n++] = sector[Disk.SECTOR.DATA][iModify++];
                            }
                            deltas[i++] = [iCylinder, iHead, iSector, sector.iModify, mods];
                        }
                    }
                }
            }
        }
        this.printf(MESSAGE.DEBUG, "save(\"%s\"): saved %d change(s)\n", this.sDiskName, (deltas.length - 1));
        return deltas;
    }

    /**
     * restore(deltas)
     *
     * The first array entry contains some disk information:
     *
     *      [sDiskPath, dwChecksum, nCylinders, nHeads, nSectors, cbSector]
     *
     * Each subsequent entry in the supplied array contains the following:
     *
     *      [iCylinder, iHead, iSector, iModify, [...]]
     *
     * where [...] is an array of modified dword(s) in the corresponding sector.
     *
     * @this {Disk}
     * @param {Array} deltas
     * @returns {number} 0 if no changes applied, -1 if an error occurred, otherwise the number of sectors modified
     */
    restore(deltas)
    {
        /**
         * If deltas is undefined, that's not necessarily an error;  the controller may simply be (re)initializing
         * itself (although neither controller should be calling restore() under those conditions anymore).
         */
        let nChanges = 0;
        let sReason = "unsupported restore format";
        /**
         * I originally added a check for diskData here on the assumption that if there was an error loading
         * a disk image, we will have already notified the user, so any additional errors about differing checksums,
         * failure to restore the disk state, etc, would just be annoying.  HOWEVER, HDC will create an empty disk
         * image if its initialization code discovers that no disk was loaded earlier (see verifyDrive).  So while
         * checking diskData is still a good idea, be aware that it won't necessarily avoid redundant error messages
         * (at least in the case of HDC).
         */
        if (deltas && deltas.length > 0) {

            let i = 0;
            let aDiskInfo = deltas[i++];

            if (aDiskInfo && aDiskInfo.length >= 2) {
                /**
                 * Before getting to the checksum, we have to deal with a new situation: restoring an uninitialized
                 * disk image from a complete set of deltas.  And that is only possible if the disk was saved with the
                 * original disk geometry.
                 */
                if (!this.diskData.length && aDiskInfo.length >= 6) {
                    this.create(DiskAPI.MODE.LOCAL, aDiskInfo[2], aDiskInfo[3], aDiskInfo[4], aDiskInfo[5]);
                    /**
                     * TODO: Consider setting a flag here that we can check at the end of the restore() function
                     * that indicates we should recalculate dwChecksum, because we currently have an inconsistency
                     * between local disks that are mounted via buildDisk() and the same disks that are "remounted"
                     * later by this code; the former has the correct checksum, while the latter has a null checksum.
                     *
                     * As you can see below, we currently deal with this by simply ignoring null checksums....
                     */
                }
                /**
                 * v1.01 failed to indicate an error if either one of these failure conditions occurred.  Although maybe
                 * that's just as well, since v1.01 also failed to properly deal with situations where the user mounted
                 * different diskette(s) prior to exiting (hopefully fixed in v1.02).
                 *
                 * UPDATE: We also check aDiskInfo[0] first, because if it's null, then presumably there was no previous
                 * disk, and I'd like the addition of a disk to a machine to not be fatal to the restoration process.
                 */
                else if (aDiskInfo[0] != null) {
                    if (aDiskInfo[1] != null && this.dwChecksum != null && aDiskInfo[1] != this.dwChecksum) {
                        sReason = "original checksum (" + aDiskInfo[1] + ") differs from current checksum (" + this.dwChecksum + ")";
                        nChanges = -2;
                    }
                    /**
                     * Checksum is more important than disk path, and for now, I want the flexibility to move disk images.
                     *
                     *  else if (aDiskInfo[0] != this.sDiskPath) {
                     *      sReason = "original path '" + aDiskInfo[0] + "' differs from current path '" + this.sDiskPath + "'";
                     *      nChanges = -1;
                     *  }
                     */
                }
            }

            if (!this.diskData.length) nChanges = -1;

            while (i < deltas.length && nChanges >= 0) {
                let m = 0;
                let mod = deltas[i++];
                let iCylinder = mod[m++];
                let iHead = mod[m++];
                let iSector = mod[m++];
                /**
                 * Note the buried test for write-protection.  Yes, an invariant condition should be tested
                 * outside the loop, not inside, but (a) it's a trivial test, (b) the test should never fail
                 * because save() should never generate any mods for a write-protected disk, and (c) it
                 * centralizes all the failure conditions we're currently checking (which, admittedly, ain't much).
                 */
                if (iCylinder >= this.diskData.length || iHead >= this.diskData[iCylinder].length || iSector >= this.diskData[iCylinder][iHead].length) {
                    sReason = "sector (CHS=" + iCylinder + ':' + iHead + ':' + iSector + ") out of range (" + nChanges + " changes applied)";
                    nChanges = -1;
                    break;
                }
                if (this.fWriteProtected) {
                    sReason = "unable to modify write-protected disk";
                    nChanges = -1;
                    break;
                }
                let iModify = mod[m++];
                let mods = mod[m++];
                let iModifyLimit = iModify + mods.length;
                let sector = this.diskData[iCylinder][iHead][iSector];
                if (!sector) continue;
                /**
                 * Since write() now deals with empty/partial sectors, we no longer need to completely "inflate"
                 * the sector prior to applying modifications.  So let's just make sure that the sector is "inflated"
                 * up to iModify.
                 */
                let idw = sector[Disk.SECTOR.DATA].length;
                while (idw < iModify) {
                    sector[Disk.SECTOR.DATA][idw++] = sector[Disk.SECTOR.PATTERN];
                }
                let n = 0;
                sector.iModify = iModify;
                sector.cModify = mods.length;
                while (iModify < iModifyLimit) {
                    sector[Disk.SECTOR.DATA][iModify++] = mods[n++];
                }
                nChanges++;
            }
        }

        if (nChanges < 0) {
            /**
             * We're suppressing checksum messages for the general public for now....
             */
            if (DEBUG || nChanges != -2) {
                this.printf(MESSAGE.NOTICE, "Unable to restore disk \"%s\": %s\n", this.sDiskName, sReason);
            }
        } else {
            this.printf(MESSAGE.DEBUG, "restore(\"%s\"): restored %d change(s)\n", this.sDiskName, nChanges);
            /**
             * Last but not least, rebuild the disk's file table if BACKTRACK or SYMBOLS support is enabled.
             */
            if (BACKTRACK || SYMBOLS) this.buildFileTable();
        }
        return nChanges;
    }

    /**
     * convertToJSON(fFormatted)
     *
     * We perform some RegExp massaging on the JSON data to eliminate (old) unnecessary properties
     * (eg, 'length' values of 512, empty 'data' arrays), since those were defaults.
     *
     * In addition, we first check every sector to see if it can be "deflated".  Sectors that were
     * initially "deflated" should remain that way unless/until they were modified, so technically,
     * we could call deflateSector() just for modified sectors, but this isn't a common operation,
     * so it doesn't hurt to check every sector.
     *
     * @this {Disk}
     * @param {boolean} [fFormatted]
     * @returns {string} containing the entire disk image as JSON-encoded data
     */
    convertToJSON(fFormatted)
    {
        let s, lba = 0, sector, sectorLast;

        while ((sector = this.getSector(lba++))) {
            this.deflateSector(sector);
        }

        s = JSON.stringify(this.diskData, function(key, value) {
            /**
             * If BACKTRACK support is enabled, we have to filter out any 'file' properties that may
             * be attached to the sector objects, lest we risk blowing the stack due to circular references.
             */
            if (key == 'file') {
                return undefined;
            }
            return value;
        });

        /**
         * Eliminate old default properties (eg, 'length' values of 512, empty 'data' arrays, etc).
         */
        s = s.replace(/,"length":512/g, "").replace(/,"data":\[]/g, "");

        /**
         * I don't really want to strip quotes from disk image property names, since I would have to put them
         * back again during mount() -- or whenever JSON.parse() is used instead of eval().  But I still remove
         * them temporarily, so that any remaining property names (eg, "iModify", "cModify", "fDirty") can
         * easily be stripped out, by virtue of their being the only quoted properties left.  We then "requote"
         * all the property names that remain.
         */
        s = s.replace(/"(c|h|s|l|d|sector|length|data|pattern)":/g, "$1:");

        /**
         * The next line will remove any other numeric or boolean properties that were added at runtime, although
         * they may have completely different ("minified") names if the code has been compiled.
         */
        s = s.replace(/,"[^"]*":([0-9]+|true|false)/g, "");
        s = s.replace(/(c|h|s|l|d|sector|length|data|pattern):/g, "\"$1\":");

        /**
         * Last but not least, insert line breaks after every object definition, to improve human readability
         * (but only if the caller asks for it).
         */
        if (fFormatted) s = s.replace(/([\]}]),/g, "$1,\n");
        return s;
    }

    /**
     * deflateSector(sector)
     *
     * This is just the first revision: it currently looks only at fully inflated sectors.
     *
     * @this {Disk}
     * @param {Sector} sector
     */
    deflateSector(sector)
    {
        let adw = sector[Disk.SECTOR.DATA];
        let cdw = adw.length;
        if ((cdw << 2) == sector[Disk.SECTOR.LENGTH]) {
            let idw = cdw - 1;
            let dwPattern = adw[idw], cDupes = 0;
            while (idw--) {
                if (adw[idw] !== dwPattern) break;
                cDupes++;
            }
            if (cDupes++) {
                adw.length = cdw - cDupes;
                sector[Disk.SECTOR.PATTERN] = dwPattern;
            }
        }
    }

    /**
     * dumpSector(sector, lba, sDesc)
     *
     * @this {Disk}
     * @param {Sector|null} sector (returned from a previous seek)
     * @param {number} [lba]
     * @param {string} [sDesc]
     * @returns {string}
     */
    dumpSector(sector, lba, sDesc)
    {
        let sDump = "";
        if (DEBUG && sector) {
            if (lba != null) sDump += "sector " + lba + (sDesc? (" for " + sDesc) : "") + ':';
            let sBytes = "", sChars = "";
            let cbSector = sector[Disk.SECTOR.LENGTH];
            let cdwData = sector[Disk.SECTOR.DATA].length;
            let dw = 0;
            for (let i = 0; i < cbSector; i++) {
                if ((i % 16) === 0) {
                    if (sDump) sDump += sBytes + ' ' + sChars + '\n';
                    sDump += StrLib.toHex(i, 4) + ": ";
                    sBytes = sChars = "";
                }
                if ((i % 4) === 0) {
                    let idw = i >> 2;
                    dw = (idw < cdwData? sector[Disk.SECTOR.DATA][idw] : sector[Disk.SECTOR.PATTERN]);
                }
                let b = dw & 0xff;
                dw >>>= 8;
                sBytes += StrLib.toHex(b, 2) + (i % 16 == 7? "-" : " ");
                sChars += (b >= 32 && b < 128? String.fromCharCode(b) : ".");
            }
            if (sBytes) sDump += sBytes + ' ' + sChars;
        }
        return sDump;
    }
}

/**
 * @class FileInfo
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
class FileInfo {
    /**
     * FileInfo(disk, path, name, attr, size, module)
     *
     * @this {FileInfo}
     * @param {Disk} disk
     * @param {string} path
     * @param {string} name
     * @param {number} attr
     * @param {number} size
     * @param {Object} [module]
     */
    constructor(disk, path, name, attr, size, module)
    {
        this.disk = disk;
        this.path = path;
        this.name = name;
        this.attr = attr;
        this.size = size;
        this.module = module;
    }

    /**
     * getSymbol(off, fNearest)
     *
     * @this {FileInfo}
     * @param {number} off (offset relative to start of file)
     * @param {boolean} [fNearest] (true to return nearest symbol if a segment with symbols is found)
     * @returns {string} symbol corresponding to file offset (of the file name + offset if no symbol found)
     */
    getSymbol(off, fNearest)
    {
        let sSymbol = null;
        if (this.module) {
            let segments = this.module['segments'];
            for (let seg in segments) {
                let segment = segments[seg];
                if (off >= segment['offStart'] && off <= segment['offEnd']) {
                    /**
                     * This is the one and only segment we need to check, so we can make off segment-relative now.
                     */
                    off -= segment['offStart'];
                    let cbNearest = off, entryNearest;
                    /**
                     * To support fNearest, save the entry where (off - entry[0]) yields the smallest positive result.
                     */
                    for (let ord in segment['ordinals']) {
                        let entry = segment['ordinals'][ord];
                        let cb = off - entry['o'];
                        if (!cb) {
                            sSymbol = this.module['name'] + '!' + entry['s'];
                            break;
                        }
                        if (fNearest && cb > 0 && cb < cbNearest) {
                            entryNearest = entry;
                            cbNearest = cb;
                        }
                    }
                    if (!sSymbol && entryNearest) {
                        sSymbol = this.module['name'] + '!' + entryNearest[1] + "+" + StrLib.toHex(cbNearest, 0, true);
                    }
                    break;
                }
            }
        }
        return sSymbol || this.name + '+' + StrLib.toHex(off, 0, true);
    }
}
