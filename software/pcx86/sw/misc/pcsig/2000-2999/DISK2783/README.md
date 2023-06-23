---
layout: page
title: "PC-SIG Diskette Library (Disk #2783)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2783/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2783"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2783.TXT

{% raw %}
```
Disk No: 2783
Disk Title: Doing Time
PC-SIG Version: S1

Program Title: Doing Time
Author Version: 1.02B
Author Registration: $50.00+
Special Requirements: 640K RAM, DOS 3.0+, and hard drive recommended.

DOING TIME is a timekeeping and billing program that generates
professional bills. Although it can be used by any company that is
service-oriented, it is especially designed for companies whose
employees bill by time worked (it was written for a law firm). DOING
TIME maintains, among other things, the amounts billed, hours worked,
and amounts due for each employee, each client, each case or project,
and the company as a whole, for the current billing period and for the
year. It also maintains up to 60 billing periods of history that are
instantly available, from which bills can be reprinted.

Geared toward the more experienced computer user, documentation is
limited, though not really needed to any extent as most options are
fairly straightforward. DOING time could very well be the solution for
service-oriented companies that have not had any luck yet with other
software programs.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  PC-SIG Disk #2721 DOING TIME  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Create a subdirectory on your hard drive and copy all files to it.      ║
║ To create a subdirectory, go to the drive you want and type:            ║
║       MD [subdirectory name]                                            ║
║ To copy all the files to the hard drive, type:                          ║
║       COPY [source drive]:*.* [destination drive]:\subdirectory name    ║
║                                                                         ║
║ To extract the files, type: DTDIST   (press Enter)                      ║
║                                                                         ║
║ To print documentation after extraction, type: COPY DT.TXT PRN (Enter)  ║
║                                                                         ║
║ To run the program after extraction, type: DT (press Enter)             ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2783

     Volume in drive A has no label
     Directory of A:\

    DTDIST   EXE    199755   9-11-90  11:18p
    GO       BAT        38   7-23-91   2:37a
    GO       TXT      1310   8-07-91  12:33a
    FILE2783 TXT      1230   8-09-91  12:37a
            4 file(s)     202333 bytes
                          116736 bytes free
