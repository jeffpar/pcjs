---
layout: page
title: "PC-SIG Diskette Library (Disk #183)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0183/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0183"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 8"

    An assortment of the old and the new reside on this disk.  For those
    with older PC's, MEM640 patches to allow you to get 640k in your
    machine, RESCMD lets you have a memory-resident command processor.  Of
    more general appeal, MOVE combines the functionality of both COPY and
    DELETE into one easy package.  VTYPE is an improved TYPE command.  And
    COMSPEC4 lets you run COMMAND.COM from subdirectories.  Many more
    programs of interest are also included.
    
    System Requirements:  Some programs require BASIC
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    MEM640   DOC  Documentation
    MY-DATE  BAT  Part of COPYROM.EXE utility
    MEM640   ZAP  DOS patch lets older BIOS PC's use 544KB-640KB memory
    ROMREAD  BAS  Reads & displays ROM BIOS dates, type IBM PC  (Tom Allen)
    RESCMD   DOC  Documentation
    RESCMD   BAS  DOS 1.1 patch to make COMMAND.COM memory resident
    OLD-NEW  BAT  Part of COMPROM.EXE utility
    ROMREAD  DOC  Documentation
    VTYPE    EXE  Improved TYPE command  (Vincent Bly)
    VTYPE    DOC  Documentation
    MOVE     DOC  Documentation for MOVE.COM
    MOVE     COM  Utility - COPY command which prompts at each file
    BOARD    TST  Check for famous QUADRAM parity error design defect
    CHECKOUT BAS  Diagnostics on all ports
    CMD99    COM  Command processor
    COMSPEC4 ASM  Assembler source
    COMPROM  EXE  Compares two ROM programs from diskettes
    COMSPEC4 DOC  Documentation
    COMSPEC4 COM  DOS patch to activate COMMAND.COM in subdirectories
    COPYROM  EXE  Copies ROM programs onto diskette for later use
    CONFIG   EXE  Displays your PC's configuration
    CRS      COM  Compiled version
    CRS      BAS  Change cursor shape & size  (John Herzfeld)
    CRL      COM  Compiled version
    CRL      BAS  Change cursor shape & size  (John Herzfeld)
    INFO1    BAT  Documentation for COPYROM.EXE & COMPROM.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHECKOUT.BAS

```bas
1000 '"CHECKOUT" Test output ports, peripherals and handshake
1010 REV$="821210"'Robert Hamilton  (415) 493-2664                             »
1020 MODEM$="COM1:300,N,8,1,CS300,DS300,CD0":NUMBER$="7678900":NUM=1
1030 SERIAL$=",N,8,1,RS":BAUD$="300":CL$=STRING$(79,0):COL$="40"
1040 A$="ABCDEFGHI.JKLMNOPQR.STUVWXYZ0.123456789."
1050 B$="abcdefghi.jklmnopqr.stuvwxyz!.@#$%^&*()."
1060      REM: »» KEYS
1070 KEY OFF
1080 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY(I) ON:NEXT
1130 KEY 1,CHR$(27)+"CLS:LIST  "
1140 KEY 2,CHR$(27)+"RUN "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1150 KEY 4,CHR$(27)+"SAVE"+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+" GOTO 1000"
1160 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1170 KEY 9,CHR$(12)+"COLOR 7,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"+CHR$(7)
1180      REM: »» TITLE
1190 CLS:LOCATE 3,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1200 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1210 PRINT TAB(25);CHR$(179)+"        C H E C K O U T        ";CHR$(179)
1220 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1230 PRINT TAB(25);CHR$(179)+"        Version: ";REV$;"        ";CHR$(179)
1240 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1250 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1260 PRINT CHR$(10);TAB(32);"By Hamilton Company"
1270 PRINT TAB(32);"Tel  (415) 493-2664"
1280 LOCATE 20,1:PRINT"NOTE: Requires DOS Rev 1.10 & Basica";
1290      REM: »» START program
1300 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 7,0:PRINT" To Test Ports  ";
1310 COLOR 0,7:PRINT" Q ";:COLOR 7,0:PRINT" Quit Program";
1320 K$=INKEY$:IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1630
1330 IF K$="" THEN 1320
1340      REM: »» MENU
1350 CLS:LOCATE 3,30:PRINT"T E S T   M E N U"
1360 LOCATE 5,25:PRINT"Key  Description":LOCATE 6,25:PRINT "===  ";STRING$(35,61)
1370 LOCATE 8,25:PRINT" 1   Parallel Port  LPT1:"
1380 LOCATE ,25:PRINT" 2   Parallel Port  LPT2:"
1390 LOCATE ,25:PRINT" 3   Parallel Port  LPT3:"
1400 LOCATE ,25:PRINT" A   Serial Port    COM1:"
1410 LOCATE ,25:PRINT" B   Serial Port    COM2:"
1420 LOCATE ,25:PRINT" C   CRT Display    SCRN:";CHR$(10)
1430 LOCATE ,25:PRINT" D   Dial Smart Modem        (COM1:Time Check)"
1440 LOCATE ,25:PRINT" I   Impulse Dial Modem      (COM1:Time Check)"
1450 LOCATE ,25:PRINT" M   Change Printed Message  (Times: ";MID$(STR$(NUM),2);")";" (Col: ";COL$;")"
1460 LOCATE ,25:PRINT" R   Change Baud Rate       ";" (";BAUD$;")"
1470 LOCATE ,25:PRINT" S   Change Serial Handshake ";"(";SERIAL$;")"
1480 LOCATE ,25:PRINT" Q   Quit Program"
1490 LOCATE 24,1:COLOR 0,7:PRINT" KEY ";:COLOR 7,0:PRINT" Select Test";
1500 K$=INKEY$:IF MID$(K$,1,1)="1" THEN P$="LPT1:":GOTO 2130
1510 IF MID$(K$,1,1)="2" THEN P$="LPT2:":GOTO 2130
1520 IF MID$(K$,1,1)="3" THEN P$="LPT3:":GOTO 2130
1530 IF MID$(K$,1,1)="A" OR MID$(K$,1,1)="a" THEN S$="COM1:":GOTO 2180
1540 IF MID$(K$,1,1)="B" OR MID$(K$,1,1)="b" THEN S$="COM2:":GOTO 2180
1550 IF MID$(K$,1,1)="C" OR MID$(K$,1,1)="c" THEN 2240
1560 IF MID$(K$,1,1)="D" OR MID$(K$,1,1)="d" THEN X$="T":GOTO 2340
1570 IF MID$(K$,1,1)="I" OR MID$(K$,1,1)="i" THEN X$="P":GOTO 2340
1580 IF MID$(K$,1,1)="M" OR MID$(K$,1,1)="m" THEN 1640
1590 IF MID$(K$,1,1)="R" OR MID$(K$,1,1)="r" THEN 1860
1600 IF MID$(K$,1,1)="S" OR MID$(K$,1,1)="s" THEN 1750
1610 IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1630
1620 GOTO 1500
1630 CLS:LOCATE 23,1:PRINT"DONE";CHR$(10):KEY ON:SOUND 500,5:END
1640      REM: »» MESSAGE
1650 CLS:LOCATE 23,1:PRINT"REPEAT OUTPUT MESSAGE: (1 to 999 Times)";
1660 LOCATE 24,1:COLOR 0,7:PRINT" ENTER ";:COLOR 7,0:PRINT" 1 Time  ";
1670 COLOR 0,7:PRINT" NUMBER ";:COLOR 7,0:PRINT" Number of Times ";
1680 INPUT"",NUM2:IF NUM2=0 THEN NUM=1 ELSE NUM=NUM2
1690 IF NUM<1 OR NUM>999 THEN BEEP:GOTO 1650
1700 CLS:LOCATE 24,1:COLOR 0,7:PRINT" ENTER ";:COLOR 7,0:PRINT" 40 Column Message  ";
1710 COLOR 0,7:PRINT" 8 ";:COLOR 7,0:PRINT" 80 Column Message";
1720 K$=INKEY$:IF MID$(K$,1,1)="8" THEN C$=A$:D$=B$:COL$="80":GOTO 1350
1730 IF K$="" THEN 1720
1740 C$="":D$="":COL$="40":GOTO 1350
1750      REM: »» HANDSHAKE
1760 CLS:LOCATE 10,1:PRINT"SERIAL HANDSHAKE OPTIONS:"
1770 LOCATE 12,1:PRINT"EXAMPLE: ,N,8,1,CS1000,DS1000";CHR$(10)
1780 PRINT"This is for No parity, 8 data bits, 1 stop bit, Clear to Send with"
1790 PRINT"a 1 second timeout, Data Set ready with 1 second timeout"
1800 LOCATE 18,1:PRINT"Refer to OPEN COM Statement in Basic Manual Rev 1.10 for more detail"
1810 LOCATE 22,1:PRINT "CURRENT HANDSHAKE OPTIONS: ";SERIAL$
1820 PRINT "ENTER Desired Options:":PRINT"NOTE: ENTER for no change";:LOCATE 23,28
1830 LINE INPUT;"",SRL$:IF SRL$<>"" THEN SERIAL$=SRL$
1840 GOTO 1350
1850      REM: »» BAUD
1860 CLS:LOCATE 10,33:PRINT"B A U D   M E N U":LOCATE 11,29:PRINT STRING$(25,61)
1870 LOCATE 13,28:PRINT" 1   BAUD RATE = 75"
1880 LOCATE ,28:PRINT" 2   BAUD RATE = 110"
1890 LOCATE ,28:PRINT" 3   BAUD RATE = 150"
1900 LOCATE ,28:PRINT" 4   BAUD RATE = 300"
1910 LOCATE ,28:PRINT" 5   BAUD RATE = 600"
1920 LOCATE ,28:PRINT" 6   BAUD RATE = 1200"
1930 LOCATE ,28:PRINT" 7   BAUD RATE = 2400"
1940 LOCATE ,28:PRINT" 8   BAUD RATE = 4800"
1950 LOCATE ,28:PRINT" 9   BAUD RATE = 9600"
1970 LOCATE 24,1:COLOR 0,7:PRINT" SPACE  ";:COLOR 7,0:PRINT" Menu   ";
1971 COLOR 0,7:PRINT" SELECT BAUD RATE ";:COLOR 7,0
1980 K$=INKEY$
1990 IF MID$(K$,1,1)="1" THEN BAUD$="75":GOTO 1350
2000 IF MID$(K$,1,1)="2" THEN BAUD$="110":GOTO 1350
2010 IF MID$(K$,1,1)="3" THEN BAUD$="150":GOTO 1350
2020 IF MID$(K$,1,1)="4" THEN BAUD$="300":GOTO 1350
2030 IF MID$(K$,1,1)="5" THEN BAUD$="600":GOTO 1350
2040 IF MID$(K$,1,1)="6" THEN BAUD$="1200":GOTO 1350
2050 IF MID$(K$,1,1)="7" THEN BAUD$="2400":GOTO 1350
2060 IF MID$(K$,1,1)="8" THEN BAUD$="4800":GOTO 1350
2070 IF MID$(K$,1,1)="9" THEN BAUD$="9600":GOTO 1350
2082 IF MID$(K$,1,1)=CHR$(13) THEN 1350
2084 IF MID$(K$,1,1)=" " THEN 1350
2090 GOTO 1980
2100      REM: »» DATIME
2110 DATIME$=DATE$+"  "+LEFT$(TIME$,5):RETURN
2120      REM: »» PARALLEL
2130 CLS:LOCATE 23,1:PRINT"WAIT - Printing to ";P$;" - Press * to ABORT";:ON ERROR GOTO 2480
2140 OPEN P$ AS #1:GOSUB 2110
2150    FOR I=1 TO NUM:LOCATE 24,1:PRINT I;:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2170
2160 PRINT #1,"OUTPUT PORT: ";P$;"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2170 PRINT #1,CHR$(10):CLOSE #1:BEEP:GOTO 1340
2180      REM: »» SERIAL
2190 CLS:LOCATE 23,1:PRINT"WAIT - Printing to ";S$;" - Press * to ABORT";:ON ERROR GOTO 2480
2200 OPEN S$+BAUD$+SERIAL$ AS #1:GOSUB 2110
2210    FOR I=1 TO NUM:LOCATE 24,1:PRINT I;:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2230
2220 PRINT #1,"OUTPUT PORT: ";S$;"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2230 PRINT #1,CHR$(10):CLOSE #1:BEEP:GOTO 1340
2240      REM: »» CRT
2250 CLS:LOCATE 25,1:PRINT "WAIT - Press * to ABORT";
2260 LOCATE 21,1:ON ERROR GOTO 2480
2270 OPEN "SCRN:" FOR OUTPUT AS #1:GOSUB 2110
2280    FOR I=1 TO NUM:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2300
2290 PRINT #1,"OUTPUT PORT: ";"SCRN:";"  ";DATIME$:PRINT #1,A$:PRINT #1,B$:NEXT
2300 CLOSE #1
2310 LOCATE 25,1:PRINT CL$;:LOCATE 25,1:COLOR 0,7:PRINT" SPACE ";:COLOR 7,0:PRINT " To Continue";
2320 K$=INKEY$: IF K$="" THEN 2320
2330 GOTO 1340
2340      REM: »» SMART MODEM
2350 CLS:LOCATE 23,1:PRINT"WAIT - Dialing Smart Modem on COM1:";:ON ERROR GOTO 2480
2360 OPEN MODEM$ AS #1
2370 PRINT #1,"AT ";X$;" D";NUMBER$:CLOSE #1
2380 SECONDS=5:IF X$="P" THEN SECONDS=14
2390 GOSUB 2410:CLS:LOCATE 23,1:PRINT"WAIT 30 Seconds for Hang Up";
2400 SECONDS=30:GOSUB 2410:GOTO 1340
2410      REM: »» TIME
2420 TI$=TIME$:SEC1=VAL(MID$(T1$,7,2)): SEC=0
2430 K$=INKEY$:IF SEC=SECONDS THEN RETURN
2440 T2$=TIME$:SEC2=VAL(MID$(T2$,7,2)):IF SEC2<>SEC1 THEN SEC=SEC+1
2450 SEC1=SEC2:LOCATE 24,1:PRINT "TIME: ";SEC;:GOTO 2430
2460      REM: »» RETURN
2470 RETURN
2480      REM: »» ERROR
2490 CLS:LOCATE 21,1:BEEP:CLOSE #1
2500 PRINT"MENU SELECTION: ";"(";K$;")":PRINT "ERROR NUMBER:  ";ERR;CHR$(10):RESUME 1290
```

## CRL.BAS

```bas
10 'CRL.BAS by John R. Herzfeld, P. O. Box 159, Mercer Island, WA 98040
20 '
30 'BASIC program to create CRL.COM to change cursor shape in DOS. (If in
40 '  BASIC, use the LOCATE instruction.)  If you type CRL<enter> or CRL.COM
50 '  <enter>, you get its default shape, a cursor twice as thick as
60 '  the normal shape (start=10, end=13). If you want a different
70 '  shape, type CRL or CRL.COM, then a / or a space, then the decimal start
80 '  value, then any noncontrol alpha character (space ok) as separator,
90 '  then the decimal end value, followed by <enter>. If you omit the end
100 ' value, you'll get the default end value (13). The values to be used
110 ' are the same as for the LOCATE command in BASIC. For example, if you
120 ' have the monochrome display and type CRL 12 1<enter>, you will get a
130 ' two-line cursor at the bottom and another two-line cursor at the top.
140 ' The programmed default values are for the monochrome display; different
150 ' ones are needed with the color adapter. To
160 ' change the default values in the program, change the bytes in line 1020
170 ' AND in line 1040. On each line, the FIRST value is the END value, and
180 ' the SECOND value is the START value. The reversed positions are due
190 ' to the way the IBM PC stores data in memory. If you change a
200 ' default value, you must also recompute the checksum (the total of all
210 ' 102 byte values) and change it in line 1150.
220 'After you have created the CRL.COM file, you need this BASIC program
230 ' only as reference or to create additional files with other default
240 ' values. The program is very tolerant and ignores excess separator
250 ' characters or an excess number of value entries. CRL 12 1 and
260 ' CRL 12TTTgg00001x9y produce the same result.
270 '
300 DEFINT A-Z: FILENAME$= "CRL.COM"  'You may use another name!
320 PRINT "On which drive do you want the COM file? [RETURN = default drive]"
340 Q$=INPUT$(1): IF Q$=CHR$(13) THEN DRIVE$="" ELSE DRIVE$= Q$+":"
360 FILESPEC$= DRIVE$+ FILENAME$: CHECKSUM= 0
380 FOR I= 1 TO 102: READ N: CHECKSUM= CHECKSUM+ N: NEXT
400 READ N: IF N<>CHECKSUM THEN PRINT "ERROR - VERIFY DATA": STOP
420 'Last item in list is the sum of the 102 bytes to be put into the file
440 RESTORE: OPEN "R", 1, FILESPEC$, 1
460 FIELD 1, 1 AS N$: FOR I= 1 TO 102: READ N: LSET N$ = CHR$(N): PUT 1
480 NEXT: CLOSE: PRINT FILESPEC$ + " CREATED": END
1000 DATA &H31,&HC9,&H8A,&H0E,&H80,&H00,&H80,&HF1
1010 DATA &H00,&H75,&H0C,&HB8,&H00,&H01,&HB9
1020 DATA &H0D,&H0A
1030 DATA &HCD,&H10,&HCD,&H20
1040 DATA &H0D,&H0A
1050 DATA &HBF,&H16,&H01,&HBE,&H80,&H00,&HBA,&H0A,&H0A
1060 DATA &H31,&HC0,&H31,&HDB,&H46,&H8A,&H1C,&H80
1070 DATA &HEB,&H30,&H78,&H23,&H80,&HFB,&H0A,&H7D
1080 DATA &H1E,&HF6,&HE2,&H00,&HD8,&H88,&HDE,&HE2
1090 DATA &HE9,&H38,&HD6,&H74,&H03,&HE8,&H18,&H00
1100 DATA &H8A,&H2E,&H16,&H01,&H8A,&H0E,&H15,&H01
1110 DATA &HB8,&H00,&H01,&HCD,&H10,&HCD,&H20,&H38
1120 DATA &HD6,&H74,&HE4,&HE8,&H02,&H00,&HEB,&HDF
1130 DATA &H88,&H05,&H4F,&H81,&HFF,&H14,&H01,&H74
1140 DATA &HDF,&H31,&HC0,&H88,&HD6,&HC3
1150 DATA &H29E5
```

## CRS.BAS

```bas
20 'CRS.BAS by John R. Herzfeld, P. O. Box 159, Mercer Island, WA 98040
40 '
60 'Creates CRS.COM program which sets the cursor shape to four lines thick,
80 '  with start value 10, end value 13. At the DOS prompt, type CRS<enter>
100 ' to set the cursor shape. If you want a different shape, change the DATA
120 ' in lines 460 and 500, and also the checksum in line 560.
140 'If you have the graphics display, study the LOCATE statement in the
160 ' BASIC manual to get the correct values. You will need this program
180 ' only until you have created the .COM program.
200 DEFINT C, I, N: FILENAME$= "CRS.COM"  'You may use another name!
220 PRINT "On which drive do you want the COM file? [RETURN = default drive]"
240 Q$=INPUT$(1): IF Q$=CHR$(13) THEN DRIVE$="" ELSE DRIVE$= Q$+":"
260 FILESPEC$= DRIVE$+ FILENAME$: CHECKSUM= 0
280 FOR I=1 TO 10: READ N: CHECKSUM= CHECKSUM+ N
300 NEXT: READ N: IF N<>CHECKSUM THEN PRINT "ERROR - VERIFY DATA": STOP
320 RESTORE: OPEN "R", 1, FILESPEC$, 1
340 FIELD 1, 1 AS N$
360 FOR I=1 TO 10: READ N: LSET N$= CHR$(N): PUT 1
400 NEXT: CLOSE: PRINT FILESPEC$+ " CREATED": END
420 DATA &HB8, &H00, &H01, &HB9
440 'The next data line sets the ENDING scan line value - NOTE REVERSE ORDER
460 DATA &H0D
480 'The next data line sets the BEGINNING scan line value
500 DATA &H0A
520 DATA &HCD, &H10, &HCD, &H20
540 ' The value in line 560 is the sum of all the values in lines 420 - 520.
560 DATA &H353
```

## RESCMD.BAS

```bas
100 '
200 ' COMMAND.COM   MODIFICATION TRANSFER PROGRAM
300 '               "RESCMD.BAS"                   Last Update 11/26/82
400 '
350 '                                              John Chapman
351 '                                              CIS 70205,1217
500 'This program will read in an unmodified COMMAND.COM (Release 1.1)
600 '     and produce an output file called COMMAND.CMD.. which can be
700 '     renamed to COMMAND.COM.. This output file will contain all of 
800 '     the modifications to COMMAND.COM currently available from the
900 '     author. See COMMAND.DOC for complete list and limitations.
910 '
950 DEFINT A-Z
1000 BFIL$ = "COMMAND.COM"
1100 CFIL$ = "COMMAND.CMD"
1200 INPUT "Enter Drive where COMMAND.COM resides",DRV$
1210 BFIL$=DRV$+BFIL$
1220 CFIL$=DRV$+CFIL$
1230 '
1240 OPEN BFIL$ FOR INPUT AS #1:CLOSE #1
1250 OPEN BFIL$ AS #1 LEN=1
1260 V= VARPTR(#1)
1270 L0=PEEK(V)
1280 IF L0 <>4 THEN GOTO 5000
1290 L1=PEEK(V+17) + 256 * PEEK(V+18) 'FILESIZE IN BYTES
1300 LIMIT = L1: IF LIMIT>6800 THEN PRINT "file too large":GOTO 5000 :
2000 'check base and change files for random, size and
2100 ' equal length .. abort if not correct conditions
2200 PRINT "BASE    FILE SIZE = ",LIMIT
2300 READ T:PRINT "ORIGIN  FILE SIZE = ",T
3000 DIM BB%(6800)
3100 '
3200 FIELD #1,1 AS INB$
3300 '
3400 FOR I = 1 TO LIMIT
3410 GET #1,I
3420 BB%(I) = ASC(INB$)
3430 NEXT I
3431 CLOSE #1
3432 '
3440 READ BYTES:
3500 FOR I = 1 TO BYTES
3600 READ IKJ%,XOLD%,XNEW%
3700 IF BB%(IKJ%) <> XOLD% THEN GOTO 3950
3800 BB%(IKJ%) = XNEW%
3900 GOTO 4300
3950 PRINT "VERIFY REJECT AT ";IKJ%," (";XOLD%;" / ";XNEW%;") ":
4100 PRINT "TARGET FILE COMMAND.CMD UNUSABLE":
4200 END
4300 NEXT I
4500 '
4501 PRINT "last byte = ";IKJ%;" was ";XOLD%;" now ";XNEW%
4600 '
4610 OPEN CFIL$ FOR OUTPUT AS #2:CLOSE #2
4620 OPEN CFIL$ AS #2 LEN=1
4630 FIELD #2,1 AS INC$
4700 '
4710 FOR I = 1 TO LIMIT
4712 IF BB%(I)>255 THEN PRINT "FORMAT ERROR AT";I;" = ";BB%(I):
4720 LSET INC$ = CHR$(BB%(I))
4730 PUT #2,I
4740 NEXT I
4741 PRINT I;" Bytes Written to COMMAND.CMD"
4750 CLOSE #2
4760 '
4800 PRINT "File COMMAND.CMD Created .. Rename to Use"
4900 END
4990 ' ** DATA STATEMENT WRITE SUBROUTINE
4991 '
4999 DATA  4959,  34
5000 data  865, 70, 84, 868, 3, 79, 869, 1, 4
5010 DATA  870, 161, 5, 871, 2, 12, 872, 0, 1
5020 DATA  877, 163, 64, 878, 82, 163, 879, 4, 3
5030 DATA  880, 45, 1, 881, 12, 161, 882, 1, 2
5040 DATA  883, 144, 0, 885, 79, 82, 890, 232, 184
5050 DATA  1369, 140, 144, 1370, 200, 161, 1371, 43, 2
5060 DATA  1372, 6, 0, 1373, 159, 43, 1374, 15, 6
5070 DATA  1375, 186, 159, 1376, 16, 15, 1377, 0, 186
5080 DATA  1378, 247, 16, 1379, 226, 0, 1380, 11, 247
5090 DATA  1381, 210, 226, 1382, 116, 115, 4052, 140, 144
5100 DATA  4053, 200, 161, 4054, 5, 2, 4055, 192, 0
5110 DATA  4056, 0, 72
```

## ROMREAD.BAS

```bas
100 ' This program will print the copyright date,
110 ' ROM BIOS date, and machine type
120 ' Author:  Susan Glinert-Cole
130 '
140 PROG$ = "Signature V1.01 19Feb84"
150 CLS: KEY OFF: PRINT PROG$: PRINT
160 '
170 ' Part 1: Get copyright date
180 DEF SEG = &HFE00: A = 0: B = 30
190 PRINT "ROM location FE000:  ";
200 GOSUB 380
210 '
220 ' Part 2: Get ROM date
230 DEF SEG = &HFFFF: A = 5: B = 12
240 PRINT "ROM BIOS date is:    ";
250 GOSUB 380
260 '
270 ' Part 3: get the machine type, byte at FFFFEh
280 DEF SEG = &HFFFF
290 ID.BYTE = PEEK(&HE)
300 ID$ = ""
310 IF ID.BYTE = &HFF THEN ID$ = "PC"
320 IF ID.BYTE = &HFE THEN ID$ = "XT"
330 IF ID.BYTE = &HFD THEN ID$ = "PCjr"
340 PRINT "Machine type is:     ";
350 IF ID$ = "" THEN PRINT "Unknown.  Code is ";HEX$(ID.BYTE) ELSE PRINT "IBM ",ID$
360 END
380 P$=""
385 FOR X=A TO B
390 C$=CHR$(PEEK(X))
400  IF " " > C$ OR C$> "_" THEN C$= " "
410 P$=P$+C$
420 NEXT X
430 PRINT P$
440 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0183

     Volume in drive A has no label
     Directory of A:\

    BOARD    TST       640  11-27-83   5:41p
    CHECKOUT BAS      6272  12-12-82
    CMD99    COM      2367   2-09-82   5:37p
    COMPROM  EXE     27008  11-01-82   1:10p
    COMSPEC4 ASM      5504   1-01-84  12:08a
    COMSPEC4 COM       512   1-01-84   4:44a
    COMSPEC4 DOC      2944   1-01-84  12:16a
    CONFIG   EXE     24576   5-29-83  11:42a
    COPYROM  EXE     27392  11-01-82   1:10p
    CRL      BAS      3132   3-13-84  12:28a
    CRL      COM       102   3-13-84  12:33a
    CRS      BAS      1460   3-13-84  12:27a
    CRS      COM        10   3-13-84  12:31a
    INFO1    BAT      1408  11-01-82   1:10p
    MEM640   DOC      7040  12-11-83   4:28a
    MEM640   ZAP       896  12-11-83   4:26a
    MY-DATE  BAT       128  11-01-82   1:10p
    OLD-NEW  BAT       128
    RESCMD   BAS      3072  12-10-83   2:31a
    RESCMD   DOC      5120  12-10-83   2:28a
    ROMREAD  BAS       856   1-01-80  12:15a
    ROMREAD  DOC       512   4-30-84   9:00p
    VTYPE    DOC      2688   1-02-84   4:04a
    VTYPE    EXE     11776   1-04-84   2:14a
    XXX               1423   6-12-84   7:47p
    MOVE     DOC      1664   5-21-84   1:35a
    MOVE     COM      2138   5-03-84   1:17a
    CRC      TXT      1828  11-15-84   7:34a
    CRCK4    COM      1536  10-21-82   7:54p
           29 file(s)     144132 bytes
                           10240 bytes free
