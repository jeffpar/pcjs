/**
 * @fileoverview Implements the PCx80 Computer component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BusX80 from "./bus.js";
import MESSAGE from "./message.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import UserAPI from "../../../modules/v2/userapi.js";
import UsrLib from "../../../modules/v2/usrlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, APPNAME, APPVERSION, COPYRIGHT, DEBUG, LICENSE, MAXDEBUG, TYPEDARRAYS, globals } from "./defines.js";

/**
 * TODO: The Closure Compiler treats ES6 classes as 'struct' rather than 'dict' by default,
 * which would force us to declare all class properties in the constructor, as well as prevent
 * us from defining any named properties.  So, for now, we mark all our classes as 'unrestricted'.
 *
 * @class ComputerX80
 * @unrestricted
 */
export default class ComputerX80 extends Component {
    /**
     * ComputerX80(parmsComputer, parmsMachine, fSuspended)
     *
     * The ComputerX80 component has no required (parmsComputer) properties, but it does
     * support the following:
     *
     *      autoPower: true to automatically power the computer (default), false to wait;
     *      false is honored only if a "power" button binding exists.
     *
     *      busWidth: number of memory address lines (address bits) on the computer's "bus";
     *      20 is the minimum (and the default), which implies 8086/8088 real-mode addressing,
     *      while 24 is required for 80286 protected-mode addressing.  This value is passed
     *      directly through to the Bus component; see that component for more details.
     *
     *      resume: one of the ComputerX80.RESUME constants, which are as follows:
     *          '0' if resume disabled (default)
     *          '1' if enabled without prompting
     *          '2' if enabled with prompting
     *          '3' if enabled with prompting and auto-delete
     *          or a string containing the path of a predefined JSON-encoded state
     *
     *      state: the path to JSON-encoded state file (see details regarding 'state' below)
     *
     * The parmsMachine object, if provided, may contain any of:
     *
     *      autoMount: if set, this should override any 'autoMount' property in the FDC's
     *      parmsFDC object.
     *
     *      autoPower: if set, this should override any 'autoPower' property in the ComputerX80's
     *      parmsComputer object.
     *
     *      messages: if set, this should override any 'messages' property in the Debugger's
     *      parmsDbg object.
     *
     *      state: if set, this should override any 'state' property in the ComputerX80's
     *      parmsComputer object.
     *
     *      url: the location of the machine XML file
     *
     * If a predefined state is supplied AND it's successfully loaded, then resume behavior
     * defaults to '1' (ie, resume enabled without prompting).
     *
     * This component insures that all components are ready before "powering" them.
     *
     * Different components become ready at different times, and initialization order (ie,
     * the order the scripts are combined on the page) only partially determines readiness.
     * This is because components like ROM and Video must finish loading their resource files
     * before they are ready.  Other components become ready after we call their initBus()
     * function, because they have a Bus or CPU dependency, such as access to memory management
     * functions.  And other components, like CPU and Panel, are ready as soon as their
     * constructor finishes.
     *
     * Once a component has indicated it's ready, we call its powerUp() notification
     * function (if it has one--it's optional).  We call the CPU's powerUp() function last,
     * so that the CPU is assured that all other components are ready and "powered".
     *
     * @this {ComputerX80}
     * @param {Object} parmsComputer
     * @param {Object} [parmsMachine]
     * @param {boolean} [fSuspended]
     */
    constructor(parmsComputer, parmsMachine, fSuspended)
    {
        super("Computer", parmsComputer, MESSAGE.COMPUTER);

        this.flags.powered = false;

        this.setMachineParms(parmsMachine);

        this.fAutoPower = this.getMachineParm('autoPower', parmsComputer);

        /*
         * nPowerChange is 0 while the power state is stable, 1 while power is transitioning
         * to "on", and -1 while power is transitioning to "off".
         */
        this.nPowerChange = 0;

        /*
         * TODO: Deprecate 'buswidth' (it should have always used camelCase)
         */
        this.nBusWidth = parmsComputer['busWidth'] || parmsComputer['buswidth'];

        this.resume = ComputerX80.RESUME_NONE;
        this.sStateData = null;
        this.fStateData = false;            // remembers if sStateData was loaded
        this.fServerState = false;

        this.url = this.getMachineParm('url') || "";

        /*
         * Generate a random number x (where 0 <= x < 1), add 0.1 so that it's guaranteed to be
         * non-zero, convert to base 36, and chop off the leading digit and "decimal" point.
         */
        this.sMachineID = (Math.random() + 0.1).toString(36).substr(2,12);
        this.sUserID = this.queryUserID();

        /*
         * Find the appropriate CPU (and Debugger and Control Panel, if any)
         *
         * CLOSURE COMPILER TIP: To override the type of a right-hand expression (as we need to do here,
         * where we know getComponentByType() will only return an CPUState object or null), wrap the expression
         * in parentheses.  I never knew this until I stumbled across it in "Closure: The Definitive Guide".
         */
        this.cpu = /** @type {CPUStateX80} */ (Component.getComponentByType("CPU", this.id));
        if (!this.cpu) {
            Component.error("Unable to find CPU component");
            return;
        }
        this.dbg = /** @type {DebuggerX80} */ (Component.getComponentByType("Debugger", this.id));

        /*
         * Enumerate all Video components for future updateVideo() calls.
         */
        this.aVideo = [];
        for (let video = false; (video = this.getMachineComponent("Video", video));) {
            this.aVideo.push(video);
        }

        /*
         * Initialize the Bus component
         */
        this.bus = new BusX80({'id': this.idMachine + '.bus', 'busWidth': this.nBusWidth}, this.cpu, this.dbg);

        /*
         * Iterate through all the components and connect them to the Control Panel, if any
         */
        let iComponent, component;
        let aComponents = Component.getComponents(this.id);

        this.panel = /** @type {PanelX80} */ (Component.getComponentByType("Panel", this.id));
        this.controlPrint = this.panel && this.panel.bindings['print'];

        if (this.controlPrint) {
            for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
                component = aComponents[iComponent];
                /*
                 * I can think of many "cleaner" ways for the Control Panel component to pass its
                 * print() override on to all the other components, but it's just too darn convenient
                 * to slam these overrides into the components directly.
                 */
                component.print = this.panel.print;
            }
        }

        this.printf(MESSAGE.NONE, "%s v%s\n%s\n%s\n", APPNAME, APPVERSION, COPYRIGHT, LICENSE);

        if (MAXDEBUG) this.printf(MESSAGE.DEBUG, "TYPEDARRAYS: %s\n", TYPEDARRAYS);

        /*
         * Iterate through all the components again and call their initBus() handler, if any
         */
        for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
            component = aComponents[iComponent];
            if (component.initBus) component.initBus(this, this.bus, this.cpu, this.dbg);
        }

        let sStatePath = null;
        let sResume = this.getMachineParm('resume', parmsComputer);
        if (sResume !== undefined) {
            /*
             * Decide whether the 'resume' property is a number or the path of a state file to resume.
             */
            if (sResume.length > 1) {
                sStatePath = this.sResumePath = sResume;
            } else {
                this.resume = parseInt(sResume, 10);
            }
        }

        /*
         * The Computer 'state' property allows a state file to be specified independent of the 'resume' feature;
         * previously, you could only use 'resume' to load a state file -- which we still support, but loading a state
         * file that way prevents the machine's state from being saved, since we always resume from the 'resume' file.
         *
         * The other wrinkle is on the restore side: we need to IGNORE the 'state' property if a saved state now exists.
         * So we have to peek at localStorage, and unfortunately, the only way to "peek" is to actually load the data,
         * but we're not ready to use it yet, so powerUp() has been changed to use any existing stateComputer that we've
         * already loaded.
         *
         * However, there's now a wrinkle to the wrinkle: if a 'state' parameter has been passed via the URL, then that
         * OVERRIDES everything; it overrides any 'state' Computer parameter AND it disables resume of any saved state in
         * localStorage (in other words, it prevents fAllowResume from being true, and forcing resume off).
         */
        let fAllowResume = false;
        let sState = this.getMachineParm('state');
        if (!sState) {
            fAllowResume = true;
            sState = parmsComputer['state'];
        }

        if (sState) {
            sStatePath = this.sStatePath = sState;
            if (!fAllowResume) {
                this.fServerState = true;
                this.resume = ComputerX80.RESUME_NONE;
            }
            if (this.resume) {
                this.stateComputer = new State(this, APPVERSION);
                if (this.stateComputer.load()) {
                    sStatePath = null;
                } else {
                    delete this.stateComputer;
                }
            }
        }

        /*
         * If sStatePath is set, we must use it.  But if there's no sStatePath AND resume is set,
         * then we have the option of resuming from a server-side state, assuming a valid USERID.
         */
        if (!sStatePath && this.resume) {
            sStatePath = this.getServerStatePath();
            if (sStatePath) this.fServerState = true;
        }

        if (!sStatePath) {
            this.setReady();
        } else {
            let cmp = this;
            WebLib.getResource(/** @type {string} */ (sStatePath), null, true, function(sURL, sResource, nErrorCode) {
                cmp.doneLoad(sURL, sResource, nErrorCode);
            });
        }

        if (!this.bindings["power"]) this.fAutoPower = true;

        /*
         * Power on the computer, giving every component the opportunity to reset or restore itself.
         */
        if (!fSuspended && this.fAutoPower) this.wait(this.powerOn);
    }

    /**
     * clearPanel()
     *
     * @this {ComputerX80}
     */
    clearPanel()
    {
        if (this.controlPrint) {
            this.controlPrint.value = "";
        }
    }

    /**
     * getMachineID()
     *
     * @this {ComputerX80}
     * @returns {string}
     */
    getMachineID()
    {
        return this.sMachineID;
    }

    /**
     * setMachineParms(parmsMachine)
     *
     * If no explicit machine parms were provided, then we check for 'parms' in the bundled resources (if any).
     *
     * @this {ComputerX80}
     * @param {Object} [parmsMachine]
     */
    setMachineParms(parmsMachine)
    {
        if (!parmsMachine) {
            let sParms;
            let resources = globals.window['resources'];
            if (typeof resources == 'object' && (sParms = resources['parms'])) {
                try {
                    parmsMachine = /** @type {Object} */ (eval("(" + sParms + ")"));
                } catch(e) {
                    Component.error(e.message + " (" + sParms + ")");
                }
            }
        }
        this.parmsMachine = parmsMachine;
    }

    /**
     * getMachineParm(sParm, parmsComponent)
     *
     * If the machine parameter doesn't exist, we check for a matching component parameter (if parmsComponent is provided),
     * and failing that, we check the bundled resources (if any).
     *
     * At the moment, the only bundled resource request we expect to encounter is 'state'; if it exists, then we return
     * 'state' back to the caller (ie, the name of the resource), so that the caller will then attempt to load the 'state'
     * resource to obtain the actual state.
     *
     * @this {ComputerX80}
     * @param {string} sParm
     * @param {Object} [parmsComponent]
     * @returns {string|undefined}
     */
    getMachineParm(sParm, parmsComponent)
    {
        /*
         * When using getURLParm(), the check is allowed be a bit looser, because URL parameters are
         * user-supplied, whereas most other parameters are developer-supplied.  Granted, a developer
         * may also be sloppy and neglect to use correct case (eg, 'automount' instead of 'autoMount'),
         * but there are limits to my paranoia.
         */
        let resources = globals.window['resources'];
        let sParmLC = sParm.toLowerCase();
        let value = WebLib.getURLParm(sParm) || WebLib.getURLParm(sParmLC);

        if (value === undefined && this.parmsMachine) {
            value = this.parmsMachine[sParm];
        }
        if (value === undefined && parmsComponent) {
            value = parmsComponent[sParm];
        }
        if (value === undefined && typeof resources == 'object' && resources[sParm]) {
            value = sParm;
        }
        return value;
    }

    /**
     * saveMachineParms()
     *
     * @this {ComputerX80}
     * @returns {string|null}
     */
    saveMachineParms()
    {
        return this.parmsMachine? JSON.stringify(this.parmsMachine) : null;
    }

    /**
     * getUserID()
     *
     * @this {ComputerX80}
     * @returns {string}
     */
    getUserID()
    {
        return this.sUserID || "";
    }

    /**
     * doneLoad(sURL, sStateData, nErrorCode)
     *
     * @this {ComputerX80}
     * @param {string} sURL
     * @param {string} sStateData
     * @param {number} nErrorCode
     */
    doneLoad(sURL, sStateData, nErrorCode)
    {
        if (!nErrorCode) {
            this.sStateData = sStateData;
            this.fStateData = true;
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "loaded state file %s\n", sURL.replace(this.sUserID || "xxx", "xxx"));
        } else {
            this.sResumePath = null;
            this.fServerState = false;
            this.printf(MESSAGE.NOTICE, "Unable to load machine state from server (error %d%s)\n", nErrorCode, (sStateData? ': ' + StrLib.trim(sStateData) : ''));
        }
        this.setReady();
    }

    /**
     * wait(fn, parms)
     *
     * wait() waits until every component is ready (including ourselves, the last component we check), then calls the
     * specified Computer method.
     *
     * TODO: The Closure Compiler makes it difficult for us to define a function type for "fn" that works in all cases;
     * sometimes we want to pass a function that takes only a "number", and other times we want to pass a function that
     * takes only an "Array" (the type will mirror that of the "parms" parameter).  However, the Closure Compiler insists
     * that both functions must be declared as accepting both types of parameters.  So once again, we must use an untyped
     * function declaration, instead of something stricter like:
     *
     *      param {function(this:Computer, (number|Array|undefined)): undefined} fn
     *
     * @this {ComputerX80}
     * @param {function(...)} fn
     * @param {number|Array} [parms] optional parameters
     */
    wait(fn, parms)
    {
        let computer = this;
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent <= aComponents.length; iComponent++) {
            let component = (iComponent < aComponents.length ? aComponents[iComponent] : this);
            if (!component.isReady()) {
                component.isReady(function onComponentReady() {
                    computer.wait(fn, parms);
                });
                return;
            }
        }
        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "wait(ready)\n");
        fn.call(this, parms);
    }

    /**
     * validateState(stateComputer)
     *
     * NOTE: We clear() stateValidate only when there's no stateComputer.
     *
     * @this {ComputerX80}
     * @param {State|null} [stateComputer]
     * @returns {boolean} true if state passes validation, false if not
     */
    validateState(stateComputer)
    {
        let fValid = true;
        let stateValidate = new State(this, APPVERSION, ComputerX80.STATE_VALIDATE);
        if (stateValidate.load() && stateValidate.parse()) {
            let sTimestampValidate = stateValidate.get(ComputerX80.STATE_TIMESTAMP);
            let sTimestampComputer = stateComputer? stateComputer.get(ComputerX80.STATE_TIMESTAMP) : "unknown";
            if (sTimestampValidate != sTimestampComputer) {
                this.printf(MESSAGE.NOTICE, "Machine state may be out-of-date\n(%s vs. %s)\nCheck your browser's local storage limits\n", sTimestampValidate, sTimestampComputer);
                fValid = false;
                if (!stateComputer) stateValidate.clear();
            } else {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "last state: %s (validate: %s)\n", sTimestampComputer, sTimestampValidate);
            }
        }
        return fValid;
    }

    /**
     * powerOn(resume)
     *
     * Power every component "up", applying any previously available state information.
     *
     * @this {ComputerX80}
     * @param {number} [resume] is a valid RESUME value; default is this.resume
     */
    powerOn(resume)
    {
        if (resume === undefined) {
            resume = this.resume || (this.sStateData? ComputerX80.RESUME_AUTO : ComputerX80.RESUME_NONE);
        }

        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "powerOn(%s)\n", (resume == ComputerX80.RESUME_REPOWER ? "repower" : (resume ? "resume" : "")));

        if (this.nPowerChange) {
            return;
        }
        this.nPowerChange++;

        let fRepower = false;
        let fRestore = false;
        this.fRestoreError = false;
        let stateComputer = this.stateComputer || new State(this, APPVERSION);

        if (resume == ComputerX80.RESUME_REPOWER) {
            fRepower = true;
        }
        else if (resume > ComputerX80.RESUME_NONE) {
            if (stateComputer.load(this.sStateData)) {
                /*
                 * Since we're resuming something (either a predefined state or a state from localStorage), let's
                 * create a "failsafe" checkpoint in localStorage, and destroy it at the end of a successful powerOn().
                 * Which means, of course, that if a previous "failsafe" checkpoint already exists, something bad
                 * may have happened the last time around.
                 */
                this.stateFailSafe = new State(this, APPVERSION, ComputerX80.STATE_FAILSAFE);
                if (this.stateFailSafe.load()) {
                    this.powerReport(stateComputer);
                    /*
                     * We already know resume is something other than RESUME_NONE, so we'll go ahead and bump it
                     * all the way to RESUME_PROMPT, so that the user will be prompted, and if the user declines to
                     * restore, the state will be removed.
                     */
                    resume = ComputerX80.RESUME_PROMPT;
                    /*
                     * To ensure that the set() below succeeds, we need to call unload(), otherwise it may fail
                     * with a "read only" error (eg, "TypeError: Cannot assign to read only property 'timestamp'").
                     */
                    this.stateFailSafe.unload();
                }

                this.stateFailSafe.set(ComputerX80.STATE_TIMESTAMP, UsrLib.getTimestamp());
                this.stateFailSafe.store();

                let fValidate = this.resume && !this.fServerState;
                if (resume == ComputerX80.RESUME_AUTO || Component.confirmUser("Click OK to restore the previous " + APPNAME + " machine state, or CANCEL to reset the machine.")) {
                    fRestore = stateComputer.parse();
                    if (fRestore) {
                        let sCode = /** @type {string} */ (stateComputer.get(UserAPI.RES.CODE));
                        let sData = /** @type {string} */ (stateComputer.get(UserAPI.RES.DATA));
                        if (sCode) {
                            if (sCode == UserAPI.CODE.OK) {
                                stateComputer.load(sData);
                            } else {
                                /*
                                 * A missing (or not yet created) state file is no cause for alarm, but other errors might be
                                 */
                                if (sCode == UserAPI.CODE.FAIL && sData != UserAPI.FAIL.NOSTATE) {
                                    this.printf(MESSAGE.NOTICE, "Error: %s\n", sData);
                                    if (sData == UserAPI.FAIL.VERIFY) this.resetUserID();
                                } else {
                                    this.printf("%s: %s\n", sCode, sData);
                                }
                                /*
                                 * Try falling back to the state that we should have saved in localStorage, as a backup to the
                                 * server-side state.
                                 */
                                stateComputer.unload();     // discard the invalid server-side state first
                                if (stateComputer.load()) {
                                    fRestore = stateComputer.parse();
                                    fValidate = true;
                                } else {
                                    fRestore = false;       // hmmm, there was nothing in localStorage either
                                }
                            }
                        }
                    }
                    /*
                     * If the load/parse was successful, and it was from localStorage (not sStateData),
                     * then we should to try verify that localStorage snapshot is current.  One reason it may
                     * NOT be current is if localStorage was full and we got a quota error during the last
                     * powerOff().
                     */
                    if (fValidate) this.validateState(fRestore? stateComputer : null);
                } else {
                    /*
                     * RESUME_PROMPT indicates we should delete the state if they clicked Cancel to confirm() above.
                     */
                    if (resume == ComputerX80.RESUME_PROMPT) stateComputer.clear();
                }
            } else {
                /*
                 * If there's no state, then there should also be no validation timestamp; if there is, then once again,
                 * we're probably dealing with a quota error.
                 */
                this.validateState();
            }
            delete this.sStateData;
            delete this.stateComputer;
        }

        /*
         * Start powering all components, including any data they may need to restore their state;
         * we restore power to the CPU last.
         */
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component !== this && component != this.cpu) {
                fRestore = this.powerRestore(component, stateComputer, fRepower, fRestore);
            }
        }

        /*
         * Assuming this is not a repower, we must perform another wait, because some components may
         * have marked themselves as "not ready" again (eg, the FDC component, if the restore forced it
         * to mount one or more additional disk images).
         */
        let aParms = [stateComputer, resume, fRestore];

        if (resume != ComputerX80.RESUME_REPOWER) {
            this.wait(this.donePowerOn, aParms);
            return;
        }
        this.donePowerOn(aParms);
    }

    /**
     * powerRestore(component, stateComputer, fRepower, fRestore)
     *
     * @this {ComputerX80}
     * @param {Component} component
     * @param {State} stateComputer
     * @param {boolean} fRepower
     * @param {boolean} fRestore
     * @returns {boolean} true if restore should continue, false if not
     */
    powerRestore(component, stateComputer, fRepower, fRestore)
    {
        if (!component.flags.powered) {

            component.flags.powered = true;

            if (component.powerUp) {

                let data = null;
                if (fRestore) {
                    data = stateComputer.get(component.id);
                    if (!data) {
                        /*
                         * This is a hack that makes it possible for a machine whose ID has been
                         * supplemented with a hyphenated numeric suffix to find object IDs in states
                         * created from a machine without such a suffix.
                         *
                         * For example, if a state file was created from a machine with ID "ibm5160"
                         * but the current machine is "ibm5160-1", this attempts a second lookup with
                         * "ibm5160", enabling us to find objects that match the original machine ID
                         * (eg, "ibm5160.romEGA").
                         *
                         * See /devices/pcx86/machine/5160/ega/640kb/array/ for examples of this.
                         */
                        data = stateComputer.get(component.id.replace(/-[0-9]+\./i, '.'));
                    }
                }

                /*
                 * State.get() will return whatever was originally passed to State.set() (eg, an
                 * Object or a string), but components are supposed to store only Objects, so if a
                 * string comes back, something went wrong.  By explicitly eliminating "string" data,
                 * the Closure Compiler stops complaining that we might be passing strings to our
                 * powerUp() functions (even though we know we're not).
                 *
                 * TODO: Determine if there's some way to coerce the Closure Compiler into treating
                 * data as Object or null, without having to include this runtime check.  An assert
                 * would be a good idea, but this is overkill.
                 */
                if (typeof data === "string") data = null;

                /*
                 * If computer is null, this is simply a repower notification, which most components
                 * don't do anything with.  Exceptions include: CPU (since it may be halted) and Video
                 * (since its screen may be "turned off").
                 */
                if (!component.powerUp(data, fRepower) && data) {

                    Component.error("Unable to restore state for " + component.type);
                    /*
                     * If this is a resume error for a machine that also has a predefined state
                     * AND we're not restoring from that state, then throw away the current state,
                     * prevent any new state from being created, and then force a reload, which will
                     * hopefully restore us to the functioning predefined state.
                     *
                     * TODO: Considering doing this in ALL cases, not just in situations where a
                     * 'state' exists but we're not actually resuming from it.
                     */
                    if (this.sStatePath && !this.fStateData) {
                        stateComputer.clear();
                        this.resume = ComputerX80.RESUME_NONE;
                        WebLib.reloadPage();
                    } else {
                        /*
                         * In all other cases, we set fRestoreError, which should trigger a call to
                         * powerReport() and then delete the offending state.
                         */
                        this.fRestoreError = true;
                    }
                    /*
                     * Any failure triggers an automatic to call powerUp() again, without any state,
                     * in the hopes that the component can recover by performing a reset.
                     */
                    component.powerUp(null);
                    /*
                     * We also disable the rest of the restore operation, because it's not clear
                     * the remaining state information can be trusted;  the machine is already in an
                     * inconsistent state, so we're not likely to make things worse, and the only
                     * alternative (starting over and performing a state-less reset) isn't likely to make
                     * the user any happier.  But, we'll see... we need some experience with the code.
                     */
                    fRestore = false;
                }
            }

            if (!fRepower && component.comment) {
                let asComments = component.comment.split("|");
                for (let i = 0; i < asComments.length; i++) {
                    component.printf(MESSAGE.STATUS, "%s\n", asComments[i]);
                }
            }
        }
        return fRestore;
    }

    /**
     * donePowerOn(aParms)
     *
     * This is nothing more than a continuation of powerOn(), giving us the option of calling wait() one more time.
     *
     * @this {ComputerX80}
     * @param {Array} aParms containing [stateComputer, resume, fRestore]
     */
    donePowerOn(aParms)
    {
        let stateComputer = aParms[0];
        let fRepower = (aParms[1] < 0);
        let fRestore = aParms[2];

        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "donePowerOn(%s)\n", this.flags.powered? "redundant" : "");

        this.fInitialized = true;
        this.flags.powered = true;
        let controlPower = this.bindings["power"];
        if (controlPower) controlPower.textContent = "Shutdown";

        /*
         * Once we get to this point, we're guaranteed that all components are ready, so it's safe to power the CPU;
         * the CPU should begin executing immediately, unless a debugger is attached.
         */
        if (this.cpu) {
            /*
             * TODO: Do we not care about the return value here? (ie, is checking fRestoreError sufficient)?
             */
            this.powerRestore(this.cpu, stateComputer, fRepower, fRestore);
            this.cpu.autoStart();
        }

        /*
         * If the state was bad, offer to report it and then delete it.  Deleting may be moot, since invariably a new
         * state will be created on powerOff() before the next powerOn(), but it seems like good paranoia all the same.
         */
        if (this.fRestoreError) {
            this.powerReport(stateComputer);
            stateComputer.clear();
        }

        if (!fRepower && this.stateFailSafe) {
            this.stateFailSafe.clear();
            delete this.stateFailSafe;
        }

        this.nPowerChange = 0;
    }

    /**
     * checkPower()
     *
     * @this {ComputerX80}
     * @returns {boolean} true if the computer is fully powered, false otherwise
     */
    checkPower()
    {
        if (this.flags.powered) return true;

        let component = null, iComponent;
        let aComponents = Component.getComponents(this.id);
        for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
            component = aComponents[iComponent];
            if (component !== this && !component.flags.ready) break;
        }
        if (iComponent == aComponents.length) {
            for (iComponent = 0; iComponent < aComponents.length; iComponent++) {
                component = aComponents[iComponent];
                if (component !== this && !component.flags.powered) break;
            }
        }
        if (iComponent == aComponents.length) component = this;
        let s = "The " + component.type + " component (" + component.id + ") is not " + (!component.flags.ready? "ready yet" + (component.fnReady? " (waiting for notification)" : "") : "powered yet") + ".";
        Component.alertUser(s);
        return false;
    }

    /**
     * powerReport(stateComputer)
     *
     * @this {ComputerX80}
     * @param {State} stateComputer
     */
    powerReport(stateComputer)
    {
        //
        // This is all we can realistically do for now.
        //
        WebLib.onError("There may be a problem with your " + APPNAME + " machine.");
        //
        // if (Component.confirmUser("There may be a problem with your " + APPNAME + " machine.\n\nTo help us diagnose it, click OK to send this " + APPNAME + " machine state to " + SITEURL + ".")) {
        //     WebLib.sendReport(APPNAME, APPVERSION, this.url, this.getUserID(), ReportAPI.TYPE.BUG, stateComputer.toString());
        // }
        //
    }

    /**
     * powerOff(fSave, fShutdown)
     *
     * Power every component "down" and optionally save the machine state.
     *
     * There's one scenario that powerOff() isn't currently able to deal with very effectively: what to do when
     * the user switches away while it's still being restored, causing Disk getResource() calls to fail.  The
     * Disk component calls notify() when that happens -- see Disk.mount() -- but the FDC and HDC controllers don't
     * notify *us* of those problems, so Computer assumes that the restore was completely successful, when in fact
     * it was only partially successful.
     *
     * Then we immediately arrive here to perform a save, following that incomplete restore.  It would be wrong to
     * deal with that incomplete restore by setting fRestoreError, because we don't want to trigger a powerReport()
     * and the deletion of the previous state, because the state itself was presumably OK.  Unfortunately, the new
     * state we now save will no longer include manually mounted disk images whose remounts were interrupted, so future
     * restores won't remount them either.
     *
     * We could perhaps solve this by having the Disk component notify us in those situations, set a new flag
     * (fRestoreIncomplete?), and set fSave to false if that's ever set.  Be careful though: when fSave is false,
     * that means MORE than not saving; it also means deleting any previous state, which is NOT what you'd want to
     * do in a "fRestoreIncomplete" situation.  Also, we have to worry about Disk operations that fail for other reasons,
     * making sure those failures don't interfere with the save process in the same way.
     *
     * As it stands, the worst that happens is any manually mounted disk images might have to be manually remounted,
     * which doesn't seem like a huge problem.
     *
     * @this {ComputerX80}
     * @param {boolean} [fSave] is true to request a saved state
     * @param {boolean} [fShutdown] is true if the machine is being shut down
     * @returns {string|null} string representing the saved state (or null if error)
     */
    powerOff(fSave, fShutdown)
    {
        let data;
        let sState = "none";

        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "powerOff(%s%s)\n", (fSave ? "save" : "nosave"), (fShutdown ? ",shutdown" : ""));

        if (this.nPowerChange) {
            return null;
        }
        this.nPowerChange--;

        let stateComputer = new State(this, APPVERSION);
        let stateValidate = new State(this, APPVERSION, ComputerX80.STATE_VALIDATE);

        let sTimestamp = UsrLib.getTimestamp();
        stateValidate.set(ComputerX80.STATE_TIMESTAMP, sTimestamp);
        stateComputer.set(ComputerX80.STATE_TIMESTAMP, sTimestamp);
        stateComputer.set(ComputerX80.STATE_VERSION, APPVERSION);
        stateComputer.set(ComputerX80.STATE_HOSTURL, WebLib.getHostURL());
        stateComputer.set(ComputerX80.STATE_BROWSER, WebLib.getUserAgent());

        /*
         * Always power the CPU "down" first, just to help insure it doesn't ask other components to do anything
         * after they're no longer ready.
         */
        if (this.cpu && this.cpu.powerDown) {
            if (fShutdown) this.cpu.stopCPU();
            data = this.cpu.powerDown(fSave, fShutdown);
            if (typeof data === "object") stateComputer.set(this.cpu.id, data);
            if (fShutdown) {
                this.cpu.flags.powered = false;
                if (data === false) sState = null;
            }
        }

        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component.flags.powered) {
                if (component.powerDown) {
                    data = component.powerDown(fSave, fShutdown);
                    if (typeof data === "object") stateComputer.set(component.id, data);
                }
                if (fShutdown) {
                    component.flags.powered = false;
                    if (data === false) sState = null;
                }
            }
        }

        if (sState) {
            if (fShutdown) {
                let fClear = false;
                let fClearAll = false;
                if (fSave) {
                    if (this.sUserID) {
                        this.saveServerState(this.sUserID, stateComputer.toString());
                    }
                    if (!stateValidate.store() || !stateComputer.store()) {
                        sState = null;
                        /*
                         * New behavior as of v1.13.2:  if it appears that localStorage is full, we blow it ALL away.
                         * Dedicated server-side storage is the only way we'll ever be able to reliably preserve a
                         * particular machine's state.  Historically, attempting to limp along with whatever localStorage
                         * is left just generates the same useless and annoying warnings over and over.
                         */
                        fClear = fClearAll = true;
                    }
                }
                else {
                    /*
                     * I used to ALWAYS clear (ie, delete) any associated computer state, but now I do this only if the
                     * current machine is "resumable", because there are situations where I have two configurations
                     * for the same machine -- one resumable and one not -- and I don't want the latter throwing away the
                     * state of the former.
                     *
                     * So this code is here now strictly for callers to delete the state of a "resumable" machine, not as
                     * some paranoid clean-up operation.
                     *
                     * An undocumented feature of this operation is that if your configuration uses the special 'resume="3"'
                     * value, and you click the "Reset" button, and then you click OK to reset the everything, this will
                     * actually reset EVERYTHING (ie, all localStorage for ALL configs will be reclaimed).
                     */
                    if (this.resume) {
                        fClear = true;
                        fClearAll = (this.resume == ComputerX80.RESUME_DELETE);
                    }
                }
                if (fClear) {
                    stateComputer.clear(fClearAll);
                }
            } else {
                sState = stateComputer.toString();
            }
        }

        if (fShutdown) {
            this.flags.powered = false;
            let controlPower = this.bindings["power"];
            if (controlPower) controlPower.textContent = "Power";
        }

        this.nPowerChange = 0;

        return sState;
    }

    /**
     * reset()
     *
     * Notify all (other) components with a reset() method that the Computer is being reset.
     *
     * NOTE: We'd like to reset the Bus first (due to the importance of the A20 line), but since we
     * allocated the Bus object ourselves, after all the other components were allocated, it ends
     * up near the end of Component's list of components.  Hence the special case for this.bus below.
     *
     * @this {ComputerX80}
     */
    reset()
    {
        if (this.bus && this.bus.reset) {
            /*
             * TODO: Why does WebStorm think that this.bus.type is undefined? The base class (Component)
             * constructor defines it.
             */
            this.printf("Resetting %s\n", this.bus.type);
            this.bus.reset();
        }
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component !== this && component !== this.bus && component.reset) {
                this.printf("Resetting %s\n", component.type);
                component.reset();
            }
        }
    }

    /**
     * start(ms, nCycles)
     *
     * Notify all (other) components with a start() method that the CPU has started.
     *
     * Note that we're called by runCPU(), which is why we exclude the CPU component,
     * as well as ourselves.
     *
     * @this {ComputerX80}
     * @param {number} ms
     * @param {number} nCycles
     */
    start(ms, nCycles)
    {
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component.type == "CPU" || component === this) continue;
            if (component.start) {
                component.start(ms, nCycles);
            }
        }
    }

    /**
     * stop(ms, nCycles)
     *
     * Notify all (other) components with a stop() method that the CPU has stopped.
     *
     * Note that we're called by runCPU(), which is why we exclude the CPU component,
     * as well as ourselves.
     *
     * @this {ComputerX80}
     * @param {number} ms
     * @param {number} nCycles
     */
    stop(ms, nCycles)
    {
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (component.type == "CPU" || component === this) continue;
            if (component.stop) {
                component.stop(ms, nCycles);
            }
        }
    }

    /**
     * setBinding(sHTMLType, sBinding, control, sValue)
     *
     * @this {ComputerX80}
     * @param {string} sHTMLType is the type of the HTML control (eg, "button", "list", "text", "submit", "textarea", "canvas")
     * @param {string} sBinding is the value of the 'binding' parameter stored in the HTML control's "data-value" attribute (eg, "reset")
     * @param {HTMLElement} control is the HTML control DOM object (eg, HTMLButtonElement)
     * @param {string} [sValue] optional data value
     * @returns {boolean} true if binding was successful, false if unrecognized binding request
     */
    setBinding(sHTMLType, sBinding, control, sValue)
    {
        let computer = this;

        switch (sBinding) {
        case "power":
            this.bindings[sBinding] = control;
            control.onclick = function onClickPower() {
                computer.onPower();
            };
            return true;

        case "reset":
            this.bindings[sBinding] = control;
            control.onclick = function onClickReset() {
                computer.onReset();
            };
            return true;

        /*
         * Technically, this binding should now be called "saveState", to clearly distinguish it from
         * the "Save Machine" control that's normally bound to the savePC() function in save.js.  Saving
         * an entire machine includes everything needed to start/restore the machine; eg, the machine
         * XML configuration file(s) *and* the JSON-encoded machine state.
         */
        case "save":
            /*
             * Since this feature depends on the server supporting the PCjs User API (see userapi.js),
             * and since pcjs.org is no longer running a Node web server, we disable the feature for that
             * particular host.
             */
            if (StrLib.endsWith(WebLib.getHostName(), "pcjs.org")) {
                this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "Remote user API not available\n");
                /*
                 * We could also simply hide the control; eg:
                 *
                 *      control.style.display = "none";
                 *
                 * but removing the control altogether seems better.
                 */
                control.parentNode.removeChild(/** @type {Node} */ (control));
                return false;
            }
            this.bindings[sBinding] = control;
            control.onclick = function onClickSave() {
                let sUserID = computer.queryUserID(true);
                if (sUserID) {
                    /*
                     * I modified the test to include a check for sStatePath so that I could save new states
                     * for machines with existing states; otherwise, I'd have no (easy) way of capturing and
                     * updating their state.  Making the machine (even temporarily) resumable would have been
                     * one work-around, but it's not appropriate for some machines, as their state is simply
                     * too large (for localStorage anyway, which is the default storage solution).
                     */
                    let fSave = !!(computer.resume && !computer.sResumePath || computer.sStatePath);
                    let sState = computer.powerOff(fSave);
                    if (fSave) {
                        computer.saveServerState(sUserID, sState);
                    } else {
                        computer.printf(MESSAGE.NOTICE, "Resume disabled, machine state not saved\n");
                    }
                }
                /*
                 * This seemed like a handy alternative, but it turned out to be a no-go, at least for large states:
                 *
                 *      var sState = computer.powerOff(true);
                 *      if (sState) {
                 *          sState = "data:text/json;charset=utf-8," + encodeURIComponent(sState);
                 *          globals.window.open(sState);
                 *      }
                 *
                 * Perhaps if I embedded the data in a link on the current page instead; eg:
                 *
                 *      $('<a href="' + sState + '" download="state.json">Download</a>').appendTo('#container');
                 */
            };
            return true;

        default:
            break;
        }
        return false;
    }

    /**
     * resetUserID()
     */
    resetUserID()
    {
        WebLib.setLocalStorageItem(ComputerX80.STATE_USERID, "");
        this.sUserID = null;
    }

    /**
     * queryUserID(fPrompt)
     *
     * @param {boolean} [fPrompt]
     * @returns {string|null|undefined}
     */
    queryUserID(fPrompt)
    {
        let sUserID = this.sUserID;
        if (!sUserID) {
            sUserID = WebLib.getLocalStorageItem(ComputerX80.STATE_USERID);
            if (sUserID !== undefined) {
                if (!sUserID && fPrompt) {
                    /*
                     * NOTE: Warning the user here that "Save" operations are not currently supported by pcjs.org is
                     * merely a precaution, because ordinarily, setBinding() should have already determined if we are
                     * running from pcjs.org and disabled any "Save" button.
                     */
                    sUserID = Component.promptUser("Saving machine states on the pcjs.org server is currently unsupported.\n\nIf you're running your own server, enter your user ID below.");
                    if (sUserID) {
                        sUserID = this.verifyUserID(sUserID);
                        if (!sUserID) this.printf(MESSAGE.NOTICE, "The user ID is invalid.\n");
                    }
                }
            } else if (fPrompt) {
                this.printf(MESSAGE.NOTICE, "Browser local storage is not available\n");
            }
        }
        return sUserID;
    }

    /**
     * verifyUserID(sUserID)
     *
     * @this {ComputerX80}
     * @param {string} sUserID
     * @returns {string} validated user ID, or null if error
     */
    verifyUserID(sUserID)
    {
        this.sUserID = null;
        let fMessages = DEBUG && this.messageEnabled();
        if (fMessages) this.printf("verifyUserID(%s)\n", sUserID);
        let sRequest = WebLib.getHostOrigin() + UserAPI.ENDPOINT + '?' + UserAPI.QUERY.REQ + '=' + UserAPI.REQ.VERIFY + '&' + UserAPI.QUERY.USER + '=' + sUserID;
        let response = WebLib.getResource(sRequest);
        let nErrorCode = response[0];
        let sResponse = response[1];
        if (!nErrorCode && sResponse) {
            try {
                response = eval("(" + sResponse + ")");
                if (response.code && response.code == UserAPI.CODE.OK) {
                    WebLib.setLocalStorageItem(ComputerX80.STATE_USERID, response.data);
                    if (fMessages) this.printf("%s updated: %s\n", ComputerX80.STATE_USERID, response.data);
                    this.sUserID = response.data;
                } else {
                    if (fMessages) this.printf("%s: %s\n", response.code, response.data);
                }
            } catch (e) {
                Component.error(e.message + " (" + sResponse + ")");
            }
        } else {
            if (fMessages) this.printf("invalid response (error %d)\n", nErrorCode);
        }
        return this.sUserID;
    }

    /**
     * getServerStatePath()
     *
     * @this {ComputerX80}
     * @returns {string|null} sStatePath (null if no localStorage or no USERID stored in localStorage)
     */
    getServerStatePath()
    {
        let sStatePath = null;
        if (this.sUserID) {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s for load: %s\n", ComputerX80.STATE_USERID, this.sUserID);
            sStatePath = WebLib.getHostOrigin() + UserAPI.ENDPOINT + '?' + UserAPI.QUERY.REQ + '=' + UserAPI.REQ.LOAD + '&' + UserAPI.QUERY.USER + '=' + this.sUserID + '&' + UserAPI.QUERY.STATE + '=' + State.getKey(this, APPVERSION);
        } else {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s unavailable\n", ComputerX80.STATE_USERID);
        }
        return sStatePath;
    }

    /**
     * saveServerState(sUserID, sState)
     *
     * @param {string} sUserID
     * @param {string|null} sState
     */
    saveServerState(sUserID, sState)
    {
        /*
         * We must pass fSync == true, because (as I understand it) browsers will blow off any async
         * requests when a page is being closed.  Since our request is synchronous, storeServerState()
         * should also return a result, but there's not much we can do with it, since browsers ALSO
         * tend to blow off alerts() and the like when closing down.
         */
        if (sState) {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "size of server state: %d bytes\n", sState.length);
            let response = this.storeServerState(sUserID, sState, true);
            if (response && response[UserAPI.RES.CODE] == UserAPI.CODE.OK) {
                this.printf(MESSAGE.NOTICE, "Machine state saved to server\n");
            } else if (sState) {
                let sError = (response && response[UserAPI.RES.DATA]) || UserAPI.FAIL.BADSTORE;
                if (response[UserAPI.RES.CODE] == UserAPI.CODE.FAIL) {
                    sError = "Error: " + sError;
                } else {
                    sError = "Error " + response[UserAPI.RES.CODE] + ": " + sError;
                }
                this.printf(MESSAGE.NOTICE, "%s\n", sError);
                this.resetUserID();
            }
        } else {
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "no state to store\n");
        }
    }

    /**
     * storeServerState(sUserID, sState, fSync)
     *
     * @this {ComputerX80}
     * @param {string} sUserID
     * @param {string} sState
     * @param {boolean} [fSync] is true if we're powering down and should perform a synchronous request (default is async)
     * @returns {*} server response if fSync is true and a response was received; otherwise null
     */
    storeServerState(sUserID, sState, fSync)
    {
        this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s for store: %s\n", ComputerX80.STATE_USERID, sUserID);
        /*
         * TODO: Determine whether or not any browsers cancel our request if we're called during a browser "shutdown" event,
         * and whether or not it matters if we do an async request (currently, we're not, to try to ensure the request goes through).
         */
        let dataPost = {};
        dataPost[UserAPI.QUERY.REQ] = UserAPI.REQ.STORE;
        dataPost[UserAPI.QUERY.USER] = sUserID;
        dataPost[UserAPI.QUERY.STATE] = State.getKey(this, APPVERSION);
        dataPost[UserAPI.QUERY.DATA] = sState;
        let sRequest = WebLib.getHostOrigin() + UserAPI.ENDPOINT;
        if (!fSync) {
            WebLib.getResource(sRequest, dataPost, true);
        } else {
            let response = WebLib.getResource(sRequest, dataPost);
            let sResponse = response[0];
            if (response[1]) {
                if (sResponse) {
                    let i = sResponse.indexOf('\n');
                    if (i > 0) sResponse = sResponse.substr(0, i);
                    if (!sResponse.indexOf("Error: ")) sResponse = sResponse.substr(7);
                }
                sResponse = '{"' + UserAPI.RES.CODE + '":' + response[1] + ',"' + UserAPI.RES.DATA + '":"' + sResponse + '"}';
            }
            this.printf(MESSAGE.DEBUG + MESSAGE.LOG, "%s\n", sResponse);
            return JSON.parse(sResponse);
        }
        return null;
    }

    /**
     * onPower()
     *
     * This handles UI requests to toggle the computer's power (eg, see the "power" button binding).
     *
     * @this {ComputerX80}
     */
    onPower()
    {
        if (!this.nPowerChange) {
            if (!this.flags.powered) {
                this.wait(this.powerOn);
            } else {
                this.powerOff(false, true);
            }
        }
    }

    /**
     * onReset()
     *
     * This handles UI requests to reset the computer's state (eg, see the "reset" button binding).
     *
     * @this {ComputerX80}
     */
    onReset()
    {
        /*
         * I'm going to start with the presumption that it makes little sense for an "unpowered" computer to be "reset";
         * ditto if the power state is currently being changed.
         */
        if (!this.flags.powered || this.nPowerChange) return;

        /*
         * If this is a "resumable" machine (and it's not using a predefined state), then we overload the reset
         * operation to offer an explicit "save or discard" option first.  This is currently the only UI we offer to
         * discard a machine's state, including any disk changes.  The traditional "reset" operation is still available
         * for non-resumable machines.
         *
         * TODO: Break this behavior out into a separate "discard" operation, in case the designer of the machine really
         * wants to clutter the UI with confusing options. ;-)
         */
        if (this.resume && !this.sResumePath) {
            /*
             * I used to bypass the prompt if this.resume == ComputerX80.RESUME_AUTO, setting fSave to true automatically,
             * but that gives the user no means of resetting a resumable machine that contains errors in its resume state.
             */
            let fSave = (/* this.resume == ComputerX80.RESUME_AUTO || */ Component.confirmUser("Click OK to save changes to this " + APPNAME + " machine.\n\nWARNING: If you CANCEL, all disk changes will be discarded."));
            this.powerOff(fSave, true);
            /*
             * Forcing the page to reload is an expedient option, but ugly. It's preferable to call powerOn()
             * and rely on all the components to reset themselves to their default state.  The components with
             * the greatest burden here are FDC and HDC, which must rely on the fReload flag to determine whether
             * or not to unload/reload all their original auto-mounted disk images.
             *
             * However, if we started with a predefined state (ie, sStatePath is set), we take this shortcut, because
             * we don't (yet) have code in place to gracefully reload the initial state (requires calling getResource()
             * again); alternatively, we could avoid throwing that state away, but it seems better to save the memory.
             *
             * TODO: Make this more graceful, so that we can stop using the reloadPage() sledgehammer.
             */
            if (!fSave && this.sStatePath) {
                WebLib.reloadPage();
                return;
            }
            if (!fSave) this.fReload = true;
            this.powerOn(ComputerX80.RESUME_NONE);
            this.fReload = false;
        } else {
            this.reset();
            if (this.cpu) this.cpu.autoStart();
        }
    }

    /**
     * getMachineComponent(sType, componentPrev)
     *
     * @this {ComputerX80}
     * @param {string} sType
     * @param {Component|boolean|null} [componentPrev] of previously returned component, if any
     * @returns {Component|null}
     */
    getMachineComponent(sType, componentPrev = null)
    {
        let componentLast = componentPrev;
        let aComponents = Component.getComponents(this.id);
        for (let iComponent = 0; iComponent < aComponents.length; iComponent++) {
            let component = aComponents[iComponent];
            if (componentPrev) {
                if (componentPrev == component) componentPrev = null;
                continue;
            }
            if (component.type == sType) return component;
        }
        if (!componentLast && DEBUG && componentPrev !== false) {
            this.printf(MESSAGE.WARNING, "Machine component type \"%s\" not found\n", sType);
        }
        return null;
    }

    /**
     * updateFocus(fScroll)
     *
     * NOTE: When soft keyboard buttons call us to return focus to the machine (and away from the button),
     * the browser's default behavior is to scroll the element into view, which can be annoying, especially on iOS,
     * where the display is more constrained, so we no longer do it by default (fScroll must be true).
     *
     * @this {ComputerX80}
     * @param {boolean} [fScroll] (true if you really want the control scrolled into view)
     */
    updateFocus(fScroll)
    {
        if (this.aVideo.length) {
            /*
             * This seems to be recommended work-around to prevent the browser from scrolling the focused element
             * into view.  The CPU is not a visual component, so when the CPU wants to set focus, the primary intent
             * is to ensure that keyboard input is fielded properly.
             */
            let x = 0, y = 0;
            if (!fScroll && globals.browser) {
                x = globals.window.scrollX;
                y = globals.window.scrollY;
            }

            /*
             * TODO: We need a mechanism to determine the "active" display, instead of hard-coding this to aVideo[0].
             */
            this.aVideo[0].setFocus();

            if (!fScroll && globals.window.scrollTo) {
                globals.window.scrollTo(x, y);
            }
        }
    }

    /**
     * updateStatus(fForce)
     *
     * If any DOM controls were bound to the CPU, then we need to call its updateStatus() handler; if there are no
     * such bindings, then cpu.updateStatus() does nothing.
     *
     * Similarly, if there's a Panel, then we need to call its updateStatus() handler, in case it created its own canvas
     * and implemented its own register display (eg, dumpRegisters()); if not, then panel.updateStatus() also does nothing.
     *
     * In practice, there will *either* be a Panel with a custom canvas *or* a set of DOM controls bound to the CPU *or*
     * neither.  In theory, there could be BOTH, but that would be unusual.
     *
     * TODO: Consider alternate approaches to these largely register-oriented display updates.  Ordinarily, we like to
     * separate logic from presentation, and currently the CPUState contains both, since it's the component that intimately
     * knows the names, number, sizes, etc, of all the active registers.  The Panel component is the logical candidate,
     * but Panel is an optional component; generally, only machines that include Debugger also include Panel.
     *
     * @this {ComputerX80}
     * @param {boolean} [fForce] (true will display registers even if the CPU is running and "live" registers are not enabled)
      */
    updateStatus(fForce)
    {
        /*
         * fForce is generally set to true whenever the CPU is transitioning to/from a running state, in which case
         * cpu.updateStatus() will definitely want to hide/show register contents; however, at other times, when the
         * CPU is running, constantly updating the DOM controls too frequently can adversely impact overall performance.
         *
         * So fForce serves as a hint to help cpu.updateStatus() make a more informed decision.  panel.updateStatus()
         * currently doesn't care, on the theory that canvas updates should be significantly faster than DOM updates,
         * but we still pass fForce on.
         */
        if (this.cpu) this.cpu.updateStatus(fForce);
        if (this.panel) this.panel.updateStatus(fForce);
    }

    /**
     * updateVideo(fForced)
     *
     * Any high-frequency updates should be performed here (avoid updating DOM elements).
     *
     * @this {ComputerX80}
     * @param {boolean} [fForced]
     */
    updateVideo(fForced)
    {
        for (let i = 0; i < this.aVideo.length; i++) {
            this.aVideo[i].updateScreen(fForced);
        }
    }

    /**
     * ComputerX80.init()
     *
     * For every machine represented by an HTML element of class "pcX80-machine", this function
     * locates the HTML element of class "computer", extracting the JSON-encoded parameters for the
     * Computer constructor from the element's "data-value" attribute, invoking the constructor to
     * create a Computer component, and then binding any associated HTML controls to the new component.
     */
    static init()
    {
        let aeMachines = Component.getElementsByClass(APPCLASS, "machine");

        for (let iMachine = 0; iMachine < aeMachines.length; iMachine++) {

            let eMachine = aeMachines[iMachine];
            let parmsMachine = Component.getComponentParms(eMachine);

            let aeComputers = Component.getElementsByClass(APPCLASS, "computer", eMachine);

            for (let iComputer = 0; iComputer < aeComputers.length; iComputer++) {

                let eComputer = aeComputers[iComputer];
                let parmsComputer = Component.getComponentParms(eComputer);

                /*
                 * We set fSuspended in the Computer constructor because we want to "power up" the
                 * computer ourselves, after any/all bindings are in place.
                 */
                let computer = new ComputerX80(parmsComputer, parmsMachine, true);

                computer.printf(MESSAGE.DEBUG + MESSAGE.LOG, "onInit(%b)\n", computer.flags.powered);

                /*
                 * Bind any "power", "reset" and "save" buttons.  An "erase" button was also considered,
                 * but "reset" now provides a way to force the machine to start from scratch again, so "erase"
                 * may be redundant now.
                 */
                Component.bindComponentControls(computer, eComputer, APPCLASS);

                /*
                 * Power on the computer, giving every component the opportunity to reset or restore itself.
                 */
                if (computer.fAutoPower) computer.wait(computer.powerOn);
            }
        }
    }

    /**
     * ComputerX80.show()
     *
     * When exit() is using an "onbeforeunload" handler, this "onpageshow" handler allows us to repower everything,
     * without either resetting or restoring.  We call powerOn() with a special resume value (RESUME_REPOWER) if the
     * computer is already marked as "ready", meaning the browser didn't change anything.  This "repower" process
     * should be very quick, essentially just marking all components as powered again (so that, for example, the Video
     * component will start drawing again) and firing the CPU up again.
     */
    static show()
    {
        let aeComputers = Component.getElementsByClass(APPCLASS, "computer");
        for (let iComputer = 0; iComputer < aeComputers.length; iComputer++) {
            let eComputer = aeComputers[iComputer];
            let parmsComputer = Component.getComponentParms(eComputer);
            let computer = /** @type {ComputerX80} */ (Component.getComponentByType("Computer", parmsComputer['id']));
            if (computer) {
                computer.flags.unloading = false;
                computer.printf(MESSAGE.DEBUG + MESSAGE.LOG, "show(%b,%b)\n", computer.fInitialized, computer.flags.powered);
                /*
                 * Note that the FIRST 'pageshow' event, and therefore the first show() callback, occurs
                 * AFTER the the initial 'load' event, and at that point in time, fInitialized will not be set yet.
                 * So, practically speaking, the first show() callback isn't all that useful.
                 */
                if (computer.fInitialized && !computer.flags.powered) {
                    /**
                     * Repower the computer, notifying every component to continue running as-is.
                     */
                    computer.powerOn(ComputerX80.RESUME_REPOWER);
                }
            }
        }
    }

    /**
     * ComputerX80.exit()
     *
     * The Computer is currently the only component that uses an "exit" handler, which web.onExit() defines as
     * either an "unload" or "onbeforeunload" handler.  This gives us the opportunity to save the machine state,
     * using our powerOff() function, before the page goes away.
     *
     * It's worth noting that "onbeforeunload" offers one nice feature when used instead of "onload": the entire
     * page (and therefore this entire application) is retained in its current state by the browser (well, some
     * browsers), so that if you go to a new URL, either by entering a new URL in the same window/tab, or by pressing
     * the FORWARD button, and then you press the BACK button, the page is immediately restored to its previous state.
     *
     * In fact, that's how some browsers operate whether you have an "onbeforeunload" handler or not; in other words,
     * an "onbeforeunload" handler doesn't change the page retention behavior of the browser.  By contrast, the mere
     * presence of an "onunload" handler generally causes a browser to throw the page away once the handler returns.
     *
     * However, in order to safely use "onbeforeunload", we must add yet another handler ("onpageshow") to repower
     * everything, without either resetting or restoring.  Hence, the ComputerX80.show() function, which calls powerOn()
     * with a special resume value (RESUME_REPOWER) if the computer is already marked as "ready", meaning the browser
     * didn't change anything.  This "repower" process should be very quick, essentially just marking all components as
     * powered again (so that, for example, the Video component will start drawing again) and firing the CPU up again.
     *
     * Reportedly, some browsers (eg, Opera) don't support "onbeforeunload", in which case Component will have to use
     * "unload" instead.  But even when the page must be rebuilt from scratch, the combination of browser cache and
     * localStorage means the simulation should be restored and become operational almost immediately.
     */
    static exit()
    {
        let aeComputers = Component.getElementsByClass(APPCLASS, "computer");
        for (let iComputer = 0; iComputer < aeComputers.length; iComputer++) {
            let eComputer = aeComputers[iComputer];
            let parmsComputer = Component.getComponentParms(eComputer);
            let computer = /** @type {ComputerX80} */ (Component.getComponentByType("Computer", parmsComputer['id']));
            if (computer) {
                /*
                 * Added a new flag that Component functions (eg, notice()) should check before alerting the user.
                 */
                computer.flags.unloading = true;
                computer.printf(MESSAGE.DEBUG + MESSAGE.LOG, "onExit(%b)\n", computer.flags.powered);
                if (computer.flags.powered) {
                    /**
                     * Power off the computer, giving every component an opportunity to save its state,
                     * but only if 'resume' has been set AND there is no valid resume path (because if a valid resume
                     * path exists, we'll always load our state from there, and not from whatever we save here).
                     */
                    computer.powerOff(!!(computer.resume && !computer.sResumePath), true);
                }
            }
        }
    }
}

ComputerX80.STATE_FAILSAFE  = "failsafe";
ComputerX80.STATE_VALIDATE  = "validate";
ComputerX80.STATE_TIMESTAMP = "timestamp";
ComputerX80.STATE_VERSION   = "version";
ComputerX80.STATE_HOSTURL   = "url";
ComputerX80.STATE_BROWSER   = "browser";
ComputerX80.STATE_USERID    = "user";

/*
 * The following constants define all the resume options.  Negative values (eg, RESUME_REPOWER) are for
 * internal use only, and RESUME_DELETE is not documented (it provides a way of deleting ALL saved states
 * whenever a resume is declined).  As a result, the only "end-user" values are 0, 1 and 2.
 */
ComputerX80.RESUME_REPOWER  = -1;  // resume without changing any state (for internal use only)
ComputerX80.RESUME_NONE     =  0;  // default (no resume)
ComputerX80.RESUME_AUTO     =  1;  // automatically save/restore state
ComputerX80.RESUME_PROMPT   =  2;  // automatically save but conditionally restore (WARNING: if restore is declined, any state is discarded)
ComputerX80.RESUME_DELETE   =  3;  // same as RESUME_PROMPT but discards ALL machines states whenever ANY machine restore is declined (undocumented)

/*
 * Initialize every Computer on the page.
 */
WebLib.onInit(ComputerX80.init);
WebLib.onShow(ComputerX80.show);
WebLib.onExit(ComputerX80.exit);
