/**
 * @fileoverview Node API replacements
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DataBuffer from "../../machines/modules/v2/databuffer.js";
import PCFS from "../../machines/modules/v2/pcfs.js";
import WebIO from "../../machines/modules/v3/webio.js";
import { globals } from "../../machines/modules/v3/defines.js";

let node = {
    remote: false,
    rootDir: "",
    homeDir: "",
    FileLib: {
        getLocalPath: function(sFile) {
            let root = node.rootDir;
            let match = sFile.match(/^\/(disks\/|)(machines|software|tools|diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|cdroms|private)(\/.*)$/);
            if (match) {
                if (match[2] != "machines" && match[2] != "software" && match[2] != "tools") {
                    root = "https://" + match[2] + ".pcjs.org";
                    match[2] = "";
                }
                sFile = node.path.join(root, match[2], match[3]);
            }
            else if (sFile.indexOf(root) && !PCFS.isPCFS(sFile)) {
                sFile = node.path.join(PCFS.root, sFile);
            }
            return sFile;
        },
        readFileSync: function(sFile, encoding = "utf8") {
            let data = node.fs.readFileSync(sFile, encoding);
            if (!encoding) data = new DataBuffer(data);
            return data;
        },
        setRootDir(sRoot, sHome, fLocalDisks) {
            node.rootDir = sRoot;
            node.homeDir = sHome;
            globals.window['LOCALDISKS'] = fLocalDisks;
        }
    },
    child_process: {
    },
    fs: {
        chmodSync: function(sFile, mode, attr) {
            let item = PCFS.getItem(sFile);
            if (item) {
                PCFS.setItem(item, undefined, undefined, attr);
            }
        },
        existsSync: function(sFile) {
            return !!PCFS.getItem(sFile) || sFile.indexOf(node.rootDir) == 0;
        },
        mkdirSync: function(sDir, options) {
            if (PCFS.isPCFS(sDir)) {
                PCFS.getItem(sDir, true, true);
            }
        },
        readdirSync: function(sDir) {
            let item = PCFS.getItem(sDir);
            if (item && item.files) {
                return item.files.map(function(item) {
                    return item.name;
                });
            }
            return [];
        },
        readFile: function(sFile, encoding, callback) {
            if (PCFS.isPCFS(sFile)) {
                let item = PCFS.getItem(sFile);
                if (item) {
                    if (!item.files) {
                        let data = item.data;
                        if (encoding) {
                            // If there's an encoding, we assume it's "utf8", which is the default for TextDecoder()
                            data = new TextDecoder().decode(data);
                        }
                        callback(null, data);
                    } else {
                        callback(new Error(sFile + " is a directory"), null);
                    }
                } else {
                    callback(new Error(sFile + " does not exist"), null);
                }
                return;
            }
            console.log("fs.readFile(" + sFile + "): unimplemented");
        },
        readFileSync: function(sFile, encoding) {
            let data;
            node.fs.readFile(sFile, encoding, function(err, result) {
                if (err) throw err;
                data = result;
            });
            return data;
        },
        statSync: function(sFile) {
            if (PCFS.isPCFS(sFile)) {
                let item = PCFS.getItem(sFile);
                return {
                    attr: item.attr,            // PCFS-specific
                    size: item.size,
                    mtime: item.date,
                    isDirectory: function() {
                        return !!(item && item.files);
                    }
                };
            } else {
                return {
                    isDirectory: function() {
                        return !sFile.match(/\.[^\/]+$/);
                    }
                };
            }
        },
        unlinkSync: function(sFile) {
            PCFS.getItem(sFile, false);
        },
        utimesSync: function(sFile, atime, mtime) {
            let item = PCFS.getItem(sFile);
            if (item) {
                PCFS.setItem(item, undefined, mtime);
            }
        },
        writeFileSync: function(sFile, data) {
            let item = PCFS.getItem(sFile, true);
            if (item) {
                PCFS.setItem(item, data);
            }
        }
    },
    json5: {
        parse: function(s) {
            return eval('(' + s + ')');
        }
    },
    path: {
        basename: function(s, ext) {
            let name = "";
            let match = s.match(/([^\/\\]+)\/?$/);
            if (match) {
                name = match[1];
                if (ext) name = name.replace(ext, '');
            }
            return name;
        },
        dirname: function(s) {
            let i = s.lastIndexOf('/');
            return i >= 0? s.slice(0, i) : "";
        },
        join: function(...args) {
            let s = "";
            for (let arg of args) {
                if (!arg || arg == '.') continue;
                if (s) s += "/";
                s += arg;
            }
            do {
                let t = s.replace(/\/[^\/.]+\/\.\./, "").replace(/([^:]\/)\//g, "$1");
                if (t == s) break;
                s = t;
            } while (true);
            return s;
        },
        parse: function(s) {
            //
            // Example:
            //      path.parse('/home/user/dir/file.txt');
            //
            // Returns:
            // {
            //      root: '/',
            //      dir: '/home/user/dir',
            //      base: 'file.txt',
            //      ext: '.txt',
            //      name: 'file'
            // }
            //
            let ext = "";
            let i = s.lastIndexOf('.');
            if (i >= 0) {
                ext = s.slice(i);
            }
            return { ext };
        },
        resolve: function(s) {
            return node.FileLib.getLocalPath(s);
        },
        sep: '/'
    },
    process: globals.node.process || {
        argv: function(url, parms) {
            let argv = ["browser", url];
            let keys = Object.keys(parms);
            for (let i = 0; i < keys.length; i++) {
                let arg = keys[i];
                if (parms[keys[i]]) {
                    arg = "--" + arg + '=' + parms[keys[i]];
                }
                argv.push(arg);
            }
            return argv;
        }(WebIO.getHostOrigin() + WebIO.getHostPath(), WebIO.getURLParms()),
        chdir: function() {
        },
        cwd: function() {
            return "";
        },
        exit: function() {
        }
    }
};

node.import = async function(...modules) {
    if (globals.browser) {
        node.remote = true;
        return;
    }
    for (let module of modules) {
        let basename = module;
        let match = basename.match(/([^\/]+)\.js$/);
        if (match) {
            basename = match[1];
            module = module.toLowerCase();
        }
        node[basename] = (await import(module)).default;
    }
};

export { node };
