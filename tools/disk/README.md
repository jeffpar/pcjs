## PCjs Disk Images

PCjs 2.0 disk images are JSON objects with the following properties:

  - *imageInfo*: an object describing the type of disk (eg, "CHS") and other characteristics
  - *volTable*: an Array of VolInfo objects, one for each logical FAT volume on the disk (optional)
  - *fileTable*: an Array of FileInfo objects, one for each file across all FAT volumes on the disk (optional)
  - *diskData*: an Array of sector data; for "CHS" disk images, the data is organized as an array of cylinders, heads, and sectors

Older (PCjs 1.0) disk images were basically just an Array of sector data (what is now called the *diskData* object), without
any other information.  Such disk images are still supported, but all the disk images now stored on PCjs disk servers,
such as [diskettes.pcjs.org](https://diskettes.pcjs.org), have been converted to the 2.0 format.

## PCjs Disk Utilities

[DiskImage](modules/diskimage.js) is a Node command-line application that imports the new PCjs 2.0
[DiskInfo](../../machines/pcx86/modules/diskinfo.js) module for reading and writing [PCjs Disk Images](#pcjs-disk-images).

[DiskImage](modules/diskimage.js) supersedes the older PCjs 1.0 [DiskDump](lib/diskdump.js) utility.

## Building PCjs Disk Images from IMG files

To build a PCjs disk image, such as this [PC DOS 2.00 diskette](https://diskettes.pcjs.org/pcx86/sys/dos/ibm/2.00/PCDOS200-DISK1.json),
from an IMG file:

    node modules/diskinfo.js /diskettes/pcx86/sys/dos/2.00/archive/PCDOS200-DISK1.img PCDOS200-DISK1.json

In addition to IMG files, DiskImage also includes (experimental) support for PSI (PCE Sector Image) files, which can in
turn be built from Kryoflux RAW files.  Here are the basic steps, using tools from [PCE](http://www.hampa.ch/pce/):

 1. From the Kryoflux RAW files, create a PFI ("PCE Flux Image") file
 2. Next, create a PRI ("PCE Raw Image") file, with the flux reversal pulses converted to bits
 3. From the PRI file, create a PSI ("PCE Sector Image") file
 4. From the PSI file, create a JSON-encoded disk image file, using the PCjs `DiskImage` utility

which translates to these commands (using a 360K PC diskette named "disk1" as an example):

    pfi disk1.00.0.raw disk1.pfi
    pfi disk1.pfi -p double-step -r 600000 -p decode pri disk1.pri
    pri disk1.pri -c 40-99 -p delete disk1.pri
    pri disk1.pri -p decode mfm disk1.psi
    node modules/diskinfo.js disk1.psi disk1.json

## Building PCjs Disk Images from directories

To build a [VisiCalc diskette](https://diskettes.pcjs.org/pcx86/app/other/visicalc/1981/VISICALC-1981.json)
from a directory containing VC.COM, specify the name of the directory, including a trailing slash; eg:

    node modules/diskinfo.js /diskettes/pcx86/app/other/visicalc/1981/archive/VISICALC-1981/ VISICALC-1981.json

By default, the diskette will be given an 11-character volume label derived from the directory name (eg, "VISICALC-19");
however, you can use `--label` to specify your own label (eg, `--label=VISICALC81`), or use `--label=none` to suppress
the volume label.

The smallest standard PC diskette format that can accomodate all the files will be automatically selected, but you can
specify a different target size (in Kb) using `--target=N`, where N is 160, 180, 320, 360, 720, 1200, or 1440.  For
example, if your diskette *must* work with PC DOS 1.0, use `--target=160`.

Another useful option is `--normalize`, which will transform the line-endings in all recognized text files from LF to CR/LF;
a recognized text file is any file ending with one of these extensions (".MD", ".ME", ".BAS", ".BAT", ".ASM", ".LRF", ".MAK",
".TXT", or ".XML") AND which contains only 7-bit ASCII characters -- since some files, like ".BAS" files, can contain either
ASCII or non-ASCII data.

## Examining PCjs Disk Images

To get a DOS-compatible directory listing of a disk image:

    node modules/diskinfo.js PCDOS200-DISK1.json --list

To display all the unused bytes of a disk image:

    node modules/diskinfo.js PCDOS200-DISK1.json --list=unused

NOTE: Unused bytes are different than (ie, are a superset of) free bytes.  Free bytes are always measured in terms of unused clusters,
multiplied by the cluster size, whereas unused bytes are the combination of all completely unused clusters *plus* any partially unused
clusters.  Being able to see all the unused data on a disk can be a valuable forensic tool.

TODO: Update the unused byte report to include unused bytes, if any, in all FAT sectors and directory sectors.

To extract all the files from a disk image:

    node modules/diskinfo.js PCDOS200-DISK1.json --extract

To extract a specific file from a disk image:

    node modules/diskinfo.js PCDOS200-DISK1.json --extract=COMMAND.COM

To dump a specific (C:H:S) sector from a disk image:

    node modules/diskinfo.js PCDOS200-DISK1.json --dump=0:0:1

To dump multiple (C:H:S) sectors from a disk image track, follow the C:H:S values with a sector count; eg:

    node modules/diskinfo.js PCDOS200-DISK1.json --dump=0:0:1:4
