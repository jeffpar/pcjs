---
layout: page
title: "PC-SIG Diskette Library (Disk #2781)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2781/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2781"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE2781.TXT

{% raw %}
```
Disk No: 2781
Disk Title: BMP files #1
PC-SIG Version: S1

Program Title: BMP files #1
Author Version: 7/91
Author Registration: None.
Special Requirements: Windows.

Six .BMP files for Windows -- Earth as seen from space, a surrealistic
view of Jupiter and its moons, a moonscape, the moon with Earth rising,
a picture of Saturn, and a lush forest scene.

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
║              <<<<  PC-SIG Disk #2781 BMP FILES #1  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Create a subdirectory on your hard drive and copy all files to it.      ║
║ To create a subdirectory, go to the drive you want and type:            ║
║       MD [subdirectory name]                                            ║
║ To copy all the files to the hard drive, type:                          ║
║       COPY [source drive]:*.* [destination drive]:\subdirectory         ║
║                                                                         ║
║ To extract the files, type: PKUNZIP BMPPIC1 [destination drive]:\subdir ║
║ ** You must have PKUNZIP in your path or same directory **              ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2781

     Volume in drive A has no label
     Directory of A:\

    BMPPIC1  ZIP    266900   8-07-91   1:11a
    GO       BAT        38   7-23-91   2:37a
    GO       TXT      1079   8-07-91   2:35a
    FILE2781 TXT       475   8-07-91   2:36a
            4 file(s)     268492 bytes
                           51200 bytes free
