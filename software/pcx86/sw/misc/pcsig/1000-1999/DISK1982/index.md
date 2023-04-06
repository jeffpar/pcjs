---
layout: page
title: "PC-SIG Diskette Library (Disk #1982)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1982/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1982"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASHPAC PASCAL LIB 1 OF 2 (2093 ALSO)"

    These low level Turbo Pascal routines access the video display,
    keyboard, printer, disk, mouse devices, and a couple of DOS functions.
    These routines are not intended to replace the standard features of
    Turbo Pascal, but add to and extend the Turbo Pascal programming
    environment for the MS-DOS operating system.
    
    To simplify the use of these routines, the number of global variables
    needed for this library has been kept to a minimum.  All functions in
    the library were written in Assembly language using the Pascal
    parameter passing conventions.
    
    FPDISK supports several DOS function calls that use byte streams when
    accessing disk files.  FPKBD supports BIOS and DOS keyboard function
    calls.  FPMOUSE supports basic mouse functions, including a mouse event
    handler.  FPPRT supports BIOS printer functions.  FPVIDEO consists of
    several video routines that provide direct access to the video display.
    Routines include saving and restoring the screen, framing windows,
    setting the absolute position of the cursor, and more.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1982

     Volume in drive A has no label
     Directory of A:\

    CH0_1    DOC     18894   5-15-90   3:21a
    CH1_1    DOC      2423   5-15-90   3:21a
    CH2_1    DOC     29624   5-15-90   3:21a
    CH2_2    DOC     27662   5-15-90   3:21a
    CH3_1    DOC     12027   5-15-90   3:21a
    CH4_1    DOC      2986   5-15-90   3:21a
    CH5_1    DOC     19380   5-15-90   3:21a
    CH6_1    DOC     16269   5-15-90   3:21a
    CH7_1    DOC      1801   5-15-90   3:21a
    CHA_1    DOC      6466   5-15-90   3:21a
    CHB_1    DOC      8596   5-15-90   3:21a
    CHC_1    DOC     12404   5-15-90   3:21a
    CHD_1    DOC      6807   5-15-90   3:21a
    CHE_1    DOC      2693   5-15-90   3:21a
    README   DOC       746   5-15-90   3:21a
    CURSOR   EXE      3376   5-15-90   3:21a
    DOSMEM   EXE      4240   5-15-90   3:21a
    PRTDOC   EXE     18973   5-15-90   3:21a
    RENSUB   EXE      3024   5-15-90   3:21a
    TOUCH    EXE      9254   5-15-90   3:21a
    PRTDOC   HP       1035   5-15-90   3:21a
    PRTDOC   PFD       558   5-15-90   3:21a
    FPDISK   PAS      4415   5-15-90   3:21a
    FPDOS    PAS      6896   5-15-90   3:21a
    FPGETKEY PAS     11408   5-15-90   3:21a
    FPKBD    PAS      2634   5-15-90   3:21a
    FPMOUSE  PAS      4382   5-15-90   3:21a
    FPPRT    PAS      1570   5-15-90   3:21a
    FPVIDEO  PAS      7523   5-15-90   3:21a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       652   1-01-80  11:51a
    FILE1982 TXT      2443   7-13-90  11:44p
           32 file(s)     251199 bytes
                           54272 bytes free
