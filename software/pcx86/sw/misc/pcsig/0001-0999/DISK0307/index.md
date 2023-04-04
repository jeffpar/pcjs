---
layout: page
title: "PC-SIG Library Disk #307"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0307/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0307"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY UTILITIES NO 1"

    The programs on this disk are utilities for hackers or experienced
    programmers.  They do many different things and most are aimed at
    system operations and DOS commands.  Routines include on-screen
    calculator, and a disk drive alignment program.
    
    System Requirements: Optional 8087 co-processor
    
    How to Start: To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    87ERROR  COM  Handles error calls from optional 8087 math co-processor
    87ERROR  ASM  Assembly source for 87ERROR
    87ERROR  DOC  Documentation for 87ERROR
    ALIGN    BAS  Head alignment program
    87ERROR  OBJ  Part of 87ERROR
    AST-TEST COM  Memory test program
    ASCII    COM  Displays ASCII table on screen
    ANSIKEYS DOC  Documentation for ANSI&2K
    ANSI&2K  SYS  Expands function key buffer by 2k
    SYSTAT   COM  Displays name and comments of each disk drive in system
    SYSTAT   DOC  Documentation for SYSTAT
    TEE      COM  Allows you to see what is being piped in piping commands
    UNDOBKUP BAS  Same as UNDO
    UNDO     BAS  Allows fixed disk users to read backup diskettes
    TESTDRV  BAS  Performs read/write test on drives
    TEE      DOC  Documentation for TEE
    CALC     EXE  On screen calculator
    BDNCHM   TXT  A fast and dirty function accuracy test
    CLEARRO  COM  Clears read only attribute from files
    CIPHER   BAS  A simple encoding and decoding security system
    CORELOOK COM  Takes snapshot of memory core
    CLEARRO  DOC  Docs for CLEARRO
    DEBUG    TXT  A small tutorial about the DEBUG command in DOS
    CURSOR   DOC  Documentation for CURSOR
    CURSOR   COM  Sets maximum size of cursor
    CPMDOSXR DOC  Displays equivelent commands in DOS and CP/M
    DEFRAG   BAS  Unifies a file that is fragmented by repeated use
    DEFRAG   DOC  Documentation for DEFRAG
    DOS-BUG  4E   Reports on bug in DOS 2.1 function calls
    ENVINUSE COM  Sizes environment buffer
    DOS2A    TXT  Information about DOS 2.0 interrupts
    MEMORY   DOC  Docs to explain MEMORY
    MEMORY   COM  Allows dynamic memory switch change
    LOOKMEM  COM  Another memory look program
    KEYS          Optional key assignment list
    ENVXPAND SYS  Expands environment buffer by 1k
    ENVIRO   PAT  Patches COMMAND.COM for larger environement area
    ENVXPAND DOC  Documentation for ENVXPAND
    ENVIRON  DOC  Explains some of the SET command options
    SETVAR   DOC  Documentation for SETVAR
    SETVAR   COM  Allows variables and variations to the set command
    SETRO    DOC  Documentation for SETRO
    SETRO    COM  Sets read only parameter to on
    SETKEY   EXE  Allows user redefinition of keyboard
    SETKEY   DOC  Documentation for SETKEY
    REBOOT   EXE  Software system reboot
    REBOOT   DOC  Brief apologetic note explaining lack of documentation
    QUIKUPQD COM  Part of QUIKUP
    QUIKUP   DOC  Documentation for QUIKUP
    QUIKUP   COM  Faster bootup by use of software memory switches
    PARINT   COM  Parity intercept
    NULLKEYS      Optional key assignment list
    MORERAM  DOC  Docs for MORERAM
    MORERAM  COM  Allows PC to use more RAM then switch sets suggest
    MORERAM  ASM  Assembler source for MORERAM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALIGN.BAS

```bas
5 ON KEY (13) GOSUB 250
6 ON KEY (12) GOSUB 280
7 ON KEY (14) GOSUB 400
8 KEY (14) ON
10 PRINT"I.B.M.DISK DRIVE ALIGNMENT PROGRAM"
16 INPUT "PRESS ENTER TO CONTINUE",A$
20 DOR=&H3F2:SR=&H3F4:FD=&H3F5
30 OUT DOR,32
40 OUT DOR,37
50 OUT FD,3
60 OUT FD,&HCF
70 OUT FD,7:REM RECALIBRATE HEAD
80 OUT FD,1
90 FOR I=1 TO 500:NEXT I
100 PRINT "HEAD HAS NOW RECALIBRATED TO TRACK ZERO"
105 CLS
110 TRK=0
120 PRINT "HEAD IS NOW AT TRACK ";TRK
130 PRINT "PRESS RIGHT ARROW TO STEP IN, PRESS LEFT ARROW TO STEP OUT "
131 PRINT "OR PRESS DOWN ARROW TO RECALIBRATE"
140 KEY (13) ON
150 KEY (12) ON
160 OUT DOR,37
170 LOCATE 1,1
180 GOTO 120
190 END
250 TRK=TRK+1
255 IF TRK>39 THEN BEEP:TRK=39
260 GOSUB 300
265 RETURN
280 TRK=TRK-1
285 IF TRK<0 THEN BEEP:TRK=0
290 GOSUB 300
295 RETURN
300 KEY (13) OFF:KEY (12) OFF
301 OUT DOR,37
305 OUT FD,15
310 OUT FD,1
320 OUT FD,TRK
330 FOR I=1 TO 50:NEXT I
340 RETURN
400 OUT FD,7
410 OUT FD,1
415 TRK=0
420 FOR I=1 TO 500:NEXT I
430 RETURN
```

## CIPHER.BAS

```bas
100 DEFINT A-Z
110 INPUT "INPUT  FILENAME? ",INFILE$
120 INPUT "OUTPUT FILENAME? ",OUTFILE$
130 INPUT "ENTER E=ENCRYPT,D=DECRYPT: ",S$
140 S=1:IF S$="D" OR S$="d" THEN S=-1
150 INPUT "ENTER YOUR KEY: ",KY$
160 OPEN INFILE$ FOR INPUT AS #1
170 OPEN OUTFILE$ FOR OUTPUT AS #2
180 KIX=0
190 IF EOF(1) THEN 280
200 C=ASC(INPUT$(1,#1))
210 IF C<&H20 OR C>&H7A THEN 260
220 KIX=KIX+1:IF KIX>LEN(KY$) THEN KIX=1
230 C$=MID$(KY$,KIX,1):C=C+S*ASC(C$)
240 IF C<&H20 THEN C=C+&H5B
250 IF C>&H7A THEN C=C-&H5B
260 PRINT #2,CHR$(C);
270 GOTO 190
280 CLOSE #1
290 CLOSE #2
300 SYSTEM
```

## DEFRAG.BAS

```bas
1000 ' Birk Binnard receives EMAIL at COMPUSERVE #72356,556
1010 '                                RBBS at (213) 410-0714
1020 ' ++++DEFRAG V 1.0 ++++          RBBS at (213) 973-2374
1030 '                                RBBS at (213) 973-4497
1040 DEFINT A-Z:DIM N1$(128),COPY(128,2)
1050 KEY OFF:CLOSE:CLS:BLANKS$=STRING$(60," "):RESTART=0:L$=STRING$(20,205)
1060 ON KEY(1) GOSUB 1200'pick file
1070 ON KEY(2) GOSUB 1400'restart
1080 ON KEY(3) GOSUB 1270'copy files
1090 ON KEY(7) GOSUB 1420'delete files
1100 ON KEY(9) GOSUB 1520'DOS command
1110 ON KEY (10) GOSUB 1380'end
1120 ON KEY (11) GOSUB 1580'up
1130 ON KEY (12) GOSUB 1600'left
1140 ON KEY (13) GOSUB 1620'right
1150 ON KEY (14) GOSUB 1640'down
1160 FOR I=1 TO 10:KEY I,"":NEXT
1170 KEY 1,"PICK":KEY 2,"RESTRT":KEY 3,"COPY":KEY 7,"DELETE":KEY 9,"COMAND"
1180 KEY 10,"END":GOTO 1670
1190 '
1200 NOW=NOW+1:IF INDEX>=0 AND NOW<=NFIL THEN 1210 ELSE 1220'pick file
1210 IF COPY(INDEX,2)<0 THEN 1230
1220 NOW=NOW-1:BEEP:RETURN 2090
1230 COPY(NOW,1)=INDEX:COPY(INDEX,2)=NOW:SCOL=POS(0)-2
1240 LOCATE ROW,SCOL:COLOR 12:PRINT USING "###";NOW;:COLOR 7:COL=SCOL
1250 LOCATE ROW,COL:RETURN 2090
1260 '
1270 LOCATE MAXROW+4,1:PRINT"You have selected ";NOW;"of";NFIL;"files."
1280 LOCATE MAXROW+6,1:PRINT "Do you want to do the Copy operation? (y/n) -->";
1290 X$=INPUT$(1):PRINT X$:IF INSTR("Yy",X$)>0 THEN 1310
1300 LOCATE MAXROW+3,1:PRINT BLANKS$:LOCATE MAXROW+5,1:PRINT BLANKS$:GOTO 1360
1310 KEY OFF:GOSUB 2260:FOR I=1 TO NOW
1320    LOCATE 3,10
1330    PRINT"Copying file "+N1$(COPY(I,1))+" from "+SD$+" to "+TD$+"      "
1340    CMD$="copy "+SD$+N1$(COPY(I,1))+" "+TD$:GOSUB 2210
1350 NEXT
1360 N=0:ROW=MINROW:COL=1:RETURN 2010
1370 '
1380 RETURN 2130'end program
1390 '
1400 CLS:RESTART=-1:CLOSE:KILL DIRFIL$:RETURN 1740'restart
1410 '
1420 LOCATE MAXROW+4,1:PRINT "You have selected";NOW;"files to DELETE."
1430 LOCATE MAXROW+6,1:PRINT"Do you want to do the Delete operation (y/n)?-->";
1440 X$=INPUT$(1):PRINT X$:IF INSTR("Yy",X$)>0 THEN 1460
1450 LOCATE MAXROW+3,1:PRINT BLANKS$:LOCATE MAXROW+5,1:PRINT BLANKS$:GOTO 1500
1460 KEY OFF:GOSUB 2260:FOR I=1 TO NOW'delete files
1470    LOCATE 3,10:PRINT"Deleting file "+N1$(COPY(I,1))+" from "+SD$+"      "
1480    KILL SD$+N1$(COPY(I,1))
1490 NEXT
1500 CLOSE:KILL DIRFIL$:RETURN 1880
1510 '
1520 GOSUB 2260:LOCATE 3,10'DOS command
1530 INPUT "Enter DOS command -->",CMD$
1540 CLS:KEY OFF:GOSUB 2210:COLOR 12
1550 LOCATE 25,1,1,0,13:PRINT"Press any key to continue -->";:X$=INPUT$(1)
1560 COLOR 7:GOSUB 2260:CLOSE:KILL DIRFIL$:RETURN 1880
1570 '
1580 ROW=ROW-1:IF ROW<MINROW THEN ROW=MAXROW
1590 RETURN 2090
1600 COL=COL-16:IF COL<1 THEN COL=65
1610 RETURN 2090
1620 COL=COL+16:IF COL>80 THEN COL=1
1630 RETURN 2090
1640 ROW=ROW+1:IF ROW>MAXROW THEN ROW=MINROW
1650 RETURN 2090
1660 '
1670 KEY(1) ON:KEY(2) ON:KEY(3) ON:KEY(7) ON:FOR I=9 TO 14:KEY(I) ON:NEXT
1680 GOSUB 2260:MINROW=4
1690 LOCATE 4,10:PRINT"Enter work (RAM) Drive letter (no colon)-->";:LOCATE ,,1
1700 RD$="a:":D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D=13 THEN 1740
1710 IF D<97 THEN D=D+32
1720 IF D<97 OR D>100 THEN BEEP: GOTO 1690
1730 RD$=D$+":"'   RAM disk
1740 LOCATE 6,10:PRINT"Enter Source Drive letter (no colon)-->";:LOCATE ,,1
1750 D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D<97 THEN D=D+3
1760 IF D<97 OR D>100 THEN BEEP: GOTO 1740
1770 SD$=D$+":"'   source drive
1780 LOCATE 8,10:PRINT"Enter Target Drive letter (no colon)-->";:LOCATE ,,1
1790 D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D<97 THEN D=D+32
1800 IF D<97 OR D>100 THEN BEEP: GOTO 1780
1810 TD$=D$+":"'   target drive
1820 IF RESTART OR RD$="a:" THEN 1880
1830 PRINT:PRINT:PRINT TAB(10);
1840 PRINT"Copying COMMAND.COM and SORT.EXE to work (RAM) disk."
1850 CMD$="copy a:command.com "+RD$:GOSUB 2210
1860 ENVIRON "COMSPEC="+RD$+"\COMMAND.COM"'  use command.com on ram disk
1870 CMD$="copy a:sort.exe "+RD$:GOSUB 2210
1880 DIRFIL$=RD$+"dir.dat":NOW=0
1890 FOR I=1 TO 128:COPY(I,1)=-1:COPY(I,2)=-1:NEXT
1900 PRINT:PRINT TAB(10);
1910 PRINT"Reading and sorting directory entries for disk in drive "+SD$
1920 CMD$="dir "+SD$+"|"+RD$+"sort|"+RD$+"sort/+10>"+DIRFIL$:GOSUB 2210
1930 OPEN DIRFIL$ FOR INPUT AS #1
1940 PRINT:FOR I=1 TO 4:INPUT#1,A$:NEXT:NFIL=0' discard header lines
1950 IF EOF(1) THEN 1990 ELSE INPUT#1,A$:NFIL=NFIL+1:MID$(A$,9)="."
1960 N=INSTR(9,A$," "):IF N=10 THEN MID$(A$,9)=" "
1970 N=INSTR(1,A$," "):IF N>8 THEN 1980 ELSE A$=LEFT$(A$,N-1)+MID$(A$,9,4)
1980 N1$(NFIL)=LEFT$(A$,12):GOTO 1950
1990 NFIL=NFIL-2:N=0:COL=1:ROW=MINROW:IF NFIL>0 THEN 2010
2000 CLS:PRINT"The disk in drive "+SD$+" has no standard files.":GOTO 2100
2010 GOSUB 2260:PRINT "The files on drive "+SD$+" are:"
2020 N=N+1:LOCATE ROW,COL
2030 COLOR 12:IF COPY(N,2)<0 THEN PRINT "   "; ELSE PRINT USING"###";COPY(N,2);
2040 COLOR 7:PRINT CHR$(27)+N1$(N);
2050 COL=COL+16:IF COL>80 THEN ROW=ROW+1:COL=1
2060 IF N<NFIL THEN 2020 ELSE IF COL=1 THEN ROW=ROW-1
2070 MAXROW=ROW:ROW=MINROW:COL=1
2080 PRINT:PRINT:PRINT"There are";NFIL;"files on the disk in drive ";SD$;
2090 INDEX=(ROW-MINROW)*5+(COL+15)/16:IF INDEX>NFIL THEN INDEX=-1
2100 KEY ON:LOCATE ROW,COL+2,1,0,13
2110 GOTO 2110'loop waiting for fkey interrupt
2120 '
2130 CLOSE #1:KILL DIRFIL$:IF RD$="a:" THEN 2190
2140 KILL RD$+"sort.exe":KILL RD$+"command.com"
2150 ENVIRON "COMSPEC=A:\COMMAND.COM"'  use command.com on drive a
2160 KEY OFF:KEY 1,"LIST ":KEY 2,"RUN"+CHR$(13):KEY 3,"LOAD"+CHR$(34)
2170 KEY 4,"SAVE"+CHR$(34):KEY 5,"FILES":KEY 6,"SYSTEM":KEY 7,"EDIT "
2180 KEY 8,"CLS"+CHR$(13):KEY 9,"KEY ":KEY 10,"RENUM "
2190 GOSUB 2260:LOCATE 3,1,1,11,12:PRINT"DEFRAG ended.":KEY ON:PRINT:END
2200 '
2210 T1=PEEK(&H30):T2=PEEK(&H31)'execute shell for cmd$
2220 SHELL CMD$
2230 POKE &H30,T1:POKE &H31,T2
2240 RETURN
2250 '
2260 CLS:COLOR 14:PRINT TAB(10);L$;" D E F R A G ";L$:COLOR 7:RETURN
```

## TESTDRV.BAS

```bas
10  'DISK DRIVE TEST
20  'JOE McDERMOTT - DECEMBER 1982
25  'NORTH JERSEY IBM PC CLUB
30  '
40  'THE PROGRAM CREATES A SERIES OF SEQUENTIAL FILES
50  'IT WRITES DATA TO THEM AND READS IT BACK FOR VERIFICATION
60  'FINALLY THE TEST FILES ARE ERASED/
70  'THE FILES ARE OF THE FORM "XXX.TST" WHERE "XXX" ARE THREE LETTERS
80  'CHOSEN AT RANDOM, E.G. "EBG.TST","CXU.TST"
90  '
100  NUMFILES=40        'NUMBER OF FILES THAT WILL BE CREATED
110  DIM FS$(NUMFILES)  'ARRAY FOR STORING FILESPECS
120  FTYPE$=".TST"      'FILE EXTENSION USED IN THE TEST
130  INPUT"DRIVE TO BE TESTED ";DD$
140  DD$=DD$+":"
150  '
160  INPUT"*** INSERT DISK AND PRESS `ENTER' ***",Z$
170  '
180  '   ---------- CREATE FILES ----------
190  FOR I=1 TO NUMFILES
200    FILENAME$ = CHR$(RND*26+64)+CHR$(RND*26+64)+CHR$(RND*26+64)
205    FS$(I)=DD$+FILENAME$+FTYPE$
210    PRINT"CREATING: ";FS$(I);" #";I
220    OPEN "O",1,FS$(I)           'CREATE DIRECTORY ENTRY
230    PRINT#1,STRING$(255,"*")    'WRITE DATA TO FILE
240    PRINT#1,STRING$(255,"*")
250    PRINT#1,STRING$(255,"*")
260    CLOSE 1
270  NEXT I
280  '   ---------- READ BACK FILES -----------
290  FOR I=1 TO NUMFILES
300    PRINT"READING: ";FS$(I);" #";I
310    OPEN "I",1,FS$(I)
320    INPUT#1,L$:PRINT LEFT$(L$,75)
330    INPUT#1,L$:PRINT LEFT$(L$,75)
335    INPUT#1,L$:PRINT LEFT$(L$,75)
340    CLOSE 1
350  NEXT I
360  '   ---------- ERASE FILES ----------
370  FOR I=1 TO NUMFILES
380    PRINT"ERASING: ";FS$(I)
390    KILL FS$(I)
400  NEXT I
410  END  'OF PROGRAM
```

## UNDO.BAS

```bas
10 KEY OFF
20 CLS
30 COLOR 0,7
40 LOCATE 5,33
50 PRINT " UNDO-128.BAS "
60 LOCATE 7,31
70 PRINT " By Rich Schinnell "
80 LOCATE 8,26,1
90 PRINT " Rockville, MD (301) 949-8848 "
100 COLOR 7,0
110 PRINT
120 PRINT
130 PRINT "A program for IBM  DOS 2.0/2.1 Fixed Disk owners , ie XT's and"
140 PRINT "expansion chassis's who use the IBM DOS 2.0 BACKUP.COM utility and"
150 PRINT "want to access files from their backup disks without Restore."
160 PRINT "All files are restored up to the next 128 Byte boundry."
170 PRINT "This cause absolutely no problems as DOS always reserves"
180 PRINT "space in blocks of 512 for SS disks and 1024 for DS disks."
190 PRINT "Press <ENTER> to quit... Now Enter  SINGLE Letter Drive  for"
200 DEFINT A-Z
210 FALSE% = 0
220 TRUE% = NOT FALSE%
230 ON ERROR GOTO 1310
240 ZZZ! = 1
250 PRINT:LOCATE ,,1
260 PRINT"Backup disk Location ";
270 DR$=INKEY$:IF LEN(DR$)<1 THEN 270
280 IF ASC(DR$) = 13 THEN 1290
290 DR$ = DR$ + ":"
300 OPEN DR$+"BACKUPID.@@@" FOR INPUT AS #1
310 CLOSE #1
320 FILES DR$ + "*.*"
330 PRINT
340 PRINT
350 INPUT "File name to Recover (no Drive Designation) ";INFILE$
360 IF LEN(INFILE$) < 1 THEN 1290
370 CLOSE #1
380 OPEN DR$+INFILE$ FOR INPUT AS #1
390 CLOSE 1
400 CLOSE #1
410 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
420 FIELD #1,128 AS G$
430 GET #1
440 CLOSE #1
450 N$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
460 N=VAL(N$)
470 DTE$=STR$(ASC(MID$(G$,7,1)))+"-"+STR$(ASC(MID$(G$,6,1)))+"-"
480 DTE$=DTE$+STR$(ASC(MID$(G$,4,1))+1792)
490 PRINT "This is your backup disk #"; N;" Dated ";DTE$
500 CLOSE #1
510 OPEN DR$+INFILE$ AS #1 LEN=128
520 C$ = ""
530 D$ = ""
540 FIELD #1,128 AS A$
550 A# = LOF(1)
560 PRINT "Input file has";A# - 128;" Bytes in it"
570 GET #1
580 C$ = A$
590 FOR I% = 1 TO 128
600   IF ASC( MID$(C$,I%,1)) < 33 THEN 620
610   D$ = D$ + MID$(C$,I%,1)
620 NEXT I%
630 IF ASC(MID$(C$,2,1)) = 1 THEN 660
640 PRINT "This is Part 2 of";D$;" You must start with the first part"
650 BEEP:GOTO 330
660 IF ASC(MID$(C$,1,1)) =255 THEN ONLY.ONE%=-1:GOTO 690
670 PRINT:COLOR 23,0:PRINT "File on two Disks ,Insert backup disk #";
680 PRINT N+1;" When Instructed" : COLOR 7,0 : BEEP
690 PRINT
700 PRINT CHR$(34); MID$(D$,1,40); CHR$(34);" Was the file name when backed up"
710 INPUT "What do you want to name the output file ";OUTFILE$
720 IF LEN(OUTFILE$) < 1 THEN 330
730 OPEN OUTFILE$ FOR INPUT AS #2
740 CLOSE 2
750 PRINT "File ";OUTFILE$;" already exists, <O>verwrite ";
760 INPUT ": ";WELL$
770 IF WELL$ = "O" OR WELL$ = "o" THEN 780  ELSE 710
780 CLOSE #2
790 OPEN OUTFILE$ FOR OUTPUT AS #2
800 CLOSE #2
810 OPEN OUTFILE$ AS #2 LEN=128
820 FIELD #2,128 AS B$
830 COLOR 23,0
840 PRINT "Working ....";
850 COLOR 7,0
860 FOR I! = 2 TO INT((A#-128)/128)+2
870   GET #1,I!
880   LSET B$ = A$
890   PUT #2,ZZZ!
900   ZZZ! = ZZZ! + 1
910   PRINT CHR$(15);
920 NEXT I!
930 IF ONLY.ONE% THEN 1260
940 PRINT
950 PRINT "Insert Backup Disk #";N +1;" in drive ";DR$;
960 PRINT " and press <ENTER> or <Q>uit ":BEEP
970 R$ = INKEY$
980 IF R$ = "" THEN 970
990 IF R$ = "Q" OR R$ = "q" THEN CLOSE  : KEY ON  : END
1000 CLOSE #1
1010 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
1020 FIELD #1,128 AS G$
1030 GET #1
1040 CLOSE #1
1050 N1$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
1060 N1=VAL(N1$)
1070 IF N1 = N + 1 THEN 1090
1080 PRINT "WRONG DISK, TRY AGAIN You put in disk #"; N1 : GOTO 930
1090 CLOSE #1
1100 OPEN DR$+INFILE$ FOR INPUT AS #1
1110 CLOSE 1
1120 OPEN DR$+INFILE$ AS #1 LEN=128
1130 FIELD #1,128 AS A$
1140 C$ = ""
1150 D$ = ""
1160 A# = LOF(1)
1170 PRINT "Input file has";A# - 128;" Bytes in it"
1180   GET #1
1190   C$ = A$
1200 FOR I% = 1 TO 128
1210   IF ASC( MID$(C$,I%,1)) < 33 THEN 1230
1220   D$ = D$ + MID$(C$,I%,1)
1230 NEXT I%
1240 ONLY.ONE% = - 1
1250 GOTO 860
1260 CLOSE
1270 PRINT
1280 PRINT "File ";OUTFILE$;" created  Size="; STR$((ZZZ!-1)*128);" Bytes
1290 KEY ON
1300 END
1310 IF ERL=300 THEN DR$="":PRINT " Not a Valid Backup Disk":BEEP:RESUME 250
1320 IF ERL=380 THEN PRINT DR$;INFILE$;" NOT FOUND ":CLOSE #1:RESUME 250
1330 IF ERL=730 THEN RESUME 780
1340 IF ERL=890 THEN PRINT "disk is Probably full, check the disk":RESUME 1290
1350 IF ERL=1100 THEN PRINT "Not found " : RESUME 940
1360 PRINT "Error"; ERR ;" has occured in line #"; ERL
1370 RESUME 1290
```

## UNDOBKUP.BAS

```bas
10 'UNDOBACK.BAS     UNDO FILES FROM HARD DISK BACKUP COMMAND
20 KEY OFF:CLS:COLOR 0,7
30 LOCATE 5,33:PRINT " UNDOBACK.BAS "
40 LOCATE 7,31:PRINT " By Rich Schinnell ":COLOR 7,0:PRINT:PRINT
50 PRINT "A program for IBM  DOS 2.0/2.1
60 PRINT "Fixed Disk owners, ie XT's and expansion chassis's"
70 PRINT "who use the IBM BACKUP utility on the DOS diskette
80 PRINT "and want to access files from their backup disks without
90 PRINT "doing a recover.  The only exception: is a file which was saved part
100 PRINT "on one disk and part on another.. Sorry about that case ........
110 PRINT "Maybe some sharper programmer can modify this program to check that"
120 PRINT "Press <ENTER> to quit   enter ? for dir  (eg..?B:*.* )"
130 DEFINT A-Z:FALSE=0:TRUE=NOT FALSE:ON ERROR GOTO 330
140 PRINT:PRINT:INPUT "What is input file name ";INFILE$
150 IF LEN(INFILE$)<1 THEN 320
160 IF LEFT$(INFILE$,1)="?" THEN FILES MID$(INFILE$,2):GOTO 140
170 OPEN INFILE$ FOR INPUT AS #1:CLOSE 1
180 INPUT "What is output file name ";OUTFILE$
190 OPEN OUTFILE$ FOR INPUT AS #2:CLOSE 2
200 PRINT "File ";OUTFILE$;" already exists, try another name please":GOTO 180
210 OPEN INFILE$ AS #1 LEN=1
220 FIELD #1,1 AS A$
230 OPEN OUTFILE$ AS #2 LEN=1
240 FIELD #2,1 AS B$
250 A=LOF(1):PRINT "Input file has";A;" Bytes in it"
260 FOR I=1 TO 128:GET #1:NEXT I
270 FOR I=129 TO A
280 GET #1,I:LSET B$=A$
290 PUT #2:IF (I MOD 50)=0 THEN PRINT CHR$(15);
300 NEXT I
310 CLOSE:PRINT:PRINT "File ";OUTFILE$;" Successfully created "
320 KEY ON:END
330 IF ERL=170 THEN PRINT "file not found try again ":RESUME 140
340 IF ERL=190 THEN RESUME 210
350 PRINT "Error";ERR;" has occured in line #";ERL:RESUME 320
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0307

     Volume in drive A has no label
     Directory of A:\

    ANSI&2K  SYS      4096   1-13-84   7:13a
    ANSIKEYS DOC      6039   1-13-84   8:34a
    AST-TEST COM      4608   3-02-84   6:46a
    BDNCHM   TXT       896   6-07-84   5:26p
    CLEARRO  COM      1787   6-18-84   1:26a
    SETVAR   COM       512   1-06-85   9:20a
    SETVAR   DOC      1280   1-06-85   9:21a
    CIPHER   BAS       640  10-26-83   4:18p
    TEE      DOC       173   1-27-85  11:24a
    TEE      COM       281   9-07-83   8:26a
    87ERROR  ASM      1938   5-05-84   8:59p
    DOS2A    TXT      1536   3-07-84   6:38a
    ENVIRON  DOC      2560   3-07-84   6:37a
    DEBUG    TXT     34560  12-23-84  10:34a
    ALIGN    BAS      1024   7-25-83   8:29a
    KEYS              2560   1-13-84   7:17a
    87ERROR  COM       120   5-05-84   9:00p
    87ERROR  DOC      1601   5-05-84   8:49p
    MEMORY   COM      1532   6-23-83  10:33a
    MEMORY   DOC      2599   6-23-83  10:49a
    87ERROR  OBJ       226   5-05-84   9:00p
    CLEARRO  DOC      1536   6-18-84   1:10a
    MORERAM  ASM      7168   1-02-84   1:09a
    MORERAM  COM       512   1-02-84   1:07a
    MORERAM  DOC      3456   1-02-84   1:06a
    NULLKEYS          2560   1-13-84   7:16a
    REBOOT   DOC       179   3-08-83  12:04a
    REBOOT   EXE       640   8-29-82   1:05a
    CURSOR   COM       654   6-18-84   1:27a
    DOS-BUG  4E        426   5-03-84   5:53p
    SETKEY   DOC      2432   7-11-83   7:54a
    SETKEY   EXE     32256   7-13-83   6:48a
    CURSOR   DOC       768   6-18-84   1:09a
    SYSTAT   COM      1536   6-05-83   7:22a
    SYSTAT   DOC      1024   6-05-83   7:21a
    TESTDRV  BAS      2048   7-02-83  10:02a
    SETRO    COM      1771   6-18-84   1:23a
    UNDO     BAS      4608   2-21-84   6:56a
    UNDOBKUP BAS      2048   1-02-84   1:05a
    SETRO    DOC      1536   6-18-84   1:09a
    DEFRAG   BAS      5888   4-29-84   8:39p
    CORELOOK COM      5120   1-01-80   1:35a
    DEFRAG   DOC      5019   4-29-84   8:39p
    ENVIRO   PAT      1340   8-18-84  11:26a
    LOOKMEM  COM      1335   7-26-84   6:20p
    CPMDOSXR DOC      9472   9-12-83   3:29p
    ASCII    COM      6774   9-15-84   8:01p
    CALC     EXE     15698  12-23-84   5:15p
    ENVXPAND SYS      3200  12-28-84  11:14p
    ENVXPAND DOC      3328  12-28-84  11:14p
    ENVINUSE COM       512  12-28-84  11:14p
    PARINT   COM       512  12-28-84   6:17p
    QUIKUP   COM       192   7-10-83   1:28p
    QUIKUP   DOC      1675  10-13-84  12:00p
    QUIKUPQD COM       185   7-10-83   1:56p
    FILES307 TXT      3142   2-02-87   4:13p
           56 file(s)     201118 bytes
                           95232 bytes free
