/**
 * @fileoverview Manages a collection of devices as a single machine
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "./device.js";
import MESSAGE from "./message.js";

/**
 * @class Machine
 * @unrestricted
 * @property {CPU} cpu
 * @property {string} sConfigFile
 * @property {boolean} fConfigLoaded
 * @property {boolean} fPageLoaded
 */
export default class Machine extends Device {
    /**
     * Machine(idMachine, sConfig, sParms)
     *
     * If sConfig contains a JSON object definition, then we parse it immediately and save the result in this.config;
     * otherwise, we assume it's the URL of an JSON object definition, so we request the resource, and once it's loaded,
     * we parse it.
     *
     * One important change in v2: the order of the device objects in the JSON file determines creation/initialization order.
     * In general, the Machine object should always be first (it's always created first anyway), and the Time object should
     * be listed next, so that its services are available to any other device when they're created/initialized.
     *
     * Sample config:
     *
     *    {
     *      "ti57": {
     *        "class": "Machine",
     *        "type": "TI57",
     *        "name": "TI-57 Programmable Calculator Simulation",
     *        "version": 2.00,
     *        "autoSave": true,
     *        "autoStart": true,
     *        "bindings": {
     *          "power": "powerTI57",
     *          "reset": "resetTI57",
     *          "clear": "clearTI57",
     *          "print": "printTI57"
     *        }
     *      },
     *      "clock": {
     *        "class": "Time",
     *        "cyclesPerSecond": 650000
     *        "bindings": {
     *          "run": "runTI57",
     *          "speed": "speedTI57",
     *          "step": "stepTI57"
     *        },
     *        "overrides": ["cyclesPerSecond"]
     *      },
     *      "display": {
     *        "class": "LED",
     *        "type": 3,
     *        "cols": 12,
     *        "rows": 1,
     *        "color": "red",
     *        "bindings": {
     *          "container": "displayTI57"
     *        },
     *        "overrides": ["color","backgroundColor"]
     *      },
     *      "buttons": {
     *        "class": "Input",
     *        "map": [
     *          ["2nd",  "inv",  "lnx",  "\\b",  "clr"],
     *          ["lrn",  "xchg", "sq",   "sqrt", "rcp"],
     *          ["sst",  "sto",  "rcl",  "sum",  "exp"],
     *          ["bst",  "ee",   "(",    ")",    "/"],
     *          ["gto",  "7",    "8",    "9",    "*"],
     *          ["sbr",  "4",    "5",    "6",    "-"],
     *          ["rst",  "1",    "2",    "3",    "+"],
     *          ["r/s",  "0",    ".",    "+/-",  "=|\\r"]
     *        ],
     *        "location": [139, 325, 368, 478, 0.34, 0.5, 640, 853, 418, 180, 75, 36],
     *        "bindings": {
     *          "surface": "imageTI57"
     *        }
     *      },
     *      "rom": {
     *        "class": "ROM",
     *        "wordSize": 13,
     *        "valueSize": 16,
     *        "valueTotal": 2048,
     *        "littleEndian": true,
     *        "file": "ti57le.bin",
     *        "reference": "",
     *        "values": [
     *        ]
     *      },
     *      "cpu": {
     *        "class": "CPU",
     *        "type": "TMS-1500",
     *        "input": "buttons",
     *        "output": "display"
     *      }
     *    }
     *
     * @this {Machine}
     * @param {string} idMachine (of both the machine AND the <div> to contain it)
     * @param {string} sConfig (JSON configuration for entire machine, including any static resources)
     * @param {string} [sParms] (optional JSON parameters that can supplement or override the configuration)
     */
    constructor(idMachine, sConfig, sParms)
    {
        super(idMachine, idMachine);

        let machine = this;
        this.fPowered = false;
        this.sParms = sParms;
        this.sConfigFile = "";
        this.fConfigLoaded = false;
        this.fPageLoaded = false;
        this.setReady(false);

        /**
         * You can pass "m" commands to the machine via the "commands" parameter to turn on any desired
         * message groups, but since the Debugger is responsible for parsing those commands, and since the
         * Debugger is usually not initialized until last, messages from any earlier constructor calls will
         * not appear.
         *
         * One alternative is to hard-code any MESSAGE groups here, to ensure that the relevant messages
         * from all device constructors get displayed.
         */
        this.messages = Device.DEBUG? MESSAGE.WARNING : MESSAGE.DEFAULT;

        sConfig = sConfig.trim();
        if (sConfig[0] == '{') {
            this.loadConfig(sConfig);
        } else {
            this.sConfigFile = sConfig;
            this.getResource(this.sConfigFile, function onLoadConfig(sURL, sResource, readyState, nErrorCode) {
                if (readyState == 4) {
                    if (!nErrorCode && sResource) {
                        machine.loadConfig(sResource);
                        machine.initDevices();
                    }
                    else {
                        machine.printf("error (%d) loading configuration: %s\n", nErrorCode, sURL);
                    }
                }
            });
        }

        /**
         * Device initialization is now deferred until after the page is fully loaded, for the benefit
         * of devices (eg, Input) that may be dependent on page resources.
         *
         * Strangely, for these page events, I must use the window object rather than the document object.
         */
        window.addEventListener('load', function onLoadPage(event) {
            machine.fPageLoaded = true;
            machine.initDevices();
        });
        let sEvent = this.isUserAgent("iOS")? 'pagehide' : (this.isUserAgent("Opera")? 'unload' : 'beforeunload');
        window.addEventListener(sEvent, function onUnloadPage(event) {
            machine.stopDevices();
        });
        window.addEventListener('pageshow', function onShowPage(event) {
            if (!machine.fPowered) machine.onPower(true);
        });
    }

    /**
     * addBinding(binding, element)
     *
     * @this {Machine}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let machine = this;

        switch(binding) {

        case Machine.BINDING.POWER:
            element.onclick = function onClickPower() {
                machine.onPower();
            };
            break;

        case Machine.BINDING.RESET:
            element.onclick = function onClickReset() {
                machine.onReset();
            };
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * initDevices()
     *
     * Initializes devices in the proper order.  For example, any Time devices should be initialized first,
     * to ensure that their timer services are available to other devices within their constructor.
     *
     * However, we should avoid device order dependencies whenever possible, so if a Device can defer a call
     * to another Device until its onLoad() or onPower() handler can be called, even better.
     *
     * @this {Machine}
     */
    initDevices()
    {
        let power = true;
        if (this.fConfigLoaded && this.fPageLoaded) {
            for (let idDevice in this.deviceConfigs) {
                let sClass;
                let config = this.deviceConfigs[idDevice];
                try {
                    sClass = config['class'];
                    if (!Machine.CLASSES[sClass]) {
                        this.printf('unrecognized %s device "%s"\n', sClass, idDevice);
                    }
                    else if (sClass == "Machine") {
                        this.printf("PCjs %s v%3.2f\n%s\n", config['name'], +Machine.VERSION, Machine.COPYRIGHT);
                        if (this.sConfigFile) this.printf("Configuration: %s\n", this.sConfigFile);
                    } else {
                        let device = new Machine.CLASSES[sClass](this.idMachine, idDevice, config);
                        if (Machine.MAXDEBUG) this.printf('%s device "%s"\n', sClass, idDevice);
                    }
                }
                catch (err) {
                    if (!config['optional']) {
                        this.printf('error initializing %s device "%s": %s\n', sClass, idDevice, err.message);
                        power = false;
                    }
                    this.removeDevice(idDevice);
                }
            }
            if (this.fAutoSave) {
                let state = this.loadLocalStorage();
                this.enumDevices(function onDeviceLoad(device) {
                    if (device.onLoad) {
                        if (!device.onLoad(state)) {
                            device.printf('unable to restore state for device "%s"\n', device.idDevice);
                            return false;
                        }
                    }
                    return true;
                });
            }
            this.setReady(true);
            if (!this.whenReady(this.onPower.bind(this, power))) {
                this.printf("machine %s not ready to power, waiting for device(s)\n", this.idMachine);
            }
        }
    }

    /**
     * isPowered()
     *
     * @this {Machine}
     * @returns {boolean} true if the machine is powered, false if not
     */
    isPowered()
    {
        return this.fPowered;
    }

    /**
     * loadConfig(sConfig)
     *
     * @this {Machine}
     * @param {string} sConfig
     */
    loadConfig(sConfig)
    {
        try {
            this.deviceConfigs = JSON.parse(sConfig);
            let config = this.deviceConfigs[this.idMachine];
            if (!config) {
                /**
                 * Pages that want to instantiate multiple machines using identical configs would normally
                 * have to create unique config files for each machine, even though the only difference between
                 * the configs would be the machine ID.  To reduce that redundancy, we'll try to identify the
                 * Machine object within the config using the name of the config file itself, and if that
                 * succeeds, then we'll duplicate the Machine object within the config using the actual ID.
                 */
                let id = this.getBaseName(this.sConfigFile, true);
                config = this.deviceConfigs[id];
                if (!config) {
                    throw new Error("configuration missing machine ID");
                }
                this.deviceConfigs[this.idMachine] = config;
            }
            this.checkConfig(config, ['autoSave', 'autoStart']);
            this.fAutoSave = (this.config['autoSave'] !== false);
            this.fAutoStart = (this.config['autoStart'] !== false);
            if (this.sParms) {
                /**
                 * Historically, my web servers have not been consistent about quoting property names inside
                 * the optional parameters object, so we must use eval() instead of JSON.parse() to parse them.
                 * Of course, the REAL problem is that JSON.parse() is being a dick about otherwise perfectly
                 * legitimate Object syntax, but I shall not repeat my long list of gripes about JSON here.
                 */
                let parms = /** @type {Object} */ (eval("(" + this.sParms + ")"));
                /**
                 * Slam all these parameters into the machine's config, overriding any matching machine configuration
                 * properties.  Any other devices that need access to these properties should use getMachineConfig().
                 */
                for (let prop in parms) {
                    this.config[prop] = parms[prop];
                }
            }
            this.fConfigLoaded = true;
        } catch(err) {
            let sError = err.message;
            let match = sError.match(/position ([0-9]+)/);
            if (match) {
                sError += " ('" + sConfig.substr(+match[1], 40).replace(/\s+/g, ' ') + "...')";
            }
            this.printf("machine '%s' initialization error: %s\n", this.idMachine, sError);
        }
    }

    /**
     * onPower(on)
     *
     * @this {Machine}
     * @param {boolean} [on]
     */
    onPower(on = !this.fPowered)
    {
        if (this.isReady()) {
            let machine = this;
            if (on) this.printf("power on\n");
            this.enumDevices(function onDevicePower(device) {
                if (device.onPower && device != machine) {
                    if (device.config['class'] != "CPU" || machine.fAutoStart && machine.isReady()) {
                        device.onPower(on);
                    } else {
                        /**
                         * If we're not going to start the CPU on the first power notification, then we should
                         * we fake a transition to the "stopped" state, so that the Debugger will display the current
                         * machine state.
                         */
                        device.time.update(true);
                    }
                }
                return true;
            });
            this.fPowered = on;
            if (!on) this.printf("power off\n");
        }
    }

    /**
     * onReset()
     *
     * @this {Machine}
     */
    onReset()
    {
        if (this.isReady()) {
            let machine = this;
            this.enumDevices(function onDeviceReset(device) {
                if (device.onReset && device != machine) {
                    device.onReset();
                }
                return true;
            });
            this.printf("reset\n");
        }
    }

    /**
     * stopDevices()
     *
     * @this {Machine}
     */
    stopDevices()
    {
        if (this.fAutoSave) {
            let state = [];
            this.enumDevices(function onDeviceSave(device) {
                if (device.onSave) {
                    device.onSave(state);
                }
                return true;
            });
            this.saveLocalStorage(state);
        }
        this.onPower(false);
    }
}

Machine.BINDING = {
    POWER:      "power",
    RESET:      "reset",
};

/**
 * Create the designated machine FACTORY function (this should suffice for all compiled versions).
 *
 * In addition, expose the machine's COMMAND handler interface, so that it's easy to access any of the
 * machine's built-in commands from a browser or IDE debug console:
 *
 *      window.command("?")
 *
 * Normally, access to the COMMAND handlers will be through the machine's WebIO.BINDING.PRINT textarea,
 * but not all machines will have such a control, and sometimes that control will be inaccessible (eg, if
 * the browser is currently debugging the machine).
 */
window[Machine.FACTORY] = function createMachine(idMachine, sConfig, sParms) {
    let machine = new Machine(idMachine, sConfig, sParms);
    window[Machine.COMMAND] = function(commands) {
        return machine.parseCommands(commands);
    };
    return machine;
};

Machine.CLASSES["Machine"] = Machine;
