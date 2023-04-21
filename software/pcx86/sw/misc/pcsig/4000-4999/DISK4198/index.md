---
layout: page
title: "PC-SIG Diskette Library (Disk #4198)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4198/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4198"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
07/19/93

Bible Scholar's Companion v1.00
Copyright 1993


Program must be installed prior to running.

Installation will un-archive program files from *.ARC file.

To install, type:

  INSTALL DIRECTORY  -- To install program to directory named DIRECTORY
  or
  INSTALL            -- To install program to current directory

  Example:
    INSTALL TEXTDIR  -- Will install to directory TEXTDIR


To run program AFTER installation, type:

  GO.BAT
  or
  BSC.EXE STEPS -- Will run the program reading STEPS book


File Descriptions:

  STEPS.*            -- Files composing book to be read
  BSC.EXE            -- The main program
  BSC.HLP            -- Help file
  BSC.COL            -- Color file (created once colors saved)
  INSTALL.BAT        -- Installation batch file
  CHECKDIR.EXE       -- Used in installation process
  ARC.EXE            -- Archive utility created by independant developer
                        ** Please type ARC.EXE to view copyrite info. **
  README.DOC         -- This file

End.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4198

     Volume in drive A has no label
     Directory of A:\

    README   DOC      1056   7-19-93   8:00p
    INSTALL  BAT      2978   1-01-80  12:17a
    SHOW     EXE      2040   9-12-88  10:48a
    ARC      EXE     32128
    STEPS    ARC    130314   7-19-93   8:00p
    GO       BAT        32  10-21-93  10:12a
            6 file(s)     168548 bytes
                          150528 bytes free
