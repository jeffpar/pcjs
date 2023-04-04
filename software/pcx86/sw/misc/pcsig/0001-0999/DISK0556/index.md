---
layout: page
title: "PC-SIG Library Disk #556"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0556/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0556"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORTRAN AND ASSEMBLY"

    This is a mixed collection of games, usable programs, and utilities
    that can be called from FORTRAN programs.  Included is PLTSPEC which is
    useful in analyzing spectra with broad asymmetric peaks on a sloping
    background.  DIR_ASM.ASM is a routine which lists to the console the
    names of the files in the current directory.  There are also some .PIC
    files which are ASCII files to copy to a printer.  They contain
    drawings of various figures.
    
    System Requirements:  64K, one disk drive and monochrome display.
    
    How to Start:  To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE program, just type its name and press <ENTER>.
    For instructions on ASM or FOR listings, refer to your Assembler or
    FORTRAN language manual.
    
    File Descriptions:
    
    README        Description and documentation for the files on this disk
    DIR_FOR  EXE  Compiled and linked version of above
    DIR_FOR  FOR  Example FORTRAN program using DIR_ASM
    DIR_ASM  OBJ  Assembled version of DIR_ASM
    DIR_ASM  ASM  A disk directory from FORTRAN
    KYBD_EX  FOR  Example program using DOSFUNC and DOSFN
    DOSFUNC  FOR  FORTRAN routines for use with DOSFN
    DOSFN    OBJ  Assembled version of DOSFN
    DOSFN    ASM  Gives access to DOS functions from an MS-FORTRAN program
    CHESS    FOR  Chess source code
    CHESS    DOC  Chess documentation
    CALENDAR FOR  Calendar source code
    CALENDAR CPM  Calendar source code - CP/M
    -------- ---
    EXAMPLE  DAT  Example data set for
    EFFIXSP  FOR  Detector efficiency correction of gamma-ray spectra
    PLOT2    FOR  Dump routines for PLTSPEC
    PLOT1    FOR  IDS Micro Prism printer
    EDITS    FOR  Part of PLTSPEC;           MULTI-HALO graphics library
    DAT-TIME OBJ  Assembled version of DAT-TIME
    DAT-TIME ASM  Routines for getting the date and time in FORTRAN
    MANSPT   FOR  Part of PLTSPEC;           requires MS-FORTRAN and
    PLTSPEC  FOR  Interactive processing of gamma-ray pulse height spectra
    TIME2    EXE  Compiled and linked version of above
    TIME2    FOR  Example FORTRAN routines using DAT-TIME
    EDITM    FOR  Edit program source code
    MAZE     CPM  Maze generator source code - CP/M
    LINUS    PIC  Linus portrait
    PINUP?   PIC  Pinup portraits
    OTHELLO  DOC  Othello program documentation
    OTHELLO  FOR  Othello program source code
    MAZE     FOR  Maze generator source code
    SSPLIB   FOR  Linear least squares program source code
    RND      FOR  Random numbers generator source code
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #0556

     Volume in drive A has no label
     Directory of A:\

    DOSFUNC  FOR      1280  10-30-85  12:25p
    KYBD_EX  FOR       640  10-30-85  12:38p
    DOSFN    OBJ       110   6-13-85  10:24a
    DOSFN    ASM      1024   6-13-85  10:22a
    PLOT1    FOR      2304  10-30-85   1:03p
    PLOT2    FOR      2560  10-30-85  10:21p
    PLTSPEC  FOR     11648  10-30-85  11:05p
    MANSPT   FOR     14464  10-30-85  11:07p
    EDITS    FOR      7808   9-18-85   3:20p
    EXAMPLE  DAT     11281  10-31-85  11:09a
    DIR_ASM  ASM      2432  11-05-85   3:27p
    EFFIXSP  FOR     11520   7-17-85   9:31a
    DIR_ASM  OBJ       426  11-05-85   3:28p
    DIR_FOR  EXE     25958  11-05-85   3:29p
    DIR_FOR  FOR       256  11-01-85   9:27a
    TIME2    EXE     24966  11-06-85   9:50a
    DAT-TIME ASM      2944  11-06-85   9:47a
    TIME2    FOR       640  11-06-85   9:48a
    DAT-TIME OBJ       677  11-06-85   9:50a
    DISK     DIR      1152  11-06-85   9:57a
    README           10368  11-06-85  11:27a
    -------              7   6-03-86   8:44a
    README   DOC       896   1-01-80  12:21a
    CALENDAR FOR      3584   5-28-82
    CALENDAR CPM     15872   6-12-82
    CHESS    FOR     24576   5-31-82
    CHESS    DOC      1408   1-01-80  12:27a
    EDITM    FOR      1664   5-31-82
    LINUS    PIC      2944   5-30-82
    MAZE     FOR      4224   5-28-82
    MAZE     CPM     19968   6-12-82
    OTHELLO  FOR     11648   5-31-82
    OTHELLO  DOC      4736   1-01-80  12:32a
    PINUP    PIC      8320   5-30-82
    PINUP1   PIC     17920   5-30-82
    RND      FOR       128   5-28-82
    SSPLIB   FOR     12288   5-31-82
    FILES556 TXT      2146   6-11-86  10:45a
    NOTES556 TXT       640   6-06-86   3:27p
           39 file(s)     267427 bytes
                           32768 bytes free
