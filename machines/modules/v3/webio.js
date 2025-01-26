/**
 * @fileoverview Class for basic browser-based support
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StdIO   from "./stdio.js";
import MESSAGE from "./message.js";

/**
 * Media libraries generally consist of an array of Media objects.
 *
 * @typedef {Object} Media
 * @property {string} name
 * @property {string} path
 */

/**
 * The following properties are the standard set of properties a Config object may contain.
 *
 * @typedef {Object} Config
 * @property {string} [class]
 * @property {Object} [bindings]
 * @property {number} [version]
 * @property {Array.<string>} [overrides]
 */

/**
 * @class WebIO
 * @unrestricted
 * @property {Object} bindings
 * @property {number} messages
 * @property {WebIO} machine
 */
export default class WebIO extends StdIO {
    /**
     * WebIO(isMachine)
     *
     * @this {WebIO}
     * @param {boolean} isMachine
     */
    constructor(isMachine)
    {
        super();
        this.bindings = {};
        this.messages = 0;
        /**
         * If this is the machine device, initialize a set of per-machine variables; if it's not,
         * the Device constructor will update this.machine with the actual machine device (see addDevice()).
         */
        this.machine = this;
        if (isMachine) {
            this.machine.messages = 0;
            this.machine.aCommands = [];
            this.machine.iCommand = 0;
            this.machine.handlers = {};
            this.machine.isFullScreen = false;
        }
    }

    /**
     * addBinding(binding, element, onEvent)
     *
     * @this {WebIO}
     * @param {string} binding
     * @param {Element} element
     * @param {function(Event, (boolean|undefined))} [onEvent]
     */
    addBinding(binding, element, onEvent)
    {
        let webIO = this;

        this.bindings[binding] = element;

        switch(binding) {

        case WebIO.BINDING.CLEAR:
            element.onclick = () => this.clear();
            break;

        case WebIO.BINDING.PRINT:
            this.disableAuto(element);
            /**
             * An onKeyDown handler has been added to this element to intercept special (non-printable) keys,
             * such as UP and DOWN arrow keys, which are used to implement a simple command history/recall feature.
             */
            element.addEventListener(
                'keydown',
                function onKeyDown(event) {
                    webIO.onCommandEvent(event, true, onEvent);
                }
            );
            /**
             * One purpose of the onKeyPress handler for this element is to stop event propagation, so that if
             * the element has been explicitly given focus, any key presses won't be picked up by the Input device
             * (which, as that device's constructor explains, is monitoring key presses for the entire document).
             *
             * The other purpose is to support the entry of commands and pass them on to parseCommands().
             */
            element.addEventListener(
                'keypress',
                function onKeyPress(event) {
                    webIO.onCommandEvent(event, undefined, onEvent);
                }
            );
            break;
        }
    }

    /**
     * addBindings(bindings)
     *
     * Use the set of DESIRED bindings (this.config['bindings']) to build the set of ACTUAL bindings (this.bindings).
     *
     * bindings is usually an object map that maps internal binding IDs to external element IDs, but it can also be
     * an array of IDs (aka "direct bindings"); using an array of direct bindings simply means that the web page is
     * using element IDs that are the same as our internal IDs.  The downside of direct bindings is that you may have
     * problems loading more than one machine on the page if there's any overlap in their bindings.
     *
     * @this {WebIO}
     * @param {Object} [bindings]
     */
    addBindings(bindings = {})
    {
        if (typeof document == "undefined") return;

        if (!this.config.bindings) {
            this.config.bindings = bindings;
        }
        /**
         * To relieve every device from having to explicitly declare its own container, set up a default.
         * When using direct bindings, the default is simply 'container'; otherwise, the default 'container'
         * element ID is whatever the device ID is.
         */
        let fDirectBindings = Array.isArray(bindings);
        if (fDirectBindings) {
            if (bindings.indexOf('container') < 0) {
                bindings.push('container');
            }
        } else {
            if (!bindings['container']) {
                bindings['container'] = this.idDevice;
            }
        }
        for (let binding in bindings) {
            let id = bindings[binding];
            if (fDirectBindings) {
                binding = id;
            } else {
                /**
                 * This new bit of code allows us to define a binding like this:
                 *
                 *      "label": "0"
                 *
                 * and we will automatically look for "label0", "label1", etc, and build an array of sequential
                 * bindings for "label".  We stop building the array as soon as a missing binding is encountered.
                 */
                if (id.match(/^[0-9]+$/)) {
                    let i = +id;
                    this.bindings[binding] = [];
                    do {
                        id = binding + i++;
                        let element = document.getElementById(id);
                        if (!element) break;
                        this.bindings[binding].push(element);
                    } while (true);
                    continue;
                }
            }
            let element = document.getElementById(id);
            if (element) {
                this.addBinding(binding, element);
                continue;
            }
            if (WebIO.MAXDEBUG && !fDirectBindings && id != this.idDevice) {
                this.printf("unable to find element '%s' for device '%s'\n", id, this.idDevice);
            }
        }
    }

    /**
     * addBindingOptions(element, options, fReset, sDefault)
     *
     * @this {WebIO}
     * @param {Element|HTMLSelectElement} element
     * @param {Object} options (eg, key/value pairs for a series of "option" elements)
     * @param {boolean} [fReset]
     * @param {string} [sDefault]
     */
    addBindingOptions(element, options, fReset, sDefault)
    {
        if (fReset) {
            element.options.length = 0;
        }
        if (options) {
            for (let prop in options) {
                let option = document.createElement("option");
                option.text = prop;
                option.value = (typeof options[prop] == "string"? options[prop] : prop);
                element.appendChild(option);
                if (option.value == sDefault) element.selectedIndex = element.options.length - 1;
            }
        }
    }

    /**
     * addHandler(type, func)
     *
     * @this {WebIO}
     * @param {string} type
     * @param {function(Array.<string>)} func
     */
    addHandler(type, func)
    {
        if (!this.machine.handlers[type]) this.machine.handlers[type] = [];
        this.machine.handlers[type].push(func);
    }

    /**
     * alert(format, args)
     *
     * The format argument can be preceded by a boolean (fDiag) which, if true, will suppress the alert().
     *
     * @this {WebIO}
     * @param {string|boolean} format
     * @param {...} [args]
     */
    alert(format, args)
    {
        let fDiag = false;
        if (typeof format == "boolean") {
            fDiag = format;
            format = args.shift();
        }
        let s = this.sprintf(format, ...args);
        if (s) {
            this.printf("%s\n", s);
            if (!fDiag) alert(s);
        }
    }

    /**
     * assert(f, format, args)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * The Closure Compiler should automatically remove all references to assert() in non-DEBUG builds.
     *
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @this {WebIO}
     * @param {*} f is the expression asserted to be true
     * @param {string} [format] is an optional description of the assertion failure
     * @param {...} [args]
     */
    assert(f, format, ...args)
    {
        if (WebIO.DEBUG) {
            if (!f) {
                throw new Error(format? this.sprintf(format, ...args) : "assertion failure");
            }
        }
    }

    /**
     * clear()
     *
     * @this {WebIO}
     */
    clear()
    {
        let element = this.findBinding(WebIO.BINDING.PRINT, true);
        if (element) element.value = "";
    }

    /**
     * disableAuto(element)
     *
     * @this {WebIO}
     * @param {Element} element
     */
    disableAuto(element)
    {
        element.setAttribute("autocapitalize", "off");
        element.setAttribute("autocomplete", "off");
        element.setAttribute("autocorrect", "off");
        element.setAttribute("spellcheck", "false");
        /**
         * This was added for Firefox (Safari will clear the <textarea> on a page reload, but Firefox does not).
         */
        element.value = "";
    }

    /**
     * error(format, args)
     *
     * @this {WebIO}
     * @param {string} format
     * @param {...} [args]
     */
    error(format, args)
    {
        this.alert("%s", this.sprintf(format, ...args));
    }

    /**
     * findBinding(name, all)
     *
     * @this {WebIO}
     * @param {string} [name]
     * @param {boolean} [all]
     * @returns {Element|null|undefined}
     */
    findBinding(name, all)
    {
        return this.bindings[name];
    }

    /**
     * findHandlers(type)
     *
     * @this {WebIO}
     * @param {string} type
     * @returns {Array.<function(Array.<string>)>|undefined}
     */
    findHandlers(type)
    {
        return this.machine.handlers[type];
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
     * @this {WebIO}
     * @param {Object|null|undefined} obj
     * @param {string} sProp
     * @param {string} [sSuffix]
     * @returns {string|null}
     */
    findProperty(obj, sProp, sSuffix)
    {
        if (obj) {
            do {
                for (let i = 0; i < WebIO.BrowserPrefixes.length; i++) {
                    let sName = WebIO.BrowserPrefixes[i];
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
                if (sProp.indexOf("screen") < 0) break;
                sProp = sProp.replace("screen", "Screen");
            } while (true);
        }
        return null;
    }

    /**
     * getBindingID(name)
     *
     * Since this.bindings contains the actual elements, not their original IDs, we must delve back into
     * the original this.config['bindings'] to determine the original ID.
     *
     * @this {WebIO}
     * @param {string} name
     * @returns {string|undefined}
     */
    getBindingID(name)
    {
        return this.config['bindings'] && this.config['bindings'][name];
    }

    /**
     * getBindingText(name)
     *
     * @this {WebIO}
     * @param {string} name
     * @returns {string|undefined}
     */
    getBindingText(name)
    {
        let text;
        let element = this.bindings[name];
        if (element) text = element.textContent;
        return text;
    }

    /**
     * getBounded(n, min, max)
     *
     * Restricts n to the bounds defined by min and max.  A side-effect is ensuring that the return
     * value is ALWAYS a number, even if n is not.
     *
     * @this {WebIO}
     * @param {number} n
     * @param {number} min
     * @param {number} max
     * @returns {number} (updated n)
     */
    getBounded(n, min, max)
    {
        this.assert(min <= max);
        n = +n || 0;
        if (n < min) n = min;
        if (n > max) n = max;
        return n;
    }

    /**
     * getDefault(idConfig, defaultValue, mappings)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {*} defaultValue
     * @param {Object} [mappings] (used to provide optional user-friendly mappings for values)
     * @returns {*}
     */
    getDefault(idConfig, defaultValue, mappings)
    {
        let value = this.config[idConfig];
        if (value === undefined) {
            value = defaultValue;
        } else {
            if (mappings && mappings[value] !== undefined) {
                value = mappings[value];
            }
            let type = typeof defaultValue;
            if (typeof value != type) {
                this.assert(false);
                if (type == "boolean") {
                    value = !!value;
                } else if (typeof defaultValue == "number") {
                    value = +value;
                }
            }
        }
        return value;
    }

    /**
     * getDefaultBoolean(idConfig, defaultValue)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {boolean} defaultValue
     * @returns {boolean}
     */
    getDefaultBoolean(idConfig, defaultValue)
    {
        return /** @type {boolean} */ (this.getDefault(idConfig, defaultValue));
    }

    /**
     * getDefaultNumber(idConfig, defaultValue, mappings)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {number} defaultValue
     * @param {Object} [mappings]
     * @returns {number}
     */
    getDefaultNumber(idConfig, defaultValue, mappings)
    {
        return /** @type {number} */ (this.getDefault(idConfig, defaultValue, mappings));
    }

    /**
     * getDefaultString(idConfig, defaultValue)
     *
     * @this {WebIO}
     * @param {string} idConfig
     * @param {string} defaultValue
     * @returns {string}
     */
    getDefaultString(idConfig, defaultValue)
    {
        return /** @type {string} */ (this.getDefault(idConfig, defaultValue));
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
        return (window? window.location.host : "localhost");
    }

    /**
     * getHostName()
     *
     * @returns {string}
     */
    static getHostName()
    {
        return (window? window.location.hostname : WebIO.getHost());
    }

    /**
     * getHostOrigin()
     *
     * @returns {string}
     */
    static getHostOrigin()
    {
        return (window? window.location.origin : WebIO.getHost());
    }

    /**
     * getHostPath()
     *
     * @returns {string|null}
     */
    static getHostPath()
    {
        return (window? window.location.pathname : null);
    }

    /**
     * getHostProtocol()
     *
     * @returns {string}
     */
    static getHostProtocol()
    {
        return (window? window.location.protocol : "file:");
    }

    /**
     * getHostURL()
     *
     * @returns {string|null}
     */
    static getHostURL()
    {
        return (window? window.location.href : null);
    }

    /**
     * getMedia(media, done)
     *
     * Used to load media items and media libraries.
     *
     * @this {WebIO}
     * @param {Object|Array|string} media (if string, then the URL of a media item or library)
     * @param {function(*)} done
     * @returns {boolean} (true if media item or library already loaded; otherwise, the media is loaded)
     */
    getMedia(media, done)
    {
        let device = this;
        if (typeof media == "string") {
            this.getResource(media, function onLoadMedia(sURL, sResource, readyState, nErrorCode) {
                let fDiag = false;
                let sErrorMessage, resource;
                if (nErrorCode) {
                    /**
                     * Errors can happen for innocuous reasons, such as the user switching away too quickly, forcing
                     * the request to be cancelled.  And unfortunately, the browser cancels XMLHttpRequest requests
                     * BEFORE it notifies any page event handlers, so if the machine is being powered down, we won't
                     * know that yet.  For now, we suppress the alert() if there's no specific error (nErrorCode < 0).
                     */
                    fDiag = (nErrorCode < 0);
                    sErrorMessage = sURL;
                } else {
                    if (readyState != 4) return;
                    try {
                        resource = JSON.parse(sResource);
                    } catch(err) {
                        nErrorCode = 1;
                        sErrorMessage = err.message || "unknown error";
                    }
                }
                if (sErrorMessage) {
                    device.alert(fDiag, "Unable to load %s media (error %d: %s)", device.idDevice, nErrorCode, sErrorMessage);
                }
                done(resource);
            });
            return false;
        }
        done(media);
        return true;
    }

    /**
     * getResource(url, done)
     *
     * Request the specified resource, and once the request is complete, notify done().
     *
     * done() is passed four parameters:
     *
     *      done(url, sResource, readyState, nErrorCode)
     *
     * readyState comes from the request's 'readyState' property, and the operation should not be
     * considered complete until readyState is 4.
     *
     * If nErrorCode is zero, sResource should contain the requested data; otherwise, an error occurred.
     *
     * @this {WebIO}
     * @param {string} url
     * @param {function(string,string,number,number)} done
     */
    getResource(url, done)
    {
        let webIO = this;
        let nErrorCode = 0, sResource = null;
        let xmlHTTP = (window.XMLHttpRequest? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP"));

        xmlHTTP.onreadystatechange = function()
        {
            if (xmlHTTP.readyState !== 4) {
                done(url, sResource, xmlHTTP.readyState, nErrorCode);
                return;
            }

            /**
             * The following line was recommended for WebKit, as a work-around to prevent the handler firing multiple
             * times when debugging.  Unfortunately, that's not the only XMLHttpRequest problem that occurs when
             * debugging, so I think the WebKit problem is deeper than that.  When we have multiple XMLHttpRequests
             * pending, any debugging activity means most of them simply get dropped on floor, so what may actually be
             * happening are mis-notifications rather than redundant notifications.
             *
             *      xmlHTTP.onreadystatechange = undefined;
             */
            sResource = xmlHTTP.responseText;

            /**
             * The normal "success" case is an HTTP status code of 200, but when testing with files loaded
             * from the local file system (ie, when using the "file:" protocol), we have to be a bit more "flexible".
             */
            if (xmlHTTP.status == 200 || !xmlHTTP.status && sResource.length && WebIO.getHostProtocol() == "file:") {
                // if (MAXDEBUG) WebLib.printf("xmlHTTP.onreadystatechange(%s): returned %d bytes\n", url, sResource.length);
            }
            else {
                nErrorCode = xmlHTTP.status || -1;
            }
            done(url, sResource, xmlHTTP.readyState, nErrorCode);
        };

        xmlHTTP.open("GET", url, true);
        xmlHTTP.send();
    }

    /**
     * getURLParms(sParms)
     *
     * @param {string} [sParms] (optional string containing the parameter portion of a URL (ie, after the '?'))
     * @returns {Object} (containing properties for each parameter found)
     */
    static getURLParms(sParms)
    {
        let parms = WebIO.URLParms;
        if (!parms) {
            parms = {};
            if (window) {
                if (!sParms) {
                    /**
                     * Note that window.location.href returns the entire URL, whereas window.location.search
                     * returns only parameters, if any (starting with the '?', which we skip over with a slice() call).
                     */
                    sParms = window.location.search.slice(1);
                }
                let match;
                let pl = /\+/g; // RegExp for replacing addition symbol with a space
                let search = /([^&=]+)=?([^&]*)/g;
                let decode = function decodeParameter(s) {
                    return decodeURIComponent(s.replace(pl, " ")).trim();
                };

                while ((match = search.exec(sParms))) {
                    parms[decode(match[1])] = decode(match[2]);
                }
            }
            WebIO.URLParms = parms;
        }
        return parms;
    }

    /**
     * hasLocalStorage
     *
     * If localStorage support exists, is enabled, and works, return true.
     *
     * @this {WebIO}
     * @returns {boolean}
     */
    hasLocalStorage()
    {
        if (WebIO.LocalStorage.Available === undefined) {
            let f = false;
            if (window) {
                try {
                    window.localStorage.setItem(WebIO.LocalStorage.Test, WebIO.LocalStorage.Test);
                    f = (window.localStorage.getItem(WebIO.LocalStorage.Test) == WebIO.LocalStorage.Test);
                    window.localStorage.removeItem(WebIO.LocalStorage.Test);
                } catch(err) {
                    this.printf("%s\n", err.message);
                    f = false;
                }
            }
            WebIO.LocalStorage.Available = f;
        }
        return !!WebIO.LocalStorage.Available;
    }

    /**
     * isMessageOn(messages)
     *
     * If messages is MESSAGE.DEFAULT (0), then the device's default message group(s) are used,
     * and if it's MESSAGE.ALL (-1), then the message is always displayed, regardless what's enabled.
     *
     * @this {WebIO}
     * @param {number} [messages] is zero or more MESSAGE flags
     * @returns {boolean} true if all specified message enabled, false if not
     */
    isMessageOn(messages = 0)
    {
        if (messages > 1 && (messages % 2)) messages--;
        messages = messages || this.messages;
        if ((messages|1) == -1 || this.testBits(this.machine.messages, messages)) {
            return true;
        }
        return false;
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
     * 2019-10-26: Apple has pulled a similar stunt in iPadOS 13, trying to pretend that Safari on iPadOS is
     * indistinguishable from the desktop version.  Except that there are still situations where we need to know the
     * difference (eg, when there's only a soft keyboard as opposed to a dedicated keyboard).  See monitor.js for details.
     *
     * @this {WebIO}
     * @param {string} s is a substring to search for in the user-agent; as noted above, "iOS" and "MSIE" are special values
     * @returns {boolean} is true if the string was found, false if not
     */
    isUserAgent(s)
    {
        if (window) {
            let userAgent = window.navigator.userAgent;
            return s == "iOS" && (!!userAgent.match(/(iPod|iPhone|iPad)/) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)) || s == "MSIE" && !!userAgent.match(/(MSIE|Trident)/) || (userAgent.indexOf(s) >= 0);
        }
        return false;
    }

    /**
     * loadLocalStorage()
     *
     * @this {WebIO}
     * @returns {Array|null}
     */
    loadLocalStorage()
    {
        let state = null;
        if (this.hasLocalStorage()) {
            let sValue;
            if (window) {
                try {
                    sValue = window.localStorage.getItem(this.idMachine);
                    if (sValue) state = /** @type {Array} */ (JSON.parse(sValue));
                } catch (err) {
                    this.printf("%s\n", err.message);
                }
            }
        }
        return state;
    }

    /**
     * onCommandEvent(event, down, onEvent)
     *
     * @this {WebIO}
     * @param {Event} event
     * @param {boolean} [down] (true if keydown, false if keyup, undefined if keypress)
     * @param {function(Event, (boolean|undefined))} [onEvent]
     */
    onCommandEvent(event, down, onEvent)
    {
        event = event || window.event;
        let keyCode = event.which || event.keyCode;
        if (onEvent) {
            if (onEvent(event, down)) {
                event.preventDefault();
                return;
            }
        }
        if (keyCode) {
            let machine = this.machine;
            let element = /** @type {HTMLTextAreaElement} */ (event.target);
            if (down) {
                let consume = false, s;
                let text = element.value;
                let i = text.lastIndexOf('\n');
                /**
                 * Checking for BACKSPACE is not as important as the UP and DOWN arrows, but it's helpful to ensure
                 * that BACKSPACE only erases characters on the final line; consume it otherwise.
                 */
                if (keyCode == WebIO.KEYCODE.BS) {
                    if (element.selectionStart <= i + 1) {
                        consume = true;
                    }
                }
                if (keyCode == WebIO.KEYCODE.UP) {
                    consume = true;
                    if (machine.iCommand > 0) {
                        s = machine.aCommands[--machine.iCommand];
                    }
                }
                else if (keyCode == WebIO.KEYCODE.DOWN) {
                    consume = true;
                    if (machine.iCommand < machine.aCommands.length) {
                        s = machine.aCommands[++machine.iCommand] || "";
                    }
                }
                if (consume) event.preventDefault();
                if (s != undefined) {
                    element.value = text.substr(0, i + 1) + s;
                }
            }
            else {
                let charCode = keyCode;
                let char = String.fromCharCode(charCode);
                /**
                 * Move the caret to the end of any text in the textarea, unless it's already
                 * past the final LF (because it's OK to insert characters on the last line).
                 */
                let text = element.value;
                let i = text.lastIndexOf('\n');
                if (element.selectionStart <= i) {
                    element.setSelectionRange(text.length, text.length);
                }
                /**
                 * Don't let the Input device's document-based keypress handler see any key presses
                 * that came to this element first.
                 */
                event.stopPropagation();
                /**
                 * If '@' is pressed as the first character on the line, then append the last command
                 * that parseCommands() processed, and transform '@' into ENTER.
                 */
                if (char == '@' && machine.iCommand > 0) {
                    if (i + 1 == text.length) {
                        element.value += machine.aCommands[--machine.iCommand];
                        char = '\r';
                    }
                }
                /**
                 * On the ENTER key, call parseCommands() to look for any COMMAND handlers and invoke
                 * them until one of them returns true.
                 *
                 * Note that even though new lines are entered with the ENTER (CR) key, which uses
                 * ASCII character '\r' (aka RETURN aka CR), new lines are stored in the text buffer
                 * as ASCII character '\n' (aka LINEFEED aka LF).
                 */
                if (char == '\r') {
                    /**
                     * At the time we call any command handlers, a LINEFEED will not yet have been
                     * appended to the text, so for consistency, we prevent the default behavior and
                     * add the LINEFEED ourselves.  Unfortunately, one side-effect is that we must
                     * go to some extra effort to ensure the cursor remains in view; hence the stupid
                     * blur() and focus() calls.
                     */
                    event.preventDefault();
                    text = (element.value += '\n');
                    element.blur();
                    element.focus();
                    let i = text.lastIndexOf('\n', text.length - 2);
                    let commands = text.slice(i + 1, -1) || "";
                    let result = this.parseCommands(commands);
                    if (result) this.printf("%s\n", result.replace(/\n$/, ""));
                }
            }
        }
    }

    /**
     * onPageEvent(sEvent, fn)
     *
     * @this {WebIO}
     * @param {string} sEvent
     * @param {function()} fn
     */
    onPageEvent(sEvent, fn)
    {
        if (window) {
            window.addEventListener(sEvent, fn);
        }
    }

    /**
     * parseBoolean(token)
     *
     * @this {WebIO}
     * @param {string} token (true if token is "on" or "true", false if "off" or "false", undefined otherwise)
     * @returns {boolean|undefined}
     */
    parseBoolean(token)
    {
        return (token == "true" || token == "on"? true : (token == "false" || token == "off"? false : undefined));
    }

    /**
     * parseCommand(command)
     *
     * @this {WebIO}
     * @param {string} [command]
     * @returns {string|undefined}
     */
    parseCommand(command)
    {
        let result;
        if (command != undefined) {
            let machine = this.machine;
            try {
                command = command.trim();
                if (command) {
                    if (machine.iCommand < machine.aCommands.length && command == machine.aCommands[machine.iCommand]) {
                        machine.iCommand++;
                    } else {
                        machine.aCommands.push(command);
                        machine.iCommand = machine.aCommands.length;
                    }
                }

                let aTokens = command.split(' ');
                let token = aTokens[0], message, on, list, iToken;
                let afnHandlers = this.findHandlers(WebIO.HANDLER.COMMAND);

                switch(token[0]) {
                case 'm':
                    if (token[1] == '?') {
                        result = "";
                        WebIO.MESSAGE_COMMANDS.forEach((command) => {result += command + '\n';});
                        if (result) result = "message commands:\n" + result;
                        break;
                    }
                    result = ""; iToken = 1; list = undefined;
                    token = aTokens[aTokens.length-1].toLowerCase();
                    on = this.parseBoolean(token);
                    if (on != undefined) {
                        aTokens.pop();
                    }
                    if (aTokens.length <= 1) {
                        if (on != undefined) {
                            list = on;
                            on = undefined;
                        }
                        aTokens[iToken] = "all";
                    }
                    if (aTokens[iToken] == "all") {
                        aTokens = Object.keys(MESSAGE.NAMES);
                    }
                    for (let i = iToken; i < aTokens.length; i++) {
                        token = aTokens[i];
                        message = MESSAGE.NAMES[token];
                        if (!message) {
                            result += "unrecognized message: " + token + '\n';
                            break;
                        }
                        if (on != undefined) {
                            this.setMessages(message, on);
                        }
                        if (list == undefined || list == this.isMessageOn(message)) {
                            result += this.sprintf("%8s: %b\n", token, this.isMessageOn(message));
                        }
                    }
                    if (this.isMessageOn(MESSAGE.BUFFER)) {
                        result += "all messages will be buffered until buffer is turned off\n";
                    }
                    if (!result) result = "no messages\n";
                    break;

                case '?':
                    result = "";
                    WebIO.COMMANDS.forEach((command) => {result += command + '\n';});
                    if (result) result = "default commands:\n" + result;
                    /* falls through */

                default:
                    aTokens.unshift(command);
                    if (afnHandlers) {
                        for (let i = 0; i < afnHandlers.length; i++) {
                            let s = afnHandlers[i](aTokens);
                            if (s != undefined) {
                                if (!result) {
                                    result = s;
                                } else {
                                    result += s;
                                }
                                break;
                            }
                        }
                    }
                    break;
                }
            }
            catch(err) {
                result = "error: " + err.message + '\n';
            }
        }
        return result;
    }

    /**
     * parseCommands(commands)
     *
     * @this {WebIO}
     * @param {string} [commands]
     * @returns {string|undefined}
     */
    parseCommands(commands = "?")
    {
        let result;
        if (commands) {
            result = "";
            let aCommands = commands.split(/(?:\n|;\s*)/);
            for (let i = 0; i < aCommands.length; i++) {
                result += this.parseCommand(aCommands[i]);
            }
        }
        return result;
    }

    /**
     * print(s)
     *
     * This overrides StdIO.print(), in case the device has a PRINT binding that should be used instead,
     * or if all printing should be buffered.
     *
     * @this {WebIO}
     * @param {string} s
     * @param {boolean} [fBuffer] (true to always buffer; otherwise, only buffer the last partial line)
     * @returns {number}
     */
    print(s, fBuffer)
    {
        if (fBuffer == undefined) {
            fBuffer = this.isMessageOn(MESSAGE.BUFFER);
        }
        if (!fBuffer) {
            let element = this.findBinding(WebIO.BINDING.PRINT, true);
            if (element) {
                let insert = element.selectionStart;
                let parts = s.split(/([\n\r\b])/);
                for (let i = 0; i < parts.length; i++) {
                    let s = parts[i];
                    if (!s) continue;
                    if (s == '\b' || s == '\r') {
                        while (insert > 0) {
                            let chPrev = element.value.slice(insert - 1, insert);
                            if (chPrev == '\n') break;
                            insert--;
                            if (s == '\b') break;
                        }
                    }
                    else if (s == '\n') {
                        let chInsert = "";
                        while (insert < element.value.length) {
                            chInsert = element.value[insert];
                            insert++;
                            if (chInsert == '\n') break;
                        }
                        if (chInsert != '\n') {
                            element.value += "\r\n";
                            insert = element.value.length;
                        }
                    } else {
                        /*
                         * The default behavior here is "overwrite" as opposed to "insert", thanks to the
                         * "insert + s.length" of the second slice(), so if you want a textarea to operate
                         * in "insert" mode, we'll have to add some mechanism to enable that.
                         */
                        element.value = element.value.slice(0, insert) + s + element.value.slice(insert + s.length);
                        insert += s.length;
                    }
                }
                /**
                 * Strangely, setSelectionRange() won't remain in effect unless the element also has focus.
                 */
                element.focus();
                element.setSelectionRange(insert, insert);
                /**
                 * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
                 */
                if (!WebIO.DEBUG && element.value.length >= 8192) {
                    let excess = (element.value.length - 8192) + 4096;
                    element.value = element.value.slice(excess);
                }
                element.scrollTop = element.scrollHeight;
                /**
                 * Safari required this, to keep the caret at the end; Chrome and Firefox, not so much.  Go figure.
                 *
                 * However, if I did this in Safari on iPadOS WHILE the app was full-screen, Safari canceled full-screen
                 * mode.  Argh.  And if printf() was called during the full-screen mode change, setSelectionRange() could
                 * trigger the iPad's soft keyboard, even if the machine did not require it (eg, Space Invaders).
                 *
                 * So this Safari-specific hack was performed ONLY on non-iOS devices.  But now I avoid the hack entirely,
                 * because otherwise it would ruin all the code I've since added above to carefully simulate backspace (\b)
                 * and carriage return (\r) characters.
                 *
                 *      if (!this.isUserAgent("iOS")) {
                 *          element.setSelectionRange(element.value.length, element.value.length);
                 *      }
                 */
                return s.length;
            }
        }
        return super.print(s, fBuffer);
    }


    /**
     * printf(format, ...args)
     *
     * This overrides StdIO.printf(), to add support for messages; if format is a number, then it's treated
     * as one or more MESSAGE flags, and the real format string is the first arg.
     *
     * @this {WebIO}
     * @param {string|number} format
     * @param {...} [args]
     * @returns {number}
     */
    printf(format, ...args)
    {
        let messages = 0;
        if (typeof format == "number") {
            messages = format;
            format = args.shift();
        }
        if (this.isMessageOn(messages)) {
            if (this.testBits(messages, MESSAGE.ERROR)) {
                format = "error: " + format;
            }
            if (this.testBits(messages, MESSAGE.WARNING)) {
                format = "warning: " + format;
            }
            return super.printf(format, ...args);
        }
        return 0;
    }

    /**
     * saveLocalStorage(state)
     *
     * @this {WebIO}
     * @param {Array} state
     * @returns {boolean} true if successful, false if error
     */
    saveLocalStorage(state)
    {
        if (this.hasLocalStorage()) {
            let sValue = JSON.stringify(state);
            try {
                window.localStorage.setItem(this.idMachine, sValue);
                return true;
            } catch(err) {
                this.printf("%s\n", err.message);
            }
        }
        return false;
    }

    /**
     * setBindingText(name, text)
     *
     * @this {WebIO}
     * @param {string} name
     * @param {string} text
     * @returns {boolean} (true if binding exists; false otherwise)
     */
    setBindingText(name, text)
    {
        let element = this.bindings[name];
        if (element) {
            if (element.textContent != text) {
                element.textContent = text;
            }
            return true;
        }
        return false;
    }

    /**
     * getMessages()
     *
     * @this {WebIO}
     * @returns {number}
     */
    getMessages()
    {
        return this.machine.messages;
    }

    /**
     * setMessages(messages, on)
     *
     * Use this function to set/clear message groups.  Use isMessageOn() to decide whether to print
     * messages that are part of a group.
     *
     * MESSAGE.BUFFER is special, causing all print calls to be buffered; the print buffer will be dumped
     * as soon as setMessages() clears MESSAGE.BUFFER.
     *
     * @this {WebIO}
     * @param {number} messages
     * @param {boolean} on (true to set, false to clear)
     * @returns {number} (previous messages set)
     */
    setMessages(messages, on)
    {
        let flush = false;
        let previous = this.machine.messages;
        if (on) {
            this.machine.messages = this.setBits(this.machine.messages, messages);
        } else {
            flush = (this.testBits(this.machine.messages, MESSAGE.BUFFER) && this.testBits(messages, MESSAGE.BUFFER));
            this.machine.messages = this.clearBits(this.machine.messages, messages);
        }
        if (flush) this.flush();
        return previous;
    }
}

WebIO.BINDING = {
    CLEAR:      "clear",
    PRINT:      "print"
};

WebIO.COMMANDS = [
    "\u2191 \u2193\t\trecall commands",
    "@\t\trepeat last command",
    "m?\t\tmessage commands"
];

WebIO.MESSAGE_COMMANDS = [
    "m\t\tdisplay all messages",
    "m on\t\tdisplay all active messages",
    "m off\t\tdisplay all inactive messages",
    "m all [on|off]\tturn all messages on or off",
    "m ... [on|off]\tturn selected messages on or off"
];

WebIO.HANDLER = {
    COMMAND:    "command"
};

/**
 * Codes provided by KeyboardEvent.keyCode on a "keypress" event (aka ASCII codes).
 */
WebIO.CHARCODE = {
    /* 0x0D */ CR:          13,
    /* 0x41 */ A:           65,
    /* 0x42 */ B:           66,
    /* 0x43 */ C:           67,
    /* 0x44 */ D:           68,
    /* 0x45 */ E:           69,
    /* 0x46 */ F:           70,
    /* 0x47 */ G:           71,
    /* 0x48 */ H:           72,
    /* 0x49 */ I:           73,
    /* 0x4A */ J:           74,
    /* 0x4B */ K:           75,
    /* 0x4C */ L:           76,
    /* 0x4D */ M:           77,
    /* 0x4E */ N:           78,
    /* 0x4F */ O:           79,
    /* 0x50 */ P:           80,
    /* 0x51 */ Q:           81,
    /* 0x52 */ R:           82,
    /* 0x53 */ S:           83,
    /* 0x54 */ T:           84,
    /* 0x55 */ U:           85,
    /* 0x56 */ V:           86,
    /* 0x57 */ W:           87,
    /* 0x58 */ X:           88,
    /* 0x59 */ Y:           89,
    /* 0x5A */ Z:           90,
    /* 0x61 */ a:           97,
    /* 0x62 */ b:           98,
    /* 0x63 */ c:           99,
    /* 0x64 */ d:           100,
    /* 0x65 */ e:           101,
    /* 0x66 */ f:           102,
    /* 0x67 */ g:           103,
    /* 0x68 */ h:           104,
    /* 0x69 */ i:           105,
    /* 0x6A */ j:           106,
    /* 0x6B */ k:           107,
    /* 0x6C */ l:           108,
    /* 0x6D */ m:           109,
    /* 0x6E */ n:           110,
    /* 0x6F */ o:           111,
    /* 0x70 */ p:           112,
    /* 0x71 */ q:           113,
    /* 0x72 */ r:           114,
    /* 0x73 */ s:           115,
    /* 0x74 */ t:           116,
    /* 0x75 */ u:           117,
    /* 0x76 */ v:           118,
    /* 0x77 */ w:           119,
    /* 0x78 */ x:           120,
    /* 0x79 */ y:           121,
    /* 0x7A */ z:           122
};

/**
 * Codes provided by KeyboardEvent.keyCode on "keydown" and "keyup" events.
 */
WebIO.KEYCODE = {
    /* 0x08 */  BS:          8,         // BACKSPACE        (ASCII.CTRL_H)
    /* 0x09 */  TAB:         9,         // TAB              (ASCII.CTRL_I)
    /* 0x0A */  LF:          10,        // LINEFEED         (ASCII.CTRL_J) (Some Windows-based browsers used to generate this via CTRL-ENTER)
    /* 0x0D */  CR:          13,        // CARRIAGE RETURN  (ASCII.CTRL_M)
    /* 0x10 */  SHIFT:       16,
    /* 0x11 */  CTRL:        17,
    /* 0x12 */  ALT:         18,
    /* 0x13 */  PAUSE:       19,        // PAUSE/BREAK
    /* 0x14 */  CAPS_LOCK:   20,
    /* 0x1B */  ESC:         27,
    /* 0x20 */  SPACE:       32,
    /* 0x21 */  PGUP:        33,
    /* 0x22 */  PGDN:        34,
    /* 0x23 */  END:         35,
    /* 0x24 */  HOME:        36,
    /* 0x25 */  LEFT:        37,
    /* 0x26 */  UP:          38,
    /* 0x27 */  RIGHT:       39,
    /* 0x27 */  FF_QUOTE:    39,
    /* 0x28 */  DOWN:        40,
    /* 0x2C */  FF_COMMA:    44,
    /* 0x2C */  PRTSC:       44,
    /* 0x2D */  INS:         45,
    /* 0x2E */  DEL:         46,
    /* 0x2E */  FF_PERIOD:   46,
    /* 0x2F */  FF_SLASH:    47,
    /* 0x30 */  ZERO:        48,
    /* 0x31 */  ONE:         49,
    /* 0x32 */  TWO:         50,
    /* 0x33 */  THREE:       51,
    /* 0x34 */  FOUR:        52,
    /* 0x35 */  FIVE:        53,
    /* 0x36 */  SIX:         54,
    /* 0x37 */  SEVEN:       55,
    /* 0x38 */  EIGHT:       56,
    /* 0x39 */  NINE:        57,
    /* 0x3B */  FF_SEMI:     59,
    /* 0x3D */  FF_EQUALS:   61,
    /* 0x41 */  A:           65,
    /* 0x42 */  B:           66,
    /* 0x43 */  C:           67,
    /* 0x44 */  D:           68,
    /* 0x45 */  E:           69,
    /* 0x46 */  F:           70,
    /* 0x47 */  G:           71,
    /* 0x48 */  H:           72,
    /* 0x49 */  I:           73,
    /* 0x4A */  J:           74,
    /* 0x4B */  K:           75,
    /* 0x4C */  L:           76,
    /* 0x4D */  M:           77,
    /* 0x4E */  N:           78,
    /* 0x4F */  O:           79,
    /* 0x50 */  P:           80,
    /* 0x51 */  Q:           81,
    /* 0x52 */  R:           82,
    /* 0x53 */  S:           83,
    /* 0x54 */  T:           84,
    /* 0x55 */  U:           85,
    /* 0x56 */  V:           86,
    /* 0x57 */  W:           87,
    /* 0x58 */  X:           88,
    /* 0x59 */  Y:           89,
    /* 0x5A */  Z:           90,
    /* 0x5B */  CMD:         91,        // aka WIN
    /* 0x5B */  FF_LBRACK:   91,
    /* 0x5C */  FF_BSLASH:   92,
    /* 0x5D */  RCMD:        93,        // aka MENU
    /* 0x5D */  FF_RBRACK:   93,
    /* 0x60 */  NUM_0:       96,
    /* 0x60 */  NUM_INS:     96,
    /* 0x60 */  FF_BQUOTE:   96,
    /* 0x61 */  NUM_1:       97,
    /* 0x61 */  NUM_END:     97,
    /* 0x62 */  NUM_2:       98,
    /* 0x62 */  NUM_DOWN:    98,
    /* 0x63 */  NUM_3:       99,
    /* 0x63 */  NUM_PGDN:    99,
    /* 0x64 */  NUM_4:       100,
    /* 0x64 */  NUM_LEFT:    100,
    /* 0x65 */  NUM_5:       101,
    /* 0x65 */  NUM_CENTER:  101,
    /* 0x66 */  NUM_6:       102,
    /* 0x66 */  NUM_RIGHT:   102,
    /* 0x67 */  NUM_7:       103,
    /* 0x67 */  NUM_HOME:    103,
    /* 0x68 */  NUM_8:       104,
    /* 0x68 */  NUM_UP:      104,
    /* 0x69 */  NUM_9:       105,
    /* 0x69 */  NUM_PGUP:    105,
    /* 0x6A */  NUM_MUL:     106,
    /* 0x6B */  NUM_ADD:     107,
    /* 0x6D */  NUM_SUB:     109,
    /* 0x6E */  NUM_DEL:     110,       // aka PERIOD
    /* 0x6F */  NUM_DIV:     111,
    /* 0x70 */  F1:          112,
    /* 0x71 */  F2:          113,
    /* 0x72 */  F3:          114,
    /* 0x73 */  F4:          115,
    /* 0x74 */  F5:          116,
    /* 0x75 */  F6:          117,
    /* 0x76 */  F7:          118,
    /* 0x77 */  F8:          119,
    /* 0x78 */  F9:          120,
    /* 0x79 */  F10:         121,
    /* 0x7A */  F11:         122,
    /* 0x7B */  F12:         123,
    /* 0x90 */  NUM_LOCK:    144,
    /* 0x91 */  SCROLL_LOCK: 145,
    /* 0xAD */  FF_DASH:     173,
    /* 0xBA */  SEMI:        186,       // Firefox:  59 (FF_SEMI)
    /* 0xBB */  EQUALS:      187,       // Firefox:  61 (FF_EQUALS)
    /* 0xBC */  COMMA:       188,
    /* 0xBD */  DASH:        189,       // Firefox: 173 (FF_DASH)
    /* 0xBE */  PERIOD:      190,
    /* 0xBF */  SLASH:       191,
    /* 0xC0 */  BQUOTE:      192,
    /* 0xDB */  LBRACK:      219,
    /* 0xDC */  BSLASH:      220,
    /* 0xDD */  RBRACK:      221,
    /* 0xDE */  QUOTE:       222,
    /* 0xE0 */  FF_CMD:      224,       // Firefox only (used for both CMD and RCMD)
                LOCK:        901,       // keyCode modifier: treat subsequent keyCode as a lock
                VIRTUAL:    1000        // bias used by other devices to define "virtual" keyCodes
};

/**
 * Maps Firefox-specific keyCodes to their more common keyCode counterparts.
 */
WebIO.FF_KEYCODE = {
    [WebIO.KEYCODE.FF_SEMI]:    WebIO.KEYCODE.SEMI,     //  59 -> 186
    [WebIO.KEYCODE.FF_EQUALS]:  WebIO.KEYCODE.EQUALS,   //  61 -> 187
    [WebIO.KEYCODE.FF_DASH]:    WebIO.KEYCODE.DASH,     // 173 -> 189
    [WebIO.KEYCODE.FF_CMD]:     WebIO.KEYCODE.CMD       // 224 -> 91
};

/**
 * Supported values that a browser may store in the 'location' property of a keyboard event object.
 */
WebIO.LOCATION = {
    LEFT:       1,
    RIGHT:      2,
    NUMPAD:     3
};

/**
 * This maps KEYCODE values to ASCII character (or a string representation for non-ASCII keys).
 */
WebIO.KEYNAME = {
    [WebIO.KEYCODE.BS]:     "\b",
    [WebIO.KEYCODE.TAB]:    "\t",
    [WebIO.KEYCODE.LF]:     "\n",
    [WebIO.KEYCODE.CR]:     "\r",
    [WebIO.KEYCODE.SPACE]:  " ",
    [WebIO.KEYCODE.ZERO]:   "0",
    [WebIO.KEYCODE.ONE]:    "1",
    [WebIO.KEYCODE.TWO]:    "2",
    [WebIO.KEYCODE.THREE]:  "3",
    [WebIO.KEYCODE.FOUR]:   "4",
    [WebIO.KEYCODE.FIVE]:   "5",
    [WebIO.KEYCODE.SIX]:    "6",
    [WebIO.KEYCODE.SEVEN]:  "7",
    [WebIO.KEYCODE.EIGHT]:  "8",
    [WebIO.KEYCODE.NINE]:   "9",
    [WebIO.KEYCODE.A]:      "A",
    [WebIO.KEYCODE.B]:      "B",
    [WebIO.KEYCODE.C]:      "C",
    [WebIO.KEYCODE.D]:      "D",
    [WebIO.KEYCODE.E]:      "E",
    [WebIO.KEYCODE.F]:      "F",
    [WebIO.KEYCODE.G]:      "G",
    [WebIO.KEYCODE.H]:      "H",
    [WebIO.KEYCODE.I]:      "I",
    [WebIO.KEYCODE.J]:      "J",
    [WebIO.KEYCODE.K]:      "K",
    [WebIO.KEYCODE.L]:      "L",
    [WebIO.KEYCODE.M]:      "M",
    [WebIO.KEYCODE.N]:      "N",
    [WebIO.KEYCODE.O]:      "O",
    [WebIO.KEYCODE.P]:      "P",
    [WebIO.KEYCODE.Q]:      "Q",
    [WebIO.KEYCODE.R]:      "R",
    [WebIO.KEYCODE.S]:      "S",
    [WebIO.KEYCODE.T]:      "T",
    [WebIO.KEYCODE.U]:      "U",
    [WebIO.KEYCODE.V]:      "V",
    [WebIO.KEYCODE.W]:      "W",
    [WebIO.KEYCODE.X]:      "X",
    [WebIO.KEYCODE.Y]:      "Y",
    [WebIO.KEYCODE.Z]:      "Z",
    [WebIO.KEYCODE.LEFT]:   "Left",
    [WebIO.KEYCODE.RIGHT]:  "Right",
};

WebIO.BrowserPrefixes = ['', 'moz', 'ms', 'webkit'];

WebIO.COLORS = {
    "aliceblue":            "#f0f8ff",
    "antiquewhite":         "#faebd7",
    "aqua":                 "#00ffff",
    "aquamarine":           "#7fffd4",
    "azure":                "#f0ffff",
    "beige":                "#f5f5dc",
    "bisque":               "#ffe4c4",
    "black":                "#000000",
    "blanchedalmond":       "#ffebcd",
    "blue":                 "#0000ff",
    "blueviolet":           "#8a2be2",
    "brown":                "#a52a2a",
    "burlywood":            "#deb887",
    "cadetblue":            "#5f9ea0",
    "chartreuse":           "#7fff00",
    "chocolate":            "#d2691e",
    "coral":                "#ff7f50",
    "cornflowerblue":       "#6495ed",
    "cornsilk":             "#fff8dc",
    "crimson":              "#dc143c",
    "cyan":                 "#00ffff",
    "darkblue":             "#00008b",
    "darkcyan":             "#008b8b",
    "darkgoldenrod":        "#b8860b",
    "darkgray":             "#a9a9a9",
    "darkgreen":            "#006400",
    "darkkhaki":            "#bdb76b",
    "darkmagenta":          "#8b008b",
    "darkolivegreen":       "#556b2f",
    "darkorange":           "#ff8c00",
    "darkorchid":           "#9932cc",
    "darkred":              "#8b0000",
    "darksalmon":           "#e9967a",
    "darkseagreen":         "#8fbc8f",
    "darkslateblue":        "#483d8b",
    "darkslategray":        "#2f4f4f",
    "darkturquoise":        "#00ced1",
    "darkviolet":           "#9400d3",
    "deeppink":             "#ff1493",
    "deepskyblue":          "#00bfff",
    "dimgray":              "#696969",
    "dodgerblue":           "#1e90ff",
    "firebrick":            "#b22222",
    "floralwhite":          "#fffaf0",
    "forestgreen":          "#228b22",
    "fuchsia":              "#ff00ff",
    "gainsboro":            "#dcdcdc",
    "ghostwhite":           "#f8f8ff",
    "gold":                 "#ffd700",
    "goldenrod":            "#daa520",
    "gray":                 "#808080",
    "green":                "#008000",
    "greenyellow":          "#adff2f",
    "honeydew":             "#f0fff0",
    "hotpink":              "#ff69b4",
    "indianred ":           "#cd5c5c",
    "indigo":               "#4b0082",
    "ivory":                "#fffff0",
    "khaki":                "#f0e68c",
    "lavender":             "#e6e6fa",
    "lavenderblush":        "#fff0f5",
    "lawngreen":            "#7cfc00",
    "lemonchiffon":         "#fffacd",
    "lightblue":            "#add8e6",
    "lightcoral":           "#f08080",
    "lightcyan":            "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgrey":            "#d3d3d3",
    "lightgreen":           "#90ee90",
    "lightpink":            "#ffb6c1",
    "lightsalmon":          "#ffa07a",
    "lightseagreen":        "#20b2aa",
    "lightskyblue":         "#87cefa",
    "lightslategray":       "#778899",
    "lightsteelblue":       "#b0c4de",
    "lightyellow":          "#ffffe0",
    "lime":                 "#00ff00",
    "limegreen":            "#32cd32",
    "linen":                "#faf0e6",
    "magenta":              "#ff00ff",
    "maroon":               "#800000",
    "mediumaquamarine":     "#66cdaa",
    "mediumblue":           "#0000cd",
    "mediumorchid":         "#ba55d3",
    "mediumpurple":         "#9370d8",
    "mediumseagreen":       "#3cb371",
    "mediumslateblue":      "#7b68ee",
    "mediumspringgreen":    "#00fa9a",
    "mediumturquoise":      "#48d1cc",
    "mediumvioletred":      "#c71585",
    "midnightblue":         "#191970",
    "mintcream":            "#f5fffa",
    "mistyrose":            "#ffe4e1",
    "moccasin":             "#ffe4b5",
    "navajowhite":          "#ffdead",
    "navy":                 "#000080",
    "oldlace":              "#fdf5e6",
    "olive":                "#808000",
    "olivedrab":            "#6b8e23",
    "orange":               "#ffa500",
    "orangered":            "#ff4500",
    "orchid":               "#da70d6",
    "palegoldenrod":        "#eee8aa",
    "palegreen":            "#98fb98",
    "paleturquoise":        "#afeeee",
    "palevioletred":        "#d87093",
    "papayawhip":           "#ffefd5",
    "peachpuff":            "#ffdab9",
    "peru":                 "#cd853f",
    "pink":                 "#ffc0cb",
    "plum":                 "#dda0dd",
    "powderblue":           "#b0e0e6",
    "purple":               "#800080",
    "rebeccapurple":        "#663399",
    "red":                  "#ff0000",
    "rosybrown":            "#bc8f8f",
    "royalblue":            "#4169e1",
    "saddlebrown":          "#8b4513",
    "salmon":               "#fa8072",
    "sandybrown":           "#f4a460",
    "seagreen":             "#2e8b57",
    "seashell":             "#fff5ee",
    "sienna":               "#a0522d",
    "silver":               "#c0c0c0",
    "skyblue":              "#87ceeb",
    "slateblue":            "#6a5acd",
    "slategray":            "#708090",
    "snow":                 "#fffafa",
    "springgreen":          "#00ff7f",
    "steelblue":            "#4682b4",
    "tan":                  "#d2b48c",
    "teal":                 "#008080",
    "thistle":              "#d8bfd8",
    "tomato":               "#ff6347",
    "turquoise":            "#40e0d0",
    "violet":               "#ee82ee",
    "wheat":                "#f5deb3",
    "white":                "#ffffff",
    "whitesmoke":           "#f5f5f5",
    "yellow":               "#ffff00",
    "yellowgreen":          "#9acd32"
};

WebIO.LocalStorage = {
    Available:  undefined,
    Test:       "PCjs.localStorage"
};

WebIO.CLASSES["WebIO"] = WebIO;
