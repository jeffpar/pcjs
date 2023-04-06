---
layout: page
title: "PC-SIG Diskette Library (Disk #1869)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1869/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1869"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BAKTRACK"

    BAKTRACK provides an easy way to back up hard disk files to floppy
    diskettes.  It is smart enough to make small daily backup chores fast
    and painless.  BAKTRACK performs both full and partial backups, with
    directories and files easily excluded from the backup.
    
    An index is maintained on your hard disk and on the backup diskettes.
    The index is a convenient navigation tool for locating files on the hard
    disk or the backup diskettes.  The index allows fast recovery of one or
    more files.  After making a full backup, daily partial backups are fast
    and easy since BAKTRACK keeps track of what files have changed or added
    since the last backup and only backs up those files.
    
    This program only works from the command line -- there are no menus.
    BAKTRACK can be set to create a complete backup, prompted partial backup
    by looking for the DOS archive bit on a file, or a partial backup as
    specified by a control file named at startup.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1869

     Volume in drive A has no label
     Directory of A:\

    BAK      EXE     31248   1-15-90   6:50p
    BAKTRACK DOC     23059   1-15-90   6:50p
    FILE1869 TXT      2295   3-20-90   4:34p
    FULLBAK  BAT       285   1-15-90   6:50p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:54a
    PARTBAK  BAT       273   1-15-90   6:50p
    README   DOC       649   1-15-90   6:50p
    RES      EXE     22864   1-15-90   6:50p
            9 file(s)      81251 bytes
                           75776 bytes free
