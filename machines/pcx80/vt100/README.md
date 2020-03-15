---
layout: page
title: DEC VT100 Terminal Demos
permalink: /machines/pcx80/vt100/
redirect_from: /devices/pc8080/machine/vt100/
machines:
  - id: vt100
    type: pcx80
    config: /configs/pcx80/xml/machine/vt100/machine.xml
---

This is a PCjs emulation of another 8080-based machine: the VT100 Terminal.

Unlike other VT100 emulators, it is not simply an emulation of VT100 protocols.  It is a simulation of the original VT100
machine, running the [VT100 Firmware](/machines/pcx80/vt100/rom/) inside the [PCx80](/machines/pcx80/) CPU emulator.

Admittedly, terminals aren't that useful in isolation, since they're designed to be connected to other (host) machines.
But once this PCjs VT100 Terminal simulation is fully operational, you can expect to see it used in conjunction with a variety
of other PCjs machines. 

[Debugger Configuration](debugger/) is available, along with demos of [Dual VT100 Terminals](dual/) and an
[IBM PC AT connected to a VT100](/machines/pcx86/ibm/5170/ega/vt100/).

{% include machine.html id="vt100" %}

VT100 Keys
----------

Function keys are mapped as follows:

- F1: PF1
- F2: PF2
- F3: PF3
- F4: PF4
- F6: BREAK
- F7: LINE FEED
- F8: NO SCROLL
- F9: SET-UP

From the SET-UP screen, you can press **4** to switch to LOCAL mode and verify local operation of most VT100
keys.  The following keys have special meaning inside SET-UP Mode.

### SET-UP Mode Keys

- 0: RESET
- 2: SET/CLEAR TAB
- 3: CLEAR ALL TABS
- 4: ONLINE/LOCAL
- 5: SET-UP A/B
- 6: TOGGLE FEATURE
- 7: TRANSMIT SPEED
- 8: RECEIVE SPEED
- 9: 80/132 COLUMNS
- SHIFT-S: Save SET-UP Features
- SHIFT-R: Restore SET-UP Features
