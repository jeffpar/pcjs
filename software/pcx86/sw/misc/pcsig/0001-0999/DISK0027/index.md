---
layout: page
title: "PC-SIG Library Disk #27"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0027/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0027"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZOOSORT"

    ZOOSORT is a game-configured device for using bubble sort techniques to
    sort and list a wide variety of wild life.  The disk also contains three
    games and a group of utilities, most noteworthy being the spoolers.
    
    System Requirements:  Some programs require color graphics.
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Review the .DOC files for program
    information.
    
    File Descriptions:
    
    AUTHOR   BAS  Part of ZOOSORT program
    COLTOMON BAS  Part of ZOOSORT program
    NOISE    BAS  Demo - Produces different cycle sounds
    MONTOCOL BAS  Part of ZOOSORT program
    FLAG     BAS  Part of ZOOSORT program
    LANDER   BAS  Fuel consumption
    ZOOTIME  BAS  Part of ZOOSORT program
    CRASHER  BAS  Planet landing
    SETCOLOR ASM  Assembler source code for SETCOLOR
    ZOOSORT  BAS  Graphical demonstration of bubble sort-by weight
    STARTUP  BAS  Initial program to run for ZOOSORT
    DISKMOD  BAS  Utility - Examine & modify disk sectors
    DATETIME BAS  Utility - Easier way to set DOS date & time
    FOILS    BAS  Utility - Produces foils from script-type file
    TREK     BAS  Yet another Startrek game (color)
    MSPOOL   DOC  Documentation for use with print spooler programs
    MSPOOL   COM  Printer spooler for use with the monitor/print adaptor
    CSPOOL   COM  Printer spooler for use with a separate printer adapter
    SETCOLOR COM  Utility. Sets background and border color to blue
    AUTHOR2  BAS  Part of ZOOSORT program
    FLIP     MEM  Part of ZOOSORT program
    ??       BAS  Binary files used in ZOOSORT program
    FLIPD    MEM  Part of ZOOSORT program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTHOR.BAS

```bas
10 '
20 '     TO DISPLAY TEXT PART OF SCREEN
30 '     DURING ATTRACT MODE.
40 '
50 '     SEE LINE 420 FOR ADDITIONAL
60 '     COMMENTS.
70 '
80 CLS : KEY OFF : SCREEN 1,0
90 X=15 : Y=25 : PI=22/7
100 LINE (X,Y-6)-(X+30,Y-6)
110 DRAW "G30"
120 LINE (X,Y-5)-(X+30,Y-5)
130 DRAW "G30"
140 LINE (X,Y+25)-(X+30,Y+25)
150 LINE (X,Y+26)-(X+30,Y+26)
160 CIRCLE (X+50,Y+13),16
170 CIRCLE (X+50,Y+13),15
180 CIRCLE (X+92,Y+13),16
190 CIRCLE (X+92,Y+13),15
200 X=X+150 : Y=Y
210 CIRCLE (X,Y),10,,,4
220 CIRCLE (X,Y),9,,,4
230 CIRCLE (X,Y+20),10,,3
240 CIRCLE (X,Y+20),11,,3
250 LINE (X-5,Y+7)-(X+10,Y+20)
260 LINE (X-4,Y+7)-(X+11,Y+20)
270 CIRCLE (X+35,Y+13),16
280 CIRCLE (X+35,Y+13),15
290 PSET (X+65,Y)
300 DRAW "D27"
310 PSET (X+66,Y)
320 DRAW "D27"
330 CIRCLE (X+80,Y+8),10,,1.5*PI,.5*PI
340 CIRCLE (X+80,Y+8),9,,1.5*PI,.5*PI
350 PSET (X+66,Y)
360 DRAW "R15D1L15"
370 DRAW "D15R15U1L15"
380 PSET (X+79,Y+15)
390 DRAW "F12L1H12"
400 PSET (X+105,Y)
410 DRAW "R32"
420 PSET (X+105,Y+1)
430 DRAW "R32L15D27L1U27"
432 DDD=750
435 FOR I=1 TO DDD :NEXT I
440 LOCATE 11,15 : PRINT "Writen by";
445 FOR I=1 TO DDD :NEXT I
450 LOCATE 15,11 : PRINT "Ehab E. Elmaghrabi";
455 FOR I=1 TO DDD :NEXT I
460 LOCATE 17,13 : PRINT "Mark C. Fabel";
465 FOR I=1 TO DDD :NEXT I
470 LOCATE 19,14 : PRINT "John Hagarty";
475 FOR I=1 TO DDD :NEXT I
480 LOCATE 24,10 : PRINT "One moment please...";
490 '
500 '   TO ACCEPT ANY KEY
510 '
520 X$=INKEY$ : IF X$="" THEN 520
530 CLS : PRINT "HERE WOULD BE A GOTO STATEMENT TO CREATE PROGRAM";
```

## AUTHOR2.BAS

```bas
10 '
20 '     TO DISPLAY TEXT PART OF SCREEN
30 '     DURING ATTRACT MODE.
40 '
50 '     SEE LINE 420 FOR ADDITIONAL
60 '     COMMENTS.
70 '
80 CLS : KEY OFF : SCREEN 1,0
100 LINE (15,25-6)-(15+30,25-6)
110 DRAW "G30"
120 LINE (15,25-5)-(15+30,25-5)
130 DRAW "G30"
140 LINE (15,25+25)-(15+30,25+25)
150 LINE (15,25+26)-(15+30,25+26)
160 CIRCLE (15+50,25+13),16
170 CIRCLE (15+50,25+13),15
180 CIRCLE (15+92,25+13),16
190 CIRCLE (15+92,25+13),15
200 X=X+150 : Y=Y
210 CIRCLE (165,25),10,,,4
220 CIRCLE (165,25),9,,,4
230 CIRCLE (165,25+20),10,,3
240 CIRCLE (165,25+20),11,,3
250 LINE (165-5,25+7)-(165+10,25+20)
260 LINE (165-4,25+7)-(165+11,25+20)
270 CIRCLE (165+35,25+13),16
280 CIRCLE (165+35,25+13),15
290 PSET (165+65,25)
300 DRAW "D27"
310 PSET (165+66,25)
320 DRAW "D27"
330 CIRCLE (165+80,25+8),10,,1.5*22/7,0.5*22/7
340 CIRCLE (165+80,25+8),9,,1.5*22/7,0.5*22/7
350 PSET (165+66,25)
360 DRAW "R15D1L15"
370 DRAW "D15R15U1L15"
380 PSET (165+79,25+15)
390 DRAW "F12L1H12"
400 PSET (165+105,25)
410 DRAW "R32"
420 PSET (165+105,25+1)
430 DRAW "R32L15D27L1U27"
432 DDD=750
435 FOR I=1 TO 750 :NEXT I
440 LOCATE 11,15 : PRINT "Written by";
445 FOR I=1 TO 750 :NEXT I
450 LOCATE 15,11 : PRINT "Ehab E. Elmaghrabi";
455 FOR I=1 TO 750 :NEXT I
460 LOCATE 17,13 : PRINT "Mark C. Fabel";
465 FOR I=1 TO 750 :NEXT I
470 LOCATE 19,14 : PRINT "John Hagarty";
475 FOR I=1 TO 750 :NEXT I
480 LOCATE 24,10 : PRINT "One moment please...";
490 CHAIN "zoosort.bas"
```

## COLTOMON.BAS

```bas
55000 KEY OFF:CLS
55001 WIDTH 40:DEF SEG=0:A=PEEK(&H410):POKE &H410, A OR &H30
55002 WIDTH 80:LOCATE  ,,1,12,13:KEY ON:REM coltomon.bas pgm.
```

## CRASHER.BAS

```bas
10 KEY OFF:CLS
20 DIM G(5),D(5),B$(8),A$(9),T$(5)
30 FOR J=1 TO 5
40 READ G(J),D(J)
50 NEXT J
60 DATA 9.8,1.2756E+07,1.67,3.477E+06,3.92,6.86E+06,8.82,1.262E+07,26.46,1.436E+08
70 FOR J=1 TO 5
80 READ B$(J)
90 NEXT J
100 DATA Earth,The Moon,Mars,Venus,Jupiter
110 PRINT"Do you wish to land on..."
120 PRINT"                             <1> Earth"
130 PRINT"                             <2> The Moon"
140 PRINT"                             <3> Mars"
150 PRINT"                             <4> Venus"
160 PRINT"                             <5> Jupiter"
170 B$=INPUT$(1)
180 B=VAL(B$)
190 IF B<1 OR B>5 THEN SOUND 37,2:GOTO 170
200 B$=B$(B)
210 G=G(B)
220 D=D(B)
230 PRINT"Do you need an explanation?"
240 A$=INPUT$(1)
250 IF A$="n" OR A$="N" GOTO 360
260 PRINT"You are attemping a soft landing on "B$" by firing your"
270 PRINT"rockets or retro-rockets in 1 second blasts to thrust towards"
280 PRINTB$" or away from "B$", or by letting your spacecraft"
290 PRINT"drift for one second intervals.  Your aim is to land with a zero"
300 PRINT"impact velocity in the shortest possible time.  You may choose"
310 PRINT"(A) the constant thrust per kilogram of your Lander, Your initial"
320 PRINT"position (S) meters from "B$", and your initial"
330 PRINT"velocity (V) meters/second according to restrictions which are "
340 PRINT"stated below.  (Note that a positive velocity leads away from "
350 PRINTB$" and that a negative velocity leads towards "B$".)"
360 PRINT:PRINT "Input Thrust/Weight Ratio - (Must be between"G"and "10*INT(G+1)")";,
370 INPUT A
380 IF A<=G THEN 360
390 IF A<=10*INT(G+1) THEN 420
400 PRINT"Do you want to land or smash your way through "B$"?"
410 GOTO 360
420 PRINT"Input initial height - (Must be between"A*34"and 0 ) ",;
430 INPUT S
440 B=S/19
450 IF S<=0 OR S>34*A THEN 420
460 PRINT"Input initial velocity - (Must be greater than"(-1*SQR(2*S*(A-G)))") ",
470 INPUT V
480 Y=SQR(2*A*(A-G)*(V*V+2*A*S+2*G*S))
490 M=(V+Y/(2*A))/(A+G)
500 F=2*INT(M+Y/(2*A*(A-G)))+2
510 PRINT"The Federal Energy Administrator allows you"F"seconds worth of fuel."
520 PRINT"Upon the command 'Fire !!', fire your rockets (Print '+') or your retro-"
530 PRINT"rockets (Print '-'), or neither (Print '=').  After each blast, the"
540 PRINT"computer will print out the flight data and plot your position."
550 PRINT:PRINT:PRINTTAB(27)"Hit any key to continue"
560 N=0
570 P=0
580 A$="<={<={}=>"
590 X=S/B
600 IF X>36 THEN 1190
610 PRINT TAB(37) CHR$(221) TAB(38+X);MID$(A$,4+3*SGN(V),6+3*SGN(V)) CHR$(13);
620 PRINT USING "Dist=####.#  Speed=####.#  Fuel=### &";S;V;F-N;CHR$(221)
630 IF N=F THEN 1040
640 C$=INPUT$(1)
650 IF C$="+" THEN J=1:GOTO 700
660 IF C$="=" THEN J=2:GOTO 700
670 IF C$="-" THEN J=3:GOTO 700
680 SOUND 37,2
690 GOTO 640
700 U=(J-2)*A
710 IF J=3 THEN 740
720 Z=(V+SQR(V*V-2*S*(U-G)))/(G-U)
730 GOTO 760
740 IF V<0 AND V*V>=2*S*(U-G) THEN 720
750 Z=1000
760 IF Z<=1 THEN 820
770 S=0.5*(U-G)+V+S
780 V=U-G+V
790 N=N+ABS(J-2)
800 P=P+1
810 GOTO 590
820 W=ABS(V+(U-G)*Z)
830 T=P+Z
840 IF W<0.01 THEN 970
850 CLS:ON INT(W/10)+1 GOTO 880,900,900,930
860 PRINT"Is there life after death?  You crashed with an impact velocity of"
870 GOTO 950
880 PRINT" Bumpy landing!  You hit the ground with an impact velocity of "
890 GOTO 950
900 PRINT"Blue Cross-Blue Shield will pay 80% towards your X-Ray "
910 PRINT"expenses.  You crashed with an impact velocity of "
920 GOTO 950
930 PRINT"You should have not have sat backwards in your rocket!  Your teeth"
940 PRINT"just left throuhg the back of your skull with a velocity of "
950 PRINT W"meters per second after having maneuvered for"T"seconds."
960 GOTO 1140
970 IF ABS(M+Y/(2*A*(A-G))-T)<0.01 THEN 1010
980 PRINT"You did manage to land softly after maneuvering for"T"seconds, but"
990 PRINT"not in the minimum time!"
1000 GOTO 1140
1010 PRINT"You have landed softly in the shortest possible time of "
1020 PRINTM+Y/(2*A*(A-G))"seconds.  Congratulations!!"
1030 GOTO 1310
1040 PRINT TAB(35) CHR$(221) " You are out of fuel!!"
1050 T=V/G+SQR(V*V+2*G*S)/G
1060 W=SQR(V*V+2*G*S)
1070 IF V<SQR(D*G) THEN 1100
1080 PRINT"When you pass Neptune, send me a card!"
1090 GOTO 1220
1100 PRINT"Brace yourself!  You are going to crash with an impact velocity"
1110 PRINT"of"W"meters per second in"T"seconds from now."
1120 IF W<40 THEN 1140
1130 PRINT"You don't have a ghost of a chance for survival!"
1140 PRINT"The optimal strategy would have been to start with a rocket"
1150 PRINT"blast (+) and switch after"M"seconds to retro-rockets (-)."
1160 PRINT"The shortest possible time in which a soft landing could have"
1170 PRINT"been accomplished is"M+Y/(2*A*(A-G))"seconds."
1180 GOTO 1220
1190 IF N=F THEN 1040
1200 PRINTTAB(37) CHR$(221) " You aer out of range!"
1210 GOTO 620
1220 PRINT"Do you want to try again?"
1230 A$=INPUT$(1)
1240 IF A$="n" OR A$="N" THEN 1300
1250 PRINT"Same place?"
1260 A$=INPUT$(1)
1270 IF A$="y" OR A$="Y" GOTO 360
1280 PRINT"Where else?"
1290 GOTO 110
1300 CLS:KEY ON
1310 PRINT"Just as well!"
```

## DATETIME.BAS

```bas
10 'Set Date and Time - Russ Williams, Feb 24, 1983
20 'DATETIME is for people who are too lazy to type in the entire date
30 'each time they turn on their PC.  It lets you type in just the day
40 'number if the month and year have not changed, or just the month and
50 'day numbers if the year has not changed.  The time can be entered with
60 'either a colon or a dash, or with no separator at all, e.g. "905".
70 'Time can be entered either 24-hour clock style, or 12-hour style with a
80 '"p" suffix for PM, e.g. "315p" for "3:15 PM".  It is suggested that you
90 'add an AUTOEXEC to your DOS disk, containing the command BASIC DATETIME
100 'to invoke this program each time you boot-up DOS.
110 'Your DOS disk must be writable, because the program writes a small file
120 'to save the last date & time entered.
130 DEFINT A-Z: ON ERROR GOTO 330
140 OPEN "DATETIME.FIL" FOR INPUT AS #1: LINE INPUT #1,DTTM$
150 ON ERROR GOTO 0: CLOSE: PRINT "Current date is ";LEFT$(DTTM$,10)
160 INPUT "Date (MM-DD-YY or MM-DD or DD or null): ",DT$
170 IF DT$="" THEN DT$=LEFT$(DTTM$,10): GOTO 200
180 J=INSTR(DT$,"-"): IF J=0 THEN J=3: DT$=LEFT$(DTTM$,2)+"-"+DT$+"-"+MID$(DTTM$,9,2)
190 J=INSTR(3,DT$,"-"): IF J=0 THEN DT$=DT$+"-"+MID$(DATE$,9,2)
200 DATE$=DT$: PRINT "New date is ";DATE$"
210 PRINT "Current time is ";RIGHT$(DTTM$,8)
220 INPUT "Time (HH:MM or HH-MM or HHMM, 'p' suffix for PM): ",TM$
230 IF TM$="" THEN TM$=RIGHT$(DTTM$,8): GOTO 300
240 M=0: IF RIGHT$(TM$,1)="p" THEN M=12: TM$=LEFT$(TM$,LEN(TM$)-1)
250 J=INSTR(TM$,":"): IF J=0 THEN J=INSTR(TM$,"-")
260 IF J=0 THEN TM$=LEFT$(TM$,LEN(TM$)-2)+":"+MID$(TM$,LEN(TM$)-1):J=LEN(TM$)-2
270 K=VAL(LEFT$(TM$,J-1)): K$=MID$(TM$,J)
280 IF K=12 THEN IF MID$(K$,J+1,2)="00" THEN M=-M ELSE M=12-M
290 TM$=MID$(STR$(K+M)+K$,2)
300 TIME$=TM$: PRINT "New time is ";TIME$
310 OPEN "DATETIME.FIL" FOR OUTPUT AS #1
320 PRINT #1,DATE$+" "+TIME$: CLOSE: SYSTEM
330 DTTM$="01-01-1983 00:00:00": RESUME 150
```

## DISKMOD.BAS

```bas
10 REM ********************************************************************
20 REM *       DiskMod              by            John Vandegrift         *
30 REM *                                                                  *
40 REM *  This program allows the user to modify diskette sectors in the  *
50 REM *  following way.  The user specifies the sector that he wants to  *
60 REM *  review.  This sector is loaded into memory.  It is key that the *
70 REM *  user realize that only one sector is in memory at any one time. *
80 REM *  The user can then review and modify this sector using option 2  *
90 REM *  on the master menu.  In the review/alter section, the cursor    *
100 REM *  move the inverse video cursor.  The top of the screen will show *
110 REM *  what sector is being worked on and the bottom of the screen has *
120 REM *  the commands.  On the 24th line, the user is shown the new value*
130 REM *  and the current value for the location where the cursor is      *
140 REM *  located, in base ten.  The new value is entered by entering the *
150 REM *  number followed by a carriage return.  The sector is displayed  *
160 REM *  in two sections, the hex values on the left part of the screen  *
170 REM *  and the character equivalents on the right part of the screen.  *
180 REM *  X exits this section and takes the user back to the menu.       *
190 REM *       Option 3 of the menu is the inly way to actually save data *
200 REM *  to the diskette.  When option 3 is selected, the current con-   *
210 REM *  tents of the sector buffer are dumped to the last sector        *
220 REM *  loaded in option 1 of the menu.  Note: Option 2 just changes    *
230 REM *  the sector buffer in memory, not the contents of the diskette.  *
240 REM *  Option 3 changes the contents of the diskette.                  *
250 REM *       User must have 64k memory and 1 disk drive, minimum        *
260 REM *  configuration.                                                  *
270 REM ********************************************************************
280 CLEAR ,&H4000:KEY OFF
290 DEF SEG=0
300 GOSUB 1730
310 REM          Assembler Routine
320 REM
330 REM  This routine pokes a machine language subroutine into high memory.
340 REM  This subroutine reads and writes the diskette sector
350 REM  from/to the diskette to/from upper memory.
360 REM  The diskette buffer area starts at &hcc00 and is 512 bytes.
370 REM  The subroutine is loaded at &hE000 and is 38 bytes.
380 REM
390 DATA &h55,&h06,&hb8,&h00,&h00
400 DATA &h8e,&hc0,&h8b,&hec,&h8b
410 DATA &h76,&h0c,&h8b,&h04,&h8a
420 DATA &he0,&hb0,&h01,&hbb,&h00
430 DATA &hcc,&h8b,&h76,&h08,&h8b
440 DATA &h0c,&h8b,&h76,&h0a,&h8b
450 DATA &h14,&hcd,&h13,&h07,&h5d
460 DATA &hca,&h06,&h00
470 FOR I=1 TO 38:READ J:SUM=SUM+J:NEXT I
480 IF SUM<>3700 THEN CLS:PRINT "Sum = ";SUM;". Data Error!":STOP
490 RESTORE
500 FOR I=0 TO 37:READ J:POKE &HE000+I,J:NEXT I
510 SUBRT=&HE000
520 REM
530 REM         Set up variable to indicate whether diskette has been
540 REM         read yet.
550 REM
560 NOTREAD=1
570 REM
580 REM         Master Menu
590 REM
600 REM  The user may want to follow the options in order of occurance,
610 REM  first declaring the sector, altering it and finally
620 REM  writing it back to the diskette.
630 REM
640 GOSUB 1890
650 CLS:LOCATE 2,37:PRINT "DiskMod "
660 IF NOTREAD THEN LOCATE 23,30:PRINT "Sector not declared!!":GOTO 690
670 LOCATE 23,30:IF NOSIDES=1 THEN PRINT "Single-sided diskette":GOTO 690
680 PRINT "Double-sided diskette"
690 LOCATE 10,30:PRINT "1. Select Diskette Sector"
700 LOCATE 11,30:PRINT "2. Review/Alter Sector"
710 LOCATE 12,30:PRINT "3. Update Diskette"
720 LOCATE 13,30:PRINT "4. Help"
730 LOCATE 14,30:PRINT "5. Exit"
740 LOCATE 16,30:INPUT "Choice";IANS
750 ON IANS GOSUB 910,1210,790,1980,1730
760 IF IANS=5 THEN KEY ON:END
770 GOTO 650
780 REM
790 REM         Put Sector on diskette
800 REM
810 REM    This routine takes the diskette sector image in upper memory
820 REM    and writes it to the diskette.  The sector parameters previously
830 REM    selected are used.  The user could allow modification of the
840 REM    track and sector numbers to put the sector image in another place.
850 REM
860 IF NOTREAD THEN RETURN
870 A%=3
880 CALL SUBRT (A%, B%, C%)
890 RETURN
900 REM
910 REM         Select Sector to be Displayed
920 REM
930 REM    Allows the user to select the drive and side (if double sided)
940 REM    as well as track and sector.  Also loads this sector into memory.
950 REM
960 CLS
970 LOCATE 10,10:INPUT "Select drive (A-B)";DRIVE$
980 IF DRIVE$="a" OR DRIVE$="A" THEN DRIVE=0:GOTO 1010
990 IF DRIVE$="b" OR DRIVE$="B" THEN DRIVE=1:GOTO 1010
1000 GOTO 970
1010 A%=2:B%=DRIVE:C%=2
1020 CALL SUBRT (A%, B%, C%)   'check for single/double sided
1030 NOTREAD=1
1040 IF PEEK(&HCC00)=&HFF THEN NOSIDES=2:NOTREAD=0:GOTO 1080
1050 IF PEEK(&HCC00)=&HFE THEN NOSIDES=1:NOTREAD=0:GOTO 1080
1060 LOCATE 15,10:INPUT "Diskette not correctly formatted. C/R to go on.";IANS
1070 GOTO 1190
1080 LOCATE 11,10:INPUT "Select track (0-39)";TRACK
1090 IF TRACK<0 OR TRACK>39 THEN 1080
1100 LOCATE 12,10:INPUT "Select sector (1-8)";SECTOR
1110 IF SECTOR<1 OR SECTOR>8 THEN 1100
1120 HEAD=0:IF NOSIDES=1 THEN 1150
1130 LOCATE 13,10:INPUT "Select side (0-1)";HEAD
1140 IF HEAD<0 OR HEAD>1 THEN 1130
1150 LOCATE 20,10:INPUT "Inputs satisfactory";IANS$
1160 IF LEFT$(IANS$,1)<>"Y" AND LEFT$(IANS$,1)<>"y" THEN 960
1170 B%=(HEAD*256)+DRIVE:C%=(TRACK*256)+SECTOR
1180 CALL SUBRT (A%, B%, C%)
1190 RETURN
1200 REM
1210 REM         Review/Alter Sector Buffer
1220 REM
1230 REM   Allows the user to alter sector buffer contents.  Cursor
1240 REM   arrows move cursor.  Enter number and press return to enter
1250 REM   new number.  X exits system.
1260 REM   This function does not save these changes to diskette!
1270 REM
1280 IF NOTREAD THEN RETURN
1290 CLS
1300 LOCATE 1,1:PRINT "Track ";TRACK;"  Sector ";SECTOR;"  Side ";HEAD;
1310 PRINT "Drive ";DRIVE$
1320 GOSUB 1630
1330 I=0:J=0:GOSUB 1620
1340 LOCATE 24,1:PRINT "New Value";
1350 COLOR 0,7:LOCATE 25,1:FOR II=24 TO 27:PRINT CHR$(II);:NEXT
1360 PRINT " - Cursor    No.+C/R - new no.    X - eXit";
1370 COLOR 0,7:GOSUB 1570:GOSUB 1610
1380 A$=INKEY$:IF A$="" THEN 1380
1390 IF A$=CHR$(13) THEN CHAR=Z:Z=0:GOSUB 1560:GOSUB 1520:GOTO 1370
1400 GOSUB 1560
1410 IF A$="X" OR A$="x" THEN RETURN
1420 IF LEN(A$)=1 THEN 1470 ELSE A$=RIGHT$(A$,1)
1430 IF A$=CHR$(75) THEN IF J>0 THEN J=J-1
1440 IF A$=CHR$(77) THEN IF J<23 THEN J=J+1
1450 IF A$=CHR$(72) THEN IF I>0 THEN I=I-1
1460 IF A$=CHR$(80) THEN IF I<21 THEN I=I+1
1470 GOSUB 1620
1480 IF A$<"/" OR A$>":" THEN 1370
1490 Z=Z*10+VAL(A$)
1500 IF Z>255 THEN Z=0
1510 GOSUB 1610:GOTO 1370
1520 POKE (&HCC00+J+(I*24)),CHAR
1530 IF J<23 THEN J=J+1 ELSE IF I<21 THEN I=I+1:J=0 ELSE I=0:J=0
1540 GOSUB 1620
1550 RETURN
1560 COLOR 7,0
1570 Z$=HEX$(CHAR):IF LEN(Z$)=1 THEN Z$="0"+Z$
1580 LOCATE I+2,J*2+1:PRINT Z$;:LOCATE ,J+51
1590 IF CHAR>13 THEN PRINT CHR$(CHAR); ELSE PRINT " ";
1600 RETURN
1610 LOCATE 24,12:PRINT Z;:RETURN
1620 CHAR=PEEK(&HCC00+J+(I*24)):LOCATE 24,30:PRINT "Value";CHAR;:RETURN
1630 FOR II=0 TO 20:FOR JJ=0 TO 23
1640 GOSUB 1680
1650 NEXT JJ:NEXT II
1660 II=21:FOR JJ=0 TO 7:GOSUB 1680:NEXT JJ
1670 RETURN
1680 DAT=PEEK(&HCC00+JJ+(II*24))
1690 Z$=HEX$(DAT):IF LEN(Z$)=1 THEN Z$="0"+Z$
1700 LOCATE II+2,JJ*2+1:PRINT Z$;:LOCATE ,JJ+51
1710 IF DAT>13 THEN PRINT CHR$(DAT); ELSE PRINT " ";
1720 RETURN
1730 REM
1740 REM                Ending Routine
1750 REM
1760 CLS
1770 A$="DiskMod ":B$="b":C$="y":D$="John Vandegrift":COUNT=10
1780 GOSUB 1820
1790 A$="        ":B$=" ":C$=" ":D$="               ":COUNT=9
1800 GOSUB 1820
1810 LOCATE 23,1:RETURN
1820 FOR I=1 TO COUNT
1830 LOCATE I,37:PRINT A$;
1840 LOCATE 12,4*I:PRINT B$;
1850 LOCATE 12,81-(4*I):PRINT C$;
1860 LOCATE 24-I,33:PRINT D$;
1870 NEXT I
1880 RETURN
1890 REM
1900 REM                Move Header back to top
1910 REM
1920 FOR I=14 TO 13 STEP -1:LOCATE I,33:PRINT SPACE$(15);:NEXT I
1930 A$="DiskMod ":FOR I=12 TO 3 STEP -1
1940 LOCATE I-1,37:PRINT A$;
1950 LOCATE I,37:PRINT SPACE$(8);
1960 NEXT I
1970 RETURN
1980 REM
1990 REM                Help Routine
2000 REM
2010 CLS:LOCATE 4,5:PRINT "(1)  Select Diskette Sector allows specification of sector for display."
2020 LOCATE 7,5:PRINT "(2)  Review/Alter Sector allows the user to review/change sector contents."
2030 LOCATE 10,5:PRINT "(3)  Update Diskette is the only way to keep changes (2) on the diskette."
2040 LOCATE 13,5:PRINT "(4)  EXIT ALLOWS THE USER TO EXIT THE PROGRAM."
2050 LOCATE 16,5:PRINT "(5)  Help is this screen."
2060 LOCATE 19,5:INPUT "Press return to continue....",IANS
2070 RETURN
```

## FLAG.BAS

```bas
10 CLS : SCREEN 1 : COLOR 0,0
12 X=200 : Y=0
15 LINE (X+12,Y+70)-(X+52,Y+82),1,BF
20 LINE (X+53,Y+70)-(X+53,Y+99),2
30 LINE (X+54,Y+70)-(X+54,Y+99),2
40 CIRCLE (X+53,Y+68),2,2
50 PAINT (X+53,Y+68),2,2
70 LOCATE 10,28 : PRINT "swap";
80 CIRCLE (X+54,Y+99),4,3,,,5/18
90 PAINT (X+54,Y+99),4,3
```

## FOILS.BAS

```bas
10 REM FOILS
20 REM save "foils
30 '*************** initialization  ***********************
40 KEY 10,"EDIT "
50 KEY 9,"renum"+CHR$(13)
60 FPAGE = 1 : LPAGE = 999:  PNUM=1 'initialize page numbers
70 EM=1 : DS =1 'initialize emphasized and double strike
80 FILE$="$$$"
90 RNUM=0 : LNUM=0 : PRINTSW = 0
100 '***************terminal I/O *************************
110 CLS : PRINT "Foil printing program" : PRINT : PRINT
120 PNUM=1
130 PRINT "Current filespec is: ";FILE$
140 INPUT "Enter filespec of file to be printed. 'Enter' = same. $$$ = quit. ",NEWF$
150 IF LEN(NEWF$)>0   THEN FILE$=NEWF$
160 IF FILE$="$$$" THEN DS=1 : EM =1 : GOSUB 940 : SYSTEM
170  ON ERROR GOTO 690
180  OPEN  FILE$ FOR INPUT AS #1
190 PRINT "Author now is: ";AUTH$
200 INPUT "Press enter to keep. Otherwise, key  new author's name. ",NEWAUTH$
210 IF NEWAUTH$<>"" THEN AUTH$=NEWAUTH$
220 PRINT "First page is: ";FPAGE
230 INPUT "Press enter to keep. Otherwise, key  new page number. ",NEWPAGE
240 IF NEWPAGE>0  THEN FPAGE=NEWPAGE
250 PRINT "Last page is: ";LPAGE
260 INPUT "Press enter to keep. Otherwise, key  new page number. ",NEWPAGE
270 IF NEWPAGE>0  THEN LPAGE=NEWPAGE
280 PRINT "Double strike is ";DS
290 INPUT "Double strike? Blank = don't change  1 = no  2 = yes ",S
300 IF S=1 THEN DS=1
310 IF S=2 THEN DS=2
320 PRINT "Emphasized is ";EM
330 INPUT "Emphasized? Blank = don't change  1 = no  2= yes ",S
340 IF S=1 THEN EM=1
350 IF S=2 THEN EM=2
360 GOSUB 940 'Set print switch
370 IF PRINTSW=1 THEN GOSUB 880 'Set print modes if print switch is on
380 PRINT "Align paper and press any key."
390 POKE 0,60 :K$=INKEY$ : IF K$="" THEN GOTO 390 'Wait for key
400 '*************** FILE I/O ****************************
410 IF EOF(1) THEN GOSUB 730 : CLOSE 1 : GOTO 110 'Last eject and get out
420 LINE INPUT#1,REC$ 'read a record
430 PRINT REC$
440 RNUM = RNUM + 1 'count records
450 '****************** Center .CE records ************************
460 IF LEFT$(REC$,3)<>".ce" AND LEFT$(REC$,3)<>".CE" THEN GOTO 580
470 IF PRINTSW = 0 THEN GOTO 550 'not supposed to print
480 REC$=MID$(REC$,4,(LEN(REC$)-3))
490 IF REC$="" GOTO 550
500 WHILE LEFT$(REC$,1) = " "
510 REC$=MID$(REC$,2,(LEN(REC$)-1))
520 WEND
530 PAD = (40 - LEN(REC$))/2 'find length for centering
540 REC$=STRING$(PAD," ") + REC$ 'pad record to center it
550 IF PRINTSW=1 THEN LPRINT CHR$(14);LEFT$(REC$,40) : LPRINT
560 LNUM= LNUM +1
570 GOTO 410
580 '****************** Handle .PA records ********************
590 IF LEFT$(REC$,3)<>".pa" AND LEFT$(REC$,3)<>".PA" THEN GOTO 610
600 GOSUB 730 : GOTO 410
610 IF PRINTSW = 1 THEN LPRINT CHR$(14);LEFT$(REC$,40) : LPRINT
620 LNUM=LNUM +1
630 GOTO 410
640 IF PRINTSW=1 THEN LPRINT REC$ : LPRINT
650 LNUM=LNUM + 1
660 GOTO 410
670 GOSUB 730 'final eject
680 GOTO 110
690 IF ERR = 53 THEN PRINT "File "+FILE$+" not found." : GOTO 130
700 IF ERR = 24 THEN RESUME
710 ON ERROR GOTO 0
720 '******************* subroutine for footings and new page ***********
730 REM 'Print footing and eject to next page
740 IF PRINTSW=0 THEN GOTO 840 'not supposed to print, just increment counters
750 IF LNUM > 29 THEN GOTO 790 'page is full
760 FOR LNUM = LNUM TO 30 'find end of page
770  LPRINT : LPRINT
780 NEXT LNUM
790 LPRINT CHR$(20)+CHR$(27)+"H"; 'drop expanded mode
800 LPRINT CHR$(15);AUTH$,DATE$,TIME$,"Page ";PNUM; 'footing, compressed
810 LPRINT CHR$(18); 'Drop compressed mode
820 LPRINT CHR$(12) 'eject to next page
830 GOSUB 880  'reset print modes
840 PNUM=PNUM+1
850 LNUM=0
860 GOSUB 940 'Reset print switch
870 RETURN
880 '*********  subroutine to set print modes **************************
890 IF DS=1 THEN LPRINT CHR$(27)+"H";
900 IF DS=2 THEN LPRINT CHR$(27)+"G";
910 IF EM=1 THEN LPRINT CHR$(27)+"F";
920 IF EM=2 THEN LPRINT CHR$(27)+"E";
930 RETURN
940 '******* SUBROUTINE TO RESET PRINT SWITCH
950 IF PNUM>=FPAGE AND PNUM <=LPAGE THEN PRINTSW=1 ELSE PRINTSW = 0
960 IF PRINTSW=1 THEN GOSUB 880 'set printing modes
970 RETURN
```

## LANDER.BAS

```bas
10 CLS
20 KEY OFF
30 '*** LUNAR LANDER EXCURSION MODULE LANDING PROGRAM ***
40 PRINT TAB(25) "Houston calling *Lunar Module*:"
50 BEEP:FOR ZZ=1 TO 800:NEXT ZZ:PRINT
60 PRINT TAB(17) "Automatic landing computer has ";:COLOR 18:PRINT"malfunctioned.":COLOR 2
70 BEEP:FOR ZZ=1 TO 800:NEXT ZZ:PRINT
80 COLOR 1:LOCATE ,15:PRINT "Manual control is necessary if you wish to survive":COLOR 2
90 BEEP:FOR ZZ=1 TO 800:NEXT ZZ:PRINT
100 PRINT"You will be asked to input the fuel/consumtion rate. The more fuel you use, the"
110 PRINT"slower your desent will be.  Fuel is consumed by lbs. per second.  The rate  of"
120 PRINT "consumption you decide on must be between 8 lbs./sec and 200 lbs./sec."
130 FOR ZZ=1 TO 1500:NEXT ZZ:BEEP:PRINT
140 PRINT TAB(20)"Total fuel supply: 16,000 lbs."
150 FOR ZZ=1 TO 800:NEXT ZZ:PRINT:BEEP
160 PRINT TAB(20)"Time to impact moon: 120 sec."
170 FOR ZZ=1 TO 800:NEXT ZZ:PRINT:BEEP
180 PRINT TAB(20)"Total weight of lunar lander: 32,000 lbs."
190 FOR ZZ=1 TO 1000:NEXT ZZ:BEEP:PRINT
200 COLOR 18:PRINT:PRINT:PRINT:PRINT TAB(16)"...Stand by...First radar fix coming up...Mark..."
210 FOR ZZ=1 TO 1200:NEXT ZZ
220 CLS
230 PRINT TAB(27)"COMMENCE LANDING PROCEDURE"
240 COLOR 2:PRINT:PRINT:PRINT
250 PRINT"Input the fuel rate (lbs/sec)"
260 L=0
270 A=120
280 V=1
290 M=32500
300 N=16500
310 G=0.001
320 Z=1.8
330 X1=INT(L)
340 X2=INT(A)
350 X3=INT(5280*(A-INT(A)))
360 X4=INT(3600*V)
370 X5=INT(M-N)
380 PRINT USING "     #### Sec    #### Miles   #### Ft.  #### Mph  ##### Lbs of remaining fuel";X1;X2;X3;X4;X5
390 INPUT K
400 PRINT
410 T=10
420 IF K<0 GOTO 470
430 IF K=0 GOTO 490
440 IF K<8 GOTO 470
450 IF K>200 GOTO 470
460 GOTO 490
470 PRINTTAB(16)"Pilot goofed...NASA is having fits...Try again":BEEP
480 GOTO 390
490 IF ((M-N)-0.001)<0 GOTO 600
500 IF (T-0.001)<0 GOTO 330
510 S=T
520 IF ((N+S*K)-M)<=0 GOTO 540
530 S=(M-N)/K
540 GOSUB 1090
550 IF I<=0 THEN 960
560 IF V<=0 THEN 580
570 IF J<0 THEN 1010
580 GOSUB 900
590 GOTO 490
600 COLOR 18:PRINT"Fuel exhasted at"L"seconds!!":COLOR 2:PRINT:BEEP
610 S=((-1*V)+SQR(V*V+2*A*G))/G
620 V=V+G*S
630 L=L+S
640 PRINT"On the Moon at"L"seconds":PRINT
650 W=3600*V
660 PRINT"Impact velocity of"W"mph":PRINT
670 PRINT"Fuel left:"M-N"lbs"
680 IF W>1 THEN 710
690 PRINT"Perfect landing. You were lucky.":PRINT
700 GOTO 840
710 IF W>10 THEN 740
720 PRINT"Good landing, but it could have been better.":PRINT
730 GOTO 840
740 IF W>25 THEN 770
750 PRINT"Congradulations on a lousy landing. You bent a strut, but that's not critical.":PRINT
760 GOTO 840
770 IF W>60 THEN 820
780 PRINT"Your Lander has been irreparably damaged. Hope you enjoy moon life since you":PRINT
790 PRINT"won't be able to leave.  You have your choice of dying from decompression,":PRINT
800 PRINT"freezing to death, or burning to death, whatever you prefer.":PRINT
810 GOTO 840
820 PRINT"You have crashed. There were no survivors. However, that new crater thats"
830 PRINT INT(0.277778*W)"feet deep, will be named in your honor."
840 PRINT
850 PRINT"Do you wish to try again? (Y = yes)"
860 A$=INPUT$(1):IF A$="Y" OR A$="y" GOTO 140
870 IF A$="N" OR A$="n" GOTO 880 ELSE GOTO 860
880 CLS:KEY ON
890 END
900 L=L+S
910 T=T-S
920 M=M-S*K
930 A=I
940 V=J
950 RETURN
960 IF (S-0.005)<0 THEN 640
970 S=2*A/(V+SQR(V*V+2*A*(G-Z*K/M)))
980 GOSUB 1090
990 GOSUB 900
1000 GOTO 960
1010 W=(1-M*G/(Z*K))/2
1020 S=M*V/(Z*K*(W+SQR(W*W+V/Z)))+0.05
1030 GOSUB 1090
1040 IF I<=0 THEN 960
1050 GOSUB 900
1060 IF (-1*J)<=0 THEN 490
1070 IF V<0 THEN 490
1080 GOTO 1010
1090 Q=S*K/M
1100 J=V+G*S+Z*((-1*Q)-(Q^2)/2-(Q^3)/3-(Q^4)/4-(Q^5)/5)
1110 I=A-G*S*S/2-V*S+Z*S*(Q/2+Q^2/6+Q^3/12+Q^4/20+Q^5/30)
1120 RETURN
1130 END
```

## MONTOCOL.BAS

```bas
2 KEY OFF:CLS:WIDTH 80:DEF SEG=0:A=PEEK(&H410):POKE &H410,(A AND &HCF) OR &H20
3 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE  ,,1,6,7
4 KEY ON:KEY OFF:CLS:WIDTH 40
```

## NOISE.BAS

```bas
10 REM Program name: CLOCK
20 REM This program presents the time as seen by the system.
30 REM Along with the time a "ticking" sound is made.
40 CLS
50 PRINT "What frequency (cycles per second) do you want the ticking of the"
60 INPUT "clock to be? The sound can be between 37 and 32,000 CPS. ";S
70 S= ABS(S)
80 IF S < 37 THEN X=1
90 INPUT "How many seconds between each tick";Q
100 Q=18.2*Q
110 LOCATE 5,1,0,12,13
120 PRINT "Press the ESC key to stop the clock."
130 LOCATE 10,10,0,12,13
140 PRINT TIME$, DATE$
150 IF X = 1 THEN GOTO 110
160 SOUND S,1
170 SOUND 32767,Q
180 E$=INKEY$:IF E$=CHR$(27) THEN GOTO 40
190 GOTO 110
200 END
```

## STARTUP.BAS

```bas
2 KEY OFF:CLS:WIDTH 80:DEF SEG=0:A=PEEK(&H410):POKE &H410,(A AND &HCF) OR &H20
3 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE  ,,1,6,7
4 'KEY ON:OUT 980,2:   OUT 981,43:KEY OFF:CLS
5 KEY OFF:CLS:KEY 1,"":KEY 2,"":KEY 3,"":KEY 4,"":KEY 5,"":KEY 6,"":KEY 7,"":KEY 8,"":KEY 9,"":KEY 10,""
6 DEF SEG=0:POKE &H417,&H20 'pad on num
7 DEF SEG=0:POKE 1050,PEEK(1052) 'clr k'bd buffer
8 DEF SEG:POKE 106,0
9 CHAIN "author2.bas"
```

## TREK.BAS

```bas
10 REM The IBM Personal Computer star trek
15 REM Version 1.00 January 1982
20 REM Author -Dave Morrison Unionville
25 DEF SEG: POKE 106,0
30 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:LOCATE 5,19:PRINT "IBM"
35 LOCATE 7,12,0:PRINT "Personal Computer"
40 COLOR 10,0:LOCATE 10,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
45 LOCATE 11,9,0:PRINT CHR$(179)+"  ** STAR TREK **    "+CHR$(179)
50 LOCATE 12,9,0:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
55 LOCATE 13,9,0:PRINT CHR$(179)+"    Version 1.00     "+CHR$(179)
60 LOCATE 14,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
62 LOCATE 17,7,0:PRINT "      Dave Morrison 1982"
63 LOCATE 20,5,0:PRINT "**Trademark of Paramont Pictures"
65 COLOR 14,0:LOCATE 23,7,0:PRINT "Press space bar to continue"
70 IF INKEY$ <> "" THEN GOTO 70
75 CMD$ = INKEY$
80 IF CMD$ = " " THEN GOTO 97
85 IF CMD$ =CHR$(27) THEN END
90 GOTO 75
97 Z$=STRING$(8,32)
100 DIM G(8,8),C(9,2),K(3,3),N(3),Z(8,8),D(8)
105 CLS:Y$=TIME$
106 RANDOMIZE(INT(VAL(RIGHT$(Y$,4))))
110 T=INT(RND(1)*20+20)*100:T0=T:T9=25+INT(RND(1)*10):D0=0:E=3000:E0=E
120 P=10:P0=P:S9=200:B9=0:K9=0:X$="":X0$=" IS "
130 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
140 DEF FNR(R)=INT(RND(R)*7.98+1.01)
490 Q1=FNR(1):Q2=FNR(1):S1=FNR(1):S2=FNR(1)
530 FOR I=1 TO 9:C(I,1)=0:C(I,2)=0:NEXT I
540 C(3,1)=-1:C(2,1)=-1:C(4,1)=-1:C(4,2)=-1:C(5,2)=-1:C(6,2)=-1
600 C(1,2)=1:C(2,2)=1:C(6,1)=1:C(7,1)=1:C(8,1)=1:C(8,2)=1:C(9,2)=1
670 FOR I=1 TO 8:D(I)=0:NEXT I
710 A1$="NAVSRSLRSPHATORSHEDAMCOMXXX'
750 SCREEN 1,0
820 FOR I=1 TO 8:FOR J=1 TO 8:K3=0:Z(I,J)=0:R1=RND(1)
830 XD=INT(RND*320):YD=INT(RND*200):COL=INT(RND*2):RD=INT(RND*3):PAL=INT(RND*4):HZ=INT(RND*1000+37):COLOR 0,COL:CIRCLE (XD,YD),RD,PAL:SOUND HZ,1
850 IF R1>0.9799999 THEN  K3=3:K9=K9+3:GOTO 980
860 IF R1>0.95 THEN K3=2:K9=K9+2:GOTO 980
870 IF R1>0.8 THEN K3=1:K9=K9+1
980 B3=0:IF RND(1)>0.96 THEN B3=1:B9=B9+1
1040 G(I,J)=K3*100+B3*10+FNR(1):NEXT J:NEXT I:IF K9>T9 THEN T9=K9+1
1100 IF B9<>0 THEN 1200
1150 IF G(Q1,Q2)<200 THEN G(Q1,Q2)=G(Q1,Q2)+100:K9=K9+1
1160 B9=1:G(Q1,Q2)=G(Q1,Q2)+10:Q1=FNR(1):Q2=FNR(1)
1200 K7=K9:IF B9<>1 THEN X$="S":X0$=" ARE "
1225 SCREEN 0,1:COLOR 14,0
1230 PRINT " YOUR ORDERS ARE AS FOLLOWS :"
1240 PRINT " DESTROY THE ";K9;" KLINGON WARSHIPS WHICH HAVE INVADED "
1250 PRINT " THE GALAXY BEFORE THEY CAN ATTACK FEDERATION HEADQUARTERS "
1260 PRINT " ON STARDATE ";T0+T9;"   THIS GIVES YOU ";T9;" DAYS."
1270 PRINT " THERE";X0$;B9;" STARBASE";X$;" IN THE GALAXY FOR RESUPPLYING YOUR SHIP "
1280 PRINT:PRINT " HIT SPACE BAR WHEN YOU ARE READY TO ACCEPT COMMAND "
1300 I=RND(1):IF INKEY$<>"" THEN GOTO 1300
1303 CMD$=INKEY$
1305 IF CMD$=" " THEN GOTO 1320
1310 IF CMD$=CHR$(27) THEN END
1315 GOTO 1303
1320 CLS:Z4=Q1:Z5=Q2:K3=0:B3=0:S3=0:G5=0:D4=0.5*RND(1):Z(Q1,Q2)=G(Q1,Q2)
1390 IF Q1<1 OR Q1>8 OR Q2<1 OR Q2>8 THEN 1600
1430 GOSUB 9030:PRINT :IF T0<>T THEN 1490
1460 PRINT " YOUR MISSION BEGINS WITH YOUR STARSHIP LOCATED "
1470 PRINT " IN THE GALACTIC QUADRANT,";G2$;"'.":GOTO 1500
1490 PRINT " NOW ENTERING ";G2$;" QUADRANT * * * "
1500 PRINT :K3=INT(G(Q1,Q2)*0.01):B3=INT(G(Q1,Q2)*0.1)-10*K3
1540 S3=G(Q1,Q2)-100*K3-10*B3:IF K3=0 THEN GOTO 1590
1560 COLOR 12,0:PRINT " COMBAT AREA *** CONDITION RED":FOR JP=1 TO 4:PLAY "mbl64t120o1;cc#dd#eff#gg#aa#b":NEXT JP:IF S>200 THEN 1590
1580 COLOR 14,0:PRINT " SHIELDS DANGEROUSLY LOW"
1590 FOR I=1 TO 3:K(I,1)=0:K(I,2)=0:NEXT I
1600 FOR I=1 TO 3:K(I,3)=0:NEXT I:Q$=Z$+Z$+Z$+Z$+Z$+Z$+Z$+LEFT$(Z$,8)
1680 A$=CHR$(15):Z1=S1:Z2=S2:GOSUB 8670:IF K3<1 THEN 1820
1720 FOR I=1 TO K3:GOSUB 8590:A$=CHR$(18):Z1=R1:Z2=R2
1780 GOSUB 8670:K(I,1)=R1:K(I,2)=R2:K(I,3)=S9*(0.5+RND(I)):NEXT I
1820 IF B3<1 THEN 1910
1880 GOSUB 8590:A$=CHR$(233):Z1=R1:B4=R1:Z2=R2:B5=R2:GOSUB 8670
1910 FOR I=1 TO S3:GOSUB 8590:A$=CHR$(42):Z1=R1:Z2=R2:GOSUB 8670:NEXT I
1980 GOSUB 6430
1990 L=3:IF S+E>10 THEN  IF E>10 OR D(7)=0 THEN 2060
2020 PRINT :COLOR 4,0:PRINT "***FATAL ERROR*** YOU'VE JUST STRANDED YOUR SHIP IN "
2030 PRINT "SPACE ":PRINT " YOU HAVE INSUFFICIENT MANEUVERING ENERGY,";
2040 PRINT " AND SHIELD CONTROL ":PRINT " IS PRESENTLY INCAPABLE OF CROSS";
2050 PRINT "-CIRCUITING TO ENGINE ROOM!!":GOTO 6270
2060 LOCATE 1,1,1:COLOR 23,0:B$="   ":LINE INPUT " COMMAND?";B$:COLOR 7,0
2065 FOR II=1 TO 13:LOCATE II,1,1:PRINT SPC(39):NEXT II:LOCATE 1,1,1
2080 FOR I=1 TO 9 :IF LEFT$(B$,3)<>MID$(A1$,3*I-2,3) THEN 2160
2140 ON I GOTO 2300,1980,4000,4260,4700,5530,5690,7290,6270
2160 NEXT I:LOCATE 2,1,1:COLOR 2,0:PRINT " ENTER ONE OF THE FOLLOWING:"
2180 PRINT " NAV-TO SET COURSE "
2190 PRINT " SRS-FOR SHORT RANGE SENSOR SCAN"
2200 PRINT " LRS-FOR LONG RANGE SENSOR SCAN"
2210 PRINT " PHA-TO FIRE PHASERS "
2220 PRINT " TOR-TO FIRE PHOTON TORPEDOES"
2230 PRINT " SHE-TO RAISE OR LOWER SHIELDS"
2240 PRINT " DAM-FOR DAMAGE CONTROL REPORTS"
2250 PRINT " COM-TO CALL ON LIBRARY COMPUTER"
2260 PRINT " XXX-TO RESIGN YOUR COMMAND":GOTO 1990
2300 LOCATE 2,1,1:COLOR 7,0:INPUT " COURSE (0-9)";C1:IF C1=9 THEN C1=1
2310 IF C1>=1 AND C1<9 THEN  2350
2330 PRINT " LT.SULU REPORTS INCORRECT DATA!":GOTO 1990
2350 X$="8":IF D(1)<0 THEN  X$="0.2"
2360 PRINT " WARP FACTOR (0-";X$;")";:INPUT W1:IF D(1)<0 AND W1>0.2 THEN  2470
2380 IF W1>0 AND W1<=8 THEN 2490
2390 IF W1=0 THEN 1990
2420 PRINT " CHIEF ENGINEER SCOTT REPORTS THE ENGINES WON'T TAKE";
2430 PRINT " WARP ";W1;"!":GOTO 1990
2470 PRINT " WARP ENGINES ARE DAMAGED.MAXIMUM SPEED=WARP 0.2":GOTO 1990
2490 N=INT(W1*8+0.5):IF E-N>0 THEN  2590
2500 PRINT " ENGINEERING REPORTS-INSUFFICIENT ENERGY AVAILABLE";
2510 PRINT " FOR MANEUVERING AT WARP";W1;"!"
2530 IF S<N-E OR D(7)<0 THEN 1990
2550 PRINT " DEFLECTOR CONTROL ROOM ACKNOWLEDGES";S;" UNITS OF ENERGY";
2560 PRINT " PRESENTLY DEPLOYED TO SHIELDS."
2570 GOTO 1990
2590 FOR I=1 TO K3:IF K(I,3)=0 THEN 2700
2610 A$=" ":Z1=K(I,1):Z2=K(I,2):GOSUB 8670:GOSUB 8590
2660 K(I,1)=Z1:K(I,2)=Z2:A$=CHR$(18):GOSUB 8670
2700 NEXT I:GOSUB 6000:D1=0:D6=W1:IF W1=>1 THEN D6=1
2770 FOR I=1 TO 8:IF D(I)>=0 THEN 2880
2790 D(I)=D(I)+D6:IF D(I)>-0.1 AND D(I)<0 THEN D(I)=-0.1:GOTO 2880
2800 IF D(I)<0 THEN 2880
2810 IF D1<>1 THEN  D1=1:COLOR 14,0:PRINT " DAMAGE CONTROL REPORT: "
2840 PRINT TAB(8);:R1=I:GOSUB 8790:PRINT G2$;" REPAIR COMPLETED":GOSUB 9600
2880 NEXT I:GOSUB 9650:IF RND(I)>0.2 THEN 3070
2910 R1=FNR(1):IF RND(I)>=0.6 THEN 3000
2930 D(R1)=D(R1)-(RND(I)*5+1):COLOR 14,0:PRINT " DAMAGE CONTROL REPORT: ";
2960 GOSUB 8790:PRINT G2$;" DAMAGED":PRINT :GOSUB 9600:GOTO 3070
3000 D(R1)=D(R1)+RND(I)*3+1:PRINT " DAMAGE CONTROL REPORT:  ";
3030 GOSUB 8790:PRINT G2$;" STATE OF REPAIR IMPROVED":GOSUB 9600
3060 'BEGIN MOVING THE STARSHIP   10
3070 A$=" ":Z1=INT(S1):Z2=INT(S2):GOSUB 8670
3110 X1=C(INT(C1),1)+(C(INT(C1+1),1))*(C1-INT(C1)):X=S1:Y=S2
3140 X2=C(INT(C1),2)+(C(INT(C1+1),2))*(C1-INT(C1)):Q4=Q1:Q5=Q2
3170 FOR I=1 TO N:S1=S1+X1:S2=S2+X2:IF S1<1 OR S1>=9 OR S2<1 OR S2>=9 THEN 3500
3240 S8=INT(S1)*8+INT(S2)-8:IF MID$(Q$,S8,1)=" " THEN 3360
3320 S1=INT(S1-X1):S2=INT(S2-X2):PRINT " WARP ENGINES SHUT DOWN AT ";
3350 PRINT "SECTOR";S1;","S2;" DUE TO BAD NAVIGATION":GOTO 3370
3360 NEXT I:S1=INT(S1):S2=INT(S2)
3370 A$=CHR$(15):Z1=INT(S1):Z2=INT(S2):GOSUB 8670:GOSUB 3910:T8=1
3430 IF W1<1 THEN T8=0.1*INT(10*W1)
3450 T=T+T8:IF T>T0+T9 THEN 6220
3470 ' SEE IF DOCKED,THEN COMMAND
3480 GOTO 1980
3490 ' QUADRANT EXCEEDS LIMITS
3500 X=8*Q1+X+N*X1:Y=8*Q2+Y+N*X2:Q1=INT(X/8):Q2=INT(Y/8):S1=INT(X-Q1*8)
3550 S2=INT(Y-Q2*8):IF S1=0 THEN Q1=Q1-1:S1=8
3590 IF S2=0 THEN Q2=Q2-1:S2=8
3620 X5=0:IF Q1<1 THEN X5=1:Q1=1:S1=1
3670 IF Q1>8 THEN X5=1:Q1=8:S1=8
3710 IF Q2<1 THEN X5=1:Q2=1:S2=1
3750 IF Q2>8 THEN X5=1:Q2=8:S2=8
3790 IF X5=0 THEN 3860
3800 LOCATE 2,1,1:PRINT " LT.UHURA REPORTS MESSAGE FROM STARFLEET COMMAND:"
3810 PRINT " PERMISSION TO ATTEMPT CROSSING OF GALACTIC PERIMETER"
3820 PRINT " IS HEREBY *DENIED*.SHUT DOWN YOUR ENGINES"
3830 PRINT " CHIEF ENGINEER SCOTT REPORTS WARP ENGINES SHUT DOWN"
3840 PRINT " AT SECTOR";S1;",";S2;"OF QUADRANT";Q1;",";Q2
3850 IF T>T0+T9 THEN 6220
3860 IF 8*Q1+Q2=8*Q4+Q5 THEN 3370
3870 T=T+1:GOSUB 3910:GOTO 1320
3900 ' MANEUVER ENERGY S/R **
3910 E=E-N-10:IF E>0 THEN RETURN
3930 LOCATE 2,1,1:PRINT " SHIELD CONTROL SUPPLIES ENERGY TO COMPLETE THE MANEUVER"
3940 S=S+E:E=0:IF S<=0 THEN S=0
3980 RETURN
3990 ' LONG RANGE SENSOR SCAN CODE
4000 IF D(3)<0 THEN LOCATE 2,1,1:PRINT " LONG RANGE SENSORS INOPERABLE":GOTO 1990
4030 LOCATE 2,1,1:PRINT " LONG RANGE SCAN FOR QUADRANT";Q1;",";Q2
4040 LOCATE 3,1,1:COLOR 14,0:O1$=CHR$(213)+STRING$(15,205)+CHR$(184):PRINT " ";O1$
4060 FOR I=Q1-1 TO Q1+1:N(1)=-1:N(2)=-2:N(3)=-3:FOR J=Q2-1 TO Q2+1
4120 IF I>0 AND I<9 AND J>0 AND J<9 THEN N(J-Q2+2)=G(I,J):Z(I,J)=G(I,J)
4180 NEXT J:PRINT " ";:FOR L=1 TO 3:PRINT CHR$(179)+" ";:IF N(L)<0 THEN PRINT "***";:GOTO 4230
4210 PRINT RIGHT$(STR$(N(L)+1000),3);
4230 NEXT L:PRINT " "+ CHR$(179):PRINT " "+CHR$(198)+STRING$(15,205)+CHR$(181):NEXT I:GOTO 1990
4250 ' PHASER CONTROL
4260 LOCATE 2,1,1:IF D(4)<0 THEN PRINT " PHASERS INOPERATIVE":GOTO 1990
4265 IF K3>0 THEN 4330
4270 PRINT " SCIENCE OFFICER SPOCK REPORTS SENSORS SHOW NO ENEMY SHIPS IN THIS QUADRANT":GOTO 1990
4330 IF D(8)<0 THEN PRINT " COMPUTER FAILURE HAMPERS ACCURACY"
4350 PRINT " PHASERS LOCKED ON TARGET;  ";
4360 PRINT " ENERGY AVAILABLE=";E;"UNITS"
4370 INPUT " NUMBER OF UNITS TO FIRE";X:IF X<=0 THEN 1990
4400 IF E-X<0 THEN 4360
4405 FOR J=2 TO 6:FOR I=1 TO 2:PLAY "mbl64t255o=j;cc#dd#eff#gg#aa#b":NEXT I:NEXT J
4410 E=E-X:IF D(7)<0 THEN X=X*RND(X)
4450 H1=INT(X/K3):FOR I=1 TO 3:IF K(I,3)<=0 THEN 4670
4480 H=INT((H1/FND(0))*(RND(J)+2)):IF H>0.15*K(I,3) THEN 4530
4500 PRINT " SENSORS SHOW NO DAMAGE TO ENEMY AT";K(I,1);",";K(I,2):GOTO 4670
4530 K(I,3)=K(I,3)-H:PRINT H;"UNIT HIT ON KLINGON:SECTOR";K(I,1);",";K(I,2)
4550 IF K(I,3)<=0 THEN PRINT " ***KLINGON DESTROYED***":GOTO 4580
4560 PRINT " SENSORS SHOW";K(I,3);"UNITS REMAINING":GOTO 4670
4580 K3=K3-1:K9=K9-1:Z1=K(I,1):Z2=K(I,2):A$=" ":GOSUB 8670
4650 K(I,3)=0:G(Q1,Q2)=G(Q1,Q2)-100:Z(Q1,Q2)=G(Q1,Q2):IF K9<=0 THEN 6370
4670 NEXT I:GOSUB 6000:GOSUB 6430:GOTO 1990
4690 ' PHOTON TORPEDO FIRING
4700 IF P<=0 THEN LOCATE 2,1,1:COLOR 7,0:PRINT " ALL PHOTON TORPEDOES EXPENDED":GOTO 1990
4730 IF D(5)<0 THEN LOCATE 2,1,1:COLOR 7,0:PRINT " PHOTON TUBES ARE NOT OPERATIONAL":GOTO 1990
4760 LOCATE 2,1,1:COLOR 7,0:INPUT " PHOTON TORPEDO COURSE (1-9)";C1:IF C1=9 THEN C1=1
4780 IF C1>=1 AND C1<9 THEN 4830
4790 PRINT " ENSIGN CHEKOV REPORTS INCORRECT COURSE DATA!"
4800 GOTO 1990
4830 GOTO 4850:IF C1>8 THEN C1=C1-8
4850 X1=C(INT(C1),1)+(C(INT(C1+1),1)-C(INT(C1),1))*(C1-INT(C1)):E=E-2:P=P-1
4860 X2=C(INT(C1),2)+(C(INT(C1+1),2)-C(INT(C1),2))*(C1-INT(C1)):X=S1:Y=S2
4870 TP1=0
4910 PRINT " TORPEDO TRACK:"
4915 TP=0
4920 X=X+X1:Y=Y+X2:X3=INT(ABS(X)+0.5):Y3=INT(Y+0.5):PLAY "MBO2BA"
4950 IF TP=0 THEN XT=X3:YT=Y3:TP=1
4960 IF X3<1 OR X3>8 OR Y3<1 OR Y3>8 THEN IF TP1=1 THEN Z1=XT:Z2=YT:A$=" ":GOSUB 8670:LOCATE 3,1,1:GOTO 5490 ELSE 5490
5000 A$=" ":Z1=X:Z2=Y:GOSUB 8830
5010 TP1=1
5050 IF Z3<>0 THEN A$=" ":Z1=XT:Z2=YT:GOSUB 8670:A$=CHR$(248):TP=2:Z1=X3:Z2=Y3:GOSUB 8670:XT=X3:YT=Y3:GOSUB 6430:GOTO 4920
5055 LOCATE 3,1,1:IF TP=2 THEN A$=" ":Z1=XT:Z2=YT:GOSUB 8670
5060 A$=CHR$(18):Z1=X:Z2=Y:GOSUB 8830:IF Z3=0 THEN 5210
5110 PRINT " ***KLINGON DESTROYED***":K3=K3-1:K9=K9-1:IF K9<=0 THEN 6370
5150 FOR I=1 TO 3:IF X3=K(I,1) AND Y3=K(I,2) THEN 5190
5180 NEXT I:I=3
5190 K(I,3)=0:GOTO 5430
5210 A$="*":Z1=X:Z2=Y:GOSUB 8830:IF Z3=0 THEN 5280
5260 PRINT " STAR AT";X3;",";Y3;"ABSORBED TORPEDO ENERGY":GOSUB 6000:GOTO 1990
5280 A$=CHR$(233):Z1=X:Z2=Y:GOSUB 8830:IF Z3=0 THEN 4760
5330 PRINT " ***STARBASE DETROYED***":B3=B3-1:B9=B9-1
5360 IF B9>0 OR K9>T-T0-T9 THEN 5400
5380 PRINT " AND SENTENCED TO 99 STARDATES HARD LABOUR ON CYGNUS 12!!"
5390 GOTO 6270
5400 LOCATE 2,1,1:COLOR 14,0:PRINT " STARFLEET COMMAND REVIEWING YOUR RECORD TO CONSIDER"
5410 PRINT " COURT MARTIAL!":D0=0
5430 Z1=X:Z2=Y:A$=" ":GOSUB 8670:GOSUB 6430
5435 Z1=X:Z2=Y:A$=" ":GOSUB 8670:GOSUB 6430
5470 G(Q1,Q2)=K3*100+B3*10+S3:Z(Q1,Q2)=G(Q1,Q2):GOSUB 6000:GOTO 1990
5490 PRINT " TORPEDO MISSED":GOSUB 6000:GOTO 1990
5520 ' SHIELD CONTROL
5530 IF D(7)<0 THEN LOCATE 2,1,1:PRINT " SHIELD CONTROL INOPERABLE":GOTO 1990
5560 LOCATE 2,1,1:PRINT " ENERGY AVAILABLE=";E+S:INPUT " NUMBER OF UNITS TO SHIELDS";X
5580 IF X<0 OR S=X THEN PRINT " <SHIELDS UNCHANGED>":GOTO 1990
5590 IF X<=E+S THEN 5630
5600 PRINT " THIS IS NOT THE FEDERATION TREASURY"
5610 PRINT " <SHIELDS UNCHANGED>":GOTO 1990
5630 E=E+S-X:S=X:PRINT " DEFLECTOR CONTROL REPORT:"
5660 PRINT " SHIELDS NOW AT";INT(S);"UNITS":GOTO 1990
5680 'DAMAGE CONTROL
5690 IF D(6)>=0 THEN 5910
5700 LOCATE 2,1,1:PRINT " DAMAGE CONTROL REPORT NOT AVAILABLE":IF D0=0 THEN 1990
5720 D3=0:FOR I=1 TO 8:IF D(I)<0 THEN D3=D3+0.1
5760 NEXT I:IF D3=0 THEN 1990
5780 LOCATE 2,1,1:PRINT :D3=D3+D4:IF D3>=1 THEN D3=0.9
5810 PRINT " TECHNICIANS STANDING BY TO REPAIR YOUR SHIP"
5820 PRINT " ESTIMATED REPAIR TIME:";0.01*INT(100*D3);"STARDATES"
5830 INPUT " WILL YOU AUTORIZE REPAIR ORDER(Y/N)";A$
5860 IF A$<>"Y" THEN 1990
5865 FOR JC=1 TO 6:LOCATE JC,1,1:PRINT SPC(39):NEXT JC
5870 FOR I=1 TO 8:IF D(I)<0 THEN D(I)=0
5890 NEXT I:T=T+D3+0.1:L=4
5895 GOTO 5912
5910 IF D0=0 THEN 5912 ELSE 5720
5912 LOCATE L,1,1:COLOR 14,0:PRINT " DEVICE         STATE OF REPAIR":FOR R1=1 TO 8
5915 S$=SPACE$(39)
5920 GOSUB 8790:PRINT G2$;LEFT$(S$,25-LEN(G2$));INT(D(R1)*100)*0.01
5950 NEXT R1
5980 GOTO 1990
5990 ' KLINGONS SHOOTING
6000 IF K3<=0 THEN  RETURN
6010 IF D0<>0 THEN PRINT " STARBASE SHIELDS PROTECT THE ENTERPRISE":RETURN
6040 FOR I=1 TO 3:IF K(I,3)<=0 THEN 6200
6060 H=INT((K(I,3)/FND(1))*(2+RND(I))):S=S-H:K(I,3)=K(I,3)/(3+RND(J))
6080 COLOR 4,0:PRINT H;" UNIT HIT FROM SECTOR";K(I,1);",";K(I,2):COLOR 7,0
6090 IF S<=0 THEN 6240
6100 PRINT " <SHIELDS DOWN TO";S;"UNITS>":IF H<20 THEN 6200
6120 IF RND(I)>0.6 OR H/S<=0.02 THEN 6200
6140 R1=FNR(1):D(R1)=D(R1)-H/S-0.5*RND(I):GOSUB 8790
6170 COLOR 14,0:PRINT " DAMAGE CONTROL REPORTS:";G2$;" DAMAGED BY HIT":GOSUB 9600
6200 NEXT I:RETURN
6210 ' END OF GAME
6220 CLS:LOCATE 1,1,1
6230 COLOR 14,0:PRINT " IT IS STARDATE";T:GOTO 6270
6240 CLS:LOCATE 1,1,1:PRINT " THE ENTERPRISE HAS BEEN DESTROYED. THE FEDERATION WILL BE CONQUERED":GOTO 6230
6270 PRINT " THERE WERE";K9;"KLINGON BATTLE CRUISERS LEFT AT THE END OF YOUR MISSION"
6290 PRINT :PRINT :IF B9=0 THEN 6360
6310 PRINT " THE FEDERATION IS IN NEED OF A NEW STARSHIP COMMANDER"
6320 PRINT " FOR A SIMILAR MISSION--IF THERE IS A VOLUNTEER,"
6330 LINE INPUT "LET HIM STEP FORWARD AND ENTER 'AYE'";A$:IF A$="AYE" THEN 105
6360 END
6370 CLS:LOCATE 1,1,1:COLOR 0,9:PRINT " CONGRATULATIONS CAPTAIN! THE LAST KLINGON BATTLE CRUISER MENACING THE FEDERATION HAS BEEN DESTROYED":PRINT
6400 PRINT " YOUR EFFICIENCY RATING IS";1000*(K7/(T-T0))^2:GOTO 6290
6420 ' SHORT RANGE SCAN AND STARTUP
6430 FOR I=S1-1 TO S1+1:FOR J=S2-1 TO S2+1
6450 IF INT(I+0.5)<1 OR INT(I+0.5)>8 OR INT(J+0.5)<1 OR INT(J+0.5)>8 THEN 6540
6490 A$=CHR$(233):Z1=I:Z2=J:GOSUB 8830:IF Z3=1 THEN 6580
6540 NEXT J:NEXT I:D0=0:GOTO 6650
6580 D0=1:COL=7:C$="DOCKED":E=E0:P=P0
6620 PRINT "SHIELDS DROPPED FOR DOCKING PURPOSES":S=0:GOTO 6720
6650 IF K3>0 THEN C$="*RED*":COL=20:GOTO 6720
6660 C$="GREEN":COL=2:IF E<E0*0.1 THEN C$="YELLOW":COL=14
6720 IF D(2)>=0 THEN 6770
6730 LOCATE 14,1,0 :PRINT " ***SHORT RANGE SCANNERS ARE OUT***":RETURN
6770 O1$=" "+CHR$(213)+STRING$(16,205)+CHR$(184):LOCATE 14,1,0:COLOR 2,0:PRINT O1$+STRING$(14,32):FOR I=1 TO 8
6780 PRINT " "+CHR$(179);
6820 FOR J=(I-1)*8+1 TO (I-1)*8+8:PRINT " ";MID$(Q$,J,1);:NEXT J
6830 ON I GOTO 6850,6900,6960,7020,7070,7120,7180,7240
6850 PRINT CHR$(179)+" STARDATE   ";INT(T*10)*0.1:GOTO 7260
6900 PRINT CHR$(179)+" CONDITION    ";:COLOR COL,0:PRINT C$:COLOR 2,0:GOTO 7260
6960 PRINT CHR$(179)+" QUADRANT    ";Q1;",";Q2:GOTO 7260
7020 PRINT CHR$(179)+" SECTOR      ";S1;",";S2:GOTO 7260
7070 PRINT CHR$(179)+" TORPEDOES    ";INT(P):GOTO 7260
7120 PRINT CHR$(179)+" TOTAL ENERGY ";INT(E+S):GOTO 7260
7180 PRINT CHR$(179)+" SHIELDS      ";INT(S):GOTO 7260
7240 PRINT CHR$(179)+" KLINGONS LEFT";INT(K9)
7260 NEXT I:O2$=" "+CHR$(212)+STRING$(16,205)+CHR$(190):PRINT O2$:LOCATE 2,1,1:RETURN
7280 ' LIBRARY COMPUTER
7290 IF D(8)<0 THEN LOCATE 2,1,1:COLOR 14,0:PRINT " COMPUTER DISABLED":GOTO 1990
7310 CLS
7320 L=8:LOCATE 2,1,1:COLOR 14,0:INPUT " COMPUTER ACTIVE - AWAITING COMMAND";A:IF A<0 THEN COLOR 2,0:CLS:GOTO 1990
7345 IF A>5 THEN 7360
7350 LOCATE 2,1,1:COLOR 2,0:H8=1:ON A+1 GOTO 7540,7900,8070,8500,8150,7400
7360 PRINT " FUNCTIONS AVAILABLE FROM LIBRARY COMPUTER:"
7370 PRINT "    0=CUMULATIVE GALACTIC RECORD"
7372 PRINT "    1=STATUS REPORT"
7374 PRINT "    2=PHOTON TORPEDO DATA"
7376 PRINT "    3=STARBASE NAV DATA"
7378 PRINT "    4=DIRECTION/DISTANCE CALCULATOR"
7380 PRINT "    5=GALAXY REGION NAME MAP":GOTO 7320
7390 'SET UP TO CHANGE GAL RECORD TO MAP
7400 CLS:H8=0:G5=1:LOCATE 1,1,1:PRINT "       THE GALAXY:GOTO 7550
7530 ' CUM GALACTIC RECORD
7540 PRINT " IF YOU WANT HARD COPY USE PrtSc KEY"
7543 CLS
7544 LOCATE 2,1,1:PRINT " RECORD FOR GALACTIC QUADRANT";Q1;",";Q2
7546 PRINT
7550 PRINT "   1   2   3   4   5   6   7   8 "
7560 O1$=STRING$(34,205)
7570 PRINT O1$:FOR I=1 TO 8:PRINT USING "#";I;:IF H8=0 THEN 7740
7630 FOR J=1 TO 8:PRINT CHR$(179);:IF Z(I,J)=0 THEN PRINT "***";:GOTO 7720
7700 PRINT RIGHT$(STR$(Z(I,J)+1000),3);
7720 NEXT J:GOTO 7850
7740 Z4=I:Z5=1:GOSUB 9030:J0=INT(10-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
7800 Z5=5:GOSUB 9030:J0=INT(26-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
7850 PRINT O1$:NEXT I:GOTO 1990
7890 'STATUS REPORT
7900 CLS:LOCATE 2,1,1:PRINT "   STATUS REPORT:":X$="":IF K9>1 THEN X$="S"
7940 PRINT :PRINT " KLINGON";X$;" LEFT: ";K9
7960 PRINT " MISSION COMPLETION IN";:PRINT USING "###";0.1*INT((T0+T9-T)*10);:PRINT " STARDATES"
7970 X$="S":IF B9<2 THEN X$="":IF B9<1 THEN 8010
7980 PRINT " THERE ARE";B9;"STARBASE";X$
7990 GOTO 5690
8010 PRINT " YOUR STUPIDITY HAS LEFT YOU ALONE IN THE GALAXY--YOU HAVE NO STARBASES LEFT":GOTO 5690
8060 ' TOPEDOE,BASE NAV,D/D CALCULATOR
8070 IF K3<=0 THEN 4270
8080 X$="":IF K3>1 THEN X$="S"
8090 LOCATE 3,1,1:PRINT " FROM ENTERPRISE TO KLINGON CRUISER";X$;": "
8100 H8=0:FOR I=1 TO 3:IF K(I,3)<=0 THEN 8480
8110 W1=K(1,1):X=K(I,2)
8120 C1=S1:A=S2:GOTO 8220
8150 LOCATE 3,1,1:PRINT " DIRECTION DISTANCE CALCULATOR:"
8160 PRINT " LOCATION:QUADRANT";Q1;",";Q2;"SECTOR";S1;",";S2
8170 PRINT " PLEASE ENTER":INPUT " INITIAL COORDINATES(X,Y):";C1,A
8200 INPUT " FINAL COORDINATES(X,Y):";W1,X
8220 X=X-A:A=C1-W1:IF X<0 THEN 8350
8250 IF A<0 THEN 8410
8260 IF X>0 THEN 8280
8270 IF A=0 THEN  C1=5:GOTO 8290
8280 C1=1
8290 IF ABS(A)<=ABS(X) THEN 8330
8310 PRINT " DIRECTION=";C1+(((ABS(A)-ABS(X))+ABS(A))/ABS(A)):GOTO 8460
8330 PRINT " DIRECTION=";C1+(ABS(A)/ABS(X)):GOTO 8460                          LIST 8310
8350 IF A>0 THEN C1=3:GOTO 8420
8360 IF X<>0 THEN C1=5:GOTO 8290
8410 C1=7
8420 IF ABS(A)>=ABS(X) THEN 8450
8430 PRINT " DIRECTION=";C1+(((ABS(X)-ABS(A))+ABS(X))/ABS(X)):GOTO 8460
8450 PRINT " DIRECTION=";C1+(ABS(X)/ABS(A)):GOTO 8460                          LIST 8310
8460 PRINT " DISTANCE=";SQR(X^2+A^2):IF H8=1 THEN 1990
8480 NEXT I:GOTO 1990
8500 IF B3<>0 THEN LOCATE 3,1,1:PRINT " FROM ENTERPRISE TO STARBASE:":W1=B4:X=B5:GOTO 8120
8510 LOCATE 2,1,1:PRINT " MR SPOCK REPORTS-SENSORS SHOW NO STARBASES IN THIS QUADRANT":GOTO 1990
8590 R1=FNR(1):R2=FNR(2):A$=" ":Z1=R1:Z2=R2:GOSUB 8830:IF Z3=0 THEN 8590
8600 RETURN
8670 S8=INT(Z2-0.5)+INT(Z1-0.5)*8+1
8675 IF LEN(A$)<>1 THEN PRINT "ERROR 8675 ":STOP
8680 IF S8=1 THEN Q$=A$+RIGHT$(Q$,63):RETURN
8690 IF S8=64 THEN Q$=LEFT$(Q$,63)+A$:RETURN
8700 Q$=LEFT$(Q$,S8-1)+A$+RIGHT$(Q$,64-S8):RETURN
8790 ON R1 GOTO 8792,8794,8796,8798,8800,8802,8804,8806
8792 G2$="WARP ENGINES":RETURN
8794 G2$="SHORT RANGE SENSORS":RETURN
8796 G2$="LONG RANGE SENSORS":RETURN
8798 G2$="PHASER CONTROL":RETURN
8800 G2$="PHOTON TUBES":RETURN
8802 G2$="DAMAGE CONTROL":RETURN
8804 G2$="SHIELD CONTROL":RETURN
8806 G2$="LIBRARY COMPUTER":RETURN
8830 Z1=INT(Z1+0.5):Z2=INT(Z2+0.5):S8=(Z2-1)+(Z1-1)*8+1:Z3=0
8890 IF MID$(Q$,S8,1)<>A$ THEN RETURN
8900 Z3=1:RETURN
9030 IF Z5=<4 THEN  ON Z4 GOTO 9040,9050,9060,9070,9080,9090,9100,9110
9035 GOTO 9120
9040 G2$="ANTARES":GOTO 9210
9050 G2$="RIGEL":GOTO 9210
9060 G2$="PROCYON":GOTO 9210
9070 G2$="VEGA":GOTO 9210
9080 G2$="CANOPUS":GOTO 9210
9090 G2$="ALTAIR":GOTO 9210
9100 G2$="SAGITARIUS":GOTO 9210
9110 G2$="POLLUX":GOTO 9210
9120 ON Z4 GOTO 9130,9140,9150,9160,9170,9180,9190,9200
9130 G2$="SIRIUS":GOTO 9210
9140 G2$="DENEB":GOTO 9210
9150 G2$="CAPELLA":GOTO 9210
9160 G2$="BETELGEUSE":GOTO 9210
9170 G2$="ALDEBARAN":GOTO 9210
9180 G2$="REGULUS":GOTO 9210
9190 G2$="ARCTURUS":GOTO 9210
9200 G2$="SPICA":GOTO 9210
9210 IF G5<>1 THEN ON Z5 GOTO 9230,9240,9250,9260,9230,9240,9250,9260
9220 RETURN
9230 G2$=G2$+" I":RETURN
9240 G2$=G2$+" II":RETURN
9250 G2$=G2$+" III":RETURN
9260 G2$=G2$+" IV":RETURN
9600 FOR JP=1 TO 6:PLAY "mfl64t120o1;cc#dd#eff#gg#aa#b":NEXT JP:RETURN
9650 FOR JP=40 TO 200 STEP 5:SOUND JP,2:NEXT JP:RETURN
```

## ZOOSORT.BAS

```bas
60 GOTO 75
70 LOCATE RN%,CN%:PRINT "                                       ";:RETURN
72 RETURN
75 DIM LOOPS%(100)
76 X=0: Y=0
78 AUTOFLAG%=0:A=0
80 DIM X$(1),TYPE$(4),COMMAND$(1),DIMFLAG%(1),ATIMOUT%(1),NAMEE$(10):X$="":TYPE$="":COMMAND$="":DIMFLAG%=0:ATIMOUT%=0:C=0: NAMEE$="":DIM SWAPF%(1): RN%=0: CN%=0
85 X=0:Y=0:PI=0:Z=0:COUNTER=0:COUNTER0=0:COUNTER1=0:COUNTER2=0:COUNTER3=0:COUNTER4=0:COUNTER5=0:COUNTER6=0:A=0:WRONG5=0:WRONG4=0:WRONG3=0:WRONG2=0:WRONG=0:WRONG6=0:LIMIT=0
86 COMMAND$="":NAMEE$="":COUNTER2=0:AUTOFLAG%=0:I=0:LIMIT=0:A=0:DIM SNAM$(10):SNAM$=""
90 RANDM$="12345678":RAND2$="12":RANDT%=0:RANDN%=0: X$="": RUNSW%=0: PRSW%=0
99 DIM PP%(5,9), PW%(5), PX%(5), PY%(5)
100 DIM K1(185),K2(185),K3(185),K4(185),K5(185),G1(185),G2(185),G3(185),G4(185),G5(185),R1(185),R2(185),R3(185),R4(185),R5(185)
120 DIM E1(205),E2(205),E3(205)
140 DIM S1(300),S2(300),S3(300),S4(300),S5(300),S6(300),S7(300),H1(185),H2(185),B1(40)
155 I=0:I1=0:I2=0:I3=0:I4=0:I5=0:I6=0:DIM I99(1): I99=0
160 FRAMEX%=14:FRAMEY%=51:LEFTX%=0:LEFTY%=0
180 SCALE1X%=25:SCALE1Y%=34:SCALE2X%=28:SCALE2Y%=38:SCALE3X%=26:SCALE3Y%=38:SCALE4Y%=42:SCALE5Y%=40:BLANKX%=2:BLANKY%=34
200 K1%=0:K2%=0:K3%=0:K4%=0:K5%=0
220 G1%=0:G2%=0:G3%=0:G4%=0:G5%=0
226 FOR I=1 TO 5: FOR I1=1 TO 9: PPX(I,I1)=0:NEXT I1: NEXT I
231 PW%(1)=0:PW%(2)=0:PW%(3)=0:PW%(4)=0:PW%(5)=0
232 PX%(1)=0:PX%(2)=0:PX%(3)=0:PX%(4)=0:PX%(5)=0
233 PY%(1)=0:PY%(2)=0:PY%(3)=0:PY%(4)=0:PY%(5)=0
240 R1%=0:R2%=0:R3%=0:R4%=0:R5%=0
260 S1%=0:S2%=0:S3%=0:S4%=0:S5%=0:S6%=0:S7%=0
280 H1%=0:H2%=0
300 B1%=0: LFX%=0: LFY%=0: SWAPF%=0
320 E1%=0:E2%=0:E3%=0
360 FLIP=0:SWAPF%=0:CN%=0:RN%=0
380 K1%=VARPTR(K1(0)):K2%=VARPTR(K2(0)):K3%=VARPTR(K3(0)):K4%=VARPTR(K4(0)):K5%=VARPTR(K5(0))
400 H1%=VARPTR(H1(0)):H2%=VARPTR(H2(0))
420 E1%=VARPTR(E1(0)):E2%=VARPTR(E2(0)):E3%=VARPTR(E3(0))
440 G1%=VARPTR(G1(0)):G2%=VARPTR(G2(0)):G3%=VARPTR(G3(0)):G4%=VARPTR(G4(0)):G5%=VARPTR(G5(0))
460 R1%=VARPTR(R1(0)):R2%=VARPTR(R2(0)):R3%=VARPTR(R3(0)):R4%=VARPTR(R4(0)):R5%=VARPTR(R5(0))
480 S1%=VARPTR(S1(0)):S2%=VARPTR(S2(0)):S3%=VARPTR(S3(0)):S4%=VARPTR(S4(0)):S5%=VARPTR(S5(0)):S6%=VARPTR(S6(0)):S7%=VARPTR(S7(0))
500 B1%=VARPTR(B1(0))
520 DEF SEG=&H1FF4:BLOAD"flip.mem",0:DEF SEG=&H1FFF:BLOAD"flipd.mem",0
540 DEF SEG
560 BLOAD"k1",K1%:BLOAD"k2",K2%:BLOAD"k3",K3%:BLOAD"k4",K4%:BLOAD"k5",K5%
580 BLOAD"g1",G1%:BLOAD"g2",G2%:BLOAD"g3",G3%:BLOAD"g4",G4%:BLOAD"g5",G5%
600 BLOAD"r1",R1%:BLOAD"r2",R2%:BLOAD"r3",R3%:BLOAD"r4",R4%:BLOAD"r5",R5%
620 BLOAD"e1",E1%:BLOAD"e2",E2%:BLOAD"e3",E3%
640 BLOAD"s1",S1%:BLOAD"s2",S2%:BLOAD"s3",S3%:BLOAD"s4",S4%:BLOAD"s5",S5%:BLOAD"s6",S6%:BLOAD"s7",S7%
660 BLOAD"h1",H1%:BLOAD"h2",H2%
680 BLOAD"b1",B1%
2020 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE  ,,1,6,7
2080 GOSUB 22900
2520 'LOCATE 23,1,0:PRINT "Please standby for a few seconds...";
2680 GOSUB 9800 : '    TO INITALIZE
2700 CLS
2710 SCREEN 1,0: COLOR 0,0: GOSUB 27500
2720 GOSUB 11040 : '    TO ACCEPT NAME
2740 GOSUB 9540 : '    INSTRUCTIONS
2760 GOSUB 3000  : '    FIRST COMMAND
2780 GOSUB 9540 : '    INSTRUCTIONS
2800 GOSUB 3860  : '    SECOND COMMAND
2820 GOSUB 9540 : '    INSTRUCTIONS
2840 GOSUB 4720  : '    THIRD COMMAND
2860 GOSUB 9540 : '    INSTRUCTIONS
2880 GOSUB 5640  : '    FOURTH COMMAND
2900 GOSUB 9540 : '    INSTRUCTIONS
2920 GOSUB 6580  : '    FIFTH COMMAND
2940 GOSUB 9540 : '    INSTRUCTIONS
2960 GOSUB 8300  : '    SIXTH COMMAND
2980 END
3000 '
3020 '    TO ACCEPT FIRST COMMAND AND
3040 '    MAKE SURE IT IS THE CORRECT
3060 '    ONE.  PROMPTS WILL BE DISPLAYED
3080 '    TO HELP THE USER.
3100 GOSUB 28000
3101 LIMIT=60000.
3120 LOCATE 23,6 : PRINT "WHAT INSTRUCTION WOULD YOU LIKE";
3140 LOCATE 24,6 : PRINT "THE COMPUTER TO PERFORM FIRST?";
3160 LOCATE 25,6 : PRINT "PRESS A NUMBER (1 THROUGH 7).";
3180 ATIMOUT%=0
3200 COMMAND$=INKEY$ : IF COMMAND$="" THEN 3200
3220 IF (VAL(COMMAND$)=3) OR (VAL(COMMAND$)=5) THEN 3300
3240 WRONG=WRONG+1
3260 IF WRONG=1 THEN GOSUB 28000:LOCATE 23,1:PRINT "JUST TO KEEP THINGS SIMPLE, LET'S BEGIN";:LOCATE 24,1:PRINT "WITH THE ANIMALS AT THE LEFT. PLEASE";:LOCATE 25,1:PRINT "CHOOSE ANOTHER INSTRUCTION.";:GOTO 3200
3280 IF WRONG>=2 THEN GOSUB 28000:LOCATE 23,1:PRINT "PLEASE BEGIN YOUR PROGRAM WITH AN";:LOCATE 24,1:PRINT "INSTRUCTION THAT POSITIONS THE SCALE";:LOCATE 25,1:PRINT "ALL THE WAY TO THE LEFT.";:GOTO 3200
3300 IF VAL(COMMAND$)=3 THEN 3420
3340 GOSUB 28000
3360 LOCATE 24,1 : PRINT "IT WOULDN'T MAKE SENSE TO STOP SINCE WE";
3380 LOCATE 25,1 : PRINT "HAVEN'T EVEN STARTED YET.  TRY AGAIN.  ";
3400 GOTO 3200
3420 '           COLOR STATEMENT
3440 GOSUB 28100
3480 LOCATE 16,1 : PRINT "VERY GOOD. HERE IS THE FIRST INSTRUCTION";
3500 LOCATE 17,1 : PRINT "IN YOUR PROGRAM.";
3540 LOCATE 18,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
3560 LOCATE 19,1 : PRINT "  (A) MOVE SCALE ALL THE WAY LEFT";
3600 LOCATE 21,1 : PRINT "NOTICE WE GAVE YOUR FIRST INSTRUCTION";
3620 LOCATE 22,1 : PRINT "A NAME, (A).";
3640 LOCATE 23,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO";
3660 LOCATE 24,1 : PRINT "PERFORM IT, PRESS THE SPACE BAR";
3700 X$=INKEY$ : IF X$<>"" THEN 3780
3720 COUNTER1=COUNTER1+1
3740 IF COUNTER1=LIMIT THEN 2080
3760 GOTO 3700
3780 COUNTER1=0
3800 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 3700
3820 GOSUB 27600
3840 RETURN
3860 '
3880 '  TO ACCEPT SECOND COMMAND AND
3900 '  VERIFY IT.
3920 GOSUB 28000
3940 LOCATE 23,6 : PRINT "WHAT INSTRUCTION WOULD YOU LIKE";
3960 LOCATE 24,6 : PRINT "THE COMPUTER TO PERFORM NEXT?";
3980 LOCATE 25,6 : PRINT "PRESS A NUMBER (1 THROUGH 7).";
4020 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 4080
4040 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
4060 GOTO 4020
4080 COUNTER2=0
4100 IF (VAL(COMMAND$)=2) OR (VAL(COMMAND$)=3) THEN 4200
4110 GOSUB 28000
4120 LOCATE 23,1 : PRINT "WE SHOULD FIND OUT WHICH OF THE FIRST";
4140 LOCATE 24,1 : PRINT "TWO ANIMALS IS THE HEAVIER. WHICH IN";
4160 LOCATE 25,1 : PRINT "STRUCTION WILL DO THAT? ENTER SELECTION";
4180 GOTO 4020
4200 IF VAL(COMMAND$)=2 THEN 4300
4220 GOSUB 28000
4240 LOCATE 24,1 : PRINT "WE ALREADY DID THAT. TRY AGAIN. PRESS A";
4260 LOCATE 25,1 : PRINT "NUMBER (1 THROUGH 7).";
4280 GOTO 4020
4300 GOSUB 28100
4340 LOCATE 16,1 : PRINT "O.K. NOW YOUR PROGRAM LOOKS LIKE THIS. ";
4380 LOCATE 17,9 : PRINT NAMEE$;" ZOO SORT PROGRAM";
4400 LOCATE 18,1 : PRINT "(A) MOVE SCALE all the way left";
4420 LOCATE 19,5 : PRINT "COMPARE";
4460 LOCATE 21,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO ";
4480 LOCATE 22,1 : PRINT "PERFORM YOUR SECOND INSTRUCTION, PRESS ";
4500 LOCATE 23,1 : PRINT "THE SPACE BAR.";
4560 X$=INKEY$ : IF X$<>"" THEN 4640
4580 COUNTER2=COUNTER2+1
4600 IF COUNTER2=LIMIT THEN GOTO 2080
4620 GOTO 4560
4640 COUNTER2=0
4660 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 4560
4680 GOSUB 27700 :FOR I=1 TO 750 : NEXT I
4700 RETURN
4720 '
4740 '          TO ACCEPT THIRD COMMAND
4760 '          AND VERFIY IT.
4780 GOSUB 28000
4800 LOCATE 23,1 : PRINT "NOW THAT YOU KNOW THAT THE LEFT ANIMAL";
4820 LOCATE 24,1 : PRINT "IS HEAVY, WHAT INSTRUCTION WOULD YOU";
4840 LOCATE 25,1 : PRINT "LIKE THE COMPUTER TO PERFORM NEXT?";
4860 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 4940
4880 COUNTER3=COUNTER3+1
4900 IF COUNTER3=LIMIT THEN 2080
4920 GOTO 4860
4940 COUNTER3=0
4960 IF VAL(COMMAND$)=4 THEN 5220
4980 WRONG3=WRONG3+1
5000 A= WRONG3 MOD 2
5010 GOSUB 28000
5020 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
5040 IF TYPE$="EVEN" THEN 5140
5060 LOCATE 23,1 : PRINT "REMEMBER, WE WANT THE HEAVY ANIMALS TO ";
5080 LOCATE 24,1 : PRINT "END UP ON THE RIGHT.  TRY AGAIN.       ";
5120 GOTO 5180
5140 LOCATE 23,1 : PRINT "SINCE YOU WANT HEAVY ANIMALS TO MOVE TO";
5160 LOCATE 24,1 : PRINT "THE RIGHT, MAYBE YOU SHOULD TRY A SWAP.";
5180 LOCATE 25,1 : PRINT "PRESS A NUMBER (1 THROUGH 7).";
5200 GOTO 4860
5220 WRONG3=0
5240 GOSUB 28100
5280 LOCATE 16,1 : PRINT "GOOD. NOW YOUR PROGRAM LOOKS LIKE THIS:";
5300 LOCATE 17,9 : PRINT NAMEE$;" ZOO SORT PROGRAM";
5320 LOCATE 18,1 : PRINT "(A) MOVE SCALE ALL THE WAY LEFT        ";
5340 LOCATE 19,1 : PRINT "    COMPARE                            ";
5360 LOCATE 20,1 : PRINT "    IF LEFT HEAVY-SWAP & TURN ON 'FLAG'";
5380 RN%=21:CN%=1:GOSUB 70
5400 LOCATE 22,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO ";
5420 LOCATE 23,1 : PRINT "PERFORM YOUR NEXT INSTRUCTION, PRESS   ";
5440 LOCATE 24,1 : PRINT "THE SPACE BAR.                         ";
5460 RN%=25:CN%=1:GOSUB 70
5480 X$=INKEY$ : IF X$<>"" THEN 5560
5500 COUNTER3=COUNTER3+1
5520 IF COUNTER3=LIMIT THEN 2080
5540 GOTO 5480
5560 COUNTER3=0
5580 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 5480
5600 GOSUB 27800 :FOR I=1 TO 750 : NEXT I
5620 RETURN
5640 '
5660 '  ACCEPT FOURTH COMMAND AND VERIFY IT
5700 '
5720 LOCATE 23,1 : PRINT "NOW THAT THE FIRST TWO ANIMALS HAVE    ";
5740 LOCATE 24,1 : PRINT "BEEN COMPARED, WHAT WOULD YOU HAVE THE ";
5760 LOCATE 25,1 : PRINT "COMPUTER DO NEXT? ENTER SELECTION.     ";
5780 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 5860
5800 COUNTER4=COUNTER4+1
5820 IF COUNTER4=LIMIT THEN 2080 :'MENU
5840 GOTO 5780
5860 COUNTER4=0
5880 IF VAL(COMMAND$)=1 THEN 6140
5900 WRONG4=WRONG4+1
5920 A=WRONG4 MOD 2
5930 GOSUB 28000
5940 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
5960 IF TYPE$="EVEN" THEN 6060
5980 LOCATE 23,1 : PRINT "SINCE WE HAVE FINISHED WEIGHING THE    ";
6000 LOCATE 24,1 : PRINT "FIRST TWO ANIMALS, YOU SHOULD NOW MOVE ";
6020 LOCATE 25,1 : PRINT "THE SCALE. TRY AGAIN. ENTER SELECTION  ";
6040 GOTO 5780
6060 LOCATE 23,1 : PRINT "YOU SHOULD INSTRUCT THE COMPUTER TO";
6080 LOCATE 24,1 : PRINT "MOVE THE SCALE SO WE CAN WEIGH THE NEXT";
6100 LOCATE 25,1 : PRINT "OF ANIMALS. TRY AGAIN.";
6120 GOTO 5780
6140 WRONG4=0
6160 GOSUB 28100
6180 LOCATE 15,1 : PRINT "NOW YOUR PROGRAM LOOKS LIKE THIS:";
6220 LOCATE 16,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
6240 LOCATE 17,1 : PRINT "(A) MOVE THE SCALE ALL THE WAY LEFT";
6260 LOCATE 18,4 : PRINT "COMPARE";
6262 IF I99 = 4 GOTO 8280
6280 LOCATE 19,4 : PRINT "IF LEFT HEAVY-SWAP & TURN ON 'FLAG'";
6300 LOCATE 20,4 : PRINT "MOVE SCALE ONE POSITION TO RIGHT";
6340 LOCATE 22,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO";
6360 LOCATE 23,1 : PRINT "PERFORM YOUR NEWEST INSTRUCTION, PRESS ";
6380 LOCATE 24,1 : PRINT "THE SPACE BAR.";
6400 RN%=25:CN%=1:GOSUB 70
6420 X$=INKEY$ : IF X$<>"" THEN 6500
6440 COUNTER4=COUNTER4+1
6460 IF COUNTER4=LIMIT THEN 2080
6480 GOTO 6420
6500 COUNTER4=0
6520 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 6420
6540 GOSUB 27900
6560 RETURN
6580 '
6600 '    ACCEPT FIFTH COMMAND AND VERIFY IT
6640 '
6660 LOCATE 23,1 : PRINT "NOW THAT THE SCALE IS POSITIONED UNDER";
6680 LOCATE 24,1 : PRINT "THE NEXT PAIR OF ANIMALS,WHICH INSTRUCT";
6700 LOCATE 25,1 : PRINT "ION SHOULD THE COMPUTER PERFORM NEXT?";
6720 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 6800
6740 COUNTER5=COUNTER5+1
6760 IF COUNTER5=LIMIT THEN 2080 : 'MENU
6780 GOTO 6720
6800 COUNTER5=0
6820 IF (VAL(COMMAND$)=2) OR (VAL(COMMAND$)=6) THEN 7080
6840 WRONG5=WRONG5+1
6860 A=WRONG5 MOD 2
6870 GOSUB 28000
6880 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
6900 IF TYPE$="EVEN" THEN 7000
6920 LOCATE 23,1 : PRINT "WE NEED TO KNOW WHICH ANIMAL IS THE";
6940 LOCATE 24,1 : PRINT "HEAVIER.";
6960 LOCATE 25,1 : PRINT "TRY AGAIN. PRESS A NUMBER (1 THROUGH 7)";
6980 GOTO 6720
7000 LOCATE 23,1 : PRINT "YOU NEED AN INSTRUCTION THAT WILL TELL";
7020 LOCATE 24,1 : PRINT "US WHICH OF THESE TWO ANIMALS IS THE";
7040 LOCATE 25,1 : PRINT "HEAVIER. PRESS A NUMBER (1 THROUGH 7).";
7060 GOTO 6720
7080 WRONG5=0
7100 IF VAL(COMMAND$)=6 THEN 7220
7120 LOCATE 23,1 : PRINT "YOU ALREADY HAVE A COMPARE INSTRUCTION";
7140 LOCATE 24,1 : PRINT "IN YOUR PROGRAM. THERE IS AWAY TO USE  ";
7160 LOCATE 25,1 : PRINT "THAT SAME INSTRUCTION AGAIN.          ";
7180 GOTO 6720
7220 GOSUB 28100
7222 LOCATE 14,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
7240 LOCATE 15,2 : PRINT "(A) MOVE SCALE ALL THE WAY LEFT";
7280 LOCATE 16,1 : PRINT CHR$(26);"(B) COMPARE";
7300 LOCATE 17,4 : PRINT "IF LEFT HEAVY-SWAP & TURN ON FLAG";
7320 LOCATE 18,4 : PRINT "MOVE SCALE ONE POSITION TO RIGHT";
7340 LOCATE 19,4 : PRINT "IF LAST ANIMAL NOT COMPARED-RETURN";
7360 LOCATE 20,4 : PRINT "TO B";
7380 RN%=21:CN%=1:GOSUB 70
7400 LOCATE 22,1 : PRINT "AS YOU CAN SEE, THE NEXT INSTRUCTION";
7420 LOCATE 23,1 : PRINT "POINTER IS NOW POSITIONED AT THE COMPARE";
7440 LOCATE 24,1 : PRINT "INSTRUCTION. TO TRY IT  PRESS";
7460 LOCATE 25,1 : PRINT "THE SPACE BAR.                        ";
7480 X$=INKEY$ : IF X$<>"" THEN 7560
7500 COUNTER5=COUNTER5+1
7520 IF COUNTER5=LIMIT THEN 2080 : 'MENU
7540 GOTO 7480
7560 COUNTER5=0
7580 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 7480
7600 GOSUB 27700 :FOR I=1 TO 750 : NEXT I
7720 LOCATE 16,1 : PRINT " "; : LOCATE 17,1 : PRINT CHR$(26);
7740 RN%=22:CN%=1:GOSUB 70
7745 GOSUB 29200
7820  X$=INKEY$ : IF X$<>"" THEN 7900
7840 COUNTER5=COUNTER5+1
7860 IF COUNTER5=LIMIT THEN 2080 : 'MENU
7880 GOTO 7820
7900 COUNTER5=0
7920 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 7820
7940 GOSUB 27800: FOR I=1 TO 750 : NEXT I
7960 LOCATE 17,1 : PRINT " ";
7963 IF I99 = 4  THEN I99=5:GOTO 8110
7966 LOCATE 18,1 : PRINT CHR$(26);
7970 GOSUB 29200
7980 X$=INKEY$ : IF X$<>"" THEN 8060
8000 COUNTER5=COUNTER5+1
8020 IF COUNTER5=LIMIT THEN 2080 : 'MENU
8040 GOTO 7980
8060 COUNTER5=0
8080 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 7980
8100 GOSUB 27900: FOR I=1 TO 750 : NEXT I
8110 GOSUB 29200
8120 LOCATE 18,1 : PRINT " "; : LOCATE 19,1 : PRINT CHR$(26);
8140 X$=INKEY$ : IF X$<>"" THEN 8220
8160 COUNTER5=COUNTER5+1
8180 IF COUNTER5=LIMIT THEN 2080 : 'MENU
8200 GOTO 8140
8220 COUNTER5=0
8240 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 8140
8260 LOCATE 19,1 :PRINT " ";
8262 IF I99=5 THEN I99=4:GOTO 8280
8265 LOCATE 16,1 :PRINT CHR$(26);
8270 GOSUB 29200: GOTO 7480
8280 RETURN
8300 '
8320 '     TO ACCEPT SIXTH COMMAND
8340 '     AND VERIFY
8360 GOSUB 28000
8370 PLAY "t33mlo2l32co1l8c"
8380 LOCATE 23,1:PRINT "OOPS! IT LOOKS LIKE YOUR PROGRAM IS NOT";
8400 LOCATE 24,1:PRINT "QUITE COMPLETE. IT NEEDS AT LEAST ONE";
8420 LOCATE 25,1:PRINT "MORE INSTRUCTION.WHICH SHOULD IT BE?";
8440 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 8520
8460 COUNTER6=COUNTER6+1
8480 IF COUNTER6=LIMIT THEN 2080 : 'MENU
8500 GOTO 8440
8520 COUNTER6=0
8540 IF (VAL(COMMAND$)=5) OR (VAL(COMMAND$)=7) THEN 8800
8560 WRONG6=WRONG6+1
8580 A=WRONG6 MOD 2
8590 GOSUB 28000
8600 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
8620 IF TYPE$="EVEN" THEN 8720
8640 LOCATE 23,1 : PRINT "YOU NEED AN INSTRUCTION THAT WILL CAUSE ";
8660 LOCATE 24,1 : PRINT "YOUR PROGRAM TO REPEAT FROM THE";
8680 LOCATE 25,1 : PRINT "BEGINNING. TRY AGAIN.";
8700 GOTO 8440
8720 LOCATE 23,1 : PRINT "CAN YOU FIND AN INSTRUCTION WHICH";
8740 LOCATE 24,1 : PRINT "WILL CAUSE THE COMPUTER TO GO TO POINT";
8760 LOCATE 25,1 : PRINT "(A) IN YOUR PROGRAM. TRY AGAIN.";
8780 GOTO 8440
8800 WRONG6=0
8820 IF VAL(COMMAND$)=7 THEN 8920
8840 GOSUB 28000
8860 LOCATE 24,1 : PRINT "BEFORE YOU USE THE `STOP', YOU NEED ONE";
8880 LOCATE 25,1 : PRINT "MORE INSTRUCTION. TRY AGAIN.";
8900 GOTO 8440
8920 GOSUB 28100
8940 LOCATE 14,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
8960 LOCATE 15,2 : PRINT "(A) MOVE SCALE ALL THE WAY LEFT    ";
8980 LOCATE 16,2 : PRINT "(B) COMPARE";
9000 LOCATE 17,2 : PRINT "IF LEFT HEAVY-SWAP & TURN ON FLAG      ";
9020 LOCATE 18,2 : PRINT "MOVE SCALE ONE POSITION TO RIGHT       ";
9040 LOCATE 19,2 : PRINT "IF LAST ANIMAL NOT COMPARED-RETURN TO B";
9060 LOCATE 20,2 : PRINT "IF FLAG IS ON-TURN IT OFF & RETURN TO A";
9080 LOCATE 21,2 : PRINT "STOP";
9100 LOCATE 22,1 : PRINT "NOTICE THAT WE ADDED ONE FINAL";
9120 LOCATE 23,1 : PRINT "INSTRUCTION TO YOUR PROGRAM SO IT WOULD";
9140 LOCATE 24,1 : PRINT "STOP WHEN THE SORT IS COMPLETE.";
9160 LOCATE 25,2 : PRINT "PRESS SPACE BAR TO CONTINUE";
9180 X$=INKEY$ : IF X$<>"" THEN 9260
9200 COUNTER6=COUNTER6+1
9220 IF COUNTER6=LIMIT THEN 2080 : 'MENU
9240 GOTO 9180
9260 COUNTER6=0
9280 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 9180
9290 GOSUB 28000
9300 LOCATE 22,1 : PRINT "DO YOU WISH TO EXECUTE YOUR PROGRAM:";
9320 LOCATE 23,1 : PRINT "- ONE INSTRUCTION AT A TIME-PRESS SPACE";
9340 LOCATE 24,19 : PRINT "OR";
9360 LOCATE 25,1 : PRINT "- AUTOMATICALLY - PRESS A";
9380 X$=INKEY$ : IF X$<>"" THEN 9460
9400 COUNTER6=COUNTER6+1
9420 IF COUNTER6=LIMIT THEN 2080 : 'MENU
9440 GOTO 9380
9460 COUNTER6=0
9480 IF X$="A" OR X$="a" THEN RUNSW%=2:GOTO 28800
9500 IF X$=CHR$(32) THEN RUNSW%=1:GOTO 28800
9520 GOTO 9290
9540 '
9560 '      TO DISPLAY INSTRUCTIONS
9580 GOSUB 28100
9600 LOCATE 14,1 : PRINT "INSTRUCTIONS TO CHOOSE FROM:";
9620 LOCATE 15,2 : PRINT "1. MOVE SCALE ONE POSITION TO RIGHT";
9640 LOCATE 16,2 : PRINT "2. COMPARE";
9660 LOCATE 17,2 : PRINT "3. MOVE SCALE ALL THE WAY LEFT";
9680 LOCATE 18,2 : PRINT "4. IF LEFT IS HEAVY-SWAP &TURN ON FLAG";
9700 LOCATE 19,2 : PRINT "5. STOP";
9720 LOCATE 20,2 : PRINT "6. IF LAST BOX NOT YET COMPARED RETURN";
9740 LOCATE 21,4 : PRINT "TO POINT  B";
9760 LOCATE 22,2 : PRINT "7. IF FLAG IS ON, RETURN TO POINT A";
9780 RETURN
9800 'INIT VAR
9820 DEF SEG:NAMEE$="":SNAM$=""
9840 X=0:Y=0:PI=0:Z=0:COUNTER=0:COUNTER0=0:COUNTER1=0:COUNTER2=0:COUNTER3=0:COUNTER4=0:COUNTER5=0:COUNTER6=0:A=0:WRONG5=0:WRONG4=0:WRONG3=0:WRONG2=0:WRONG=0:WRONG6=0:LIMIT=10000:SWAPF%=0
9860 X=0:Y=0:PI=0:Z=0:COUNTER=0:COUNTER0=0:COUNTER1=0:COUNTER2=0:COUNTER3=0:COUNTER4=0:COUNTER5=0:COUNTER6=0:A=0:WRONG5=0:WRONG4=0:WRONG3=0:WRONG2=0:WRONG=0:WRONG6=0
9880 X$="":TYPE$="":COMMAND$=""
9900 DEF SEG
9960 RETURN
9980 '
10920 'display cages
10940 '  gosub 22900
11040 GOSUB 27500
11060 GOSUB 28100 : LOCATE 15,5 : PRINT "Welcome to Zoo Sort, where you can";
11080 LOCATE 16,1:PRINT "create a program (a complete list of";
11100 LOCATE 17,1:PRINT "instructions) to cause the computer to";
11120 LOCATE 18,1:PRINT "sort these animals in order by increas-";
11140 LOCATE 19,1:PRINT "ing weight starting with the heaviest on";
11160 LOCATE 20,1:PRINT "the left - lightest on the right.";
11180 LOCATE 21,5:PRINT "Since you will be creating the";
11200 LOCATE 22,1:PRINT "program, let's call it `YOUR' program.";
11220 LOCATE 23,1:PRINT "Please type in your first name and then";
11240 LOCATE 24,1:PRINT "press the (SPACE BAR).";
11260 LOCATE 25,10:PRINT "NAME: ";SPACE$(10);:C=15:I1=0
11270 NAMEE$=""
11280 FOR I=1 TO 10
11300 GOSUB 30300:X$=INKEY$:IF X$="" THEN 11300
11302 IF X$=CHR$(13) THEN 11300
11303 IF I=1 AND X$=CHR$(32) THEN 11280
11304 IF X$=CHR$(32) THEN 11415
11305 IF (RIGHT$(X$,1)=CHR$(75) OR RIGHT$(X$,1)=CHR$(83)) AND LEFT$(X$,1)=CHR$(0) THEN GOTO 11450
11306 IF X$=CHR$(8) THEN 11450
11307 IF X$<"A" OR X$>"z" THEN 11300 ELSE IF X$>"Z" AND X$<"a" THEN 11300
11340 IF X$=CHR$(32) THEN 11415
11360 NAMEE$=NAMEE$+X$
11380 LOCATE 25,C+I:PRINT X$;
11400 NEXT I
11402 FOR I=1 TO 5
11404 A=MID$(NAMEE$,I,1)=MID$(NAMEE$,I+1,1)
11406 I1=I1+A
11408 NEXT
11410 IF I1=-5 THEN 11260
11415 SNAM$=NAMEE$
11420 NAMEE$=NAMEE$+"'s"
11430 RETURN
11450 IF I=1 THEN GOTO 11300 ELSE I=I-1:LOCATE 25,C+I:PRINT " ";:NAMEE$=LEFT$(NAMEE$,I-1):GOTO 11300
12000 COUNTER2=0:CLS:SCREEN 0,0,0:COLOR 7:LOCATE 1,1,0: 'beginning the Congrats/Wrap up section
12010 LOCATE 14,5 : PRINT "CONGRATULATIONS ";SNAM$;"!";
12020 LOCATE 15,1 : PRINT "Your sort program works fine   ";
12030 LOCATE 17,1 : PRINT "Would you like to see it run automati- ";
12040 LOCATE 18,1 : PRINT "cally and a bit faster?                ";
12050 LOCATE 21,3 : PRINT "Enter:  (1) for Yes";
12060 LOCATE 22,11 : PRINT "(2) for No";
12070 LOCATE 23,1 : PRINT SPACE$(40);
12080 KEY OFF:LOCATE 25,3 : PRINT "Press (1) or (2).";
12090 COMMAND$=INKEY$:IF COMMAND$<>"" THEN 12120
12100 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12110 GOTO 12090
12120 COUNTER2=0:AUTOFLAG%=0
12130 ON VAL(COMMAND$) GOTO 12150,12200
12140 COLOR 26:GOTO 12080
12150 AUTOFLAG%=1:CLS:COLOR 7:LOCATE 14,1
12160 PRINT "Good but first, let's see if you";
12170 LOCATE 16,1 : PRINT "understand why sorting is useful.";
12180 FOR I=1 TO 6000:NEXT
12190 GOTO 12230
12200 CLS:COLOR 7:LOCATE 13,1 : PRINT "O.K. Let's now review why sorting is   ";
12210 LOCATE 15,1 : PRINT "useful.";
12220 FOR I=1 TO 6000:NEXT
12230 CLS:LIMIT=6000
12240 LOCATE 6,1 : PRINT "Sorting information into alphabetical";
12250 LOCATE 7,1 : PRINT "order can make information easier to ";
12260 LOCATE 8,1 : PRINT "find. An example of this is:";
12270 LOCATE 11,1 : PRINT "1. A dictionary";
12280 LOCATE 13,1 : PRINT "2. A telephone book";
12290 LOCATE 15,1 : PRINT "3. An encyclopedia";
12300 LOCATE 17,1 : PRINT "4. All of the above";
12310 LOCATE 19,1 : PRINT SPACE$(40)
12320 LOCATE 20,1 : PRINT "Enter the number of your answer:        ";
12330 LOCATE 21,1 : PRINT SPACE$(40)
12340 LOCATE 25,1 : PRINT "  Press (1) or (2) or (3) or (4)";
12350 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 12380
12360 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12370 GOTO 12350
12380 COUNTER2=0
12390 ON VAL(COMMAND$)GOTO 12490,12490,12490,12410
12400 COLOR 26:GOTO 12340
12410 COLOR 7:LOCATE 20,1:PRINT SPACE$(40)
12420 LOCATE 19,1:PRINT "Good. (4) is the answer we're after.";
12430 LOCATE 21,1:PRINT "Sorting information into known order";
12440 LOCATE 22,1:PRINT "makes the information easier to use";
12450 LOCATE 23,1:PRINT "and therefore more valuable.";
12460 LOCATE 25,1:PRINT "Now try this one.                  ";
12470 LOCATE 20,1 : PRINT SPACE$(40)
12480 FOR I=1 TO 4000:A=1+I:NEXT:GOTO 12520
12490 COLOR 7:LOCATE 20,1:PRINT "That's a good answer but not the best.";
12500 LOCATE 21,1:PRINT "Try again.";
12510 FOR I=1 TO 1000:NEXT:GOTO 12320
12520 LIMIT=6000:CLS:COLOR 7
12530 LOCATE 3,1 : PRINT SPACE$(40);
12540 LOCATE 6,1 : PRINT "Sometimes we sort information to make";
12550 LOCATE 7,1 : PRINT "it easier to determine where it should";
12560 LOCATE 8,1 : PRINT "go. An example of this is:";
12570 LOCATE 11,1: PRINT "1. Sorting mail by ZIP CODE";
12580 LOCATE 13,1: PRINT "2. Sorting hair by color ";
12590 LOCATE 15,1: PRINT "3. Sorting autos by size ";
12600 LOCATE 19,1: PRINT SPACE$(40);
12610 LOCATE 25,3: PRINT "Press (1) or (2) or (3)";
12620 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 12650
12630 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12640 GOTO 12620
12650 COUNTER2=0
12660 ON VAL(COMMAND$) GOTO 12680,12730,12730
12670 COLOR 26:GOTO 12610
12680 LOCATE 25,1 : PRINT SPACE$(39);
12690 COLOR 7: LOCATE 19,1: PRINT "Right you are. Sorting by ZIP CODE";
12700 LOCATE 20,1:PRINT "makes delivery of the mail faster and";
12710 LOCATE 21,1:PRINT "less expensive.";
12720 FOR I=1 TO 4000:A=I+1:NEXT:GOTO 12750
12730 COLOR 7:LOCATE 19,1:PRINT "Not correct. Try again.";
12740 FOR I=1 TO 2000:NEXT:GOTO 12600
12750 CLS:COLOR 7:LIMIT=6000
12760 LOCATE 7,1 : PRINT "To create an agenda or schedule, we";
12770 LOCATE 8,1 : PRINT "sort or arrange events by:";
12780 LOCATE 11,1 : PRINT "1. Their size";
12790 LOCATE 13,1 : PRINT "2. Their cost";
12800 LOCATE 15,1 : PRINT "3. Time or date";
12810 LOCATE 19,1:PRINT SPACE$(40);
12820 LOCATE 23,1 : PRINT " Enter the number of your answer:";
12830 LOCATE 25,1: PRINT "  Press (1) or (2) or (3)";
12840 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 12870
12850 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12860 GOTO 12840
12870 COUNTER2=0
12880 ON VAL(COMMAND$) GOTO 12940,12940,12900
12890 COLOR 26:GOTO 12830
12900 LOCATE 23,1:PRINT SPACE$(39);
12910 LOCATE 25,1:PRINT SPACE$(39);
12920 COLOR 7:LOCATE 20,1:PRINT "Correct. Here's one final question.";
12930 FOR I=1 TO 2000:NEXT:GOTO 12980
12940 COLOR 7:LOCATE 19,1:PRINT "Not correct. Try again.";
12950 LOCATE 20,1:PRINT SPACE$(40);
12960 LOCATE 23,1 : PRINT SPACE$(40);
12970 FOR I=1 TO 2000:NEXT:GOTO 12810
12980 CLS:COLOR 7:LIMIT=600
13040 LOCATE 6,1 : PRINT "How fast do you think computers can";
13050 LOCATE 7,1 : PRINT "sort information?";
13080 LOCATE 10,1 : PRINT SPACE$(40)
13090 LOCATE 11,1 : PRINT "1. About the same as people can        ";
13100 LOCATE 12,1 : PRINT SPACE$(40)
13110 LOCATE 13,1 : PRINT "2. Hundreds of times faster than people";
13120 LOCATE 14,1 : PRINT SPACE$(40)
13130 LOCATE 15,1 : PRINT "3. Millions of times faster than people";
13140 LOCATE 19,1 : PRINT SPACE$(40)
13150 LOCATE 20,1 : PRINT SPACE$(40)
13160 LOCATE 21,1 : PRINT SPACE$(40)
13170 LOCATE 22,1 : PRINT SPACE$(40)
13180 LOCATE 23,1 : PRINT " Enter the number of your answer:";
13190 LOCATE 24,1 : PRINT SPACE$(39);
13200 LOCATE 25,1 : PRINT "  Press (1) or (2) or (3)";
13210 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 13240
13220 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
13230 GOTO 13210
13240 COUNTER2=0
13250 ON VAL(COMMAND$) GOTO 13330,13330,13270
13260 COLOR 26:GOTO 13200
13270 LOCATE 19,1:PRINT SPACE$(39)
13280 LOCATE 23,1:PRINT SPACE$(39)
13290 LOCATE 25,1:PRINT SPACE$(39);
13300 LOCATE 20,1:PRINT "Right again, ";SNAM$;
13310 LOCATE 21,1:PRINT SPACE$(39)
13320 FOR I=1 TO 2000:NEXT:GOTO 13360
13330 COLOR 7:LOCATE 19,1:PRINT "Not correct. Try again.";
13340 LOCATE 20,1:PRINT SPACE$(40)
13350 FOR I=1 TO 2000:NEXT:COLOR 7:GOTO 13140
13360 CLS
13370 IF AUTOFLAG%=1 THEN GOSUB 13500:CLS
13380 FOR I=1 TO 2000:NEXT
13390 LOCATE 6,1 : PRINT "Sorting has always been one of the";
13400 LOCATE 7,1 : PRINT "major uses of computers.";
13410 LOCATE 10,1: PRINT "Thank you ";SNAM$;", for trying your";
13420 LOCATE 11,1: PRINT "hand at ZOO SORT. If there are others";
13430 LOCATE 12,1: PRINT "waiting to use the IBM Personal";
13440 LOCATE 13,1: PRINT "Computer, please give the next person";
13450 LOCATE 14,1: PRINT "a turn now.";
13460 LOCATE 15,1:PRINT SPACE$(40)
13470 FOR I=1 TO 2000:A=A+I:NEXT
13480 GOTO 2080
13500 'automotive routine
13520 SCREEN 1:COLOR 0,0
13540 DEF SEG=&H1FF4
13560 I99=3: PRSW%=1:RUNSW%=2: GOSUB 25600: GOSUB 23400: GOSUB 25000: GOSUB 20200
13580 GOSUB 28300: GOSUB 25200: SWAPF%=0
13591 'reentry point for loop
13592 'GOSUB 28300: FOR I6=1 TO 300: NEXT I6: GOSUB 28300
13595  IF (PW%(I99) < PW%(I99+1)) THEN GOTO 13670
13600 GOSUB 28300: GOSUB 24100
13610 GOSUB 28300: GOSUB 24380
13620 GOSUB 25800
13655 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
13660 GOTO 13675
13670 GOSUB 28300: GOSUB 24600
13672 GOSUB 28300: GOSUB 24880
13675 GOSUB 23400: GOSUB 25000: GOSUB 20500
13680 IF I99 = 4 THEN I99=5: GOTO 13720
13690 GOSUB 28300: PRSW%=2
13700 GOSUB 25100
13720 PRSW%=5: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
13725 IF I99<5 THEN PRSW%=2 :GOTO 13591
13730 'IF SWAPF%=0 THEN GOTO 13800
13735 PRSW%=6: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
13736 IF SWAPF%=0 THEN GOTO 13790
13737 PRSW%=1:GOSUB 28300:FOR I6=1 TO 750:NEXT I6
13740 GOSUB 25300
13760 SWAPF%=0
13770 'PRSW%=2
13780 GOTO 13591
13790 PRSW%=7:RUNSW%=2: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
13800 RETURN
20000 'five simultaneous animals
20020 '
20040 CALL FLIP(PP%(1,I6),LEFTX%,LEFTY%,PY%(1),PX%(1))
20050 LEFTX%=LEFTX%+16
20060 CALL FLIP(PP%(2,I6),LEFTX%,LEFTY%,PY%(2),PX%(2))
20070 LEFTX%=LEFTX%+16
20080 CALL FLIP(PP%(3,I6),LEFTX%,LEFTY%,PY%(3),PX%(3))
20090 LEFTX%=LEFTX%+16
20100 CALL FLIP(PP%(4,I6),LEFTX%,LEFTY%,PY%(4),PX%(4))
20110 LEFTX%=LEFTX%+16
20120 CALL FLIP(PP%(5,I6),LEFTX%,LEFTY%,PY%(5),PX%(5))
20140 FOR I5=1 TO 100:NEXT I5
20160 RETURN
20200 'move all animals
20220 '
20240 FOR I6=1 TO 9: LEFTX%=0: LEFTY%=10
20250 GOSUB 20000: NEXT I6
20260 RETURN
20300 'two  simultaneous animals
20320  LEFTX%=(I99 - 1) * 16
20340 CALL FLIP(PP%(I99,I6),LEFTX%,LEFTY%,PY%(I99),PX%(I99))
20350 LEFTX%=LEFTX%+16
20360 CALL FLIP(PP%(I99+1,I6),LEFTX%,LEFTY%,PY%(I99+1),PX%(I99+1))
20380 FOR I5=1 TO 100:NEXT I5
20390 RETURN
20400 'show all animals
20420 '
20440 FOR I6=1 TO 1: LEFTX%=0: LEFTY%=10
20450 GOSUB 20000: NEXT I6
20460 RETURN
20500 'move two animals
20520 '
20540 FOR I6=1 TO 9: LEFTY%=10
20550 GOSUB 20300: NEXT I6
20560 RETURN
21440 'scale roll right
21460 'needs -leftx%-,-rightx%-
21480 CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21500 FOR I5=1 TO 10:NEXT I5
21520 LEFTX%=LEFTX%-1
21540 CALL FLIP(B1%,LEFTX%,LEFTY%,BLANKY%,BLANKX%)
21560 LEFTX%=LEFTX%+2
21580 CALL FLIP(S6%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21600 LEFTX%=LEFTX%-1
21610 SOUND -1,1 : SOUND 50,0
21620 FOR I5=1 TO 10:NEXT I5
21640 RETURN
21660 REM
21680 REM
21700 REM
21720 REM
21740 'scale roll left
21760 'needs -leftx%-,-rightx%-
21780 IF I6=1 THEN GOTO 21830
21800 CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21820 FOR I5=1 TO 10:NEXT I5: GOTO 21860
21830 LEFTX%=LEFTX%-1
21835 CALL FLIP(B1%,LEFTX%,LEFTY%,BLANKY%,BLANKX%)
21840 LEFTX%=LEFTX%+3
21860 LEFTX%=LEFTX%+24
21880 CALL FLIP(B1%,LEFTX%,LEFTY%,BLANKY%,BLANKX%)
21890 IF I6 = 1 THEN GOSUB 23400
21900 LEFTX%=LEFTX%-25
21920 CALL FLIP(S6%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21940 LEFTX%=LEFTX%+1
21960 FOR I5=1 TO 10:NEXT I5
21962 SOUND -1,1 : SOUND 50,0
21980 RETURN
22700 'blank a "moving" scale (34x25)
22720 'needs -leftx%-,-lefty%-
22740 CALL FLIP(S7%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
22760 RETURN
22780 REM
22800 'blank a "moving" scale (34x25)
22820 LEFTX%=LEFTX%+24
22840 CALL FLIP(S7%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
22860 LEFTX%=LEFTX%-24
22880 RETURN
22900 'action routine
22920 SCREEN 1:COLOR 0,0:CLS
22940 DEF SEG=&H1FF4
22945 X$=INKEY$:IF X$ <> "" THEN RETURN
22950 LINE (25,100)-(280,199),1,BF
22951 LINE (107,141)-(178,154),0,BF
22952 LINE (91,163)-(209,176),0,BF
22953 LINE (67,117)-(236,130),0,BF
22954 'PAINT (26,101),1,2
22955 LOCATE 16,10:PRINT "To Try Your Hand At";:LOCATE 19,15: PRINT "ZOO SORT";:LOCATE 22,13:PRINT "PRESS ANY KEY:";
22960 I99=3
22970 GOSUB 25600
22980 GOSUB 23400
22985 GOSUB 25000
22986 GOSUB 30300
22987 X$=INKEY$:IF X$ <> "" THEN RETURN
22989 GOSUB 20200: GOSUB 25200: SWAPF%=0
22990 X$=INKEY$:IF X$ <> "" THEN RETURN
22991 'reentry point for loop
22992 X$=INKEY$:IF X$ <> "" THEN RETURN
22993  GOSUB 25700:   IF RANDN% = 1 THEN GOTO 23070
22995 'IF (PW%(I99) < PW%(I99+1)) THEN GOTO 23070
22999 X$=INKEY$:IF X$ <> "" THEN RETURN
23000 GOSUB 24100
23005 X$=INKEY$:IF X$ <> "" THEN RETURN
23010 GOSUB 24380
23015 X$=INKEY$:IF X$ <> "" THEN RETURN
23020 GOSUB 25800
23025 X$=INKEY$:IF X$ <> "" THEN RETURN
23055 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
23057 X$=INKEY$:IF X$ <> "" THEN RETURN
23060 GOTO 23075
23070 GOSUB 24600
23071 X$=INKEY$:IF X$ <> "" THEN RETURN
23072 GOSUB 24880
23073 X$=INKEY$:IF X$ <> "" THEN RETURN
23075 GOSUB 23400: GOSUB 25000: GOSUB 20500
23076 X$=INKEY$:IF X$ <> "" THEN RETURN
23080 IF I99 = 4 THEN GOTO 23120
23090 X$=INKEY$:IF X$ <> "" THEN RETURN
23100 GOSUB 25100: GOTO 22991
23110 X$=INKEY$:IF X$ <> "" THEN RETURN
23120 IF SWAPF%=0 THEN GOTO 23200
23140 GOSUB 25300
23150 X$=INKEY$:IF X$ <> "" THEN RETURN
23160 SWAPF%=0
23180 GOTO 22991
23200 REM
23220 REM
23240 GOTO 22960
23260 RETURN
23300 LEFTX%=LEFTX%+16: RETURN
23400 'ground surface
23420 LINE (0,95) -(319,95),3
23440 LINE (4,74) -(7,95),3,B
23460 LINE (312,74) -(315,95),3,B
23480 RETURN
23500 ' left cage blanker 1
23510 LFX%=((I99 - 1)* 64)+ 0
23520  LINE (LFX%,0) -STEP (+63,+12),0,BF
23560 RETURN
23600 ' blank out two cages
23620 LFX%=((I99 - 1)* 64)+ 0
23640 LINE (LFX%,0) -STEP (+127,+72),0,BF
23660 RETURN
23700 ' right cage blanker 1
23710 LFX%=(I99 * 64)+ 0
23720 LINE (LFX%,0) -STEP (+63,+13),0,BF
23760 RETURN
23800 'ALL ANIMALS
23820 SCREEN 1:COLOR 0,0
23840 DEF SEG=&H1FF4
23860  LEFTX%=0: LEFTY%=10
23880 FOR I6=1 TO 5: GOSUB 23900: NEXT I6:
23885 'FOR I5=1 TO 1600: NEXT I5
23890 RETURN
23900 'each ANIMAL
23910 LFX%=((I99 - 1)* 16)+ 0
23920 CALL FLIP(PP%(I6),LEFTX%,LEFTY%,PY%(I6),PX%(I6))
23940 GOSUB 23300
23960 RETURN
24100 'left heavy and swap routine
24120 SCREEN 1:COLOR 0,0
24140 DEF SEG=&H1FF4
24160 'LEfTX%=((I99-1) * 16) + 1
24180 'LEFTY%=49
24220  CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
24240 LEFTX% = LEFTX%-0: LEFTY%=LEFTY% - 4
24260  FOR I5=1 TO  100:NEXT I5 :
24265 PLAY "t120o3l32mbmlep32ep32ep32gp32gp32gp32o4l8c"
24270 GOSUB 26500: GOSUB 27100
24280  CALL FLIP(S3%,LEFTX%,LEFTY%,SCALE2Y%,SCALE3X%)
24285 GOSUB 23500: GOSUB 25900
24300 FOR I5=1 TO  100:NEXT I5:
24320 LEFTX%=LEFTX%-1: LEFTY%=LEFTY%-4
24330 GOSUB 26600: GOSUB 27100
24340 CALL FLIP(S5%,LEFTX%,LEFTY%,SCALE4Y%,SCALE2X%)
24345 GOSUB 26700: GOSUB 26000
24360 FOR I5=1 TO  750:NEXT I5:
24370 RETURN
24380 CALL FLIP(S7%,LEFTX%,LEFTY%,SCALE4Y%,SCALE2X%)
24390 GOSUB 23600
24400 FOR I5=1 TO  200:NEXT I5:
24420 LFY% = 4:LFX%=((LEFTX%\2)+5):
24440 LOCATE  LFY%,LFX% : PRINT "SWAP!";
24460 FOR I5=1 TO  300:NEXT I5:
24480 LOCATE  LFY%,LFX% : PRINT "     ";
24500 RETURN
24600 ' right heavy and no swap
24620 SCREEN 1:COLOR 0,0
24640 DEF SEG=&H1FF4
24660 'LEFTX%=((I99-1) * 16) + 1
24680 'LEFTY%=49
24720  CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
24740 LEFTX% = LEFTX%-1: LEFTY%=LEFTY% - 4
24760  FOR I5=1 TO  100:NEXT I5 :
24765 PLAY "t120o3l32mbmlep32ep32ep32gp32gp32gp32o4l8c"
24770 GOSUB 26100: GOSUB 27200
24780  CALL FLIP(S2%,LEFTX%,LEFTY%,SCALE3Y%,SCALE3X%)
24790 GOSUB 23700: GOSUB 26300
24800 FOR I5=1 TO  100:NEXT I5:
24820 LEFTX%=LEFTX%-2: LEFTY%=LEFTY%-2
24830 GOSUB 26200: GOSUB 27200
24840 CALL FLIP(S4%,LEFTX%,LEFTY%,SCALE5Y%,SCALE2X%)
24850 GOSUB 26800: GOSUB 26400
24860 FOR I5=1 TO  750:NEXT I5:
24870 RETURN
24880 GOSUB 27300
24900 FOR I5=1 TO 200:NEXT I5
24920 LFY% = 11:LFX%=((LEFTX%\2)+4):
24940 LOCATE  LFY%,LFX% : PRINT "NO SWAP!";
24960 FOR I5=1 TO  300:NEXT I5:
24970 GOSUB 26900
24980 LOCATE  LFY%,LFX% : PRINT "        ";
24995 RETURN
25000 ' place scale on road
25010 LEFTY%=61: LEFTX%=((I99 -1)*16)+3
25020 CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
25030 GOSUB 27400
25035 GOSUB 20400
25040 RETURN
25100 ' roll right 1 cage worth
25120 LEFTX%=((I99-1)*16)+3
25140 LEFTY%=61
25160 FOR I6=1 TO 16:GOSUB 21440
25180 LEFTX%=LEFTX%+1:NEXT I6
25185 I99=I99+1
25190 RETURN
25200 ' roll left 2 cages worth
25220 LEFTX%=35
25240 LEFTY%=61
25260 FOR I6=2 TO 33:GOSUB 21740
25280 LEFTX%=LEFTX%-1:NEXT I6
25285 I99=1
25290 RETURN
25300 ' roll left 3 cages worth
25320 LEFTX%=51
25340 LEFTY%=61
25360 FOR I6=1 TO 50:GOSUB 21740
25380 LEFTX%=LEFTX%-1:NEXT I6
25385 I99=1
25390 RETURN
25400 'left flag
25410 'LINE (12,94)-(12,76),1
25411 X=1
25420 'LINE (13,78)-(24,86),2,BF
25421 GOSUB 29900
25430 RETURN
25500 'right flag
25510 'LINE (294,94)-(294,76),1
25511 X=249
25520 'LINE (295,78)-(306,86),2,BF
25521 GOSUB 29900
25530 RETURN
25600 'set inital animal values
25610 PW%(1)=2:PW%(2)=1:PW%(3)=5:PW%(4)=4:PW%(5)=3
25620 PX%(1)=14:PX%(2)=14:PX%(3)=16:PX%(4)=14:PX%(5)=14
25630 PY%(1)=51:PY%(2)=51:PY%(3)=51:PY%(4)=51:PY%(5)=51
25640 PP%(1,1)=K5%:PP%(1,2)=K4%:PP%(1,3)=K3%
25642 PP%(1,4)=K2%:PP%(1,5)=K1%:PP%(1,6)=K2%
25644 PP%(1,7)=K3%:PP%(1,8)=K3%:PP%(1,9)=K5%
25646 PP%(2,1)=R1%:PP%(2,2)=R2%:PP%(2,3)=R3%
25648 PP%(2,4)=R4%:PP%(2,5)=R5%:PP%(2,6)=R4%
25650 PP%(2,7)=R3%:PP%(2,8)=R2%:PP%(2,9)=R1%
25652 PP%(3,1)=E1%:PP%(3,2)=E1%:PP%(3,3)=E2%
25654 PP%(3,4)=E2%:PP%(3,5)=E3%:PP%(3,6)=E2%
25656 PP%(3,7)=E2%:PP%(3,8)=E1%:PP%(3,9)=E1%
25658 PP%(4,1)=H2%:PP%(4,2)=H2%:PP%(4,3)=H2%
25660 PP%(4,4)=H1%:PP%(4,5)=H1%:PP%(4,6)=H1%
25662 PP%(4,7)=H2%:PP%(4,8)=H2%:PP%(4,9)=H2%
25664 PP%(5,1)=G1%:PP%(5,2)=G2%:PP%(5,3)=G3%
25666 PP%(5,4)=G4%:PP%(5,5)=G5%:PP%(5,6)=G4%
25668 PP%(5,7)=G3%:PP%(5,8)=G2%:PP%(5,9)=G1%
25699 RETURN
25700 'generate a random 1 or 0
25710  RANDM$ = TIME$
25720  RAND2$ = RIGHT$(RANDM$,2)
25730  RANDT% = VAL(RAND2$)
25740  RANDN% = RANDT% MOD 2
25745 RANDN%=0
25750 RETURN
25800 ' swap pointers
25820 FOR I6=1 TO 9:SWAP PP%(I99,I6),PP%(I99+1,I6): NEXT I6
25840 SWAP PW%(I99),PW%(I99+1)
25845 SWAP PX%(I99),PX%(I99+1)
25847 SWAP PY%(I99),PY%(I99+1)
25850 SWAPF%=1
25855 RETURN
25900 ' left cage down 1st
25910 LFX%=((I99 - 1)* 16) +0
25920 LFY%=13
25940 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
25960 RETURN
26000 ' left cage down 2nd
26010 LFX%=((I99 - 1)* 16) +0
26020 LFY%=16
26040 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
26060 RETURN
26100 ' left cage up 1st
26110 LFX%=((I99 - 1)* 16) +0
26120 LFY%=6
26140 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
26160 RETURN
26200 ' left cage up 2nd
26210 LFX%=((I99 - 1)* 16) +0
26220 LFY%=4
26240 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
26260 RETURN
26300 'right cage down 1st
26310 LFX%=(I99 * 16) +0
26320 LFY%=14
26340 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26360 RETURN
26400 'right cage down 2nd
26410 LFX%=(I99 * 16) +0
26420 LFY%=17
26440 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26460 RETURN
26500 'right cage up 1st
26510 LFX%=(I99 * 16) +0
26520 LFY%=6
26540 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26560 RETURN
26600 'right cage up 2nd
26610 LFX%=(I99 * 16) +0
26620 LFY%=2
26640 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26660 RETURN
26700 ' left cage blanker 2
26710 LFX%=((I99 - 1)* 64)+ 0
26720  LINE (LFX%,0) -STEP (+63,+15),0,BF
26760 RETURN
26800 'right cage blanker 2
26810 LFX%=(I99* 64)+ 0
26820  LINE (LFX%,0) -STEP (+63,+16),0,BF
26860 RETURN
26900 '  cage top blanker
26920  LINE (0,0) - (319,9),0,BF
26940 RETURN
27000 'left corner blanker
27010 LFX%=(I99* 64)+ 0
27020  LINE (LFX%,0) -STEP (+63,+16),0,BF
27040 RETURN
27100 ' right bottom blanker
27110 LFX%=((LEFTX%+SCALE3X%) * 4) -4
27120 LFY%=LEFTY%
27130 LINE (LFX%,LFY%) -STEP (+14,+5),0,BF
27140 RETURN
27200 '  left bottom blanker
27210 LFX%=(LEFTX%*4)-1
27220 LFY%=LEFTY%
27230 LINE (LFX%,LFY%) -STEP (-7,+5),0,BF
27240 RETURN
27300 'no swap blanker
27310 LFX%=(LEFTX% * 4) - 7
27320 LFY%=LEFTY%
27330 LINE (LFX%,LFY%) -STEP (+63,+39),0,BF
27340 LFX%=LFX%+64
27350 LFY%=LFY%+13
27360 LINE (LFX%,LFY%) -STEP (+63,+26),0,BF
27370 RETURN
27400 ' scale leading edge
27410 LFX%=((LEFTX%+SCALE1X%) * 4)
27420 LFY%=LEFTY%
27430 LINE (LFX%,LFY%) -STEP (+12,+9),0,BF
27440 RETURN
27500 'initial image
27510 DEF SEG=&H1FF4
27520 I99=3
27530 GOSUB 25600
27540 GOSUB 23400
27550 GOSUB 25000
27560 REM
27570 REM
27580 'DEF SEG
27590 RETURN
27600 'scale to left
27610 DEF SEG=&H1FF4
27620 GOSUB 20200
27630 GOSUB 25200
27640 SWAPF%=0
27650 REM
27660 REM
27670 REM
27680 'DEF SEG
27690 RETURN
27700 'compare
27710 DEF SEG=&H1FF4
27720 IF (PW%(I99) < PW%(I99+1)) THEN GOSUB 24600 ELSE GOSUB 24100
27730 REM
27740 REM
27750 REM
27760 REM
27770 REM
27780 'DEF SEG
27790 RETURN
27800 'swap or dont
27810 DEF SEG=&H1FF4
27820 IF (PW%(I99) < PW%(I99+1)) THEN GOTO 27860
27830 GOSUB 24380: GOSUB 25800
27840 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
27850 GOTO 27870
27860 GOSUB 24880
27870 GOSUB 23400: GOSUB 25000
27880 GOSUB 20500: 'def seg
27890 RETURN
27900 ' move to next box
27910 DEF SEG=&H1FF4
27920 GOSUB 25100: 'def seg
27930 RETURN
28000 ' blank out last 3 lines
28010 LINE (0,176) - (319,199),0,BF
28020 RETURN
28100 ' blank out last 11 lines
28110 LINE (0,104) - (319,199),0,BF
28120 RETURN
28200 LOCATE RN%,CN%:PRINT "                                       "; RETURN
28300 ' program
28320 LOCATE 14,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
28340 LOCATE 15,1 : PRINT " (A) MOVE SCALE ALL THE WAY LEFT    ";
28360 LOCATE 16,1 : PRINT " (B) COMPARE
28380 LOCATE 17,1 : PRINT " IF LEFT HEAVY-SWAP & TURN ON FLAG      ";
28400 LOCATE 18,1 : PRINT " MOVE SCALE ONE POSITION TO RIGHT       ";
28420 LOCATE 19,1 : PRINT " IF LAST ANIMAL NOT COMPARED-RETURN TO B";
28440 LOCATE 20,1 : PRINT " IF FLAG IS ON-TURN IT OFF & RETURN TO A";
28460 LOCATE 21,1 : PRINT " STOP";
28470 RN%=(PRSW% + 14)
28475 LOCATE RN%,1: PRINT CHR$(26);
28500 GOSUB 28000
28520 IF RUNSW% = 2 GOTO 28740
28540 LOCATE 23,1 : PRINT "ONE INSTRUCTION AT A TIME - PRESS SPACE.";
28560 LOCATE 24,11: PRINT "OR";
28580 LOCATE 25,1 : PRINT "AUTOMATICALLY - PRESS A.";
28600 COUNTER5=0
28620 X$=INKEY$ : IF X$<>"" THEN 28700
28640 COUNTER5=COUNTER5+1
28660 IF COUNTER5=LIMIT THEN GOTO 2080
28680 GOTO 28620
28700 COUNTER5=0
28710 IF (X$="a" OR X$="A") THEN RUNSW%=2: GOTO 28740
28720 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 28620
28740 PRSW%=PRSW%+1
28760 RETURN
28800 'automotive routine
28820 SCREEN 1:COLOR 0,0
28840 DEF SEG=&H1FF4
28860 I99=4
28865 RN%=22:CN%=1:GOSUB 70
28870 GOTO 29030
28891 'reentry point for loop
28892 'GOSUB 28300: FOR I6=1 TO 300: NEXT I6: GOSUB 28300
28895  IF (PW%(I99) < PW%(I99+1)) THEN GOTO 28970
28900 GOSUB 28300: GOSUB 24100
28910 GOSUB 28300: GOSUB 24380
28920 GOSUB 25800
28955 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
28960 GOTO 28975
28970 GOSUB 28300: GOSUB 24600
28972 GOSUB 28300: GOSUB 24880
28975 GOSUB 23400: GOSUB 25000: GOSUB 20500
28980 IF I99 = 4 THEN I99=5: GOTO 29020
28990 GOSUB 28300: PRSW%=2
29000 GOSUB 25100
29020 PRSW%=5: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
29025 IF I99<5 THEN PRSW%=2 :GOTO 28891
29030 'IF SWAPF%=0 THEN GOTO 29100
29035 PRSW%=6: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
29036 IF SWAPF%=0 THEN GOTO 29090
29037 PRSW%=1:GOSUB 28300:FOR I6=1 TO 750:NEXT I6
29040 GOSUB 25300
29060 SWAPF%=0
29070 'PRSW%=2
29080 GOTO 28891
29090 PRSW%=7:RUNSW%=2: GOSUB 28300: FOR I6=1 TO 2000:A=A+I6: NEXT I6
29100 GOTO 12000
29200 GOSUB 28000: COUNTER5=0
29210 LOCATE 23,1 : PRINT "WHEN YOU ARE READY TO HAVE THE COMPUTER ";
29220 LOCATE 24,1 : PRINT "PERFORM THE NEXT INSTRUCTION, PRESS THE";
29230 LOCATE 25,1 : PRINT "SPACE BAR.";
29240 RETURN
29900 Y=-5  : X=X+7
29910 LINE (X+12,Y+72)-(X+52,Y+87),1,BF
29920 LINE (X+10,Y+72)-(X+10,Y+99),2
29930 LINE (X+11,Y+77)-(X+11,Y+99),2
29940 CIRCLE (X+10,Y+70),2,2
29950 PAINT (X+10,Y+70),2,2
29960 CIRCLE (X+11,Y+99),4,3,,,5/18
29970 PAINT (X+11,Y+99),4,3
29980 IF X < 50 THEN Y=4 ELSE Y=35
29990 LOCATE 10,Y   : PRINT "swap";
29999 RETURN
30000 BEEP:GOSUB 30100:BEEP:GOSUB 30100:BEEP
30010 CLS:SCREEN 1
30020 COLOR 9:OUT 980,2:OUT 981,43
30030 LINE (25,25)-(280,200),,B
30040 LOCATE  9,12,0:PRINT "Do You Still Want";:LOCATE 11,16:PRINT "To Play?";:LOCATE 17,14:PRINT "Press any key";:LOCATE 19,11:PRINT "To Start Over Again.";
30050 TIME$="00"
30060 TEMP$=INKEY$
30070 IF MID$(TIME$,7)>"05"THEN GOTO 30000
30080 IF X$=""THEN GOTO 30060
30090 GOTO 30130
30100 TIME$="00"
30110 IF MID$(TIME$,7)>"01" THEN RETURN
30120 GOTO 30110
30130 '            MAIN MENU
30140 CLS:KEY OFF : SCREEN 1,0 : COUNTER=0
30150 LOCATE 7,5:PRINT "main menu:";
30160 LOCATE 10,8 : PRINT "1. ZOO SORT";
30170 LOCATE 12,8 : PRINT "2. COMPUTER AID INSTRUCTION";
30180 LOCATE 17,5 : PRINT "ENTER SELECTION   [ ]";
30190 X$=INKEY$
30200 LOCATE 17,24 : PRINT " ";
30210 IF X$<>"" THEN 30260
30220 LOCATE 17,24 : PRINT CHR$(95);
30230 COUNTER=COUNTER+1
30240 LOCATE 17,24 : PRINT " ";
30250 GOTO 30190
30260 IF VAL(X$)=1 THEN RETURN
30270 IF VAL(X$)=2 THEN PRINT "CAI";
30280 PLAY"t36;o1;l10;c8" : GOTO 30140
30300 DEF SEG:POKE 106,0:DEF SEG=&H1FF4:RETURN
55000 KEY OFF:CLS
55001 WIDTH 40:DEF SEG=0:A=PEEK(&H410):POKE &H410, A OR &H30
55002 WIDTH 80:LOCATE  ,,1,12,13:KEY ON:REM coltomon.bas pgm.
55003 SCREEN 0,0,0:END
60000 KEY OFF:CLS:WIDTH 80:DEF SEG=0:A=PEEK(&H410):POKE &H410,(A AND &HCF) OR &H20
60001 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE  ,,1,6,7
60002 KEY ON:KEY OFF:CLS:WIDTH 40 'mon to col.bas pgm.
```

## ZOOTIME.BAS

```bas
20 PRINT "Please standby for a few seconds..."
60 GOTO 75
70 LOCATE RN%,CN%:PRINT "                                       ";:RETURN
72 RETURN
75 DIM LOOPS%(100)
76 X=0: Y=0
78 AUTOFLAG%=0:A=0
80 DIM X$(1),TYPE$(4),COMMAND$(1),DIMFLAG%(1),ATIMOUT%(1),NAMEE$(10):X$="":TYPE$="":COMMAND$="":DIMFLAG%=0:ATIMOUT%=0:C=0: NAMEE$="":DIM SWAPF%(1): RN%=0: CN%=0
85 X=0:Y=0:PI=0:Z=0:COUNTER=0:COUNTER0=0:COUNTER1=0:COUNTER2=0:COUNTER3=0:COUNTER4=0:COUNTER5=0:COUNTER6=0:A=0:WRONG5=0:WRONG4=0:WRONG3=0:WRONG2=0:WRONG=0:WRONG6=0:LIMIT=0
86 COMMAND$="":NAMEE$="":COUNTER2=0:AUTOFLAG%=0:I=0:LIMIT=0:A=0:DIM SNAM$(10):SNAM$=""
90 RANDM$="12345678":RAND2$="12":RANDT%=0:RANDN%=0: X$="": RUNSW%=0: PRSW%=0
99 DIM PP%(5,9), PW%(5), PX%(5), PY%(5)
100 DIM K1(185),K2(185),K3(185),K4(185),K5(185),G1(185),G2(185),G3(185),G4(185),G5(185),R1(185),R2(185),R3(185),R4(185),R5(185)
120 DIM E1(205),E2(205),E3(205)
140 DIM S1(300),S2(300),S3(300),S4(300),S5(300),S6(300),S7(300),H1(185),H2(185),B1(40)
155 I=0:I1=0:I2=0:I3=0:I4=0:I5=0:I6=0:DIM I99(1): I99=0
160 FRAMEX%=14:FRAMEY%=51:LEFTX%=0:LEFTY%=0
180 SCALE1X%=25:SCALE1Y%=34:SCALE2X%=28:SCALE2Y%=38:SCALE3X%=26:SCALE3Y%=38:SCALE4Y%=42:SCALE5Y%=40:BLANKX%=2:BLANKY%=34
200 K1%=0:K2%=0:K3%=0:K4%=0:K5%=0
220 G1%=0:G2%=0:G3%=0:G4%=0:G5%=0
226 FOR I=1 TO 5: FOR I1=1 TO 9: PPX(I,I1)=0:NEXT I1: NEXT I
231 PW%(1)=0:PW%(2)=0:PW%(3)=0:PW%(4)=0:PW%(5)=0
232 PX%(1)=0:PX%(2)=0:PX%(3)=0:PX%(4)=0:PX%(5)=0
233 PY%(1)=0:PY%(2)=0:PY%(3)=0:PY%(4)=0:PY%(5)=0
240 R1%=0:R2%=0:R3%=0:R4%=0:R5%=0
260 S1%=0:S2%=0:S3%=0:S4%=0:S5%=0:S6%=0:S7%=0
280 H1%=0:H2%=0
300 B1%=0: LFX%=0: LFY%=0: SWAPF%=0
320 E1%=0:E2%=0:E3%=0
360 FLIP=0:SWAPF%=0:CN%=0:RN%=0
380 K1%=VARPTR(K1(0)):K2%=VARPTR(K2(0)):K3%=VARPTR(K3(0)):K4%=VARPTR(K4(0)):K5%=VARPTR(K5(0))
400 H1%=VARPTR(H1(0)):H2%=VARPTR(H2(0))
420 E1%=VARPTR(E1(0)):E2%=VARPTR(E2(0)):E3%=VARPTR(E3(0))
440 G1%=VARPTR(G1(0)):G2%=VARPTR(G2(0)):G3%=VARPTR(G3(0)):G4%=VARPTR(G4(0)):G5%=VARPTR(G5(0))
460 R1%=VARPTR(R1(0)):R2%=VARPTR(R2(0)):R3%=VARPTR(R3(0)):R4%=VARPTR(R4(0)):R5%=VARPTR(R5(0))
480 S1%=VARPTR(S1(0)):S2%=VARPTR(S2(0)):S3%=VARPTR(S3(0)):S4%=VARPTR(S4(0)):S5%=VARPTR(S5(0)):S6%=VARPTR(S6(0)):S7%=VARPTR(S7(0))
500 B1%=VARPTR(B1(0))
520 DEF SEG=&H1FF4:BLOAD"flip.mem",0:DEF SEG=&H1FFF:BLOAD"flipd.mem",0
540 DEF SEG
560 BLOAD"k1",K1%:BLOAD"k2",K2%:BLOAD"k3",K3%:BLOAD"k4",K4%:BLOAD"k5",K5%
580 BLOAD"g1",G1%:BLOAD"g2",G2%:BLOAD"g3",G3%:BLOAD"g4",G4%:BLOAD"g5",G5%
600 BLOAD"r1",R1%:BLOAD"r2",R2%:BLOAD"r3",R3%:BLOAD"r4",R4%:BLOAD"r5",R5%
620 BLOAD"e1",E1%:BLOAD"e2",E2%:BLOAD"e3",E3%
640 BLOAD"s1",S1%:BLOAD"s2",S2%:BLOAD"s3",S3%:BLOAD"s4",S4%:BLOAD"s5",S5%:BLOAD"s6",S6%:BLOAD"s7",S7%
660 BLOAD"h1",H1%:BLOAD"h2",H2%
680 BLOAD"b1",B1%
2020 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE  ,,1,6,7
2050 GOSUB 30140:GOTO 2085
2080 GOSUB 30000
2085 REM
2520 'LOCATE 23,1,0:PRINT "Please standby for a few seconds...";
2680 GOSUB 9800 : '    TO INITALIZE
2700 CLS
2710 SCREEN 1,0: COLOR 0,0: GOSUB 27500
2720 GOSUB 11040 : '    TO ACCEPT NAME
2740 GOSUB 9540 : '    INSTRUCTIONS
2760 GOSUB 3000  : '    FIRST COMMAND
2780 GOSUB 9540 : '    INSTRUCTIONS
2800 GOSUB 3860  : '    SECOND COMMAND
2820 GOSUB 9540 : '    INSTRUCTIONS
2840 GOSUB 4720  : '    THIRD COMMAND
2860 GOSUB 9540 : '    INSTRUCTIONS
2880 GOSUB 5640  : '    FOURTH COMMAND
2900 GOSUB 9540 : '    INSTRUCTIONS
2920 GOSUB 6580  : '    FIFTH COMMAND
2940 GOSUB 9540 : '    INSTRUCTIONS
2960 GOSUB 8300  : '    SIXTH COMMAND
2980 END
3000 '
3020 '    TO ACCEPT FIRST COMMAND AND
3040 '    MAKE SURE IT IS THE CORRECT
3060 '    ONE.  PROMPTS WILL BE DISPLAYED
3080 '    TO HELP THE USER.
3100 GOSUB 28000
3101 LIMIT=60000.
3120 LOCATE 23,6 : PRINT "WHAT INSTRUCTION WOULD YOU LIKE";
3140 LOCATE 24,6 : PRINT "THE COMPUTER TO PERFORM FIRST?";
3160 LOCATE 25,6 : PRINT "PRESS A NUMBER (1 THROUGH 7).";
3180 ATIMOUT%=0
3200 COMMAND$=INKEY$ : IF COMMAND$="" THEN 3200
3220 IF (VAL(COMMAND$)=3) OR (VAL(COMMAND$)=5) THEN 3300
3240 WRONG=WRONG+1
3260 IF WRONG=1 THEN GOSUB 28000:LOCATE 23,1:PRINT "JUST TO KEEP THINGS SIMPLE, LET'S BEGIN";:LOCATE 24,1:PRINT "WITH THE ANIMALS AT THE LEFT. PLEASE";:LOCATE 25,1:PRINT "CHOOSE ANOTHER INSTRUCTION.";:GOTO 3200
3280 IF WRONG>=2 THEN GOSUB 28000:LOCATE 23,1:PRINT "PLEASE BEGIN YOUR PROGRAM WITH AN";:LOCATE 24,1:PRINT "INSTRUCTION THAT POSITIONS THE SCALE";:LOCATE 25,1:PRINT "ALL THE WAY TO THE LEFT.";:GOTO 3200
3300 IF VAL(COMMAND$)=3 THEN 3420
3340 GOSUB 28000
3360 LOCATE 24,1 : PRINT "IT WOULDN'T MAKE SENSE TO STOP SINCE WE";
3380 LOCATE 25,1 : PRINT "HAVEN'T EVEN STARTED YET.  TRY AGAIN.  ";
3400 GOTO 3200
3420 '           COLOR STATEMENT
3440 GOSUB 28100
3480 LOCATE 16,1 : PRINT "VERY GOOD. HERE IS THE FIRST INSTRUCTION";
3500 LOCATE 17,1 : PRINT "IN YOUR PROGRAM.";
3540 LOCATE 18,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
3560 LOCATE 19,1 : PRINT "  (A) MOVE SCALE ALL THE WAY LEFT";
3600 LOCATE 21,1 : PRINT "NOTICE WE GAVE YOUR FIRST INSTRUCTION";
3620 LOCATE 22,1 : PRINT "A NAME, (A).";
3640 LOCATE 23,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO";
3660 LOCATE 24,1 : PRINT "PERFORM IT, PRESS THE SPACE BAR";
3700 X$=INKEY$ : IF X$<>"" THEN 3780
3720 COUNTER1=COUNTER1+1
3740 IF COUNTER1=LIMIT THEN 2080
3760 GOTO 3700
3780 COUNTER1=0
3800 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 3700
3820 GOSUB 27600
3840 RETURN
3860 '
3880 '  TO ACCEPT SECOND COMMAND AND
3900 '  VERIFY IT.
3920 GOSUB 28000
3940 LOCATE 23,6 : PRINT "WHAT INSTRUCTION WOULD YOU LIKE";
3960 LOCATE 24,6 : PRINT "THE COMPUTER TO PERFORM NEXT?";
3980 LOCATE 25,6 : PRINT "PRESS A NUMBER (1 THROUGH 7).";
4020 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 4080
4040 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
4060 GOTO 4020
4080 COUNTER2=0
4100 IF (VAL(COMMAND$)=2) OR (VAL(COMMAND$)=3) THEN 4200
4110 GOSUB 28000
4120 LOCATE 23,1 : PRINT "WE SHOULD FIND OUT WHICH OF THE FIRST";
4140 LOCATE 24,1 : PRINT "TWO ANIMALS IS THE HEAVIER. WHICH IN";
4160 LOCATE 25,1 : PRINT "STRUCTION WILL DO THAT? ENTER SELECTION";
4180 GOTO 4020
4200 IF VAL(COMMAND$)=2 THEN 4300
4220 GOSUB 28000
4240 LOCATE 24,1 : PRINT "WE ALREADY DID THAT. TRY AGAIN. PRESS A";
4260 LOCATE 25,1 : PRINT "NUMBER (1 THROUGH 7).";
4280 GOTO 4020
4300 GOSUB 28100
4340 LOCATE 16,1 : PRINT "O.K. NOW YOUR PROGRAM LOOKS LIKE THIS. ";
4380 LOCATE 17,9 : PRINT NAMEE$;" ZOO SORT PROGRAM";
4400 LOCATE 18,1 : PRINT "(A) MOVE SCALE all the way left";
4420 LOCATE 19,5 : PRINT "COMPARE";
4460 LOCATE 21,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO ";
4480 LOCATE 22,1 : PRINT "PERFORM YOUR SECOND INSTRUCTION, PRESS ";
4500 LOCATE 23,1 : PRINT "THE SPACE BAR.";
4560 X$=INKEY$ : IF X$<>"" THEN 4640
4580 COUNTER2=COUNTER2+1
4600 IF COUNTER2=LIMIT THEN GOTO 2080
4620 GOTO 4560
4640 COUNTER2=0
4660 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 4560
4680 GOSUB 27700 :FOR I=1 TO 750 : NEXT I
4700 RETURN
4720 '
4740 '          TO ACCEPT THIRD COMMAND
4760 '          AND VERFIY IT.
4780 GOSUB 28000
4800 LOCATE 23,1 : PRINT "NOW THAT YOU KNOW THAT THE LEFT ANIMAL";
4820 LOCATE 24,1 : PRINT "IS HEAVY, WHAT INSTRUCTION WOULD YOU";
4840 LOCATE 25,1 : PRINT "LIKE THE COMPUTER TO PERFORM NEXT?";
4860 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 4940
4880 COUNTER3=COUNTER3+1
4900 IF COUNTER3=LIMIT THEN 2080
4920 GOTO 4860
4940 COUNTER3=0
4960 IF VAL(COMMAND$)=4 THEN 5220
4980 WRONG3=WRONG3+1
5000 A= WRONG3 MOD 2
5010 GOSUB 28000
5020 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
5040 IF TYPE$="EVEN" THEN 5140
5060 LOCATE 23,1 : PRINT "REMEMBER, WE WANT THE HEAVY ANIMALS TO ";
5080 LOCATE 24,1 : PRINT "END UP ON THE RIGHT.  TRY AGAIN.       ";
5120 GOTO 5180
5140 LOCATE 23,1 : PRINT "SINCE YOU WANT HEAVY ANIMALS TO MOVE TO";
5160 LOCATE 24,1 : PRINT "THE RIGHT, MAYBE YOU SHOULD TRY A SWAP.";
5180 LOCATE 25,1 : PRINT "PRESS A NUMBER (1 THROUGH 7).";
5200 GOTO 4860
5220 WRONG3=0
5240 GOSUB 28100
5280 LOCATE 16,1 : PRINT "GOOD. NOW YOUR PROGRAM LOOKS LIKE THIS:";
5300 LOCATE 17,9 : PRINT NAMEE$;" ZOO SORT PROGRAM";
5320 LOCATE 18,1 : PRINT "(A) MOVE SCALE ALL THE WAY LEFT        ";
5340 LOCATE 19,1 : PRINT "    COMPARE                            ";
5360 LOCATE 20,1 : PRINT "    IF LEFT HEAVY-SWAP & TURN ON 'FLAG'";
5380 RN%=21:CN%=1:GOSUB 70
5400 LOCATE 22,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO ";
5420 LOCATE 23,1 : PRINT "PERFORM YOUR NEXT INSTRUCTION, PRESS   ";
5440 LOCATE 24,1 : PRINT "THE SPACE BAR.                         ";
5460 RN%=25:CN%=1:GOSUB 70
5480 X$=INKEY$ : IF X$<>"" THEN 5560
5500 COUNTER3=COUNTER3+1
5520 IF COUNTER3=LIMIT THEN 2080
5540 GOTO 5480
5560 COUNTER3=0
5580 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 5480
5600 GOSUB 27800 :FOR I=1 TO 750 : NEXT I
5620 RETURN
5640 '
5660 '  ACCEPT FOURTH COMMAND AND VERIFY IT
5700 '
5720 LOCATE 23,1 : PRINT "NOW THAT THE FIRST TWO ANIMALS HAVE    ";
5740 LOCATE 24,1 : PRINT "BEEN COMPARED, WHAT WOULD YOU HAVE THE ";
5760 LOCATE 25,1 : PRINT "COMPUTER DO NEXT? ENTER SELECTION.     ";
5780 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 5860
5800 COUNTER4=COUNTER4+1
5820 IF COUNTER4=LIMIT THEN 2080 :'MENU
5840 GOTO 5780
5860 COUNTER4=0
5880 IF VAL(COMMAND$)=1 THEN 6140
5900 WRONG4=WRONG4+1
5920 A=WRONG4 MOD 2
5930 GOSUB 28000
5940 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
5960 IF TYPE$="EVEN" THEN 6060
5980 LOCATE 23,1 : PRINT "SINCE WE HAVE FINISHED WEIGHING THE    ";
6000 LOCATE 24,1 : PRINT "FIRST TWO ANIMALS, YOU SHOULD NOW MOVE ";
6020 LOCATE 25,1 : PRINT "THE SCALE. TRY AGAIN. ENTER SELECTION  ";
6040 GOTO 5780
6060 LOCATE 23,1 : PRINT "YOU SHOULD INSTRUCT THE COMPUTER TO";
6080 LOCATE 24,1 : PRINT "MOVE THE SCALE SO WE CAN WEIGH THE NEXT";
6100 LOCATE 25,1 : PRINT "OF ANIMALS. TRY AGAIN.";
6120 GOTO 5780
6140 WRONG4=0
6160 GOSUB 28100
6180 LOCATE 15,1 : PRINT "NOW YOUR PROGRAM LOOKS LIKE THIS:";
6220 LOCATE 16,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
6240 LOCATE 17,1 : PRINT "(A) MOVE THE SCALE ALL THE WAY LEFT";
6260 LOCATE 18,4 : PRINT "COMPARE";
6262 IF I99 = 4 GOTO 8280
6280 LOCATE 19,4 : PRINT "IF LEFT HEAVY-SWAP & TURN ON 'FLAG'";
6300 LOCATE 20,4 : PRINT "MOVE SCALE ONE POSITION TO RIGHT";
6340 LOCATE 22,1 : PRINT "WHEN YOU ARE READY FOR THE COMPUTER TO";
6360 LOCATE 23,1 : PRINT "PERFORM YOUR NEWEST INSTRUCTION, PRESS ";
6380 LOCATE 24,1 : PRINT "THE SPACE BAR.";
6400 RN%=25:CN%=1:GOSUB 70
6420 X$=INKEY$ : IF X$<>"" THEN 6500
6440 COUNTER4=COUNTER4+1
6460 IF COUNTER4=LIMIT THEN 2080
6480 GOTO 6420
6500 COUNTER4=0
6520 IF X$<>CHR$(32) THEN PLAY"t36;o1;l10;c8" : GOTO 6420
6540 GOSUB 27900
6560 RETURN
6580 '
6600 '    ACCEPT FIFTH COMMAND AND VERIFY IT
6640 '
6660 LOCATE 23,1 : PRINT "NOW THAT THE SCALE IS POSITIONED UNDER";
6680 LOCATE 24,1 : PRINT "THE NEXT PAIR OF ANIMALS,WHICH INSTRUCT";
6700 LOCATE 25,1 : PRINT "ION SHOULD THE COMPUTER PERFORM NEXT?";
6720 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 6800
6740 COUNTER5=COUNTER5+1
6760 IF COUNTER5=LIMIT THEN 2080 : 'MENU
6780 GOTO 6720
6800 COUNTER5=0
6820 IF (VAL(COMMAND$)=2) OR (VAL(COMMAND$)=6) THEN 7080
6840 WRONG5=WRONG5+1
6860 A=WRONG5 MOD 2
6870 GOSUB 28000
6880 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
6900 IF TYPE$="EVEN" THEN 7000
6920 LOCATE 23,1 : PRINT "WE NEED TO KNOW WHICH ANIMAL IS THE";
6940 LOCATE 24,1 : PRINT "HEAVIER.";
6960 LOCATE 25,1 : PRINT "TRY AGAIN. PRESS A NUMBER (1 THROUGH 7)";
6980 GOTO 6720
7000 LOCATE 23,1 : PRINT "YOU NEED AN INSTRUCTION THAT WILL TELL";
7020 LOCATE 24,1 : PRINT "US WHICH OF THESE TWO ANIMALS IS THE";
7040 LOCATE 25,1 : PRINT "HEAVIER. PRESS A NUMBER (1 THROUGH 7).";
7060 GOTO 6720
7080 WRONG5=0
7100 IF VAL(COMMAND$)=6 THEN 7220
7120 LOCATE 23,1 : PRINT "YOU ALREADY HAVE A COMPARE INSTRUCTION";
7140 LOCATE 24,1 : PRINT "IN YOUR PROGRAM. THERE IS AWAY TO USE  ";
7160 LOCATE 25,1 : PRINT "THAT SAME INSTRUCTION AGAIN.          ";
7180 GOTO 6720
7220 GOSUB 28100
7222 LOCATE 14,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
7240 LOCATE 15,2 : PRINT "(A) MOVE SCALE ALL THE WAY LEFT";
7280 LOCATE 16,1 : PRINT CHR$(26);"(B) COMPARE";
7300 LOCATE 17,4 : PRINT "IF LEFT HEAVY-SWAP & TURN ON FLAG";
7320 LOCATE 18,4 : PRINT "MOVE SCALE ONE POSITION TO RIGHT";
7340 LOCATE 19,4 : PRINT "IF LAST ANIMAL NOT COMPARED-RETURN";
7360 LOCATE 20,4 : PRINT "TO B";
7380 RN%=21:CN%=1:GOSUB 70
7400 LOCATE 22,1 : PRINT "AS YOU CAN SEE, THE NEXT INSTRUCTION";
7420 LOCATE 23,1 : PRINT "POINTER IS NOW POSITIONED AT THE COMPARE";
7440 LOCATE 24,1 : PRINT "INSTRUCTION. TO TRY IT  PRESS";
7460 LOCATE 25,1 : PRINT "THE SPACE BAR.                        ";
7480 X$=INKEY$ : IF X$<>"" THEN 7560
7500 COUNTER5=COUNTER5+1
7520 IF COUNTER5=LIMIT THEN 2080 : 'MENU
7540 GOTO 7480
7560 COUNTER5=0
7580 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 7480
7600 GOSUB 27700 :FOR I=1 TO 750 : NEXT I
7720 LOCATE 16,1 : PRINT " "; : LOCATE 17,1 : PRINT CHR$(26);
7740 RN%=22:CN%=1:GOSUB 70
7745 GOSUB 29200
7820  X$=INKEY$ : IF X$<>"" THEN 7900
7840 COUNTER5=COUNTER5+1
7860 IF COUNTER5=LIMIT THEN 2080 : 'MENU
7880 GOTO 7820
7900 COUNTER5=0
7920 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 7820
7940 GOSUB 27800: FOR I=1 TO 750 : NEXT I
7960 LOCATE 17,1 : PRINT " ";
7963 IF I99 = 4  THEN I99=5:GOTO 8110
7966 LOCATE 18,1 : PRINT CHR$(26);
7970 GOSUB 29200
7980 X$=INKEY$ : IF X$<>"" THEN 8060
8000 COUNTER5=COUNTER5+1
8020 IF COUNTER5=LIMIT THEN 2080 : 'MENU
8040 GOTO 7980
8060 COUNTER5=0
8080 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 7980
8100 GOSUB 27900: FOR I=1 TO 750 : NEXT I
8110 GOSUB 29200
8120 LOCATE 18,1 : PRINT " "; : LOCATE 19,1 : PRINT CHR$(26);
8140 X$=INKEY$ : IF X$<>"" THEN 8220
8160 COUNTER5=COUNTER5+1
8180 IF COUNTER5=LIMIT THEN 2080 : 'MENU
8200 GOTO 8140
8220 COUNTER5=0
8240 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 8140
8260 LOCATE 19,1 :PRINT " ";
8262 IF I99=5 THEN I99=4:GOTO 8280
8265 LOCATE 16,1 :PRINT CHR$(26);
8270 GOSUB 29200: GOTO 7480
8280 RETURN
8300 '
8320 '     TO ACCEPT SIXTH COMMAND
8340 '     AND VERIFY
8360 GOSUB 28000
8370 PLAY "t33mlo2l32co1l8c"
8380 LOCATE 23,1:PRINT "OOPS! IT LOOKS LIKE YOUR PROGRAM IS NOT";
8400 LOCATE 24,1:PRINT "QUITE COMPLETE. IT NEEDS AT LEAST ONE";
8420 LOCATE 25,1:PRINT "MORE INSTRUCTION.WHICH SHOULD IT BE?";
8440 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 8520
8460 COUNTER6=COUNTER6+1
8480 IF COUNTER6=LIMIT THEN 2080 : 'MENU
8500 GOTO 8440
8520 COUNTER6=0
8540 IF (VAL(COMMAND$)=5) OR (VAL(COMMAND$)=7) THEN 8800
8560 WRONG6=WRONG6+1
8580 A=WRONG6 MOD 2
8590 GOSUB 28000
8600 IF A=0 THEN TYPE$="EVEN" ELSE TYPE$="ODD"
8620 IF TYPE$="EVEN" THEN 8720
8640 LOCATE 23,1 : PRINT "YOU NEED AN INSTRUCTION THAT WILL CAUSE ";
8660 LOCATE 24,1 : PRINT "YOUR PROGRAM TO REPEAT FROM THE";
8680 LOCATE 25,1 : PRINT "BEGINNING. TRY AGAIN.";
8700 GOTO 8440
8720 LOCATE 23,1 : PRINT "CAN YOU FIND AN INSTRUCTION WHICH";
8740 LOCATE 24,1 : PRINT "WILL CAUSE THE COMPUTER TO GO TO POINT";
8760 LOCATE 25,1 : PRINT "(A) IN YOUR PROGRAM. TRY AGAIN.";
8780 GOTO 8440
8800 WRONG6=0
8820 IF VAL(COMMAND$)=7 THEN 8920
8840 GOSUB 28000
8860 LOCATE 24,1 : PRINT "BEFORE YOU USE THE `STOP', YOU NEED ONE";
8880 LOCATE 25,1 : PRINT "MORE INSTRUCTION. TRY AGAIN.";
8900 GOTO 8440
8920 GOSUB 28100
8940 LOCATE 14,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
8960 LOCATE 15,2 : PRINT "(A) MOVE SCALE ALL THE WAY LEFT    ";
8980 LOCATE 16,2 : PRINT "(B) COMPARE";
9000 LOCATE 17,2 : PRINT "IF LEFT HEAVY-SWAP & TURN ON FLAG      ";
9020 LOCATE 18,2 : PRINT "MOVE SCALE ONE POSITION TO RIGHT       ";
9040 LOCATE 19,2 : PRINT "IF LAST ANIMAL NOT COMPARED-RETURN TO B";
9060 LOCATE 20,2 : PRINT "IF FLAG IS ON-TURN IT OFF & RETURN TO A";
9080 LOCATE 21,2 : PRINT "STOP";
9100 LOCATE 22,1 : PRINT "NOTICE THAT WE ADDED ONE FINAL";
9120 LOCATE 23,1 : PRINT "INSTRUCTION TO YOUR PROGRAM SO IT WOULD";
9140 LOCATE 24,1 : PRINT "STOP WHEN THE SORT IS COMPLETE.";
9160 LOCATE 25,2 : PRINT "PRESS SPACE BAR TO CONTINUE";
9180 X$=INKEY$ : IF X$<>"" THEN 9260
9200 COUNTER6=COUNTER6+1
9220 IF COUNTER6=LIMIT THEN 2080 : 'MENU
9240 GOTO 9180
9260 COUNTER6=0
9280 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 9180
9290 GOSUB 28000
9300 LOCATE 22,1 : PRINT "DO YOU WISH TO EXECUTE YOUR PROGRAM:";
9320 LOCATE 23,1 : PRINT "- ONE INSTRUCTION AT A TIME-PRESS SPACE";
9340 LOCATE 24,19 : PRINT "OR";
9360 LOCATE 25,1 : PRINT "- AUTOMATICALLY - PRESS A";
9380 X$=INKEY$ : IF X$<>"" THEN 9460
9400 COUNTER6=COUNTER6+1
9420 IF COUNTER6=LIMIT THEN 2080 : 'MENU
9440 GOTO 9380
9460 COUNTER6=0
9480 IF X$="A" OR X$="a" THEN RUNSW%=2:GOTO 28800
9500 IF X$=CHR$(32) THEN RUNSW%=1:GOTO 28800
9520 GOTO 9290
9540 '
9560 '      TO DISPLAY INSTRUCTIONS
9580 GOSUB 28100
9600 LOCATE 14,1 : PRINT "INSTRUCTION TO CHOOSE FROM:";
9620 LOCATE 15,2 : PRINT "1. MOVE SCALE ONE POSITION TO RIGHT";
9640 LOCATE 16,2 : PRINT "2. COMPARE";
9660 LOCATE 17,2 : PRINT "3. MOVE SCALE ALL THE WAY LEFT";
9680 LOCATE 18,2 : PRINT "4. IF LEFT IS HEAVY-SWAP &TURN ON FLAG";
9700 LOCATE 19,2 : PRINT "5. STOP";
9720 LOCATE 20,2 : PRINT "6. IF LAST BOX NOT YET COMPARED RETURN";
9740 LOCATE 21,4 : PRINT "TO POINT  B";
9760 LOCATE 22,2 : PRINT "7. IF FLAG IS ON, RETURN TO POINT A";
9780 RETURN
9800 'INIT VAR
9820 DEF SEG:NAMEE$="":SNAM$=""
9840 X=0:Y=0:PI=0:Z=0:COUNTER=0:COUNTER0=0:COUNTER1=0:COUNTER2=0:COUNTER3=0:COUNTER4=0:COUNTER5=0:COUNTER6=0:A=0:WRONG5=0:WRONG4=0:WRONG3=0:WRONG2=0:WRONG=0:WRONG6=0:LIMIT=10000:SWAPF%=0
9860 X=0:Y=0:PI=0:Z=0:COUNTER=0:COUNTER0=0:COUNTER1=0:COUNTER2=0:COUNTER3=0:COUNTER4=0:COUNTER5=0:COUNTER6=0:A=0:WRONG5=0:WRONG4=0:WRONG3=0:WRONG2=0:WRONG=0:WRONG6=0
9880 X$="":TYPE$="":COMMAND$=""
9900 DEF SEG
9960 RETURN
9980 '
10920 'display cages
10940 '  gosub 22900
11040 GOSUB 27500
11060 GOSUB 28100 : LOCATE 15,5 : PRINT "Welcome to Zoo Sort, where you can";
11080 LOCATE 16,1:PRINT "create a program (a list of";
11100 LOCATE 17,1:PRINT "instructions) that will cause the ";
11120 LOCATE 18,1:PRINT "computer to sort the animals shown above";
11140 LOCATE 19,1:PRINT "in order by weight (light ones on the";
11160 LOCATE 20,1:PRINT "left-heavy ones on the right).
11180 LOCATE 21,5:PRINT "Since you will be creating the";
11200 LOCATE 22,1:PRINT "program, let's call it `YOUR' program.";
11220 LOCATE 23,1:PRINT "Please type in your first name and then";
11240 LOCATE 24,1:PRINT "press the SPACE BAR.";
11260 LOCATE 25,10:PRINT "NAME: ";SPACE$(10);:C=15:I1=0
11270 NAMEE$=""
11280 FOR I=1 TO 10
11300 GOSUB 30300:X$=INKEY$:IF X$="" THEN 11300
11302 IF X$=CHR$(13) THEN 11300
11303 IF I=1 AND X$=CHR$(32) THEN 11280
11304 IF X$=CHR$(32) THEN 11415
11305 IF (RIGHT$(X$,1)=CHR$(75) OR RIGHT$(X$,1)=CHR$(83)) AND LEFT$(X$,1)=CHR$(0) THEN GOTO 11450
11306 IF X$=CHR$(8) THEN 11450
11307 IF X$<"A" OR X$>"z" THEN 11300 ELSE IF X$>"Z" AND X$<"a" THEN 11300
11340 IF X$=CHR$(32) THEN 11415
11360 NAMEE$=NAMEE$+X$
11380 LOCATE 25,C+I:PRINT X$;
11400 NEXT I
11402 FOR I=1 TO 5
11404 A=MID$(NAMEE$,I,1)=MID$(NAMEE$,I+1,1)
11406 I1=I1+A
11408 NEXT
11410 IF I1=-5 THEN 11260
11415 SNAM$=NAMEE$
11420 NAMEE$=NAMEE$+"'s"
11430 RETURN
11450 IF I=1 THEN GOTO 11300 ELSE I=I-1:LOCATE 25,C+I:PRINT " ";:NAMEE$=LEFT$(NAMEE$,I-1):GOTO 11300
12000 COUNTER2=0:CLS:SCREEN 0,0,0:COLOR 7:LOCATE 1,1,0: 'beginning the Congrats/Wrap up section
12010 LOCATE 14,5 : PRINT "CONGRATULATIONS ";SNAM$;"!";
12020 LOCATE 15,1 : PRINT "Your sort program seems to work";
12030 LOCATE 17,1 : PRINT "Would you like to see it run automati- ";
12040 LOCATE 18,1 : PRINT "cally and a bit faster?                ";
12050 LOCATE 21,3 : PRINT "Enter:  (1) for Yes";
12060 LOCATE 22,11 : PRINT "(2) for No";
12070 LOCATE 23,1 : PRINT SPACE$(40);
12080 KEY OFF:LOCATE 25,3 : PRINT "Press (1) or (2).";
12090 COMMAND$=INKEY$:IF COMMAND$<>"" THEN 12120
12100 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12110 GOTO 12090
12120 COUNTER2=0:AUTOFLAG%=0
12130 ON VAL(COMMAND$) GOTO 12150,12200
12140 COLOR 26:GOTO 12080
12150 AUTOFLAG%=1:CLS:COLOR 7:LOCATE 14,1
12160 PRINT "Good but first, let's see if you";
12170 LOCATE 16,1 : PRINT "understand why sorting is useful.";
12180 FOR I=1 TO 6000:NEXT
12190 GOTO 12230
12200 CLS:COLOR 7:LOCATE 13,1 : PRINT "O.K. Let's now review why sorting is   ";
12210 LOCATE 15,1 : PRINT "useful.";
12220 FOR I=1 TO 6000:NEXT
12230 CLS:LIMIT=6000
12240 LOCATE 6,1 : PRINT "Sorting information into alphabetical";
12250 LOCATE 7,1 : PRINT "order can make information easier to ";
12260 LOCATE 8,1 : PRINT "find. An example of this is:";
12270 LOCATE 11,1 : PRINT "1. A dictionary";
12280 LOCATE 13,1 : PRINT "2. A telephone book";
12290 LOCATE 15,1 : PRINT "3. An encyclopedia";
12300 LOCATE 17,1 : PRINT "4. All of the above";
12310 LOCATE 19,1 : PRINT SPACE$(40)
12320 LOCATE 20,1 : PRINT "Enter the number of your answer:        ";
12330 LOCATE 21,1 : PRINT SPACE$(40)
12340 LOCATE 25,1 : PRINT "  Press (1) or (2) or (3) or (4)";
12350 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 12380
12360 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12370 GOTO 12350
12380 COUNTER2=0
12390 ON VAL(COMMAND$)GOTO 12490,12490,12490,12410
12400 COLOR 26:GOTO 12340
12410 COLOR 7:LOCATE 20,1:PRINT SPACE$(40)
12420 LOCATE 19,1:PRINT "Good. (4) is the answer we're after.";
12430 LOCATE 21,1:PRINT "Sorting information into known order";
12440 LOCATE 22,1:PRINT "makes the information easier to use";
12450 LOCATE 23,1:PRINT "and therefore more valuable.";
12460 LOCATE 25,1:PRINT "Now try this one.                  ";
12470 LOCATE 20,1 : PRINT SPACE$(40)
12480 FOR I=1 TO 4000:A=1+I:NEXT:GOTO 12520
12490 COLOR 7:LOCATE 20,1:PRINT "That's a good answer but not the best.";
12500 LOCATE 21,1:PRINT "Try again.";
12510 FOR I=1 TO 1000:NEXT:GOTO 12320
12520 LIMIT=6000:CLS:COLOR 7
12530 LOCATE 3,1 : PRINT SPACE$(40);
12540 LOCATE 6,1 : PRINT "Sometimes we sort information to make";
12550 LOCATE 7,1 : PRINT "it easier to determine where it should";
12560 LOCATE 8,1 : PRINT "go. An example of this is:";
12570 LOCATE 11,1: PRINT "1. Sorting mail by ZIP CODE";
12580 LOCATE 13,1: PRINT "2. Sorting hair by color ";
12590 LOCATE 15,1: PRINT "3. Sorting autos by size ";
12600 LOCATE 19,1: PRINT SPACE$(40);
12610 LOCATE 25,3: PRINT "Press (1) or (2) or (3)";
12620 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 12650
12630 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12640 GOTO 12620
12650 COUNTER2=0
12660 ON VAL(COMMAND$) GOTO 12680,12730,12730
12670 COLOR 26:GOTO 12610
12680 LOCATE 25,1 : PRINT SPACE$(39);
12690 COLOR 7: LOCATE 19,1: PRINT "Right you are. Sorting by ZIP CODE";
12700 LOCATE 20,1:PRINT "makes delivery of the mail faster and";
12710 LOCATE 21,1:PRINT "less expensive.";
12720 FOR I=1 TO 4000:A=I+1:NEXT:GOTO 12750
12730 COLOR 7:LOCATE 19,1:PRINT "Not correct. Try again.";
12740 FOR I=1 TO 2000:NEXT:GOTO 12600
12750 CLS:COLOR 7:LIMIT=6000
12760 LOCATE 7,1 : PRINT "To create an agenda or schedule, we";
12770 LOCATE 8,1 : PRINT "sort or arrange events by:";
12780 LOCATE 11,1 : PRINT "1. Their size";
12790 LOCATE 13,1 : PRINT "2. Their cost";
12800 LOCATE 15,1 : PRINT "3. Time or date";
12810 LOCATE 19,1:PRINT SPACE$(40);
12820 LOCATE 23,1 : PRINT " Enter the number of your answer:";
12830 LOCATE 25,1: PRINT "  Press (1) or (2) or (3)";
12840 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 12870
12850 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
12860 GOTO 12840
12870 COUNTER2=0
12880 ON VAL(COMMAND$) GOTO 12940,12940,12900
12890 COLOR 26:GOTO 12830
12900 LOCATE 23,1:PRINT SPACE$(39);
12910 LOCATE 25,1:PRINT SPACE$(39);
12920 COLOR 7:LOCATE 20,1:PRINT "Correct. Here's one final question.";
12930 FOR I=1 TO 2000:NEXT:GOTO 12980
12940 COLOR 7:LOCATE 19,1:PRINT "Not correct. Try again.";
12950 LOCATE 20,1:PRINT SPACE$(40);
12960 LOCATE 23,1 : PRINT SPACE$(40);
12970 FOR I=1 TO 2000:NEXT:GOTO 12810
12980 CLS:COLOR 7:LIMIT=600
13040 LOCATE 6,1 : PRINT "How fast do you think computers can";
13050 LOCATE 7,1 : PRINT "sort information?";
13080 LOCATE 10,1 : PRINT SPACE$(40)
13090 LOCATE 11,1 : PRINT "1. About the same as people can        ";
13100 LOCATE 12,1 : PRINT SPACE$(40)
13110 LOCATE 13,1 : PRINT "2. Hundreds of times faster than people";
13120 LOCATE 14,1 : PRINT SPACE$(40)
13130 LOCATE 15,1 : PRINT "3. Millions of times faster than people";
13140 LOCATE 19,1 : PRINT SPACE$(40)
13150 LOCATE 20,1 : PRINT SPACE$(40)
13160 LOCATE 21,1 : PRINT SPACE$(40)
13170 LOCATE 22,1 : PRINT SPACE$(40)
13180 LOCATE 23,1 : PRINT " Enter the number of your answer:";
13190 LOCATE 24,1 : PRINT SPACE$(39);
13200 LOCATE 25,1 : PRINT "  Press (1) or (2) or (3)";
13210 COMMAND$=INKEY$ : IF COMMAND$<>"" THEN 13240
13220 COUNTER2=COUNTER2+1 : IF COUNTER2=LIMIT THEN GOTO 2080
13230 GOTO 13210
13240 COUNTER2=0
13250 ON VAL(COMMAND$) GOTO 13330,13330,13270
13260 COLOR 26:GOTO 13200
13270 LOCATE 19,1:PRINT SPACE$(39)
13280 LOCATE 23,1:PRINT SPACE$(39)
13290 LOCATE 25,1:PRINT SPACE$(39);
13300 LOCATE 20,1:PRINT "Right again, ";SNAM$;
13310 LOCATE 21,1:PRINT SPACE$(39)
13320 FOR I=1 TO 2000:NEXT:GOTO 13360
13330 COLOR 7:LOCATE 19,1:PRINT "Not correct. Try again.";
13340 LOCATE 20,1:PRINT SPACE$(40)
13350 FOR I=1 TO 2000:NEXT:COLOR 7:GOTO 13140
13360 CLS
13370 IF AUTOFLAG%=1 THEN GOSUB 13500:CLS
13380 FOR I=1 TO 2000:NEXT
13390 LOCATE 6,1 : PRINT "Sorting has always been one of the";
13400 LOCATE 7,1 : PRINT "major uses of computers.";
13410 LOCATE 10,1: PRINT "Thank you ";SNAM$;", for trying your";
13420 LOCATE 11,1: PRINT "hand at ZOO SORT. If there are others";
13430 LOCATE 12,1: PRINT "waiting to use the IBM Personal";
13440 LOCATE 13,1: PRINT "Computer, please give the next person";
13450 LOCATE 14,1: PRINT "a turn now.";
13460 LOCATE 15,1:PRINT SPACE$(40)
13470 FOR I=1 TO 2000:A=A+I:NEXT
13480 GOTO 2080
13500 'automotive routine
13520 SCREEN 1:COLOR 0,0
13540 DEF SEG=&H1FF4
13560 I99=3: PRSW%=1:RUNSW%=2: GOSUB 25600: GOSUB 23400: GOSUB 25000: GOSUB 20200
13580 GOSUB 28300: GOSUB 25200: SWAPF%=0
13591 'reentry point for loop
13592 'GOSUB 28300: FOR I6=1 TO 300: NEXT I6: GOSUB 28300
13595  IF (PW%(I99) < PW%(I99+1)) THEN GOTO 13670
13600 GOSUB 28300: GOSUB 24100
13610 GOSUB 28300: GOSUB 24380
13620 GOSUB 25800
13655 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
13660 GOTO 13675
13670 GOSUB 28300: GOSUB 24600
13672 GOSUB 28300: GOSUB 24880
13675 GOSUB 23400: GOSUB 25000: GOSUB 20500
13680 IF I99 = 4 THEN I99=5: GOTO 13720
13690 GOSUB 28300: PRSW%=2
13700 GOSUB 25100
13720 PRSW%=5: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
13725 IF I99<5 THEN PRSW%=2 :GOTO 13591
13730 'IF SWAPF%=0 THEN GOTO 13800
13735 PRSW%=6: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
13736 IF SWAPF%=0 THEN GOTO 13790
13737 PRSW%=1:GOSUB 28300:FOR I6=1 TO 750:NEXT I6
13740 GOSUB 25300
13760 SWAPF%=0
13770 'PRSW%=2
13780 GOTO 13591
13790 PRSW%=7:RUNSW%=2: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
13800 RETURN
20000 'five simultaneous animals
20020 '
20040 CALL FLIP(PP%(1,I6),LEFTX%,LEFTY%,PY%(1),PX%(1))
20050 LEFTX%=LEFTX%+16
20060 CALL FLIP(PP%(2,I6),LEFTX%,LEFTY%,PY%(2),PX%(2))
20070 LEFTX%=LEFTX%+16
20080 CALL FLIP(PP%(3,I6),LEFTX%,LEFTY%,PY%(3),PX%(3))
20090 LEFTX%=LEFTX%+16
20100 CALL FLIP(PP%(4,I6),LEFTX%,LEFTY%,PY%(4),PX%(4))
20110 LEFTX%=LEFTX%+16
20120 CALL FLIP(PP%(5,I6),LEFTX%,LEFTY%,PY%(5),PX%(5))
20140 FOR I5=1 TO 100:NEXT I5
20160 RETURN
20200 'move all animals
20220 '
20240 FOR I6=1 TO 9: LEFTX%=0: LEFTY%=10
20250 GOSUB 20000: NEXT I6
20260 RETURN
20300 'two  simultaneous animals
20320  LEFTX%=(I99 - 1) * 16
20340 CALL FLIP(PP%(I99,I6),LEFTX%,LEFTY%,PY%(I99),PX%(I99))
20350 LEFTX%=LEFTX%+16
20360 CALL FLIP(PP%(I99+1,I6),LEFTX%,LEFTY%,PY%(I99+1),PX%(I99+1))
20380 FOR I5=1 TO 100:NEXT I5
20390 RETURN
20400 'show all animals
20420 '
20440 FOR I6=1 TO 1: LEFTX%=0: LEFTY%=10
20450 GOSUB 20000: NEXT I6
20460 RETURN
20500 'move two animals
20520 '
20540 FOR I6=1 TO 9: LEFTY%=10
20550 GOSUB 20300: NEXT I6
20560 RETURN
21440 'scale roll right
21460 'needs -leftx%-,-rightx%-
21480 CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21500 FOR I5=1 TO 10:NEXT I5
21520 LEFTX%=LEFTX%-1
21540 CALL FLIP(B1%,LEFTX%,LEFTY%,BLANKY%,BLANKX%)
21560 LEFTX%=LEFTX%+2
21580 CALL FLIP(S6%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21600 LEFTX%=LEFTX%-1
21610 SOUND -1,1 : SOUND 50,0
21620 FOR I5=1 TO 10:NEXT I5
21640 RETURN
21660 REM
21680 REM
21700 REM
21720 REM
21740 'scale roll left
21760 'needs -leftx%-,-rightx%-
21780 IF I6=1 THEN GOTO 21830
21800 CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21820 FOR I5=1 TO 10:NEXT I5: GOTO 21860
21830 LEFTX%=LEFTX%-1
21835 CALL FLIP(B1%,LEFTX%,LEFTY%,BLANKY%,BLANKX%)
21840 LEFTX%=LEFTX%+3
21860 LEFTX%=LEFTX%+24
21880 CALL FLIP(B1%,LEFTX%,LEFTY%,BLANKY%,BLANKX%)
21890 IF I6 = 1 THEN GOSUB 23400
21900 LEFTX%=LEFTX%-25
21920 CALL FLIP(S6%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
21940 LEFTX%=LEFTX%+1
21960 FOR I5=1 TO 10:NEXT I5
21962 SOUND -1,1 : SOUND 50,0
21980 RETURN
22700 'blank a "moving" scale (34x25)
22720 'needs -leftx%-,-lefty%-
22740 CALL FLIP(S7%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
22760 RETURN
22780 REM
22800 'blank a "moving" scale (34x25)
22820 LEFTX%=LEFTX%+24
22840 CALL FLIP(S7%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
22860 LEFTX%=LEFTX%-24
22880 RETURN
22900 'action routine
22920 SCREEN 1:COLOR 0,0:CLS
22940 DEF SEG=&H1FF4
22945 X$=INKEY$:IF X$ <> "" THEN RETURN
22950 LINE (25,100)-(280,199),1,BF
22951 LINE (107,141)-(178,154),0,BF
22952 LINE (91,163)-(209,176),0,BF
22953 LINE (67,117)-(236,130),0,BF
22954 'PAINT (26,101),1,2
22955 LOCATE 16,10:PRINT "To Try Your Hand At";:LOCATE 19,15: PRINT "ZOO SORT";:LOCATE 22,13:PRINT "PRESS ANY KEY:";
22960 I99=3
22970 GOSUB 25600
22980 GOSUB 23400
22985 GOSUB 25000
22986 GOSUB 30300
22987 X$=INKEY$:IF X$ <> "" THEN RETURN
22989 GOSUB 20200: GOSUB 25200: SWAPF%=0
22990 X$=INKEY$:IF X$ <> "" THEN RETURN
22991 'reentry point for loop
22992 X$=INKEY$:IF X$ <> "" THEN RETURN
22993  GOSUB 25700:   IF RANDN% = 1 THEN GOTO 23070
22995 'IF (PW%(I99) < PW%(I99+1)) THEN GOTO 23070
22999 X$=INKEY$:IF X$ <> "" THEN RETURN
23000 GOSUB 24100
23005 X$=INKEY$:IF X$ <> "" THEN RETURN
23010 GOSUB 24380
23015 X$=INKEY$:IF X$ <> "" THEN RETURN
23020 GOSUB 25800
23025 X$=INKEY$:IF X$ <> "" THEN RETURN
23055 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
23057 X$=INKEY$:IF X$ <> "" THEN RETURN
23060 GOTO 23075
23070 GOSUB 24600
23071 X$=INKEY$:IF X$ <> "" THEN RETURN
23072 GOSUB 24880
23073 X$=INKEY$:IF X$ <> "" THEN RETURN
23075 GOSUB 23400: GOSUB 25000: GOSUB 20500
23076 X$=INKEY$:IF X$ <> "" THEN RETURN
23080 IF I99 = 4 THEN GOTO 23120
23090 X$=INKEY$:IF X$ <> "" THEN RETURN
23100 GOSUB 25100: GOTO 22991
23110 X$=INKEY$:IF X$ <> "" THEN RETURN
23120 IF SWAPF%=0 THEN GOTO 23200
23140 GOSUB 25300
23150 X$=INKEY$:IF X$ <> "" THEN RETURN
23160 SWAPF%=0
23180 GOTO 22991
23200 REM
23220 REM
23240 GOTO 22960
23260 RETURN
23300 LEFTX%=LEFTX%+16: RETURN
23400 'ground surface
23420 LINE (0,95) -(319,95),3
23440 LINE (4,74) -(7,95),3,B
23460 LINE (312,74) -(315,95),3,B
23480 RETURN
23500 ' left cage blanker 1
23510 LFX%=((I99 - 1)* 64)+ 0
23520  LINE (LFX%,0) -STEP (+63,+12),0,BF
23560 RETURN
23600 ' blank out two cages
23620 LFX%=((I99 - 1)* 64)+ 0
23640 LINE (LFX%,0) -STEP (+127,+72),0,BF
23660 RETURN
23700 ' right cage blanker 1
23710 LFX%=(I99 * 64)+ 0
23720 LINE (LFX%,0) -STEP (+63,+13),0,BF
23760 RETURN
23800 'ALL ANIMALS
23820 SCREEN 1:COLOR 0,0
23840 DEF SEG=&H1FF4
23860  LEFTX%=0: LEFTY%=10
23880 FOR I6=1 TO 5: GOSUB 23900: NEXT I6:
23885 'FOR I5=1 TO 1600: NEXT I5
23890 RETURN
23900 'each ANIMAL
23910 LFX%=((I99 - 1)* 16)+ 0
23920 CALL FLIP(PP%(I6),LEFTX%,LEFTY%,PY%(I6),PX%(I6))
23940 GOSUB 23300
23960 RETURN
24100 'left heavy and swap routine
24120 SCREEN 1:COLOR 0,0
24140 DEF SEG=&H1FF4
24160 'LEfTX%=((I99-1) * 16) + 1
24180 'LEFTY%=49
24220  CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
24240 LEFTX% = LEFTX%-0: LEFTY%=LEFTY% - 4
24260  FOR I5=1 TO  100:NEXT I5 :
24265 PLAY "t120o3l32mbmlep32ep32ep32gp32gp32gp32o4l8c"
24270 GOSUB 26500: GOSUB 27100
24280  CALL FLIP(S3%,LEFTX%,LEFTY%,SCALE2Y%,SCALE3X%)
24285 GOSUB 23500: GOSUB 25900
24300 FOR I5=1 TO  100:NEXT I5:
24320 LEFTX%=LEFTX%-1: LEFTY%=LEFTY%-4
24330 GOSUB 26600: GOSUB 27100
24340 CALL FLIP(S5%,LEFTX%,LEFTY%,SCALE4Y%,SCALE2X%)
24345 GOSUB 26700: GOSUB 26000
24360 FOR I5=1 TO  750:NEXT I5:
24370 RETURN
24380 CALL FLIP(S7%,LEFTX%,LEFTY%,SCALE4Y%,SCALE2X%)
24390 GOSUB 23600
24400 FOR I5=1 TO  200:NEXT I5:
24420 LFY% = 4:LFX%=((LEFTX%\2)+5):
24440 LOCATE  LFY%,LFX% : PRINT "SWAP!";
24460 FOR I5=1 TO  300:NEXT I5:
24480 LOCATE  LFY%,LFX% : PRINT "     ";
24500 RETURN
24600 ' right heavy and no swap
24620 SCREEN 1:COLOR 0,0
24640 DEF SEG=&H1FF4
24660 'LEFTX%=((I99-1) * 16) + 1
24680 'LEFTY%=49
24720  CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
24740 LEFTX% = LEFTX%-1: LEFTY%=LEFTY% - 4
24760  FOR I5=1 TO  100:NEXT I5 :
24765 PLAY "t120o3l32mbmlep32ep32ep32gp32gp32gp32o4l8c"
24770 GOSUB 26100: GOSUB 27200
24780  CALL FLIP(S2%,LEFTX%,LEFTY%,SCALE3Y%,SCALE3X%)
24790 GOSUB 23700: GOSUB 26300
24800 FOR I5=1 TO  100:NEXT I5:
24820 LEFTX%=LEFTX%-2: LEFTY%=LEFTY%-2
24830 GOSUB 26200: GOSUB 27200
24840 CALL FLIP(S4%,LEFTX%,LEFTY%,SCALE5Y%,SCALE2X%)
24850 GOSUB 26800: GOSUB 26400
24860 FOR I5=1 TO  750:NEXT I5:
24870 RETURN
24880 GOSUB 27300
24900 FOR I5=1 TO 200:NEXT I5
24920 LFY% = 11:LFX%=((LEFTX%\2)+4):
24940 LOCATE  LFY%,LFX% : PRINT "NO SWAP!";
24960 FOR I5=1 TO  300:NEXT I5:
24970 GOSUB 26900
24980 LOCATE  LFY%,LFX% : PRINT "        ";
24995 RETURN
25000 ' place scale on road
25010 LEFTY%=61: LEFTX%=((I99 -1)*16)+3
25020 CALL FLIP(S1%,LEFTX%,LEFTY%,SCALE1Y%,SCALE1X%)
25030 GOSUB 27400
25035 GOSUB 20400
25040 RETURN
25100 ' roll right 1 cage worth
25120 LEFTX%=((I99-1)*16)+3
25140 LEFTY%=61
25160 FOR I6=1 TO 16:GOSUB 21440
25180 LEFTX%=LEFTX%+1:NEXT I6
25185 I99=I99+1
25190 RETURN
25200 ' roll left 2 cages worth
25220 LEFTX%=35
25240 LEFTY%=61
25260 FOR I6=2 TO 33:GOSUB 21740
25280 LEFTX%=LEFTX%-1:NEXT I6
25285 I99=1
25290 RETURN
25300 ' roll left 3 cages worth
25320 LEFTX%=51
25340 LEFTY%=61
25360 FOR I6=1 TO 50:GOSUB 21740
25380 LEFTX%=LEFTX%-1:NEXT I6
25385 I99=1
25390 RETURN
25400 'left flag
25410 'LINE (12,94)-(12,76),1
25411 X=1
25420 'LINE (13,78)-(24,86),2,BF
25421 GOSUB 29900
25430 RETURN
25500 'right flag
25510 'LINE (294,94)-(294,76),1
25511 X=249
25520 'LINE (295,78)-(306,86),2,BF
25521 GOSUB 29900
25530 RETURN
25600 'set inital animal values
25610 PW%(1)=2:PW%(2)=1:PW%(3)=5:PW%(4)=4:PW%(5)=3
25620 PX%(1)=14:PX%(2)=14:PX%(3)=16:PX%(4)=14:PX%(5)=14
25630 PY%(1)=51:PY%(2)=51:PY%(3)=51:PY%(4)=51:PY%(5)=51
25640 PP%(1,1)=K5%:PP%(1,2)=K4%:PP%(1,3)=K3%
25642 PP%(1,4)=K2%:PP%(1,5)=K1%:PP%(1,6)=K2%
25644 PP%(1,7)=K3%:PP%(1,8)=K3%:PP%(1,9)=K5%
25646 PP%(2,1)=R1%:PP%(2,2)=R2%:PP%(2,3)=R3%
25648 PP%(2,4)=R4%:PP%(2,5)=R5%:PP%(2,6)=R4%
25650 PP%(2,7)=R3%:PP%(2,8)=R2%:PP%(2,9)=R1%
25652 PP%(3,1)=E1%:PP%(3,2)=E1%:PP%(3,3)=E2%
25654 PP%(3,4)=E2%:PP%(3,5)=E3%:PP%(3,6)=E2%
25656 PP%(3,7)=E2%:PP%(3,8)=E1%:PP%(3,9)=E1%
25658 PP%(4,1)=H2%:PP%(4,2)=H2%:PP%(4,3)=H2%
25660 PP%(4,4)=H1%:PP%(4,5)=H1%:PP%(4,6)=H1%
25662 PP%(4,7)=H2%:PP%(4,8)=H2%:PP%(4,9)=H2%
25664 PP%(5,1)=G1%:PP%(5,2)=G2%:PP%(5,3)=G3%
25666 PP%(5,4)=G4%:PP%(5,5)=G5%:PP%(5,6)=G4%
25668 PP%(5,7)=G3%:PP%(5,8)=G2%:PP%(5,9)=G1%
25699 RETURN
25700 'generate a random 1 or 0
25710  RANDM$ = TIME$
25720  RAND2$ = RIGHT$(RANDM$,2)
25730  RANDT% = VAL(RAND2$)
25740  RANDN% = RANDT% MOD 2
25745 RANDN%=0
25750 RETURN
25800 ' swap pointers
25820 FOR I6=1 TO 9:SWAP PP%(I99,I6),PP%(I99+1,I6): NEXT I6
25840 SWAP PW%(I99),PW%(I99+1)
25845 SWAP PX%(I99),PX%(I99+1)
25847 SWAP PY%(I99),PY%(I99+1)
25850 SWAPF%=1
25855 RETURN
25900 ' left cage down 1st
25910 LFX%=((I99 - 1)* 16) +0
25920 LFY%=13
25940 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
25960 RETURN
26000 ' left cage down 2nd
26010 LFX%=((I99 - 1)* 16) +0
26020 LFY%=16
26040 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
26060 RETURN
26100 ' left cage up 1st
26110 LFX%=((I99 - 1)* 16) +0
26120 LFY%=6
26140 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
26160 RETURN
26200 ' left cage up 2nd
26210 LFX%=((I99 - 1)* 16) +0
26220 LFY%=4
26240 CALL FLIP(PP%(I99,1),LFX%,LFY%,PY%(I99),PX%(I99))
26260 RETURN
26300 'right cage down 1st
26310 LFX%=(I99 * 16) +0
26320 LFY%=14
26340 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26360 RETURN
26400 'right cage down 2nd
26410 LFX%=(I99 * 16) +0
26420 LFY%=17
26440 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26460 RETURN
26500 'right cage up 1st
26510 LFX%=(I99 * 16) +0
26520 LFY%=6
26540 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26560 RETURN
26600 'right cage up 2nd
26610 LFX%=(I99 * 16) +0
26620 LFY%=2
26640 CALL FLIP(PP%(I99+1,1),LFX%,LFY%,PY%(I99+1),PX%(I99+1))
26660 RETURN
26700 ' left cage blanker 2
26710 LFX%=((I99 - 1)* 64)+ 0
26720  LINE (LFX%,0) -STEP (+63,+15),0,BF
26760 RETURN
26800 'right cage blanker 2
26810 LFX%=(I99* 64)+ 0
26820  LINE (LFX%,0) -STEP (+63,+16),0,BF
26860 RETURN
26900 '  cage top blanker
26920  LINE (0,0) - (319,9),0,BF
26940 RETURN
27000 'left corner blanker
27010 LFX%=(I99* 64)+ 0
27020  LINE (LFX%,0) -STEP (+63,+16),0,BF
27040 RETURN
27100 ' right bottom blanker
27110 LFX%=((LEFTX%+SCALE3X%) * 4) -4
27120 LFY%=LEFTY%
27130 LINE (LFX%,LFY%) -STEP (+14,+5),0,BF
27140 RETURN
27200 '  left bottom blanker
27210 LFX%=(LEFTX%*4)-1
27220 LFY%=LEFTY%
27230 LINE (LFX%,LFY%) -STEP (-7,+5),0,BF
27240 RETURN
27300 'no swap blanker
27310 LFX%=(LEFTX% * 4) - 7
27320 LFY%=LEFTY%
27330 LINE (LFX%,LFY%) -STEP (+63,+39),0,BF
27340 LFX%=LFX%+64
27350 LFY%=LFY%+13
27360 LINE (LFX%,LFY%) -STEP (+63,+26),0,BF
27370 RETURN
27400 ' scale leading edge
27410 LFX%=((LEFTX%+SCALE1X%) * 4)
27420 LFY%=LEFTY%
27430 LINE (LFX%,LFY%) -STEP (+12,+9),0,BF
27440 RETURN
27500 'initial image
27510 DEF SEG=&H1FF4
27520 I99=3
27530 GOSUB 25600
27540 GOSUB 23400
27550 GOSUB 25000
27560 REM
27570 REM
27580 'DEF SEG
27590 RETURN
27600 'scale to left
27610 DEF SEG=&H1FF4
27620 GOSUB 20200
27630 GOSUB 25200
27640 SWAPF%=0
27650 REM
27660 REM
27670 REM
27680 'DEF SEG
27690 RETURN
27700 'compare
27710 DEF SEG=&H1FF4
27720 IF (PW%(I99) < PW%(I99+1)) THEN GOSUB 24600 ELSE GOSUB 24100
27730 REM
27740 REM
27750 REM
27760 REM
27770 REM
27780 'DEF SEG
27790 RETURN
27800 'swap or dont
27810 DEF SEG=&H1FF4
27820 IF (PW%(I99) < PW%(I99+1)) THEN GOTO 27860
27830 GOSUB 24380: GOSUB 25800
27840 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
27850 GOTO 27870
27860 GOSUB 24880
27870 GOSUB 23400: GOSUB 25000
27880 GOSUB 20500: 'def seg
27890 RETURN
27900 ' move to next box
27910 DEF SEG=&H1FF4
27920 GOSUB 25100: 'def seg
27930 RETURN
28000 ' blank out last 3 lines
28010 LINE (0,176) - (319,199),0,BF
28020 RETURN
28100 ' blank out last 11 lines
28110 LINE (0,104) - (319,199),0,BF
28120 RETURN
28200 LOCATE RN%,CN%:PRINT "                                       "; RETURN
28300 ' program
28320 LOCATE 14,8 : PRINT NAMEE$;" ZOO SORT PROGRAM";
28340 LOCATE 15,1 : PRINT " (A) MOVE SCALE ALL THE WAY LEFT    ";
28360 LOCATE 16,1 : PRINT " (B) COMPARE
28380 LOCATE 17,1 : PRINT " IF LEFT HEAVY-SWAP & TURN ON FLAG      ";
28400 LOCATE 18,1 : PRINT " MOVE SCALE ONE POSITION TO RIGHT       ";
28420 LOCATE 19,1 : PRINT " IF LAST ANIMAL NOT COMPARED-RETURN TO B";
28440 LOCATE 20,1 : PRINT " IF FLAG IS ON-TURN IT OFF & RETURN TO A";
28460 LOCATE 21,1 : PRINT " STOP";
28470 RN%=(PRSW% + 14)
28475 LOCATE RN%,1: PRINT CHR$(26);
28500 GOSUB 28000
28520 IF RUNSW% = 2 GOTO 28740
28540 LOCATE 23,1 : PRINT "ONE INSTRUCTION AT A TIME - PRESS SPACE.";
28560 LOCATE 24,11: PRINT "OR";
28580 LOCATE 25,1 : PRINT "AUTOMATICALLY - PRESS A.";
28600 COUNTER5=0
28620 X$=INKEY$ : IF X$<>"" THEN 28700
28640 COUNTER5=COUNTER5+1
28660 IF COUNTER5=LIMIT THEN GOTO 2080
28680 GOTO 28620
28700 COUNTER5=0
28710 IF (X$="a" OR X$="A") THEN RUNSW%=2: GOTO 28740
28720 IF X$<>CHR$(32) THEN PLAY"T36;O1;L10;C8" : GOTO 28620
28740 PRSW%=PRSW%+1
28760 RETURN
28800 'automotive routine
28820 SCREEN 1:COLOR 0,0
28840 DEF SEG=&H1FF4
28860 I99=4
28865 RN%=22:CN%=1:GOSUB 70
28870 GOTO 29030
28891 'reentry point for loop
28892 'GOSUB 28300: FOR I6=1 TO 300: NEXT I6: GOSUB 28300
28895  IF (PW%(I99) < PW%(I99+1)) THEN GOTO 28970
28900 GOSUB 28300: GOSUB 24100
28910 GOSUB 28300: GOSUB 24380
28920 GOSUB 25800
28955 IF I99=1 THEN GOSUB 25500 ELSE GOSUB 25400
28960 GOTO 28975
28970 GOSUB 28300: GOSUB 24600
28972 GOSUB 28300: GOSUB 24880
28975 GOSUB 23400: GOSUB 25000: GOSUB 20500
28980 IF I99 = 4 THEN I99=5: GOTO 29020
28990 GOSUB 28300: PRSW%=2
29000 GOSUB 25100
29020 PRSW%=5: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
29025 IF I99<5 THEN PRSW%=2 :GOTO 28891
29030 'IF SWAPF%=0 THEN GOTO 29100
29035 PRSW%=6: GOSUB 28300: FOR I6=1 TO 750: NEXT I6
29036 IF SWAPF%=0 THEN GOTO 29090
29037 PRSW%=1:GOSUB 28300:FOR I6=1 TO 750:NEXT I6
29040 GOSUB 25300
29060 SWAPF%=0
29070 'PRSW%=2
29080 GOTO 28891
29090 PRSW%=7:RUNSW%=2: GOSUB 28300: FOR I6=1 TO 2000:A=A+I6: NEXT I6
29100 GOTO 12000
29200 GOSUB 28000: COUNTER5=0
29210 LOCATE 23,1 : PRINT "WHEN YOU ARE READY TO HAVE THE COMPUTER ";
29220 LOCATE 24,1 : PRINT "PERFORM THE NEXT INSTRUCTION, PRESS THE";
29230 LOCATE 25,1 : PRINT "SPACE BAR.";
29240 RETURN
29900 Y=-5  : X=X+7
29910 LINE (X+12,Y+72)-(X+52,Y+87),1,BF
29920 LINE (X+10,Y+72)-(X+10,Y+99),2
29930 LINE (X+11,Y+77)-(X+11,Y+99),2
29940 CIRCLE (X+10,Y+70),2,2
29950 PAINT (X+10,Y+70),2,2
29960 CIRCLE (X+11,Y+99),4,3,,,5/18
29970 PAINT (X+11,Y+99),4,3
29980 IF X < 50 THEN Y=4 ELSE Y=35
29990 LOCATE 10,Y   : PRINT "swap";
29999 RETURN
30000 BEEP:GOSUB 30100:BEEP:GOSUB 30100:BEEP
30010 CLS:SCREEN 1
30020 COLOR 9:OUT 980,2:OUT 981,43
30030 LINE (25,25)-(280,200),,B
30040 LOCATE  9,12,0:PRINT "Do You Still Want";:LOCATE 11,16:PRINT "To Play?";:LOCATE 17,14:PRINT "Press any key";:LOCATE 19,11:PRINT "To Start Over Again.";
30050 TIME$="00"
30060 TEMP$=INKEY$
30070 IF MID$(TIME$,7)>"05"THEN GOTO 30000
30080 IF X$=""THEN GOTO 30060
30090 GOTO 30130
30100 TIME$="00"
30110 IF MID$(TIME$,7)>"01" THEN RETURN
30120 GOTO 30110
30130 '            MAIN MENU
30140 CLS:KEY OFF : SCREEN 1,0 : COUNTER=0
30150 LOCATE 7,5:PRINT "main menu:";
30160 LOCATE 10,8 : PRINT "1. ZOO SORT";
30170 LOCATE 12,8 : PRINT "2. COMPUTER AID INSTRUCTION";
30180 LOCATE 17,5 : PRINT "ENTER SELECTION   [ ]";
30190 X$=INKEY$
30200 LOCATE 17,24 : PRINT " ";
30210 IF X$<>"" THEN 30260
30220 LOCATE 17,24 : PRINT CHR$(95);
30230 COUNTER=COUNTER+1
30240 LOCATE 17,24 : PRINT " ";
30250 GOTO 30190
30260 IF VAL(X$)=1 THEN RETURN
30270 IF VAL(X$)=2 THEN PRINT "CAI";
30280 PLAY"t36;o1;l10;c8" : GOTO 30140
30300 DEF SEG:POKE 106,0:DEF SEG=&H1FF4:RETURN
55000 KEY OFF:CLS
55001 WIDTH 40:DEF SEG=0:A=PEEK(&H410):POKE &H410, A OR &H30
55002 WIDTH 80:LOCATE  ,,1,12,13:KEY ON:REM coltomon.bas pgm.
55003 SCREEN 0,0,0:END
60000 KEY OFF:CLS:WIDTH 80:DEF SEG=0:A=PEEK(&H410):POKE &H410,(A AND &HCF) OR &H20
60001 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE  ,,1,6,7
60002 KEY ON:KEY OFF:CLS:WIDTH 40 'mon to col.bas pgm.
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0027

     Volume in drive A has no label
     Directory of A:\

    AUTHOR   BAS      1664   1-01-80  12:22a
    AUTHOR2  BAS      1280   1-01-80  12:02a
    B1       BAS       128   1-01-80   5:17a
    COLTOMON BAS       128  10-21-82  12:08p
    CRASHER  BAS      4480   5-29-82
    CSPOOL   COM      1024   1-01-80   2:24a
    DATETIME BAS      1792   2-24-83  10:43p
    DISKMOD  BAS      7552  11-09-82   9:57p
    E1       BAS       896  10-15-82   2:12a
    E2       BAS       896   1-01-80  12:47a
    E3       BAS       896  10-15-82   2:42a
    FILES27  TXT      1390   1-30-87   8:29a
    FLAG     BAS       384   1-01-80   3:48a
    FLIP     MEM       256   1-01-80  12:07a
    FLIPD    MEM       128   1-01-80  12:08a
    FOILS    BAS      3584   4-05-82
    G1       BAS       768   1-01-80   4:41a
    G2       BAS       768   1-01-80   4:42a
    G3       BAS       768   1-01-80   4:42a
    G4       BAS       768   1-01-80   4:43a
    G5       BAS       768   1-01-80   4:43a
    H1       BAS       768   1-01-80   1:42a
    H2       BAS       768   1-01-80   1:43a
    K1       BAS       768   1-01-80   4:06a
    K2       BAS       768   1-01-80   4:07a
    K3       BAS       768   1-01-80   4:07a
    K4       BAS       768   1-01-80   4:08a
    K5       BAS       768   1-01-80   4:08a
    LANDER   BAS      3200   1-01-80
    MONTOCOL BAS       256  10-22-82   4:53a
    MSPOOL   COM       768   1-01-80   2:25a
    MSPOOL   DOC       556   3-01-80   9:30p
    NOISE    BAS       640   3-08-82
    R1       BAS       768   1-01-80   5:26a
    R2       BAS       768   1-01-80   5:27a
    R3       BAS       768   1-01-80   5:28a
    R4       BAS       768   1-01-80   5:28a
    R5       BAS       768   1-01-80   5:29a
    S1       BAS      1024   1-01-80  12:40a
    S2       BAS      1024   1-01-80  12:15a
    S3       BAS      1024   1-01-80   4:33a
    S4       BAS      1152   1-01-80   4:57a
    S5       BAS      1280   1-01-80   5:07a
    S6       BAS      1024   1-01-80  12:52a
    S7       BAS       896   1-01-80  12:06a
    SETCOLOR ASM      3388   2-11-83
    SETCOLOR COM       112   2-11-83
    STARTUP  BAS       384   1-01-80  12:32a
    TREK     BAS     17152   8-08-82
    ZOOSORT  BAS     33920   1-01-80  12:01a
    ZOOTIME  BAS     34048  10-25-82   7:34a
           51 file(s)     141382 bytes
                            7168 bytes free
