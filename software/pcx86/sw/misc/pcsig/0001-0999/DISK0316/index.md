---
layout: page
title: "PC-SIG Library Disk #316"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0316/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0316"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMMUNICATION UTILTIES #1"

    This disk contains a collection of popular, public domain communication
    utilities and a list of IBM-PC oriented BBS's.  Most are oriented to
    the Hayes Smartmodem command set.  HC.COM is a Hex File converter which
    converts to and from HEX format.  It can automatically provide a COM or
    EXE extension.  NUSQ-11.COM is a utility for expanding squeezed files
    to their original uncompressed state.  Two separate versions of NUSQ
    are available, one for CP/M-86 and one for the MS-DOS operating system.
    PCTERM.ASM is a simple terminal program which uses interrupt driven
    buffered communications.  The program can thus operated at 9600 baud
    without losing data.
    
    System Requirements: Serial port, modem
    
    How to Start: Review documentation in the .DOC and .TXT files.  To run
    any program with the suffix .COM or .EXE, just type its filename,
    i.e., for SQPC.EXE type SQPC and press <ENTER>.  To run the BASIC
    programs follow the GETTING STARTED instructions for your
    configuration.
    
    File Descriptions:
    
    ADDCRS   BAS  Copies files without carriage returns & adds them
    AREACODE EXE  Displays geographic location of telephone area codes
    APPLECOM BAS  Allows keyboard input to flow out to com port & file
    MODEM7PC COM  Christensen's XMODEM7 (IBM-PC Main Serial Port version)
    LYNC     DOC  Brief documentation of LYNC.COM
    IBMPCBBS LST  Text file containing directory of IBM-PC bulletin boards
    HC       DOC  Text file : documentation for HC.COM program
    HC       COM  Hex file convertor  HEX <--> COM or EXE or BIN
    HAYESTST BAS  Tests and reports the switch settings on Hayes Smartmodem
    HAYES    TXT  Text file of handy POKES to be used with Hayes Micromodem
    FILTER   BAS  Filters non-ASCII characters from a transmitted file
    CVTBIN   COM  Converts binary files
    NSQ-201  EXE  Advanced file squeezer
    NUSQ-11  COM  File un-squeeze utility
    NUSQ-11  DOC  Text file documentation of NUSQ-11.COM
    SQPC     EXE  File squeezer
    SQ       EXE  Advanced file squeezer
    PCTERM   DOC  Text file description of PCTERM.ASM
    PCTERM   ASM  Dumb-terminal using interupt driven buffered commun.
    UNWS     EXE  Remove high-order bits from WORDSTAR files
    TYPESQ   EXE  Type a squeezed file
    XMODEM   DOC  Text file of Christensen's Modem Protocol overview
    WARGAMES BAS  Automatic sequence dialer; seeks carrier signal;HayesModem
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDCRS.BAS

```bas
2 INPUT"INPUT THE FILENAME THAT WAS DOWNLOADED WITHOUT CR (d:filename)  ",A$
4 INPUT"INPUT THE NEW NAME FOR THE DOWNLOADED FILE (d:filename)  ",B$
5 ' CHANGE THE INPUT AND OUTPUT NAMES TO THE NAMES OF THE FILES YOU WANT AS
6 ' INPUT AND OUTPUT  PRIMARILY USED TO COPY FILES WITH NO CARRIAGE RETURNS
7 ' IN THEM SO THAT YOU CAN EDLIN THEM   CONTRIBUTED BY DON WITHROW
10 OPEN A$ FOR INPUT AS #1
20 OPEN B$ FOR OUTPUT AS #2
30 IF EOF(1) THEN 100 ELSE LINE INPUT #1, THELIN$
40 PRINT #2, THELIN$
50 GOTO 30
100 CLOSE:END
120 'This program will add Carriage Returns to a downloaded file that does
130 'not appear to have them when you try to list it using the DOS TYPE
140 'command. The file has to be a basic program, patch or subroutine.
150 'After adding CRs to the file you can then use EDLIN to remove direct
160 'statements from the file.
```

## APPLECOM.BAS

```bas
10 DEFINT A-Z
15 FALSE=0:TRUE= NOT FALSE
20 KEY OFF:CLS:CLOSE
30 OPEN "COM1:300,E,7" AS 1
40 B$=INKEY$: IF B$<> "" AND B$ <>"\"      THEN PRINT#1,B$;
50 IF B$="\" THEN PRINT #1,CHR$(19);:       GOTO 500
60 IF EOF(1) THEN 40
70 IF LOC(1)>128 THEN PRINT #1,CHR$(19) ;:   PAUSE=TRUE
80 A$=INPUT$(LOC(1),#1)
90 PRINT A$;
100 IF FLG THEN PRINT #2,A$;
110 IF LOC(1)>0 THEN GOTO 70
120 IF PAUSE THEN PAUSE=FALSE:PRINT #1,     CHR$(17);
130 GOTO 40
500 PRINT "1 OPEN FILE"
510 PRINT "2 CLOSE FILE"
520 PRINT "3 END SESSION"
530 INPUT "OPTION ",OPT
540 ON OPT GOTO 600,700,800
590 REM OPEN FILE
600 INPUT "FILE NAME.EXT ",F$
610 OPEN F$ FOR OUTPUT AS #2
620 PRINT #1,CHR$(17);
625 FLG=TRUE
630 GOTO 40
690 REM CLOSE FILE
700 CLOSE #2
710 PRINT #1,CHR$(17);
715 FLG=FALSE
720 GOTO 40
790 REM END
800 CLOSE
810 END
```

## FILTER.BAS

```bas
10 '    FILTERS  NON-ASCII CHARACTERS FROM A FILE
20 '    USEFUL FOR CLEANING UP NULLS AND CONTROL CHARACTERS FROM A
30 '    TRANSMITTED FILE.
40 '                                       RICHARD STECK  820511
50 '
60 '
70 CLOSE
80 DEFINT A-Z
90 ON ERR GOTO 470
100 KEY OFF
110 CLS:WIDTH 80: LOCATE 12,,1
120 INPUT "   ENTER NAME OF FILE TO BE FILTERED  "; F1$
130 PRINT
140 INPUT "   ENTER DESTINATION FILE NAME        "; F2$
150 IF F1$ = F2$ THEN GOTO 110
160 PRINT: PRINT
170 PRINT TAB(10), "Source file name is: "; TAB(33); F1$
180 PRINT
190 PRINT TAB(10), "Destination file name is: ";TAB(33); F2$
200 PRINT
210 INPUT " Is that correct(Y/N/Q)?  "; ANS$
220 IF (LEFT$(ANS$,1) = "Q") OR (LEFT$(ANS$,1) = "q" )  THEN STOP
230 IF NOT ((LEFT$(ANS$,1) = "Y") OR (LEFT$(ANS$,1) = "y") ) THEN GOTO 160
240 OPEN F1$ FOR INPUT AS #1
250 OPEN F2$ FOR OUTPUT AS #2
260 '
270 WHILE NOT EOF(1)
288    LINE INPUT #1,A$
290 '
300 PRINT  A$ :  '  DISPLAY STRING
310    GOSUB 370
320    PRINT #2,A$
330 WEND
340 CLOSE 1,2
350 STOP
360 '
370 '  FILTER OUT NULLS FROM A$
380 AA$= STRING$(255," ")
390 J = 1
400 FOR I = 1 TO LEN(A$)
410 TEST = ASC(MID$(A$,I,1))
420 IF TEST < 32 AND (TEST < 7 OR TEST > 13) THEN GOTO 430 ELSE MID$(AA$,J,1) =  MID$(A$,I,1) : J = J + 1
430 NEXT I
440 A$ = LEFT$(AA$,J-1)
450 RETURN
460 '
470 PRINT : PRINT "ERROR CONDITION  "; ERR; "  IN LINE NO. "; ERL: PRINT : STOP
```

## HAYESTST.BAS

```bas
10 CLS
20 PRINT "Hayes SMARTMODEM Switch Test"
30  PRINT "(C) Copyright 1984, Sally A. Gaer"
50 PRINT
55 GOSUB 960
60 PRINT "MODEM test started.  Test will take about 15 seconds ..";
70 ON ERROR GOTO 890
80 DIM A$(20)
90 S1$="?": S2$="?": S3$="?": S4$="?": S5$="?": S6$="?"
100 S7$="?": S8$="?"
110 OPEN "com1:300,e,7,2" AS #1
120 S6$="D"
130 '
140 '
150 '------------Reset Modem------------
160 '
170 PRINT "..";
180 FOR I=1 TO 2000
190 NEXT I
200 PRINT#1,"+++";
210 FOR I=1 TO 2000
220 NEXT I
230 PRINT#1,"ATZ"
240 FOR I=1 TO 2000
250 NEXT I
260 PRINT "..";
270 '
280 '
290 '-------Reset modem again and check for return code and echo-----
300 '
310 GOSUB 830
320 A=INSTR(1,A$,"OK"): IF A>0 THEN S3$="D": S2$="U": GOTO 360
330 A=1
340 A=INSTR(A,A$,"0"): IF A>0 THEN S3$="D": S2$="D": GOTO 360
350 S3$="U"
360 PRINT#1,"ATZ"
370 FOR I=1 TO 2000: NEXT I
380 PRINT "..";
390 GOSUB 830
400 '
410 '-------Check for echo---------
420 '
430 IF LEFT$(A$,3)="ATZ" THEN S4$="U": GOTO 440 ELSE S4$="D"
440 IF LEFT$(A$,1)="0" THEN S2$="D": GOSUB 670: STOP
450 GOSUB 500: GOTO 600
460 '
470 '
480 '-------CheCk Modem Status Registers for switch settings ------
490 '
500 PRINT#1,"AT S13? S14? S15?"
510 FOR I=1 TO 4000: NEXT I
520 GOSUB 830
530 IF S4$="U" THEN A$=MID$(A$,19,255)
540 S13=VAL(LEFT$(A$,3)): S14=VAL(MID$(A$,5,3)): S15=VAL(MID$(A$,9,3))
550 IF S13=0 AND S14=0 AND S15=0 THEN S8$="U" ELSE S8$="D"
560 RETURN
570 '
580 '
590 '
600 S5$=MID$(A$,7,1): IF S5$="1" OR S5$="3" OR S5$="5" OR S5$="7" THEN S5$="U" ELSE S5$="D"
610 IF S8$="U" THEN S5$="?": S2$="?": S3$="?"
620 GOSUB 670
630 C$=S1$+S2$+S3$+S4$+S5$+S6$+S7$+S8$
640 IF C$="?UDUDD?D" THEN PRINT "MODEM switch settings are correct": BEEP: END
650 PRINT "MODEM switch settings are incorrect"
660 STOP
670 PRINT "Modem switch settings"
680 PRINT "Switch 1 = ";S1$
690 PRINT "Switch 2 = ";
700 IF S2$="U" THEN PRINT S2$: GOTO 710 ELSE COLOR 31: PRINT S2$: COLOR 15
710 PRINT "Switch 3 = ";
720 IF S3$="D" THEN PRINT S3$: GOTO 730 ELSE COLOR 31: PRINT S3$: COLOR 15
730 PRINT "Switch 4 = ";
740 IF S4$="U" THEN PRINT S4$: GOTO 750 ELSE COLOR 31: PRINT S4$: COLOR 15
750 PRINT "Switch 5 = ";
760 IF S5$="D" THEN PRINT S5$: GOTO 770 ELSE COLOR 31: PRINT S5$: COLOR 15
770 PRINT "Switch 6 = ";
780 IF S6$="D" THEN PRINT S6$: GOTO 790 ELSE COLOR 31: PRINT S6$: COLOR 15
790 PRINT "Switch 7 = ";
800 IF S7$="?" THEN PRINT S7$: GOTO 810 ELSE COLOR 31: PRINT S7$: COLOR 15
810 PRINT "Switch 8 = ";S8$
820 RETURN
830 A$=""
840 WHILE NOT EOF(1)
850 PRINT ".";
860 A$=A$+INPUT$(LOC(1),#1)
870 WEND
880 RETURN
890 IF ERR=24 THEN S6$="U": GOSUB 670: STOP
900 PRINT "Unknown error "
910 RESUME
960 PRINT : PRINT "Turn your modem power switch off and then on"
970 PRINT "Press enter when you have done this"
980 A$=""
990 A$=INKEY$: IF A$="" THEN GOTO 990
1000 RETURN
1010 RETURN
```

## WARGAMES.BAS

```bas

0 '===START OF FILE===
10 '*******  AUTOMATIC SEQUENCE DIALER (a la "Wargames") **********************
20 'Written for the IBM PC and HAYES SMARTMODEM by Steve Klein 9/25/83
30 'Modified (Steve wouldn't recognize it anymore) with enhancements (starting
40 'number, printer on/off option, abort/hang up) by John Siers 12/28/83
45 '**************************************************************************
50 'This program will dial numbers in sequence looking for computer carrier
60 'signals. When carrier is found, phone # is listed to printer and/or screen.
75 '**************************************************************************
100 CLEAR ,,2000:XY=2
110 KEY OFF:COLOR 0,7:CLS:LOCATE 10,25:PRINT "Wargames Dialer Program"
120 LOCATE 12,26:PRINT "Written by Steve Klein":LOCATE 14,26:PRINT "Modified by John Siers"
125 FOR I=1 TO 5000:NEXT
130 A$="":AB$="":CLS:PRINT " PLEASE ENTER PREFIX DIGITS (IF ANY), THE AREA CODE (IF ANY), AND THE":PRINT "FIRST THREE NUMBERS [hyphens may be used to separate e.g.9-1-nnn-nnn]: ":INPUT "~~~>",A$
140 INPUT "START DIALING AT # (LAST 4 DIGITS)";SN:IF SN>9999 OR SN<0 THEN 140 ELSE N1=INT(SN/1000):N2=INT((SN-(N1*1000))/100):N3=INT((SN-(N1*1000+N2*100))/10):N4=SN-(N1*1000+N2*100+N3*10)
160 PRINT "LIST COMPUTER CONNECTIONS TO <S>CREEN ONLY OR <P>RINTER AND SCREEN?"
170 PRINTON$=INKEY$:IF PRINTON$<>"S" AND PRINTON$<>"s" AND PRINTON$<>"P" AND PRINTON$<>"p" THEN 170
200 '*** Begin dialing sequence ***
205 CLS
210 FOR E=N1 TO 9:FOR B=N2 TO 9:FOR C=N3 TO 9:FOR D=N4 TO 9:N1=0:N2=0:N3=0:N4=0
220 OPEN "COM1:300,n,8,1,CS,DS" AS #1:R=32:PRINT #1,"ATDT"A$;E;B;C;D
225 DIAL=E*1000+B*100+C*10+D:DL$=STR$(DIAL):IF LEN(DL$)=2 THEN DN$="000"+RIGHT$(DL$,1) ELSE IF LEN(DL$)=3 THEN DN$="-00"+RIGHT$(DL$,2) ELSE IF LEN(DL$)=4 THEN DN$="-0"+RIGHT$(DL$,3) ELSE DN$="-"+RIGHT$(DL$,4)
230 GOSUB 500:LOCATE 25,1:PRINT "DIALING ";A$;DN$;:LOCATE 25,35:PRINT "TIME LEFT";R;"SECONDS: [A]=ABORT [H]=HANG UP ";
240 '*** Check for input to comm buffer (carrier) ***
250 A=LOC(1):IF A>(20+LEN(A$)) THEN 280
260 IF R>0 THEN 230
270 CLOSE:FOR I=1 TO 3000:NEXT:NEXT D,C,B,E
275 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "END OF DIALING SEQUENCE:";:INPUT " PRESS ENTER TO CONTINUE ---->";XX$:GOTO 130
278 '*** Found One!!! ***
280 SOUND 150,5:XY=XY+1:LOCATE XY,1:PRINT A$;DN$:IF PRINTON$="P" OR PRINTON$="p" THEN LPRINT A$;DN$
290 GOTO 270
500 '*** Countdown time and check for abort/hang up ***
510 LET R=R-1:FOR I=1 TO 1050:NEXT:AB$=INKEY$:IF AB$="A" OR AB$="a" THEN 520 ELSE IF AB$="H" OR AB$="h" THEN 530 ELSE RETURN
520 PRINT #1,"ATH":CLOSE:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:INPUT "DIALING ABORTED: PRESS ENTER TO CONTINUE ---->";XX$:GOTO 130
530 PRINT #1,"ATH":R=0:RETURN
1000 '***********************************************************************
1010 ' Another helpful program from Steve Klein
1020 ' With enhancements by John Siers (who found the original on the
1030 ' Lehigh Valley BBS, Allentown PA -- 12/83)
                                                                     
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0316

     Volume in drive A has no label
     Directory of A:\

    DISKO316 ZIP     85232   3-20-90  12:49a
            1 file(s)      85232 bytes
                           74752 bytes free
