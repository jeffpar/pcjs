/**
 * @fileoverview Implements disk image support for various disk controllers
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 *  The DiskPDP11 component provides methods for:
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
 *  More functionality may be factored out of the disk controller components later and moved here,
 *  to further reduce some of the duplication between them, but the above functionality is a good start.
 */

import BusPDP11 from "./bus.js";
import MESSAGE from "./message.js";
import Component from "../../../../modules/v2/component.js";
import DiskAPI from "../../../../modules/v2/diskapi.js";
import DumpAPI from "../../../../modules/v2/dumpapi.js";
import StrLib from "../../../../modules/v2/strlib.js";
import WebLib from "../../../../modules/v2/weblib.js";
import { DEBUG } from "./defines.js";

/**
 * Every Sector object (once loaded, parsed, and "normalized") should have ALL of the following named properties:
 *
 *      'sector':   sector number
 *      'length':   size of the sector, in bytes
 *      'data':     array of dwords
 *      'pattern':  dword pattern to use for empty or partial sectors (or null if sector still needs to be loaded)
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
 * @typedef {Object} SectorInfo
 * @property {number} sector
 * @property {number} length
 * @property {Array.<number>} data
 * @property {number|null} pattern
 * @property {number} iCylinder
 * @property {number} iHead
 * @property {number} iModify
 * @property {number} cModify
 */

/**
 * @class DiskPDP11
 * @unrestricted
 */
export default class DiskPDP11 extends Component {
    /**
     * DiskPDP11(controller, drive, mode)
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
     * "track[iSector]['data']".
     *
     * @param {DriveController|RK11|RL11} controller
     * @param {Object} drive
     * @param {string} mode
     */
    constructor(controller, drive, mode)
    {
        super("Disk", {'id': controller.idMachine + ".disk" + StrLib.toHex(++DiskPDP11.nDisks, 4)}, MESSAGE.DISK);

        /*
         * Route all non-Debugger messages (eg, print() calls) through this.controller
         * (eg, controller.print()), because the Computer component is unaware of any Disk objects
         * and therefore will not set up the usual overrides when a Control Panel is installed.
         */
        this.controller = controller;
        this.cmp = controller.cmp;
        this.dbg = controller.dbg;
        this.drive = drive;

        /*
         * We pull out a number of drive properties that we may or may not need as defaults.
         */
        this.sDiskName = drive.name;
        this.sDiskPath = this.sDiskFile = "";
        this.fRemovable = drive.fRemovable;

        /*
         * Initialize the disk contents
         */
        this.mode = 0;
        this.nCylinders = this.nHeads = this.nSectors = this.cbSector = 0;
        this.aDiskData = [];
        this.dwChecksum = null;
        this.fWriteProtected = false;
        this.create(mode, drive.nCylinders, drive.nHeads, drive.nSectors, drive.cbSector);

        this.fnNotify = this.controllerNotify = null;

        this.setReady();
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * We have no real interest in this notification, other than to obtain a reference to the Debugger
     * for every disk loaded BEFORE the initBus() phase; any disk loaded AFTER that point will get its Debugger
     * reference, if any, from the disk controller passed to the DiskPDP11() constructor.
     *
     * @this {DiskPDP11}
     * @param {ComputerPDP11} cmp
     * @param {BusPDP11} bus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.dbg = dbg;
    }

    /**
     * create()
     *
     * @this {DiskPDP11}
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
            if (DEBUG) {
                this.printf("blank disk for \"%s\": %d cylinders, %d head(s)\n", this.sDiskName, this.nCylinders, this.nHeads);
            }
            var aCylinders = new Array(this.nCylinders);
            for (var iCylinder = 0; iCylinder < aCylinders.length; iCylinder++) {
                var aHeads = new Array(this.nHeads);
                for (var iHead = 0; iHead < aHeads.length; iHead++) {
                    var aSectors = new Array(this.nSectors);
                    for (var iSector = 1; iSector <= aSectors.length; iSector++) {
                        /*
                         * Now that our read() and write() functions can deal with unallocated data
                         * arrays, and can read/write the specified pattern on-the-fly, we no longer need
                         * to pre-allocate and pre-initialize the 'data' array.
                         */
                        aSectors[iSector - 1] = this.initSector(null, iCylinder, iHead, iSector, this.cbSector, 0);
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
     * @this {DiskPDP11}
     * @param {string} sDiskName
     * @param {string} sDiskPath
     * @param {File} [file] is set if there's an associated File object
     * @param {function(...)} [fnNotify]
     * @param {Component} [controller]
     * @returns {boolean} true if load completed (successfully or not), false if queued
     */
    load(sDiskName, sDiskPath, file, fnNotify, controller)
    {
        var sDiskURL = sDiskPath;

        if (DEBUG) {
            this.controller.printf(MESSAGE.LOG, "load(\"%s\",\"%s\")\n", sDiskName, sDiskPath);
            this.printf("load(\"%s\",\"%s\")\n", sDiskName, sDiskPath);
        }

        if (this.fnNotify) {
            if (DEBUG) this.controller.printf(MESSAGE.LOG, "too many load requests for \"%s\" (%s)\n", sDiskName, sDiskPath);
            return true;
        }

        this.sDiskName = sDiskName;
        this.sDiskPath = sDiskPath;
        this.sDiskFile = StrLib.getBaseName(sDiskPath);

        var disk = this;
        this.fnNotify = fnNotify;
        this.controllerNotify = controller || this.controller;

        if (file) {
            var reader = new FileReader();
            reader.onload = function() {
                disk.build(reader.result, true);
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
            var sDiskExt = StrLib.getExtension(sDiskPath);
            if (sDiskExt != DumpAPI.FORMAT.JSON && sDiskExt != DumpAPI.FORMAT.JSON_GZ) {
                var sDiskParm = DumpAPI.QUERY.PATH;
                var sSizeParm = '&' + DumpAPI.QUERY.MBHD + "=10";
                /*
                 * 'mbhd' is a new parm added for hard drive support.  In the case of 'file' or 'dir' requests,
                 * 'mbhd' informs DumpAPI.ENDPOINT that it should create a hard disk image, and one not larger than
                 * the specified size (eg, 10mb).  In fact, until DumpAPI.ENDPOINT is changed to create custom hard
                 * disk BPBs, you'll always get a standard PC XT 10mb disk image, so if the 'file' or 'dir' contains
                 * more than 10mb of data, the request will fail.  Ultimately, I want to honor the controller's
                 * driveConfig 'size' parm, or to match the capacity required by the driveConfig 'type' parameter.
                 *
                 * If a 'disk' is specified, we pass mbhd=0, because the actual size will depend on the image.
                 * However, I don't currently have any "dsk" or "img" files containing hard disk images; those formats
                 * were really intended for floppy disk images.  If I never create any hard disk image files, then
                 * we can simply eliminate sSizeParm in the 'disk' case.
                 *
                 * Added more extensions to the list of paths-treated-as-disk-images, so that URLs to files located here:
                 *
                 *      ftp://ftp.oldskool.org/pub/TOPBENCH/dskimage/
                 *
                 * can be used as-is.  TODO: There's a TODO in netlib.getFile() regarding remote support that needs
                 * to be resolved first; DiskDump relies on that function for its remote requests, and it currently
                 * supports only HTTP.
                 */
                if (!sDiskPath.indexOf("http:") || !sDiskPath.indexOf("ftp:") || ["dsk", "ima", "img", "360", "720", "12", "144"].indexOf(sDiskExt) >= 0) {
                    sDiskParm = DumpAPI.QUERY.DISK;
                    sSizeParm = '&' + DumpAPI.QUERY.MBHD + "=0";
                } else if (StrLib.endsWith(sDiskPath, '/')) {
                    sDiskParm = DumpAPI.QUERY.DIR;
                }
                sDiskURL = WebLib.getHostOrigin() + DumpAPI.ENDPOINT + '?' + sDiskParm + '=' + encodeURIComponent(sDiskPath) + (this.fRemovable ? "" : sSizeParm) + "&" + DumpAPI.QUERY.FORMAT + "=" + DumpAPI.FORMAT.JSON;
            }
        }
        return !!WebLib.getResource(sDiskURL, null, true, function(sURL, sResponse, nErrorCode) {
            disk.doneLoad(sURL, sResponse, nErrorCode);
        });
    }

    /**
     * build(buffer, fModified)
     *
     * Builds a disk image from an ArrayBuffer (eg, from a FileReader object), rather than from JSON-encoded data.
     *
     * @this {DiskPDP11}
     * @param {?} buffer (we KNOW this is an ArrayBuffer, but we can't seem to convince the Closure Compiler)
     * @param {boolean} [fModified] is true if we should mark the entire disk modified (to ensure that we save/restore it)
     */
    build(buffer, fModified)
    {
        var disk;
        var cbDiskData = buffer? buffer.byteLength : 0;
        var diskFormat = DiskAPI.GEOMETRIES[cbDiskData];

        if (diskFormat) {
            this.nCylinders = diskFormat[0];
            this.nHeads = diskFormat[1];
            this.nSectors = diskFormat[2];
            this.cbSector = (diskFormat[3] || 512);

            var cdw = this.cbSector >> 2, dwPattern = 0, dwChecksum = 0;
            var ib = 0;
            var dv = new DataView(buffer, 0, cbDiskData);

            this.aDiskData = new Array(this.nCylinders);
            for (var iCylinder = 0; iCylinder < this.aDiskData.length; iCylinder++) {
                var cylinder = this.aDiskData[iCylinder] = new Array(this.nHeads);
                for (var iHead = 0; iHead < cylinder.length; iHead++) {
                    var head = cylinder[iHead] = new Array(this.nSectors);
                    for (var iSector = 0; iSector < head.length; iSector++) {
                        var sector = this.initSector(null, iCylinder, iHead, iSector + 1, this.cbSector, dwPattern);
                        var adw = sector['data'];
                        for (var idw = 0; idw < cdw; idw++, ib += 4) {
                            var dw = adw[idw] = dv.getInt32(ib, true);
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
            this.printf(MESSAGE.NOTICE, "Unrecognized disk format (%d bytes)\n", cbDiskData);
        }

        if (this.fnNotify) {
            this.fnNotify.call(this.controller, this.drive, disk, this.sDiskName, this.sDiskPath);
            this.fnNotify = null;
        }
    }

    /**
     * doneLoad(sURL, sDiskData, nErrorCode)
     *
     * This function was originally called mount().  If the mount is successful, we pass the Disk object to the
     * caller's fnNotify handler; otherwise, we pass null.
     *
     * @this {DiskPDP11}
     * @param {string} sURL
     * @param {string|null} sDiskData
     * @param {number} nErrorCode (response from server if anything other than 200)
     */
    doneLoad(sURL, sDiskData, nErrorCode)
    {
        var disk = null;
        var fPrintOnly = (nErrorCode < 0 && !!this.cmp && !this.cmp.flags.powered);

        this.fWriteProtected = false;

        if (nErrorCode) {
            /*
             * This can happen for innocuous reasons, such as the user switching away too quickly, forcing
             * the request to be cancelled.  And unfortunately, the browser cancels XMLHttpRequest requests
             * BEFORE it notifies any page event handlers, so if the Computer's being powered down, we won't know
             * that yet.  For now, we rely on the lack of a specific error (nErrorCode < 0), and suppress the
             * notify() alert if there's no specific error AND the computer is not powered up yet.
             */
            this.controller.printf(MESSAGE.NOTICE, "Unable to load disk \"%s\" (error %d: %s)\n", this.sDiskName, nErrorCode, sURL);
        } else {
            if (DEBUG) {
                this.printf("doneLoad(\"%s\")\n", this.sDiskPath);
            }

            Component.addMachineResource(this.controller.idMachine, sURL, sDiskData);

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
                var sBaseName = StrLib.getBaseName(this.sDiskFile, true).toLowerCase();
                if (sBaseName.indexOf("-readonly") > 0) {
                    this.fWriteProtected = true;
                } else {
                    var iEOL = sDiskData.indexOf("\n");
                    if (iEOL > 0 && iEOL < 1024) {
                        var sConfig = sDiskData.substring(0, iEOL);
                        if (sConfig.indexOf("write-protected") > 0) {
                            this.fWriteProtected = true;
                        }
                    }
                }
                /*
                 * The most likely source of any exception will be here, where we're parsing the disk data.
                 */
                var aDiskData;
                if (sDiskData.substr(0, 1) == "<") {        // if the "data" begins with a "<"...
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
                     * However, it turns out that using JSON.parse(sDiskData) instead of eval("(" + sDiskData + ")")
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
                    if (sDiskData.indexOf("0x") < 0 && sDiskData.substr(0, 2) != "[\"") {
                        aDiskData = JSON.parse(sDiskData.replace(/([a-z]+):/gm, "\"$1\":").replace(/\/\/[^\n]*/gm, ""));
                    } else {
                        aDiskData = eval("(" + sDiskData + ")");
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
                 * Sector object properties include:
                 *
                 *      'sector'    the sector number (1-based, not required to be sequential)
                 *      'length'    the byte-length (ie, formatted length) of the sector
                 *      'data'      the dword-array containing the sector data
                 *      'pattern'   if the dword-array length is less than 'length'/4, this value must be used
                 *                  to pad out the sector; if no 'pattern' is specified, it's assumed to be zero
                 *
                 * We still support the older JSON encoding, where sector data was encoded as an array of 'bytes'
                 * rather than a dword 'data' array.  However, our support is strictly limited to an on-the-fly
                 * conversion to a forward-compatible 'data' array.
                 */
                else {
                    if (DEBUG && this.messageEnabled(MESSAGE.DISK | MESSAGE.BUFFER)) {
                        var sCylinders = aDiskData.length + " track" + (aDiskData.length > 1 ? "s" : "");
                        var nHeads = aDiskData[0].length;
                        var sHeads = nHeads + " head" + (nHeads > 1 ? "s" : "");
                        var nSectorsPerTrack = aDiskData[0][0].length;
                        var sSectorsPerTrack = nSectorsPerTrack + " sector" + (nSectorsPerTrack > 1 ? "s" : "") + "/track";
                        this.printf("%s, %s, %s\n", sCylinders, sHeads, sSectorsPerTrack);
                    }
                    /*
                     * Before the image is usable, we must "normalize" all the sectors.  In the past, this meant
                     * "inflating" them all.  However, that's no longer strictly necessary.  Mainly, it just means
                     * setting 'length', 'data', and 'pattern' properties, so that all the sectors are well-defined.
                     * This includes detecting sector data in older formats (eg, the old array of 'bytes' instead
                     * of the new 'data' array of dwords) and converting them on-the-fly to the current format.
                     */
                    this.nCylinders = aDiskData.length;
                    this.nHeads = aDiskData[0].length;
                    this.nSectors = aDiskData[0][0].length;
                    var sector = aDiskData[0][0][0];
                    this.cbSector = (sector && sector['length']) || 512;

                    var dwChecksum = 0;
                    for (var iCylinder = 0; iCylinder < this.nCylinders; iCylinder++) {
                        for (var iHead = 0; iHead < this.nHeads; iHead++) {
                            for (var iSector = 0; iSector < this.nSectors; iSector++) {
                                sector = aDiskData[iCylinder][iHead][iSector];
                                if (!sector) continue;          // non-standard (eg, XDF) disk images may have "unused" (null) sectors
                                var length = sector['length'];
                                if (length === undefined) {     // provide backward-compatibility with older JSON...
                                    length = sector['length'] = 512;
                                }
                                length >>= 2;                   // convert length from a byte-length to a dword-length
                                var dwPattern = sector['pattern'];
                                if (dwPattern === undefined) {
                                    dwPattern = sector['pattern'] = 0;
                                }
                                var adw = sector['data'];
                                if (adw === undefined) {
                                    var ab = sector['bytes'];
                                    if (ab === undefined || !ab.length) {
                                        /*
                                         * It would be odd if there was neither a 'bytes' nor 'data' array; I'm just
                                         * being paranoid.  It's more likely that the 'bytes' array is simply empty,
                                         * in which case we need only create an empty 'data' array and turn the byte
                                         * pattern, if any, into a dword pattern.
                                         */
                                        adw = [];
                                        this.assert((dwPattern & 0xff) == dwPattern);
                                        dwPattern = sector['pattern'] = (dwPattern | (dwPattern << 8) | (dwPattern << 16) | (dwPattern << 24));
                                        sector['data'] = adw;
                                    } else {
                                        /*
                                         * To keep the conversion code simple, we'll do any necessary pattern-filling first,
                                         * to fully "inflate" the sector, eliminating the possibility of partial dwords and
                                         * saving any code downstream from dealing with byte-size patterns.
                                         */
                                        var cb = length << 2;
                                        for (var ib = ab.length; ib < cb; ib++) {
                                            ab[ib] = dwPattern; // the pattern for byte-arrays was only a byte
                                        }
                                        this.fill(sector, ab, 0);
                                    }
                                    delete sector['bytes'];
                                }
                                this.initSector(sector, iCylinder, iHead);
                                /*
                                 * For the disk as a whole, we maintain a checksum of the original unmodified data:
                                 *
                                 *      dwChecksum: summation of all dwords in all non-empty sectors
                                 *
                                 * Pattern-filling of sectors is deferred until absolutely necessary (eg, when a sector is
                                 * being written).  So all we need to do at this point is checksum all the initial sector data.
                                 */
                                for (var idw = 0; idw < adw.length; idw++) {
                                    dwChecksum = (dwChecksum + adw[idw]) & (0xffffffff|0);
                                }
                            }
                        }
                    }
                    this.aDiskData = aDiskData;
                    this.dwChecksum = dwChecksum;
                    disk = this;
                }
            } catch (e) {
                Component.error("Disk image error (" + sURL + "): " + e.message);
            }
        }

        if (this.fnNotify) {
            this.fnNotify.call(this.controllerNotify, this.drive, disk, this.sDiskName, this.sDiskPath);
            this.fnNotify = null;
        }
    }

    /**
     * getSectorString(sector, off, len)
     *
     * WARNING: This function is restricted to reading a string contained ENTIRELY within the specified sector.
     *
     * @this {DiskPDP11}
     * @param {Object} sector
     * @param {number} off (byte offset)
     * @param {number} len (use -1 to read a null-terminated string)
     * @returns {string}
     */
    getSectorString(sector, off, len)
    {
        var s = "";
        while (len--) {
            var b = this.read(sector, off++);
            if (b <= 0) break;
            s += String.fromCharCode(b);
        }
        return s;
    }

    /**
     * initSector(sector, iCylinder, iHead, iSector, cbSector, dwPattern)
     *
     * Ensures every sector has ALL the properties of a proper Sector object; ie:
     *
     *      'sector':   sector number
     *      'length':   size of the sector, in bytes
     *      'data':     array of dwords
     *      'pattern':  dword pattern to use for empty or partial sectors
     *
     * In addition, we will maintain the following information on a per-sector basis,
     * as sectors are modified:
     *
     *      iModify:    index of first modified dword in sector
     *      cModify:    number of modified dwords in sector
     *      fDirty:     true if sector is dirty, false if clean (or cleaning in progress)
     *
     * @this {DiskPDP11}
     * @param {Object} sector
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} [iSector]
     * @param {number} [cbSector]
     * @param {number|null} [dwPattern]
     * @returns {Object}
     */
    initSector(sector, iCylinder, iHead, iSector, cbSector, dwPattern)
    {
        if (!sector) {
            sector = {'sector': iSector, 'length': cbSector, 'data': [], 'pattern': dwPattern};
        }
        sector.iCylinder = iCylinder;
        sector.iHead = iHead;
        sector.iModify = sector.cModify = 0;
        sector.fDirty = false;
        return sector;
    }

    /**
     * info()
     *
     * TODO: Decide whether deprecate this in favor of accessing the nCylinders, nHeads, nSectors, and cbSector
     * properties of the Disk object directly.
     *
     * @this {DiskPDP11}
     * @returns {Array} containing: [nCylinders, nHeads, nSectorsPerTrack, nBytesPerSector]
     */
    info()
    {
        if (!this.aDiskData.length) {
            return [0, 0, 0, 0];
        }
        return [this.aDiskData.length, this.aDiskData[0].length, this.aDiskData[0][0].length, this.aDiskData[0][0][0]['length']];
    }

    /**
     * seek(iCylinder, iHead, iSector, fWrite, done)
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
     * @this {DiskPDP11}
     * @param {number} iCylinder
     * @param {number} iHead
     * @param {number} iSector
     * @param {boolean} [fWrite]
     * @param {function(Object,boolean)} [done]
     * @returns {Object|null} is the requested sector, or null if not found (or not available yet)
     */
    seek(iCylinder, iHead, iSector, fWrite, done)
    {
        var sector = null;
        var drive = this.drive;
        var cylinder = this.aDiskData[iCylinder];
        if (cylinder) {
            var i;
            var track = cylinder[iHead];
            /*
             * The following code allows a single-sided diskette image to be reformatted (ie, "expanded")
             * as a double-sided image, provided the drive has more than one head (see drive.nHeads).
             */
            if (!track && drive.bFormatting && iHead < drive.nHeads) {
                track = cylinder[iHead] = new Array(drive.bSectorEnd);
                for (i = 0; i < track.length; i++) {
                    track[i] = this.initSector(null, iCylinder, iHead, i + 1, drive.nBytes, 0);
                }
            }
            if (track) {
                for (i = 0; i < track.length; i++) {
                    if (track[i] && track[i]['sector'] == iSector) {
                        /*
                         * If the sector's pattern is null, then this sector's true contents have not yet
                         * been fetched from the server.
                         */
                        sector = track[i];
                        break;
                    }
                }
                /*
                 * The following code allows an 8-sector track to be reformatted (ie, "expanded") as a 9-sector track.
                 */
                if (!sector && drive.bFormatting && drive.bSector == 9) {
                    sector = track[i] = this.initSector(null, iCylinder, iHead, drive.bSector, drive.nBytes, 0);
                }
            }
        }
        if (done) done(sector, false);
        return sector;
    }

    /**
     * fill(sector, ab, off)
     *
     * @this {DiskPDP11}
     * @param {Object} sector
     * @param {*} ab (technically, this should be typed as Array.<number> but I'm having trouble coercing JSON.parse() to that)
     * @param {number} off
     */
    fill(sector, ab, off)
    {
        var cdw = sector['length'] >> 2;
        var adw = new Array(cdw);
        for (var idw = 0; idw < cdw; idw++) {
            adw[idw] = ab[off] | (ab[off + 1] << 8) | (ab[off + 2] << 16) | (ab[off + 3] << 24);
            off += 4;
        }
        sector['data'] = adw;
        /*
         * TODO: Consider taking this opportunity to shrink 'data' down by the number of dwords at the end of the buffer that
         * contain the same pattern, and setting 'pattern' accordingly.
         */
    }

    /**
     * toBytes(sector)
     *
     * @this {DiskPDP11}
     * @param {Object} sector
     * @returns {Array.<number>} is an array of bytes
     */
    toBytes(sector)
    {
        var cb = sector['length'];
        var ab = new Array(cb);
        var ib = 0;
        var cdw = cb >> 2;
        var adw = sector['data'];
        var dwPattern = sector['pattern'];
        for (var idw = 0; idw < cdw; idw++) {
            var dw = (idw < adw.length? adw[idw] : dwPattern);
            ab[ib++] = dw & 0xff;
            ab[ib++] = (dw >> 8) & 0xff;
            ab[ib++] = (dw >> 16) & 0xff;
            ab[ib++] = (dw >> 24) & 0xff;
        }
        return ab;
    }

    /**
     * read(sector, ibSector, fCompare)
     *
     * @this {DiskPDP11}
     * @param {Object} sector (returned from a previous seek)
     * @param {number} ibSector a byte index within the given sector
     * @param {boolean} [fCompare] is true if this write-compare read
     * @returns {number} the specified (unsigned) byte, or -1 if no more data in the sector
     */
    read(sector, ibSector, fCompare)
    {
        var b = -1;
        if (sector) {
            if (ibSector < sector['length']) {
                var adw = sector['data'];
                var idw = ibSector >> 2;
                var dw = (idw < adw.length ? adw[idw] : sector['pattern']);
                b = ((dw >> ((ibSector & 0x3) << 3)) & 0xff);
            }
            if (DEBUG && !fCompare) {
                this.printf("read(\"%s\",CHS=%d:%d:%d,index=%d,value=%#04x)\n", this.sDiskFile, sector.iCylinder, sector.iHead, sector['sector'], ibSector, b);
            }
        }
        return b;
    }

    /**
     * write(sector, ibSector, b)
     *
     * @this {DiskPDP11}
     * @param {Object} sector (returned from a previous seek)
     * @param {number} ibSector a byte index within the given sector
     * @param {number} b the byte value to write
     * @returns {boolean|null} true if write successful, false if write-protected, null if out of bounds
     */
    write(sector, ibSector, b)
    {
        if (this.fWriteProtected) {
            return false;
        }

        if (DEBUG) {
            this.printf("write(\"%s\",CHS=%d:%d:%d,index=%d,value=%#04x)\n", this.sDiskFile, sector.iCylinder, sector.iHead, sector['sector'], ibSector, b);
        }

        if (ibSector < sector['length']) {
            if (b != this.read(sector, ibSector, true)) {
                var adw = sector['data'];
                var dwPattern = sector['pattern'];
                var idw = ibSector >> 2;
                var nShift = (ibSector & 0x3) << 3;

                /*
                 * Ensure every byte up to the specified byte is properly initialized.
                 */
                for (var i = adw.length; i <= idw; i++) adw[i] = dwPattern;

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
            }
            return true;
        }
        return null;
    }

    /**
     * getSector(pba)
     *
     * @this {DiskPDP11}
     * @param {number} pba (physical block address)
     * @returns {Object|null} sector
     */
    getSector(pba)
    {
        var nSectorsPerCylinder = this.nHeads * this.nSectors;
        var iCylinder = (pba / nSectorsPerCylinder) | 0;
        if (iCylinder < this.nCylinders) {
            var nSectorsRemaining = (pba % nSectorsPerCylinder);
            var iHead = (nSectorsRemaining / this.nSectors) | 0;
            /*
             * PBA numbers are 0-based, but the sector numbers in CHS addressing are 1-based, so add one to iSector
             */
            var iSector = (nSectorsRemaining % this.nSectors) + 1;
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
     * @this {DiskPDP11}
     * @param {Object} sector
     * @param {number} off (byte offset)
     * @param {number} len (1 to 4 bytes)
     * @returns {number}
     */
    getSectorData(sector, off, len)
    {
        var dw = 0;
        var nShift = 0;
        this.assert(len > 0 && len <= 4);
        while (len--) {
            this.assert(off < sector['length']);
            var b = this.read(sector, off++);
            this.assert(b >= 0);
            if (b < 0) break;
            dw |= (b << nShift);
            nShift += 8;
        }
        return dw;
    }

    /**
     * encodeAsBase64()
     *
     * @this {DiskPDP11}
     * @returns {string}
     */
    encodeAsBase64()
    {
        /*
         * Gross, but simple; more importantly, it works -- at least for disks of typical floppy magnitude.
         */
        var s = "", pba = 0, sector;
        while ((sector = this.getSector(pba++))) {
            for (var off = 0, len = sector['length']; off < len; off++) {
                s += String.fromCharCode(this.getSectorData(sector, off, 1));
            }
        }
        return btoa(s);
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
     * @this {DiskPDP11}
     * @returns {Array} of modified sectors
     */
    save()
    {
        var i = 0;
        var deltas = [];
        deltas[i++] = [this.sDiskPath, this.dwChecksum, this.nCylinders, this.nHeads, this.nSectors, this.cbSector];
        if (!this.fWriteProtected) {
            var aDiskData = this.aDiskData;
            for (var iCylinder = 0; iCylinder < aDiskData.length; iCylinder++) {
                for (var iHead = 0; iHead < aDiskData[iCylinder].length; iHead++) {
                    for (var iSector = 0; iSector < aDiskData[iCylinder][iHead].length; iSector++) {
                        var sector = aDiskData[iCylinder][iHead][iSector];
                        if (sector && sector.cModify) {
                            var mods = [], n = 0;
                            var iModify = sector.iModify, iModifyLimit = sector.iModify + sector.cModify;
                            while (iModify < iModifyLimit) {
                                mods[n++] = sector['data'][iModify++];
                            }
                            deltas[i++] = [iCylinder, iHead, iSector, sector.iModify, mods];
                        }
                    }
                }
            }
        }
        if (DEBUG) {
            this.printf("save(\"%s\"): saved %d change(s)\n", this.sDiskName, (deltas.length - 1));
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
     * @this {DiskPDP11}
     * @param {Array} deltas
     * @returns {number} 0 if no changes applied, -1 if an error occurred, otherwise the number of sectors modified
     */
    restore(deltas)
    {
        /*
         * If deltas is undefined, that's not necessarily an error;  the controller may simply be (re)initializing
         * itself (although neither controller should be calling restore() under those conditions anymore).
         */
        var nChanges = 0;
        var sReason = "unsupported restore format";
        /*
         * I originally added a check for aDiskData here on the assumption that if there was an error loading
         * a disk image, we will have already notified the user, so any additional errors about differing checksums,
         * failure to restore the disk state, etc, would just be annoying.  HOWEVER, HDC will create an empty disk
         * image if its initialization code discovers that no disk was loaded earlier (see verifyDrive).  So while
         * checking aDiskData is still a good idea, be aware that it won't necessarily avoid redundant error messages
         * (at least in the case of HDC).
         */
        if (deltas && deltas.length > 0) {

            var i = 0;
            var aDiskInfo = deltas[i++];

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
                     * between local disks that are mounted via build() and the same disks that are "remounted"
                     * later by this code; the former has the correct checksum, while the latter has a null checksum.
                     *
                     * As you can see below, we currently deal with this by simply ignoring null checksums....
                     */
                }
                /*
                 * v1.01 failed to indicate an error if either one of these failure conditions occurred.  Although maybe that's
                 * just as well, since v1.01 also failed to properly deal with situations where the user mounted different diskette(s)
                 * prior to exiting (hopefully fixed in v1.02).
                 */
                else if (aDiskInfo[1] != null && this.dwChecksum != null && aDiskInfo[1] != this.dwChecksum) {
                    sReason = "original checksum (" + aDiskInfo[1] + ") differs from current checksum (" + this.dwChecksum + ")";
                    nChanges = -2;
                }
                /*
                 * Checksum is more important than disk path, and for now, I want the flexibility to move disk images.
                 *
                else if (aDiskInfo[0] != this.sDiskPath) {
                    sReason = "original path '" + aDiskInfo[0] + "' differs from current path '" + this.sDiskPath + "'";
                    nChanges = -1;
                }
                 */
            }

            if (!this.aDiskData.length) nChanges = -1;

            while (i < deltas.length && nChanges >= 0) {
                var m = 0;
                var mod = deltas[i++];
                var iCylinder = mod[m++];
                var iHead = mod[m++];
                var iSector = mod[m++];
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
                var iModify = mod[m++];
                var mods = mod[m++];
                var iModifyLimit = iModify + mods.length;
                var sector = this.aDiskData[iCylinder][iHead][iSector];
                if (!sector) continue;
                /*
                 * Since write() now deals with empty/partial sectors, we no longer need to completely "inflate"
                 * the sector prior to applying modifications.  So let's just make sure that the sector is "inflated"
                 * up to iModify.
                 */
                var idw = sector['data'].length;
                while (idw < iModify) {
                    sector['data'][idw++] = sector['pattern'];
                }
                var n = 0;
                sector.iModify = iModify;
                sector.cModify = mods.length;
                while (iModify < iModifyLimit) {
                    sector['data'][iModify++] = mods[n++];
                }
                nChanges++;
            }
        }

        if (nChanges < 0) {
            /*
             * We're suppressing checksum messages for the general public for now....
             */
            if (DEBUG || nChanges != -2) {
                this.controller.printf(MESSAGE.NOTICE, "Unable to restore disk \"%s\": %s\n", this.sDiskName, sReason);
            }
        } else {
            if (DEBUG) {
                this.printf("restore(\"%s\"): restored %d change(s)\n", this.sDiskName, nChanges);
            }
        }
        return nChanges;
    }

    /**
     * convertToJSON(fFormatted)
     *
     * We perform some RegExp massaging on the JSON data to eliminate unnecessary properties
     * (eg, 'length' values of 512, 'pattern' values of 0, since those are defaults).
     *
     * In addition, we first check every sector to see if it can be "deflated".  Sectors that were
     * initially "deflated" should remain that way unless/until they were modified, so technically,
     * we could call deflateSector() just for modified sectors, but this isn't a common operation,
     * so it doesn't hurt to check every sector.
     *
     * @this {DiskPDP11}
     * @param {boolean} [fFormatted]
     * @returns {string} containing the entire disk image as JSON-encoded data
     */
    convertToJSON(fFormatted)
    {
        var s, pba = 0, sector, sectorLast;

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
         * Eliminate unnecessary default properties (eg, 'length' values of 512, 'pattern' values of 0).
         */
        s = s.replace(/,"length":512/g, "").replace(/,"pattern":0/g, "");

        /*
         * I don't really want to strip quotes from disk image property names, since I would have to put them
         * back again during mount() -- or whenever JSON.parse() is used instead of eval().  But I still remove
         * them temporarily, so that any remaining property names (eg, "iModify", "cModify", "fDirty") can
         * easily be stripped out, by virtue of their being the only quoted properties left.  We then "requote"
         * all the property names that remain.
         */
        s = s.replace(/"(sector|length|data|pattern)":/g, "$1:");

        /*
         * The next line will remove any other numeric or boolean properties that were added at runtime, although
         * they may have completely different ("minified") names if the code has been compiled.
         */
        s = s.replace(/,"[^"]*":([0-9]+|true|false)/g, "");
        s = s.replace(/(sector|length|data|pattern):/g, "\"$1\":");

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
     * @this {DiskPDP11}
     * @param {Object} sector
     */
    deflateSector(sector)
    {
        var adw = sector['data'];
        var cdw = adw.length;
        if ((cdw << 2) == sector['length']) {
            var idw = cdw - 1;
            var dwPattern = adw[idw], cDupes = 0;
            while (idw--) {
                if (adw[idw] !== dwPattern) break;
                cDupes++;
            }
            if (cDupes++) {
                adw.length = cdw - cDupes;
                sector['pattern'] = dwPattern;
            }
        }
    }

    /**
     * dumpSector(sector, pba, sDesc)
     *
     * @this {DiskPDP11}
     * @param {Object} sector (returned from a previous seek)
     * @param {number} [pba]
     * @param {string} [sDesc]
     * @returns {string}
     */
    dumpSector(sector, pba, sDesc)
    {
        var sDump = "";
        if (DEBUG && sector) {
            if (pba != null) sDump += "sector " + pba + (sDesc? (" for " + sDesc) : "") + ':';
            var sBytes = "", sChars = "";
            var cbSector = sector['length'];
            var cdwData = sector['data'].length;
            var dw = 0;
            for (var i = 0; i < cbSector; i++) {
                if ((i % 16) === 0) {
                    if (sDump) sDump += sBytes + ' ' + sChars + '\n';
                    sDump += StrLib.toHex(i, 4) + ": ";
                    sBytes = sChars = "";
                }
                if ((i % 4) === 0) {
                    var idw = i >> 2;
                    dw = (idw < cdwData? sector['data'][idw] : sector['pattern']);
                }
                var b = dw & 0xff;
                dw >>>= 8;
                sBytes += StrLib.toHex(b, 2) + (i % 16 == 7? "-" : " ");
                sChars += (b >= 32 && b < 128? String.fromCharCode(b) : ".");
            }
            if (sBytes) sDump += sBytes + ' ' + sChars;
        }
        return sDump;
    }
}

/*
 * A global disk count, used to form unique Disk component IDs (totally optional; for debugging purposes only)
 */
DiskPDP11.nDisks = 0;
