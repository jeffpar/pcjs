/**
 * @fileoverview Command-line interface to disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs         from "fs";
import crypto     from "crypto";
import glob       from "glob";
import path       from "path";
import DataBuffer from "./nodebuffer.js";
import DiskImage  from "./diskimage.js";
import StdLib     from "../../modules/stdlib.js";
import Device     from "../../../machines/modules/device.js";
import JSONLib    from "../../../machines/modules/jsonlib.js";

let device = new Device("node");
let printf = device.printf.bind(device);
let stdlib = new StdLib();
let rootDir;

/**
 * getHash(ab, type)
 *
 * @param {Array.<number>} ab (array of bytes)
 * @param {string} [type] (eg, "md5")
 * @returns {string}
 */
function getHash(ab, type = "md5")
{
    let db = new DataBuffer(ab);
    return crypto.createHash(type).update(db.buffer).digest('hex');
}

/**
 * readDisk(sFile, forceBPB, sectorIDs, sectorErrors, suppData)
 *
 * @param {string} sFile
 * @param {boolean} [forceBPB]
 * @param {Array|string} [sectorIDs]
 * @param {Array|string} [sectorErrors]
 * @param {string} [suppData] (eg, supplementary disk data that can be found in such files as: /software/pcx86/app/microsoft/word/1.15/debugger/index.md)
 * @returns {DiskImage|null}
 */
function readDisk(sFile, forceBPB, sectorIDs, sectorErrors, suppData)
{
    let db, di
    try {
        let diskName = path.basename(sFile);
        di = new DiskImage(device, diskName);
        if (diskName.endsWith(".json")) {
            db = fs.readFileSync(sFile, "utf8");
            di.buildDiskFromJSON(db);
        }
        else {
            db = new DataBuffer(fs.readFileSync(sFile));
            if (diskName.endsWith(".psi")) {
                di.buildDiskFromPSI(db);
            } else {
                di.buildDiskFromBuffer(db, forceBPB, sectorIDs, suppData);
            }
        }
    } catch(err) {
        printf("error: %s\n", err.message);
        return null;
    }
    return di;
}

/**
 * readFile(sFile)
 *
 * @param {string} [sFile]
 * @returns {string|undefined}
 */
function readFile(sFile)
{
    let sData;
    if (sFile) {
        try {
            if (fs.existsSync(sFile)) {
                sData = fs.readFileSync(sFile, "utf8");
            }
        } catch(err) {
            printf("error: %s\n", err.message);
        }
    }
    return sData;
}

/**
 * readJSON(sFile)
 *
 * @param {string} sFile
 * @returns {Object|undefined}
 */
function readJSON(sFile)
{
    let data, json;
    try {
        data = fs.readFileSync(sFile, "utf8");
        json = JSON.parse(data);
    } catch(err) {
        printf("error: %s\n", err.message);
    }
    return json;
}

/**
 * writeDisk(sFile, di, fOverwrite)
 *
 * @param {string} sFile
 * @param {DiskImage} di
 * @param {boolean} [fOverwrite]
 */
function writeDisk(sFile, di, fOverwrite)
{
    let diskName = path.basename(sFile);
    if (!fs.existsSync(sFile) || fOverwrite) {
        let data;
        if (sFile.endsWith(".json")) {
            data = di.getJSON();
        } else {
            let db = new DataBuffer(di.getSize());
            if (di.getData(db)) data = db.buffer;
        }
        if (data) {
            fs.writeFileSync(sFile, data);
        } else {
            printf("%s not written, no data\n", diskName);
        }
    } else {
        printf("%s exists, use --overwrite to replace\n", diskName);
    }
}

/**
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
function main(argc, argv)
{
    Device.DEBUG = !!argv['debug'];
    rootDir = path.join(path.dirname(argv[0]), "../../..");

    if (Device.DEBUG) {
        printf("diskdump v%s\n", Device.VERSION);
        device.setMessages(Device.MESSAGE.DISK + Device.MESSAGE.FILE, true);
    }
    device.setMessages(Device.MESSAGE.DISK + Device.MESSAGE.WARN + Device.MESSAGE.ERROR, true);

    let input = argv['disk'];
    if (input) {
        let di = readDisk(input, argv['forceBPB'], argv['sectorID'], argv['sectorError'], readFile(argv['supp']));
        if (di) {
            if (argv['list']) {
                let list = di.getFileListing();
                printf(list);
            }
            printf("disk size: %d\n", di.getSize());
            let output = argv['output'];
            if (output) writeDisk(output, di, argv['overwrite']);
        }
        return;
    }

    if (argv['dumpall']) {
        let family = "/pcx86";
        let cConfigs = 0, cManifests = 0, cFiles = 0;
        let asFiles = glob.sync(path.join(rootDir, "/configs" + family + "/*.json"));
        asFiles.forEach((sFile) => {
            let library = readJSON(sFile);
            if (library) {
                let aDiskettes = [];
                JSONLib.parseDiskettes(aDiskettes, library, "/pcx86", "/diskettes");
                aDiskettes.forEach((diskette) => {
                    let sFile = path.join(rootDir, diskette.path);
                    let di = readDisk(sFile, true);
                    if (di) {
                        let manifest = di.getFileManifest(getHash, "md5");
                        if (argv['dumpall'] == "md5") {
                            manifest.forEach((file) => {
                                if (file['md5']) {
                                    printf("%s  %-12s  %s  %s:%s\n", file['md5'], file.name, file.date, di.diskName, file.path);
                                } else {
                                    device.assert(file.size == 0);
                                }
                            });
                        }
                        else if (argv['verbose']) {
                            printf("manifest for %s: %2j\n", diskette.path, manifest);
                        } else {
                            printf("manifest for %s contains %d file(s)\n", diskette.path, manifest.length);
                        }
                        cFiles += manifest.length;
                        cManifests++;
                    }
                });
            }
            cConfigs++;
        });
        printf("%d config(s), %d manifest(s), %d files(s)\n", cConfigs, cManifests, cFiles);
        return;
    }

    printf("nothing to do\n");
}

main(...stdlib.getArgs());
