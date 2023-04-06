---
layout: page
title: "PC-SIG Diskette Library (Disk #195)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0195/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0195"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-GRAF"

    A BASIC program to plot line drawing graphs of data sets.  Three
    different versions of the program are provided (PC-GRAF2, 3, 4,) to
    allow the user to choose the number of features and degree of IBM PC
    compatablilty required.  Data entry is from the keyboard or read in
    from data files.  Additional programs include computer use log, screen
    color control, and keyboard redefinition.
    
    System Requirements:  Some programs require color, BASIC
    
    How to Start:   To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult the .DOC files for additional
    program information.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    PC-GRAF  DOC  PC-GRAF documentation - to view use "Type pc-graf.doc"
    INSTALL  BAT  Installs DOS system and BASICA on PC-GRAF disk
    DEMOSUB  BAS  Demo program...How to call SUBGRAF from your own program
    PC-GRAF2 BAS  Fastest version of PC-GRAF with the least features
    LOGPRINT BAS  Program to print the computer use log.
    PC-GRAF4 BAS  PC-GRAF with color and B&W plots and plotter output
    SUBGRAF3 BAS  Plotting subroutine from PC-GRAF3
    SUBGRAF2 BAS  Plotting subroutine from PC-GRAF2
    SUBGRAF4 BAS  Plotting subroutine from PC-GRAF4
    SIMPLEX  BAS  Simplex function fitting algorithm
    PC-GRAF3 BAS  PC-GRAF with color and B&W plots... no plotter support
    LOGOFF   BAS  Logs end of session in log file. Gives total time
    LOGOFF   BAT  Batch file to run LOGOFF program
    LOGON    BAT  Batch file to run LOGON program
    README   BAK  Backup of disk description
    README   DOC  Disk description - to view use "type readme.doc"
    LOGON    BAS  Program to log start of computer session in log file
    SORT     EXE  Program to sort graph data
    CONVERT  BAS  Convert old GRAPH2 program files to PC-GRAF format
    LOGPRINT BAT  Batch file to run LOGPRINT
    CONFIG   SYS  System file required to install ANSI.SYS screen driver
    AUTOEXEC BAT  Batch file for PC-GRAF disk
    TESTPLOT DTA  Demonstration plot for use with PC-GRAF
    KEYDEF   BAT  Batch file to run KEYDEF
    KEYDEF   BAS  Program to allow redefinition of keyboard keys in DOS
    KEYDEF        File containing key redefinition commands.  Type to run
    COLOR    BAT  Runs COLOR program and activate color change
    COLOR    SCR  File that contains screen color commands. Type to run
    COLOR    BAS  Program to set screen foreground and background colors
    PRINTQUE DOC  Documentation for Printque
    PRINTQUE BAS  BASIC language printque for ASCII files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLOR.BAS

```bas
1000 '  COLOR           May 17,1984             Bob Shannon
1010 '
1020 '  Program to set the foreground and background color
1030 '  for text on the IBM color card for an RGB monitor.
1040 '
1050 '-------------------------------------------------------
1060 '
1070 ESC$=CHR$(27)
1080 CLS:COLOR 14,0,1
1090 PRINT :PRINT "Program to set the foreground and background colors"
1100 PRINT "  on an RGB monitor with the IBM PC computer Dos 2.0":PRINT
1110 PRINT :PRINT "            Bob Shannon   May 17,1984":PRINT :PRINT
1120 PRINT :PRINT "Specify Background Color :"
1130 FOR I=1 TO 8
1140 N=0:IF I=1 THEN N=7
1150 COLOR N,I-1,1:PRINT I,"                              "
1160 NEXT I
1170 PRINT :PRINT :COLOR 14,0,1:PRINT "Background color ?";
1180 A$=INKEY$:IF A$="" THEN 1180 ELSE BACK=VAL(A$):PRINT BACK
1190 PRINT :PRINT
1200 COLOR 15,BACK-1,BACK-1:PRINT :PRINT "Specify foreground color :":PRINT
1210 FOR I=1 TO 8
1230 COLOR I+7,BACK-1,BACK-1:PRINT I;"This is the foreground color"
1240 NEXT I
1250 PRINT :PRINT :PRINT "Foreground color :";
1260 A$=INKEY$:IF A$="" THEN 1260 ELSE FORE=VAL(A$):PRINT FORE
1270 PRINT :PRINT
1280 PRINT :PRINT "(H)i or (L)ow intensity : ";
1290 L$=INKEY$:IF L$<>"l" AND L$<>"L" AND L$<>"h" AND L$<>"H" THEN 1290
1295 PRINT L$
1300 '
1310 'now set up command to activate chosen colors
1320 '
1330 BRITE$="1":IF L$="l" OR L$="L" THEN BRITE$="0"
1340 IF BACK=1 THEN BACK$="40"
1350 IF BACK=2 THEN BACK$="44"
1360 IF BACK=3 THEN BACK$="42"
1370 IF BACK=4 THEN BACK$="46"
1380 IF BACK=5 THEN BACK$="41"
1390 IF BACK=6 THEN BACK$="45"
1400 IF BACK=7 THEN BACK$="43"
1410 IF BACK=8 THEN BACK$="47"
1420 IF FORE=1 THEN FORE$="30"
1430 IF FORE=2 THEN FORE$="34"
1440 IF FORE=3 THEN FORE$="32"
1450 IF FORE=4 THEN FORE$="36"
1460 IF FORE=5 THEN FORE$="31"
1470 IF FORE=6 THEN FORE$="35"
1480 IF FORE=7 THEN FORE$="33"
1490 IF FORE=8 THEN FORE$="37"
1500 '
1510 I$=ESC$+"["+BRITE$+"m"
1520 I$=I$+ESC$+"["+BACK$+"m"
1530 I$=I$+ESC$+"["+FORE$+"m"
1540 '
1550 OPEN "c:color.scr" FOR OUTPUT AS #1
1560 PRINT #1,I$
1570 CLOSE #1
1580 '
1590 SYSTEM
```

## CONVERT.BAS

```bas
1000 '
1010 '  CONVERT         21 Feb 1985             Bob Shannon
1020 '
1030 '  program to convert old data and specifications files to new format.
1040 '  If you have data files from the program GRAPH2, the new version
1060 '  PC-GRAF2 has a different file formats.  This program (CONVERT) will
1070 '  take in a data file from GRAPH2 and convert it to the format of
1080 '  the new programs, which all use the same format.  You will be
1090 '  prompted for the old data file name, and then again for a name
1100 '  of the new file.  If you specify the same name for both prompts,
1110 '  the old data file will be overwritten and destroyed.
1120 '
1130 '------------------------------------------------------------------
1140 '
1150 DIM XX(5,100),YY(5,100)
1160 '
2650 '
2660 '  Read in data from disk file
2670 '
2680 SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  READ GRAPH2 DATA FILE IN FROM DISK ":PRINT :COLOR 14,0,1
2690 PRINT "Data files on this disk :":PRINT
2695 PRINT STRING$(79,205)
2700 FILES"*.dta
2705 PRINT STRING$(79,205)
2710 PRINT
2720 INPUT "Name of input data file ";DATAIN$:IF DATAIN$="" THEN 2720
2730 DATAIN$=DATAIN$+".dta"
2740 OPEN DATAIN$ FOR INPUT AS #1
2760 FOR I=1 TO 5
2770    INPUT #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I)
2780            FOR J=1 TO NPTSET(I)
2790            INPUT #1,XX(I,J),YY(I,J)
2800            NEXT J
2810 NEXT I
2815 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER
2820 CLOSE #1
2840 '
2850 '  Write out data to disk file
2860 '
2870 SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  WRITE DATA OUT TO DISK FILE in new Format ":PRINT:COLOR 14,0,1
2880 PRINT "Data files on this disk:":PRINT
2885 PRINT STRING$(79,205)
2890 FILES"*.dta
2895 PRINT STRING$(79,205)
2900 INPUT "Name of output data file ";DATAOUT$:IF DATAOUT$="" THEN 2900
2910 DATAOUT$=DATAOUT$+".dta"
2920 OPEN DATAOUT$ FOR OUTPUT AS #1
2940 FOR I=1 TO 5
2950 WRITE #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
2960    FOR J=1 TO NPTSET(I)
2970    WRITE #1,XX(I,J),YY(I,J)
2980    NEXT J
2990 NEXT I
2995 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3000 CLOSE #1
3010 '
```

## DEMOSUB.BAS

```bas
1000 '
1010 '  DEMO            21 Feb 1985             Bob Shannon
1020 '
1030 ' Demonstration program of how to call SUBGRAF as a
1040 ' subroutine in BASIC.
1050 '
1060 '  1. Load BASICA and load this program
1070 '  2. After the ok prompt type MERGE"SUBGRAF4
1080 '  3. Run
1090 '
1100 '---------------------------------------------------------
1110 '
1120 '  First dimension the arrays to be used - both x() and x1()
1130 '   are needed by SUBGRAF
1140 '
1150 DIM X(100),X1(100),Y(100),Y1(100)
1160 '
1170 '
1180 '  Now set parameter values
1190 '
1200 XMIN=0:XMAX=10:XLIN=0:XLEN=7.:XLAB$="X axis label"
1210 YMIN=1:YMAX=100:YLIN=1:YLEN=5:YLAB$="Y axis label"
1220 RESOLUT=0:AXISCOLR=2:BACKOLOR=8:PALET.P=1
1230 LAB1$="First line"
1240 LAB2$="Second line"
1250 LAB3$="Third line"
1260 CORNER=2
1270 NPTS=10
1280 '
1290 '
1300 '  Calculate and set data points
1310 '
1320 FOR III=1 TO 3
1330  I=III
1340    FOR J=1 TO NPTS
1350 '
1360            X(J)=J
1370            Y(J)=(J*2)^(I/2)
1380    NEXT J
1390 '
1400 '  call subroutine
1410 '
1420   SYM=I+1
1430    LINCOLOR=I+1
1440    PTCOLOR=1
1450    LTYPE=I
1460    SIZE=I
1470    MORE=1:IF I=1 THEN MORE=0
1480    GOSUB 60000
1490 '
1500 '
1510 NEXT III
1520 '
1530 '  Now while the plot is displayed try out Alt-P and Alt-B
1540 '  to change the pallette and background colors.
1550 '
1560 A$=INKEY$:IF A$="" THEN 1560 ELSE STOP
1570 '
```

## KEYDEF.BAS

```bas
1000 '   ***KEYDEF    - DOS key reassign program  by Michael L. O'Neill
1010 '           PC Magazine May 29,1984  Page 387-388
1020 '
1030 '   Modified for color monitor by Bob Shannon May 10,1984
1040 '
1050 ' For DOS 2.0 only - and you must have ANSI.SYS on your disk !
1060 '   Put the line
1070 '                   DEVICE = ANSI.SYS
1080 '                                   in your CONFIG.SYS file
1090 '   If you don't have a CONFIG.SYS file, one is automatically created.
1100 '
1110 '  To use : 1. Run this program under BASIC or BASICA
1120 '                   (use the } character for <return>
1130 '           2. This program stores data in a file you name.
1140 '                   In DOS, enter the command:  TYPE name where
1150 '                   name is the name of this data file.
1160 '
1170 '-------------------------------------------------------------
1190 Z$="}"
1200 BL!=190
1210 WIDTH 80:KEY OFF:CLS
1220 ON ERROR GOTO 1360
1230 FOR I= 1 TO 10:KEY I,"":NEXT I
1240 DIM A$(20)          'Name of redefined key
1250 DIM B$(20)          'string assigned to key
1260 DIM C$(20)          'string saved to DOS file
1270 DIM E$(132)         'Extended code key names
1280 GOSUB 2300          'Check for CONFIG>SYS file on disk
1290 GOSUB 1940           'Load extended codes into e$ array
1300 GOSUB 1420           'Ask filename
1310 GOSUB 1510           'Print existing definitions to screen
1320 GOSUB 1640           'solicit key to be redefined or quit
1330 GOSUB 2150
1340 CLS:SYSTEM
1350 '
1360 '   error handling subroutine
1370 '
1380 PRINT "Error code ";ERR;" in line #",ERL
1390 IF ERL=1460 AND ERR=53 THEN RESUME 1490
1400 IF ERL=2470 AND ERR=53 THEN RESUME 2490 ELSE END
1410 '
1420 '   open key file to hold definitions
1430 '
1440 LOCATE 12,1:CLS
1450 INPUT "Enter name of file for Keyboard Reassignments :",F$:CLS
1460 OPEN "i",#1,F$
1470 I=1:WHILE NOT EOF(1):LINE INPUT #1,C$(I):I=I+1:WEND
1480 CLOSE
1490 RETURN
1500 '
1510 '   List current definitions
1520 '
1530 CLS:LOCATE 1,1:PRINT "Filename :";F$;TAB(30);"CARRIAGE RETURN = ";Z$;
1540 R=0:I=1:WHILE C$(I)<>""
1550 GOSUB 1820
1560 R=R+LEN(B$(I))+L1
1570 LOCATE I+2,5:PRINT A$(I),B$(I);
1580 I=I+1:WEND
1590 LOCATE 25,1:PRINT SPACE$(60);
1600 LOCATE 25,1:PRINT "Press key to be redefined - Press ENTER to quit.";
1610 LOCATE 1,60:PRINT "BYTES LEFT ";BL!-R-I+1;
1620 RETURN
1630 '
1640 '   Redefine a key
1650 '
1660 I$=INKEY$:IF I$="" THEN 1660 ELSE IF I$=CHR$(13) THEN RETURN
1670 IF LEN(I$)=1 THEN A$(I)=I$:M$=CHR$(27)+"["+MID$(STR$(ASC(A$(I))),2,3)
1680 IF ASC(I$)=32 THEN A$(I)="Space Bar"
1690 IF LEN(I$)<>2 THEN 1720
1700 A$(I)=E$(ASC(RIGHT$(I$,1)))
1710 M$=CHR$(27)+"[0;"+MID$(STR$(ASC(RIGHT$(I$,1))),2)
1720 FOR J=1 TO 20:IF A$(J)=A$(I) THEN I=J:J=20
1730 NEXT J
1740 LOCATE 25,1:PRINT SPACE$(60);:LOCATE 25,1:N$="p"
1750 PRINT "Enter new string for key  ";A$(I);":";:LINE INPUT;B$(I)
1760 IF B$(I)="" THEN GOSUB 2240:GOTO 1790
1770 IF INSTR(B$(I),Z$)<>0 THEN B$(I)=LEFT$(B$(I),INSTR(B$(I),Z$)-1):N$=";13p"
1780 C$(I)=M$+";"+CHR$(34)+B$(I)+CHR$(34)+N$
1790 GOSUB 1510
1800 RETURN 1320
1810 '
1820 '   Get key name and redefinition
1830 '
1840 IF MID$(C$(I),3,1)="0" THEN L1=2:GOTO 1880
1850 L1=1:A$(I)=CHR$(VAL(MID$(C$(I),3,INSTR(C$(I),";")-3)))
1860 IF MID(C$(I),3,2)="32" THEN A$(I)="Space Bar"
1870 GOTO 1890
1880 A$(I)=E$(VAL(MID$(C$(I),5,INSTR(5,C$(I),";")-5)))
1890 B1=INSTR(C$(I),CHR$(34))+1
1900 B$(I)=MID$(C$(I),B1,INSTR(B1,C$(I),CHR$(34))-B1)
1910 IF INSTR(C$(I),";13p")<>0 THEN B$(I)=B$(I)+Z$
1920 RETURN
1930 '
1940 '   Fill E$ array with Extended codes
1950 '
1960 E$(15)="Shift Tab"
1970 GOSUB 2130:DATA 16,25,Alt-Q,Alt-W,Alt-E,Alt-R,Alt-T,Alt-Y,Alt-U,Alt-I
1980 DATA Alt-O,Alt-P
1990 GOSUB 2130:DATA 30,38,Alt-A,Alt-S,Alt-D,Alt-F,Alt-G,Alt-H,Alt-J,Alt-K,ALt-L
2000 GOSUB 2130:DATA 44,50,Alt-Z,Alt-X,Alt-C,Alt-V,ALt-B,Alt-N,Alt-M
2010 GOSUB 2130:DATA 59,68,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10
2020 GOSUB 2130:DATA 71,83,Home,Csr Up,Pg Up,0,Csr Left,0,Csr Right,0
2030 DATA End,Csr Down,Pg Dn,Ins,Del
2040 GOSUB 2130:DATA 84,93,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10
2050 GOSUB 2130:DATA 94,103,C1,C2,C3,C4,C5,C6,C7,C8,C9,C10
2060 GOSUB 2130:DATA 104,113,A1,A2,A3,A4,A5,A6,A7,A8,A9,A10
2070 GOSUB 2130:DATA 114,119,Cntrl-Prtsc,Crtl-Csr Left,Ctrl-Csr Rt,Ctrl-End
2080 DATA Ctrl-Pg Dn,Ctrl-Home
2090 GOSUB 2130:DATA 120,132,Alt-1,Alt-2,Alt-3,Alt-4,Alt-5,Alt-6,Alt-7,Alt-8
2100 DATA Alt-9,Alt-0,Alt-,Alt=,Ctrl-PgUp
2110 RETURN
2120 '
2130 READ J1,J2:FOR J=J1 TO J2:READ E$(J):NEXT :RETURN
2140 '
2150 '  Save to disk and close file
2160 '
2170 LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,1:PRINT "Writing to file ";F$
2180 OPEN "o",#1,F$
2190 I=1:WHILE C$(I)<>""
2200 PRINT #1,C$(I)
2210 I=I+1:WEND
2220 CLOSE 1:RETURN
2230 '
2240 '  delete an item
2250 '
2260 A$(I)=""
2270 WHILE C$(I+1)<>"":C$(I)=C$(I+1):I=I+1:WEND
2280 C$(I)="":RETURN
2290 '
2300 '  Create file CONFIG.SYS if necessary
2310 X$=STRING$(70,205):LOCATE 1,6:PRINT X$:LOCATE 23,6:PRINT X$;
2320 FOR I=2 TO 22:LOCATE I,5:PRINT CHR$(186);:LOCATE I,76:PRINT CHR$(186);:NEXT I
2330 LOCATE 1,5:PRINT CHR$(201);:LOCATE 1,76:PRINT CHR$(187);
2340 LOCATE 23,5:PRINT CHR$(200);:LOCATE 23,76:PRINT CHR$(188);
2350 LOCATE 5,28:PRINT "KEYDEF  - by Michael O'Neil";
2360 LOCATE 15,17:PRINT "Program to define or change keyboard assignments";
2370 LOCATE 16,17:PRINT " Allows defining all 40 function keys and cursor";
2380 LOCATE 17,17:PRINT " control keys and all normal keys in the ALT state.";
2390 LOCATE 7,20:PRINT "BYTE Magazine   May 29,1984    p 387-388";
2400 LOCATE 24,18:PRINT "Insert disk to recieve key reassignment file ";
2410 LOCATE 18,20:PRINT "1. Put device=ansi.sys in your CONFIG.SYS file";
2420 LOCATE 19,20:PRINT "2. Run this program - creates file you name";
2430 LOCATE 20,20:PRINT "3. Type or copy that file to screen to activate";
2440 LOCATE 11,23:PRINT "Modified  May 10,1984 by Bob Shannon";
2450 LOCATE 25,25:PRINT "Press any key when ready";
2460 I$=INKEY$:IF I$="" THEN 2460
2470 OPEN "i",#2,"config.sys"
2480 CLOSE 2:GOTO 2520
2490 OPEN "o",#2,"config.sys"
2500 PRINT  #2,"device=ansi.sys:;
2510 CLOSE 2
2520 RETURN
```

## LOGOFF.BAS

```bas
1000 '
1010 '----------------------------------------------------------------
1020 '  Logoff.BAS               July 14,1984             Bob Shannon
1030 '
1040 '  Program to store log of system use in disk file.  The user
1050 '  may enter a message to describe each use if desired.
1060 '  When finished with computer type "basica logoff" to log off
1070 '  and get total time of use and message stored in file.
1080 '
1090 '----------------------------------------------------------------
1100 '
1110 WIDTH 80
1120 ON ERROR GOTO 1930
1130 DEFINT I
1140 DIM DST(100),DEND(100),MST(100),MEND(100),MESS$(100),NDAYS(12)
1150 DIM ID$(10),DAT$(1000),TIM$(1000),DURATION(1000),LABL$(10),MSG$(1000)
1160 NDAYS(1)=0:NDAYS(2)=31:NDAYS(3)=59:NDAYS(4)=90:NDAYS(5)=120:NDAYS(6)=151
1170 NDAYS(7)=181:NDAYS(8)=212:NDAYS(9)=243:NDAYS(10)=273:NDAYS(11)=304:NDAYS(12)=334
1180 ID$(1)="a:A.log":ID$(2)="a:B.log":ID$(3)="a:C.log"
1190 ID$(4)="a:D.log":ID$(5)="a:e.log":ID$(6)="a:F.log"
1200 ID$(7)="a:G.log":ID$(8)="a:H.log"
1210 LABL$(1)="Alfred E. Neumann":LABL$(2)="Bob Shannon"
1220 LABL$(3)="Your Name Here":LABL$(4)="Anyone"
1230 LABL$(5)="E":LABL$(6)="F"
1240 LABL$(7)="G":LABL$(8)="H"
1250 KEY OFF
1260 '
1270 '  display choices for logoff
1280 '
1290 CLS
1300 COLOR 12,0,1:LOCATE 4,1:PRINT STRING$(79,205);
1310 COLOR 15,0,1
1320 LOCATE 5,5:PRINT "Signing off the IBM system - please indicate your use";
1330 COLOR 12,0,1:LOCATE 6,1:PRINT STRING$(79,205);
1340 COLOR 14,0,1
1350 LOCATE 10,10:PRINT "1. ";LABL$(1)
1360 LOCATE 11,10:PRINT "2. ";LABL$(2)
1370 LOCATE 12,10:PRINT "3. ";LABL$(3)
1380 LOCATE 13,10:PRINT "4. ";LABL$(4)
1390 LOCATE 14,10:PRINT "5. ";LABL$(5)
1400 LOCATE 15,10:PRINT "6. ";LABL$(6)
1410 LOCATE 16,10:PRINT "7. ";LABL$(7)
1420 LOCATE 17,10:PRINT "8. ";LABL$(8)
1430 COLOR 13,0,1
1440 LOCATE 22,5:PRINT "Sign off ? ";
1450 A$=INKEY$:IF VAL(A$)<1 OR VAL(A$)>8 THEN 1450
1460 LBL$=LABL$(VAL(A$))
1470 N$=ID$(VAL(A$))
1480 DT$=DATE$
1490 TM$=TIME$
1500 MONTH=VAL(LEFT$(DT$,2))
1510 DAY=VAL(MID$(DT$,4,2))
1520 YEAR=VAL(RIGHT$(DT$,2))
1530 X$=STRING$(80,205)
1540 PRINT
1550 '
1560 '  open storage file and input stored values
1570 '
1580 OPEN N$ FOR INPUT AS #1
1590 INPUT #1,NLOG,TOTAL,LBL$
1600 FOR I=1 TO NLOG
1610    INPUT #1,DAT$(I)
1620    INPUT #1,TIM$(I)
1630    INPUT #1,DURATION(I)
1640    INPUT #1,MSG$(I)
1650 NEXT I
1660 INPUT #1,DAYL,MONTHL,YEARL,NUMBER
1670 FOR I=1 TO NUMBER:INPUT #1,MST(I),DST(I),MEND(I),DEND(I),MESS$(I):NEXT I
1680 CLOSE #1
1690 '
1700 '  Update Memo file
1710 '
1720 TLAST=VAL(MSG$(NLOG))
1730 IF DURATION(NLOG)<20 THEN 1900 ELSE INPUT "Input line describing your use :",MSG$(NLOG)
1740 DURATION(NLOG)=(TIMER/3600.)-(DURATION(NLOG)/3600.)+TLAST
1745 PRINT :PRINT "Total time  :";DURATION(NLOG);" Hours"
1750 TOTAL=TOTAL+DURATION(NLOG)
1760 DURATION(NLOG)=DURATION(NLOG)+TLAST
1770 OPEN N$ FOR OUTPUT AS #1
1780 PRINT #1,NLOG,TOTAL,LBL$
1790 FOR I=1 TO NLOG
1800    PRINT #1,DAT$(I)
1810    PRINT #1,TIM$(I)
1820    PRINT #1,DURATION(I)
1830    PRINT #1,MSG$(I)
1840 NEXT I
1850 PRINT #1,DAY,MONTH,YEAR,NUMBER
1860 FOR I=1 TO NUMBER
1870    PRINT #1,MST(I),DST(I),MEND(I),DEND(I),MESS$(I)
1880 NEXT I
1890 CLOSE #1
1900 SYSTEM
1910 '
1920 '
1930 PRINT "error number :";ERR;"  in line ";ERL:IF ERR<>53 THEN 1300
1940 NLOG=1
1950 NUMBER=1
1960 MST(1)=1:MEND(1)=12:DST(1)=1:DEND(1)=30:MESS$(1)="new file message"
1970 TOTAL=0:DAT$(1)=DATE$:TIM$(1)=TIME$:DURATION(1)=TIMER
1980 CLOSE #1
1990 GOTO 1700
```

## LOGON.BAS

```bas
1000 '
1010 '----------------------------------------------------------------
1020 '  Logon.BAS               July 7,1984             Bob Shannon
1030 '
1040 '  Program to keep track of system use and display messages
1050 '  as memos or reminders on specified dates or for certain
1060 '  periods of time.  To invoke this utility place LOGON in
1070 '  your AUTOEXEC.BAT file. (Make sure BASICA is on the boot disk)
1080 '  When finished with computer type "logoff" to log off
1090 '  and get total time of use stored in file.
1100 '
1110 '  To customize this program for your own use change the file
1120 '  names in statements 1230 to 1250, and change the menu prompt
1130 '  messages in statements 1260 to 1290.
1135 ' Similiar changes need to be made in LOGOFF.BAS and LOGPRINT.BAS.
1140 '----------------------------------------------------------------
1150 '
1160 WIDTH 80
1170 ON ERROR GOTO 2670
1180 DEFINT I
1190 DIM DST(100),DEND(100),MST(100),MEND(100),MESS$(100),NDAYS(12)
1200 DIM ID$(10),DAT$(1000),TIM$(1000),DURATION(1000),LABL$(10),MSG$(1000)
1210 NDAYS(1)=0:NDAYS(2)=31:NDAYS(3)=59:NDAYS(4)=90:NDAYS(5)=120:NDAYS(6)=151
1220 NDAYS(7)=181:NDAYS(8)=212:NDAYS(9)=243:NDAYS(10)=273:NDAYS(11)=304:NDAYS(12)=334
1225 KEY 10,"SYSTEM"+CHR$(13):KEY ON
1230 ID$(1)="a:A.log":ID$(2)="a:B.log":ID$(3)="a:C.log"
1240 ID$(4)="a:D.log":ID$(5)="a:E.log":ID$(6)="a:F.log"
1250 ID$(7)="a:G.log":ID$(8)="a:H.log"
1260 LABL$(1)="Alfred E Neumann":LABL$(2)="Bob Shannon"
1270 LABL$(3)="Your Name Here":LABL$(4)="Anyone"
1280 LABL$(5)="Fun and Games":LABL$(6)="F"
1290 LABL$(7)="G":LABL$(8)="H"
1300 KEY OFF
1310 '
1320 '  display choices for logon
1330 '
1340 CLS
1350 COLOR 12,0,1:LOCATE 4,1:PRINT STRING$(79,205);
1360 COLOR 15,0,1
1370 LOCATE 5,5:PRINT "Welcome to the IBM system - please sign on";
1380 COLOR 12,0,1:LOCATE 6,1:PRINT STRING$(79,205);
1390 COLOR 14,0,1
1400 LOCATE 10,10:PRINT "1. ";LABL$(1)
1410 LOCATE 11,10:PRINT "2. ";LABL$(2)
1420 LOCATE 12,10:PRINT "3. ";LABL$(3)
1430 LOCATE 13,10:PRINT "4. ";LABL$(4)
1440 LOCATE 14,10:PRINT "5. ";LABL$(5)
1450 LOCATE 15,10:PRINT "6. ";LABL$(6)
1460 LOCATE 16,10:PRINT "7. ";LABL$(7)
1470 LOCATE 17,10:PRINT "8. ";LABL$(8)
1480 COLOR 13,0,1
1490 LOCATE 22,5:PRINT "Your choice ? ";
1500 A$=INKEY$:IF VAL(A$)<1 OR VAL(A$)>8 THEN 1500
1510 LBL$=LABL$(VAL(A$))
1520 N$=ID$(VAL(A$))
1530 DT$=DATE$
1540 TM$=TIME$
1550 MONTH=VAL(LEFT$(DT$,2))
1560 DAY=VAL(MID$(DT$,4,2))
1570 YEAR=VAL(RIGHT$(DT$,2))
1580 X$=STRING$(80,205)
1590 T=TIMER
1600 '
1610 '  open storage file and update
1620 '
1630 OPEN N$ FOR INPUT AS #1
1640 INPUT #1,NLOG,TOTAL,LBL$
1660 FOR I=1 TO NLOG
1670    INPUT #1,DAT$(I)
1680    INPUT #1,TIM$(I)
1690    INPUT #1,DURATION(I)
1700    INPUT #1,MSG$(I)
1710 NEXT I
1720 INPUT #1,DAYL,MONTHL,YEARL,NUMBER
1722 H=VAL(LEFT$(TIM$(NLOG),2)):M=VAL(MID$(TIM$(NLOG),4,2)):SEC=VAL(MID$(TIM$(NLOG),6,2))
1725 TLAST=(H*3600)+(M*60)+SEC
1726 IF DAY<>DAYL OR MONTHL<>MONTH OR YEARL<>YEAR THEN 1735
1728 IF DURATION(NLOG)<20 THEN TLAST=TLAST+(3600*DURATION(NLOG))
1730 IF T<TLAST+3600 THEN DURATION(NLOG)=TLAST: GOTO 1740
1735 NLOG=NLOG+1:DURATION(NLOG)=TIMER:TIM$(NLOG)=TIME$:DAT$(NLOG)=DATE$
1740 FOR I=1 TO NUMBER:INPUT #1,MST(I),DST(I),MEND(I),DEND(I),MESS$(I):NEXT I
1750 CLOSE #1
1760 '
1770 '  display memos
1780 '
1790 CLS:COLOR 15,0,1:PRINT "    Memo log ...  ";LBL$;
1800 COLOR 3,0,1
1810 X$=STRING$(79,205):PRINT X$
1820 COLOR 13,0,1:PRINT "      Today is        ";MONTH;"-";DAY;"-";YEAR;"     ";TIME$
1830 PRINT  "      Last signed on  ";MONTHL;"-";DAYL;"-";YEARL;:PRINT "     ";TIM$(NLOG-1);:PRINT
1840 PRINT X$
1850 COLOR 14,0,1
1860 FOR I=1 TO NUMBER
1870    IF NOT(MONTH>=MST(I) AND MONTH<=MEND(I)) THEN 1950
1880    DD=DAY+(NDAYS(MONTH)):DDS=DST(I)+(NDAYS(MST(I))):DDE=DEND(I)+(NDAYS(MEND(I)))
1890    IF NOT (DD>=DDS AND DD<=DDE) THEN 1780
1900    NX=LEN(MESS$(I))+6:X$=STRING$(NX,205):PRINT
1910    COLOR 12,0,1:PRINT "   ";CHR$(201);:PRINT X$;:PRINT CHR$(187)
1920    PRINT "   ";CHR$(186);:COLOR 14,0,1:PRINT "   ";MESS$(I);"   ";:COLOR 12,0,1:PRINT CHR$(186)
1930    PRINT "   ";CHR$(200);:PRINT X$;:PRINT CHR$(188)
1940 '
1950 NEXT I
1960 LOCATE 24,2:COLOR 10,0,1:PRINT "Hit any key to continue (hit e to edit memos)";
1970 A$=INKEY$:IF A$="" THEN 1970
1980 IF A$="e" THEN 2190
1990 '
2000 '  Update Memo file
2010 '
2020 OPEN N$ FOR OUTPUT AS #1
2030 PRINT #1,NLOG,TOTAL,LBL$
2040 FOR I=1 TO NLOG
2050    PRINT #1,DAT$(I)
2060    PRINT #1,TIM$(I)
2070    PRINT #1,DURATION(I)
2080    PRINT #1,MSG$(I)
2090 NEXT I
2100 PRINT #1,DAY,MONTH,YEAR,NUMBER
2110 FOR I=1 TO NUMBER
2120    PRINT #1,MST(I),DST(I),MEND(I),DEND(I),MESS$(I)
2130 NEXT I
2140 CLOSE #1
2150 SYSTEM
2160 '
2170 '  This section to edit memos
2180 '
2190 CLS:COLOR 10,0,1
2200 COLOR 12,0,1:LOCATE 1,10:PRINT  "Memos currently defined  ";MONTH;"-";DAY;"-";YEAR
2210 LOCATE 3,2:PRINT "#     Start     Stop      Message";
2220 COLOR 9,0,1:X$=STRING$(80,205):LOCATE 4,1:PRINT X$:LOCATE 2,1:PRINT X$:COLOR 10,0,1
2230 PRINT
2240 FOR I=1 TO NUMBER
2250    PRINT I;".  ";MST(I);"-";DST(I);"   ";MEND(I);"-";DEND(I);
2260    MLEN=LEN(MESS$(I)):HORIZ=28:IF MLEN>50 THEN PRINT :HORIZ=5
2270    LOCATE ,HORIZ:PRINT MESS$(I)
2280 NEXT I
2290 COLOR 9,0,1:PRINT X$:COLOR 13,0,1
2300 '
2310 INPUT "Type number of memo to delete, or new number for new memo :";N
2320 IF N<=0 THEN 2000
2330 IF N>NUMBER OR MST(N)=0 THEN 2410
2340 '
2350 IF N=NUMBER THEN NUMBER=NUMBER-1
2360 DST(N)=0:DEND(N)=0:MST(N)=0:MEND(N)=0:MESS$(N)="      0"
2370 GOTO 2170
2380 '
2390 '  get information for new memo
2400 '
2410 CLS:COLOR 10,0,1
2420 PRINT :PRINT "Memo starting date "
2430 INPUT "  Month:",STM
2440 INPUT "  Day  :",STD
2450 PRINT :PRINT :COLOR 13,0,1:PRINT "Memo ending date "
2460 INPUT "  Month:",ENDM
2470 IF ENDM=0 THEN ENDM=STM:ENDD=STD:ENDY=STY:GOTO 2490
2480 INPUT "  Day  :",ENDD
2490 PRINT :PRINT :COLOR 14,0,1:PRINT "Input message for these dates "
2500 INPUT MESG$
2510 '
2520 FOR I=1 TO NUMBER
2530    IF MEND(I)>0 THEN 2570
2540    MST(I)=STM:MEND(I)=ENDM:DST(I)=STD:DEND(I)=ENDD
2550    MESS$(I)=MESG$
2560    GOTO 2170
2570 NEXT I
2580 '
2590 NUMBER=NUMBER+1:I=NUMBER
2600 MST(I)=STM:MEND(I)=ENDM:DST(I)=STD:DEND(I)=ENDD
2610 MESS$(I)=MESG$
2620 GOTO 2170
2630 '
2640 CLOSE #1:SYSTEM
2650 END
2660 '
2670 PRINT "error number :";ERR;"  in line ";ERL:IF ERR<>53 THEN 1350
2680 NLOG=1
2690 NUMBER=1
2700 MST(1)=1:MEND(1)=12:DST(1)=1:DEND(1)=30:MESS$(1)="You have just created a new log-on file - Welcome"
2710 TOTAL=0:DAT$(1)=DATE$:TIM$(1)=TIME$:DURATION(1)=TIMER
2720 CLOSE #1
2730 GOTO 1770
```

## LOGPRINT.BAS

```bas
1000 '
1010 '----------------------------------------------------------------
1020 '  printlog.bas             July 14,1984             Bob Shannon
1030 '
1040 '  Program to print record of system use as stored in the log
1050 '  disk file at logon time by the program logon.bas.
1100 '
1110 '----------------------------------------------------------------
1120 '
1130 WIDTH 80
1140 DEFINT I
1150 DIM DST(100),DEND(100),MST(100),MEND(100),MESS$(100),NDAYS(12)
1160 DIM ID$(10),DAT$(1000),TIM$(1000),DURATION(1000),LABL$(10),MSG$(1000)
1170 NDAYS(1)=0:NDAYS(2)=31:NDAYS(3)=59:NDAYS(4)=90:NDAYS(5)=120:NDAYS(6)=151
1180 NDAYS(7)=181:NDAYS(8)=212:NDAYS(9)=243:NDAYS(10)=273:NDAYS(11)=304:NDAYS(12)=334
1190 ID$(1)="a:A.log":ID$(2)="a:B.log":ID$(3)="a:C.log"
1200 ID$(4)="a:D.log":ID$(5)="a:e.log":ID$(6)="a:F.log"
1210 ID$(7)="a:G.log":ID$(8)="a:H.log"
1211 LABL$(1)="Alfred E. Neumann":LABL$(2)="Bob Shannon"
1212 LABL$(3)="Your Name Here":LABL$(4)="Anyone"
1213 LABL$(5)="E":LABL$(6)="F"
1214 LABL$(7)="G":LABL$(8)="H"
1220 KEY OFF
1228 '
1230 '  display choices for printing
1232 '
1240 CLS
1250 COLOR 12,0,1:LOCATE 4,1:PRINT STRING$(79,205);
1260 COLOR 15,0,1
1270 LOCATE 5,5:PRINT "Printing system log for the IBM system - please indicate log file";
1280 COLOR 12,0,1:LOCATE 6,1:PRINT STRING$(79,205);
1290 COLOR 14,0,1
1300 LOCATE 10,10:PRINT "1. ";LABL$(1)
1310 LOCATE 11,10:PRINT "2. ";LABL$(2)
1320 LOCATE 12,10:PRINT "3. ";LABL$(3)
1330 LOCATE 13,10:PRINT "4. ";LABL$(4)
1340 LOCATE 14,10:PRINT "5. ";LABL$(5)
1350 LOCATE 15,10:PRINT "6. ";LABL$(6)
1360 LOCATE 16,10:PRINT "7. ";LABL$(7)
1370 LOCATE 17,10:PRINT "8. ";LABL$(8)
1380 COLOR 13,0,1
1390 LOCATE 22,5:PRINT "Print ? ";
1400 A$=INKEY$:IF VAL(A$)<1 OR VAL(A$)>8 THEN 1400
1405 LBL$=LABL$(VAL(A$))
1410 N$=ID$(VAL(A$))
1430 DT$=DATE$
1440 TM$=TIME$
1450 MONTH=VAL(LEFT$(DT$,2))
1460 DAY=VAL(MID$(DT$,4,2))
1470 YEAR=VAL(RIGHT$(DT$,2))
1480 X$=STRING$(80,205)
1482 PRINT
1490 '
1500 '  open storage file and input stored values
1510 '
1520 OPEN N$ FOR INPUT AS #1
1535 INPUT #1,NLOG,TOTAL,LBL$
1540 FOR I=1 TO NLOG
1541    INPUT #1,DAT$(I)
1542    INPUT #1,TIM$(I)
1543    INPUT #1,DURATION(I)
1544    INPUT #1,MSG$(I)
1545 NEXT I
1550 INPUT #1,DAYL,MONTHL,YEARL,NUMBER
1565 FOR I=1 TO NUMBER:INPUT #1,MST(I),DST(I),MEND(I),DEND(I),MESS$(I):NEXT I
1566 CLOSE #1
1570 '
1600 '
1610 '  now print log of sign-ons
1620 '
1622 CLS
1625 COLOR 11,0,1:PRINT "File : ";LBL$:PRINT
1627 PRINT "Total time : ";TOTAL;"  Hrs in ";NLOG;" times
1628 PRINT
1630 COLOR 12,0,1:PRINT "  Date      time       duration         use  "
1640 PRINT STRING$(78,205)
1650 FOR I=1 TO NLOG
1660    COLOR 14,0,1:PRINT DAT$(I);"  ";:COLOR 13,0,1:PRINT TIM$(I);"  ";:COLOR 10,0,1:PRINT DURATION(I);"  ";:COLOR 9,0,1:PRINT MSG$(I)
1670 NEXT I
1675 SYSTEM
1680 END
```

## PC-GRAF2.BAS

```bas
1000 '
1010 '  PC-GRAF  Version 2.2      10 Nov 1984     Bob Shannon
1020 '
1030 '-----------------------------------------------------------
1040 '  PC-GRAF is a program to allow input of data and plotting
1050 '  on any arbitrary axes.  The data can be input from the
1060 '  keyboard or from a disk file.  The specifications for the
1070 '  plot may also be input from the keyboard or from a disk
1080 '  file.  The screen may be dumped to the printer by
1090 '  striking <shift>PrtSc while the plot is on the screen.
1100 '  The function keys control the program.  They are used to
1110 '  read or write files of data or plot specifications, change
1120 '  the data set, plot the graph, exit to DOS, or to call up
1130 '  either the specifications or data display menus.
1140 '  Up to five(5) data sets are allowed on each figure.
1150 '  Each data set may contain up to 100 data points.
1160 '  Each data set may have different symbol, symbol size
1170 '  and type of line.  If the data is stored in a file
1180 '  the most current symbol, size, and line type are
1190 '  saved for each data set, allong with the data.
1200 '
1210 '
1220 '          ---------------------------------
1230 '          |F1             |F2             |
1240 '          |               |               |
1250 '          | PLOT the      |               |
1260 '          |       figure  |  EXIT to DOS  |
1270 '          |               |               |
1280 '          |               |               |
1290 '          ---------------------------------
1300 '          |F3             |F4             |
1310 '          |   Decrement   |   Increment   |
1320 '          |    data set   |    data set   |
1330 '          |    number     |    number     |
1340 '          |               |               |
1350 '          |               |               |
1360 '          ---------------------------------
1370 '          |F5             |F6             |
1380 '          | LOAD  plot    |  SAVE   plot  |
1390 '          | specifications| specifications|
1400 '          | from file     |  in file      |
1410 '          | (prompted for | (prompted for |
1420 '          |        name)  |       name)   |
1430 '          ---------------------------------
1440 '          |F7             |F8             |
1450 '          |  LOAD data    |   SAVE data   |
1460 '          |  from file    |   from file   |
1470 '          |  (prompted    |  (prompted    |
1480 '          |   for name)   |   for name)   |
1490 '          |               |               |
1500 '          ---------------------------------
1510 '          |F9             |F10            |
1520 '          | Specifications|     Data      |
1530 '          |               |    Display    |
1540 '          |     Menu      |     Menu      |
1550 '          |               |               |
1560 '          |               |               |
1570 '          ---------------------------------
1580 '
1590 '  These function keys can be invoked at any time, but it is
1600 '  recommended that they only be used when the program is
1610 '  paused and waiting for input from the keyboard.
1620 '  Unpredictable results may result from other use.
1630 '  To invoke the function of the key first hit the function
1640 '  key desired, then a <CR> - return.  Since the program is
1650 '  paused waiting for INPUT the key trap does not occur until
1660 '  the pause is terminated with a <CR>.  The <CR> is not
1670 '  needed when the graph is plotted on the screen.  The
1680 '  program is paused at this point for any single key press
1690 '  and does not need a <CR> to activate the function.
1700 '-----------------------------------------------------------
1710 '
1720 DIM X(100),Y(100),X1(100),Y1(100)
1730 DIM XX(5,100),YY(5,100)
1740 DIM LTYPESET(5),SIZESET(5),SYMSET(5),NPTSET(5)
1750 DIM SYM$(10),LTYPE$(5),CORNER$(4)
1760 '
1770 ON ERROR GOTO 4410
1780 KEY OFF:WIDTH 80
1790 KEY 19,CHR$(&H8)+CHR$(35):KEY (19) ON
1800 ON KEY (1) GOSUB 4420
1810 ON KEY (2) GOSUB 4430
1820 ON KEY (3) GOSUB 4490
1830 ON KEY (4) GOSUB 4520
1840 ON KEY (5) GOSUB 4550
1850 ON KEY (6) GOSUB 4570
1860 ON KEY (7) GOSUB 4590
1870 ON KEY (8) GOSUB 4610
1880 ON KEY (9) GOSUB 4630
1890 ON KEY (10) GOSUB 4650
1900 ON KEY (11) GOSUB 4670
1910 KEY (1) ON:KEY (2) ON:KEY (3) ON:KEY (4) ON:KEY (5) ON
1920 KEY (6) ON:KEY (7) ON:KEY (8) ON:KEY (9) ON:KEY (10) ON
1925 ON KEY (19) GOSUB 4670
1930 SCREEN 0:CLS:COLOR 13,0,1:LOCATE 5,18:PRINT "PC - GRAF          a general plotting program"
1940 X$=STRING$(70,205)
1950 COLOR 12,0,1:LOCATE 2,6:PRINT X$;
1960 SYM$(0)="none":SYM$(1)="open square":SYM$(3)="open triangle":SYM$(5)="open circle"
1970 SYM$(9)="X":SYM$(7)="open diamond":SYM$(2)="filled square":SYM$(4)="filled triangle":SYM$(6)="filled circle":SYM$(8)="filled diamond"
1980 CORNER$(0)="none":CORNER$(1)="lower left":CORNER$(2)="upper left"
1990 CORNER$(3)="lower right":CORNER$(4)="upper right"
2000 DATASET=1
2010 HELP=1
2020 LTYPE$(1)="Solid":LTYPE$(2)="Dashed":LTYPE$(3)="Dotted"
2030 LTYPE$(0)="None":LTYPE$(4)="regression"
2040 XMIN=0.1:XMAX=99:XLIN=0:XLEN=7
2050 YMIN=0.1:YMAX=99:YLIN=0:YLEN=5.5
2060 FOR I=1 TO 5
2070 SIZESET(I)=1.5:LTYPESET(I)=1
2080 SYMSET(I)=I
2090 NEXT I
2100 LOCATE 23,6:PRINT X$;
2110 LOCATE 2,5:PRINT CHR$(201);:LOCATE 2,75:PRINT CHR$(187);
2120 LOCATE 23,5:PRINT CHR$(200);:LOCATE 23,75:PRINT CHR$(188);
2130 FOR I=1 TO 20:LOCATE 2+I,5:PRINT CHR$(186);:NEXT I
2140 FOR I=1 TO 20:LOCATE 2+I,75:PRINT CHR$(186);:NEXT I
2150 COLOR 13,0,1:LOCATE 10,25:PRINT "Version 2.2       10 Nov 1984";
2160 LOCATE 14,30:PRINT "Bob Shannon";:LOCATE 15,30:PRINT  "228 Tulare St.";:LOCATE 16,30:PRINT "Brisbane, CA 94005";:LOCATE 20,28:PRINT "Hit any key to start"
2170 LOCATE 24,1
2180 A$=INKEY$:IF A$="" THEN 2180
2190 '
2200 '  now display menu of plot specifications
2210 '
2220 COLOR 1,0,0:CLS:SCREEN 0:CLS:COLOR 15,1,1:PRINT "PC-GRAF  2.0    May 18,1984             Bob Shannon                             ";
2230 PRINT STRING$(80,205);
2240 IF DATASET<1 OR DATASET>5 THEN 2260
2250 SYM=SYMSET(DATASET):SIZE=SIZESET(DATASET):LTYPE=LTYPESET(DATASET)
2260 COLOR 13,0,1:PRINT "Plot specification parameters:"
2270 PRINT "    1. Label line 1 :";LAB1$
2280 PRINT "    2. Label line 2 :";LAB2$
2290 PRINT "    3. Label line 3 :";LAB3$
2300 PRINT "    4. Corner for label : ";CORNER$(CORNER)
2310 COLOR 10,0,1:PRINT "X axis parameters:"
2320 PRINT "    5. X axis length =";XLEN;" inches"
2330 PRINT "    6. Minimum value =";XMIN
2340 PRINT "    7. Maximum value =";XMAX
2350 IF XLIN=0 THEN PRINT "    8. Linear X axis"
2360 IF XLIN=1 THEN PRINT "    8. Logarithmic X axis"
2370 PRINT "    9. X axis label :";XLAB$
2380 COLOR 12,0,1:PRINT "Y axis parameters :"
2390 PRINT "   10. Y axis length =";YLEN;" inches"
2400 PRINT "   11. Minimum value =";YMIN
2410 PRINT "   12. Maximum value =";YMAX
2420 IF YLIN=0 THEN PRINT "   13. Linear Y axis"
2430 IF YLIN=1 THEN PRINT "   13. Logarithmic Y axis"
2440 PRINT "   14. Y axis label :";YLAB$
2450 IF HELP=1 THEN GOSUB 4690         'help menu display
2460 LOCATE 25,2:COLOR 14,0,1:INPUT "Change parameter number :";CHNG
2470 IF CHNG=0 THEN 2220
2480 ON CHNG GOTO 2510,2520,2530,2540,2550,2560,2570,2580,2590,2600,2610,2620,2630,2640
2490 GOTO 2220
2500 INPUT "Line type (0=none,1=solid,2=dashed,3=dotted,4=regression) :";LTYPE:LTYPESET(DATASET)=LTYPE:GOTO 2220
2510 INPUT "Label line 1 :";LAB1$:GOTO 2220
2520 INPUT "label line 2 :";LAB2$:GOTO 2220
2530 INPUT "Label line 3 :";LAB3$:GOTO 2220
2540 INPUT "corner for label (0=none,1=LL,2=UL,3=LR,4=UR) :";CORNER:GOTO 2190
2550 INPUT "Length of X axis in inches :";XLEN:GOTO 2220
2560 INPUT "Minimum X value :";XMIN:GOTO 2220
2570 INPUT "maximum X value :";XMAX:GOTO 2220
2580 XLIN=1-XLIN:GOTO 2220
2590 INPUT "X axis label :";XLAB$:GOTO 2220
2600 INPUT "Length of Y axis in inches :";YLEN:GOTO 2220
2610 INPUT "Minimum Y value :";YMIN:GOTO 2220
2620 INPUT "Maximum Y value :";YMAX:GOTO 2220
2630 YLIN=1-YLIN:GOTO 2220
2640 INPUT "Y axis label :";YLAB$:GOTO 2220
2650 '
2660 '  Read in data from disk file
2670 '
2680 SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  READ DATA IN FROM DISK FILE  ":PRINT :COLOR 14,0,1
2690 PRINT "Data files on this disk :":PRINT
2695 PRINT STRING$(79,205)
2700 FILES"*.dta
2705 PRINT STRING$(79,205)
2710 PRINT
2720 INPUT "Name of input data file ";DATAIN$:IF DATAIN$="" THEN 2720
2730 DATAIN$=DATAIN$+".dta"
2740 OPEN DATAIN$ FOR INPUT AS #1
2760 FOR I=1 TO 5
2770    INPUT #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
2780            FOR J=1 TO NPTSET(I)
2790            INPUT #1,XX(I,J),YY(I,J)
2800            NEXT J
2810 NEXT I
2815 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
2820 CLOSE #1
2830 GOTO 3460
2840 '
2850 '  Write out data to disk file
2860 '
2870 SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  WRITE CURRENT DATA OUT TO DISK FILE  ":PRINT:COLOR 14,0,1
2880 PRINT "Data files on this disk:":PRINT
2885 PRINT STRING$(79,205)
2890 FILES"*.dta
2895 PRINT STRING$(79,205)
2900 INPUT "Name of output data file ";DATAOUT$:IF DATAOUT$="" THEN 2900
2910 DATAOUT$=DATAOUT$+".dta"
2920 OPEN DATAOUT$ FOR OUTPUT AS #1
2940 FOR I=1 TO 5
2950    WRITE #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
2960    FOR J=1 TO NPTSET(I)
2970    WRITE #1,XX(I,J),YY(I,J)
2980    NEXT J
2990 NEXT I
2995 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3000 CLOSE #1
3010 GOTO 3460
3020 '
3030 '  read in plot specs from disk file
3040 '
3050 SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,15:PRINT "  READ IN PLOT SPECIFICATIONS FROM DISK FILE  ":PRINT :COLOR 14,0,1
3060 PRINT "Specification files on this disk:":PRINT
3065 PRINT STRING$(79,205)
3070 FILES"*.spc
3075 PRINT STRING$(79,205)
3080 INPUT "Name of file with plot specifications ";PLOTSPEC$
3090 IF PLOTSPEC$="" THEN 3080
3100 PLOTSPEC$=PLOTSPEC$+".spc"
3110 OPEN PLOTSPEC$ FOR INPUT AS #1
3120 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3130 CLOSE #1
3140 GOTO 2220
3150 '
3160 '  write out current plot specs to disk file for future use
3170 '
3180 SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,15:PRINT "  WRITE CURRENT PLOT SPECIFICATIONS OUT TO DISK FILE  ":PRINT :COLOR 14,0,1
3190 PRINT " Specification files on this disk :":PRINT
3195 PRINT STRING$(79,205)
3200 FILES"*.spc
3205 PRINT STRING$(79,205)
3210 INPUT "Name of disk file for plot specifications output ";OUTSPEC$
3220 OUTSPEC$=OUTSPEC$+".spc"
3230 OPEN OUTSPEC$ FOR OUTPUT AS #1
3240 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3250 CLOSE #1
3260 GOTO 2220
3270 '
3280 '  Input data and allow editing
3290 '
3300 IF NPTSET(DATASET)>=1 THEN 3460
3310 COLOR 15,1,1:CLS:SCREEN 0:CLS:IF HELP=1 THEN GOSUB 4690
3320 LOCATE 23,1:PRINT "Data Set  ";DATASET:INPUT "How many data points :",NPTS
3330 IF NPTS=0 THEN 4150
3340 NPTSET(DATASET)=NPTS
3350 IF NPTS=-1 THEN GOTO 2660
3360 IF NPTS<-1 THEN 3280
3370 PRINT "Data Set Number ";DATASET
3380 FOR I=1 TO NPTS
3390    COLOR 10,0,1:PRINT I;".  ";:INPUT "X value ";XX(DATASET,I)
3400    COLOR 12,0,1:INPUT "      Y value ";YY(DATASET,I)
3410    PRINT
3420 NEXT I
3430 '
3440 '  Display data for editing
3450 '
3460 CLS:SCREEN 0:COLOR 15,1,1
3470 IF NPTSET(DATASET)<1 THEN GOTO 3320
3480 PRINT " I    X(I)   Y(I)";:PRINT STRING$(63,32);
3490 X$=STRING$(80,205):PRINT X$
3500 SX=0:SY=0:SSX=0:SXY=0
3510 NPTS=NPTSET(DATASET)
3520 IF HELP=1 THEN GOSUB 4690                 'help menu display
3530 FOR I=1 TO NPTSET(DATASET)
3540    LOCATE ((I-1) MOD 20)+3,1+(18*FIX((I-1)/20)):COLOR 14,0,1:PRINT I;".";
3550    LOCATE ((I-1) MOD 20)+3,8+(18*FIX((I-1)/20)):COLOR 10,0,1:PRINT XX(DATASET,I);
3560    LOCATE ((I-1) MOD 20)+3,14+(18*FIX((I-1)/20)):COLOR 12,0,1:PRINT YY(DATASET,I);
3570 IF LTYPESET(DATASET)<>4 THEN 3610
3580 XTEMP=XX(DATASET,I):YTEMP=YY(DATASET,I):IF XLIN=1 THEN XTEMP=LOG(XX(DATASET,I))/LOG(10)
3590 IF YLIN=1 THEN YTEMP=LOG(YY(DATASET,I))/LOG(10)
3600 SX=SX+XTEMP:SY=SY+YTEMP:SSX=SSX+(XTEMP^2):SXY=SXY+(XTEMP*YTEMP)
3610 NEXT I
3620 IF LTYPESET(DATASET)<>4 THEN 3720
3630 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
3640 B=(SY/NPTS)-(A*SX/NPTS):SD=0
3650 FOR I=1 TO NPTS
3660 XTEMP=XX(DATASET,I):IF XLIN=1 THEN XTEMP=LOG(XX(DATASET,I))/LOG(10)
3670 YTEMP=YY(DATASET,I):IF YLIN=1 THEN YTEMP=LOG(YY(DATASET,I))/LOG(10)
3680 SD=SD+((YTEMP-((A*XTEMP)+B))^2)
3690 SD=SD+((YTEMP-((A*XTEMP)+B))^2)
3700 NEXT I
3710 SD=SQR(SD)/NPTS
3720 COLOR 10,0,1:LOCATE 23,2:PRINT "Data set ";DATASET;"   Symbol : ";SYM$(SYMSET(DATASET));"   Size : ";SIZESET(DATASET);"%   Line type : ";LTYPE$(LTYPESET(DATASET));
3730 LGX$="   ":IF XLIN=1 THEN LGX$="log"
3740 LGY$="   ":IF YLIN=1 THEN LGY$="log"
3750 IF LTYPESET(DATASET)=4 THEN COLOR 13,0,1:LOCATE 24,2:PRINT "Regression :";LGY$;" Y = ";:PRINT USING "#####.###";A;:PRINT " *";LGX$;" X + ";:PRINT USING "#####.###";B;:PRINT "     avg dev = ";:PRINT USING "####.###";SD;
3760 COLOR 14,0,1
3770 LOCATE 25,2:PRINT  "Change (pt no., 0=none,R=sort,S=symbol,Z=Size,L=line) :";
3780 LOCATE 25,60:CHNG$=INKEY$:IF CHNG$="" THEN 3780
3790 IF CHNG$="s" OR CHNG$="S" THEN  3860
3800 IF CHNG$="r" OR CHNG$="R" THEN 3950
3810 IF CHNG$="z" OR CHNG$="Z" THEN 3890
3820 IF CHNG$="l" OR CHNG$="L" THEN 3850
3830 IF VAL(CHNG$)>0 THEN PRINT VAL(CHNG$);:GOTO 3910
3840 GOTO 4150
3850 LOCATE 25,2:INPUT "Line type (0=none,1=solid,2=dashed,3=dotted,4=regression) :";LTYPE:LTYPESET(DATASET)=LTYPE:GOTO 3450
3860 LOCATE 24,2:PRINT "Symbol type (0=none,1=open sq,2=fill sq,3=open tri,4=fill tri";
3870 LOCATE 25,2:INPUT "     5=open cir,6=fill cir,7=open diam,8=fill diam,9=X) :";SYM
3880 SYMSET(DATASET)=SYM:GOTO 3450
3890 LOCATE 25,2:INPUT "       Size of data point (% of X axis length)            ";SIZESET(DATASET)
3900 GOTO 3450
3910 A$=INKEY$:IF A$="" THEN 3910
3920 IF ASC(A$)=13 THEN CHNG=VAL(CHNG$): GOTO 4050
3930 IF ASC(A$)<>13 THEN CG2=VAL(A$):CHNG=(10*VAL(CHNG$))+CG2:GOTO 4050
3940 '
3950 '  Sort the data
3960 '
3970 LOCATE 12,30:PRINT "Sorting ...."
3980 FOR I=1 TO NPTS
3990    FOR J=1 TO NPTS
4000            IF XX(DATASET,J)>XX(DATASET,I) THEN TEMP=XX(DATASET,J):XX(DATASET,J)=XX(DATASET,I):XX(DATASET,I)=TEMP:TEMP=YY(DATASET,J):YY(DATASET,J)=YY(DATASET,I):YY(DATASET,I)=TEMP
4010    NEXT J
4020 NEXT I
4030 GOTO 3460
4040 '
4050 '  Get new value for data point
4060 '
4070 IF CHNG>NPTS THEN NPTSET(DATASET)=NPTSET(DATASET)+1:CHNG=NPTSET(DATASET)
4080 LOCATE 25,1:PRINT STRING$(70,32);
4090 LOCATE 24,2:PRINT "            Input new values for point         ";CHNG;STRING$(20,32)
4100 INPUT "X value ";XX(DATASET,CHNG)
4110 INPUT "Y value ";YY(DATASET,CHNG)
4120 GOTO 3460
4130 '
4140 '
4150 '  Now go to subplot subroutine to plot
4160 '
4170 KLR=15
4180 FOR DSET=1 TO 5
4190    I=DSET
4200    SYM=SYMSET(I)
4210    SIZE=SIZESET(I)
4220    LTYPE=LTYPESET(I)
4230    NPTS=NPTSET(I)
4240    FOR J=1 TO NPTSET(I)
4250            X(J)=XX(I,J):Y(J)=YY(I,J)
4260    NEXT J
4270    MORE=0
4280    IF I>1 THEN MORE=1
4290    GOSUB 60000
4300 NEXT DSET
4310 '
4320 '  display graph until any key pressed (including function keys)
4330 '
4340 A$=INKEY$:IF A$="" THEN 4340 ELSE 2220
4350 '
4360 '
4370 ' This section contains subroutines executed on errors
4380 ' and on key traps.
4390 '
4400 '
4410 IF ERR=62 THEN RESUME 2820
4415 IF ERR=5 OR ERR=53 THEN RESUME NEXT ELSE ON ERROR GOTO 0
4420 RETURN 4150 'f1 - plot data
4430 'exit program - return to DOS
4440 PRINT :PRINT "WARNING ! You will lose any unsaved data if you exit !"
4450 PRINT "   do you really want to exit to DOS (y or n) ? ";
4460 A$=INKEY$:IF A$="" THEN 4460
4470 IF A$="n" OR A$="N" THEN 2200 ELSE SYSTEM
4480 'f2 - exit program - return to DOS
4490 DATASET=DATASET-1:IF DATASET<1 THEN DATASET=1:BEEP
4500 ' f3  - decrease data set number by one
4510 RETURN 3300
4520 'f4 - Next data set
4530 DATASET=DATASET+1:IF DATASET>5 THEN DATASET=5:BEEP
4540 RETURN 3300
4550 'f5 - load specifications from file
4560 RETURN 3030
4570 'f6 - save specifications in file
4580 RETURN 3170
4590 'f7 - load data from file
4600 RETURN 2660
4610 'f8 - save data in file
4620 RETURN 2850
4630 'f9 - go to specifications menu
4640 RETURN 2200
4650 'f10 - go to data display for current data set
4660 RETURN 3300
4670 ' Alt-h key - help screen toggle
4680 HELP=1-HELP:RETURN
4690 '
4700 '  help menu display
4710 '
4720 COLOR 15,1,1
4730 LOCATE 1,58:PRINT "      FUNCTION KEYS    ";
4740 LOCATE 2,58:PRINT "                       ";
4750 X$=STRING$(19,196)
4760 LOCATE 4,58:PRINT "     PLOT     EXIT TO  ";
4770 LOCATE 5,58:PRINT "     FIGURE     DOS    ";
4780 LOCATE 7,58:PRINT "     DECR       INCR   ";
4790 LOCATE 8,58:PRINT "    DATASET   DATASET  ";
4800 LOCATE 10,58:PRINT "   LOAD SPEC SAVE SPEC ";
4810 LOCATE 11,58:PRINT "      FILE      FILE   ";
4820 LOCATE 13,58:PRINT "   LOAD DATA SAVE DATA ";
4830 LOCATE 14,58:PRINT "      FILE      FILE   ";
4840 LOCATE 16,58:PRINT "      SPEC      DATA   ";
4850 LOCATE 17,58:PRINT "      MENU      MENU   ";
4860 LOCATE 20,58:PRINT "Alt-H = Help toggle";
4870 LOCATE 19,58:PRINT "Alt-C = Color Increment";
4880 LOCATE 3,58:PRINT "  "+CHR$(218)+X$+CHR$(191);
4890 FOR I.H=6 TO 15 STEP 3:LOCATE I.H,58:PRINT "   "+X$+" ";:NEXT
4900 LOCATE 18,58:PRINT "  "+CHR$(192)+X$+CHR$(217);
4910 FOR I.C=60 TO 80 STEP 10:FOR I.R=4 TO 17:LOCATE I.R,I.C:PRINT CHR$(179);:NEXT :NEXT
4920 RETURN
60000 '________________________________________________________________
60010 ' SUBGRAF2       May 10,1984             Bob Shannon
60020 '
60030 'SUBGRAF2 is a BASIC subroutine that will plot any set of data.
60040 'It defines the coordinates of the screen, draws
60050 'the grid with tic marks, numbers, and labels on each axis.
60060 'It also prints a 3 line label in one corner. The user can specify
60070 'the size and proportion of the figure in inches. Either linear
60080 'or logarithmic axes are allowed on both ordinate and abcissa.
60090 '
60100 ' Alt-C controls the color of the plot, the entire figure is
60110 ' plotted in the chosen color. The color option does not
60120 ' affect the printer dump print density.
60130 '---------------------------------------------------------------
60140 'Calling sequence:
60150 '         1. MERGE "SUBGRAF2.bas" with your program
60160 '         2. Save a new copy of your program which includes subroutine
60170 '         3. Set up the parameters as defined below
60180 '         4. gosub 60000 at point where you want the plot
60190 '
60200 '---------------------------------------------------------------
60210 'Parameters:    Do not use these names elsewhere in your program
60220 '
60230 ' SYM             symbol type (0=none,1=open sq,2=fill sq,3=open tri
60240 '                         4=fill tri,5=open cir,6=fill cir
60250 '                         7=open diamond,8=filled diamond,9=X
60260 ' SIZE            Symbol size in % of axes length
60270 ' LTYPE           line type (0=none,1=solid,2=dashed,3=dotted,4=regressio
60280 ' NPTS            is the number of data points
60290 ' X(I),Y(I)       arrays that contain the x and y data points
60300 ' XLEN,YLEN       x and y axis length in inches
60310 ' XMIN,YMIN       x any y minimum values
60320 ' XMAX,YMAX       x and y axis maximum values
60330 ' XLIN,YLIN       flag for linear(=0) or Log(=1) axis
60340 ' XINC,YINC       unit increment on each axis (valid only for linear)
60350 '                  if these are <=0 they are calculated from data
60360 ' XLAB$,YLAB$     strings containing the axis labels
60370 ' LAB1$,LAB2$,LAB3$       three label lines
60380 ' CORNER          specifies the corner for the label
60390 '                 (0=none,1=LL,2=LR,3=UL,4=UR)
60400 '  MORE            a flag that indicates whether this call is the
60410 '                  first and so axes should be plotted, or if it
60420 '                  is more data to go on the same axes (axes are
60430 '                  not plotted if MORE=1), MORE=0 new figure.
60440 '
60450 ' For more than one set of data on the same axes:
60460 '         1. Set up the first set of data and all other plot parameters
60470 '         2. GOSUB 60000 with MORE=0
60480 '         3. Set up second set of data (leave plot parameters unchanged)
60490 '                 (you may change SYM, SIZE, LTYPE and NPTS for each set)
60500 '         4. GOSUB 60000 with MORE=1
60510 '         5. repeat steps 3 and 4 for each additional data set
60520 '
60530 '----------------------------------------------------------------
60540 '
60550 '
60560 ' Scale axes and plot them
60570 '
60580   IF YLEN<=0 THEN YLEN=5.5
60590   IF XLEN<=0 THEN XLEN=7.5
60600   IF MORE<>1 THEN SCREEN 2:CLS:KEY OFF
60610 KEY 20,CHR$(&H8)+CHR$(46):KEY (20) ON
60620 ON KEY (20) GOSUB 62140
60630 IF KLR.P=0 THEN KLR.P=15
60640 OUT 985,KLR.P
60650   XINC.P=XINC:YINC.P=YINC
60660   XRANGE.P=XMAX-XMIN:YRANGE.P=YMAX-YMIN
60670 IF XINC<=0 THEN XINC.P=10^(INT(LOG(XRANGE.P*0.66)/LOG(10)))
60680 IF YINC<=0 THEN YINC.P=10^(INT(LOG(YRANGE.P*0.66)/LOG(10)))
60690   XMIN.P=XINC.P*INT(XMIN/XINC.P):XMAX.P=XINC.P*(INT((XMAX/XINC.P)+1))
60700   YMAX.P=YINC.P*INT((YMAX/YINC.P)+1):YMIN.P=YINC.P*(INT(YMIN/YINC.P))
60710 IF XLIN=1 THEN XMAX.P=LOG(XMAX)/LOG(10):XMIN.P=LOG(XMIN)/LOG(10)
60720 IF YLIN=1 THEN YMAX.P=LOG(YMAX)/LOG(10):YMIN.P=LOG(YMIN)/LOG(10)
60730   XRANGE.P=XMAX.P-XMIN.P:YRANGE.P=YMAX.P-YMIN.P
60740  DX=SIZE*XRANGE.P/100.:DY=SIZE*YRANGE.P/100.
60750   XT.P=XRANGE.P*(9./XLEN):YT.P=YRANGE.P*(7./YLEN)
60760   TICX=0.03*XRANGE.P:TICY=0.04*YRANGE.P
60770 XTRA=(XT.P-XRANGE.P)*9/XT.P:YTRA=(YT.P-YRANGE.P)*7/YT.P
60780   LBD.X=XMIN.P-(1.*XT.P/9)
60790   LBD.Y=YMIN.P-(1.*YT.P/7)
60800   UBD.X=XMAX.P+((XTRA-1.)*XT.P/9):UBD.Y=YMAX.P+((YTRA-1.)*YT.P/7)
60810   IF MORE<>1 THEN WINDOW (LBD.X,LBD.Y)-(UBD.X,UBD.Y)
60820   IF MORE<>1 THEN LINE (XMIN.P,YMIN.P)-(XMAX.P,YMAX.P),1,B
60830 XLOW.P=XMIN.P-LBD.X:YLOW.P=YMIN.P-LBD.Y
60840 XHI.P=XT.P-XRANGE.P-XLOW.P:YHI.P=YT.P-YRANGE.P-YLOW.P
60850   XP.P=0.00161*(UBD.X-LBD.X)
60860   IF MORE<>1 THEN LINE (XMIN.P+XP.P,YMIN.P)-(XMAX.P+XP.P,YMAX.P),1,B
60870 STYLE=&HFFFF:IF LTYPE=0 THEN STYLE=&H0
60880 IF LTYPE=2 THEN STYLE=&HF0F0
60890 IF LTYPE=3 THEN STYLE=&HC0C0
60900 IF LTYPE=4 THEN STYLE=&H0
60910 IF MORE=1 THEN 61850
60920 '
60930   'label axes
60940 '
60950 XPOS.P=((XLOW.P+(XRANGE.P/2.))*80./XT.P)-(LEN(XLAB$)/2)
60960 LOCATE 25,XPOS.P:PRINT XLAB$;
60970 YPOS.P=25.-(25.*((YLOW.P+(YRANGE.P/2.))/YT.P))-(LEN(YLAB$)/2.)
60980 FOR I=1 TO LEN(YLAB$):YT$=MID$(YLAB$,I,1):LOCATE I+YPOS.P,3:PRINT YT$;:NEXT I
60990 '
61000 '  Print label on figure in specified corner
61010 '
61020 '
61030 IF CORNER=0 THEN GOTO 61170
61040 MAXLEN=0:IF LEN(LAB3$)>MAXLEN THEN MAXLEN=LEN(LAB3$)
61050 IF LEN(LAB2$)>MAXLEN THEN MAXLEN=LEN(LAB2$)+1
61060 IF LEN(LAB1$)>MAXLEN THEN MAXLEN=LEN(LAB1$)+1
61070 IF CORNER=1 OR CORNER=2 THEN XPOS.P=((XLOW.P/XT.P)*80.)+3
61080 IF CORNER=3 OR CORNER=4 THEN XPOS.P=(((XLOW.P+XRANGE.P)/XT.P)*80.)-MAXLEN
61090 IF CORNER=2 OR CORNER=4 THEN YPOS.P=((YHI.P/YT.P)*26)+2
61100 IF CORNER=1 OR CORNER=3 THEN YPOS.P=(((YHI.P+YRANGE.P)/YT.P)*26.)-4.
61110 LOCATE YPOS.P,XPOS.P:PRINT LAB1$;
61120 LOCATE YPOS.P+1,XPOS.P:PRINT LAB2$;
61130 LOCATE YPOS.P+2,XPOS.P:PRINT LAB3$;
61140 '
61150 ' tic marks and numbers on linear x axis
61160 '
61170 IF XLIN=1 THEN 61350
61180   FOR XTIC=XMIN.P TO XMAX.P STEP XINC.P
61190           LINE (XTIC,YMIN.P)-(XTIC,YMIN.P+TICY),1
61200           LINE (XTIC+XP.P,YMIN.P)-(XTIC+XP.P,YMIN.P+TICY),1
61210           LINE (XTIC,YMAX.P-TICY)-(XTIC,YMAX.P),1
61220           LINE (XTIC+XP.P,YMAX.P-TICY)-(XTIC+XP.P,YMAX.P),1
61230           IF XTIC<XMIN.P+XINC.P THEN 61290
61240           HALF.P=XTIC-(0.5*XINC.P)
61250           LINE (HALF.P,YMIN.P)-(HALF.P,YMIN.P+(TICY/2)),1
61260           LINE (HALF.P+XP.P,YMIN.P)-(HALF.P+XP.P,YMIN.P+(TICY/2)),1
61270           LINE (HALF.P,YMAX.P-(TICY/2))-(HALF.P,YMAX.P),1
61280           LINE (HALF.P+XP.P,YMAX.P-(TICY/2))-(HALF.P+XP.P,YMAX.P),1
61290            XPOS.P=(((XLOW.P+(XTIC-XMIN.P))/XT.P)*80.)-(LEN(STR$(XTIC))/2)
61300           LOCATE 23,XPOS.P:PRINT XTIC;
61310   NEXT XTIC
61320 '
61330 '         tic marks and numbers on linear y axis
61340 '
61350 IF YLIN=1 THEN 61530
61360   FOR YTIC=YMIN.P TO YMAX.P STEP YINC.P
61370           LINE (XMIN.P,YTIC)-(XMIN.P+TICX,YTIC),1
61380           LINE (XMAX.P-TICX,YTIC)-(XMAX.P,YTIC),1
61390           IF YTIC<YMIN.P+YINC.P THEN 61430
61400           HALF.P=YTIC-(YINC.P/2)
61410           LINE (XMIN.P,HALF.P)-(XMIN.P+(TICX/2),HALF.P),1
61420           LINE (XMAX.P-(TICX/2),HALF.P)-(XMAX.P,HALF.P),1
61430           YPOS.P=((YHI.P+(YMAX.P-YTIC))/YT.P)*26.
61440            XPOS.P=6-(LEN(STR$(YTIC))/2)
61450            IF YPOS.P>25 OR YPOS.P<1 THEN BEEP:GOTO 61480
61460            IF XPOS.P>80 OR XPOS.P<1 THEN BEEP:GOTO 61480
61470            LOCATE YPOS.P,XPOS.P:PRINT YTIC
61480   NEXT YTIC
61490 '
61500 '         tic marks and numbers on log x axis
61510 '
61520 '
61530 IF XLIN=0 THEN 61690
61540   FOR CYC=-5 TO 5
61550           FOR LTIC=1 TO 10
61560           XTIC=LTIC*(10^CYC)
61570           LXTIC=LOG(XTIC)/LOG(10)
61580           IF LXTIC<=XMIN.P OR LXTIC>=XMAX.P THEN 61630
61590           LINE (LXTIC,YMIN.P)-(LXTIC,YMIN.P+TICY),1
61600           LINE (LXTIC+XP.P,YMIN.P)-(LXTIC+XP.P,YMIN.P+TICY),1
61610           LINE (LXTIC,YMAX.P-TICY)-(LXTIC,YMAX.P),1
61620           LINE (LXTIC+XP.P,YMAX.P-TICY)-(LXTIC+XP.P,YMAX.P),1
61630           NEXT LTIC
61640   IF LXTIC>=XMIN.P AND LXTIC<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC-XMIN.P))/XT.P)*80.)-1:PRINT XTIC;:IF LXTIC+0.5<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC+0.5-XMIN.P))/XT.P)*80)-1:PRINT 3.*XTIC;
61650   NEXT CYC
61660 '
61670 '         tic marks and numbers on log y axis
61680 '
61690 IF YLIN=0 THEN 61820
61700   FOR CYC=-5 TO 5
61710           FOR LTIC=1 TO 10
61720           YTIC=LTIC*(10^CYC)
61730           LYTIC=LOG(YTIC)/LOG(10)
61740           IF LYTIC<=YMIN.P OR LYTIC>=YMAX.P THEN 61770
61750           LINE (XMIN.P,LYTIC)-(XMIN.P+TICX,LYTIC),1
61760           LINE (XMAX.P-TICX,LYTIC)-(XMAX.P,LYTIC),1
61770           NEXT LTIC
61780  YPOS.P=((YHI.P+(YMAX.P-LYTIC))/YT.P)*26.
61790  XPOS.P=6-((LEN(STR$(YTIC))/2.))
61800  IF LYTIC>=YMIN.P AND LYTIC<=YMAX.P AND YPOS.P>=1 THEN LOCATE YPOS.P,XPOS.P:PRINT YTIC;
61810   NEXT CYC
61820 '
61830 '  now plot data on axes
61840 '
61850 SX=0:SY=0:SSX=0:SXY=0
61860 FOR I=1 TO NPTS
61870    X1(I)=X(I):IF XLIN=1 THEN X1(I)=LOG(X(I))/LOG(10)
61880    Y1(I)=Y(I):IF YLIN=1 THEN Y1(I)=LOG(Y(I))/LOG(10)
61890    IF I>1 THEN LINE(X1(I-1),Y1(I-1))-(X1(I),Y1(I)),1,,STYLE
61900   IF I>1 THEN LINE (X1(I-1)+XP.P,Y1(I-1))-(X1(I)+XP.P,Y1(I)),1,,STYLE
61910    IF SYM=1 THEN LINE (X1(I)-DX,Y1(I)-DY)-(X1(I)+DX,Y1(I)+DY),1,B
61920   IF SYM=1 OR SYM=2 THEN LINE(X1(I)-DX+XP.P,Y1(I)-DY)-(X1(I)+DX+XP.P,Y1(I)+DY),1,B
61930   IF SYM=2 THEN LINE(X1(I)-DX+XP.P,Y1(I)-DY)-(X1(I)+DX+XP.P,Y1(I)+DY),1,BF
61940    IF SYM=3 OR SYM=4 THEN LINE (X1(I)-DX,Y1(I)-DY)-(X1(I)+DX,Y1(I)-DY),1:LINE (X1(I),Y1(I)+DY)-(X1(I)-DX,Y1(I)-DY),1:LINE (X1(I),Y1(I)+DY)-(X1(I)+DX,Y1(I)-DY),1
61950   IF SYM=3 OR SYM=4 THEN LINE (X1(I)+XP.P,Y1(I)+DY)-(X1(I)+XP.P+DX,Y1(I)-DY),1:LINE (X1(I)+XP.P,Y1(I)+DY)-(X1(I)+XP.P-DX,Y1(I)-DY),1
61960 IF SYM=4 THEN PAINT (X1(I)+2*XP.P,Y1(I)),1
61970    IF SYM=5 OR SYM=6 THEN CIRCLE (X1(I),Y1(I)),DX:CIRCLE (X1(I)+XP.P,Y1(I)),DX
61980 IF SYM=6 THEN PAINT (X1(I)+2*XP.P,Y1(I)),1
61990    IF SYM=9 THEN LINE (X1(I)-DX,Y1(I)-DY)-(X1(I)+DX,Y1(I)+DY),1:LINE (X1(I)+DX,Y1(I)-DY)-(X1(I)-DX,Y1(I)+DY),1
62000    IF SYM=7 OR SYM=8 THEN LINE (X1(I),Y1(I)+DY)-(X1(I)+DX,Y1(I)),1:LINE -(X1(I),Y1(I)-DY),1:LINE -(X1(I)-DX,Y1(I)),1:LINE -(X1(I),Y1(I)+DY),1
62010 IF SYM=8 THEN PAINT (X1(I)+2*XP.P,Y1(I)),1
62020   SY=SY+Y1(I):SX=SX+X1(I):SSX=SSX+(X1(I)^2):SXY=SXY+(X1(I)*Y1(I))
62030 NEXT I
62040 IF LTYPE<>4 THEN RETURN
62050 '
62060 ' Regression line plotted
62070 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
62080 B=(SY/NPTS)-(A*SX/NPTS)
62090 YMIN.P=(A*XMIN.P)+B:YMAX.P=(A*XMAX.P)+B
62100 LINE (XMIN.P,YMIN.P)-(XMAX.P,YMAX.P),1
62110 LINE (XMIN.P+XP.P,YMIN.P)-(XMAX.P+XP.P,YMAX.P),1
62120 '
62130 RETURN
62140 '
62150 ' key trap of Alt-C to change color
62160 '
62170 KLR.P=(KLR.P+1) MOD 128:IF KLR.P MOD 8=0 OR KLR.P MOD 16=0 THEN KLR.P=KLR.P+1
62180 OUT 985,KLR.P
62190 RETURN
```

## PC-GRAF3.BAS

```bas
1000 '
1010 '  PC - GRAF    Version 3.0      12 Dec 1984     Bob Shannon
1020 '
1025 '  color and high resolution plots - compilable version
1030 '-----------------------------------------------------------
1040 '  PC-GRAF3 is a program to allow input of data and plotting
1050 '  on any arbitrary axes.  The data can be input from the
1060 '  keyboard or from a disk file.  The specifications for the
1070 '  plot may also be input from the keyboard or from a disk
1080 '  file.  The screen may be dumped to the printer by
1090 '  striking <shift>PrtSc while the plot is on the screen.
1100 '  The function keys control the program.  They are used to
1110 '  read or write files of data or plot specifications, change
1120 '  the data set, plot the graph, exit to DOS, or to call up
1130 '  either the specifications or data display menus.
1140 '  Up to five(5) data sets are allowed on each figure.
1150 '  Each data set may contain up to 100 data points.
1160 '  The color of the axes and labels can be specified.
1170 '  Each data set may have a different color of line and data point.
1180 '  Each data set may have different symbol, symbol size
1190 '  and type of line.  If the data is stored in a file
1200 '  the most current symbol, size, and line type are
1210 '  saved for each data set, along with the data.
1220 '
1230 '
1240 '          ---------------------------------
1250 '          |F1             |F2             |
1260 '          |               |               |
1270 '          | PLOT the      |               |
1280 '          |       figure  |  EXIT to DOS  |
1290 '          |               |               |
1300 '          |               |               |
1310 '          ---------------------------------
1320 '          |F3             |F4             |
1330 '          |   Decrement   |   Increment   |
1340 '          |    data set   |    data set   |
1350 '          |    number     |    number     |
1360 '          |               |               |
1370 '          |               |               |
1380 '          ---------------------------------
1390 '          |F5             |F6             |
1400 '          | LOAD  plot    |  SAVE   plot  |
1410 '          | specifications| specifications|
1420 '          | from file     |  in file      |
1430 '          | (prompted for | (prompted for |
1440 '          |        name)  |       name)   |
1450 '          ---------------------------------
1460 '          |F7             |F8             |
1470 '          |  LOAD data    |   SAVE data   |
1480 '          |  from file    |   from file   |
1490 '          |  (prompted    |  (prompted    |
1500 '          |   for name)   |   for name)   |
1510 '          |               |               |
1520 '          ---------------------------------
1530 '          |F9             |F10            |
1540 '          | Specifications|     Data      |
1550 '          |               |    Display    |
1560 '          |     Menu      |     Menu      |
1570 '          |               |               |
1580 '          |               |               |
1590 '          ---------------------------------
1600 '
1610 '  These function keys can be invoked at any time, but it is
1620 '  recommended that they only be used when the program is
1630 '  paused and waiting for input from the keyboard.
1640 '  Unpredictable results may result from other use.
1650 '  To invoke the function of the key first hit the function
1660 '  key desired, then a <CR> - return.  Since the program is
1670 '  paused waiting for INPUT the key trap does not occur until
1680 '  the pause is terminated with a <CR>.  The <CR> is not
1690 '  needed when the graph is plotted on the screen.  The
1700 '  program is paused at this point for any single key press
1710 '  and does not need a <CR> to activate the function.
1720 '-----------------------------------------------------------
1730 '
1740 DIM X(100),Y(100),X1(100),Y1(100)
1750 DIM XX(5,100),YY(5,100)
1760 DIM LTYPESET(5),SIZESET(5),SYMSET(5),NPTSET(5),LINCLR(5),SYMCLR(5)
1770 DIM SYM$(10),LTYPE$(5),CORNER$(4),CLR$(2,4)
1780 '
1790 ON ERROR GOTO 4740
1800 KEY OFF:WIDTH 80
1810 KEY 19,CHR$(&H8)+CHR$(35):KEY (19) ON
1820 ON KEY (1) GOSUB 4760
1830 ON KEY (2) GOSUB 4770
1840 ON KEY (3) GOSUB 4830
1850 ON KEY (4) GOSUB 4860
1860 ON KEY (5) GOSUB 4890
1870 ON KEY (6) GOSUB 4910
1880 ON KEY (7) GOSUB 4930
1890 ON KEY (8) GOSUB 4950
1900 ON KEY (9) GOSUB 4970
1910 ON KEY (10) GOSUB 4990
1920 ON KEY (11) GOSUB 5010
1930 KEY (1) ON:KEY (2) ON:KEY (3) ON:KEY (4) ON:KEY (5) ON
1940 KEY (6) ON:KEY (7) ON:KEY (8) ON:KEY (9) ON:KEY (10) ON
1950 ON KEY (19) GOSUB 5010
1960 SCREEN 0:CLS:COLOR 13,0,1:LOCATE 5,18:PRINT "PC - GRAF3      a general plotting program"
1970 X$=STRING$(70,205)
1980 COLOR 12,0,1:LOCATE 2,6:PRINT X$;
1990 SYM$(0)="none":SYM$(1)="open square":SYM$(3)="open triangle":SYM$(5)="open circle"
2000 SYM$(7)="X":SYM$(2)="filled square":SYM$(4)="filled triangle":SYM$(6)="filled circle"
2010 CORNER$(0)="none":CORNER$(1)="lower left":CORNER$(2)="upper left"
2020 CORNER$(3)="lower right":CORNER$(4)="upper right"
2030 CLR$(0,1)="Green":CLR$(0,2)="Red":CLR$(0,3)="Brown"
2040 CLR$(1,1)="Cyan":CLR$(1,2)="Magenta":CLR$(1,3)="White"
2050 CLR$(1,0)="Backgrnd":CLR$(0,0)="Backgrnd"
2060 DATASET=1
2070 HELP=1
2080 LTYPE$(1)="Solid":LTYPE$(2)="Dashed":LTYPE$(3)="Dotted"
2090 LTYPE$(0)="None":LTYPE$(4)="regression"
2100 XMIN=1:XMAX=99:XLIN=0:XLEN=7.2
2110 YMIN=1:YMAX=99:YLIN=0:YLEN=5.5
2120 BACKOLOR=16:AXISCOLR=2:RESOLUT=1
2130 FOR I=1 TO 5
2140 LINCLR(I)=3:SYMCLR(I)=3
2150 SIZESET(I)=2.5:LTYPESET(I)=1
2160 SYMSET(I)=I
2170 NEXT I
2180 LOCATE 23,6:PRINT X$;
2190 LOCATE 2,5:PRINT CHR$(201);:LOCATE 2,75:PRINT CHR$(187);
2200 LOCATE 23,5:PRINT CHR$(200);:LOCATE 23,75:PRINT CHR$(188);
2210 FOR I=1 TO 20:LOCATE 2+I,5:PRINT CHR$(186);:NEXT I
2220 FOR I=1 TO 20:LOCATE 2+I,75:PRINT CHR$(186);:NEXT I
2230 COLOR 13,0,1:LOCATE 10,25:PRINT "Version 3.0      12 Dec 1984";
2240 LOCATE 14,30:PRINT "Bob Shannon";:LOCATE 15,30:PRINT  "228 Tulare St.";:LOCATE 16,30:PRINT "Brisbane, CA 94005";:LOCATE 20,28:PRINT "Hit any key to start"
2250 LOCATE 24,1
2260 A$=INKEY$:IF A$="" THEN 2260
2270 '
2280 '  now display menu of plot specifications
2290 '
2300 SCREEN 2:SCREEN 0:CLS:COLOR 15,1,1:PRINT "PC - GRAF 3.0   12 Dec 1984      Bob Shannon                                    ";
2310 PRINT STRING$(80,205);
2320 IF DATASET<1 OR DATASET>5 THEN 2340
2330 SYM=SYMSET(DATASET):SIZE=SIZESET(DATASET):LTYPE=LTYPESET(DATASET)
2340 COLOR 13,0,1:PRINT "Plot specification parameters:"
2350 PRINT "    1. Label line 1 :";LAB1$
2360 PRINT "    2. Label line 2 :";LAB2$
2370 PRINT "    3. Label line 3 :";LAB3$
2380 PRINT "    4. Corner for label : ";CORNER$(CORNER)
2390 IF RESOLUT=0 THEN PRINT "    5. Axes color :";CLR$(PALET.P,AXISCOLR)
2400 IF RESOLUT<>0 THEN PRINT "    6. High Resolution (640x200)"
2410 IF RESOLUT=0 THEN PRINT "    6. Low Resolution (320x200)"
2420 COLOR 10,0,1:PRINT "X axis parameters:"
2430 PRINT "    7. X axis length =";XLEN;" inches"
2440 PRINT "    8. Minimum value =";XMIN
2450 PRINT "    9. Maximum value =";XMAX
2460 IF XLIN=0 THEN PRINT "   10. Linear X axis"
2470 IF XLIN=1 THEN PRINT "   10. Logarithmic X axis"
2480 PRINT "   11. X axis label :";XLAB$
2490 COLOR 12,0,1:PRINT "Y axis parameters :"
2500 PRINT "   12. Y axis length =";YLEN;" inches"
2510 PRINT "   13. Minimum value =";YMIN
2520 PRINT "   14. Maximum value =";YMAX
2530 IF YLIN=0 THEN PRINT "   15. Linear Y axis"
2540 IF YLIN=1 THEN PRINT "   15. Logarithmic Y axis"
2550 PRINT "   16. Y axis label :";YLAB$
2560 IF HELP=1 THEN GOSUB 5030         'help menu display
2570 LOCATE 25,2:COLOR 14,0,1:INPUT "Change parameter number :";CHNG
2580 IF CHNG=0 THEN 2300
2590 ON CHNG GOTO 2610,2620,2630,2640,2650,2700,2660,2670,2680,2690,2710,2720,2730,2740,2750,2760
2600 GOTO 2300
2610 INPUT "Label line 1 :";LAB1$:GOTO 2300
2620 INPUT "label line 2 :";LAB2$:GOTO 2300
2630 INPUT "Label line 3 :";LAB3$:GOTO 2300
2640 INPUT "corner for label (0=none,1=LL,2=UL,3=LR,4=UR) :";CORNER:GOTO 2270
2650 INPUT "Axes color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";AXISCOLR:GOTO 2300
2660 INPUT "Length of X axis in inches :";XLEN:GOTO 2300
2670 INPUT "Minimum X value :";XMIN:GOTO 2300
2680 INPUT "maximum X value :";XMAX:GOTO 2300
2690 XLIN=1-XLIN:GOTO 2300
2700 RESOLUT=1-RESOLUT:GOTO 2300
2710 INPUT "X axis label :";XLAB$:GOTO 2300
2720 INPUT "Length of Y axis in inches :";YLEN:GOTO 2300
2730 INPUT "Minimum Y value :";YMIN:GOTO 2300
2740 INPUT "Maximum Y value :";YMAX:GOTO 2300
2750 YLIN=1-YLIN:GOTO 2300
2760 INPUT "Y axis label :";YLAB$:GOTO 2300
2770 '
2780 '  Read in data from disk file
2790 '
2800 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  READ DATA IN FROM DISK FILE  ":PRINT :COLOR 14,0,1
2810 PRINT "Data files on this disk :":PRINT
2820 PRINT STRING$(79,205)
2830 FILES"*.dta
2840 PRINT STRING$(79,205)
2850 PRINT
2860 INPUT "Name of input data file ";DATAIN$:IF DATAIN$="" THEN 2860
2870 DATAIN$=DATAIN$+".dta"
2880 OPEN DATAIN$ FOR INPUT AS #1
2890 FOR I=1 TO 5
2900    INPUT #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
2910            FOR J=1 TO NPTSET(I)
2920            INPUT #1,XX(I,J),YY(I,J)
2930            NEXT J
2940 NEXT I
2950 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
2960 CLOSE #1
2970 GOTO 3730
2980 '
2990 '  Write out data to disk file
3000 '
3010 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  WRITE CURRENT DATA OUT TO DISK FILE  ":PRINT:COLOR 14,0,1
3020 PRINT "Data files on this disk:":PRINT
3030 PRINT STRING$(79,205)
3040 FILES"*.dta
3050 PRINT STRING$(79,205)
3060 INPUT "Name of output data file ";DATAOUT$:IF DATAOUT$="" THEN 3060
3070 DATAOUT$=DATAOUT$+".dta"
3080 OPEN DATAOUT$ FOR OUTPUT AS #1
3090 FOR I=1 TO 5
3100 WRITE #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
3110    FOR J=1 TO NPTSET(I)
3120    WRITE #1,XX(I,J),YY(I,J)
3130    NEXT J
3140 NEXT I
3150 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3160 CLOSE #1
3170 GOTO 3730
3180 '
3190 '  read in plot specs from disk file
3200 '
3210 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,15:PRINT "  READ IN PLOT SPECIFICATIONS FROM DISK FILE  ":PRINT :COLOR 14,0,1
3220 PRINT "Specification files on this disk:":PRINT
3230 PRINT STRING$(79,205)
3240 FILES"*.spc
3250 PRINT STRING$(79,205)
3260 INPUT "Name of file with plot specifications ";PLOTSPEC$
3270 IF PLOTSPEC$="" THEN 3260
3280 PLOTSPEC$=PLOTSPEC$+".spc"
3290 OPEN PLOTSPEC$ FOR INPUT AS #1
3300 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3310 CLOSE #1
3320 GOTO 2300
3330 '
3340 '  write out current plot specs to disk file for future use
3350 '
3360 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,15:PRINT "  WRITE CURRENT PLOT SPECIFICATIONS OUT TO DISK FILE  ":PRINT :COLOR 14,0,1
3370 PRINT " Specification files on this disk :":PRINT
3380 PRINT STRING$(79,205)
3390 FILES"*.spc
3400 PRINT STRING$(79,205)
3410 INPUT "Name of disk file for plot specifications output ";OUTSPEC$
3420 OUTSPEC$=OUTSPEC$+".spc"
3430 OPEN OUTSPEC$ FOR OUTPUT AS #1
3440 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3450 CLOSE #1
3460 GOTO 2300
3470 '
3480 '  Input data and allow editing
3490 '
3500 IF NPTSET(DATASET)>=1 THEN 3730
3510 SCREEN 2:SCREEN 0:COLOR 15,1,1:CLS:IF HELP=1 THEN GOSUB 5030
3520 LOCATE 23,1:PRINT "Data Set  ";DATASET:INPUT "How many data points :",NPTS
3530 IF NPTS=0 THEN 4480
3540 NPTSET(DATASET)=NPTS
3550 IF NPTS=-1 THEN GOTO 2780
3560 IF NPTS<-1 THEN 3480
3570 PRINT "Data Set Number ";DATASET
3580 FOR I=1 TO NPTS
3590    COLOR 10,0,1:PRINT I;".  ";:INPUT "X value ";XX(DATASET,I)
3600    COLOR 12,0,1:INPUT "      Y value ";YY(DATASET,I)
3610    PRINT
3620 NEXT I
3630 COLOR 14,4,1
3640 PRINT :PRINT "Symbol type (0=none,1=open sq,2=fill sq,3=open tri,4=fill tri"
3650 INPUT "     5=open cir,6=fill cir,7=X) :";SYMSET(DATASET)
3660 IF RESOLUT<>1 THEN PRINT :INPUT "Symbol color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";SYMCLR(DATASET)
3670 PRINT :INPUT "Symbol size (% of X Axis) :";SIZESET(DATASET)
3680 PRINT :INPUT "Line type (0=none,1=solid,2=dashed,3=dotted,4=regression) :";LTYPESET(DATASET)
3690 IF RESOLUT<>1 THEN PRINT :INPUT "Line color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown=White) :";LINCLR(DATASET)
3700 '
3710 '  Display data for editing
3720 '
3730 SCREEN 2:SCREEN 0:CLS:COLOR 15,1,1
3740 IF NPTSET(DATASET)<1 THEN GOTO 3520
3750 PRINT " I    X(I)   Y(I)";:PRINT STRING$(63,32);
3760 X$=STRING$(80,205):PRINT X$
3770 SX=0:SY=0:SSX=0:SXY=0
3780 NPTS=NPTSET(DATASET):SRTFLG=0
3790 IF HELP=1 THEN GOSUB 5030                 'help menu display
3800 FOR I=1 TO NPTSET(DATASET)
3810    LOCATE ((I-1) MOD 20)+3,1+(18*FIX((I-1)/20)):COLOR 14,0,1:PRINT I;".";
3820    LOCATE ((I-1) MOD 20)+3,8+(18*FIX((I-1)/20)):COLOR 10,0,1:PRINT XX(DATASET,I);
3830    LOCATE ((I-1) MOD 20)+3,14+(18*FIX((I-1)/20)):COLOR 12,0,1:PRINT YY(DATASET,I);
3840 IF LTYPESET(DATASET)<>4 THEN 3880
3850 XTEMP=XX(DATASET,I):YTEMP=YY(DATASET,I):IF XLIN=1 THEN XTEMP=LOG(XX(DATASET,I))/LOG(10)
3860 IF YLIN=1 THEN YTEMP=LOG(YY(DATASET,I))/LOG(10)
3870 SX=SX+XTEMP:SY=SY+YTEMP:SSX=SSX+(XTEMP^2):SXY=SXY+(XTEMP*YTEMP)
3880 NEXT I
3885 IF SRTFLG=1 THEN LOCATE 12,20:PRINT STRING$(30,32);:GOTO 4040
3890 IF LTYPESET(DATASET)<>4 THEN 3990
3900 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
3910 B=(SY/NPTS)-(A*SX/NPTS):SD=0
3920 FOR I=1 TO NPTS
3930 XTEMP=XX(DATASET,I):IF XLIN=1 THEN XTEMP=LOG(XX(DATASET,I))/LOG(10)
3940 YTEMP=YY(DATASET,I):IF YLIN=1 THEN YTEMP=LOG(YY(DATASET,I))/LOG(10)
3950 SD=SD+((YTEMP-((A*XTEMP)+B))^2)
3960 SD=SD+((YTEMP-((A*XTEMP)+B))^2)
3970 NEXT I
3980 SD=SQR(SD)/NPTS
3990 COLOR 10,0,1:LOCATE 22,2:PRINT "Data set ";DATASET;"   Symbol : ";SYM$(SYMSET(DATASET));"   Size : ";SIZESET(DATASET);"%   ";:IF RESOLUT=0 THEN PRINT "Color : ";CLR$(PALET.P,SYMCLR(DATASET));
4000 LOCATE 23,2:PRINT "                 Line type :";LTYPE$(LTYPESET(DATASET));:IF RESOLUT=0 THEN PRINT "        Color :";CLR$(PALET.P,LINCLR(DATASET));
4010 LGX$="   ":IF XLIN=1 THEN LGX$="log"
4020 LGY$="   ":IF YLIN=1 THEN LGY$="log"
4030 IF LTYPESET(DATASET)=4 THEN COLOR 13,0,1:LOCATE 24,2:PRINT "Regression :";LGY$;" Y = ";:PRINT USING "#####.###";A;:PRINT " *";LGX$;" X + ";:PRINT USING "#####.###";B;:PRINT "     avg dev = ";:PRINT USING "####.###";SD;
4040 COLOR 14,0,1
4050 IF RESOLUT=0 THEN LOCATE 25,2:PRINT  "Change (pt no.,R=soRt,S=Symbol,C=Color,Z=siZe,L=Line,K=line color) :";
4060 IF RESOLUT=1 THEN LOCATE 25,2:PRINT "Change(pt no.,R=soRt,S=Symbol,Z=siZe,L=Line)                   :";
4070 LOCATE 25,70:CHNG$=INKEY$:IF CHNG$="" THEN 4070
4080 IF VAL(CHNG$)>0.9 THEN 4230
4090 LOCATE 25,1:PRINT STRING$(78,32);
4100 IF CHNG$="s" OR CHNG$="S" THEN  4190
4110 IF CHNG$="r" OR CHNG$="R" THEN 4280
4120 IF CHNG$="z" OR CHNG$="Z" THEN 4220
4130 IF CHNG$="l" OR CHNG$="L" THEN 4170
4140 IF CHNG$="c" OR CHNG$="C" THEN 4210
4150 IF CHNG$="k" OR CHNG$="K" THEN 4180
4160 GOTO 4480
4170 LOCATE 25,2:INPUT "Line type (0=none,1=solid,2=dashed,3=dotted,4=regression) :";LTYPESET(DATASET):GOTO 3720
4180 LOCATE 25,2:INPUT "Line color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown=White) :";LINCLR(DATASET):GOTO 3720
4190 LOCATE 24,2:PRINT "Symbol type (0=none,1=open sq,2=fill sq,3=open tri,4=fill tri";
4200 LOCATE 25,2:INPUT "     5=open cir,6=fill cir,7=X) :";SYMSET(DATASET):GOTO 3720
4210 LOCATE 25,2:INPUT "Symbol color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";SYMCLR(DATASET):GOTO 3720
4220 LOCATE 25,2:INPUT "       Size of data point (% of X axis length)            ";SIZESET(DATASET):GOTO 3720
4230 PRINT VAL(CHNG$);
4240 A$=INKEY$:IF A$="" THEN 4240
4250 IF ASC(A$)=13 THEN CHNG=VAL(CHNG$): GOTO 4380
4260 IF ASC(A$)<>13 THEN CG2=VAL(A$):CHNG=(10*VAL(CHNG$))+CG2:GOTO 4380
4270 '
4280 '  Sort the data
4290 '
4300 LOCATE 12,30:PRINT "Sorting ....";
4310 FOR I=1 TO NPTS
4320    FOR J=1 TO NPTS
4330            IF XX(DATASET,J)>XX(DATASET,I) THEN TEMP=XX(DATASET,J):XX(DATASET,J)=XX(DATASET,I):XX(DATASET,I)=TEMP:TEMP=YY(DATASET,J):YY(DATASET,J)=YY(DATASET,I):YY(DATASET,I)=TEMP
4340    NEXT J
4350 NEXT I
4355 SRTFLG=1:GOTO 3800
4360 GOTO 3730
4370 '
4380 '  Get new value for data point
4390 '
4400 IF CHNG>NPTS THEN NPTSET(DATASET)=NPTSET(DATASET)+1:CHNG=NPTSET(DATASET)
4410 LOCATE 25,1:PRINT STRING$(70,32);
4420 LOCATE 24,2:PRINT "            Input new values for point         ";CHNG;STRING$(20,32)
4430 INPUT "X value ";XX(DATASET,CHNG)
4440 INPUT "Y value ";YY(DATASET,CHNG)
4450 GOTO 3730
4460 '
4470 '
4480 '  Now go to subplot subroutine to plot
4490 '
4500 FOR DSET=1 TO 5
4510    I=DSET
4520    SYM=SYMSET(I)
4530    SIZE=SIZESET(I)
4540    LTYPE=LTYPESET(I)
4550    NPTS=NPTSET(I)
4560    LINCOLOR=LINCLR(I):PTCOLOR=SYMCLR(I)
4570    FOR J=1 TO NPTSET(I)
4580            X(J)=XX(I,J):Y(J)=YY(I,J)
4590    NEXT J
4600    MORE=0
4610    IF I>1 THEN MORE=1
4620    GOSUB 60000
4630 NEXT DSET
4640 '
4650 '  display graph until any key pressed (including function keys)
4660 '
4670 A$=INKEY$:IF A$="" THEN 4670 ELSE 2300
4680 '
4690 '
4700 ' This section contains subroutines executed on errors
4710 ' and on key traps.
4720 '
4730 '
4740 IF ERR=62 THEN RESUME 2960
4750 IF ERR=5 OR ERR=53 THEN RESUME NEXT ELSE ON ERROR GOTO 0
4760 RETURN 4480 'f1 - plot data
4770 'f2 - exit program - return to DOS
4780 PRINT :PRINT "WARNING ! You will lose any unsaved data if you exit !"
4790 PRINT "   do you really want to exit to DOS (y or n) ? ";
4800 A$=INKEY$:IF A$="" THEN 4800
4810 IF A$="n" OR A$="N" THEN 2280 ELSE SYSTEM
4820 ' f3  - decrease data set number by one
4830 DATASET=DATASET-1:IF DATASET<1 THEN DATASET=1:BEEP
4850 RETURN 3500
4860 'f4 - Next data set
4870 DATASET=DATASET+1:IF DATASET>5 THEN DATASET=5:BEEP
4880 RETURN 3500
4890 'f5 - load specifications from file
4900 RETURN 3190
4910 'f6 - save specifications in file
4920 RETURN 3350
4930 'f7 - load data from file
4940 RETURN 2780
4950 'f8 - save data in file
4960 RETURN 2990
4970 'f9 - go to specifications menu
4980 RETURN 2280
4990 'f10 - go to data display for current data set
5000 RETURN 3500
5010 ' Alt-h key - help screen toggle
5020 HELP=1-HELP:RETURN
5030 '
5040 '  help menu display
5050 '
5060 COLOR 15,1,1
5070 LOCATE 1,58:PRINT "      FUNCTION KEYS    ";
5080 LOCATE 2,58:PRINT "                       ";
5090 X$=STRING$(19,196)
5100 LOCATE 4,58:PRINT "     PLOT     EXIT TO  ";
5110 LOCATE 5,58:PRINT "     FIGURE     DOS    ";
5120 LOCATE 7,58:PRINT "     DECR       INCR   ";
5130 LOCATE 8,58:PRINT "    DATASET   DATASET  ";
5140 LOCATE 10,58:PRINT "   LOAD SPEC SAVE SPEC ";
5150 LOCATE 11,58:PRINT "      FILE      FILE   ";
5160 LOCATE 13,58:PRINT "   LOAD DATA SAVE DATA ";
5170 LOCATE 14,58:PRINT "      FILE      FILE   ";
5180 LOCATE 16,58:PRINT "      SPEC      DATA   ";
5190 LOCATE 17,58:PRINT "      MENU      MENU   ";
5200 LOCATE 19,58:PRINT "Alt-H = Help toggle    ";
5210 IF RESOLUT=0 THEN LOCATE 20,58:PRINT "Alt-P = Palette Toggle ";
5220 IF RESOLUT=0 THEN LOCATE 21,58:PRINT "Alt-B = Back colr incr ";
5230 LOCATE 3,58:PRINT "  "+CHR$(218)+X$+CHR$(191);
5240 FOR I.H=6 TO 15 STEP 3:LOCATE I.H,58:PRINT "   "+X$+" ";:NEXT
5250 LOCATE 18,58:PRINT "  "+CHR$(192)+X$+CHR$(217);
5260 FOR I.C=60 TO 80 STEP 10:FOR I.R=4 TO 17:LOCATE I.R,I.C:PRINT CHR$(179);:NEXT :NEXT
5270 RETURN
60000 '________________________________________________________________
60010 ' SUBGRAF3        May 10,1984             Bob Shannon
60020 '
60030 'SUBGRAF3 is a BASIC subroutine that will plot any set of data.
60040 'It defines the coordinates of the screen, draws
60050 'the grid with tic marks, numbers, and labels on each axis.
60060 'It also prints a 3 line label in one corner. The user can specify
60070 'the size and proportion of the figure in inches. Either linear
60080 'or logarithmic axes are allowed on both ordinate and abcissa.
60090 '
60100 ' Alt-P controls the color of the plot, the pallette is toggled
60110 ' when Alt-P is invoked.
60120 '---------------------------------------------------------------
60130 'Calling sequence:
60140 '         1. MERGE "SUBGRAF3.bas" with your program
60150 '         2. Save a new copy of your program which includes subroutine
60160 '         3. Set up the parameters as defined below
60170 '         4. gosub 60000 at point where you want the plot
60180 '
60190 '---------------------------------------------------------------
60200 'Parameters:    Do not use these names elsewhere in your program
60210 '
60220 ' SYM             symbol type (0=none,1=open sq,2=fill sq,3=open tri
60230 '                         4=fill tri,5=open cir,6=fill cir
60240 '                         7=X
60250 ' SIZE            Symbol size in % of axes length
60260 ' LTYPE           line type (0=none,1=solid,2=dashed,3=dotted,4=regressio
60270 ' NPTS            is the number of data points
60280 ' X(I),Y(I)       arrays that contain the x and y data points
60290 ' XLEN,YLEN       x and y axis length in inches
60300 ' XMIN,YMIN       x any y minimum values
60310 ' XMAX,YMAX       x and y axis maximum values
60320 ' XLIN,YLIN       flag for linear(=0) or Log(=1) axis
60330 ' XINC,YINC       unit increment on each axis (valid only for linear)
60340 '                  if these are <=0 they are calculated from data
60350 ' XLAB$,YLAB$     strings containing the axis labels
60360 ' LAB1$,LAB2$,LAB3$       three label lines
60370 ' CORNER          specifies the corner for the label
60380 '                 (0=none,1=LL,2=LR,3=UL,4=UR)
60390 ' backolor        specifies the background color (0-7)
60400 ' LABLCOLR        specifies the color of the axes labels and figure label
60410 ' axiscolr        specifies the color of the axes (0-3)
60420 ' lincolor        specifies the color of the line (0-3)
60430 ' PTCOLOR         specifies the color of the data point (0-3)
60440 ' RESOLUT         specifies low(=0) or high(=1) resolution plot
60450 ' MORE             a flag that indicates whether this call is the
60460 '                  first and so axes should be plotted, or if it
60470 '                  is more data to go on the same axes (axes are
60480 '                  not plotted if MORE=1), MORE=0 new figure.
60490 '
60500 ' For more than one set of data on the same axes:
60510 '         1. Set up the first set of data and all other plot parameters
60520 '         2. GOSUB 60000 with MORE=0
60530 '         3. Set up second set of data (leave plot parameters unchanged)
60540 '                 (you may change SYM, SIZE, LTYPE and NPTS for each set)
60550 '         4. GOSUB 60000 with MORE=1
60560 '         5. repeat steps 3 and 4 for each additional data set
60570 '
60580 '----------------------------------------------------------------
60590 '
60600 '
60610 ' Scale axes and plot them
60620 '
60630   IF YLEN<=0 THEN YLEN=5.5
60640   IF XLEN<=0 THEN XLEN=7.3
60650   XTOT=320:IF RESOLUT=1 THEN XTOT=640
60660   NCOLUMS=40:IF RESOLUT=1 THEN NCOLUMS=80
60670   IF MORE<>1 AND RESOLUT=0 THEN SCREEN 1:COLOR BACKOLOR,PALET.P:CLS:KEY OFF
60680   IF MORE<>1 AND RESOLUT=1 THEN SCREEN 2:KEY OFF:CLS
60690 KEY 20,CHR$(&H8)+CHR$(25):KEY (20) ON
60700 ON KEY (20) GOSUB 62450
60710 KEY 17,CHR$(&H8)+CHR$(48):KEY (17) ON
60720 ON KEY (17) GOSUB 62510
60730   XINC.P=XINC:YINC.P=YINC
60740   XRANGE.P=XMAX-XMIN:YRANGE.P=YMAX-YMIN
60750 IF XINC<=0 THEN XINC.P=10^(INT(LOG(XRANGE.P*0.66)/LOG(10)))
60760 IF YINC<=0 THEN YINC.P=10^(INT(LOG(YRANGE.P*0.66)/LOG(10)))
60770   XMIN.P=XINC.P*INT(XMIN/XINC.P):XMAX.P=XINC.P*(INT((XMAX/XINC.P)+0.49))
60780   YMAX.P=YINC.P*INT((YMAX/YINC.P)+0.49):YMIN.P=YINC.P*(INT(YMIN/YINC.P))
60790 IF XLIN=1 THEN XMAX.P=LOG(XMAX)/LOG(10):XMIN.P=LOG(XMIN)/LOG(10)
60800 IF YLIN=1 THEN YMAX.P=LOG(YMAX)/LOG(10):YMIN.P=LOG(YMIN)/LOG(10)
60810   XRANGE.P=XMAX.P-XMIN.P:YRANGE.P=YMAX.P-YMIN.P
60820  DX=SIZE*XRANGE.P/100.:DY=SIZE*YRANGE.P/100.
60830   XT.P=XRANGE.P*(9./XLEN):YT.P=YRANGE.P*(7./YLEN)
60840   TICX=0.03*XRANGE.P:TICY=0.04*YRANGE.P
60850 XTRA=(XT.P-XRANGE.P)*9/XT.P:YTRA=(YT.P-YRANGE.P)*7/YT.P
60860   LBD.X=XMIN.P-(1.16*XT.P/9)
60870   LBD.Y=YMIN.P-(1.1*YT.P/7)
60880   UBD.X=XMAX.P+((XTRA-1.)*XT.P/9):UBD.Y=YMAX.P+((YTRA-1.)*YT.P/7)
60890   RANGE.X=UBD.X-LBD.X:RANGE.Y=UBD.Y-LBD.Y
60900 XLOW.P=XMIN.P-LBD.X:YLOW.P=YMIN.P-LBD.Y
60910 XHI.P=XT.P-XRANGE.P-XLOW.P:YHI.P=YT.P-YRANGE.P-YLOW.P
60920   XP.P=(1./XTOT)*(UBD.X-LBD.X)
60930   IF MORE<>1 THEN XX1=XMIN.P:XX2=XMAX.P:YY1=YMIN.P:YY2=YMAX.P:KLR=AXISCOLR:BOX=1:GOSUB 62570
60940   IF MORE<>1 THEN XX1=XMIN.P+XP.P:XX2=XMAX.P+XP.P:YY1=YMIN.P:YY2=YMAX.P:GOSUB 62570
60950 STYLE=&HFFFF:IF LTYPE=0 THEN STYLE=&H0
60960 IF LTYPE=2 THEN STYLE=&HF0F0
60970 IF LTYPE=3 THEN STYLE=&HC0C0
60980 IF LTYPE=4 THEN STYLE=&H0
60990 IF MORE=1 THEN 61930
61000 '
61010   'label axes
61020 '
61030 XPOS.P=((XLOW.P+(XRANGE.P/2.))*NCOLUMS/XT.P)-(LEN(XLAB$)/2)
61040 LOCATE 25,XPOS.P:PRINT XLAB$;
61050 YPOS.P=25.-(25.*((YLOW.P+(YRANGE.P/2.))/YT.P))-(LEN(YLAB$)/2.)
61060 FOR I=1 TO LEN(YLAB$):YT$=MID$(YLAB$,I,1):LOCATE I+YPOS.P,1:PRINT YT$;:NEXT I
61070 '
61080 '  Print label on figure in specified corner
61090 '
61100 '
61110 IF CORNER=0 THEN GOTO 61250
61120 MAXLEN=0:IF LEN(LAB3$)>MAXLEN THEN MAXLEN=LEN(LAB3$)
61130 IF LEN(LAB2$)>MAXLEN THEN MAXLEN=LEN(LAB2$)+1
61140 IF LEN(LAB1$)>MAXLEN THEN MAXLEN=LEN(LAB1$)+1
61150 IF CORNER=1 OR CORNER=2 THEN XPOS.P=((XLOW.P/XT.P)*NCOLUMS)+(3+(3*RESOLUT))
61160 IF CORNER=3 OR CORNER=4 THEN XPOS.P=(((XLOW.P+XRANGE.P)/XT.P)*NCOLUMS)-MAXLEN-(1+RESOLUT)
61170 IF CORNER=2 OR CORNER=4 THEN YPOS.P=((YHI.P/YT.P)*26)+3
61180 IF CORNER=1 OR CORNER=3 THEN YPOS.P=(((YHI.P+YRANGE.P)/YT.P)*26.)-4.
61190 LOCATE YPOS.P,XPOS.P:PRINT LAB1$;
61200 LOCATE YPOS.P+1,XPOS.P:PRINT LAB2$;
61210 LOCATE YPOS.P+2,XPOS.P:PRINT LAB3$;
61220 '
61230 ' tic marks and numbers on linear x axis
61240 '
61250 IF XLIN=1 THEN 61430
61260   FOR XTIC=XMIN.P TO XMAX.P STEP XINC.P
61270           XX1=XTIC:YY1=YMIN.P:XX2=XTIC:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 62570
61280           IF RESOLUT=1 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 62570
61290           XX1=XTIC:XX2=XTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 62570
61300           IF RESOLUT=1 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 62570
61310           IF XTIC<XMIN.P+XINC.P THEN 61370
61320           HALF.P=XTIC-(0.5*XINC.P)
61330           XX1=HALF.P:XX2=HALF.P:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):KLR=AXISCOLR:BOX=0:GOSUB 62570
61340           IF RESOLUT=1 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):GOSUB 62570
61350           XX1=HALF.P:XX2=HALF.P:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 62570
61360           IF RESOLUT=1 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:GOSUB 62570
61370           XPOS.P=(((XLOW.P+(XTIC-XMIN.P))/XT.P)*NCOLUMS)-(LEN(STR$(XTIC))/2)
61380           LOCATE 23,XPOS.P:PRINT XTIC;
61390   NEXT XTIC
61400 '
61410 '         tic marks and numbers on linear y axis
61420 '
61430 IF YLIN=1 THEN 61610
61440   FOR YTIC=YMIN.P TO YMAX.P STEP YINC.P
61450           XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 62570
61460           XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 62570
61470           IF YTIC<YMIN.P+YINC.P THEN 61510
61480           HALF.P=YTIC-(YINC.P/2)
61490           XX1=XMIN.P:XX2=XMIN.P+(TICX/2):YY1=HALF.P:YY2=HALF.P:GOSUB 62570
61500           XX1=XMAX.P-(TICX/2):XX2=XMAX.P:YY1=HALF.P:YY2=HALF.P:GOSUB 62570
61510           YPOS.P=((YHI.P+(YMAX.P-YTIC))/YT.P)*26.
61520           XPOS.P=(3+(3*RESOLUT))-(LEN(STR$(YTIC))/2)
61530           IF YPOS.P>25 OR YPOS.P<1 THEN BEEP:GOTO 61560
61540           IF XPOS.P>NCOLUMS OR XPOS.P<1 THEN BEEP:GOTO 61560
61550           LOCATE YPOS.P,XPOS.P:PRINT YTIC
61560   NEXT YTIC
61570 '
61580 '         tic marks and numbers on log x axis
61590 '
61600 '
61610 IF XLIN=0 THEN 61770
61620   FOR CYC=-5 TO 5
61630           FOR LTIC=1 TO 10
61640           XTIC=LTIC*(10^CYC)
61650           LXTIC=LOG(XTIC)/LOG(10)
61660           IF LXTIC<=XMIN.P OR LXTIC>=XMAX.P THEN 61710
61670           XX1=LXTIC:XX2=LXTIC:YY1=YMIN.P:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 62570
61680           IF RESOLUT=1 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 62570
61690           XX1=LXTIC:XX2=LXTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 62570
61700           IF RESOLUT=1 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 62570
61710           NEXT LTIC
61720   IF LXTIC>=XMIN.P AND LXTIC<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT XTIC;:IF LXTIC+0.5<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC+0.5-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT 3.*XTIC;
61730   NEXT CYC
61740 '
61750 '         tic marks and numbers on log y axis
61760 '
61770 IF YLIN=0 THEN 61900
61780   FOR CYC=-5 TO 5
61790           FOR LTIC=1 TO 10
61800           YTIC=LTIC*(10^CYC)
61810           LYTIC=LOG(YTIC)/LOG(10)
61820           IF LYTIC<=YMIN.P OR LYTIC>=YMAX.P THEN 61850
61830           XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=LYTIC:YY2=LYTIC:KLR=AXISCOLR:BOX=0:GOSUB 62570
61840           XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=LYTIC:YY2=LYTIC:GOSUB 62570
61850           NEXT LTIC
61860  YPOS.P=((YHI.P+(YMAX.P-LYTIC))/YT.P)*26.
61870  XPOS.P=(3+(3*RESOLUT))-((LEN(STR$(YTIC))/2.))
61880  IF LYTIC>=YMIN.P AND LYTIC<=YMAX.P AND YPOS.P>=1 THEN LOCATE YPOS.P,XPOS.P:PRINT YTIC;
61890   NEXT CYC
61900 '
61910 '  now plot data on axes
61920 '
61930 SX=0:SY=0:SSX=0:SXY=0
61940 FOR I=1 TO NPTS
61950    X1(I)=X(I):IF XLIN=1 THEN X1(I)=LOG(X(I))/LOG(10)
61960    Y1(I)=Y(I):IF YLIN=1 THEN Y1(I)=LOG(Y(I))/LOG(10)
61970   IF I=1 THEN 62040
61980   IF LTYPE<1 OR LTYPE>3 THEN 62040
61990   KLR=LINCOLOR:IF RESOLUT=1 THEN KLR=1
62000   XX1=XTOT*(X1(I-1)-LBD.X)/RANGE.X:XX2=XTOT*(X1(I)-LBD.X)/RANGE.X
62010   YY1=200.-((Y1(I-1)-LBD.Y)*200./RANGE.Y):YY2=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
62020   LINE (XX1,YY1)-(XX2,YY2),KLR,,STYLE
62030   LINE (XX1+1,YY1)-(XX2+1,YY2),KLR,,STYLE
62040   IF SYM=1 THEN XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=1:KLR=PTCOLOR:GOSUB 62570
62050   IF SYM=1 OR SYM=2 THEN XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)+DY:KLR=PTCOLOR:BOX=1:GOSUB 62570
62060   IF SYM=2 THEN PAINT(((XX1+XX2)/2)+2,(YY1+YY2)/2.),PTCOLOR,PTCOLOR
62070 IF SYM<3 OR SYM >4 THEN 62180
62080   XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)-DY:KLR=PTCOLOR:BOX=0:GOSUB 62570
62090   XX1=X1(I):XX2=X1(I)-DX:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62100   XX1=X1(I):XX2=X1(I)+DX:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62110   XX1=X1(I)+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62120   XX1=X1(I)+XP.P:XX2=X1(I)-DX+XP.P:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62130   XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)-DY:GOSUB 62570
62140 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
62150 YY1=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
62160 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
62170 IF SYM=4 THEN PAINT (XX1+2,YY1+1),KLR:GOTO 62300
62180 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
62190 YY1=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
62200 DDX=XTOT*DX/RANGE.X
62210 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
62220    IF SYM=5 OR SYM=6 THEN CIRCLE (XX1,YY1),DDX,KLR:CIRCLE (XX1+1,YY1),DDX,KLR
62230 IF SYM=6 THEN PAINT (XX1+2,YY1+1),KLR,KLR
62240 IF SYM<>7 THEN 62300
62250 XX=XTOT*(X1(I)-LBD.X)/RANGE.X
62260 YY=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
62270 DDY=(DY*200./RANGE.Y)
62280 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
62290    LINE (XX-DDX,YY-DDY)-(XX+DDX,YY+DDY),KLR:LINE (XX+DDX,YY-DDY)-(XX-DDX,YY+DDY),KLR
62300   SY=SY+Y1(I):SX=SX+X1(I):SSX=SSX+(X1(I)^2):SXY=SXY+(X1(I)*Y1(I))
62310 NEXT I
62320 IF LTYPE<>4 THEN RETURN
62330 '
62340 ' Regression line plotted
62350 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
62360 B=(SY/NPTS)-(A*SX/NPTS)
62370 XMN=(YMIN.P-B)/A:XMX=(YMAX.P-B)/A
62380 IF XMN<XMIN.P THEN XMN=XMIN.P
62390 IF XMX>XMAX.P THEN XMX=XMAX.P
62400 YMN=(A*XMN)+B:YMX=(A*XMX)+B
62410 XX1=XMN:XX2=XMX:YY1=YMN:YY2=YMX:KLR=LINCOLOR:BOX=0:GOSUB 62570
62420 XX1=XMN+XP.P:XX2=XMX+XP.P:YY1=YMN:YY2=YMX:GOSUB 62570
62430 '
62440 RETURN
62450 '
62460 ' key trap of Alt-P to change palette
62470 '
62480 PALET.P=1-PALET.P
62490 COLOR BACKOLOR,PALET.P
62500 RETURN
62510 '
62520 ' key trap of Alt-B to change background color
62530 '
62540 BACKOLOR=BACKOLOR+1
62550 COLOR BACKOLOR,PALET.P
62560 RETURN
62570 '
62580 ' Subroutine to plot line - replaces WINDOW subroutine
62590 ' Calculation to convert real coordinates to screen coordinates
62600 ' To call this subroutine set xx1=first x value, xx2=second x value
62610 '   yy1,yy2=first and second y values
62620 '   range.x=real value limit of screen border
62630 '   range.y= range of y values that corresponds to entire screen
62640 '   xmin.p, ymin.p are the minimun values on the x and y axes
62650 '   KLR= color of line
62660 '   box=0 if no box, =1 if box to be drawn
62670 '   fill=0 if not to fill box, =1 if box to be filled
62680 '   Style$ for dotted or dashed lines is bit template
62685 '   RESOLUT =0 for 320x200   =1 for 640x200
62686 '         in 320x200 mode KLR is the color, in 640x200 is ignored
62690 '
62700 YY2=200.-((YY2-LBD.Y)*200./RANGE.Y)
62710 YY1=200.-((YY1-LBD.Y)*200./RANGE.Y)
62720 XX1=XTOT*(XX1-LBD.X)/RANGE.X
62730 XX2=XTOT*(XX2-LBD.X)/RANGE.X
62740 IF RESOLUT=1 THEN KLR=1
62750 IF BOX=1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR,B
62760 IF BOX<>1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR
62770 RETURN
```

## PC-GRAF4.BAS

```bas
1000 '
1010 '  PC-GRAF   Version 4.0      20 Feb 1985     Bob Shannon
1020 '
1030 '  color and high resolution plots - compilable version
1040 '  Can plot on Sweet-P or Epson-Comrex Comscriber I pen plotters
1050 '-----------------------------------------------------------
1060 '  PC-GRAF4 is a program to allow input of data and plotting
1070 '  on any arbitrary axes.  The data can be input from the
1080 '  keyboard or from a disk file.  The specifications for the
1090 '  plot may also be input from the keyboard or from a disk
1100 '  file.  The screen may be dumped to the printer by
1110 '  striking <shift>PrtSc while the plot is on the screen.
1120 '  The function keys control the program.  They are used to
1130 '  read or write files of data or plot specifications, change
1140 '  the data set, plot the graph, exit to DOS, or to call up
1150 '  either the specifications or data display menus.
1160 '  Up to five(5) data sets are allowed on each figure.
1170 '  Each data set may contain up to 100 data points.
1180 '  The color of the axes and labels can be specified.
1190 '  Each data set may have a different color of line and data point.
1200 '  Each data set may have different symbol, symbol size
1210 '  and type of line.  If the data is stored in a file
1220 '  the most current symbol, size, and line type are
1230 '  saved for each data set, along with the data.
1240 '
1250 '
1260 '          ---------------------------------
1270 '          |F1             |F2             |
1280 '          |               |               |
1290 '          | PLOT the      |               |
1300 '          |       figure  |  EXIT to DOS  |
1310 '          |               |               |
1320 '          |               |               |
1330 '          ---------------------------------
1340 '          |F3             |F4             |
1350 '          |   Decrement   |   Increment   |
1360 '          |    data set   |    data set   |
1370 '          |    number     |    number     |
1380 '          |               |               |
1390 '          |               |               |
1400 '          ---------------------------------
1410 '          |F5             |F6             |
1420 '          | LOAD  plot    |  SAVE   plot  |
1430 '          | specifications| specifications|
1440 '          | from file     |  in file      |
1450 '          | (prompted for | (prompted for |
1460 '          |        name)  |       name)   |
1470 '          ---------------------------------
1480 '          |F7             |F8             |
1490 '          |  LOAD data    |   SAVE data   |
1500 '          |  from file    |   from file   |
1510 '          |  (prompted    |  (prompted    |
1520 '          |   for name)   |   for name)   |
1530 '          |               |               |
1540 '          ---------------------------------
1550 '          |F9             |F10            |
1560 '          | Specifications|     Data      |
1570 '          |               |    Display    |
1580 '          |     Menu      |     Menu      |
1590 '          |               |               |
1600 '          |               |               |
1610 '          ---------------------------------
1620 '
1630 '  These function keys can be invoked at any time, but it is
1640 '  recommended that they only be used when the program is
1650 '  paused and waiting for input from the keyboard.
1660 '  Unpredictable results may result from other use.
1670 '  To invoke the function of the key first hit the function
1680 '  key desired, then a <CR> - return.  Since the program is
1690 '  paused waiting for INPUT the key trap does not occur until
1700 '  the pause is terminated with a <CR>.  The <CR> is not
1710 '  needed when the graph is plotted on the screen.  The
1720 '  program is paused at this point for any single key press
1730 '  and does not need a <CR> to activate the function.
1740 '-----------------------------------------------------------
1750 '
1760 DIM X(100),Y(100),X1(100),Y1(100)
1770 DIM XX(5,100),YY(5,100)
1780 DIM LTYPESET(5),SIZESET(5),SYMSET(5),NPTSET(5),LINCLR(5),SYMCLR(5)
1790 DIM SYM$(10),LTYPE$(5),CORNER$(4),CLR$(2,4)
1800 '
1810 ON ERROR GOTO 4830
1820 KEY OFF:WIDTH 80
1830 KEY 19,CHR$(&H8)+CHR$(35):KEY (19) ON
1840 ON KEY (1) GOSUB 4850
1850 ON KEY (2) GOSUB 4860
1860 ON KEY (3) GOSUB 4920
1870 ON KEY (4) GOSUB 4950
1880 ON KEY (5) GOSUB 4980
1890 ON KEY (6) GOSUB 5000
1900 ON KEY (7) GOSUB 5020
1910 ON KEY (8) GOSUB 5040
1920 ON KEY (9) GOSUB 5060
1930 ON KEY (10) GOSUB 5080
1940 ON KEY (11) GOSUB 5100
1950 KEY (1) ON:KEY (2) ON:KEY (3) ON:KEY (4) ON:KEY (5) ON
1960 KEY (6) ON:KEY (7) ON:KEY (8) ON:KEY (9) ON:KEY (10) ON
1970 ON KEY (19) GOSUB 5100
1980 SCREEN 0:CLS:COLOR 13,0,1:LOCATE 5,18:PRINT "PC-GRAF 4.0      a general plotting program":LOCATE 6,18:PRINT "for IBM PC graphics and Sweet-P pen plotter"
1990 X$=STRING$(70,205)
2000 COLOR 12,0,1:LOCATE 2,6:PRINT X$;
2010 SYM$(0)="none":SYM$(1)="open square":SYM$(3)="open triangle":SYM$(5)="open circle"
2020 SYM$(7)="X":SYM$(2)="filled square":SYM$(4)="filled triangle":SYM$(6)="filled circle"
2030 CORNER$(0)="none":CORNER$(1)="lower left":CORNER$(2)="upper left"
2040 CORNER$(3)="lower right":CORNER$(4)="upper right"
2050 CLR$(0,1)="Green":CLR$(0,2)="Red":CLR$(0,3)="Brown"
2060 CLR$(1,1)="Cyan":CLR$(1,2)="Magenta":CLR$(1,3)="White"
2070 CLR$(1,0)="Backgrnd":CLR$(0,0)="Backgrnd"
2080 DATASET=1
2090 HELP=1
2100 LTYPE$(1)="Solid":LTYPE$(2)="Dashed":LTYPE$(3)="Dotted"
2110 LTYPE$(0)="None":LTYPE$(4)="regression"
2120 XMIN=1:XMAX=99:XLIN=0:XLEN=7.2
2130 YMIN=1:YMAX=99:YLIN=0:YLEN=5.5
2140 BACKOLOR=16:AXISCOLR=2:RESOLUT=1:SIZLABL=4:SIZNUMB=2
2150 FOR I=1 TO 5
2160 LINCLR(I)=3:SYMCLR(I)=3
2170 SIZESET(I)=2.5:LTYPESET(I)=1
2180 SYMSET(I)=I
2190 NEXT I
2200 LOCATE 23,6:PRINT X$;
2210 LOCATE 2,5:PRINT CHR$(201);:LOCATE 2,75:PRINT CHR$(187);
2220 LOCATE 23,5:PRINT CHR$(200);:LOCATE 23,75:PRINT CHR$(188);
2230 FOR I=1 TO 20:LOCATE 2+I,5:PRINT CHR$(186);:NEXT I
2240 FOR I=1 TO 20:LOCATE 2+I,75:PRINT CHR$(186);:NEXT I
2250 COLOR 13,0,1:LOCATE 10,25:PRINT "Version 4.0      20 Feb 1985";
2260 LOCATE 14,30:PRINT "Bob Shannon";:LOCATE 15,30:PRINT  "228 Tulare St.";:LOCATE 16,30:PRINT "Brisbane, CA 94005";:LOCATE 20,28:PRINT "Hit any key to start"
2270 LOCATE 24,1
2280 A$=INKEY$:IF A$="" THEN 2280
2290 '
2300 '  now display menu of plot specifications
2310 '
2320 SCREEN 2:SCREEN 0:CLS:COLOR 15,1,1:PRINT "PC-GRAF  4.0    20 Feb 1985      Bob Shannon                                    ";
2330 PRINT STRING$(80,205);
2340 IF DATASET<1 OR DATASET>5 THEN 2360
2350 SYM=SYMSET(DATASET):SIZE=SIZESET(DATASET):LTYPE=LTYPESET(DATASET)
2360 COLOR 13,0,1:PRINT "Plot specification parameters:"
2370 PRINT "    1. Label line 1 :";LAB1$
2380 PRINT "    2. Label line 2 :";LAB2$
2390 PRINT "    3. Label line 3 :";LAB3$
2400 PRINT "    4. Corner for label : ";CORNER$(CORNER)
2410 IF RESOLUT=0 THEN PRINT "    5. Axes color :";CLR$(PALET.P,AXISCOLR)
2420 IF RESOLUT=1 THEN PRINT "    6. High Resolution (640x200)"
2430 IF RESOLUT=0 THEN PRINT "    6. Low Resolution (320x200)"
2440 IF RESOLUT=2 THEN PRINT "    6. Pen and Ink plot on plotter"
2450 IF RESOLUT=2 THEN PRINT "    7. Label Height (1-7) :";SIZLABL
2460 IF RESOLUT=2 THEN PRINT "    8. Axis Number Height (1-4) :";SIZNUMB
2470 COLOR 10,0,1:PRINT "X axis parameters:"
2480 PRINT "    9. X axis length =";XLEN;" inches"
2490 PRINT "   10. Minimum value =";XMIN
2500 PRINT "   11. Maximum value =";XMAX
2510 IF XLIN=0 THEN PRINT "   12. Linear X axis"
2520 IF XLIN=1 THEN PRINT "   12. Logarithmic X axis"
2530 PRINT "   13. X axis label :";XLAB$
2540 COLOR 12,0,1:PRINT "Y axis parameters :"
2550 PRINT "   14. Y axis length =";YLEN;" inches"
2560 PRINT "   15. Minimum value =";YMIN
2570 PRINT "   16. Maximum value =";YMAX
2580 IF YLIN=0 THEN PRINT "   17. Linear Y axis"
2590 IF YLIN=1 THEN PRINT "   17. Logarithmic Y axis"
2600 PRINT "   18. Y axis label :";YLAB$
2610 IF HELP=1 THEN GOSUB 5120         'help menu display
2620 LOCATE 25,2:COLOR 14,0,1:INPUT "Change parameter number :";CHNG
2630 IF CHNG=0 THEN 2320
2640 ON CHNG GOTO 2660,2670,2680,2690,2700,2770,2710,2720,2730,2740,2750,2760,2780,2790,2800,2810,2820,2830
2650 GOTO 2320
2660 INPUT "Label line 1 :";LAB1$:GOTO 2320
2670 INPUT "label line 2 :";LAB2$:GOTO 2320
2680 INPUT "Label line 3 :";LAB3$:GOTO 2320
2690 INPUT "corner for label (0=none,1=LL,2=UL,3=LR,4=UR) :";CORNER:GOTO 2290
2700 INPUT "Axes color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";AXISCOLR:GOTO 2320
2710 INPUT "Size of Axes Labels (1-7)*.08 in. :";SIZLABL:GOTO 2320
2720 INPUT "Size of axis numbers and inset label characters (1-5) :";SIZNUMB:GOTO 2320
2730 INPUT "Length of X axis in inches :";XLEN:GOTO 2320
2740 INPUT "Minimum X value :";XMIN:GOTO 2320
2750 INPUT "maximum X value :";XMAX:GOTO 2320
2760 XLIN=1-XLIN:GOTO 2320
2770 INPUT "Plot Resolution (0=320x200, 1=640x200, 2=plotter) ";RESOLUT:GOTO 2320
2780 INPUT "X axis label :";XLAB$:GOTO 2320
2790 INPUT "Length of Y axis in inches :";YLEN:GOTO 2320
2800 INPUT "Minimum Y value :";YMIN:GOTO 2320
2810 INPUT "Maximum Y value :";YMAX:GOTO 2320
2820 YLIN=1-YLIN:GOTO 2320
2830 INPUT "Y axis label :";YLAB$:GOTO 2320
2840 '
2850 '  Read in data from disk file
2860 '
2870 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  READ DATA IN FROM DISK FILE  ":PRINT :COLOR 14,0,1
2880 PRINT "Data files on this disk :":PRINT
2890 PRINT STRING$(79,205)
2900 FILES"*.dta
2910 PRINT STRING$(79,205)
2920 PRINT
2930 INPUT "Name of input data file ";DATAIN$:IF DATAIN$="" THEN 2930
2940 DATAIN$=DATAIN$+".dta"
2950 OPEN DATAIN$ FOR INPUT AS #1
2960 FOR I=1 TO 5
2970    INPUT #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
2980            FOR J=1 TO NPTSET(I)
2990            INPUT #1,XX(I,J),YY(I,J)
3000            NEXT J
3010 NEXT I
3020 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3030 CLOSE #1
3040 GOTO 2320
3050 '
3060 '  Write out data to disk file
3070 '
3080 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,20:PRINT "  WRITE CURRENT DATA OUT TO DISK FILE  ":PRINT:COLOR 14,0,1
3090 PRINT "Data files on this disk:":PRINT
3100 PRINT STRING$(79,205)
3110 FILES"*.dta
3120 PRINT STRING$(79,205)
3130 INPUT "Name of output data file ";DATAOUT$:IF DATAOUT$="" THEN 3130
3140 DATAOUT$=DATAOUT$+".dta"
3150 OPEN DATAOUT$ FOR OUTPUT AS #1
3160 FOR I=1 TO 5
3170 WRITE #1,NPTSET(I),SYMSET(I),SIZESET(I),LTYPESET(I),LINCLR(I),SYMCLR(I)
3180    FOR J=1 TO NPTSET(I)
3190    WRITE #1,XX(I,J),YY(I,J)
3200    NEXT J
3210 NEXT I
3220 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3230 CLOSE #1
3240 GOTO 2320
3250 '
3260 '  read in plot specs from disk file
3270 '
3280 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,15:PRINT "  READ IN PLOT SPECIFICATIONS FROM DISK FILE  ":PRINT :COLOR 14,0,1
3290 PRINT "Specification files on this disk:":PRINT
3300 PRINT STRING$(79,205)
3310 FILES"*.spc
3320 PRINT STRING$(79,205)
3330 INPUT "Name of file with plot specifications ";PLOTSPEC$
3340 IF PLOTSPEC$="" THEN 3330
3350 PLOTSPEC$=PLOTSPEC$+".spc"
3360 OPEN PLOTSPEC$ FOR INPUT AS #1
3370 INPUT #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3380 CLOSE #1
3390 GOTO 2320
3400 '
3410 '  write out current plot specs to disk file for future use
3420 '
3430 SCREEN 2:SCREEN 0:CLS:COLOR 0,7,1:PRINT :LOCATE 2,15:PRINT "  WRITE CURRENT PLOT SPECIFICATIONS OUT TO DISK FILE  ":PRINT :COLOR 14,0,1
3440 PRINT " Specification files on this disk :":PRINT
3450 PRINT STRING$(79,205)
3460 FILES"*.spc
3470 PRINT STRING$(79,205)
3480 INPUT "Name of disk file for plot specifications output ";OUTSPEC$
3490 OUTSPEC$=OUTSPEC$+".spc"
3500 OPEN OUTSPEC$ FOR OUTPUT AS #1
3510 WRITE #1,SYM,SIZE,LTYPE,XLEN,XMIN,XMAX,XLIN,XINC,XLAB$,YLEN,YMIN,YMAX,YLIN,YLAB$,LAB1$,LAB2$,LAB3$,CORNER,AXISCOLR,BACKOLOR,PALET.P,RESOLUT,SIZLABL,SIZNUMB
3520 CLOSE #1
3530 GOTO 2320
3540 '
3550 '  Input data and allow editing
3560 '
3570 IF NPTSET(DATASET)>=1 THEN 3800
3580 SCREEN 2:SCREEN 0:COLOR 15,1,1:CLS:IF HELP=1 THEN GOSUB 5120
3590 LOCATE 23,1:PRINT "Data Set  ";DATASET:INPUT "How many data points :",NPTS
3600 IF NPTS=0 THEN 4570
3610 NPTSET(DATASET)=NPTS
3620 IF NPTS=-1 THEN GOTO 2850
3630 IF NPTS<-1 THEN 3550
3640 PRINT "Data Set Number ";DATASET
3650 FOR I=1 TO NPTS
3660    COLOR 10,0,1:PRINT I;".  ";:INPUT "X value ";XX(DATASET,I)
3670    COLOR 12,0,1:INPUT "      Y value ";YY(DATASET,I)
3680    PRINT
3690 NEXT I
3700 COLOR 14,4,1
3710 PRINT :PRINT "Symbol type (0=none,1=open sq,2=fill sq,3=open tri,4=fill tri"
3720 INPUT "     5=open cir,6=fill cir,7=X) :";SYMSET(DATASET)
3730 IF RESOLUT=0 THEN PRINT :INPUT "Symbol color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";SYMCLR(DATASET)
3740 PRINT :INPUT "Symbol size (% of X Axis) :";SIZESET(DATASET)
3750 PRINT :INPUT "Line type (0=none,1=solid,2=dashed,3=dotted,4=regression) :";LTYPESET(DATASET)
3760 IF RESOLUT=0 THEN PRINT :INPUT "Line color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";LINCLR(DATASET)
3770 '
3780 '  Display data for editing
3790 '
3800 SCREEN 2:SCREEN 0:CLS:COLOR 15,1,1
3810 IF NPTSET(DATASET)<1 THEN GOTO 3590
3820 PRINT " I    X(I)   Y(I)";:PRINT STRING$(63,32);
3830 X$=STRING$(80,205):PRINT X$
3840 SX=0:SY=0:SSX=0:SXY=0
3850 NPTS=NPTSET(DATASET):SRTFLG=0
3860 IF HELP=1 THEN GOSUB 5120                 'help menu display
3870 FOR I=1 TO NPTSET(DATASET)
3880    LOCATE ((I-1) MOD 20)+3,1+(18*FIX((I-1)/20)):COLOR 14,0,1:PRINT I;".";
3890    LOCATE ((I-1) MOD 20)+3,8+(18*FIX((I-1)/20)):COLOR 10,0,1:PRINT XX(DATASET,I);
3900    LOCATE ((I-1) MOD 20)+3,14+(18*FIX((I-1)/20)):COLOR 12,0,1:PRINT YY(DATASET,I);
3910 IF LTYPESET(DATASET)<>4 THEN 3950
3920 XTEMP=XX(DATASET,I):YTEMP=YY(DATASET,I):IF XLIN=1 THEN XTEMP=LOG(XX(DATASET,I))/LOG(10)
3930 IF YLIN=1 THEN YTEMP=LOG(YY(DATASET,I))/LOG(10)
3940 SX=SX+XTEMP:SY=SY+YTEMP:SSX=SSX+(XTEMP^2):SXY=SXY+(XTEMP*YTEMP)
3950 NEXT I
3960 IF SRTFLG=1 THEN LOCATE 12,20:PRINT STRING$(30,32);:GOTO 4120
3970 IF LTYPESET(DATASET)<>4 THEN 4070
3980 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
3990 B=(SY/NPTS)-(A*SX/NPTS):SD=0
4000 FOR I=1 TO NPTS
4010 XTEMP=XX(DATASET,I):IF XLIN=1 THEN XTEMP=LOG(XX(DATASET,I))/LOG(10)
4020 YTEMP=YY(DATASET,I):IF YLIN=1 THEN YTEMP=LOG(YY(DATASET,I))/LOG(10)
4030 SD=SD+((YTEMP-((A*XTEMP)+B))^2)
4040 SD=SD+((YTEMP-((A*XTEMP)+B))^2)
4050 NEXT I
4060 SD=SQR(SD)/NPTS
4070 COLOR 10,0,1:LOCATE 22,2:PRINT "Data set ";DATASET;"   Symbol : ";SYM$(SYMSET(DATASET));"   Size : ";SIZESET(DATASET);"%   ";:IF RESOLUT=0 THEN PRINT "Color : ";CLR$(PALET.P,SYMCLR(DATASET));
4080 LOCATE 23,2:PRINT "                 Line type :";LTYPE$(LTYPESET(DATASET));:IF RESOLUT=0 THEN PRINT "        Color :";CLR$(PALET.P,LINCLR(DATASET));
4090 LGX$="   ":IF XLIN=1 THEN LGX$="log"
4100 LGY$="   ":IF YLIN=1 THEN LGY$="log"
4110 IF LTYPESET(DATASET)=4 THEN COLOR 13,0,1:LOCATE 24,2:PRINT "Regression :";LGY$;" Y = ";:PRINT USING "#####.###";A;:PRINT " *";LGX$;" X + ";:PRINT USING "#####.###";B;:PRINT "     avg dev = ";:PRINT USING "####.###";SD;
4120 COLOR 14,0,1
4130 IF RESOLUT=0 THEN LOCATE 25,2:PRINT  "Change (pt no.,R=soRt,S=Symbol,C=Color,Z=siZe,L=Line,K=line color) :";
4140 IF RESOLUT<>0 THEN LOCATE 25,2:PRINT "Change(pt no.,R=soRt,S=Symbol,Z=siZe,L=Line)                   :";
4150 LOCATE 25,70:CHNG$=INKEY$:IF CHNG$="" THEN 4150
4160 IF VAL(CHNG$)>0.9 THEN 4310
4170 LOCATE 25,1:PRINT STRING$(78,32);
4180 IF CHNG$="s" OR CHNG$="S" THEN  4270
4190 IF CHNG$="r" OR CHNG$="R" THEN 4360
4200 IF CHNG$="z" OR CHNG$="Z" THEN 4300
4210 IF CHNG$="l" OR CHNG$="L" THEN 4250
4220 IF CHNG$="c" OR CHNG$="C" THEN 4290
4230 IF CHNG$="k" OR CHNG$="K" THEN 4260
4240 GOTO 4570
4250 LOCATE 25,2:INPUT "Line type (0=none,1=solid,2=dashed,3=dotted,4=regression) :";LTYPESET(DATASET):GOTO 3790
4260 LOCATE 25,2:INPUT "Line color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";LINCLR(DATASET):GOTO 3790
4270 LOCATE 24,2:PRINT "Symbol type (0=none,1=open sq,2=fill sq,3=open tri,4=fill tri";
4280 LOCATE 25,2:INPUT "     5=open cir,6=fill cir,7=X) :";SYMSET(DATASET):GOTO 3790
4290 LOCATE 25,2:INPUT "Symbol color (0=back,1=Green-Cyan,2=Red-Magenta,3=Brown-White) :";SYMCLR(DATASET):GOTO 3790
4300 LOCATE 25,2:INPUT "       Size of data point (% of X axis length)            ";SIZESET(DATASET):GOTO 3790
4310 PRINT VAL(CHNG$);
4320 A$=INKEY$:IF A$="" THEN 4320
4330 IF ASC(A$)=13 THEN CHNG=VAL(CHNG$): GOTO 4470
4340 IF ASC(A$)<>13 THEN CG2=VAL(A$):CHNG=(10*VAL(CHNG$))+CG2:GOTO 4470
4350 '
4360 '  Sort the data
4370 '
4380 LOCATE 12,30:PRINT "Sorting ....";
4390 FOR I=1 TO NPTS
4400    FOR J=1 TO NPTS
4410            IF XX(DATASET,J)>XX(DATASET,I) THEN TEMP=XX(DATASET,J):XX(DATASET,J)=XX(DATASET,I):XX(DATASET,I)=TEMP:TEMP=YY(DATASET,J):YY(DATASET,J)=YY(DATASET,I):YY(DATASET,I)=TEMP
4420    NEXT J
4430 NEXT I
4440 SRTFLG=1:GOTO 3870
4450 GOTO 3800
4460 '
4470 '  Get new value for data point
4480 '
4490 IF CHNG>NPTS THEN NPTSET(DATASET)=NPTSET(DATASET)+1:CHNG=NPTSET(DATASET)
4500 LOCATE 25,1:PRINT STRING$(70,32);
4510 LOCATE 24,2:PRINT "            Input new values for point         ";CHNG;STRING$(20,32)
4520 INPUT "X value ";XX(DATASET,CHNG)
4530 INPUT "Y value ";YY(DATASET,CHNG)
4540 GOTO 3800
4550 '
4560 '
4570 '  Now go to subplot subroutine to plot
4580 '
4590 FOR DSET=1 TO 5
4600    I=DSET
4610    SYM=SYMSET(I)
4620    SIZE=SIZESET(I)
4630    LTYPE=LTYPESET(I)
4640    NPTS=NPTSET(I)
4650    LINCOLOR=LINCLR(I):PTCOLOR=SYMCLR(I)
4660    FOR J=1 TO NPTSET(I)
4670            X(J)=XX(I,J):Y(J)=YY(I,J)
4680    NEXT J
4690    MORE=0
4700    IF I>1 THEN MORE=1
4710    GOSUB 60000
4720 NEXT DSET
4730 '
4740 '  display graph until any key pressed (including function keys)
4750 '
4760 A$=INKEY$:IF A$="" THEN 4760 ELSE 2320
4770 '
4780 '
4790 ' This section contains subroutines executed on errors
4800 ' and on key traps.
4810 '
4820 '
4830 IF ERR=62 THEN RESUME 3030
4840 IF ERR=5 OR ERR=53 THEN RESUME NEXT ELSE ON ERROR GOTO 0
4850 RETURN 4570 'f1 - plot data
4860 'exit program - return to DOS
4870 PRINT :PRINT "WARNING ! You will lose any unsaved data if you exit !"
4880 PRINT "   do you really want to exit to DOS (y or n) ? ";
4890 A$=INKEY$:IF A$="" THEN 4890
4900 IF A$="n" OR A$="N" THEN 2300 ELSE SYSTEM
4910 'f2 - exit program - return to DOS
4920 DATASET=DATASET-1:IF DATASET<1 THEN DATASET=1:BEEP
4930 ' f3  - decrease data set number by one
4940 RETURN 3570
4950 'f4 - Next data set
4960 DATASET=DATASET+1:IF DATASET>5 THEN DATASET=5:BEEP
4970 RETURN 3570
4980 'f5 - load specifications from file
4990 RETURN 3260
5000 'f6 - save specifications in file
5010 RETURN 3420
5020 'f7 - load data from file
5030 RETURN 2850
5040 'f8 - save data in file
5050 RETURN 3060
5060 'f9 - go to specifications menu
5070 RETURN 2300
5080 'f10 - go to data display for current data set
5090 RETURN 3570
5100 ' Alt-h key - help screen toggle
5110 HELP=1-HELP:RETURN
5120 '
5130 '  help menu display
5140 '
5150 COLOR 15,1,1
5160 LOCATE 1,58:PRINT "      FUNCTION KEYS    ";
5170 LOCATE 2,58:PRINT "                       ";
5180 X$=STRING$(19,196)
5190 LOCATE 4,58:PRINT "     PLOT     EXIT TO  ";
5200 LOCATE 5,58:PRINT "     FIGURE     DOS    ";
5210 LOCATE 7,58:PRINT "     DECR       INCR   ";
5220 LOCATE 8,58:PRINT "    DATASET   DATASET  ";
5230 LOCATE 10,58:PRINT "   LOAD SPEC SAVE SPEC ";
5240 LOCATE 11,58:PRINT "      FILE      FILE   ";
5250 LOCATE 13,58:PRINT "   LOAD DATA SAVE DATA ";
5260 LOCATE 14,58:PRINT "      FILE      FILE   ";
5270 LOCATE 16,58:PRINT "      SPEC      DATA   ";
5280 LOCATE 17,58:PRINT "      MENU      MENU   ";
5290 LOCATE 19,58:PRINT "Alt-H = Help toggle    ";
5300 IF RESOLUT=0 THEN LOCATE 20,58:PRINT "Alt-P = Palette Toggle ";
5310 IF RESOLUT=0 THEN LOCATE 21,58:PRINT "Alt-B = Back colr incr ";
5320 LOCATE 3,58:PRINT "  "+CHR$(218)+X$+CHR$(191);
5330 FOR I.H=6 TO 15 STEP 3:LOCATE I.H,58:PRINT "   "+X$+" ";:NEXT
5340 LOCATE 18,58:PRINT "  "+CHR$(192)+X$+CHR$(217);
5350 FOR I.C=60 TO 80 STEP 10:FOR I.R=4 TO 17:LOCATE I.R,I.C:PRINT CHR$(179);:NEXT :NEXT
5360 RETURN
60000 '________________________________________________________________
60010 ' PC-GRAF 4.0    Feb 20,1985             Bob Shannon
60020 '
60030 'PC-GRAF4 is a BASIC subroutine that will plot any set of data.
60040 'It defines the coordinates of the screen, draws
60050 'the grid with tic marks, numbers, and labels on each axis.
60060 'It also prints a 3 line label in one corner. The user can specify
60070 'the size and proportion of the figure in inches. Either linear
60080 'or logarithmic axes are allowed on both ordinate and abcissa.
60090 '
60100 ' Alt-P controls the color of the plot, the pallette is toggled
60110 ' when Alt-P is invoked.
60120 '---------------------------------------------------------------
60130 'Calling sequence:
60140 '         1. MERGE "SUBGRAF4.bas" with your program
60150 '         2. Save a new copy of your program which includes subroutine
60160 '         3. Set up the parameters as defined below
60170 '         4. gosub 60000 at point where you want the plot
60180 '
60190 '---------------------------------------------------------------
60200 'Parameters:    Do not use these names elsewhere in your program
60210 '
60220 ' SYM             symbol type (0=none,1=open sq,2=fill sq,3=open tri
60230 '                         4=fill tri,5=open cir,6=fill cir
60240 '                         7=X
60250 ' SIZE            Symbol size in % of axes length
60260 ' LTYPE           line type (0=none,1=solid,2=dashed,3=dotted,4=regressio
60270 ' NPTS            is the number of data points
60280 ' X(I),Y(I)       arrays that contain the x and y data points
60290 ' XLEN,YLEN       x and y axis length in inches
60300 ' XMIN,YMIN       x any y minimum values
60310 ' XMAX,YMAX       x and y axis maximum values
60320 ' XLIN,YLIN       flag for linear(=0) or Log(=1) axis
60330 ' XINC,YINC       unit increment on each axis (valid only for linear)
60340 '                  if these are <=0 they are calculated from data
60350 ' XLAB$,YLAB$     strings containing the axis labels
60360 ' LAB1$,LAB2$,LAB3$       three label lines
60370 ' CORNER          specifies the corner for the label
60380 '                 (0=none,1=LL,2=LR,3=UL,4=UR)
60390 ' backolor        specifies the background color (0-7)
60400 ' LABLCOLR        specifies the color of the axes labels and figure label
60410 ' axiscolr        specifies the color of the axes (0-3)
60420 ' lincolor        specifies the color of the line (0-3)
60430 ' PTCOLOR         specifies the color of the data point (0-3)
60440 ' RESOLUT         specifies low(=0) or high(=1) resolution plot
60450 ' MORE             a flag that indicates whether this call is the
60460 '                  first and so axes should be plotted, or if it
60470 '                  is more data to go on the same axes (axes are
60480 '                  not plotted if MORE=1), MORE=0 new figure.
60490 '
60500 ' For more than one set of data on the same axes:
60510 '         1. Set up the first set of data and all other plot parameters
60520 '         2. GOSUB 60000 with MORE=0
60530 '         3. Set up second set of data (leave plot parameters unchanged)
60540 '                 (you may change SYM, SIZE, LTYPE and NPTS for each set)
60550 '         4. GOSUB 60000 with MORE=1
60560 '         5. repeat steps 3 and 4 for each additional data set
60570 '
60580 '----------------------------------------------------------------
60590 '
60600 '
60610 ' Scale axes and plot them
60620 '
60630   IF YLEN<=0 THEN YLEN=5.5
60640   IF XLEN<=0 THEN XLEN=7.3
60650   IF RESOLUT=2 AND MORE<>1 THEN LPRINT"RE;";:CLS:LOCATE 12,30:PRINT "Plotting on Sweet-P plotter ..."
60660   XTOT=320:YTOT=200:IF RESOLUT=1 THEN XTOT=640
60665 IF RESOLUT=1 THEN YTOT=400
60670   IF RESOLUT=2 THEN XTOT=2500
60680   IF RESOLUT=2 THEN YTOT=1838
60690   NCOLUMS=40:IF RESOLUT=1 THEN NCOLUMS=80
60700   IF MORE<>1 AND RESOLUT=0 THEN SCREEN 1:COLOR BACKOLOR,PALET.P:CLS:KEY OFF
60710   IF MORE<>1 AND RESOLUT=1 THEN SCREEN 2:KEY OFF:CLS
60720 KEY 20,CHR$(&H8)+CHR$(25):KEY (20) ON
60730 ON KEY (20) GOSUB 63720
60740 KEY 17,CHR$(&H8)+CHR$(48):KEY (17) ON
60750 ON KEY (17) GOSUB 63780
60760   XINC.P=XINC:YINC.P=YINC
60770   XRANGE.P=XMAX-XMIN:YRANGE.P=YMAX-YMIN
60780 IF XINC<=0 THEN XINC.P=10^(INT(LOG(XRANGE.P*0.66)/LOG(10)))
60790 IF YINC<=0 THEN YINC.P=10^(INT(LOG(YRANGE.P*0.66)/LOG(10)))
60800   XMIN.P=XINC.P*INT(XMIN/XINC.P):XMAX.P=XINC.P*(INT((XMAX/XINC.P)+0.49))
60810   YMAX.P=YINC.P*INT((YMAX/YINC.P)+0.49):YMIN.P=YINC.P*(INT(YMIN/YINC.P))
60820 IF XLIN=1 THEN XMAX.P=LOG(XMAX)/LOG(10):XMIN.P=LOG(XMIN)/LOG(10)
60830 IF YLIN=1 THEN YMAX.P=LOG(YMAX)/LOG(10):YMIN.P=LOG(YMIN)/LOG(10)
60840   XRANGE.P=XMAX.P-XMIN.P:YRANGE.P=YMAX.P-YMIN.P
60860   XT.P=XRANGE.P*(9./XLEN):YT.P=YRANGE.P*(7./YLEN)
60870   TICX=0.03*XRANGE.P:TICY=0.04*YRANGE.P
60880 XTRA=(XT.P-XRANGE.P)*9/XT.P:YTRA=(YT.P-YRANGE.P)*7/YT.P
60885  FACT.P=1.16:IF RESOLUT=2 THEN FACT.P=1.4
60890   LBD.X=XMIN.P-(FACT.P*XT.P/9)
60900   LBD.Y=YMIN.P-(1.1*YT.P/7)
60910   UBD.X=XMAX.P+((XTRA-1.)*XT.P/9):UBD.Y=YMAX.P+((YTRA-1.)*YT.P/7)
60920   RANGE.X=UBD.X-LBD.X:RANGE.Y=UBD.Y-LBD.Y
60925  DX=SIZE*XRANGE.P/100.:DY=(XTOT*DX/RANGE.X)*RANGE.Y/YTOT
60930 XLOW.P=XMIN.P-LBD.X:YLOW.P=YMIN.P-LBD.Y
60940 XHI.P=XT.P-XRANGE.P-XLOW.P:YHI.P=YT.P-YRANGE.P-YLOW.P
60950   XP.P=(1./XTOT)*(UBD.X-LBD.X)
60960   IF MORE<>1 THEN XX1=XMIN.P:XX2=XMAX.P:YY1=YMIN.P:YY2=YMAX.P:KLR=AXISCOLR:BOX=1:GOSUB 63840
60970   IF MORE<>1 AND RESOLUT<>2 THEN XX1=XMIN.P+XP.P:XX2=XMAX.P+XP.P:YY1=YMIN.P:YY2=YMAX.P:GOSUB 63840
60980 STYLE=&HFFFF:IF LTYPE=0 THEN STYLE=&H0
60990 IF LTYPE=2 THEN STYLE=&HF0F0
61000 IF LTYPE=3 THEN STYLE=&HC0C0
61010 IF LTYPE=4 THEN STYLE=&H0
61020 IF MORE=1 THEN 62720
61030 '
61040   'label axes
61050 '
61060 ' pen plotting
61070 IF RESOLUT<>2 THEN 61210
61080 XPOS%=(2500.*(XMIN.P+(XRANGE.P/2)-LBD.X)/RANGE.X)-(LEN(XLAB$)*SIZLABL*10)
61090 YPOS%=(1838.*(YMIN.P-LBD.Y)/RANGE.Y)-((70+(SIZNUMB*20))+(20.*SIZLABL))
61100 LPRINT "MA ";XPOS%;",";YPOS%;";"
61110 II%=SIZLABL:LPRINT "CS ";II%;";";:LPRINT "RO 0;TX ;";XLAB$;";"
61120 LPRINT "MA ";XPOS%+2;",";YPOS%;";"
61130 II%=SIZLABL:LPRINT "CS ";II%;";";:LPRINT "RO 0;TX ;";XLAB$;";"
61140 XPOS%=(2500.*(XMIN.P-LBD.X)/RANGE.X)-(40+(SIZNUMB*20*(LEN(STR$(YMAX.P))+1.5)))
61150 YPOS%=(1838.*(YMIN.P+(YRANGE.P/2)-LBD.Y)/RANGE.Y)-(LEN(YLAB$)*SIZLABL*10)
61160 LPRINT "MA ";XPOS%;",";YPOS%;";"
61170 LPRINT "CS ";II%;";":LPRINT "RO 90;TX ;";YLAB$;";"
61180 LPRINT "MA ";XPOS%;",";YPOS%+2;";"
61190 LPRINT "CS ";II%;";":LPRINT "RO 90;TX ;";YLAB$;";"
61200 GOTO 61270
61210 ' screen plotting
61220 YPOS.P=25.-(25.*((YLOW.P+(YRANGE.P/2.))/YT.P))-(LEN(YLAB$)/2.)
61230 FOR I=1 TO LEN(YLAB$):YT$=MID$(YLAB$,I,1):LOCATE I+YPOS.P,1:PRINT YT$;:NEXT I
61240 XPOS.P=((XLOW.P+(XRANGE.P/2.))*NCOLUMS/XT.P)-(LEN(XLAB$)/2)
61250 LOCATE 25,XPOS.P:PRINT XLAB$;
61260 '
61270 '  Print label on figure in specified corner
61280 '
61290 '
61300 IF CORNER=0 THEN GOTO 61550
61310 MAXLEN=0:IF LEN(LAB3$)>MAXLEN THEN MAXLEN=LEN(LAB3$)
61320 IF LEN(LAB2$)>MAXLEN THEN MAXLEN=LEN(LAB2$)+1
61330 IF LEN(LAB1$)>MAXLEN THEN MAXLEN=LEN(LAB1$)+1
61340 IF RESOLUT=2 THEN 61430
61350 IF CORNER=1 OR CORNER=2 THEN XPOS.P=((XLOW.P/XT.P)*NCOLUMS)+(3+(3*RESOLUT))
61360 IF CORNER=3 OR CORNER=4 THEN XPOS.P=(((XLOW.P+XRANGE.P)/XT.P)*NCOLUMS)-MAXLEN-(1+RESOLUT)
61370 IF CORNER=2 OR CORNER=4 THEN YPOS.P=((YHI.P/YT.P)*26)+3
61380 IF CORNER=1 OR CORNER=3 THEN YPOS.P=(((YHI.P+YRANGE.P)/YT.P)*26.)-4.
61390 LOCATE YPOS.P,XPOS.P:PRINT LAB1$;
61400 LOCATE YPOS.P+1,XPOS.P:PRINT LAB2$;
61410 LOCATE YPOS.P+2,XPOS.P:PRINT LAB3$;
61420 GOTO 61530
61430 ' pen drawing
61440 IF CORNER=1 OR CORNER=2 THEN XPOS%=(2500.*(XMIN.P+(2*TICX)-LBD.X)/RANGE.X)
61450 IF CORNER=3 OR CORNER=4 THEN XPOS%=(2500.*(XMAX.P-(2*TICX)-LBD.X)/RANGE.X)-(20*SIZNUMB*(MAXLEN+1))
61460 IF CORNER=2 OR CORNER=4 THEN YPOS%=(1838.*(YMAX.P-(2*TICY)-LBD.Y)/RANGE.Y)-(20*SIZNUMB)
61470 IF CORNER=1 OR CORNER=3 THEN YPOS%=(1838.*(YMIN.P+TICY-LBD.Y)/RANGE.Y)+((3*20*SIZNUMB)+40)
61480 II%=SIZNUMB:LPRINT "CS ";II%;";RO 0;"
61490 LPRINT "MA ";XPOS%;",";YPOS%;";":LPRINT "TX ;";LAB1$;";";
61500 LPRINT "MA ";XPOS%;",";YPOS%-(20*SIZNUMB)-20;";":LPRINT "TX ;";LAB2$;";";
61510 LPRINT "MA ";XPOS%;",";YPOS%-(40*SIZNUMB)-40;";":LPRINT "TX ;";LAB3$;";"
61520 '
61530 ' tic marks and numbers on linear x axis
61540 '
61550 IF XLIN=1 THEN 61830
61560 FOR I=1 TO 2
61570   FOR XTIC=XMIN.P TO XMAX.P STEP XINC.P
61580           IF I=1 THEN XX1=XTIC:YY1=YMIN.P:XX2=XTIC:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 63840
61590           IF I=1 AND RESOLUT=1 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 63840
61600           IF I=2 THEN XX1=XTIC:XX2=XTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 63840
61610           IF RESOLUT=1 AND I=2 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 63840
61620           IF XTIC<XMIN.P+XINC.P THEN 61690
61630           HALF.P=XTIC-(0.5*XINC.P)
61640           IF I=1 THEN XX1=HALF.P:XX2=HALF.P:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):KLR=AXISCOLR:BOX=0:GOSUB 63840
61650           IF RESOLUT=1 AND I=1 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):GOSUB 63840
61660           IF I=2 THEN XX1=HALF.P:XX2=HALF.P:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 63840
61670           IF RESOLUT=1 AND I=2 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:GOSUB 63840
61680           IF RESOLUT=1 AND I=2 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:GOSUB 63840
61690 IF I=2 THEN GOTO 61780
61700 IF RESOLUT=2 THEN 61740
61710           XPOS.P=(((XLOW.P+(XTIC-XMIN.P))/XT.P)*NCOLUMS)-(LEN(STR$(XTIC))/2)
61720           LOCATE 23,XPOS.P:PRINT XTIC;
61730 GOTO 61780
61740 XPOS%=(2500.*(XTIC-LBD.X)/RANGE.X)-(20.*SIZNUMB*(LEN(STR$(XTIC))+0.5)/2.)
61750 YPOS%=(1838.*(YMIN.P-LBD.Y)/RANGE.Y)-(20.*SIZNUMB)-20.
61760 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
61770 LPRINT "TX ;";STR$(XTIC);";"
61780   NEXT XTIC
61790 NEXT I
61800 '
61810 '         tic marks and numbers on linear y axis
61820 '
61830 IF YLIN=1 THEN 62100
61840 FOR I=1 TO 2
61850   FOR YTIC=YMIN.P TO YMAX.P STEP YINC.P
61860           IF I=1 THEN XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 63840
61870           IF I=2 THEN XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 63840
61880           IF YTIC<YMIN.P+YINC.P THEN 61920
61890           HALF.P=YTIC-(YINC.P/2)
61900           IF I=1 THEN XX1=XMIN.P:XX2=XMIN.P+(TICX/2):YY1=HALF.P:YY2=HALF.P:GOSUB 63840
61910           IF I=2 THEN XX1=XMAX.P-(TICX/2):XX2=XMAX.P:YY1=HALF.P:YY2=HALF.P:GOSUB 63840
61920 IF I=2 THEN 62040
61930   IF RESOLUT=2 THEN 62000
61940           YPOS.P=((YHI.P+(YMAX.P-YTIC))/YT.P)*26.
61950           XPOS.P=(3+(3*RESOLUT))-(LEN(STR$(YTIC))/2)
61960           IF YPOS.P>25 OR YPOS.P<1 THEN BEEP:GOTO 62040
61970           IF XPOS.P>NCOLUMS OR XPOS.P<1 THEN BEEP:GOTO 62040
61980           LOCATE YPOS.P,XPOS.P:PRINT YTIC
61990           GOTO 62040
62000 XPOS%=(2500.*(XMIN.P-LBD.X)/RANGE.X)-(20.*SIZNUMB*LEN(STR$(YTIC)))-20.
62010 YPOS%=(1838.*(YTIC-LBD.Y)/RANGE.Y)-(10.*SIZNUMB)
62020 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
62030 LPRINT "TX ;";STR$(YTIC);";"
62040   NEXT YTIC
62050 NEXT I
62060 '
62070 '         tic marks and numbers on log x axis
62080 '
62090 '
62100 IF XLIN=0 THEN 62390
62110 FOR I=1 TO 2
62120   FOR CYC=-5 TO 5
62130           FOR LTIC=1 TO 10
62140           XTIC=LTIC*(10^CYC)
62150           LXTIC=LOG(XTIC)/LOG(10)
62160           IF LXTIC<=XMIN.P OR LXTIC>=XMAX.P THEN 62210
62170           IF I=1 THEN XX1=LXTIC:XX2=LXTIC:YY1=YMIN.P:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 63840
62180           IF RESOLUT=1 AND I=1 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 63840
62190           IF I=2 THEN XX1=LXTIC:XX2=LXTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 63840
62200           IF RESOLUT=1 AND I=2 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 63840
62210           NEXT LTIC
62220 IF I=2 THEN 62360
62230 IF RESOLUT=2 THEN GOTO 62270
62240   IF LXTIC>=XMIN.P AND LXTIC<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT XTIC;:IF LXTIC+0.5<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC+0.5-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT 3.*XTIC;
62250 GOTO 62360
62260 '
62270 IF LXTIC<XMIN.P OR LXTIC>XMAX.P THEN 62320
62280 XPOS%=(2500.*(LXTIC-LBD.X)/RANGE.X)-(20.*SIZNUMB*((LEN(STR$(XTIC))/2.)+0.5))
62290 YPOS%=(1838.*(YMIN.P-LBD.Y)/RANGE.Y)-(20.*SIZNUMB)-20.
62300 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
62310 LPRINT "TX ;";STR$(XTIC);";"
62320 IF LXTIC+0.477<XMIN.P OR LXTIC+0.477>XMAX.P THEN 62360
62330 XPOS%=(2500.*(LXTIC+0.477-LBD.X)/RANGE.X)-(20.*SIZNUMB*((LEN(STR$(3*XTIC))/2.)+0.5))
62340 YPOS%=(1838.*(YMIN.P-LBD.Y)/RANGE.Y)-(20.*SIZNUMB)-20.
62350 LPRINT "MA ";XPOS%;",";YPOS%;"; CS ";II%;"; RO 0; TX ;";STR$(3.*XTIC);";"
62360   NEXT CYC
62370 NEXT I
62380 '
62390 '         tic marks and numbers on log y axis
62400 '
62410 FOR I=1 TO 2
62420 IF YLIN=0 THEN 62690
62430   FOR CYC=-5 TO 5
62440           FOR LTIC=1 TO 10
62450           YTIC=LTIC*(10^CYC)
62460           LYTIC=LOG(YTIC)/LOG(10)
62470           IF LYTIC<=YMIN.P OR LYTIC>=YMAX.P THEN 62500
62480           IF I=1 THEN XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=LYTIC:YY2=LYTIC:KLR=AXISCOLR:BOX=0:GOSUB 63840
62490           IF I=2 THEN XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=LYTIC:YY2=LYTIC:GOSUB 63840
62500           NEXT LTIC
62510 IF I=2 THEN 62670
62520 IF RESOLUT=2 THEN 62570
62530  YPOS.P=((YHI.P+(YMAX.P-LYTIC))/YT.P)*26.
62540  XPOS.P=(3+(3*RESOLUT))-((LEN(STR$(YTIC))/2.))
62550  IF LYTIC>=YMIN.P AND LYTIC<=YMAX.P AND YPOS.P>=1 THEN LOCATE YPOS.P,XPOS.P:PRINT YTIC;
62560 GOTO 62670
62570 IF LYTIC<YMIN.P OR LYTIC>YMAX.P THEN 62620
62580 XPOS%=(2500.*(XMIN.P-LBD.X)/RANGE.X)-(20.*SIZNUMB*LEN(STR$(YTIC)))-20.
62590 YPOS%=(1838.*(LYTIC-LBD.Y)/RANGE.Y)-(10.*SIZNUMB)
62600 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
62610 LPRINT "TX ;";STR$(YTIC);";"
62620 IF LYTIC+0.477<YMIN.P THEN 62670
62630 IF LYTIC+0.477>YMAX.P THEN 62670
62640 XPOS%=(2500.*(XMIN.P-LBD.X)/RANGE.X)-(20.*SIZNUMB*LEN(STR$(3.*YTIC)))-20.
62650 YPOS%=(1838.*(LYTIC+0.477-LBD.Y)/RANGE.Y)-(10.*SIZNUMB)
62660 LPRINT "RO 0; CS ";II%;"; MA ";XPOS%;",";YPOS%;"; TX ;";STR$(3*YTIC);";"
62670   NEXT CYC
62680 NEXT I
62690 '
62700 '  now plot data on axes
62710 '
62720 SX=0:SY=0:SSX=0:SXY=0
62730 FOR I=1 TO NPTS
62740    X1(I)=X(I):IF XLIN=1 THEN X1(I)=LOG(X(I))/LOG(10)
62750    Y1(I)=Y(I):IF YLIN=1 THEN Y1(I)=LOG(Y(I))/LOG(10)
62760 ' plot the line
62770   IF I=1 THEN 63040
62780   IF LTYPE<1 OR LTYPE>3 THEN 63040
62790   IF RESOLUT=2 THEN 62870
62800   KLR=LINCOLOR:IF RESOLUT=1 THEN KLR=1
62810   XX1=XTOT*(X1(I-1)-LBD.X)/RANGE.X:XX2=XTOT*(X1(I)-LBD.X)/RANGE.X
62820   YY1=200.-((Y1(I-1)-LBD.Y)*200./RANGE.Y):YY2=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
62830   LINE (XX1,YY1)-(XX2,YY2),KLR,,STYLE
62840   LINE (XX1+1,YY1)-(XX2+1,YY2),KLR,,STYLE
62850 GOTO 63040
62860 '
62870 '         pen plotting
62880 DX2=0:DY2=0
62890 I1%=XTOT*(X1(I-1)-LBD.X)/RANGE.X
62900 I2%=XTOT*(X1(I)-LBD.X)/RANGE.X
62910 I3%=YTOT*(Y1(I-1)-LBD.Y)/RANGE.Y
62920 I4%=YTOT*(Y1(I)-LBD.Y)/RANGE.Y
62930 IF SYM=0 THEN 63010
62940 DX2=XTOT*DX/RANGE.X
62950 LENGTH=SQR(((I2%-I1%)^2)+((I4%-I3%)^2))
62960 IF LENGTH=0 THEN LENGTH=0.01
62970 DY2=DX2*(I4%-I3%)/LENGTH
62980 DX2=DX2*(I2%-I1%)/LENGTH
62990 I1%=I1%+DX2:I2%=I2%-DX2
63000 I3%=I3%+DY2:I4%=I4%-DY2
63010 LPRINT "LN ";I1%;",";I3%;",";I2%;",";I4%;";"
63020 '
63030 '      square
63040 IF SYM=0 THEN 63570
63050 IF SYM<1 OR SYM>2 THEN 63100
63060   IF SYM=1 THEN XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=1:KLR=PTCOLOR:GOSUB 63840
63070   IF SYM=1 OR SYM=2 THEN XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)+DY:KLR=PTCOLOR:BOX=1:GOSUB 63840
63080   IF SYM=2 AND RESOLUT<>2 THEN PAINT(((XX1+XX2)/2)+2,(YY1+YY2)/2.),PTCOLOR,PTCOLOR
63090 '     triangle
63100 IF SYM<3 OR SYM >4 THEN 63250
63110 DDX=DX*SQR(7/3):DDY=DY*SQR(7/3)
63120   XX1=X1(I)-DDX:XX2=X1(I)+DDX:YY1=Y1(I)-(DDY/2):YY2=Y1(I)-(DDY/2):KLR=PTCOLOR:BOX=0:GOSUB 63840
63130   XX1=X1(I):XX2=X1(I)-DDX:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63140   XX1=X1(I):XX2=X1(I)+DDX:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63150   XX1=X1(I)+XP.P:XX2=X1(I)+DDX+XP.P:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63160   XX1=X1(I)+XP.P:XX2=X1(I)-DDX+XP.P:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63170   XX1=X1(I)-DDX+XP.P:XX2=X1(I)+DDX+XP.P:YY1=Y1(I)-(DDY/2):YY2=Y1(I)-(DDY/2):GOSUB 63840
63180 IF RESOLUT=2 THEN GOTO 63250
63190 '
63200 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
63210 YY1=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
63220 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
63230 IF SYM=4 AND RESOLUT<>2 THEN PAINT (XX1+2,YY1+1),KLR:GOTO 63570
63240 '         circle
63250 IF SYM<5 OR SYM>6 THEN 63420
63260 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
63270 YY1=200.-((Y1(I)-LBD.Y)*200./RANGE.Y)
63280 DDX=XTOT*(2./SQR(3.14159))*DX/RANGE.X
63290 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
63300 IF RESOLUT=2 THEN 63350
63310    IF SYM=5 OR SYM=6 THEN CIRCLE (XX1,YY1),DDX,KLR:CIRCLE (XX1+1,YY1),DDX,KLR
63320 IF SYM=6 THEN PAINT (XX1+2,YY1+1),KLR,KLR
63330 GOTO 63420
63340 '
63350 XX1=(2500.*(X1(I)-LBD.X)/RANGE.X):YY1=1838.*(Y1(I)-LBD.Y)/RANGE.Y
63360 FOR J=1 TO 16
63370 XD%=XX1+(DDX*SIN(2.*3.14159*(J-1)/15)):YD%=YY1+(DDX*COS(2.*3.14159*(J-1)/15.))
63380 IF J=1 THEN LPRINT "MA ";XD%;",";YD%;";"
63390 IF J>1 THEN LPRINT "DA ";XD%;",";YD%;";"
63400 NEXT J
63410 '         X symbol
63420 IF SYM<>7 THEN 63570
63430 'IF RESOLUT=2 THEN 63400
63440 'XX=XTOT*(X1(I)-LBD.X)/RANGE.X
63450 'YY=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
63460 'DDX=XTOT*DX/RANGE.X:DDY=(DY*200!/RANGE.Y)
63470 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
63480 '  LINE (XX-DDX,YY-DDY)-(XX+DDX,YY+DDY),KLR:LINE (XX+DDX,YY-DDY)-(XX-DDX,YY+DDY),KLR
63490 '  LINE (XX-DDX+1,YY-DDY)-(XX+DDX+1,YY+DDY),KLR:LINE (XX+DDX+1,YY-DDY)-(XX-DDX+1,YY+DDY),KLR
63500 'GOTO 63430
63510 '
63520 XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=0:GOSUB 63840
63530 XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)+DY:YY2=Y1(I)-DY:BOX=0:GOSUB 63840
63540 XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=0:GOSUB 63840
63550 XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)+DY:YY2=Y1(I)-DY:BOX=0:GOSUB 63840
63560 '  end of loop to do all points - calculate sum of squares
63570   SY=SY+Y1(I):SX=SX+X1(I):SSX=SSX+(X1(I)^2):SXY=SXY+(X1(I)*Y1(I))
63580 NEXT I
63590 '
63600 ' Regression line plotted
63610 IF LTYPE<>4 THEN RETURN
63620 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
63630 B=(SY/NPTS)-(A*SX/NPTS)
63640 XMN=(YMIN.P-B)/A:XMX=(YMAX.P-B)/A
63650 IF XMN<XMIN.P THEN XMN=XMIN.P
63660 IF XMX>XMAX.P THEN XMX=XMAX.P
63670 YMN=(A*XMN)+B:YMX=(A*XMX)+B
63680 XX1=XMN:XX2=XMX:YY1=YMN:YY2=YMX:KLR=LINCOLOR:BOX=0:GOSUB 63840
63690 XX1=XMN+XP.P:XX2=XMX+XP.P:YY1=YMN:YY2=YMX:GOSUB 63840
63700 '
63710 RETURN
63720 '
63730 ' key trap of Alt-P to change palette
63740 '
63750 PALET.P=1-PALET.P
63760 COLOR BACKOLOR,PALET.P
63770 RETURN
63780 '
63790 ' key trap of Alt-B to change background color
63800 '
63810 BACKOLOR=BACKOLOR+1
63820 COLOR BACKOLOR,PALET.P
63830 RETURN
63840 '
63850 ' Subroutine to plot line - replaces WINDOW subroutine
63860 ' Calculation to convert real coordinates to screen coordinates
63870 ' To call this subroutine set xx1=first x value, xx2=second x value
63880 '   yy1,yy2=first and second y values
63890 '   range.x=real value limit of screen border
63900 '   range.y= range of y values that corresponds to entire screen
63910 '   xmin.p, ymin.p are the minimun values on the x and y axes
63920 '   KLR= color of line
63930 '   box=0 if no box, =1 if box to be drawn
63940 '   fill=0 if not to fill box, =1 if box to be filled
63950 '   Style$ for dotted or dashed lines is bit template
63960 '   RESOLUT =0 for 320x200   =1 for 640x200
63970 '         in 320x200 mode KLR is the color, in 640x200 is ignored
63980 '
63990 IF RESOLUT=2 THEN 64080
64000 YY2=200.-((YY2-LBD.Y)*200./RANGE.Y)
64010 YY1=200.-((YY1-LBD.Y)*200./RANGE.Y)
64020 XX1=XTOT*(XX1-LBD.X)/RANGE.X
64030 XX2=XTOT*(XX2-LBD.X)/RANGE.X
64040 IF RESOLUT=1 THEN KLR=1
64050 IF BOX=1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR,B
64060 IF BOX<>1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR
64070 RETURN
64080 '
64090 ' This section to convert line segments to plot
64100 ' commands for the Sweet-P or Epson Comrex Comscriber I plotters.
64110 ' To plot on plotter:
64120 '         1. align paper in plotter
64130 '         2. turn plotter on
64140 '         3. Set resolut=2 by setting the appropriate parameter in
64150 '                         specifications menu
64160 '         4. When the command is given to plot it will come
64170 '                 out on the plotter rather than on the screen.
64180 '----------------------------------------------------------------
64190 I1%=2500*(XX1-LBD.X)/RANGE.X
64200 I2%=2500*(XX2-LBD.X)/RANGE.X
64210 I3%=1838*(YY1-LBD.Y)/RANGE.Y
64220 I4%=1838*(YY2-LBD.Y)/RANGE.Y
64230 IF BOX<>1 THEN LPRINT "LN ";I1%;",";I3%;",";I2%;",";I4%;";"
64240 IF BOX<>1 THEN RETURN
64250 LPRINT "LN ";I1%;",";I3%;",";I1%;",";I4%;";"
64260 LPRINT "DA ";I2%;",";I4%;";"
64270 LPRINT "DA ";I2%;",";I3%;";"
64280 LPRINT "DA ";I1%;",";I3%;";"
64290 RETURN
64300 '
```

## PRINTQUE.BAS

```bas
10 'PRINTQUE by Harold Brown 1983
20 '
30 '
100 'Initialization
110 '
120 CLS:DEFINT A-Z
130 DEF SEG=0:POKE 1047,32:DEF SEG    'turn on num lock, reset DS for clearing                                          line buffer when needed
140 GOODSET$="<>(){}@#$%^&*!-_`'\~|"  'Non-alphanumeric characters allowed in                                          file name
150 ON ERROR GOTO 3500
160 ERRS=0                  'counts number of files not printed
170 OPT=0                   'holds multiple copy option
180 GO=0                    'holds back printer setup until a file is                                        ready to print
190 SET=0                   'used in line 490 to block effect of                                             inappropriate carriage return
200 ERR.OFF=0               '1 indicates normal error control is off,                                        used only for collated printing
210 PASS=0                  'used only with collated printing and ERR.OFF=1,                                 PASS=1 if all unprintable files have been noted
220 'End initialization
230 '
240 '
250 '
300 'Enter name of files to be printed
310 '
320 NUM.FILE=0              'Counts files as entered
330 LOCATE 12,15:INPUT "Enter maximum number of files to be listed";MAX$
340 MAX=VAL(MAX$)           'MAX=maximum number of files for this run
350 IF MAX=0 THEN BEEP:CLS:LOCATE 10,15:    PRINT "Please enter a number greater than 0":GOTO 330
360 DIM FILE$(MAX),NOFILE$(MAX),ERRNUM(MAX)  'File names, names of files not                                    printed,location in que of files not printed
370 CLS:LOCATE 12,20:PRINT "More than one copy of any files (y/n)"
380 K$=INKEY$:IF K$="" GOTO 380
390 IF K$<>"Y" AND K$<>"y" AND K$<>"N" AND K$<>"n" THEN BEEP:POKE 106,0:GOTO 380    'POKE clears line buffer, eliminates need to turn off function keys
400 IF K$="Y" OR K$="y" GOTO 2800      'Goto multiple copy routine
410 '
420 'Begin entry of file names
430 'This code used for single copy option and multiple copy options 1 & 2
440 '
450 CLS
460 LOCATE 12,10:      PRINT "Enter name of file #"NUM.FILE+1" or press ENTER to terminate entry"
470 LOCATE 14,10:INPUT ;P$  'holds name of file temporarily
480 'Normally next line transfers to Print Command when carriage return is        entered for file name.  SET blocks this transfer if a carriage return is        entered in answering multiple copy question in line 370.
490 IF P$="" THEN IF SET=0 THEN SET=1:GOTO 460 ELSE GOTO 1100
500 NUM.FILE=NUM.FILE+1     'increment file count
510 GOSUB 600               'check file name
520 GOTO 450                'continue file name entry
530 '
540 '
550 '
600 'Test for valid file name
610 '
620 COLON=0                    'COLON=2 if name has colon
630 DOT=0:DOTLOC=0             'DOT=1 if name has extension, DOTLOC=                                            location of dot
640 LEN.NAME=LEN(P$)           'length of file name
650 IF LEN.NAME>14 GOTO 1000   'invalid filename
660 FOR CHR=1 TO LEN.NAME
670 HOLD$=MID$(P$,CHR,1)
680 IF CHR=2 AND HOLD$=":" THEN COLON=2:GOTO 760      'check for device name
690 IF DOT=0 AND HOLD$="." THEN DOT=1:DOTLOC=CHR:GOTO 760  'check for extension
700 H=ASC(HOLD$):IF H>96 AND H<123 THEN H=H-32:HOLD$=CHR$(H)  'name in caps
710 IF (H>47 AND H<58) OR (H>64 AND H<91) GOTO 760   'number or cap letter
720 FOR J=1 TO 21
730 IF HOLD$=MID$(GOODSET$,J,1) GOTO 760    'check for invalid characters
740 NEXT J
750 GOTO 1000   'Invalid character in file name
760 FILE$(NUM.FILE)=FILE$(NUM.FILE)+HOLD$   'concatenate valid character
770 NEXT CHR
780 'No invalid character in file name, check length of fields
790 ON DOT+COLON+1 GOTO 810,830,870,920
800 'No dot, no colon
810 IF LEN.NAME>8 GOTO 1000 ELSE GOTO 980
820 'Dot, no colon
830 IF LEN.NAME<2 GOTO 1000
840 IF DOTLOC=1 GOTO 1000   'extension without file name
850 IF DOTLOC>9 OR LEN.NAME-DOTLOC>3 GOTO 1000 ELSE GOTO 980
860 'Colon, no dot
870 IF LEN.NAME<3 GOTO 1000
880 IF LEN.NAME>10 GOTO 1000
890 TEST=ASC(LEFT$(FILE$(NUM.FILE),1))             'check drive indicator
900 IF TEST<65 OR TEST>68 GOTO 1000 ELSE GOTO 980  '***drive indicator must be                                                        A,B,C, or D
910 'Dot and colon
920 IF LEN.NAME<4 GOTO 1000
930 IF DOTLOC=3 GOTO 1000   'extension without filename
940 IF DOTLOC>11 GOTO 1000
950 IF LEN.NAME-DOTLOC>3 GOTO 1000
960 GOTO 890                    'Check drive indicator
970 '
980 'Valid file name, check if maximum number of programs has been entered
990 IF NUM.FILE<MAX THEN CLS:RETURN ELSE RETURN 1100
1000 'invalid filename
1010 CLS:BEEP:LOCATE 10,10:PRINT "Invald File Name:  "P$:FILE$(NUM.FILE)="":      NUM.FILE=NUM.FILE-1:RETURN
1020 'End file name analysis
1030 'End file name entry
1040 '
1050 '
1060 '
1100 'Print command
1110 '
1120 BEEP:CLS:LOCATE 12,20:PRINT "You have entered "NUM.FILE" program names"
1130 LOCATE 14,25:PRINT "Press ENTER to print"
1140 LOCATE 16,25:PRINT "Press ESC to restart"
1150 LOCATE 18,25:PRINT "Press A to abort Printque"
1160 Y$=INKEY$:IF Y$="" GOTO 1160
1170 Y=ASC(Y$)
1180 IF Y<>13 AND Y<>27 AND Y$<>"A" AND Y$<>"a" THEN BEEP:GOTO 1160
1190 IF Y=13 GOTO 1300      'print
1200 IF Y$="A" OR Y$="a" GOTO 4220   'abort Printque
1210 '
1220 'Erase arrays and restart
1230 IF OPT=3 THEN ERASE VARCOP:OPT=0
1240 ERASE FILE$,NOFILE$,ERRNUM:CLS:GOTO 320
1250 'End print command
1260 '
1270 '
1280 '
1300 'Print files
1310 '
1320 IF OPT=2 THEN FOR MULT2=1 TO NCOP      'multiple copies, option 2
1330 FOR ITEM=1 TO NUM.FILE                 'print NUM.FILE distinct files
1340 IF OPT=2 AND NOFILE$(ITEM)<>"" GOTO 1550  'prevents multiple searches for a                                                single file on option 2
1350 MSG=0        '1 indicates name of file being printed is on screen
1360 TRY=0        'counts number of attempts to find a file, 2 attempts max
1370 ASCTST=0     '0 indicates that test for ASCII format has not been done
1380 IF OPT=1 THEN FOR MULT1=1 TO NCOP          'multiple copies, option 1
1390 IF OPT=3 THEN FOR MULT3=1 TO VARCOP(ITEM)  'multiple copies, option 3
1400 HEAD=0       '0 indicates that header has not been printed
1410 OPEN "I",1,FILE$(ITEM)
1420 'Read in first line of file, check format and begin printing if format           is o.k.
1430 LINE INPUT #1, X$
1440 IF ASCTST=0 THEN GOSUB 2500        'test for ASCII format
1450 IF MSG=0 THEN MSG=1:CLS:CNT=32-LEN(FILE$(ITEM))/2:LOCATE 12,CNT:             PRINT "Printing File "FILE$(ITEM)     'name of file on screen
1460 IF HEAD=0 THEN GOSUB 2300          'print file name on first page
1470 '***Count number of lines printed on page, print file name and number on    each new page.  Maximum on LCOUNT should be checked if double width is not used for title.
1480 '***Program is set for 62 lines per page with 4 space bottom margin, this    can be changed.  Top margins are set in subroutines 2200 and 2300.
1490 LNS=INT(LEN(X$)/80)+1   'number of print lines to be added to printed text
1500 IF LCOUNT + LNS>62 THEN GOSUB 2200 ELSE LCOUNT=LCOUNT+LNS  'program lines                                                     are not split between pages
1510 LPRINT X$
1520 IF EOF(1) THEN CLOSE:LPRINT CHR$(12) ELSE GOTO 1430
1530 IF OPT=3 THEN NEXT MULT3
1540 IF OPT=1 THEN NEXT MULT1
1550 CLS:MSG=0:NEXT ITEM
1560 IF OPT=2 THEN NEXT MULT2
1570 'End of printing.
1580 '
1590 'Check if all files were printed.
1600 IF ERRS=0 THEN CLS:LOCATE 12,30 :PRINT "All files printed":DEF SEG=0:POKE   1047,0:DEF SEG:END   'turn off num lock and reset DS
1610 'End of program if all requested files are printed.
1620 '
1630 '
1640 '
1700 'List files not printed
1710 '
1720 CLS:LOCATE 1,10:     PRINT NUM.FILE" Files requested, "NUM.FILE-ERRS" files printed, "ERRS" files not printed."
1730 LOCATE 2,15:PRINT "To list names of files not printed:"
1740 LOCATE 3,20:PRINT "Press 1 for screen list"
1750 LOCATE 4,20:PRINT "Press 2 for printer list"
1760 LOCATE 5,20:PRINT "Press 3 for both"
1770 LOCATE 6,20:PRINT "Press 0 to end program":PRINT
1780 K$=INKEY$:IF K$="" GOTO 1780
1790 IF K$="0" THEN CLS:DEF SEG=0:POKE 1047,0:DEF SEG:END  'see 1600
1800 IF K$<>"1" AND K$<>"2" AND K$<>"3" THEN BEEP:POKE 106,0:GOTO 1780    'POKE                clears line buffer, eliminates need to turn off function keys
1810 IF VAL(K$)=2 GOTO 2010
1820 'List names of files not printed to screen
1830 FOR X=1 TO NUM.FILE
1840 IF NOFILE$(X)="" GOTO 1900 ELSE PRINT TAB(10) NOFILE$(X) TAB(30);
1850 ON ERRNUM(X) GOTO 1860,1870,1880,1890
1860 PRINT "File not found":GOTO 1900
1870 PRINT "File not in ASCII format":GOTO 1900
1880 PRINT "Protected file-not in ASCII format":GOTO 1900
1890 PRINT "Disk not ready"
1900 NEXT
1910 'End Screen listing
1920 '
1930 IF VAL(K$)=3 GOTO 2010
1940 PRINT:PRINT "Printer listing (y/n)"
1950 K$=INKEY$:IF K$="" GOTO 1950
1960 IF K$<>"Y" AND K$<>"y" AND K$<>"N" AND K$<>"n" THEN BEEP:POKE 106,0:GOTO       1950 'POKE clears line buffer, eliminates need to turn off function keys
1970 IF K$="N" OR K$="n" THEN DEF SEG=0:POKE 1047,0:DEF SEG:END  'see 1600
1980 'End of program if only screen listing is requested
1990 '
2000 'List names of files not printed to printer.
2010 LPRINT TAB(5) "The following files were not printed:":LPRINT
2020 FOR X=1 TO NUM.FILE
2030 IF NOFILE$(X)="" GOTO 2090 ELSE LPRINT TAB(5) NOFILE$(X) TAB(30);
2040 ON ERRNUM(X) GOTO 2050,2060,2070,2080
2050 LPRINT "File not found":GOTO 2090
2060 LPRINT "File not in ASCII format":GOTO 2090
2070 LPRINT "Protected file-not in ASCII format":GOTO 2090
2080 LPRINT "Disk not ready"
2090 NEXT
2100 LPRINT CHR$(12)
2110 DEF SEG=0:POKE 1047,0:DEF SEG:END   'see 1600
2120 'End listing of files not printed
2130 'End program when not all files are printed
2140 '
2150 '
2160 '
2200 'Leave bottom margin, print page number and reset line and page counters.
2210 FOR SKIP=1 TO 66-LCOUNT:LPRINT:NEXT    'bottom margin
2220 LCOUNT=5+LNS:PGCOUNT=PGCOUNT+1         '***Initial value of LCOUNT may be                                                  changed
2230 LPRINT:LPRINT:LPRINT TAB(60) HEAD$"/"PGCOUNT:LPRINT:LPRINT
2240 RETURN
2250 '
2260 '
2270 '
2300 'Print title
2310 HEAD=1
2320 'Strip drive designator from title
2330 LEN.HEAD=LEN(FILE$(ITEM))
2340 IF MID$(FILE$(ITEM),2,1)=":" THEN LEN.HEAD=LEN.HEAD-2:                       HEAD$=RIGHT$(FILE$(ITEM),LEN.HEAD) ELSE HEAD$=FILE$(ITEM)
2350 'Set up and print heading
2360 T=20-LEN.HEAD/2   '***Centers title for 80 columns and double width                                   printing
2370 LPRINT:LPRINT CHR$(14) TAB(T) HEAD$:LPRINT:LPRINT  '***Double width                                                                    printing
2380 PGCOUNT=1:LCOUNT=5 '***LCOUNT assumes double width printing for title
2390 RETURN
2400 '
2410 '
2420 '
2500 'Test for ASCII format
2510 IF X$="" THEN ASCTST=1:RETURN          'file begins with a blank line, ok
2520 TST=ASC(X$)
2530 IF TST<>254 AND TST<>255 THEN ASCTST=1:RETURN    'file in ASCII format
2540 IF ERR.OFF=0 GOTO 2700
2550 'Normal error trapping is off and file is not in ASCII format
2560 CLS:BEEP:LOCATE 10,25:PRINT "Printing collated files"
2570 LOCATE 12,25:PRINT FILE$(ITEM)"---";
2580 IF TST=254 THEN PRINT "Protected file--not in ASCII format":GOTO 2600
2590 PRINT "File not in ASCII format"
2600 LOCATE 14,25:PRINT "Press ENTER to skip this file and continue"
2610 LOCATE 16,25:PRINT "Press ESC to restart"
2620 LOCATE 18,25:PRINT "Press A to abort Printque"
2630 Y$=INKEY$:IF Y$="" GOTO 2630
2640 Y=ASC(Y$)
2650 IF Y<>13 AND Y<>27 AND Y$<>"A" AND Y$<>"a" THEN BEEP:GOTO 2630
2660 IF Y=13 GOTO 2700      'record missing file information
2670 IF Y=27 GOTO 1240      'erase arrays and restart
2680 GOTO 4220   'abort
2690 '
2700 CLOSE
2710 ERRS=ERRS+1           'file not in ASCII format
2720 NOFILE$(ITEM)=FILE$(ITEM)
2730 IF TST=254 THEN ERRNUM(ITEM)=3:RETURN 1550  'protected file
2740 ERRNUM(ITEM)=2:RETURN 1550                  'tokenized binary format
2750 '
2760 '
2770 '
2800 'Multiple copies
2810 '
2820 CLS:LOCATE 6,20:PRINT "Multiple Copy Options"
2830 LOCATE 8,15:PRINT "0. Cancel multiple copy option"
2840 LOCATE 10,15:PRINT "1. Same number of copies for each file--"
2850 LOCATE 11,18:PRINT "Files not collated"
2860 LOCATE 13,15:PRINT "2. Same number of copies for each file--"
2870 LOCATE 14,18:PRINT "Files collated"
2880 LOCATE 16,15:PRINT "3. Different number of copies for different files"
2890 K$=INKEY$:IF K$="" GOTO 2890
2900 IF ASC(K$)<48 OR ASC(K$)>51 THEN BEEP:GOTO 2890
2910 OPT=VAL(K$)
2920 ON OPT GOTO 3000,3060,3200
2930 GOTO 430       'Multiple copy option cancelled
2940 '
3000 'Multiple copy option 1: same number of copies of each file, uncollated
3010 '
3020 LOCATE 18,35:PRINT "Option 1"
3030 LOCATE 20,15:INPUT "Enter number of copies, or ENTER to change option";NCOP
3040 IF NCOP=0 GOTO 2820 ELSE GOTO 430  'change option or enter file names
3050 '
3060 'Multiple copy option 2: same number of copies for each file, collated
3070 '
3100 LOCATE 18,35:PRINT "Option 2"
3110 LOCATE 20,15:INPUT "Enter number of copies, or ENTER to change option";NCOP
3120 IF NCOP=0 GOTO 2820  'change option
3130 'For collated files, provides opportunity to turn off normal error               trapping.  This will give the option of stopping the run during the             first pass if a file is not available.
3140 LOCATE 22,15:PRINT "Collated files: Turn off normal error trapping (y/n)"
3150 K$=INKEY$:IF K$="" GOTO 3150
3160 IF NOT(K$="Y" OR K$="y" OR K$="N" OR K$="n") THEN BEEP:GOTO 3150
3170 IF K$="Y" OR K$="y" THEN ERR.OFF=1     'turns off error control except for                                              printer errors
3180 GOTO 430   'enter file names
3190 '
3200 'Multiple copy option 3: different numbers of copies for different files,        no collating available
3210 '
3220 LOCATE 18,35:PRINT "Option 3"
3230 LOCATE 20,15:PRINT "Press ENTER to change option or Space Bar to continue"
3240 K$=INKEY$:IF K$="" GOTO 3240
3250 IF ASC(K$)=13 GOTO 2820   'change option
3260 IF K$<>" " THEN BEEP:POKE 106,0:GOTO 3230   'POKE clears line buffer
3270 '
3280 'Begin entry of file names and number of copies. This code used only for         option 3.
3290 DIM VARCOP(MAX)   'Holds number of copies for each file
3300 CLS
3310 LOCATE 12,10: PRINT "Enter name of program # "NUM.FILE+1", number of copies required"
3320 LOCATE 14,10:INPUT "Or enter *,* to terminate entry";P$,NCOP$
3330 IF NCOP$="*" GOTO 1100                'entry complete, goto print command
3340 IF VAL(NCOP$)=0 THEN BEEP:GOTO 3300   'printing of a file cannot be                                                cancelled by asking for 0 copies
3350 NUM.FILE=NUM.FILE+1                  'increment file counter
3360 VARCOP(NUM.FILE)=VAL(NCOP$)
3370 GOSUB 600              'test for valid file name
3380 GOTO 3300              'enter next file name
3390 'End of multiple copy routine
3400 '
3410 '
3420 '
3500 'Error control
3510 '
3520 'Next line branches to routine that changes error control for unprintable        files.  This may be chosen in  multiple option 2.
3530 IF ERR.OFF=1 AND ERR<>25 AND ERR<>27 AND (ERR<>53 OR TRY=1) GOTO 4010
3540 IF ERR=25 OR ERR=27 GOTO 3600  'printer error
3550 IF ERR=53 GOTO 3700   'file not found
3560 IF ERR=71 GOTO 3900   'disk not ready
3570 ON ERROR GOTO 0       'permit error message for untrapped errors
3580 '
3600 'Printer Error
3610 FOR TM=1 TO 5:BEEP:NEXT:LOCATE 14,20:   PRINT "Check printer then press any key to continue."
3620 K$=INKEY$:IF K$="" GOTO 3620
3630 LOCATE 14,20:PRINT SPACE$(50);:RESUME
3640 '
3700 'File not found
3710 'If file name has no extension try adding .BAS
3720 IF TRY=1 THEN FILE$(ITEM)=NAMEHOLD$:TRY=0:GOTO 3810    'adding .BAS failed,                      restore original name of file and reset TRY for next file
3730 LEN.NAME=LEN(FILE$(ITEM))
3740 FOR K=1 TO LEN.NAME
3750 L$=MID$(FILE$(ITEM),K,1)
3760 IF L$="." GOTO 3810                   'name already has extension
3770 NEXT K
3780 NAMEHOLD$=FILE$(ITEM)                 'no extension, store file name
3790 FILE$(ITEM)=FILE$(ITEM)+".BAS":TRY=1  'add .BAS and try again
3800 RESUME                      'retry with extension .BAS
3810 ERRNUM(ITEM)=1              'file not found on 2 tries
3820 GOTO 3950
3830 '
3900 'Disk not ready
3910 ERRNUM(ITEM)=4:GOTO 3950
3920 '
3950 'Keep track of unprintable files
3960 ERRS=ERRS+1                 'ERRS counts nunber of files not printed
3970 NOFILE$(ITEM)=FILE$(ITEM)   'store name of unprinted file
3980 RESUME 1550
3990 'End error control
4000 '
4010 'Altered error trapping for collated files with ERR.OFF=1
4020 IF PASS=1 THEN RESUME 1550
4030 IF ITEM=NUM.FILE THEN PASS=1
4040 CLS:BEEP:LOCATE 10,25:PRINT "Printing collated files"
4050 LOCATE 12,25:PRINT FILE$(ITEM)"---";
4060 IF ERR=53 THEN PRINT "File not found":EHOLD=1:GOTO 4120
4070 IF ERR=71 THEN PRINT "Disk not ready":EHOLD=4:GOTO 4120
4080 'Untrapped error
4090 CLS:LOCATE 12,30:PRINT "Printque ended abnormally"
4100 ON ERROR GOTO 0     'permit Basic error message
4110 '
4120 'Options
4130 LOCATE 14,25:PRINT "Press ENTER to skip this file and continue"
4140 LOCATE 16,25:PRINT "Press ESC to restart"
4150 LOCATE 18,25:PRINT "Press A to abort Printque"
4160 Y$=INKEY$:IF Y$="" GOTO 4160
4170 Y=ASC(Y$)
4180 IF Y<>13 AND Y<>27 AND Y$<>"A" AND Y$<>"a" THEN BEEP:GOTO 4160
4190 IF Y=13 AND EHOLD=1 GOTO 3810
4200 IF Y=13 AND EHOLD=4 GOTO 3910      'record missing file information
4210 IF Y=27 GOTO 1240      'erase arrays and restart
4220 '
4250 'Abort Printque
4260 DEF SEG=0:POKE 1047,0:DEF SEG  'see 1600
4270 CLS:END
```

## SIMPLEX.BAS

```bas
1000 '===================================================================
1010 '
1020 '   SIMPLEX - a curve fitting program     Bob Shannon    17 Dec 1984
1030 '
1040 '===================================================================
1050 '  SIMPLEX - BASIC subroutine to fit an arbitrary function to
1060 '  a set of data points.  Uses the SIMPLEX algorithm by
1070 '  J.A. Nelder and R. Mead, "A Simplex method for function
1080 '  optimization", Computer Journal, 7, 308, 1965.
1085 '
1090 '  Adapted from a program by M.S. Caceci and W.P. Cacheris
1100 '                            Byte Magazine, 340-362, May, 1984
1110 '
1120 '  Uses a least-squares criterion to fit any function to a set
1130 '  of data points
1140 '
1150 '==================================================================
1160 '  The following parameters are passed to this subroutine:
1170 '
1180 '
1200 '  NP      number of data points
1230 '  X       array of NP data points - x axis
1240 '  Y       array of NP y axis data points
1242 '  STP     array of starting parameter values
1243 '            initial step size is set to .3 of initial values
1250 '
1260 '  The best fitting parameter values are returned in MEAN.
1270 '  On return the variable STDEV contains the average
1280 '  standard deviation of the fit.
1290 '
1300 '  The following default values are assumed:
1310 '
1320 '  ALPHA=1.0   reflection coefficient >0
1330 '  BETA=.5     Contraction coefficient 0 < beta <1
1340 '  GAMMA=2.0   Expansion Coefficient  > 1
1350 '
1355 '  NUM     is the number of parameters in the equation to fit
1360 '  NVPP=2      is the number of dimensions per data point
1370 '  MNPT=100    maximum number of data points
1380 '  MAXITER=500 maximum number of iterations
1390 '  CRIT=.0001  Convergence criterion for termination
1400 '
1410 '==============================================================
1420 '  The following variables are used internally in this routine.
1430 '  Do not use these variable names in your calling program.
1440 '
1450 '  NITER   number of iterations
1460 '  NXT     new vertex to be tested
1470 '  CENTER  center of hyperplane
1480 '  SIMP    array of num x num  points - the simplex
1490 '  L,H     arrays of num points for hi/low values
1500 '  P,Q     arrays used for first simplex calculation
1510 '  EROR    array of error values
1520 '
1530 '==============================================================
1540 '
1550 DIM CENTER(10),X(100),Y(100),SIMP(10,10),H(10),L(10)
1560 DIM NXT(10),P(10),Q(10),EROR(10),CRIT(10),STP(10),MEAN(10)
1570 '
1580 '-------------------------------------------------------------
1590 '  Either input your data here or set up the parameters
1600 '  and gosub to this routine.  The following example fits
1610 '  a linear equation to a set of data points.  The data
1620 '  does fall on one line, but each point has been jittered.
1630 '  You must also change the two function definitions
1640 '  below to reflect your desired function
1650 '-------------------------------------------------------------
1660 '
1665 RANDOMIZE TIMER
1670 NUM=2
1680 NP=30
1685 JITTER=5
1690 FOR I=1 TO 30
1700    X(I)=I:Y(I)=3*I+4
1705    Y(I)=Y(I)+(JITTER*(RND-0.5))
1710 NEXT I
1730 ' purposely bad initial estimates
1740 STP(1)=-256.5
1750 STP(2)=3000.1
1760 '
1770 '  Default values and constants
1780 '
1790 ROOT2   =1.414214
1800 N = NUM + 1
1810 MNPT=100:MAXITER=20*(NUM*NUM):NVPP=2
1820 ALPHA=1.:BETA=0.5:GAMMA=2.
1830 FOR I=1 TO N:SIMP(1,I)=STP(I):STP(I)=0.5*STP(I):CRIT(I)=0.0001:NEXT I
1840 '
1850 '---------------------------------------------------------
1860 ' Put your function to be fit in these statements
1870 '
1880 '  The data is assumed to be in the array X(NP).
1890 '  The parameters of the equation are found in the arrays
1900 '  NXT() and SIMP().  The first parameter is in NXT(1) and
1910 '  SIMP(i,1), second in NXT(2) and SIMP(i,2), and so on.
1920 '---------------------------------------------------------
1930 '
1935 NUM=2
1940 DEF FNSMPLX(A1,A2)=(SIMP(A1,1)*X(A2))+SIMP(A1,2)
1950 DEF FNEXT(A3)=(NXT(1)*X(A3))+NXT(2)
1960 '
1970 '--------------------------------------
1980 '  Start of SIMPLEX procedure
1990 '--------------------------------------
2000 '  compute starting simplex
2010 '
2020 SIMP(1,N)=0.:FOR I=1 TO NP:SIMP(1,N)=SIMP(1,N)+((FNSMPLX(1,I)-Y(I))^2):NEXT I
2030 FOR I=1 TO NUM
2040    P(I)=STP(I)*((SQR(N)+NUM-1)/(NUM*ROOT2))
2050    Q(I)=STP(I)*((SQR(N)-1)/(NUM*ROOT2))
2060 NEXT I
2070 '
2080 FOR I=2 TO N
2090    FOR J=1 TO NUM
2100            SIMP(I,J)=SIMP(1,J)+Q(J)
2110    NEXT J
2120    SIMP(I,I-1)=SIMP(1,I-1)+P(I-1)
2130    SIMP(I,N)=0:FOR K=1 TO NP:SIMP(I,N)=SIMP(I,N)+((FNSMPLX(I,K)-Y(K))^2):NEXT K
2140 NEXT I
2150 '
2160 FOR I=1 TO NUM+1
2170    L(I)=1:H(I)=1
2180 NEXT I
2190 GOSUB 3050
2200 '
2210 NITER=0
2220 '
2230 '  What follows is the iteration sequence of the SIMPLEX program
2240 '
2250 DONE=1
2260 NITER=NITER+1
2270 PRINT "Iteration number ";NITER;NXT(1);NXT(2);NXT(3)
2280 '
2290 FOR I=1 TO N:CENTER(I)=0.:NEXT I
2300 '
2310 FOR I=1 TO N
2320    IF I=H(N) THEN 2360
2330    FOR J=1 TO NUM
2340            CENTER(J)=CENTER(J)+SIMP(I,J)
2350    NEXT J
2360 NEXT I
2370 '
2380 '  first attempt to reflect
2390 '
2400 FOR I=1 TO N
2410    CENTER(I)=CENTER(I)/NUM
2420    NXT(I)=((1.+ALPHA)*CENTER(I))-(ALPHA*SIMP(H(N),I))
2430 NEXT I
2440 '
2450 NXT(N)=0:FOR I=1 TO NP:NXT(N)=NXT(N)+((FNEXT(I)-Y(I))^2):NEXT I
2460 '
2470 IF NXT(N)>SIMP(L(N),N) THEN 2560
2480    GOSUB 3140
2490    FOR I=1 TO NUM
2500            NXT(I)=(GAMMA*SIMP(H(N),I))+((1.-GAMMA)*CENTER(I))
2510    NEXT I
2520    NXT(N)=0:FOR I=1 TO NP:NXT(N)=NXT(N)+((FNEXT(I)-Y(I))^2):NEXT I
2530    IF NXT(N)<=SIMP(L(N),N) THEN GOSUB 3140
2540  GOTO 2790
2550 '
2560 IF NXT(N)>SIMP(H(N),N) THEN 2610
2570    GOSUB 3140
2580    GOTO 2790
2590 '
2600 '  Contract simplex
2610 FOR I=1 TO NUM
2620    NXT(I)=(BETA*SIMP(H(N),I))+((1.-BETA)*CENTER(I))
2630 NEXT I
2640 '
2650 NXT(N)=0:FOR I=1 TO NP:NXT(N)=NXT(N)+((FNEXT(I)-Y(I))^2):NEXT I
2660 IF NXT(N)>SIMP(H(N),N) THEN 2710
2670 GOSUB 3140
2680 GOTO 2790
2690 '
2700 '  shrink all bad vertexes
2710 FOR I=1 TO N
2720    FOR J=1 TO NUM
2730            SIMP(I,J)=BETA*(SIMP(I,J)+SIMP(L(N),J))
2740    NEXT J
2750    SIMP(I,N)=0:FOR K=1 TO NP:SIMP(I,N)=SIMP(I,N)+((FNSMPLX(I,K)-Y(K))^2):NEXT K
2760 NEXT I
2770 '
2780 '
2790 GOSUB 3050
2800 '
2810 '  Check to see if done
2820 '
2830 FOR I=1 TO N
2840    EROR(I)=(SIMP(H(I),I)-SIMP(L(I),I))/SIMP(H(I),I)
2850    IF EROR(I)>CRIT(I) THEN DONE=0
2860 NEXT I
2870 '
2880 '
2890 IF DONE=0 AND NITER<MAXITER THEN GOTO 2230
2900 '
2910 '
2920 FOR I=1 TO N
2930    MEAN(I)=0.
2940    FOR J=1 TO N
2950            MEAN(I)=MEAN(I)+SIMP(J,I)
2960    NEXT J
2970    MEAN(I)=MEAN(I)/N
2980    STDEV=MEAN(N)
2990 NEXT I
3000 '
3010 PRINT "DONE ! - final values slope = ";MEAN(1);"  intercept = ";MEAN(2)
3020 PRINT "     Standard deviation from best fit line is ";SQR(STDEV)/NP
3030 STOP
3040 '==============================================================
3050 '  order - gives hi/low in each parameter
3060 '
3070 FOR I=1 TO N
3080    FOR J=1 TO N
3090            IF SIMP(I,J)<SIMP(L(J),J) THEN L(J)=I
3100            IF SIMP(I,J)>SIMP(H(J),J) THEN H(J)=I
3110    NEXT J
3120 NEXT I
3130 RETURN
3140 '==============================================================
3150 '  NEW VERTEX subroutine - next in place of the worst
3160 '
3170 FOR I=1 TO N
3180    SIMP(H(N),I)=NXT(I)
3190 NEXT I
3200 RETURN
3210 '==============================================================
```

## SUBGRAF2.BAS

```bas
60000 '________________________________________________________________
60010 ' SUBGRAF2       May 10,1984             Bob Shannon
60020 '
60030 'SUBGRAF2 is a BASIC subroutine that will plot any set of data.
60040 'It defines the coordinates of the screen, draws
60050 'the grid with tic marks, numbers, and labels on each axis.
60060 'It also prints a 3 line label in one corner. The user can specify
60070 'the size and proportion of the figure in inches. Either linear
60080 'or logarithmic axes are allowed on both ordinate and abcissa.
60090 '
60100 ' Alt-C controls the color of the plot, the entire figure is
60110 ' plotted in the chosen color. The color option does not
60120 ' affect the printer dump print density.
60130 '---------------------------------------------------------------
60140 'Calling sequence:
60150 '         1. MERGE "SUBGRAF2.bas" with your program
60160 '         2. Save a new copy of your program which includes subroutine
60170 '         3. Set up the parameters as defined below
60180 '         4. gosub 60000 at point where you want the plot
60190 '
60200 '---------------------------------------------------------------
60210 'Parameters:    Do not use these names elsewhere in your program
60220 '
60230 ' SYM             symbol type (0=none,1=open sq,2=fill sq,3=open tri
60240 '                         4=fill tri,5=open cir,6=fill cir
60250 '                         7=open diamond,8=filled diamond,9=X
60260 ' SIZE            Symbol size in % of axes length
60270 ' LTYPE           line type (0=none,1=solid,2=dashed,3=dotted,4=regressio
60280 ' NPTS            is the number of data points
60290 ' X(I),Y(I)       arrays that contain the x and y data points
60300 ' XLEN,YLEN       x and y axis length in inches
60310 ' XMIN,YMIN       x any y minimum values
60320 ' XMAX,YMAX       x and y axis maximum values
60330 ' XLIN,YLIN       flag for linear(=0) or Log(=1) axis
60340 ' XINC,YINC       unit increment on each axis (valid only for linear)
60350 '                  if these are <=0 they are calculated from data
60360 ' XLAB$,YLAB$     strings containing the axis labels
60370 ' LAB1$,LAB2$,LAB3$       three label lines
60380 ' CORNER          specifies the corner for the label
60390 '                 (0=none,1=LL,2=LR,3=UL,4=UR)
60400 '  MORE            a flag that indicates whether this call is the
60410 '                  first and so axes should be plotted, or if it
60420 '                  is more data to go on the same axes (axes are
60430 '                  not plotted if MORE=1), MORE=0 new figure.
60440 '
60450 ' For more than one set of data on the same axes:
60460 '         1. Set up the first set of data and all other plot parameters
60470 '         2. GOSUB 60000 with MORE=0
60480 '         3. Set up second set of data (leave plot parameters unchanged)
60490 '                 (you may change SYM, SIZE, LTYPE and NPTS for each set)
60500 '         4. GOSUB 60000 with MORE=1
60510 '         5. repeat steps 3 and 4 for each additional data set
60520 '
60530 '----------------------------------------------------------------
60540 '
60550 '
60560 ' Scale axes and plot them
60570 '
60580   IF YLEN<=0 THEN YLEN=5.5
60590   IF XLEN<=0 THEN XLEN=7.5
60600   IF MORE<>1 THEN SCREEN 2:CLS:KEY OFF
60610 KEY 20,CHR$(&H8)+CHR$(46):KEY (20) ON
60620 ON KEY (20) GOSUB 62140
60630 IF KLR.P=0 THEN KLR.P=15
60640 OUT 985,KLR.P
60650   XINC.P=XINC:YINC.P=YINC
60660   XRANGE.P=XMAX-XMIN:YRANGE.P=YMAX-YMIN
60670 IF XINC<=0 THEN XINC.P=10^(INT(LOG(XRANGE.P*.66)/LOG(10)))
60680 IF YINC<=0 THEN YINC.P=10^(INT(LOG(YRANGE.P*.66)/LOG(10)))
60690   XMIN.P=XINC.P*INT(XMIN/XINC.P):XMAX.P=XINC.P*(INT((XMAX/XINC.P)+1))
60700   YMAX.P=YINC.P*INT((YMAX/YINC.P)+1):YMIN.P=YINC.P*(INT(YMIN/YINC.P))
60710 IF XLIN=1 THEN XMAX.P=LOG(XMAX)/LOG(10):XMIN.P=LOG(XMIN)/LOG(10)
60720 IF YLIN=1 THEN YMAX.P=LOG(YMAX)/LOG(10):YMIN.P=LOG(YMIN)/LOG(10)
60730   XRANGE.P=XMAX.P-XMIN.P:YRANGE.P=YMAX.P-YMIN.P
60740  DX=SIZE*XRANGE.P/100!:DY=SIZE*YRANGE.P/100!
60750   XT.P=XRANGE.P*(9!/XLEN):YT.P=YRANGE.P*(7!/YLEN)
60760   TICX=.03*XRANGE.P:TICY=.04*YRANGE.P
60770 XTRA=(XT.P-XRANGE.P)*9/XT.P:YTRA=(YT.P-YRANGE.P)*7/YT.P
60780   LBD.X=XMIN.P-(1!*XT.P/9)
60790   LBD.Y=YMIN.P-(1!*YT.P/7)
60800   UBD.X=XMAX.P+((XTRA-1!)*XT.P/9):UBD.Y=YMAX.P+((YTRA-1!)*YT.P/7)
60810   IF MORE<>1 THEN WINDOW (LBD.X,LBD.Y)-(UBD.X,UBD.Y)
60820   IF MORE<>1 THEN LINE (XMIN.P,YMIN.P)-(XMAX.P,YMAX.P),1,B
60830 XLOW.P=XMIN.P-LBD.X:YLOW.P=YMIN.P-LBD.Y
60840 XHI.P=XT.P-XRANGE.P-XLOW.P:YHI.P=YT.P-YRANGE.P-YLOW.P
60850   XP.P=.00161*(UBD.X-LBD.X)
60860   IF MORE<>1 THEN LINE (XMIN.P+XP.P,YMIN.P)-(XMAX.P+XP.P,YMAX.P),1,B
60870 STYLE=&HFFFF:IF LTYPE=0 THEN STYLE=&H0
60880 IF LTYPE=2 THEN STYLE=&HF0F0
60890 IF LTYPE=3 THEN STYLE=&HC0C0
60900 IF LTYPE=4 THEN STYLE=&H0
60910 IF MORE=1 THEN 61850
60920 '
60930   'label axes
60940 '
60950 XPOS.P=((XLOW.P+(XRANGE.P/2!))*80!/XT.P)-(LEN(XLAB$)/2)
60960 LOCATE 25,XPOS.P:PRINT XLAB$;
60970 YPOS.P=25!-(25!*((YLOW.P+(YRANGE.P/2!))/YT.P))-(LEN(YLAB$)/2!)
60980 FOR I=1 TO LEN(YLAB$):YT$=MID$(YLAB$,I,1):LOCATE I+YPOS.P,3:PRINT YT$;:NEXT I
60990 '
61000 '  Print label on figure in specified corner
61010 '
61020 '
61030 IF CORNER=0 THEN GOTO 61170
61040 MAXLEN=0:IF LEN(LAB3$)>MAXLEN THEN MAXLEN=LEN(LAB3$)
61050 IF LEN(LAB2$)>MAXLEN THEN MAXLEN=LEN(LAB2$)+1
61060 IF LEN(LAB1$)>MAXLEN THEN MAXLEN=LEN(LAB1$)+1
61070 IF CORNER=1 OR CORNER=2 THEN XPOS.P=((XLOW.P/XT.P)*80!)+3
61080 IF CORNER=3 OR CORNER=4 THEN XPOS.P=(((XLOW.P+XRANGE.P)/XT.P)*80!)-MAXLEN
61090 IF CORNER=2 OR CORNER=4 THEN YPOS.P=((YHI.P/YT.P)*26)+2
61100 IF CORNER=1 OR CORNER=3 THEN YPOS.P=(((YHI.P+YRANGE.P)/YT.P)*26!)-4!
61110 LOCATE YPOS.P,XPOS.P:PRINT LAB1$;
61120 LOCATE YPOS.P+1,XPOS.P:PRINT LAB2$;
61130 LOCATE YPOS.P+2,XPOS.P:PRINT LAB3$;
61140 '
61150 ' tic marks and numbers on linear x axis
61160 '
61170 IF XLIN=1 THEN 61350
61180   FOR XTIC=XMIN.P TO XMAX.P STEP XINC.P
61190           LINE (XTIC,YMIN.P)-(XTIC,YMIN.P+TICY),1
61200           LINE (XTIC+XP.P,YMIN.P)-(XTIC+XP.P,YMIN.P+TICY),1
61210           LINE (XTIC,YMAX.P-TICY)-(XTIC,YMAX.P),1
61220           LINE (XTIC+XP.P,YMAX.P-TICY)-(XTIC+XP.P,YMAX.P),1
61230           IF XTIC<XMIN.P+XINC.P THEN 61290
61240           HALF.P=XTIC-(.5*XINC.P)
61250           LINE (HALF.P,YMIN.P)-(HALF.P,YMIN.P+(TICY/2)),1
61260           LINE (HALF.P+XP.P,YMIN.P)-(HALF.P+XP.P,YMIN.P+(TICY/2)),1
61270           LINE (HALF.P,YMAX.P-(TICY/2))-(HALF.P,YMAX.P),1
61280           LINE (HALF.P+XP.P,YMAX.P-(TICY/2))-(HALF.P+XP.P,YMAX.P),1
61290            XPOS.P=(((XLOW.P+(XTIC-XMIN.P))/XT.P)*80!)-(LEN(STR$(XTIC))/2)
61300           LOCATE 23,XPOS.P:PRINT XTIC;
61310   NEXT XTIC
61320 '
61330 '         tic marks and numbers on linear y axis
61340 '
61350 IF YLIN=1 THEN 61530
61360   FOR YTIC=YMIN.P TO YMAX.P STEP YINC.P
61370           LINE (XMIN.P,YTIC)-(XMIN.P+TICX,YTIC),1
61380           LINE (XMAX.P-TICX,YTIC)-(XMAX.P,YTIC),1
61390           IF YTIC<YMIN.P+YINC.P THEN 61430
61400           HALF.P=YTIC-(YINC.P/2)
61410           LINE (XMIN.P,HALF.P)-(XMIN.P+(TICX/2),HALF.P),1
61420           LINE (XMAX.P-(TICX/2),HALF.P)-(XMAX.P,HALF.P),1
61430           YPOS.P=((YHI.P+(YMAX.P-YTIC))/YT.P)*26!
61440            XPOS.P=6-(LEN(STR$(YTIC))/2)
61450            IF YPOS.P>25 OR YPOS.P<1 THEN BEEP:GOTO 61480
61460            IF XPOS.P>80 OR XPOS.P<1 THEN BEEP:GOTO 61480
61470            LOCATE YPOS.P,XPOS.P:PRINT YTIC
61480   NEXT YTIC
61490 '
61500 '         tic marks and numbers on log x axis
61510 '
61520 '
61530 IF XLIN=0 THEN 61690
61540   FOR CYC=-5 TO 5
61550           FOR LTIC=1 TO 10
61560           XTIC=LTIC*(10^CYC)
61570           LXTIC=LOG(XTIC)/LOG(10)
61580           IF LXTIC<=XMIN.P OR LXTIC>=XMAX.P THEN 61630
61590           LINE (LXTIC,YMIN.P)-(LXTIC,YMIN.P+TICY),1
61600           LINE (LXTIC+XP.P,YMIN.P)-(LXTIC+XP.P,YMIN.P+TICY),1
61610           LINE (LXTIC,YMAX.P-TICY)-(LXTIC,YMAX.P),1
61620           LINE (LXTIC+XP.P,YMAX.P-TICY)-(LXTIC+XP.P,YMAX.P),1
61630           NEXT LTIC
61640   IF LXTIC>=XMIN.P AND LXTIC<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC-XMIN.P))/XT.P)*80!)-1:PRINT XTIC;:IF LXTIC+.5<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC+.5-XMIN.P))/XT.P)*80)-1:PRINT 3!*XTIC;
61650   NEXT CYC
61660 '
61670 '         tic marks and numbers on log y axis
61680 '
61690 IF YLIN=0 THEN 61820
61700   FOR CYC=-5 TO 5
61710           FOR LTIC=1 TO 10
61720           YTIC=LTIC*(10^CYC)
61730           LYTIC=LOG(YTIC)/LOG(10)
61740           IF LYTIC<=YMIN.P OR LYTIC>=YMAX.P THEN 61770
61750           LINE (XMIN.P,LYTIC)-(XMIN.P+TICX,LYTIC),1
61760           LINE (XMAX.P-TICX,LYTIC)-(XMAX.P,LYTIC),1
61770           NEXT LTIC
61780  YPOS.P=((YHI.P+(YMAX.P-LYTIC))/YT.P)*26!
61790  XPOS.P=6-((LEN(STR$(YTIC))/2!))
61800  IF LYTIC>=YMIN.P AND LYTIC<=YMAX.P AND YPOS.P>=1 THEN LOCATE YPOS.P,XPOS.P:PRINT YTIC;
61810   NEXT CYC
61820 '
61830 '  now plot data on axes
61840 '
61850 SX=0:SY=0:SSX=0:SXY=0
61860 FOR I=1 TO NPTS
61870    X1(I)=X(I):IF XLIN=1 THEN X1(I)=LOG(X(I))/LOG(10)
61880    Y1(I)=Y(I):IF YLIN=1 THEN Y1(I)=LOG(Y(I))/LOG(10)
61890    IF I>1 THEN LINE(X1(I-1),Y1(I-1))-(X1(I),Y1(I)),1,,STYLE
61900   IF I>1 THEN LINE (X1(I-1)+XP.P,Y1(I-1))-(X1(I)+XP.P,Y1(I)),1,,STYLE
61910    IF SYM=1 THEN LINE (X1(I)-DX,Y1(I)-DY)-(X1(I)+DX,Y1(I)+DY),1,B
61920   IF SYM=1 OR SYM=2 THEN LINE(X1(I)-DX+XP.P,Y1(I)-DY)-(X1(I)+DX+XP.P,Y1(I)+DY),1,B
61930   IF SYM=2 THEN LINE(X1(I)-DX+XP.P,Y1(I)-DY)-(X1(I)+DX+XP.P,Y1(I)+DY),1,BF
61940    IF SYM=3 OR SYM=4 THEN LINE (X1(I)-DX,Y1(I)-DY)-(X1(I)+DX,Y1(I)-DY),1:LINE (X1(I),Y1(I)+DY)-(X1(I)-DX,Y1(I)-DY),1:LINE (X1(I),Y1(I)+DY)-(X1(I)+DX,Y1(I)-DY),1
61950   IF SYM=3 OR SYM=4 THEN LINE (X1(I)+XP.P,Y1(I)+DY)-(X1(I)+XP.P+DX,Y1(I)-DY),1:LINE (X1(I)+XP.P,Y1(I)+DY)-(X1(I)+XP.P-DX,Y1(I)-DY),1
61960 IF SYM=4 THEN PAINT (X1(I)+2*XP.P,Y1(I)),1
61970    IF SYM=5 OR SYM=6 THEN CIRCLE (X1(I),Y1(I)),DX:CIRCLE (X1(I)+XP.P,Y1(I)),DX
61980 IF SYM=6 THEN PAINT (X1(I)+2*XP.P,Y1(I)),1
61990    IF SYM=9 THEN LINE (X1(I)-DX,Y1(I)-DY)-(X1(I)+DX,Y1(I)+DY),1:LINE (X1(I)+DX,Y1(I)-DY)-(X1(I)-DX,Y1(I)+DY),1
62000    IF SYM=7 OR SYM=8 THEN LINE (X1(I),Y1(I)+DY)-(X1(I)+DX,Y1(I)),1:LINE -(X1(I),Y1(I)-DY),1:LINE -(X1(I)-DX,Y1(I)),1:LINE -(X1(I),Y1(I)+DY),1
62010 IF SYM=8 THEN PAINT (X1(I)+2*XP.P,Y1(I)),1
62020   SY=SY+Y1(I):SX=SX+X1(I):SSX=SSX+(X1(I)^2):SXY=SXY+(X1(I)*Y1(I))
62030 NEXT I
62040 IF LTYPE<>4 THEN RETURN
62050 '
62060 ' Regression line plotted
62070 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
62080 B=(SY/NPTS)-(A*SX/NPTS)
62090 YMIN.P=(A*XMIN.P)+B:YMAX.P=(A*XMAX.P)+B
62100 LINE (XMIN.P,YMIN.P)-(XMAX.P,YMAX.P),1
62110 LINE (XMIN.P+XP.P,YMIN.P)-(XMAX.P+XP.P,YMAX.P),1
62120 '
62130 RETURN
62140 '
62150 ' key trap of Alt-C to change color
62160 '
62170 KLR.P=(KLR.P+1) MOD 128:IF KLR.P MOD 8=0 OR KLR.P MOD 16=0 THEN KLR.P=KLR.P+1
62180 OUT 985,KLR.P
62190 RETURN
```

## SUBGRAF3.BAS

```bas
60000 '________________________________________________________________
60010 ' SUBGRAF3        May 10,1984             Bob Shannon
60020 '
60030 'SUBGRAF3 is a BASIC subroutine that will plot any set of data.
60040 'It defines the coordinates of the screen, draws
60050 'the grid with tic marks, numbers, and labels on each axis.
60060 'It also prints a 3 line label in one corner. The user can specify
60070 'the size and proportion of the figure in inches. Either linear
60080 'or logarithmic axes are allowed on both ordinate and abcissa.
60090 '
60100 ' Alt-P controls the color of the plot, the pallette is toggled
60110 ' when Alt-P is invoked.
60120 '---------------------------------------------------------------
60130 'Calling sequence:
60140 '         1. MERGE "SUBGRAF3.bas" with your program
60150 '         2. Save a new copy of your program which includes subroutine
60160 '         3. Set up the parameters as defined below
60170 '         4. gosub 60000 at point where you want the plot
60180 '
60190 '---------------------------------------------------------------
60200 'Parameters:    Do not use these names elsewhere in your program
60210 '
60220 ' SYM             symbol type (0=none,1=open sq,2=fill sq,3=open tri
60230 '                         4=fill tri,5=open cir,6=fill cir
60240 '                         7=X
60250 ' SIZE            Symbol size in % of axes length
60260 ' LTYPE           line type (0=none,1=solid,2=dashed,3=dotted,4=regressio
60270 ' NPTS            is the number of data points
60280 ' X(I),Y(I)       arrays that contain the x and y data points
60290 ' XLEN,YLEN       x and y axis length in inches
60300 ' XMIN,YMIN       x any y minimum values
60310 ' XMAX,YMAX       x and y axis maximum values
60320 ' XLIN,YLIN       flag for linear(=0) or Log(=1) axis
60330 ' XINC,YINC       unit increment on each axis (valid only for linear)
60340 '                  if these are <=0 they are calculated from data
60350 ' XLAB$,YLAB$     strings containing the axis labels
60360 ' LAB1$,LAB2$,LAB3$       three label lines
60370 ' CORNER          specifies the corner for the label
60380 '                 (0=none,1=LL,2=LR,3=UL,4=UR)
60390 ' backolor        specifies the background color (0-7)
60400 ' LABLCOLR        specifies the color of the axes labels and figure label
60410 ' axiscolr        specifies the color of the axes (0-3)
60420 ' lincolor        specifies the color of the line (0-3)
60430 ' PTCOLOR         specifies the color of the data point (0-3)
60440 ' RESOLUT         specifies low(=0) or high(=1) resolution plot
60450 ' MORE             a flag that indicates whether this call is the
60460 '                  first and so axes should be plotted, or if it
60470 '                  is more data to go on the same axes (axes are
60480 '                  not plotted if MORE=1), MORE=0 new figure.
60490 '
60500 ' For more than one set of data on the same axes:
60510 '         1. Set up the first set of data and all other plot parameters
60520 '         2. GOSUB 60000 with MORE=0
60530 '         3. Set up second set of data (leave plot parameters unchanged)
60540 '                 (you may change SYM, SIZE, LTYPE and NPTS for each set)
60550 '         4. GOSUB 60000 with MORE=1
60560 '         5. repeat steps 3 and 4 for each additional data set
60570 '
60580 '----------------------------------------------------------------
60590 '
60600 '
60610 ' Scale axes and plot them
60620 '
60630   IF YLEN<=0 THEN YLEN=5.5
60640   IF XLEN<=0 THEN XLEN=7.3
60650   XTOT=320:IF RESOLUT=1 THEN XTOT=640
60660   NCOLUMS=40:IF RESOLUT=1 THEN NCOLUMS=80
60670   IF MORE<>1 AND RESOLUT=0 THEN SCREEN 1:COLOR BACKOLOR,PALET.P:CLS:KEY OFF
60680   IF MORE<>1 AND RESOLUT=1 THEN SCREEN 2:KEY OFF:CLS
60690 KEY 20,CHR$(&H8)+CHR$(25):KEY (20) ON
60700 ON KEY (20) GOSUB 62450
60710 KEY 17,CHR$(&H8)+CHR$(48):KEY (17) ON
60720 ON KEY (17) GOSUB 62510
60730   XINC.P=XINC:YINC.P=YINC
60740   XRANGE.P=XMAX-XMIN:YRANGE.P=YMAX-YMIN
60750 IF XINC<=0 THEN XINC.P=10^(INT(LOG(XRANGE.P*.66)/LOG(10)))
60760 IF YINC<=0 THEN YINC.P=10^(INT(LOG(YRANGE.P*.66)/LOG(10)))
60770   XMIN.P=XINC.P*INT(XMIN/XINC.P):XMAX.P=XINC.P*(INT((XMAX/XINC.P)+.49))
60780   YMAX.P=YINC.P*INT((YMAX/YINC.P)+.49):YMIN.P=YINC.P*(INT(YMIN/YINC.P))
60790 IF XLIN=1 THEN XMAX.P=LOG(XMAX)/LOG(10):XMIN.P=LOG(XMIN)/LOG(10)
60800 IF YLIN=1 THEN YMAX.P=LOG(YMAX)/LOG(10):YMIN.P=LOG(YMIN)/LOG(10)
60810   XRANGE.P=XMAX.P-XMIN.P:YRANGE.P=YMAX.P-YMIN.P
60820  DX=SIZE*XRANGE.P/100!:DY=SIZE*YRANGE.P/100!
60830   XT.P=XRANGE.P*(9!/XLEN):YT.P=YRANGE.P*(7!/YLEN)
60840   TICX=.03*XRANGE.P:TICY=.04*YRANGE.P
60850 XTRA=(XT.P-XRANGE.P)*9/XT.P:YTRA=(YT.P-YRANGE.P)*7/YT.P
60860   LBD.X=XMIN.P-(1.16*XT.P/9)
60870   LBD.Y=YMIN.P-(1.1*YT.P/7)
60880   UBD.X=XMAX.P+((XTRA-1!)*XT.P/9):UBD.Y=YMAX.P+((YTRA-1!)*YT.P/7)
60890   RANGE.X=UBD.X-LBD.X:RANGE.Y=UBD.Y-LBD.Y
60900 XLOW.P=XMIN.P-LBD.X:YLOW.P=YMIN.P-LBD.Y
60910 XHI.P=XT.P-XRANGE.P-XLOW.P:YHI.P=YT.P-YRANGE.P-YLOW.P
60920   XP.P=(1!/XTOT)*(UBD.X-LBD.X)
60930   IF MORE<>1 THEN XX1=XMIN.P:XX2=XMAX.P:YY1=YMIN.P:YY2=YMAX.P:KLR=AXISCOLR:BOX=1:GOSUB 62570
60940   IF MORE<>1 THEN XX1=XMIN.P+XP.P:XX2=XMAX.P+XP.P:YY1=YMIN.P:YY2=YMAX.P:GOSUB 62570
60950 STYLE=&HFFFF:IF LTYPE=0 THEN STYLE=&H0
60960 IF LTYPE=2 THEN STYLE=&HF0F0
60970 IF LTYPE=3 THEN STYLE=&HC0C0
60980 IF LTYPE=4 THEN STYLE=&H0
60990 IF MORE=1 THEN 61930
61000 '
61010   'label axes
61020 '
61030 XPOS.P=((XLOW.P+(XRANGE.P/2!))*NCOLUMS/XT.P)-(LEN(XLAB$)/2)
61040 LOCATE 25,XPOS.P:PRINT XLAB$;
61050 YPOS.P=25!-(25!*((YLOW.P+(YRANGE.P/2!))/YT.P))-(LEN(YLAB$)/2!)
61060 FOR I=1 TO LEN(YLAB$):YT$=MID$(YLAB$,I,1):LOCATE I+YPOS.P,1:PRINT YT$;:NEXT I
61070 '
61080 '  Print label on figure in specified corner
61090 '
61100 '
61110 IF CORNER=0 THEN GOTO 61250
61120 MAXLEN=0:IF LEN(LAB3$)>MAXLEN THEN MAXLEN=LEN(LAB3$)
61130 IF LEN(LAB2$)>MAXLEN THEN MAXLEN=LEN(LAB2$)+1
61140 IF LEN(LAB1$)>MAXLEN THEN MAXLEN=LEN(LAB1$)+1
61150 IF CORNER=1 OR CORNER=2 THEN XPOS.P=((XLOW.P/XT.P)*NCOLUMS)+(3+(3*RESOLUT))
61160 IF CORNER=3 OR CORNER=4 THEN XPOS.P=(((XLOW.P+XRANGE.P)/XT.P)*NCOLUMS)-MAXLEN-(1+RESOLUT)
61170 IF CORNER=2 OR CORNER=4 THEN YPOS.P=((YHI.P/YT.P)*26)+3
61180 IF CORNER=1 OR CORNER=3 THEN YPOS.P=(((YHI.P+YRANGE.P)/YT.P)*26!)-4!
61190 LOCATE YPOS.P,XPOS.P:PRINT LAB1$;
61200 LOCATE YPOS.P+1,XPOS.P:PRINT LAB2$;
61210 LOCATE YPOS.P+2,XPOS.P:PRINT LAB3$;
61220 '
61230 ' tic marks and numbers on linear x axis
61240 '
61250 IF XLIN=1 THEN 61430
61260   FOR XTIC=XMIN.P TO XMAX.P STEP XINC.P
61270           XX1=XTIC:YY1=YMIN.P:XX2=XTIC:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 62570
61280           IF RESOLUT=1 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 62570
61290           XX1=XTIC:XX2=XTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 62570
61300           IF RESOLUT=1 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 62570
61310           IF XTIC<XMIN.P+XINC.P THEN 61370
61320           HALF.P=XTIC-(.5*XINC.P)
61330           XX1=HALF.P:XX2=HALF.P:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):KLR=AXISCOLR:BOX=0:GOSUB 62570
61340           IF RESOLUT=1 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):GOSUB 62570
61350           XX1=HALF.P:XX2=HALF.P:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 62570
61360           IF RESOLUT=1 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:GOSUB 62570
61370           XPOS.P=(((XLOW.P+(XTIC-XMIN.P))/XT.P)*NCOLUMS)-(LEN(STR$(XTIC))/2)
61380           LOCATE 23,XPOS.P:PRINT XTIC;
61390   NEXT XTIC
61400 '
61410 '         tic marks and numbers on linear y axis
61420 '
61430 IF YLIN=1 THEN 61610
61440   FOR YTIC=YMIN.P TO YMAX.P STEP YINC.P
61450           XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 62570
61460           XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 62570
61470           IF YTIC<YMIN.P+YINC.P THEN 61510
61480           HALF.P=YTIC-(YINC.P/2)
61490           XX1=XMIN.P:XX2=XMIN.P+(TICX/2):YY1=HALF.P:YY2=HALF.P:GOSUB 62570
61500           XX1=XMAX.P-(TICX/2):XX2=XMAX.P:YY1=HALF.P:YY2=HALF.P:GOSUB 62570
61510           YPOS.P=((YHI.P+(YMAX.P-YTIC))/YT.P)*26!
61520           XPOS.P=(3+(3*RESOLUT))-(LEN(STR$(YTIC))/2)
61530           IF YPOS.P>25 OR YPOS.P<1 THEN BEEP:GOTO 61560
61540           IF XPOS.P>NCOLUMS OR XPOS.P<1 THEN BEEP:GOTO 61560
61550           LOCATE YPOS.P,XPOS.P:PRINT YTIC
61560   NEXT YTIC
61570 '
61580 '         tic marks and numbers on log x axis
61590 '
61600 '
61610 IF XLIN=0 THEN 61770
61620   FOR CYC=-5 TO 5
61630           FOR LTIC=1 TO 10
61640           XTIC=LTIC*(10^CYC)
61650           LXTIC=LOG(XTIC)/LOG(10)
61660           IF LXTIC<=XMIN.P OR LXTIC>=XMAX.P THEN 61710
61670           XX1=LXTIC:XX2=LXTIC:YY1=YMIN.P:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 62570
61680           IF RESOLUT=1 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 62570
61690           XX1=LXTIC:XX2=LXTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 62570
61700           IF RESOLUT=1 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 62570
61710           NEXT LTIC
61720   IF LXTIC>=XMIN.P AND LXTIC<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT XTIC;:IF LXTIC+.5<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC+.5-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT 3!*XTIC;
61730   NEXT CYC
61740 '
61750 '         tic marks and numbers on log y axis
61760 '
61770 IF YLIN=0 THEN 61900
61780   FOR CYC=-5 TO 5
61790           FOR LTIC=1 TO 10
61800           YTIC=LTIC*(10^CYC)
61810           LYTIC=LOG(YTIC)/LOG(10)
61820           IF LYTIC<=YMIN.P OR LYTIC>=YMAX.P THEN 61850
61830           XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=LYTIC:YY2=LYTIC:KLR=AXISCOLR:BOX=0:GOSUB 62570
61840           XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=LYTIC:YY2=LYTIC:GOSUB 62570
61850           NEXT LTIC
61860  YPOS.P=((YHI.P+(YMAX.P-LYTIC))/YT.P)*26!
61870  XPOS.P=(3+(3*RESOLUT))-((LEN(STR$(YTIC))/2!))
61880  IF LYTIC>=YMIN.P AND LYTIC<=YMAX.P AND YPOS.P>=1 THEN LOCATE YPOS.P,XPOS.P:PRINT YTIC;
61890   NEXT CYC
61900 '
61910 '  now plot data on axes
61920 '
61930 SX=0:SY=0:SSX=0:SXY=0
61940 FOR I=1 TO NPTS
61950    X1(I)=X(I):IF XLIN=1 THEN X1(I)=LOG(X(I))/LOG(10)
61960    Y1(I)=Y(I):IF YLIN=1 THEN Y1(I)=LOG(Y(I))/LOG(10)
61970   IF I=1 THEN 62040
61980   IF LTYPE<1 OR LTYPE>3 THEN 62040
61990   KLR=LINCOLOR:IF RESOLUT=1 THEN KLR=1
62000   XX1=XTOT*(X1(I-1)-LBD.X)/RANGE.X:XX2=XTOT*(X1(I)-LBD.X)/RANGE.X
62010   YY1=200!-((Y1(I-1)-LBD.Y)*200!/RANGE.Y):YY2=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
62020   LINE (XX1,YY1)-(XX2,YY2),KLR,,STYLE
62030   LINE (XX1+1,YY1)-(XX2+1,YY2),KLR,,STYLE
62040   IF SYM=1 THEN XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=1:KLR=PTCOLOR:GOSUB 62570
62050   IF SYM=1 OR SYM=2 THEN XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)+DY:KLR=PTCOLOR:BOX=1:GOSUB 62570
62060   IF SYM=2 THEN PAINT(((XX1+XX2)/2)+2,(YY1+YY2)/2!),PTCOLOR,PTCOLOR
62070 IF SYM<3 OR SYM >4 THEN 62180
62080   XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)-DY:KLR=PTCOLOR:BOX=0:GOSUB 62570
62090   XX1=X1(I):XX2=X1(I)-DX:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62100   XX1=X1(I):XX2=X1(I)+DX:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62110   XX1=X1(I)+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62120   XX1=X1(I)+XP.P:XX2=X1(I)-DX+XP.P:YY1=Y1(I)+DY:YY2=Y1(I)-DY:GOSUB 62570
62130   XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)-DY:GOSUB 62570
62140 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
62150 YY1=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
62160 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
62170 IF SYM=4 THEN PAINT (XX1+2,YY1+1),KLR:GOTO 62300
62180 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
62190 YY1=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
62200 DDX=XTOT*DX/RANGE.X
62210 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
62220    IF SYM=5 OR SYM=6 THEN CIRCLE (XX1,YY1),DDX,KLR:CIRCLE (XX1+1,YY1),DDX,KLR
62230 IF SYM=6 THEN PAINT (XX1+2,YY1+1),KLR,KLR
62240 IF SYM<>7 THEN 62300
62250 XX=XTOT*(X1(I)-LBD.X)/RANGE.X
62260 YY=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
62270 DDY=(DY*200!/RANGE.Y)
62280 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
62290    LINE (XX-DDX,YY-DDY)-(XX+DDX,YY+DDY),KLR:LINE (XX+DDX,YY-DDY)-(XX-DDX,YY+DDY),KLR
62300   SY=SY+Y1(I):SX=SX+X1(I):SSX=SSX+(X1(I)^2):SXY=SXY+(X1(I)*Y1(I))
62310 NEXT I
62320 IF LTYPE<>4 THEN RETURN
62330 '
62340 ' Regression line plotted
62350 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
62360 B=(SY/NPTS)-(A*SX/NPTS)
62370 XMN=(YMIN.P-B)/A:XMX=(YMAX.P-B)/A
62380 IF XMN<XMIN.P THEN XMN=XMIN.P
62390 IF XMX>XMAX.P THEN XMX=XMAX.P
62400 YMN=(A*XMN)+B:YMX=(A*XMX)+B
62410 XX1=XMN:XX2=XMX:YY1=YMN:YY2=YMX:KLR=LINCOLOR:BOX=0:GOSUB 62570
62420 XX1=XMN+XP.P:XX2=XMX+XP.P:YY1=YMN:YY2=YMX:GOSUB 62570
62430 '
62440 RETURN
62450 '
62460 ' key trap of Alt-P to change palette
62470 '
62480 PALET.P=1-PALET.P
62490 COLOR BACKOLOR,PALET.P
62500 RETURN
62510 '
62520 ' key trap of Alt-B to change background color
62530 '
62540 BACKOLOR=BACKOLOR+1
62550 COLOR BACKOLOR,PALET.P
62560 RETURN
62570 '
62580 ' Subroutine to plot line - replaces WINDOW subroutine
62590 ' Calculation to convert real coordinates to screen coordinates
62600 ' To call this subroutine set xx1=first x value, xx2=second x value
62610 '   yy1,yy2=first and second y values
62620 '   range.x=real value limit of screen border
62630 '   range.y= range of y values that corresponds to entire screen
62640 '   xmin.p, ymin.p are the minimun values on the x and y axes
62650 '   KLR= color of line
62660 '   box=0 if no box, =1 if box to be drawn
62670 '   fill=0 if not to fill box, =1 if box to be filled
62680 '   Style$ for dotted or dashed lines is bit template
62685 '   RESOLUT =0 for 320x200   =1 for 640x200
62686 '         in 320x200 mode KLR is the color, in 640x200 is ignored
62690 '
62700 YY2=200!-((YY2-LBD.Y)*200!/RANGE.Y)
62710 YY1=200!-((YY1-LBD.Y)*200!/RANGE.Y)
62720 XX1=XTOT*(XX1-LBD.X)/RANGE.X
62730 XX2=XTOT*(XX2-LBD.X)/RANGE.X
62740 IF RESOLUT=1 THEN KLR=1
62750 IF BOX=1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR,B
62760 IF BOX<>1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR
62770 RETURN
```

## SUBGRAF4.BAS

```bas
60000 '________________________________________________________________
60010 ' PC-GRAF 4.0    Feb 20,1985             Bob Shannon
60020 '
60030 'PC-GRAF4 is a BASIC subroutine that will plot any set of data.
60040 'It defines the coordinates of the screen, draws
60050 'the grid with tic marks, numbers, and labels on each axis.
60060 'It also prints a 3 line label in one corner. The user can specify
60070 'the size and proportion of the figure in inches. Either linear
60080 'or logarithmic axes are allowed on both ordinate and abcissa.
60090 '
60100 ' Alt-P controls the color of the plot, the pallette is toggled
60110 ' when Alt-P is invoked.
60120 '---------------------------------------------------------------
60130 'Calling sequence:
60140 '         1. MERGE "SUBGRAF4.bas" with your program
60150 '         2. Save a new copy of your program which includes subroutine
60160 '         3. Set up the parameters as defined below
60170 '         4. gosub 60000 at point where you want the plot
60180 '
60190 '---------------------------------------------------------------
60200 'Parameters:    Do not use these names elsewhere in your program
60210 '
60220 ' SYM             symbol type (0=none,1=open sq,2=fill sq,3=open tri
60230 '                         4=fill tri,5=open cir,6=fill cir
60240 '                         7=X
60250 ' SIZE            Symbol size in % of axes length
60260 ' LTYPE           line type (0=none,1=solid,2=dashed,3=dotted,4=regressio
60270 ' NPTS            is the number of data points
60280 ' X(I),Y(I)       arrays that contain the x and y data points
60290 ' XLEN,YLEN       x and y axis length in inches
60300 ' XMIN,YMIN       x any y minimum values
60310 ' XMAX,YMAX       x and y axis maximum values
60320 ' XLIN,YLIN       flag for linear(=0) or Log(=1) axis
60330 ' XINC,YINC       unit increment on each axis (valid only for linear)
60340 '                  if these are <=0 they are calculated from data
60350 ' XLAB$,YLAB$     strings containing the axis labels
60360 ' LAB1$,LAB2$,LAB3$       three label lines
60370 ' CORNER          specifies the corner for the label
60380 '                 (0=none,1=LL,2=LR,3=UL,4=UR)
60390 ' backolor        specifies the background color (0-7)
60400 ' LABLCOLR        specifies the color of the axes labels and figure label
60410 ' axiscolr        specifies the color of the axes (0-3)
60420 ' lincolor        specifies the color of the line (0-3)
60430 ' PTCOLOR         specifies the color of the data point (0-3)
60440 ' RESOLUT         specifies low(=0) or high(=1) resolution plot
60450 ' MORE             a flag that indicates whether this call is the
60460 '                  first and so axes should be plotted, or if it
60470 '                  is more data to go on the same axes (axes are
60480 '                  not plotted if MORE=1), MORE=0 new figure.
60490 '
60500 ' For more than one set of data on the same axes:
60510 '         1. Set up the first set of data and all other plot parameters
60520 '         2. GOSUB 60000 with MORE=0
60530 '         3. Set up second set of data (leave plot parameters unchanged)
60540 '                 (you may change SYM, SIZE, LTYPE and NPTS for each set)
60550 '         4. GOSUB 60000 with MORE=1
60560 '         5. repeat steps 3 and 4 for each additional data set
60570 '
60580 '----------------------------------------------------------------
60590 '
60600 '
60610 ' Scale axes and plot them
60620 '
60630   IF YLEN<=0 THEN YLEN=5.5
60640   IF XLEN<=0 THEN XLEN=7.3
60650   IF RESOLUT=2 AND MORE<>1 THEN LPRINT"RE;";:CLS:LOCATE 12,30:PRINT "Plotting on Sweet-P plotter ..."
60660   XTOT=320:YTOT=200:IF RESOLUT=1 THEN XTOT=640
60665 IF RESOLUT=1 THEN YTOT=400
60670   IF RESOLUT=2 THEN XTOT=2500
60680   IF RESOLUT=2 THEN YTOT=1838
60690   NCOLUMS=40:IF RESOLUT=1 THEN NCOLUMS=80
60700   IF MORE<>1 AND RESOLUT=0 THEN SCREEN 1:COLOR BACKOLOR,PALET.P:CLS:KEY OFF
60710   IF MORE<>1 AND RESOLUT=1 THEN SCREEN 2:KEY OFF:CLS
60720 KEY 20,CHR$(&H8)+CHR$(25):KEY (20) ON
60730 ON KEY (20) GOSUB 63720
60740 KEY 17,CHR$(&H8)+CHR$(48):KEY (17) ON
60750 ON KEY (17) GOSUB 63780
60760   XINC.P=XINC:YINC.P=YINC
60770   XRANGE.P=XMAX-XMIN:YRANGE.P=YMAX-YMIN
60780 IF XINC<=0 THEN XINC.P=10^(INT(LOG(XRANGE.P*.66)/LOG(10)))
60790 IF YINC<=0 THEN YINC.P=10^(INT(LOG(YRANGE.P*.66)/LOG(10)))
60800   XMIN.P=XINC.P*INT(XMIN/XINC.P):XMAX.P=XINC.P*(INT((XMAX/XINC.P)+.49))
60810   YMAX.P=YINC.P*INT((YMAX/YINC.P)+.49):YMIN.P=YINC.P*(INT(YMIN/YINC.P))
60820 IF XLIN=1 THEN XMAX.P=LOG(XMAX)/LOG(10):XMIN.P=LOG(XMIN)/LOG(10)
60830 IF YLIN=1 THEN YMAX.P=LOG(YMAX)/LOG(10):YMIN.P=LOG(YMIN)/LOG(10)
60840   XRANGE.P=XMAX.P-XMIN.P:YRANGE.P=YMAX.P-YMIN.P
60860   XT.P=XRANGE.P*(9!/XLEN):YT.P=YRANGE.P*(7!/YLEN)
60870   TICX=.03*XRANGE.P:TICY=.04*YRANGE.P
60880 XTRA=(XT.P-XRANGE.P)*9/XT.P:YTRA=(YT.P-YRANGE.P)*7/YT.P
60885  FACT.P=1.16:IF RESOLUT=2 THEN FACT.P=1.4
60890   LBD.X=XMIN.P-(FACT.P*XT.P/9)
60900   LBD.Y=YMIN.P-(1.1*YT.P/7)
60910   UBD.X=XMAX.P+((XTRA-1!)*XT.P/9):UBD.Y=YMAX.P+((YTRA-1!)*YT.P/7)
60920   RANGE.X=UBD.X-LBD.X:RANGE.Y=UBD.Y-LBD.Y
60925  DX=SIZE*XRANGE.P/100!:DY=(XTOT*DX/RANGE.X)*RANGE.Y/YTOT
60930 XLOW.P=XMIN.P-LBD.X:YLOW.P=YMIN.P-LBD.Y
60940 XHI.P=XT.P-XRANGE.P-XLOW.P:YHI.P=YT.P-YRANGE.P-YLOW.P
60950   XP.P=(1!/XTOT)*(UBD.X-LBD.X)
60960   IF MORE<>1 THEN XX1=XMIN.P:XX2=XMAX.P:YY1=YMIN.P:YY2=YMAX.P:KLR=AXISCOLR:BOX=1:GOSUB 63840
60970   IF MORE<>1 AND RESOLUT<>2 THEN XX1=XMIN.P+XP.P:XX2=XMAX.P+XP.P:YY1=YMIN.P:YY2=YMAX.P:GOSUB 63840
60980 STYLE=&HFFFF:IF LTYPE=0 THEN STYLE=&H0
60990 IF LTYPE=2 THEN STYLE=&HF0F0
61000 IF LTYPE=3 THEN STYLE=&HC0C0
61010 IF LTYPE=4 THEN STYLE=&H0
61020 IF MORE=1 THEN 62720
61030 '
61040   'label axes
61050 '
61060 ' pen plotting
61070 IF RESOLUT<>2 THEN 61210
61080 XPOS%=(2500!*(XMIN.P+(XRANGE.P/2)-LBD.X)/RANGE.X)-(LEN(XLAB$)*SIZLABL*10)
61090 YPOS%=(1838!*(YMIN.P-LBD.Y)/RANGE.Y)-((70+(SIZNUMB*20))+(20!*SIZLABL))
61100 LPRINT "MA ";XPOS%;",";YPOS%;";"
61110 II%=SIZLABL:LPRINT "CS ";II%;";";:LPRINT "RO 0;TX ;";XLAB$;";"
61120 LPRINT "MA ";XPOS%+2;",";YPOS%;";"
61130 II%=SIZLABL:LPRINT "CS ";II%;";";:LPRINT "RO 0;TX ;";XLAB$;";"
61140 XPOS%=(2500!*(XMIN.P-LBD.X)/RANGE.X)-(40+(SIZNUMB*20*(LEN(STR$(YMAX.P))+1.5)))
61150 YPOS%=(1838!*(YMIN.P+(YRANGE.P/2)-LBD.Y)/RANGE.Y)-(LEN(YLAB$)*SIZLABL*10)
61160 LPRINT "MA ";XPOS%;",";YPOS%;";"
61170 LPRINT "CS ";II%;";":LPRINT "RO 90;TX ;";YLAB$;";"
61180 LPRINT "MA ";XPOS%;",";YPOS%+2;";"
61190 LPRINT "CS ";II%;";":LPRINT "RO 90;TX ;";YLAB$;";"
61200 GOTO 61270
61210 ' screen plotting
61220 YPOS.P=25!-(25!*((YLOW.P+(YRANGE.P/2!))/YT.P))-(LEN(YLAB$)/2!)
61230 FOR I=1 TO LEN(YLAB$):YT$=MID$(YLAB$,I,1):LOCATE I+YPOS.P,1:PRINT YT$;:NEXT I
61240 XPOS.P=((XLOW.P+(XRANGE.P/2!))*NCOLUMS/XT.P)-(LEN(XLAB$)/2)
61250 LOCATE 25,XPOS.P:PRINT XLAB$;
61260 '
61270 '  Print label on figure in specified corner
61280 '
61290 '
61300 IF CORNER=0 THEN GOTO 61550
61310 MAXLEN=0:IF LEN(LAB3$)>MAXLEN THEN MAXLEN=LEN(LAB3$)
61320 IF LEN(LAB2$)>MAXLEN THEN MAXLEN=LEN(LAB2$)+1
61330 IF LEN(LAB1$)>MAXLEN THEN MAXLEN=LEN(LAB1$)+1
61340 IF RESOLUT=2 THEN 61430
61350 IF CORNER=1 OR CORNER=2 THEN XPOS.P=((XLOW.P/XT.P)*NCOLUMS)+(3+(3*RESOLUT))
61360 IF CORNER=3 OR CORNER=4 THEN XPOS.P=(((XLOW.P+XRANGE.P)/XT.P)*NCOLUMS)-MAXLEN-(1+RESOLUT)
61370 IF CORNER=2 OR CORNER=4 THEN YPOS.P=((YHI.P/YT.P)*26)+3
61380 IF CORNER=1 OR CORNER=3 THEN YPOS.P=(((YHI.P+YRANGE.P)/YT.P)*26!)-4!
61390 LOCATE YPOS.P,XPOS.P:PRINT LAB1$;
61400 LOCATE YPOS.P+1,XPOS.P:PRINT LAB2$;
61410 LOCATE YPOS.P+2,XPOS.P:PRINT LAB3$;
61420 GOTO 61530
61430 ' pen drawing
61440 IF CORNER=1 OR CORNER=2 THEN XPOS%=(2500!*(XMIN.P+(2*TICX)-LBD.X)/RANGE.X)
61450 IF CORNER=3 OR CORNER=4 THEN XPOS%=(2500!*(XMAX.P-(2*TICX)-LBD.X)/RANGE.X)-(20*SIZNUMB*(MAXLEN+1))
61460 IF CORNER=2 OR CORNER=4 THEN YPOS%=(1838!*(YMAX.P-(2*TICY)-LBD.Y)/RANGE.Y)-(20*SIZNUMB)
61470 IF CORNER=1 OR CORNER=3 THEN YPOS%=(1838!*(YMIN.P+TICY-LBD.Y)/RANGE.Y)+((3*20*SIZNUMB)+40)
61480 II%=SIZNUMB:LPRINT "CS ";II%;";RO 0;"
61490 LPRINT "MA ";XPOS%;",";YPOS%;";":LPRINT "TX ;";LAB1$;";";
61500 LPRINT "MA ";XPOS%;",";YPOS%-(20*SIZNUMB)-20;";":LPRINT "TX ;";LAB2$;";";
61510 LPRINT "MA ";XPOS%;",";YPOS%-(40*SIZNUMB)-40;";":LPRINT "TX ;";LAB3$;";"
61520 '
61530 ' tic marks and numbers on linear x axis
61540 '
61550 IF XLIN=1 THEN 61830
61560 FOR I=1 TO 2
61570   FOR XTIC=XMIN.P TO XMAX.P STEP XINC.P
61580           IF I=1 THEN XX1=XTIC:YY1=YMIN.P:XX2=XTIC:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 63840
61590           IF I=1 AND RESOLUT=1 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 63840
61600           IF I=2 THEN XX1=XTIC:XX2=XTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 63840
61610           IF RESOLUT=1 AND I=2 THEN XX1=XTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 63840
61620           IF XTIC<XMIN.P+XINC.P THEN 61690
61630           HALF.P=XTIC-(.5*XINC.P)
61640           IF I=1 THEN XX1=HALF.P:XX2=HALF.P:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):KLR=AXISCOLR:BOX=0:GOSUB 63840
61650           IF RESOLUT=1 AND I=1 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+(TICY/2):GOSUB 63840
61660           IF I=2 THEN XX1=HALF.P:XX2=HALF.P:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:KLR=AXISCOLR:BOX=0:GOSUB 63840
61670           IF RESOLUT=1 AND I=2 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:GOSUB 63840
61680           IF RESOLUT=1 AND I=2 THEN XX1=HALF.P+XP.P:XX2=XX1:YY1=YMAX.P-(TICY/2):YY2=YMAX.P:GOSUB 63840
61690 IF I=2 THEN GOTO 61780
61700 IF RESOLUT=2 THEN 61740
61710           XPOS.P=(((XLOW.P+(XTIC-XMIN.P))/XT.P)*NCOLUMS)-(LEN(STR$(XTIC))/2)
61720           LOCATE 23,XPOS.P:PRINT XTIC;
61730 GOTO 61780
61740 XPOS%=(2500!*(XTIC-LBD.X)/RANGE.X)-(20!*SIZNUMB*(LEN(STR$(XTIC))+.5)/2!)
61750 YPOS%=(1838!*(YMIN.P-LBD.Y)/RANGE.Y)-(20!*SIZNUMB)-20!
61760 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
61770 LPRINT "TX ;";STR$(XTIC);";"
61780   NEXT XTIC
61790 NEXT I
61800 '
61810 '         tic marks and numbers on linear y axis
61820 '
61830 IF YLIN=1 THEN 62100
61840 FOR I=1 TO 2
61850   FOR YTIC=YMIN.P TO YMAX.P STEP YINC.P
61860           IF I=1 THEN XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 63840
61870           IF I=2 THEN XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=YTIC:YY2=YTIC:KLR=AXISCOLR:BOX=0:GOSUB 63840
61880           IF YTIC<YMIN.P+YINC.P THEN 61920
61890           HALF.P=YTIC-(YINC.P/2)
61900           IF I=1 THEN XX1=XMIN.P:XX2=XMIN.P+(TICX/2):YY1=HALF.P:YY2=HALF.P:GOSUB 63840
61910           IF I=2 THEN XX1=XMAX.P-(TICX/2):XX2=XMAX.P:YY1=HALF.P:YY2=HALF.P:GOSUB 63840
61920 IF I=2 THEN 62040
61930   IF RESOLUT=2 THEN 62000
61940           YPOS.P=((YHI.P+(YMAX.P-YTIC))/YT.P)*26!
61950           XPOS.P=(3+(3*RESOLUT))-(LEN(STR$(YTIC))/2)
61960           IF YPOS.P>25 OR YPOS.P<1 THEN BEEP:GOTO 62040
61970           IF XPOS.P>NCOLUMS OR XPOS.P<1 THEN BEEP:GOTO 62040
61980           LOCATE YPOS.P,XPOS.P:PRINT YTIC
61990           GOTO 62040
62000 XPOS%=(2500!*(XMIN.P-LBD.X)/RANGE.X)-(20!*SIZNUMB*LEN(STR$(YTIC)))-20!
62010 YPOS%=(1838!*(YTIC-LBD.Y)/RANGE.Y)-(10!*SIZNUMB)
62020 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
62030 LPRINT "TX ;";STR$(YTIC);";"
62040   NEXT YTIC
62050 NEXT I
62060 '
62070 '         tic marks and numbers on log x axis
62080 '
62090 '
62100 IF XLIN=0 THEN 62390
62110 FOR I=1 TO 2
62120   FOR CYC=-5 TO 5
62130           FOR LTIC=1 TO 10
62140           XTIC=LTIC*(10^CYC)
62150           LXTIC=LOG(XTIC)/LOG(10)
62160           IF LXTIC<=XMIN.P OR LXTIC>=XMAX.P THEN 62210
62170           IF I=1 THEN XX1=LXTIC:XX2=LXTIC:YY1=YMIN.P:YY2=YMIN.P+TICY:KLR=AXISCOLR:BOX=0:GOSUB 63840
62180           IF RESOLUT=1 AND I=1 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMIN.P:YY2=YMIN.P+TICY:GOSUB 63840
62190           IF I=2 THEN XX1=LXTIC:XX2=LXTIC:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 63840
62200           IF RESOLUT=1 AND I=2 THEN XX1=LXTIC+XP.P:XX2=XX1:YY1=YMAX.P-TICY:YY2=YMAX.P:GOSUB 63840
62210           NEXT LTIC
62220 IF I=2 THEN 62360
62230 IF RESOLUT=2 THEN GOTO 62270
62240   IF LXTIC>=XMIN.P AND LXTIC<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT XTIC;:IF LXTIC+.5<=XMAX.P THEN LOCATE 23,(((XLOW.P+(LXTIC+.5-XMIN.P))/XT.P)*NCOLUMS)-1:PRINT 3!*XTIC;
62250 GOTO 62360
62260 '
62270 IF LXTIC<XMIN.P OR LXTIC>XMAX.P THEN 62320
62280 XPOS%=(2500!*(LXTIC-LBD.X)/RANGE.X)-(20!*SIZNUMB*((LEN(STR$(XTIC))/2!)+.5))
62290 YPOS%=(1838!*(YMIN.P-LBD.Y)/RANGE.Y)-(20!*SIZNUMB)-20!
62300 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
62310 LPRINT "TX ;";STR$(XTIC);";"
62320 IF LXTIC+.477<XMIN.P OR LXTIC+.477>XMAX.P THEN 62360
62330 XPOS%=(2500!*(LXTIC+.477-LBD.X)/RANGE.X)-(20!*SIZNUMB*((LEN(STR$(3*XTIC))/2!)+.5))
62340 YPOS%=(1838!*(YMIN.P-LBD.Y)/RANGE.Y)-(20!*SIZNUMB)-20!
62350 LPRINT "MA ";XPOS%;",";YPOS%;"; CS ";II%;"; RO 0; TX ;";STR$(3!*XTIC);";"
62360   NEXT CYC
62370 NEXT I
62380 '
62390 '         tic marks and numbers on log y axis
62400 '
62410 FOR I=1 TO 2
62420 IF YLIN=0 THEN 62690
62430   FOR CYC=-5 TO 5
62440           FOR LTIC=1 TO 10
62450           YTIC=LTIC*(10^CYC)
62460           LYTIC=LOG(YTIC)/LOG(10)
62470           IF LYTIC<=YMIN.P OR LYTIC>=YMAX.P THEN 62500
62480           IF I=1 THEN XX1=XMIN.P:XX2=XMIN.P+TICX:YY1=LYTIC:YY2=LYTIC:KLR=AXISCOLR:BOX=0:GOSUB 63840
62490           IF I=2 THEN XX1=XMAX.P-TICX:XX2=XMAX.P:YY1=LYTIC:YY2=LYTIC:GOSUB 63840
62500           NEXT LTIC
62510 IF I=2 THEN 62670
62520 IF RESOLUT=2 THEN 62570
62530  YPOS.P=((YHI.P+(YMAX.P-LYTIC))/YT.P)*26!
62540  XPOS.P=(3+(3*RESOLUT))-((LEN(STR$(YTIC))/2!))
62550  IF LYTIC>=YMIN.P AND LYTIC<=YMAX.P AND YPOS.P>=1 THEN LOCATE YPOS.P,XPOS.P:PRINT YTIC;
62560 GOTO 62670
62570 IF LYTIC<YMIN.P OR LYTIC>YMAX.P THEN 62620
62580 XPOS%=(2500!*(XMIN.P-LBD.X)/RANGE.X)-(20!*SIZNUMB*LEN(STR$(YTIC)))-20!
62590 YPOS%=(1838!*(LYTIC-LBD.Y)/RANGE.Y)-(10!*SIZNUMB)
62600 II%=SIZNUMB:LPRINT "RO 0;CS ";II%;";MA ";XPOS%;",";YPOS%;";"
62610 LPRINT "TX ;";STR$(YTIC);";"
62620 IF LYTIC+.477<YMIN.P THEN 62670
62630 IF LYTIC+.477>YMAX.P THEN 62670
62640 XPOS%=(2500!*(XMIN.P-LBD.X)/RANGE.X)-(20!*SIZNUMB*LEN(STR$(3!*YTIC)))-20!
62650 YPOS%=(1838!*(LYTIC+.477-LBD.Y)/RANGE.Y)-(10!*SIZNUMB)
62660 LPRINT "RO 0; CS ";II%;"; MA ";XPOS%;",";YPOS%;"; TX ;";STR$(3*YTIC);";"
62670   NEXT CYC
62680 NEXT I
62690 '
62700 '  now plot data on axes
62710 '
62720 SX=0:SY=0:SSX=0:SXY=0
62730 FOR I=1 TO NPTS
62740    X1(I)=X(I):IF XLIN=1 THEN X1(I)=LOG(X(I))/LOG(10)
62750    Y1(I)=Y(I):IF YLIN=1 THEN Y1(I)=LOG(Y(I))/LOG(10)
62760 ' plot the line
62770   IF I=1 THEN 63040
62780   IF LTYPE<1 OR LTYPE>3 THEN 63040
62790   IF RESOLUT=2 THEN 62870
62800   KLR=LINCOLOR:IF RESOLUT=1 THEN KLR=1
62810   XX1=XTOT*(X1(I-1)-LBD.X)/RANGE.X:XX2=XTOT*(X1(I)-LBD.X)/RANGE.X
62820   YY1=200!-((Y1(I-1)-LBD.Y)*200!/RANGE.Y):YY2=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
62830   LINE (XX1,YY1)-(XX2,YY2),KLR,,STYLE
62840   LINE (XX1+1,YY1)-(XX2+1,YY2),KLR,,STYLE
62850 GOTO 63040
62860 '
62870 '         pen plotting
62880 DX2=0:DY2=0
62890 I1%=XTOT*(X1(I-1)-LBD.X)/RANGE.X
62900 I2%=XTOT*(X1(I)-LBD.X)/RANGE.X
62910 I3%=YTOT*(Y1(I-1)-LBD.Y)/RANGE.Y
62920 I4%=YTOT*(Y1(I)-LBD.Y)/RANGE.Y
62930 IF SYM=0 THEN 63010
62940 DX2=XTOT*DX/RANGE.X
62950 LENGTH=SQR(((I2%-I1%)^2)+((I4%-I3%)^2))
62960 IF LENGTH=0 THEN LENGTH=.01
62970 DY2=DX2*(I4%-I3%)/LENGTH
62980 DX2=DX2*(I2%-I1%)/LENGTH
62990 I1%=I1%+DX2:I2%=I2%-DX2
63000 I3%=I3%+DY2:I4%=I4%-DY2
63010 LPRINT "LN ";I1%;",";I3%;",";I2%;",";I4%;";"
63020 '
63030 '      square
63040 IF SYM=0 THEN 63570
63050 IF SYM<1 OR SYM>2 THEN 63100
63060   IF SYM=1 THEN XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=1:KLR=PTCOLOR:GOSUB 63840
63070   IF SYM=1 OR SYM=2 THEN XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)+DY:KLR=PTCOLOR:BOX=1:GOSUB 63840
63080   IF SYM=2 AND RESOLUT<>2 THEN PAINT(((XX1+XX2)/2)+2,(YY1+YY2)/2!),PTCOLOR,PTCOLOR
63090 '     triangle
63100 IF SYM<3 OR SYM >4 THEN 63250
63110 DDX=DX*SQR(7/3):DDY=DY*SQR(7/3)
63120   XX1=X1(I)-DDX:XX2=X1(I)+DDX:YY1=Y1(I)-(DDY/2):YY2=Y1(I)-(DDY/2):KLR=PTCOLOR:BOX=0:GOSUB 63840
63130   XX1=X1(I):XX2=X1(I)-DDX:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63140   XX1=X1(I):XX2=X1(I)+DDX:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63150   XX1=X1(I)+XP.P:XX2=X1(I)+DDX+XP.P:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63160   XX1=X1(I)+XP.P:XX2=X1(I)-DDX+XP.P:YY1=Y1(I)+DDY:YY2=Y1(I)-(DDY/2):GOSUB 63840
63170   XX1=X1(I)-DDX+XP.P:XX2=X1(I)+DDX+XP.P:YY1=Y1(I)-(DDY/2):YY2=Y1(I)-(DDY/2):GOSUB 63840
63180 IF RESOLUT=2 THEN GOTO 63250
63190 '
63200 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
63210 YY1=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
63220 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
63230 IF SYM=4 AND RESOLUT<>2 THEN PAINT (XX1+2,YY1+1),KLR:GOTO 63570
63240 '         circle
63250 IF SYM<5 OR SYM>6 THEN 63420
63260 XX1=XTOT*(X1(I)-LBD.X)/RANGE.X
63270 YY1=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
63280 DDX=XTOT*(2!/SQR(3.14159))*DX/RANGE.X
63290 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
63300 IF RESOLUT=2 THEN 63350
63310    IF SYM=5 OR SYM=6 THEN CIRCLE (XX1,YY1),DDX,KLR:CIRCLE (XX1+1,YY1),DDX,KLR
63320 IF SYM=6 THEN PAINT (XX1+2,YY1+1),KLR,KLR
63330 GOTO 63420
63340 '
63350 XX1=(2500!*(X1(I)-LBD.X)/RANGE.X):YY1=1838!*(Y1(I)-LBD.Y)/RANGE.Y
63360 FOR J=1 TO 16
63370 XD%=XX1+(DDX*SIN(2!*3.14159*(J-1)/15)):YD%=YY1+(DDX*COS(2!*3.14159*(J-1)/15!))
63380 IF J=1 THEN LPRINT "MA ";XD%;",";YD%;";"
63390 IF J>1 THEN LPRINT "DA ";XD%;",";YD%;";"
63400 NEXT J
63410 '         X symbol
63420 IF SYM<>7 THEN 63570
63430 'IF RESOLUT=2 THEN 63400
63440 'XX=XTOT*(X1(I)-LBD.X)/RANGE.X
63450 'YY=200!-((Y1(I)-LBD.Y)*200!/RANGE.Y)
63460 'DDX=XTOT*DX/RANGE.X:DDY=(DY*200!/RANGE.Y)
63470 KLR=PTCOLOR:IF RESOLUT=1 THEN KLR=1
63480 '  LINE (XX-DDX,YY-DDY)-(XX+DDX,YY+DDY),KLR:LINE (XX+DDX,YY-DDY)-(XX-DDX,YY+DDY),KLR
63490 '  LINE (XX-DDX+1,YY-DDY)-(XX+DDX+1,YY+DDY),KLR:LINE (XX+DDX+1,YY-DDY)-(XX-DDX+1,YY+DDY),KLR
63500 'GOTO 63430
63510 '
63520 XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=0:GOSUB 63840
63530 XX1=X1(I)-DX:XX2=X1(I)+DX:YY1=Y1(I)+DY:YY2=Y1(I)-DY:BOX=0:GOSUB 63840
63540 XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)-DY:YY2=Y1(I)+DY:BOX=0:GOSUB 63840
63550 XX1=X1(I)-DX+XP.P:XX2=X1(I)+DX+XP.P:YY1=Y1(I)+DY:YY2=Y1(I)-DY:BOX=0:GOSUB 63840
63560 '  end of loop to do all points - calculate sum of squares
63570   SY=SY+Y1(I):SX=SX+X1(I):SSX=SSX+(X1(I)^2):SXY=SXY+(X1(I)*Y1(I))
63580 NEXT I
63590 '
63600 ' Regression line plotted
63610 IF LTYPE<>4 THEN RETURN
63620 A=((NPTS*SXY)-(SX*SY))/((NPTS*SSX)-(SX*SX))
63630 B=(SY/NPTS)-(A*SX/NPTS)
63640 XMN=(YMIN.P-B)/A:XMX=(YMAX.P-B)/A
63650 IF XMN<XMIN.P THEN XMN=XMIN.P
63660 IF XMX>XMAX.P THEN XMX=XMAX.P
63670 YMN=(A*XMN)+B:YMX=(A*XMX)+B
63680 XX1=XMN:XX2=XMX:YY1=YMN:YY2=YMX:KLR=LINCOLOR:BOX=0:GOSUB 63840
63690 XX1=XMN+XP.P:XX2=XMX+XP.P:YY1=YMN:YY2=YMX:GOSUB 63840
63700 '
63710 RETURN
63720 '
63730 ' key trap of Alt-P to change palette
63740 '
63750 PALET.P=1-PALET.P
63760 COLOR BACKOLOR,PALET.P
63770 RETURN
63780 '
63790 ' key trap of Alt-B to change background color
63800 '
63810 BACKOLOR=BACKOLOR+1
63820 COLOR BACKOLOR,PALET.P
63830 RETURN
63840 '
63850 ' Subroutine to plot line - replaces WINDOW subroutine
63860 ' Calculation to convert real coordinates to screen coordinates
63870 ' To call this subroutine set xx1=first x value, xx2=second x value
63880 '   yy1,yy2=first and second y values
63890 '   range.x=real value limit of screen border
63900 '   range.y= range of y values that corresponds to entire screen
63910 '   xmin.p, ymin.p are the minimun values on the x and y axes
63920 '   KLR= color of line
63930 '   box=0 if no box, =1 if box to be drawn
63940 '   fill=0 if not to fill box, =1 if box to be filled
63950 '   Style$ for dotted or dashed lines is bit template
63960 '   RESOLUT =0 for 320x200   =1 for 640x200
63970 '         in 320x200 mode KLR is the color, in 640x200 is ignored
63980 '
63990 IF RESOLUT=2 THEN 64080
64000 YY2=200!-((YY2-LBD.Y)*200!/RANGE.Y)
64010 YY1=200!-((YY1-LBD.Y)*200!/RANGE.Y)
64020 XX1=XTOT*(XX1-LBD.X)/RANGE.X
64030 XX2=XTOT*(XX2-LBD.X)/RANGE.X
64040 IF RESOLUT=1 THEN KLR=1
64050 IF BOX=1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR,B
64060 IF BOX<>1 THEN LINE (XX1,YY1)-(XX2,YY2),KLR
64070 RETURN
64080 '
64090 ' This section to convert line segments to plot
64100 ' commands for the Sweet-P or Epson Comrex Comscriber I plotters.
64110 ' To plot on plotter:
64120 '         1. align paper in plotter
64130 '         2. turn plotter on
64140 '         3. Set resolut=2 by setting the appropriate parameter in
64150 '                         specifications menu
64160 '         4. When the command is given to plot it will come
64170 '                 out on the plotter rather than on the screen.
64180 '----------------------------------------------------------------
64190 I1%=2500*(XX1-LBD.X)/RANGE.X
64200 I2%=2500*(XX2-LBD.X)/RANGE.X
64210 I3%=1838*(YY1-LBD.Y)/RANGE.Y
64220 I4%=1838*(YY2-LBD.Y)/RANGE.Y
64230 IF BOX<>1 THEN LPRINT "LN ";I1%;",";I3%;",";I2%;",";I4%;";"
64240 IF BOX<>1 THEN RETURN
64250 LPRINT "LN ";I1%;",";I3%;",";I1%;",";I4%;";"
64260 LPRINT "DA ";I2%;",";I4%;";"
64270 LPRINT "DA ";I2%;",";I3%;";"
64280 LPRINT "DA ";I1%;",";I3%;";"
64290 RETURN
64300 '
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0195

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT       987   3-04-85   8:47p
    PC-GRAF  DOC     23296   2-22-85   4:59p
    PC-GRAF4 BAS     36987   3-10-85   8:02p
    LOGPRINT BAS      2399   2-22-85   5:32p
    PC-GRAF2 BAS     25461   2-21-85   9:49a
    DEMOSUB  BAS      1365   2-21-85   5:45p
    SUBGRAF3 BAS     14269   2-20-85   4:12p
    SUBGRAF2 BAS     11054   2-20-85   4:18p
    SUBGRAF4 BAS     21517   3-10-85   8:05p
    PC-GRAF3 BAS     30146   2-21-85   9:50a
    SIMPLEX  BAS      7252   2-22-85   5:44p
    CONVERT  BAS      2065   2-21-85  10:03a
    SORT     EXE      1408  10-20-83  12:00p
    LOGON    BAS      5607   2-22-85   5:37p
    README   DOC      1920   1-01-80   2:29a
    LOGON    BAT        15   7-14-84   2:51p
    LOGOFF   BAT        16   7-14-84   2:50p
    LOGOFF   BAS      3005   2-22-85   5:29p
    LOGPRINT BAT        28   9-20-84   1:18p
    README   BAK      1427   2-22-85   5:54p
    AUTOEXEC BAT       190   1-01-80  12:06a
    CONFIG   SYS        30   3-04-85  10:50a
    COLOR    BAS      1744  10-02-84   3:41p
    COLOR    SCR        17   5-18-84  10:00p
    COLOR    BAT        36   3-04-85  10:50a
    KEYDEF             122   1-01-80  12:06a
    KEYDEF   BAS      5202   1-01-80  12:06a
    KEYDEF   BAT        16   1-01-80  12:03a
    TESTPLOT DTA      2002   1-01-80   2:48a
    PRINTQUE DOC     12416   1-01-80   1:42a
    PRINTQUE BAS     16000   1-01-80  12:21a
           31 file(s)     227999 bytes
                           74752 bytes free
