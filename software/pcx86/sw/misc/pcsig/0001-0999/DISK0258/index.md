---
layout: page
title: "PC-SIG Diskette Library (Disk #258)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0258/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0258"
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

## AT.ASM

{% raw %}
```
	page	,132
; AT hhmm
;	Wait until hh:mm.
;
cseg	segment	public 'code'
	assume	cs:cseg,ds:cseg

	org	80h
	dw	?		; length (5) and initial space
hhi	db	?
hlo	db	?
mhi	db	?
mlo	db	?

	org	100h
AT	proc	far
	mov	cl,10		; set up for multiplies
	mov	al,hhi		; get hours in bh
	and	al,0FFh-'0'
	mul	cl
	mov	bh,al
	mov	al,hlo
	and	al,0FFh-'0'
	add	bh,al
	mov	al,mhi		; get minutes in bl
	and	al,0FFh-'0'
	mul	cl
	mov	bl,al
	mov	al,mlo
	and	al,0FFh-'0'
	add	bl,al
	mov	athm,bx

loop:	mov	ah,2Ch		; get time
	int	21h		; ch,cl= h,m; dh,dl= s,c
	cmp	ch,ath
	jne	loop
	cmp	cl,atm
	jl	loop
	int	20h		; exit

	even
athm	dw	?
	org	$-2
atm	db	?
ath	db	?

AT	endp
cseg	ends
	end	AT
```
{% endraw %}

## ATO.BAS

{% raw %}
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
{% endraw %}

## ATO.DOC

{% raw %}
```
                        A U T O S I G

Introduction.
=============

     AUTOSIG is a program written specifically for CompuServe SIG use.
     It provides an automatic way of processing SIG messages which is
     quick and economic.

     AUTOSIG is a special communications program written in BASIC for
     the IBM PC. Although its main purpose is to offload messages, it
     can be used as a simple terminal program.

     AUTOSIG was derived from a program called SUPER.SIG in XA2 on the
     TRS100 SIG which was written by Howard Benner[70235,1337]. This
     version was slopped together by Vernon Buerg[74375,500] because
     my CIS bill is ridiculous.

Installation.
=============

     Before running AUTOSIG, certain SIG options must be in effect. The
     program depends upon certain sequences of events and control char-
     acters. Specifically, the prompt character (PC) must be set to ^G.
     Additionally, enter OP at the Function: prompt and set these options:

        BR    - Brief mode
        NS    - no stopping between messages
        PC ^G - set prompt  to G^
        TWM   - type waiting messages
        MWM   - mark waiting messages
        RNT   - RN command types all messages
        P     - make options permanent

     The prompt character is ^G, the bell. You will not hear the bell while
     AUTOSIG is running, but will during other sessions. You may change PC
     during non-AUTOSIG sessions, or you may change AUTOSIG to look for a
     different prompting character by changing the assignment of BEL at
     line 240. Be careful in your choice.










Operation.
==========

    Invoke AUTOSIG through BASICA with the following command:

        BASICA /F:4/C:4096

    For 1200 baud it is recommended that you compile the program with
    the following commands:

        BASCOM AUTOSIG/E/X/C:4096;
        LINK AUTOSIG;
        AUTOSIG

    Upon program start-up, a menu is presented. For the first use,
    select option (7) to reconfigure the program for your use.

        (0) - RUN
        (1) - Compose offline
        (2) - Scan and mark offline
        (3) - Read messages online
        (4) - Read and reply offline
        (5) - Send replies online
        (6) - Send originals online
        (7) - Re-configure
        (8) - Go online
        (9) - Return to BASIC























Configuration.
==============

     The file AUTOSIG.CFG is created during the first run, or is
     updated by later runs. Answer each question appropriately.
     If no change is required, press ENTER. If no more questions
     are to be answered, press ESCAPE. The information is required
     for performing dialing and logging on.

     "GO to page (PCS131)"
       - enter the CIS page number to go to
         after an automatic logon
     "CIS phone # (555-1212)"
       - enter your local CIS or net telephone number.
     "What baud rate (300)"
       - enter 300 or 1200, the comm parameters are set to
         COM1:baud,7,E,1,DS
     "Your userid (70000,000)
       - enter your CIS numbers separated by a comma
     "Your password (suppressed)"
       - enter your CIS password, it is never displayed.
     "Default disk (B)"
       - select an appropriate drive letter, three files are created,
         AUTOSIGA.TMP, AUTOSIGB.TMP, and AUTOSIGC. They are not deleted,
         so that they may be reused at any time.
     "Starting msg # or N (N)"
       - normally N is used so that all new messages are processed, but
         a message number can be substituted.
     "Modem dial commands (AT DT,)"
       - enter an appropriate command sequence for your modem.


    Defaults, or previous settings, are shown within parenthesis. The
    configuration process can be terminated by using the ESCAPE key.
















(0) RUN.
========

    This is the main function of AUTOSIG. This option performs these steps:

    Automatic Logon (8)
      - dials the CIS phone numbe,
      - supplies your userid and password to gain access,
      - instructs CIS to go to a specific page

    Downloading of message headers and marked messages
      - in the SIG, issues RM to save waiting messages, messages
      - issues SF;N to list all new message headers,
      - logs off

    Offline scanning and marking of message headers (2)

    Downloading of selected messages (3)
      - automatic logon,
      - issues RI for each message selected,
      - logs off

    Offline reading and replying to messages (4)

    Uploading of original messages and replies (5)(6)
      - automatic logon,
      - issues RE and supplies message replies,
      - issue L and supplies new message text,
      - logs off

    Note. The automatic sequence can be terminated when online
    by using the ENTER key. Thus, if problems develope, you can
    gain manual control.

















(1) Compose Offline.
====================

    Messages can be prepared offline. The format and prompting is similiar
    to those of the Leave command. Once composed, the messages can be sent
    automatically by selecting option (6).

(2) Scan and mark offline.
==========================

    The CIS message headers are listed one by one. You may Mark any that
    you wish to read later. For each message that is marked, an RI command
    is generated.

(3) Read messages online.
=========================

    The RI commands generated by option (2) are passed to CIS, and the text
    of the selected messages is saved for viewing in option (4).

(4) Read and reply offline.
===========================

    The selected messages, from (3), are displayed or printed. You are
    asked to Continue, Reply, or Delete after each one. If you choose
    to reply, option (1) - compose offline - is invoked. Upon completing
    your reply, the next message is presented. The program generates
    RE commands followed by your text.

(5) Send replies to messages.
=============================

    The replies prepared above are sent automatically to CIS using the.
    REply command.

(6) Send originals online.
==========================

    Original messages that you composed are sent automatically to CIS
    using the Leave command.

(7) Re-configure.
=================

    Invokes the configuration routine so that you may change the CIS page,
    telephone, etc.

(8) Go online.
==============

    This option operates as a simple terminal program. You may choose
    to automatically dial and logon, but then the reset is up to you.
    To terminate the online mode, enter ctrl-D.

(9) Return to BASICA.
=====================

    Terminates AUTOSIG and returns to BASICA, or DOS if the compiled
    version is used.

END.

```
{% endraw %}

## CTTY.DOC

{% raw %}
```
                          CTTY.DOC

I asked around about the DOS 2.0/2.1 function CTTY and could
not find anyone familiar with it. So I put on my hacker's cap
and "went to it." (After midnight, in true hacking style.)
The DOS manual explains that the command is simply CTTY
device-name. This will transfer control from the keyboard and
screen to that device.  It suggests that LPT1: is not a ood
idea since the printer communicates (mostly) one way. What
this really leaves is COM1:, COM2: and AUX: (Whatever AUX:
is! [I'd love to hear from someone about AUX:])

I very cleverly tried typing CTTY COM1: It does do something,
it kills the keyboard and a cold BOOT is necessary to
restart. Well, that wasn't it. Something must occur prior to
the CTTY command. Being strickly a seat-of-the-pants type, I
set the HAYES to ANSWER and called in. Nice, I had a
connection (CARRIER/carrier). I rushed over to the PC
keyboard and typed CTTY COM1: and the screen went dead. So,
what else is new....But, on my other SYSTEM, (other end of
the office), the prompt A> appeared. I sat and typed on the
terminal just as though I was sitting in front of the IBM.
Well, what do you know?

1) Commands are limited to what the terminal keyboard can
reproduce i.e. ^C for CTRL-BREAK but not CTRL-ALT-DEL (as if
you would want that one anyway).

2) Going to BASIC cuts you off. SYSTEM control returns to the
keyboard.

3) Most commands work except COPY as it relates to CON: or
COM1: COPY from disk to disk worked O.K.

4) This means is total control from outside while in DOS
only on a line-by-line basis. Anything which relies on screen
mapping will not work. (I ran Norton's DISKMAP from the
terminal and the map appeared on the PC screen.)

                           Now...

You may be wondering why all this verbage. Well.... the
result of my efforts is a BASIC program called RING.BAS which
will set up the HAYES to patiently look for an incoming ring,
and very politely turn SYSTEM control over to the caller. Oh,
I forgot to mention the BASIC program must be called from a
BATCH file called OUTSIDER.BAT. When RING goes back to the
SYSTEM, the next command is CTTY COM1: Slick, huh? RING will
even write the BATCH file for you. Just take a look at the
internal documentation for additional information. The
program is not fancy and I can think of lots to add to it,
but I am sure you can too.....

Dan Derrick 2/21/84  70215,1136

```
{% endraw %}

## HC.ASM

{% raw %}
```
; hc.asm v1.4           2/10/84
; fast hexconverter
; Copyright (C) 1984 Martin Smith
;
; Fixes odd line problem, further optimized.
;
; Assemble and then use EXE2BIN to make a COM file.
;
; Convert com/exe/bin to hex or back.
; format
; 1) hc file.hex file.com
; 2) hc file.com file.hex
; 3) hc file.hex
;       program examines file for .exe format, else .com
; 4) hc file(.com/.exe/.bin)
;       program outputs file.hex
; 5) hc
;       program prints doc.
; Note: HC does is NOT produce an Intel format HEX file.
;       Rather it is the modulo 2048 single checksum format
;       found on many IBM BBS's.

        title [[hc]] hexconverter
        page 60,100

TRUE    equ     -1
FALSE   equ     0
EOF     equ     26      ; Ctrl-Z
PARAGRAPHS      EQU     256     ; adjust for program size, leaving room
                                ; for a stack. Generally leave alone.
BUFSIZE         EQU     64      ; for args

; DOS function calls used

DISPLAYOUT      EQU     0200H
PRINTSTRING     EQU     0900H
GETDOSVERSION   EQU     3000H
CREAT           EQU     3C00H
OPENFILE        EQU     3D00H
CLOSEFILE       EQU     3E00H
READFILE        EQU     3F00H
WRITEFILE       EQU     4000H
DELETEFILE      EQU     4100H
ALLOCATE        EQU     4800H
FREEMEMORY      EQU     4900H
SETBLOCK        EQU     4A00H

cseg    segment para 'code'
        org     100h                    ; COM program
        assume  cs:cseg,ds:cseg

start   proc    far

begin:
        mov     bp,sp
        mov     cs:oldstack,bp
        test    ax,0ffffh               ; test for invalid drive spec.
        jz      begin_ok
        mov     ax,15                   ; invalid drive
        jmp     report_bad

begin_ok:
        mov     ax,cs                   ; better safe than sorry.
        mov     ds,ax
        mov     es,ax

        mov     dx,offset himess        ; print greeting
        mov     ax,PRINTSTRING
        int     21h
        mov     si,80h                  ; get args
        mov     di,offset arg1
        mov     cl,[si]
        cmp     cl,0                    ; no args
        jnz     ck_for_right_dos
        jmp     do_doc                  ; so print a documentation

ck_for_right_dos:
        push    si
        push    di
        push    cx
        mov     ax,GETDOSVERSION
        int     21h
        pop     cx
        pop     di
        pop     si
        cmp     al,2                    ; dos 2.+ ?
        jnb     dos_ok
        mov     dx,offset must_be_20
        jmp     report_abort

dos_ok:

        mov     sp,16*PARAGRAPHS-1      ; stack not adjusted by
        mov     bp,sp                   ; SETBLOCK, so must do it here.
                                        ; adjust PARAGRAPHS in EQUates to
                                        ; reflect program size.
        mov     ch,0

b2:
        inc     si                      ; ignor leading blanks
        mov     al,[si]
        cmp     al,' '
        jnz     b3
        loop    b2
        jmp     do_doc                  ; do doc if no args

b3:
        mov     [di],al                 ; else copy first arg to our space
        inc     di
        inc     si
        mov     al,[si]
        cmp     al,' '
        jz      b4
        cmp     al,13
        jz      b4
        loop    b3

b4:
        dec     cx              ; got an arg, allow for trailing blanks
        mov     al,0            ; keep up with CX to use LOOP instruction
        mov     [di],al
        mov     byte ptr cs:numargs,1
        cmp     cx,0
        jnz     b5
        jmp     memory_setup

b5:
        mov     di,offset arg2  ; after this its arg2
        dec     cx              ; keep up with CX
        cmp     cx,0
        jnz     b6
        jmp     memory_setup

b6:
        inc     si              ; ignor leading blanks
        mov     al,[si]
        cmp     al,' '
        jnz     b7
        loop    b6
        jmp     memory_setup    ; go to next if nothing

b7:
        mov     [di],al         ; else copy input to our space.
        inc     di
        inc     si
        mov     al,[si]
        cmp     al,' '
        jz      b8
        cmp     al,13
        jz      b8
        loop    b7

b8:
        mov     al,0            ; got an arg, put \0 for ASCIZ
        mov     [di],al
        mov     byte ptr cs:numargs,2
        jmp     memory_setup    ; ignor any more

start   endp

do_doc  proc    near

        mov     dx,offset doc   ; print until $
        mov     ax,PRINTSTRING
        int     21h
        mov     dx,offset do_cr
        jmp     report_abort    ; exit

do_doc  endp

report_bad      proc    near
;
; use AX error return to point DX to message from
; error return table
;
        push    cs
        pop     ds
        shl     ax,1
        mov     si,offset error
        add     si,ax
        mov     dx,[si]

report_bad      endp

report_abort    proc    near
;
; print message from DX, restore regs and abort.
; common exit, neatness counts.
; plus we've screwed around with the stack.
;
        assume  ds:cseg

        mov     bp,cs:oldstack
        mov     sp,bp
        mov     ax,cs
        mov     ds,ax
        mov     es,ax
        mov     ax,PRINTSTRING
        int     21h
        int     20h                     ; common exit all routines

report_abort    endp

hexbin  proc    near
;
;       Convert HEX to binary
;
; Call with     DL = first HEX digit
;               DH = second HEX digit
;
; Returns with  DL = converted byte
;               Carry flag = 0  valid input
;               Carry flag = 1  invalid input
;               Other registers preserved.
;
;       From Dr. Dobbs #74
;       December 1982  p.14
;       by Robert Blair
;
        push    cx
        push    bx
        mov     bl,dl
        call    hexbin_test
        mov     bh,bl
        mov     bl,dh
        call    hexbin_test
        mov     cx,4
        shl     bh,cl
        and     bl,00001111b
        mov     dl,bh
        or      dl,bl
        clc
        pop     bx
        pop     cx
        ret
hexbin_test:
        cmp     bl,'0'
        jb      hexbin_error
        cmp     bl,'9'
        ja      $+3
        ret
;       cmp     bl,'f'          ; don't swap capitols here
;       ja      hexbin_error
;       cmp     bl,'a'          ; lowercase is allright after all.
;       jb      $+6
;       add     bl,9            ; uncomment this if they start up with
;       ret                     ; lowercase hex files.
        cmp     bl,'A'
        jb      hexbin_error
        cmp     bl,'F'
        ja      hexbin_error
        add     bl,9
        ret
hexbin_error:
        clc
        cmc
        pop     bx
        pop     bx
        pop     cx
        ret
hexbin  endp

binhex  proc    near
;
; Convert binary to hex
;
; Call with     DL = byte to convert
;
; Returns with  DL = first HEX digit
;               DH = second HEX digit
;               Other registers preserved
;
        push    cx
        push    bx
        mov     cx,4
        mov     dh,dl
        shr     dl,cl
        and     dh,00001111b
        sub     bh,bh
        mov     bl,dl
        mov     dl,cs:translate_hex [bx]
        mov     bl,dh
        mov     dh,cs:translate_hex [bx]
        pop     bx
        pop     cx
        ret

translate_hex   db      '0123456789ABCDEF'

binhex  endp


print   proc    near
;
; print string until \0
; SI points to first character
; All other regs preserved
; String in CS
;
        push    ds
        push    ax
        push    dx
        mov     ax,cs
        mov     ds,ax

pr1:
        mov     dl,[si]
        cmp     dl,0
        jz      pr2
        mov     ax,DISPLAYOUT
        int     21h
        inc     si
        jmp     pr1

pr2:
        mov     dl,' '                  ; insert space for neatness.
        mov     ax,DISPLAYOUT
        int     21h
        pop     dx
        pop     ax
        pop     ds
        ret

print   endp

crlf    proc    near
                                ; send a carriage return/line feed
        push    dx              ; to console.
        push    ax
        mov     ax,DISPLAYOUT
        mov     dl,13
        int     21h
        mov     ax,DISPLAYOUT
        mov     dl,10
        int     21h
        pop     ax
        pop     dx
        ret

crlf    endp

free_memory     proc    near

        push    ax              ; gives back memory we allocated,
        mov     ax,cs:comseg    ; preserves AX, which maybe has
        mov     es,ax           ; error code.
        mov     ax,FREEMEMORY
        int     21h
        jc      fm_bad
        mov     ax,cs:txtseg
        mov     es,ax
        mov     ax,FREEMEMORY
        int     21h
        jc      fm_bad
        pop     ax
        ret

fm_bad:
        jmp     report_bad

free_memory     endp


memory_setup    proc    near
;
;       request 96k, adjust for less
;
        assume  ds:nothing
        mov     bx,PARAGRAPHS           ; adjust to actual. Use equ at top
        mov     ax,SETBLOCK
        int     21h                     ; SETBLOCK - shrink us
        jnc     msa
        jmp     report_bad

msa:
        mov     bx,1800h                ; ask for 96k
        mov     ax,ALLOCATE
        int     21h
        jnc     msb
        cmp     ax,8                    ; insufficient memory
        jz      ms1

msb:
        mov     bx,1800h                ; got our request
        jmp     ms2

ms1:
        push    bx
        mov     ax,ALLOCATE
        int     21h                     ; so ask for less
        jnc     msc
        jmp     report_bad              ; still fouled up?

msc:
        pop     bx

ms2:
        mov     cs:txtseg,ax
        mov     es,ax                   ; now have allocated total space
        mov     dx,0
        mov     ax,bx
        mov     cx,3
        div     cx                      ; divide by three
        dec     ax                      ; safety factor
        mov     cs:space,ax
        mov     bx,ax
        shl     bx,1                    ; multiply by 2
        mov     ax,SETBLOCK             ; shrink our total space
        int     21h
        jnc     ms2a
        jmp     report_bad              ; get out if error after all this

ms2a:
        mov     bx,cs:space
        mov     ax,ALLOCATE             ; allocate second block
        int     21h
        jnc     ms3
        jmp     report_bad

ms3:
        mov     cs:comseg,ax
        mov     bx,cs:space             ; get 1/3 of paragraphs
        mov     cl,4
        shl     bx,cl                   ; times 16 = bytes available
        dec     bx                      ; sub 2 for safety
        dec     bx
        mov     cs:comspace,bx          ; com file put here in either
        inc     bx                      ; routine.
        inc     bx
        shl     bx,1                    ; times 2 = text space
        dec     bx
        dec     bx
        mov     cs:txtspace,bx          ; hex file always in this one.
        mov     ax,cs:txtspace          ; [bp-2]  structure for easy access
                                        ;         to end of space.
        push    ax                      ;         Valid in either routine.
        mov     ax,cs:comspace          ; [bp-4]
        push    ax
        mov     ax,cs                   ; don't use blocks yet, have
        mov     ds,ax                   ; to do file setup.
        mov     es,ax
        jmp     open_files

memory_setup    endp

write_hc        proc    near
        assume  ds:nothing              ; universal write to file routine.
        push    cx                      ; Saves registers used in time
        push    bx                      ; critical loops, provides safe
        push    ds                      ; error exits. Most of the errors
        push    es                      ; in this program will come from
        pop     ds                      ; disk, so take care here.
        mov     dx,0
        mov     cx,di
        mov     bx,cs:handle2           ; assume file already open for write
        mov     ax,WRITEFILE
        int     21h
        jnc     whc1
        push    cs
        pop     ds
        mov     si,offset arg2          ; lots of messages for foul ups
        call    print
        call    crlf
        shl     ax,1
        mov     si,offset error
        add     si,ax
        mov     dx,[si]
        mov     ax,PRINTSTRING
        int     21h
        jmp     bad_input               ; bad_input tidies up mess.

whc1:
        cmp     di,ax
        jnz     wh_full
        mov     ax,0
        add     cs:f_size,di
        adc     cs:f_size+2,ax
        mov     di,0
        pop     ds
        pop     bx
        pop     cx
        ret

wh_full:
        mov     si,offset cs:disk_full  ; if disk is full,
        call    print
        call    crlf
        call    free_memory
        mov     bx,cs:handle2
        mov     ax,CLOSEFILE            ; close file,
        int     21h
        jnc     wh_full2
        jmp     report_bad

wh_full2:
        push    cs
        pop     ds
        mov     dx,offset arg2
        mov     ax,DELETEFILE           ; then delete it from disk.
        int     21h                     ; save user some time.
        jnc     wh_full3
        jmp     report_bad

wh_full3:
        mov     dx,offset cs:cancelled
        jmp     report_abort

write_hc        endp

hcread  proc    near
                                        ; universal read from file routine.
        push    bx                      ; just slight differences for
        mov     cx,cs:txtspace          ; com->hex and hex<-com.
        push    cx
        jmp     read_input

hcread  endp

chread  proc    near

        push    bx
        mov     cx,cs:comspace
        push    cx
        jmp     read_input

chread  endp

read_input      proc    near

        mov     bx,cs:handle1
        mov     dx,0
        mov     ax,READFILE
        int     21h                     ; read from file
        jnc     ri_ok
        push    ax                      ; if we come back with the
        push    cs                      ; carry flag set, things didn't
        pop     ds                      ; go allright, so we had better
        mov     si,offset arg1          ; not continue
        call    print
        call    crlf
        mov     bx,cs:handle2
        mov     ax,CLOSEFILE            ; close 2
        int     21h
        call    free_memory
        mov     dx,offset arg2
        mov     ax,DELETEFILE           ; delete
        int     21h
        mov     dx,offset cs:cancelled
        mov     ax,PRINTSTRING
        int     21h
        pop     ax
        jmp     report_bad

ri_ok:

        cmp     ax,0                    ; EOF and no checksum?
        jnz     ri1                     ; special case for HEX file.
        cmp     byte ptr cs:com_to_hex,TRUE   ; its all right to not have
        jz      ri1                     ; a checksum, but theres no
        jmp     no_hc_checksum          ; sense in heading back to
                                        ; the process loop.
ri1:
        mov     si,ax
        mov     byte ptr [si],0ffh      ; set last byte to ff for check
        pop     cx
        pop     bx
        mov     si,0
        cmp     ax,cx                   ; all read in?
        jb      ri_done

        ret

ri_done:
        mov     byte ptr cs:all_read,TRUE  ; set flag indicating no more
        cmp     byte ptr cs:com_to_hex,TRUE  ; reading required
        jnz     ri_hc
        mov     cs:comspace,ax          ; store maxbytes all over
        mov     [bp-4],ax
        mov     cx,ax
        ret

ri_hc:
        mov     cs:txtspace,ax
        mov     [bp-2],ax
        mov     cx,ax
        ret

read_input      endp


open_files      proc    near


        mov     ax,cs
        mov     ds,ax
        mov     cx,BUFSIZE*2            ; make args lowercase
        mov     si,offset arg1

of2:
        mov     al,[si]
        cmp     al,'A'
        jl      of3
        cmp     al,'Z'
        ja      of3
        add     al,32
        mov     [si],al

of3:
        inc     si
        loop    of2

        cmp     byte ptr cs:numargs,2      ; have to find which is hex
        jz      of4
        jmp     find_files

of4:
        mov     si,offset arg1

of4a:

        mov     al,[si]
        cmp     al,'.'
        jz      of5
        inc     si
        cmp     al,0            ; end of arg and no extension
        jnz     of4a
        mov     byte ptr cs:com_to_hex,TRUE ; better be true
        jmp     of10

of5:
        inc     si
        mov     al,[si]
        cmp     al,'h'          ; is this hex?
        jz      of6
        mov     byte ptr cs:com_to_hex,TRUE ; set flag
        jmp     of10

of6:
        mov     byte ptr cs:com_to_hex,FALSE  ; first arg is HEX,
        jmp     open                          ; so its hex_to_com.

of10:
        mov     si,offset arg2

of11:
        mov     al,[si]
        cmp     al,'.'          ; look for .
        jz      of12
        inc     si
        cmp     al,0            ; end of arg and no extension
        jnz     of11
        call    free_memory
        mov     dx,offset need_hex   ; two args, one has to be hex
        jmp     report_abort

of12:
        inc     si
        mov     al,[si]
        cmp     al,'h'          ; here this better be HEX
        jz      of13
        call    free_memory     ; otherwise bye bye
        mov     dx,offset need_hex
        jmp     report_abort

of13:
        jmp     open

find_files:                     ; only one arg supplied, have to find which
        mov     si,offset arg1
        mov     di,offset arg2

ff1:
        mov     al,[si]         ; search for extension
        mov     [di],al
        cmp     al,'.'
        jz      ff2
        inc     si
        inc     di
        cmp     al,0            ; no ext means com_to_hex
        jnz     ff1

        dec     di

        mov     byte ptr cs:com_to_hex,TRUE ; make second arg HEX
        mov     al,'.'
        mov     [di],al

ff1a:
        mov     al,'h'
        inc     di
        mov     [di],al
        mov     al,'e'
        inc     di
        mov     [di],al
        mov     al,'x'
        inc     di
        mov     [di],al
        mov     al,0
        inc     di
        mov     [di],al
        jmp     open

ff2:
        inc     si
        inc     di
        mov     cs:temp,di
        mov     al,[si]
        cmp     al,'h'          ; is it hex?
        jz      ff3

        mov     byte ptr cs:check_exe,FALSE ; no, make second HEX
        mov     byte ptr cs:com_to_hex,TRUE
        dec     di
        jmp     ff1a

ff3:
        mov     byte ptr cs:check_exe,TRUE
        mov     byte ptr cs:com_to_hex,FALSE

open:           ; we now have 2 args, with one possibly waiting
                ; for COM or EXE extension
        assume  ds:cseg
        mov     ax,cs
        mov     ds,ax
        cmp     byte ptr cs:com_to_hex,TRUE
        jz      openc
        jmp     openh

openc:
        mov     dx,offset arg1
        mov     ax,OPENFILE     ; for reading
        clc
        int     21h
        jnc     opcok
        mov     si,offset arg1
        call    print
        call    free_memory
        jmp     report_bad

opcok:
        mov     cs:handle1,ax

        mov     dx,offset arg2
        mov     cx,0            ; normal file attribute
        mov     ax,CREAT
        clc
        int     21h
        jnc     opcok1
        mov     si,offset arg2  ; print which file caused error
        call    print
        call    free_memory
        jmp     report_bad

opcok1:
        mov     cs:handle2,ax   ; otherwise store handle
        jmp     com_hex         ; do com->hex

openh:
        mov     dx,offset arg1
        mov     ax,OPENFILE     ; for reading
        clc
        int     21h
        jnc     ophok
        mov     si,offset arg1
        call    print
        jmp     report_bad

ophok:
        mov     cs:handle1,ax
        cmp     byte ptr cs:check_exe,TRUE
        jz      opcheck
        jmp     ophok1

opcheck:
        assume  ds:nothing      ; here we read in first block
        mov     ax,cs:txtseg    ; then look for the  MZ
        mov     ds,ax           ; footprint of an EXE file.

        call    hcread

opcheck2:
        mov     si,0

opchl:
        mov     dl,[si]         ; ignor all leading stuff until
        cmp     dl,13           ; first convertible bytes
        jz      opch1
        cmp     dl,10
        jz      opch1
        cmp     dl,' '
        jz      opch1
        cmp     dl,';'
        jnz     opch4
        call    op_find

        jmp     opchl

opch1:
        inc     si
        jmp     opchl

opch4:

        inc     si
        mov     dh,[si]
        call    hexbin          ; hexbin comes back with carry set
        jnc     opch5           ; if it can't convert input.
        jmp     opcom           ; can't make sense, so make com

opch5:
        mov     al,dl
        inc     si
        mov     dx,[si]
        call    hexbin
        jnc     opch6
        jmp     opcom

opch6:
        mov     dh,dl
        mov     dl,al
        push    cs
        pop     ds
        cmp     dx,5a4dh        ; MZ are the first two bytes of an EXE file.
        jz      opexe           ; make ext EXE
        jmp     opcom           ; make ext COM

op_find:
        inc     si              ; simple ignor
        mov     dl,[si]         ; we can convert files downloaded
        cmp     dl,13           ; without line feeds.
        jnz     op_find
        inc     si
        mov     dl,[si]
        cmp     dl,10
        jnz     opf1
        inc     si

opf1:
        ret

opexe:
        mov     si,cs:temp
        mov     al,'e'
        mov     [si],al
        inc     si
        mov     al,'x'
        mov     [si],al
        inc     si
        mov     al,'e'
        mov     [si],al
        inc     si
        mov     al,0
        mov     [si],al
        jmp     ophok1

opcom:
        mov     si,cs:temp
        mov     al,'c'
        mov     [si],al
        inc     si
        mov     al,'o'
        mov     [si],al
        inc     si
        mov     al,'m'
        mov     [si],al
        inc     si
        mov     al,0
        mov     [si],al

ophok1:
; now have second arg for sure
        mov     dx,offset arg2
        mov     cx,0
        mov     ax,CREAT        ; CREATE a file
        clc
        int     21h
        jnc     ophok2
        mov     si,offset arg2
        call    print
        call    free_memory
        jmp     report_bad

ophok2:
        mov     cs:handle2,ax

open_files      endp

hex_com         proc    near

        mov     ax,cs:txtseg    ; finally use our memory set-up
        mov     ds,ax
        mov     ax,cs:comseg    ; DS always input, ES always output
        mov     es,ax
                                ; first check if data already in buffer

        mov     al,byte ptr cs:check_exe
        cmp     al,TRUE
        jnz     hc1
        jmp     hc_read

hc1:
        call    hcread

hc_read:
        mov     si,0
        mov     di,0
        mov     bx,0            ; checksum stored in BX, don't lose it
        mov     cx,cs:txtspace

hcloop:
        mov     dl,[si]         ; most used routine, process stuff till
        cmp     dl,13           ; out of space in buffer or EOF
        jz      hclcont
        cmp     dl,10
        jz      hclcont
        cmp     dl,' '
        jz      hclcont
        cmp     dl,';'
        jz      hcl8

hcl1:
        cmp     dl,0ffh         ; if we run out of data,
        jz      hcl6

hcl2:
        inc     si

hcl3:
        mov     dh,[si]
        cmp     dh,0ffh
        jz      hcl5
        call    hexbin          ; if nothing else works it must be data
        jc      bad_i

hcl4:
        mov     es:[di],dl      ; store
        xor     dh,dh
        add     bx,dx           ; checksum
        and     bx,07ffh
        inc     di
        cmp     di,[bp-4]       ; output buffer size in [bp-4]
        jz      hcl7

hclcont:
        inc     si

        jmp     hcloop

hcl5:
        push    dx
        call    hcread          ; if we fall through here, we need more
        pop     dx
        jmp     hcl3            ; data, then go back for more loop.

hcl6:
        call    hcread          ; go dig up some more.
        jmp     hcloop

hcl7:
        call    write_hc        ; write buffer when full.
        jmp     hclcont

hcl8:
        sub     cx,si           ; checksum uses cx
        call    checksum        ; may or may not return to here
        jmp     hclcont
bad_i:
        push    cs
        pop     ds
        mov     si,offset arg1
        call    print              ; if hexbin comes back invalid
        call    crlf               ; abort routine and clean up.
        mov     dx,offset not_hex
        mov     ax,PRINTSTRING
        int     21h

bad_input:
        call    free_memory     ; restores memory to original,
        mov     bx,cs:handle1   ; closes both files,
        mov     ax,CLOSEFILE    ; then deletes output file.
        int     21h
        jnc     bi1
        jmp     report_bad

bi1:
        mov     bx,cs:handle2
        mov     ax,CLOSEFILE
        int     21h
        jnc     bi2
        jmp     report_bad

bi2:
        push    cs
        pop     ds
        mov     dx,offset cs:arg2
        mov     ax,DELETEFILE
        int     21h             ; delete output file
        jnc     bi3
        jmp     report_bad

bi3:
        mov     dx,offset cs:cancelled
        jmp     report_abort


hex_com endp

checksum        proc    near
;
; si points to ';'
; check for checksum, else read to end of line
;
        push    es
        push    di
        mov     ax,cs
        mov     es,ax
        cld
        mov     dh,0
        inc     si
        cmp     dl,0ffh         ; its possible to hit end of buffer
        jnz     ch0             ; during this, so we need to check
        call    hcread          ; and cope.

ch0:
        mov     dl,[si]         ; we can convert ;checksum
        cmp     dl,'c'          ;             or ;CHECKSUM
        jnz     ch0a
        mov     di,offset cs:lchksum+1
        jmp     ch1

ch0a:
        cmp     dl,'C'
        jnz     ch_read_end
        mov     di,offset cs:uchksum+1

ch1:
        cmpsb                   ; compare till the bitter end.
        jnz     ch_read_end
        dec     cx
        cmp     cx,0
        jnz     ch2
        call    hcread

ch2:
        inc     dh
        cmp     dh,8
        jnz     ch1
        pop     di
        pop     es              ; this is it.
        pop     ax              ; discard return, no longer need hcloop
        jmp     dhc1            ; found checksum word

ch_read_end:
        dec     si

cre1:
        mov     dl,[si]         ; no find, so read till end
        cmp     dl,13           ; of line and go back to hcloop
        jz      cre_back
        inc     si
        dec     cx
        cmp     cx,0
        jnz     cre2
        call    hcread

cre2:
        jmp     cre1

cre_back:
        pop     di
        pop     es
        ret

dhc1:
        mov     dl,[si]         ; ignor leading blanks
        cmp     dl,' '
        jnz     dhc2
        inc     si
        dec     cx
        cmp     cx,0
        jnz     dhc1
        call    hcread          ; get more text if end of buffer
        jmp     dhc1

dhc2:
        push    cx              ; convert ASCII checksum to binary
        mov     ax,0
        mov     cx,10
        mov     dh,0

dhc3:
        mov     dl,[si]         ; read numbers until no number
        cmp     dl,'0'
        jae     dhc4
        jmp     dhc_found

dhc4:
        cmp     dl,'9'
        jbe     dhc5
        jmp     dhc_found

dhc5:
        push    dx              ; the old multiply by ten routine
        mov     dx,0            ; to convert ASCII number string
        mul     cx              ; into binary
        pop     dx
        sub     dl,'0'
        add     ax,dx
        inc     si
        pop     cx
        dec     cx              ; CX still has the loop or buffer count
        cmp     cx,0
        jnz     dhc5a
        call    hcread          ; oops, ran out of buffer, so fill up again.

dhc5a:
        push    cx
        mov     cx,10
        jmp     dhc3

dhc_found:
        pop     cx              ; got a checksum.
        cmp     bx,ax           ; does checksum check out?
        jz      dhc_ok
        mov     si,offset cs:chk_bad
        call    print
        call    crlf
        jmp     dhc_cont        ; report either way.

dhc_ok:
        mov     si,offset cs:chk_ok
        call    print
        call    crlf
        jmp     dhc_cont

no_hc_checksum:
        mov     si,offset chk_no  ; its OK not to have a checksum,
        call    print           ; but we're more confident if its there
        call    crlf

dhc_cont:
        call    write_hc        ; write final section.

dhcok1:
        mov     bx,cs:handle2
        mov     ax,CLOSEFILE
        int     21h             ; close outfile
        jnc     dhcok2
        call    free_memory     ; hope things don't bomb after all this
        jmp     report_bad

dhcok2:
        mov     bx,cs:handle1
        mov     ax,CLOSEFILE
        int     21h             ; close infile
        jnc     dhcok3
        call    free_memory
        jmp     report_bad

dhcok3:

        call    free_memory     ; give back memory
        mov     si,offset cs:arg2
        call    print
        call    crlf
        call    print_file_size
        mov     dx,offset cs:msuccess  ; print a reassuring message
        jmp     report_abort    ; clean up and go home.

checksum  endp

print_file_size proc    near
                                ; print out file size bytes using
        assume  ds:cseg         ; bcd table
        push    cs
        pop     ds
        mov     bx,offset cs:bcd0
        mov     si,0
        mov     ax,cs:f_size
        mov     dx,1

pfs1:
        test    ax,dx           ; test bits
        jz      pfs2
        call    add_bcd         ; add in bcd if so

pfs2:
        add     si,5            ; bump pointer
        cmp     dx,8000h        ; test for end
        jz      pfs3
        shl     dx,1            ; get next test
        jmp     pfs1

pfs3:
        mov     ax,cs:f_size+2  ; get hi word
        mov     dx,1            ; start again

pfs4:
        test    ax,dx
        jz      pfs5
        call    add_bcd

pfs5:
        add     si,5
        cmp     dx,0100h        ; only need up to 16meg
        jz      pfs6
        shl     dx,1
        jmp     pfs4

pfs6:
        mov     si,offset bf_size
        call    print_bcd       ; print out result
        mov     si,offset cs:f_len
        call    print           ; print 'bytes recorded'
        call    crlf
        ret                     ; back

add_bcd:
        push    si
        push    ax
        mov     di,offset bf_size  ; point to bcd storage
        mov     cx,5            ; its five bytes long
        clc                     ; clear carry to start

ab1:
        mov     al,[bx+si]      ; get byte
        adc     al,[di]         ; add
        daa                     ; adjust for bcd
        mov     [di],al         ; store
        inc     si              ; bump
        inc     di
        dec     cx              ; check
        jnz     ab1             ; leave if done

        pop     ax
        pop     si
        ret

print_bcd:
        add     si,4            ; go to end (high byte)
        mov     cx,5            ; set up for five total
        mov     ax,0            ; AH used to check first zero

pbd1:
        mov     dl,[si]         ; get byte
        cmp     ah,1            ; see if we've started to print
        jz      pbd2            ; if so don't skip
        cmp     dl,0            ; else check if zero
        jz      pbd3            ; and skip if so

pbd2:
        mov     dh,dl           ; copy
        push    cx              ; don't lose place
        push    ax
        mov     cl,4            ; bcd:( 12 hex. = 12 dec. for example)
        shr     dl,cl           ; shr makes ( 01 )
        cmp     ah,1            ; if printing print
        jz      pbd2a
        cmp     dl,0            ; else see if zero
        jz      pbd2c           ; and don't print if so

pbd2a:
        add     dl,30h          ; make ASCII ( '1' )
        push    dx
        mov     ax,DISPLAYOUT   ; print
        int     21h
        pop     dx

pbd2c:
        mov     dl,dh           ; get copy ( 12 )
        and     dl,0fh          ; mask     ( 02 )
        add     dl,30h          ; make ASCII ( '2' )
        mov     ax,DISPLAYOUT   ; print
        int     21h
        pop     ax
        pop     cx
        mov     ah,1            ; now set flag to print rest

pbd3:
        dec     si
        dec     cx
        jnz     pbd1            ; loop till done.
        ret

print_file_size endp


com_hex         proc    near
; files are open, nothing read in yet.

        mov     ax,cs:txtseg    ; do everything in reverse
        mov     es,ax
        mov     ax,cs:comseg    ; remember in-buffer = DS
        mov     ds,ax           ;         out-buffer = ES
        mov     si,0
        mov     di,0
        mov     bx,0

        call    chread
        mov     ah,0            ; use for line length
                                ; need to put crlf every 32(64) bytes.
chloop:
        mov     dl,[si]         ; this is much simpler than hex->com
        mov     dh,0            ; because there is no extraneous stuff
        add     bx,dx           ; chloop is time-critical, cause
        and     bx,07ffh        ; its 90% of routine
        call    binhex
        mov     es:[di],dx
        inc     ah
        cmp     ah,32
        jnz     ch2a
        inc     di
        inc     di
        cmp     di,[bp-2]       ; out of space in text buffer?
        jnz     ch1a
        call    write_hc        ; clean it out.

ch1a:
        mov     ax,0a0dh        ; crlf
        mov     es:[di],ax
        mov     ah,0

ch2a:
        inc     si
        inc     di
        inc     di
        cmp     di,[bp-2]       ; this buffer is an even number so
        jnz     ch3             ; we don't need to worry about
        push    ax              ; odd addresses like in hex->com
        call    write_hc        ; [bp-2] = always text buffer
        pop     ax              ; [bp-4] = always com buffer

ch3:
        loop    chloop

        cmp     byte ptr cs:all_read,TRUE  ; if its all read in
        jz      ch4                        ; we are almost done.
        push    ax
        call    chread          ; else read next and continue
        pop     ax              ; chread will set CX to length of data
        cmp     cx,0            ; tried to read past EOF?
        jz      ch4             ; then we're finished with loop.
        jmp     chloop

ch4:
        push    ax
        call    write_hc        ; clear buffer to make life simpler
        pop     ax
        cmp     ah,0            ; just did EOL?
        jz      ch4a
        mov     ax,0a0dh        ; skip extra crlf
        mov     es:[di],ax
        inc     di
        inc     di

ch4a:
        mov     ax,0a0dh
        mov     es:[di],ax
        inc     di
        inc     di

        push    cs              ; write out ;checksum
        pop     ds
        mov     si,offset cs:lchksum
        mov     cx,10
        cld

        rep     movsb           ; ;checksum

        mov     ax,bx           ; compute ASCII representation of
        mov     dx,0            ; checksum and make it neat.
        mov     cx,1000
        div     cx
        mov     ch,0
        cmp     ax,0            ; no 1000s?
        jz      ch5
        add     al,30h          ; ASCII 0
        mov     es:[di],al
        inc     di
        mov     ch,1

ch5:
        mov     ax,dx           ; remainder
        mov     cl,100
        div     cl
        cmp     ch,1
        jz      ch5a
        cmp     al,0            ; no 100s?
        jz      ch6

ch5a:
        add     al,30h
        mov     es:[di],al
        inc     di
        mov     ch,1

ch6:
        mov     al,ah
        mov     ah,0
        mov     cl,10
        div     cl
        cmp     ch,1
        jz      ch6a
        cmp     al,0            ; no 10s?
        jz      ch7

ch6a:
        add     al,30h
        mov     es:[di],al
        inc     di

ch7:
        mov     al,ah           ; must print at least one number
        add     al,30h
        mov     es:[di],al
        inc     di
        mov     ax,0a0dh        ; crlf
        mov     es:[di],ax
        inc     di
        inc     di
        mov     al,EOF          ; Ctrl-Z
        mov     es:[di],al
        inc     di

        call    write_hc
        jmp     dhcok1          ; close and finish


com_hex         endp

messages        proc    near

himess  db      '[[hc]]  MS-DOS 2.+ hexconverter,',13,10
        db      '  v1.4 by Marty Smith.',13,10,13,10,'$'


need_hex        db      'One of files must be .HEX',13,10,'$'
not_hex         db      'Not a hex format file.',13,10,'$'
lchksum         db      ';checksum '   ; 10 bytes
uchksum         db      ';CHECKSUM '
msuccess        db      'Successfully created!',13,10,'$'
chk_ok          db      'Checksum verified.',0
chk_bad         db      'Checksums different,',13,10
                db      'file possibly bad.',0
chk_no          db      'No checksum found.',0
disk_full       db      'Disk full.',0
cancelled       db      'Please check file.',13,10,'$'
f_len           db      ' bytes recorded.',0
must_be_20      db      '** Must be running DOS 2.+ **',13,10,'$'
do_cr           db      13,10,'$'

; DOS error returns we may encounter, others return 'unknown error'

err0    db      'unknown error.',13,10,'$'
err1    db      'bad function number.',13,10,'$'
err2    db      'file not found.',13,10,'$'
err3    db      'path not found.',13,10,'$'
err4    db      'too many files.',13,10,'$'
err5    db      'access denied.',13,10,'$'
err6    db      'invalid handle.',13,10,'$'
err7    db      'memory blocks damaged.',13,10,'$'
err8    db      'insufficient memory.',13,10,'$'
err9    db      'bad memory block address.',13,10,'$'
err12   db      'bad access code.',13,10,'$'
err15   db      'bad drive specified.',13,10,'$'
err17   db      'not same device.',13,10,'$'
err18   db      'no more files.',13,10,'$'

error   dw      err0,err1,err2,err3,err4,err5,err6,err7,err8,err9,err0
        dw      err0,err12,err0,err0,err15,err0,err17,err18

f_size          dw      0               ; dword file size
                dw      0
txtseg          dw      0               ; memory management
txtspace        dw      0
comseg          dw      0
comspace        dw      0
space           dw      0               ; temp for figuring workspace
handle1         dw      0               ; file handles
handle2         dw      0
temp            dw      0               ; scratch
oldstack        dw      0               ; store orig. stack ptr.

numargs         db      0               ; command line number of args.
arg1            db      BUFSIZE dup (' ')  ; plenty of space for args
arg2            db      BUFSIZE dup (' ')  ; and PATHs
com_to_hex      db      0               ; flags
check_exe       db      0
all_read        db      0

bf_size  db     5 dup (0)               ; bcd file size

bcd0    db      01h,00h,00h,00h,00h     ; five byte bcd power of 2
        db      02h,00h,00h,00h,00h     ; 2^0 to 2^24
        db      04h,00h,00h,00h,00h     ; for showing file size
        db      08h,00h,00h,00h,00h     ; up to 16meg MS-DOS limit
        db      16h,00h,00h,00h,00h
        db      32h,00h,00h,00h,00h
        db      64h,00h,00h,00h,00h
        db      28h,01h,00h,00h,00h
        db      56h,02h,00h,00h,00h
        db      12h,05h,00h,00h,00h
        db      24h,10h,00h,00h,00h
        db      48h,20h,00h,00h,00h
        db      96h,40h,00h,00h,00h
        db      92h,81h,00h,00h,00h
        db      84h,63h,01h,00h,00h
        db      68h,27h,03h,00h,00h
        db      36h,55h,06h,00h,00h
        db      72h,10h,13h,00h,00h
        db      44h,21h,26h,00h,00h
        db      88h,42h,52h,00h,00h
        db      76h,85h,04h,01h,00h
        db      52h,71h,09h,02h,00h
        db      04h,43h,19h,04h,00h
        db      08h,86h,38h,08h,00h
        db      16h,72h,77h,16h,00h

; doc at end so it can be used for stack space.

doc     db      'Converts HEX format files to COM,EXE or BIN.',13,10
        db      '  or COM,EXE or BIN files to HEX.',13,10,13,10
        db      '  Type: >hc in_file [out_file]',13,10,13,10
        db      'If TWO files are entered, ONE of them MUST be HEX,',13,10
        db      '  i.e. xxx.HEX xxx.COM = Hex to Com, xxx.EXE xxx.HEX = Exe to Hex.',13,10,13,10
        db      'If ONE file is entered, the following occurs:',13,10
        db      '   If the first file has no extension, or it is non-HEX:',13,10
        db      '       A second file is made in HEX format, with an extension .HEX.',13,10
        db      '   If the first file has a .HEX extension:',13,10
        db      '       The program will automatically provide a .COM or .EXE extension,',13,10
        db      '       depending on file type.'
        db      '$'

messages        endp

cseg    ends                    ; that's all folks
        end     start
```
{% endraw %}

## HC.DOC

{% raw %}
```
***************************************************************
*                         [[hc.com]]                          *
***************************************************************

               a Useful Utility by Marty Smith.

Hex File converter.  Converts to and from HEX format. Can
automatically provide a COM or EXE extension.

Format:
          >hc [d:][path]infile [[d:][path]outfile]

If TWO files are supplied, one of them MUST be HEX.

o       First file = HEX, program does HEX -> COM, EXE, BIN etc.

o       First file = COM, EXE, BIN etc. program does COM -> HEX.

If ONE file is supplied, the following takes place:

o       First file = no extension or anything other than HEX,

                Second file is created in HEX format.

o       First file = HEX extension,

                Second file is created with COM or EXE extension,
                        depending on file type.

If NO files are supplied, a short documentation is printed.

Ironically, you need a hexconverter if you download HC.HEX. If you are
on a board with XMODEM protocol, you can download HC.COM directly.
A third program, MAKEHC.BAS is a BASIC program that will create HC.COM.

This version corrects a lurking bug in the original which showed
itself when trying to convert a large HEX file that appended a space
at the end of each line. This ensured that somewhere HC had to convert
a broken byte before and after a disk access, which was the problem.
In fixing this HC's HEX->COM routine is further optimized, but now
will not convert lowercase HEX files, not a problem at present.

There are a lot of hexconverters in for IBM(tm) and compatible
computers, all following the same basic format.  HC.COM is compact,
written entirely in 8088 assembler and capable of converting files up to
the MS-DOS(tm) limit with no problem.  Total conversion time for a 70K
hex download on floppies is about 15 seconds.

HC.COM uses only regular MS-DOS 2.x function calls, so compatibility
should be no problem. PATH names are fully supported. Users of DOS 1.1
and earlier unfortunately will not be able to use this program.

A hexconverter divides each byte into two bytes, so that all information
in eight bit files is preserved in seven bit data transfers. When it
operates in reverse, the hex file is converted back to its original form,
and checked for accuracy with a number placed at the end of the file
called a checksum. This is simply the number values of the bytes in the
file added together modulo 2048 in this case.

Program by:

Marty Smith                  CompuServe   72155,1214
310 Cinnamon Oak Lane        (713) 661-1241 [Office]
Houston, TX  77079           (713) 464-6737 [Home]
2/10/84

```
{% endraw %}

## PCT3JR.DOC

{% raw %}
```
 PCT3JR.DOC
 PCT3JR.MRG
                03/11/84  Michael Eorgoff
                PPN  70516,1272

        PCTJR.MRG is a "MERGE" file for PC-TALK3.  It corrects the activities
of the Alt-R(receive file) and Alt-S(print screen) in the PCjr environment.
The PCjr shuts off and ignores all other interrupts when it is time to do
a disk access.  For the Alt-R without any modifiers(ie.=x), XOFF is sent
to the remote computer whenever it becomes desirable for the PCjr to
access the disk.  The loop using 64060-64080 is used to wait for incoming
comm activity to die down.  All input from the comm buffers is put into
intermediate buffers until such time as there is no more.  Then the inter-
mediate buffers are written out to disk.  After the intermediate buffers
are written out, then an XON is sent to the remote computer.  Closing the
file is nested in a check for outstanding intermediate buffers that need
to be written before the actual close is performed.
        The choice of five buffers for the intermediate buffering was
made by trial, error, and esthetics.  The first reason for multiple buffers
is that some transmitting programs are slow to react to the XOFF request.
PCTALK is one of these.  Also, at 1200 baud, there can be an appreciable
amount of information that is incoming in the transmission network being
employed.  What happens is that even though you have issued the XOFF
in your program, the remote computer may not immediately respond.  This
leaves the communications input buffer in a non-empty condition.  Therefore,
you must empty it into multiple buffers.  The XOFF may be slow in getting
transmitted.  It appears that BASIC handles all the incoming information
before worrying about the outgoing.  The esthetic consideration is also one
of performance. The screen display gets very choppy when small numbers of
buffers are used.  The amount of time overhead needed to wait out the
incoming characters, and the actual disk time, appear to require that more
buffering is supplied so that the communications doesn't appear to be
unreasonably slowed down.
        The Alt-S(screendump) was couched in an XOFF-XON pair during the
entire duration of its activity.
        Remember, is all else fails, go to sleep.  It won't get any better.
The manuals don't necessarily provide ALL the information, and probably most
of the books won't either.

        P.S. PCT3JR was used to upload itself.

```
{% endraw %}

## RING.BAS

{% raw %}
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
{% endraw %}

## SCRIPT.DOC

{% raw %}
```
                        Crosstalk Script files

The following is a rather lenghty procedure to set up a menu processing system
for Crosstalk.  Included are procedures to perform automatic logon and capture
to the IBMSIG which may be extracted and used as standalone Xtalk scripts.

The script and menu files were written by Steven Greenberg, who seems to know
everything there is to know about script files, and this document put together
by Don Watkins, who knows nothing about script files.  Steve has donated these
scripts to the SIG and hopes they'll be of some help and use to members.

The Menu facility is composed of two files:
                        AUTOEXEC.BAT - Contains the command XTALK MENU
                                       which brings up XTALK on power-up or
                                       or reset and executes the file MENU.XTK
                        MENU.XTS     - Contains the menu text and key trapping
                                       script code.
Contents of MENU.XTS (editors note.... the CROSSTALK - XVI were done very
nicely in with ASCII characters 205 (top) and 186(sides) they have been
changed as CIS will not accept them):

SCREEN TERMINAL
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                        Information Services Available:


                                1)   CompuServe

                                2)   Dow Jones

                                3)   The Source

                                4)   Home Banking


                                5)   Exit to DOS


.
LABEL ASKSERVICE
ASK Please choose one of the above (1,2,3,4,5):
IF -012345 JUMP ASKSERVICE
JUMP DO-@
LABEL DO-1
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                                   CompuServe
.
LABEL CSSIG-YN
ASK Do you wish to automaticaly capture the latest info on the IBM SIG (Y,N):
IF -YN JUMP CSSIG-YN
IF N JUMP CSSIG-N
MESSAGE

                          IBM PC Special Intrest Group
.
LABEL CSSPEED1
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP CSSPEED1
IF 1 SPEED 1200
IF 3 JUMP CSSPEED1-3
MESSAGE

                                   1200 baud







.
JUMP CSCONFIRM1
LABEL CSSPEED1-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL CSCONFIRM1
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP CSCONFIRM1
IF N RWIND
LO CSIBMSIG
LABEL CSSIG-N
MESSAGE

                                Standard Log-On
.
LABEL CSSPEED2
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP CSSPEED2
IF 1 SPEED 1200
IF 3 JUMP CSSPEED2-3
MESSAGE

                                   1200 baud







.
JUMP CSCONFIRM2
LABEL CSSPEED2-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL CSCONFIRM2
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP CSCONFIRM2
IF N RWIND
LO CSERVE
ABORT
LABEL DO-2
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                                   Dow Jones
.
LABEL DJ1
MESSAGE

                                Standard Log-On
.
LABEL DJSPEED
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP DJSPEED
IF 1 SPEED 1200
IF 3 JUMP DJSPEED3
MESSAGE

                                   1200 baud







.
JUMP DJCONFIRM
LABEL DJSPEED3
SPEED 300
MESSAGE

                                   300 baud







.
LABEL DJCONFIRM
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP DJCONFIRM
IF N RWIND
LO DOWJONES
ABORT
LABEL DO-3
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                                   The Source
.
LABEL TS1
MESSAGE

                                 Standard Log-On
.
LABEL TSSPEED
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP TSSPEED
IF 1 SPEED 1200
IF 3 JUMP TSSPEED-3
MESSAGE

                                   1200 baud







.
JUMP TSCONFIRM
LABEL TSSPEED-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL TSCONFIRM
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP TSCONFIRM
IF N RWIND
LO SOURCE
ABORT
LABEL DO-4
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                          Information Service Chosen:


                         Bank of America - Home Banking
.
LABEL BA1
MESSAGE

                                 Standard Log-On
.
LABEL BASPEED
ASK Please choose the transmission speed - 300 or 1200 baud (3=300,1=1200):
IF -13 JUMP BASPEED
IF 1 SPEED 1200
IF 3 JUMP BASPEED-3
MESSAGE

                                   1200 baud







.
JUMP BACONFIRM
LABEL BASPEED-3
SPEED 300
MESSAGE

                                    300 baud







.
LABEL BACONFIRM
ASK Please confirm that the above choices are correct (Y,N):
IF -YN JUMP BACONFIRM
IF N RWIND
LO HOMEBANK
ABORT
LABEL DO-5
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                         < < <   W A R N I N G   > > >


                                  Exit to DOS











.
ALERT
LABEL XDCONFIRM
ASK Please confirm that the above choice is correct (Y,N):
IF -YN JUMP XDCONFIRM
IF N RWIND
XD
LABEL DO-0
CLEAR
MESSAGE
                      ***********************************
                      *                                 *
                      *    C R O S S T A L K - X V I    *
                      *                                 *
                      ***********************************



                         < < <   W A R N I N G   > > >


                             Exit to CROSSTALK XVI











.
ALERT
LABEL XCCONFIRM
ASK Please confirm that the above choice is correct (Y,N):
IF -YN JUMP XCCONFIRM
IF N RWIND
SCREEN STATUS
CLEAR
ABORT

MENU script ends with ABORT

As you will note there are many options available with the menu, however all
the script files will not be included here as they may not be of interest to
all members. The CIS and CIS/IBMSIG logon scripts will be included and
will hopefully serve as models for script files that serve your needs.
The CIS logon script is composed of two files:
                        CSERVE.XTK - The standard Xtalk .XTK file with slight
                                     modifications. You can, of course, alter
                                     the function keys to suit your needs.
                        CSERVE.XTS - The logon script file
CSERVE.XTK follows:
NAme     CompuServe Information Service
NUmber   nnn-nnnn
ACcept   Everything
ANswback On
ATten    Esc
BReak    End
SWitch   Home
CWait    None
LWait    None
DEbug    Off
DPrefix  ATDT
DSuffix  |
EMulate  None
INfilter On
LFauto   Off
MOde     Call
POrt     1
PWord
TImer    On
TUrnarnd Enter
BKsize   1
CApture  Off
COmmand  ETX (^C)
DAta     8
DUplex   Full
OUtfiltr On
PArity   None
PRinter  Off
STop     1
TAbex    Off
BLankex  Off
UConly   Off
FK 1 ""
FK 2 ""
FK 3 ""
FK 4 "CROSSTALK - XVI "
FK 5 "@CApture /|"
FK 6 "@PRinter /|"
FK 7 "@TYpe|"
FK 8 "@CApture <24|"
FK 9 "@SNap|"
FK 10 "@SNap 24|"
FK S1 ""
FK S2 ""
FK S3 ""
FK S4 ""
FK S5 ""
FK S6 ""
FK S7 ""
FK S8 ""
FK S9 ""
FK S10 ""
FK C1 ""
FK C2 ""
FK C3 ""
FK C4 ""
FK C5 ""
FK C6 ""
FK C7 ""
FK C8 ""
FK C9 ""
FK C10 ""
FK A1 ""
FK A2 ""
FK A3 ""
FK A4 ""
FK A5 ""
FK A6 ""
FK A7 ""
FK A8 ""
FK A9 ""
FK A10 ""
GO q30/30

CSERVE.XTK ends with GO q30/30
CSERVE.XTS follows:

MESSAGE
Logging onto CompuServe . . . please wait a moment . . .
.
; Log onto CompuServe, give ID and Password.
WAIT QUIET 20
REPLY ^C
WAIT STRING "ID:"
REPLY 12345,678|
WAIT STRING "Password:"
REPLY MYWORD!|

CSERVE.XTS ends with REPLY MYWORD!|
In order to make CSERVE.??? function you will have to add you local CIS node
number as well as your ppn (user id) and password (sorry, no free lunch). This
script also assumes that you are calling in through a direct CIS node and
bypassing Telenet and Tymnet.

To execute the logon and capture all messages to disk you will need two files:
                        CSIBMSIG.XTK - Standard Xtalk .XTK file with slight
                                       modification. Same as CSERVE.XTK so
                                       just COPY as CSIBMSIG.XTK.
                        CSIBMSIG.XTS - Script file for CIS login, transfer to
                                       IBMSIG and retrevial of all messages.

CSIGMSIG.XTS follows:
MESSAGE
Logging onto CompuServe . . . please wait a moment . . .
.
; Log onto CompuServe, give ID and Password.
WAIT QUIET 20
REPLY ^C
WAIT STRING "ID:"
REPLY 12345,678|
WAIT STRING "Password:"
REPLY MYWORD!|
WAIT QUIET 15
REPLY |
; Wait for system prompt and then goto IBM PC SIG.
WAIT CHAR "!"
REPLY GO PCS-131|
; Start capture, wait for prompt, start info dump.
CAPTURE B:CSTEMP.TXT
WAIT STRING "FUNCTION:"
REPLY RTN|
; Watch for first FUNCTION: prompt.
WHEN "FUNCTION:" REPLY | : DO
WAIT MANUAL
; Watch for second FUNCTION: prompt.
WAIT MANUAL
; Watch for prompt and then log-off.
WHEN -
WAIT STRING "FUNCTION:"
REPLY BY|
WAIT STRING "time"
WAIT DELAY 35
BY
; Save file and exit program.
DO MENU

CSIBMSIG.XTS ends with DO MENU
                              WARNING!!
This script assumes you have no messages waiting, if so it would hand on the
pending message, and if left unattended would leaving you hanging at the
"reply, delete, continue" prompt forever (or something close to it).

To use the script files contained in this documentent just extract out each
file with a good text editor or word processor. Each module should run as a
standalone script with using the MENU if you're so inclined.

These files were provided to be helpful hints on Xtalk script writing as well
be actual working script files.  If they cause your machine to blow up or
result in you incurring 182 hours of CIS connect time, the author assumes no
libaility. Altho these scripts are used on a daily basis you should, as with
any new program or procedure, use them with a cautious eye for the first
several times of use.

Having said that.....ENJOY!!

Thanks and a tip of the hat to Steve Greenberg for the use and distribution of
his files.
                        Don Watkins 76003,252
                        2/14/84

```
{% endraw %}

## SERIAL.ASM

{% raw %}
```
	title	SERINT
;
;Interupt driven RS232 serial port routines.
; these routines replace the BIOS rs232 calls with a version that has
; interupt driven character receive, and can thus operate at considerably
;  higher speeds than the standard bios calls (int 14h).
;
;  Copyright 1983 by William E. Westfield.  All rights reserved.
;   This software may be freely distributed, but it may not under
;   any circumstances be sold by anyone other than the author.
;
;  Permission is explicity granted to use this code as a model for
;  programs requiring interupt driven serial I/O
;

BUFSiz= 1024

;XON=	1Fh		; ^_ for tops20, tenex
;XOFF=	1Fh		; ^_ for tops20, tenex

XON=	17		; ^Q
XOFF=	19		; ^S

STOPED=	1


Everything Segment public
assume cs:everything,es:everything,ss:everything
assume	ds: everything

org	30h
SerialCardVector	dd 0

org	14h*4
RS232vector	dd 0

org	100h
foo:	jmp start

org	0
db	bufsiz dup(?)
;use the space before 100h as part of the buffer

start:
	mov	bp,ds
	xor	ax,ax
	mov	ds,ax
	les	ax,SerialCardVector
	mov	cs:OthVec,ax
	mov	cs:OthVec+2,es
	les	ax,rs232vector
	mov	cs:biosint,ax
	mov	cs:biosint+2,es
	mov	word ptr SerialCardVector,OFFSET serint
	mov	word ptr SerialCardVector+2,cs
	mov	word ptr rs232vector,OFFSET rsint
	mov	word ptr rs232vector+2,cs

	mov	bx,cs
	mov	ds,bx
	xor	ax,ax
	mov	BUFTail,ax	; load place for interupt routine to put chars
	mov	BUFHead,ax	; load place for main routine to get chars

;	mov	ax,offset BUFFER	;computer segment containing the buffer
;	mov	cl,4		;by taking address, dividing by 16 to get
;	shr	ax,cl		;segment value.
;	add	ax,bx		; and then add current segment
;	inc	ax		; and round up.
;	mov	BUFSeg,ax

init3:	cli
init6:	in	al,021H		; Set up 8259 interupt controller
	and	al,0EFH		;  enabling INT4
	out	021H,al
	mov	dx,03F9H	; Interupt Enable register
	mov	al,1		; enable 'data available' serial interupt
	out	dx,al
	mov	dl,0FCH
	mov	al,0BH		; enable interupts from serial card
	out	dx,al
	sti			; enable CPU to receive interupts
	mov	dl,0F8H	;
	in	al,dx
	mov	dx,offset prgend+5	;note some slack...
	int	27h		;terminate but stay resident

BUFend=offset $-2


subttl 	********** serial port interupt routine **********
tflags	db	0
bufHead dw	0
BufTail dw	0
COUNT	dw	0

othvec	dd	0
biosint dd	0


rsint:	sti
	cmp	dx,0
	jne	notus
	cmp	ah,1
	je	sndchr
	jge	wedoit
notus:	jmp	cs:dword ptr BIOSint

wedoit:	cmp	ah,2			; receive a character ?
	 je	GETCHR
status:	pushf				;simulate interupt
	call	cs:dword ptr BIOSint
modsta:	cmp	cs:count,0
	je	nochars
	or	ah,1			;indicate data ready
nochars: iret

SNDCHR:	push	dx
	mov	dx,3FDh
	mov	ah,al
sndlp:	in	al,dx
	test	al,20h
	jz	sndlp
	mov	dl,0F8h
	xchg	al,ah
	out	dx,al
	pop	dx
	jmp	modsta
	

GETCHR:
TSTLP:	cmp	cs:COUNT,0
	jz	TSTLP
	cld
	push	si
	push	ds
	push	cs
	pop	ds
	mov	si,BUFHead
	cli
	lodsb
	cmp	si,offset BUFEND
	jb	GETCH2
	xor	si,si
GETCH2:	dec	COUNT
	test	tflags,STOPED
	je	GETCH3
	cmp	COUNT,100
	ja	GETCH3
	 mov	dx,3F8h
	 push	ax
	 mov	al,xon
	 out	dx,al
	 and	tflags,255-STOPED
	pop	AX
GETCH3:
	mov	BUFHead,si
	sti
	pop	ds
	pop	si
	mov	ah,0
	iret


serint:	push	dx
	push	ax
	push	es
	push	ds
	push	di
	cld
	mov	di,cs:BUFTail	;get registers we need
intlp:	mov	dx,03fdH	; asynch status port
	in	al,dx
	test	al,1		; see if data available
;	jz	retint
	jz	othint		;  no.
	mov	dl,0f8H	; yes, get it
	in	al,dx
	and	al,07fH	; take 7 bits
	jz	retint		; ignore nulls
	cmp	al,07fH	; rubout ?
	jz	retint		; yes, ignore it.
serin2:	push	cs
	pop	es
	stosb
	mov	ax,cs
	mov	ds,ax		; deal with global variables now...
	inc	COUNT		; increment count of characters in buffer
	cmp	di,offset BUFend ; does it loop around past end of the buffer ?
	jb	serin3
	 xor	di,di		; yes, reset to beginning.
serin3:	mov	BUFTail,di
	mov	ax,offset BUFend
	sub	ax,COUNT	; how much space is left ?
	cmp	ax,BUFSIZ/10	; less than a tenth left ?
	jae	serin5
	test	tflags,STOPED
	jne	serin4
	mov	dx,03F8H
	mov	al,xoff	; send character to stop output	
	out	dx,al
	or	tflags,STOPED
serin4:
serin5:
retint:	mov	al,064H
	out	020H,al		; send  End-Of-Interupt to 8259
	pop	di
	pop	ds
	pop	es
	pop	ax
	pop	dx
intret:	iret

othint:	;something we werent waiting for caused the interupt,
	; so pass it on to previous interupt vector
	cmp	cs:OTHVEC+2,0
	jz	retint
	pop	di
	pop	ds
	pop	es
	pop	ax
	pop	dx
	jmp	cs:dword ptr OTHVEC

prgend= $+2

everything ends

	end foo
```
{% endraw %}

## SERIAL.DOC

{% raw %}
```
SERIAL inserts itself into memory below command.com (it uses
the "terminate but stay resident" DOS call), and changes the ROM
bios interupt vectors for RS232 I/O to use interupt driven I/O.

Thus if you have a program that uses the ROM BIOS to do serial I/O,
and the program has been limited in speed by the poor performance
of the standard ROM routines, all you need to do is run SERIAL first,
and the program will suddenly magically work at speeds up to 9600 bps.
This is also useful for writing programs that will be transportable
to IBM lookilikes that emulate the ROM BIOS, but not the same hardware
configuration.

Instructions for use:

        edit SERIAL to reflect your choice of buffer size and
                handshaking characters.
        assemble using the macro assembler.
        link using LINK.
        convert to COM file using EXE2BIN.
        delete .EXE file.
        SERIAL works with both DOS 1.1 and 2.0.

Limitations:

        It isn't clear that the "initialize port" function
        of INT 14h works properly.

        Various IBM programs will break SERIAL by virtue of
        not leaving the serial port as it was found.  Most
        notable amoung these are MODE and BASICA.  If this
        happens, it will probably be necessary to power cycle
        the system.

        SERIAL is set up for COM1 only.  It could easilly
        be converted to use COM2, and with slightly more
        difficulty, both.

        SERIAL only receives characters on an interrupt basis,
        characters output to the serial port are sent in the
        old slow manner.  Thus SERIAL is not particularly
        useful for, say, a serial printer spooler.

        SERIAL does not check the various other RS232 signals
        that the orignal ROM routine checks.  Thus, depending on
        exactly how the hardware works, hardware handshaking
        may not work.


If anyone makes useful changes, Id like to here about them [in
particular, a "SERIAL COM1:9600,n,8,1,<bufsiz>" user interface
might be nice.  [SERIAL already uses the space taken up by the
initialization code as part of the buffer].

Enjoy
BillW

```
{% endraw %}

## TALK.ASM

{% raw %}
```
         name      talk
         page      55,132
         .lfcond             ;list false conditionals too
         title     'TALK --- dumb terminal emulator'
;
; TALK --- a dump terminal emulator for the
; IBM PC, to illustrate use of the ROM BIOS
; asynchronous communications card support.
;
; Copyright (c) 1983 Ray Duncan
; May be freely reproduced for non-commercial use.
;
cr       equ       0dh       ;ASCII carriage return
lf       equ       0ah       ;ASCII line feed
esc      equ       1bh       ;ASCII escape code
;
echo     equ       0         ;leave this zero to run
                             ;communications full-duplex,
                             ;change to -1 if half-duplex
;
comm_port  equ     0         ;set to 0 or 1 depending
                             ;on which comm port is
                             ;hooked to your modem
;
;
cseg     segment   para public 'CODE'
;
         assume    cs:cseg,ds:dseg,ss:stack
;
talk     proc      far       ;entry point from PC-DOS
                             ;
         push      ds        ;save DS:0000 on stack
         xor       ax,ax     ;for final exit to PC-DOS.
         push      ax
                             ;make data area addressable
         mov       ax,seg dseg
         mov       ds,ax

                             ;make sure the modem is on-line
         call      com_stat  ;by checking the "Data Set
                             ; Ready" bit in the status word.
         test      al,20h
         jnz       talk1     ;if bit is on, ok to proceed.
                             ;
                             ;bit is not on, print warning
                             ;message and exit.
         mov       dx,offset msg1
         jmp       talk6
                             ;
talk1:                       ;initialize the display to
                             ;reverse video, so the user
                             ;knows he's talking to the modem.
                             ;
         mov       ah,15     ;first use "get mode" function
                             ;of the ROM BIOS video driver to
         int       10h       ;find the number of columns on
         dec       ah        ;the display, save it for use
                             ;by the screen clear routine.
         mov       columns,ah
         cmp       al,7      ;make sure display is text mode.
         je        talk2     ;mode 7 ok, proceed
         cmp       al,3
         jbe       talk2     ;modes 0-3 ok,proceed
         mov       dx,offset msg2
         jmp       talk6     ;print error message and exit
                             ;
talk2:
         mov       bh,70h    ;now clear screen and set to
         call      clear     ;reverse video attribute 70h.
                             ;also put the cursor in the
         call      home      ;upper left corner of screen.
                             ;
                             ;****************************
                             ;this is the main loop of
                             ;the communications program.
                             ;****************************
talk3:   call      pc_stat   ;check character waiting
                             ;from the IBM PC keyboard
         jz        talk4     ;no
         call      pc_in     ;read char. from PC keyboard
         cmp       al,esc    ;is it the ESCape key?
         je        talk5     ;yes, exit the terminal emulator

                             ;if running half-duplex, echo
                             ;the character to the PC display
         if        echo
         push      ax        ;save copy of the character
         call      pc_out    ;send it to the PC display
         pop       ax        ;now restore the character
         endif

         call      com_out   ;write char. to the comm port
                             ;
talk4:   call      com_stat  ;check if character waiting
                             ;from the comm port
         jz        talk3     ;no, loop
         call      com_in    ;read char. from comm port
         call      pc_out    ;write it to the PC display
                             ;
                             ;now do it all again
         jmp       talk3
                             ;
talk5:                       ;ESC key detected, prepare
                             ;to exit the terminal emulator.
                             ;
                             ;first set the display back
                             ;to normal video, so the user
                             ;will know he's talking to
                             ;the PC and not the modem.

         mov       bh,07h    ;7 is the "attribute" for
         call      clear     ;normal video display.
         call      home      ;also put cursor in upper
                             ;left hand corner of screen.
                             ;
                             ;print farewell message
         mov       dx,offset msg3
talk6:   mov       ah,9      ;use PC-DOS function 9 to
         int       21h       ;print the string whose address
                             ;is in register DX.
         ret                 ;now return to PC-DOS.
                             ;
talk     endp
;
                             ;this routine reads status
                             ;from the COM port, returns
                             ;Z=false if character ready
                             ;Z=true if nothing waiting
                             ;AH=line status,AL=modem status
                             ;register DX destroyed.
com_stat proc      near
         mov       dx,comm_port
         mov       ah,3      ;use ROM BIOS driver's function
         int       14h       ;3 to get status, also
         test      ah,098h   ;check comm port error flags
                             ;for timeout,break,framing error.
         jnz       com_err   ;error was detected, beep.

com_stat1:                   ;test the data ready bit,
         test      ah,1      ;returning Z flag=false if
         ret                 ;character waiting.

com_err: push      ax        ;communications error detected
         mov       al,7
         call      pc_out    ;send a bell code to the PC
         pop       ax        ;then go return comm status
         jmp       com_stat1

com_stat endp
;
                             ;read a character from the
                             ;COM port, return it in AL.
                             ;register DX destroyed.
com_in   proc      near
         mov       dx,comm_port
         mov       ah,2      ;use ROM BIOS driver's
         int       14h       ;function 2 to get char.
         ret
com_in   endp
;
                             ;write the character in AL
                             ;to the COM port.
                             ;register DX destroyed.
com_out  proc      near
         mov       dx,comm_port
         mov       ah,1      ;use ROM BIOS driver's
         int       14h       ;function 1 to send char.
         ret
com_out  endp
;
                             ;read status for the IBM
                             ;PC's keyboard, returns
                             ;Z=false if character ready
                             ;Z=true if nothing waiting.
                             ;register DX destroyed.
pc_stat  proc      near
                             ;if a character is already
                             ;waiting,just return status
         mov       al,in_char
         or        al,al
         jnz       pc_stat1
         mov       ah,6      ;otherwise call PC-DOS to
         mov       dl,0ffh   ;determine status
         int       21h
         jz        pc_stat1  ;jump,nothing ready
                             ;got a char, save it for
                             ;"pc_in" routine.
         mov       in_char,al
pc_stat1:                    ;return to caller with
         ret                 ;Z flag set appropriately
pc_stat  endp
;
                             ;read a character from the
                             ;IBM PC's keyboard, return
                             ;it in AL.  DX may be destroyed.
pc_in    proc      near
         mov       al,in_char
         or        al,al     ;any character waiting?
         jnz       pc_in1    ;yes,return it to caller
         call      pc_stat   ;try and read a character
         jmp       pc_in
pc_in1:  xor       ah,ah     ;clear the character
                             ;waiting flag
         mov       in_char,ah
         ret                 ;exit with AL=char

pc_in    endp
;
                             ;write the character in AL
                             ;to the PC's display.
                             ;register DX destroyed.
pc_out   proc      near
         mov       dl,al     ;we use PC-DOS function 6 to
         mov       ah,6      ;send the character, it ignores
         int       21h       ;control characters so they
         ret                 ;can be passed on to the
pc_out   endp                ;remote system.
;
clear    proc      near      ;clear the display and set
                             ;it to the attribute in BH.
                             ;registers AX, CX, DX destroyed.
         mov       dl,columns
         mov       dh,24     ;DL,DH=X,Y of lower right
                             ;corner of "window".
         mov       cx,0      ;CL,CH=X,Y of upper left
                             ;corner of "window".
         mov       ax,600h   ;AH=6 for "scroll or initialize
                             ;window" function, AL=0 for
                             ;number of lines to scroll.
         int       10h       ;call ROM BIOS video driver.
         ret
clear    endp
;
                             ;home the cursor, i.e.
                             ;put it in the upper left
                             ;corner of the screen.
                             ;registers AX,BX,DX destroyed.
home     proc      near
         mov       dx,0      ;(DL,DH)=(X,Y) for new
                             ;cursor position, both are 0.
         mov       bh,0      ;BH=video page
         mov       ah,2      ;function 2=set cursor
         int       10h       ;call ROM BIOS video driver.
         ret
home     endp
;
cseg     ends
;
;
dseg     segment   para 'DATA'
                             ;
in_char  db        0         ;PC keyboard input char.
                             ;
columns  db        0         ;highest numbered column in
                             ;current display mode (39 or 79)
                             ;
msg1     db        cr,lf,'Check your modem.'
         db        cr,lf,'$'
msg2     db        cr,lf,'Display must be text mode.'
         db        cr,lf,'$'
msg3     db        cr,lf,lf,'Goodbye.'
         db        cr,lf,'$'
dseg     ends
;
;
stack    segment   para stack 'STACK'
                             ;allow 64 bytes in this case
         db        64 dup (?)
stack    ends
;
         end       talk
```
{% endraw %}

## TALK.DOC

{% raw %}
```
TALK.ASM       01-Feb-84 11220        Accesses: 50

    Keywords: ASM MASM ASSEMBLER COMM RDUNCAN

    Source code for dumb terminal emulator from Ray Duncan's December, 1983
    "Right to Assemble" column (Softalk).

```
{% endraw %}

## XAPRIN.BAS

{% raw %}
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
{% endraw %}

## Z.ASM

{% raw %}
```
	page	,132
; Z s
;	"Sleep" for s seconds.  If s omitted, take five.
;
cseg	segment	public 'code'
	assume	cs:cseg,ds:cseg

	org	80h
len	db	?		; length
	db	?		; initial space if len>0
param	db	?		; first digit

	org	100h
Z	proc	far
	mov	cl,len
	cmp	cl,0
	jz	until		; parameter omitted; use default
	xor	ax,ax		; ax will be param in binary
	xor	bh,bh
	xor	ch,ch
	dec	cl		; cx = number of digits
	mov	dl,10
	lea	si,param	; point to first digit

next:	mul	dl		; push seen digits left one place
	mov	bl,[si]
	and	bl,0FFh-'0'
	add	ax,bx		; add this digit to running sum
	inc	si		; point to next digit
	loop	next
	mov	wait,ax		; save # secs to zzz

until:	mov	ah,2Ch		; get time
	int	21h		; ch,cl= h,m; dh,dl= s,c
	mov	athm,cx
	mov	ats,dh

	xor	dx,dx		; prepare for divide
	mov	ax,wait
	mov	bl,ats
	add	ax,bx
	mov	cx,60
	div	cx		; ax= mins; dx= secs
	mov	ats,dl

	xor	dx,dx
	mov	bl,atm
	add	ax,bx
	div	cx		; ax= hrs; dx= mins
	mov	atm,dl

	xor	dx,dx
	mov	bl,ath
	add	ax,bx
	mov	cx,24
	div	cx		; ax= days; dx= hrs
	mov	ath,dl		; save hrs; discard days

check:	mov	ah,2Ch		; get time
	int	21h		; ch,cl= h,m; dh,dl= s,c
	cmp	cx,athm
	jne	check
	cmp	dh,ats
	jl	check
	int	20h		; exit

	even
wait	dw	5		; how many seconds to wait
athm	dw	?
	org	$-2
atm	db	?		; minutes
ath	db	?		; hours
atc	db	?		; hundredths
ats	db	?		; seconds
Z	endp
cseg	ends
	end	Z
```
{% endraw %}

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
