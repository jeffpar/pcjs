---
layout: page
title: "PC-SIG Diskette Library (Disk #500)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0500/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0500"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SOFT-TOUCH"

    Soft-touch is a program that allows keys to be programmed with
    keystrokes.  It operates as a sort of computer shorthand, allowing you
    to speed through often-repeated commands or entries.  It has an
    excellent built-in tutorial.  Soft-touch is a memory-resident program
    that may be activated any time through it's escape sequence.  For the
    adventurous, the source code in assembly language is included.
    
    Usage:  Intermediate-Advanced user or programmer.
    
    System Requirements: 64K, one disk drive, monochrome display
    
    How to Start: Check the READ.ME and then the SOFTCH.DOC files for
    documentation and instructions.  To run, enter SOFTCH and press
    <ENTER>.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    SOFTCH   COM  Main Program.
    LIST     COM  Program to list the tutorial screens.
    TUTOR    DOC  Text information for the tutorial.
    TUTOR    BAT  A batch file to execute the tutorial.
    SOFTCH   DOC  The operations manual text file.
    MCRO     KEY  Tutorial and example micros.
    README        An introductory text file.
    MANUAL   BAT  A batch file to print out the operations manual.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0500

     Volume in drive A has no label
     Directory of A:\

    FILES500 TXT       840  11-11-86   2:40p
    GO       BAT       586   5-05-86   2:52p
    LIST     COM     14236   3-11-86  10:24p
    MANUAL   BAT       128   3-07-86   1:25a
    MCRO     KEY      2816   3-13-86  12:08a
    NOTES500 TXT      3696  11-11-86   2:41p
    README            1792   8-07-86  10:36p
    SOFTCH   COM     11657   3-13-86  12:15a
    SOFTCH   DOC     85888   8-14-86   9:22a
    TUTOR    BAT       128   3-12-86  12:28a
    TUTOR    DOC     12544   8-13-86   9:44p
           11 file(s)     134311 bytes
                           23040 bytes free
