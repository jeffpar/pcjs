---
layout: page
title: PCjs Tools
permalink: /tools/
---

## BASCON.js

[BASCON.js](bascon/) is a JavaScript library that converts encrypted and/or binary IBM PC BASIC program files to plain-text; this library is built into the [DiskImage.js](diskimage/) command-line utility.

## DiskImage.js

[DiskImage.js](diskimage/) is a JavaScript command-line application that reads/writes PCjs v2 disk images, using the [DiskInfo](../machines/pcx86/modules/v3/diskinfo.js) module to parse the data.  It supersedes the older PCjs [DiskDump](old/diskdump/) utility.

## FileImage.js

[FileImage.js](fileimage/) is a JavaScript command-line application that reads/writes PCjs file images, producing JSON-encoded versions of binary files (eg, ROM images).  It supersedes the older PCjs [FileDump](old/filedump/) utility.

## PC.js

[PC.js](pcjs/) is a JavaScript command-line application that allows you to start a "headless" PCjs machine with all TTY (eg, INT 0x10) output redirected to your console.
