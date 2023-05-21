---
layout: post
title: Improved PC DOS 7.00 Support
date: 2014-10-23 11:00:00
category: Releases
permalink: /blog/2014/10/23/
---

[PCjs v1.15.6](https://github.com/jeffpar/pcjs.v1/releases/tag/v1.15.6) is a fairly minor update that fixes a few
Floppy Drive Controller (FDC) issues and one CPU emulation bug that prevented [PC DOS 7.00](/software/pcx86/sys/dos/ibm/7.00/)
from working properly.

There are also some Debugger improvements; for example, if you turn on "fdc" and "int" messages in the
Debugger using the "m fdc on" and "m int on" commands, all FDC (INT 0x13) software interrupts will be logged,
including descriptions and register values.

PC DOS 7.00 still can't be setup from its specially-formatted 1.84Mb
[XDF](http://www.os2museum.com/wp/the-xdf-diskette-format/) distribution disk images, "PC DOS 7.00 (Disk 2)"
through "PC DOS 7.00 (Disk 5)", so your best bet is to boot from the 1.44Mb "PC DOS 7.00 (1.44M Boot)".

Note that you must also use a fairly new 80286 machine configuration, like this
[8Mhz IBM PC AT](/machines/pcx86/ibm/5170/ega/1024kb/rev3/debugger/machine.xml),
in order to use 1.44Mb diskette images; previous models did not support 3.5-inch diskette drives, unless they had been
retrofitted with a newer [BIOS](/machines/pcx86/ibm/5170/rom/).
