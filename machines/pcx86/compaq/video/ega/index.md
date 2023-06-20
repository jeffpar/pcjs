---
layout: page
title: COMPAQ Enhanced Color Graphics Board (EGA)
permalink: /machines/pcx86/compaq/video/ega/
redirect_from: /devices/pcx86/video/compaq/ega/
---

Our COMPAQ [EGA ROM BIOS (Rev B)](000412-001B/COMPAQ-EGA-001B.json5) comes from [bitsavers](http://bitsavers.trailing-edge.com/pdf/compaq/firmware/000412-001B_EGA/):

	cd 000412-001B
	fileimage.js --file=http://bitsavers.trailing-edge.com/pdf/compaq/firmware/000412-001B_EGA/108281-001.bin --output=COMPAQ-EGA-001B.json5 --comments

We also have COMPAQ [EGA ROM BIOS (Rev E)](000412-001E/COMPAQ-EGA-001E.json5), courtesy of Monty McGraw, a member of the Compaq Deskpro 386-16 electronics design team:

	cd 000412-001E
	fileimage.js --file=archive/EGABIOSrevE.bin --output=COMPAQ-EGA-001E.json5 --comments

And COMPAQ [EGA ROM BIOS (Rev G)](000412-001E/COMPAQ-EGA-001E.json5), also courtesy of Monty McGraw:

	cd 000412-001G
	fileimage.js --file=archive/Compaq-EGA-106633-003-1987.BIN --output=COMPAQ-EGA-001G.json5 --comments

All PCjs ROM images are JSON files created with the PCjs [FileImage](/tools/fileimage/) utility, which supports a variety of file formats and includes the ability to embed symbols from a PCjs MAP file.

### Font Information

As noted in [video.js](/machines/pcx86/modules/v2/video.js), the Video component needs to know where the card's
font data is located:

	For EGA cards, in the absence of any parameters, we assume that we're receiving the original
	IBM EGA ROM, which stores its 8x14 font data at 0x2230 as one continuous sequence; the total size
	of the 8x14 font is 0xE00 bytes.
	
	At 0x3030, there is an "ALPHA SUPPLEMENT" table, which contains 15 bytes per row instead of 14,
	because each row is preceded by one byte containing the corresponding ASCII code; there are 20
	entries in the supplemental table, for a total size of 0x12C bytes.
	
	Finally, at 0x3160, we have the 8x8 font data (also known as the thicker "double dot" CGA font);
	the total size of the 8x8 font is 0x800 bytes.  No other font data is present in the EGA ROM;
	the thin 5x7 "single dot" CGA font is notably absent, which is fine, because we never loaded it for
	the MDA/CGA either.
	
	TODO: Determine how the supplemental table is used and whether we need to add some "run-time"
	font generation to support it (as opposed to "init-time" generation, which is all we do now).
	There's probably a similar need for user-defined fonts; for now, they're simply not supported.

For reference, here are the first 0x80 bytes at offset 0x2230 from this ROM, which should contain the font data
for the first 9 8x14 characters:

	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // 0x00002230 ................
	0x7E,0x81,0xA5,0x81,0x81,0xBD,0x99,0x81,0x7E,0x00,0x00,0x00,0x00,0x00,0x7E,0xFF, // 0x00002240 ~.......~.....~.
	0xDB,0xFF,0xFF,0xC3,0xE7,0xFF,0x7E,0x00,0x00,0x00,0x00,0x00,0x00,0x6C,0xFE,0xFE, // 0x00002250 ......~......l..
	0xFE,0xFE,0x7C,0x38,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x38,0x7C,0xFE,0x7C, // 0x00002260 ..|8........8|.|
	0x38,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x18,0x3C,0x3C,0xE7,0xE7,0xE7,0x18,0x18, // 0x00002270 8...............
	0x3C,0x00,0x00,0x00,0x00,0x00,0x18,0x3C,0x7E,0xFF,0xFF,0x7E,0x18,0x18,0x3C,0x00, // 0x00002280 ........~..~....
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x18,0x3C,0x3C,0x18,0x00,0x00,0x00,0x00,0x00, // 0x00002290 ................
	0xFF,0xFF,0xFF,0xFF,0xFF,0xE7,0xC3,0xC3,0xE7,0xFF,0xFF,0xFF,0xFF,0xFF,0x00,0x00, // 0x000022A0 ................

Happily, COMPAQ provided excellent compatibility with IBM's EGA ROM, because if you compare the above font data to [IBM's EGA Font Data](/machines/pcx86/ibm/video/ega/#font-information), you'll see that it matches.

However, any card where the ROM font data is in a non-standard location can still be used.  You simply add the 8x14 and 8x8 font data offsets to the ROM component's *notify* attribute.

For example, here's how we deal with the font data offsets used by the IBM VGA:

```xml
<rom id="romVGA" addr="0xc0000" size="0x6000" file="IBM-VGA.json5" notify="videoVGA[0x378d,0x3f8d]"/>
```
