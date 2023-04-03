---
layout: page
title: "PC-SIG Library Disk #486"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0486/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0486"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TELISOLAR"

    The Teli/Solar package is a program which provides the user with an
    easy, quick method of evaluating energy-saving alternatives in the
    areas of hot water usage, building heating/cooling load, and solar
    collector design.  Teli/Solar enables the average homeowner to make
    intelligent decisions about energy-related home improvements and/or
    investments.
    
    Features:
    
    ~ 1 Disk storage of building design for later use
    ~ 2 Menu driven (with ability to bypass menus)
    ~ 3 Accepts American or metric units
    ~ 4 Provides interactive response
    ~ 5 Runs on IBM-PCs and compatibles
    
    System Requirements:  64K, one disk drive and monochrome display
    
    How to Start:  Consult TELISOL,DOC and READ.ME fiiles to review program
    documentation (strongly urged).  Type TELISOL to enter the main
    program.  To run the BASIC program consult the directions in GETTING
    STARTED for your configuration.
    
    Suggested Registration:  $50.00 registration provides technical
    support, one version upgrade and a letter-quality printed manual.
    
    File Descriptions:
    
    TELISOL  DOC  -  An 80 page document for TELISOL.
    TELISOL  EXE  -  The actual energy analysis program.
    READ     ME   -  A brief description of how to use the program.
    HOUSE    DAT  -  A sample definition of a house.
    INITVAL  SOL  -  A sample installation file generated with SOLSTALL.
    SOLSTALL EXE  -  A compiled version of the above.
    SINSTALL BAS  -  A BASICA version of the installation program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SINSTALL.BAS

```bas
10 '
20 '                  TeliSolar Installation Program
30 '                  ------------------------------
40 '
50 '                               by
60 '
70 '                  Tesseract Enterprises Limited.
80 '
90 ' Builds the "INITVAL.SOL" file needed by the TeliSolar program.
100 '
110 '
120 '
130 DIM SAVEVALUE(50),INSTRING$(50)
140 '
150 '
160  DATA  0    ,"0=GRAPHICS or 1=MONOCHROME"
170  DATA  2233 ,"HEATING DEGREE-DAYS"
180  DATA  1657 ,"COOLING DEGREE-DAYS"
190  DATA  25   ,"Jan. sunny days"
200  DATA  25   ,"Feb. sunny days"
210  DATA  25   ,"Mar. sunny days"
220  DATA  25   ,"Apr. sunny days"
230  DATA  25   ,"May  sunny days"
240  DATA  25   ,"Jun. sunny days"
250  DATA  25   ,"Jul. sunny days"
260  DATA  25   ,"Aug. sunny days"
270  DATA  25   ,"Sep. sunny days"
280  DATA  25   ,"Oct. sunny days"
290  DATA  25   ,"Nov. sunny days"
300  DATA  25   ,"Dec. sunny days"
310  DATA  39   ,"Latitude of your location"
320  DATA  104.5,"Longitude of your location"
330  DATA  15   ,"Gal./bath or shower"
340  DATA  25   ,"Gal./laundry(hot)"
350  DATA  15   ,"Gal./laundry(warm)"
360  DATA  15   ,"Gal./dishwasher"
370  DATA  4    ,"Gal./washing dishes"
380  DATA  2    ,"Gal./h & f washing"
390  DATA  3    ,"Gal./food prep."
400  DATA  6    ,"Annual inflation rate"
410  DATA  9    ,"Average investment return"
420  DATA  11   ,"Annual fuel escalation rate"
430  DATA  7.5  ,"Cost of heating"
435  DATA  6.0  ,"Cost of cooling"
440  READ DUM,INSTRING$(1)
450 '
460 '  ----- OPEN NECESSARY FILES
470 '
480 OPEN "INITVAL.SOL" FOR OUTPUT AS 1
490 '
500 '  ----- REQUEST NECESSARY DATA
510 '
520 CLS
530 GOSUB 890
540 LOCATE 17,12
550 PRINT"This program generates the INITVAL.SOL file needed by the ";
560 LOCATE 18,12
570 PRINT "TeliSolar program by Tesseract Enterprises Limited.";
580 LOCATE 19,12 : PRINT "  ";
590 LOCATE 20,12
600 PRINT "To accept the current default value, simple press the ENTER key";
610 LOCATE 21,12 : PRINT "when prompted for the new value.";
620 LOCATE 8,12 : INPUT "Monochrome or Color Adapter Board (M or C)";BOARD$
630 BOARD$ = LEFT$(BOARD$,1)
640 BOARD = -1
650 IF BOARD$ = "M" THEN BOARD = 1
660 IF BOARD$ = "C" THEN BOARD = 0
670 IF BOARD = -1 THEN 620
680 FOR I = 2 TO 29
690   READ VALUE,INSTRING$(I)
700   LOCATE 6,12 : PRINT SPACE$(60)
710   LOCATE 6,12 : PRINT "The current value for ";INSTRING$(I);" is ";VALUE
720   LOCATE 8,12 : PRINT SPACE$(60)
730   LOCATE 8,12 : PRINT "Enter your new value for ";INSTRING$(I);
740   INPUT NEWVALUE
750   IF NEWVALUE = 0 THEN USEVALUE = VALUE ELSE USEVALUE = NEWVALUE
760   SAVEVALUE(I) = USEVALUE
770 NEXT I
780 '
790 '  ----- WRITE NEW FILE
800 '
810 CLS
820 SAVEVALUE(1) = BOARD
830 FOR I = 1 TO 29
840   PRINT#1, SAVEVALUE(I),"     '";INSTRING$(I)
850   PRINT SAVEVALUE(I),INSTRING$(I)
860 NEXT I
870 CLOSE
880 SYSTEM
890 '
900 '  ----- SUBROUTINE TO DRAW A BOX
910 '
920 ROW = 5
930 LOCATE ROW,8
940 PRINT CHR$(201);STRING$(69,205);CHR$(187)
950 FOR J = 1 TO 10
960   LOCATE ROW+J,8
970   PRINT CHR$(186);SPACE$(69);CHR$(186)
980 NEXT J
990 LOCATE ROW+11,8
1000 PRINT CHR$(199);STRING$(69,196);CHR$(182)
1010 FOR J = 1 TO 8
1020   LOCATE ROW+11+J,8
1030   PRINT CHR$(186);SPACE$(69);CHR$(186)
1040 NEXT J
1050 LOCATE ROW+19,8
1060 PRINT CHR$(200);STRING$(69,205);CHR$(188)
1070 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0486

     Volume in drive A has no label
     Directory of A:\

    FILES486 TXT       867   4-02-86  11:53a
    HOUSE    DAT       568   6-14-85   3:32p
    INITVAL  SOL      1280   1-01-80  12:14a
    NOTES486 TXT      1233   4-02-86  11:56a
    READ     ME       2857  10-28-85   7:51p
    SINSTALL BAS      3072   3-10-84  10:27a
    SOLSTALL EXE     23794  10-28-85   7:18p
    TELISOL  DOC    182784  10-28-85   6:01p
    TELISOL  EXE     89075  10-28-85  10:01p
            9 file(s)     305530 bytes
                           13312 bytes free
