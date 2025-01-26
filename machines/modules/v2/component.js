/**
 * @fileoverview PCjs Base Component Class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * All PCjs components now use JSDoc types, primarily so that Google's Closure Compiler will compile
 * everything with zero warnings when ADVANCED_OPTIMIZATIONS are enabled.  For more information about
 * the JSDoc types supported by the Closure Compiler:
 *
 *      https://developers.google.com/closure/compiler/docs/js-for-compiler#types
 *
 * I also attempted to validate this code with JSLint, but it complained too much; eg, it didn't like
 * "while (true)", a tried and "true" programming convention for decades, and it wanted me to replace
 * all "++" and "--" operators with "+= 1" and "-= 1", use "(s || '')" instead of "(s? s : '')", etc.
 *
 * I prefer sticking with traditional C-style idioms, in part because they are more portable.  That
 * does NOT mean I'm trying to write "portable JavaScript," but some of this code was ported from C code
 * I'd written long ago, so portability is good, and I'm not going to throw that away if there's no need.
 *
 * UPDATE: I've since switched from JSLint to JSHint, which seems to have more reasonable defaults.
 * And for new code, I have adopted some popular JavaScript idioms, like "(s || '')", although the need
 * for those kinds of expressions will be reduced as I also start adopting some ES6 features, like
 * default parameters.
 */

import MESSAGE from "./message.js";
import StrLib from "./strlib.js";
import { COMPILED, DEBUG, DEBUGGER, MAXDEBUG, globals } from "./defines.js";

/**
 * Since the Closure Compiler treats ES6 classes as @struct rather than @dict by default,
 * it deters us from defining named properties on our components; eg:
 *
 *      this['exports'] = {...}
 *
 * results in an error:
 *
 *      Cannot do '[]' access on a struct
 *
 * So, in order to define 'exports', we must override the @struct assumption by annotating
 * the class as @unrestricted (or @dict).  Note that this must be done both here and in the
 * subclass (eg, SerialPort), because otherwise the Compiler won't allow us to *reference*
 * the named property either.
 *
 * TODO: Consider marking ALL our classes unrestricted, because otherwise it forces us to
 * define every single property the class uses in its constructor, which results in a fair
 * bit of redundant initialization, since many properties aren't (and don't need to be) fully
 * initialized until the appropriate init(), reset(), restore(), etc. function is called.
 *
 * The upside, however, may be that since the structure of the class is completely defined by
 * the constructor, JavaScript engines may be able to optimize and run more efficiently.
 *
 * @class Component
 * @unrestricted
 */
export default class Component {
    /*
    * Types recognized and supported by selected functions (eg, Computer.getMachineParm())
    */
    static TYPE = {
        NUMBER:     "number",
        OBJECT:     "object",
        STRING:     "string"
    };

    /*
    * Every component created on the current page is recorded in this array (see Component.add()),
    * enabling any component to locate another component by ID (see Component.getComponentByID())
    * or by type (see Component.getComponentByType()).
    *
    * Every machine on the page are now recorded as well, by their machine ID.  We then record the
    * various resources used by that machine.
    */

    static asyncCommands = [
        'hold', 'sleep', 'wait'
    ];

    static globalCommands = {
        'alert': Component.scriptAlert,
        'sleep': Component.scriptSleep
    };

    static componentCommands = {
        'select':   Component.scriptSelect
    };

    static lastUID = 0;

    /**
     * Component(type, parms, bitsMessage)
     *
     * A Component object requires:
     *
     *      type: a user-defined type name (eg, "CPU")
     *
     * and accepts any or all of the following (parms) properties:
     *
     *      id: component ID (default is "")
     *      name: component name (default is ""; if blank, toString() will use the type name only)
     *      comment: component comment string (default is undefined)
     *
     * Component subclasses will usually have additional (parms) properties.
     *
     * @param {string} type
     * @param {Object} [parms]
     * @param {number} [bitsMessage] selects message(s) that the component wants to enable (default is 0)
     */
    constructor(type, parms, bitsMessage)
    {
        this.type = type;

        if (!parms) parms = {'id': "", 'name': ""};

        this.name = parms['name'];
        this.comment = parms['comment'];
        this.parms = parms;
        this.uid = ++Component.lastUID;

        /*
         * The following Component properties need to be accessible by other machines and/or command scripts;
         * well, OK, or we could have exported some new functions to walk the contents of these properties, as we
         * did with findMachineComponent(), but this works just as well.
         *
         * Also, while the double-assignment looks silly (ie, using both dot and bracket property notation), it
         * resolves a complaint from the Closure Compiler, because if we use ONLY bracket notation here, then the
         * Compiler wants us to change all the other references to bracket notation as well.
         */
        this.id = this['id'] = parms['id'] || "";
        this.exports = this['exports'] = {};
        this.bindings = this['bindings'] = {};

        let i = this.id.indexOf('.');
        if (i < 0) {
            this.idMachine = "PCjs";
            this.idComponent = this.id;
        } else {
            this.idMachine = this.id.substr(0, i);
            this.idComponent = this.id.substr(i + 1);
        }

        /*
         * Gather all the various component flags (booleans) into a single "flags" object, and encourage
         * subclasses to do the same, to reduce the property clutter we have to wade through while debugging.
         */
        this.flags = {
            ready:      false,
            busy:       false,
            busyCancel: false,
            initDone:   false,
            powered:    false,
            unloading:  false,
            error:      false
        };

        this.fnReady = null;
        this.clearError();
        this.bitsMessage = bitsMessage || 0;

        this.cmp = null;
        this.bus = null;
        this.cpu = null;
        this.dbg = null;

        /*
         * TODO: Consider adding another parameter to the Component() constructor that allows components to tell
         * us if they support single or multiple instances per machine.  For example, there can be multiple SerialPort
         * components per machine, but only one CPU component (some machines also support an FPU, but that component
         * is considered separate from the CPU).
         *
         * It's not critical, but it would help catch machine configuration errors; for example, a machine that mistakenly
         * includes two CPU components may, aside from wasting memory, end up with odd side-effects, like unresponsive
         * CPU controls.
         */
        Component.add(this);
    }

    /**
     * Component.add(component)
     *
     * @param {Component} component
     */
    static add(component)
    {
        /*
         * This just generates a lot of useless noise, handy in the early days, not so much these days....
         *
         *      if (DEBUG) Component.printf("Component.add(%s,%s)\n", component.type, component.id);
         */
        globals.pcjs['components'].push(component);
    }

    /**
     * Component.addMachine(idMachine)
     *
     * @param {string} idMachine
     */
    static addMachine(idMachine)
    {
        globals.pcjs['machines'][idMachine] = {};
    }

    /**
     * Component.destroyMachine(idMachine)
     *
     * @param {string} idMachine
     * @returns {boolean} true if the machine was destroyed, false if it didn't exist
     */
    static destroyMachine(idMachine)
    {
        if (globals.pcjs['machines'][idMachine]) {
            let components = globals.pcjs['components'];
            for (let i = 0; i < components.length; i++) {
                let component = components[i];
                if (component.id.indexOf(idMachine) == 0) {
                    components.splice(i--, 1);
                }
            }
            delete globals.pcjs['machines'][idMachine];
            return true;
        }
        return false;
    }

    /**
     * Component.getMachines()
     *
     * @returns {Array.<string>}
     */
    static getMachines()
    {
        return Object.keys(globals.pcjs['machines']);
    }

    /**
     * Component.addMachineResource(idMachine, sName, data)
     *
     * @param {string} idMachine
     * @param {string|null} sName (name of the resource)
     * @param {*} data
     */
    static addMachineResource(idMachine, sName, data)
    {
        /*
         * I used to assert(machines[idMachine]), but when we're running as a Node app, embed.js is not used,
         * so addMachine() is never called, so resources do not need to be recorded.
         */
        if (globals.pcjs['machines'][idMachine] && sName) {
            globals.pcjs['machines'][idMachine][sName] = data;
            if (sName == 'parms' && typeof data == "string") {
                globals.pcjs['machines'][idMachine]['config'] = eval('(' + data + ')');
            }
        }
    }

    /**
     * Component.getMachineResources(idMachine)
     *
     * @param {string} idMachine
     * @returns {Object|undefined}
     */
    static getMachineResources(idMachine)
    {
        return globals.pcjs['machines'][idMachine];
    }

    /**
     * Component.getTime()
     *
     * @returns {number} the current time, in milliseconds
     */
    static getTime()
    {
        return Date.now() || +new Date();
    }

    /**
     * Component.printf(format, ...args)
     *
     * If format is a number, it's used as a message number, and the format string is the first arg.
     *
     * @param {string|number} format
     * @param {...} [args]
     */
    static printf(format, ...args)
    {
        let bitsMessage = 0;
        if (typeof format == "number") {
            bitsMessage = format;
            format = args.shift();
        }
        if (DEBUG || bitsMessage >= MESSAGE.LOG && bitsMessage <= MESSAGE.ERROR) {
            let alert = false;
            if (bitsMessage == MESSAGE.ERROR) {
                alert = true;
                format = "Error: " + format;
            } else if (bitsMessage == MESSAGE.WARNING) {
                alert = true;
                format = "Warning: " + format;
            } else if (bitsMessage == MESSAGE.NOTICE) {
                alert = true;
            }
            let sMessage = StrLib.sprintf(format, ...args).trim();
            if (!alert) {
                console.log(sMessage);
            } else {
                Component.alertUser(sMessage);
            }
        }
    }

    /**
     * Component.assert(f, s, args)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * The Closure Compiler should automatically remove all references to Component.assert() in non-DEBUG builds.
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @param {boolean|number|undefined} f is the expression we are asserting to be true
     * @param {string} [s] is description of the assertion on failure
     * @param {...} [args]
     */
    static assert(f, s, ...args)
    {
        if (DEBUG) {
            if (!f) {
                if (!s) s = "assertion failure";
                /*
                 * Why do we throw an Error only to immediately catch and ignore it?  Simply to give
                 * any IDE the opportunity to inspect the application's state.  Even when the IDE has
                 * control, you should still be able to invoke Debugger commands from the IDE's REPL,
                 * using the global function that the Debugger constructor defines; eg:
                 *
                 *      pcx86('r')
                 *      pcx86('dw 0:0')
                 *      pcx86('h')
                 *      ...
                 *
                 * If you have no desire to stop on assertions, consider this a no-op.  However, another
                 * potential benefit of creating an Error object is that, for browsers like Chrome, we get
                 * a stack trace, too.
                 */
                try {
                    throw new Error(StrLib.sprintf(s, ...args));
                } catch(e) {
                    Component.printf(MESSAGE.ERROR, "%s\n", (e.stack || e.message).replace(/^Error: /i, ""));
                }
            }
        }
    }

    /**
     * Component.warning(s)
     *
     * @param {string} s describes the warning
     */
    static warning(s)
    {
        Component.printf(MESSAGE.WARNING, s);
    }

    /**
     * Component.error(s)
     *
     * @param {string} s describes the error; an alert() is displayed as well
     */
    static error(s)
    {
        Component.printf(MESSAGE.ERROR, s);
    }

    /**
     * Component.alertUser(sMessage, fPrinted)
     *
     * @param {string} sMessage
     * @param {boolean} [fPrinted] (true if the message has already been printed)
     */
    static alertUser(sMessage, fPrinted)
    {
        if (globals.window.alert) {
            globals.window.alert(sMessage);
        }
        if (!fPrinted) console.log(sMessage);
    }

    /**
     * Component.confirmUser(sPrompt)
     *
     * @param {string} sPrompt
     * @returns {boolean} true if the user clicked OK, false if Cancel/Close
     */
    static confirmUser(sPrompt)
    {
        let fResponse = false;
        if (globals.window.confirm) {
            fResponse = globals.window.confirm(sPrompt);
        }
        return fResponse;
    }

    /**
     * Component.promptUser()
     *
     * @param {string} sPrompt
     * @param {string} [sDefault]
     * @returns {string|null}
     */
    static promptUser(sPrompt, sDefault)
    {
        let sResponse = null;
        if (globals.window.prompt) {
            sResponse = globals.window.prompt(sPrompt, sDefault === undefined? "" : sDefault);
        }
        return sResponse;
    }

    /**
     * Component.appendControl(control, sText)
     *
     * @param {Object} control
     * @param {string} sText
     */
    static appendControl(control, sText)
    {
        control.value += sText;
        /*
         * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
         */
        if (COMPILED) {
            sText = control.value;
            if (sText.length > 8192) control.value = sText.substr(sText.length - 4096);
        }
        control.scrollTop = control.scrollHeight;
    }

    /**
     * Component.replaceControl(control, sSearch, sReplace)
     *
     * @param {Object} control
     * @param {string} sSearch
     * @param {string} sReplace
     */
    static replaceControl(control, sSearch, sReplace)
    {
        let sText = control.value;
        let i = sText.lastIndexOf(sSearch);
        if (i < 0) {
            sText += sSearch + '\n';
        } else {
            sText = sText.substr(0, i) + sReplace + sText.substr(i + sSearch.length);
        }
        /*
         * Prevent the <textarea> from getting too large; otherwise, printing becomes slower and slower.
         */
        if (COMPILED && sText.length > 8192) sText = sText.substr(sText.length - 4096);
        control.value = sText;
        control.scrollTop = control.scrollHeight;
    }

    /**
     * Component.bindExternalControl(component, sBinding, sType)
     *
     * @param {Component} component
     * @param {string} sBinding
     * @param {string} [sType] is the external component type (default is "Panel")
     */
    static bindExternalControl(component, sBinding, sType = "Panel")
    {
        if (sBinding) {
            let target = Component.getComponentByType(sType, component.id);
            if (target) {
                let control = target.bindings[sBinding];
                if (control) {
                    component.setBinding("", sBinding, control);
                }
            }
        }
    }

    /**
     * Component.bindComponentControls(component, element, sAppClass)
     *
     * @param {Component} component
     * @param {HTMLElement} element (from the DOM)
     * @param {string} sAppClass
     */
    static bindComponentControls(component, element, sAppClass)
    {
        let aeControls = Component.getElementsByClass(sAppClass + "-control", "", element.parentNode);

        for (let iControl = 0; iControl < aeControls.length; iControl++) {

            let aeChildNodes = aeControls[iControl].childNodes;

            for (let iNode = 0; iNode < aeChildNodes.length; iNode++) {
                let control = aeChildNodes[iNode];
                if (control.nodeType !== 1 /* document.ELEMENT_NODE */) {
                    continue;
                }
                let sClass = control.getAttribute("class");
                if (!sClass) continue;
                let aClasses = sClass.split(" ");
                for (let iClass = 0; iClass < aClasses.length; iClass++) {
                    let parms;
                    sClass = aClasses[iClass];
                    switch (sClass) {
                        case sAppClass + "-binding":
                            parms = Component.getComponentParms(/** @type {HTMLElement} */(control));
                            if (parms && parms['binding'] !== undefined) {
                                component.setBinding(parms['type'], parms['binding'], /** @type {HTMLElement} */(control), parms['value']);
                            } else if (!parms || parms['type'] != "description") {
                                Component.printf(MESSAGE.WARNING, "Component \"%s\" missing binding%s\n", component.toString(), (parms? " for " + parms['type'] : ""));
                            }
                            iClass = aClasses.length;
                            break;
                        default:
                            // if (DEBUG) Component.printf(MESSAGE.WARNING, "Component.bindComponentControls(%s): unrecognized control class \"%s\"\n", component.toString(), sClass);
                            break;
                    }
                }
            }
        }
    }

    /**
     * Component.getComponents(idRelated)
     *
     * We could store components as properties, using the component's ID, and change
     * this linear lookup into a property lookup, but some components may have no ID.
     *
     * @param {string} [idRelated] of related component, if any
     * @returns {Array} of components
     */
    static getComponents(idRelated)
    {
        let i;
        let aComponents = [];
        /*
         * If idRelated is provided, we check it for a machine prefix, and use any
         * existing prefix to constrain matches to IDs with the same prefix, in order to
         * avoid matching components belonging to other machines.
         */
        if (idRelated && (i = idRelated.indexOf('.')) > 0) {
            idRelated = idRelated.substr(0, i + 1);
        }
        let components = globals.pcjs['components'];
        for (i = 0; i < components.length; i++) {
            let component = components[i];
            if (!idRelated || component.id.indexOf(idRelated) == 0) {
                aComponents.push(component);
            }
        }
        return aComponents;
    }

    /**
     * Component.getComponentByID(id, idRelated)
     *
     * We could store components as properties, using the component's ID, and change
     * this linear lookup into a property lookup, but some components may have no ID.
     *
     * @param {string} id of the desired component
     * @param {string|boolean} [idRelated] of related component
     * @returns {Component|null}
     */
    static getComponentByID(id, idRelated)
    {
        if (id !== undefined) {
            let i;
            /*
             * If idRelated is provided, we check it for a machine prefix, and use any
             * existing prefix to constrain matches to IDs with the same prefix, in order to
             * avoid matching components belonging to other machines.
             */
            if (idRelated && (i = idRelated.indexOf('.')) > 0) {
                id = idRelated.substr(0, i + 1) + id;
            }
            let components = globals.pcjs['components'];
            for (i = 0; i < components.length; i++) {
                if (components[i]['id'] === id) {
                    return components[i];
                }
            }
            if (components.length && idRelated !== false) {
                Component.printf(MESSAGE.WARNING, "Component ID \"%s\" not found\n", id);
            }
        }
        return null;
    }

    /**
     * Component.getComponentByType(sType, idRelated, componentPrev)
     *
     * @param {string} sType of the desired component
     * @param {string} [idRelated] of related component
     * @param {Component|boolean|null} [componentPrev] of previously returned component, if any
     * @returns {Component|null}
     */
    static getComponentByType(sType, idRelated, componentPrev = null)
    {
        if (sType !== undefined) {
            let i;
            /*
             * If idRelated is provided, we check it for a machine prefix, and use any
             * existing prefix to constrain matches to IDs with the same prefix, in order to
             * avoid matching components belonging to other machines.
             */
            if (idRelated) {
                if ((i = idRelated.indexOf('.')) > 0) {
                    idRelated = idRelated.substr(0, i + 1);
                } else {
                    idRelated = "";
                }
            }
            let components = globals.pcjs['components'];
            for (i = 0; i < components.length; i++) {
                if (componentPrev) {
                    if (componentPrev == components[i]) componentPrev = null;
                    continue;
                }
                if (sType == components[i].type && (!idRelated || !components[i].id.indexOf(idRelated))) {
                    return components[i];
                }
            }
            if (MAXDEBUG && componentPrev !== false) {
                Component.printf(MESSAGE.WARNING, "Component type \"%s\" not found\n", sType);
            }
        }
        return null;
    }

    /**
     * Component.getComponentParms(element)
     *
     * @param {HTMLElement} element (from the DOM)
     * @returns {Object|null}
     */
    static getComponentParms(element)
    {
        let parms = null;
        if (element.getAttribute) {
            let sParms = element.getAttribute("data-value");
            if (sParms) {
                try {
                    parms = /** @type {Object} */ (eval('(' + sParms + ')'));
                    /*
                    * We can no longer invoke removeAttribute() because some components (eg, Panel) need
                    * to run their initXXX() code more than once, to avoid initialization-order dependencies.
                    *
                    *      if (!DEBUG) {
                    *          element.removeAttribute("data-value");
                    *      }
                    */
                } catch(e) {
                    Component.error(e.message + " (" + sParms + ")");
                }
            }
        } else {
            parms = element['config'] || null;
            if (parms) {
                let idMachine = element['id'], idComponent = parms['id'];
                if (idMachine && idComponent && idComponent.indexOf('.') < 0) parms['id'] = idMachine + '.' + idComponent;
            }
        }
        return parms;
    }

    /**
     * Component.getElementsByClass(sClass, sComponent, element)
     *
     * This is a cross-browser helper function, since not all browser's support getElementsByClassName()
     *
     * TODO: This should probably be moved into weblib.js at some point, along with the control binding functions above,
     * to keep all the browser-related code together.
     *
     * @param {string} sClass
     * @param {string} [sComponent]
     * @param {HTMLElement|Object} [element] (from the DOM; default is document)
     * @returns {Array|NodeList}
     */
    static getElementsByClass(sClass, sComponent = "", element = globals.document)
    {
        let ae = [];
        if (sComponent) {
            sClass += '-' + sComponent;
            if (sComponent != "machine") sClass += "-object";
        }
        /*
         * Use the browser's built-in getElementsByClassName() if it appears to be available
         * (for example, it's not available in IE8, but it should be available in IE9 and up)
         */
        if (globals.browser) {
            if (element.getElementsByClassName) {
                ae = element.getElementsByClassName(sClass);
            }
            else if (element.getElementsByTagName) {
                let i, j;
                let aeAll = element.getElementsByTagName("*");
                let re = new RegExp('(^| )' + sClass + '( |$)');
                for (i = 0, j = aeAll.length; i < j; i++) {
                    if (re.test(aeAll[i].className)) {
                        ae.push(aeAll[i]);
                    }
                }
            }
        } else {
            let machineIDs = Object.keys(globals.pcjs['machines']);
            for (let iMachine = 0; iMachine < machineIDs.length; iMachine++) {
                let idMachine = machineIDs[iMachine];
                let configMachine = globals.pcjs['machines'][idMachine]['config'];
                if (configMachine) {
                    let configComponent = configMachine[sComponent];
                    if (configComponent) {
                        if (!Array.isArray(configComponent)) {
                            configComponent = [configComponent];
                        }
                        for (let component of configComponent) {
                            let fakeElement = {
                                'id': idMachine,
                                'config': component
                            };
                            ae.push(fakeElement);
                        }
                    }
                }
            }
        }
        if (!ae.length) {
            if (MAXDEBUG) Component.printf(MESSAGE.WARNING, "No elements of class \"%s\" found\n", sClass);
        }
        return ae;
    }

    /**
     * Component.getScriptCommands(sScript)
     *
     * This is a simple parser that breaks sScript into an array of commands, where each command
     * is an array of tokens, where tokens are sequences of characters separated by any of: tab, space,
     * carriage-return (CR), line-feed (LF), semicolon, single-quote, or double-quote; if a quote is
     * used, all characters up to the next matching quote become part of the token, allowing any of the
     * other separators to be part of the token.  CR, LF and semicolon also serve to terminate a command,
     * with semicolon being preferred, because it's 1) more visible, and 2) essential when the entire
     * script is a multi-line string where all CR/LF were replaced by spaces (which is what Jekyll does,
     * and since we can't change Jekyll, it's what our own MarkDown Front Matter parser does as well;
     * see convertMD() in markout.js, where the aCommandDefs array is built).
     *
     * Backslash sequences like \n, \r, and \\ have already been converted to LF, CR and backslash
     * characters, since the entire script string is injected into a JavaScript function call, so any
     * backslash sequence that JavaScript supports is automatically converted:
     *
     *      \0  \'  \"  \\  \n  \r  \v  \t  \b  \f  \uXXXX \xXX
     *                      ^J  ^M  ^K  ^I  ^H  ^L
     *
     * To support any other non-printable 8-bit character, such as ESC, you should use \xXX, where XX
     * is the ASCII code in hex.  For ESC, that would be \x1B.
     *
     * @param {string} sScript
     * @returns {Array}
     */
    static getScriptCommands(sScript)
    {
        let cch = sScript.length;
        let commands = [], aTokens = [], sToken = "", chQuote = null;
        for (let i = 0; i < cch; i++) {
            let ch = sScript[i];
            if (ch == '"' || ch == "'") {
                if (chQuote && ch != chQuote) {
                    sToken += ch;
                    continue;
                }
                if (!chQuote) {
                    chQuote = ch;
                } else {
                    chQuote = null;
                }
                if (sToken) {
                    aTokens.push(sToken);
                    sToken = "";
                }
                continue;
            }
            if (!chQuote) {
                if (ch == '\r' || ch == '\n') {
                    ch = ';';
                }
                if (ch == ' ' || ch == '\t' || ch == ';') {
                    if (sToken) {
                        aTokens.push(sToken);
                        sToken = "";
                    }
                    if (ch == ';' && aTokens.length) {
                        commands.push(aTokens);
                        aTokens = [];
                    }
                    continue;
                }
            }
            sToken += ch;
        }
        if (sToken) {
            aTokens.push(sToken);
        }
        if (aTokens.length) {
            commands.push(aTokens);
        }
        return commands;
    }

    /**
     * Component.processScript(idMachine, sScript)
     *
     * @param {string} idMachine
     * @param {string} [sScript]
     * @returns {boolean}
     */
    static processScript(idMachine, sScript)
    {
        let fSuccess = false;
        let commands = globals.pcjs['commands'];
        idMachine += ".machine";
        if (!sScript) {
            delete commands[idMachine];
            fSuccess = true;
        }
        else if (typeof sScript == "string" && !commands[idMachine]) {
            fSuccess = true;
            commands[idMachine] = Component.getScriptCommands(sScript);
            if (!Component.processCommands(idMachine)) {
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * Component.processCommands(idMachine)
     *
     * @param {string} idMachine
     * @returns {boolean}
     */
    static processCommands(idMachine)
    {
        let fSuccess = true;
        let commands = globals.pcjs['commands'][idMachine];

     // let dbg = Component.getComponentByType("Debugger", idMachine);

        while (commands && commands.length) {

            let aTokens = commands.splice(0, 1)[0];
            let sCommand = aTokens[0];

            /*
             * It's possible to route this output to the Debugger window with dbg.printf()
             * instead, but it's a bit too confusing mingling script output in a window that
             * already mingles Debugger and machine output.
             */
            Component.printf(MESSAGE.SCRIPT, aTokens.join(' '));

            let fnCallReady = null;
            if (Component.asyncCommands.indexOf(sCommand) >= 0) {
                fnCallReady = function processNextCommand() {
                    return function() {
                        Component.processCommands(idMachine);
                    };
                }();
            }

            let fnCommand = Component.globalCommands[sCommand];
            if (fnCommand) {
                if (!fnCallReady) {
                    fSuccess = fnCommand(aTokens[1], aTokens[2], aTokens[3]);
                } else {
                    if (!fnCommand(fnCallReady, aTokens[1], aTokens[2], aTokens[3])) break;
                }
            }
            else {
                fSuccess = false;
                let component = Component.getComponentByType(aTokens[1], idMachine);
                if (component) {
                    fnCommand = Component.componentCommands[sCommand];
                    if (fnCommand) {
                        fSuccess = fnCommand(component, aTokens[2], aTokens[3]);
                    }
                    else {
                        let exports = component['exports'];
                        if (exports) {
                            fnCommand = exports[sCommand];
                            if (fnCommand) {
                                fSuccess = true;
                                if (!fnCallReady) {
                                    fSuccess = fnCommand.call(component, aTokens[2], aTokens[3]);
                                } else {
                                    if (!fnCommand.call(component, fnCallReady, aTokens[2], aTokens[3])) break;
                                }
                            }
                        }
                    }
                }
            }

            if (!fSuccess) {
                Component.alertUser("Script error: '" + sCommand + "' command " + (fnCommand? " failed" : " not recognized"));
                break;
            }
        }

        if (commands && !commands.length) {
            delete globals.pcjs['commands'][idMachine];
        }

        return fSuccess;
    }

    /**
     * Component.scriptAlert(sMessage)
     *
     * @param {string} sMessage
     * @returns {boolean}
     */
    static scriptAlert(sMessage)
    {
        Component.alertUser(sMessage);
        return true;
    }

    /**
     * Component.scriptSelect(component, sBinding, sValue)
     *
     * @param {Component} component
     * @param {string} sBinding
     * @param {string} sValue
     * @returns {boolean}
     */
    static scriptSelect(component, sBinding, sValue)
    {
        let fSuccess = false;
        let aBindings = component['bindings'];
        let control = aBindings[sBinding];
        if (control) {
            for (let i = 0; i < control.options.length; i++) {
                if (control.options[i].textContent == sValue) {
                    if (control.selectedIndex != i) {
                        control.selectedIndex = i;
                    }
                    fSuccess = true;
                    break;
                }
            }
        }
        return fSuccess;
    }

    /**
     * Component.scriptSleep(fnCallback, sDelay)
     *
     * @param {function()} fnCallback
     * @param {string} sDelay (in milliseconds)
     * @returns {boolean}
     */
    static scriptSleep(fnCallback, sDelay)
    {
        setTimeout(fnCallback, +sDelay);
        return false;
    }

    /**
     * toString()
     *
     * @this {Component}
     * @returns {string}
     */
    toString()
    {
        return (this.name? this.name : (this.id || this.type));
    }

    /**
     * getMachineNum()
     *
     * @this {Component}
     * @returns {number} unique machine number
     */
    getMachineNum()
    {
        let nMachine = 1;
        if (this.idMachine) {
            let aDigits = this.idMachine.match(/\d+/);
            if (aDigits !== null) {
                nMachine = parseInt(aDigits[0], 10);
            }
        }
        return nMachine;
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * Component's setBinding() method is intended to be overridden by subclasses.
     *
     * @this {Component}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, 'print')
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        switch (sBinding) {

        case 'clear':
            if (!this.bindings[sBinding]) {
                this.bindings[sBinding] = control;
                control.onclick = (function(component) {
                    return function clearControl() {
                        if (component.bindings['print']) {
                            component.bindings['print'].value = "";
                        }
                    };
                }(this));
            }
            return true;

        case 'print':
            if (!this.bindings[sBinding]) {
                let controlTextArea = /** @type {HTMLTextAreaElement} */(control);
                this.bindings[sBinding] = controlTextArea;
                /*
                 * This was added for Firefox (Safari will clear the <textarea> on a page reload, but Firefox does not).
                 */
                controlTextArea.value = "";
                this.print = function(component, control) {
                    return function printControl(sMessage, bitsMessage = 0) {
                        if (!sMessage) sMessage = "";
                        if (bitsMessage == MESSAGE.PROGRESS && sMessage.slice(-4) == "...\n") {
                            Component.replaceControl(control, sMessage.slice(0, -1), sMessage.slice(0, -1) + ".");
                        } else {
                            Component.appendControl(control, sMessage);
                        }
                        if (!COMPILED) Component.printf(sMessage);
                    };
                }(this, controlTextArea);
            }
            return true;

        default:
            return false;
        }
    }

    /**
     * assert(f, s, args)
     *
     * Verifies conditions that must be true (for DEBUG builds only).
     *
     * WARNING: Make sure you preface all calls to this.assert() with "if (DEBUG)", because unlike Component.assert(),
     * the Closure Compiler can't be sure that this instance method hasn't been overridden, so it refuses to treat it as
     * dead code in non-DEBUG builds.
     *
     * TODO: Add a task to the build process that "asserts" there are no instances of "assertion failure" in RELEASE builds.
     *
     * @this {Component}
     * @param {boolean|number|undefined} f is the expression asserted to be true
     * @param {string} [s] is a description of the assertion to be displayed or logged on failure
     * @param {...} [args]
     */
    assert(f, s, ...args)
    {
        if (DEBUG) {
            if (!f) {
                s = "assertion failure in " + (this.id || this.type) + (s? ": " + s : "");
                if (DEBUGGER && this.dbg) {
                    this.dbg.stopCPU();
                }
                Component.assert(f, s, ...args);
            }
        }
    }

    /**
     * print(s, bitsMessage)
     *
     * Components using print() should wait until after their constructor has run to display any messages;
     * if a Control Panel has been loaded, its override will not take effect until its own constructor has run.
     *
     * @this {Component}
     * @param {string} s
     * @param {number} [bitsMessage] (optional; this method doesn't use it, but some overrides do)
     */
    print(s, bitsMessage = 0)
    {
        Component.printf(bitsMessage, s);
    }

    /**
     * setError(s)
     *
     * Set a fatal error condition
     *
     * TODO: Any cases where we should still prefix the string with "Fatal error: "?
     *
     * @this {Component}
     * @param {string} s describes a fatal error condition
     */
    setError(s)
    {
        this.flags.error = true;
        this.printf(MESSAGE.NOTICE, "%s\n", s);
    }

    /**
     * clearError()
     *
     * Clear any fatal error condition
     *
     * @this {Component}
     */
    clearError() {
        this.flags.error = false;
    }

    /**
     * isError()
     *
     * Report any fatal error condition
     *
     * @this {Component}
     * @returns {boolean} true if a fatal error condition exists, false if not
     */
    isError()
    {
        if (this.flags.error) {
            this.print(this.toString() + " error\n");
            return true;
        }
        return false;
    }

    /**
     * isReady(fnReady)
     *
     * Return the "ready" state of the component; if the component is not ready, it will queue the optional
     * notification function, otherwise it will immediately call the notification function, if any, without queuing it.
     *
     * NOTE: Since only the Computer component actually cares about the "readiness" of other components, the so-called
     * "queue" of notification functions supports exactly one function.  This keeps things nice and simple.
     *
     * @this {Component}
     * @param {function()} [fnReady]
     * @returns {boolean} true if the component is in a "ready" state, false if not
     */
    isReady(fnReady)
    {
        if (fnReady) {
            if (this.flags.ready) {
                fnReady();
            } else {
                if (MAXDEBUG) this.printf(MESSAGE.LOG, "NOT ready\n");
                this.fnReady = fnReady;
            }
        }
        return this.flags.ready;
    }

    /**
     * setReady(fReady)
     *
     * Set the "ready" state of the component to true, and call any queued notification functions.
     *
     * @this {Component}
     * @param {boolean} [fReady] is assumed to indicate "ready" unless EXPLICITLY set to false
     */
    setReady(fReady)
    {
        if (!this.flags.error) {
            this.flags.ready = (fReady !== false);
            if (this.flags.ready) {
                if (MAXDEBUG /* || this.name */) this.printf(MESSAGE.LOG, "ready\n");
                let fnReady = this.fnReady;
                this.fnReady = null;
                if (fnReady) fnReady();
            }
        }
    }

    /**
     * isBusy(fCancel)
     *
     * Return the "busy" state of the component
     *
     * @this {Component}
     * @param {boolean} [fCancel] is set to true to cancel a "busy" state
     * @returns {boolean} true if "busy", false if not
     */
    isBusy(fCancel)
    {
        if (this.flags.busy) {
            if (fCancel) {
                this.flags.busyCancel = true;
            } else if (fCancel === undefined) {
                this.print(this.toString() + " busy\n");
            }
        }
        return this.flags.busy;
    }

    /**
     * setBusy(fBusy)
     *
     * Update the current busy state; if a busyCancel request is pending, it will be honored now.
     *
     * @this {Component}
     * @param {boolean} fBusy
     * @returns {boolean}
     */
    setBusy(fBusy)
    {
        if (this.flags.busyCancel) {
            this.flags.busy = false;
            this.flags.busyCancel = false;
            return false;
        }
        if (this.flags.error) {
            this.print(this.toString() + " error\n");
            return false;
        }
        this.flags.busy = fBusy;
        return this.flags.busy;
    }

    /**
     * powerUp(fSave)
     *
     * @this {Component}
     * @param {Object|null} data
     * @param {boolean} [fRepower] is true if this is "repower" notification
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        this.flags.powered = true;
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {Component}
     * @param {boolean} fSave
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        if (fShutdown) this.flags.powered = false;
        return true;
    }

    /**
     * clearBits(num, bits)
     *
     * Helper function for clearing bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @returns {number}
     */
    static clearBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & ~bits) + (numHi & ~bitsHi) * shift;
    }

    /**
     * maskBits(num, bits)
     *
     * Helper function for returning bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @returns {number}
     */
    static maskBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num & bits) + (numHi & bitsHi) * shift;
    }

    /**
     * setBits(num, bits)
     *
     * Helper function for setting bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @returns {number}
     */
    static setBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return (num | bits) + (numHi | bitsHi) * shift;
    }

    /**
     * testBits(num, bits)
     *
     * Helper function for testing bits in numbers with more than 32 bits.
     *
     * @param {number} num
     * @param {number} bits
     * @returns {boolean} (true if ALL specified bits are set, false if not)
     */
    static testBits(num, bits)
    {
        let shift = Math.pow(2, 32);
        let numHi = (num / shift)|0;
        let bitsHi = (bits / shift)|0;
        return ((num & bits) == (bits|0) && (numHi & bitsHi) == bitsHi);
    }

    /**
     * messageEnabled(bitsMessage)
     *
     * If bitsMessage is MESSAGE.NONE (0), then the component's Messages category is used.
     *
     * @this {Component}
     * @param {number} [bitsMessage] is zero or more Message flags
     * @returns {boolean} true if the specified message(s) are enabled, false if not
     */
    messageEnabled(bitsMessage = 0)
    {
        /*
         * It's important to subtract MESSAGE.ADDR from bitsMessage before testing for MESSAGE.NONE, because
         * if MESSAGE.ADDR was the ONLY bit specified, we still want to default to the component's message category.
         */
        if (bitsMessage & MESSAGE.ADDR) bitsMessage -= MESSAGE.ADDR;
        bitsMessage = bitsMessage || this.bitsMessage;
        /*
         * printf() calls that specify MESSAGE.DEBUG should be stripped out of non-DEBUG builds, but just in case
         * any of those calls slipped through the cracks, we ensure that DEBUG messages are only printed in DEBUG builds.
         */
        if (DEBUG || !Component.testBits(bitsMessage, MESSAGE.DEBUG)) {
            /*
             * The debugger has the ability to filter any messages listed in MESSAGE.NAMES, and that currently
             * includes message types LOG and WARNING, so if the debugger is loaded, subtract those from the types we allow
             * by default.
             */
            let allowedMessages = MESSAGE.TYPES - (this.dbg? MESSAGE.LOG + MESSAGE.WARNING : 0);
            if (Component.testBits(allowedMessages, bitsMessage) || this.dbg && Component.testBits(this.dbg.bitsMessage, bitsMessage)) {
                return true;
            }
        }
        return false;
    }

    /**
     * printf(format, ...args)
     *
     * If format is a number, it's used as a message number, and the format string is the first arg; the call
     * will be suppressed unless the corresponding message category has been enabled by the debugger.
     *
     * Most components provide a default message number to their constructor, so any printf() without an explicit
     * message number will use that default.  If the caller wants a particular call to ALWAYS print, regardless
     * of whether the debugger has enabled it, the caller can use printf(MESSAGE.NONE), and if the caller wants
     * EVERY call to print, then simply omit any message number from their constructor AND all printf() calls.
     *
     * @this {Component}
     * @param {string|number} format
     * @param {...} args
     */
    printf(format, ...args)
    {
        let bitsMessage = 0;
        if (typeof format == "number") {
            bitsMessage = format || MESSAGE.PROGRESS;
            format = args.shift();
            if (Component.testBits(bitsMessage, MESSAGE.LOG)) {
                format = (this.id || this.type || "log") + ": " + format;
            }
            else if (Component.testBits(bitsMessage, MESSAGE.STATUS)) {
                format = this.type + ": " + format;
            }
        }
        if (this.messageEnabled(bitsMessage)) {
            let sMessage = StrLib.sprintf(format, ...args);
            if (this.dbg && this.dbg.message) {
                this.dbg.message(sMessage, bitsMessage);
            } else {
                this.print(sMessage, bitsMessage);
            }
        }
    }

    /**
     * printIO(port, bOut, addrFrom, name, bIn, bitsMessage)
     *
     * If bitsMessage is not specified, the component's Messages category is used,
     * and if bitsMessage is true, the message is displayed if MESSAGE.PORT is enabled also.
     *
     * @this {Component}
     * @param {number} port
     * @param {number} [bOut] if an output operation
     * @param {number} [addrFrom]
     * @param {string} [name] of the port, if any
     * @param {number} [bIn] is the input value, if known, on an input operation
     * @param {number|boolean} [bitsMessage] is zero or more Messages flag(s)
     */
    printIO(port, bOut, addrFrom, name, bIn, bitsMessage = this.bitsMessage)
    {
        if (DEBUGGER && this.dbg) {
            if (bitsMessage === true) {
                bitsMessage = 0;
            }
            this.dbg.messageIO(this, port, bOut, addrFrom, name, bIn, bitsMessage);
        }
    }
}

/*
 * The following polyfills provide ES5 functionality that's missing in older browsers (eg, IE8),
 * allowing PCjs apps to run without slamming into exceptions; however, due to the lack of HTML5 canvas
 * support in those browsers, all you're likely to see are "soft" errors (eg, "Missing <canvas> support").
 *
 * Perhaps we can implement a text-only faux video display for a fun retro-browser experience someday.
 *
 * TODO: Come up with a better place to put these polyfills.  We will likely have more if we decide to
 * make the leap from ES5 to ES6 features.
 */

/*
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (let i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    };
}

/*
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

/*
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function(obj) {
        if (typeof this != "function") {
            // Closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind: non-callable object");
        }
        let args = Array.prototype.slice.call(arguments, 1);
        let fToBind = this;
        let fnNOP = /** @constructor */ (function() {});
        let fnBound = function() {
            return fToBind.apply(this instanceof fnNOP && obj? this : obj, args.concat(/** @type {Array} */(Array.prototype.slice.call(arguments))));
        };
        fnNOP.prototype = this.prototype;
        fnBound.prototype = new fnNOP();
        return fnBound;
    };
}
