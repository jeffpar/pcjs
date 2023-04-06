---
layout: page
title: "PC-SIG Diskette Library (Disk #875)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0875/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0875"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QREF, VXREF, AND CLOCK"

    A memory-resident utility that displays a list of all the DOS commands
    available and a detailed description of them.
    
    Scroll through a display of all the MS/PC-DOS commands. The DOS
    prompt will always be displayed at the top. You can limit the list by
    typing in a letter -- only the commands that begin with that letter
    will be displayed. Pressing another letter will limit the list to
    commands that begin with those two letters. Get a brief summary of the
    command or a detailed description.
    
    BASIC programmers -- VREF (Variables Cross-Reference) is a programming
    utility which will show all lines where a specific variable is located
    in a BASIC program.
    
    VXREF works with all BASIC programs written in GW/PC BASIC or BASICA and
    saved in an ASCII format.  It can distinguish between variables and
    arrays of the same name and will ignore type declarations and system
    variables.  Each occurrence of a variable in a line is mentioned once.
    The list may be printed on a printer or saved to a disk file.
    
    CLOCK displays a full analog clock face on the screen of your computer,
    including second hand, in real time taken from DOS.  A menu-based help
    function is available to allow sizing and positioning of the clock on
    the screen, but the default is full screen size.  The C source code for
    the program is included.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HANDSGEN.BAS

```bas
100 REM ******************************************************* HANDSGEN.BAS
101 REM * GENERATES TABLES FOR CLOCK HANDS
110 REM ********************************************************************
200 DEFINT A-Q, S-Z
500 OPEN "E:HANDSGEN.TAB" FOR OUTPUT AS #1
1000 FOR HAND = 0 TO 7
1100 RANGLE = (360/60) * HAND * (3.141593/180)
1150 PRINT #1,TAB(16);"/*--- hand entry #";HAND;" ---*/"
1200 RMULTI = TAN (RANGLE)
1250 POSITION = 0
1300 FOR I = 0 TO 100
1400 POSITION = POSITION + 12
1500 RCOL = 160 + (I * RMULTI)
1700 IROW = 100 - I
1800 ICOL = RCOL
1900 PRINT #1, TAB(POSITION);
2000 PRINT #1, USING "###_,";IROW;ICOL;
2012 PRINT #1, "1,";
2020 IF POSITION < 60 GOTO 2090
2024 PRINT #1," "
2030 POSITION = 0
2090 REM
2900 NEXT I
3100 NEXT HAND
8900 CLOSE #1
9000 END
9999 SAVE "E:HANDSGEN.BAS"
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0875

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT         8  12-22-86  10:17p
    CLKASM   BAT      1408   1-03-87   8:00p
    CLKCLR   C        1280  12-22-86   8:46p
    CLKCLR   OBJ       443   1-03-87   3:46p
    CLKDLY   C         896  12-22-86   9:16p
    CLKFAC   C        6784  12-22-86   8:50p
    CLKFAC   OBJ      1266   1-03-87   3:47p
    CLKGBL   H        4864   1-03-87  11:47p
    CLKHN2   H       16000   1-03-87  11:38p
    CLKHRH   C        1664  10-25-87  12:22p
    CLKHRH   OBJ       460  10-25-87  12:23p
    CLKIMGH  C        5376   1-03-87  11:33p
    CLKIMGH  OBJ      6699   1-03-87  11:44p
    CLKIZN   C        1024   1-03-87   3:39p
    CLKIZN   OBJ       213   1-03-87   3:46p
    CLKKYB   C        4480   1-03-87  11:41p
    CLKKYB   OBJ      1833   1-03-87  11:12p
    CLKLINK  BAT       128  12-09-86  10:18p
    CLKLKMD  LNK       256   1-03-87   8:01p
    CLKMNH   C        1408  12-22-86   9:09p
    CLKMNH   OBJ       346   1-03-87   3:49p
    CLKPNT   C        4480   1-03-87   3:36p
    CLKPNT   OBJ      1566   1-03-87   3:50p
    CLKPRINT BAT       640   1-03-87   8:00p
    CLKSCH   C        1408  12-22-86   9:09p
    CLKSCH   OBJ       318   1-03-87   3:49p
    CLKSIZ   C        1664   1-03-87  11:39p
    CLKSIZ   OBJ       601   1-03-87  11:43p
    CLKTIM   C        1664   1-03-87   3:38p
    CLKTIM   OBJ       584   1-03-87   3:47p
    CLOCK    C        1664   1-03-87   7:59p
    CLOCK    DOC      4224   1-04-87  12:00a
    CLOCK    EXE     24034  10-25-87  12:23p
    CLOCK    MAP       351  10-25-87  12:23p
    CLOCK    OBJ      4830   1-03-87  11:48p
    CSYSINT  ASM      3728   7-29-84   4:07p
    CSYSINT  LST      6853  12-20-86  11:38p
    CSYSINT  OBJ       178  12-20-86  11:38p
    DIR      DOC      2270  10-11-87   1:43p
    FILES875 TXT      3489   5-12-88   3:50p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1233  11-30-87   3:12p
    HANDSGEN BAS       697  12-20-86   8:11p
    HANDSGEN TAB     12055  12-20-86   8:11p
    QREF     COM     29066   2-04-89  12:38p
    QREF     DOS     57656  11-17-86   1:25p
    READ     ME       2854   3-31-88   3:48p
    TEMPLATE C         768   2-11-87   6:23p
    VX       DOC      2854   9-06-87   4:02p
    VX       EXE     46781   3-31-88   3:33p
    _______  ___         4  11-30-87   3:27p
    ________ ___         4  11-30-87   3:25p
           52 file(s)     275392 bytes
                           18432 bytes free
