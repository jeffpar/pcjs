/**
 * @fileoverview Implements the PCx86 SoundBlaster component
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import OPL from "./opl.js";
import Component from "../../../modules/v2/component.js";
import State from "../../../modules/v2/state.js";
import StrLib from "../../../modules/v2/strlib.js";
import WebLib from "../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, globals } from "./defines.js";

/**
 * The SoundBlaster component emulates a Creative Labs Sound Blaster card: the DSP (really just an Intel
 * 8051 microcontroller) that drives an 8-bit DAC (via DMA or direct writes), the Yamaha YM3812 (OPL2) FM
 * synthesizer that also appears on a stand-alone AdLib card, and on the Pro models, the CT1345 mixer.
 *
 * Audio is rendered with the Web Audio API, using the AudioContext that the ChipSet component creates for
 * the PC speaker.  Everything is driven by the CPU's cycle-based timers rather than by wall-clock time, so
 * that the DSP's DMA transfers and interrupts remain in lock-step with the emulated machine; the rendered
 * samples are queued to the AudioContext in small buffers, re-synchronizing with the audio clock whenever
 * the emulator falls behind or gets too far ahead.
 *
 * @class SoundBlaster
 * @property {number} portBase
 * @property {number} nIRQ
 * @property {number} nDMA
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class SoundBlaster extends Component {

    /**
     * Supported models (the model determines the DSP version reported by the 0xE1 command, which is what
     * most software uses to decide which features are available).
     */
    static MODELS = {
        "sb1":      {name: "Sound Blaster 1.5",     version: 0x0105, mixer: false},
        "sb2":      {name: "Sound Blaster 2.0",     version: 0x0201, mixer: false},
        "sbpro":    {name: "Sound Blaster Pro",     version: 0x0302, mixer: true}
    };

    static MODEL_DEFAULT = "sb2";

    static PORT_DEFAULT = 0x220;
    static IRQ_DEFAULT  = 7;
    static DMA_DEFAULT  = 1;

    static PORT_ADLIB   = 0x388;

    /**
     * Port offsets (from the base port)
     */
    static PORT = {
        FM_LEFT_STATUS: 0x0,        // Pro: left FM chip status (R) / address (W)
        FM_LEFT_DATA:   0x1,        // Pro: left FM chip data (W)
        FM_RIGHT_STATUS:0x2,        // Pro: right FM chip status (R) / address (W)
        FM_RIGHT_DATA:  0x3,        // Pro: right FM chip data (W)
        MIXER_ADDR:     0x4,        // Pro: mixer register index (W)
        MIXER_DATA:     0x5,        // Pro: mixer register data (R/W)
        DSP_RESET:      0x6,        // DSP reset (W)
        FM_STATUS:      0x8,        // FM status (R) / address (W)
        FM_DATA:        0x9,        // FM data (W)
        DSP_READ:       0xA,        // DSP read data (R)
        DSP_WRITE:      0xC,        // DSP write command/data (W) / write-buffer status (R)
        DSP_STATUS:     0xE         // DSP read-buffer status (R); also acknowledges the DSP's interrupt
    };

    /**
     * DSP commands
     */
    static CMD = {
        DIRECT_DAC:     0x10,       // 8-bit direct DAC output (1 data byte)
        DMA_DAC:        0x14,       // 8-bit single-cycle DMA output (2 length bytes)
        DMA_DAC2:       0x15,       // (same as 0x14)
        DMA_ADPCM2_REF: 0x16,       // 2-bit ADPCM single-cycle DMA output with reference byte
        DMA_ADPCM2:     0x17,       // 2-bit ADPCM single-cycle DMA output
        DMA_DAC_AUTO:   0x1C,       // 8-bit auto-initialize DMA output (uses block size from SET_BLOCK)
        DMA_ADPCM2_AUTO:0x1F,       // 2-bit ADPCM auto-initialize DMA output
        DIRECT_ADC:     0x20,       // 8-bit direct ADC input
        DMA_ADC:        0x24,       // 8-bit single-cycle DMA input
        DMA_ADC_AUTO:   0x2C,       // 8-bit auto-initialize DMA input
        MIDI_POLL:      0x30,
        MIDI_INT:       0x31,
        MIDI_UART_POLL: 0x34,
        MIDI_UART_INT:  0x35,
        MIDI_WRITE:     0x38,       // (1 data byte)
        SET_TIME_CONST: 0x40,       // set time constant (1 byte): sample rate = 1000000 / (256 - tc)
        SET_RATE_OUT:   0x41,       // SB16: set output sample rate (2 bytes, MSB first)
        SET_RATE_IN:    0x42,       // SB16: set input sample rate (2 bytes, MSB first)
        CONTINUE_AUTO8: 0x45,       // SB16: continue 8-bit auto-initialize DMA
        CONTINUE_AUTO16:0x47,       // SB16: continue 16-bit auto-initialize DMA
        SET_BLOCK:      0x48,       // set DMA block size (2 length bytes)
        DMA_ADPCM4_REF: 0x74,       // 4-bit ADPCM single-cycle DMA output with reference byte
        DMA_ADPCM4:     0x75,       // 4-bit ADPCM single-cycle DMA output
        DMA_ADPCM3_REF: 0x76,       // 2.6-bit ADPCM single-cycle DMA output with reference byte
        DMA_ADPCM3:     0x77,       // 2.6-bit ADPCM single-cycle DMA output
        DMA_ADPCM4_AUTO:0x7D,       // 4-bit ADPCM auto-initialize DMA output
        DMA_ADPCM3_AUTO:0x7F,       // 2.6-bit ADPCM auto-initialize DMA output
        SILENCE:        0x80,       // output silence (2 length bytes), interrupting when done
        HS_DAC_AUTO:    0x90,       // high-speed 8-bit auto-initialize DMA output
        HS_DAC:         0x91,       // high-speed 8-bit single-cycle DMA output
        HS_ADC_AUTO:    0x98,       // high-speed 8-bit auto-initialize DMA input
        HS_ADC:         0x99,       // high-speed 8-bit single-cycle DMA input
        PAUSE_DMA8:     0xD0,       // pause 8-bit DMA
        SPEAKER_ON:     0xD1,
        SPEAKER_OFF:    0xD3,
        CONTINUE_DMA8:  0xD4,       // continue 8-bit DMA
        PAUSE_DMA16:    0xD5,
        CONTINUE_DMA16: 0xD6,
        SPEAKER_STATUS: 0xD8,       // returns 0xFF if speaker on, 0x00 if off
        EXIT_AUTO16:    0xD9,       // SB16: exit 16-bit auto-initialize DMA (at the end of the current block)
        EXIT_AUTO8:     0xDA,       // exit 8-bit auto-initialize DMA (at the end of the current block)
        IDENTIFY:       0xE0,       // returns the complement of the data byte (1 data byte)
        VERSION:        0xE1,       // returns DSP version (major, minor)
        DMA_IDENTIFY:   0xE2,       // "DMA identification" (1 data byte): writes a derived byte to memory via DMA
        COPYRIGHT:      0xE3,       // SB16: returns copyright string
        WRITE_TEST:     0xE4,       // SB16: write test register (1 data byte)
        READ_TEST:      0xE8,       // SB16: read test register
        TRIGGER_IRQ8:   0xF2,       // trigger an 8-bit DMA interrupt
        TRIGGER_IRQ16:  0xF3,       // SB16: trigger a 16-bit DMA interrupt
        STATUS:         0xF8        // undocumented: returns 0x00
    };

    /**
     * Number of data bytes that follow each DSP command (commands not listed take no data bytes)
     */
    static CMD_LENGTH = {
        0x10: 1, 0x14: 2, 0x15: 2, 0x16: 2, 0x17: 2, 0x24: 2, 0x38: 1,
        0x40: 1, 0x41: 2, 0x42: 2, 0x48: 2, 0x74: 2, 0x75: 2, 0x76: 2, 0x77: 2,
        0x80: 2, 0xE0: 1, 0xE2: 1, 0xE4: 1
    };

    /**
     * DSP transfer modes
     */
    static MODE = {
        NONE:       0,              // idle (the DAC outputs whatever was last written with DIRECT_DAC)
        PCM:        1,              // 8-bit unsigned PCM via DMA
        ADPCM2:     2,              // 2-bit ADPCM via DMA
        ADPCM3:     3,              // 2.6-bit ADPCM via DMA
        ADPCM4:     4,              // 4-bit ADPCM via DMA
        RECORD:     5,              // 8-bit PCM input via DMA (we supply silence)
        SILENCE:    6               // no transfer, just a delay followed by an interrupt
    };

    /**
     * Mixer registers (CT1345, Sound Blaster Pro)
     */
    static MIXER = {
        RESET:          0x00,
        VOICE:          0x04,       // DAC volume (L: bits 7-5, R: bits 3-1)
        MIC:            0x0A,       // microphone volume (bits 2-0)
        INPUT:          0x0C,       // input source/filter
        OUTPUT:         0x0E,       // output: bit 1 = stereo, bit 5 = output filter off
        MASTER:         0x22,       // master volume (L: bits 7-5, R: bits 3-1)
        FM:             0x26,       // FM volume (L: bits 7-5, R: bits 3-1)
        CD:             0x28,       // CD volume
        LINE:           0x2E        // line-in volume
    };

    /**
     * Event types (for the time-stamped event queue consumed by the audio renderer)
     */
    static EVENT = {
        FM:         0,              // FM register write (a = register, b = value)
        DAC:        1,              // direct DAC write (a = value)
        START:      2,              // DMA playback started (a = sample rate)
        STOP:       3               // DMA playback stopped
    };

    static TICK_MS      = 10;       // audio rendering interval (emulated milliseconds)
    static FM_SCALE     = 1/8192;   // scales the OPL's 16-bit output (which rarely exceeds a quarter of its range) to +/-1.0
    static LATENCY_SEC  = 0.06;     // how far ahead of the audio clock we start playing after a (re)sync
    static MAX_AHEAD_SEC= 0.30;     // how far ahead of the audio clock we're allowed to queue before dropping

    /**
     * ADPCM decoding tables (adapted from the well-known descriptions of Creative's ADPCM formats)
     */
    static ADPCM4_SCALE = [
        0,  1,  2,  3,  4,  5,  6,  7,  0,  -1,  -2,  -3,  -4,  -5,  -6,  -7,
        1,  3,  5,  7,  9, 11, 13, 15, -1,  -3,  -5,  -7,  -9, -11, -13, -15,
        2,  6, 10, 14, 18, 22, 26, 30, -2,  -6, -10, -14, -18, -22, -26, -30,
        4, 12, 20, 28, 36, 44, 52, 60, -4, -12, -20, -28, -36, -44, -52, -60
    ];
    static ADPCM4_ADJUST = [
          0, 0, 0, 0, 0, 16, 16, 16,
          0, 0, 0, 0, 0, 16, 16, 16,
        240, 0, 0, 0, 0, 16, 16, 16,
        240, 0, 0, 0, 0, 16, 16, 16,
        240, 0, 0, 0, 0, 16, 16, 16,
        240, 0, 0, 0, 0, 16, 16, 16,
        240, 0, 0, 0, 0,  0,  0,  0,
        240, 0, 0, 0, 0,  0,  0,  0
    ];
    static ADPCM3_SCALE = [
        0,  1,  2,  3,  0,  -1,  -2,  -3,
        1,  3,  5,  7, -1,  -3,  -5,  -7,
        2,  6, 10, 14, -2,  -6, -10, -14,
        4, 12, 20, 28, -4, -12, -20, -28,
        5, 15, 25, 35, -5, -15, -25, -35
    ];
    static ADPCM3_ADJUST = [
          0, 0, 0, 8,   0, 0, 0, 8,
        248, 0, 0, 8, 248, 0, 0, 8,
        248, 0, 0, 8, 248, 0, 0, 8,
        248, 0, 0, 8, 248, 0, 0, 8,
        248, 0, 0, 0, 248, 0, 0, 0
    ];
    static ADPCM2_SCALE = [
        0,  1,  0,  -1, 1,  3,  -1,  -3,
        2,  6, -2,  -6, 4, 12,  -4, -12,
        8, 24, -8, -24, 6, 48, -16, -48
    ];
    static ADPCM2_ADJUST = [
          0, 4,   0, 4,
        252, 4, 252, 4, 252, 4, 252, 4,
        252, 4, 252, 4, 252, 4, 252, 4,
        252, 0, 252, 0
    ];

    /**
     * Table used by the DMA_IDENTIFY (0xE2) command
     */
    static E2_INCR = [
        [ 0x01, -0x02, -0x04,  0x08, -0x10,  0x20,  0x40, -0x80, -106],
        [-0x01,  0x02, -0x04,  0x08,  0x10, -0x20,  0x40, -0x80,  165],
        [-0x01,  0x02,  0x04, -0x08,  0x10, -0x20, -0x40,  0x80, -151],
        [ 0x01, -0x02,  0x04, -0x08, -0x10,  0x20, -0x40,  0x80,   90]
    ];

    static {
        /**
         * Port input notification tables (offsets from the base port, and from the AdLib port)
         */
        SoundBlaster.aPortInput = {
            0x8: SoundBlaster.prototype.inFMStatus,
            0xA: SoundBlaster.prototype.inDSPRead,
            0xC: SoundBlaster.prototype.inDSPWriteStatus,
            0xE: SoundBlaster.prototype.inDSPReadStatus
        };
        SoundBlaster.aPortInputPro = {
            0x0: SoundBlaster.prototype.inFMStatus,
            0x2: SoundBlaster.prototype.inFMStatus,
            0x5: SoundBlaster.prototype.inMixerData
        };
        SoundBlaster.aPortInputAdLib = {
            0x0: SoundBlaster.prototype.inFMStatus
        };

        /**
         * Port output notification tables
         */
        SoundBlaster.aPortOutput = {
            0x6: SoundBlaster.prototype.outDSPReset,
            0x8: SoundBlaster.prototype.outFMAddr,
            0x9: SoundBlaster.prototype.outFMData,
            0xC: SoundBlaster.prototype.outDSPWrite
        };
        SoundBlaster.aPortOutputPro = {
            0x0: SoundBlaster.prototype.outFMAddr,
            0x1: SoundBlaster.prototype.outFMData,
            0x2: SoundBlaster.prototype.outFMAddr,
            0x3: SoundBlaster.prototype.outFMData,
            0x4: SoundBlaster.prototype.outMixerAddr,
            0x5: SoundBlaster.prototype.outMixerData
        };
        SoundBlaster.aPortOutputAdLib = {
            0x0: SoundBlaster.prototype.outFMAddr,
            0x1: SoundBlaster.prototype.outFMData
        };
    }

    /**
     * SoundBlaster(parms)
     *
     * The SoundBlaster component has the following component-specific (parms) properties:
     *
     *      model: "sb1" (Sound Blaster 1.5), "sb2" (Sound Blaster 2.0, the default), or "sbpro" (Sound Blaster Pro)
     *      port: base I/O port (default is 0x220)
     *      irq: interrupt (default is 7)
     *      dma: 8-bit DMA channel (default is 1)
     *      volume: output volume, 0.0 to 1.0 (default is the machine's 'sound' setting, or 0.5)
     *
     * @this {SoundBlaster}
     * @param {Object} parms
     */
    constructor(parms)
    {
        super("SoundBlaster", parms, MESSAGE.SOUND);

        let sModel = (parms['model'] || SoundBlaster.MODEL_DEFAULT).toLowerCase();
        this.model = SoundBlaster.MODELS[sModel];
        if (!this.model) {
            Component.warning("Unrecognized SoundBlaster model: " + sModel);
            this.model = SoundBlaster.MODELS[SoundBlaster.MODEL_DEFAULT];
        }
        this.sModel = sModel;

        /**
         * NOTE: Depending on how the machine was configured (XML vs. JSON), these may arrive as numbers or strings.
         */
        this.portBase = +parms['port'] || SoundBlaster.PORT_DEFAULT;
        this.nIRQ = +parms['irq'] || SoundBlaster.IRQ_DEFAULT;
        this.nDMA = (parms['dma'] != null && parms['dma'] !== "")? +parms['dma'] : SoundBlaster.DMA_DEFAULT;
        this.volume = (parms['volume'] != null && parms['volume'] !== "")? +parms['volume'] : -1;

        this.opl = new OPL();
        this.chipset = null;
        this.contextAudio = null;

        /**
         * The time-stamped queues shared by the emulation side (port writes, DMA pulls) and the rendering side.
         */
        this.aEvents = [];              // flat array of [cycle, type, a, b] tuples
        this.aSamples = [];             // flat array of [cycle, value] pairs (DAC samples pulled via DMA)
        this.iSample = 0;               // index of the next unconsumed entry in aSamples

        this.initState();
    }

    /**
     * initBus(cmp, bus, cpu, dbg)
     *
     * @this {SoundBlaster}
     * @param {Computer} cmp
     * @param {Busx86} bus
     * @param {CPUx86} cpu
     * @param {Debuggerx86} dbg
     */
    initBus(cmp, bus, cpu, dbg)
    {
        this.cmp = cmp;
        this.bus = bus;
        this.cpu = cpu;
        this.dbg = dbg;
        this.chipset = cmp.getMachineComponent("ChipSet");

        bus.addPortInputTable(this, SoundBlaster.aPortInput, this.portBase);
        bus.addPortOutputTable(this, SoundBlaster.aPortOutput, this.portBase);
        if (this.model.mixer) {
            bus.addPortInputTable(this, SoundBlaster.aPortInputPro, this.portBase);
            bus.addPortOutputTable(this, SoundBlaster.aPortOutputPro, this.portBase);
        }
        bus.addPortInputTable(this, SoundBlaster.aPortInputAdLib, SoundBlaster.PORT_ADLIB);
        bus.addPortOutputTable(this, SoundBlaster.aPortOutputAdLib, SoundBlaster.PORT_ADLIB);

        this.nCyclesPerSecond = cpu.getBaseCyclesPerSecond();
        this.nCyclesPerFMTick = this.nCyclesPerSecond * 80 / 1000000;     // OPL timer 1 resolution (80us); timer 2 is 4x that (320us)

        /**
         * The audio renderer is driven by a periodic CPU timer; the DSP's DMA transfers are driven by another,
         * which is armed only while a transfer is in progress.
         */
        let sb = this;
        this.timerTick = cpu.addTimer(this.id + ".tick", function onTick() { sb.tick(); }, SoundBlaster.TICK_MS);
        this.timerPull = cpu.addTimer(this.id + ".pull", function onPull() { sb.pull(); });

        if (this.chipset) {
            this.contextAudio = this.chipset.contextAudio;
            if (this.volume < 0) this.volume = this.chipset.volumeInit;
        }
        if (this.volume < 0 || this.volume > 1) this.volume = 0.5;

        if (this.contextAudio) {
            this.rateOut = this.contextAudio['sampleRate'] || 44100;
            this.enableUserAudio();
        } else {
            this.rateOut = 44100;
            this.printf(MESSAGE.NONE, "note: %s audio output disabled\n", this.model.name);
        }
        this.nCyclesPerSample = this.nCyclesPerSecond / this.rateOut;
        this.stepFM = OPL.RATE / this.rateOut;

        this.printf(MESSAGE.NONE, "%s at port %#06x, IRQ %d, DMA %d\n", this.model.name, this.portBase, this.nIRQ, this.nDMA);

        this.setReady();
    }

    /**
     * enableUserAudio()
     *
     * Browsers generally refuse to start an AudioContext until the user has interacted with the page, so if the
     * context is suspended, we hook a few document-level events and resume the context on the first one we see.
     *
     * @this {SoundBlaster}
     */
    enableUserAudio()
    {
        let context = this.contextAudio;
        let doc = globals.window['document'];
        if (!context || !doc || !doc.addEventListener) return;
        if (context['state'] != "suspended") return;
        let sb = this;
        let aEvents = ['keydown', 'mousedown', 'touchstart'];
        let onUserEvent = function() {
            try {
                let promise = context['resume']();
                if (promise && promise.then) {
                    promise.then(function() {
                        sb.printf("AudioContext resumed (%s)\n", context['state']);
                    });
                }
            } catch(e) {
                sb.printf("AudioContext resume failed: %s\n", e.message);
            }
            for (let i = 0; i < aEvents.length; i++) {
                doc.removeEventListener(aEvents[i], onUserEvent, true);
            }
        };
        for (let i = 0; i < aEvents.length; i++) {
            doc.addEventListener(aEvents[i], onUserEvent, true);
        }
    }

    /**
     * powerUp(data, fRepower)
     *
     * @this {SoundBlaster}
     * @param {Object|null} data
     * @param {boolean} [fRepower]
     * @returns {boolean} true if successful, false if failure
     */
    powerUp(data, fRepower)
    {
        if (!fRepower) {
            if (!data || !this.restore) {
                this.reset();
            } else {
                if (!this.restore(data)) return false;
            }
        }
        return true;
    }

    /**
     * powerDown(fSave, fShutdown)
     *
     * @this {SoundBlaster}
     * @param {boolean} [fSave]
     * @param {boolean} [fShutdown]
     * @returns {Object|boolean} component state if fSave; otherwise, true if successful, false if failure
     */
    powerDown(fSave, fShutdown)
    {
        return fSave? this.save() : true;
    }

    /**
     * reset()
     *
     * @this {SoundBlaster}
     */
    reset()
    {
        this.initState();
        this.opl.reset();
        this.aEvents.length = 0;
        this.aSamples.length = 0;
        this.iSample = 0;
        this.resetRenderer();
    }

    /**
     * initState(data)
     *
     * @this {SoundBlaster}
     * @param {Array} [data]
     * @returns {boolean} true if successful, false if failure
     */
    initState(data)
    {
        /**
         * DSP state
         */
        this.fDSPReset = false;         // true while the reset bit is set
        this.bDSPCmd = -1;              // current command (-1 if none)
        this.cbDSPCmd = 0;              // number of data bytes the current command requires
        this.abDSPIn = [];              // data bytes received for the current command
        this.abDSPOut = [];             // bytes waiting to be read from the DSP
        this.bDSPLast = 0xAA;           // last byte read from the DSP (re-read when the output buffer is empty)
        this.bTimeConst = 0x83;         // ~8000Hz
        this.rateDSP = 8000;            // current sample (byte) rate
        this.cbBlock = 0x7FF;           // block size (minus one) set by SET_BLOCK (default is arbitrary)
        this.fSpeaker = false;          // DAC output enabled
        this.bDirect = 0x80;            // last DIRECT_DAC value
        this.fIRQ = false;              // interrupt pending
        this.bTest = 0;                 // SB16 test register
        this.bE2 = 0xAA;                // DMA_IDENTIFY state
        this.cE2 = 0;
        this.fE2Pending = false;
        this.fHighSpeed = false;        // high-speed mode (exited only by DSP reset)

        /**
         * DMA transfer state
         */
        this.mode = SoundBlaster.MODE.NONE;
        this.fAutoInit = false;
        this.fPaused = false;
        this.fExitAuto = false;         // exit auto-init mode at the end of the current block
        this.cbRemain = 0;              // bytes remaining in the current block
        this.cbTotal = 0;               // total bytes in the current block (for auto-init reloads)
        this.fRef = false;              // ADPCM: next byte is the reference byte
        this.bRef = 0x80;               // ADPCM reference (last output) value
        this.nScale = 0;                // ADPCM step scale
        this.abPending = [];            // decoded samples not yet consumed (ADPCM yields several per byte)
        this.cyclesPull = 0;            // cycle count at the last pull
        this.accPull = 0;               // fractional samples carried over between pulls
        this.abDMA = new Uint8Array(1);
        this.bLastSample = 0x80;        // last sample value delivered to the DAC

        /**
         * FM (OPL) state: address latch and the two timers (the OPL's registers live in the OPL object)
         */
        this.bFMAddr = 0;
        this.aFMTimers = [
            {preset: 0, fStarted: false, fMasked: false, fOverflow: false, cycleStart: 0, nTicks: 1},
            {preset: 0, fStarted: false, fMasked: false, fOverflow: false, cycleStart: 0, nTicks: 4}
        ];

        /**
         * Mixer state (Pro only)
         */
        this.bMixerAddr = 0;
        this.abMixer = new Uint8Array(256);
        this.resetMixer();

        if (data) {
            let i = 0;
            this.bTimeConst = data[i++];
            this.rateDSP = data[i++];
            this.cbBlock = data[i++];
            this.fSpeaker = data[i++];
            this.bDirect = data[i++];
            this.fIRQ = data[i++];
            this.bFMAddr = data[i++];
            this.bMixerAddr = data[i++];
            let abMixer = data[i++];
            if (abMixer) for (let j = 0; j < abMixer.length; j++) this.abMixer[j] = abMixer[j];
            let abRegs = data[i++];
            if (abRegs) {
                this.opl.reset();
                for (let j = 0; j < abRegs.length; j++) {
                    if (abRegs[j] || j == 1) this.opl.write(j, abRegs[j]);
                }
            }
            this.fDSPReset = data[i++] || false;
            this.bDSPLast = data[i++] || 0xAA;
        }
        return true;
    }

    /**
     * resetMixer()
     *
     * @this {SoundBlaster}
     */
    resetMixer()
    {
        this.abMixer.fill(0);
        this.abMixer[SoundBlaster.MIXER.VOICE] = 0xEE;
        this.abMixer[SoundBlaster.MIXER.MASTER] = 0xEE;
        this.abMixer[SoundBlaster.MIXER.FM] = 0xEE;
        this.abMixer[SoundBlaster.MIXER.INPUT] = 0x20;
    }

    /**
     * save()
     *
     * @this {SoundBlaster}
     * @returns {Object}
     */
    save()
    {
        let state = new State(this);
        state.set(0, [
            this.bTimeConst,
            this.rateDSP,
            this.cbBlock,
            this.fSpeaker,
            this.bDirect,
            this.fIRQ,
            this.bFMAddr,
            this.bMixerAddr,
            Array.from(this.abMixer),
            Array.from(this.opl.abRegs),
            this.fDSPReset,
            this.bDSPLast
        ]);
        return state.data();
    }

    /**
     * restore(data)
     *
     * NOTE: Any DMA transfer that was in progress is abandoned; software that relies on the resulting
     * interrupt will simply have to time out and start over.
     *
     * @this {SoundBlaster}
     * @param {Object} data
     * @returns {boolean} true if successful, false if failure
     */
    restore(data)
    {
        this.aEvents.length = 0;
        this.aSamples.length = 0;
        this.iSample = 0;
        this.resetRenderer();
        return this.initState(data[0]);
    }

    /**
     * getCycles()
     *
     * @this {SoundBlaster}
     * @returns {number}
     */
    getCycles()
    {
        return this.cpu? this.cpu.getCycles() : 0;
    }

    /**
     * addEvent(type, a, b)
     *
     * @this {SoundBlaster}
     * @param {number} type
     * @param {number} a
     * @param {number} [b]
     */
    addEvent(type, a, b = 0)
    {
        this.aEvents.push(this.getCycles(), type, a, b);
    }

    /**
     * ================================================================================================================
     * FM synthesizer ports (AdLib-compatible)
     * ================================================================================================================
     */

    /**
     * inFMStatus(port, addrFrom)
     *
     * Bit 7 is set if either timer has overflowed (and is unmasked), bit 6 for timer 1, bit 5 for timer 2;
     * the OPL2 returns 0x06 in the low bits, which is one way software distinguishes it from an OPL3.
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} [addrFrom]
     * @returns {number}
     */
    inFMStatus(port, addrFrom)
    {
        let b = 0x06;
        let cycles = this.getCycles();
        for (let i = 0; i < 2; i++) {
            let timer = this.aFMTimers[i];
            if (timer.fStarted && !timer.fMasked && !timer.fOverflow) {
                let nCycles = (256 - timer.preset) * timer.nTicks * this.nCyclesPerFMTick;
                if (cycles - timer.cycleStart >= nCycles) timer.fOverflow = true;
            }
            if (timer.fOverflow) b |= (i? 0x20 : 0x40);
        }
        if (b & 0x60) b |= 0x80;
        this.printIO(port, undefined, addrFrom, "FM.STATUS", b, true);
        return b;
    }

    /**
     * outFMAddr(port, bOut, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom]
     */
    outFMAddr(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "FM.ADDR", undefined, true);
        this.bFMAddr = bOut;
    }

    /**
     * outFMData(port, bOut, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom]
     */
    outFMData(port, bOut, addrFrom)
    {
        let reg = this.bFMAddr;
        this.printIO(port, bOut, addrFrom, "FM.REG[" + StrLib.toHexByte(reg) + "]", undefined, true);
        switch(reg) {
        case 0x02:
            this.aFMTimers[0].preset = bOut;
            break;
        case 0x03:
            this.aFMTimers[1].preset = bOut;
            break;
        case 0x04:
            if (bOut & 0x80) {
                this.aFMTimers[0].fOverflow = this.aFMTimers[1].fOverflow = false;
            } else {
                let cycles = this.getCycles();
                for (let i = 0; i < 2; i++) {
                    let timer = this.aFMTimers[i];
                    timer.fMasked = !!(bOut & (i? 0x20 : 0x40));
                    let fStart = !!(bOut & (i? 0x02 : 0x01));
                    if (fStart && !timer.fStarted) {
                        timer.cycleStart = cycles;
                    }
                    timer.fStarted = fStart;
                }
            }
            break;
        default:
            break;
        }
        /**
         * All writes (including the timer registers) are forwarded to the synthesizer, but on the renderer's
         * timeline, so that notes start and stop at the correct sample positions.
         */
        this.addEvent(SoundBlaster.EVENT.FM, reg, bOut);
        if (!this.contextAudio) this.opl.write(reg, bOut);
    }

    /**
     * ================================================================================================================
     * Mixer ports (Pro only)
     * ================================================================================================================
     */

    /**
     * outMixerAddr(port, bOut, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom]
     */
    outMixerAddr(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "MIXER.ADDR", undefined, true);
        this.bMixerAddr = bOut;
    }

    /**
     * inMixerData(port, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} [addrFrom]
     * @returns {number}
     */
    inMixerData(port, addrFrom)
    {
        let reg = this.bMixerAddr;
        let b = this.abMixer[reg];
        switch(reg) {
        case SoundBlaster.MIXER.VOICE:
        case SoundBlaster.MIXER.MASTER:
        case SoundBlaster.MIXER.FM:
        case SoundBlaster.MIXER.CD:
        case SoundBlaster.MIXER.LINE:
            b |= 0x11;                  // the low bit of each nibble always reads as 1 on the CT1345
            break;
        case SoundBlaster.MIXER.MIC:
            b &= 0x07;
            break;
        case SoundBlaster.MIXER.OUTPUT:
            b &= 0x22;
            break;
        default:
            break;
        }
        this.printIO(port, undefined, addrFrom, "MIXER.REG[" + StrLib.toHexByte(reg) + "]", b, true);
        return b;
    }

    /**
     * outMixerData(port, bOut, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom]
     */
    outMixerData(port, bOut, addrFrom)
    {
        let reg = this.bMixerAddr;
        this.printIO(port, bOut, addrFrom, "MIXER.REG[" + StrLib.toHexByte(reg) + "]", undefined, true);
        if (reg == SoundBlaster.MIXER.RESET) {
            this.resetMixer();
            return;
        }
        this.abMixer[reg] = bOut;
    }

    /**
     * getMixerGain(reg)
     *
     * Returns the gain (0.0-1.0) for one of the stereo volume registers, averaging the left and right levels.
     *
     * @this {SoundBlaster}
     * @param {number} reg
     * @returns {number}
     */
    getMixerGain(reg)
    {
        if (!this.model.mixer) return 1.0;
        let b = this.abMixer[reg];
        return (((b >> 5) & 7) + ((b >> 1) & 7)) / 14;
    }

    /**
     * ================================================================================================================
     * DSP ports
     * ================================================================================================================
     */

    /**
     * outDSPReset(port, bOut, addrFrom)
     *
     * Software resets the DSP by writing 1 to this port, waiting a few microseconds, and then writing 0;
     * the DSP then places 0xAA in its output buffer to signal that it's ready.
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom]
     */
    outDSPReset(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "DSP.RESET", undefined, true);
        if (bOut & 0x1) {
            this.fDSPReset = true;
            return;
        }
        if (this.fDSPReset) {
            this.fDSPReset = false;
            this.resetDSP();
            this.abDSPOut.push(0xAA);
            this.printf("DSP reset\n");
        }
    }

    /**
     * resetDSP()
     *
     * @this {SoundBlaster}
     */
    resetDSP()
    {
        this.stopDMA();
        this.clearIRQ();
        this.bDSPCmd = -1;
        this.cbDSPCmd = 0;
        this.abDSPIn.length = 0;
        this.abDSPOut.length = 0;
        this.fSpeaker = false;
        this.fHighSpeed = false;
        this.bDirect = 0x80;
        this.bE2 = 0xAA;
        this.cE2 = 0;
        this.fE2Pending = false;
        this.addEvent(SoundBlaster.EVENT.DAC, 0x80);
    }

    /**
     * inDSPRead(port, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} [addrFrom]
     * @returns {number}
     */
    inDSPRead(port, addrFrom)
    {
        if (this.abDSPOut.length) {
            this.bDSPLast = this.abDSPOut.shift();
        }
        this.printIO(port, undefined, addrFrom, "DSP.READ", this.bDSPLast, true);
        return this.bDSPLast;
    }

    /**
     * inDSPWriteStatus(port, addrFrom)
     *
     * Bit 7 clear means the DSP is ready to accept a command or data byte (we're always ready).
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} [addrFrom]
     * @returns {number}
     */
    inDSPWriteStatus(port, addrFrom)
    {
        let b = 0x7F;
        this.printIO(port, undefined, addrFrom, "DSP.WRITE_STATUS", b, true);
        return b;
    }

    /**
     * inDSPReadStatus(port, addrFrom)
     *
     * Bit 7 set means a byte is available from the DSP.  Reading this port also acknowledges the DSP's interrupt.
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} [addrFrom]
     * @returns {number}
     */
    inDSPReadStatus(port, addrFrom)
    {
        let b = this.abDSPOut.length? 0xFF : 0x7F;
        this.printIO(port, undefined, addrFrom, "DSP.READ_STATUS", b, true);
        this.clearIRQ();
        return b;
    }

    /**
     * outDSPWrite(port, bOut, addrFrom)
     *
     * @this {SoundBlaster}
     * @param {number} port
     * @param {number} bOut
     * @param {number} [addrFrom]
     */
    outDSPWrite(port, bOut, addrFrom)
    {
        this.printIO(port, bOut, addrFrom, "DSP.WRITE", undefined, true);
        /**
         * In high-speed mode, the DSP ignores commands until it's reset.
         */
        if (this.fHighSpeed) return;
        if (this.bDSPCmd < 0) {
            this.bDSPCmd = bOut;
            this.cbDSPCmd = SoundBlaster.CMD_LENGTH[bOut] || 0;
            if (bOut >= 0xB0 && bOut <= 0xCF) this.cbDSPCmd = 3;         // SB16 DMA commands
            if (this.cbDSPCmd) return;
        } else {
            this.abDSPIn.push(bOut);
            if (this.abDSPIn.length < this.cbDSPCmd) return;
        }
        this.doDSPCommand(this.bDSPCmd, this.abDSPIn);
        this.bDSPCmd = -1;
        this.abDSPIn.length = 0;
    }

    /**
     * doDSPCommand(bCmd, abData)
     *
     * @this {SoundBlaster}
     * @param {number} bCmd
     * @param {Array.<number>} abData
     */
    doDSPCommand(bCmd, abData)
    {
        let CMD = SoundBlaster.CMD, MODE = SoundBlaster.MODE;
        let cb = abData.length >= 2? (abData[0] | (abData[1] << 8)) + 1 : 0;

        if (this.messageEnabled()) {
            let s = "";
            for (let i = 0; i < abData.length; i++) s += " " + StrLib.toHexByte(abData[i]);
            this.printf("DSP command %#04x%s\n", bCmd, s);
        }

        switch(bCmd) {
        case CMD.DIRECT_DAC:
            this.bDirect = abData[0];
            this.addEvent(SoundBlaster.EVENT.DAC, abData[0]);
            break;

        case CMD.DMA_DAC:
        case CMD.DMA_DAC2:
            this.startDMA(MODE.PCM, cb, false);
            break;

        case CMD.DMA_ADPCM2_REF:
        case CMD.DMA_ADPCM2:
            this.startDMA(MODE.ADPCM2, cb, false, bCmd == CMD.DMA_ADPCM2_REF);
            break;

        case CMD.DMA_ADPCM3_REF:
        case CMD.DMA_ADPCM3:
            this.startDMA(MODE.ADPCM3, cb, false, bCmd == CMD.DMA_ADPCM3_REF);
            break;

        case CMD.DMA_ADPCM4_REF:
        case CMD.DMA_ADPCM4:
            this.startDMA(MODE.ADPCM4, cb, false, bCmd == CMD.DMA_ADPCM4_REF);
            break;

        case CMD.DMA_DAC_AUTO:
            this.startDMA(MODE.PCM, this.cbBlock + 1, true);
            break;

        case CMD.DMA_ADPCM2_AUTO:
            this.startDMA(MODE.ADPCM2, this.cbBlock + 1, true, true);
            break;

        case CMD.DMA_ADPCM3_AUTO:
            this.startDMA(MODE.ADPCM3, this.cbBlock + 1, true, true);
            break;

        case CMD.DMA_ADPCM4_AUTO:
            this.startDMA(MODE.ADPCM4, this.cbBlock + 1, true, true);
            break;

        case CMD.HS_DAC:
            this.fHighSpeed = true;
            this.startDMA(MODE.PCM, this.cbBlock + 1, false);
            break;

        case CMD.HS_DAC_AUTO:
            this.fHighSpeed = true;
            this.startDMA(MODE.PCM, this.cbBlock + 1, true);
            break;

        case CMD.DIRECT_ADC:
            this.abDSPOut.push(0x80);   // silence
            break;

        case CMD.DMA_ADC:
            this.startDMA(MODE.RECORD, cb, false);
            break;

        case CMD.DMA_ADC_AUTO:
            this.startDMA(MODE.RECORD, this.cbBlock + 1, true);
            break;

        case CMD.HS_ADC:
            this.fHighSpeed = true;
            this.startDMA(MODE.RECORD, this.cbBlock + 1, false);
            break;

        case CMD.HS_ADC_AUTO:
            this.fHighSpeed = true;
            this.startDMA(MODE.RECORD, this.cbBlock + 1, true);
            break;

        case CMD.SET_TIME_CONST:
            this.bTimeConst = abData[0];
            this.setRate(1000000 / (256 - abData[0]));
            break;

        case CMD.SET_RATE_OUT:
        case CMD.SET_RATE_IN:
            this.setRate((abData[0] << 8) | abData[1]);
            break;

        case CMD.SET_BLOCK:
            this.cbBlock = abData[0] | (abData[1] << 8);
            break;

        case CMD.SILENCE:
            this.startDMA(MODE.SILENCE, cb, false);
            break;

        case CMD.PAUSE_DMA8:
        case CMD.PAUSE_DMA16:
            if (this.mode != MODE.NONE) {
                this.fPaused = true;
                this.addEvent(SoundBlaster.EVENT.STOP, 0);
            }
            break;

        case CMD.CONTINUE_DMA8:
        case CMD.CONTINUE_DMA16:
        case CMD.CONTINUE_AUTO8:
        case CMD.CONTINUE_AUTO16:
            if (this.mode != MODE.NONE && this.fPaused) {
                this.fPaused = false;
                this.cyclesPull = this.getCycles();
                this.addEvent(SoundBlaster.EVENT.START, this.rateDSP);
                this.armPull();
            }
            break;

        case CMD.EXIT_AUTO8:
        case CMD.EXIT_AUTO16:
            this.fExitAuto = true;
            break;

        case CMD.SPEAKER_ON:
            this.fSpeaker = true;
            break;

        case CMD.SPEAKER_OFF:
            this.fSpeaker = false;
            break;

        case CMD.SPEAKER_STATUS:
            this.abDSPOut.push(this.fSpeaker? 0xFF : 0x00);
            break;

        case CMD.IDENTIFY:
            this.abDSPOut.push(~abData[0] & 0xFF);
            break;

        case CMD.VERSION:
            this.abDSPOut.push(this.model.version >> 8, this.model.version & 0xFF);
            break;

        case CMD.DMA_IDENTIFY:
            for (let i = 0; i < 8; i++) {
                if ((abData[0] >> i) & 0x1) this.bE2 += SoundBlaster.E2_INCR[this.cE2 & 3][i];
            }
            this.bE2 = (this.bE2 + SoundBlaster.E2_INCR[this.cE2 & 3][8]) & 0xFF;
            this.cE2++;
            this.fE2Pending = true;
            this.writeE2();
            break;

        case CMD.COPYRIGHT:
            if (this.model.version >= 0x0400) {
                let s = "COPYRIGHT (C) CREATIVE TECHNOLOGY LTD, 1992.";
                for (let i = 0; i < s.length; i++) this.abDSPOut.push(s.charCodeAt(i));
                this.abDSPOut.push(0);
            }
            break;

        case CMD.WRITE_TEST:
            this.bTest = abData[0];
            break;

        case CMD.READ_TEST:
            this.abDSPOut.push(this.bTest);
            break;

        case CMD.TRIGGER_IRQ8:
        case CMD.TRIGGER_IRQ16:
            this.raiseIRQ();
            break;

        case CMD.STATUS:
            this.abDSPOut.push(0x00);
            break;

        default:
            if (bCmd >= 0xB0 && bCmd <= 0xCF) {
                /**
                 * SB16 commands are not supported by the models we currently emulate, so like a real SB Pro, we ignore them.
                 */
                this.printf("unsupported SB16 DSP command %#04x\n", bCmd);
                break;
            }
            if (bCmd >= CMD.MIDI_POLL && bCmd <= CMD.MIDI_WRITE) {
                break;                  // MIDI is not supported; accept and ignore
            }
            this.printf("unrecognized DSP command %#04x\n", bCmd);
            break;
        }
    }

    /**
     * writeE2()
     *
     * The DMA_IDENTIFY command writes a single byte to memory via the DMA channel, which software uses to
     * confirm the card's DMA channel (eg, Creative's own drivers, and some installation programs); if the
     * channel is currently masked, we'll try again at each tick.
     *
     * @this {SoundBlaster}
     */
    writeE2()
    {
        if (!this.fE2Pending || !this.chipset) return;
        this.abDMA[0] = this.bE2;
        if (this.chipset.transferDMA(this.nDMA, this.abDMA, 1, true)) {
            this.fE2Pending = false;
            this.printf("DMA identification byte %#04x written\n", this.bE2);
        }
    }

    /**
     * setRate(rate)
     *
     * @this {SoundBlaster}
     * @param {number} rate
     */
    setRate(rate)
    {
        if (rate < 4000) rate = 4000;
        if (rate > 48000) rate = 48000;
        this.rateDSP = rate;
        if (this.mode != SoundBlaster.MODE.NONE && !this.fPaused) {
            this.addEvent(SoundBlaster.EVENT.START, this.rateDSP);
        }
    }

    /**
     * raiseIRQ()
     *
     * @this {SoundBlaster}
     */
    raiseIRQ()
    {
        this.fIRQ = true;
        if (this.chipset) this.chipset.setIRR(this.nIRQ);
        this.printf("IRQ %d raised\n", this.nIRQ);
    }

    /**
     * clearIRQ()
     *
     * @this {SoundBlaster}
     */
    clearIRQ()
    {
        if (this.fIRQ) {
            this.fIRQ = false;
            if (this.chipset) this.chipset.clearIRR(this.nIRQ);
        }
    }

    /**
     * ================================================================================================================
     * DMA transfers
     * ================================================================================================================
     */

    /**
     * startDMA(mode, cb, fAutoInit, fRef)
     *
     * @this {SoundBlaster}
     * @param {number} mode
     * @param {number} cb (number of bytes in the block)
     * @param {boolean} fAutoInit
     * @param {boolean} [fRef] (true if the first byte is an ADPCM reference byte)
     */
    startDMA(mode, cb, fAutoInit, fRef = false)
    {
        this.mode = mode;
        this.fAutoInit = fAutoInit;
        this.fPaused = false;
        this.fExitAuto = false;
        this.cbRemain = this.cbTotal = cb;
        this.fRef = fRef;
        this.nScale = 0;
        this.abPending.length = 0;
        this.cyclesPull = this.getCycles();
        this.accPull = 0;
        this.printf("DMA %s started: %d bytes at %dHz%s\n", mode == SoundBlaster.MODE.RECORD? "input" : "output", cb, this.rateDSP, fAutoInit? " (auto-init)" : "");
        if (mode != SoundBlaster.MODE.SILENCE && mode != SoundBlaster.MODE.RECORD) {
            this.addEvent(SoundBlaster.EVENT.START, this.rateDSP);
        }
        this.armPull();
    }

    /**
     * stopDMA()
     *
     * @this {SoundBlaster}
     */
    stopDMA()
    {
        if (this.mode != SoundBlaster.MODE.NONE) {
            this.mode = SoundBlaster.MODE.NONE;
            this.fPaused = false;
            this.abPending.length = 0;
            this.addEvent(SoundBlaster.EVENT.STOP, 0);
            if (this.cpu) this.cpu.clearTimer(this.timerPull);
        }
    }

    /**
     * armPull()
     *
     * Arms the pull timer to fire when the next batch of samples is due: roughly every millisecond, or at the
     * end of the current block, whichever comes first (so that the end-of-block interrupt is delivered on time).
     *
     * @this {SoundBlaster}
     */
    armPull()
    {
        if (this.mode == SoundBlaster.MODE.NONE || this.fPaused || !this.cpu) return;
        let cyclesPerSample = this.nCyclesPerSecond / this.rateDSP;
        let nSamples = Math.ceil(this.rateDSP / 1000);
        let nRemain = this.getSamplesRemaining();
        if (nSamples > nRemain) nSamples = nRemain;
        if (nSamples < 1) nSamples = 1;
        let nCycles = Math.ceil((nSamples - this.accPull) * cyclesPerSample);
        if (nCycles < 1) nCycles = 1;
        this.cpu.setTimer(this.timerPull, -nCycles, true);
    }

    /**
     * getSamplesRemaining()
     *
     * @this {SoundBlaster}
     * @returns {number} number of samples remaining in the current block (including any decoded but unconsumed samples)
     */
    getSamplesRemaining()
    {
        let n = this.abPending.length;
        switch(this.mode) {
        case SoundBlaster.MODE.ADPCM2:
            n += this.cbRemain * 4;
            break;
        case SoundBlaster.MODE.ADPCM3:
            n += this.cbRemain * 3;
            break;
        case SoundBlaster.MODE.ADPCM4:
            n += this.cbRemain * 2;
            break;
        default:
            n += this.cbRemain;
            break;
        }
        return n;
    }

    /**
     * pull()
     *
     * Called by the pull timer: determines how many samples are due since the last pull, and then transfers
     * (and decodes) that many, time-stamping each for the renderer and signaling an interrupt at the end of
     * each block.
     *
     * @this {SoundBlaster}
     */
    pull()
    {
        let MODE = SoundBlaster.MODE;
        if (this.mode == MODE.NONE || this.fPaused) return;

        let cycles = this.getCycles();
        let cyclesPerSample = this.nCyclesPerSecond / this.rateDSP;
        let nCycles = cycles - this.cyclesPull;
        if (nCycles < 0 || nCycles > this.nCyclesPerSecond) nCycles = 0;      // the cycle counter was reset; just carry on
        this.cyclesPull = cycles;

        this.accPull += nCycles / cyclesPerSample;
        let nSamples = this.accPull | 0;
        this.accPull -= nSamples;

        /**
         * Sample k of this batch (0 <= k < nSamples) occurred (nSamples - k - 1 + accPull) samples before "now".
         */
        let cycleSample = cycles - (nSamples - 1 + this.accPull) * cyclesPerSample;

        for (let k = 0; k < nSamples && this.mode != MODE.NONE; k++, cycleSample += cyclesPerSample) {
            let fDone = false;
            switch(this.mode) {
            case MODE.SILENCE:
                this.aSamples.push(cycleSample, 0x80);
                fDone = (--this.cbRemain <= 0);
                break;

            case MODE.RECORD:
                this.abDMA[0] = 0x80;
                if (!this.chipset.transferDMA(this.nDMA, this.abDMA, 1, true)) {
                    k = nSamples;       // the DMA channel is masked (or finished); wait for the next pull
                    break;
                }
                fDone = (--this.cbRemain <= 0);
                break;

            default:
                if (!this.abPending.length) {
                    if (!this.chipset.transferDMA(this.nDMA, this.abDMA, 1, false)) {
                        k = nSamples;   // the DMA channel is masked (or finished); wait for the next pull
                        break;
                    }
                    this.decodeByte(this.abDMA[0]);
                    fDone = (--this.cbRemain <= 0);
                }
                if (this.abPending.length) {
                    this.bLastSample = this.abPending.shift();
                    this.aSamples.push(cycleSample, this.bLastSample);
                }
                break;
            }
            if (fDone) {
                /**
                 * End of block: signal an interrupt, and then either reload (auto-init) or stop.
                 */
                this.raiseIRQ();
                if (this.fAutoInit && !this.fExitAuto) {
                    this.cbRemain = this.cbTotal;
                } else {
                    this.mode = MODE.NONE;
                    this.abPending.length = 0;
                    this.printf("DMA block done\n");
                    this.addEvent(SoundBlaster.EVENT.STOP, 0);
                }
            }
        }
        if (this.mode != MODE.NONE) this.armPull();
    }

    /**
     * decodeByte(b)
     *
     * Converts one byte from the DMA stream into one or more 8-bit unsigned samples (appended to abPending).
     *
     * @this {SoundBlaster}
     * @param {number} b
     */
    decodeByte(b)
    {
        let MODE = SoundBlaster.MODE;
        if (this.mode == MODE.PCM) {
            this.abPending.push(b);
            return;
        }
        if (this.fRef) {
            this.fRef = false;
            this.bRef = b;
            this.nScale = 0;
            this.abPending.push(b);
            return;
        }
        switch(this.mode) {
        case MODE.ADPCM4:
            this.abPending.push(this.decodeADPCM(b >> 4, SoundBlaster.ADPCM4_SCALE, SoundBlaster.ADPCM4_ADJUST, 63));
            this.abPending.push(this.decodeADPCM(b & 0xF, SoundBlaster.ADPCM4_SCALE, SoundBlaster.ADPCM4_ADJUST, 63));
            break;
        case MODE.ADPCM3:
            this.abPending.push(this.decodeADPCM((b >> 5) & 0x7, SoundBlaster.ADPCM3_SCALE, SoundBlaster.ADPCM3_ADJUST, 39));
            this.abPending.push(this.decodeADPCM((b >> 2) & 0x7, SoundBlaster.ADPCM3_SCALE, SoundBlaster.ADPCM3_ADJUST, 39));
            this.abPending.push(this.decodeADPCM((b & 0x3) << 1, SoundBlaster.ADPCM3_SCALE, SoundBlaster.ADPCM3_ADJUST, 39));
            break;
        case MODE.ADPCM2:
            this.abPending.push(this.decodeADPCM((b >> 6) & 0x3, SoundBlaster.ADPCM2_SCALE, SoundBlaster.ADPCM2_ADJUST, 23));
            this.abPending.push(this.decodeADPCM((b >> 4) & 0x3, SoundBlaster.ADPCM2_SCALE, SoundBlaster.ADPCM2_ADJUST, 23));
            this.abPending.push(this.decodeADPCM((b >> 2) & 0x3, SoundBlaster.ADPCM2_SCALE, SoundBlaster.ADPCM2_ADJUST, 23));
            this.abPending.push(this.decodeADPCM(b & 0x3, SoundBlaster.ADPCM2_SCALE, SoundBlaster.ADPCM2_ADJUST, 23));
            break;
        default:
            this.abPending.push(b);
            break;
        }
    }

    /**
     * decodeADPCM(sample, aScale, aAdjust, max)
     *
     * @this {SoundBlaster}
     * @param {number} sample
     * @param {Array.<number>} aScale
     * @param {Array.<number>} aAdjust
     * @param {number} max
     * @returns {number}
     */
    decodeADPCM(sample, aScale, aAdjust, max)
    {
        let i = sample + this.nScale;
        if (i < 0) i = 0; else if (i > max) i = max;
        let ref = this.bRef + aScale[i];
        this.bRef = ref < 0? 0 : (ref > 255? 255 : ref);
        this.nScale = (this.nScale + aAdjust[i]) & 0xFF;
        return this.bRef;
    }

    /**
     * ================================================================================================================
     * Audio rendering
     * ================================================================================================================
     */

    /**
     * resetRenderer()
     *
     * @this {SoundBlaster}
     */
    resetRenderer()
    {
        this.cyclesTick = this.getCycles();
        this.accSamples = 0;            // fractional output samples carried over between ticks
        this.timeNext = 0;              // AudioContext time at which the next buffer should start
        this.accFM = 0;                 // fractional OPL samples
        this.fmPrev = this.fmCur = 0;   // last two OPL samples (for interpolation)
        this.dacRate = 0;               // DAC sample rate while DMA playback is active (0 if not)
        this.dacPrev = this.dacCur = 0; // last two DAC samples (for interpolation)
        this.accDAC = 0;                // DAC interpolation position
        this.dacDirect = 0;             // direct DAC output level
        this.nSilent = 0;               // number of consecutive silent samples rendered
        this.sampleLast = 0;            // last sample rendered (for silence detection)
        this.fPlaying = false;          // true if we're currently queuing buffers
    }

    /**
     * tick()
     *
     * Called by the tick timer every TICK_MS of emulated time: renders all the audio for the elapsed interval
     * and queues it to the AudioContext.
     *
     * @this {SoundBlaster}
     */
    tick()
    {
        let cycles = this.getCycles();
        let nCycles = cycles - this.cyclesTick;
        let nCyclesTick = this.nCyclesPerSecond * SoundBlaster.TICK_MS / 1000;
        if (nCycles < 0 || nCycles > nCyclesTick * 10) nCycles = nCyclesTick;
        this.cyclesTick = cycles;

        this.writeE2();

        if (!this.contextAudio) {
            /**
             * No audio output, so just drain the queues (the FM writes were already applied directly).
             */
            this.aEvents.length = 0;
            this.aSamples.length = 0;
            this.iSample = 0;
            return;
        }

        this.accSamples += nCycles / this.nCyclesPerSample;
        let nSamples = this.accSamples | 0;
        this.accSamples -= nSamples;

        let cycleBase = cycles - nCycles;
        let fActive = this.opl.cActive > 0 || this.dacRate > 0 || this.aEvents.length > 0 || this.aSamples.length > this.iSample;

        if (!fActive && this.nSilent > this.rateOut) {
            /**
             * Nothing has happened for over a second, so there's nothing to render; this keeps idle machines cheap.
             */
            this.fPlaying = false;
            this.accSamples = 0;
            return;
        }

        if (nSamples <= 0) return;

        let context = this.contextAudio;
        let buffer;
        try {
            buffer = context['createBuffer'](1, nSamples, this.rateOut);
        } catch(e) {
            this.printf(MESSAGE.NOTICE, "AudioContext exception: %s\n", e.message);
            this.contextAudio = null;
            return;
        }
        let data = buffer['getChannelData'](0);
        let fSound = this.render(data, nSamples, cycleBase);

        if (!fSound) {
            this.nSilent += nSamples;
        } else {
            this.nSilent = 0;
        }

        /**
         * Queue the buffer, re-synchronizing with the audio clock as needed.
         */
        let timeNow = context['currentTime'];
        if (!this.fPlaying || this.timeNext < timeNow) {
            if (this.fPlaying && DEBUG) this.printf("audio underrun (%.3fs behind)\n", timeNow - this.timeNext);
            this.timeNext = timeNow + SoundBlaster.LATENCY_SEC;
            this.fPlaying = true;
        }
        if (this.timeNext > timeNow + SoundBlaster.MAX_AHEAD_SEC) {
            /**
             * The emulator is running ahead of real time, so drop this buffer rather than let the queue grow without bound.
             */
            if (DEBUG) this.printf("audio overrun (%.3fs ahead), dropping %d samples\n", this.timeNext - timeNow, nSamples);
            return;
        }
        if (fSound || this.nSilent < this.rateOut) {
            try {
                let source = context['createBufferSource']();
                source['buffer'] = buffer;
                source['connect'](context['destination']);
                source['start'](this.timeNext);
            } catch(e) {
                this.printf(MESSAGE.NOTICE, "AudioContext exception: %s\n", e.message);
                this.contextAudio = null;
                return;
            }
        }
        this.timeNext += nSamples / this.rateOut;
    }

    /**
     * render(data, nSamples, cycleBase)
     *
     * Renders nSamples of output into data, applying queued FM writes and DAC samples at the appropriate positions.
     *
     * @this {SoundBlaster}
     * @param {Float32Array} data
     * @param {number} nSamples
     * @param {number} cycleBase (cycle count corresponding to the first sample)
     * @returns {boolean} true if any non-silent output was produced
     */
    render(data, nSamples, cycleBase)
    {
        let EVENT = SoundBlaster.EVENT;
        let opl = this.opl;
        let aEvents = this.aEvents, nEvents = aEvents.length, iEvent = 0;
        let aSamples = this.aSamples, nQueued = aSamples.length, iSample = this.iSample;
        let volume = this.volume;
        let gainFM = volume * this.getMixerGain(SoundBlaster.MIXER.FM) * this.getMixerGain(SoundBlaster.MIXER.MASTER);
        let gainDAC = volume * this.getMixerGain(SoundBlaster.MIXER.VOICE) * this.getMixerGain(SoundBlaster.MIXER.MASTER);
        if (!this.fSpeaker) gainDAC = 0;
        let fSound = false;
        let cycleSample = cycleBase;

        for (let i = 0; i < nSamples; i++, cycleSample += this.nCyclesPerSample) {
            /**
             * Apply any events that occurred at or before this sample's time.
             */
            while (iEvent < nEvents && aEvents[iEvent] <= cycleSample) {
                this.applyEvent(aEvents[iEvent+1], aEvents[iEvent+2], aEvents[iEvent+3]);
                iEvent += 4;
            }
            /**
             * FM: run the synthesizer at its native rate and interpolate to the output rate.
             */
            this.accFM += this.stepFM;
            while (this.accFM >= 1) {
                this.accFM -= 1;
                this.fmPrev = this.fmCur;
                this.fmCur = opl.generate();
            }
            let sample = (this.fmPrev + (this.fmCur - this.fmPrev) * this.accFM) * (gainFM * SoundBlaster.FM_SCALE);
            /**
             * DAC: consume any queued DMA samples that are due, interpolating between consecutive samples;
             * when no DMA transfer is active, the DAC outputs the last directly-written value.
             */
            let dac;
            if (this.dacRate) {
                while (iSample < nQueued && aSamples[iSample] <= cycleSample) {
                    this.dacPrev = this.dacCur;
                    this.dacCur = (aSamples[iSample+1] - 128) / 128;
                    this.accDAC = 0;
                    iSample += 2;
                }
                this.accDAC += this.dacRate / this.rateOut;
                dac = (this.accDAC >= 1)? this.dacCur : this.dacPrev + (this.dacCur - this.dacPrev) * this.accDAC;
            } else {
                dac = this.dacDirect;
            }
            sample += dac * gainDAC;
            if (sample > 1) sample = 1; else if (sample < -1) sample = -1;
            data[i] = sample;
            /**
             * A constant (DC) output isn't audible, so we only consider the output "sound" if it's changing.
             */
            let delta = sample - this.sampleLast;
            if (delta > 0.0005 || delta < -0.0005) fSound = true;
            this.sampleLast = sample;
        }

        /**
         * Apply any remaining events (they should be few, and only slightly in the future due to rounding).
         */
        while (iEvent < nEvents) {
            this.applyEvent(aEvents[iEvent+1], aEvents[iEvent+2], aEvents[iEvent+3]);
            iEvent += 4;
        }
        aEvents.length = 0;

        /**
         * Compact the sample queue, discarding what we consumed (and anything stale, if we're not playing).
         */
        if (iSample >= nQueued || !this.dacRate) {
            aSamples.length = 0;
            iSample = 0;
        } else if (iSample > 4096) {
            aSamples.splice(0, iSample);
            iSample = 0;
        }
        this.iSample = iSample;
        return fSound;
    }

    /**
     * applyEvent(type, a, b)
     *
     * @this {SoundBlaster}
     * @param {number} type
     * @param {number} a
     * @param {number} b
     */
    applyEvent(type, a, b)
    {
        let EVENT = SoundBlaster.EVENT;
        switch(type) {
        case EVENT.FM:
            this.opl.write(a, b);
            break;
        case EVENT.DAC:
            this.dacDirect = (a - 128) / 128;
            break;
        case EVENT.START:
            if (!this.dacRate) {
                this.dacPrev = this.dacCur = this.dacDirect;
                this.accDAC = 1;
            }
            this.dacRate = a;
            break;
        case EVENT.STOP:
            this.dacRate = 0;
            this.dacDirect = this.dacCur;
            break;
        default:
            break;
        }
    }

    /**
     * SoundBlaster.init()
     *
     * This function operates on every HTML element of class "soundblaster", extracting the
     * JSON-encoded parameters for the SoundBlaster constructor from the element's "data-value"
     * attribute, invoking the constructor to create a SoundBlaster component, and then binding
     * any associated HTML controls to the new component.
     */
    static init()
    {
        let aeSound = Component.getElementsByClass(APPCLASS, "soundblaster");
        for (let iSound = 0; iSound < aeSound.length; iSound++) {
            let eSound = aeSound[iSound];
            let parms = Component.getComponentParms(eSound);
            let sound = new SoundBlaster(parms);
            Component.bindComponentControls(sound, eSound, APPCLASS);
        }
    }
}

/**
 * Initialize every SoundBlaster module on the page.
 */
WebLib.onInit(SoundBlaster.init);
