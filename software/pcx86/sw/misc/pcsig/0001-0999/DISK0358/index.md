---
layout: page
title: "PC-SIG Library Disk #358"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0358/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0358"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC XREF"

    The BASIC CROSS REFERENCE UTILITY is for the serious BASIC
    programmer.  It helps in the programming and debugging of BASIC source
    language programs by building a complete cross-reference of all
    variables.
    
    The utility provides list of the the following:  all line numbers,
    showing all references by other statements; an alphabetic listing of
    all reserved words and line numbers where they appear; an alphabetic
    listing of all variables that are not reserved; and a listing of the
    BASIC source which might include both numbered and un-numbered
    statements.  You can remove unreferenced statement numbers from
    compiled programs, remove REM statements from the source code, and
    unprotect source programs saved as protected programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## TESTPROG.BAS

```bas
10 REM SAMPLE PROGRAM FOR PROCESSING BY CROSS REFERENCE UTILITY
20 '   PROGRAM DOESN'T DO MUCH OF ANYTHING
30 DEFSTR C-G
40 DIM A(20),B(2,5),C(100)
50 ON ERROR GOTO 160
55 G$=INKEY$:IF G$=" " THEN 55 ELSE IF G$="-" THEN 55
60 FOR I=1 TO 5
70 A(I)=2*I:PRINT A(I)
80 NEXT I
90 A=12!
100 PRINT USING "A=####";A
110 IF A < 0 THEN 60 ELSE IF A=0 THEN CLOSE:END ELSE PRINT A
112 IF ERL = 90 THEN 115
115 IF 100=ERL THEN 112 ELSE IF ERL <> 60 THEN END
120 OPEN "SCRN:" FOR OUTPUT AS #1
130 OPEN "LPT1:" FOR OUTPUT AS #2
140 OPEN "KYBD:" FOR INPUT AS #3
150 CLOSE:END
160 BEEP:IF ERR=12 THEN 180 ELSE IF ERR=13 THEN 190 ELSE IF ERR=14 THEN 180 ELSE IF ERR=15 THEN 78000 ELSE PRINT #1,"ERROR= ";ERR
170 GOTO 150
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0358

     Volume in drive A has no label
     Directory of A:\

    BASICREF DOC     87493   1-15-87  11:03p
    BASICREF EXE     74880   3-05-86  10:28p
    BASICREF TXT       533   1-20-87   1:44p
    BASICRF1 EXE     41728   1-01-80  12:14a
    FILES358 TXT       619   1-28-87  11:33a
    GO       BAT       369   1-04-80   1:16a
    TESTPROG BAS       724   1-01-80  12:30a
            7 file(s)     206346 bytes
                          112640 bytes free
