---
layout: page
title: PCjs DiskImage Utility
permalink: /tools/diskimage/
redirect_from:
  - /modules/diskdump/
---

[DiskImage.js](https://github.com/jeffpar/pcjs/blob/master/tools/diskimage/diskimage.js) is a Node command-line application that reads/writes PCjs v2 disk images, using the [DiskInfo.js](https://github.com/jeffpar/pcjs/blob/master/machines/pcx86/modules/v3/diskinfo.js) PCx86 machine module to parse the data, and it supersedes the older PCjs [DiskDump](../old/diskdump/) utility.

### PCjs Disk Images

PCjs v2 (version 2.x) disk images are JSON objects with the following properties:

  - *imageInfo*: an object describing the type of disk (eg, "CHS") and other characteristics
  - *volTable*: an array of VolInfo objects, one for each logical FAT volume on the disk (optional)
  - *fileTable*: an array of FileInfo objects, one for each file across all FAT volumes on the disk (optional)
  - *diskData*: arrays of sector data; for CHS disk images, the data is organized as an array of sector objects within an array of heads within an array of cylinders

Sector objects contain the raw sector data, using 32-bit signed decimal values, and for sectors that contain data from
a file in *fileTable*, the object will also contain an index into *fileTable*, along with the data's offset within the file.

For example, look at the [PC DOS 2.00 diskette](https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json) and examine the following sector object:

    {"c":6,"h":0,"s":1,"l":512,[-402170023,521076672,...],"f":2,"o":1024}

The *f* property is a zero-based index into *fileTable* that refers to the following file entry:

    {"hash":"f0314c0d450f343fdc6d1778be088ffc","path":"/COMMAND.COM","attr":"0x20","date":"1983-03-08 12:00:00","size":17664}

and the *o* property indicates that sector's byte offset (1024) within COMMAND.COM.  Having all this information
about the FAT file system encoded in the disk image makes it easy to observe low-level I/O and immediately know which portions
of which files are being accessed.  Other tasks, such as cataloging the contents of disk images, locating identical files,
finding files older or newer than a certain date, or extracting other information about the disks or their files, become much
simpler as well.

Unusual sectors, like those used in copy-protection schemes, may have non-standard sector IDs or additional properties that
simulate special behavior; for example, sectors with a *dataError* property can trigger a read or write failure at a certain
point within the sector.  Some of these properties have been discussed in PCjs [blog posts](https://www.pcjs.org/blog/2019/05/05/)
and may be documented more fully at a later date.

Older PCjs v1 (version 1.x) disk images were basically just an array of CHS sector data (what is now called the *diskData* object),
without any other information.  Such disk images are still supported, but all the disk images now stored on PCjs disk servers,
such as [diskettes.pcjs.org](https://diskettes.pcjs.org), have been converted to the v2 format.

### Building PCjs Disk Images from IMG files

To build a PCjs disk image, such as this [PC DOS 2.00 diskette](https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json), from an IMG file:

    diskimage.js PCDOS200-DISK1.img PCDOS200-DISK1.json

In addition to IMG files, DiskImage also includes (experimental) support for PSI (PCE Sector Image) files, which can in
turn be built from Kryoflux RAW files.  Here are the basic steps, using tools from [PCE](http://www.hampa.ch/pce/):

 1. From the Kryoflux RAW files, create a PFI ("PCE Flux Image") file
 2. Next, create a PRI ("PCE Raw Image") file, with the flux reversal pulses converted to bits
 3. From the PRI file, create a PSI ("PCE Sector Image") file
 4. From the PSI file, create a JSON-encoded disk image file, using `diskimage.js`

which translates to these commands (using a 360K PC diskette named "disk1" as an example):

    pfi disk1.00.0.raw disk1.pfi
    pfi disk1.pfi -p double-step -r 600000 -p decode pri disk1.pri
    pri disk1.pri -c 40-99 -p delete disk1.pri
    pri disk1.pri -p decode mfm disk1.psi
    diskimage.js disk1.psi disk1.json

### Building PCjs Disk Images from Directories

To build a [VisiCalc diskette](https://miscdisks.pcjs.org/pcx86/app/other/visicalc/1981/VISICALC-1981.json)
from a directory containing VC.COM, specify the name of the directory, including a trailing slash, like so:

    diskimage.js /miscdisks/pcx86/app/other/visicalc/1981/archive/VISICALC-1981/ VISICALC-1981.json

Alternatively, use the `--dir` option:

    diskimage.js --dir=/miscdisks/pcx86/app/other/visicalc/1981/archive/VISICALC-1981 VISICALC-1981.json

By default, the diskette will be given an 11-character volume label derived from the directory name (eg, "VISICALC-19");
however, you can use `--label` to specify your own label (eg, `--label=VISICALC81`), or use `--label=none` to suppress
the volume label.

The smallest standard PC diskette format that can accommodate all the files will be automatically selected, but you can
specify a different target size using `--target=N`, where N is 160K, 180K, 320K, 360K, 720K, 1200K, or 1440K.  For example,
if your diskette *must* work with PC DOS 1.0, use `--target=160K`.  Sizes are in kilobytes by default, so the `K` is optional.

You can also create a hard disk image by specifying a capacity in megabytes (Mb) rather than kilobytes (Kb).  For example,
to create a 10Mb hard disk image, use `--target=10M`.  `diskimage.js` should be able to *read* any DOS-formatted disk image,
but its ability to *create* new hard disk images is currently limited to 10Mb (larger formats will be coming soon).

Another useful option is `--normalize`, which will transform the line-endings in all recognized text files from LF to CR/LF;
a recognized text file is any file ending with one of these extensions (.MD, .ME, .BAS, .BAT, .ASM, .LRF, .MAK, .TXT, OR .XML)
AND which contains only 7-bit ASCII characters -- since some files, like .bas files, can contain either ASCII or non-ASCII
data.  The list of recognized text file extensions is likely to grow over time.

### Building PCjs Disk Images from ZIP (and ARC) files

There are many large software collections where the diskette contents have been archived as ZIP files rather than as disk images, and in theory, it's trivial to `unzip` them into separate folders and then use `diskimage.js` to build new images from those folders (see `--dir` above).

For example, I originally recreated all the [PC-SIG Library](https://www.pcjs.org/software/pcx86/sw/misc/pcsig08/0001/) diskette images from the "PC-SIG Library Eighth Edition" CD-ROM files stored at [cd.textfiles.com](http://cd.textfiles.com/pcsig08/).  Some of the diskettes on the CD-ROM had been completely archived as single ZIP files -- probably because the diskettes contained filenames that were not allowed on CD-ROM -- so I used `unzip` on macOS to extract those ZIP files to folders, and then recreated disk images from those folders.

However, this process doesn't always work well.  [DISK0798](https://www.pcjs.org/software/pcx86/sw/misc/pcsig08/0501/#directory-of-pc-sig-library-disk-0798) highlights a few issues that have already been [discussed](https://github.com/jeffpar/pcjs/commit/17e0a2f9e46140fce42f11de8f5fa678b2a3bfe5) on GitHub.

First, the original order of the filenames was not preserved.  Modern operating systems (eg, macOS) list files alphabetically, and as a result, the files on the recreated diskettes were sorted alphabetically as well.

Second, while the ZIP archives appeared to more-or-less preserve non-ASCII filenames, `unzip` did not.  IBM PCs used a character set now known as [Code Page 437](https://en.wikipedia.org/wiki/Code_page_437) (*CP437*), which included a variety of line-drawing characters and other symbols that `unzip` failed to translate to their modern (*UTF-8*) counterparts.

To resolve all these issues, I updated `diskimage.js` with an option (`--zip`) to read ZIP archives directly.  I started with an NPM package called [node-stream-zip](https://www.npmjs.com/package/node-stream-zip), which is essentially a module that understands the ZIP file format, identifies all the compressed files inside the ZIP file, and uses Node's built-in *zlib* functionality to decompress them.

Unfortunately, I quickly discovered that *zlib* could not decompress the contents of many old ZIP files, because instead of the now-popular *Deflate* compression algorithm, older ZIP files used compression methods such as *Shrink*, *Reduce*, and *Implode*.  So I imported *node-stream-zip* into PCjs as [StreamZip](../modules/streamzip.js), modernized it, and then extended it with a new decompression module named [LegacyZip](../modules/legacyzip.js), which I wrote by hand-translating the excellent C code at [hanshq.net](https://www.hanshq.net/zip2.html) into JavaScript.

Here's an example of `--zip` in action:

    diskimage.js --zip=/Volumes/PCSIG_13B/BBS/DISK0042.ZIP --output=DISK0042.json --verbose

    DiskImage v3.00
    Copyright © 2012-2024 Jeff Parsons <Jeff@pcjs.org>
    Options: --zip=/Volumes/PCSIG_13B/BBS/DISK0042.ZIP --output=DISK0042.json --verbose
    reading: /Volumes/PCSIG_13B/BBS/DISK0042.ZIP

    Filename        Length   Method      Size  Ratio   Date       Time       CRC
    --------        ------   ------      ----  -----   ----       ----       ---
    MSVIBM.EXE      131392   Implode    73651    44%   1990-02-19 19:30:30   ac9163ba
    MSR300.UPD       20338   Implode     8627    58%   1990-02-19 19:35:12   61372fc6
    MSKERM.HLP       35263   Implode    13799    61%   1990-02-19 19:39:16   1c61d95c
    MSKERM.BWR       27985   Implode    12132    57%   1990-02-19 19:42:28   353a76ed
    MSKERMIT.INI      4760   Implode     2309    51%   1990-02-19 20:07:20   00e884a5
    GO.BAT              40   Shrink        38     5%   1980-01-01 06:00:08   75d72756
    FILE0042.TXT      3870   Implode      896    77%   1990-11-12 01:46:16   3a817bda
    GO.TXT            1002   Implode      307    69%   1990-11-09 06:21:54   e64455e9

    processing DISK0042: 327680 bytes (checksum -1217186896, hash bba045788185bc8284f5e4cde0929b70)
    writing DISK0042.json...

The `--verbose` option generates the `PKZIP`-style file listing, displaying the individual file names, compressed and uncompressed file sizes, compression ratio, etc.

In fact, creating a disk image is entirely optional; you can use `diskimage.js` to simply examine the contents of `ZIP` file:

    diskimage.js --zip=/Volumes/PCSIG_13B/BBS/DISK0042.ZIP --verbose

To simplify dealing with large collections of files, I also added an `--all` option:

    diskimage.js --all="/Volumes/PCSIG_13B/**/*.ZIP" --verbose

That command will locate *all* matching `ZIP` files and process each one with any other options you specify (eg, `--verbose` to display their contents).  `--all` also supports file extensions `JSON` and `IMG`; `--disk` is assumed for any file ending with one of those extensions, whereas `--zip` is assumed for any file ending with a `ZIP` extension.

If you want to create a disk image for every `ZIP` file:

    diskimage.js --all="/Volumes/PCSIG_13B/**/*.ZIP" --output=tmp --type=img

`--output` specifies the output folder and `--type` specifies the output file type (either `IMG` or `JSON`).  Each output file will have the same basename as the `ZIP` file.  You can use also "%d" anywhere in the `--output` value to represent the directory of the corresponding input file (eg, `--output=%d`, `--output=%d/tmp`, etc).

Any `ZIP` files *inside* disk images can be automatically expanded during disk image processing as well; just add the new `--expand` option.  Each `ZIP` file will be replaced with a folder of the same name, and that folder will contain the entire uncompressed contents of the archive; the original `ZIP` file will *not* be included in the disk image:

    diskimage.js --all="/Volumes/PCSIG_13B/**/*.ZIP" --expand --output=tmp

Finally, support for the ARC file format (ZIP's predecessor) is now available.  Just use `--arc` instead of `--zip`, or specify input files with `.ARC` extensions instead of `.ZIP`.  All the same capabilities apply.

### Extracting Files from PCjs Disk Images

You can extract the contents of a single disk image to your current directory, or to a specific directory using `--extdir`:

    diskimage.js DISK0001.IMG --extract
    diskimage.js DISK0001.IMG --extract --extdir=tmp

You can also extract the contents of an entire collection of disk images, placing the contents of each either in the same directory as the original disk image or in a specific directory:

    diskimage.js --all="*.IMG" --extract --extdir=%d
    diskimage.js --all="*.IMG" --extract --extdir=tmp

You can also expand any `ZIP` files during the extraction process, by including the `--expand` option:

    diskimage.js --all="*.IMG" --extract --expand --extdir=tmp

Also, while the `--normalize` option was originally created to "normalize" files *read* from the host (eg, to convert LF to CR/LF in text files), it can also be used during extraction now, when files are being *written* to the host.

For example, if you want any filenames with CP437 characters to be created properly on the host, or you want the contents of any CP437 text files, BASIC files, etc, to be stored in readable form on the host, use the `--normalize` option along with the `--extract` option; eg:

    diskimage.js --all="/Volumes/PCSIG_13B/**/*.ZIP" --extract --expand --normalize --extdir=tmp

In addition to converting line-endings back from CR/LF to LF, `--normalize` will also convert any tokenized `.BAS` files to plain-text UTF-8 files on the host, as well as decrypt any `.BAS` files that have been "protected" by `BASIC` with the `P` option of the `SAVE` command.

The `--output` option is available with all of the above commands as well, but that option only affects disk image creation, not file extraction.  If you don't want any disk images created at the same time, don't use `--output`.

### Examining PCjs Disk Images

A disk image must either be the first argument or specified using the `--disk` option.  It can either be a local disk image:

    diskimage.js /diskettes/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json

or a remote disk image:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json

Note that the PCjs web server automatically maps certain implicit diskette paths, such as `/diskettes`, to specific disk servers,
such as `https://diskettes.pcjs.org`.  The list of implicit paths for PC disks currently includes (but is not limited to):

  - [/diskettes](https://github.com/jeffpar/pcjs-diskettes)
  - [/gamedisks](https://github.com/jeffpar/pcjs-gamedisks)
  - [/miscdisks](https://github.com/jeffpar/pcjs-miscdisks)
  - [/pcsigdisks](https://github.com/jeffpar/pcjs-pcsigdisks)
  - [/harddisks](https://harddisks.pcjs.org)
  - [/cdroms/cds001](https://cds001.pcjs.org)

However, `diskimage.js` does not perform any local-to-remote mapping.  Instead, whenever it sees an implicit path, it will look for that path inside the `/disks` folder in the PCjs repository, which is the recommended location for all PCjs disk repositories when [running PCjs locally](https://github.com/jeffpar/pcjs/wiki/Using-a-Local-Web-Server).  If you want `diskimage.js` to use a remote image, you must provide a complete URL.

### Examples of Common DiskImage Operations

To get a DOS-compatible directory listing of a disk image:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --list

To list only files matching a file specification (eg, `*.EXE`):

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --list="*.EXE"

To display all the unused bytes of a disk image (JSON-encoded disk images only):

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --list=unused

NOTE: Unused bytes are a superset of free bytes.  Free bytes are always measured in terms of unused clusters, multiplied by the cluster size, whereas unused bytes are the combination of all completely unused cluster space *plus* any partially unused cluster space.  Being able to see all the unused bytes on a disk can be useful for studying disk image usage, or simply making sure that a disk is free of any unwanted data.

TODO: Update the unused byte report to include unused bytes, if any, in all FAT sectors and directory sectors.

To extract all the files from a disk image:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --extract

To extract a specific file from a disk image:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --extract=COMMAND.COM

To display the contents of a specific file in a disk image:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/3.00/PCDOS300-DISK2.json --type=VDISK.LST

To extract files from a disk image into a specific directory (eg, tmp):

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --extract --extdir=tmp

To dump a specific (C:H:S) sector from a disk image:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --dump=0:0:1

To dump multiple (C:H:S) sectors from a disk image track, follow the C:H:S values with a sector count; eg:

    diskimage.js https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json --dump=0:0:1:4
