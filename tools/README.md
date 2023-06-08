---
layout: page
title: PCjs Tools
permalink: /tools/
---

## DiskImage.js

[DiskImage.js](diskimage/) is a JavaScript command-line application that reads/writes PCjs v2 disk images, using the [DiskInfo](../machines/pcx86/modules/v3/diskinfo.js) module to parse the data.  It supersedes the older PCjs [DiskDump](old/diskdump/) utility.

## FileImage.js

[FileImage.js](fileimage/) is a JavaScript command-line application that reads/writes PCjs file images, producing JSON-encoded versions of binary files (eg, ROM images).  It supersedes the older PCjs [FileDump](old/filedump/) utility.

## PC.js

[PC.js](pcjs/) is a JavaScript command-line application that allows you to start a "headless" PCjs machine with all TTY (eg, INT 0x10) output redirected to your console.

## Assorted Modules

I've also written a few JavaScript modules for use in command-line tools:

  - [BASConvert.js](basconvert/), a library to convert IBM PC BASIC program files to plain-text
  - [StreamZip.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/streamzip.js), an improved version of the [node-stream-zip](https://www.npmjs.com/package/node-stream-zip) package
  - [Structure.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/structure.js), a helper class for defining and reading on-disk structures
  - [LegacyZip.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/legacyzip.js), a decompression library used by `StreamZip` that supports:
      - Packed files (ARC compression format #3)
      - Squeezed files (ARC compression format #4)
      - Crunched files (ARC compression formats #5, #6, and #7)
      - Crushed files (ARC compression format #8)
      - Squashed files (ARC compression format #9)
      - Shrinked files (ZIP compression format #1)
      - Reduced files (ZIP compression formats #2, #3, #4, and #5)
      - Imploded files (ZIP compression format #6)
      - Deflated files (ZIP compression format #8)
 

The combination of `StreamZip` with `LegacyZip` should be able to decompress *any* old ARC or ZIP archive, so test it out with the new `--arc` and `--zip` options in the [DiskImage](https://github.com/jeffpar/pcjs/tree/master/tools/diskimage) utility, and if you find one that doesn't work, [let me know](mailto:Jeff@pcjs.org).

## Miscellaneous Tools

There are a variety of small [miscellaneous](https://github.com/jeffpar/pcjs/tree/master/tools/misc) JavaScript command-line scripts that I've written over the years to help generate and test pieces of PCjs.
