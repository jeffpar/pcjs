---
layout: page
title: "PC-SIG Diskette Library (Disk #83)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0083/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0083"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORMCITY"

    For all of you who can't afford the ticket to the planet Arrakis of Dune
    fame, here is Wormcity, home of another voracious creature. Among the
    other fun BASIC games here are the Towers of Hanoi, the 15Puzzle and
    TARGET, a really decent arcade shoot-em-up (which requires a monochrome
    graphics system).  Rouning out the disk are several utilities, the best
    of which is a program for taking a compiled file back to Assembly
    (COM2ASM) and Keyflags, which lets you track your use of NumLock and
    ScrollLock in the upper right-hand corner of your screen.
    
    System Requirements: Version of BASIC.
    
    How to Start: Consult your BASIC manual for instructions on how to run
    BASIC programs for your computer.
    
    Suggested Registration: None
    
    File Descriptions:
    
    15PUZZLE BAS+ Well known puzzle, arrange 15 numbered pieces in order
    COM2ASM  BAS  Adds labels to debug's unassemble, aids modifying asm code
    COM2ASM  DOC  Documentation for COM2ASM
    DISKMDF2 BAS  Diskmdf upgraded for DOS 2.0's nine sector tracks
    GRPH64K  BAS  Sample register settings as used with GRPH64K board
    GRPH64K  DOC  How to convert IBM color board for higher resolution
    HANOI    BAS  Towers of Hanoi - standard programming exercise, nice!
    KEYFLAGS ASM  Source for KEYFLAGS.COM
    KEYFLAGS COM  Display @ and # on screen to show capslock & numlock
    LANDER   BAS+ Simple, but not easy "land on the pad" game
    MENU2    BAS  Menu program to load and run .BAS programs  (DOS 2.0)
    NWCLOCK  BAS  Displays time in very large hh:mm:ss format
    PCGLOBE  BAS+ Globe of PC World's premier issue, page 220
    STARMAP  BAS  Starmap for any date/time
    TARGET   BAS+ Arcade aim and shoot game
    TARGET   DOC  Documentation for TARGET.BAS
    TARGET   PIC  Data file for TARGET.BAS
    WORMCITY BAS+ Help the worm eat an apple, escape maze
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 15PUZZLE.BAS

{% raw %}
```bas
100 REM                 The 15 Puzzle
101 REM                         by Dale Dewey
102 REM                            7284 High View Trail
103 REM                            Victor, New York  14564
104 REM                 Copyright, 1982
105 REM
110 ON ERROR GOTO 130
120 PLAY "mf": ON ERROR GOTO 0: GOTO 200
130 IF ERR<>73 THEN RESUME 200
140 WIDTH 80:CLS:LOCATE 3,1
150 PRINT "You're NOT using BASICA!"
160 PRINT "This program uses advanced features."
170 PRINT "PRESS any key to continue."
180 IF INKEY$="" THEN 180
190 RESUME 650
200 DEF SEG=0
210 IF (PEEK(&H410) AND &H30)<>&H30 THEN GOTO 290
220 WIDTH 80:CLS:LOCATE 3,1
230 PRINT "You're NOT using the COLOR/GRAPHICS Monitor Adapter!"
240 PRINT "This program uses graphics and requires that adapter."
250 PRINT "PRESS any key to continue."
260 DEF SEG
270 IF INKEY$="" THEN 270
280 GOTO 650
290 DEFINT I-N
300 DIM ST(16), S(5,5)
310 KEY OFF: CLS: SCREEN 1,0: COLOR 0,1
320 LOCATE 1,14: PRINT "The 15 Puzzle"
330 GOSUB 680
340 MOVE=0
345 LOCATE 23,13: PRINT "Move =>> "CHR$(27)CHR$(24)CHR$(25)CHR$(26);
350 ANS$=INKEY$:IF ANS$="" THEN 350
355 WHILE INKEY$<>"":WEND
360 IF LEN(ANS$)=1 THEN IF ANS$="Q" OR ANS$="q" THEN 630 ELSE 430
370 Q=ASC(RIGHT$(ANS$,1))
390 IF Q=72 AND YZ>1 THEN X0=XZ: Y0=YZ-1: GOTO 440
400 IF Q=75 AND XZ>1 THEN X0=XZ-1: Y0=YZ: GOTO 440
410 IF Q=77 AND XZ<4 THEN X0=XZ+1: Y0=YZ: GOTO 440
420 IF Q=80 AND YZ<4 THEN X0=XZ: Y0=YZ+1: GOTO 440
430 GOSUB 610: GOTO 350
440 MOVE=MOVE+1
450 SWAP S(Y0,X0),S(YZ,XZ)
460 N0=S(Y0,X0): C0=0
470 GOSUB 1150
480 SWAP Y0,YZ: SWAP X0,XZ
490 N0=S(Y0,X0): C0=2
500 GOSUB 1150
510 LOCATE 5,14: PRINT USING "Move ####";MOVE;
520 GOSUB 560
530 IF WIN <>1 THEN 350
540 LOCATE 23,12: PRINT "You have WON!"
550 GOTO 630
560 FOR I=1 TO 4
570 FOR J=1 TO 4
580 IF (I=4) AND (J=4) THEN WIN=1: RETURN
590 IF S(I,J)<>J+(I-1)*4 THEN WIN=0: RETURN
600 NEXT J: NEXT I
610 LOCATE 24,13: PRINT "Illegal Move!!";: FOR I=1 TO 2000: NEXT: LOCATE 24,13: PRINT "              ";
620 RETURN
630 LOCATE 25,1: PRINT "Would you like another puzzle? ";:ANS$=INPUT$(1)
640 IF ANS$="Y" OR ANS$="y" THEN 310
650 ON ERROR GOTO 670
660 END 'RUN "MENU"
670 SCREEN 0,0,0: COLOR 7,0: WIDTH 40: ON ERROR GOTO 0: END
680 REM        Build Screen
690 LINE (0,25)-(50,44),1,BF
700 LINE (0,162)-(50,181),1,BF
710 LINE (224,24)-(319,167),,B
720 LINE (66,50)-(205,157),,B
730 LINE (71,55)-(200,152),,B
740 PAINT (70,54),3,3
750 FOR I=1 TO 3: LINE (71+32*I,55)-(71+32*I,152): LINE (71,55+24*I)-(200,55+24*I): NEXT I
760 FOR I=0 TO 55 STEP 5
770 CIRCLE (25,103),I,1,,,2.5
780 NEXT I
790 DEF SEG: POKE &H4E,1
800 LOCATE 5,30: PRINT "This  is a"
810 LOCATE 6,30: PRINT "computer  "
820 LOCATE 7,30: PRINT "version of"
830 LOCATE 8,30: PRINT "   the    "
840 LOCATE 9,30: PRINT "15-PUZZLE."
850 LOCATE 11,30: PRINT "The object"
860 LOCATE 12,30: PRINT "is to move"
870 LOCATE 13,30: PRINT "the blocks"
880 LOCATE 14,30: PRINT "to  form a"
890 LOCATE 15,30: PRINT "pattern of"
900 LOCATE 16,30: PRINT "1-4,  5-8,"
910 LOCATE 17,30: PRINT "9-12,  and"
920 LOCATE 18,30: PRINT "13-15 with"
930 LOCATE 19,30: PRINT "one  empty"
940 LOCATE 20,30: PRINT "space!!   "
950 LOCATE 25,12: PRINT "ENTER `Q' to quit";
960 DEF SEG: POKE &H4E,3
970 PLAY "mbt160"
980 RANDOMIZE VAL(RIGHT$(TIME$,2))
990 FOR I=1 TO 16
1000  ST(I)=INT(RND*16)+1
1010  IF I=1 THEN 1060
1020  FOR J=1 TO I-1
1030   IF ST(I)=ST(J) THEN 1000
1040  NEXT J
1050  SOUND ST(I)*100,0.75
1060 NEXT I
1070 FOR I=1 TO 4
1080  FOR J=0 TO 3
1090   X0=J+1: Y0=I: S(Y0,X0)=ST(I+J*4)
1100   IF S(Y0,X0)=16 THEN S(Y0,X0)=0: C0=0: YZ=Y0: XZ=X0 ELSE C0=2
1110   N0=S(Y0,X0)
1120 GOSUB 1150
1130 NEXT J: NEXT I
1140 RETURN
1150 REM       Set a square (SQ) to color (C0) & number (N0)
1160 PAINT (45+32*X0,37+24*Y0),0,3
1170 LOCATE 6+Y0*3,7+X0*4
1180 PRINT "  ";CHR$(29);CHR$(29);: IF N0<>0 THEN PRINT USING "##";N0;: PLAY "L16ac"
1190 PAINT (45+32*X0,37+24*Y0),C0,3
1200 RETURN
```
{% endraw %}

## COM2ASM.BAS

{% raw %}
```bas
10 'COM2ASM.BAS Ver 1.1, by Richard Winkel
20 'For free distribution only; not for sale
30 DEFINT A-Z:DIM LIN$(999),JMP$(25) 'referenced addresses, jump instructions
40 GOSUB 530
50 INPUT "Enter name of input file: ", INFILE$
60 INPUT "Enter name of output file: ", OUTFILE$
70 OPEN INFILE$ FOR INPUT AS #1
80 OPEN OUTFILE$ FOR OUTPUT AS #2: PRINT #2,".RADIX 16"
90 IF EOF(1) THEN 160
100 LINE INPUT #1,A$: IF LEN(A$)<28 THEN 90 ELSE J$=MID$(A$,25,4)
110 FOR I=1 TO JMPNUM: IF J$<>JMP$(I) THEN NEXT: GOTO 90
120 IF MID$(A$,33,1)="[" THEN 90 'if indirect addressing, skip it
130 IF MID$(A$,33,3)="FAR" THEN 90
140 IF MID$(A$,37,1)=":" THEN 90 'if inter-segment jump, skip
150 LIN=LIN+1:LIN$(LIN)=MID$(A$,33,4): GOTO 90 'otherwise, save the reference
160 CLOSE #1: OPEN INFILE$ FOR INPUT AS #1 're-position read pointer
170 PRINT "Sorting..." 'super shell sort (Byte, May '83)
180 D=2^INT(LOG(LIN)/LOG(2))-1 'sort referenced addresses
190 FOR I=1 TO LIN-D
200 IF LIN$(I)<=LIN$(I+D) THEN 260 ELSE T$=LIN$(I+D): LIN$(I+D)=LIN$(I)
210 IF I<=D THEN LIN$(I)=T$: GOTO 260
220 FOR J=I-D TO 1 STEP -D
230 IF T$>=LIN$(J) THEN 250 ELSE LIN$(J+D)=LIN$(J)
240 NEXT J
250 LIN$(J+D)=T$
260 NEXT I
270 D=INT(D/2): IF D>0 THEN 190 ELSE I=1
280 IF I=LIN THEN 310 'array is sorted, now get rid of duplicates
290 IF LIN$(I)=LIN$(I+1) THEN FOR J=I TO LIN: LIN$(J)=LIN$(J+1):NEXT:LIN=LIN-1 ELSE I=I+1
300 GOTO 280
310 L=1 'now go back thru file and plug in labels for addresses
320 IF NOT EOF(1) THEN 360 ELSE IF L>LIN THEN 350 'else premature EOF
330 PRINT "Error: Referenced code at ";LIN$(L);"was not found."
350 CLOSE:END
360 LINE INPUT #1,A$:IF LEN(A$)<28 THEN 320
370 IF MID$(A$,6,4)<LIN$(L) THEN MID$(A$,6,4)=" ":GOTO 420 'not referenced
380 IF MID$(A$,6,4)=LIN$(L) THEN 400 'plug in label
390 IF L>LIN THEN MID$(A$,6,4)=" ":GOTO 420 ELSE 330 'err: skipped over code
400 L$=STR$(L):L$="L"+RIGHT$(L$,LEN(L$)-1)
410 L$=L$+":"+STRING$(4-LEN(L$)," "):MID$(A$,6,5)=L$:L=L+1
420 J$=MID$(A$,25,4):FOR I=1 TO JMPNUM:IF J$<>JMP$(I) THEN NEXT:GOTO 490
430 IF MID$(A$,33,1)="[" THEN 490
440 IF MID$(A$,33,3)="FAR" THEN 490
450 IF MID$(A$,37,1)=":" THEN 490
460 REF$=MID$(A$,33,4):FOR I=1 TO LIN:IF REF$<>LIN$(I) THEN NEXT
470 L$=STR$(I):L$="L"+RIGHT$(L$,LEN(L$)-1) 'replace destination addr with label
480 MID$(A$,33,4)=L$+STRING$(4-LEN(L$)," ")
490 A$=MID$(A$,6,5)+" "+RIGHT$(A$,LEN(A$)-23) 'get rid of set & opcode
500 FOR I=LEN(A$) TO 2 STEP -1:IF MID$(A$,I,1)=" " THEN NEXT
510 A$=LEFT$(A$,I) 'chop of trailing blanks
520 PRINT A$:PRINT #2,A$:GOTO 320
530 JMPNUM=20:FOR I=1 TO JMPNUM:READ JMP$(I):NEXT:RETURN
540 DATA "JMP ","JZ  ","JNZ ","LOOP","CALL","JCXZ","JB  ","JBE ","JNB ","JA  "
550 DATA "JG  ","JGE ","JL  ","JLE ","JNO ","JPO ","JNS ","JO  ","JPE ","JS  "
```
{% endraw %}

## COM2ASM.DOC

{% raw %}
```
DOCUMENTATION FOR COM2ASM.BAS PROGRAM
DOS 2.0 Unassembly Program
by Rich Winkel, Columbus, MO

I use this program whenever I want to convert a COM file to assembler source
code, for subsequent modification and re-assembly.  Here's how it works:

Get into Debug with the COM file you're working with, and locate the areas
containing the code.  (Stay away from the data areas.)  Write down the starting
and ending addresses for all the code areas in the file, and quit.  Back in DOS,create a file to be piped into the standard input of the Debug program,
containing the commands necessary to unassemble the program in the sequence
in which it resides in RAM.  The easiest way to do this is to use the Copy
command.

   A>copy con file1
   u addr1 addr2  <--unassemble the file
   u addr3 addr4
   .   (etc.)
   .
   q              <--DON'T FORGET THIS!
   ^Z

   1 File(s) copied

   A>
Now, type
     DEBUG (filename).COM <FILE1 >FILE2

This will (given enough time) generate a file called FILE2 containing the
result of the above commands to Debug.  Now run the COM2ASM.BAS program, enter
FILE2 in response to the "Input file?" prompt, and some other (new) file name
for the output file prompt.  The program will then read FILE2, get rid of the
hex addresses on the left and the op code, label the intra-segment jumps and
calls and their destinations with labels of the form "Ln", where 0<n<999, and
send the results to the other (new) file.  The result is compatible (as far as
it goes) with the IBM Assembler.

If you get "Error: Referenced code not found," it means that a jump or call
was not found in the input file.  At this point, processing stops and the
address of the missing code is printed out, followed by the addresses of
referenced code not yet processed.

When this happens, it either means you missed portions of the code, you got
"unsynchronized" during the unassembly (perhaps you started unassembling in
the middle of an instruction), you got into data areas, or (possibly) the code
modifies itself during execution.

```
{% endraw %}

## DISKMDF2.BAS

{% raw %}
```bas
100 'diskmodf v1.2
110 GOTO 280
160 COLOR 7,0
170 BM24=BYTE MOD 24:LOCATE BYTE\24+2,BM24*2+1:PRINT HX$(CHAR);:LOCATE ,BM24+51:PRINT AS$(CHAR);:RETURN
180 LOCATE 24,21:PRINT Z;"  ";:RETURN
190 LOCATE 1,42:PRINT BYTE:CHAR=PEEK(BUF+BYTE):LOCATE 24,35:PRINT CHAR;" ";:RETURN
280 CLEAR ,&H4B00:KEY OFF
300 DEFINT A-Z
390 DATA &h55
400 DATA &h8b,&hec
420 DATA &hbb,&h00
430 DATA &h4c,&h8b,&h76,&h06,&h8b
440 DATA &h0c,&h8b,&h76,&h08,&h8b
445 DATA &h14,&h8b,&h76,&h0a,&h8b,&h04,&h8a,&he0,&hb0,&h01
450 DATA &hcd,&h13,&h8a,&hc4,&hb4,&h00,&h89,&h04,&h5d
460 DATA &hca,&h06,&h00
500 INT13=&H4B00:FOR I=INT13 TO INT13+36:READ J:POKE I,J:NEXT I
505 BUF=&H4C00
512 DATA &h8b,&hdc,&hb4,&h08,&hcd,&h21,&h84,&hc0,&h74,&hf8,&h32,&he4,&h8b,&h5f,&h04,&h89,&h07,&hca,&h02,&h00
514 IN=&H4B80:FOR I=IN TO IN+19:READ J:POKE I,J:NEXT I
515 CLS:COLOR 7,0:LOCATE 12,13
517 PRINT "DiskModf V1.2 - Disk sector viewing and modification"
518 LOCATE 15,7:PRINT "Improved by Hal Sampson from original program by John Vandegrift"
520 DIM HX$(255):DIM AS$(255)
530 FOR I=0 TO 255:HX$(I)=RIGHT$("0"+HEX$(I),2):AS$(I)=CHR$(I):NEXT I
540 FOR I=7 TO 13:AS$(I)=CHR$(I+64):NEXT I
550 AS$(28)="\":AS$(29)="]":AS$(30)=CHR$(24):AS$(31)=CHR$(25)
560 NOTREAD=1
570 GOSUB 910
650 CLS:LOCATE 2,37:PRINT"DiskModf"
660 IF NOTREAD THEN LOCATE 23,30:PRINT "Sector not declared!!":GOTO 690
670 LOCATE 23,30:IF NOSIDES=1 THEN PRINT "Single-sided diskette":GOTO 690
680 PRINT "Double-sided diskette"
690 LOCATE 10,30:PRINT "(S)elect diskette sector"
700 LOCATE 11,30:PRINT "(V)iew/alter sector"
710 LOCATE 12,30:PRINT "(W)rite sector back to diskette"
730 LOCATE 13,30:PRINT"(Q)uit"
740 LOCATE 16,30:PRINT "Choice?";
745 CALL IN(I):I=I AND &H5F
747 IF I=83 THEN GOSUB 910
748 IF I=86 THEN GOSUB 1210
749 IF I=87 THEN GOSUB 790
750 IF I=81 THEN STOP
770 GOTO 650
790 REM         Put Sector on diskette
860 IF NOTREAD THEN RETURN
865 PRINT:PRINT:PRINT "Are you sure you want to alter disk? [N]";
868 CALL IN(I): IF (I AND &H5F) <>89  THEN RETURN
870 OP=3
880 CALL INT13 (OP,HDDR,TRSC)
885 IF OP<>0 THEN PRINT " retry";:OP=0:CALL INT13(OP,HDDR,TRSC):GOTO 870
890 RETURN
910 '
960 CLS:LOCATE 2,37:PRINT"DiskModf"
970 LOCATE 10,10:INPUT "Select drive (A-D)";DRIVE$
975 IF DRIVE$="" THEN 970
980 DRIVE=(ASC(DRIVE$) AND &H5F)-&H41
1000 IF DRIVE <0 OR DRIVE >3 THEN 970
1010 HDDR=256+DRIVE:TRSC=1:TRIES=3:NOTREAD=1
1020 OP=2:CALL INT13 (OP,HDDR,TRSC) 'check for single/double sided
1040 IF OP = 0 THEN NOSIDES=HDDR/256 +1:GOTO 1080
1050 TRIES=TRIES-1:IF TRIES=0 THEN 1055 ELSE OP=0: CALL INT13(OP,HDDR,TRSC):GOTO 1020
1055 IF HDDR>255 THEN TRIES=3:HDDR=DRIVE:GOTO 1020
1060 LOCATE 15,10:INPUT "Diskette error. C/R to go on.";I
1080 LOCATE 11,10:INPUT "Select track (0-39)";TRACK
1090 IF TRACK<0 OR TRACK>39 THEN 1080
1100 LOCATE 12,10:INPUT "Select sector (1-9)";SECTOR
1110 IF SECTOR<1 OR SECTOR>9 THEN 1100
1120 HEAD=0:IF NOSIDES=1 THEN 1150
1130 LOCATE 13,10:INPUT "Select side (0-1)";HEAD
1140 IF HEAD<0 OR HEAD>1 THEN 1130
1150 LOCATE 20,10:PRINT "Inputs satisfactory [Y]?"
1160 I$=INKEY$:IF I$="" THEN 1160 ELSE IF I$="N" OR I$="n" THEN 960
1170 HDDR=(HEAD*256)+DRIVE:TRSC=(TRACK*256)+SECTOR
1180 OP=2:CALL INT13(OP,HDDR,TRSC)
1185 IF OP<>0 THEN PRINT " retry";CHR$(7):OP=0:CALL INT13(OP,HDDR,TRSC):GOTO 1180
1187 NOTREAD=0
1190 GOSUB 1210 'always display it
1200 RETURN
1210 '
1280 IF NOTREAD THEN RETURN
1290 CLS
1300 LOCATE 1,1:PRINT"Drive ";DRIVE$;"  Side";HEAD;" Track";TRACK TAB(28) "Sector";SECTOR;" Byte";0
1310 BYTE=0
1320 GOSUB 1630
1330 GOSUB 190
1340 LOCATE 24,1:PRINT "New Value (Decimal)";
1350 COLOR 0,7:LOCATE 25,1:FOR II=24 TO 27:PRINT CHR$(II);:NEXT
1360 PRINT " - Cursor    No.+C/R - new no.    X - eXit";
1370 COLOR 0,7:GOSUB 170:GOSUB 180
1380 CALL IN(A)
1390 IF A=13 THEN CHAR=Z:Z=0:GOSUB 160:GOSUB 1520:GOTO 1370
1400 GOSUB 160
1430 IF A=77 THEN IF BYTE<511 THEN BYTE=BYTE+1:GOTO 1475
1440 IF A=80 THEN IF BYTE<488 THEN BYTE=BYTE+24:GOTO 1475
1450 IF A=75 THEN IF BYTE>0 THEN BYTE=BYTE-1:GOTO 1475
1460 IF A=72 THEN IF BYTE>24 THEN BYTE=BYTE-24:GOTO 1475
1470 IF A=88 OR A=120 THEN RETURN
1475 GOSUB 190
1480 IF A<48 OR A>57 THEN 1370
1490 Z=Z*10+A-48
1500 IF Z>255 THEN Z=0
1510 GOTO 1370
1520 POKE (BUF+BYTE),CHAR
1530 IF BYTE<511 THEN BYTE=BYTE+1
1540 GOSUB 190
1550 RETURN
1630 LOCATE 2,1:FOR A=BUF TO BUF+511 STEP 24:FOR B=A TO A+23:PRINT HX$(PEEK(B));:NEXT B:PRINT TAB(51);:FOR B=A TO A+23:PRINT AS$(PEEK(B));:NEXT B:PRINT:NEXT A
1640 LOCATE 23,17:PRINT "                                ";:LOCATE 23,59:PRINT "                ";:RETURN
```
{% endraw %}

## FILES83.TXT

{% raw %}
```
Disk No  83
Program Title: WORMCITY AND OTHERS
PC-SIG version 1.2

    For all of you who can't afford the ticket to the planet Arrakis of
Dune fame, here is Wormcity, home of another voracious creature. Among the
other fun BASIC games here are the Towers of Hanoi, the 15Puzzle and
TARGET, a really decent arcade shoot-em-up (which requires a monochrome
graphics system). Rouning out the disk are several utilities, the best of
which is a program for taking a compiled file back to Assembly (COM2ASM)
and Keyflags, which lets you track your use of NumLock and ScrollLock in
the upper right-hand corner of your screen.

Usage: Various

System Requirements: 128K memory, one disk drive, and a version of BASIC.

How to Start: Consult your BASIC manual for instructions on how to run
BASIC programs for your computer.

Suggested Registration: None

File Descriptions:

15PUZZLE BAS+ Well known puzzle, arrange 15 numbered pieces in order
COM2ASM  BAS  Adds labels to debug's unassemble, aids modification of asm code
COM2ASM  DOC  Documentation for COM2ASM
DISKMDF2 BAS  Diskmdf upgraded for DOS 2.0's nine sector tracks
GRPH64K  BAS  Sample register settings as used with GRPH64K board modification
GRPH64K  DOC  How to convert IBM color board for higher resolution
HANOI    BAS  Towers of Hanoi - standard programming exercise, nicely done
KEYFLAGS ASM  Source for KEYFLAGS.COM
KEYFLAGS COM  Display @ and # in corner of screen to show capslock & numlock
LANDER   BAS+ Simple, but not easy "land on the pad" game
MENU2    BAS  Menu program to load and run .BAS programs  (DOS 2.0 version)
NWCLOCK  BAS  Displays time in very large hh:mm:ss format
PCGLOBE  BAS+ Globe of PC World's premier issue, page 220
STARMAP  BAS  Starmap for any date/time
TARGET   BAS+ Arcade aim and shoot game
TARGET   DOC  Documentation for TARGET.BAS
TARGET   PIC  Data file for TARGET.BAS
WORMCITY BAS+ Help the worm eat an apple, escape maze

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GRPH64K.BAS

{% raw %}
```bas
10 'GRPH64K.BAS  --  some 6845 setups for upgraded Color/Graphics card
20 ' 20 JAN 83
22 '
25 'Register setups for 44 line alphanumeric display on monochrome adapter
30 DEF SEG=0
40 WIDTH 80
50 OUT &H3D8,&H2D
60 DEFINT A-Z
70 FOR I=0 TO 13
80 OUT &H3D4,I
90 READ S
100 OUT &H3D5,S
110 NEXT
120 DATA &H60,&H50,&H52,&HE,43,8,43,43,2,7,&H6,&H7,0,0
130 OUT &H3D9,64
140 DEF SEG=&HB800
150 FOR I=0 TO 44*80*2 STEP 2:POKE I,I\2 AND 255:POKE I+1,I\64:NEXT
500 '
510 '160 x 400 color interlace mode setups:
520 DEF SEG=0
530 OUT &H3D8,&H1A
540 OUT &H3D9,31
550 DEFINT A-Z
560 FOR I=0 TO 13
570 OUT &H3D4,I
580 READ S
590 OUT &H3D5,S
600 NEXT
610 DATA &H38,&H28,&H2d,10,127,2,100,112,3,1,0,0,16,0
1000 '
1100 ' 640 by 700 monochrome graphics setup
1150 DEF SEG
1200 DEFINT A-Z
1206 OUT &H3D8,&H1E
1207 OUT &H3D9,31+64
1220 FOR I=0 TO 13
1230 OUT &H3D4,I
1240 READ S
1250 OUT &H3D5,S
1260 NEXT
1270 DATA 47,40,41,6,87,6,87,87,3,3,0,0,16,0
1300 ' See GRPH64K.DOC for memory maps
```
{% endraw %}

## GRPH64K.DOC

{% raw %}
```
Notes on upgrading Color/Graphics card to 64K RAMs      20 JAN 83

Features:  

  -- compatible with all software written for IBM 16K board
  -- allows 640 x 700 (interlaced) or 640 x 350 (non-interlaced)
         graphics on IBM monchrome monitor
  -- allows 640 x 400 interlaced color display on TV
  -- allows 44 line character mode display on monochrome monitor

Warnings:

  Removing the 16K RAMs which come in the card is NOT easy, as
the leads are clinched over before soldering and the pads are
extremely delicate.  Be careful!  Also be prepared to rewire any
traces or pads you might damage.

  I suggest that you have a copy of the IBM technical reference
manual so that you can understand what is being changed and fix
it if it goes wrong.

  Although the upgrade is compatible, it is not supported by IBM,
so you must write your own driver for your application.  I'll
maintain a library of routines written for the upgrade and
submitted to me for distribution.  (Send me a floppy and return
postage for its mailer and I'll add your routine to the library
and return a copy of the current library to you.)

  IBM will likely use the graphics memory space in a different
way (but you'll have a jump on high resolution software).

  To use the upgrade, you must reprogram the 6845 registers.  If 
done improperly this can cause a monitor to burn up.  Be extremely 
careful!
 
  The upgrade works on Color/Graphics adapters with schematics
approximately as shown in the August 1981 edition of the Technical
Reference manual.  If the U numbers on your board don't seem to 
match the IC types given, STOP! and let me know so I can update
this writeup.  Note that the XT Technical Reference manual correctly
shows bit 3 of the Status Register (3DA) as Vertical Sync (very
useful for synchronizing display updates).
 
Upgrade Procedure:

-- Carefully remove the 8 16K RAMs (2118s U50 thru U57) and
replace with 16 pin sockets.

-- Connect pin 9 of U50 thru U57 and then to pin 19 of U58, U59,
U60 and U61.

-- Connect pin 18 of U58 (LS374) to pin 17 of U38 (6845 MA13).

-- Connect pin 18 of U59 (LS374) to U15 (LS00) pin 6.

-- Connect pin 18 of U60 (LS374) to P5 pin A15 (+A16).

-- Connect pin 18 of U61 (LS374) to P5 pin A17 (+A14).

-- Connect pin 5 of U15 to U38 pin 37 (RA1).

-- Connect pin 4 of U15 to pin 12 of U15 (640x200 mode).

-- Cut connection to pin 2 of U19 (+A16).

-- Connect pin 2 of U19 to pin 16 of U19 (+5V).

-- Install 150 ns 2164s in sockets U50 thru U57.

Now the Color/Graphics memory will look as follows:

Character modes:

B8000 to BFFFF:  16K character/attribute pairs
   (can scroll by setting R12 and R13 of 6845)
A8000 to AFFFF:  32K general purpose buffer memory.

Graphics modes:

B8000 to B9FFF and BC000 to BDFFF:  lines with RA=0
BA000 to BBFFF and BE000 to BFFFF:  lines with RA=1
A8000 to A9FFF and AC000 to ADFFF:  lines with RA=2
AA000 to ABFFF and AE000 to AFFFF:  lines with RA=3

To use extended resolution modes, set 6845 R12 to 10H.  (This
sets MA12 high so that MA13 goes high at the proper point.)

To use RA=2 and 3 (for 640 x 700 mode) set 6845 R9 (Max Scan Line)
to 3.


Connection to IBM monochrome display:

-- Connect a 22 ohm resistor from the emmitter of Q1 (2N3904 -
composite video) to pin 7 of the 9 pin D connector (video out)

-- Install a subminiature DPDT switch thru the back of the RFI
shield.  (To allow switching back to a normal monitor.)

-- Cut trace to U67 pin 13 (LS244 - VSYNC) and make this connection
thru the switch instead (U67 pin 13 to pole A). 

-- Connect U65 pin 13 (LS02) to the other throw of pole A.

-- Cut trace to U67 pin 11 (HSYNC) and make this connection thru
the switch instead (U67 pin 11 to pole B).

-- Connect U65 pin 6 (+HSYNCDLY) to the other throw of pole B.

-- Connect U65 pin 9 to U65 pins 11 and 12 (+VSYNCDLY).

This provides the proper (inverted) vertical sync and non-serrated
horizontal sync to the IBM monitor.


Sample 6845 register settings are given in the BASIC program:

GRPH64K.BAS


Hal Sampson
501-D Vandell Way
Campbell, CA  95008

```
{% endraw %}

## HANOI.BAS

{% raw %}
```bas
1  '
2  '***********************************
3  '*                                 *
4  '*   TOWERS OF HANOI (Recursive)   *
5  '*       @                         *
6  '*      @@@                        *
7  '*     @@@@@                       *
8  '*    @@@@@@@                      *
9  '*   @@@@@@@@@     |        |      *
10 '*  Modified for IBM PC by         *
11 '*  Marty Smith  SOURCE ST2259     *
12 '*  HOU.,TEX COMPUSERVE 72155,1214 *
13 '***********************************
14 REM BASIC recursive routine from COMPUTE, July 1982, p. 58.                         Article by Earl Wuchter.
15 REM This program is best displayed on an 80-col RGB color monitor, although     it will also work on the Monochrome Display. I have both boards and this        program first shifts to Color and defines KEY 7 as a toggle between boards.
16 REM The program first asks which board to use. If you are using one board in    your system, you might want to delete line 31, which controls this function.
17 REM I am using a SONY Profeel monitor in RGB mode, which displays 8 colors.     --Lines 76 and 1010 draw disks in 7 colors. For 15 change MOD 7 to MOD 14.      --Line 33 shifts display to the right. OUT 980,2:OUT 981,90 is standard.
18 REM Line 40 defines the character to draw disks, which is CHR$(1). Try other    values for different effects.
19 REM If you use the color board with an RF modulator or a composite monitor,     you may get no color on your display. This is due to the 80-col mode, which     is very demanding of TV's. Stick with the monochrome display or--
20 REM   you might try using mode COLOR 1,0 and using LINE ,BF or DRAW type        statements for the disks, but this would mean a lot of work.
21 REM Remove the ' in lines 130 and 250 to display the depth of recursion         during the routine.
22 REM Integers are used for speed. This limits the routine to 15 disks, or        32767 moves. Using single precision you could solve for 21 disks in 7 days,     or 2,097,151 moves! Here disks are limited to 13 to fit the 80-col. display.
23 REM I have coded this routine into MMS FORTH, which has just been released     for IBM PC. I had to put a delay routine in because the display was TOO rapid!
30 DEFINT A-Z
31 KEY 7,"GOSUB 65000"+CHR$(13):INPUT "Use Color or Monochrome board (C / M)";C$:IF LEFT$(C$,1)="c" OR LEFT$(C$,1)="C" THEN TOG=2:GOSUB 65010 ELSE IF LEFT$(C$,1)="m" OR LEFT$(C$,1)="M" THEN TOG=1:GOSUB 65010 ELSE GOTO 31
33 OUT 980,2:OUT 981,87: ' 87 is for shifting horizontal screen position
36 COLOR 7,0,0
40 Y$=STRING$(30,1):EZ$=SPACE$(26): ' 1 is character used to make disks
45 DIM N(22),F(22),T(22),D$(21),HERE(13,1),HEIGHT(3)
50 T$=STRING$(4,254)+CHR$(219):P$=T$+T$+T$+T$+T$
60 Z=0:CLS:COLOR 4,7:LOCATE 1,26:PRINT "TOWERS OF HANOI":COLOR 6,0:PRINT :INPUT "Number of Disks (1 TO 13) ";N(1)
70 IF N(1) < 1 OR N(1) > 13 THEN 60
71 PRINTER$="":PRINT "Print results on Printer? (Y to Print) ";
72 PRINTER$=INKEY$:IF PRINTER$="Y" OR PRINTER$="y" THEN LPRINT TAB(19)"TOWERS OF HANOI FOR"N(1)"DISKS"
73 IF PRINTER$="" THEN 72
74 COLOR 7,0:C=CSRLIN:LOCATE 1,1:PRINT SPACE$(25):FOR X=2 TO C:PRINT SPACE$(80);:NEXT
75 FOR X=1 TO N(1):D$(X)=STRING$(26,32):MID$(D$(X),14-X,X*2-1)=Y$:NEXT:IF TOG=1 THEN GOTO 77
76 TOP=20-N(1):FOR X=1 TO N(1):HERE(X,0)=TOP+X:HERE(X,1)=1:LOCATE TOP+X,1:COLOR X MOD 7 + 1,0:PRINT D$(X);:NEXT:LOCATE 1,26:COLOR 4,7:PRINT "TOWERS OF HANOI FOR"N(1)"DISKS":LOCATE 21,1:COLOR 1,0:PRINT STRING$(80,176);:COLOR 7,0:GOTO 79
77 TOP=20-N(1):FOR X=1 TO N(1):HERE(X,0)=TOP+X:HERE(X,1)=1:LOCATE TOP+X,1:PRINT D$(X);:NEXT:LOCATE 1,26:COLOR 4,7:PRINT "TOWERS OF HANOI FOR"N(1)"DISKS":LOCATE 21,1:COLOR 1,0:PRINT STRING$(80,176);:COLOR 7,0
79 HEIGHT(1)=TOP:HEIGHT(2)=20:HEIGHT(3)=20
80 F(1)=1
90 T(1)=3
100 GOSUB 120
110 LOCATE 21,1:PRINT "DONE IN"Z"MOVES"
115 PRINT "DO AGAIN? ( Y/N )";
116 AGAIN$=INKEY$:IF AGAIN$="y" OR AGAIN$="Y" THEN 60 ELSE IF AGAIN$="n" OR AGAIN$="N" THEN END
117 GOTO 116
120 G=G+1
125 REM Remove ' in Line 130 and 250 to show depth of recursion
130 'LOCATE 3,26+G:PRINT SPACE$(22):LOCATE 3,26:COLOR 1,0:PRINT LEFT$(P$,G):COLOR 7,0
140 IF N(G)=0 THEN 240
150 N(G+1)=N(G)-1
160 F(G+1)=F(G)
170 T(G+1)=6-F(G)-T(G)
180 GOSUB 120
190 Z=Z+1:IF PRINTER$="y" OR P$="Y" THEN LPRINT TAB(19);USING"##   DISK No. # FROM # TO #";Z,N(G),F(G),T(G)
195 GOSUB 1000
200 N(G+1)=N(G)-1
210 F(G+1)=6-F(G)-T(G)
220 T(G+1)=T(G)
230 GOSUB 120
240 G=G-1
250 'LOCATE 3,26+G:PRINT SPACE$(22):LOCATE 3,26:COLOR 1,0:PRINT LEFT$(P$,G):COLOR 7,0
260 RETURN
1000 IF T(G)=1 THEN COL=1 ELSE IF T(G)=2 THEN COL=27 ELSE IF T(G)=3 THEN COL=54
1005 IF TOG=1 THEN GOTO 1015
1010 LOCATE HERE(N(G),0),HERE(N(G),1):COLOR 7,0:PRINT EZ$;:HEIGHT(F(G))=HEIGHT(F(G))+1:LOCATE HEIGHT(T(G)),COL:COLOR N(G) MOD 7 + 1,0:PRINT D$(N(G));:COLOR 7,0:GOTO 1020
1015 LOCATE HERE(N(G),0),HERE(N(G),1):PRINT EZ$;:HEIGHT(F(G))=HEIGHT(F(G))+1:LOCATE HEIGHT(T(G)),COL:PRINT D$(N(G));
1020 HERE(N(G),0)=HEIGHT(T(G)):HERE(N(G),1)=COL:HEIGHT(T(G))=HEIGHT(T(G))-1
1100 RETURN
65000 IF TOG=1 THEN TOG=2 ELSE TOG=1
65010 ON TOG GOSUB 65080, 65030
65020 RETURN
65030 REM toggle color graphics
65050 WIDTH 80: DEF SEG=0: A=PEEK(&H410): POKE &H410,(A AND &HCF) OR &H20
65060 SCREEN 1: SCREEN 0:LOCATE ,,1,6,7: SCREEN 0,1,0,0:WIDTH 80
65070 RETURN
65080 REM toggle monochrome display
65100 DEF SEG=0: A=PEEK(&H410): POKE &H410,A OR &H30
65110 WIDTH 80: LOCATE ,,1,12,13:SCREEN 0,0,0
65120 RETURN
```
{% endraw %}

## KEYFLAGS.ASM

{% raw %}
```
TITLE TFR24C70.ASM
PAGE 60 ,132
;
;   This program intercepts the ROM KB interrupt 09H (Tech
;   Manual, A-25, line 1784) and tests every KB entry to see
;   whether CapsLock or NumLock has been toggled.  If CapsLock was
;   toggled it displays the sysbol @ , and if NumLock was toggled
;   it displays the symbol #, both in enhanced video.  The location
;   of the display is determined by the Equates for row and
;   columns respectively for the two flags, and the display
;   format is determined by the equate DF for the attribute.
;   The status is determined from the flag KB_FLAG of the ROM
;   (TM, A-2, line 69 is the location).
;
;   Refer to: PC World, Oct. '83, pg 266.  Does not mix well with
;    Lotus 1-2-3 or Scrollk; with ProKey install after ProKey.
;
;   This version displays flags after every KB use at row 00, col 78.
;
;          ***  Define Constants Used by Program ***
;
KB_DATA EQU     060H    ;8259 Port with KB scancode
KB_CTL  EQU     061H    ;8259 Port with control data for port
ROWCAPS EQU     00      ;Row for Caps Display (0-24)
COLCAPS EQU     78      ;Column for Caps Display (0-79)
ROWNUMS EQU     00      ;Row for Nums display
COLNUMS EQU     79      ;Column for Nums display
DF      EQU     15      ;Normal Intensified Display format
;
;              *********  Macro Section  *********
        IF1
CSR_SET MACRO   ROW,COL ;Sets CSR Pos. on PGE 0
        MOV     DH,ROW  ;Sets row
        MOV     DL,COL  ;Sets col
        MOV     BH,0    ;Sets pge
        MOV     AH,2    ;ROM BIOS VIDEO function
        INT     010H    ;ROM BIOS VIDEO interrupt
        ENDM
CSR_GET MACRO           ;Return CSR Pos. on PGE 0
        MOV     BH,0    ;(DH,DL)=ROW,COL returned
        MOV     AH,3    ;Function in ROM BIOS Video
        INT     010H    ;ROM BIOS VIDEO Interrupt
        ENDM
ROMVIDEO        MACRO   CHR,NO_TIMES,ATTR       ;INT 10,FN.10,Disp.Char.at
        MOV     BH,0    ;Current cursor pos.BH=Page
        MOV     AL,CHR          ;Char. to be displayed
        MOV     CX,NO_TIMES     ;Char. count
        MOV     BL,ATTR ;Screen attribute,7 normal, 15 enhanced
        MOV     AH,9    ;Function call
        INT     10H     ;ROM VIDEO Interrupt
        ENDM            ;MACRO End
        ENDIF
;
DATA    SEGMENT AT 40H  ;ROM DATA, TM, A-2, line 59
        ORG     17H     ;Location in ROM of
KB_FLAG LABEL   BYTE    ;KB_FLAG(see A-2 of Tech.Man.)
DATA    ENDS
;
CSEG    SEGMENT
        ASSUME  CS:CSEG,DS:DATA
;
        ORG     100H
;
; The block of code below directs interrupt 9H to 5CH in Program Prefix
; rather than the usual location in ROM
;
START:  MOV     DX,5CH          ;Set DS:DX to locn 5CH in program prefix
        MOV     AL,9H           ;Set the KB interrupt (9H=9)
        MOV     AH,25H          ;DOS function call for interrupt
        INT     21H             ;DOS interrupt for service
        MOV     DI,DX           ;Move KB routine down so it starts
        MOV     SI,KB_ADDR      ;At locn 5CH in program prefix
        MOV     CX,KB_LNTH      ;This sets count in CX for MOVSB at FINISH
        JMP     FINISH          ;to include just operative code resident.
;
; KB Interrupt routine. Copy beginning of ROM routine to allow easy
; jump to later ROM code.  Copy code from TM, A-25, line 1788(line 1787
; is inserted just before ports are sampled) to line 1808.
;
KB:     PUSH    AX              ;Save registers used
        PUSH    BX
        PUSH    CX
        PUSH    DX
        PUSH    SI
        PUSH    DI
        PUSH    DS
        PUSH    ES
        CLD
        MOV     AX,DATA
        MOV     DS,AX
        STI
        IN      AL,KB_DATA      ;Get key code
        PUSH    AX
        IN      AL,KB_CTL       ;Restore KB
        MOV     AH,AL
        OR      AL,80H
        OUT     KB_CTL,AL
        XCHG    AH,AL
        OUT     KB_CTL,AL
        POP     AX
        MOV     AH,AL           ;Save key code
;
; End of copied ROM code.  Start own code. (The part of ROM code that follows
; this is just that part which handles the KB interrupt 10H, which is what
; the DOS KB interrupts use.)
;
        CMP     AL,0FFH         ;Overrun? Line 1812 of ROM
        JZ      INTERIM         ;Resting place for Near Jump
;          *********  Start of Operable Code  *********
;
; ****  Routine to Test for Caps Lock and Num Lock Toggle  ****
        PUSH    AX              ;Save registers not saved by Video Int.
        PUSH    DI
        PUSH    SI
        MOV     BL,KB_FLAG      ;Status to BL
        AND     BL,60H          ;Sets bits for both on
        CSR_GET                 ;Need to save cursor
        MOV     CS:ROWSAVED,DH  ;Save cursor locations
        MOV     CS:COLSAVED,DL
        CMP     BL,60H          ;See if both on, if not then
        JNE     TRY1            ;to test for CAPS only on
        CSR_SET ROWCAPS,COLCAPS ;both on display
        ROMVIDEO        '@',1,DF
        CSR_SET ROWNUMS,COLNUMS
        ROMVIDEO        '#',1,DF ;both now displayed
        JMP     HOME            ;Exit
INTERIM:JMP     ROM_KB          ;Needed for near JZ above
TRY1:   CMP     BL,40H          ;Is Caps alone on?
        JNE     TRY2            ;If not, test for Nums only
        CSR_SET ROWCAPS,COLCAPS ;Display just Caps only
        ROMVIDEO        '@',1,DF
        CSR_SET ROWNUMS,COLNUMS ;and blanks for nums
        ROMVIDEO        ' ',1,DF
        JMP     HOME            ;Exit
TRY2:   CMP     BL,20H          ;See if just Nums on
        JNE     BOTH_OFF        ;if not, both off
        CSR_SET ROWCAPS,COLCAPS ;Blank for caps
        ROMVIDEO        ' ',1,DF
        CSR_SET ROWNUMS,COLNUMS ;and Nums is on alone here
        ROMVIDEO        '#',1,DF
        JMP     HOME            ;Exit
BOTH_OFF:       CSR_SET ROWCAPS,COLCAPS
        ROMVIDEO        ' ',1,DF ;Blank Caps spaces
        CSR_SET ROWNUMS,COLNUMS  ;Blank Nums spaces
        ROMVIDEO        ' ',1,DF
HOME:   CSR_SET CS:ROWSAVED,CS:COLSAVED
home0:                          ;No change if here, exit
        POP     SI              ;Restore registers
        POP     DI
        POP     AX
;
ROM_KB: MOV     AH,AL
        JMP     FAR PTR ROM_ADR ;To ROM for processing
;
FINISH: REP     MOVSB
        MOV     DX,DI           ;End program but leave KB resident
        INT     27H             ;DOS call for stay resident
;
; *******  Memory for CS must go here and be addressed CS:  *********
;
ROWSAVED        DB      ?       ;Row position from DH
COLSAVED        DB      ?       ;Col position from DL
;
KB_END:
;
CSEG    ENDS
;
ROM     SEGMENT AT 0F000H       ;ROM BIOS KB entry points
        ASSUME  CS:ROM
        ORG     0E9A8H          ;This is line 1812 on A-26 of T.M.
ROM_ADR LABEL   FAR             ;Perform all but initial processing
ROM     ENDS
;
KB_ADDR EQU     (OFFSET KB-OFFSET START)+100H
KB_LNTH EQU     (OFFSET KB_END-OFFSET KB)
;
        END     START
```
{% endraw %}

## LANDER.BAS

{% raw %}
```bas
130 KEY OFF:CLS:SCREEN 1:COLOR 1,0:CL%=2
140 DIM CUR%(20)
150 GOSUB 430
160 FUEL=25:GRAVITY=.18:TINC=.15
170 WHILE CY < 180
175  COLOR ,CL%
180  TIME=TIME+TINC
185  LOCATE 24,15:PRINT USING "###.#";TIME;
187  LOCATE 24,29:PRINT USING "###.#";FUEL;
190  PUT (CX-4,CY-4),CUR%,XOR
200  CX=CX+VX: CY=CY+VY
210  VX=VX+AX: VY=VY+AY+GRAVITY*TINC
220  AX=0: AY=0: VX=VX+(-SGN(VX)*.05*TINC*ABS(VX))
230  PUT (CX-4,CY-4),CUR%,XOR
240  GOSUB 320
250 WEND
260 LOCATE 7,13:PRINT "Time ";:PRINT USING "###.#";TIME;
270 LOCATE 9,13: IF CX>165 OR CX<155 THEN PRINT "Off target" ELSE PRINT "GREAT"
280 LOCATE 11,13
290 IF VY>2 THEN PRINT "Enormous ";
300 IF VY>1 THEN PRINT "Crash!!!"
305 END
310 SCREEN 0:WIDTH 80:COLOR 7,1,1:      CLS: END
320 '---------------GET INPUT KEY ---- APPLY THRUST
330 A$=INKEY$: IF A$="" THEN RETURN
340 IF LEN(A$)<>2 THEN RETURN ELSE A = ASC(RIGHT$(A$,1))
350 FUEL=FUEL-1*TINC
360 IF FUEL<=0 THEN SOUND 150,3: RETURN
370 IF FUEL<5 THEN SOUND 1100,1: SOUND 1400,2:CL%=3
380 IF A = 72 THEN AY=AY-1*TINC: GOTO 420
390 IF A = 80 THEN AY=AY+1*TINC: GOTO 420
400 IF A = 75 THEN AX=AX-1*TINC: GOTO 420
410 IF A = 77 THEN AX=AX+1*TINC: GOTO 420
420 RETURN
430 '----------INITIALIZE---------
440 LINE (0,4)-(8,4): LINE (4,0)-(4,8): CIRCLE (4,4),4
450 GET (0,0)-(8,8), CUR%: CX=4: CY=4
460 LINE (0,180)-(319,185),,B
470 LINE (155,175)-(155,185)
480 LINE (165,175)-(165,185)
485 LOCATE 24,10:PRINT "Time          Fuel";
490 RETURN
```
{% endraw %}

## MENU2.BAS

{% raw %}
```bas
1 KEY(2) ON:ON KEY(2) GOSUB 65140
10 DIM PROG$(64)
20 SCREEN 0:KEY OFF:KEY 1,"run"+CHR$(34)+"MENU2"+CHR$(13)
30 CLS:WIDTH 80:COLOR 0,0:FILES "*.bas"
40 FOR DR%=2 TO 24
50 FOR DC%=0 TO 65 STEP 18
60 IF CHR$(SCREEN(DR%,DC%+1)) = " " THEN 130
70 AR%=AR%+1
80 FOR L%=1 TO 8
90 PROG$(AR%)=PROG$(AR%)+CHR$(SCREEN(DR%,DC%+L%))
100 NEXT L%
110 NEXT DC%
120 NEXT DR%
130 P%=0:I%=0:CLS:WIDTH 40:LOCATE 1,4:COLOR 14,0
135 PRINT "BASIC programs on this diskette:"
140 FOR DC%=1 TO 27 STEP 13
150 FOR DR%=3 TO 23
160 I%=I%+1
170 IF PROG$(I%)="" THEN 200 ELSE LOCATE DR%,DC%
175 COLOR 0,7:PRINT USING "##";I%;
176 COLOR 7,0:PRINT " ";PROG$(I%)
180 NEXT DR%
190 NEXT DC%
200 LOCATE 25,1:INPUT "Enter number of program desired: ",P%
210 IF P%< 1 OR P%>= I% THEN 130
220 WIDTH 80:CLS:PRINT "Press F1 to return to menu when finished":RUN PROG$(P%)
65130 E%=ERR:RESUME NEXT
65140 ON ERROR GOTO 65130
65145 'RUN"menu
65150 'IF E%<>71 THEN RUN"control
65160 RUN"A:TRANSFER
65170 SYSTEM
```
{% endraw %}

## NWCLOCK.BAS

{% raw %}
```bas
0 '************************************************************
1 '*                                                          *
2 '*   Author:     Mike J. Sullivan  , Houston, Tx.           *
3 '*               12402 Campos Dr. ,Houston, Tx. 77065       *
4 '*   Date:       09/05/82                                   *
5 '*   Purpose:    Display your Basic Programs                *
6 '*   Title:      Digital Clock                              *
7 '*   Comment(s): enjoy                                      *
8 '*                                                          *
9 '************************************************************
10 KEY OFF:WIDTH 80
11 ODD = 0
12 Q15$ = "MbMLP14O4EO4CDO3G"
13 Q30$ = "MbMLP14O3GO4DEC"
15 CHIME = 0
20 LOCATE ,,0
21 '
22 ' Day of week / Date rollover for Mike Sullivan's digital clock
23 ' This code was merged into the original program already..
24 '      Day of week will be displayed;
25 ' day and date will change following 23:59:59.
26 ' You can also use the perpetual calendar routine in other programs.
27 ' Clayton Gaskill, Charlotte, NC
28 '       BASICA required!!!!!!!!!!
30 CLS
31 ' Tick and Tock for Mike Sullivan's Digital Clock. This merge was placed
32 ' into his clock to add tick,tock and Big Ben's chimes
33 ' Willis Frick, 8359 Amber Rose Lane, Rosemead, Ca. 91770,213 572 2738
35 ' The tick, tock and chimes will work with/without Clayton Gaskill
36 ' I have added all the enhancements to sullivans clock from these sources
37 ' Rich  Schinnell Capital PC Software Exchange, 1982 November 21
40 LOCATE 2,19:PRINT "M I K E   S U L L I V A N ' S  --- I B M ---"
50 LOCATE 4,19:PRINT "          DIGITAL  CLOCK   1 . 1 0  "
60 GOSUB 4060
240 DIM ONE$(7),TWO$(7),THR$(7),FOU$(7),FIV$(7)
250 DIM SIX$(7),SEV$(7),EIG$(7),NIN$(7),ZER$(7),TEMP$(7)
260 XH1=0.1:XH2=0.1:XM1=0.1:XM2=0.2:XS1=0.1:XS2=0.1
270 COL$(1)="  "
280 COL$(2)="  "
290 COL$(3)=STRING$(2,CHR$(219))
300 COL$(4)="  "
310 COL$(5)=STRING$(2,CHR$(219))
320 COL$(6)="  "
330 COL$(7)="  "
340 ONE$(1)="  "+STRING$(3,CHR$(219))+"   "
350 ONE$(2)="   "+CHR$(219)+CHR$(219)+"   "
360 ONE$(3)="   "+CHR$(219)+CHR$(219)+"   "
370 ONE$(4)="   "+CHR$(219)+CHR$(219)+"   "
380 ONE$(5)="   "+CHR$(219)+CHR$(219)+"   "
390 ONE$(6)="   "+CHR$(219)+CHR$(219)+"   "
400 ONE$(7)=" "+STRING$(6,CHR$(219))+" "
410 TWO$(1)=STRING$(8,CHR$(219))
420 TWO$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
430 TWO$(3)="      "+CHR$(219)+CHR$(219)
440 TWO$(4)=STRING$(8,CHR$(219))
450 TWO$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
460 TWO$(5)=CHR$(219)+CHR$(219)+"      "
470 TWO$(7)=STRING$(8,CHR$(219))
480 THR$(1)=STRING$(8,CHR$(219))
490 THR$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
500 THR$(3)="      "+CHR$(219)+CHR$(219)
510 THR$(4)=STRING$(8,CHR$(219))
520 THR$(5)="      "+CHR$(219)+CHR$(219)
530 THR$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
540 THR$(7)=STRING$(8,CHR$(219))
550 FOU$(1)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
560 FOU$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
570 FOU$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
580 FOU$(4)=STRING$(8,CHR$(219))
590 FOU$(6)="      "+CHR$(219)+CHR$(219)
600 FOU$(5)="      "+CHR$(219)+CHR$(219)
610 FOU$(7)="      "+CHR$(219)+CHR$(219)
620 FIV$(1)=STRING$(8,CHR$(219))
630 FIV$(2)=CHR$(219)+CHR$(219)+"      "
640 FIV$(3)=CHR$(219)+CHR$(219)+"      "
650 FIV$(4)=STRING$(8,CHR$(219))
660 FIV$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
670 FIV$(5)="      "+CHR$(219)+CHR$(219)
680 FIV$(7)=STRING$(8,CHR$(219))
690 SIX$(1)=STRING$(8,CHR$(219))
700 SIX$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
710 SIX$(3)=CHR$(219)+CHR$(219)+"      "
720 SIX$(4)=STRING$(8,CHR$(219))
730 SIX$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
740 SIX$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
750 SIX$(7)=STRING$(8,CHR$(219))
760 SEV$(1)=STRING$(8,CHR$(219))
770 SEV$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
780 SEV$(3)="      "+CHR$(219)+CHR$(219)
790 SEV$(4)="      "+CHR$(219)+CHR$(219)
800 SEV$(5)="      "+CHR$(219)+CHR$(219)
810 SEV$(6)="      "+CHR$(219)+CHR$(219)
820 SEV$(7)="      "+CHR$(219)+CHR$(219)
830 EIG$(1)=STRING$(8,CHR$(219))
840 EIG$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
850 EIG$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
860 EIG$(4)=STRING$(8,CHR$(219))
870 EIG$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
880 EIG$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
890 EIG$(7)=STRING$(8,CHR$(219))
900 NIN$(1)=STRING$(8,CHR$(219))
910 NIN$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
920 NIN$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
930 NIN$(4)=CHR$(219)+STRING$(7,CHR$(219))
940 NIN$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
950 NIN$(5)="      "+CHR$(219)+CHR$(219)
960 NIN$(7)=STRING$(8,CHR$(219))
970 ZER$(1)=STRING$(8,CHR$(219))
980 ZER$(2)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
990 ZER$(3)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1000 ZER$(4)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1010 ZER$(5)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1020 ZER$(6)=CHR$(219)+CHR$(219)+"    "+CHR$(219)+CHR$(219)
1030 ZER$(7)=CHR$(219)+STRING$(7,CHR$(219))
1040 H1=VAL(MID$(TIME$,1,1))
1050 H2=VAL(MID$(TIME$,2,1))
1060 M1=VAL(MID$(TIME$,4,1))
1070 M2=VAL(MID$(TIME$,5,1))
1080 S1=VAL(MID$(TIME$,7,1))
1090 S2=VAL(MID$(TIME$,8,1))
1095 XDA$=MID$(DATE$,4,2)
1100 Z$=INKEY$:IF Z$="" THEN 1101 ELSE END
1101 MIN = VAL(MID$(TIME$,4,2))
1102 HOUR = VAL(MID$(TIME$,1,2))
1103 IF HOUR = 0 THEN HOUR = 12
1104 IF CHIME = 1 AND MIN = 0 THEN GOSUB 10090
1105 IF CHIME = 1 AND MIN = 15 THEN GOSUB 10090
1106 IF CHIME = 1 AND MIN = 30 THEN GOSUB 10090
1107 IF CHIME = 1 AND MIN = 45 THEN GOSUB 10090
1108 IF (MIN = 14) OR (MIN = 29) OR (MIN = 44) OR (MIN = 59) OR (MIN = 16) OR (MIN = 31) OR (MIN = 46) OR (MIN = 1) THEN CHIME = 1
1110 IF S2=XS2 THEN 1040
1111 GOSUB 10000
1115 IF DA$<>XDA$ THEN GOSUB 4060
1120 IF H1=0 THEN 1130 ELSE 1170
1130 IF H1=XH1 THEN 1450 ELSE XH1=H1
1140 FOR I=1 TO 7
1150 TEMP$(I)=ZER$(I):NEXT I
1160 GOSUB 3100:GOTO 1450
1170 IF H1=XH1 THEN 1450 ELSE XH1=H1
1180 ON H1 GOTO 1190,1220,1250,1280,1310,1340,1370,1400,1430
1190 FOR I=1 TO 7
1200 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3100
1210 GOTO 1450
1220 FOR I=1 TO 7
1230 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3100
1240 GOTO 1450
1250 FOR I=1 TO 7
1260 TEMP$(I)=THR$(I):NEXT I:GOSUB 3100
1270 GOTO 1450
1280 FOR I=1 TO 7
1290 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3100
1300 GOTO 1450
1310 FOR I=1 TO 7
1320 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3100
1330 GOTO 1450
1340 FOR I=1 TO 7
1350 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3100
1360 GOTO 1450
1370 FOR I=1 TO 7
1380 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3100
1390 GOTO 1450
1400 FOR I=1 TO 7
1410 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3100
1420 GOTO 1450
1430 FOR I=1 TO 7
1440 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3100
1450 IF H2=0 THEN 1460 ELSE 1500
1460 IF H2=XH2 THEN 1790 ELSE XH2=H2
1470 FOR I=1 TO 7
1480 TEMP$(I)=ZER$(I):NEXT I
1490 GOSUB 3140:GOTO 1790
1500 IF H2=XH2 THEN 1790 ELSE XH2=H2
1510 ON H2 GOTO 1520,1550,1580,1610,1640,1670,1700,1730,1760
1520 FOR I=1 TO 7
1530 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3140
1540 GOTO 1790
1550 FOR I=1 TO 7
1560 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3140
1570 GOTO 1790
1580 FOR I=1 TO 7
1590 TEMP$(I)=THR$(I):NEXT I:GOSUB 3140
1600 GOTO 1790
1610 FOR I=1 TO 7
1620 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3140
1630 GOTO 1790
1640 FOR I=1 TO 7
1650 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3140
1660 GOTO 1790
1670 FOR I=1 TO 7
1680 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3140
1690 GOTO 1790
1700 FOR I=1 TO 7
1710 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3140
1720 GOTO 1790
1730 FOR I=1 TO 7
1740 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3140
1750 GOTO 1790
1760 FOR I=1 TO 7
1770 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3140
1780 GOTO 3090
1790 IF M1=0 THEN 1800 ELSE 1840
1800 IF M1=XM1 THEN 2120 ELSE XM1=M1
1810 FOR I=1 TO 7
1820 TEMP$(I)=ZER$(I):NEXT I
1830 GOSUB 3210:GOTO 2120
1840 IF M1=XM1 THEN 2120 ELSE XM1=M1
1850 ON M1 GOTO 1860,1890,1920,1950,1980,2010,2040,2070,2100
1860 FOR I=1 TO 7
1870 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3210
1880 GOTO 2120
1890 FOR I=1 TO 7
1900 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3210
1910 GOTO 2120
1920 FOR I=1 TO 7
1930 TEMP$(I)=THR$(I):NEXT I:GOSUB 3210
1940 GOTO 2120
1950 FOR I=1 TO 7
1960 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3210
1970 GOTO 2120
1980 FOR I=1 TO 7
1990 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3210
2000 GOTO 2120
2010 FOR I=1 TO 7
2020 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3210
2030 GOTO 2120
2040 FOR I=1 TO 7
2050 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3210
2060 GOTO 2120
2070 FOR I=1 TO 7
2080 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3210
2090 GOTO 2120
2100 FOR I=1 TO 7
2110 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3210
2120 IF M2=0 THEN 2130 ELSE 2170
2130 IF M2=XM2 THEN 2450 ELSE XM2=M2
2140 FOR I=1 TO 7
2150 TEMP$(I)=ZER$(I):NEXT I
2160 GOSUB 3250:GOTO 2450
2170 IF M2=XM2 THEN 2450 ELSE XM2=M2
2180 ON M2 GOTO 2190,2220,2250,2280,2310,2340,2370,2400,2430
2190 FOR I=1 TO 7
2200 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3250
2210 GOTO 2450
2220 FOR I=1 TO 7
2230 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3250
2240 GOTO 2450
2250 FOR I=1 TO 7
2260 TEMP$(I)=THR$(I):NEXT I:GOSUB 3250
2270 GOTO 2450
2280 FOR I=1 TO 7
2290 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3250
2300 GOTO 2450
2310 FOR I=1 TO 7
2320 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3250
2330 GOTO 2450
2340 FOR I=1 TO 7
2350 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3250
2360 GOTO 2450
2370 FOR I=1 TO 7
2380 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3250
2390 GOTO 2450
2400 FOR I=1 TO 7
2410 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3250
2420 GOTO 2450
2430 FOR I=1 TO 7
2440 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3250
2450 IF S1=0 THEN 2460 ELSE 2500
2460 IF S1=XS1 THEN 2780 ELSE XS1=S1
2470 FOR I=1 TO 7
2480 TEMP$(I)=ZER$(I):NEXT I
2490 GOSUB 3320:GOTO 2780
2500 IF S1=XS1 THEN 2780 ELSE XS1=S1
2510 ON S1 GOTO 2520,2550,2580,2610,2640,2670,2700,2730,2760
2520 FOR I=1 TO 7
2530 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3320
2540 GOTO 2780
2550 FOR I=1 TO 7
2560 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3320
2570 GOTO 2780
2580 FOR I=1 TO 7
2590 TEMP$(I)=THR$(I):NEXT I:GOSUB 3320
2600 GOTO 2780
2610 FOR I=1 TO 7
2620 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3320
2630 GOTO 2780
2640 FOR I=1 TO 7
2650 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3320
2660 GOTO 2780
2670 FOR I=1 TO 7
2680 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3320
2690 GOTO 2780
2700 FOR I=1 TO 7
2710 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3320
2720 GOTO 2780
2730 FOR I=1 TO 7
2740 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3320
2750 GOTO 2780
2760 FOR I=1 TO 7
2770 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3320
2780 IF S2=0 THEN 2790 ELSE 2820
2790 FOR I=1 TO 7
2800 TEMP$(I)=ZER$(I):NEXT I
2810 GOSUB 3360:GOTO 3090
2820 XS2=S2:ON S2 GOTO 2830,2860,2890,2920,2950,2980,3010,3040,3070
2830 FOR I=1 TO 7
2840 TEMP$(I)=ONE$(I):NEXT I:GOSUB 3360
2850 GOTO 3090
2860 FOR I=1 TO 7
2870 TEMP$(I)=TWO$(I):NEXT I:GOSUB 3360
2880 GOTO 3090
2890 FOR I=1 TO 7
2900 TEMP$(I)=THR$(I):NEXT I:GOSUB 3360
2910 GOTO 3090
2920 FOR I=1 TO 7
2930 TEMP$(I)=FOU$(I):NEXT I:GOSUB 3360
2940 GOTO 3090
2950 FOR I=1 TO 7
2960 TEMP$(I)=FIV$(I):NEXT I:GOSUB 3360
2970 GOTO 3090
2980 FOR I=1 TO 7
2990 TEMP$(I)=SIX$(I):NEXT I:GOSUB 3360
3000 GOTO 3090
3010 FOR I=1 TO 7
3020 TEMP$(I)=SEV$(I):NEXT I:GOSUB 3360
3030 GOTO 3090
3040 FOR I=1 TO 7
3050 TEMP$(I)=EIG$(I):NEXT I:GOSUB 3360
3060 GOTO 3090
3070 FOR I=1 TO 7
3080 TEMP$(I)=NIN$(I):NEXT I:GOSUB 3360
3090 XS2=S2:GOTO 1040
3100 FOR I=1 TO 7
3110 LOCATE 9+I,5:PRINT TEMP$(I)
3120 NEXT I
3130 RETURN
3140 FOR I=1 TO 7
3150 LOCATE 9+I,14:PRINT TEMP$(I)
3160 NEXT I
3170 FOR I=1 TO 7
3180 LOCATE 9+I,26:PRINT COL$(I)
3190 NEXT I
3200 RETURN
3210 FOR I=1 TO 7
3220 LOCATE 9+I,32:PRINT TEMP$(I)
3230 NEXT I
3240 RETURN
3250 FOR I=1 TO 7
3260 LOCATE 9+I,42:PRINT TEMP$(I)
3270 NEXT I
3280 FOR I=1 TO 7
3290 LOCATE 9+I,54:PRINT COL$(I)
3300 NEXT I
3310 RETURN
3320 FOR I=1 TO 7
3330 LOCATE 9+I,60:PRINT TEMP$(I)
3340 NEXT I
3350 RETURN
3360 FOR I=1 TO 7
3370 LOCATE 9+I,70:PRINT TEMP$(I)
3380 NEXT I
3390 RETURN
4060 MO$=MID$(DATE$,1,2)
4070 DA$=MID$(DATE$,4,2)
4080 YR$=MID$(DATE$,9,2)
4081 YR4$=MID$(DATE$,7,4)
4090 MO=VAL(MO$)
4091 YR=VAL(YR$)
4092 YR4=VAL(YR4$)
4100 ON MO GOTO 4110,4120,4130,4140,4150,4160,4170,4180,4190,4200,4210,4220
4110 MO$="JANUARY":GOTO 4230
4120 MO$="FEBRUARY":GOTO 4230
4130 MO$="MARCH":GOTO 4230
4140 MO$="APRIL":GOTO 4230
4150 MO$="MAY":GOTO 4230
4160 MO$="JUNE":GOTO 4230
4170 MO$="JULY":GOTO 4230
4180 MO$="AUGUST":GOTO 4230
4190 MO$="SEPTEMBER":GOTO 4230
4200 MO$="OCTOBER":GOTO 4230
4210 MO$="NOVEMBER":GOTO 4230
4220 MO$="DECEMBER":GOTO 4230
4230 YEAR%=YR4
4233 MONTH%=MO
4235 DAY%=VAL(DA$)
4240 IF MONTH%=1 OR MONTH%=2 THEN 4250 ELSE 4270
4250 YEAR%=YEAR%-1
4260 MONTH%=MONTH%+12
4270 DOW.K%=DAY%+YEAR%+MONTH%*2+YEAR%\4+YEAR%\400+(MONTH%+1)*3\5+2-YEAR%\100
4330 DOW%=DOW.K% MOD 7
4360 IF DOW%=0 OR DOW%=1 THEN DOW%=DOW%+7
4370 DOW%=DOW%-1
4500 ON DOW% GOTO 4510,4520,4530,4540,4550,4560,4570
4510 DOW$="MONDAY":GOTO 4580
4520 DOW$="TUESDAY":GOTO 4580
4530 DOW$="WEDNESDAY":GOTO 4580
4540 DOW$="THURSDAY":GOTO 4580
4550 DOW$="FRIDAY":GOTO 4580
4560 DOW$="SATURDAY":GOTO 4580
4570 DOW$="SUNDAY":GOTO 4580
4580 LOCATE 22,29:PRINT DOW$;", ";MO$;" ";DA$;", ";YR4$;"     "
4590 RETURN
10000 IF TICKOFF < 0 THEN TICKOFF = TICKOFF + 1:RETURN
10003 IF ODD = 1 THEN SOUND 2000,1:ODD = 0:RETURN
10010 SOUND 5000,1:ODD = 1:RETURN
10090 CHIME = 0
10095 ODD = 0
10100 IF MIN = 15 THEN PLAY Q15$:TICKOFF = -2:RETURN
10110 IF MIN = 30 THEN PLAY Q15$+Q30$:TICKOFF = -5:RETURN
10120 IF MIN = 45 THEN PLAY Q15$+Q30$+Q15$:TICKOFF = -7:RETURN
10130 IF MIN = 0 THEN PLAY Q15$+Q30$+Q15$+Q30$:TICKOFF = -9 + -1*HOUR
10135 PLAY "mbP2"
10140 FOR II = 1 TO HOUR
10150 PLAY"MBO3CN0"
10160 NEXT II
10170 RETURN
```
{% endraw %}

## PCGLOBE.BAS

{% raw %}
```bas
10 SCREEN 1                           'PC WORLD
20 CLS:KEY  OFF                       'Karl Koessel
30 PRINT "                            Perspective Image of Rotated Globe"
40 DEFINT L,R,X-Z
50 CX=CY:CZ=SX:SY=SZ:I=J:R=A:B=C:A1=B2:C1=C2     'Order variables to optimize
60 A3=B3:X=Y:XC=YC:LX=LY:B$=C$:RC=PI:LZ=ZS:Q=DR  'speed,about 3% faster
70 DIM RC(11)
80 FOR X=1 TO 11                             'Prepare an array holding the
90     RC(X)=(X-1) MOD 3 +1                  'colors of parallels; pattern
100    IF X>6 THEN RC(X)=(5-RC(X))MOD 3 +1   'reverses after equator which
110 NEXT                                     'is brown or white(palette 0 or 1)
120 PI=3.14159265#
130 CF=PI/180.#
140 PRINT
150 INPUT "Want to see a sample run (y/n)";S$
160 S$=LEFT$(S$,1)
170 IF S$="y" OR S$="Y" THEN GOSUB 880:GOTO 380
180 PRINT
190 PRINT "enter screen location of center of globe";
200 INPUT "(e.g. 160,100)              ";XC,YC
210 PRINT
220 PRINT "Enter relative coordinates of observer:";
230 PRINT "points left(-)/right(+) of x, below(-)/";
240 PRINT "above(+)y, and distance from the screen ";
250 INPUT "(e.g.-9,0,456)        ";XOBS,YOBS,ZOBS
260 PRINT
270 PRINT "Enter parallel, meridian,& images's tilt";
280 INPUT "(e.g. 37,-123,23) ";XROT,YROT,ZROT
290 PRINT
300 PRINT "Enter sphere's radius"
310 INPUT "(e.g.100)                    ";R
320 PRINT
330 PRINT "Enter background color and palette"
340 INPUT "(e.g.1,1)                    ";BCK,PAL
350 PRINT
360 PRINT "Enter this screen's aspect ratio"
370 INPUT "(e.g.1.21875)                ";ASP
380 CX=COS(CF*XROT+ATN(YOBS/ZOBS)):SX=SIN(CF*XROT+ATN(YOBS/ZOBS))
390 CY=COS(CF*YROT+ATN(XOBS/ZOBS)):SY=SIN(CF*YROT+ATN(XOBS/ZOBS))
400 CZ=COS(CF*ZROT):SZ=SIN(CF*ZROT)
410 ZOBS=SQR(XOBS^2+ZOBS^2)        'Observer's distance from the globe's center
420 ZS=R^2/ZOBS                    'Can't see if point's Z coordinate < ZS
430 CLS:COLOR BCK,PAL
440 FOR I=0 TO 3 STEP PI/12         '24 lines of longitude around the poles
450      RC=(I*12/PI+2) MOD 3+1     'Prime meridian color=equator color
460      C$=STR$(RC)
470      FOR  J=0 TO 2.0001*PI STEP PI/24   'Step along the meridian circle
480             A=R*SIN(I)*SIN(J)
490             B=R*COS(J)
500             C=R*COS(I)*SIN(J)
510             GOSUB 710
520             GOSUB 810
530      NEXT
540 NEXT
550 FOR  I=PI/12 TO 11*PI/12 STEP PI/12     '11 lines of latitude between poles
560      RC=RC(I*12/PI)
570      C$=STR$(RC)
580      FOR  J=0 TO 2.0001*PI STEP PI/24    'Step along the parallel circle
590             A=R*SIN(I)*SIN(J)
600             B=R*COS(I)
610             C=R*SIN(I)*COS(J)
620             GOSUB 710
630             GOSUB 810
640      NEXT
650 NEXT
660 LOCATE 1,1:PRINT "PC WORLD"
670 LINE (32,1)-(38,1),0:LINE(32,2)-(38,2),3
680 LINE (32,3)-(38,3),0:LINE (32,4)-(38,4),3
690 LINE (32,5)-(38,5),0
700 GOSUB 1160:GOTO 1190
710 A1=A*CY-C*SY                'Turn requested meridian to observer at 0,0,0
720 C1=A*SY+C*CY                '(B1=B, so B is used below for B1)
730 B2=B*CX-C1*SX               'Turn requested parllel to observer at 0,0,0
740 C2=B*SX+C1*CX               '(A2=A1, so A1 is used below for A2
750 A3=A1*CZ-B2*SZ              'Turn image on axis perpendicular to screen
760 B3=A1*SZ+B2*CZ              '(C3=C2, so C2 is used below for C3)
770 DR=C2/(ZOBS-C2)+1           'Distance ratio for computing perspective
780 X=INT(A3*DR*ASP+XC)         'Screeen's x (with perspective & aspect ratios)
790 Y=INT(B3*-DR+YC)            'Screen's y (with perpspective, direction ratio)
800 RETURN                      '(z=c3=c2, so c2 is used below for z)
810 IF C2<ZS OR LZ<ZS THEN  B$="bc":GOTO  840  'insert ' before IF to draw back
820 Q=(X<0)+(X>319)+(Y<0)+(Y>199)+(LX<0)+(LX>319)                                     +(LY<0)+(LY>199)                      'Off screen?
830 IF Q+(J=0) THEN B$="bc" ELSE B$="c"     'Draw clear if Q or J=0 (new circle
840 'LX=X:LY=Y                               'lx,ly,lz are x,y,z of last reference point
850 LZ=C2
860 DRAW B$ + C$ + "M" + STR$(X) + "," + STR$(Y)
870 RETURN
880 XC=160:YC=100                          'Data for sample run
890 XOBS=-9:YOBS=0:ZOBS=456
900 XROT=37:YROT=-123:ZROT=23
910 R=100
920 BCK=0:PAL=1
930 ASP=1.21875
940 LOCATE 5,1                                      'Screen for sample run
950 PRINT"Enter screen location of center of globe";
960 PRINT "(e.g. 160,100)                  ?";XC","YC
970 PRINT
980 PRINT "Enter relative coordinates of observer:";
990 PRINT "points left(-)/right(+)of x, below(-)/"
1000 PRINT "above(+)y, and distance from the screen";
1010 PRINT "(e.g. -9,0,456)          ?";XOBS","YOBS","ZOBS
1020 PRINT
1030 PRINT "ENter parallel, meridian,& image's tilt";
1040 PRINT "(e.g.37,-123,23)         ?";XROT","YROT","ZROT
1050 PRINT
1060 PRINT "Enter sphere's radius"
1070 PRINT "(e.g. 100)               ?";R
1080 PRINT
1090 PRINT "Enter background color and palette"
1100 PRINT "(e.g.1,1)                ?";BCK","PAL
1110 PRINT
1120 PRINT "Enter this screen's aspect ratio"
1130 PRINT "(e.g.1.21875)            ?";ASP
1140 LOCATE 25,1
1150 PRINT "hit any key to continue";
1160 IF INKEY$>""THEN 1160
1170 IF INKEY$=""THEN 1170
1180 RETURN
1190 SCREEN 0,0,0,0:KEY  ON
1200 END
```
{% endraw %}

## STARMAP.BAS

{% raw %}
```bas
10 DEF SEG=&H40:POKE &H17,(PEEK(&H17)AND &HFFBF)+64
20 KEY OFF:CLS:WIDTH 40
30 LOCATE 2,15:PRINT"STAR MAPS":LOCATE 3,15:PRINT"---------"
40 LOCATE 5,4:PRINT"Converted by Allan & Andrew Lee"
50 PRINT::PRINT:INPUT"What is your latitude?-->",LA
60 IF LA>90 OR LA<-90 THEN LA=41
70 PRINT:PRINT:PRINT"   To accent any constellation type its":PRINT:INPUT"first three letters -->",E$
80 PRINT:PRINT:PRINT"    To accent a star-type it's first":PRINT:PRINT"three letters.  Type <SUN> to accent the":INPUT"solar system -->",C$
90 C$=RIGHT$(C$,3)
100 CLS:PRINT"   After chart is displayed hit space":PRINT:PRINT"bar to advance one hour, <E> to draw":PRINT:PRINT"celestial equator, <D> to enter new date":PRINT"or <Q> to quit."
110 PRINT:PRINT:INPUT"   Date (MM,DD,YY (82-85)) -->",M,D,YY
120 IF M<0 OR M>12 THEN 110
130 IF D<0 OR D>31 THEN 110
140 PRINT:PRINT:PRINT"   Chart time-use standard time and":PRINT:INPUT"24 hour format to nearest hour.-->",H
150 H=INT(H):DY=0
160 IF H<0 OR H>24 THEN 140
170 DATA 0,31,28,31,30,31,30,31,31,30,31,30,31,-99
180 FOR J=1 TO M:READ DD:DY=DY+DD:NEXT
190 READ Z
200 IF Z=-99 THEN GOTO 220
210 GOTO 190
220 DY=DY+D
230 SCREEN 1:CLS
240 DATA ERI,ACH,1.6,-57
250 DATA UMA,Z,10.8,61.8
260 DATA UMA,Z,10.8,57
270 DATA UMA,Z,11.7,54
280 DATA UMA,Z,12.1,57
290 DATA CAS,Z,.6,56.4
300 DATA CEP,Z,21,62.5
310 DATA GRU,Z,22.6,-47
320 DATA AUR,Z,5.9,45
330 DATA CMA,Z,6.8,-26.8
340 DATA CRU,ACR,12.4,-63
350 DATA UMA,Z,12.7,55
360 DATA UMA,Z,13.3,53
370 DATA UMA,Z,13.6,50
380 DATA TAU,ALD,4.6,16
390 DATA AQU,ALT,19.8,9
400 DATA SCO,ANT,16.5,-26
410 DATA BOO,ARC,14.2,19
420 DATA CRU,BEC,12.7,-60
430 DATA ORI,BET,5.9,7
440 DATA CAR,CAN,6.4,-63
450 DATA AUG,CAP,5.2,46
460 DATA CYG,DEN,28.7,45
470 DATA FAU,FOM,22.9,-30
480 DATA CNE,HAD,14,-60
490 DATA GEM,POL,7.7,28
500 DATA CMI,PRO,7.6,5
510 DATA LEO,REG,10.1,12
520 DATA ORI,RIG,5.3,-8
530 DATA CEN,RIG,14.6,-61
540 DATA CMA,"STR",6.7,-17
550 DATA VIR,SPI,13.4,-11
560 DATA LYR,VEG,18.6,39
570 DATA PEG,Z,.1,29
580 DATA PEG,Z,.1,15
590 DATA PEG,Z,23,29
600 DATA PEG,Z,23,15
610 DATA UMI,Z,1,90
620 DATA UMI,Z,14.7,74
630 DATA PHO,Z,4,-42,CET,Z,.4,-18,"AND",Z,1,35,"AND",Z,2,42,"ARE",Z,2,23,CET,Z,2.3,-3
640 DATA ORI,Z,5.7,-9.6,AUR,Z,5.9,45,CMA,Z,6.3,-18,GEM,Z,6.4,16.4,CMA,Z,6.9,-26,CMA,Z,7.3,-29
650 DATA PER,Z,3,41,PER,Z,3.3,50,ORI,Z,5.4,6.3,TAU,Z,5.4,28.6
660 DATA GEM,Z,7.4,32,PUP,Z,8,-40,VEL,Z,8.1,-47
670 DATA HYD,Z,9.3,-8.6,LEO,Z,10.1,20,LEO,Z,11.8,14.7,CRU,Z,12.4,-57,CEN,Z,12.7,-49,CEN,Z,14.6,27
680 DATA CEN,Z,14.1,-36.2,CEN,Z,14.5,-42,LUP,Z,14.6,-47,BOO,Z,14.6,27
690 DATA CBO,Z,15.5,26.3,SCO,Z,15.9,-22.5,SCO,Z,16.7,-34.2,OPH,Z,17.1,-15.7,SCO,Z,17.5,-37,OPH,Z,17.5,12.5
700 DATA SCO,Z,17.5,-43,SCO,Z,17.6,-39,DRA,Z,17.7,51.5,SAG,Z,18.3,67,SAG,Z,19.2,-26
710 DATA CYG,Z,20,40,PAY,Z,20.4,-56,CYG,Z,20.6,33.9,PEG,Z,21.6,9.7,GRU,Z,22.3,-47
720 DATA PER,Z,3.3,50
730 DATA CAS,Z,.1,58
740 DATA CAS,Z,.5,55
750 DATA CAS,Z,1,60
760 DATA CAS,Z,1.4,58
770 DATA CAS,Z,1.9,62
780 DATA ORI,Z,5.5,0
790 DATA ORI,Z,5.65,-2
800 DATA ORI,Z,5.8,-4
810 DATA XXX,XXX,0,0
820 FOR J=152 TO 168 STEP 4:PSET(J,90):NEXT
830 FOR J=84 TO 98 STEP 4:PSET(160,J):NEXT
840 CIRCLE(160,90),90
850 DRAW"bm34,60r4l4d2r2l2d2r4"
860 DRAW"bm290,60d4e4f4u4"
870 READ F$,B$,A,B
880 IF B$="XXX" THEN 1020
890 A=24-A
900 T=DY/15+H:A=A+T+12:B=ABS(B-90)
910 IF A>24 THEN A=A-24:GOTO 910
920 A=A*15
930 Y=SIN(A/57.296)*B+LA
940 X=160-(COS(A/57.296)*B)
950 IF Y<0 OR Y>190 THEN 870
960 IF X<38 OR X>282 THEN 1010
970 PSET(X,Y)
980 IF B$<>"Z" THEN CIRCLE(X,Y),1
990 IF F$=E$ THEN CIRCLE(X,Y),1
1000 IF B$=C$ THEN CIRCLE(A,B),2
1010 GOTO 870
1020 GOSUB 1290:GOSUB 1140
1030 RESTORE:FOR J=1 TO 14:READ Z:NEXT
1040 IF H>24 THEN CLS:PRINT"Reset, start again.":GOTO 110
1050 I$=INKEY$:IF I$="Q"OR I$="q"THEN CLS:END
1060 IF I$="E"OR I$="e"THEN CIRCLE(160,LA),90,1,,,0.45:GOTO 1040
1070 IF I$="D"OR I$="d"THEN RESTORE:CLS:GOTO 110
1080 IF I$=""THEN 1040
1090 CLS:H=H+1:GOTO 810
1100 IF H=7 OR H=17 THEN DRAW"bm290,150r8m-8,+12"
1110 IF H=8 OR H=18 THEN DRAW"bm290,150br4r2f2d1g2f3d2g2L2u2e3nr2h2u1e2"
1120 IF H=9 OR H=19 THEN DRAW"bm290,150br2r3f2d8g2l3h2bu6u2e2bd6nh2r3e2"
1130 IF H=10 OR H=20 THEN DRAW"bm290,150br2r3f2d8g2l3h2u8e2"
1140 IF H>24 THEN H=N-24:DY=DY+1
1150 IF H=1 OR H=11 OR H=21 THEN DRAW"bm290,150d12"
1160 IF H=2 OR H=12 OR H=22 THEN DRAW"bm290,152E2R2F2D1G7D2R7"
1170 IF H=3 OR H=13 OR H=23 THEN DRAW"bm290,152E2r3F2D2G2NL3F2D2G2L3H2
1180 IF H=4 OR H=14 OR H=24 THEN DRAW"bm290,150Bd6NE6r10l4u6d12"
1190 IF H=5 OR H=15 THEN DRAW"bm290,150BR2nr6d4r4f2d2g2l3h2
1200 IF H=6 OR H=16 THEN DRAW"bm290,150br2nr5g2d8f2r4e2u3h2l4g2"
1210 IF H=7 OR H=17 OR H=27 THEN DRAW"bm290,150r8m-8,+12"
1220 IF H=8 OR H=18 OR H=28 THEN DRAW"bm290,150br4r2f2d1g2f3d2g2L4h2u2e3nr2h2u1e2"
1230 IF H=9 OR H=19 THEN DRAW"bm290,150br2r3f2d8g2l3h2bu6u2e2bd6nh2r3e2"
1240 IF H=10 OR H=20 THEN DRAW"bm290,150br2r3f2d8g2l3h2u8e2"
1250 IF H>9 AND H<20 THEN DRAW"bm280,150d12"
1260 IF H>19 THEN DRAW"bm278,152E2R2F2D1G7D2R7"
1270 SOUND 200,8
1280 RETURN
1290 Y1=YY-82
1300 DE=DY+9:IF DE>365 THEN DE=DE-365
1310 DE=DE/57.296:E=COS(DE/365*360)*23
1320 A=H-6:IF H<6 OR H>18 THEN 1600
1330 IF C$<>"sun" THEN 1360
1340 GOSUB 1600
1350 CIRCLE(X,Y),4:PAINT(X,Y),1,3
1360 IF YY<82 OR YY>85 THEN RETURN
1370 MM=M+Y1*12
1380 FOR Z=1 TO MM:READ YA,MA,JA,SA:NEXT
1390 IF YA=0 THEN 1430
1400 A=VA/15+(H-6):GOSUB 1600:GOSUB 1660:IF Y<LA THEN GOTO 1420
1410 PSET(X,182):DRAW"M+2,6M+2,-6"
1420 IF MA=0 THEN 1460
1430 A=MA+T:GOSUB 1600:GOSUB 1660:IF Y<LA THEN 1450
1440 PSET(X-1,194):DRAW"U6M+3,+6M+3,-6D6"
1450 IF JA=0 THEN 1490
1460 A=JA+T:GOSUB 1600:GOSUB 1660:IF Y<LA THEN GOTO 1480
1470 PSET(X+2,188):DRAW"D5G1L2H1U2"
1480 IF SA=0 THEN RETURN
1490 A=SA+T:GOSUB 1600:GOSUB 1660:IF Y<LA THEN RETURN
1500 PSET(X+2,175):DRAW"H1L2G1D1M+4,3F1D1G1L3H1"
1510 RETURN
1520 DATA 0,12,8,14,4,13,4,33,13,2,14.5,13.4,45,13,14.5,13.3,46,12.4,14.3,13.2,42,12.1,14.1,13.1,36,12.4,13.9,13
1530 DATA 29,13.2,13.9,13,21,13.9,14.1,13.2,13,15.6,14.4,13.4,0,17.1,14.8,0,0,18.8,0,13.8,-11,20.4,15.7,14
1540 DATA -18,22,16.1,14.1,-25,23.5,16.5,14.2,-31,.8,16.6,14.1,-31,2.3,16.6,14,-43,0,16.4,13.9,-45,0,16.1,13.8,-41,6.8,16,13.8,-15,8.2,16,13.9,29,9.6,16.2,14
1550 DATA 44,10.7,16.5,14.2,46,11.9,16.9,14.5,42,13,0,14.7
1560 DATA 37,14,17.9,14.9,31,15,18.4,15,24,15.6,18.7,15,15,15.7,18.9,14.9,0,15.1,18.9,14.7,0,14.6,18.7,14.6
1570 DATA 0,14.8,18.5,14.5,-16,15.7,18.2,14.6,-25,17,18.2,14.7,-32,18.5,18.5,14.9,-39,20.1,18.8,0,-44,21.7,19.3,15.4
1580 DATA -47,23.1,0,15.6,-45,.6,20.3,15.7,-28,1.8,28.7,15.8,18,3.3,21,15.7,41,4.7,21.3,15.5,46,0,21.3,15.4
1590 DATA 43,0,21.1,15.3,38,0,20.9,15.3,30,10.4,20.7,15.4,23,11.1,20.7,15.6,16,12.7,20,8,0,0,13.9,21.2,16.1
1600 B=90:A=A*15
1610 X=160-(COS(A/57.296)*B)
1620 IF X<38 OR X>282 THEN RETURN
1630 Y=SIN(A/57.296)*B
1640 Y=Y+LA+E
1650 RETURN
1660 IF X<38 OR X>282 THEN RETURN
1670 IF Y<LA THEN RETURN
1680 CIRCLE(X,Y),1:IF C$="SUN"THEN CIRCLE(X,Y),2:RETURN
1690 RETURN
```
{% endraw %}

## TARGET.BAS

{% raw %}
```bas
10 '###########################################################################
20 '#                                                                        ##
30 '#               TARGET: AN ARCADE-TYPE SHOOTING GAME                     ##
40 '#                               BY                                       ##
50 '#                         BRIAN D. MANN                                  ##
60 '#    628 ELGIN TERRACE, RICHMOND VA. 23225  (804) 320-4901               ##
70 '#    IF YOU DISCOVER ANY PROBLEMS WITH THIS CODE, OR HAVE ANY            ##
80 '#    QUESTIONS, PLEASE FEEL FREE TO CALL ME.                             ##
90 '#                                                                        ##
100 '#                                                                       ##
110 '# COPYRIGHT OCTOBER, 1982 BY BRIAN D. MANN. FOR NONPROFIT DISTRIBUTION  ##
120 '# ONLY. ALL RIGHTS RESERVED.                                            ##
130 '##########################################################################
140 R = INT(VAL(RIGHT$(TIME$,2))*544):RANDOMIZE(R)
150 DIM X(297):DIM Y(297)
160 KEY OFF
170 FOR I=1 TO 10:KEY I,"":NEXT:KEY 1,"RUN"+CHR$(13):KEY 2,"WIDTH 80"+CHR$(13)
180 SCREEN 1,0
190 CLS
200 WIDTH 40
210 LOCATE 12,17:PRINT "TARGET"
220 LOCATE 15,19: PRINT "by"
230 LOCATE 18,14:PRINT "BRIAN D. MANN"
240 LOCATE 24,10:PRINT "PRESS ANY KEY TO BEGIN"
250 A$=INKEY$:IF A$="" THEN 250
260 GOSUB 400
270 GOSUB 1290
280 GOSUB 950
290 CLS
300 LOCATE 10,20:PRINT "TARGET"
310 LOCATE 12,1:PRINT "DO YOU WISH EASY(3), MODERATE(4),                   HARD(5), OR IMPOSSIBLE(6)"
320 A$ = INKEY$:IF A$ = "" THEN 320
330 SPEED = VAL(A$)
340 SCREEN 1,0
350 LOOP = 0
360 HIT=0:MISS=0
370 DEF SEG
380 IF REPEAT = 1 THEN GOTO 530
390 GOTO 530
400 REM DRAW AND SAVE CROSSHAIRS (CRSHRS%)
410 LINE (5,4)-(5,25)
420 LINE (5,4)-(10,4)
430 LINE (5,25)-(10,25)
440 LINE (35,4)-(35,25)
450 LINE (30,4)-(35,4)
460 LINE (30,25)-(35,25)
470 CIRCLE (20,14),8
480 LINE (16,14)-(24,14)
490 LINE (20,10)-(20,18)
500 DIM CRSHRS%(150)
510 GET(0,0)-(35,25),CRSHRS%
520 RETURN
530 CLS' BEGINNING OF MAIN LOOP
540 FOR I = 1 TO 100
550 X=(RND(1)*318)+1:Y=(RND(1)*198)+1
560 PSET(X,Y)
570 NEXT
580 X1=140:Y1=80
590 POKE 106,0
600 YS=7:XS=10
610 P = 0
620 S1=INT(RND*170+1):S2=INT(RND*170)+1
630 IF X1<1 THEN X1=1
640 IF X1>280 THEN X1=280
650 IF Y1<1 THEN Y1=1
660 IF Y1>170 THEN Y1=170
670 PUT(X1,Y1),CRSHRS%,>=
680 P =P+SPEED:IF   P >297 THEN 1130
690 X(P) = P
700 Y(P) = INT(((S2-S1)/297)*X(P))+S1
710 PUT (X(P),Y(P)),S%,>=
720 FOR D1=1 TO 10:NEXT
730 POKE 160,0
740 A$=""
750 A$ = INKEY$: PUT(X(P),Y(P)),S%,>=:IF LEN(A$) < 2 AND A$<> " " THEN 680 ELSE A =ASC(RIGHT$(A$,1))
760 IF A=32 THEN PUT(X1,Y1),CRSHRS%,>=:GOTO 910
770 PUT(X1,Y1),CRSHRS%,>=
780 ON A-70 GOSUB 800,810,820,830,840,850,860,870,880,890,900
790 GOTO 630
800 SOUND 100,1:X1=X1-XS:Y1=Y1-YS:RETURN
810 SOUND 125,1:Y1=Y1-YS:RETURN
820 SOUND 150,1:X1=X1+XS:Y1=Y1-YS:RETURN
830 RETURN
840 SOUND 200,1:X1=X1-XS:RETURN
850 RETURN
860 SOUND 200,1:X1=X1+XS:RETURN
870 RETURN
880 SOUND 300,1:X1=X1-XS:Y1=Y1+YS:RETURN
890 SOUND 325,1:Y1=Y1+YS:RETURN
900 SOUND 350,1:X1=X1+XS:Y1=Y1+YS:RETURN
910 SOUND 40,1:LINE (1,199)-(X1+16,Y1+10),3:LINE (319,199)-(X1+16,Y1+10),3:FOR W1=1 TO 3:NEXT
920 LINE (1,199)-(X1+16,Y1+10),0:LINE (319,199)-(X1+16,Y1+10),0:POKE 160,0
930 IF X1>X(P) -16  AND X1<X(P) -4  AND Y1 >Y(P) - 20 AND Y1 < Y(P)-6  THEN 940 ELSE 630
940 PUT (X1,Y1),E%,>=:FOR I%=100 TO 1000 STEP 25:SOUND I%,1:NEXT:PUT (X1,Y1),E%,>=:HIT=HIT+1:LOOP=LOOP+1:IF LOOP=5 THEN 1160 ELSE 580
950 DEF SEG
960 CLS
970 LOCATE 1,10:PRINT "YOUR ENEMY.":LOCATE 5,1:PRINT "YOUR MISSION: DESTROY HIM":PRINT
980 PRINT "USE THE KEY PAD TO MOVE YOUR SIGHTS"
990 PUT (120,60),CRSHRS%,PSET
1000 LOCATE 13,1:PRINT "ON TO THE ENEMY SHIP AND THEN PRESS":PRINT:PRINT"             THE SPACE BAR TO FIRE."
1010 PRINT
1020 PRINT "YOU WILL HAVE 5 CHANCES"
1030 PRINT:PRINT "PRESS ANY KEY TO BEGIN"
1040 REM DRAW AND SAVE SHIP (S%)
1050 CIRCLE (28,5),2
1060 LINE (26,6)-(20,5),,BF
1070 LINE (20,6)-(10,4),,BF
1080 LINE (13,6)-(15,9),,BF
1090 LINE (8,9)-(17,11),,BF
1100 DIM S%(150)
1110 GET (8,5)-(30,11),S%
1120 A$ = INKEY$:IF A$="" THEN 1120 ELSE RETURN
1130 PUT(X1,Y1),CRSHRS%,>=
1140 SOUND 40,20
1150 LOOP =LOOP+1:IF LOOP=5 THEN 1160 ELSE 580
1160 REM **********END OF ROUND SUMMARY
1170 CLS: PRINT"YOU HIT ";HIT;" SHIPS OUT OF FIVE."
1180 PRINT:PRINT
1190 IF HIT<=2 THEN PRINT "YOU COULDN'T HIT THE BROAD SIDE OF A    VULCAN MOON!!
1200 IF HIT=3 THEN PRINT "WITH TRAINING, YOU MIGHT BE ABLE TO     CLEAN THE GUN!"
1210 IF HIT=4 THEN PRINT "WELL, NOT BAD BUT THE ONE THAT GOT AWAY JUST DESTROYED YOUR HOME PLANET!"
1220 IF HIT=5 THEN PRINT "GOOD SHOOTING!!! CAN YOU DO IT AGAIN?"
1230 PRINT:PRINT
1240 INPUT "DO YOU WISH TO PLAY AGAIN (Y/N)?";A$
1250 POKE 106,0
1260 IF A$ = "Y" OR A$ = "y" THEN GOTO 1280
1270 IF A$ = "N" OR A$ = "n" THEN END ELSE GOTO 1230
1280 REPEAT = 1: GOTO 290
1290 REM ############# EXPLOSION DRAW AND SAVE
1300 CLS
1310 DEF SEG
1320 DEFINT E
1330 DIM E%(130)
1340 'CLS
1350 OPEN "TARGET.PIC" FOR INPUT AS #1
1360 FOR Z = 0 TO 129
1370 INPUT#1, E%(Z)
1380 NEXT
1390 CLOSE
1400 RETURN
```
{% endraw %}

## TARGET.DOC

{% raw %}
```









                           TARGET

     TARGET is an arcade-type shooting game. You control your sights
     with the key pad and shoot with the space bar. You can speed up
     the target ship to increase the difficulty of play.










```
{% endraw %}

## WORMCITY.BAS

{% raw %}
```bas
0 GOTO 55000 ' WORMCITY.109 10/4/82   T.W.PERKINS
1 ' EDOT4  8/24/82    EAT  DOT #4  (CIRCLE)
2 '    ADDED COLOR # DETECTION LOGIC, SOUND
5 ' MODIFIED FROM IBM DEMO. BY TWP
10 GOTO 88
20 XA(H)=X:YA(H)=Y
30 X=X+XD(DR):Y=Y+YD(DR):ON (POINT (X,Y)+2) GOTO 40,50,60,70,80
40 STOP 'ERROR!!
50 PSET(X,Y):PRESET (XA(T),YA(T)):H=H+1:T=T+1:IF H>20 THEN H = 1
55 IF T>20 THEN T=1:GOTO 20 ELSE 20
60 GOSUB 45000:IF AUTOM =1 THEN RUN 61050 ELSE 57000
70 GOTO 60
80 PRESET (X,Y): PRESET (XA(T),YA(T)):DR=INT(RND*8)+1:T=T+1:IF T>20 THEN T=1
85 IF NOISE = 0 THEN 30 ELSE PLAY "mbl14o3n"+STR$(INT(RND*50)):GOTO 30
87 '
88 KEY OFF:SCREEN 1:DEF SEG=&HB800
89 '
90 DEF FNTM(X$)=VAL(MID$(X$,4,2))*60+VAL(RIGHT$(X$,2))
95 CLS:DEFINT B-Z :NOISE =0
100 DEF FNTM(X$)=VAL(MID$(X$,4,2))*60+VAL(RIGHT$(X$,2))
105 X=0:Y=0:DR=1:H=0:T=0
110 DEF FNXY(A,B)=A*2+1+B*80
115 COLOR 0,1
120 DIM YD(8),XD(8)  ' X&Y DIR. INCRS
125 DIM XA(200),YA(200) ' X,Y VALUES
130 RANDOMIZE FNTM(TIME$)'ON INT(RND*2)+1 GOTO 135,145
132 GOTO 500
150 FOR I=1 TO 8:READ XD(I):NEXT I
155 FOR I=1 TO 8:READ YD(I):NEXT I
160 H=1:J=2
165 ' X=RND*315:Y=RND*184:IF POINT(X,Y)=0 THEN PSET (X,Y) ELSE 165
170 'PT=PT+1:IF PT<601 THEN 165
175 H=1
180 T=2:DR=INT(RND*8)+1
182 X=159:Y=99:PRESET (X,Y):GOTO 20
185 X=(RND*30)+140
190 Y=(RND*15)+90
195 IF POINT(X,Y)>0 THEN 185
200 TIME=FNTM(TIME$)+30: IF TIME>3600 THEN TIME=30
205 GOTO 55
210 DATA 0,1,1,1,0,-1,-1,-1:' x incrs
215 DATA -1,-1,0,1,1,1,0,-1:' y incrs
220 REM
500 LINE (0,0)-(319,189),2,B
510 ' FOR N = 3 TO 196 :LINE (3,N)-(316,N):NEXT N
520 ' FOR N = 2 TO 317 :LINE (N,0)-(N,199):NEXT N
530 CIRCLE (147,99),80:PAINT (149,99),3
535 CIRCLE (171,99),80:PAINT (234,99),3
537 LINE (150,50)-(175,10)
538 LINE (149,50)-(174,10)
539 LINE (148,50)-(173,10)
540 LOCATE 25,6:PRINT "USE ARROWS TO GUIDE THE WORM.";
550 GOTO 150
19999 '
20000 ' EDOT4M 9/4/82      DOT #4M  NO EATING
20010 '    ADDED COLOR # DETECTION LOGIC, SOUND
20020 ' MODIFIED FROM IBM DEMO. BY TWP
20040 XA(H)=X:YA(H)=Y
20050 X=X+XD(DR):Y=Y+YD(DR):ON (POINT (X,Y)+2) GOTO 20060,20070,20090,20097,20110
20060 GOSUB 45000: IF AUTOM=1 THEN RUN 61000 ELSE 57000 'MAZE EXIT
20070 PSET(X,Y):PRESET (XA(T),YA(T)):H=H+1:T=T+1:IF H>20 THEN H = 1
20075 G=G+1:IF G<L GOTO 20080 ELSE G=0 :L=INT(RND*160):DR=INT(RND*8)+1
20080 IF T>20 THEN T=1:GOTO 20040 ELSE 20040
20090 IF SATURN = 0 THEN GOTO 20110 ELSE SATURNF=SATURNF-1
20095 IF SATURNF>0 THEN 20100
20097 GOSUB 45000: IF AUTOM=1 THEN RUN 61100 ELSE 57000
20100 LOCATE 25,35:PRINT SATURNF;
20110 PRESET (XA(T),YA(T)):DR=INT(RND*8)+1:X=XA(H):Y=YA(H):T=T+1:IF T>20 THEN T=1
20120 IF NOISE = 0 THEN 20050 ELSE PLAY "mbl14o3n"+STR$(INT(RND*50)):GOTO 20050
20130 '
20140 DEF SEG=&HB800 'ENTRY POINT
20150 '
20160 DEF FNTM(X$)=VAL(MID$(X$,4,2))*60+VAL(RIGHT$(X$,2))
20170 DEFINT B-R:DEFINT T-Z :NOISE =0:L=10
20180 DEF FNTM(X$)=VAL(MID$(X$,4,2))*60+VAL(RIGHT$(X$,2))
20190 X=0:Y=0:DR=1:H=0:T=0
20200 DEF FNXY(A,B)=A*2+1+B*80
20210 'COLOR 0,1
20220 DIM YD(8),XD(8)  ' X&Y DIR. INCRS
20230 DIM XA(200),YA(200) ' X,Y VALUES
20240 RANDOMIZE FNTM(TIME$)'ON INT(RND*2)+1 GOTO 135,145
20260 FOR I=1 TO 8:READ XD(I):NEXT I
20270 FOR I=1 TO 8:READ YD(I):NEXT I
20280 H=1:J=2
20290 ' X=RND*315:Y=RND*184:IF POINT(X,Y)=0 THEN PSET (X,Y) ELSE 165
20300 'PT=PT+1:IF PT<601 THEN 165
20310 H=1
20320 T=2:DR=INT(RND*8)+1
20325 IF SATURN =1 THEN X=159:Y=180:PRESET (X,Y):GOTO 20040
20330 X=159:Y=99:PRESET (X,Y):GOTO 20040
20340 X=(RND*30)+140
20350 Y=(RND*15)+90
20360 IF POINT(X,Y)>0 THEN 20340
20370 TIME=FNTM(TIME$)+30: IF TIME>3600 THEN TIME=30
20380 GOTO 20080
20390 DATA 0,1,1,1,0,-1,-1,-1:' x incrs
20400 DATA -1,-1,0,1,1,1,0,-1:' y incrs
25000 DR=1:RETURN 'UP
25010 DR=7:RETURN'LEFT
25020 DR=3:RETURN'RIGHT
25030 DR=5:RETURN'DOWN
29999 '
30000 ' MAZE - Taken from the DG version of the same name
30010 ' Will Fastie - 16 Jan 82  MODIFIED FOR IBM GRAPHICS T.PERKINS 9/82
30020 KEY OFF: CLS
30030 'PROG$= "MAZE02 17 AUG 82"
30040 'PRINT PROG$: PRINT
30050 'PRINT "Where should the MAZE output go?"
30060 PRINT
30070 'PRINT "  1 - Display
30080 'PRINT "  2 - Printer"
30090 PRINT
30100 'INPUT"      Enter selection:  ",AN
30110 AN=1 : IF 1 > AN OR AN > 2 THEN 30100
30120 PRINT
30130 'INPUT "Enter dimensions, height and width (10 X 13 MAX.):  ",V,H
30135 V=10:H=13
30140 IF 2>H OR H>23 OR 2>V OR V>23 THEN 30130
30150 'RV=RV+VAL(MID$(DATE$,3,2))
30153 'LOCATE 12,12:PRINT "PLEASE PRESS ANY KEY"
30155 'RV=RV+1:K$=INKEY$:IF K$ =""GOTO 30155
30160 'RANDOMIZE(RV)
30170 IF AN=1 THEN OPEN "scrn:"  FOR OUTPUT AS 1
30180 IF AN=2 THEN OPEN "lpt1:"  FOR OUTPUT AS 1
30190 DIM W(26,26), V(26,26)
30200 CLS :SCREEN 1,0
30210 LOCATE 12,11: PRINT "CALCULATING  MAZE"
30220 Q=0
30230 Z=0
30240 X=INT(RND*H+1):XX=X:GOTO 30290
30250 CLS:LINE (0,0)-(((XX*24)+8),8),,BF
30260 LINE (((XX*24)+24),0)-(((H*24)+8),8),,BF
30270 LOCATE 25,3: PRINT "ARROWS GUIDE WORM.  F1 ENDS EARLY";
30280 RETURN
30290 C=1
30300 W(X,1)=C
30310 C=C+1
30320 R=X
30330 S=1
30340 GOTO 30450
30350 IF R<>H THEN 30430
30360 IF S<>V THEN 30400
30370 R=1
30380 S=1
30390 GOTO 30440
30400 R=1
30410 S=S+1
30420 GOTO 30440
30430 R=R+1
30440 IF W(R,S)=0 THEN 30350
30450 IF R-1=0 THEN 30900
30460 IF W(R-1,S)<>0 THEN 30900
30470 IF S-1=0 THEN 30670
30480 IF W(R,S-1)<>0 THEN 30670
30490 IF R=H THEN 30550
30500 IF W(R+1,S)<>0 THEN 30550
30510 X=INT(RND*3+1)
30520 IF X=1 THEN 31330
30530 IF X=2 THEN 31400
30540 IF X=3 THEN 31470
30550 IF S<>V THEN 30590
30560 IF Z=1 THEN 30640
30570 Q=1
30580 GOTO 30600
30590 IF W(R,S+1)<>0 THEN 30640
30600 X=INT(RND*3+1)
30610 IF X=1 THEN 31330
30620 IF X=2 THEN 31400
30630 IF X=3 THEN 31560
30640 X=INT(RND*2+1)
30650 IF X=1 THEN 31330
30660 IF X=2 THEN 31400
30670 IF R=H THEN 30810
30680 IF W(R+1,S)<>0 THEN 30810
30690 IF S<>V THEN 30730
30700 IF Z=1 THEN 30780
30710 Q=1
30720 GOTO 30740
30730 IF W(R,S+1)<>0 THEN 30780
30740 X=INT(RND*3+1)
30750 IF X=1 THEN 31330
30760 IF X=2 THEN 31470
30770 IF X=3 THEN 31560
30780 X=INT(RND*2+1)
30790 IF X=1 THEN 31330
30800 IF X=2 THEN 31470
30810 IF S<>V THEN 30850
30820 IF Z=1 THEN 30890
30830 Q=1
30840 GOTO 30860
30850 IF W(R,S+1)<>0 THEN 30890
30860 X=INT(RND*2+1)
30870 IF X=1 THEN 31330
30880 IF X=2 THEN 31560
30890 GOTO 31330
30900 IF S-1=0 THEN 31150
30910 IF W(R,S-1)<>0 THEN 31150
30920 IF R=H THEN 31060
30930 IF W(R+1,S)<>0 THEN 31060
30940 IF S<>V THEN 30980
30950 IF Z=1 THEN 31030
30960 Q=1
30970 GOTO 30990
30980 IF W(R,S+1)<>0 THEN 31030
30990 X=INT(RND*3+1)
31000 IF X=1 THEN 31400
31010 IF X=2 THEN 31470
31020 IF X=3 THEN 31560
31030 X=INT(RND*2+1)
31040 IF X=1 THEN 31400
31050 IF X=2 THEN 31470
31060 IF S<>V THEN 31100
31070 IF Z=1 THEN 31140
31080 Q=1
31090 GOTO 31110
31100 IF W(R,S+1)<>0 THEN 31140
31110 X=INT(RND*2+1)
31120 IF X=1 THEN 31400
31130 IF X=2 THEN 31560
31140 GOTO 31400
31150 IF R=H THEN 31260
31160 IF W(R+1,S)<>0 THEN 31260
31170 IF S<>V THEN 31210
31180 IF Z=1 THEN 31250
31190 Q=1
31200 GOTO 31410
31210 IF W(R,S+1)<>0 THEN 31250
31220 X=INT(RND*2+1)
31230 IF X=1 THEN 31470
31240 IF X=2 THEN 31560
31250 GOTO 31470
31260 IF S<>V THEN 31300
31270 IF Z=1 THEN 31320
31280 Q=1
31290 GOTO 31310
31300 IF W(R,S+1)<>0 THEN 31320
31310 GOTO 31560
31320 GOTO 31760
31330 W(R-1,S)=C
31340 C=C+1
31350 V(R-1,S)=2
31360 R=R-1
31370 IF C=H*V+1 THEN 31770
31380 Q=0
31390 GOTO 30450
31400 W(R,S-1)=C
31410 C=C+1
31420 V(R,S-1)=1
31430 S=S-1
31440 IF C=H*V+1 THEN 31770
31450 Q=0
31460 GOTO 30450
31470 W(R+1,S)=C
31480 C=C+1
31490 IF V(R,S)=0 THEN 31520
31500 V(R,S)=3
31510 GOTO 31530
31520 V(R,S)=2
31530 R=R+1
31540 IF C=H*V+1 THEN 31770
31550 GOTO 30900
31560 IF Q=1 THEN 31660
31570 W(R,S+1)=C
31580 C=C+1
31590 IF V(R,S)=0 THEN 31620
31600 V(R,S)=3
31610 GOTO 31630
31620 V(R,S)=1
31630 S=S+1
31640 IF C=H*V+1 THEN 31770
31650 GOTO 30450
31660 Z=1
31670 IF V(R,S)=0 THEN 31710
31680 V(R,S)=3
31690 Q=0
31700 GOTO 31760
31710 V(R,S)=1
31720 Q=0
31730 R=1
31740 S=1
31750 GOTO 30440
31760 GOTO 30350
31770 GOSUB 30250
31780 VY = 0
31790 FOR J = 1 TO V: VY = VY + 9
31800   HX =0
31810   LINE (HX,VY)-((HX+8),(VY+9)),,BF:HX=-16
31820   FOR I = 1 TO H: HX = HX +24
31830     IF V(I,J)<2 THEN 31850
31840     GOTO 31860
31850     LINE ((HX+16),(VY+0))-((HX+24),(VY+8)),,BF
31860   NEXT I
31870   VY=VY+9
31880   HX =-24
31890   FOR I = 1 TO H: HX=HX+24
31900     IF V(I,J)=0 THEN 31940
31910     IF V(I,J)=2 THEN 31940
31920     LINE (HX,VY)-((HX+8),(VY+8)),,BF
31930     GOTO 31950
31940     LINE (HX,VY)-((HX+24),(VY+8)),,BF
31950   NEXT I
31960   LINE ((HX+24),VY)-((HX+32),(VY+8)),,BF
31970 NEXT J
31980 CLOSE
31985 GOTO 20140
31990 'GOTO 2010
32000 'GOTO 3000
32010 K$=INKEY$:IF K$=""GOTO 32010
32020 GOTO 57000
39999 '
40000 ' SATURN    FROM IBM DEMO  8/23/82
40010 KEY OFF:DEFSNG S,A:SCREEN 1,0:COLOR 0,0:CLS:X=160:Y=100
40020 FOR T=1 TO 500:CIRCLE(RND*300,RND*300),RND*0.5,3:NEXT T
40030 CIRCLE (X,Y),50,1
40040 PAINT (X,Y),3,1
40042 CIRCLE (X,Y),4,1
40044 PAINT (X,Y),2,1
40046 LINE (X,Y)-(X,(Y-60)),0
40050 FIRST =0:LAST=10:CLR=1:SET = 2.2:ANG =1:GOSUB 40090
40060 FIRST=14:LAST=22:CLR=2:SET=2.05:ANG=1.1:GOSUB 40090
40070 FIRST=31:LAST=48:CLR=1:SET=1.95:ANG=1.2:GOSUB 40090
40080 GOTO 40130
40090 FOR RING=FIRST TO LAST
40100 CIRCLE(X,Y),85+RING,CLR,SET,ANG,0.2
40110 NEXT RING
40120 RETURN
40130 'FOR I=1 TO 3000:NEXT:DEFINT S,A
40140 LINE (0,0)-(319,188),,B
40142 COLOR 0,1
40145 LOCATE 25,2:PRINT "TYPE  M  IF USING BLACK/WHITE MONITOR";
40150 N=N+1:IF N > 900 THEN 40170
40155 K$=INKEY$:IF K$ = "" THEN 40150
40160 IF K$="M" THEN COLOR 0,1:GOTO 40180
40165 IF K$="m" THEN COLOR 0,1:GOTO 40180
40170 COLOR 0,0
40180 SATURNF =50 'THIS VALUE CHANGES TIME OF DISPLAY.
40190 LOCATE 25,2:PRINT " ARROWS HELP WORM.   SHIELD LEFT:"; SATURNF;
40200 SATURN = 1:GOTO 20140
44999 '
45000 'COLOR/SOUND EXPLOSION FOR ENDINGS
45010 FOR BACKGROUND =1 TO 15:IF NOISE=1 THEN SOUND 130,20
45020 FOR N=1 TO 130:NEXT:COLOR BACKGROUND,0:IF NOISE=1 THEN SOUND 90,15
45030 FOR N=1 TO 210:NEXT:COLOR BACKGROUND,1
45040 NEXT
45050 FOR N = 1 TO 600:NEXT:RETURN
54999 '
55000 'TWP  LOGO BUILDER 7/12/82  MODIFIED IBM DEMO.
55010 KEY OFF
55020 DIM A$(15),P$(15):SCREEN 0,1:WIDTH 40:COLOR 15,1,1:LOCATE ,,0
55030 GREEN=2: BLUE=1: CYAN=3: YELLOW=6 ELSE GREEN=7: BLUE=0: CYAN=7: YELLOW=7
55040 A$(13)= "   Theodore  William  Perkins"
55050 A$(1)=SPACE$(39):A$(2)=A$(1):A$(11)=A$(1):A$(12)=A$(1):A$(14)=A$(1):A$(15)=A$(1)
55060  A$(1)= "   A  COLLECTION  BY    "
55070  A$(3)="88888888  88   8   88  888888 "
55080  A$(4)="88888888  888  8  888  8888888"
55090  A$(5)="8  88  8   88 888 88    88  88"
55100  A$(6)="   88      888888888    888888"
55110  A$(7)="   88      8888 8888    88888 "
55120  A$(8)="   88      888   888    88    "
55130  A$(9)="  8888    888     888  8888   "
55140 A$(10)="  8888    888     888  8888   "
55150 CLS
55160 FOR I = 2 TO 40
55170 FOR J = 3 TO 10
55180 LOCATE J+5,I:PRINT "▄";
55190 NEXT J:SOUND 100+RND*3000,1:NEXT I
55200 FOR I = 1 TO 5
55210 FOR J = 3 TO 10
55220 LOCATE J+5,I:PRINT " ";
55230 NEXT J:SOUND 100+RND*3000,1:NEXT I
55240 FOR I=6 TO 35:FOR J=3 TO 10:IF MID$(A$(J),I-5,1)=" "THEN LOCATE J+5,I:PRINT " ";
55250 NEXT J:SOUND 100+RND*3000,1:NEXT I
55260 FOR I = 36 TO 40
55270 FOR J = 3 TO 10
55280 LOCATE J+5,I:PRINT " ";
55290 NEXT J:SOUND 100+RND*3000,1:NEXT I
55300 COLOR 15,BLUE:LOCATE 1+5,6: PRINT SPACE$(3)+A$(1)+SPACE$(3)
55310 SOUND 100+RND*3000,1
55320 COLOR 15,BLUE:LOCATE 13+5,2: PRINT SPACE$(3)+A$(13)
55330 SOUND 100+RND*3000,4
55340 FOR I=1 TO 5000:NEXT
55350 RUN 56000
56000 WIDTH 40:CLS:SCREEN 0,0:COLOR 15,0
56030 LOCATE 3,4 :PRINT "A COLLECTION OF NONSENSE -";
56040 LOCATE 4,6 :PRINT "DONE IN THE NAME OF LEARNING,";
56050 LOCATE 5,6 :PRINT "DONATED IN THE NAME OF FUN.";
56060 LOCATE 7,4 :PRINT "ALL PROGRAMS REQUIRE BASICA AND THE";
56065 LOCATE 8,6 :PRINT "COLOR/GRAPHICS ADAPTER.";
56070 LOCATE 10,4 :PRINT "ALL PROGRAMS O.K. ON A B/W MONITOR,";
56080 LOCATE 11,6:PRINT "BUT A RGB IS THE BEST.  A T.V. MAY";
56090 LOCATE 12,6:PRINT "BE MARGINAL, DEPENDING ON THE SET.";
56100 LOCATE 14,4:PRINT "MOST PROGRAMS MODIFIED FROM SOURCES";
56110 LOCATE 15,6:PRINT "THAT ARE CREDITED IN THE LISTING.";
56120 LOCATE 23,2:PRINT "6730 Ann Lee Dr. North Rose,N.Y. 14516";
56130 COLOR 31
56140 LOCATE 19,10:PRINT "PRESS ANY KEY TO START";
56160 K$ = INKEY$: IF K$ = "" THEN 56160
56200 RUN 57000
56999 '
57000 RUN 57005
57005 SCREEN 1,0:CLS:COLOR 0,1
57010 LINE (0,0)-(319,199),,B
57020 LOCATE 3,10:PRINT "WELCOME TO  WORM CITY";
57030 LOCATE 5,17:PRINT "-MENU-";
57040 LOCATE 8,6 :PRINT "1 =  WORM EATING APPLE";
57050 LOCATE 10,6:PRINT "2 =  WORM ATTACKING SATURN";
57060 LOCATE 12,6:PRINT "3 =  WORM LOST IN MAZE";
57070 LOCATE 15,6:PRINT "4 =  AUTO-DISPLAY MODE";
57090 LOCATE 17,6:PRINT "5 =  EXIT WORM CITY TO BASIC";
57120 LOCATE 22,2:PRINT "F1 = END SELECTION   F2 = SOUND ON/OFF";
57130 GOSUB 57500
57140 GOTO 58000
57500 ON KEY(11) GOSUB 25000:KEY(11) ON
57510 ON KEY(12) GOSUB 25010:KEY(12) ON
57520 ON KEY(13) GOSUB 25020:KEY(13) ON
57530 ON KEY(14) GOSUB 25030:KEY(14) ON
57540 ON KEY(1) GOSUB 60000:KEY(1) ON
57550 ON KEY(2) GOSUB 60050:KEY(2) ON
57567 T$ = TIME$
57570 LT$= LEFT$(T$,2) :MT$ =MID$(T$,4,2):RT$=  RIGHT$(T$,2)
57575 TT$ = LT$ + MT$ + RT$:TTT=INT(VAL(TT$)*0.12)
57580 RANDOMIZE(TTT)
57595 RETURN
57999 '
58000 FOR N = 1 TO 25:K$ = INKEY$:NEXT
58005 K$=INKEY$:IF K$ = "" THEN 58005
58010 IF K$ ="1" THEN 1
58020 IF K$ ="2" THEN 40000
58030 IF K$ ="3" THEN 30000
58040 IF K$ ="4" THEN 61000
58080 IF K$ ="5" THEN SCREEN 0,0,0:WIDTH 80:KEY ON:STOP
58090 GOTO 58005
60000 RUN 57000
60050 IF NOISE = 0 THEN NOISE =1 :RETURN ELSE NOISE = 0:SOUND 60,0: RETURN
60999 '
61000 SCREEN 1,0:CLS:COLOR 0,1:AUTOM=1
61010 GOSUB 57500
61020 GOTO 1
61050 SCREEN 1,0:CLS:COLOR 0,1:AUTOM=1
61060 GOSUB 57500
61070 GOTO 40000
61100 SCREEN 1,0:CLS:COLOR 0,1:AUTOM=1
61110 GOSUB 57500
61120 GOTO 30000
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0083

     Volume in drive A has no label
     Directory of A:\

    15PUZZLE BAS      3117  10-09-83   2:50p
    COM2ASM  BAS      2428  10-08-83   6:28p
    COM2ASM  DOC      2084  10-08-83   8:41p
    DISKMDF2 BAS      3619   5-26-83   1:03a
    FILES83  TXT      2072   5-12-88   3:44p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   5-06-88   8:36a
    GRPH64K  BAS       853   6-12-83  12:33a
    GRPH64K  DOC      4180   6-12-83   2:02a
    HANOI    BAS      4862   9-29-83  12:19a
    KEYFLAGS ASM      7008   9-25-83  11:45p
    KEYFLAGS COM       330   9-25-83  11:28p
    LANDER   BAS      1536   9-05-82   3:10p
    MENU2    BAS       774   9-26-83  10:53p
    NWCLOCK  BAS     10932  10-10-83   6:10p
    PCGLOBE  BAS      4842  10-06-83   2:26a
    STARMAP  BAS      5865   9-30-83  12:32a
    TARGET   BAS      4434  10-06-83   2:48a
    TARGET   DOC       272   1-01-80
    TARGET   PIC      1024   1-01-80
    WORMCITY BAS     10880   1-01-80
           21 file(s)      71844 bytes
                           82432 bytes free
