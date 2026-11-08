---
layout: page
title: No Video Adapter (Stub ROM)
permalink: /machines/pcx86/ibm/video/none/
---

### No Video Stub ROM

This isn't real hardware.  An IBM PC or PC XT can run without a video adapter: when SW1 switches 5 and 6 are both ON (the setting an EGA uses, since it has its own BIOS), POST skips its video tests.  An IBM PC AT has no such setting: when its CMOS display type is 00 (the EGA setting), POST requires a video ROM, and without one, it reports a 162 configuration error, and any other display type without a matching adapter reports a display adapter error.  Either way, POST then waits for the F1 key, which a machine with no display can't prompt for.

[NOVIDEO.rom](NOVIDEO.rom) is a 512-byte option ROM for address 0xC0000, containing only the option ROM signature (55h AAh), a length of 1 (512 bytes), a RETF at the initialization entry point, an identification string, and a checksum byte.  POST finds the signature, so a CMOS display type of 00 is valid, and it then leaves INT 10h pointing at its dummy IRET, so BIOS video calls do nothing.  A PC AT with this ROM and no video adapter can boot an operating system that uses only its serial ports (eg, a VT100 terminal on COM1).

To (re)build the JSON-encoded ROM, run the following [FileImage](/tools/fileimage/) command:

	fileimage.js --file=NOVIDEO.rom --output=NOVIDEO.json5 --comments

and then restore its "@note" property.
