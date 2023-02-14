---
layout: page
title: Norton Utilities 3.00
permalink: /software/pcx86/util/norton/3.00/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/512kb/machine.xml
    drives: '[{name:"PC-DOS 2.00 w/Tools (10Mb)",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-C400.json"},{name:"MS-DOS 1.x/2.x Source (10Mb)",type:3,path:"/harddisks/pcx86/10mb/MSDOS-SRC.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: "Norton Utilities 3.00 (1984-12-07)"
    autoStart: true
    autoType: $date\r$time\rB:\rDIR\r
---

[Norton Utilities 3.00 (1984-12-07)](#directory-of-norton-utilities-300-1984-12-07) is from the
[PCjs Software Archive](/software/pcjs/) and predates previously known copies of version 3.00.
Scans of the diskette and accompanying note from Peter Norton are provided [below](#diskette-photos).
Coincidentally, we acquired the diskette on December 7, 2018, exactly 34 years after the files were created.

One or both of the newer releases of version 3.00 were probably a response, at least in part, to the
[notice](#diskette-photos) that Peter Norton included with the original release:

    I'm sorry to intrude with a last-minute warning,
    but even after extensive testing, a significant
    problem has been discovered after the enclosed
    disk and documentation were prepared.

    We've received reports that one of the programs
    in this set, the Directory Sort program, called
    DS, has malfunctioned on a few hard disks.

    We've tested and used the DS program literally
    thousands of times on many different disk formats
    without encountering any problems.  Nevertheless,
    a few customers have reported difficulties.

    I would recommend that you exercise caution in
    using DS.

    Peter Norton

However, there are a number of other differences between the disks.  For example, the utilities
on the [first disk](#directory-of-norton-utilities-300-1985-12-07) have their traditional short names,
along with `LONG.BAT` and `SHORT.BAT` batch files to switch between long and short names, whereas the
[second disk](#directory-of-norton-utilities-300-1985-01-14) uses long names and no batch files,
and on the [third disk](#directory-of-norton-utilities-300-1985-01-21), the batch files reappear.

While it's possible that some files on these disks were removed or renamed at some point, `DEMO.BAT`
on the first disk assumes short names, while `DEMO.BAT` on the third disk assumes long names,
so it seems the file names as they presently exist are correct.

{% include machine.html id="ibm5160" %}

### Directory of Norton Utilities 3.00 (1984-12-07)

     Volume in drive A is Norton 3.00
     Directory of A:\

    READ     ME *      503  12-07-84   3:00p
    DEMO     BAT*     1646  12-07-84   3:00p
    BEEP     COM*       16  12-07-84   3:00p
    DS       COM*     6082  12-07-84   3:00p
    DT       COM*     6220  12-07-84   3:00p
    FA       COM*     3584  12-07-84   3:00p
    FF       COM*     4618  12-07-84   3:00p
    FS       COM*     5108  12-07-84   3:00p
    LD       COM*     2964  12-07-84   3:00p
    LP       COM*     6406  12-07-84   3:00p
    NU       COM*    47650  12-07-84   3:00p
    SA       COM*     2976  12-07-84   3:00p
    SI       COM*     6520  12-07-84   3:00p
    TM       COM*     3814  12-07-84   3:00p
    TS       COM*     9400  12-07-84   3:00p
    VL       COM*     3934  12-07-84   3:00p
    WIPEDISK COM*     2996  12-07-84   3:00p
    WIPEFILE COM*     4078  12-07-84   3:00p
    NU       PIF*      369  12-07-84   3:00p
    README   BAT*     3664  12-07-84   3:00p
    LONG     BAT*      941  12-07-84   3:00p
    SHORT    BAT*      936  12-07-84   3:00p
           22 file(s)     124425 bytes
                           31232 bytes free

![Norton Utilities 3.00 (1984-12-07)]({{ site.software.miscdisks.server }}/pcx86/util/norton/3.00/NU300-1984-12-07.jpg)

### Directory of Norton Utilities 3.00 (1985-01-14)

     Volume in drive A is NU30-850114
     Directory of A:\

    BEEP     COM        16   1-14-85   2:00p
    DIRSORT  COM      6180   1-14-85   2:00p
    DISKTEST COM      6236   1-14-85   2:00p
    FILEATTR COM      3584   1-14-85   2:00p
    FILEFIND COM      4618   1-14-85   2:00p
    FILESIZE COM      5108   1-14-85   2:00p
    LINEPRNT COM      6406   1-14-85   2:00p
    LISTDIR  COM      2964   1-14-85   2:00p
    NORTON   COM     47924   1-14-85   2:00p
    NU       PIF       369   1-14-85   2:00p
    SCRATR   COM      2976   1-14-85   2:00p
    SYSINFO  COM      6520   1-14-85   2:00p
    TEXTSRCH COM      9400   1-14-85   2:00p
    TIMEMARK COM      3814   1-14-85   2:00p
    VOLABEL  COM      3934   1-14-85   2:00p
    WIPEDISK COM      2996   1-14-85   2:00p
    WIPEFILE COM      4078   1-14-85   2:00p
           17 file(s)     117123 bytes
                           39424 bytes free

### Directory of Norton Utilities 3.00 (1985-01-21)

     Volume in drive A has no label
     Directory of A:\

    DEMO     BAT      2178   1-21-85   6:12p
    LONG     BAT       946   1-21-85   6:04p
    README   BAT      3733   1-21-85   4:18p
    SHORT    BAT       941   1-21-85   6:05p
    BEEP     COM       128   1-21-85   4:19p
    DIRSORT  COM      6400   1-21-85   4:20p
    DISKTEST COM      6272   1-21-85   4:20p
    FILEATTR COM      3584   1-21-85   4:21p
    FILEFIND COM      4736   1-21-85   4:22p
    FILESIZE COM      5120   1-21-85   4:23p
    LINEPRNT COM      6528   1-21-85   4:24p
    LISTDIR  COM      3072   1-21-85   4:24p
    NU       COM     48128   1-21-85   4:45p
    SCRATR   COM      3072   1-21-85   4:30p
    SYSINFO  COM      6784   1-21-85   4:31p
    TEXTSRCH COM      9472   1-21-85   4:32p
    TIMEMARK COM      3840   1-21-85   4:32p
    VOLABEL  COM      3968   1-21-85   4:33p
    WIPEDISK COM      3072   1-21-85   4:33p
    WIPEFILE COM      4096   1-21-85   4:34p
           20 file(s)     126070 bytes
                          229376 bytes free

<!-- Documentation -->

![Norton Utilities 3.00 Note (1984-12-07)]({{ site.software.miscdisks.server }}/pcx86/util/norton/3.00/NU300-1984-12-07-NOTE.jpg)
