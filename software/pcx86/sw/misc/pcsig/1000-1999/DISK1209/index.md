---
layout: page
title: "PC-SIG Library Disk #1209"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1209/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1209"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HDTEST"

    HDTEST performs a read/write test on your hard disk without disturbing
    the data currently on it!
    
    HDTEST writes 20 different test patterns to every cluster on the disk,
    checks that they can be read back correctly, and then carefully restores
    your original data!   Extremely sensitive, it can even detect errors
    which are minor enough to be corrected by the disk controller's own
    error-correcting code (ECC).  These errors are normally invisible to the
    user but may be the first signs of future disk problems.
    
    The program is also useful for automatic disk repair when you get
    intermittent or persistent read errors.  Because HDTEST tries harder
    than DOS alone, it can often recover almost unreadable data from
    both hard and floppy disks and rewrite it -- a real life saver when your
    backup fails you.
    
    Simple to use, the program was written to minimize the likelihood of
    user error causing data loss on a good disk.  HDCHEK, a companion
    program, gives you a quick compatibility report to tell you if HDTEST
    will run on your system.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1209

     Volume in drive A has no label
     Directory of A:\

    BOOTLOAD COM     32000   8-28-88   1:35p
    BOOTLOAD DOC      4613   2-22-90   5:31p
    FIXFAT   DOC      6908   2-22-90   5:32p
    FIXFAT   EXE     12627   3-14-89   1:23p
    HDCHEK   EXE     54370   3-10-90   3:13p
    HDTEST   DOC    136738   3-10-90   3:09p
    HDTEST   EXE     60522   3-10-90   3:13p
    HDTEST   OVV      4010   3-10-90   2:02p
    MAKETXT  EXE      8227   4-17-88  12:26p
    README   1ST      1522   3-10-90   3:19p
    GO       BAT        38   4-21-88   9:08a
    GO       TXT       617   3-02-90  10:38p
    FILE1209 TXT      2591   4-22-90   7:37p
           13 file(s)     324783 bytes
                           29696 bytes free
