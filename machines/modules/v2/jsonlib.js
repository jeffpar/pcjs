/**
 * @fileoverview JSON Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import { COMPILED } from "./defines.js";

/**
 * @class JSONLib
 */
export default class JSONLib {
    /**
     * parseDiskettes(aDiskettes, library, propPath, server, hostName, limits)
     *
     * @param {Array} aDiskettes
     * @param {Object} library
     * @param {string} [propPath]
     * @param {string} [server]
     * @param {string} [hostName]
     * @param {Array} [limits] (optional drive limits from FDC.getDriveLimits())
     */
    static parseDiskettes(aDiskettes, library, propPath = "/pcx86", server = "", hostName = "", limits = [])
    {
        for (let category in library) {
            if (category[0] == '@') {
                if (category == '@server') server = library[category];
                continue;
            }
            let group = library[category];
            let products = group['@products'];
            if (products) {
                JSONLib.parseDiskettes(aDiskettes, products, propPath + '/' + category, server, hostName, limits);
                continue;
            }
            let versions = group['@versions'];
            if (versions) {
                if (group['@server']) server = group['@server'];
                for (let version in versions) {
                    let release = versions[version];
                    let media = release['@media'];
                    if (!media) continue;
                    for (let i = 0; i < media.length; i++) {
                        let item = media[i];
                        if (!item['@diskette']) continue;
                        /**
                         * One advantage of the new JSON library manifest is that it gives us more information about the
                         * available diskettes before loading any of them.  For example, if the drives support only one head,
                         * we can avoid including any diskette whose '@format' is "PC320K", "PC360K", etc; and if the drives
                         * don't support 80 tracks, we can skip any "PC1200K" and "PC1440K" diskettes.
                         *
                         * Unfortunately, either of those drive criteria must be true for ALL installed drives, due to the way
                         * our UI works, which displays only one list of diskettes for all drives.  But that's reasonable,
                         * since most (if not all) of our machines have matching diskette drives.
                         *
                         * NOTE: It's best not to check for specific '@format' values, because there were many unusual diskette
                         * formats.
                         *
                         * Standard PC formats included:
                         *
                         *      PC160K
                         *      PC180K
                         *      PC320K
                         *      PC360K
                         *      PC720K
                         *      PC1200K
                         *      PC1440K
                         *
                         * Non-standard PC formats included:
                         *
                         *      PC1840K (eg, XDF diskettes that shipped with PC DOS 7.0)
                         *      PC1680K (eg, DMF diskettes that shipped with Windows 95)
                         *
                         * and this list should certainly NOT be considered exhaustive.  Non-PC formats would include things like
                         * game disks with unusual track formats, assorted UNIX distribution diskettes, etc; for those disks,
                         * we haven't come up with a format nomenclature yet, so no '@format' will be specified.  Any disk of unknown
                         * format should always be included.
                         */
                        let format = item['@format'];
                        if (format && limits.length) {
                            let match = format.match(/^PC([0-9]+)K$/);
                            if (match) {
                                let size = +match[1];
                                if (limits[0] == 1 && size > 180 || limits[1] == 40 && size > 360) {
                                    continue;
                                }
                            }
                        }
                        let name = item['@title'];
                        if (!name) {
                            name = release['@title'];
                            if (!name) {
                                name = group['@title'];
                                if (version) name += ' ' + version;
                            }
                            if (media.length > 1) {
                                name += " (Disk " + (i + 1) + ")";
                            }
                        }
                        let path = item['@link'] || (server + propPath + '/' + category + '/' + (version? version + '/' : '') + item['@diskette']);
                        let diskette = {
                            'name': name,
                            'path': path
                        };
                        /**
                         * The FDC calls us with drive limits, and all it cares about is the 'name' and 'path' of each diskette,
                         * so we use those two facts to limit what each diskette object returns.  Other callers, like the DiskImage
                         * utility, want ALL the diskette details.
                         *
                         * All these optional properties are either strings or booleans, except for '@hardware', which is an object
                         * that may contain:
                         *
                         *      'url':      URL of the preferred machine to run the software (eg, "/machines/pcx86/ibm/5150/cga/")
                         *      'config':   a specific configuration file (eg, "/machines/pcx86/ibm/5170/vga/2048kb/machine.xml")
                         *      'drives':   one of more hard drive configs (eg, "[{name:\"20Mb Hard Disk\",type:2,path:\"/harddisks/pcx86/20mb/PCDOS330-WIN310-VGA.json\"}]")
                         *      'options':  assorted hardware options (eg, "mouse")
                         *      'autoType': if present, overrides any '@autoType' set for the software
                         *
                         * The @hardware 'url' parameter is currently only used by /_includes/explorer/software.html, which will craft
                         * a link to the specified machine URL with the first software diskette loaded into one of the disk drives; however,
                         * that feature isn't used much anymore, since we use "diskimage.js --all --checkpage --rebuild" to build dedicated
                         * pages for most every piece of software.
                         *
                         * The 'url' property may take on significance again if we ever provide some kind of UI for launching software
                         * EITHER with a generic machine OR on a dedicated page.
                         */
                        if (!COMPILED) {
                            let title = release['@title'] || group['@title'];
                            if (library['@title'] && title.indexOf(library['@title']) < 0 && library['@title'].indexOf("Misc") < 0) {
                                title = library['@title'] + ' ' + title;
                            }
                            let archive = item['@archive'];
                            let label = item['@label'];
                            let args = item['@args'];
                            let kryoflux = item['@kryoflux'];
                            let normalize = item['@normalize'];
                            let hidden = group['@hidden'] || release['@hidden'];
                            let bootable = release['@bootable'];
                            let autoType = release['@autoType'];
                            let hardware = release['@hardware'];
                            let demos = release['@demos'];
                            let source = item['@source'];
                            let documents = release['@documents'];
                            let info = item['@diskInfo'];
                            if (title) diskette['title'] = title;                       // the software title (as opposed to the diskette name)
                            if (format) diskette['format'] = format;                    // eg, "PC360K"
                            if (archive) diskette['archive'] = archive;                 // eg, "folder", or the name of a specific ".img" file, etc
                            if (label) diskette['label'] = label;                       // the volume label to use (eg, for a diskette generated from a folder)
                            if (args) diskette['args'] = args;                          // DiskImage command-line arguments
                            if (kryoflux) diskette['kryoflux'] = true;                  // true if a Kryoflux dump is available
                            if (normalize) diskette['normalize'] = true;                // true if a line-endings in known text files should be "normalized"
                            if (hidden) diskette['hidden'] = true;                      // true if hidden from the Explorer (still in the library)
                            if (bootable) diskette['bootable'] = true;                  // true if diskette marked bootable
                            if (autoType) diskette['autoType'] = autoType;              // optional custom autoType string
                            if (hardware) diskette['hardware'] = hardware;              // hardware configuration
                            if (demos) diskette['demos'] = demos;                       // names, if any, of pages created to demo the disk(s)
                            if (source) diskette['source'] = source;                    // source (eg, URL) of our copy of the media
                            if (documents) diskette['documents'] = documents;
                            if (info) diskette['info'] = info;
                        }
                        if (!item['@localonly'] || hostName == "localhost") {
                            aDiskettes.push(diskette);
                        }
                    }
                }
                continue;
            }
            if (category[0] == '@') continue;
            JSONLib.parseDiskettes(aDiskettes, group, propPath + '/' + category, group['@server'] || server, hostName, limits);
        }
    }
}
