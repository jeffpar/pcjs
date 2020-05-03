/**
 * @fileoverview Implements Disk support for FDC and HDC components
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

if (typeof module !== "undefined") {
    var Str         = require("../../shared/lib/strlib");
    var Usr         = require("../../shared/lib/usrlib");
    var Web         = require("../../shared/lib/weblib");
    var DiskAPI     = require("../../shared/lib/diskapi");
    var DumpAPI     = require("../../shared/lib/dumpapi");
    var Component   = require("../../shared/lib/component");
    var Messages    = require("./messages");
}

/*
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

/*
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

/*
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
 *      dwPattern:  dword pattern to use for empty or partial sectors (or null if sector still needs to be loaded)
 *
 * initSector() also sets the following properties, to help us quickly identify its location within aDiskData:
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
 * @property {number|null} pattern (deprecated; see dwPattern)
 * @property {FileInfo} file (deprecated; see f)
 * @property {number} offFile (deprecated; see o)
 * @property {number} dataCRC
 * @property {boolean} dataError
 * @property {number} dataMark
 * @property {number} headCRC
 * @property {boolean} headError
 * @property {number} iModify (for internal use only)
 * @property {number} cModify (for internal use only)
 * @property {number|null} dwPattern (for internal use only)
 * @property {boolean} fDirty (for internal use only)
 */

/**
 * class Disk
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
class Disk extends Component {
    /**
     * Disk(controller, drive, mode)
     *
     * Disk contents are stored as an array (aDiskData) of cylinders, each of which is an array of
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
        super("Disk", {'id': controller.idMachine + ".disk" + Str.toHex(++Disk.nDisks, 4)}, Messages.DISK);

        this.controller = controller;

        /*
         * Route all non-Debugger messages (eg, notice() and println() calls) through
         * this.controller (eg, controller.notice() and controller.println()), because
         * the Computer component is unaware of any Disk objects and therefore will not
         * set up the usual overrides when a Control Panel is installed.
         */
        this.notice = controller.notice;
        this.println = controller.println;

        this.cmp = controller.cmp;
        this.dbg = controller.dbg;
        this.drive = drive;

        /*
         * We pull out a number of drive properties that we may or may not need as defaults
         */
        this.sDiskName = drive.name;
        this.fRemovable = drive.fRemovable;
        this.fOnDemand = this.fRemote = false;

        /*
         * Initialize the disk contents
         */
        this.create(mode, drive.nCylinders, drive.nHeads, drive.nSectors, drive.cbSector);

        /*
         * The following dirty sector and timer properties are used only with fOnDemand disks,
         * assuming fRemote was successfully set.
         */
        this.aDirtySectors = [];
        this.aDirtyTimestamps = [];         // this array is parallel to aDirtySectors
        this.timerWrite = null;             // REMOTE_WRITE_DELAY timer in effect, if any
        this.msTimerWrite = 0;              // the time that the write timer, if any, is set to fire
        this.fWriteInProgress = false;

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
     * @param {BusX86} bus
     * @param {CPUx86} cpu
     * @param {DebuggerX86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.dbg = dbg;
    }

    /**
     * isRemote()
     *
     * @this {Disk}
     * @return {boolean} true if remote disk, false if not
     */
    isRemote()
    {
        /*
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
     * @return {boolean} true if successful, false if failure
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
     * @return {Object|boolean}
     */
    powerDown(fSave, fShutdown)
    {
        /*
         * If we're connected to a remote disk, take this opportunity to flush any remaining unwritten
         * changes and then close the connection.
         */
        if (this.fRemote) {
            let response;
            let nErrorCode = 0;
            if (this.fWriteInProgress) {
                /*
                 * TODO: Verify that the Computer's powerOff() handler will actually honor a false return value.
                 */
                if (!Component.confirmUser("Disk writes are still in progress, shut down anyway?")) {
                    return false;
                }
            }
            while ((response = this.findDirtySectors(false))) {
                if ((nErrorCode = response[0])) {
                    this.notice('Unable to save "' + this.sDiskName + '" (error ' + nErrorCode + ')');
                    break;
                }
            }
            if (fShutdown) {
                this.disconnectRemoteDisk();
            }
            /*
             * I only report that changes to the disk have been "saved" if fSave is true, to avoid confusing
             * users who might not understand the difference between discarding local changes (which should restore
             * all diskettes to their original state) and discarding remote changes (which could leave the remote disk
             * in a bad state).
             */
            if (!nErrorCode && fSave) this.notice(this.sDiskName + " saved");
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
        this.aDiskData = [];
        /*
         * If the drive is using PRELOAD mode, then it will use the load()/mount() process to initialize the disk contents;
         * it wouldn't hurt to let create() do its thing, too, but it's a waste of time.
         */
        if (this.mode != DiskAPI.MODE.PRELOAD) {
            if (DEBUG && this.messageEnabled()) {
                this.printMessage("blank disk for \"" + this.sDiskName + "\": " + this.nCylinders + " cylinders, " + this.nHeads + " head(s)");
            }
            let aCylinders = new Array(this.nCylinders);
            for (let iCylinder = 0; iCylinder < aCylinders.length; iCylinder++) {
                let aHeads = new Array(this.nHeads);
                for (let iHead = 0; iHead < aHeads.length; iHead++) {
                    let aSectors = new Array(this.nSectors);
                    for (let iSector = 1; iSector <= aSectors.length; iSector++) {
                        /*
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
            this.aDiskData = aCylinders;
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
     * @return {boolean} true if load completed (successfully or not), false if queued
     */
    load(sDiskName, sDiskPath, file, fnNotify, controller)
    {
        let sDiskURL = sDiskPath;

        /*
         * We could use this.log() as well, but it wouldn't display which component initiated the load.
         */
        if (DEBUG) {
            let sMessage = 'load("' + sDiskName + '","' + sDiskPath + '")';
            this.controller.log(sMessage);
            this.printMessage(sMessage);
        }

        if (this.fnNotify) {
            if (DEBUG) this.controller.log('too many load requests for "' + sDiskName + '" (' + sDiskPath + ')');
            return true;
        }

        this.sDiskName = sDiskName;
        this.sDiskPath = sDiskPath;
        this.sDiskFile = Str.getBaseName(sDiskPath);
        this.sFormat = "json";

        let disk = this;
        this.fnNotify = fnNotify;
        this.controllerNotify = controller || this.controller;

        if (file) {
            let reader = new FileReader();
            reader.onload = function() {
                disk.buildDisk(reader.result, true);
            };
            reader.onerror = function() {
                disk.buildDisk(null, false, reader.error.message);
            };
            reader.readAsArrayBuffer(file);
            return true;
        }

        /*
         * If there's an occurrence of API_ENDPOINT anywhere in the path, we assume we can use it as-is;
         * ie, that the user has already formed a URL of the type we use ourselves for unconverted disk images.
         */
        if (sDiskPath.indexOf(DumpAPI.ENDPOINT) < 0) {
            /*
             * If the selected disk image has a "json" extension, then we assume it's a pre-converted
             * JSON-encoded disk image, so we load it as-is; otherwise, we ask our server-side disk image
             * converter to return the corresponding JSON-encoded data.
             */
            let sDiskExt = Str.getExtension(sDiskPath);
            if (sDiskExt == DumpAPI.FORMAT.JSON || sDiskExt == DumpAPI.FORMAT.JSON_GZ) {
                sDiskURL = encodeURI(sDiskPath);
            } else {
                if (this.mode == DiskAPI.MODE.DEMANDRW || this.mode == DiskAPI.MODE.DEMANDRO) {
                    sDiskURL = this.connectRemoteDisk(sDiskPath);
                    this.fOnDemand = true;
                } else {
                    this.sFormat = "arraybuffer";
                }
                // else {
                //     let sDiskParm = DumpAPI.QUERY.PATH;
                //     let sSizeParm = '&' + DumpAPI.QUERY.MBHD + "=10";
                //     /*
                //      * 'mbhd' is a new parm added for hard drive support.  In the case of 'file' or 'dir' requests,
                //      * 'mbhd' informs DumpAPI.ENDPOINT that it should create a hard disk image, and one not larger than
                //      * the specified size (eg, 10mb).  In fact, until DumpAPI.ENDPOINT is changed to create custom hard
                //      * disk BPBs, you'll always get a standard PC XT 10mb disk image, so if the 'file' or 'dir' contains
                //      * more than 10mb of data, the request will fail.  Ultimately, I want to honor the controller's
                //      * driveConfig 'size' parm, or to match the capacity required by the driveConfig 'type' parameter.
                //      *
                //      * If a 'disk' is specified, we pass mbhd=0, because the actual size will depend on the image.
                //      * However, I don't currently have any "dsk" or "img" files containing hard disk images; those formats
                //      * were really intended for floppy disk images.  If I never create any hard disk image files, then
                //      * we can simply eliminate sSizeParm in the 'disk' case.
                //      *
                //      * Added more extensions to the list of paths-treated-as-disk-images, so that URLs to files located here:
                //      *
                //      *      ftp://ftp.oldskool.org/pub/TOPBENCH/dskimage/
                //      *
                //      * can be used as-is.  TODO: There's a TODO in netlib.getFile() regarding remote support that needs
                //      * to be resolved first; DiskDump relies on that function for its remote requests, and it currently
                //      * supports only HTTP.
                //      */
                //     if (!sDiskPath.indexOf("http:") || !sDiskPath.indexOf("ftp:") || ["dsk", "ima", "img", "360", "720", "12", "144"].indexOf(sDiskExt) >= 0) {
                //         sDiskParm = DumpAPI.QUERY.DISK;
                //         sSizeParm = '&' + DumpAPI.QUERY.MBHD + "=0";
                //     } else if (Str.endsWith(sDiskPath, '/')) {
                //         sDiskParm = DumpAPI.QUERY.DIR;
                //     }
                //     sDiskURL = Web.getHostOrigin() + DumpAPI.ENDPOINT + '?' + sDiskParm + '=' + encodeURIComponent(sDiskPath) + (this.fRemovable ? "" : sSizeParm) + "&" + DumpAPI.QUERY.FORMAT + "=" + DumpAPI.FORMAT.JSON;
                // }
            }
        }
        let sProgress = "Loading " + sDiskURL + "...";
        return !!Web.getResource(sDiskURL, this.sFormat, true, function loadDone(sURL, sResponse, nErrorCode) {
            disk.doneLoad(sURL, sResponse, nErrorCode);
        }, function(nState) {
            disk.println(sProgress, Component.PRINT.PROGRESS);
        });
    }

    /**
     * buildDisk(buffer, fModified, message)
     *
     * Builds a disk image from an ArrayBuffer (eg, from a FileReader object), rather than from JSON-encoded data.
     *
     * @this {Disk}
     * @param {?} buffer (technically, this is always an ArrayBuffer, because we tell FileReader to use readAsArrayBuffer, but the Closure Compiler doesn't realize that)
     * @param {boolean} [fModified] is true if we should mark the entire disk modified (to ensure that we save/restore it)
     * @param {string} [message] (usually only set if there was an error, and therefore buffer is null or undefined)
     */
    buildDisk(buffer, fModified, message)
    {
        let disk;
        let cbDiskData = buffer? buffer.byteLength : 0;
        let diskFormat = DiskAPI.GEOMETRIES[cbDiskData];

        if (diskFormat) {
            this.nCylinders = diskFormat[0];
            this.nHeads = diskFormat[1];
            this.nSectors = diskFormat[2];
            this.cbSector = (diskFormat[3] || 512);

            let cdw = this.cbSector >> 2, dwPattern = 0, dwChecksum = 0;
            let ib = 0;
            let dv = new DataView(buffer, 0, cbDiskData);

            this.aDiskData = new Array(this.nCylinders);
            for (let iCylinder = 0; iCylinder < this.aDiskData.length; iCylinder++) {
                let cylinder = this.aDiskData[iCylinder] = new Array(this.nHeads);
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
            this.notice(message || ("Unrecognized disk format (" + cbDiskData + " bytes)"));
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
        let fPrintOnly = !!(nErrorCode < 0 && this.cmp && !this.cmp.flags.powered);

        if (this.fOnDemand) {
            if (!nErrorCode) {
                if (DEBUG && this.messageEnabled()) {
                    this.printMessage('doneLoad("' + this.sDiskPath + '")');
                }
                this.fRemote = true;
                if (BACKTRACK || SYMBOLS) this.buildFileTable();
                disk = this;
            } else {
                this.notice('Unable to connect to disk "' + this.sDiskPath + '" (error ' + nErrorCode + ': ' + imageData + ')', fPrintOnly);
            }
        }
        else if (nErrorCode) {
            /*
             * This can happen for innocuous reasons, such as the user switching away too quickly, forcing
             * the request to be cancelled.  And unfortunately, the browser cancels XMLHttpRequest requests
             * BEFORE it notifies any page event handlers, so if the Computer's being powered down, we won't know
             * that yet.  For now, we rely on the lack of a specific error (nErrorCode < 0), and suppress the
             * notify() alert if there's no specific error AND the computer is not powered up yet.
             */
            this.notice("Unable to load disk \"" + this.sDiskName + "\" (error " + nErrorCode + ": " + sURL + ")", fPrintOnly);
        } else {
            if (DEBUG && this.messageEnabled()) {
                this.printMessage('doneLoad("' + this.sDiskPath + '")');
            }

            /*
             * If we received binary data instead of JSON, we can use the same buildDisk() function that our FileReader
             * code uses.
             */
            if (typeof imageData != "string") {
                this.buildDisk(imageData);
                return;
            }

            try {
                /*
                 * The following code was a hack to turn on write-protection for a disk image if there was
                 * an initial comment line containing the string "write-protected".  However, since comments
                 * are technically not allowed in JSON, I needed an alternative solution.  So, if the basename
                 * contains the suffix "-readonly", then I'll turn on write-protection for that disk as well.
                 *
                 * TODO: Provide some UI for turning write-protection on/off for disks at will, and provide
                 * an XML-based solution (ie, a per-disk XML configuration option) for controlling it as well.
                 */
                let sBaseName = Str.getBaseName(this.sDiskFile, true).toLowerCase();
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
                /*
                 * The most likely source of any exception will be here, where we're parsing the disk data.
                 */
                let aDiskData;
                if (imageData.substr(0, 1) == "<") {    // if the "data" begins with a "<"...
                    /*
                     * Early server configs reported an error (via the nErrorCode parameter) if a disk URL was invalid,
                     * but more recent server configs now display a somewhat friendlier HTML error page.  The downside,
                     * however, is that the original error has been buried, and we've received "data" that isn't actually
                     * disk data.
                     *
                     * So, if the data we've received appears to be "HTML-like", all we can really do is assume that the
                     * disk image is missing.  And so we pretend we received an error message to that effect.
                     */
                    aDiskData = ["Missing disk image: " + this.sDiskName];
                } else {
                    /*
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
                        aDiskData = image['diskData'];
                    } else if (imageData.indexOf("0x") < 0 && imageData.substr(0, 2) != "[\"") {
                        aDiskData = JSON.parse(imageData.replace(/([a-z]+):/gm, "\"$1\":").replace(/\/\/[^\n]*/gm, ""));
                    } else {
                        aDiskData = eval("(" + imageData + ")");
                    }
                }

                if (!aDiskData.length) {
                    Component.error("Empty disk image: " + this.sDiskName);
                }
                else if (aDiskData.length == 1) {
                    Component.error(aDiskData[0]);
                }
                /*
                 * aDiskData is an array of cylinders, each of which is an array of heads, each of which
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
                    if (DEBUG && this.messageEnabled(Messages.DISK + Messages.DATA)) {
                        let sCylinders = aDiskData.length + " track" + (aDiskData.length > 1 ? "s" : "");
                        let nHeads = aDiskData[0].length;
                        let sHeads = nHeads + " head" + (nHeads > 1 ? "s" : "");
                        let nSectorsPerTrack = aDiskData[0][0].length;
                        let sSectorsPerTrack = nSectorsPerTrack + " sector" + (nSectorsPerTrack > 1 ? "s" : "") + "/track";
                        this.printMessage(sCylinders + ", " + sHeads + ", " + sSectorsPerTrack);
                    }
                    /*
                     * Before the image is usable, we must "normalize" all the sectors.  In the past, this meant
                     * "inflating" them all.  However, that's no longer strictly necessary.  Mainly, it just means
                     * setting LENGTH and DATA properties, so that all the sectors are well-defined.
                     *
                     * This includes detecting sector data in older formats (eg, the old array of 'bytes' instead
                     * of the new DATA array of dwords) and converting them on-the-fly to the current format.
                     */
                    this.nCylinders = aDiskData.length;
                    this.nHeads = aDiskData[0].length;
                    this.nSectors = aDiskData[0][0].length;
                    let sector = aDiskData[0][0][0];
                    this.cbSector = (sector && (sector[Disk.SECTOR.LENGTH] || sector['length'])) || 512;

                    let dwChecksum = 0;
                    for (let iCylinder = 0; iCylinder < this.nCylinders; iCylinder++) {
                        for (let iHead = 0; iHead < this.nHeads; iHead++) {
                            for (let iSector = 0; iSector < this.nSectors; iSector++) {
                                sector = aDiskData[iCylinder][iHead][iSector];
                                if (!sector) continue;          // non-standard (eg, XDF) disk images may have "unused" (null) sectors
                                /*
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
                                            /*
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
                                            /*
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
                                        /*
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
                                        adw.length--;
                                    }
                                }
                                this.initSector(sector, iCylinder, iHead, idSector, this.cbSector, dwPattern);

                                /*
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
                    this.aDiskData = aDiskData;
                    this.dwChecksum = dwChecksum;
                    if (BACKTRACK || SYMBOLS) this.buildFileTable();
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
            this.fnNotify.call(this.controllerNotify, this.drive, disk, this.sDiskName, this.sDiskPath);
            this.fnNotify = null;
        }
    }

    /**
     * buildFileTable()
     *
     * This function builds (or rebuilds) a complete file table from the (first) FAT volume found on the current
     * disk, and then updates all the sector objects to point back to the corresponding file.  Used for BACKTRACK
     * and SYMBOLS support.  Because this is an expensive operation, in terms of both time and memory, it should
     * only be called when a disk is mounted or has been modified (eg, by applying deltas from a saved machine state).
     *
     * More recently, the FileInfo objects in the table have been enhanced to include debugging information if
     * the file is an EXE or DLL, which we determine merely by checking the file extension.
     *
     * Note that while most of the methods in this module use CHS-style parameters, because our primary clients
     * are old disk controllers that deal exclusively with cylinder/head/sector values, here we use 0-based
     * "logical" sector numbers for volume-relative block addresses (aka LBAs or Logical Block Addresses), and
     * 0-based "physical" sector numbers for disk-relative block addresses (aka PBAs or Physical Block Addresses).
     *
     * Also, our use of the term LBA differs from that of more modern disk controllers; in the pre-modern world
     * of PCx86, what we call PBA numbers are what those controllers would later call LBA numbers.
     *
     * @this {Disk}
     * @return {Array.<FileInfo>|undefined}
     */
    buildFileTable()
    {
        if (BACKTRACK || SYMBOLS) {

            let i, off, dir = {}, iSector;

            if (this.aFileTable && this.aFileTable.length) {
                /*
                 * In order for buildFileTable() to rebuild an existing table (eg, after deltas have been
                 * applied), we need to zap any and all existing file table references in the sector data.
                 */
                let aDiskData = this.aDiskData;
                for (let iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                    for (let iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                        for (iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                            let sector = aDiskData[iCylinder][iHead][iSector];
                            if (sector) {
                                delete sector[Disk.SECTOR.FILE_INFO];
                                delete sector[Disk.SECTOR.FILE_OFFSET];
                            }
                        }
                    }
                }
            }

            this.aFileTable = [];

            dir.pbaVolume = dir.lbaTotal = 0;

            let cbDisk = this.nCylinders * this.nHeads * this.nSectors * this.cbSector;

            /*
             * At this point, if this is a remote disk, you may see some warning messages in your browser's console,
             * like this message from Chrome:
             *
             *      "Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects
             *      to the end user's experience. For more help, check http://xhr.spec.whatwg.org/."
             *
             * This is because I was lazy and made the buildFileTable() worker function getSector() use the synchronous
             * form of seek().  For development purposes, that was fine, but...  TODO: Eventually change buildFileTable()
             * to use async I/O.
             */
            if (this.fRemote) this.log("ignore any synchronous XMLHttpRequest warnings here (for now)");

            let sectorBoot = this.getSector(0);
            if (!sectorBoot) {
                if (DEBUG && this.messageEnabled()) {
                    this.printMessage("buildFileTable(): unable to read boot sector");
                }
                return;
            }

            dir.cbSector = this.getSectorData(sectorBoot, DiskAPI.BPB.SECTOR_BYTES, 2);

            if (dir.cbSector != this.cbSector) {
                /*
                 * When the first sector doesn't appear to contain a valid BPB, the most likely explanations are:
                 *
                 *      1. The image is from a diskette formatted by DOS 1.xx, which didn't use BPBs
                 *      2. The image is a fixed (partitioned) disk and the first sector is actually an MBR
                 *      3. The image is from a diskette that used a non-standard sector size (ie, not 512)
                 *
                 * To start, if this is an 160Kb disk (circa DOS 1.00) or a 320Kb disk (circa DOS 1.10), then we'll
                 * assume it's a 12-bit FAT, set assorted BPB values accordingly, and see if our assumption holds up.
                 */
                dir.lbaFAT = 1;
                dir.nFATBits = 12;
                dir.lbaRoot = dir.lbaFAT + 2;   // both 160Kb and 320Kb disks contained 2 FATs, each containing 1 sector
                dir.nClusterSecs = 1;
                dir.cbSector = this.cbSector;

                if (cbDisk == 160 * 1024 && this.getClusterEntry(dir, 0, 0) == DiskAPI.FAT.MEDIA_160KB) {
                    dir.lbaTotal = 320;
                    dir.nEntries = 64;
                }
                else if (cbDisk == 320 * 1024 && this.getClusterEntry(dir, 0, 0) == DiskAPI.FAT.MEDIA_320KB) {
                    dir.lbaTotal = 640;
                    dir.nEntries = 112;
                    this.assert(this.nHeads == 2);
                    dir.nClusterSecs++;         // 320Kb disks use 2 sectors/cluster
                }
                else {
                    /*
                     * So, this is either a fixed (partitioned) disk, or a disk using a non-standard sector size; let's assume
                     * the former and check for an MBR.  For now, we're only going to process the first active partition we find.
                     */
                    off = DiskAPI.MBR.PARTITIONS.OFFSET;
                    for (i = 0; i < 4; i++) {
                        let bStatus = this.getSectorData(sectorBoot, off + DiskAPI.MBR.PARTITIONS.ENTRY.STATUS, 1);
                        if (bStatus == DiskAPI.MBR.PARTITIONS.STATUS.ACTIVE) {
                            dir.pbaVolume = this.getSectorData(sectorBoot, off + DiskAPI.MBR.PARTITIONS.ENTRY.LBA_FIRST, 4);
                            sectorBoot = this.getSector(dir.pbaVolume);
                            if (sectorBoot && this.getSectorData(sectorBoot, DiskAPI.BPB.SECTOR_BYTES, 2) != this.cbSector) {
                                sectorBoot = null;
                            }
                            break;
                        }
                        off += DiskAPI.MBR.PARTITIONS.ENTRY_LENGTH;
                    }
                    if (i == 4) sectorBoot = null;
                }
                if (!sectorBoot) {
                    if (DEBUG && this.messageEnabled()) {
                        this.printMessage("buildFileTable(): unrecognized " + cbDisk + "-byte disk image with " + this.cbSector + "-byte sectors");
                    }
                    return;
                }
            }

            if (!dir.lbaTotal) {
                dir.lbaTotal = this.getSectorData(sectorBoot, DiskAPI.BPB.TOTAL_SECS, 2) || this.getSectorData(sectorBoot, DiskAPI.BPB.LARGE_SECS, 4);
                dir.lbaFAT = this.getSectorData(sectorBoot, DiskAPI.BPB.RESERVED_SECS, 2);
                dir.lbaRoot = dir.lbaFAT + this.getSectorData(sectorBoot, DiskAPI.BPB.FAT_SECS, 2) * this.getSectorData(sectorBoot, DiskAPI.BPB.TOTAL_FATS, 1);
                dir.nEntries = this.getSectorData(sectorBoot, DiskAPI.BPB.ROOT_DIRENTS, 2);
                dir.nClusterSecs = this.getSectorData(sectorBoot, DiskAPI.BPB.CLUSTER_SECS, 1);
            }

            dir.lbaData = dir.lbaRoot + (((dir.nEntries * DiskAPI.DIRENT.LENGTH + (dir.cbSector - 1)) / dir.cbSector) | 0);
            dir.nClusters = (((dir.lbaTotal - dir.lbaData) / dir.nClusterSecs) | 0);

            /*
             * In all FATs, the first valid cluster number is 2, as 0 is used to indicate a free cluster and 1 is reserved.
             *
             * In a 12-bit FAT chain, the largest valid cluster number (iClusterMax) is 0xFF6; 0xFF7 is reserved for marking
             * bad clusters and should NEVER appear in a cluster chain, and 0xFF8-0xFFF are used to indicate the end of a chain.
             * Reports that cluster numbers 0xFF0-0xFF6 are "reserved" (eg, http://support.microsoft.com/KB/65541) should be
             * ignored; those numbers may have been considered "reserved" at some early point in FAT's history, but no longer.
             *
             * Since 12 bits yield 4096 possible values, and since 11 of the values (0, 1, and 0xFF7-0xFFF) cannot be used to
             * refer to an actual cluster, that leaves a theoretical maximum of 4085 clusters for a 12-bit FAT.  However, for
             * reasons that only a small (and shrinking -- RIP AAR) number of people know, the actual cut-off is 4084.
             *
             * So, a FAT volume with 4084 or fewer clusters uses a 12-bit FAT, a FAT volume with 4085 to 65524 clusters uses
             * a 16-bit FAT, and a FAT volume with more than 65524 clusters uses a 32-bit FAT.
             *
             * TODO: Eventually add support for FAT32.
             */
            dir.nFATBits = (dir.nClusters <= DiskAPI.FAT12.MAX_CLUSTERS? 12 : 16);
            dir.iClusterMax = (dir.nFATBits == 12? DiskAPI.FAT12.CLUSNUM_MAX : DiskAPI.FAT16.CLUSNUM_MAX);

            if (DEBUG && this.messageEnabled()) {
                this.printMessage("buildFileTable()\n\tlbaFAT: " + dir.lbaFAT + "\n\tlbaRoot: " + dir.lbaRoot + "\n\tlbaData: " + dir.lbaData + "\n\tlbaTotal: " + dir.lbaTotal + "\n\tnClusterSecs: " + dir.nClusterSecs + "\n\tnClusters: " + dir.nClusters);
            }

            /*
             * The following assertion is here only to catch anomalies; it is NOT a requirement that the number of data sectors
             * be a perfect multiple of nClusterSecs, but if it ever happens, it's worth verifying we didn't miscalculate something.
             */
            i = (dir.lbaTotal - dir.lbaData) % dir.nClusterSecs;
            if (i) {
                if (DEBUG && this.messageEnabled()) {
                    this.printMessage("buildFileTable(): " + cbDisk + "-byte disk image wasting " + i + " sectors");
                }
            }

            /*
             * Similarly, it is NOT a requirement that the size of all root directory entries be a perfect multiple of the sector
             * size (cbSector), but it may indicate a problem if it's not.  Note that when it comes time to read the root directory,
             * we treat it exactly like any other directory; that is, we ignore the nEntries value and scan the entire contents of
             * every sector allocated to the directory.  TODO: Determine whether DOS reads all root sector contents or only nEntries
             * (ie, create a test volume where nEntries * 32 is NOT a multiple of cbSector and watch what happens).
             */
            this.assert(!((dir.nEntries * DiskAPI.DIRENT.LENGTH) % dir.cbSector));

            let apba = [];
            for (let lba = dir.lbaRoot; lba < dir.lbaData; lba++) apba.push(dir.pbaVolume + lba);
            this.getDir(dir, this.sDiskFile, "", apba);

            /*
             * Create the sector-to-file mappings now.
             */
            for (i = 0; i < this.aFileTable.length; i++) {
                let file = this.aFileTable[i];
                off = 0;
                for (iSector = 0; iSector < file.apba.length; iSector++) {
                    this.updateSector(file, file.apba[iSector], off);
                    off += this.cbSector;
                }
                file.loadSymbols();
            }
        }
        return this.aFileTable;
    }

    /**
     * getModuleInfo(sModule, nSegment)
     *
     * If the given module and segment number is found, we return an Array of symbol offsets, indexed by symbol name.
     *
     * @this {Disk}
     * @param {string} sModule
     * @param {number} nSegment
     * @return {Object}
     */
    getModuleInfo(sModule, nSegment)
    {
        let aSymbols = {};
        if (SYMBOLS && this.aFileTable) {
            for (let iFile = 0; iFile < this.aFileTable.length; iFile++) {
                let file = this.aFileTable[iFile];
                if (file.sModule != sModule) continue;
                let segment = file.aSegments[nSegment];
                if (!segment) continue;
                for (let iOrdinal in segment.aEntries) {
                    let entry = segment.aEntries[iOrdinal];
                    /*
                     * entry[1] is the symbol name, which becomes the index, and entry[0] is the offset.
                     */
                    aSymbols[entry[1]] = entry[0];
                }
                break;
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
     * @return {Array}
     */
    getSymbolInfo(sSymbol)
    {
        let aInfo = [];
        if (SYMBOLS && this.aFileTable) {
            let sSymbolUpper = sSymbol.toUpperCase();
            for (let iFile = 0; iFile < this.aFileTable.length; iFile++) {
                let file = this.aFileTable[iFile];
                for (let iSegment in file.aSegments) {
                    let segment = file.aSegments[iSegment];
                    for (let iOrdinal in segment.aEntries) {
                        let entry = segment.aEntries[iOrdinal];
                        if (entry[1] && entry[1].indexOf(sSymbolUpper) >= 0) {
                            aInfo.push([entry[1], file.sName, iSegment, entry[0], segment.offEnd - segment.offStart]);
                        }
                    }
                }
            }
        }
        return aInfo;
    }

    /**
     * getDir(dir, sDisk, sDir, apba)
     *
     * @this {Disk}
     * @param {Object} dir
     * @param {string} sDisk
     * @param {string} sDir
     * @param {Array.<number>} apba
     */
    getDir(dir, sDisk, sDir, apba)
    {
        let file;
        let iStart = this.aFileTable.length;
        let nEntriesPerSector = (dir.cbSector / DiskAPI.DIRENT.LENGTH) | 0;

        dir.sDir = sDir + "\\";

        if (DEBUG && this.messageEnabled()) this.printMessage('getDir("' + sDisk + '","' + dir.sDir + '")');

        for (let iSector = 0; iSector < apba.length; iSector++) {
            let pba = apba[iSector];
            for (let iEntry = 0; iEntry < nEntriesPerSector; iEntry++) {
                if (!this.getDirEntry(dir, pba, iEntry)) {
                    iSector = apba.length;
                    break;
                }
                if (dir.sName == null || dir.sName == "." || dir.sName == "..") continue;
                let sPath = dir.sDir + dir.sName;
                if (DEBUG && this.messageEnabled(Messages.DISK + Messages.DATA)) {
                    this.printMessage('"' + sPath + '" size=' + dir.cbSize + ' cluster=' + dir.iCluster + ' sectors=' + JSON.stringify(dir.apba));
                    if (dir.apba.length) this.printMessage(this.dumpSector(this.getSector(dir.apba[0]), dir.apba[0], sPath));
                }
                file = new FileInfo(this, sPath, dir.sName, dir.bAttr, dir.cbSize, dir.apba);
                this.aFileTable.push(file);
            }
        }

        let iEnd = this.aFileTable.length;

        for (let i = iStart; i < iEnd; i++) {
            file = this.aFileTable[i];
            if (file.bAttr & DiskAPI.ATTR.SUBDIR && file.apba.length) this.getDir(dir, sDisk, sDir + "\\" + file.sName, file.apba);
        }
    }

    /**
     * getDirEntry(dir, pba, i)
     *
     * This sets the following properties on the 'dir' object:
     *
     *      sName (null if invalid/deleted entry)
     *      bAttr
     *      cbSize
     *      iCluster
     *      apba (ie, array of physical block addresses)
     *
     * On return, it's the caller's responsibility to copy out any data into a new object
     * if it wants to preserve any of the above information.
     *
     * This function also caches the following properties in the 'dir' object:
     *
     *      pbaDirCache (of the last directory sector read, if any)
     *      sectorDirCache (of the last directory sector read, if any)
     *
     * Also, the caller must also set the following 'dir' helper properties, so that clusters
     * can be located and converted to sectors (see convertClusterToSectors):
     *
     *      lbaFAT
     *      lbaData
     *      cbSector
     *      iClusterMax
     *      nClusterSecs
     *      nFATBits
     *
     * @this {Disk}
     * @param {Object} dir (to be filled in)
     * @param {number} pba (a sector of the directory)
     * @param {number} i (an entry in the directory sector, 0-based)
     * @returns {boolean} true if entry was returned (even if invalid/deleted), false if no more entries
     */
    getDirEntry(dir, pba, i)
    {
        if (!dir.sectorDirCache || !dir.pbaDirCache || dir.pbaDirCache != pba) {
            dir.pbaDirCache = pba;
            dir.sectorDirCache = this.getSector(dir.pbaDirCache);
            if (DEBUG && this.messageEnabled(Messages.DISK + Messages.DATA)) {
                this.printMessage(this.dumpSector(dir.sectorDirCache, dir.pbaDirCache, dir.sDir));
            }
        }
        if (dir.sectorDirCache) {
            let off = i * DiskAPI.DIRENT.LENGTH;
            let b = this.getSectorData(dir.sectorDirCache, off, 1);
            if (b == DiskAPI.DIRENT.UNUSED) {
                return false;
            }
            if (b == DiskAPI.DIRENT.INVALID) {
                dir.sName = null;
                return true;
            }
            dir.sName = Str.trim(this.getSectorString(dir.sectorDirCache, off + DiskAPI.DIRENT.NAME, 8));
            let s = Str.trim(this.getSectorString(dir.sectorDirCache, off + DiskAPI.DIRENT.EXT, 3));
            if (s.length) dir.sName += '.' + s;
            dir.bAttr = this.getSectorData(dir.sectorDirCache, off + DiskAPI.DIRENT.ATTR, 1);
            dir.cbSize = this.getSectorData(dir.sectorDirCache, off + DiskAPI.DIRENT.SIZE, 2);
            dir.iCluster = this.getSectorData(dir.sectorDirCache, off + DiskAPI.DIRENT.CLUSTER, 2);
            dir.apba = this.convertClusterToSectors(dir);
            return true;
        }
        return false;
    }

    /**
     * convertClusterToSectors(dir)
     *
     * @this {Disk}
     * @param {Object} dir
     * @return {Array.<number>} of PBAs (physical block addresses)
     */
    convertClusterToSectors(dir)
    {
        let apba = [];
        let iCluster = dir.iCluster;
        if (iCluster) {
            do {
                if (iCluster < DiskAPI.FAT12.CLUSNUM_MIN) {
                    this.assert(false);
                    break;
                }
                let lba = dir.lbaData + ((iCluster - DiskAPI.FAT12.CLUSNUM_MIN) * dir.nClusterSecs);
                for (let i = 0; i < dir.nClusterSecs; i++) {
                    apba.push(dir.pbaVolume + lba++);
                }
                iCluster = this.getClusterEntry(dir, iCluster, 0) | this.getClusterEntry(dir, iCluster, 1);
            } while (iCluster <= dir.iClusterMax);
            this.assert(iCluster != dir.iClusterMax + 1);       // make sure we never see CLUSNUM_BAD in a cluster chain
        }
        return apba;
    }

    /**
     * getClusterEntry(dir, iCluster, iByte)
     *
     * @this {Disk}
     * @param {Object} dir
     * @param {number} iCluster
     * @param {number} iByte (0 for low byte of cluster entry, 1 for high byte)
     * @return {number}
     */
    getClusterEntry(dir, iCluster, iByte)
    {
        let w = 0;
        let cbitsSector = dir.cbSector * 8;
        let offBits = dir.nFATBits * iCluster + (iByte? 8 : 0);
        let iSector = (offBits / cbitsSector) | 0;
        if (!dir.sectorFATCache || !dir.lbaFATCache || dir.lbaFATCache != dir.lbaFAT + iSector) {
            dir.lbaFATCache = dir.lbaFAT + iSector;
            dir.sectorFATCache = this.getSector(dir.pbaVolume + dir.lbaFATCache);
        }
        if (dir.sectorFATCache) {
            offBits = (offBits % cbitsSector) | 0;
            let off = (offBits >> 3);
            w = this.getSectorData(dir.sectorFATCache, off, 1);
            if (!iByte) {
                if (offBits & 0x7) w >>= 4;
            } else {
                if (dir.nFATBits == 16) {
                    w <<= 8;
                } else {
                    this.assert(dir.nFATBits == 12);
                    if (offBits & 0x7) {
                        w <<= 4;
                    } else {
                        w = (w & 0xf) << 8;
                    }
                }
            }
        }
        return w;
    }

    /**
     * getSector(pba)
     *
     * @this {Disk}
     * @param {number} pba (physical block address)
     * @return {Sector|null} sector
     */
    getSector(pba)
    {
        let nSectorsPerCylinder = this.nHeads * this.nSectors;
        let iCylinder = (pba / nSectorsPerCylinder) | 0;
        if (iCylinder < this.nCylinders) {
            let nSectorsRemaining = (pba % nSectorsPerCylinder);
            let iHead = (nSectorsRemaining / this.nSectors) | 0;
            /*
             * PBA numbers are 0-based, but the sector numbers in CHS addressing are 1-based, so add one to iSector
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
     * @return {number}
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
     * getSectorString(sector, off, len)
     *
     * WARNING: This function is restricted to reading a string contained ENTIRELY within the specified sector.
     *
     * @this {Disk}
     * @param {Sector} sector
     * @param {number} off (byte offset)
     * @param {number} len (use -1 to read a null-terminated string)
     * @return {string}
     */
    getSectorString(sector, off, len)
    {
        let s = "";
        while (len--) {
            let b = this.read(sector, off++);
            if (b <= 0) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * updateSector(file, pba, off)
     *
     * Like getSector(), this must convert a PBA into CHS values; consider factoring that conversion code out.
     *
     * @this {Disk}
     * @param {FileInfo} file
     * @param {number} pba (physical block address from the file's apba)
     * @param {number} off (file offset corresponding to the given pba of the given file)
     * @return {boolean} true if successfully updated, false if not
     */
    updateSector(file, pba, off)
    {
        let nSectorsPerCylinder = this.nHeads * this.nSectors;
        let iCylinder = (pba / nSectorsPerCylinder) | 0;
        let nSectorsRemaining = (pba % nSectorsPerCylinder);
        let iHead = (nSectorsRemaining / this.nSectors) | 0;
        let iSector = (nSectorsRemaining % this.nSectors);
        let cylinder, head, sector;
        if ((cylinder = this.aDiskData[iCylinder]) && (head = cylinder[iHead]) && (sector = head[iSector])) {
            if (sector[Disk.SECTOR.ID] != iSector + 1) {
                if (DEBUG) this.printf("warning: %d:%d:%d has non-standard sector ID %d; see file %s\n", iCylinder, iHead, iSector + 1, sector[Disk.SECTOR.ID], file.sPath);
            }
            if (sector[Disk.SECTOR.ID]) {
                if (DEBUG && this.messageEnabled()) {
                    this.printMessage('"' + sector[Disk.SECTOR.FILE_INFO] + '" cross-linked at offset ' + sector[Disk.SECTOR.FILE_OFFSET] + ' with "' + file.sPath + '" at offset ' + off);
                }
                return false;
            }
            sector[Disk.SECTOR.FILE_INFO] = file;
            sector[Disk.SECTOR.FILE_OFFSET] = off;
            return true;
        }
        if (DEBUG && this.messageEnabled()) this.printMessage("unable to map PBA " + pba + " to CHS");
        return false;
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
     * @return {Sector}
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
            this.assert(sector[Disk.SECTOR.ID] == idSector);
            this.assert(sector[Disk.SECTOR.LENGTH] == cbSector);
        }
        sector.dwPattern = dwPattern;
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
     * @return {string} is the URL connection string required to connect to sDiskPath
     */
    connectRemoteDisk(sDiskPath)
    {
        let sParms = DiskAPI.QUERY.ACTION + '=' + DiskAPI.ACTION.OPEN;
        sParms += '&' + DiskAPI.QUERY.VOLUME + '=' + sDiskPath;
        sParms += '&' + DiskAPI.QUERY.MODE + '=' + this.mode;
        sParms += '&' + DiskAPI.QUERY.CHS + '=' + this.nCylinders + ':' + this.nHeads + ':' + this.nSectors + ':' + this.cbSector;
        sParms += '&' + DiskAPI.QUERY.MACHINE + '=' + this.controller.getMachineID();
        sParms += '&' + DiskAPI.QUERY.USER + '=' + this.controller.getUserID();
        return Web.getHostOrigin() + DiskAPI.ENDPOINT + '?' + sParms;
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
        if (DEBUG && this.messageEnabled()) {
            this.printMessage("readRemoteSectors(CHS=" + iCylinder + ':' + iHead + ':' + iSector + ",N=" + nSectors + ")");
        }

        if (this.fRemote) {
            let sParms = DiskAPI.QUERY.ACTION + '=' + DiskAPI.ACTION.READ;
            sParms += '&' + DiskAPI.QUERY.VOLUME + '=' + this.sDiskPath;
            sParms += '&' + DiskAPI.QUERY.CHS + '=' + this.nCylinders + ':' + this.nHeads + ':' + this.nSectors + ':' + this.cbSector;
            sParms += '&' + DiskAPI.QUERY.ADDR + '=' + iCylinder + ':' + iHead + ':' + iSector + ':' + nSectors;
            sParms += '&' + DiskAPI.QUERY.MACHINE + '=' + this.controller.getMachineID();
            sParms += '&' + DiskAPI.QUERY.USER + '=' + this.controller.getUserID();
            let disk = this;
            let sDiskURL = Web.getHostOrigin() + DiskAPI.ENDPOINT + '?' + sParms;
            Web.getResource(sDiskURL, null, fAsync, function(sURL, sResponse, nErrorCode) {
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
                /*
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
                    if (DEBUG && this.messageEnabled()) {
                        this.printMessage("doneReadRemoteSectors(): seek(CHS=" + iCylinder + ':' + iHead + ':' + iSector + ") failed");
                    }
                    break;
                }
                this.fill(sector, abData, offData);
                offData += sector[Disk.SECTOR.LENGTH];
                /*
                 * We happen to know that when seek() calls readRemoteSectors(), it limits the number of sectors
                 * to the current track, so the only variable we need to advance is iSector.
                 */
                iSector++;
            }
            fAsync = aRequest[4];
        } else {
            if (DEBUG && this.messageEnabled()) {
                this.printMessage("doneReadRemoteSectors(CHS=" + iCylinder + ':' + iHead + ':' + iSector + ",N=" + nSectors + ") returned error " + nErrorCode);
            }
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
     * @return {boolean|Array}
     */
    writeRemoteSectors(iCylinder, iHead, iSector, nSectors, abSectors, fAsync)
    {
        if (DEBUG && this.messageEnabled()) {
            this.printMessage("writeRemoteSectors(CHS=" + iCylinder + ':' + iHead + ':' + iSector + ",N=" + nSectors + ")");
        }

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
            let sDiskURL = Web.getHostOrigin() + DiskAPI.ENDPOINT;
            Web.getResource(sDiskURL, dataPost, fAsync, function(sURL, sResponse, nErrorCode) {
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

        if (iCylinder >= 0 && iCylinder < this.aDiskData.length && iHead >= 0 && iHead < this.aDiskData[iCylinder].length) {
            for (let i = iSector - 1; nSectors-- > 0 && i >= 0 && i < this.aDiskData[iCylinder][iHead].length; i++) {
                let sector = this.aDiskData[iCylinder][iHead][i];

                if (!nErrorCode) {
                    if (!sector.fDirty) {
                        sector.iModify = sector.cModify = 0;
                    }
                } else {
                    if (DEBUG && this.messageEnabled()) {
                        this.printMessage("doneWriteRemoteSectors(CHS=" + iCylinder + ':' + iHead + ':' + sector[Disk.SECTOR.ID] + ") returned error " + nErrorCode);
                    }
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
            let sDiskURL = Web.getHostOrigin() + DiskAPI.ENDPOINT + '?' + sParms;
            Web.getResource(sDiskURL, null, true);
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
     * @return {boolean} true if write timer set, false if not
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
        this.aDirtyTimestamps.push(Usr.getTime());

        if (DEBUG && this.messageEnabled()) {
            this.printMessage("queueDirtySector(CHS=" + sector.iCylinder + ':' + sector.iHead + ':' + sector[Disk.SECTOR.ID] + "): " + this.aDirtySectors.length + " dirty");
        }

        return fAsync && this.updateWriteTimer();
    }

    /**
     * updateWriteTimer()
     *
     * If a timer is already active, make sure it's still valid (ie, the time the timer is scheduled to fire is
     * >= the timestamp of the next dirty sector + REMOTE_WRITE_DELAY); if not, cancel the timer and start a new one.
     *
     * @this {Disk}
     * @return {boolean} true if write timer set, false if not
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
                let msNow = Usr.getTime();
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
     * @return {boolean|Array} false if no dirty sectors, otherwise true (or a response array if not fAsync)
     */
    findDirtySectors(fAsync)
    {
        if (fAsync) {
            this.timerWrite = null;
        }
        let sector = this.aDirtySectors[0];
        if (sector) {
            let iCylinder = sector.iCylinder;
            let iHead = sector.iHead;
            let iSector = sector[Disk.SECTOR.ID];
            let nSectors = 0;
            let abSectors = [];
            for (let i = iSector - 1; i < this.aDiskData[iCylinder][iHead].length; i++) {
                let sectorNext = this.aDiskData[iCylinder][iHead][i];
                if (!sectorNext.fDirty) break;
                let j = this.aDirtySectors.indexOf(sectorNext);
                this.assert(j >= 0, "findDirtySectors(CHS=" + iCylinder + ':' + iHead + ':' + sectorNext[Disk.SECTOR.ID] + ") missing from aDirtySectors");
                if (DEBUG && this.messageEnabled()) {
                    this.printMessage("findDirtySectors(CHS=" + iCylinder + ':' + iHead + ':' + sectorNext[Disk.SECTOR.ID] + ")");
                }
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
     * @return {Array} containing: [nCylinders, nHeads, nSectorsPerTrack, nBytesPerSector]
     */
    info()
    {
        if (!this.aDiskData.length) {
            return [0, 0, 0, 0];
        }
        return [this.aDiskData.length, this.aDiskData[0].length, this.aDiskData[0][0].length, this.aDiskData[0][0][0][Disk.SECTOR.LENGTH]];
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
     * @return {Sector|null} is the requested sector, or null if not found (or not available yet)
     */
    seek(iCylinder, iHead, iSector, sectorPrev, fWrite, done)
    {
        let sector = null;
        let drive = this.drive;
        let cylinder = this.aDiskData[iCylinder];
        if (cylinder) {
            let i;
            let track = cylinder[iHead];
            /*
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
                /*
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
                        /*
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
                                if (sectorNext == sector) break;
                                if (sectorNext[Disk.SECTOR.ID] == iSector) {
                                    sector = sectorNext;
                                    i = j;
                                    break;
                                }
                            }
                        }
                        /*
                         * If the sector's pattern is null, then this sector's true contents have not yet
                         * been fetched from the server.
                         */
                        if (sector.dwPattern === null) {
                            if (fWrite) {
                                /*
                                 * Optimization: if the caller has explicitly told us that they're about to WRITE to the
                                 * sector, then we shouldn't need to read it from the server; assume a zero pattern and return.
                                 */
                                sector.dwPattern = 0;
                            } else {
                                let nSectors = 1;
                                /*
                                 * We know we need to read at least 1 sector, but let's count the number of trailing sectors
                                 * on the same track that may also be required.
                                 */
                                while (++i < track.length) {
                                    if (track[i].dwPattern === null) nSectors++;
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
                /*
                 * The following code allows an 8-sector track to be reformatted (ie, "expanded") as a 9-sector track.
                 */
                if (!sector && drive.bFormatting && drive.bSector == 9) {
                    sector = track[i] = this.initSector(null, iCylinder, iHead, drive.bSector, drive.nBytes, 0);
                    /*
                     * TODO: This is more dodginess, because we can't be certain that every track on the disk
                     * will receive the same "expanded" treatment, but functions like getSector() rely on instance
                     * properties (eg, this.nSectors), on the assumption that the disk's geometry is homogeneous.
                     */
                    if (this.nSectors < drive.bSector) this.nSectors = drive.bSector;
                }
            }
        }
        if (done) done(sector, false);
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
        /*
         * TODO: Consider taking this opportunity to shrink DATA down by the number of dwords at the end of the buffer that
         * contain the same pattern, and setting dwPattern accordingly.
         */
    }

    /**
     * toBytes(sector)
     *
     * @this {Disk}
     * @param {Sector} sector
     * @return {Array.<number>} is an array of bytes
     */
    toBytes(sector)
    {
        let cb = sector[Disk.SECTOR.LENGTH];
        let ab = new Array(cb);
        let ib = 0;
        let cdw = cb >> 2;
        let adw = sector[Disk.SECTOR.DATA];
        let dwPattern = sector.dwPattern;
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
     * @return {number} the specified (unsigned) byte, or -1 if no more data in the sector
     */
    read(sector, iByte, fCompare)
    {
        let b = -1;
        if (sector) {
            if (DEBUG && !iByte && !fCompare && this.messageEnabled()) {
                this.printMessage('read("' + this.sDiskFile + '",CHS=' + sector.iCylinder + ':' + sector.iHead + ':' + sector[Disk.SECTOR.ID] + ')');
            }
            if (iByte < sector[Disk.SECTOR.LENGTH]) {
                let adw = sector[Disk.SECTOR.DATA];
                let idw = iByte >> 2;
                let dw = (idw < adw.length ? adw[idw] : sector.dwPattern);
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
     * @return {boolean|null} true if write successful, false if write-protected, null if out of bounds
     */
    write(sector, iByte, b)
    {
        if (this.fWriteProtected)
            return false;

        if (DEBUG && !iByte && this.messageEnabled()) {
            this.printMessage('write("' + this.sDiskFile + '",CHS=' + sector.iCylinder + ':' + sector.iHead + ':' + sector[Disk.SECTOR.ID] + ')');
        }

        if (iByte < sector[Disk.SECTOR.LENGTH]) {
            if (b != this.read(sector, iByte, true)) {
                let adw = sector[Disk.SECTOR.DATA];
                let dwPattern = sector.dwPattern;
                let idw = iByte >> 2;
                let nShift = (iByte & 0x3) << 3;

                /*
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
     * @return {string}
     */
    encodeAsBase64()
    {
        /*
         * Gross, but simple; more importantly, it works -- at least for disks of typical floppy magnitude.
         */
        let s = "", pba = 0, sector;
        while ((sector = this.getSector(pba++))) {
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
     * @return {Uint8Array}
     */
    encodeAsBinary() {
        let s = [], pba = 0, sector;
        while ((sector = this.getSector(pba++))) {
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
     * @return {Array} of modified sectors
     */
    save()
    {
        let i = 0;
        let deltas = [];
        deltas[i++] = [this.sDiskPath, this.dwChecksum, this.nCylinders, this.nHeads, this.nSectors, this.cbSector];
        if (!this.fRemote && !this.fWriteProtected) {
            let aDiskData = this.aDiskData;
            for (let iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                for (let iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                    for (let iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                        let sector = aDiskData[iCylinder][iHead][iSector];
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
        if (DEBUG && this.messageEnabled()) {
            this.printMessage('save("' + this.sDiskName + '"): saved ' + (deltas.length - 1) + ' change(s)');
        }
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
     * @return {number} 0 if no changes applied, -1 if an error occurred, otherwise the number of sectors modified
     */
    restore(deltas)
    {
        /*
         * If deltas is undefined, that's not necessarily an error;  the controller may simply be (re)initializing
         * itself (although neither controller should be calling restore() under those conditions anymore).
         */
        let nChanges = 0;
        let sReason = "unsupported restore format";
        /*
         * I originally added a check for aDiskData here on the assumption that if there was an error loading
         * a disk image, we will have already notified the user, so any additional errors about differing checksums,
         * failure to restore the disk state, etc, would just be annoying.  HOWEVER, HDC will create an empty disk
         * image if its initialization code discovers that no disk was loaded earlier (see verifyDrive).  So while
         * checking aDiskData is still a good idea, be aware that it won't necessarily avoid redundant error messages
         * (at least in the case of HDC).
         */
        if (deltas && deltas.length > 0) {

            let i = 0;
            let aDiskInfo = deltas[i++];

            if (aDiskInfo && aDiskInfo.length >= 2) {
                /*
                 * Before getting to the checksum, we have to deal with a new situation: restoring an uninitialized
                 * disk image from a complete set of deltas.  And that is only possible if the disk was saved with the
                 * original disk geometry.
                 */
                if (!this.aDiskData.length && aDiskInfo.length >= 6) {
                    this.create(DiskAPI.MODE.LOCAL, aDiskInfo[2], aDiskInfo[3], aDiskInfo[4], aDiskInfo[5]);
                    /*
                     * TODO: Consider setting a flag here that we can check at the end of the restore() function
                     * that indicates we should recalculate dwChecksum, because we currently have an inconsistency
                     * between local disks that are mounted via buildDisk() and the same disks that are "remounted"
                     * later by this code; the former has the correct checksum, while the latter has a null checksum.
                     *
                     * As you can see below, we currently deal with this by simply ignoring null checksums....
                     */
                }
                /*
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
                    /*
                     * Checksum is more important than disk path, and for now, I want the flexibility to move disk images.
                     *
                     *  else if (aDiskInfo[0] != this.sDiskPath) {
                     *      sReason = "original path '" + aDiskInfo[0] + "' differs from current path '" + this.sDiskPath + "'";
                     *      nChanges = -1;
                     *  }
                     */
                }
            }

            if (!this.aDiskData.length) nChanges = -1;

            while (i < deltas.length && nChanges >= 0) {
                let m = 0;
                let mod = deltas[i++];
                let iCylinder = mod[m++];
                let iHead = mod[m++];
                let iSector = mod[m++];
                /*
                 * Note the buried test for write-protection.  Yes, an invariant condition should be tested
                 * outside the loop, not inside, but (a) it's a trivial test, (b) the test should never fail
                 * because save() should never generate any mods for a write-protected disk, and (c) it
                 * centralizes all the failure conditions we're currently checking (which, admittedly, ain't much).
                 */
                if (iCylinder >= this.aDiskData.length || iHead >= this.aDiskData[iCylinder].length || iSector >= this.aDiskData[iCylinder][iHead].length) {
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
                let sector = this.aDiskData[iCylinder][iHead][iSector];
                if (!sector) continue;
                /*
                 * Since write() now deals with empty/partial sectors, we no longer need to completely "inflate"
                 * the sector prior to applying modifications.  So let's just make sure that the sector is "inflated"
                 * up to iModify.
                 */
                let idw = sector[Disk.SECTOR.DATA].length;
                while (idw < iModify) {
                    sector[Disk.SECTOR.DATA][idw++] = sector.dwPattern;
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
            /*
             * We're suppressing checksum messages for the general public for now....
             */
            if (DEBUG || nChanges != -2) {
                this.notice("Unable to restore disk '" + this.sDiskName + ": " + sReason);
            }
        } else {
            if (DEBUG && this.messageEnabled()) {
                this.printMessage('restore("' + this.sDiskName + '"): restored ' + nChanges + ' change(s)');
            }
            /*
             * Last but not least, rebuild the disk's file table if BACKTRACK or SYMBOLS support is enabled.
             */
            if (BACKTRACK || SYMBOLS) this.buildFileTable();
        }
        return nChanges;
    }

    /**
     * convertToJSON(fFormatted)
     *
     * We perform some RegExp massaging on the JSON data to eliminate unnecessary properties
     * (eg, LENGTH values of 512, dwPattern values of 0, and empty DATA arrays, since those are
     * defaults).
     *
     * In addition, we first check every sector to see if it can be "deflated".  Sectors that were
     * initially "deflated" should remain that way unless/until they were modified, so technically,
     * we could call deflateSector() just for modified sectors, but this isn't a common operation,
     * so it doesn't hurt to check every sector.
     *
     * @this {Disk}
     * @param {boolean} [fFormatted]
     * @return {string} containing the entire disk image as JSON-encoded data
     */
    convertToJSON(fFormatted)
    {
        let s, pba = 0, sector, sectorLast;

        while ((sector = this.getSector(pba++))) {
            this.deflateSector(sector);
        }

        s = JSON.stringify(this.aDiskData, function(key, value) {
            /*
             * If BACKTRACK support is enabled, we have to filter out any 'file' properties that may
             * be attached to the sector objects, lest we risk blowing the stack due to circular references.
             */
            if (key == 'file') {
                return undefined;
            }
            return value;
        });

        /*
         * Eliminate old default properties (eg, 'length' values of 512, 'pattern' values of 0, etc).
         */
        s = s.replace(/,"length":512/g, "").replace(/,"pattern":0/g, "").replace(/,"data":\[]/g, "");

        /*
         * I don't really want to strip quotes from disk image property names, since I would have to put them
         * back again during mount() -- or whenever JSON.parse() is used instead of eval().  But I still remove
         * them temporarily, so that any remaining property names (eg, "iModify", "cModify", "fDirty") can
         * easily be stripped out, by virtue of their being the only quoted properties left.  We then "requote"
         * all the property names that remain.
         */
        s = s.replace(/"(c|h|s|l|d|sector|length|data|pattern)":/g, "$1:");

        /*
         * The next line will remove any other numeric or boolean properties that were added at runtime, although
         * they may have completely different ("minified") names if the code has been compiled.
         */
        s = s.replace(/,"[^"]*":([0-9]+|true|false)/g, "");
        s = s.replace(/(c|h|s|l|d|sector|length|data|pattern):/g, "\"$1\":");

        /*
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
                sector.dwPattern = dwPattern;
            }
        }
    }

    /**
     * dumpSector(sector, pba, sDesc)
     *
     * @this {Disk}
     * @param {Sector|null} sector (returned from a previous seek)
     * @param {number} [pba]
     * @param {string} [sDesc]
     * @return {string}
     */
    dumpSector(sector, pba, sDesc)
    {
        let sDump = "";
        if (DEBUG && sector) {
            if (pba != null) sDump += "sector " + pba + (sDesc? (" for " + sDesc) : "") + ':';
            let sBytes = "", sChars = "";
            let cbSector = sector[Disk.SECTOR.LENGTH];
            let cdwData = sector[Disk.SECTOR.DATA].length;
            let dw = 0;
            for (let i = 0; i < cbSector; i++) {
                if ((i % 16) === 0) {
                    if (sDump) sDump += sBytes + ' ' + sChars + '\n';
                    sDump += Str.toHex(i, 4) + ": ";
                    sBytes = sChars = "";
                }
                if ((i % 4) === 0) {
                    let idw = i >> 2;
                    dw = (idw < cdwData? sector[Disk.SECTOR.DATA][idw] : sector.dwPattern);
                }
                let b = dw & 0xff;
                dw >>>= 8;
                sBytes += Str.toHex(b, 2) + (i % 16 == 7? "-" : " ");
                sChars += (b >= 32 && b < 128? String.fromCharCode(b) : ".");
            }
            if (sBytes) sDump += sBytes + ' ' + sChars;
        }
        return sDump;
    }
}

/*
 * Sector object "public" properties.
 */
Disk.SECTOR = {
    CYLINDER:   'c',                // cylinder number (0-based) [formerly iCylinder]
    HEAD:       'h',                // head number (0-based) [formerly iHead]
    ID:         's',                // sector ID (generally 1-based, except for unusual/copy-protected disks) [formerly 'sector']
    LENGTH:     'l',                // sector length, in bytes (generally 512, except for unusual/copy-protected disks) [formerly 'length']
    DATA:       'd',                // array of signed 32-bit values (if less than length/4, the last value is repeated) [formerly 'data']
    FILE_INFO:  'f',                // "extended" JSON disk images only [formerly file]
    FILE_OFFSET:'o',                // "extended" JSON disk images only [formerly offFile]
                                    // [no longer used: 'pattern']
    /*
     * The following properties occur very infrequently (and usually only in copy-protected or degraded disk images),
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
Disk.REMOTE_WRITE_DELAY = 2000;         // 2-second delay

/*
 * A global disk count, used to form unique Disk component IDs (totally optional; for debugging purposes only)
 */
Disk.nDisks = 0;

/**
 * class FileInfo
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
class FileInfo {
    /**
     * FileInfo(disk, sPath, sName, bAttr, cbSize, apba)
     *
     * To the basic file information below, loadSymbols() may also add:
     *
     *      sModule
     *      sDescription
     *      aSegments[]
     *
     * which is indexed by 1-based segment numbers, where each aSegments[] element is an object
     * containing:
     *
     *      offStart (file-relative offset of start of segment data)
     *      offEnd (file-relative offset of end of segment data)
     *      aEntries[]
     *
     * where aEntries is an array indexed by 1-based ordinals, where each aEntries[] element contains:
     *
     *      [offset, symbol]
     *
     * where offset is relative to the segment's offStart value, and symbol is a string describing the
     * entry.
     *
     * NOTE: Although aEntries arrays are similar to the Debugger's aOffsets arrays, they are not
     * interchangeable data structures, because ours is ordered by ordinal, whereas aOffsets is
     * ordered by offset.  We provide an interface, getModuleInfo(), to the Debugger that converts
     * our data into an intermediate array, aSymbols, which the Debugger then uses to build aOffsets.
     * It would be nice to avoid building that intermediate representation, but it's a side-effect of
     * the Debugger's earlier support for JSON-encoded MAP files.
     *
     * There will always be an offset at index 0 of an aEntries[] element, but some error or incomplete
     * symbolic information could result in a missing symbol at index 1, because symbol name processing is
     * separate from entry table processing.
     *
     * @param {Disk} disk
     * @param {string} sPath
     * @param {string} sName
     * @param {number} bAttr
     * @param {number} cbSize
     * @param {Array.<number>} apba
     */
    constructor(disk, sPath, sName, bAttr, cbSize, apba)
    {
        this.disk = disk;
        this.sPath = sPath;
        this.sName = sName;
        this.bAttr = bAttr;
        this.cbSize = cbSize;
        this.apba = apba;
    }

    /**
     * loadValue(offset, length)
     *
     * @this {FileInfo}
     * @param {number} offset
     * @param {number} [length] (1, 2 or 4 bytes; default is 2)
     * @return {number|undefined}
     */
    loadValue(offset, length)
    {
        let l;
        length = length || 2;
        let iSector = offset >> 9;
        let offSector = offset & 0x1ff;
        let sector = this.disk.getSector(this.apba[iSector]);
        if (sector) {
            /*
             * If the read is wholly contained within a sector, read it with one call.
             */
            if (offSector + length <= sector[Disk.SECTOR.LENGTH]) {
                return this.disk.getSectorData(sector, offSector, length);
            }
            /*
             * The spans a sector boundary, so we just call ourselves one byte at a time.
             */
            l = 0;
            let shift = 0;
            while (length--) {
                l |= this.loadValue(offset++, 1) << shift;
                shift += 8;
            }
        }
        return l;
    }

    /**
     * loadString(offset, length)
     *
     * @this {FileInfo}
     * @param {number} offset
     * @param {number} [length] (if omitted, then string must be zero-terminated)
     * @return {string}
     */
    loadString(offset, length)
    {
        let s = "";
        if (!length) length = -1;
        while (length--) {
            let b = this.loadValue(offset++, 1);
            if (!b) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * loadField(aField, offset)
     *
     * @this {FileInfo}
     * @param {Array.<number>} aField
     * @param {number} [offset] (0 if not specified)
     * @return {number|undefined}
     */
    loadField(aField, offset)
    {
        return this.loadValue(aField[0] + (offset || 0), aField[1]);
    }

    /**
     * loadSegmentTable(offEntries, nEntries, nSegOffShift)
     *
     * @this {FileInfo}
     * @param {number} offEntries
     * @param {number} nEntries
     * @param {number} nSegOffShift
     */
    loadSegmentTable(offEntries, nEntries, nSegOffShift)
    {
        /*
         * Read the Segment Table entries now.
         */
        let iSegment = 1;
        this.aSegments = [];
        this.aOrdinals = [];                // this is an optional array for quick ordinal-to-segment lookup

        if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
            this.disk.printMessage("loadSegmentTable(" + this.sPath + "," + Str.toHexLong(offEntries) + "," + Str.toHexWord(nEntries) + ")");
        }

        while (nEntries--) {
            let offSegment = this.loadValue(offEntries) << nSegOffShift;
            if (offSegment) {
                let lenSegment = this.loadValue(offEntries + 2) || 0x10000;       // 0 means 64K

                if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                    this.disk.printMessage("segment " + iSegment + ": offStart=" + Str.toHexLong(offSegment) + " offEnd=" + Str.toHexLong(offSegment + lenSegment));
                }

                this.aSegments[iSegment++] = {offStart: offSegment, offEnd: offSegment + lenSegment - 1, aEntries: []};
            }
            offEntries += 8;
        }
        /*
         * Although not documented (at least not in any of the early Windows "New Executable" documents I've seen),
         * the Entry Table may also contain entries whose bSegment field is 0xFE, which doesn't correspond to a valid
         * segment number.  That pseudo-segment number appears to be reserved for constants.  Here are some examples
         * from a 3.1-vintage KRNL386.EXE:
         *
         *      cannot find segment 254 (offset 0xF000) for symbol __ROMBIOS with ordinal 173
         *      cannot find segment 254 (offset 0x0000) for symbol __0000H with ordinal 183
         *      cannot find segment 254 (offset 0x0040) for symbol __0040H with ordinal 193
         *      cannot find segment 254 (offset 0x0008) for symbol __AHINCR with ordinal 114
         *      cannot find segment 254 (offset 0x0003) for symbol __AHSHIFT with ordinal 113
         *      cannot find segment 254 (offset 0xA000) for symbol __A000H with ordinal 174
         *      cannot find segment 254 (offset 0xB000) for symbol __B000H with ordinal 181
         *      cannot find segment 254 (offset 0xC000) for symbol __C000H with ordinal 195
         *      cannot find segment 254 (offset 0xB800) for symbol __B800H with ordinal 182
         *      cannot find segment 254 (offset 0xD000) for symbol __D000H with ordinal 179
         *      cannot find segment 254 (offset 0xE000) for symbol __E000H with ordinal 190
         *      cannot find segment 254 (offset 0xF000) for symbol __F000H with ordinal 194
         *      cannot find segment 254 (offset 0x0001) for symbol __WINFLAGS with ordinal 178
         *
         * The simplest way to handle those Entry Table entries is creating an additional (fake) aSegments table entry.
         */
        this.aSegments[0xFE] = {offStart: 0, offEnd: 0, aEntries: []};
    }

    /**
     * loadEntryTable(offEntries, offEntriesEnd)
     *
     * @this {FileInfo}
     * @param {number} offEntries
     * @param {number} offEntriesEnd
     */
    loadEntryTable(offEntries, offEntriesEnd)
    {
        let iOrdinal = 1;

        if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
            this.disk.printMessage("loadEntryTable(" + Str.toHexLong(offEntries) + "," + Str.toHexLong(offEntriesEnd) + ")");
        }

        while (offEntries < offEntriesEnd) {

            let w = this.loadValue(offEntries);
            let bEntries = w & 0xff;
            if (!bEntries) break;
            let bSegment = w >> 8, iSegment;

            if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                this.disk.printMessage("bundle for segment " + bSegment + ": " + bEntries + " entries @" + Str.toHex(offEntries));
            }

            offEntries += 2;

            /*
             * bSegment 0x00 means all the entries spanned by bEntries are unused, so move on.
             */
            if (!bSegment) {
                iOrdinal += bEntries;
                continue;
            }
            while (bEntries--) {
                /*
                 * bSegment 0x01-0xFE means the next 3 bytes describe a fixed segment entry; the next
                 * byte contains flags indicating exported (0x1) and/or global/shared (0x2) data, and the
                 * next word is the offset within the segment.
                 */
                let offEntry;
                let offDebug = offEntries;
                let bFlags = this.loadValue(offEntries, 1);

                if (bSegment <= 0xFE) {
                    iSegment = bSegment;
                    offEntry = this.loadValue(offEntries + 1);
                    offEntries += 3;
                } else {
                    /*
                     * bSegment 0xFF means a movable segment entry, which is 6 bytes long: flags byte (which
                     * we've already read), an INT 0x3F (0xCD,0x3F), a 1-byte segment number, and a 2-byte offset.
                     */
                    iSegment = this.loadValue(offEntries + 3, 1);
                    offEntry = this.loadValue(offEntries + 4);
                    offEntries += 6;
                }
                if (!this.aSegments[iSegment]) {
                    if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                        this.disk.printMessage("invalid segment: " + iSegment);
                    }
                } else {
                    this.aSegments[iSegment].aEntries[iOrdinal] = [offEntry];
                    if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                        this.disk.printMessage("ordinal " + iOrdinal + ": segment=" + iSegment + " offset=" + Str.toHexLong(offEntry) + " @" + Str.toHex(offDebug));
                    }
                }
                this.aOrdinals[iOrdinal] = [iSegment, offEntry];
                iOrdinal++;
            }
        }
    }

    /**
     * loadNameTable(aField, offset)
     *
     * NOTE: If offset is omitted, we assume we're reading the Resident Name Table, and therefore
     * the first name is the module name; otherwise, we assume it is the Non-Resident Name Table, and
     * that the first name is the module description.
     *
     * @this {FileInfo}
     * @param {number} offEntries
     * @param {number} [offEntriesEnd] (if omitted, then the table must be null-terminated)
     */
    loadNameTable(offEntries, offEntriesEnd)
    {
        let cNames = 0;

        if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
            this.disk.printMessage("loadNameTable(" + Str.toHexLong(offEntries) + (offEntriesEnd? ("," + Str.toHexLong(offEntriesEnd)) : "") + ")");
        }

        while (!offEntriesEnd || offEntries < offEntriesEnd) {

            let offDebug = offEntries;
            let bLength = this.loadValue(offEntries, 1);
            if (!bLength) break;

            let sSymbol = this.loadString(offEntries + 1, bLength);
            if (!sSymbol) break;                    // an error must have occurred (this is not a natural way to end)
            offEntries += 1 + bLength;

            if (!cNames) {
                if (!offEntriesEnd) {
                    this.sModule = sSymbol;
                } else {
                    this.sDescription = sSymbol;
                }
            }
            else {
                let iOrdinal = this.loadValue(offEntries);
                let tuple = this.aOrdinals[iOrdinal];
                if (tuple) {
                    let iSegment = tuple[0];        // tuple[0] is the segment number and tuple[1] is the corresponding offEntry
                    if (this.aSegments[iSegment]) {
                        let aEntries = this.aSegments[iSegment].aEntries[iOrdinal];
                        this.disk.assert(aEntries && aEntries.length == 1);
                        aEntries.push(sSymbol);
                        if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                            this.disk.printMessage("segment " + iSegment + " offset " + Str.toHexWord(aEntries[0]) + " ordinal " + iOrdinal + ": " + sSymbol + " @" + Str.toHex(offDebug));
                        }
                    } else {
                        if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                            this.disk.printMessage(this.sPath + ": cannot find segment " + iSegment + " (offset " + Str.toHexWord(tuple[1]) + ") for symbol " + sSymbol + " with ordinal " + iOrdinal + " @" + Str.toHex(offDebug));
                        }
                    }
                } else {
                    if (DEBUG && this.disk.messageEnabled(Messages.DISK + Messages.DATA)) {
                        this.disk.printMessage(this.sPath + ": cannot find ordinal " + iOrdinal + " for symbol " + sSymbol + " @" + Str.toHex(offDebug));
                    }
                }
            }
            offEntries += 2;
            cNames++;
        }
    }

    /**
     * loadSymbols()
     *
     * For files with NE headers, extract all available symbolic information from the file.
     *
     * @this {FileInfo}
     */
    loadSymbols()
    {
        if (!Str.endsWith(this.sName, ".EXE") && !Str.endsWith(this.sName, ".DLL") && !Str.endsWith(this.sName, ".DRV")) {
            return;
        }

        if (this.loadField(FileInfo.OE.oeSignature) != FileInfo.OE.SIG) {
            return;
        }

        if (this.loadField(FileInfo.OE.oeRelocOffset) != FileInfo.OE.NE_SIG) {
            return;
        }

        let offNEHeader = this.loadField(FileInfo.OE.oeNEHeader);
        if (this.loadField(FileInfo.NE.neSignature, offNEHeader) != FileInfo.NE.SIG) {
            return;
        }

        let nEntries = this.loadField(FileInfo.NE.neSTEntries, offNEHeader);
        let offEntries = this.loadField(FileInfo.NE.neSTOffset, offNEHeader);
        let nSegOffShift = this.loadField(FileInfo.NE.neSegOffShift, offNEHeader);

        if (offEntries && nEntries) {
            this.loadSegmentTable(offEntries + offNEHeader, nEntries, nSegOffShift || 0);
        }

        offEntries = this.loadField(FileInfo.NE.neETOffset, offNEHeader);
        let cbEntries = this.loadField(FileInfo.NE.neETSize, offNEHeader);
        if (offEntries && cbEntries) {
            this.loadEntryTable(offEntries += offNEHeader, offEntries + cbEntries);
        }

        /*
         * Time to walk the Resident Name Table and update the corresponding ordinals.
         */
        offEntries = this.loadField(FileInfo.NE.neRNTOffset, offNEHeader);
        if (offEntries) {
            this.loadNameTable(offEntries + offNEHeader);
        }

        /*
         * Ditto for the Non-Resident Name Table, which for some reason, uses a file-relative offset rather than
         * an NE header-relative offset, and which is both sized AND null-terminated; we check both terminating
         * conditions to be safe.
         */
        offEntries = this.loadField(FileInfo.NE.neNRNTOffset, offNEHeader);
        cbEntries = this.loadField(FileInfo.NE.neNRNTSize, offNEHeader);
        if (offEntries && cbEntries) {
            this.loadNameTable(offEntries, offEntries + cbEntries);
        }
    }

    /**
     * getSymbol(off, fNearest)
     *
     * @this {FileInfo}
     * @param {number} off (offset relative to start of file)
     * @param {boolean} [fNearest] (true to return nearest symbol if a segment with symbols is found)
     * @return {string} symbol corresponding to file offset (of the file name + offset if no symbol found)
     */
    getSymbol(off, fNearest)
    {
        let sSymbol = null;
        if (this.aSegments) {
            for (let iSegment in this.aSegments) {
                let segment = this.aSegments[iSegment];
                if (off >= segment.offStart && off <= segment.offEnd) {
                    /*
                     * This is the one and only segment we need to check, so we can make off segment-relative now.
                     */
                    off -= segment.offStart;
                    /*
                     * To support fNearest, save the entry where (off - entry[0]) yields the smallest positive result.
                     */
                    let cbNearest = off, entryNearest;
                    for (let iOrdinal in segment.aEntries) {
                        let entry = segment.aEntries[iOrdinal];
                        let cb = off - entry[0];
                        if (!cb) {
                            sSymbol = this.sModule + '!' + entry[1];
                            break;
                        }
                        if (fNearest && cb > 0 && cb < cbNearest) {
                            entryNearest = entry;
                            cbNearest = cb;
                        }
                    }
                    if (!sSymbol && entryNearest) {
                        sSymbol = this.sModule + '!' + entryNearest[1] + "+" + Str.toHex(cbNearest, 0, true);
                    }
                    break;
                }
            }
        }
        return sSymbol || this.sName + '+' + Str.toHex(off, 0, true);
    }
}

/*
 * Original (aka "Old") Executable MS-DOS File Format
 *
 * Relocation entries are pairs of 16-bit words:
 *
 *      wOffset
 *      wSegment
 *
 * I've noticed that a "PKLITE" EXE may have a oeRelocOffset of 0x52, where the word at 0x001C is 0x210F and the
 * bytes from 0x001E through 0x0051 are:
 *
 *      "PKLITE Copr. 1990-92 PKWARE Inc. All Rights Reserved"
 *
 * Other EXEs have a oeRelocOffset of 0x1E, which begs the question: what is the word at 0x001C typically used for?
 *
 * It was not uncommon for there to be wasted space in the header; even an EXE with, say, 20 (0x14) entries would
 * likely have a wHeaderParas value of 0x20, which is 512 (0x200) bytes.  The desire, no doubt, was to align the
 * start of the EXE segment(s) to a traditional sector boundary.
 */
FileInfo.OE = {
    SIG:            0x5A4D,
    oeSignature:    [0x0000, 2],        // "MZ" (0x4D,0x5A)
    oeLastBytes:    [0x0002, 2],        // 0-511 (0 means the entire last block is used)
    oeBlocks:       [0x0004, 2],        // number of blocks in the file
    oeRelocEntries: [0x0006, 2],        // number of relocation entries in the header
    oeHeaderParas:  [0x0008, 2],        // number of (16-byte) paragraphs in the header
    oeExtraParas:   [0x000A, 2],        // minimum number of additional paragraphs required at load-time
    oeMaxParas:     [0x000C, 2],        // maximum number of additional paragraphs required at load-time
    oeSSRel:        [0x000E, 2],        // relative value of SS
    oeSPInit:       [0x0010, 2],        // initial value of SP
    oeChecksum:     [0x0012, 2],        // checksum if non-zero (sum of all words, including this, should be zero)
    oeIPInit:       [0x0014, 2],        // initial value of IP
    oeCSRel:        [0x0016, 2],        // relative value of CS
    oeRelocOffset:  [0x0018, 2],        // offset of first relocation item
    oeOverlay:      [0x001A, 2],        // overlay number (normally zero, implying main program)
    /*
     * The following fields are accommodated by the NE format, but they were actually defined by "the DOS 4.0 group"
     * as extensions to the OE format.
     */
    oeDOS40Bits:    [0x0020, 2],        // DOS 4.0 behavior bits
    oeUnusedBits:   [0x0022, 2],        // unused behavior bits
    /*
     * If oeRelocOffset (0x0018) is 0x40, then the file is considered an NE (New Executable) MS-DOS file, and
     * the offset of the NE header (from the start of the file) is a 32-bit value stored at 0x003C.  Note that early
     * versions of Windows (aka "DOS 2.0 Windows") originally defined the NE header offset as a 16-bit value stored
     * at 0x003E.  And before that, it may have been a 16-bit value stored at 0x0024, which would have been immediately
     * after the "behavior bits" fields shown above).
     */
    oeNEHeader:     [0x003C, 4],        // offset from start of file to NE header
    NE_SIG:         0x40
};

/*
 * New Executable MS-DOS File Format
 *
 * Unless otherwise specified, all *Offset fields are relative to the start of the NE header, and all *Size fields
 * are in bytes.
 */
FileInfo.NE = {
    SIG:            0x454E,
    neSignature:    [0x0000, 2],        // "NE" (0x4E,0x45)
    neLinkerVer:    [0x0002, 2],        // (low byte is version, high byte is revision)
    neETOffset:     [0x0004, 2],        // Entry Table offset
    neETSize:       [0x0006, 2],        // Entry Table size
    neChecksum:     [0x0008, 4],        // checksum (sum of all DWORDs in the file, excluding this one)
    neFlags:        [0x000C, 2],
    neDataSeg:      [0x000E, 2],
    neHeapSize:     [0x0010, 2],
    neStackSize:    [0x0012, 2],
    neCSIP:         [0x0014, 4],
    neSSSP:         [0x0018, 4],
    neSTEntries:    [0x001C, 2],        // Segment Table entries
    neMRTEntries:   [0x001E, 2],        // Module Reference Table entries
    neNRNTSize:     [0x0020, 2],        // Non-Resident Name Table size
    neSTOffset:     [0x0022, 2],        // Segment Table offset
    neRTOffset:     [0x0024, 2],        // Resource Table offset
    neRNTOffset:    [0x0026, 2],        // Resident Name Table offset
    neMRTOffset:    [0x0028, 2],        // Module Reference Table offset
    neINTOffset:    [0x002A, 2],        // Imported Names Table offset
    neNRNTOffset:   [0x002C, 4],        // Non-Resident Name Table offset (relative to start of file)
    neETMovable:    [0x0030, 2],        // number of movable entries in the Entry Table
    neSegOffShift:  [0x0032, 2],        // logical sector alignment shift count, log(base 2) of the segment sector size (default 9)
    /*
     * Fields after this point are post "DOS 2.0 Windows"...
     */
    neRTEntries:    [0x0034, 2],        // Resource Table entries
    neEXEType:      [0x0036, 1]         // executable type (0x02 for Windows)
    /*
     * 0x37 through 0x3F is reserved.
     */
};

if (typeof module !== "undefined") module.exports = Disk;
