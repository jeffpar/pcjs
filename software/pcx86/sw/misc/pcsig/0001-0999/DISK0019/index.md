---
layout: page
title: "PC-SIG Library Disk #19"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0019/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0019"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ARCHIE"

    The title program, ARCHIE, gives you the basic elements for doing
    structured BASIC programming.  ARCHIE is a fun tutorial for beginners
    in BASIC.  RV-EDIT is a simple and sturdy full-screen text editor
    written in BASIC and PCS is a program control system designed to help
    take charge of your PC.  RV-EDIT and PCS are well documented and invite
    tinkering!
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult the .DOC files for program
    documentation.
    
    System Requirements:  128k, two disk drives, some of the programs on
    this disk require color graphics.
    
    File Descriptions:
    
    MENU     BAS  Menu program for Disk No 19
    ARCHIE   DOC  Documentation for ARCHIE
    ARCHIE   BAS  Archie la cucharacha - game, BASIC tutorial & fun program
    PCS      DOC  Program control system description
    CONTROL  BAS  Runs the prime program on a BASIC diskette
    CONTROL  PCS  Returns control to Drive "A"
    AUTOEXEC BAT  Requests date & time and gives control to SYSTEM.BAT
    SYSTEM   BAT  Loads BASICA, runs TRANSFER.BAS, runs b:CONTROL.BAT
    MENU     PCS  Sample menu file for BASIC programs
    EXIT     PCS  Mergeable exit hierarchy
    COVER    PCS  Mergeable cover page and exit hierarchy
    CONTROLD PCS  Copy to CONTROL.BAT on data diskettes
    CONTROLB PCS  Copy to CONTROL.BAT on BASIC program diskettes
    TRANSFER BAS  Displays disk swap message, waits for keystroke
    RV-EDIT  DOC  Full screen editor documentation
    RV-EDIT  BAS  Full screen editor  (Limited usefulness)
    CONTROLM PCS  Copy to CONTROL.BAT on machine language program diskettes
    RUN      BAT  Runs the program passed as a parameter
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARCHIE.BAS

```bas
1 WIDTH 80:COLOR  8,1,7:CLS:CLEAR:KEY(2) ON:ON KEY(2) GOSUB 65140
10 GOTO 20010:'initialization
500 '
501 'archie moves with arrows
510 F=1-(F=1):S=X:T=Y:W=U:Z=V:X$=INKEY$:IF LEN(X$)<2 THEN 540
520 K=ASC(MID$(X$,2,1)):G=-G*(K<>75 AND K<>77)+(K=75)-(K=77):H=-H*(K<>72 AND K<>80)+(K=72)-(K=80)
530 IF K=79 THEN 590:'end
540 M=M-1:LOCATE 24,35:PRINT M;:IF M<1 THEN 590 ELSE R=100*RND(1):IF R>(P+10) THEN 550
542 U=U+(40-ABS(U-X))*SGN(U-X)/4-6+11*RND(1):V=V+(25-ABS(V-Y))*SGN(V-Y)/4-5+9*RND(1)
544 IF U<1 THEN U=10
545 IF U>32 THEN U=23
546 IF V<1 THEN V=3
547 IF V>21 THEN V=18
550 X=X+G:Y=Y+H:IF X<1 THEN X=1:SOUND 37,1:SOUND 37,0
551 IF X>33 THEN X=33:SOUND 370,1:SOUND 37,0
552 IF Y<1 THEN Y=1:SOUND 1370,1:SOUND 37,0
553 IF Y>21 THEN Y=21:SOUND 1370,1:SOUND 37,0
560 COLOR 10,5:LOCATE T,S:PRINT C$(0);:LOCATE Y,X:PRINT C$(F);
562 COLOR 15,5:LOCATE Z,W:PRINT C$(0);:LOCATE V,U:PRINT C$(3);
570 IF ABS(X-U)<6 AND ABS(Y-V)<2 THEN 590 ELSE 510
590 COLOR 7,0:RETURN
600 '
601 'single note la cucaracha
610 IF C<1 OR C>49  THEN C=1:RESTORE:G=-1:'restore at start or song is over
620 READ J,K : IF J=-1 THEN 670:'end
630 SOUND M(J),K:IF J=0 AND K=1 THEN 620
640 G=-G*(K<>3)+(K=3)*((G=-1)-(G=1))
650 IF X<2 THEN X=2
654 IF Y<2 OR Y>25 THEN Y=2
656 LOCATE Y,X:PRINT C$(1);:X=X+G
660 C=C+1:GOTO 690
670 C=0
690 RETURN
700 '
701 'hi, i'm archie - fix shift
710 X=20:Y=24:C=0:T=0
720 GOTO 750
730 R= RND(1):IF R>0.5 THEN KEY OFF:LOCATE 25,1:PRINT Z$;
740 R= RND(1):IF R>0.4 THEN KEY ON
750 X$=INKEY$:DEF SEG:POKE 106,0:IF X$<>"" THEN IF LEFT$(X$,1)=CHR$(21) THEN 780
760 GOSUB 610
762 T=T+1:IF T<100 THEN 730
780 LOCATE 24,1:PRINT"                                       ";
790 RETURN
800 '
801 'train
810 RESTORE:FOR I=1 TO LEN(J$)
820 READ J,K:SOUND M(J),K:IF J=0 AND K=1 THEN 820
830 LOCATE Y,39-I:PRINT LEFT$(J$,I);
840 NEXT
890 RETURN
900 '
1001 'play la cucaracha
1010 COLOR 0,7:H=1:I=32:WHILE I>20:H=-1*(H=2)-2*(H=1):LOCATE Y,I:PRINT C$(H);
1012 :SOUND (I*37),2:I=I-1:WEND
1020 SOUND 1000,1:RESTORE 30010:G=-1
1030 READ J,K : IF J=-1 THEN 1070
1040 SOUND M(J),K:IF J=0 AND K=1 THEN 1030
1050 G=-G*(K<>3)+(K=3)*((G=-1)-(G=1))
1052 LOCATE Y,I:PRINT C$(1);:I=I+G
1060 GOTO 1030
1070 WHILE I>1:H=-1*(H=2)-2*(H=1):LOCATE Y,I:PRINT C$(H);
1072 :SOUND (I*37),2:I=I-1:WEND
1090 RETURN
1100 '
1101 'typing sr
1110 LOCATE 21,1:COLOR 0,7
1112 PRINT:PRINT:PRINT:PRINT
1120 FOR I=1 TO LEN(J$):LOCATE 19,I+2:PRINT MID$(J$,I,1);
1122 LOCATE 20,I:PRINT C$(1);
1130 SOUND 1000,1:SOUND 37,0:SOUND 32767,1
1140 NEXT
1150 LOCATE 20,I:PRINT"       ";
1190 RETURN
1300 '
1301 'hit space when ready sr
1310 L=-D/5:SOUND 370,1
1320 COLOR 18+16*(L<0),7:LOCATE Y,2:PRINT F$+ " - HIT SPACE WHEN READY ";:COLOR 0,7
1330 X$=INKEY$:DEF SEG:POKE 106,0:IF X$<>"" THEN 1350
1332 L=L+1:IF L<1 THEN 1320
1340 SOUND L*37,1:SOUND 32767,14:GOTO 1320
1350 LOCATE Y,2:FOR L=1 TO LEN(F$)+24:PRINT " ";:NEXT:'x$ contains key hit
1390 RETURN
1400 '
1401 'your choice sr
1410 L=-D/3:SOUND 370,1
1420 COLOR 18+16*(L<0),7:LOCATE Y,2:PRINT " YOUR CHOICE - "+F$+" - ? ";:COLOR 0,7
1430 X$=INKEY$:DEF SEG:POKE 106,0:IF X$<>"" THEN 1450
1432 L=L+1:IF L<1 THEN 1420
1440 SOUND L*37,1:SOUND 32767,14:GOTO 1420
1450 LOCATE Y,2:FOR L=1 TO LEN(F$)+20:PRINT " ";:NEXT:'x$ contains key hit
1490 RETURN
1500 '
1501 'sing la cucaracha
1510 X=32:Y=5
1520 RESTORE
1530 READ J,K : IF J=-1 THEN 1590:'end of song
1540 SOUND M(J),K:IF J=0 AND K=1 THEN 1530:'staccato
1550 G=(J=49 OR J=44 OR J=51):IF G<>0 THEN LOCATE Y,X+1:PRINT C$(0);:Y=Y+2:X=32
1552 LOCATE Y,X:PRINT C$(3);:X=X-1
1560 GOTO 1530
1590 RETURN
2200 '
2201 'type-delay
2210 GOSUB 1110
2220 J$="   ":I=FRE(""):GOSUB 1110:SOUND 32767,D/50
2290 RETURN
2600 '
2601 'typed menu
2610 FOR I=2 TO 23:FOR H=0 TO 2:LOCATE I+(H=0),1:PRINT C$(H);:SOUND I*100,1:NEXT:NEXT
2611 COLOR 7,0:CLS:COLOR 0,7
2612 LOCATE 24,1:PRINT
2614 FOR I=6 TO 1 STEP -1:PRINT:SOUND I*387,1:SOUND 32767,8:NEXT
2620 J$=C$(3)+"SELECT BY NUMBER"+C$(2):GOSUB 2210
2640 J$="1 -- Sing Along":GOSUB 2210
2642 J$="2 -- Cucaracha Quiz":GOSUB 2210
2644 J$="3 -- hi, i'm archie":GOSUB 2210
2646 J$="4 -- Game - Archie & Mehitabel":GOSUB 2210
2650 J$="5 -- Almost Painless":GOSUB 1110 GOTO 2640
2652 J$="      Structured BASIC":GOSUB 2210
2660 GOSUB 1110
2670 J$="8 -- Typed Menu":GOSUB 2210
2672 J$="9 -- Exit Program":GOSUB 2210
2680 Y=23:GOSUB 1410 CHOICE:K=ASC(X$)-48:IF K>0 AND K<10 THEN 2682 ELSE 2680
2682 X=FRE(""):Q=8:'coming from menu
2690 RETURN
2700 '
2701 'quick menu
2710 COLOR 15,4:CLS:LOCATE 2,2:PRINT C$(3)+" SELECT BY NUMBER "+C$(2)
2740 LOCATE 4,2:PRINT"1 -- Sing Along"
2742 LOCATE 6,2:PRINT"2 -- Cucaracha Quiz"
2744 LOCATE 8,2: PRINT"3 -- hi, i'm archie"
2746 LOCATE 10,2:PRINT"4 -- Game - Archie & Mehitabel"
2750 LOCATE 12,2:PRINT"5 -- Almost Painless"
2752 LOCATE 13,2:PRINT"      Structured BASIC"
2770 LOCATE 17,2:PRINT"8 -- Typed Menu"
2772 LOCATE 19,2:PRINT"9 -- Exit Program"
2780 Y=23:GOSUB 1410 CHOICE:K=ASC(X$)-48:IF K>0 AND K<10 THEN 2782 ELSE 2780
2782 X=FRE(""):Q=8:'coming from menu
2790 RETURN
3100 '
3101 'game - archie & mehitabel
3110 KEY OFF:P=2:M=600
3112 COLOR 0,7,0:CLS:LOCATE 23,1:PRINT"  Help Archie tag Mehitabel  TIME: ";
3120 LOCATE 25,1:PRINT" HIT ("+CHR$(24)+CHR$(25)+CHR$(26)+CHR$(27)+") TO MOVE HIM (OR HIT "+CHR$(34)+"End"+CHR$(34)+")";
3121 LOCATE 22,2:PRINT F$+" Promoted to ";:IF P=2 THEN PRINT "Junior Clerk";
3122 IF P=4 THEN PRINT"Assoc. Clerk";
3123 IF P=8 THEN PRINT"Staff Clerk";
3124 IF P=16 THEN PRINT"Advisory Clerk";
3125 IF P=32 THEN PRINT"Senior Clerk";
3126 IF P=64 THEN PRINT"Manager";
3128 IF P=128 THEN PRINT"Gen. Mgr.";
3129 IF P>128 THEN 3190
3132 X=2:Y=21:U=30:V=2:G=0:H=0
3134 COLOR 7,5:RESTORE 30070:FOR I=1 TO 21:READ J:SOUND 37+J*P/4,1:LOCATE I,1:PRINT"                                        ":NEXT
3140 GOSUB 510:SOUND 400,1:SOUND 1000,1:SOUND 100,1:IF K=79 OR P>127 OR M<1 THEN 3180
3160 P=P*2:GOTO 3112
3180 COLOR 0,7:LOCATE 10,2:PRINT" GAME OVER ":LOCATE 12,2
3181 IF K=79 THEN PRINT" YOU QUIT ":GOTO 3188
3182 IF M<1 THEN PRINT" YOU USED UP ALL YOUR TIME, SORRY ":GOTO 3188
3183 IF M>300 THEN PRINT" EXCELLENT! YOU ARE NOW PRESIDENT. " ELSE IF M>100 THEN PRINT" GOOD! YOU ARE NOW VICE PRESIDENT. " ELSE PRINT" DO IT FASTER NEXT TIME! "
3188 Y=14:GOSUB 1310 SPACE:IF X$<>" " THEN 3188
3190 RETURN
3200 '
3201 'secret message
3210 COLOR 31,0:CLS
3220 LOCATE  6,10:PRINT"SECRET MESSAGE FOR YOU"
3230 LOCATE  9,10:PRINT"NEXT TIME YOU RUN"
3240 LOCATE 11,10:PRINT"THIS PROGRAM, HIT"
3250 LOCATE 13,10:PRINT"``F3'' (INSTEAD OF SPACE)."
3260 LOCATE 15,10:PRINT"YOU'LL GO RIGHT TO"
3270 LOCATE 17,10:PRINT"QUICK MENU. <ARCHIE>"
3280 X=14:Y=22:GOSUB 1310:'hit space when ready
3290 RETURN
3300 '
3301 'color/mono switch
3310 COLOR 15,8:CLS
3320 PRINT:PRINT:PRINT"  SECRET MENU FOR YOU ":PRINT:PRINT:PRINT"  SELECTION      RESULT"
3330 PRINT:PRINT:PRINT"                  Switch to IBM Mono                                Display"
3340 PRINT:PRINT:PRINT"                  Switch to TV or                                   Monitor"
3350 PRINT:PRINT:PRINT:PRINT:PRINT"                  BACK TO MAIN MENU"
3352 COLOR 0,7,0:Y=8:X=2:J$=" F1 ":GOSUB 4210 BOX:Y=12:J$=" F2 ":GOSUB 4210 BOX:Y=18:J$="  SPACE  ":GOSUB 4210 BOX:COLOR 15,8
3360 Y=23:GOSUB 1410 CHOICE
3362 X$=LEFT$(X$,1):IF X$="m" THEN 3370 ELSE IF X$="c" THEN 3375 ELSE 3390
3370 CLS:WIDTH 40: DEF SEG=0: A=PEEK(&H410): POKE &H410,A OR &H30
3372 LOCATE 1,1,0,12,13:OUT 948,2:OUT 949,62:'center 40 col on IBM mono
3374 GOTO 3380
3375 WIDTH 80: DEF SEG=0: A=PEEK(&H410): POKE &H410,(A AND &HCF) OR &H20
3380 SCREEN 0,1,0:WIDTH 80:COLOR 0,0,0:CLS:WIDTH 40:COLOR 0,7,0:KEY OFF:LOCATE 1,1,0
3382 DEF SEG=0:IF (PEEK(&H410) AND &H30)=&H30 THEN LOCATE 1,1,0,12,13:OUT 948,2:OUT 949,62:'IBM mono display
3384 DEF SEG=0:IF (PEEK(&H410) AND &H30)<>&H30 THEN LOCATE 1,1,0,6,7:'TV/mon
3390 RETURN
4100 '
4101 'box sr single lines
4110 L=LEN(J$):LOCATE Y,X:PRINT CHR$(218);:FOR I=1 TO L:PRINT CHR$(196);:NEXT:PRINT CHR$(191);
4120 LOCATE Y+1,X:PRINT CHR$(179)+J$+CHR$(179);
4130 LOCATE Y+2,X:PRINT CHR$(192);:FOR I=1 TO L:PRINT CHR$(196);:NEXT:PRINT CHR$(217);
4190 RETURN
4200 '
4201 'box sr double lines
4210 L=LEN(J$):LOCATE Y,X:PRINT CHR$(201);:FOR I=1 TO L:PRINT CHR$(205);:NEXT:PRINT CHR$(187);
4220 LOCATE Y+1,X:PRINT CHR$(186)+J$+CHR$(186);
4230 LOCATE Y+2,X:PRINT CHR$(200);:FOR I=1 TO L:PRINT CHR$(205);:NEXT:PRINT CHR$(188);
4290 RETURN
4300 '
4301 'box sr shadow top
4310 L=LEN(J$):LOCATE Y,X:PRINT CHR$(218);:FOR I=1 TO L:PRINT CHR$(196);:NEXT:PRINT CHR$(183);
4320 LOCATE Y+1,X:PRINT CHR$(179)+J$+CHR$(186);
4330 LOCATE Y+2,X:PRINT CHR$(212);:FOR I=1 TO L:PRINT CHR$(205);:NEXT:PRINT CHR$(188);
4390 RETURN
4400 '
4401 'box sr shadow bot
4410 L=LEN(J$):LOCATE Y,X:PRINT CHR$(201);:FOR I=1 TO L:PRINT CHR$(205);:NEXT:PRINT CHR$(184);
4420 LOCATE Y+1,X:PRINT CHR$(186)+J$+CHR$(179);
4430 LOCATE Y+2,X:PRINT CHR$(211);:FOR I=1 TO L:PRINT CHR$(196);:NEXT:PRINT CHR$(217);
4490 RETURN
4500 '
4501 'box sr char=ASC(c)
4510 IF C=0 OR (C>6 AND C<14) OR (C>27 AND C<33) OR C=255 THEN 10520 ELSE 10530
4520 IF C=10 THEN C=219
4521 IF C=11 THEN C=176
4522 IF C=12 THEN C=177
4523 IF C=13 THEN C=178
4524 IF (C<10 OR C>13) AND C<>219 AND C<>176 AND C<>177 AND C<>178 THEN C=254
4530 L=LEN(J$):LOCATE Y,X:PRINT CHR$(C);:FOR I=1 TO L:PRINT CHR$(C);:NEXT:PRINT CHR$(C);
4540 LOCATE Y+1,X:PRINT CHR$(C)+J$+CHR$(C);
4550 LOCATE Y+2,X:PRINT CHR$(C);:FOR I=1 TO L:PRINT CHR$(C);:NEXT:PRINT CHR$(C);
4590 RETURN
4600 '
4601 'line sr single line
4610 J=U-X:K=V-Y:G=-(J>0)+(J<0):H=-(K>0)+(K<0):'x,y = start, u,v = end, g tells horiz dir, h tells vert dir
4620 IF G=0 THEN 4630 ELSE FOR I=0 TO J STEP G:LOCATE Y,X+I:PRINT CHR$(196);:NEXT:LOCATE Y,U
4622 PRINT CHR$(-191*(J>0 AND K>0)-192*(J<0 AND K<0)-218*(J<0 AND K>0)-217*(J>0 AND K<0));
4630 IF H=0 THEN 4640 ELSE FOR I=0 TO K-H STEP H:LOCATE Y+H*(1+ABS(I)),U:PRINT CHR$(179);:NEXT
4640 LOCATE V,U:PRINT CHR$(-24*((J=0 AND K<0)+(J>0 AND K<0)+(J<0 AND K<0))-25*((J=0 AND K>0)+(J<0 AND K>0)+(J>0 AND K>0))-16*(J>0 AND K=0)-17*(J<0 AND K=0));
4690 RETURN
4700 '
4701 'line sr double line
4710 J=U-X:K=V-Y:G=-(J>0)+(J<0):H=-(K>0)+(K<0):'x,y = start, u,v = end, g tells horiz dir, h tells vert dir
4720 IF G=0 THEN 4730 ELSE FOR I=0 TO J STEP G:LOCATE Y,X+I:PRINT CHR$(205);:NEXT:LOCATE Y,U:PRINT CHR$(206);
4722 PRINT CHR$(-187*(J>0 AND K>0)-200*(J<0 AND K<0)-201*(J<0 AND K>0)-188*(J>0 AND K<0));
4730 IF H=0 THEN 4740 ELSE FOR I=0 TO K-H STEP H:LOCATE Y+H*(1+ABS(I)),U:PRINT CHR$(186);:NEXT
4740 LOCATE V,U:PRINT CHR$(-24*((J=0 AND K<0)+(J>0 AND K<0)+(J<0 AND K<0))-25*((J=0 AND K>0)+(J<0 AND K>0)+(J>0 AND K>0))-16*(J>0 AND K=0)-17*(J<0 AND K=0));
4790 RETURN
5100 '
5101 'initializing/copyright
5110 CLS
5120 LOCATE  6, 9:COLOR 1,7:PRINT "ARCHIE THE COCKROACH":COLOR 0,7
5130 LOCATE  9,10:PRINT "o  A Song"
5140 LOCATE 11,10:PRINT "o  A Quiz"
5150 LOCATE 13,10:PRINT "o  A Game"
5160 LOCATE 15,10:PRINT "o  How to Do"
5162 LOCATE 16,10:PRINT "    Almost Painless"
5164 LOCATE 17,10:PRINT "    Structured BASIC"
5180 LOCATE 21,2:PRINT "COPYRIGHT (c) 1982 IRA GLICKSTEIN       RD#1 BOX 363 APALACHIN NY  607-625-3366";
5181 LOCATE 23,2:PRINT"NOTE:  Non-commercial copy allowed if          this notice is included."
5182 COLOR 22,7:LOCATE 2,2:PRINT " INITIALIZING ":COLOR 0,7
5190 RETURN
5200 '
5201 'gobbledegook sr
5210 CLS:X=FRE(""):KEY ON:KEY OFF:K=1+INT(10*RND(1)):IF K$=CHR$(98)+CHR$(121)+CHR$(63) THEN 5230 ELSE 21110
5220 GOTO 5290
5230 RESTORE 30070:I=0:CLS
5240 I=I+1:READ J:IF J<0 THEN 5280 ELSE PRINT CHR$(J-I*I);:GOTO 5240
5280 Y=25:GOSUB 1310 SPACE
5290 RETURN
5900 '
5901 'exit program
5910 COLOR 15,3:CLS
5920 LOCATE  6, 9:PRINT "ARCHIE THE COCKROACH"
5930 LOCATE  9,10:PRINT "o  A Song"
5940 LOCATE 11,10:PRINT "o  A Quiz"
5950 LOCATE 13,10:PRINT "o  A Game"
5960 LOCATE 15,10:PRINT "o  How to Do"
5962 LOCATE 16,10:PRINT "    Almost Painless"
5964 LOCATE 17,10:PRINT "    Structured BASIC"
5980 LOCATE 21,2:PRINT "COPYRIGHT (c) 1982 IRA GLICKSTEIN       RD#1 BOX 363 APALACHIN NY  607-625-3366";
5982 COLOR 23,0:LOCATE 25,2:PRINT " THANKS FOR PLAYING  «IRA GLICKSTEIN» ":COLOR 7,0:LOCATE 1,1
5989 Q=9
5990 RETURN
6000 '
6001 'quiz - senior sr
6010 GOSUB 6110:'get name
6012 PRINT" "+F$+", DO YOU WANT TO ANSWER":PRINT" QUESTIONS ABOUT COCKROACHES (Y/N)?"
6014 Y=24:GOSUB 1410 CHOICE:IF X$<>"y" AND X$<>"Y" THEN 6090:'quit
6020 GOSUB 6210
6030 GOSUB 6310
6040 GOSUB 6410
6050 GOSUB 6510
6090 RETURN
6100 '
6101 'get users name
6110 COLOR 0,0,0:CLS:COLOR 0,7,7:LOCATE 25,1:PRINT"                                        ":LOCATE 24,1:PRINT:PRINT "  "+C$(2)+"CUCARACHA QUIZ"+C$(3):Y=24
6120 PRINT:PRINT " What do they call you?"
6122 PRINT "  (please enter name and hit RETURN)"
6130 PRINT:INPUT N$:F$=N$
6140 K=0:FOR I=LEN(F$) TO 1 STEP -1:IF MID$(F$,I,1 )=" " THEN K=I
6142  NEXT
6144 IF K<>0 THEN 6150
6148  PRINT:PRINT" That's NOT your FULL name !":GOTO 6122
6150 F$=MID$(N$,1,K-1):IF LEN(F$)>10 THEN F$=LEFT$(F$,10):PRINT " GIVE ME A BREAK !":GOTO 6140
6152 PRINT:PRINT " HI, ";:COLOR 1,7:PRINT N$;:COLOR 0,7:PRINT ","
6154 PRINT:PRINT " May I call you ";:COLOR 1,7:PRINT F$;:COLOR 0,7:PRINT" (Y/N) ?"
6156 PRINT:Y=24:GOSUB 1410 CHOICE:PRINT
6160 IF MID$(X$,1,1)<>"y" AND MID$(X$,1,1)<>"Y" THEN IF LEN(N$)>11 THEN F$=LEFT$(N$,LEN(F$)+2)+" :í F$τN$
6162 PRINT " OK, ";:COLOR 1,7:PRINT F$;:COLOR 0,7:PRINT ","
6164 PRINT:PRINT "  -- THAT'S A NICE NAME FOR A ";:COLOR 1,7:PRINT "COCKROACH";:COLOR 0,7:PRINT "!"
6180 FOR I=32 TO 1 STEP -1:F=1-(F=1):LOCATE 21,I:PRINT C$(F);:SOUND 32767,4:NEXT:PRINT:PRINT:PRINT:PRINT
6190 RETURN
6200 '
6201 'question 1
6210 COLOR 0,7,7:CLS:LOCATE 2,2:PRINT C$(2)+"CUCARACHA QUIZ"+C$(3):Y=22:X=10
6211 LOCATE 5,2:PRINT" ``Cockroaches'' are called:"
6212 PRINT " 1 -- ``Schaben'' in German"
6213 PRINT " 2 -- ``Blattes'' in French
6214 PRINT " 3 -- ``Cucarachas'' in Spanish"
6215 PRINT " 4 -- All of the above"
6216 PRINT " 5 -- None of the above"
6220 PRINT:GOSUB 1410 CHOICE:LOCATE 12,1:K=ASC(X$)-48:IF K<1 OR K>5 THEN 6210
6230 IF K<>4 THEN PRINT:PRINT" WRONG -- 4 is correct"
6240 IF K=4 THEN PRINT:PRINT" CORRECT !!!"
6250 PRINT:PRINT:PRINT" Roaches are very common -- there is a   word for them in nearly all languages.":GOSUB 1310 SPACE
6290 RETURN
6300 '
6301 'question 2
6310 CLS:LOCATE 2,2:PRINT C$(2)+"CUCARACHA QUIZ"+C$(3):Y=22:X=10
6311 LOCATE 5,2:PRINT" Cockroaches spread disease by walking"
6312 PRINT " over filth and then onto food."
6320 PRINT " T -- True"
6321 PRINT " F -- False"
6330 PRINT:GOSUB 1410 CHOICE:LOCATE 12,1:IF X$<>"T" AND X$<>"t" AND X$<>"F" AND X$<>"f" THEN 6310
6340 PRINT:PRINT:PRINT" FALSE -- This has actually never been   proved.":GOSUB 1310 SPACE
6390 RETURN
6400 '
6401 'question 3
6410 CLS:LOCATE 2,2:PRINT C$(2)+"CUCARACHA QUIZ"+C$(3):Y=22:X=10
6411 LOCATE 5,2:PRINT" Because roaches are repelled by light,  their presence is often unsuspected."
6420 PRINT " T -- True"
6421 PRINT " F -- False"
6430 PRINT:GOSUB 1410 CHOICE:LOCATE 12,1:IF X$<>"T" AND X$<>"t" AND X$<>"F" AND X$<>"f" THEN 6410
6440 PRINT:PRINT:PRINT" TRUE -- They are usually noticed only   when lights are turned on at night and  they scurry for cover in the darkness   of cracks.  They can flatten their      bodies to conceal themselves.":GOSUB 1310 CHOICE
6490 RETURN
6500 '
6501 'question 4
6510 CLS:LOCATE 2,2:PRINT C$(2)+"CUCARACHA QUIZ"+C$(3):Y=22:X=10
6511 LOCATE 5,2:PRINT" Roaches are smarter than ants"
6520 PRINT " T -- True"
6521 PRINT " F -- False"
6530 PRINT:GOSUB 1410 CHOICE:LOCATE 12,1:IF X$<>"T" AND X$<>"t" AND X$<>"F" AND X$<>"f" THEN 6510
6540 PRINT:PRINT:PRINT" Both TRUE and FALSE - American roaches  have limited ability (compared with     ants) to find their way through a       simple maze.  However, they have"
6542 PRINT " better memories than ants, and learned  to avoid cracks when given a weak       electrical shock.":GOSUB 1310 SPACE
6590 RETURN
6600 '
7000 '
7001 'hi i'm archie - senior sr
7010 KEY ON:GOSUB 7110:'intro
7020 GOSUB 7210
7030 GOSUB 7310
7040 GOSUB 710
7050 GOSUB 7410
7080 KEY OFF:DEF SEG:POKE 106,0
7090 RETURN
7100 '
7101 'hi i'm archie - intro
7110 FOR I=2 TO 23:FOR H=0 TO 2:LOCATE I+(H=0),1:PRINT C$(H);:SOUND I*100,1:NEXT:NEXT
7120 COLOR 7,0:CLS:COLOR 0,7
7130 LOCATE 24,1:PRINT:LOCATE 24,6:PRINT C$(2);
7140 FOR I=6 TO 1 STEP -1:PRINT:SOUND I*387,1:SOUND 32767,8:NEXT
7150 LOCATE 18,6:PRINT C$(0);
7190 RETURN
7200 '
7201 'hi i'm archie - my name
7210 J$=" ``la cucaracha'' - my favorite.":GOSUB 2210 TYPE-DELAY:GOSUB 1110 TYPE
7220 J$=" i'm archie the cockroach.":GOSUB 2210 TYPE-DELAY:GOSUB 1110 TYPE
7230 J$=" in spanish my name is":GOSUB 1110 TYPE
7240 J$="``archie la cucaracha.''":GOSUB 2210 TYPE-DELAY:GOSUB 1110 TYPE
7250 J$=" i type in lower case `cause":GOSUB 1110 TYPE
7260 J$="i can't hold the shift key.":GOSUB 2210 TYPE-DELAY
7290 RETURN
7300 '
7301 'hi i'm archie - loose wire
7310 GOSUB 7380:'loose wire
7320 J$=" oops -- i see a loose wire":GOSUB 1110 TYPE:GOSUB 7380:'loose wire
7330 J$="by the function keys.":GOSUB 1110 TYPE:GOSUB 7380:J$="   ":GOSUB 1110 TYPE:GOSUB 7380
7340 J$=" i'll hold the wire while you":GOSUB 1110 TYPE:GOSUB 7380
7350 J$="hit ``f3'' and i bet this thing":GOSUB 1110 TYPE:GOSUB 7380
7360 J$="will shift to upper case.":GOSUB 1100 TYPE:GOSUB 7380:J$="  ":GOSUB 1110 TYPE:GOSUB 7380
7380 R=1+3*RND(1):FOR I=1 TO R:KEY OFF:LOCATE 25,1:PRINT Z$;:SOUND 370*I,1:SOUND 37,0:SOUND 32767,5:SOUND 37*I,1:KEY ON:SOUND 730*I,1:SOUND 37,0:NEXT:RETURN
7390 RETURN
7401 'hi i'm archie - about bugs
7410 KEY ON:J$=" THANKS !":GOSUB 2210 TYPE-DELAY:GOSUB 1110 TYPE
7420 J$=" LUCKY I FIXED THAT LOOSE WIRE.":GOSUB 2210 TYPE-DELAY
7430 J$=" MOST OF THE TIME, I CAN'T":GOSUB 1110 TYPE
7440 J$="FIX TOUGH HARDWARE BUGS.":GOSUB 2210 TYPE-DELAY
7450 J$=" SOFTWARE BUGS ARE EASIER !!!":GOSUB 2210 TYPE-DELAY
7460 J$=" YOU SEE, I'M THE ORIGINAL":GOSUB 1110 TYPE
7470 J$="SOFTWARE"+C$(2)+"BUG !!!":GOSUB 2210 TYPE-DELAY:GOSUB 1110 TYPE
7480 J$=" WHEN I'M IN YOUR PROGRAM,":GOSUB 1110 TYPE
7482 J$="DON'T GET MAD AT ME --":GOSUB 2210 TYPE-DELAY
7484 J$=" YOU PUT ME THERE - I TRY AS":GOSUB 1110 TYPE
7486 J$="HARD AS I CAN TO GET OUT !!!":GOSUB 1110 TYPE
7488 Y=23:GOSUB 1310 CHOICE
7490 RETURN
7500 '
8000 '
8001 'sing along - senior sr
8010 GOSUB 8110:'first verse
8020 LOCATE 23,2:PRINT"MORE (Y/N) ?":Y=24:GOSUB 1410 CHOICE:IF X$="N" OR X$="n" THEN 8090:'quit
8030 GOSUB 8210:'second verse
8040 LOCATE 23,2:PRINT"MORE (Y/N) ?":Y=24:GOSUB 1410 CHOICE:IF X$="N" OR X$="n" THEN 8090 ELSE 8010
8090 RETURN
8100 '
8101 'sing along - first verse
8110 COLOR 15,6:CLS:LOCATE 2,6:PRINT"SING ALONG WITH MEHITABEL   -1-"
8120 LOCATE 5,2:PRINT"La Cu-Ca-RA-Cha !";
8122 LOCATE 7,2:PRINT"  La Cu-Ca-RA-Cha !";
8130 LOCATE 9,2:PRINT"Ar-chie is a";
8132 LOCATE 11,2:PRINT"  Friend of mine . . .";
8140 LOCATE 13,2:PRINT"La Cu-Ca-RA-Cha !";
8142 LOCATE 15,2:PRINT"  La Cu-Ca-RA-Cha !";
8150 LOCATE 17,2:PRINT"A Fin-er friend";
8152 LOCATE 19,2:PRINT"  You'll never find !!!";
8160 GOSUB 1510 SONG
8190 RETURN
8201 'sing along - second verse
8210 COLOR 15,3:CLS:LOCATE 2,6:PRINT"SING ALONG WITH MEHITABEL   -2-"
8220 LOCATE 5,2:PRINT"If SOFT-ware bugs you!";
8222 LOCATE 7,2:PRINT" If SOFT-ware bugs you!";
8230 LOCATE 9,2:PRINT"You can give";
8232 LOCATE 11,2:PRINT" Yourself a break . .";
8240 LOCATE 13,2:PRINT"Use STRUCT-ured BAS-IC";
8242 LOCATE 15,2:PRINT" Use STRUCT-ured BAS-IC";
8250 LOCATE 17,2:PRINT"Do it right for";
8252 LOCATE 19,2:PRINT" Hea-ven's sake !!!";
8260 GOSUB 1510 SONG
8290 RETURN
9000 '
10000 '
10001 'structured BASIC - senior sr
10010 COLOR 0,7,0:CLS:KEY OFF:LOCATE 2,2:PRINT" ALMOST PAINLESS STRUCTURED BASIC":LOCATE 4,2:PRINT C$(2)+"  Select by Number  "+C$(3)
10020 LOCATE 8,2:PRINT"1 -- THE PROBLEM"
10030 LOCATE 10,2:PRINT"2 -- A STRUCTURED APPROACH"
10040 LOCATE 12,2:PRINT"3 -- HOW TO MAKE YOUR LIFE EASIER"
10050 LOCATE 20,2:PRINT"9 -- BACK TO MAIN MENU"
10070 Y=23:GOSUB 1410 CHOICE:K=ASC(X$)-48:IF K <1 OR K>4 AND K<>9 THEN 10070 ELSE IF K=9 THEN 10090:'9=quit
10080 ON ASC(X$)-48 GOSUB 11010,12010,13010:'1=problem 2=approach 3=how
10082 GOTO 10010
10090 RETURN
11001 'the problem - senior sr
11010 D=D*1000
11020 GOSUB 11110
11030 GOSUB 11210
11040 GOSUB 11310
11050 GOSUB 11410
11060 GOSUB 11510
11070 GOSUB 11610:'dinner time
11080 D=D/1000
11090 RETURN
11100 '
11101 'the problem - intro
11110 COLOR 15,2,2:CLS:LOCATE 16,2:PRINT"A PROGRAM IS LIKE A TRAIN":COLOR 7,2
11112 LOCATE 18,1:PRINT"Initialization comes first,               then INPUT of requests or data,         then PROCESSING, and                    then OUTPUT of results."
11120 J$=CHR$(2)+"╦INIT╦╛██INPUT██PROCESS██OUTPUT██████"
11130 COLOR 0,7:Y=8:GOSUB 810:COLOR 7,2
11150 LOCATE Y,9:PRINT CHR$(205)+CHR$(16);:LOCATE Y,16:PRINT CHR$(205)+CHR$(16);:LOCATE Y,25:PRINT CHR$(205)+CHR$(16);:LOCATE Y,33:PRINT"      ";
11180 Y=24:GOSUB 1310 SPACE
11190 RETURN
11200 '
11201 'the problem - more processes
11210 COLOR 15,2:LOCATE 16,2:PRINT"SOMETIMES, YOU HAVE TO MAKE CHOICES":COLOR 7,2
11212 LOCATE 18,1:PRINT"Depending on the INPUTs,                  and intermediate results,               you may require different PROCESSes.                                         "
11220 COLOR 0,7:LOCATE 4,15:PRINT "PROC A";:LOCATE 12,15:PRINT"PROC B";
11230 COLOR 7,2:X=15:Y=8:U=15:V=5:GOSUB 4610 LINE
11240 Y=8:V=11:GOSUB 4610 LINE
11250 X=22:Y=4:U=23:V=7:GOSUB 4610 LINE
11260 Y=12:U=30:V=9:GOSUB 4610 LINE
11270 LOCATE 8,16:PRINT"─";
11280 Y=24:GOSUB 1310 SPACE
11290 RETURN
11300 '
11301 'the problem - still more
11310 COLOR 15,2:LOCATE 16,2:PRINT"THINGS CAN GET CONFUSED.              ":COLOR 7,2
11312 LOCATE 18,1:PRINT"Depending on the OUTPUTs,                 and intermediate results,               you may require different INPUTs.                                           "
11320 COLOR 0,7:LOCATE 5,9:PRINT "IN A";:LOCATE 10,8:PRINT"IN B";:LOCATE 2,23:PRINT"PROC C";
11330 COLOR 7,2:X=13:Y=5:U=14:V=7:GOSUB 4610 LINE
11340 X=11:Y=10:U=18:V=9:GOSUB 4610 LINE
11350 X=14:Y=12:U=8:V=11:GOSUB 4610 LINE
11360 X=28:Y=8:U=28:V=3:GOSUB 4610 LINE
11362 X=22:Y=2:U=10:V=4:GOSUB 4610 LINE
11370 LOCATE 8,25:PRINT"─";
11380 Y=24:GOSUB 1310 SPACE
11390 RETURN
11400 '
11401 'the problem - even more
11410 COLOR 15,2:LOCATE 16,2:PRINT"YOU CAN ALWAYS ADD TO YOUR PROGRAM.   ":COLOR 7,2
11412 LOCATE 18,1:PRINT"As your program develops, you think of    more choices and better features.     You GOTO a higher line number and add     more (including a"+C$(2);:PRINT"or two)."
11420 COLOR 0,7:LOCATE 4,24:PRINT "SR";:LOCATE 6,31:PRINT"SR";:LOCATE 12,24:PRINT C$(2);
11430 COLOR 7,2:X=24:Y=3:U=24:V=3:GOSUB 4610 LINE
11440 X=24:Y=8:U=24:V=5:GOSUB 4610 LINE
11450 X=26:Y=4:U=30:V=7:GOSUB 4610 LINE
11460 X=32:Y=8:U=32:V=7:GOSUB 4610 LINE
11462 X=30:Y=6:U=3:V=7:GOSUB 4610 LINE
11480 Y=24:GOSUB 1310 SPACE
11490 RETURN
11500 '
11501 'the problem - spaghetti
11510 COLOR 15,2:LOCATE 16,2:PRINT"THE MORE YOU ADD, THE LESS IT WORKS!  ":COLOR 7,2
11512 LOCATE 18,1:PRINT"The program doesn't work all the time.    You have `spaghetti' logic, and         all you need is some tomato sauce       and a few meat balls !!!             "
11520 LOCATE 4,3:PRINT "PROC E";:LOCATE 6,6:PRINT"???";:LOCATE 10,3:PRINT "GOTO";:LOCATE 12,11:PRINT"SR";:LOCATE 10,19:PRINT"OUT A";:LOCATE 6,14:PRINT C$(3);
11530 COLOR 15,2:X=20:Y=10:U=20:V=5:GOSUB 4610 LINE
11540 X=22:Y=2:U=2:V=3:GOSUB 4610 LINE
11550 X=10:Y=12:U=4:V=11:GOSUB 4610 LINE
11560 X=24:Y=10:U=8:V=9:GOSUB 4610 LINE
11562 X=9:Y=4:U=19:V=5:GOSUB 4610 LINE
11580 RESTORE 30080:FOR L=1 TO 30:X=3+32*RND(1):Y=2+10*RND(1):U=3+32*RND(1):V=2+10*RND(1):GOSUB 4610 LINE:READ J:SOUND J,1:NEXT
11590 RETURN
11600 '
11601 'the problem - dinner time
11610 COLOR 15,2:LOCATE 16,2:PRINT"A FINE ``SPAGHETTI'' DINNER !!!       ":COLOR 7,2
11620 X=30:Y=10:GOSUB 11650:X=24:Y=3:GOSUB 11650:X=11:Y=11:GOSUB 11650:X=5:Y=4:GOSUB 11650:X=16:Y=6:GOSUB 11650
11640 GOTO 11670
11650 COLOR 4,6:LOCATE Y,X:PRINT "▓▓▒▒▓▒▒▓▓";:LOCATE Y+1,X+1:PRINT"▓▓▒▒▒▒▓";:LOCATE Y+2,X+2:PRINT"▓▒▒▓▓";:LOCATE Y-1,X+1:PRINT"▓▒▒▒▒▓▓";:LOCATE Y-2,X+2:PRINT"▓▓▒░▓";:SOUND 370,1:SOUND 1370,2:SOUND 2370,3:RETURN
11670 COLOR 15,2:LOCATE 18,1:PRINT"Economical, yet nutricious and filling.                                           Delicious !!!                                        (pass the garlic bread)"
11680 Y=24:GOSUB 1310 SPACE
11690 RETURN
11700 '
12000 '
12001 'structured approach - senior sr
12010 D=D*1000
12020 GOSUB 12110
12030 GOSUB 12210
12040 GOSUB 12410
12050 GOSUB 12310
12060 GOSUB 12510
12070 GOSUB 12610
12080 D=D/1000
12090 RETURN
12100 ,
12101 'structured approach - intro
12110 COLOR 0,7,0:CLS
12120 PRINT"      A STRUCTURED APPROACH          -1"
12130 PRINT:PRINT:PRINT" A personal note to you - "+F$
12140 PRINT:PRINT:PRINT"  I'm an engineer, but some of my best   friends, including my wife, are         "+Q$+"programmers."+Q$
12150 PRINT:PRINT"  I used to think APL was the only       civilized computer language."
12160 PRINT:PRINT"  Three years with BASIC on my home      computer changed my mind."
12170 PRINT:PRINT"  I like BASIC, but I learned the hard   way how easy it is to get lost among    the software"+C$(1)+"bugs !!!"
12180 Y=24:GOSUB 1310 SPACE
12190 RETURN
12200 '
12201 'approach - 2
12210 CLS:PRINT"      A STRUCTURED APPROACH          -2"
12220 LOCATE 4,1:PRINT"  I write programs in small modules.     Each module can fit on the TV screen."
12230 PRINT:PRINT"  (I learned to do this in self-defense  - I didn't have a printer.)"
12240 PRINT:PRINT"  Each module has 100 line numbers.  I   always put first line of code at #10,   and exit at line #99.  Only one         entrance and one exit per module!"
12250 PRINT:PRINT"  GOTOs are trouble. I love spaghetti,   but not in my programs!  I never use    GOTOs, except within a module."
12260 PRINT:PRINT"  I use GOSUBs to subroutines.  I always RETURN to the MAIN LINE PROGRAM."
12280 Y=24:GOSUB 1310 SPACE
12290 RETURN
12300 '
12301 'approach - 3
12310 CLS:PRINT"      A STRUCTURED APPROACH          -4"
12320 PRINT:PRINT:PRINT"  A BASIC interpreter runs modules       faster when they are at low line        numbers.  I always put speed-critical   subroutines at low line numbers."
12330 PRINT:PRINT"  To leave room for subroutines at low   line numbers, I always use #20000 for   INITIALIZATION, and #21000 for the      MAIN LINE PROGRAM.  It's easy to        remember.  I'm consistent."
12340 PRINT:PRINT"  I gain speed with single-letter        variable names.  This cuts typo's,      and unstrains my head-bone.  (I have    picked a few good letters.  I use       them consistently.)"
12380 Y=24:GOSUB 1310 SPACE
12390 RETURN
12400 '
12401 'approach - 3
12410 CLS:PRINT"      A STRUCTURED APPROACH          -3"
12420 PRINT:PRINT:PRINT"  INITIALIZATION and the MAIN LINE       PROGRAM are also a series of modules,   like a train."
12422 Y=8:J$=" "+CHR$(2)+"╬INITIAL╬IZE╬══╬MAIN╬LINE╬PROGRAM╬╛":COLOR 15,0:GOSUB 810 TRAIN:COLOR 0,7
12430 LOCATE 10,1:PRINT"  I do INITIALIZATION in a module or a   series of modules.  I usually include   a few remarks about what each variable  is supposed to do for a living."
12440 PRINT:PRINT"  My MAIN LINE PROGRAM consists mainly   of GOSUBs to subroutines that do the    real work."
12450 PRINT:PRINT"  My friend Archie, the original         software";:PRINT C$(1)+"bug, can easily find":PRINT" his way OUT of my programs!"
12452 Y=24:GOSUB 1310 SPACE
12460 RESTORE 30080:FOR I=9 TO 23:LOCATE I,1:PRINT "                                        ";:READ J:SOUND J,1:NEXT
12462 COLOR 15,0:LOCATE 11,5:PRINT"SR";:LOCATE 11,20:PRINT"SR";:LOCATE 11,25:PRINT"SR;:╩ ☼♂,☼#:æ"SR";:╩ ☼♫,☼↓:æ"SR";:╩ ☼♫,☼∟:æ"SR";
12464 COLOR 0,7:X=5:Y=8:U=5:V=10:GOSUB 4610 LINE:X=6:Y=11:U=6:V=9:GOSUB 4610 LINE
12465 X=20:Y=8:U=20:V=10:GOSUB 4610 LINE:X=21:Y=11:U=21:V=9:GOSUB 4610 LINE
12466 X=25:Y=8:U=25:V=10:GOSUB 4610 LINE:X=26:Y=11:U=26:V=9:GOSUB 4610 LINE
12467 X=35:Y=8:U=35:V=10:GOSUB 4610 LINE:X=36:Y=11:U=36:V=9:GOSUB 4610 LINE
12468 X=25:Y=11:U=25:V=13:GOSUB 4610 LINE:X=26:Y=14:U=26:V=12:GOSUB 4610 LINE
12469 X=28:Y=11:U=28:V=13:GOSUB 4610 LINE:X=29:Y=14:U=29:V=12:GOSUB 4610 LINE
12470 LOCATE 15,1:PRINT" The diagram shows how the integrity of    INITIALIZATION and the MAIN LINE        PROGRAM is retained by calls to         subroutines (SR)."
12472 PRINT:PRINT" SR may be nested, with some SRs           calling others.  I avoid the            temptation to use GOTO from a SR.       I always RETURN."
12480 Y=24:GOSUB 1310 SPACE
12490 RETURN
12500 '
12501 'approach - 5
12510 CLS:PRINT"      A STRUCTURED APPROACH          -5"
12520 PRINT:PRINT:PRINT"  You may think I'm exaggerating the     importance of CONSISTENT RULES."
12530 PRINT:PRINT"  (My father told me a million times:    "+Q$+"Ira, you should never exaggerate!"+Q$+")"
12540 PRINT:PRINT"  We all know that "+Q$+"foolish              consistency is the hobgoblin of small   minds,"+Q$+" and that "+Q$+"rules, like pie       crusts, are made to be broken."+Q$
12560 PRINT:PRINT"  I agree."
12580 Y=24:GOSUB 1310 SPACE
12590 RETURN
12600 '
12601 'approach - 6
12610 CLS:PRINT"      A STRUCTURED APPROACH          -6"
12620 PRINT:PRINT"  I break some rules in each program.    They are my rules and I can break       them, or follow them."
12632 PRINT:PRINT"  I offer them to you.  Follow them or   break them.  The choice is yours."
12640 PRINT:PRINT:PRINT:PRINT"        BEST WISHES FROM IRA                    (Archie is a friend of mine)"
12650 LOCATE 22,1:PRINT"  WANT TO SING A SONG FOR ARCHIE (Y/N)?"
12660 Y=24:GOSUB 1410 CHOICE
12670 IF X$ <> "Y" AND X$ <>"y" THEN 12690
12680 GOSUB 8010
12690 RETURN
12700 '
13000 '
13001 'how - intro
13010 D=D*1000
13020 GOSUB 13110:'intro
13030 GOSUB 13210
13040 GOSUB 13310
13050 GOSUB 13410
13060 GOSUB 13510
13070 GOSUB 13610
13080 D=D/1000
13090 RETURN
13100 ,
13101 'how 1
13110 COLOR 7,1:CLS:J$=" HOW TO MAKE YOUR LIFE EASIER  "+CHR$(1)+" 1 "+CHR$(2)+" ":X=1:Y=1:GOSUB 4110 BOX
13120 COLOR 15,1:PRINT" DIVIDE YOUR PROGRAM INTO BLOCKS OF        100 LINE NUMBERS EACH":COLOR 7,1
13130 J$=" Block #1:   100 -   200 ":Y=7:X=2:GOSUB 4410 BOX
13132 J$=" Block #2:   200 -   300 ":Y=9:X=4:GOSUB 4410 BOX
13134 J$=" Block #11:  1100 -  1200 ":Y=12:X=6:GOSUB 4410 BOX
13136 J$=" Block #12:  1200 -  1300 ":Y=14:X=8:GOSUB 4410 BOX
13138 J$=" Block #200: 20000 - 20100 ":Y=17:X=10:GOSUB 4410 BOX
13140 J$=" Block #210: 21000 - 21100 ":Y=19:X=12:GOSUB 4410 BOX
13180 Y=25:GOSUB 1310 SPACE
13190 RETURN
13200 '
13201 'how 2
13210 COLOR 7,6:CLS:J$=" HOW TO MAKE YOUR LIFE EASIER  "+CHR$(1)+" 2 "+CHR$(2)+" ":X=1:Y=1:GOSUB 4110 BOX
13220 COLOR 15,6:PRINT" BLOCKS #1 THRU #199 ARE SET ASIDE         FOR SUBROUTINES":COLOR 7,6
13222 PRINT" Here's how Block #11 might look."
13230 PRINT:COLOR 0,7
13232 PRINT" 1100 '                                  1101 'sample sr          <name>         1110 CODE                <first line>   1115 CODE                               1120 CODE                              ";
13234 PRINT"  :                                       :                                      1199 RETURN              <one RETURN>   1200 '                                 ";
13240 Y=25:GOSUB 1310 SPACE:COLOR 7,6
13242 LOCATE 18,1:PRINT" EXAMPLE:  To call this subroutine from    line #21120 of the MAIN program:                                                    21120 GOSUB 1100:'sample sr          "
13250 Y=25:GOSUB 1310 SPACE:COLOR 7,6
13252 LOCATE 18,1:PRINT" Line #10 must be first line of code.    You can use any lines, from #11 thru      #98 for more program code.            Line #99 must be the only RETURN.     "
13260 Y=25:GOSUB 1310 SPACE:COLOR 7,6
13262 LOCATE 18,1:PRINT" Use line #01 for a remark with the name   of the subroutine.                    Don't use lines #00 for anything but a    blank remark.                       "
13270 Y=25:GOSUB 1310 SPACE:COLOR 7,6
13272 LOCATE 18,1:PRINT" If you follow these rules, you can LIST  the subroutine in Block #11 by typing:                                          LIST 1100-1200                       "
13280 Y=25:GOSUB 1310 SPACE
13290 RETURN
13300 '
13301 'how 3
13310 COLOR 7,4:CLS:J$=" HOW TO MAKE YOUR LIFE EASIER  "+CHR$(1)+" 3 "+CHR$(2)+" ":X=1:Y=1:GOSUB 4110 BOX
13320 COLOR 15,4:PRINT" SUBROUTINES ARE DIVIDED INTO THREE        GROUPS":COLOR 7,0
13330 J$=" TIME-CRITICAL     ":X=1:Y=7:GOSUB 4210 BOX
13332 J$=" GENERAL UTILITY   ":X=1:Y=10:GOSUB 4210 BOX
13334 J$=" ASSOCIATED GROUPS ":X=1:Y=13:GOSUB 4210 BOX
13340 Y=25:GOSUB 1310 SPACE
13342 LOCATE 8,21:PRINT" Blocks #1 - #9    ";
13344 LOCATE 18,1:PRINT" Reserve Blocks #1 thru #9 for time-       critical subroutines (SR).            EXAMPLES IN THIS PROGRAM: Action part     of game, Train with music ...        "
13350 Y=25:GOSUB 1310 SPACE
13352 LOCATE 11,21:PRINT" Blocks #10 - #49  ";
13354 LOCATE 18,1:PRINT" General Utility SRs go into Blocks #10    thru #49.                             EXAMPLES IN THIS PROGRAM: Hit Space       When Ready, Draw Box ...             "
13360 Y=25:GOSUB 1310 SPACE
13362 LOCATE 14,21:PRINT" Blocks #50 - #199 ";
13364 LOCATE 18,1:PRINT" Associated Groups of SR are almost        separate programs.                                                            Use ten blocks for each group.         "
13370 Y=25:GOSUB 1310 SPACE
13372 LOCATE 18,1:PRINT" EXAMPLE IN THIS PROGRAM: This part of     the program uses Block #130 - #136.   The SR in Block #130 supervises the       others.  GOSUB 13300 is active now.  "
13374 Y=25:GOSUB 1310 SPACE
13376 LOCATE 18,1:PRINT" EXAMPLE (continued): Use of nested SRs    is powerful.  The MAIN PROGRAM calls    a Supervisory SR that calls others.   Always RETURN from where called!       "
13380 Y=25:GOSUB 1310 SPACE
13390 RETURN
13400 '
13401 'how 4
13410 COLOR 7,2:CLS:J$=" HOW TO MAKE YOUR LIFE EASIER  "+CHR$(1)+" 4 "+CHR$(2)+" ":X=1:Y=1:GOSUB 4110 BOX
13420 COLOR 15,2:PRINT" INITIALIZATION AND MAIN LINE PROGRAM      ARE LIKE A TRAIN":COLOR 7,2
13430 COLOR 0,7:LOCATE 5,1:PRINT"                                         Block #0    1 'by Ira Glickstein                    10 GOTO 20010:'to init     ════════════════════════════════════════"
13432 COLOR 0,7:LOCATE 9,1:PRINT" Block       20001 'initialization         #200      20010 CODE                     to       20020 CODE                 ";
13434 COLOR 0,7:LOCATE 12,1:PRINT"   #209        :                                     20999 'end of init         ════════════════════════════════════════"
13436 COLOR 0,7:LOCATE 15,1:PRINT" Block       21001 'main line program      #210      21010 CODE                     to       21020 CODE                 ";
13438 COLOR 0,7:LOCATE 18,1:PRINT"   #219        :                                     21999 END:'end of program                                          "
13450 COLOR 7,2:LOCATE 20,1:PRINT" You don't have to use all the Blocks      allocated to MAIN LINE PROGRAM.       One or two should be enough if you use    nested subroutines.                  ";
13460 Y=25:GOSUB 1310 SPACE
13462 COLOR 7,2:LOCATE 20,1:PRINT" Note that there is only one END to        this program.                         If it stops you know why.                                                      ";
13470 Y=25:GOSUB 1310 SPACE
13482 COLOR 7,2:LOCATE 20,1:PRINT" Use line numbers above #40000 for         remarks.                              (It's handy to put a list of all Block    assignments there.)                  ";
13484 Y=25:GOSUB 1310 SPACE
13490 RETURN
13500 '
13501 'how 5
13510 COLOR 7,6:CLS:J$=" HOW TO MAKE YOUR LIFE EASIER  "+CHR$(1)+" 5 "+CHR$(2)+" ":X=1:Y=1:GOSUB 4110 BOX
13520 COLOR 15,0:PRINT" IN SUMMARY - BE CONSISTENT"
13530 COLOR 15,1:J$=" Avoid SPAGHETTI Programs           ":X=1:Y=6:GOSUB 4210 BOX
13532 COLOR 15,2:J$=" Don't Use GOTOs (OK within a Block)":X=1:Y=8:GOSUB 4210 BOX
13534 COLOR 15,4:J$=" Use GOSUBs to Nested Subroutines   ":X=1:Y=10:GOSUB 4210 BOX
13536 COLOR 15,1:J$=" Put Time-Critical SR at Low Line # ":X=1:Y=12:GOSUB 4210 BOX
13538 COLOR 15,2:J$=" Keep Blocks Short to Fit TV Screen ":X=1:Y=14:GOSUB 4210 BOX
13540 COLOR 15,4:J$=" Use Single-Character Variable Names":X=1:Y=16:GOSUB 4210 BOX
13542 COLOR 7,0:J$=" If You Don't Follow These Rules -  ":X=1:Y=19:GOSUB 4210 BOX
13544 J$="- Be Consistent With Your Own Rules":X=4:Y=21:GOSUB 4210 BOX
13580 Y=25:GOSUB 1310 SPACE
13590 RETURN
13600 '
13601 'how 6
13610 COLOR 7,0:CLS:J$=" HOW TO MAKE YOUR LIFE EASIER  "+CHR$(1)+" 6 "+CHR$(2)+" ":X=1:Y=1:GOSUB 4110 BOX
13620 COLOR 15,0:PRINT" YOU CAN COPY THIS ON YOUR PRINTER ":COLOR 7,0
13630 LOCATE 9,1:PRINT" If have a printer, just hit "+Q$+"PrtSc"+Q$:PRINT"  to Print Screen."
13640 LOCATE  6,1:PRINT" You might want to copy the previous       frames for reference."
13650 LOCATE 13,1:PRINT" GOOD LUCK -- AND MAY ARCHIE"+C$(2):PRINT"   BE A FRIEND OF YOURS !!!"
13670 FOR I=1 TO 100:F=1-(F=1):X=1+32*RND(1):Y=18+4*RND(1):LOCATE Y,X:PRINT C$(F);:SOUND I*37,1:SOUND 37,0:NEXT
13680 Y=24:GOSUB 1310 SPACE
13690 RETURN
13700 '
20000 '
20001 'initialization
20010 SCREEN 0,1,0:WIDTH 80:COLOR 0,0,0:CLS:WIDTH 40:COLOR 0,7,0:KEY OFF:LOCATE 1,1,0
20020 DEF SEG=0:IF (PEEK(&H410) AND &H30)=&H30 THEN LOCATE 1,1,0,12,13:OUT 948,2:OUT 949,62
20030 DEF SEG=0:IF (PEEK(&H410) AND &H30)<>&H30 THEN LOCATE 1,1,0,6,7
20080 GOSUB 5110
20090 'init continued next block
20100 '
20101 'init continued
20110 DIM M(88) : FOR I=7 TO 88:M(I)=36.8*(2^(1/12))^(I-6):NEXT:'music
20120 FOR I=0 TO 6:M(I)=32767:NEXT
20130 C$(1)=CHR$(32)+CHR$(2)+CHR$(209)+CHR$(203)+CHR$(209)+CHR$(236)+CHR$(190)+CHR$(32):'archie 1
20140 C$(2)=CHR$(32)+CHR$(2)+CHR$(203)+CHR$(209)+CHR$(203)+CHR$(236)+CHR$(190)+CHR$(32):'archie 2
20150 C$(3)=" ≈"+CHR$(1)+"≈╦═╦╝ ":'mehitabel
20160 C$(0)="        ":'blank bug
20170 KEY 1,"mFLIT":KEY 2,"cSWAT":KEY 3,CHR$(21)+"╫îƒτ"+CHR$(17):KEY 4,"RAID~":KEY 5,"ITCHY":KEY 6,"GOTO 21150"+CHR$(13):KEY 7,"GOSUB 11060"+CHR$(13):KEY 8,"GOSUB 3310"+CHR$(13):KEY 9,"GOSUB 3110"+CHR$(13):KEY 10,"GOSUB 5210"+CHR$(13)
20172 KEY OFF:DEF SEG:POKE 106,0
20180 Z$="█µFLIT█2█¢SWAT█3═╠  ╦╫██4█RAID~█5█BITE█":'for hi, i'm archie
20200 '
20201 'init continued
20210 Q$=CHR$(34):'quote
20220 D=1000:'delay for general use (normal value 1000)
21000 '
21001 'main line program - intro
21010 Y=2:X=16:GOSUB 1310 SPACE
21020 IF LEFT$(X$,1)=CHR$(21) THEN K=10:GOTO 21080:'quick menu desired
21030 Y=2:GOSUB 1010: 'archie marches
21040 GOSUB 7010:'hi i'm archie
21050 GOSUB 2610 T MENU:'k is choice
21080 KEY OFF
21090 'continued in next block
21100 '
21101 'main line program - menu
21110 Q=0:ON K GOSUB 8010,6010,7010,3110,10010,3210,3310,2610,5910,2710
21120 'K is choice  K=1~song   2~quiz    3~hi arch  4~game    5~BASIC  6~secret  7~clr/mon  8~t menu  9~quit
21130 IF Q=9 THEN 21190:'quit
21140 IF Q=8 THEN 21110:'K selected
21150 GOSUB 2710 Q MENU:GOTO 21130
21190 GOTO 29990:'quit
29990 GOTO 65140
30001 'data
30010 DATA 42,1,0,1,42,1,0,1,42,1,0,1,47,1,0,5,51,1,0,3,42,1,0,1,42,1,0,1
30020 DATA 42,1,0,1,47,1,0,5,51,1,0,5,30,1,0,1,30,1,0,1,35,1,0,3,47,1,0,1
30030 DATA 47,1,0,1,46,1,0,1,46,1,0,1,44,1,0,1,44,1,0,1,42,8,0,2,42,1,0,1
30040 DATA 42,1,0,1,42,1,0,1,46,1,0,5,49,1,0,3,42,1,0,1,42,1,0,1,42,1,0,1
30050 DATA 46,1,0,5,49,1,0,5,37,1,0,1,37,1,0,1,30,1,0,3,54,2,56,2,54,2,52,2
30060 DATA 51,2,49,2,47,8,-1,-1
30070 DATA 68,115,121,137,139,141,152,168,197,132,161,243,210,228,274,313,345,373,393,473,555,581,561,647,733,781,828,891,956
30080 DATA 1016,1062,1129,1199,1188,1257,1328,1401,1476,1553,1632,1747,1875,1969,1968,2076,2170,2260
30090 DATA 2336,2466,2612,2698,2812,2906,3015,3129,3241,3359,3396,3559,3689,3753,3893,4020,4151,4276,4406,-1
65130 E=ERR:RESUME NEXT
65140 ON ERROR GOTO 65130:RUN"menu
65150 IF E<>71 THEN RUN"control
65160 RUN"A:TRANSFER
65170 SYSTEM
```

## CONTROL.BAS

```bas
10 RUN"MENU

                                                                                                               
```

## MENU.BAS

```bas
0 'MENU PROGRAM BY BOB VOLLMER. LAST UPDATE: 10/12/82
10 C1=7:C2=4:C3=3:C0=14:A$="abcdefghijklmnopqrstuvwxyz"
20 KEY 1,"═>DOS":KEY 2," EXIT ":KEY 3,"PRINT":KEY 4,"":KEY 5,"":ON KEY(1) GOSUB 65100:ON KEY(2) GOSUB 65200:ON KEY(3) GOSUB 65300:FOR I=1 TO 3:KEY(I) ON:NEXT I
50 SCREEN 0,1:WIDTH 40:COLOR C1,C2,C3:CLS:COLOR 14,C3:KEY OFF:LOCATE 25,1:PRINT SPACE$(40);:KEY ON:COLOR C1,C2
200 T$(0)="  ADX0011 PROGRAMS   ":GOSUB 500:GOSUB 400:X1=8:GOSUB 300:COLOR C1:I=0
201 I=I+1:T$(I)="ARCHIE la Cucaracha":P$(I)="ARCHIE":GOSUB 65400
202 I=I+1:T$(I)="Full Screen Editor":P$(I)="RV-EDIT":GOSUB 65400
270 WHILE INKEY$<>"":WEND
275 K$ = INKEY$:IF K$ = "" THEN GOTO 275:ELSE IF K$=CHR$(27) THEN 65200:ELSE K=ASC(K$) OR 32:K$=CHR$(K):FOR J=1 TO I:IF K$=MID$(A$,J,1) THEN ON ERROR GOTO 65230:RUN P$(J): ELSE NEXT J:X1=14:GOSUB 300:GOTO 200
280 ON ERROR GOTO 0:GOTO 200
300 BEEP:COLOR X1' -*- PRINT BOTTOM BOX -*-
310 LOCATE Y+N-1,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184);
320 LOCATE Y+N  ,9,0:PRINT CHR$(179)+" TYPE PROGRAM LETTER "+CHR$(179);
330 LOCATE Y+N+1,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190);
340 COLOR X1+16:LOCATE Y+N  ,9 ,0:PRINT CHR$(16);:LOCATE Y+N  ,31,0:PRINT CHR$(17);
350 RETURN
400 X1=8'INPUT X1
410 COLOR X1' -*- PRINT TITLE BOX -*-
420 LOCATE  2,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
430 LOCATE  3,9,0:PRINT CHR$(179)+T$(0)+CHR$(179)
440 LOCATE  4,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
450 RETURN
500 Y=6:N=14:COLOR C1' -*- PRINT MENU BOX -*-
510 LOCATE  Y,1,0:PRINT CHR$(213)+STRING$(38,205)+CHR$(184);
520 FOR J=Y+1 TO Y+N-1:LOCATE  J,1,0:PRINT CHR$(179)+STRING$(38," ")+CHR$(179);:NEXT J
530 LOCATE Y+N,1,0:PRINT CHR$(212)+STRING$(38,205)+CHR$(190);:RETURN
65100 KEY OFF:SYSTEM
65200 KEY OFF:ON ERROR GOTO 65100:RUN"A:TRANSFER"
65210 ON ERROR GOTO 0:RETURN
65220 KEY OFF:COLOR 14,C2:LOCATE 25,1:PRINT"NO CONTROL PROGRAM WAS FOUND.";:FOR II=1 TO 999:NEXT II:KEY ON:COLOR C1,C2:RESUME NEXT
65230 KEY OFF:COLOR 14,C2:LOCATE 25,1:PRINT"Requested program not available.";:FOR II=1 TO 999:NEXT II:KEY ON:COLOR C1,C2:RESUME NEXT
65300 ON ERROR GOTO 65320:LPRINT CHR$(14);:FOR J=0 TO I:LPRINT T$(J):NEXT:LPRINT :LPRINT :ON ERROR GOTO 0:RETURN
65310 ON ERROR GOTO 0:RETURN
65320 KEY OFF:COLOR 14,C2:LOCATE 25,1:PRINT"THE PRINTER IS NOT READY.";:FOR II=1 TO 999:NEXT II:KEY ON:COLOR C1,C2:RESUME 65310
65400 LOCATE I+7,3,0:T$(I)=MID$(A$,I,1)+" - "+LEFT$(T$(I)+STRING$(30," "),30):PRINT T$(I);:RETURN
```

## RV-EDIT.BAS

```bas
0 GOTO 65000
1 CLEAR
10 DEFINT A-Z:DIM T$(600),T(600):I=0:DD=0:IF K$="" THEN K$=" ":GOTO 1000:ELSE GOTO 1000
98 DD=DD+1:IF DD<500 THEN RETURN:ELSE GOSUB 99:DD=0:RETURN
99 COLOR 7,1:LOCATE 23,1,0:PRINT USING " &  &  Memory=#####  Lines=###";DATE$;TIME$;FRE(0);LL;:COLOR C1,C2:RETURN
100 T=T(Y+OF):IF T>0 THEN RETURN:ELSE T=-1*T:T(Y+OF)=T:LL=LL+1:IF LEN(T$(T))<76 THEN T$(T)=SPACE$(76):GOSUB 99:RETURN:ELSE MID$(T$(T),1)=BLANK$:RETURN
111 X1=0:IF Y>1 THEN Y=Y-1:GOSUB 100:RETURN:ELSE Y=22:WHILE T(OF+Y)<0:Y=Y-1:WEND:GOSUB 100:RETURN'CURSOR UP
112 IF X=1 THEN X=76:GOSUB 111:RETURN:ELSE X=X-1:RETURN'cursor left
113 IF X=76 THEN GOSUB 270:RETURN:ELSE X=X+1:RETURN'CURSOR RIGHT
114 X1=0:IF Y<22 AND T(Y+OF+1)>0 THEN Y=Y+1:GOSUB 100:RETURN:ELSE Y=1:GOSUB 100:RETURN'CURSOR DN
115 MID$(NL$,1)=SPACE$(76):MID$(NL$,1)=T$(T):T$(T)=NL$:GOSUB 99:RETURN'LEN T$(T)NOW=76
116 IF LEN(T$(T))>75 THEN RETURN:ELSE GOSUB 115:RETURN
195 LOCATE Y,1,0:PRINT USING LF$;T$(T);Y+OF;:RETURN'PRINT CURRENT LINE
207 GOSUB 251:X=1:RETURN'..[CNTL][LEFT]
208 GOSUB 251:X=76:RETURN'..[CNTL][RIGHT]
209 X=LEN(T$(T)):IF X<76 THEN RETURN:ELSE WHILE MID$(T$(T),X,1)=" " AND X>1:X=X-1:WEND:X=X+1:IF X<=76 THEN RETURN:ELSE X=76:RETURN'..[END]=LAST CHAR IN LINE +1
210 Y=1:GOSUB 100:X=1:RETURN'[home]=top-left
211 IF OF=0 THEN RETURN:ELSE S=Y+OF:OF=0:BOT=22:GOSUB 400:GOSUB 222:GOSUB 100:RETURN'..[CNTL][HOME]=TOP OF FILE
212 LOCATE 23,1,0:PRINT"mem=";FRE(0);:RETURN' Print mem-left
219 IF OF=0 THEN RETURN:ELSE S=Y+OF:IF OF-22<0 THEN OF=0:GOTO 221:ELSE OF=OF-22:IF OF<0 THEN OF=0:GOTO 221:ELSE GOTO 221'..[CNTL][PgUp]=FULL PAGE UP
220 IF OF=0 THEN RETURN:ELSE S=Y+OF:IF OF-11<0 THEN OF=0:ELSE OF=OF-11:IF OF<0 THEN OF=0'..[PgUp]=HALF PAGE UP
221 BOT=OF+22:GOSUB 400:GOSUB 222:GOSUB 100:RETURN
222 Y=S-OF:IF Y<1 THEN Y=1:RETURN:ELSE IF Y>22 THEN Y=22:RETURN:ELSE RETURN
230 LOCATE 24,1,1:LINE INPUT"COMMAND=>";CMD$:RETURN'..[F0]=COMMAND LINE
239 MID$(T$(T),X,77-X)=STRING$(76," "):GOSUB 195:RETURN'..[CTRL][END]
240 IF LL<OF+23 THEN RETURN:ELSE S=Y+OF:BOT=BOT+22:IF BOT>599 THEN BOT=600:GOTO 242:ELSE GOTO 242'..[CTRL][PgDn]=FULL PgDn
241 IF LL<OF+12 THEN RETURN:ELSE S=OF+Y:BOT=BOT+11:IF BOT>599 THEN BOT=600'..[PgDn]=HALF PAGE DN
242 OF=BOT-22:GOSUB 400:GOSUB 222:GOSUB 100:RETURN
250 INS=-1*(XINS=0):IF INS THEN LOCATE ,,1,4,7:IF LEN(T$(T))=76 THEN RETURN:ELSE GOSUB 115:RETURN
251 XINS=INS:IF INS=0 THEN RETURN:ELSE INS=0:LOCATE,,1,0,7:RETURN'..[INS]
260 GOSUB 116:IF X<76 THEN MID$(T$(T),X,76-X)=MID$(T$(T),X+1,76-X)
261 MID$(T$(T),76,1)=" ":LOCATE Y,X,0:PRINT RIGHT$(T$(T),77-X);:RETURN'..[DEL]
270 GOSUB 271:X1=0:IF Y<22 THEN Y=Y+1:GOSUB 100:GOSUB 195:RETURN:ELSE IF BOT<600 THEN BOT=BOT+1:OF=OF+1:GOSUB 100:LOCATE 24,80,0:PRINT " ";:GOSUB 99:GOSUB 195:RETURN:ELSE LOCATE 23,1,0:PRINT "600 is the maximum line count for this editor.";
271 IF X1>0 THEN X=X1:RETURN:ELSE IF X=1 THEN RETURN:ELSE X=1:Y=Y-1:RETURN
300 GOSUB 903:GOSUB 330:GOSUB 904:IF I=0 THEN RETURN:ELSE GOSUB 3999:II=LL:WHILE II>Y-1+OF:SWAP T(II+I),T(II):II=II-1:WEND:S=Y:FOR II=1 TO I:GOSUB 100:Y=Y+1:NEXT II:Y=S:GOSUB 400'[F5] INSERT LINE
301 LOCATE 25,1,0:COLOR K1,K2:KEY ON:GOSUB 51020:RETURN
310 GOSUB 903:GOSUB 340:GOSUB 904:IF I=0 THEN RETURN:ELSE GOSUB 3999:II=Y+OF:WHILE T(II+I)>0:SWAP T(II),T(II+I):II=II+1:WEND:II=LL:LL=LL-I:WHILE II>LL:T(II)=T(II)*-1:II=II-1:WEND:GOSUB 99:GOSUB 400'[F6] DELETE LINE
311 LOCATE 25,1,0:COLOR K1,K2:KEY ON:GOSUB 51020:RETURN
320 S=Y+OF:KEY OFF:LOCATE 25,1,0:PRINT"TOP LINE NUMBER";S;:LOCATE ,16:LINE INPUT;"?";ANS$:IF ANS$="" THEN OF=S-1:ELSE OF=VAL(ANS$)-1:IF OF<0 THEN OF=0:ELSE IF OF>=LL THEN OF=LL-1
321 GOSUB 221:GOSUB 222:LOCATE 25,1,0:COLOR K1,K2:KEY ON:GOSUB 51020:RETURN
330 I=1:KEY OFF:LOCATE 25,1,0:PRINT" How many lines";I;:LOCATE ,16:LINE INPUT;"?";ANS$:I=VAL(ANS$):IF I<1 THEN I=1:ELSE IF I+LL>600 THEN I=600-LL:IF I<1 THEN I=1
331 RETURN
340 MAX=LL-(OF+Y)+1:KEY OFF:LOCATE 25,1,0:PRINT" How many lines 1";:LOCATE ,16:LINE INPUT;"?";ANS$:I=VAL(ANS$):IF ANS$="" THEN I=1:RETURN ELSE IF I<1 THEN I=0:RETURN:ELSE IF I<MAX THEN RETURN:ELSE I=MAX:IF I<LL THEN RETURN:ELSE I=I-1:RETURN
400 FOR I=1 TO 22:LOCATE I,1,0:T=T(I+OF):IF T>0 THEN PRINT USING LF$;T$(T);I+OF;:ELSE PRINT STRING$(80,176);
401 NEXT I:WHILE T(Y+OF)<0 AND Y>0:Y=Y-1:WEND:T=T(Y+OF):GOSUB 99:RETURN
900 IF Y+OF>LL THEN Y=Y-1:IF Y<1 THEN OF=OF+1:Y=LL-OF:GOSUB 220:RETURN
901 FOR II=Y TO 22:LOCATE II,1,0:IF T(II+OF)>0 THEN PRINT USING LF$;T$(T(II+OF));II+OF;:ELSE PRINT STRING$(80,176);
902 NEXT II:RETURN
903 COLOR C1+16:LOCATE,77:PRINT CHR$(17);:COLOR C1:RETURN
904 LOCATE,77:PRINT"|";:RETURN
1000 C1= 7:C2=5:C3=1:COLOR C1,C2,C3:RESTORE:LF$="\"+SPACE$(74)+"\_|###":XC$="":READ I:WHILE I<>999:XC$=XC$+CHR$(I):READ I:WEND:BLANK$=STRING$(80," "):BL$=BLANK$:XL$=SPACE$(80):NL$=SPACE$(76):CL$=SPACE$(76):SC$=CHR$(13)+CHR$(8)+CHR$(0)
1020 FOR I=1 TO 600:T(I)=I*-1:NEXT I:T=0:OF=0:BOT=22:LL=0
1100 Y=0:X=1:LOCATE,,0,0,7:IF K$="LOADFILE" THEN GOSUB 3310:ELSE WIDTH 80:CLS:LOCATE 23,1:COLOR,1:PRINT BLANK$;:COLOR,C2
1105 GOSUB 3000:GOSUB 210:LOCATE,,0,0,7:OF=1:Y=0:GOSUB 211
1109 GOSUB 2000:IF INS THEN 1111:ELSE IF LEN(T$(T))<X THEN GOSUB 115:LOCATE Y,X
1110 MID$(T$(T),X,1)=K$:PRINT K$;:GOSUB 1112:GOSUB 113:GOTO 1109
1111 MID$(T$(T),X+1,76-X)=MID$(T$(T),X,76-X):MID$(T$(T),X,1)=K$:LOCATE,1,0:PRINT T$(T);:GOSUB 113:GOTO 1109
1112 IF K$=" " OR X1>0 THEN RETURN:ELSE X1=X:RETURN
2000 GOSUB 98:LOCATE Y,X,1:K$=INKEY$
2010 IF K$="" THEN GOTO 2000:ELSE DD=0:IF LEN(K$)=1 THEN I=INSTR(SC$,K$):IF I=0 THEN RETURN:ELSE ON I GOSUB 2015,112:GOTO 2000
2011 K$=RIGHT$(K$,1):I=INSTR(XC$,K$):IF I=0 THEN 2000:ELSE GOSUB 251:ON I GOSUB 210,111,220,112,113,209,114,241,250,260,207,208,239,240,211,219:GOTO 2000
2015 GOSUB 270:GOSUB 251:RETURN
3000 K1=C1:K2=C2:KEY 1,"TOPLIN":KEY 2,"END":KEY 3,"LOAD":KEY 4,"SAVE":KEY 5,"INSERT":KEY 6,"DELETE":KEY 7,"TOP":KEY 8,"BOTTOM":KEY 9,"PRINT":KEY 10,"KEYS"
3010 ON KEY(1) GOSUB 320 :ON KEY(2) GOSUB 3900:ON KEY(3) GOSUB 3300:ON KEY(4) GOSUB 3400:ON KEY(5) GOSUB 300:ON KEY(6) GOSUB 310:ON KEY(7) GOSUB 211:ON KEY(8) GOSUB 3800:ON KEY(9) GOSUB 3100:ON KEY(10) GOSUB 4000
3020 FOR I=1 TO 10:KEY(I) ON:NEXT:KEY OFF:COLOR K1,K2:LOCATE 25,1,0:PRINT SPACE$(79);:KEY ON:GOSUB 51020:RETURN
3100 '<<PRINT>>
3105 TIME2=0
3110 GOSUB 50010:OUTRCD=0:WHILE ERRSW=0 AND OUTRCD<LL:OUTRCD=OUTRCD+1:GOSUB 3130:WEND:ON ERROR GOTO 0
3115 IF ERRSW THEN IF TIME2=0 THEN MSG$="THE PRINTER IS NOT READY! ..":GOSUB 3199:TIME2=-1:RETURN
3120 RETURN
3130 IF LEN(T$(T(OUTRCD)))<3 THEN LPRINT"   ";T$(T(OUTRCD)):RETURN:ELSE II=INSTR(1,".PA.pa",LEFT$(T$(T(OUTRCD)),3)):IF II=0 THEN LPRINT "   ";T$(T(OUTRCD)):RETURN:ELSE ON (II+2)/3 GOSUB 3131,3131:RETURN
3131 LPRINT CHR$(12):RETURN'[.PA]
3198 MSG$="function not yet available..":GOSUB 3199:RETURN
3199 KEY OFF:COLOR 14:LOCATE 25,1,0:PRINT MSG$;:COLOR 30:PRINT"[SPACE]";:COLOR 14:PRINT" to continue";:COLOR K1,K2:WHILE INKEY$="":WEND:KEY ON:COLOR C1,C2:RETURN
3200 KEY 1,"LIST ":KEY 2,"RUN"+CHR$(13):KEY 3,"LOAD"+CHR$(34):KEY 4,"SAVE"+CHR$(34):KEY 5,"CONT"+CHR$(13):KEY 6,","+CHR$(34)+"LPT1:"+CHR$(13):KEY 7,"TRON"+CHR$(13):KEY 8,"TROFF"+CHR$(13):KEY 9,"KEY":KEY 10,"SCREEN 0,0,0"+CHR$(13):CLS:END'..<<RETURN TO BA
3300 GOSUB 3390
3305 GOSUB 3610:CLEAR:GOSUB 99:K$="LOADFILE":GOTO 10'[F3]=LOAD
3310 GOSUB 99:CONTIN=0:GOSUB 51001:IF CONTIN<>0 OR FILE$="" THEN GOSUB 400:ELSE GOSUB 3999:GOSUB 53000:OF=1:Y=0:GOSUB 211:CLOSE'[F3]=LOAD
3315 CONTIN=0:ON ERROR GOTO 0:GOSUB 3020:RETURN
3390 IF LL>1 THEN KEY OFF:LOCATE 25,1,1:COLOR 14:LINE INPUT;"DO YOU WANT TO SAVE THE CURRENT FILE FIRST?";ANS$:ANS$=LEFT$(ANS$,1):IF ANS$="y" OR ANS$="Y" THEN NOSAVE=-1:GOSUB 3400:NOSAVE=0
3399 RETURN
3400 GOSUB 3610:CONTIN=0:GOSUB 51002:IF CONTIN=0 AND FILE$<>"" THEN GOSUB 3999:GOSUB 54000:CLOSE'[F4]=SAVE
3401 ON ERROR GOTO 0:CONTIN=0:IF NOSAVE THEN GOSUB 3020:RETURN: ELSE GOSUB 400:GOSUB 3020:RETURN
3500 CONTIN=-1:RETURN'[F5]=CONTINUE
3600 GOSUB 3610:MSG$="":GOSUB 3199:GOSUB 400:RETURN
3610 CLS:LOCATE,,0:GOSUB 50010:FILES:IF ERRSW=0 THEN FOR II=13 TO 65 STEP 13:LOCATE 1,II:FOR JI=1 TO 10:PRINT"│";CHR$(31);CHR$(29);:NEXT JI:NEXT II:ELSE LOCATE 23,1:PRINT"DISK ACCESS ERROR OCCURRED!";
3615 ON ERROR GOTO 0:IF ERRSW<>0 THEN RETURN
3620 LOCATE 10,1:PRINT                                                         "────────────┴────────────┴────────────┴────────────┴────────────┴───────────────";:LOCATE 23,1:COLOR,1:PRINT BLANK$;:COLOR,C2:GOSUB 99:RETURN
3700 ON ERROR GOTO 3710:MID$(XL$,1)=CL$:COLOR C2,C1
3701 MID$(CL$,1)=" enter todays date=>"+DATE$+BLANK$:LOCATE 24,1,0:PRINT CL$;:LOCATE 24,21,1:LINE INPUT;K$:IF K$=""THEN 3703:ELSE ON ERROR GOTO 3710:DATE$=K$:ON ERROR GOTO 0:MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:COLOR C1,C2:GOSUB 99:GOTO 3703
3702 GOTO 3701
3703 MID$(CL$,32)=" time=>"+TIME$+BLANK$:LOCATE 24,1,0:PRINT CL$;:LOCATE 24,39,1:LINE INPUT;K$:IF K$="" THEN 3705:ELSE ON ERROR GOTO 3710:TIME$=K$:ON ERROR GOTO 0:MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:COLOR C1,C2:GOSUB 99:RETURN
3704 GOTO 3703
3705 ON ERROR GOTO 0:MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:COLOR C1,C2:GOSUB 99:RETURN
3710 IF ERR=5 THEN LOCATE 23,1,0:PRINT" Invalid format...";:RESUME NEXT:ELSE ON ERROR GOTO 0
3800 IF LL<23 THEN GOSUB 211:RETURN:ELSE S=Y+OF:BOT=LL:OF=BOT-22:GOSUB 400:GOSUB 222:GOSUB  100:RETURN'..[F8]=BOT
3900 GOSUB 3390:ON ERROR GOTO 3910:KEY OFF:CLS:RUN"A:TRANSFER"'..<<END>>.... ALLOW SAVE BEFORE EXIT...
3910 SYSTEM
3999 KEY OFF:COLOR 30:LOCATE 25,1,0:PRINT"~~~ compute ~~~";:COLOR C1:RETURN
4000 K1=14:K2=2:KEY 1,"copy":KEY 2,"copy+":KEY 3,"move":KEY 4,"move+":KEY 5,"before":KEY 6,"after":KEY 7,"IMBED ":KEY 8,"     ":KEY 9,"DATE":KEY 10,"KEYS"
4010 ON KEY(1) GOSUB 3198:ON KEY(2) GOSUB 3198:ON KEY(3) GOSUB 3198:ON KEY(4) GOSUB 3198:ON KEY(5) GOSUB 3198:ON KEY(6) GOSUB 3198:ON KEY(7) GOSUB 4700:ON KEY(8) GOSUB 3198:ON KEY(9) GOSUB 3700:ON KEY(10) GOSUB 3000
4020 FOR I=1 TO 10:KEY(I) ON:NEXT:KEY OFF:COLOR K1,K2:LOCATE 25,1,0:PRINT SPACE$(79);:KEY ON:GOSUB 51020:RETURN
4700 GOSUB 3610:IF ERRSW=0 THEN GOSUB 51000:IF ERRSW=0 THEN GOSUB 3999:II=0:WHILE LL-II>OF+Y-1:SWAP T(LL-II),T(600-II):II=II+1:WEND:LL=OF+Y-1:GOSUB 53005:WHILE II>0:II=II-1:LL=LL+1:SWAP T(LL),T(600-II):WEND
4701 GOSUB 99:GOSUB 400:GOSUB 4020:RETURN
50010 ON ERROR GOTO 50060:ERRSW=0:RETURN
50060 ERRSW=-1:LOCATE 23,1,0:RESUME NEXT
51000 MID$(XL$,1)=CL$:MID$(CL$,1)="[Imbed File] Name="+FILE$+BLANK$:GOTO 51003
51001 MID$(XL$,1)=CL$:MID$(CL$,1)=" [Load File] Name="+FILE$+BLANK$:GOTO 51003
51002 MID$(CL$,1)=" [Save File] Name="+FILE$+BLANK$
51003 LOCATE 24,1,0:COLOR C2,C1:PRINT CL$;:LOCATE 24,19,1:LINE INPUT;A$
51010 IF CONTIN THEN MID$(CL$,1)=XL$:LOCATE 24,1,0:PRINT CL$;:RETURN:ELSE IF A$<>"" AND MID$(A$,1)<>BLANK$ THEN FILE$=A$:MID$(CL$,1)=" File Name ="+FILE$+BLANK$:ELSE MID$(CL$,1)=XL$:ERRSW=-1
51020 COLOR C2,C1:LOCATE 24,1,0:PRINT CL$;:COLOR ,C3:LOCATE 23,1:PRINT BLANK$;:GOSUB 99:RETURN
53000 FOR I=1 TO 600:T(I)=-1*I:NEXT I:Y=0:OF=0:LL=0
53005 GOSUB 50010:OPEN FILE$ FOR INPUT AS #1
53010 IF ERRSW<>0 THEN LOCATE 23,1,0:PRINT "OPEN ERROR";:RETURN
53025 ON ERROR GOTO 0
53036 WHILE EOF(1)=0
53040 LL=LL+1:T=T(LL)*-1:T(LL)=T:LINE INPUT #1,T$(T):GOSUB 99
53070 WEND
53080 CLOSE:RETURN
54000 GOSUB 50010:OPEN "O",1,FILE$
54010 IF ERRSW<>0 THEN LOCATE 23,1,0:PRINT "OPEN ERROR";:RETURN
54020 FOR OUTRCD= 1 TO LL:T=T(OUTRCD):GOSUB 209:PRINT#1,MID$(T$(T),1,X)
54025 NEXT OUTRCD
54030 IF ERRSW<>0 THEN LOCATE 23,1,0:PRINT "WRITE ERROR";:RETURN
54035 RETURN
55080 MID$(XL$,1)=INPUT$(128,#1):RETURN
60000 DATA 71,72,73,75,77,79,80,81,82,83,115,116,117,118,119,132,999
65000 REM -*- RV-EDIT      -*-
65020 KEY(2) ON:ON KEY(2) GOSUB 65200
65030 KEY OFF:SCREEN 0,1:COLOR 15,3,1:WIDTH 40:CLS:LOCATE 5,18:PRINT " IBM "
65040 LOCATE 7,12,0:PRINT "Personal Computer"
65050 COLOR 10,0:LOCATE 10,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
65060 LOCATE 11,9,0:PRINT CHR$(179)+" -*-R V - E D I T-*- "+CHR$(179)
65070 LOCATE 12,9,0:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
65080 LOCATE 13,9,0:PRINT CHR$(179)+"Version 1.2  11/05/82"+CHR$(179)
65090 LOCATE 14,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
65100 COLOR 15,0:LOCATE 19,5,0:PRINT "   Author: R. S. Vollmer Sr.   "
65110 COLOR 14,0:LOCATE 23,7,0:PRINT "       INITIALIZING        ";CHR$(7);
65120 COLOR 30:LOCATE 23,5,0:PRINT CHR$(15);:LOCATE 23,35,0:PRINT CHR$(15);
65130 COLOR 7,5
65150 GOTO 1
65200 RUN"A:TRANSFER"
```

## TRANSFER.BAS

```bas
65000 KEY OFF:SCREEN 0,1:KEY(2) ON:ON KEY(2) GOSUB 65080:COLOR 7,0:WIDTH 80
65010 CLS:LOCATE  ,  ,0:PRINT"INSERT THE NEXT PROGRAM DISKETTE"
65020 PRINT" PRESS THE SPACE BAR TO CONTINUE ":COLOR 23
65022 PRINT STRING$(32,196):COLOR 7
65025 K$=INKEY$:IF K$="" THEN 65025
65030 P$="CONTROL.BAS"
65040 ON ERROR GOTO 65070:ERRSW=0
65050 OPEN "I",1,P$ 'TRY PRIMARY
65060 IF ERRSW=0 THEN RUN P$
65062 WIDTH 80:CLS
65068 SYSTEM
65070 ERRSW=-1:RESUME NEXT
65080 SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0019

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        21  10-24-82   3:15p
    SYSTEM   BAT       128  11-03-82   1:41a
    RUN      BAT       128  11-03-82   1:46a
    TRANSFER BAS       384  11-04-82   3:24a
    MENU     PCS      2304  10-24-82  12:06p
    COVER    PCS      1152  10-21-82   1:47p
    EXIT     PCS       256  10-27-82   7:02p
    CONTROLB PCS         5  10-21-82   9:29a
    CONTROLD PCS        11  10-26-82   2:03a
    CONTROLM PCS        13  10-20-82   1:13p
    RV-EDIT  BAS      8960  11-07-82   2:20a
    CONTROL  BAS       128  11-07-82   7:23p
    CONTROL  PCS         5  10-21-82   9:29a
    RV-EDIT  DOC     10368  11-08-82   3:39a
    ARCHIE   DOC      2048   8-01-82   8:35p
    ARCHIE   BAS     32384  11-07-82   8:04p
    PCS      DOC     21632  11-08-82  10:17a
    MENU     BAS      1792  11-07-82   8:06p
    FILES019 TXT      1331   5-29-87  10:42a
           19 file(s)      83050 bytes
                           70656 bytes free
