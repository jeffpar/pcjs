/**
 * @fileoverview Base class for devices, with assorted handy services
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import WebIO from "./webio.js";

/**
 * Every device has a 'registers' property that's a hash of register names to Register objects.
 *
 * @typedef {Object} Register
 * @property {function()} get
 * @property {function(number)|null} set
 */

/**
 * In addition to basic Device services, such as:
 *
 *      addDevice()
 *      enumDevices()
 *      findDevice()
 *      findDeviceByClass()
 *
 * this class also supports register "registration" services, to allow a Device to make any registers
 * it supports available by name to other devices (notably the Debugger):
 *
 *      defineRegister()
 *      defineRegisterAlias()
 *      getRegister()
 *      setRegister()
 *
 * Besides CPUs, other devices may have internal registers or ports that are useful to access by name, too.
 *
 * @class {Device}
 * @unrestricted
 * @property {string} idMachine
 * @property {string} idDevice
 * @property {Config} config
 * @property {string} id
 * @property {Object.<Register>} registers
 * @property {CPU|undefined|null} cpu
 * @property {Debugger|undefined|null} dbg
 */
export default class Device extends WebIO {
    /**
     * Device()
     *
     * Supported config properties:
     *
     *      "bindings": object containing name/value pairs, where name is the generic name
     *      of a element, and value is the ID of the DOM element that should be mapped to it
     *
     * The properties in the "bindings" object are copied to our own bindings object in addBindings(),
     * but only for DOM elements that actually exist, and it is the elements themselves (rather than
     * their IDs) that we store.
     *
     * Also, URL parameters can be used to override config properties, as long as those properties
     * have been listed in the device's "overrides" array.  For example, the URL:
     *
     *      http://localhost:4000/?cyclesPerSecond=100000
     *
     * will set the Time device's cyclesPerSecond config property to 100000.  In general, the values
     * will be treated as strings, unless they contain all digits (number), or equal "true" or "false"
     * (boolean).
     *
     * @this {Device}
     * @param {string} [idMachine]
     * @param {string} [idDevice]
     * @param {Config} [config]
     * @param {Array} [overrides] (default overrides, if any, which in turn can be overridden by config['overrides'])
     */
    constructor(idMachine = "default", idDevice = idMachine, config = {}, overrides = [])
    {
        super(idMachine == idDevice);
        this.addDevice(idMachine, idDevice);
        this.checkConfig(config, overrides);
        this.registers = {};
        this.aReadyCallbacks = [];
    }

    /**
     * addDevice(idMachine, idDevice)
     *
     * Adds this Device to the global set of Devices, so that findDevice(), findBinding(), etc, will work.
     *
     * @this {Device}
     * @param {string} idMachine
     * @param {string} idDevice
     */
    addDevice(idMachine, idDevice)
    {
        this.idMachine = idMachine;
        this.idDevice = idDevice;
        if (!Device.Machines[this.idMachine]) {
            Device.Machines[this.idMachine] = {};
        }
        if (Device.Machines[this.idMachine][this.idDevice]) {
            this.printf("warning: machine configuration contains multiple '%s' devices\n", this.idDevice);
        }
        Device.Machines[this.idMachine][this.idDevice] = this;
        /**
         * The new Device classes don't use the Components array or machine+device IDs, but we need to continue
         * updating both of those for backward compatibility with older PCjs machines.
         */
        this['id'] = this.idMachine == this.idDevice? this.idMachine : this.idMachine + '.' + this.idDevice;
        Device.Components.push(this);
        /**
         * The WebIO constructor set this.machine tentatively, so that it could define any per-machine variables
         * it needed; we now set it definitively.
         */
        this.machine = this.findDevice(this.idMachine);
        this.ready = true;
    }

    /**
     * addDumper(device, name, desc, func)
     *
     * Interface definition only; implemented by the Debugger.
     *
     * @this {Device}
     * @param {Device} device
     * @param {string} name
     * @param {string} desc
     * @param {function(Array.<number>)} func
     */
    addDumper(device, name, desc, func)
    {
    }

    /**
     * addSymbols(aSymbols)
     *
     * Interface definition only; implemented by the Debugger.
     *
     * @this {Device}
     * @param {Array|undefined} aSymbols
     */
    addSymbols(aSymbols)
    {
    }

    /**
     * checkConfig(config, overrides)
     *
     * @this {Device}
     * @param {Config} config
     * @param {Array} overrides
     */
    checkConfig(config, overrides)
    {
        /**
         * If this device's config contains an "overrides" array, then any of the properties listed in
         * that array may be overridden with a URL parameter.  We don't impose any checks on the overriding
         * value, so it is the responsibility of the component with overridable properties to validate them.
         */
        overrides = config['overrides'] || overrides;
        if (overrides.length) {
            let parms = this.getURLParms();
            for (let prop in parms) {
                if (overrides.indexOf(prop) >= 0) {
                    let s = parms[prop];
                    let value = this.parseInt(s, 10);
                    if (value == undefined) {
                        if (s == "true") {
                            value = true;
                        } else if (s == "false") {
                            value = false;
                        } else {
                            value = s;
                            s = '"' + s + '"';
                        }
                    }
                    config[prop] = value;
                    this.println("overriding " + this.idDevice + " property '" + prop + "' with " + s);
                }
            }
        }
        this.config = config;
        this.addBindings(config['bindings']);
        this.checkVersion(config);
    }

    /**
     * checkVersion(config)
     *
     * Verify that device's version matches the machine's version, and also that the config version stored in
     * the JSON (if any) matches the device's version.
     *
     * This is normally performed by the constructor, but the Machine device cannot be fully initialized in the
     * constructor, so it calls this separately.
     *
     * @this {Device}
     * @param {Config} [config]
     */
    checkVersion(config = {})
    {
        this.version = +Device.VERSION;
        if (this.version) {
            let sVersion = "", version;
            if (this.idMachine != this.idDevice) {
                let machine = this.findDevice(this.idMachine);
                version = machine.version;
                if (version && version != this.version) {
                    sVersion = "Machine";
                }
            }
            if (!sVersion) {
                version = config['version'];
                if (version && version > this.version) {
                    sVersion = "Config";
                }
            }
            if (sVersion) {
                let sError = this.sprintf("%s Device version (%3.2f) incompatible with %s version (%3.2f)", config.class, this.version, sVersion, version);
                this.error("%s\n\nClearing your browser's cache may resolve the issue.", sError);
            }
        }
    }

    /**
     * defineRegister(name, get, set)
     *
     * @this {Device}
     * @param {string} name
     * @param {function()} get
     * @param {function(number)} [set]
     */
    defineRegister(name, get, set)
    {
        this.registers[name] = {get: get.bind(this), set: set? set.bind(this) : null};
    }

    /**
     * defineRegisterAlias(name, alias)
     *
     * @this {Device}
     * @param {string} name
     * @param {string} alias
     */
    defineRegisterAlias(name, alias)
    {
        this.assert(this.registers[name]);
        if (this.registers[name]) {
            this.registers[alias] = this.registers[name];
        }
    }

    /**
     * enumDevices(func)
     *
     * @this {Device}
     * @param {function(Device)} func
     * @returns {boolean} (true if all devices successfully enumerated, false otherwise)
     */
    enumDevices(func)
    {
        let id;
        try {
            let devices = Device.Machines[this.idMachine];
            if (devices) {
                for (id in devices) {
                    let device = devices[id];
                    if (device.idDevice != device.idMachine) { // alternatively, (config['class'] != "Machine"), but that can fail in a misconfigured machine
                        if (!func(device)) return false;
                    }
                }
            }
            return true;
        } catch(err) {
            this.printf("error while enumerating device '%s': %s\n", id, err.message);
        }
        return false;
    }

    /**
     * findBinding(name, all)
     *
     * This will search the current device's bindings, and optionally all the device bindings within the
     * machine.  If the binding is found in another device, that binding is recorded in this device as well.
     *
     * @this {Device}
     * @param {string} [name]
     * @param {boolean} [all]
     * @returns {Element|null|undefined}
     */
    findBinding(name, all = false)
    {
        let element;
        if (name) {
            element = super.findBinding(name, all);
            if (element === undefined && all) {
                let devices = Device.Machines[this.idMachine];
                for (let id in devices) {
                    element = devices[id].bindings[name];
                    if (element) break;
                }
                if (!element) element = null;
                this.bindings[name] = element;
            }
        }
        return element;
    }

    /**
     * findDevice(idDevice, fRequired)
     *
     * @this {Device}
     * @param {string} idDevice
     * @param {boolean} [fRequired] (default is true, so if the device is not found, an Error is thrown)
     * @returns {Device|null}
     */
    findDevice(idDevice, fRequired=true)
    {
        let id = idDevice;
        let idMachine = this.idMachine;
        let i = idMachine.indexOf('.');
        if (i > 0) {
            idMachine = idMachine.substr(0, i);
            idDevice = idDevice.substr(i + 1);
        }
        let devices = Device.Machines[idMachine];
        let device = devices && devices[idDevice] || null;
        if (!device) {
            /**
             * Also check the old list of PCjs machine component IDs, to maintain backward compatibility.
             */
            for (i = 0; i < Device.Components.length; i++) {
                if (Device.Components[i]['id'] === id) {
                    device = Device.Components[i];
                    break;
                }
            }
            if (!device && fRequired) {
                throw new Error(this.sprintf('no "%s" device', id));
            }
        }
        return device;
    }

    /**
     * findDeviceByClass(idClass, fRequired)
     *
     * This is only appropriate for device classes where no more than one instance of the device is allowed;
     * for example, it is NOT appropriate for the Bus class, because machines can have multiple buses (eg, an
     * I/O bus and a Memory bus).
     *
     * @this {Device}
     * @param {string} idClass
     * @param {boolean} [fRequired] (default is true, so if the device is not found, an Error is thrown)
     * @returns {Device|null}
     */
    findDeviceByClass(idClass, fRequired=true)
    {
        let device = null;
        let devices = Device.Machines[this.idMachine];
        if (devices) {
            for (let id in devices) {
                if (devices[id].config['class'] == idClass) {
                    if (device) {
                        device = null;      // multiple devices with the same class, so return an error
                        break;
                    }
                    device = devices[id];
                }
            }
        }
        if (!device && fRequired) {
            throw new Error(this.sprintf('no %s device', idClass));
        }
        return device;
    }

    /**
     * getMachineConfig(prop)
     *
     * @this {Device}
     * @param {string} prop
     * @returns {*}
     */
    getMachineConfig(prop)
    {
        let machine = this.findDevice(this.idMachine);
        return machine && machine.config && machine.config[prop] || this.config[prop];
    }

    /**
     * getRegister(name)
     *
     * @this {Device}
     * @param {string} name
     * @returns {number|undefined}
     */
    getRegister(name)
    {
        let reg = this.registers[name];
        return reg && reg.get();
    }

    /**
     * isReady()
     *
     * @this {Device}
     * @returns {boolean}
     */
    isReady()
    {
        if (this != this.machine || !this.ready) {
            return this.ready;
        }
        /**
         * Machine readiness is more complicated: check the readiness of all devices.  This is easily
         * checked with an enumDevices() function that returns false if a device isn't ready yet, which
         * in turn terminates the enumeration and returns false.
         */
        return this.enumDevices((device) => device.isReady());
    }

    /**
     * setReady(ready)
     *
     * @this {Device}
     * @param {boolean} [ready]
     */
    setReady(ready = this.ready)
    {
        this.ready = ready;
        if (this.isReady()) {
            let callback;
            while ((callback = this.aReadyCallbacks.pop())) {
                callback();
            }
            if (this != this.machine) this.machine.setReady();
        }
    }

    /**
     * whenReady(callback)
     *
     * @this {Device}
     * @param {function()} callback
     * @returns {boolean} (true if ready now, false if not ready yet)
     */
    whenReady(callback)
    {
        if (this.isReady()) {
            callback();
            return true;
        }
        this.aReadyCallbacks.push(callback);
        return false;
    }

    /**
     * notifyMessage(messages)
     *
     * Overridden by other devices (eg, Debugger) to receive notifications of messages, along with the messages bits.
     *
     * @this {Device}
     * @param {number} messages
     */
    notifyMessage(messages)
    {
    }

    /**
     * printf(format, ...args)
     *
     * Just as WebIO.printf() overrides StdIO.printf() to add support for Messages, we override WebIO.printf()
     * to add support for MESSAGE.ADDR: if that message bit is set, we want to append the current execution address
     * (PC) to any message-driven printf() call.
     *
     * @this {Device}
     * @param {string|number} format
     * @param {...} args
     * @returns {number}
     */
    printf(format, ...args)
    {
        if (typeof format == "number" && this.isMessageOn(format)) {
            /**
             * The following call will execute at most once, because findDeviceByClass() returns either a Device or null,
             * neither of which is undefined.
             */
            if (this.dbg === undefined) {
                this.dbg = /** @type {Device} */ (this.findDeviceByClass("Debugger", false));
            }
            if (this.dbg) {
                this.dbg.notifyMessage(format);
            }
            if (this.machine.messages & Device.MESSAGE.ADDR) {
                /**
                 * Same rules as above apply here.  Hopefully no message-based printf() calls will arrive with MESSAGE.ADDR
                 * set *before* the CPU device has been initialized.
                 */
                if (this.cpu === undefined) {
                    this.cpu = /** @type {CPU} */ (this.findDeviceByClass("CPU"));
                }
                if (this.cpu) {
                    format = args.shift();
                    return super.printf("%#06x: %s.%s\n", this.cpu.regPCLast, this.idDevice, this.sprintf(format, ...args).trim());
                }
            }
        }
        return super.printf(format, ...args);
    }

    /**
     * removeDevice(idDevice)
     *
     * @this {Device}
     * @param {string} idDevice
     */
    removeDevice(idDevice)
    {
        let device;
        let devices = Device.Machines[this.idMachine];
        if (devices) delete devices[idDevice];
    }

    /**
     * setRegister(name, value)
     *
     * @this {Device}
     * @param {string} name
     * @param {number} value
     * @returns {boolean} (true if register exists and successfully set, false otherwise)
     */
    setRegister(name, value)
    {
        let reg = this.registers[name];
        if (reg && reg.set) {
            reg.set(value);
            return true;
        }
        return false;
    }
}

/**
 * List of additional message groups, extending the base set defined in lib/webio.js.
 *
 * NOTE: To support more than 32 message groups, be sure to use "+", not "|", when concatenating.
 */
Device.MESSAGE.ADDR             = 0x000000000001;       // this is a special bit (bit 0) used to append address info to messages
Device.MESSAGE.BUS              = 0x000000000002;
Device.MESSAGE.FAULT            = 0x000000000004;
Device.MESSAGE.MEMORY           = 0x000000000008;
Device.MESSAGE.PORTS            = 0x000000000010;
Device.MESSAGE.CHIPS            = 0x000000000020;
Device.MESSAGE.KBD              = 0x000000000040;
Device.MESSAGE.SERIAL           = 0x000000000080;
Device.MESSAGE.MISC             = 0x000000000100;
Device.MESSAGE.CPU              = 0x000000000200;
Device.MESSAGE.MMU              = 0x000000000400;
Device.MESSAGE.INT              = 0x000000000800;
Device.MESSAGE.TRAP             = 0x000000001000;
Device.MESSAGE.VIDEO            = 0x000000002000;       // used with video hardware messages (see video.js)
Device.MESSAGE.MONITOR          = 0x000000004000;       // used with video monitor messages (see monitor.js)
Device.MESSAGE.SCREEN           = 0x000000008000;       // used with screen-related messages (also monitor.js)
Device.MESSAGE.DISK             = 0x000000010000;
Device.MESSAGE.FILE             = 0x000000020000;
Device.MESSAGE.TIME             = 0x000000040000;
Device.MESSAGE.TIMER            = 0x000000080000;
Device.MESSAGE.EVENT            = 0x000000100000;
Device.MESSAGE.INPUT            = 0x000000200000;
Device.MESSAGE.KEY              = 0x000000400000;
Device.MESSAGE.MOUSE            = 0x000000800000;
Device.MESSAGE.TOUCH            = 0x000001000000;
Device.MESSAGE.INFO             = 0x000002000000;
Device.MESSAGE.WARN             = 0x000004000000;
Device.MESSAGE.ERROR            = 0x000008000000;
Device.MESSAGE.HALT             = 0x000010000000;
Device.MESSAGE.CUSTOM           = 0x000100000000;       // all custom device messages must start here

Device.MESSAGE_NAMES["addr"]    = Device.MESSAGE.ADDR;
Device.MESSAGE_NAMES["bus"]     = Device.MESSAGE.BUS;
Device.MESSAGE_NAMES["fault"]   = Device.MESSAGE.FAULT;
Device.MESSAGE_NAMES["memory"]  = Device.MESSAGE.MEMORY;
Device.MESSAGE_NAMES["ports"]   = Device.MESSAGE.PORTS;
Device.MESSAGE_NAMES["chips"]   = Device.MESSAGE.CHIPS;
Device.MESSAGE_NAMES["kbd"]     = Device.MESSAGE.KBD;
Device.MESSAGE_NAMES["serial"]  = Device.MESSAGE.SERIAL;
Device.MESSAGE_NAMES["misc"]    = Device.MESSAGE.MISC;
Device.MESSAGE_NAMES["cpu"]     = Device.MESSAGE.CPU;
Device.MESSAGE_NAMES["mmu"]     = Device.MESSAGE.MMU;
Device.MESSAGE_NAMES["int"]     = Device.MESSAGE.INT;
Device.MESSAGE_NAMES["trap"]    = Device.MESSAGE.TRAP;
Device.MESSAGE_NAMES["video"]   = Device.MESSAGE.VIDEO;
Device.MESSAGE_NAMES["monitor"] = Device.MESSAGE.MONITOR;
Device.MESSAGE_NAMES["screen"]  = Device.MESSAGE.SCREEN;
Device.MESSAGE_NAMES["disk"]    = Device.MESSAGE.DISK;
Device.MESSAGE_NAMES["file"]    = Device.MESSAGE.FILE;
Device.MESSAGE_NAMES["time"]    = Device.MESSAGE.TIME;
Device.MESSAGE_NAMES["timer"]   = Device.MESSAGE.TIMER;
Device.MESSAGE_NAMES["event"]   = Device.MESSAGE.EVENT;
Device.MESSAGE_NAMES["input"]   = Device.MESSAGE.INPUT;
Device.MESSAGE_NAMES["key"]     = Device.MESSAGE.KEY;
Device.MESSAGE_NAMES["mouse"]   = Device.MESSAGE.MOUSE;
Device.MESSAGE_NAMES["touch"]   = Device.MESSAGE.TOUCH;
Device.MESSAGE_NAMES["info"]    = Device.MESSAGE.INFO;
Device.MESSAGE_NAMES["warn"]    = Device.MESSAGE.WARN;
Device.MESSAGE_NAMES["error"]   = Device.MESSAGE.ERROR;
Device.MESSAGE_NAMES["halt"]    = Device.MESSAGE.HALT;

Device.CLASSES["Device"] = Device;
