---
layout: page
title: "PC-SIG Diskette Library (Disk #81)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0081/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0081"
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

## FILES81.TXT

{% raw %}
```
Disk No:   81
Program Title: Communication No 1
PC-SIG version: 1.1

This disk enhances the Batch file capabilities of DOS.  An extensive
demonstration in tutorial form is included; it is remarkably good at
displaying the potential and capabilities of batch files.  Since all
files are readily available to read or print, you can easily adapt some
ideas for use in your own batch files.

Usage:  Communications.

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

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 198,85,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## HOST2.BAS

{% raw %}
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
{% endraw %}

## HOST2.DOC

{% raw %}
```
HOST2.DOC                                                          W.Bailey

HOST COMPUTER  Version 1.0 was not able to handle an abnormal termination
of communications.

Version 2.0 can sense and recover from an abnormal termination of
communications from within most of its operating states.

The initial password is WORD.
----------------------------------------------------------------------------
The following is a repeat of HOST.DOC on SVCS No. 16:

PROGRAM NAME: HOST.BAS
ABSTRACT: This program allows you to access an IBM PC from a remote location
for the purpose of transmitting or receiving an ASCII file. Upon receiving
a carrier from the remote location, the program requests a password for file
protection.
REQUIRES: IBM PC, ASYNC Communication board, Hayes Smartmodem
Instructions: Contained in the program body.

```
{% endraw %}

## MAGDALEN.BAS

{% raw %}
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
{% endraw %}

## MODEM.ASM

{% raw %}
```
	TITLE	'MODEM FOR THE IBM PERSONAL COMPUTER: PC/DOS'
	PAGE     63,132
;
;*    M  O  D  E  M   - -   FOR THE IBM PERSONAL COMPUTER       *
;*                                                              *
;*    This program was developed from                           *
;*         MODEM.ASM  (Version 3.0)                             *
;*         for CP/M to CP/M file transfers                      *
;*      BY Ward Christensen         (CPM-UG Disk # 25)          *
;*    Refer to the last section of this source file for         *
;*    a complete modification history and credits to            *
;*    those who contributed to this version.                    *
;*                                                              *
;* N O T I C E                                                  *
;*    This program is supplied for your personal and            *
;*    non-commercial use only. No commercial use permitted.     *
;*    Users of this program are granted limited rights to       *
;*    reproduce and distribute this program, provided           *
;*    the following conditions are met:                         *
;*                                                              *
;*    1) This program must be supplied in original form,        *
;*       with no modifications.                                 *
;*    2) Notices contained in this source file, and those       *
;*       produced by the executable program, must not be        *
;*       altered or removed.                                    *
;*    3) This program may not be sold. Providing this           *
;*       program for consideration of any sort, including       *
;*       copying or distribution fees, is prohibited.           *
;*    4) This program may not be used on timesharing            *
;*       systems where fees are charged for access,             *
;*       or or supplied as part of any other form of            *
;*       rental access computing, without the express           *
;*       written permission of the author.                      *
;*                                                              *
;*    PLEASE SEND PROBLEM REPORTS AND SUGGESTIONS               *
;*    TO:     John Chapman                                      *
;*            844 S. Madison St.                                *
;*            Hinsdale, Illinois  60521                         *
;*            Compuserve = 70205,1217                           *
	SUBTTL	MACRO DEFINITIONS	
	page
;
DOSCALL	MACRO	FUNCTION,AREA ;INVOKE DOS SERVICE
	IFNB	<AREA>
	MOV	DX,OFFSET AREA	;SET PARAMETER OFFSET
	ENDIF
	MOV	AH,FUNCTION	;DOS FUNCTION CODE
	INT	21H		;INVOKE DOS SERVICE
	ENDM
;
PRCHAR	MACRO	CHAR	;PRINT A CHARACTER
	IFNB	<CHAR>
	MOV	DL,CHAR	;CHAR TO DL REG
	ENDIF
	DOSCALL	DSPLO	; DOS PRINT CHARACTER FUNCTION
	ENDM
;
SCROLL	MACRO
	MOV	AX,600H	;AH=6 SCROLL, AL=0 ENTIRE WINDOW
	INT	10H	;INVOKE BIOS SCROLL ROUTINE
	ENDM
;
LOCATE	MACRO
	MOV	AH,2	;BIOS FUNCTION SELECT
	MOV	BH,0	;USE SCREEN 0
	INT	10H 	;INVOKE BIOS CURSOR POSITIONING
	ENDM
;
;
	SUBTTL	EQUATES
	page
;
CANFLG	EQU	1       	;NO CANCEL ABILITY
;
MODSNDB	EQU	020H    	;BIT TO TEST FOR SEND
MODSNDR	EQU	020H    	;VALUE WHEN READY
MODRCVB	EQU	001H    	;BIT TO TEST FOR RECEIVE
MODRCVR	EQU	001H    	;VALUE WHEN READY
;
BAUDRAT	EQU	0C2H    	;BAUD RATE OUTPUT
DTREADY EQU	01H		;MCR FLAG FOR DTR UP
;			
;ORIGMOD EQU	1DH     	;8 DATA, NO PARITY, ORIG
;ANSWMOD EQU	1EH     	;8 DATA, NO PARITY, ANSW
;
INITREQ	EQU	0       	;MODEM INIT. REQ'D?
INITC1	EQU	64H     	;FIRST INIT CHAR TO CTL PORT
INITC2	EQU	64H     	;2ND INIT CHAR TO CTL PORT
;
FASTCLK EQU	1       	;PUT 1 HERE FOR 4 MHZ CLOCK
ERRLIM	EQU	10      	;MAX ALLOWABLE ERRORS
EXITCHR	EQU	'W'-40H         ;CTL-W EXIT FROM T OR C
DISCCHR	EQU	'D'-40H 	;CTL-D DISCONNECTS MODEM T/C
CTLCCHR EQU	'I'-40H		;CTL-C REPLACEMENT (temporary)
CTLCHAR EQU	03H		;CTL-C ACTUAL      (temporary)
; 
;DEFINE ASCII CHARACTERS USED
;
SOH	EQU	01H     	;START OF HEADER
EOT	EQU	04H     	;END OF TRANSMISSION
ACK	EQU	06H     	;ACKNOWLEDGE
LF	EQU	0AH     	;LINEFEED
CR	EQU	0DH     	;CARRIAGE RETURN
NAK	EQU	15H     	;NEG ACKNOWLEDGE
CAN	EQU	18H     	;CANCEL
FF	EQU	0CH		;FORM FEED (clear screen)
	PAGE
;
; PC DOS EQUATES (VERSION 1.1)
;
REIPL	EQU	0		;PROGRAM TERMINATE
RDCON	EQU	1               ;KEYBOARD INPUT
WRCON	EQU	2               ;DISPLAY OUTPUT
PRTCHR	EQU	5		;PRINTER OUTPUT, CHAR IN DL
DCON    EQU	6               ;DIRECT CONSOLE I/O
PRINT	EQU	9               ;PRINT STRING
CONST	EQU	11      	;CONSOLE STAT
OPEN	EQU	15      	;0FFH=NOT FOUND
CLOSE	EQU	16      	;	"	"
SRCHF	EQU	17      	;	"	"
SRCHN	EQU	18      	;	"	"
ERASE	EQU	19      	;NO RET CODE
READ	EQU	20      	;0=OK, 1=EOF
WRITE	EQU	21      	;0=OK, 1=ERR, 2=?, 0FFH=NO DIR SPC
MAKE	EQU	22      	;0FFH=BAD
REN	EQU	23      	;0FFH=BAD
STDMA	EQU	26      	;SET DMA
FATADDR EQU	27		;FILE ALLOCATION TABLE ADDRESS
;
;
; d o s   f u n c t i o n s 
;
;
DSPLO	EQU	2
PSTRING	EQU	9
DRESET	EQU	0DH	
SELDSK	EQU	0EH
SRCHF	EQU	11H
SRCHN	EQU	12H
CDISK	EQU	19H
SETDTA	EQU	1AH
FATADDR	EQU	1BH
SETINTV	EQU	25H
GETDATE	EQU	2AH
GETTIME	EQU	2CH
;
;
;
; PC DOS FCB EQUATES (VERSION 1.1)
;
INT20H	EQU	DS:00H
FCB	EQU	DS:5CH
FCBNAME	EQU	DS:5DH
FCBEXT	EQU	DS:65H
FCBSZL 	EQU	DS:6CH
FCBSZH	EQU	DS:6DH
FCBCR  	EQU	DS:7CH
FCBRR 	EQU	DS:7DH
FCB2   	EQU	DS:6CH
	SUBTTL	'PREFIX, CONSTANTS AND WORKAREA'
	PAGE
MODEM  	SEGMENT PUBLIC 'CODE'
        ASSUME  CS:MODEM,DS:MODEM,ES:MODEM
;
;       ----------------
;       START OF ACTUAL PROGRAM AREA 
;	----------------
        ORG     100H
MAIN	PROC	FAR
	JMP	STARTS
OPTION	DB	0       	;PRIMARY OPTION
;
;DATAFLG IS USED BY THE "V" SUBCOMMAND -
;IT IS 0 WHEN A HEADER OR CKSUM IS BEING
;SENT/RCD, AND 1 IF "VIEWABLE" DATA (THE
;SECTOR ITSELF) IS
;
DATAFLG	DB	0       	;AT HEADER, FIRST
;
;
;SUB-OPTION TABLE.  IF AN OPTION IS IN EFFECT,
;	THE CHARACTER IS SET TO BINARY 0
;
OPTBL	EQU	OFFSET $ 
ANSWFLG DB	'A'     	;ANSWER MODE
DISCFLG	DB	'D'     	;DISCONNECT WHEN DONE
ECHOFLG	DB	'E'     	;TO ECHO AFTER XFER
DUMYFLG	DB	'U'		;DEFAULT UART FLAG
INITFLG DB	'I'		;TO INIT THE UART / MODEM
ORIGFLG DB	'O'     	;ORIGINATE MODE
QFLG	DB	'Q'     	;QUIET TRANSFER (NO MSGS)
RSEEFLG	DB	'R'     	;SEE WHAT'S RECEIVED
SSEEFLG	DB	'S'     	;SEE WHAT'S SENT
TERMFLG	DB	'T'     	;TO TERM AFTER XFER
VSEEFLG	DB	'V'     	;VIEW MESSAGES (NO HDR, ETC)
urt2flg db	'2'		;second UART
urt3flg db	'3'		;third UART
OPTBE	EQU     OFFSET $	;END OF OPTIONS
;
TABLESIZE EQU	OPTBE-OPTBL
;
;------------------------------------------------------------------
; ** added for COM1/2/3 Select support for PC              8/82/jac
;------------------------------------------------------------------
;
;
OFFDATP	EQU	0      ;DATA PORT                 OFFSET
OFFCTLP	EQU	5      ;MODEM STATUS REGISTER     OFFSET
OFFCTL2 EQU	4      ;MODEM CONTROL REGISTER    OFFSET
OFFCTL3	EQU	3      ;LINE CONTROL REGISTER     OFFSET
;                                                       
;
BASE1U	dw	03f8h	;base address uart 1 (COM1)
base2u	dw	02F8h   ;base address uart 2 (COM2)
base3u	dw	01F8h   ;base address uart 3 (COM3) ??NOT TESTED??
;
;
MODDATP	dw 	0      ;3F8H   	;DATA PORT
MODCTLP	dw 	0      ;3FDH   	;MODEM STATUS REGISTER
MODCTL2 dw 	0      ;3FCH   	;MODEM CONTROL REGISTER
MODCTL3	dw 	0      ;3FBH	;LINE CONTROL REGISTER
;
;
RCVSNO	DB	0       	;SECT # RECEIVED
SECTNO	DB	0       	;CURRENT SECTOR NUMBER 
ERRCT	DB	0       	;ERROR COUNT
;
;	FOLLOWING 3 USED BY DISK BUFFERING ROUTINES
;
EOFLG	DB	0       	;EOF FLAG (1=TRUE)
SECPTR	DW	DBUF
SECINBF	DB	0       	;# OF SECTORS IN BUFFER
;
;       HELP MSGS 
;
;
msg00	db	cr,lf
 db '+---------------------------------------------------------------------+',cr,lf
 db '|                                                                     |',cr,lf
 db '| M  O  D  E  M   - -   FOR THE IBM PERSONAL COMPUTER  (PC/DOS 1.1)   |',cr,lf
 db '|                                                                     |',cr,lf
 DB '|                                      All Rights Reserved            |',cr,lf
 db '|---------------------------------------------------------------------|',cr,lf
 db '|                                                                     |',cr,lf
 db '|  N O T I C E :       Commercial use forbidden.                      |',cr,lf
 db '|                                                                     |',cr,lf
 db '|  This program is provided for personal and non-commercial use only. |',cr,lf
 db '|  Sale is forbidden.         Users of this program are granted       |',cr,lf
 db '|  limited rights to reproduce and distribute this program, provided  |',cr,lf
 db '|  that a) the program is not sold, or provided for consideration     |',cr,lf
 db '|  of any sort, including copying or distribution fees greater than   |',cr,lf
 db '|  the face value of the media and postage. and b) the program is     |',cr,lf
 db '|  provided in unmodified form, with this notice, and all other       |',cr,lf
 db '|  documentation intact.                                              |',cr,lf
 db '|                                                                     |',cr,lf
 db '+---------------------------------------------------------------------+',cr,lf
 db 	cr,lf,0,1
;
;
MSG01	DB	CR,LF
;                1234567890123456789012345678901234567890123456789012345678901234567890
	DB	'----  M  O  D  E  M  ----  ',cr,lf,cr,lf
 	db 	'Converted from  MODEM 3.0 by Ward Christensen     ',cr,lf
	DB	'Sale, or any other commercial use forbidden',cr,lf
	DB	'Version 3.2 for IBM PC/DOS',cr,lf
	DB	'      R  E  A  D  Y        ',cr,lf  
 	db	cr,lf,'$',1,0
MSG01A	DB	'File Open, Ready to Receive',CR,LF,0
MSG02	DB	'Awaiting #',0
MSG03A	DB	'h rcd, not soh',CR,LF,0
MSG03	DB	'+++ TIMEOUT +++',0
MSG04	DB	'++ Bad Sector # in Hdr',CR,LF,0
MSG05	DB	'++ CKSUM ++',0
MSG06	DB	'Send # ',0
MSG07	DB	'h rcvd, not ack ',CR,LF,0
MSG08	DB	'Timeout on ack',CR,LF,0
MSG09	DB	'Modem Program Cancelled ',CR,LF,0
MSG10	DB	'File exists, Type Y to erase ',0
MSG11	DB	'Can not open file$'
MSG12	DB	'File open, Extent Length ',0
MSG13	DB	'Awaiting Initial nak',CR,LF,0
MSG14	DB	cr,lf,'Transfer Complete',CR,LF,0
MSG15	DB	cr,lf,'Press Return to Disconnect',0
MSG16	DB	'++ DISCONNECTED ++',0
MSG17	DB	cr,lf,'++ Do not Forget - The Modem is'
	DB	'NOT Disconnected',CR,LF,0
;	DB	'Use "M3 D" to Disconnect',CR,LF,0
MSG18	DB	'Multiple errors encountered. '
	DB	'Type Q to quit, R to Retry ',0
MSG19	DB	CR,LF,'Press Return to Continue'
	DB	CR,LF,0
MSG20	DB	'++ Unable to Receive Block'
	DB	CR,LF,'++ ABORTING ++$'
MSG21	DB	'Can not Send Sector '
	DB	'- ABORTING',CR,LF,'$'
MSG22	DB	'++ ERROR - Can not make file',CR,LF
	DB	'++ Directory must be full',CR,LF,'$'
MSG22A	DB	'++ Can not Close Files ++$'
MSG23	DB	'++ File Read ERROR ++$'
MSG24	DB	'++ ERROR Writing File ++',CR,LF,'$'
MSG25	DB	'Invalid option on modem command',CR,LF
	DB      'PRESS RETURN FOR HELP, CTL-C IF NOT',CR,LF,1,0
MSG26	DB      'Format for command is',CR,LF,CR,LF
	DB      'MODEM # FILENAME',CR,LF,CR,LF
	DB      'Where # is a 1 character primary option,',CR,LF
	DB      ' which may be followed by sub-options,',CR,LF
;	DB      ' and by ".xxx" to set baud rate to xxx'
	DB      CR,LF,CR,LF,1
	DB      'Primary Options',CR,LF
	DB      '    S to send a file',CR,LF
	DB      '    R to receive a file',CR,LF
        DB      '    T to act as a terminal',CR,LF
	DB      '    E to act as a computer (echo data)',CR,LF
;	DB      '    D to disconnect the phone'
;	DB      '    (S100 modems only)',CR,LF
	DB      '    H to print this help file'
	DB      CR,LF,CR,LF,1
	DB      'Secondary options',CR,LF
;	DB      '    A answer mode',CR,LF
;	DB      '    O originate mode',CR,LF
;	DB      '    D disconnect after execution',CR,LF
;   	DB	'    I initialize uart  to defaults 300,n,8,1',CR,LF
	DB      '    T go to terminal mode after file xfer',CR,LF
	DB      '    E go to echo mode after file xfer',CR,LF
	DB      '    Q quiet mode - no status msgs',CR,LF
	DB      '    R show chars received',CR,LF
	DB      '    S show chars sent',CR,LF
	DB      '    V view file sent/received (no status)',CR,LF
;	DB	'    2 switch to COM2: - second rs232 port',CR,LF
;	DB	'    3 switch to COM3: - third  rs232 port',CR,LF
	DB      CR,LF,'FOR EXAMPLES, TYPE MODEM X',CR,LF,1,0
MSG27	DB      'Send file, ',CR,LF
	DB      '    MODEM S fn.ft',CR,LF
	DB      'Send another file',CR,LF
	DB      '    MODEM S fn.ft',CR,LF
;	DB      'Then send a third file at 450 baud and disconnect'
;	DB      CR,LF,'    MODEM SD.450 fn.ft',CR,LF
	DB      'Act as a terminal ',CR,LF
	DB      '    MODEM T',CR,LF
	DB      ' Use ctl-D to disconnect)',CR,LF
	DB      'Receive file,  view it',CR,LF
	DB      '    MODEM RV fn.ft',CR,LF,1,0
;
DBUF	DB	128*16 DUP(?)	;16 LOGICAL SECTOR BUFFER # 1
				;   (* Four physical sectors)
	DB	128*16 DUP(?)	;16 LOGICAL SECTOR BUFFER # 2
				;   (* Four physical sectors)
				; TOTAL = one track on PC/DOS (8/512)
;	DB	'POOT'
	SUBTTL	'MAIN PROGRAM SECTION'
    	PAGE
STARTS:
;
;=============================================================================
;
;       CLEAR THE SCREEN (cursor = 1,1)
;
	push	dx
	SUB	CX,CX		;UPPER LEFT CORNER
	MOV	DX,184FH	;BOTTOM RIGHT CORNER
	MOV	BH,7		;NORMAL ATTRIB FOR CLS
	SCROLL			;INVOKE BIOS TO CLEAR SCREEN
	SUB	DX,DX		;POINT TO ROW 1,COL 1
	LOCATE			;SET THE CURSOR TO TOP LEFT
;			       
;	PRINT THE STARTUP MESSAGE 
;
       	MOV	DX,OFFSET MSG01	;GET ID MESSAGE
	MOV	CL,PRINT
	CALL	BDOS     	;PRINT ID MESSAGE
	pop	dx
;
;=============================================================================
;
;
;SAVE PRIMARY OPTION, VALIDATE SECONDARY OPT.
;
	CALL	PROCOPT
;	        	IF WE RETURN FROM PROCOPT, A VALID
;			ACTION OPTION (not help or examples)
;			WAS FOUND .. PROCESSING CONTINUES
;
;INIT THE MODEM OR SERIAL PORT   (dtr UP always - THEN CHECK FOR "i" OPT.
;
	CALL	INITMOD
;
;MOVE THE FILENAME FROM FCB 2 TO FCB 1
;
	CALL	MOVEFCB
;
;
;GOBBLE UP GARBAGE CHARS FROM THE LINE
;PRIOR TO RECEIVE OR SEND
;
	PUSH	DX
	MOV	DX,MODDATP
	IN	AL,DX
	IN	AL,DX
	POP	DX
;
;JMP TO APPROPRIATE FUNCTION
;
	MOV	AL,OPTION	;GET PRIMARY OPTION
;
	CMP	AL,'C'  	;(COMPAT W/EARLIER
	JNZ	L00001
	JMP	TRMECHO 	;OPTION "COMPUTER")
;
L00001:	CMP	AL,'E'  	;TERMINAL IN ECHO
	JNZ	L00002
	JMP	TRMECHO 	;..MODE?
;
L00002:	CMP	AL,'T'	        ;TERMINAL..
	JNZ	L00003
	JMP	TERM	        ;..MODE?
;
L00003  LABEL	NEAR
;	CMP	AL,'D'
;	JNZ	L00004
;	JMP	DISCONN
;L00004  LABEL   NEAR
;
	CMP	AL,'S'	        ;SEND..
	JNZ	L00005
	JMP	SENDFIL	        ;..A FILE?
;
L00005:	CMP	AL,'R'	        ;RECEIVE..
	JNZ	L00006
	JMP	RCVFIL	        ;..A FILE?
;
;INVALID OPTION
;

L00006:	JMP	BADOPT          ;BAD OPTIONS !
;
;RETURN TO PC DOS VIA INT 20H IN SEGMENT PREFIX
;
EXIT:	PUSH	ES		;SET RETURN SEGMENT TO STACK
	SUB	AX,AX		;CLEAR A REGISTER
	PUSH	AX		;PUT ZERO RETURN ADDR TO STACK
	RET			;FAR RETURN TO FORCE CS TO ...
MAIN	ENDP                    ;.. POINT TO SEGMENT PREFIX
; * * * * * * * * * * * * * * * * * * * *
;					*
;	TERM: TERMINAL MODE		*
;					*
; * * * * * * * * * * * * * * * * * * * *
;
;THIS PROGRAM SIMPLY SENDS KEYED CHARACTERS
;DOWN THE LINE, AND DISPLAYS CHARACTERS
;RECEIVED FROM THE LINE.  THIS MAKES IT
;SUITABLE FOR COMMUNICATION WITH TIME SHARING
;COMPUTERS, CBBS'S, OR ANOTHER PROGRAM
;RUNING "MODEM E" (ECHO MODE)
;
;TYPEZZ THE "EXITCHR" (ORIGINALLY CTL-E) TO EXIT.
;OR THE "DISCCHR" (ORIGINALLY CTL-D) TO DISCONN.
;
;A FUTURE ENHANCEMENT WILL BE TO WRITE THE
;RECEIVED DATA IN MEMORY, AND ALLOW IT TO
;BE WRITTEN TO DISK
;
TERM	PROC	NEAR
     	CALL	STAT	        ;LOCAL CHAR KEYED?
	JNZ	L00007
	JMP	TERML     	;..NO, CHECK LINE
L00007:	CALL	KEYIN   	;GET CHAR
	CMP	AL,EXITCHR	;TIME TO END?
	JNZ	L00008
	JMP	CKDIS	        ;YES, CK DISCONN
L00008:	CMP	AL,DISCCHR	;DISCONNECT REQUEST?
	JNZ	L00009
	JMP	DISCONN	        ;YES, DO IT
L00009: PUSH	DX
	MOV	DX,MODDATP
	OUT	DX,AL	        ;SEND THE CHAR
	POP	DX
;
;SEE IF CHAR FROM LINE
;
TERML:	PUSH	DX
	MOV	DX,MODCTLP
	IN	AL,DX	        ;READ STATUS
	POP	DX
	AND	AL,MODRCVB	;ISOLATE BIT
	CMP	AL,MODRCVR	;READY?
	JZ	L00010
	JMP	TERM    	;..NO, LOOP
L00010: PUSH	DX
	MOV	DX,MODDATP
	IN	AL,DX   	;READ DATA
	POP	DX
	CALL	TYPEZZ  	;TYPEZZ IT
	JMP	TERM    	;LOOP
TERM	ENDP
; 
; * * * * * * * * * * * * * * * * * * * *
;					*
;	TRMECHO: TERMINAL WITH ECHO	*
;					*
; * * * * * * * * * * * * * * * * * * * *
;
;TERMINAL PROGRAM WITH ECHO - SEE NOTES
;UNDER "TERM" ABOVE
;
;C A U T I O N   DON'T RUN WITH BOTH COMPUTERS
;IN "ECHO" MODE - LINE ERRORS (OR ANY CHAR)
;WILL BE ECHOED BACK AND FORTH AD INFINITUM.
;
TRMECHO PROC	NEAR
        PUSH	DX
	MOV	DX,MODCTLP
	IN	AL,DX	        ;GET STATUS
	POP	DX
	AND	AL,MODRCVB	;ISOLATE READY BIT
	CMP	AL,MODRCVR	;ARE WE READY?
	JNZ	L00011
	JMP	LINECHR 	;YES, READ THE CHR
L00011:	CALL	STAT    	;CHECK LOCAL KB
	JNZ	L00012
	JMP	TRMECHO 	;..NO CHAR
L00012:	CALL	KEYIN   	;GET LOCAL CHAR
	CMP	AL,EXITCHR	;END?
	JNZ	L00013
	JMP	CKDIS   	;YES, CK DISCONN, EXIT
L00013:	CMP	AL,DISCCHR	;DISCONN?
	JNZ	L00014
	JMP	DISCONN 	;..YES, DO IT.
L00014: PUSH	DX
	MOV	DX,MODDATP
	OUT	DX,AL   	;SEND CHAR
	POP	DX
	CALL	TYPEZZ  	;ECHO IT LOCALLY
	JMP	TRMECHO 	;..AND LOOP
;
;GOT CHAR FROM LINE
;
LINECHR:
        PUSH	DX
	MOV	DX,MODDATP
	IN	AL,DX   	;GET CHAR
	OUT	DX,AL   	;ECHO IT
	POP	DX
	CALL	TYPEZZ  	;TYPEZZ IT
	JMP	TRMECHO 	;LOOP
TRMECHO	ENDP
;
; * * * * * * * * * * * * * * * * * * * *
;					*
;	SENDFIL: SENDS A CP/M FILE	*
;					*
; * * * * * * * * * * * * * * * * * * * *
;
;THE CP/M FILE SPECIFIED IN THE MODEM COMMAND
;IS TRANSFERRED OVER THE PHONE TO ANOTHER
;COMPUTER RUNNING MODEM WITH THE "R" (RECEIVE)
;OPTION.  THE DATA IS SENT ONE SECTOR AT A
;TIME WITH HEADERS AND CHECKSUMS, AND RE-
;TRANSMISSION ON ERRORS.  
;
SENDFIL PROC 	NEAR
        CALL	OPENFIL 	;OPEN THE FILE
	MOV	DL,80   	;WAIT 80 SEC..
	CALL	WAITNAK 	;..FOR INITIAL NAK
SENDLP:	CALL	RDSECT  	;READ A SECTOR
	JAE	L00016
	JMP	SENDEOF 	;SEND EOF IF DONE
L00016:	CALL	INCRSNO 	;BUMP SECTOR #
	XOR	AL,AL   	;ZERO ERROR..
	MOV     ERRCT,AL	;..COUNT
SENDRPT:
        CALL	SENDHDR	        ;SEND A HEADER
	CALL	SENDSEC 	;SEND DATA SECTOR
	CALL	SENDCKS 	;SEND CKSUM
	CALL	GETACK  	;GET THE ACK
	JAE	L00017
	JMP	SENDRPT 	;REPEAT IF NO ACK
L00017:	JMP	SENDLP  	;LOOP UNTIL EOF
;
;FILE SENT, SEND EOT'S
;
SENDEOF:
	MOV	AL,EOT  	;SEND..
	CALL	SEND    	;..AN EOT
	CALL	GETACK  	;GET THE ACK
	JAE	L00018
	JMP	SENDEOF 	;LOOP IF NO ACK
L00018:	JMP	DONE    	;ALL DONE
SENDFIL	ENDP
;
; * * * * * * * * * * * * * * * * * * * *
;					*
;	RCVFIL: RECEIVE A FILE		*
;					*
; * * * * * * * * * * * * * * * * * * * *
;
;RECEIVES A FILE IN BLOCK FORMAT AS SENT
;BY ANOTHER PERSON DOING "MODEM S FN.FT".
;
RCVFIL	PROC	NEAR
       	CALL	ERASFIL 	;ERASE THE FILE
	CALL	MAKEFIL 	;..THEN MAKE NEW
	MOV	AL,QFLG 	;SEE IF IN QUIET MODE
	OR	AL,AL
	JZ	L00019
	JMP	RCVLP   	;NOT IN QUIET MODE, SKIP MSG
L00019:	PUSH	BX
	MOV	BX,OFFSET MSG01A
	CALL	ILPRT   	;PRINT:
	POP	BX
RCVLP:	CALL	RCVSECT	        ;GET A SECTOR
	JAE	L00020
	JMP	RCVEOT  	;GOT EOT
L00020:	CALL	WRSECT  	;WRITE THE SECTOR
	CALL	INCRSNO 	;BUMP SECTOR #
	CALL	SENDACK 	;ACK THE SECTOR
	JMP	RCVLP   	;LOOP UNTIL EOF
;
;GOT EOT ON SECTOR - FLUSH BUFFERS, END
;
RCVEOT:	CALL	WRBLOCK 	;WRITE THE LAST BLOCK
	CALL	SENDACK 	;ACK THE SECTOR
	CALL	CLOSFIL 	;CLOSE THE FILE
	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	L00021
	JMP	CKDIS   	;YES, CK DISCONN, END.
L00021:	JMP	DONE    	;DISCONN IF REQ'D
RCVFIL	ENDP
;
; * * * * * * * * * * * * * * * * * * * *
;					*
;		SUBROUTINES		*
;					*
; * * * * * * * * * * * * * * * * * * * *
;
;
;---->	RCVSECT: RECEIVE A SECTOR
;
;RETURNS WITH CARRY SET IF EOT RECEIVED.
;
RCVSECT PROC	NEAR
	XOR	AL,AL   	;GET 0
	MOV    	ERRCT,AL	;INIT ERROR COUNT
RCVRPT:	MOV	AL,QFLG 	;QUIET?
	OR	AL,AL
	JNZ	L00022
	JMP	RCVSQ   	;YES, NO STAT MSG.
L00022:	PUSH	BX
	MOV	BX,OFFSET MSG02
	CALL	ILPRT   	;PRINT:
	POP	BX
	MOV	AL,SECTNO	;GET SECTOR #
	INC	AL      	;(REAL INR LATER)
	CALL	HEXO    	;PRINT IN HEX
	CALL	CRLF    	;..THEN CRLF
;
RCVSQ:	MOV	CH,10   	;10 SEC TIMEOUT
	CALL	RECV    	;GET SOH/EOT
	JAE	L00023
	JMP	RCVSTOT 	;TIMEOUT
L00023:	CMP	AL,SOH  	;GET SOH?
	JNZ	L00024
	JMP	RCVSOH  	;..YES
;
;EARLIER VERS. OF MODEM PROG SENT SOME NULLS -
;IGNORE THEM
;
L00024:	OR	AL,AL   	;00 FROM SPEED CHECK?
	JNZ	L00025
	JMP	RCVSQ   	;YES, IGNORE IT
L00025:	CMP	AL,EOT  	;END OF TRANSFER?
	STC             	;RETURN WITH CARRY..
	JNZ	L00026
	RET             	;..SET IF EOT
;
;DIDN'T GET SOH  OR EOT - 
;
L00026:	MOV	CH,AL   	;SAVE CHAR
	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..MODE?
	JNZ	L00027
	JMP	RCVSEH  	;YES, PRT.MSG
L00027:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	RCVSEH 
	JMP	RCVSERR 	;YES, SKIP MSG
RCVSEH:	MOV	AL,CH   	;GET CHAR
	CALL	HEXO    	;SHOW IN HEX
	PUSH	BX
	MOV	BX,OFFSET MSG03
	CALL	ILPRT   	;PRINT:
	POP	BX
;
;DIDN'T GET VALID HEADER - PURGE THE LINE,
;THEN SEND NAK.
;
RCVSERR:
	MOV	CH,1    	;WAIT FOR 1 SEC..
	CALL	RECV    	;..WITH NO CHARS
	JNAE	L00029
	JMP	RCVSERR 	;LOOP UNTIL SENDER DONE
L00029:	MOV	AL,NAK  	;SEND..
	CALL	SEND    	;..THE NAK
	MOV	AL,ERRCT	;ABORT IF..
	INC	AL      	;..WE HAVE REACHED..
	MOV    	ERRCT,AL	;..THE ERROR..
	CMP	AL,ERRLIM	;..LIMIT?
	JAE	L00030
	JMP	RCVRPT  	;..NO, TRY AGAIN
;
;10 ERRORS IN A ROW - 
;
L00030:	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..FILE?
	JNZ	L00031
	JMP	RCVCKQ  	;YES, ASK RETRY/QUIT
L00031:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	RCVCKQ 
	JMP	RCVSABT 	;ABORT
RCVCKQ:	CALL	CKQUIT  	;RETRY/QUIT?
	JNZ	RCVSABT
	JMP	RCVSECT 	;TRY AGAIN
;
RCVSABT:
	CALL	CLOSFIL 	;KEEP WHATEVER WE GOT
	MOV	DX,OFFSET MSG20
	CALL	ERXIT
;
;TIMEDOUT ON RECEIVE
;
RCVSTOT:
        STI
	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..MODE?
	JNZ	L00034
	JMP	RCVSPT  	;YES, PRT MSG
L00034:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	RCVSPT 
	JMP	RCVSERR 	;YES, NO MSG
RCVSPT:	PUSH	BX
	MOV	BX,OFFSET MSG03
	CALL	ILPRT
	POP	BX
RCVPRN:	MOV	AL,ERRCT	;PRINT ERROR..
	CALL	HEXO    	;..COUNT
	CALL	CRLF
	JMP	RCVSERR 	;BUMP ERR CT, ETC.
;
;GOT SOH - GET BLOCK #, BLOCK # COMPLEMENTED
;
RCVSOH:	MOV	CH,1    	;TIMEOUT = 1 SEC
	CALL	RECV    	;GET SECTOR
	JAE	L00036
	JMP	RCVSTOT 	;GOT TIMEOUT
L00036:	MOV	DH,AL   	;D=BLK #
	MOV	CH,1    	;TIMEOUT = 1 SEC
	CALL	RECV    	;GET CMA'D SECT #
	JAE	L00037
	JMP	RCVSTOT 	;TIMEOUT
L00037:	NOT	AL      	;CALC COMPLEMENT
	CMP	AL,DH   	;GOOD SECTOR #?
	JNZ	L00038
	JMP	RCVDATA 	;YES, GET DATA
;
;GOT BAD SECTOR #
;
L00038:	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..MODE?
	JNZ	L00039
	JMP	RCVBSE  	;..YES, PRT MSG
L00039:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	RCVBSE 
	JMP	RCVSERR 	;..YES, NO MSG
;
RCVBSE:	PUSH	BX
	MOV	BX,OFFSET MSG04
	CALL	ILPRT   	;PRINT:
	POP	BX
	JMP	RCVSERR 	;BUMP ERROR CT.
;
;
RCVDATA:
	MOV	AL,DH   	;GET SECTOR #
	MOV   	RCVSNO,AL	;SAVE IT
	MOV	AL,1    	;SHOW..
	MOV   	DATAFLG,AL	;GETTING DATA
	MOV	CL,0    	;INIT CKSUM
	MOV	BX,80H  	;POINT TO BUFFER
	CLI
RCVCHR:	MOV	CH,1    	;1 SEC TIMEOUT
	CALL	RECV    	;GET CHAR
	JAE	L00041
	JMP	RCVSTOT 	;TIMEOUT
L00041:	MOV	BYTE PTR [BX],AL ;STORE CHAR
	INC	BL      	;DONE?
	JZ	L00042
	JMP	RCVCHR  	;NO, LOOP
;
;VERIFY CHECKSUM
;
L00042:	MOV	DH,CL   	;SAVE CHECKSUM
	XOR	AL,AL   	;SHOW..
	MOV    	DATAFLG,AL	;..END OF DATA
	MOV	CH,1    	;TIMEOUT LEN.
	CALL	RECV    	;GET CHECKSUM
	JAE	L00043
	JMP	RCVSTOT 	;TIMEOUT
L00043:	STI
	CMP	AL,DH   	;CHECKSUM OK?
	JZ	L00044
	JMP	RCVCERR 	;NO, ERROR
;
;GOT A SECTOR, IT'S A DUP IF = PREV,
;	OR OK IF = 1 + PREV SECTOR
;
L00044:	MOV	AL,RCVSNO	;GET RECEIVED
	MOV	CH,AL   	;SAVE IT
	MOV	AL,SECTNO	;GET PREV
	CMP	AL,CH   	;PREV REPEATED?
	JNZ	L00045
	JMP	RECVACK 	;ACK TO CATCH UP
L00045:	INC	AL      	;CALC NEXT SECTOR #
	CMP	AL,CH   	;MATCH?
	JZ	L00046
	JMP	ABORT   	;NO MATCH - STOP SENDER, EXIT
L00046:	RET             	;CARRY OFF - NO ERRORS
;
;GOT CKSUM
;
RCVCERR:
	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..MODE?
	JNZ	L00047
	JMP	RCVCPR  	;..YES, PRT MSG
L00047:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	RCVCPR 
	JMP	RCVSERR 	;YES, NO MSG
RCVCPR:	PUSH	BX
	MOV	BX,OFFSET MSG05
	CALL	ILPRT
	POP	BX
	JMP	RCVPRN  	;PRINT ERROR #
;
;PREV SECT REPEATED, DUE TO THE LAST ACK
;BEING GARBAGED.  ACK IT SO SENDER WILL CATCH UP 
;
RECVACK:
	CALL	SENDACK 	;SEND THE ACK,
	JMP	RCVSECT 	;GET NEXT BLOCK
;
;SEND AN ACK FOR THE SECTOR
;
SENDACK:
	MOV	AL,ACK  	;GET ACK
	CALL	SEND    	;..AND SEND IT
	RET
RCVSECT ENDP
;
;---->	SENDHDR: SEND THE SECTOR HEADER
;
;SEND: (SOH) (BLOCK #) (COMPLEMENTED BLOCK #)
;
SENDHDR PROC	NEAR
	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	L00049
	JMP	SENDHNM 	;YES, SKIP STATUS MSG.
L00049:	PUSH	BX
	MOV	BX,OFFSET MSG06
	CALL	ILPRT   	;PRINT:
	POP	BX
	MOV	AL,SECTNO	;PRINT..
	CALL	HEXO    	;..SECT #
	CALL	CRLF    	;..THEN CR/LF
;
SENDHNM:
        MOV	AL,SOH  	;SEND..
	CALL	SEND    	;..SOH,
	MOV	AL,SECTNO	;THEN SEND..
	CALL	SEND    	;..SECTOR #
	MOV	AL,SECTNO	;THEN SENDOR #
	NOT	AL      	;..COMPLEMENTED..
	CALL	SEND    	;..SECTOR #
	RET             	;FROM SENDHDR
SENDHDR ENDP
;
;---->	SENDSEC: SEND THE DATA SECTOR
;
;WHILE SENDING THE SECTOR, THE "DATAFLG" IS SET
;SUCH THAT IF "V" (VIEW THE FILE) WAS REQUESTED,
;THE "SHOW" ROUTINE WILL PRINT THE DATA, BUT NOT
;THE HDR OR CKSUM, OR ANY NON-FATAL MSGS.
;
SENDSEC PROC	NEAR
	MOV	AL,1    	;SHOW NOW AT DATA..
	MOV    	DATAFLG,AL	;..FOR VIEW COMMAND
	MOV	CL,0    	;INIT CKSUM
	MOV	BX,80H  	;POINT TO BUFFER
SENDC:	MOV	AL,BYTE PTR [BX] ;GET A CHAR
	CALL	SEND    	;SEND IT
	INC	BL      	;POINT TO NEXT CHAR
	JZ	L00050
	JMP	SENDC   	;LOOP IF <100H
L00050:	XOR	AL,AL   	;SHOW NOT INTO DATA..
	MOV   	DATAFLG,AL	;..FOR VIEW COMMAND
	RET             	;FROM SENDSEC
SENDSEC ENDP
;
;---->	SENDCKS: SEND THE CHECKSUM
;
SENDCKS PROC	NEAR
	MOV	AL,CL   	;SEND THE..
	CALL	SEND    	;..CHECKSUM
	RET             	;FROM SENDCKS
SENDCKS	ENDP
;
;---->	GETACK: GET THE ACK ON THE SECTOR
;
;RETURNS WITH CARRY CLEAR IF ACK RECEIVED.
;IF AN ACK IS NOT RECEIVED, THE ERROR COUNT
;IS INCREMENTED, AND IF LESS THAN "ERRLIM",
;CARRY IS SET AND CONTROL RETURNS.  IF THE
;ERROR COUNT IS AT "ERRLIM", THE PROGRAM
;ABORTS IF IN "QUIET" MODE, OR ASKS THE
;USER FOR QUIT/RETRY IF NOT.
;
GETACK  PROC	NEAR
       	MOV	CH,10   	;WAIT 10 SECONDS MAX
	CALL	RECVDG  	;RECV W/GARBAGE COLLECT
	JAE	L00051
	JMP	GESATOT 	;TIMED OUT
L00051:	CMP	AL,ACK  	;OK? (CARRY OFF IF =)
	JNZ	L00052
	RET             	;YES, RET FROM GETACK
;
L00052  LABEL   NEAR
        IF      CANFLG
	CMP	AL,CAN  	;CANCEL TRANSMISSION?
	JNZ	L00053
	JMP	ABORT   	;..YES
L00053  LABEL	NEAR
	ENDIF
;
	MOV	CH,AL   	;SAVE CHAR
	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	L00054
	JMP	ACKERR  	;..YES, NO MSG
L00054:	MOV	AL,CH   	;GET CHAR
	CALL	HEXO    	;PRINT IN HEX
	PUSH	BX
	MOV	BX,OFFSET MSG07
	CALL	ILPRT   	;PRINT:
	POP	BX
;
;TIMEOUT OR ERROR ON ACK - BUMP ERROR COUNT
;
ACKERR:	MOV	AL,ERRCT	;GET COUNT
	INC	AL      	;BUMP IT
	MOV    	ERRCT,AL	;SAVE BACK
	CMP	AL,ERRLIM	;AT LIMIT?
	JNB	L00055
	RET             	;NOT AT LIMIT
;
;REACHED ERROR LIMIT
;
L00055:	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..FILE?
	JNZ	L00056
	JMP	GACKV   	;YES, ASK QUIT/RETRY
L00056:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	GACKV
	JMP	CSABORT 	;..YES, NO MCG
GACKV:	CALL	CKQUIT  	;SEE IF WANT TO QUIT
	STC             	;TO SHOW NO ACK
	JNZ	CSABORT
	RET             	;KEEP ON TRYIN'
CSABORT:
	MOV	DX,OFFSET MSG21
	CALL	ERXIT
GETACK	ENDP
;
;TIMEOUT GETTING ACK
;
GESATOT PROC	NEAR
	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	L00059
	JMP	ACKERR  	;YES, NO MSG
L00059:	PUSH	BX
	MOV	BX,OFFSET MSG08
	CALL	ILPRT   	;PRINT:
 	POP	BX
	JMP	ACKERR
GESATOT	ENDP
; 
;---->	CKABORT: CHECK FOR LOCAL ABORT
;
;IF THE USER WANTS TO CANCEL THE TRANSMISSION,
;TYPING CTL-X WILL ABORT IT.  NOTE THIS TEST
;IS NOT MADE IF IN QUIET (NO CONSOLE I/O) MODE.
;
CKABORT PROC    NEAR
	MOV	AL,VSEEFLG	;VIEWING?
	OR	AL,AL
	JNZ	L00060
	JMP	CKABGO  	;YES, CHECK
L00060: MOV	AL,QFLG		;SUPPRESSED..
	OR	AL,AL   	;..CONSOLE I/O?
	JNZ	L00061
	RET             	;YES, NO TEST
;
L00061  LABEL	NEAR
	IF NOT CANFLG
	RET
	ENDIF
;
CKABGO:	CALL	STAT    	;KEY PRESSED?
	JNZ	L00062
	RET             	;NOTHING FROM KEYBOARD
L00062:	CALL	KEYIN   	;GET DATA
	CMP	AL,EXITCHR	;TIME TO END?
	JZ	ABORT  
	RET             	;NO, CONTINUE
; 
ABORT:	NOP			;LEA	SP,STACK
ABORTL:	MOV	CH,1    	;1 SEC. W/O CHARS.
	CALL	RECV
	JNAE	L00064
	JMP	ABORTL  	;LOOP UNTIL SENDER DONE
L00064:	MOV	AL,CAN  	;CONTROL X
	CALL	SEND    	;STOP SENDING END
ABORTW:	MOV	CH,1    	;1 SEC W/O CHARS.
	CALL	RECV
	JNAE	L00065
	JMP	ABORTW  	;LOOP UNTIL SENDER DONE
L00065:	MOV	AL,' '  	;GET A SPACE...
	CALL	SEND    	;TO CLEAR OUT CONTROL X
	PUSH	BX
	MOV	BX,OFFSET MSG09
	CALL	ILPRT   	;EXIT WITH ABORT MSG
	POP	BX
	JMP	CKDIS   	;CHECK FOR DISCONN.
CKABORT ENDP
;
;---->	INCRSNO: INCREMENT SECTOR #
;
INCRSNO PROC	NEAR
	MOV	AL,SECTNO	;INCR..
	INC	AL      	;..SECT..
	MOV    	SECTNO,AL	;..NUMBER
	RET
INCRSNO ENDP
;
;---->	ERASFIL: ERASE THE INCOMING FILE.
;
;IF IT EXISTS, ASK IF IT MAY BE ERASED.
;
ERASFIL PROC 	NEAR
	MOV	DX,OFFSET FCB  	;POINT TO CTL BLOCK
	MOV	CL,SRCHF	;SEE IF IT..
	CALL	BDOS    	;..EXISTS
	INC	AL      	;FOUND?
	JNZ	L00066
	RET             	;..NO, RETURN
L00066:	PUSH	BX
	MOV	BX,OFFSET MSG10
	CALL	ILPRT   	;PRINT:
	POP	BX
	CALL	KEYIN   	;GET CHAR
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH
	CALL	TYPEZZ  	;ECHO
	POP	AX
	XCHG	AL,AH
	SAHF	
	AND	AL,5FH  	;MAKE UPPER CASE
	CMP	AL,'Y'  	;WANT ERASED?
	JZ	L00067
	JMP	CKDIS   	;QUIT IF NOT ERASE
L00067:	CALL	CRLF    	;BACK TO START OF LINE
;
;ERASE OLD FILE
;
	MOV	DX,OFFSET FCB  	;POINT TO FCB
	MOV	CL,ERASE	;GET BDOS FNC
	CALL	BDOS    	;DO THE ERASE
	RET             	;FROM "ERASFIL"
ERASFIL	ENDP
;
;---->	MAKEFIL: MAKES THE FILE TO BE RECEIVED
;
MAKEFIL PROC	NEAR
	MOV	DX,OFFSET FCB  	;POINT TO FCB
	MOV	CL,MAKE 	;GET BDOS FNC
	CALL	BDOS    	;TO THE MAKE
	INC	AL      	;FF=BAD?
	JZ	L00068
	RET             	;OPEN OK
;DIRECTORY FULL - CAN'T MAKE FILE
L00068:	MOV	DX,OFFSET MSG22
	CALL	ERXIT
MAKEFIL	ENDP
;
;---->	OPENFIL: OPENS THE FILE TO BE SENT
;
OPENFIL PROC	NEAR
	MOV	DX,OFFSET FCB  	;POINT TO FILE
	MOV	CL,OPEN 	;GET FUNCTION
	CALL	BDOS    	;OPEN IT
	INC	AL      	;OPEN OK?
	JZ	L00069
	JMP	OPENOK  	;..YES
L00069:	PUSH	DX
	MOV	DX,OFFSET MSG11
	CALL	ERXIT   	;..NO, ABORT
	POP	DX
;
OPENOK:
	PUSH	BX
	MOV	BX,OFFSET MSG12
	CALL	ILPRT   	;PRINT:
	POP	BX
	MOV	AL,FCBSZH	;GET FILE SIZE HIGH ORDER
	CALL	HEXO    	;PRINT IN HEX
	MOV	AL,FCBSZL	;GET FILE SIZE LOW ORDER
	CALL	HEXO    	;PRINT IN HEX
	MOV	AL,'H'
	CALL	TYPEZZ  	;PRINT 'H' AFTER NUMBER
	CALL	CRLF    	;..THEN CRLF
	RET
OPENFIL ENDP
;
;---->	CLOSFIL: CLOSES THE RECEIVED FILE
;
CLOSFIL PROC	NEAR
	MOV	DX,OFFSET FCB  	;POINT TO FILE
	MOV	CL,CLOSE	;GET FUNCTION
	CALL	BDOS    	;CLOSE IT
	INC	AL      	;CLOSE OK?
	JZ	L00070
	RET             	;..YES, RETURN
L00070:	MOV	DX,OFFSET MSG22A
	CALL	ERXIT   	;..NO, ABORT
CLOSFIL ENDP
;
;---->	RDSECT: READS A SECTOR
;
;FOR SPEED, THIS ROUTINE BUFFERS UP 16
;SECTORS AT A TIME.
;
RDSECT  PROC	NEAR
       	MOV	AL,SECINBF	;GET # SECT IN BUFF.
	DEC	AL      	;DECREMENT..
	MOV    	SECINBF,AL	;..IT
	JNS	L00071
	JMP	RDBLOCK 	;EXHAUSTED?  NEED MORE.
L00071:	MOV	BX,SECPTR	;GET POINTER
	MOV	DX,80H  	;TO DATA 
	CALL	MOVE128 	;MOVE TO BUFFER
	MOV	SECPTR,BX	;SAVE BUFFER POINTER
	RET             	;FROM "READSEC"
;
;BUFFER IS EMPTY - READ IN ANOTHER BLOCK OF 16
;
RDBLOCK LABEL	NEAR
	MOV	AL,EOFLG	;GET EOF FLAG
	CMP	AL,1    	;IS IT SET/
	STC             	;TO SHOW EOF
	JNZ	L00072
	RET             	;GOT EOF
L00072:	MOV	CL,0    	;SECTORS IN BLOCK
	LEA	DX,DBUF 	;TO DISK BUFFER
RDSECLP LABEL	NEAR
	PUSH	CX
	PUSH	DX
	MOV	CL,STDMA	;SET DMA..
	CALL	BDOS    	;..ADDR
	MOV	DX,OFFSET FCB
	MOV	CL,READ
	CALL	BDOS
	POP	DX
	POP	CX
	OR	AL,AL   	;READ OK?
	JNZ	L00073
	JMP	RDSECOK 	;YES
L00073:	DEC	AL      	;EOF?
	JZ	REOF		; 1 = EOF (regular)
	DEC	AL
	JZ	L00074		; 2 = ERROR (trans area too small)
	DEC	AL
	JZ	REOF		; 3 = EOF (partial block)
	JMP	L00074		; ALL OTHER RETURNS CONSIDERED ERROR !!!
;
;READ ERROR
;
L00074:	MOV	DX,OFFSET MSG23
	CALL	ERXIT
;
RDSECOK:
	MOV	BX,80H
	PUSH	SI
	PUSHF
	ADD	BX,DX
	RCR	SI,1
	POPF
	RCL	SI,1
	POP	SI      	;TO NEXT BUFF
	XCHG	BX,DX   	;BUFF TO DE
	INC	CL      	;MORE SECTORS?
	MOV	AL,CL   	;GET COUNT
	CMP	AL,16   	;DONE?
	JNZ	L00075
	JMP	RDBFULL 	;..YES, BUFF IS FULL
L00075:	JMP	RDSECLP 	;READ MORE
;
REOF:	MOV	AL,1
	MOV    	EOFLG,AL	;SET EOF FLAG
	MOV	AL,CL
;
;BUFFER IS FULL, OR GOT EOF
;
RDBFULL:
	MOV	SECINBF,AL	;STORE SECTOR COUNT
	MOV	BX,OFFSET DBUF	;INIT BUFFER..
	MOV	SECPTR,BX	;..POINTER
	MOV	DX,80H  	;RESET..
	MOV	CL,STDMA	;..DMA..
	CALL	BDOS    	;..ADDR
	JMP	RDSECT  	;PASS SECT TO CALLER
RDSECT	ENDP
;
;---->	WRSECT: WRITE A SECTOR
;
;WRITES THE SECTOR INTO A BUFFER.  WHEN 16
;HAVE BEEN WRITTEN, WRITES THE BLOCK TO DISK.
;
;ENTRY POINT "WRBLOCK" FLUSHES THE BUFFER AT EOF.
;
WRSECT  PROC	NEAR
       	MOV	BX,SECPTR	;GET BUFF ADDR
	XCHG	BX,DX   	;TO DE FOR MOVE
	MOV	BX,80H  	;FROM HERE
	CALL	MOVE128 	;MOVE TO BUFFER
	XCHG	BX,DX   	;SAVE NEXT..
	MOV	SECPTR,BX	;..BLOCK POINTER
	MOV	AL,SECINBF	;BUMP THE..
	INC	AL      	;..SECTOR #..
	MOV    	SECINBF,AL	;..IN THE BUFF
	CMP	AL,16   	;HAVE WE 16?
	JZ	WRBLOCK
	RET             	;NO, RETURN
;
;---->	WRBLOCK: WRITES A BLOCK TO DISK
;
WRBLOCK:
 	MOV	AL,SECINBF	;# SECT IN BUFFER
	OR	AL,AL   	;0 MEANS END OF FILE
	JNZ	L00077
	RET             	;NONE TO WRITE
L00077:	MOV	CL,AL   	;SAVE COUNT
	LEA	DX,DBUF 	;POINT TO DISK BUFF
DKWRLP:	PUSH	BX
	PUSH	DX
	PUSH	CX
	MOV	CL,STDMA	;SET DMA
	CALL	BDOS    	;TO BUFFER
	MOV	DX,OFFSET FCB  	;THEN WRITE
	MOV	CL,WRITE	;..THE..
	CALL	BDOS    	;..BLOCK
	POP	CX
	POP	DX
	POP	BX
	OR	AL,AL
	JZ	L00078
	JMP	WRERR   	;OOPS, ERROR
L00078:	MOV	BX,80H  	;LENGTH OF 1 SECT
	PUSH	SI
	PUSHF
	ADD	BX,DX
	RCR	SI,1
	POPF
	RCL	SI,1
	POP	SI      	;HL= NEXT BUFF
	XCHG	BX,DX   	;TO DE FOR SETDMA
	DEC	CL      	;MORE SECTORS?
  	JZ	L00079
	JMP	DKWRLP  	;..YES, LOOP
L00079:	XOR	AL,AL   	;GET A ZERO
	MOV   	SECINBF,AL	;RESET # OF SECTORS
	MOV	BX,OFFSET DBUF	;RESET BUFFER..
	MOV	SECPTR,BX	;..POINTER
;
	MOV	DX,80H  	;07/13/79 MOD..
	MOV	CL,STDMA	;..TO RESET..
	CALL	BDOS    	;..DMA ADDR.
;
	RET
;
WRERR:	MOV	CL,CAN  	;CANCEL..
	CALL	SEND    	;..SENDER
	MOV	DX,OFFSET MSG24
	CALL	ERXIT   	;EXIT W/MSG:
WRSECT  ENDP
;
;---->	RECV: RECEIVE A CHARACTER
;
;TIMEOUT TIME IS IN B, IN SECONDS.  ENTRY VIA
;"RECVDG" DELETES GARBAGE CHARACTERS ON THE
;LINE.  FOR EXAMPLE, HAVING JUST SENT A SECTOR,
;CALLING RECVDG WILL DELETE ANY LINE-NOISE-INDUCED
;CHARACTERS "LONG" BEFORE THE ACK/NAK WOULD
;BE RECEIVED.
;
RECCHAR PROC	NEAR
RECVDG	LABEL	NEAR    	;RECEIVE W/GARBAGE DELETE
	PUSH	DX
	MOV	DX,MODDATP
	IN	AL,DX   	;GET A CHAR
	IN	AL,DX   	;..TOTALLY PURGE UART
	POP	DX
;
RECV:	PUSH	DX      	;SAVE
;
	IF	FASTCLK 	;4MHZ?
	MOV	AL,CH   	;GET TIME REQUEST
	ADD	AL,AL   	;DOUBLE IT
	MOV	CH,AL   	;NEW TIME IN B
	ENDIF
;
MSEC:	MOV	DX,50000	;1 SEC DCR COUNT
	CALL	CKABORT 	;CHECK FOR EXIT REQUEST
MWTI:	PUSH	DX
	MOV	DX,MODCTLP
	IN	AL,DX   	;CHECK STATUS
	POP	DX
	AND	AL,MODRCVB	;ISOLATE BIT
	CMP	AL,MODRCVR	;READY?
	JNZ	L00080
	JMP	MCHAR   	;GOT CHAR
L00080:	DEC	DL      	;COUNT..
	JZ	L00081
	JMP	MWTI    	;..DOWN..
L00081:	DEC	DH      	;..FOR..
	JZ	L00082
	JMP	MWTI    	;..TIMEOUT
L00082:	DEC	CH      	;MORE SECONDS?
	JZ	L00083
	JMP	MSEC    	;YES, WAIT
;
;MODEM TIMED OUT RECEIVING
;
L00083:	POP	DX      	;RESTORE D,E
	STC             	;CARRY SHOWS TIMEOUT
	RET
;
;GOT CHAR FROM MODEM
;
MCHAR:	PUSH	DX
	MOV	DX,MODDATP
	IN	AL,DX   	;READ THE CHAR
	POP	DX
	POP	DX      	;RESTORE DE
;
;CALC CHECKSUM
;
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE THE CHAR
	ADD	AL,CL   	;ADD TO CHECKSUM
	MOV	CL,AL   	;SAVE CHECKSUM
;
;CHECK IF MONITORING REC'D DATA
;
	MOV	AL,RSEEFLG	;SEE RECEIVED..
	OR	AL,AL   	;..DATA?
	JNZ	L00084
	JMP	MONIN   	;..YES
;
;CHECK IF "VIEWING" AND THIS IS A DATA CHAR
;
L00084:	MOV	AL,VSEEFLG	;VIEWING..
	OR	AL,AL   	;..DATA?
	JZ	L00085
	JMP	NOMONIN 	;..NO
;
;"VIEW" REQUESTED.  SHOW THE CHAR IT IS DATA
;
L00085:	MOV	AL,DATAFLG	;GET DATA FLAG
	OR	AL,AL   	;TEST IT
	JNZ	MONIN  
	JMP	NOMONIN 	;..OFF, NOT DATA
MONIN:	POP	AX
	XCHG	AL,AH
	SAHF	        	;..IS DATA,
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;GET IT,
	CALL	SHOW    	;..AND SHOW IT
NOMONIN:
	POP	AX
	XCHG	AL,AH
	SAHF	        	;RESTORE CHAR
	OR	AL,AL   	;CARRY OFF: NO ERROR
	RET             	;FROM "RECV"
RECCHAR	ENDP
;
;---->	SEND: SEND A CHARACTER TO THE MODEM
;
SEND	PROC	NEAR
     	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE THE CHAR
;
;CHECK IF MONITORING SENT DATA
;
	MOV	AL,SSEEFLG	;CHECK IF MONITORING..
	OR	AL,AL   	;..SENT DATA
	JNZ	L00087
	JMP	MONOUT  	;..YES
;
;CHECK IF "VIEWING" THE FILE
;
L00087:	MOV	AL,VSEEFLG	;GET VIEW FLAG
	OR	AL,AL   	;TEST IT
	JZ	L00088
	JMP	NOMONOT 	;NO
L00088:	MOV	AL,DATAFLG	;IS THIS
	OR	AL,AL   	;..DATA?
	JNZ	MONOUT 
	JMP	NOMONOT 	;..NO.
MONOUT:	POP	AX
	XCHG	AL,AH
	SAHF	        	;GET THE CHAR
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE IT
	CALL	SHOW    	;SHOW IT
NOMONOT:
        POP	AX
	XCHG	AL,AH
	SAHF	        	;RESTORE CHAR
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE IT
	ADD	AL,CL   	;CALC CKSUM
	MOV	CL,AL   	;SAVE CKSUM
SENDW:	PUSH	DX
	MOV	DX,MODCTLP
	IN	AL,DX   	;GET STATUS
	POP	DX
	AND	AL,MODSNDB	;ISOLATE READY BIT
	CMP	AL,MODSNDR	;READY?
	JZ	L00090
	JMP	SENDW   	;..NO, WAIT
L00090:	POP	AX
	XCHG	AL,AH
	SAHF	        	;GET CHAR
	PUSH	DX
	MOV	DX,MODDATP
	OUT	DX,AL   	;OUTPUT IT
	POP	DX
	RET             	;FROM "SEND"
SEND	ENDP
;
;---->	WAITNAK: WAITS FOR INITIAL NAK
;
;TO ENSURE NO DATA IS SENT UNTIL THE RECEIVING
;PROGRAM IS READY, THIS ROUTINE WAITS FOR THE
;THE FIRST TIMEOUT-NAK FROM THE RECEIVER.  (E)
;CONTAINS THE # OF SECONDS TO WAIT.
;
WAITNAK PROC	NEAR
	MOV	AL,VSEEFLG	;VIEWING?
	OR	AL,AL
	JNZ	L00091
	JMP	WAITNPR 	;PRINT MSG
L00091:	MOV	AL,QFLG 	;QUIET..
	OR	AL,AL   	;..MODE?
	JNZ	WAITNPR
	JMP	WAITNLP 	;YES, SKIP MSG
WAITNPR LABEL	NEAR
	PUSH	BX
	MOV	BX,OFFSET MSG13
	CALL	ILPRT   	;PRINT:
	POP	BX
WAITNLP LABEL	NEAR
	CALL	CKABORT 	;ABORT IF LOCAL CTL-X
	MOV	CH,1    	;TIMEOUT DELAY
	CALL	RECV    	;DID WE GET..
	CMP	AL,NAK  	;..A NAK?
	JNZ	L00093
	RET             	;YES, SEND BLOCK
;
L00093  LABEL	NEAR
	IF CANFLG
	CMP	AL,CAN  	;CTL-X FROM REMOTE?
	JNZ	L00094
	JMP	ABORT   	;..YES, ABORT
L00094  LABEL	NEAR
	ENDIF
;
	DEC	DL      	;80 TRIES?
	JNZ	L00095
	JMP	ABORT   	;YES, ABORT
L00095:	JMP	WAITNLP 	;NO, LOOP
WAITNAK	ENDP
;
;
;---->	PROCOPT: PROCESS COMMAND OPTIONS
; 
;1) SAVES THE PRIMARY OPTION IN 'OPTION';
;2) IF OPTION 'H' (HELP) IS ASKED FOR,
;TRANSFERS DIRECTLY TO THE HELP PRINT;
;3) SCANS THE SUB-OPTION CHARACTERS, AND FOR
;EACH FOUND, ZEROS THE APPROPRIATE ENTRY IN
;THE OPTION TABLE.  FOR EXAMPLE, IF 'D' IS 
;CODED (DISCONNECT) THEN THE 'D' STORED AT
;'DISCFLG' IS SET TO 0 SO IT CAN BE TESTED
;LATER.
;
PROCOPT PROC	NEAR
        MOV	DX,OFFSET FCBNAME ;TO PRIMARY OPT.
	XCHG	BX,DX
	MOV	AL,ES:[BX]      ;GET PRIMARY OPT.
   	XCHG	BX,DX   	            
	MOV   	OPTION,AL	;SAVE IT
        CMP     AL,'X'		;MODEM EXAMPLES?
        JNZ	L00096
	JMP	EXAM		;..YES, GIVE EXAMPLES
L00096:	CMP	AL,'H'  	;MODEM H(ELP)?
	JNZ	OPTLP  
	JMP	HELP    	;..YES, GIVE HELP
OPTLP:	PUSHF
	INC	DX              ;TO SECONDARY OPTION
	POPF	        	                    
	XCHG	BX,DX
	MOV	AL,ES:[BX]      ;GET CHAR
	XCHG	BX,DX   	           
;
;IF YOU MOD THIS PROGRAM FOR >7 OPTIONS,
;YOU MUST CHANGE THE FOLLOWING, SINCE
;THERE WON'T BE A ' ' AFTER THE OPTION
;IF A BAUD RATE WAS SPECIFIED.
;
	CMP	AL,' '  	;NO MORE OPT'NS?
	JNZ	L00097
	JMP	ENDOPT  	;..YES
;SET THE APPROP. OPT: STORE 0 IN IT
L00097:	MOV	BX,OFFSET OPTBL	;HL = ADDR OF 'OAQDSRV'
	MOV	CX,TABLESIZE	;OPT TABLE LEN
OPTCK:	CMP	AL,BYTE PTR [BX] ;FOUND THE OPTION?
	JZ	L00098
	JMP	OPTNO   	;NO, DON'T SET IT
L00098:	MOV	BYTE PTR [BX],0	;SET THE OPTION
	JMP	OPTLP   	;GET NEXT OPTION
OPTNO:	PUSHF
	INC	BX
	POPF	        	;TO NEXT
	DEC	CX      	;MORE?
	JZ	L00099
	JMP	OPTCK
;OPTION NOT IN TABLE
L00099:	JMP	BADOPT  	;SHOW BAD SUB OPTION
;
;IF "VIEW" WAS ASKED FOR, SET QUIET FLAG
;
ENDOPT:	MOV	AL,VSEEFLG	;VIEW..
	OR	AL,AL   	;..ASKED FOR?
	JZ	L00100
	RET             	;..NO, RET FROM 'PROCOPT'
L00100:	MOV   	QFLG,AL 	;YES, NO HDR/CKSUM PRT
	RET             	;FROM 'PROCOPT'
PROCOPT ENDP
;
;DONE - CLOSE UP SHOP
;
DONE	PROC	NEAR
     	MOV	AL,VSEEFLG	;VIEWING?
	OR	AL,AL
	JNZ	L00101
	JMP	DONETC  	;SHOW MSG
L00101:	MOV	AL,QFLG 	;QUIET
	OR	AL,AL   	;..MODE?
	JNZ	DONETC 
	JMP	DONECTE 	;YES, CK TERM/ECHO
DONETC:	PUSH	BX
	MOV	BX,OFFSET MSG14
	CALL	ILPRT
	POP	BX
;
;CHECK IF TERMINAL OR ECHO SUB COMMAND
;WAS SPECIFIED
;
DONECTE:
	MOV	AL,TERMFLG	;TERM?
	OR	AL,AL
	JNZ	L00103
	JMP	TERM    	;..YES
L00103:	MOV	AL,ECHOFLG	;ECHO?
	OR	AL,AL
	JNZ	CKDIS 
	JMP	TRMECHO 	;..YES
;
;FALL INTO 'CKDIS'
;
;---->	CKDIS: CHECK IF DISCONNECT REQUESTED
;
;THIS ROUTINE IS JUMPED TO AT THE END OF
;PROCESSING, AND DISCONNECTS THE PHONE IF
;'D' WAS SPECIFIED AS A SUB-OPTION.
;
CKDIS:	MOV	AL,DISCFLG	;CHECK 'D' FLAG
	OR	AL,AL   	;REQUESTED?
;                                                    x d x
;	IF	NOT PMMI                             x e x
;	JZ	L00106                               x l x
;	JMP	EXIT                                 x e x
;L00106  LABEL	NEAR                                 x t x
;	ENDIF                                        x e x
;                                                    x d x
;AWAIT C/R TO DISC. SO WE DON'T LOSE THE PHONE            
;
	PUSH	BX
	MOV	BX,OFFSET MSG15
	CALL	ILPRT
	POP	BX
	CALL	KEYIN
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH
	CALL	CRLF
	POP	AX
	XCHG	AL,AH
	SAHF	
	CMP	AL,0DH
	JZ	DISCONN
	JMP	CKDIS           	;ASK AGAIN
;
;---->	DISCONN: DISCONNECT THE PHONE
;
DISCONN LABEL	NEAR
        PUSH	BX
	MOV	BX,OFFSET MSG16
	CALL	ILPRT           	;PRINT:
	POP	BX
	JMP	EXIT
DONE	ENDP
;
;NO DISCONNECT, TYPEZZ MSG AS REMINDER THAT PHONE'S
;ON HOOK
;
;
;---->	INITMOD: INITIALIZED THE MODEM
;
;THIS ROUTINE IS USED TO INITIALIZE SERIAL
;PORT USED BY THE PROGRAM.  IT INCLUDES SUPPORT FOR 
;SELECTING WHICH OF THE THREE UARTS SUPPORTED BY THE IBM/PC 
;ARCHITECTURE WILL BE USED FOR THIS TRANSMISSION
;
;
;
INITMOD PROC	NEAR
;
;	ONLY THE "dtr up" PORTION OF THIS MODEM INITIALIZATION,
;	[and THE PORT SELECTION]
;	IS STATIC -- ALL OTHER PORT SETUP IS DONE EXTERNALLY, OR BY
;	THE "I" SECONDARY OPTION - WHICH DEFAULTS THE COMx PORT
;	TO 300 baud, 8 bits, 1stop bit, AND  n o  parity
;
; 
	MOV	BX,BASE1U		;POINT TO A UART
	XOR	AX,AX
	CMP	AL,URT3FLG		;IS 3 REQUESTED (flags zeroed if found)
	JNE	INIT1                   ;CONTINUE IF NOT
	MOV	BX,BASE3U               ;IF YES, POINT TO 3
	JMP	INIT2                   ; AND DO PORT SETUP
INIT1:	CMP	AL,URT2FLG             ;IS 2 REQUESTED
	JNE	INIT2                   ;DEFAULT TO ONE IF NOT
	MOV	BX,BASE2U		;OR POINT TO TWO  AND
;					; DO THE PORT POINTER SETUP
;
;	SETUP POINTERS TO THE UART PORTS     (SUPPORTS 3)
;
INIT2:	MOV	AX,BX			;BUILD 
	ADD	AX,OFFDATP		;
	MOV	MODDATP,AX              ;     MODDATP
	MOV	AX,BX                   ;BUILD
	ADD	AX,OFFCTLP              ;
	MOV	MODCTLP,AX              ;MSR  MODCTLP
	MOV	AX,BX			;BUILD 
	ADD	AX,OFFCTL2		;
	MOV	MODCTL2,AX              ;MCR  MODCTL2
	MOV	AX,BX                   ;BUILD
	ADD	AX,OFFCTL3              ;
	MOV	MODCTL3,AX              ;LCR  MODCTL3    
;
;
;	NOW THAT A PORT [COM1 COM2 or COM3] IS SELECTED
;		put up dtr FOR POOR FOLKS WITH 
;		COMMERCIAL MODEMS THAT REQUIRE IT.
;		(poor folks, of course, is a relative term)
;
;                                       ; 
	MOV	AL,DTREADY              ;OUTPUT DTR UP
	PUSH	DX                      ;  REQUEST TO
	MOV	DX,MODCTL2              ;MODEM CONTROL REGISTER
	OUT	DX,AL			;
;
;	check for uart init request -- set COMx TO 300,N,8,1 IF 0
;
	MOV	al,DUMYFLG
	or	al,al
	jnz	noinit
        push	dx
	mov	dx,3fbh
	mov	al,80h
	out	dx,al
	mov	dx,3f9h
	mov	al,01h
	out	dx,al
	mov	dx,3f8h
	mov	al,80h
	out	dx,al
	mov	dx,3fbh
	mov	al,03h
	out	dx,al
;
;	the above sequence defaults the modem to 300,n,8,1 .. 
;
NOINIT: POP	DX		;RESTORE DX BEFORE LEAVING
       	RET
INITMOD	ENDP
;
;---->	MOVEFCB: MOVES FCB(2) TO FCB
;
;I ATTEMPTED TO MAKE THE MODEM COMMAND 'NATURAL',
;I.E. MODEM SEND FILENAME (MODEM S FN.FT) RATHER
;THAT MODEM FILENAME SEND (MODEM FN.FT S) SO THIS
;ROUTINE MOVES THE FILENAME FROM THE SECOND FCB
;TO THE FIRST
;
MOVEFCB PROC	NEAR
	MOV	BX,OFFSET FCB2  ;FROM
	MOV	DX,OFFSET FCB   ;TO
	MOV	CH,16           ;LEN
        PUSH	DS		;SAVE DS
        PUSH	ES		;MOVE ES ...
        POP	DS		;... TO DS
	CALL	MOVE            ;DO THE MOVE
	POP	DS		;RESTORE DS	
	XOR	AL,AL           ;GET 0
	MOV   	FCBCR,AL        ;ZERO CURRENT RECORD
	MOV  	FCBRR,AL        ;..AND RANDOM RECORD
	RET         
MOVEFCB	ENDP
;
;---->	SHOW: SHOWS CHAR SENT/RECEIVED
;
;CR, LF, AND TAB ARE SHOWN.  ALL OTHER
;NON-PRINTABLE CHARACTERS ARE SHOWN IN
;HEX AS (XX)
;
SHOW	PROC	NEAR
     	CMP	AL,LF   	;LF?
	JNZ	L00122
	JMP	CTYPEZZ 	;..YES, TYPEZZ IT
L00122:	CMP	AL,CR   	;CR?
	JNZ	L00123
	JMP	CTYPEZZ 	;..YES, TYPEZZ IT
L00123:	CMP	AL,09   	;TAB
	JNZ	L00124
	JMP	CTYPEZZ 	;..YES, TYPEZZ IT
L00124:	CMP	AL,' '  	;CTL-CHR?
	JAE	L00125
	JMP	SHOWHEX 	;YES, SHOW IN HEX
L00125:	CMP	AL,7FH  	;DEL?
	JAE	SHOWHEX
	JMP	CTYPEZZ 	;NO, TYPEZZ THE CHAR
SHOWHEX LABEL	NEAR
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE THE CHAR
	MOV	AL,'('  	;TYPEZZ..
	CALL	CTYPEZZ 	;..'('
	POP	AX
	XCHG	AL,AH
	SAHF	        	;THEN..
	CALL	HEXO    	;..THE CHAR
	MOV	AL,')'  	;THEN..
	JMP	CTYPEZZ 	;..')' AND RETURN.
;
;---->	CTYPEZZ: TYPEZZS VIA CP/M SO TABS ARE EXPANDED
;
CTYPEZZ LABEL   NEAR
	PUSH	CX      	;SAVE..
	PUSH	DX      	;..ALL..
	PUSH	BX      	;..REGS
	MOV	DL,AL   	;CHAR TO E
	MOV	CL,WRCON	;GET BDOS FNC
	CALL	BDOS    	;PRIN THE CHR
	POP	BX      	;RESTORE..
	POP	DX      	;..ALL..
	POP	CX      	;..REGS
	RET             	;FROM "CTYPEZZ"
SHOW	ENDP
;
CRLF	PROC	NEAR
     	MOV	AL,CR
	CALL	TYPEZZ
	MOV	AL,LF
CRLF	ENDP
;
;---->	TYPEZZ: TYPEZZ VIA DIRECT BDOS ACCESS
;
;THIS ROUTINE BYPASSES CP/M'S CTL-S, CTL-C
;TESTS.
;
TYPEZZ	PROC	NEAR
       	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE CHAR
	PUSH	CX      	;AND B
VTYPEZZ LABEL   NEAR
	MOV	CL,DCON		;GET BDOS FNC
	MOV	DL,AL
	CALL	BDOS
	POP	CX
	POP	AX
	XCHG	AL,AH
	SAHF
	RET             	;FROM "TYPEZZ"
TYPEZZ	ENDP
;
;KEYBOARD STATUS
;
;	This routine has been changed from CP/M-86: the service for
;	MS-DOS differs in several respects.. [CP/M version uses
;	x'FE' in DL and calls "DCON" which isn't supported
;	in MSDOS .. SO we use the CONSOLE STATUS service.
; 
;
STAT    PROC	NEAR
     	MOV	CL,CONST 	;GET BDOS FNC 
;	MOV	DL,0FfH         ;**Conventions changed from CP/M !!!
	CALL	BDOS
 	OR	AL,AL   	;0 => NOT READY
;				;AL = FF if char ready: else =00         
	RET
STAT	ENDP
;
;KEYBOARD INPUT
;
;	This routine should be changed to use direct BIOS interface.
;	with the current BDOS call [DCON = 6] the CTRL-BREAK and
;	CTRL-C sequences are intercepted and interpreted as 
;	termination requests
;
;
;
KEYIN	PROC	NEAR
      	MOV	CL,DCON		;GET BDOS FNC
	MOV	DL,0FFH
	CALL	BDOS
	JZ	KEYIN		;ZERO FLAG SET IF NO CHARACTER 
	CMP	AL,CTLCCHR
	JNE	KEY001
	MOV	AL,CTLCHAR
	ret			;return if ctl-c to be sent
;
;	SPECIAL FUNCTION KEY SUPPORT 
;                                     **ALT-C ==> transmits CTRL-C
;	Support will be added here for 
;	use of ALT-? keyins for shuch things as BAUD rate shift,
;	mode changes (quiet/noisy On/Off of R,S,Q secondary optns.)
;
;
key001:	cmp	al,0
	je	altkey
	RET			;return if not "00" for special function code
altkey:	mov	cl,dcon		;set bdos function
	mov	dl,0ffh		;ask for character
	call	bdos
	jz	altkey		;spin until second code
;	if we got here it should be a special scan code
;
	cmp	al,46           ;replace
	jne	akey01          ;       ALT-C
	mov	al,ctlchar      ;  WITH
	ret                     ;       CTRL-C
AKEY01:	CMP	AL,59
	JNL	AKEY02
	RET
AKEY02:	CMP	AL,68
	JL	AKEY03
	RET
AKEY03:	NOP
	NOP
	RET
KEYIN 	ENDP
;
;HEX OUTPUT
;
HEXO	PROC	NEAR
     	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH   	;SAVE FOR RIGHT DIGIT
	RCR	AL,1    	;RIGHT..
	RCR	AL,1    	;..JUSTIFY..
	RCR	AL,1    	;..LEFT..
	RCR	AL,1    	;..DIGIT..
	CALL	NIBBL   	;PRINT LEFT DIGIT
	POP	AX
	XCHG	AL,AH
	SAHF	        	;RESTORE RIGHT
NIBBL:	AND	AL,0FH  	;ISOLATE DIGIT
	CMP	AL,10   	;IS IS <10?
	JAE	L00127
	JMP	ISNUM   	;YES, NOT ALPHA
L00127:	ADD	AL,7    	;ADD ALPHA BIAS
ISNUM:	ADD	AL,'0'  	;MAKE PRINTABLE
	JMP	TYPEZZ  	;..THEN TYPEZZ IT
HEXO	ENDP
;
;---->	CKQUIT: QUIT/RETRY AFTER MULTIPLE ERRS.
;
;RETURNS W/ ZERO SET IF "RETRY" ASKED FOR
;
CKQUIT	PROC	NEAR
       	XOR	AL,AL   	;ZERO..
	MOV   	ERRCT,AL	;..ERROR COUNT
	PUSH	BX
	MOV	BX,OFFSET MSG18
	CALL	ILPRT   	;PRINT:
	POP	BX
	CALL	KEYIN   	;QUIT/RETRY
	LAHF
	XCHG	AL,AH
	PUSH	AX
	XCHG	AL,AH
	CALL	CRLF
	POP	AX
	XCHG	AL,AH
	SAHF	
	AND	AL,5FH  	;MAKE UPPER CASE
	CMP	AL,'R'  	;RETRY?
	JNZ	L00128
	RET             	;'KEEP ON TRUCKIN'
L00128:	CMP	AL,'Q'  	;QUIT?
	JZ	L00129
	JMP	CKQUIT  	;NO, ASK AGAIN
L00129:	OR	AL,AL   	;SET NON-ZERO
	RET
CKQUIT	ENDP
;
;---->	ILPRT: INLINE PRINT OF MSG
;
;THE CALL TO ILPRT IS FOLLOWED BY A MESSAGE,
;BINARY 0 AS THE END.  BINARY 1 MAY BE USED TO
;PAUSE (MESSAGE 'PRESS RETURN TO CONTINUE')
;
ILPRT 	PROC	NEAR
ILPLP:	MOV	AL,BYTE PTR[BX]
	OR	AL,AL           ;END OF MSG?
	JNZ	L00130
	JMP	ILPRET          ;..YES, RETURN
L00130:	CMP	AL,1            ;PAUSE?
	JNZ	L00131
	JMP	ILPAUSE         ;..YES
L00131:	CALL	CTYPEZZ         ;TYPEZZ THE MSG
ILPNEXT:
        PUSHF
	INC	BX
	POPF	                ;TO NEXT CHAR
	JMP	ILPLP           ;LOOP
;
;PAUSE WHILE TYPING HELP SO INFO DOESN'T
;	SCROLL OFF OF VIDEO SCREENS
;
ILPAUSE:
	PUSH	BX
	MOV	BX,OFFSET MSG19
	CALL	ILPRT           ;PRINT:
	POP	BX
	CALL	KEYIN           ;GET ANY CHAR
	CMP	AL,'C'-40H      ;REBOOT?
	JNZ 	L09132		;EXIT IF QUITCHAR
	JMP	EXIT
L09132:	CMP	AL,'I'-40H	;ALT REBOOT?
	JNZ	L00132		;
	JMP	EXIT            ;YES.
L00132:	JMP	ILPNEXT         ;LOOP
ILPRET:	RET                     ;PAST MSG
ILPRT	ENDP
;
;---->	PRTMSG: PRINTS MSG POINTED TO BY (DE)
;
;A '$' IS THE ENDING DELIMITER FOR THE PRINT.
;NO REGISTERS SAVED.
;
PRTMSG	PROC	NEAR
       	MOV	CL,PRINT        ;GET BDOS FNC
	JMP	BDOS            ;PRINT MESSAGE, RETURN
PRTMSG	ENDP
;
;---->	ERXIT: EXIT PRINTING MSG FOLLOWING CALL
;
ERXIT	PROC	NEAR
      	POP	BX              ;GET MESSAGE
	CALL	PRTMSG          ;PRINT IT
	CALL	CKDIS           ;DISCONNECT?
	JMP     EXIT            ;RETURN TO PC DOS       
ERXIT	ENDP
;
;MOVE 128 CHARACTERS
;
MOVE128 PROC  	NEAR
	MOV	CH,128          ;SET MOVE COUNT
;
;MOVE FROM (HL) TO (DE) LENGTH IN (B)
;
MOVE:	MOV	AL,BYTE PTR [BX] ;GET A CHAR
	XCHG	BX,DX
	MOV	[BX],AL
	XCHG	BX,DX           ;STORE IT
	PUSHF
	INC	BX
	POPF	                ;TO NEXT "FROM"
	PUSHF
	INC	DX
	POPF	                ;TO NEXT "TO"
	DEC	CH              ;MORE?
	JZ	L00133
	JMP	MOVE            ;..YES, LOOP
L00133:	RET                     ;..NO, RETURN
MOVE128	ENDP
;
BDOS	PROC	NEAR
     	PUSH    BX                                                        
        PUSH    CX
	PUSH    DX
	MOV	AH,CL		;MOVE FNC FOR PC DOS
	INT     21H    		;INVOKE PC DOS SERVICE		
	POP	DX
	POP	CX
	POP	BX
	RET
BDOS	ENDP
;
BADOPT:	CALL	TYPEZZ
	PUSH	BX
	MOV	BX,OFFSET MSG25
	CALL	ILPRT
	POP	BX
HELP:	PUSH	BX
	MOV    	BX,OFFSET MSG26
	CALL 	ILPRT
	POP	BX
	JMP	copyrt
EXAM:	PUSH	BX
	MOV     BX,OFFSET MSG27
	CALL	ILPRT
	POP	BX
	JMP	copyrt
;
;  Print Limited license with "HELP" request output
;
copyrt:	CALL	STAT
;
;	CLEAR THE SCREEN (cursor = 1,1)
;
	SUB	CX,CX		;UPPER LEFT CORNER
	MOV	DX,184FH	;BOTTOM RIGHT CORNER
	MOV	BH,7		;NORMAL ATTRIB FOR CLS
	SCROLL			;INVOKE BIOS TO CLEAR SCREEN
	SUB	DX,DX		;POINT TO ROW 1,COL 1
	LOCATE			;SET THE CURSOR TO TOP LEFT
;
;	PRINT COPYRIGHT NOTICE  AND PAUSE 
;
	mov	bx,offset msg00 ;point to copyright notice
	call	ilprt		; go print it (PAUSE)
;
;	RETURN TO CALLER 
;
	jmp	exit
;
;
;
MODEM   ENDS
	SUBTTL	'MODIFICATION HISTORY AND CREDITS'
	PAGE
;
;* * * * * * * * * * * * * * * * * * * * * * * * *
;*						 *
;*   THIS PROGRAM DOCUMENTED IN "MODEM.DOC"	 *
;*						 *
;* * * * * * * * * * * * * * * * * * * * * * * * *
;* THIS PROGRAM WAS "MODEM.ASM" BUT and then was * 
;* TEMPORARILY NAMED "MODEM2.ASM" SO PEOPLE	 *
;* WILL REALIZE IT IS AN ENHANCEMENT OF		 *
;* THE ORIGINAL PROGRAM "MODEM.ASM" ON CP/M	 * 
;* USER'S GROUP DISK 25.			 *
;* * * * * * * * * * * * * * * * * * * * * * * * *
;
;PLEASE PASS ON MODS, BUGS, ETC, SO YOUR
;FIXES OR ENHANCEMENTS MAY BE SHARED BY ALL,
;
;Please send to the bottom name on the list,
;	OR TO ALL OF US - if you can afford
;			  the time
;
;	Ward Christensen
;	688 E. 154th St. #5D
;	Dolton, Il. 60419
;
;	(312) 849-6279
;
;You may send a self-addressed stamped postcard
;to be informed of changes/bugs as they become
;known.     [CP/M Version]
;
;
;
;       05/08/82
;Modified for CP/M 86 and the IBM PC 
; by Randy Suess
;    5219 Warwick
;    Chicago, Ill 60641
;    312-545 7535
;
;       06/03/82
;Modified for PC DOS and the IBM PC
;by Rick Mallinak
;   22451 Franklin Dr.
;   Richton Park, Ill 60471
;   (312) 481-6459
;
;	08/11/82
;Repaired for PC DOS 1.1 and IBM PC
;by John Chapman
;   844 S. Madison St.
;   Hinsdale Illinois 60521
;   (312) 325-3081
;                 CS: 70205,1217
;
;  
;
;       --------------------
;       MODIFICATION HISTORY
;	--------------------
;
;	09/23/77
;ORIGINALLY WRITTEN BY WARD CHRISTENSEN
;
;	04/26/79
;REWRITTEN BY WARD CHRISTENSEN TO COMBINE
;IMPROVEMENTS TO THE ORIGINAL MADE BY WARD
;AND BY KEITH PETERSEN, W8SDZ, AND SUGGESTIONS
;BY JIM BELL WHICH KEITH IMPLEMENTED.  SEE
;MODEM.DOC FOR ADDITIONAL HISTORICAL
;INFORMATION AND DOCUMENSATION.
;
;	05/09/79
;ALLOW 'T' AND 'E' SUB-OPTIONS TO GO TO TERMINAL
;OR ECHO MODEM AFTER TRANSFERRING A FILE.  (WLC)
;
;	05/22/79
;ADD FEATURE TO MAKE RECEIVE FILE ROUTINE SAY
;FILE SUCCESSFULLY OPENED, WHEN IN QUIET MODE.
;MOVE INITIAL GOBBLE GARBAGE INPUTS TO BEFORE
;COMMAND CPI'S SO ALL MODES ARE CLEARED. CHANGE
;INITIAL SEND WAIT TO 80 SECS TO ALLOW MORE TIME
;FOR RECEIVING END TO COME UP. ADD 'H' AFTER MSG
;THAT SHOWS NUMBER OF SECTORS IN EXTENT ABOUT TO
;BE SENT.  (KBP)
;
;	05/24/79
;FIX MISSING RETURN INSTRUCTION AT END OF
;INITIALIZATION ROUTINE.  (KBP)
;
;	07/13/79
;PUT IN RESET OF DMA ADDR TO 80H AFTER
;FILE RECEIVE, BECAUSE "SUBMIT" UNDER CP/M
;DOESN'T RESET IT BEFORE READING THE
;NEXT SUBMITTED COMMAND. /// ALSO DELETE
;CODE FOR "CANCEL" AS IT'S JUST TOO EASY
;TO INTENTIONALLY GET A CANCEL AS A
;GARBAGED LINE CHARACTER.
;
;;
;           05/82
;	
;Rewitten for CP/M-86 by Randy Suess
; Changes mainly to interface with 
; the CP/M-86 BDOS services 
;
;	    06/82
;
;Randy's version altered by Rick Mallinak
;to beacceptable to PC/DOS assembler.
;Comments added and changes made to
;support multiple segment version
;
;           08/82                      ********CURRENT VERSION***********
;
;Rick's PC/DOS version reworked
;to: a) RUn as a .COM file by
;returning to single segment image;
;b)terminal bugs repaired,; c) code
;added to 'bring up' DTR as program
;starts up [necessary for non-autodial
;commercial modems]; and c) both 
;source and execution time messages 
;added to prevent Resale or Commmercial
;use of this program.
;
;
;
	END     MAIN

```
{% endraw %}

## SCNMAP.BAS

{% raw %}
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
```
{% endraw %}

## SORTS.BAS

{% raw %}
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
{% endraw %}

## SORTS.DOC

{% raw %}
```
SORTS.DOC    Documentation for.... SORTS.BAS

SORTS provides an excellent demonstration of the performance characteristics of
several different sorting algorithms.  Just run the program.  A sample size of
100 is a reasonable response.

Each method is neatly blocked off in the program as a subroutine.  With a little
tuning it should not be all that difficult to adapt the most suitable method to
your own application.

Since this thing is bouncing around the country on Club Disks it seems like a
list of references might be in order.  Feel free to expand.

SORTING REFERENCES:

Wirth, Niklaus. Algorithms + Data Structures = Programs
Englewood Cliffs, NJ:Prentice-Hall, Inc. 1976

Knuth, Donald E., The Art of Computer Programming: Searching and Sorting. Vol 3
Reading, MA: Addison-Wesley Publishing Co. 1973

Lorin, Harold, Sorting and Sort Systems
Reading, MA: Addison-Wesley Publishing Co. 1975

Standish, Thomas A., Data Structure Techniques
Reading, MA: Addison-Wesley Publishing Co. 1980

Mitchell, Edward. Searching Techniques, Part 4
Creative Computing, December 1982, Vol 8, No. 12

Nijenhuis, Albert N., How Not To Be Out of Sorts, Part I: Insertion Sort
Creative Computing, August 1980, Vol 6, No. 8

--------------Part II: Heapsort
Creative Computing, September 1980, Vol 6, No. 9

--------------Part III: Linked Merge Sort
Creative Computing, October 1980, Vol 6, No. 10

Walker, Bill, Sorting with Binary Trees
Byte, October 1980, Vol 5, No. 10, pg 96


```
{% endraw %}

## UNWS.ASM

{% raw %}
```
TITLE NWS - ASSEMBLER PROGRAM TO STRIP HI-ORDER BITS FROM WORDSTAR FILES
SUBTTL DESCRIPTION OF THE STACK SEGMENT
        PAGE
STACK   SEGMENT PARA STACK 'STACK'
        DB      64 DUP('STACK   ')
STACK   ENDS
SUBTTL DESCRIPTION OF THE DATA SEGMENT
        PAGE
WORKAREA SEGMENT PARA PUBLIC 'DATA'
LOGO    DB      '       ***********************************************************************',10,13
        db      '       *                                                                     *',10,13
        db      '       *                        UN - Wordstar                                *',10,13
        db      '       *   A program to remove the high-order bits from Wordstar data        *',10,13
        db      '       *   files.  You are prompted for the input and output file names.     *',10,13
        db      '       *                                                                     *',10,13
        db      '       *     Written as an assembler language example by Gene Plantz         *',10,13
        db      '       ***********************************************************************',10,10,10,10,13,'$'
donem   db      '-------->    DONE    <-------------',10,13,'$'
eofflag db      0
crlf    db      10,13,'$'       ;issue carriage return-linefeed after input
fcb1    db      40 dup(0)       ;input file  only needs to be 36 (but safe)
fcb2    db      40 dup(0)       ;file control block for output
err0    db      7,7,'--->  ERROR Opening INPUT file  <--------',10,13,'$'
err1    db      7,7,'--->  ERROR.. not enough disk space for output <---',10,13,'$'
err2    db      7,7,'--->  ERROR.... bad file name given. <----',10,13,'$'
parms   db      14              ;max size of reply
repson  db      ?               ;size of what they typed
name1   db      20  dup(' ')    ;this is where the users reply goes
parms2  db      14              ;max size of input
resp2   db      ?               ;size of what they really typed in
name2   db      20  dup(' ')    ;this is where the reply goes
ask1    db      10,10,13,'Please Enter the name of the input file    $'
ask2    db      'Please Enter the name of the output file   $'
buffer  db      128 dup(' ')            ;record  buffer
workarea ends
;
subttl desciption of dos interfaces
cseg    segment para public 'CODE'
start   proc    far
        assume cs:cseg,ds:workarea,ss:stack,es:workarea
        org     100h
        push    ds                      ;set up starting linkage as per dxample
        sub     ax,ax                   ;zero this and place on stack
        push    ax                      ;so that when we do a RET we go to 
        mov     ax,workarea             ;location 0;  point to our workarea
        mov     ds,ax                   ;move the workarea address into DS
        mov     es,ax                   ;also into ES for the function 29H
        call    cls                     ;call subroutine to clear the screen
        mov     dh,3                    ;set cursor to row 8
        mov     dl,0                    ;set cursor to column 0
        mov     bh,0                    ;use screen number 0
        mov     ah,2                    ;function 2 to locate cursor
        int     10h                     ; go do it
        mov     dx,offset logo          ;display the logo where we put cursor
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
;
        mov     dx,offset ask1          ;point to message to display
        mov     ah,9                    ;tell DOS what function (print string)
        int     21h                     ;call DOS
;
        mov     dx,offset parms         ;point to console input buffer
        mov     ah,10                   ;read console buffer
        int     21h                     ;do it
;
        mov     si,offset name1         ;put address of name1 into SI
        mov     di,offset fcb1          ;put address of file control block DI
        mov     ah,29h                  ;tell DOS to parse filename
        int     21h                     ;do it
;
        mov    dx,offset crlf           ;do a carriage return-line feed
        mov     ah,9                    ;after the reply 
        int     21h                     ;to DOS
;
        mov     al,[di+1]               ;if DI+1 = blank, no file name
        cmp     al,20h                  ;if blank, error
        jnz     isok
        jmp     error2
;
isok:
        mov     dx,offset ask2          ;ask user for name of new file
        mov     ah,9                    ;display question
        int     21h                     ;DOS
;
        mov     dx,offset parms2        ;put address of input buffer into DX
        mov     ah,10                   ;get input from user
        int     21h                     ;DOS
;
        mov     dx,offset crlf          ;another cr,lf
        mov     ah,9
        int     21h
;
        mov     si,offset name2         ;SI = address of field NAME2
        mov     di,offset fcb2          ;DI = address of second file control 
        mov     ah,29h                  ;ask DOS to parse filename
        int     21h                     ;DOS
;
        mov     al,[di+1]               ;if DI+1 = blank, error
        cmp     al,20h                  ;is it blank??
        jz      error2                  ;tell him and leave     yyyyy
;
        mov     dx,offset fcb1          ;point to first fcb
        mov     ah,15                   ;open the input file
        int     21h                     ;call dos to do it 
;
        cmp     al,0                    ;see if ok
        jnz     error0                  ;tell him and leave
;
        mov     dx,offset fcb2          ;address of fcb2
        mov     ah,16h                  ;create out put file
        int     21h                     ;this does open, too
;
        mov     dx,offset buffer        ;point to out record buffer
        mov     ah,1ah                  ;tell DOS to put disk data there
        int     21h                     ;DOS
;
readl:  cmp     eofflag,1               ;see if end-of-file was reached
        jz      closeall                ;yes, wrap it up and leave
        mov     dx,offset fcb1          ;read from file 1
        mov     ah,14h                  ;sequential read from disk
        int     21h                     ;DOS
;
        cmp     al,0                    ;see if normal return
        jz      readok                  ;if zero, ok
        mov     eofflag,1               ;no, set end-of-file flag
        jmp     readl                   ;back to read
;
readok: 
        mov     cx,128                  ;size of logical record
        mov     si,offset buffer        ;SI = address of our buffer
andloop:
                                        ;these 3 lines were used because
                                        ;   AND [SI],7FH    wouldn't assemble
                                        ;
        mov     al,[si]                 ;and out the hi-bit 
        and     al,7fh
        mov     [si],al                 ;put it back
;
        inc     si                      ;bump pointer to next char in buffer
        loop    andloop                 ;do it 128 times (in CX)
;
        mov     dx,offset fcb2          ;point to output fcb
        mov     ah,15h                  ;sequential write
        int     21h
        cmp     al,1                    ;this means disk full
        jz      error1
;
        jmp     readl                   ;do it again
;
closeall:
        mov     dx,offset fcb2          ;close output file
        mov     ah,10h          
        int     21h
;
        mov     dx,offset donem         ;iisue DONE message
        mov     ah,9
        int     21h
        jmp     exit
;
error2: mov     dx,offset err2          ;err mess 2
        jmp     errorm
error1: mov     dx,offset err1          ;point to error mess number 1
        jmp     errorm
error0: mov     dx,offset err0
errorm:
        mov     ah,9                    ;print it
        int     21h
        jmp     closeall
exit:   ret
start   endp
;
;
subttl clear screen routine
cls     proc    near
        mov     cx,0
        mov     dx,2479h
        mov     bh,7
        mov     ax,600h
        int     10h
        ret
cls     endp
;
;
cseg    ends
        end     start
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0081

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
