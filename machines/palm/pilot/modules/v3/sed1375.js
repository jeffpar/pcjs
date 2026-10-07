/**
 * @fileoverview Implements the Epson SED1375 LCD Controller (eg, Palm IIIc)
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import CPU68K  from "../../../../motorola/68k/modules/v3/cpu68k.js";
import Memory  from "../../../../modules/v3/memory.js";
import MESSAGE from "../../../../modules/v3/message.js";

/**
 * @typedef {MemoryConfig} SED1375Config
 * @property {number} [addr] (base address of the controller's display buffer; default is 0x1f000000)
 * @property {number} size (set by the constructor)
 * @property {number} [type] (set by the constructor)
 */

/**
 * @class SED1375
 * @unrestricted
 * @property {SED1375Config} config
 *
 * This is a port of HWLCDEpson1375.java, with improvements based on the S1D13705 (aka SED1375) Hardware
 * Functional Specification (see /machines/palm/pilot/webarchive/epson_com/x27aa001.pdf).
 *
 * On a Palm IIIc, the controller's 80K display buffer begins at 0x1f000000, and its 32 registers begin at offset
 * 0x1ffe0.  We add the display buffer to the bus as ordinary RAM, and then we add one block of our own at the top
 * of the controller's address range, where the registers reside.
 *
 * To support different LCD controllers, the PilotVideo device asks its LCD controller (either this device or
 * PilotIO) for the following information: getLCDStatus(), getBufferAddress(), getBufferStride(), getBPP(), and
 * optionally getPalette().
 */
export default class SED1375 extends Memory {
    /**
     * SED1375(idMachine, idDevice, config)
     *
     * @this {SED1375}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {SED1375Config} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        let addrBase = (config['addr'] != undefined? config['addr'] : SED1375.VRAM_BASE) & CPU68K.ADDR_MASK;
        config['type'] = Memory.TYPE.READWRITE;
        config['addr'] = addrBase + SED1375.REGS_OFFSET - (SED1375.REGS_OFFSET % 0x1000);
        config['size'] = 0x1000;
        super(idMachine, idDevice, config);

        this.addrVRAM = addrBase;
        this.offRegs = SED1375.REGS_OFFSET % 0x1000;
        this.abRegs = new Uint8Array(SED1375.REGS_SIZE);
        this.aPalette = new Array(SED1375.MAX_COLORS);
        this.abLUT = new Uint8Array(3);
        this.video = null;

        this.readData = this.getByte;
        this.writeData = this.setByte;
        this.readPair = (offset) => (this.getByte(offset) << 8) | this.getByte(offset + 1);
        this.writePair = (offset, data) => { this.setByte(offset, data >> 8); this.setByte(offset + 1, data); };
        this.readQuad = (offset) => (this.readPair(offset) << 16) | this.readPair(offset + 2);
        this.writeQuad = (offset, data) => { this.writePair(offset, data >>> 16); this.writePair(offset + 2, data & 0xffff); };

        this.bus.addBlocks(this.addrVRAM, SED1375.VRAM_SIZE, Memory.TYPE.READWRITE);
        this.bus.addBlocks(this.config['addr'], this.size, Memory.TYPE.READWRITE, this);

        this.onReset();
    }

    /**
     * setVideo(video)
     *
     * Called by the PilotVideo device, so that we can notify it of LCD state changes.
     *
     * @this {SED1375}
     * @param {Object} video
     */
    setVideo(video)
    {
        this.video = video;
    }

    /**
     * onReset()
     *
     * All registers are reset to zero, except the (read-only) Revision Code register.
     *
     * @this {SED1375}
     */
    onReset()
    {
        this.abRegs.fill(0);
        this.abRegs[SED1375.REG.REVCODE] = SED1375.REVCODE;
        for (let i = 0; i < this.aPalette.length; i++) {
            this.aPalette[i] = [0, 0, 0];
        }
        this.iLUTColor = 0;
        this.resetScreen();
    }

    /**
     * loadState(state)
     *
     * Memory and I/O register states are managed by the Bus onLoad() handler, which calls our loadState() handler.
     *
     * @this {SED1375}
     * @param {Array|undefined} state
     * @returns {boolean}
     */
    loadState(state)
    {
        if (state && state.length >= 3) {
            let abRegs = state.shift(), aPalette = state.shift();
            this.iLUTColor = state.shift();
            if (abRegs && abRegs.length == this.abRegs.length && aPalette && aPalette.length == this.aPalette.length) {
                this.abRegs.set(abRegs);
                this.aPalette = aPalette;
                this.resetScreen();
                return true;
            }
        }
        return false;
    }

    /**
     * saveState(state)
     *
     * @this {SED1375}
     * @param {Array} state
     */
    saveState(state)
    {
        state.push(Array.from(this.abRegs));
        state.push(this.aPalette);
        state.push(this.iLUTColor);
    }

    /**
     * getByte(offset)
     *
     * @this {SED1375}
     * @param {number} offset (within our block)
     * @returns {number}
     */
    getByte(offset)
    {
        let reg = offset - this.offRegs;
        if (reg < 0 || reg >= SED1375.REGS_SIZE) return 0;
        let data = this.abRegs[reg];
        switch(reg) {
        case SED1375.REG.VNDP:
            //
            // Routines like PrvUpdateCLUT wait for the "Vertical Non-Display" status bit, so we toggle it on every read.
            //
            this.abRegs[reg] ^= SED1375.VNDP_STATUS;
            break;
        case SED1375.REG.LUTDATA:
            data = (this.aPalette[this.abRegs[SED1375.REG.LUTADDR]][this.iLUTColor] & 0xf0);
            this.advanceLUT();
            break;
        }
        this.printf(MESSAGE.VIDEO, "SED1375.getByte(%#04x): %#04x\n", reg, data);
        return data;
    }

    /**
     * setByte(offset, data)
     *
     * @this {SED1375}
     * @param {number} offset (within our block)
     * @param {number} data
     */
    setByte(offset, data)
    {
        let reg = offset - this.offRegs;
        if (reg < 0 || reg >= SED1375.REGS_SIZE) return;
        data &= 0xff;
        this.printf(MESSAGE.VIDEO, "SED1375.setByte(%#04x,%#04x)\n", reg, data);
        switch(reg) {
        case SED1375.REG.REVCODE:
            return;                 // read-only
        case SED1375.REG.VNDP:
            data = (data & ~SED1375.VNDP_STATUS) | (this.abRegs[reg] & SED1375.VNDP_STATUS);
            break;
        case SED1375.REG.LUTADDR:
            this.iLUTColor = 0;     // writing the LUT address register always selects the red component first
            break;
        case SED1375.REG.LUTDATA:
            //
            // Each LUT entry has 4 bits per component, which are written to bits 7-4; once the blue component of
            // an entry has been written, the entire entry is updated.  The 4-bit components are replicated in the
            // low nibble when converted to 8-bit RGB values.
            //
            this.abLUT[this.iLUTColor] = data & 0xf0;
            if (this.iLUTColor == 2) {
                let iEntry = this.abRegs[SED1375.REG.LUTADDR];
                this.aPalette[iEntry] = [this.abLUT[0], this.abLUT[1], this.abLUT[2]];
                if (this.video) this.video.initCache();
            }
            this.advanceLUT();
            return;
        }
        let dataPrev = this.abRegs[reg];
        this.abRegs[reg] = data;
        if (dataPrev != data && SED1375.SCREEN_REGS.indexOf(reg) >= 0) {
            this.resetScreen();
        }
    }

    /**
     * advanceLUT()
     *
     * Every access to the LUT data register advances to the next component (red, green, blue) of the current
     * entry, and after blue, to the red component of the next entry.
     *
     * @this {SED1375}
     */
    advanceLUT()
    {
        if (++this.iLUTColor > 2) {
            this.iLUTColor = 0;
            this.abRegs[SED1375.REG.LUTADDR] = (this.abRegs[SED1375.REG.LUTADDR] + 1) & 0xff;
        }
    }

    /**
     * getLCDStatus()
     *
     * The display is on if the controller is in "Normal Operation" (not Power Save) mode and the display isn't blanked.
     *
     * @this {SED1375}
     * @returns {boolean}
     */
    getLCDStatus()
    {
        if ((this.abRegs[SED1375.REG.MODE2] & SED1375.MODE2_POWERSAVE) != SED1375.MODE2_POWERSAVE) return false;
        if (this.abRegs[SED1375.REG.MODE1] & SED1375.MODE1_BLANK) return false;
        return true;
    }

    /**
     * getBPP()
     *
     * @this {SED1375}
     * @returns {number} (1, 2, 4 or 8)
     */
    getBPP()
    {
        return 1 << ((this.abRegs[SED1375.REG.MODE1] & SED1375.MODE1_BPP) >> SED1375.MODE1_BPP_SHIFT);
    }

    /**
     * getBufferAddress()
     *
     * In landscape mode, the Screen 1 Start Address registers contain a word address.
     *
     * @this {SED1375}
     * @returns {number}
     */
    getBufferAddress()
    {
        let wAddr = this.abRegs[SED1375.REG.S1ADDRLO] | (this.abRegs[SED1375.REG.S1ADDRHI] << 8);
        return this.addrVRAM + wAddr * 2;
    }

    /**
     * getBufferStride()
     *
     * Returns the number of bytes per scanline, which is the panel width (in pixels) times the bits-per-pixel,
     * divided by 8, plus the Memory Address Offset (which is in words).
     *
     * @this {SED1375}
     * @returns {number}
     */
    getBufferStride()
    {
        let cxPanel = ((this.abRegs[SED1375.REG.HPS] & 0x7f) + 1) * 8;
        return ((cxPanel * this.getBPP()) >> 3) + this.abRegs[SED1375.REG.MAOFF] * 2;
    }

    /**
     * getPalette()
     *
     * Returns an array of RGB values for every pixel value at the current color depth.  Monochrome (passive) panels
     * use only the green LUT, and the Software Video Invert bit inverts the data after the LUT.
     *
     * @this {SED1375}
     * @returns {Array.<Array.<number>>}
     */
    getPalette()
    {
        let aColors = [];
        let nColors = 1 << this.getBPP();
        let fMono = !(this.abRegs[SED1375.REG.MODE0] & (SED1375.MODE0_TFT | SED1375.MODE0_COLOR));
        let fInvert = !!(this.abRegs[SED1375.REG.MODE1] & SED1375.MODE1_INVERT);
        for (let i = 0; i < nColors; i++) {
            let rgb = this.aPalette[i];
            let r = rgb[0] | (rgb[0] >> 4), g = rgb[1] | (rgb[1] >> 4), b = rgb[2] | (rgb[2] >> 4);
            if (fMono) r = b = g;
            if (fInvert) {
                r = 0xff - r; g = 0xff - g; b = 0xff - b;
            }
            aColors.push([r, g, b]);
        }
        return aColors;
    }

    /**
     * resetScreen()
     *
     * Notify the video device (if any) that the LCD state has changed.
     *
     * @this {SED1375}
     */
    resetScreen()
    {
        if (this.video) this.video.resetScreen();
    }
}

SED1375.VRAM_BASE           = 0x1f000000;
SED1375.VRAM_SIZE           = 0x00014000;   // 80K display buffer
SED1375.REGS_OFFSET         = 0x0001ffe0;
SED1375.REGS_SIZE           = 0x20;
SED1375.MAX_COLORS          = 256;
SED1375.REVCODE             = 0x24;         // product code 001001b, revision code 00b

SED1375.REG = {
    REVCODE:    0x00,       // Revision Code Register (read-only)
    MODE0:      0x01,       // Mode Register 0
    MODE1:      0x02,       // Mode Register 1
    MODE2:      0x03,       // Mode Register 2
    HPS:        0x04,       // Horizontal Panel Size Register ((width / 8) - 1)
    VPSLO:      0x05,       // Vertical Panel Size Register (LSB) (height - 1)
    VPSHI:      0x06,       // Vertical Panel Size Register (MSB)
    FPLSP:      0x07,       // FPLINE Start Position
    HNDP:       0x08,       // Horizontal Non-Display Period
    FPFSP:      0x09,       // FPFRAME Start Position
    VNDP:       0x0a,       // Vertical Non-Display Period
    MODRATE:    0x0b,       // MOD Rate Register
    S1ADDRLO:   0x0c,       // Screen 1 Start Address Register (LSB)
    S1ADDRHI:   0x0d,       // Screen 1 Start Address Register (MSB)
    S2ADDRLO:   0x0e,       // Screen 2 Start Address Register (LSB)
    S2ADDRHI:   0x0f,       // Screen 2 Start Address Register (MSB)
    S1ADDRBIT:  0x10,       // Screen Start Address Overflow Register
    MAOFF:      0x11,       // Memory Address Offset Register (in words)
    S1VSLO:     0x12,       // Screen 1 Vertical Size Register (LSB)
    S1VSHI:     0x13,       // Screen 1 Vertical Size Register (MSB)
    LUTADDR:    0x15,       // Look-Up Table Address Register
    LUTDATA:    0x17,       // Look-Up Table Data Register
    GPIOCONF:   0x18,       // GPIO Configuration Control Register
    GPIOSTAT:   0x19,       // GPIO Status/Control Register
    SCRATCH:    0x1a,       // Scratch Pad Register
    SWIVEL:     0x1b,       // SwivelView Mode Register
    LBCR:       0x1c        // Line Byte Count Register (SwivelView mode only)
};

SED1375.MODE0_TFT           = 0x80;         // TFT (active) panel if set, STN (passive) if clear
SED1375.MODE0_DUAL          = 0x40;
SED1375.MODE0_COLOR         = 0x20;         // color (passive) panel if set, monochrome if clear
SED1375.MODE1_BPP           = 0xc0;         // 00=1BPP, 01=2BPP, 10=4BPP, 11=8BPP
SED1375.MODE1_BPP_SHIFT     = 6;
SED1375.MODE1_BLANK         = 0x08;         // display blank
SED1375.MODE1_INVERT        = 0x01;         // software video invert
SED1375.MODE2_POWERSAVE     = 0x03;         // 00=Software Power Save, 11=Normal Operation
SED1375.VNDP_STATUS         = 0x80;         // set during the vertical non-display period

/**
 * Changes to any of these registers require the video device to recompute the screen characteristics.
 */
SED1375.SCREEN_REGS = [
    SED1375.REG.MODE0, SED1375.REG.MODE1, SED1375.REG.MODE2, SED1375.REG.HPS,
    SED1375.REG.S1ADDRLO, SED1375.REG.S1ADDRHI, SED1375.REG.MAOFF
];

SED1375.CLASSES["SED1375"] = SED1375;
