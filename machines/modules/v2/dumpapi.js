/**
 * @fileoverview Disk APIs, as defined by diskdump.js and consumed by disk.js
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * Our "DiskDump API", such as it was, used to look like:
 *
 *      http://pcjs.org/bin/convdisk.php?disk=/disks/pc/dos/ibm/2.00/PCDOS200-DISK1.json&format=img
 *
 * To make it (a bit) more "REST-like", the above request now looks like:
 *
 *      https://www.pcjs.org/api/v1/dump?disk=/disks/pc/dos/ibm/2.00/PCDOS200-DISK1.json&format=img
 *
 * Similarly, our "FileDump API" used to look like:
 *
 *      http://pcjs.org/bin/convrom.php?rom=/devices/pc/rom/5150/1981-04-24/PCBIOS-REV1.rom&format=json
 *
 * and that request now looks like:
 *
 *      https://www.pcjs.org/api/v1/dump?file=/devices/pc/rom/5150/1981-04-24/PCBIOS-REV1.rom&format=json
 *
 * I don't think it makes sense to avoid "query" parameters, because blending the path of a disk image with the
 * the rest of the URL would be (a) confusing, and (b) more work to parse.
 */
const DumpAPI = {
    ENDPOINT:       "/api/v1/dump",
    QUERY: {
        DIR:        "dir",      // value is path of a directory (DiskDump only)
        DISK:       "disk",     // value is path of a disk image (DiskDump only)
        FILE:       "file",     // value is path of a ROM image file (FileDump only)
        IMG:        "img",      // alias for DISK
        PATH:       "path",     // value is path of a one or more files (DiskDump only)
        FORMAT:     "format",   // value is one of FORMAT values below
        COMMENTS:   "comments", // value is either "true" or "false"
        DECIMAL:    "decimal",  // value is either "true" to force all numbers to decimal, "false" or undefined otherwise
        MBHD:       "mbhd",     // value is hard drive size in Mb (formerly "mbsize") (DiskDump only) (DEPRECATED)
        SIZE:       "size"      // value is target disk size in Kb (supersedes "mbhd") (DiskDump only)
    },
    FORMAT: {
        JSON:       "json",     // default
        JSON_GZ:    "gz",       // gzip is currently used ONLY for compressed JSON
        DATA:       "data",     // same as "json", but built without JSON.stringify() (DiskDump only)
        HEX:        "hex",      // deprecated
        OCTAL:      "octal",    // displays data as octal words
        BYTES:      "bytes",    // displays data as hex bytes; normally used only when comments are enabled
        WORDS:      "words",    // displays data as hex words; normally used only when comments are enabled
        LONGS:      "longs",    // displays data as dwords
        IMG:        "img",      // returns the raw disk data (ie, using a Buffer object) (DiskDump only)
        ROM:        "rom"       // returns the raw file data (ie, using a Buffer object) (FileDump only)
    }
};

/*
 * Because we use an overloaded API endpoint (ie, one that's shared with the FileDump module), we must
 * also provide a list of commands which, when combined with the endpoint, define a unique request.
 */
DumpAPI.asDiskCommands = [DumpAPI.QUERY.DIR, DumpAPI.QUERY.DISK, DumpAPI.QUERY.PATH];
DumpAPI.asFileCommands = [DumpAPI.QUERY.FILE];

export default DumpAPI;
