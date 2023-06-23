---
layout: page
title: "PC-SIG Diskette Library (Disk #3325)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3325/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3325"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## UNINSTAL.DOC

{% raw %}
```
                    HOW TO UNINSTALL WEALTH PARTNER

The setup program for WP does the following:
        copies vbrun100.dll to the c:\windows or equivalent directory.
        copies these files to the c:\windows\system or equiv. directory.
                graph.vbx
                gsw.exe
                threed.vbx
                gauge.vbx
                grid.vbx
                gswdll.dll
        copies these files to c:\partner or the directory you specified
        during installation:
                readme
                wp.exe

To uninstall, erase all files from your c:\partner directory (unless you 
added other files from other programs), and erase the other files named 
above from the directories in which they have been placed.  Please note,
however, that other programs you have may use the vbrun100.dll file, which is 
used by any program written in Visual Basic (TM Microsoft).  You may have 
programs which use some of the other files with the vbx and dll extensions
as well.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3325

     Volume in drive A has no label
     Directory of A:\

    README            5387  10-12-92   8:59p
    SETUP    EXE     13888   7-21-92   4:46p
    SETUP    LST        11   8-30-92  10:34p
    UNINSTAL DOC      1028  10-12-92   8:54p
    SETUPKIT DL_      7008   7-21-92   4:46p
    VBRUN100 DL_    271264   5-10-91   1:00a
    VER      DL_      8736   7-21-92   4:46p
    SETUP1   EXE     29050   9-08-92  10:34p
    FILE     LST       722  10-18-92   9:20p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        28   1-27-93   6:23a
           11 file(s)     339162 bytes
                           17408 bytes free
