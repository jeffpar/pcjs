---
layout: post
title: Limited Support for XDF Diskettes
date: 2014-10-28 11:00:00
category: Releases
permalink: /blog/2014/10/28/
---

[PCjs v1.15.7](https://github.com/jeffpar/pcjs/releases/tag/v1.15.7) adds support for the
[XDF Diskette Format](http://www.os2museum.com/wp/the-xdf-diskette-format/), which was used in
[PC DOS 7.00](/disks/pcx86/dos/ibm/7.00/).

However, this support is referred to as "fake" XDF support, because it requires using JSON disk images created
by DiskDump *without* the experimental "--xdf" option, which is an option that attempts to encode XDF sectors as they
existed on the original diskettes (ie, with varying lengths and non-standard sector IDs).

"Fake" XDF support works by using conventional 80-track disk images with 23 sectors/track.  No standard PC floppy disk
format ever used 23 sectors/track, but in this case, by distributing the XDF track data across 23 conventional 512-byte
sectors, the PC DOS 7.00 Setup code that reads XDF disks succeeds.  This was probably one of several fall-back options
built into the PC DOS XDF code.

*[@jeffpar](https://jeffpar.com)*  
*October 28, 2014*
