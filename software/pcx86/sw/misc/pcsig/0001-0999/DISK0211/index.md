---
layout: page
title: "PC-SIG Library Disk #211"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0211/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0211"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "JUSTIFY AND SPEED READ"

    JUSTIFY is a proportional spacing device for text printed on IBM,
    EPSON or STAR Micronics printers.  The Speed Reading Demo gives you a
    solid overview of this commercial program's style and exercises.
    LINEBUG is a very useful BASIC utility to verify line numbering.
    
    System Requirements: Two drives, BASIC
    
    How to Start: After loading BASICA from DOS, switch disks to drive
    A: and type SR.BAS or LINEBUG.BAS.  Run JUSTIFY.EXE directly from
    DOS.
    
    File Descriptions:
    
    LINEBUG  BAS  Part of JUSTIFY.EXE
    TIMED    TXT  Part of Speed Reading demo
    SR       BAS  Speed Reading demo  (BBP)
    JUSTIFY  EXE  Right/left micro-justifies text  (COMFAX)
    JUSTIFY  ASM  Assembler source code
    EYE      TXT  Part of Speed Reading demo
    ART      TXT  Part of Speed Reading demo
    TUTOR2        Part of JUSTIFY.EXE
    TUTORIAL      Part of JUSTIFY.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LINEBUG.BAS

```bas
10  CLS
13  LOCATE 3,29
16  PRINT "LINEBUG BY COMFAX"
20  LOCATE 5,25
30  PRINT "COPYRIGHT (C) 1984 COMFAX"
40  LOCATE 10,1
50  INPUT "ENTER PROGRAM NAME TO BE CHECKED ";PRG$
100 OPEN "I",#1,PRG$
250 OLDLINNO$="00000"
300 GOTO 500
400 IF EOF(1) GOTO 2300
500 LINE INPUT #1,IMAGE$
550 LINNO$="00000"
600 XX=1
700 IF MID$(IMAGE$,XX,1)=" " GOTO 1100
750 IF MID$(IMAGE$,XX,1) < "0" GOTO 2100
760 IF MID$(IMAGE$,XX,1) > "9" GOTO 2100
800 XX=XX+1
900 IF XX>6 GOTO 2100
1000 GOTO 700
1100 IF XX<2 GOTO 2100
1200 XX=XX-1
1300 YY=6-XX
1400 HLIN$ = MID$(IMAGE$,1,XX)
1500 MID$(LINNO$,YY)=HLIN$
1600 IF OLDLINNO$ >= LINNO$ GOTO 1900
1700 OLDLINNO$=LINNO$
1800 GOTO 400
1900 PRINT "LINE NO. ERROR ";LINNO$
2000 GOTO 1700
2100 HLD$=MID$(IMAGE$,1,20)
2150 PRINT "ILLEGAL LINE NO. ";HLD$
2200 GOTO 400
2300 CLOSE #1
2400 SYSTEM
```

## SR.BAS

```bas
0 '  "sr.BAS  4/16/84 ...JC
1 GOTO 3000
2 '==================INITIALIZATION \/========================
3 FOR I%=1 TO 10:KEY I%,STR$(I%):NEXT: ' ENABLE FUNCTION KEYS
4 COMMON FILE$,NWPM,S$ ' FOR HARD-code overlaying)
5 DIM TEXT$(500), I$(30), FIRST%(40), NUM$(50), NUM%(50),N$(20),MORT.AGE(125),R(20):S$="":REALDATE$=DATE$
6  DEF FNEQUAL(R$)=MID$(AA$,2,1)=R$
7 SPECIAL$="!#$^&|\": TRUE%=-1: FALSE%=0:FLSHRATE=4
8 DEFINT I,D,L,N:LESSON=LESSON%
9 BEGINTIME$="00:00:00":T$=TIME$
10 DEF FNHERE%(DUMMY$)=0<INSTR(SPECIAL$,LEFT$(DUMMY$,1)) AND DUMMY$<> ""
11 DEF FNUPPER$(DUMMY$)=CHR$(ASC(DUMMY$)+32*(ASC(DUMMY$)>90))
12 DEF FNLFT$(DUMMY$)=LEFT$(DUMMY$,1)
13 DEF FNCENTER(X)=INT(((80-X)/2))
14 DEF FNC(X)=INT(((80-X)/2))
15 DEF FN TIMER(T$)=((VAL(LEFT$(TIME$,2))*60*60)+(VAL(MID$(TIME$,4,2))*60)+VAL(RIGHT$(TIME$,2))) - ((VAL(LEFT$(T$,2))*60*60)+(VAL(MID$(T$,4,2))*60)+VAL(RIGHT$(T$,2)))
16 DEF SEG=0
17 DEF FNCENTER%(X$)=INT(((80-LEN(X$))/2))
18 RETURN
19 '---------------  wait for space bar \/
20 IF MESSAGE$="" THEN MESSAGE$="Please Press <SPACE BAR> to Continue."
21 LOCATE 25,FNCENTER(LEN(MESSAGE$)):PRINT MESSAGE$;
22 DEF SEG=0:POKE 1050,PEEK(1052)
23 AA$="":WHILE AA$="":AA$=INKEY$:WEND:' get a keypress
24 IF AA$<>CHR$(32) AND AA$<>CHR$(45) AND AA$<>CHR$(43) THEN GOSUB 90:GOTO 23
25 MESSAGE$="":RETURN
29 IF VAL(LEFT$(TIME$,2))  >=  23 THEN TIME$="00":BEGINTIME$=TIME$:'    Change clock only when necessary
30 T=((VAL(RIGHT$(TIME$,2)))+(VAL(MID$(TIME$,4,2))*60)+(VAL(LEFT$(TIME$,2))*3600))
31 S=VAL(RIGHT$(TIME$,2)):M=VAL(MID$(TIME$,4,2))*60:H=VAL(LEFT$(TIME$,2))*3600
32 IF (T+DELAY%) - (S+M+H) > 0 THEN 31
33 RETURN
34 '----------------- short pause \/
35 FOR I=1 TO PAUSE:NEXT:RETURN
39 '----------------- get a character \/
40 AA$="":WHILE AA$="":AA$=INKEY$:WEND:RETURN 'aa$
45 AA$="":WHILE AA$="":GOSUB 92:AA$=INKEY$:WEND:RETURN 'aa$
49 '----------------- print header \/
50  ' header at line 1 in inverse
51  IF HEADER$="" THEN HEADER$="Speed Reading . . . The Computer Course"
52  LOCATE 1,1:COLOR 0,7:PRINT SPACE$(FNCENTER(LEN(HEADER$)));" ";HEADER$;" ";:     WHILE POS(0)<80:PRINT " ";:WEND:PRINT " ";:COLOR 7,0
53  HEADER$="Speed Reading . . . The Computer Course":RETURN
54 LOCATE 3,1:PRINT STRING$(80,45)
56 RETURN
60  LOCATE Y%,X%:PRINT PROMPT$;" ";:RETURN
69 ' ----NWPM from GWPM \/
70 NWPM = GWPM-5*WRONG
79 '--------------- "correct answer" sound \/
80 SOUND 600,1: SOUND 750,1: SOUND 600,2: RETURN
84 '--------------- "incorrect answer" sound \/
85 SOUND 90,8:SOUND 50,12:RETURN
89 '--------------- input error sound \/
90 SOUND 1800,1:RETURN
91 STOP'---------- prompt for spacebar when it is midnite? \/
92 IF TIME$="00:00:00" THEN Y%=CSRLIN:X%=POS(0):LOCATE 25,1,0:COLOR 0,7:PRINT SPACE$(FNC(LEN(FTR$)-1));" ";FTR$;" ";:WHILE POS(0)<79:PRINT " ";:WEND:PRINT " ";:COLOR 7,0:PAUSE=4000:GOSUB 35:LOCATE 25,1:PRINT SPACE$(79);:LOCATE Y%,X%,1:RETURN ELSE RETURN
94 '---------------  sound for page turn \/
95 SOUND 200,2:RETURN
99 '--------------- read line of input as <A$> \/
100 A$="":AA$="":LOCATE ,,1
101 IF SPACEMODE%=TRUE% THEN TIME$="23:59:"+DL$
105 IF SPACEMODE%=TRUE% THEN GOSUB 45 ELSE GOSUB 40
106 IF SPACEMODE%=TRUE% THEN IF AA$=CHR$(32) THEN SPACEMODE%=FALSE%:GOTO 180
110 IF AA$=CHR$(13) THEN SPACEMODE%=FALSE%:GOTO 180
112 IF AA$=CHR$(8) AND LEN(A$)>0 THEN PRINT CHR$(29);" ";CHR$(29);:IF LEN(A$)>1 THEN A$=LEFT$(A$,LEN(A$)-1):GOTO 105 ELSE A$="":GOTO 105
113 IF AA$=CHR$(8) THEN GOSUB 90: GOTO 105
120 IF ASC(AA$)<32 THEN GOSUB 90: GOTO 105
140 IF LEN(A$)=MAXLENGTH THEN GOSUB 90 : GOTO 105
150 PRINT AA$; : A$=A$+AA$ : GOTO 105
180 LOCATE ,,0 : RETURN
199 '-------------- output simple text screens \/
200 LN=FILEPOS:M%=LN:FIRST%(1)=LN:PAGE%=1
210 VPOS=1
212 IF FNHERE%(TEXT$(LN)) THEN GOSUB 10000 ELSE LOCATE VPOS,20:PRINT TEXT$(LN);
260 LN=LN+1:VPOS=VPOS+2
265 IF TEXT$(LN)="" THEN VPOS=VPOS-1
270 IF TEXT$(LN)<>"STOP" AND TEXT$(LN)<>"END" THEN 212
271 IF PAGE%>1 THEN MESSAGE$="Press <SPACE BAR> Or + To Continue, - To Review.":GOSUB 20:CLS ELSE MESSAGE$="Press <SPACE BAR> To Continue.":GOSUB 20
272 IF AA$=CHR$(45) AND PAGE%=1 THEN DUMMY=0 ELSE CLS
276 IF TEXT$(LN)="STOP" THEN IF AA$<>CHR$(45) THEN FIRST%(PAGE%)=M%:M%=LN+1:LN=LN+1:PAGE%=PAGE%+1:GOTO 210 ELSE IF PAGE%>1 THEN FIRST%(PAGE%)=M%:LN=FIRST%(PAGE%-1):M%=FIRST%(PAGE%-1):PAGE%=PAGE%-1:GOTO 210 ELSE GOTO 271
277 IF TEXT$(LN)="END" THEN IF AA$<>CHR$(45) THEN GOTO 280 ELSE IF PAGE%>1 THEN FIRST%(PAGE%)=M%:LN=FIRST%(PAGE%-1):M%=FIRST%(PAGE%-1):PAGE%=PAGE%-1:GOTO 210
280 FILEPOS=LN+1:RETURN
300 LN=FILEPOS:WRONG=0:M%=LN:FIRST%(1)=LN:PAGE%=1
310 VPOS=1
315 IF FNHERE%(TEXT$(LN)) THEN GOSUB 10020 ELSE LOCATE VPOS,20:PRINT TEXT$(LN);
360 LN=LN+1:VPOS=VPOS+2
365 IF TEXT$(LN)="" THEN VPOS=VPOS-1
368 IF FUNCT$="ASKM" AND TEXT$(LN) = "ENDM"  THEN GOSUB 20:GOTO 410
369 IF FUNCT$="ASKM" AND TEXT$(LN)="STOPM" THEN GOSUB 20:CLS:IF AA$<>CHR$(13) THEN FIRST%(PAGE%)=M%:M%=LN+1:LN=LN+1:PAGE%=PAGE%+1:GOTO 310 ELSE IF PAGE%>1 THEN FIRST%(PAGE%)=M%:LN=FIRST%(PAGE%-1):M%=FIRST%(PAGE%-1):PAGE%=PAGE%-1:GOTO 31 ELSE GOSUB 35000:
370 IF TEXT$(LN) <> "STOP" AND TEXT$(LN)<>"END" THEN 315
371 IF TEXT$(LN)="END" AND FUNCT$="ASK" THEN GOSUB 20:GOTO 410: ' quiz section\/
372 INFO$=TEXT$(LN+1):NUMAN=VAL(LEFT$(INFO$,1)):FOR J=1 TO NUMAN:CHOICE$(J)=MID$(INFO$,J+1,1):NEXT
373 RMD$=MID$(INFO$,NUMAN+2):IF FUNCT$="QUIZ" THEN CORRECT$=RMD$ ELSE FOR J=1 TO NUMAN:BRANCH(J)=VAL(MID$(RMD$,INSTR(RMD$,CHOICE$(J))+1,3)):NEXT
374 QUEST$=TEXT$(LN+2)
378 LOCATE 25,40-LEN(QUEST$)/2-1,1:PRINT QUEST$;": ";
380 GOSUB 40:A$=AA$
385 VALID=0:FOR J=1 TO NUMAN:IF ASC(A$)=ASC(CHOICE$(J)) OR ASC(A$)=ASC(CHOICE$(J))+32 THEN VALID=-1
388 NEXT
389 IF NOT VALID THEN GOSUB 90:GOTO 380
390 COLOR 23:PRINT CHR$(ASC(A$)+32*(ASC(A$)>90));:COLOR 7,0
391 LOCATE ,,0:IF FUNCT$="ASK" OR FUNCT$="ASKM" THEN 420
392 FOR J=1 TO 200:NEXT
394 LOCATE 22,1:PRINT SPACE$(79);
395 IF A$=CORRECT$ OR A$=CHR$(ASC(CORRECT$)+32) THEN LOCATE 22,29:PRINT"That's correct, "READER$".":GOSUB 80: ELSE LOCATE 22,19:PRINT"I'm sorry, "READER$", the correct answer is "CORRECT$".":WRONG=WRONG+1:GOSUB 85
400 GOSUB 20
405 IF TEXT$(LN)<>"END" THEN CLS:LN=LN+3:GOTO 310
410 CLS:FILEPOS=LN+(3*(-1*(FUNCT$="QUIZ"))-(FUNCT$="ASK" OR FUNCT$="ASKM")):RETURN
411 ' end of quiz section /\
412 ' ask the user what he wants to do and go there \/
420 J=1
422 LN=LN+3
425 IF A$ = CHOICE$(J) OR ASC(A$)=ASC(CHOICE$(J))+32 THEN LN=LN+BRANCH(J):CLS: GOTO 310 ELSE J=J+1:GOTO 425
450 LN=LN-REV:CLS:GOTO 310
499 '-------------- output timed readings -- return <GWPM> \/
500 LN=FILEPOS
502 IF VAL(LEFT$(TIME$,2))  >=  23 THEN TIME$="00"'    Change clock only when necessary
503 T$=TIME$
510 VPOS = 1
515 IF FNHERE%(TEXT$(LN)) THEN GOSUB 10020 ELSE LOCATE VPOS,20:PRINT TEXT$(LN);
560 LN=LN+1:VPOS=VPOS+2
565 IF TEXT$(LN)="" THEN VPOS=VPOS-1
570 IF TEXT$(LN) <> "STOP" AND TEXT$(LN)<>"END" THEN 515 ELSE GOSUB 20:CLS:IF TEXT$(LN)="STOP" THEN LN=LN+1: GOTO 510 ELSE 580
580 FILEPOS=LN+1:TYME=FN TIMER(T$):GWPM=CINT(WDCOUNT/TYME*60):RETURN
585 FILEPOS=LN+1:GWPM=CINT(WDCOUNT/TYME*60):RETURN
599 '-------------- output accelerated readings \/
600 LN=FILEPOS
601 IF NUMSCREENS%=0 THEN NUMSCREENS%=1
602 IF WREC=1 THEN DELAY%=(NUMWORDS%/(SPD/60))/NUMSCREENS%:GOTO 610
605 DELAY%=(NUMWORDS%/((NWPM+NWPM/10)/60))/NUMSCREENS%
610 VPOS=1
615 IF FNHERE%(TEXT$(LN)) THEN GOSUB 10020 ELSE LOCATE VPOS,20:PRINT TEXT$(LN);
660 LN=LN+1:VPOS=VPOS+2
665 IF TEXT$(LN)="" THEN VPOS=VPOS-1
670 IF TEXT$(LN) <> "STOP" AND TEXT$(LN)<>"END" THEN 615 ELSE GOSUB 29:CLS:IF TEXT$(LN)="STOP" THEN LN=LN+1:GOTO 605 ELSE 680
680 FILEPOS=LN+1:RETURN
699 '-------------- output rapid preception warm-up drills \/
700 NUM%=VAL(MID$(FUNCT$,5)):LN=FILEPOS-1
703 PAUSE=1200:GOSUB 35:LOCATE 10,41:PRINT CHR$(254):GOSUB 95:GOSUB 35
705 FOR L%=1 TO NUM%
708 IF L%=INT(NUM%/2) THEN GOSUB 800:CLS :PAUSE =1200:GOSUB 35:LOCATE 10,41:PRINT CHR$(254):GOSUB 95:GOSUB 35
710 LN=LN+1:LOCATE 12,41-LEN(TEXT$(LN))/2:PRINT TEXT$(LN)
715 FOR I=1 TO 1139/FLSHRATE:NEXT:LOCATE 12,41-LEN(TEXT$(LN))/2:PRINT SPACE$(LEN(TEXT$(LN)))
720 DELAY=1:GOSUB 29
725 LOCATE 12,41-LEN(TEXT$(LN))/2:PRINT TEXT$(LN):GOSUB 29:LOCATE 12,41-LEN(TEXT$(LN))/2:PRINT SPACE$(LEN(TEXT$(LN))):GOSUB 29
730 NEXT
740 FILEPOS=FILEPOS+NUM:RETURN
800 '==============\/ mortality table
803 IF AGE>19 AND AGE<86 THEN FOR II=20 TO AGE+5:READ MORT.AGE(II):NEXT ELSE GOTO 805
804 GOTO 820
805 FOR II=20 TO 90:READ MORT.AGE(II):NEXT
815 '=======calculate how many yrs till dooms day
820 IF AGE<20 THEN YRS.LEFT=MORT.AGE(20):GOTO 830 ELSE IF AGE> 85 THEN YRS.LEFT=MORT.AGE(90):GOTO 830
825 YRS.LEFT=(MORT.AGE(AGE+5)+MORT.AGE(AGE))/2
830 RETURN
899 '-------------- read text file \/
900 ' FILE$=FILE$+".dat"
902 OPEN FILE$ FOR INPUT AS #1
910 LN=1
920 IF NOT EOF(1) THEN LINE INPUT#1,TEXT$(LN):LN=LN+1:GOTO 920 ELSE 930
930 CLOSE#1:CLS:NUMLNS=LN-1
940 RETURN
999 '-------------- process file `file$' till `RET'
1000 '
1010 ' GOSUB 50
1050 GOSUB 900
1055 FILEPOS=1
1056 FUNCT$=TEXT$(FILEPOS)
1057 IF FUNCT$="EOF" THEN IF TEXT$(FILEPOS+1)<>"RET" THEN FILE$=TEXT$(FILEPOS+1):GOSUB 51000:GOSUB 900:GOTO 1050 ELSE 1095
1058 IF LEFT$(FUNCT$,4)="SKIP" THEN IF VAL(MID$(FUNCT$,5)) = 0 THEN FILEPOS = FILEPOS+2 ELSE FILEPOS=FILEPOS+VAL(MID$(FUNCT$,5)):GOTO 1090
1059 CLS:FILEPOS=FILEPOS+1
1060 IF FUNCT$="TEXT" THEN GOSUB 200:GOTO 1090
1062 IF LEFT$(FUNCT$,3)="ACC" THEN NUMWORDS%=VAL(MID$(FUNCT$,4,4)):NUMSCREENS%=VAL(MID$(FUNCT$,8)):GOSUB 600:GOTO 1090
1065 IF LEFT$(FUNCT$,5)="TREAD" THEN WDCOUNT=VAL(MID$(FUNCT$,6)):GOSUB 500:GOTO 1090
1068 IF FUNCT$="HCODE" THEN SEG$=TEXT$(FILEPOS):FILE$=TEXT$(FILEPOS+1):GOTO 60000
1069 IF LEFT$(FUNCT$,3)="SPD" THEN GOSUB 840:GOTO 1090
1070 IF FUNCT$="RATE" THEN GOSUB 800:GOTO 1090
1075 IF LEFT$(FUNCT$,4)="RNDW" THEN GOSUB 700: GOTO 1090
1077 IF LEFT$(FUNCT$,4) ="RNDL" THEN GOSUB 40000:GOTO 1090
1078 IF LEFT$(FUNCT$,3)="ASK" OR LEFT$(FUNCT$,4)="QUIZ" THEN GOSUB 300:GOTO 1090
1079 IF LEFT$(FUNCT$,4)="EYEM" THEN NUMWORDS%=VAL(MID$(FUNCT$,6,4)):NUMSCREENS%=VAL(MID$(FUNCT$,11,2)):NUMLNS%=VAL(MID$(FUNCT$,14)):GOSUB 15000:GOTO 1090
1080 IF LEFT$(FUNCT$,8)="SETFLASH" THEN FLSHRATE=VAL(MID$(FUNCT$,9)):GOTO 1090
1086 'CLS:PRINT"Invalid command in file "FILE$".":STOP
1088 FILEPOS=FILEPOS+1
1090 GOTO 1056
1095 RETURN
1999 ' ------------- menu \/
2099 ' ------------- draw box \/
2100 LOCATE TOP%,LEFT%:PRINT CHR$(218);:FOR I%=(LEFT%+1) TO (RIGHT%-1):PRINT CHR$(196);:NEXT:LOCATE TOP%,RIGHT%:PRINT CHR$(191);
2105 LOCATE TOP%,LEFT%:PRINT CHR$(218);:FOR I%=(LEFT%+1) TO (RIGHT%-1):PRINT CHR$(196);:NEXT:LOCATE TOP%,RIGHT%:PRINT CHR$(191);
2110 FOR Y%=(TOP%+1) TO (BOTTOM%-1):LOCATE Y%,LEFT%:PRINT CHR$(179);:LOCATE Y%,RIGHT%:PRINT CHR$(179);:NEXT
2115 LOCATE BOTTOM%,LEFT%:PRINT CHR$(192);:FOR I%=(LEFT%+1) TO (RIGHT%-1):PRINT CHR$(196);:NEXT:LOCATE BOTTOM%,RIGHT%:PRINT CHR$(217);:RETURN
2120 ' -------------
3000 '============\/ main code starts here
3002 GOSUB 3
3010 GOSUB 6000                   '============\/ intro book routine
3020 GOSUB 8000                   '============\/initial questions
3030 GOSUB 51000:                                                                    FILE$="TIMED.TXT":GOSUB 1000'=============\/first timed reading
3040 GOSUB  12000      '===========\/ find rate of reader
3050 GOSUB 13000                  ' ===========\/ more questions & mortality
3060 GOSUB 9000:GOSUB 14000       '=====\/ RPD'S
3065 NWPM=GWPM*1.1:FILE$="eye.txt":GOSUB 51000:                                              GOSUB 1000                    '===========\/ eye move exercise
3070 GOSUB 30000                  '============\/ speed reading description
3080 NWPM=NWPM+NWPM*0.2:FILE$="ART.txt":                                              GOSUB 51000:GOSUB 1000    '===============\/ accelerated reading
3085 GOSUB  5000               '===============\/ ending text
3090 GOSUB 16000               '===============\/ bookshelf & conclusion
5000 '================\/ end of demo
5070 CLS:LOCATE 3,1:PRINT S$;"Congratulations, ";READER$;"!"
5080 LOCATE 5,1:PRINT S$;"You just read that at ";NWPM;" words per minute."
5085  FOR I%=1 TO 3:PLAY "mbl32o4cdefgabo5c":NEXT:PLAY"o3o4cbagfedco4l12o5c"
5090 LOCATE 7,1:PRINT S$;"That means you're already reading 20%"
5100 LOCATE 9,1:PRINT S$;"faster than you were at the beginning of"
5110 LOCATE 11,1:PRINT S$;"this demonstration."
5120 LOCATE 15,1:PRINT S$;"That's terrific!  With this course and"
5130 LOCATE 17,1:PRINT S$;"a few weeks of practice you should be"
5140 LOCATE 19,1:PRINT S$;"able to double or even triple your"
5150 LOCATE 21,1:PRINT S$;"present reading rate."
5160 GOSUB 20
5170 CLS:LOCATE 5,1:PRINT S$;"Well, ";READER$;", it's time for me to say"
5180 LOCATE 7,1:PRINT S$;"goodbye.  I hope you decide to take"
5190 LOCATE 9,1:PRINT S$;"SPEED READING . . . The Computer Course."
5200 LOCATE 11,1:PRINT S$;"It's been fun working with you.  I'll"
5210 LOCATE 13,1:PRINT S$;"look forward to seeing you again soon"
5220 LOCATE 15,1:PRINT S$;"in Lesson One.
5280 GOSUB 20
5999 RETURN
6000  ' INTRO  ===================\/
6030 COLOR 7,0:KEY OFF:CLS
6060 GOTO 6115
6065  IF HEADER$="" THEN HEADER$="Speed Reading . . . The Computer Course"
6070  LOCATE 1,1:PRINT SPACE$(FNCENTER%(HEADER$));:COLOR 0,7:PRINT " ";HEADER$;" ";:COLOR 7,0: FOR Q%=POS(0) TO 79:PRINT " ";:NEXT :PRINT " ";:COLOR 7,0
6075 RETURN
6080  LOCATE Y%,X%:PRINT PROMPT$;" ";:RETURN
6085 '----------------------------
6090 CLS: LOCATE 1,1
6095 PRINT S$; S$;:COLOR 0,7:PRINT S$; " SPEED READING . . . THE COMPUTER COURSE":COLOR 7,0
6100 PRINT S$;:PRINT S$; S$;SPC(9);"A Speed Reading Course":COLOR 7:PRINT S$;
6105 RETURN
6110 '----------------------------
6115 B$(1)="DICKENS      ":B$(2)="MICHENER     ":B$(3)="STEINBECK    ":B$(4)="MELVILLE     "
6120 B$(5)="HEMINGWAY    ":B$(6)="HAWTHORNE    ":B$(7)="WHITMAN      ":B$(8)="THOREAU      "
6125 B$(9)="SPEED READING":B$(10)="DICKINSON    "
6130 '-----------------------------
6135 LESSON=9: HANG=45
6140 GOSUB 6170
6145 LESSON=0: HANG=10
6150 GOTO 6380
6155 '*****************************
6160 '*        BOOK SHELF         *
6165 '*****************************
6170 CLS
6175 LOCATE ,,0
6180 S$=""
6185 LOCATE 19,21:PRINT STRING$(39,176)
6190 LOCATE 20,21:PRINT SPC(4);STRING$(3,176);SPC(25);STRING$(3,176);
6195 FOR I%=1 TO HANG*15:NEXT
6200 '-----------------------------
6205 COLOR 0,7
6210 FOR J%=1 TO 10
6215 PLAY "l36mbn"+MID$(STR$(J%+30),2)
6220 LOCATE 2,20+J%*4-3:PRINT STRING$(3,223);
6225 LOCATE 3,20+J%*4-3: PRINT STRING$(3,205);
6230 FOR I%=1 TO 14:LOCATE 3+I%,20+J%*4-3: PRINT " ";MID$(B$(J%),I%,1);" ";CHR$(219):NEXT
6235 LOCATE 17,20+J%*4-3: PRINT STRING$(3,205)
6240 LOCATE 18,20+J%*4-3: PRINT " ";CHR$(248);" "
6245 NEXT
6250 COLOR 7,0
6255 FOR I%=1 TO HANG*44:NEXT
6260 '-----------------------------
6265 LOCATE 2,20+(LESSON*4)-3: PRINT S$; CHR$(218);CHR$(196);CHR$(191)
6270 LOCATE 3,20+(LESSON*4)-3: PRINT S$; CHR$(198);CHR$(205);CHR$(181)
6275 FOR I%=4 TO 16: LOCATE I%,20+(LESSON*4)-3:PRINT CHR$(179);MID$(B$(LESSON),I%-3,1);CHR$(179):NEXT
6280 LOCATE 17,20+(LESSON*4)-3: PRINT S$; CHR$(198);CHR$(205);CHR$(181)
6285 LOCATE 18,20+(LESSON*4)-3: PRINT S$; CHR$(192);CHR$(196);CHR$(217)
6290 FOR I%=1 TO HANG*44:NEXT
6295 '-----------------------------
6300 FOR I%=1 TO 3:PLAY "mbl32o4o5co4bagfedc":NEXT:PLAY"o3cdefgabo4co4l12o5c"
6305 FOR I%=2 TO 4:LOCATE I%,20+(LESSON*4)-3:PRINT S$; "   ":FOR J%=1 TO 80*(I%<4):NEXT:NEXT
6310 LOCATE  9,20+11+LEN(S$)
6315 PRINT S$; CHR$(201);CHR$(205);CHR$(203);STRING$(15,205);CHR$(187);
6320 FOR I%=1 TO 14
6325  OFFSET=0:Q$="   "
6330  IF I%<5 THEN 6350
6335  IF LESSON=3 THEN OFFSET=-1: GOTO 6350
6340  IF LESSON=8 THEN OFFSET=1: GOTO 6350
6345  IF LESSON>3 AND LESSON<8 THEN Q$=""
6350  LOCATE I%+4,20+(LESSON*4)-3+OFFSET:PRINT Q$;
6355  LOCATE I%+9,31:PRINT CHR$(186);" ";CHR$(186);SPC(15);CHR$(186);
6360 NEXT
6365 LOCATE I%+9,20+11+LEN(S$):PRINT S$; CHR$(200);CHR$(205);CHR$(202);STRING$(15,205);CHR$(188);
6370 RETURN
6375 '-----------------------------
6380 LOCATE 12,19+20: PRINT "THE"
6385 LOCATE 14,20+18: PRINT "BUREAU"
6390 LOCATE 16,20+20: PRINT "OF"
6395 LOCATE 18,20+17: PRINT "BUSINESS"
6400 LOCATE 20,20+17: PRINT "PRACTICE"
6405 DELAY%=3:GOSUB 6765:FOR I%=12 TO 20 STEP 2: LOCATE I%,20+14+LEN(S$):PRINT S$; SPC(15):NEXT
6410 LOCATE 15,20+17: PRINT "PRESENTS"
6415 PLAY "l08n32n56
6420 DELAY%=3:GOSUB 6765:LOCATE 15,20+14+LEN(S$):PRINT SPC(15)
6425 LOCATE 12,20+15+LEN(S$): PRINT "SPEED "
6430 LOCATE 14,20+17+LEN(S$): PRINT "READING..."
6435 LOCATE 17,20+19+LEN(S$): PRINT "THE"
6440 LOCATE 19,20+17+LEN(S$): PRINT "COMPUTER"
6445 LOCATE 21,20+18+LEN(S$): PRINT "COURSE"
6450 PLAY "l08n32n56
6455 DELAY%=3:GOSUB 6765:FOR I%=12 TO 21: LOCATE I%,20+14+LEN(S$):PRINT S$; SPC(15):NEXT
6460 LOCATE 13,20+20+LEN(S$): PRINT  " A "
6465 LOCATE 15,20+15+LEN(S$): PRINT  "SPEED READING"
6470 LOCATE 17,20+18+LEN(S$): PRINT  "PROGRAM"
6475 PLAY "l08n32n56
6480 DELAY%=3:GOSUB 6765:FOR I%=12 TO 20 STEP 1: LOCATE I%,20+14+LEN(S$):PRINT SPC(15):NEXT: GOTO 6545
6485 LOCATE 10,37+LEN(S$): PRINT "Copyright"
6490 LOCATE 11,39+LEN(S$): PRINT  "1983"
6495 LOCATE 12,38+LEN(S$): PRINT  STRING$(6,196)
6500 LOCATE 13,35+LEN(S$): PRINT  "The Bureau of"
6505 LOCATE 14,37+LEN(S$): PRINT  "Business": LOCATE 15,37: PRINT "Practice"
6510 LOCATE 17,35+LEN(S$): PRINT  "24 Rope Ferry"
6515 LOCATE 18,39+LEN(S$): PRINT  "Road"
6520 LOCATE 20,37+LEN(S$): PRINT  "Waterford "
6525 LOCATE 21,36+LEN(S$): PRINT  "Connecticut"
6530 LOCATE 22,39+LEN(S$): PRINT  "06386"
6535 PLAY "l08n32n56": DELAY%=3: GOSUB 6765
6540 FOR LN=10 TO 22: LOCATE LN,34+LEN(S$): PRINT "               ": NEXT: GOTO 6605
6545 LOCATE 10,36+LEN(S$): PRINT "Programmed"
6550 LOCATE 11,39+LEN(S$): PRINT  " by "
6555 LOCATE 12,38+LEN(S$): PRINT  STRING$(6,196)
6560 LOCATE 13,36+LEN(S$): PRINT  "Innovative"
6565 LOCATE 14,36+LEN(S$): PRINT  "Programming": LOCATE 15,36:PRINT "Associates"
6570 LOCATE 17,36+LEN(S$): PRINT  "One Airport "
6575 LOCATE 18,39+LEN(S$): PRINT  "Place"
6580 LOCATE 20,37+LEN(S$): PRINT  "Princeton "
6585 LOCATE 21,36+LEN(S$): PRINT  "New  Jersey"
6590 LOCATE 22,39+LEN(S$): PRINT  "08540"
6595 PLAY "l08n32n56": DELAY%=3: GOSUB 6765
6600 FOR LN=10 TO 22: LOCATE LN,34+LEN(S$): PRINT "               ": NEXT: GOTO 6485
6605 LOCATE 16,20+16+LEN(S$): COLOR 0,7:PRINT " WELCOME! ";:COLOR 7,0
6610 FOR I%=1 TO 3:PLAY "mbl32o4cdefgabo5c":NEXT:PLAY"o3o4cbagfedco4l12o5c"
6615 MESSAGE$="Please Press The <SPACE BAR> To Begin.":GOSUB 20:CLS:GOSUB 6065
6620 GOSUB 6905
6625 ' ******************************
6630 GOSUB 6065
6635 LOCATE 4,22: PRINT S$;"Hello, ";READER$;"!  For the next few"
6640 LOCATE 6,22: PRINT S$;"minutes I'm going to show you exactly what"
6645 LOCATE 8,22: PRINT S$;"SPEED READING . . . The Computer Course"
6650 LOCATE 10,22: PRINT S$;"can do for you."
6655 LOCATE 14,22:PRINT S$;"I'll begin by asking you a few simple"
6660 LOCATE 16,22:PRINT S$"questions.  All you have to do is"
6665 LOCATE 18,22:PRINT S$;"TYPE IN THE ANSWER and PRESS <ENTER>,"
6670 LOCATE 20,22:PRINT S$;"just as you did a moment ago."
6690 MESSAGE$="":GOSUB 20
6700 ' ****************************************************
6705 RETURN
6710 '  *****************************************
6715 '					   ||
6720 ' COMMON SUBROUTINES START HERE      \/
6725 ' *****************************************
6730 '--------------- wait for space bar  \/
6760 '--------------- pause for <delay> seconds \/
6765 T$=TIME$:GOT.HERE= FN TIMER(T$)           
6770 IF (FN TIMER(T$)-GOT.HERE) < DELAY% THEN 6770
6775 RETURN
6780 '----------------- short pause -- 1 to <pause> \/
6785 FOR I=1 TO PAUSE : NEXT : RETURN
6790 '----------------- get a character \/
6795 AA$="":WHILE AA$="":AA$=INKEY$:WEND:RETURN
6800 RETURN
6805 '--------------- correct answer \/
6810 SOUND 600,1: SOUND 750,1: SOUND 600,2: RETURN
6815 '--------------- incorrect answer \/
6820 PLAY "O0l6f+l4c":RETURN
6825 '--------------- input error \/
6830 SOUND 1800,1:RETURN
6835 '--------------- page turn \/
6840 SOUND 200,2:RETURN
6845 '--------------- read line of input as <A$> \/
6850 A$="":AA$=""
6855 LOCATE ,,1
6860 GOSUB 6795
6865 IF A$=CHR$(13) THEN GOTO 6895
6870 IF AA$=CHR$(13) THEN 6900
6875 IF AA$=CHR$(8) AND LEN(A$)>0 THEN PRINT CHR$(29);" ";CHR$(29);:                 IF LEN(A$)>1 THEN A$=LEFT$(A$,LEN(A$)-1):GOTO 6860 ELSE A$="":GOTO 6860
6880 IF AA$=CHR$(8) THEN GOSUB 6830: GOTO 6860
6885 IF ASC(AA$)<32 THEN GOSUB 6830: GOTO 6860
6890 IF LEN(A$)=MAXLENGTH THEN GOSUB 6830 : GOTO 6860
6895 PRINT AA$; : A$=A$+AA$ : GOTO 6860
6900 LOCATE ,,0 : RETURN
6905 ' GET NAME
6910 LOCATE 7,1:PRINT SPACE$(79);:LOCATE 7,20:PRINT"Please type your first name"
6915 LOCATE 8,1:PRINT SPACE$(79);:X%=25:Y%=8:PROMPT$="and then press <ENTER>:":GOSUB 7045:GOSUB 6080
6920 MAXLENGTH = 20: GOSUB 6850:READER$=A$
6925 IF LEN(READER$) > 0 THEN FOR K% = LEN(READER$) TO 2 STEP -1 : IF MID$(READER$,K%,1) <> " " THEN GOTO 6930 ELSE NEXT
6930 READER$=LEFT$(READER$,K%)
6935 IF READER$="" OR READER$=CHR$(13) OR 0<INSTR(READER$," ") OR 0<>INSTR("0123456789!@#$%^&*()_+=-~`';:/?.>,<",LEFT$(READER$,1)) THEN 6910
6940 ' ******************************
6945 ' *  TRANSLATE READER'S NAME   *
6950 ' ******************************
6955 LR=LEN(READER$): BREADER$=READER$
6960 N$(1)=LEFT$(READER$,1)
6965 IF N$(1) >= "a" AND N$(1) <= "z" THEN N$(1)=CHR$(ASC(N$(1))-32)
6970 FOR J=2 TO LR
6975  N$(J)=MID$(READER$,J,1)
6980  IF N$(J) >= "A" AND N$(J) <= "Z" THEN N$(J)=CHR$(ASC(N$(J))+32)
6985 NEXT J
6990 FOR J=1 TO LR: IF N$(J)="-" OR N$(J)=" " THEN N$(J+1)=CHR$(ASC(N$(J+1))-32)
6995 NEXT
7000 FOR J=1 TO LR: MID$(READER$,J,1)=N$(J): NEXT J
7005 FOR J=1 TO LR
7010  N$(J)=MID$(READER$,J,1): IF N$(J)="-" THEN 7020
7015  IF N$(J) >= "A" AND N$(J) <= "Z" THEN 7020 ELSE N$(J)=CHR$(ASC(N$(J))-32)
7020 NEXT J
7025 FOR J=1 TO LR: MID$(BREADER$,J,1)=N$(J): NEXT J
7030 OKR$="OK, "+READER$+".": OKBR$="OK, "+BREADER$+"."
7035 CLS:GOSUB 6065
7040 RETURN
7045 LOCATE 12,1'          arrow
7050 PRINT"                   <ENTER> is the              ┌────┐
7055 PRINT"                   dark grey key on            │    │
7060 PRINT"                   the right side of           ├────┤
7065 PRINT"                   the keyboard that           │ ──┘│";:LOCATE CSRLIN,POS(0)-5:PRINT CHR$(17)
7070 PRINT"                   looks like this             ├────┤";:LOCATE CSRLIN,POS(0)-18: PRINT CHR$(26)
7075 PRINT"                                               │    │
7080 PRINT"                                               └────┘
7085 RETURN
8000 '==\/ init.questions
8005 S$="                     ":PAUSE=750
8010 CLS:GOSUB 6065:LOCATE 5,1:PRINT S$;"OK. First question.
8020 LOCATE 9,1:PRINT S$;"How many books do you read in an"
8030 LOCATE 11,1:PRINT S$;"average week? (Please count technical
8035 LOCATE 13,1:PRINT S$;"manuals, texts, etc., as books.)
8040 LOCATE 15,1:PRINT S$;"Type in the number: ___ books."
8042 VTAB=15:GOSUB 40000:BOOKS=VAL(A$)
8070 ' ============\' 2nd ?
8072 CLS:GOSUB 6065
8075 LOCATE 7,1:PRINT S$;"Good, ";READER$;" . Now tell me this:"
8080 LOCATE 11,1:PRINT S$;"How many times per week do you read a newspaper?"
8082 LOCATE 13,1:PRINT S$;"(Count Sunday editions as two newspapers.)"
8085 LOCATE 15,1:PRINT S$;"Type in the number: ___"
8090 VTAB=15:GOSUB 40000
8115 NEWSPAPERS=VAL(A$)
8125 ' ============\/ 3rd ?
8130 CLS:GOSUB 6065:LOCATE 6,1:PRINT S$;"What about magazines? How many of them
8135 LOCATE  8,1:PRINT S$;"do you read during the week?"
8140 LOCATE 10,1:PRINT S$;"(Remember to include professional journals,"
8145 LOCATE 12,1:PRINT S$;"technical and trade periodicals, and so on.)"
8150 LOCATE 14,1:PRINT S$;"Type in the number: ___ magazines."
8155 VTAB=14:GOSUB 40000
8166 MAGAZINES=VAL(A$)
8190 ' ============\/ 4th ?
8195 CLS:GOSUB 6065:LOCATE 6,1:PRINT S$;"How many reports and other long documents"
8200 LOCATE 8,1:PRINT S$;"do you read a week?"
8205 LOCATE 12,1:PRINT S$;"Type in the number: ___ reports and documents."
8210 VTAB=12:GOSUB 40000:DOCUMENTS=VAL(A$)
8245 ' ============\/ 5th ?
8250 CLS:GOSUB 6065:LOCATE 5,1:PRINT S$;"One more question, ";READER$;" ."
8255 LOCATE 7,1:PRINT S$;"How many memos and letters (business and"
8260 LOCATE 9,1:PRINT S$;"personal) do you read on the average in"
8265 LOCATE 11,1:PRINT S$;"a week?"
8270 LOCATE 13,1:PRINT S$;"(Include newsletters here, too.)"
8275 LOCATE 15,1:PRINT S$;"Type in the number: ___ letters and memos."
8280 VTAB=15:GOSUB 40000
8300 LETTERS=VAL(A$)
8315 '==========\/calculation page
8320 CLS:GOSUB 6065:LOCATE 5,1:PRINT S$;"Thanks for the input, ";READER$;". Now I'm"
8325 LOCATE 7,1:PRINT S$;"going to use that data to tell you approx-"
8330 LOCATE 9,1:PRINT S$;"imately how many words you read every week."
8360 LOCATE 13,1:PRINT S$;" Then I'm going to add 25% to that figure"
8365 LOCATE 15,1:PRINT S$;"to account for all the cereal boxes, forms,"
8370 LOCATE 17,1:PRINT S$;"signs, and so forth that we all read all"
8380 LOCATE 19,1:PRINT S$;"the time."
8382 GOSUB 51003:AVEWORDS=75000.*BOOKS+10000*NEWSPAPERS+50000.*MAGAZINES+1500*DOCUMENTS+300*LETTERS
8383 AVEWORDS=AVEWORDS*1.25
8384 PRECISE=AVEWORDS:GOSUB 25000:AVEWORDS$=PRECISE$                                          'get # ending          *
8385 MESSAGE$="":GOSUB 20
8386 CLS:GOSUB 6065:LOCATE 9,1:PRINT S$;"OK, now give me just a couple of seconds"
8387 LOCATE 11,1:PRINT S$;"while I perform some quick calculations"
8388 LOCATE 13,1:PRINT S$;"and then . . .":MESSAGE$="":GOSUB 20
8400 '===============\/ tell reader average words
8402  FOR I%=1 TO 3:PLAY "mbl32o4cdefgabo5c":NEXT:PLAY"o3o4cbagfedco4l12o5c"
8405 CLS:GOSUB 6065:LOCATE 4,1:PRINT S$;"Surprise, ";READER$;" ! According to my"
8410 LOCATE 6,1:PRINT S$;"calculations you read about ";AVEWORDS$
8415 LOCATE 8,1:PRINT S$;"words every week."
8420 LOCATE 12,1:PRINT S$;"That's a lot.  Do you have any idea how"
8425 LOCATE 14,1:PRINT S$;"much time it takes you to do all that"
8430 LOCATE 16,1:PRINT S$;"reading every week?"
8435 LOCATE 20,1:PRINT S$;"Let's find out.":GOSUB 20
8440 CLS:LOCATE 1,1:PRINT S$;"OK, ";READER$;". Now comes the fun part."
8445 LOCATE 5,1:PRINT S$;"I'm going to give you a little reading"
8450 LOCATE 7,1:PRINT S$;"test, but don't worry about it.  This"
8455 LOCATE 9,1:PRINT S$;"test doesn't count.  It's only for your"
8460 LOCATE 11,1 :PRINT S$;"benefit.  I want to find out what your"
8465 LOCATE 13,1:PRINT S$;"normal, everyday reading speed is, that's"
8470 LOCATE 15,1:PRINT S$;"all.  Then I'm going to show you how this"
8475 LOCATE 17,1:PRINT S$;"course can increase your reading speed."
8490 MESSAGE$="Press <SPACE BAR> When You Are Ready.":GOSUB 20
8495 RETURN
9000 '============\/RPD'S INTRO
9010 CLS'GOSUB 6065:GOSUB 30:GOSUB 35
9015 'LOCATE 12,5: COLOR 15: PRINT S$;"== RAPID PERCEPTION DRILLS ==":COLOR 7
9020 'GOSUB 20:CLS
9025 ERASE TEXT$: DIM TEXT$(500)
9030 CLS: V1$="visual ": V2$="VISUAL ":P1$="perception": P2$="PERCEPTION"
9032  FOR I%=1 TO 3:PLAY "mbl32o4cdefgabo5c":NEXT:PLAY"o3o4cbagfedco4l12o5c"
9035 LOCATE 7,9: PRINT S$;"The following exercises"
9040 LOCATE 9,14: PRINT S$;"are designed"
9045 LOCATE 11,13: PRINT S$;"to improve your"
9050 LOCATE 13,12:PRINT S$;V1$;P1$
9055 LOCATE 15,19: PRINT S$;"and"
9060 LOCATE 17,7:PRINT S$;"         eye span.         "
9065 FOR I=1 TO 1100: NEXT
9070 FOR J=1 TO 2
9075 LOCATE 13,12:PRINT S$;V2$;P1$
9080 LOCATE 17,7:PRINT S$;"         eye span.         ": GOSUB 9270
9085 LOCATE 13,12:PRINT S$;V1$;P2$
9090 LOCATE 17,7:PRINT S$;"      e y e  s p a n.      ": GOSUB 9270
9095 LOCATE 13,12:PRINT S$;V2$;P1$
9100 LOCATE 17,7:PRINT S$;"   e  y  e   s  p  a  n.   ": GOSUB 9270
9105 LOCATE 13,12:PRINT S$;V1$;P2$
9110 LOCATE 17,7:PRINT S$;"e   y   e    s   p   a   n.": GOSUB 9270
9115 LOCATE 13,12:PRINT S$;V2$;P1$
9120 LOCATE 17,7:PRINT S$;"   e  y  e   s  p  a  n.   ": GOSUB 9270
9125 LOCATE 13,12:PRINT S$;V1$;P2$
9130 LOCATE 17,7:PRINT S$;"      e y e  s p a n.      ": GOSUB 9270
9135 NEXT J
9140 LOCATE 13,12:PRINT S$;V2$;P1$
9145 LOCATE 17,7:PRINT S$;"         eye span.         ": GOSUB 9270
9150 LOCATE 13,12:PRINT S$;V1$;P2$
9155 LOCATE 17,7:PRINT S$;"      e y e  s p a n.      ": GOSUB 9270
9160 LOCATE 13,12:PRINT S$;V2$;P1$
9165 LOCATE 17,7:PRINT S$;"   e  y  e   s  p  a  n.   ": GOSUB 9270
9170 LOCATE 13,12:PRINT S$;V1$;P2$
9175 LOCATE 17,7:PRINT S$;"e   y   e    s   p   a   n.": GOSUB 9270
9180 LOCATE 13,12:PRINT S$;V2$
9185 LOCATE 17,4:PRINT S$;"e    y    e     s    p    a    n.": GOSUB 9270
9190 FOR I=1 TO 7000: NEXT
9192 RETURN
9270 FOR I=1 TO 400: NEXT: RETURN
9998 '================MORE SUBROUTINES \/=====================
9999 '--------------- \/ handle special commands: #,\,&,|,^,!
10000 '
10020 COMM$=LEFT$(TEXT$(LN),1)
10040 SWITCH%=INSTR(SPECIAL$,COMM$)
10050 IF SWITCH% < 1 THEN RETURN
10060 ON SWITCH% GOSUB 10100,10200,10300,10400,10500,10600,10700
10093 RETURN
10099 '----- `!' command for video options \/ -----
10100 LOCATE VPOS,20:CLR1%=7:CLR2%=0:CLR$=MID$(TEXT$(LN),2,1)
10110 IF CLR$="U" OR CLR$ = "u" THEN CLR1%=1
10115 IF CLR$="H" OR CLR$ = "h" THEN CLR1%=15
10120 IF CLR$="X" OR CLR$ = "x" THEN CLR1%=9
10125 IF CLR$="R" OR CLR$ = "r" THEN CLR1%=0:CLR2%=7
10130 IF CLR$="F" OR CLR$ = "f" THEN CLR1%=23
10135 I%=3:WHILE MID$(TEXT$(LN),I%,1)<>"@":NUM$=NUM$+MID$(TEXT$(LN),I%,1):I%=I%+1:WEND:LEN.NUM%=I%+1:POINTER%=LEN.NUM%
10142 FOR I%=1 TO LEN(NUM$)
10143 IF MID$(NUM$,I%,1)="," THEN NUMCOMMA%=NUMCOMMA%+1:NUM$(NUMCOMMA%) = MID$(NUM$,I%-2,2)
10144 NEXT
10145 NUMCLR% = (NUMCOMMA%+1)/2:NUM$(NUMCLR%*2)=RIGHT$(NUM$,2)
10147 FOR I% = 1 TO NUMCOMMA%+1:NUM%(I%)=VAL(NUM$(I%)):NEXT:GOTO 10160
10151 COLOR 7,0:FOR I% = POINTER% TO LEN.NUM%+NUM%(G%)-2:PRINT MID$(TEXT$(LN),I%,1);:NEXT
10152 COLOR CLR1%,CLR2%:FOR I%=LEN.NUM%-1+NUM%(G%) TO LEN.NUM%-1+NUM%(G%) + NUM%(G%+1)-1:PRINT MID$(TEXT$(LN),I%,1);:NEXT:POINTER%=I%:RETURN
10160 FOR G% = 1 TO (2*NUMCLR%) STEP 2:GOSUB 10151:NEXT
10165 COLOR 7,0: FOR I% = POINTER% TO LEN(TEXT$(LN)):PRINT MID$(TEXT$(LN),I%,1);:NEXT
10175 FOR I% = 1 TO NUMCOMMA% + 1 : NUM$(I%)="":NUM%(I%)=0:NEXT
10177 CLR$="":POINTER%=0:NUMCOMMA%=0:NUM$="":LEN.NUM%=0:CLR1%=7:CLR2%=0:COMM$=""
10190 RETURN
10499 '----- `&' command for READER \/ -----
10500 Z%=INSTR(TEXT$(LN),"READER")
10520 LOCATE VPOS,20:PRINT MID$(TEXT$(LN),2,Z%-2);READER$;:PRINT MID$(TEXT$(LN),Z%+6);
10590 RETURN
10599 '----- `|' command for pauses \/ -----
10600 DELAY%=VAL(MID$(TEXT$(LN),3,1)):GOSUB 29:LOCATE VPOS,20:PRINT MID$(TEXT$(LN),4);:RETURN
10699 '----- `\' command for GWPM \/ -----
10700 Z%=INSTR(TEXT$(LN),"GWPM")
10720 LOCATE VPOS,20:PRINT MID$(TEXT$(LN),3,Z%-4);GWPM;:PRINT MID$(TEXT$(LN),Z%+5);
10799 RETURN
12000 '==================\/ GWPM from init reading
12120 CLS:LOCATE 2,20:PRINT"Good, "READER$"!  You read that selection"
12122 LOCATE 4,20:PRINT"at a rate of "MID$(STR$(GWPM),2)" words per minute."
12123 FOR I%=1 TO 3:PLAY "mbl32o4cdefgabo5c":NEXT:PLAY"o3o4cbagfedco4l12o5c"
12124 LOCATE 6,20:PRINT"Believe it or not, you can read even"
12126 LOCATE 8,20:PRINT"faster than that, and in a couple of"
12128 LOCATE 10,20:PRINT"minutes I'm going to prove it to you."
12130 LOCATE 13,20:PRINT"But first, I have to ask you another"
12132 LOCATE 15,20:PRINT"very important question."
12133  MESSAGE$="Please Press <SPACE BAR> to Continue."
12134 LOCATE 25,FNCENTER(LEN(MESSAGE$)):PRINT MESSAGE$;:MESSAGE$=""
12135 GOSUB 20 :RETURN
13000 '==\/ quest after tmedread
13005 S$="                   ":PAUSE=550
13010 CLS:LOCATE 5,20:PRINT"Now, "READER$", please don't think I'm"
13020 LOCATE 7,20:PRINT"being nosy or indiscreet, but I have to get"
13030 LOCATE 9,20:PRINT"rather personal. Don't worry, I won't tell"
13050 LOCATE 11,20:PRINT "anybody your answer.  (Besides, I forget"
13060 LOCATE 13,20:PRINT "everything I learn once I'm turned off.)"
13105 LOCATE 15,1:PRINT S$;"Here's the question:  How old are you?"
13110 LOCATE 17,1:PRINT S$;"Type your age: ___ "
13115 LOCATE 21,1:PRINT S$;"Then press <ENTER> ."
13120 LOCATE 17,35,,4,12:MAXLENGTH=3:GOSUB 100:LOCATE,,0,7,7
13125 LOCATE 17,35:PRINT SPACE$(28)
13130 B$="qwertyuiop[]`';lkjhgfdsa\zxcvbnm,./!@#$%^&*()_+=-"
13131 FOR JJ=1 TO LEN (A$):IF INSTR(B$,MID$(A$,JJ,1)) THEN WRONG=1:GOTO 13133 ELSE WRONG=0
13132  NEXT
13133  IF (VAL(A$)<1 OR VAL(A$)>120 OR  WRONG) THEN GOSUB 90:LOCATE 17,35:PRINT "___":GOTO 13120
13135 AGE=VAL(A$)
13140 LOCATE 17,35:PRINT A$
13145 GOSUB 35
13150 '============\/ next screen
13155 CLS:LOCATE 4,1:PRINT S$;"Thank you, ";READER$;" ."
13160 LOCATE 8,1:PRINT S$;"Let me explain why I had to ask you that"
13165 LOCATE 10,1:PRINT S$;"question."
13170 LOCATE 14,1:PRINT S$;"You see, I'm about to calculate the"
13175 LOCATE 16,1:PRINT S$;"amount of time you will spend reading"
13180 LOCATE 18,1:PRINT S$;"during the rest of your life."
13185 MESSAGE$="PRESS <SPACE BAR> FOR THE ANSWER.":GOSUB 20
13188 GOSUB 800'**********find yrs.left
13190 '================\/ calculate lifetime of reading
13193 AVE.MINS=AVEWORDS/GWPM                           '      *
13194 TOT.MINS=YRS.LEFT* AVE.MINS*52
13195 TOT.HOURS=TOT.MINS/60:PRECISE=TOT.HOURS:GOSUB 25000:TOT.HOURS$=PRECISE$                                          'get # ending          *
13196 TOT.DAYS=TOT.HOURS/16:PRECISE=TOT.DAYS:GOSUB 25000:TOT.DAYS$=PRECISE$:          TOT.YRS=TOT.DAYS/360:PRECISE=TOT.YRS:GOSUB 25000:TOT.YRS$=PRECISE$                                                        '             *
13197 TOT.YRS=(INT(TOT.YRS*100))/100'                         *
13198 'MONEY.SAVED=(INT(5*TOT.HOURS* .2*10))/1000'               *
13199 '******************
13200 CLS:LOCATE 3,1:PRINT S$;"Here's the answer:"
13205 LOCATE 6,1:PRINT S$;"Based on your present reading speed and"
13210 LOCATE 8,1:PRINT S$;"the data you've supplied, I estimate"
13215 LOCATE 10,1:PRINT S$;"that you will spend as many as ";TOT.HOURS$;
13217 LOCATE 12,1:PRINT S$;"hours during your remaining lifetime reading."
13220 LOCATE 16,1:PRINT S$;"That's ";TOT.DAYS$;" days!":LOCATE 18,1:PRINT S$;"Or ";TOT.YRS;" YEARS!"
13223 YRS.SAVE$=STR$(TOT.YRS*0.2)
13224  MONEY.SAVED=5*TOT.HOURS* 0.2
13225 GOSUB 20
13230 '============\/ reader is worth ...
13235 CLS:LOCATE 1,1:PRINT S$;"Now, ";READER$;", just imagine that you"
13240 LOCATE 3,1:PRINT S$;"could increase your reading speed by 20%."
13245 LOCATE 5,1:PRINT S$;"That would mean you could save as many as"
13250 LOCATE 7.1:PRINT SPACE$(LEN(S$)-1);LEFT$(YRS.SAVE$,5);" years of your life.  And if you value"
13255 LOCATE 9,1:PRINT S$;"your time, that means you'd be saving"
13257 PRECISE=MONEY.SAVED:GOSUB 25000:MONEY.SAVED$=PRECISE$
13260 LOCATE 11,1:PRINT S$;"at least $";MONEY.SAVED$;" over the course of your"
13265 LOCATE 13,1:PRINT S$;"life (and that's based on a low rate of"
13270 LOCATE 15,1:PRINT S$;"just $5.00 per hour)."
13275 LOCATE 17,1:PRINT S$;"And all this just by learning to read"
13280 LOCATE 19,1:PRINT S$;"a little faster than you read now!"
13290 GOSUB 20
13300 '=========\/ next screen
13305 CLS:LOCATE 3,1:PRINT S$;"Well, ";READER$;", I've got some good news"
13310 LOCATE 5,1:PRINT S$;"for you."
13315 LOCATE 9,1:PRINT S$;"If you want to learn to read faster"
13320 LOCATE 11,1:PRINT S$;"and understand more of what you read,"
13325 LOCATE 13,1:PRINT S$;"SPEED READING . . . The Computer Course"
13330 LOCATE 15,1:PRINT S$;"is designed especially for you."
13340 MESSAGE$="PRESS <SPACE BAR> TO FIND OUT WHY." :GOSUB 20
13345 CLS:LOCATE 5,1:PRINT S$;"Coming up next on the screen will be a"
13350 LOCATE 7,1:PRINT S$;"sample of just some of the special"
13355 LOCATE 9,1:PRINT S$;"speed reading exercises that are provided"
13360 LOCATE 11,1:PRINT S$;"in this course to help you improve your"
13365 LOCATE 13,1:PRINT S$;"speed and comprehension."
13370 LOCATE 17,1:PRINT S$;"Watch the screen carefully now, ";READER$;"."
13375 LOCATE 19,1:PRINT S$;"The Rapid Perception Drills are about"
13380 LOCATE 21,1:PRINT S$;"to begin!"
13385 MESSAGE$="PRESS <SPACE BAR> TO BEGIN EXERCISES.":GOSUB 20
13390 RETURN
14000 '
14005 S$="                    "
14015 CLS:PRINT S$;"  In the first drill, ";READER$;", letters,":PRINT
14017 PRINT S$;"words, and phrases will appear on the":PRINT
14020 PRINT S$;"screen and disappear in a fraction of a":PRINT
14030 PRINT S$;"second.  They will then reappear so you ":PRINT
14035 PRINT S$;"can check that you read them correctly.":PRINT
14040 PRINT S$;"Focus your eyes on the square (";CHR$(254);")";" which will":PRINT
14045 PRINT S$;"appear in the center of the screen.  This":PRINT
14050 PRINT S$;"exercise will develop peripheral vision,":PRINT
14055 PRINT S$;"a necessary step in the speed reading":PRINT
14060 PRINT S$;"process."
14065 MESSAGE$="Press <SPACE BAR> To Begin.":GOSUB 20
14070 CLS: LETTERS=3
14075 COL=16: SPC$="   ": LOOPLIM=1: SPEED=44
14080 GOSUB 14110
14085 COL=15:SPC$="  ": LETTERS=4:LOOPLIM=1
14090 GOSUB 14140
14095 COL=5: SPC$="       ": LETTERS=6: LOOPLIM=1
14100 GOSUB 14140
14105 GOTO 14265
14109 SOUND 500,1
14110 '-------------------------------
14115 '-    PRINT RADNOM LETTERS     -
14120 '-------------------------------
14125 FOR SEC=1 TO 1100: NEXT
14130 SOUND 499,1:LOCATE 11,20+LEN(S$): PRINT CHR$(254)
14135 FOR SEC=1 TO 1100: NEXT
14140 FOR J=1 TO LOOPLIM
14145 FOR Q=1 TO 5: R(Q+5)=R(Q): R(Q)=32: NEXT
14150 FOR Q=1 TO LETTERS
14155  R2=INT(26*RND)+65
14160 IF R2=65 OR R2=69 OR R2=73 OR R2=79 OR R2=85 THEN 14155
14165   FOR Q2=1 TO Q
14170    IF R2=R(Q2) OR R2=R(Q2+5) THEN 14155
14175   NEXT Q2
14180  R(Q)=R2
14185 NEXT Q
14190 RNDSTR$=""
14195 FOR Q=1 TO 5
14200  RNDSTR$=RNDSTR$+CHR$(R(Q))+SPC$
14205 NEXT Q
14210 LOCATE 12,COL: PRINT S$;RNDSTR$
14215 FOR SEC=1 TO SPEED: NEXT
14220 LOCATE 12,COL: PRINT S$;SPC(50)
14225 FOR SEC=1 TO 1100: NEXT
14230 LOCATE 12,COL: PRINT S$;RNDSTR$
14235 FOR SEC=1 TO 1100: NEXT
14240 LOCATE 12,COL: PRINT S$;SPC(50)
14245 FOR SEC=1 TO 1100: NEXT
14250 NEXT J
14255 RETURN
14260 ' ******************************
14265 CLS
14270 LOCATE 8,1
14275 PRINT S$;"Those letters were flashed at 1/4 second.": PRINT
14280 PRINT S$;"How was that, ";READER$;" ? Would you like":PRINT
14285 PRINT S$;"to try some words and phrases flashed   ": PRINT
14290 PRINT S$;"faster or slower?  ": PRINT
14295 PRINT S$;"       1.faster ": PRINT
14300 PRINT S$;"       2.slower": PRINT
14305 LOCATE 21,1: PRINT S$;"Type in the number of your selection: ___"
14310 IK$=INKEY$: IF IK$<>"" THEN 14310
14315 IK$=INKEY$: IF IK$="" THEN 14315
14320 IF IK$="1" THEN COL=1: SPEED2=444: GOTO 14335
14325 IF IK$="2" THEN COL=16: SPEED2=222: GOTO 14335
14330 LOCATE 18,1: PRINT S$;"     Please enter only 1 or 2     ": GOTO 14315
14335 LOCATE 21,59:PRINT " "; IK$;"    "
14340 LOCATE 23,1: PRINT S$;"         GET READY TO BEGIN.         "
14345 FOR I=1 TO 4400: NEXT
14350 ' ******************************
14355 '==========\/data
14370 GOTO 14430
14375 ' ******************************
14380 CLS
14385 '-----------------------
14390 CLS: LOCATE 8,1
14395 'LOOPLIM=VAL(TEXT$(Q)): HANG=FNHANG(VAL(TEXT$(Q+1))): HANG=HANG-(HANG*(ADJUST/100))
14400 LOOPLIM=1:HANG=300'VAL(TEXT$(JJ)): I=VAL(TEXT$(Q+1))/4: HANG=(I-(I*SPEED))*1100
14405 'PRINT TEXT$(Q),TEXT$(Q+1)
14410 FOR I=1 TO LOOPLIM: PRINT S$;TEXT$(I): PRINT: NEXT
14415 FOR I=1 TO HANG: NEXT: CLS
14420 Q=Q+LOOPLIM+2
14425 RETURN
14430 '---------------------------
14440 RESTORE 21000: FOR JJ=1 TO 9:READ TEXT$(JJ):NEXT
14450 CLS:' FOR I=1 TO 1100:NEXT:LOCATE 10,20+LEN(S$):PRINT CHR$(254):FOR I=1 TO 1100:NEXT
14455 REM
14460 GOSUB 14475
14465 RETURN '======\/ to main code
14470 '--------------------------
14475  LOOPLIM=9
14480 CLS: FOR I=1 TO 1100:NEXT:LOCATE 10,20+LEN(S$):SOUND 500,1:PRINT CHR$(254):FOR I=1 TO 1100:NEXT
14485 FOR J=1 TO 9
14490  TL=LEN(TEXT$(J))
14495  IF TL/2=INT(TL/2) THEN TL=TL-1
14500  COL=20-TL/2+LEN(S$)
14505  LOCATE 11,COL: PRINT TEXT$(J): FOR I=1 TO SPEED: NEXT
14510  LOCATE 11,COL: PRINT SPC(TL+1):  FOR I=1 TO 1100: NEXT
14515  LOCATE 11,COL: PRINT TEXT$(J): FOR I=1 TO 1100: NEXT
14520  LOCATE 11,COL: PRINT SPC(TL+1):  FOR I=1 TO 1100: NEXT
14525 NEXT J
14530 RETURN
14999 ' ------------ eye movement exercises \/
15000 CLS
15020 DELAY%=(NUMWORDS%/(NWPM/60))/NUMSCREENS%:LN=LN+1:PAUSE=DELAY%*1139/(NUMLNS%/NUMSCREENS%)
15030 LN=FILEPOS:VPOS=1
15040 ' top of loop
15050 L%=INSTR(TEXT$(LN),"/"):IF L%>0 THEN LOCATE VPOS,20:PRINT MID$(TEXT$(LN),1,L%-1);:GOSUB 35:LOCATE VPOS,20:PRINT SPACE$(L%-1);:LOCATE VPOS,40:PRINT MID$(TEXT$(LN),L%+1);:GOSUB 35:LOCATE VPOS,40:PRINT SPACE$(LEN(TEXT$(LN))-L%);
15060 IF TEXT$(LN)="" THEN VPOS=VPOS-1
15070 IF TEXT$(LN) <> "STOP" AND TEXT$(LN)<>"END" THEN VPOS=VPOS+2:LN=LN+1:GOTO 15040
15080 IF TEXT$(LN)="STOP" THEN LN=LN+1:VPOS=1:GOTO 15040
15090 IF TEXT$(LN)="END" THEN 15100 ELSE GOTO 15040
15100 FILEPOS=LN+1:RETURN
16000 'ending
16005 'GOSUB 3
16010 COLOR 7,0:KEY OFF:CLS
16015 GOTO 16070
16020  IF HEADER$="" THEN HEADER$="Speed Reading . . . The Computer Course"
16025  LOCATE 1,1:COLOR 0,7:PRINT SPACE$(FNCENTER%(HEADER$));" ";HEADER$;" ";:     FOR Q%=POS(0) TO 79:PRINT " ";:NEXT :PRINT " ";:COLOR 7,0
16030 RETURN
16035  LOCATE Y%,X%:PRINT PROMPT$;" ";:RETURN
16040 '----------------------------
16045 CLS: LOCATE 1,1
16050 PRINT S$; S$;:COLOR 0,7:PRINT S$; " SPEED READING . . . THE COMPUTER COURSE":COLOR 7,0
16055 PRINT S$;:PRINT S$; S$;SPC(9);"A Speed Reading Course":COLOR 7:PRINT S$;
16060 RETURN
16065 '----------------------------
16070 B$(1)="DICKENS      ":B$(2)="MICHENER     ":B$(3)="STEINBECK    ":B$(4)="MELVILLE     "
16075 B$(5)="HEMINGWAY    ":B$(6)="HAWTHORNE    ":B$(7)="WHITMAN      ":B$(8)="THOREAU      "
16080 B$(9)="SPEED READING":B$(10)="DICKINSON    "
16085 '-----------------------------
16090 LESSON=9:'HANG=45
16095 GOSUB 16125
16100 LESSON=0:'HANG=10
16105 GOTO 16500'title is now "thankyou
16110 '*****************************
16115 '*        BOOK SHELF         *
16120 '*****************************
16125 CLS
16130 LOCATE ,,0
16135 S$=""
16140 LOCATE 19,21:PRINT STRING$(39,176)
16145 LOCATE 20,21:PRINT SPC(4);STRING$(3,176);SPC(25);STRING$(3,176);
16150 FOR I%=1 TO HANG*15:NEXT
16155 '-----------------------------
16160 COLOR 0,7
16165 FOR J%=1 TO 10
16170 PLAY "l36mbn"+MID$(STR$(J%+30),2)
16175 LOCATE 2,20+J%*4-3:PRINT STRING$(3,223);
16180 LOCATE 3,20+J%*4-3: PRINT STRING$(3,205);
16185 FOR I%=1 TO 14:LOCATE 3+I%,20+J%*4-3: PRINT " ";MID$(B$(J%),I%,1);" ";CHR$(219):NEXT
16190 LOCATE 17,20+J%*4-3: PRINT STRING$(3,205)
16195 LOCATE 18,20+J%*4-3: PRINT " ";CHR$(248);" "
16200 NEXT
16205 COLOR 7,0
16210 FOR I%=1 TO HANG*44:NEXT
16215 '-----------------------------
16220 LOCATE 2,20+(LESSON*4)-3: PRINT S$; CHR$(218);CHR$(196);CHR$(191)
16225 LOCATE 3,20+(LESSON*4)-3: PRINT S$; CHR$(198);CHR$(205);CHR$(181)
16230 FOR I%=4 TO 16: LOCATE I%,20+(LESSON*4)-3:PRINT CHR$(179);MID$(B$(LESSON),I%-3,1);CHR$(179):NEXT
16235 LOCATE 17,20+(LESSON*4)-3: PRINT S$; CHR$(198);CHR$(205);CHR$(181)
16240 LOCATE 18,20+(LESSON*4)-3: PRINT S$; CHR$(192);CHR$(196);CHR$(217)
16245 FOR I%=1 TO HANG*44:NEXT
16250 '-----------------------------
16255 FOR I%=1 TO 3:PLAY "mbl32o4o5co4bagfedc":NEXT:PLAY"o3cdefgabo4co4l12o5c"
16260 FOR I%=2 TO 4:LOCATE I%,20+(LESSON*4)-3:PRINT S$; "   ":FOR J%=1 TO 80*(I%<4):NEXT:NEXT
16265 LOCATE  9,20+11+LEN(S$)
16270 PRINT S$; CHR$(201);CHR$(205);CHR$(203);STRING$(15,205);CHR$(187);
16275 FOR I%=1 TO 14
16280  OFFSET=0:Q$="   "
16285  IF I%<5 THEN 16305
16290  IF LESSON=3 THEN OFFSET=-1: GOTO 16305
16295  IF LESSON=8 THEN OFFSET=1: GOTO 16305
16300  IF LESSON>3 AND LESSON<8 THEN Q$=""
16305  LOCATE I%+4,20+(LESSON*4)-3+OFFSET:PRINT Q$;
16310  LOCATE I%+9,31:PRINT CHR$(186);" ";CHR$(186);SPC(15);CHR$(186);
16315 NEXT
16320 LOCATE I%+9,20+11+LEN(S$):PRINT S$; CHR$(200);CHR$(205);CHR$(202);STRING$(15,205);CHR$(188);
16325 RETURN
16500 LOCATE 14,20+18: PRINT "THANK"
16505 LOCATE 16,20+19: PRINT "YOU"
16510 MESSAGE$="PRESS <SPACE BAR> TO EXIT PROGRAM.":GOSUB 20:CLS:NEW
20000 '============\/data
20100 '============\/mortality data
20105 DATA 62.01,61.03,60.05,59.08,58.10
20110 DATA 57.12,56.15,65.17,54.20,53.22
20115 DATA 52.25,51.28,50.31,49.33,48.36
20120 DATA 47.40,46.43,45.46,44.50,43.53
20125 DATA 42.57,41.61,40.65,39.70,38.75
20130 DATA 37.79,36.85,35.90,34.96,34.03
20135 DATA 33.10,32.18,31.27,30.37,29.48
20140 DATA 28.60,27.72,26.86,26.01,26.16
20145 DATA 24.33,23.50,22.68,21.87,21.07
20150 DATA 20.28,19.50,18.72,17.95,17.20
20155 DATA 16.45,15.72,15.00,14.30,13.60
20160 DATA 12.93,12.27,11.62,11.00,10.39
20165 DATA 9.79,9.22,8.67,8.14,7.62
20170 DATA 7.13,6.66,6.21,5.78,7.37
20175 DATA 4.99
21000 DATA fox,depend,hidden,parliament,exaggerate
21100 DATA anonymous benefactor,common misunderstanding,forwarding address,decaffeinated coffee
25000 '============\/ figure ending expression
25005 PRECISE=INT(PRECISE)
25010 PRECISE$=STR$(PRECISE)
25015 IF LEN(PRECISE$)>=8 THEN ENDING$=",000,000":PRECISE=(INT(PRECISE/(1)+0.5)):GOTO 25100
25022 IF LEN(PRECISE$)>=5 THEN ENDING$=",000":PRECISE=(INT(PRECISE/(1000)+0.5)):GOTO 25100
25035 IF LEN (PRECISE$)<5 THEN ENDING$=""
25100 PRECISE$=STR$(PRECISE)+ENDING$
29999 RETURN
30000 '==========\/ speed reading description
30002 PAUSE=1500:S$="                    "
30005 CLS:LOCATE 1,1:PRINT S$;"OK, ";READER$;".  Now that you've sampled
30010 LOCATE 3,1:PRINT S$;"some of the eye movement exercises, look"
30015 LOCATE 5,1:PRINT S$;"at some of the other special features of"
30020 LOCATE 7,1:PRINT S$;"SPEED READING . . . The Computer Course:"
30025 GOSUB 35:LOCATE 9,1:PRINT S$;"--> interesting practice readings"
30030 PAUSE=500:GOSUB 35:LOCATE 11,1:PRINT S$;"--> challenging comprehension tests"
30035 GOSUB 35:LOCATE 13,1:PRINT S$;"--> more eye exercises and drills"
30040 GOSUB 35:LOCATE 15,1:PRINT S$;"--> instruction in speed reading fundamentals"
30045 GOSUB 35:LOCATE 17,1:PRINT S$;"--> survey of your present reading habits"
30050 GOSUB 35:LOCATE 21,1:PRINT S$;"And there's more . . ."
30060 MESSAGE$="Press <SPACE BAR> And See.":GOSUB 20
30065 '==\/ next screen
30070 CLS:LOCATE 1,1:PRINT S$;"This course also includes these exciting"
30075 LOCATE 3,1:PRINT S$;"features:":PAUSE =1500:GOSUB 35
30080 LOCATE 7,1:PRINT S$;"--> a 128-page workbook with charts and"
30085 LOCATE 9,1:PRINT S$;"    graphs to record your progress"
30090 PAUSE =500:GOSUB 35:LOCATE 11,1:PRINT S$;"--> a unique program (the Magic Converter)"
30095 LOCATE 13,1:PRINT S$;"    which allows you to test your reading"
30100 LOCATE 15,1:PRINT S$;"    speed on anything you want to read--"
30105 LOCATE 17,1:PRINT S$;"    right now and for years to come."
30110 GOSUB 35:LOCATE 20,1:PRINT S$;"Next up--a complete list of lesson topics."
30115 MESSAGE$="PRESS <SPACE BAR> FOR MENU OF LESSONS.":GOSUB 20
30116 '==\/lesson1
30117 X$=" SPEED READING . . . The Computer Course "
30119 GOSUB 17
30120 CLS:LOCATE 1,FNCENTER%(X$):COLOR 0,15:PRINT X$;:COLOR 7,0
30122 X$="LESSON ONE: PRINCIPLES OF SPEED READING"
30125 LOCATE 5,FNCENTER%(X$):PRINT X$;
30130 LOCATE 9,1:PRINT S$;"Find out how you can read faster--and"
30135 LOCATE 11,1:PRINT S$;"smarter--in just a short time.  Learn the "
30140 LOCATE 13,1:PRINT S$;"fundamental speed reading techniques you "
30145 LOCATE 15,1:PRINT S$;"need to know in order to increase your "
30150 LOCATE 17,1:PRINT S$;"reading speed and discover how the unique"
30155 LOCATE 19,1:PRINT S$;"capabilities of the computer can help"
30160 LOCATE 21,1:PRINT S$;"you master them."
30165 GOSUB 20
30170 '==\/lesson2
30175 X$=" SPEED READING . . . The Computer Course "
30180 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30185 X$="LESSON TWO: READING HABIT SURVEY"
30190 LOCATE 5,FN CENTER%(X$):PRINT X$;
30195 LOCATE 9,1:PRINT S$;"This computerized survey of your reading"
30200 LOCATE 11,1:PRINT S$;"skills will tell you in minutes exactly "
30205 LOCATE 13,1:PRINT S$;"which reading habits you need to acquire"
30210 LOCATE 15,1:PRINT S$;"and which ";CHR$(34);"bad";CHR$(34);" habits are holding you "
30215 LOCATE 17,1:PRINT S$;"back and keeping you from reading faster."
30220 GOSUB 20
30225 '==\/lesson3
30230 X$=" SPEED READING . . . The Computer Course "
30235 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30240 X$="LESSON THREE: READ FOR MAIN IDEAS"
30245 LOCATE 5,FN CENTER%(X$):PRINT X$;
30250 LOCATE 9,1:PRINT S$;"Train yourself to focus instantly on the"
30255 LOCATE 11,1:PRINT S$;"main ideas in any reading matter.  Improve"
30260 LOCATE 13,1:PRINT S$;"your reading speed and comprehension by"
30265 LOCATE 15,1:PRINT S$;"learning to analyze paragraph structure,"
30270 LOCATE 17,1:PRINT S$;"read phrases not individual words, and"
30275 LOCATE 19,1:PRINT S$;"spot the key signal words that unlock the"
30280 LOCATE 21,1:PRINT S$;"meaning of sentences at a glance."
30285 GOSUB 20
30290 '==\/lesson4
30295 X$=" SPEED READING . . . The Computer Course "
30300 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30305 X$="LESSON FOUR: PREREAD WITH A PURPOSE"
30310 LOCATE 5,FN CENTER%(X$):PRINT X$;
30315 LOCATE 9,1:PRINT S$;"Find out how prereading can save you an"
30320 LOCATE 11,1:PRINT S$;"enormous amount of time and effort.  This"
30325 LOCATE 13,1:PRINT S$;"vital speed reading technique allows you"
30330 LOCATE 15,1:PRINT S$;"to get the overall picture quickly and"
30335 LOCATE 17,1:PRINT S$;"then zero in on the important material."
30340 LOCATE 19,1:PRINT S$;"Learn how to do it in this lesson."
30345 GOSUB 20
30350 '==\/lesson5
30355 X$=" SPEED READING . . . The Computer Course "
30360 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30365 X$="LESSON FIVE: SKIM FOR SPEED"
30370 LOCATE 5,FN CENTER%(X$):PRINT X$;
30375 LOCATE 9,1:PRINT S$;"Everyone knows that skimming is one way"
30380 LOCATE 11,1:PRINT S$;"to read faster.  But do you know how to"
30385 LOCATE 13,1:PRINT S$;"get the most out of skimming?  Do"
30390 LOCATE 15,1:PRINT S$;"you know when to skim and when to slow"
30395 LOCATE 17,1:PRINT S$;"down?  Do you know how to skim for main"
30400 LOCATE 19,1:PRINT S$;"ideas and how to skim for details?"
30405 LOCATE 21,1:PRINT S$;"Learn how in this lesson."
30410 GOSUB 20
30415 '==\/lesson6
30420 X$=" SPEED READING . . . The Computer Course "
30425 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30430 X$=" LESSON SIX: EXPLORE PATTERN & STRUCTURE "
30435 LOCATE 5,FN CENTER%(X$):PRINT X$;
30440 LOCATE 9,1:PRINT S$;"Learn to read any piece of writing faster,"
30445 LOCATE 11,1:PRINT S$;"with better comprehension, by understanding"
30450 LOCATE 13,1:PRINT S$;"its structure.  This lesson teaches you"
30455 LOCATE 15,1:PRINT S$;"to pick out the five basic writing patterns."
30460 LOCATE 17,1:PRINT S$;"Then it shows you why recognizing these"
30465 LOCATE 19,1:PRINT S$;"patterns will increase your reading speed"
30470 LOCATE 21,1:PRINT S$;"and proficiency."
30475 GOSUB 20
30480 '==\/lesson7
30485 X$=" SPEED READING . . . The Computer Course "
30490 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30495 X$="LESSON SEVEN: IMPROVE RETENTION & RECALL"
30500 LOCATE 5,FN CENTER%(X$):PRINT X$;
30505 LOCATE 9,1:PRINT S$;"Discover why you forget information"
30510 LOCATE 11,1:PRINT S$;"you read and find out exactly how to"
30515 LOCATE 13,1:PRINT S$;"improve your retention and recall skills"
30520 LOCATE 15,1:PRINT S$;"by following five basic memory rules."
30525 GOSUB 20
30530 '==\/lesson8
30535 X$=" SPEED READING . . . The Computer Course "
30540 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30545 X$="LESSON EIGHT: EXTEND YOUR READING SKILLS"
30550 LOCATE 5,FN CENTER%(X$):PRINT X$;
30555 LOCATE 9,1:PRINT S$;"See how it all comes together and find"
30560 LOCATE 11,1:PRINT S$;"out how you can use your newly acquired"
30565 LOCATE 13,1:PRINT S$;"skills, no matter what you're reading."
30570 LOCATE 15,1:PRINT S$;"Let the Magic Converter program extend"
30575 LOCATE 17,1:PRINT S$;"your skills for years to come by allowing"
30580 LOCATE 19,1:PRINT S$;"you to measure your reading speed for"
30585 LOCATE 21,1:PRINT S$;"anything you ever choose to read."
30590 GOSUB 20
30595 '==\/ next screen
30596 X$=" SPEED READING . . . The Computer Course "
30597 CLS:LOCATE 1,FN CENTER%(X$)::COLOR 0,15:PRINT X$;:COLOR 7,0
30600 LOCATE 12,1:PRINT S$;"All this--and much more--in just eight"
30605 LOCATE 14,1:PRINT S$;"easy and stimulating lessons!"
30610 GOSUB 20
30620 '==\/last screen prior art
30625 CLS:LOCATE 1,1:PRINT S$;"OK, ";READER$;".  Enough talk.  Now for some"
30630 LOCATE 3,1:PRINT S$;"ACTION!  I'm going to prove to you how"
30635 LOCATE 5,1:PRINT S$;"this course will help you to increase your"
30640 LOCATE 7,1:PRINT S$;"reading speed AND improve your comprehension."
30645 LOCATE 11,1:PRINT S$;"Coming up next on the screen is a short"
30650 LOCATE 13,1:PRINT S$;"reading test.  I'll advance the screens"
30655 LOCATE 15,1:PRINT S$;"for you this time.  All you have to do is"
30665 LOCATE 17,1:PRINT S$;"read.  So, sit back, relax, and when you're ready . . ."
30670 MESSAGE$="PRESS <SPACE BAR> TO BEGIN READING!":GOSUB 20
30675 RETURN
40000 LOCATE 20,1:PRINT S$;"Then press <ENTER> ."
40005 LOCATE VTAB,42,,4,12:MAXLENGTH=3:GOSUB 100:LOCATE,,0,7,7
40010 LOCATE VTAB,42:PRINT SPACE$(3)
40020 'IF ((VAL(A$)=0   AND LEFT$(A$,1)<>"0") OR ( VAL(A$)<10 AND VAL(A$)>0 AND LEN(A$)>1 AND LEFT$(A$,1)<>"." AND NOT VAL(RIGHT$(A$,1)))) THEN GOSUB 90:LOCATE VTAB,42:PRINT "___":GOTO 40005
40021 B$="AQWERTYUIOPLKJHGFDSZXCVBNMqwertyuiop[]`';lkjhgfdsa\zxcvbnm,/!@#$%^&*()_+=-":WRONG=0
40022 FOR JJ=1 TO LEN (A$):IF (INSTR(B$,MID$(A$,JJ,1)) OR    INSTR("..",MID$(A$,JJ,2))) THEN WRONG=1:GOSUB 90:GOTO 40000 ELSE WRONG=0
40023 NEXT JJ
40025 LOCATE VTAB,42:PRINT A$;SPC(3-LEN(A$))
40030 GOSUB 35:RETURN
50000 LOCATE 25,1:PRINT SPACE$(80);:RETURN
51000 CLS:HEADER$="One Moment, Please.":GOSUB 50
51003 XY=FRE(""):RETURN
51304 ,12:MAXLENGTH=4:GOSUB 100:LOCATE,,0,7,7
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0211

     Volume in drive A has no label
     Directory of A:\

    ART      TXT      2032   3-20-84  12:52a
    CRC      TXT      1123  11-15-84   9:29a
    CRCK4    COM      1536  10-21-82   7:54p
    EYE      TXT      2919   1-01-80   1:34a
    JUSTIFY  ASM     72229   5-26-84   4:14p
    JUSTIFY  EXE     17792   5-26-84   4:22p
    LINEBUG  BAS       849   5-26-84   2:52p
    SR       BAS     44416   1-01-80   4:10a
    TIMED    TXT      2218   4-17-84  11:51a
    TUTOR2            1632   5-26-84   3:15p
    TUTORIAL          3978   5-26-84   4:26p
    XXX                640   7-01-84   4:54p
           12 file(s)     151364 bytes
                            6144 bytes free
