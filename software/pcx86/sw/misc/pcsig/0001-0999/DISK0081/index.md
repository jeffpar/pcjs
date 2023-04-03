---
layout: page
title: "PC-SIG Library Disk #81"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0081/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0081"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMMUNICATION NO 1"

    This disk enhances the Batch file capabilities of DOS.  An extensive
    demonstration in tutorial form is included; it is remarkably good at
    displaying the potential and capabilities of batch files.  Since all
    files are readily available to read or print, you can easily adapt some
    ideas for use in your own batch files.
    
    Special Requirements:  A modem.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  Contact authors.
    
    File Descriptions:
    
    MODEM    ASM  Source code for utilities.
    UNWS     ASM  Source code for utilities.
    HOST2    BAS  Basic file.
    MAGDALEN BAS  Basic file.
    SCNMAP   BAS  Basic file.
    SORTS    BAS  Basic file.
    HOST2    DOC  Documentation.
    SCNMAP   DOC  Documentation.
    SORTS    DOC  Documentation.
    MODEM    COM  Telecommunication program.
    UNWS     EXE  Program to turn Wordstar files into Pure-ASCII files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HOST2.BAS

```bas
100 ' HOST.BAS                                                     VERSION 2.0
110 '
120 ' ************************************************************************
130 ' ************************************************************************
140 '
150 ' HOST COMPUTER
160 '
170 ' This program provides the capability to access an IBM Personal
180 ' Computer for the purpose of transmitting or receiving an ASCII
190 ' file from a remote location. It assumes the use of a Hayes
200 ' Smartmodem.
210 '
220 ' Upon receiving a carrier from the remote location, the program
230 ' requests the password. It signs off if the correct password is not
240 ' given in three tries.
250 '
260 ' The program recognizes 7 commands from the user at the remote
270 ' location. They are:
280 '     A - List the files on drive A.
290 '     B - List the files on drive B.
300 '     G - Signoff (GOODBYE).
310 '     M - Send message.
320 '     R - Receive a file from the remote location.
330 '     T - Transmit a file to the remote location.
340 '     ? - Summarize the commands.
350 '
360 ' Received files are opened for APPEND so that data is attached to the
370 ' end of a previously used file. Also, if in the RECEIVE FILE mode, 15
380 ' seconds passes with no activity, the user at the remote location is
390 ' asked if the end of file has been reached. If the answer is in the
400 ' affirmative or if there is no response within 1 minute, the file is
410 ' closed and the RECEIVE FILE mode is deactivated.
420 '
430 ' The program recognizes 4 commands from the system operator at the IBM
440 ' PC's location. They are:
450 '     ALT E      - Echo on / Echo off.
460 '     CTRL Prtsc - Printout on/ Printout off.
470 '     ALT M      - Send message to remote location or to Smartmodem.
475 '     ALT X      - Exit to BASIC
480 '
490 ' An active communications link times out after 5 minutes of inactivity.
500 '
510 ' ************************************************************************
520 ' WILLIAM HT BAILEY          PHONE: 215-924-0771                 JUNE 1982
522 '
525 '               DEBUGGED WITH THE HELP OF HOWARD CARTER
530 ' ************************************************************************
540 ' ************************************************************************
1000 '
1010 '              ------------ INITIALIZATION ------------
1020 '
1030 OPTION BASE 1: DIM MSG$(32): DEF SEG: POKE 106,0: CLOSE: CLS: KEY OFF
1040 DEFINT A-Z: XOFF$=CHR$(19): XON$=CHR$(17): CNT=0: FALSE=0: TRUE=NOT FALSE
1050 PAUSE=FALSE: PRNT=FALSE: ECHO=FALSE: RECV=FALSE: TRANS=FALSE: MESG=FALSE
1060 TIMER=FALSE: BYE=FALSE: ACTIVE=FALSE: AA=FALSE: CONNECT=FALSE: LF=FALSE
1065 OPMSG=FALSE: C$=""
1070 '
1080 MSG$(1)=CHR$(13)+CHR$(10)
1090 MSG$(2)="PASSWORD? "
1100 MSG$(3)="TRY AGAIN"+MSG$(1)
1110 MSG$(4)="*** ENTER ? FOR SUMMARY OF COMMANDS ***"+MSG$(1)
1120 MSG$(5)=">"
1130 MSG$(6)=MSG$(1)+"FILES A"+MSG$(1)
1140 MSG$(7)=MSG$(1)+"FILES B"+MSG$(1)
1150 MSG$(8)="*** GOODBYE ***"+MSG$(1)
1160 MSG$(9)="ENTER FILENAME IN THE FORMAT   (DRIVE):(FILESPEC) "
1170 MSG$(10)=MSG$(1)+"*** READY TO RECEIVE FILE ***"+MSG$(1)
1180 MSG$(11)="RECEPTION SUSPENDED. END OF FILE? (Y/N) "+MSG$(1)+CHR$(7)
1190 MSG$(12)="*** RECEPTION TERMINATED ***"+MSG$(1)+CHR$(7)
1200 MSG$(13)=MSG$(1)+"*** TRANSMISSION BEGINNING IN 15 SECONDS ***"+MSG$(1)
1210 MSG$(14)="    TYPE X TO ABORT TRANSMISSION"+MSG$(1)
1220 MSG$(15)="*** TRANSMISSION COMPLETE ***"+MSG$(1)+CHR$(7)
1230 MSG$(16)=MSG$(1)+"      --- SUMMARY OF COMMANDS ---"+MSG$(1)
1240 MSG$(17)="A - LIST THE FILES ON DRIVE A"+MSG$(1)
1250 MSG$(18)="B - LIST THE FILES ON DRIVE B"+MSG$(1)
1260 MSG$(19)="G - SIGNOFF (GOODBYE)"+MSG$(1)
1270 MSG$(20)="M - SEND MESSAGE"+MSG$(1)
1280 MSG$(21)="R - RECEIVE A FILE FROM YOUR LOCATION"+MSG$(1)
1290 MSG$(22)="T - TRANSMIT A FILE TO YOUR LOCATION"+MSG$(1)
1300 MSG$(23)="? - PRINT THE SUMMARY OF COMMANDS"+MSG$(1)+MSG$(1)
1310 MSG$(24)="--- FILE NOT FOUND ---"+MSG$(1)
1320 MSG$(25)="--- DISK IS FULL ---"+MSG$(1)
1330 MSG$(26)="--- BAD FILE NAME ---"+MSG$(1)
1340 MSG$(27)="--- TOO MANY FILES ---"+MSG$(1)
1350 MSG$(28)="--- DISK WRITE PROTECTED ---"+MSG$(1)
1360 MSG$(29)="--- DISK NOT READY ---"+MSG$(1)
1370 MSG$(30)="--- ERROR CONDITION ENCOUNTERED ---"+MSG$(1)
1380 MSG$(31)="ENTER 1 LINE MESSAGE"+MSG$(1)
1390 MSG$(32)="*** SYSTEM OPERATOR MESSAGE ***"+MSG$(1)+CHR$(7)
1400 '
1410 ON ERROR GOTO 2070
1420 OPEN "COM1:300,E,7,1" AS #1
1430 '
1440 LOCATE ,,1: PRINT #1,"********** HOST COMPUTER program active **********"
1450 PRINT #1,SPACE$(80);
1460 PRINT #1,"   WILLIAM HT BAILEY    PHONE: 215-924-0771        JUNE 1982"
1700 '
1710 ' ***********************************************************************
1720 '
1730 '              --------- MAIN PROCESSING LOOP ---------
1740 '
1750 B$=INKEY$: IF LEN(B$)>1 THEN  GOSUB 2240
1760 '
1770 IF LOF(1)<128 THEN PAUSE=TRUE: PRINT #1,XOFF$;
1780 IF EOF(1) THEN IF NOT AA THEN PRINT #1,"ATS0=1": AA=TRUE: GOTO 1895             ELSE GOTO 1895
1790 A$=INPUT$(LOC(1),#1)
1795 IF LF THEN LF=FALSE: C$=""
1797 IF LEN(C$)<254 THEN C$=C$+A$
1800 '
1810 FOR I=1 TO LEN(A$)
1820 D$=MID$(A$,I,1)
1825 IF D$=CHR$(13) OR D$=CHR$(10) THEN LF=TRUE
1830 IF D$=CHR$(10) THEN GOTO 1870
1840 IF PRNT AND NOT OPMSG THEN LPRINT D$;
1850 IF D$=CHR$(8) THEN IF POS(0)>1 THEN LOCATE ,POS(0)-1: PRINT " ";:               LOCATE ,POS(0)-1: GOTO 1870
1860 PRINT D$;
1870 NEXT I: IF NOT LF THEN 1895
1875 '
1880 GOTO 3050
1890 '
1895 IF BYE THEN CNT2=CNT2+1: IF CNT2=1000 THEN 4550
1900 IF LOC(1)>0 OR BYE THEN 1750
1910 IF PAUSE THEN PAUSE=FALSE: PRINT #1,XON$;
1920 IF NOT CONNECT THEN 1750
1930 IF T1>VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60) THEN 1750
1940 GOTO 4550
2000 '
2010 ' ***********************************************************************
2020 '
2030 '             ------------- SUBROUTINES --------------
2040 '
2050 ' ERROR HANDLER
2060 '
2070 M=30
2072 IF ERR<>57 THEN 2080
2074 FOR I=1 TO 5000: NEXT I
2076 IF NOT EOF(1) THEN A$=INPUT$(LOC(1),#1)
2078 RESUME 4655
2080 IF ERR=24 THEN PRINT "*** MODEM NOT READY ***": BEEP: STOP
2090 IF ERR=69 THEN RESUME
2100 IF ERR=27 THEN PRINT "PRINTER NOT READY ***": BEEP: RESUME NEXT
2110 IF ERR=53 THEN M=24
2120 IF ERR=61 THEN M=25
2130 IF ERR=64 THEN M=26
2140 IF ERR=67 THEN M=27
2150 IF ERR=70 THEN M=28
2160 IF ERR=71 THEN M=29
2170 IF M<>30 THEN PRINT MSG$(M): BEEP: GOTO 2190
2180 PRINT "--- ERROR";ERR;" ENCOUNTERED ON LINE";ERL;" ---": BEEP
2190 PRINT #1,MSG$(M);: IF PRNT THEN LPRINT MSG$(M);
2200 RECV=FALSE: TRANS=FALSE: CLOSE #2: RESUME 4160
2210 '
2220 ' SYSTEM OPERATOR COMMAND
2230 '
2240 CODE=ASC(MID$(B$,2,1))
2250 '
2260 IF CODE<>18 THEN 2300
2270 IF ECHO=FALSE THEN ECHO=TRUE: BEEP: PRINT "--- ECHO ON ---": RETURN
2280 ECHO=FALSE: BEEP: PRINT "--- ECHO OFF ---": RETURN
2290 '
2300 IF CODE<>114 THEN 2340
2310 IF PRNT=FALSE THEN PRNT=TRUE: BEEP: PRINT "--- PRINTOUT ON ---": RETURN
2320 PRNT=FALSE: BEEP: PRINT "--- PRINTOUT OFF ---": RETURN
2330 '
2340 IF CODE<>50 THEN 2460
2350 PRINT #1,MSG$(32);: IF PRNT THEN LPRINT MSG$(32);
2355 IF ECHO THEN PRINT MSG$(32);
2360 IF NOT PAUSE THEN PRINT #1,XOFF$;
2370 B$=INKEY$
2380 IF LEN(B$)>1 THEN 2370
2390 IF B$="" THEN 2370 ELSE PRINT #1,B$;
2400 IF ECHO THEN PRINT B$;
2410 IF PRNT THEN LPRINT B$;
2420 IF B$<>CHR$(10) AND B$<>CHR$(13) THEN 2370
2430 IF NOT PAUSE THEN PRINT #1,XON$;
2435 OPMSG=TRUE
2440 RETURN
2450 '
2460 IF CODE<>45 THEN RETURN
2470 PRINT: BEEP: PRINT "--- EXIT ---": PRINT "Enter CONT to resume": PRINT
2480 ON ERROR GOTO 0: KEY ON: STOP
2490 ON ERROR GOTO 2070: KEY OFF: RETURN
3000 '
3010 ' ***********************************************************************
3020 '
3030 '             ------------ COMMAND DECODE ------------
3040 '
3050 IF MESG THEN MESG=FALSE: GOTO 4160
3060 IF ACTIVE THEN 3130
3070 IF CONNECT THEN 3100
3080 '
3085 IF INSTR(C$,"CARRIER")<>0 THEN BYE=TRUE: GOTO 4550
3090 IF INSTR(C$,"NECT")<>0 THEN CONNECT=TRUE: GOTO 4050 ELSE GOTO 1900
3100 IF INSTR(C$,"WORD")<>0 OR INSTR(C$,"word")<>0 THEN VALID=TRUE: GOTO 4080
3110 VALID=FALSE: GOTO 4080
3120 '
3130 IF RECV OR TRANS THEN 3280
3140 IF BYE THEN 4550
3150 '
3160 IF OPMSG THEN OPMSG=FALSE: GOTO 4160
3165 IF INSTR(C$,"CARRIER")<>0 THEN BYE=TRUE: GOTO 4580
3170 IF INSTR(C$,"M")<>0 OR INSTR(C$,"m")<>0 THEN 5150
3180 IF INSTR(C$,"?")<>0 THEN 5200
3190 IF INSTR(C$,"A")<>0 OR INSTR(C$,"a")<>0 THEN C$="A": M=6: GOTO 5070
3200 IF INSTR(C$,"B")<>0 OR INSTR(C$,"b")<>0 THEN C$="B": M=7: GOTO 5070
3210 IF INSTR(C$,"R")<>0 OR INSTR(C$,"r")<>0 THEN 6050
3220 IF INSTR(C$,"T")<>0 OR INSTR(C$,"t")<>0 THEN 7050
3230 IF INSTR(C$,"G")<>0 OR INSTR(C$,"g")<>0 THEN 4550
3240 PRINT #1,MSG$(3);: IF PRNT THEN LPRINT MSG$(3);
3250 IF ECHO THEN PRINT MSG$(3);
3260 GOTO 4140
3270 '
3280 M=INSTR(C$,"A:"): IF M<>0 THEN 3330
3290 M=INSTR(C$,"a:"): IF M<>0 THEN 3330
3300 M=INSTR(C$,"B:"): IF M<>0 THEN 3330
3310 M=INSTR(C$,"b:"): IF M=0 THEN RECV=FALSE:TRANS=FALSE:GOTO 3240
3320 '
3330 F$=MID$(C$,M,14)
3340 IF RIGHT$(F$,1)=CHR$(10) OR RIGHT$(F$,1)=CHR$(13) THEN F$=                      LEFT$(F$,LEN(F$)-1): GOTO 3340
3350 IF RECV THEN 6080 ELSE GOTO 7080
4000 '
4010 ' ***********************************************************************
4020 '
4030 '              --------------- SIGN ON ----------------
4040 '
4050 IF NOT EOF(1) THEN A$=INPUT$(LOC(1),#1)
4052 PRINT #1,MSG$(2);: IF PRNT THEN LPRINT MSG$(2);
4055 IF ECHO THEN PRINT MSG$(2);
4060 T1=VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60)+2: GOTO 1900
4070 '
4080 IF VALID THEN 4130
4085 IF INSTR(C$,"CARRIER")<>0 THEN 4655
4090 CNT=CNT+1: IF CNT>=3 THEN 4550
4100 PRINT #1,MSG$(3);: IF PRNT THEN LPRINT MSG$(3);
4105 IF ECHO THEN PRINT MSG$(3);
4110 GOTO 1900
4120 '
4130 ACTIVE=TRUE
4140 PRINT #1,MSG$(4);: IF PRNT THEN  LPRINT MSG$(4);
4145 IF ECHO THEN PRINT MSG$(4);
4150 '
4151 ' COME HERE AFTER PROCESSING A COMMAND
4152 '
4160 PRINT #1,MSG$(5);: IF PRNT THEN LPRINT MSG$(5);
4165 IF ECHO THEN PRINT MSG$(5);
4170 '
4180 ' SET TIMEOUT CLOCK
4190 '
4200 T1=VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60)+5: GOTO 1900
4500 '
4510 ' ***********************************************************************
4520 '
4530 '              --------------- SIGN OFF ---------------
4540 '
4550 IF BYE THEN 4635
4560 PRINT #1,MSG$(8);: IF PRNT THEN LPRINT MSG$(8);
4565 IF ECHO THEN PRINT MSG$(8);
4570 '
4580 FOR I=1 TO 2000: NEXT I
4590 PRINT #1,"+++";: IF ECHO THEN PRINT "+++"
4600 FOR I=1 TO 2000: NEXT I
4610 '
4620 CNT2=0: BYE=TRUE: GOTO 1900
4630 '
4635 IF INSTR(C$,"CARRIER")<>0 THEN 4655
4640 IF INSTR(C$,"OK")=0 THEN 4580
4655 BYE=FALSE: CONNECT=FALSE: ACTIVE=FALSE: CNT=0
4660 CLS: PRINT "********** HOST COMPUTER program active **********"
4665 PRINT #1,"ATH"
4670 GOTO 1750
5000 '
5010 ' ***********************************************************************
5020 '
5030 '              ----------- COMMANDS A,B,M,? -----------
5040 '
5050 ' LIST FILES (Modifications necessary if using graphics display.)
5060 '
5070 CLS: PRINT #1,MSG$(M);
5080 FILES C$+":*.*": PRINT: DEF SEG=&HB000: FOR I=0 TO (80*(CSRLIN-1)-1)
5090 B$=CHR$(PEEK(2*I)): PRINT #1,B$;: IF PRNT THEN LPRINT B$;
5095 NEXT I
5100 PRINT #1,MSG$(1);: IF PRNT THEN LPRINT MSG$(1);
5105 IF ECHO THEN PRINT MSG$(1);
5110 GOTO 4160
5120 '
5130 ' USER MESSAGE
5140 '
5150 PRINT "*** USER MESSAGE ***": BEEP: PRINT #1,MSG$(31);
5160 IF PRNT THEN LPRINT "*** USER MESSAGE ***"
5165 MESG=TRUE: GOTO 4160
5170 '
5180 ' LIST SUMMARY OF COMMANDS
5190 '
5200 FOR M=16 TO 23
5210 PRINT #1,MSG$(M);: IF PRNT THEN LPRINT MSG$(M);
5215 IF ECHO THEN PRINT MSG$(M);
5220 NEXT M: GOTO 4160
6000 '
6010 ' ***********************************************************************
6020 '
6030 '              ------------- RECEIVE FILE -------------
6040 '
6050 PRINT #1,MSG$(9);: IF PRNT THEN LPRINT MSG$(9);
6055 IF ECHO THEN PRINT MSG$(9);
6060 RECV=TRUE: GOTO 1900
6070 '
6080 OPEN F$ FOR APPEND AS #2
6090 PRINT #1,MSG$(10);: IF PRNT THEN LPRINT MSG$(10);
6095 IF ECHO THEN PRINT MSG$(10);
6100 '
6110 B$=INKEY$: IF LEN(B$)>1 THEN GOSUB 2240
6115 IF OPMSG THEN OPMSG=FALSE
6120 '
6130 IF LOF(1)<128 THEN PAUSE=TRUE: PRINT #1,XOFF$;
6140 IF EOF(1) THEN IF TIMER THEN 6270 ELSE GOTO 6220
6145 IF TIMER THEN TIMER=FALSE
6150 A$=INPUT$(LOC(1),#1): PRINT #2,A$;
6152 FOR I=1 TO LEN(A$): D$=MID$(A$,I,1)
6154 IF D$=CHR$(10) THEN 6158
6156 IF ECHO THEN PRINT D$;
6158 NEXT I
6160 IF LOC(1)>0 THEN 6130
6170 IF PAUSE THEN PAUSE=FALSE: PRINT #1,XON$;
6180 GOTO 6110
6190 '
6200 ' SET TIMEOUT CLOCK
6210 '
6220 T2=VAL(RIGHT$(TIME$,2))+(VAL(MID$(TIME$,4,2))*60)+15
6230 TIMER=TRUE: GOTO 6110
6240 '
6250 ' CHECK TIMEOUT CLOCK
6260 '
6270 IF T2>VAL(RIGHT$(TIME$,2))+(VAL(MID$(TIME$,4,2))*60) THEN 6110
6280 '
6290 ' END OF FILE?
6300 '
6310 PRINT #1,MSG$(11);: IF PRNT THEN LPRINT MSG$(11);
6315 IF ECHO THEN PRINT MSG$(11);
6320 T3=VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60)+1
6330 IF T3<VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60) THEN 6370
6340 IF EOF(1) THEN 6330
6350 B$=INPUT$(LOC(1),#1): IF INSTR(B$,"Y")=0 AND INSTR(B$,"y")=0 THEN               TIMER=FALSE: GOTO 6110
6360 '
6370 PRINT #1,MSG$(12);: IF PRNT THEN LPRINT MSG$(12);
6375 IF ECHO THEN PRINT MSG$(12);
6380 CLOSE #2: RECV=FALSE: TIMER=FALSE: GOTO 4160
7000 '
7010 ' ***********************************************************************
7020 '
7030 '              ------------- TRANSMIT FILE -------------
7040 '
7050 PRINT #1,MSG$(9);: IF PRNT THEN LPRINT MSG$(9);
7055 IF ECHO THEN PRINT MSG$(9);
7060 TRANS=TRUE: GOTO 1900
7070 '
7080 OPEN F$ FOR INPUT AS #2: FOR M=13 TO 14
7090 PRINT #1,MSG$(M);: IF PRNT THEN LPRINT MSG$(M);
7095 IF ECHO THEN PRINT MSG$(M);
7100 NEXT M: FOR I=1 TO 14000: NEXT I
7110 '
7120 B$=INKEY$: IF LEN(B$)>1 THEN GOSUB 2240
7125 IF OPMSG THEN OPMSG=FALSE
7130 '
7140 IF EOF(2) THEN 7210
7150 A$=INPUT$(1,#2): PRINT #1,A$;
7160 IF A$<>CHR$(10) AND ECHO THEN PRINT A$;
7170 '
7180 IF EOF(1) THEN 7120
7190 B$=INPUT$(LOC(1),#1): IF INSTR(B$,"X")<>0 OR INSTR(B$,"x")<>0 THEN 7210
7195 IF INSTR(B$,"CARRIER")<>0 THEN CLOSE #2: TRANS=FALSE: GOTO 4580
7200 '
7210 PRINT #1,MSG$(15);: IF PRNT THEN LPRINT MSG$(15);
7215 IF ECHO THEN PRINT MSG$(15);
7220 CLOSE #2: TRANS=FALSE: GOTO 4160
9996 '
9997 ' **********************************************************************
9998 ' **********************************************************************
9999 END
```

## MAGDALEN.BAS

```bas
2 CLS:ZA$="From 'The Little Notebook for"
3 ZB$="Anna Magdalena Bach'"
4 ZC$="by J. S. Bach"
6 LOCATE 10,40-LEN(ZA$)/2:PRINT ZA$
7 LOCATE 11,40-LEN(ZB$)/2:PRINT ZB$
8 LOCATE 12,40-LEN(ZC$)/2:PRINT ZC$
10 A$="o3D..o2GABo3CD..o2Gp8Gp8"
20 B$="o3E..CDEF#G..o2Gp8Gp8"
30 C$="o3C..DCo2BAB..o3Co2BAGF#..GABGBA...p4"
35 C1$="o3C..DCo2BAB..o3Co2BAGF#..GABGA....p4"
40 D$="o3C..DCo2BAB..o3Co2BAGA..BAGF#G....p4"
50 E$="mlo3B..GABGA..DEF#DG..EF#GDC#..o2Bo3C#o2Ap8ABo3C#DEF#G..F#..E..F#..o2A..o3C#..D....p4mn"
60 F$="D..o2GF#Gp8o3E..o2GF#Gp8o3D..C..o2B..AGF#GAp8DEF#GABo3C..o2B..A..Bo3Do2G..F#..G....p4"
70 G$="o3A...p8GF#EDp64A...p8GF#EDp64"
80 H$="o2F#GA..G..F#..E..A..F#..D.."
90 I$="o2F#GA..G..F#..E..A..D..p4"
100 J$="o3C#DEp8C#DEp8A..Ep8Ep8E..A..Ep8A..Ep8DC#o2BAB..Ep8"
110 K$="o3E..D#p9o2E..l10o3D....l8C#..o3A..G#..E..D#p9o2E..l10o3D....l8C#..A..G#..ED#C#D#ED#C#D#E.p16mno2G#..A..o3D..C#DE..o2A..D..C#DE..o1A..p4"
120 L$="o2F#GA..G..F#..p2E..A..o3D.."
130 PLAY"mbmnt195l8"
140 PLAY G$:PLAY H$
150 PLAY G$:PLAY I$
160 PLAY G$:PLAY H$
170 PLAY G$:PLAY I$
180 PLAY J$:PLAY K$
190 PLAY G$:PLAY H$
200 PLAY G$:PLAY L$
205 PLAY "p1p1p1"
210 PLAY"mbmnt150l8"
220 PLAY A$:PLAY B$:PLAY C1$
230 PLAY A$:PLAY B$:PLAY D$
250 PLAY A$:PLAY B$:PLAY C$
260 PLAY A$:PLAY B$:PLAY D$
270 PLAY E$:PLAY F$
280 PLAY A$:PLAY B$:PLAY C1$
290 PLAY A$:PLAY B$:MID$(D$,LEN(D$)-1,2)=". ":PLAY D$
```

## SCNMAP.BAS

```bas
1 ' (PC)^3 Software Submission SCNMAP authored on February 4, 1983 by
2 '
3 ' Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
4 '
5 ' Copyright 1983 Michael Csontos
6 '
7 '  This program is made freely available non-exclusively to the Picture
8 '  City Personal Computer Programmers' Club for distribution to its members
9 '  and through software exchange to other users groups as long as credit is
10 ' given to the author and (PC)^3.
11 '
15 '
16 '
10000 CLS:SCREEN 0,0,0:WIDTH 80:KEY OFF:WIDTH "lpt1:",255:DEFINT A-Z
10100 PRINT "This program will cause the Epson printer (with script capability) to make
10200 PRINT "a form that can be used to lay-out screen formats for the IBM color-graphics
10300 PRINT "adapter card in the alpha-numeric mode in either the 40 or 80 column width.
10400 PRINT "You may choose either a blank form or one with each character position filled
10500 PRINT "with the address of the memory location corresponding to that position.
10600 PRINT
10700 PRINT "Do you want: 1) a blank 40 width form,
10800 PRINT " or          2) a filled 40 width form,
10900 PRINT " or          3) a blank 80 width form,
11000 PRINT " or          4) a filled 80 width form,
11100 PRINT " or          <Esc> to end the program.
11200 PRINT:PRINT "Please press 1, 2, 3, 4, or <Esc>.
11300 X$=INKEY$:IF X$="" THEN 11300 ELSE IF X$=CHR$(27) THEN 11700 ELSE A=VAL(X$)
11350 ON ERROR GOTO 11650
11400 IF A>4 OR A<1 THEN 11200
11500 IF A=1 OR A=2 THEN 11800
11600 IF A=3 OR A=4 THEN 14500
11650 RESUME
11700 CLS:KEY ON:END
11800 LPRINT CHR$(27)CHR$(64)CHR$(15)CHR$(27)CHR$(48)'reset;compressed;1/8" lines
11900 IF A=1 THEN LPRINT "Blank layout for screen graphics for the IBM Personal Computer Color Graphics Adapter Card in the 40 column width mode.":LPRINT:GOTO 12100
12000 LPRINT "Memory map of the screen graphics RAM for the IBM Personal Computer Color Graphics Adapter Card in the 40 column width A/N mode.":LPRINT
12100 LPRINT CHR$(27)CHR$(45)CHR$(1);:FOR L=25 TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT CHR$(27)CHR$(45)CHR$(0)'underlined
12200 FOR M=1 TO 40
12300 LPRINT CHR$(27)CHR$(51)CHR$(1);'1/216" lines (effectively no LF)
12400 FOR N=1 TO 26:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT
12500 IF A=1 THEN LPRINT:GOTO 12800
12600 LPRINT CHR$(27)CHR$(83)CHR$(1);'subscript
12700 FOR L=0 TO 24 STEP 1:LPRINT USING " ####";(80*(25-L))-(80-2*M+1)-1;:NEXT L:LPRINT
12800 LPRINT CHR$(27)CHR$(49)CHR$(27)CHR$(84)CHR$(27)CHR$(72)'7/72" lines;cancel script; cancel double strike;line feed
12900 LPRINT CHR$(27)CHR$(51)CHR$(1):LPRINT:LPRINT '1/216" lines (effectively no LF)
13000 LPRINT CHR$(27)CHR$(45)CHR$(1);'underline
13100 FOR N=1 TO 26:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT USING "##";M
13200 LPRINT CHR$(27)CHR$(45)CHR$(0);'cancel underline
13300 IF A=1 THEN LPRINT:GOTO 13600
13400 LPRINT CHR$(27)CHR$(83)CHR$(0);'superscript
13500 FOR L=0 TO 24 STEP 1:LPRINT USING " ####";(80*(25-L))-(80-2*M)-1;:NEXT L:LPRINT
13600 LPRINT CHR$(27)CHR$(49)CHR$(27)CHR$(84)CHR$(27)CHR$(72) '7/72" lines;cancel script; cancel double strike;line feed
13700 NEXT M
13800 LPRINT CHR$(27)CHR$(65)CHR$(2)'line feed 2/72"
13900 FOR L=25 TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT
14000 LPRINT CHR$(15)CHR$(27)CHR$(48);'compressed;1/8" lines
14100 IF A=1 THEN LPRINT:LPRINT "In the above chart each block represents a character (pel).":GOTO 14400
14200 LPRINT:LPRINT "In the above chart each block represents a character (pel). The upper number is the address of the character, the lower is the
14300 LPRINT "address of the attribute. To access these bytes in BASIC, use the instruction DEF SEG=&HB800 then PEEK(n) or POKE n,data.
14400 LPRINT CHR$(12);:ON ERROR GOTO 0:RUN
14500 C=80:R=25
14600 LPRINT CHR$(27)CHR$(64)CHR$(15)CHR$(27)CHR$(48)'reset;compressed;1/8" lines
14700 IF A=3 THEN LPRINT "Blank layout for screen graphics for the IBM Personal Computer Color Graphics Adapter Card in the 80 column width mode.":LPRINT:GOTO 14900
14800 LPRINT "Memory map of the screen graphics RAM for the IBM Personal Computer Color Graphics Adapter Card in the 80 column width A/N mode.":LPRINT
14900 LPRINT CHR$(27)CHR$(45)CHR$(1);:FOR L=25 TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT CHR$(27)CHR$(45)CHR$(0);'underlined
15000 LPRINT CHR$(27)CHR$(65)CHR$(1)'1/72" lines
15100 FOR P=1 TO 5:LPRINT :NEXT P
15200 FOR M=1 TO C
15300 FOR N=1 TO R+1:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT
15400 LPRINT CHR$(27)CHR$(83)CHR$(1);'subscript
15500 IF A=3 THEN FOR L=0 TO R-1 STEP 1:LPRINT "     ";:NEXT L:LPRINT USING "   ##";M:GOTO 15700
15600 FOR L=0 TO R-1 STEP 1:LPRINT USING " ####";(2*C*(R-L))-(2*C-2*M+1)-1;:NEXT L:LPRINT USING "   ##";M
15700 LPRINT CHR$(27)CHR$(84)CHR$(27)CHR$(72);'cancel script; cancel double strike
15800 LPRINT CHR$(27)CHR$(45)CHR$(1);'underline
15900 FOR N=1 TO R+1:LPRINT CHR$(156);:LPRINT STRING$(4," ");:NEXT N:LPRINT "_"
16000 LPRINT CHR$(27)CHR$(45)CHR$(0);'cancel underline
16100 LPRINT CHR$(27)CHR$(83)CHR$(0);'superscript
16200 FOR P=1 TO 5:LPRINT:NEXT P
16300 LPRINT CHR$(27)CHR$(84)CHR$(27)CHR$(72);'cancel script; cancel double strike
16400 NEXT M
16500 FOR P=1 TO 6:LPRINT:NEXT P
16600 LPRINT CHR$(15)CHR$(27)CHR$(48);'reset;compressed;1/8" lines
16700 FOR L=R TO 1 STEP -1:LPRINT USING "|  ##";L;:NEXT L:LPRINT
16800 IF A=3 THEN LPRINT:LPRINT "In the above chart each block represents a character (pel).":GOTO 17100
16900 LPRINT:LPRINT "In the above chart each block represents a character (pel). The number is the address of the character, add one to this number for
17000 LPRINT "the address of the attribute. To access these bytes in BASIC, use the instruction DEF SEG=&HB800 then PEEK(n) or POKE n,data.
17100 LPRINT CHR$(12);:ON ERROR GOTO 0:RUN
17200 '         SAVE"scnmap.bas",a
n DEF SEG=&H
```

## SORTS.BAS

```bas
10 REM SORTS.BAS 4/24/82 TLS
20 ' ****************
30 '  INITIALIZATION
40 ' ****************
50 DIM LT(20),RT(20)
60 DEF SEG:POKE 106,0
70 INPUT "Sample size";R                        ' R = SAMPLE SIZE
80 DIM Y(R),Z(R)
90 FOR I=1 TO R                                 ' SETUP RANDOM SAMPLE
100  Z(I)=RND
110  NEXT I
120 PRINT "Screen or Printer (S/P)? "
130  I$=INPUT$(1)
140  IF I$="S" OR I$="s" THEN OPEN "SCRN:" FOR OUTPUT AS #1:GOTO 170
150  IF I$="P" OR I$="p" THEN OPEN "LPT1:" FOR OUTPUT AS #1:GOTO 170
160  BEEP:GOTO 120
170 PRINT #1, :PRINT #1,
180 ' ****************
190 '  MAIN PROGRAM
200 ' ****************
210 FOR C=1 TO 4                                 ' LOOP ON CASES
220  FOR S=3 TO 7                                ' LOOP ON SORTS
230   PRINT #1, "R =";STR$(R);".  ";
240   ON C GOSUB 470,630,710,800                ' SET UP CASE
250   T1$=TIME$
260   ON S GOSUB 890,990,1100,1220,1350,1570,1730   ' SORT
270   T2$=TIME$
280   GOSUB 550                                 ' CALCULATE TIME
290   GOSUB 380                                 ' CHECK SORT SEQUENCE
300   NEXT S
310  PRINT #1,
320  NEXT C
330 CLOSE 1
340 END
350 ' ***********************
360 '  CHECK SORTED SEQUENCE
370 ' ***********************
380 FOR I=1 TO R-1
390  IF Y(I+1)<Y(I) GOTO 420
400  NEXT I
410 RETURN
420 PRINT #1, "Not sorted correctly."
430 RETURN
440 ' ******************
450 '  REVERSE SEQUENCE
460 ' ******************
470 FOR I=0 TO R
480  Y(I)=1+R-I
490  NEXT I
500 PRINT #1, "Worst case.  ";
510 RETURN
520 ' *********************************
530 '  PRINT ELAPSED TIME (T2$-T1$)
540 ' *********************************
550 T=3600*(VAL(LEFT$(T2$,2))-VAL(LEFT$(T1$,2)))
560 T=T+60*(VAL(MID$(T2$,4,2))-VAL(MID$(T1$,4,2)))
570 T=T+(VAL(MID$(T2$,7,2))-VAL(MID$(T1$,7,2)))
580 PRINT #1, "Elapsed time is";T;"seconds."
590 RETURN
600 ' *************************
610 '  ALREADY SORTED SEQUENCE
620 ' *************************
630 FOR I=1 TO R
640  Y(I)=I
650  NEXT I
660 PRINT #1, "Already sorted case.  ";
670 RETURN
680 ' *********************************
690 '  ALMOST SORTED CASE
700 ' *********************************
710 FOR I=1 TO R-1
720  Y(I)=I
730  NEXT I
740 Y(R)=INT(R/2)
750 PRINT #1, "Almost sorted case.  ";
760 RETURN
770 ' *********************************
780 '  RANDOM SEQUENCE
790 ' *********************************
800 FOR I=1 TO R
810  Y(I)=Z(I)
820  NEXT I
830 PRINT #1, "Random case.  ";
840 RETURN
850 ' **********************
860 '  BUBBLE SORT V.1
870 ' **********************
880 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
890 PRINT #1, "Bubble Sort V1.  ";
900 FOR J=R-1 TO 1 STEP -1
910 FOR I=1 TO J
920 IF Y(I)>Y(I+1) THEN SWAP Y(I),Y(I+1)
930 NEXT I,J
940 RETURN
950 ' **********************
960 '  BUBBLE SORT V.2
970 ' **********************
980 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
990 PRINT #1, "Bubble Sort V2.  ";
1000 FOR J=R-1 TO 1 STEP -1
1010 F=0:FOR I=1 TO J
1020 IF Y(I)>Y(I+1) THEN SWAP Y(I),Y(I+1):F=-1
1030 NEXT I
1040 IF F THEN NEXT J
1050 RETURN
1060 ' **********************
1070 '  INSERT SORT
1080 ' **********************
1090 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1100 PRINT #1, "Insert Sort   ";
1110 FOR J=2 TO R
1120 FOR I=J TO 2 STEP -1
1130 IF Y(I)>=Y(I-1) THEN 1160
1140 SWAP Y(I),Y(I-1)
1150 NEXT I
1160 NEXT J
1170 RETURN
1180 ' **********************
1190 '  SHELL SORT
1200 ' **********************
1210 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1220 PRINT #1, "Shell Sort.  ";
1230 L=(2^INT(LOG(R)/LOG(2)))-1
1240 L=INT(L/2):IF L<1 THEN RETURN
1250 FOR J=1 TO L
1260 FOR K=J+L TO R STEP L:I=K
1270 IF Y(I-L)<=Y(I) THEN 1300
1280 SWAP Y(I),Y(I-L)
1290 I=I-L:IF I>L THEN 1270
1300 NEXT K,J:GOTO 1240
1310 ' **********************
1320 '  HEAP SORT
1330 ' **********************
1340 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1350 PRINT #1, "Heap Sort.  ";
1360 M=R
1370 FOR I=INT(R/2) TO 1 STEP -1
1380 R0=I:GOSUB 1480
1390 NEXT I
1400 FOR M=R-1 TO 1 STEP -1
1410 SWAP Y(M+1),Y(1):R0=1:GOSUB 1480
1420 NEXT M
1430 RETURN
1440 ' **********************
1450 '  HEAP SORT SUBROUTINE
1460 ' **********************
1470 ' CHASE AN ELEMENT TO THE BOTTOM OF THE HEAP
1480 R1=R0+R0:IF R1>M THEN RETURN
1490 IF R1<>M THEN IF Y(R1)<Y(R1+1) THEN R1=R1+1
1500 IF Y(R0)<Y(R1) THEN SWAP Y(R0),Y(R1):R0=R1:GOTO 1480
1510 RETURN
1520 ' **********************
1530 '  QUICKSORT V.1
1540 ' **********************
1550 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1560 ' USES ARRAYS LT AND RT
1570 PRINT #1, "Quicksort V1.  ";
1580 S1=1:LT(1)=1:RT(1)=R
1590 L1=LT(S1):R1=RT(S1):S1=S1-1:L2=L1:R2=R1:F=-1
1600 IF L2>=R2 THEN 1640
1610 IF Y(L2)>Y(R2) THEN SWAP Y(L2),Y(R2):F=-F
1620 IF F<0 THEN R2=R2-1 ELSE L2=L2+1
1630 IF L2<R2 THEN 1610
1640 IF (L2-L1)>1 THEN S1=S1+1:LT(S1)=L1:RT(S1)=L2-1
1650 IF (R1-R2)>1 THEN S1=S1+1:LT(S1)=R2+1:RT(S1)=R1
1660 IF S1>0 THEN 1590
1670 RETURN
1680 ' **********************
1690 '  QUICKSORT V.2
1700 ' **********************
1710 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1720 ' USES ARRAYS LT AND RT
1730 PRINT #1, "Quicksort V2.  ";
1740 S1=1:LT(1)=1:RT(1)=R
1750 L1=LT(S1):R1=RT(S1):S1=S1-1
1760 L2=L1:R2=R1:X=Y(INT((L1+R1)/2))
1770 IF Y(L2)<X THEN L2=L2+1:GOTO 1770
1780 IF X<Y(R2) THEN R2=R2-1:GOTO 1780
1790 IF L2>R2 THEN 1820
1800 SWAP Y(L2),Y(R2):L2=L2+1:R2=R2-1
1810 IF L2<=R2 THEN 1770
1820 IF L2<R1 THEN S1=S1+1:LT(S1)=L2:RT(S1)=R1
1830 R1=R2:IF L1<R1 THEN 1760 ELSE IF S1>0 THEN 1750
1840 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0081

     Volume in drive A has no label
     Directory of A:\

    FILES81  TXT      1085   1-26-89  11:26a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   4:32p
    HOST2    BAS     12544  12-29-82
    HOST2    DOC       848   9-03-83  12:18a
    MAGDALEN BAS      1402   1-01-80  12:40a
    MODEM    ASM     56560   8-30-82   6:45p
    MODEM    COM      9623   8-30-82   6:56p
    SCNMAP   BAS      5888   2-24-83   6:20p
    SCNMAP   DOC      6315   2-24-83   5:26p
    SORTS    BAS      4864   4-24-82
    SORTS    DOC      1512   8-19-83   9:59p
    UNWS     ASM      8463   5-01-82
    UNWS     EXE      2816   8-17-82  10:32a
           14 file(s)     112652 bytes
                           44032 bytes free
