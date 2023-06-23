---
layout: page
title: "PC-SIG Diskette Library (Disk #612)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0612/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0612"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LANGUAGES"

    LANGUAGE TEACHER is a series of menu-driven language tutorial programs
    for vocabulary, verb conjugations and standard phrases in French,
    Spanish, German, and Italian.  HEBREW is a separate program for
    language-skills development.
    
    Each lesson is a self-paced tutorial in that specific language. Hundreds
    of word combinations and thousands of verb conjugations are provided.
    Various tests are presented including multiple choice and diagnostics.
    Questions and word choices are randomly selected.
    
    These lessons are not designed to teach conversational languages but
    rather to provide drills in order to increase your working vocabulary
    and practice your use of the conjugation forms.
    File Descriptions:
    
    ARC      EXE  Unarchiving program.
    SPANISH* ARC  Archived files with Spanish lessons (2 files).
    LANGUAGE TXT  Documentation file.
    ITALIAN  ARC  Archived file with Italian lessons.
    HEBREW   EXE  Hewbrew lessons.
    GERMAN*  ARC  Archived files with German lessons (2 files).
    FRENCH*  ARC  Archived files with French lessons (2 files).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES612.TXT

{% raw %}
```
-----------------------------------------------------------------------------
Disk No  612  Languages                                            v1   DS2
-----------------------------------------------------------------------------
Languages is foreign langauge tutor (foreign meaning non-English) which
includes French, Spanish, German, Italian, and Hebrew.  Most of the files
on this disk are archived.  The unarchiving file is included on this disk.
 
ARC      EXE  Unarchiving program
FRENCH1  ARC  French lesson 1
FRENCH2  ARC  French lesson 2
GERMAN1  ARC  German lesson 1
GERMAN2  ARC  German lesson 2
HEBREW   EXE  Hewbrew lesson executable form
ITALIAN  ARC  Italian lesson
LANGUAGE TXT  Documentation file
SPANISH1 ARC  Spanish lesson 1
SPANISH2 ARC  Spanish lesson 2
GO       BAT  Start up batch file
FILES612 TXT  This file
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.1
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use FRENCH TEACHER #1 <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,29:PRINT"***********************":LOCATE 12,29:PRINT"* ";:COLOR 0,7:PRINT" FRENCH TEACHER #1 ";:COLOR 7,0:PRINT" *":LOCATE 13,29:PRINT"***********************"
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(6,5)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="French to English":S2$="English to French"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,25:PRINT" FRENCH TEACHER #1--Version 1.1 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Phrase Translation Drill":PRINT TAB(25)"<F> Verb Conjugation Drill"
110 PRINT TAB(25)"<G> Retest Missed Vocabulary/Phrases":PRINT TAB(25)"<H> Diagnostic Results":PRINT TAB(25)"<I> Print Noun Vocabulary Test":PRINT TAB(25)"<J> Print Verb Vocabulary Test":PRINT TAB(25)"<K> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<L> Print Random Selection Vocabulary Test":PRINT TAB(25)"<M> Print Phrase Test":PRINT TAB(25)"<N> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64:IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 6:FOR H=1 TO 5:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/5:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/F/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="F" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="F" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),4)="las " OR LEFT$(A$(N),4)="les ") THEN PRINT USING U2$;MID$(A$(N),5):GOTO 800
792 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),3)="la " OR LEFT$(A$(N),3)="le ") THEN PRINT USING U2$;MID$(A$(N),4):GOTO 800
794 IF (T9<>1 OR (S<>5 AND S<>7)) AND LEFT$(A$(N),2)="l'" THEN PRINT USING U2$;MID$(A$(N),3):GOTO 800
796 IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140
842 IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1="CHR$(133)"  F2="CHR$(131)"  F3="CHR$(160)"  F4="CHR$(138)"  F5="CHR$(136);
844 IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN PRINT"  F6="CHR$(130)"  F7="CHR$(140)"  F8="CHR$(147)"  F9="CHR$(151)"  F10="CHR$(150)"  "CHR$(24)"="CHR$(139)"  "CHR$(25)"="CHR$(135);
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEF SEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(4,178):LOCATE 5,60:PRINT STRING$(11,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),5)="-las " OR LEFT$(Z2$(X),5)="-les " THEN ZZ$=MID$(Z2$(X),6):GOTO 1410
1405 IF LEFT$(Z2$(X),4)="-la " OR LEFT$(Z2$(X),4)="-le " THEN ZZ$=MID$(Z2$(X),5):GOTO 1410
1407 IF LEFT$(Z2$(X),3)="-l'" THEN ZZ$=MID$(Z2$(X),4) ELSE ZZ$=MID$(Z2$(X),2)
1410 GOSUB 2920:LPRINT ZZ$:LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),4)="las " OR LEFT$(A$(B),4)="les " THEN ZZ$=MID$(A$(B),5):GOTO 1420
1414 IF LEFT$(A$(B),3)="la " OR LEFT$(A$(B),3)="le " THEN ZZ$=MID$(A$(B),4):GOTO 1420
1416 IF LEFT$(A$(B),2)="l'" THEN ZZ$=MID$(A$(B),3) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,4)="las " OR MID$(Z2$(X),2,4)="les ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),6):GOTO 1510
1494 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,3)="la " OR MID$(Z2$(X),2,3)="le ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),5):GOTO 1510
1496 IF D=1 AND S<>5 AND S<>7 AND MID$(Z2$(X),2,2)="l'" THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),4):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,4)="las " OR MID$(R4$(X1),2,4)="les ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),6):GOTO 1530
1514 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,3)="la " OR MID$(R4$(X1),2,3)="le ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),5):GOTO 1530
1516 IF D=1 AND T9<>1 AND S=7 AND MID$(R4$(X1),2,2)="l'" THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),4):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 3:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) OR A(1)=A(3) OR A(2)=A(3) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 3:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*16)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 2:A(I)=INT(RND(1)*10)+1:NEXT:IF A(1)=A(2) THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 2:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2402 IF Q=44 THEN STOP
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*16)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 5:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 4:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*6)+1:Z1(INT(P/5)+1)=X
2570 FOR B=1 TO 4:FOR Z=1 TO 6:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*5)+1:X=INT(RND(1)*4)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*4)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 6:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 4:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 6:READ Z$:NEXT:FOR I=0 TO 3:READ Z$:LOCATE 7,17*I+9:COLOR 0,7:PRINT " ";Z$;" ":COLOR 7,0:NEXT
2810 FOR K=0 TO 3:RESTORE 2910:FOR I=1 TO 6:READ Z$:LOCATE 8+I,17*K+10:PRINT Z$:LOCATE 8+I,17*K+15:PRINT E(I,K+1);:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA JE,TU,IL,NOUS,VOUS,ILS,PRESENT,IMPERFECT,FUTURE,CONDITIONAL
2910 DATA Je,Tu,Il,Nous,Vous,Ils,Present,Imperfect,Future,Conditional
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(133) OR MID$(ZZ$,II,1)=CHR$(131) OR MID$(ZZ$,II,1)=CHR$(160) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(138) OR MID$(ZZ$,II,1)=CHR$(136) OR MID$(ZZ$,II,1)=CHR$(130) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(150) OR MID$(ZZ$,II,1)=CHR$(151) THEN MID$(ZZ$,II,1)="u"
2942 IF MID$(ZZ$,II,1)=CHR$(139) OR MID$(ZZ$,II,1)=CHR$(140) THEN MID$(ZZ$,II,1)="i"
2948 IF MID$(ZZ$,II,1)=CHR$(135) THEN MID$(ZZ$,II,1)="c"
2950 IF MID$(ZZ$,II,1)=CHR$(147) THEN MID$(ZZ$,II,1)="o"
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 14:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:ON KEY(5) GOSUB 3092:ON KEY(11) GOSUB 3098:ON KEY(14) GOSUB 3099
2992 ON KEY(6) GOSUB 3093:ON KEY(7) GOSUB 3094:ON KEY(8) GOSUB 3095:ON KEY(9) GOSUB 3096:ON KEY(10) GOSUB 3097:ON KEY(12) GOSUB 3100:ON KEY(13) GOSUB 3100
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 14:ON KEY(II) GOSUB 3100:KEY(II) OFF:NEXT:LOCATE 25,1:PRINT SPC(79);:RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(133);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(133):RETURN
3070 LOCATE YY,XX:PRINT CHR$(131);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(131):RETURN
3080 LOCATE YY,XX:PRINT CHR$(160);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(160):RETURN
3090 LOCATE YY,XX:PRINT CHR$(138);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(138):RETURN
3092 LOCATE YY,XX:PRINT CHR$(136);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(136):RETURN
3093 LOCATE YY,XX:PRINT CHR$(130);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(130):RETURN
3094 LOCATE YY,XX:PRINT CHR$(140);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(140):RETURN
3095 LOCATE YY,XX:PRINT CHR$(147);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(147):RETURN
3096 LOCATE YY,XX:PRINT CHR$(151);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(151):RETURN
3097 LOCATE YY,XX:PRINT CHR$(150);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(150):RETURN
3098 LOCATE YY,XX:PRINT CHR$(139);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(139):RETURN
3099 LOCATE YY,XX:PRINT CHR$(135);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(135):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.1
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use FRENCH TEACHER #2 <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,29:PRINT"***********************":LOCATE 12,29:PRINT"* ";:COLOR 0,7:PRINT" FRENCH TEACHER #2 ";:COLOR 7,0:PRINT" *":LOCATE 13,29:PRINT"***********************"
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(6,5)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="French to English":S2$="English to French"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,25:PRINT" FRENCH TEACHER #2--Version 1.1 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Verb Conjugation Drill"
110 PRINT TAB(25)"<F> Retest Missed Vocabulary":PRINT TAB(25)"<G> Diagnostic Results":PRINT TAB(25)"<H> Print Noun Vocabulary Test":PRINT TAB(25)"<I> Print Verb Vocabulary Test":PRINT TAB(25)"<J> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<K> Print Random Selection Vocabulary Test":PRINT TAB(25)"<L> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64
155 IF S>4 THEN S=S+1
156 IF S>12 THEN S=S+1
157 IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 6:FOR H=1 TO 5:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/5:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/F/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="F" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="F" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),4)="las " OR LEFT$(A$(N),4)="les ") THEN PRINT USING U2$;MID$(A$(N),5):GOTO 800
792 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),3)="la " OR LEFT$(A$(N),3)="le ") THEN PRINT USING U2$;MID$(A$(N),4):GOTO 800
794 IF (T9<>1 OR (S<>5 AND S<>7)) AND LEFT$(A$(N),2)="l'" THEN PRINT USING U2$;MID$(A$(N),3):GOTO 800
796 IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140
842 IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1="CHR$(133)"  F2="CHR$(131)"  F3="CHR$(160)"  F4="CHR$(138)"  F5="CHR$(136);
844 IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN PRINT"  F6="CHR$(130)"  F7="CHR$(140)"  F8="CHR$(147)"  F9="CHR$(151)"  F10="CHR$(150)"  "CHR$(24)"="CHR$(139)"  "CHR$(25)"="CHR$(135);
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEF SEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(4,178):LOCATE 5,60:PRINT STRING$(11,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),5)="-las " OR LEFT$(Z2$(X),5)="-les " THEN ZZ$=MID$(Z2$(X),6):GOTO 1410
1405 IF LEFT$(Z2$(X),4)="-la " OR LEFT$(Z2$(X),4)="-le " THEN ZZ$=MID$(Z2$(X),5):GOTO 1410
1407 IF LEFT$(Z2$(X),3)="-l'" THEN ZZ$=MID$(Z2$(X),4) ELSE ZZ$=MID$(Z2$(X),2)
1410 GOSUB 2920:LPRINT ZZ$:LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),4)="las " OR LEFT$(A$(B),4)="les " THEN ZZ$=MID$(A$(B),5):GOTO 1420
1414 IF LEFT$(A$(B),3)="la " OR LEFT$(A$(B),3)="le " THEN ZZ$=MID$(A$(B),4):GOTO 1420
1416 IF LEFT$(A$(B),2)="l'" THEN ZZ$=MID$(A$(B),3) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,4)="las " OR MID$(Z2$(X),2,4)="les ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),6):GOTO 1510
1494 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,3)="la " OR MID$(Z2$(X),2,3)="le ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),5):GOTO 1510
1496 IF D=1 AND S<>5 AND S<>7 AND MID$(Z2$(X),2,2)="l'" THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),4):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,4)="las " OR MID$(R4$(X1),2,4)="les ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),6):GOTO 1530
1514 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,3)="la " OR MID$(R4$(X1),2,3)="le ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),5):GOTO 1530
1516 IF D=1 AND T9<>1 AND S=7 AND MID$(R4$(X1),2,2)="l'" THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),4):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*18)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 2:A(I)=INT(RND(1)*18)+1:NEXT:IF A(1)=A(2) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*18)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 2:A(I)=INT(RND(1)*10)+1:NEXT:IF A(1)=A(2) THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 2:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2402 IF Q=44 THEN STOP
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*16)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 5:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 4:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*6)+1:Z1(INT(P/5)+1)=X
2570 FOR B=1 TO 4:FOR Z=1 TO 6:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*5)+1:X=INT(RND(1)*4)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*4)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 6:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 4:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 6:READ Z$:NEXT:FOR I=0 TO 3:READ Z$:LOCATE 7,17*I+9:COLOR 0,7:PRINT " ";Z$;" ":COLOR 7,0:NEXT
2810 FOR K=0 TO 3:RESTORE 2910:FOR I=1 TO 6:READ Z$:LOCATE 8+I,17*K+10:PRINT Z$:LOCATE 8+I,17*K+15:PRINT E(I,K+1);:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA JE,TU,IL,NOUS,VOUS,ILS,PRESENT,IMPERFECT,FUTURE,CONDITIONAL
2910 DATA Je,Tu,Il,Nous,Vous,Ils,Present,Imperfect,Future,Conditional
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(133) OR MID$(ZZ$,II,1)=CHR$(131) OR MID$(ZZ$,II,1)=CHR$(160) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(138) OR MID$(ZZ$,II,1)=CHR$(136) OR MID$(ZZ$,II,1)=CHR$(130) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(150) OR MID$(ZZ$,II,1)=CHR$(151) THEN MID$(ZZ$,II,1)="u"
2942 IF MID$(ZZ$,II,1)=CHR$(139) OR MID$(ZZ$,II,1)=CHR$(140) THEN MID$(ZZ$,II,1)="i"
2948 IF MID$(ZZ$,II,1)=CHR$(135) THEN MID$(ZZ$,II,1)="c"
2950 IF MID$(ZZ$,II,1)=CHR$(147) THEN MID$(ZZ$,II,1)="o"
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 14:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:ON KEY(5) GOSUB 3092:ON KEY(11) GOSUB 3098:ON KEY(14) GOSUB 3099
2992 ON KEY(6) GOSUB 3093:ON KEY(7) GOSUB 3094:ON KEY(8) GOSUB 3095:ON KEY(9) GOSUB 3096:ON KEY(10) GOSUB 3097:ON KEY(12) GOSUB 3100:ON KEY(13) GOSUB 3100
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 14:ON KEY(II) GOSUB 3100:KEY(II) OFF:NEXT:KEY 1,"":RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(133);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(133):RETURN
3070 LOCATE YY,XX:PRINT CHR$(131);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(131):RETURN
3080 LOCATE YY,XX:PRINT CHR$(160);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(160):RETURN
3090 LOCATE YY,XX:PRINT CHR$(138);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(138):RETURN
3092 LOCATE YY,XX:PRINT CHR$(136);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(136):RETURN
3093 LOCATE YY,XX:PRINT CHR$(130);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(130):RETURN
3094 LOCATE YY,XX:PRINT CHR$(140);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(140):RETURN
3095 LOCATE YY,XX:PRINT CHR$(147);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(147):RETURN
3096 LOCATE YY,XX:PRINT CHR$(151);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(151):RETURN
3097 LOCATE YY,XX:PRINT CHR$(150);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(150):RETURN
3098 LOCATE YY,XX:PRINT CHR$(139);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(139):RETURN
3099 LOCATE YY,XX:PRINT CHR$(135);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(135):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.1
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use GERMAN TEACHER #1 <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,29:PRINT"***********************":LOCATE 12,29:PRINT"* ";:COLOR 0,7:PRINT" GERMAN TEACHER #1 ";:COLOR 7,0:PRINT" *":LOCATE 13,29:PRINT"***********************"
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(6,5)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="German to English":S2$="English to German"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,25:PRINT" GERMAN TEACHER #1--Version 1.1 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Phrase Translation Drill":PRINT TAB(25)"<F> Verb Conjugation Drill"
110 PRINT TAB(25)"<G> Retest Missed Vocabulary/Phrases":PRINT TAB(25)"<H> Diagnostic Results":PRINT TAB(25)"<I> Print Noun Vocabulary Test":PRINT TAB(25)"<J> Print Verb Vocabulary Test":PRINT TAB(25)"<K> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<L> Print Random Selection Vocabulary Test":PRINT TAB(25)"<M> Print Phrase Test":PRINT TAB(25)"<N> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64:IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 6:FOR H=1 TO 5:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/6:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/G/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="G" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="G" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),4)="der " OR LEFT$(A$(N),4)="die " OR LEFT$(A$(N),4)="das ") THEN PRINT USING U2$;MID$(A$(N),5) ELSE IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140:IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1="CHR$(132)"   F2="CHR$(148)"   F3="CHR$(129)"   F4="CHR$(225);
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEF SEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(3,178):LOCATE 5,60:PRINT STRING$(10,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),5)="-der " OR LEFT$(Z2$(X),5)="-die " OR LEFT$(Z2$(X),5)="-das " THEN ZZ$=MID$(Z2$(X),6):GOSUB 2920:LPRINT ZZ$ ELSE ZZ$=MID$(Z2$(X),2):GOSUB 2920:LPRINT ZZ$
1410 LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),4)="der " OR LEFT$(A$(B),4)="die " OR LEFT$(A$(B),4)="das " THEN ZZ$=MID$(A$(B),5) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";;Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,4)="der " OR MID$(Z2$(X),2,4)="die " OR MID$(Z2$(X),2,4)="das ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),6):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,4)="der " OR MID$(R4$(X1),2,4)="die " OR MID$(R4$(X1),2,4)="das ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),6):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 3:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) OR A(1)=A(3) OR A(2)=A(3) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 3:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*16)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 2:A(I)=INT(RND(1)*8)+1:NEXT:IF A(1)=A(2) THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 2:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*12)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 4:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 5:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*6)+1:Z1(INT(P/6)+1)=X
2570 FOR B=1 TO 5:FOR Z=1 TO 6:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*6)+1:X=INT(RND(1)*5)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*5)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 6:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 5:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 6:READ Z$:NEXT:FOR I=0 TO 4:READ Z$:LOCATE 7,17*I+1:COLOR 0,7:PRINT " ";Z$;" ":COLOR 7,0:NEXT
2810 FOR K=0 TO 4:RESTORE 2910:FOR I=1 TO 6:READ Z$:LOCATE 8+I,17*K+2:PRINT Z$:LOCATE 8+I,17*K+7:PRINT E(I,K+1);:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA ICH,DU,ER,WIR,IHR,SIE,PRESENT,IMPERFECT,PERFECT,PLUPERFECT,FUTURE
2910 DATA Ich,Du,Er,Wir,Ihr,Sie,Present,Imperfect,Perfect,Pluperfect,Future
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(132) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(137) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(129) THEN MID$(ZZ$,II,1)="u"
2950 IF MID$(ZZ$,II,1)=CHR$(148) THEN MID$(ZZ$,II,1)="o"
2960 IF MID$(ZZ$,II,1)=CHR$(225) THEN MID$(ZZ$,II,1)=" "
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 10:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:FOR II=5 TO 10:ON KEY(II) GOSUB 3100:NEXT
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 10:ON KEY(II) GOSUB 3100:KEY(II) OFF:NEXT:LOCATE 25,1:PRINT SPC(79);:RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(132);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(132):RETURN
3070 LOCATE YY,XX:PRINT CHR$(148);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(148):RETURN
3080 LOCATE YY,XX:PRINT CHR$(129);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(129):RETURN
3090 LOCATE YY,XX:PRINT CHR$(225);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(225):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.1
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use GERMAN TEACHER #2 <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,29:PRINT"***********************":LOCATE 12,29:PRINT"* ";:COLOR 0,7:PRINT" GERMAN TEACHER #2 ";:COLOR 7,0:PRINT" *":LOCATE 13,29:PRINT"***********************"
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(6,5)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="German to English":S2$="English to German"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,25:PRINT" GERMAN TEACHER #2--Version 1.1 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Verb Conjugation Drill"
110 PRINT TAB(25)"<F> Retest Missed Vocabulary":PRINT TAB(25)"<G> Diagnostic Results":PRINT TAB(25)"<H> Print Noun Vocabulary Test":PRINT TAB(25)"<I> Print Verb Vocabulary Test":PRINT TAB(25)"<J> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<K> Print Random Selection Vocabulary Test":PRINT TAB(25)"<L> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64
155 IF S>4 THEN S=S+1
156 IF S>12 THEN S=S+1
157 IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 6:FOR H=1 TO 5:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/6:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/G/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="G" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="G" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),4)="der " OR LEFT$(A$(N),4)="die " OR LEFT$(A$(N),4)="das ") THEN PRINT USING U2$;MID$(A$(N),5) ELSE IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140:IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1=ä   F2=ö   F3=ü   F4=ß";
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEF SEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(3,178):LOCATE 5,60:PRINT STRING$(10,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),5)="-der " OR LEFT$(Z2$(X),5)="-die " OR LEFT$(Z2$(X),5)="-das " THEN ZZ$=MID$(Z2$(X),6):GOSUB 2920:LPRINT ZZ$ ELSE ZZ$=MID$(Z2$(X),2):GOSUB 2920:LPRINT ZZ$
1410 LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),4)="der " OR LEFT$(A$(B),4)="die " OR LEFT$(A$(B),4)="das " THEN ZZ$=MID$(A$(B),5) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,4)="der " OR MID$(Z2$(X),2,4)="die " OR MID$(Z2$(X),2,4)="das ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),6):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,4)="der " OR MID$(R4$(X1),2,4)="die " OR MID$(R4$(X1),2,4)="das ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),6):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 3:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) OR A(1)=A(3) OR A(2)=A(3) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 3:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*16)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 2:A(I)=INT(RND(1)*8)+1:NEXT:IF A(1)=A(2) THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 2:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*13)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 4:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 5:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*6)+1:Z1(INT(P/6)+1)=X
2570 FOR B=1 TO 5:FOR Z=1 TO 6:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*6)+1:X=INT(RND(1)*5)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*5)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 6:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 5:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 6:READ Z$:NEXT:FOR I=0 TO 4:READ Z$:LOCATE 7,17*I+1:COLOR 0,7:PRINT " ";Z$;" ":COLOR 7,0:NEXT
2810 FOR K=0 TO 4:RESTORE 2910:FOR I=1 TO 6:READ Z$:LOCATE 8+I,17*K+2:PRINT Z$:LOCATE 8+I,17*K+7:PRINT E(I,K+1);:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA ICH,DU,ER,WIR,IHR,SIE,PRESENT,IMPERFECT,PERFECT,PLUPERFECT,FUTURE
2910 DATA Ich,Du,Er,Wir,Ihr,Sie,Present,Imperfect,Perfect,Pluperfect,Future
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(132) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(137) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(129) THEN MID$(ZZ$,II,1)="u"
2950 IF MID$(ZZ$,II,1)=CHR$(148) THEN MID$(ZZ$,II,1)="o"
2960 IF MID$(ZZ$,II,1)=CHR$(225) THEN MID$(ZZ$,II,1)=" "
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 10:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:FOR II=5 TO 10:ON KEY(II) GOSUB 3100:NEXT
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 10:ON KEY(II) GOSUB 3100:KEY(II) OFF:NEXT:LOCATE 25,1:PRINT SPC(79);:RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(132);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(132):RETURN
3070 LOCATE YY,XX:PRINT CHR$(148);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(148):RETURN
3080 LOCATE YY,XX:PRINT CHR$(129);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(129):RETURN
3090 LOCATE YY,XX:PRINT CHR$(225);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(225):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.1
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use ITALIAN TEACHER <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,30:PRINT"*********************":LOCATE 12,30:PRINT"* ";:COLOR 0,7:PRINT" ITALIAN TEACHER ";:COLOR 7,0:PRINT" *":LOCATE 13,30:PRINT"*********************"
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(6,5)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="Italian to English":S2$="English to Italian"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,26:PRINT" ITALIAN TEACHER--Version 1.1 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Phrase Translation Drill":PRINT TAB(25)"<F> Verb Conjugation Drill"
110 PRINT TAB(25)"<G> Retest Missed Vocabulary/Phrases":PRINT TAB(25)"<H> Diagnostic Results":PRINT TAB(25)"<I> Print Noun Vocabulary Test":PRINT TAB(25)"<J> Print Verb Vocabulary Test":PRINT TAB(25)"<K> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<L> Print Random Selection Vocabulary Test":PRINT TAB(25)"<M> Print Phrase Test":PRINT TAB(25)"<N> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64:IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 6:FOR H=1 TO 5:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/5:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/I/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="I" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="I" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),2)="i " OR LEFT$(A$(N),2)="l'") THEN PRINT USING U2$;MID$(A$(N),3):GOTO 800
792 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),3)="la " OR LEFT$(A$(N),3)="le ") THEN PRINT USING U2$;MID$(A$(N),4):GOTO 800
794 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),3)="lo " OR LEFT$(A$(N),3)="il ") THEN PRINT USING U2$;MID$(A$(N),4):GOTO 800
796 IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140
842 IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1="CHR$(133)"  F2="CHR$(138)"  F3="CHR$(130)"  F4="CHR$(141)"  F5="CHR$(161);
844 IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN PRINT"  F6="CHR$(149)"  F7="CHR$(162)"  F8="CHR$(151)"  F9="CHR$(163);
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEF SEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(4,178):LOCATE 5,60:PRINT STRING$(11,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),4)="-il " OR LEFT$(Z2$(X),4)="-lo " THEN ZZ$=MID$(Z2$(X),5):GOTO 1410
1405 IF LEFT$(Z2$(X),4)="-la " OR LEFT$(Z2$(X),4)="-le " THEN ZZ$=MID$(Z2$(X),5):GOTO 1410
1407 IF LEFT$(Z2$(X),3)="-l'" OR LEFT$(Z2$(X),3)="-i " THEN ZZ$=MID$(Z2$(X),4) ELSE ZZ$=MID$(Z2$(X),2)
1410 GOSUB 2920:LPRINT ZZ$:LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),3)="il " OR LEFT$(A$(B),4)="lo " THEN ZZ$=MID$(A$(B),4):GOTO 1420
1414 IF LEFT$(A$(B),3)="la " OR LEFT$(A$(B),3)="le " THEN ZZ$=MID$(A$(B),4):GOTO 1420
1416 IF LEFT$(A$(B),2)="l'" OR LEFT$(A$(B),2)="i " THEN ZZ$=MID$(A$(B),3) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,3)="il " OR MID$(Z2$(X),2,3)="lo ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),5):GOTO 1510
1494 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,3)="la " OR MID$(Z2$(X),2,3)="le ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),5):GOTO 1510
1496 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,2)="l'" OR MID$(Z2$(X),2,2)="i ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),4):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,3)="il " OR MID$(R4$(X1),2,3)="lo ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),5):GOTO 1530
1514 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,3)="la " OR MID$(R4$(X1),2,3)="le ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),5):GOTO 1530
1516 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,2)="l'" OR MID$(R4$(X1),2,2)="i ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),4):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*17)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 2:A(I)=INT(RND(1)*17)+1:NEXT:IF A(1)=A(2) OR A(1)=A(3) OR A(2)=A(3) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*17)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 2:A(I)=INT(RND(1)*5)+1:NEXT:IF A(1)=A(2) THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 2:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2402 IF Q=44 THEN STOP
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*15)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 5:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 4:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*6)+1:Z1(INT(P/5)+1)=X
2570 FOR B=1 TO 4:FOR Z=1 TO 6:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*5)+1:X=INT(RND(1)*4)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*4)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 6:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 4:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 6:READ Z$:NEXT:FOR I=0 TO 3:READ Z$:LOCATE 7,17*I+9:COLOR 0,7:PRINT " ";Z$;" ":COLOR 7,0:NEXT
2810 FOR K=0 TO 3:RESTORE 2910:FOR I=1 TO 6:READ Z$:LOCATE 8+I,17*K+10:PRINT Z$:LOCATE 8+I,17*K+15:PRINT E(I,K+1);:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA IO,TU,LUI,NOI,VOI,ESSI,PRESENT,IMPERFECT,PAST ABS.,FUTURE
2910 DATA Io,Tu,Lui,Noi,Voi,Essi,Present,Imperfect,Past Abs.,Future
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(133) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(138) OR MID$(ZZ$,II,1)=CHR$(130) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(163) OR MID$(ZZ$,II,1)=CHR$(151) THEN MID$(ZZ$,II,1)="u"
2942 IF MID$(ZZ$,II,1)=CHR$(141) OR MID$(ZZ$,II,1)=CHR$(161) THEN MID$(ZZ$,II,1)="i"
2950 IF MID$(ZZ$,II,1)=CHR$(149) OR MID$(ZZ$,II,1)=CHR$(162) THEN MID$(ZZ$,II,1)="o"
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 14:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:ON KEY(5) GOSUB 3092:ON KEY(11) GOSUB 3100:ON KEY(14) GOSUB 3100
2992 ON KEY(6) GOSUB 3093:ON KEY(7) GOSUB 3094:ON KEY(8) GOSUB 3095:ON KEY(9) GOSUB 3096:ON KEY(10) GOSUB 3100:ON KEY(12) GOSUB 3100:ON KEY(13) GOSUB 3100
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 14:ON KEY(II) GOSUB 3100:KEY(II) OFF:NEXT:KEY 1,"":RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(133);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(133):RETURN
3070 LOCATE YY,XX:PRINT CHR$(138);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(138):RETURN
3080 LOCATE YY,XX:PRINT CHR$(130);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(130):RETURN
3090 LOCATE YY,XX:PRINT CHR$(141);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(141):RETURN
3092 LOCATE YY,XX:PRINT CHR$(161);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(161):RETURN
3093 LOCATE YY,XX:PRINT CHR$(149);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(149):RETURN
3094 LOCATE YY,XX:PRINT CHR$(162);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(162):RETURN
3095 LOCATE YY,XX:PRINT CHR$(151);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(151):RETURN
3096 LOCATE YY,XX:PRINT CHR$(163);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(163):RETURN
3097 LOCATE YY,XX:PRINT CHR$(150);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(150):RETURN
3098 LOCATE YY,XX:PRINT CHR$(139);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(139):RETURN
3099 LOCATE YY,XX:PRINT CHR$(135);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(135):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

## LANGUAGE.TXT

{% raw %}
```
                                LANGUAGE TEACHER
 
                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain
 
     LANGUAGE TEACHER is a series of menu-driven language tutorial programs
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program
in the series contains hundreds of word combinations and verb conjugation
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on
misses, print a multiple choice test, and to run a full quiz diagnostic routine
with line printer output. Of particular interest to non-English students is the
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the
program the the user being unable to predict what the next selection will be.
The program package is not designed to teach conversational language or
pronunciation but, instead, to provide practice drills in order to increase
your working vocabulary and to enhance your use of the conjugation forms.
 
     The LANGUAGE TEACHER series was originally published by Acorn Software
Products, Inc. of Washington, DC. Since then the company has gone out of
business and the author is releasing the series to the Public Domain. If you
find any of the programs in the series to be usefull, a suitable payment ($5 to
$10) would be appreciated so more programs of this quality can be developed.
 
PROGRAM SPECIFICATIONS:
 
     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk
drive and a suitable high resolution monitor. Preferred monitors are the IBM
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics
Monitor Adapter. In most cases, only a high quality color monitor or green
screen will provide the resolution necessary to display the special chaaracters
used with LANGUAGE TEACHER. All other program functions will be suitable,
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.
 
LOADING INSTRUCTIONS:
 
     Power up your system with a DOS diskette containing BASICA in disk drive
"A". Load BASICA into memory and remove your DOS diskette from the disk drive.
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's
Basic string manipulation (better known as "garbage collection") and is not a
machine or program malfunction. The time rarely exceeds 8-10 seconds. The
occurrence of this phenomenon decreases in systems having more than 64K RAM.
 
SPECIAL CHARACTER SET:
 
     LANGUAGE TEACHER utilizes the special function keys to input the special
characters used in the language. These keys are active only when a non-multiple
choice drill is selected in which you must enter the direct equivalent of the
required answer. The 25th line of the screen will display which function key is
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to
recognize these special characters, programming is implemented to convert these
special characters to their "normal" letters before being output to the line
printer. Once you have obtained your printout, insert the special marks by
hand.
 
MISCELLANEOUS:
 
     If a multiple choice type quiz has been selected, you will only be given
15 seconds (25 seconds for verb conjugation) to input your answer. If the time
expires before you make your choice, you will be credited with an incorrect
answer. NOTE: If the computer performs its "garbage collection" routine while
timing is in progress, program coding is implemented to prevent your time
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to
type in the exact answer. In the case of being quizzed with a noun, you must
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can
be performed. Also, the diagnostic display will let you know how many of each
person and tense you missed. If you missed more than 3 of any person/tense, an
"*" is displayed beside the applicable person/tense, indicating you need more
practice.
 
ADDITIONAL NOTES:
 
     The extent of the vocabulary of each program is given below. Since the
program randomly selects from its contents in each option, you truly have a
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations
and 114 Italian/English phrase combinations.
 
 
We hope that you have many enjoyable and informative hours working with your
LANGUAGE TEACHER program. If you have any suggestions or problems with using
LANGUAGE TEACHER, feel free to correspond with the author using the address
listed below. Please make your comments as specific as possible and enclose a
self-addressed stamped envelope:
 
                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701
 
French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations
and 114 Italian/English phrase combinations.
 
 
We hope that you have many enjoyable and informative hours working with your
LANGUAGE TEACHER program.
```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.2---10/1/83
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use SPANISH TEACHER #1 <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,28:PRINT"*************************":LOCATE 12,28:PRINT"* ";:COLOR 0,7:PRINT" SPANISH TEACHER  #1 ";:COLOR 7,0:PRINT" *":LOCATE 13,28:PRINT"*************************
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(5,6)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="Spanish to English":S2$="English to Spanish"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,25:PRINT" SPANISH TEACHER #1--Version 1.2 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Phrase Translation Drill":PRINT TAB(25)"<F> Verb Conjugation Drill"
110 PRINT TAB(25)"<G> Retest Missed Vocabulary/Phrases":PRINT TAB(25)"<H> Diagnostic Results":PRINT TAB(25)"<I> Print Noun Vocabulary Test":PRINT TAB(25)"<J> Print Verb Vocabulary Test":PRINT TAB(25)"<K> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<L> Print Random Selection Vocabulary Test":PRINT TAB(25)"<M> Print Phrase Test":PRINT TAB(25)"<N> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64:IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 5:FOR H=1 TO 6:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/7:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/S/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="S" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="S" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),4)="los " OR LEFT$(A$(N),4)="las ") THEN PRINT USING U2$;MID$(A$(N),5):GOTO 800
795 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),3)="la " OR LEFT$(A$(N),3)="el ") THEN PRINT USING U2$;MID$(A$(N),4) ELSE IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140:IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1="CHR$(160)"   F2="CHR$(130)"   F3="CHR$(161)"   F4="CHR$(162)"   F5="CHR$(163)"   F6="CHR$(164);
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEFSEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(8,178):LOCATE 5,60:PRINT STRING$(12,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),5)="-los " OR LEFT$(Z2$(X),5)="-las " THEN ZZ$=MID$(Z2$(X),6):GOTO 1410
1405 IF LEFT$(Z2$(X),4)="-la " OR LEFT$(Z2$(X),4)="-el " THEN ZZ$=MID$(Z2$(X),5) ELSE ZZ$=MID$(Z2$(X),2)
1410 GOSUB 2920:LPRINT ZZ$:LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),4)="los " OR LEFT$(A$(B),4)="las " THEN ZZ$=MID$(A$(B),5):GOTO 1420
1415 IF LEFT$(A$(B),3)="la " OR LEFT$(A$(B),3)="el " THEN ZZ$=MID$(A$(B),4) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,4)="los " OR MID$(Z2$(X),2,4)="las ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),6):GOTO 1510
1495 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,3)="la " OR MID$(Z2$(X),2,3)="el ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),5):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,4)="los " OR MID$(R4$(X1),2,4)="las ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),6):GOTO 1530
1515 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,3)="la " OR MID$(R4$(X1),2,3)="el ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),5):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*15)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 3:A(I)=INT(RND(1)*15)+1:NEXT:IF A(1)=A(2) OR A(1)=A(3) OR A(2)=A(3) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 3:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*15)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 6:A(I)=INT(RND(1)*15)+1:NEXT:GOSUB 2280:IF P=1 THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 4:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*12)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 4:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 4:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*5)+1:Z1(INT(P/7)+1)=X
2570 FOR B=1 TO 6:FOR Z=1 TO 5:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*7)+1:X=INT(RND(1)*6)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*6)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 5:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 6:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 5:READ Z$:NEXT:FOR I=0 TO 5:READ Z$:LOCATE 7,13*I+1:COLOR 0,7:PRINT Z$:COLOR 7,0:NEXT
2810 FOR K=0 TO 5:RESTORE 2910:FOR I=1 TO 5:READ Z$:LOCATE 8+I,13*K+2:PRINT Z$:LOCATE 8+I,13*K+10:PRINT STR$(E(I,K+1));:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA YO,TU,USTED,NOSOTROS,USTEDES,PRESENT,PRETERIT,IMPERFECT,FUTURE,CONDITIONAL,PRESENT SUB.
2910 DATA Yo,Tu,Usted,Nosotros,Ustedes,Present,Preterit,Imperfect,Future,Conditional,Present Sub.
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(160) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(130) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(161) THEN MID$(ZZ$,II,1)="i"
2950 IF MID$(ZZ$,II,1)=CHR$(162) THEN MID$(ZZ$,II,1)="o"
2960 IF MID$(ZZ$,II,1)=CHR$(163) THEN MID$(ZZ$,II,1)="u"
2962 IF MID$(ZZ$,II,1)=CHR$(164) THEN MID$(ZZ$,II,1)="n"
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 10:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:ON KEY(5) GOSUB 3092:ON KEY(6) GOSUB 3094:FOR II=7 TO 10:ON KEY(II) GOSUB 3100:NEXT
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 10:ON KEY(II) GOSUB 3100:NEXT:LOCATE 25,1:PRINT SPC(79);:RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(160);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(160):RETURN
3070 LOCATE YY,XX:PRINT CHR$(130);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(130):RETURN
3080 LOCATE YY,XX:PRINT CHR$(161);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(161):RETURN
3090 LOCATE YY,XX:PRINT CHR$(162);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(162):RETURN
3092 LOCATE YY,XX:PRINT CHR$(163);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(163):RETURN
3094 LOCATE YY,XX:PRINT CHR$(164);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(164):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

## TEACHER.BAS

{% raw %}
```bas
10 'Version 1.2---10/1/83
20 KEY OFF:CLS:SCREEN 0,0,0:WIDTH 80:LOCATE 1,1,0:FOR I=1 TO 10:KEY I,"":NEXT:DEF SEG:POKE 106,0
22 ON ERROR GOTO 25:PLAY "":ON ERROR GOTO 0:GOTO 30
25 LOCATE 10,9:PRINT">>>>>> You must load BASICA in order to use SPANISH TEACHER #2 <<<<<<":LOCATE 23:END
30 LOCATE 3,9:PRINT STRING$(64,223):FOR I=3 TO 21:LOCATE I,8:PRINT CHR$(219):LOCATE I,73:PRINT CHR$(219):NEXT:LOCATE 21,9:PRINT STRING$(64,220)
40 LOCATE 7,30:PRINT"Micro Tutor Products":LOCATE 9,36:PRINT"presents":LOCATE 11,28:PRINT"*************************":LOCATE 12,28:PRINT"* ";:COLOR 0,7:PRINT" SPANISH TEACHER  #2 ";:COLOR 7,0:PRINT" *":LOCATE 13,28:PRINT"*************************
50 LOCATE 15,34:PRINT"(c) 1982 by":LOCATE 17,27:PRINT" Cindy & Andrew Bartorillo":DEFINT A-Z:S=120:DIM Z1(S),Z2(S),Z1$(S),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100),E(5,6)
60 U1$="##":U2$="\                  \":U7$="\                                      \":L$="Line printer is not available!":S1$="Spanish to English":S2$="English to Spanish"
70 RANDOMIZE(VAL(RIGHT$(TIME$,2))):S1=0:T9=0:COLOR 0,7:LOCATE 24,20:PRINT" Hit any key when ready for program menu. ";:COLOR 7,0:GOSUB 3110
80 IF INKEY$="" THEN 80
90 CLS:T=0:Y=0:TM=15:TM$="00:00:10":COLOR 0,7:LOCATE 1,25:PRINT" SPANISH TEACHER #2--Version 1.2 ":COLOR 7,0:PRINT STRING$(79,"-"):LOCATE 4,15:PRINT"These options are available:":LOCATE 6,25:PRINT"<A> Noun Vocabulary Drill"
100 PRINT TAB(25)"<B> Verb Vocabulary Drill":PRINT TAB(25)"<C> Miscellaneous Word Vocabulary Drill":PRINT TAB(25)"<D> Random Selection Vocabulary Drill":PRINT TAB(25)"<E> Verb Conjugation Drill"
110 PRINT TAB(25)"<F> Retest Missed Vocabulary":PRINT TAB(25)"<G> Diagnostic Results":PRINT TAB(25)"<H> Print Noun Vocabulary Test":PRINT TAB(25)"<I> Print Verb Vocabulary Test":PRINT TAB(25)"<J> Print Miscellaneous Word Vocabulary Test"
120 PRINT TAB(25)"<K> Print Random Selection Vocabulary Test":PRINT TAB(25)"<L> Print Verb Conjugation Test":LOCATE 21,1:PRINT STRING$(79,"-")
130 LOCATE 23,1:PRINT SPC(70):COLOR 0,7:LOCATE 23,34:PRINT" ENTER CHOICE ":COLOR 7,0:GOSUB 3110
140 Z$=INKEY$:IF Z$="" THEN 140 ELSE IF ASC(Z$)>90 THEN Z$=CHR$(ASC(Z$)-32)
150 S=ASC(Z$)-64
155 IF S>4 THEN S=S+1
156 IF S>12 THEN S=S+1
157 IF S<1 OR S>14 THEN 140
160 IF S>8 THEN S=S-8:S$="Y":ON ERROR GOTO 3120:LPRINT:ON ERROR GOTO 0:T=1
170 IF S<7 THEN S1=S
180 IF S1=6 AND S=7 THEN 140
190 IF S=7 THEN GOSUB 1550:IF P5=0 AND P6=0 THEN 1600 ELSE 380
200 IF S<>8 THEN T9=0
210 CLS:B=0:D=0:ON S GOTO 220,220,220,220,220,220,220,1980
220 P5=0:P6=0:P8=0:P9=0:P=0:P1=0:M=0:T1=0:T2=0:IF S=6 THEN FOR I=1 TO 5:FOR H=1 TO 6:E(I,H)=0:NEXT H,I
230 ERASE Z1$,Z2$,R1$,R2$,R3$,R4$:DIM Z1$(120),Z2$(100),R1$(100),R2$(100),R3$(100),R4$(100)
240 IF S=4 THEN GOSUB 1620
250 IF S=6 THEN GOSUB 2540:TM=25:TM$="00:00:20"
260 IF S=1 THEN GOSUB 1660
270 IF S=2 THEN X$="*":GOSUB 1710
280 IF S=3 THEN X$="/":GOSUB 1710
290 IF S=5 THEN GOSUB 1760
300 CLS:IF S<>6 THEN FOR I=1 TO 120:Z1(I)=0:Z2(I)=0:NEXT
310 P8=P:P9=P:IF S=6 THEN P8=P/7:P9=P8
320 IF T=1 OR T1>0 THEN 370
330 CLS:LOCATE 12,15:PRINT"Do you want a multiple choice type quiz (Y/N/X=Escape)?":GOSUB 3110
340 S$=INKEY$:IF S$="" THEN 340 ELSE IF ASC(S$)>90 THEN S$=CHR$(ASC(S$)-32)
350 IF S$="X" THEN 90
360 IF S$<>"Y" AND S$<>"N" THEN 340
370 IF S=6 THEN 480
380 IF S=6 THEN 90 ELSE CLS:LOCATE 12,6:PRINT"Do you want ";S2$;" or ";S1$;" (E/S/X=Escape)?":GOSUB 3110
390 X$=INKEY$:IF X$="" THEN 390 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
400 IF S=5 THEN T9=1
410 IF X$="E" THEN D=2:IF P9=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S2$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
420 IF X$="E" THEN D=2:IF P3=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S2$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
430 IF X$="S" THEN D=1:IF P8=0 AND S<>7 THEN LOCATE 20,15:PRINT"You have no ";S1$;" selections available.":FOR B=1 TO 4999:NEXT:GOTO 380
440 IF X$="S" THEN D=1:IF P4=0 AND S=7 THEN LOCATE 20,11:PRINT"You have no ";S1$;" selections to be retested on.":FOR B=1 TO 4999:NEXT:GOTO 380 ELSE 480
450 IF X$="X" AND S<>7 THEN S1=S
460 IF X$="X" THEN 90
470 GOTO 390
480 CLS
490 IF S=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
500 IF S=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(24,174)
510 IF S=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(17,174)
520 IF S=4 THEN PRINT STRING$(16,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(15,174)
530 IF S=5 THEN PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(22,174)
540 IF S=6 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL OPTION ";:COLOR 7,0:PRINT" ";STRING$(23,174)
550 IF S=7 THEN PRINT STRING$(32,175);" ";:COLOR 0,7:PRINT" RETEST OPTION ";:COLOR 7,0:PRINT" ";STRING$(31,174)
560 LOCATE 3,1:PRINT STRING$(80,"-"):LOCATE 17,1:PRINT STRING$(80,"-")
570 IF T=1 THEN 600
580 IF S<>7 THEN LOCATE 16,4:PRINT"Total quizzed ="T1:LOCATE 16,25:PRINT"Total correct ="T2:LOCATE 16,46:PRINT"Correct answer percentage = ";:IF P1=100 THEN PRINT "100%" ELSE PRINT USING U1$;P1;:PRINT"%"
590 '
600 IF S=6 THEN 2600
610 FOR I=1 TO 4:A$(I)="":NEXT
620 X=INT(RND(1)*P)+1:K=INT(RND(1)*4)+1:IF S=7 AND D=1 THEN X1=INT(RND(1)*P6)+1 ELSE IF S=7 AND D=2 THEN X1=INT(RND(1)*P5)+1
630 LOCATE 2,2:PRINT"*":FOR DE=1 TO 199:NEXT:LOCATE 2,2:PRINT" "
640 BR$=INKEY$:IF BR$="" THEN 650 ELSE IF BR$="x" OR BR$="X" THEN 380
650 IF S=7 THEN 1800
660 IF (D=2 AND Z1(X)<>0) OR (D=1 AND Z2(X)<>0) THEN 620
670 IF D=1 THEN A$(K)=Z1$(X) ELSE A$(K)=MID$(Z2$(X),2)
680 IF S$="N" THEN 740
690 IF K=1 THEN I=2:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
700 IF K=2 THEN I=1:GOSUB 1220:I=3:GOSUB 1220:I=4:GOSUB 1220
710 IF K=3 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=4:GOSUB 1220
720 IF K=4 THEN I=1:GOSUB 1220:I=2:GOSUB 1220:I=3:GOSUB 1220
730 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 620
740 GOSUB 1480
750 IF D=2 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;Z1$(X) ELSE IF D=1 AND S=5 THEN LOCATE 5,20:PRINT USING U7$;MID$(Z2$(X),2)
760 IF D=2 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;R1$(X1) ELSE IF D=1 AND S=7 AND T9=1 THEN LOCATE 5,20:PRINT USING U7$;MID$(R4$(X1),2)
770 IF S=4 AND D=2 THEN GOSUB 1460 ELSE IF S=7 AND D=2 AND T9<>1 THEN GOSUB 1830
780 IF S$="N" THEN 840 ELSE FOR N=1 TO 4:LOCATE 5+N*2,29:PRINT"<";MID$(STR$(N),2);"> ";
790 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),4)="los " OR LEFT$(A$(N),4)="las ") THEN PRINT USING U2$;MID$(A$(N),5):GOTO 800
795 IF (T9<>1 OR (S<>5 AND S<>7)) AND (LEFT$(A$(N),3)="la " OR LEFT$(A$(N),3)="el ") THEN PRINT USING U2$;MID$(A$(N),4) ELSE IF (S<>5 AND S<>7) OR T9<>1 OR S=6 THEN PRINT USING U2$;A$(N)
800 IF S=5 OR T9=1 THEN PRINT USING U7$;A$(N)
810 NEXT
820 IF T=1 THEN 1240
830 FOR N=1 TO 4:C$(N)=A$(N):NEXT
840 GOSUB 3110:GOSUB 3140:IF (S$="N" AND D=2) OR (S$="N" AND S=6) THEN LOCATE 25,1:PRINT"F1="CHR$(160)"   F2="CHR$(130)"   F3="CHR$(161)"   F4="CHR$(162)"   F5="CHR$(163)"   F6="CHR$(164);
850 IF S$="N" THEN GOSUB 2980:C$(C)=ANSWER$:IF C$(C)="x" OR C$(C)="X" THEN 380 ELSE 950
860 C=0:LOCATE 19,25:PRINT"Enter your choice (1-4/X=Escape)";
870 TIME$="00:00:00"
880 C$=INKEY$:IF TM-VAL(RIGHT$(TIME$,2))<0 THEN TIME$=TM$
885 DEFSEG=&H40:POKE &H17,160
890 LOCATE 18,64:PRINT USING U1$;TM-VAL(RIGHT$(TIME$,2));:PRINT" seconds left"
900 IF RIGHT$(TIME$,2)=MID$(STR$(TM),2) THEN LOCATE 18,64:COLOR 23,0:PRINT"TIME EXPIRED   ":COLOR 7,0:GOTO 950
910 IF C$<>"" THEN 930
920 GOTO 880
930 IF C$="x" OR C$="X" THEN 380
940 IF C$<"1" OR C$>"4" THEN 880 ELSE LOCATE 19,58:PRINT C$:C=VAL(C$)
950 IF S=7 THEN 1850
960 T1=T1+1:COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER ":T2=T2+1 ELSE LOCATE 22,INT((80-LEN(A$(K))-38)/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
970 COLOR 7,0:P1=(T2/T1)*100
980 LOCATE 16,19:PRINT T1:LOCATE 16,40:PRINT T2:IF P1=100 THEN LOCATE 16,74:PRINT"100":GOTO 1000
990 LOCATE 16,74:PRINT USING U1$;P1;:PRINT "% "
1000 IF D=2 AND C$(C)<>A$(K) THEN Z1(X)=2
1010 IF D=2 AND C$(C)=A$(K) THEN Z1(X)=1
1020 IF D=1 AND C$(C)<>A$(K) THEN Z2(X)=2
1030 IF D=1 AND C$(C)=A$(K) THEN Z2(X)=1
1040 IF S=6 AND C$(C)<>A$(K) THEN E(Z1(M),X1)=E(Z1(M),X1)+1
1050 IF S<>7 AND D=2 THEN P9=P9-1 ELSE IF S<>7 THEN P8=P8-1
1060 GOSUB 3140
1070 IF S=6 THEN 1140 ELSE IF P8=0 AND P9=0 THEN 2750
1080 IF D=1 AND P8=0 THEN 1120
1090 IF D=2 AND P9=0 THEN 1100 ELSE 1140
1100 LOCATE 24,10:PRINT"You have been quizzed with all ";S2$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S1$;" option.";
1110 IF INKEY$="" THEN 1110 ELSE D=1:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1120 LOCATE 24,10:PRINT"You have been quizzed with all ";S1$;" selections.";:LOCATE 25,17:PRINT"Hit any key to select ";S2$;" option.";
1130 IF INKEY$="" THEN 1130 ELSE D=2:LOCATE 24,9:PRINT SPC(63);:LOCATE 25,17:PRINT SPC(48);:GOTO 1170
1140 IF S=6 THEN Z1(M)=0:IF P8=0 THEN 2750
1150 LOCATE 25,20:PRINT"Hit any key for another selection (X=Escape)";:GOSUB 3110
1160 Z$=INKEY$:IF Z$="" THEN 1160 ELSE IF Z$="x" OR Z$="X" THEN 380
1170 LOCATE 18,64:PRINT SPC(16):LOCATE 19,1:PRINT SPC(79):LOCATE 22,1:PRINT SPC(79):LOCATE 25,20:PRINT SPC(45)
1180 IF S=6 THEN LOCATE 5,15:PRINT STRING$(20,178):LOCATE 5,40:PRINT STRING$(8,178):LOCATE 5,60:PRINT STRING$(12,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1190 IF S=5 OR (S=7 AND T9=1) THEN LOCATE 5,20:PRINT STRING$(35,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(35,178):NEXT
1200 IF S<5 OR S1<5 THEN LOCATE 5,20:PRINT STRING$(20,178):IF S$="Y" THEN FOR II=1 TO 4:LOCATE 5+II*2,33:PRINT STRING$(20,178):NEXT
1210 IF S=6 THEN 2600 ELSE 610
1220 N=INT(RND(1)*P)+1:IF D=2 THEN A$(I)=MID$(Z2$(N),2) ELSE A$(I)=Z1$(N)
1230 RETURN
1240 LOCATE 20,30:PRINT"Hit <P> to print selection,":PRINT TAB(34)"<N> for new selection, or":PRINT TAB(34)"<X> to exit.":GOSUB 3110
1250 ZZ$=INKEY$:IF ZZ$="" THEN 1250
1260 IF ZZ$="p" OR ZZ$="P" THEN GOSUB 1310:GOTO 1300
1270 IF ZZ$="n" OR ZZ$="N" THEN 1300
1280 IF ZZ$="x" OR ZZ$="X" THEN 380
1290 GOTO 1250
1300 LOCATE 20,30:PRINT SPC(27):LOCATE 21,34:PRINT SPC(25):LOCATE 22,34:PRINT SPC(12):GOTO 1170
1310 Y=Y+1:IF Y>1 THEN 1380
1320 IF S=1 THEN LPRINT STRING$(26,"*");" Noun Vocabulary Drill Test ";STRING$(26,"*")
1330 IF S=2 THEN LPRINT STRING$(26,"*");" Verb Vocabulary Drill Test ";STRING$(26,"*")
1340 IF S=3 THEN LPRINT STRING$(19,"*");" Miscellaneous Word Vocabulary Drill Test ";STRING$(19,"*")
1350 IF S=4 THEN LPRINT STRING$(17,"*");" Random Selection Word Vocabulary Drill Test ";STRING$(18,"*")
1360 IF S=5 THEN LPRINT STRING$(25,"*");" Phrase Translation Drill Test ";STRING$(24,"*")
1370 IF S=6 THEN LPRINT STRING$(26,"*");" Verb Conjugation Drill Test ";STRING$(25,"*")
1380 LPRINT:IF S=5 THEN 1430 ELSE IF S=6 THEN 1450
1390 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X):GOTO 1410
1400 IF LEFT$(Z2$(X),5)="-los " OR LEFT$(Z2$(X),5)="-las " THEN ZZ$=MID$(Z2$(X),6):GOTO 1410
1405 IF LEFT$(Z2$(X),4)="-la " OR LEFT$(Z2$(X),4)="-el " THEN ZZ$=MID$(Z2$(X),5) ELSE ZZ$=MID$(Z2$(X),2)
1410 GOSUB 2920:LPRINT ZZ$:LPRINT TAB(4);:FOR B=1 TO 4:IF LEFT$(A$(B),4)="los " OR LEFT$(A$(B),4)="las " THEN ZZ$=MID$(A$(B),5):GOTO 1420
1415 IF LEFT$(A$(B),3)="la " OR LEFT$(A$(B),3)="el " THEN ZZ$=MID$(A$(B),4) ELSE ZZ$=A$(B)
1420 GOSUB 2920:LPRINT "  ";CHR$(96+B);". ";ZZ$;:NEXT:LPRINT:LPRINT:RETURN
1430 LPRINT STR$(Y);". ";:IF D=2 THEN ZZ$=Z1$(X) ELSE ZZ$=MID$(Z2$(X),2)
1440 GOSUB 2920:LPRINT ZZ$:FOR B=1 TO 4:LPRINT TAB(10) CHR$(96+B);". ";:ZZ$=A$(B):GOSUB 2920:LPRINT ZZ$:NEXT:LPRINT:RETURN
1450 LPRINT STR$(Y);". ";Z1$(P);TAB(25)BR$;TAB(40)X$:LPRINT TAB(4);:FOR B=1 TO 4:LPRINT "  ";CHR$(96+B);". ";A$(B);:NEXT:LPRINT:LPRINT:RETURN
1460 LOCATE 5,70:COLOR 0,7:IF LEFT$(Z2$(X),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(Z2$(X),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1470 COLOR 7,0:RETURN
1480 IF D=2 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;Z1$(X)
1490 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,4)="los " OR MID$(Z2$(X),2,4)="las ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),6):GOTO 1510
1495 IF D=1 AND S<>5 AND S<>7 AND (MID$(Z2$(X),2,3)="la " OR MID$(Z2$(X),2,3)="el ") THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),5):GOTO 1510
1500 IF D=1 AND S<>5 AND S<>7 THEN LOCATE 5,20:PRINT USING U2$;MID$(Z2$(X),2)
1510 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,4)="los " OR MID$(R4$(X1),2,4)="las ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),6):GOTO 1530
1515 IF D=1 AND T9<>1 AND S=7 AND (MID$(R4$(X1),2,3)="la " OR MID$(R4$(X1),2,3)="el ") THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),5):GOTO 1530
1520 IF D=1 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;MID$(R4$(X1),2)
1530 IF D=2 AND T9<>1 AND S=7 THEN LOCATE 5,20:PRINT USING U2$;R1$(X1)
1540 RETURN
1550 LOCATE 23,34:PRINT SPC(14):P3=0:P4=0:P5=0:P6=0
1560 FOR N=1 TO P
1570 IF Z1(N)=2 THEN P5=P5+1:R2$(P5)=Z2$(N):R1$(P5)=Z1$(N)
1580 IF Z2(N)=2 THEN P6=P6+1:R3$(P6)=Z1$(N):R4$(P6)=Z2$(N)
1590 NEXT:P3=P5:P4=P6:RETURN
1600 LOCATE 23,21:PRINT"There is no record of any wrong answers.":FOR N=1 TO 5999:NEXT:GOTO 130
1610 COLOR 0,7:LOCATE 12,33:PRINT" Inputting data ":COLOR 7,0:RETURN
1620 FOR I=1 TO 2:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) THEN 1620 ELSE GOSUB 1610
1630 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1640 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1650 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1640
1660 FOR I=1 TO 2:A(I)=INT(RND(1)*16)+1:NEXT:IF A(1)=A(2) OR A(1)=A(3) OR A(2)=A(3) THEN 1660 ELSE GOSUB 1610
1670 FOR I=1 TO 2:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1680 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1690 GOSUB 2890:IF LEFT$(X2$,1)="-" THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1700 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1680
1710 FOR I=1 TO 6:A(I)=INT(RND(1)*16)+1:NEXT:GOSUB 2280:IF P=1 THEN 1710 ELSE GOSUB 1610
1720 FOR I=1 TO 6:OPEN "I",1,"VOCAB"+MID$(STR$(A(I)),2)+".DAT"
1730 INPUT #1,X1$,X2$:LOCATE 14,39:PRINT P
1740 GOSUB 2890:IF LEFT$(X2$,1)=X$ THEN P=P+1:Z1$(P)=X1$:Z2$(P)=X2$
1750 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE GOTO 1730
1760 FOR I=1 TO 6:A(I)=INT(RND(1)*15)+1:NEXT:GOSUB 2280:IF P=1 THEN 1760 ELSE GOSUB 1610
1770 FOR N=1 TO 4:OPEN "I",1,"PHRASE"+MID$(STR$(A(N)),2)+".DAT"
1780 P=P+1:INPUT #1,Z1$(P),Z2$(P):GOSUB 2890
1790 IF EOF(1) THEN CLOSE:NEXT:RETURN ELSE LOCATE 14,39:PRINT P:GOTO 1780
1800 IF (D=2 AND R1$(X1)="") OR (D=1 AND R4$(X1)="") THEN 620
1810 IF D=1 THEN A$(K)=R3$(X1) ELSE A$(K)=MID$(R2$(X1),2)
1820 GOTO 680
1830 LOCATE 5,70:COLOR 0,7:IF LEFT$(R2$(X1),1)="-" THEN PRINT" NOUN " ELSE IF LEFT$(R2$(X1),1)="*" THEN PRINT" VERB " ELSE PRINT" MISC "
1840 COLOR 7,0:RETURN
1850 COLOR 0,7:IF C$(C)=A$(K) THEN LOCATE 22,33:PRINT" CORRECT ANSWER " ELSE LOCATE 22,INT((48-LEN(A$(K)))/2):PRINT" INCORRECT ANSWER-CORRECT ANSWER IS: ";A$(K);" "
1860 COLOR 7,0:IF D=1 THEN GOSUB 1930 ELSE GOSUB 1950
1870 IF D=1 THEN R4$(X1)="":P4=P4-1 ELSE R1$(X1)="":P3=P3-1
1880 GOSUB 3140:IF P3>0 OR P4>0 THEN 1900
1890 IF P3=0 AND P4=0 THEN 2760
1900 IF D=2 AND P3=0 THEN 1100
1910 IF D=1 AND P4=0 THEN 1120
1920 GOTO 1140
1930 FOR B=1 TO P:IF Z2$(B)=R4$(X1) AND C$(C)=A$(K) THEN Z2(B)=4 ELSE IF Z2$(B)=R4$(X1) AND C$(C)<>A$(K) THEN Z2(B)=3:RETURN
1940 NEXT
1950 FOR B=1 TO P:IF Z1$(B)=R1$(X1) AND C$(C)=A$(K) THEN Z1(B)=4 ELSE IF Z1$(B)=R1$(X1) AND C$(C)<>A$(K) THEN Z1(B)=3:RETURN
1960 NEXT
1970 RETURN
1980 CLS:PR$="":IF S1=1 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" NOUN VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
1990 IF S1=2 THEN PRINT STRING$(24,175);" ";:COLOR 0,7:PRINT" VERB VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174)
2000 IF S1=3 THEN PRINT STRING$(17,175);" ";:COLOR 0,7:PRINT" MISCELLANEOUS WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(16,174)
2010 IF S1=4 THEN PRINT STRING$(15,175);" ";:COLOR 0,7:PRINT" RANDOM SELECTION WORD VOCABULARY DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(15,174)
2020 IF S1=5 THEN PRINT STRING$(22,175);" ";:COLOR 0,7:PRINT" PHRASE TRANSLATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(22,174)
2030 IF S1=6 THEN 2790
2040 PRINT STRING$(80,"-"):PRINT
2050 IF P8<>0 OR P9<>0 THEN GOSUB 2200
2060 IF P3<>0 OR P4<>0 THEN GOSUB 2240
2070 PRINT"Press one of the following keys:":PRINT
2080 IF P3>0 OR P4>0 THEN PRINT TAB(20)"<R>esume Retesting"
2090 IF P8>0 OR P9>0 THEN PRINT TAB(20)"<G>o Back To Original Option"
2100 PRINT TAB(20)"<D>isplay Test Results"
2110 PRINT TAB(20)"<P>rint Test Results"
2120 PRINT TAB(20)"<C>hoose New Option":GOSUB 3110
2130 X$=INKEY$:IF X$="" THEN 2130 ELSE IF ASC(X$)>90 THEN X$=CHR$(ASC(X$)-32)
2140 IF X$="D" THEN GOSUB 2300:GOTO 1980
2150 IF X$="P" THEN PR$="Y":ON ERROR GOTO 3170:LPRINT:ON ERROR GOTO 0:GOSUB 2300:GOTO 1980
2160 IF X$="R" AND (P3>0 OR P4>0) THEN S=7:CLS:GOTO 190
2170 IF X$="G" AND (P8>0 OR P9>0) THEN S=S1:GOTO 380
2180 IF X$="C" THEN 90
2190 GOTO 2130
2200 PRINT"The following are still left in your original option selection:"
2210 IF P9>0 THEN PRINT TAB(20)P9;S2$" selections
2220 IF P8>0 THEN PRINT TAB(20)P8;S1$" selections
2230 PRINT STRING$(80,"-"):RETURN
2240 PRINT"You still have the following remaining for retesting:
2250 IF P3>0 THEN PRINT TAB(20)P3;S2$" selections
2260 IF P4>0 THEN PRINT TAB(20)P4;S1$" selections
2270 PRINT STRING$(80,"-"):RETURN
2280 P=0:IF A(1)=A(2) OR A(1)=A(3) OR A(1)=A(4) OR A(1)=A(5) OR A(1)=A(6) OR A(2)=A(3) OR A(2)=A(4) OR A(2)=A(5) OR A(2)=A(6) OR A(3)=A(4) OR A(3)=A(5) OR A(3)=A(6) OR A(4)=A(5) OR A(4)=A(6) OR A(5)=A(6) THEN P=1
2290 RETURN
2300 IF P=0 THEN RETURN ELSE CLS:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2310 IF P1<>100 THEN 2320 ELSE LOCATE 15,16:COLOR 0,7:PRINT" Congratulations!! You received a perfect score. ";:GOSUB 2850:RETURN
2320 Q=0:Q9$=U2$:IF S1=5 THEN Q9$=U7$
2330 IF PR$<>"Y" THEN 2360 ELSE IF S1<5 THEN LPRINT TAB(28)"VOCABULARY DRILL RESULTS":LPRINT
2340 IF S1=5 THEN LPRINT TAB(24)"PHRASE TRANSLATION DRILL RESULTS":LPRINT
2350 LPRINT"The following were missed during regular option testing:":LPRINT
2360 FOR I=1 TO P:IF Z1(I)>1 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2370 IF PR$="Y" AND Z1(I)>1 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2380 IF Z2(I)>1 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2390 IF PR$="Y" AND Z2(I)>1 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):LPRINT USING Q9$;ZZ$;
2400 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,13:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING REGULAR OPTION TESTING ":COLOR 7,0
2410 NEXT:LOCATE 24,1:PRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%";:IF INT(Q/2)<>Q/2 AND PR$="Y" THEN LPRINT
2420 IF PR$="Y" THEN LPRINT:LPRINT"Amount quizzed ="T1"  Amount correct ="T2"  Final percentage correct ="STR$(P1)"%"
2430 GOSUB 2850:CLS:IF (P5=0 AND P6=0) OR (P3=P5 AND P4=P6) THEN RETURN
2440 LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0:Q=0
2450 IF PR$="Y" THEN LPRINT:LPRINT:LPRINT"The following were missed during restesting:":LPRINT
2460 FOR I=1 TO P:IF Z1(I)=3 THEN PRINT USING Q9$;Z1$(I);MID$(Z2$(I),2);:Q=Q+1:IF S1=5 THEN Q=Q+1
2470 IF PR$="Y" AND Z1(I)=3 THEN ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2480 IF Z2(I)=3 THEN PRINT USING Q9$;MID$(Z2$(I),2);Z1$(I);:Q=Q+1:IF S1=5 THEN Q=Q+1
2490 IF PR$="Y" AND Z2(I)=3 THEN ZZ$=MID$(Z2$(I),2):GOSUB 2920:LPRINT USING Q9$;ZZ$;:ZZ$=Z1$(I):GOSUB 2920:LPRINT USING Q9$;ZZ$;
2500 IF Q=44 THEN GOSUB 2850:CLS:Q=0:LOCATE 1,19:COLOR 0,7:PRINT" THE FOLLOWING WERE MISSED DURING RETESTING ":COLOR 7,0
2510 NEXT:IF PR$="Y" THEN LPRINT
2520 IF Q=0 THEN LOCATE 15,2:COLOR 0,7:PRINT" Congratulations!! You correctly answered all selections when being retested. ":COLOR 7,0
2530 GOSUB 2850:RETURN
2540 FOR I=1 TO 6:A(I)=INT(RND(1)*17)+1:NEXT:GOSUB 2280:IF P=1 THEN 2540 ELSE GOSUB 1610
2550 FOR I=1 TO 4:OPEN "I",1,"VERB"+MID$(STR$(A(I)),2)+".DAT"
2560 FOR K=1 TO 4:INPUT #1,X$:P=P+1:Z1$(P)=X$:X=INT(RND(1)*5)+1:Z1(INT(P/7)+1)=X
2570 FOR B=1 TO 6:FOR Z=1 TO 5:INPUT #1,X$:GOSUB 2890
2580 IF Z=X THEN P=P+1:Z1$(P)=X$:LOCATE 14,39:PRINT P
2590 NEXT Z:NEXT B:NEXT K:CLOSE:NEXT I:RETURN
2600 M=INT(RND(1)*P9)+1:IF Z1(M)=0 THEN 2600 ELSE P=((M-1)*7)+1:X=INT(RND(1)*6)+1:X1=X:X=P+X
2610 LOCATE 2,3:PRINT"*":FOR DE=1 TO 150:NEXT:LOCATE 2,3:PRINT" "
2620 BR$=INKEY$:IF BR$="" THEN 2630 ELSE IF BR$="x" OR BR$="X" THEN 90
2630 FOR N=1 TO 4:Z=INT(RND(1)*6)+1:A$(N)=Z1$(P+Z):NEXT
2640 IF A$(1)=A$(2) OR A$(1)=A$(3) OR A$(1)=A$(4) OR A$(2)=A$(3) OR A$(2)=A$(4) OR A$(3)=A$(4) THEN 2600
2650 FLAG=0:FOR K=1 TO 4
2660 IF Z1$(X)=A$(K) THEN FLAG=1:KK=K:K=4
2670 NEXT:IF FLAG=0 THEN 2610
2680 K=KK:LOCATE 5,15:PRINT USING U2$;Z1$(P)
2690 RESTORE 2900:FOR N=1 TO 5:READ Z$
2700 IF N=Z1(M) THEN LOCATE 5,40:PRINT USING U2$;Z$:BR$=Z$
2710 NEXT
2720 FOR N=1 TO 6:READ Z$
2730 IF N=X1 THEN LOCATE 5,60:PRINT USING U2$;Z$:X$=Z$
2740 NEXT:GOTO 780
2750 IF S=6 THEN LOCATE 24,9:PRINT"You have been quizzed on all available verb conjugation forms.";:LOCATE 25,8:PRINT"Press 'M' to load more selections or any other key for the menu.";
2760 IF S<>6 THEN LOCATE 24,3:PRINT"You have been quizzed with all available combinations. Hit any key for menu.";
2770 Z$=INKEY$:IF Z$="" THEN 2770
2780 IF S=6 AND (Z$="m" OR Z$="M") THEN CLS:P=0:GOTO 230 ELSE 90
2790 PRINT STRING$(23,175);" ";:COLOR 0,7:PRINT" VERB CONJUGATION DRILL RESULTS ";:COLOR 7,0:PRINT" ";STRING$(23,174):LOCATE 4,18:PRINT"The following conjugation forms were missed:"
2800 RESTORE 2910:FOR I=1 TO 5:READ Z$:NEXT:FOR I=0 TO 5:READ Z$:LOCATE 7,13*I+1:COLOR 0,7:PRINT Z$:COLOR 7,0:NEXT
2810 FOR K=0 TO 5:RESTORE 2910:FOR I=1 TO 5:READ Z$:LOCATE 8+I,13*K+2:PRINT Z$:LOCATE 8+I,13*K+10:PRINT STR$(E(I,K+1));:IF E(I,K+1)>3 THEN COLOR 23,0:PRINT"*":COLOR 7,0
2820 NEXT I,K:LOCATE 20,1:PRINT"Total quizzed =";T1;"   Total correct =";T2;"   Correct answer percentage =";STR$(P1);"%"
2830 LOCATE 25,23:COLOR 0,7:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2840 IF INKEY$="" THEN 2840 ELSE 90
2850 LOCATE 25,28:COLOR 0,7:PRINT" Hit any key to continue ";:COLOR 7,0:GOSUB 3110
2860 IF INKEY$="" THEN 2860 ELSE RETURN
2870 COLOR 0,7:LOCATE 24,23:PRINT" Hit any key to return to the menu ";:COLOR 7,0:GOSUB 3110
2880 IF INKEY$="" THEN 2880 ELSE 90
2890 BR$=INKEY$:IF BR$="" THEN RETURN ELSE IF BR$="x" OR BR$="X" THEN CLOSE:GOTO 90 ELSE RETURN
2900 DATA YO,TU,USTED,NOSOTROS,USTEDES,PRESENT,PRETERIT,IMPERFECT,FUTURE,CONDITIONAL,PRESENT SUB.
2910 DATA Yo,Tu,Usted,Nosotros,Ustedes,Present,Preterit,Imperfect,Future,Conditional,Present Sub.
2920 FOR II=1 TO LEN(ZZ$):IF MID$(ZZ$,II,1)=CHR$(160) THEN MID$(ZZ$,II,1)="a"
2930 IF MID$(ZZ$,II,1)=CHR$(130) THEN MID$(ZZ$,II,1)="e"
2940 IF MID$(ZZ$,II,1)=CHR$(161) THEN MID$(ZZ$,II,1)="i"
2950 IF MID$(ZZ$,II,1)=CHR$(162) THEN MID$(ZZ$,II,1)="o"
2960 IF MID$(ZZ$,II,1)=CHR$(163) THEN MID$(ZZ$,II,1)="u"
2962 IF MID$(ZZ$,II,1)=CHR$(164) THEN MID$(ZZ$,II,1)="n"
2970 NEXT:RETURN
2980 IF D=1 THEN 3000 ELSE FOR XX=1 TO 10:KEY(XX) ON:NEXT
2990 ON KEY(1) GOSUB 3060:ON KEY(2) GOSUB 3070:ON KEY(3) GOSUB 3080:ON KEY(4) GOSUB 3090:ON KEY(5) GOSUB 3092:ON KEY(6) GOSUB 3094:FOR II=7 TO 10:ON KEY(II) GOSUB 3100:NEXT
3000 LOCATE 19,10:YY=19:XX=40:PRINT"Enter your answer (X=Escape): _":ANSWER$=""
3010 A$=INKEY$:IF A$="" THEN 3010
3020 IF ASC(A$)=13 THEN FOR II=1 TO 10:ON KEY(II) GOSUB 3100:KEY(II) OFF:NEXT:LOCATE 25,1:PRINT SPC(79);:RETURN
3030 IF ASC(A$)=8 THEN IF LEN(ANSWER$)=0 THEN 3010 ELSE LOCATE YY,XX:PRINT" ":XX=XX-1:LOCATE YY,XX:PRINT"_":ANSWER$=LEFT$(ANSWER$,LEN(ANSWER$)-1):GOTO 3010
3040 LOCATE YY,XX:PRINT A$;:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+A$
3050 GOTO 3010
3060 LOCATE YY,XX:PRINT CHR$(160);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(160):RETURN
3070 LOCATE YY,XX:PRINT CHR$(130);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(130):RETURN
3080 LOCATE YY,XX:PRINT CHR$(161);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(161):RETURN
3090 LOCATE YY,XX:PRINT CHR$(162);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(162):RETURN
3092 LOCATE YY,XX:PRINT CHR$(163);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(163):RETURN
3094 LOCATE YY,XX:PRINT CHR$(164);:YY=CSRLIN:XX=POS(0):PRINT"_";:ANSWER$=ANSWER$+CHR$(164):RETURN
3100 LOCATE YY,XX:PRINT"";:YY=CSRLIN:XX=POS(0):PRINT"_";:RETURN
3110 XXX$=INKEY$:IF XXX$<>"" THEN 3110 ELSE RETURN
3120 RESUME 3130
3130 LOCATE 23,26:COLOR 23:PRINT L$:COLOR 7:FOR DE=1 TO 5999:NEXT:ON ERROR GOTO 0:GOTO 130
3140 LOCATE 18,1:IF (S<>6 AND D=1 AND S<>7) OR S=6 THEN XX=P8 ELSE IF S<>6 AND D=2 AND S<>7 THEN XX=P9 ELSE IF S=7 AND D=1 THEN XX=P4 ELSE IF S=7 AND D=2 THEN XX=P3
3150 IF XX=1 THEN PRINT" 1 selection remains" ELSE PRINT XX"selections remain "
3160 RETURN
3170 RESUME 3180
3180 LOCATE 25,26:COLOR 23:PRINT L$;:COLOR 7:FOR DE=1 TO 5999:NEXT:LOCATE 25,26:PRINT SPC(50);:ON ERROR GOTO 0:PR$="":GOTO 2130
```
{% endraw %}

## TEACHER.TXT

{% raw %}
```
                                LANGUAGE TEACHER

                              by Andrew Bartorillo
                      Distributed by Micro Tutor Products
                         103 Baughmans Lane, Suite 303
                              Frederick, Md. 21701
                  Copyright 1982-Released to the Public Domain

     LANGUAGE TEACHER is a series of menu-driven language tutorial programs 
designed to be run on the IBM PC/XT/AT/jr or any compatible clone. Each program 
in the series contains hundreds of word combinations and verb conjugation 
forms. A line printer can be used with LANGUAGE TEACHER to take advantage of 
its versatility.
     Also included is the capability to select language-to-English or English-
to-language combinations, choose multiple choice answers, be retested on 
misses, print a multiple choice test, and to run a full quiz diagnostic routine 
with line printer output. Of particular interest to non-English students is the 
capability to select the direction of the combinations.
     All word, phrase, and verb conjugation selections are done randomly by the 
program the the user being unable to predict what the next selection will be. 
The program package is not designed to teach conversational language or 
pronunciation but, instead, to provide practice drills in order to increase 
your working vocabulary and to enhance your use of the conjugation forms.

     The LANGUAGE TEACHER series was originally published by Acorn Software 
Products, Inc. of Washington, DC. Since then the company has gone out of 
business and the author is releasing the series to the Public Domain. If you 
find any of the programs in the series to be usefull, a suitable payment ($5 to 
$10) would be appreciated so more programs of this quality can be developed.  

PROGRAM SPECIFICATIONS:

     Minimum system configuration: LANGUAGE TEACHER is written in Microsoft 
Basic and requires a minimum of 64K bytes of RAM and Advanced Basic, one disk 
drive and a suitable high resolution monitor. Preferred monitors are the IBM 
Monochrome Display attached to the IBM Monochrome Display and Printer Adapter 
or a green screen or "direct drive" RGB monitor attached to the Color/Graphics 
Monitor Adapter. In most cases, only a high quality color monitor or green 
screen will provide the resolution necessary to display the special chaaracters 
used with LANGUAGE TEACHER. All other program functions will be suitable, 
though, if a low quality color composite monitor is used.
     Optional equipment includes an 80 column line printer.

LOADING INSTRUCTIONS:

     Power up your system with a DOS diskette containing BASICA in disk drive 
"A". Load BASICA into memory and remove your DOS diskette from the disk drive. 
Insert your copy of LANGUAGE TEACHER into disk drive "A", type RUN'TEACHER" and 
press the Enter key.
     NOTE: Due to the large amount of string space used, your computer will 
occasionally seem to "hang up" or "go to sleep". This is due to Microsoft's 
Basic string manipulation (better known as "garbage collection") and is not a 
machine or program malfunction. The time rarely exceeds 8-10 seconds. The 
occurrence of this phenomenon decreases in systems having more than 64K RAM.

SPECIAL CHARACTER SET:

     LANGUAGE TEACHER utilizes the special function keys to input the special 
characters used in the language. These keys are active only when a non-multiple 
choice drill is selected in which you must enter the direct equivalent of the 
required answer. The 25th line of the screen will display which function key is 
associated with which foreign character.
     NOTE: Due to the inability of the average line printer to be able to 
recognize these special characters, programming is implemented to convert these 
special characters to their "normal" letters before being output to the line 
printer. Once you have obtained your printout, insert the special marks by 
hand.

MISCELLANEOUS:

     If a multiple choice type quiz has been selected, you will only be given 
15 seconds (25 seconds for verb conjugation) to input your answer. If the time 
expires before you make your choice, you will be credited with an incorrect 
answer. NOTE: If the computer performs its "garbage collection" routine while 
timing is in progress, program coding is implemented to prevent your time 
remaining from falling to zero.
     If you have not chosen a multiple choice type of quiz, you will have to 
type in the exact answer. In the case of being quizzed with a noun, you must 
also type in the definite article ("the") that proceeds the noun.
     If your original option was the verb conjugation drill, no retesting can 
be performed. Also, the diagnostic display will let you know how many of each 
person and tense you missed. If you missed more than 3 of any person/tense, an 
"*" is displayed beside the applicable person/tense, indicating you need more 
practice.

ADDITIONAL NOTES:

     The extent of the vocabulary of each program is given below. Since the 
program randomly selects from its contents in each option, you truly have a 
thorough drill in each language!
     SPANISH I: 750 Spanish/English word combinations, 1488 verb conjugations 
and 150 Spanish/English phrase combinations.
     SPANISH II: 800 Spanish/English word combinations and 2108 verb 
conjugation forms.
     FRENCH I: 784 French/English word combinations, 1600 verb conjugations 
and 196 French/English phrase combinations.
     FRENCH II: 864 French/English word combinations and 1600 verb 
conjugation forms.
     GERMAN I: 800 German/English word combinations, 1860 verb conjugations 
and 160 German/English phrase combinations.
     GERMAN II: 800 German/English word combinations and 2015 verb 
conjugation forms.
     ITALIAN: 816 Italian/English word combinations, 1500 verb conjugations 
and 114 Italian/English phrase combinations.


We hope that you have many enjoyable and informative hours working with your 
LANGUAGE TEACHER program. If you have any suggestions or problems with using 
LANGUAGE TEACHER, feel free to correspond with the author using the address 
listed below. Please make your comments as specific as possible and enclose a 
self-addressed stamped envelope:

                          Andrew P. Bartorillo
                          c/o Micro Tutor Products
                          103 Baughmans Lane, Suite 303
                          Frederick, MD 21701

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0612

     Volume in drive A has no label
     Directory of A:\

    ARC      EXE     32256   2-21-86   2:42a
    FILES612 TXT       964  10-16-86   2:28a
    FRENCH1  ARC     42496  12-29-85   3:34p
    FRENCH2  ARC     37888   2-21-86  12:36a
    GERMAN1  ARC     45056   2-22-86   7:33p
    GERMAN2  ARC     41984   2-22-86   7:38p
    GO       BAT       610  10-09-86   2:20p
    HEBREW   EXE     27008  10-25-85  11:10a
    ITALIAN  ARC     40192   2-21-86  12:44a
    LANGUAGE TXT      7078  10-09-86   2:23p
    SPANISH1 ARC     40192   2-21-86  12:56a
    SPANISH2 ARC     38912   2-22-86   7:43p
           12 file(s)     354636 bytes
                            4096 bytes free
