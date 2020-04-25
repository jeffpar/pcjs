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
 * readDisk(sFile, fRead)
 *
 * @param {string} sFile
 * @param {boolean} [fRead]
 * @returns {DiskImage|undefined}
 */
function readDisk(sFile, fRead)
{
    let db, di, baseName;
    try {
        if (sFile.endsWith(".json")) {
            db = fs.readFileSync(sFile, "utf8");
            baseName = path.basename(sFile, ".json")
        } else {
            db = new DataBuffer(fs.readFileSync(sFile));
            baseName = path.basename(sFile, ".img")
        }
        di = new DiskImage(device, db, baseName, fRead);
    } catch(err) {
        printf("error: %s\n", err.message);
    }
    return di;
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
 * writeDisk(sFile, data, fOverwrite)
 *
 * @param {string} sFile
 * @param {Buffer|string} data
 * @param {boolean} [fOverwrite]
 */
function writeDisk(sFile, data, fOverwrite)
{
    if (!fs.existsSync(sFile) || fOverwrite) {
        fs.writeFileSync(sFile, data);
    } else {
        printf("%s exists, use --overwrite to replace\n", path.basename(sFile));
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

    let input = argv['disk'];
    if (input) {
        let di = readDisk(input, argv['list']);
        if (argv['list']) {
            let list = di.getFileListing();
            printf(list);
            let manifest = di.getFileManifest(getHash, "md5");
            printf("manifest: %2j\n", manifest);
        }
        printf("disk size: %d\n", di.getSize());
        let output = argv['output'];
        if (output) {
            let data = di.getJSON();
            writeDisk(output, data, argv['overwrite']);
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
                        if (argv['verbose']) {
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
