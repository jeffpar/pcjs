/**
 * @fileoverview PCjs Save Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StrLib from "./strlib.js";
import WebLib from "./weblib.js";
import Component from "./component.js";
import { APPVERSION, DEBUG, globals } from "./defines.js";

/**
 * savePC(idMachine, sPCJSFile, callback)
 *
 * @param {string} idMachine
 * @param {string} sPCJSFile
 * @param {function(Object)} [callback]
 * @returns {boolean} true if successful, false if error
 */
function savePC(idMachine, sPCJSFile, callback)
{
    let cmp = /** @type {Computer} */ (Component.getComponentByType("Computer", idMachine));
    let dbg = false; // /** @type {Debugger} */ (Component.getComponentByType("Debuggerx86", idMachine));
    if (cmp) {
        let sState = cmp.powerOff(true);
        let sParms = cmp.saveMachineParms();
        if (!sPCJSFile) {
            if (DEBUG) {
                sPCJSFile = "/machines/pcx86/releases/" + APPVERSION + "/pcx86-uncompiled.js";
            } else {
                sPCJSFile = "/machines/pcx86/releases/" + APPVERSION + "/pcx86" + (dbg? "-dbg" : "") + ".js";
            }
        }
        if (callback && callback({ state: sState, parms: sParms })) return true;
        WebLib.getResource(sPCJSFile, null, true, function(sURL, sResponse, nErrorCode) {
            downloadCSS(sURL, sResponse, nErrorCode, [idMachine, StrLib.getBaseName(sPCJSFile, true), sParms, sState]);
        });
        return true;
    }
    Component.alertUser("Unable to identify machine '" + idMachine + "'");
    return false;
}

/**
 * downloadCSS(sURL, sPCJS, nErrorCode, aMachineInfo)
 *
 * @param {string} sURL
 * @param {string} sPCJS
 * @param {number} nErrorCode
 * @param {Array} aMachineInfo ([0] = idMachine, [1] = sScript, [2] = sParms, [3] = sState)
 */
function downloadCSS(sURL, sPCJS, nErrorCode, aMachineInfo)
{
    if (!nErrorCode && sPCJS) {
        aMachineInfo.push(sPCJS);
        let res = Component.getMachineResources(aMachineInfo[0]);
        let sCSSFile = null;
        for (let sName in res) {
            if (StrLib.endsWith(sName, "components.xsl")) {
                sCSSFile = sName.replace(".xsl", ".css");
                break;
            }
        }
        if (!sCSSFile) {
            /*
             * This is probably a bad idea (ie, allowing downloadPC() to proceed with our stylesheet)...
             */
            downloadPC(sURL, "", 0, aMachineInfo);
        } else {
            WebLib.getResource(sCSSFile, null, true, function(sURL, sResponse, nErrorCode) {
                downloadPC(sURL, sResponse, nErrorCode, aMachineInfo);
            });
        }
        return;
    }
    Component.alertUser("Error (" + nErrorCode + ") requesting " + sURL);
}

/**
 * downloadPC(sURL, sCSS, nErrorCode, aMachineInfo)
 *
 * @param {string} sURL
 * @param {string} sCSS
 * @param {number} nErrorCode
 * @param {Array} aMachineInfo ([0] = idMachine, [1] = sScript, [2] = sParms, [3] = sState, [4] = sPCJS)
 */
function downloadPC(sURL, sCSS, nErrorCode, aMachineInfo)
{
    let matchScript, sXMLFile, sXSLFile;
    let idMachine = aMachineInfo[0], sScript = aMachineInfo[1], sPCJS = aMachineInfo[4];

    /*
     * sPCJS is supposed to contain the entire PCjs script, which has been wrapped with:
     *
     *      (function(){...
     *
     * at the top and:
     *
     *      ...})()
     *
     * at the bottom, thanks to the following Closure Compiler option:
     *
     *      --output_wrapper "(function(){%output%})()"
     *
     * NOTE: There may also be a source map comment appended to the script, which we now ignore; eg:
     *
     *      //# sourceMappingURL=/machines/pcx86/releases/1.76/pcx86.js.map
     *
     * Immediately inside that wrapping, we want to embed all the specified machine's resources, using:
     *
     *      var resources = {"xml": "...", "xsl": "...", ...};
     *
     * Note that the "resources" variable has been added to our externs.js, to prevent it from being renamed
     * by the Closure Compiler.
     */
    matchScript = sPCJS.match(/^(\s*\(function\(\){)([\s\S]*)(}\)\(\);?)/);
    if (!matchScript) {
        /*
         * If the match failed, we assume that a DEBUG (uncompiled) script is being used,
         * so we'll provide a fake match that should work with whatever script was provided.
         */
        if (DEBUG) {
            matchScript = [sPCJS, "", sPCJS, ""];
        } else {
            Component.alertUser("Unsupported script");
            return;
        }
    }

    let res = Component.getMachineResources(idMachine), resNew = {}, sName;
    for (sName in res) {
        let data = res[sName];
        let sExt = StrLib.getExtension(sName);
        if (sExt == "xml") {
            /*
             * Look through this resource for <disk> entries whose paths do not appear as one of the
             * other machine resources, and remove those entries.
             */
            let matchDisk, reDisk = /[ \t]*<disk [^>]*path=(['"])(.*?)\1.*?<\/disk>\n?/g;
            while ((matchDisk = reDisk.exec(res[sName]))) {
                let path = matchDisk[2];
                if (path) {
                    if (res[path]) {
                        Component.printf("recording disk: \"%s\"\n", path);
                    } else {
                        data = data.replace(matchDisk[0], "");
                    }
                }
            }
            sXMLFile = sName = StrLib.getBaseName(sName);
        }
        else if (sExt == "xsl") {
            sXSLFile = sName = StrLib.getBaseName(sName);
        }
        Component.printf("saving resource: \"%s\" (%d bytes)\n", sName, data.length);
        resNew[sName] = data;
    }

    if (sCSS) {
        resNew[sName = 'css'] = sCSS;
        Component.printf("saving resource: \"%s\" (%d bytes)\n", sName, sCSS.length);
    }

    if (aMachineInfo[2]) {
        let sParms = resNew[sName = 'parms'] = aMachineInfo[2];
        Component.printf("saving resource: \"%s\" (%d bytes)\n", sName, sParms.length);
    }

    if (aMachineInfo[3]) {
        let sState = resNew[sName = 'state'] = aMachineInfo[3];
        Component.printf("saving resource: \"%s\" (%d bytes)\n", sName, sState.length);
    }

    if (sXMLFile && sXSLFile) {
        let sResources = JSON.stringify(resNew);

        sScript += ".js";
        sPCJS = matchScript[1] + "var resources=" + sResources + ";" + matchScript[2] + matchScript[3];
        Component.printf("saving machine: \"%s\" (%d bytes)\n", idMachine, sPCJS.length);

        /*
         * I don't recall exactly why I did this, because I just tested FireFox with copyright symbols intact,
         * and it seems to work fine.  And unfortunately, if we print any copyright strings containing the HTML
         * entity, the entity doesn't get translated prior to output.  So if it turns out we DO need this,
         * it's better to replace with the old-fashioned ASCII version.
         *
         *      sPCJS = sPCJS.replace(/\u00A9/g, "(C)");    // "&#xA9;" or "&copy;"
         */

        let sAlert = WebLib.downloadFile(sPCJS, "javascript", false, sScript);

        sAlert += ', copy it to your web server as "' + sScript + '", and then add the following to your web page:\n\n';
        sAlert += '<div id="' + idMachine + '"></div>\n';
        // sAlert += '...\n';
        sAlert += '<script src="' + sScript + '"></script>\n';

        /*
         * embedMachine() would use these defaults whenever the XML file was omitted, but that changed with the
         * introduction of JSON-based configs, so when using XML-based configs, those parameters must be explicit.
         *
         *      if (sXMLFile == "machine.xml" && sXSLFile == "components.xsl") {
         *          sXMLFile = sXSLFile = "";
         *      }
         */
        sXMLFile = ',"' + sXMLFile + '"';
        sXSLFile = ',"' + sXSLFile + '"';

        sAlert += '<script>embedPCx86("' + idMachine + '"' + sXMLFile + sXSLFile + ');</script>\n\n';
        sAlert += 'The machine should appear where the <div> is located.';
        Component.alertUser(sAlert);
        return;
    }
    Component.alertUser("This feature is not currently available for machines created directly from XML files.");
}

/**
 * Prevent the Closure Compiler from renaming functions we want to export, by adding them
 * as (named) properties of a global object.
 */
globals.window['savePC'] = savePC;
