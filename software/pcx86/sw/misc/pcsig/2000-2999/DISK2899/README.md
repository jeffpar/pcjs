---
layout: page
title: "PC-SIG Diskette Library (Disk #2899)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2899/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2899"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #2899 DAYO INVENTORY  >>>>              ║
║                         Disk 2 of 2 (also #2401)                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║  This DAYO module comes in a self-extracting compressed format.         ║
║  You will require a hard drive or high density drive, 640K RAM, and     ║
║  DOS 3.3 in order to install the program to your computer.              ║
║  Please NOTE your CONFIG.SYS file must exist on your boot disk/drive,   ║
║  and it must have (as a minimum), BUFFERS=30, and FILES=55.             ║
║  Run a DAYO program to create this file should you not have one, or     ║
║  do not know how to create/edit it.                                     ║
║                                                                         ║
║  If you are installing the entire DAYO system, then we recommend        ║
║  that you use DAYO SETUP (PC-SIG #2395). It will create the necessary   ║
║  directories and copy the files. After running SETUP, run MENU.BAT      ║
║  from the \DAYO directory. Enter/select each of the modules from the    ║
║  menu, and if the module is present the program will handle the         ║
║  creation of all databases, index and configuration files.              ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  PC-SIG Disk #2899 DAYO INVENTORY  >>>>               ║
║                        Disk 2 of 2 (also #2401)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ (cont.)                                                                 ║
║                                                                         ║
║  For manual installation, create a subdirectory called DAYOINV, and     ║
║  copy all the files from the distribution disks, then switch to the     ║
║  that subdirectory and type: DAYOIE (Enter)                             ║
║                              DAYOID (Enter)                             ║
║                                                                         ║
║  Once the files are uncrunched, type: DAYOI (to start) or               ║
║                                      COPY DAYOINV.DOC PRN (to print the ║
║                                                           documentation)║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2899

     Volume in drive A has no label
     Directory of A:\

    DAYOID   EXE     88905   6-02-92  11:01p
    VENDOR   DOC     28286   5-27-92   9:22a
    README            4981   5-25-92   9:26p
    FILES    LST       449   7-01-92  12:25p
    GO       BAT        56  12-13-91   4:16p
    GO       TXT      1694   5-01-92   5:17p
    GO1      TXT      1386  10-10-92   9:06p
            7 file(s)     125757 bytes
                           32768 bytes free
