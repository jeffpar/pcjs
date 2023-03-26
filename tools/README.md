---
layout: page
title: PCjs Tools
permalink: /tools/
---

## DiskImage

[DiskImage](diskimage/) is a Node command-line application that reads/writes PCjs v2 disk images,
using the [DiskInfo](../machines/pcx86/modules/diskinfo.js) PCx86 machine module to parse the data, and it supersedes
the older PCjs v1 [DiskDump](misc/old/diskdump/lib/diskdump.js) utility.

## FileImage

[FileImage](fileimage/) is a Node command-line application that reads/writes PCjs file images, producing JSON-encoded versions of binary files (eg, ROM images).  It supersedes the older PCjs [FileDump](misc/old/filedump/lib/filedump.js) utility.
