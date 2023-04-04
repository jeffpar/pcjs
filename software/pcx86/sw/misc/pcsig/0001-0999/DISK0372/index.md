---
layout: page
title: "PC-SIG Library Disk #372"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0372/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0372"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASIC AIDS NO 3"

    Here is a collection of BASIC extensions and subroutines which can make
    BASIC much more flexible.  Routines include some for enabling access to
    DOS command line parameters, joystick port watch program, read
    directory from within BASIC program, and a screen splitting routine.
    The programs are useful in incorporating I/O functions within your own
    BASIC programs.
    
    System Requirements: BASIC
    
    How to Start: To read the files with the DOC extensions, enter TYPE
    filename.DOC and press <ENTER>.  To run BASIC programs, refer to the
    GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    BASPARAM BAS  Subroutine to access DOS command line parameters
    BASICSUB DOC  Documentation of 'CALL' statement
    DAYS     BAS  Program to calculate the days between two dates
    DAYOFWK  BAS  Calculates the day of the week given date
    CNTRL-BR BAS  Defeat BASIC file protection to list a file
    CMDLIN   DOC  A routine to enable the use of command line parameters
    CAPLOCK  BAS  Test and display the state of NUM/CAPS lock keys
    BASSUB   OBJ  Subroutine to access DOS directory commands
    BASSUB   ASC  Test program for BASSUB.OBJ
    DIR4     BAS  Demonstration file for DIR4.BIN
    SCRN-GET TWO  A BASIC program to demonstrate screen swapping
    SCRNSLGR DEM  A BASIC program that draws and swaps two screens
    SCROLL   DOC  Documentation for SCROLL.BAS
    SCROLL   BLD  BLOAD version of SCROLL.BAS
    SCROLL   BAS  Subroutine to be used with a BASIC program to perform
    SCRNDUMP BAS  Routine to print an image of the graphics screen
    SCRN-WK  BAS  Create and save screens
    SCRN-DOC      Documentation for the next three files
    SCRLDEMO BAS  Screen scrolling demo
    READ_DIR SUB  Read directory from within BASIC program
    READ_DIR BAS  Demo of READ_DIR.SUB
    QUICKC   BAS  Quick printing routine
    DISKHAND BIN  Get drive number from within BASIC
    DIR4     BIN  Binary directory routine
    GETSP1   EXE  Executable module for sample of getspace routine
    GETSP1   BAS  Sample of getspace routine
    GETSP    BAS  Basic source code to create BLOAD module of GETSPACE
    GETSP    ASM  Assembly code for GETSPACE routine
    FIND-DS  BAS  Finds the value of BASIC/BASICA'S data segment
    FCBREAD  BSV  Binary directory search routine
    FCBREAD  BAS  Example for FCBREAD.BSV routine
    DISKTYPE SUB  Get media type from within BASIC
    QSORT    BAS  Quicksort algorithm demonstration
    QPRINTC  BIN  same, but for compiled programs
    QPRINT   BIN  machine code for quick print routine
    QCLEAR   BIN  machine code for screen-clearing routine
    PRTSC    BAS  Routine to print the screen from a basic program
    PAK-DATE BAS  Subroutines can pack a 6 byte date into a 2 byte integer
    NUM2WORD BAS  Convert numbers to words
    JULIAN   DOC  Documentation for JULIAN.BAS
    JULIAN   BAS  Converts dates
    JOYSTIK  BAS  Program to watch the joystick ports
    INKEY2   BAS  Demo program like INKEY.BAS
    INKEY    BAS  Name/address data base program
    HEAPSORT DOC  Documentation for HEAPSORT.BAS
    HEAPSORT BAS  Demo of the HEAPSORT sorting algorithm
    GETSPACE DOC  Documentation for GETSPACE routine
    GETSPACE      Binary LOAD module created by program
    SHELSORT BAS  Shell sort routine
    SETMEM   BAS  Routine to set memory from BASIC
    SPLTSCRN BAS  Splits the screen at horizontal dividing line location
    SHORTSUB BAS  Collection of menu driven subroutines
    TIMER    BAS  Times invoked from the system timer to 1/100th a second
    UPCASE   BAS  Routine to change lowercase to uppercase
    TIMER    RTN  Routine for TIMER.BAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BASPARAM.BAS

```bas
10 '**************************************************************************
20 ' taken from *.* column in PC World, November, 1983 with a mod to get rid
30 ' of a leading space on the parameter string. useful for compiled BASIC
40 ' only.
50 ' If you start a program with a command line such as "a>PROGRAM ABCDEFGH"
60 ' Then PARM will be "ABCDEFGH"
70 ' basparm.bas--this is a program fragment, include at the start of your program
80 DEF SEG			     :'point data segment register to basic
90 DIM SUBR%(3) 		     :'array to contain machine subroutine
100 DEF USR0=VARPTR(SUBR%(0))	     :'get subroutine's segment offset
110 SUBR%(0)=&H5B59		     :'pop CX         pop BX
120 SUBR%(1)=&H5153		     :'push BX        push CX
130 SUBR%(2)=&HEB83		     :'sub BX,10H
140 SUBR%(3)=&HCB10		     :'retf
150 I%=0			     :'dummy parameter to functionn  call
160 PSP%=USR0(I%)		     :'get program segment prefix's segment
170 DEF SEG=PSP%		     :'set base register at that segment
180 PARMLEN%=PEEK(&H80) 	     :'get command parameter length
190 PARM$=""                         :'set up string to receive the string
200 FOR I% = 2 TO PARMLEN%	     :'loop thru parameter string but skip
210 PARM$=PARM$+CHR$(PEEK(&H80+I%))  :'leading blank char. collect whole string
220 NEXT I%			     :'until end of the string
230 DEF SEG			     :'return to normal data string
240 '**************************************************************************
```

## CAPLOCK.BAS

```bas
10 CLS: ROW%=2:COLUMN%=1
20 PRINT"This is a test"
30 A$=INKEY$: GOSUB 50500:IF A$="" THEN 30
40 PRINT A$;:COLUMN%=COLUMN%+1:IF COLUMN%>79 THEN COLUMN%=1:ROW%=ROW%+1:GOTO 30 ELSE GOTO 30
50499 '*************************CAPS LOCK & NUM LOCK***************************
50500 DEF SEG=&H40:K%=PEEK(&H17) AND 96:DEF SEG:IF K1%=K% THEN RETURN ELSE C%=POS(X):LOCATE 25,73,0:'      Check to see for change in status if none return
50510 IF K%=96 THEN COLOR 0,7:PRINT"CAP";:COLOR 7,0:PRINT" ";:COLOR 0,7:PRINT"NUM";:GOTO 50550:'           Both Cap Lock & Num Lock are on
50520 IF K%=32 THEN COLOR 7,0:PRINT"    ";:COLOR 0,7:PRINT"NUM";:GOTO 50550:'                              Only Num Lock is on
50530 IF K%=64 THEN COLOR 0,7:PRINT"CAP";:COLOR 7,0:PRINT"    ";:COLOR 0,7:GOTO 50550:'                    Only Cap Lock is on
50540 COLOR 7,0:PRINT SPC(7);:COLOR 0,7:'                                                                  Both Cap Lock & Num Lock are off
50550 LOCATE ROW%,C%,1:K1%=K%:COLOR 7,0:RETURN
50559 '************************************************************************
```

## CNTRL-BR.BAS

```bas
1 DEF SEG=0:V1=PEEK(108):V2=PEEK(109):V3=PEEK(110):V4=PEEK(111)
2 DEF SEG=0:POKE 108,&H53:POKE 109,&HFF:POKE 110,&H0:POKE 111,&HF0
10 PRINT"This routine defeats Cntrl-Break . . . "
20 PRINT"Input an A to continue.";
30 INPUT A$: IF A$="a" OR A$="A" THEN 38 ELSE 30
38 DEF SEG=0:POKE 108,V1:POKE 109,V2:POKE 110,V3:POKE 111,V4
40 PRINT"This routine PROTECTS the program"
45 DEF SEG:POKE 1124,255
50 PRINT"Try to LIST it, then RUN 60"
51 END
60 PRINT"Now you may LIST the program."
65 DEF SEG:POKE 1124,0
70 END
```

## DAYOFWK.BAS

```bas
10 ' DAYOFWK = Calculates the day of the week given date
20 '
30 CLS :PRINT
40 PRINT"   This routine calculates the day of the week given the date"
50 DIM DAYS$(6): FOR I=0 TO 6: READ DAY$(I): NEXT
60 DATA Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday
70 LINE INPUT "Enter date as mm/dd/yyyy ";EDATE$ : S$= EDATE$
80 PS=INSTR(S$,"/"):  MONTH= VAL(LEFT$(S$,PS-1)):  S$= MID$(S$,PS+1)
90 PS=INSTR(S$,"/"):  DAY =  VAL(LEFT$(S$,PS-1)):  S$= MID$(S$,PS+1)
100 YEAR=VAL(S$)
110 '
120 IF MONTH>2 THEN 140
130 MONTH=MONTH+12 : YEAR=YEAR-1
140 N=DAY+2*MONTH+INT(.6*(MONTH+1))+YEAR+INT(YEAR/4)-INT(YEAR/100)+INT(YEAR/400)+  2
150 N=INT((N/7-INT(N/7))*7+.5)
160 PRINT DAY$(N)
```

## DAYS.BAS

```bas
100 'PROGRAM TO CALCULATE THE NUMBER OF DAYS BETWEEN TWO DATES
110 'BY LYNN LONG
120 'TULSA RBBS   918-749-0718
130 '24 HOURS 300/1200 XMODEM
140 CLS:KEY OFF
150 LOCATE 9,15:PRINT CHR$(201);STRING$(48,205);CHR$(187)
160 FOR X=10 TO 15:LOCATE X,15:PRINT CHR$(186):LOCATE X,64:PRINT CHR$(186):NEXT
170 LOCATE X,15:PRINT CHR$(200);STRING$(48,205);CHR$(188)
180 LOCATE 11,25:PRINT"DAYS BETWEEN DATES CALCULATOR"
190 LOCATE 12,34:PRINT"BY LYNN LONG"
200 LOCATE 13,35:PRINT"TULSA RBBS"
210 LOCATE 14,34:PRINT"918-749-0718"
220 FOR X=1 TO 2500:NEXT
230 CLS
240 LOCATE 5,10:PRINT CHR$(201);STRING$(58,205);CHR$(187)
250 FOR X=6 TO 19:LOCATE X,10:PRINT CHR$(186):LOCATE X,69:PRINT CHR$(186):NEXT
260 LOCATE X,10:PRINT CHR$(200);STRING$(58,205);CHR$(188)
270 LOCATE 7,15
280 PRINT"THIS PROGRAM SERVES AS AN EXAMPLE OF HOW TO COMPUTE"
290 LOCATE 8,15
300 PRINT"THE NUMBER OF DAYS BETWEEN TWO GIVEN DATES.  IT CAN"
305 LOCATE 9,15
310 PRINT"BE APPLIED TO BIORHYTHM CALCULATIONS, LOAN INTEREST"
320 LOCATE 10,15
330 PRINT"CALCULATIONS ETC."
340 LOCATE 12,15
350 PRINT"THE PROGRAM TAKES A BEGINNING DATE AND CALCULATES A"
360 LOCATE 13,15
370 PRINT"FACTOR FOR IT.  IT THEN CALCULATES A FACTOR FOR THE"
380 LOCATE 14,15
390 PRINT"FOR THE ENDING DATE AND SUBTRACTS THE TWO TO DERIVE"
400 LOCATE 15,15
410 PRINT"THE NUMBER OF DAYS BETWEEN TWO DATES.  I WOULD LIKE"
420 LOCATE 16,15
430 PRINT"TO EMPHASIZE THAT I HAVE NOT PERFORMED ANY  EDITING"
440 LOCATE 17,15
450 PRINT"FOR VALID MONTHS, DAYS, ETC.  I WILL LEAVE THAT  UP"
460 LOCATE 18,15
470 PRINT"TO YOU FOR WHATEVER USE YOU MIGHT FIND FOR THE CODE"
480 LOCATE 25,27
490 INPUT"PRESS ANY KEY TO CONTINUE ",A$
500 CLS
510 LOCATE 6,30:PRINT"DATES ENTRY SCREEN"
520 LOCATE 8,1:PRINT CHR$(201);STRING$(38,205);CHR$(203);STRING$(38,205);CHR$(187)
530 FOR X=9 TO 15:LOCATE X,1:PRINT CHR$(186):LOCATE X,40:PRINT CHR$(186):LOCATE X,79:PRINT CHR$(186):NEXT
540 LOCATE X,1:PRINT CHR$(200);STRING$(38,205);CHR$(202);STRING$(38,205);CHR$(188)
550 LOCATE 10,5
560 INPUT"ENTER BEGINNING MONTH AS MM  ",MM
570 LOCATE 11,5
580 INPUT"ENTER BEGINNING DAY AS DD    ",DD
590 LOCATE 12,5
600 INPUT"ENTER BEGINNING YEAR AS YYYY ",YY
610 GOSUB 2000
620 F1 = F
630 LOCATE 10,45
640 INPUT"ENTER ENDING MONTH AS MM     ",MM
650 LOCATE 11,45
660 INPUT"ENTER ENDING DAY AS DD       ",DD
670 LOCATE 12,45
680 INPUT"ENTER ENDING YEAR AS YYYY    ",YY
685 GOSUB 2000
690 F2= F
700 DIF=F2-F1
710 LOCATE 22,19
720 PRINT"THE NUMBER OF DAYS BETWEEN THE ABOVE DATES = ";DIF
990 END
2000 'THIS IS THE SUBROUTINE THAT ACTUALLY DOES THE FACTOR CALCULATION
2010 'IT FIRST CHECKS TO SEE IF THE MONTH IS LESS THAN 3.  IF SO THEN
2020 'WE HAVE NOT HAD A LEAP YEAR DAY YET SO WE DO NOT HAVE TO TAKE THAT
2030 'INTO CONSIDERATION.  IF THE MONTH IS > 3 THEN IT IS POSSIBLE THAT
2040 'WE NEED TO CONSIDER A LEAP YEAR AND THE PROGRAM ADJUST IS CALCS
2050 'ACCORDINGLY
2060 IF MM < 3 THEN 2500
2070 F = 365 * (YY) + DD + 31 * (MM - 1) - INT(.4 * MM + 2.3) + INT(YY / 4) - INT(.75 * (INT(YY / 100) + 1))
2490 RETURN
2500 F = 365 * (YY) + DD + 31 * (MM - 1) + INT((YY - 1)/4) - INT(.75 * (INT(((YY - 1)/100) + 1))
2510 RETURN
```

## DIR4.BAS

```bas
10 ' ******* DIR4.BAS *******
20 ' 8-31-84 by Thomas E. Link
30 ' to demonstrate DIR4.ASM
40 ' *************************
50 '
60 DIM DIRLST$(111),DIRLST%(222),DIRDAT%(111),DIRTIM%(111),A%(305)
70 ' we dimension above arrays to hold as many as 111 directory entries
100 LOOK$=STRING$(40,32)
110 VOLUME$=STRING$(12,32)
130 DEF SEG: BLOAD"dir4.bin",VARPTR(A%(0))
140 DIM COMPILED%(1): COMPILED%(1)=1: ERASE COMPILED%
150 LSET LOOK$="A:*.*"+CHR$(0)   ' default value for search
155                      ' LOOK$ must terminate with CHR$(0) for DOS 2.x
160 LSET VOLUME$="*"     ' we use this to see if there is a label later
170 COUNT%=0: DIRLST!=0
180 FOR X=0 TO 111: DIRLST$(X)=STRING$(12,32): NEXT  ' clear the name array
190 INPUT "input file specifier OR <enter> ",I$      ' do we override default
200 IF LEN(I$)>3 THEN LSET LOOK$=I$+CHR$(0)          ' whole name
210 IF LEN(I$)=2 AND RIGHT$(I$,1)=":" THEN LSET LOOK$=I$+"*.*"+CHR$(0)  ' drive only
220 F%=VARPTR(A%(0))
230 IF NOT COMPILED%(1) THEN CALL F%(COMPILED%(1),LOOK$,DIRLST$(0),DIRLST%(0),DIRDAT%(0),DIRTIM%(0),VOLUME$,COUNT%)
235 IF COMPILED%(1) THEN CALL ABSOLUTE(COMPILED%(1),LOOK$,DIRLST$(0),DIRLST%(0),DIRDAT%(0),DIRTIM%(0),VOLUME$,COUNT%,F%)
240 '**************      Now Print the list
250 IF INSTR(VOLUME$,"*") THEN 280
260 PRINT "Diskette is labeled: ";VOLUME$
270 '=========================================================================
280 FOR X=0 TO COUNT%-1   ' we have a record in element (0) so loop count-1
290 ' ***** print name
300 PRINT DIRLST$(X);
310 ' ***** print file length
315 DIRLEN!=(-(DIRLST%(X*2)<0)*(65536!)+DIRLST%(X*2))+(DIRLST%((X*2)+1)*65536!)
320 PRINT USING "########  ";DIRLEN!;
330 ' ***** print date
340 PRINT USING "##/";(DIRDAT%(X) AND 480)/32;(DIRDAT%(X) AND 31);:PRINT USING "##  ";((DIRDAT%(X) AND (-511))/512)+80;
350 ' ***** print creation time
360 PRINT USING "##:";((INT(DIRTIM%(X) / 2048))AND 31);((DIRTIM%(X) AND 2016)/32);:PRINT USING "##";((DIRTIM%(X) AND 31)*2)
370 DIRLST!=DIRLST!+DIRLEN!
380 NEXT     ' loop until done
390 PRINT: PRINT
400 PRINT DIRLST!;"bytes used in";COUNT%;"file";
410 IF COUNT%>1 OR COUNT%=0 THEN PRINT "s." ELSE PRINT "."
420 GOTO 150
430 ' this is the last line >>>>>>>>>>>>>>>>>>>>>>>
```

## FCBREAD.BAS

```bas
10 DEF SEG=&H2100  'Dependent upon your memory
20 '   This sample program serves as both an example and the documentation
30 '   for the FCBREAD.BSV routine that will read the directory of a
40 '   disk and present the matching file name back to the BASIC program.
50 '   Also available to the program is the directory information that
60 '   contains the size and time/date information. This routine is
70 '   faster than OPENing the file since it does not incur that overhead.
80 '   Also the user can present an arbitrary string to match on.
90 '
100 '   To use, BLOAD the routine into any available free memory. It
110 '   has 2 entry points (INIT and GETNEXT). INIT (offset 2) is used
120 '   to define the disk drive (0=default, 1=A, 2=B, ....) and the
130 '   pattern to be used to match on. The pattern MUST BE a string of
140 '   length 11; the first 8 are the filename and the last 3 are the
150 '   extension. A "?" is used to match any character. For example to
160 '   get all the BASIC files on the disk, "????????BAS" would be used
170 '   as the input parameter. After INIT has been called, calls to
180 '   GETNEXT (offset 5) are made to retrieve matching file names.
190 '   The two parameters are the string in which the match is returned
200 '   (which must be of length 14) and an INTEGER (..%) return value.
210 '   If the status return is <0, no more matched have been found. If
220 '   status >=0, it is the FILE ATTRIBUTE (as defined in the DOS Disk
230 '   Directory).
240 '
250 '   The INTEGER value at offsets 0,1 in the routine are the offset
260 '   to the directory entry for the file. For example, to obtain the
270 '   DATE information of the file, use the following statements:
280 '        B% = PEEK(0)+PEEK(1)*256   ' Get offset value
290 '        FDATE = PEEK(B%+26)*256 + PEEK(B%+25)
300 '
310 '   The offsets into the directory entry (25, 26 in this case) are
320 '   defined in the DOS manual.
330 '
340 '   The example program will print all the file names on the current
350 '   Directory plus their attributes.
360 BLOAD "fcbread.bsv",0
370 INIT%=2:GETNEXT%=5
380 FILENAME$="???????????"
390 DISK%=1:CALL INIT%(DISK%,FILENAME$)
400 FILENAME$=SPACE$(14):CALL GETNEXT%(FILENAME$,STATUS%)
410 PRINT FILENAME$,STATUS%
420 IF STATUS%>=0 THEN GOTO 400
```

## FIND-DS.BAS

```bas
1 REM this finds the value of BASIC/BASICA'S data segment. useful for determining
2 REM absolute location of a variable, file buffer, etc.
3 REM
4 REM Mark Minasi 5400 Wilson Blvd, Arl. VA 22205 (703) 276-0170
5 REM
6 REM as usual, don't use for profit...
7 REM
10 DEF SEG
20 X=0:SUBRT=0:I=0:J=0:A%=0
30 REM finds the data segment
40 DIM CODE(40)
50 SUBRT=VARPTR(CODE(0))
60 X=(SUBRT+16) MOD 16
70 SUBRT=SUBRT+16-X
80 FOR I=0 TO 13:READ J:POKE SUBRT+I,J:NEXT
90 DATA &h55,&h8c,&hd8,&h89,&he5,&h8b,&h7e,&h06,&h89,&h05,&h5d,&hca,&h02,&h00
100 CALL SUBRT(A%) 'give back ds
110 PRINT "data segment=";HEX$(A%)
```

## GETSP.BAS

```bas
70 CLS
80 PRINT "CREATING GETSPACE SUBROUTINE...": PRINT
120 DEF SEG
130 SUBRT$=STRING$(248,32)
140 SUBLC%=VARPTR(SUBRT$)
150 FREESPC = PEEK(SUBLC%+2) + PEEK(SUBLC%+3) * 256
160 LCN = FREESPC
200 LINENO%=450
210 FOR STMT = 1 TO 31
220 FOR MEM = 1 TO 8
230   READ DT%
240   POKE LCN,DT%
250   CHECKSUM%=CHECKSUM% + DT%
260   LCN = LCN + 1
270 NEXT
280 READ DT%
290 IF CHECKSUM% <> DT% THEN 400
300 LINENO% = LINENO% + 10
310 CHECKSUM% = 0
320 NEXT
360 BSAVE "GETSPACE",FREESPC,244
370 PRINT "GETSPACE SUBROUTINE CREATED"
380 END
400 PRINT "ERROR IN DATA STATEMENT - CHECK LINE "LINENO%: END
440 DATA  85, 139, 236, 139,  94,   6, 139, 127, 965
450 DATA   2, 185,   8,   0, 176,  32, 252, 243, 898
460 DATA 170, 139,  94,   8, 139, 119,   2, 139, 810
470 DATA   4,  36, 223,  60,  65, 125,   3, 233, 749
480 DATA 205,   0,  80, 180,  48, 205,  33, 134, 885
490 DATA 196,  61,   0,   2, 114,   3, 233, 127, 736
500 DATA   0, 180,  25, 205,  33,  90, 128, 242, 903
510 DATA  64, 254, 202,  58, 194, 116,  17,  80, 985
520 DATA  82, 180,  14, 205,  33,  89,  90, 254, 947
530 DATA 193,  58, 200, 118,   3, 233, 159,   0, 964
540 DATA  82, 180,  27, 205,  33,  88,  82, 134, 831
550 DATA 194, 180,  14, 205,  33,  90, 139, 251, 1106
560 DATA 138,   5, 139, 241,  60, 254, 116,   2, 955
570 DATA 209, 230, 131, 199,   3, 139, 202,  51, 1164
580 DATA 192,  51, 210,  80,  82, 139,   5,  71, 830
590 DATA  37, 255,  15,  61,   0,   0, 117,  10, 495
600 DATA 248,  90,  88,   3, 198, 115,   1,  66, 809
610 DATA  80,  82,  73, 227,  28, 139,   5, 131, 765
620 DATA 199,   2,  81, 177,   4, 211, 232,  89, 995
630 DATA  61,   0,   0, 117,  10, 248,  90,  88, 614
640 DATA   3, 198, 115,   1,  66,  80,  82, 226, 771
650 DATA 204, 140, 192, 142, 216, 235,  24, 144, 1297
660 DATA  90, 128, 242,  64, 180,  54, 205,  33, 996
670 DATA  61, 255, 255, 116,  50,  51, 210, 247, 1245
680 DATA 225, 135, 217, 247, 225,  80,  82, 139, 1350
690 DATA  94,   6, 139, 127,   2, 131, 199,   7, 705
700 DATA  90,  88, 190,  10,   0,  80, 139, 194, 791
710 DATA  51, 210, 247, 246,  89,  80, 139, 193, 1255
720 DATA 247, 246,  94, 128, 202,  48, 136,  21, 1122
730 DATA  79, 135, 214,  11, 192, 117, 227,  93, 1068
740 DATA 202,   4,   0, 203,   0,   0,   0,   0, 409
```

## GETSP1.BAS

```bas
50 KEY OFF
60 DEF SEG
70 SUBRT$=STRING$(244,32)
80 SUBLC%=VARPTR(SUBRT$)
90 GOSUB 420
100 BLOAD "GETSPACE",GETSPAC%
140 RETSPACE$=STRING$(8,32)
150 CLS
190 LOCATE 1,17
200 PRINT "* * *  DEMONSTRATION GET SPACE SUBROUTINE  * * * "
210 LOCATE 3,10,1
220 PRINT "SPECIFY DRIVE LETTER FOR GETSPACE INQUIRY :";
230 GOSUB 480: DRV$=KY$: PRINT DRV$
270 LOCATE ,,0: GOSUB 420
280 CALL ABSOLUTE(DRV$,RETSPACE$,GETSPAC%)
320 LOCATE 5,10
330 IF RETSPACE$<> STRING$(8,32) THEN 350
340 SOUND 50,7: PRINT "INVALID DRIVE LETTER FOR SYSTEM SPECIFIED!": GOTO 380
350 RETSPC# = VAL(RETSPACE$)
360 PRINT "DISK ON DRIVE"DRV$":HAS "RETSPC#" BYTES FREE"
370 BEEP: PRINT
380 PRINT: PRINT "PRESS SPACE BAR TO CONTINUE OR (S) TO STOP "
390 GOSUB 480: CN$=KY$
400 IF CN$="S" OR CN$="s" THEN END
410 GOTO 150
420 ' RETRIEVE LOCATION OF SUBROUTINE
450 GETSPAC% = PEEK(SUBLC% + 2) + PEEK(SUBLC%+3) * 256
460 RETURN
480 ' KEYIN ROUTINE
500 KY$=INKEY$: IF KY$="" THEN 500
510 RETURN
```

## HEAPSORT.BAS

```bas
100 CLEAR 5000
110 CLS               ' Sort Program     Heap Sort
120 DIM N(150),C$(150)
130 PRINT"type  C  for character string sort"
140 PRINT"Type  N  for numer sort"
150 INPUT W$
160 N=0:PRINT:PRINT
170 IF W$="n" THEN 480                  ' Goto to Number sort
180 IF W$<>"c" THEN 130
190 REM====================  Begin Character Sort
200 GOSUB 720 : INPUT S$
210 N=N+1
220 INPUT C$(N)
230 IF C$(N)<>S$ THEN 210
240 N=N-1:PRINT
250 L=INT(N/2)+1
260 N1=N
270 IF L=1 THEN 310
280 L=L-1
290 A$=C$(L)
300 GOTO 350
310 A$=C$(N1)
320 C$(N1)=C$(1)
330 N1=N1-1
340 IF N1=1 THEN 440
350 J=L
360 I=J
370 J=2*J
380 IF J=N1 THEN 400
390 IF J>N1 THEN 420
392 IF C$(J)=>C$(J+1) THEN 400
396 J=J+1
400 IF A$=>C$(J) THEN 420
410 C$(I)=C$(J)
415 GOTO 360
420 C$(I)=A$
425 GOTO 270
440 C$(1)=A$
450 FOR I=1 TO N
453    PRINT C$(I)
456 NEXT I
460 GOTO 130
470 REM ================  Start of numeric sort
480 GOSUB 720
483 INPUT S
486 PRINT
490 N=N+1
493 INPUT N(N)
496 IF N(N)<>S THEN 490
500 N=N-1
505 PRINT
520 L=INT(N/2)+1
525 N1=N
530 IF L=1 THEN 550
540 L=L-1
543 A=N(L)
546 GOTO 590
550 A=N(N1)
555 N(N1)=N(1)
560 N1=N1-1
570 IF N1=1 THEN 680
590 J= L
600 I=J
605 J=2*J
610 IF J=N1 THEN 640
620 IF J>N1 THEN 660
630 IF N(J)<N(J+1) THEN J=J+1
640 IF A>N(J) THEN 660
650 N(I) = N(J)
655 GOTO 600
660 N(I)=A
665 GOTO 530
680 N(1)=A
690 FOR I=1 TO N
693   PRINT N(I)
696 NEXT I
700 GOTO 130
720 PRINT"Enter a stop code to indicate the end of list"
740 RETURN
```

## INKEY.BAS

```bas
1 ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
2 ''      ULTIMATE INKEY      (C) COPYRIGHT  1983     NELSON FORD         ''
3 ''                                                                      ''
4 ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
10 DEFINT A-Z:  SCREEN 0,0,0,0:  WIDTH 80:  FG=7:  BF=0:  COLOR FG,BG:  CLS
20 DEF SEG:  POKE 106,0
30 YES = NOT NO:    NO = NOT YES
40 ESC = 27:  ESC$ = CHR$(ESC):  ENTR$ = CHR$(13)
50 BACKSPACE$ = CHR$(8)
60 LF.CURSOR=75:  RT.CURSOR=77:  END.KEY=79:  INS.KEY=82:  DEL.KEY=83:  HOME=71:   CTRL.END=117
70 GOTO 700
90 '
91 '''''''''''''''''''''''''''inkey routine''''''''''''''''''''''''''''''''
92 '
100 '  FL is the field length, passed to this routine by the main program
110 '
120 INS.LENGTH = 0:  CURSOR.POS = 1:  SOUND 80, .03:  MOVE.IT = NO:  KY = 0
130 CURSOR.START = POS(0)
140 CHAR.ACCEPT.CODE = FIX( FL / 100 )
150 FL = FL - CHAR.ACCEPT.CODE*100
160 IN$ = SPACE$(FL)
170 IF PROMPT$ <> "" THEN IN$ = LEFT$( PROMPT$ + SPACE$(FL), FL ):                  INS.LENGTH = LEN(PROMPT$):  PROMPT$=""
180 COLOR BG,FG
190 LOCATE, CURSOR.START, 1:   PRINT IN$;
200 LOCATE, CURSOR.START + CURSOR.POS - 1
210 N$ = INKEY$:   IF N$ = "" THEN 210
220 IF LEN(N$) = 1 THEN 350
230 '  Lines 240 thru 330 check for special keys.  You can omit this                   section if you do not need this function.
240 KY = ASC( RIGHT$(N$,1) )    'check for edit keys:
250 IF KY = LF.CURSOR THEN  IF CURSOR.POS > 1 THEN CURSOR.POS = CURSOR.POS - 1:     GOTO 200  ELSE 210
260 IF KY = DEL.KEY THEN IN$= LEFT$( IN$, CURSOR.POS - 1 ) + RIGHT$( IN$,FL    -    CURSOR.POS ) + " ":  INS.LENGTH = INS.LENGTH - 1:  GOTO 190
270 IF KY = INS.KEY THEN IF INSERT = NO THEN INSERT = YES:  LOCATE,,,4,7:           GOTO 190  ELSE INSERT = NO:  LOCATE,,,7:  GOTO 210
280 IF KY = HOME THEN CURSOR.POS = 1: GOTO 200
290 IF KY = CTRL.END THEN IN$ = LEFT$(IN$,CURSOR.POS-1) +SPACE$(FL - CURSOR.POS     + 1):   INS.LENGTH = CURSOR.POS - 1:  GOTO 190
300 IF KY= RT.CURSOR THEN CURSOR.POS = CURSOR.POS -(CURSOR.POS < INS.LENGTH):       GOTO 200
310 IF KY = END.KEY THEN CURSOR.POS = INS.LENGTH + 1:  GOTO 200
320 MOVE.IT = YES
330   GOTO 600  'not an edit key, but is a special key:  end input.
340 '
350 IF N$ = ESC$ THEN KY = ESC:  IN$=N$:  GOTO 320
360 IF CURSOR.POS > FL THEN 420
370 '
380 IF CHAR.ACCEPT.CODE = 0 AND N$ >= " " AND N$ <= "z" THEN 500
390 IF CHAR.ACCEPT.CODE = 1 AND N$ >= "0" AND N$ <= "9" THEN 500
400 IF CHAR.ACCEPT.CODE = 2 THEN IF N$ >= " " AND N$ < "a" THEN 500                    ELSE IF N$ >= "a" AND N$ <= "z" THEN N$ = CHR$(ASC(N$)-32):  GOTO 500
410 IF CHAR.ACCEPT.CODE = 3 AND INSTR(ACCEPT$, N$) > 0  THEN 500
415 '
420 IF N$ = ENTR$ THEN 600
430 IF N$ <> BACKSPACE$ OR CURSOR.POS = 1 THEN 210
440 '
450 IN$ = LEFT$(IN$, CURSOR.POS-2) +RIGHT$(IN$, FL -CURSOR.POS+1)+" "
460 INS.LENGTH = INS.LENGTH -1
470 CURSOR.POS = CURSOR.POS -1
480   GOTO 190
490 '
500 IF NOT INSERT THEN MID$(IN$, CURSOR.POS, 1) = N$:  GOTO 550               
510 IF INS.LENGTH >= FL  THEN 210
520 IN$ = LEFT$(LEFT$(IN$, CURSOR.POS-1) +N$ +RIGHT$(IN$, FL-CURSOR.POS +1),FL)
530 CURSOR.POS = CURSOR.POS + 1:   INS.LENGTH = INS.LENGTH + 1
540   GOTO 190
550 IF CURSOR.POS = 1 THEN IN$ = N$ + SPACE$(FL - 1):  PRINT IN$;:                  LOCATE, CURSOR.START:   INS.LENGTH = 1
560 PRINT N$;
570 CURSOR.POS = CURSOR.POS + 1
580 IF CURSOR.POS > INS.LENGTH THEN INS.LENGTH = CURSOR.POS - 1
590 GOTO 190
600 COLOR FG,BG:  LOCATE, CURSOR.START, 0, 7:   PRINT IN$;
610 IN$ = LEFT$(IN$, INS.LENGTH)
615 INSERT = NO
620   RETURN
670 '
680 '                 main menu:
690 '
700 CLS
710 LOCATE  4,33:  PRINT "   MAIN MENU "
720 LOCATE 10,33:  PRINT "1  Enter Data"
730 LOCATE 11,33:  PRINT "2  Print Reports"
740 LOCATE 12,33:  PRINT "3  Save Data"
750 LOCATE 14,33:  PRINT "   SELECT  "
760 LOCATE 14,33:  FL = 301:  ACCEPT$ = "123":  GOSUB 100
770 IF IN$ < "1" OR IN$ > "3" THEN 760
780 ON VAL(IN$) GOTO 1000, 2000, 3000
990 '
1000 'enter data:
1010 '
1020 CLS: LOCATE 4,35:  PRINT "DATA ENTRY":  I=1
1030 LOCATE 10,20:  PRINT "NAME:    "  NAM$(I)
1040 LOCATE 12,20:  PRINT "ADDRESS: "  ADDR$(I)
1050 LOCATE 14,20:  PRINT "CITY:    "  CITY$(I)
1060 LOCATE 16,20:  PRINT "STATE:   "  STATE$(I)
1070 LOCATE 16,40:  PRINT "ZIP:  " ZIP$(I)
1079 '
1080 'name:
1090 LOCATE 10,30:  FL = 25:  PROMPT$ = NAM$(I):  GOSUB 100
1095 IF IN$ = ESC$ THEN 700
1100 IF MOVE.IT THEN IF I > 1 THEN I = I - 1:  GOTO 1030
1110 NAM$(I) = IN$
1120 'addr:
1130 LOCATE 12,30:  FL = 20:  PROMPT$ = ADDR$(I):  GOSUB 100
1140 IF MOVE.IT THEN 1090
1150 ADDR$(I) = IN$
1160 'city:
1170 LOCATE 14,30:  FL = 15:  PROMPT$ = CITY$(I):  GOSUB 100
1180 IF MOVE.IT THEN 1130
1190 CITY$(I) = IN$
1200 'state:
1210 LOCATE 16,30:  FL = 202:  PROMPT$ = STATE$(I):  GOSUB 100
1220 IF MOVE.IT THEN 1170
1230 STATES$="OK TX AL GA FL AZ SC MI"
1240 LOCATE 18,30
1250 IF INSTR(STATES$, IN$) = 0 THEN  PRINT "INVALID STATE":  GOTO 1210              ELSE PRINT SPACE$(13)
1260 STATE$(I) = IN$
1270 'zip
1280 LOCATE 16,46:  FL = 105:  PROMPT$ = ZIP$(I):  GOSUB 100
1290 IF MOVE.IT THEN 1210
1300 LOCATE 18,46
1310 IF VAL(IN$) < 30000 OR VAL(IN$) > 89999! THEN PRINT "INVALID ZIP": GOTO 1280:    ELSE PRINT SPACE$(11)
1320 ZIP$(I) = IN$
1330 'loop:
1340 I = I + 1
1350 GOTO 1030
2000 '
2010 GOTO 700
3000 '
3010 GOTO 700
```

## INKEY2.BAS

```bas
1 '                           INKEY DEMO
2 '                     (C) 1984   NELSON FORD
3 '        by Nelson Ford, P.O.Box 61565,  Houston, TX 77035
4 '
5 ' (A simplified version of this program with explanations appeared in the       '  June 1984 issue of PC TECH JOURNAL.  The added code allows input to be       '  controlled on a character-by-character basis.)
6 '
7 ' This code is taken from DISKCAT, (C) 1983,1984  N. FORD, a disk file          ' catalog program.  The compiled versions of the DISKCAT programs are           ' available in user group libraries and bulletin boards.  The latest
8 ' version of DISKCAT with the complete BASIC source code may be ordered         ' for $35 from the above address.  Placing this portion of the code in          ' the public domain does not abrogate the DISKCAT copyrights.
9 '
10 DEFINT A-Z:  SCREEN 0,1:  COLOR 7,0,0:  WIDTH 80:  CLS:  KEY OFF
20 FG=7:  HL=1:  BG=0  'FG=foreground color, HL=highlight, BG=background
30 DEF SEG=0:  IF (PEEK(&H410) AND &H30)<>&H30 THEN HL=15
40 COLOR FG, BG, BG
50 YES=NOT NO:  NO=NOT YES
60 DIM LOCKS$(3)  'used in inkey routine to display -lock status.
70 LOCKS$(0)=STRING$(7,219): LOCKS$(1)=STRING$(4,219)+"NUM"
80 LOCKS$(2)="CAP"+STRING$(4,219):  LOCKS$(3)="CAP"+CHR$(219)+"NUM"
90 NTR$=CHR$(13):  BKSP$=CHR$(8):  ESC$=CHR$(27):  UP$=CHR$(24): DN$=CHR$(25):     RT$=CHR$(26):  LF$=CHR$(27):  BREAK$=CHR$(3)
100 ENTR$=" "+CHR$(17)+STRING$(2,196)+CHR$(217)+" "
110 NUMS=1:  CAPS=2
120 LF.CURSOR=75:  RT.CURSOR=77:  END.KEY=79:  INS.KEY=82:  DEL.KEY=83:  HOME=71:   DN.CURSOR=80:  UP.CURSOR=72:  CTRL.END=117: ESC=27: CTRL.RT=116: CTRL.LF=115:   PG.UP=73:      PG.DN=81
130 GOTO 890
140 '
150 '''''''''''''''''''''inkey routine''''''''''''''''''
160 '
170 WD=0: WS=0: WL=0: WI=1: SOUND 80,.03: MOVE.IT=NO:  KY=0:  IN$=INKEY$
180 QX= POS(0):  QY=CSRLIN
190 QC$=CONTROL$: CONTROL$="": IF QC$="" THEN QC=NO: GOTO 210 ELSE QC=YES
200 IF INSTR("U#_",MID$(QC$,WI,1))=0 THEN WI=WI+1: GOTO 200
210 CHAR.CODE= FIX(FL/100):  IF CHAR.CODE>0 THEN FL= FL - CHAR.CODE*100
220 IN$= SPACE$(FL):  IF PROMPT$="" THEN IN$= SPACE$(FL): GOTO 250
230 IN$= LEFT$(PROMPT$+SPACE$(FL),FL):  WL=LEN(PROMPT$):  PROMPT$=""
240 IF MID$(IN$,WL,1)=" " THEN WL=WL-1:  IF WL>0 THEN 240
250 COLOR BG,FG
260 LOCATE QY,QX,1: PRINT IN$;
270 LOCATE QY,QX+WI-1
280 W$=INKEY$:  DEF SEG=&H40: QK=PEEK(&H17) AND 96:
290 IF QK1<>QK THEN LOCATE 25,73: PRINT LOCKS$(QK/32);: QK1=QK: SOUND 400+QK,.3:    GOTO 270
300 IF W$="" THEN 280
310 IF W$=BREAK$ THEN STOP
320 IF LEN(W$)=1 THEN 480  ELSE  KY= ASC(RIGHT$(W$,1))
330 IF QC THEN 350
340 IF KY= INS.KEY THEN IF INSERT=NO THEN INSERT=YES: LOCATE,,,4,13: GOTO 260                                        ELSE INSERT=NO:  LOCATE,,,13: GOTO 280
350 IF KY= RT.CURSOR THEN WI=WI-(WI<WL): GOTO 270
360 IF KY= LF.CURSOR THEN WI=WI+(WI> 1): GOTO 270
370 IF KY=DEL.KEY THEN IF NOT QC THEN IN$= LEFT$(IN$,WI-1)+RIGHT$(IN$,FL-WI)+" ":     WL=WL-1: GOTO 260  ELSE MID$(IN$,WI,1)=" ": GOTO 260
380 IF INSERT THEN INSERT=NO: LOCATE,,,13
390 IF KY= HOME THEN WI=1: GOTO 270
400 IF KY= END.KEY THEN WI= WL+1:  GOTO 270
410 IF KY= CTRL.END THEN IN$=LEFT$(IN$,WI-1)+SPACE$(FL-WI+1): WL=WI-1: GOTO 260
420 IF KY<>CTRL.RT OR WI=WL+1 THEN 440
430 WI=WI+1: IF WI=WL+1 THEN 270 ELSE IF MID$(IN$,WI-1,1)=" " THEN 270 ELSE 430
440 IF KY<>CTRL.LF OR WI=1 THEN 470
450 QC$=CONTROL$: CONTROL$="": IF QC$="" THEN QC=NO ELSE QC=YES
460 WI=WI-1: IF WI=1 THEN 270 ELSE IF MID$(IN$,WI-1,1)=" " THEN 270 ELSE 460
470 MOVE.IT= YES: GOTO 790
480 IF W$= NTR$ THEN 790
490 IF W$= ESC$ THEN  KY=ESC:  MOVE.IT=YES:  GOTO 790
500 IF NOT QC THEN 600
510 IF W$ <> BKSP$ THEN 540
520 IF WI>1 THEN WI=WI-1: Q$=MID$(QC$,WI,1)  ELSE 260
530 IF INSTR("#U_",Q$) =0 THEN 500 ELSE MID$(IN$,WI,1)=" ": GOTO 260
540 IF WI>FL THEN 600
550 Q$= MID$(QC$,WI,1)
560 IF Q$="#" THEN CHAR.CODE=NUMS: GOTO 600
570 IF Q$="U" THEN CHAR.CODE=CAPS: GOTO 610
580 IF Q$="_" THEN CHAR.CODE=0: GOTO 610
590 W$=Q$:  GOTO 680
600 IF CHAR.CODE=NUMS THEN IF (W$="-" AND WI>1) OR W$="+" THEN IN$=W$+IN$:          GOTO 790
610 IF WI>FL THEN 650
620 IF CHAR.CODE=0  THEN IF W$>=" " AND W$<="~" THEN 680
630 IF CHAR.CODE=NUMS THEN IF W$>="0" AND W$<="9" THEN 680
640 IF CHAR.CODE=CAPS THEN IF W$>="a" AND W$<="z" THEN W$=CHR$(ASC(W$)-32):         GOTO 680  ELSE IF W$>=" " AND W$<"a" THEN 680
650 IF W$=BKSP$ THEN IF WI>1 THEN IN$=LEFT$(IN$,WI-2)+RIGHT$(IN$,FL-WI+1)+" ":      WL=WL-1: WI=WI-1:  GOTO 260
660 GOTO 280
670 '
680 IF NOT INSERT THEN MID$(IN$,WI,1)=W$  ELSE  IF WL < FL THEN WL=WL+1:            IN$= LEFT$( LEFT$(IN$,WI-1) +W$ +RIGHT$(IN$,FL-WI+1), FL): WI=WI+1: GOTO 260    ELSE 280
690 IF WI>1 THEN 740
700 IF NOT QC THEN IN$=W$+SPACE$(FL-1): GOTO 730
710 FOR QQ=2 TO FL: IF INSTR("#u=UI_",MID$(QC$,QQ,1))>0 THEN MID$(IN$,QQ,1)=" "
720 NEXT
730 LOCATE,QX: PRINT IN$;: LOCATE,QX: WL=1
740 PRINT W$;
750 WI=WI+1: IF WI>WL THEN WL=WI-1
760 IF WI=>FL THEN 780
770 IF QC THEN Q$=MID$(QC$,WI,1): IF INSTR("#Ul_",Q$)=0 THEN W$=Q$: GOTO 680
780 IF FL>2 OR WL<FL THEN 260
790 COLOR FG,BG:  LOCATE QY,QX,,13:  PRINT IN$;:  IN$=LEFT$(IN$,WL): INSERT=NO:     RETURN
800 '
810 LOCATE 25,29
820 U$= "press|"+ENTR$+"|to continue": GOSUB 850:  FL=0: GOSUB 170
830 RETURN
840 '
850 U=1:  ULEN=LEN(U$):  U1=FG:  U2=HL
860 UU=INSTR(U,U$,"|"): UU=UU-(UU=0)*(ULEN+1):  PRINT MID$(U$,U,UU-U);:  U=UU+1:    SWAP U1,U2:  COLOR U1:  IF ULEN >U OR U=1 THEN 860  ELSE COLOR FG,BG
870 RETURN
880 '''''''''''''''''''''main menu''''''''''''''''''''''
890 '
900 COLOR FG,BG,BG:  CLS:  QK1=0:  LOCATE 22,18
910 U$= "Press  |Esc|  at prompts to return to this menu.": GOSUB 850
920 LOCATE 3,35: COLOR HL: PRINT"MAIN MENU": COLOR FG: LOCATE 6,1:  X=31
930 LOCATE,X: PRINT"1  Enter Data"
940 LOCATE,X: PRINT"2  Print Reports"
950 LOCATE,X: PRINT"3  Etc."
960 LOCATE,X: PRINT"4  Etc."
970 LOCATE,X: PRINT"5
980 LOCATE,X: PRINT"6
990 LOCATE,X: PRINT"7
1000 LOCATE,X: PRINT"8
1010 LOCATE,X: PRINT"9  End"
1020 '
1030 LOCATE 17,X: PRINT "   Select an option."
1040 LOCATE 17,X:  FL=201:  GOSUB 170
1050 IF IN$<"1" OR IN$>"9" THEN 1040
1060 JOB=VAL(IN$)
1070 ON JOB GOTO 1100,1040,1040,1040,1040,1040,1040,1040,1080: GOTO 1040
1080 CLS:END
1090 '
1100 '                 Enter Data
1110 '
1120 CLS: QK1=0: LOCATE 23,9: U$=UP$+"-|prior field.|  "+DN$+"-|next field.|  PgUp-|prior entry.|  PgDn-|next entry.|":  GOSUB 850
1130 COLOR HL:  LOCATE 21,10:  PRINT "Cursor control keys";:  COLOR FG
1140 PRINT ":   "LF$"  "RT$"  CTRL"LF$"  CTRL"RT$"  Home  End  Ins  Del"
1150 LOCATE 8,35: PRINT "Names & Addresses" TAB(62) "Input control:"
1160 LOCATE 10,1:  X=30:  Y=62:  Z=41
1170 LOCATE,X:  PRINT "Entry #  "
1180 LOCATE,X:  PRINT "Name     "  TAB(Y) "upper case forced"
1190 LOCATE,X:  PRINT "Address  "  TAB(Y) "any input allowed"
1200 LOCATE,X:  PRINT "City, St."  TAB(Y) "any & upper case
1210 LOCATE,X:  PRINT "Zip Code "  TAB(Y) "numbers forced"
1220 LOCATE,X:  PRINT "Telephone"  TAB(Y) "# format forced"
1230 COLOR FG:  LAST=0
1240 '
1250 I=1
1260 J=1:  LOCATE 10,Z: PRINT I
1270 ON J GOSUB 1420,1430,1440,1450,1460
1280 IF PROMPT$="" THEN PROMPT$=DTA$(I,J)
1290 LOCATE 10+J,Z:  GOSUB 170
1300 IF NOT MOVE.IT THEN 1360
1310   IF KY=UP.CURSOR THEN J=J+(J>1):  GOTO 1270
1320   IF KY=DN.CURSOR THEN J=J-(J<5):  GOTO 1270
1330   IF KY=PG.UP THEN IF I>1 THEN I=I-1: GOSUB 1490: GOTO 1260  ELSE BEEP:           GOTO 1270
1340   IF KY=PG.DN THEN I=I+1: IF I<=LAST THEN GOSUB 1490: GOTO 1260 ELSE 1390
1350   IF KY=ESC THEN GOTO 890
1360 IF IN$<>"" THEN DTA$(I,J)=IN$
1370 IF J<5 THEN J=J+1:  GOTO 1270
1380 IF I>LAST THEN LAST=I: I=I+1 ELSE I=LAST+1
1390 FOR K=1 TO 5: LOCATE 10+K,Z: PRINT SPACE$(20):  NEXT
1400 GOTO 1260
1410 '
1420 FL=215:  RETURN
1430 FL= 20:  RETURN
1440 FL= 15:  CONTROL$="___________, UU":  PROMPT$="           ,":  RETURN
1450 FL=105:  RETURN
1460 FL= 14:  CONTROL$="(###) ###-####"
1470 IF DTA$(I,J)="" THEN DTA$(I,J)=CONTROL$
1480 RETURN
1490 LOCATE 10,Z: PRINT I: FOR J=1 TO 5: LOCATE 10+J,Z: PRINT DTA$(I,J): NEXT:       RETURN
```

## JOYSTIK.BAS

```bas
10 REM Program to watch the joystick ports
20 REM Will Fastie - 23 Dec 81
30 KEY OFF: CLS: STRIG ON
40 F$="#### #### (##)    #### #### (##)"
50 LOCATE 8,1: PRINT "   Joystick A        Joystick B"
60 PRINT "   X    Y   T        X    Y   T"
70 AX=STICK(0): AY=STICK(1): AT=STRIG(0) OR STRIG(1)
80 BX=STICK(2): BY=STICK(3): BT=STRIG(2) OR STRIG(3)
90 LOCATE 10,1: PRINT USING F$;AX,AY,AT,BX,BY,BT
100 GOTO 70
```

## JULIAN.BAS

```bas
10 'GREGORIAN->JULIAN->ORDINAL AND ORDINAL->JULIAN->GREGORIAN CONVERSION
20 '(1)  <Month_name> 3 letters to full name with space terminator. <Day-no.>
30 '     with comma terminator. Space character between comma and <Year> is
40 '     optional.
50 '(2)  MM-DD-YY Where MM & DD may be single digits, YY may be 4 digits
60 'ORDINAL TO JULIAN AND GREGORIAN FORMAT
70 'ORDINAL BASE IS 01-01-80 = 1
80 '                    Arnold Thomsen
90 '                    3811 N. 60 Place
100 '                   Scottsdale, Az 85251
110 '                                              09-16-82 = 990
120 DEFINT A-Z: DIM TBL(14)
130 WEEK$="MON TUE WED THU FRI SAT SUN "
140 MONTH$="JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC "
150 SCREEN 0,0,0,0: COLOR 7,0: WIDTH 80: KEY OFF: CLS
160 PRINT:PRINT "Conversion from various date formats to different formats"
170 PRINT "Notes:"
180 PRINT "Julian date is printed in all conversions"
190 PRINT "Gregorian examples: 'SEP 1, 1982' or 'SEPTEMBER 1,1982'"
200 PRINT "                           ^             ^^^^^^ 3 char min"
210 PRINT "                           ^ space char optional"
220 PRINT "MM AND DD may be 1 or 2 digits"
230 PRINT "YY may be the last 2 digits of year or all 4 digits"
240 PRINT "Ordinal Day 1 = Jan 1, 1980": PRINT
250 PRINT "TO Quit press ENTER or       type 0"
260 PRINT "FOR Gregorian     to Ordinal type 1"
270 PRINT "FOR MM-DD-YY      to Ordinal type 2"
280 PRINT "FOR DEC Ordinal to Gregorian type 3"
290 INPUT "FOR HEX Ordinal to Gregorian type 4:  ",T
300 COLOR 7,0
310 ON T GOTO 330,420,790,750
320 END
330 PRINT: LINE INPUT "Enter: <MONTH_NAME><SPACE><DAY>,[SPACE]<YEAR> ";IN$
340 IF LEN(IN$) = 0 GOTO 150
350 MM$ = LEFT$(IN$,3): MM = 13 'ASSUME ERROR
360 FOR G = 1 TO 12
370 IF MID$(MONTH$,4*G-3,3) = MM$ THEN MM = G
380 NEXT G
390 IF MM = 13 THEN PRINT: PRINT "MONTH NOT FOUND": GOTO 300
400 B = INSTR(IN$," "): IF B = 0 GOTO 330
410 C = INSTR(B+2,IN$,","): IF C = 0 GOTO 330 ELSE C = C + 1: GOTO 500
420 PRINT: INPUT "INPUT MONTH-DAY-YEAR (MM-DD-YY)";IN$
430 IF LEN(IN$) = 0 GOTO 150
440 IF MID$(IN$,2,1) = "-" THEN B = 3: GOTO 460
450 IF MID$(IN$,3,1) = "-" THEN B = 4 ELSE GOTO 420
460 IF MID$(IN$,4,1) = "-" THEN C = 5: GOTO 490
470 IF MID$(IN$,5,1) = "-" THEN C = 6: GOTO 490
480 IF MID$(IN$,6,1) = "-" THEN C = 7 ELSE GOTO 420
490 MM=VAL(LEFT$(IN$,2)):IF MM<1 OR MM>12 THEN PRINT "MONTH ERROR":GOTO 300
500 DD=VAL(MID$(IN$,B,3)):IF DD<1 OR DD>31 THEN PRINT "DAY ERROR": GOTO 300
510 YY=VAL(MID$(IN$,C,5)): IF YY < 100 THEN YY = YY + 1900
520 IF YY < 1980 THEN PRINT "YEAR ERROR": GOTO 300
530 GOSUB 620  'DECIDE LEAPNESS
540 J = TBL(MM)+DD
550 YY = YY - 1980
560 L = INT((YY+3)\4)  'LEAP YEAR DAYS
570 ORD = YY*365+L+J
580 PRINT "Julian Day = ";J
590 PRINT "Ordinal Day = ";ORD
600 GOTO 300
610 'DECIDE LEAPNESS SUBROUTINE
620 RESTORE
630 FOR K = 1 TO 13
640 READ TBL(K)
650 NEXT K
660 IF YY MOD 4 <> 0 THEN RETURN
670 IF YY MOD 400 = 0 THEN RETURN
680 FOR K = 1 TO 13
690 READ TBL(K)
700 NEXT K
710 RETURN
720 DATA 0,31,59,90,120,151,181,212,243,273,304,334,365
730 DATA 0,31,60,91,121,152,182,213,244,274,305,335,366
740 'ORDINAL TO GREGORIAN CONVERSION
750 PRINT: INPUT "INPUT HEX ORDINAL DAY NO. = ",ORD$
760 IF LEN(ORD$) = 0 GOTO 150
770 GOSUB 1030
780 IF EFLAG = 0 GOTO 860 ELSE GOTO 300
790 PRINT: INPUT "INPUT DEC ORDINAL DAY NO. = ",ORD$
800 IF LEN(ORD$) = 0 GOTO 150
810 EFLAG = 0
820 FOR Q = 1 TO LEN(ORD$): D = ASC(MID$(ORD$,Q,1))
830 IF D < 48 OR D > 57 THEN EFLAG = 1: PRINT "DEC NO. ERROR": Q = LEN(ORD$)
840 NEXT Q
850 IF EFLAG = 1 GOTO 300 ELSE ORD = VAL(ORD$)
860 LEAPSETS = INT(ORD\1461) 'LEAPSET = 366 + (3*365)
870 REMAIN = ORD MOD 1461
880 YY = 4*LEAPSETS + 1980
890 IF REMAIN < 367 GOTO 930
900 REMAIN = REMAIN - 366: YY = YY + 1
910 IF REMAIN < 366 GOTO 930
920 REMAIN = REMAIN - 365: YY = YY + 1: GOTO 910
930 PRINT "Julian Day No. =";REMAIN
940 GOSUB 620  'DECIDE LEAPNESS
950 MM = INT(REMAIN\30) +1
960 IF TBL(MM) => REMAIN THEN MM = MM - 1
970 DD = REMAIN - TBL(MM)
980 MM$ = MID$(MONTH$,4*MM-3,3)
990 WKDAY = (ORD MOD 7)+1
1000 WKDAY$ = MID$(WEEK$,4*WKDAY-3,4)
1010 PRINT "Gregorian date = ";WKDAY$;MM$;:PRINT USING " ##";DD;:PRINT ",";YY
1020 GOTO 300
1030 'HE\ TO DECIMAL CONVERSION SUBROUTINE
1040 EFLAG = 0: ORD = 0
1050 FOR Q = 1 TO LEN(ORD$)
1060 D = ASC(MID$(ORD$,Q,1)) - 48
1070 IF D < 0 OR D > 22 THEN EFLAG = 1: GOTO 1110
1080 IF D > 9 AND D < 17 THEN EFLAG = 1: GOTO 1110
1090 IF D > 9 THEN D = D - 7
1100 ORD = 16*ORD + D
1110 NEXT Q
1120 IF EFLAG = 1 THEN PRINT "HEX NO. ERROR"
1130 RETURN
```

## NUM2WORD.BAS

```bas
1 REM IBM PC ------- NUM-WORD ---------
2 REM VERSION$= "V1.2"    '8/14/82
3 REM Author: Herb Shear, 1590 Vineyard Dr. Los Altos, CA 94022
4 REM Adapted from NUMWORD [Creative Computing, 6/82 p176] by Michael Sorens
5 '
6 'Author commentary: Returning P$ rather than printing while crunching allows
7 'the calling program to vary print fonts, add "protection" and otherwise
8 'play games with the literal and the available print space.
9 'The limit for SNG precision is about $130,000.00.  Stating the purchase
10 'price on a deposit receipt for a simple home sale requires larger values.
11 'Handling the error condition, [P$=""] is up to the calling program.
12 'Other enhancements are the "-" where required by english syntax, leading
13 'zero/NO/100, only and setting it up about as close to a callable procedure
14 'as one can achieve in BASIC. All of which is just polish on Sorens's gem.
15 ' The literal syntax has been approved by an experienced bank officer.
16 ' NONE and EXACTLY are not proper syntax.
100 CLS
110 INPUT "ENTER AMOUNT"; SUM#
120 GOSUB 5000 NUM-LITERAL
130 IF LEN(P$) THEN PRINT P$: PRINT ELSE PRINT "Exceeds accuracy limits, use a smaller number!"
140 GOTO 110
150 '-------all the above is just for demo ---ps: list w/ LISTER for readabilityedit 80
160 '
5000 'Procedure NUM-LITERAL(SUM#,P$); value SUM#; ------------
5010 '         returns literal expression of SUM# in P$
5020 ' LSUM#, TEMP1#, TEMP2#, TEMP3#, TEMP4# TEMP5#, CENTS%, I%, NUMWORD$
5030 P$ = "": IF SUM# > 198# THEN RETURN ELSE LSUM#=SUM#
5040 IF LEN(NUMWORD$(2)) THEN ELSE GOSUB 5200
5050 CENTS%=INT((LSUM#-INT(LSUM#))*100.#+0.5#)  :LSUM#=INT(LSUM#)
5060 IF LSUM# THEN GOSUB 5100: P$ = P$ + "AND " ELSE P$ = "ONLY "
5070 IF CENTS% THEN P$ = P$ +RIGHT$("0"+MID$(STR$(CENTS%),2,2),2) ELSE P$=P$+"NO"
5080 P$ = P$ + "/100 DOLLARS"
5090 RETURN
5100 '-------- recursive subroutine to express numbers as words-----
5110 IF LSUM# > 999999999999.# THEN TEMP5# = LSUM#-INT(LSUM#/1000000000000.#)*1000000000000.#: LSUM# = INT(LSUM#/1000000000000.#): GOSUB 5100: P$ =P$ + "TRILLION ": LSUM# = TEMP5#
5120 IF LSUM# > 999999999.# THEN TEMP4# = LSUM#-INT(LSUM#/1000000000.#)*1000000000.#: LSUM# = INT(LSUM#/1000000000.#)  :GOSUB 5100: P$ = P$ + "BILLION ": LSUM# = TEMP4#
5130 IF LSUM# > 999999.# THEN TEMP3# = LSUM#-INT(LSUM#/1000000.#)*1000000.#: LSUM# = INT(LSUM#/1000000.#): GOSUB 5100: P$ = P$ + "MILLION ": LSUM# = TEMP3#
5140 IF LSUM# > 999.# THEN TEMP2# = LSUM#-INT(LSUM#/1000.#)*1000.#: LSUM# = INT(LSUM#/1000.#): GOSUB 5100: P$ = P$ + "THOUSAND ": LSUM# = TEMP2#
5150 IF LSUM# > 99.# THEN TEMP1# = LSUM#: LSUM# = INT(LSUM#/100.#) :GOSUB 5100: P$ = P$ + "HUNDRED ": LSUM# = TEMP1#-LSUM#*100.#
5160 IF LSUM# > 19.# THEN P$ = P$ + NUMWORD$(INT(LSUM#/10.#)): LSUM# = LSUM#-10.#*INT(LSUM#/10.#): IF LSUM# THEN P$ =P$ + "-": ELSE  P$=P$ +" "
5170 IF LSUM# THEN P$ = P$ + NUMWORD$(LSUM#+9.#)+" "
5180 RETURN
5190 '--------- initilization --------------------------------------------
5200 ERASE NUMWORD$:DIM NUMWORD$(28): RESTORE 5210: FOR I%=2 TO 28: READ NUMWORD$(I%): NEXT: RETURN
5210 DATA TWENTY,THIRTY,FORTY,FIFTY,SIXTY,SEVENTY,EIGHTY,NINETY
5220 DATA ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN,ELEVEN,TWELVE,            THIRTEEN,FOURTEEN,FIFTEEN,SIXTEEN,SEVENTEEN,EIGHTEEN,NINETEEN
```

## PAK-DATE.BAS

```bas
10 ' DATPAK.BAS Written by Kurt Riegel, Arlington VA  (703-522-5427) Oct 1983
20 ' These subroutines can pack a 6 byte date into a 2 byte integer, and
30 ' then unpack the integer to restore the original date.  They are useful for
40 ' saving space in memory and disk for date intensive data.
50 ' The first section shows how to call the pack & unpack routines.
60 ' Input  dates are of the form D$ = "YYMMDD"
70 ' Output dates are of the form ND% = simple 2 byte integer
80 ' You are responsible for assuring that the input date is sensible.  For          example, 830231 is returned as 830231; 830333 is returned as 830402.
90 ' Date range is 010102 to 991231 -- modify for dates not in 20th century.
100 'The variables D$, ND%, and M$ are modified by these routines--change their      names if they will clobber your own variables in your calling program.
110 '
120 '
130 '
140 PRINT TAB(9)"date in"TAB(25)"integer out"TAB(40)"date out" 'Calling section
150 INPUT"yymmdd";D$:PRINT TAB(9)D$;
160 GOSUB 220:PRINT TAB(25)ND%;:GOSUB 280:PRINT TAB(40)D$:GOTO 150
170 '
180 '
190 'This subroutine packs a 6 byte date D$ into a 2 byte integer ND%
200 'Call by providing date D$="YYMMDD", GOSUB 220.  ND% is returned.
210 'Only the variable ND% is modified by this section
220 ND%=((VAL(LEFT$(D$,2))-80)*12+VAL(MID$(D$,3,2))-1)*31+VAL(RIGHT$(D$,2))-1:RETURN
230 '
240 '
250 'This subroutine unpacks a 2 byte integer ND% into a 6 byte date D$.
260 'Call by providing integer ND% created above, GOSUB 280.  D$ is returned.
270 'Only the variables D$ and M$ are modified by this section
280 D$=STR$(80+ND%\372+(ND%<0)):D$=RIGHT$("0"+RIGHT$(D$,LEN(D$)-1),2)
290 ND%= (372+ND% MOD 372) MOD 372:M$=STR$(1+ND%\31):M$=RIGHT$(M$,LEN(M$)-1)
300 D$=D$+RIGHT$("00"+M$,2)
310 ND%= (31+ND% MOD 31) MOD 31:M$=STR$(1+ND%):M$=RIGHT$(M$,LEN(M$)-1)
320 D$=RIGHT$(D$+RIGHT$("00"+M$,2),6):RETURN
```

## PRTSC.BAS

```bas
1 '   PrtSc = Routine to print the screen from a basic program    12-4-82
501 DIM Z.%(1):Z.%(0)=&H5CD:Z.%(1)=&HCB  ' Create tiny machine language program
503 Y.%=VARPTR(Z.%(0)):CALL Y.%         ' Call it to print screen
505 ERASE Z.%:RETURN            ' Erase it & return
```

## QSORT.BAS

```bas
10 ''       QUICKSORT SORTING ALGORITHM DEMONSTRATION
20 ''               NELSON FORD  APRIL 1984
30 ''
40 DEFINT A-Z:  CLS:  KEY OFF:  COLOR 7,0:  LAST=26:  DIM DTA$(LAST)
50 FOR I=1 TO LAST:  READ DTA$(I):  NEXT
60 DATA H,G,C,V,B,N,M,A,S,D,F,Z,X,J,K,L,Q,I,O,W,E,R,T,Y,U,P
70 FLAG1=-1: FLAG2=-1: FLAG3=-1
75 COLR1= 7:  COLR2= 15:  COLR3= 0
80 GOSUB 460
90 '
100 '''''''''''sort:
110 '
120 BOT(1)=1:  TOP(1)=LAST:  PLY=1
130   WHILE PLY > 0
140 IF BOT(PLY) >= TOP(PLY) THEN PLY=PLY-1: GOTO 300
150 I=BOT(PLY)-1:  J=TOP(PLY):  KY$=DTA$(J)
160      WHILE I < J
170 I=I+1:  J=J-1
180 LN=180:  WHILE DTA$(I) < KY$:  I=I+1: GOSUB 330:  WEND
190 IF FLAG1 THEN GOSUB 530
200 LN=200:  WHILE DTA$(J) > KY$ AND J > I:  J=J-1:  GOSUB 330: WEND
210 IF FLAG2 THEN GOSUB 600
220 IF I<J THEN LN=220:  GOSUB 690  'go swap
230     WEND
240 IF FLAG3 THEN GOSUB 630
250 J=TOP(PLY):  IF I=J THEN 280
260 LN=260: GOSUB 330
270 IF DTA$(I) > DTA$(J) THEN LN=270:  GOSUB 690
280 IF I-BOT(PLY) < TOP(PLY)-I                                                         THEN  BOT(PLY+1)=BOT(PLY):  TOP(PLY+1)=I-1:  BOT(PLY)=I+1:                      ELSE  TOP(PLY+1)=TOP(PLY):  BOT(PLY+1)=I+1:  TOP(PLY)=I-1
290 PLY=PLY+1
300   WEND
310 COLOR 15: PRINT "SORTED:   ";: FOR I=1 TO 26: PRINT " "DTA$(I);: NEXT
320 END
330 '
340 PRINT LN"  ";
350   FOR X=FIRST TO LAST
360 FG=7: BG=0   'foreground and background colors
370 IF X = I THEN FG=15
380 IF X = J THEN BG= 7:  IF FG=7 THEN FG=0
390 IF X = TOP(PLY) THEN FG=FG+16
400 IF X < BOT(PLY) OR X > TOP(PLY) THEN FG=1
410 COLOR FG,BG
420 PRINT " " DTA$(X);:  COLOR 7,0
430   NEXT: PRINT
440 RETURN
450 '
460 PRINT "FIRST SEARCH UP THE LIST UNTIL AN ";: COLOR 15
470 PRINT "ITEM ";: COLOR 7
480 PRINT "LARGER THAN THE ";: COLOR 23
490 PRINT "KEY";: COLOR 7: PRINT " IS FOUND,": PRINT
500 PRINT "PROGRAM  ": PRINT "LINE #":  XXX=9
510 RETURN
520 '
530 PRINT :PRINT "THEN SEARCH DOWN THE LIST UNTIL AN ";: COLOR 0,7
540 PRINT " ITEM";: COLOR 7,0
550 PRINT " LESS THAN THE ";: COLOR 23
560 PRINT "KEY";: COLOR 7: PRINT " IS FOUND.  (GO";
570 INPUT X$:  FLAG1=0
580 RETURN
590 '
600 INPUT "IF POINTERS HAVE NOT CROSSED, SWAP ITEMS AND CONTINUE.  (GO"; X$
610 FLAG2=0: RETURN
620 '
630 PRINT"WHEN THE POINTERS CROSS, DIVIDE THE LIST AND SORT THE SMALLER PART."
640 PRINT"BUT FIRST, COMPARE THE ";: COLOR 15
650 PRINT"ITEM";: COLOR 7: PRINT " AT THE BREAK TO THE ";: COLOR 23:
660 PRINT "KEY":  COLOR 7: PRINT "      AND SWAP IF ";: COLOR 15
670 PRINT"ITEM";: COLOR 7: INPUT " IS LARGER.  (GO"; X$
680 FLAG3=0:  RETURN
690 SWAP DTA$(I), DTA$(J): PRINT TAB(27)"SWAP " DTA$(J)   " AND " DTA$(I)
700 GOSUB 330: RETURN
```

## QUICKC.BAS

```bas
10 '** QUICK.BAS **
11 'RELATED FILES:  QCLEAR.BIN   machine code for screen-clearing routine
12 '                QPRINT.BIN   machine code for quick print routine
13 '                QPRINTC.BIN  same, but for compiled programs
20 DEFINT A-Z: KEY OFF
40 '
45 DIM COMPILED(1): COMPILED(1)= -1:  ERASE COMPILED
46 IF COMPILED(1) THEN F1$="D:QPRINTC.BIN" ELSE F1$="D:QPRINT.BIN"
50 DEF SEG = 7936: QCLEAR=0: QPRINT=1000
60 BLOAD F1$,QPRINT
70 BLOAD "D:QCLEAR.BIN",QCLEAR : QCLLIN=0 : QCLFRM=5
80 ' CLEAR LINE TEST - - - -
90 GOSUB 180
100 IF COMPILED(1) THEN CALL ABSOLUTE(ROW,COL,QCLLIN) ELSE CALL QCLLIN(ROW,COL)
110 LOCATE 25,1 : INPUT;"CLEAR LINE TEST - PRESS ENTER TO CONTINUE";A$
120 ' CLEAR FRAME TEST - - - -
130 GOSUB 180
140 IF COMPILED(1) THEN CALL ABSOLUTE(ROW,COL,QCLFRM) ELSE CALL QCLFRM(ROW,COL)
150 LOCATE 25,1 : INPUT;"CLEAR FRAME TEST - PRESS ENTER TO CONTINUE",A$: RUN
170 ' THIS SUBROUTINE JUST PAINTS SOME STUFF ON THE SCREEN FOR CLEARING
180 '
190 CLS: A$=STRING$(80,"A"):  CLM=1
210   FOR I=1 TO 23
220 IF COMPILED(1) THEN CALL ABSOLUTE(A$,I,CLM,QPRINT) ELSE CALL QPRINT(A$,I,CLM)
230   NEXT
240 ROW=6:  COL=5
250 RETURN
```

## READ_DIR.BAS

```bas
1 DEFINT A-Z
100 DIM READ.DIR.CODE%(40), DIR.ENTRY%(40)  'move this line to start of pgm.
110 DEF SEG:  FOR I=0 TO 40:  DIR.ENTRY%(I)= -1:  NEXT
120 FOR I=0 TO 65:  READ J:  POKE ( VARPTR( READ.DIR.CODE%(0) ) +I ), J:  NEXT
130 READ.FIRST% = &H4E
140 READ.NEXT%  = &H4F
150 ' sample usage:
160 '   define parameters:
170 FILE.SPEC$ = "A:*.*" + CHR$(0)
180 ATTRIB% = 255
190 ERR.CODE%= 0
200 FUNCTION% = READ.FIRST%:  GOSUB 240   'change these line numbers to actual
210 FUNCTION% = READ.NEXT%:   GOSUB 240   'use same filespec & attrib.
220 IF ERR.CODE% = 0 THEN 210            'if not FILE NOT FOUND, get another
230 END
240 DEF SEG:  READ.DIR.SUBR% = VARPTR(READ.DIR.CODE%(0))
250 '    IF COMPILED(1) THEN CALL ABSOLUTE(FUNCTION%, ATTRIB%, FILE.SPEC$, DIR.ENTRY%(0), ERR.CODE%, READ.DIR.SUBR%) ELSE CALL READ.DIR.SUBR%(FUNCTION%, ATTRIB%, FILE.SPEC$, DIR.ENTRY%(0), ERR.CODE%)
260 CALL READ.DIR.SUBR%(FUNCTION%,ATTRIB%,FILE.SPEC$, DIR.ENTRY%(0), ERR.CODE%)
270 '
280 '   read file creation date:
290 IF ERR.CODE% = 18  THEN  RETURN
300 X1 = PEEK( VARPTR( DIR.ENTRY%(0) ) + 24 )
310 X2 = PEEK( VARPTR( DIR.ENTRY%(0) ) + 25 )
320 YR = ( ( X2 AND 254 ) / 2 ) + 80
330 MO = ( X2 AND 1 ) * 8 + ( ( X1 AND 224 ) / 32 )
340 DY = ( X1 AND 31 )
350 DT$ = RIGHT$(STR$(MO),2) +"/"+ RIGHT$(STR$(DY),2) +"/" + RIGHT$(STR$(YR),2)
360 IF MO < 10 THEN MID$( DT$,1,1 ) = "0"
370 IF DY < 10 THEN MID$( DT$,4,1 ) = "0"
380 '  read file size:
390 FOR I = 26 TO 30:  SIZ!(I-26) = PEEK( VARPTR( DIR.ENTRY%(0) ) + I ):  NEXT
400 SIZE!= SIZ!(0) +SIZ!(1)*256 +(SIZ!(2)+(SIZ!(3)*256))*65536!
410 '   read file name:
420 FOR I = 30 TO 43
430   X = PEEK( VARPTR( DIR.ENTRY%(0) ) +I )
440   IF X <> 0 THEN PRINT CHR$(X); ELSE I=43
450 NEXT
460 PRINT , DT$ USING "###,###,###"; SIZE!
470 RETURN
480 END
490 '*                      21 BYTES - RESERVED FOR DOS USE ON SUBSEQUENT
500 '*                                 FIND NEXT CALLS
510 '*                       2 BYTES - FILES CREATE/UPDATE TIME
520 '*                       2 BYTES - FILES CREATE/UPDATE DATE
530 '*                       2 BYTES - LOW WORD OF FILE SIZE
540 '*                       2 BYTES - HIGH WORD OF FILE SIZE
550 '*                      13 BYTES - NAME AND EXTENTION OF FILE FOUND
560 '*                       1 BYTE    FOLLOWED BY A BYTE OF HEX 00.
570 '*                      43 BYTES TOTAL
580 '
590 DATA &H55
600 DATA &H89,&HE5
610 DATA &H31,&HC0
620 DATA &H31,&HC9
630 DATA &H31,&HD2
640 DATA &H8B,&H76,&H0E
650 DATA &H8A,&H24
660 DATA &H8B,&H76,&H0C
670 DATA &H8B,&H0C
680 DATA &H8B,&H76,&H0A
690 '********COMMENT OUT THE NEXT DATA STATEMENT IF USED WITH THE BASIC COMPILER
700 DATA &H8B,&H54,&H01
710 '********COMMENT OUT THE NEXT DATA STATEMENT IF USED WITH THE BASIC INTERPRETER
720 'DATA &H8B,&H54,&H02
730 DATA &HCD,&H21
740 DATA &H8B,&H76,&H06
750 DATA &H88,&H04
760 DATA &H8B,&H76,&H08
770 DATA &H89,&HF7
780 DATA &H06
790 DATA &H31,&HDB
800 DATA &HB4,&H2F
810 DATA &HCD,&H21
820 DATA &HFC
830 DATA &HB9,&H2C,&H00
840 DATA &H89,&HDE
850 DATA &H90,&H90,&H90
860 DATA &H1E
870 DATA &H06
880 DATA &H1F
890 DATA &H07
900 DATA &HF3
910 DATA &HA4
920 DATA &H06
930 DATA &H1F
940 DATA &H07
950 DATA &H5D
960 DATA &HCA,&H0A,&H00
```

## SCRLDEMO.BAS

```bas
10 KEY OFF:WIDTH 80:SCREEN 0,0,0:COLOR 7,0:CLS: PRINT
20  PRINT"                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
30  PRINT"                     ░┌───────────────────────────────────┐░"
40  PRINT"                     ░│                                   │░"
50  PRINT"                     ░│       SCROLL DEMONSTRATION        │░"
60  PRINT"                     ░│                                   │░"
70  PRINT"                     ░│                                   │░"
80  PRINT"                     ░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
90  PRINT"                     ░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
100 PRINT"                     ░│        █   █   █ █     █   █      │░"
110 PRINT"                     ░│        █   █▄▄▄█ █     █   █      │░"
120 PRINT"                     ░│        █   █     █     █   █      │░"
130 PRINT"                     ░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
140 PRINT"                     ░│                                   │░"
150 PRINT"                     ░│      International PC Owners      │░"
160 PRINT"                     ░│                                   │░"
170 PRINT"                     ░│P.O. Box 10426, Pittsburgh PA 15234│░"
180 PRINT"                     ░│                                   │░"
190 PRINT"                     ░└───────────────────────────────────┘░"
200 PRINT"                     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
210 PRINT
220 PRINT "                           PRESS ANY KEY TO CONTINUE"
230 A$=INKEY$: IF A$="" THEN 230
240 CLS
250 '*** THIS SOFTWARE DEMONSTRATES SMOOTH SCROLLING ON THE COLOR MONITOR.
260 '**************************************************
270 '***              SPC CORPORATION               ***     Compliments of
280 '***               P.O. BOX 9038                ***    UTAH BLUE CHIPS
290 '***             OGDEN, UTAH 84409              ***   IBM PC Users Group
300 '***                                            ***
310 '***   THIS SOFTWARE IS AVAILABLE FOR COPY AND  ***     December 1982
320 '***         USE IN THE PUBLIC DOMAIN.          ***
330 '**************************************************
340 '*** THIS SOFTWARE DEMONSTRATES SMOOTH SCROLLING ON THE COLOR MONITOR.
350 '
360 ' 1. With the color monitor adaptor in operation, LOAD this program.
370 ' 2. RUN the program and scroll the screen window up and down.
380 '
390 SCREEN 1 : KEY OFF : COLOR 1,7 : CLS
400 PRINT : PRINT : PRINT : PRINT
410 PRINT "   DEMONSTRATION OF SMOOTH SCROLLING"
420 PRINT : PRINT : PRINT
430 PRINT "Use the  Up Arrow  and  Down Arrow  keys"
440 PRINT " to move the screen window up and down."
450 PRINT : PRINT : PRINT
460 PRINT "      *****************************"
470 PRINT "      *      Compliments of       *"
480 PRINT "      *     UTAH  BLUE  CHIPS     *"
490 PRINT "      *    IBM PC  Users Group    *"
510 PRINT "      *****************************"
515 LOCATE 25,12 : PRINT"Press Escape to quit."
520 DEFINT I-N
530 UP$=CHR$(0)+CHR$(72)
540 DN$=CHR$(0)+CHR$(80)
550 ES$=CHR$(27)
560 IS=0
570 X$=INKEY$ : IF X$=UP$ THEN IS=IS-80 ELSE IF X$=DN$ THEN IS=IS+80 ELSE IF X$=ES$ THEN IS=0 ELSE 570
580 IF IS < 0 THEN IS = IS + 16384
590 IF IS > 16383 THEN IS=IS - 16384
600 IH = IS \ 256
610 IL = IS - IH*256
620 IF (INP(986) AND 1) <> 0 THEN 620
630 IF (INP(986) AND 1) = 0 THEN 630
640 OUT 980,12:OUT 981,IH:OUT 980,13:OUT 981,IL
650 IF X$ <> ES$ THEN 570
```

## SCRN-WK.BAS

```bas
5 CLS:LOCATE 4,1:GOSUB 62180
10 PRINT"          ╔══════════════════════════════════════════════════════╗"
20 PRINT"          ║          ********** SCREEN MENU **********           ║"
21 PRINT"          ╠══════════════════════════════════════════════════════╣"
22 PRINT"          ║                                                      ║"
23 PRINT"          ║ 1)    CREATE A NEW SCREEN                            ║"
30 PRINT"          ║ 2)    USE SCREEN.BLK TO CREATE ANOTHER SCREEN        ║"
40 PRINT"          ║ 3)    EDIT EXISTING SCREEN                           ║"
41 PRINT"          ║ 4)    EXIT                                           ║"
42 PRINT"          ║                                                      ║"
43 PRINT"          ║                                                      ║"
44 PRINT"          ║                                                      ║"
50 PRINT"          ╚══════════════════════════════════════════════════════╝"
55 LOCATE 13,12:PRINT"( )";:LOCATE 13,13,1
56 A$=INKEY$:IF A$="" THEN 56
57 IF LEN(A$)>1 THEN 56
58 N=VAL(A$):IF N<1 OR N>4 THEN 56
59 LOCATE 13,13:PRINT A$;
60 LOCATE 7+N,15:PRINT"*";
61 ON N GOTO 100,200,300,400
100 LOCATE 13,19:PRINT"ENTER THE NAME OF THE NEW SCREEN TO BE CREATED:";
110 LOCATE 14,19:GOSUB 500
120 CLS:LINE INPUT A$
130 DEF SEG = TOSEG%:BSAVE SCR$,0,&H1000:DEF SEG: GOTO 5
200 LOCATE 13,19:PRINT"ENTER THE NAME OF THE SCREEN TO BE CREATED:";
205 LOCATE 14,19:GOSUB 500
210 CLS:DEF SEG = TOSEG%:BLOAD"B:SCREEN.BLK",0:DEF SEG:LOCATE 10,10
220 COLOR 7,0:LINE INPUT A$
230 DEF SEG = TOSEG%:BSAVE SCR$,0,&H1000:DEF SEG: GOTO 5
300 LOCATE 13,19:PRINT"ENTER THE NAME OF THE EXISTING SCREEN:";
310 LOCATE 14,19:GOSUB 500
320 CLS:DEF SEG = TOSEG%:BLOAD SCR$,0:DEF SEG:LOCATE 10,10
330 COLOR 7,0:LINE INPUT A$
340 DEF SEG = TOSEG%:BSAVE SCR$,0,&H1000:DEF SEG: GOTO 5
400 CLS:NEW
500 DEF SEG = &H40: POKE &H17,&H40: DEF SEG
505 A$=INKEY$: IF A$="" THEN 505
510 IF LEN(A$)=2 THEN 500
515 A = ASC(A$)
520 IF A=32 OR A=33 OR (A>34 AND A<42) OR A=45 OR A=46 OR (A>47 AND A<59) OR (A>63 AND A<91) OR A=94 OR A=95 OR A=126 THEN SCR$=SCR$+A$:B$=SCR$: GOTO 550
530 IF A=13 THEN RETURN
535 IF A=27 THEN RUN 5
540 IF A=8 AND LEN(SCR$)>0 THEN SCR$=LEFT$(SCR$,LEN(SCR$)-1):B$=SCR$+" ":GOTO 550
545 GOTO 500
550 LOCATE 14,19:PRINT B$;:LOCATE 14,19+LEN(SCR$)
560 GOTO 500
62170 '**************************EQUIPMENT CHECK*******************************
62180 DEF SEG = &H40: TOSEG% = &HB000 - ((PEEK(&H10) AND &H30)<>&H30) * &H800
62190 DEF SEG: RETURN
62199 '************************************************************************
```

## SCRNDUMP.BAS

```bas
1 ' SCRNDUMP = Routine to print an image of the graphics screen  Jess B. Scott
2 ' Requires an IBM or EPSON printer with the graphics option.
9 CLS
10 PRINT "CHOOSE A DEMONSTRATION
20 PRINT "1 BINARY CODES TO THE PRINTER
30 PRINT "2 GRAPH OF A SINE WAVE
40 PRINT "3 A SPIRAL
50 PRINT "4 AN ELLIPSE IN A BOX
51 PRINT "5 PRINT PAGE (IF YOU ARE IN SCREEN 2)
60 PRINT
70 PRINT "ALL CHOICES REQUIRE GRAFTRAX
80 PRINT "THE PRINTER ALSO MUST BE ON!
90 PRINT
91 INPUT Q
92 ON Q GOTO 100,180,370,460,490
100 DEFINT N
110 OPEN "LPT1:" FOR OUTPUT AS #1
120 WIDTH "LPT1:",255
130 FOR N=0 TO 255
140 PRINT#1,CHR$(27);"K";CHR$(3);CHR$(0);
150 PRINT#1,CHR$(N);CHR$(0);CHR$(255);"_";
160 NEXT N
170 STOP
180 SCREEN 2:         CLS
190 PI=3.1417
200 DRAW "BM32,90"
210 DRAW"S8C3"
220 FOR I=1 TO 10
230 XSCALE$=XSCALE$+"R14U1D2U1"
240 YSCALE$=YSCALE$+"U9R1L2R1"
250 NEXT I
260 DRAW XSCALE$
270 DRAW "BM32,180"
280 DRAW "L1R2L1"+YSCALE$
290 DRAW"BM32,90"
300 FOR X=0 TO 2*PI STEP 2*PI/150
310 X%=32+X*280/2/PI
320 Y=SIN(X)
330 Y%=90-Y*90
340 DRAW "M"+STR$(X%)+","+STR$(Y%)
350 NEXT X
360 GOTO 490
370 SCREEN 2
380 S1=.5+RND*5:S2=RND*2
390 CLS
400 FOR R=5 TO 320 STEP 2
410 A2=A+S1:IF A2>6.28 THEN A2=A2-6.28
420 CIRCLE(320,100),R,,A,A2,5/12
430 A=A+S2:IF A>6.28 THEN A=A-6.28
440 NEXT
450 GOTO 490
460 CLS:SCREEN 2:CIRCLE(319,99),320,,,,200/640
470 LINE (0,0)-(639,199),,B
480 GOTO 490
490 LPRINT TIME$
500 Z$=STRING$(8,0)
510 WIDTH "LPT1:",255
520 DEFINT A,B,M,L,K,J,N
530 DIM A(8)
540 DEF SEG=&HB800
550 LPRINT CHR$(27);"A";CHR$(8)
560 FOR J=0 TO 24
570 LPRINT SPACE$(12);CHR$(27);"L";CHR$(128);CHR$(2);
580 FOR K=0 TO 79
590 FOR N=0 TO 6 STEP 2:A(N)=PEEK(N*40+K+320*J):A(N+1)=PEEK(&H2000+N*40+K+320*J):NEXT N
600 FOR N=0 TO 7:IF A(N)>0 GOTO 610 ELSE NEXT N:LPRINT Z$;:GOTO 640
610 M=256
620 FOR N=0 TO 7:M=M/2:B=-((M AND A(0))>0)*128-((M AND A(1))>0)*64-((M AND A(2))>0)*32-((M AND A(3))>0)*16-((M AND A(4))>0)*8-((M AND A(5))>0)*4-((M AND A(6))>0)*2-((M AND A(7))>0):IF B=13 THEN B=12
630 LPRINT CHR$(B);:NEXT N
640 NEXT K
650 LPRINT
660 NEXT J
670 LPRINT CHR$(27);"@";TIME$
```

## SCROLL.BAS

```bas
100 '**************************************************************************
110 '*                                                                        *
120 '*                              SCROLL                                    *
130 '*                                                                        *
140 '*                            WRITTEN BY:                                 *
150 '*                                                                        *
160 '*                            JOHN BOURG                                  *
170 '*                         13614 CHERRYDOWN                               *
180 '*                      SUGAR LAND, TX.  77478                            *
190 '*                          (713) 494-7687                                *
200 '*                                                                        *
210 '**************************************************************************
220 '*                                                                        *
230 '*   This routine will Scroll a window up and down. The direction of the  *
240 '*   scrolling window is controled by the value in register AH to change  *
250 '*   the value in AH after the program is running use MID$(A$,2,1)=CHR$(n)*
260 '*   where n is the direction to scroll, 6 = up and 7 = down.             *
270 '*   To change the number of lines to blank at the top or bottom of the   *
280 '*   window change the value in register AL to a number between 0 and 24, *
290 '*   (0 will blank the entire window). After the program is running use   *
300 '*   MID$(A$,4,1)=CHR$(n). To set the size of the window to be scrolled   *
310 '*   change the values in registers CX and DX. To set the upper left hand *
320 '*   corner of the window a number between 0 and 18H in CH for the row,   *
330 '*   and a number between 0 and 4FH for the column. After the program is  *
340 '*   running use MID$(A$,6,1)=CHR$(n) for CH, MID$(A$,8,1)=CHR$(n) for CL *
350 '*   MID$(A$,10,1)=CHR$(n) for DH, and MID$(A$,12,1)=CHR$(n) for DL.      *
360 '*   To set the attribute of the blank line set the BX register to a value*
370 '*   according to the table below.                                        *
380 '*                                                                        *
390 '**************************************************************************
400 '
410 '                            ATTRIBUTE TABLE
420 '┌────────────────────────────┬────────────────────┬────────────────────┐        │     Attribute Byte         │      Monochrome    │  Color/Graphics    │
430 '│7  6   5   4   3  2   1   0 │    Display Adapter │  Monitor Adapter   │
440 '├──┬──────────┬───┬──────────┼──────────┬─────────┼──────────┬─────────┤        │B │R   G   B │ I │R   G   B │          │         │          │         │
450 '├──┼──────────┼───┴──────────┤Background│Character│Background│Character│
460 '│FG│Background│    Foreground│   Color  │  Color  │   Color  │  Color  │
470 '├──┼──────────┼───┬──────────┼──────────┼─────────┼──────────┼─────────┤        │B │0   0   0 │ I │1   1   1 │   Black  │  White  │   Black  │  White  │
480 '│B │1   1   1 │ I │0   0   0 │   White  │  Black  │   White  │  Black  │
490 '│B │0   0   0 │ I │0   0   0 │   Black  │  Black  │   Black  │  Black  │
500 '│B │1   1   1 │ I │1   1   1 │   White  │  White  │   White  │  White  │
510 '└──┴──────────┴───┴──────────┴──────────┴─────────┴──────────┴─────────┘
520 '
530 '                      FOR THE COLOR/GRAPHICS ADAPTER
540 '┌─────┬─────┬─────┬─────┬──────────────────────────────────────────────┐        │  R  │  G  │  B  │  I  │               COLOR                          │
550 '├─────┼─────┼─────┼─────┼──────────────────────────────────────────────┤        │  0  │  0  │  0  │  0  │        Black                                 │
560 '│  0  │  0  │  1  │  0  │        Blue                                  │        │  0  │  1  │  0  │  0  │        Green                                 │
570 '│  0  │  1  │  1  │  0  │        Cyan                                  │        │  1  │  0  │  0  │  0  │        Red                                   │
580 '│  1  │  0  │  1  │  0  │        Magenta                               │        │  1  │  1  │  0  │  0  │        Brown                                 │
590 '│  1  │  1  │  1  │  0  │        White                                 │        │  0  │  0  │  0  │  1  │        Gray                                  │
600 '│  0  │  0  │  1  │  1  │        Light Blue                            │        │  0  │  1  │  0  │  1  │        Light Green                           │
610 '│  0  │  1  │  1  │  1  │        Light Cyan                            │        │  1  │  0  │  0  │  1  │        Light Red                             │
620 '│  1  │  0  │  1  │  1  │        Light Magenta                         │        │  1  │  1  │  0  │  1  │        Yellow                                │
630 '│  1  │  1  │  1  │  1  │        White (High Intensity)                │
640 '└─────┴─────┴─────┴─────┴──────────────────────────────────────────────┘
650 '
660 CLS
670 A$=STRING$(18," ")
680 FOR X = 1 TO 18
690 READ D:MID$(A$,X,1)=CHR$(D)
700 NEXT
710 T = VARPTR(A$)
720 START = PEEK(T+1)+PEEK(T+2)*256
730 LOCATE 8,1:PRINT"THIS LINE STAYS HERE";
740 FOR X = 9 TO 22
750 LOCATE X,1:PRINT USING "##";X-8;:PRINT"*************************"X-8
760 NEXT
770 LOCATE 24,1:PRINT"THIS STAYS HERE";
780 LOCATE 23,3:PRINT"HIT ANY KEY TO SCROLL UP";
790 B$ = INKEY$: IF B$ ="" THEN 790
800 DEF SEG: CALL START
810 LOCATE 23,3:PRINT"HIT ANY KEY TO SCROLL DOWN";
820 B$ = INKEY$: IF B$ ="" THEN 820
830 MID$(A$,2,1)=CHR$(7)
840 CALL START
850 LOCATE 9,3:PRINT"THIS IS AT THE TOP";
860 MID$(A$,2,1)=CHR$(6):GOTO 780
870 DATA  &HB4,&H06:'           MOV     AH,06   ;SCROLL ACTIVE PAGE UP
880 DATA  &HB0,&H01:'           MOV     AL,01   ;NUMBER OF LINES TO BLANK
890 DATA  &HB5,&H08:'           MOV     CH,08   ;ROW OF UPPER LEFT CORNER
900 DATA  &HB1,&H02:'           MOV     CL,02   ;COLUMN OF UPPER LEFT CORNER
910 DATA  &HB6,&H16:'           MOV     DH,17   ;ROW OF LOWER RIGHT CORNER
920 DATA  &HB2,&H1B:'           MOV     DL,1B   ;COLUMN OF LOWER RIGHT CORNER
930 DATA  &HBB,&H07,&H00:'      MOV     BX,0007 ;ATTRIBUTE USED ON BLANK LINE
940 DATA  &HCD,&H10:'           INT     10      ;SCROLL THE WINDOW
950 DATA  &HCB:'                RETF            ;RETURN TO SENDER
```

## SETMEM.BAS

```bas
1 'ROUTINE TO SET MEMORY FROM BASIC
2 '
10 DEFINT A-Z
20 DEF SEG=&H40
30 KL = PEEK(&H13): KH = PEEK(&H14)
40 HAVE = KL + 256*KH
50 PRINT "You currently have" HAVE "kilobytes of main memory."
60 PRINT
70 INPUT "How many kilobytes will suffice";WANT
80 IF WANT = 0 THEN WANT = HAVE:GOTO 110 'ENTER alone gives status quo.
90 IF WANT < 35 THEN WANT = 35  'Ensure space for BASICA + AUTOEXEC.BAS.
100 IF WANT >320 THEN WANT = 320 'Current physical limit.
110 KL = WANT MOD 256: KH = WANT\256
120 POKE &H13,KL: POKE &H14,KH
130 WANT = WANT-64: IF WANT < 0 THEN WANT = 0
140 KL = WANT MOD 256: KH = WANT\256
150 POKE &H15,KL: POKE &H16,KH
160 SYSTEM
170 ' (still must reboot to let DOS adjust)
180 END
```

## SHELSORT.BAS

```bas
1 '''''''''Shell Sort routine
2 '
4   DIM A$(100)
5   '
6   ' Y=# of items to sort.
7   ' A$( )=Array to sort
8   '
9   GOSUB 200: 'get data..
10  PRINT"Shell sort..."
20  TIME$="00:00:00"
30  Y=100:N7=0:C7=0
40  M6=Y
50  M6=INT(M6/2)
60  IF M6=0 GOTO 500: 'print
70  K6=Y-M6
80  J6=1
90  I6=J6
100 L6=I6+M6
110 C7=C7+1
120 IF A$(I6)<=A$(L6) GOTO 170
130 N7=N7+1
140 SWAP A$(I6),A$(L6):PRINT".";
150 I6=I6-M6
160 IF I6>=1 GOTO 100
170 J6=J6+1
180 IF J6>K6 GOTO 50
190 GOTO 90
200 FOR X = 1 TO 100
210 A$(X)=CHR$(RND(1)*20+65)
220 PRINT A$(X)+CHR$(32);:NEXT X:RETURN
500 PRINT:PRINT"time=";TIME$
510 FOR X=1 TO 100
520 PRINT A$(X)+CHR$(32);
530 NEXT X
540 END
```

## SHORTSUB.BAS

```bas
100 REM 	--- SHORTSUB ---
110 REM 	BY D.G. PATTERSON
115 REM 	PROGRAM J
120 REM 	9/30/82
130 REM 	SHORT SUBROUTINES
300 DEFINT I-J
350 DIM DAT$(20)
400 KEY OFF:CLS:WIDTH 80:SCREEN 0,0,0:COLOR 6,4
410 LOCATE 1,25:PRINT "                   "
420 LOCATE 2,25:PRINT " SHORT SUBROUTINES "
430 LOCATE 3,25:PRINT " ----------------- "
440 DATA "(A) Return to menu"
450 DATA "(B) Yes or no at X1,Y1 location"
460 DATA "(C) Functions"
470 DATA "(D) Continue routine"
480 DATA "(E) Upperfy a string (in X$)"
490 DATA "(F) Printer error routines (80 COLS)"
500 DATA "(G) Printer error routines (40 COLS)"
510 DATA "(H) Load disk A and disk B"
520 DATA "(I) Sets output for screen or printer"
530 DATA "(J) Reset function keys"
540 DATA " "
550 DATA "(L)"
560 DATA "(M)"
570 DATA "(N)"
580 DATA "(O)"
590 DATA "(P)"
600 DATA "(Q)"
610 DATA "(R)"
630 FOR J=1 TO 18
632 READ DAT$(J)
634 IF DAT$(J)=" " GOTO 640
636 NEXT J
640 RESTORE:NR=J-1:CO=1:Y=4
645 FOR I=1 TO NR
650 CO=CO+1:IF CO>7 THEN CO=2
670 Y=Y+1
680 IF NR < 10 THEN Y = Y+1
690 COLOR CO,0:LOCATE Y,9:PRINT DAT$(I)
700 NEXT I
1000 COLOR 4,0:LOCATE 25,25:PRINT "Enter program desired >" ;
1010 Q$ = INKEY$:IF Q$="" THEN 1010
1012 IF Q$=CHR$(3) THEN COLOR 2,0,0:CLS:END
1013 IF Q$=CHR$(27) THEN COLOR 2,0,0:CLS:END
1015 PRINT Q$;
1020 Q=ASC(Q$)
1030 IF Q >96 AND Q < 97 + NR THEN Q=Q-96:GOTO 1050
1040 IF Q >64 AND Q < 65 + NR THEN Q=Q-64:GOTO 1050
1045 LOCATE 25,25:PRINT STRING$(35,32);:GOTO 1000
1050 COLOR 2,0:WIDTH 80:CLS
1055 KEY 7,"RUN 1990"+CHR$(13)
1060 ON Q GOTO 1101,1102,1103,1104,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1117,1118
1101 KEY 7,"TRON"+CHR$(13):RUN "MENU":'A
1102 LIST 7999-8195,"SCRN:":'B
1103 LIST 8199-8395,"SCRN:":'C
1104 LIST 8399-8595,"SCRN:":'D
1105 LIST 8599-8795,"SCRN:":'E
1106 LIST 8799-8995,"SCRN:":'F
1107 LIST 8999-9195,"SCRN:":'G
1108 LIST 9199-9395,"SCRN:":'H
1109 LIST 9399-9595,"SCRN:":'I
1110 LIST 9599-9795,"SCRN:":'J
1111 LIST 9799-9995,"SCRN:":'K
1112 LIST 9999-10195,"SCRN:":'L
1113 LIST 10199-10395,"SCRN:":'M
1114 LIST 10399-10595,"SCRN:":'N
1115 LIST 10599-10795,"SCRN:":'O
1116 LIST 10799-10995,"SCRN:":'P
1117 LIST 10999-11195,"SCRN:":'Q
1118 LIST 11199-11395,"SCRN:":'R
1990 KEY 7,"TRON"+CHR$(13)
2000 COLOR 6,0,0
2010 Y1=25:X1=20
2020 LOCATE 25,1:PRINT STRING$(79,CHR$(32));:LOCATE Y1,X1
2030 PRINT "DO YOU WISH TO USE THIS SUBROUTINE > ";
2040 POKE 106,0
2050 A1$=INKEY$:IF A1$="" THEN 2050
2060 PRINT A1$;
2070 IF A1$=CHR$(3) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:END
2080 IF A1$=CHR$(27) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:RUN "MENU"
2090 IF A1$="y" OR A1$="Y" THEN LOCATE 25,1:PRINT STRING$(79,CHR$(32));:LOCATE Y1,10:COLOR 7:PRINT "CHANGE TO WORKING DISK AND ENTER SUBROUTINE LETTER > ";:GOTO 2102
2100 GOTO 300
2102 Q$=INKEY$:IF Q$="" THEN 2102
2104 IF Q$=CHR$(27) THEN COLOR 2,0,0:CLS:RUN "MENU
2106 PRINT Q$
2108 Q=ASC(Q$)
2110 IF Q > 96 AND Q < 115 THEN Q=Q-96:GOTO 2116
2112 IF Q > 64 AND Q < 83  THEN Q=Q-64:GOTO 2116
2114 LOCATE 25,25:PRINT STRING$(35,32);:GOTO 2090
2116 COLOR 2,0:WIDTH 80:CLS
2120 COLOR 12,0,0:LOCATE 1,21:PRINT STRING$(79,32);:LOCATE Y1,21:PRINT	"SUBROUTINE NOW SAVED IN FILE    SUB-";Q$;:PRINT CHR$(11):COLOR 2,0,0
2130 ON Q GOTO 2140,2150,2160,2170,2180,2190,2200,2210,2220,2230,2240,2250,2260,2270,2280,2290,2300,2310
2140 RUN "MENU"
2150 LIST 7999-8190,"SUB-B"
2160 LIST 8199-8390,"SUB-C"
2170 LIST 8399-8590,"SUB-D"
2180 LIST 8599-8790,"SUB-E"
2190 LIST 8799-8990,"SUB-F"
2200 LIST 8999-9190,"SUB-G"
2210 LIST 9199-9390,"SUB-H"
2220 LIST 9399-9590,"SUB-I"
2230 LIST 9599-9790,"SUB-J"
2240 LIST 9799-9990,"SUB-K"
2250 LIST 9999-10190,"SUB-L"
2260 LIST 10199-10390,"SUB-M"
2270 LIST 10399-10590,"SUB-N"
2280 LIST 10599-10790,"SUB-O"
2290 LIST 10799-10990,"SUB-P"
2300 LIST 10999-11190,"SUB-Q"
2310 LIST 11199-11390,"SUB-R"
2320 END
7999 END
8000 REM	***** YES OR NO AT X1,Y1 LOCATION *****
8001 '
8010 Y1=10:X1=20
8020 LOCATE Y1,1:PRINT STRING$(79,CHR$(32));
8030 LOCATE Y1,X1:COLOR 6,0,0:PRINT "ANSWER YES OR NO > ";
8050 B1$=INKEY$:IF B1$="" THEN 8050
8060 PRINT B1$;
8070 IF B1$=CHR$(3) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:END
8080 IF B1$=CHR$(27) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:RUN "MENU"
8090 IF B1$="y" OR B1$="Y" THEN RETURN
8100 IF B1$="n" OR B1$="N" THEN RETURN
8110 GOTO 8020
8193 '
8194 '
8195 '          SUBROUTINE IS    SUB-B          HIT F7 KEY
8199 END
8200 REM	***** FUNCTIONS *****
8201 '
8210 '-- TIME IN SECONDS --
8220 DEF FNTIME=VAL(LEFT$(TIME$,2))*3600+VAL(MID$(TIME$,4,2))*60+VAL(RIGHT$(TIME$,2))
8230 ' -- RETURNS UPERCASE FIRST LETTER OF A STRING --
8240  DEF FNU$(A$)=CHR$(ASC(LEFT$(A$,1))+32*(LEFT$(A$,1)>"Z"))
8250 ' -- STRIPS LEADING SPACE FROM A NUMBER CONVERTED TO A STRING --
8260 DEF FNS$(N$)=RIGHT$(N$,LEN(N$)-1)
8270 DEF SEG=&H40;POKE &H17,PEEK(&H17) OR 32:' TO SET NUMLOCK
8271 DEF SEG=&H40;POKE &H17,PEEK(&H17) AND 223 :' TO UNSET NUMLOCK
8272 DEF SEG=&H40;POKE &H17,PEEK(&H17) OR 64:' TO SET CAPSLOCK
8273 DEF SEG=&H40;POKE &H17,PEEK(&H17) AND 171 :' TO UNSET CAPSLOCK
8393 '
8394 '
8395 '          SUBROUTINE 1S    SUB-C          HIT F7 KEY
8399 END
8400 REM	***** CONTINUE ROUTINE *****
8401 '
8410 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,27
8420 COLOR 5,0,0:PRINT "Hit any key to continue";:COLOR 2,0,0
8440 B2$=INKEY$:IF B2$="" THEN 8440
8460 IF B2$=CHR$(3) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:END
8470 IF B2$=CHR$(27) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:RUN "MENU"
8480 CLS
8490 RETURN
8593 '
8594 '
8595 '          SUBROUTINE IS    SUB-D          HIT F7 KEY
8599 END
8600 '          ***** UPERFY A STRING *****
8601 '
8610 FOR XZ=1 TO LEN(X$)
8620 XC$=MID$(X$,XZ,1)
8630 IF "a" <= XC$ AND XC$ <= "z" THEN MID$(X$,XZ,1) = CHR$(ASC(XC$)-32)
8640 NEXT XZ
8650 RETURN
8793 '
8794 '
8795 '          SUBROUTINE IS    SUB-E          HIT F7 KEY
8799 END
8800 '          ***** PRINTER ERROR ROUTINES (80 COL) *****
8801 '
8805 IF ERR=24 THEN RESUME ELSE GOTO 8810
8810 LOCATE 25,1:PRINT SPACE$(79);
8820 IF ERR=25 THEN 8830 ELSE 8850
8830 COLOR 4,0,0:LOCATE 25,25:LINE INPUT ;"Turn printer on and (CR)";Z$
8840 LOCATE 25,1:PRINT SPACE$(79);:COLOR 2,0,0:RESUME
8850 SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:ON ERROR GOTO 0
8993 '
8994 '
8995 '          SUBROUTINE IS    SUB-F          HIT F7 KEY
8999 END
9000 '          ***** PRINTER ERROR ROUTINES (40 COL) *****
9001 '
9005 IF ERR=24 THEN RESUME ELSE GOTO 9010
9010 LOCATE 25,1:PRINT SPACE$(39);
9020 IF ERR=25 THEN 9030 ELSE 9050
9030 COLOR 4:LOCATE 25,7:LINE INPUT ;"Turn printer on and (CR)";Z$
9040 LOCATE 25,1:PRINT SPACE$(39);:COLOR 2,0,0:RESUME
9050 SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:ON ERROR GOTO 0
9193 '
9194 '
9195 '          SUBROUTINE IS    SUB-G          HIT F7 KEY
9199 END
9200 '          ***** Load disk A and disk B *****
9210 '
9220 DSK=1:DSK1$="DISK A":DSK2$="DISK B":CLS:WIDTH 40
9230 LOCATE 4,6:COLOR 12:PRINT "Hit ESC to abort"
9240 LOCATE 6,6:PRINT "Hit any key to load both disks"
9250 B3$=INKEY$:IF B3$="" THEN 9250
9260 IF B3$=CHR$(3) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:END
9270 IF B3$=CHR$(27) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:RUN "MENU"
9273 IF DSK > 2 GOTO 9390
9276 IF DSK=1 THEN LOCATE 10,6:COLOR 25,6:PRINT " LOADING  ";:COLOR 9,6:PRINT DSK1$;" ":COLOR 2,0
9278 IF DSK=2 THEN LOCATE 10,6:COLOR 16,7:PRINT " LOADING  ";:COLOR 0,7:PRINT DSK1$;" ":COLOR 2,0
9280 FILDAT$="NAME"     :REM  --------CHANGE TO REAL NAME-------
9290 IF DSK=1 THEN FILDAT$="A:"+FILDAT$
9300 IF DSK=2 THEN FILDAT$="B:"+FILDAT$
9310 REM	-----ENTER INSTRUCTIONS HERE-----
9370 CLOSE #1
9375 BEEP:DSK=DSK+1:SWAP DSK1$,DSK2$
9380 LOCATE 10,6:PRINT SPC(39):GOTO 9273
9390 WIDTH 80:COLOR 2,0,0:RUN "MENU"
9393 '
9395 '          SUBROUTINE IS    SUB-H          HIT F7 KEY
9399 END
9400 '          ***** DIRECT OUTPUT TO PRINTER OR SCREEN *****
9410 '
9420 DEF FNU$(A$)=CHR$(ASC(LEFT$(A$,1))+32*(LEFT$(A$,1)>"Z"))
9430 DEV$="SCRN:"
9440 WIDTH 40:COLOR 14,1,9:CLS:LOCATE 12,3:PRINT "Do you wish output on the printer ";
9450 B2$=INKEY$:IF B2$="" THEN 9450
9460 PRINT FNU$(B2$):IF FNU$(B2$)="Y" THEN DEV$="LPT1:"
9470 IF B2$=CHR$(3) THEN SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:END
9480 IF B2$=CHR$(27) THEN SCREEN 0,0,0:COLOR 2,0,0:WIDTH 80:RUN "MENU"
9490 ON ERROR GOTO 9520
9500 OPEN "O",3,DEV$
9510 SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80:RETURN
9520 WIDTH 40:COLOR 12,1,9:CLS:LOCATE 12,6
9530 IF ERR=24 THEN RESUME ELSE GOTO 9540
9540 IF ERR=25 THEN 9550 ELSE END
9550 LINE INPUT ;"Turn on the printer and (CR) ";Z$
9560 SCREEN 0,0,0:CLS:COLOR 2,0,0:WIDTH 80
9570 RESUME
9593 '
9594 '
9595 '          SUBROUTINE IS    SUB-I          HIT  F7 KEY
9599 END
9600 '          ***** RESET FUNCTION KEYS *****
9601 '
9610 FU$(1)=CHR$(12)+"LIST "
9620 FU$(2)=CHR$(12)+"RUN"+CHR$(13)
9630 FU$(3)=CHR$(12)+"LOAD"+CHR$(34)
9640 FU$(4)="SAVE"+CHR$(34)
9650 FU$(5)="RUN"+CHR$(34)+"MENU"+CHR$(13)
9660 FU$(6)=","+CHR$(34)+"LPT1:"+CHR$(34)+CHR$(13)
9670 FU$(7)="TRON"+CHR$(13)
9680 FU$(8)="WIDTH 80"+CHR$(13)+"CLS"+CHR$(13)
9690 FU$(9)="COLOR 2,0,0"+CHR$(13)
9700 FU$(10)="SCREEN 0,0,0"+CHR$(13)
9710 FOR X=1 TO 10:KEY X,FU$(X):NEXT X
9720 RETURN
9793 '
9794 '
9795 '          SUBROUTINE IS    SUB-J          HIT  F7 KEY
9799 END
```

## SPLTSCRN.BAS

```bas
10  REM SPLTSCRN.BAS-Splits the screen at horizontal dividing line location             of your choice and scrolls each window up or down at your choice. The           program is modified from pg.110 of Feb.83 issue of `SOFTALK/PC'
20  REM This program is set up as a demo, but by changing the appropriate vari          ables, you can change the size & location of the windows and the number         of lines scrolled each time scrolling occurs
30  REM TULR%=top window,upper left row:LLLC%=lower window,lower left column etc        Length must be < height of window.Length%=number of lines to jump on            each scroll (normally=1)
40  REM Submitted by Emile Alline 834-6444...also available on disk...enjoy!!
50 :
60     REM Poke a 64 byte machine lang routine at 32,768...relocate if desired
70 DEF SEG:SCROLLR=&H8000
80 FOR ADDRESS=SCROLLR TO SCROLLR+&H40:READ CODE:POKE ADDRESS,CODE:NEXT ADDRESS
90 DATA &H55
100 DATA &H8B,&HEC
110 DATA &H50
120 DATA &H53
130 DATA &H51
140 DATA &H52
150 DATA &H56
160 DATA &H8B,&HB6,&H10,&H00
170 DATA &H8A,&H2C
180 DATA &H8B,&HB6,&H0E,&H00
190 DATA &H8A,&H0C
200 DATA &H8B,&HB6,&H0C,&H00
210 DATA &H8A,&H34
220 DATA &H8B,&HB6,&H0A,&H00
230 DATA &H8A,&H14
240 DATA &H8B,&HB6,&H08,&H00
250 DATA &H8A,&H3C
260 DATA &H8B,&HB6,&H06,&H00
270 DATA &H8A,&H04
280 DATA &HFE,&HCD
290 DATA &HFE,&HC9
300 DATA &Hfe,&Hce
310 DATA &HFE,&HCA
320 DATA &HB4,&H06 :REM 06 =scroll up, 07 =scroll down
330 DATA &HCD,&H10
340 DATA &H5E
350 DATA &H5A
360 DATA &H59
370 DATA &H5B
380 DATA &H58
390 DATA &H5D
400 DATA &HCA,&H0C,&H00
410     REM Set up location of dividing line,disregard illegal entries
420 CLS:INPUT"Enter line number between 3 and 22 to set screen split";X:IF X<3 OR X>22 THEN 420 ELSE SPLIT=X
430     REM Set up the dividing line between upper & lower windows
440 CLS:KEY ON:LOCATE SPLIT,1:PRINT "********************* THIS IS WHERE THE SCREEN SPLITS **************************"
450     REM Define upper window
460 UULR%=1:UULC%=1:ULRR%=SPLIT-1:ULRC%=80:UATTR%=53:ULENGTH%=1
470     REM Define lower window
480 LULR%=SPLIT+1:LULC%=1:LLRR%=24:LLRC%=80:LATTR%=53:LLENGTH%=1
490     REM Set initial cursor positions
500 UCR=1:UCC=1:LCR=SPLIT+1:LCC=1
510     REM Set initial values for displayed char
520 U=100:L=100
530     REM Position cursor to print first char on upper screen
540 LOCATE UCR,UCC
550     REM Print it without carrige return
560 PRINT U;
570    REM Save this cursor pos for next char on upper scrn
580 UCR=CSRLIN:UCC=POS(0)
590    REM If next pos is on lower boundry then scroll text up to make room
600 IF UCR>SPLIT-1 THEN CALL SCROLLR (UULR%,UULC%,ULRR%,ULRC%,UATTR%,ULENGTH%):UCR=SPLIT-1:U=U+1
610    REM Then move cursor up one line into newly vacated line
620    REM Same as above but for lower window
630 LOCATE LCR,LCC:PRINT L;:LCR=CSRLIN:LCC=POS(0):IF LCR>23 THEN CALL SCROLLR (LULR%,LULC%,LLRR%,LLRC%,LATTR%,LLENGTH%):LCR=23:L=L+1
640    REM Run until any key hit then list to play around again!
650 X$=INKEY$:IF X$="" THEN 540 ELSE LIST
```

## TIMER.BAS

```bas
100 '**************************************************************************
110 '*** Accurate time by Rob Ryan 10-9-82                                    *
120 '*** Submitted to PCanada by Bob Zakrison on 12 Nov 1982.                 *
130 '*** Taken form The Source as public domain material.                     *
140 '*** Times invoked from the system timer to 1/100th of a second.          *
150 '*** Possibly useful for benchmarking operations.                         *
160 '**************************************************************************
170 '
180 DIM A(&H1F): B=0
190 FOR I=0 TO &H1E: READ A(I): B=B+A(I): NEXT
200 READ C: IF B<>C THEN PRINT "Error in data, please check.": END
210 DEF SEG=&HFE0 :FOR I=0 TO &H1E: POKE I,A(I): NEXT
220 BSAVE "Timer.rtn",0,&H1E
230 '*** H%=hours, M%=minutes, S%=seconds, T%=1/100 sec.
240 ROUT=0: CALL ROUT(H%,M%,S%,T%)
250 '
260 '*** USE THE FOLLOWING CODE TO PRINT IF DESIRED (IN OTHER PROGRAMS) ...
270  S=S%+(T%/100): PRINT USING "The time is: ##:##:##.##"; H%; M%; S
280 '
290 DATA &H55,&H8B,&HEC,&HB4,&H2C,&HCD,&H21,&H8B,&H7E,&HC,&H88,&H2D,&H8B
300 DATA &H7E,&HA,&H88,&HD,&H8B,&H7E,&H8,&H88,&H35,&H8B,&H7E,&H6,&H88,&H15
310 DATA &H5D,&HCA,&H8,&H0,&HBB5
```

## UPCASE.BAS

```bas
1 '  UPCASE = Routine to change all lowercase letters in CS$ to uppercase                 11/4/82         John Sigle
5 '
10 ' Demonstration of UPCASE
20 CLS : LOCATE 10,3
22 PRINT "This is a routine to change all lowercase letters to uppercase"
24 PRINT:PRINT
30 LINE INPUT "Enter uppercase and lowercase letters, or press ENTER to quit.";CS$
35 IF CS$="" THEN GOTO 65000   ' END
38 GOSUB 401
40 PRINT "Uppercased string is --- ";CS$
50 GOTO 30
100 '
400 ' UPCASE = Routine to change all lowercase letters in CS$ to uppercase
401 L%=LEN(CS$)
403 FOR K%=1 TO L%
405  O%=ASC(MID$(CS$,K%,1))
407  IF O%>96 AND O%<123 THEN MID$(CS$,K%,1)=CHR$(O%-32)
409 NEXT K%       :RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0372

     Volume in drive A has no label
     Directory of A:\

    FCBREAD  BAS      2560   4-19-85   8:35a
    FCBREAD  BSV       384   4-19-85   8:35a
    QCLEAR   BIN       256   4-19-85   8:35a
    QPRINT   BIN       128   4-19-85   8:35a
    QPRINTC  BIN       128   4-19-85   8:36a
    SCRLDEMO BAS      3200   4-19-85   8:36a
    SCROLL   BLD       128   4-19-85   8:36a
    SCROLL   DOC      5120   4-19-85   8:36a
    SPLTSCRN BAS      2816   4-19-85   8:36a
    BASPARAM BAS      1536   4-19-85   8:36a
    GETSP    ASM      3968   4-19-85   8:36a
    GETSP    BAS      2304   4-19-85   8:36a
    GETSP1   BAS      1024   4-19-85   8:37a
    GETSP1   EXE      2048   4-19-85   8:37a
    GETSPACE           256   4-19-85   8:37a
    GETSPACE DOC      1280   4-19-85   8:37a
    SCRN-DOC           256   4-19-85   8:37a
    SCRN-GET TWO      1536   4-19-85   8:37a
    SCRN-WK  BAS      2304   4-19-85   8:37a
    SCRNSLGR DEM      3584   4-19-85   8:37a
    SCROLL   BAS      6400   4-19-85   8:37a
    BASICSUB DOC      4096   4-19-85   8:38a
    FIND-DS  BAS       640   4-19-85   8:38a
    QUICKC   BAS      1280   4-19-85   8:38a
    TIMER    BAS      1280   4-19-85   8:38a
    TIMER    RTN       128   4-19-85   8:38a
    DISKTYPE SUB      1152   4-19-85   8:38a
    READ_DIR SUB      3072   4-19-85   8:38a
    DAYOFWK  BAS       768   4-19-85   8:38a
    READ_DIR BAS      3328   4-19-85   8:39a
    HEAPSORT BAS      1536   4-19-85   8:39a
    HEAPSORT DOC       128   4-19-85   8:39a
    JULIAN   BAS      4096   4-19-85   8:39a
    JULIAN   DOC       128   4-19-85   8:39a
    NUM2WORD BAS      3200   4-19-85   8:39a
    PRTSC    BAS       384   4-19-85   8:39a
    SHELSORT BAS       768   4-19-85   8:39a
    BASSUB   ASC      2816   4-19-85   8:40a
    BASSUB   OBJ       384   4-19-85   8:40a
    CMDLIN   DOC      6400   4-19-85   8:40a
    CAPLOCK  BAS      1024   4-19-85   8:40a
    DISKHAND BIN       128   4-19-85   8:40a
    PAK-DATE BAS      1920   4-19-85   8:40a
    CNTRL-BR BAS       640   4-19-85   8:40a
    QSORT    BAS      2816   4-19-85   8:40a
    JOYSTIK  BAS       512   4-19-85   8:41a
    SETMEM   BAS       768   4-19-85   8:41a
    DAYS     BAS      3584   4-19-85   8:41a
    SHORTSUB BAS      9472   4-19-85   8:41a
    INKEY    BAS      5504   4-19-85   8:41a
    INKEY2   BAS      8192   4-19-85   8:41a
    DIR4     BAS      2304   4-19-85   8:41a
    DIR4     BIN       640   4-19-85   8:42a
    SCRNDUMP BAS      2176   4-19-85   8:42a
    UPCASE   BAS       768   4-19-85   8:42a
    FILES372 TXT      3372   7-08-85   2:36p
           56 file(s)     120620 bytes
                           28160 bytes free
