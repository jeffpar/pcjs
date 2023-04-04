---
layout: page
title: "PC-SIG Library Disk #2287"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2287/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2287"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILE/ARCHIVE"

    At last, a self-activating utility for analyzing and archiving files on
    a hard disk. Using criteria set by the user, the system looks for files
    which may no longer be active and offers the user the opportunity to
    either remove them completely or archive (move) them from their current
    location. Technically a hard disk is not required, but the system's
    value is in its ability to scan large amounts of data and automatically
    select data needing attention.
    
    To use the system, pre-select directories to be periodically analyzed.
    A master configuration record tells FILE/ARCHIVE how often to look at
    directory entries to see whether they should be analyzed. By including
    the proper command in the AUTOEXEC.BAT file, the system can be made
    totally automatic. The only thing it will not do automatically is
    actually archive files -- it merely presents the files that meet the
    selection criteria in a menu and asks if you would like to archive or
    delete any of them. Any files that are selected are then moved to a
    designated archive location, usually a floppy disk.
    
    Customize several parameters such as a variety of default values,
    specify whether to include system or hidden files in the analysis
    (although it won't allow you to archive such files as long as they have
    those attributes), specify whether or not to use DOS' Write
    Verify feature, assign your own function keys, and more.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2287

     Volume in drive A has no label
     Directory of A:\

    FAS      MRE        32  12-26-89   1:59p
    FILARC10 EXE    246720   1-31-90  12:46p
    HDINST   BAT      3897   9-13-89  12:29p
    INTRO    BAT        48   6-12-89  10:29a
    INTRO    TXT      9173   1-31-90  10:01a
    PBS-VIEW COM      2432   5-06-87   1:24a
    README   BAT      1673   6-27-89   3:28p
    README2  BAT      1867   9-13-89  11:52a
    USERDOC  EXE     49245   1-31-90  12:49p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       671   1-01-80   8:25a
    FILE2287 TXT      2961   7-17-90   3:58p
           12 file(s)     318759 bytes
                           37888 bytes free
