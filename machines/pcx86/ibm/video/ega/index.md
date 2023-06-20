---
layout: page
title: IBM Enhanced Graphics Adapter (EGA)
permalink: /machines/pcx86/ibm/video/ega/
redirect_from: /devices/pcx86/video/ibm/ega/
---

### IBM EGA ROM

We have only one IBM EGA ROM revision, dated September 13, 1984.

To (re)build the JSON-encoded IBM EGA ROM with symbols, run the following [FileImage](/tools/fileimage/) command:

	fileimage.js --file=1984-09-13/IBM-EGA.rom --output=1984-09-13/IBM-EGA.json5 --comments
	
Any symbol information in the PCjs [MAP file](1984-09-13/IBM-EGA.map) will be automatically converted and appended to the dump of the ROM file.

### IBM EGA Font Information

As noted in [video.js](/machines/pcx86/modules/v2/video.js), the Video component needs to know where the card's font data is located:

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

For reference, here are the first 0x80 bytes at offset 0x2230 from this ROM, which contain the font data
for the first 9 8x14 characters:

	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00, // 0x00002230 ................
	0x7E,0x81,0xA5,0x81,0x81,0xBD,0x99,0x81,0x7E,0x00,0x00,0x00,0x00,0x00,0x7E,0xFF, // 0x00002240 ~.......~.....~.
	0xDB,0xFF,0xFF,0xC3,0xE7,0xFF,0x7E,0x00,0x00,0x00,0x00,0x00,0x00,0x6C,0xFE,0xFE, // 0x00002250 ......~......l..
	0xFE,0xFE,0x7C,0x38,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x10,0x38,0x7C,0xFE,0x7C, // 0x00002260 ..|8........8|.|
	0x38,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x18,0x3C,0x3C,0xE7,0xE7,0xE7,0x18,0x18, // 0x00002270 8...............
	0x3C,0x00,0x00,0x00,0x00,0x00,0x18,0x3C,0x7E,0xFF,0xFF,0x7E,0x18,0x18,0x3C,0x00, // 0x00002280 ........~..~....
	0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x18,0x3C,0x3C,0x18,0x00,0x00,0x00,0x00,0x00, // 0x00002290 ................
	0xFF,0xFF,0xFF,0xFF,0xFF,0xE7,0xC3,0xC3,0xE7,0xFF,0xFF,0xFF,0xFF,0xFF,0x00,0x00, // 0x000022A0 ................
