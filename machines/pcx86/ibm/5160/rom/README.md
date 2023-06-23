---
layout: page
title: IBM PC XT Model 5160 ROMs
permalink: /machines/pcx86/ibm/5160/rom/
redirect_from: /devices/pcx86/rom/5160/
---

IBM PC XT (Model 5160) BIOS ROMs include:

- [Model 5160: Aug 16, 1982](bios/1982-08-16/XTBIOS-REV0.json5) (included with [IBM BASIC C1.10](basic/BASIC110.json5))
- [Model 5160: Nov 08, 1982](bios/1982-11-08/XTBIOS-REV1.json5) (included with [IBM BASIC C1.10](basic/BASIC110.json5))
- [Model 5160: Jan 10, 1986](bios/1986-01-10/XTBIOS-REV2.json5) (includes [IBM BASIC C1.10](basic/BASIC110.json5))
- [Model 5160: May 09, 1986](bios/1986-05-09/XTBIOS-REV3.json5) (includes [IBM BASIC C1.10](basic/BASIC110.json5))

and the following expansion card ROMs:

- [Xebec Hard Drive Controller ROM](hdc/)

In general, IBM BASIC ROM images are 32Kb and IBM BIOS ROM images are 8Kb, and together they provide 40Kb of contiguous
read-only memory, with the BASIC ROM spanning physical addresses 0xF6000-0xFDFFF and the BIOS ROM spanning addresses
0xFE000-0xFFFFF.

However, starting with Model 5160 ROM images dated **Jan 10, 1986**, our ROM images are actually 64Kb images that
span addresses 0xF0000-0xFFFFF and include IBM BASIC C1.10 at offset 0x6000 (physical address 0xF6000), so there's no
need to load the BASIC ROM separately.  That trend continued with the IBM PC AT Model 5170, whose ROM images are also
64Kb and all contain IBM BASIC C1.10.

Apparently, even the first Model 5160 was socketed for two 32Kb ROMs, but it came with an 8Kb ROM in the first socket,
so that ROM (containing the first 8Kb of IBM BASIC C1.10) appeared at multiple addresses: 0xF0000, 0xF2000, 0xF4000,
and 0xF6000.  None of our Model 5160 machine configurations emulate that layout, but it could easily be done,
by extracting the first 8Kb of IBM BASIC C1.10 into a separate image and explicitly mapping it at each of those four
addresses.

See this [diagram](http://www.minuszerodegrees.net/5160/misc/5160_memory_layout_of_bios_and_basic.jpg) for a more
visual description of the Model 5160's ROM layout.
