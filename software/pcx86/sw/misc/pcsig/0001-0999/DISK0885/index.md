---
layout: page
title: "PC-SIG Diskette Library (Disk #885)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0885/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0885"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MISC. UTILITIES FOR PROGRAMMERS"

    A collection of handy utilities for programmers and computer users in
    general.  Check out the list -- there's something here for almost
    everyone.
    
    ENVED2 -- Configure the DOS environment.  Make changes more conveniently
    than using the manual SET command.
    
    PASTILS -- There are 52 various utility routines for the Pascal
    language in this source code written in Pascal.  Some of these routines:
    return the various coordinates of an active window; turn on/off reverse
    video; produce a single click from the PC speaker; calculate a loan
    payment amount; get time/date from system; get password; convert strings
    to lower/upper case; has an auxiliary device driver and serial port
    input/output; save/restore a current/previous screen; and more.
    
    87DTEC -- This utility comes with two versions of source codes to be
    compiled.  One is coded in the C language and the other in Assembler.
    Once compiled and linked, 87DTEC gives you the features, video features,
    and CPU type of your machine.  It can also determine your machine's
    compatability, illustrate timing delays, test for the presence of the
    ANSI.SYS file and the presence of a math co-processor (8087 or 80287).
    
    TC-HELP -- This program is a reference guide to the library function of
    Turbo C version 1.0.  TCHELP searches the reference guide (a file named
    TC.DAT) for the specified function, and displays the information about
    it to the console.
    
    TC10PAT -- This program reads a text from a .DIF file and applies the
    patch to the program file.  The .DIF file is relatively free-format.
    
    TPC -- TPC reads a Turbo Pascal source file and converts it into the
    corresponding C source code.  It does about 90% of the work required to
    do the translation (a macro header is included).
    
    UCTURBO2 -- This is a library that contains over 200 functions written
    in C and Assembler.  There is a wide selection of graphics functions,
    general purpose functions and functions to control the graphics dot
    matrix and a daisy wheel printer.
    
    C-WINDOW -- A special windowing-cursor control-string, character
    display and border drawing included.  Everything happens at top speed
    because C-WINDOW was written in C, converted to Assembler, and
    hand-optimized.  The C-WINDOWING TOOLBOX (C-WINDOW) programs on this
    disk perform the same function for the programming language C (Lattice C
    or Microsoft C version 3 or 4).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## $ENVED.BAS

```bas
10 F$="\$ENVED.DAT": REM Must agree with .DAT file name in ENVED.BAT
20 B$="\$ENVED$.BAT": REM Must agree with .BAT file name in ENVED.BAT
30 OPEN "I",1,F$
40 OPEN "O",2,B$
50 I=0
60 I=I+1: X$=ENVIRON$(I): IF X$="" THEN GOTO 140
70 IF LEFT$(X$,7)="PROMPT=" THEN PRINT# 2, "PROMPT": GOTO 60
80 IF LEFT$(X$,5)="PATH=" THEN GOTO 60
90 IF LEFT$(X$,8)="COMSPEC=" THEN GOTO 60
100 J=2
110 IF MID$(X$,J,1) <> "=" THEN J=J+1: GOTO 110
120 PRINT#2, "SET "+LEFT$(X$,J)
130 GOTO 60
140 INPUT#1, X$
150 IF LEFT$(X$,5)<>"PATH=" AND LEFT$(X$,7)<>"PROMPT=" THEN PRINT#2, "SET ";
160 PRINT#2, X$
170 IF NOT EOF(1) THEN GOTO 140
180 CLOSE 1
190 CLOSE 2
200 SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0885

     Volume in drive A has no label
     Directory of A:\

    C_WDEF   H        2635   1-04-86   4:53p
    C_WINMSC OBJ      7285   1-13-87   9:26p
    C_WINLAT OBJ     10443   1-13-87   9:20p
    C_WDEMO  EXE     15446   1-13-87   1:35p
    C_WINDOW DOC     34821   1-16-87  11:09a
    C_WDEMO  C        6306   1-16-87  11:20a
    C_WREAD  ME       1339   1-16-87  10:46a
    PKXARC   COM     12242   4-27-87
    87DTEC   ARC     18560   7-03-87  10:53p
    PASTILS  ARC     23552   7-05-87   9:47a
    TC10PAT  ARC     13312   7-05-87   9:48a
    TC-HELP  ARC     45056   7-13-87  10:45p
    UCTURBO2 ARC     94208   7-13-87  10:37p
    ENVED2   ARC     10240   7-27-87  10:50p
    TPC      ARC     33024   7-27-87  10:39p
    GO       BAT        38  12-03-87  11:08a
    GO       TXT      1695  12-03-87  11:10a
    FILES885 TXT      3805  12-07-87   8:42a
           18 file(s)     334007 bytes
                           19456 bytes free
