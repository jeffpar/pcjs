---
layout: page
title: "PC-SIG Diskette Library (Disk #2625)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2625/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2625"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
Installation:

1) Insert the disk with DABUTIL on it into either drive A or B.

2) "LOG IN" to that drive with either:
           A:    or
           B:
    and press RETURN.

3) Enter the command DABINST and press return.

4) Follow the instructions given to install the DABUTIL package. DABINST will
   install DABUTIL in a directory named DABUTIL, which it will create if
   necessary. It will also add the new directory to your path command.

5) Re-boot your computer to activate the new PATH command in AUTOEXEC.BAT

6) Enter the command DOSMENU to see demonstrations of each program

CAUTION:
   While you can change the directory given, it is recommended that you use
   DABUTIL, since any existing directory may have files with the same name as a
   DABUTIL file, and they might be lost when the install is done.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2625

     Volume in drive A has no label
     Directory of A:\

    README            5706   1-15-91   6:14a
    GO       BAT        55   5-01-91   9:16a
    DABUTIL2 REG      2327   1-15-91   6:15a
    DABUTIL2 DC1     53509   1-15-91   6:13a
    DABUTIL2 DC2     52708   1-15-91   6:12a
    DABINST  COM     21094   1-15-91   6:06a
    DABUTIL2 EXE    205414   1-21-91   6:25a
    GO       TXT       842   5-01-91   9:12a
    GO1      TXT       771   5-01-91   9:26a
            9 file(s)     342426 bytes
                           15360 bytes free
