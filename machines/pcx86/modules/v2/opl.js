/**
 * @fileoverview Implements a Yamaha YM3812 (OPL2) FM synthesizer
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * This is a cycle-level model of the YM3812 (OPL2), the FM synthesis chip used on the AdLib Music
 * Synthesizer Card and on all Sound Blaster cards through the Sound Blaster 2.0 (the Sound Blaster Pro
 * and later used a pair of OPL2 chips or a single OPL3, which is a superset of this design).
 *
 * The implementation follows the register-level behavior of the chip as documented by the OPL3
 * reverse-engineering efforts (ie, the log-sine and exponent ROM tables, the 9-bit envelope generator
 * with its shared rate counter, the 19-bit phase accumulators, the LFO-driven tremolo and vibrato,
 * and the rhythm-mode noise and phase substitutions), as popularized by the Nuked OPL3 project.
 *
 * The chip is clocked at 3.579545 MHz and produces one output sample every 72 clocks, for a sample
 * rate of 49716 Hz; generate() returns one such sample (a signed 16-bit value) every call.
 *
 * This class knows nothing about I/O ports, timers, or the host's audio system; see the SoundBlaster
 * component for all of that.
 *
 * @class OPL
 * @unrestricted (allows the class to define properties, both dot and named, outside of the constructor)
 */
export default class OPL {

    static RATE = 49716;            // 3579545 / 72

    static CLOCK = 3579545;

    /**
     * Envelope generator states
     */
    static EG = {
        ATTACK:     0,
        DECAY:      1,
        SUSTAIN:    2,
        RELEASE:    3
    };

    /**
     * Key-on sources (a slot is "on" if any source is active)
     */
    static KEY = {
        NORMAL:     0x01,
        RHYTHM:     0x02
    };

    /**
     * Frequency multiplier table (values are multipliers times 2)
     */
    static MULT = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 20, 24, 24, 30, 30];

    /**
     * Key-scale level table, indexed by the top 4 bits of F-Number
     */
    static KSL = [0, 32, 40, 45, 48, 51, 53, 55, 56, 58, 59, 60, 61, 62, 63, 64];

    /**
     * Key-scale level attenuation shifts (KSL register bits: 0 = off, 1 = 3dB/oct, 2 = 1.5dB/oct, 3 = 6dB/oct)
     */
    static KSL_SHIFT = [8, 1, 2, 0];

    /**
     * Envelope rate increment patterns, indexed by the low 2 bits of the rate and the low 2 bits of the sample counter
     */
    static EG_INCSTEP = [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 1, 0],
        [1, 1, 1, 0]
    ];

    /**
     * Maps the low 5 bits of an operator register address (0x20-0x35, 0x40-0x55, etc) to a slot number (0-17), or -1
     */
    static SLOT_MAP = [0, 1, 2, 3, 4, 5, -1, -1, 6, 7, 8, 9, 10, 11, -1, -1, 12, 13, 14, 15, 16, 17, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

    /**
     * Static tables that model the chip's log-sine and exponent ROMs.
     */
    static logsin = new Uint16Array(256);
    static exp = new Uint16Array(256);

    static {
        for (let i = 0; i < 256; i++) {
            OPL.logsin[i] = Math.round(-Math.log2(Math.sin((i + 0.5) * Math.PI / 512)) * 256);
            OPL.exp[i] = Math.round((Math.pow(2, (255 - i) / 256) - 1) * 1024) + 1024;
        }
    }

    /**
     * OPL()
     *
     * @this {OPL}
     */
    constructor()
    {
        /**
         * The 256-byte register file is retained for save/restore (and for curious debuggers); all
         * register writes are also decoded into the slot and channel structures below.
         */
        this.abRegs = new Uint8Array(256);

        this.aSlots = [];
        this.aChannels = [];

        for (let i = 0; i < 18; i++) {
            this.aSlots.push({
                iSlot: i,
                channel: null,
                regAM: 0, regVIB: 0, regEGT: 0, regKSR: 0, regMULT: 0,
                regKSL: 0, regTL: 0, regAR: 0, regDR: 0, regSL: 0, regRR: 0, regWF: 0,
                egGen: OPL.EG.RELEASE, egRout: 0x1ff, egOut: 0x1ff, egKSL: 0, key: 0,
                pgPhase: 0, pgPhaseOut: 0, pgReset: 0,
                out: 0, prout: 0, fbmod: 0
            });
        }

        for (let i = 0; i < 9; i++) {
            let iMod = ((i / 3) | 0) * 6 + (i % 3);
            let channel = {
                iChannel: i,
                slotMod: this.aSlots[iMod],
                slotCar: this.aSlots[iMod + 3],
                fnum: 0, block: 0, ksv: 0, fb: 0, alg: 0
            };
            this.aSlots[iMod].channel = channel;
            this.aSlots[iMod + 3].channel = channel;
            this.aChannels.push(channel);
        }

        this.reset();
    }

    /**
     * reset()
     *
     * @this {OPL}
     */
    reset()
    {
        this.abRegs.fill(0);

        for (let i = 0; i < 18; i++) {
            let slot = this.aSlots[i];
            slot.regAM = slot.regVIB = slot.regEGT = slot.regKSR = slot.regMULT = 0;
            slot.regKSL = slot.regTL = slot.regAR = slot.regDR = slot.regSL = slot.regRR = slot.regWF = 0;
            slot.egGen = OPL.EG.RELEASE;
            slot.egRout = slot.egOut = 0x1ff;
            slot.egKSL = 0;
            slot.key = 0;
            slot.pgPhase = slot.pgPhaseOut = slot.pgReset = 0;
            slot.out = slot.prout = slot.fbmod = 0;
        }

        for (let i = 0; i < 9; i++) {
            let channel = this.aChannels[i];
            channel.fnum = channel.block = channel.ksv = channel.fb = channel.alg = 0;
        }

        this.timer = 0;                 // sample counter (low bits drive the LFOs and the envelope rate selector)
        this.egTimer = 0;               // envelope generator rate counter (incremented every other sample)
        this.egTimerRem = 0;
        this.egState = 0;
        this.egAdd = 0;
        this.tremoloPos = 0;
        this.tremolo = 0;
        this.tremoloShift = 4;          // 1dB tremolo depth by default (2 for 4.8dB)
        this.vibPos = 0;
        this.vibShift = 1;              // 7 cent vibrato depth by default (0 for 14 cent)
        this.noise = 1;                 // 23-bit LFSR used by the rhythm section
        this.nts = 0;                   // note select (register 0x08, bit 6)
        this.rhythm = 0;                // register 0xBD, low 6 bits
        this.wfMask = 0;                // waveform select enable (register 0x01, bit 5): 3 when enabled, 0 when not
        this.rmHHBit2 = this.rmHHBit3 = this.rmHHBit7 = this.rmHHBit8 = 0;
        this.rmTCBit3 = this.rmTCBit5 = 0;
        this.cActive = 0;               // number of slots producing (non-trivial) output during the last generate()
    }

    /**
     * write(reg, val)
     *
     * @this {OPL}
     * @param {number} reg (0x00-0xFF)
     * @param {number} val (0x00-0xFF)
     */
    write(reg, val)
    {
        reg &= 0xff;
        val &= 0xff;
        this.abRegs[reg] = val;

        let slot, channel, i;
        switch(reg & 0xf0) {
        case 0x00:
            if (reg == 0x01) {
                this.wfMask = (val & 0x20)? 3 : 0;
            }
            else if (reg == 0x08) {
                this.nts = (val >> 6) & 1;
                for (i = 0; i < 9; i++) this.updateKSV(this.aChannels[i]);
            }
            break;

        case 0x20:
        case 0x30:
            i = OPL.SLOT_MAP[reg & 0x1f];
            if (i >= 0) {
                slot = this.aSlots[i];
                slot.regAM = (val >> 7) & 1;
                slot.regVIB = (val >> 6) & 1;
                slot.regEGT = (val >> 5) & 1;
                slot.regKSR = (val >> 4) & 1;
                slot.regMULT = val & 0xf;
            }
            break;

        case 0x40:
        case 0x50:
            i = OPL.SLOT_MAP[reg & 0x1f];
            if (i >= 0) {
                slot = this.aSlots[i];
                slot.regKSL = (val >> 6) & 3;
                slot.regTL = val & 0x3f;
            }
            break;

        case 0x60:
        case 0x70:
            i = OPL.SLOT_MAP[reg & 0x1f];
            if (i >= 0) {
                slot = this.aSlots[i];
                slot.regAR = (val >> 4) & 0xf;
                slot.regDR = val & 0xf;
            }
            break;

        case 0x80:
        case 0x90:
            i = OPL.SLOT_MAP[reg & 0x1f];
            if (i >= 0) {
                slot = this.aSlots[i];
                slot.regSL = (val >> 4) & 0xf;
                if (slot.regSL == 0xf) slot.regSL = 0x1f;
                slot.regRR = val & 0xf;
            }
            break;

        case 0xa0:
            i = reg & 0xf;
            if (i < 9) {
                channel = this.aChannels[i];
                channel.fnum = (channel.fnum & 0x300) | val;
                this.updateKSV(channel);
                this.updateKSL(channel);
            }
            break;

        case 0xb0:
            if (reg == 0xbd) {
                this.tremoloShift = (val & 0x80)? 2 : 4;
                this.vibShift = (val & 0x40)? 0 : 1;
                this.updateRhythm(val & 0x3f);
                break;
            }
            i = reg & 0xf;
            if (i < 9) {
                channel = this.aChannels[i];
                channel.fnum = (channel.fnum & 0xff) | ((val & 3) << 8);
                channel.block = (val >> 2) & 7;
                this.updateKSV(channel);
                this.updateKSL(channel);
                if (val & 0x20) {
                    this.keyOn(channel.slotMod, OPL.KEY.NORMAL);
                    this.keyOn(channel.slotCar, OPL.KEY.NORMAL);
                } else {
                    this.keyOff(channel.slotMod, OPL.KEY.NORMAL);
                    this.keyOff(channel.slotCar, OPL.KEY.NORMAL);
                }
            }
            break;

        case 0xc0:
            i = reg & 0xf;
            if (i < 9) {
                channel = this.aChannels[i];
                channel.fb = (val >> 1) & 7;
                channel.alg = val & 1;
            }
            break;

        case 0xe0:
        case 0xf0:
            i = OPL.SLOT_MAP[reg & 0x1f];
            if (i >= 0) {
                this.aSlots[i].regWF = val & 3;
            }
            break;

        default:
            break;
        }
    }

    /**
     * updateKSV(channel)
     *
     * @this {OPL}
     * @param {Object} channel
     */
    updateKSV(channel)
    {
        channel.ksv = (channel.block << 1) | ((channel.fnum >> (9 - this.nts)) & 1);
    }

    /**
     * updateKSL(channel)
     *
     * @this {OPL}
     * @param {Object} channel
     */
    updateKSL(channel)
    {
        let ksl = (OPL.KSL[channel.fnum >> 6] << 2) - ((8 - channel.block) << 5);
        if (ksl < 0) ksl = 0;
        channel.slotMod.egKSL = ksl;
        channel.slotCar.egKSL = ksl;
    }

    /**
     * updateRhythm(rhythm)
     *
     * @this {OPL}
     * @param {number} rhythm (low 6 bits of register 0xBD)
     */
    updateRhythm(rhythm)
    {
        this.rhythm = rhythm;
        let ch6 = this.aChannels[6], ch7 = this.aChannels[7], ch8 = this.aChannels[8];
        if (rhythm & 0x20) {
            if (rhythm & 0x01) this.keyOn(ch7.slotMod, OPL.KEY.RHYTHM); else this.keyOff(ch7.slotMod, OPL.KEY.RHYTHM);   // hi-hat
            if (rhythm & 0x02) this.keyOn(ch8.slotCar, OPL.KEY.RHYTHM); else this.keyOff(ch8.slotCar, OPL.KEY.RHYTHM);   // top cymbal
            if (rhythm & 0x04) this.keyOn(ch8.slotMod, OPL.KEY.RHYTHM); else this.keyOff(ch8.slotMod, OPL.KEY.RHYTHM);   // tom-tom
            if (rhythm & 0x08) this.keyOn(ch7.slotCar, OPL.KEY.RHYTHM); else this.keyOff(ch7.slotCar, OPL.KEY.RHYTHM);   // snare drum
            if (rhythm & 0x10) {                                                                                            // bass drum
                this.keyOn(ch6.slotMod, OPL.KEY.RHYTHM);
                this.keyOn(ch6.slotCar, OPL.KEY.RHYTHM);
            } else {
                this.keyOff(ch6.slotMod, OPL.KEY.RHYTHM);
                this.keyOff(ch6.slotCar, OPL.KEY.RHYTHM);
            }
        } else {
            for (let i = 6; i < 9; i++) {
                this.keyOff(this.aChannels[i].slotMod, OPL.KEY.RHYTHM);
                this.keyOff(this.aChannels[i].slotCar, OPL.KEY.RHYTHM);
            }
        }
    }

    /**
     * keyOn(slot, type)
     *
     * @this {OPL}
     * @param {Object} slot
     * @param {number} type
     */
    keyOn(slot, type)
    {
        slot.key |= type;
    }

    /**
     * keyOff(slot, type)
     *
     * @this {OPL}
     * @param {Object} slot
     * @param {number} type
     */
    keyOff(slot, type)
    {
        slot.key &= ~type;
    }

    /**
     * calcExp(level)
     *
     * Converts a logarithmic attenuation level to a linear 13-bit output level.
     *
     * @this {OPL}
     * @param {number} level
     * @returns {number}
     */
    calcExp(level)
    {
        if (level > 0x1fff) level = 0x1fff;
        return (OPL.exp[level & 0xff] << 1) >> (level >> 8);
    }

    /**
     * calcSin(wf, phase, envelope)
     *
     * Computes one operator output, given a waveform, a 10-bit phase, and an envelope attenuation.
     *
     * @this {OPL}
     * @param {number} wf (0-3)
     * @param {number} phase
     * @param {number} envelope
     * @returns {number}
     */
    calcSin(wf, phase, envelope)
    {
        let out, neg = 0;
        let logsin = OPL.logsin;
        phase &= 0x3ff;
        switch(wf) {
        default:
        case 0:                         // sine
            if (phase & 0x200) neg = -1;
            out = (phase & 0x100)? logsin[(phase & 0xff) ^ 0xff] : logsin[phase & 0xff];
            break;
        case 1:                         // half sine (negative half-cycle is silenced)
            if (phase & 0x200) {
                out = 0x1000;
            } else {
                out = (phase & 0x100)? logsin[(phase & 0xff) ^ 0xff] : logsin[phase & 0xff];
            }
            break;
        case 2:                         // absolute sine
            out = (phase & 0x100)? logsin[(phase & 0xff) ^ 0xff] : logsin[phase & 0xff];
            break;
        case 3:                         // pulse sine (quarter-cycle bursts)
            out = (phase & 0x100)? 0x1000 : logsin[phase & 0xff];
            break;
        }
        return this.calcExp(out + (envelope << 3)) ^ neg;
    }

    /**
     * calcEnvelope(slot)
     *
     * @this {OPL}
     * @param {Object} slot
     */
    calcEnvelope(slot)
    {
        let EG = OPL.EG;
        let regRate = 0;
        let reset = 0;

        slot.egOut = slot.egRout + (slot.regTL << 2) + (slot.egKSL >> OPL.KSL_SHIFT[slot.regKSL]) + (slot.regAM? this.tremolo : 0);

        if (slot.key && slot.egGen == EG.RELEASE) {
            reset = 1;
            regRate = slot.regAR;
        } else {
            switch(slot.egGen) {
            case EG.ATTACK:
                regRate = slot.regAR;
                break;
            case EG.DECAY:
                regRate = slot.regDR;
                break;
            case EG.SUSTAIN:
                if (!slot.regEGT) regRate = slot.regRR;
                break;
            case EG.RELEASE:
                regRate = slot.regRR;
                break;
            }
        }
        slot.pgReset = reset;

        let ks = slot.channel.ksv >> ((slot.regKSR ^ 1) << 1);
        let nonzero = (regRate != 0);
        let rate = ks + (regRate << 2);
        let rateHi = rate >> 2;
        let rateLo = rate & 0x03;
        if (rateHi & 0x10) rateHi = 0x0f;
        let egShift = rateHi + this.egAdd;
        let shift = 0;
        if (nonzero) {
            if (rateHi < 12) {
                if (this.egState) {
                    switch(egShift) {
                    case 12:
                        shift = 1;
                        break;
                    case 13:
                        shift = (rateLo >> 1) & 0x01;
                        break;
                    case 14:
                        shift = rateLo & 0x01;
                        break;
                    default:
                        break;
                    }
                }
            } else {
                shift = (rateHi & 0x03) + OPL.EG_INCSTEP[rateLo][this.timer & 0x03];
                if (shift & 0x04) shift = 0x03;
                if (!shift) shift = this.egState;
            }
        }

        let egRout = slot.egRout;
        let egInc = 0;
        let egOff = 0;

        if (reset && rateHi == 0x0f) {
            egRout = 0x00;              // instant attack
        }
        if ((slot.egRout & 0x1f8) == 0x1f8) {
            egOff = 1;                  // envelope off
        }
        if (slot.egGen != EG.ATTACK && !reset && egOff) {
            egRout = 0x1ff;
        }
        switch(slot.egGen) {
        case EG.ATTACK:
            if (!slot.egRout) {
                slot.egGen = EG.DECAY;
            }
            else if (slot.key && shift > 0 && rateHi != 0x0f) {
                egInc = ~slot.egRout >> (4 - shift);
            }
            break;
        case EG.DECAY:
            if ((slot.egRout >> 4) == slot.regSL) {
                slot.egGen = EG.SUSTAIN;
            }
            else if (!egOff && !reset && shift > 0) {
                egInc = 1 << (shift - 1);
            }
            break;
        case EG.SUSTAIN:
        case EG.RELEASE:
            if (!egOff && !reset && shift > 0) {
                egInc = 1 << (shift - 1);
            }
            break;
        }
        slot.egRout = (egRout + egInc) & 0x1ff;

        if (reset) {
            slot.egGen = EG.ATTACK;
        }
        if (!slot.key) {
            slot.egGen = EG.RELEASE;
        }
    }

    /**
     * calcPhase(slot)
     *
     * @this {OPL}
     * @param {Object} slot
     */
    calcPhase(slot)
    {
        let channel = slot.channel;
        let fnum = channel.fnum;

        if (slot.regVIB) {
            let range = (fnum >> 7) & 7;
            let vibPos = this.vibPos;
            if (!(vibPos & 3)) {
                range = 0;
            } else if (vibPos & 1) {
                range >>= 1;
            }
            range >>= this.vibShift;
            if (vibPos & 4) range = -range;
            fnum += range;
        }

        let basefreq = (fnum << channel.block) >> 1;
        let phase = (slot.pgPhase >> 9) & 0x3ff;
        if (slot.pgReset) {
            slot.pgPhase = 0;
        }
        slot.pgPhase = (slot.pgPhase + ((basefreq * OPL.MULT[slot.regMULT]) >> 1)) & 0x7ffff;

        /**
         * Rhythm mode: the hi-hat, snare drum, and top cymbal get their phases from a mix of the
         * hi-hat and top cymbal phase bits and the noise generator.
         */
        let noise = this.noise;
        slot.pgPhaseOut = phase;
        if (slot.iSlot == 13) {         // hi-hat
            this.rmHHBit2 = (phase >> 2) & 1;
            this.rmHHBit3 = (phase >> 3) & 1;
            this.rmHHBit7 = (phase >> 7) & 1;
            this.rmHHBit8 = (phase >> 8) & 1;
        }
        if (slot.iSlot == 17 && (this.rhythm & 0x20)) {   // top cymbal
            this.rmTCBit3 = (phase >> 3) & 1;
            this.rmTCBit5 = (phase >> 5) & 1;
        }
        if (this.rhythm & 0x20) {
            let rmXor = (this.rmHHBit2 ^ this.rmHHBit7) | (this.rmHHBit3 ^ this.rmTCBit5) | (this.rmTCBit3 ^ this.rmTCBit5);
            switch(slot.iSlot) {
            case 13:                    // hi-hat
                slot.pgPhaseOut = rmXor << 9;
                if (rmXor ^ (noise & 1)) {
                    slot.pgPhaseOut |= 0xd0;
                } else {
                    slot.pgPhaseOut |= 0x34;
                }
                break;
            case 16:                    // snare drum
                slot.pgPhaseOut = (this.rmHHBit8 << 9) | ((this.rmHHBit8 ^ (noise & 1)) << 8);
                break;
            case 17:                    // top cymbal
                slot.pgPhaseOut = (rmXor << 9) | 0x80;
                break;
            default:
                break;
            }
        }
        let nBit = ((noise >> 14) ^ noise) & 0x01;
        this.noise = (noise >> 1) | (nBit << 22);
    }

    /**
     * generate()
     *
     * Produces the next output sample.
     *
     * @this {OPL}
     * @returns {number} signed 16-bit sample
     */
    generate()
    {
        let aSlots = this.aSlots;
        let cActive = 0;

        /**
         * Slots are processed in order, which guarantees that each channel's modulator (slots 0-2, 6-8,
         * and 12-14) is updated before its carrier (slots 3-5, 9-11, and 15-17), so carriers always see
         * the modulator's output for the current sample.
         */
        for (let i = 0; i < 18; i++) {
            let slot = aSlots[i];
            let channel = slot.channel;
            /**
             * Feedback: the modulator's input is the average of its last two outputs, scaled by the feedback level.
             */
            if (channel.fb) {
                slot.fbmod = (slot.prout + slot.out) >> (9 - channel.fb);
            } else {
                slot.fbmod = 0;
            }
            slot.prout = slot.out;

            this.calcEnvelope(slot);
            this.calcPhase(slot);

            if (!slot.key && slot.egRout >= 0x1f8) {
                slot.out = 0;           // silent slot; skip the (relatively expensive) waveform calculation
                continue;
            }
            cActive++;

            let mod;
            let fDrum = (this.rhythm & 0x20) && channel.iChannel >= 6;
            if (slot === channel.slotMod) {
                mod = (fDrum && channel.iChannel >= 7)? 0 : slot.fbmod;
            } else {
                mod = (channel.alg || (fDrum && channel.iChannel >= 7))? 0 : channel.slotMod.out;
            }
            slot.out = this.calcSin(slot.regWF & this.wfMask, slot.pgPhaseOut + mod, slot.egOut);
        }
        this.cActive = cActive;

        /**
         * Mix the channel outputs.  In rhythm mode, the percussion channels are effectively doubled.
         */
        let out = 0;
        let nChannels = (this.rhythm & 0x20)? 6 : 9;
        for (let i = 0; i < nChannels; i++) {
            let channel = this.aChannels[i];
            out += channel.alg? channel.slotMod.out + channel.slotCar.out : channel.slotCar.out;
        }
        if (nChannels == 6) {
            out += this.aChannels[6].slotCar.out << 1;
            out += (this.aChannels[7].slotMod.out + this.aChannels[7].slotCar.out) << 1;
            out += (this.aChannels[8].slotMod.out + this.aChannels[8].slotCar.out) << 1;
        }
        if (out > 32767) out = 32767; else if (out < -32768) out = -32768;

        /**
         * Advance the LFOs.
         */
        if ((this.timer & 0x3f) == 0x3f) {
            this.tremoloPos = (this.tremoloPos + 1) % 210;
        }
        if (this.tremoloPos < 105) {
            this.tremolo = this.tremoloPos >> this.tremoloShift;
        } else {
            this.tremolo = (210 - this.tremoloPos) >> this.tremoloShift;
        }
        if ((this.timer & 0x3ff) == 0x3ff) {
            this.vibPos = (this.vibPos + 1) & 7;
        }
        this.timer = (this.timer + 1) | 0;

        /**
         * Advance the envelope generator's shared rate counter, which increments every other sample;
         * the number of trailing zero bits in the counter determines which (slow) envelope rates get
         * an increment on this sample.
         */
        this.egAdd = 0;
        if (this.egTimer) {
            let shift = 31 - Math.clz32(this.egTimer & -this.egTimer);
            this.egAdd = (shift > 12)? 0 : shift + 1;
        }
        if (this.egTimerRem || this.egState) {
            if (this.egTimer == -1) {
                this.egTimer = 0;
                this.egTimerRem = 1;
            } else {
                this.egTimer = (this.egTimer + 1) | 0;
                this.egTimerRem = 0;
            }
        }
        this.egState ^= 1;

        return out;
    }
}
