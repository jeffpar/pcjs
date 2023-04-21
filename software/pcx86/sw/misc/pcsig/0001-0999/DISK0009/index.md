---
layout: page
title: "PC-SIG Diskette Library (Disk #9)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0009/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0009"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SQUISH"

    This disk is half BASIC subprograms and the rest are DOS file-handling
    programs.  The BASIC programs are all modules to be used in other
    programs for both programming ease and consistency.  These are nice,
    reuseable general purpose modules, like NUMVERT.BAS which displays
    numbers in ASCII, dec, oct, hex and binary.
    
    The other programs help with day to day computer activities.  LOOK and
    FIND search memory for certain bytes and strings.  SQUISH saves space
    by removing unwanted extra bytes from BASIC programs.   Other goodies
    include an autostart device, programs to shift you from monochrome to
    color graphics and back, and even a miniature modem package with file
    transfer capacity (MDM7I).
    
    System Requirements: 64K, one disk drive and monochrome display.
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM or .EXE, just type its name, i.e., for FF.BAT, type FF and
    press <ENTER>.  LOAD (filename).BAS and then type RUN to run the
    programs.
    
    File Descriptions:
    
    UPDATE   BAT  Program to copy updated BASIC programs
    PAYMENT  BAS  Computes payment for a fully amortized loan
    OPKEYS   BAS  Programs the Function Keys for BASIC programming
    AUTOEXEC BAT  Boots up BASICA and AUTOST from power ON Startup
    MDM7     DOC  This describes how the modem program is to be used
    REAL$    BAS  Displays and prints a table of Real Estate Appreciation
    STARTUP  BAT  Transfers DOS and BASICA from DOS Disk in B to Disk in A
    2COLOR   COM  Transfers to Color Graphics Adapter and Monitor from DOS
    !        BAT  Boots up BASICA and AUTOST from DOS
    ASCICHAR BAS  Display or Prints primary and alternate character sets
    PEEK     BAS  Peeks at a location in memory
    ASCII    BAS  A chart of ASCII Characters  (Decimal)
    NUMVERT  BAS  Displays numbers in ASCII, dec, oct, hex and binary
    LONGZONE BAS  Computes GMT (UCT) and local time for any longitude
    CRCK4    COM  This a file checksum program
    2MONO    SYS  Transfers to Monochrome Adapter and Monitor from BASICA
    MDMIBM   ASM  Part of MDM7I above
    2MONO    COM  Transfers to Monochrome Adaptor and Monitor from DOS
    TIME     BAS  Displays system date and time on the screen
    MODULO   BAS  Demonstrates Modulo Arithmetic
    Q        BAS  Returns to DOS with a clear screen and keys reset
    CHECKOUT BAS  Checks Serial and Parallel equipment & handshake
    AUTOST   BAS  Sets date and time, displays files and runs program
    WASH     DOC  This documents WASH.COM
    SQUISH   BAS  This program removes spaces, REM's and condenses lines
    SQUISH   DOC  Documentation for SQUISH program
    LOOK     COM  This is a memory byte search program
    WASH     COM  This is a disk maintenance program
    FIND     COM  This is a disk file string search program
    CRCK4    CPM  Part of CRCK4.COM
    MDM7I    COM  This is a MODEM and TERMINAL file transfer program
    MONOSET  BAS  Displays screen options for the monochrome monitor
    COLORSET BAS  Displays color options on a color monitor
    MENU     BAS  Runs AUTOST.BAS program
    AUTOINST BAS  Prints Autostart Program Instructions  (AUTOST.BAS)
    INDEX    DOC  This contains details on files on this disk
    DISKID   REV  Contains Disk ID Label and Year for AUTOST program
    MINIPROG BAS  A Skeleton BASIC program used to start a new program
    KEYSMP   BAS  Prints a Function Key OVERLAY for Multiplan programs
    2COLOR   SYS  Transfers to Color Graphics Adapt and Monitor from BASICA
    KEYSBAS  BAS  Programs Function keys for BASIC and prints OVERLAY
    AUTOPEEK BAS  Displays 10 locations of memory in dec or hex
    SYS      BAS  Returns to DOS with a clear screen and keys reset
    ACATALOG BAS  A catalog of the programs on this disk  (Items 1-31)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACATALOG.BAS

{% raw %}
```bas
1000 PROG1$="        A C A T A L O G        "
1010 REV$ = "          Rev: 830122          "
1020 ID$  = "      By  Robert Hamilton      "
1030 NOTE$= "NOTE: This is a catalog of programs on this disk:
1040 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS
1050 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1060 DEF SEG=64:POKE 23,128:DEF SEG:ON ERROR GOTO 1310
1070 OPTION BASE 1:CL$=STRING$(79,0):UP$=STRING$(1,30):Q$=CHR$(34)
1080 DIM A$(112):DEFINT I
1090 KEY 1,CHR$(27)+"CLS:LIST ":KEY 2,CHR$(27)+"RUN"+CHR$(7)
1100 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13)
1110 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY (I) ON:NEXT '   Turns Keys Off, Basica
1120      REM: »» TITLE
1130 CLS:LOCATE 4,25:COLOR 2,0:PRINT CHR$(213)+STRING$(31,205)+CHR$(184):PFLAG=0:RESTORE
1140 PRINT TAB(25);CHR$(179);:COLOR 6,0:PRINT PROG1$;:COLOR 2,0:PRINT CHR$(179)
1150 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1160 PRINT TAB(25);CHR$(179)+REV$;CHR$(179)
1170 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1180 PRINT CHR$(10);TAB(25);ID$;    '                              Name Option
1190 LOCATE 20,1:COLOR 6,0:PRINT NOTE$;   '                        Note Option
1200 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" For CRT Report   ";
1210 COLOR 0,7:PRINT" P ";:COLOR 5,0:PRINT" For Printer Report   ";
1220 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" To Quit ";:COLOR 6,0:SOUND 500,6
1230 K$=INKEY$
1240 IF MID$(K$,1,1)="p" OR MID$(K$,1,1)="P" THEN PFLAG=1
1250 IF MID$(K$,1,1)="q" OR MID$(K$,1,1)="Q" THEN 1280
1260 IF K$="" THEN 1230
1270 GOTO 1330
1280 ' Cls:Locate 24,1:System:End '             Remove first ' To Return To DOS
1290 CLS:LOCATE 20,1:COLOR 6,0:PRINT"DONE";CHR$(10):KEY ON:SOUND 200,6:END
1300 IF ERR=24 OR ERR=25 OR ERR=27 THEN BEEP:CLOSE #1:LOCATE 23,1:COLOR 12,0:PRINT"CHECK PRINTER";:GOSUB 1940:RESUME 1800
1310 SOUND 600,5:PRINT CHR$(10):COLOR 6,0:CLS:LOCATE 22,1:ON ERROR GOTO 0:END
1320 '
1330     REM: »» DATA
1340 'REM "FILENAME.ext  DESCRIPTION
1350 DATA "ACATALOG.bas  A Catalog of the programs on this disk
1360 DATA "ASCICHAR.bas  Display or Prints primary and alternate charater sets
1370 DATA "ASCII   .bas  A chart of ASCII Characters (Decimal)
1380 DATA "AUTOINST.bas  Prints Autostart Program Instructions (AUTOST.bas)
1390 DATA "AUTOPEEK.bas  Displays 10 locations of memory in Dec or Hex
1400 DATA "AUTOST  .bas  Sets Date & Time, Displays Files & Runs program
1410 DATA "CHECKOUT.bas  Checks Serial & Parallel equipment & handshake
1420 DATA "COLORSET.bas  Displays color options on a color monitor
1430 DATA "KEYSBAS .bas  Programs Function keys for Basic and Prints Overlay
1440 DATA "KEYSMP  .bas  Prints a Function Key Overlay for Multiplan Program
1450 DATA "LONGZONE.bas  Computes GMT (UCT) and Local Time for any longitude
1460 DATA "MENU    .bas  Runs AUTOST.bas program
1470 DATA "MINIPROG.bas  A skeletin Basic Program used to start a new program
1480 DATA "MODULO  .bas  Demonstrates Modulo Arithemetic
1490 DATA "MONOSET .bas  Displays screen options for the Monochrome Monitor
1500 DATA "NUMVERT .bas  Displays numbers in ASCII, DEC, OCT, HEX, and BINARY
1510 DATA "OPKEYS  .bas  Programs the Function Keys for basic programming
1520 DATA "PAYMENT .bas  Computes Payment for a fully amortized loan
1530 DATA "PEEK    .bas  Peeks at a location in memory
1540 DATA "Q       .bas  Returns to DOS with clear screen and keys reset
1550 DATA "REAL$   .bas  Displays and Prints a table of Real Estate Appreciation
1560 DATA "SYS     .bas  Returns to DOS with clear screen and keys reset
1570 DATA "TIME    .bas  Displays System Date and Time on the screen
1580 DATA "!       .bat  Boots up Basica and Autost from DOS
1590 DATA "AUTOEXEC.bat  Boots up Basica and Autost from Power ON Startup
1600 DATA "STARTUP .bat  Transfers DOS and Basica from DOS Disk in B to Disk in Drive A
1610 DATA "2COLOR  .com  Transfers to Color Graphics Adaptor and Monitor from DOS
1620 DATA "2MONO   .com  Transfers to Monochrome Adaptor and Monitor from DOS
1630 DATA "DISKID  .rev  Contains Disk ID Label and Year for AUTOST program
1640 DATA "2COLOR  .sys  Transfers to Color Graphics Adaptor and Monitor from Basica
1650 DATA "2MONO   .sys  Transfers to Monochrome Adaptor and Monitor from Basica
1660 DATA ""
1670 DATA "NOTE: The above programs will run with 64 Kb RAM and an 80 Column Monitor"
1680 DATA ""
1690 DATA "NOTE: To transfer DOS and Basica to this disk,  go to DOS with  A>  showing on        screen.  Place this disk in Drive A.  Place a disk with DOS and Basica in       Drive B.  Type STARTUP  and  press ENTER."
1700 DATA "End"
1710 '
1720      REM: »» REPORT
1730      B$="                            CATALOG  OF  PROGRAMS"
1740      C$="NAME          DESCRIPTION"
1750      D$="========.===  ================================================================"
1760 ON ERROR GOTO 2050
1770 FOR I=1 TO 112: READ A$(I):NEXT
1780 ON ERROR GOTO 1300:IF PFLAG=1 THEN GOSUB 1930
1790 IF PFLAG<>1 THEN OPEN "SCRN:" FOR OUTPUT AS #1
1800 IF PFLAG=1 THEN OPEN "LPT1:" FOR OUTPUT AS #1
1810 IF PFLAG=1 THEN GOSUB 2030:GOTO 1830
1820 GOSUB 2020
1830 FOR I = 1 TO FIN:IF I/20=I\20 AND PFLAG<>1 THEN GOSUB 1980:GOSUB 2020
1840 IF PFLAG=1 AND I/57=I\57 THEN PRINT #1,CHR$(12);:GOSUB 2030
1850 PRINT #1,A$(I)
1860 NEXT
1870 IF PFLAG=1 THEN PRINT #1,CHR$(12);
1880 CLOSE #1:GOSUB 1960
1890 K$=INKEY$
1900 IF MID$(K$,1,1)="q" OR MID$(K$,1,1)="Q" THEN 1280
1910 IF K$="" THEN 1890
1920 GOTO 1130
1930 CLS
1940 LOCATE 25,1:COLOR 12,0:PRINT"Turn Matrix Printer ON and ENTER to Continue";
1950 COLOR 6,0:INPUT;"",ZZ$:CLS:LOCATE 25,1:PRINT"WAIT - PRINTING";:RETURN
1960 LOCATE 25,1:PRINT CL$;:LOCATE ,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" To Continue   ";
1970 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" To Quit ";:COLOR 6,0:RETURN
1980 GOSUB 1960
1990 K$=INKEY$:IF MID$(K$,1,1)="q" OR MID$(K$,1,1)="Q" THEN 1280
2000 IF K$="" THEN 1990
2010 CLS:RETURN
2020 CLS:LOCATE 1,1:COLOR 6,0:PRINT #1,C$;CHR$(10);D$;CHR$(10):RETURN
2030 PRINT #1,CHR$(10);B$;CHR$(10)
2040 PRINT #1,C$;D$;CHR$(10):RETURN
2050 FIN=I:RESUME 1780
2060 END
```
{% endraw %}

## ASCICHAR.BAS

{% raw %}
```bas
1000 '"ASCICHAR" Displays or prints ascii characters
1010 ' By Robert Hamilton
1020 PROG1$="        A S C I C H A R        "
1025 REV$ = "          Rev: 830120          "
1030 PROG2$="      By Hamilton Company      "
1040 PROG3$="                               "
1050 PROG4$="NOTE: ASCICHAR displays printable ASCII characters on screen or printer"
1052 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1053 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1054 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1090      REM: »» KEYS
1100 CL$=STRING$(79,0):Q$=CHR$(34):UP$=STRING$(1,30)
1110 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY(I) ON:NEXT
1120 KEY OFF: KEY 1,CHR$(27)+"CLS:LIST  "
1130 KEY 2,CHR$(27)+"RUN  "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1140 KEY 4,CHR$(27)+"SAVE"+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+"GOTO 1000"
1150 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1160 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"
1170 ON ERROR GOTO 1430
1180      REM: »» TITLE
1190 CLS:LOCATE 3,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1200 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1210 PRINT TAB(25);CHR$(179)+PROG1$;CHR$(179)
1220 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1230 PRINT TAB(25);CHR$(179);REV$;CHR$(179)
1240 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1250 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1260 PRINT CHR$(10);TAB(26);PROG2$
1270 PRINT TAB(26);PROG3$
1280 COLOR 6,0:LOCATE 20,1:PRINT PROG4$;
1290 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" Display on Screen   ";
1300 COLOR 0,7:PRINT" P ";:COLOR 5,0:PRINT" Print on Matrix Printer   ";
1310 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" Quit Program ";:COLOR 6,0
1320 K$=INKEY$:IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1390
1330 IF MID$(K$,1,1)=CHR$(32) OR MID$(K$,1,1)=CHR$(13) THEN OPEN "SCRN:" FOR OUTPUT AS #1:PRINTER=0:GOSUB 1370:GOTO 1450
1340 IF MID$(K$,1,1)="P" OR MID$(K$,1,1)="p" THEN OPEN "LPT1:" FOR OUTPUT AS #1:PRINTER=1:GOSUB 1360:GOTO 1450
1350 GOTO 1320
1360 CLS:LOCATE 23,1:COLOR 6,0:PRINT"WAIT - Printing";:PRINT #1,CHR$(10):RETURN
1370 CLS:COLOR 6,0:LOCATE 1,1:RETURN
1380    REM »» EXIT
1390 CLS:LOCATE 23,1:COLOR 6,0:PRINT"DONE";CHR$(10):KEY ON:BEEP:END
1400 CLS:LOCATE 24,1:COLOR 6,0:PRINT"WAIT - Loading ";Q$;"MEMU";Q$;:CHAIN"AUTOST.bas",1000:END
1410    REM »» RETURN
1420 RETURN
1430    REM »» ERROR
1440 CLS:BEEP:LOCATE 23,1:COLOR 6,0:PRINT"ERROR: ";:KEY ON:ON ERROR GOTO 0
1450    REM »» START Program
1460 KEY OFF: K=-1: L=0
1470 PRINT #1, SPC(35);"ASCII  CHART";CHR$(10)
1480 PRINT #1,"KEYBOARD:";SPC(1);
1490 FOR J=1 TO 2: START=32:IF J=2 THEN START=160
1500 FOR I=START TO START+94 : K=K+1
1510 IF K=20 THEN K=0:PRINT #1,CHR$(10):PRINT #1,SPC(10);
1520 PRINT #1,SPC(2);CHR$(I);
1530 NEXT:K=-1:PRINT #1,CHR$(10):IF J=1 THEN PRINT #1,"ALTERNATE:";
1540 NEXT
1550 IF PRINTER=1 THEN CLS:LOCATE 20,1:COLOR 6,0:PRINT"DONE":PRINT #1,CHR$(12);
1560 CLOSE #1:END
```
{% endraw %}

## ASCII.BAS

{% raw %}
```bas
1000 '"ASCII" displays characters in ascii order
1010 'REV:830120  By Robert Hamilton
1020 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:K=-1:L=0
1030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1040 CL$=STRING$(79,0):Q$=CHR$(34):DEF SEG=64:POKE 23,128:DEF SEG
1050 CLS:LOCATE 2,1:PRINT TAB(35);"ASCII  CHART";CHR$(10):COLOR 6,0
1060 FOR I=0 TO 255: K=K+1: IF I=0 AND K=0 THEN PRINT "   0";
1070 IF K=25 THEN K=0:PRINT CHR$(10):L=L+25:L$=STR$(L):IF L<100 THEN L$=" "+L$
1080 IF K=0 THEN PRINT L$;
1090 IF I=8 THEN PRINT SPC(1);
1100 IF I=28 THEN PRINT SPC(4);
1110 IF I>8 AND I<14 THEN PRINT SPC(3);:GOTO 1130
1120 PRINT SPC(2);CHR$(I);
1130 NEXT:COLOR 10,0:LOCATE,60:PRINT "SPACE to Continue ";
1140 K$=INKEY$:IF K$="" THEN 1140
1150 COLOR 6,0:KEY ON:END
```
{% endraw %}

## AUTOINST.BAS

{% raw %}
```bas
1000 PROG1$="A U T O I N S T"
1010 REV$ = "  Rev: 830122  "'By Robert Hamilton
1020 NOTE$="This program will print a copy of the AUTOST Instructions on (LPT1:)"
1030 SCREEN 0,0,0:WIDTH 80:CLS:COLOR 6,0,0
1040 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK(&H410)=109 THEN LOCATE ,,,6,7
1050 DEF SEG=64:POKE 23,128:DEF SEG:ON ERROR GOTO 1160:KEY OFF
1060     REM: »» START
1070 CLS:LOCATE 5,30:PRINT PROG1$:LOCATE 7,30:PRINT REV$
1080 LOCATE 20,1:PRINT NOTE$
1090 LOCATE 25,1:COLOR 0,7:PRINT " SPACE ";:COLOR 6,0:PRINT " To Quit  ";
1100 COLOR 0,7:PRINT " P ";:COLOR 6,0:PRINT " To Print Instructions";
1110 K$=INKEY$: IF MID$(K$,1,1)=CHR$(13) OR MID$(K$,1,1)=" " THEN 1150
1120 IF MID$(K$,1,1)="P" OR MID$(K$,1,1)="p" THEN 1140
1130 GOTO 1110
1140 GOSUB 1180
1150 CLS:LOCATE 20,1:BEEP:PRINT "DONE";CHR$(10):KEY ON:END
1160 CLS:LOCATE 20,1:BEEP:KEY ON:ON ERROR GOTO 0:END
1170     REM: »» PRINT INSTRUCTIONS
1180 CLS:LOCATE 23,1:PRINT"WAIT - Printing";
1190 LPRINT CHR$(27)+CHR$(69)
1200 LPRINT "           AUTOSTART  PROGRAM  OPTIONS";CHR$(27)+CHR$(70)
1210 LPRINT ""
1220 LPRINT "1.    To run a program, type in a File Name shown"
1230 LPRINT "in the Directory and ENTER."
1240 LPRINT ""
1250 LPRINT "2.    To Quit the Autostart program and go to to"
1260 LPRINT "the DOS (Disk Operating System), PRESS Q and ENTER"
1270 LPRINT ""
1280 LPRINT "3.    To get a directory of Drive A,  ENTER."
1290 LPRINT "To get a directory of Drive B, PRESS ?B and ENTER."
1300 LPRINT ""
1310 LPRINT "4.    To go to the Command Mode in Basica (To"
1320 LPRINT "write your own program), PRESS ! and ENTER"
1330 LPRINT ""
1340 LPRINT "5.    To change the magnetic DISK ID label (Disk"
1350 LPRINT "Identification), PRESS | and ENTER"
1360 LPRINT ""
1370 LPRINT CHR$(27)+CHR$(69);
1380 LPRINT "      RETURNING TO AUTOSTART FROM A PROGRAM";CHR$(27)+CHR$(70)
1390 LPRINT ""
1400 LPRINT "1.    To STOP or BREAK a program in Basic, PRESS"
1410 LPRINT "CTRL and SCROLL LOCK (BREAK) together.  The"
1420 LPRINT "screen will prompt `Break in Line XXXX', OK."
1430 LPRINT "The OK is the prompt for the Command Mode in Basic."
1440 LPRINT ""
1450 LPRINT "      To return to Autostart from Basic, PRESS the"
1460 LPRINT "(F10) Key and ENTER or type RUN ";CHR$(34);"AUTOST";CHR$(34);" and ENTER.";CHR$(10);CHR$(10)
1470 LPRINT "NOTE: To place instructions in diskette jackette, cut to 5.25 wide x 4.50 high"
1480 PR$=STRING$(35,10):LPRINT PR$:RETURN
1490 END
```
{% endraw %}

## AUTOPEEK.BAS

{% raw %}
```bas
1000 NM$="A U T O P E E K"' A program to peek at a location in memory
1010 REV$="Rev: 830120"'By Robert Hamilton
1020 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1040 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1050 CLS:LOCATE 5,31:PRINT NM$;CHR$(10);TAB(33);REV$:DEF SEG=64:POKE 23,32
1060 LOCATE 15,5:COLOR 6,0:PRINT "This Program will peek at an input starting segment and offset location.";CHR$(10):ON ERROR GOTO 1190
1070 PRINT TAB(5);"Memory Address may be Decimal, Hexidecimal or Octal.":LOCATE 20,1
1080 COLOR 10,0:INPUT"ENTER  Starting Segment       (-9 to Quit) ===> ",S
1090 IF S<0 THEN 1190
1100 DEF SEG=S:N=15
1110 COLOR 10,0:INPUT"ENTER  Starting Offset        (-9 to Quit) ===> ",H
1120 IF H<0 THEN 1190
1130 COLOR 6,0:PRINT CHR$(10);"Starting Segment =";S;SPC(3);"OFFSET =";H;"+"
1140 COLOR 4,0:PRINT "OFFSET"," DEC","HEX":COLOR 6,0
1150 FOR I=0 TO N:X=PEEK(I+H)
1160 PRINT I,X,HEX$(X)
1170 NEXT:PRINT CHR$(10)
1180 GOTO 1110
1190 DEF SEG=64:POKE 23,0:SOUND 500,5
1200 COLOR 6,0:ON ERROR GOTO 0:END
```
{% endraw %}

## AUTOST.BAS

{% raw %}
```bas
1000 '"AUTOST" Loads keys, Sets Date & Time if not set by battery clock,
1010 'Displays Disk ID & File Directory and RUNS Program
1020 PROG1$="       A U T O S T A R T       "' BY Robert H. Hamilton
1030 REV$ = "          Rev: 830120          "
1040 YR$="1983":DISKID$="":SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0
1050 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1060 CL$=STRING$(79,0):Q$=CHR$(34):DEF SEG=64:POKE 23,128:DEF SEG:GOTO 1220
1070      REM: »» KEYS
1080 KEY OFF: KEY 1,CHR$(27)+"CLS:LIST  "
1090 KEY 2,CHR$(27)+"RUN "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1100 KEY 4,CHR$(27)+"SAVE "+CHR$(34): KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34): KEY 6,CHR$(27)+"GOTO 1000"
1110 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1120 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13) : KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"+CHR$(7)
1130 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY(I) ON:NEXT  'Optional, Requires Basica
1140      REM: »» TITLE
1150 CLS:LOCATE 1,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1160 PRINT TAB(25);CHR$(179);:COLOR 6,0:PRINT PROG1$;:COLOR 2,0:PRINT CHR$(179)
1170 IF DRIVE=1 THEN PRINT "DIRECTORY: Disk B";TAB(25);CHR$(179)+REV$;CHR$(179);TAB(62);"DATE: ";DATE$:GOTO 1190
1180 PRINT "DIRECTORY: Disk A";TAB(25);CHR$(179)+REV$;CHR$(179);TAB(62);"DATE: ";DATE$
1190 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190);TAB(62);"TIME: ";LEFT$(TIME$,5);SPC(2);MID$(TIME$,6,3)
1200 RETURN
1210      REM: »» START program
1220 GOSUB 1080:GOSUB 1780: IF RIGHT$(DATE$,2)<"82" THEN GOSUB 1990:GOSUB 1080
1230 ON ERROR GOTO 1900
1240  LOCATE 5,1,1:PRINT "DISK ID:   ";DISKID$:COLOR 10,0
1250 DL$="File====.Ext ":PRINT DL$;DL$;DL$;DL$;DL$;DL$:COLOR 6,0
1260 IF DRIVE=1 THEN FILES"B:*.*":GOTO 1280
1270 FILES "*.*"
1280 LOCATE 25,1
1290 COLOR 0,7 :PRINT " FILENAME "; : COLOR 5,0 :PRINT " to Run  ";
1300 COLOR 0,7 :PRINT " ENTER ";:COLOR 5,0: PRINT " Dir A  ";
1310 COLOR 0,7 :PRINT " ?B ";:COLOR 5,0: PRINT " Dir B  ";
1320 COLOR 0,7 :PRINT " ! "; :COLOR 5,0 :PRINT " Basic  ";
1330 COLOR 0,7 :PRINT " | "; :COLOR 5,0 :PRINT " Disk ID  ";
1340 COLOR 0,7 :PRINT " Q "; :COLOR 5,0 :PRINT " DOS";
1350 IF ERFLAG=1 THEN LOCATE 23,5:COLOR 12,0:PRINT Q$;FILE$;Q$;"  is Not A Basic Program";
1360 LOCATE 24,1:COLOR 10,0:PRINT "RUN ";CHR$(34);"        .BAS";CHR$(34);:LOCATE 24,6
1370 COLOR 6,0:INPUT"",FILE$: COLOR 6,0:ERFLAG=0:DRIVE=0:DR$="Drive A "
1380 IF FILE$="" THEN 1000
1390 UPC$=FILE$:GOSUB 2470:FILE$=UPC$
1400 IF LEFT$(FILE$,2)="B:" THEN DR$="Drive B "
1410 IF FILE$="?" OR FILE$="?A" OR FILE$="?A:" THEN 1000
1420 IF FILE$="?B" OR FILE$="?B:" THEN DRIVE=1:DR$="Drive B ":GOTO 1000
1430 IF INSTR(FILE$,"?")<>0 THEN ERFLAG=1:GOTO 1000
1440 IF INSTR(FILE$,".EXE")<>0 THEN ERFLAG=1:GOTO 1000
1450 IF INSTR(FILE$,".COM")<>0 THEN ERFLAG=1:GOTO 1000
1460 IF INSTR(FILE$,".BAT")<>0 THEN ERFLAG=1:GOTO 1000
1470 IF INSTR(FILE$,".DOC")<>0 THEN ERFLAG=1:GOTO 1000
1480 IF INSTR(FILE$,".REV")<>0 THEN ERFLAG=1:GOTO 1000
1490 DEC=INSTR(FILE$,".")
1500 IF FILE$="|" THEN 1570
1510 IF FILE$="!" THEN 1960
1520 IF FILE$="Q" THEN COLOR 6,0:CLS:LOCATE 24,1:SYSTEM
1530 IF DEC=0 THEN FILE$=FILE$+".BAS"
1540 ON ERROR GOTO 1880
1550 CLS:LOCATE 25,1:PRINT"WAIT - Loading ";CHR$(34);FILE$;CHR$(34)
1560 LOAD FILE$,R: END
1570      REM: »» EDIT DISK ID
1580 CLS:LOCATE 25,1
1590 COLOR 0,7:PRINT" ENTER ";:COLOR 5,0:PRINT" To accept description   ";
1600 COLOR 0,7:PRINT" DESCRIPTION ";:COLOR 5,0:PRINT" For new data   ";
1610 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" To Abort";
1620 LOCATE 17,1:COLOR 6,0:PRINT"DISK A:":ON ERROR GOTO 1730 :GOSUB 1790:LOCATE 19,1
1630 PRINT "DISK ID: ";DISKID$:COLOR 5,0:PRINT "Change:  ";:LOCATE ,10:LINE INPUT"",DSK$
1640 IF LEN(DSK$)>66 THEN BEEP:PRINT"Disk ID too long";CHR$(10): GOTO 1630
1650 IF DSK$<>"" THEN DISKID$=DSK$
1660 IF DSK$="q" OR DSK$="Q" THEN 1000
1670 COLOR 6,0:PRINT CHR$(10);"YEAR:    ";YEAR$:COLOR 5,0:PRINT"Change:  " ;:INPUT"",Y$: IF Y$="" THEN 1710
1680 IF Y$="q" OR Y$="Q" THEN 1000
1690 IF VAL(Y$)<1983 OR VAL(Y$)>1999 OR LEN(Y$)>4 THEN BEEP: GOTO 1670
1700 YEAR$=Y$
1710 OPEN "diskid.rev" FOR OUTPUT AS #1
1720 PRINT #1,DISKID$: PRINT#1,YEAR$:CLOSE #1:GOTO 1000
1730 IF ERR=52 OR ERR=53 THEN RESUME 1630
1740 IF ERR=70  THEN RESUME 1940
1750 IF ERR=71  THEN RESUME 1950
1760 COLOR 12,0:CLS:LOCATE 23,1:KEY ON:COLOR 6,0:ON ERROR GOTO 0
1770      REM: »» READ DISK ID
1780 ON ERROR GOTO 1830
1790 IF DRIVE=1 THEN DISKID$="":OPEN "B:diskid.rev" FOR INPUT AS #1:GOTO 1810
1800 DISKID$="":OPEN "diskid.rev" FOR INPUT AS #1
1810 LINE INPUT#1,DISKID$:INPUT #1,YEAR$:CLOSE #1
1820 RETURN
1830 IF ERR=62 THEN RESUME NEXT
1840 IF ERR=53 THEN RESUME 1820
1850 IF ERR=70 THEN RESUME 1940
1860 IF ERR=71 THEN RESUME 1950
1870 COLOR 12,0:CLS:LOCATE 23,1:KEY ON:BEEP:COLOR 6,0:ON ERROR GOTO 0
1880      REM: »» ERROR out
1890 IF ERR=52 OR ERR=53 OR ERR=64 OR ERR=66 THEN ERFLAG=1:RESUME 1000
1900 IF ERR=53 OR ERR=64 THEN RESUME NEXT
1910 IF ERR=70 THEN RESUME 1940
1920 IF ERR=71 THEN RESUME 1950
1930 COLOR 12,0:CLS:LOCATE 24,1:KEY ON:BEEP:COLOR 6,0:ON ERROR GOTO 0: END
1940 COLOR 12,0:CLS:LOCATE 21,1:BEEP:PRINT"Disk is Write Protected:  ENTER to Continue";:INPUT;"",ZZ$:RUN
1950 COLOR 12,0:CLS:LOCATE 21,1:BEEP:PRINT DR$;"Not Ready: Correct and  ENTER to Continue";:INPUT;"",ZZ$:RUN
1960      REM: »» CLEAR
1970 COLOR 12,0:CLS:LOCATE 21,1:PRINT"NOTE: Enter NEW before writing a new program":KEY ON:COLOR 6,0:END
1980      REM: »» SET Date and Time
1990 CLR$=STRING$(79,0):IF YEAR$="" THEN YEAR$=YR$
2000 MO$="":DAY$="":HR$="":MIN$="":DAT$="":TM$=""
2010 LOCATE 23,1:PRINT CLR$;:LOCATE 23,1:ON ERROR GOTO 2440:AM=0:PM=0
2020 COLOR 0,7:PRINT" ENTER ";:COLOR 5,0:PRINT" Month No, Day and Time (Mo Da Time) am/pm or 24 hour";
2030 BEEP:LOCATE 24,1:PRINT CLR$;:LOCATE 24,1:COLOR 6,0:PRINT "Example: 3-15-230p";TAB(33);:COLOR 12,0::LINE INPUT;"",DT$:COLOR 6,0:IF DT$="" THEN 2450
2040 IF RIGHT$(DT$,1)=" " OR RIGHT$(DT$,1)="." THEN DT$=MID$(DT$,1,LEN(DT$)-1):GOTO 2040 'Right trim
2050 IF RIGHT$(DT$,1)="p" OR RIGHT$(DT$,1)="P" THEN PM=1
2060 IF MID$(DT$,LEN(DT$)-1,1)="p" OR MID$(DT$,LEN(DT$)-1,1)="P" THEN PM=1
2070 IF MID$(DT$,LEN(DT$)-2,1)="p" OR MID$(DT$,LEN(DT$)-2,1)="P" THEN PM=1
2080 IF RIGHT$(DT$,1)="a" OR RIGHT$(DT$,1)="A" THEN AM=1
2090 IF MID$(DT$,LEN(DT$)-1,1)="a" OR MID$(DT$,LEN(DT$)-1,1)="A" THEN AM=1
2100 IF MID$(DT$,LEN(DT$)-2,1)="a" OR MID$(DT$,LEN(DT$)-2,1)="A" THEN AM=1
2110 FOR I=1 TO LEN(DT$)
2120 IF MID$(DT$,I,1)="" THEN 2150
2130 IF ASC(MID$(DT$,I,1))<48 OR ASC(MID$(DT$,I,1))>57 THEN MID$(DT$,I,1)=" "
2140 NEXT
2150 IF ASC(DT$)<48 OR ASC(DT$)>57 THEN DT$=MID$(DT$,2): GOTO 2150 'Left trim
2160 MO$=LEFT$(DT$,1): IF LEN(DT$)=1 THEN 2450
2170 IF ASC(MID$(DT$,2,1))>47 AND ASC(MID$(DT$,2,1))<58 THEN MO$=MID$(DT$,1,2)
2180 DT$=MID$(DT$,LEN(MO$)+1)
2190 IF ASC(DT$)<48 OR ASC(DT$)>57 THEN DT$=MID$(DT$,2): GOTO 2190 'Left trim
2200 DAY$=LEFT$(DT$,1): IF LEN(DT$)=1 THEN 2440
2210 IF ASC(MID$(DT$,2,1))>47 AND ASC(MID$(DT$,2,1))<58 THEN DAY$=MID$(DT$,1,2)
2220 DT$=MID$(DT$,LEN(DAY$)+1)
2230 IF ASC(DT$)<48 OR ASC(DT$)>57 THEN DT$=MID$(DT$,2): GOTO 2230 'Left trim
2240 IF ASC(RIGHT$(DT$,1))<48 OR ASC(RIGHT$(DT$,1))>57 THEN DT$=MID$(DT$,1,LEN(DT$)-1):GOTO 2230 'Right trim
2250 IF LEN(DT$)<3 THEN 2440
2260 FOR I=1 TO LEN(DT$)
2270 IF MID$(DT$,I,1)="" THEN 2300
2280 IF ASC(MID$(DT$,I,1))<48 OR ASC(MID$(DT$,I,1))>57 THEN DT$=MID$(DT$,1,I-1)+MID$(DT$,I+1)
2290 NEXT:IF LEN(DT$)<3 THEN 2450
2300 HR$=MID$(DT$,1,LEN(DT$)-2):MIN$=RIGHT$(DT$,2)
2310 IF PM=1 AND VAL(HR$)<12 THEN HR$=STR$(VAL(HR$)+12)
2320 IF PM=1 AND VAL(HR$)=12 AND VAL(MIN$)=0 THEN HR$="00"
2330 IF VAL(HR$)=24 AND VAL(MIN$)=0 THEN HR$="00"
2340 IF AM=1 AND VAL(HR$)=12 AND VAL(MIN$)>0 THEN HR$="00"
2350 IF ASC(HR$)<48 OR ASC(HR$)>57 THEN HR$=MID$(HR$,2): GOTO 2350 'Left trim
2360 IF VAL(DAY$)<1 OR VAL(DAY$)>31 THEN 2450
2370 IF VAL(MO$)<1 OR VAL(MO$)>12 THEN 2450
2380 IF VAL(HR$)<0 OR VAL(HR$)>24 THEN 2450
2390 IF VAL(MIN$)<0 OR VAL(MIN$)>59 THEN 2450
2400 IF VAL(HR$)*100+VAL(MIN$)>2400 THEN 2450
2410 DAT$=MO$+"-"+DAY$+"-"+YEAR$
2420 TM$=HR$+":"+MIN$
2430 DATE$=DAT$:TIME$=TM$: RETURN
2440 RESUME 2450
2450 LOCATE 21,1:PRINT CLR$;:LOCATE 21,1:COLOR 12,0:PRINT"ERROR: Please enter again";: GOTO 2010
2460 END
2470      REM:  »» UPPERCASE
2480   FOR I=1 TO 30:IF MID$(UPC$,I,1)="" THEN RETURN
2490   UPC=ASC(MID$(UPC$,I,1))
2500   IF UPC>96 AND UPC<123 THEN MID$(UPC$,I,1)=CHR$(UPC-32)
2510   NEXT:RETURN
2520 END
```
{% endraw %}

## CHECKOUT.BAS

{% raw %}
```bas
1000 '"CHECKOUT" Test output ports, peripherals and handshake
1010 REV$="830115"'By Robert Hamilton
1020 MODEM$="COM1:300,N,8,1,CS300,DS300,CD0":NUMBER$="7678900":NUM=1
1030 SERIAL$=",N,8,1,RS":BAUD$="300":COL$="40":C$="":D$=""
1040 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1050 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1060 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1070 A$="ABCDEFGHI.JKLMNOPQR.STUVWXYZ0.123456789."
1080 B$="abcdefghi.jklmnopqr.stuvwxyz!.@#$%^&*()."
1090      REM: »» KEYS
1100 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY(I) ON:NEXT
1110 KEY 1,CHR$(27)+"CLS:LIST  "
1120 KEY 2,CHR$(27)+"RUN "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1130 KEY 4,CHR$(27)+"SAVE"+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+" GOTO 1000"
1140 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1150 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"+CHR$(7)
1160      REM: »» TITLE
1170 CLS:LOCATE 3,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1180 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1190 PRINT TAB(25);CHR$(179)+"        C H E C K O U T        ";CHR$(179)
1200 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1210 PRINT TAB(25);CHR$(179)+"        Version: ";REV$;"        ";CHR$(179)
1220 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1230 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1240 PRINT CHR$(10);TAB(32);"By Hamilton Company"
1250 LOCATE 20,1:COLOR 6,0:PRINT"NOTE: Requires DOS Rev 1.10 & Basica";
1260      REM: »» START program
1270 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" To Test Ports  ";
1280 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" Quit Program";
1290 K$=INKEY$:IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1620
1300 IF K$="" THEN 1290
1310      REM: »» MENU
1320 CLS:LOCATE 3,30:COLOR 2,0:PRINT"T E S T   M E N U"
1330 LOCATE 5,22:COLOR 6,0:PRINT"Key  Description":LOCATE 6,22:PRINT "===  ";STRING$(40,61)
1340 LOCATE 8,22:PRINT" 1   Parallel Port  LPT1:"
1350 LOCATE ,22:PRINT" 2   Parallel Port  LPT2:"
1360 LOCATE ,22:PRINT" 3   Parallel Port  LPT3:"
1370 LOCATE ,22:PRINT" A   Serial Port    COM1:"
1380 LOCATE ,22:PRINT" B   Serial Port    COM2:"
1390 LOCATE ,22:PRINT" C   CRT Display    SCRN:";CHR$(10)
1400 LOCATE ,22:PRINT" D   Dial Smart Modem        (COM1:Time Check)"
1410 LOCATE ,22:PRINT" I   Impulse Dial Modem      (COM1:Time Check)"
1420 LOCATE ,22:PRINT" M   Change Printed Message  (Times: ";MID$(STR$(NUM),2);")"
1430 LOCATE ,22:PRINT" R   Change Baud Rate       ";" (";BAUD$;")"
1440 LOCATE ,22:PRINT" S   Change Serial Handshake ";"(";SERIAL$;")"
1450 LOCATE ,22:PRINT" W   Change Message Width";"    (Col: ";COL$;")";CHR$(10)
1460 LOCATE ,22:PRINT" Q   Quit Program"
1470 LOCATE 24,1:COLOR 0,7:PRINT" KEY ";:COLOR 5,0:PRINT" Select Test";
1480 K$=INKEY$:IF MID$(K$,1,1)="1" THEN P$="LPT1:":GOTO 2100
1490 IF MID$(K$,1,1)="2" THEN P$="LPT2:":GOTO 2100
1500 IF MID$(K$,1,1)="3" THEN P$="LPT3:":GOTO 2100
1510 IF MID$(K$,1,1)="A" OR MID$(K$,1,1)="a" THEN S$="COM1:":GOTO 2150
1520 IF MID$(K$,1,1)="B" OR MID$(K$,1,1)="b" THEN S$="COM2:":GOTO 2150
1530 IF MID$(K$,1,1)="C" OR MID$(K$,1,1)="c" THEN 2210
1540 IF MID$(K$,1,1)="D" OR MID$(K$,1,1)="d" THEN X$="T":GOTO 2310
1550 IF MID$(K$,1,1)="I" OR MID$(K$,1,1)="i" THEN X$="P":GOTO 2310
1560 IF MID$(K$,1,1)="M" OR MID$(K$,1,1)="m" THEN 1630
1570 IF MID$(K$,1,1)="R" OR MID$(K$,1,1)="r" THEN 1820
1580 IF MID$(K$,1,1)="S" OR MID$(K$,1,1)="s" THEN 1700
1590 IF MID$(K$,1,1)="W" OR MID$(K$,1,1)="w" THEN 2490
1600 IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1620
1610 GOTO 1480
1620 CLS:LOCATE 23,1:COLOR 6,0:PRINT"DONE";CHR$(10):KEY ON:SOUND 500,5:END
1630      REM: »» MESSAGE
1640 CLS:LOCATE 22,1:COLOR 6,0:PRINT"REPEAT OUTPUT MESSAGE: (1 to 999 Times)";
1650 LOCATE 24,1:COLOR 0,7:PRINT" ENTER ";:COLOR 5,0:PRINT" 1 Time  ";
1660 COLOR 0,7:PRINT" NUMBER ";:COLOR 5,0:PRINT" Number of Times ";
1670 INPUT"",NUM2:IF NUM2=0 THEN NUM=1 ELSE NUM=NUM2
1680 IF NUM<1 OR NUM>999 THEN BEEP:GOTO 1640
1690 GOTO 1320
1700      REM: »» HANDSHAKE
1710 CLS:LOCATE 10,1:COLOR 2,0:PRINT"SERIAL HANDSHAKE OPTIONS:"
1720 LOCATE 12,1:COLOR 6,0:PRINT"EXAMPLE: ,N,8,1,CS1000,DS1000";CHR$(10)
1730 PRINT"This is for No parity, 8 data bits, 1 stop bit, Clear to Send with"
1740 PRINT"a 1 second timeout, Data Set ready with 1 second timeout"
1750 LOCATE 18,1:PRINT"Refer to OPEN COM Statement in Basic Manual Rev 1.10 for more detail"
1760 LOCATE 22,1:PRINT "CURRENT HANDSHAKE OPTIONS: ";SERIAL$:LOCATE 24,1
1770 COLOR 0,7:PRINT " ENTER ";:COLOR 5,0:PRINT" No Change  ";:
1780 COLOR 0,7:PRINT " OPTIONS ";:COLOR 5,0:PRINT" Enter New Options  ";
1790 COLOR 6,0:LINE INPUT;"",SRL$:IF SRL$<>"" THEN SERIAL$=SRL$
1800 GOTO 1320
1810      REM: »» BAUD
1820 CLS:LOCATE 10,28:COLOR 6,0:PRINT"Key  B A U D   M E N U":LOCATE 11,28:PRINT"===  ";STRING$(20,61)
1830 COLOR 6,0:LOCATE 13,28:PRINT" 1   BAUD RATE = 75"
1840 LOCATE ,28:PRINT" 2   BAUD RATE = 110"
1850 LOCATE ,28:PRINT" 3   BAUD RATE = 150"
1860 LOCATE ,28:PRINT" 4   BAUD RATE = 300"
1870 LOCATE ,28:PRINT" 5   BAUD RATE = 600"
1880 LOCATE ,28:PRINT" 6   BAUD RATE = 1200"
1890 LOCATE ,28:PRINT" 7   BAUD RATE = 2400"
1900 LOCATE ,28:PRINT" 8   BAUD RATE = 4800"
1910 LOCATE ,28:PRINT" 9   BAUD RATE = 9600"
1920 LOCATE 24,1:COLOR 0,7:PRINT" SPACE  ";:COLOR 5,0:PRINT" Menu   ";
1930 COLOR 0,7:PRINT" KEY ";:COLOR 5,0:PRINT" Select Baud Rate  ";
1940 K$=INKEY$
1950 IF MID$(K$,1,1)="1" THEN BAUD$="75":GOTO 1320
1960 IF MID$(K$,1,1)="2" THEN BAUD$="110":GOTO 1320
1970 IF MID$(K$,1,1)="3" THEN BAUD$="150":GOTO 1320
1980 IF MID$(K$,1,1)="4" THEN BAUD$="300":GOTO 1320
1990 IF MID$(K$,1,1)="5" THEN BAUD$="600":GOTO 1320
2000 IF MID$(K$,1,1)="6" THEN BAUD$="1200":GOTO 1320
2010 IF MID$(K$,1,1)="7" THEN BAUD$="2400":GOTO 1320
2020 IF MID$(K$,1,1)="8" THEN BAUD$="4800":GOTO 1320
2030 IF MID$(K$,1,1)="9" THEN BAUD$="9600":GOTO 1320
2040 IF MID$(K$,1,1)=CHR$(13) THEN 1320
2050 IF MID$(K$,1,1)=" " THEN 1320
2060 GOTO 1940
2070      REM: »» DATIME
2080 DATIME$=DATE$+"  "+LEFT$(TIME$,5):RETURN
2090      REM: »» PARALLEL
2100 CLS:LOCATE 23,1:COLOR 6,0:PRINT"WAIT - Printing to ";P$;" - Press * to ABORT";:ON ERROR GOTO 2450
2110 OPEN P$ AS #1:GOSUB 2080
2120    FOR I=1 TO NUM:LOCATE 24,1:PRINT I;:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2140
2130 PRINT #1,"OUTPUT PORT: ";P$;"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2140 PRINT #1,CHR$(10):CLOSE #1:BEEP:GOTO 1310
2150      REM: »» SERIAL
2160 CLS:LOCATE 23,1:COLOR 6,0:PRINT"WAIT - Printing to ";S$;" - Press * to ABORT";:ON ERROR GOTO 2450
2170 OPEN S$+BAUD$+SERIAL$ AS #1:GOSUB 2080
2180    FOR I=1 TO NUM:LOCATE 24,1:PRINT I;:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2200
2190 PRINT #1,"OUTPUT PORT: ";S$;"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2200 PRINT #1,CHR$(10):CLOSE #1:BEEP:GOTO 1310
2210      REM: »» CRT
2220 CLS:LOCATE 25,1:COLOR 6,0:PRINT "WAIT - Press * to ABORT";
2230 LOCATE 21,1:ON ERROR GOTO 2450
2240 OPEN "SCRN:" FOR OUTPUT AS #1:GOSUB 2080
2250    FOR I=1 TO NUM:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2270
2260 PRINT #1,"OUTPUT PORT: ";"SCRN:";"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2270 CLOSE #1
2280 LOCATE 25,1:PRINT CL$;:LOCATE 25,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT " To Continue";
2290 K$=INKEY$: IF K$="" THEN 2290
2300 GOTO 1310
2310      REM: »» SMART MODEM
2320 CLS:LOCATE 23,1:COLOR 6,0:PRINT"WAIT - Dialing Smart Modem on COM1:";:ON ERROR GOTO 2450
2330 OPEN MODEM$ AS #1
2340 PRINT #1,"AT ";X$;" D";NUMBER$:CLOSE #1
2350 SECONDS=5:IF X$="P" THEN SECONDS=14
2360 GOSUB 2380:CLS:LOCATE 23,1:PRINT"WAIT 30 Seconds for Hang Up";
2370 SECONDS=30:GOSUB 2380:GOTO 1310
2380      REM: »» TIME
2390 TI$=TIME$:SEC1=VAL(MID$(T1$,7,2)): SEC=0
2400 K$=INKEY$:IF SEC=SECONDS THEN RETURN
2410 T2$=TIME$:SEC2=VAL(MID$(T2$,7,2)):IF SEC2<>SEC1 THEN SEC=SEC+1
2420 SEC1=SEC2:LOCATE 24,1:PRINT "TIME: ";SEC;:GOTO 2400
2430      REM: »» RETURN
2440 RETURN
2450      REM: »» ERROR
2460 CLS:LOCATE 21,1:COLOR 6,0:BEEP:CLOSE #1
2470 PRINT"MENU SELECTION: ";"(";K$;")":PRINT "ERROR NUMBER:  ";ERR;CHR$(10):RESUME 1260
2480     REM: »» WIDTH
2490 CLS:LOCATE 24,1:COLOR 0,7:PRINT" ENTER ";:COLOR 5,0:PRINT" 40 Column Message  ";
2500 COLOR 0,7:PRINT" 8 ";:COLOR 5,0:PRINT" 80 Column Message";
2510 K$=INKEY$:IF MID$(K$,1,1)="8" THEN C$=A$:D$=B$:COL$="80":GOTO 1320
2520 IF K$="" THEN 2510
2530 C$="":D$="":COL$="40":GOTO 1320
```
{% endraw %}

## COLORSET.BAS

{% raw %}
```bas
1000 '"COLORSET" A Program to test color attributes in Basic
1010 'Requires Color Graphics Board and Color Monitor
1020 REV$="Rev: 830120"'By Robert Hamilton
1030 SCREEN 0,0,0:WIDTH 40:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1040 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1050 DEF SEG=64:POKE 23,32:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1060 LOCATE 5,13:PRINT"C O L O R S E T";CHR$(10);TAB(15);REV$
1070 LOCATE 24,2:COLOR 0,7:PRINT " ENTER ";:COLOR 5,0:PRINT" For Color   ";
1080 COLOR 0,7:PRINT " M ";:COLOR 5,0:PRINT" Monochrome";:COLOR 6,0
1090 K$=INKEY$:IF MID$(K$,1,1)="m" OR MID$(K$,1,1)="M" THEN CLS:LOCATE 24,1:GOSUB 1520:GOTO 1140
1100 IF K$="" THEN 1090
1110 CLS:LOCATE 24,1
1120 DEF SEG=0:POKE &H410, (PEEK(&H410) AND &HCF) OR &H10:DEF SEG
1130 SCREEN 1,0,0,0:SCREEN 0,1:WIDTH 40:LOCATE ,,1,6,7:COLOR 10,0,2
1140 LOCATE 5,13:PRINT"C O L O R S E T";CHR$(10);TAB(15);REV$
1150 LOCATE 11,8:COLOR 11:PRINT "Foreground colors 0 to 15"
1160 LOCATE 12,10:COLOR 11:PRINT "Add 16 to  ";:COLOR 27:PRINT"Foreground"
1170 LOCATE 14,8:COLOR 12,2:PRINT " Background colors 0 to 7 "
1180 LOCATE 16,10:COLOR 2,0:PRINT "Border colors 0 to 15"
1190 COLOR 6:LOCATE 20,2:PRINT"NOTE: To change width, Enter 40 or 80.
1200 GOSUB 1410:LOCATE 23,1:COLOR 14,0:PRINT STRING$(39,0);:LOCATE 23,1
1210 LINE INPUT;" COLOR For,Bac,Bor (Q=End) ==> ",F$
1220 IF INSTR(F$,"Q")<>0 OR INSTR(F$,"q")<>0 THEN 1370
1230 IF F$="" THEN PRINT:GOTO 1200
1240 SEP=INSTR(F$,","):SEP2=INSTR(SEP+1,F$,","):IF SEP=0 THEN F=VAL(F$):D=VAL(F2$):GOSUB 1380:GOTO 1290
1250 F1$=LEFT$(F$,SEP-1):IF F1$<>"" THEN F=VAL(F1$)
1260 IF SEP2=0 THEN F2$=MID$((F$),SEP+1):B=VAL(F2$):GOTO 1290
1270 F2$=MID$((F$),SEP+1,SEP2-1):IF LEFT$(F2$,1)<>"" AND LEFT$(F2$,1)<>"," AND LEFT$(F2$,1)<>" " THEN B=VAL(F2$)
1280 F3$=MID$((F$),SEP2+1):IF LEFT$(F3$,1)<>"" AND LEFT$(F3$,1)<>"," AND LEFT$(F3$,1)<>" " THEN BOR=VAL(F3$)
1290 IF F<0 OR F>31 THEN BEEP:GOTO 1360
1300 IF B<0 OR B>7 THEN BEEP:GOTO 1360
1310 IF BOR<0 OR BOR>15 THEN BEEP:GOTO 1360
1320 LOCATE 23,1:PRINT TAB(2);"COLOR ";
1330 PRINT USING "## ,";F,B;
1340 PRINT BOR;TAB(21);" = ";
1350 COLOR F,B,BOR:PRINT " THIS IS A TEST ";:COLOR 6,0
1360 PRINT CHR$(10):GOTO 1200
1370 GOSUB 1520:DEF SEG=64:POKE 23,128:DEF SEG:WIDTH 80:COLOR 6,0,0:END
1380 IF F=40 THEN WIDTH 40:WID=0:GOTO 1360
1390 IF F=80 THEN WIDTH 80:WID=1:GOTO 1360
1400 RETURN
1410 LOCATE 24,1:IF WID=1 THEN LOCATE 25,1
1420 COLOR 7,0:PRINT"  Blk 7,0 ";
1430 COLOR 9,1:PRINT" Blu 9,1 ";
1440 COLOR 10,2:PRINT" Grn 10,2 ";
1450 COLOR 11,3:PRINT" Cyn 11,3 ";
1460 IF WID=0 THEN LOCATE 25,1
1470 COLOR 12,4:PRINT" Red 12,4 ";
1480 COLOR 13,5:PRINT" Mag 13,4 ";
1490 COLOR 14,6:PRINT" Yel 14,6 ";
1500 COLOR 15,7:PRINT" Wht 15,7";
1510 RETURN
1520 REM: MONO
1530 DEF SEG=0:POKE &H410,(PEEK(&H410) OR &H30):SCREEN 0:WIDTH 80
1540 LOCATE 24,1,1,12,13:RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #9, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ACATALOG.BAS         CRC = 9A 65

--> FILE:  ASCICHAR.BAS         CRC = 43 87

--> FILE:  ASCII   .BAS         CRC = 4C 5E

--> FILE:  AUTOINST.BAS         CRC = A3 38

--> FILE:  AUTOPEEK.BAS         CRC = 17 47

--> FILE:  AUTOST  .BAS         CRC = FD C6

--> FILE:  CHECKOUT.BAS         CRC = 98 B6

--> FILE:  COLORSET.BAS         CRC = A9 87

--> FILE:  KEYSBAS .BAS         CRC = CA E6

--> FILE:  KEYSMP  .BAS         CRC = 00 87

--> FILE:  LONGZONE.BAS         CRC = D0 FB

--> FILE:  MENU    .BAS         CRC = 01 09

--> FILE:  MINIPROG.BAS         CRC = 7C D7

--> FILE:  MODULO  .BAS         CRC = E4 2F

--> FILE:  MONOSET .BAS         CRC = ED A0

--> FILE:  NUMVERT .BAS         CRC = 4C 23

--> FILE:  OPKEYS  .BAS         CRC = F1 C4

--> FILE:  PAYMENT .BAS         CRC = 0D 45

--> FILE:  PEEK    .BAS         CRC = 68 1A

--> FILE:  Q       .BAS         CRC = 5D CB

--> FILE:  REAL$   .BAS         CRC = 35 AC

--> FILE:  SYS     .BAS         CRC = 41 57

--> FILE:  TIME    .BAS         CRC = 1C 03

--> FILE:  !       .BAT         CRC = 00 00

--> FILE:  AUTOEXEC.BAT         CRC = 00 00

--> FILE:  STARTUP .BAT         CRC = 00 00

--> FILE:  UPDATE  .BAT         CRC = 00 00

--> FILE:  2COLOR  .COM         CRC = 00 00

--> FILE:  2MONO   .COM         CRC = 00 00

--> FILE:  DISKID  .REV         CRC = 17 51

--> FILE:  2COLOR  .SYS         CRC = AE 02

--> FILE:  2MONO   .SYS         CRC = 62 9C

--> FILE:  INDEX   .DOC         CRC = F5 D2

--> FILE:  MDM7I   .COM         CRC = A2 B4

--> FILE:  MDMIBM  .ASM         CRC = 82 79

--> FILE:  MDM7    .DOC         CRC = A1 9F

--> FILE:  CRCK4   .COM         CRC = BD 22

--> FILE:  CRCK4   .CPM         CRC = B8 F5

--> FILE:  LOOK    .COM         CRC = 45 7F

--> FILE:  FIND    .COM         CRC = A2 2C

--> FILE:  WASH    .COM         CRC = 31 0F

--> FILE:  WASH    .DOC         CRC = 76 E7

--> FILE:  SQUISH  .BAS         CRC = 23 88

--> FILE:  SQUISH  .DOC         CRC = D5 F7

 ---------------------> SUM OF CRCS = 98 BE

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## KEYSBAS.BAS

{% raw %}
```bas
1000 PROG1$=" K E Y S B A S "
1010 REV$ = "  Rev: 830120  "'By Robert Hamilton
1020 NOTE$="The Special Function Keys are programmed for Basic Programming.  An overlay template may be printed on the Matrix Printer from (LPT1:)"
1030 SCREEN 0,0,0:WIDTH 80:COLOR 6,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1040 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1050 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1060 ON ERROR GOTO 1230
1070      REM: »» PROGRAM KEYS
1080 KEY OFF: KEY 1,CHR$(27)+"CLS:LIST "
1090 KEY 2,CHR$(27)+"RUN  "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1100 KEY 4,CHR$(27)+"SAVE "+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+"GOTO 1000"
1110 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1120 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"
1130     REM: »» PRINT TEMPLATE
1140 CLS:LOCATE 5,30:PRINT PROG1$:LOCATE 7,30:PRINT REV$
1150 LOCATE 20,1:PRINT NOTE$
1160 LOCATE 25,1:COLOR 0,7:PRINT " SPACE ";:COLOR 5,0:PRINT " To Quit  ";
1170 COLOR 0,7:PRINT " P ";:COLOR 5,0:PRINT " To Print Template  ";:COLOR 6,0
1180 K$=INKEY$: IF MID$(K$,1,1)=CHR$(13) OR MID$(K$,1,1)=" " THEN 1220
1190 IF MID$(K$,1,1)="P" OR MID$(K$,1,1)="p" THEN 1210
1200 GOTO 1180
1210 GOSUB 1250
1220 CLS:LOCATE 20,1:BEEP:COLOR 6,0:PRINT "DONE";CHR$(10):KEY ON:END
1230 CLS:LOCATE 20,1:BEEP:COLOR 6,0:KEY ON:ON ERROR GOTO 0:END
1240     REM: »» FUNCTION KEY TEMPLATE
1250 CLS:LOCATE 23,1:COLOR 6,0:PRINT"WAIT - Printing";
1260 LPRINT CHR$(15);CHR$(27)+CHR$(71)
1270 LPRINT SPC(18);PROG1$;CHR$(10);SPC(18);REV$
1280 LPRINT " ______________________________________________ "
1290 LPRINT "|                 PROGRAMMING   KEYS           |"
1300 LPRINT "|              .----------------------.        |"
1310 LPRINT "|              |                      |        |  TRIM INSIDE"
1320 LPRINT "|   LIST       |                      | RUN    |  BORDER LINE"
1330 LPRINT "|   Program    |                      | Prog   |"
1340 LPRINT "|              |                      |        |"
1350 LPRINT "|              |         CUT          |        |"
1360 LPRINT "|   LOAD       |                      | SAVE   |"
1370 LPRINT "|   Program    |         OUT          | Prog   |"
1380 LPRINT "|              |                      |        |"
1390 LPRINT "|              |         THIS         |        |"
1400 LPRINT "|              |                      |        |"
1410 LPRINT "|   LOAD &     |         AREA         | GOTO   |"
1420 LPRINT "|   RUN Prog   |                      | Line   |"
1430 LPRINT "|              |                      |        |"
1440 LPRINT "|              |                      |        |"
1450 LPRINT "|   DIRECTORY  |                      | RENUM  |"
1460 LPRINT "|   of FILES   |                      | PROG   |"
1470 LPRINT "|              |                      |        |"
1480 LPRINT "|              |                      |        |"
1490 LPRINT "|              |                      |        |"
1500 LPRINT "|   CLEAR      |                      | RUN    |"
1510 LPRINT "|   SCREEN     |                      | AUTOST |"
1520 LPRINT "|              |______________________|        |"
1530 LPRINT "|                                              |"
1540 LPRINT "|   Esc = Abort       ? = Print     ' = REM    |"
1550 LPRINT "|______________________________________________|"
1560 PR$=STRING$(33,10):LPRINT PR$:LPRINT CHR$(18);CHR$(27)+CHR$(72):RETURN
1570 END
```
{% endraw %}

## KEYSMP.BAS

{% raw %}
```bas
1000 PROG1$="  K E Y S M P  "
1010 REV$ = "  Rev: 830120  "'By Robert Hamilton
1020 NOTE$="This program prints Special Function Key Template for Multiplan from (LPT1:)"
1030 SCREEN 0,0,0:WIDTH 80:COLOR 6,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1040 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1050 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1060 ON ERROR GOTO 1170
1070     REM: »» PRINT TEMPLATE
1080 CLS:LOCATE 5,30:PRINT PROG1$:LOCATE 7,30:PRINT REV$
1090 LOCATE 20,1:PRINT NOTE$
1100 LOCATE 25,1:COLOR 0,7:PRINT " SPACE ";:COLOR 5,0:PRINT " To Quit  ";
1110 COLOR 0,7:PRINT " P ";:COLOR 5,0:PRINT " To Print Template  ";:COLOR 6,0
1120 K$=INKEY$: IF MID$(K$,1,1)=CHR$(13) OR MID$(K$,1,1)=" " THEN 1160
1130 IF MID$(K$,1,1)="P" OR MID$(K$,1,1)="p" THEN 1150
1140 GOTO 1120
1150 GOSUB 1190
1160 CLS:LOCATE 20,1:BEEP:COLOR 6,0:PRINT "DONE";CHR$(10):KEY ON:END
1170 CLS:LOCATE 20,1:BEEP:COLOR 6,0:KEY ON:ON ERROR GOTO 0:END
1180     REM: »» FUNCTION KEY TEMPLATE
1190 CLS:LOCATE 23,1:COLOR 6,0:PRINT"WAIT - Printing";
1200 LPRINT CHR$(15);CHR$(27)+CHR$(71)
1210 LPRINT SPC(18);PROG1$;CHR$(10);SPC(18);REV$
1220 LPRINT " ______________________________________________ "
1230 LPRINT "|                  MULTIPLAN   KEYS            |"
1240 LPRINT "|              .----------------------.        |"
1250 LPRINT "|              |                      |        |  TRIM INSIDE"
1260 LPRINT "|   NEXT       |                      | NEXT   |  BORDER LINE"
1270 LPRINT "|   WINDOW     |                      | CELL   |"
1280 LPRINT "|              |                      |        |"
1290 LPRINT "|              |         CUT          |        |"
1300 LPRINT "|   ABSOLUTE   |                      | RECALC |"
1310 LPRINT "|   REFERENCE  |         OUT          |        |"
1320 LPRINT "|              |                      |        |"
1330 LPRINT "|              |         THIS         |        |"
1340 LPRINT "|              |                      |        |"
1350 LPRINT "|              |         AREA         |        |"
1360 LPRINT "|              |                      |        |"
1370 LPRINT "|              |                      |        |"
1380 LPRINT "|              |                      |        |"
1390 LPRINT "|   (Word      |                      | (Word  |"
1400 LPRINT "|    Left)     |                      |  Right)|"
1410 LPRINT "|              |                      |        |"
1420 LPRINT "|              |                      |        |"
1430 LPRINT "|              |                      |        |"
1440 LPRINT "|   PREVIOUS   |                      | NEXT   |"
1450 LPRINT "|   COMMAND    |                      | COMMAND|"
1460 LPRINT "|   (Ch Left)  |______________________|(Ch Rht)|"
1470 LPRINT "|                                              |"
1480 LPRINT "|  Esc = Abort    Alt H = Help    TAB = Choice |"
1490 LPRINT "|______________________________________________|"
1500 PR$=STRING$(33,10):LPRINT PR$:LPRINT CHR$(18);CHR$(27)+CHR$(72):RETURN
1510 END
```
{% endraw %}

## LONGZONE.BAS

{% raw %}
```bas
1000 '"LONGZONE" Converts a time to local & GMV time
1010 ' By Robert Hamilton
1020 PROG1$="        L O N G Z O N E        "
1030 REV$ = "          Rev: 830120          "
1040 PROG2$="      By Hamilton Company      "
1050 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1060 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1070 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1080 PROG4$="NOTE: This program calculates Local and Universal Time for any Longitude"
1090      REM: »» KEYS
1100 FOR I=1 TO 10:ON KEY(I) GOSUB 0 : KEY(I) ON: NEXT
1110 KEY OFF: KEY 1,CHR$(27)+"CLS:LIST  "
1120 KEY 2,CHR$(27)+"RUN  "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1130 KEY 4,CHR$(27)+"SAVE"+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+"GOTO 1000"
1140 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1150 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"+CHR$(7)
1160 ON ERROR GOTO 1360
1170      REM: »» TITLE
1180 CLS:LOCATE 3,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1190 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1200 PRINT TAB(25);CHR$(179);:COLOR 6,0:PRINT PROG1$;:COLOR 2,0:PRINT CHR$(179)
1210 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1220 PRINT TAB(25);CHR$(179);REV$;CHR$(179)
1230 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1240 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1250 PRINT CHR$(10);TAB(26);PROG2$
1260 COLOR 6,0:LOCATE 20,1:PRINT PROG4$;
1270 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" To Continue   ";
1280 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" Quit Program ";:COLOR 6,0
1290 K$=INKEY$:IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1330
1300 IF K$="" THEN 1290
1310 GOTO 1380
1320    REM «« EXIT
1330 CLS:LOCATE 23,1:COLOR 6,0:PRINT"DONE";CHR$(10):KEY ON:BEEP:END
1340    REM «« RETURN
1350 RETURN
1360    REM «« ERROR
1370 CLS:BEEP:LOCATE 23,1:COLOR 12,0:PRINT"ERROR: ";:COLOR 6,0:KEY ON:ON ERROR GOTO 0
1380    REM «« START Program
1390 CLS:LOCATE 24,1:COLOR 6,0:PRINT"San Francisco, Calif. Longitude = 122"
1400 COLOR 10,0:PRINT "ENTER Longitude (Deg ' Min)....(- East)....(Q = Quit): ===> ";
1410 COLOR 6,0:LINE INPUT "",D$
1420 IF D$="q" OR D$="Q" THEN 1330
1430 IF D$="" THEN BEEP:GOSUB 1690:GOTO 1400
1440 SEP=INSTR(D$,"'"):IF SEP=0 THEN D=VAL(D$):M=0:GOTO 1470
1450 D=VAL(LEFT$(D$,SEP-1)):M$=MID$(D$,SEP+1):IF M$="" THEN 1470
1460 M=VAL(M$)
1470 IF D>180 OR D<-180 OR M<-60 OR M>60 OR S<-60 OR S>60 THEN BEEP: GOSUB 1690:GOTO 1400
1480 COLOR 10,0:PRINT "ENTER Time (Hours : Minutes)...(24 Hour)...(Q = Quit): ===> ";
1490 COLOR 6,0:LINE INPUT "",H$
1500 IF H$="q" OR H$="Q" THEN 1330
1510 IF H$="" THEN BEEP:GOSUB 1690:GOTO 1480
1520 SEP=INSTR(H$,":"):IF SEP=0 THEN H=VAL(H$):M1=0:GOTO 1550
1530 H=VAL(LEFT$(H$,SEP-1)):M1$=MID$(H$,SEP+1):IF M1$="" THEN 1550
1540 M1=VAL(M1$)
1550 IF H<0 OR H>24 OR H<>INT(H) OR M1<0 OR M1>60 THEN BEEP: GOSUB 1690:GOTO 1480
1560 L=D+(M/60):L1=L-7.5
1570 T=INT(L1/15)+1:TL=(H-T+24) MOD 24:TZ=(H+T+24) MOD 24
1580 COLOR 4,0:PRINT CHR$(10);"TIME:";TAB(10);"LOCAL STANDARD";TAB(30);"LOCAL DAYLIGHT";TAB(50);"UNIVERSAL COORDINATED (GMT)":COLOR 6,0
1590 HR$=MID$(STR$(H),2):IF H<10 THEN HR$="0"+MID$(STR$(H),2)
1600 HR2$=MID$(STR$(H+1),2):IF H+1<10 THEN HR2$="0"+MID$(STR$(H+1),2)
1610 HR3$=MID$(STR$(TL+1),2):IF TL+1<10 THEN HR3$="0"+MID$(STR$(TL+1),2)
1620 MIN$=MID$(STR$(M1),2):IF M1<10 THEN MIN$="0"+MID$(STR$(M1),2)
1630 TL$=MID$(STR$(TL),2):IF TL<10 THEN TL$="0"+MID$(STR$(TL),2)
1640 TZ$=MID$(STR$(TZ),2):IF TZ<10 THEN TZ$="0"+MID$(STR$(TZ),2)
1650 PRINT TAB(11);HR$;":";MIN$;TAB(31);HR2$;":";MIN$;TAB(51);TZ$;":";MIN$
1660 PRINT TAB(11);TL$;":";MIN$;TAB(31);HR3$;":";MIN$;TAB(51);HR$;":";MIN$
1670 PRINT:GOTO 1400
1680 END
1690 PRINT UP$;CL$;:LOCATE ,1:RETURN
```
{% endraw %}

## MDM7.DOC

{% raw %}
```
              CP/M MODEM PROGRAM DOCUMENTATION
	    by Mark M. Zeiger and James K. Mills
			  11/04/80
	    ( updated for "portable" version by BRK )

This  program  uses  the  file transfer routines  written  by  Ward 
Christensen  in his CP/M file transfer program (V2.0 as of  8/6/79) 
and  is  compatable with his program in single file transfer  mode. 
Multi-file transfers are only possible between two systems  running 
the program described below.

This program has two functions:

        1.  Communication
        2.  Program transfer


COMMUNICATIONS

The program may emulate a terminal or echo data back to sender (act
as a computer).

Terminal Mode  -  'T' Option

        The  terminal mode may be called with or without a file  name. 
        If  a  file  is  specified (it should be  a  new  file),  then 
        anything  received  by the modem may be saved  in  memory  and 
        later  written on disk.  The save feature is toggled ON/OFF by 
        Control-Y.  A colon  (:) will be printed at the  beginning  of
        each line when memory save is active.  The  colon will  not be
        transmitted over the modem nor will it be saved in memory.

        If  a  file  is not specified,  then memory save  can  not  be 
        activated.

        If  the memory buffer is full (the buffer is from the  top  of 
        the program to the top of the segment ),   the  contents  are 
        automatically  written  to  disk  (but the  file  is  not  yet 
        closed).  Communications  may  then continue with  the  buffer 
        reinitialized.  The  computer with which you are communicating 
        must  accept  the  X-ON and X-OFF  (Control-Q  and  Control-S) 
        conventions or data will be lost.

        When  communications are over,  use Control-E to exit from the 
        Terminal  mode and enter the Menu.  The file to which you  are 
        writing  must then be closed by using the  'WRT'  command.  If 
        this  is  not done,  all data will be lost.  I decided not  to 
        close  the file automatically since there will be  times  when 
        you leave terminal mode and then decide to re-enter.  This may 
        be done while in the Menu by using the 'RET' command.  You may 
        re-enter Terminal mode and save in the same file as many times 
        as  you wish as long as you have not closed the file with  the 
        'WRT' command.

        While  in  Terminal  mode,  Control-T will  put  you  in  File 
        Transfer mode.  This will allow you to send the contents of an 
        ASCII file over the modem. This routine does no error checking 
        and  there are no protocols specified between this program and 
        the  receiving computer other than that it should be ready  to 
        receive  data  via  the  modem.   Control-X  will  cancel  the 
        transfer.


Computer mode - 'E' Option

        This  mode  echos data received by other  computer.  Only  one 
        computer  may be in this mode at one time.  There is  no  save 
        feature  in this mode.  Useful if you wish to communicate with 
        somebody running the terminal portion of the program.

File transfer - 'S' and 'R' Options

        These  features  are  the same as in the  CP/M  Modem  program 
        written by Ward Christensen except that upon completion of the 
        transfer, control returns to the Menu unless the secondary 'T' 
        option has been selected.  In the latter case, control returns 
        to Terminal mode.  Remember that if you are operating a remote 
        computer   using   a  timesharing  program   (such   as   Ward 
        Christensen's "BYE"),  the remote should be instructed to send 
        or  receive  in  the  quiet (Q) mode as  a  secondary  option. 
        Examples  of  commands for sending and  receiving  are  listed 
        below.  You may also have to use the  quiet  mode  when  using
        direct computer to computer  communication  at  speeds  higher
        about  2400 baud because the console listing speed is too slow.

        The transmission protocol involves sending data in packets of
        about 128 bytes along with an 8 bit checksum.  The receiving
        system recomputes the checksum and compares it to one received.
        If the checksums agree it sends back an acknowledgement character
        and the sending system sends the next packet.  If the checksums
        do not match, a negative acknowledge is sent and the sending
        system automatically sends the packet again ( it will retry
        at most 10 times before giving up ).

Multi-file transfers

        Using  the B (batch) secondary option,  more than one file and 
        ambiguous filenames may be transferred. To send files, use the 
        primary  option  "S" and the secondary option "B" (along  with 
        any  other  secondary options and baudrate).  To  receive  the 
        files  being  sent,  use the "R" primary option  and  the  "B" 
        secondary  option.  Files may not be named since filenames are 
        sent by the sending program, but a disk drive may be specified 
        (or else the files are written to the default drive).

Backup option

        There  is  a byte at the beginning of the program (106H)  that 
        will  create a backup file if a file on the disk has the  same 
        name  as the file being received in multi-file  transfer  (see 
        MODEM.SET). If this byte is set to 0FFH, a backup file will be 
        created.  If  it is zero the file on the disk will be  deleted 
        before the new file is received. If you are running CP/M 2 and 
        a file on the disk is designated R/O or SYS,  a backup will be 
        created whether the byte at 106H is set or not.

        Be  careful - if you are running CP/M 1 and the drive on which 
        you  are receiving has an R/O file with the same name  created 
        by CP/M 2,  the R/O file can not be accessed (found,  changed, 
        erased,  etc.)  by CP/M 1.  You will therefore have two  files 
        with  the same name when you are running CP/M 2.  To fix  this 
        problem, use CP/M 1 to change the name of the file that is not 
        R/O. Then use CP/M 2 to do what you want with the R/O file.

        Examples:   ( note in the examples that follow, Ignore the
    		      secondary  O  or  A commands as the portable
     		      version cannot set Originate or Answer mode- it
		      must be done manually on the modem)

        The  sender enters    SBOT.600 B:*.COM    to send all the  COM 
        files on disk B.  Also specified were originate mode 600  baud 
        (PMMI modem) and return to terminal mode when done.

        The  receiver enters     RBA.600    to receive all  the  files 
        being  sent on the default drive.


        The sender enters the command   SB.600  ASM.COM  *.HEX  B:M*.*
        which  will send ASM.COM from the default drive,  all the  HEX 
        files from the default drive,  and all the files starting with 
        "M" from the B drive.  

        Multifile transfers may only be done from the menu. It may not 
        be specified when the MODEM program is called.  In other words    
        A>MODEM  SAB  *.COM   will result in an INVALID  OPTION  error 
        message.


Return to Menu - 'M' option

        When asked to select an option, 'M' returns to Menu.

The MENU

        If  the Modem program is entered with no option,  the Menu  is 
        called.  The  Menu gives the choice of selecting the  standard 
        options as defined by Ward Christensen (T,  E,  R, and S). The 
        Terminal  mode has been greatly expanded as  described  above. 
        The "R" and "S" commands must be called with a filename or you 
        will be required to enter the primary command (S or R) and the 
        filename  again (but NOT the secondary options).  If you  want 
        multi-file  transfers,  then  the "R" option does not  need  a 
        filename.

  RET - You may also enter terminal mode using the 'RET' command,  but 
        no  data  will  be saved since a file may not  be  named  with 
        'RET'.  Use  the 'RET' command to RE-ENTER Terminal mode after 
        it  has  first been entered with the 'T' option.  If  this  is 
        done, you will still be able to save the communications if you 
        were doing so before you exitted the terminal mode.

  WRT - The  'WRT' command must be used after leaving  Terminal  mode. 
        This  writes  the  last buffer to disk and  closes  the  file. 
        Failure  to use the 'WRT' command results in loss of all  data 
        and a file of length zero.

  DEL - The  'DEL'  command  erases the most recent file  accessed  in 
        Terminal mode.  Useful if you decide after communications that 
        you don't want to save information just gathered.

  DOS - The 'DOS' command reboots and returns to DOS.

  XPR - The  'XPR'  command is a toggle which causes the  menu  to  be 
        printed  or not printed.  Initially the menu is on unless  the 
        program is called with the "X" option (ie.  A>MODEM X ).

  DIR - The 'DIR' command lists the directory of a DOS disk.  A drive 
        may  be specified (ie.  DIR B:) or the default drive  will  be 
        listed.  After  the directory is listed,  the menu will not be 
        printed whether XPR mode is on or off.  If XPR mode is on  and 
        you wish to see the menu, hit return.

  ^B -  Control-B  while  in Terminal (or Echo) mode allows change  of 
        baudrate "on-the-fly." A carriage return gives 300  baud;  all 
        other rates (110-600) must be explicitely stated.


LISTING OF COMMANDS AND OPTIONS

    Primary options

        S - send a CP/M file (must specify file/s)
        R - receive  a CP/M file (must name file unless B sec opt used)
        T - terminal mode (specify file if memory save wanted)
        E - terminal mode with echo
        M - return to menu
        X - used only when program is called to initially
            toggle menu off

    Secondary options

        B - multi-file mode for sending and receiving files
        T - return to terminal mode after transfer (memory save off)
        R - view what is received in file transfer
        S - view what is being sent in file transfer
        V - view what is being sent or received in file transfer
        T - Terminal mode (used with remotely controlled computer)
        O - originate mode -- NOT IMPLEMENTED IN PORTABLE VERSION --
        A - answer mode        ""   ""
        .xxx - baud rate xxx (xxx = 110-9600 for the serial port )

EXAMPLES        (fn = filename,  ft = filetype)

        Send file, originate mode, 300 baud

                                   SO fn.ft

        Send another file, same mode and baudrate

                                   S fn.ft

        Receive  file on B drive,  600 baud,  ans mode,  view what  is 
        being received, return to terminal mode 

                               RART.600 B:fn.ft

        Send all COM files, no messages on console, same baud and mode 
        as last transfer

                                  SBQ *.COM

        Send two files from two different drives

                           SB A:fn1.ft1  B:fn2.ft2

        Receive files being sent by above on drive A (baudrate must be 
        same and modes opposite)

                                    RB A:

        Terminal mode,  save communication in file,  300 baud (default 
        rate),  originate mode (in terminal must type CTRL-Y to  start 
        save, in menu must type "WRT" to close file)

                                   TO fn.ft



        Any problems or bugs, please call me:

				Or latest revisor:
        Mark M. Zeiger		James K. Mills         Bruce R. Kendall
        198-01B 67th Ave.	824 Jordan Place       Mt. View, Ca.
        Flushing, N.Y. 11365	Rockford, IL  61108
        (212) 454-6985		(815) 398-0579	       415-967-3613






```
{% endraw %}

## MDMIBM.ASM

{% raw %}
```
;  ---- I/O DEPENDENT OVERLAY TO FRONT OF MODEM PROGRAM---
;
; ==== IBM PC VERSION FOR MAIN SERIAL PORT ====
;
;
	ORG	103H
	PUT	103H
;
;THESE ROUTINES ARE AT THE BEGINNING OF THE PROGRAM SO
;THEY CAN BE PATCHED BY A MONITER WITHOUT RE-ASSEMBLING
;THE PROGRAM.
;
PMMIBYTE:	DB	FALSE	;TRUE=PMMI MODEM
				; PMMI NOT IMPLEMENTED IN THIS
				; VERSION
IMSAIBYTE:	DB	FALSE	;TRUE=IMSAI FRONT PANEL
FASTCLK:	DB	FALSE	;8 MHZ OR GREATER
BAKUPBYTE:	DB	TRUE	;TRUE=MAKE .BAK FILE
XPRFLG:		DB	FALSE	;TRUE=NO MENU, FALSE=PRINT MENU
;
XINIT:		JMP	MXINIT	; INIT MODEM ROUTINES (NOT HARDWARE)
INXMDATA:	JMP	MXIN	; GET DATA FROM MODEM
OTXMDATA:	JMP	MXOUT	; OUTPUT DATA TO MODEM
INXSTAT:	JMP	MXISTAT	; TEST FOR INPUT DATA
OTXSTAT:	JMP	MXOSTAT	; TEST IF OK TO OUTPUT DATA
XSETXBAUD:	JMP	MXSETBAUD ; SETUP BAUDRATE
JPXINITMOD:	JMP	MXINITH	; INIT MODEM HARDWARE
;
MODCTLP:	EQU	3FDH	; PUT YOUR MODEM CONTROL PORT HERE
MODSNDB:	EQU	20H	; YOUR BIT TO TEST FOR SEND
MODSNDR:	EQU	20H	; YOUR VALUE WHEN READY
MODRCVB:	EQU	01H	; YOUR BIT TO TEST FOR RECEIVE
MODRCVR:	EQU	01H	; YOUR VALUE WHEN READY
MODDATP:	EQU	3F8H	; YOUR MODEM DATA PORT
;
; --- INPUT DATA FROM MODEM ---
;
MXIN:	PUSH	DX
	MOV	DX,MODDATP
	INB	DX
	POP	DX
	RET
;
; --- OUTPUT DATA TO MODEM ---
;
MXOUT:	PUSH	DX
	MOV	DX,MODDATP
	OUTB	DX
	POP	DX
	RET
;
; --- TEST IF DATA IS AVAILABLE FROM MODEM ---
;
MXISTAT: PUSH	DX
	MOV	DX,MODCTLP
	INB	DX
	POP	DX
	AND	AL,MODRCVB
	CMP	AL,MODRCVR
	RET		; RETURN WITH Z SET IF DATA IS READY
;
; --- TEST IF MODEM IS READY TO BE SENT NEXT CHAR. ---
;
MXOSTAT: PUSH	DX
	MOV	DX,MODCTLP
	INB	DX
	POP	DX
	AND	AL,MODSNDB
	CMP	AL,MODSNDR
	RET		; RETURN WITH Z SET IF MODEM IS READY
;
; --- INIT MODEM ROUTINES AND POSSIBLE STARTUP MESSAGE ---
;	THIS MUST NOT INIT THE MODEM HARDWARE AND NEED
;		NOT PRESERVE ANY REGISTERS.
;
MXINIT:	MOV	DX,MSG		; POINT TO MESSAGE
	MOV	CL,9
	CALL	05H		; USE BDOS CALL TO PRINT STRING
;
;
; --- INIT THE 8250 FOR 8 BITS, NO PARITY, AND 1 STOP BIT ---
;
	MOV	DX,MODDATP+3	; POINT TO LINE CONTROL REG.
	MOV	AL,13H		; SET TO 8 BITS, NO PARITY, SETUP MODE
	OUTB	DX		;   1 STOP BIT
;
	MOV	DX,MODDATP+1	; POINT TO INTERRUPT ENABLE REG.
	MOV	AL,0
	OUTB	DX		; DISABLE INTERRUPTS ON THIS UNIT
;
	MOV	DX,MODDATP+4	; POINT TO MODEM CONTROL REG.
	MOV	AL,0CH		; SET  DTR & RTS
	OUTB	DX
;
	RET
;
;CR:	EQU	0DH
;LF:	EQU	0AH
MSG:	DB	CR,LF
	DB	' VERSION FOR IBM PC MAIN SERIAL PORT  '
	DB	CR,LF,'$'
;
; --- INIT MODEM HARDWARE IF NECESSARY ---
;	THIS ROUTINE MAY BE CALLED SEVERAL TIMES, SO BE
;	SURE THAT THIS WILL NOT HANG UP THE HARDWARE.
;
MXINITH:	RET
;
;
; --- SET HARDWARE BAUDRATE FROM STRING POINTED TO BY---
;	(H,L).  IF THE STRING STARTS WITH AN ASCII SPACE,
;	SET THE BAUDRATE TO THE DEFAULT VALUE.  IF THE
;	REQUEST IS NOT VALID, RETURN WITH CARRY SET.
; 	NOTE: THE INTERNAL ROUTINES ONLY COPY THE
;	      FIRST 3 CHARACTERS OF THE BAUDRATE
;	      INTO THE  STRING POINTED TO BY (H,L)
;
MXSETBAUD:
	PUSH	BX
	PUSH	DX
	PUSH	CX
	MOV	[PTR],BX     	; SAVE POINTER
	MOV	AL,[BX]		; GET FIRST CHAR.
	CMP	AL,' '		; IS IT A SPACE (300 BAUD)
	MOV	DX,B300		; POINT TO 300 BAUD SEQUENCE
	JZ	SETUP		; SET BAUDRATE
	MOV	DX,BDTAB     	; POINT TO TABLE OF BAUDRATES
	MOV	CH,NTAB		; GET # OF ENTRYS TO SEARCH THRU
;
SLOOP:	MOV	BX,[PTR]     	; GET POINTER TO BAUDRATE STRING
	PUSH	DX		; SAVE TABLE POINTER
;
	MOV	CL,3		; SET LENGTH OF ASCII BAUDRATE
SLOOP1:	MOV	SI,DX
	LODB			; GET STRING VALUE FROM TABLE
	CMP	AL,[BX]		; MATCH INPUT STRING?
	JNZ	X1		; NO, SO TRY NEXT TABLE ENTRY
	INC	BX		; MATCH, SO INC POINTERS TO TEST NEXT CHAR.
	INC	DX
	DEC	CL		; COUNT DOWN CHARACTERS
	JNZ	SLOOP1    	; LOOP TO TEST ALL 3 CHARACTERS
;
X1:	POP	DX		; GET POINTER BACK
	JZ	SETUP		; IF MATCH, SET BAUDRATE AND RETURN
	ADD	DX,4		; POINT TO NEXT TABLE ENTRY
	DEC	CH		; COUNT DOWN # OF TABLE ENTRYS
	JNZ	SLOOP     	; LOOP TO TEST ALL VALID ENTRYS
	STC			; SET ERROR CONDITION IF NO MATCH
	JMP	XRET
;
SETUP:	MOV	BX,3
	ADD	BX,DX		; POINT TO BAUDRATE SETUP WORDS
	MOV	AL,[BX]		; GET ONE
	MOV	DX,0		; SELECT DEVICE #0
	MOV	AH,0		; SELECT INIT FUNCTION
	INT	14H
	XOR	AL,AL		; RESET CARRY
XRET:	POP	CX
	POP	DX
	POP	BX
	RET
;
;
; --- BAUDRATE TABLE FOR IBM SETUPS ---
;	  ( AND UART CONTROL BIT )
;
BDTAB:
	DB	'110',3
	DB	'150',23H
B300:	DB	'300',43H
	DB	'600',63H
;   HERE INPUTS OF 120,240,480,960 ARE FOR 1200, 2400, ...
	DB	'120',83H
;
	DB	'240',0A3H
	DB	'480',0C3H
	DB	'960',0E3H
;
ENTAB:	EQU	$
;
NTAB:	EQU	8	; [ENTAB-BDTAB]/5	; # OF TABLE ENTRYS
;
PTR:	DS	2		; BUFFER TO SAVE POINTER
;
;
	ORG	300H	; START OF PROGRAM
	PUT	300H
; ----------------------------------------------------
```
{% endraw %}

## MENU.BAS

{% raw %}
```bas
1000 '"MENU"
1010 RUN"AUTOST"
```
{% endraw %}

## MINIPROG.BAS

{% raw %}
```bas
1000 PROG1$="  M I N I P R O G  "
1010 REV$ = "    Rev: 830120    "
1020 ID$  = "By  Robert Hamilton"
1030 NOTE$= "NOTE: This is a skeletin basic program"
1040 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS
1050 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1060 DEF SEG=64:POKE 23,128:DEF SEG:ON ERROR GOTO 1230
1070 OPTION BASE 1:CL$=STRING$(79,0):UP$=STRING$(1,30):Q$=CHR$(34)
1080 ' Dim a$(10):Defint a-z  '                       DIM & DEF Statements here
1090 KEY 1,CHR$(27)+"CLS:LIST ":KEY 2,CHR$(27)+"RUN"+CHR$(7)'              Keys
1100 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13)
1110 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY (I) ON:NEXT '   Turns Keys Off, Basica
1120 LOCATE 5,28:COLOR 2,0:PRINT PROG1$:COLOR 2,0:LOCATE 7,28:PRINT REV$
1130 LOCATE 9,28:PRINT ID$:LOCATE 20,1:COLOR 6,0:PRINT NOTE$:SOUND 500,5
1140 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" To Continue   ";
1150 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" To Quit ";:COLOR 6,0
1160 K$=INKEY$:IF MID$(K$,1,1)=CHR$(13) OR MID$(K$,1,1)=" " THEN 1240
1170 IF MID$(K$,1,1)="q" OR MID$(K$,1,1)="Q" THEN 1210
1180 GOTO 1160  '                      Delete this line for any key to continue
1190 IF K$="" THEN 1160
1200 GOTO 1240
1210 ' Cls:Locate 24,1:System:End '              Use this line to return to DOS
1220 CLS:LOCATE 20,1:COLOR 6,0:PRINT"DONE";CHR$(10):KEY ON:SOUND 200,6:END
1230 SOUND 600,5:PRINT CHR$(10):COLOR 6,0:ON ERROR GOTO 0:END  'Trap Error Here
1240     REM: »» START PROGRAM
1250 ERROR 255:END '                ERROR TRAP TEST, Start program on this line
```
{% endraw %}

## MODULO.BAS

{% raw %}
```bas
1000 '"MODULO" Demonstrates Modulo Arithmetic
1010 REV$="Rev: 830120"' By Robert Hamilton
1020 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1040 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1050 COLOR 6,0:LOCATE 1,32:PRINT" M O D U L O";CHR$(10)
1060 PRINT"X","X/8","X\8","X MOD 8"
1070 FOR X=48  TO 64
1080 PRINT X,X/8,X\8,X MOD 8
1090 NEXT
1100 LOCATE 22,1:PRINT"This program demonstrates Modulo Arithemetic";
1110 COLOR 6,0:END
```
{% endraw %}

## MONOSET.BAS

{% raw %}
```bas
1000 '"MONOSET" A Program to test mono screen attributes in Basic
1010 REV$="Rev: 830120"'By Robert Hamilton
1020 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1040 DEF SEG=64:POKE 23,32:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1050 LOCATE 5,32:PRINT"M O N O S E T";CHR$(10);TAB(33);REV$:COLOR 6,0
1060 LOCATE 14,22:COLOR 6,0:PRINT "FOREGROUND COLORS:  0 to 15"
1070 LOCATE 16,22:PRINT "ADD 8 to Forground for ";:COLOR 10,0:PRINT"HIGH INTENSITY"
1080 LOCATE 18,22:COLOR 6,0:PRINT "ADD 16 to Forground for ";:COLOR 26,0:PRINT"BLINKING"
1090 LOCATE 20,22:COLOR 6,0:PRINT "BACKGROUND COLORS:  0 to 7 "
1100 LOCATE 22,1:COLOR 6,0:PRINT STRING$(79,0);:LOCATE 22,1
1110 LOCATE 23,1:PRINT STRING$(79,0);:GOSUB 1260:LOCATE 23,1:COLOR 10,0
1120 LINE INPUT;" COLOR: Forground,Bacground (Q=End) ===> ",F$
1130 IF INSTR(F$,"Q")<>0 OR INSTR(F$,"q")<>0 THEN 1250
1140 IF F$="" THEN BEEP:GOTO 1100
1150 SEP=INSTR(F$,","):SEP2=INSTR(SEP+1,F$,","):IF SEP=0 THEN F=VAL(F$):D=VAL(F2$):GOTO 1200
1160 F1$=LEFT$(F$,SEP-1):IF F1$<>"" THEN F=VAL(F1$)
1170 IF SEP2=0 THEN F2$=MID$((F$),SEP+1):B=VAL(F2$):GOTO 1200
1180 F2$=MID$((F$),SEP+1,SEP2-1):IF LEFT$(F2$,1)<>"" AND LEFT$(F2$,1)<>"," AND LEFT$(F2$,1)<>" " THEN B=VAL(F2$)
1190 F3$=MID$((F$),SEP2+1):IF LEFT$(F3$,1)<>"" AND LEFT$(F3$,1)<>"," AND LEFT$(F3$,1)<>" " THEN BOR=VAL(F3$)
1200 IF F<0 OR F>31 THEN BEEP:GOTO 1240
1210 IF B<0 OR B>7 THEN BEEP:GOTO 1240
1220 IF BOR<0 OR BOR>15 THEN BEEP:GOTO 1240
1230 PRINT TAB(55);:COLOR F,B:PRINT" THIS IS A TEST ":COLOR 10,0:PRINT CHR$(10)
1240 GOTO 1100
1250 DEF SEG=64:POKE 23,128:WIDTH 80:COLOR 6,0:CLS:LOCATE 21,1:PRINT "DONE":END
1260 LOCATE 24,1:PRINT SPC(1);STRING$(74,"=");
1270 LOCATE 25,1
1280 COLOR 7,0:PRINT" COLOR  7,0   ";
1290 COLOR 23,0:PRINT"23,0   ";
1300 COLOR 10,0:PRINT"10,0   ";
1310 COLOR 28,0:PRINT"28,0   ";
1320 COLOR 1,0:PRINT"1,0";:COLOR 7,0:PRINT SPC(3);
1330 COLOR 17,0:PRINT"17,0";:COLOR 7,0:PRINT SPC(3);
1340 COLOR 9,0:PRINT"9,0";:COLOR 7,0:PRINT SPC(3);
1350 COLOR 25,0:PRINT"25,0";:COLOR 7,0:PRINT SPC(3);
1360 COLOR 0,7:PRINT" 0,7 ";:COLOR 7,0:PRINT SPC(3);
1370 COLOR 16,7:PRINT" 16,7 ";:COLOR 7,0:PRINT SPC(3);
1380 RETURN
```
{% endraw %}

## NUMVERT.BAS

{% raw %}
```bas
1000  NM$="N U M V E R T"' Converts Decimal, Hex and Octal Numbers
1010  REV$="Rev: 830120"'By Robert Hamilton
1020 DEFINT N:ON ERROR GOTO 1200
1030 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1040 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1050 DEF SEG=64:POKE 23,32:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1060 CLS:LOCATE 5,30:PRINT NM$;CHR$(10);TAB(31);REV$:LOCATE 20,1:COLOR 6,0
1070 LOCATE 15,1:PRINT"NOTE: This program converts positive and negative numbers and Letters,"
1080 PRINT"      to Decimal, Hexidecimal, Octal and Binary numbers":LOCATE 20,1
1090 COLOR 10,0:INPUT"ENTER:  ASCII, Dec, Hex or Oct (32767 to -32768)......(99999 = Quit) ==> ",N$
1100 IF N$="%" OR N$="-" THEN BEEP:GOSUB 1220:GOTO 1090
1110 IF N$="" THEN N=0:GOTO 1140
1120 IF VAL(N$)=0 THEN N=ASC(N$):GOTO 1140
1130 N=VAL(N$)
1140 COLOR 4,0:PRINT "ASCII"," DEC","HEX","OCT","BINARY.8.6.4.2.0":COLOR 6,0
1150 IF N<0 OR N=>255 THEN PRINT " n/a",N,HEX$(N),OCT$(N),:GOTO 1170
1160 PRINT SPC(1);CHR$(N),N,HEX$(N),OCT$(N),
1170 IF N>-1 THEN PRINT USING"!";"0";:FOR J=14 TO 0 STEP -1:PRINT USING "#";N\2^J MOD 2;:NEXT
1180 IF N<0 THEN PRINT USING"!";"1";:FOR J=14 TO 0 STEP -1:PRINT USING "#";(32768.+N)\2^J MOD 2;:NEXT
1190 PRINT CHR$(10):GOTO 1090
1200 DEF SEG=64:POKE 23,128:SOUND 500,5:KEY ON
1210 COLOR 6,0:ON ERROR GOTO 0:END
1220 PRINT CL$;UP$;:LOCATE ,1:RETURN
```
{% endraw %}

## OPKEYS.BAS

{% raw %}
```bas
40000 '"OPKEYS" Loads special function keys
40010 REV$="830120"'By Robert Hamilton
40020 KEY OFF: KEY 1,CHR$(27)+"CLS:LIST "
40030 KEY 2,CHR$(27)+"RUN  "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
40040 KEY 4,CHR$(27)+"SAVE "+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+"GOTO 1000"
40050 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
40060 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"
40070 COLOR 6,0:CLS: LOCATE 22,1:PRINT"Special Function Keys Loaded";
40080 KEY ON: END
```
{% endraw %}

## PAYMENT.BAS

{% raw %}
```bas
1000 '"PAYMENT" Calculates payment to amortize a loan
1010 ' By Robert Hamilton
1020 PROG1$="         P A Y M E N T         "
1025 REV$ = "          Rev: 830120          "
1030 PROG2$="      By Hamilton Company      "
1040 PROG3$="                               "
1050 PROG4$="NOTE: This program computes the monthly payment to fully amortize a loan":Q$=CHR$(34)
1052 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1053 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1054 DEF SEG=64:POKE 23,160:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1070      REM: »» KEYS
1080 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY(I) ON:NEXT
1140 KEY OFF: KEY 1,CHR$(27)+"CLS:LIST "
1150 KEY 2,CHR$(27)+"RUN  "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1160 KEY 4,CHR$(27)+"SAVE"+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+"GOTO 1000"
1170 KEY 7,CHR$(27)+"FILES "+CHR$(34)+"a:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1180 KEY 9,CHR$(12)+"COLOR 6,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"
1190 DEFDBL A:CL$=STRING$(79,0):UP$=STRING$(1,30):ON ERROR GOTO 1400
1200      REM: »» TITLE
1210 CLS:LOCATE 5,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1220 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1230 PRINT TAB(25);CHR$(179);:COLOR 6,0:PRINT PROG1$;:COLOR 2,0:PRINT CHR$(179)
1240 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1250 PRINT TAB(25);CHR$(179);REV$;CHR$(179)
1260 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1270 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1280 PRINT CHR$(10);TAB(26);PROG2$
1290 PRINT TAB(26);PROG3$
1300 COLOR 6,0:LOCATE 20,1:PRINT PROG4$;
1310 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 5,0:PRINT" To Continue   ";
1320 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" Quit Program ";:COLOR 6,0
1330 K$=INKEY$:IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN CLS:GOTO 1370
1340 IF K$="" THEN 1330
1350 GOTO 1420
1360    REM «« EXIT
1370 'CLS:LOCATE 24,1:color 6,0:PRINT "WAIT - Loading ";Q$;"MENU";Q$;:CHAIN "Autost.bas",1000:END
1372 CLS:LOCATE 22,1:COLOR 6,0:PRINT "DONE":END
1380    REM «« RETURN
1390 RETURN
1400    REM «« ERROR
1410 CLS:BEEP:LOCATE 21,1:COLOR 12,0:PRINT"ERROR: Correct,  PRESS (F2) and ENTER":COLOR 6,0:ON ERROR GOTO 0:END
1420    REM «« START Program
1430 CLS
1440 LOCATE 24,1:I2$="1st Yr Interest = $$########,"
1450 COLOR 6,0:PRINT"NEW LOAN:"
1460 COLOR 6,0:INPUT"LOAN,    Total Amount ($):  ",P:P2=P
1470 IF P=0 THEN BEEP:PRINT CHR$(10):GOTO 1650
1480 IF P<1 OR P>9999999 THEN BEEP:GOSUB 1760:GOTO 1460
1490 COLOR 6,0:INPUT;"DURATION or Loan, (Years):  ",N
1500 IF N=0 THEN BEEP:PRINT CHR$(10):GOTO 1650
1510 IF N<1 OR N>49 THEN BEEP:GOSUB 1760:GOTO 1490
1520 N=INT(N*12):PRINT TAB(50);"(";N;"Payments)"
1530 IF P=0 OR N=0 THEN 1440
1540 COLOR 6,0:INPUT;"INTEREST Rate, Annual (%):  ",I
1550 IF I=0 THEN BEEP:PRINT CHR$(10):GOTO 1650
1560 IF I<1 OR I>99 THEN BEEP:GOSUB 1760:GOTO 1530
1570 I=I/1200:I2=0
1580 PMT=P*I*(1+I)^N/((1+I)^N-1):A1=12*PMT
1590 P$="PAYMENT, Monthly Amount . . . . $$######,.##"
1600  FOR J=1 TO 12:I2=I2+I*P2:P2=P2-(PMT-I*P2):NEXT
1610 COLOR 10,0:PRINT TAB(50);:PRINT USING I2$;I2
1620 P2$="Annual Payments = $$########,."
1630 PRINT USING P$;PMT;:PRINT TAB(50);
1640 PRINT USING P2$;A1:PRINT
1650 LOCATE 25,1:COLOR 0,7:PRINT" I ";:COLOR 5,0:PRINT" For New Interest Rate   ";
1660 COLOR 0,7:PRINT" L ";:COLOR 5,0:PRINT" For New Loan   ";
1670 COLOR 0,7:PRINT" B ";:COLOR 5,0:PRINT" Blank Page   ";
1680 COLOR 0,7:PRINT" Q ";:COLOR 5,0:PRINT" To Quit ";:COLOR 5,0
1690 K$=INKEY$:IF MID$(K$,1,1)="i"OR MID$(K$,1,1)="I" THEN GOSUB 1750:GOTO 1530
1700 IF MID$(K$,1,1)="l" OR MID$(K$,1,1)="L" THEN GOSUB 1750:GOTO 1440
1710 IF MID$(K$,1,1)="b" OR MID$(K$,1,1)="B" THEN GOSUB 1770:GOTO 1650
1720 IF MID$(K$,1,1)="q" OR MID$(K$,1,1)="Q" THEN 1370
1730 GOTO 1690
1740 END
1750 LOCATE 25,1:PRINT CL$;:LOCATE 24,1:RETURN
1760 PRINT UP$;CL$;:LOCATE ,1:RETURN
1770 ON ERROR GOTO 1780:OPEN "LPT1:" FOR OUTPUT AS #1:PRINT #1,CHR$(12);:CLOSE #1:ON ERROR GOTO 1400:RETURN
1780 CLOSE #1:RESUME 1790
1790 LOCATE 25,1:PRINT CL$;:LOCATE 25,1:BEEP:COLOR 12,0:PRINT"ERROR: Check Printer - ENTER to Continue";:COLOR 6,0:INPUT;"",ZZ$:LOCATE 25,1:PRINT CL$;:LOCATE 25,1:GOTO 1650
```
{% endraw %}

## PEEK.BAS

{% raw %}
```bas
1000 NM$="P E E K"' A program to peek at a location in memory
1010 REV$="Rev: 830120"'By Robert Hamilton
1020 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1040 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1050 LOCATE 5,33:PRINT NM$;CHR$(10);TAB(31);REV$
1060 COLOR 6,0:LOCATE 15,5:PRINT "This Program will peek at an input starting segment and offset location.";CHR$(10)
1070 COLOR 6,0:PRINT TAB(5);"Memory Address may be Decimal, Hexidecimal or Octal.":LOCATE 20,1
1080 COLOR 10,0:INPUT"Enter Starting Segment       (-9 to Quit) ===> ",S
1090 IF S<0 THEN 1170
1100 DEF SEG=S
1110 COLOR 10,0:INPUT"Enter Memory Address to PEEK (-9 to Quit) ===> ",H
1120 IF H<0 THEN 1170
1130 X=PEEK(H)
1140 COLOR 4,0:PRINT " SEG"," OFFSET"," DEC","HEX"
1150 COLOR 6,0:PRINT S,H,X,HEX$(X);CHR$(10)
1160 GOTO 1110
1170 DEF SEG=64:POKE 23,0:SOUND 500,5:COLOR 6,0:END
```
{% endraw %}

## Q.BAS

{% raw %}
```bas
1000 '"Q" Returns from basic to DOS with a clean screen
1010 DEF SEG=0:POKE 108,&HD3:POKE 109,&H15:POKE 110,&H7:POKE 111,&H3
1020 SCREEN 0,0,0:WIDTH 80:COLOR 6,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1040 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1050 SOUND 500,6:CLS:LOCATE 24,1:SYSTEM:END
```
{% endraw %}

## REAL$.BAS

{% raw %}
```bas
1000  PROG1$="     REAL$     " 'PRODUCES A REAL ESTATE APPRECIATION TABLE
1010  REV$ = "  Rev: 830120  "' By Robert Hamilton
1020  DEFDBL A,P : DEFINT I,S,Y
1030  SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
1040  LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
1050  DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
1060  CLS:LOCATE 6,30:PRINT PROG1$
1070  PRINT CHR$(10);TAB(30);REV$:COLOR 6,0
1080  LOCATE 25,1:PRINT CL$;:LOCATE 25,1
1090  PRINT"ENTER  Market Value in 1980 Dollars  (Q = Quit)==> ";:INPUT"",AMOUNT$
1100  IF AMOUNT$="q" OR AMOUNT$="Q" THEN END
1110  IF AMOUNT$="" THEN BEEP:GOTO 1080
1120  AMOUNT=VAL(AMOUNT$)
1130  IF AMOUNT <1 OR AMOUNT >9999999 THEN BEEP:GOTO 1080
1140  P1=AMOUNT : P2=AMOUNT : P3=AMOUNT : P4=AMOUNT : P5=AMOUNT
1150  P10=0 : P20=0 : P30=0 : P40=0 : P50=0 : SKIP=0 : YEAR=1980
1160  CLS:LOCATE 25,1,1:COLOR 0,7:PRINT" ENTER ";:COLOR 5,0:PRINT" For CRT    ";
1170  COLOR 0,7:PRINT" P ";:COLOR 5,0:PRINT" For Printer Copy ";:P$="SCRN:":YR=15:PRT=0:COLOR 6,0
1180  K$=INKEY$:IF MID$(K$,1,1)="P" OR MID$(K$,1,1)="p" THEN P$="LPT1:":PRT=1:YR=45
1190 IF K$="" THEN 1180
1200  OPEN P$ FOR OUTPUT AS #1 :CLS:IF PRT=1 THEN PRINT #1,CHR$(10);CHR$(10)
1210  LOCATE 25,1:COLOR 6,0:PRINT "WAIT - Printing":IF PRT=0 THEN LOCATE 1,1
1220  PRINT #1,TAB(28);"REAL  ESTATE  APPRECIATION" : PRINT #1,""
1230  PRINT #1," YEAR             8%           10%           12%           14%           16%" : PRINT #1,""
1240    FOR I=1 TO YR
1250    P1=P1+P10 : P2=P2+P20 : P3=P3+P30 : P4=P4+P40 : P5=P5+P50
1260    PRINT #1,YEAR; : PRINT #1,USING " ############,.";P1,P2,P3,P4,P5
1270    SKIP=SKIP+1 :IF SKIP=5 THEN SKIP=0 :IF SKIP=0 THEN PRINT #1,""
1280    P10=P1*0.08 :P20=P2*0.1 :P30=P3*0.12 :P40=P4*0.14 :P50=P5*0.16 :YEAR=YEAR+1
1290    NEXT
1300  IF PRT=1 THEN PRINT #1,STRING$(4,10)
1310  CLOSE #1 : KEY ON : BEEP : END
```
{% endraw %}

## SQUISH.BAS

{% raw %}
```bas
1 '           IBM PC BASIC
2 '            'Squish'
3 '  Author: Dave Archibald
4 '  Translation: Alan J. Zett
5 '  Copyright (c) 1982, SoftSide Publications, Inc.
6 '  Squished some bugs 2/5/83: Herb Shear
7 '
9 REM initialize variables, DIMension arrays, DEFine Function I$, and select          run time options.
10 DEF FNI$(A$)=CHR$(ASC(LEFT$(A$,1))+32*(LEFT$(A$,1)>"Z")):DEFINT B-K,S-Z:A=0:AZ=0:A$="":C$="":D=0:DS=100:DT=0:G1=0:G2=0:G3=0:G4=0:G5=0:G6=0:HH=0:I$="":IP$="":J$="":LN=0:L$="":L1$="":N$="":P=0:PJ=0:PP=0:PV=0:Q$="":R=0:RD=0:RE=0:S=0:S1=0
20 SD=0:SQ$="":SV$="":T=0:T1=0:T2=0:V$="":X=0:XC$="":XS$="":XP$="":ZC=0:DIM REF(DS*2),PRO(DS):SCREEN 0,0,0:WIDTH 80:COLOR 11,0:KEY OFF:CLS:LINE INPUT"Enter the name of the program to be Squished: ";SQ$
30 XS$="N":IP$="N":XC$="N":XP$="N":PRINT:LINE INPUT"Enter the name for the final Squished program: ";SV$:PRINT:LINE INPUT"Would you like extra spaces deleted? (Y/N)";XS$:IF XS$="" THEN XS$="N"
40 PRINT:LINE INPUT"Would you like REM statements deleted? (Y/N) ";IP$:IF IP$="" THEN IP$="N"
50 PRINT:LINE INPUT"Would you like to combine lines? (Y/N) ";XC$:IF XC$="" THEN XC$="N"
60 PRINT: LINE INPUT"Would you like to protect any lines? (Y/N) ";XP$:IF XP$="" THEN XP$="N"
69 REM Set error trap and convert INPUT variables.
70 ON ERROR GOTO 560:XS$=FNI$(XS$):IP$=FNI$(IP$):XC$=FNI$(XC$):XP$=FNI$(XP$)
79 REM If nothing is to be done, reRUN the program.
80 IF XS$="N" AND IP$="N" AND XC$="N" AND XP$="N" THEN RUN
89 REM Store user protected lines.
90 IF XP$="Y" THEN INPUT"Enter line number to protect (0 to exit) ";PRO(PV):IF PRO(PV)>0 AND PV<DS THEN PV=PV+1: GOTO 90
99 REM OPEN source file for input.
100 OPEN SQ$ FOR INPUT AS #1
109 REM Check for EndOfFile and PRINT error if current line does not start with         a line number.
110 IF EOF(1) THEN 240
120 LINE INPUT #1,A$:IF ASC(A$)>58 THEN COLOR 12,0:PRINT:PRINT"**** '";SQ$;"' is not an ASCII file ****":PRINT:COLOR 11,0:END
129 REM Search for reserved words that reference other program lines.
130 G1=1:G2=1:G3=1:G4=1:G5=1:G6=1:G7=1:G8=1
140 D=5:T=INSTR(G1,A$,"THEN "):IF T THEN G1=T+D:GOTO 210
150 T=INSTR(G2,A$,"GOTO "):IF T THEN G2=T+D: GOTO 210
160 T=INSTR(G3,A$,"ELSE "):IF T THEN G3=T+D: GOTO 210
170 T=INSTR(G4,A$,"GOSUB "):IF T THEN D=5:G4=T+D:GOTO 210
175 T=INSTR(G7,A$,"RETURN "):IF T THEN D=6:G7=T+D:GOTO 210
180 T=INSTR(G5,A$,"RESUME "):IF T THEN D=6:G5=T+D:GOTO 210
185 T=INSTR(G5,A$,"RESTORE "):IF T THEN D=7:G8=T+D:GOTO 210
190 T=INSTR(G6,A$,"RUN "):IF T THEN D=3:G6=T+D:GOTO 210
200 GOTO 110
209 REM Store all referenced lines into an array.
210 L$=MID$(A$,T-1,1):IF L$=" " OR L$=":" THEN ELSE 140
211 A=VAL(MID$(A$,T+D)):IF A THEN FOR HH=1 TO R:IF REF(HH)<>A THEN NEXT:R=R+1:REF(R)=A
220 IF A>0 THEN T=T+D:D=1:T1=INSTR(T,A$,","):T2=INSTR(T,A$,":"):IF T1>0 AND (T2=0 OR T1<T2) THEN T=T1:GOTO 210
230 GOTO 140
239 REM Sort all referenced and protected lines in ascending order.
240 CLOSE:FOR S=1 TO R:FOR S1=S TO R:IF REF(S)<REF(S1) THEN SWAP REF(S),REF(S1)
250 NEXT S1,S:FOR S=0 TO PV:FOR S1=S TO PV:IF PRO(S)>PRO(S1) THEN SWAP PRO(S),PRO(S1)
259 REM ReOPEN source file for INPUT and OPEN destination for OUTPUT.
260 NEXT S1,S:OPEN SQ$ FOR INPUT AS #1:OPEN SV$ FOR OUTPUT AS #2:CLS
269 REM Get next program line to be processed.
270 IF EOF(1) THEN 380
280 LINE INPUT #1,A$:FOR HH=INSTR(A$," ") TO LEN(A$)-1:IF MID$(A$,HH+1,1)=" " THEN NEXT
289 REM Set up pointer variables and update display.
290 PP=HH:X=PP:LN=VAL(A$):LOCATE 1,1:COLOR 11,0:PRINT"Scanning line:";:COLOR 12,0:PRINT LN:PRINT:PRINT STRING$(255,32):LOCATE 3,1:COLOR 14,0:PRINT A$:LOCATE 8,1:COLOR 11,0:PRINT"Scanning position: ":PRINT
300 PRINT"Number of lines combined:";:COLOR 12,0:PRINT RE:COLOR 11,0:PRINT:PRINT"Number of spaces deleted:";:COLOR 12,0:PRINT SD:COLOR 11,0:PRINT:PRINT"Number of REM statements deleted:";:COLOR 12,0:PRINT RD:COLOR 11,0:GOTO 410
309 REM If combining lines is not allowed, then write new line.
310 IF XC$<>"Y" THEN PRINT #2,A$:GOTO 270
319 REM Set up C$ to start combining lines.
320 IF C$="" THEN C$=A$:GOTO 270
329 REM Checks if current line is referenced.
330 IF R>0 THEN IF LN=REF(R) THEN R=R-1:GOTO 370 ELSE IF LN>REF(R) THEN R=R-1:GOTO 330
339 REM Never combine lines with IF or RETURN statements.
340 IF INSTR(C$,"IF") OR INSTR(C$,"RETURN") THEN 370
349 REM Combine two program lines and go for more.
350 V$=RIGHT$(A$,LEN(A$)-X):IF LEN(C$)+LEN(V$)<=240 THEN C$=C$+":"+V$:RE=RE+1 ELSE 370
360 GOTO 270
369 REM Not enough space in C$ to combine another line so write it out first,           then continue.
370 PRINT #2,C$:C$=A$:GOTO 270
379 REM Write out last program line and update display.
380 PRINT #2,C$:CLOSE:COLOR 12,0:LOCATE 8,1:PRINT SPACE$(21):LOCATE 10,26:PRINT RE:LOCATE 12,26:PRINT SD:LOCATE 14,34:PRINT RD
389 REM Prompt for optional LOADing of Squished program.
390 LOCATE 1,1:PRINT SPACE$(20):LOCATE 3,1:PRINT STRING$(255,32):LOCATE 3,1:COLOR 14,0:PRINT"Press 'L' to load the Squished program":SOUND 1000,6:SOUND 660,5:COLOR 11,0
400 Q$=INKEY$:IF Q$="" THEN 400 ELSE CLS:IF Q$="L" OR Q$="l" THEN LOAD SV$ ELSE END
409 REM Change color of current character being scanned.
410 N$=LEFT$(A$,PP):ZC=160+PP:PP=PP+1:P=0:J$="":DT=0:FOR T=PP TO LEN(A$):L$=MID$(A$,T,1):AZ=INT(ZC/80):LOCATE AZ+1,ZC-AZ*80+1:COLOR 10,0:PRINT MID$(A$,T,1);:ZC=ZC+1:COLOR 12,0:LOCATE 8,19:PRINT T
419 REM Set P equal to 1 on the first quote mark in a PRINT statement, ELSE set     P equal to 0 on second.
420 COLOR 11,0:IF L$=CHR$(34) THEN IF P THEN P=0 ELSE P=1
429 REM If the current scan position if within a set of quote marks, skip all           normal Squish processing.
430 IF P THEN 520
439 REM Branch to line 520 if DATA is found in the current program line.
440 IF MID$(A$,T,4)="DATA" THEN DT=1 ELSE IF L$=":" THEN DT=0
450 IF DT THEN 520
459 REM Remove all spaces when safe to do so and update Spaces Deleted counter.
460 IF L$<>" " OR XS$<>"Y" THEN 500 ELSE IF J$>"" THEN L1$=RIGHT$(J$,1):IF L1$=CHR$(34)OR L1$="^" OR (L1$>="(" AND L1$<"0") OR (L1$>"9" AND L1$<"A") THEN L$=""
470 L1$="X":IF T<LEN(A$) THEN L1$=MID$(A$,T+1,1)
480 IF L1$="^" OR L1$=CHR$(34) OR L1$=" " OR (L1$>="'" AND L1$<"0") OR (L1$>"9" AND L1$<"A") THEN L$=""
490 IF L$="" THEN SD=SD+1
499 REM Check for a user protected line.
500 IF PV>PJ THEN IF LN=PRO(PJ) THEN PJ=PJ+1:GOTO 540 ELSE IF LN>PRO(PJ) THEN PJ=PJ+1:GOTO 500
509 REM Search for REMarks and remove if allowed.
510 IF MID$(A$,T,3)="REM" OR L$="'" THEN IF IP$<>"Y" THEN GOSUB 600:A$=N$+J$+MID$(A$,T):GOTO 540 ELSE RD=RD+1:WHILE LN>REF(R)AND R>0:R=R-1:WEND:IF LN=REF(R) THEN R=R-1:GOSUB 600:WHILE J$="":J$="'":WEND:A$=N$+J$:GOTO 540 ELSE IF J$="" THEN 270 ELSE 530
519 REM Construct a new Squished version of the currect line in J$.  Also add a         trailing quote mark if none found after a PRINT statement.
520 J$=J$+L$:NEXT:IF P THEN J$=J$+CHR$(34)
529 REM Add the current program line number and jump to line 310.
530 GOSUB 600:A$=N$+J$:GOTO 310
539 REM If lines have been combined, then save them.
540 IF C$<>"" THEN PRINT #2,C$:C$=""
549 REM Otherwise write new program line.
550 PRINT #2,A$:GOTO 270
559 REM Error trapping done here.
560 IF ERR=53 THEN PRINT:PRINT SQ$" FILE NOT FOUND":PRINT:FILES LEFT$(SQ$,INSTR(SQ$,":"))+"*.*":PRINT:LINE INPUT "Try again:";SQ$:RESUME: ELSE ON ERROR GOTO 0
599 REM Patch to remove indentation if spaces being deleted.  Add `AND XC$="Y"  to the logic if you want to preserve indentation when not combining.
600 IF XS$="Y"THEN X=INSTR(N$," "):N$=LEFT$(N$,X):SD=SD+PP-X-1
610 RETURN
```
{% endraw %}

## SQUISH.DOC

{% raw %}
```
                SS SS SS SS SS SS SS SS SS SS SS
                SS                            SS
                SS        IBM PC Basic        SS
                SS          "Squish"          SS
                SS   Author: Dave Archibald   SS
                SS Translation: Alan J. Zett  SS
                SS    Copyright (c) 1982      SS
                SS SoftSide Publications, Inc SS
                SS                            SS
                SS SS SS SS SS SS SS SS SS SS SS
"Squish" is a utility program for the IBM PC with 32K,
color/graphics adapter, 1 disk drive, and Basic.

(The following is condensed from SoftSide magazine, issue no. 34.)

     Programmers tend to use quite a few REMarks when
programming, add extra spaces to make listings more readable, as
well as putting only a few statements on each line.  The result
is a program that is easier to read and debug, but not very space
or memory efficient.  The ideal utility would remove extra spaces
and REMs, and combine lines, when possible without altering the
structure of the BASIC program.
     Enter the TRS-80 program Squish...if only it were translated
to the IBM PC.  We've done so, and it is presented here for the
benefit of all our IBM subscribers.

TO USE SQUISH:
     First LOAD the program you wish to pack.  After it is
loaded, SAVE it with the ASCII option to a new file.  For example:
LOAD "MYPROG.BAS" and then reSAVE it as "MYPROG.ASC",A.  After
the program has been saved with the ASCII option, LOAD in
"Squish" and type RUN.
     Answer the first question with the name of the file saved
with the ASCII option ("MYPROG.ASC" in the example above).
     You will then be given a series of options.  You can remove
extra spaces, delete REMarks, and combine lines.  The fourth
option gives you the ability to protect a line or group of lines
from being "Squished."  Lines entered under this option are
totally ignored by "Squish."
     "Squish" will then read in the program to check for lines
that are referenced and proceed to work on it.  The display will
update constantly to show, in color (or monochrome), what
"Squish" is doing, and where.
     When "Squish" is done, it will allow you to enter the
"Squished" program for examination.  I suggest you then do a
quick RENUMber and reSAVE the program under another filename.
     When you are finished, you will have a neatly renumbered
program that is not only much shorter than the original (usually
by a few K), but will execute faster.  All in all, "Squish" is
quite a useful utility.

VARIABLES;
     A: Temporary numeric storage.
     A$: Current program line being Squished.
     AZ: Screen line on which current program line is displayed.
     C$: Contains lines that have been combined.
     D: Length of a reserved word being searched for.
     DS: The maximum number of user protected lines.
     DT: Set to 1 if current line contains a DATA statement.
     G1 - G6: A position in A$ at which INSTR starts searching.
     HH: Miscellaneous.
     I$: Name of a DEF FN to convert a string input into a single upper
               case letter.
     IP$: Set to "Y" if REM statements are to be deleted.
     J$: Storage for A$ as it is being reconstructed.
     LN: Current line number being processed.
     L$, L1$: Current character of A$ being processed.
     N$: Set to STR$(LN).
     P: Set to 1 the first time a quote is encountered in a PRINT
               statement.  Set to 0 when second quote or end of
               line is encountered.  While P equals 1, all
               compression functions are cancelled.
     PJ: Points to the current line in PRO(*) being tested.
     PP: Set to 1 minus the location of the first character in a
               program line following the line number.
     PV: Number of protected lines entered.
     PRO(*): Optional protected line numbers specified by user.
     Q$: Used in an INKEY$ loop.
     R: Number of line numbers referenced in REF(*).
     RD: Total number of REM statements deleted.
     RE: Total number of lines combined.
     REF(*): Number of program lines that can be referenced.
     S,S1: Miscellaneous.  Used in sort routine.
     SD: Total number of spaces deleted.
     SQ$: SAVE filename for Squished program.
     SV$: SAVE filename for Squished program.
     T,T1-T2: Miscellaneous.
     V$: The current program line stripped of its line number.
     X: Set equal to PP.
     XC$: Set to "Y" if lines are to be combined.
     XS$: Set to "Y" if extra spaces are to be deleted.
     XP$: Set to "Y" if user wishes to protect lines.
     ZC: Position on line AZ to print L$.


2/9/83 Patches, enhancements, etc. by Herb Shear

The R pointer can no longer lag behind allowing referenced REM and '
  statements to be deleted.
Trailing ' no longer added on nonnull referenced lines.
RESTORE & RETURN references to a line now protect the line.
Constructs like X=IGOTO+35 no longer protects line 35.
Indentation was preserved even when combining.
The deblanking tests were extended to close up constructs such as
  A( I ),  etc.
Goofs in naming the input file are now handled in a friendly fashion
  instead of repeating the entire input session over again.

      Users should take note of the instructions to use SAVE"-----",A
files as input.  Squish is tuned to the interpreter's output which is a
subset of valid input forms.  Lowercase, blanks preceding line numbers
and `GO TO xxx' are not handled properly by Squish.

```
{% endraw %}

## SYS.BAS

{% raw %}
```bas
10 '"SYS" Returns from basic to DOS with a clean screen
20 DEF SEG=0:POKE 108,&HD3:POKE 109,&H15:POKE 110,&H7:POKE 111,&H3
32 SCREEN 0,0,0:WIDTH 80:COLOR 6,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
33 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
34 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
40 SOUND 500,6:CLS:LOCATE 24,1:SYSTEM:END
```
{% endraw %}

## TIME.BAS

{% raw %}
```bas
45000 PROG1$="T I M E"' DISPLAYS SYSTEM DATE AND TIME
45010 REV$="Rev: 830120"' By Robert Hamilton
45020 SCREEN 0,0,0:WIDTH 80:COLOR 2,0,0:KEY OFF:CLS:UP$=STRING$(1,30)
45030 LOCATE ,,1,12,13:DEF SEG=0:IF PEEK (&H410)= 109 THEN LOCATE ,,,6,7
45040 DEF SEG=64:POKE 23,128:DEF SEG:CL$=STRING$(79,0):Q$=CHR$(34)
45050 LOCATE 6,34:PRINT PROG1$:PRINT CHR$(10);TAB(32);REV$:COLOR 6,0
45060 GOSUB 45090:CLS:LOCATE 20,1:COLOR 6,0:PRINT "DONE";CHR$(10):KEY ON
45070 LOCATE ,,1:END
45080     REM: »» DATE/TIME
45090 LOCATE 25,1:COLOR 10,0:PRINT "Press SPACE key to abort";:COLOR 6,0
45100 LOCATE 22,1:PRINT"DATE IS: ";DATE$
45110 LOCATE 23,1,0:PRINT"TIME IS:  ";
45120 K$=INKEY$:LOCATE 23,10:PRINT TIME$+" ";
45130 IF K$="" THEN 45120
45140 RETURN
```
{% endraw %}

## WASH.DOC

{% raw %}
```
File "WASH.DOC"

		Documentation on the operation of:
			  "WASH.COM"
		by:
			Michael J. Karas
			Micro Resources
			2468 Hansen Court
			Simi Valley, California 93065


	This program is a super-duper CP/M disk directory maintence utility 
that is designed as an "almost" all inclusive routine to make it easy to do 
disk directory house keeping. The inspiration to produce this program came 
from use of an older utility program called "CLEAN" that I came across at a 
meeting of the Valley Computer Club about a year and a half ago. At that time 
"CLEAN" seemed like a dream come true. Unfortunately it had several major 
problems that limited its overall usefullness. The disadvantages of CLEAN have
all been overcome with the new WASH program. Program features are listed 
below:

	a) Alphabetical list oriented file operations

	b) Any legal CP/M drive (A: to P:) may be selected

	c) Operator interface to the file list is at the console
	   in sequential apha order in forward or backup mode.

	d) The file list is treated as a circular buffer. Forward
	   or backward scanning of the list wraps around the list
	   back to the beginning or ending respectively.

	e) The current list position file can be viewed at the 
	   Console, printed on the CP/M List device, or sent
	   to the CP/M Punch device.

	f) The current list position file may be deleted or renamed.
	   If renamed, only the new name must be entered.

	g) The current list position file may be copied, with the
	   same name, to any other operator selected disk drive.
	   The copy utilizes all of available memory as the copy
	   buffer for the ultimate in copy speed.

      	h) The current list can be deleted and the "WASH" operation
	   may be begun upon another operator selected disk drive.

	i) The program is fully implemented in 8080 assembly language
	   for speed, small size, and portability to any CP/M 2.2
	   or 1.4 system.  The MSDOS VERSION is of course in 8086
	   assembly language. No assumption is made upon the maximum
	   number of directory files other than available memory 
	   space for the list. (A directory with 1024 directory
	   file names takes 12 K bytes of storage. Assuming the
	   copy buffer minimum size requirement of 128 bytes, then
	   WASH should easily run in the minimum CP/M 2.2 20K 
	   System with no problems at all.) ALL directory and
	   disk I/O is handled through calls to the BDOS. This
	   will guarentee WASH compatibility with any CP/M system
	   implementation. This makes the program disk media
	   independent (all you have to do is get WASH.COM onto
	   your diskette or hard disk in the first place.

	This Program was Written by:

	Michael J. Karas
	MICRO RESOURCES
	2468 Hansen Court
	Simi Valley, California 93065
	(805) 527-7299
	September 20, 1981

	NOTE:  The WASH program, its source code, documentation file,
       	       and object code, has been released to the PUBLIC DOMAIN
               by Michael J. Karas. This program may be modified to suit
               your personal requirements or those of your friends. In 
               any case no COMMERCIAL or MONEY MAKING ventures with
               regard to SOFTWARE SALES or MODIFICATION and the subsequent
               SALE of the WASH program in WHOLE or any PART is permitted
               by the author. Further modification and public domain
       	       distribution of the WASH program must include:

		a) This NOTE,

		b) The name "WASH" must be retained,

		c) The original authorship notice
		   from above, and

		d) The MICRO RESOURCES Name in the Sign-on
		   Menu.

	MICRO RESOURCES reserves the right to modify this program at any
time for any purpose. The Intent of the above NOTE is intended for the public 
domain distribution of the WASH program and MICRO RESOURCES reserves the right
to utilize the WASH program for any application whatsoever including but not 
limited to commercial distribution and modification for custom applications
with or without the "WASH" name.


Modification of WASH
--------------------

	If you modify, enhance, or correct bugs in this program, please 
include a short statement of the modifications done and include your name 
and the date. The modification history log should be kept intact with the
source code file in "most recent first" order. Changes to program structure 
will generally require a change in the program version. The version number 
is documented in the signon message and the distribution program name as 
"WASH-10.ASM" in the specific case of the initial release 1.0.
 
	The format for update notices in the source file should follow the
format shown below:

Date: Sept. 20, 1981   Version Number: 1.0  Name: Michael J. Karas

Initial release to the public domain via the CP/M NET remote 
software access program operated by Kelly Smith, 3055 Waco Ave,
Simi Valley, CA 93063. (805) 527-9321/ PMMI modem.



Running WASH
------------

	The WASH program is run as a transient command under CP/M 2.2
or CP/M 1.4 as follows. The program creates a working list of all selected
file names on the selected drive. Examples of command formats are:

	A>WASH<cr>		<== WASH forms working list
				    of all files from default drive A:.

	A>WASH B:<cr>		<== WASH forms working list of all
				    files from selected drive B:.

	A>WASH *.COM<cr>	<== WASH formas working list of all
				    ".COM" files from default drive A:.

	WASH will boot up and read all selected file names from the selected
drive into a "MEMORY" list that is in ascending alphabetical order. The first
file name will be displayed with a ":" prompt awaiting some command from the
operator. The following summary describes WASH commands.

WASH Commands
-------------

	The Wash program permits entry of various commands while the console
cursor is positioned at a ":" prompt after the currently displayed file name
in the file name list.

**** File List Manipulation Comands.

	File Forward (SPACE or CARRIAGE RETURN) Command
	-----------------------------------------------

	This command will increment the displayed list pointer and 
	then display the  next file name in the list. If last file
	name in list is currently displayed, the message "End of List"
	is displayed and file name display wraps around to the first 
	file name.

	Backup (B) Command
	------------------

	This command will decrement the displayed list pointer and
	display the previous file name from the list. If the first file 
	name in the list is currently displayed, the message "Beginning
	of List" is displayed and the file name display wraps back to
	the last file name in the list.


**** File Operation Commands.

	View (V) File Command
	---------------------
	
	The contents of the currently displayed file name is output
	to the console screen. Text is normally assumed to be ASCII
	and file display ceases upon encountering a logical end of 
	file character (01AH) (ctl-z).

	Punch (P) File Command
	----------------------

	The contents of the currently displayed file name output
	to the CP/M logical Punch device. Text is normally assumed to 
	be ASCII and file punching ceases upon encountering a logical end 
	of file character (01AH) (ctl-z).

	List (L) File Command
	---------------------
 
	The contents of the currently displayed file name is output
	to the CP/M logical List device. Text is normally assumed to 
	be ASCII and file listing ceases upon encountering a logical 
	end of file character (01AH) (ctl-z).

	Copy (C) File Command
	---------------------

	This command allows the complete contents of the currently
	displayed file name to copied to a file on another operator
	selected drive with the same name. If the file name already 
	exists on the destiantion disk, the operator is asked if it
	should be replaced.

	Delete (D) File Command  ( changed to CONTROL-D to reduce accidents )
	-----------------------

	The file with name corresponding to the currently displayed 
	list name is deleted from the disk directory. After deletion
	the message "Deleted" is displayed at the console. Deleted 
	file name is also removed from the in memory list.

	Rename (R) File Command
	-----------------------

	The file name currently displayed is renamed to the operator 
	entered name in response to the "New Name ?" prompt. The list
	in memory is also updated to reflect the new file name.

**** Miscellaneous Commands.

	Exit (X) Command  ( may also use, Q or control-C )
	----------------

	Command when entered will terminate WASH operation and return
	system control to the CP/M Console Command Processor via a
	warm boot operation.

	Start (S) over on New Drive Command
	-----------------------------------

	Entry of the Start over command will cause the WASH program
	to make up a new directory name list in memory from the drive
	designator entered by the operator in response to the "New 
	Drive ?" prompt.


OPERATIONAL NOTES ON WASH
-------------------------

	Command entries not understood by WASH will cause display of a 
"?" character followed by redisplay of the same current list position
file name. Command entries, other than Backup, will generally execute
and then return to the command mode with the next file name from the list
displayed.

	Entry of a carriage return in response to the "New Name ?" prompt
of the Rename command or to the "New Drive ?" prompt of the Start Over
command will abort the command function and cause display of the next file
name in the file name list.

	The WASH program contains a liberal number of error checking
functions not normally seen by the operator unless an error condition
arises. These are always displayed with leading and trailing pairs of the 
plus sign character as:

	++ Error Message ++

Some of the error conditions are:

	++ Not Found ++

		command line wild card file specification
		name list is empty, or disk is empty.

		-or-

		delete, rename, copy source files not found.
		(most likely due to a diskette change)

	++ Name Already Exists ++

		attempt to rename a file to a name already present
		on the disk.

	++ File Cannot Be Opened ++

		output file for view, list, or punch, cannot be
		opened for reading. Most probable cause is due to
		a disk change.

	++ Source File Cannot Be Opened ++

		source file on a copy operation cannot be found on
		the disk. Most likely casued by a disk change.

	++ Cannot Select Same Disk as Source ++

		the copy to destination disk selected by the operator 
		must be different than the source disk.

	++ Destination Directory Full ++

		The destination file on a copy operation cannot be opened
		because the destination disk directory is full.

	++ No Memory Available For Copy Buffer ++ 

		Caused when size of in memory list is so large that an
		attempted copy operation can find no buffer space.

	++ Disk or Directory Full on Write ++

		Caused when a copy operation attempts to place a file 
		on a destination disk that does not have enough room
		for the file, or not enough room to contain all the 
		directory extent entries for the destination file.

	++ Destination Close Error ++

		Destination file on a copy operation cannot be closed
		most likely due to a full directory.

Looking at WASH in Action
-------------------------

	The following text is an example session with WASH at the console.
This dislay was made possible through use of Kelly Smith's new console
i/o capture program I/O-CAP.COM. The intepretation of the action below
should be self evident via the descriptions in the above sections.
The text "<== xxxxxxxxxxxx" indicates text typed in for documentation
purposes and not by the WASH program.


A>WASH<cr>				<== start up wash for *.* on A:


   MICRO RESOURCES DIRECTORY "WASH UTILITY" Ver 1.0B
		( MSDOS VERSION )

         Command	Function
         -------    ----------------------------
            V       View file at Console
            L       Print file to List Device
            P       Send file to Punch Device
            C       Copy file to another Disk
            R       Rename file
          ^ D       Delete file
          Q or X    Exit to DOS (Ctl-C also works)
            B       Backup one file in List
            S       Restart on another Drive
	  ? or H    List this command table
         sp or cr   Forward to next file in List


A: /       .COM   :  			<== space bar to go forward
A: ADIR    .COM   :  
A: ASM     .COM   :  
A: CONCAP  .COM   : B			<== B to backup
<  A: ASM     .COM   : B
<  A: ADIR    .COM   : B
<  A: /       .COM   : B

      Beginning of List			<== Backup past top of list

<  A: XSUB    .COM   : B
<  A: WORDMAS .COM   : B
<  A: WM      .HLP   : B
<  A: WASH    .HEX   : B
<  A: WASH    .DOC   : B
<  A: WASH    .COM   : B
<  A: WASH    .BAK   : B
<  A: WASH    .ASM   : B
<  A: USQ     .COM   : B
<  A: TYPESQ14.DQC   : B
<  A: TSQ     .COM   : B
<  A: SYSGEN  .COM   :  		     <== forward again
A: TSQ     .COM   : C  Destination Drive ? B <== Copy two files to B:
A: TYPESQ14.DQC   : C  Destination Drive ? B
A: USQ     .COM   :  
A: WASH    .ASM   :  
A: WASH    .BAK   :  
A: WASH    .COM   :  
A: WASH    .DOC   :  
A: WASH    .HEX   :  
A: WM      .HLP   :  
A: WORDMAS .COM   : B
<  A: WM      .HLP   : B
<  A: WASH    .HEX   : B
<  A: WASH    .DOC   : B
<  A: WASH    .COM   : B
<  A: WASH    .BAK   :^ D  Deleted		<== delete an old file
A: WASH    .COM   :  				<== I didn't want
A: WASH    .DOC   : S  New Drive ? B		<== Start over on new drive

						<== WASH signs on again for 
						    Drive B:
   MICRO RESOURCES DIRECTORY "WASH UTILITY" Ver 1.0B
		( MSDOS VERSION )

         Command	Function
         -------    ----------------------------
            V       View file at Console
            L       Print file to List Device
            P       Send file to Punch Device
            C       Copy file to another Disk
            R       Rename file
          ^ D       Delete file
          Q or X    Exit to DOS (Ctl-C also works)
            B       Backup one file in List
            S       Restart on another Drive
	  ? or H    List this command table
         sp or cr   Forward to next file in List


B: /       .COM   :  
B: TSQ     .COM   : B
<  B: /       .COM   : ^D  Deleted		<== delete a file on B:
B: TSQ     .COM   :  
B: TYPESQ14.DQC   :  
B: WASH    .ASM   :  
B: WASH    .BAK   : ^D  Deleted			<== and another
B: WASH    .COM   :  
B: WASHTEST.DOC   :  
B: WM      .HLP   : B
<  B: WASHTEST.DOC   : V			<== View a text file at crt
        JUST A SHORT MESSAGE TO DEMONSTRATE THE PHYSICAL
I/O CAPABILITIES OF "WASH" OF DOCMENTATION.


B: WM      .HLP   : B
<  B: WASHTEST.DOC   : P		<== Send text file to my TI-820
B: WM      .HLP   : B			    on the PUNCH port of CP/M
<  B: WASHTEST.DOC   : L		<== Send text file to printer on
B: WM      .HLP   :  			    the LIST port of CP/M
B: WORDMAS .COM   :  
B: Z2      .      :  
B: Z3      .      :  
B: Z4      .      :  

      End of List			<== forward scroll of list 
					    past end of list
B: TSQ     .COM   :  			<== to first one again
B: TYPESQ14.DQC   :  
B: WASH    .ASM   :  
B: WASH    .COM   :  
B: WASHTEST.DOC   :  
B: WM      .HLP   :  
B: WORDMAS .COM   :  
B: Z2      .      :  
B: Z3      .      : B
<  B: Z2      .      : C  Destination Drive ? A  <== copy to A:
B: Z3      .      :X			<== exit back to logged drive

A>   

+++ End of Documentation File








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0009

     Volume in drive A has no label
     Directory of A:\

    ACATALOG BAS      5120   1-23-83  11:09p
    ASCICHAR BAS      2432   1-21-83   4:24p
    ASCII    BAS       640   1-20-83   8:51p
    AUTOINST BAS      2048   1-23-83  11:21p
    AUTOPEEK BAS       896   1-20-83   9:41p
    AUTOST   BAS      6528   1-22-83   2:11p
    CHECKOUT BAS      6656   1-20-83   8:02p
    COLORSET BAS      2176   1-21-83  11:00p
    KEYSBAS  BAS      2944   1-20-83   8:38p
    KEYSMP   BAS      2560   1-20-83   8:36p
    LONGZONE BAS      2944   1-21-83  11:10p
    MENU     BAS       128  12-19-82   6:02p
    MINIPROG BAS      1280   1-22-83   1:48p
    MODULO   BAS       512   1-21-83  11:15p
    MONOSET  BAS      1664   1-20-83  10:12p
    NUMVERT  BAS      1152   1-20-83   9:27p
    OPKEYS   BAS       512   1-21-83   2:54p
    PAYMENT  BAS      3200   1-21-83  10:17p
    PEEK     BAS       896   1-21-83  11:13p
    Q        BAS       384   1-21-83   3:43p
    REAL$    BAS      1664   1-21-83   4:01p
    SYS      BAS       384   1-21-83   3:11p
    TIME     BAS       640   1-20-83   9:17p
    !        BAT        16   1-20-83  11:43p
    AUTOEXEC BAT        16   1-20-83  11:43p
    STARTUP  BAT        62   1-05-83   9:15p
    UPDATE   BAT        18   1-21-83  10:32a
    2COLOR   COM        22
    2MONO    COM        22
    DISKID   REV       128   1-23-83  11:41p
    2COLOR   SYS       256   1-16-83   5:24p
    2MONO    SYS       256   1-16-83   5:25p
    INDEX    DOC      6144  11-01-82   6:35p
    MDM7I    COM      7552  10-16-82   5:31a
    MDMIBM   ASM      4724  10-18-82   6:30p
    MDM7     DOC     12288  11-01-82   6:30p
    CRCK4    COM      1536  10-21-82   7:54p
    CRCK4    CPM      1408  11-01-82   6:37p
    LOOK     COM      1024  10-26-81
    FIND     COM       896  10-22-82   5:27p
    WASH     COM      3328  11-01-82   5:44p
    WASH     DOC     15872  11-01-82   5:53p
    SQUISH   BAS      6400   2-09-83  11:26a
    SQUISH   DOC      5566   2-09-83  11:52a
    CRC      TXT      2625  11-09-84   7:55a
           45 file(s)     117519 bytes
                           32768 bytes free
