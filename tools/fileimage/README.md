---
layout: page
title: PCjs FileImage Utility
permalink: /tools/fileimage/
---

[FileImage](fileimage.js) is a Node command-line application that reads/writes PCjs file images, producing JSON-encoded versions of binary files (eg, ROM images).  It supersedes the older PCjs [FileDump](../old/filedump/) utility.

### PCjs ROM Image Files

Some early ("v0") examples of PCjs ROM image files include the Ohio Scientific [System ROM](../../machines/osi/c1p/rom/system.hex), which were little more than text files with 2-digit hex byte values separated by whitespace.

However, ROM image files were soon changed to a JSON-like format ("v1").  Examples include the updated Ohio Scientific [System ROM](../../machines/osi/c1p/rom/system.json5) and PCx86 ROMs like the IBM PC [ROM BIOS](../../machines/pcx86/ibm/5150/rom/bios/1981-04-24/PCBIOS-REV1.json5).

Strictly speaking, those files weren't -- and still aren't -- JSON-compliant, which is why they now use *.json5* file extensions.  PCjs parses them using the JavaScript `eval()` function inside a `try/catch` block, since `JSON.parse()` complains about hexadecimal constants, comments, and other perfectly acceptable JavaScript constructs.  The JSON specification was unnecessarily strict, so it's good to see the world finally embracing [JSON5](https://json5.org).

PCjs v2 ROM image files will be more formalized.  At a minimum, they should contain a `width` value (eg, 8, 16, 32) and a `values` array.  Other optional properties include endianness (`littleEndian` defaults to *true*), load address (`addr`), the origin of the ROM (`file` name and/or `source` URL), and so on.  Here's an example from the [TI-57](../../machines/ti/ti57/rev0/ti57.json) emulation:

```json
{
  "addr": 0,
  "size": 2048,
  "width": 13,
  "littleEndian": false,
  "file": "ti57be.bin",
  "source": "http://seanriddle.com/ti57.bin",
  "values": [
    4623,4386,5106,7051,3246,6152,5813,5628,5805,7051,4386,3246,7911,5132,1822,6798,
    ...
  ]
}
```

In the above example, the ROM definition is actually included inside the [ti57.json](../../machines/ti/ti57/rev0/ti57.json) machine configuration, rather than as a separate file.  The approach will vary with the machine, but the principles are the same.  ROM image files should be JSON-compliant by default, unless you use non-default options, such as octal constants, comments, etc.

### To Be Continued...

More information about using [FileImage](fileimage.js) and the "v2" ROM image file format will be added here as the utility and the file format specification evolves.

In the meantime, check out the 'Usage" comments for the *main()* function in [FileImage](fileimage.js).
