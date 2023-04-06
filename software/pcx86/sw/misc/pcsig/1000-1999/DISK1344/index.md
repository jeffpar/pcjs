---
layout: page
title: "PC-SIG Diskette Library (Disk #1344)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1344/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1344"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC PRO-GOLF"

    PC PRO-GOLF is a game that graphically depicts in four colors an actual
    golf course with water-hazards, sand-bunkers, wooded areas, buildings,
    roads, etc.  With each stroke the player may watch the course of the
    ball and see where it lands.  When your ball comes within a certain
    distance from the hole, the program will display a close up view of the
    hole so that you may putt the ball in.
    
    Penalty-strokes are added under the correct conditions and an updated
    score-card is available for review at any time, as are the help-screen
    and club-values list.  An unfinished game may be saved for resumption at
    a later time.
    
    Getting the program up and running is made easy by a very sophisticated
    installation program that was smart enough to know that we were testing
    this program on a Tandy SX1000!  Also included is the printable 10-page
    manual, and AMHERST, another complete 18-hole course.  Fore!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONVERT.BAS

```bas
20 CLS: PRINT"This utility CONVERTS PC-Pro-GOLF Data Files (version 2.02 and earlier) to run"
25 PRINT"under Version 4.0. If you DO NOT wish to convert those files at this time,"
30 PRINT"press <Esc> now.": PRINT: PRINT"To continue, have a new FORMATTED diskette handy and the OLD Data Disk in "
35 PRINT"Drive A and press <Enter>."
40 A$=INKEY$: IF A$="" THEN 40
45 IF A$=CHR$(27) THEN CLS: END
50 IF A$=CHR$(13) THEN 60
55 GOTO 40
60 CLS: PRINT"Enter the NAME of the Course (Only the NAME, NOT the extender)"
65 PRINT"   Example...": PRINT"              AMHERST.H1   ...WRONG"
67 COLOR 15,0: PRINT"              AMHERST      ...RIGHT":PRINT: COLOR 7,0
70 INPUT N$
100 SCREEN 1,0: COLOR 0,1: DEF SEG=&HB800
120 FOR K=1 TO 18
125 K$=STR$(K): K$=RIGHT$(K$,LEN(K$)-1)
130 BLOAD"a:"+N$+".h"+K$,0
140 BSAVE"b:"+N$+".u"+K$,320,4880
150 BSAVE"b:"+N$+".l"+K$,8512,4800
160 NEXT K
200 DIM CP$(19,7)
300 ON ERROR GOTO 395
305 OPEN"I",#1,"a:course.dat"
310 INPUT#1,TITLE$,CPAR
315 FOR X=1 TO CPAR: FOR Y=1 TO 7
320 INPUT#1,CP$(X,Y)
325 NEXT Y: NEXT X
330 CLOSE#1
355 OPEN"O",#1,"b:course.dat"
360 PRINT#1,TITLE$","CPAR
365 FOR X=1 TO CPAR: FOR Y=1 TO 7
370 PRINT#1,CP$(X,Y)
375 NEXT Y: NEXT X
380 CLOSE#1
390 GOTO 400
395 IF ERR=(53) THEN RESUME 500: ELSE PRINT ERR: END
400 CLS: PRINT "Conversion Completed": SYSTEM
500 BEEP: PRINT"COURSE.DAT file not found. This file must be copied onto the new data disk."
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1344

     Volume in drive A has no label
     Directory of A:\

    AMHERST  L1       4815  12-27-88  11:04a
    AMHERST  L10      4815  12-27-88  11:46a
    AMHERST  L11      4815  12-27-88  11:51a
    AMHERST  L12      4815  12-27-88   1:08p
    AMHERST  L13      4815  12-27-88   1:14p
    AMHERST  L14      4815  12-27-88   1:17p
    AMHERST  L15      4815  12-27-88   1:22p
    AMHERST  L16      4815  12-27-88   1:29p
    AMHERST  L17      4815  12-27-88   1:34p
    AMHERST  L18      4815  12-27-88   1:41p
    AMHERST  L2       4815  12-21-88   2:30p
    AMHERST  L3       4815  12-27-88  11:09a
    AMHERST  L4       4815  12-27-88  11:14a
    AMHERST  L5       4815  12-21-88   2:31p
    AMHERST  L6       4815  12-27-88  11:19a
    AMHERST  L7       4815  12-27-88  11:24a
    AMHERST  L8       4815  12-27-88  11:30a
    AMHERST  L9       4815  12-27-88  11:36a
    AMHERST  U1       4895  12-27-88  11:04a
    AMHERST  U10      4895  12-27-88  11:46a
    AMHERST  U11      4895  12-27-88  11:51a
    AMHERST  U12      4895  12-27-88   1:08p
    AMHERST  U13      4895  12-27-88   1:14p
    AMHERST  U14      4895  12-27-88   1:17p
    AMHERST  U15      4895  12-27-88   1:22p
    AMHERST  U16      4895  12-27-88   1:29p
    AMHERST  U17      4895  12-27-88   1:34p
    AMHERST  U18      4895  12-27-88   1:41p
    AMHERST  U2       4895  12-21-88   2:30p
    AMHERST  U3       4895  12-27-88  11:09a
    AMHERST  U4       4895  12-27-88  11:14a
    AMHERST  U5       4895  12-21-88   2:31p
    AMHERST  U6       4895  12-27-88  11:19a
    AMHERST  U7       4895  12-27-88  11:24a
    AMHERST  U8       4895  12-27-88  11:30a
    AMHERST  U9       4895  12-27-88  11:36a
    CONVERT  BAS      1186  12-22-88   8:28a
    CONVERT  BAT       257  12-21-88   5:37p
    COURSE   DAT       536  12-27-88   1:41p
    DISTANCE CLB       103   8-30-88  11:01a
    ENTRE    TXT      6500  12-23-89   6:48p
    FILE1344 TXT      2295   2-13-90   9:03a
    FILEDESC TXT      1172  12-23-89   7:09p
    GO       BAT        26   9-15-89  11:22p
    GOLF     BAT        25   7-01-88  11:40a
    HOLD     DAT     16391   2-24-89   6:21p
    MAIN     BAT        55   7-01-88  12:42p
    MANUAL   TXT     21357  12-23-89   7:06p
    PAGE     COM       325   2-22-89  10:35p
    PCPG     BAT        53  12-21-88   2:56p
    PCPGV4   EXE    108432  12-21-89  11:48p
    PRINTMAN BAT       211   6-09-88  10:32p
    READMAN  BAT       104   6-04-88   5:51a
    REGISTER BAT       214  12-11-88   2:28p
    REGISTER FRM      1954  12-23-89   7:10p
    SETUPHD  BAT      1076   4-06-89   3:38p
           56 file(s)     337052 bytes
                            1024 bytes free
