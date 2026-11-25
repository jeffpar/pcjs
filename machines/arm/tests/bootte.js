#!/usr/bin/env node
/**
 * @fileoverview Boots the Palm Tungsten|E ROM on the PCjs ARM and OMAP devices, without a browser
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2026 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * Usage: node bootte.js [options]
 *
 *      --rom=FILE          ROM image (default is ../../palm/pilot/roms/Palm-Tungsten-E-nor.bin)
 *      --cycles=N          millions of cycles to run (default is 1000)
 *      --cps=N             millions of cycles per second (default is 126, the speed of the real CPU's clock)
 *      --shot=FILE         save the LCD's contents as a PNG file when done
 *      --timeline=N        report activity every N million cycles
 *      --events=N          maximum number of "first access" events to display (default is 50)
 *      --tap=X,Y,AT[,MS]   tap the screen at pixel (X,Y), AT million cycles into the run (may be repeated)
 *      --key=ID,AT[,MS]    press a button (eg, "power", "datebook", "select"), AT million cycles into the run
 *      --iolog=FROM,TO     log every OMAP register access between FROM and TO million cycles
 *      --trace=N           when done, trace the next N instructions
 *      --profile=N         when done, execute N more instructions and report where they were, and what I/O they did
 *      --dasm=ADDR[,N]     when done, disassemble N instructions at ADDR (hex)
 *      --load=FILE         restore the machine's state from a JSON file (saved with --save) before running
 *      --save=FILE         save the machine's state (as a browser would in localStorage) to a JSON file when done
 *
 * This is a bring-up tool: it reports the first access to every unimplemented OMAP register and to every page of
 * unmapped memory, along with every exception other than IRQs and SWIs.
 */

import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

globalThis.window = globalThis;

const dirTests = path.dirname(fileURLToPath(import.meta.url));
const dirMachines = path.join(dirTests, "../../");
const { default: Device }   = await import(dirMachines + "modules/v3/device.js");
const { default: Time }     = await import(dirMachines + "modules/v3/time.js");
const { default: Bus }      = await import(dirMachines + "modules/v3/bus.js");
const { default: RAM }      = await import(dirMachines + "modules/v3/ram.js");
const { default: ROM }      = await import(dirMachines + "modules/v3/rom.js");
const { default: CPUARM }   = await import(dirMachines + "arm/modules/v3/cpuarm.js");
const { default: DbgARM }   = await import(dirMachines + "arm/modules/v3/dbgarm.js");
const { default: OMAP }     = await import(dirMachines + "arm/modules/v3/omap.js");
const { default: TSC2102 }  = await import(dirMachines + "palm/pilot/modules/v3/tsc2102.js");
const { default: Tungsten } = await import(dirMachines + "palm/pilot/modules/v3/tungsten.js");

let args = process.argv.slice(2);
let getArgs = (name) => args.filter((arg) => arg.startsWith("--" + name + "=")).map((arg) => arg.slice(name.length + 3));
let getArg = (name, def) => getArgs(name)[0] || def;
const MILLION = 1000000;
let hex = (n, cch = 8) => (n >>> 0).toString(16).padStart(cch, "0");

let id = "te";
let romData = fs.readFileSync(getArg("rom", path.join(dirMachines, "palm/pilot/roms/Palm-Tungsten-E-nor.bin")));

let machine = new Device(id, id, {"class": "Machine"});
let nCyclesPerSecond = +getArg("cps", 126) * MILLION;
let time = new Time(id, "clock", {"class": "Time", "cyclesPerSecond": nCyclesPerSecond});
let bus = new Bus(id, "bus", {"class": "Bus", "type": "static", "addrWidth": 32, "dataWidth": 8, "blockSize": 4096, "littleEndian": true});
new ROM(id, "rom", {"class": "ROM", "addr": 0, "size": romData.length, "bus": "bus", "values": Array.from(romData)});
new RAM(id, "ram", {"class": "RAM", "addr": 0x10000000, "size": 0x02000000, "bus": "bus"});
let cpu = new CPUARM(id, "cpu", {"class": "CPUARM", "busMemory": "bus"});
let omap = new OMAP(id, "omap", {"class": "OMAP", "bus": "bus"});
new TSC2102(id, "tsc", {"class": "TSC2102"});
let board = new Tungsten(id, "board", {"class": "Tungsten", "bus": "bus"});
let dbg = new DbgARM(id, "debugger", {"class": "DbgARM"});

/**
 * Collect everything worth knowing about: messages from the OMAP device (eg, unimplemented registers, UART output),
 * accesses to unmapped memory, and unexpected exceptions.
 */
let events = [], nExceptions = {}, pagesUnmapped = new Set();
let addEvent = (s) => events.push((time.getCycles() / MILLION).toFixed(1).padStart(8) + "M: " + s);
omap.printf = (...a) => {
    if (typeof a[0] == "number") a.shift();
    addEvent(omap.sprintf(...a).trimEnd());
};
let isMapped = (addr) => {
    addr >>>= 0;
    return addr < 0x12000000 || addr >= 0x20000000 && addr < 0x20030000 || addr >= 0xe1000000 && addr < 0xe1020000 || addr >= 0xfffb0000;
};
let checkAccess = (sAccess, addr, value) => {
    if (cpu.fMMU) addr = cpu.translateDebug(addr) ?? addr;
    if (isMapped(addr) || pagesUnmapped.has(sAccess + (addr >>> 12))) return;
    pagesUnmapped.add(sAccess + (addr >>> 12));
    addEvent(hex(cpu.regPCLast) + ": unmapped " + sAccess + " " + hex(addr) + (value != undefined? " (" + hex(value) + ")" : ""));
};
for (let name of ["readByte", "readWord", "readLong"]) {
    let fn = cpu[name].bind(cpu);
    cpu[name] = (addr) => (checkAccess("read", addr), fn(addr));
}
for (let name of ["writeByte", "writeWord", "writeLong"]) {
    let fn = cpu[name].bind(cpu);
    cpu[name] = (addr, value) => (checkAccess("write", addr, value), fn(addr, value));
}
/**
 * Keep track of how many cycles the CPU spends halted, so that we can report how busy it is.
 */
let nCyclesHalted = 0, execute = cpu.execute.bind(cpu), halt = cpu.halt.bind(cpu);
cpu.halt = () => {
    nCyclesHalted += cpu.nCyclesRemain;
    halt();
};
cpu.execute = (nCycles) => {
    if (cpu.fHalted && !cpu.intLines) nCyclesHalted += nCycles;
    execute(nCycles);
};
let enterException = cpu.enterException.bind(cpu);
cpu.enterException = (vector, mode, addrReturn, fFIQ) => {
    let name = {4: "UND", 8: "SWI", 12: "PABT", 16: "DABT", 24: "IRQ", 28: "FIQ"}[vector];
    nExceptions[name] = (nExceptions[name] || 0) + 1;
    if (name != "SWI" && name != "IRQ" && nExceptions[name] <= 5) {
        addEvent(hex(cpu.regPCLast) + ": " + name + " exception (FSR " + hex(cpu.cp15FSR, 2) + ", FAR " + hex(cpu.cp15FAR) + ")");
    }
    return enterException(vector, mode, addrReturn, fFIQ);
};

/**
 * Optional log of all OMAP register accesses (repeated accesses are collapsed)
 */
let iolog = getArg("iolog"), ioLast = "", ioRepeat = 0;
if (iolog) {
    let [from, to] = iolog.split(",").map((n) => +n * MILLION);
    let logIO = (s) => {
        let nCycles = time.getCycles();
        if (nCycles < from || nCycles > to) return;
        if (s == ioLast) {
            ioRepeat++;
            return;
        }
        if (ioRepeat) console.log("          (repeated %d times)", ioRepeat);
        ioLast = s;
        ioRepeat = 0;
        console.log("%sM: %s: %s", (nCycles / MILLION).toFixed(2).padStart(8), hex(cpu.regPCLast), s);
    };
    let readReg = omap.readReg.bind(omap), writeReg = omap.writeReg.bind(omap);
    omap.readReg = (addr, fPeek) => {
        let value = readReg(addr, fPeek);
        if (!fPeek) logIO("read  " + hex(addr) + " = " + hex(value));
        return value;
    };
    omap.writeReg = (addr, value) => {
        logIO("write " + hex(addr) + " = " + hex(value));
        return writeReg(addr, value);
    };
    /**
     * Log accesses to the DSP's address space, too.
     */
    let isDSP = (addr) => {
        if (cpu.fMMU) addr = cpu.translateDebug(addr) ?? addr;
        return (addr >>> 24) >= 0xe0 && (addr >>> 0) < 0xfffb0000? addr : 0;
    };
    for (let name of ["readByte", "readWord", "readLong"]) {
        let fn = cpu[name].bind(cpu);
        cpu[name] = (addr) => {
            let value = fn(addr), addrDSP = isDSP(addr);
            if (addrDSP) logIO(name + " " + hex(addrDSP) + " = " + hex(value));
            return value;
        };
    }
    for (let name of ["writeByte", "writeWord", "writeLong"]) {
        let fn = cpu[name].bind(cpu);
        cpu[name] = (addr, value) => {
            let addrDSP = isDSP(addr);
            if (addrDSP) logIO(name + " " + hex(addrDSP) + " = " + hex(value));
            return fn(addr, value);
        };
    }
}

/**
 * Scheduled input
 */
let actions = [];
for (let tap of getArgs("tap")) {
    let [x, y, at, ms] = tap.split(",").map(Number);
    actions.push({at: at * MILLION, fn: () => board.setPen(x, y, true)});
    actions.push({at: at * MILLION + (ms || 200) * nCyclesPerSecond / 1000, fn: () => board.setPen(x, y, false)});
}
for (let key of getArgs("key")) {
    let [idKey, at, ms] = key.split(",");
    actions.push({at: +at * MILLION, fn: () => board.setButton(idKey, true)});
    actions.push({at: +at * MILLION + (+ms || 200) * nCyclesPerSecond / 1000, fn: () => board.setButton(idKey, false)});
}
actions.sort((a, b) => a.at - b.at);

/**
 * renderLCD()
 *
 * @returns {{width: number, height: number, rgb: Buffer}|null}
 */
function renderLCD()
{
    let frame = omap.getLCDFrame();
    if (!frame) return null;
    let rgba = new Uint8Array(frame.width * frame.height * 4);
    let info = omap.renderLCD(rgba);
    if (!info) return null;
    let rgb = Buffer.alloc(info.width * info.height * 3);
    for (let i = 0, o = 0; i < rgba.length; i += 4) {
        rgb[o++] = rgba[i]; rgb[o++] = rgba[i + 1]; rgb[o++] = rgba[i + 2];
    }
    return {width: info.width, height: info.height, bpp: info.bpp, rgb};
}

/**
 * savePNG(file, image)
 *
 * @param {string} file
 * @param {{width: number, height: number, rgb: Buffer}} image
 */
function savePNG(file, image)
{
    let table = new Int32Array(256).map((_, n) => {
        for (let k = 0; k < 8; k++) n = (n & 1)? (0xedb88320 ^ (n >>> 1)) : (n >>> 1);
        return n;
    });
    let crc = (buf) => {
        let c = -1;
        for (let b of buf) c = table[(c ^ b) & 0xff] ^ (c >>> 8);
        return (c ^ -1) >>> 0;
    };
    let chunk = (type, data) => {
        let body = Buffer.concat([Buffer.from(type), data]), head = Buffer.alloc(4), tail = Buffer.alloc(4);
        head.writeUInt32BE(data.length);
        tail.writeUInt32BE(crc(body));
        return Buffer.concat([head, body, tail]);
    };
    let raw = Buffer.alloc((image.width * 3 + 1) * image.height);
    for (let y = 0; y < image.height; y++) {
        image.rgb.copy(raw, y * (image.width * 3 + 1) + 1, y * image.width * 3, (y + 1) * image.width * 3);
    }
    let ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(image.width, 0);
    ihdr.writeUInt32BE(image.height, 4);
    ihdr[8] = 8;
    ihdr[9] = 2;
    fs.writeFileSync(file, Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(raw)), chunk("IEND", Buffer.alloc(0))]));
}

/**
 * runBurst()
 *
 * @returns {number} (number of cycles executed)
 */
function runBurst()
{
    let nCycles = time.endBurst(time.doBurst(time.getCyclesPerRun()));
    time.notifyTimers(nCycles);
    time.fYield = false;
    return nCycles;
}

/**
 * Restore the machine's state, if requested, the same way the Machine device would (by calling every device's
 * onLoad() handler, in the same order that the devices were created).
 */
let fileLoad = getArg("load");
if (fileLoad) {
    let state = JSON.parse(fs.readFileSync(fileLoad, "utf8"));
    let fLoaded = machine.enumDevices((device) => !device.onLoad || device.onLoad(state));
    console.log("%s %s", fLoaded? "restored" : "unable to restore", fileLoad);
    if (!fLoaded) process.exit(1);
}

/**
 * Run the machine.
 */
let nCyclesTotal = +getArg("cycles", 1000) * MILLION, nCyclesTimeline = +getArg("timeline", 0) * MILLION;
let nCyclesRun = 0, nCyclesNext = nCyclesTimeline, hashLast = "", msStart = Date.now();
let snapshot = {SWI: 0, IRQ: 0, busy: 0};
time.fRunning = true;
while (nCyclesRun < nCyclesTotal) {
    while (actions.length && actions[0].at <= nCyclesRun) actions.shift().fn();
    let nCycles = runBurst();
    nCyclesRun += nCycles;
    if (nCyclesTimeline && nCyclesRun >= nCyclesNext) {
        let image = renderLCD();
        let hash = image? image.bpp + "bpp:" + hex(zlib.crc32? zlib.crc32(image.rgb) : image.rgb.reduce((a, b) => (a * 31 + b)|0, 0)) : "off";
        console.log("%sM: busy %s%%, %d SWIs, %d IRQs, LCD %s%s", (nCyclesRun / MILLION).toFixed(0).padStart(6),
            (100 * ((nCyclesRun - nCyclesHalted) - snapshot.busy) / nCyclesTimeline).toFixed(1).padStart(5), (nExceptions.SWI || 0) - snapshot.SWI, (nExceptions.IRQ || 0) - snapshot.IRQ,
            hash, hash != hashLast? " (changed)" : "");
        hashLast = hash;
        snapshot = {SWI: nExceptions.SWI || 0, IRQ: nExceptions.IRQ || 0, busy: nCyclesRun - nCyclesHalted};
        nCyclesNext += nCyclesTimeline;
    }
}
let ms = Date.now() - msStart;

let maxEvents = +getArg("events", 50);
console.log(events.slice(0, maxEvents).join("\n"));
if (events.length > maxEvents) console.log("(%d more events)", events.length - maxEvents);
console.log("\n%dM cycles (%d%% busy) in %dms; exceptions: %s; CPU %s", Math.round(nCyclesRun / MILLION), Math.round(100 * (nCyclesRun - nCyclesHalted) / nCyclesRun), ms, JSON.stringify(nExceptions), cpu.fHalted? "halted" : "running");
console.log(cpu.toString());
console.log("IH1: pending %s, masked %s; IH2: pending %s, masked %s", hex(omap.ih[0].irqs), hex(omap.ih[0].mask), hex(omap.ih[1].irqs), hex(omap.ih[1].mask));

let file = getArg("shot");
if (file) {
    let image = renderLCD();
    if (image) {
        savePNG(file, image);
        console.log("saved %s (%dx%d, %dbpp)", file, image.width, image.height, image.bpp);
    } else {
        console.log("the LCD is off");
    }
}

let fileSave = getArg("save");
if (fileSave) {
    let state = [];
    machine.enumDevices((device) => (device.onSave && device.onSave(state), true));
    let sState = JSON.stringify(state);
    fs.writeFileSync(fileSave, sState);
    console.log("saved %s (%d bytes)", fileSave, sState.length);
}

let dasm = getArg("dasm");
if (dasm) {
    let [sAddr, n] = dasm.split(",");
    let address = dbg.newAddress(parseInt(sAddr, 16)), s = "";
    for (let i = 0; i < (+n || 20); i++) s += dbg.unassemble(address, []);
    console.log(s);
}

let nTrace = +getArg("trace", 0);
if (nTrace) {
    let s = "";
    for (let i = 0; i < nTrace; i++) {
        if (cpu.fHalted) s += "(halted)\n";
        let address = dbg.newAddress(cpu.regPC | (cpu.fThumb? 1 : 0));
        s += dbg.unassemble(address, []).trimEnd().padEnd(60) + " ; R0=" + hex(cpu.regs[0]) + " R1=" + hex(cpu.regs[1]) + " R2=" + hex(cpu.regs[2]) + " R3=" + hex(cpu.regs[3]) + " CPSR=" + hex(cpu.getCPSR()) + "\n";
        cpu.execute(1);
    }
    console.log(s);
}

let nProfile = +getArg("profile", 0);
if (nProfile) {
    let pcs = new Map(), io = new Map(), nRun = 0;
    let count = (map, key) => map.set(key, (map.get(key) || 0) + 1);
    let top = (map, n) => [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([key, value]) => key + ":" + value).join(" ");
    let readReg = omap.readReg.bind(omap), writeReg = omap.writeReg.bind(omap);
    omap.readReg = (addr, fPeek) => {
        if (!fPeek) count(io, "R" + hex(addr));
        return readReg(addr, fPeek);
    };
    omap.writeReg = (addr, value) => {
        count(io, "W" + hex(addr));
        return writeReg(addr, value);
    };
    for (let i = 0; i < nProfile; i++) {
        if (cpu.fHalted && !cpu.intLines) {
            runBurst();
            continue;
        }
        count(pcs, hex(cpu.regPC & ~0x3f));
        nRun++;
        time.notifyTimers(time.endBurst(time.doBurst(1)));
    }
    console.log("profile of %d instructions:\n%s\nI/O: %s", nRun, top(pcs, 24), top(io, 32));
}
