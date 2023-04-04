---
layout: page
title: "PC-SIG Library Disk #1606"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1606/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1606"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VERSA-SPOOL"

    VERSA-SPOOL brings a memory resident multi-printer spooler with big
    buffers and a bunch of options to the PC.  You get multiple buffers with
    adjustable output speeds.  If you're in a jam, you can redirect a
    printer output stream from one printer to another.  That lets you use
    two printers at once to print the same file, a bonus for people dealing
    with big database files.  It can also be a lifesaver for users who have
    a word processor whose output goes to a device other than the location
    of a letter quality printer.
    
    While useful to beginners, VERSA-SPOOL permits sophisticated adjustments
    and monitoring of its performance through command line arguments
    computer veterans are comfortable with.  It even allows the computer-
    wise to exploit memory locations beyond the 640k barrier that DOS was
    written to accommodate by specifying the location of RAM memory which
    VERSA-SPOOL will use for its buffers.  People with light programming
    experience can usually find between 64k and 192k of unused RAM lurking
    in a PC equipped with 640K RAM.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1606

     Volume in drive A has no label
     Directory of A:\

    SPOOL    DOC     32488   6-05-90  11:57p
    SPOOL    EXE     25473   6-05-90  11:57p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       576   7-09-90   3:23a
    FILE1606 TXT      2369   7-10-90   2:21p
            5 file(s)      60944 bytes
                           97792 bytes free
