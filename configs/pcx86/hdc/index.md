---
layout: page
title: PC Hard Drive Types
permalink: /configs/pcx86/hdc/
redirect_from:
  - /disks/pcx86/drives/
  - /disks/pcx86/drives/10mb/
  - /disks/pcx86/drives/20mb/
  - /disks/pcx86/drives/47mb/
  - /disks/pcx86/drives/68mb/
---

Pre-built PCx86 hard drive images generally use one of the following sizes:

  - [10Mb](10mb/)
  - [20Mb](20mb/)
  - [47Mb](47mb/)
  - 68Mb

Support is also being added for ATAPI CD-ROM drives.  Since ATAPI support was
built on top of the ATA specification (originally introduced with the IBM PC AT),
it requires a PC AT (or newer) machine configuration.

  - [PC AT with ATAPI CD-ROM Support](/machines/pcx86/ibm/5170/vga/cdrom/)

### IBM PC XT Drive Types

The IBM PC XT BIOS supported 4 predefined drive types:

  - Type 0: 306 cylinders, 2 heads, 17 sectors/track (5,326,848 bytes)
  - Type 1: 375 cylinders, 8 heads, 17 sectors/track (26,112,000 bytes)
  - Type 2: 306 cylinders, 6 heads, 17 sectors/track (15,980,544 bytes)
  - Type 3: 306 cylinders, 4 heads, 17 sectors/track (10,653,696 bytes or [10Mb]({{ site.github.pages }}/configs/pcx86/hdc/10mb))

Generally, our PC XT machines use 10Mb drives, configured as XT drive type 3.  Such drives can also
be used in our PC AT machines, but they must be configured as AT drive type 1 instead (see below).

### IBM PC AT Drive Types

The IBM PC AT introduced a new drive controller and defined many new drive types.  You can find a listing of them
in the PCjs [HDC](/machines/pcx86/lib/hdc.js) component (see **aDriveTypes**).

Generally, our PC AT machines use four common sizes, which correspond to the following AT drive types:

  - Type 1: 306 cylinders, 4 heads, 17 sectors/track (10,653,696 bytes or [10Mb]({{ site.github.pages }}/configs/pcx86/hdc/10mb))
  - Type 2: 615 cylinders, 4 heads, 17 sectors/track (21,411,840 bytes or [20Mb]({{ site.github.pages }}/configs/pcx86/hdc/20mb))
  - Type 4: 940 cylinders, 8 heads, 17 sectors/track (65,454,080 bytes or 62Mb)
  - Type 5: 940 cylinders, 6 heads, 17 sectors/track (49,090,560 bytes or [47Mb]({{ site.github.pages }}/configs/pcx86/hdc/47mb))

Note that PC XT drive type 3 and PC AT drive type 1 have identical [10Mb](10mb/) disk geometry, which is why you'll find
both PC XT and PC AT machines here using the same 10Mb disk image.

Similarly, PC AT drive types 1, 2, and 5 match the drive types defined by the COMPAQ DeskPro 386, so those machines
can use the same [10Mb](10mb/), [20Mb](20mb/), and [47Mb](47mb/) disk images.

### COMPAQ DeskPro 386 Drive Types

For drives larger than the PC XT and PC AT drive types listed above, we generally use a
[COMPAQ DeskPro 386](/machines/pcx86/compaq/deskpro386/) machine and COMPAQ drive type 4,
which specifies 1023 cylinders, not 940, yielding a drive capacity of [68Mb]({{ site.github.pages }}/configs/pcx86/hdc/68mb)).

For example, the [Microsoft Windows 95](/software/pcx86/sys/windows/win95/4.00.950/) machine uses
a COMPAQ DeskPro 386 with a 68Mb drive.

See the complete list of [COMPAQ DeskPro 386 Drive Types](/machines/pcx86/compaq/deskpro386/#fixed-disk-drive-parameter-table-values) for more details.
