---
layout: page
title: COMPAQ Video Graphics Controller (VGA)
permalink: /machines/pcx86/compaq/video/vga/
redirect_from: /devices/pcx86/video/compaq/vga/
---

This is the COMPAQ Video Graphics Controller Board, one of the earliest VGA boards COMPAQ released
for its DeskPro 386 line.

[<img src="https://www.pcjs.org/devices/pcx86/video/compaq/vga/109360-001/Compaq_VGA_109360-001-640.jpg" alt="COMPAQ VGA Board"/>](https://www.pcjs.org/devices/pcx86/video/compaq/vga/109360-001/Compaq_VGA_109360-001.jpg)

It was featured in the February 16, 1988 of PC Magazine (p.188).  At that time, it retailed for $599, and it was described
as "the sharpest, fastest IBM-standard video board you can slide into your PC."  The article goes on to say:

> The Compaq [Video Graphics Controller Board] is the first truly hardware-compatible VGA board with
register-level support for all 17 video modes. It's also the first video board from a major manufacturer
that uses a full 16-bit interface....

> Per the VGA standard, Compaq's board offers 640- by 480-pixel all-points-addressable graphics resolution
in 16 colors, as well as 256 colors from a palette of 262,144 at 320- by 200-pixel resolution.

> Based on a Paradise Systems VLSI VGA chip and an Inmos DAC, the board includes 256K RAM soldered to it.
Relying on surface-mounted components for just about everything except its BIOS and the aforementioned chips,
the entire board is just 9 inches long and XT height. Although it will function in an 8-bit expansion slot,
it achieves its top speed only when its 16-bit interface is put into play.

> The card-retaining bracket of the board holds only the female DB-15 of the IBM VGA system. This connector,
coupled with the analog output of the board, means that the [board] will function only with VGA-style monitors.

> An extra edge connector at the top of the board matches the video expansion available on the IBM PS/2
Display Adapter card, electrically but not physically compatible with the VGA Feature Connector of PS/2
computers.

> To your system, the board looks like an EGA adapter--that is, you run the appropriate setup procedure for
setting CMOS memory as if it were an EGA card. The two jumpers on the board (its only hardware adjustments)
alter its base address for matchng unusual systems and ordinarily require no change.

> In testing, the Compaq Board proved itself functionally compatible with the IBM PS/2 Display Adapter but
faster, because of its 16-bit interface. On an ordinary AT, it nearly achieved the display speeds of the
internal VGA system of a stock PS/2 (which has a clock speed advantage over the AT).

> Although Compaq claims that this board is designed specifically for its own machines, particularly the
DeskPro 386/20, it works great with non-Compaq machines as well. In fact, with this board, Compaq gives you
a way of getting the sharpest and fastest graphics without abandoning your commitment to the PC standard.
As such, this board is in perfect accord with the Compaq philosophy, and it may be the best way available
for mating a VGA-style monitor and VGA graphics to your AT.

A copy of the board's [VGA ROM BIOS](109360-001/COMPAQ-VGA-1988-05-18.json) was created by [dumping](/machines/pcx86/compaq/deskpro386/rom/#dumping-the-roms)
the contents of each EPROM chip to a *.hex* file, and then merging the *.hex* files with the following
[FileDump]({{ site.github.pages }}/tools/filedump/) command:

	cd 109360-001
	filedump --file=109793-002.hex --merge=109794-002.hex --output=COMPAQ-VGA-1988-05-18.json

For a more human-readable dump, use the `--comments` option:

	filedump --file=109793-002.hex --merge=109794-002.hex --output=1988-05-18.dump --comments

The COMPAQ VGA ROM BIOS concludes with the usual copyright string and author initials:

	Copyright COMPAQ Computer Corporation, 1982, 1983, 1984, 1985, 1986, 1987, 1988
	RWS*PNA*NPB*DJC*CAB*ALL*
	V4C 05COMPAQ
	05/18/88

Four of the authors -- **RWS**, **NPB**, **DJC**, and **CAB** -- are also listed as authors of the
[DeskPro 386 ROM BIOS](/machines/pcx86/compaq/deskpro386/rom/).

An older version of the VGA ROM BIOS, [1987-10-27.json](109360-001/COMPAQ-VGA-1987-10-27.json), is also available online.  It comes
from an [earlier revision](http://bitsavers.trailing-edge.com/pdf/compaq/firmware/109360-001_VGA/) of the same board, with
the same part number (109360-001).

	cd 109360-001
	filedump --file=http://bitsavers.trailing-edge.com/pdf/compaq/firmware/109360-001_VGA/109328-002.BIN --merge=http://bitsavers.trailing-edge.com/pdf/compaq/firmware/109360-001_VGA/109327-002.BIN --output=COMPAQ-VGA-1987-10-27.json
