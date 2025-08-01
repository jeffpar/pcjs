---
layout: page
title: PCjs Tools
permalink: /tools/
---

### PC.js

[PC.js](pc/) is a JavaScript command-line application that allows you to start a "headless" PCjs machine with all TTY (eg, INT 0x10) output redirected to your console, along with an automatically generated hard disk containing all the files in your current (or other specified) directory.

### DX.js

[DX.js](dx/) is a JavaScript command-line utility that can read/list/test/extract the contents of assorted archives and disk images, and can recursively process any number of archives/images within other archives/images.  It also offers a variety of output options, like the ability to produce spreadsheets (CSV files), as well as upload scripts for use with the Internet Archive.

### BASFile.js

[BASFile.js](modules/basfile.js) is a [module](https://github.com/jeffpar/pcjs/tree/master/tools/modules/basfile.js) used by the [BASX](basx/) page to convert binary and/or encrypted IBM PC BASIC program files to plain-text, with any CP437 non-ASCII characters converted to UTF-8.

The module is also used by [DX.js](dx/) when extracting `.BAS` files with `--out utf8`, and by [DiskImage.js](diskimage/) when extracting `.BAS` files with `--normalize`.

### DiskImage.js

[DiskImage.js](diskimage/) is a JavaScript command-line application that reads/writes PCjs v2 disk images, using the [DiskInfo](../machines/pcx86/modules/v3/diskinfo.js) module to parse the data.  It supersedes the older PCjs [DiskDump](old/diskdump/) utility.

### FileImage.js

[FileImage.js](fileimage/) is a JavaScript command-line application that reads/writes PCjs file images, producing JSON-encoded versions of binary files (eg, ROM images).  It supersedes the older PCjs [FileDump](old/filedump/) utility.

### Other Modules

Here are a few other JavaScript modules I've written for the project:

  - [StreamZip.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/streamzip.js), an improved version of the [node-stream-zip](https://www.npmjs.com/package/node-stream-zip) package
  - [Structure.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/structure.js), a helper class for defining and reading on-disk structures
  - [LegacyZip.js](https://github.com/jeffpar/pcjs/tree/master/tools/modules/legacyzip.js), a decompression library used by `StreamZip.js`

The `LegacyZip.js` library adds support for:

  - Packed files (ARC compression format #3)
  - Squeezed files (ARC compression format #4)
  - Crunched files (ARC compression formats #5, #6, and #7)
  - Crushed files (ARC compression format #8)
  - Squashed files (ARC compression format #9)
  - Shrinked files (ZIP compression format #1)
  - Reduced files (ZIP compression formats #2, #3, #4, and #5)
  - Imploded files (ZIP compression format #6)
  - Deflated files (ZIP compression format #8)

The [DiskImage.js](diskimage/) `--arc` and `--zip` options use `StreamZip.js` along with `LegacyZip.js` to decompress old ARC or ZIP archives, and the `--normalize` option uses `BASFile.js` to convert old IBM PC BASIC files to plain-text during the extraction/decompression process.

If you find any ARC, ZIP, or BAS files can't be decompressed or converted, [let me know](mailto:Jeff@pcjs.org).

### Miscellaneous Scripts

There are a variety of small [miscellaneous](https://github.com/jeffpar/pcjs/tree/master/tools/misc) JavaScript command-line scripts that I've written over the years to help generate and test pieces of PCjs.
