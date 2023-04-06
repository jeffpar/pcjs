---
layout: page
title: "PC-SIG Diskette Library (Disk #2)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0002/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0002"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPOOLERS"

    BASIC utilities, as well as screen handlers, print spoolers, and a good
    directory utility.
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC or
    TXT files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    KYBD     BAS  Outputs keyboard input to the printer like a typewriter.
    CROSSREF BAS  Generates a cross-reference listing for BASIC programs.
    STARTREK BAS  Command the Enterprise while hunting for Klingons.
    LISTER   BAS  Generates a formatted listing of BASIC programs.
    DISKMOD  BAS  Utility to examine and modify disk sectors.
    MONITOR       Toggles between monochrome and color display.
    PROGRAM  DOC  Details for running the programs on this disk.
    NEWKEY   BAS  Reassigns the ten function keys.
    ADDCR    BAS  Adds a carriage return to each line in a text file.
    GRAF2    COM  Graphic screen dump using the PrtSc key.
    CSPOOL   COM  Print spooler for printer adapter.
    SYSTAT   COM  Displays system status.
    UNPROT   TXT  Procedure for unprotecting BASIC programs.
    CLS      COM  Clears the screen from DOS.
    SDIR     COM  Displays the directory on one screen (DOS 1.1 only).
    CLEAN    COM  Exercises disk when using a cleaning diskette.
    HEXCONV  BAS  Converts binary files to ASCII for transmission.
    MSPOOL   COM  Print spooler for monochrome/printer adapter.
    HGRI     EXE  Graphics screen dump using PrtSc key.
    CR       BAS  Cleans up downloaded BASIC files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDCR.BAS

```bas
1 ' ADDCR.BAS - Add carriage returns to text files
10 CLS:LOCATE 5,14:PRINT "Here's a nifty program to insert carriage returns"
11 LOCATE 6,12:PRINT "in Downloaded files, so they can be handled by EDLIN."
12 LOCATE 8,20:INPUT "Input file";A$
14 LOCATE 10,20:INPUT "Output file";B$
20 LOCATE 14,25:CLS:PRINT "W O R K I N G . . .";
30 OPEN "I",1,A$: OPEN "O",2,B$
40 IF EOF(1) THEN GOTO 80
50 LINE INPUT#1,TE$
60 PRINT#2,TE$
70 GOTO 40
80 CLOSE:END
```

## CR.BAS

```bas
10 ' CR.BAS - Add carriage returns to text files
20 KEY OFF
30 CLS:LOCATE 18,1:FILES:GOTO 1000
100 IN$="":IN$=INKEY$:IF IN$="" THEN 100 ELSE RETURN
200 CHOP=INSTR(A$,"."):IF CHOP>0.001 THEN A$=LEFT$(A$,CHOP-1)
210 A$=A$+".OUT"
220 RETURN
1000 LOCATE 1,21:PRINT"Software from MENTOR Computer Services"
1002 LOCATE 5,15:PRINT "CR -- Inserts carriage returns to downloaded files."
1010 LOCATE 8,10:PRINT "Source Drive (B: default): ";:GOSUB 100:IF IN$<"A" THEN INDRIVE$="B:" ELSE INDRIVE$=IN$+":"
1020 IGNORE=0:PRINT INDRIVE$
1030 LOCATE 9,10:PRINT"Destination Drive (C: default): ";:GOSUB 100:IF IN$<"A" THEN OUTDRIVE$="C:" ELSE OUTDRIVE$=IN$+":"
1040 PRINT OUTDRIVE$
1050 SOURCE$="":LOCATE 11,20:LINE INPUT "Input file: ";A$:SOURCE$=INDRIVE$+A$
1055 IF OUTDRIVE$=INDRIVE$ THEN GOSUB 200
1060 DEST$=OUTDRIVE$+A$
1070 LOCATE 14,25:PRINT "W O R K I N G . . .";
1080 OPEN "I",1,SOURCE$: OPEN "O",2,DEST$
1090 TE$="":IF EOF(1) THEN GOTO 1130
1100 LINE INPUT#1,TE$:IF INSTR(TE$,CHR$(7))>0.001 THEN GOTO 1090
1101 IF IGNORE=1 THEN GOTO 1110
1102 IF VAL(LEFT$(TE$,2))<0.001 THEN LINER=1:BEEP:LOCATE 14,1:PRINT TE$;SPACE$(75-POS(0)):PRINT"Not a BASIC statement.  (C)ontinue, (D)elete or (A)bort";:GOSUB 100:IF IN$="D" THEN GOTO 1090 ELSE IF IN$="A" THEN CLOSE:CLS:GOTO 30 ELSE IGNORE=1
1104 IF LINER=1 THEN LINER=0:FOR X=14 TO 17:LOCATE X,1:PRINT SPACE$(79);:NEXT:LOCATE 14,25:PRINT "W O R K I N G . . .";
1110 PRINT#2,TE$
1120 GOTO 1090
1130 CLOSE:LOCATE 14,25:PRINT "    D O N E !";SPACE$(25):
1140 FOR TONE=1 TO 2:SOUND 800,3:SOUND 400,3:NEXT
1150 LOCATE 16,20:PRINT"Do another? ";:GOSUB 100:IF IN$="Y" THEN FOR X=11 TO 17:LOCATE X,1:PRINT SPACE$(79):NEXT:GOTO 1050
1160 CLS:END
```

## CROSSREF.BAS

```bas
4  'SEE INTERFACE AGE -- JUNE 1981 -- PAGE 98
6  '
7 '
8 ' MODIFIED FOR BASIC/BASICA by Lee Anderson 9/01/82
9 '
10 CLS:LOCATE 8,1:PRINT"CROSSREF   -   BASIC-80 VERSION OF 05/19/80"
20 PRINT:PRINT"COPYRIGHT (C) 1980 BY ADVANCED INFORMATICS"
30 PRINT:PRINT"LISTS ALL VARIABLES & REFERENCED LINE #'S"
50 '
51 DIM MONTH$(12)
52 FOR J = 1 TO 12: READ MONTH$(J): NEXT J
53 DATA Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
54 D$ = MID$(DATE$,4,3) + MONTH$(VAL(MID$(DATE$,1,2))) + "-" + MID$(DATE$,9,2)
60 DEFINT I-J:LW=80
70 ON ERROR GOTO 1480
80 DIM RW$(158),PT%(25),F$(10)
90 I=400:DIM VNXT%(490),V$(490),FRST%(400),LST%(400),RFL%(2000),NXT%(2000)
100 '
110 ' RESERVED WORDS
120 '
130 DATA ABS,AND,AS,ASC,ATN,AUTO,BASE,BEEP,BLOAD,BSAVE
131 DATA CDBL,CHAIN,CHR$,CINT,CIRCLE
135 DATA CLEAR,CLOSE,CLS,COLOR,COM,COMMON,CONT
140 DATA COS,CSNG,CVD,CVI,CVS,DATA,DATE$,DEF
150 DATA DEFDBL,DEFINT,DEFSNG,DEFSTR,DEFUSR,DEF,DIM,DRAW
160 DATA EDIT,ELSE,END,EOF,EQV,ERASE,ERL,ERR,ERROR,EXP,FIELD,FILES,FIX,FOR
170 DATA FRE,GET,GOSUB,GOTO,HEX$
180 DATA IF,IMP,INKEY$,INPUT,INPUT#,INPUT$,INP,INSTR,INT,KEY,KILL,LEFT$,LEN,LET,LINE
190 DATA LIST,LLIST,LOAD,LOC,LOCATE,LOF,LOG,LPOS,LPRINT,LSET,MERGE,MID$,MKD$,MKI$
200 DATA MKS$,MOD,MOTOR,NAME,NEW,NEXT,NOT,OCT$,OFF,ON,OPEN,OPTION,OR,OUT
210 DATA PAINT,PEEK,PEN,PLAY,POKE,POS,PRESET,PRINT,PRINT#,PSET,PUT
220 DATA RANDOMIZE,READ,REM,RENUM,RESET,RESTORE,RESUME,RETURN,RIGHT$,RND,RSET,RUN
230 DATA SAVE,SCREEN,SGN,SIN,SOUND,SPACE$,SPC(,SQR,STEP,STOP,STR$
240 DATA STRIG,STRING$,SWAP,SYSTEM,TAB(,TAN,THEN,TIME$,TO,TROFF,TRON
250 DATA USING,USR,VAL,VARPTR,WAIT,WEND,WHILE,WIDTH,WRITE,WRITE#,XOR,"\"
260 '
270 'FILL ARRAY WITH RESERVED WORDS
280 '
290 RW=0
300 READ RW$
310 RW=RW+1:RW$(RW)=RW$:IF RW$="\" THEN 350
320 I=ASC(RW$)-ASC("A"):IF PT%(I)=0 THEN PT%(I)=RW
330 GOTO 300
340 '
350 FOR I=0 TO 25:IF PT%(I)=0 THEN PT%(I)=RW
360 NEXT
370 '
380 'GET LIST OF FILE NAMES
390 '
400 FX=0
410 PRINT:PRINT " ASCII SAVED PROGRAM #" FX+1 " = ";:LINE INPUT L$
420 IF L$="" THEN IF FX<1 THEN 570 ELSE 480
430 IF INSTR(L$,".")=0 THEN L$=L$+".BAS"
440 NAME L$ AS L$
450 FX=FX+1:F$(FX)=L$
460 GOTO 410
470 '
480 '
490 PRINT:INPUT"1) CROSS REFERENCE   2) LIST   3) BOTH ";M
500 '
510 'PROCESS LIST OF FILE NAMES
520 '
530 FOR F=1 TO FX
540 CLOSE:OPEN"I",1,F$(F):PRG$="'"+F$(F)+"'  -  "+D$:GOSUB 610
550 NEXT
560 ' there was a form feed here but i thought it was not necessary
565 ON ERROR GOTO 0
570 END
580 '
590 'INITIALIZE FOR CROSS REFERENCE
600 '
610 LC=0:BC=0:PZ=0:V$="":C$="":VC=91:RC=-1
620 FOR I=0 TO 91:VNXT%(I)=-1:NEXT
630 IF M>1 THEN GOSUB 1520
640 '
650 '   INPUT LINE & EXTRACT LINE#
660 '
670 IF EOF(1)THEN 1200
680 LINE INPUT#1,L$:IF M>1 THEN GOSUB 1430:IF M=2 THEN 670
690 LG=LEN(L$):BRNCH=0:ER$="":LC=LC+1:BC=BC+LG
700 LP=INSTR(L$," "):LN=VAL(LEFT$(L$,LP)):PRINT LN,
710 IF LN>32767 THEN LN=LN-65536.
720 '
730 '   PARSE REST OF LINE
740 '
750 LP=LP+1:IF LP>LG THEN GOSUB 1010:GOTO 670
760 C$=MID$(L$,LP,1)
770 IF C$>="A"AND C$<="Z"THEN 890 ELSE IF C$>="0"AND C$<="9"THEN 1150
780 IF C$=" "THEN 750 ELSE IF C$<>","THEN BRNCH=0
790 IF C$=CHR$(34)THEN GOSUB 1010:LP=INSTR(LP+1,L$,C$):IF LP>0 THEN 750 ELSE 670
800 IF C$="\"THEN GOSUB 1010:GOTO 670
810 IF C$="&"THEN GOSUB 1010 :V$=C$:GOTO 750
820 IF C$="$"OR C$="!"OR C$="%"OR C$="#"THEN GOSUB 1130:GOTO 750
830 IF C$="("THEN GOSUB 1130
835 IF C$ = "." THEN GOSUB 1130: GOTO 750
840 GOSUB 1010:IF C$<>","THEN ER$=""
850 GOTO 750
860 '
870 '   TEST FOR COMMAND
880 '
890 C=ASC(C$):P=PT%(C-ASC("A")):BRNCH=0
900 IF C<ASC(RW$(P))THEN 1160
910 IF INSTR(LP,L$,RW$(P))<>LP THEN P=P+1:GOTO 900
920 GOSUB 1010:RW$=RW$(P)
930 IF RW$="DATA" THEN LP=INSTR(LP,L$,":"):IF LP>0 THEN 750 ELSE 670
940 IF RW$="REM"THEN 670
950 IF RW$="GOTO"OR RW$="GOSUB"OR RW$="THEN"OR RW$="ELSE"OR RW$="RESUME"THEN BRNCH=1
960 IF RW$="ERASE"THEN ER$="("ELSE ER$=""
970 LP=LP+LEN(RW$)-1:GOTO 750
980 '
990 '  END VARIABLE
1000 '
1010 IF V$=""THEN RETURN
1020 IF V$>="A"THEN V$=V$+ER$:C=ASC(V$)+1ELSE IF V$>="0"THEN V$=RIGHT$("    "+V$,5):C=VAL(LEFT$(V$,2)) ELSE 1090
1030 IL=-1:I=C
1040 IF V$>V$(I)THEN IL=I:I=VNXT%(I):IF I>0 THEN 1040 ELSE 1060
1050 IF V$=V$(I)THEN J=LST%(I-91):IF RFL%(J)=LN THEN 1090 ELSE RC=RC+1:NXT%(J)=RC:GOTO 1080
1060 VC=VC+1:IF IL>=0 THEN VNXT%(IL)=VC
1070 V$(VC)=V$:VNXT%(VC)=I:RC=RC+1:FRST%(VC-91)=RC:I=VC
1080 RFL%(RC)=LN:NXT%(RC)=-1:LST%(I-91)=RC
1090 V$="":RETURN
1100 '
1110 '  EXPAND VARIABLE
1120 '
1130 IF V$<>""THEN V$=V$+C$
1140 RETURN
1150 IF V$=""AND BRNCH=0 THEN 750
1160 V$=V$+C$:GOTO 750
1170 '
1180 '  LIST VARIABLES
1190 '
1200 IF M=2 THEN RETURN
1210 PZ=0: GOSUB 1400: SZ = -1
1220 FOR J=0 TO 91:V=J
1230 V=VNXT%(V):IF V<0 THEN 1340
1240 IF LZ>56 THEN GOSUB 1400 ELSE SZ=SZ+1:IF SZ=3 THEN GOSUB 1410
1250 RZ=0:I=FRST%(V-91):LPRINT V$(V);
1260 IF RZ=0 THEN LPRINT TAB(16);
1270 LN=RFL%(I):IF LN<0 THEN LN=LN+65536.
1280 LPRINT USING"    #####";LN,
1290 RZ=RZ+1
1300 IF RZ>6 THEN RZ=0:LPRINT:LZ=LZ+1:IF LZ>56 THEN GOSUB 1400
1310 I=NXT%(I):IF I>0 THEN 1260
1320 IF RZ>0 THEN LPRINT:LZ=LZ+1
1330 GOTO 1230
1340 NEXT J
1350 '
1360 LPRINT STRING$(79,"=")
1370 LPRINT"LINES:"LC"    BYTES:"BC"    SYMBOLS:"VC-91" REFERENCES:"RC+1
1380 LZ=LZ+2:RETURN
1390 '
1400 GOSUB 1520:LPRINT"SYMBOL"TAB(20)"REFERENCE LINE":LZ=LZ+1
1410 LPRINT STRING$(79,"-"):LZ=LZ+1:SZ=0:RETURN
1420 '
1430 X=1
1440 IF LZ>60 OR RIGHT$(L$,3)="'PG"THEN GOSUB 1520
1450 Y=INSTR(X,L$,CHR$(10)):IF Y>0 THEN LPRINT MID$(L$,X,Y-X):LZ=LZ+1:X=Y+1:GOTO 1450
1460 LPRINT MID$(L$,X,LW):LZ=LZ+1:X=X+LW:IF X<LEN(L$) THEN 1460 ELSE RETURN
1470 '
1480 IF ERR=53 THEN PRINT:PRINT"FILE NOT FOUND":RESUME 410
1490 IF ERR=58 THEN RESUME 450
1491 IF ERR = 71 THEN BEEP: PRINT "***Check disk drive. It's not ready.": RESUME 410
1492 IF ERR = 72 THEN BEEP: PRINT "Disk Media Error.": RESUME 410
1493 ' THIS IS A COMMENT
1494 PRINT "ERROR CODE =";ERR;"; Check BASIC manual for cause.":STOP
1500 '
1510 '
1520 LPRINT CHR$(12)
1530 PZ=PZ+1:LPRINT PRG$;SPACE$(70-LEN(PRG$));"PG#";PZ
1540 LPRINT
1550 LZ=3:RETURN
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

## HEXCONV.BAS

```bas
101 ' Binary-to-hex-and-back-again conversion program for the IBM PC
102 '
103 ' Copyright (C) 1982 J. P. Garbers.  All rights reserved.
104 '
105 '
110 LN$="\"+SPACE$(78)+"\"
120 DEF SEG = 64 : KSTATE = PEEK(23) : POKE 23,32 : DEF SEG  ' set NUM LOCK state, saving current state for later
130 TROFF : ON ERROR GOTO 10000
140 DEF FNA(X$) = 40 - LEN(X$)/2
150 DIM PRO$(6)
170 EXPERT = 0 ' rem expert 1 needs no CR after menu choice, expert 0 wants CR
200 GOSUB 2000 ' do the ego module
210 WHILE NOT DONE : GOSUB 3000 : WEND  ' process menu requests
220 GOTO 9900 ' end stuff
2000 ' ego module
2010 COLOR 7,0 : KEY OFF : CLS : LOCATE 12,1 : COLOR 0,7
2020 PRINT " The following program is brought to you by a grant from Userview Corporation.  ";
2025 COLOR 7,0
2030 FOR TIME = 1 TO 1500 : IF INKEY$<>"" THEN TIME = 1500
2040 NEXT TIME : IF EXPERT THEN RETURN ELSE GOSUB 2300 ' title line and cls
2050 INPUT "Would you like instructions";INST$: IF INST$="" THEN INST$="N"
2060 IF LEFT$(INST$,1)<>"Y" AND LEFT$(INST$,1)<>"y" THEN RETURN
2070 LOCATE 8,1
2080 PRINT "This program allows you to convert binary files from one format to"
2085 PRINT "another.   HEX format files may be easily  transmitted over  phone"
2090 PRINT "lines  and  information  services since  they consist  entirely of"
2095 PRINT "readable characters, but they cannot be used directly as commands."
2100 PRINT "COM  and EXE files may be used  directly as DOS commands,  but are"
2105 PRINT "difficult to send and receive without special software."
2110 PRINT
2115 PRINT "    You can use this program  to convert COM and EXE files to HEX"
2120 PRINT "format files to send your files to someone else, and also use"
2125 PRINT "it to convert HEX files you've received to executable format."
2130 PRINT : CV = CSRLIN : GOSUB 2200 : LOCATE CV, 1
2135 PRINT "You'll tell this program what you want to do by selecting choices"
2140 PRINT "from menus.  To make a selection, press the numbered key corres-"
2145 PRINT "ponding to your choice and it will light up.  You may change your"
2150 PRINT "mind by pressing a different number, and the new choice will light"
2155 PRINT "up.  When the correct choice is lit up, press ENTER.  You may also"
2160 PRINT "press ESC to return to the previous menu."
2165 PRINT
2170 PRINT "As you get used to the program, you may wish to use 'expert mode'."
2175 PRINT "In expert mode you don't have to press ENTER after making your"
2180 PRINT "numbered choice, so make sure you press the right key the first"
2185 PRINT "time.":PRINT
2190 GOSUB 2200 : RETURN
2200 ' wait for keypress
2210 LOCATE 24,4:COLOR 0,7
2220 PRINT "Press the SPACE BAR to continue, or ESC to stop using this program.";
2225 PAUSE$=""
2230 WHILE PAUSE$="": PAUSE$=INKEY$: WEND: COLOR 7,0
2235 IF ASC(PAUSE$)=27 THEN 9900 ' stopped in the middle
2240 LOCATE 24,1:PRINT SPACE$(79);: RETURN
2300 ' title line
2310 CLS : IF QUIET THEN RETURN ELSE COLOR 0,7 : PRINT
2320 PRINT USING LN$; "      Binary-to-hex-and-back-again conversion program for the IBM PC";
2330 PRINT USING LN$; "          Copyright (C) 1982 J. P. Garbers.  All rights reserved.";
2340 PRINT: COLOR 7,0 : RETURN
2400 ' convert cap$ to caps
2410 FOR I = 1 TO LEN(CAP$):E$=MID$(CAP$,I,1):IF E$>="a" AND E$<="z" THEN MID$(CAP$,I,1) = CHR$(ASC(E$)-32)
2420 NEXT I : RETURN
3000 '
3001 ' Main menu
3002 '
3020 NC = 5 : TITLE$="Main Menu"
3030 PRO$(1) = "Convert to COM or EXE format (make command file)"
3035 PRO$(2) = "Convert to HEX format (make transmittable file)"
3040 PRO$(3) = "List the files on your diskette"
3045 IF EXPERT THEN PRO$(4)="Turn expert mode OFF" ELSE PRO$(4) = "Turn expert mode ON"
3047 PRO$(5) = "Stop using this program"
3050 GOSUB 8000 : IF CHOICE = 69 THEN 9900
3060 ON CHOICE GOSUB 4000, 5000, 6000, 7000, 7500
3070 RETURN
4000 '
4001 ' Convert to binary format
4002 '
4010 GOSUB 2300
4020 PRINT : PRINT "Enter name of file to convert to executable format.  If you do not specify an"
4025 PRINT "extension, .HEX will be assumed."
4030 PRINT "-> "; : LINE INPUT INFILE$
4040 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+".HEX"
4050 OPEN "I", 1, INFILE$ ' open it up
4060 CAP$=LEFT$(INFILE$, INSTR(INFILE$,".")-1)+".COM":GOSUB 2400:OUTFILE$=CAP$
4070 PRINT "Enter full name of output file (press ENTER alone to use "; OUTFILE$;")"
4080 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
4085 CAP$=OUTFILE$:GOSUB 2400:OUTFILE$=CAP$
4090 LOCATE CSRLIN-1,4 : PRINT OUTFILE$
4100 OPEN "R", 2, OUTFILE$, 1 : FIELD 2, 1 AS O$
4110 NBYTES = 0 : CKSUM = 0 : PRINT : PRINT "Working";
4120 WHILE NOT EOF(1)
4125 LINE INPUT #1, IN$ : IF LEN(IN$)=0 THEN 4180
4130 IF ASC(IN$)=59 THEN GOSUB 4250: GOTO 4180 ' remark handler
4140 FOR I = 1 TO LEN(IN$) STEP 2 : BT = VAL("&H"+MID$(IN$,I,2))
4150 NBYTES = NBYTES + 1 : CKSUM = (CKSUM + BT) MOD 2048 : IF NBYTES MOD 32 = 0 THEN PRINT ".";
4160 LSET O$= CHR$(BT) : PUT 2 : NEXT I
4180 WEND
4190 CLOSE : PRINT : PRINT : PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
4200 GOSUB 2200 : RETURN
4250 ' handle imbedded remarks
4255 IF LEFT$(IN$, 9) <> ";checksum" THEN 4270
4258 PRINT:PRINT :PRINT "Checksum mark found... ";
4260 CK = VAL(RIGHT$(IN$,LEN(IN$)-9))
4265 IF CK = CKSUM THEN PRINT "Checksum verified." ELSE PRINT "Checksum incorrect."
4270 RETURN
4290 RETURN ' go back to the wend
5000 '
5001 ' Convert to hex format
5002 '
5010 GOSUB 2300
5020 PRINT : PRINT "Enter full name of file to convert to .HEX format, including the extension."
5030 PRINT "-> "; : LINE INPUT INFILE$
5040 OPEN "I", 1, INFILE$ : CLOSE 1 ' test to see if it's there
5045 OPEN "R", 1, INFILE$, 1 : FIELD 1, 1 AS I$
5050 NBYTES = 0 : CKSUM = 0
5060 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+"."
5070 CAP$=LEFT$(INFILE$,INSTR(INFILE$,".")-1)+".HEX":GOSUB 2400:OUTFILE$=CAP$
5080 PRINT "Enter full name of output HEX file (press ENTER alone to use "; OUTFILE$;")"
5090 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
5095 LOCATE CSRLIN-1, 4 : PRINT OUTFILE$
5100 OPEN "O", 2, OUTFILE$
5105 PRINT : PRINT "Working";
5110 GET 1
5120 WHILE NOT EOF(1)
5130 PRINT #2, RIGHT$("0"+HEX$(ASC(I$)), 2);
5135 CKSUM = (CKSUM + ASC(I$)) MOD 2048 ' keep checksum running
5140 NBYTES = NBYTES + 1 : IF NBYTES MOD 32 = 0 THEN PRINT #2,:PRINT ".";
5150 GET 1 : WEND  : PRINT #2,
5155 PRINT #2, ";checksum "; CKSUM
5160 CLOSE : PRINT :PRINT: PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
5990 GOSUB 2200 : RETURN
6000 '
6001 ' files listing
6002 '
6020 NC = 3 : TITLE$="Diskette file listing"
6030 PRO$(1) = "List files on drive A" : PRO$(2) = "List files on drive B"
6035 PRO$(3) = "Return to main menu"
6040 GOSUB 8000 : IF CHOICE = 69 OR CHOICE = 3 THEN RETURN
6050 GOSUB 2300 : PRINT
6060 INPUT "What sort of files (i.e. COM, EXE, HEX)?  Press ENTER alone for all files"; EXT$
6065 IF LEN(EXT$)=0 THEN EXT$="*" ELSE IF LEN(EXT$)>3 THEN EXT$=LEFT$(EXT$,3)
6070 CAP$=EXT$ : GOSUB 2400 : EXT$=CAP$
6075 PRINT: IF EXT$="*" THEN PRINT "Files"; ELSE PRINT ".";EXT$;" files:";
6080 PRINT " on drive "; CHR$(64+CHOICE); ":" : PRINT
6190 FILES CHR$(64+CHOICE)+":*."+EXT$
6200 GOSUB 2200 : GOTO 6000
7000 '
7001 ' swap expert mode
7002 '
7010 EXPERT = 1 - EXPERT
7020 LOCATE 23, 10:PRINT "Expert mode is now "; : IF EXPERT THEN PRINT "on." ELSE PRINT "off."
7030 FOR I = 1 TO 1000: NEXT I : RETURN
7500 '
7501 ' end of program
7502 '
7510 CLOSE : DONE = -1: RETURN
8000 '
8001 ' menu processor
8010 GOSUB 2300 : LOCATE 7, FNA(TITLE$) : COLOR 1,7 : PRINT TITLE$ : COLOR 7,0
8020 LONGEST = 0 : FOR I = 1 TO NC : IF LEN(PRO$(I))>LONGEST THEN LONGEST = LEN(PRO$(I))
8030 NEXT I : CHOICE = 0 : XP = 38-LONGEST/2
8040 FOR I = 1 TO NC : LOCATE 8+I*2, XP :IF CHOICE = I THEN COLOR 8,1 ELSE COLOR 7,0
8050 PRINT CHR$(48+I);". "; PRO$(I) : NEXT I : COLOR 7,0
8085 LOCATE 21, 5: IF EXPERT THEN PRINT "EXPERT MODE: Press "; ELSE PRINT "Press ";
8090 IF NC = 2 THEN PRINT "1 or 2 "; ELSE FOR I = 1 TO NC-1 : PRINT CHR$(48+I);", "; : NEXT I : PRINT "or"; NC;
8095 IF EXPERT THEN PRINT "to make your choice." ELSE PRINT "to light up your choice, then press ENTER."
8100 COLOR 7,0: CM$="" : WHILE CM$="" : CM$=INKEY$ : WEND
8105 IF ASC(CM$)=27 THEN CHOICE = 69 : RETURN
8110 CM = ASC(CM$) - ASC("0") :IF CM >=1 AND CM <=NC THEN CHOICE = CM
8115 IF (EXPERT OR CM$=CHR$(13)) AND (CHOICE>0) THEN RETURN ELSE 8040
9900 '
9901 ' closing frame
9902 '
9910 CLS
9920 LOCATE 12,8:PRINT "End of program.  Press the key marked 'F2' to run it again."
9925 KEY 2, "RUN"+CHR$(13) : KEY ON ' make sure that boast holds
9930 LOCATE 22,1 : DEF SEG = 64 : POKE 23, KSTATE 'recover former KB state
9940 END
10000 '
10001 ' error handling stuff
10002 '
10010 IF ERL = 6190 THEN LOCATE CSRLIN-2, 1 : PRINT "No ."; EXT$; " files on this diskette.": RESUME NEXT
10020 IF ERL = 5040 OR ERL = 4050 THEN PRINT : PRINT "Unable to open input file." : CLOSE : RESUME 2200
10030 IF ERL = 5100 OR ERL = 4100 THEN PRINT : PRINT "Unable to open output file." : CLOSE : RESUME 2200
10999 CLS : LOCATE 12, 10: PRINT "Unexpected error #"; ERR; "at line"; ERL: ON ERROR GOTO : END
```

## KYBD.BAS

```bas
100 'DIRECT PRINTER DRIVER.  THIS PROGRAM IS USED TO SEND CHARACTERS DIRECTLY
110 'TO THE PRINTER OUTPUT PORT ON THE IBM MONOCHROME BOARD OR PARALLEL PRINTER
120 'BOARD (or equivalent).  CONTROL CHARACTERS OR ESCAPE CODE SEQUENCES CAN BE
130 'SENT.  REMEMBER HOWEVER, THE PRINT BUFFER IS NOT DUMPED UNTIL IT IS FULL
140 '(set by the width command), OR A CARRIAGE RETURN, LINE FEED, OR OTHER
150 'APPROPRIATE CONTROL CHARACTER IS SENT.
160 '***
170 '***  Program by: Lee M. Buck, October, 1982. Arlington, Va.(703-527-5813)
180 '***  The subroutine that performs the direct output to the printer
190 '***  is from W. Fastie's  IBM  column in the Oct. 82 'Creative Computing '
200 '***
210 'THE PROGRAM WILL GET 'HUNG ' IF YOU SPECIFY THE INCORRECT PRINTER ADAPTER.
220 'IF THAT HAPPENS, ENTER Ctrl-Break AND START AGAIN.  TO QUIT THE PROGRAM
230 'ENTER Ctrl-Break.
240 CLEAR:CLOSE:CLS:DEFINT A-Z
250 DATAIO=&H378 : PRNTLATCH=&H37A : STATUSREG=&H379
260 LOCATE 5,1: PRINT "IS YOUR PRINTER ATTACHED TO THE IBM MONOCHROME"
270 PRINT "DISPLAY BOARD OR 'OTHER ' ?  PRESS  M  OR  O : ";
280 Q$=INKEY$: IF Q$="" THEN 280
290 IF Q$="M" OR Q$="m" OR Q$="O" OR Q$="o" THEN PRINT Q$ ELSE BEEP: GOTO 260
300 IF Q$<>"M" AND Q$<>"m" THEN 320
310 DATAIO=&H3BC : PRNTLATCH=&H3BE : STATUSREG=&H3BD
320 WIDTH "LPT1:",80
330 LOCATE 10,1:PRINT"PRESS KEY TO SEND TO PRINTER (including control keys) ";
340 DEF SEG: POKE 106,0
350 Q$=INKEY$: IF Q$="" THEN 350 ELSE PRINT Q$;
360 LNTH=LEN(Q$): C=ASC(MID$(Q$,LNTH))
370 GOSUB 390
380 LOCATE 10,1: PRINT SPACE$(79);:GOTO 330
390 OUT PRNTLATCH, &H6
400 IF INP(STATUSREG) <> &HDF THEN 400
410 OUT DATAIO, C
420 OUT PRNTLATCH, &H3F
430 IF INP(STATUSREG) <> &HDF THEN 430
440 RETURN
```

## LISTER.BAS

```bas
10 '  LISTER ,to list BASIC programs saved on disk in the ASCII format.
20 '
30 '  SOURCE: "Creative Computing" -- Sept 82 Issue -- pg. 180-185
40 '           Paul F Doering
50 '
60 '  MODIFIED: Disk file I/O and other improvements by Lee Anderson 9/01/82.
70 '
80 ' File names that do not have a . qualifier will be appended with .BAS
90 ' BASIC/BASICA programs must have been saved in the ,A format.
100 '
110 ' The file name field has special processing for indicators saying that
120 ' the file name points to a list of files to be listed and if selected
130 ' pages are to be listed.
140 '
150 ' Special processing for file name.
160 ' 1. File name only - process it to the printer.
170 ' 2. File name preceded by the char <.
180 '    The supplied file name contains a list of files to be listed.
190 ' 3. First char on line is a *. Process the following characters for
200 '    a starting page (p1) and an ending page (p2) to be listed.
210 '    EXAMPLE: *5-8  FILE WILL LIST PAGES 5 THRU 8 OF THE FILE.
220 '    A blank character must separate the file name from the page # info.
230 ON ERROR GOTO 0
240 SCREEN 0: KEY OFF: CLS: DEFINT A-Z: WIDTH 80
250 DIM PREFER$(20)
260 DIM FKEY$(12), MONTH$(12)
270 FOR J = 1 TO 12: READ MONTH$(J): NEXT J
280 DATA Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
290 TODAY$ = MID$(DATE$,4,3) + MONTH$(VAL(MID$(DATE$,1,2))) + "-" + MID$(DATE$,9,2)
300 '  Set initial parameters.
310 L.MGN = 8: R.MGN = 75: B.MGN = 8: LN.SPA = 1: PG.LEN = 66: PG.WID = 80
320 DBL.WID = 20
330 FLNM$ = "": HEADER$ = "": INDENT$ = SPACE$(8)
340 '  Initialize the printer, complain if it's off line.
350 ON ERROR GOTO 2040
360 LPRINT CHR$(24); CHR$(27); CHR$(18);: WIDTH "lpt1:",80
370 ON ERROR GOTO 0
380 'Define F-Keys
390 KEY 1,"Lt margin at :"
400 KEY 2,"Rt margin at :"
410 KEY 3,"Bottom blanks:"
420 KEY 4,"Width (max's):"
430 KEY 5,"Single spaced"+CHR$(13)
440 KEY 6,"Double spaced"+CHR$(13)
450 KEY 7,"Program Name: "
460 KEY 8,"Header: "
470 KEY 9,"Review"+CHR$(13)
480 KEY 10,"Begin"+ CHR$(13)
490 KEY ON: LOCATE 23,1
500 '  Call attention to F-Keys.
510 ARROWS$ = STRING$(20,"-")
520 PRINT ARROWS$;: COLOR 0,7
530 PRINT "Use F-Keys to set listing format ";: COLOR 7,0
540 PRINT ARROWS$
550 FOR I= 0 TO 11
560 READ FKEY$(I)
570 NEXT I
580 DATA Lt,Rt,Bo,Wi,Si,Do,Pr,He,Re,Be,xx,XX
590 'Set up list of prefered breakpoints.
600 FOR IP = 0 TO 20
610 READ Z$
620 IF Z$ <> "END" THEN PREFER$(IP) = Z$: NEXT IP
630 IP = IP-1
640 DATA " ELSE"," THEN",": "," PRINT"
650 DATA " IF "," '"," OR "," AND "," REM",";"
660 DATA "="," ","+","$",",", END
670 '  Loop for adjusting runtime parameters
680 LINE INPUT Z$
690 FOR I = 0 TO 11
700 IF LEFT$(Z$,2) = FKEY$(I) GOTO 720 ELSE NEXT I
710 GOTO 680
720 ON I+1 GOTO 740,750,760,870,800,810,830,780,990,1100,2270,2270
730 '  Margin - setting routines.
740 GOSUB 2210: L.MGN = NUMBA: GOTO 680
750 GOSUB 2210: R.MGN = NUMBA: GOTO 680
760 GOSUB 2210: B.MGN = NUMBA: GOTO 680
770 '  Establish page header.
780 HEADER$ = ", " + MID$(Z$,9): GOTO 680
790 '  Single or double spaced out.put
800 LN.SPA = 1: GOTO 680
810 LN.SPA = 2: GOTO 680
820 '  Get name of program to be listed.
830 FLNM$ = MID$(Z$,15)
840 IF LEFT$(FLNM$,1) = " " THEN FLNM$ = MID$(FLNM$,2): GOTO 840
850 GOTO 680
860 ' Pass man-page-width parameter to the MX80 printer.
870 GOSUB 2210
880 IF NUMBA <= 132 GOTO 910
890 PRINT "Maxium page width is limited to 132 characters"
900 GOTO 680
910 IF NUMBA > 80 AND NUMBA < 133 THEN LPRINT CHR$(20); CHR$(15); :WIDTH "lpt1:",132 ELSE WIDTH "lpt1:",80
920 IF NUMBA > 66 AND NUMBA < 81 THEN LPRINT CHR$(18); CHR$(20);
930 DBL.WID = 20
940 IF NUMBA > 40 AND NUMBA < 67 THEN LPRINT CHR$(15);: DBL.WID = 14
950 IF NUMBA < 41 THEN LPRINT CHR$(18);: DBL.WID = 14
960 PG.WID = NUMBA
970 GOTO 680
980 '  Display the current parameters.
990 PRINT: PRINT "Left margin at";L.MGN
1000 PRINT "Right margin at"; R.MGN
1010 PRINT MID$(STR$(B.MGN),2);" blank lines at page bottom"
1020 PRINT "Maximum page width is";PG.WID
1030 IF LN.SPA = 2 THEN PRINT "Double"; ELSE PRINT "Single";
1040 PRINT " line spacing"
1050 PRINT "Program name: ": IF FLNM$ = "" THEN GOSUB 2250 ELSE PRINT FLNM$
1060 PRINT "Header: ": IF HEADER$ = "" THEN GOSUB 2250 ELSE PRINT HEADER$
1070 PRINT
1080 GOTO 680
1090 '  Check parameter before actually trying to list the program.
1100 IF FLNM$ <> "" GOTO 1140
1110 INPUT "Program name: ",FLNM$
1120 IF LEFT$(FLNM$,1) = " " THEN FLNM$ = MID$(FLNM$,2): GOTO 1120
1130 ' Special processing for file name.
1140 P1% = 0
1150 P2% = 9999!
1160 IF MID$(FLNM$,1,1) <> "*" GOTO 1230
1170 N% = INSTR(FLNM$," ")
1180 N2% = INSTR(FLNM$,"-")
1190 IF N% < N2% THEN N2% = 0
1200 IF N2% = 0 OR N2%+1 = N% THEN NC% = N% - 2: P2% = 9999 ELSE NC% = N2%-2: P2% = VAL(MID$(FLNM$,N2%+1,N%-N2%-1))
1210 P1% = VAL(MID$(FLNM$,2,NC%))
1220 FLNM$ = MID$(FLNM$,N%+1)
1230 IF LEFT$(FLNM$,1) = " " THEN FLNM$ = MID$(FLNM$,2): GOTO 1230
1240 IF LEFT$(FLNM$,1) = "<" THEN CMF$ = MID$(FLNM$,2): CMFSW = 1 ELSE CMFSW = 0: GOTO 1330
1250 '  File to be listed are in a file.
1260 ON ERROR GOTO 2100
1270 OPEN CMF$ FOR INPUT AS #2
1280 ON ERROR GOTO 0
1290 IF EOF(2) GOTO 2290
1300 LINE INPUT #2, FLNM$
1310 PRINT "Processing file "; FLNM$
1320 ' Check a few more parameters.
1330 LN.LEN = R.MGN - L.MGN + 1
1340 N = INSTR(FLNM$,".")
1350 IF N = 0 THEN FLNM$ = FLNM$ + ".BAS"
1360 TTL$ = SPACE$(L.MGN) + FLNM$ + HEADER$ + ", " + TODAY$+ "  " + LEFT$(TIME$,5)
1370 J = LN.LEN - LEN(TTL$) - 10
1380 IF J => 1 GOTO 1420
1390 PRINT "You are trying to fit a"; LEN(TTL$)+10; " char title into a"; LN.LEN; "char line."
1400 PRINT "Make adjustments in the margins or header."
1410 GOTO 1450
1420 IF L.MGN<1 OR L.MGN>R.MGN-20 OR R.MGN<L.MGN+20 OR R.MGN>PG.WID THEN PRINT "Page width, Rt or Lt margin conflicts.";: GOTO 1450
1430 IF B.MGN>5 GOTO 1470
1440 PRINT "Bottom margin less than 5."
1450 BEEP: PRINT " CAN'T BEGIN. TRY AGAIN.": GOTO 990
1460 '  Open the disc file, complain if not possible to do it.
1470 ON ERROR GOTO 2100
1480 OPEN FLNM$ FOR INPUT AS #1
1490 ON ERROR GOTO 2070
1500 '  Title the first page with the header and the date.
1510 PG.NUM = 1: IF PG.NUM < P1% GOTO 1560
1520 LPRINT
1530 LPRINT CHR$(DBL.WID); TTL$
1540 LPRINT: LPRINT
1550 '  Format the header to appear at upper right on later pages.
1560 TTL$ = SPACE$(J)+TTL$
1570 '  Get the next BASIC line, quit if end of file.
1580 LN.CNT = 4
1590 IF EOF(1) GOTO 2270
1600 LINE INPUT #1, IN$: IF IN$ = "" GOTO 1600
1610 '  Right-justify the line number.
1620 IN$ = SPACE$(6-INSTR(IN$," "))+IN$
1630 ' Break the BASIC line into printer lines.
1640 FOR J = 0 TO 9
1650 '  Lets look to see if blank line needed before comment statement.
1660 IF MID$(IN$,7,1) = "'" THEN CCMT = 1 ELSE CCMT = 0: GOTO 1680
1670 IF PCMT <>1 THEN LN$(J) = "": J = J + 1
1680 PCMT = CCMT
1690 '  It's easy if the whole line fits at once.
1700 IF LEN(IN$) <= LN.LEN THEN LN$(J) = IN$: GOTO 1860
1710 '  Else, check for preferred breakpoints.
1720 FOR K = 0 TO IP
1730 SITE = 0: K$ = PREFER$(K)
1740 HI.SITE = SITE: IF SITE < 9 THEN SITE = 9
1750 SITE = INSTR(SITE+1,IN$,K$)
1760 IF SITE > 0 AND SITE <= LN.LEN GOTO 1740
1770 IF HI.SITE = 0 THEN NEXT K
1780 IF HI.SITE = 0 THEN HI.SITE = LN.LEN
1790 '  HI.SITE mow points to the rightmost, best breakpoint.
1800 '  Split the line there and indent all but the first one.
1810 LN$(J) = LEFT$(IN$,HI.SITE)
1820 IN$ = MID$(IN$,HI.SITE+1)
1830 IN$ = INDENT$+IN$
1840 NEXT J
1850 '  Will the pack of printer lines fit on this page?
1860 IF LN.CNT < PG.LEN - B.MGN - LN.SPA*(J+1) GOTO 1960
1870 '  No, so begin a new one, complete with header and page number.
1880 PG.NUM = PG.NUM + 1
1890 LN.CNT = 4
1900 IF PG.NUM > P2% GOTO 2270
1910 IF PG.NUM < P1% GOTO 2010
1920 LPRINT CHR$(12)
1930 LPRINT CHR$(DBL.WID); TTL$; ", PAGE";PG.NUM
1940 LPRINT: LN.CNT = 4
1950 '  Everything is guaranteed to fit. Print it all.
1960 IF PG.NUM < P1% GOTO 2010
1970 FOR L = 0 TO J: LPRINT CHR$(DBL.WID); TAB(L.MGN);LN$(L)
1980 IF LN.SPA = 2 THEN LPRINT
1990 NEXT L
2000 '  Update the line count for this page, and cycle again.
2010 LN.CNT = LN.CNT+(J+1)*LN.SPA
2020 GOTO 1590
2030 '  The operator-alert for an off-line printer:
2040 PRINT: BEEP: PRINT "The line printer isn't ready. Check it....": PRINT
2050 RESUME 360
2060 '  Printer device timeout error.
2070 IF ERR = 24 THEN RESUME
2080 GOTO 2190
2090 '  The operator-alert for a lack of a ready disc:
2100 IF ERR <> 53 GOTO 2150
2110 BEEP: PRINT "*** File ";
2120 IF ERL = 1270 THEN PRINT CMF$; ELSE PRINT FLNM$;
2130 PRINT " not found. Try again."
2140 IF CMFSW = 1 THEN RESUME 1290 ELSE RESUME 680
2150 IF ERR = 67 THEN BEEP: PRINT "*** Too many files.": RESUME 680
2160 IF ERR = 70 THEN BEEP: PRINT "*** Disc is write protected. Try again.": RESUME 680
2170 IF ERR = 71 THEN BEEP: PRINT "*** Check disc drive. It's not ready.": RESUME 1480
2180 IF ERR = 72 THEN BEEP: PRINT "*** Disc media error. Try again.": RESUME 680
2190 PRINT "ERR =";ERR; " ERL =";ERL; " Cause unknown.": BEEP: BEEP: STOP
2200 '  Subroutine to decode a numeric parameter input.
2210 NUMBA = VAL(MID$(Z$,15))
2220 IF NUMBA = 0 THEN BEEP: PRINT "<< NUMBER REQUIRED >>"
2230 RETURN
2240 '  Soubroutine to note the lack of a file name or header.
2250 COLOR 0,7: PRINT " NONE SPECIFIED ";: COLOR 7,0: PRINT: RETURN
2260 '  End of file on the file being listed.
2270 CLOSE #1:LPRINT CHR$(12): IF CMFSW = 1 GOTO 1290
2280 '  Orderly exit. reset the printer & F-Keys, then exit.
2290 LPRINT CHR$(18); CHR$(20): WIDTH "lpt1:",80: BEEP: CLS
2300 KEY OFF
2310 KEY 1,"List "
2320 KEY 2,"Run"+CHR$(13)
2330 KEY 3,"Load"+CHR$(34)
2340 KEY 4,"Save"+CHR$(34)
2350 KEY 5,"Edit "
2360 KEY 6,CHR$(34)+",a"
2370 KEY 7,"Lprint "
2380 KEY 8,"Cls"+CHR$(13)
2390 KEY 9,"System"+CHR$(13)
2400 KEY 10,"Screen"+CHR$(13)
2410 KEY ON
2420 ON ERROR GOTO 0
2430 END
```

## NEWKEY.BAS

```bas
10 KEY OFF
20 KEY 1,"List "
30 KEY 2,"Run"+CHR$(13)
40 KEY 3,"Load"+CHR$(34)
50 KEY 4,"Save"+CHR$(34)
60 KEY 5,"Edit "
70 KEY 6,CHR$(34)+",a"
80 KEY 7,"Lprint "
90 KEY 8,"Cls"+CHR$(13)
100 KEY 9,"System"+CHR$(13)
110 KEY 10,"Screen"+CHR$(13)
120 KEY ON
130 CLS:NEW
```

## STARTREK.BAS

```bas
10 REM ****INSTRUCTIONS  FOR SUPER STAR TREK FROM CREATIVE COMPUTING
20 REM ****PUT ON IBM PC BY STEVENS ON 2-10-82
30 CLS:LOCATE 9,1
40 PRINT TAB(10);"*************************************"
50 PRINT TAB(10);"*                                   *"
60 PRINT TAB(10);"*      ** SUPER STAR TREK **        *"
70 PRINT TAB(10);"*                                   *"
80 PRINT TAB(10);"*************************************"
90 FOR I=1 TO 8: PRINT:NEXT I
100 INPUT "DO YOU NEED INSTRUCTIONS (Y/N)"; K$: IF K$<>"Y" AND K$ <>"y" THEN 1450
110 PRINT
120 PRINT :PRINT
130 IF INP(1)=13 THEN 130
140 POKE 1229,2
150 POKE 1237,3
160 CLS:PRINT"     INSTRUCTIONS FOR `SUPER STAR TREK'"
170 PRINT
180 PRINT"1. WHEN YOU SEE \COMMAND ?\ PRINTED, ENTER ONE OF THE LEGAL"
190 PRINT"     COMMANDS (NAV,SRS,LRS,PHA,TOR,SHE,DAM,COM, OR XXX)."
200 PRINT "2. IF YOU SHOULD TYPE IN AN ILLEGAL COMMAND, YOU'LL GET A SHORT"
210 PRINT "    LIST OF THE LEGAL COMMANDS PRINTED OUT."
220 PRINT"3. SOME COMMANDS REQUIRE YOU TO ENTER DATA (FOR EXAMPLE, THE"
230 PRINT"     `NAV' COMMAND COMES BACK WITH `COURSE (1-9) ?'.)  IF YOU"
240 PRINT"     TYPE IN ILLEGAL DATA (LIKE NEGATIVE NUMBERS, THAT COMMAND"
250 PRINT"     WILL BE ABORTED"
260 PRINT
270 PRINT"     THE GALAXY IS DIVIDED INTO AN 8 X 8 QUADRANT GRID,"
280 PRINT"AND EACH QUADRANT IS FURTHER DIVIDED INTO AN 8 X 8 SECTOR GRID."
290 PRINT
300 PRINT"     YOU WILL BE ASSIGNED A STARTING POINT SOMEWHERE IN THE"
310 PRINT"GALAXY TO BEGIN A TOUR OF DUTY AS COMMANDER OF THE STARSHIP"
320 PRINT"\ENTERPRISE\; YOUR MISSION:  TO SEEK AND DESTROY THE FLEET OF"
330 PRINT"KLINGON WARSHIPS WHICH ARE MENACING THE UNITED FEDERATION OF"
340 PRINT"PLANETS."
350 PRINT : PRINT "***TO CONTINUE WITH THE INSTRUCTIONS HIT <ENTER>."
360 GOSUB 10500:PRINT
370 PRINT"     YOU HAVE THE FOLLOWING COMMANDS AVAILABLE TO YOU AS CAPTAIN"
380 PRINT"OF THE STARSHIP ENTERPRISE:"
390 PRINT
400 PRINT"\NAV\ COMMAND = WARP ENGINE CONTROL --"
410 PRINT"     COURSE IS IN A CIRCULAR NUMERICAL      4  3  2"
420 PRINT"     VECTOR ARRANGEMENT AS SHOWN             . . ."
430 PRINT"     INTEGER AND REAL VALUES MAY BE           ..."
440 PRINT"     USED.  (THUS COURSE 1.5 IS HALF-     5 ---*--- 1"
450 PRINT"     WAY BETWEEN 1 AND 2                      ..."
460 PRINT"                                             . . ."
470 PRINT"     VALUES MAY APPROACH 9.0, WHICH         6  7  8"
480 PRINT"     ITSELF IS EQUIVALENT TO 1.0
490 PRINT"                                            COURSE"
500 PRINT"     ONE WARP FACTOR IS THE SIZE OF "
510 PRINT"     ONE QUADRANT.  THEREFORE, TO GET"
520 PRINT"     FROM QUADRANT 6,5 TO 5,5, YOU WOULD"
530 PRINT"     USE COURSE 3, WARP FACTOR 1.
540 PRINT
550 PRINT: PRINT : PRINT "***TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
560 GOSUB 10500:PRINT :PRINT:PRINT :PRINT
570 PRINT :PRINT :PRINT
580 PRINT"\SRS\ COMMAND = SHORT RANGE SENSOR SCAN"
590 PRINT
600 PRINT"     SYMBOLOGY ON YOR SENSOR SCREEN IS AS FOLLOWS:"
610 PRINT"        <*> = YOUR STARSHIP'S POSITION"
620 PRINT"        +K+ = KLINGON BATTLE CRUISER"
630 PRINT"        >!< = FEDERATION STARBASE ( REFUEL/REPAIR/RE-ARM HERE!)"
640 PRINT"         *  = STAR"
650 PRINT
660 PRINT"     A CONDENSED `STATUS REPORT' WILL ALSO BE PRESENTED."
670 PRINT
680 PRINT "\LRS\ COMMAND = LONG RANGE SENSOR SCAN"
690 PRINT"     SHOWS CONDITIONS IN SPACE FOR ONE QUADRANT ON EACH SIDE"
700 PRINT"     OF THE ENTERPRISE (WHICH IS IN THE MIDDLE OF THE SCAN)"
710 PRINT
720 PRINT"     THE SCAN IS CODED IN THE FORM \###\, WHERE THE UNITS DIGIT"
730 PRINT"     IS THE NUMBER OF STARS, THE TENS DIGIT IS THE NUMBER OF"
740 PRINT"     STARBASES, AND THE HUNDREDS DIGIT IS THE NUMBER OF"
750 PRINT"     KLINGONS."
760 PRINT
770 PRINT"     EXAMPLE - 207 = 2 KLINGONS, NO STARBASES,  7 STARS."
780 PRINT "***TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
790 GOSUB 10500:PRINT :PRINT
800 PRINT"\PHA\ COMMAND = PHASER CONTROL."
810 PRINT"     ALLOWS YOU TO DESTROY THE KLINGON BATTLE CRUISERS BY "
820 PRINT"     ZAPPING THEM WITH SUITABLY LARGE UNITS OF ENERGY TO"
830 PRINT"     DEPLETE THEIR SHIELD POWER.  REMEMBER, KLINGONS HAVE"
840 PRINT"     PHASERS, TOO!)"
850 PRINT
860 PRINT"\TOR\ COMMAND = PHOTON TORPEDO CONTROL"
870 PRINT"     TORPEDO COURSE IS THE SAME AS USED IN WARP ENGINE CONTROL"
880 PRINT"     IF YOU HIT THE KLINGON VESSEL, HE IS DESTROYED AND"
890 PRINT"     CANNOT FIRE BACK AT YOU.  IF YOU MISS, YOU ARE SUBJECT TO"
900 PRINT"     HIS PHASER FIRE.  IN EITHER CASE, YOU ARE ALSO SUBJECT TO "
910 PRINT"     THE PHASER FIRE OF ALL OTHER KLINONS IN THE QUADRANT."
920 PRINT
930 PRINT"     THE LIBRARY-COMPUTER (\COM\ COMMAND) HAS AN OPTION TO"
940 PRINT"     COMPUTE TORPEDO TRAJECTORY FOR YOU (OPTION 2)"
950 PRINT
960 PRINT :PRINT:PRINT: PRINT "TO CONTINUE WITH THE PROGRAM, HIT <ENTER>."
970 GOSUB 10500
980 PRINT :PRINT :PRINT
990 PRINT :PRINT :PRINT :PRINT
1000 PRINT"\SHE\ COMMAND = SHIELD CONTROL"
1010 PRINT"     DEFINES THE NUMBER OF ENERGY UNITS TO BE ASSIGNED TO THE"
1020 PRINT"     SHIELDS.  ENERGY IS TAKEN FROM TOTAL SHIP'S ENERGY.  NOTE"
1030 PRINT"     THAT THE STATUS DISPLAY TOTAL ENERGY INCLUDES SHIELD ENERGY"
1040 PRINT
1050 PRINT"\DAM\ COMMAND = DAMAGE CONTROL REPORT"
1060 PRINT"     GIVES THE STATE OF REPAIR OF ALL DEVICES.  WHERE A NEGATIVE"
1070 PRINT"     `STATE OF REPAIR' SHOWS THAT THE DEVICE IS TEMPORARILY"
1080 PRINT"     DAMAGED."
1090 PRINT :PRINT :PRINT
1100 PRINT: PRINT "TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
1110 GOSUB 10500
1120 PRINT
1130 PRINT"\COM\ COMMAND = LIBRARY-COMPUTER"
1140 PRINT"     THE LIBRARY-COMPUTER CONTAINS SIX OPTIONS:"
1150 PRINT"     OPTION 0 = CUMULATIVE GALACTIC RECORD"
1160 PRINT"        THIS OPTION SHOWS COMPUTER MEMORY OF THE RESULTS OF A LL"
1170 PRINT"        PREVIOUS SHORT AND LONG RANGE SENSOR SCANS"
1180 PRINT"     OPTION 1 = STATUS REPORT"
1190 PRINT"        THIS OPTION SHOWS THE NUMBER OF KLINGONS, STARDATES,"
1200 PRINT"        AND STARBASES REMAINING IN THE GAME."
1210 PRINT"     OPTION 2 = PHOTON TORPEDO DATA"
1220 PRINT"        WHICH GIVES DIRECTION AND DISTANCE FROM THE ENTERPRISE"
1230 PRINT"        TO ALL KLINGONS IN YOUR QUADRANT"
1240 PRINT"     OPTION 3 = STARBASE NAV DATA"
1250 PRINT"        THIS OPTION GIVES DIRECTION AND DISTANCE TO ANY"
1260 PRINT"        STARBASE WITHIN YOU QUADRANT"
1270 PRINT :PRINT :PRINT :PRINT
1280 PRINT "TO CONTINUE WITH THE INSTRUCTIONS, HIT <ENTER>."
1290 PRINT
1300 GOSUB 10500 : PRINT :PRINT
1310 PRINT "CONTINUATION OF AVAILABLE COMPUTER OPTIONS---" : PRINT : PRINT
1320 PRINT"     OPTION 4 = DIRECTION/DISTANCE CALCULATOR"
1330 PRINT"        THIS OPTION ALLOWS YOU TO ENTER COORDINATES FOR"
1340 PRINT"        DIRECTION/DISTANCE CALCULATIONS"
1350 PRINT"     OPTION 5 = GALACTIC /REGION NAME/ MAP"
1360 PRINT"        THIS OPTION PRINTS THE NAMES OF THE SIXTEEN MAJOR"
1370 PRINT"        GALACTIC REGIONS REFERRED TO IN THE GAME."
1380 POKE 1229,0:POKE 1237,1
1390 IF INP(1)=13 THEN 1390
1400 PRINT :PRINT "CONGRATULATIONS, YOU HAVE SUCCESSFULLY GRADUATED FROM STARFLEET ACADEMY."
1410 PRINT "YOU ARE NOW READY TO ASSUME THE HELM OF THE ENTERPRISE." :PRINT
1420 PRINT "TO OPEN COMMUNICATIONS WITH STARFLEET, INDICATING THAT YOU"
1430 PRINT "ARE NOW READY TO BEGIN YOUR JOURNEY, SIMPLY HIT <ENTER>."
1440 GOSUB 10500:PRINT
1450 REM **** SUPER STAR TREK - MAY 16, 1978 - REQUIRES 24K MEMORY ****
1460 REM
1470 REM ****        **** STAR TREK ****        ****
1480 REM **** SIMULATION OF A MISSION OF THE STARSHIP ENTERPRISE,
1490 REM **** AS SEEN ON THE STAR TREK TV SHOW.
1600 CLS
1610 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
1620 PRINT"                                    ,------*------,"
1630 PRINT "                    ,-------------   `---  ------'"
1640 PRINT "                     `-------- --'      / /"
1650 PRINT"                         ,---' `-------/ /--,"
1660 PRINT "                          `----------------'":PRINT
1670 PRINT"                    THE USS ENTERPRISE --- NCC-1701"
1680 PRINT:PRINT:PRINT:PRINT:PRINT
1690 PRINT :PRINT
1710 Z$="                         "
1720 DIM G(8,8),C(9,2),K(3,3),N(3),Z(8,8),D(8)
1730 RANDOMIZE VAL(RIGHT$(TIME$,2))
1770 PRINT :PRINT :PRINT
1780 T=INT(RND(1)*20+20)*100:T0=T:T9=25+INT(RND(1)*10):D0=0:E=3000:E0=E
1790 P=10:P0=P:S9=200:S=0:B9=0:K9=0:X$="":X0$=" IS "
1800 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
1810 DEF FNR(R)=INT(RND(R)*7.98+1.01)
1820 REM **************** INITIALIZE ENTERPRISE'S POSITION ****************
1830 Q1=FNR(1):Q2=FNR(1):S1=FNR(1):S2=FNR(1)
1840 FOR I=1 TO 9:C(I,1)=0:C(I,2)=0:NEXT I
1850 C(3,1)=-1:C(2,1)=-1:C(4,1)=-1:C(4,2)=-1:C(5,2)=-1:C(6,2)=-1
1860 C(1,2)=1:C(2,2)=1:C(6,1)=1:C(7,1)=1:C(8,1)=1:C(8,2)=1:C(9,2)=1
1870 FOR I=1 TO 8:D(I)=0: NEXT I
1880 A1$="NAVSRSLRSPHATORSHEDAMCOMXXX"
1890 REM ************** SETUP WHAT EXISTS IN GALAXY . . . ******************
1900 REM ************  K3= # KLINGONS  B3= # STARBASES  S3= # STARS ********
1910 FOR I=1 TO 8: FOR J=1 TO 8:K3=0:Z(I,J)=0:R1=RND(1)
1920 IF R1>0.9799999 THEN K3=3:K9=K9+3:GOTO 1950
1930 IF R1>0.95 THEN K3=2:K9=K9+2:GOTO 1950
1940 IF R1>0.8 THEN K3=1:K9=K9+1
1950 B3=0:IF RND(1)>0.96 THEN B3=1:B9=B9+1
1960 G(I,J)=K3*100+B3*10+FNR(1): NEXT J: NEXT I: IF K9>T9 THEN T9=K9+1
1970 IF B9<>0 THEN 2000
1980 IF G(Q1,Q2)<200 THEN G(Q1,Q2)=G(Q1,Q2)+100:K9=K9+1
1990 B9=0:G(Q1,Q2)=G(Q1,Q2)+10:Q1=FNR(1):Q2=FNR(1)
2000 K7=K9:IF B9<>1 THEN X$="S":X0$=" ARE "
2010 CLS:PRINT"YOUR ORDERS, SHOULD YOU ACCEPT THIS MISSION, ARE  AS FOLLOWS:"
2020 PRINT"     DESTROY THE";K9;"KLINGON WARSHIPS WHICH HAVE INVADED"
2030 PRINT"   THE GALAXY BEFORE THEY CAN ATTACK FEDERATION HEADQUARTERS"
2040 PRINT"   ON STARDATE";T0+T9;"  THIS GIVES YOU";T9;"DAYS.  THERE";X0$
2050 PRINT"  ";B9;"STARBASE";X$;" IN THE GALAXY FOR RESUPPLYING YOUR SHIP"
2060 PRINT:PRINT"HIT RETURN KEY WHEN READY TO ACCEPT COMMAND"
2070 I=RND(1)
2080 REM *********** HERE ANY TIME NEW QUADRANT ENTERED ******************
2090 Z4=Q1:Z5=Q2:K3=0:B3=0:S3=0:G5=0:D4=0.5*RND(1):Z(Q1,Q2)=G(Q1,Q2)
2100 IF Q1<1 OR Q1>8 OR Q2<1 OR Q2>8 THEN 2200
2110 GOSUB 5690 : PRINT : IF  T0<>T THEN 2140
2120 PRINT "YOUR MISSION BEGINS WITH YOUR STARSHIP LOCATED"
2130 PRINT "IN THE GALACTIC QUADRANT, `";G2$;"'.":GOTO 2150
2140 PRINT "NOW ENTERING ";G2$;" QUADRANT . . ."
2150 PRINT : K3=INT(G(Q1,Q2)*0.01):B3=INT(G(Q1,Q2)*0.1)-10*K3
2160 S3=G(Q1,Q2)-100*K3-10*B3:IF K3=0 THEN 2190
2170 PRINT"COMBAT AREA      CONDITION RED": BEEP :IF S>200 THEN 2190
2180 PRINT "   SHIELDS DANGEROUSLY LOW" : BEEP
2190 FOR I=1 TO 3:K(I,1)=0:K(I,2)=0:NEXT I
2200 FOR I=1 TO 3:K(I,3)=0: NEXT I:Q$=Z$+Z$+Z$+Z$+Z$+Z$+Z$+LEFT$(Z$,17)
2210 REM *** POSITON ENTERPRISE IN QUADRANT, THEN PLACE "K3" KLINGONS, & ***
2220 REM ***** "B3" STARBASES, & "S3" STARS ELSEWHERE. **************
2230 A$="<*>":Z1=S1:Z2=S2:GOSUB 5460:IF K3<1 THEN 2260
2240 FOR I=1 TO K3: GOSUB 5430:A$="+K+":Z1=R1:Z2=R2
2250 GOSUB 5460:K(I,1)=R1:K(I,2)=R2:K(I,3)=S9*(0.5+RND(1)): NEXT I
2260 IF B3<1 THEN 2280
2270 GOSUB 5430:A$=">!<":Z1=R1:B4=R1:Z2=R2:B5=R2:GOSUB 5460
2280 FOR I=1 TO S3: GOSUB 5430:A$=" * ":Z1=R1:Z2=R2: GOSUB 5460: NEXT I
2290 GOSUB 4470
2300 IF S+E>10 THEN IF E>10 OR D(7)=0 THEN 2370
2310 PRINT:PRINT "** FATAL ERROR ** YOU'VE JUST STRANDED YOUR SHIP IN "
2320 PRINT "SPACE":PRINT "YOU HAVE INSUFFICIENT MANEUVERING ENERGY,";
2330 PRINT " AND SHIELD CONTROL":PRINT"IS PRESENTLY INCAPABLE OF CROSS";
2340 PRINT"-CIRCUITING TO ENGINE ROOM!!"  :SOUND 75,4 : SOUND 44,6
2350 PRINT :PRINT "LT.UHURA REPORTS ALL RADIO FREQUENCIES ARE INOPERABLE!!"
2360 GOTO 4330
2370 INPUT "COMMAND";A$
2380 FOR I=1 TO 9:IF LEFT$(A$,3)<>MID$(A1$,3*I-2,3) THEN 2400
2390 ON I GOTO 2510,2290,3290,3380,3600,3960,4050,4730,4360
2400 NEXT I:PRINT "ENTER ONE OF THE FOLLOWING:"
2410 PRINT"   NAV  (TO SET COURSE)"
2420 PRINT"   SRS  (FOR SHORT RANGE SENSOR SCAN)"
2430 PRINT"   LRS  (FOR LONG RANGE SENSOR SCAN)"
2440 PRINT"   PHA  (TO FIRE PHASERS)"
2450 PRINT "   TOR  (TO FIRE PHOTON TORPEDOES)"
2460 PRINT"   SHE  (TO RAISE OR LOWER SHIELDS)"
2470 PRINT"   DAM  (FOR DAMAGE CONTROL REPORTS)"
2480 PRINT"   COM  (TO CALL ON LIBRARY-COMPUTER)"
2490 PRINT"   XXX  (TO RESIGN YOUR COMMAND)":PRINT:GOTO 2300
2500 REM ************ COURSE CONTROL BEGINS HERE **********************
2510 INPUT "COURSE (0-9)";C1: IF C1=9 THEN C1=1
2520 IF C1>=1 AND C1<9 THEN 2550
2530 PRINT "   LT. SULU REPORTS, 'INCORRECT COURSE DATA, SIR!'"
2540 PRINT "WOULD YOU LIKE TO TRY ANOTHER COMMAND, SIR?": GOTO 2300
2550 X$="8": IF D(1)<0 THEN X$="0.2"
2560 PRINT "WARP FACTOR  (0-";X$;")";: INPUT W1: IF D(1)<0 AND W1>0.2 THEN 2630
2570 IF W1>0 AND W1<8 THEN 2640
2580 IF W1=0 THEN 2300
2590 PRINT "    CHIEF ENGINEER SCOTT REPORTS `THE ENGINES WON'T TAKE";
2600 PRINT " WARP "; W1; "!'": PRINT
2610 PRINT "LET'S EASE IT DOWN SOME, CAPTAIN, OR THE ANTI-MATTER"
2620 PRINT "PODS WILL SURELY BLOW US ALL UP!!": GOTO 2300
2630 PRINT "WARP ENGINES ARE DAMAGED.  MAXIUM SPEED = WARP 0.2": BEEP : GOTO 2300
2640 N=INT(W1*8+0.5):IF E-N>=0 THEN 2720
2650 PRINT"ENGINEERING REPORTS   "INSUFFICIENT ENERGY AVAILABLE"
2660 PRINT "                       FOR MANEUVERING AT WARP";W1;"!'" : BEEP
2670 IF S<N-E OR D(7)<0 THEN 2300
2680 PRINT"DEFLECTOR CONTROL ROOM ACKNOWLEDGES";S;"UNITS OF ENERGY"
2690 PRINT"                         PRESENTLY DEPLOYED TO SHIELDS."
2700 GOTO 2300
2710 REM ******* KLINGONS MOVE/FIRE ON MOVING STARSHIP . . .***************
2720 FOR I=1 TO K3:IF K(I,3)=0 THEN 2750
2730 A$="   ":Z1=K(I,1):Z2=K(I,2):GOSUB 5460:GOSUB 5430
2740 K(I,1)=Z1:K(I,2)=Z2:A$="+K+": GOSUB 5460
2750 NEXT I:GOSUB 4210:D1=0:D6=W1:IF W1>=1 THEN D6=1
2760 FOR I=1 TO 8:IF D(I)>=0 THEN 2810
2770 D(I)=D(I)+D6: IF D(I)>-0.1 AND D(I)<0 THEN D(I)=-0.1: GOTO 2810
2780 IF D(I)<0 THEN 2810
2790 IF D1<>1 THEN D1=1 :PRINT "DAMAGE CONTROL REPORT:  ";
2800 PRINT  TAB(8);:R1=I:GOSUB 5520:PRINT  G2$;" REPAIR COMPLETED." : BEEP
2810 NEXT I:IF RND(1)>0.2 THEN 2880
2820 R1=FNR(1):IF RND(1)>=0.6 THEN 2850
2830 D(R1)=D(R1)-(RND(1)*5+1) :PRINT"DAMAGE CONTROL REPORT:  ";
2840 GOSUB 5520:PRINT G2$;" DAMAGED":PRINT: : BEEP :GOTO 2880
2850 D(R1)=D(R1)+RND(1)*3+1 :PRINT "DAMAGE CONTROL REPORT:  ";
2860 GOSUB 5520:PRINT G2$" STATE OF REPAIR IMPROVED":PRINT : BEEP
2870 REM ********* BEGIN MOVING STARSHIP **************************
2880 A$="   ":Z1=INT(S1):Z2=INT(S2):GOSUB 5460
2890 X1=C(C1,1)+(C(C1+1,1)-C(C1,1))*(C1-INT(C1)):X=S1:Y=S2
2900 X2=C(C1,2)+(C(C1+1,2)-C(C1,2))*(C1-INT(C1)):Q4=Q1:Q5=Q2
2910 FOR I=1 TO N:S1=S1+X1:S2=S2+X2:IF S1<1 OR S1>=9 OR S2<1 OR S2>=9 THEN 3040
2920 S8=INT(S1)*24+INT(S2)*3-26: IF MID$(Q$,S8,2)="  " THEN 2970
2930 S1=INT(S1-X1):S2=INT(S2-X2):PRINT "WARP ENGINES SHUT DOWN AT ";
2940 PRINT "SECTOR";S1;",";S2;"DUE TO BAD NAVIGATION":BEEP :
2950 PRINT "CHIEF ENGINEER SCOTT REPORTS `THE HULL CAN'T TAKE"
2960 PRINT "MUCH MORE OF THIS BEATING, SIR'": GOTO 2980
2970 NEXT I:S1=INT(S1):S2=INT(S2)
2980 A$="<*>":Z1=INT(S1):Z2=INT(S2): GOSUB 5460:GOSUB 3210:T8=1
2990 IF W1<1 THEN T8=0.1*INT(10*W1)
3000 T=T+T8:IF T>T0+T9 THEN 4330
3010 REM *********** SEE IF DOCKED, THEN GET COMMAND ******************
3020 GOTO 2290
3030 REM *********** EXCEEDED QUADRANT LIMITS *************************
3040 X=8*Q1+X+N*X1:Y=8*Q2+Y+N*X2:Q1=INT(X/8):Q2=INT(Y/8):S1=INT(X-Q1*8)
3050 S2=INT(Y-Q2*8):IF S1=0 THEN Q1=Q1-1:S1=8
3060 IF S2=0 THEN Q2=Q2-1:S2=8
3070 X5=0: IF Q1<1 THEN X5=1:Q1=1:S1=1
3080 IF Q1>8 THEN X5=1 : Q1=8 : S1=8
3090 IF Q2<1 THEN X5=1 : Q2=1 : S2=1
3100 IF Q2>8 THEN X5=1 : Q2=8 : S2=8
3110 IF X5=0 THEN 3180
3120 PRINT "LT. UHURA REPORTS A MESSAGE FROM STARFLEET COMMAND:" :BEEP
3130 PRINT "   `PERMISSION TO ATTEMPT CROSSING OF GALACTIC PERIMETER"
3140 PRINT " IS HEREBY *DENIED*.  SHUT DOWN YOUR ENGINES.'"
3150 PRINT "CHIEF ENGINEER SCOTT REPORTS `WARP ENGINES SHUT DOWN"
3160 PRINT " AT SECTOR";S1;",";S2; " OF QUADRANT";Q1;",";Q2;"."
3170 IF T>T0 + T9 THEN 4330
3180 IF 8*Q1+Q2=8*Q4+Q5 THEN 2980
3190 T=T+1 : GOSUB 3210 : GOTO 2090
3200 REM ********* MANUEVER ENERGY S/R ******************************
3210 E=E-N-10 : IF E>0 THEN RETURN
3220 PRINT "SHIELD CONTROL SUPPIES ENERGY TO COMPLETE THE MANEUVER."
3230 PRINT
3240 PRINT "SCOTTY REPORTS,`AYE, CAPTAIN, WE WERE VERY LUCKY THIS TIME"
3250 PRINT "WE HAD BETTER BE CAREFUL OR  NEXT TIME COULD BE OUR LAST'."
3260 S=S+E : E=0 : IF S<=0 THEN S=0
3270 RETURN
3280 REM *********LONG RANGE SENSOR SCAN CODE*************************
3290 IF D(3)<0 THEN PRINT "LONG RANGE SENSORS ARE INOPERABLE. ":BEEP : GOTO 2300
3300 PRINT "LONG RANGE SCAN FOR QUADRANT"; Q1; ","; Q2
3310 O1$="---------------------" : PRINT O1$
3320 FOR I=Q1-1 TO Q1+1 : N(1)=-1 : N(2)=-2 : N(3)=-3 : FOR J=Q2-1 TO Q2+1
3330 IF I>0 AND I<9 AND J>0 AND J<9 THEN N(J-Q2+2)=G(I,J) : Z(I,J)=G(I,J)
3340 NEXT J: FOR L=1 TO 3: PRINT ":  ";: IF N(L)<0 THEN PRINT "*** ";: GOTO 3360
3350 PRINT  RIGHT$(STR$(N(L)+1000),3);" ";
3360 NEXT L: PRINT ":": PRINT O1$: NEXT I: GOTO 2300
3370 REM ************PHASER CONTROL CODE BEGINS HERE*********************
3380 IF D(4)<0 THEN PRINT "PHASERS INOPERATIVE": BEEP :GOTO 2300
3390 IF K3>0 THEN 3420
3400 PRINT "SCIENCE OFFICER SPOCK REPORTS  `SENSORS SHOW NO ENEMY SHIPS"
3410 PRINT "                                IN THIS QUADRANT'": GOTO 2300
3420 IF D(8)<0 THEN PRINT "COMPUTER FAILURE HAMPERS ACCURACY" : BEEP
3430 PRINT "PHASERS LOCKED ON TARGET;  ";
3440 PRINT "ENERGY AVAILABLE = ";E;"UNITS"
3450 INPUT "NUMBER OF UNITS TO FIRE";X:IF X<=0 THEN 2300
3460 IF E-X<0 THEN 3440
3470 E=E-X : IF D(7)<0 THEN X=X*RND(1)
3480 H1=INT(X/K3) : FOR I=1 TO 3 : IF K(I,3)<=0 THEN 3580
3490 H=INT((H1/RND(0))*(RND(1)+2)) : IF H>0.15*K(I,3) THEN 3510
3500 PRINT "SENSORS SHOW NO DAMAGE TO ENEMY AT ";K(I,1);","; K(I,2): GOTO 3580
3510 K(I,3)=K(I,3)-H: PRINT H; "UNIT HIT ON KLINGON AT SECTOR"; K(I,1);",";
3520 PRINT K(I,2):IF K(I,3)<=0 THEN PRINT "*** KLINGON DESTROYED ***"
3530 SOUND 45,5
3540 GOTO 3560
3550 PRINT "   (SENSORS SHOW"; K(I,3); "UNITS REMAINING)": GOTO 3580
3560 K3=K3-1:K9=K9-1: Z1=K(I,1): Z2=K(I,2):A$ ="   ": GOSUB 5460
3570 K(I,3)=0:G(Q1,Q2)=G(Q1,Q2)-100:Z(Q1,Q2)=G(Q1,Q2):IF K9<=0 THEN 4430
3580 NEXT I: GOSUB 4210: GOTO 2300
3590 REM ************** PHOTON TORPEDO CODE BEGINS HERE *******************
3600 IF P<=0 THEN PRINT "ALL PHOTON TORPEDOES EXPENDED":BEEP : GOTO 2300
3610 IF D(5)<0 THEN PRINT "PHOTON TUBES ARE NOT OPERATIONAL": BEEP : GOTO 2300
3620 INPUT "PHOTON TORPEDO COURSE (1-9)"; C1: IF C1=9 THEN C1=1
3630 IF C1>=1 AND C1<9 THEN 3660
3640 PRINT "ENSIGN CHEKOV REPORTS,   `INCORRECT COURSE DATA, SIR!'"
3650 GOTO 2300
3660 X1=C(C1,1)+(C(C1+1,1)-C(C1,1))*(C1-INT(C1)):E=E-2: P=P-1
3670 X2=C(C1,2)+(C(C1+1,2)-C(C1,2))*(C1-INT(C1)):X=S1:Y=S2
3680 PRINT "TORPEDO TRACK:"
3690 X=X+X1:Y=Y+X2:X3=INT(X+0.5):Y3=INT(Y+0.5)
3700 IF X3<1 OR X3>8 OR Y3<1 OR Y3>8 THEN 3940
3710 PRINT "            ";X3;",";Y3:A$="    ":Z1=X:X2=Y: GOSUB 5620
3720 IF Z3<>0 THEN 3690
3730 A$="+K+": Z1=X:Z2=Y: GOSUB 5620 : IF Z3=0 THEN 3790
3740 PRINT "*** KLINGON DESTROYED ***":K3=K3-1:K9=K9-1:SOUND 45,5
3750 IF K9<=0 THEN 4430
3760 FOR I=1 TO 3 : IF X3=K(I,1) AND Y3=K(I,2) THEN 3780
3770 NEXT I:I=3
3780 K(I,3)=0: GOTO 3920
3790 A$=" * ":Z1=X : Z2=Y : GOSUB 5620 :IF Z3=0 THEN 3810
3800 PRINT "STAR AT";X3;",";Y3;"ABSORBED TORPEDO ENERGY.":GOSUB 4210:GOTO 2300
3810 A$=">!<":Z1=X:Z2=Y:GOSUB 5620:IF Z3=0 THEN 3620
3820 PRINT "*** STARBASE DESTROYED ***": SOUND 45,5 :PRINT :B3=B3-1:B9=B9-1
3830 IF B9>0 OR K9>T-T0-T9 THEN 3870
3840 PRINT"THAT DOES IT, CAPTAIN!!  YOU ARE HEREBY RELIEVED OF COMMAND"
3850 PRINT"AND SENTENCED TO 99 STARDATES AT HARD LABOR ON CYGNUS 12!!":PRINT
3860 GOTO 4360
3870 PRINT"STARFLEET COMMAND REVIEWING YOUR RECORD TO CONSIDER" : SOUND 45,5
3880 PRINT "CONVENING A GENERAL COURT MARTIAL."
3890 PRINT "YOU ARE  ADVISED TO BE MORE CAREFUL IN THE FUTURE,"
3900 PRINT "GOOD LAWYERS ARE HARD TO FIND, ESPECIALLY IN THIS QUADRANT--"
3910 PRINT "THEY ARE ALMOST AS BAD AS DENUBIAN BLOODSUCKERS.":PRINT :D0=0
3920 Z1=X:Z2=Y:A$="   ":GOSUB 5460
3930 G(Q1,Q2)=K3*100+B3*10+S3:Z(Q1,Q2)=G(Q1,Q2):GOSUB 4210:GOTO 2300
3940 PRINT"TORPEDO MISSED":GOSUB 4210:GOTO 2300
3950 REM ********** SHIELD CONTROL ************************
3960 IF D(7)<0 THEN PRINT "SHIELD CONTROL INOPERABLE": BEEP : GOTO 2300
3970 PRINT "ENERGY AVAILABLE =";E+S;:INPUT"NUMBER OF UNITS TO SHIELDS";X
3980 IF X<0 OR S=X THEN PRINT"<SHIELDS UNCHANGED>":GOTO 2300
3990 IF X<=E+S THEN 4020
4000 PRINT "SHIELD CONTROL REPORTS  `THIS IS NOT THE FEDERATION TREASURY.'"
4010 PRINT "<SHIELDS UNCHANGED>": BEEP : GOTO 2300
4020 E=E+S-X:S=X:PRINT"DEFLECTOR CONTROL ROOM REPORT:"
4030 PRINT "  `SHIELDS NOW AT";INT(S);"UNITS PER YOUR COMMAND.'":GOTO 2300
4040 REM *************** DAMAGE CONTROL ***********************
4050 IF D(6)>=0 THEN 4160
4060 PRINT "DAMAGE CONTROL REPORT NOT AVAILABLE":BEEP :IF D0=0 THEN 2300
4070 D3=0:FOR I=1 TO 8:IF D(I)<0 THEN D3=D3+1
4080 NEXT I:IF D3=0 THEN 2300
4090 PRINT:D3=D3+D4:IF D3>=1 THEN D3=0.9
4100 PRINT "TECHNICIANS STANDING BY TO EFFECT REPAIRS TO YOUR SHIP;"
4110 PRINT "ESTIMATED TIME TO REPAIR:";0.01*INT(100*D3);"STARDATES"
4120 INPUT "WILL YOU AUTHORIZE THE REPAIR ORDER (Y/N)";A$
4130 IF A$<>"Y" THEN 2300
4140 FOR I=1 TO 8:IF D(I)<0 THEN D(I)=0
4150 NEXT I:T=T+D3+0.1
4160 PRINT:PRINT "DEVICE             STATE OF REPAIR":FOR R1=1 TO 8
4170 GOSUB 5520:PRINT G2$; LEFT$(Z$,25-LEN(G2$));INT(D(R1)*100)*0.01
4180 NEXT R1:PRINT:IF D0<>0 THEN 4070
4190 GOTO 2300
4200 REM ************ KLINGONS SHOOTING *************************
4210 IF K3<=0 THEN RETURN
4220 IF D0<>0 THEN PRINT "STARBASE SHIELDS PROTECT THE ENTERPRISE":SOUND 45,52835. RETURN
4230 FOR I=1 TO 3:IF K(I,3)<=0 THEN 4310
4240 H=INT((K(I,3)/RND(1))*(2+RND(1))):S=S-H:K(I,3)=K(I,3)/(3+RND(0))
4250 PRINT"UNIT HIT ON ENTERPRISE FROM SECTOR";K(I,1);",";K(I,2) :SOUND 55,4
4260 IF S<=0 THEN 4340
4270 PRINT"      SHIELDS DOWN TO";S;"UNITS>": BEEP :IF H<20 THEN 4310
4280 IF RND(1)>0.6 OR H/S<=0.02 THEN 4310
4290 R1=FNR(1):D(R1)=D(R1)-H/S-0.5*RND(1):GOSUB 5520
4300 PRINT"DAMAGE CONTROL REPORTS `";G2$;" DAMAGED BY THE HIT'"  : BEEP
4310 NEXT I:RETURN
4320 REM************ END OF GAME *********************************
4330 PRINT "IT IS STARDATE";T:GOTO 4360
4340 PRINT:PRINT"THE ENTERPRISE HAS BEEN DESTROYED.  THE FEDERATION ";
4350 GOTO 4330
4360 PRINT "THERE WERE";K9;"KLINGON BATTLE CRUISERS LEFT AT"
4370 PRINT "THE END OF YOUR MISSION."
4380 PRINT:PRINT:IF B9=0 THEN 4420
4390 PRINT "THE FEDERATION IS IN NEED OF A NEW STARSHIP COMMANDER"
4400 PRINT "FOR A SIMILAR MISSION -- IF THERE IS A VOLUNTEER,"
4410 INPUT "LET HIM STEP FORWARD AND ENTER `AYE'";A$:IF A$="AYE" THEN 1450
4420 END
4430 PRINT "CONGRATULATIONS, CAPTAIN!  THE LAST KLINGON BATTLE CRUISER"
4440 PRINT "MENACING THE FEDERATION HAS BEEN DESTROYED.":PRINT
4450 PRINT "YOUR EFFICIENCY RATING IS";1000*(K7/(T-T0))^2:GOTO 4380
4460 REM*********** SHORT RANGE SENSOR SCAN & STARTUP SUBROUTINE ***********
4470 FOR I=S1-1  TO S1+1:FOR J=S2-1 TO S2+1
4480 IF INT(I+0.5)<1 OR INT(I+0.5)>8 OR INT(J+0.5)<1 OR INT(J+0.5)>8 THEN 4500
4490 A$=">!<":Z1=I:Z2=J:GOSUB 5620:IF Z3=1 THEN 4510
4500 NEXT J:NEXT I:D0=0:GOTO 4560
4510 D0=1:C$="DOCKED":E=E0:P=P0
4520 PRINT "SHIELDS DROPPED FOR DOCKING PURPOSES": BEEP :PRINT
4530 PRINT "IF YOU NEED OR WANT TO EFFECT REPAIRS TO DAMAGED EQUIPMENT,"
4540 PRINT "WHILE YOU ARE DOCKED, USE THE DAMAGE COMMAND (DAM)." :PRINT
4550 S=0:GOTO 4580
4560 IF K3>0 THEN C$="*RED*":GOTO 4580
4570 C$="GREEN":IF E<E0*0.1 THEN C$="YELLOW"
4580 IF D(2)>=0 THEN 4600
4590 PRINT:PRINT"*** SHORT RANGE SENSORS ARE OUT ***":BEEP:PRINT:RETURN
4600 O1$="---------------------------------":PRINT O1$ : FOR I=1 TO 8
4610 FOR J=(I-1)*24+1 TO (I-1)*24+22 STEP 3:PRINT" ";MID$(Q$,J,3);:NEXT J
4620 ON I GOTO 4630,4640,4650,4660,4670,4680,4690,4700
4630 PRINT"        STARDATE          ";INT(T*10)*0.1:GOTO 4710
4640 PRINT"        CONDITION          ";C$:GOTO 4710
4650 PRINT"        QUADRANT          ";Q1;",";Q2:GOTO 4710
4660 PRINT"        SECTOR            ";S1;",";S2:GOTO 4710
4670 PRINT"        PHOTON TORPEDOES  ";INT(P):GOTO 4710
4680 PRINT"        TOTAL ENERGY      ";INT(E+S):GOTO 4710
4690 PRINT"        SHIELDS           ";INT(S):GOTO 4710
4700 PRINT"        KLINGONS REMAINING";INT(K9)
4710 NEXT I:PRINT O1$:RETURN
4720 REM**************LIBRARY COMPUTER CODE****************
4730 IF D(8)<0 THEN PRINT"COMPUTER DISABLED":BEEP : GOTO 2300
4740 PRINT:PRINT
4750 PRINT "HIT `6' FOR A LISTING OF FUNCTIONS"
4760 PRINT "AVAILABLE FROM LIBRARY-COMPUTER...":PRINT:PRINT : GOTO 4770
4770 INPUT"COMPUTER ACTIVE AND AWAITING COMMAND";A:IF A<0 THEN 2300
4780 PRINT:H8=1:ON A+1 GOTO 4890,5020,5130,5390,5190,4870
4790 PRINT"FUNCTIONS AVAILABLE FROM LIBRARY-COMPUTER:"
4800 PRINT"   0 = CUMULATIVE GALACTIC RECORD"
4810 PRINT"   1 = STATUS REPORT"
4820 PRINT"   2 = PHOTON TORPEDE DATA"
4830 PRINT"   3 = STARBASE NAV DATA"
4840 PRINT"   4 = DIRECTION/DISTANCE CALCULATOR"
4850 PRINT"   5 = GALAXY `REGION NAME' MAP":PRINT:GOTO 4770
4860 REM*************** SETUP TO CHANGE CUM GAL RECORD TO GALAXY MAT **********
4870 H8=0:G5=1:PRINT"                        THE GALAXY":GOTO 4920
4880 REM*************** CUM GALACTIC RECORD ****************
4890 PRINT:PRINT"         ";
4900 PRINT"COMPUTER RECORD OF GALAXY FOR QUADRANT";Q1;",";Q2
4910 PRINT
4920 PRINT"         1      2      3      4      5      6      7     8"
4930 O1$="       -----  -----  -----  -----  -----  -----  -----  -----"
4940 PRINT O1$:FOR I=1 TO 8:PRINT I;:IF H8=0 THEN 4980
4950 FOR J=1 TO 8:PRINT"    ";:IF Z(I,J)=0 THEN PRINT"***";:GOTO 4970
4960 PRINT RIGHT$(STR$(Z(I,J)+1000),3);
4970 NEXT J:GOTO 5000
4980 Z4=I:Z5=1:GOSUB 5690:J0=INT(15-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
4990 Z5=5:GOSUB 5690:J0=INT(39-0.5*LEN(G2$)):PRINT TAB(J0);G2$;
5000 PRINT:PRINT O1$:NEXT I:PRINT :POKE 1229,0:POKE 1237,1 :NULL=0:GOTO 2300
5010 REM*************** STATUS REPORT *****************
5020 PRINT "   STATUS REPORT:":X$="":IF K9>1 THEN X$="S"
5030 PRINT"KLINGON";X$;" LEFT: ";K9
5040 PRINT"MISSION MUST BE COMPLETED IN";0.1*INT((T0+T9-T)*10);"STARDATES"
5050 X$="S":IF B9<2 THEN X$="":IF B9<1 THEN 5080
5060 PRINT"THE FEDERATION IS MAINTAINING";B9;"STARBASE";X$;" IN THE GALAXY"
5070 GOTO 4050
5080 PRINT"YOUR POSITION IN THE GALAXY INDICATES "
5090 PRINT"THAT YOU HAVE NO STARBASES AVAILABLE TO YOU."
5100 PRINT:PRINT"CAPTAIN, YOU ARE ON YOUR OWN--BE CAREFUL!!!!"
5110 GOTO 4050
5120 REM************* TORPEDO, BASE NAV, D/D CALCULATOR ****************
5130 IF K3<=0 THEN 3400
5140 X$="":IF K3>1 THEN X$="S"
5150 PRINT "FROM ENTERPRISE TO KLINGON BATTLE CRUISER";X$
5160 H8=0: FOR I=1 TO 3: IF K(I,3)<=0 THEN 5380
5170 W1=K(I,1):X=K(I,2)
5180 C1=S1:A=S2: GOTO 5230
5190 PRINT "DIRECTION/DISTANCE CALCULATOR:"
5200 PRINT "YOU ARE AT QUADRANT  ";Q1;",";Q2;"  SECTOR  ";S1;",";S2
5210 PRINT "PLESE ENTER": INPUT "   INITIAL COORDINATES (X,Y)";C1,A
5220 INPUT "   FINAL COORDINATES (X,Y)";W1,X
5230 X=X-A:A=C1-W1: IF X<0 THEN 5310
5240 IF A<0 THEN 5330
5250 IF X>0 THEN 5270
5260 IF A=0 THEN C1=5: GOTO 5280
5270 C1=1
5280 IF ABS(A)<=ABS(X) THEN 5300
5290 PRINT"DIRECTION ="; C1+(((ABS(A)-ABS(X))+ABS(A))/ABS(A)): GOTO 5370
5300 PRINT"DIRECTION =";C1+(ABS(A)/ABS(X)): GOTO 5370
5310 IF A>0 THEN C1=3 : GOTO 5340
5320 IF X<>0 THEN C1=5 : GOTO 5280
5330 C1=7
5340 IF ABS(A)>=ABS(X) THEN 5360
5350 PRINT "DIRECTION ="; C1+(((ABS(X)-ABS(A))+ABS(X))/ABS(X)) :GOTO 5370
5360 PRINT "DIRECTION =";C1+(ABS(X)/ABS(A))
5370 PRINT "DISTANCE ="; SQR(X^2+A^2): IF H8=1 THEN 2300
5380 NEXT I : GOTO 2300
5390 IF B3<>0 THEN PRINT"FROM ENTERPRISE TO STARBASE:":W1=B4:X=B5: GOTO 5180
5400 PRINT "MR. SPOCK REPORTS,  `SENSORS SHOW NO STARBASES IN THIS";
5410 PRINT " QUADRANT.'" : GOTO 2300
5420 REM ********** FIND EMPTY PLACE IN QUADRANT (FOR THINGS) **********
5430 R1=FNR(1):R2=FNR(1):A$="   ":Z1=R1:Z2=R2: GOSUB 5620: IF Z3=0 THEN 5430
5440 RETURN
5450 REM *********** INSERT IN STRING ARRAY FOR QUADRANT ****************
5460 S8=INT(Z2-0.5)*3+INT(Z1-0.5)*24+1
5470 IF LEN(A$)<>3 THEN PRINT"ERROR": STOP
5480 IF S8=1 THEN Q$=A$+RIGHT$(Q$,189) : RETURN
5490 IF S8=190 THEN Q$=LEFT$(Q$,189)+A$ : RETURN
5500 Q$=LEFT$(Q$,S8-1)+A$+RIGHT$(Q$,190-S8) : RETURN
5510 REM **************** PRINTS DEVICE NAME **************************
5520 ON R1 GOTO 5530,5540,5550,5560,5570,5580,5590,5600
5530 G2$="WARP ENGINES": RETURN
5540 G2$="SHORT RANGE SENSORS": RETURN
5550 G2$="LONG RANGE SENSORS": RETURN
5560 G2$="PHASER CONTROL": RETURN
5570 G2$="PHOTON TUBES": RETURN
5580 G2$="DAMAGE CONTROL": RETURN
5590 G2$="SHIELD CONTROL": RETURN
5600 G2$="LIBRARY-COMPUTER": RETURN
5610 REM ************** STRING COMPARISON IN QUADRANT ARRAY ****************
5620 Z1=INT(Z1+0.5):Z2=INT(Z2+0.5):S8=(Z2-1)*3+(Z1-1)*24+1:Z3=0
5630 IF MID$(Q$,S8,3)<>A$ THEN RETURN
5640 Z3=1: RETURN
5650 REM *********** QUADRANT NAME IN G2$ FROM Z4, Z5 (=Q1,Q2) **************
5660 REM **** CALL WITH G5=1 TO GET REGION NAME ONLY ****
5670 REM ************ QUADRANT NAME IN G2$ FROM Z4, Z5 (=Q1,Q2) ****
5680 REM ************ CALL WITH G5=1 TO GET REGION NAME ONLY ****
5690 IF Z5<=4 THEN ON Z4 GOTO 5710,5720,5730,5740,5750,5760,5770,5780
5700 GOTO 5790
5710 G2$="ANTARES":GOTO 5880
5720 G2$="RIGEL":GOTO 5880
5730 G2$="PROCYON":GOTO 5880
5740 G2$="VEGA":GOTO 5880
5750 G2$="CANOPUS":GOTO 5880
5760 G2$="ALTAIR":GOTO 5880
5770 G2$="SAGITTARIUS":GOTO 5880
5780 G2$="POLLUX":GOTO 5880
5790 ON Z4 GOTO 5800,5810,5820,5830,5840,5850,5860,5870
5800 G2$="SIRIUS":GOTO 5880
5810 G2$="DENEB":GOTO 5880
5820 G2$="CAPELLA":GOTO 5880
5830 G2$="BETELGEUSE":GOTO 5880
5840 G2$="ALDEBARAN":GOTO 5880
5850 G2$="REGULUS":GOTO 5880
5860 G2$="ARCTURUS":GOTO 5880
5870 G2$="SPICA"
5880 IF G5<>1 THEN ON Z5 GOTO 5900,5910,5920,5930,5900,5910,5920,5930
5890 RETURN
5900 G2$=G2$+" I":RETURN
5910 G2$=G2$+" II":RETURN
5920 G2$=G2$+" III":RETURN
5930 G2$=G2$+" IV":RETURN
10500 IN$=INKEY$:IF IN$="" THEN 10500 ELSE CLS:RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0002

     Volume in drive A has no label
     Directory of A:\

    ADDCR    BAS       512  10-13-82   2:22p
    CLEAN    COM       512  11-09-82  11:01a
    CLS      COM       128   9-24-82   8:24p
    CR       BAS      1408  11-10-82   8:42a
    CROSSREF BAS      5248  10-13-82   2:52p
    CSPOOL   COM      1024   1-01-80   2:24a
    DISKMOD  BAS      7552  11-09-82   9:57p
    FILES002 TXT      1559   5-29-87   8:07a
    GRAF2    COM      1280   1-01-80   2:19a
    HEXCONV  BAS      7680  10-13-82   3:12p
    HGRI     EXE      2048  10-13-82   3:15p
    KYBD     BAS      1664  11-09-82  10:33p
    LISTER   BAS     10112   1-01-80  12:02a
    MONITOR            640  11-10-82   8:45a
    MSPOOL   COM       768   1-01-80   2:25a
    NEWKEY   BAS       256  10-13-82   2:46p
    PROGRAM  DOC      5953   1-18-83   7:27p
    SDIR     COM      1280   1-01-80   2:29a
    STARTREK BAS     25600  10-13-82  12:06p
    SYSTAT   COM      1408   1-01-80   2:21a
    UNPROT   TXT       423   7-13-82   9:58a
           21 file(s)      77055 bytes
                           79360 bytes free
