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
    process: globals.node.process || {
        argv: function(parms) {
            let argv = [];
            let keys = Object.keys(parms);
            for (let i = 0; i < keys.length; i++) {
                argv.push(keys[i] + '=' + parms[keys[i]]);
            }
            return argv;
        }(WebIO.getURLParms())
    }
};

node.import = async function(...modules) {
    if (globals.browser) {
        if (modules.indexOf("json5") >= 0) {
            node.json5 = {
                parse: function(s) {
                    return eval('(' + s + ')');
                }
            };
        }
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
