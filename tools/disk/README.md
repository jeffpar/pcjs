## PCjs Disk Utilities

[DiskImage](modules/diskimage.js) is a Node command-line application that imports the new PCjs 2.0
[DiskImage](../../machines/pcx86/modules/diskimage.js) module for reading and writing [PCjs Disk Images](#pcjs-disk-images).
It supersedes the older PCjs 1.0 [DiskDump](lib/diskdump.js) utility.

### PCjs Disk Images

PCjs 2.0 disk images are JSON objects with the following properties:

  - *imageInfo*: an object describing the type of disk (eg, "CHS") and other characteristics
  - *volTable*: an Array of VolInfo objects, one for each logical FAT volume on the disk (optional)
  - *fileTable*: an Array of FileInfo objects, one for each file across all FAT volumes on the disk (optional)
  - *diskData*: an Array of sector data; for "CHS" disk images, the data is organized as an array of cylinders, heads, and sectors

Older (PCjs 1.0) disk images were basically just an Array of sector data (what is now called the *diskData* object), without
any other information.  Such disk images are still supported, but all the disk images now stored on PCjs diskette servers,
such as [diskettes.pcjs.org](https://diskettes.pcjs.org), have been converted to the 2.0 format.

### Building PCjs Disk Images from IMG files

To build a [PC DOS 2.00 diskette](https://diskettes.pcjs.org/pcx86/sdys/dos/ibm/2.00/PCDOS200-DISK1.json) from an IMG file:

    node modules/diskimage.js /diskettes/pcx86/sys/dos/2.00/archive/PCDOS200-DISK1.img PCDOS200-DISK1.json

### Building PCjs Disk Images from directories

To build a [VisiCalc diskette](https://diskettes.pcjs.org/pcx86/app/other/visicalc/1981/VISICALC-1981.json) from a directory containing VC.COM,
specify the name of the directory, including a trailing slash; eg:

    node modules/diskimage.js /diskettes/pcx86/app/other/visicalc/1981/VISICALC-1981/ VISICALC-1981.json

### Examining PCjs Disk Images

To get a DOS-compatible directory listing of a disk image:

    node modules/diskimage.js PCDOS200-DISK1.json --list

To display all the unallocated bytes of a disk image:

    node modules/diskimage.js PCDOS200-DISK1.json --list=unallocated

To extract all the files from a disk image:

    node modules/diskimage.js PCDOS200-DISK1.json --extract

To extract a specific file from a disk image:

    node modules/diskimage.js PCDOS200-DISK1.json --extract=COMMAND.COM

To dump a specific (C:H:S) sector from a disk image:

    node modules/diskimage.js PCDOS200-DISK1.json --dump=0:0:1

To dump multiple (C:H:S) sectors from a disk image track, following the C:H:S values with a sector count; eg:

    node modules/diskimage.js PCDOS200-DISK1.json --dump=0:0:1:4

