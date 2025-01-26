/**
 * @fileoverview PCjs Browser-related Helper Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import PCFS from "./pcfs.js";
import MESSAGE from "./message.js";
import Component from "./component.js";
import ReportAPI from "./reportapi.js";
import { DEBUG, SITEURL, globals } from "./defines.js";

/*
 * According to http://www.w3schools.com/jsref/jsref_obj_global.asp, these are the *global* properties
 * and functions of JavaScript-in-the-Browser:
 *
 * Property             Description
 * ---
 * Infinity             A numeric value that represents positive/negative infinity
 * NaN                  "Not-a-Number" value
 * undefined            Indicates that a variable has not been assigned a value
 *
 * Function             Description
 * ---
 * decodeURI()          Decodes a URI
 * decodeURIComponent() Decodes a URI component
 * encodeURI()          Encodes a URI
 * encodeURIComponent() Encodes a URI component
 * escape()             Deprecated in version 1.5. Use encodeURI() or encodeURIComponent() instead
 * eval()               Evaluates a string and executes it as if it was script code
 * isFinite()           Determines whether a value is a finite, legal number
 * isNaN()              Determines whether a value is an illegal number
 * Number()             Converts an object's value to a number
 * parseFloat()         Parses a string and returns a floating point number
 * parseInt()           Parses a string and returns an integer
 * String()             Converts an object's value to a string
 * unescape()           Deprecated in version 1.5. Use decodeURI() or decodeURIComponent() instead
 *
 * And according to http://www.w3schools.com/jsref/obj_window.asp, these are the properties and functions
 * of the *window* object.
 *
 * Property             Description
 * ---
 * closed               Returns a Boolean value indicating whether a window has been closed or not
 * defaultStatus        Sets or returns the default text in the statusbar of a window
 * document             Returns the Document object for the window (See Document object)
 * frames               Returns an array of all the frames (including iframes) in the current window
 * history              Returns the History object for the window (See History object)
 * innerHeight          Returns the inner height of a window's content area
 * innerWidth           Returns the inner width of a window's content area
 * length               Returns the number of frames (including iframes) in a window
 * location             Returns the Location object for the window (See Location object)
 * name                 Sets or returns the name of a window
 * navigator            Returns the Navigator object for the window (See Navigator object)
 * opener               Returns a reference to the window that created the window
 * outerHeight          Returns the outer height of a window, including toolbars/scrollbars
 * outerWidth           Returns the outer width of a window, including toolbars/scrollbars
 * pageXOffset          Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
 * pageYOffset          Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
 * parent               Returns the parent window of the current window
 * screen               Returns the Screen object for the window (See Screen object)
 * screenLeft           Returns the x coordinate of the window relative to the screen
 * screenTop            Returns the y coordinate of the window relative to the screen
 * screenX              Returns the x coordinate of the window relative to the screen
 * screenY              Returns the y coordinate of the window relative to the screen
 * self                 Returns the current window
 * status               Sets or returns the text in the statusbar of a window
 * top                  Returns the topmost browser window
 *
 * Method               Description
 * ---
 * alert()              Displays an alert box with a message and an OK button
 * atob()               Decodes a base-64 encoded string
 * blur()               Removes focus from the current window
 * btoa()               Encodes a string in base-64
 * clearInterval()      Clears a timer set with setInterval()
 * clearTimeout()       Clears a timer set with setTimeout()
 * close()              Closes the current window
 * confirm()            Displays a dialog box with a message and an OK and a Cancel button
 * createPopup()        Creates a pop-up window
 * focus()              Sets focus to the current window
 * moveBy()             Moves a window relative to its current position
 * moveTo()             Moves a window to the specified position
 * open()               Opens a new browser window
 * print()              Prints the content of the current window
 * prompt()             Displays a dialog box that prompts the visitor for input
 * resizeBy()           Resizes the window by the specified pixels
 * resizeTo()           Resizes the window to the specified width and height
 * scroll()             This method has been replaced by the scrollTo() method.
 * scrollBy()           Scrolls the content by the specified number of pixels
 * scrollTo()           Scrolls the content to the specified coordinates
 * setInterval()        Calls a function or evaluates an expression at specified intervals (in milliseconds)
 * setTimeout()         Calls a function or evaluates an expression after a specified number of milliseconds
 * stop()               Stops the window from loading
 */

/**
 * @class Web
 * @unrestricted
 */
export default class WebLib {
    /**
     * getResource(sURL, type, fAsync, done, progress)
     *
     * Request the specified resource (sURL), and once the request is complete, notify done().
     *
     * If fAsync is true, a done() callback should ALWAYS be supplied; otherwise, you'll have no
     * idea when the request is complete or what the response was.  done() is passed three parameters:
     *
     *      done(sURL, resource, nErrorCode)
     *
     * If nErrorCode is zero, resource should contain the requested data; otherwise, an error occurred.
     *
     * If type is set to a string, that string can be used to control the response format;
     * by default, the response format is plain text, but you can specify "arraybuffer" to request arbitrary
     * binary data, in which case the returned resource will be a ArrayBuffer rather than a string.
     *
     * @param {string} sURL
     * @param {string|Object|null} [type] (object for POST request, otherwise type of GET request)
     * @param {boolean} [fAsync] is true for an asynchronous request; false otherwise (MUST be set for IE)
     * @param {function(string,string,number)|function(string,ArrayBuffer,number)} [done]
     * @param {function(number)} [progress]
     * @returns {Array|null} Array containing [resource, nErrorCode], or null if no response available (yet)
     */
    static getResource(sURL, type = "text", fAsync = false, done, progress)
    {
        let nErrorCode = 0, resource = null, response = null;

        let resources = globals.window['resources'];
        if (typeof resources == 'object' && (resource = resources[sURL])) {
            if (done) done(sURL, resource, nErrorCode);
            return [resource, nErrorCode];
        }
        else if (fAsync && typeof resources == 'function') {
            resources(sURL, function(resource, nErrorCode) {
                if (done) done(sURL, resource, nErrorCode);
            });
            return response;
        }

        /*
         * While it would be nice to simply import LOCALDISKS from defines.js, that merely defines the *default*
         * value of the global variable 'LOCALDISKS'; since imported values are immutable, we must look at the global
         * variable, since that's the only one that *might* have been changed at runtime.
         */
        if (globals.window['LOCALDISKS'] && WebLib.getHostName().match(/^(.+\.local|localhost|0\.0\.0\.0|pcjs)$/)) {
            sURL = sURL.replace(/^\/(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "/disks/$1/").replace(/^\/discs\/([^/]*)\//, "/disks/cdroms/$1/");
        } else {
            sURL = sURL.replace(/^\/(disks\/|)(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsigdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$2.pcjs.org/").replace(/^\/(disks\/cdroms|discs)\/([^/]*)\//, "https://$2.pcjs.org/");
        }

        Component.printf(MESSAGE.DEBUG, "getResource(%s)\n", sURL);

        /*
         * globals.node.readFileSync exists only when another module has import filelib.js, which means we're
         * running under Node.js, and we can use Node's file system to read local files.  Note that filelib.js only
         * offers readFileSync() at the moment.
         */
        if (globals.node.readFileSync && sURL.indexOf("http") != 0) {
            try {
                let encoding = (type == "arraybuffer"? null : "utf8");
                resource = globals.node.readFileSync(sURL, encoding);
                if (!encoding) {
                    /*
                     * For non-UTF8 data, readFileSync() returns a DataBuffer, which wraps a Node Buffer, which wraps an ArrayBuffer.
                     */
                    resource = resource.buffer;
                    if (resource.buffer) resource = resource.buffer;
                }
            } catch (err) {
                nErrorCode = err['errno'];
            }
            if (resource !== undefined) {
                if (done) done(sURL, resource, nErrorCode);
                return [resource, nErrorCode];
            }
        }

        /*
         * If PCjs is simulating a command-line environment inside a browser, PCFS (the PCjs File System) can be used
         * to simulate a local file system.  So we check for that next.
         */
        if (PCFS.isPCFS(sURL)) {
            let item = PCFS.getItem(sURL);
            if (item) {
                resource = item.data;
                if (done) done(sURL, resource, nErrorCode);
                return [resource, nErrorCode];
            }
        }

        /*
         * Don't encode Windows paths (although frankly, that should never happen and I don't recall under what circumstances
         * it apparently did) or URLs with components (which the caller should have already encoded with encodeURIComponent()).
         */
        if (!sURL.match(/^[A-Z]:/i) && sURL.indexOf('?') < 0) {
            sURL = encodeURI(sURL);
        }

        let request;
        if (globals.window.XMLHttpRequest) {
            request = new globals.window.XMLHttpRequest();
        } else if (globals.window.ActiveXObject) {
            request = new globals.window.ActiveXObject("Microsoft.XMLHTTP");
        } else if (globals.window.fetch) {
            // Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource.fetch(%s)\n", sURL);
            fetch(sURL)
            .then(response => {
                switch(type) {
                case "json":
                case "text":
                    return response.text();
                case "arraybuffer":
                    return response.arrayBuffer();
                default:
                    throw new Error("unsupported response type: " + type);
                }
            })
            .then(resource => {
                Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource(%s): fetched %d bytes\n", sURL, resource.length);
                if (done) done(sURL, resource, nErrorCode);
            })
            .catch(error => {
                Component.printf(MESSAGE.LOG, "getResource(%s) fetch error: %d\n", sURL, nErrorCode);
                if (done) done(sURL, resource, nErrorCode);
            });
            return response;
        }

        let fArrayBuffer = false, fXHR2 = (typeof request.responseType === 'string');

        let callback = function getResourceDone() {
            if (request.readyState !== 4) {
                if (progress) progress(1);
                return null;
            }
            /*
             * The following line was recommended for WebKit, as a work-around to prevent the handler firing multiple
             * times when debugging.  Unfortunately, that's not the only XMLHttpRequest problem that occurs when
             * debugging, so I think the WebKit problem is deeper than that.  When we have multiple XMLHttpRequests
             * pending, any debugging activity means most of them simply get dropped on floor, so what may actually be
             * happening are mis-notifications rather than redundant notifications.
             *
             *      request.onreadystatechange = undefined;
             *
             * If the request failed due to, say, a CORS policy denial; eg:
             *
             *      Failed to load http://www.allbootdisks.com/downloads/Disks/Windows_95_Boot_Disk_Download48/Diskette%20Images/Windows95a.img:
             *      Redirect from 'http://www.allbootdisks.com/downloads/Disks/Windows_95_Boot_Disk_Download48/Diskette%20Images/Windows95a.img' to
             *      'http://www.allbootdisks.com/' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
             *      Origin 'http://pcjs:8088' is therefore not allowed access.
             *
             * and our request type was "arraybuffer", attempting to access responseText may trigger an exception; eg:
             *
             *      Uncaught DOMException: Failed to read the 'responseText' property from 'XMLHttpRequest': The value is only accessible if the object's
             *      'responseType' is '' or 'text' (was 'arraybuffer').
             *
             * We could tiptoe around these potential landmines, but the safest thing to do is wrap this code with try/catch.
             */
            try {
                resource = fArrayBuffer? request.response : request.responseText;
            } catch(err) {
                Component.printf(MESSAGE.LOG, "getResource(%s) exception: %s\n", sURL, err.message);
            }
            /*
             * The normal "success" case is a non-null resource and an HTTP status code of 200, but when loading files from the
             * local file system (ie, when using the "file:" protocol), we have to be a bit more flexible.
             */
            if (resource != null && (request.status == 200 || !request.status && resource.length && WebLib.getHostProtocol() == "file:")) {
                Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource(%s): returned %d bytes\n", sURL, resource.length);
            }
            else {
                nErrorCode = request.status || -1;
                Component.printf(MESSAGE.DEBUG, "getResource(%s) error: %d\n", sURL, nErrorCode);
                if (!request.status && !WebLib.fAdBlockerWarning) {
                    let match = sURL.match(/(^https?:\/\/[^/]+)(.*)/);
                    if (match) {
                        WebLib.fAdBlockerWarning = true;
                        Component.alertUser("PCjs was unable to perform a cross-origin resource request to '" + match[1] + "'.\n\nIf you're running an ad blocker, try adding '" + WebLib.getHostOrigin() + "' to your whitelist (or find a smarter ad blocker).");
                    }
                }
            }
            if (progress) progress(2);
            if (done) done(sURL, resource, nErrorCode);
            return [resource, nErrorCode];
        };

        if (fAsync) {
            request.onreadystatechange = callback;
        }

        if (progress) progress(0);

        if (type && typeof type == "object") {
            let sPost = "";
            for (let p in type) {
                if (!type.hasOwnProperty(p)) continue;
                if (sPost) sPost += "&";
                sPost += p + '=' + encodeURIComponent(type[p]);
            }
            sPost = sPost.replace(/%20/g, '+');
            Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource(%s): posted %d bytes\n", sURL, sPost.length);
            request.open("POST", sURL, fAsync);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(sPost);
        } else {
            // Component.printf(MESSAGE.DEBUG + MESSAGE.LOG, "getResource.get(%s)\n", sURL);
            request.open("GET", sURL, fAsync);
            if (type == "arraybuffer") {
                if (fXHR2) {
                    fArrayBuffer = true;
                    request.responseType = type;
                } else {
                    request.overrideMimeType("text/plain; charset=x-user-defined");
                }
            }
            request.send();
        }

        if (!fAsync) {
            request.readyState = 4;     // this may already be set for synchronous requests, but I don't want to take any chances
            response = callback();
        }
        return response;
    }

    /**
     * parseMemoryResource(sURL, sData)
     *
     * This converts a variety of JSON-style data streams into an Object with the following properties:
     *
     *      aBytes
     *      aSymbols
     *      addrLoad
     *      addrExec
     *
     * If the source data contains a 'bytes' array, it's passed through to 'aBytes'; alternatively, if
     * it contains a 'words' array, the values are converted from 16-bit to 8-bit and stored in 'aBytes',
     * and if it contains a 'longs' array, the values are converted from 32-bit longs into bytes and
     * stored in 'aBytes'.
     *
     * Alternatively, if the source data contains a 'data' array, we simply pass that through to the output
     * object as:
     *
     *      aData
     *
     * @param {string} sURL
     * @param {string} sData
     * @returns {Object|null} (resource)
     */
    static parseMemoryResource(sURL, sData)
    {
        let i;
        let resource = {
            aBytes: null,
            aSymbols: null,
            addrLoad: null,
            addrExec: null
        };

        if (sData.charAt(0) == "[" || sData.charAt(0) == "{") {
            try {
                let a, ib, data;

                if (sData.substr(0, 1) == "<") {    // if the "data" begins with a "<"...
                    /*
                     * Early server configs reported an error (via the nErrorCode parameter) if a tape URL was invalid,
                     * but more recent server configs now display a somewhat friendlier HTML error page.  The downside,
                     * however, is that the original error has been buried, and we've received "data" that isn't actually
                     * tape data.  So if the data we've received appears to be "HTML-like", we treat it as an error message.
                     */
                    throw new Error(sData);
                }

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
                if (sData.indexOf("0x") < 0 && sData.indexOf("0o") < 0 && sData.substr(0, 2) != '["') {
                    if (sData.indexOf('"values"') < 0) sData = sData.replace(/([a-z]+):/gm, '"$1":').replace(/\/\/[^\n]*/gm, "");
                    data = JSON.parse(sData);
                } else {
                    data = eval("(" + sData + ")");
                }

                resource.addrLoad = data['load'];
                resource.addrExec = data['exec'];

                let width = data['width'];
                let values = data['values'];
                if (width && values) {
                    if (width == 8) {
                        data['bytes'] = values;
                    } else if (width == 16) {
                        data['words'] = values;
                    } else if (width == 32) {
                        data['longs'] = values;
                    } else {
                        data['data'] = values;
                    }
                }

                if ((a = data['bytes'])) {
                    resource.aBytes = a;
                }
                else if ((a = data['words'])) {
                    /*
                     * Convert all words into bytes
                     */
                    resource.aBytes = new Array(a.length * 2);
                    for (i = 0, ib = 0; i < a.length; i++) {
                        resource.aBytes[ib++] = a[i] & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 8) & 0xff;
                        Component.assert(!(a[i] & ~0xffff));
                    }
                }
                else if ((a = data['longs'])) {
                    /*
                     * Convert all dwords (longs) into bytes
                     */
                    resource.aBytes = new Array(a.length * 4);
                    for (i = 0, ib = 0; i < a.length; i++) {
                        resource.aBytes[ib++] = a[i] & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 8) & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 16) & 0xff;
                        resource.aBytes[ib++] = (a[i] >> 24) & 0xff;
                    }
                }
                else if ((a = data['data'])) {
                    resource.aData = a;
                }
                else {
                    resource.aBytes = data;
                }

                if (resource.aBytes) {
                    if (!resource.aBytes.length) {
                        Component.error("Empty resource: " + sURL);
                        resource = null;
                    }
                    else if (resource.aBytes.length == 1) {
                        Component.error(resource.aBytes[0]);
                        resource = null;
                    }
                }
                resource.aSymbols = data['symbols'];

            } catch (e) {
                Component.error("Resource data error (" + sURL + "): " + e.message);
                resource = null;
            }
        }
        else {
            /*
             * Parse the data manually; we assume it's a series of hex byte-values separated by whitespace.
             */
            let ab = [];
            let sHexData = sData.replace(/\n/gm, " ").replace(/ +$/, "");
            let asHexData = sHexData.split(" ");
            for (i = 0; i < asHexData.length; i++) {
                let n = parseInt(asHexData[i], 16);
                if (isNaN(n)) {
                    Component.error("Resource data error (" + sURL + "): invalid hex byte (" + asHexData[i] + ")");
                    break;
                }
                ab.push(n & 0xff);
            }
            if (i == asHexData.length) resource.aBytes = ab;
        }
        return resource;
    }

    /**
     * redirectResource(sPath)
     *
     * The following replacements should only be necessary for (old) saved states; none of our disk manifests
     * should be using any of these deprecated paths anymore.
     *
     * @param {string} sPath
     * @returns {string}
     */
    static redirectResource(sPath)
    {
        sPath = sPath.replace("/disks/pc/", "/disks/pcx86/");
        sPath = sPath.replace("/disks/pcx86/private/", "/disks-private/pcx86/");
        if (sPath.indexOf("archive.pcjs.org") < 0) {
            sPath = sPath.replace("/disks/pcx86/", "/disks-demo/pcx86/");
        }
        sPath = sPath.replace("/pcjs-disks/", "/disks-demo/");
        sPath = sPath.replace("/pcjs-games/", "/disks-game/");
        sPath = sPath.replace("/disks-demo/pcx86/games/", "/disks-game/pcx86/");
        sPath = sPath.replace("/private-disks/", "/disks-private/");
        sPath = sPath.replace("/fixed/", "/drives/");
        return sPath;
    }

    /**
     * sendReport(sApp, sVer, sURL, sUser, sType, sReport, sHostName)
     *
     * Send a report (eg, bug report) to the server.
     *
     * @param {string} sApp (eg, "PCjs")
     * @param {string} sVer (eg, "1.02")
     * @param {string} sURL (eg, "/devices/pc/machine/5150/mda/64kb/machine.xml")
     * @param {string} sUser (ie, the user key, if any)
     * @param {string} sType (eg, "bug"); one of ReportAPI.TYPE.*
     * @param {string} sReport (eg, unparsed state data)
     * @param {string} [sHostName] (default is SITEURL)
     */
    static sendReport(sApp, sVer, sURL, sUser, sType, sReport, sHostName)
    {
        let dataPost = {};
        dataPost[ReportAPI.QUERY.APP] = sApp;
        dataPost[ReportAPI.QUERY.VER] = sVer;
        dataPost[ReportAPI.QUERY.URL] = sURL;
        dataPost[ReportAPI.QUERY.USER] = sUser;
        dataPost[ReportAPI.QUERY.TYPE] = sType;
        dataPost[ReportAPI.QUERY.DATA] = sReport;
        let sReportURL = (sHostName? sHostName : SITEURL) + ReportAPI.ENDPOINT;
        WebLib.getResource(sReportURL, dataPost, true);
    }

    /**
     * getHost()
     *
     * This is like getHostName() but with the port number, if any.
     *
     * @returns {string}
     */
    static getHost()
    {
        return globals.window.location? globals.window.location.host : "localhost";
    }

    /**
     * getHostName()
     *
     * @returns {string}
     */
    static getHostName()
    {
        return globals.window.location? globals.window.location.hostname : "localhost";
    }

    /**
     * getHostOrigin()
     *
     * This could also be implemented with window.location.origin, but that wasn't originally available in all browsers.
     *
     * @returns {string}
     */
    static getHostOrigin()
    {
        return globals.window.location? globals.window.location.protocol + "//" + globals.window.location.host : SITEURL;
    }

    /**
     * getHostProtocol()
     *
     * @returns {string}
     */
    static getHostProtocol()
    {
        return globals.window.location? globals.window.location.protocol : "file:";
    }

    /**
     * getHostURL()
     *
     * @returns {string|null}
     */
    static getHostURL()
    {
        return globals.window.location? globals.window.location.href : null;
    }

    /**
     * getUserAgent()
     *
     * @returns {string}
     */
    static getUserAgent()
    {
        return globals.window.navigator? globals.window.navigator.userAgent : "";
    }

    /**
     * hasLocalStorage
     *
     * true if localStorage support exists, is enabled, and works; false otherwise
     *
     * @returns {boolean}
     */
    static hasLocalStorage()
    {
        if (WebLib.fLocalStorage == null) {
            let f = false;
            if (globals.window.localStorage) {
                try {
                    globals.window.localStorage.setItem(WebLib.sLocalStorageTest, WebLib.sLocalStorageTest);
                    f = (globals.window.localStorage.getItem(WebLib.sLocalStorageTest) == WebLib.sLocalStorageTest);
                    globals.window.localStorage.removeItem(WebLib.sLocalStorageTest);
                } catch (e) {
                    WebLib.printLocalStorageError(e);
                    f = false;
                }
            }
            WebLib.fLocalStorage = f;
        }
        return WebLib.fLocalStorage;
    }

    /**
     * printLocalStorageError(e)
     *
     * @param {Error} e is an exception
     */
    static printLocalStorageError(e)
    {
        Component.printf(MESSAGE.ERROR, "Local storage error: %s\n", e.message);
    }

    /**
     * getLocalStorageItem(sKey)
     *
     * Returns the requested key value, or null if the key does not exist, or undefined if localStorage is not available
     *
     * @param {string} sKey
     * @returns {string|null|undefined} sValue
     */
    static getLocalStorageItem(sKey)
    {
        let sValue;
        if (WebLib.hasLocalStorage()) {
            try {
                sValue = globals.window.localStorage.getItem(sKey);
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
        return sValue;
    }

    /**
     * setLocalStorageItem(sKey, sValue)
     *
     * @param {string} sKey
     * @param {string} sValue
     * @returns {boolean} true if localStorage is available, false if not
     */
    static setLocalStorageItem(sKey, sValue)
    {
        if (WebLib.hasLocalStorage()) {
            try {
                globals.window.localStorage.setItem(sKey, sValue);
                return true;
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
        return false;
    }

    /**
     * removeLocalStorageItem(sKey)
     *
     * @param {string} sKey
     */
    static removeLocalStorageItem(sKey)
    {
        if (WebLib.hasLocalStorage()) {
            try {
                globals.window.localStorage.removeItem(sKey);
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
    }

    /**
     * getLocalStorageKeys()
     *
     * @returns {Array}
     */
    static getLocalStorageKeys()
    {
        let a = [];
        if (WebLib.hasLocalStorage()) {
            try {
                for (let i = 0, c = globals.window.localStorage.length; i < c; i++) {
                    a.push(globals.window.localStorage.key(i));
                }
            } catch (e) {
                WebLib.printLocalStorageError(e);
            }
        }
        return a;
    }

    /**
     * reloadPage()
     */
    static reloadPage()
    {
        if (globals.window.location) globals.window.location.reload();
    }

    /**
     * isUserAgent(s)
     *
     * Check the browser's user-agent string for the given substring; "iOS" and "MSIE" are special values you can
     * use that will match any iOS or MSIE browser, respectively (even IE11, in the case of "MSIE").
     *
     * 2013-11-06: In a questionable move, MSFT changed the user-agent reported by IE11 on Windows 8.1, eliminating
     * the "MSIE" string (which MSDN calls a "version token"; see http://msdn.microsoft.com/library/ms537503.aspx);
     * they say "public websites should rely on feature detection, rather than browser detection, in order to design
     * their sites for browsers that don't support the features used by the website." So, in IE11, we get a user-agent
     * that tries to fool apps into thinking the browser is more like WebKit or Gecko:
     *
     *      Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko
     *
     * That's a nice idea, but in the meantime, they hosed the XSL transform code in embed.js, which contained
     * some very critical browser-specific code; turning on IE's "Compatibility Mode" didn't help either, because
     * that's a sledgehammer solution which restores the old user-agent string but also disables other features like
     * HTML5 canvas support. As an interim solution, I'm treating any "MSIE" check as a check for either "MSIE" or
     * "Trident".
     *
     * UPDATE: I've since found ways to make the code in embed.js more browser-agnostic, so for now, there's isn't
     * any code that cares about "MSIE", but I've left the change in place, because I wouldn't be surprised if I'll
     * need more IE-specific code in the future, perhaps for things like copy/paste functionality, or mouse capture.
     *
     * 2019-10-26: Apple has pulled a stunt in iPadOS 13 similar to MSFT: trying to pretend that Safari on iPadOS is
     * indistinguishable from the desktop version.  Except that there are still situations where we need to know the
     * difference (eg, when there's only a soft keyboard as opposed to a dedicated keyboard).  See monitor.js for details.
     *
     * @param {string} s is a substring to search for in the user-agent; as noted above, "iOS" and "MSIE" are special values
     * @returns {boolean} is true if the string was found, false if not
     */
    static isUserAgent(s)
    {
        if (globals.window.navigator) {
            let userAgent = WebLib.getUserAgent();
            /*
             * Here's one case where we have to be careful with Component, because when isUserAgent() is called by
             * the init code below, component.js hasn't been loaded yet.  The simple solution for now is to remove the call.
             *
             *      Component.printf("agent: %s\n", userAgent);
             *
             * And yes, it would be pointless to use the conditional (?) operator below, if not for the Google Closure
             * Compiler (v20130823) failing to detect the entire expression as a boolean.
             */
            return s == "iOS" && (!!userAgent.match(/(iPod|iPhone|iPad)/) || (globals.window.navigator.platform === 'MacIntel' && globals.window.navigator.maxTouchPoints > 1)) || s == "MSIE" && !!userAgent.match(/(MSIE|Trident)/) || (userAgent.indexOf(s) >= 0);
        }
        return false;
    }

    /**
     * isMobile(sDevice)
     *
     * Checks the URL for a "mobile" parameter, and failing that, checks the browser's user-agent string for the
     * substring "Mobi", as per Mozilla recommendation:
     *
     *      https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
     *
     * @param {string} [sDevice] (eg, "iPad" to check for iPad, or "!iPad" to specifically exclude it)
     * @returns {boolean} is true if the browser appears to be a mobile (ie, non-desktop) web browser, false if not
     */
    static isMobile(sDevice)
    {
        let sMobile = WebLib.getURLParm("mobile");
        if (sMobile) return sMobile == "true";
        if (WebLib.isUserAgent("Mobi")) {
            if (!sDevice) return true;
            let fInvert = sDevice[0] == '!';
            if (fInvert) sDevice = sDevice.substr(1);
            return WebLib.isUserAgent(sDevice) != fInvert;
        }
        return false;
    }

    /**
     * findProperty(obj, sProp, sSuffix)
     *
     * If both sProp and sSuffix are set, then any browser-specific prefixes are inserted between sProp and sSuffix,
     * and if a match is found, it is returned without sProp.
     *
     * For example, if findProperty(document, 'on', 'fullscreenchange') discovers that 'onwebkitfullscreenchange' exists,
     * it will return 'webkitfullscreenchange', in preparation for an addEventListener() call.
     *
     * More commonly, sSuffix is not used, so whatever property is found is returned as-is.
     *
     * @param {Object|null|undefined} obj
     * @param {string} sProp
     * @param {string} [sSuffix]
     * @returns {string|null}
     */
    static findProperty(obj, sProp, sSuffix)
    {
        if (obj) {
            for (let i = 0; i < WebLib.asBrowserPrefixes.length; i++) {
                let sName = WebLib.asBrowserPrefixes[i];
                if (sSuffix) {
                    sName += sSuffix;
                    let sEvent = sProp + sName;
                    if (sEvent in obj) return sName;
                } else {
                    if (!sName) {
                        sName = sProp[0];
                    } else {
                        sName += sProp[0].toUpperCase();
                    }
                    sName += sProp.substr(1);
                    if (sName in obj) return sName;
                }
            }
        }
        return null;
    }

    /**
     * getURLParm(sParm)
     *
     * First looks for sParm exactly as specified, then looks for the lower-case version.
     *
     * @param {string} sParm
     * @returns {string|undefined}
     */
    static getURLParm(sParm)
    {
        if (!WebLib.parmsURL) {
            WebLib.parmsURL = WebLib.parseURLParms();
        }
        return WebLib.parmsURL[sParm] || WebLib.parmsURL[sParm.toLowerCase()];
    }

    /**
     * parseURLParms(sParms)
     *
     * @param {string} [sParms] containing the parameter portion of a URL (ie, after the '?')
     * @returns {Object} containing properties for each parameter found
     */
    static parseURLParms(sParms)
    {
        let aParms = {};
        if (globals.window.location) {
            if (!sParms) {
                /*
                 * Note that window.location.href returns the entire URL, whereas window.location.search
                 * returns only the parameters, if any (starting with the '?', which we skip over with a substr() call).
                 */
                sParms = globals.window.location.search.substr(1);
            }
            let match;
            let pl = /\+/g; // RegExp for replacing addition symbol with a space
            let search = /([^&=]+)=?([^&]*)/g;
            let decode = function(s)
            {
                return decodeURIComponent(s.replace(pl, " "));
            };

            while ((match = search.exec(sParms))) {
                aParms[decode(match[1])] = decode(match[2]);
            }
        }
        return aParms;
    }

    /**
     * downloadFile(sData, sType, fBase64, sFileName)
     *
     * @param {string|Uint8Array} sData
     * @param {string} sType
     * @param {boolean} [fBase64]
     * @param {string} [sFileName]
     */
    static downloadFile(sData, sType, fBase64, sFileName)
    {
        let link = null, sAlert, sURI;

        if (typeof sData != 'string') {
            if (typeof Blob == 'function' && typeof URL != 'undefined' && URL && typeof URL.createObjectURL == 'function') {
                let blob = new Blob([sData], {type: 'application/octet-stream'});
                sURI = URL.createObjectURL(blob);
            }
        }
        else {
            sURI = "data:application/" + sType + (fBase64? ";base64" : "") + ",";
            sURI += (fBase64? sData : encodeURIComponent(sData));
        }
        if (!sURI) {
            sAlert = 'Operation unsupported by your browser.';
        }
        else {
            if (sFileName) {
                link = document.createElement('a');
                if (typeof link.download != 'string') link = null;
            }
            if (link) {
                link.href = sURI;
                link.download = sFileName;
                document.body.appendChild(link);    // Firefox allegedly requires the link to be in the body
                link.click();
                document.body.removeChild(link);
                sAlert = 'Check your Downloads folder for ' + sFileName + '.';
                // if (WebLib.isUserAgent("Chrome")) {
                //     sAlert += '\n\nIn Chrome, after clicking OK, you may ALSO have to select the "Window" menu, choose "Downloads", and then locate this download and select "Keep".';
                //     sAlert += '\n\nThis is part of Chrome\'s "Security By Jumping Through Extra Hoops" technology, which is much easier for Google to implement than actually checking for something malicious.';
                //     sAlert += '\n\nAnd for the record, there is nothing malicious on the PCjs website.';
                // }
            }
            else if (globals.window.open) {
                globals.window.open(sURI);
                sAlert = 'Check your browser for a new window/tab containing the requested data' + (sFileName? (' (' + sFileName + ')') : '') + '.';
            }
        }
        return sAlert;
    }

    /**
     * onCountRepeat(n, fnRepeat, fnComplete, msDelay)
     *
     * Call fnRepeat() n times with an msDelay millisecond delay between calls,
     * then call fnComplete() when n has been exhausted OR fnRepeat() returns false.
     *
     * @param {number} n
     * @param {function()} fnRepeat
     * @param {function()} fnComplete
     * @param {number} [msDelay]
     */
    static onCountRepeat(n, fnRepeat, fnComplete, msDelay)
    {
        let fnTimeout = function doCountRepeat()
        {
            n -= 1;
            if (n >= 0) {
                if (!fnRepeat()) n = 0;
            }
            if (n > 0) {
                setTimeout(fnTimeout, msDelay || 0);
                return;
            }
            fnComplete();
        };
        fnTimeout();
    }

    /**
     * onClickRepeat(e, msDelay, msRepeat, fn)
     *
     * Repeatedly call fn() with an initial msDelay, and an msRepeat delay thereafter,
     * as long as HTML control Object e has an active "down" event and fn() returns true.
     *
     * @param {Object} e
     * @param {number} msDelay
     * @param {number} msRepeat
     * @param {function(boolean)} fn is passed false on the first call, true on all repeated calls
     */
    static onClickRepeat(e, msDelay, msRepeat, fn)
    {
        let ms = 0, timer = null, fIgnoreMouseEvents = false;

        let fnRepeat = function doClickRepeat()
        {
            if (fn(ms === msRepeat)) {
                timer = setTimeout(fnRepeat, ms);
                ms = msRepeat;
            }
        };
        e.onmousedown = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onMouseDown()\n");
            if (!fIgnoreMouseEvents) {
                if (!timer) {
                    ms = msDelay;
                    fnRepeat();
                }
            }
        };
        e.ontouchstart = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onTouchStart()\n");
            if (!timer) {
                ms = msDelay;
                fnRepeat();
            }
        };
        e.onmouseup = e.onmouseout = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onMouseUp()/onMouseOut()\n");
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
        e.ontouchend = e.ontouchcancel = function()
        {
            // Component.printf(MESSAGE.DEBUG, "onTouchEnd()/onTouchCancel()\n");
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            /*
             * Devices that generate ontouch* events ALSO generate onmouse* events,
             * and generally do so immediately after all the touch events are complete,
             * so unless we want double the action, we need to ignore mouse events.
             */
            fIgnoreMouseEvents = true;
        };
    }

    /**
     * addPageEvent(sEvent, fn)
     *
     * For 'load', 'unload', and 'pageshow' events, most callers should NOT use this function, but instead use
     * WebLib.onInit(), WebLib.onShow(), and WebLib.onExit(), respectively.
     *
     * The only components that should still use addPageEvent() are THIS component (see the bottom of this file)
     * and components that need to capture other events (eg, the 'resize' event in the Video component).
     *
     * @param {string} sEvent
     * @param {function()} fn
     */
    static addPageEvent(sEvent, fn)
    {
        if (globals.window.addEventListener) {
            globals.window.addEventListener(sEvent, fn);
        }
    }

    /**
     * onInit(fn)
     *
     * Use this instead of setting window.onload.  Allows multiple JavaScript modules to define their own 'load' event handler.
     *
     * @param {function()} fn
     */
    static onInit(fn)
    {
        WebLib.aPageEventHandlers['init'].push(fn);
    }

    /**
     * onShow(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onpageshow.  Allows multiple JavaScript modules to define their own 'pageshow' event handler.
     */
    static onShow(fn)
    {
        WebLib.aPageEventHandlers['show'].push(fn);
    }

    /**
     * onError(sMessage)
     *
     * @param {string} sMessage
     */
    static onError(sMessage)
    {
        Component.printf(MESSAGE.NOTICE, "%s\n\nIf it happens again, please send the URL to support@pcjs.org. Thanks.\n", sMessage);
    }

    /**
     * onExit(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onunload.  Allows multiple JavaScript modules to define their own 'unload' event handler.
     */
    static onExit(fn)
    {
        WebLib.aPageEventHandlers['exit'].push(fn);
    }

    /**
     * doPageEvent(sEvent, browser)
     *
     * @param {string} sEvent (one of 'init', 'show' or 'exit')
     * @param {boolean} [browser] (true if generated by the browser)
     */
    static doPageEvent(sEvent, browser)
    {
        let afn = WebLib.aPageEventHandlers[sEvent];
        if (afn && WebLib.fPageEventsEnabled) {
            try {
                for (let i = 0; i < afn.length; i++) {
                    afn[i]();
                }
            } catch (e) {
                WebLib.onError("An unexpected error occurred: " + e.message);
            }
        }
    }

    /**
     * enablePageEvents(fEnable)
     *
     * @param {boolean} fEnable is true to enable page events, false to disable (they're enabled by default)
     */
    static enablePageEvents(fEnable)
    {
        if (!WebLib.fPageEventsEnabled && fEnable) {
            WebLib.fPageEventsEnabled = true;
            if (WebLib.fPageLoaded) WebLib.doPageEvent('init');
            if (WebLib.fPageShowed) WebLib.doPageEvent('show');
            return;
        }
        WebLib.fPageEventsEnabled = fEnable;
    }

    /**
     * doPageInit()
     */
    static doPageInit()
    {
        WebLib.fPageLoaded = true;
        WebLib.doPageEvent('init', true);
    }

    /**
     * doPageShow()
     */
    static doPageShow()
    {
        WebLib.fPageShowed = true;
        WebLib.doPageEvent('show', true);
    }

    /**
     * doPageExit()
     */
    static doPageExit()
    {
        WebLib.doPageEvent('exit', true);
    }

    /**
     * doPageReset()
     */
    static doPageReset()
    {
        if (WebLib.fPageLoaded) {
            WebLib.fPageLoaded = false;
            WebLib.fPageShowed = false;
            /*
             * TODO: Anything else?
             */
        }
    }
}

WebLib.parmsURL = null;            // initialized on first call to parseURLParms()

WebLib.aPageEventHandlers = {
    'init': [],                 // list of 'load' handlers
    'show': [],                 // list of 'pageshow' handlers
    'exit': []                  // list of 'unload' handlers (although we prefer to use 'beforeunload' if possible)
};

WebLib.asBrowserPrefixes = ['', 'moz', 'ms', 'webkit'];

WebLib.fPageLoaded = false;        // set once the page's first 'load' event has occurred
WebLib.fPageShowed = false;        // set once the page's first 'pageshow' event has occurred
WebLib.fPageEventsEnabled = true;  // default is true, set to false (or true) by enablePageEvents()
WebLib.fAdBlockerWarning = false;

/**
 * fLocalStorage
 *
 * true if localStorage support exists, is enabled, and works; "falsey" otherwise
 *
 * @type {boolean|null}
 */
WebLib.fLocalStorage = null;

/**
 * TODO: Is there any way to get the Closure Compiler to stop inlining this string?  This isn't cutting it.
 *
 * @const {string}
 */
WebLib.sLocalStorageTest = "PCjs.localStorage";

WebLib.addPageEvent('load', WebLib.doPageInit);
WebLib.addPageEvent('pageshow', WebLib.doPageShow);
WebLib.addPageEvent(WebLib.isUserAgent("iOS")? 'pagehide' : (WebLib.isUserAgent("Opera")? 'unload' : 'beforeunload'), WebLib.doPageExit);

/*
 * If this is DEBUG (eg, un-COMPILED) code, then allow the user to override DEBUG with a "debug=false" embedded in
 * the URL; note that the Closure Compiler won't let us alter the DEBUG variable, because it's defined as a @define, which
 * implies @const as well, so we must resort to modifying it indirectly, using the global window object.
 *
 * TODO: Consider yet another embedXXX() parameter that would also allow DEBUG to be turned off on a page-by-page basis;
 * it's low priority, because it would only affect machines that explicitly request un-COMPILED code, and there are very
 * few such machines (eg, /blog/_posts/2015/2015-01-17-pcjs-uncompiled.md).
 *
 * Deal with WebLib.getURLParm("backtrack") in /machines/pcx86/modules/v2/defines.js at the same time.
 */
if (DEBUG) {
    let debug = WebLib.getURLParm("debug");
    if (debug == "false") {
        globals.window['DEBUG'] = false;
    }
}
