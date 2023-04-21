---
layout: page
title: "PC-SIG Diskette Library (Disk #3584)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3584/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3584"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTALL.DOC

{% raw %}
```
 Installation

       Installation is a very straightforward process. All you need
   to do is insert the disk on which Legal Eagle is located into
   the drive, select that drive as the current drive by typing "A:"
   or "B:" (depending on the drive in which the disk is inserted)
   at the DOS prompt. Now type INSTALL   and follow the instructions
   on the screen. Legal Eagle Must Be Installed on the same drive as
   Windows in a directory Named WINEAGLE If you change to a drive
   Other then the one Windows is installed on you must include
    Wineagle in your Path statement in your AUTOEXEC.BAT File.
        The install Program will run setup and bring up windows if
    You have changed the drive you are installing to form C to D you
    must tell Setup  when it prompts you for Destination Drive.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3584

     Volume in drive A has no label
     Directory of A:\

    EAGLEPAK EXE    232451  12-24-92  11:10p
    INSTALL  DOC       831  12-15-92  10:18a
    INSTALL  EXE     36622  12-15-92  10:45a
    SHAREWAR VER        42  12-15-92  10:28p
    SYSINST  BAT      2142  12-24-92  11:31p
    GO       BAT        36   4-20-93  10:58a
    SHOW     EXE      2040   9-12-88  10:48a
            7 file(s)     274164 bytes
                           44032 bytes free
