---
layout: page
title: IBM Pascal Compiler 1.00
permalink: /software/pcx86/lang/ibm/pascal/1.00/
redirect_from: /disks/pcx86/tools/ibm/pascal/1.00/
machines:
  - id: ibm5150
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/cga/256kb/machine.xml
    autoGen: true
    autoMount:
      B:
        name: "IBM Pascal 1.00 (Disk 1)"
    autoType: $date\r$time\rB:\rDIR\r
---

When the IBM Pascal Compiler 1.00 was originally released in August 1981, the standard IBM PC contained at most
two diskette drives (no hard drive), so compiling Pascal programs required using a "scratch disk" in drive B:
and then inserting each of the three 160Kb Pascal Compiler disks into drive A: to complete the compilation and
linking process.  Moreover, the user was required to copy LINK.EXE from their PC DOS 1.00 diskette (the only version
of PC DOS available at the time) to the third disk.

To make life a bit simpler (but only a bit), we've combined the contents of all three diskettes onto a 360Kb "Combined"
diskette, along with LINK.EXE from PC DOS 1.00.  Here's the [DiskDump]({{ site.github.pages }}/tools/diskdump/) command used to produce the
diskette image:

	diskdump --path="archive/PAS1/PAS1.EXE;PASKEY;ENTX6S.ASM;FILKQQ.INC;FILUQQ.INC;archive/PAS2/PAS2.EXE;
	archive/PAS3/PASCAL;PASCAL.LIB;../../../../dos/ibm/1.00/archive/PCDOS100/LINK.EXE" --format=json --label=PASCAL100
	--output=PASCAL100-DISKS.json --manifest 

It's important to use the original PC DOS linker, because not all linkers will process IBM Pascal 1.00 object files
properly.  Given this dependency, it's odd that IBM didn't simply distribute the PC DOS 1.00 linker on the third IBM
Pascal disk; there was certainly room for it, so it wouldn't have cost anything, and it would have reduced the risk
of using a newer and potentially incompatible linker.

NOTE: We do not have copies of the three original distribution disks.  However, based on information in IBM's Pascal
Compiler documentation, we were able to recreate the contents of the disks.  The file dates were arbitrarily selected
from the August 1981 time frame.

{% include machine.html id="ibm5150" %}

### Directory of IBM Pascal 1.00 (Disk 1)

     Volume in drive A is DISK1
     Directory of A:\

    ENTX6S   ASM      8320   8-31-81  12:00p
    FILKQQ   INC      5347   8-31-81  12:00p
    FILUQQ   INC      1513   8-31-81  12:00p
    PAS1     EXE     81408   8-31-81  12:00p
    PASKEY            2816   8-31-81  12:00p
            5 file(s)      99404 bytes
                           59904 bytes free

### Directory of IBM Pascal 1.00 (Disk 2)

     Volume in drive A is DISK2
     Directory of A:\

    PAS2     EXE     99200   8-31-81  12:00p
            1 file(s)      99200 bytes
                           60928 bytes free

### Directory of IBM Pascal 1.00 (Disk 3)

     Volume in drive A is DISK3
     Directory of A:\

    PASCAL              50   8-31-81  12:00p
    PASCAL   LIB     83456   8-31-81  12:00p
            2 file(s)      83506 bytes
                           76288 bytes free

### Directory of IBM Pascal 1.00 (Combined)

     Volume in drive A is PASCAL100
     Directory of A:\

    PAS1     EXE     81408   8-31-81  12:00p
    PASKEY            2816   8-31-81  12:00p
    ENTX6S   ASM      8320   8-31-81  12:00p
    FILKQQ   INC      5347   8-31-81  12:00p
    FILUQQ   INC      1513   8-31-81  12:00p
    PAS2     EXE     99200   8-31-81  12:00p
    PASCAL              50   8-31-81  12:00p
    PASCAL   LIB     83456   8-31-81  12:00p
    LINK     EXE     43264   8-04-81  12:00a
            9 file(s)     325374 bytes
                           31744 bytes free
