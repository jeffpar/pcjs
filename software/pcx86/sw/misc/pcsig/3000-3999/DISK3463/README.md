---
layout: page
title: "PC-SIG Diskette Library (Disk #3463)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3463/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3463"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```


NETWORK MARKETING SYSTEM 10.1

Steps in setting up your files:

1.  Prepare a directory on you Hard Disk. Call it NMS (it doesn't matter what
    you call it) MD NMS
2.  Copy the ALL THE FILES from the diskette to the NMS Directory.
3.  Read the README file for last minute information.
4.  Type NMSZIP and all the files will decompress in the NMS Directory.
5.  After all the files have been decompressed you can erase the NMSZIP file
6.  To start type NMS then press ENTER
7.  Read the Help Screen when asked for USER CODE. (ie; type SAMP to get in)
8.  To clean out the sample data provided, just go to DOS and DELETE the
    data files (type DELDATA)
    The next time you start the program, all the data files will be empty
    awaiting your own information, product lists, etc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3463

     Volume in drive A has no label
     Directory of A:\

    README            2018  11-03-92  12:32p
    DELDATA  BAT       154  11-03-92  11:42a
    GO       BAT        11  10-01-92  10:45p
    NMS      BAT        13  10-01-92   4:23p
    NMS      DOC     24301  11-03-92  11:59a
    NMSZIP   EXE    204196  11-03-92  12:22p
    GO       TXT       805  11-03-92  12:25p
            7 file(s)     231498 bytes
                           87040 bytes free
