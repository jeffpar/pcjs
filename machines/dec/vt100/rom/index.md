---
layout: page
title: DEC VT100 ROMs
permalink: /machines/dec/vt100/rom/
redirect_from:
  - /devices/pc8080/rom/vt100/
  - /devices/pc8080/rom/
---

### 8080 Firmware (8Kb)

The DEC VT100 Terminal used four 2Kb ROMs to store all the firmware used by the 8080 processor.
The combined contents of those ROMs have been stored as an 8Kb JSON image in [VT100](VT100.json5).

As Trammell Hudson's [VT100 Page](https://trmm.net/VT100) explains:

> There are four 8316E ROM chips for the 8080 CPU on the logic board. Since they are custom mask ROMs,
Digital was able to have a different chip-select bit pattern and avoided having separate NOT gates on
the inputs.  Note that the schematic appears to be incorrect -- E56 is the low order, and E40 is the
high order address bits.

He then describes the memory map as follows:

	ROM chip  CS1 (20)  A11/CS2 (18)  A12/CS3 (21)  Mapped address
	E40       H         H             H             0x1800
	E45       H         L             H             0x1000
	E52       H         H             L             0x0800
	E56       H         L             L             0x0000

The above PCB chip locations correspond to the following [DEC ROMs](/machines/dec/rom/):

  - E56: [23-061E2.bin](https://web.archive.org/web/20140723115846/http://www.dunnington.u-net.com/public/DECROMs/23-061E2.bin)
  - E52: [23-032E2.bin](https://web.archive.org/web/20140723115846/http://www.dunnington.u-net.com/public/DECROMs/23-032E2.bin)
  - E45: [23-033E2.bin](https://web.archive.org/web/20140723115846/http://www.dunnington.u-net.com/public/DECROMs/23-033E2.bin)
  - E40: [23-034E2.bin](https://web.archive.org/web/20140723115846/http://www.dunnington.u-net.com/public/DECROMs/23-034E2.bin)

And sure enough, concatenating those four DEC ROMs:

	cat 23-061E2.bin 23-032E2.bin 23-033E2.bin 23-034E2.bin > VT100.bin

produces a perfect match for Trammell Hudson's [VT100.bin](http://trmm.net/images/2/20/VT100.bin).

### Character Generator (2Kb)

The VT100 also used one 2Kb character generator ROM, which is stored in [23-018E2](23-018E2.json5).
The ROM contains 128 rows of character data, 16 bytes per character.  Only 10 of each of the 16 bytes are used.

To understand the format of the character data, let's take a look at the data for the letter "A", which has an ASCII code
of 65 (0x41).  That means the data for "A" should start at offset 0x41 * 0x10, or 0x410.  Here's the corresponding line from
[23-018E2](23-018E2.json5):

	0x10,0x28,0x44,0x82,0xFE,0x82,0x82,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // 0x00000410 .(D.............

and if we display the data as bits instead of bytes:

	. . . 1 . . . .     // 0x10
	. . 1 . 1 . . .     // 0x28
	. 1 . . . 1 . .     // 0x44
	1 . . . . . 1 .     // 0x82
	1 1 1 1 1 1 1 .     // 0xFE
	1 . . . . . 1 .     // 0x82
	1 . . . . . 1 .     // 0x82
	. . . . . . . .     // 0x00
	. . . . . . . .     // 0x00
	. . . . . . . .     // 0x00

it should be clear how the shape of the character is defined.  However, the character generator ROM doesn't tell the whole story,
because the VT100's display circuitry has a few additional tricks up its sleeve.

Since the ROM contains only 8 bits of data for each character row, and character cells are effectively 10x10 (or 9x10 in 132-column
mode), there is a natural gap between adjacent characters.  However, when horizontal line-drawing characters are used, the VT100 wants
those characters to seamlessly connect with one another, so if the final bit in any row of character data is set, the VT100 will
"replicate" that bit across the rest of cell. 

As page 4-52 of DEC's [VT100 Technical Manual (July 1982)](http://bitsavers.informatik.uni-stuttgart.de/pdf/dec/terminal/vt100/EK-VT100-TM-003_VT100_Technical_Manual_Jul82.pdf)
explains:

> Data, coming either from the screen RAM for scan 1 or the line buffer for scans 2 through 10, becomes part of an
address to a character generator ROM. (See Figure 4-6-4, Character Generator Example.)  The rest of the address comes
from a scan counter in the DC012 control chip.  The scan counter addresses the ROM according to which of the ten scans
is to be displayed.  The 4-bit scan counter skips over the other 6 possible addresses to the ROM, so the ROM contains
data in only 10 out of 16 locations.  The output of the ROM is eight bits that represent the pattern of sequential
dots to be displayed for that character on that scan.  The eight bits enter the video shift register, a serializer
that converts the eight parallel bits into a one-bit-wide stream.  An extra flip-flop stores the last bit so it can
be output to the stream two or three extra times (depending on line length) to fill the intercharacter space.

Also, VT100 circuitry includes a "Dot Stretcher" to make vertical lines appear as thick as horizontal lines.  If you look
at page 4-76 of DEC's [VT100 Technical Manual (July 1982)](http://bitsavers.informatik.uni-stuttgart.de/pdf/dec/terminal/vt100/EK-VT100-TM-003_VT100_Technical_Manual_Jul82.pdf),
you'll see the effect of the VT100's Dot Stretcher.  Here's how DEC illustrates it:

	20 dots for 2 characters ("Ap") in 80-col mode
	
	 0  . . . . . . . . . . . . . . . . . . . .
	 1  . . . . 1 . . . . . . . . . . . . . . .
	 2  . . . 1 . 1 . . . . . . . . . . . . . .
	 3  . . 1 . . . 1 . . . . 1 . 1 1 1 1 . . .
	 4  . 1 . . . . . 1 . . . 1 1 . . . . 1 . .
	 5  . 1 1 1 1 1 1 1 . . . 1 1 . . . . 1 . .
	 6  . 1 . . . . . 1 . . . 1 . 1 1 1 1 . . .
	 7  . 1 . . . . . 1 . . . 1 . . . . . . . .
	 8  . . . . . . . . . . . 1 . . . . . . . .
	 9  . . . . . . . . . . . 1 . . . . . . . .
	
	Actual characters displayed after dot stretching
	
	 0  . . . . . . . . . . . . . . . . . . . .
	 1  . . . . 1 1 . . . . . . . . . . . . . .
	 2  . . . 1 1 1 1 . . . . . . . . . . . . .
	 3  . . 1 1 . . 1 1 . . . 1 1 1 1 1 1 1 . .
	 4  . 1 1 . . . . 1 1 . . 1 1 1 . . . 1 1 .
	 5  . 1 1 1 1 1 1 1 1 . . 1 1 1 . . . 1 1 .
	 6  . 1 1 . . . . 1 1 . . 1 1 1 1 1 1 1 . .
	 7  . 1 1 . . . . 1 1 . . 1 1 . . . . . . .
	 8  . . . . . . . . . . . 1 1 . . . . . . .
	 9  . . . . . . . . . . . 1 1 . . . . . . .

The [PCx80 Video](/machines/pcx80/lib/video.js) *createFontVariation()* function takes both the "dot replication" and "dot stretching"
features into account (along with underlining and reverse video parameters) when converting the character generator ROM data into fonts.   

### Disassembling the 8080 Firmware

Following in the footsteps of [vt100romhax](http://vt100romhax.tumblr.com/post/90697428973/the-vt100-memory-map-and-8080-disassembly),
I disassembled the ROM, using `dz80` from [D52](http://www.brouhaha.com/~eric/software/d52/) (here's the [manual](http://www.bipom.com/documents/dis51/d52manual.html)):

	dz80 -80 VT100.bin

This produced VT100.d80, which I renamed to [VT100.asm](VT100.asm).  I fixed one `dz80` bug, replacing references to
`X2000` with `2000h`, and then hand-merged most of the comments from [haxrom.d80](https://github.com/phooky/VT100-Hax/blob/master/ROMs/haxrom.d80).
This required some selectivity, because I didn't want to inadvertently include any of [phooky's](https://github.com/phooky)
screensaver-related mods to the ROM.

Finally, I verified that reassembling [VT100.asm](VT100.asm) with [asm8080](https://github.com/begoon/asm8080) produced the
original VT100.bin; after adding the correct number of `nop` instructions to the end to the source file, the binaries matched.

The other advantage of reassembling the code is that the resulting [VT100.txt](VT100.txt) makes it easy to export comments
and other symbolic information to [VT100.map](VT100.map), which can then be included in the [VT100](VT100.json5) ROM dump
and passed on to the PCx80 Debugger.  Here are the rebuild steps:

	asm8080 -lVT100.txt VT100.asm
	grep -E "[0-9]+ [0-9A-D]+.*;;" VT100.txt | sed -E "s/ *[0-9]+ ([0-9A-F]+).*;(;.*)/     \1   .   \2/" > VT100.map
	fileimage --file=VT100.bin --format=bytes --output=VT100.json5 --comments --overwrite

You can omit `--comments` from the [FileImage](/tools/fileimage/) command to reduce the size of the [VT100](VT100.json5) file.

Some [VT100.asm](VT100.asm) clean-up remains, because there are still chunks of data that were incorrectly disassembled as code.
From a reassembly standpoint, it doesn't matter too much, because all the 8080 instructions unambiguously reassemble into their
original binary patterns, but from a readability standpoint, it's a nuisance.
