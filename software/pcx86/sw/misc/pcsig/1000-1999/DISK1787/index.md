---
layout: page
title: "PC-SIG Library Disk #1787"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1787/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1787"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE GUARDIAN"

    THE GUARDIAN is a security system designed to protect an entire disk
    (either a hard disk or a floppy disk) against unauthorized use.  THE
    GUARDIAN uses an algorithm that logically "locks" a disk so that NO
    files, programs, or directories on the disk may be accessed.  This can
    be an added security to files that may already be encrypted or password
    protected.
    
    Many security programs load themselves from the AUTOEXEC.BAT file.  Such
    programs are easily skirted with a floppy boot.  THE GUARDIAN keeps
    disks locked tight until the "unlock" program is run.
    
    When a disk is locked by THE GUARDIAN, the files on that disk are not
    physically altered.  Rather, what is altered is the information that
    tells DOS where those files are.  An anti-virus file check is also built
    into the system.  Under no circumstances should this program be used
    before reading the instruction manual!
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1787

     Volume in drive A has no label
     Directory of A:\

    GUARDIAN EXE    199151   6-04-90  12:45p
    GUARDIAN MRE       128   4-20-90   3:54p
    INTRO    BAT        48   6-12-89  10:29a
    INTRO    TXT      6851   4-20-90   4:00p
    PBS-VIEW COM      2432   5-06-87   1:24a
    README   BAT      1446   8-16-89   1:12p
    README2  BAT       597   8-15-89   2:09p
    USERDOC  EXE     33724   5-16-90   4:18p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       653   7-10-90   4:45a
    FILE1787 TXT      2295   7-10-90   2:36p
           11 file(s)     247363 bytes
                           68608 bytes free
