/**
 * @fileoverview Node API replacements
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

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
            return sFile;
        },
        readFileSync: function(sFile, encoding = "utf8") {
            console.log("FileLib.readFileSync(" + sFile + "): unimplemented");
        },
        setRootDir(sRoot, sHome, fLocalDisks) {
            node.rootDir = sRoot;
            node.homeDir = sHome;
            globals.window['LOCALDISKS'] = fLocalDisks;
        }
    },
    fs: {
        chmodSync: function(sFile, mode) {
            console.log("fs.chmodSync(" + sFile + "): unimplemented");
        },
        existsSync: function(sFile) {
            return sFile.indexOf(node.rootDir) == 0;
        },
        readdirSync: function(sDir) {
            return [];
        },
        readFile: function(sFile, encoding) {
            console.log("fs.readFile(" + sFile + "): unimplemented");
        },
        readFileSync: function(sFile, encoding) {
            console.log("fs.readFileSync(" + sFile +"): unimplemented");
        },
        statSync: function(sFile) {
            return {
                isDirectory: function() {
                    return !sFile.match(/\.[^\/]+$/);
                }
            };
        },
        unlinkSync: function(sFile) {
            console.log("fs.unlinkSync(" + sFile + "): unimplemented");
        },
        writeFileSync: function(sFile, data) {
            console.log("fs.writeFileSync(" + sFile + "): unimplemented");
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
            return i >= 0? s.slice(0, i) : s;
        },
        join: function(...args) {
            let s = args.join("/").replace(/([^:]\/)\//g, "$1");
            do {
                let t = s.replace(/\/[^\/.]+\/\.\./, "");
                if (t == s) break;
                s = t;
            } while (true);
            return s;
        },
        resolve: function(s) {
            return node.homeDir;
        }
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
        "exit": function() {
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
