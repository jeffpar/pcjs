---
layout: page
title: IBM Video Graphics Array (VGA)
permalink: /machines/pcx86/ibm/video/vga/
redirect_from: /devices/pcx86/video/ibm/vga/
---

### IBM VGA ROM

We have only one IBM VGA ROM revision, dated October 27, 1986, from an IBM PS/2 Display Adapter.  Which, BTW,
has to be one of the *most* confusing product names ever, since the adapter was an 8-bit card designed for ISA
machines, *not* PS/2 machines.  

To (re)build the JSON-encoded [IBM-VGA](1986-10-27/IBM-VGA.json5) 1986-10-27 ROM, run the following [FileImage](/tools/fileimage/) command:

    fileimage.js --file=1986-10-27/IBM-VGA.rom --output=1986-10-27/IBM-VGA.json5 --comments

The disassembled contents of the 1986-10-27 ROM from the IBM PS/2 Display Adapter is available [here](1986-10-27/IBM-VGA.asm).
