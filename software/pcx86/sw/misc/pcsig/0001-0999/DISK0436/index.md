---
layout: page
title: "PC-SIG Diskette Library (Disk #436)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0436/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0436"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "HAM RADIO VOLUME 1 OF 2 (ALSO 437)"

    Ham it up!  Learn and practice your Morse with the variable speed sender
    and receiver programs.  Other routines help the amateur radio operator
    compute various electronic formulas, design antennas, locate satellites
    and calculate orbits.  RTTY and TTY are communication programs using
    Baudot, ASCII, or Morse code at varying speeds.
    
    The USAT program provides real time tracking of the OSCAR 9, 10, and 11
    and the RS 5, 7, and 8 satellites; the user specifies the date, time,
    length of time, and tracking interval.  Several programs calculate coil
    inductance, coil properties, signals for varying frequencies,
    resistance and reactance.  NETWORK provides analysis of user-specified
    circuits, to aid the amateur radio or electronic user.  The great circle
    distance between any two points is computed by GRCIRDIS when the
    latitudes and longitudes are entered.  An alphabetized list of all of
    the counties in each state can be found in the COUNTIES files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASCTTY.BAS

{% raw %}
```bas
5 'initialize
10 CLEAR: CLS: DEFINT A-Z: KEY OFF: FALSE=0: TRUE=NOT FALSE: OPTION BASE 0: DIM S$(50): XX=1: LN=0
15 FOR I=1 TO 10: KEY I ,"": NEXT
17 XX=1:LN=0
19 REM **********************************************************************
20 REM *** This is a version of the TTY program which transmits and       ***
30 REM *** receives 110 baud ascii, 7 data bits, parity always space,     ***
40 REM *** two stop bits. It is intended to be called by the tty          ***
50 REM *** program by a "chain" instruction.                              ***
60 REM *** AA4L  2/14/83                                                  ***
70 REM **********************************************************************
999 '*** main program
1020 GOTO 13000
9997 END
9998 '
11998 '
11999 REM *** open comm file for receive
12000 OPEN "COM1:110,S,7,2,RS,CS0,DS0,CD0" AS #1:WIDTH #1,255
12040 RETURN
12498 '
12499 REM *** open comm file for transmit
12500 OPEN "COM1:110,S,7,2,CS0,DS0,CD0" AS #1:WIDTH #1,255
12540 RETURN
12998 '
12999 REM *** MENU
13000 CLS
13010 PRINT "      *** Function Menu ***"
13020 PRINT
13050 PRINT "<2> Exit to BASIC.": PRINT
13060 PRINT "<3> Exit to DOS.": PRINT
13065 PRINT"<4> Switch to Murray Code": PRINT
13070 PRINT "<"+CHR$(24)+"> Receive": PRINT
13080 PRINT "<"+CHR$(25)+"> Transmit": PRINT
13085 DEF SEG=0: POKE 1050,PEEK (1052): DEF SEG
13090 BEEP: PRINT "Enter Choice: "
13100 CHOICE$=INKEY$
13105 IF CHOICE$="" THEN 13100
13106 CLS
13110 IF LEN(CHOICE$)=2 THEN IF RIGHT$(CHOICE$,1)="P" THEN 15000 ELSE IF              RIGHT$(CHOICE$,1)="H" THEN 14000 ELSE GOTO 13010
13120 IF VAL(CHOICE$)=2 OR VAL(CHOICE$)=3 THEN 13700 ELSE IF VAL(CHOICE$)=4             THEN CHAIN "tty22" ELSE 13010
13130 STOP
13498 '
13698 '
13699 REM *** Exit to BASIC
13700 PRINT : PRINT : PRINT "Off at ";DATE$;"    ";TIME$
13710 IF PRN THEN PRINT#2,: PRINT#2,"Off at ";DATE$;"     ";TIME$
13720 CLOSE
13730 IF VAL(CHOICE$)=3 THEN 13750
13740 END
13750 SYSTEM
13800 STOP
13998 '
13999 REM *** Receive Routine
14000 PRINT :PRINT :PRINT DATE$ SPC(5) TIME$
14003 Y=CSRLIN
14005 SHFT=0
14010 LOCATE 25,1: COLOR 0,7
14020 PRINT" F1=> cr & lf on/off ... F2=> printer on/off ... F10=> menu ... <"+CHR$(25)+">=> transmit ";: COLOR 7,0:LOCATE Y,1
14025 DEF SEG =0: POKE 1050, PEEK(1052): DEF SEG
14030 ON KEY(1) GOSUB 14900: KEY(1) ON
14040 ON KEY(2) GOSUB 14920: KEY(2) ON
14050 ON KEY(10) GOSUB 14940: KEY(10) ON
14060 ON KEY(14) GOSUB 14960: KEY(14) ON
14065 GOSUB 12000
14066 ON ERROR GOTO 14800
14070 IF MENU.RET OR XMT.FL THEN 14080 ELSE 14100
14080 KEY(1) OFF: KEY(2) OFF: KEY(10) OFF: KEY(14) OFF: ON ERROR GOTO 0:              CLOSE #1
14090 IF MENU.RET THEN MENU.RET = FALSE: GOTO 13000
14095 IF XMT.FL THEN XMT.FL=FALSE: GOTO 15000
14099 '
14100 IF EOF(1) THEN 14400
14110 X$=INPUT$(LOC(1),#1)
14120 FOR I=1 TO LEN(X$)
14130   AS$=MID$(X$,I,1)
14150   IF AS$=CHR$(10) THEN IF CRLF THEN PRINT CHR$(13);: IF PRN THEN PRINT#2,CHR$(13);
14160   IF AS$=CHR$(7) THEN BEEP: GOTO 14210
14190   IF ASC(AS$)<32 OR ASC(AS$)>127 THEN 14210
14200   PRINT AS$;: IF PRN THEN PRINT #2,AS$;
14210 NEXT
14220 GOTO 14070
14399 '
14400 K$=INKEY$: IF K$="" THEN 14070
14410 Y=CSRLIN: X=POS(0)
14420 S$(LN)=S$(LN)+K$
14425 IF K$=CHR$(13) THEN LN =LN+1: XX=1: GOTO 14070
14430 LOCATE 25,XX,1
14440 PRINT K$+" █";
14450 XX=XX+1
14460 IF XX=>75 THEN S$(LN)=S$(LN)+CHR$(13): XX=1: LN=LN+1
14470 LOCATE Y,X
14480 GOTO 14070
14799 '
14800 IF ERR=25 OR ERR=27 THEN 14810 ELSE 14820
14810 PRINT: PRINT "check printer": BEEP: PRINT: RESUME
14820 IF ERR=57 THEN RESUME NEXT
14830 ON ERROR GOTO 0
14840 '
14899 '
14900 IF CRLF THEN CRLF=FALSE ELSE CRLF=TRUE
14905 RETURN
14910 '
14920 IF NOT PRN THEN OPEN "lpt1:" FOR OUTPUT AS #2: PRN=TRUE: WIDTH #2,255:          RETURN
14925 CLOSE #2: PRN=FALSE: RETURN
14930 '
14940 MENU.RET=TRUE: RETURN
14950 '
14960 XMT.FL=TRUE: RETURN
14970 '
14998 '
14999 '*** transmit
15000 PRINT: PRINT: PRINT DATE$ SPC(5) TIME$
15010 Y=CSRLIN
15030 COLOR 0,7: LOCATE 25,1
15040 PRINT" F1-F3=>Msg1-3 \ F4=>CQ \ F5=>de \ F6=>Test \ F7=>id \ F10=>Menu \ "+CHR$(24)+"=>Receive  ";
15050 COLOR 7,0: LOCATE Y,1,1
15060 GOSUB 12500
15070 DEF SEG=0: POKE 1050,PEEK(1052): DEF SEG
15080 X$=INKEY$: IF X$="" THEN 15080
15090 IF LEN(X$)>1 THEN 15200
15092 GOSUB 15100
15093 GOTO 15080
15098 '
15099 '*** this subroutine transmits an ascii character
15100 IF X$="\" THEN PRINT#1,CHR$(7);: PRINT X$;: GOTO 15160
15150 PRINT #1,X$;: PRINT X$;
15160 RETURN
15199 '
15200 Z=INSTR(";<=>?@ADHC",RIGHT$(X$,1))
15210 ON Z GOTO 16000,16100,16200,16300,16400,16500,16600,16700,16800,16900
15220 GOTO 15080
15998 '
15999 '*** routines to handle function keys
16000 FILENM$="msg1"
16010 GOSUB 17000
16020 GOTO 15080
16099 '
16100 FILENM$="msg2"
16110 GOSUB 17000
16120 GOTO 15080
16199 '
16200 FILENM$="msg3"
16210 GOSUB 17000
16220 GOTO 15080
16299 '
16300 MSG$=CHR$(13)+"cq cq cq cq cq cq cq de aa4l aa4l aa4l bob in raleigh nc"
16310 GOSUB 17500
16320 GOTO 15080
16399 '
16400 MSG$=CHR$(13)+"de aa4l aa4l bob in raleigh nc"
16410 GOSUB 17500
16420 GOTO 15080
16499 '
16500 MSG$=CHR$(13)+"the quick brown fox jumped over the lazy dog's back"+CHR$(13)+"U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*U*"+CHR$(13)+"1 2 3 4 5 6 7 8 9 0 \ "
16510 GOSUB 17500
16520 GOTO 15080
16599 '
16600 MSG$=CHR$(13)+"cw id:"
16610 GOSUB 17500
16620 CLOSE #1 'close file to purge buffer
16625 GOSUB 12500 'reopen file to key transmitter
16630 GOSUB 18000
16640 GOTO 15080
16699 '
16700 CLOSE: LOCATE 25,1: PRINT SPACE$(79): GOTO 13000
16799 '
16800 CLOSE: GOTO 14000
16888 '
16889 '***transmit keybd buffer
16900 FOR II = 0 TO LN-1
16910 MSG$=S$(II)
16920 GOSUB 17500
16925 S$(II)=""
16930 NEXT II
16940 LN=0: XX=1
16950 GOTO 15080
16998 '
16999 '*** subroutine to get a message from disk and transmit it
17000 ON ERROR GOTO 17300
17010 OPEN FILENM$ FOR INPUT AS #2
17020 WHILE NOT EOF(2)
17030   LINE INPUT #2,M$
17040   MSG$=CHR$(13)+M$
17050   GOSUB 17500
17060 WEND
17070 CLOSE #2
17075 ON ERROR GOTO 0
17080 GOTO 15080
17298 '
17299 '*** disk error
17300 IF ERR=53 OR ERR=71 OR ERR=72 THEN PRINT"***Can't read file for ";FILENM$;"***";:CLOSE #3: RESUME 15080
17310 ON ERROR GOTO 0
17498 '
17499 '*** subroutine to transmit a msg
17500 FOR I=1 TO LEN(MSG$)
17510   X$=MID$(MSG$,I,1)
17520   GOSUB 15100
17530 NEXT
17540 RETURN
17998 '
17999 '*** cwid
18000 SOUND 32767,20
18010 GOSUB 18500
18020 GOSUB 18600
18030 GOSUB 18700 'A
18040 GOSUB 18500
18050 GOSUB 18600
18060 GOSUB 18700 'A
18070 GOSUB 18500
18080 GOSUB 18500
18090 GOSUB 18500
18100 GOSUB 18500
18110 GOSUB 18600
18120 GOSUB 18700 '4
18130 GOSUB 18500
18140 GOSUB 18600
18150 GOSUB 18500
18160 GOSUB 18500
18170 SOUND 32767,20  'L
18180 SOUND 32767,1
18190 RETURN
18498 '
18499 '***DIT SUBROUTINE
18500 SOUND 800,1.5: MOTOR 1
18510 SOUND 32767,1.5: MOTOR 0
18520 RETURN
18598 '
18599 '***dah subroutine
18600 SOUND 800,4.5: MOTOR 1
18610 SOUND 32767,1.5: MOTOR 0
18620 RETURN
18698 '
18699 '***inter-character space subroutine
18700 SOUND 32767,3
18710 RETURN
```
{% endraw %}

## CWRCV.BAS

{% raw %}
```bas
10 CLEAR: CLS: KEY OFF: DIM A$(100): DEFINT D,I,A: FOR I=1 TO 100: READ A$(I):     NEXT: FALSE=0: TRUE=NOT FALSE
15 FOR I= 1 TO 10: KEY I,"": NEXT
20 ON KEY(10) GOSUB 11000
30 ON KEY(9) GOSUB 11500
99 '
100 DATA E,T,I,A,N,M,S,U,R,W,D,K,G,O,H,V,F,-,L,aa,P,J,B,X,C
110 DATA Y,Z,Q,-,-,5,4,-,3,-,-,-,2,as,-,ar,-,-,-,-,1,6,bt,/,-
130 DATA -,-,-,-,7,-,-,-,8,-,9,0,-,-,-,-,-,sk,-,-,-,-,-,-,?
140 DATA -,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-
141 '
1000 GOSUB 14000
1010 GOTO 12000
9000 C=250
9997 '
9998 ' This is the receive routine. <B> is timer variable; <C> is dah length;          <DA> is dash decode; <DO> is dot decode.
9999 '
10000 KEY(10) ON
10005 A=INP(&H3FE) AND 128
10010 IF A=0 THEN 10005
10020 B=0
10030 A=INP(&H3FE) AND 128: B=B+10
10040 IF A=0 THEN DO=2*DO:DA=2*DA:DO=DO+1:IF F9 THEN 10100 ELSE C=((5*C)+(3*B))/6: GOTO 10100
10050 IF B<(0.5*C) THEN 10030
10060 DO=2*DO:DA=2*DA:DA=DA+1
10070 A=INP(&H3FE) AND 128: B=B+10
10080 IF A THEN GOTO 10070
10090 C=((4*C)+B)/5
10100 B=0
10110 A=INP(&H3FE) AND 128
10120 B=B+10
10130 IF A THEN GOTO 10020
10140 IF B<(0.5*C) THEN GOTO 10110
10145 KEY(10) OFF
10150 GOSUB 10220
10155 KEY(10) ON
10160 A=INP(&H3FE) AND 128
10170 B=B+10
10180 IF A THEN GOTO 10020
10190 IF B<(2*C) THEN GOTO 10160
10200 PRINT " ";
10210 GOTO 10005
10219 '
10220 DA=DA*2
10230 D=DA+DO
10240 IF D>100 THEN D=100
10250 PRINT A$(D);
10260 DA=0:DO=0
10270 RETURN
10997 '
10998 ' key(10) interrupt subroutine
10999 '
11000 KEY(10) OFF: KEY(9) OFF: F9 = FALSE: RETURN 12000
11497 '
11498 ' F9 subroutine
11499 '
11500 XSCR=POS(0): YSCR=CSRLIN: LOCATE 25,1,1
11510 IF F9 THEN 11600
11515 F9=TRUE
11520 COLOR 0,7: PRINT "    <F9> active    ";: COLOR 7,0: LOCATE YSCR,XSCR
11530 RETURN
11540 '
11600 F9=FALSE
11610 COLOR 0,7: PRINT "                  ";:COLOR 7,0: LOCATE YSCR,XSCR
11620 RETURN
11997 '
11998 ' Menu routine
11999 '
12000 CLS: PRINT"    *** MENU ***": PRINT: PRINT
12010 PRINT" <F1> -- Receive"
12020 PRINT" <F2> -- Reserved"
12030 PRINT" <F3> -- Exit to BASIC"
12040 PRINT" <F4> -- Exit to DOS"
12050 PRINT" <F5> -- Help"
12060 PRINT: PRINT: PRINT " Your choice ? ";: LOCATE ,,1
12070 CHOICE$=INKEY$
12080 IF LEN(CHOICE$) < 2 THEN 12070
12090 ROUTINE = INSTR(";<=>?",MID$(CHOICE$,2))
12095 PRINT ROUTINE
12100 ON ROUTINE GOTO 13000,12000,13100,13200,13300
12105 GOTO 12000
12110 '
12998 ' goto receive routine
12999 '
13000 CLS: LOCATE 25,1: COLOR 0,7: PRINT SPACE$(25);"**** RECEIVING ****";SPACE$(79-POS(0));: LOCATE ,60: PRINT" <F10> for Menu ";: COLOR 7,0: LOCATE 1,1: KEY(9) ON : GOTO 10000
13099 '
13100 CLS: END
13199 '
13200 CLS: SYSTEM
13299 '
13300 CLS
13310 OPEN "cwhelp" FOR INPUT AS #1
13320 WHILE NOT EOF(1)
13330 LINE INPUT#1, HELP$
13340 PRINT HELP$
13350 WEND
13360 CLOSE
13365 PRINT: COLOR 31,0: PRINT"Any key": COLOR 7,0
13367 WAIT.$=INKEY$: IF WAIT.$="" THEN 13367
13370 GOTO 12000
13999 '
14000 PRINT: PRINT: PRINT
14005 COLOR 15,0
14010 PRINT" ╔═══════════════════════╗"
14020 PRINT" ║  CW RECEIVE PROGRAM   ║"
14030 PRINT" ║        by AA4L        ║"
14040 PRINT" ║     Bob Johnson       ║"
14050 PRINT" ║                       ║"
14060 PRINT" ║     Version 1.0       ║"
14070 PRINT" ║       04/09/83        ║"
14080 PRINT" ║     Public Domain     ║"
14090 PRINT" ╚═══════════════════════╝"
14100 COLOR 7,0
14105 FOR I=1 TO 5000: NEXT
14110 RETURN
```
{% endraw %}

## EZCODE1.BAS

{% raw %}
```bas
1 KEY OFF:COLOR 14,0,0:SCREEN 0,0,0,0:WIDTH 80:KEY OFF:COLOR 14,0,0:LOCATE 1,1,1:DIM A$(256), WRONG(256):DEFINT C,X:EXAM$="NO":GOSUB 39:GOSUB 8:GOSUB 19:X = RND(-VAL(RIGHT$(TIME$,2)))
2 IF EXAM$="YES" THEN GOSUB 59:H$=CHR$(27):GOTO 6 ELSE GOSUB 12
3 GOSUB 9
4 H$=INKEY$:IF H$="" THEN GOTO 4 ELSE IF H$>CHR$(96) THEN H$=CHR$(ASC(H$)-32)
5 IF H$=" " THEN GOTO 3
6 IF H$=CHR$(27) THEN GOSUB 14
7 CHRCOUNT=CHRCOUNT+1:IF H$=CHR$(13) THEN PRINT CHR$(C);" ";:GOTO 3 ELSE IF ASC(H$)=C THEN PRINT CHR$(C);" ";:CORRECTCOUNT=CORRECTCOUNT+1:GOTO 2 ELSE SOUND 200,10:SOUND Z,10:WRONGCOUNT=WRONGCOUNT+1:WRONG(C)=WRONG(C)+1:GOTO 3
8 FOR I=ASC("A") TO ASC("Z"):READ A$(I):NEXT I:READ I:FOR J=1 TO I:READ C$,A$(ASC(C$)):NEXT J:RETURN
9 C$=A$(C):IF(C<>32)=0THEN 11 ELSE IF LEN(C$)=0 THEN RETURN ELSE FOR I = 1 TO LEN(C$):IF MID$(C$,I,1)<>"a" THEN SOUND F, IS ELSE SOUND F, AS1
10 SOUND Z,IS:NEXT I :SOUND Z,AS1:RETURN:GOTO 12
11 SOUND Z,AS1*3:RETURN
12 X=RND(1)*LEN(CHRS$)+0.5:IF X>LEN(CHRS$) OR X<1 THEN GOTO 12 ELSE C=ASC(MID$(CHRS$,X,1)):RETURN:DATA "ia","aiii","aiai","aii","i","iiai","aai","iiii","ii":DATA "iaaa","aia","iaii","aa","ai","aaa","iaai","aaia","iai"
13 DATA "iii","a","iia","iiia","iaa","aiia","aiaa","aaii":DATA 15:DATA 0,"aaaaa",1,"iaaaaa",2,"iiaaa",3,"iiiaa",4,"iiiia",5,"iiiii":DATA 6,aiiii,7,aaiii,8,aaaii,9,aaaai,"?",iiaaii,",",aaiiaa:DATA ".",iaiaia,"/",aiiai,"-",aiiia
14 CLS:IF(EXAM$="NO")=0THEN 17 ELSE PRINT "Total Characters - ";CHRCOUNT:PRINT "Right            - ";CORRECTCOUNT:PRINT "Wrong            - ";WRONGCOUNT
15 IF CHRCOUNT<>0 THEN PRINT USING "&###";"Percentage Right - ";(CORRECTCOUNT/CHRCOUNT)*100
16 GOSUB 33:CHRCOUNT=CHRCOUNT-1
17 PRINT:PRINT:PRINT "Would you like to change parameters ";:INPUT A$:A$=LEFT$(A$,1):IF A$="Y" OR A$="y" THEN GOSUB 19 ELSE IF EXAM$="NO" THEN GOSUB 32
18 C=32:H$=CHR$(C):CORRECTCOUNT=-1:CHRCOUNT=-1:WRONGCOUNT=0:FOR I=1 TO 256:WRONG(I)=0:NEXT I:RETURN
19 CLS:LOCATE 3,25: PRINT "Code Practice Parameter Setup":LOCATE 7,5:  PRINT "Speed (Words Per Minute)    - ":LOCATE 9,5:  PRINT "Characters to Practice      - ":LOCATE 11,5: PRINT "Sample Exam                 - "
20 IF WPM=0 THEN WPM=7.5
21 LOCATE 7,35: PRINT WPM:IF CHRS$="" THEN CHRS$="EISH5-"
22 LOCATE 9,36: PRINT CHRS$:LOCATE 11,36:PRINT EXAM$:LOCATE 15,5:PRINT "Type the new value or press enter to accept the value shown":GOSUB 38
23 LOCATE 7,36:LINE INPUT; ANS$:IF ANS$="" THEN ANS=WPM ELSE ANS=VAL (ANS$)
24 IF ANS>20 OR ANS<1 THEN LOCATE 8,10:PRINT "Speed must be between 1 and 20 WPM":LOCATE 7,35:ANS=WPM:PRINT SPC(20);:LOCATE 7,35:PRINT ANS;:GOTO 23 ELSE LOCATE 8,10:PRINT SPC(60):LOCATE 7,35:PRINT SPC(20);:LOCATE 7,35:PRINT ANS;
25 WPM=ANS:SM=15/WPM
26 LOCATE 9,36:LINE INPUT;ANS$:FOR I=1 TO LEN(ANS$):ANS=ASC(MID$(ANS$,I,1)):IF ANS >96 THEN ANS=ANS-32:MID$(ANS$,I,1)=CHR$(ANS)
27 IF A$(ANS)="" THEN LOCATE 10,10:PRINT "Character ";MID$(ANS$,I,1);"  Is not acceptable - Please retype line":LOCATE 9,36:PRINT SPC(44):LOCATE 9,36:PRINT CHRS$:GOSUB 36:GOTO 26 ELSE NEXT I:IF ANS$<>"" THEN CHRS$=ANS$
28 LOCATE 9,36:PRINT SPC(44):LOCATE 9,36:PRINT CHRS$:LOCATE 10,10:PRINT SPC(70):GOSUB 45:IS=1*SM:Z=32767:AS1=3*SM:LOCATE 14,10:PRINT SPC(70):F=600
29 LOCATE 24,1:PRINT "Press ENTER to begin or ESC to make more changes";SPC(20)
30 ANS$=INKEY$:IF ANS$="" THEN LOCATE 24,1:PRINT SPC(70);:GOTO 29 ELSE IF(ANS$=CHR$(13))=0THEN 31 ELSE IF EXAM$="YES" THEN LOCATE 1,1:RETURN ELSE GOTO 32
31 IF ANS$=CHR$(27) THEN GOTO 19 ELSE GOTO 30
32 CLS:LOCATE 22,1:PRINT "Press the SPACE BAR to re-sound the character.":LOCATE 23,1:PRINT "Press the ENTER key to see the character":LOCATE 24,1:PRINT "Press the ESC key to see results or change parameters.":LOCATE 1,1:RETURN
33 LOCATE 7,1:PRINT "Characters and number of misses":NCNT=0:FOR I=1 TO 256:IF A$(I)<>"" AND WRONG (I)<>0 THEN NCNT=1:PRINT USING"[ ! - ## ]";CHR$(I),WRONG(I);
34 NEXT I:IF NCNT=0 THEN PRINT " - None - "
35 RETURN
36 LOCATE 24,1:PRINT "Valid characters are: ";:FOR I=1 TO 256:IF A$(I)<>"" THEN PRINT CHR$(I);
37 NEXT I:RETURN
38 LOCATE 21,1:PRINT "    It is suggested that you study the code in the following groups:":PRINT:PRINT "        EISH5-  TMO0,/  ARLWJ1P  UF2V34?.  NDB689X  GQZ7KCY":RETURN
39 CLS:PRINT:PRINT "                                E Z C O D E  ":PRINT:PRINT "                                Version 2.0":PRINT:PRINT "                     Copyright - Jerry W. Segers - 1984":PRINT:PRINT
40 PRINT "This  program is designed to teach International Morse Code for the purpose  of":FALSE=0:TRUE=NOT FALSE:PRINT "passing the code portion of the amateur radio license examination.  If you find"
41 PRINT "the program to be of value, please help the author produce additional  programs":PRINT "of this type by sending a donation ($10.00 suggested) to:":PRINT:PRINT "                           Jerry W. Segers"
42 PRINT "                           Route 2, Roper Road":PRINT "                           Canton, Georgia  30114":PRINT:PRINT:PRINT "You are asked to make copies of this program and pass them along to anyone that"
43 PRINT "might like to use it provided this banner is not modified or removed.   If  you":PRINT "would like to be notified of updates or other programs please include your name":PRINT "and address with your donation."
44 LOCATE 24,1:PRINT "Press any key to begin.";:WHILE INKEY$="":WEND:RETURN
45 LOCATE 11,36:LINE INPUT ANS$:IF ANS$="" THEN ANS=ASC(EXAM$) ELSE ANS=ASC(ANS$)
46 IF ANS>96 THEN ANS=ANS-32
47 IF ANS<> 89 AND ANS <> 78 THEN LOCATE 12,10:PRINT "Please answer YES or NO";:LOCATE 11,36:PRINT SPC(40);:LOCATE 11,36:ANS$=EXAM$:PRINT ANS$;:GOTO 45 ELSE IF ANS=89 THEN EXAM$="YES" ELSE EXAM$="NO"
48 LOCATE 11,36:PRINT SPC(30):LOCATE 11,36:PRINT EXAM$:LOCATE 12,10:PRINT SPC(60);:IF EXAM$="NO" THEN RETURN ELSE CLOSE #1:GOSUB 57:LOCATE 13,5:PRINT "Exam file name              - "
49 LOCATE 13,36:PRINT FILNAM$:LOCATE 13,36:LINE INPUT; ANS$:IF(ANS$="")=0THEN 51 ELSE IF FILNAM$="" THEN EXAM$="NO":GOTO 19 ELSE ANS$=FILNAM$
50 GOTO 52
51 FILNAM$=ANS$
52 GOSUB 53:IF PRESENT THEN OPEN FILNAM$ FOR INPUT AS #1:RETURN ELSE FILNAM$="":LOCATE 14,10:PRINT "File not present - try again or press return to cancel":GOTO 49
53 ON ERROR GOTO 54:NAME FILNAM$ AS FILNAM$
54 M=ERR:RESUME 55
55 ON ERROR GOTO 0:IF M<>58 THEN PRESENT=FALSE ELSE PRESENT=TRUE
56 RETURN
57 LOCATE 15,1:PRINT SPC(60):LOCATE 15,1:PRINT "Enter  the name of the file containing the text to be used for the  test.  The ":LOCATE 16,1:PRINT "file  can  be prepared  with  your favorite text editor.  It's name  should  be"
58 LOCATE 17,1:PRINT "entered as - X:NAME.EXT - where: X is the drive specifier, NAME is the filename":LOCATE 18,1:PRINT "and EXT is the extension":RETURN
59 CLOSE #2:CLS:PRINT "You may type the letters as you hear them.   If you miss a letter type a  blank and continue with the next one.  Press any key to begin.":OPEN "qqqqjwsq" FOR OUTPUT AS #2:WHILE INKEY$="":WEND:CLS:LOCATE 24,1
60 PRINT " Press ESC to terminate the test";:LOCATE 1,1
61 IF EOF(1) THEN GOTO 64 ELSE LINE INPUT #1,ANS$:FOR L=1 TO LEN(ANS$):H$=INKEY$:IF(H$<>"")=0THEN 62 ELSE IF H$=CHR$(27) THEN GOTO 64 ELSE GOSUB 72
62 C=ASC(MID$(ANS$,L,1)):IF C>96 THEN C=C-32
63 GOSUB 9:NEXT L:GOTO 61
64 ROW=CSRLIN:COL=POS(0)
65 LOCATE 24,1:PRINT SPC(70);:LOCATE 24,1:PRINT "Press ESC to begin grading.";:LOCATE ROW,COL
66 H$=INKEY$:IF H$="" THEN GOTO 65 ELSE IF H$=CHR$(27) THEN GOTO 67 ELSE GOSUB 72:GOTO 66
67 CLS:PRINT "Text as presented:":PRINT:CLOSE #1:CLOSE #2:OPEN FILNAM$ FOR INPUT AS #1:OPEN "qqqqjwsq" FOR INPUT AS #2
68 IF EOF(1) THEN GOTO 69 ELSE LINE INPUT #1,ANS$:PRINT ANS$:GOTO 68
69 PRINT:PRINT "Text as you entered it.":PRINT:CLOSE #1:OPEN FILNAM$ FOR INPUT AS #1
70 IF EOF(2) THEN GOTO 71 ELSE LINE INPUT #2,ANS$:PRINT ANS$:GOTO 70
71 LOCATE 24,1:PRINT SPC(79);:LOCATE 24,1:PRINT "Press the ENTER key to continue.";:CLOSE #2:KILL "qqqqjwsq":INPUT; ANS$:RETURN
72 PRINT #2,H$;:PRINT H$;:RETURN
```
{% endraw %}

## FILES436.TXT

{% raw %}
```
Disk No:  436
Program Title: HAM RADIO #1
PC-SIG version: 1.3

There are three different Morse code programs on this diskette to help
the user learn, practice, and review data.  Other routines help the
amateur radio operator compute various electronic formulas, design
antennas, find satellites, and calculate satellite orbits.  RTTY and TTY
are two different communication programs using BAUDOT, ASCII, or Morse
code at varying speeds.

Usage:  Ham Radio.

Special Requirements:  A version of BASIC.

How to Start:  Load BASIC then load the desired program.

Suggested Registration:  None

File Descriptions:

ASCTTY   BAS  Transmits & receives 110 baud ASCII for TTY22.BAS.
BAUDOTC  EXE  Demo of communication program.
CQ       BDT  CQ message for TTY22.BAS.
CWID     BDT  CW identification for TTY22.BAS.
CWRCV    BAS  Copy EIA RS232C Morse code to screen.
CWRCV    HLP  Description of CWRCV.BAS.
EZCODE1  BAS  Learn & practice Morse code for amateur radio license.
FINDSAT  BAS  Azimuth & elevation to a synchronous satellite.
HAMCALC  BAS  Computes miscellaneous electronic formulas.
HAMHELP  BAS  Computations to aid in ham radio operations.
HAMMODEM BAS  Modem demonstration (ham radio or phone line).
LISTCOUN TXT  Alphabetical list of counties in each state.
MORSE1   BAS  Morse code practice program, variable speed.
MORSE2   BAS  Morse code generator, variable speed.
OPTICS   COM  Pascal compute parameters of a reflecting telescope.
OPTICS   PAS  Pascal compute parameters of a reflecting telescope.
OSCAR    BAS  Calculates satellite orbits.
PARABOLA BAS  Design of parabolic antenna reflector.
RTTY     DOC  Description of RS-232C interface.
RTTYSUBS BDT  RTTY unit.
RTTYTALK BAS  Transmit/receive, AEA CP-1 interface (like PC TALK-III).
RTTYTALK DOC  Documentation for RTTYTALK.BAS.
RYT      BDT  RY message for TTY22.BAS.
SATFIND2 BAS  Locates TV satellites for given cities or locations.
SATFIND4 BAS  Locates TV satellites for given cities or locations.
TTY      BAT  Gets date and time.
TTY      DOC  Description of TTY22.BAS & updates.
TTY22    BAS  TTY transmit and receive program.
VHF-YAGI BAS  Calculates dimensions of VHF Yagi antenna.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## FINDSAT.BAS

{% raw %}
```bas
10 FG=0:KEY OFF
20 GOTO 2700
25 '
30 '  ******
40 '
50 '  This module computes the look Azimuth and Elevation from a specified
51 '  position on the earth to a Synchronous Satellite.
60 '
70 '  ******
80 '
90 '  Azimuth is in Y
100 '  Elevation is in EL
110 '
120 '  First compute the proper Longitude Difference
130 '
140 T = M2 - M1
150 TA = ABS(T)
160 IF TA <= 180 THEN GOTO 190
170 TS = SGN(T)
180 T = -1 * ((TS * 360) - T)
190 EP = T
200 '
210 '  Now convert Angles into Radians
220 '
230 T = T / RD:L1 = L1 / RD:EP = EP / RD
240 '
250 '  Now compute MODIFIED receiver latitude
251 '
260 X = SQR (1 - 0.5 * (COS(L1) + COS(EP)))
270 ML = 2 * FN ARCSYN(X)
280 '
290 '  Now compute elevation look angle
300 '
310 EL = (PI / 2) - (ML + ATH(R * SIN(ML) / (R * (1 - COS(ML) * H))))
320 '
330 '  Now compute look azimuth
340 '
350 IF EP = 0 THEN YA = PI: GOTO 420
360 ZA = 1 / TAN(EP / 2)
370 ZB = TAN(L1 / 2)
380 YA = ATN(ZA * ZB) + ATN (ZA * (1 / ZB))
390 '
400 '  Now convert angles back to degrees
410 '
420 YA = YA * RD:EL = INT(EL * RD):L1 = L1 * RD
430 '
440 '  Correct look Azimuth for North/South Hemisphere
450 '
460 ZF = 360
470 IF L1 < 0 THEN GOTO 510
480 YA = 360 + YA
490 Y = FN MUD(YA)
500 RETURN
510 Y = INT(180 + YA)
520 RETURN
521 '
530 '  ******
540 '
550 '  Module to get city Name,Latitude and Longitude.
560 '
570 '  ******
571 '
580 SCREEN 0,0:CLS:LOCATE 3,1
590 INPUT "What is the name of the city ? ",NC$
600 LOCATE 7,1
610 INPUT "Enter the CITY Latitude using SPACES to seperate DEGREES, MINUTES,  and N(orth) or S(outh). ",DL$
620 '
630 '  Now decompose DL$ into degrees,minutes and N or S
640 '  Do degrees first
650 '
660 LE = LEN(DL$)
670 I = 1
680 IF MID$(DL$,I,1) = CHR$(32) THEN GOTO 800
690 IF (I = LE) THEN GOTO 750
700 I = I + 1:GOTO 680
710 '
720 '  Data is not in proper format
730 '  Send error message and do again
740 '
750 LOCATE 20,1:PRINT "When you enter the Latitude, be sure to use spaces to seperate the entries. ":LOCATE 24,27:INPUT"Press any key to continue!",KB$
760 LOCATE 7,1:CLS:GOTO 610
770 '
780 '  Get degrees
790 '
800 J = I - 1
810 DG = VAL(MID$(DL$,1,J))
820 '
830 '  Now look for minutes
840 '
850 MN = 0:KK = 0
860 I = I + 1
870 IF MID$(DL$,I,1) = CHR$(32) THEN GOTO 930
880 IF (I = LE) THEN GOTO 750
890 I = I + 1:KK = 1:GOTO 870
900 '
910 '  Get minutes
920 '
930 JK = I - 1
940 IF KK <> 0 THEN MN = VAL(MID$(DL$,J + 1,JK))
950 '
960 '  Degrees between 0-90 and minutes between 0-60?
970 '
980 IF NOT (DG > 90 OR DG < 0 OR MN > 60 OR MN < 0) THEN GOTO 1070
990 '
1000 '  Deg,min between correct limits
1010 '
1020 LOCATE 20,1:PRINT "Degrees are between 0 and 90 and Minutes are between 0 and 60.":INPUT "Any key to continue ";K$
1030 CLS:LOCATE 7,1:GOTO 610
1040 '
1050 '  Convert to decimal
1060 '
1070 L1 = DG + (MN / 60)
1080 '
1090 '  N or S?
1100 '
1110 I = I + 1
1120 NS$ = MID$(DL$,I,1)
1130 IF NS$ = "N" OR NS$ = "n" OR NS$ = "S" OR NS$ = "s" THEN GOTO 1220
1140 '
1150 '  Must be North or South
1160 '
1170 LOCATE 20,1:INPUT "Enter either N for North or S for South. Any key to continue. ";K$
1180 CLS:LOCATE 7,1:GOTO 610
1190 '
1200 '  Put in correct sigh for latitude
1210 '
1220 IF NS$ = "S" OR NS$ = "s" THEN L1 = -L1
1240 '
1250 '  Now get city longitude
1270 '
1280 LOCATE 11,1
1290 INPUT "Enter the city longitude  using SPACES to seperate DEGREES, MINUTES, and E(ast) or W(est). ",DL$
1300 '
1310 '  Now decompose Dl$ into degrees, minutes and E or W
1320 '  Do degrees first
1330 '
1340 LE = LEN(DL$)
1350 I = 1
1360 IF MID$(DL$,I,1) = CHR$(32) THEN GOTO 1480
1370 IF (I = LE) THEN GOTO 1430
1380 I = I + 1:GOTO 1360
1390 '
1400 '  Data is not in proper format
1410 '  Send error message and do again
1420 '
1430 LOCATE 20,1:PRINT"When you enter the longitude, be sure to use spaces to seperate the entries. ":LOCATE 24,27:INPUT"Press any key to continue!",KB$
1440 CLS;LOCATE 11,1:GOTO 1280
1450 '
1460 '  Get degrees
1470 '
1480 J = I - 1
1490 DG = VAL(MID$(DL$,1,J))
1500 '
1510 '  Now look for minutes
1520 '
1530 MN = 0:KK = 0
1540 I = I + 1
1550 IF MID$(DL$,I,1) = CHR$(32) THEN GOTO 1610
1560 IF (I = LE) THEN GOTO 1430
1570 I = I + 1:KK = 1:GOTO 1550
1580 '
1590 '  Get minutes
1600 '
1610 JK = I - 1
1620 IF KK <> 0 THEN MN = VAL(MID$(DL$,J + 1,JK))
1630 '
1640 '  Degrees between 0-180 and minutes between 0-60?
1650 '
1660 IF NOT (DG > 180 OR DG < 0 OR MN > 60 OR MN < 0) THEN GOTO 1750
1670 '
1680 '  Deg,min between correct limits
1690 '
1700 LOCATE 20,1:PRINT"Degrees are between 0 and 180 and Minutes are between 0 and 60.";:INPUT K$
1710 CLS:LOCATE 11,1:GOTO 1280
1720 '
1730 '  Convert to decimal
1740 '
1750 M1 = DG + (MN / 60)
1760 '
1770 '  E or W
1780 '
1790 I = I + 1
1800 EW$ = MID$(DL$,I,1)
1810 IF EW$ = "E" OR EW$ = "e" OR EW$ = "W" OR EW$ = "w" THEN GOTO 1900
1820 '
1830 '  Must be East or West
1840 '
1850 LOCATE 20,1:PRINT"Enter either E(ast) or W(est). ":INPUT"Any key to continue ";K$
1860 CLS:LOCATE 11,1:GOTO 1280
1870 '
1880 '  Put in correct sign for longitude
1890 '
1900 IF EW$ = "W" OR EW$ = "w" THEN M1 = -M1
1910 RETURN
1911 '
1920 '  ******
1930 '
1940 '  Module to get satellite name and longitude.
1950 '
1960 '  ******
1961 '
1970 CLS:LOCATE 3,1
1980 INPUT"What is the name of the satellite ? ",NS$
1990 LOCATE 5,1
2000 INPUT "Enter the Satellite longitude using SPACES to seperate DEGREES, MINUTES, and    E(ast) or W(est). ",SL$
2010 '
2020 '  Now decompose SL$ into degrees, minutes and E or W
2030 '  Do degrees first
2040 '
2050 LE = LEN(SL$)
2060 I = 1
2070 IF MID$(SL$,I,1) = CHR$(32) THEN GOTO 2190
2080 IF (I = LE) THEN GOTO 2140
2090 I = I + 1:GOTO 2070
2100 '
2110 '  Data is not in proper format
2120 '  Give error message and do again
2130 '
2140 LOCATE 20,1:PRINT"When you enter the longitude, be sure to use SPACES to seperate the entries. ":LOCATE 24,27:INPUT"Press Any key to continue!",KB$
2150 CLS:LOCATE 11,1:GOTO 1280
2160 '
2170 '  Get degrees
2180 '
2190 J = I - 1
2200 DG = VAL(MID$(SL$,1,J))
2210 '
2220 '  Now look for minutes
2230 '
2240 MN = 0:KK = 0
2250 I = I + 1
2260 IF MID$(SL$,I,1) = CHR$(32) THEN GOTO 2320
2270 IF (I = LE) THEN GOTO 2010
2280 I = I + 1:KK = 1:GOTO 2260
2290 '
2300 '  Get minutes
2310 '
2320 JK = I - 1
2330 IF KK <> 0 THEN MN = VAL(MID$(SL$,J + 1,JK))
2340 '
2350 '  Degrees between 0-180 and minutes between 0-60?
2360 '
2370 IF NOT (DG > 180 OR DG < 0 OR MN > 60 OR MN < 0) THEN GOTO 2460
2380 '
2390 '  Deg,min between correct limits
2400 '
2410 LOCATE 20,1:PRINT "Degrees are between 0 and 180 and minutes are between 0 and 60. ":INPUT "any key to continue ";K$
2420 CLS:LOCATE 5,1:GOTO 2000
2430 '
2440 '  Convert to decimal
2450 '
2460 M2 = DG + (MN / 60)
2470 '
2480 '  E or W
2490 '
2500 I = I + 1
2510 EW$ = MID$(SL$,I,1)
2520 IF EW$ = "E" OR EW$ = "e" OR EW$ = "W" OR EW$ = "w" THEN GOTO 2610
2530 '
2540 '  Must be east or west
2550 '
2560 LOCATE 20,1:PRINT "Enter either E(ast) or W(est). ":INPUT "Any key to continue ";K$
2570 CLS:LOCATE 11,1:GOTO 1280
2580 '
2590 '  Put in correct sign for longitude
2600 '
2610 IF EW$ = "W" OR EW$ = "w" THEN M2 = -M2
2620 RETURN
2621 '
2630 '  ******
2640 '
2650 '  Header module
2660 '
2670 '  ******
2671 '
2680 '  This module does the header and gives instructions as needed
2690 '
2700 COLOR 0,1:CLS
2710 LOCATE 10,20:COLOR 8,1 :PRINT"Geosynchronous Communications Satellite" :COLOR 0,1
2720 LOCATE 13,27:PRINT "Look Angle Calculator"
2730 FOR I = 1 TO 2000:NEXT I
2740 CLS:LOCATE 1,32:COLOR 8,1 :PRINT"G E O S A T" :COLOR 0,1
2750 LOCATE 8,1
2760 PRINT "This program will allow you to determine where you must  point your antenna to"
2770 PRINT "permit reception of signals transmitted from a Geosynchronous satellite."
2780 PRINT
2790 PRINT "If you need instructions on the operation of this program, press the <ESC> key,"
2800 PRINT "otherwise press the <RTN> key to start the program."
2840 LOCATE 23,4:PRINT"Press <ESC> to display the Instructions, or <RTN> to start the Program!";
2850 '
2860 '  What was entered?
2870 '
2880 KB$=INKEY$:IF KB$="" THEN 2880
2890 IF KB$=CHR$(27) THEN 2930 ELSE 6080
2900 '
2910 '  Give instructions
2920 '
2930 CLS:LOCATE 1,1:COLOR 8:PRINT TAB(34)"INSTRUCTIONS":COLOR 0:PRINT
2940 PRINT "    Whenever  there  are  parentheses around words or groups of letters in the "
2950 PRINT "instructions, this  means  that  the items inside the parentheses are optional."
2960 PRINT "Items inside the symbols < > are required operations or entries."
2970 PRINT
2980 PRINT TAB(28)"<SP>  is the space key."
2990 PRINT TAB(28)"<RTN> is the return key."
3000 PRINT TAB(28)"<ESC> is the escape key."
3010 PRINT : PRINT "    As a part of this program, there are 2 data sets.  One consists of a number"
3020 PRINT "of satellites and their longitudes.   The other is a number of cities and their"
3030 PRINT "latitudes and longitudes. For each data set, you will be asked whether you wish"
3040 PRINT "to use the information already in the program or wish to enter new information."
3050 PRINT "If you  choose to use the information  already in the program, simply enter the"
3060 PRINT "number that corresponds to the city or satellite you desire and press the <RTN>"
3070 PRINT "key."
3080 PRINT
3090 PRINT "   If you wish to enter your own city or satellite, press any key that does not"
3100 PRINT "correspond to a city or satellite and press <RTN>.  You will then be asked sev-"
3110 PRINT "eral questiones.  For NAMES OF SATELITES,  enter whatever you wish.  Use spaces"
3120 PRINT "and not commas as seperators if needed."
3130 PRINT:PRINT TAB(28)"Press <RTN> to continue!";
3140 KB$=INKEY$:IF KB$="" THEN 3140
3150 CLS:LOCATE 1,1:COLOR 8:PRINT TAB(34)"INSTRUCTIONS":COLOR 0:PRINT
3160 PRINT "    When LATITUDE information is requested, enter the data in the format:"
3170 PRINT :PRINT TAB(22)"DEGREES <SP> MINUTES <SP> N or S <RTN>"
3180 PRINT:PRINT "N(orth) or S(outh) must be enter,  but if you wish to skip the DEGREE or MINUTE"
3190 PRINT "entry just enter a space instead of the number.  Complete the entry by pressing"
3200 PRINT "<RTN>.  The same format is used for LONGITUDE data.  Just replace  N or S  with"
3210 PRINT "E(ast) or W(est)."
3211 PRINT:PRINT"   If the Elevation prints as `***', the satellite is below the horizon and is"
3212 PRINT "not in the `line of sight' of your installation."
3220 LOCATE 23,5:PRINT"Press <ESC> to re-display the Instructions, <RTN> to start the Program!";
3230 KB$=INKEY$:IF KB$="" THEN 3230
3240 IF KB$ <> CHR$(27) THEN 6000 ELSE 2930
3241 '
6000 '  ******
6010 '
6020 '  Initialization module
6030 '
6040 '  ******
6050 '
6060 '  Some constants
6070 '
6080 CLS:LOCATE 1,1:R=6378:H=35500.:PI=3.14159
6090 RD=360/(2*PI)
6100 '
6110 '  Arcsin defination
6120 '
6130 DEF FN ARCSYN(X)=ATN(X/SQR(-X*X+1))
6140 '
6150 '  Modulus definition
6160 '
6170 DEF FN MUD(Z)=INT((Z/ZF-INT(Z/ZF))*ZF+0.05)*SGN(Z/ZF)
6180 '
6190 '  Read in the satellite parameters
6200 '
6210 RESTORE
6220 '
6230 '  N is the number or satellites in the lins
6240 '
6250 READ N
6260 '
6270 '  SN$( is name array and SN( is longitude array
6280 '
6290 IF FG=1 THEN GOTO 6340
6300 DIM SN$(N),SN(N),DS$(N),DS(N),P$(24),S%(2)
6310 '
6320 '  P$( is printer buffer
6330 '
6340 FOR I=1 TO N
6350 READ SN$(I)
6360 READ SN(I)
6370 NEXT I
6380 SN(0)=N
6390 '
6400 '  A( is look azimuth array and E( is look elevation array
6410 '
6420 IF FG=1 THEN GOTO 6470
6430 DIM A(N),E(N)
6440 '
6450 '  Read in city parameters, m is number of cities
6460 '
6470 READ M
6480 '
6490 '  Cn$( is city name array, CL( is city latitude array
6500 '  CM( is city longitude array
6510 '
6530 IF FG=1 THEN GOTO 6550
6540 DIM CN$(M),CL(M),CM(M)
6550 FOR I=1 TO M
6560 READ CN$(I)
6570 READ CL(I)
6580 READ CM(I)
6590 NEXT I
6600 CL(0)=M
6601 '
7000 '  ******
7010 '
7020 '  This module gives the city list along with the option of choosing one
7021 '  of the stored cities or entering a new one
7030 '
7040 '  ******
7041 '
7050 CLS:LOCATE 1,1
7060 PRINT "These cities are available:":LOCATE 5,1
7070 '
7080 '  Get number of cities. If >30 then truncate.
7090 '
7100 M=CL(0)
7110 IF M>30 THEN M=30
7120 '
7130 '  Determine number of rows of dual column printing needed
7140 '
7150 M1=M/2:M2=INT(M1):MP=M1-M2
7160 '
7170 '  Default tab offset positions
7180 '
7190 HL=11:HR=51
7200 FOR I=1 TO M2
7210 J=I+M2
7220 '
7230 '  If MP=0 there will be 2 columns on each row.  Otherwise there will be
7231 '  an extra row.
7240 '
7250 IF MP<>0 THEN J=J+1
7260 '
7270 '  Gosub determines the number of digits in I,J
7280 '
7290 GOSUB 30000
7300 PRINT TAB(HL-H1);I;TAB(HL+2);CN$(I);TAB(HR-H2);J;TAB(HR+2);CN$(J)
7310 NEXT I
7320 IF MP<>0 THEN GOSUB 30000:PRINT TAB(HL-H1);I;TAB(HL+2);CN$(I)
7330 '
7340 '  Get choice of city.  only one at a time!!!
7350 '
7360 LOCATE 21,1:PRINT "Enter your choice by indicating:":PRINT
7370 PRINT "      A number between 1 and";M;:INPUT ", or press any other key for a new city! ",KB$
7400 '
7410 '  What is KB$
7420 '
7430 CK=VAL(KB$)
7440 IF CK<1 OR CK>M THEN GOSUB 580:CK=M+1
7450 '
7460 '  Now do satellite
7470 '
8000 '  ******
8010 '
8020 '  This module gives the satellite list along with the option of using
8021 '  all the stored names or entering a new one
8030 '
8040 '  ******
8041 '
8050 CLS:LOCATE 2,1:PRINT "These satellites are available:":LOCATE 5,1
8070 '
8080 '  Get number of satellites.  If >30 then truncate
8090 '
8100 N=SN(0)
8110 IF N>30 THEN N=30
8120 '
8130 '  Determine number of dual column printings needed
8140 '
8150 N1=N/2:N2=INT(N1):NP=N1-N2
8160 '
8170 '  Default tab offset positions
8180 '
8190 HL=11:HR=51
8200 FOR I=1 TO N2
8210 J=I+N2
8220 '
8230 '  If NP=0 then there will be 2 columns for each row.  Otherwise, an
8231 '  extra row is needed
8240 '
8250 IF NP<> 0 THEN J=J+1
8260 '
8270 '  Gosub determines the number of digits in I,J
8280 '
8290 GOSUB 30000
8300 PRINT TAB(HL-H1);I;TAB(HL+2);SN$(I);TAB(HR-H2);J;TAB(HR+2);SN$(J)
8310 NEXT I
8320 IF NP<>0 THEN GOSUB 30000:PRINT (HL-H1);I;TAB(HL+2);SN$(I)
8330 '
8340 '  Now get choice of which satellite(s) to use
8350 '
8360 LOCATE 20,1:PRINT "Enter your choice by indicating:":PRINT
8370 PRINT "A number between 1 and";N;:INPUT ", Zero(0) for all, or any other key to enter the name of a new Satellite! ",KB$
8390 '
8400 '  What is KB$
8410 '
8420 SQ=ASC(KB$)
8430 SK=VAL(KB$)
8440 '
8450 '  Go get a new satellite?
8460 '
8470 IF SK=0 AND (SQ<48 OR SQ>57) THEN GOSUB 1970:SK=N+1
8471 '
9000 '  ******
9010 '
9020 '  Setup City, Satellite parameters prior to AZ,EL Calculation
9030 '
9040 '  ******
9050 '
9060 '  Do city first
9070 '
9080 IF CK>M THEN DC$=NC$
9090 IF CK<=M THEN DC$=CN$(CK):L1=CL(CK):M1=CM(CK)
9100 '
9110 '  Do satellite.  First setup default name array
9120 '
9130 N=SN(0)
9140 FOR I=0 TO N
9150 DS$(I)=SN$(I)
9160 DS(I)=SN(I)
9170 NEXT I
9180 '
9190 '  If sk=0 use all
9200 '
9210 IF SK=0 THEN GOTO 9350
9220 '
9230 '  Distinguish between sk=1,n and sk>n
9240 '
9250 DS(0)=1
9260 IF SK>N THEN GOTO 9300
9270 DS$(1)=DS$(SK)
9280 DS(1)=DS(SK)
9290 GOTO 9350
9300 DS$(1)=NS$
9310 DS(1)=M2
9320 '
9330 '  Now do AZ,EL Calculation
9340 '
9350 MX=DS(0)
9360 FOR I=1 TO MX
9370 M2=DS(I)
9380 GOSUB 140
9390 A(I)=Y:E(I)=EL
9400 NEXT I
9401 '
10000 '  ******
10010 '
10020 '  This module does the screen display of the calculations results
10030 '
10040 '  ******
10090 '
10140 '  Some defaults:  lines/page;start line;stop line;AZ,EL tabs
10150 '
10160 LP=15:ST=1:SP=LP:HL=50:HR=60
10170 '
10180 '  Determine number of display pages
10190 '
10200 Z1=INT(N/15)
10210 ZP=Z1+1
10220 '
10230 '  Display page loop
10240 '
10250 FOR ZQ=1 TO ZP
10260 GOSUB 11050
10270 LOCATE 8,1
10280 IF DS(0)<SP THEN SP=DS(0)
10290 FOR ZR=ST TO SP
10300 I=A(ZR):J=E(ZR)
10310 GOSUB 30000
10320 PRINT TAB(22);DS$(ZR);TAB(HL-H1);I;:IF J >-0 THEN PRINT TAB(HR-H2);J:GOTO 10330
10325 PRINT TAB(HR-2)"***"
10330 NEXT ZR
10340 LOCATE 24,19:INPUT"Enter <P> to print, or Press <RTN> to continue! ",KB$
10350 '
10360 '  If KB$= "P" then goto print routine
10370 '
10380 IF LEFT$(KB$,1) = "P" OR LEFT$(KB$,1) = "p" THEN GOSUB 50000
10390 ST=SP+1:SP=SP+LP:CLS
10400 NEXT ZQ
10410 '
10420 '  Do another set?
10430 '
10440 LOCATE 24,8
10460 PRINT "Press <RTN> to run the program again, or <ESC> to exit to Basic.";
10470 KB$ = INKEY$:IF KB$ = "" THEN 10470
10480 IF KB$=CHR$(13) THEN FG=1:GOTO 6080
10490 IF KB$=CHR$(27) THEN GOTO 10520
10500 GOTO 10440
10520 CLS:LOCATE 1,1:RUN"SDIR.BAS"
10530 END
10540 '
11000 '  ******
11010 '
11020 '  Header subroutine
11040 '
11041 '  ******
11042 '
11050 CLS:LOCATE 1,23:COLOR 8,1:PRINT "G E O - S A T E L L I T E   `Look  Angle'":COLOR 0,1
11060 LOCATE 3,10:PRINT "From: ";DC$
11070 LOCATE 5,51:PRINT "Antenna"
11080 PRINT TAB(24);"To";TAB(46);"Azimuth";TAB(55);"Elevation"
11090 RETURN
20000 '
20001 '  ******
20002 '
20010 '  Data statements
20020 '
20021 '  ******
20022 '
20030 DATA 12
20040 DATA Comstar 3,-87
20050 DATA Westar 3,-91
20060 DATA Comstar 2,-95
20070 DATA Westar 1,-99
20080 DATA Anik 1,-104
20090 DATA Anik 2,-109
20100 DATA Anik 3,-114
20110 DATA Satcom 2,-119
20120 DATA Westar 2,-123.5
20130 DATA Comstar 1,-128
20140 DATA Satcom 3,-132
20150 DATA Satcom 1,-135
20160 DATA 17
20170 DATA Washington D.C.,39,-77
20180 DATA Los Angeles Cal.,34,-118
20190 DATA New York NY.,40.75,-74
20200 DATA Atlanta Ga.,33.5,-84.5
20210 DATA Miami Fl.,25.75,-80.25
20220 DATA Jacksonville Fl.,30.5,-81.5
20230 DATA Tampa Fl.,28,-82.75
20240 DATA Anchorage Al.,60.8,-147
20250 DATA Nome Al.,65,-165
20260 DATA Phoenix Arz.,33.5,-112
20270 DATA Little Rock Ark.,34.75,-92.25
20280 DATA Portland Ore,45.5,-122.75
20290 DATA Seattle Wash.,47.5,-122.5
20300 DATA San Francisco Cal.,37.75,-122.5
20310 DATA Chicago Ill.,41.75,-87.75
20320 DATA Milwaukee Wisc.,43,-87.9
20330 DATA San Diego Cal.,32.65,-117.3
29970 '
29971 '  ******
29972 '
29980 '  Tab positioning Routine
29981 '
29982 '  ******
29990 '
30000 H1=3:H2=3
30010 IF I<100 THEN H1=2
30020 IF I<10 THEN H1=1
30030 IF J<100 THEN H2=2
30040 IF J<10 THEN H2=1
30050 RETURN
49950 '
49951 '  ******
49952 '
49960 '  Printer routine
49970 '
49971 '  ******
49972 '
49980 '  Follows screen format shown on page 30 of IBM Internal newsletter #2
49990 '
50000 S%(1) = &H5CD   'CD 05     INT 5
50010 S%(2) = &HCB     'RET
50020 SUBRT% = VARPTR(S%(1))
50030 CALL SUBRT%
50040 FOR L = 1 TO 7:LPRINT:NEXT L
50050 RETURN
```
{% endraw %}

## HAMCALC.BAS

{% raw %}
```bas
10 CLS:PRINT "THIS PROGRAM WILL COMPUTE MISCELLANEOUS ";
20 PRINT "ELECTRONIC FORMULAS":PRINT
30 PRINT "IF NOT SPECIFIED, ALL ENTRIES ARE IN UNITS":PRINT
40 REM PROGRAM BY PAUL CRABTREE
50 PRINT TAB(21)"ENTER NUMBER OF ITEM":PRINT
60 CLEAR
70 PRINT
80 DIM R1(20),C1(20),L1(20)
90 FOR X=1 TO 12:READ B$:IF B$="777"GOTO 110
100 NEXT X
110 FOR A=1 TO 20:READ B$
120 IF B$="999"GOTO 240
130 ON A GOTO 150,160,150,160,150,160,150,160,150,160
140 ON A-10 GOTO 150,160,150,160,150,160,150,160
150 PRINT TAB(5)B$,:GOTO 170
160 PRINT TAB(40)B$
170 NEXT A
180 PRINT "IF YOU HAVE MORE VALUES FOR THIS PROGRAM"
190 PRINT "TYPE 'YES'. IF YOU WISH TO GO TO THE MAIN LIST THEN"
200 LINE INPUT "TYPE 'N0' ? ";M$
210 IF M$="YES" OR M$="yes" OR M$="y" THEN RETURN
220 IF M$="NO" OR M$="no" OR M$="n" GOTO 10
230 GOTO 180
240 PRINT :INPUT "WHAT ITEM NUMBER FROM MAIN LIST  ";Q
250 IF Q>18 GOTO 240
260 IF Q<1 GOTO 240
270 ON Q GOTO 390,1200,1480,1590,1730,1950,2010,2170,2300,950,1010
280 ON Q-11 GOTO 1050,1100,2640,1280,1370,500,610
290 DATA "BLACK","BROWN","RED","ORANGE","YELLOW","GREEN"
300 DATA "BLUE","VIOLET","GRAY","WHITE","777"
310 DATA "1 PARALLEL RESISTORS","2 RESONANT FREQUENCY"
320 DATA "3 SERIES CAPACITORS","4 REACTANCE","5 IMPEDANCE"
330 DATA "6 ANTENNA LENGTH","7 OHMS LAW","8 POWER FORMULA"
340 DATA "9 RESISTOR COLOR CODE","10 TRANSFORMER TURNS RATIO"
350 DATA "11 DECIBELS","12 CONDUCTANCE","13 FREQUENCY TO TIME"
360 DATA "14 TRANSMISSION LINE","15 ANT FIELD STRENGTH"
370 DATA "16 PEAK RADAR PULSE POWER","17 PARALLEL INDUCTORS"
380 DATA "18 PROGRAM CONVERSION TABLE","999"
390 PRINT "THIS PROGRAM WILL CALCULATE PARALLEL RESISTORS"
400 INPUT "HOW MANY RESISTORS  ";R
410 T=0:IF R>18 GOTO 400
420 IF R<2 GOTO 400
430 FOR X=1 TO R:PRINT "RESISTOR VALUE ";X;" IN OHMS";
440 INPUT " ? ";R1(X):IF X=R GOTO 460
450 NEXT X
460 FOR X=1 TO R:T=T+(1/R1(X)):IF X=R GOTO 480
470 NEXT X
480 PRINT "TOTAL RESISTANCE IS ";1/T;" OHMS"
490 GOSUB 180:PRINT :GOTO 400
500 PRINT "THIS PROGRAM WILL CALCULATE PARALLEL INDUCTORS"
510 INPUT "HOW MANY INDUCTORS ? ";L
520 T=0:IF L>18 GOTO 510
530 IF L<2 GOTO 510
540 FOR X=1 TO L:PRINT "INDUCTOR VALUE ";X;" IN HENRYS";
550 INPUT " ? ";L1(X):IF X=L GOTO 570
560 NEXT X
570 FOR X=1 TO L:T=T+(1/L1(X)):IF X=L GOTO 590
580 NEXT X
590 PRINT "TOTAL INDUCTANCE IS ";1/T;" HENRYS"
600 GOSUB 180:PRINT :GOTO 510
610 PRINT "THIS PROGRAM WILL CONVERT ENTRIES (TO BE USED IN ";
620 PRINT "MAIN PROGRAM) TO UNITS"
630 PRINT "CONVERT ITEM"
640 PRINT "(1)GIGA, (2)MEGA, (3)KILO, (4)MILLI, (5)MICRO,";
650 PRINT " (6)NANO, OR (7)PICO"
660 INPUT "TO UNITS  ";U
670 IF U=1 GOTO 890
680 IF U=2 GOTO 740
690 IF U=3 GOTO 770
700 IF U=4 GOTO 800
710 IF U=5 GOTO 830
720 IF U=6 GOTO 920
730 IF U=7 GOTO 860
740 INPUT "MEGA VALUE ? ";U
750 PRINT "MEGA VALUE ";U;" IS ";U*1000000!;" IN UNITS"
760 GOSUB 180:PRINT :GOTO 630
770 INPUT "KILO VALUE ? ";U
780 PRINT "KILO VALUE ";U;" IS ";U*1000;" IN UNITS"
790 GOSUB 180:PRINT :GOTO 630
800 INPUT "MILLI VALUE  ";U
810 PRINT "MILLI VALUE ";U;" IS ";U*.001;" IN UNITS"
820 GOSUB 180:PRINT :GOTO 630
830 INPUT "MICRO VALUE ? ";U
840 PRINT "MICRO VALUE ";U;" IS ";U*.000001;" IN UNITS"
850 GOSUB 180:PRINT :GOTO 630
860 INPUT "PICO VALUE ? ";U
870 PRINT "PICO VALUE ";U;" IS ";U*1E-12;" IN UNITS"
880 GOSUB 180:PRINT :GOTO 630
890 INPUT "GIGA VALUE ? ";U
900 PRINT "GIGA VALUE ";U;" IS ";U*1000000000#;" IN UNITS"
910 GOSUB 180:PRINT :GOTO 630
920 INPUT "NANO VALUE ? ";U
930 PRINT "NANO VALUE ";U;" IS ";U*9.999999E-10;" IN UNITS"
940 GOSUB 180:PRINT :GOTO 630
950 PRINT "THIS PROGRAM WILL CALCULATE SECONDARY VOLTAGE"
960 INPUT "PRIMARY VOLTAGE ? ";P
970 INPUT "SECONDARY TURNS ? ";S
980 INPUT "PRIMARY TURNS  ";P1
990 PRINT "THE SECONDARY VOLTAGE IS ";P*(S/P1)
1000 GOSUB 180:PRINT :GOTO 960
1010 PRINT "THIS PROGRAM WILL CALCULATE DECIBEL RATIO OF TWO POWERS"
1020 INPUT "ENTER POWER ONE  ";P1:INPUT "ENTER POWER TWO  ";P2
1030 PRINT "THE DECIBEL VALUE IS ";10*(LOG(P1/P2)/LOG(10));" DB"
1040 GOSUB 180:PRINT :GOTO 1020
1050 PRINT "THIS PROGRAM WILL CALCULATE CONDUCTANCE IN MHOS"
1060 INPUT "WHAT IS THE RESISTANCE  ";R
1070 IF R<=0 GOTO 1060
1080 PRINT "THE CONDUCTANCE IS ";1/R;" MHOS"
1090 GOSUB 180:PRINT :GOTO 1060
1100 PRINT "THIS PROGRAM WILL CALCULATE FREQUENCY TO TIME"
1110 INPUT "IS FREQUENCY IN HZ (1) OR KHZ (2)  ";M
1120 IF M=1 GOTO 1150
1130 IF M=2 GOTO 1170
1140 GOTO 1110
1150 INPUT "FREQUENCY IN HZ  ";F
1160 PRINT "THE FREQUENCY IS EQUAL TO ";1/F;" SECONDS":GOTO 1190
1170 INPUT "FREQUENCY IN KHZ  ";F
1180 PRINT "THE FREQUENCY IS EQUAL TO ";1/(F/1000);" MICROSECONDS"
1190 GOSUB 180:PRINT :GOTO 1110
1200 PRINT "THIS PROGRAM WILL CALCULATE RESONANT FREQUENCY"
1210 INPUT "INDUCTANCE IN HENRYS ? ";L
1220 INPUT "CAPACITANCE IN FARADS ? ";C
1230 P=2*(4*ATN(1)):P=P*(SQR(L*C)):P=1/P
1240 PRINT "THE RESONANT FREQUENCY IS ";P;" HZ"
1250 A=P/1000:B=A/1000:C=B/1000
1260 PRINT "IN KHZ";A;" IN MHZ";B;" IN GEGA HZ";C
1270 GOSUB 180:PRINT :GOTO 1210
1280 PRINT "THIS PROGRAM WILL CALCULATE FIELD STRENGTH"
1290 PRINT "AT MODERATE DISTANCES FROM THE TRANSMITTING ANTENNA"
1300 INPUT "WHAT IS THE EFFECTIVE ANTENNA HEIGHT IN METERS ? ";B
1310 INPUT "WHAT IS THE ANTENNA CURRENT IN AMPERES ? ";I
1320 INPUT "WHAT IS THE OPERATING WAVELENGTH IN METERS ? ";W
1330 INPUT "WHAT IS THE DISTANCE FROM ANTENNA IN METERS ? ";R
1340 E=(188*B*I)/(W*R)
1350 PRINT "THE FIELD STRENGTH IS ";E;" MILLIVOLTS PER METER"
1360 GOSUB 180:PRINT :GOTO 1300
1370 PRINT "THIS PROGRAM WILL CALCULATE THE PEAK"
1380 PRINT "POWER OF A RADAR PULSE"
1390 INPUT "WHAT IS THE PULSE WIDTH IN MICROSECONDS ? ";W
1400 INPUT "WHAT IS THE PULSE REPETION RATE  ";R
1410 INPUT "WHAT IS THE AVERAGE POWER IN WATTS ? ";P
1420 D1=1/R:W1=W/1000000!
1430 D1=W1/D1
1440 P1=P/D1:REM PEAK POWER
1450 PRINT "THE PEAK POWER IS ";P1;" WATTS"
1460 PRINT "THE DUTY CYCLE IS ";D1
1470 GOSUB 180:PRINT :GOTO 1370
1480 PRINT "THIS PROGRAM WILL CALCULATE SERIES CAPACITORS"
1490 INPUT "HOW MANY CAPACITORS ? ";C
1500 T=0:IF C>18 GOTO 1490
1510 IF C<2 GOTO 1490
1520 FOR X=1 TO C:PRINT "CAPACITOR VALUE ";X;" IN FARADS";
1530 INPUT " ? ";C1(X):IF X=C GOTO 1550
1540 NEXT X
1550 FOR X=1 TO C:T=T+(1/C1(X)):IF X=C GOTO 1570
1560 NEXT X
1570 PRINT "TOTAL CAPACITANCE IS ";1/T;" FARADS"
1580 GOSUB 180:PRINT :GOTO 1490
1590 PRINT "THIS PROGRAM WILL CALCULATE INDUCTIVE AND CAPACITIVE ";
1600 PRINT "REACTANCE"
1610 INPUT "SOLVE FOR INDUCTIVE (1) OR CAPACITIVE (2) REACTANCE ? ";R
1620 IF R=2 GOTO 1680
1630 PRINT "SOLVE FOR INDUCTIVE REACTANCE"
1640 INPUT "FREQUENCY IN HERTZ ? ";F
1650 INPUT "INDUCTANCE IN HENRYS ? ";L
1660 P=2*(4*ATN(1))
1670 PRINT "THE INDUCTIVE REACTANCE IS ";P*(F*L);" OHMS":GOTO 1720
1680 PRINT "SOLVE FOR CAPACITIVE REACTANCE"
1690 INPUT "FREQUENCY IN HERTZ ? ";F
1700 INPUT "CAPACITANCE IN FARADS ? ";C
1710 PRINT "THE CAPACITIVE REACTANCE IS ";1/(3.1416*(F*C));" OHMS"
1720 GOSUB 180:PRINT :GOTO 1610
1730 PRINT "THIS PROGRAM WILL CALCULATE SERIES OR PARALLEL IMPEDANCE"
1740 INPUT "SERIES (1) OR PARALLEL (2) CIRCUIT ? ";Q
1750 IF Q=2 GOTO 1860
1760 INPUT "RESISTANCE VALUE IN OHMS ? ";R
1770 INPUT "CAPACITANCE VALUE IN FARADS ? ";C
1780 INPUT "INDUCTANCE VALUE IN HENRYS  ";L
1790 IF C=L THEN Z=R:GOTO 1840
1800 IF L>C GOTO 1820
1810 IF C>L GOTO 1830
1820 Z=L-C:Z=Z*Z:Z=Z+(R*R):Z=SQR(Z):GOTO 1840
1830 Z=C-L:Z=Z*Z:Z=Z+(R*R):Z=SQR(Z)
1840 PRINT "THE IMPEDANCE IS ";Z;" OHMS"
1850 GOTO 1940
1860 INPUT "RESISTANCE VALUE IN OHMS ? ";R
1870 INPUT "CAPACITANCE VALUE IN FARADS ? ";C
1880 INPUT "INDUCTANCE VALUE IN HENRYS ? ";L
1890 A=12/R:B=12/C:C=12/L
1900 IF B>C THEN X=B-C
1910 IF C>B THEN X=C-B
1920 T=A*A:X=X*X
1930 PRINT "THE IMPEDANCE IS ";12/(SQR(T+X));" OHMS"
1940 GOSUB 180:PRINT :GOTO 1740
1950 PRINT "THIS PROGRAM WILL CALCULATE ANTENNA LENGTH"
1960 INPUT "FREQUENCY IN MHZ  ";F
1970 A=468/F:PRINT "THE HALF WAVE ANTENNA LENGTH IS ";A;" FEET";
1980 PRINT " OR ";:PRINT A*12;:PRINT " INCHES"
1990 PRINT "OPERATION WILL BE IN THE ";300/F;" METER BAND"
2000 GOSUB 180:PRINT :GOTO 1960
2010 PRINT "THIS PROGRAM WILL CALCULATE OHMS LAW"
2020 LINE INPUT "SOLVE FOR WHAT UNIT (E),(I), OR (R) ? ";U$
2030 IF U$="E"GOTO 2070
2040 IF U$="I"GOTO 2100
2050 IF U$="R"GOTO 2130
2060 GOTO 2020
2070 INPUT "CURRENT VALUE ? ";I
2080 INPUT "RESISTANCE VALUE ? ";R
2090 A=I*R:PRINT "THE VOLTAGE IS ";A:GOTO 2160
2100 INPUT "VOLTAGE VALUE ? ";E
2110 INPUT "RESISTANCE VALUE ? ";R
2120 A=E/R:PRINT "THE CURRENT IS ";A:GOTO 2160
2130 INPUT "VOLTAGE VALUE ? ";E
2140 INPUT "CURRENT VALUE ? ";I
2150 A=E/I:PRINT "THE RESISTANCE IS ";A
2160 GOSUB 180:PRINT :GOTO 2020
2170 PRINT "THIS PROGRAM WILL CALCULATE FOR POWER"
2180 INPUT "WHAT TWO UNITS (1)I&R, (2)E&R, (3)E&I  ";U
2190 IF U=1 GOTO 2230
2200 IF U=2 GOTO 2250
2210 IF U=3 GOTO 2270
2220 GOTO 2180
2230 INPUT "VALUE OF I,R ? ";A,B
2240 PRINT "POWER EQUALS ";B*(A*A);" WATTS":GOTO 2290
2250 INPUT "VALUE OF E,R ? ";A,B
2260 PRINT "POWER EQUALS ";B/(A*A);" WATTS":GOTO 2290
2270 INPUT "VALUE OF E,I ? ";A,B
2280 PRINT "POWER EQUALS ";A*B;" WATTS"
2290 GOSUB 180:PRINT :GOTO 2180
2300 PRINT "THIS PROGRAM WILL CALCULATE THE RESISTOR COLOR CODE"
2310 LINE INPUT "FIRST COLOR ? ";C1$
2320 RESTORE :A=0:FOR X=1 TO 12
2330 READ Q$:IF Q$=C1$THEN A=A:GOTO 2360
2340 IF Q$="777"GOTO 2310
2350 A=A+10:NEXT X
2360 LINE INPUT "SECOND COLOR ? ";C2$
2370 RESTORE :B=0:FOR X=1 TO 12
2380 READ R$:IF R$=C2$THEN B=B:GOTO 2410
2390 IF R$="777"GOTO 2360
2400 B=B+1:NEXT X
2410 LINE INPUT "THIRD COLOR ? ";C3$
2420 IF C3$="GOLD"THEN C=.1:GOTO 2480
2430 IF C3$="SILVER"THEN C=.01:GOTO 2480
2440 RESTORE :C=1:FOR X=1 TO 12
2450 READ S$:IF S$=C3$THEN C=C:GOTO 2480
2460 IF S$="777"GOTO 2410
2470 C=C*10:NEXT X
2480 K=C*(A+B):PRINT "THE RESISTANCE IS ";K;" OHMS"
2490 S=K
2500 K=K/1000:PRINT "OR ";K;" KILO OHMS"
2510 K=K/1000:PRINT "OR ";K;" MEGA OHMS"
2520 K=K/1000:PRINT "OR ";K;" GIGA OHMS"
2530 PRINT "ENTRIES FOR NEXT QUESTION (NONE, SILVER, OR GOLD)"
2540 LINE INPUT "FOURTH COLOR ? ";C4$
2550 IF C4$="NONE"GOTO 2580
2560 IF C4$="SILVER"GOTO 2590
2570 IF C4$="GOLD"GOTO 2600
2580 M=.2*S:GOTO 2620
2590 M=9.999999E-02*S:GOTO 2620
2600 M=.05*S:GOTO 2620
2610 GOSUB 180:PRINT :GOTO 2310
2620 PRINT "THE RESISTOR TOLERANCE IS ";M
2630 PRINT "THE TOLERANCE RANGE IS ";S-M;" TO ";S+M;" OHMS":GOTO 2610
2640 PRINT "THIS PROGRAM WILL CALCULATE THE CHARACTERISTIC"
2650 PRINT "IMPEDANCE OF TRANSMISSION LINES"
2660 LINE INPUT "IS TRANSMISSION LINE TWO WIRE PARALLEL ? ";X$
2670 IF X$="YES" OR X$="yes" OR X$="y" GOTO 2710
2680 LINE INPUT "IS TRANSMISSION LINE A COAXIAL LINE ? ";X$
2690 IF X$="YES" OR X$="yes" OR X$="y" GOTO 2770
2700 PRINT :PRINT "TYPE 'YES' FOR ONE OF THE QUESTIONS":GOTO 2660
2710 PRINT :PRINT "PARALLEL TRANSMISSION LINE"
2720 INPUT "WHAT IS THE SPACING BETWEEN CONDUCTORS IN INCHES  ";A
2730 INPUT "WHAT IS THE RADIUS OF ONE CONDUCTOR IN INCHES  ";B
2740 Z=276*(LOG(A/B))*.434295
2750 PRINT :PRINT "THE IMPEDANCE IS ";Z;" OHMS"
2760 GOSUB 180:PRINT :GOTO 2660
2770 PRINT :PRINT "COAXIAL TRANSMISSION LINE"
2780 PRINT "WHAT IS THE INNER DIAMETER OF THE OUTER CONDUCTOR"
2790 INPUT "IN INCHES  ";A
2800 PRINT "WHAT IS THE OUTER DIAMETER OF THE INNER CONDUCTOR"
2810 INPUT "IN INCHES  ";B
2820 Z=138*(LOG(A/B))*.434295
2830 PRINT :PRINT "THE IMPEDANCE IS ";Z;" OHMS"
2840 GOSUB 180:PRINT :GOTO 2660
2850 END
```
{% endraw %}

## HAMHELP.BAS

{% raw %}
```bas
10 DIM N(100)
11 KEY OFF:CLS
20 PRINT "HANDY HAM PROGRAMS"
30 PRINT "WILLIS SOFTWARE SYSTEMS 1978"
40 PRINT "5192 CRYSTAL DRIVE CHARLESTON W. VA."
50 PRINT
60 PRINT 
70 PRINT "   1   OHMS LAW PROGRAM"
80 PRINT "   2   DESIGN DIPOLE ANTENNA"
90 PRINT "   3   DESIGN QUAD ANTENNA"
100 PRINT "   4   DESIGN BEAM ANTENNA"
110 PRINT "   5   CALCULATE PARALLEL RESISTANCES"
120 PRINT "   6   TO RETURN TO BASIC MONITER"
130 PRINT 
140 PRINT 
150 INPUT "ENTER NUMBER OF OPTION DESIRED AND PRESS RET KEY  ";O
160 IF O=0 THEN 20
170 IF O>6 THEN 20
180 ON O GOTO 210,970,1270,520,1710,190
190 PRINT
200 END
210 REM OHMS LAW
220 PRINT "ENTER E IN VOLTS, 0 IF UNKNOWN":PRINT
230 INPUT ;E : PRINT
240 PRINT "ENTER I IN AMPS, 0 IF UNKNOWN":PRINT
250 INPUT ;I : PRINT
260 PRINT "ENTER R IN OHMS, 0 IF UNKNOWN":PRINT
270 INPUT ;R : PRINT
280 IF E+I+R=0 GOTO 470
290 IF E=0 GOTO 330
300 IF I=0 GOTO 380
310 IF R=0 GOTO 430
320 GOTO 470
330 E=I*R
340 PRINT "E=";E
350 PRINT 
360 PRINT 
370 GOTO 470
380 I=E/R
390 PRINT "I=";I
400 PRINT 
410 PRINT 
420 GOTO 470
430 R=E/I
440 PRINT "R=";R
450 PRINT 
460 PRINT 
470 PRINT "DO YOU WANT TO DO ANOTHER Y OR N "
480 LINE INPUT ;R$
490 IF R$="Y" GOTO 210
500 GOTO 60
510 '
520 REM DESIGN BEAM ANTENNA
530 PRINT "    DESIGN VHF"
540 PRINT 
550 PRINT "   BEAM ANTENNA"
560 PRINT 
570 REM  
580 REM 
590 REM 
600 PRINT 
610 PRINT "     ENTER"
620 PRINT 
630 PRINT "FREQUENCY IN MHZ"
640 PRINT 
650 PRINT 
660 INPUT ;F
670 D=5600/F
680 A=D*0.05
690 R1=D+A
700 A1=D*0.05
710 D1=D-A1
720 A2=D1*0.02
730 D2=D1-A2
740 A3=D2*0.02
750 D3=D2-A3
760 S1=492/F*12*2*0.208
770 S2=492/F*12*2*0.15
780 S3=492/F*12*2*0.2
790 S4=492/F*12*2*0.256
800 REM 
810 PRINT "-----------------";"R1 IN.=";R1
820 PRINT "        !      ^ "
830 PRINT "        !      ^ ";"S1 IN.=";S1
840 PRINT "-----------------";"D  IN.=";D
850 PRINT "        !      ^ "
860 PRINT "        !      ^ ";"S2 IN.=";S2
870 PRINT "-----------------";"D1 IN.=";D1
880 PRINT "        !      ^ "
890 PRINT "        !      ^ ";"S3 IN.=";S3
900 PRINT "-----------------";"D2 IN.=";D2
910 PRINT "        !      ^ "
920 PRINT "        !      ^ ";"S4 IN.=";S4
930 PRINT "-----------------";"D3 IN.=";D3
940 LINE INPUT "DO YOU WANT TO DO ANOTHER YES OR NO";Y$
950 IF Y$="YES" THEN 520
960 GOTO 60
970 REM DESIGN DIPOLE ANTENNA
980 PRINT "    DESIGN"
990 PRINT "DIPOLE ANTENNA"
1000 PRINT 
1010 PRINT "    ENTER"
1020 PRINT "FREQUENCY IN MHZ."
1030 PRINT 
1040 PRINT 
1050 PRINT 
1060 PRINT 
1070 PRINT 
1080 PRINT 
1090 PRINT 
1100 PRINT 
1110 INPUT ;A
1120 PRINT 
1130 L=468/A/2
1140 PRINT "MHZ."
1150 PRINT "    DIPOLE"
1160 PRINT "CUT AS FIGURE"
1170 PRINT 
1180 PRINT 
1190 PRINT "O-------O-------O"
1200 PRINT "!<-'L'->!<-'L'->!"
1210 PRINT 
1220 PRINT "                 L=",L," FT"
1230 PRINT 
1240 LINE INPUT "DO YOU WANT TO DO ANOTHER YES OR NO ";Y$
1250 IF Y$="YES" THEN 970
1260 GOTO 60
1270 REM DESIGN QUAD ANTENNA
1280 PRINT "DESIGN QUAD ANTENNA"
1290 PRINT 
1300 PRINT "ENTER"
1310 PRINT 
1320 PRINT "FREQUENCY IN MHZ."
1330 PRINT 
1340 PRINT 
1350 PRINT 
1360 PRINT 
1370 PRINT 
1380 PRINT 
1390 PRINT 
1400 PRINT 
1410 INPUT F
1420 PRINT 
1430 PRINT 
1440 PRINT "ENTER"
1450 PRINT "ELEMENT SPACEING IN WAVE LENGTHS"
1460 INPUT A
1470 S=984/F*A
1480 D=246/F
1490 B=D*0.05
1500 R=B+D
1510 T=R*4
1520 L=D*4
1530 PRINT "DREVEN ELEMENT"
1540 PRINT "LENGTH EACH SIDE"
1550 PRINT D," FT. "
1560 PRINT "TOTAL LENGTH"
1570 PRINT L," FT. "
1580 PRINT "REFLECTOR ELEMENT"
1590 PRINT "LENGTH EACH SIDE"
1600 PRINT R," FT. "
1610 PRINT "TOTAL LENGTH"
1620 PRINT T," FT. "
1630 PRINT "ELEMENT SPACEING"
1640 PRINT S," FT. "
1650 PRINT "SPACING"
1660 PRINT "WAVE LENGTH =",A
1670 PRINT "FREQUENCY   =",F,"MHZ."
1680 LINE INPUT "DO YOU WANT TO DO ANOTHER YES OR NO ";Y$
1690 IF Y$="YES" THEN 1270
1700 GOTO 60
1710 CLS:PRINT "COMPUTE PARALLEL RESTANCES"
1720 PRINT 
1730 PRINT 
1740 PRINT "       1 TO 100 RESISTORS "
1750 PRINT 
1760 PRINT 
1770 PRINT 
1780 REM RESISTANCE PARALLEL
1790 FOR X=1 TO 100
1800 PRINT "ENTER R , 0 TO STOP"
1810 INPUT "R= ";N(X)
1820 IF N(X)=0 THEN 1840
1830 NEXT X
1840 PRINT "RESISTANCES ARE"
1850 R=0
1860 X=X-1
1870 FOR K=1 TO  X
1880 PRINT "RESISTANCE OF R",K," IS",N(K)," OHMS"
1890 R=R+1/N(K)
1900 NEXT K
1910 R=1/R
1920 PRINT "TOTAL RESISTANCE IS",R," OHMS"
1930 LINE INPUT "DO YOU WANT TO DO MORE YES OR NO ";Y$
1940 IF Y$ = "YES" OR Y$ = "Y" THEN 1710 ELSE 1700
1950 END
```
{% endraw %}

## HAMMODEM.BAS

{% raw %}
```bas
10 CLS : KEY OFF : FOR A = 1 TO 10 : KEY A,"" : NEXT : DEF SEG : POKE 106,0
20 PRINT : PRINT
30 OPEN "COM1:" AS 1
35 PRINT #1, "AT Z"
40 LOCATE 3,25 : COLOR 9,0 : PRINT "Hayes SMARTMODEM Demonstration"
50 COLOR 5,0
60 PRINT
70 PRINT
80 PRINT "     The Hayes Stack SMARTMODEM is designed to be used in amateur radio
90 PRINT "applications, as well as standard applications directly connected to a phone
100 PRINT "line.
110 PRINT
120 PRINT "     The modem (acronym for "; : COLOR 26,0 : PRINT "MOD";:COLOR 5,0 : PRINT"ULATOR/";:COLOR 26,0 : PRINT"DEM";:COLOR 5,0 : PRINT"ODULATOR) can key a transmitter,"
130 PRINT "access a repeater or remote base with DTMF touch tones, give station"
140 PRINT "I.D. in Morse Code, send ASCII data at up to 300 BAUD (bits per second),"
150 PRINT "then unkey the transmitter and wait to receive ASCII from the distant"
160 PRINT "computer or terminal."
165 PRINT
170 PRINT "     Since this can all be done under program control, and since it can"
180 PRINT "be controlled by external sources, such as status of a device on an"
190 PRINT "input port, time of day, etc..., the controlling computer can be totally"
200 PRINT "unattended."
202 PRINT
204 PRINT     "Make sure SMARTMODEM is unplugged from phone line..."
210 LOCATE 25,14 : PRINT "Press space bar for demonstration or <Esc> to end";
215 A$ = INKEY$ : IF A$ = "" THEN 215
220 IF ASC(A$) = 27 THEN CHAIN "MENUB.BAS"
230 IF ASC(A$) = 32 THEN 250
240 SOUND 37,5 : GOTO 215
250 CLS : FOR A = 1 TO 2500 : NEXT
255 GOSUB 1000
260 LOCATE 4,30 : COLOR 26,0 : PRINT"Key transmitter...";
270 COLOR 5,0 : LOCATE 5,25 : PRINT "(denoted by 'OH' LED on modem)"
280 PRINT #1, "AT S10=255M2D;"
290 FOR A = 1 TO 5000 : NEXT
300 GOSUB 1000 : LOCATE 10,23: COLOR 26,0 : PRINT "Access Repeater or Remote Base..."
310 PRINT #1, "AT S11=255DT783;" : FOR A = 1 TO 3500 : NEXT : PRINT #1,"AT S11=40DT3591828*##;"
320 FOR A = 1 TO 5000 : NEXT
330 GOSUB 1000 : LOCATE 15,26 : PRINT "Identify Station/Repeater..."
340 PRINT #1, "AT RC1.--/.-/--.../.---/-../-..-/;"
350 FOR A = 1 TO 8000 : NEXT
360 GOSUB 1000 : LOCATE 20,32 : PRINT "Transmit Data..."
370 PRINT #1, "AT R C1 H2 D": FOR A = 1 TO 2500 : NEXT : PRINT #1, "This is a test of the Communications Port. This is sent at 300 Baud, ASCII, over an amateur radio transmitter.  It will then unkey the transmitter and wait for a return carrier and signa
380 FOR A = 1 TO 6500 : NEXT : PRINT #1, "+++"; : FOR A = 1 TO 2500 : NEXT : PRINT #1, "AT H"
390 GOSUB 1000 : FOR A = 1 TO 250 : NEXT : GOSUB 1000 : FOR A = 1 TO 250 : NEXT : GOSUB 1000
400 LOCATE 25,25 : COLOR 8,7 : PRINT "Press space bar to continue...";: COLOR 5,0
410 A$ = INKEY$ : IF A$ = "" THEN 410
420 IF ASC(A$) =32 THEN CLOSE : RUN
430 SOUND 37,5 : GOTO 410
1000 PLAY "T50L48MNAMSAA"
1010 RETURN
```
{% endraw %}

## LISTCOUN.TXT

{% raw %}
```

AK ALEUTIAN ISLANDS
   ANCHORAGE
   BARROW
   BETHEL
   BRISTOL BAY
   CARDOVA-MCCARTHY
   FAIRBANKS
   JUNEAU
   KENAI-COOK INLET
   KETCHIKAN
   KOBUK
   KODIAK
   KUSKOKWIM
   LYNN CANAL-ICY STRAITS
   NOME
   PALMER WASILLA TALKEETNA
   PRINCE OF WALES
   SEWARD
   SITKA
   UPPER YUKON
   VALDEZ CHITINA WHITTIER
   WADE HAMPTON
   WRANGELL-PETERSBURG
   YUKON-KOYUKUK
 

AL AUTAUGA
   BALDWIN
   BARBOUR
   BIBB
   BLOUNT
   BULLOCK
   BUTLER
   CALHOUN
   CHAMBERS
   CHEROKEE
   CHILTON
   CHOCTAW
   CLARKE
   CLAY
   CLEBURNE
   COFFEE
   COLBERT
   CONECUH
   COOSA
   COVINGTON
   CRENSHAW
   CULLMAN
   DALE
   DALLAS
   DE KALB
   ELMORE
   ESCAMBIA
   ETOWAH
   FAYETTE
   FRANKLIN
   GENEVA
   GREENE
   HALE
   HENRY
   HOUSTON
   JACKSON
   JEFFERSON
   LAMAR
   LAUDERDALE
   LAWRENCE
   LEE
   LIMESTONE
   LOWNDES
   MACON
   MADISON
   MARENGO
   MARION
   MARSHALL
   MOBILE
   MONROE
   MONTGOMERY
   MORGAN
   PERRY
   PICKENS
   PIKE
   RANDOLPH
   RUSSELL
   SHELBY
   ST CLAIR
   SUMTER
   TALLADEGA
   TALLAPOOSA
   TUSCALOOSA
   WALKER
   WASHINGTON
   WILCOX
   WINSTON


AR ARKANSAS
   ASHLEY
   BAXTER
   BENTON
   BOONE
   BRADLEY
   CALHOUN
   CARROLL
   CHICOT
   CLARK
   CLAY
   CLEBURNE
   CLEVELAND
   COLUMBIA
   CONWAY
   CRAIGHEAD
   CRAWFORD
   CRITTENDEN
   CROSS
   DALLAS
   DESHA
   DREW
   FAULKNER
   FRANKLIN
   FULTON
   GARLAND
   GRANT
   GREENE
   HEMPSTEAD
   HOT SPRING
   HOWARD
   INDEPENDENCE
   IZARD
   JACKSON
   JEFFERSON
   JOHNSON
   LAFAYETTE
   LAWRENCE
   LEE
   LINCOLN
   LITTLE RIVER
   LOGAN
   LONOKE
   MADISON
   MARION
   MILLER
   MISSISSIPPI
   MONROE
   MONTGOMERY
   NEVADA
   NEWTON
   OUACHITA
   PERRY
   PHILLIPS
   PIKE
   POINSETT
   POLK
   POPE
   PRAIRIE
   PULASKI
   RANDOLPH
   SALINE
   SCOTT
   SEARCY
   SEBASTIAN
   SEVIER
   SHARP
   ST FRANCIS
   STONE
   UNION
   VAN BUREN
   WASHINGTON
   WHITE
   WOODRUFF
   YELL
 

AZ APACHE
   COCHISE
   COCONINO
   GILA
   GRAHAM
   GREENLEE
   MARICOPA
   MOHAVE
   NAVAJO
   PIMA
   PINAL
   SANTA CRUZ
   YAVAPAI
   YUMA
 

CA ALAMEDA
   ALPINE
   AMADOR
   BUTTE
   CALAVERAS
   COLUSA
   CONTRA COSTA
   DEL NORTE
   EL DORADO
   FRESNO
   GLENN
   HUMBOLDT
   IMPERIAL
   INYO
   KERN
   KINGS
   LAKE
   LASSEN
   LOS ANGELES
   MADERA
   MARIN
   MARIPOSA
   MENDOCINO
   MERCED
   MODOC
   MONO
   MONTEREY
   NAPA
   NEVADA
   ORANGE
   PLACER
   PLUMAS
   RIVERSIDE
   SACRAMENTO
   SAN BENITO
   SAN BERNARDINO
   SAN DIEGO
   SAN FRANCISCO
   SAN JOAQUIN
   SAN LUIS OBISPO
   SAN MATEO
   SANTA BARBARA
   SANTA CLARA
   SANTA CRUZ
   SHASTA
   SIERRA
   SISKIYOU
   SOLANO
   SONOMA
   STANISLAUS
   SUTTER
   TEHAMA
   TRINITY
   TULARE
   TUOLUMNE
   VENTURA
   YOLO
   YUBA
 

CO ADAMS
   ALAMOSA
   ARAPAHOE
   ARCHULETA
   BACA
   BENT
   BOULDER
   CHAFFEE
   CHEYENNE
   CLEAR CREEK
   CONEJOS
   COSTILLA
   CROWLEY
   CUSTER
   DELTA
   DENVER
   DOLORES
   DOUGLAS
   EAGLE
   EL PASO
   ELBERT
   FREMONT
   GARFIELD
   GILPIN
   GRAND
   GUNNISON
   HINSDALE
   HUERFANO
   JACKSON
   JEFFERSON
   KIOWA
   KIT CARSON
   LA PLATA
   LAKE
   LARIMER
   LAS ANIMAS
   LINCOLN
   LOGAN
   MESA
   MINERAL
   MOFFAT
   MONTEZUMA
   MONTROSE
   MORGAN
   OTERO
   OURAY
   PARK
   PHILLIPS
   PITKIN
   PROWERS
   PUEBLO
   RIO BLANCO
   ROI GRANDE
   ROUTT
   SAGUACHE
   SAN JUAN
   SAN MIGUEL
   SEDGWICK
   SUMMIT
   TELLER
   WASHINGTON
   WELD
   YUMA
 

CT FAIRFIELD
   HARTFORD
   LITCHFIELD
   MIDDLESEX
   NEW HAVEN
   NEW LONDON
   TOLLAND
   WINDHAM
 

DE KENT
   NEW CASTLE
   SUSSEX
 

FL ALACHUA
   BAKER
   BAY
   BRADFORD
   BREVARD
   BROWARD
   CALHOUN
   CHARLOTTE
   CITRUS
   CLAY
   COLLIER
   COLUMBIA
   DADE
   DE SOTO
   DIXIE
   DUVAL
   ESCAMBIA
   FLAGLER
   FRANKLIN
   GADSDEN
   GILCHRIST
   GLADES
   GULF
   HAMILTON
   HARDEE
   HENDRY
   HERNANDO
   HIGHLANDS
   HILLSBOROUGH
   HOLMES
   INDIAN RIVER
   JACKSON
   JEFFERSON
   LAFAYETTE
   LAKE
   LEE
   LEON
   LEVY
   LIBERTY
   MADISON
   MANATEE
   MARION
   MARTIN
   MONROE
   NASSAU
   OKALOOSA
   OKEECHOBEE
   ORANGE
   OSCEOLA
   PALM BEACH
   PASCO
   PINELLAS
   POLK
   PUTNAM
   SANTA ROSA
   SARASOTA
   SEMINOLE
   ST JOHNS
   ST LUCIE
   SUMTER
   SUWANNEE
   TAYLOR
   UNION
   VOLUSIA
   WAKULLA
   WALTON
   WASHINGTON
 

GA APPLING
   ATKINSON
   BACON
   BAKER
   BALDWIN
   BANKS
   BARROW
   BARTOW
   BEN HILL
   BERRIEN
   BIBB
   BLECKLEY
   BRANTLEY
   BROOKS
   BRYAN
   BULLOCH
   BURKE
   BUTTS
   CALHOUN
   CAMDEN
   CANDLER
   CARROLL
   CATOOSA
   CHARLTON
   CHATHAM
   CHATTAHOOCHEE
   CHATTOOGA
   CHEROKEE
   CLARKE
   CLAY
   CLAYTON
   CLINCH
   COBB
   COFFEE
   COLQUITT
   COLUMBIA
   COOK
   COWETA
   CRAWFORD
   CRISP
   DADE
   DAWSON
   DE KALB
   DECATUR
   DODGE
   DOOLY
   DOUGHERTY
   DOUGLAS
   EARLY
   ECHOLS
   EFFINGHAM
   ELBERT
   EMANUEL
   EVANS
   FANNIN
   FAYETTE
   FLOYD
   FORSYTH
   FRANKLIN
   FULTON
   GILMER
   GLASCOCK
   GLYNN
   GORDON
   GRADY
   GREENE
   GWINNETT
   HABERSHAM
   HALL
   HANCOCK
   HARALSON
   HARRIS
   HART
   HEARD
   HENRY
   HOUSTON
   IRWIN
   JACKSON
   JASPER
   JEFF DAVIS
   JEFFERSON
   JENKINS
   JOHNSON
   JONES
   LAMAR
   LANIER
   LAURENS
   LEE
   LIBERTY
   LINCOLN
   LONG
   LOWNDES
   LUMPKIN
   MACON
   MADISON
   MARION
   MCDUFFIE
   MCINTOSH
   MERIWETHER
   MILLER
   MITCHELL
   MONROE
   MONTGOMERY
   MORGAN
   MURRAY
   MUSCOGEE
   NEWTON
   OCONEE
   OGLETHORPE
   PAULDING
   PEACH
   PICKENS
   PIERCE
   PIKE
   POLK
   PULASKI
   PUTNAM
   QUITMAN
   RABUN
   RANDOLPH
   RICHMOND
   ROCKDALE
   SCHLEY
   SCREVEN
   SEMINOLE
   SPALDING
   STEPHENS
   STEWART
   SUMTER
   TALBOT
   TALIAFERRO
   TATTNALL
   TAYLOR
   TELFAIR
   TERRELL
   THOMAS
   TIFT
   TOOMBS
   TOWNS
   TREUTIEN
   TROUP
   TURNER
   TWIGGS
   UNION
   UPSON
   WALKER
   WALTON
   WARE
   WARREN
   WASHINGTON
   WAYNE
   WEBSTER
   WHEELER
   WHITE
   WHITFIELD
   WILCOX
   WILKES
   WILKINSON
   WORTH
 

HI HAWAII
   HONOLULU
   KALAWAO
   KAUAI
   MAUI
 

IA ADAIR
   ADAMS
   ALLAMAKEE
   APPANOOSE
   AUDUBON
   BENTON
   BLACK HAWK
   BOONE
   BREMER
   BUCHANAN
   BUENA VISTA
   BUTLER
   CALHOUN
   CARROLL
   CASS
   CEDAR
   CERRO GORDO
   CHEROKEE
   CHICKASAW
   CLARKE
   CLAY
   CLAYTON
   CLINTON
   CRAWFORD
   DALLAS
   DAVIS
   DECATUR
   DELAWARE
   DES MOINES
   DICKINSON
   DUBUQUE
   EMMET
   FAYETTE
   FLOYD
   FRANKLIN
   FREMONT
   GREENE
   GRUNDY
   GUTHRIE
   HAMILTON
   HANCOCK
   HARDIN
   HARRISON
   HENRY
   HOWARD
   HUMBOLDT
   IDA
   IOWA
   JACKSON
   JASPER
   JEFFERSON
   JOHNSON
   JONES
   KEOKUK
   KOSSUTH
   LEE
   LINN
   LOUISA
   LUCAS
   LYON
   MADISON
   MAHASKA
   MARION
   MARSHALL
   MILLS
   MITCHELL
   MONONA
   MONROE
   MONTGOMERY
   MUSCATINE
   OBRIEN
   OSCEOLA
   PAGE
   PALO ALTO
   PLYMOUTH
   POCAHONTAS
   POLK
   POTTAWATTAMIE
   POWESHIEK
   RINGGOLD
   SAC
   SCOTT
   SHELBY
   SIOUX
   STORY
   TAMA
   TAYLOR
   UNION
   VAN BUREN
   WAPELLO
   WARREN
   WASHINGTON
   WAYNE
   WEBSTER
   WINNEBAGO
   WINNESHIEK
   WOODBURY
   WORTH
   WRIGHT
 

ID ADA
   ADAMS
   BANNOCK
   BEAR LAKE
   BENEWAH
   BINGHAM
   BLAINE
   BOISE
   BONNER
   BONNEVILLE
   BOUNDARY
   BUTTE
   CAMAS
   CANYON
   CARIBOU
   CASSIA
   CLARK
   CLEARWATER
   CUSTER
   ELMORE
   FRANKLIN
   FREMONT
   GEM
   GOODING
   IDAHO
   JEFFERSON
   JEROME
   KOOTENAI
   LATAH
   LEMHI
   LEWIS
   LINCOLN
   MADISON
   MINIDOKA
   NEZ PERCE
   ONEIDA
   OWYHEE
   PAYETTE
   POWER
   SHOSHONE
   TETON
   TWIN FALLS
   VALLEY
   WASHINGTON
 

IL ADAMS
   ALEXANDER
   BOND
   BOONE
   BROWN
   BUREAU
   CALHOUN
   CARROLL
   CASS
   CHAMPAIGN
   CHRISTIAN
   CLARK
   CLAY
   CLINTON
   COLES
   COOK
   CRAWFORD
   CUMBERLAND
   DE KALB
   DE WITT
   DOUGLAS
   DU PAGE
   EDGAR
   EDWARDS
   EFFINGHAM
   FAYETTE
   FORD
   FRANKLIN
   FULTON
   GALLATIN
   GREENE
   GRUNDY
   HAMILTON
   HANCOCK
   HARDIN
   HENDERSON
   HENRY
   IROQUOIS
   JACKSON
   JASPER
   JEFFERSON
   JERSEY
   JO DAVIESS
   JOHNSON
   KANE
   KANKAKEE
   KENDALL
   KNOX
   LA SALLE
   LAKE
   LAWRENCE
   LEE
   LIVINGSTON
   LOGAN
   MACON
   MACOUPIN
   MADISON
   MARION
   MARSHALL
   MASON
   MASSAC
   MCDONOUGH
   MCHENRY
   MCLEAN
   MENARD
   MERCER
   MONROE
   MONTGOMERY
   MORGAN
   MOULTRIE
   OGLE
   PEORIA
   PERRY
   PIATT
   PIKE
   POPE
   PULASKI
   PUTNAM
   RANDOLPH
   RICHLAND
   ROCK ISLAND
   SALINE
   SANGAMON
   SCHUYLER
   SCOTT
   SHELBY
   ST CLAIR
   STARK
   STEPHENSON
   TAZEWELL
   UNION
   VERMILION
   WABASH
   WARREN
   WASHINGTON
   WAYNE
   WHITE
   WHITESIDE
   WILL
   WILLIAMSON
   WINNEBAGO
   WOODFORD
 

IN ADAMS
   ALLEN
   BARTHOLOMEW
   BENTON
   BLACKFORD
   BOONE
   BROWN
   CARROLL
   CASS
   CLARK
   CLAY
   CLINTON
   CRAWFORD
   DAVIESS
   DE KALB
   DEARBORN
   DECATUR
   DELAWARE
   DUBOIS
   ELKHART
   FAYETTE
   FLOYD
   FOUNTAIN
   FRANKLIN
   FULTON
   GIBSON
   GRANT
   GREENE
   HAMILTON
   HANCOCK
   HARRISON
   HENDRICKS
   HENRY
   HOWARD
   HUNTINGTON
   JACKSON
   JASPER
   JAY
   JEFFERSON
   JENNINGS
   JOHNSON
   KNOX
   KOSCIUSKO
   LAGRANGE
   LAKE
   LAPORTE
   LAWRENCE
   MADISON
   MARION
   MARSHALL
   MARTIN
   MIAMI
   MONROE
   MONTGOMERY
   MORGAN
   NEWTON
   NOBLE
   OHIO
   ORANGE
   OWEN
   PARKE
   PERRY
   PIKE
   PORTER
   POSEY
   PULASKI
   PUTNAM
   RANDOLPH
   RIPLEY
   RUSH
   SCOTT
   SHELBY
   SPENCER
   ST JOSEPH
   STARKE
   STEUBEN
   SULLIVAN
   SWITZERLAND
   TIPPECANOE
   TIPTON
   UNION
   VANDERBURGH
   VERMILLION
   VIGO
   WABASH
   WARREN
   WARRICK
   WASHINGTON
   WAYNE
   WELLS
   WHITE
   WHITLEY
 

KS ALLEN
   ANDERSON
   ATCHISON
   BARBER
   BARTON
   BOURBON
   BROWN
   BUTLER
   CHASE
   CHAUTAUQUA
   CHEROKEE
   CHEYENNE
   CLARK
   CLAY
   CLOUD
   COFFEY
   COMANCHE
   COWLEY
   CRAWFORD
   DECATUR
   DICKINSON
   DONIPHAN
   DOUGLAS
   EDWARDS
   ELK
   ELLIS
   ELLSWORTH
   FINNEY
   FORD
   FRANKLIN
   GEARY
   GOVE
   GRAHAM
   GRANT
   GRAY
   GREELEY
   GREENWOOD
   HAMILTON
   HARPER
   HARVEY
   HASKELL
   HODGEMAN
   JACKSON
   JEFFERSON
   JEWELL
   JOHNSON
   KEARNY
   KINGMAN
   KIOWA
   LABETTE
   LANE
   LEAVENWORTH
   LINCOLN
   LINN
   LOGAN
   LYON
   MARION
   MARSHALL
   MCPHERSON
   MEADE
   MIAMI
   MITCHELL
   MONTGOMERY
   MORRIS
   MORTON
   NEMAHA
   NEOSHO
   NESS
   NORTON
   OSAGE
   OSBORNE
   OTTAWA
   PAWNEE
   PHILLIPS
   POTTAWATOMIE
   PRATT
   RAWLINS
   RENO
   REPUBLIC
   RICE
   RILEY
   ROOKS
   RUSH
   RUSSELL
   SALINE
   SCOTT
   SEDGWICK
   SEWARD
   SHAWNEE
   SHERIDAN
   SHERMAN
   SMITH
   STAFFORD
   STANTON
   STEVENS
   SUMNER
   THOMAS
   TREGO
   WABAUNSEE
   WALLACE
   WASHINGTON
   WICHITA
   WILSON
   WOODSON
   WYANDOTTE
 

KY ADAIR
   ALLEN
   ANDERSON
   BALLARD
   BARREN
   BATH
   BELL
   BOONE
   BOURBON
   BOYD
   BOYLE
   BRACKEN
   BREATHITT
   BRECKINRIDGE
   BULLITT
   BUTLER
   CALDWELL
   CALLOWAY
   CAMPBELL
   CARLISLE
   CARROLL
   CARTER
   CASEY
   CHRISTIAN
   CLARK
   CLAY
   CLINTON
   CRITTENDEN
   CUMBERLAND
   DAVIESS
   EDMONSON
   ELLIOTT
   ESTILL
   FAYETTE
   FLEMING
   FLOYD
   FRANKLIN
   FULTON
   GALLATIN
   GARRARD
   GRANT
   GRAVES
   GRAYSON
   GREEN
   GREENUP
   HANCOCK
   HARDIN
   HARLAN
   HARRISON
   HART
   HENDERSON
   HENRY
   HICKMAN
   HOPKINS
   JACKSON
   JEFFERSON
   JESSAMINE
   JOHNSON
   KENTON
   KNOTT
   KNOX
   LARUE
   LAUREL
   LAWRENCE
   LEE
   LESLIE
   LETCHER
   LEWIS
   LINCOLN
   LIVINGSTON
   LOGAN
   LYON
   MADISON
   MAGOFFIN
   MARION
   MARSHALL
   MARTIN
   MASON
   MCCRACKEN
   MCCREARY
   MCLEAN
   MEADE
   MENIFEE
   MERCER
   METCALFE
   MONROE
   MONTGOMERY
   MORGAN
   MUHLENBERG
   NELSON
   NICHOLAS
   OHIO
   OLDHAM
   OWEN
   OWSLEY
   PENDLETON
   PERRY
   PIKE
   POWELL
   PULASKI
   ROBERTSON
   ROCKCASTLE
   ROWAN
   RUSSELL
   SCOTT
   SHELBY
   SIMPSON
   SPENCER
   TAYLOR
   TODD
   TRIGG
   TRIMBLE
   UNION
   WARREN
   WASHINGTON
   WAYNE
   WEBSTER
   WHITLEY
   WOLFE
   WOODFORD
 

LA ACADIA
   ALLEN
   ASCENSION
   ASSUMPTION
   AVOYELLES
   BEAUREGARD
   BIENVILLE
   BOSSIER
   CADDO
   CALCASIEU
   CALDWELL
   CAMERON
   CATAHOULA
   CLAIBORNE
   CONCORDIA
   DE SOTO
   EAST BATON ROUGE
   EAST CARROLL
   EAST FELICIANA
   EVANGELINE
   FRANKLIN
   GRANT
   IBERIA
   IBERVILLE
   JACKSON
   JEFFERSON
   JEFFERSON DAVIS
   LA SALLE
   LAFAYETTE
   LAFOURCHE
   LINCOLN
   LIVINGSTON
   MADISON
   MOREHOUSE
   NATCHITOCHES
   ORLEANS
   OUACHITA
   PLAQUEMINES
   POINTE COUPEE
   RAPIDES
   RED RIVER
   RICHLAND
   SABINE
   ST BERNARD
   ST CHARLES
   ST HELENA
   ST JAMES
   ST JOHN THE BAPTIST
   ST LANDRY
   ST MARTIN
   ST MARY
   ST TAMMANY
   TANGIPAHOA
   TENSAS
   TERREBONNE
   UNION
   VERMILION
   VERNON
   WASHINGTON
   WEBSTER
   WEST BATON ROUGE
   WEST CARROLL
   WEST FELICIANA
   WINN
 

MA BARNSTABLE
   BERKSHIRE
   BRISTOL
   DUKES
   ESSEX
   FRANKLIN
   HAMPDEN
   HAMPSHIRE
   MIDDLESEX
   NANTUCKET
   NORFOLK
   PLYMOUTH
   SUFFOLK
   WORCESTER
 

MD ALLEGANY
   ANNE ARUNDEL
   BALTIMORE
   BALTIMORE CITY
   CALVERT
   CAROLINE
   CARROLL
   CECIL
   CHARLES
   DORCHESTER
   FREDERICK
   GARRETT
   HARFORD
   HOWARD
   KENT
   MONTGOMERY
   PRINCE GEORGES
   QUEEN ANNES
   SOMERSET
   ST MARYS
   TALBOT
   WASHINGTON
   WICOMICO
   WORCHESTER
 

ME ANDROSCOGGIN
   AROOSTOOK
   CUMBERLAND
   FRANKLIN
   HANCOCK
   KENNEBEC
   KNOX
   LINCOLN
   OXFORD
   PENOBSCOT
   PISCATAQUIS
   SAGADAHOC
   SOMERSET
   WALDO
   WASHINGTON
   YORK
 

MI ALCONA
   ALGER
   ALLEGAN
   ALPENA
   ANTRIM
   ARENAC
   BARAGA
   BARRY
   BAY
   BENZIE
   BERRIEN
   BRANCH
   CALHOUN
   CASS
   CHARLEVOIX
   CHEBOYGAN
   CHIPPEWA
   CLARE
   CLINTON
   CRAWFORD
   DELTA
   DICKINSON
   EATON
   EMMET
   GENESEE
   GLADWIN
   GOGEBIC
   GRAND TRAVERSE
   GRATIOT
   HILLSDALE
   HOUGHTON
   HURON
   INGHAM
   IONIA
   IOSCO
   IRON
   ISABELLA
   JACKSON
   KALAMAZOO
   KALKASKA
   KENT
   KEWEENAW
   LAKE
   LAPEER
   LEELANAU
   LENAWEE
   LIVINGSTON
   LUCE
   MACKINAC
   MACOMB
   MANISTEE
   MARQUETTE
   MASON
   MECOSTA
   MENOMINEE
   MIDLAND
   MISSAUKEE
   MONROE
   MONTCALM
   MONTMORENCY
   MUSKEGON
   NEWAYGO
   OAKLAND
   OCEANA
   OGEMAW
   ONTONAGON
   OSCEOLA
   OSCODA
   OTSEGO
   OTTAWA
   PRESQUE ISLE
   ROSCOMMON
   SAGINAW
   SANILAC
   SCHOOLCRAFT
   SHIAWASSEE
   ST CLAIR
   ST JOSEPH
   TUSCOLA
   VAN BUREN
   WASHTENAW
   WAYNE
   WEXFORD
 

MN AITKIN
   ANOKA
   BECKER
   BELTRAMI
   BENTON
   BIG STONE
   BLUE EARTH
   BROWN
   CARLTON
   CARVER
   CASS
   CHIPPEWA
   CHISAGO
   CLAY
   CLEARWATER
   COOK
   COTTONWOOD
   CROW WING
   DAKOTA
   DODGE
   DOUGLAS
   FARIBAULT
   FILLMORE
   FREEBORN
   GOODHUE
   GRANT
   HENNEPIN
   HOUSTON
   HUBBARD
   ISANTI
   ITASCA
   JACKSON
   KANABEC
   KANDIYOHI
   KITTSON
   KOOCHICHING
   LAC QUI PARLE
   LAKE
   LAKE OF THE WOODS
   LE SUEUR
   LINCOLN
   LYON
   MAHNOMEN
   MARSHALL
   MARTIN
   MCLEOD
   MEEKER
   MILLE LACS
   MORRISON
   MOWER
   MURRAY
   NICOLLET
   NOBLES
   NORMAN
   OLMSTED
   OTTER TAIL
   PENNINGTON
   PINE
   PIPESTONE
   POLK
   POPE
   RAMSEY
   RED LAKE
   REDWOOD
   RENVILLE
   RICE
   ROCK
   ROSEAU
   SCOTT
   SHERBURNE
   SIBLEY
   ST LOUIS
   STEARNS
   STEELE
   STEVENS
   SWIFT
   TODD
   TRAVERSE
   WABASHA
   WADENA
   WASECA
   WASHINGTON
   WATONWAN
   WILKIN
   WINONA
   WRIGHT
   YELLOW MEDICINE
 

MO ADAIR
   ANDREW
   ATCHISON
   AUDRAIN
   BARRY
   BARTON
   BATES
   BENTON
   BOLLINGER
   BOONE
   BUCHANAN
   BUTLER
   CALDWELL
   CALLAWAY
   CAMDEN
   CAPE GIRARDEAU
   CARROLL
   CARTER
   CASS
   CEDAR
   CHARLTON
   CHRISTIAN
   CLARK
   CLAY
   CLINTON
   COLE
   COOPER
   CRAWFORD
   DADE
   DALLAS
   DAVIESS
   DE KALB
   DENT
   DOUGLAS
   DUNKLIN
   FRANKLIN
   GASCONADE
   GENTRY
   GREENE
   GRUNDY
   HARRISON
   HENRY
   HICKORY
   HOLT
   HOWARD
   HOWELL
   IRON
   JACKSON
   JASPER
   JEFFERSON
   JOHNSON
   KNOX
   LACLEDE
   LAFAYETTE
   LAWRENCE
   LEWIS
   LINCOLN
   LINN
   LIVINGSTON
   MACON
   MADISON
   MARION
   MARLES
   MCDONALD
   MERCER
   MILLER
   MISSISSIPPI
   MONITEAU
   MONROE
   MONTGOMERY
   MORGAN
   NEW MADRID
   NEWTON
   NODAWAY
   OREGON
   OSAGE
   OZARK
   PEMISCOT
   PERRY
   PETTIS
   PHELPS
   PIKE
   PLATTE
   POLK
   PULASKI
   PUTNAM
   RALLS
   RANDOLPH
   RAY
   REYNOLDS
   RIPLEY
   SALINE
   SCHUYLER
   SCOTLAND
   SCOTT
   SHANNON
   SHELBY
   ST CHARLES
   ST CLAIR
   ST FRANCOIS
   ST GENEVIEVE
   ST LOUIS
   ST LOUIS CITY
   STODDARD
   STONE
   SULLIVAN
   TANEY
   TEXAS
   VERNON
   WARREN
   WASHINGTON
   WAYNE
   WEBSTER
   WORTH
   WRIGHT
 

MS ADAMS
   ALCORN
   AMITE
   ATTALA
   BENTON
   BOLIVAR
   CALHOUN
   CARROLL
   CHICKASAW
   CHOCTAW
   CLAIBORNE
   CLARKE
   CLAY
   COAHOMA
   COPIAH
   COVINGTON
   DE SOTO
   FORREST
   FRANKLIN
   GEORGE
   GREENE
   GRENADA
   HANCOCK
   HARRISON
   HINDS
   HOLMES
   HUMPHREYS
   ISSAQUENA
   ITAWAMBA
   JACKSON
   JASPER
   JEFFERSON
   JEFFERSON DAVIS
   JONES
   KEMPER
   LAFAYETTE
   LAMAR
   LAUDERDALE
   LAWRENCE
   LEAKE
   LEE
   LEFLORE
   LINCOLN
   LOWNDES
   MADISON
   MARION
   MARSHALL
   MONROE
   MONTGOMERY
   NESHOBA
   NEWTON
   NOXUBEE
   OKTIBBEHA
   PANOLA
   PEARL RIVER
   PERRY
   PIKE
   PONTOTOC
   PRENTISS
   QUITMAN
   RANKIN
   SCOTT
   SHARKEY
   SIMPSON
   SMITH
   STONE
   SUNFLOWER
   TALLAHATCHIE
   TATE
   TIPPAH
   TISHOMINGO
   TUNICA
   UNION
   WALTHALL
   WARREN
   WASHINGTON
   WAYNE
   WEBSTER
   WILKINSON
   WINSTON
   YALOBUSHA
   YAZOO
 

MT BEAVERHEAD
   BIG HORN
   BLAINE
   BROADWATER
   CARBON
   CARTER
   CASCADE
   CHOUTEAU
   CUSTER
   DANIELS
   DAWSON
   DEER LODGE
   FALLON
   FERGUS
   FLATHEAD
   GALLATIN
   GARFIELD
   GLACIER
   GOLDEN VALLEY
   GRANITE
   HILL
   JEFFERSON
   JUDITH BASIN
   LAKE
   LEWIS AND CLARK
   LIBERTY
   LINCOLN
   MADISON
   MCCONE
   MEAGHER
   MINERAL
   MISSOULA
   MUSSELSHELL
   PARK
   PETROLEUM
   PHILLIPS
   PONDERA
   POWDER RIVER
   POWELL
   PRAIRIE
   RAVALLI
   RICHLAND
   ROOSEVELT
   ROSEBUD
   SANDERS
   SHERIDAN
   SILVER BOW
   STILLWATER
   SWEET GRASS
   TETON
   TOOLE
   TREASURE
   VALLEY
   WHEATLAND
   WIBAUX
   YELLOWSTONE
 

NC ALAMANCE
   ALEXANDER
   ALLEGHANY
   ANSON
   ASHE
   AVERY
   BEAUFORT
   BERTIE
   BLADEN
   BRUNSWICK
   BUNCOMBE
   BURKE
   CABARRUS
   CALDWELL
   CAMDEN
   CARTERET
   CASWELL
   CATAWBA
   CHATHAM
   CHEROKEE
   CHOWAN
   CLAY
   CLEVELAND
   COLUMBUS
   CRAVEN
   CUMBERLAND
   CURRITUCK
   DARE
   DAVIDSON
   DAVIE
   DUPLIN
   DURHAM
   EDGECOMBE
   FORSYTH
   FRANKLIN
   GASTON
   GATES
   GRAHAM
   GRANVILLE
   GREENE
   GUILFORD
   HALIFAX
   HARNETT
   HAYWOOD
   HENDERSON
   HERTFORD
   HOKE
   HYDE
   IREDELL
   JACKSON
   JOHNSTON
   JONES
   LEE
   LENOIR
   LINCOLN
   MACON
   MADISON
   MARTIN
   MCDOWELL
   MECKLENBURG
   MITCHELL
   MONTGOMERY
   MOORE
   NASH
   NEW HANOVER
   NORTHAMPTON
   ONSLOW
   ORANGE
   PAMLICO
   PASQUOTANK
   PENDER
   PERQUIMANS
   PERSON
   PITT
   POLK
   RANDOLPH
   RICHMOND
   ROBESON
   ROCKINGHAM
   ROWAN
   RUTHERFORD
   SAMPSON
   SCOTLAND
   STANLY
   STOKES
   SURRY
   SWAIN
   TRANSYLVANIA
   TYRRELL
   UNION
   VANCE
   WAKE
   WARREN
   WASHINGTON
   WATAUGA
   WAYNE
   WILKES
   WILSON
   YADKIN
   YANCEY
 

ND ADAMS
   BARNES
   BENSON
   BILLINGS
   BOTTINEAU
   BOWMAN
   BURKE
   BURLEIGH
   CASS
   CAVALIER
   DICKEY
   DIVIDE
   DUNN
   EDDY
   EMMONS
   FOSTER
   GOLDEN VALLEY
   GRAND FORKS
   GRANT
   GRIGGS
   HETTINGER
   KIDDER
   LA MOURE
   LOGAN
   MCHENRY
   MCINTOSH
   MCKENZIE
   MCLEAN
   MERCER
   MORTON
   MOUNTRAIL
   NELSON
   OLIVER
   PEMBINA
   PIERCE
   RAMSEY
   RANSOM
   RENVILLE
   RICHLAND
   ROLETTE
   SARGENT
   SHERIDAN
   SIOUX
   SLOPE
   STARK
   STEELE
   STUTSMAN
   TOWNER
   TRAILL
   WALSH
   WARD
   WELLS
   WILLIAMS
 

NE ADAMS
   ANTELOPE
   ARTHUR
   BANNER
   BLAINE
   BOONE
   BOX BUTTE
   BOYD
   BROWN
   BUFFALO
   BURT
   BUTLER
   CASS
   CEDAR
   CHASE
   CHERRY
   CHEYENNE
   CLAY
   COLFAX
   CUMING
   CUSTER
   DAKOTA
   DAWES
   DAWSON
   DEUEL
   DIXON
   DODGE
   DOUGLAS
   DUNDY
   FILLMORE
   FRANKLIN
   FRONTIER
   FURNAS
   GAGE
   GARDEN
   GARFIELD
   GOSPER
   GRANT
   GREELEY
   HALL
   HAMILTON
   HARLAN
   HAYES
   HITCHCOCK
   HOLT
   HOOKER
   HOWARD
   JEFFERSON
   JOHNSON
   KEARNEY
   KEITH
   KEYA PAHA
   KIMBALL
   KNOX
   LANCASTER
   LINCOLN
   LOGAN
   LOUP
   MADISON
   MCPHERSON
   MERRICK
   MORRILL
   NANCE
   NEMAHA
   NUCKOLLS
   OTOE
   PAWNEE
   PERKINS
   PHELPS
   PIERCE
   PLATTE
   POLK
   RED WILLOW
   RICHARDSON
   ROCK
   SALINE
   SARPY
   SAUNDERS
   SCOTTS BLUFF
   SEWARD
   SHERIDAN
   SHERMAN
   SIOUX
   STANTON
   THAYER
   THOMAS
   THURSTON
   VALLEY
   WASHINGTON
   WAYNE
   WEBSTER
   WHEELER
   YORK
 

NH BELKNAP
   CARROLL
   CHESHIRE
   COOS
   GRAFTON
   HILLSBORO
   MERRIMACK
   RICKINGHAM
   STRAFFORD
   SULLIVAN
 

NJ ATLANTIC
   BERGEN
   BURLINGTON
   CAMDEN
   CAPE MAY
   CUMBERLAND
   ESSEX
   GLOUCESTER
   HUDSON
   HUNTERDON
   MERCER
   MIDDLESEX
   MONMOUTH
   MORRIS
   OCEAN
   PASSAIC
   SALEM
   SOMERSET
   SUSSEX
   UNION
   WARREN
 

NM BERNALILLO
   CATRON
   CHAVES
   COLFAX
   CURRY
   DE BACA
   DONA ANA
   EDDY
   GRANT
   GUADALUPE
   HARDING
   HIDALGO
   LEA
   LINCOLN
   LOS ALAMOS
   LUNA
   MCKINLEY
   MORA
   OTERO
   QUAY
   RIO ARRIBA
   ROOSEVELT
   SAN JUAN
   SAN MIGUEL
   SANDOVAL
   SANTA FE
   SIERRA
   SOCORRO
   TAOS
   TORRANCE
   UNION
   VALENCIA
 

NV CHURCHILL
   CLARK
   DOUGLAS
   ELKO
   ESMERALDA
   EUREKA
   HUMBOLDT
   LANDER
   LINCOLN
   LYON
   MINERAL
   NYE
   ORMSBY
   PERSHING
   STOREY
   WASHOE
   WHITE PINE
 

NY ALBANY
   ALLEGANY
   BRONX
   BROOME
   CATTARAUGUS
   CAYUGA
   CHAUTAUQUA
   CHEMUNG
   CHENANGO
   CLINTON
   COLUMBIA
   CORTLAND
   DELAWARE
   DUTCHESS
   ERIE
   ESSEX
   FRANKLIN
   FULTON
   GENESEE
   GREENE
   HAMILTON
   HERKIMER
   JEFFERSON
   KINGS
   LEWIS
   LIVINGSTON
   MADISON
   MONROE
   MONTGOMERY
   NASSAU
   NEW YORK
   NIAGARA
   ONEIDA
   ONONDAGA
   ONTARIO
   ORANGE
   ORLEANS
   OSWEGO
   OTSEGO
   PUTNAM
   QUEENS
   RENSSELAER
   RICHMOND
   ROCKLAND
   SARATOGA
   SCHENECTADY
   SCHOHARIE
   SCHUYLER
   SENECCA
   ST LAWRENCE
   STEUBEN
   SUFFOLK
   SULLIVAN
   TIOGA
   TOMPKINS
   ULSTER
   WARREN
   WASHINGTON
   WAYNE
   WESTCHESTER
   WYOMING
   YATES
 

OH ADAMS
   ALLEN
   ASHLAND
   ASHTABULA
   ATHENS
   AUGLAIZE
   BELMONT
   BROWN
   BUTLER
   CARROLL
   CHAMPAIGN
   CLARK
   CLERMONT
   CLINTON
   COLUMBIANA
   COSHOCTON
   CRAWFORD
   CUYAHOGA
   DARKE
   DEFIANCE
   DELAWARE
   ERIE
   FAIRFIELD
   FAYETTE
   FRANKLIN
   FULTON
   GALLIA
   GEAUGA
   GREENE
   GUERNSEY
   HAMILTON
   HANCOCK
   HARDIN
   HARRISON
   HENRY
   HIGHLAND
   HOCKING
   HOLMES
   HURON
   JACKSON
   JEFFERSON
   KNOX
   LAKE
   LAWRENCE
   LICKING
   LOGAN
   LORAIN
   LUCAS
   MADISON
   MAHONING
   MARION
   MEDINA
   MEIGS
   MERCER
   MIAMI
   MONROE
   MONTGOMERY
   MORGAN
   MORROW
   MUSKINGUM
   NOBLE
   OTTAWA
   PAULDING
   PERRY
   PICKAWAY
   PIKE
   PORTAGE
   PREBLE
   PUTNAM
   RICHLAND
   ROSS
   SANDUSKY
   SCIOTO
   SENECA
   SHELBY
   STARK
   SUMMIT
   TRUMBULL
   TUSCARAWAS
   UNION
   VAN WERT
   VINTON
   WARREN
   WASHINGTON
   WAYNE
   WILLIAMS
   WOOD
   WYANDOT
 

OK ADAIR
   ALFALFA
   ATOKA
   BEAVER
   BECKHAM
   BLAINE
   BRYAN
   CADDO
   CANADIAN
   CARTER
   CHEROKEE
   CHOCTAW
   CIMARRON
   CLEVELAND
   COAL
   COMANCHE
   COTTON
   CRAIG
   CREEK
   CUSTER
   DELAWARE
   DEWEY
   ELLIS
   GARFIELD
   GARVIN
   GRADY
   GRANT
   GREER
   HARMON
   HARPER
   HASKELL
   HUGHES
   JACKSON
   JEFFERSON
   JOHNSTON
   KAY
   KINGFISHER
   KIOWA
   LATIMER
   LE FLORE
   LINCOLN
   LOGAN
   LOVE
   MAJOR
   MARSHALL
   MAYES
   MCCLAIN
   MCCURTAIN
   MCINTOSH
   MURRAY
   MUSKOGEE
   NOBLE
   NOWATA
   OKFUSKEE
   OKLAHOMA
   OKMULGEE
   OSAGE
   OTTAWA
   PAWNEE
   PAYNE
   PITTSBURG
   PONTOTOC
   POTTAWATOMIE
   PUSHMATAHA
   ROGER MILLS
   ROGERS
   SEMINOLE
   SEQUOYAH
   STEPHENS
   TEXAS
   TILLMAN
   TULSA
   WAGONER
   WASHINGTON
   WASHITA
   WOODS
   WOODWARD
 

OR BAKER
   BENTON
   CLACKAMAS
   CLATSOP
   COLUMBIA
   COOS
   CROOK
   CURRY
   DESCHUTES
   DOUGLAS
   GILLIAM
   GRANT
   HARNEY
   HOOD RIVER
   JACKSON
   JEFFERSON
   JOSEPHINE
   KLAMATH
   LAKE
   LANE
   LINCOLN
   LINN
   MALHEUR
   MARION
   MORROW
   MULTNOMAH
   POLK
   SHERMAN
   TILLAMOOK
   UMATILLA
   UNION
   WALLOWA
   WASCO
   WASHINGTON
   WHEELER
   YAMHILL
 

PA ADAMS
   ALLEGHENY
   ARMSTRONG
   BEAVER
   BEDFORD
   BERKS
   BLAIR
   BRADFORD
   BUCKS
   BUTLER
   CAMBRIA
   CAMERON
   CARBON
   CENTRE
   CHESTER
   CLARION
   CLEARFIELD
   CLINTON
   COLUMBIA
   CRAWFORD
   CUMBERLAND
   DAUPHIN
   DELAWARE
   ELK
   ERIE
   FAYETTE
   FOREST
   FRANKLIN
   FULTON
   GREENE
   HUNTINGDON
   INDIANA
   JEFFERSON
   JUNIATA
   LACKAWANNA
   LANCASTER
   LAWRENCE
   LEBANON
   LEHIGH
   LUZERNE
   LYCOMING
   MCKEAN
   MERCER
   MIFFLIN
   MONROE
   MONTGOMERY
   MONTOUR
   NORTHAMPTON
   NORTHUMBERLAND
   PERRY
   PHILADELPHIA
   PIKE
   POTTER
   SCHUYLKILL
   SNYDER
   SOMERSET
   SULLIVAN
   SUSQUEHANNA
   TIOGA
   UNION
   VENANGO
   WARREN
   WASHINGTON
   WAYNE
   WESTMORELAND
   WYOMING
   YORK
 

RI BRISTOL
   KENT
   NEWPORT
   PROVIDENCE
   WASHINGTON
 

SC ABBEVILLE
   AIKEN
   ALLENDALE
   ANDERSON
   BAMBERG
   BARNWELL
   BEAUFORT
   BERKELEY
   CALHOUN
   CHARLESTON
   CHEROKEE
   CHESTER
   CHESTERFIELD
   CLARENDON
   COLLETON
   DARLINGTON
   DILLON
   DORCHESTER
   EDGEFIELD
   FAIRFIELD
   FLORENCE
   GEORGETOWN
   GREENVILLE
   GREENWOOD
   HAMPTON
   HORRY
   JASPER
   KERSHAW
   LANCASTER
   LAURENS
   LEE
   LEXINGTON
   MARION
   MARLBORO
   MCCORMICK
   NEWBERRY
   OCONEE
   ORANGEBURG
   PICKENS
   RICHLAND
   SALUDA
   SPARTANBURG
   SUMTER
   UNION
   WILLIAMSBURG
   YORK
 

SD AURORA
   BEADLE
   BENNETT
   BON HOMME
   BROOKINGS
   BROWN
   BRULE
   BUFFALO
   BUTTE
   CAMPBELL
   CHARLES MIX
   CLARK
   CLAY
   CODINGTON
   CORSON
   CUSTER
   DAVISON
   DAY
   DEUEL
   DEWEY
   DOUGLAS
   EDMUNDS
   FALL RIVER
   FAULK
   GRANT
   GREGORY
   HAAKON
   HAMLIN
   HAND
   HANSON
   HARDING
   HUGHES
   HUTCHINSON
   HYDE
   JACKSON
   JERAULD
   JONES
   KINGSBURY
   LAKE
   LAWRENCE
   LINCOLN
   LYMAN
   MARSHALL
   MCCOOK
   MCPHERSON
   MEADE
   MELLETTE
   MINER
   MINNEHAHA
   MOODY
   PENNINGTON
   PERKINS
   POTTER
   ROBERTS
   SANBORN
   SHANNON
   SPINK
   STANLEY
   SULLY
   TODD
   TRIPP
   TURNER
   UNION
   WALWORTH
   WASHABAUGH
   YANKTON
   ZIEBACH
 

TN ANDERSON
   BEDFORD
   BENTON
   BLEDSOE
   BLOUNT
   BRADLEY
   CAMPBELL
   CANNON
   CARROLL
   CARTER
   CHEATHAM
   CHESTER
   CLAIBORNE
   CLAY
   COCKE
   COFFEE
   CROCKETT
   CUMBERLAND
   DAVIDSON
   DE KALB
   DECATUR
   DICKSON
   DYER
   FAYETTE
   FENTRESS
   FRANKLIN
   GIBSON
   GILES
   GRAINGER
   GREENE
   GRUNDY
   HAMBLEN
   HAMILTON
   HANCOCK
   HARDEMAN
   HARDIN
   HAWKINS
   HAYWOOD
   HENDERSON
   HENRY
   HICKMAN
   HOUSTON
   HUMPHREYS
   JACKSON
   JEFFERSON
   JOHNSON
   KNOX
   LAKE
   LAUDERDALE
   LAWRENCE
   LEWIS
   LINCOLN
   LOUDON
   MACON
   MADISON
   MARION
   MARSHALL
   MAURY
   MCMINN
   MCNAIRY
   MEIGS
   MONROE
   MONTGOMERY
   MOORE
   MORGAN
   OBION
   OVERTON
   PERRY
   PICKETT
   POLK
   PUTNAM
   RHEA
   ROANE
   ROBERTSON
   RUTHERFORD
   SCOTT
   SEQUATCHIE
   SEVIER
   SHELBY
   SMITH
   STEWART
   SULLIVAN
   SUMNER
   TIPTON
   TROUSDALE
   UNICOI
   UNION
   VAN BUREN
   WARREN
   WASHINGTON
   WAYNE
   WEAKLEY
   WHITE
   WILLIAMSON
   WILSON
 

TX ANDERSON
   ANDREWS
   ANGELINA
   ARANSAS
   ARCHER
   ARMSTRONG
   ATASCOSA
   AUSTIN
   BAILEY
   BANDERA
   BASTROP
   BAYLOR
   BEE
   BELL
   BEXAR
   BLANCO
   BORDEN
   BOSQUE
   BOWIE
   BRAZORIA
   BRAZOS
   BREWSTER
   BRISCOE
   BROOKS
   BROWN
   BURLESON
   BURNET
   CALDWELL
   CALHOUN
   CALLAHAN
   CAMERON
   CAMP
   CARSON
   CASS
   CASTRO
   CHAMBERS
   CHEROKEE
   CHILDRESS
   CLAY
   COCHRAN
   COKE
   COLEMAN
   COLLIN
   COLLINGSWORTH
   COLORADO
   COMAL
   COMANCHE
   CONCHO
   COOKE
   CORYELL
   COTTLE
   CRANE
   CROCKETT
   CROSBY
   CULBERSON
   DALLAM
   DALLAS
   DAWSON
   DE WITT
   DEAF SMITH
   DELTA
   DENTON
   DICKENS
   DIMMIT
   DONLEY
   DUVAL
   EASTLAND
   ECTOR
   EDWARDS
   EL PASO
   ELLIS
   ERATH
   FALLS
   FANNIN
   FAYETTE
   FISHER
   FLOYD
   FOARD
   FORT BEND
   FRANKLIN
   FREESTONE
   FRIO
   GAINES
   GALVESTON
   GARZA
   GILLESPIE
   GLASSCOCK
   GOLIAD
   GONZALES
   GRAY
   GRAYSON
   GREGG
   GRIMES
   GUADALUPE
   HALE
   HALL
   HAMILTON
   HANSFORD
   HARDEMAN
   HARDIN
   HARRIS
   HARRISON
   HARTLEY
   HASKELL
   HAYS
   HEMPHILL
   HENDERSON
   HIDALGO
   HILL
   HOCKLEY
   HOOD
   HOPKINS
   HOUSTON
   HOWARD
   HUDSPETH
   HUNT
   HUTCHINSON
   IRION
   JACK
   JACKSON
   JASPER
   JEFF DAVIS
   JEFFERSON
   JIM HOGG
   JIM WELLS
   JOHNSON
   JONES
   KARNES
   KAUFMAN
   KENDALL
   KENEDY
   KENT
   KERR
   KIMBLE
   KING
   KINNEY
   KLEBERG
   KNOX
   LA SALLE
   LAMAR
   LAMB
   LAMPASAS
   LAVACA
   LEE
   LEON
   LIBERTY
   LIMESTONE
   LIPSCOMB
   LIVE OAK
   LLANO
   LOVING
   LUBBOCK
   LYNN
   MADISON
   MARION
   MARTIN
   MASON
   MATAGORDA
   MAVERICK
   MCCULLOCH
   MCLENNAN
   MCMULLEN
   MEDINA
   MENARD
   MIDLAND
   MILAM
   MILLS
   MITCHELL
   MONTAGUE
   MONTGOMERY
   MOORE
   MORRIS
   MOTLEY
   NACOGDOCHES
   NAVARRO
   NEWTON
   NOLAN
   NUECES
   OCHILTREE
   OLDHAM
   ORANGE
   PALO PINTO
   PANOLA
   PARKER
   PARMER
   PECOS
   POLK
   POTTER
   PRESIDIO
   RAINS
   RANDALL
   REAGAN
   REAL
   RED RIVER
   REEVES
   REFUGIO
   ROBERTS
   ROBERTSON
   ROCKWALL
   RUNNELS
   RUSK
   SABINE
   SAN AUGUSTINE
   SAN JACINTO
   SAN PATRICIO
   SAN SABA
   SCHLEICHER
   SCURRY
   SHACKELFORD
   SHELBY
   SHERMAN
   SMITH
   SOMERVELL
   STARR
   STEPHENS
   STERLING
   STONEWALL
   SUTTON
   SWISHER
   TARRANT
   TAYLOR
   TERRELL
   TERRY
   THROCKMORTON
   TITUS
   TOM GREEN
   TRAVIS
   TRINITY
   TYLER
   UPSHUR
   UPTON
   UVALDE
   VAL VERDE
   VAN ZANDT
   VICTORIA
   WALKER
   WALLER
   WARD
   WASHINGTON
   WEBB
   WHARTON
   WHEELER
   WICHITA
   WILBARGER
   WILLACY
   WILLIAMSON
   WILSON
   WINKLER
   WISE
   WOOD
   YOAKUM
   YOUNG
   ZAPATA
   ZAVALA
 

UT BEAVER
   BOX ELDER
   CACHE
   CARBON
   DAGGETT
   DAVIS
   DUCHESNE
   EMERY
   GARFIELD
   GRAND
   IRON
   JUAB
   KANE
   LAN JUAN
   MILLARD
   MORGAN
   PIUTE
   RICH
   SALT LAKE
   SANPETE
   SEVIER
   SUMMIT
   TOOELE
   UINTAH
   UTAH
   WASATCH
   WASHINGTON
   WAYNE
   WEBER
 

VA ACCOMACK
   ALBEMARLE
   ALLEGHANY
   AMELIA
   AMHERST
   APPOMATTOX
   ARLINGTON
   AUGUSTA
   BATH
   BEDFORD
   BLAND
   BOTETOURT
   BRUNSWICK
   BUCHANAN
   BUCKINGHAM
   CAMPBELL
   CAROLINE
   CARROLL
   CHARLES CITY
   CHARLOTTE
   CHESTERFIELD
   CLARKE
   CRAIG
   CULPEPER
   CUMBERLAND
   DICKENSON
   DINWIDDIE
   ESSEX
   FAIRFAX
   FAUQUIER
   FLOYD
   FLUVANNA
   FRANKLIN
   FREDERICK
   GILES
   GLOUCESTER
   GOOCHLAND
   GRAYSON
   GREENE
   GREENSVILLE
   HALIFAX
   HANOVER
   HENRICO
   HENRY
   HIGHLAND
   ISLE OF WIGHT
   JAMES CITY
   KING AND QUEEN
   KING GEORGE
   KING WILLIAM
   LANCASTER
   LEE
   LOUDOUN
   LOUISA
   LUNENBURG
   MADISON
   MATHEWS
   MECKLENBURG
   MIDDLESEX
   MONTGOMERY
   NANSEMOND
   NELSON
   NEW KENT
   NORTHAMPTON
   NORTHUMBERLAND
   NOTTOWAY
   ORANGE
   PAGE
   PATRICK
   PITTSYLVANIA
   POWHATAN
   PRINCE EDWARD
   PRINCE GEORGE
   PRINCE WILLIAM
   PULASKI
   RAPPAHANNOCK
   RICHMOND
   ROANOKE
   ROCKBRIDGE
   ROCKINGHAM
   RUSSELL
   SCOTT
   SHENANDOAH
   SMYTH
   SOUTHAMPTON
   SPOTSYLVANIA
   STAFFORD
   SURRY
   SUSSEX
   TAZEWELL
   WARREN
   WASHINGTON
   WESTMORELAND
   WISE
   WYTHE
   YORK
 

VT ADDISON
   BENNINGTON
   CALEDONIA
   CHITTENDEN
   ESSEX
   FRANKLIN
   GRAND ISLE
   LAMOILLE
   ORANGE
   ORLEANS
   RUTLAND
   WASHINGTON
   WINDHAM
   WINDSOR
 

WA ADAMS
   ASOTIN
   BENTON
   CHELAN
   CLALLAM
   CLARK
   COLUMBIA
   COWLITZ
   DOUGLAS
   FERRY
   FRANKLIN
   GARFIELD
   GRANT
   GRAYS HARBOR
   ISLAND
   JEFFERSON
   KING
   KITSAP
   KITTITAS
   KLICKITAT
   LEWIS
   LINCOLN
   MASON
   OKANOGAN
   PACIFIC
   PEND OREILLE
   PIERCE
   SAN JUAN
   SKAGIT
   SKAMANIA
   SNOHOMISH
   SPOKANE
   STEVENS
   THURSTON
   WAHKIAKUM
   WALLA WALLA
   WHATCOM
   WHITMAN
   YAKIMA
 

WI ADAMS
   ASHLAND
   BARRON
   BAYFIELD
   BROWN
   BUFFALO
   BURNETT
   CALUMET
   CHIPPEWA
   CLARK
   CRAWFORD
   CULUMBIA
   DANE
   DODGE
   DOOR
   DOUGLAS
   DUNN
   EAU CLAIRE
   FLORENCE
   FOND DU LAC
   FOREST
   GRANT
   GREEN
   GREEN LAKE
   IOWA
   IRON
   JACKSON
   JEFFERSON
   JUNEAU
   KENOSHA
   KEWAUNEE
   LA CROSSE
   LAFAYETTE
   LANGLADE
   LINCOLN
   MANITOWOC
   MARATHON
   MARINETTE
   MARQUETTE
   MENOMINEE
   MILWAUKEE
   MONROE
   OCONTO
   ONEIDA
   OUTAGAMIE
   OZAUKEE
   PEPIN
   PIERCE
   POLK
   PORTAGE
   PRICE
   RACINE
   RICHLAND
   ROCK
   RUSK
   SAUK
   SAWYER
   SHAWANO
   SHEBOYGAN
   ST CROIX
   TAYLOR
   TREMPEALEAU
   VERNON
   VILAS
   WALWORTH
   WASHBURN
   WASHINGTON
   WAUKESHA
   WAUPACA
   WAUSHARA
   WINNEBAGO
   WOOD
 

WV BARBOUR
   BERKELEY
   BOONE
   BRAXTON
   BROOKE
   CABELL
   CALHOUN
   CLAY
   DODDRIDGE
   FAYETTE
   GILMER
   GRANT
   GREENBRIER
   HAMPSHIRE
   HANCOCK
   HARDY
   HARRISON
   JACKSON
   JEFFERSON
   KANAWHA
   LEWIS
   LINCOLN
   LOGAN
   MARION
   MARSHALL
   MASON
   MCDOWELL
   MERCER
   MINERAL
   MINGO
   MONONGALIA
   MONROE
   MORGAN
   NICHOLAS
   OHIO
   PENDLETON
   PLEASANTS
   POCAHONTAS
   PRESTON
   PUTNAM
   RALEIGH
   RANDOLPH
   RITCHIE
   ROANE
   SUMMERS
   TAYLOR
   TUCKER
   TYLER
   UPSHUR
   WAYNE
   WEBSTER
   WETZEL
   WIRT
   WOOD
   WYOMING
 

WY ALBANY
   BIG HORN
   CAMPBELL
   CARBON
   CONVERSE
   CROOK
   FREMONT
   GOSHEN
   HOT SPRINGS
   JOHNSON
   LARAMIE
   LINCOLN
   NATRONA
   NIOBRARA
   PARK
   PLATTE
   SHERIDAN
   SUBLETTE
   SWEETWATER
   TETON
   UINTA
   WASHAKIE
   WESTON
 
```
{% endraw %}

## MORSE1.BAS

{% raw %}
```bas
10    ' Morse Code Practice Program. Elwood Downey, WB0OEW, August, 1983.
20    ' Written for the IBM PC in Microsoft Basica, V1.1, for PC-DOS V1.1.
30    ' This program may be freely used, traded or copied but the author's
40    ' name and this stipulation shall remain as comments and the program
50    ' shall never be sold for profit.
60    '
70    CLS
80    KEY OFF
90    '
100   ' select input source: either from a file, the keyboard or random.
101 PRINT:PRINT "   ALL entries are to be in LOWER case letters":PRINT
102 PRINT"       ENTER '!' TO START."
103 ZZZ$=INKEY$:IF ZZZ$="!" THEN 104 ELSE 103
104 CLS
110   INPUT "file name? (or `random' or `kybd:') ",F$
120   IF F$="random" THEN RANFILE=1 ELSE RANFILE=0
130   IF RANFILE=1 THEN RANDOMIZE VAL(RIGHT$(TIME$,2)): NCHRS=0: NGRPS=0
140   IF RANFILE=0 THEN OPEN F$ FOR INPUT AS #1
150   '
160   ' select speed
170   INPUT "wpm? ", WPM
180   '
190   ' initialize code strings
200   ' to add more characters, such as apostrophe, increase numcodes,
210   ' add code string and character at end of current lists and add case
220   ' to main loop, below.
230   NUMCODES = 41  ' . , / ? - plus 26 + 10
240   DIM CODES$(NUMCODES-1)
250   DIM CHARS$(NUMCODES-1)
260   FOR I=0 TO NUMCODES-1
270     READ CODES$(I)
280   NEXT
290  FOR I=0 TO NUMCODES-1
300    READ CHARS$(I)
310  NEXT
320  ' code strings. in one-to-one correspondence with characters, below.
330  DATA ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "...."
340  DATA "..", ".---", "-.-", ".-..", "--"
350  DATA "-.", "---", ".--.", "--.-", ".-.", "...", "-"
360  DATA "..-", "...-", ".--", "-..-", "-.--", "--.."
370  DATA "-----", ".----", "..---", "...--", "....-", "....."
380  DATA "-....", "--...", "---..", "----."
390  DATA ".-.-.-", "--..--", "-..-.", "..--..", "-...-"
400  ' characters.
410  DATA "A", "B", "C", "D", "E", "F", "G", "H"
420  DATA "I", "J", "K", "L", "M"
430  DATA "N", "O", "P", "Q", "R", "S", "T"
440  DATA "U", "V", "W", "X", "Y", "Z"
450  DATA "0", "1", "2", "3", "4", "5"
460  DATA "6", "7", "8", "9"
470  DATA ".", ",", "/", "?", "-"
480 '
490 ' set up arrow keys to change speed and frequency.
500 PRINT
510 PRINT CHR$(24); " "; CHR$(25); " to raise or lower tone,   ";
520 PRINT CHR$(27); " "; CHR$(26); " for slower or faster code."
530 PRINT "Ctrl-Break to quit, F9 to pause."
540 PRINT
550 ON KEY(11) GOSUB 1040: KEY(11) ON
560 ON KEY(14) GOSUB 1050: KEY(14) ON
570 ON KEY(12) GOSUB 1090: KEY(12) ON
580 ON KEY(13) GOSUB 1080: KEY(13) ON
590 ON KEY(9) GOSUB 1330: KEY(9) ON
600 '
610 ' set defaults, init screen.
620 F = 600             ' initial tone frequency
630 SIL = 32767         ' special code for no tone
640 GOSUB 1120   ' calculate dit, dah and space lengths.
650 GOSUB 1180   ' display wpm and freq
660 '
670 ' define character type checking functions
680  DEF FNLOWER(C$) = "a"<=C$ AND C$<="z"
690  DEF FNUPPER(C$) = "A"<=C$ AND C$<="Z"
700  DEF FNDIGIT(C$) = "0"<=C$ AND C$<="9"
710 '
720 ' main loop. read (or generate) each character, sound it and print it.
730  IF RANFILE THEN GOSUB 1240: GOSUB 900: PRINT CHARS$(MORSE);: GOTO 870
740  C$ = INPUT$(1,#1)
750  IF " "=C$ OR C$=CHR$(13) THEN GOSUB 990: GOTO 860
760  IF "."=C$ THEN MORSE=36: GOTO 850  ' morse <- codes$ array index
770  IF ","=C$ THEN MORSE=37: GOTO 850
780  IF "/"=C$ THEN MORSE=38: GOTO 850
790  IF "?"=C$ THEN MORSE=39: GOTO 850
800  IF "-"=C$ THEN MORSE=40: GOTO 850
810  IF FNLOWER(C$) THEN C$ = CHR$(ASC(C$)-32)
820  IF FNUPPER(C$) THEN MORSE=ASC(C$)-ASC("A"):  GOTO 850
830  IF FNDIGIT(C$) THEN MORSE=ASC(C$)-ASC("0")+26: GOTO 850
840  GOTO 870
850 GOSUB 900
860 PRINT C$;
870 GOTO 730
880 '
890 ' sound dit for each ".", dah for each "-" in string codes$(morse)
900 FOR I=1 TO LEN(CODES$(MORSE))
910   IF MID$(CODES$(MORSE),I,1) = "." THEN GOSUB 1000 ELSE GOSUB 1010
920 NEXT
930 GOSUB 980
940 RETURN
950 '
960 ' produce elemental sounds, or silences.
970  SOUND SIL,DIT: RETURN      ' element space
980 SOUND SIL,ELE*2: RETURN     ' character space, allow for previous trailing
990 SOUND SIL,ELE*6: RETURN   ' word space, allow for trailing.
1000 SOUND F,DIT: GOSUB 970: RETURN        ' dit
1010 SOUND F,DAH: GOSUB 970: RETURN        ' dah
1020 '
1030 ' change frequency of tone
1040 F = F*1.104: GOSUB 1180: RETURN
1050 F = F/1.104: GOSUB 1180: RETURN
1060 '
1070 ' change speed; update element timings.
1080 WPM = WPM+1: GOSUB 1120: GOSUB 1180: RETURN
1090 WPM = WPM-1: GOSUB 1120: GOSUB 1180: RETURN
1100 '
1110 ' calculate element timings. units are clock ticks, which are at 18.2hz.
1120 IF WPM<13 THEN CWPM=13 ELSE CWPM=WPM
1130 DIT = 21.84/CWPM: DAH = 3*DIT
1140 IF WPM>=13 THEN ELE=DIT ELSE ELE=DIT*((CWPM/WPM-1)*13+2)/2
1150 RETURN
1160 '
1170 ' display current speed and frequency. return cursor where it was.
1180 COL=POS(0): ROW=CSRLIN: LOCATE 1,60
1190 PRINT " wpm: "; WPM: LOCATE 2,60: PRINT "freq: "; F; "     "
1200 LOCATE 2,5: PRINT WPM; "   "
1210 LOCATE ROW,COL
1220 RETURN
1230 '
1240 ' set MORSE to random value from 0 up to numcodes to select random char.
1250 ' force a space character after every fifth time we are called
1260 ' and a newline before every 13 groups.
1270 IF NCHRS=5 THEN PRINT " ";: GOSUB 990: NCHRS=0: NGRPS=NGRPS+1
1280 IF NCHRS=0 AND NGRPS=13 THEN PRINT: NGRPS=0
1290 MORSE = INT(RND*NUMCODES)
1300 NCHRS=NCHRS+1: RETURN
1310 '
1320 ' handle F9, the pause control.
1330 COL9=POS(0): ROW9=CSRLIN
1340 LOCATE 24,30: COLOR 16,7: PRINT " Press any key to continue ";
1350 X$=INKEY$: IF X$="" THEN 1350
1360 LOCATE 24,30: COLOR 2,0:  PRINT "                           ";
1370 LOCATE ROW9,COL9: RETURN
```
{% endraw %}

## MORSE2.BAS

{% raw %}
```bas
5   'DDDDDDDVariable-speed Morse code
6 'generator programmed by Dick Conklin
7 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
10 WIDTH 40:KEY OFF:KEY 1,"":KEY 3,"":     KEY 4,"":DEF SEG:POKE 106,0:CLS:S=.5:F=1000
12 KEY 2,"CQ CQ de N4AT "
15 ' F=1000:LOCATE 5,11:MSG$="Morse Code Generator":GOSUB 500:F=900:LOCATE 10,6:MSG$="Written by Dick Conklin, N4AT":GOSUB 500:F=800:LOCATE 15,9:MSG$="Variable Speed and Pitch":GOSUB 500
20 CLS:LOCATE 7,15:PRINT                   "Select Code Speed:"
25 LOCATE 8,15:PRINT "(words per minute)"
30 LOCATE 12,15:PRINT "5    Slow"
40 LOCATE 14,15:PRINT "13"
50 LOCATE 16,15:PRINT "25"
60 LOCATE 18,15:PRINT "40   Fast"
65 LOCATE 21,15:PRINT "99   EXIT PROGRAM"
70 LOCATE 23,25:PRINT "(Press ENTER)"
80 LOCATE 23,15:INPUT "",W:IF W=0 THEN W=20
81 IF W=99 THEN END
82 S=21/W
85 CLS:INPUT "Do you want to create a new file";Q$:IF Q$="y" THEN GOSUB 3200
87 INPUT "Do you want to convert a file into code";Q$:IF Q$="y" THEN GOSUB 3000:GOTO 20
90 CLS:LOCATE 25,1:PRINT "F1=Restart  F3=Lower Tone, F4=Higher  ";:LOCATE 1,1:PRINT "Text typed below sent at ";W;" WPM:":LOCATE 3,1,1
100 I$=INKEY$:IF I$="" THEN 100
110 GOSUB 1000
120 GOTO 100
499 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
500 'Message Sender
510 FOR I=1 TO LEN(MSG$)
520 I$=MID$(MSG$,I,1):GOSUB 1000
530 NEXT I
540 RETURN 'to Sender
999 'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
1000 'Code Generator
1005 C$=CHR$(ASC(I$) OR 32)
1010 IF C$="a" THEN B$=".-":GOTO 2000
1020 IF C$="b" THEN B$="-...":GOTO 2000
1030 IF C$="c" THEN B$="-.-.":GOTO 2000
1040 IF C$="d" THEN B$="-..":GOTO 2000
1050 IF C$="e" THEN B$=".":GOTO 2000
1060 IF C$="f" THEN B$="..-.":GOTO 2000
1070 IF C$="g" THEN B$="--.":GOTO 2000
1080 IF C$="h" THEN B$="....":GOTO 2000
1090 IF C$="i" THEN B$="..":GOTO 2000
1100 IF C$="j" THEN B$=".---":GOTO 2000
1110 IF C$="k" THEN B$="-.-":GOTO 2000
1120 IF C$="l" THEN B$=".-..":GOTO 2000
1130 IF C$="m" THEN B$="--":GOTO 2000
1140 IF C$="n" THEN B$="-.":GOTO 2000
1150 IF C$="o" THEN B$="---":GOTO 2000
1160 IF C$="p" THEN B$=".--.":GOTO 2000
1170 IF C$="q" THEN B$="--.-":GOTO 2000
1180 IF C$="r" THEN B$=".-.":GOTO 2000
1190 IF C$="s" THEN B$="...":GOTO 2000
1200 IF C$="t" THEN B$="-":GOTO 2000
1210 IF C$="u" THEN B$="..-":GOTO 2000
1220 IF C$="v" THEN B$="...-":GOTO 2000
1230 IF C$="w" THEN B$=".--":GOTO 2000
1240 IF C$="x" THEN B$="-..-":GOTO 2000
1250 IF C$="y" THEN B$="-.--":GOTO 2000
1260 IF C$="z" THEN B$="--..":GOTO 2000
1270 IF C$="1" THEN B$=".----":GOTO 2000
1280 IF C$="2" THEN B$="..---":GOTO 2000
1290 IF C$="3" THEN B$="...--":GOTO 2000
1300 IF C$="4" THEN B$="....-":GOTO 2000
1310 IF C$="5" THEN B$=".....":GOTO 2000
1320 IF C$="6" THEN B$="-....":GOTO 2000
1330 IF C$="7" THEN B$="--...":GOTO 2000
1340 IF C$="8" THEN B$="---..":GOTO 2000
1350 IF C$="9" THEN B$="----.":GOTO 2000
1360 IF C$="0" THEN B$="-----":GOTO 2000
1370 IF C$="." THEN B$=".-.-.-":GOTO 2000
1380 IF C$="?" THEN B$="..--..":GOTO 2000
1390 IF C$="," THEN B$="--..--":GOTO 2000
1400 IF C$="-" THEN B$="-...-":GOTO 2000
1410 IF C$="/" THEN B$="-..-.":GOTO 2000
1420 IF I$=" " THEN B$=" ":GOTO 2000
1500 FK=MID$(I$,1,1)=CHR$(0) :               F1=MID$(I$,2,1)=CHR$(59) :              F3=MID$(I$,2,1)=CHR$(61) :              F4=MID$(I$,2,1)=CHR$(62)
1510 IF FK AND F3 THEN F=F-10 ELSE           IF FK AND F4 THEN F=F+10 ELSE           IF FK AND F1 THEN 20
1520 IF I$=CHR$(8) THEN B$="........":       LOCATE ,POS(0)-1:PRINT " ";:            LOCATE ,POS(0)-1:C$="":GOTO 2000
1530 IF I$=":" THEN B$="---...":             GOTO 2000
1540 IF I$=";" THEN B$="-.-.-.":             GOTO 2000
1550 IF I$="(" OR C$=")" THEN                   B$="-.--.-":GOTO 2000
1560 IF I$="+" OR I$="&" THEN B$=". ...":GOTO 2000
1990 C$="" :B$="":I$=""
2000 PRINT I$; 'Display while sending
2010 FOR C=1 TO LEN(B$)
2020 IF MID$(B$,C,1)="." THEN SOUND F,S      ELSE IF MID$(B$,C,1)="-" THEN SOUND     F,S*3  ELSE SOUND 32767,S*1
2025 SOUND 32767,S 'Space after Dot/Dash
2030 NEXT C 'Get the next Dot or Dash
2035 SOUND 32767,S*1.5 'Space after letter
2040 RETURN 'Get the next letter
3000 'Convert text file into code
3005 ON ERROR GOTO 3010:PRINT "Current files:  ";:FILES "*.   ":PRINT
3010 INPUT "Enter file name:  ",CODEFILE$
3020 OPEN CODEFILE$+".   " FOR INPUT AS #1
3030 CLS:LOCATE 25,1:PRINT "Reading from file ";CODEFILE$:LOCATE 1,1:PRINT "Text typed below sent at ";W;" WPM":LOCATE 3,1
3040 IF EOF(1) THEN CLOSE:RETURN
3050 INPUT #1,MSG$:GOSUB 500:PRINT:GOTO 3040
3200 'Enter and store text
3205 ON ERROR GOTO 3210:PRINT "Current files:  ";:FILES "*.   ":PRINT
3210 INPUT "Enter file name: ",CODEFILE$:OPEN CODEFILE$+".   " FOR OUTPUT AS #1
3215 CLS:LOCATE 25,1:PRINT "Enter  ";CHR$(17);"DDY  when done":LOCATE 1,1:PRINT "Enter text to be stored below:"
3220 LINE INPUT TEXT$
3230 IF TEXT$="" THEN CLOSE:RETURN
3240 PRINT #1,CHR$(34);TEXT$;" ";CHR$(34):GOTO 3220
```
{% endraw %}

## OSCAR.BAS

{% raw %}
```bas
10 CLS:REM DEVELOPED BY K1CD MODIFIED BY WB5MPU
20 DEFDBL P,H,I
30 O=36.167:Q=1.67988:X=.665452:Y=.746441
40 P=103.23389#:I=.9877101182937622#:H=.8756536421393655#:GOTO 60
50 P=114.94513#:I=.979587:H=.813027
60 A(7)=3.141593:A(8)=0
70 PRINT"CHOOSE DATA NEEDED: 1=QTH, 2=SATELLITE, 3=ORBIT, 4=NONE"
80 INPUT R:ON R GOTO 90,130,240,290
90 INPUT "NORTH LATITUDE (DECIMAL DEGREES)";O
100 INPUT"WEST LONGITUDE(DECIMAL DEGREES)";Q
110 Q=Q*A(7)/180:A(1)=O*A(7)/180:GOSUB 750
120 X=A(1):Y=A(2):GOTO 70
130 INPUT"OSCAR 7 OR 8,OR 1 FOR OTHER ";F
140 IF F=1 THEN 190
150 IF F=7 THEN 50
160 IF F=8 THEN 70
170 IF F<7 THEN 70
180 IF F>8 THEN 70
190 INPUT"PERIOD OF SATELLITE(DECIMAL MINUTES)";P
200 INPUT "INCLINATION OF ORBIT(DEGREES)";I
210 INPUT"HEIGHT OF ORBIT(STATUTE MILES)";H
220 H=3957/(3957+H):A(1)=I*A(7)/180:GOSUB 750
230 I=A(1):GOTO 70
240 INPUT"REFERENCE ORBIT NUMBER";N
250 INPUT"EQX LONGITUDE";S
260 INPUT"EQX TIME(HR,MIN)";T,R
270 INPUT"TIME INCREMENT OF READOUT IN MINUTES.";Z1
280 S=S*A(7)/180:T=T+(R/60)
290 CLS
300 GOSUB 1050
310 FOR E=0 TO INT(P) STEP Z1:A(1)=2*A(7)*E/P:GOSUB 750
320 B=A(1):C=A(2)
330 K=B*I:A(1)=K:GOSUB 850
340 M=A(2):A(1)=M:GOSUB 750
350 L=A(2):A(1)=C/L:GOSUB 850
360 IF M<0 THEN A(2)=-1*(A(2)+A(7))
370 U=E/229.183+S+(A(7)/2-A(2))
380 IF U>(2*A(7)) THEN U=U-2*A(7)
390 A(1)=U-Q:GOSUB 750
400 F=A(2):A(9)=A(1)
410 Z=(X*K)+(Y*L*F):A(1)=Z:GOSUB 850
420 D=A(7)/2-A(2):A(1)=D:GOSUB 750
430 G=A(1)
440 IF ABS(G)<ABS(Z-H) GOTO 470
450 A(1)=(Z-H)/G:GOSUB 920
460 V=A(1):GOTO 500
470 A(1)=G/(Z-H):GOSUB 920
480 IF A(1)<0 THEN V=A(7)/(-2)-A(1):GOTO 500
490 V=A(7)/2-A(1)
500 A(1)=(K-(X*Z))/(Y*G):GOSUB 850
510 W=A(7)/2-A(2)
520 IF A(9)>0 THEN W=2*A(7)-W
530 A(1)=INT(T):A(2)=E+INT((T-A(1))*60)
540 IF A(2)<60 GOTO 560
550 A(1)=A(1)+1:A(2)=A(2)-60:IF A(1)=24 THEN A(1)=A(1)-24:GOTO 540
560 A(3)=INT(W*1800/A(7)+.5)/10:A(4)=INT(V*1800/A(7)+.5)/10
570 A(5)=INT(M*180/A(7)+.5):A(6)=INT(U*180/A(7)+.5)
580 IF A(4)<-3 THEN 730
590 H1$=STR$(A(1)):M1$=STR$(A(2))
600 IF A(1)<10 THEN H1$="0"+ RIGHT$(H1$,1)
610 H1$=RIGHT$(H1$,2)
620 IF A(2)<10 THEN M1$="0"+ RIGHT$(M1$,1)
630 M1$=RIGHT$(M1$,2)
640 A$="##:":B$="##":C$="###.#":D$="###.#":E$="##":F$="###":G$="###"
650 PRINT USING E$;E;
660 PRINT TAB(4);H1$;":";
670 PRINT TAB(7);M1$;
680 PRINT TAB(17) USING C$;A(3);
690 PRINT TAB(30) USING D$;A(4);
700 PRINT TAB(48) USING F$;A(5);
710 PRINT TAB(53) USING G$;A(6)
720 A(10)=A(10)+1
730 NEXT E
740 END
750 IF ABS(A(1))<(2*A(7)) GOTO 780
760 A(1)=A(1)/(2*A(7):A(6)=1:IF A(1)<0 THEN A(6)=-L:A(1)=ABS(A(1))
770 A(1)=(A(1))-INT(A(1))*2*A(7)*A(6):A(6)=1
780 A(4)=1:A(2)=1:A(3)=A(1):A(5)=A(1)*A(1)
790 FOR R=2 TO 30
800 A(4)=-1*A(4)*A(5)/((2*R-2)*(2*R-3))
810 IF ABS(A(4))<1E-08 THEN RETURN
820 A(3)=-1*A(3)*A(5)/((2*R-2)*(2*R-1 ))
830 A(1)=A(1)+A(3):A(2)=A(2)+A(4):NEXT R
840 RETURN
850 A(8)=0:A(6)=1:IF ABS(A(1))<.9 GOTO 920
860 IF (1)<0 THEN A(6)=-1:A(1)=ABS(A(1))
870 A(1)=1-A(1)*A(1):IF A(1)<=0 THEN A(1)=0:A(8)=1:GOTO 920
880 A(2)=A(1)*3
890 A(3)=(A(1)/A(2)+A(2))/2
900 IF A(3)<>A(2) THEN A(2)=A(3):GOTO 890
910 A(1)=A(6)*A(3):A(8)=1
920 A(2)=A(1):IF ABS(A(1))<.02 GOTO 1000
930 A(3)=A(1):A(4)=A(1):A(5)=A(1)*A(1)
940 FOR R=1 TO 50
950 A(3)=-1*A(3)*A(5)
960 A(4)=A(4)*A(5)*(2*R-1)/(2*R)
970 IF ABS(A(4))<9.999999E-10 GOTO 1000
980 A(1)=A(1)+A(3)/(2*R+1):A(2)=A(2)+A(4)/(2*R+1)
990 NEXT R
1000 IF A(8)=0 THEN RETURN
1010 A(8)=0
1020 IF A(6)<0 THEN A(2)=A(7)/(-2)-A(2):A(6)=1:RETURN
1030 A(2)=A(7)/2-A(2)
1040 RETURN
1050 A(1)=INT(O*10+.5)/10:A(2)=INT(Q*1800/A(7)+.5)/10
1060 A(3)=INT(S*1800/A(7)+.5)/10:A(4)=INT(T)
1070 A(5)=INT((T-A(4))*60+.5)
1080 PRINT"QTH";A(1);"N.LAT";A(2);"W.LONG","SAT PD";P;"MIN"
1090 PRINT"ORBIT";N;"EQX";A(3);"W.LON AT";A(4);":";A(5)
1100 PRINT"# TIME";TAB(17);"AZ-BERINGS-EL";TAB(49);"LAT LON"
```
{% endraw %}

## PARABOLA.BAS

{% raw %}
```bas
10 ' PARABOLIC ANTENNA DESIGN PROGRAM
20 ' INCLUDES CALCULATION OF ANTENNA GAIN AND BEAMWIDTH
30 ' THE PICTORIAL DEFINITION OF TERMINOLOGY REQUIRES GRAPHICS CARD.
40 '
50 'AUTHOR:  ALAN CHRISTIAN     WA6YOB        SACRAMENTO,CA
60 'VERSION: 1.0
70 'DATE:    AUGUST 11,1984
80 '
90 ' THIS PROGRAM IS DISTRIBUTED FREE OF CHARGE VIA RBBS TO ANYONE
100 ' WHO WANTS TO USE IT.  IT MAY BE FREELY COPIED BUT MAY NOT BE
110 ' SOLD.  THE AUTHOR ASSUMES NO LIABILITY FOR THE FITNESS OF THIS
120 ' PROGRAM FOR ANY PURPOSE AND IS NOT LIABLE FOR DAMAGES OF ANY
130 ' SORT RESULTING FROM THE USE OF THIS PROGRAM.
140 '
150 ' THIS PROGRAM SHOULD BE DISTRIBUTED IN ITS ORIGINAL FORM.  ANY
160 ' REVISIONS SHOULD BE APPENDED OR CONTAINED IN A SEPARATE FILE.
170 '
180 ' ***** INTRODUCTION AND INSTRUCTIONS *****
190 CLS
200 SCREEN 0,0,0,0
210 COLOR 7,0,0
220 GOSUB 1120
230 LOCATE 4,5:PRINT "PARABOLIC ANTENNA DESIGN PROGRAM              VERSION 1.0"
240 LOCATE 6,5:PRINT "FOR USE IN DESIGNING PARABOLIC ANTENNA REFLECTORS.  MAY"
250 LOCATE 7,5:PRINT "BE USED FOR AMATEUR RADIO APPLICATIONS (TX/RX) OR FOR"
260 LOCATE 8,5:PRINT "GEO-STATIONARY SATELLITE RECEPTION APPLICATIONS."
270 '
280 LOCATE 12,5:PRINT "THIS PROGRAM DESIGNS THE REFLECTOR ONLY.  THE DESIGN OF"
290 LOCATE 13,5:PRINT "THE ANTENNA FEED (ILLUMINATION) SYSTEM IS NOT DISCUSSED."
300 LOCATE 15,5:PRINT "THE REFLECTOR MAY BE ILLUMINATED BY A HORN, DIPOLE, ETC."
310 LOCATE 17,5:PRINT "DO YOU WANT TO SEE A PICTORIAL DEFINITION OF THE TERMS "
320 LOCATE 18,5:PRINT "USED IN THE DESIGN?    (NOTE: GRAPHICS CARD AND MONITOR"
330 LOCATE 19,5:PRINT "ARE REQUIRED.                                     (Y/N)"
340 QQ$=INKEY$:IF QQ$="" THEN 340
350 IF QQ$="Y" OR QQ$="y" THEN GOSUB 1490:REM HI-RES GRAPHICS SUBROUTINE
360 ' ***** CALCULATION OF "DEPTH" OF REFLECTOR AT 1-INCH INTERVALS *****
370 CLS
380 PRINT:PRINT
390 INPUT "DIAMETER OF REFLECTOR IN FEET  ";DF
400 INPUT "FOCAL LENGTH OF ANTENNA IN FEET";FF
410 DI=DF*12
420 FI=FF*12
430 YF=DF/2
440 YI=DI/2
450 DIM ZZ(DI,2)
460 FOR Y=1 TO YI
470 ZZ(Y,0)=Y
480 ZZ(Y,1)=(INT(Y^2/(4*FI)*100))/100
490 NEXT Y
500 ' ***** SELECT OUTPUT DEVICE *****
510 PRINT "DO YOU WANT RESULTS ON THE PRINTER (P) OR SCREEN (S)"
520 QQ$ = INKEY$:IF QQ$="" THEN 520
530 IF QQ$="P" OR QQ$="p" THEN 770
540 ' ***** OUTPUT TO VIDEO SCREEN *****
550 PC=0
560 CLS
570 PRINT "RADIAL DISTANCE (Y)";SPC(20);"DEPTH (Z)"
580 PRINT "INCHES FROM CENTER ";SPC(20);"IN INCHES"
590 PRINT "-------------------------------------------------"
600 LOCATE 4,1
610 PG=0:IF PC=1 THEN 630
620 FOR Q=0 TO YI
630 PRINT USING "#########";ZZ(Q,0);
640 PRINT SPC(25)
650 PRINT USING "######.##";ZZ(Q,1)
660 PG = PG+1:IF PG < 17 THEN 710
670 PRINT:PRINT "HIT ANY KEY TO CONTINUE"
680 QQ$=INKEY$:IF QQ$="" THEN 680
690 PC=1
700 GOTO 560
710 NEXT Q
720 PRINT "DO YOU WANT TO CALCULATE GAIN (Y/N)"
730 QQ$=INKEY$:IF QQ$="" THEN 730
740 IF QQ$="Y" OR QQ$="y" THEN 980
750 GOTO 1990
760 ' ***** OUTPUT TO PRINTER *****
770 PC=0
780 LPRINT CHR$(12)
790 LPRINT "RADIAL DISTANCE (Y)";SPC(20);"DEPTH (Z)"
800 LPRINT "INCHES FROM CENTER ";SPC(20);"IN INCHES"
810 LPRINT "-------------------------------------------------"
820 LPRINT
830 PG=0:IF PC=1 THEN 850
840 FOR Q=0 TO YI
850 LPRINT USING "#########";ZZ(Q,0);
860 LPRINT SPC(25)
870 LPRINT USING "######.##";ZZ(Q,1)
880 PG = PG+1:IF PG < 55 THEN 910
890 PC=1
900 GOTO 780
910 NEXT Q
920 LPRINT CHR$(12)
930 PRINT "DO YOU WANT TO CALCULATE GAIN (Y/N)"
940 QQ$=INKEY$:IF QQ$="" THEN 940
950 IF QQ$="Y" OR QQ$="y" THEN 980
960 GOTO 1990
970 ' ***** GAIN AND BEAMWIDTH CALCULATION *****
980 SCREEN 0,0,0,0:CLS:KEY OFF:WIDTH 80
990 PRINT "PARABOLIC ANTENNA GAIN AND BEAMWIDTH CALCULATION"
1000 PRINT
1010 K=0.4342928
1020 INPUT "FREQUENCY IN MEGAHERTZ     ";F
1030 D=DF
1040 G=(INT(20*(LOG(F)*K)+20*(LOG(D)*K)-52.6)*10)/10
1050 TH=(INT(70000000.#/(F*D)))/1000
1060 PRINT
1070 PRINT "ANTENNA GAIN =";G;"DB OVER A POINT SOURCE (ISOTROPIC)"
1080 PRINT "BEAM ANGLE =";TH;"DEGREES"
1090 PRINT:PRINT
1100 GOTO 1990
1110 ' ***** PRINT THE FRAMES FOR THE INSTRUCTIONS *****
1120 LOCATE 2,1
1130 GOSUB 1280
1140 FOR PX=3 TO 9
1150 LOCATE PX,1:PRINT CHR$(186)
1160 LOCATE PX,74:PRINT CHR$(186)
1170 NEXT PX
1180 LOCATE 10,1
1190 GOSUB 1350
1200 FOR PX=11 TO 20
1210 LOCATE PX,1:PRINT CHR$(186)
1220 LOCATE PX,74:PRINT CHR$(186)
1230 NEXT PX
1240 LOCATE 21,1
1250 GOSUB 1420
1260 RETURN
1270 ' PRINT HORIZONTAL LINE WITH DOWNTURNED CORNERS
1280 PRINT CHR$(201);
1290 FOR PP=1 TO 72
1300 PRINT CHR$(205);
1310 NEXT PP
1320 PRINT CHR$(187)
1330 RETURN
1340 ' PRINT HORIZONTAL LINE WITH "T" CORNERS
1350 PRINT CHR$(204);
1360 FOR PP=1 TO 72
1370 PRINT CHR$(205);
1380 NEXT PP
1390 PRINT CHR$(185)
1400 RETURN
1410 ' PRINT HORIZONTAL LINE WITH UPTURNED CORNERS
1420 PRINT CHR$(200);
1430 FOR PP=1 TO 72
1440 PRINT CHR$(205);
1450 NEXT PP
1460 PRINT CHR$(188)
1470 RETURN
1480 ' ***** HI-RES GRAPHICS ROUTINE TO DISPLAY DESIGN TERMINOLOGY *****
1490 CLS
1500 KEY OFF
1510 SCREEN 2
1520 PSET (15,50)
1530 DRAW "L5;R10;L5;D100;L5;R10;"
1540 PSET (50,100)
1550 DRAW "U50;D100;U50;L10;R20;L10;U50;L5;R10;L5;D100;L5;R10;L5;U50;"
1560 FOR Y=-50 TO 50 STEP 0.1
1570 Z=Y*Y/30
1580 PSET (Z+50,Y+100)
1590 NEXT Y
1600 LOCATE 2,35
1610 PRINT "DESIGN OF A PARABOLIC REFLECTOR"
1620 LOCATE 3,35
1630 PRINT "PICTORIAL DEFINITION OF TERMS"
1640 LOCATE 5,40
1650 PRINT "Y= 0.5 Diameter of reflector"
1660 LOCATE 6,40
1670 PRINT "Z= Reflector 'depth' at point Y'"
1680 LOCATE 7,40
1690 PRINT "F= Design focal length"
1700 LOCATE 8,45
1710 PRINT "NOTE: F,Y are in feet"
1720 LOCATE 9,45
1730 PRINT "      Z  is in inches"
1740 LOCATE 8,8
1750 PRINT "--Z--"
1760 LOCATE 13,25
1770 PRINT "FOCAL POINT"
1780 PSET (170,100)
1790 CIRCLE (170,100),3
1800 FOR Q = 160 TO 70 STEP -1
1810 IF Q/4=INT(Q/4) THEN PSET (Q,100):GOTO 1830
1820 PRESET (Q,100)
1830 NEXT Q
1840 LOCATE 13,15
1850 PRINT " F "
1860 LOCATE 12,2
1870 PRINT "  "
1880 LOCATE 14,2
1890 PRINT "  "
1900 LOCATE 13,2
1910 PRINT "2Y"
1920 LOCATE 22,1
1930 PRINT "Scale exaggerated for clarity"
1940 LOCATE 23,1
1950 PRINT "Hit any key to continue"
1960 KK$=INKEY$:IF KK$="" THEN 1960
1970 SCREEN 0:CLS
1980 RETURN
1990 CLEAR:END
```
{% endraw %}

## RTTYTALK.BAS

{% raw %}
```bas
50 SCREEN 0,1,0:WIDTH 80:CLS:KEY OFF:LOCATE ,,0
110 CLOSE:DEFINT A-Z:ON ERROR GOTO 9000
115 I=0:P=0:A$="":RC=0:PR=0:LF$="":BS$="":NS=0:DIM S$(3):DIM R$(3):SET=0:PSE=0:XF$="":XN$="":HLT=0:X$="":Y$="":Z$="":B$="":C$="":J=0
120 FLN!=0:CNT!=0
125 DIM ALT$(10):DIM K$(40)
126 FIGS=2:RSWIT=1:RTTY=0
127 DIM ASCII1$(257),ASCII2$(257),BAUDOT$(32,3)
130 FOR I=1 TO 10:KEY I,"":NEXT
135 BS$=CHR$(8):LF$=CHR$(10):CR$=CHR$(13)
140 RCV$="":TRN$="":DIAL$="":STRT$="--":GO$="Ready"
145 DIM KPG$(4):KPG$(1)="Func":KPG$(2)=" Alt":KPG$(3)="Shft":KPG$(4)="Ctrl
150 DIM DS$(3):DIM DR$(3)
155 VL$=CHR$(179):EF$=CHR$(26):BL$=CHR$(7):ENT$=CHR$(17)+CHR$(196)+CHR$(217)
160 XN$=CHR$(17):XF$=CHR$(19):SOH$=CHR$(1):EOT$=CHR$(4):ACK$=CHR$(6):NAK$=CHR$(21):CAN$=CHR$(24)
165 DFIL$="pc-talk.dir":KFIL$="pc-talk.key":FFIL$="pc-talk.def":IFIL$="INITIALIII"
200 ' Get Defaults
210 DFNUM=29:DIM DP$(29):DIM D$(29):DIM DT$(29)
215 CLOSE#1:OPEN FFIL$ FOR INPUT AS #1
220 INPUT#1,Q$:IF Q$<>IFIL$ THEN 245
225 FOR I=1 TO DFNUM:INPUT#1,DP$(I),D$(I):NEXT
235 INPUT#1,Q$:IF Q$<>IFIL$ THEN 245
240 GOSUB 5600:GOTO 300
245 BEEP:PRINT"*** Re-initializing Default File ***":CLOSE#1:KILL FFIL$:GOTO 5400
250 '
300 ' Start-up
305 '
310 B$=" "
315 '
400 '
405 CLOSE#2:OPEN KFIL$ AS #2:FIELD #2,126 AS K$,2 AS L$
410 GET#2,1:IF LEFT$(K$,LEN(IFIL$))<>IFIL$ THEN GOSUB 7425
415 FOR I=1 TO 40:GET#2,I+1:LN=CVI(L$):IF LN=0 THEN 420 ELSE K$(I)=LEFT$(K$,LN)
420 NEXT:CLOSE#2
425 CLOSE#1:OPEN COMM$ AS #1:PRINT#1,MODMINIT$;
428 GOSUB 11000
430 ROW=1:COL=1:GOSUB 2820:LOCATE 1,1,1:PRINT GO$
435 '
500 ' Main Input/Output
505 '
510 '-keyboard
515 IF TR THEN IF TR$="X" THEN 4860 ELSE 4060
520 B$=INKEY$:IF B$="" THEN 560
525 IF LEN(B$)>1 THEN 1500
530 IF B$=BS$ THEN CCNT=CCNT-1:IF ECH THEN GOSUB 2655:IF PR THEN PR$=PR$+B$:GOSUB 800:GOTO 555 ELSE 555 ELSE 555
535 IF MARG<=0 THEN 550
540 IF INSTR(B$,CR$)<>0 THEN CCNT=0:GOTO 550
545 CCNT=CCNT+LEN(B$):IF CCNT>=MARG AND CCNT<MARG+10 THEN BEEP
550 IF ECH THEN PRINT B$;:IF PR THEN PR$=PR$+B$:GOSUB 800
553 IF RTTY THEN GOSUB 7800
555 PRINT#1, B$;
560 IF EOF(1) THEN 515 ELSE 605
600 '-comm port
605 IF LOF(1)<128 THEN PSE=-1:PRINT#1,XF$;
610 IF EOF(1) THEN 710
615 A$=INPUT$(LOC(1),#1):IF NS=0 THEN 635
620 FOR I=1 TO NS
625 P=INSTR(A$,S$(I)):IF P=0 THEN 630 ELSE A$=LEFT$(A$,P-1)+R$(I)+RIGHT$(A$,LEN(A$)-P):GOTO 625
630 NEXT
635 IF RTTY THEN GOSUB 7600
636 IF RC THEN PRINT #2,A$;
640 P=INSTR(A$,LF$):IF P=0 THEN 645 ELSE A$=LEFT$(A$,P-1)+RIGHT$(A$,LEN(A$)-P):GOTO 640
645 P=INSTR(A$,BS$):IF P=0 THEN 655 ELSE FOR I=1 TO LEN(A$):IF MID$(A$,I,1)<>BS$ THEN PRINT MID$(A$,I,1);:GOTO 650 ELSE GOSUB 2650
650 NEXT:GOTO 660
655 FOR I=1 TO LEN(A$):PRINT MID$(A$,I,1);:NEXT
660 IF PR THEN PR$=PR$+A$:GOSUB 800
700 '-check status
705 IF SET THEN 715
710 B$=INKEY$:IF B$<>"" THEN 525
715 IF LOC(1)>0 THEN 605
720 IF PSE THEN PSE=0:PRINT#1,XN$;
725 IF SET THEN ROW=CSRLIN:COL=POS(0):GOTO 1000
730 GOTO 515
800 '-printer buffer
805 P=INSTR(PR$,BS$):IF P=0 THEN 810 ELSE IF LEN(PR$)>1 THEN PR$=LEFT$(PR$,P-2)+RIGHT$(PR$,LEN(PR$)-P):GOTO 805
810 P=INSTR(PR$,CR$):IF P=0 THEN 815 ELSE PRINT#3,LEFT$(PR$,P);:PR$=RIGHT$(PR$,LEN(PR$)-P):GOTO 810
815 IF LEN(PR$)>220 THEN PRINT#3,PR$;:PR$="":RETURN
820 RETURN
825 '
1000 ' Alt-Key Input
1005 '
1010 IF ALTSET THEN LOCATE 25,17 ELSE LOCATE 25,15+LEN(ALT$)
1015 C$=INKEY$:IF C$="" THEN IF EOF(1) THEN 1015 ELSE SET=-1:LOCATE ROW,COL:GOTO 605
1020 IF NOT ALTSET THEN 1035
1025 LOCATE 25,19:IF ASC(C$)>=49 AND ASC(C$)<=57 THEN ALTKY=ASC(C$)-48ELSE IF ASC(C$)=48 THEN ALTKY=10 ELSE BEEP:GOTO 1010
1030 IF ALTSET THEN ALTSET=0:SET=-1:LOCATE 25,1:PRINT STRING$(5,16);" Alt-";ALTKY;CHR$(198);"    ";CHR$(181);:GOTO 1010
1035 IF LEN(ALT$)>=51 THEN ALT$=LEFT$(ALT$,49):LOCATE 25,64:PRINT" ";CHR$(181);:LOCATE 25,66:BEEP:PRINT"(max 50 chrs.)";:GOTO 1010
1040 IF C$=BS$ THEN IF ALT$="" GOTO 1010 ELSE GOSUB 2650:ALT$=LEFT$(ALT$,LEN(ALT$)-1):GOTO 1010
1045 IF C$=CHR$(13) THEN 1070
1050 IF C$>CHR$(31) THEN PRINT C$; ELSE COLOR HI,BG:PRINT CHR$(ASC(C$)+64);:COLOR FG,BG
1055 PRINT"    ";CHR$(181);
1060 IF C$=XCR$ THEN C$=CHR$(13)
1065 ALT$=ALT$+C$:GOTO 1010
1070 IF ALT$<>"" THEN IF ALT$=" " THEN ALT$(ALTKY)="" ELSE ALT$(ALTKY)=ALT$
1075 ALT$="":SET=0:GOTO 1200
1080 '
1200 ' Alt-key Display
1205 '
1210 P=1:FOR I=1 TO 10:LOCATE 25,P:IF I=10 THEN PRINT"0";:COLOR BG,FG:GOTO 1220
1215 PRINT USING "#";I;:COLOR BG,FG
1220 FOR J=1 TO 7:Z$=MID$(ALT$(I),J,1):IF POS(0)=80 THEN 1235
1225 IF J>LEN(ALT$(I)) THEN PRINT" ";:GOTO 1235
1230 IF Z$>=" "THEN PRINT Z$; ELSE IF Z$=CR$ THEN PRINT XCR$; ELSE COLOR HI,FG:PRINT CHR$(ASC(Z$)+64);:COLOR BG,FG
1235 NEXT J:COLOR FG,BG:P=P+8:NEXT I
1240 FOR I=1 TO 10:IF ALT$(I)<>"" THEN EXIT=-1
1245 NEXT:IF EXIT THEN EXIT=0:LOCATE ROW,COL:GOTO 605
1250 LOCATE ROW,COL:GOSUB 2820:GOTO 515
1255 '
1500 ' Extended Codes
1505 '
1510 EX=0:ROW=CSRLIN:COL=POS(0)
1515 IF LEN(B$)=2 THEN EX=ASC(MID$(B$,2,1)) ELSE EX=0
1520 IF EX=75 THEN B$=CHR$(29):GOTO 535 ' cursor left
1525 IF EX=77 THEN B$=CHR$(28):GOTO 535 ' cursor right
1530 IF EX=71 THEN 2000 ' home
1535 IF EX=19 OR EX=81 THEN EX=19:GOTO 3000 ' alt-r or pg-dn
1540 IF EX=47 THEN 3400 ' alt-v
1545 IF EX=20 OR EX=73 THEN EX=20:GOTO 3200 ' alt-t or pg-up
1550 IF EX=25 THEN 5000 ' alt-p
1555 IF EX=32 THEN 6000 ' alt-d
1557 IF EX=36 THEN B$=CHR$(13)+CHR$(10)+"KA9DCA  (STEVE)  "+DATE$+"  "+TIME$+" CST"+CHR$(13)+CHR$(10):GOTO 550  ' alt-j
1560 IF EX=37 THEN 7000 ' alt-k
1565 '-F-keys/Alt-keys
1570 IF EX>=59 AND EX<=68 THEN B$=K$(EX-58):GOTO 535
1575 IF EX>=104 AND EX<=113 THEN B$=K$(EX-93):GOTO 535
1580 IF EX>=84 AND EX<=103 THEN B$=K$(EX-63):GOTO 535
1585 IF EX>=120 AND EX<=129 THEN B$=ALT$(EX-119):GOTO 535
1590 IF EX=131 THEN:BEEP:LOCATE 25,1:PRINT"  set Alt-(1-0):  ";CHR$(181);:ALTSET=-1:GOTO 1000
1595 '-echo/message/print
1600 IF EX=18 THEN BEEP:PRINT:IF ECH=0 THEN ECH=-1:PRINT"===ECHO ON===":GOTO 515 ELSE ECH=0:PRINT"===ECHO OFF===":GOTO 515 'alt-e
1605 IF EX=50 THEN BEEP:PRINT:IF MSG=0 THEN MSG=-1:PRINT"===MESSAGES ON===":GOTO 515 ELSE MSG=0:PRINT"===MESSAGES OFF===":GOTO 515 ' alt-m
1610 IF EX=114 OR EX=132 THEN BEEP:PRINT:IF PR=0 THEN PR=-1:PRINT"===PRINTOUT ON===":CLOSE#3:OPEN PRNTPORT$ AS #3:PRINT#3,PRNTINIT$;:GOTO 515 ELSE PR=0:CLOSE#3:PRINT"===PRINTOUT OFF===":GOSUB 2715:GOTO 515 ' ctrl-prtsc or ctrl-pgup
1615 '-elapsed time/redial/screendump/defaults/exit
1620 IF EX=44 THEN 8200 ' alt-z
1625 IF EX=16 THEN IF DIAL$<>"" THEN 8000 ELSE BEEP:PRINT"(nothing to redial)":PRINT GO$:GOTO 515 ' alt-q
1630 IF EX=31 THEN 3800 ' alt-s
1635 IF EX=33 THEN 5200 ' alt-f
1640 IF EX=45 THEN BEEP:CLS:PRINT"===EXIT TO DOS===":PRINT:PRINT"WARNING!  If you proceed you will terminate the program.":PRINT"Do you want to do this (y/n)?";:Q$=INPUT$(1):GOSUB 2555:IF Q$<>"Y" THEN PRINT:PRINT GO$:GOTO 515 ELSE 8915 ' alt-x
1645 '-logged drive/delete/clearsc/width alarm/menu/break
1650 IF EX=38 THEN BEEP:PRINT:PRINT"===SPECIFY LOGGED DRIVE===":PRINT"Current default for file specs: ";DRIV$:PRINT"New default: ";:QL=2:GOSUB 2500:IF Q$="" THEN PRINT:PRINT GO$:GOTO 515 ELSE DRIV$=LEFT$(Q$,1)+":":PRINT:PRINT GO$:GOTO 515 ' alt-l
1655 IF EX=21 THEN 3900 ' alt-y
1660 IF EX=46 THEN PRINT CHR$(12):GOSUB 2800:GOTO 515 ' alt-c
1665 IF EX=17 THEN BEEP:PRINT"===SPECIFY WIDTH ALARM===":PRINT"Current setting for right margin:";MARG:PRINT"New setting: ";:QL=3:GOSUB 2500:IF Q$="" THEN PRINT:PRINT GO$:GOTO 515 ELSE MARG=VAL(Q$):PRINT:PRINT GO$:GOTO 515 ' alt-w
1670 IF EX=117 THEN OLDVAL=INP(LCR):BRKVAL=OLDVAL OR 64:OUT LCR,BRKVAL:SOUND 32767,3:SOUND 32767,1:OUT LCR,OLDVAL:GOTO 515 ' ctrl-end
1674 IF EX=35 GOTO 2950 ' alt-h
1675 IF EX=15 THEN RESTORE 9999:READ Q$:PRINT Q$:GOTO 515 ' shift-tab 0─
1676 IF EX=48 GOTO 2840 ' Alt-B Baud Rate Generator
1677 IF EX=30 THEN OUT &H2FC,(INP(&H2FC) XOR &H2):GOTO 515  ' alt-a T/R Switch
1678 IF EX=22 THEN RTTY=NOT RTTY:IF RTTY THEN PRINT "RTTY ON":GOTO 515 ELSE PRINT "RTTY OFF":GOTO 515    ' alt-u
1679 IF EX=49 THEN FIGS=5-FIGS:PRINT "FIGS=";FIGS:GOTO 515 ' (49 IS ALT-N)
1680 IF EX=24 GOTO 1700 ' alt-o switch rswit between 1 and figs
1681 '
1682 '-more Extended Codes can go here (see p.G-6 IBM BASIC manual)
1683 '
1685 GOTO 515 'DON'T remove this line! (failsafe to return to terminal)
1690 '
1700 IF RSWIT=1 THEN RSWIT=FIGS: GOTO 515
1705 RSWIT=1: GOTO 515
2000 ' Command Summary
2005 '
2010 LOCATE 1,39:PRINT CHR$(213)+STRING$(38,205)+CHR$(184)
2015 LOCATE 2,39:PRINT VL$;"  ===PC-TALK III  COMMAND SUMMARY===  ";VL$      
2020 LOCATE 3,39:PRINT CHR$(195)+STRING$(38,196)+CHR$(180)
2025 RESTORE 2050:LOCATE 4,39:READ B$:PRINT VL$;" ";CAN$;B$;SPACE$(36-LEN(B$));VL$
2030 FOR I=5 TO 23:LOCATE I,39:READ B$:PRINT VL$;B$;SPACE$(38-LEN(B$));VL$:NEXT
2035 LOCATE 24,39:PRINT CHR$(192)+STRING$(38,205)+CHR$(217);
2040 LOCATE ROW,COL:GOTO 515
2045 '
2050 DATA"PrtSc =  print screen contents
2055 DATA" ^PrtSc =  contin. printout (or ^PgUp)
2060 DATA"  Alt-R =  Receive a file  (or PgDn)
2065 DATA"  Alt-T =  Transmit a file  (or PgUp)
2070 DATA" transmit: pacing '=p'  binary '=b'
2075 DATA"tran/recv: XMODEM '=x'
2080 DATA"  Alt-V =  View file   Alt-Y = delete
2085 DATA"  Alt-D =  Dialing directory
2090 DATA"  Alt-Q =  redial last number
2095 DATA"  Alt-K =  set/clear Func keys
2100 DATA"  Alt-=    set/clear temp Alt keys
2105 DATA" Alt-E = Echo toggle  Alt-M = Message
2110 DATA" Alt-S = Screendump   Alt-C = Clearsc
2115 DATA"  Alt-P =  communications Parameters
2120 DATA"  Alt-F =  set program deFaults
2125 DATA"  Alt-L =  change Logged drive
2130 DATA"  Alt-W =  set margin Width alarm
2135 DATA"  Alt-Z =  elapsed time/current call
2140 DATA"  Alt-X =  eXit to DOS
2145 DATA"Ctrl-End = send sustained Break signal
2150 '
2450 '
2455 '
2500 '-return Q$ w/ max len QL
2505 Q$="":IF QL=0 THEN QL=255
2510 QI$=INKEY$:IF QI$="" THEN 2510
2515 IF QI$=CHR$(13) THEN RETURN
2520 IF QI$<>CHR$(8) THEN 2530 ELSE IF Q$="" THEN BEEP:GOTO 2510
2525 IF QI$=CHR$(8) THEN GOSUB 2650:Q$=LEFT$(Q$,LEN(Q$)-1):GOTO 2510
2530 IF LEN(Q$)=QL THEN BEEP:GOTO 2510
2535 IF LEN(QI$)=1 THEN 2545 ELSE IF QI$<>CHR$(0)+CHR$(3) THEN BEEP:GOTO 2510 ELSE QI$=CHR$(0)
2545 IF ASC(QI$)>31 OR QI$=CHR$(27) THEN PRINT QI$; ELSE COLOR HI,BG:PRINT CHR$(ASC(QI$)+64);:COLOR FG,BG
2550 IF QI$=XCR$ THEN Q$=Q$+CHR$(13):GOTO 2510 ELSE Q$=Q$+QI$:GOTO 2510
2555 '-convert Q$ to uppercase
2560 FOR J=1 TO LEN(Q$):P=ASC(MID$(Q$,J,1)):IF P<97 OR P>122 THEN 2570
2565 MID$(Q$,J,1)=CHR$(P AND 95)
2570 NEXT:RETURN
2600 '-to/from line 25
2605 MSG$=LEFT$(MSG$,78):ROW=CSRLIN:COL=POS(0):LOCATE 25,1:COLOR HI,BG:PRINT CHR$(16);:COLOR BG,FG:PRINT MSG$+SPACE$(78-LEN(MSG$));:COLOR FG,BG:LOCATE ROW,COL:RETURN
2650 '-destructive backspace
2655 PRINT CHR$(29);" ";CHR$(29);:RETURN
2700 '-reopen files subrout
2705 CLOSE#2:IF RC THEN OPEN RCV$ FOR APPEND AS #2
2710 RETURN
2715 CLOSE#3:IF PR THEN OPEN PRNTPORT$ FOR OUTPUT AS #3
2720 IF TR THEN OPEN TRN$ AS #3 LEN=128:FIELD #3,128 AS X$
2725 RETURN
2800 '-clear menu line
2805 ROW=CSRLIN:COL=POS(0)
2810 EXIT=0:FOR I=1 TO 10:IF ALT$(I)<>"" THEN EXIT=-1:NEXT
2815 IF EXIT THEN EXIT=0:LOCATE ,,1:GOTO 1210
2820 IF MENU=0 THEN 2830
2825 LOCATE 25,1:PRINT" ";:COLOR BG,FG:PRINT"^PrtSc=prnt  Alt- T=tran R=recv V=view D=dial E=echo M=mesg X=exit <Home>=Help";:COLOR FG,BG:LOCATE ROW,COL:RETURN
2830 LOCATE 25,1:PRINT SPACE$(79);:LOCATE ROW,COL,1:RETURN
2835 '
2840 ' Baud Rate Generator       Got here via Alt-B
2841 GOSUB 2900
2842 PRINT "Input data rate between 10 and 10,000 - ";
2844 INPUT "",RATE$
2845 IF RATE$="?" GOTO 2860 ELSE RAT!=VAL(RATE$)
2846 IF RAT!<10 OR RAT!>10000 GOTO 2842
2848 Z$=MKI$((INT(1152000!/RAT!))/10)
2850 OUT LCR,(INP(LCR) OR &H80)
2852 OUT DLLSB,CVI(LEFT$(Z$,1)+CHR$(0))
2854 OUT DLMSB,CVI(RIGHT$(Z$,1)+CHR$(0))
2856 OUT LCR,(INP(LCR) AND &H7F)
2857 GOSUB 2800
2858 GOTO 515
2860 OUT LCR,(INP(LCR) OR &H80)
2861 R1=INP(DLLSB)
2862 R2=INP(DLMSB)
2866 OUT LCR,(INP(LCR) AND &H7F)
2868 RAT!=115200!/(R1+256*R2)
2870 PRINT "Baud rate=",RAT!:GOTO 2857
2900 LCR=&H2FB
2905 DLLSB=&H2F8
2910 DLMSB=&H2F9
2915 IF COMMPORT$="COM2:" THEN RETURN
2920 IF COMMPORT$<>"COM1:" THEN PRINT "Comm port. name is invalid":GOTO 515
2925 LCR=LCR OR &O100
2930 DLLSB=DLLSB OR &H100
2935 DLMSB=DLMSB OR &H100
2940 RETURN
2950 IF COMMPORT$="COM1:" THEN COMMPORT$="COM2:":GOTO 2960
2955 IF COMMPORT$="COM2:" THEN COMMPORT$="COM1:"
2960 PRINT "Commucication port name is ";COMMPORT$
2965 GOTO 515
3000 ' Receive File
3005 '
3010 IF RC THEN RC=0:RC$="":BEEP:PRINT:PRINT"===RECEIPT OF FILE ";RCV$;" TERMINATED===":PRINT:GOSUB 2700:GOSUB 2800:IF MSG THEN PRINT#1,BL$;CR$;"===FILE RECEIVED===":GOTO 515 ELSE 515
3015 RC$="":BEEP:PRINT:PRINT"===RECEIVE A FILE===":GOTO 3500
3020 IF RC$="X" THEN CLOSE#2:KILL RCV$:OPEN RCV$ AS #2 LEN=128:FIELD #2,128 AS X$:GOTO 3030
3025 IF MSG THEN PRINT#1,BL$;CR$;"===READY TO RECEIVE===
3030 MSG$=" Receiving "+RCVX$+"  (ALT-R to Terminate)":GOSUB 2600
3035 RC=-1:IF RC$="X" THEN 4500 ELSE 605
3040 '
3200 ' Transmit File
3205 '
3210 IF TR THEN TR=0:TR$="":MSG1$="===TRANSMISSION OF FILE ":MSG2$=" TERMINATED===":BEEP:PRINT:PRINT MSG1$;TRN$;MSG2$:GOSUB 2715:GOSUB 2800:IF MSG THEN PRINT#1,CR$;MSG1$;MSG2$,BL$:GOTO 515 ELSE 515
3215 IF TR THEN TR=0:TR$="":MSG1$="===END OF FILE":MSG2$="===":BEEP:PRINT:PRINT MSG1$;" ";TRN$;MSG2$:GOSUB 2715:GOSUB 2800:IF MSG THEN PRINT#1,"65529 '";MSG1$;MSG2$;BL$:GOTO 515 ELSE 515
3220 TR$="":BEEP:PRINT:PRINT"===TRANSMIT A FILE===":GOTO 3500
3225 CLOSE#3:OPEN TRN$ AS #3 LEN=128:FIELD #3,128 AS X$
3230 MSG$=" Transmitting "+TRNX$+" (ALT-T to terminate)":IF TR$="X" THEN MSG$=MSG$+"  # of blocks:" ELSE IF TR$="P" THEN MSG$=MSG$+"  percent remain:" ELSE MSG$=MSG$+"   min. remain:"
3235 GOSUB 2600:IF TR$="X" THEN ROW=CSRLIN:COL=POS(0):LOCATE 25,74:CNT!=FIX(LOF(3)/128):FLN!=LOF(3)/128:IF CNT!=FLN! THEN PRINT CNT!;:LOCATE ROW,COL ELSE PRINT CNT!+1;:LOCATE ROW,COL:GOTO 3245
3240 IF MSG THEN PRINT#1,CR$;"0 '===START OF FILE===";BL$
3245 TR=-1:FLN!=LOF(3):IF TR$<>"X" THEN 4000 ELSE 4700
3250 '
3400 ' View File
3405 '
3410 BEEP:PRINT:PRINT"===VIEW A FILE===":GOTO 3500
3415 MSG$=" Viewing "+VEWX$+"  Press <space> to continue  (Alt-V to terminate)":GOSUB 2600:PRINT:PRINT:PRINT
3420 WHILE NOT EOF(3):FOR I=1 TO 20:LINE INPUT#3,X$:J=LEN(X$):IF J<80 THEN PRINT X$ ELSE PRINT X$;:IF J>80 THEN I=I+FIX(J/80)
3421 IF PR THEN LPRINT X$
3425 NEXT
3430 Q$=INKEY$:IF Q$="" THEN 3430 ELSE IF Q$=" " THEN 3420 ELSE IF Q$=CHR$(0)+CHR$(47) THEN 3445 ELSE BEEP:GOTO 3430
3435 WEND
3440 BEEP:PRINT:PRINT"===END OF FILE ";VEW$;" ===":GOTO 3450
3445 BEEP:PRINT:PRINT"===VIEWING OF FILE ";VEW$;" TERMINATED===
3450 GOSUB 2715:GOSUB 2800:GOTO 515
3455 '
3500 ' File Specs
3505 '
3510 EXIT=0:PRINT"   specification:";
3515 Q$=INKEY$:IF Q$="" THEN 3515 ELSE IF Q$=CR$ OR Q$=BS$ THEN FIL$="":PRINT:GOTO 3540
3520 IF LEN(Q$)>1 THEN Q=ASC(MID$(Q$,2,1)):IF Q>=59 AND Q<=68 THEN Q$=K$(Q-58) ELSE IF Q>=104 AND Q<=113 THEN Q$=K$(Q-93) ELSE IF Q>=84 AND Q<=103 THEN Q$=K$(Q-63) ELSE IF Q>=120 AND Q<=129 THEN Q$=ALT$(Q-119) ELSE BEEP:GOTO 3515
3525 IF Q$<>" " THEN PRINT Q$;:QL=128:GOSUB 2510:GOSUB 2555:FIL$=Q$:PRINT:LOCATE,,1:GOTO 3540
3530 IF EX=19 THEN FIL$=RCVX$ ELSE IF EX=20 THEN FIL$=TRNX$ ELSE IF EX=47 THEN FIL$=VEWX$
3535 Q$=FIL$:PRINT Q$;:QL=128:GOSUB 2510:GOSUB 2555:FIL$=Q$:PRINT:LOCATE,,1
3540 IF FIL$="" THEN BEEP:PRINT"===CANCELLED===":GOTO 515
3545 IF LEFT$(FIL$,1)="?" THEN GOSUB 3625:GOTO 3510
3550 P=INSTR(FIL$,":"):IF P=0 THEN FIL$=DRIV$+FIL$
3555 IF EX=19 THEN RCVX$=FIL$ ELSE IF EX=20 THEN TRNX$=FIL$ ELSE IF EX=47 THEN VEWX$=FIL$
3560 P=INSTR(FIL$,"="):IF P=0 THEN IF EX<>20 OR PC$="" OR EXIT=-1 THEN 3595 ELSE EXIT=-1:Q$=FIL$+PC$:LOCATE CSRLIN-1,18:BEEP:GOTO 3525
3565 Q$=RIGHT$(FIL$,LEN(FIL$)-P):FIL$=LEFT$(FIL$,P-1)
3570 IF Q$="B" THEN TR$="B" 
3575 IF Q$="X" THEN IF EX=19 THEN RC$="X" ELSE IF EX=20 THEN TR$="X
3580 IF LEFT$(Q$,1)="P" THEN TR$="P":PROMPT$=RIGHT$(Q$,LEN(Q$)-1):DEL!=VAL(PROMPT$)
3585 IF TR$="B" OR TR$="X" OR RC$="X" THEN IF DTA$<>"8" THEN BEEP:PRINT"*** You must communicate at 8 DATA BITS for binary or XMODEM ***":GOTO 5015
3590 IF TR$="X" OR RC$="X" THEN IF NS<>0 THEN BEEP:PRINT"*** Stripping disabled for XMODEM ***":NS=0
3595 IF EX=19 THEN CLOSE#2:OPEN FIL$ FOR APPEND AS #2 ELSE CLOSE#3:OPEN FIL$ FOR INPUT AS #3 
3600 PRINT STRING$(18+LEN(FIL$),61):IF EX=19 THEN RCV$=FIL$:GOTO 3020
3605 IF EX=20 THEN TRN$=FIL$:GOTO 3225
3610 IF EX=47 THEN VEW$=FIL$:GOTO 3415
3615 IF EX=21 THEN 3915
3620 '-file directory subrout
3625 IF LEN(FIL$)=1 THEN FIL$=DRIV$+"*.*":GOTO 3640 ELSE FIL$=RIGHT$(FIL$,LEN(FIL$)-1):IF LEFT$(FIL$,1)=" " THEN FIL$=RIGHT$(FIL$,LEN(FIL$)-1)
3630 P=INSTR(FIL$,":"):IF P=0 THEN FIL$=DRIV$+FIL$
3635 IF LEN(FIL$)=P THEN FIL$=FIL$+"*.*
3640 PRINT:FILES FIL$:PRINT
3645 RETURN
3650 '
3800 ' Screendump
3805 '
3810 SOUND 440,2:CLOSE#2:OPEN DUMP$ FOR APPEND AS #2:MSG$=" Appending to "+DUMP$+" at "+TIME$:GOSUB 2600
3815 FOR I=1 TO 24:Y$="":FOR J=1 TO 79:X=SCREEN(I,J):Y$=Y$+CHR$(X):NEXT J:PRINT#2,Y$:NEXT I:PRINT#2,STRING$(79,45);CR$;LF$;"*** PC-TALK III SCREENDUMP - ";DATE$;" at ";TIME$;" ***";CR$;LF$;STRING$(79,61):CLOSE#2
3820 SOUND 660,2:BEEP:GOSUB 2705:GOSUB 2800:LOCATE ROW,COL:GOTO 515
3825 '
3900 ' Delete File
3905 '
3910 BEEP:PRINT:PRINT"===DELETE A FILE===":GOTO 3500
3915 PRINT"***The first 5 lines are:":FOR I=1 TO 5:IF NOT EOF(3) THEN LINE INPUT#3,X$:PRINT X$
3920 NEXT:PRINT"***ARE YOU SURE (y/n)?";:Q$=INPUT$(1):PRINT Q$:GOSUB 2555:IF Q$="Y" THEN CLOSE#3:KILL FIL$:BEEP:PRINT" (deleted)":GOTO 3930
3925 PRINT" (not deleted)":PRINT GO$:GOTO 515
3930 PRINT GO$:GOTO 515
3935 '
4000 ' Transmit
4005 '
4010 IF TR$="B" THEN PRINT"(sending file as binary...)
4015 RATE!=VAL(BAU$)*6:CNT!=0:ROW=CSRLIN:COL=POS(0):GOTO 4060
4020 LOCATE 25,74:IF TR$<>"P" THEN PRINT USING"###.#";(FLN!-(CNT!*128))/RATE!; ELSE PRINT USING".##";(FLN!-CNT!*128)/FLN!;
4025 GET#3,CNT!:Y$=X$:LOCATE ROW,COL
4030 IF TR$="P" THEN GOSUB 4400:IF NOT ABORT THEN 4050 ELSE ABORT=0:GOTO 1500
4035 PRINT#1,Y$;:IF TR$="B" THEN 4050
4040 P=INSTR(1,Y$,LF$):IF P=0 THEN 4045 ELSE Y$=LEFT$(Y$,P-1)+RIGHT$(Y$,LEN(Y$)-P):GOTO 4040
4045 FOR I=1 TO 128:PRINT MID$(Y$,I,1);:NEXT
4050 ROW=CSRLIN:COL=POS(0):GOSUB 4070:B$=INKEY$:IF B$="" THEN 4060
4055 IF LEN(B$)>1 THEN 1500
4060 CNT!=CNT!+1:IF CNT!*128<FLN! THEN 4020 ELSE GET#3,CNT!:Y$=X$:GOTO 4200
4065 '-xon/xoff subrout
4070 IF EOF(1) THEN 4085 ELSE A$=INPUT$(LOC(1),#1)
4075 P=INSTR(1,A$,XF$):IF P<>0 THEN HLT=-1:COLOR HI,BG:PRINT"<<XOFF>>";:COLOR FG,BG
4080 IF HLT THEN P=INSTR(1,A$,XN$):IF P=0 THEN 4085 ELSE HLT=0:RETURN
4085 IF HLT THEN Q$=INKEY$:IF Q$<>"" THEN IF LEN(Q$)<>2 THEN 4070 ELSE IF ASC(RIGHT$(Q$,1))=24 THEN HLT=0:RETURN ELSE 4070 ELSE 4070
4090 RETURN
4200 '-transmit last block
4205 I=0:CNT!=(CNT!-1)*128
4210 I=I+1:CNT!=CNT!+1:IF I>255 THEN 4230 ELSE Z$=MID$(Y$,I,1)
4215 IF TR$="B" THEN IF CNT!<=FLN! THEN 4235 ELSE 4230
4220 IF Z$<>EF$ THEN 4235 ELSE 4230
4225 IF CNT!<=FLN! THEN 4235
4230 IF EOF(1) THEN 3215 ELSE DMMY$=INPUT$(LOC(1),#1):GOTO 4230
4235 IF TR$="P" THEN IF Z$=LF$ THEN 4210
4240 PRINT#1,Z$;:IF TR$="P" THEN IF Z$=CR$ THEN PRINT Z$;:GOSUB 4425:GOTO 4210
4245 IF TR$="B" OR Z$=LF$ THEN 4210
4250 PRINT Z$;:GOTO 4210
4400 '-line pacing subrout
4405 FOR I=1 TO LEN(Y$):Z$=MID$(Y$,I,1):IF Z$=LF$ THEN 4415 ELSE IF Z$<>CR$ THEN PRINT#1,Z$;:PRINT Z$;:GOTO 4415 ELSE PRINT #1," "+CR$;:PRINT CR$;:B$="":GOSUB 4420
4410 IF ABORT THEN RETURN
4415 NEXT:RETURN
4420 IF LEN(B$)>1 THEN ABORT=-1:RETURN
4425 IF (INP(LSR) AND 96)<>96 THEN 4425
4430 IF DEL!>0 THEN SOUND 32767,18*DEL!:SOUND 32767,1:RETURN
4435 Z$="":WHILE NOT EOF(1):Z$=Z$+INPUT$(LOC(1),#1):WEND:PRINT Z$;:IF Z$="" THEN Z$=CHR$(0) ELSE IF LEN(Z$)>128 THEN Z$=""
4440 P=INSTR(Z$,PROMPT$):B$=INKEY$:IF P<>0 OR B$=" " THEN RETURN ELSE 4420
4445 '
4500 ' Receive w/ XMODEM
4505 '
4510 PRINT"===RECEIVE FILE WITH XMODEM===":PRINT
4515 Y$="":BLK=1:SEC=1:CK=0:ECNT=0
4520 PRINT"***Holding for Start...":GOSUB 4975:PRINT#1,NAK$;
4525 GOSUB 4925:IF ABORT THEN 4645 ELSE 4535
4530 GOSUB 4905:IF Z$="" THEN 4545
4535 Y$=Y$+Z$:IF LEN(Y$)<=131 THEN 4530
4540 '-check block
4545 IF LEN(Y$)=132 THEN LSET X$=MID$(Y$,4,128):N=132:GOTO 4580
4550 IF LEN(Y$)=131 THEN LSET X$=MID$(Y$,3,128):N=131:GOTO 4580
4555 IF LEN(Y$)>132 THEN PRINT"**Long  Block in #";BLK:GOTO 4615
4560 IF Y$=EOT$ THEN 4635
4565 IF Y$=CAN$ THEN 4640
4570 IF Y$="" THEN PRINT"***Timeout":GOSUB 4975:PRINT #1,NAK$:GOTO 4525
4575 PRINT"**Short Block in #";BLK:GOTO 4615
4580 IF (ASC(MID$(Y$,1,1)) AND ASC(MID$(Y$,2,1)) AND ASC(MID$(Y$,3,1)))<>0 THEN PRINT"**Error in SOH":Y$="":PRINT #1,NAK$:GOTO 4525
4585 IF ASC(MID$(Y$,2,1))=SEC-1 THEN PRINT"**Requesting Next Block":PRINT#1,ACK$:GOTO 4520
4590 IF SEC<>ASC(MID$(Y$,2,1)) THEN PRINT"**Block # Error in #";BLK:GOTO 4615
4595 IF (SEC XOR 255)<>ASC(MID$(Y$,3,1)) THEN PRINT"**Complement Error in #";BLK:GOTO 4615
4600 FOR I=1 TO 128:CK=CK+ASC(MID$(X$,I,1)):NEXT
4605 IF (CK AND 255)=(ASC(MID$(Y$,N,1))) THEN 4620
4610 PRINT"**Checksum Error in #";BLK:
4615 PRINT#1,NAK$;:ECNT=ECNT+1:IF ECNT<12 THEN 4625 ELSE 4645
4620 LOCATE CSRLIN-1,1:PRINT"Received Block #";BLK;:SEC=255 AND (SEC+1):PUT#2,BLK:BLK=BLK+1:PRINT#1,ACK$;:PRINT"- verified":ECNT=0
4625 Y$="":CK=0:GOSUB 4965:IF ABORT THEN 4645 ELSE 4530
4630 '-terminate
4635 PRINT"***End of File - verified":PRINT#1,ACK$;:GOTO 3010
4640 PRINT"***Cancelled by Transmitter":GOTO 3010
4645 PRINT"***Cancelled by Receiver":PRINT#1,CAN$;:GOSUB 4975:GOTO 3010
4650 '
4700 'Transmit with XMODEM
4705 '
4710 PRINT"===TRANSMIT FILE WITH XMODEM===":PRINT
4715 SEC=0:BLK=0:CNT!=0:ECNT=0:EOT=0:ETT=0:GOSUB 4815
4720 PRINT"***Holding for Start...":GOSUB 4975:ABORT=0:SECZ=0:GOSUB 4985
4725 WHILE NOT EOF(1):Z$=INPUT$(1,#1)
4730 IF Z$=NAK$ THEN 4800
4735 IF Z$=CAN$ THEN 4855
4740 WEND:GOSUB 4965:IF ABORT THEN 4860
4745 GOSUB 4990:IF NOT TENSEC THEN 4725 ELSE GOSUB 4995:GOTO 4725
4750 '-hold for ACK
4755 ABORT=0:SECZ=0:GOSUB 4985
4760 WHILE NOT EOF(1):Z$=INPUT$(LOC(1),#1)
4765 IF Z$=ACK$ THEN ECNT=0:PRINT "- verified ":IF NOT EOT THEN 4800 ELSE IF NOT ETT THEN 4845 ELSE 4850
4770 IF Z$=NAK$ THEN ECNT=ECNT+1:IF ECNT>12 THEN 4860 ELSE IF NOT EOT THEN 4805 ELSE 4845
4775 IF Z$=CAN$ THEN 4855
4780 WEND:GOSUB 4965:IF ABORT THEN 4860
4785 GOSUB 4990:IF NOT TENSEC THEN 4760
4790 GOSUB 4995:IF NOT ABORT THEN IF NOT EOT THEN 4805 ELSE 4845 ELSE 4860
4800 A$=Y$:LOCATE CSRLIN-1,1:PRINT"Sending Block #";BLK;:PRINT#1,A$;:IF CNT!<FLN! THEN GOSUB 4815:GOTO 4755 ELSE EOT=-1:GOTO 4755
4805 ECNT=ECNT+1:IF ECNT>12 THEN 4860 ELSE PRINT:PRINT"***Re-sending block...";:PRINT#1,A$;:GOTO 4755
4810 '-build block
4815 BLK=BLK+1:CNT!=CNT!+128:GET#3,BLK:Y$=X$:IF CNT!<=FLN! THEN 4825
4820 Y$=MID$(Y$,1,128-(CNT!-FLN!))+STRING$(CNT!-FLN!,CHR$(0))
4825 CK=0:FOR I=1 TO LEN(Y$):CK=CK+ASC(MID$(Y$,I,1)):NEXT:CK=(CK AND 255)
4830 IF CK>256 THEN CK=CK-256:GOTO 4830
4835 SEC=(255 AND BLK):Y$=SOH$+CHR$(SEC)+CHR$(SEC XOR 255)+Y$+CHR$(CK):RETURN
4840 '-terminate
4845 PRINT#1,EOT$;:PRINT"***Sending End Marker ";:ETT =-1:GOTO 4755
4850 CLOSE #3:GOTO 3215
4855 PRINT:PRINT"***Cancelled by Receiver":CLOSE#3:GOTO 3210
4860 PRINT:PRINT"***Cancelled by Transmitter":CLOSE#3:PRINT#1,CAN$;:GOTO 3210
4865 '
4900 ' XMODEM subroutines
4905 Z$="":ZA=0
4910 IF NOT EOF(1) THEN Z$=INPUT$(LOC(1),#1):RETURN ELSE SOUND 32767,1:ZA=ZA+1
4915 IF ZA>72 THEN RETURN ELSE 4910
4920 '-hold for SOH
4925 ABORT=0:SECZ=0:GOSUB 4985
4930 GOSUB 4905:GOSUB 4965:IF ABORT THEN RETURN
4935 IF LEFT$(Z$,1)=SOH$ THEN RETURN
4940 IF LEFT$(Z$,1)=EOT$ THEN RETURN
4945 IF LEFT$(Z$,1)=CAN$ THEN RETURN
4950 GOSUB 4975:PRINT#1,NAK$;
4955 GOSUB 4990:IF NOT TENSEC THEN 4955 ELSE GOSUB 4995:GOTO 4930
4960 '-test for abort
4965 B$=INKEY$:IF LEN(B$)<2 THEN RETURN ELSE Q$=MID$(B$,2,1):IF Q$=CHR$(19) OR Q$=CHR$(20) THEN ABORT=-1:RETURN ELSE RETURN
4970 '-purge buffer
4975 WHILE NOT EOF(1):Z$=INPUT$(LOC(1),#1):WEND:RETURN
4980 '-set/check delay
4985 SECX=60*VAL(MID$(TIME$,4,2))+VAL(MID$(TIME$,7,2)):RETURN
4990 TENSEC=0:SECY=60*VAL(MID$(TIME$,4,2))+VAL(MID$(TIME$,7,2)):IF SECY-SECX<10 THEN RETURN ELSE TENSEC=-1:RETURN
4995 IF SECZ<9 THEN GOSUB 4985:SECZ=SECZ+1:RETURN ELSE ABORT=-1:RETURN
4996 '
5000 ' Comm Params
5005 '
5010 BEEP:CLS:PRINT:PRINT"===COMMUNICATIONS PARAMETERS===
5015 PRINT:PRINT"Present parameters: ";:GOSUB 5100:PRINT"Options:
5020 PRINT"   1 -  300,E,7,1  (text)      2 -  300,N,8,1  (binary)
5025 PRINT"   3 - 1200,E,7,1  (text)      4 - 1200,N,8,1  (binary)
5030 PRINT SPACE$(15);"F - reset params to defaults
5035 PRINT SPACE$(15);"X - exit to terminal
5040 PRINT"Choose: ";
5045 Q$=INPUT$(1):GOSUB 2555
5050 IF Q$="X" THEN PRINT Q$:PRINT:PRINT"(present parameters still in effect)":GOTO 5095
5055 IF Q$="F" THEN PRINT Q$:GOSUB 5815:PRINT:PRINT"Parameters reset to:";:GOSUB 5100:GOTO 5095
5060 Q=VAL(Q$):IF Q<1 OR Q>4 THEN BEEP:GOTO 5045 ELSE PRINT Q
5065 BAU$="300":PAR$="E":DTA$="7":STP$="1
5070 IF Q=2 THEN PAR$="N":DTA$="8
5075 IF Q=3 THEN BAU$="1200
5080 IF Q=4 THEN BAU$="1200":PAR$="N":DTA$="8
5085 LOCATE ,,1:COMM$=COMMPORT$+BAU$+","+PAR$+","+DTA$+","+STP$+COMMINIT$:CLOSE#1:OPEN COMM$ AS #1
5090 PRINT:PRINT"New parameters are: ";:GOSUB 5100
5095 PRINT GO$:GOSUB 2800:GOTO 515
5100 COLOR BG,FG:PRINT MID$(COMM$,6,10);:COLOR FG,BG:PRINT:PRINT
5105 PRINT"Echo-";:IF ECH=-1 THEN PRINT"Y"; ELSE PRINT"N";
5110 PRINT" Mesg-";:IF MSG=-1 THEN PRINT"Y"; ELSE PRINT"N";
5115 PRINT" Strip-";:IF NS=0 THEN PRINT"N"; ELSE PRINT USING"#";NS;
5120 PRINT" Pace-";:IF PC$="" THEN PRINT"N" ELSE PRINT PC$
5125 IF NS=0 THEN PRINT:RETURN ELSE FOR I=1 TO NS:PRINT"Strip #";:PRINT USING"#";I;:PRINT" - /";:PRINT USING"###";ASC(S$(I));:PRINT"/";:IF R$(I)="" THEN PRINT"000"; ELSE PRINT USING"###";ASC(R$(I));
5130 PRINT"/":NEXT:PRINT:RETURN
5135 '
5200 ' New Defaults
5205 '
5210 CLS:BEEP:PRINT"===SET NEW DEFAULTS===":PRINT:COLOR BG,FG:PRINT" Present program defaults:";SPACE$(53);:COLOR FG,BG:EXIT=0
5215 FOR I=1 TO DFNUM:J=I+4:P=1:IF I>15 THEN J=I-11:P=32
5220 LOCATE J,P,0:PRINT DP$(I);:LOCATE J,P+16:IF D$(I)>=" " THEN PRINT D$(I); ELSE IF D$(I)="" THEN PRINT "''"; ELSE IF D$(I)=CHR$(0) THEN PRINT "0"; ELSE COLOR HI,BG:PRINT CHR$(ASC(D$(I))+64);:COLOR FG,BG
5225 IF I<15 THEN PRINT SPACE$(12-LEN(D$(I))); ELSE PRINT SPACE$(30-LEN(D$(I)));
5230 NEXT:LOCATE ,,1:IF EXIT THEN 5280 ELSE FOR I=1 TO DFNUM:DT$(I)=D$(I):NEXT
5235 LOCATE 21,1:COLOR BG,FG:PRINT" Enter ";ENT$;" to leave unchanged - <space>";ENT$;" for 'null' value - <ESC>";ENT$;" to quit ":COLOR FG,BG
5240 PRINT"*** Enter new values":ABORT=0:FOR I=1 TO DFNUM:J=I+4:P=1:IF I>15 THEN J=I-11:P=32
5245 IF ABORT THEN 5265
5250 IF D$(I)<>"" THEN LOCATE J,P+17+LEN(D$(I)) ELSE LOCATE J,P+19
5255 IF I>15 THEN QL=16 ELSE QL=4
5260 GOSUB 2500:IF Q$=CHR$(27) THEN GOSUB 2655:GOSUB 2655:ABORT=-1 ELSE IF Q$<>"" THEN DT$(I)=Q$:IF DT$(I)=" " THEN DT$(I)=""
5265 NEXT
5270 GOSUB 5295:PRINT"*** New values ok (y/n)?";:Q$=INPUT$(1):PRINT Q$:GOSUB 2555:IF Q$="N" THEN GOSUB 5295:LOCATE 21,1:PRINT SPACE$(79);:LOCATE 21,1:PRINT"(default routine cancelled)":GOTO 5290 ELSE FOR I=1 TO DFNUM:D$(I)=DT$(I):NEXT
5275 EXIT=-1:GOSUB 5295:PRINT"*** Make these changes permanent (y/n)?";:Q$=INPUT$(1):PRINT Q$+" ...wait";:GOSUB 2555:IF Q$="Y" THEN GOSUB 5440:GOTO 5215 ELSE GOSUB 5600:GOTO 5215
5280 GOSUB 5815:CLOSE#1:OPEN COMM$ AS #1
5285 GOSUB 5295:LOCATE CSRLIN-1,1:PRINT SPACE$(79);:LOCATE CSRLIN,1
5290 COLOR FG,BG,BG:PRINT GO$:GOSUB 2800:GOTO 515
5295 LOCATE 22,1:PRINT SPACE$(79);:LOCATE 22,1:RETURN
5400 '-create default file
5405 RESTORE 5410:FOR I=1 TO DFNUM:READ DP$(I),D$(I):NEXT:GOSUB 5440:GOTO 300
5410 DATA Baud rate,300,Parity,E,Data bits,7,Stop bits,1,Echo,N,Messages,N
5415 DATA"Strip #1",0,Replace #1,0,"Strip #2",0,Replace #2,0,"Strip #3",0,Replace #3,0,Pacing p=,,Logged drive,"B:",Margin width,70
5420 DATA Screendump file,"B:SCRNDUMP.PCT",Redial delay,20,Connect prompt,CONNECT
5425 DATA Line 25 help,Y,Foreground,7,Background,0,High inten.,15
5430 DATA "Print port","LPT1:","Print init.",,"Print width",80
5435 DATA Comm. port,"COM1:",Comm. init.,",CS,DS",Modem init.,,C/R subst.,}
5440 CLOSE#1:OPEN FFIL$ FOR OUTPUT AS #1:WRITE#1,IFIL$:FOR I=1 TO DFNUM:WRITE#1,DP$(I),D$(I):NEXT:WRITE#1,IFIL$:GOSUB 5600:RETURN
5600 '-update values
5605 BAU$=D$(1):PAR$=D$(2):DTA$=D$(3):STP$=D$(4)
5610 I=5:GOSUB 5805:IF D$(5)="Y" THEN DECH=-1 ELSE D$(5)="N":DECH=0
5615 I=6:GOSUB 5805:IF D$(6)="Y" THEN DMSG=-1 ELSE D$(6)="N":DMSG=0
5620 DNS=0:FOR J=1 TO 3:I=2*J+5:GOSUB 5810
5625 DS$(J)=CHR$(VAL(D$(I))):IF DS$(J)<>CHR$(0) THEN DNS=DNS+1 ELSE D$(I)="0"
5630 NEXT:FOR J=1 TO 3:I=2*J+6:GOSUB 5810
5635 DR$(J)=CHR$(VAL(D$(I))):IF DR$(J)=CHR$(0) THEN DR$(J)="":D$(I)="0"
5640 NEXT:IF D$(13)<>"" THEN DPC$="=P"+D$(13) ELSE DPC$=""
5645 D$(14)=LEFT$(D$(14),1)+":":DRIV$=D$(14)
5650 MARG=VAL(D$(15)):DUMP$=D$(16):QDELAY=VAL(D$(17)):CONNECT$=D$(18)
5655 I=19:GOSUB 5805:IF D$(19)="N" THEN MENU=0 ELSE MENU=-1
5660 FG=VAL(D$(20)):BG=VAL(D$(21)):HI=VAL(D$(22))
5665 PRNTPORT$=D$(23):PRNTINIT$=D$(24):WIDTH PRNTPORT$,VAL(D$(25))
5670 I=18:GOSUB 5805:COMMPORT$=D$(26):IF COMMPORT$="COM1:" THEN LSR=&H3FD:LCR=&H3FB ELSE LSR=&H2FD:LCR=&H2FB
5675 COMMINIT$=D$(27):DCOMM$=COMMPORT$+BAU$+","+PAR$+","+DTA$+","+STP$+COMMINIT$:MODMINIT$=D$(28):XCR$=LEFT$(D$(29),1)
5680 GOSUB 5815:RETURN
5800 '-default subrout
5805 Q$=D$(I):GOSUB 2555:D$(I)=Q$:RETURN
5810 IF VAL(D$(I))<0 OR VAL(D$(I))>255 THEN D$(I)="0":RETURN ELSE RETURN
5815 COMM$=DCOMM$:ECH=DECH:MSG=DMSG
5820 NS=DNS:FOR J=1 TO 3:I=2*J+5:S$(J)=DS$(J):R$(J)=DR$(J):NEXT:PC$=DPC$:RETURN
5825 '
6000 ' Dialing Directory
6005 '
6010 BEEP:CLOSE#2:OPEN DFIL$ AS #2:IF DPAGE=0 THEN DPAGE=1
6015 FIELD #2,24 AS N$,36 AS R$,2 AS X$,4 AS B$,1 AS P$,1 AS D$,1 AS S$,1 AS E$,1 AS M$,2 AS T$,26 AS C$,3 AS L$,2 AS G$
6020 GET#2,1:IF LEFT$(N$,LEN(IFIL$))<>IFIL$ THEN I1=1:I2=60:GOSUB 6870
6025 '-write to screen
6030 I1=(DPAGE-1)*15+1:I2=(DPAGE-1)*15+15
6035 CLS:LOCATE 1,1,0:PRINT"===DIALING DIRECTORY "DPAGE"===
6040 GET#2,2:MODM$=RIGHT$(R$,CVI(X$)):LOCATE 1,30:PRINT" Modem dialing command = "MODM$
6045 GET#2,3:SERV1$=RIGHT$(R$,CVI(X$)):LOCATE 2,28:PRINT"Long distance service +# = "LEFT$(SERV1$,24)
6050 GET#2,4:SERV2$=RIGHT$(R$,CVI(X$)):LOCATE 3,50:PRINT"-# = "LEFT$(SERV2$,24)
6055 LOCATE 4,1:COLOR BG,FG:PRINT"   Name"SPACE$(29)"Phone #   Comm Param  Echo Mesg Strip Pace ";:COLOR FG,BG:LOCATE 5,1
6060 FOR I=I1 TO I2:GET#2,I+4
6065 PRINT USING "##";LOC(2)-4;:PRINT"-";N$;"  ";RIGHT$(R$,14);"   ";B$;"-";P$;"-";D$;"-";S$;"    ";E$;"    ";M$;"   ";:IF CVI(T$)=0 THEN PRINT " N "; ELSE PRINT CVI(T$);
6070 PRINT"  ";:IF CVI(G$)=0 THEN PRINT "  N" ELSE PRINT "p="+L$
6075 NEXT
6080 '-initial choice
6085 LOCATE 21,1:PRINT"Dial entry #:             | or...
6090 LOCATE 21,39:PRINT"Enter: R to revise or add to directory
6095 LOCATE 22,46:PRINT"M for manual dialing
6100 LOCATE 23,42:PRINT"F / B to page through directory
6105 LOCATE 24,46:PRINT"X to exit to terminal";
6110 LOCATE 25,27:PRINT"| For long distance service, precede entry # with +/-";
6115 LOCATE 21,14,1:QL=3:GOSUB 2500:GOSUB 2555
6120 IF LEFT$(Q$,1)="+" THEN SERV1=-1:Q$=RIGHT$(Q$,LEN(Q$)-1) ELSE SERV1=0
6125 IF LEFT$(Q$,1)="-" THEN SERV2=-1:Q$=RIGHT$(Q$,LEN(Q$)-1) ELSE SERV2=0
6130 IF Q$="R" THEN 6400
6135 IF Q$="F" THEN IF DPAGE=4 THEN DPAGE=1:GOTO 6030 ELSE DPAGE=DPAGE+1:GOTO 6030
6140 IF Q$="B" THEN IF DPAGE=1 THEN DPAGE=4:GOTO 6030 ELSE DPAGE=DPAGE-1:GOTO 6030
6145 IF Q$="X" THEN CLOSE#2:GOSUB 2700:CLS:LOCATE 1,1,1:PRINT GO$:GOSUB 2800:GOTO 515
6150 IF Q$="M" THEN CLOSE#2:GOSUB 2700:CLS:LOCATE 1,1,1:GOSUB 6305:GOSUB 2800:GOTO 515
6155 IF VAL(Q$)<1 OR VAL(Q$)>60 THEN BEEP:LOCATE 21,14:PRINT SPACE$(LEN(Q$))        :GOTO 6115
6200 '-dial entry
6205 GET#2,VAL(Q$)+4:BAU$=B$:PAR$=P$:DTA$=D$:STP$=S$:IF LEFT$(BAU$,1)=" " THEN BAU$=RIGHT$(BAU$,3)
6210 COMM$=COMMPORT$+BAU$+","+PAR$+","+DTA$+","+STP$+COMMINIT$
6215 CLOSE#1:OPEN COMM$ AS #1
6220 IF E$="Y" THEN ECH=-1 ELSE ECH=0
6225 IF M$="Y" THEN MSG=-1 ELSE MSG=0
6230 NS=CVI(T$):IF NS=0 THEN 6255
6235 FOR I=0 TO NS-1:P=VAL(MID$(C$,I*8+1,3)):IF P>255 THEN P=0
6240 J=VAL(MID$(C$,I*8+5,3)):IF J>255 THEN J=0
6245 S$(I+1)=CHR$(P):IF J=0 THEN R$(I+1)="" ELSE R$(I+1)=CHR$(J)
6250 NEXT
6255 IF CVI(G$)<>0 THEN PC$="=P"+LEFT$(L$,CVI(G$)) ELSE PC$=""
6260 CLS:LOCATE 1,1,1:PRINT"===DIALING ";N$
6265 DIAL$=RIGHT$(R$,CVI(X$))
6270 IF SERV1 THEN DIAL$=SERV1$+DIAL$
6275 IF SERV2 THEN DIAL$=SERV2$+DIAL$
6280 PRINT#1, MODM$+DIAL$:STRT$=TIME$
6285 CLOSE#2:GOSUB 2700:GOSUB 2800:GOTO 515
6300 '-manual dialing
6305 PRINT"===DIAL PHONE #:";:QL=36:GOSUB 2500:R$=Q$:N$="
6310 IF R$="" THEN PRINT"(cancelled)":PRINT GO$:LOCATE,,1:RETURN
6315 IF LEFT$(R$,1)="+" THEN DIAL$=SERV1$+RIGHT$(R$,LEN(R$)-1) ELSE DIAL$=R$
6320 IF LEFT$(R$,1)="-" THEN DIAL$=SERV2$+RIGHT$(R$,LEN(R$)-1)
6325 GOSUB 5815:CLOSE#1:OPEN COMM$ AS #1:PRINT#1,MODM$+DIAL$:STRT$=TIME$:PRINT:LOCATE,,1:RETURN
6400 '-revise
6405 GOSUB 6900:LOCATE 21,1,0:PRINT"Revise/add entry #:       | or...
6410 LOCATE 21,39:PRINT"Enter:  M to change modem command
6415 LOCATE 22,43:PRINT"+ / - to change long distance #s
6420 LOCATE 23,47:PRINT"C to clear directory entries
6425 LOCATE 24,47:PRINT"X to exit to dialing prompt";
6430 LOCATE 21,20,1:QL=2:GOSUB 2500:GOSUB 2555
6435 IF Q$="M" THEN 6830
6440 IF Q$="+" THEN 6835
6445 IF Q$="-" THEN 6840
6450 IF Q$="C" THEN GOSUB 6850:GOTO 6030
6455 IF Q$="X" THEN 6030
6460 IF VAL(Q$)<I1 OR VAL(Q$)>I2 THEN BEEP:LOCATE 21,20:PRINT SPACE$(LEN(Q$)):GOTO 6430
6465 DE$=Q$:GET#2,VAL(DE$)+4:Q=VAL(DE$)-I1+1
6470 '-name & number
6475 GOSUB 6900:LOCATE 22,1:PRINT"Name: ";:QL=24:GOSUB 2500:NI$=Q$
6480 IF NI$="" THEN NI$=N$
6485 LOCATE Q+4,4:PRINT NI$;SPACE$(25-LEN(NI$));:GOSUB 6910
6490 PRINT"Phone number: ";:QL=36:GOSUB 2500:RI$=Q$:XI=LEN(RI$):IF RI$="" THEN RI$=R$:XI=CVI(X$)
6495 LOCATE Q+4,30:IF XI>14 THEN PRINT RIGHT$(RI$,14) ELSE PRINT SPACE$(14-XI)+RIGHT$(RI$,XI)
6500 '-comm params
6505 GOSUB 6910:PRINT"Communications parameters ok (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555
6510 IF Q$="Y" OR Q$="" THEN BI$=B$:PI$=P$:DI$=D$:SI$=S$:GOTO 6555
6515 GOSUB 6910:PRINT"Baud rate: ";:QL=4:GOSUB 2500:BI$=Q$:IF BI$="" THEN BI$=B$
6520 LOCATE Q+4,47:PRINT SPACE$(4-LEN(BI$));BI$;
6525 GOSUB 6910:PRINT"Parity: ";:QL=1:GOSUB 2500:GOSUB 2555:PI$=Q$:IF PI$="" THEN PI$=P$
6530 LOCATE Q+4,52:PRINT PI$;
6535 GOSUB 6910:PRINT"# data bits: ";:QL=1:GOSUB 2500:DI$=Q$:IF DI$="" THEN DI$=D$
6540 LOCATE Q+4,54:PRINT DI$;
6545 GOSUB 6910:PRINT"# stop bits: ";:QL=1:GOSUB 2500:SI$=Q$:IF SI$="" THEN SI$=S$
6550 LOCATE Q+4,56:PRINT SI$;
6555 '-echo & messages
6560 GOSUB 6910:PRINT"Echo on (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555:EI$=Q$:IF EI$="" THEN EI$=E$:GOTO 6570
6565 IF EI$<>"Y" THEN EI$="N
6570 LOCATE Q+4,61:PRINT EI$;
6575 GOSUB 6910:PRINT"Messages on (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555:MI$=Q$:IF MI$="" THEN MI$=M$:GOTO 6585
6580 IF MI$<>"Y" THEN MI$="N
6585 LOCATE Q+4,66:PRINT MI$;
6590 '-strip chars
6595 GOSUB 6910:LOCATE 22,1:PRINT"Strip/convert characters (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555:IF Q$="" THEN TI=CVI(T$):CI$=C$:GOTO 6655
6600 IF Q$="0" OR Q$="N" THEN TI=0:CI$=STRING$(26,47):GOTO 6645
6605 IF Q$<>"Y" THEN BEEP:GOTO 6595
6610 GOSUB 6905:LOCATE 22,1:PRINT"old strip/cnvt string: ";C$
6615 LOCATE 23,1:PRINT"change this (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555:IF Q$<>"Y" THEN TI=CVI(T$):CI$=C$:LOCATE 23,1:PRINT SPACE$(20);:GOTO 6655
6620 LOCATE 24,1:PRINT"(please refer to instructions in the documentation)";:LOCATE 23,1:PRINT"new strip/cnvt string: ";:QL=24:GOSUB 2500:CI$=Q$
6625 CI$=CI$+STRING$(26-LEN(CI$),47)
6630 LOCATE 21,40:PRINT"new string ok (y/n)?";SPACE$(20);:LOCATE 21,61:QL=1:GOSUB 2500:GOSUB 2555:IF Q$="N" THEN LOCATE 23,1:PRINT SPACE$(79):GOTO 6620
6635 P=INSTR(CI$,"//"):IF P=1 THEN TI=0:GOTO 6655
6640 IF P MOD 8<>0 THEN BEEP:GOTO 6610 ELSE TI=P/8
6645 GOSUB 6905:LOCATE Q+4,71:IF TI=0 THEN PRINT "N" ELSE PRINT USING "#";TI
6650 '-pacing
6655 GOSUB 6910:LOCATE 22,1:PRINT"Pacing? p=";:QL=3:GOSUB 2500:LI$=Q$:GI=LEN(LI$)
6660 IF Q$="0" OR Q$="N" OR Q$="n" THEN LI$="N":GI=0:LOCATE Q+4,75:PRINT"  N  ";:GOTO 6800
6665 IF LI$="" THEN LI$=L$:GI=CVI(G$):GOTO 6800
6670 LOCATE Q+4,75:PRINT "p="+LI$+SPACE$(3-GI)
6800 '-write new info
6805 LSET N$=NI$:RSET R$=RI$:LSET X$=MKI$(XI):RSET B$=BI$:LSET P$=PI$:LSET D$=DI$:LSET S$=SI$:LSET E$=EI$:LSET M$=MI$:LSET T$=MKI$(TI):LSET C$=CI$:LSET L$=LI$:LSET G$=MKI$(GI)
6810 GOSUB 6905:LOCATE 22,1:PRINT"Is entry #";DE$;" ok (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555:Q1$=Q$
6815 IF Q1$<>"Y" AND Q1$<>"" THEN LOCATE 22,1:PRINT SPACE$(35);:GOTO 6470
6820 PUT#2,VAL(DE$)+4:GOTO 6030
6825 '-modem$ & service$
6830 GOSUB 6900:MSG$="Modem dialing command:":GOSUB 6845:PUT #2,2:GOTO 6030
6835 GOSUB 6900:MSG$="Long distance +#:":GOSUB 6845:PUT #2,3:GOTO 6030
6840 GOSUB 6900:MSG$="Long distance -#:":GOSUB 6845:PUT#2,4:GOTO 6030
6845 LOCATE 21,1:PRINT MSG$;SPACE$(79-LEN(MSG$));:LOCATE 21,LEN(MSG$)+2:QL=36:GOSUB 2500:RI$=Q$:XI=LEN(RI$):RSET R$=RI$:LSET X$=MKI$(XI):RETURN
6850 '-clear directory
6855 GOSUB 6900:LOCATE 21,1:PRINT"Clear directory from entry #:";:QL=2:GOSUB 2500:I1=VAL(Q$):IF I1<1 THEN I1=61
6860 PRINT" ... through entry #:";:QL=2:GOSUB 2500:I2=VAL(Q$):IF I2>60 THEN I2=60
6865 PRINT:PRINT"-- Are you sure (y/n)? ";:QL=1:GOSUB 2500:GOSUB 2555:IF Q$<>"Y" THEN 6030
6870 LSET N$=IFIL$:LSET R$="":LSET X$=MKI$(0):LSET B$="":LSET P$="":LSET D$="":LSET S$="":LSET E$="":LSET M$="":LSET T$=MKI$(0):LSET C$="":LSET L$="":LSET G$=MKI$(0):PUT#2,1
6875 IF MODM$="" THEN MODM$="ATDT"
6880 LSET N$="":RSET R$=MODM$:LSET X$=MKI$(LEN(MODM$)):PUT#2,2:RSET R$=SERV1$:LSET X$=MKI$(LEN(SERV1$)):PUT#2,3:RSET R$=SERV2$:LSET X$=MKI$(LEN(SERV2$)):PUT #2,4
6885 LSET N$="------------------------":RSET R$="- --- --- ----":LSET X$=MKI$(14)
6890 RSET B$="300":LSET P$="E":LSET D$="7":LSET S$="1":LSET E$="N":LSET M$="N":LSET T$=MKI$(0):LSET C$=STRING$(26,"/"):LSET L$="":LSET G$=MKI$(0)
6895 FOR I=I1 TO I2:PUT#2,I+4:NEXT:RETURN
6900 '-message area subrout
6905 LOCATE 21,27,0:PRINT SPACE$(52);:FOR I=22 TO 25:LOCATE I,1:PRINT SPACE$(79);:NEXT:LOCATE ,,1:RETURN
6910 LOCATE 22,1,0:PRINT SPACE$(79);:LOCATE 22,1,1:RETURN
6915 '
7000 ' Function Key Directory
7005 '
7010 BEEP:IF KPG=0 THEN KPG=1 
7015 LOCATE 1,39,0:PRINT CHR$(213)+STRING$(38,205)+CHR$(184)
7020 LOCATE 2,39:PRINT VL$;"     ===FUNCTION KEY DIRECTORY===     ";VL$
7025 LOCATE 3,39:PRINT VL$;SPACE$(15);:COLOR HI,BG:PRINT KPG$(KPG);:COLOR FG,BG:PRINT" F1-10";SPACE$(13);VL$
7030 LOCATE 4,39:PRINT VL$;:COLOR BG,FG:PRINT"F-   Input String";SPACE$(21);:COLOR FG,BG:PRINT VL$
7035 FOR I=1 TO 10:P=(KPG-1)*10+I
7040 LOCATE I+4,39,0:PRINT VL$;:PRINT USING "##";I;:PRINT" = ";
7045 K=LEN(K$(P)):IF K>33 THEN K=33
7050 FOR J=1 TO K:Q=ASC(MID$(K$(P),J,1)):IF Q>31 THEN PRINT CHR$(Q); ELSE IF Q=13 THEN PRINT XCR$; ELSE COLOR HI,BG:PRINT CHR$(Q+64);:COLOR FG,BG
7055 NEXT J:PRINT SPACE$(33-K)+VL$+"  ";:NEXT I
7060 LOCATE 15,39,1:PRINT CHR$(198)+STRING$(38,205)+CHR$(181)
7100 '-proceed?
7105 GOSUB 7435:LOCATE 16,40,1:PRINT"Press:  R to revise ";KPG$(KPG);"-F assignments
7110 LOCATE 17,44:PRINT"F / B to page through directory
7115 LOCATE 18,48:PRINT"X to exit to terminal
7120 LOCATE 16,46,1:Q$=INPUT$(1):GOSUB 2555
7125 IF Q$="R" THEN 7200
7130 IF Q$="X" THEN CLOSE#2:GOSUB 2700:GOSUB 7435:LOCATE 16,40:LOCATE ROW,COL:PRINT GO$:GOTO 515
7135 IF Q$="F" THEN KPG=KPG+1:IF KPG=5 THEN KPG=1:GOTO 7015 ELSE GOTO 7015
7140 IF Q$="B" THEN KPG=KPG-1:IF KPG=0 THEN KPG=4:GOTO 7015 ELSE GOTO 7015
7145 BEEP:LOCATE 21,76:PRINT SPACE$(LEN(Q$)):GOTO 7120
7200 '-revise
7205 GOSUB 7435:CLOSE#2:OPEN KFIL$ AS #2:FIELD #2, 126 AS K$,2 AS L$
7210 GET#2,1:IF LEFT$(K$,LEN(IFIL$))<>IFIL$ THEN GOSUB 7425
7215 LOCATE 16,40:PRINT"Press Func. key to revise:
7220 LOCATE 18,43:PRINT"or X to exit to terminal
7225 LOCATE 16,66:Q$=INKEY$:IF Q$="" THEN 7225 ELSE IF LEN(Q$)>1 THEN 7240
7230 GOSUB 2555:IF Q$="X" THEN CLOSE#2:GOSUB 2700:GOSUB 7440:LOCATE 16,40:PRINT GO$;:LOCATE ROW,COL:GOTO 515
7235 BEEP:GOTO 7225
7240 Q=ASC(MID$(Q$,2,1))
7245 IF Q>58 AND Q<69 THEN K=(KPG-1)*10+Q-58:Q$=KPG$(KPG)+"-F"+STR$(Q-58):GOTO 7270
7250 IF Q>103 AND Q<114 THEN K=Q-93:Q$=" Alt-F"+STR$(K-10):GOTO 7270
7255 IF Q>83 AND Q<94 THEN K=Q-63:Q$="Shft-F"+STR$(K-20):GOTO 7270
7260 IF Q>93 AND Q<104 THEN K=Q-63:Q$="Ctrl-F"+STR$(K-30):GOTO 7270
7265 BEEP:GOTO 7225
7270 KY=K:GET#2,KY+1
7275 '-new input string
7280 GOSUB 7450:LOCATE 16,1:PRINT"New input string for ";Q$;":":LOCATE 20,1:PRINT STRING$(80,196)
7285 LOCATE 21,1:PRINT"Use ";XCR$;" as substitute for carriage returns
7290 LOCATE 22,8:PRINT ENT$;" to leave key unchanged
7295 LOCATE 23,1:PRINT"<space>";ENT$;" to clear key
7300 LOCATE 17,1:PRINT CHR$(16);:QL=126:GOSUB 2500:KI$=Q$
7305 IF KI$="" THEN KI$=K$
7310 IF KI$=" " THEN KI$="
7315 LI=LEN(KI$)
7400 '-write new info
7405 LSET K$=KI$:LSET L$=MKI$(LI):PUT#2,KY+1
7410 IF Q$="0" THEN K$(10)=KI$:GOSUB 7455:GOTO 7015
7415 K$(KY)=KI$:GOSUB 7455:GOTO 7015
7420 '-create directory
7425 LSET K$=IFIL$:LSET L$="":PUT#2,1
7430 LSET K$="":LSET L$=MKI$(0):FOR I=2 TO 41:PUT#2,I:NEXT:RETURN
7435 '-message area subrout
7440 FOR I=16 TO 18:LOCATE I,39,0:PRINT VL$;SPACE$(38);VL$;"   ";:NEXT
7445 LOCATE 19,39:PRINT CHR$(212);STRING$(38,205);CHR$(190);"   ";:LOCATE ,,1:RETURN
7450 LOCATE 15,1,0:PRINT STRING$(80,205);:GOTO 7460
7455 LOCATE 15,1,0:PRINT SPACE$(80);
7460 FOR I=16 TO 23:LOCATE I,1:PRINT SPACE$(80);:NEXT:LOCATE 24,1:PRINT SPACE$(79);:LOCATE ,,1:RETURN
7465 '
7599 ' receive translator
7600 J=0
7605 FOR I=1 TO LEN(A$)
7610 Z=ASC(MID$(A$,I,1)) AND &H1F
7615 IF Z=27 THEN RSWIT=FIGS:GOTO 7640
7620 IF Z=31 THEN RSWIT=1:GOTO 7640
7627 IF (Z<1) OR (Z>31) GOTO 7640
7630 J=J+1
7635 MID$(A$,J,1)=BAUDOT$(Z,RSWIT)
7640 NEXT I
7642 IF J<>0 THEN A$=LEFT$(A$,J) ELSE A$=""
7650 RETURN
7799 ' transmit translator
7800 BB$=""
7805 FOR I=1 TO LEN(B$)
7810 Z=ASC(MID$(B$,I,1))
7811 IF Z=0 THEN ZZ=0:GOTO 7866
7815 IF FIGS=2 THEN ZZ=ASC(ASCII1$(Z)) ELSE ZZ=ASC(ASCII2$(Z))
7820 IF ZZ=255 GOTO 7868
7825 IF ZZ=>128 GOTO 7850
7830 IF TSWIT=1 GOTO 7866
7835 BB$=BB$+CHR$(31)
7840 TSWIT=1
7845 GOTO 7866
7850 ZZ=ZZ-128
7855 IF TSWIT=FIGS GOTO 7866
7860 BB$=BB$+CHR$(27)
7865 TSWIT=FIGS
7866 BB$=BB$+CHR$(ZZ)
7868 NEXT I
7869 B$=BB$
7870 RETURN
7900 B$=B$+CHR$(13)+"KA9DCA  (STEVE)  "+DATE$+"  "+TIME$+" CST"
8000 ' Redial
8005 '
8010 CLS:MSG$=" Redialing...  *** HIT ANY KEY TO TERMINATE ***  (redial started at "+TIME$+")":GOSUB 2600
8015 SOUND 5000,2:PRINT  "===REDIALING ";N$;" at ";TIME$:PRINT#1,MODM$+DIAL$
8020 IF INKEY$<>"" THEN 8095
8025 SOUND 32767,12000/VAL(BAU$):SOUND 32767,1 
8030 IF EOF(1) THEN 8020
8035 Q1$=INPUT$(LOC(1),#1)
8040 SOUND 32767,12000/VAL(BAU$):SOUND 32767,1
8045 IF EOF(1) THEN Q2$="":GOTO 8055
8050 Q2$=INPUT$(LOC(1),#1)
8055 Q$=Q1$+Q2$
8060 FOR I=1 TO LEN(Q$):P=ASC(MID$(Q$,I,1)):J=P AND 127:MID$(Q$,I,1)=CHR$(J):NEXT
8065 PRINT Q$;
8070 IF INSTR(Q$,MODM$)<>0 THEN 8020
8075 IF INSTR(Q$,CONNECT$)=0 THEN GOTO 8100 ELSE STRT$=TIME$
8080 MSG$=" REMOTE COMPUTER ON LINE  *** HIT ANY KEY TO PROCEED ***":GOSUB 2600
8085 IF INKEY$="" THEN SOUND 600,4:SOUND 900,4:GOTO 8085
8090 PRINT:PRINT"===CONNECTED WITH ";N$:GOSUB 2800:GOTO 515
8095 PRINT#1,CR$:CLS:BEEP:PRINT"===REDIAL TERMINATED...back in terminal mode":PRINT GO$:GOSUB 2800:GOTO 515
8100 I=1
8105 SOUND 32767,20:SOUND 32767,1:IF INKEY$<>"" THEN 8095
8110 I=I+1:IF I=QDELAY THEN 8015 ELSE GOTO 8105
8115 '
8200 ' Elapsed Time
8205 '
8210 IF STRT$="--" THEN MLPSD=0:GOTO 8220
8215 MSTRT=VAL(MID$(STRT$,1,2))*60+VAL(MID$(STRT$,4,2)):MSTOP=VAL(MID$(TIME$,1,2))*60+VAL(MID$(TIME$,4,2)):MLPSD=INT(MSTOP-MSTRT):IF MSTRT>MSTOP THEN MLPSD=MLPSD+1440
8220 LOCATE 1,39:PRINT CHR$(213)+STRING$(38,205)+CHR$(184);
8225 LOCATE 2,39:PRINT VL$;"  Elapsed time this call = ";:COLOR HI,BG:PRINT MLPSD;:PRINT" min     ";:LOCATE 2,78:COLOR FG,BG:PRINT VL$;
8230 LOCATE 3,39:PRINT CHR$(192)+STRING$(38,205)+CHR$(217);
8235 LOCATE ROW,COL:GOTO 515
8240 '
8900 ' Error Subrout
8905 '
8910 BEEP:PRINT:PRINT"*** This program requires that you have a serial port."
8915 PRINT:PRINT:PRINT"(returning to DOS)":SOUND 32767,50:SOUND 32767,1:SYSTEM
8920 BEEP:LOCATE 15,1:PRINT"===PLEASE DO NOT BYPASS THE FREEWARE NOTICE===":GOTO 8915
8925 COLOR HI,BG:PRINT MSG$;:COLOR FG,BG:RETURN
8930 IF ERR=52 OR ERR=64 OR ERR=67 THEN MSG$="Not a valid file name.
8935 IF ERR=53 THEN MSG$="File not found.
8940 IF ERR=70 THEN MSG$="Disk is write protected.
8945 IF ERR=71 THEN MSG$="Check disk drive.
8950 IF ERR=72 THEN MSG$="Disk media error.
8955 RETURN
8960 '
9000 ' Error Traps
9005 '
9010 IF ERL=215 THEN RESUME 5405 
9015 IF ERL=225 THEN RESUME 245 
9020 IF ERL=5665 THEN RESUME 5670
9025 IF ERL=425 THEN RESUME 245
9030 IF ERR=27 THEN BEEP:MGS$="CHECK PRINTER":GOSUB 8925:PR=0:IF ERL=1610 THEN RESUME 515 ELSE RESUME 820 
9035 IF ERL=5280 THEN BEEP:GOSUB 5295:PRINT TAB(31)"*** Invalid communications parameters. Try again.";:EXIT=0:RESUME 5215
9040 IF ERL=6215 AND ERR=64 THEN BEEP:LOCATE 20,1:PRINT"*** Invalid parameters for entry #";Q$:RESUME 6400
9045 IF ERL=6245 THEN BEEP:LOCATE 20,1:PRINT"*** Invalid stripping for entry #";Q$:RESUME 6400
9050 IF ERR=24 THEN MSG$="TIMEOUT":GOSUB 8925:IF PR THEN PR=0:MSG$="PRINTOUT OFF":GOSUB 8925:PR=O:CLOSE#3:RESUME 820 ELSE MSG$="CHECK MODEM":GOSUB 8925:RESUME 515
9055 IF ERR=57 THEN MSG$="":GOSUB 8925:IF RC$="X" THEN RESUME 4525 ELSE IF TC$="X" THEN RESUME 4725 ELSE RESUME 515
9060 IF ERR=69 THEN PRINT#1,XF$;:PSE=-1:MSG$="OVERFLOW":GOSUB 8925:IF NOT PR THEN RESUME 515 ELSE MSG$="PRINTOUT OFF":PR=0:CLOSE#3:RESUME 515
9065 IF ERR=15 AND ERL=660 THEN MSG$="OVERFLOW--PRINTOUT OFF":GOSUB 8925:PR=0:CLOSE#3:RESUME 515
9070 IF ERL=3640 THEN BEEP:PRINT"*** File(s) not found. Try again.":RESUME 3645
9075 IF ERR=61 AND RC$="X" THEN BEEP:PRINT"*** DISK IS FULL":RESUME 4645
9080 IF ERR=61 THEN BEEP:PRINT:PRINT"===DISK IS FULL===":IF RC THEN RESUME 3000 ELSE RESUME 3820
9085 IF ERL=3810 THEN LOCATE 1,40:COLOR HI,BG:PRINT"***CAN'T OPEN ";DUMP$;"***";:LOCATE ROW,COL:RESUME 3820
9090 IF ERR=67 AND ERL=3595 THEN PRINT"*** Either too many files, or
9095 IF ERL=3595 THEN MSG$="":GOSUB 8930:BEEP:PRINT"*** ";MSG$;" Try again.":RESUME 3500
9100 IF ERR=67 OR ERR=70 OR ERR=71 THEN BEEP:PRINT"*** Can't read/write file in the default drive.":PRINT"Correct and hit any key to resume..":Q$=INPUT$(1):IF ERL<400 THEN RESUME 215 ELSE CLS:RESUME 400
9105 IF ERR=68 THEN GOTO 8910
9115 IF ERR=62 AND ERL=3420 THEN RESUME 3425
9900 '-if not trapped
9905 CLOSE:BEEP:MSG$=" Sorry, NON-RECOVERABLE ERROR "+STR$(ERR)+" at line"+STR$(ERL):GOSUB 2600:ON ERROR GOTO 0
9999 DATA 830424
11000 RESTORE 11180
11010 FOR I=0 TO 256
11020 ASCII1$(I)=CHR$(255)
11030 ASCII2$(I)=CHR$(255)
11040 NEXT I
11050 FOR I=0 TO 31
11060 READ X,Y,Z
11070 BAUDOT$(I,1)=CHR$(X)
11080 BAUDOT$(I,2)=CHR$(Y)
11090 BAUDOT$(I,3)=CHR$(Z)
11100 ASCII1$(X)=CHR$(I)
11110 ASCII2$(X)=CHR$(I)
11120 IF X<65 OR X>90 GOTO 11150
11130 ASCII1$(X+32)=CHR$(I)
11140 ASCII2$(X+32)=CHR$(I)
11150 ASCII1$(Y)=CHR$(I+128)
11160 ASCII2$(Z)=CHR$(I+128)
11170 NEXT I
11180 DATA 00,00,00
11190 DATA 69,51,51
11200 DATA 10,00,00
11210 DATA 65,45,45
11220 DATA 32,00,00
11230 DATA 83,07,39
11240 DATA 73,56,56
11250 DATA 85,55,55
11260 DATA 13,00,00
11270 DATA 68,36,00
11280 DATA 82,52,52
11290 DATA 74,39,07
11300 DATA 78,44,44
11310 DATA 70,33,33
11320 DATA 67,58,58
11330 DATA 75,40,40
11340 DATA 84,53,53
11350 DATA 90,34,43
11360 DATA 76,41,41
11370 DATA 87,50,50
11380 DATA 72,35,156
11390 DATA 89,54,54
11400 DATA 80,48,48
11410 DATA 81,49,49
11420 DATA 79,57,57
11430 DATA 66,63,63
11440 DATA 71,38,38
11450 DATA 00,00,00
11460 DATA 77,46,46
11470 DATA 88,47,47
11480 DATA 86,59,61
11490 DATA 00,00,00
11500 RETURN
```
{% endraw %}

## RTTYTALK.DOC

{% raw %}
```
         "Documentation" for the RTTY program.

         The  basic  program you will recognize as PC-TALK III and all
         credit due the authors is hereby acknowledged.  My  objective
         was  to  not  modify  any of the functions of PC-TALK III and
         best I know that's the case.  The only exception I can  think
         of  is that <ALT-J> in the original PC-TALK III does the same
         thing as <ALT-K> (redefine the function  keys)  and  I  stole
         <ALT-J> for another function.  Otherwise refer to the PC-TALK
         III  documentation  first  and  then  look   here   for   the
         modifications  I  made.   I am assuming an AEA CP-1 interface
         with with a  serial  interface.   Whether  it  will  work  on
         anything  else...that's  up to you.  I used an article is the
         September 1981 issue of QST as a reference  for  the  speeds,
         codes  and general RTTY stuff.  Other reference material that
         might help ( and that I used ) were the  Technical  Reference
         Manual for the IBM-PC and the Basic Manual for the IBM-PC.

         <ALT-?> Definitions.

         <ALT-U>
         This turns on or off the RTTY translation process.  When  the
         program  starts  RTTY is off.  <ALT-U> will display "RTTY ON"
         and  will  begin  translating  the  incoming   and   outgoing
         characters between ASCII and RTTY 5 bit "BOUDOT" code.

         <ALT-J>
         This  is  hard  coded  to spit out my call sign, the date and
         time.  To be done properly this should be part of the default
         file but I got lazy.  You could certainly alter the call sign
         to your own.  Matter of fact I would prefer it!

         <ALT-H>
         This  switches  between  COM1:   and  COM2:.   A  message  is
         displayed to indicate the  current  status  and  the  program
         initializes to the default file.

         <ALT-B>
         This  will  allow  you  to  enter a different data rate.  The
         program will ask you for a new speed.  If you respond with  a
         <?>  the  program  will return with the current setting.  For
         example, entering 45.45 will result in the proper  "bits  per
         seconds" setting for standard "60 WPM" RTTY.

         <ALT-N>
         This will switch between the two  versions  of  FIGS  that  I
         found in the previously mentioned artical.

         <ALT-A>
         This will turn the transmitter on and off.   What  it  really
         does  is  set  or reset the "Request to Send" line out of the
         serial port.  Nothing will be displayed.

         <ALT-O>
         This  will  force  a  switch  between LTRS and FIGS.  This is
         sometimes  handy  if  you  happen  to  loose  one  of   those
         characters and end up receiving garbage because you're in the
         wrong case.


         Operation

         In general, the standard way of getting RTTY "up" is to first
         start the the RTTY program.  When it is ready it will display
         the  message  "Ready".   Then  you can set the communications
         port address using <ALT-H> to the port  where  the  interface
         is.   (I have two serial ports and simply switch between them
         using <ALT-H>).  Then you use one of  the  dialing  directory
         entries  to  set the number of data and stop bits.  The entry
         name is not important other than to remind you  what  it  is.
         Hit  <ALT-D>  and  select  the entry you have set up with the
         proper communications parameters and hit  enter.   The  phone
         number  should be left blank ( although I haven't ever  tried
         it with a number there.  It won't do anything other than send
         the  number out the port!  ) The speed can be set to anything
         because you will set that later  with  the  <ALT-B>  command.
         Data  and  stop  bits are important here and this is the only
         way to alter them.  Since Basic and the original PC-TALK  III
         logic  opens  the  serial  port  when  executing  the <ALT-D>
         command, the speed will be set at whatever  you  had  in  the
         dialing  directory.   Problem  is  that  Basic  only  accepts
         certain values ( see the manual ) and causes  error  messages
         on  anything  it  doesn't  like.   Therefore  one of the next
         commands ought to be the <ALT-B> command to  set  the  speed.
         Again,  due  to Basic and previous program logic, the program
         will turn on the transmitter as soon as the  <ALT-D>  command
         is  executed.  You may or may not want to turn it off at this
         point.  The last thing that is necessary is to  turn  on  the
         RTTY  tranlation  process with <ALT-U>.  There you are, ready
         to send and receive Radio TeleTYpe.

         One  word  of advise.  Compile this thing!  Basic has a nasty
         habit of wondering off into never-never land  when  it  comes
         time  to  clean  up  the  string  character  space.  For this
         program this process can take as long  as  5  minutes!   Once
         compiled  the  clean-up  time  is less than 1 second.  (Don't
         ask.  If you must then ask IBM!) Also, heed the  warnings  in
         the PC-TALK III documentation concerning communication buffer
         sizes.

         If you have any questions I will be glad to answer any that I
         can.  I make no claims about quality of the code  or  whether
         it conforms to any known standards.  Enjoy.

         Steve Darling KA9DCA
         3408 33rd Street
         Moline, Illinois 61265
         (309) 762-5342

```
{% endraw %}

## SATFIND2.BAS

{% raw %}
```bas
10 REM   Program to locate television satellites for a given latitude
20 REM           and longitude.  This program is useful for TVRO owners.
30 REM   Additional satellites can be placed in the data table.
40 REM
50 REM        P.G. Wohlmut   Copyright 1983    July 8, 1983
55 REM                        Updated  1985    July 9, 1985
60 REM
70 KEY OFF:WIDTH 40
100 PI=3.141592654#
110 DIM SAT$(50),ANGLE(50),CITY$(500),LAT(500,3),LONG(500,3)
120 FOR I= 1 TO 50:READ SAT$(I):IF SAT$(I)="end" THEN 181
130 READ ANGLE(I):NEXT I
140 DATA Aurora,143,Satcom F1R,139,Galaxy 1,134,Satcom F3,131,Comstar D4,127
150 DATA Westar 5,122.5,Spacenet 1,120,Anik A3,114,Anik B,109,Anik D1,104.5
160 DATA Westar 4,99,Telstar 301,96,Galaxy 3,93.5,Westar 3,91
170 DATA Comstar D3,87,Satcom F4,83,Westar 1/2,79
180 DATA end
181 TOPS=I-1
185 FOR I= 1 TO 500:READ CITY$(I):IF CITY$(I)="end" THEN 187 ELSE FOR J=1 TO 3:READ LAT(I,J):NEXT J:FOR J=1 TO 3:READ LONG(I,J)
186 NEXT J:NEXT I
187 CIT=I-1
190 RESTORE
210 CLS:FOR I= 1 TO CIT STEP 20:FOR J= 1 TO 20:K=I+J-1:IF CITY$(K)="end" THEN 212 ELSE PRINT USING "###: \                               \";J,CITY$(K):NEXT J
212 LOCATE 24,10:INPUT "Which city # (#,m=more) ";Z$
213 IF Z$="m" OR Z$="M" THEN CLS:GOTO 218 ELSE Z=VAL(Z$):IF Z<1 OR Z>20 THEN 218
214 Z=Z+I-1:DT=LAT(Z,1):MT=LAT(Z,2):ST=LAT(Z,3):DG=LONG(Z,1):MG=LONG(Z,2):SG=LONG(Z,3):CIT$=CITY$(Z):GOTO 240
218 NEXT I:LOCATE 24,1:PRINT "No more cities :";
220 INPUT"Your Latitude (dd,mm,ss) ";DT,MT,ST
230 INPUT"Your Longitude (dd,mm,ss) ";DG,MG,SG
240 SITELONG=DG+MG/60+SG/3600:SITELAT=DT+MT/60+ST/3600
250 SITELONG = SITELONG*PI/180:SITELAT=SITELAT*PI/180
270 CLS:PRINT ":  SATELLITE  : ELEVATION :  AZIMUTH  :"
280     PRINT ":             :  DD'MM'SS :  DD'MM'SS :"
290     PRINT "======================================="
300 FOR NUM=1 TO TOPS
310 SATLONG=ANGLE(NUM)*PI/180:GOSUB 420
320 ELD=INT(EL):ELM1=EL-ELD:ELM=INT(ELM1*60):ELS=CINT(ELM1*3600-ELM*60)
330 AZD=INT(AZ):AZM1=AZ-AZD:AZM=INT(AZM1*60):AZS=CINT(AZM1*3600-AZM*60)
340 PRINT USING ":\           \: ###'##'## : ###'##'## :";SAT$(NUM),ELD,ELM,ELS,AZD,AZM,AZS
350 NEXT NUM
360     PRINT "======================================="
365 LOCATE 23,1:PRINT CIT$;
370 LOCATE 24,1:PRINT USING "Latitude  ##'##'##";DT,MT,ST;
380 LOCATE 24,21:PRINT USING "Longitude ###'##'##";DG,MG,SG;
390 LOCATE 25,10:PRINT "Another location? ";
400 Z$=INKEY$:IF Z$="" THEN 400 ELSE IF Z$="Y" OR Z$="y" THEN PRINT Z$;:GOTO 210
410 END
420 ' calculate azimuth & elevation of satellite at site.
430 EL = ATN((COS(SATLONG-SITELONG)*COS(SITELAT)-0.15126)/SQR(1-(COS(SATLONG-SITELONG)*COS(SITELAT))^2))*180/PI
440 AZ=180+ATN(TAN(SATLONG-SITELONG)/SIN(SITELAT))*180/PI
450 RETURN
1000 DATA Albuquerque,35,0,0,106,40,0
1100 DATA Anchorage,61,10,0,150,0,0
1200 DATA Atlanta,33,30,0,84,20,0
1300 DATA Bakersfield,35,30,0,120,10,0
1400 DATA Baltimore,39,15,0,76,40,0
1500 DATA Bangor,44,45,0,68,45,0
1600 DATA Birmingham,33,30,0,86,45,0
1700 DATA Bismarck,46,45,0,100,45,0
1800 DATA Boston,42,20,0,71,5,0
1900 DATA Buffallo,43,0,0,78,50,0
2000 DATA Butte,46,0,0,112,30,0
2100 DATA Charleston,38,20,0,81,35,0
2200 DATA Chicago,41,10,0,87,40,0
2300 DATA Cleveland,41,20,0,81,40,0
2400 DATA Dallas,33,0,0,97,0,0
2500 DATA Denver,39,45,0,105,0,0
2600 DATA Des Moines,41,30,0,93,40,0
2700 DATA Detroit,42,30,0,83,0,0
2750 DATA Earth Station WD-72,39,53,57,86,12,04
2800 DATA Elko,40,50,0,115,40,0
2900 DATA Eureka,40,45,0,124,10,0
2950 DATA Fairbanks,64,38,50,148,0,0
3000 DATA Flagstaff,35,25,0,111,30,0
3100 DATA Fresno,36,55,0,119,45,0
3200 DATA Hartford,41,45,0,72,40,0
3300 DATA Honolulu,21,20,0,157,50,0
3400 DATA Houston,29,50,0,95,10,0
3500 DATA Indianapolis,39,45,0,86,10,0
3600 DATA Jackson,32,15,0,90,10,0
3700 DATA Jacksonville,30,15,0,81,40,0
3800 DATA Kansas City,39,0,0,94,30,0
3900 DATA Las Vegas,36,10,0,115,10,0
4000 DATA Little Rock,34,45,0,92,15,0
4100 DATA Los Angeles,34,0,0,118,15,0
4200 DATA Louisville,38,10,0,85,45,0
4300 DATA Miami,25,45,0,80,15,0
4400 DATA Milwaukee,43,0,0,88,0,0
4500 DATA Minneapolis,45,0,0,93,15,0
4600 DATA Nashville,36,15,0,86,45,0
4700 DATA New Orleans,30,0,0,90,0,0
4800 DATA New York,40,45,0,74,0,0
4900 DATA Omaha,41,15,0,96,0,0
5000 DATA Orlando,28,35,0,81,30,0
5100 DATA Philadelphia,40,0,0,75,0,0
5200 DATA Phoenix,33,30,0,112,5,0
5300 DATA Portland,45,30,0,122,35,0
5400 DATA Providence,41,45,0,71,15,0
5500 DATA Reno,39,30,0,119,45,0
5600 DATA Sacramento,38,40,0,121,30,0
5700 DATA Saint Louis,38,40,0,90,10,0
5800 DATA Salt Lake City,40,50,0,112,0,0
5900 DATA San Diego,33,0,0,117,10,0
6000 DATA Seattle,47,30,0,122,15,0
6100 DATA San Francisco,37,40,0,122,30,0
6200 DATA San Jose,37,15,0,121,50,0
6300 DATA Tampa,28,0,0,82,30,0
6400 DATA Tucson,32,10,0,111,35,0
6500 DATA Tulsa,36,10,0,96,0,0
6600 DATA Washington DC,38,55,0,77,5,0
6700 DATA Winston Salem,36,10,0,80,15,0
6800 DATA end
```
{% endraw %}

## SATFIND4.BAS

{% raw %}
```bas
1000 REM   Program to locate television satellites for a given latitude
1010 REM   and longitude.  This program is useful for TVRO owners.
1020 REM   Additional satellites can be placed in the data table.
1030 REM
1040 REM        P.G. Wohlmut   Copyright 1983    July 8, 1983
1050 REM                        Updated  1985    July 9, 1985
1060 REM
1070 REM   Rev. 11. February 1987 by Andrew Poth - Program restructured for
1080 REM   clarity.  Eliminated degrees to deg-min-sec conversion in output,
1090 REM   which had an algorithm error for negative values.
1100 REM   Fixed program to work on equator and in southern hemisphere.
1110 REM   Reformatted output for 80 column, 25 row display.  Added KEY ON
1120 REM   upon program termination to restore soft keys.
1130 LET PI=3.141592654#
1140 DIM CITY$(20),CIT$(20),LAT(20,3),LONG(20,3)
1150 KEY OFF
1160 RESTORE 8000        'This is where Earth station data is listed.
1170 CLS                 'Top of Main Loop.
1180 LET ENDFLAG=0
1190   FOR I= 1 TO 20    'Read city names, lat. & long. into arrays.
1200   READ CITY$(I)
1210   IF CITY$(I)="end" THEN LET I=I-1: LET ENDFLAG=1: GOTO 1310
1220     PRINT USING "###";I,
1230     LET CT$=LEFT$(CITY$(I),LEN(CITY$(I))-2)
1240     LET ST$=RIGHT$(CITY$(I),2)
1250       IF ST$="\\" THEN LET ST$=""   'No state name; blank it out.
1260     LET CIT$(I)=CT$ + "  " +ST$
1270     PRINT "  ";CIT$(I)
1280     READ LAT(I,1),LAT(I,2),LAT(I,3)
1290     READ LONG(I,1),LONG(I,2),LONG(I,3)
1300   NEXT I
1310   IF I=0 THEN 1420
1320   PRINT
1330   LINE INPUT "         Which city # (press <Retrn> for more) ?";Z$
1340   IF Z$="" AND ENDFLAG=0 THEN 1170
1350   IF Z$="" AND ENDFLAG=1 THEN 1420
1360   LET Z=VAL(Z$)
1370   IF Z<1 OR Z>I THEN 1330
1380   LET DT=LAT(Z,1) : LET MT=LAT(Z,2) : LET ST=LAT(Z,3)
1390   LET DG=LONG(Z,1) : LET MG=LONG(Z,2) : LET SG=LONG(Z,3)
1400   LET CT$=CIT$(Z)
1410   GOTO 1550
1420 BEEP
1430 CLS
1440 PRINT "END OF DATABASE - Input data manually for locations not listed."
1450 PRINT
1460 LINE INPUT "Your city name ? ";CT$
1470 PRINT
1480 PRINT "Enter POSITIVE integers (+deg,+min,+sec) for NORTH LATITUDES and"
1490 PRINT "for WEST LONGITUDES."
1500 PRINT "Enter NEGATIVE integers (-deg,-min,-sec) for SOUTH LATITUDES and"
1510 PRINT "for EAST LONGITUDES."
1520 PRINT
1530 INPUT "Your Latitude (deg,min,sec) ";DT,MT,ST
1540 INPUT "Your Longitude (deg,min,sec) ";DG,MG,SG
1550 CLS
1560 PRINT "  Observer site:  ";CT$
1570 LET LT$="  Lat. "
1580 LET LN$="       Long. "
1590 IF DT<0 OR MT<0 OR ST<0 THEN LET LT$=LT$ + "-" ELSE LET LT$=LT$ + "+"
1600 IF DG<0 OR MG<0 OR ST<0 THEN LET LN$=LN$ + "-" ELSE LET LN$=LN$ + "+"
1610 PRINT USING "&## ##'##!";LT$,ABS(DT),ABS(MT),ABS(ST),CHR$(34);
1620 PRINT USING "&### ##'##!";LN$,ABS(DG),ABS(MG),ABS(SG),CHR$(34)
1630 PRINT
1640 PRINT "  :  SATELLITE  :  AZIMUTH  : ELEVATION :"
1650 PRINT "  ======================================="
1660 LET SITELONG=DG+MG/60+SG/3600 : LET SITELAT=DT+MT/60+ST/3600
1670 LET SITELONG = SITELONG*PI/180 : LET SITELAT=SITELAT*PI/180
1680 RESTORE 9000                  'This is where satellite data is listed.
1690 FOR I=1 TO 500
1700 READ SAT$
1710 IF SAT$="end" THEN 1880
1720 READ ANGLE
1730 LET SATLONG=ANGLE*PI/180
1740 REM *** Calculate azimuth & elevation of satellite at site.
1750 LET EL = ATN((COS(SATLONG-SITELONG)*COS(SITELAT)-0.15126)/SQR(1-(COS(SATLONG-SITELONG)*COS(SITELAT))^2))*180/PI
1760 LET A=TAN(SATLONG-SITELONG)
1770 LET B=SIN(SITELAT)
1780 IF B<>0 THEN GOTO 1820        'These lines handle cases for ground
1790 LET AZ=180+SGN(TAN(A))*90     'stations along the equator, i.e., the
1800 GOTO 1850                     'denominator of equation goes to 0.
1810 'The following azimuth equation handles all other ground station sites:
1820 LET AZ=180+ATN(TAN(SATLONG-SITELONG)/SIN(SITELAT))*180/PI
1830 IF SITELAT<0 THEN LET AZ=AZ-180
1840 IF AZ<0 THEN LET AZ=AZ+360
1850 REM *** End of azimuth and elevation calculation.
1860 PRINT USING "\\:_ \          \:  ####.#   :  ####.#   :";"  ",SAT$,AZ,EL
1870 NEXT I
1880 PRINT "  ======================================="
1890 LOCATE 25,10:PRINT "Another location? ";
1900 LET Z$=INKEY$
1910 IF Z$="" THEN 1900   'Loop until a key is pressed.
1920 IF Z$="Y" OR Z$="y" THEN 1160
1930 LOCATE 25,10:PRINT "Press <Esc> to terminate";
1940 LET Z$=INKEY$
1950 IF Z$<>CHR$(27) THEN 1940
1960 CLS
1970 KEY ON
1980 END
8000 REM *** CITY NAME[STATE], LATITUDE (dms), LONGITUDE (dms) DATA ***
8010 REM  Make last 2 characters of City Name = \\ to blank State field.
8020 DATA AlbuquerqueNM,35,0,0,106,40,0
8030 DATA AnchorageAK,61,10,0,150,0,0
8040 DATA AtlantaGA,33,30,0,84,20,0
8050 DATA BakersfieldCA,35,30,0,120,10,0
8060 DATA BaltimoreMD,39,15,0,76,40,0
8070 DATA BangorME,44,45,0,68,45,0
8080 DATA BirminghamAL,33,30,0,86,45,0
8090 DATA BismarckND,46,45,0,100,45,0
8100 DATA BostonMA,42,20,0,71,5,0
8110 DATA BuffaloNY,43,0,0,78,50,0
8120 DATA ButteMT,46,0,0,112,30,0
8130 DATA CharlestonSC,38,20,0,81,35,0
8140 DATA ChicagoIL,41,10,0,87,40,0
8150 DATA ClevelandOH,41,20,0,81,40,0
8160 DATA DallasTX,33,0,0,97,0,0
8170 DATA DenverCO,39,45,0,105,0,0
8180 DATA Des MoinesIA,41,30,0,93,40,0
8190 DATA DetroitMI,42,30,0,83,0,0
8200 DATA Earth Station WD-72\\,39,53,57,86,12,04
8210 DATA ElkoNV,40,50,0,115,40,0
8220 DATA EurekaCA,40,45,0,124,10,0
8230 DATA FairbanksAK,64,38,50,148,0,0
8240 DATA FlagstaffAZ,35,25,0,111,30,0
8250 DATA FresnoCA,36,55,0,119,45,0
8260 DATA HartfordCT,41,45,0,72,40,0
8270 DATA HonoluluHI,21,20,0,157,50,0
8280 DATA HoustonTX,29,50,0,95,10,0
8290 DATA IndianapolisIN,39,45,0,86,10,0
8300 DATA JacksonMS,32,15,0,90,10,0
8310 DATA JacksonvilleFL,30,15,0,81,40,0
8320 DATA Kansas CityMO,39,0,0,94,30,0
8330 DATA Las VegasNV,36,10,0,115,10,0
8340 DATA Little RockAR,34,45,0,92,15,0
8350 DATA Los AngelesCA,34,0,0,118,15,0
8360 DATA LouisvilleKY,38,10,0,85,45,0
8370 DATA MiamiFL,25,45,0,80,15,0
8380 DATA MilwaukeeWS,43,0,0,88,0,0
8390 DATA MinneapolisMN,45,0,0,93,15,0
8400 DATA NashvilleTN,36,15,0,86,45,0
8410 DATA New OrleansLA,30,0,0,90,0,0
8420 DATA New YorkNY,40,45,0,74,0,0
8430 DATA OmahaNE,41,15,0,96,0,0
8440 DATA OrlandoFL,28,35,0,81,30,0
8450 DATA PhiladelphiaPA,40,0,0,75,0,0
8460 DATA PhoenixAZ,33,30,0,112,5,0
8470 DATA PortlandOR,45,30,0,122,35,0
8480 DATA ProvidenceRI,41,45,0,71,15,0
8490 DATA RenoNV,39,30,0,119,45,0
8500 DATA SacramentoCA,38,40,0,121,30,0
8510 DATA Saint LouisMI,38,40,0,90,10,0
8520 DATA Salt Lake CityUT,40,50,0,112,0,0
8530 DATA San DiegoCA,33,0,0,117,10,0
8540 DATA SeattleWA,47,30,0,122,15,0
8550 DATA San FranciscoCA,37,40,0,122,30,0
8560 DATA San JoseCA,37,15,0,121,50,0
8570 DATA TampaFL,28,0,0,82,30,0
8580 DATA TucsonAZ,32,10,0,111,35,0
8590 DATA TulsaOK,36,10,0,96,0,0
8600 DATA WashingtonDC,38,55,0,77,5,0
8610 DATA Winston SalemNC,36,10,0,80,15,0
8620 DATA BogotaSA,4,36,0,74,5,0
8630 DATA Buenos AiresSA,-34,-36,0,58,26,0
8640 DATA OttawaCN,45,24,0,75,43,0
8650 DATA QuitoSA,0,-14,0,78,30,0
8660 DATA Rio de JaneiroSA,-22,-54,0,43,13,0
8670 DATA TacubayaMX,19,24,0,99,12,0
8680 DATA end
9000 REM *** GEOSYNCHRONOUS SATELLITE NAME & LONGITUDE DATA ***
9010 DATA Anik A3,114,Anik B,109,Anik D1,104.5,Aurora,143
9020 DATA Comstar D3,87,Comstar D4,127
9030 DATA Galaxy 1,134,Galaxy 3,93.5
9040 DATA Satcom F1R,139,Satcom F3,131,Satcom F4,83,Spacenet 1,120
9050 DATA Telstar 301,96
9060 DATA Westar 1/2,79,Westar 3,91,Westar 4,99,Westar 5,122.5
9070 DATA end
9999 END
```
{% endraw %}

## TTY22.BAS

{% raw %}
```bas
5 'initialize
10 CLEAR: CLS: DEFINT A-Z: KEY OFF: FALSE=0: TRUE=NOT FALSE: OPTION BASE 0: DIM         A$(31,1): DIM C(128): DIVMSB=&H9: DIVLSB=&HE7: DIM S$(50): XX=1: LN=0
15 FOR I=1 TO 10: KEY I ,"": NEXT
17 XX=1:LN=0
20 GOTO 1000
25 '
30 REM *** The following gotos are dummies used as pointers.
40 GOTO 10000 ' *** subroutine to write header
50 GOTO 11000 ' *** subroutine to build translate table arrays.
60 GOTO 12000 ' *** subroutine to open comm file for receive.
70 GOTO 12500 ' *** open comm file for transmit
80 GOTO 13000 ' *** menu
85 GOTO 13500 ' ***change transmission speed
86 GOTO 13700 ' *** exit routines
90 GOTO 14000 ' *** Receive
95 GOTO 14800 ' *** receive error subroutine
100 GOTO 15000 ' *** Transmit
110 GOTO 15100 '*** transmit single character subroutine
120 GOTO 16000 ' *** function key routines
130 GOTO 18000 ' *** gosubs to send callsign -- cwid
200 '
999 '*** main program
1000 GOSUB 10000
1010 GOSUB 11000
1020 GOTO 13000
9997 END
9998 '
9999 REM *** Print Header
10000 LOCATE 3,5: PRINT CHR$(201);STRING$(29,205);CHR$(187)
10005 FOR I=4 TO 17: LOCATE I,5: PRINT CHR$(186);: LOCATE I,35:                          PRINT CHR$(186);: NEXT
10010 LOCATE 18,5: PRINT CHR$(200);STRING$(29,205);CHR$(188)
10020 COLOR 10,0: LOCATE 5,12: PRINT "***Murray/TTY***";: LOCATE 7,15: PRINT " de AA4L ";: LOCATE 9,12: PRINT "**Bob Johnson**";: COLOR 7,0
10030 LOCATE 11,14: PRINT "Version 2.2";: LOCATE 13,15: PRINT "2/14/1983";:              LOCATE 15,13: PRINT "Public domain";
10040 COLOR 18,0: LOCATE 20,5: PRINT "any key";: COLOR 2,0: BEEP
10050 Y$=INKEY$: IF Y$="" THEN 10050
10060 RETURN
10998 '
10999 REM *** Build translate tables
11000 'ascii to murray table for xmt
11020 DATA 0,0,0,0,0,0,0,133,0,0,2,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,         141,145,148,137,0,154,139,143,146,0,0,140,131,156,157,150,151,147,129,          138,144,149,135,134,152,142,158,0,0,0,153,0
11030 DATA 3,25,14,9,1,13,26,20,6,11,15,18,28,12,24,22,23,10,5,16,7,30,19,29,21,        17,0,133,0,0,0,0,3,25,14,9,1,13,26,20,6,11,15,18,28,12,24,22,23,10,5,16,        7,30,19,29,21,17,0,0,0,0,0,0
11040 FOR I=0 TO 128:READ C(I):NEXT
11050 ' *** In the transmit table, chararacters which require the figs shift            have had hex `100' (decimal 128) added to the murray value.
11060 'murray to ascii table for rcv
11070 DATA "","",E,3,"","",A,-," "," ",S,"",I,8,U,7,"","",D,$,R,4,J,',N,",",F,!,      C,":",K,(,T,5,Z,"",L,),W,2,H,#,Y,6,P,0,Q,1,O,9,B,?,G,&,f,f,M,.,X,/,V,;,         ~,~
11080 FOR I=0 TO 31: FOR J=0 TO 1: READ A$(I,J): NEXT: NEXT: A$(5,1)=CHR$(7):           A$(17,1)=CHR$(34): A$(2,0)=CHR$(10): A$(2,1)=CHR$(10): A$(8,0)=CHR$(13):        A$(8,1)=CHR$(13)
11090 RETURN
11998 '
11999 REM *** open comm file for receive
12000 OPEN "COM1:110,N,5,2,RS,CS0,DS0,CD0" AS #1:WIDTH #1,255
12005 V=INP(&H3F9) 'save int reg status
12006 OUT &H3F9,0 'disable comm interrupts
12010 OUT &H3FB,(INP(&H3FB) OR 128) 'enable speed change
12020 OUT &H3F8,DIVLSB: OUT &H3F9,DIVMSB 'change speed
12030 OUT &H3FB,(INP (&H3FB) AND 127) 'restore
12035 OUT &H3F9,V 'restore int reg status
12040 RETURN
12498 '
12499 REM *** open comm file for transmit
12500 OPEN "COM1:110,N,5,2,CS0,DS0,CD0" AS #1:WIDTH #1,255
12505 V=INP(&H3F9) 'save int reg status
12506 OUT &H3F9,0 'disable comm interrupts
12510 OUT &H3FB,(INP(&H3FB) OR 128) 'enable speed change
12520 OUT &H3F8,DIVLSB: OUT &H3F9,DIVMSB 'change speed
12530 OUT &H3FB,(INP (&H3FB) AND 127) 'restore
12535 OUT &H3F9,V 'restore int reg status
12540 RETURN
12998 '
12999 REM *** MENU
13000 CLS
13010 PRINT "      *** Function Menu ***"
13020 PRINT
13030 PRINT "<1> Change transmission speed."
13040 PRINT "    Note: Default is 45.45 Baud (60 wpm).": PRINT
13050 PRINT "<2> Exit to BASIC.": PRINT
13060 PRINT "<3> Exit to DOS.": PRINT
13065 PRINT "<4> Switch to 110 baud ASCII": PRINT
13070 PRINT "<"+CHR$(24)+"> Receive": PRINT
13080 PRINT "<"+CHR$(25)+"> Transmit": PRINT
13085 DEF SEG=0: POKE 1050,PEEK (1052): POKE &H417,&H40: DEF SEG
13090 BEEP: PRINT "Enter Choice: "
13100 CHOICE$=INKEY$
13105 IF CHOICE$="" THEN 13100
13106 CLS
13110 IF LEN(CHOICE$)=2 THEN IF RIGHT$(CHOICE$,1)="P" THEN 15000 ELSE IF              RIGHT$(CHOICE$,1)="H" THEN 14000 ELSE GOTO 13010
13120 IF VAL(CHOICE$)=1 THEN 13500 ELSE IF VAL(CHOICE$)=2 THEN 13700 ELSE             IF VAL(CHOICE$)=3 THEN 13700 ELSE IF VAL(CHOICE$)=4 THEN CHAIN "asctty"         ELSE 13010
13130 STOP
13498 '
13499 REM *** Speed change
13500 CLS
13505 PRINT "       ** Select Transmission Speed **": PRINT
13510 PRINT "<1> 60 wpm .... 45.45 Baud": PRINT
13520 PRINT "<2> 75 wpm .... 56.92 Baud": PRINT
13530 PRINT "<3> 100 wpm ... 74.20 Baud": PRINT
13540 BEEP: PRINT "Enter choice: "
13550 CHOICE$=INKEY$
13560 IF CHOICE$="" THEN 13550
13570 CHOICE=VAL(CHOICE$)
13580 ON CHOICE GOTO 13600,13640,13680
13590 GOTO 13550
13595 '
13600 DIVMSB=&H9: DIVLSB=&HE7: GOTO 13000
13639 '
13640 DIVMSB=&H7: DIVLSB=&HE8: GOTO 13000
13679 '
13680 DIVMSB=&H6: DIVLSB=&H11: GOTO 13000
13698 '
13699 REM *** Exit to BASIC
13700 PRINT : PRINT : PRINT "Off at ";DATE$;"    ";TIME$
13710 IF PRN THEN PRINT#2,: PRINT#2,"Off at ";DATE$;"     ";TIME$
13720 CLOSE
13730 IF VAL(CHOICE$)=3 THEN 13750
13740 END
13750 SYSTEM
13800 STOP
13998 '
13999 REM *** Receive Routine
14000 PRINT :PRINT :PRINT DATE$ SPC(5) TIME$
14003 Y=CSRLIN
14005 SHFT=0
14010 LOCATE 25,1: COLOR 0,7
14020 PRINT" F1=> cr & lf on/off ... F2=> printer on/off ... F10=> menu ... <"+CHR$(25)+">=> transmit ";: COLOR 7,0:LOCATE Y,1
14025 DEF SEG =0: POKE 1050, PEEK(1052): DEF SEG
14030 ON KEY(1) GOSUB 14900: KEY(1) ON
14040 ON KEY(2) GOSUB 14920: KEY(2) ON
14050 ON KEY(10) GOSUB 14940: KEY(10) ON
14060 ON KEY(14) GOSUB 14960: KEY(14) ON
14065 GOSUB 12000
14066 ON ERROR GOTO 14800
14070 IF MENU.RET OR XMT.FL THEN 14080 ELSE 14100
14080 KEY(1) OFF: KEY(2) OFF: KEY(10) OFF: KEY(14) OFF: ON ERROR GOTO 0:              CLOSE #1
14090 IF MENU.RET THEN MENU.RET = FALSE: GOTO 13000
14095 IF XMT.FL THEN XMT.FL=FALSE: GOTO 15000
14099 '
14100 IF EOF(1) THEN 14400
14110 X$=INPUT$(LOC(1),#1)
14120 FOR I=1 TO LEN(X$)
14130   MU$=MID$(X$,I,1): IF ASC(MU$)>31 THEN 14210
14140   AS$=A$(ASC(MU$),SHFT)
14150   IF AS$=CHR$(13) THEN 14210
14160   IF AS$=" " THEN SHFT=0: GOTO 14200
14170   IF AS$=CHR$(10) THEN SHFT=0: IF CRLF THEN AS$=CHR$(13) ELSE AS$=" ":            GOTO 14200
14180   IF AS$="f" THEN SHFT=1: GOTO 14210
14190   IF AS$="~" THEN SHFT=0: GOTO 14210
14200   PRINT AS$;: IF PRN THEN PRINT #2,AS$;
14210   NEXT
14220 GOTO 14070
14399 '
14400 K$=INKEY$: IF K$="" THEN 14070
14405 IF LEN(K$)>1 THEN 14070
14410 Y=CSRLIN: X=POS(0)
14420 S$(LN)=S$(LN)+K$
14425 IF K$=CHR$(13) THEN LN =LN+1: XX=1: GOTO 14070
14430 LOCATE 25,XX,1
14440 PRINT K$+" █";
14450 XX=XX+1
14460 IF XX=>75 THEN S$(LN)=S$(LN)+CHR$(13): XX=1: LN=LN+1
14470 LOCATE Y,X
14480 GOTO 14070
14799 '
14800 IF ERR=25 OR ERR=27 THEN 14810 ELSE 14820
14810 PRINT: PRINT "check printer": BEEP: PRINT: RESUME
14820 IF ERR=57 THEN RESUME NEXT
14830 ON ERROR GOTO 0
14840 '
14899 '
14900 IF CRLF THEN CRLF=FALSE ELSE CRLF=TRUE
14905 RETURN
14910 '
14920 IF NOT PRN THEN OPEN "lpt1:" FOR OUTPUT AS #2: PRN=TRUE: WIDTH #2,255:          RETURN
14925 CLOSE #2: PRN=FALSE: RETURN
14930 '
14940 MENU.RET=TRUE: RETURN
14950 '
14960 XMT.FL=TRUE: RETURN
14970 '
14998 '
14999 '*** transmit
15000 PRINT: PRINT: PRINT DATE$ SPC(5) TIME$
15010 Y=CSRLIN
15020 SHIFT=FALSE
15030 COLOR 0,7: LOCATE 25,1
15040 PRINT" F1-F3=>Msg1-3 \ F4=>CQ \ F5=>de \ F6=>Test \ F7=>id \ F10=>Menu \ "+CHR$(24)+"=>Receive  ";
15050 COLOR 7,0: LOCATE Y,1,1
15060 GOSUB 12500
15070 DEF SEG=0: POKE 1050,PEEK(1052): DEF SEG
15080 X$=INKEY$: IF X$="" THEN 15080
15090 IF LEN(X$)>1 THEN 15200
15092 GOSUB 15100
15093 GOTO 15080
15098 '
15099 '*** this subroutine converts a character from ascii to murray                   and transmits it
15100 IF X$=CHR$(13) THEN PRINT X$;: PRINT #1,CHR$(2)+CHR$(8)+CHR$(31);: SHIFT=FALSE: RETURN
15110 IF X$=" " THEN PRINT X$;: PRINT #1,CHR$(4)+CHR$(31);: SHIFT=FALSE: RETURN
15120 MU=C(ASC(X$)): IF MU=0 THEN RETURN
15130 IF MU>127 THEN IF NOT SHIFT THEN SHIFT=TRUE: PRINT #1,CHR$(27);
15135 IF MU>127 THEN MU=MU-128: GOTO 15150
15140 IF SHIFT THEN SHIFT=FALSE: PRINT #1,CHR$(31);
15150 PRINT #1,CHR$(MU);: PRINT X$;
15160 RETURN
15199 '
15200 Z=INSTR(";<=>?@ADHC",RIGHT$(X$,1))
15210 ON Z GOTO 16000,16100,16200,16300,16400,16500,16600,16700,16800,16900
15220 GOTO 15080
15998 '
15999 '*** routines to handle function keys
16000 FILENM$="msg1"
16010 GOSUB 17000
16020 GOTO 15080
16099 '
16100 FILENM$="msg2"
16110 GOSUB 17000
16120 GOTO 15080
16199 '
16200 FILENM$="msg3"
16210 GOSUB 17000
16220 GOTO 15080
16299 '
16300 MSG$=CHR$(13)+"cq cq cq cq cq cq cq de aa4l aa4l aa4l bob in raleigh nc"
16310 GOSUB 17500
16320 GOTO 15080
16399 '
16400 MSG$=CHR$(13)+"de aa4l aa4l bob in raleigh nc"
16410 GOSUB 17500
16420 GOTO 15080
16499 '
16500 MSG$=CHR$(13)+"the quick brown fox jumped over the lazy dog's back"+CHR$(13)+"ryryryryryryryryryryryryryryryryryryryryryryryryryryryry"+CHR$(13)+"1m2m3m4m5m6m7m8m9m0"
16510 GOSUB 17500
16520 GOTO 15080
16599 '
16600 MSG$=CHR$(13)+"cw id:"
16610 GOSUB 17500
16620 CLOSE #1 'close file to purge buffer
16625 GOSUB 12500 'reopen file to key transmitter
16630 GOSUB 18000
16640 GOTO 15080
16699 '
16700 CLOSE#1: LOCATE 25,1: PRINT SPACE$(79): GOTO 13000
16799 '
16800 CLOSE#1: GOTO 14000
16888 '
16889 '***transmit keybd buffer
16900 FOR II = 0 TO LN-1
16910 MSG$=S$(II)
16920 GOSUB 17500
16925 S$(II)=""
16930 NEXT II
16940 LN=0: XX=1
16950 GOTO 15080
16998 '
16999 '*** subroutine to get a message from disk and transmit it
17000 ON ERROR GOTO 17300
17010 OPEN FILENM$ FOR INPUT AS #3
17020 WHILE NOT EOF(3)
17030   LINE INPUT #3,M$
17040   MSG$=CHR$(13)+M$
17050   GOSUB 17500
17060 WEND
17070 CLOSE #3
17075 ON ERROR GOTO 0
17080 GOTO 15080
17298 '
17299 '*** disk error
17300 IF ERR=53 OR ERR=71 OR ERR=72 THEN PRINT"***Can't read file for ";FILENM$;"***";:CLOSE #3: RESUME 15080
17310 ON ERROR GOTO 0
17498 '
17499 '*** subroutine to transmit a msg
17500 FOR I=1 TO LEN(MSG$)
17510   X$=MID$(MSG$,I,1)
17520   GOSUB 15100
17530 NEXT
17540 RETURN
17998 '
17999 '*** cwid
18000 SOUND 32767,20
18010 GOSUB 18500
18020 GOSUB 18600
18030 GOSUB 18700 'A
18040 GOSUB 18500
18050 GOSUB 18600
18060 GOSUB 18700 'A
18070 GOSUB 18500
18080 GOSUB 18500
18090 GOSUB 18500
18100 GOSUB 18500
18110 GOSUB 18600
18120 GOSUB 18700 '4
18130 GOSUB 18500
18140 GOSUB 18600
18150 GOSUB 18500
18160 GOSUB 18500
18170 SOUND 32767,20  'L
18180 SOUND 32767,1
18190 RETURN
18498 '
18499 '***DIT SUBROUTINE
18500 SOUND 800,1.5: MOTOR 1
18510 SOUND 32767,1.5: MOTOR 0
18520 RETURN
18598 '
18599 '***dah subroutine
18600 SOUND 800,4.5: MOTOR 1
18610 SOUND 32767,1.5: MOTOR 0
18620 RETURN
18698 '
18699 '***inter-character space subroutine
18700 SOUND 32767,3
18710 RETURN
```
{% endraw %}

## VHF-YAGI.BAS

{% raw %}
```bas
100 'This program calculates the demensions of a VHF Yagi antenna.
110 '
120 'Design assumptions are:
130 '  1. Driven element length in inches is 5600/frequency in MHZ.
140 '  2. The reflector is 5% longer than the driven element.
150 '  3. Reflector and first director spacing is 0.2 wavelengths from driven.
160 '  4. The first director is 5% shorter than the driven element.
170 '     Subsequent director lengths are calculated by adding 1% to
180 '     the shortening factor of the previous director. For example,
190 '     the 2nd director is 6% shorter than the driven element,
200 '     the 3rd is 7% shorter, the 4th, 8% shorter, etc.
210 '  5. Director spacing is 110% of previous spacing. Spacing starts
220 '     at 0.2 wavelengths.
230 '
240 ' The program is well documented via remarks, so any of the above
250 ' assumptions may be easily changed.
260 '
270 '-------------------- PROGRAM BEGINS --------------------------------------
280 '
290 CLS
300 DEFINT I
302 PRINT "THE OUTPUT OF THIS PROGRAM IS TO A PRINTER."
304 PRINT "TURN PRINTER ON AND ALIGN PAPER BEFORE PROCEEDING."
306 PRINT
310 INPUT"WHAT FREQUENCY (MHZ) ";FREQ
320 INPUT"HOW MANY ELEMENTS (3 MINIMUM) ";ELNO
330 WL = 11808/FREQ 'wavelength in free space (inches)
340 DR = 5600/FREQ 'driven element length (inches)
350 RF = DR * 1.05 'reflector length
360 SPR = WL * 0.2 'reflector spacing
370 PL(1) = DR * 0.95'first director length
380 SPP(1) = WL * 0.2 'first director spacing
390 FOR I = 2 TO (ELNO -2)
396 PRINT
400 SPP(I) = SPP(I-1) * 1.1 'each director spacing 10% greater than previous
410 PL(I) = DR * (100 - (4 + I))*0.01 'director length
420 LN1 = LN1 + SPP(I) 'keep track of overall length
430 NEXT
440 DEF FNX(X) = INT(X*100+0.5)*0.01 'function to round off printing to 2 dec.
450 LNT = SPR + SPP(1) + LN1 'total beam length
460 LPRINT"DESIGN DATA FOR VHF YAGI BEAM ANTENNA: "
470 LPRINT
480 LPRINT"---- DESIGN FREQUENCY IS";FREQ;" MHZ"
490 LPRINT"---- TOTAL NUMBER OF ELEMENTS IS";ELNO
500 LPRINT
510 LPRINT
520 LPRINT TAB(35);"LENGTH IN INCHES"
530 LPRINT "REFLECTOR";TAB(40);FNX(RF)
540 LPRINT "REFLECTOR TO DRIVEN";TAB(41);FNX(SPR)
550 LPRINT "DRIVEN";TAB(40);FNX(DR)
560 LPRINT "DRIVEN TO 1st DIRECTOR";TAB(41);FNX(SPP(1))
570 LPRINT "1st DIRECTOR LENGTH";TAB(40);FNX(PL(1))
580 LPRINT
590 FOR I = 2 TO (ELNO -2)
600 LPRINT"DIRECTOR No.";I;" LENGTH IS";FNX(PL(I));" INCHES"
610 LPRINT "SPACED";FNX(SPP(I));" INCHES FROM DIRECTOR No.";I-1
620 LPRINT
630 NEXT
640 LPRINT "------ OVERALL BEAM LENGTH IS";FNX(LNT);" INCHES ------"
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0436

     Volume in drive A has no label
     Directory of A:\

    ASCTTY   BAS      5376   5-09-85  10:04a
    BAUDOTC  EXE     35968   5-09-85   9:57a
    CQ       BDT       256   5-09-85   9:58a
    CWID     BDT       128   5-09-85   9:58a
    CWRCV    BAS      2688   5-09-85  10:04a
    CWRCV    HLP      1152   5-09-85  10:05a
    EZCODE1  BAS      6400   5-15-85   1:22p
    FILES436 TXT      2324   3-16-89  10:48a
    FINDSAT  BAS     16640   4-03-85   9:41a
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       771   3-09-89  10:27a
    HAMCALC  BAS     11463   7-14-85   4:57p
    HAMHELP  BAS      3712   4-25-85  12:47p
    HAMMODEM BAS      2432   5-09-85  11:07a
    LISTCOUN TXT     37317   5-02-85   6:04p
    MANUAL   BAT       147   4-05-88   8:13a
    MORSE1   BAS      5120   4-03-85   9:36a
    MORSE2   BAS      5120   3-13-85   4:07p
    OPTICS   COM     13758   8-31-85  10:58a
    OPTICS   PAS      3968   8-31-85   9:57a
    OSCAR    BAS      3840   5-09-85  10:02a
    PARABOLA BAS      5248   4-03-85   9:45a
    RTTY     DOC      7936   5-09-85  10:01a
    RTTYSUBS BDT       512   5-09-85   9:59a
    RTTYTALK BAS     47932   3-04-84  10:44a
    RTTYTALK DOC      5801   7-01-84   1:01p
    RYT      BDT       128   5-09-85   9:59a
    SATFIND2 BAS      4309   7-11-85   6:17p
    SATFIND4 BAS      6656   2-11-87  11:27a
    TTY      BAT       128   5-09-85   9:43a
    TTY      DOC      6400   5-09-85   9:44a
    TTY22    BAS      8576   5-09-85   9:42a
    VHF-YAGI BAS      2438   8-23-85  10:02p
           33 file(s)     254682 bytes
                           48128 bytes free
