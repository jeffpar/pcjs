---
layout: page
title: "PC-SIG Diskette Library (Disk #395)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0395/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0395"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME INVENTORY"

    Keep track of everything you own; furniture, heirlooms, paintings,
    silver, collections, etc.  Know where everything is, where it came from
    and what it is worth.  Perfect for insurance coverage and claims.
    
    Use your own words or specialized expressions to describe all the data
    you record.  You can store and retrieve by various categories such as
    room or chairs or "Mother's." Record serial numbers or other
    identification.
    
    The documentation for this menu-driven program is extensive and very
    thorough.  Routines are included to print complete inventories or
    reports on specific categories.  A must for every homeowner!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES395.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 395   HOME INVENTORY SYSTEM                             v2.1
------------------------------------------------------------------------
Keeps track of everything you own (furniture, collections, etc.).  Data
can be stored and retrieved by several categories, rooms, etc.  The
documentation for the system is very complete; in fact it occupies
approximately 80% of the diskette.
 
RUNFIRST BAS  Copy of the Cover Letter.  Like a README File.
PRINTERS BAS  Modifications to use Different Printers.
 
    Documentation
    -------------------------------------------------------------------
TEXTPROC BAS  Text Processor, to produce the documentation.
DIRECTOR      The Program Directory.  What's What and How to Start.
TABLEOFC      Title, Copyright, and Table of Contents
INTRODUC      Introduction and Care of Diskettes
FIRSTIME      First Time Usage, Startup and Backup
GENINFOR      General Information
CREATFIL      Creating and Extending Data Files
INTROPER      Introduction to Personalization
PERVECT1      Personalizing the Rooms
PERVECT2      Personalizing the Owners
PERARRAY      Personalizing the General Categories
PERSUBAR      Personalizing the Specific Categories
PERVECT3      Personalizing the Colors
DATAENTR      Data Entry
RECDELET      Record Deletion
INQUIRYS      Formation of Inquiries
REDISPLA      Redisplay the Menu
STOPPING      How to Stop
TERMCOND      Terms and Conditions
 
    Main Program
    -----------------------------------------------------------------
YOURVOWN BAS  To enter, inquire, personalize and report data.
 
    Data Files
    ------------------------------------------------------------------
MESSAGES      Messages used by both the programs and documentation.
DOCHANGE      Documentation unique to YOUR VERY OWN Home Inventory.
VECTOR1       Initial Content of the Rooms
VECTOR2       Initial Content of the Owners
VECTOR3       Initial Content of the Colors
ARRAY         Initial Content of the General Categories
SUBARRAY      Initial Content of the Specific Categories
HIGH          Initial Setting of Highest Records Used.
 
    Other
    ----------------------------------------------------------------
CLEANDOC BAT  To remove the documentation programs and files from the
              Data Diskette.
 
PC-SIG
1030DE Duane, Suite
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright PC-SIG
```
{% endraw %}

## PRINTERS.BAS

{% raw %}
```bas
100 REM Program to show how to change the Printer Characteristics
110 REM By:  Melvin O. Duke
120 FOR I = 1 TO 5 : LPRINT : NEXT I
130 LPRINT TAB(10);"Modifications to use Other Printers"
140 LPRINT TAB(10);"-----------------------------------"
150 FOR I = 1 TO 2 : LPRINT : NEXT I
160 LPRINT TAB(10);"The 'default' printer for these programs is an IBM Matrix"
170 LPRINT TAB(10);"Printer.  If you have some other printer, you may have to"
180 LPRINT TAB(10);"make some changes to the two programs: TEXTPROC and"
190 LPRINT TAB(10);"YOURVOWN."
200 FOR I = 1 TO 4 : LPRINT : NEXT I
210 LPRINT TAB(10);"The changes to the TEXTPROC program consist of changing"
220 LPRINT TAB(10);"the following lines within that program.  Each of these"
230 LPRINT TAB(10);"lines contain one or more characters which control the"
240 LPRINT TAB(10);"printer."
250 LPRINT
260 LPRINT TAB(10);"It will be necessary for you to look in the Technical"
270 LPRINT TAB(10);"Manual for your printer to find out just what characters"
280 LPRINT TAB(10);"are used to perform the same functions.  Then you must"
290 LPRINT TAB(10);"replace the 'default' settings with those of your printer."
300 FOR I = 1 TO 2 : LPRINT : NEXT I
310 REM Set Printer Characteristics
320 LPRINT TAB(10);
330 LPRINT "220 WIDE.ON$     = CHR$(14)       'Set Expanded Print ON"
340 LPRINT TAB(10);
350 LPRINT "230 WIDE.OFF$    = CHR$(18)       'Set Expanded Print OFF"
360 LPRINT TAB(10);
370 LPRINT "240 BOLD.ON$     = CHR$(27)+";CHR$(34);"E";CHR$(34);
380 LPRINT "   'Set Emphasized Print ON"
390 LPRINT TAB(10);
400 LPRINT "240 BOLD.ON$     = CHR$(27)+";CHR$(34);"F";CHR$(34);
410 LPRINT "   'Set Emphasized Print OFF"
420 LPRINT TAB(10);
430 LPRINT "260 SQUEEZE.ON$  = CHR$(15)       'Set Compressed Print ON"
440 LPRINT TAB(10);
450 LPRINT "270 SQUEEZE.OFF$ = CHR$(18)       'Set Compressed Print OFF"
460 LPRINT TAB(10);
470 LPRINT "280 PAGE.EJECT$  = CHR$(12)       'Skip to Top of Next Page"
480 FOR I = 1 TO 5 : LPRINT : NEXT I
490 LPRINT TAB(10);"A similar change must be made in the YOURVOWN Program."
500 LPRINT
510 LPRINT TAB(10);"The line:"
520 LPRINT
530 LPRINT TAB(10);
540 LPRINT "170 PAGE.EJECT$ = CHR$(12)        'Skip to Top of Next Page"
550 LPRINT
560 LPRINT TAB(10);"must be changed to correspond to the character used by"
570 LPRINT TAB(10);"your printer to move your paper to the top of the next"
580 LPRINT TAB(10);"sheet (page-eject)."
590 FOR I = 1 TO 17 : LPRINT : NEXT I
600 END
```
{% endraw %}

## RUNFIRST.BAS

{% raw %}
```bas
100 REM Home Inventory, Version 2.0, startup information.
110 FOR I = 1 TO 5 : PRINT : NEXT I
120 PRINT TAB(10);"To begin, bring up IBM PC DOS (Version 2.0 or later), and"
130 PRINT TAB(10);"BASIC.  (Note:  If you are using a printer other than the"
140 PRINT TAB(10);"IBM Matrix or IBM Graphics Printer, you may need to modify"
150 PRINT TAB(10);"the documentation to fit your printer.  Run the BASIC"
160 PRINT TAB(10);"program 'printers.bas' for more information.)"
170 PRINT
180 PRINT TAB(10);"Make sure that the printer is on, and then LOAD and RUN"
190 PRINT TAB(10);"the BASIC program 'textproc.bas' from your Distribution"
200 PRINT TAB(10);"Diskette.  Select #1, for printing the Program Directory,"
210 PRINT TAB(10);"which you should read before continuing."
220 PRINT
230 PRINT TAB(10);"You should then print out a User's Manual.  You do this"
240 PRINT TAB(10);"by running the 'textproc.bas' program, and selecting each"
250 PRINT TAB(10);"of the other sections for printing.  (This is a large"
260 PRINT TAB(10);"manual, with 108 pages of detailed examples.  It will"
270 PRINT TAB(10);"take several hours to print the entire manual.)"
280 FOR I = 1 TO 3 : PRINT : NEXT I
290 END
```
{% endraw %}

## TEXTPROC.BAS

{% raw %}
```bas
100 REM YOUR VERY OWN Text Processor
110 REM Copyright 1985 by Melvin O. Duke.
120 REM Date of last update: 17 May 1985.
130 '
140 REM Device Constants
150 WIDTH "scrn:",80
160 SCREEN 0,1,0,0
170 '
180 REM Dimension Statements for Messages, Arrays, and Vectors
190 DIM TAG$(600)
200 '
210 REM Set Printer Characteristics
220 WIDE.ON$     = CHR$(14)          'Set Expanded Print ON
230 WIDE.OFF$    = CHR$(18)          'Set Expanded Print OFF
240 BOLD.ON$     = CHR$(27)+"E"      'Set Emphasized Print ON
250 BOLD.OFF$    = CHR$(27)+"F"      'Set Emphasized Print OFF
260 SQUEEZE.ON$  = CHR$(15)          'Set Compressed Print ON
270 SQUEEZE.OFF$ = CHR$(18)          'Set Compressed Print OFF
280 PAGE.EJECT$  = CHR$(12)          'Skip to Top of Next Page
290 '
300 REM Set Masks for Compressed Printing
310 MASK$(0) = SPACE$(89)
320 MASK$(1) = "+"+STRING$(87,"-")+"+"
330 MASK$(2) = "|"+STRING$(87," ")+"|"
340 MASK$(3) = "|    +"+STRING$(77,"-")+"+    |"
350 MASK$(4) = "|    |"+STRING$(77," ")+"|    |"
360 MASK$(5) = "|    +----+"+STRING$(72,"-")+"+    |"
370 MASK$(6) = "|    |    |"+STRING$(72," ")+"|    |"
380 MASK$(7) = "|    |                                      |                                      |    |"
390 MASK$(8) = STRING$(80,"=")
400 MASK$(9) = SPACE$(80)
410 '
420 REM Data File Constants
430 DATAFILE$ = "datafile"
440 ARRAY$    = "array"
450 SUBARRAY$ = "subarray"
460 VECTOR1$  = "vector1"
470 VECTOR2$  = "vector2"
480 VECTOR3$  = "vector3"
490 '
500 OPEN "messages" FOR INPUT AS #2
510 INPUT #2, TITLE$
520 TITLE1$ = "Documentation for YOUR VERY OWN " + TITLE$
530 INPUT #2, VERSION$
540 INPUT #2, COPY1$
550 INPUT #2, COPY2$
560 INPUT #2, COPY3$
570 '
580 REM Program Constants for Arrays
590 LDIM = 0 : UDIM = 16
600 '
610 REM Produce the first screen
620 KEY OFF : CLS
630 REM Draw the outer double box
640 R1 = 1 : C1 = 1 : R2 = 24 : C2 = 79 : GOSUB 1770
650 REM Find the title location
660 TITLE.POS = 40 - INT(LEN(TITLE1$)/2)
670 REM Draw the title box
680 R1=2:C1=TITLE.POS-4:R2=5:C2=TITLE.POS+LEN(TITLE1$)+3:GOSUB 1940
690 REM Print the Program Title and Version
700 LOCATE 3,TITLE.POS : PRINT TITLE1$
710 LOCATE 4,39-INT(LEN(VERSION$)/2) :  PRINT VERSION$;
720 '
730 REM Draw the Box to Identify the Collection of Programs
740 R1 = 6 : C1 =  5 : R2 = 18 : C2 = 75 : GOSUB 1770
750 REM Fill in the Box with Descriptions
760 LOCATE  7,7
770 PRINT "One of the Integrated-Information Management, Inquiry and Reporting"
780 LOCATE  8,10
790 PRINT "(I-IMIR) Series of Programs for the IBM PC Family of Computers."
800 REM Draw the IMIR Box and Fill it in.
810 LOCATE 10,13
820 PRINT "If you are using this program, and finding it of value,";
830 LOCATE 11,14
840 PRINT "your contribution ($35 suggested) will be anticipated.";
850 REM Draw the Box to Identify the Use, and Fill it in
860 R1 = 12 : C1 = 28 : R2 = 17 : C2 = 52 : GOSUB 1940
870 LOCATE 13,33 : PRINT "Melvin O. Duke"
880 LOCATE 14,33 : PRINT "P.O. Box 20836"
890 LOCATE 15,31 : PRINT "San Jose, CA  95160"
900 LOCATE 16,33 : PRINT "(408) 268-6637"
910 '
920 REM Draw the Copyright box
930 R1 = 19 : C1 = 24 : R2 = 23 : C2 = 56 : GOSUB 1770
940 REM Print the Copyright
950 LOCATE 20,40-INT(LEN(COPY1$)/2) :  PRINT COPY1$;
960 LOCATE 21,40-INT(LEN(COPY2$)/2) :  PRINT COPY2$;
970 LOCATE 22,40-INT(LEN(COPY3$)/2) :  PRINT COPY3$;
980 '
990 REM ask user to press a key to continue
1000 LOCATE 25,1
1010 PRINT "Press any key to continue.";
1020 K$ = INKEY$ : IF K$ = "" THEN 1020
1030 '
1040 REM Obtain Program Messages
1050 CLS : LOCATE 23,1 : PRINT "Preparing Program Messages"
1060 FOR M.NO = 0 TO 39
1070   LINE INPUT #2, TAG$(M.NO)
1080   PRINT TAG$(M.NO),
1090 NEXT M.NO
1100 TAG$(40) = TITLE$
1110 PRINT
1120 CLOSE #2
1130 '
1140 REM Obtain Current Content of Vector1
1150 PRINT "Preparing ";TAG$(1)
1160 OPEN VECTOR1$ FOR INPUT AS #2
1170 FOR CT = LDIM TO UDIM
1180  LINE INPUT #2, TAG$(100+CT)
1190  PRINT TAG$(100+CT),
1200 NEXT CT
1210 PRINT
1220 CLOSE #2
1230 '
1240 REM Obtain Current Content of Vector3
1250 PRINT "Preparing ";TAG$(2)
1260 OPEN VECTOR3$ FOR INPUT AS #2
1270 FOR CT = LDIM TO UDIM
1280  LINE INPUT #2, TAG$(300 + CT)
1290  PRINT TAG$(300 + CT),
1300 NEXT CT
1310 PRINT
1320 CLOSE #2
1330 '
1340 REM Obtain Current Content of the Array
1350 PRINT "Preparing ";TAG$(3)
1360 OPEN ARRAY$ FOR INPUT AS #2
1370 FOR CT = LDIM TO UDIM
1380  LINE INPUT #2, TAG$(400 + CT)
1390  PRINT TAG$(400 + CT),
1400 NEXT CT
1410 PRINT
1420 CLOSE #2
1430 '
1440 REM Obtain Current Content of the sub-Array
1450 PRINT "Preparing ";TAG$(4)
1460 OPEN SUBARRAY$ FOR INPUT AS #2
1470 FOR CT = LDIM TO 3
1480  FOR CY = LDIM TO 32
1490   LINE INPUT #2, TEMP$
1491    IF CT = 1 AND CY < 17 THEN TAG$(450+CY) = TEMP$ : PRINT TAG$(450+CY),
1492    IF CT = 2 AND CY < 17 THEN TAG$(500+CY) = TEMP$ : PRINT TAG$(500+CY),
1493    IF CT = 3 AND CY < 17 THEN TAG$(550+CY) = TEMP$ : PRINT TAG$(550+CY),
1500  NEXT CY
1510 NEXT CT
1520 PRINT
1530 CLOSE #2
1540 '
1550 REM Obtain Current Content of Vector2
1560 PRINT "Preparing ";TAG$(5)
1570 OPEN VECTOR2$ FOR INPUT AS #2
1580 FOR CT = LDIM TO UDIM
1590  LINE INPUT #2, TAG$(200 + CT)
1600  PRINT TAG$(200 + CT),
1610 NEXT CT
1620 PRINT
1630 CLOSE #2
1640 '
1650 REM Obtain the Documentation Changes
1660 PRINT "Preparing Documentation Changes"
1670 OPEN "dochange" FOR INPUT AS #2
1680  INPUT #2, TAG.NO
1690  PRINT TAG.NO,
1700  LINE INPUT #2, TAG.VALUE$
1710  PRINT TAG.VALUE$
1720  IF TAG.VALUE$ = "eof" THEN 1750
1730  TAG$(TAG.NO) = TAG.VALUE$
1740  GOTO 1680
1750 CLOSE #2
1760 GOTO 2110
1770 REM subroutine to print a double box
1780 COLOR 5
1790 FOR I = R1 + 1 TO R2 - 1
1800  LOCATE I, C1 : PRINT CHR$(186);
1810  LOCATE I, C2 : PRINT CHR$(186);
1820 NEXT I
1830 FOR J = C1 + 1 TO C2 - 1
1840  LOCATE R1, J : PRINT CHR$(205);
1850  LOCATE R2, J : PRINT CHR$(205);
1860 NEXT J
1870  LOCATE R1, C1 : PRINT CHR$(201);
1880  LOCATE R1, C2 : PRINT CHR$(187);
1890  LOCATE R2, C1 : PRINT CHR$(200);
1900  LOCATE R2, C2 : PRINT CHR$(188);
1910 COLOR 7
1920 RETURN
1930 '
1940 REM subroutine to print a single box
1950 COLOR 3
1960 FOR I = R1 + 1 TO R2 - 1
1970  LOCATE I, C1 : PRINT CHR$(179);
1980  LOCATE I, C2 : PRINT CHR$(179);
1990 NEXT I
2000 FOR J = C1 + 1 TO C2 - 1
2010  LOCATE R1, J : PRINT CHR$(196);
2020  LOCATE R2, J : PRINT CHR$(196);
2030 NEXT J
2040  LOCATE R1, C1 : PRINT CHR$(218);
2050  LOCATE R1, C2 : PRINT CHR$(191);
2060  LOCATE R2, C1 : PRINT CHR$(192);
2070  LOCATE R2, C2 : PRINT CHR$(217);
2080 COLOR 7
2090 RETURN
2100 '
2110 REM Menu of the available Documentation Sections.
2120 CLS
2130 REM Draw the Menu itself.
2140 CLS
2150 REM Draw the Outer Double Box.
2160 R1 = 1 : C1 = 1 : R2 = 23 : C2 = 79 : GOSUB 1770
2170 REM Draw the Heading Separator.
2180 R1 = 3 : C1 = 1 : R2 = 3 : C2 = 79 : GOSUB 2940
2190 REM Draw the Vertical Separators.
2200 R1 = 1 : C1 = 6 : R2 = 23 : C2 = 6 : GOSUB 3030
2210 REM Attach the intersections
2220 COLOR 5
2230 LOCATE 3, 6 : PRINT CHR$(197);
2240 COLOR 7,0
2250 REM Print the content of the menu.
2260 COLOR 0,7
2270 LOCATE 2,3 : PRINT "No";
2280 LOCATE 2,8 : PRINT "Section of the Documentation";
2290 COLOR 7,0
2300 COLOR 0,7 : LOCATE  4,3 : PRINT " 1"; : COLOR 6,0
2310 LOCATE  4, 8 : PRINT "Program Directory"
2320 COLOR 0,7 : LOCATE  6,3 : PRINT " 2"; : COLOR 6,0
2330 LOCATE  6, 8 : PRINT "Title, Copyright, and Table of Contents"
2340 COLOR 0,7 : LOCATE  7,3 : PRINT " 3"; : COLOR 6,0
2350 LOCATE  7, 8 : PRINT "Introduction and Care of Diskettes"
2360 COLOR 0,7 : LOCATE  8,3 : PRINT " 4"; : COLOR 6,0
2370 LOCATE  8, 8 : PRINT "First Time Usage, Startup and Backup"
2380 COLOR 0,7 : LOCATE  9,3 : PRINT " 5"; : COLOR 6,0
2390 LOCATE  9, 8 : PRINT "General Information"
2400 COLOR 0,7 : LOCATE 10,3 : PRINT " 6"; : COLOR 6,0
2410 LOCATE 10, 8 : PRINT "Creating and Extending Data Files"
2420 COLOR 0,7 : LOCATE 11,3 : PRINT " 7"; : COLOR 6,0
2430 LOCATE 11, 8 : PRINT "Introduction to Personalization"
2440 COLOR 0,7 : LOCATE 12,3 : PRINT " 8"; : COLOR 6,0
2450 LOCATE 12, 8 : PRINT "Personalizing the "+TAG$(1)
2460 COLOR 0,7 : LOCATE 13,3 : PRINT " 9"; : COLOR 6,0
2470 LOCATE 13, 8 : PRINT "Personalizing the "+TAG$(5)
2480 COLOR 0,7 : LOCATE 14,3 : PRINT "10"; : COLOR 6,0
2490 LOCATE 14, 8 : PRINT "Personalizing the "+TAG$(3)
2500 COLOR 0,7 : LOCATE 15,3 : PRINT "11"; : COLOR 6,0
2510 LOCATE 15, 8 : PRINT "Personalizing the "+TAG$(4)
2520 COLOR 0,7 : LOCATE 16,3 : PRINT "12"; : COLOR 6,0
2530 LOCATE 16, 8 : PRINT "Personalizing the "+TAG$(2)
2540 COLOR 0,7 : LOCATE 17,3 : PRINT "13"; : COLOR 6,0
2550 LOCATE 17, 8 : PRINT "Data Entry"
2560 COLOR 0,7 : LOCATE 18,3 : PRINT "14"; : COLOR 6,0
2570 LOCATE 18, 8 : PRINT "Record Deletion"
2580 COLOR 0,7 : LOCATE 19,3 : PRINT "15"; : COLOR 6,0
2590 LOCATE 19, 8 : PRINT "Inquiries"
2600 COLOR 0,7 : LOCATE 20,3 : PRINT "16"; : COLOR 6,0
2610 LOCATE 20, 8 : PRINT "Redisplay"
2620 COLOR 0,7 : LOCATE 21,3 : PRINT "17"; : COLOR 6,0
2630 LOCATE 21, 8 : PRINT "How to Stop"
2640 COLOR 0,7 : LOCATE 22,3 : PRINT "18"; : COLOR 6,0
2650 LOCATE 22, 8 : PRINT "Terms and Conditions"
2660 COLOR 7,0
2670 REM Now obtain User Response
2680 LOCATE 24,1 : INPUT "Type a Section Number (0 to quit) and press 'enter'."; REPLY$
2690 IF REPLY$ = "" THEN 2690
2700 REPLY = INT(VAL(REPLY$))
2710 IF REPLY = 0 THEN 6790
2720 IF REPLY < 0 OR REPLY > 18 THEN 2100
2730 IF REPLY =  1 THEN PAGE.NO = -1 : OPEN "director" FOR INPUT AS #1 : GOTO 2920
2740 IF REPLY =  2 THEN PAGE.NO = -5 : OPEN "tableofc" FOR INPUT AS #1 : GOTO 2920
2750 IF REPLY =  3 THEN PAGE.NO = 0 : OPEN "introduc" FOR INPUT AS #1 : GOTO 2920
2760 IF REPLY =  4 THEN PAGE.NO = 4 : OPEN "firstime" FOR INPUT AS #1 : GOTO 2920
2770 IF REPLY =  5 THEN PAGE.NO = 10 : OPEN "geninfor" FOR INPUT AS #1 : GOTO 2920
2780 IF REPLY =  6 THEN PAGE.NO = 16 : OPEN "creatfil" FOR INPUT AS #1 : GOTO 2920
2790 IF REPLY =  7 THEN PAGE.NO = 22 : OPEN "introper" FOR INPUT AS #1 : GOTO 2920
2800 IF REPLY =  8 THEN PAGE.NO = 24 : OPEN "pervect1" FOR INPUT AS #1 : GOTO 2920
2810 IF REPLY =  9 THEN PAGE.NO = 30 : OPEN "pervect2" FOR INPUT AS #1 : GOTO 2920
2820 IF REPLY = 10 THEN PAGE.NO = 36 : OPEN "perarray" FOR INPUT AS #1 : GOTO 2920
2830 IF REPLY = 11 THEN PAGE.NO = 40 : OPEN "persubar" FOR INPUT AS #1 : GOTO 2920
2840 IF REPLY = 12 THEN PAGE.NO = 46 : OPEN "pervect3" FOR INPUT AS #1 : GOTO 2920
2850 IF REPLY = 13 THEN PAGE.NO = 54 : OPEN "dataentr" FOR INPUT AS #1 : GOTO 2920
2860 IF REPLY = 14 THEN PAGE.NO = 72 : OPEN "recdelet" FOR INPUT AS #1 : GOTO 2920
2870 IF REPLY = 15 THEN PAGE.NO = 80 : OPEN "inquirys" FOR INPUT AS #1 : GOTO 2920
2880 IF REPLY = 16 THEN PAGE.NO = 100 : OPEN "redispla" FOR INPUT AS #1 : GOTO 2920
2890 IF REPLY = 17 THEN PAGE.NO = 102 : OPEN "stopping" FOR INPUT AS #1 : GOTO 2920
2900 IF REPLY = 18 THEN PAGE.NO = 106 : OPEN "termcond" FOR INPUT AS #1 : GOTO 2920
2910 STOP
2920 REM File is open, obtain the data, and process it.
2930 GOTO 3130
2940 REM Subroutine to draw a single horizontal line.  Attach to double.
2950 COLOR 5
2960 FOR J = C1 + 1 TO C2 - 1
2970  LOCATE R1,J : PRINT CHR$(196);
2980 NEXT J
2990 LOCATE R1,C1 : PRINT CHR$(199);
3000 LOCATE R1,C2 : PRINT CHR$(182);
3010 COLOR 7
3020 RETURN
3030 REM Subroutine to draw a single vertical line.  Attach to double.
3040 COLOR 5
3050 FOR I = R1 + 1 TO R2 - 1
3060  LOCATE I,C1 : PRINT CHR$(179);
3070 NEXT I
3080 LOCATE R1,C1 : PRINT CHR$(209);
3090 LOCATE R2,C1 : PRINT CHR$(207);
3100 COLOR 7
3110 RETURN
3120 '
3130 REM Text Processor Actually begins here.
3140 REM Program to produce the User's Manual for all YVO Programs.
3150 REM All text is line-input from data files.
3160 '
3170 REM Data for the Title Page and Parameters
3180 DOC.NAME$ = "User's Manual"
3190 IF REPLY = 1 THEN DOC.NAME$ = "Program Directory"
3200 LINE.NO = 1
3210 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
3220 GOSUB 3730  'For heading space
3230 FOR I = 1 TO 6 : LPRINT : NEXT I
3240 LPRINT BOLD.ON$; 'Set Emphasized mode
3250 LPRINT WIDE.ON$;  'Set Expanded Print
3260 LPRINT TAB(TAB.POS-4);"YOUR VERY OWN"
3270 LPRINT WIDE.OFF$;  'Return to normal
3280 FOR I = 1 TO 3 : LPRINT : NEXT I
3290 LPRINT WIDE.ON$;  'Set Expanded Print
3300 LPRINT TAB(TAB.POS-5);TITLE$
3310 LPRINT WIDE.OFF$;  'Return to normal
3320 FOR I = 1 TO 15 : LPRINT : NEXT I
3330 LPRINT WIDE.ON$;  'Set Expanded Print
3340 LPRINT TAB(TAB.POS-5); DOC.NAME$
3350 LPRINT WIDE.OFF$;  'Return to normal
3360 FOR I = 1 TO 15 : LPRINT : NEXT I
3370 LPRINT WIDE.ON$;  'Set Expanded Print
3380 LPRINT TAB(TAB.POS-5); "Melvin O. Duke"
3390 LPRINT WIDE.OFF$;  'Return to normal
3400 LPRINT BOLD.OFF$; 'Return to normal
3410 LINE.NO = LINE.NO + 42
3420 REM Expect .pa or .h1 to follow
3430 '
3440 LINE INPUT #1, REPLY$
3450  PRINT REPLY$
3460 '
3470 REM test for a command
3480 IF LEFT$(REPLY$,1) = "." THEN GOSUB 4040: GOTO 3440
3490 IF LINE.NO > 56 THEN GOSUB 3810
3500 REM Print the line if not a command
3510 REM First turn the tags into text
3520  FORMAT$ = ""
3530  FOR K = 1 TO LEN(REPLY$)
3540   TEST.CHR$ = MID$(REPLY$,K,1)
3550   IF TEST.CHR$ = "~" THEN TEST.CHR$ = CHR$(34)
3560   IF TEST.CHR$ = "^" THEN 3580 ELSE 3640
3570 '
3580    REM Found a Tag, in the form ^nnn
3590    TAG.NO = VAL(MID$(REPLY$,K+1,3))
3600    FORMAT$ = FORMAT$ + TAG$(TAG.NO)
3610    K = K + 3
3620    GOTO 3660
3630 '
3640    REM no tag in this position
3650    FORMAT$ = FORMAT$ + TEST.CHR$
3660  NEXT K
3670  LPRINT TAB(TAB.POS);FORMAT$
3680   PRINT FORMAT$
3690 LINE.NO = LINE.NO + 1
3700 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
3710 GOTO 3440  'for next line-input
3720 '
3730 REM Top of each page routine
3740 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
3750 FOR I = 1 TO 3
3760  LPRINT
3770 NEXT I
3780 LINE.NO = LINE.NO + 3
3790 RETURN
3800 '
3810 REM Bottom of each page Routine
3820 IF PAGE.NO < 1 THEN LPRINT : LPRINT : LPRINT : GOTO 3950
3830 LPRINT TAB(TAB.POS); STRING$(60,45)  'on line 58
3840 CENTER = (LEN(TITLE$)+14)/2
3850 LPRINT TAB(TAB.POS+30-CENTER); "YOUR VERY OWN " + TITLE$  'on line 59
3860 IF PAGE.NO MOD 2 = 1 THEN 3900
3870 LPRINT TAB(TAB.POS);"Page";PAGE.NO;
3880 LPRINT TAB(TAB.POS+60-LEN(DOC.NAME$)); DOC.NAME$
3890 GOTO 3950
3900 LPRINT TAB(TAB.POS); DOC.NAME$;
3910 IF PAGE.NO < 10 THEN DELTA = 54
3920 IF PAGE.NO >  9 THEN DELTA = 53
3930 IF PAGE.NO > 99 THEN DELTA = 52
3940 LPRINT TAB(TAB.POS+DELTA); "Page"; PAGE.NO  'on line 60
3950 REM Page-eject follows
3960 LPRINT PAGE.EJECT$;
3970 PAGE.NO = PAGE.NO + 1
3980 LINE.NO = 1
3990 IF REPLY$ = ".eof" THEN 4010  'Bypass after last page
4000 GOSUB 3730  'For top of next page
4010 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
4020 RETURN
4030 '
4040 REM Command Processor
4050 IF LEFT$(REPLY$,3) = ".h1" THEN 4190       'head-level 1
4060 IF LEFT$(REPLY$,3) = ".h2" THEN 4360       'head-level 2
4070 IF LEFT$(REPLY$,3) = ".h3" THEN 4640       'heal-level 3
4080 IF LEFT$(REPLY$,3) = ".sp" THEN 4920       'single space
4090 IF LEFT$(REPLY$,4) = ".eof" THEN 4980      'end of file
4100 IF LEFT$(REPLY$,3) = ".pa" THEN 5040       'page-eject
4110 IF LEFT$(REPLY$,3) = ".vt" THEN 5120       'vertical tab
4120 IF LEFT$(REPLY$,3) = ".pk" THEN 5240       'compressed
4130 IF LEFT$(REPLY$,3) = ".in" THEN 6440       'indented
4140 IF LEFT$(REPLY$,3) = ".cm" THEN 6480       'comments
4150 IF LEFT$(REPLY$,3) = ".tc" THEN 6510       'table of contents
4160 IF LEFT$(REPLY$,3) = ".pn" THEN 6750       'page Number
4170 STOP : GOTO 4170
4180 '
4190 REM Head 1 Processor  (.h1)
4200 FOR I = LINE.NO TO 57
4210  LPRINT
4220 NEXT I
4230 GOSUB 3810  'Bottom of page Routine
4240 IF PAGE.NO MOD 2 = 0 THEN GOSUB 5040  'For h1 on Odd pages
4250 LPRINT BOLD.ON$;  'Set Emphasized
4260 LPRINT WIDE.ON$;  'Set expanded print
4270 ADJUST = -6
4280 LPRINT TAB(TAB.POS+ADJUST); RIGHT$(REPLY$,LEN(REPLY$)-4)
4290  PRINT RIGHT$(REPLY$,LEN(REPLY$)-4)
4300 LPRINT WIDE.OFF$;  'Return to normal
4310 LPRINT BOLD.OFF$; 'Return to normal
4320 LINE.NO = LINE.NO+1
4330 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
4340 RETURN
4350 '
4360 REM Head 2 Processor (.h2)
4370 IF LINE.NO = 4 THEN 4390 'skip spacing if at top of page
4380 IF LINE.NO > 56 THEN GOSUB 5040 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
4390 REM First turn the tags into text
4400  FORMAT$ = ""
4410  FOR K = 5 TO LEN(REPLY$)
4420   TEST.CHR$ = MID$(REPLY$,K,1)
4430   IF TEST.CHR$ = "~" THEN TEST.CHR$ = CHR$(34)
4440   IF TEST.CHR$ = "^" THEN 4460 ELSE 4520
4450 '
4460    REM Found a Tag, in the form ^nnn at end of reply$
4470    TAG.NO = VAL(MID$(REPLY$,K+1,3))
4480    FORMAT$ = FORMAT$ + TAG$(TAG.NO)
4490    K = LEN(REPLY$)
4500    GOTO 4540
4510 '
4520    REM no tag in this position
4530    FORMAT$ = FORMAT$ + TEST.CHR$
4540  NEXT K
4550 LPRINT BOLD.ON$;  'Set emphasized print
4560 LPRINT TAB(TAB.POS); FORMAT$
4570  PRINT FORMAT$
4580 LPRINT BOLD.OFF$;  'Return to normal
4590 LPRINT
4600 LINE.NO = LINE.NO + 2
4610 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
4620 RETURN
4630 '
4640 REM Head 3 Processor  (.h3)
4650 IF LINE.NO = 4 THEN 4670 'skip spacing if at top of page
4660 IF LINE.NO > 56 THEN GOSUB 5040 ELSE LPRINT:LPRINT:LINE.NO = LINE.NO+2
4670 REM First turn the tags into text
4680  FORMAT$ = ""
4690  FOR K = 5 TO LEN(REPLY$)
4700   TEST.CHR$ = MID$(REPLY$,K,1)
4710   IF TEST.CHR$ = "~" THEN TEST.CHR$ = CHR$(34)
4720   IF TEST.CHR$ = "^" THEN 4740 ELSE 4800
4730 '
4740    REM Found a Tag, in the form ^nnn at end of reply$
4750    TAG.NO = VAL(MID$(REPLY$,K+1,3))
4760    FORMAT$ = FORMAT$ + TAG$(TAG.NO)
4770    K = LEN(REPLY$)
4780    GOTO 4820
4790 '
4800    REM no tag in this position
4810    FORMAT$ = FORMAT$ + TEST.CHR$
4820  NEXT K
4830 LPRINT BOLD.ON$;  'Set emphasized print
4840 LPRINT TAB(TAB.POS); FORMAT$
4850  PRINT FORMAT$
4860 LPRINT BOLD.OFF$;  'Return to normal
4870 LPRINT
4880 LINE.NO = LINE.NO + 2
4890 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
4900 RETURN
4910 '
4920 REM Single Space Processor  (.sp)
4930 IF LINE.NO = 4 THEN 4950
4940 IF LINE.NO > 57 THEN GOSUB 5040 ELSE LPRINT : LINE.NO = LINE.NO + 1
4950 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
4960 RETURN
4970 '
4980 REM End of File Processor  (.eof)
4990 GOSUB 5040 'Bottom of Page
5000 'LPRINT PAGE.EJECT$;
5010 CLOSE #1
5020 GOTO 2110
5030 '
5040 REM Page Eject Processor   (.pa)
5050 FOR I = LINE.NO TO 57
5060  LPRINT
5070  LINE.NO = LINE.NO + 1
5080 NEXT I
5090 GOSUB 3810  'Bottom of Page Processing
5100 RETURN
5110 '
5120 REM Vertical Tab Processor  (.vt)
5130 IF LINE.NO = 4 THEN 5220
5140 IF LINE.NO > 57 THEN GOSUB 3810  'End of page
5150 QTY = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
5160 FOR I = 1 TO QTY
5170  LPRINT
5180  LINE.NO = LINE.NO + 1
5190  IF LINE.NO > 57 THEN I = QTY
5200 NEXT I
5210 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
5220 RETURN
5230 '
5240 REM Pack Processor (.pk)
5250 '
5260 REM set the initial format at null
5270 FORMAT$ = ""
5280 '
5290 REM if text begins with a ` then it is a formatted image line
5300 IF MID$(REPLY$,5,1) = "`" THEN 5480
5310 REM scan packed line for tags, and replace if found
5320 FOR K = 5 TO LEN(REPLY$)
5330  TEST.CHR$ = MID$(REPLY$,K,1)
5340  IF TEST.CHR$ = "~" THEN TEST.CHR$ = CHR$(34)
5350  IF TEST.CHR$ = "^" THEN 5370 ELSE 5430
5360 '
5370  REM found a tag in the form ^nnn
5380  TAG.NO = VAL(MID$(REPLY$,K+1,3))
5390  FORMAT$ = FORMAT$ + TAG$(TAG.NO)
5400  K = K + 3
5410  GOTO 5450
5420 '
5430  REM no tag in this position
5440  FORMAT$ = FORMAT$ + TEST.CHR$
5450 NEXT K
5460 GOTO 6280
5470 '
5480 REM Formatted Image Line Processor
5490 REM Text in line began with a ` (grave accent)
5500 LOOK.POS = 6
5510 INSERT.NO = 0
5520 REM Determine mask number to use.
5530 BUILD$ = ""
5540 FOR K = LOOK.POS TO LEN(REPLY$)
5550  IF MID$(REPLY$,LOOK.POS,1) = "`" THEN 5590
5560  BUILD$ = BUILD$ + MID$(REPLY$,LOOK.POS,1)
5570  GOTO 5630
5580 '
5590  REM end of scan
5600  MASK.NO = VAL(BUILD$)
5610  FORMAT$ = MASK$(MASK.NO)
5620  K = LEN(REPLY$)
5630  LOOK.POS = LOOK.POS + 1
5640 NEXT K
5650 '
5660 REM Determine the Number of Insertions
5670 BUILD$ = ""
5680 FOR K = LOOK.POS TO LEN(REPLY$)
5690  IF MID$(REPLY$,LOOK.POS,1) = "`" THEN 5730
5700  BUILD$ = BUILD$ + MID$(REPLY$,LOOK.POS,1)
5710  GOTO 5760
5720 '
5730  REM end of scan
5740  INSERT.NO = VAL(BUILD$)
5750  K = LEN(REPLY$)
5760  LOOK.POS = LOOK.POS + 1
5770 NEXT K
5780 '
5790 REM Now are able to establish the line image
5800 FORMAT$ = MASK$(MASK.NO)
5810 IF MASK.NO = 9 AND TAG$(0) = "no" THEN RETURN  'no summary line
5820 '
5830 REM scan for insertions and place within the formatted line
5840 FOR INSERT = 1 TO INSERT.NO
5850  REM find the insert position
5860  BUILD$ = "" : WHERE = 0
5870  FOR K = LOOK.POS TO LEN(REPLY$)
5880   TEST.CHR$ = MID$(REPLY$,K,1)
5890   IF TEST.CHR$ <> "~" THEN 5920
5900   BUILD$ = BUILD$ + CHR$(34)
5910   GOTO 5980
5920   IF TEST.CHR$ = "`" THEN 5950
5930   BUILD$ = BUILD$ + TEST.CHR$
5940   GOTO 5980
5950   REM found the end of the insert position
5960   K = LEN(REPLY$)
5970   WHERE = VAL(BUILD$)
5980   LOOK.POS = LOOK.POS + 1
5990  NEXT K
6000  REM Now determine the text which needs to be inserted
6010  BUILD$ = ""
6020  FOR K = LOOK.POS TO LEN(REPLY$)
6030   TEST.CHR$ = MID$(REPLY$,K,1)
6040   IF TEST.CHR$ <> "~" THEN 6070
6050   BUILD$ = BUILD$ + CHR$(34)
6060   GOTO 6210
6070   IF TEST.CHR$ <> "`" THEN 6110
6080   REM delimiter character
6090   K = LEN(REPLY$)
6100   GOTO 6210
6110   REM search for a tag
6120   IF TEST.CHR$ <> "^" THEN 6190
6130   REM tag insertion routine
6140   TAG.NO = VAL(MID$(REPLY$,K+1,3))
6150   BUILD$ = BUILD$ + TAG$(TAG.NO)
6160   LOOK.POS = LOOK.POS + 3
6170   K = K + 3
6180   GOTO 6210
6190   REM normal character
6200   BUILD$ = BUILD$ + TEST.CHR$
6210   LOOK.POS = LOOK.POS + 1
6220  NEXT K
6230  WHAT$ = BUILD$
6240  REM now insert the text
6250  IF WHERE = 0 THEN LPRINT "*** ERROR in "; REPLY$ : GOTO 6270
6260  MID$(FORMAT$,WHERE,LEN(WHAT$)) = WHAT$
6270 NEXT INSERT
6280 REM Packed information ready to print
6290 IF LINE.NO > 57 THEN GOSUB 3810
6300 IF TAB.POS = 8 THEN ADJUST = 4
6310 IF TAB.POS = 13 THEN ADJUST = 7
6320 TAB.POS = TAB.POS + ADJUST + INDENT
6330 WIDTH "lpt1:", 132 'set condensed width
6340 REM Now have the line ready to print
6350 LPRINT SQUEEZE.ON$;  'Packed printing
6360 LPRINT TAB(TAB.POS); FORMAT$
6370  PRINT FORMAT$
6380 LPRINT SQUEEZE.OFF$;  'Return to normal
6390 WIDTH "lpt1:", 80  'return to normal
6400 LINE.NO = LINE.NO + 1
6410 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
6420 RETURN
6430 '
6440 REM Indent Processor  (.in)
6450 INDENT = VAL(RIGHT$(REPLY$,LEN(REPLY$)-3))
6460 RETURN
6470 '
6480 REM Comment Processor  (.cm)
6490 RETURN
6500 '
6510 REM Table of Contents Processor  (.tc)
6520 FORMAT$ = ""
6530 FOR DASHES = 1 TO 30 : FORMAT$ = FORMAT$+"- " : NEXT DASHES
6540 REM look for a tag
6550 FOR K = 9 TO LEN(REPLY$)
6560  TEST.CHR$ = MID$(REPLY$,K,1)
6570  IF TEST.CHR$ <> "^" THEN 6650
6580 '
6590  REM character was a tag
6600  TAG.NO = VAL(MID$(REPLY$,K+1,3))
6610  MID$(FORMAT$,K-8,LEN(TAG$(TAG.NO))+1) = TAG$(TAG.NO)+" "
6620  K = LEN(REPLY$)
6630  GOTO 6670
6640 '
6650  REM character was not a tag
6660  MID$(FORMAT$,K-8,1) = TEST.CHR$
6670 NEXT K
6680 MID$(FORMAT$,57,4) = MID$(REPLY$,4,4)
6690 LPRINT TAB(TAB.POS); FORMAT$
6700  PRINT FORMAT$
6710 LINE.NO = LINE.NO + 1
6720 IF PAGE.NO MOD 2 = 0 THEN TAB.POS = 8 ELSE TAB.POS = 13
6730 RETURN
6740 '
6750 REM Page Number Processor  (.pn)
6760 PAGE.NO = VAL(RIGHT$(REPLY$,LEN(REPLY$)-4))
6770 RETURN
6780 '
6790 CLS : LOCATE 21,1
6800 PRINT "End of Program"
6810 END
```
{% endraw %}

## YOURVOWN.BAS

{% raw %}
```bas
100 REM YOUR VERY OWN Program Distribution Master
110 REM Copyright 1985 by Melvin O. Duke.
120 REM Date of last update:  22 November 1985
130 '
140 REM Device Constants
150 WIDTH "scrn:",80
160 SCREEN 0,1,0,0
170 PAGE.EJECT$ = CHR$(12)        'Skip to Top of Next Page
180 '
190 DD$ = "a:"
200 ON ERROR GOTO 220
210 GOTO 290
220 DD$ = "b:"
230 ON ERROR GOTO 250
240 RESUME
250 DD$ = "c:"
260 ON ERROR GOTO 0
270 RESUME
280 '
290 OPEN DD$+"messages" FOR INPUT AS #2
300 ON ERROR GOTO 0
310 INPUT #2, TITLE$
320 TITLE$ = "YOUR VERY OWN " + TITLE$
330 INPUT #2, VERSION$
340 INPUT #2, COPY1$
350 INPUT #2, COPY2$
360 INPUT #2, COPY3$
370 '
380 REM Dimension Statements for Messages, Arrays, and Vectors
390 DIM MSG$(39)
400 DIM ARRY$(32), SUBARRY$(32,32), VECT1$(256), VECT2$(256), VECT3$(256)
410 '
420 REM Data File Constants
430 DATAFILE$ = "datafile"
440 ARRAY$    = "array"
450 SUBARRAY$ = "subarray"
460 VECTOR1$  = "vector1"
470 VECTOR2$  = "vector2"
480 VECTOR3$  = "vector3"
490 HIGH$     = "high"
500 '
510 REM Program Constants for Arrays
520 LDIM = 0 : UDIM = 16
530 VSCR = 16 : ASCR = 2
540 '
550 REM Produce the first screen
560 KEY OFF : CLS
570 REM Draw the outer double box
580 R1 = 1 : C1 = 1 : R2 = 24 : C2 = 79 : GOSUB 13870
590 REM Find the title location
600 TITLE.POS = 40 - INT(LEN(TITLE$)/2)
610 REM Draw the title box
620 'R1=2:C1=TITLE.POS-4:R2=5:C2=TITLE.POS+LEN(TITLE$)+3:GOSUB 14040
630 REM Print the Program Title and Version
640 LOCATE 3,TITLE.POS : PRINT TITLE$
650 LOCATE 4,39-INT(LEN(VERSION$)/2) :  PRINT VERSION$;
660 '
670 REM Draw the Box to Identify the Collection of Programs
680 R1 = 6 : C1 =  5 : R2 = 18 : C2 = 75 : GOSUB 13870
690 REM Fill in the Box with Descriptions
700 LOCATE  7,7
710 PRINT "One of the Integrated-Information Management, Inquiry and Reporting"
720 LOCATE  8,10
730 PRINT "(I-IMIR) Series of Programs for the IBM PC Family of Computers."
740 REM Draw the IMIR Box and Fill it in.
750 LOCATE 10,13
760 PRINT "If you are using this program, and finding it of value,";
770 LOCATE 11,14
780 PRINT "your contribution ($35 suggested) will be anticipated.";
790 REM Draw the Box to Identify the Use, and Fill it in
800 R1 = 12 : C1 = 28 : R2 = 17 : C2 = 52 : GOSUB 14040
810 LOCATE 13,33 : PRINT "Melvin O. Duke"
820 LOCATE 14,33 : PRINT "P.O. Box 20836"
830 LOCATE 15,31 : PRINT "San Jose, CA  95160"
840 LOCATE 16,33 : PRINT "(408) 268-6637"
850 '
860 REM Draw the Copyright box
870 R1 = 19 : C1 = 24 : R2 = 23 : C2 = 56 : GOSUB 13870
880 REM Print the Copyright
890 LOCATE 20,40-INT(LEN(COPY1$)/2) :  PRINT COPY1$;
900 LOCATE 21,40-INT(LEN(COPY2$)/2) :  PRINT COPY2$;
910 LOCATE 22,40-INT(LEN(COPY3$)/2) :  PRINT COPY3$;
920 '
930 REM ask user to press a key to continue
940 LOCATE 25,1
950 PRINT "Press any key to continue.";
960 K$ = INKEY$ : IF K$ = "" THEN 960
970 '
1000 REM Establish the Data File and its Appearance
1010 GOSUB 1030  'To Open the File and Set the Field
1020 GOTO 1060
1030 OPEN "R", #1, DD$+DATAFILE$, 96
1040 FIELD 1, 8 AS F1$, 2 AS F2$, 2 AS F3$, 2 AS F4$, 2 AS F5$, 8 AS F6$, 2 AS F7$, 11 AS F8$, 8 AS F9$, 11 AS F10$, 40 AS F11$
1050 RETURN
1060 CLOSE #1
1070 '
1080 REM Obtain Program Messages
1090 CLS : LOCATE 23,1 : PRINT "Preparing Program Messages"
1100 FOR M.NO = 0 TO 39
1110   INPUT #2, MSG$(M.NO)
1120 NEXT M.NO
1130 CLOSE #2
1140 '
1150 REM Obtain Current Content of Vector1
1160 PRINT "Preparing ";MSG$(1)
1170 OPEN DD$+VECTOR1$ FOR INPUT AS #2
1180 FOR CT = LDIM TO VSCR*UDIM
1190  INPUT #2, VECT1$(CT)
1200 NEXT CT
1210 CLOSE #2
1220 '
1230 REM Obtain Current Content of Vector3
1240 PRINT "Preparing ";MSG$(2)
1250 OPEN DD$+VECTOR3$ FOR INPUT AS #2
1260 FOR CT = LDIM TO VSCR*UDIM
1270  INPUT #2, VECT3$(CT)
1280 NEXT CT
1290 CLOSE #2
1300 '
1310 REM Obtain Current Content of the Array
1320 PRINT "Preparing ";MSG$(3)
1330 OPEN DD$+ARRAY$ FOR INPUT AS #2
1340 FOR CT = LDIM TO ASCR*UDIM
1350  INPUT #2, ARRY$(CT)
1360 NEXT CT
1370 CLOSE #2
1380 '
1390 REM Obtain Current Content of the sub-Array
1400 PRINT "Preparing ";MSG$(4)
1410 OPEN DD$+SUBARRAY$ FOR INPUT AS #2
1420 FOR CT = LDIM TO ASCR*UDIM
1430  FOR CY = LDIM TO ASCR*UDIM
1440   INPUT #2, SUBARRY$(CT,CY)
1450  NEXT CY
1460 NEXT CT
1470 CLOSE #2
1480 '
1490 REM Obtain Current Content of Vector2
1500 PRINT "Preparing ";MSG$(5)
1510 OPEN DD$+VECTOR2$ FOR INPUT AS #2
1520 FOR CT = LDIM TO VSCR*UDIM
1530  INPUT #2, VECT2$(CT)
1540 NEXT CT
1550 CLOSE #2
1560 '
1570 PRINT "Preparing Current Limits of Records"
1580 OPEN DD$+HIGH$ FOR INPUT AS #2
1590  INPUT #2, MAX.REC
1600  INPUT #2, HIGH.REC
1610 CLOSE #2
1620 '
1630 REM Draw the Menu of available user actions.
1640 CLS
1650 REM Draw the Outer Double Box.
1660 R1 = 1 : C1 = 1 : R2 = 21 : C2 = 79 : GOSUB 13870
1670 REM Draw the Heading Separator.
1680 R1 = 3 : C1 = 1 : R2 = 3 : C2 = 79 : GOSUB 14310
1690 REM Draw the Vertical Separators.
1700 R1 = 1 : C1 = 6 : R2 = 21 : C2 = 6 : GOSUB 14510
1710 REM Attach the intersections
1720 COLOR 5,0
1730 LOCATE 3, 6 : PRINT CHR$(197);
1740 COLOR 7,0
1750 '
1760 REM Print the content of the menu.
1770 COLOR 0,7
1780 LOCATE 2,3 : PRINT "No";
1790 LOCATE 2,8 : PRINT "Available Functions in " + TITLE$
1800 COLOR 7,0
1810 COLOR 0,7 : LOCATE  5,3 : PRINT " 1"; : COLOR 4,0
1820 LOCATE  5,  8 : PRINT "Create a New ";MSG$(16);" File.";
1830 COLOR 0,7 : LOCATE  6,3 : PRINT " 2"; : COLOR 4,0
1840 LOCATE  6,  8 : PRINT "Extend the ";MSG$(16);" File by 100 records.";
1850 COLOR 0,7 : LOCATE  8,3 : PRINT " 3"; : COLOR 2,0
1860 LOCATE  8,  8 : PRINT "Personalize or Redefine the ";MSG$(1);
1870 COLOR 0,7 : LOCATE  9,3 : PRINT " 4"; : COLOR 2,0
1880 LOCATE  9,  8 : PRINT "Personalize or Redefine the ";MSG$(5);
1890 COLOR 0,7 : LOCATE 10,3 : PRINT " 5"; : COLOR 2,0
1900 LOCATE 10,  8 : PRINT "Personalize or Redefine the ";MSG$(3);
1910 COLOR 0,7 : LOCATE 11,3 : PRINT " 6"; : COLOR 2,0
1920 LOCATE 11,  8 : PRINT "Personalize or Redefine the ";MSG$(4);
1930 COLOR 0,7 : LOCATE 12,3 : PRINT " 7"; : COLOR 2,0
1940 LOCATE 12,  8 : PRINT "Personalize or Redefine the ";MSG$(2);
1950 COLOR 0,7 : LOCATE 14,3 : PRINT " 8"; : COLOR 6,0
1960 LOCATE 14,  8 : PRINT "Enter or Update ";MSG$(16);" Information."
1970 COLOR 0,7 : LOCATE 16,3 : PRINT " 9"; : COLOR 6,0
1980 LOCATE 16,  8 : PRINT "Inquiry for Display or Printing."
1990 COLOR 0,7 : LOCATE 18,3 : PRINT "10"; : COLOR 7,0
2000 LOCATE 18, 8 : PRINT "Menu of Functions in: " + TITLE$ + " (This screen)."
2010 '
2020 REM Now obtain User Response
2030 LOCATE 23,1 : INPUT "Type a Function Number (0 to quit), and press the 'enter' key."; REPLY$
2040 REPLY = VAL(REPLY$)
2050 IF REPLY$ = "0" THEN 14610
2060 IF REPLY > 0 AND REPLY < 11 THEN 2150
2070 LOCATE 22,1 : PRINT "Function Number is Out of Range";
2080 LOCATE 25,1 : PRINT "Press any key to continue";
2090 A$ = INKEY$ : IF A$ = "" THEN 2090
2100 GOSUB 14670
2110 GOSUB 14680
2120 GOSUB 14690
2130 GOSUB 14700
2140 GOTO 2020
2150 IF REPLY =  1 THEN 2280  'Create a New File
2160 IF REPLY =  2 THEN 2870  'Extend the File by 100 Records
2170 IF REPLY =  3 THEN 7080  'Update Vector 1
2180 IF REPLY =  4 THEN 8690  'Update Vector 2
2190 IF REPLY =  5 THEN 7850  'Update the Array
2200 IF REPLY =  6 THEN 9070  'Update the sub-Array
2210 IF REPLY =  7 THEN 8310  'Update Vector 3
2220 IF REPLY =  8 THEN 2960  'Update the Data Records
2230 IF REPLY =  9 THEN 9680  'Inquiry Routine
2240 IF REPLY = 10 THEN 1630  'Re-draw the Menu
2250 LOCATE 22,1 : PRINT "Function Number must be a whole number"; : GOTO 2080
2260 '
2270 REM Routine to Write a New File
2280 REM First, produce a Warning Message before writing new file.
2290 CLS
2300 REM Draw the outer double box
2310 R1 = 1 : C1 = 1 : R2 = 21 : C2 = 79 : GOSUB 13870
2320 COLOR 4,0
2330 LOCATE 8,10
2340 PRINT "          ***  WARNING ***"
2350 LOCATE 10,3
2360 PRINT "This function creates a new ";MSG$(16);" File by completely"
2370 LOCATE 11,3
2380 PRINT "erasing the old file (if one exists), and by writing 100 new,"
2390 LOCATE 12,3
2400 PRINT "empty records.  Only the new file will now exist."
2410 COLOR 2,0
2420 LOCATE 14,3
2430 PRINT "If this is REALLY what you want to do,"
2440 LOCATE 15,3
2450 PRINT "type y (yes) and press the 'enter' key to continue."
2460 LOCATE 16,3
2470 PRINT "Otherwise, type anything else, and press the 'enter' key."
2480 COLOR 7,0
2490 LOCATE 23,1
2500 INPUT "Enter your desired action.",REPLY$
2510 IF REPLY$ = "y" THEN 2530 ELSE 1630
2520 '
2530 REM Routine to Create a Data File
2540 KILL DD$+DATAFILE$  'Get rid of any old file that exists
2550 GOSUB 1030  'To Open the File and Set the Field
2560 LOCATE 23,1 : PRINT SPACE$(79)
2570 LOCATE 23,1 : PRINT "Writing Record Number:";
2580 MAX.REC = 100  'Set size of new Data File
2590 GOSUB 2640     'To write 100 Records
2600 HIGH.REC = 0   'Set new Highest Record used
2610 GOSUB 14720    'To file the new maximums
2620 GOTO 1630      'Return to the Main Menu
2630 '
2640 REM Routine to Write 100 new Data Records
2650 FOR I = MAX.REC - 99 TO MAX.REC
2660  TEMP = -I
2670  TEMP$ = MKD$(TEMP)
2680  LSET F1$ = TEMP$       'record number
2690  TEMP$ = " "
2700  TEMP = 0
2710  LSET F2$ = MKI$(TEMP)  'Vector1 Number
2720  LSET F3$ = MKI$(TEMP)  'Array Number
2730  LSET F4$ = MKI$(TEMP)  'Sub-array Number
2740  LSET F5$ = MKI$(TEMP)  'Vector2 Number
2750  LSET F6$ = MKD$(TEMP)  'quantity
2760  LSET F7$ = MKI$(TEMP)  'Vector3 Number
2770  LSET F8$ = TEMP$       'First Date
2780  LSET F9$ = MKD$(TEMP)  'Amount
2790  LSET F10$ = TEMP$      'Second Date
2800  LSET F11$ = TEMP$      'Description
2810  LOCATE 23,24 : PRINT I;
2820  PUT #1, I
2830 NEXT I
2840 CLOSE #1
2850 RETURN
2860 '
2870 REM Routine to Extend the Data File by Another 100 Records
2880 GOSUB 1030  'To Open the File and Set the Field
2890 GOSUB 14680
2900 LOCATE 23,1 : PRINT "Writing Record Number:";
2910 MAX.REC = MAX.REC + 100
2920 GOSUB 2640   'To write 100 more records
2930 GOSUB 14720  'To file the new maximums
2940 GOTO 1630    'Return to the Main Menu
2950 '
2960 REM Routine to Enter or Update Data File Records
2970 REM Test to see that the File has been Created
2980 IF HIGH.REC >=0 THEN 3060
2990 CLS
3000 LOCATE 21,1 : PRINT "Cannot Update a File that Has not Yet Been Created.";
3010 LOCATE 22,1 : PRINT "Select the Creation of a New File from the Main Menu.";
3020 LOCATE 24,1 : PRINT "Press any key to continue";
3030 A$ = INKEY$ : IF A$ = "" THEN 3030
3040 GOTO 1630  'Main menu
3050 '
3060 REM Open the File and draw the Screen
3070 GOSUB 1030  'To Open the File and Set the Field
3080 REC.NO = 1
3090 CLS  'Screen Refresh returns here
3100 GOSUB 3110 : GOTO 3180
3110 REM Draw the Outer Box
3120 R1 = 1 : C1 = 1 : R2 = 21 : C2 = 79 : GOSUB 13870
3130 REM Draw the Heading Separator
3140 R1 = 3 : C1 = 1 : R2 = 3 : C2 = 79 : GOSUB 14210
3150 REM Draw the Vertical Separator
3160 R1 = 3 : C1 = 40 : R2 = 21 : C2 = 40 : GOSUB 14410
3170 RETURN
3180 LOCATE 2,3 : PRINT TITLE$ + " Entry or Update";
3190 LOCATE 23,1
3200 INPUT "Enter Record Number to Update (0 to quit, ? next available)";REPLY$
3210 REM test for validity of record number
3220 IF REPLY$ = "?" THEN 3240 ELSE 3550
3230 '
3240 REM Routine to Locate an Empty Record
3250 SWITCH = 0
3260 FOR LOOK = REC.NO TO MAX.REC
3270  REM Obtain the Next Record
3280  GET #1, LOOK
3290  REM Extract the Data
3300  T1 = CVD(F1$)
3310  IF T1 > 0 THEN 3360  'Bypass if Positive
3320  GOSUB 6940  'to Extract the pertinent data
3330  REM If Negative, then found an empty
3340  IF T1 < 0 THEN REC.NO = LOOK : LOOK = MAX.REC : GOTO 3490
3350  '
3360  REM Test for Top-of-file condition
3370  IF LOOK < MAX.REC THEN 3490
3380  IF LOOK = MAX.REC AND T1 > 0 THEN 3390 ELSE 3490
3390  SWITCH = 1
3400  GOSUB 14670 : LOCATE 22,1
3410  PRINT "No empty records at the top of the file.";
3420  GOSUB 14680 : LOCATE 23,1
3430  PRINT "File must be extended.";
3440  GOSUB 14690 : LOCATE 24,1
3450  PRINT "Select #2, Extend the File, from the main menu.";
3460  GOSUB 14700 : LOCATE 25,1
3470  PRINT "Press any key to continue.";
3480  A$ = INKEY$ : IF A$ = "" THEN 3480
3490 NEXT LOOK
3500 '
3510 REM Test if no records available
3520 IF SWITCH = 1 THEN CLOSE #1 : GOTO 1630  'Return to main menu
3530 GOTO 3600
3540 '
3550 REM Test Validity of User-specified Record-number
3560 REC.NO = VAL(REPLY$)
3570 IF REC.NO = 0 THEN CLOSE #1 : GOTO 1630  'Return to main menu
3580 IF REC.NO < 0 OR REC.NO > MAX.REC THEN 6640 ELSE 3600
3590 '
3600 REM obtain the record
3610 GET #1, REC.NO
3620 GOSUB 6940  'to Extract the pertinent data
3630 GOSUB 3660  'to draw the right half of the screen
3640 GOTO 4060  'to continue the program
3650 '
3660 REM Routine to Draw the Right Half of the Screen
3670 LOCATE  2,65 : PRINT "Record:";
3680 LOCATE  2,74 : PRINT SPACE$(5);
3690 LOCATE  2,74 : PRINT T1;
3700 LOCATE  4,55 : COLOR 0,7 : PRINT "Descriptions";
3710 LOCATE  5,42 : COLOR 6,0 : PRINT MSG$(6);
3720 LOCATE  5,55 : PRINT SPACE$(23);
3730 LOCATE  5,55 : COLOR 2,0 : PRINT T10$;
3740 LOCATE  6,42 : COLOR 6,0 : PRINT MSG$(7);
3750 LOCATE  6,55 : PRINT SPACE$(23);
3760 LOCATE  6,55 : COLOR 2,0 : PRINT VECT1$(T2);
3770 LOCATE  7,42 : COLOR 6,0 : PRINT MSG$(8);
3780 LOCATE  7,55 : PRINT SPACE$(23);
3790 LOCATE  7,55 : COLOR 2,0 : PRINT ARRY$(T3);
3800 LOCATE  8,42 : COLOR 6,0 : PRINT MSG$(9);
3810 LOCATE  8,55 : PRINT SPACE$(23);
3820 LOCATE  8,55 : COLOR 2,0 : PRINT SUBARRY$(T3,T4);
3830 LOCATE  9,42 : COLOR 6,0 : PRINT MSG$(10);
3840 LOCATE  9,55 : PRINT SPACE$(23);
3850 LOCATE  9,55 : COLOR 2,0 : PRINT VECT2$(T5);
3860 LOCATE 10,42 : COLOR 6,0 : PRINT MSG$(11);
3870 LOCATE 10,55 : PRINT SPACE$(23);
3880 LOCATE 10,55 : COLOR 2,0 : PRINT T6;
3890 LOCATE 11,42 : COLOR 6,0 : PRINT MSG$(12);
3900 LOCATE 11,55 : PRINT SPACE$(23);
3910 LOCATE 11,55 : COLOR 2,0 : PRINT VECT3$(T7);
3920 LOCATE 12,42 : COLOR 6,0 : PRINT MSG$(13);
3930 LOCATE 12,55 : PRINT SPACE$(23);
3940 LOCATE 12,55 : COLOR 2,0 : PRINT T8$;
3950 LOCATE 13,42 : COLOR 6,0 : PRINT MSG$(14);
3960 LOCATE 13,55 : PRINT SPACE$(23);
3970 LOCATE 13,55 : COLOR 2,0 : PRINT USING "########,.##"; T9#;
3980 LOCATE 14,42 : COLOR 6,0 : PRINT MSG$(15);
3990 LOCATE 14,55 : PRINT SPACE$(23);
4000 LOCATE 14,55 : COLOR 2,0 : PRINT LEFT$(T11$,20);
4010 LOCATE 15,55 : PRINT SPACE$(23);
4020 LOCATE 15,55 : IF LEN(T11$) > 20 THEN PRINT RIGHT$(T11$,LEN(T11$)-20);
4030 COLOR 7,0
4040 RETURN
4050 '
4060 REM Obtain User Input
4070 REM blank the left-side of the screen
4080 FOR R = LDIM TO UDIM
4090  LOCATE 4+R,3 : PRINT SPACE$(36);
4100 NEXT R
4110 LOCATE 24,1 : PRINT "('enter' to leave alone, '/ enter' to end record,)";
4120 LOCATE 25,1 : PRINT "(or reply as shown.)";
4130 REM Obtain the Record Number
4140 GOSUB 14680 : LOCATE 23,1
4150 INPUT "Enter the Record Number"; REPLY$
4160 TT1 = VAL(REPLY$)
4170 IF ABS(TT1) = ABS(T1) THEN 4280
4180 '
4190 REM Validate the Record-number
4200 IF REPLY$ = "" AND T1 > 0 THEN 4280
4210 IF REPLY$ = "/" THEN 4280
4220 LOCATE 23,1 : PRINT "Cannot Change the Record Number Value, or leave negative.";
4230 GOSUB 14700
4240 LOCATE 25,1 : PRINT "Press any key to continue";
4250 A$ = INKEY$ : IF A$ = "" THEN 4250
4260 GOTO 3080   'Data File Update
4270 '
4280 REM Accept the Record Number
4290 IF REPLY$ = "" THEN 4420
4300 IF REPLY$ = "/" THEN 6320
4310 IF TT1 >= 0 THEN 4390  'To continue
4320 '
4330 REM Blank Record with Negative Number
4340 T1 = TT1 : T2 = 0 : T3 = 0 : T4 = 0 : T5 = 0 : T6 = 0 : T7 = 0
4350 T8$ = " " : T9# = 0 : T10$ = " " : T11$ = " "
4360 GOSUB 3660  'to reprint
4370 GOTO 6320  'for save, more, or forget
4380 '
4390 T1 = TT1
4400 GOSUB 3660  'to reprint
4410 '
4420 REM Obtain the Second Date
4430 GOSUB 14680 : LOCATE 23,1
4440 PRINT "Enter the ";MSG$(18);" date as: 08 Nov 1984, or t (for today)";
4450 INPUT REPLY$
4460 IF REPLY$ = "" THEN 4510
4470 IF REPLY$ = "/" THEN 6320
4480 IF REPLY$ = "t" THEN GOSUB 6760 : REPLY$ = C$
4490 T10$= REPLY$
4500 GOSUB 3660  'to reprint
4510 '
4520 REM Obtain Vector 1 Number
4530 VT = 1
4540 MESSV$ = MSG$(19)
4550 GOSUB 4580
4560 IF REPLY$ = "/" THEN 6320
4570 GOTO 5050 'After Vectors
4580 REM Obtain any Vector Number
4590 ADJUST = 0
4600 LOCATE 4,7 : COLOR 0,7 : PRINT "Choices"; : COLOR 7,0
4610 FOR R = LDIM + 1 TO UDIM
4620  LOCATE 4+R, 3 : PRINT SPACE$(35);
4630  NMBR$ = SPACE$(3)
4640  COLOR 0,7
4650  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),3)
4660  LOCATE 4+R,3 : PRINT NMBR$;
4670  COLOR 2,0
4680  PRINT " ";
4690 IF VT = 1 THEN PRINT VECT1$(R+ADJUST);
4700 IF VT = 2 THEN PRINT VECT2$(R+ADJUST);
4710 IF VT = 3 THEN PRINT VECT3$(R+ADJUST);
4720 NEXT R
4730 COLOR 7,0
4740 GOSUB 14670 : GOSUB 14700
4750 IF ADJUST >= (VSCR-1)*UDIM THEN LOCATE 25,1 : PRINT "(or reply as shown.)";
4760 IF ADJUST >= (VSCR-1)*UDIM THEN 4780 'bypass last one
4770 LOCATE 25,1 : PRINT "('\ enter' to end screen, or reply as shown.)";
4780 GOSUB 14680 : LOCATE 23,1
4790 PRINT "Enter the ";MESSV$;" Number"; : INPUT REPLY$
4800 IF REPLY$ = "" THEN 5020
4810 IF REPLY$ = "/" THEN 5020
4820 IF REPLY$ <> "\" THEN 4860
4830 ADJUST = ADJUST + 16
4840 IF ADJUST >= VSCR * UDIM THEN REPLY$ = "" : GOTO 5020
4850 GOTO 4610 'For more choices
4860 TX = VAL(REPLY$)
4870 '
4880 REM Validate the User Response
4890 IF TX >= LDIM AND TX <= VSCR*UDIM THEN 4970
4900 LOCATE 22,1 : PRINT "Error in Reply";
4910 GOSUB 14700 : LOCATE 25,1 : PRINT "Press any key to continue";
4920 A$ = INKEY$ : IF A$ = "" THEN 4920
4930 IF VT = 1 THEN T2 = 0
4940 IF VT = 2 THEN T5 = 0
4950 IF VT = 3 THEN T7 = 0
4960 GOTO 4740   'for better reply
4970 REM Store the Values
4980 IF VT = 1 THEN T2 = TX
4990 IF VT = 2 THEN T5 = TX
5000 IF VT = 3 THEN T7 = TX
5010 GOSUB 3660  'to reprint
5020 LOCATE 25,1 : PRINT SPACE$(79);
5030 RETURN
5040 '
5050 REM Obtain the Array Number
5060 ADJUST = 0
5070 FOR R = LDIM + 1 TO UDIM
5080  LOCATE 4+R, 3 : PRINT SPACE$(37);
5090  NMBR$ = SPACE$(3)
5100  COLOR 0,7
5110  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),3)
5120  LOCATE 4+R, 3 : PRINT NMBR$;
5130  COLOR 2,0
5140  PRINT " "; ARRY$(R+ADJUST);
5150 NEXT R
5160 COLOR 7,0
5170 GOSUB 14670 : GOSUB 14700
5180 IF ADJUST >= (ASCR-1)*UDIM THEN LOCATE 25,1 : PRINT "(or reply as shown.)";
5190 IF ADJUST >= (ASCR-1)*UDIM THEN 5210
5200 LOCATE 25,1 : PRINT "('\ enter' to end screen, or reply as shown.)";
5210 GOSUB 14680 : LOCATE 23,1
5220 PRINT "Enter the ";MSG$(3);" Number"; : INPUT REPLY$
5230 IF REPLY$ = "" THEN 5390
5240 IF REPLY$ = "/" THEN 6320
5250 IF REPLY$ <> "\" THEN 5290
5260 ADJUST = ADJUST + 16
5270 IF ADJUST >= ASCR*UDIM THEN 5390
5280 GOTO 5070 'for more choices
5290 T3 = VAL(REPLY$)
5300 REM Validate the User Response
5310 IF T3 >= LDIM AND T3 <= ASCR*UDIM THEN 5370
5320 LOCATE 22,1 : PRINT "Error in Reply";
5330 GOSUB 14700 : LOCATE 25,1 : PRINT "Press any key to continue";
5340 A$ = INKEY$ : IF A$ = "" THEN 5340
5350 T3 = 0  'Reset T3
5360 GOTO 5170   'for better reply
5370 GOSUB 3660  'to reprint
5380 '
5390 REM Obtain the sub-Array Number
5400 CAT.NO = T3
5410 ADJUST = 0
5420 FOR R = LDIM + 1 TO UDIM
5430  LOCATE 4+R, 3 : PRINT SPACE$(37);
5440  NMBR$ = SPACE$(3)
5450  COLOR 0,7
5460  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),3)
5470  LOCATE 4+R,3 : PRINT NMBR$;
5480  COLOR 2,0
5490  PRINT " "; SUBARRY$(CAT.NO,R+ADJUST);
5500 NEXT R
5510 COLOR 7,0
5520 GOSUB 14670 : GOSUB 14700
5530 IF ADJUST >= (ASCR-1)*UDIM THEN LOCATE 25,1 : PRINT "(or reply as shown.)";
5540 IF ADJUST >= (ASCR-1)*UDIM THEN 5560  'bypass last one
5550 LOCATE 25,1 : PRINT "('\ enter' to end screen, or reply as shown.)";
5560 GOSUB 14680 : LOCATE 23,1
5570 PRINT "Enter the ";MSG$(4);" Number"; : INPUT REPLY$
5580 IF REPLY$ = "" THEN 5730
5590 IF REPLY$ = "/" THEN 6320
5600 IF REPLY$ <> "\" THEN 5640
5610 ADJUST = ADJUST + 16
5620 IF ADJUST >= ASCR*UDIM THEN 5730
5630 GOTO 5420  'For more choices
5640 T4 = VAL(REPLY$)
5650 REM Validate the User Response
5660 IF T4 >= LDIM AND T4 <= ASCR*UDIM THEN 5720
5670 LOCATE 22,1 : PRINT "Error in Reply";
5680 GOSUB 14700 : LOCATE 25,1 : PRINT "Press any key to continue";
5690 A$ = INKEY$ : IF A$ = "" THEN 5690
5700 T4 = 0 'Reset t4
5710 GOTO 5520
5720 GOSUB 3660  'to reprint
5730 '
5740 REM Obtain Vector 2 Number
5750 VT = 2
5760 MESSV$ = MSG$(20)
5770 GOSUB 4580
5780 IF REPLY$ = "/" THEN 6320
5790 GOTO 5820 'After Vector 2
5800 REM
5810 '
5820 REM Obtain the Quantity
5830 FOR R = LDIM TO UDIM
5840  LOCATE 4+R, 3 : PRINT SPACE$(36);
5850 NEXT R
5860 GOSUB 14670
5870 GOSUB 14700 : LOCATE 25,1 : PRINT "(or reply as shown.)";
5880 GOSUB 14680 : LOCATE 23,1
5890 PRINT "Enter the "+MSG$(21); : INPUT REPLY$
5900 IF REPLY$ = "" THEN 5940
5910 IF REPLY$ = "/" THEN 6320
5920 T6 = VAL(REPLY$)
5930 GOSUB 3660  'to reprint
5940 '
5950 REM Obtain Vector 3 Number
5960 VT = 3
5970 MESSV$ = MSG$(22)
5980 GOSUB 4580
5990 IF REPLY$ = "/" THEN 6320
6000 GOTO 6030 'After Vector 3
6010 REM
6020 '
6030 REM Obtain the First Date
6040 FOR R = LDIM TO UDIM
6050  LOCATE 4+R, 3 : PRINT SPACE$(36);
6060 NEXT R
6070 LOCATE 25,1 : PRINT "(or reply as shown.)";
6080 GOSUB 14680 : LOCATE 23,1
6090 PRINT "Enter the ";MSG$(23);" as: 08 Nov 1984 (or 't' for today)"; : INPUT REPLY$
6100 IF REPLY$ = "" THEN 6160
6110 IF REPLY$ = "/" THEN 6320
6120 IF REPLY$ = "t" THEN GOSUB 6760 : REPLY$ = C$
6130 T8$= REPLY$
6140 GOSUB 3660  'to reprint
6150 '
6160 REM Obtain the Value
6170 GOSUB 14680 : LOCATE 23,1
6180 PRINT "Enter the ";MSG$(26);" ";MSG$(28); : INPUT REPLY$
6190 IF REPLY$ = "" THEN 6240
6200 IF REPLY$ = "/" THEN 6320
6210 T9# = VAL(REPLY$)
6220 GOSUB 3960  'to reprint
6230 '
6240 REM Obtain the Description
6250 GOSUB 14680 : LOCATE 23,1
6260 PRINT "Enter the ";MSG$(24); : INPUT REPLY$
6270 IF REPLY$ = "" THEN 6320
6280 IF REPLY$ = "/" THEN 6320
6290 T11$= REPLY$
6300 GOSUB 3660  'to reprint
6310 '
6320 REM Let User decide whether to save, ignore, or do some more
6330 GOSUB 14670
6340 GOSUB 14690 : GOSUB 14700
6350 GOSUB 14680 : LOCATE 23,1
6360 INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key."; REPLY$
6370 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 14680 : GOTO 4060
6380 IF LEFT$(REPLY$,1) = "f" THEN REC.NO = ABS(T1) : GOTO 3090 'for another record
6390 IF LEFT$(REPLY$,1) = "s" THEN GOSUB 14680 : GOTO 6430
6400 LOCATE 22,1 : PRINT "Error in Reply"
6410 GOTO 6340  'For better reply
6420 '
6430 REM Save has been indicated
6440  REC.NO = ABS(T1)
6450  LSET F1$  = MKD$(T1)  'record number
6460  LSET F2$  = MKI$(T2)  'vector1 number
6470  LSET F3$  = MKI$(T3)  'array number
6480  LSET F4$  = MKI$(T4)  'sub-array number
6490  LSET F5$  = MKI$(T5)  'vector2 number
6500  LSET F6$  = MKD$(T6)  'quantity
6510  LSET F7$  = MKI$(T7)  'vector3 number
6520  LSET F8$  = T8$       'second date
6530  LSET F9$  = MKD$(T9#) 'value
6540  LSET F10$ = T10$      'first date
6550  LSET F11$ = T11$      'description
6560  PUT #1, ABS(T1)
6570 IF T1 <= HIGH.REC THEN 6620
6580 '
6590 REM File the new Maximums
6600 HIGH.REC = T1
6610 GOSUB 14720  'To File the Maximums
6620 GOTO 3090  'for next record
6630 '
6640 REM Error in User-specified Record Number
6650 LOCATE 22,1 : PRINT "Record Number is out of range";
6660 LOCATE 24,1 : PRINT "Press any key to continue";
6670 A$ = INKEY$ : IF A$ = "" THEN 6670
6680 GOTO 3080  'for screen refresh
6690 '
6700 REM Subroutines Follow
6710 REM Routine to establish user action
6720 LOCATE 24,1 : PRINT "('enter to leave alone, '/ enter' to end record,)';
6730 LOCATE 25,1 : PRINT "('\ enter' to end screen, or reply as shown.)';
6740 RETURN
6750 '
6760 REM Routine to change the System Date to a Genealogical Date
6770 B$ = DATE$
6780 C$ = MID$(B$,4,2) + " "
6790 IF LEFT$(B$,2) = "01" THEN C$ = C$ + "Jan "
6800 IF LEFT$(B$,2) = "02" THEN C$ = C$ + "Feb "
6810 IF LEFT$(B$,2) = "03" THEN C$ = C$ + "Mar "
6820 IF LEFT$(B$,2) = "04" THEN C$ = C$ + "Apr "
6830 IF LEFT$(B$,2) = "05" THEN C$ = C$ + "May "
6840 IF LEFT$(B$,2) = "06" THEN C$ = C$ + "Jun "
6850 IF LEFT$(B$,2) = "07" THEN C$ = C$ + "Jul "
6860 IF LEFT$(B$,2) = "08" THEN C$ = C$ + "Aug "
6870 IF LEFT$(B$,2) = "09" THEN C$ = C$ + "Sep "
6880 IF LEFT$(B$,2) = "10" THEN C$ = C$ + "Oct "
6890 IF LEFT$(B$,2) = "11" THEN C$ = C$ + "Nov "
6900 IF LEFT$(B$,2) = "12" THEN C$ = C$ + "Dec "
6910 C$ = C$ + RIGHT$(B$,4)
6920 RETURN
6930 '
6940 REM Routine to Extract Data from a Data Record
6950 T1 = CVD(F1$)  'Record Number
6960 T2 = CVI(F2$)  'Vector1
6970 T3 = CVI(F3$)  'Array
6980 T4 = CVI(F4$)  'Sub-array
6990 T5 = CVI(F5$)  'Vector2
7000 T6 = CVD(F6$)  'Quantity
7010 T7 = CVI(F7$)  'Vector3
7020 T8$ = F8$      'Second Date
7030 T9# = CVD(F9$) 'Value
7040 T10$ = F10$    'First Date
7050 T11$ = F11$    'Description
7060 RETURN
7070 '
7080 REM Routine to Update Vector1
7090 CLS
7100 MESSA$ = MSG$(19) : MESSB$ = MSG$(19)
7110 GOSUB 7920 'To draw the boxes
7120 VT = 1 : AR = 0 : NSCR = VSCR
7130 GOSUB 7150  'For Personalization
7140 GOTO 7550
7150 REM Personalization Occurs Here
7160 FOR ISC = 0 TO NSCR-1
7170  LOW = LDIM+1 : TOP = UDIM
7180  GOSUB 7200  'to Print
7190  GOTO 7370  'to Obtain User Input
7200  FOR JSC = LOW TO TOP
7210   THISONE = (ISC*16)+JSC
7220   LOCATE 4+JSC,3 : PRINT SPACE$(37);
7230   NMBR$ = SPACE$(3)
7240   COLOR 0,7
7250   RSET NMBR$ = RIGHT$(STR$(THISONE),3)
7260   LOCATE 4+JSC,3 : PRINT NMBR$;
7270   COLOR 2,0
7280   PRINT " ";
7290   IF VT = 1 THEN PRINT VECT1$(THISONE);
7300   IF VT = 2 THEN PRINT VECT2$(THISONE);
7310   IF VT = 3 THEN PRINT VECT3$(THISONE);
7320   IF AR = 1 THEN PRINT ARRY$(THISONE);
7330   IF AR = 2 THEN PRINT SUBARRY$(CAT.NO,THISONE);
7340  NEXT JSC
7350  COLOR 7,0
7360  RETURN
7370  FOR KSC = LDIM+1 TO UDIM
7380   THATONE = (ISC*16)+KSC
7390   GOSUB 14680 : LOCATE 23,1
7400   PRINT "Enter the ";MESSB$;THATONE;"Description."; : INPUT REPLY$
7410   REPLY$ = LEFT$(REPLY$,24)
7420   IF REPLY$ = "/" THEN KSC = UDIM : ISC = NSCR-1 : GOTO 7510
7430   IF REPLY$ = "\" THEN KSC = UDIM : GOTO 7510
7440   IF REPLY$ = "" THEN 7500
7450   IF VT = 1 THEN VECT1$(THATONE) = REPLY$
7460   IF VT = 2 THEN VECT2$(THATONE) = REPLY$
7470   IF VT = 3 THEN VECT3$(THATONE) = REPLY$
7480   IF AR = 1 THEN ARRY$(THATONE) = REPLY$
7490   IF AR = 2 THEN SUBARRY$(CAT.NO,THATONE) = REPLY$
7500   LOW = (KSC +1 MOD 16) -1 : TOP = LOW : GOSUB 7200  'to Print
7510  NEXT KSC
7520 NEXT ISC
7530 RETURN
7540 '
7550 REM Let User decide whether to save, ignore, or do some more
7560 GOSUB 14670
7570 GOSUB 14690 : GOSUB 14700
7580 GOSUB 14680 : LOCATE 23,1
7590 INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key."; REPLY$
7600 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7960 : GOTO 7130
7610 IF LEFT$(REPLY$,1) = "f" THEN 7660
7620 IF LEFT$(REPLY$,1) = "s" THEN 7750
7630 LOCATE 22,1 : PRINT "Error in Reply"
7640 GOTO 7570  'for better reply
7650 '
7660 REM User wants to Forget
7670 REM Refresh the File
7680 OPEN DD$+VECTOR1$ FOR INPUT AS #2
7690 FOR R = LDIM TO VSCR*UDIM
7700  INPUT #2, VECT1$(R)
7710 NEXT R
7720 CLOSE #2
7730 GOTO 7820  'to complete vector1 update
7740 '
7750 REM the User Wants the new Vector1 Descriptions Saved
7760 OPEN DD$+VECTOR1$ FOR OUTPUT AS #2
7770 FOR R = LDIM TO VSCR*UDIM
7780  PRINT #2, VECT1$(R)
7790 NEXT R
7800 CLOSE #2
7810 '
7820 REM Completed Vector1 Update.
7830 GOTO 1630  'Return to main menu
7840 '
7850 REM Routine to Update the Array Description
7860 CLS
7870 MESSA$ = MSG$(3) : MESSB$ = MSG$(17)
7880 GOSUB 7920 'To draw the boxes
7890 VT = 0 : AR = 1 : NSCR = ASCR
7900 GOSUB 7150  'For Personalization
7910 GOTO 8010
7920 REM Draw the Form
7930 GOSUB 3110
7940 LOCATE 2,3 : PRINT "Update the ";MESSB$;" Descriptions";
7950 COLOR 0,7 : LOCATE 4, 6 : PRINT MESSB$;" Descriptions";
7960 COLOR 7,0
7970 LOCATE 24,1 : PRINT "('enter' to leave alone, '/ enter' to end record,)";
7980 LOCATE 25,1 : PRINT "('\ enter' to end screen, or reply as shown.)";
7990 RETURN
8000 '
8010 REM Let User decide whether to save, ignore, or do some more
8020 GOSUB 14670
8030 GOSUB 14690 : GOSUB 14700
8040 GOSUB 14680 : LOCATE 23,1
8050 INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key."; REPLY$
8060 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7960 : GOTO 7900
8070 IF LEFT$(REPLY$,1) = "f" THEN 8120
8080 IF LEFT$(REPLY$,1) = "s" THEN 8210
8090 LOCATE 22,1 : PRINT "Error in Reply"
8100 GOTO 8030  'for better reply
8110 '
8120 REM User wants to Forget
8130 REM Refresh the File
8140 OPEN DD$+ARRAY$ FOR INPUT AS #2
8150 FOR R = LDIM TO ASCR*UDIM
8160  INPUT #2, ARRY$(R)
8170 NEXT R
8180 CLOSE #2
8190 GOTO 8280  'to complete array
8200 '
8210 REM the User Wants the new Array Descriptions Saved
8220 OPEN DD$+ARRAY$ FOR OUTPUT AS #2
8230 FOR R = LDIM TO ASCR*UDIM
8240  PRINT #2, ARRY$(R)
8250 NEXT R
8260 CLOSE #2
8270 '
8280 REM Completed Array Update.
8290 GOTO 1630  'Return to Main Menu
8300 '
8310 REM Routine to Update Vector3
8320 CLS
8330 MESSA$ = MSG$(2) : MESSB$ = MSG$(22)
8340 GOSUB 7920 'To draw the boxes
8350 VT = 3 : AR = 0 : NSCR = VSCR
8360 GOSUB 7150  'For Personalization
8370 GOTO 8390
8380 '
8390 REM Let User decide whether to save, ignore, or do some more
8400 GOSUB 14670
8410 GOSUB 14690 : GOSUB 14700
8420 GOSUB 14680 : LOCATE 23,1
8430 INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key."; REPLY$
8440 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7960 : GOTO 8350
8450 IF LEFT$(REPLY$,1) = "f" THEN 8500
8460 IF LEFT$(REPLY$,1) = "s" THEN 8590
8470 LOCATE 22,1 : PRINT "Error in Reply"
8480 GOTO 8410  'For better Response
8490 '
8500 REM User wants to Forget
8510 REM Refresh the File
8520 OPEN DD$+VECTOR3$ FOR INPUT AS #2
8530 FOR R = LDIM TO VSCR*UDIM
8540  INPUT #2, VECT3$(R)
8550 NEXT R
8560 CLOSE #2
8570 GOTO 8660  'to complete vector3
8580 '
8590 REM the User Wants the new Vector3 Descriptions Saved
8600 OPEN DD$+VECTOR3$ FOR OUTPUT AS #2
8610 FOR R = LDIM TO VSCR*UDIM
8620  PRINT #2, VECT3$(R)
8630 NEXT R
8640 CLOSE #2
8650 '
8660 REM Completed Vector3 Update.
8670 GOTO 1630  'Return to Main Menu
8680 '
8690 REM Routine to Update the Vector2 Description
8700 CLS
8710 MESSA$ = MSG$(5) : MESSB$ = MSG$(20)
8720 GOSUB 7920 'To draw the boxes
8730 VT = 2 : AR = 0 : NSCR = VSCR
8740 GOSUB 7150  'For Personalization
8750 GOTO 8770
8760 '
8770 REM Let User decide whether to save, ignore, or do some more
8780 GOSUB 14670
8790 GOSUB 14690 : GOSUB 14700
8800 GOSUB 14680 : LOCATE 23,1
8810 INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key."; REPLY$
8820 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7960 : GOTO 8730
8830 IF LEFT$(REPLY$,1) = "f" THEN 8880
8840 IF LEFT$(REPLY$,1) = "s" THEN 8970
8850 LOCATE 22,1 : PRINT "Error in Reply"
8860 GOTO 8790  'for better reply
8870 '
8880 REM User wants to Forget
8890 REM Refresh the File
8900 OPEN DD$+VECTOR2$ FOR INPUT AS #2
8910 FOR R = LDIM TO VSCR*UDIM
8920  INPUT #2, VECT2$(R)
8930 NEXT R
8940 CLOSE #2
8950 GOTO 9040  'to complete vector2
8960 '
8970 REM the User Wants the new Vector2 Descriptions Saved
8980 OPEN DD$+VECTOR2$ FOR OUTPUT AS #2
8990 FOR R = LDIM TO VSCR*UDIM
9000  PRINT #2, VECT2$(R)
9010 NEXT R
9020 CLOSE #2
9030 '
9040 REM Completed Vector2 Update.
9050 GOTO 1630  'Return to Main Menu
9060 '
9070 REM Routine to Update the sub-array Description
9080 CLS
9090 MESSA$ = MSG$(3) : MESSB$ = MSG$(17)
9100 GOSUB 7920 'To draw the boxes
9110 VT = 0 : AR = 1 : NSCR = ASCR
9120 ISC = 0 : LOW = LDIM + 1 : TOP = UDIM : GOSUB 7200  'First Screen
9130 LOCATE 2,3:PRINT "Select the ";MSG$(3);" to Update";
9140 '
9150 REM Now let the user select the array cross-section to update
9160 LOCATE 23,1 : PRINT SPACE$(79) : LOCATE 23,1
9170 PRINT "Enter the ";MSG$(17);" to be updated";
9180 INPUT REPLY$
9190 IF REPLY$ = "\" THEN ISC = 1 : GOSUB 7200 : GOTO 9150
9200 CAT.NO = VAL(REPLY$)
9210 IF CAT.NO >= LDIM AND CAT.NO <= ASCR*UDIM THEN 9260
9220 LOCATE 22,1
9230 PRINT "error in reply.  must be ";LDIM +1;"through ";ASCR*UDIM;
9240 GOTO 9150  'for better reply
9250 '
9260 REM Routine to Update the sub-array Description
9270 CLS
9280 MESSA$ = ARRY$(CAT.NO) : MESSB$ = ARRY$(CAT.NO)
9290 GOSUB 7920 'To draw the boxes
9300 VT = 0 : AR = 2 : NSCR = ASCR
9310 GOSUB 7150  'For Personalization
9320 GOTO 9340
9330 '
9340 REM Let User decide whether to save, ignore, or do some more
9350 GOSUB 14670
9360 GOSUB 14690 : GOSUB 14700
9370 GOSUB 14680 : LOCATE 23,1
9380 INPUT "Type s (save), m (more), or f (forget), and press the 'enter' key."; REPLY$
9390 IF LEFT$(REPLY$,1) = "m" THEN GOSUB 7960 : GOTO 9300
9400 IF LEFT$(REPLY$,1) = "f" THEN 9450
9410 IF LEFT$(REPLY$,1) = "s" THEN 9560
9420 LOCATE 22,1 : PRINT "Error in Reply"
9430 GOTO 9360  'for better reply
9440 '
9450 REM User wants to Forget
9460 REM Refresh the File
9470 OPEN DD$+SUBARRAY$ FOR INPUT AS #2
9480 FOR R = LDIM TO ASCR*UDIM
9490  FOR S = LDIM TO ASCR*UDIM
9500   INPUT #2, SUBARRY$(R,S)
9510  NEXT S
9520 NEXT R
9530 CLOSE #2
9540 GOTO 9650  'to complete sub Array
9550 '
9560 REM the User Wants the new sub-Array Descriptions Saved
9570 OPEN DD$+SUBARRAY$ FOR OUTPUT AS #2
9580 FOR R = LDIM TO ASCR*UDIM
9590  FOR S = LDIM TO ASCR*UDIM
9600   PRINT #2, SUBARRY$(R,S)
9610  NEXT S
9620 NEXT R
9630 CLOSE #2
9640 '
9650 REM Completed sub-Array Update.
9660 GOTO 1630   'Return to the Main Menu
9670 '
9680 REM Routine to Obtain the Inquiry from the User
9690 CLS
9700 TOTAL.6 = 0
9710 TOTAL.9# = 0
9720 REM Draw the Form
9730 GOSUB 3110
9740 LOCATE 2,3 : PRINT "Request for Records to be Displayed or Printed";
9750 '
9760 REM Establish all inquiry selections as a -1
9770 SHOW0 = -1 : SHOW1 = -1 : SHOW2 = -1
9780 SHOW3 = -1 : SHOW4 = -1 : SHOW5 = -1
9790 '
9800 REM Determine whether to print all of select
9810 COLOR 0,7 : LOCATE 4, 42 : PRINT "Choices" : COLOR 7,0
9820 GOSUB 14680
9830 LOCATE 23,1 : INPUT "Type a (all) or s (some) records, and press the 'enter' key.";REPLY$
9840 IF LEFT$(REPLY$,1) = "a" THEN 9890
9850 IF LEFT$(REPLY$,1) = "s" THEN 9930
9860 LOCATE 22,1 : PRINT "Error in Reply";
9870 GOTO 9820  'for better reply
9880 '
9890 REM User wants all Records.
9900 LOCATE 5,42 : PRINT "Choose all records.";
9910 GOTO 9970  'rejoin
9920 '
9930 REM user wants only Some records.
9940 LOCATE 5,42 : PRINT "Choose all records.";
9950 LOCATE 6,44 : PRINT "Where:";
9960 SHOW0 = 0
9970 GOSUB 14670
9980 GOSUB 14680 : GOSUB 14690 : GOSUB 14700
9990 '
10000 REM Now find out just which selections are wanted.
10010 COLOR 6,0
10020 LOCATE 8,42 : PRINT MSG$(7);
10030 COLOR 2,0
10040 IF SHOW0 = -1 THEN LOCATE 8,55 : PRINT "(all)"; : GOTO 10560
10050 '
10060 REM Select Vector 1
10070 VT = 1 : ROW = 8
10080 MESS$ = MSG$(1)
10090 GOSUB 10150
10100 IF REPLY$ = "" THEN 10140
10110 SHOW1 = SHOWS
10120 COLOR 2,0
10130 LOCATE ROW,55 : PRINT VECT1$(SHOW1);
10140 GOTO 10560
10150 REM Show the Choices of Vector1
10160 LOCATE 4,3 : PRINT SPACE$(36);
10170 COLOR 0,7 : LOCATE 4,7 : PRINT MESS$;" Descriptions"; : COLOR 7,0
10180 ADJUST = 0
10190 '
10200 REM Now list the current descriptions
10210 FOR R = LDIM + 1 TO UDIM
10220  LOCATE 4+R,3 : PRINT SPACE$(36);
10230  NMBR$ = SPACE$(3)
10240  COLOR 0,7
10250  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),3)
10260  LOCATE 4+R,3 : PRINT NMBR$;
10270  COLOR 2,0
10280  PRINT " ";
10290  IF VT = 1 THEN PRINT VECT1$(R+ADJUST);
10300  IF VT = 2 THEN PRINT VECT2$(R+ADJUST);
10310  IF VT = 3 THEN PRINT VECT3$(R+ADJUST);
10320 NEXT R
10330 COLOR 7,0
10340 GOSUB 14670
10350 GOSUB 14680 : GOSUB 14690
10360 GOSUB 14700
10370 REM Obtain User Selection of vector
10380 LOCATE 24,1 : PRINT "('enter' for (all),";
10390 IF ADJUST >= (VSCR-1)*UDIM THEN PRINT ")"; : GOTO 10410
10400 PRINT " '\ enter' for more descriptions,)";
10410 LOCATE 25,1 : PRINT "(or reply as shown.)";
10420 LOCATE 23,1
10430 PRINT "Enter the ";MESS$;" Number";
10440 INPUT REPLY$
10450 IF REPLY$ = "" THEN COLOR 2,0 : LOCATE ROW,55 : PRINT "(all)" : COLOR 7,0 : GOTO 10540
10460 IF REPLY$ <> "\" THEN 10500
10470 ADJUST = ADJUST + 16
10480 IF ADJUST >= VSCR*UDIM THEN 10500
10490 GOTO 10200  'For more choices
10500 SHOWS = VAL(REPLY$)
10510 IF SHOWS < LDIM +1 OR SHOWS > VSCR*UDIM THEN 10520 ELSE 10540
10520 LOCATE 22,1 : PRINT "Number";SHOWS;"is out of range";
10530 GOTO 10180  'for better reply
10540 RETURN
10550 '
10560 REM Obtain Array Selections
10570 GOSUB 14670
10580 GOSUB 14680
10590 '
10600 REM Now find out just which selections are wanted.
10610 COLOR 6,0
10620 LOCATE 9,42 : PRINT MSG$(8);
10630 COLOR 2,0
10640 IF SHOW0 = -1 THEN LOCATE 9,55 : PRINT "(all)"; : GOTO 11060
10650 REM Show the Choices of Array Cross-Sections
10660 LOCATE 4,3 : PRINT SPACE$(36);
10670 COLOR 0,7 : LOCATE 4,7 : PRINT MSG$(17);" Descriptions"; : COLOR 7,0
10680 '
10690 ADJUST = 0
10700 REM Now list the current descriptions
10710 FOR R = LDIM + 1 TO UDIM
10720  LOCATE 4+R,3 : PRINT SPACE$(36);
10730  NMBR$ = SPACE$(3)
10740  COLOR 0,7
10750  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),3)
10760  LOCATE 4+R,3 : PRINT NMBR$;
10770  COLOR 2,0
10780  PRINT " ";
10790  PRINT ARRY$(R+ADJUST);
10800 NEXT R
10810 COLOR 7,0
10820 '
10830 REM Obtain User Selection of Array Cross-Sections
10840 GOSUB 14680
10850 GOSUB 14670 : GOSUB 14690
10860 GOSUB 14700
10870 REM Obtain User Selection of Array Cross-section
10880 LOCATE 24,1 : PRINT "('enter' for (all),";
10890 IF ADJUST >= (ASCR-1)*UDIM THEN PRINT ")"; : GOTO 10910
10900 PRINT " '\ enter' for more descriptions,)";
10910 LOCATE 25,1 : PRINT "(or reply as shown.)";
10920 LOCATE 23,1 : PRINT "Enter the ";MSG$(17);" Number";
10930 INPUT REPLY$
10940 IF REPLY$ = "" THEN COLOR 2,0 : LOCATE 9,55 : PRINT "(all)"; : COLOR 7,0 : GOTO 11060
10950 IF REPLY$ <> "\" THEN 10990
10960 ADJUST = ADJUST + 16
10970 IF ADJUST >= ASCR*UDIM THEN 10990
10980 GOTO 10700  'For more Choices
10990 SHOW2 = VAL(REPLY$)
11000 IF SHOW2 < LDIM +1 OR SHOW2 > ASCR*UDIM THEN 11010 ELSE 11030
11010 LOCATE 22,1 : PRINT "Number";SHOW2;"is out of range";
11020 GOTO 10580  'for better reply
11030 COLOR 2,0
11040 LOCATE 9,55 : PRINT ARRY$(SHOW2);
11050 '
11060 REM Obtain Array Cross-section Selections
11070 GOSUB 14670
11080 GOSUB 14680
11090 '
11100 REM Now find out just which selections are wanted.
11110 COLOR 6,0
11120 LOCATE 10,42 : PRINT MSG$(9);
11130 COLOR 2,0
11140 IF SHOW0 = -1 THEN LOCATE 10,55 : PRINT "(all)"; : GOTO 11590
11150 IF SHOW2 = -1 THEN LOCATE 10,55 : PRINT "(all)"; : GOTO 11590
11160 '
11170 REM Show the Choices of Array elements
11180 LOCATE 4,3 : PRINT SPACE$(36);
11190 COLOR 0,7 : LOCATE 4,7 : PRINT MSG$(4);" Descriptions"; : COLOR 7,0
11200 ADJUST = 0
11210 '
11220 REM Now list the current Array Element descriptions
11230 FOR R = LDIM + 1 TO UDIM
11240  LOCATE 4+R,3 : PRINT SPACE$(36);
11250  NMBR$ = SPACE$(3)
11260  COLOR 0,7
11270  RSET NMBR$ = RIGHT$(STR$(R+ADJUST),3)
11280  LOCATE 4+R,3 : PRINT NMBR$;
11290  COLOR 2,0
11300  PRINT " ";
11310  PRINT SUBARRY$(SHOW2,R+ADJUST);
11320 NEXT R
11330 COLOR 7,0
11340 '
11350 REM Obtain User Selection of Array element
11360 GOSUB 14680
11370 GOSUB 14670 : GOSUB 14690
11380 GOSUB 14700
11390 REM Obtain User Selection for Array Elements
11400 LOCATE 24,1 : PRINT "('enter' for (all),";
11410 IF ADJUST >= (VSCR-1)*UDIM THEN PRINT ")"; : GOTO 11430
11420 PRINT " '\ enter' for more descriptions,)";
11430 LOCATE 25,1 : PRINT "(or reply as shown.)";
11440 LOCATE 23,1 : PRINT "Enter the ";MSG$(4);" Number";
11450 INPUT REPLY$
11460 IF REPLY$ = "" THEN COLOR 2,0 : LOCATE 10,55 : PRINT "(all)"; : COLOR 7,0 : GOTO 11590
11470 GOSUB 14700
11480 IF REPLY$ <> "\" THEN 11520
11490 ADJUST = ADJUST + 16
11500 IF ADJUST >= ASCR*UDIM THEN 11520
11510 GOTO 11220  'For More Descriptions
11520 SHOW3 = VAL(REPLY$)
11530 IF SHOW3 < LDIM +1 OR SHOW3 > ASCR*UDIM THEN 11540 ELSE 11560
11540 LOCATE 22,1 : PRINT "Number";SHOW3;"is out of range";
11550 GOTO 11080  'for better reply
11560 COLOR 2,0
11570 LOCATE 10,55 : PRINT SUBARRY$(SHOW2,SHOW3);
11580 '
11590 REM Obtain Vector2 Selections
11600 GOSUB 14670
11610 GOSUB 14680
11620 GOSUB 14700
11630 REM Now find out just which selections are wanted.
11640 COLOR 6,0
11650 LOCATE 11,42 : PRINT MSG$(10);
11660 COLOR 2,0
11670 IF SHOW0 = -1 THEN LOCATE 11,55 : PRINT "(all)"; : GOTO 11840
11680 REM Show the Choices
11690 LOCATE 4,3 : PRINT SPACE$(36);
11700 COLOR 0,7 : LOCATE 4, 6 : PRINT MSG$(20);" Descriptions"; : COLOR 7,0
11710 ADJUST = 0
11720 '
11730 REM Now list the current descriptions
11740 REM Select Vector 2
11750 VT = 2 : ROW = 11
11760 MESS$ = MSG$(20)
11770 GOSUB 10150
11780 IF REPLY$ = "" THEN 11820
11790 SHOW4 = SHOWS
11800 COLOR 2,0
11810 LOCATE ROW,55 : PRINT VECT2$(SHOW4);
11820 GOTO 11840
11830 '
11840 REM Obtain Vector3 Selections
11850 GOSUB 14670
11860 GOSUB 14680
11870 GOSUB 14700
11880 REM Now find out just which selections are wanted.
11890 COLOR 6,0
11900 LOCATE 12,42 : PRINT MSG$(12);
11910 COLOR 2,0
11920 IF SHOW0 = -1 THEN LOCATE 12,55 : PRINT "(all)"; : GOTO 12080
11930 REM Show the Choices
11940 LOCATE 4,3 : PRINT SPACE$(36);
11950 COLOR 0,7 : LOCATE 4, 6 : PRINT MSG$(2);" Descriptions"; : COLOR 7,0
11960 ADJUST = 0
11970 REM Now list the current Vector3 descriptions
11980 REM Select Vector 3
11990 VT = 3 : ROW = 12
12000 MESS$ = MSG$(2)
12010 GOSUB 10150
12020 IF REPLY$ = "" THEN 12060
12030 SHOW5 = SHOWS
12040 COLOR 2,0
12050 LOCATE ROW,55 : PRINT VECT3$(SHOW5);
12060 GOTO 12080
12070 '
12080 REM Blank the left side of the screen
12090 COLOR 7,0
12100 FOR R = LDIM TO UDIM
12110  LOCATE 4+R,3 : PRINT SPACE$(36);
12120 NEXT R
12130 '
12140 REM Now determine location of output
12150 GOSUB 14670
12160 GOSUB 14680
12170 GOSUB 14690
12180 GOSUB 14700
12190 LOCATE 23,1 : INPUT "Type d (display) or p (print), and press the 'enter' key"; REPLY$
12200 IF REPLY$ = "p" OR REPLY$ = "d" THEN 12230
12210 LOCATE 22,1 : PRINT "Error in Reply";
12220 GOTO 12160
12230 IF REPLY$ = "p" THEN OPEN "lpt1:" FOR OUTPUT AS #3 : WHERE.SHOW = 2
12240 IF REPLY$ = "d" THEN OPEN "scrn:" FOR OUTPUT AS #3 : WHERE.SHOW = 1
12250 '
12260 REM Routine to read the records and select those whose criteria match
12270 GOSUB 1030  'To Open the File and Set the Field
12280 IF WHERE.SHOW = 1 THEN CLS
12290 '
12300 REM Constants
12310 SHOWN = 0 : PRINTED = 0
12320 PAGE.NO = 1 : SCREEN.NO = 1
12330 '
12340 REM Begin Output
12350 GOSUB 12710  'to Print the Titles
12360 FOR RR = 1 TO HIGH.REC
12370  GET #1, RR
12380  T1 = CVD(F1$)
12400  IF T1 < 0 THEN 13430
12410  IF WHERE.SHOW = 2 THEN 12420 ELSE 12450
12420  GOSUB 14680
12430  LOCATE 23,1 : PRINT "Searching Record: "; RR;
12440  '
12450  REM Now do the selection
12460  IF SHOW0 = -1 THEN 12680  'bypass testing.  Want everything.
12470  '
12480  REM Test Vector1
12490  IF SHOW1 = -1 THEN 12520  'any
12495  T2 = CVI(F2$)
12500  IF SHOW1 = T2 THEN 12520 ELSE 13430
12510  '
12520  REM Test Categories
12530  IF SHOW2 = -1 THEN 12600
12535  T3 = CVI(F3$)
12540  IF SHOW2 = T3 THEN 12560 ELSE 13430
12550  '
12560  REM Test Sub-categories
12570  IF SHOW3 = -1 THEN 12600
12575  T4 = CVI(F4$)
12580  IF SHOW3 = T4 THEN 12600 ELSE 13430
12590  '
12600  REM Test Vector2
12610  IF SHOW4 = -1 THEN 12640
12615  T5 = CVI(F5$)
12620  IF SHOW4 = T5 THEN 12640 ELSE 13430
12630  '
12640  REM Test Vector3
12650  IF SHOW5 = -1 THEN 12680
12655  T7 = CVI(F7$)
12660  IF SHOW5 = T7 THEN 12680 ELSE 13430
12670  '
12680  REM Have Satisfied the Test Requirements, so Print
12685  GOSUB 6940
12690  GOTO 12860  'to continue
12700  '
12710  REM Routine to print the Sreeen titles
12720  PRINT #3, TITLE$ + "      ";DATE$;"     ";TIME$;
12730  IF WHERE.SHOW = 1 THEN PRINT #3, "     Screen ";SCREEN.NO
12740  IF WHERE.SHOW = 2 THEN PRINT #3, "     Page ";PAGE.NO
12750  IF WHERE.SHOW = 1 THEN PRINT #3, "Display all records";
12760  IF WHERE.SHOW = 2 THEN PRINT #3, "Print all records";
12770  IF WHERE.SHOW = 2 THEN LOCATE 25,1 : PRINT "Press 'Esc' to quit at end of record.";
12780  IF SHOW0 <> -1 THEN PRINT #3, " containing items which:" ELSE PRINT #3,
12790  IF SHOW3 <> -1 THEN COLOR 6,0 : PRINT #3, MSG$(29);: COLOR 2,0 : PRINT #3, SUBARRY$(SHOW2,SHOW3);" ";ARRY$(SHOW2); ELSE IF SHOW2 <> -1 THEN COLOR 6,0 : PRINT #3, MSG$(29);: COLOR 2,0 : PRINT #3, ARRY$(SHOW2);
12800  IF SHOW4 <> -1 THEN COLOR 6,0 : PRINT #3, TAB(40); MSG$(30);: COLOR 2,0 : PRINT #3, VECT2$(SHOW4) ELSE PRINT #3,
12810  IF SHOW5 <> -1 THEN COLOR 6,0 : PRINT #3, MSG$(33);: COLOR 2,0 : PRINT #3, VECT3$(SHOW5); " "; MSG$(32);
12820  IF SHOW1 <> -1 THEN COLOR 6,0 : PRINT #3, TAB(40); MSG$(31);: COLOR 2,0 : PRINT #3, VECT1$(SHOW1) ELSE PRINT #3,
12830  COLOR 5,0 : PRINT #3, STRING$(79,"=") : COLOR 7,0
12840  RETURN
12850  '
12860  REM Display or Print the Selected Records
12870  REM Print the First Line of the Selected Record
12880  COLOR 6,0 : PRINT #3, "Record Number: ";
12890  COLOR 0,7 : PRINT #3, T1;
12900  COLOR 6,0 : PRINT #3, TAB(23); MSG$(25);" Date: ";
12910  COLOR 2,0 : PRINT #3, T8$;
12920  COLOR 6,0 : PRINT #3, TAB(52); MSG$(18);" Date: ";
12930  COLOR 2,0 : PRINT #3, T10$
12940  '
12950  REM Print the Second Line
12960  COLOR 6,0 : PRINT #3, MSG$(38);
12970  COLOR 2,0 : PRINT #3, ARRY$(T3);
12980  COLOR 6,0 : PRINT #3, TAB(39); MSG$(34);
12990  COLOR 2,0 : PRINT #3, VECT1$(T2)
13000  '
13010  REM Print the Third Line
13020  COLOR 6,0 : PRINT #3, MSG$(39);
13030  COLOR 2,0 : PRINT #3, SUBARRY$(T3,T4);
13040  COLOR 6,0 : PRINT #3, TAB(39); MSG$(35);
13050  COLOR 2,0 : PRINT #3, VECT2$(T5)
13060  '
13070  REM Print the Fourth Line
13080  COLOR 6,0 : PRINT #3, MSG$(37);
13090  COLOR 2,0 : PRINT #3, VECT3$(T7);
13100  COLOR 6,0 : PRINT #3, TAB(39); MSG$(36);
13110  COLOR 2,0 : PRINT #3, T6
13120  '
13130  REM Print the Fifth Line
13140  COLOR 6,0 : PRINT #3, MSG$(24);": ";
13150  COLOR 2,0 : PRINT #3, T11$;
13160  COLOR 6,0 : PRINT #3, TAB(52); MSG$(28);
13170  COLOR 2,0 : PRINT #3, USING ": ########,.##"; T9#
13180  '
13190  REM print a separator
13200  COLOR 5,0 : PRINT #3, STRING$(79,"=")
13210  COLOR 7,0
13220 '
13230 REM Summarization
13240 TOTAL.6 = TOTAL.6 + T6
13250 IF MSG$(0) = "no" THEN TOTAL.6 = 0
13260 TOTAL.9# = TOTAL.9# + T9#
13270  '
13280  REM Update the Number or records displayed or printed
13290  SHOWN = SHOWN + 1
13300  PRINTED = PRINTED + 1
13310  IF SHOWN MOD 3 = 0 AND WHERE.SHOW = 1 THEN 13340
13320  IF PRINTED MOD 8 = 0 AND WHERE.SHOW = 2 THEN 13390 ELSE 13420
13330  '
13340  REM Bottom of Page Routine
13350  LOCATE 25,1 : PRINT "Press 'Esc' to quit, or press any other key to continue";
13360  A$ = INKEY$ : IF A$ = CHR$(27)  THEN RR = HIGH.REC : GOTO 13430
13370  IF A$ = "" THEN 13360
13380  CLS
13390  IF WHERE.SHOW = 1 THEN SCREEN.NO = SCREEN.NO + 1
13400  IF WHERE.SHOW = 2 THEN PAGE.NO = PAGE.NO + 1 : PRINT #3, PAGE.EJECT$;
13410  GOSUB 12710  'for Screen Titles
13420  A$ = INKEY$ : IF A$ = CHR$(27) THEN RR = HIGH.REC
13430 NEXT RR
13440 IF WHERE.SHOW = 1 THEN PRINT : PRINT "Search Completed."
13450 '
13460 REM Display or Print the Summarization
13470 IF WHERE.SHOW = 1 THEN 13650  ' for Display
13480 REM Print the Summarization
13490 PAGE.NO = PAGE.NO + 1 : LPRINT CHR$(12);
13500 FOR WAIT4 = 1 TO 2000 : NEXT WAIT4
13510 GOSUB 12710  ' To Print the Page Titles
13520  COLOR 7,0 : PRINT #3, "Summary of the Results of the Inquiry"
13530  COLOR 6,0 : PRINT #3, "Number of Records Meeting the Criteria = ";
13540  COLOR 2,0 : PRINT #3, PRINTED
13550   IF MSG$(0) <> "yes" THEN 13580
13560  COLOR 6,0 : PRINT #3, MSG$(21);" TOTAL = ";
13570  COLOR 2,0 : PRINT #3, TOTAL.6
13580  COLOR 6,0 : PRINT #3, MSG$(28);" TOTAL = ";
13590  COLOR 2,0 : PRINT #3, USING "########,.##"; TOTAL.9#
13600  COLOR 7,0
13610 '
13620 REM Printing, so do a page-eject
13630 PRINT #3, PAGE.EJECT$; : GOTO 13830 'to close the files
13640 '
13650 REM Displaying, so pause at end of the search.
13660 GOSUB 14700
13670 LOCATE 25,1 : PRINT "Press any key to continue";
13680 A$ = INKEY$ : IF A$ = "" THEN 13680
13690 '
13700 REM Display the Totals
13710  SCREEN.NO = SCREEN.NO + 1 : CLS : GOSUB 12710  'For Titles
13720  COLOR 7,0 : PRINT #3, "Summary of the Results of the Inquiry"
13730  COLOR 6,0 : PRINT #3, "Number of Records Meeting the Criteria = ";
13740  COLOR 2,0 : PRINT #3, SHOWN
13750   IF MSG$(0) <> "yes" THEN 13780
13760  COLOR 6,0 : PRINT #3, MSG$(21);" TOTAL = ";
13770  COLOR 2,0 : PRINT #3, TOTAL.6
13780  COLOR 6,0 : PRINT #3, MSG$(28);" TOTAL = ";
13790  COLOR 2,0 : PRINT #3, USING "########,.##"; TOTAL.9#
13800  COLOR 7,0
13810 LOCATE 25,1 : PRINT "Press any key to continue";
13820 A$ = INKEY$ : IF A$ = "" THEN 13820
13830 CLOSE #3
13840 CLOSE #1
13850 GOTO 1630  'Return to Main Menu
13860 '
13870 REM Routine to draw a double box
13880 COLOR 5,0
13890 FOR I = R1 + 1 TO R2 - 1
13900  LOCATE I, C1 : PRINT CHR$(186);
13910  LOCATE I, C2 : PRINT CHR$(186);
13920 NEXT I
13930 FOR J = C1 + 1 TO C2 - 1
13940  LOCATE R1, J : PRINT CHR$(205);
13950  LOCATE R2, J : PRINT CHR$(205);
13960 NEXT J
13970  LOCATE R1, C1 : PRINT CHR$(201);
13980  LOCATE R1, C2 : PRINT CHR$(187);
13990  LOCATE R2, C1 : PRINT CHR$(200);
14000  LOCATE R2, C2 : PRINT CHR$(188);
14010 COLOR 7,0
14020 RETURN
14030 '
14040 REM Routine to draw a single box
14050 COLOR 3,0
14060 FOR I = R1 + 1 TO R2 - 1
14070  LOCATE I, C1 : PRINT CHR$(179);
14080  LOCATE I, C2 : PRINT CHR$(179);
14090 NEXT I
14100 FOR J = C1 + 1 TO C2 - 1
14110  LOCATE R1, J : PRINT CHR$(196);
14120  LOCATE R2, J : PRINT CHR$(196);
14130 NEXT J
14140  LOCATE R1, C1 : PRINT CHR$(218);
14150  LOCATE R1, C2 : PRINT CHR$(191);
14160  LOCATE R2, C1 : PRINT CHR$(192);
14170  LOCATE R2, C2 : PRINT CHR$(217);
14180 COLOR 7,0
14190 RETURN
14200 '
14210 REM Routine to draw a double horizontal line.  Attach to double.
14220 COLOR 5,0
14230 FOR J = C1 + 1 TO C2 - 1
14240  LOCATE R1,J : PRINT CHR$(205);
14250 NEXT J
14260 LOCATE R1,C1 : PRINT CHR$(204);
14270 LOCATE R1,C2 : PRINT CHR$(185);
14280 COLOR 7,0
14290 RETURN
14300 '
14310 REM Routine to draw a single horizontal line.  Attach to double.
14320 COLOR 5,0
14330 FOR J = C1 + 1 TO C2 - 1
14340  LOCATE R1,J : PRINT CHR$(196);
14350 NEXT J
14360 LOCATE R1,C1 : PRINT CHR$(199);
14370 LOCATE R1,C2 : PRINT CHR$(182);
14380 COLOR 7,0
14390 RETURN
14400 '
14410 REM Routine to draw a double vertical line.  Attach to double.
14420 COLOR 5,0
14430 FOR I = R1 + 1 TO R2 - 1
14440  LOCATE I,C1 : PRINT CHR$(186);
14450 NEXT I
14460 LOCATE R1,C1 : PRINT CHR$(203);
14470 LOCATE R2,C1 : PRINT CHR$(202);
14480 COLOR 7,0
14490 RETURN
14500 '
14510 REM Routine to draw a single vertical line.  Attach to double.
14520 COLOR 5,0
14530 FOR I = R1 + 1 TO R2 - 1
14540  LOCATE I,C1 : PRINT CHR$(179);
14550 NEXT I
14560 LOCATE R1,C1 : PRINT CHR$(209);
14570 LOCATE R2,C1 : PRINT CHR$(207);
14580 COLOR 7,0
14590 RETURN
14600 '
14610 REM Program Wrapup
14620 CLS : LOCATE 21,1
14630 PRINT "End of Program"
14640 GOTO 14790
14650 '
14660 REM Cleaning of Bottom Lines
14670 LOCATE 22,1 : PRINT SPACE$(79); : RETURN
14680 LOCATE 23,1 : PRINT SPACE$(79); : RETURN
14690 LOCATE 24,1 : PRINT SPACE$(79); : RETURN
14700 LOCATE 25,1 : PRINT SPACE$(79); : RETURN
14710 '
14720 REM Routine to File the new Maximums
14730 OPEN DD$+HIGH$ FOR OUTPUT AS #2
14740  PRINT #2, MAX.REC
14750  PRINT #2, HIGH.REC
14760 CLOSE #2
14770 RETURN
14780 '
14790 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0395

     Volume in drive A has no label
     Directory of A:\

    ARRAY              206   5-17-85   6:23a
    CLEANDOC BAT       408   5-11-85   6:24a
    CREATFIL          6560   5-17-85   6:24a
    DATAENTR         17916   5-17-85   6:25a
    DIRECTOR          8350   5-17-85   6:26a
    DOCHANGE          1261   5-17-85   6:24a
    FILES395 TXT      2480   1-27-87   3:27p
    FIRSTIME          3910   5-17-85   6:26a
    GENINFOR          7155   5-17-85   6:27a
    HIGH                11   5-17-85   6:24a
    INQUIRYS         18560   5-17-85   6:28a
    INTRODUC          5644   5-17-85   6:28a
    INTROPER          1767   5-17-85   6:29a
    MESSAGES           567   5-17-85   6:23a
    PERARRAY          3577   5-17-85   6:29a
    PERSUBAR          4549   5-17-85   6:29a
    PERVECT1          5210   5-17-85   6:30a
    PERVECT2          5219   5-17-85   6:30a
    PERVECT3          6067   5-17-85   6:31a
    PRINTERS BAS      2091   5-17-85   6:22a
    RECDELET          5893   5-17-85   6:31a
    REDISPLA          1783   5-17-85   6:32a
    RUNFIRST BAS      1068   5-17-85   6:22a
    STOPPING          3640   5-17-85   6:32a
    SUBARRAY          2375   5-17-85   6:24a
    TABLEOFC          3193   5-17-85   6:32a
    TERMCOND          1620   5-17-85   6:33a
    TEXTPROC BAS     19868   5-17-85   6:22a
    VECTOR1            654   5-17-85   6:23a
    VECTOR2            559   5-17-85   6:23a
    VECTOR3            556   5-17-85   6:23a
    YOURVOWN BAS     41735  11-22-85   5:18a
           32 file(s)     184452 bytes
                          119808 bytes free
