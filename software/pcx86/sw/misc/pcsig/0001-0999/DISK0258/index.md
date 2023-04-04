---
layout: page
title: "PC-SIG Library Disk #258"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0258/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0258"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMMUNICATION NO 3"

    This disk includes an assortment of communications programs and
    utilities.  HC.COM is a Hex File converter which converts to and from
    HEX format.  It can automatically provide a COM or EXE extension.
    TALK.EXE is a simple terminal emulator.  RING.BAS will set up the
    HAYES to patiently look for an incoming ring, and turn SYSTEM control
    over to the caller.  SCRIPT.DOC is a procedure to set up a menu
    processing system for Crosstalk.  Included are procedures to perform
    automatic logon and capture to the IBMSIG which may be extracted and
    used as stand-alone Crosstalk scripts.  SERIAL.COM inserts itself into
    memory below command.com ,and changes the ROM bios interupt vectors
    for RS232 I/O to use interupt driven I/O.
    
    System Requirements:  Some programs require BASIC
    
    How to Start: Consult the .DOC files for documentation and
    directions.  To run the BASIC programs follow the GETTING STARTED
    instructions for your configuration.  Programs suffixed .COM or
    .EXE run from DOS by typing <filename> <ENTER>.
    
    File Descriptions:
    
    HC       DOC  Documentation for HC.COM
    HC       COM  Hex Converter, very fast
    ATO      BAS  CompuServe auto logon and message retrieval
    SCRIPT   DOC  Script files for CROSSTALK XVI
    CTTY     DOC  Discussion of CTTY command and RING.BAS
    RING     BAS  Turns SYSTEM control over to caller
    TALK     ASM  Source for TALK.EXE
    TALK     DOC  Documentation for TALK.EXE
    TALK     EXE  Simple terminal emulator from December '83 Softalk
    HC       ASM  Source for HC.COM
    ATO      EXE  Compiled version of ATO.BAS
    ATO      DOC  Documentation for ATO.BAS/EXE
    PCT3JR   DOC  Documentation for PCT3JR.MRG
    PCT3JR   MRG  Merge file for PC-TALK III to run on PCjr
    XAPRIN   BAS  Prints files downloaded from Compuserve database
    QPRINT   OBJ  Link with ATO when compiled
    AT       COM  "AT hhmm" waits until hh:mm  (Within 24 hours)
    AT       ASM  Source for AT.COM
    Z        COM  "Z s" sleeps for s (5 if omitted) seconds
    Z        ASM  Source for Z.COM
    SERIAL   DOC  Documents SERIAL.COM
    SERIAL   COM  Makes BIOS serial (COM1) I/O interrupt-driven so
    SERIAL   ASM  Source for SERIAL.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ATO.BAS

```bas
1000 ' ******************************************************
1010 ' AUTOSIG.BAS was derived from SUPER.SIG on TRS-100 SIG.
1020 '  by Howard Benner [70235,1337]
1030 ' Re-written for the IBM PC by Vern Buerg, March 1984.
1040 ' Please read AUTOSIG.DOC carefully before using,
1050 '  especially about changing your SIG options.
1060 '  Use OP to set ST;LL 79;BR;PC ^G;MWM;RNT;P
1070 '                            =====
1080 ' To invoke:
1090 '   BASICA SIG/F:4/C:4096 -or- BASCOM SIG/X/C:4096;
1100 ' ******************************************************
1110 DEFSTR A-H : DEFINT I-Z : DIM F$(10)
1120 WARN$="N" : CFG$="AUTOSIG.CFG"  'Config file
1130 CR=CHR$(13) : LF$=CHR$(10) : CRLF=CR+LF$ : CTLD=CHR$(4) : ESC$=CHR$(27)
1140 CMD$="RE" : RM$="RM" : BEL=CHR$(7)   'CIS prompt character
1150 CLS : KEY OFF
1160 GOSUB 3780  'Process config file
1170 ON ERROR GOTO 1220
1180 GOTO 1310
1190 '
1200 ' Error conditions
1210 ' ----------------
1220 IF ERR=53 THEN PRINT TAB(20);"FIle is empty." : RESUME 1320
1230 IF ERR=57 THEN COLOR 15,0:PRINT"<ERR>";:COLOR 7,0:RESUME
1240 LOCATE 1,54 : COLOR 0,7 : BEEP
1250 IF ERR=24 THEN PRINT"DEVICE TIMEOUT": GOTO 1270
1260 PRINT "Error ";ERR;" at line ";ERL
1270 COLOR 7,0 : RESUME 1320
1280 '
1290 ' Display Menu
1300 ' ------------
1310 CLS
1320 CLOSE :  SF$="SF;"+NR$+";OFF"
1330 FA$=DR$+":AUTOSIGA.TMP" : FB$=DR$+":AUTOSIGB.TMP" : FC$=DR$+":AUTOSIGC.TMP"
1340 '         ------------              ------------              ------------
1350 IF WARN$="N" THEN GOSUB 4310
1360 '
1370 R=1 : IC=20 : ATTR%=112 : TXT$="  AUTOSIG Function Menu  " : GOSUB 3740 : ATTR%=7
1380 FOR R=3 TO 12 : TXT$=F$(R-2) : GOSUB 3740 : NEXT R
1390 R=14 : IC=16 : TXT$="Option:" : GOSUB 3740 : LOCATE 14,23,1
1400 '
1410 ANS=INPUT$(1) : MENU=VAL(ANS)
1420 IF MENU>0 AND MENU<10 THEN ON MENU GOTO 1690,1970,2210,2360,2640,2680,3960,3310,3550
1430 IF MENU<>0 THEN BEEP : GOTO 1350
1440 '
1450 ' 0 = RUN => Dial,logon,GOpage,RM,SF,off => #2,#3,#4 and #5
1460 ' ---------------------------------------------------------
1470 GOSUB 2870 : MODE$=RM$
1480 GOSUB 3270  'Wait for ^G and send OP sequence
1490 GOSUB 3130  'Read next comm char
1500 IF A<>BEL THEN 1490 ELSE C$=A    'Wait for ^G
1510 PRINT #1,MODE$                  'Send RM
1520 LINE INPUT #1,TXT$ : PRINT TXT$ 'Read RM response or LF from SF
1530 IF MODE$=RM$ THEN LINE INPUT #1,TXT$ : PRINT TXT$ ELSE TXT$=INPUT$(1,#1) :PRINT TXT$D
1540 IF INSTR(TXT$,"No marked messages present") AND MODE$=RM$ THEN MODE$=SF$:C$="":GOSUB 1640:GOTO 1490
1550 GOSUB 1640
1560 IF MODE$=RM$ THEN C$="" : MODE$=SF$ : C$="" : PRINT #4,TXT$; : GOTO 1590
1570 GOSUB 3130 : PRINT #4,A;
1580 IF A<>CTLD THEN 1570 ELSE CLOSE:GOSUB 3250:GOTO 1970
1590 GOSUB 3130 : PRINT #4,A; : IF A<>BEL THEN 1590 'Until G^ save comm data
1600 PRINT #1,CRLF;
1610 FOR I=1 TO 15 : GOSUB 3130 : PRINT #4,A; : A1=A1+A : NEXT I
1620 IF INSTR(A1,"Function:") THEN A1="":GOTO 1510 ELSE A1="":GOTO 1590
1630 '
1640 CLOSE #4 : IF MODE$=RM$ THEN OPEN FA$ FOR OUTPUT AS #4 : RETURN
1650 OPEN FB$ FOR OUTPUT AS #4 : PRINT #4,CRLF : RETURN
1660 '
1670 ' 1 = Compose offline
1680 ' -------------------
1690 CMD$="L" : OPEN FB$ FOR OUTPUT AS 2
1700 CLS : COLOR 0,7: LOCATE ,16 : PRINT "  Compose a message  " : COLOR 7,0
1710 PRINT "Enter text line by line. Null line ends input. END returns to menu"
1720 IF CMD$<>"L" THEN 1780
1730 LOCATE 3,3,1 : PRINT "To: "; : A2=INPUT$(1) : PRINT A2;
1740 IF ASC(A2)=0 THEN PRINT #2,"OFF":CLOSE 2:GOTO 2680
1750 LINE INPUT "";A1 : PRINT #2,"L" : PRINT #2,A2;A1
1760 LOCATE 4,1,1 : PRINT "Subj: "; : LINE INPUT "";A1 : PRINT #2,A1
1770 '
1780 LNO=0  'Reset msg line number
1790 LNO=LNO+1 : LOCATE ,1,1 : PRINT STR$(LNO);". ";
1800 LINE INPUT "";A : IF LEN(A)=0 THEN 1830
1810 PRINT #2,A : GOTO 1790
1820 ' End of text, ask for <S>ection
1830  PRINT #2,CRLF; : PRINT TAB(1);" ";
1840  INPUT " <S>ave or <SP>rivate ";A$ : IF A$="" THEN A$="S"
1850  IF MID$(A$,1,1)<>"s" AND MID$(A$,1,1)<>"S" THEN A$="S"
1860  IF CMD$<>"L" THEN PRINT #2,A$ : GOTO 1910 ELSE PRINT #2,A$;
1870  INPUT " Enter section number ";ANS : IF ANS="" THEN ANS="0"
1880  IF ANS<"0" OR ANS>"9" THEN ANS="0"
1890  PRINT #2,ANS
1900  IF (A$="SP" OR A$="sp") THEN INPUT" Enter userid";A$,B$ : PRINT #2,A$;",";B$
1910 IF MAIL=1 THEN PRINT " <D>elete original or <Enter>";:MAIL=0 ELSE IF CMD$="RE" THEN 2410 ELSE 1700
1920 GOSUB 4260 : IF ANS="D" THEN PRINT #2,"D"+H : PRINT #2,"Y"
1930 GOTO 2410
1940 '
1950 ' 2 = Scan and mark offline
1960 ' -------------------------
1970 CLOSE #3 : CLOSE #4
1980 OPEN FB$ FOR INPUT AS 3 : OPEN FC$ FOR OUTPUT AS 4
1990 MAIL=0 : CLS : LOCATE 3,1,1 : IF EOF(3) THEN 2090
2000 LINE INPUT #3,TXT$
2010 IF INSTR(TXT$,"Exiting at") THEN 2090
2020 IF INSTR(TXT$," #: ") THEN GOSUB 2120 ELSE 1990
2030 LOCATE 9,21,1 : PRINT "<M>ark <Q>uit or <Enter> ";
2040 GOSUB 4260 : IF ANS="Q" THEN 2100
2050 IF ANS="M" THEN 2060 ELSE 1990
2060 IF MAIL=0 THEN PRINT #4,H
2070 TXT$="" : MAIL=0 : GOTO 1990
2080 '
2090 CLOSE #3 : KILL FB$
2100 CLOSE : GOTO 2210
2110 '
2120 H="RI"+MID$(TXT$,5,6) : CLS : LOCATE 1,20,0:PRINT "Msg# ";RIGHT$(H,6) : PRINT
2130 FOR I=1 TO 4
2140  IF EOF(3) THEN 2100
2150  LINE INPUT #3,TXT$ : R=I+2 : IC=21 : ATTR%=7 : GOSUB 3740
2160  IF INSTR(TXT$,"To:") THEN IF INSTR(TXT$,ID$) THEN MAIL=1
2170 NEXT I : RETURN
2180 '
2190 ' 3 = Read messages online
2200 ' ------------------------
2210 OPEN FC$ FOR INPUT AS 4
2220 OPEN FA$ FOR APPEND AS 3
2230 IF EOF(4) THEN CLOSE:GOTO 2360
2240 GOSUB 2870 : GOSUB 3270
2250 GOSUB 3130 'Read comm
2260 IF A<>BEL THEN 2250 ELSE 2280
2270 GOSUB 3130 : PRINT #3,A; : IF A<>BEL THEN 2270
2280 IF EOF(4) THEN 2290 ELSE LINE INPUT #4,TXT$ : PRINT #1,TXT$ : GOTO 2270
2290 PRINT #1,"OFF"
2300 GOSUB 3130  'Read one char at a time
2310 IF A<>CTLD THEN GOTO 2300
2320 CLOSE : GOSUB 3250 'Pause to see Exiting msg
2330 '
2340 ' 4 = Read and reply offline
2350 ' --------------------------
2360 OPEN FA$ FOR INPUT AS #3  'Downloaded msgs
2370 OPEN FC$ FOR OUTPUT AS #2 'RE and D commands
2380 FX$=FA$ : IF CMD$="L" THEN 1700
2390 IF EOF(3) THEN CLOSE: GOTO 2640 ELSE GOSUB 3610  'Print msgs
2400 R=0
2410 GOSUB 2570
2420 K=INSTR(TXT$," #: ")
2430 IF K>0 THEN H=MID$(TXT$,K+4,6):ELSE IF INSTR(TXT$,"To:") THEN IF INSTR(TXT$,ID$) THEN MAIL=1 ELSE MAIL=0
2440 GOTO 2410
2450 '
2460 IF LEN(H)>3 THEN LOCATE 25,12 : PRINT " #";H; ELSE 2410
2470 IF MAIL=0 THEN TXT$="<R>eply <Q>uit or <Enter>" : LOCATE 25,46,1
2480 IF MAIL=1 THEN TXT$="<R>eply <D>elete <Q>uit or <Enter>" : LOCATE 25,55,1
2490 R=25 : IC=20 : ATTR%=15 : GOSUB 3740 : R=0
2500 '
2510 GOSUB 4260 : CLS
2520 IF ANS="D" THEN IF MAIL=1 THEN PRINT #2,"D"+H:PRINT #2,"Y":H="":MAIL=0:GOTO 2410
2530 MAIL=0
2540 IF ANS="R" THEN PRINT #2,"RE"+H : H="" : GOTO 1700 : ELSE H=""
2550 IF ANS="Q" THEN CLOSE : GOTO 2640 ELSE GOTO 2410
2560 '
2570 IF EOF(3) THEN CLOSE : GOTO 2640
2580 LINE INPUT #3,TXT$
2590 IF (LEFT$(TXT$,10)="Function: " OR LEFT$(TXT$,7)="(C RE T" OR LEFT$(TXT$,7)="(C F RE") THEN 2460
2600 GOSUB 3700 : RETURN
2610 '
2620 ' 5 = Send (RE) replies online
2630 ' ----------------------------
2640 FX$=FC$ : GOTO 2690
2650 '
2660 ' 6 = Send (L) originals online
2670 ' -----------------------------
2680 FX$=FB$ 'Leave file
2690 OPEN FX$ FOR INPUT AS #2 : IF EOF(2) THEN PRINT TAB(20);"File is empty.":GOTO 1320
2700 GOSUB 3610  'Print or list messages
2710 '
2720 LOCATE 25,50,1 : COLOR 15 :PRINT "Ready to go back online? Y/N "; : GOSUB 4260:COLOR 7
2730 IF ANS="N" THEN 1310 ELSE IF ANS<>"Y" THEN 2720
2740 '
2750 GOSUB 2870  'Dial and logon
2760 GOSUB 3270  'Wait for ^G and send OP sequence
2770 GOSUB 3130  'Read comm
2780 IF A<>BEL THEN 2770  'Until prompt char
2790 IF EOF(2) THEN 2810
2800 LINE INPUT#2,TXT$ : PRINT #1,TXT$ : GOTO 2770
2810 PRINT #1,"OFF"
2820 GOSUB 3130 : IF A<>CTLD THEN 2820  'Wait for discon
2830 GOTO 3220
2840 '
2850 ' Dial, Logon, and GO page
2860 ' ------------------------
2870 CLS
2880 PRINT : PRINT "Dialing: ";PH$ : A="" : C$=""
2890 CLOSE #1 : OPEN COMFIL$ AS #1
2900  PRINT #1,CHR$(13); 'Primes modem
2910  PRINT #1,MDM$; : SOUND 32767,18
2920  PRINT #1,PH$;CHR$(13); 'Send dial sequence
2930  GOSUB 3130
2940  C$=C$+A
2950  IF INSTR(C$,"CONNECT"+CHR$(13)+CHR$(10))=0 THEN 2930 'Hayes answer?
2960 GOSUB 3250 : PRINT #1,CHR$(3)  'Pause for line and send ^C
2970 A="" : C$=""
2980 GOSUB 3130
2990 C$=C$+A
3000 IF INSTR(C$,"^C")=0 THEN 2980
3010 PRINT : COLOR 0,7 : PRINT "      IBM-PC Connected      " : COLOR 7,0
3020 PRINT "<Enter> to force online mode" : PRINT : C$=""
3030 GOSUB 3130 : C$=RIGHT$(C$,8)+A
3040 IF INSTR(C$,"User ID:") THEN PRINT #1,ID$ : C$=""  ELSE 3030
3050 GOSUB 3130 : C$=RIGHT$(C$,9)+A
3060 IF INSTR(C$,"Password:") THEN PRINT #1,PSWD$ : C$=""  ELSE 3050
3070 GOSUB 3130 : C$=RIGHT$(C$,2)+A
3080 IF INSTR(C$,"OK") OR INSTR(C$,"!") THEN PRINT #1,PG$ : C$=""  ELSE 3070
3090 RETURN
3100 '
3110 ' Read a char from comm line
3120 ' --------------------------
3130 A=INKEY$ : IF A=CHR$(13) THEN 3310  'ENTER forces online
3140 IF EOF(1) THEN 3130
3150 IF LOC(1)=0 THEN 3130
3160 IF LOF(1)<128 THEN XOFF=1 : PRINT #1,CHR$(19); ELSE IF XOFF=1 THEN XOFF=0 : PRINT #1,CHR$(17);
3170 A=INPUT$(1,#1)
3180  IF A<>CHR$(10) AND A<>CHR$(7) THEN PRINT A;
3190  IF MENU=8 AND A=CTLD THEN 3220 'ctl-D at disconnect!
3200 RETURN
3210 '
3220 LOCATE 1,50,0:COLOR 0,7 : BEEP : PRINT "Disconnect detected"; : COLOR 7,0
3230 GOSUB 3250 : CLOSE : GOTO 1150
3240 '
3250 SOUND 32767,36 : SOUND 32767,18 : RETURN
3260 '
3270 GOSUB 3130 : IF A<>BEL THEN 3270 ELSE PRINT #1,"OP;BR;NS;LL79;T":RETURN
3280 '
3290 ' 8 = Go online
3300 ' -------------
3310 CLOSE #1 : OPEN COMFIL$ AS #1 : CLS
3320 COLOR 0,7 : PRINT "    ONLINE MODE     " : COLOR 7,0
3330 PRINT : PRINT "Do you want to auto-logon? (Y/N)";: GOSUB 4260 : PRINT
3340 IF ANS="Y" THEN GOSUB 2880 ELSE GOTO 3360
3350 PRINT : COLOR 0,7 : PRINT "    ONLINE MODE     " : COLOR 7,0
3360 PRINT "Enter ctrl-D to exit" : PRINT
3370 '
3380 IF EOF(1) THEN 3490
3390 IF LOC(1)>0 THEN LC=LOC(1) ELSE 3490
3391 IF LOF(1)<128 THEN XOFF=1 : PRINT #1,CHR$(19); ELSE IF XOFF=1 THEN XOFF=0 : PRINT #1,CHR$(17);
3400 WHILE LOC(1)>0
3410   X$=INPUT$(1,#1) : K=ASC(X$)
3411   IF X$<>ESC$ THEN 3420 'Escape sequence
3412    IF LOC(1)=0 THEN 3412 ELSE O$=INPUT$(1,#1)
3413    IF O$="j" THEN CLS : GOTO 3480
3414    IF O$="H" THEN LOCATE 1,1,1 : GOTO 3480
3415    IF O$<>"Y" THEN 3480
3416     IF LOC(1)=0 THEN 3416 ELSE O2$=INPUT$(1,#1)
3417     IF LOC(1)=0 THEN 3417 ELSE O1$=INPUT$(1,#1)
3418     LOCATE ASC(O2$)-31,ASC(O1$)-31,1 : GOTO 3480
3419 '
3420   IF K=7 OR K=10 THEN 3480  'Skip BEL and LF
3430   IF K<>8 THEN 3460  'Backspace
3440    I=POS(0) : IF I>1 THEN I=I-1
3450    LOCATE ,I,1 : PRINT " ";: LOCATE ,I,1 : GOTO 3480
3460   PRINT X$;
3470   IF K=4 THEN 3220  '^D disconnects
3480 WEND
3490 C$=INKEY$ : IF C$<>"" AND LEN(C$)=1 THEN PRINT #1,C$; : IF C$=CTLD THEN 3220
3500 LOCATE ,,1
3510 GOTO 3380
3520 '
3530 ' 9 = Return to BASIC
3540 ' -------------------
3550 CLS : PRINT TAB(1);"  AUTOSIG  Endef." : BEEP
3560 GOSUB 4210 'Re-write CFG
3570 ON ERROR GOTO 0  : END
3580 '
3590 ' List message file
3600 ' -----------------
3610 CLS : ATTR%=112 : R=1 : IC=62 : TXT$="  PC is OFFLINE  "  : GOSUB 3740 : ATTR%=7
3620 R=2 : IC=2: TXT$="<P>rint, or <Enter> to display file" : GOSUB 3740 : LOCATE 2,38,1
3630 GOSUB 4260 : CLS : R=3
3640 IF FX$=FA$ AND ANS<>"P" THEN RETURN
3650 IF ANS="Q" THEN RETURN : ELSE OPEN FX$ FOR INPUT AS #1
3660 IF EOF(1) THEN CLOSE #1: RETURN
3670 LINE INPUT #1,TXT$
3680 IF ANS="P" THEN LPRINT TXT$ ELSE GOSUB 3720
3690 GOTO 3660
3700 '
3710 ' 7=normal, 15=hi-intensity, 112=reverse, 113=underline, 135=blinking
3720 IC=1 : R=R+1 : ATTR%=7 : IF INSTR(TXT$," #: ") THEN CLS : R=1
3730 IF R>24 THEN R=1 : LOCATE 25,70,0:COLOR 15,0:PRINT "More?"; : GOSUB 4260 :COLOR 7,0: CLS
3740  IF TIMER=0 THEN CALL QPRINT(TXT$,R,IC,ATTR%) : RETURN ELSE LOCATE R,IC:COLOR ATTR%-(ATTR%\16)*16,ATTR%\16 : PRINT TXT$;:RETURN
3750 '
3760 ' Read Configuration file
3770 ' -----------------------
3780 ON ERROR GOTO 3950
3790 BAUD$="300" : ID$="70000,000" : PSWD$="password" : PG$="G PCS-131"
3800 PH$="555-1212" : DR$="B" : NR$="N" : MDM$="AT V1 DT,"
3810 CLOSE #1 : OPEN CFG$ FOR INPUT AS #1
3820 LINE INPUT #1,BAUD$
3830 LINE INPUT #1,ID$        'User ID
3840 LINE INPUT #1,PSWD$      'Password
3850 LINE INPUT #1,PH$        'Phone number
3860 LINE INPUT #1,PG$        'GO page
3870 LINE INPUT #1,DR$        'Default drive
3880 LINE INPUT #1,NR$        'Scan start number
3890 LINE INPUT #1,MDM$       'Modem dial command(s)
3900 COMFIL$="COM1:"+BAUD$+",E,7,1,DS"
3910 CLOSE #1 : RETURN
3920 '
3930 ' 7 = Re-Configure
3940 ' ----------------
3950 PRINT "CFG ERROR ";ERR;" AT LINE ";ERL : GOSUB 3970 : RESUME 1170
3960 GOSUB 3970 : GOTO 1310
3970 CLOSE : OPEN CFG$ FOR OUTPUT AS #1
3980 CLS:COLOR 0,7 :PRINT "Supply information below.": COLOR 7,0
3990 PRINT TAB(1);"<Enter> to leave unchanged.";TAB(1);"<ESCape> to return to menu."
4000 PRINT : PRINT
4010 HINT$="GO to page":C$=MID$(PG$,3): GOSUB 4130:IF A$<>"" THEN PG$="G "+A$
4020 HINT$="CIS phone #" : C$=PH$ : GOSUB 4130 : IF A$<>"" THEN PH$=A$
4030 HINT$="What BAUD rate" : C$=BAUD$ : GOSUB 4130 : IF A$<>"" THEN BAUD$=A$
4040 HINT$="Your userid" : C$=ID$ : GOSUB 4130 : IF A$<>"" THEN ID$=A$
4050 HINT$="Your password":C$="suppressed": GOSUB 4130: IF A$<>"" THEN PSWD$=A$
4060 HINT$="Default disk" : C$=DR$ : GOSUB 4130 : IF A$<>"" THEN DR$=A$
4070 HINT$="Starting msg # or N": C$=NR$ : GOSUB 4130 : IF A$<>"" THEN NR$=A$
4080 HINT$="Modem dial commands":C$=MDM$ : GOSUB 4130 : IF A$<>"" THEN MDM$=A$
4090 '
4100 COLOR 7,0 : COMFIL$="COM1:"+BAUD$+",E,7,1,DS"
4110 CLOSE #1 : GOSUB 4210 : CLS : RETURN
4120 '
4130 PRINT TAB(1);HINT$;" (";C$;")? "; : LOCATE ,,1
4140 IF C$="suppressed" THEN COLOR 0,0 ELSE COLOR 7,0
4150 A$=INPUT$(1) : IF A$=CR THEN A$="" : COLOR 7,0 : RETURN
4160 IF A$=CHR$(27) THEN RETURN 4100 ELSE PRINT A$;
4170 LINE INPUT;B$ : COLOR 7,0 : A$=A$+B$ : RETURN
4180 '
4190 ' Write configuration file
4200 ' ------------------------
4210 CLOSE #1 : OPEN CFG$ FOR OUTPUT AS #1
4220 PRINT #1,BAUD$;CRLF;ID$;CRLF;PSWD$;CRLF;PH$;CRLF;PG$;CRLF;DR$;CRLF;NR$;CRLF;MDM$
4230 CLOSE #1 : RETURN
4240 '
4250 ' Read response from terminal
4260 LOCATE ,,1 : ANS=INPUT$(1)': PRINT ANS;
4270 IF ASC(ANS)>96 THEN ANS=CHR$(ASC(ANS) AND &HDF)
4280 RETURN
4290 '
4300 ' Display option warning
4310 ' ----------------------
4320 F$(1)="(0) RUN (logon,scan,...)"   : F$(2)="(1) Compose offline"
4330 F$(3)="(2) Scan and mark offline"  : F$(4)="(3) Read messages online"
4340 F$(5)="(4) Read and reply offline" : F$(6)="(5) Send replies to messages online"
4350 F$(7)="(6) Send originals online"  : F$(8)="(7) Re-configure"
4360 F$(9)="(8) Go online"              : F$(10)="(9) Return to BASIC"
4370 R=20 : IC=24 : ATTR%=112 : TXT$="   WARNING   " : GOSUB 3740
4380 R=21 : IC=20 : ATTR%=7 : TXT$="Insure that your SIG options (OP) are set to:" : GOSUB 3740
4390 R=22 : IC=22 : TXT$="PC ^G;ST;LL 79;BR;MWM;RNT;P" : GOSUB 3740
4400 R=23 : IC=20 : TXT$="If not correct, Go Online (8) and set them." : GOSUB 3740
4410 WARN$="Y":ATTR%=7 :RETURN
```

## RING.BAS

```bas
10 'RING.BAS   2/20/84  (See also info at LINE 300)
20 'This program (along with a BATCH file) to look for an incoming
30 'call on a HAYES and then switch system control to the COM1:
40 'port. By calling the batch file "OUTSIDER" the system
50 'can return to looking for another outside call. Control can
60 'be returned to the keyboard by BREAKing this program, returning to
70 'the SYSTEM and pressing CTRL-BREAK (real quick)!
80 '
90 'This program is freely given to the public domain.
100 'Developed by Dan Derrick under a grant from Direct Access
110 '
120 ON ERROR GOTO 800
130 CLS
140   PRINT"Your computer will be ready to receive external control in"
141 FOR X=9 TO 1 STEP -1
143   LOCATE 2,1
150   PRINT X;"seconds."
152   FOR Y=1 TO 1000:NEXT Y
155 NEXT X
170 CLS
180 OPEN "COM1:300,E,7,1" AS #1
190     PRINT#1,"AT S0=1"            'sets up for auto answer mode
200       INPUT#1,A$                 'looks for local "RING" response
210       IF A$<>"RING" THEN 200
220   FOR P=1 TO 3000:NEXT P         'pause to wait for carrier tone
230       PRINT#1,"You have the system"
240       PRINT#1,"All commands are now at the DOS level."
250       PRINT#1,"Type OUTSIDER to return the SYSTEM"
260       PRINT#1,"to waiting for an incoming RING."
270   CLS:SYSTEM
280 CLOSE:GOTO 180
290 '
300 'This program is part of a BATCH file.
310 'It must be called from the BATCH file to work:
320 'Type  RUN 500  to create this BATCH file
330 '
500 ON ERROR GOTO 800
505 OPEN "I",#2,"outsider.bat":CLOSE:PRINT "File exists":GOTO 570
506 OPEN "o",#2,"outsider.bat"
510 PRINT#2,"REM PRESS KEY, THEN HANG UP"
520 PRINT#2,"PAUSE"
530 PRINT#2,"CTTY CON"
540 PRINT#2,"BASICA RING"
550 PRINT#2,"CTTY COM1"
560 CLOSE#2
570 PRINT"Now go back to the SYSTEM level and type OUTSIDER"
580 PRINT "Press any key to do this or CTRL-BREAK to stop"
590 A$=INKEY$:IF A$="" THEN 590
600 SYSTEM
800 IF ERR=57 THEN 280
810 IF ERR=53 THEN 506
820 PRINT "FATAL ERROR....SORRY"
999 END
1000 '********* PHYSICAL END EOF *********
```

## XAPRIN.BAS

```bas
10 ' process compuserve xa files downloaded using the command CAT/DES
20 ' by Mike Cumming
30 '
40 CLS
50 PRINT "                  PRINT COMPUSERVE DATA FILES
60 PRINT
70 INPUT "Enter name of the datafile containing file information ";NAM$
80 ON ERROR GOTO 100
90 OPEN NAM$ FOR INPUT AS #1:GOTO 110
100 RESUME 70
110 ON ERROR GOTO 500
120 PRINT
130 PRINT "Align paper in the printer.  Press any key when ready."
140 WHILE INKEY$="":WEND
150 LINES=0 ' count printer lines, skip perferation
160 IF MID$(NAM$,2,1)=":" THEN NAM$=MID$(NAM$,2,LEN(NAM$)) ' remove drive spec
170 TF$=CHR$(13)+"       Compuserve XA file "+NAM$+CHR$(13)+CHR$(13) ' header
180 LPRINT TF$
190 WHILE NOT EOF(1)
200    LINE INPUT #1,LIN$
220 ' expect user id as first line of data.  if not read new line
230    IF LEFT$(LIN$,1)<>"[" THEN LINE INPUT #1,LIN$:GOTO 230
240 ' get program name, date, and size and print it
250    IF LINES>55 THEN LPRINT CHR$(12)+TF$:LINES=0
260    LINE INPUT #1,LIN$
265    X=INSTR(LIN$,"("):IF X>0 THEN X=X-1 ELSE X=31
270    LPRINT LEFT$(LIN$,X)
280 ' ignore 3 lines of garabage (keywords)
290    FOR X=1 TO 3:LINE INPUT #1,LIN$:NEXT
300 ' print program description
310    LIN$=" "
320   WHILE LIN$<>""
330     LINE INPUT #1,LIN$
340     IF LINES>56 THEN LPRINT CHR$(12)+TF$:LINES=0
350     LPRINT MID$(LIN$,2,LEN(LIN$)):LINES=LINES+1
360   WEND
370 WEND
500 IF ERR<>27 THEN RESUME NEXT
510 PRINT:PRINT "Printer is out of paper.  Correct and press any key"
520 WHILE INKEY$="":WEND:RESUME NEXT
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0258

     Volume in drive A has no label
     Directory of A:\

    AT       ASM       713   9-30-83   8:31p
    AT       COM        58   9-30-83   8:32p
    ATO      BAS     15387   5-20-84   9:51a
    ATO      DOC      6872   5-19-84   2:31p
    ATO      EXE     38016   5-20-84  10:38a
    CTTY     DOC      2472   5-03-84   7:23a
    HC       ASM     42645   5-08-84   6:44p
    HC       COM      3693   5-08-84   6:56p
    HC       DOC      2768   5-08-84   6:48p
    PCT3JR   DOC      2459   5-19-84   3:38p
    PCT3JR   MRG      2868   5-19-84   3:37p
    QPRINT   OBJ       256   5-20-84   8:17a
    README             824   4-06-85   9:30a
    RING     BAS      2056   5-08-84   6:36p
    SCRIPT   DOC     12397   5-08-84   6:39p
    SERIAL   ASM      4563  12-19-83   4:33p
    SERIAL   COM      1113  12-19-83   4:36p
    SERIAL   DOC      2193   1-10-84  11:29p
    TALK     ASM     11219   5-01-84  11:18p
    TALK     DOC       224   5-08-84   7:36p
    TALK     EXE       896   5-01-84  11:18p
    XAPRIN   BAS      1536   5-20-84   8:56a
    Z        ASM      1419   9-30-83  10:11p
    Z        COM       126   9-30-83  10:12p
           24 file(s)     156773 bytes
                          151552 bytes free
