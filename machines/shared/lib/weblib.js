/**
 * @fileoverview Browser-related helper functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

if (typeof module !== "undefined") {
    var Component = require("../../shared/lib/component");
    var ReportAPI = require("../../shared/lib/reportapi");
}

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

class Web {
    /**
     * log(s, type)
     *
     * For diagnostic output only.  DEBUG must be true (or "--debug" specified via the command-line)
     * for Component.log() to display anything.
     *
     * @param {string} [s] is the message text
     * @param {string} [type] is the message type
     */
    static log(s, type)
    {
        Component.log(s, type);
    }

    /**
     * notice(s, fPrintOnly, id)
     *
     * @param {string} s is the message text
     * @param {boolean} [fPrintOnly]
     * @param {string} [id] is the caller's ID, if any
     */
    static notice(s, fPrintOnly, id)
    {
        Component.notice(s, fPrintOnly, id);
    }

    /**
     * alertUser(sMessage)
     *
     * NOTE: Legacy function for older modules (eg, DiskDump); see Component.alertUser().
     *
     * @param {string} sMessage
     */
    static alertUser(sMessage)
    {
        if (window) {
            window.alert(sMessage);
        } else {
            Web.log(sMessage);
        }
    }

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
     * @return {Array|null} Array containing [resource, nErrorCode], or null if no response available (yet)
     */
    static getResource(sURL, type = "text", fAsync = false, done, progress)
    {
        let nErrorCode = 0, resource = null, response = null;

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

        if (COMPILED || !Web.getHostName().match(/^(.+\.local|localhost|0\.0\.0\.0|pcjs)$/)) {
            sURL = sURL.replace(/^\/(diskettes|gamedisks|miscdisks|harddisks|decdisks|pcsig[0-9a-z]*-disks|private)\//, "https://$1.pcjs.org/").replace(/^\/discs\/([^/]*)\//, "https://$1.pcjs.org/");
        }

        if (typeof module !== "undefined") {
            /*
             * We don't even need to load Component, because we can't use any of the code below
             * within Node anyway.  Instead, we must hand this request off to our network library.
             *
             *      if (!Component) Component = require("./component");
             */
            let Net = require("../../shared/lib/netlib");
            return Net.getResource(sURL, type, fAsync, done);
        }

        let request = (window.XMLHttpRequest? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP"));
        let fArrayBuffer = false, fXHR2 = (typeof request.responseType === 'string');

        let callback = function() {
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
             */
            /*
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
                if (MAXDEBUG) Web.log("xmlHTTPRequest(" + sURL + ") exception: " + err.message);
            }
            /*
             * The normal "success" case is a non-null resource and an HTTP status code of 200, but when loading files from the
             * local file system (ie, when using the "file:" protocol), we have to be a bit more flexible.
             */
            if (resource != null && (request.status == 200 || !request.status && resource.length && Web.getHostProtocol() == "file:")) {
                if (MAXDEBUG) Web.log("xmlHTTPRequest(" + sURL + "): returned " + resource.length + " bytes");
            }
            else {
                nErrorCode = request.status || -1;
                Web.log("xmlHTTPRequest(" + sURL + "): error code " + nErrorCode);
                if (!request.status && !Web.fAdBlockerWarning) {
                    let match = sURL.match(/(^https?:\/\/[^/]+)(.*)/);
                    if (match) {
                        Web.fAdBlockerWarning = true;
                        Component.alertUser("PCjs was unable to perform a cross-origin resource request to '" + match[1] + "'.\n\nIf you're running an ad blocker, try adding '" + Web.getHostOrigin() + "' to your whitelist (or find a smarter ad blocker).");
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
            if (MAXDEBUG) Web.log("Web.getResource(POST " + sURL + "): " + sPost.length + " bytes");
            request.open("POST", sURL, fAsync);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            request.send(sPost);
        } else {
            if (MAXDEBUG) Web.log("Web.getResource(GET " + sURL + ")");
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
     * @return {Object|null} (resource)
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
     * @return {string}
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
        Web.getResource(sReportURL, dataPost, true);
    }

    /**
     * getHost()
     *
     * This is like getHostName() but with the port number, if any.
     *
     * @return {string}
     */
    static getHost()
    {
        return (window? window.location.host : "localhost");
    }

    /**
     * getHostName()
     *
     * @return {string}
     */
    static getHostName()
    {
        return (window? window.location.hostname : "localhost");
    }

    /**
     * getHostOrigin()
     *
     * This could also be implemented with window.location.origin, but that wasn't originally available in all browsers.
     *
     * @return {string}
     */
    static getHostOrigin()
    {
        return (window? window.location.protocol + "//" + window.location.host : SITEURL);
    }

    /**
     * getHostProtocol()
     *
     * @return {string}
     */
    static getHostProtocol()
    {
        return (window? window.location.protocol : "file:");
    }

    /**
     * getHostURL()
     *
     * @return {string|null}
     */
    static getHostURL()
    {
        return (window? window.location.href : null);
    }

    /**
     * getUserAgent()
     *
     * @return {string}
     */
    static getUserAgent()
    {
        return (window? window.navigator.userAgent : "");
    }

    /**
     * hasLocalStorage
     *
     * true if localStorage support exists, is enabled, and works; false otherwise
     *
     * @return {boolean}
     */
    static hasLocalStorage()
    {
        if (Web.fLocalStorage == null) {
            let f = false;
            if (window) {
                try {
                    window.localStorage.setItem(Web.sLocalStorageTest, Web.sLocalStorageTest);
                    f = (window.localStorage.getItem(Web.sLocalStorageTest) == Web.sLocalStorageTest);
                    window.localStorage.removeItem(Web.sLocalStorageTest);
                } catch (e) {
                    Web.logLocalStorageError(e);
                    f = false;
                }
            }
            Web.fLocalStorage = f;
        }
        return Web.fLocalStorage;
    }

    /**
     * logLocalStorageError(e)
     *
     * @param {Error} e is an exception
     */
    static logLocalStorageError(e)
    {
        Web.log(e.message, "localStorage error");
    }

    /**
     * getLocalStorageItem(sKey)
     *
     * Returns the requested key value, or null if the key does not exist, or undefined if localStorage is not available
     *
     * @param {string} sKey
     * @return {string|null|undefined} sValue
     */
    static getLocalStorageItem(sKey)
    {
        let sValue;
        if (window) {
            try {
                sValue = window.localStorage.getItem(sKey);
            } catch (e) {
                Web.logLocalStorageError(e);
            }
        }
        return sValue;
    }

    /**
     * setLocalStorageItem(sKey, sValue)
     *
     * @param {string} sKey
     * @param {string} sValue
     * @return {boolean} true if localStorage is available, false if not
     */
    static setLocalStorageItem(sKey, sValue)
    {
        try {
            window.localStorage.setItem(sKey, sValue);
            return true;
        } catch (e) {
            Web.logLocalStorageError(e);
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
        try {
            window.localStorage.removeItem(sKey);
        } catch (e) {
            Web.logLocalStorageError(e);
        }
    }

    /**
     * getLocalStorageKeys()
     *
     * @return {Array}
     */
    static getLocalStorageKeys()
    {
        let a = [];
        try {
            for (let i = 0, c = window.localStorage.length; i < c; i++) {
                a.push(window.localStorage.key(i));
            }
        } catch (e) {
            Web.logLocalStorageError(e);
        }
        return a;
    }

    /**
     * reloadPage()
     */
    static reloadPage()
    {
        if (window) window.location.reload();
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
     * @return {boolean} is true if the string was found, false if not
     */
    static isUserAgent(s)
    {
        if (window) {
            let userAgent = Web.getUserAgent();
            /*
             * Here's one case where we have to be careful with Component, because when isUserAgent() is called by
             * the init code below, component.js hasn't been loaded yet.  The simple solution for now is to remove the call.
             *
             *      Web.log("agent: " + userAgent);
             *
             * And yes, it would be pointless to use the conditional (?) operator below, if not for the Google Closure
             * Compiler (v20130823) failing to detect the entire expression as a boolean.
             */
            return s == "iOS" && (!!userAgent.match(/(iPod|iPhone|iPad)/) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)) || s == "MSIE" && !!userAgent.match(/(MSIE|Trident)/) || (userAgent.indexOf(s) >= 0);
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
     * @return {boolean} is true if the browser appears to be a mobile (ie, non-desktop) web browser, false if not
     */
    static isMobile(sDevice)
    {
        let sMobile = Web.getURLParm("mobile");
        if (sMobile) return sMobile == "true";
        if (Web.isUserAgent("Mobi")) {
            if (!sDevice) return true;
            let fInvert = sDevice[0] == '!';
            if (fInvert) sDevice = sDevice.substr(1);
            return Web.isUserAgent(sDevice) != fInvert;
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
     * @return {string|null}
     */
    static findProperty(obj, sProp, sSuffix)
    {
        if (obj) {
            for (let i = 0; i < Web.asBrowserPrefixes.length; i++) {
                let sName = Web.asBrowserPrefixes[i];
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
     * @return {string|undefined}
     */
    static getURLParm(sParm)
    {
        if (!Web.parmsURL) {
            Web.parmsURL = Web.parseURLParms();
        }
        return Web.parmsURL[sParm] || Web.parmsURL[sParm.toLowerCase()];
    }

    /**
     * parseURLParms(sParms)
     *
     * @param {string} [sParms] containing the parameter portion of a URL (ie, after the '?')
     * @return {Object} containing properties for each parameter found
     */
    static parseURLParms(sParms)
    {
        let aParms = {};
        if (window) {       // an alternative to "if (typeof module === 'undefined')" if require("defines") was used
            if (!sParms) {
                /*
                 * Note that window.location.href returns the entire URL, whereas window.location.search
                 * returns only the parameters, if any (starting with the '?', which we skip over with a substr() call).
                 */
                sParms = window.location.search.substr(1);
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
                // if (Web.isUserAgent("Chrome")) {
                //     sAlert += '\n\nIn Chrome, after clicking OK, you may ALSO have to select the "Window" menu, choose "Downloads", and then locate this download and select "Keep".';
                //     sAlert += '\n\nThis is part of Chrome\'s "Security By Jumping Through Extra Hoops" technology, which is much easier for Google to implement than actually checking for something malicious.';
                //     sAlert += '\n\nAnd for the record, there is nothing malicious on the PCjs website.';
                // }
            }
            else {
                window.open(sURI);
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
            // Web.log("onMouseDown()");
            if (!fIgnoreMouseEvents) {
                if (!timer) {
                    ms = msDelay;
                    fnRepeat();
                }
            }
        };
        e.ontouchstart = function()
        {
            // Web.log("onTouchStart()");
            if (!timer) {
                ms = msDelay;
                fnRepeat();
            }
        };
        e.onmouseup = e.onmouseout = function()
        {
            // Web.log("onMouseUp()/onMouseOut()");
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
        e.ontouchend = e.ontouchcancel = function()
        {
            // Web.log("onTouchEnd()/onTouchCancel()");
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
     * onPageEvent(sName, fn)
     *
     * For 'onload', 'onunload', and 'onpageshow' events, most callers should NOT use this function, but
     * instead use Web.onInit(), Web.onShow(), and Web.onExit(), respectively.
     *
     * The only components that should still use onPageEvent() are THIS component (see the bottom of this file)
     * and components that need to capture other events (eg, the 'onresize' event in the Video component).
     *
     * This function creates a chain of callbacks, allowing multiple JavaScript modules to define handlers
     * for the same event, which wouldn't be possible if everyone modified window['onload'], window['onunload'],
     * etc, themselves.  However, that's less of a concern now, because assuming everyone else is now using
     * onInit(), onExit(), etc, then there really IS only one component setting the window callback: this one.
     *
     * NOTE: It's risky to refer to obscure event handlers with "dot" names, because the Closure Compiler may
     * erroneously replace them (eg, window.onpageshow is a good example).
     *
     * @param {string} sFunc
     * @param {function()} fn
     */
    static onPageEvent(sFunc, fn)
    {
        if (window) {
            let fnPrev = window[sFunc];
            if (typeof fnPrev !== 'function') {
                window[sFunc] = fn;
            } else {
                /*
                 * TODO: Determine whether there's any value in receiving/sending the Event object that the
                 * browser provides when it generates the original event.
                 */
                window[sFunc] = function onWindowEvent()
                {
                    if (fnPrev) fnPrev();
                    fn();
                };
            }
        }
    }

    /**
     * onInit(fn)
     *
     * Use this instead of setting window.onload.  Allows multiple JavaScript modules to define their own 'onload' event handler.
     *
     * @param {function()} fn
     */
    static onInit(fn)
    {
        Web.aPageEventHandlers['init'].push(fn);
    }

    /**
     * onShow(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onpageshow.  Allows multiple JavaScript modules to define their own 'onpageshow' event handler.
     */
    static onShow(fn)
    {
        Web.aPageEventHandlers['show'].push(fn);
    }

    /**
     * onError(sMessage)
     *
     * @param {string} sMessage
     */
    static onError(sMessage)
    {
        Web.notice(sMessage + "\n\nIf it happens again, please send the URL to support@pcjs.org. Thanks.");
    }

    /**
     * onExit(fn)
     *
     * @param {function()} fn
     *
     * Use this instead of setting window.onunload.  Allows multiple JavaScript modules to define their own 'onunload' event handler.
     */
    static onExit(fn)
    {
        Web.aPageEventHandlers['exit'].push(fn);
    }

    /**
     * doPageEvent(afn)
     *
     * @param {Array.<function()>} afn
     */
    static doPageEvent(afn)
    {
        if (Web.fPageEventsEnabled) {
            try {
                for (let i = 0; i < afn.length; i++) {
                    afn[i]();
                }
            } catch (e) {
                Web.onError("An unexpected error occurred: " + e.message);
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
        if (!Web.fPageEventsEnabled && fEnable) {
            Web.fPageEventsEnabled = true;
            if (Web.fPageLoaded) Web.sendPageEvent('init');
            if (Web.fPageShowed) Web.sendPageEvent('show');
            return;
        }
        Web.fPageEventsEnabled = fEnable;
    }

    /**
     * sendPageEvent(sEvent)
     *
     * This allows us to manually trigger page events.
     *
     * @param {string} sEvent (one of 'init', 'show' or 'exit')
     */
    static sendPageEvent(sEvent)
    {
        if (Web.aPageEventHandlers[sEvent]) {
            Web.doPageEvent(Web.aPageEventHandlers[sEvent]);
        }
    }
}

Web.parmsURL = null;            // initialized on first call to parseURLParms()

Web.aPageEventHandlers = {
    'init': [],                 // list of window 'onload' handlers
    'show': [],                 // list of window 'onpageshow' handlers
    'exit': []                  // list of window 'onunload' handlers (although we prefer to use 'onbeforeunload' if possible)
};

Web.asBrowserPrefixes = ['', 'moz', 'ms', 'webkit'];

Web.fPageLoaded = false;        // set once the page's first 'onload' event has occurred
Web.fPageShowed = false;        // set once the page's first 'onpageshow' event has occurred
Web.fPageEventsEnabled = true;  // default is true, set to false (or true) by enablePageEvents()
Web.fAdBlockerWarning = false;

/**
 * fLocalStorage
 *
 * true if localStorage support exists, is enabled, and works; "falsey" otherwise
 *
 * @type {boolean|null}
 */
Web.fLocalStorage = null;

/**
 * TODO: Is there any way to get the Closure Compiler to stop inlining this string?  This isn't cutting it.
 *
 * @const {string}
 */
Web.sLocalStorageTest = "PCjs.localStorage";

Web.onPageEvent('onload', function onPageLoad() {
    Web.fPageLoaded = true;
    Web.doPageEvent(Web.aPageEventHandlers['init']);
});

Web.onPageEvent('onpageshow', function onPageShow() {
    Web.fPageShowed = true;
    Web.doPageEvent(Web.aPageEventHandlers['show']);
});

Web.onPageEvent(Web.isUserAgent("iOS")? 'onpagehide' : (Web.isUserAgent("Opera")? 'onunload' : 'onbeforeunload'), function onPageUnload() {
    Web.doPageEvent(Web.aPageEventHandlers['exit']);
});

/*
 * If this is DEBUG (eg, un-COMPILED) code, then allow the user to override DEBUG with a "debug=false" embedded in
 * the URL; note that the Closure Compiler won't let us alter the DEBUG variable, because it's defined as a @define, which
 * implies @const as well, so we must resort to modifying it indirectly, using the global window object.
 *
 * TODO: Consider yet another embedXXX() parameter that would also allow DEBUG to be turned off on a page-by-page basis;
 * it's low priority, because it would only affect machines that explicitly request un-COMPILED code, and there are very
 * few such machines (eg, /_posts/2015-01-17-pcjs-uncompiled.md).
 *
 * Deal with Web.getURLParm("backtrack") in /modules/pcx86/lib/defines.js at the same time.
 */
if (DEBUG && window) {
    let sDebug = Web.getURLParm("debug");
    if (sDebug == "false") {
        window['DEBUG'] = false;
    }
}

if (typeof module !== "undefined") module.exports = Web;
