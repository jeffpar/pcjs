---
layout: page
title: "PC-SIG Diskette Library (Disk #2019)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2019/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2019"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPEAKER/HEXEDIT/DISKTEST"

    This program performs Thiele-Small alignments for any given speaker in a
    vented enclosure.  This means it will determine the optimum cabinet and
    vent size for the driver entered.  It requires the Thiele-Small
    parameters for the driver (available on most data sheets) to perform the
    analysis.
    
    It will graph the speaker's response on screen along with all the
    calculated results.  It can also graph the speaker's thermal and
    displacement limit curves and a simulated square wave response.  The
    user can request the screen to be printed.  The program includes a data
    file that contains almost every driver made by JBL.  New drivers can be
    added to this file from within the program.
    
    This program allows the user to view, modify, and write any file.  It
    edits the file in hex so it can edit .EXE, .COM, or data files.  It
    provides basic editing functions such as insert, delete, search,
    insert/overstrike mode, load new file, save, and a 100-level undo.  Help
    is available with the F1 key.  It can edit any size file up to the limit
    of available memory.
    
    This program performs read and write tests on any floppy or standard
    hard disk.  If it detects any errors, it shows the exact error that
    occurred and the sector in which it occurred.  When finished it shows
    how many errors were corrected by retries or recalibration.  It allows
    the user to specify the starting and ending sectors to test and the
    number of test loops.  It allows the user to choose read-only, write-
    only, or write and read testing.  The user provides the data pattern to
    be written.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2019

     Volume in drive A has no label
     Directory of A:\

    FILE2019 TXT      3775   1-04-90  11:59a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848   1-01-80   3:09a
    DISKTEST EXE     28304   7-30-89   7:06a
    HEXEDIT  EXE     30461   7-29-89   6:49a
    DRIVER   DAT      4620   6-08-89  12:22p
    MSHERC   COM      6749   3-07-88   5:10a
    READ     ME       3057   6-16-89   6:17p
    SPEAKER  EXE    107857   7-29-89   7:06a
            9 file(s)     185709 bytes
                          133120 bytes free
