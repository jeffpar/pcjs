---
layout: page
title: "PC-SIG Diskette Library (Disk #601)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0601/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0601"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILES601.TXT

{% raw %}
```
-----------------------------------------------------------------------------
Disk No  601  DREAM (Data Retrieval, Entry And Management) 3 of 3    v2
-----------------------------------------------------------------------------
REAM is a relational data base program that comes in 3 (three) diskettes
to complete the package. The archiving procedure was used to combine the
contents of original five DREAM diskettes into three.
 
------------- DREAM (v2.0)
INSTFLPY BAT  Installation driver for 2 floppy disk drives (continuation)
INSTHARD BAT  Installation driver for a hard disk          (continuation)
PKXARC   EXE  Un-archiving program Version 1.1 by Phil Katz
------------- DREAM3.ARC archived file:
  COMMENU  EXE  Program module - menu module
  REPMAIN  EXE  Program module - main routine
  REPSCRN  EXE  Program module - view selection module
  RELATE   EXE  Program module - build relationships
  REPUTIL  EXE  Utility module - export data
  REPSORT  EXE  Program module - sort related data bases
  REPQRY   EXE  Program module - query
  REPFORM  EXE  Program molule - display/print report
  SELREP   EXE  Program module - user selections
  SYMBOLW  LOG  Misc program data
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0601

     Volume in drive A is DISK0601
     Directory of A:\

    DREAM3   ARC    194187   1-16-87   1:13a
    FILES601 TXT      1313   2-04-87  11:03a
    INSTFLPY BAT       359   1-14-87   5:21p
    INSTHARD BAT       440   1-14-87   5:23p
    PKXARC   COM      9984   9-12-86
            5 file(s)     206283 bytes
                          113664 bytes free
