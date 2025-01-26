/**
 * @fileoverview Manages address spaces for machines
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "./device.js";
import Memory  from "./memory.js";
import MESSAGE from "./message.js";

/**
 * @typedef {Config} BusConfig
 * @property {string} type ("static" or "dynamic"; default is "dynamic")
 * @property {number} addrWidth (default is 16)
 * @property {number} dataWidth (default is 8)
 * @property {number} [blockSize] (default is 1024 for addrWidth == 16, 4096 for addrWidth > 16)
 * @property {boolean} [littleEndian] (default is true)
 */

/**
 * @class Bus
 * @unrestricted
 * @property {BusConfig} config
 * @property {number} type (Bus.TYPE value, converted from config['type'])
 * @property {number} addrWidth
 * @property {number} addrTotal
 * @property {number} addrLimit
 * @property {number} blockSize
 * @property {number} blockTotal
 * @property {number} blockShift
 * @property {number} blockLimit
 * @property {number} dataWidth
 * @property {number} dataLimit
 * @property {number} pairWidth
 * @property {number} pairLimit
 * @property {number} quadWidth
 * @property {number} quadLimit
 * @property {boolean} littleEndian
 * @property {Array.<Memory>} blocks
 * @property {number} nTraps (number of blocks currently being trapped)
 */
export default class Bus extends Device {
    /**
     * Bus(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "bus": {
     *        "class": "Bus",
     *        "type": "static",
     *        "addrWidth": 16,
     *        "dataWidth": 8,
     *        "blockSize": 1024,
     *        "littleEndian": true
     *      }
     *
     * If no blockSize is specified, it defaults to 1024 (1K) for machines with an addrWidth of 16,
     * or 4096 (4K) if addrWidth is greater than 16.
     *
     * @this {Bus}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {BusConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);
        /**
         * Our default type is DYNAMIC for the sake of older device configs (eg, TI-57)
         * which didn't specify a type and need a dynamic bus to ensure that their LED ROM array
         * (if any) gets updated on ROM accesses.
         *
         * Obviously, that can (and should) be controlled by a configuration file that is unique
         * to the device's display requirements, but at the moment, all TI-57 config files have LED
         * ROM array support enabled, whether it's actually used or not.
         */
        this.type = this.config['type'] == "static"? Bus.TYPE.STATIC : Bus.TYPE.DYNAMIC;
        this.addrWidth = this.config['addrWidth'] || 16;
        this.addrTotal = Math.pow(2, this.addrWidth);
        this.addrLimit = (this.addrTotal - 1)|0;
        this.blockSize = this.config['blockSize'] || (this.addrWidth > 16? 4096 : 1024);
        if (this.blockSize > this.addrTotal) this.blockSize = this.addrTotal;
        this.blockTotal = (this.addrTotal / this.blockSize)|0;
        this.blockShift = Math.log2(this.blockSize)|0;
        this.blockLimit = (1 << this.blockShift) - 1;
        this.dataWidth = this.config['dataWidth'] || 8;
        this.dataLimit = Math.pow(2, this.dataWidth) - 1;
        this.pairWidth = this.dataWidth << 1;
        this.pairLimit = Math.pow(2, this.pairWidth) - 1;
        this.quadWidth = this.dataWidth << 2;
        this.quadLimit = Math.pow(2, this.quadWidth) - 1;
        this.littleEndian = this.config['littleEndian'] !== false;
        this.blocks = new Array(this.blockTotal);
        this.nTraps = 0;
        this.nDisableFaults = 0;
        this.fFault = false;
        this.faultHandler = null;
        let block = new Memory(idMachine, idDevice + "[NONE]", {"size": this.blockSize, "bus": this.idDevice});
        for (let addr = 0; addr < this.addrTotal; addr += this.blockSize) {
            this.addBlocks(addr, this.blockSize, Memory.TYPE.NONE, block);
        }
        this.selectInterface(this.type);
    }

    /**
     * addBlocks(addr, size, type, block)
     *
     * Bus interface for other devices to add one or more blocks (eg, RAM or ROM) at a specific starting address.
     * It's an error to add blocks to regions that already contain blocks (other than blocks with TYPE of NONE).
     * There is no attempt to clean up that error (and there is no removeBlocks() function), because it's currently
     * considered a configuration error, but that may change as machines with fancier buses are added.
     *
     * @this {Bus}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {number} type is one of the Memory.TYPE constants
     * @param {Memory} [block] (optional preallocated block that must implement the same Memory interfaces that Bus requires)
     * @returns {boolean} (true if successful, false if error)
     */
    addBlocks(addr, size, type, block)
    {
        let addrNext = addr;
        let sizeLeft = size;
        let offset = 0;
        let iBlock = addrNext >>> this.blockShift;
        while (sizeLeft > 0 && iBlock < this.blocks.length) {
            let blockNew;
            let addrBlock = iBlock * this.blockSize;
            let sizeBlock = this.blockSize - (addrNext - addrBlock);
            if (sizeBlock > sizeLeft) sizeBlock = sizeLeft;
            let blockExisting = this.blocks[iBlock];
            /**
             * If addrNext does not equal addrBlock, or sizeBlock does not equal this.blockSize, then either
             * the current block doesn't start on a block boundary or the size is something other than a block;
             * while we might support such requests down the road, that is currently a configuration error.
             */
            if (addrNext != addrBlock || sizeBlock != this.blockSize) {
                this.assert(false, "addBlocks(%#0x,%#0x): block boundary error", addrNext, sizeBlock);
                return false;
            }
            /**
             * Make sure that no block exists at the specified address, or if so, make sure its type is NONE.
             */
            if (blockExisting && blockExisting.type != Memory.TYPE.NONE) {
                this.assert(false, "addBlocks(%#0x,%#0x): block (%d) already exists", addrNext, sizeBlock, blockExisting.type);
                return false;
            }
            /**
             * When no block is provided, we must allocate one that matches the specified type (and remaining size).
             */
            let idBlock = this.idDevice + '[' + this.toBase(addrNext, 16, this.addrWidth) + ']';
            if (!block) {
                blockNew = new Memory(this.idMachine, idBlock, {type, addr: addrNext, size: sizeBlock, "bus": this.idDevice});
            } else {
                /**
                 * When a block is provided, make sure its size matches the default Bus block size, and use it if so.
                 */
                if (block.size == this.blockSize) {
                    blockNew = block;
                } else {
                    blockNew = new Memory(this.idMachine, idBlock, {type, addr: addrNext, size: sizeBlock, "bus": this.idDevice});
                }
            }
            this.blocks[iBlock] = blockNew;
            addrNext = addrBlock + this.blockSize;
            sizeLeft -= sizeBlock;
            offset += sizeBlock;
            iBlock++;
        }
        return true;
    }

    /**
     * cleanBlocks(addr, size)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} size
     * @returns {boolean} (true if all blocks were clean, false if dirty; all blocks are cleaned in the process)
     */
    cleanBlocks(addr, size)
    {
        let clean = true;
        let iBlock = addr >>> this.blockShift;
        let sizeBlock = this.blockSize - (addr & this.blockLimit);
        while (size > 0 && iBlock < this.blocks.length) {
            if (this.blocks[iBlock].isDirty()) {
                clean = false;
            }
            size -= sizeBlock;
            sizeBlock = this.blockSize;
            iBlock++;
        }
        return clean;
    }

    /**
     * enumBlocks(types, func)
     *
     * This is used by the Debugger to enumerate all the blocks of certain types.
     *
     * @this {Bus}
     * @param {number} types
     * @param {function(Memory)} func
     * @returns {number} (the number of blocks enumerated based on the requested types)
     */
    enumBlocks(types, func)
    {
        let cBlocks = 0;
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (!block || !(block.type & types)) continue;
            func(block);
            cBlocks++;
        }
        return cBlocks;
    }

    /**
     * initBlocks(addr, size, values)
     *
     * @this {Bus}
     * @param {number} addr is the starting physical address of the request
     * @param {number} size of the request, in bytes
     * @param {Array.<number>|Uint8Array} values
     * @returns {boolean}
     */
    initBlocks(addr, size, values)
    {
        let i = 0;
        let offset = addr & this.blockLimit;
        let iBlock = addr >>> this.blockShift;
        if (size > values.length) size = values.length;
        while (size > 0 && iBlock < this.blocks.length) {
            let block = this.blocks[iBlock++];
            if (!block) return false;
            while (size > 0 && offset < block.size) {
                block.writeValue(offset++, values[i++]);
                size--;
            }
            offset = 0;
        }
        return true;
    }

    /**
     * setBlock(addr, block)
     *
     * While addBlocks() can be used to add a specific block at a specific address, it's more restrictive,
     * requiring the specified address to be unused (or contain a block with TYPE of NONE).  This function
     * relaxes that requirement, by returning the previous block with the understanding that the caller will
     * restore the block later.  The PDP11, for example, needs this in order to (re)locate its IOPage block.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {Memory} block
     * @returns {Memory|undefined} (previous block at address, undefined if address is not on a block boundary)
     */
    setBlock(addr, block)
    {
        let blockPrev;
        if (!(addr & this.blockLimit)) {
            let iBlock = addr >>> this.blockShift;
            blockPrev = this.blocks[iBlock];
            this.blocks[iBlock] = block;
        }
        return blockPrev;
    }

    /**
     * fault(addr, reason)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} [reason]
     */
    fault(addr, reason)
    {
        this.fFault = true;
        if (!this.nDisableFaults) {
            /**
             * We must call the Debugger's printf() instead of our own in order to use its custom formatters (eg, %n).
             */
            if (this.dbg) {
                this.dbg.printf(MESSAGE.FAULT, "bus fault (%d) at %n\n", reason, addr);
            }
            if (this.faultHandler) {
                this.faultHandler(addr, reason);
            }
        }
    }

    /**
     * checkFault()
     *
     * This also serves as a clearFault() function.
     *
     * @this {Bus}
     * @returns {boolean}
     */
    checkFault()
    {
        let fFault = this.fFault;
        this.fFault = false;
        return fFault;
    }

    /**
     * setFaultHandler(func)
     *
     * @this {Bus}
     * @param {function(number,number)|null} func
     */
    setFaultHandler(func)
    {
        this.faultHandler = func;
    }

    /**
     * getMemoryLimit(type)
     *
     * @this {Bus}
     * @param {number} type is one of the Memory.TYPE constants
     * @returns {number} (the limiting address of the specified memory type, zero if none)
     */
    getMemoryLimit(type)
    {
        let addr = 0;
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (block.type & type) {
                addr = block.addr + block.size;
            }
        }
        return addr;
    }

    /**
     * onPower()
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {Bus}
     */
    onPower()
    {
        if (this.dbg === undefined) {
            this.dbg = /** @type {Debugger} */ (this.findDeviceByClass("Debugger", false));
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {Bus}
     */
    onReset()
    {
        /**
         * The following logic isn't needed because Memory and Port objects are Devices as well,
         * so their onReset() handlers will be invoked automatically.
         *
         *      this.enumBlocks(Memory.TYPE.WRITABLE, function(block) {
         *          if (block.onReset) block.onReset();
         *      });
         */
    }

    /**
     * onLoad(state)
     *
     * Automatically called by the Machine device if the machine's 'autoSave' property is true.
     *
     * @this {Bus}
     * @param {Array} state
     * @returns {boolean}
     */
    onLoad(state)
    {
        return state && this.loadState(state)? true : false;
    }

    /**
     * onSave(state)
     *
     * Automatically called by the Machine device before all other devices have been powered down (eg, during
     * a page unload event).
     *
     * @this {Bus}
     * @param {Array} state
     */
    onSave(state)
    {
        this.saveState(state);
    }

    /**
     * loadState(state)
     *
     * @this {Bus}
     * @param {Array} state
     * @returns {boolean}
     */
    loadState(state)
    {
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (this.type == Bus.TYPE.DYNAMIC || (block.type & Memory.TYPE.READWRITE)) {
                if (block.loadState) {
                    let stateBlock = state.shift();
                    if (!block.loadState(stateBlock)) return false;
                }
            }
        }
        return true;
    }

    /**
     * saveState(state)
     *
     * @this {Bus}
     * @param {Array} state
     */
    saveState(state)
    {
        for (let iBlock = 0; iBlock < this.blocks.length; iBlock++) {
            let block = this.blocks[iBlock];
            if (this.type == Bus.TYPE.DYNAMIC || (block.type & Memory.TYPE.READWRITE)) {
                if (block.saveState) {
                    let stateBlock = [];
                    block.saveState(stateBlock);
                    state.push(stateBlock);
                }
            }
        }
    }

    /**
     * readDirect(addr)
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readDirect(addr)
    {
        this.assert(!(addr & ~this.addrLimit), "readDirect(%#0x) exceeds address width", addr);
        return this.blocks[addr >>> this.blockShift].readDirect(addr & this.blockLimit);
    }

    /**
     * readValue(addr)
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValue(addr)
    {
        this.assert(!(addr & ~this.addrLimit), "readValue(%#0x) exceeds address width", addr);
        return this.blocks[addr >>> this.blockShift].readData(addr & this.blockLimit);
    }

    /**
     * writeDirect(addr, value)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeDirect(addr, value)
    {
        this.assert(!(addr & ~this.addrLimit), "writeDirect(%#0x,%#0x) exceeds address width", addr, value);
        this.blocks[addr >>> this.blockShift].writeDirect(addr & this.blockLimit, value);
    }

    /**
     * writeValue(addr, value)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValue(addr, value)
    {
        this.assert(!(addr & ~this.addrLimit), "writeValue(%#0x,%#0x) exceeds address width", addr, value);
        this.blocks[addr >>> this.blockShift].writeData(addr & this.blockLimit, value);
    }

    /**
     * readValuePairBE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValuePairBE(addr)
    {
        this.assert(!((addr + 1) & ~this.addrLimit), "readValuePairBE(%#0x) exceeds address width", addr);
        if (addr & 0x1) {
            return this.readData((addr + 1) & this.addrLimit) | (this.readData(addr) << this.dataWidth);
        }
        return this.blocks[addr >>> this.blockShift].readPair(addr & this.blockLimit);
    }

    /**
     * readValueQuadBE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValueQuadBE(addr)
    {
        this.assert(!((addr + 3) & ~this.addrLimit), "readValueQuadBE(%#0x) exceeds address width", addr);
        if (addr & 0x3) {
            return this.readPair((addr + 2) & this.addrLimit) | (this.readPair(addr) << this.pairWidth);
        }
        return this.blocks[addr >>> this.blockShift].readQuad(addr & this.blockLimit);
    }

    /**
     * readValuePairLE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValuePairLE(addr)
    {
        this.assert(!((addr + 1) & ~this.addrLimit), "readValuePairLE(%#0x) exceeds address width", addr);
        if (addr & 0x1) {
            return this.readData(addr) | (this.readData((addr + 1) & this.addrLimit) << this.dataWidth);
        }
        return this.blocks[addr >>> this.blockShift].readPair(addr & this.blockLimit);
    }

    /**
     * readValueQuadLE(addr)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readValueQuadLE(addr)
    {
        this.assert(!((addr + 3) & ~this.addrLimit), "readValueQuadLE(%#0x) exceeds address width", addr);
        if (addr & 0x3) {
            return this.readPair(addr) | (this.readPair((addr + 2) & this.addrLimit) << this.pairWidth);
        }
        return this.blocks[addr >>> this.blockShift].readQuad(addr & this.blockLimit);
    }

    /**
     * readDynamicPair(addr)
     *
     * Unlike the readValuePairLE()/readValuePairBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * readPair() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readDynamicPair(addr)
    {
        this.assert(!((addr + 1) & ~this.addrLimit), "readDynamicPair(%#0x) exceeds address width", addr);
        if ((addr & this.blockLimit) == this.blockLimit) {
            return this.littleEndian? this.readValuePairLE(addr) : this.readValuePairBE(addr);
        }
        return this.blocks[addr >>> this.blockShift].readPair(addr & this.blockLimit);
    }

    /**
     * readDynamicQuad(addr)
     *
     * Unlike the readValueQuadLE()/readValueQuadBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * readQuad() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @returns {number}
     */
    readDynamicQuad(addr)
    {
        this.assert(!((addr + 3) & ~this.addrLimit), "readDynamicQuad(%#0x) exceeds address width", addr);
        if ((addr & this.blockLimit) + 3 > this.blockLimit) {
            return this.littleEndian? this.readValueQuadLE(addr) : this.readValueQuadBE(addr);
        }
        return this.blocks[addr >>> this.blockShift].readQuad(addr & this.blockLimit);
    }

    /**
     * writeValuePairBE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValuePairBE(addr, value)
    {
        this.assert(!((addr + 1) & ~this.addrLimit), "writeValuePairBE(%#0x,%#0x) exceeds address width", addr, value);
        if (addr & 0x1) {
            this.writeData(addr, value >> this.dataWidth);
            this.writeData((addr + 1) & this.addrLimit, value & this.dataLimit);
            return;
        }
        this.blocks[addr >>> this.blockShift].writePair(addr & this.blockLimit, value);
    }

    /**
     * writeValueQuadBE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValueQuadBE(addr, value)
    {
        this.assert(!((addr + 3) & ~this.addrLimit), "writeValueQuadBE(%#0x,%#0x) exceeds address width", addr, value);
        if (addr & 0x3) {
            this.writePair(addr, value >> this.pairWidth);
            this.writePair((addr + 2) & this.addrLimit, value & this.pairLimit);
            return;
        }
        this.blocks[addr >>> this.blockShift].writeQuad(addr & this.blockLimit, value);
    }

    /**
     * writeValuePairLE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValuePairLE(addr, value)
    {
        this.assert(!((addr + 1) & ~this.addrLimit), "writeValuePairLE(%#0x,%#0x) exceeds address width", addr, value);
        if (addr & 0x1) {
            this.writeData(addr, value & this.dataLimit);
            this.writeData((addr + 1) & this.addrLimit, value >> this.dataWidth);
            return;
        }
        this.blocks[addr >>> this.blockShift].writePair(addr & this.blockLimit, value);
    }

    /**
     * writeValueQuadLE(addr, value)
     *
     * NOTE: Any addr we are passed is assumed to be properly masked; however, any address that we
     * we calculate ourselves (ie, addr + 1) must be masked ourselves.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeValueQuadLE(addr, value)
    {
        this.assert(!((addr + 3) & ~this.addrLimit), "writeValueQuadLE(%#0x,%#0x) exceeds address width", addr, value);
        if (addr & 0x3) {
            this.writePair(addr, value & this.pairLimit);
            this.writeData((addr + 2) & this.addrLimit, value >> this.pairWidth);
            return;
        }
        this.blocks[addr >>> this.blockShift].writeQuad(addr & this.blockLimit, value);
    }

    /**
     * writeDynamicPair(addr, value)
     *
     * Unlike the writeValuePairLE()/writeValuePairBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * writeDynamicPair() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeDynamicPair(addr, value)
    {
        this.assert(!((addr + 1) & ~this.addrLimit), "writeDynamicPair(%#0x,%#0x) exceeds address width", addr, value);
        if ((addr & this.blockLimit) == this.blockLimit) {
            if (this.littleEndian) {
                this.writeValuePairLE(addr, value);
            } else {
                this.writeValuePairBE(addr, value);
            }
            return;
        }
        this.blocks[addr >>> this.blockShift].writePair(addr & this.blockLimit, value);
    }

    /**
     * writeDynamicQuad(addr, value)
     *
     * Unlike the writeValueQuadLE()/writeValueQuadBE() interfaces, we pass any offset -- even or odd -- directly to the block's
     * writeDynamicQuad() interface.  Our only special concern here is whether the request straddles two blocks.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {number} value
     */
    writeDynamicQuad(addr, value)
    {
        this.assert(!((addr + 3) & ~this.addrLimit), "writeDynamicQuad(%#0x,%#0x) exceeds address width", addr, value);
        if ((addr & this.blockLimit) + 3 > this.blockLimit) {
            if (this.littleEndian) {
                this.writeValueQuadLE(addr, value);
            } else {
                this.writeValueQuadBE(addr, value);
            }
            return;
        }
        this.blocks[addr >>> this.blockShift].writeQuad(addr & this.blockLimit, value);
    }

    /**
     * selectInterface(n)
     *
     * @this {Bus}
     * @param {number} nDelta (the change in trap requests; eg, +/-1)
     */
    selectInterface(nDelta)
    {
        let nTraps = this.nTraps;
        this.nTraps += nDelta;
        this.assert(this.nTraps >= 0);
        if (!nTraps || !this.nTraps) {
            this.readData = this.readValue;
            this.writeData = this.writeValue;
            if (this.type == Bus.TYPE.DYNAMIC) {
                this.readPair = this.readDynamicPair;
                this.readQuad = this.readDynamicQuad;
                this.writePair = this.writeDynamicPair;
                this.writeQuad = this.writeDynamicQuad;
            }
            else if (!this.littleEndian) {
                this.readPair = this.readValuePairBE;
                this.readQuad = this.readValueQuadBE;
                this.writePair = this.writeValuePairBE;
                this.writeQuad = this.writeValueQuadBE;
            } else {
                this.readPair = this.readValuePairLE;
                this.readQuad = this.readValueQuadLE;
                this.writePair = this.writeValuePairLE;
                this.writeQuad = this.writeValueQuadLE;
            }
        }
    }

    /**
     * trapRead(addr, func)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value read)
     * @returns {boolean} true if trap successful, false if unsupported or already trapped by another function
     */
    trapRead(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].trapRead(func)) {
            this.selectInterface(1);
            return true;
        }
        return false;
    }

    /**
     * trapWrite(addr, func)
     *
     * Note that for blocks of type NONE, the base will be undefined, so function will not see the original address,
     * only the block offset.
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value written)
     * @returns {boolean} true if trap successful, false if unsupported already trapped by another function
     */
    trapWrite(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].trapWrite(func)) {
            this.selectInterface(1);
            return true;
        }
        return false;
    }

    /**
     * untrapRead(addr, func)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value read)
     * @returns {boolean} true if untrap successful, false if no (or another) trap was in effect
     */
    untrapRead(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].untrapRead(func)) {
            this.selectInterface(-1);
            return true;
        }
        return false;
    }

    /**
     * untrapWrite(addr, func)
     *
     * @this {Bus}
     * @param {number} addr
     * @param {function((number|undefined), number, number)} func (receives the base address, offset, and value written)
     * @returns {boolean} true if untrap successful, false if no (or another) trap was in effect
     */
    untrapWrite(addr, func)
    {
        if (this.blocks[addr >>> this.blockShift].untrapWrite(func)) {
            this.selectInterface(-1);
            return true;
        }
        return false;
    }
}

/**
 * A "dynamic" bus (eg, an I/O bus) is one where block accesses must always be performed via function (no direct
 * value access) because there's "logic" on the other end, whereas a "static" bus can be accessed either way, via
 * function or value.
 *
 * Why don't we use ONLY functions on dynamic buses and ONLY direct value access on static buses?  Partly for
 * historical reasons, but also because when trapping is enabled on one or more blocks of a bus, all accesses must
 * be performed via function, to ensure that the appropriate trap handler always gets invoked.
 *
 * This is why it's important that TYPE.DYNAMIC be 1 (not 0), because we pass that value to selectInterface()
 * to effectively force all block accesses on a "dynamic" bus to use function calls.
 */
Bus.TYPE = {
    STATIC:     0,
    DYNAMIC:    1
};

Bus.CLASSES["Bus"] = Bus;
