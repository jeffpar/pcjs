---
layout: page
title: "PC-SIG Diskette Library (Disk #2671)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2671/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2671"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ANCOV.BAS

```bas
1 '  ANCOVA & COMPARING REGRESSION LINES -- ANCOV.BAS -- by Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 10,177,405,449:STOP  '=start,printout,etc - CLOSE (exc 177)◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
43 COLOR 23,0:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
49 '◙--- Vetted Decoding of FF X(I,J) from X$ ---◙    Needs I, M, Q(0) from #96 or #256.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙*** K/b Input of all X(I,J) in FF ***◙    Needs first I, M, MXR.  Returns N.
70 'PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 'PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT>0 THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-all-data' by entering a `/'.":PRINT
73 PRINT "Row"STR$(I);:INPUT X$:IF X$="" THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 THEN IF ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 '
92 '
93 IF NEEDVARS=2 THEN PRINT"This test analyses only 2 column variables.":ND=M-2
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" THEN STOP:END
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" ---
130 IF IO$="I" THEN 134 ELSE STOP:END
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1   'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,MXC):GOTO 110
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF SHOWN$="y" THEN 164 ELSE IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 IF SHOWN$="" THEN PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10):SHOWN$="y"
180 RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
249 '◙--- Transform Sub ---
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None (leaving data unchanged)"
252 PRINT"◙"TAB(10)"Negative codes reverse transforms (e.g. -3 = Antilog)◙":LOCATE,,1
253 INPUT"Which transform (+/- 1 to 9, or 10)";T%:IF T%=10 THEN 273 ELSE IF ABS(T%)<1 OR ABS(T%)>9 THEN PRINT"WHAT?  ";:GOTO 253
254 IF M=1 THEN NT=1:Q(1)=1:GOTO 257 ELSE PRINT"How many variables are to have this transform (max"STR$(M)")";:INPUT NT:IF NT<1 OR NT>M THEN 254 ELSE IF NT=M THEN FOR J=1 TO M:Q(J)=J:NEXT J:GOTO 257
255 IF NT=1 THEN INPUT"Which variable # ";X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN PRINT"Silly":GOTO 255 ELSE 257
256 PRINT"Which"NT"variables (#'s in Free Format)";:INPUT X$:I=1:MM=M:M=NT:Q(0)=1:GOSUB 50:Q(0)=0:M=MM:FOR J=1 TO NT:IF Q(J)>0 AND Q(J)<=M THEN NEXT J ELSE PRINT"Value"J"is out-of-bounds.  Try again.":GOTO 256
257 GOSUB 43:A=57.29578:B=0.4342945:Z=0:U=1:H=100:P5=0.5:P9=0.99999:E$(0)=""
258 FOR J=1 TO NT:K=Q(J):FOR I=1 TO N:ON T%+10 GOTO 269,270,270,267,267,265,265,262,262,39,260,259,264,263,267,266,269,268,270
259 X(I,K)=X(I,K)/H
260 IF X(I,K)>P9 THEN X(I,K)=P9 ELSE IF X(I,K)<Z THEN 272
261 X(I,K)=SQR(X(I,K)):X(I,K)=A*ATN(X(I,K)/SQR(U-X(I,K)*X(I,K))):GOTO 271
262 IF X(I,K)>=Z THEN X(I,K)=(SIN(X(I,K)/A))^2:IF T%=-U THEN 271 ELSE X(I,K)=H*X(I,K):GOTO 271 ELSE T%=U:GOTO 272
263 X(I,K)=X(I,K)+U
264 IF X(I,K)>Z THEN X(I,K)=B*LOG(X(I,K)):GOTO 271 ELSE 272
265 X(I,K)=EXP(X(I,K)/B):IF T%=-3 THEN 271 ELSE X(I,K)=X(I,K)-U:GOTO 271
266 X(I,K)=X(I,K)+U
267 IF X(I,K)<>Z THEN X(I,K)=H/X(I,K):IF T%=-6 THEN X(I,K)=X(I,K)-U:GOTO 271 ELSE 271 ELSE 272
268 X(I,K)=X(I,K)+P5
269 IF X(I,K)>=Z THEN X(I,K)=SQR(X(I,K)):GOTO 271 ELSE T%=7:GOTO 272
270 X(I,K)=X(I,K)*X(I,K):IF T%=-8 THEN X(I,K)=X(I,K)-P5
271 NEXT I:NEXT J:IF E$(0)=""THEN GOSUB 44:GOTO 273
272 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((ABS(T%)-1)/2)", Row"I:GOSUB 5:END
273 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
359 '◙--- Probabilities ---
360 IND=1:IF DA*DB*F<=0 THEN 364 ELSE IF F>=1 THEN A1=DA:B1=DB:FF=F ELSE A1=DB:B1=DA:FF=1/F
361 AA=2/(9*A1):BB=2/(9*B1):Z=ABS(((1-BB)*FF^(1/3)-1+AA)/SQR(BB*FF^(2/3)+AA)):IF B1<4 THEN Z=Z*(1+0.08*Z^4/B1^3)
362 P=50*((1+Z*0.1968536+Z^2*0.1151945+Z^3*0.00034365+Z^4*0.019527)^-4):IF F<1 THEN P=100-P
363 IF P<10 THEN IF P>5 THEN IND=2 ELSE IF P>1 THEN IND=3 ELSE IF P>0.1 THEN IND=4 ELSE IND=5
364 RETURN
369 '◙--- Special Error Messages ---
370 BEEP:PRINT:PRINT"<< ERROR >>   Can't continue because Variable X in Sample"G"has no variation.":GOTO 579
371 BEEP:PRINT:PRINT"<< ERROR >>   Can't continue because Variable Y in Sample"G"has no variation.":GOTO 579
372 BEEP:PRINT:PRINT"< ERROR >  Can't continue because X and Y in Sample"G"are perfectly correlated.":GOTO 579
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:MXR=400:MXC=20:MG=20:MNC=2:M=2:NEEDVARS=2
402 DIM X(MXR,M),O$(41),N(MG),KN(MG),DF(MG),XX(MG),YY(MG),XY(MG),XM(MG),YM(MG),PA(MG),SR(MG),SE(MG),VE(MG),TX(M),TY(M),TM(M),SK(MG),SL(MG),EK(MG),V(MXC),VN$(MXC),Q(MXC),XP(5),T$(10),P$(5),E$(3)
403 T$(1)="Arcsin (Sqrt(p))":T$(2)="Arcsin (Sqrt(p%/100))":T$(3)="Log(X)":T$(4)="Log(X+1)":T$(5)="Reciprocal, 100/X":T$(6)="Reciprocal Plus, 100/(X+1)":T$(7)="Sqrt(X)":T$(8)="Sqrt(X+0.5)":T$(9)="X Squared":T$(10)="None":T$(0)=T$(10)
404 HD$="  ANCOVA  &  COMPARING REGRESSION LINES  ":VER$="(RL,2)"
405 QB=1:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
406 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
407 PRINT TAB(K)"║                This performs either:                  ║"
408 PRINT TAB(K)"║ 1. 1-Way ANCOVA with 1 covariate X & 1 criterion Y, or║"
409 PRINT TAB(K)"║ 2. Comparison of 2-20 REGRESSION LINES for slope etc. ║"
410 PRINT TAB(K)"║                                                       ║"
411 PRINT TAB(K)"║     Data (from keyboard or disk) will consist of      ║"
412 PRINT TAB(K)"║       up to a total of 400 rows of X Y pairs,         ║"
413 PRINT TAB(K)"║             from 2-20 samples or groups.              ║"
414 PRINT TAB(K)"║      Each sample must have 3 or more X Y pairs.       ║"
415 PRINT TAB(K)"║                                                       ║"
416 PRINT TAB(K)"║  Entire data must be entered in sequence, 1st sample  ║"
417 PRINT TAB(K)"║  followed by 2nd sample, etc, without sample breaks.  ║"
418 PRINT TAB(K)"║    (Prior REGROUP can arrange this for datafiles.)    ║"
419 PRINT TAB(K)"║                                                       ║"
420 PRINT TAB(K)"║        Editing & data transforms are available.       ║"
421 PRINT TAB(K)"║      Printouts are offered after showing answers.     ║"
422 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
423 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
424 P5=0.5:SC$="SCATTERGRAM":C$="*23456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#":S6$=SPACE$(6):S12$=SPACE$(12)
425 XM$="XBAR   ":YM$="YBAR   ":MR$="MS(Reg)":MS$="MS(Res)"
426 F2$=" =######.##":F4$=" =######.####":FA$="\     \"+F4$+SPACE$(8)+"\     \"+F4$:FB$="     "+FA$:F1$=SPACE$(5)+FA$:FF$="     F(##!###) =######.##\   \":TS$="Test of Slope:  F(1!###) =######.##\   \"+CHR$(10)
427 P$(1)=" (NS)":P$(2)=" (D) ":P$(3)=" *   ":P$(4)=" **  ":P$(5)=" *** "
428 '◙--- Get Data ---
429 ITER=0
430 DO$="enter data from disk":GOSUB 20:IF Z$="N" THEN 434
431 '◙--- Disk Entry ---
432 QD=1:MNR=2:MNC=2:GOSUB 80:PRINT"Finished ......":GOSUB 5:GOTO 438
433 '◙--- K/b Entry ---
434 QD=0:CLS
435 PRINT"Enter up to"MXR"pairs of X Y values (non-stop), 1 pair per line, in Free Format."
436 I=1:GOSUB 72
437 '◙--- Show Data ---
438 QB=3:I=1:PRINT:IF QR=0 THEN PRINT"DATA READ WAS ---"ELSE PRINT"REVISED DATA IS ---"
439 GOSUB 200:IF I MOD 20=0 THEN GOSUB 6
440 I=I+1:IF I<=N THEN 439
441 IF VN$<>"Y" THEN VN$(1)=" X      ":VN$(2)=" Y      "
442 IF QD=1 THEN IF VN$="N" THEN PRINT"Variables not named." ELSE FOR J=1 TO M:PRINT USING "Var##=";J;:PRINT VN$(J),:NEXT J:PRINT
443 '◙--- Get # of Groups, NG ---
444 ITER=ITER+1:IF ITER>1 THEN 446
445 PRINT:PRINT"How many samples or regression lines (2-"MID$(STR$(MG),2)") ";:INPUT NG:IF NG<2 OR NG>MG THEN 445
446 IF N<3*NG THEN BEEP:PRINT:PRINT"Sorry, but total N ="N"is NOT enough data for"NG"samples.":PRINT"Each sample must have at least 3 pairs of measurements for this analysis.":GOTO 11
447 IF ITER>1 THEN GOSUB 5
448 '◙--- Commands ---
449 QB=4:CLOSE:CLS:PRINT TAB(26)"COMMAND MENU":LOCATE 4,1,0:PRINT"Indicate your requirements thus---":K=20
450 PRINT"◙"TAB(K)"SA = Show all data again◙"TAB(K)"C# = Change row #◙"TAB(K)"D# = Delete row #";
451 PRINT"◙"TAB(K)"I# = Insert row # (in Free Format)◙"TAB(K)"T  = Transform variables◙"TAB(K)"A  = Analyse now◙"TAB(K)"Q  = Quit or Re-run":PRINT
452 INPUT"====> Option (SA, C#, D#, I#, T, A, Q) ";Z$:IF Z$="" THEN 452
453 IF Z$="SA" OR Z$="sa" THEN 438 ELSE IF Z$="T" OR Z$="t" THEN 466 ELSE IF Z$="A" OR Z$="a" THEN 468 ELSE IF Z$="Q" OR Z$="q" THEN 10
454 LZ$=CHR$(ASC(LEFT$(Z$,1)) AND 95):I=VAL(MID$(Z$,2)):IF I>0 AND I<=N THEN IF LZ$="C" THEN 457 ELSE IF LZ$="D" THEN 462 ELSE IF LZ$="I" THEN 463
455 GOSUB 40:GOTO 452
456 '◙--- Change Row ---
457 QR=1:GOSUB 200
458 INPUT "Change which variable # (1 or 2)";Z$:J=VAL(Z$):IF J<1 OR J>2 THEN BEEP:GOTO 458
459 PRINT"Old value ="X(I,J);TAB(28);"New value";:INPUT Z$:FOR K=1 TO LEN(Z$):IF INSTR("-.0123456789",MID$(Z$,K,1)) THEN NEXT K:X(I,J)=VAL(Z$) ELSE PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 459
460 PRINT"Revised Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:DO$="change that row again":GOSUB 20:IF Z$="Y" THEN 458 ELSE 449
461 '◙--- Delete & Insert Row ---
462 QR=1:N=N-1:FOR K=I TO N:FOR J=1 TO M:X(K,J)=X(K+1,J):NEXT J:NEXT K:PRINT:PRINT"Row"I"now deleted.";:GOSUB 5:GOTO 449
463 QR=1:IF N=MXR THEN PRINT"No Room":GOSUB 5:GOTO 449 ELSE N=N+1:FOR K=N TO I+1 STEP -1:FOR J=1 TO M:X(K,J)=X(K-1,J):NEXT J:NEXT K
464 PRINT"Row"STR$(I);:INPUT X$:GOSUB 50:PRINT"New ";:GOSUB 200:GOSUB 5:GOTO 449
465 '◙--- Transforms ---
466 CLS:GOSUB 250:GOTO 449
467 '◙--- Analyse Now ---
468 CLS:LOCATE ,1,0:K=12
469 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
470 PRINT TAB(K)"║   At this point, you must tell me your SAMPLE SIZES.  ║"
471 PRINT TAB(K)"║   You will then be able to:                           ║"
472 PRINT TAB(K)"║           See/print data.                             ║"
473 PRINT TAB(K)"║           See/print scattergrams.                     ║"
474 PRINT TAB(K)"║           See/print statistical results.              ║"
475 PRINT TAB(K)"║                                                       ║"
476 PRINT TAB(K)"║    At the end, you will be offered the option of      ║"
477 PRINT TAB(K)"║  re-cycling to remove outliers or re-transform data.  ║"
478 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
479 '◙--- Get Sample Sizes N(G) & Cum Sizes KN(G) ---
480 PRINT:PRINT"Total ="N"pairs of measurements.   You specified"NG"Samples.":PRINT
481 FOR G=1 TO NG:KN(G)=0:QE=0
482 PRINT"How many pairs of measurements belong to Sample";G;:INPUT N(G):IF N(G)<3 THEN QE=1:G=NG ELSE KN(G)=KN(G-1)+N(G):IF KN(G)>N THEN QE=2:G=NG
483 NEXT G:ON QE GOTO 486,485
484 IF KN(NG)=N THEN 489
485 BEEP:PRINT:PRINT"---> ERROR.  Those sample sizes add up to"KN(NG)"instead of"N:GOTO 487
486 BEEP:PRINT:PRINT"--> ERROR. This analysis needs at least 3 pairs of measurements in each sample."
487 GOSUB 5:GOTO 449
488 '◙--- Print Data? ---
489 DO$="print all the data used":GOSUB 20:IF Z$="N" THEN 494 ELSE GOSUB 162:GOSUB 165
490 PRINT #2,:PRINT #2,"DATA USED:"
491 FOR G=1 TO NG:PRINT #2,"SAMPLE #"G;SPACE$(4)"N ="N(G):PRINT #2,SPACE$(7);VN$(1);SPACE$(9);VN$(2):FOR I=1+KN(G-1)TO KN(G):PRINT #2,USING"  ######.##        ######.##";X(I,1);X(I,2):NEXT I:PRINT #2,:NEXT G:PRINT #2,
492 GOSUB 160
493 '◙--- Start Computations, Offer Scattergrams ---
494 G=1:TX(1)=0:TX(2)=0:TY(1)=0:TY(2)=0:T3=0:P1=0:P2=0:P3=0
495 DO$="see SCATTERGRAMS for visual check of linearities":GOSUB 20:IF Z$="N" THEN QS=0:GOSUB 43:GOTO 498
496 QS=1:CLS:GOSUB 43
497 J=1:L=1:K=2:IF PR=1 THEN 506
498 DF(G)=N(G)-2:X1=0:X2=0:X3=0:Y1=0:Y2=0:Y3=0:XY=0
499 FOR I=1+KN(G-1) TO KN(G):X=X(I,1)-X(1,1):X1=X1+X:X2=X2+X*X:X3=X3+X*X*X:Y=X(I,2)-X(1,2):Y1=Y1+Y:Y2=Y2+Y*Y:Y3=Y3+Y*Y*Y:XY=XY+X*Y:NEXT I
500 TX(1)=TX(1)+X1:TX(2)=TX(2)+X2:TY(1)=TY(1)+Y1:TY(2)=TY(2)+Y2:T3=T3+XY:XM(G)=X(1,1)+X1/N(G):YM(G)=X(1,2)+Y1/N(G)
501 XX(G)=X2-X1*X1/N(G):YY(G)=Y2-Y1*Y1/N(G):XY(G)=XY-X1*Y1/N(G):P1=P1+XX(G):P2=P2+YY(G):P3=P3+XY(G):IF XX(G)=0 THEN 370 ELSE IF YY(G)=0 THEN 371
502 IF QS=0 THEN 542
503 '◙--- Skewness Coefficients ---
504 X3=X3-3*X2*X1/N(G)+2*X1*X1*X1/N(G)/N(G):SK(G)=X3/(SQR(XX(G)*XX(G)*XX(G)/N(G))):Y3=Y3-3*Y2*Y1/N(G)+2*Y1*Y1*Y1/N(G)/N(G)
505 SL(G)=Y3/(SQR(YY(G)*YY(G)*YY(G)/N(G))):EK(G)=SQR(6*DF(G)/(N(G)+1)/(N(G)+3))
506 S=X(1+KN(G-1),L):B=S
507 FOR I=2+KN(G-1) TO KN(G):IF X(I,L)<S THEN S=X(I,L) ELSE IF X(I,L)>B THEN B=X(I,L)
508 NEXT I
509 IF B-S<0.00001 THEN BEEP:PRINT"<< ERROR >>  Can't proceed because Variable"L"in Sample"G"has no variation.":QS=0:GOTO 579
510 IF L=J THEN H=4 ELSE H=1.5
511 '◙--- Select Scales ---
512 Q=1:KT=0
513 R=B-S:C=S
514 IF R<=1 THEN KT=KT+1:R=R*10:GOTO 514
515 IF R>10 THEN KT=KT-1:R=R/10:GOTO 515
516 IF Q>2 THEN 518 ELSE C=C*10^KT:IF C<0 AND C<>INT(C) THEN C=C-1
517 C=INT(C)/10^KT:R=(B-C)/H:KT=0:Q=Q+2:GOTO 514
518 F=INT(R):IF F<>R THEN F=F+1
519 IF R<P5 THEN F=F-P5
520 F=F/10^KT:IF Q<>4THEN IF(B-S)/(H*F)<=0.8THEN KT=1:Q=2:GOTO 513
521 S=C:D=F*INT(C/F):IF D<0AND D<>C THEN D=D-F
522 IF D+H*F>=B THEN S=D
523 IF L=J THEN X=S:U=F:L=K:GOTO 506 ELSE Y=S:V=F
524 NX=41:LX=5:NY=16:A=10/U:B=10/V:IF PR=0 THEN GOSUB 160:CLS
525 '◙--- Show Scattergram ---
526 PRINT #2,SC$" #"MID$(STR$(G),2);:PRINT #2,USING"    Skew(X)=+##.##    Skew(Y)=+##.##    SE(Skew)=##.##";SK(G);SL(G);EK(G):PRINT #2,
527 O=0:FOR KN=1TO LX:XP(KN)=X+O*U:O=O+1:NEXT KN:FOR I=1TO NY:Q=I-1:IL=NY-Q:FOR I2=1TO NX:O$(I2)=" ":NEXT I2
528 FOR L=1+KN(G-1) TO KN(G):IX=((X(L,J)-X)*A)+1:IF IX<1 OR IX>NX THEN 532 ELSE IY=((X(L,K)-Y)*B)+1:IF IY<>IL THEN 532 ELSE IF O$(IX)=" " THEN O$(IX)="*":GOTO 532
529 IF O$(IX)="#" THEN 532
530 FOR KK=1 TO 35:IF O$(IX)=MID$(C$,KK,1) THEN O$(IX)=MID$(C$,KK+1,1):KK=35
531 NEXT KK
532 NEXT L
533 FOR L=41 TO 1 STEP -1:IF O$(L)=" "THEN NEXT L:LN=1 ELSE LN=L
534 IF Q MOD 5<>0 THEN 537
535 GG=Q:O=H-GG/10:D=Y+O*V:IF D<100000. THEN PRINT #2,USING"##########.#";D;:PRINT #2,"+ ";:FOR L=1 TO LN:PRINT #2,O$(L);:NEXT L:GOTO 539
536 IY=INT(D+P5):PRINT #2,USING"############";IY;:PRINT #2,"+ ";:FOR L=1 TO LN:PRINT #2,O$(L);:NEXT L:GOTO 539
537 IF I<>3 THEN PRINT #2,S12$; ELSE PRINT #2,USING"\        \  ";VN$(K);
538 PRINT #2,"! ";:FOR L=1 TO LN:PRINT #2,O$(L);:NEXT L
539 PRINT #2,:NEXT I
540 PRINT #2,S12$"  +";:FOR I=1 TO 4:PRINT #2,"---------+";:NEXT I:PRINT #2,:PRINT #2,S6$;:FOR I=1 TO LX:PRINT #2,USING"########.#";XP(I);:NEXT I:PRINT #2,:PRINT #2,SPACE$(38)VN$(J)
541 IF PR=1 THEN PRINT #2,:GOSUB 160 ELSE GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 497
542 G=G+1:IF G<=NG THEN IF QS=1 THEN 496 ELSE 498
543 '◙--- Show Sample Stats ---
544 CLS:PRINT TAB(25)"Probability Levels":PRINT"   (NS) = P>10%     (D) = P<10%     * = P<5%     ** = P<1%     *** = P<0.1%":PRINT STRING$(79,"-")
545 SR=0:SE=0:PB=P3/P1:PG=PB*P3:PE=P2-PG:PV=PE/(N-NG-1)
546 T1=TX(2)-TX(1)*TX(1)/N:T2=TY(2)-TY(1)*TY(1)/N:T3=T3-TX(1)*TY(1)/N:TM(1)=X(1,1)+TX(1)/N:TM(2)=X(1,2)+TY(1)/N:TB=T3/T1:TA=TM(2)-TB*TM(1):TR=TB*T3:TE=T2-TR
547 GOSUB 160
548 PRINT #2,TAB(24)"SAMPLE STATISTICS":PRINT #2,
549 FOR G=1 TO NG
550 PRINT #2,"SAMPLE #"G;SPACE$(10)"N ="N(G):PRINT #2,USING FA$;"XBAR   ";XM(G);"YBAR   ";YM(G):B=XY(G)/XX(G):A=YM(G)-B*XM(G):PRINT #2,USING FA$;"A      ";A;"B      ";B
551 IF PR=0 THEN SR(G)=B*XY(G):SR=SR+SR(G):SE(G)=YY(G)-SR(G):VE(G)=SE(G)/DF(G):SE=SE+SE(G):DA=1:IF SE(G)=0 THEN 372
552 DB=DF(G):F=SR(G)/VE(G):GOSUB 360:PRINT #2,USING FA$;MR$;SR(G);MS$;VE(G):PRINT #2,USING TS$;",";DF(G);F;P$(IND):IF PR=0 THEN PA(G)=YM(G)-PB*XM(G):IF G MOD 2=0 THEN GOSUB 5
553 NEXT G:DA=1:DB=N-2:F=TR/TE*DB:GOSUB 360:PRINT #2,"TOTAL DATA (Pooled Samples)"S6$" N ="N
554 PRINT #2,USING FA$;XM$;TM(1);YM$;TM(2):PRINT #2,USING FA$;"TOTAL A";TA;"TOTAL B";TB:PRINT #2,USING FA$;MR$;TR;MS$;TE/DB:PRINT #2,USING TS$;",";DB;F;P$(IND)
555 IF PR=1 THEN GOSUB 160 ELSE GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 548
556 '◙--- Show Regression Line Comparisons ---
557 CLS:GOSUB 43:S=VE(1):B=S:FOR G=2 TO NG:IF VE(G)<S THEN S=VE(G) ELSE IF VE(G)>B THEN B=VE(G)
558 NEXT G:HD=INT((N-2*NG)/NG+0.5):CLS
559 PRINT #2,TAB(20)"COMPARING REGRESSION LINES"
560 PRINT #2,:PRINT #2,"(1)  HARTLEY'S MAX F RATIO (for homoscedasticity of residuals)":PRINT #2,USING FB$;"MS(Max)";B;"MS(Min)";S:PRINT #2,USING"     F (df=##)";HD;:PRINT #2,USING F2$;B/S;:PRINT #2," (BTS Table 31)"
561 DA=NG:DB=N-2*NG:SV=SE/DB:F=SR/NG/SV:GOSUB 360
562 PRINT #2,:PRINT #2,"(2)  ALL LINES (overall testing regr of Y on X, if homoscedastic)":PRINT #2,USING F1$;MR$;SR/NG;:PRINT #2,USING FA$;MS$;SV:PRINT #2,USING FF$;DA;",";DB;F;P$(IND)
563 DA=NG-1:F=(PE-SE)/DA/SE*DB:GOSUB 360
564 PRINT #2,:PRINT #2,"(3)  PARALLELISM TEST (if significant overall regression)":PRINT #2,USING F1$;MR$;(PE-SE)/DA;:PRINT #2,USING FA$;MS$;SE/DB:PRINT #2,USING FF$;DA;",";DB;F;P$(IND)
565 IF PR=0 THEN GOSUB 5 ELSE PRINT #2,
566 PRINT #2,"IF PARALLEL, LINES THRU CENTROIDS HAVE SLOPE & INTERCEPTS THUS:":PRINT #2,USING SPACE$(5)+"B"+CHR$(34)+SPACE$(5)+F4$;PB
567 FOR G=1 TO NG:PRINT #2,SPACE$(5)"A"CHR$(34)USING"(##) ";G;:PRINT #2,USING F4$;PA(G):IF G MOD 15=0 THEN GOSUB 5
568 NEXT G
569 PRINT #2,:PRINT #2,"WITH THESE PARALLEL LINES ---":FOR G=1 TO NG:PRINT #2,USING SPACE$(5)+"Adjusted YBAR(##)";G;:PRINT #2,USING F4$;YM(G)-PB*(XM(G)-TM(1)):IF G MOD 15=0 THEN GOSUB 5
570 NEXT G:GOSUB 5
571 DA=1:DB=N-NG-1:F=PG/PV:GOSUB 360
572 PRINT #2,:PRINT #2,"(4)  COMMON SLOPE TEST (if parallel)":PRINT #2,USING F1$;MR$;PG;:PRINT #2,USING FA$;MS$;PV:PRINT #2,USING FF$;1;",";DB;F;P$(IND)
573 DA=NG-1:F=(TE-PE)/DA/PV:GOSUB 360
574 PRINT #2,:PRINT #2,"(5)  HEIGHT DIFFERENCES (if parallel)":PRINT #2,USING F1$;MR$;(TE-PE)/DA;:PRINT #2,USING FA$;MS$;PV:PRINT #2,USING FF$;DA;",";DB;F;P$(IND)
575 PRINT #2,:PRINT #2,"(6)  SINGLE SLOPE TEST (if heights are the same)":PRINT #2,SPACE$(5);"See TOTAL DATA (Pooled Samples) line & test, above."
576 SX=0:FOR G=1 TO NG:SX=SX+XX(G):NEXT G:AM=PV*(1+((T1-SX)/(NG-1)/SX))
577 PRINT #2,:PRINT #2,"FOR PLANNED COMPARISONS, Sum of SS(X)   ";:PRINT #2,USING F4$;SX:PRINT #2,"FOR POST-HOC TESTS, Ave (MS residual)   ";:PRINT #2,USING F4$;AM:PRINT #2,
578 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 559
579 GOSUB 160:PRINT:DO$="modify this data & re-analyse it":GOSUB 20:IF Z$="Y" THEN 449 ELSE 10
580 'end
```

## ANOV1.BAS

```bas
1 '          1-WAY ANOVA   ---   ANOV1.BAS   ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 406,177 :STOP  '=start,printout◙◙*** Another go? ***
10 CLOSE:IF HEAD=1 THEN LPRINT CHR$(10);STRING$(79,61);STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
45 BEEP:PRINT"Error.  Each sample must have at least 2 measurements!":PRINT:RETURN
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M, Q(0) from #96 or #256 or #516
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0)=0 THEN X(I,J)=VAL(Y$) ELSE IF Q(0)=1 THEN Q(J)=VAL(Y$) ELSE Y(J)=VAL(Y$) 'if Q(0)=9 from #516
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 IF Q(0) THEN 61 ELSE PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
61 INPUT X$:IF X$="" THEN 61 ELSE 51
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), & KN(Q).  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row."
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I-KN(Q-1));:INPUT X$:IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙*** Disk Input of X(I,J), N, M, etc ***◙    Needs MNR, MNC, & NEEDVARS.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC THEN 100 ELSE PRINT
91 '
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 '
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" THEN STOP
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" ***
130 IF IO$="I" THEN 134 ELSE STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,1)
139 GOTO 110 ' or 111 if 110 absent.
159 '◙*** Show/Print Answers ***
160 QB=1:PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HEAD=0 THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HEAD=1
179 PRINT #2,CHR$(10)CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR L=1 TO M:IF L<10 THEN VN$(L)="Var #"+STR$(L) ELSE VN$(L)="Var #"+MID$(STR$(L),2)
211 NEXT L:RETURN
249 '◙*** Transform Sub ***
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None (leaving data unchanged)"
252 PRINT:LOCATE,,1
253 INPUT"Which transform (1 to 10)";T%:IF T%=10 THEN 273 ELSE IF T%<1 OR T%>9 THEN PRINT"WHAT?  ";:GOTO 253
254 IF M=1 THEN NT=1:Q(1)=1:GOTO 257 ELSE PRINT"How many variables are to have this transform (max"STR$(M)")";:INPUT NT:IF NT<1 OR NT>M THEN 254 ELSE IF NT=M THEN FOR J=1 TO M:Q(J)=J:NEXT J:GOTO 257
255 IF NT=1 THEN INPUT"Which variable # ";X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN PRINT"Silly":GOTO 255 ELSE 257
256 PRINT"Which"NT"variables (#'s in Free Format)";:INPUT X$:I=1:MM=M:M=NT:Q(0)=1:GOSUB 50:Q(0)=0:M=MM:FOR J=1 TO NT:IF Q(J)>0 AND Q(J)<=M THEN NEXT J ELSE PRINT"Value"J"is out-of-bounds.  Try again.":GOTO 256
257 GOSUB 43:A=57.29578:B=0.4342945:Z=0:U=1:H=100:P5=0.5:P9=0.99999:E$(0)=""
258 FOR J=1 TO NT:K=Q(J):FOR I=1 TO N:ON T%+10 GOTO 269,270,270,267,267,265,265,262,262,39,260,259,264,263,267,266,269,268,270
259 X(I,K)=X(I,K)/H
260 IF X(I,K)>P9 THEN X(I,K)=P9 ELSE IF X(I,K)<Z THEN 272
261 X(I,K)=SQR(X(I,K)):X(I,K)=A*ATN(X(I,K)/SQR(U-X(I,K)*X(I,K))):GOTO 271
262 IF X(I,K)>=Z THEN X(I,K)=(SIN(X(I,K)/A))^2:IF T%=-U THEN 271 ELSE X(I,K)=H*X(I,K):GOTO 271 ELSE T%=U:GOTO 272
263 X(I,K)=X(I,K)+U
264 IF X(I,K)>Z THEN X(I,K)=B*LOG(X(I,K)):GOTO 271 ELSE 272
265 X(I,K)=EXP(X(I,K)/B):IF T%=-3 THEN 271 ELSE X(I,K)=X(I,K)-U:GOTO 271
266 X(I,K)=X(I,K)+U
267 IF X(I,K)<>Z THEN X(I,K)=H/X(I,K):IF T%=-6 THEN X(I,K)=X(I,K)-U:GOTO 271 ELSE 271 ELSE 272
268 X(I,K)=X(I,K)+P5
269 IF X(I,K)>=Z THEN X(I,K)=SQR(X(I,K)):GOTO 271 ELSE T%=7:GOTO 272
270 X(I,K)=X(I,K)*X(I,K):IF T%=-8 THEN X(I,K)=X(I,K)-P5
271 NEXT I:NEXT J:IF E$(0)=""THEN GOSUB 44:GOTO 273
272 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((ABS(T%)-1)/2)", Row"I:GOSUB 5:END
273 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙*** Anova Specials ***
350 IF QU=0 THEN RETURN ELSE R(J)=(R(J)/Y(J))^2:RETURN
360 SM=R(1):GR=SM:FOR J=2 TO NS:IF R(J)<SM THEN SM=R(J) ELSE IF R(J)>GR THEN GR=R(J)
365 NEXT J:RR(K)=GR/SM:RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:MXR=400:MXC=10:NEEDVARS=1
402 DIM I,J,K,L,M,N,Q,QP,Z,X$,Y$,Z$,ID$,A,X,QQ,SP,S2,S3,T,Y1,Y2,TD,S4
403 DIM X(MXR,1),N(MXC),KN(MXC),A(MXC),AM(MXC),GR(MXC),Q(MXC),S(MXC),SM(MXC),R(MXC),RR(4),T$(10),Y(MXC),VN$(MXC),E$(3),ED$(1)
404 P5=0.5:S$=SPACE$(6):F$="#####.###":ED$(0)="C#=Change, D#=Delete, X=Extra data, Null=Proceed":ED$(1)="C#=Change, Null=Proceed"
405 T$(1)="Arcsin (Sqrt(p))":T$(2)="Arcsin (Sqrt(p%/100))":T$(3)="Log(X)":T$(4)="Log(X+1)":T$(5)="Reciprocal, 100/X":T$(6)="Reciprocal Plus, 100/(X+1)":T$(7)="Sqrt(X)":T$(8)="Sqrt(X+0.5)":T$(9)="X Squared":T$(10)="None":T$(0)=T$(10)
406 QB=1:CLOSE:CLS:Z$="M E N U   F O R   1 - W A Y   A N O V A":GOSUB 46
407 LOCATE 3,8:PRINT"Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT STRING$(80,196)
408 LOCATE 6,1:K=10:PRINT"◙"TAB(K)"1  Weighted Means ANOVA (& Pearson's r from Grouped Data).◙◙"TAB(K)"2  Unweighted Means ANOVA.◙◙"TAB(K)"3  Return to Main Menu."
409 PRINT:LOCATE,K-3:INPUT"===>  Option (1-3) ";OP:ON OP GOTO 411,412,30:PRINT"No, please enter 1, 2, or 3":GOTO 409
410 ' --------------------------------------------------
411 HD$=" 1 - W A Y   A N O V A  (Weighted Means) ":VER$="(RL,3)":GOTO 413
412 HD$=" 1 - W A Y   A N O V A  (Unweighted Means) ":VER$="(RL,3)"
413 CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
414 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
415 PRINT TAB(K)"║                                                       ║"
416 PRINT TAB(K)"║   Compares MEANS of 2-10 INDEPENDENT sample groups.   ║"
417 PRINT TAB(K)"║                                                       ║"
418 IF OP=2 THEN 420
419 PRINT TAB(K)"║     Means are `WEIGHTED' according to sample size.    ║":GOTO 421
420 PRINT TAB(K)"║   Means are `NOT WEIGHTED' according to sample size.  ║"
421 PRINT TAB(K)"║                                                       ║"
422 PRINT TAB(K)"║   Min sample size = 2.  Max total measurements = 400. ║"
423 PRINT TAB(K)"║        Data can be from keyboard or disk file.        ║"
424 PRINT TAB(K)"║        Enter & edit data of 1 sample at a time.       ║"
425 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
426 PRINT TAB(K)"║       Various data transforms can be tried out.       ║"
427 PRINT TAB(K)"║                                                       ║"
428 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
429 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
430 PRINT TAB(K)"║                                                       ║"
431 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
432 '◙--- Get Data ---
433 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 440
434 '◙--- Disk Entry ---
435 QD=1:MNR=2:MNC=1:GOSUB 80
436 PRINT"How many samples are there (2-"MID$(STR$(MXC),2)") ";:INPUT NS:IF NS <2 OR NS >MXC THEN 436
437 FOR Q=1 TO NS:PRINT"How many measurements belong to Sample"Q;:INPUT N(Q):IF N(Q) <2 OR N(Q) >N-KN(Q-1) THEN GOSUB 40:GOTO 437
438 KN(Q)=KN(Q-1)+N(Q):NEXT Q:IF N=KN(Q-1) THEN Q=1:GOTO 446 ELSE BEEP:PRINT"Hey, those sample sizes don't add up to"N:GOTO 436
439 '◙--- K/b Entry ---
440 QD=0:PRINT"How many samples (2-"MID$(STR$(MXC),2)") ";:INPUT NS:IF NS <2 OR NS>MXC THEN 440
441 PRINT"Ok, press <Enter> after each measurement.  Null entry duplicates previous value.Signal `end-of-each-sample' by entering a `/'."
442 CLOSE:FOR Q=1 TO NS:N(Q)=0:KN(Q)=0:NEXT Q:I=0:M=1:Q=1:N=0
443 IF QD=1 OR QT=1 THEN 446
444 PRINT:PRINT"Sample #"MID$(STR$(Q),2)" ---"
445 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):IF N(Q) >1 THEN KN(Q)=N ELSE GOSUB 45:N=KN(Q-1):GOTO 445
446 PRINT:PRINT"Sample #"MID$(STR$(Q),2)" --- Data read was:"
447 L=1:FOR I=KN(Q-1)+1 TO KN(Q):PRINT TAB(L)"#"MID$(STR$(I-KN(Q-1)),2)"= "X(I,1);:L=L+16:IF L >65 THEN L=1:PRINT
448 IF I MOD 100=0 THEN GOSUB 6
449 NEXT I:PRINT
450 '◙--- Edit ---
451 PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 462 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
452 IF LZ$="C" THEN 454 ELSE IF QD THEN 453 ELSE IF LZ$="D" THEN 457 ELSE IF LZ$="X" THEN 459
453 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid datum number.":GOTO 451 ELSE PRINT"WHAT?":GOTO 451
454 IF I<1 OR I>N(Q) THEN 453 ELSE I=I+KN(Q-1)
455 PRINT"Old value = "X(I,1)"     New value";:INPUT X$:IF X$="" THEN 451 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do it.":GOTO 455
456 NEXT L:X(I,1)=VAL(X$):GOTO 446
457 IF I<1 OR I>N(Q) THEN 453 ELSE IF KN(Q)-KN(Q-1)<3 THEN GOSUB 45:GOTO 451 ELSE GOSUB 43:FOR L=I+KN(Q-1) TO N:X(L,1)=X(L+1,1):NEXT L:N(Q)=N(Q)-1:KN(Q)=KN(Q)-1:N=N-1
458 LOCATE ,1:PRINT"Ok, value #"I"deleted.":GOSUB 5:GOTO 446
459 IF N=MXR THEN PRINT"Total N is already maximum,"N;:GOTO 451
460 PRINT"You can append up to"MXR-N"extra measurements, 1 per line, with `/' end-signal:"
461 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):KN(Q)=N:GOTO 446
462 IF Q<NS THEN Q=Q+1:GOTO 443
463 '◙--- Print Data? ---
464 DO$="print that data":GOSUB 20:IF Z$="N" THEN 470
465 GOSUB 162:GOSUB 165
466 FOR J=1 TO NS:PRINT #2,:PRINT #2,"Sample #"MID$(STR$(J),2)" Data:   n ="N(J)
467 FOR I=1+KN(J-1) TO KN(J):PRINT #2,X(I,1);:NEXT I:PRINT#2,
468 NEXT J:GOSUB 160:IF T%>0 THEN 512
469 '◙--- If unequal replicates, set QU=1 ---
470 QU=0:FOR J=2 TO NS:IF N(J-1)<>N(J) THEN QU=1:J=NS
471 NEXT J
472 '◙--- Harmonic Mean (if unweighted means or unequal reps) ---
473 IF OP=2 OR QU=1 THEN FOR J=1 TO NS:HM=HM+1/N(J):NEXT J:HM=NS/HM
474 '◙--- Range Check ---
475 DO$="check EQUALITY of SAMPLE DISPERSIONS":GOSUB 20:IF Z$="N" THEN 509
476 GOSUB 43:FOR J=1 TO NS:SM(J)=X(1+KN(J-1),1):GR(J)=SM(J):FOR I=2+KN(J-1) TO KN(J):IF X(I,1)<SM(J) THEN SM(J)=X(I,1) ELSE IF X(I,1)>GR(J) THEN GR(J)=X(I,1)
477 NEXT I:NEXT J:SM=SM(1):FOR J=2 TO NS:IF SM(J)<SM THEN SM=SM(J)
478 NEXT J:QC=SGN(SM)
479 IF QU=0 THEN 484 ELSE CLS:PRINT"Sample sizes are Unequal.  Enter d(n) values from BTS 27:":PRINT"d("MID$(STR$(N(1)),2)")";:INPUT Y(1)
480 FOR J=2 TO NS:FOR K=1 TO J-1:IF N(J)=N(K) THEN Y(J)=Y(K):K=J:FLAG=1
481 NEXT K:IF FLAG=1 THEN FLAG=0:GOTO 483
482 PRINT"d("MID$(STR$(N(J)),2)")";:INPUT Y(J)
483 NEXT J
484 CLS:GOSUB 160
485 F1$="#####.#":F2$="####.##":F3$="###.###":BB=0.4342945
486 IF QU=0 THEN PRINT #2,SPACE$(18)"RANGE CHECK OF SAMPLE DISPERSIONS"CHR$(10)CHR$(10)SPACE$(12)"Range in Sample":PRINT #2,"Transform";
487 IF QU=1 THEN PRINT #2,SPACE$(24)"HARTLEY'S MAX F RATIOS"CHR$(10)CHR$(10)SPACE$(12)"Approx Variance of Sample":PRINT #2,"Transform";
488 FOR J=1 TO NS:PRINT #2,"   #";USING"## ";J;:NEXT J:PRINT #2,
489 PRINT #2,STRING$(8,"-");:FOR J=1 TO NS:PRINT #2,STRING$(7,"-");:NEXT J:PRINT #2,
490 PRINT #2,"NONE    ";:FOR J=1 TO NS:R(J)=GR(J)-SM(J):GOSUB 350:PRINT #2,USING F1$;R(J);:NEXT J:K=1:GOSUB 360
491 PRINT #2,:IF QC=-1 THEN PRINT #2,"Negative data value(s) preclude Variance-Stabilizing Transforms.";:GOTO 498
492 PRINT #2,"SQRT    ";:FOR J=1 TO NS:R(J)=SQR(GR(J))-SQR(SM(J)):GOSUB 350:PRINT #2,USING F2$;R(J);:NEXT J:K=2:GOSUB 360
493 IF QC=0 THEN 496    'QC is SGN(smallest datum)
494 PRINT #2,:PRINT #2,"LOG     ";:FOR J=1 TO NS:R(J)=BB*(LOG(GR(J))-LOG(SM(J))):GOSUB 350:PRINT #2,USING F3$;R(J);:NEXT J:K=3:GOSUB 360
495 PRINT #2,:PRINT #2,"RECI    ";:FOR J=1 TO NS:R(J)=1/SM(J)-1/GR(J):GOSUB 350:PRINT #2,USING F3$;R(J);:NEXT J:K=4:GOSUB 360:GOTO 498
496 PRINT #2,:PRINT #2,"LOG+    ";:FOR J=1 TO NS:R(J)=BB*(LOG(GR(J)+1)-LOG(SM(J)+1)):GOSUB 350:PRINT #2,USING F3$;R(J);:NEXT J:K=3:GOSUB 360
497 PRINT #2,:PRINT #2,"REC+    ";:FOR J=1 TO NS:R(J)=1/(SM(J)+1)-1/(GR(J)+1):GOSUB 350:PRINT #2,USING F3$;R(J);:NEXT J:K=4:GOSUB 360
498 PRINT #2,:PRINT #2,:PRINT #2,
499 IF QU=0 THEN PRINT #2,"Using          RANGE RATIOS   (See BTS 31c, with k ="NS"& n = "MID$(STR$(N(1)),2)")"
500 IF QU=1 THEN PRINT #2,"Using          MAX F RATIOS   (See BTS 31, with k ="NS"& nu = "MID$(STR$(INT(N/NS+P5)-1),2)")"
501 PRINT #2,STRING$(63,"-")
502 PRINT #2,USING"ORIGINAL X    "+F$;RR(1):IF QC<0 THEN 506
503 PRINT #2,USING"SQRT(X) "+S$+F$;RR(2)
504 IF QC=1 THEN PRINT #2,USING"LOG(X)  "+S$+F$;RR(3):PRINT #2,USING"100/X   "+S$+F$;RR(4):GOTO 506
505 IF QC=0 THEN PRINT #2,USING"LOG(X+1)"+S$F$;RR(3):PRINT #2,USING"100/(X+1)     "+F$;RR(4)
506 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 486
507 IF PR=1 THEN GOSUB 160
508 '◙--- Transform? ---
509 DO$="transform all the data":GOSUB 20
510 IF Z$="Y" THEN GOSUB 250:IF T%<10 THEN DO$="re-view or print that transformed data":GOSUB 20:IF Z$="Y" THEN Q=1:QT=1:GOTO 446
511 '◙--- Quant Levels (QQ=1) ---
512 IF OP=2 THEN 518
513 IF NS=2 THEN QQ=1:Y(1)=1:Y(2)=2:GOTO 518
514 PRINT:PRINT"Are the levels of Factor 'A' Quantitative";:GOSUB 21:IF Z$="N" THEN 518
515 QQ=1:PRINT"Enter `E' if Equally spaced, otherwise enter their"NS"values in free format: ":INPUT X$:IF X$="E" OR X$="e" THEN FOR J=1 TO NS:Y(J)=J:NEXT J:GOTO 518
516 M=NS:Q(0)=9:GOSUB 50:Q(0)=0
517 '◙--- Calc ---
518 GOSUB 43:FOR J=1 TO NS:S(J)=0
519 FOR I=1+KN(J-1) TO KN(J):X=X(I,1)-X(1,1):A(J)=A(J)+X:S(J)=S(J)+X*X:IF QQ=1 THEN SP=SP+X*Y(J)
520 NEXT I
521 S2=S2+S(J):AM(J)=A(J)/N(J):S(J)=(S(J)-A(J)*AM(J))/(N(J)-1):S3=S3+A(J)*AM(J):T=T+A(J):IF QQ=1 THEN Y1=Y1+N(J)*Y(J):Y2=Y2+N(J)*Y(J)*Y(J)
522 NEXT J
523 TM=T/N:S1=T*TM:DA=NS-1:DE=N-NS:DT=N-1:SA=S3-S1:SE=S2-S3:ST=S2-S1:VA=SA/DA:VE=SE/DE:VT=ST/DT:E2=1-VE/VT:IF E2>0 THEN E=SQR(E2) ELSE E=0
524 IF QQ=1 THEN SP=SP-Y1*TM:SY=Y2-Y1/N*Y1:R=SP/SQR(ST*SY):IF NS>2 THEN EE=SA/ST:FL=(EE-R*R)*DE/(1-EE)/(NS-2):IF FL<0 THEN FL=0
525 IF OP=2 THEN FOR J=1 TO NS:TD=TD+AM(J):S4=S4+AM(J)*AM(J):NEXT J:TM=TD/NS:SA=HM*(S4-TD*TM):VA=SA/DA
526 '◙--- Show/Print Answers ---
527 F3$=" ######.###":F4$=" ###":IF SA>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
528 CLS:PRINT SPACE$(15)HD$:PRINT:GOSUB 160
529 IF T%=0 OR T%=10 THEN PRINT #2,SPACE$(22)"DATA SUMMARY" ELSE PRINT #2,SPACE$(12)"DATA SUMMARY"S$"Transform = ";T$(T%)
530 PRINT #2,:PRINT #2,"Sample    First 2 Values"S$"n"S$"Mean"S$"Variance":PRINT #2,
531 FOR J=1 TO NS:PRINT #2,USING F4$+F3$+F3$+" "+F4$+F3$+"  "+F3$;J;X(1+KN(J-1),1);X(2+KN(J-1),1);N(J);AM(J)+X(1,1);S(J):NEXT J
532 PRINT #2,"Total & Grand Mean =";SPACE$(7);USING F4$+F3$;N;TM+X(1,1)
533 IF HM>0 THEN PRINT #2,"Harmonic Mean # Replicates =";HM
534 GOSUB 5:IF PR=0 THEN CLS ELSE PRINT #2,:PRINT #2,
535 PRINT #2,SPACE$(22)"ANOVA TABLE":PRINT #2,STRING$(63,"-")
536 PRINT #2,"   Source"SPACE$(11)"SS"SPACE$(7)"df"S$"MS"S$"Variance Ratio":PRINT #2,STRING$(63,"-")
537 PRINT #2,"Betw Samples  ";USING F2$+"   "+F4$+F2$;SA;DA;VA;
538 PRINT #2,"    F("MID$(STR$(DA),2)","MID$(STR$(DE),2)") =";USING"#####.##";VA/VE
539 PRINT #2,USING"Within Samples"+F2$+"   "+F4$+F2$;SE;DE;VE:PRINT #2,STRING$(63,"-")
540 IF OP=1 THEN PRINT #2,USING"Total"+SPACE$(9)+F2$+"   "+F4$+F2$;ST;DT;VT:PRINT #2,STRING$(63,"-"):PRINT #2,:PRINT #2,USING"Kelley's Epsilon Sq =####.###"+SPACE$(10)+"Epsilon = ###.###";E2;E
541 IF OP=1 AND QQ=1 THEN PRINT #2,"Pearson's r Betw Factor Levels & Sample Values = ";USING"+##.###";R:IF NS>2 THEN PRINT #2,USING"Test for Linearity of Relationship:   F(#";NS-2;:PRINT #2,",";USING"###) =####.##";DE;FL
542 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 529
543 GOSUB 160:GOTO 10
544 'end
```

## ANOVK.BAS

```bas
1 '         ANOVA by RANKS  ---  ANOVK.BAS ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
8 QD=1:GOTO 523
9 ON QB GOTO 404,177,8,624:STOP  '=start,printout,K-W,Fried.◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 GOTO 400
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙*** Messages ***
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
43 PRINT:PRINT"Working ";:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
45 BEEP:PRINT"Error.  Each sample must have at least 2 measurements!":PRINT:RETURN
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.◙    Signal neg entries by NEG=1 since #351 needs pos values.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$):IF X(I,J)<0 THEN NEG=1
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I-KN(Q-1));:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I-KN(Q-1));:INPUT X$:IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 AND ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 IF NEEDVARS=0 THEN PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 IF NEEDVARS=2 THEN PRINT"This test analyses only 2 column variables.":ND=M-2
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT:COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:PRINT SPACE$(15):M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" ***
130 IF IO$="O" THEN STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5:DIM X(MXR,MXC):GOTO 110 ' or replace MXC ....
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
189 '◙*** Print Data ***◙   Needs X( , ) & NEEDVARS=1, NS,N( ),KN( ,1) else J,K,VN$( ).
190 DO$="print all the data used":GOSUB 20:IF Z$="N" THEN 193
191 PRINT #2,STRING$(2,10)"DATA USED: ":IF NEEDVARS=1 THEN FOR J=1 TO NS:PRINT #2,"Sample "CHR$(J+64)":":FOR I=1 TO N(J):PRINT #2,X(I+KN(J-1),1)+CONST;:NEXT I:PRINT #2,:NEXT J
192 '
193 PR=0:PRINT #2,:CLOSE:RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
279 '◙--- Rank & Tie Corr Sub ---◙    Ranks input X(II,Q), II=1 to NN, Q= a constant (e.g. 0).◙    Returns ranks in RK(II), ave ranks if tied, & usually tie correction (TC).◙    Alters II, JJ, LK(II), SM, EQ, AR!, & KT.
280 ERASE RK,LK:DIM RK(NN),LK(NN):FOR II=1 TO NN:IF RK(II)>0 THEN 284 ELSE SM=0:EQ=0:FOR JJ=1 TO NN:IF X(JJ,Q)<X(II,Q) THEN SM=SM+1 ELSE IF X(JJ,Q)=X(II,Q) THEN EQ=EQ+1:RK(JJ)=-1
281 NEXT JJ:IF EQ<2 THEN RK(II)=SM+1:GOTO 284
282 AR!=SM+(EQ+1)/2:FOR JJ=II TO NN:IF RK(JJ)=-1 THEN RK(JJ)=AR!
283 NEXT JJ
284 NEXT II:IF NO.TC THEN RETURN
285 '  Tie Correction
286 TC=0:FOR II=1 TO NN-1:IF LK(II) THEN 288 ELSE KT=1:FOR JJ=II+1 TO NN:IF ABS(RK(II)-RK(JJ))<0.1 THEN KT=KT+1:LK(JJ)=1
287 NEXT JJ:IF KT>1 THEN TC=TC+KT*KT*KT-KT
288 NEXT II:RETURN  'can have "TC=TC/12" before RETURN.
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙--- Number Sorter ---◙Convert numbers to sortable strings, then sort string array by:◙      DEF SEG: STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(n,x$(0))◙where n = no. of elements, & x$(0) = 1st element of string array (J. Dorner).
350 PRINT:INPUT"Maximum number of decimal places in your data (0-5)";NDP:IF NDP<0 OR NDP>5 THEN 350 ELSE I=NDP-(NDP>0)+(NDP=5):DP#=10.#^I    'DP enhanced if NDP=1-4 to ensure accurate estimates of medians
351 DEF FNNUM2STR$(X#,DP#,MXDIG%)=MID$("-0",(X#<0)+2,1)+RIGHT$(STRING$(MXDIG%,"0")+MID$(STR$(INT(X#*DP#)),2),MXDIG%)'◙    X=number, DP=dec factor, MXDIG=max digits/number (L. Rosenfelder)
352 DEC=10^(NDP+1):DEF FNROUND(X)=INT(X*DEC+0.5)/DEC  'Rounds to 1 dec more than in data entered.
353 DIM STRSORT%(33):RESTORE 354:FOR I=0 TO 33:READ STRSORT%(I):NEXT I:DEF SEG:STRSORT=VARPTR(STRSORT%(0)):RETURN
354 DATA &H5590,&HEC8B,&H1BA,&H8B00,&H876,&HC8B,&H7449,&H8B30
355 DATA &H676,&HDB33,&H1C8A,&H5646,&H8B51,&H37C,&H348B,&HCB8B
356 DATA &H5756,&HA6F3,&H5E5F,&HC7E,&HCB8B,&H58A,&H88A4,&HFF44
357 DATA &HF8E2,&HD233,&H5E59,&H4646,&HE246,&HBDC,&H74D2,&H5DC5
358 DATA &H4CA,&H0
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXC=10
402 DIM I,J,K,L,M,N,Q,Z,X$,Y$,Z$,X#,CONST#,SM,EQ,AR,TC,KT,AV,CT,VN$(20),Q(20),ED$(1)
403 P5=0.5:S$=SPACE$(6):F$="#####.###":ED$(0)="C#=Change, D#=Delete, X=Extra data, Null=Proceed":ED$(1)="C#=Change, Null=Proceed"
404 QB=1:CLOSE:CLS:Z$="M E N U   F O R   A N O V A   B Y   R A N K S":GOSUB 46
405 LOCATE 3,8:PRINT"Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT STRING$(80,196)
406 LOCATE 6,1:K=10:PRINT"◙"TAB(K)"1   Kruskal & Wallis' Test for Independent Samples.◙◙"TAB(K)"2   Friedman's Test for Matched Samples.◙◙"TAB(K)"3   Return to Main Menu."
407 PRINT:LOCATE ,K-2:INPUT"===>  Option (1-3) ";OP:ON OP GOTO 500,600,30:PRINT"No, please enter 1, 2, or 3":GOTO 407
499 '◙-------<<< Kruskal & Wallis >>>
500 QB=3:HD$=" K R U S K A L   &   W A L L I S'   T E S T ":VER$="(RL,5)"
501 NEEDVARS=1:MXR=400:DIM X(MXR,1),Z$(MXR),N(MXC),KN(MXC),RK(MXR),LK(MXR),SR(MXC),SX(MXC),XMED(MXC)
502 CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
503 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
504 PRINT TAB(K)"║                                                       ║"
505 PRINT TAB(K)"║  Compares MEDIANS of 3-10 INDEPENDENT sample groups.  ║"
506 PRINT TAB(K)"║  Min sample size = 2.  Max total measurements = 400.  ║"
507 PRINT TAB(K)"║     Enter & edit the data of 1 sample at a time.      ║"
508 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
509 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
510 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
511 PRINT TAB(K)"║                                                       ║"
512 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
513 '◙--- Get Data ---
514 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 521
515 '◙--- Disk Entry ---
516 QD=1:MNR=6:MNC=1:GOSUB 80
517 PRINT"How many samples are there (3-"MID$(STR$(MXC),2)") ";:INPUT NS:IF NS<3 OR NS>MXC THEN 517
518 FOR Q=1 TO NS:PRINT"How many measurements belong to Sample "CHR$(Q+64);:INPUT N(Q):IF N(Q)<2 OR N(Q)>N-KN(Q-1)THEN GOSUB 40:GOTO 518
519 KN(Q)=KN(Q-1)+N(Q):NEXT Q:IF N=KN(Q-1) THEN 523 ELSE BEEP:PRINT"Hey, those sample sizes don't add up to"N:GOTO 517
520 '◙--- K/b Entry ---
521 PRINT"How many samples (3-"MID$(STR$(MXC),2)") ";:INPUT NS:IF NS<3 OR NS>MXC THEN 521
522 PRINT"Ok, press <Enter> after each measurement.  Null entry duplicates previous value.Signal `end-of-each-sample' by entering a `/'."
523 CLOSE:Q=1:M=1
524 IF QD THEN 527
525 PRINT:PRINT"Sample "CHR$(Q+64)" ---"
526 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):IF N(Q)>1 THEN KN(Q)=N ELSE GOSUB 45:N=KN(Q-1):GOTO 526
527 PRINT:PRINT"Sample "CHR$(Q+64)" --- Data read was:"
528 L=1:FOR I=KN(Q-1)+1 TO KN(Q):PRINT TAB(L)"#"MID$(STR$(I-KN(Q-1)),2)"= "X(I,1);:L=L+16:IF L>65 THEN L=1:PRINT
529 IF I MOD 100=0 THEN GOSUB 6
530 NEXT I:PRINT
531 '◙--- Edit ---
532 PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 543 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
533 IF LZ$="C" THEN 535 ELSE IF QD THEN 534 ELSE IF LZ$="D" THEN 538 ELSE IF LZ$="X" THEN 540
534 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid datum number.":GOTO 532 ELSE PRINT"WHAT?":GOTO 532
535 IF I<1 OR I>N(Q) THEN 534 ELSE I=I+KN(Q-1)
536 PRINT"Old value = "X(I,1)"     New value";:INPUT X$:IF X$="" THEN 532 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do it.":GOTO 536
537 NEXT L:X(I,1)=VAL(X$):IF X(I,1)<0 THEN NEG=1:GOTO 527 ELSE 527
538 IF I<1 OR I>N(Q) THEN 534 ELSE IF KN(Q)-KN(Q-1)<3 THEN GOSUB 45:GOTO 532 ELSE GOSUB 43:FOR L=I+KN(Q-1) TO N:X(L,1)=X(L+1,1):NEXT L:N(Q)=N(Q)-1:KN(Q)=KN(Q)-1:N=N-1
539 LOCATE ,1:PRINT"Ok, value #"I"deleted.":GOSUB 5:GOTO 527
540 IF N=MXR THEN PRINT"Total N is already maximum,"N;:GOTO 532
541 PRINT"You can append up to"MXR-N"extra measurements, 1 per line, with `/' end-signal:"
542 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):KN(Q)=N:GOTO 527
543 IF Q<NS THEN Q=Q+1:GOTO 524
544 '◙--- Calc ---
545 GOSUB 350:CLS:GOSUB 43:CONST#=0.#:IF NEG=0 THEN 547 ELSE FOR I=1 TO N:IF X(I,1)<CONST# THEN CONST#=VAL(STR$(X(I,1))) 'If neg, find smallest value (CONST)
546 NEXT I' Next subtract CONST to make all data >= 0, so when converted to strings they will always sort correctly.  Add it back later to medians.
547 FOR I=1 TO N:X#=VAL(STR$(X(I,1)))-CONST#:Z$(I-1)=FNNUM2STR$(X#,DP#,8):NEXT I
548 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(N,Z$(0))
549 XMED=(VAL(Z$((N-2)/2))+VAL(Z$((N-1)/2)))/2/DP#+CONST#
550 FOR J=1 TO NS:FOR I=1 TO N(J):SX(J)=SX(J)+X(I+KN(J-1),1):X#=VAL(STR$(X(I+KN(J-1),1)))-CONST#:Z$(I-1)=FNNUM2STR$(X#,DP#,8):NEXT I
551 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(N(J),Z$(0))
552 XMED(J)=(VAL(Z$((N(J)-2)/2))+VAL(Z$((N(J)-1)/2)))/2/DP#+CONST#:NEXT J
553 Q=1:NN=N:GOSUB 280
554 FOR J=1 TO NS:FOR I=1+KN(J-1)TO KN(J):SR(J)=SR(J)+RK(I):NEXT I:AV=AV+SX(J):S=S+SR(J)*SR(J)/N(J):NEXT J
555 AV=AV/N:UH=12*S/N/(N+1)-3*(N+1):TC=1-TC/N/(N*N-1):H=UH/TC
556 EP=(H-NS+1)/(N-NS):IF EP>0 THEN EP=SQR(EP) ELSE EP=0
557 '◙--- Answer ---
558 CLS:GOSUB 160:PRINT #2,TAB(18)HD$CHR$(10):F2$="####    #####.###  #####.###      "
559 PRINT #2,"First 2 measurements of each sample were:"
560 FOR J=1 TO NS:PRINT #2,"Sample "CHR$(J+64)":";:FOR I=1 TO 2:PRINT #2,X(I+KN(J-1),1);:NEXT I:PRINT #2,:NEXT J:PRINT #2,
561 PRINT #2,"Sample"S$"Size"S$"Median"S$"Mean"S$"Sum of Ranks"
562 FOR J=1 TO NS:PRINT #2,USING"  !  ";CHR$(J+64);:PRINT #2,USING S$+F2$+"#####.#";N(J);XMED(J);SX(J)/N(J);SR(J):NEXT J
563 PRINT #2,USING"Pooled     "+F2$;N;XMED;AV:GOSUB 5
564 PRINT #2,:PRINT #2,USING"Kruskal-Wallis H ="+F$+"  (Uncorrected)";UH
565 PRINT #2,USING"Tie Correction   ="+F$;TC
566 PRINT #2,USING"Corrected H      ="+F$;H
567 PRINT #2,USING"If any sample size >5, or if with >3 samples, H = CHISQ with df =##";NS-1
568 PRINT#2,:PRINT #2,USING"Rank Epsilon     ="+F$;EP
569 IF PR THEN GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 561
570 GOTO 10
599 '◙--------<<< Friedman >>>
600 QB=4:HD$=" F R I E D M A N ' S    T E S T ":VER$="(RL,5)"
601 MXR=40:DIM X(MXR,MXC),Z$(MXR),CAV(MXC),CMED(MXC),CR(MXC),LK(MXR),RK(MXR),RAV(MXR),RMED(MXR),RR(MXR)
602 CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
603 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
604 PRINT TAB(K)"║                                                       ║"
605 PRINT TAB(K)"║      Compares MEDIANS of MATCHED rows & columns.      ║"
606 PRINT TAB(K)"║   Accepts 2-40 rows, & 3-10 columns of measurements.  ║"
607 PRINT TAB(K)"║         Data is input by rows, in Free Format.        ║"
608 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
609 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
610 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
611 PRINT TAB(K)"║                                                       ║"
612 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
613 '◙--- Get Data ---
614 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 618
615 '◙--- Disk Entry ---
616 QD=1:MNR=2:MNC=3:GOSUB 80:GOTO 624
617 '◙--- K/b Entry
618 PRINT"Ok, enter your data table from the keyboard."
619 INPUT "How many ROWS of data will there be";N:IF N<2 OR N>MXR THEN BEEP:GOTO 619
620 INPUT "How many COLS of data will there be";M:IF M<3 OR M>MXC THEN BEEP:GOTO 620
621 PRINT"Now enter your data by rows in Free Format, pressing <Enter> at end of each row.":Q=1
622 FOR I=Q TO N
623 PRINT"Row"STR$(I);:INPUT X$:IF X$="" THEN 623 ELSE GOSUB 50:NEXT I
624 CLOSE:CLS:PRINT"Data read was:":FOR I=1 TO N:PRINT"Row #"MID$(STR$(I),2)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:IF I MOD 20=0 THEN GOSUB 6
625 NEXT I
626 '◙--- Edit ---
627 PRINT:PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 638 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
628 IF LZ$="C" THEN 630 ELSE IF QD THEN 629 ELSE IF LZ$="D" THEN 634 ELSE IF LZ$="X" THEN 635
629 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid row number.":GOTO 627 ELSE PRINT"WHAT?":GOTO 627
630 IF I<1 OR I>N THEN 629 ELSE GOSUB 200
631 PRINT"Change which variable # (1-"MID$(STR$(M),2)")";:INPUT Z$:IF Z$="" THEN 627 ELSE J=VAL(Z$):IF J<1 OR J>M THEN BEEP:GOTO 631
632 PRINT"Old value = "X(I,J)"     New value";:INPUT X$:IF X$="" THEN 627 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do it.":GOTO 632
633 NEXT L:X(I,J)=VAL(X$):PRINT"New ";:GOSUB 200:GOSUB 5:GOTO 624
634 IF I<1 OR I>N OR N<4 THEN GOSUB 40:GOTO 627 ELSE N=N-1:FOR K=I TO N:FOR L=1 TO M:X(K,L)=X(K+1,L):NEXT L:NEXT K:PRINT"Ok, Row"I"Deleted.":GOSUB 5:GOTO 624
635 IF N=MXR THEN PRINT"No, you have maximum rows already.":GOTO 627
636 PRINT"How many extra rows (1-"MID$(STR$(MXR-N),2)")";:INPUT NN:IF NN<1 THEN 627 ELSE IF NN>MXR-N THEN BEEP:GOTO 636 ELSE PRINT"Ok, enter"NN"extra rows in Free Format.":Q=N+1:N=N+NN:GOTO 622
637 '◙--- Row Medians & Col Ranks ---
638 GOSUB 350:CLS:COLOR 23,0:GOSUB 43:COLOR 7,0:Q=0:CONST#=0.#:IF NEG=0 THEN 640 ELSE FOR I=1 TO N:FOR J=1 TO M:IF X(I,J)<CONST# THEN CONST#=VAL(STR$(X(I,J)))
639 NEXT J:NEXT I
640 FOR I=1 TO N
641 FOR J=1 TO M:X(J,Q)=X(I,J)-CONST#:Z$(J-1)=FNNUM2STR$(X(I,J),DP#,8):RAV(I)=RAV(I)+X(I,J):NEXT J:RAV(I)=RAV(I)/M
642 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(M,Z$(0))
643 RMED(I)=(VAL(Z$((M-2)/2))+VAL(Z$((M-1)/2)))/2/DP#  'Don't add CONST here.
644 NN=M:GOSUB 280:CT=CT+TC
645 FOR J=1 TO M:CR(J)=CR(J)+RK(J):NEXT J
646 NEXT I
647 '◙--- Col Medians & Row Ranks ---
648 FOR J=1 TO M
649 FOR I=1 TO N:X(I,Q)=X(I,J)-CONST#:Z$(I-1)=FNNUM2STR$(X(I,J),DP#,8):CAV(J)=CAV(J)+X(I,J):NEXT I:CAV(J)=CAV(J)/N
650 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(N,Z$(0))
651 CMED(J)=(VAL(Z$((N-2)/2))+VAL(Z$((N-1)/2)))/2/DP#
652 NN=N:GOSUB 280:RT=RT+TC
653 FOR I=1 TO N:RR(I)=RR(I)+RK(I):NEXT I
654 NEXT J
655 '◙--- Chisq's ---
656 FOR I=1 TO N:RU=RU+RR(I)*RR(I):NEXT I:RU=12*RU/M/N/(N+1)-3*M*(N+1):RT=1-RT/M/N/(N*N-1):RC=RU/RT
657 FOR J=1 TO M:CU=CU+CR(J)*CR(J):NEXT J:CU=12*CU/N/M/(M+1)-3*N*(M+1):CT=1-CT/N/M/(M*M-1):CC=CU/CT
658 '◙--- Answers ---
659 F1$="####.#":S1$=SPACE$(11):C$=" Concordance W ="+F$+"  (Significance that of "
660 CLS:GOSUB 160:PRINT #2,TAB(40-LEN(HD$)\2)HD$CHR$(10)
661 PRINT #2,S$;:FOR J=1 TO M:PRINT #2,USING" C##  ";J;:NEXT J:IF M=10 THEN PRINT #2,CHR$(10)"  ";
662 PRINT #2," Med  Ave SORank":PRINT #2,STRING$(79,45)
663 FOR I=1 TO N:PRINT #2,USING"R##:";I;
664 FOR J=1 TO M:PRINT #2,USING F1$;X(I,J);:NEXT J:IF M=10 THEN PRINT #2,
665 PRINT #2,USING F1$;RMED(I);:PRINT #2,USING F1$;RAV(I);:PRINT #2,USING F1$;RR(I)
666 IF I=10 THEN GOSUB 5
667 NEXT I:PRINT #2,STRING$(79,45)
668 PRINT #2,"Med:";:FOR J=1 TO M:PRINT #2,USING F1$;CMED(J);:NEXT J:PRINT #2,
669 PRINT #2,"Ave:";:FOR J=1 TO M:PRINT #2,USING F1$;CAV(J);:NEXT J:PRINT #2,
670 PRINT #2,"SOR:";:FOR J=1 TO M:PRINT #2,USING F1$;CR(J);:NEXT J:PRINT #2,:GOSUB 5
671 PRINT #2,:PRINT #2,USING "Betw Cols  (k = ##!  n = ##)";M;",";N
672 PRINT #2,USING S1$+"Friedman's CHISQ  ="+F$+"  (Uncorrected)";CU
673 PRINT #2,USING S1$+"Tie Correction    ="+F$;CT
674 PRINT #2,USING S1$+"Corrected CHISQ   ="+F$+"  df =####";CC;M-1
675 PRINT #2,USING S1$+"Col"+C$+"Rows)";RC/M/(N-1)
676 PRINT #2,:PRINT #2,USING "Betw Rows  (k = ##!  n = ##)";N;",";M
677 PRINT #2,USING S1$+"Friedman's CHISQ  ="+F$+"  (Uncorrected)";RU
678 PRINT #2,USING S1$+"Tie Correction    ="+F$;RT
679 PRINT #2,USING S1$+"Corrected CHISQ   ="+F$+"  df =####";RC;N-1
680 PRINT #2,USING S1$+"Row"+C$+"Cols)";CC/N/(M-1)
681 IF PR THEN GOSUB 193 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 661
682 GOTO 10
683 END
```

## ANOVR.BAS

```bas
1 '      2-WAY ANOVA, REPLICATED  ---  ANOVR.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 400,177,447,10 :STOP  '=start,printout,etc - CLOSE (exc 177)◙◙--- Another go? ---
10 CLOSE:IF HEAD=1 THEN LPRINT CHR$(10);STRING$(79,61);STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=4:GOTO 9
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙--- Vetted Decoding of FF X(I,J) from X$ ---◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I);:INPUT X$:IF UT>0 AND I=M THEN N=M:GOTO 75 ELSE IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 AND ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXV THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 '
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 '
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1:KL=J
98 NEXT J
99 ' ********  Now read data values from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:DIM XX(N,M):FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE XX(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙*** Get Filespec ***
110 IF IO$="O" THEN STOP
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" or "O" ***
130 IF IO$="I" THEN 134 ELSE STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE XX:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM XX(MXR,1)
139 GOTO 110
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HEAD=0 THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HEAD=1
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR L=1 TO M:IF L<10 THEN VN$(L)="Var #"+STR$(L) ELSE VN$(L)="Var #"+MID$(STR$(L),2)
211 NEXT L:RETURN
249 '◙--- Transform Sub ---
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None (leaving data unchanged)"
252 PRINT:LOCATE ,,1:AA=57.29578:BB=0.4342945:P9=0.99999:E$(0)=""
253 INPUT"Which transform (1 to 10)";T%:IF T%=10 THEN 267 ELSE IF T%<1 OR T%>9 THEN PRINT"WHAT?  ";:GOTO 253
254 FOR I=1 TO AB:FOR K=1 TO N(I):ON T% GOTO 256,255,259,258,261,260,263,262,264
255 X(I,K)=X(I,K)/100
256 IF X(I,K)>P9 THEN X(I,K)=P9 ELSE IF X(I,K)<0 THEN 266
257 X(I,K)=SQR(X(I,K)):X(I,K)=AA*ATN(X(I,K)/SQR(1-X(I,K)*X(I,K))):GOTO 265
258 X(I,K)=X(I,K)+1
259 IF X(I,K)>0 THEN X(I,K)=BB*LOG(X(I,K)):GOTO 265 ELSE 266
260 X(I,K)=X(I,K)+1
261 IF X(I,K)<>0 THEN X(I,K)=100/X(I,K):GOTO 265 ELSE 266
262 X(I,K)=X(I,K)+P5
263 IF X(I,K)>=0 THEN X(I,K)=SQR(X(I,K)):GOTO 265 ELSE 266
264 X(I,K)=X(I,K)*X(I,K)
265 NEXT K:NEXT I:IF E$(0)="" THEN GOSUB 44:GOTO 267
266 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((T%-1)/2)", Row"1+INT(I/A)", Col"I-INT(I/A)", Replicate #"K:GOSUB 5:END
267 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙*** Special Anova Subs ***
350 IF OP=1 THEN 362 ELSE R(I)=(R(I)/Y(I))^2:GOTO 362
360 SM=R(1):GR=SM:FOR I=2 TO AB:IF R(I)<SM THEN SM=R(I) ELSE IF R(I)>GR THEN GR=R(I)
361 NEXT I:IF SM<>0 THEN RR(K)=GR/SM ELSE PRINT #2,:PRINT #2,"Check aborted because one cell has NO VARIATION."
362 RETURN
370 FOR L=1 TO LEN(X$):Z$=MID$(X$,L,1):IF INSTR("-.0123456789",Z$) THEN 372
371 PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":INPUT X$:GOTO 370
372 NEXT L:RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:MXR=10:MXC=10:MXV=400:NEEDVARS=1
402 DIM I,J,K,L,M,N,QP,Z,X$,Y$,Z$,A,B,AB,SM,T,TM,S1,S2,S3,S4,S5,S6
403 DIM VN$(MXC),Q(MXC),T$(10),KIND$(3),E$(3)
404 HD$=" 2 - W A Y   A N O V A,   R e p l i c a t e d ":VER$="(RL,2)"
405 P5=0.5:S$=SPACE$(6):F$="#####.###"
406 T$(1)="Arcsin (Sqrt(p))":T$(2)="Arcsin (Sqrt(p%/100))":T$(3)="Log(X)":T$(4)="Log(X+1)":T$(5)="Reciprocal, 100/X":T$(6)="Reciprocal Plus, 100/(X+1)":T$(7)="Sqrt(X)":T$(8)="Sqrt(X+0.5)":T$(9)="X Squared":T$(10)="None":T$(0)=T$(10)
407 AT$="ANOVA TABLE  ":KIND$(1)="(EQUAL REPLICATIONS)":KIND$(2)="(WEIGHTED MEANS ANALYSIS)":KIND$(3)="(UNWEIGHTED MEANS ANALYSIS)"
408 QB=1:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 3,1,0:K=12
409 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
410 PRINT TAB(K)"║                                                       ║"
411 PRINT TAB(K)"║       This program analyses Factorial Designs.        ║"
412 PRINT TAB(K)"║    It compares MEANS of 2-10 ROWS and 2-10 COLS of    ║"
413 PRINT TAB(K)"║    measurements, & tests for Row x Col INTERACTION.   ║"
414 PRINT TAB(K)"║    Each CELL at Row and Col intersections can have    ║"
415 PRINT TAB(K)"║      2-50 independently replicated measurements.      ║"
416 PRINT TAB(K)"║         Total # of values mustn't exceed 400.         ║"
417 PRINT TAB(K)"║       Data can come from keyboard or disk file.       ║"
418 PRINT TAB(K)"║     Features vetted Free Format entry for numbers.    ║"
419 PRINT TAB(K)"║     Simple editing & data transforms can be done.     ║"
420 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
421 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
422 PRINT TAB(K)"║                                                       ║"
423 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝"
424 PRINT:PRINT"Options:   1.  Equal # of replicates in each cell.◙"TAB(K)"2.  Weighted   Means Analysis for Unequal replicates.◙"TAB(K)"3.  Unweighted Means Analysis for Unequal replicates.◙"TAB(K)"4.  Return to Main Menu."
425 LOCATE ,,1:PRINT
426 INPUT"===>  Which do you want (1-4) ";OP:IF OP<1 OR OP>4 THEN BEEP:GOTO 426  ELSE IF OP=4 THEN 30
427 '◙--- Get Data ---◙ Note: X(I,J) with B rows & A cols, I=1 to AB cells, J=1 to N(I) reps/cell.
428 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="Y" THEN 458
429 '◙--- K/b Entry ---
430 '    Get Datatable Sizes
431 INPUT"No. of Row Levels (2-20) ";X$:B=VAL(X$):IF B<2 OR B>MXR THEN 431
432 INPUT"No. of Column Levels (2-10) ";X$:A=VAL(X$):IF A<2 OR A>MXC THEN 432
433 AB=A*B:DIM N(AB)  'to hold reps/cell
434 IF OP>1 THEN 437 INPUT"No. of Replicates per Cell (2-50) ";R:IF R<2 OR R>50 THEN 434
435 INPUT"No. of Replicates per Cell (2-50) ";X$:R=VAL(X$):IF R<2 OR R>50 THEN 435
436 N2=AB*R:IF N2>MXV THEN BEEP:PRINT "Exceeds max"MXV"measurements!":GOSUB 5:GOTO 400 ELSE N=N2:FOR I=1 TO AB:N(I)=R:NEXT I:GOTO 442
437 FOR J=1 TO B:FOR I=1 TO A
438 PRINT"No. of Replicates in Row"J", Col"I;:INPUT X$:R=VAL(X$):IF R<2 OR R>50 THEN BEEP:PRINT"No, must be 2-50.":GOTO 438
439 IF QD=1 AND N2+R>N THEN PRINT"Oops, too many!  Try again.":GOTO 438
440 N2=N2+R:N((J-1)*A+I)=R:IF R>GR THEN GR=R
441 NEXT I:NEXT J:R=GR:N=N2
442 DIM X(AB,R),NI(A),NJ(B),A(A),AM(A),B(B),BM(B),C(AB),CM(AB),GR(AB),SM(AB),R(AB),Y(AB),V(AB),AP(A),BP(B):IF QD=1 THEN RETURN
443 '◙--- Enter Data ---
444 PRINT:PRINT"Enter Measurements by Cells, with 1 Measurement per Line:":K=0
445 FOR J=1 TO B:FOR I=1 TO A:PRINT"Cell at Row"J", Col"I":":FOR K=1 TO N((J-1)*A+I):PRINT"#"K;:INPUT X$:GOSUB 370:X((J-1)*A+I,K)=VAL(X$):NEXT K:NEXT I:NEXT J:IF OP>1 THEN N=N2
446 '◙--- Show Data ---
447 QB=3:CLOSE:CLS:PRINT"DATA READ WAS:"
448 FOR J=1 TO B:FOR I=1 TO A:PRINT:PRINT"Row "MID$(STR$(J),2)", Col "MID$(STR$(I),2)":"
449 FOR K=1 TO N((J-1)*A+I):PRINT X((J-1)*A+I,K)"  ";:NEXT K:PRINT
450 '◙--- Edit ---
451 INPUT"Edit (C#=Change Datum #, SA=Show All, N=None)";Z$:IF Z$="" OR Z$="N" OR Z$="n" THEN 455
452 IF Z$="SA" OR Z$="sa" THEN 447 ELSE IF LEFT$(Z$,1)="C" OR LEFT$(Z$,1)="c" THEN Z=VAL(MID$(Z$,2)):IF Z>0 AND Z<=N((J-1)*A+I) THEN PRINT"#"Z"="X((J-1)*A+I,Z):GOTO 454
453 PRINT"SILLY.   ";:GOTO 451
454 PRINT"Right Value ";:INPUT X$:IF X$="" THEN 454 ELSE X((J-1)*A+I,Z)=VAL(X$):PRINT"Row "MID$(STR$(J),2)", Col "MID$(STR$(I),2)" is now:":GOTO 449
455 LOCATE CSRLIN-1,1:PRINT SPACE$(60);:LOCATE ,1
456 NEXT I:NEXT J:GOTO 462
457 '◙--- Disk Entry ---
458 QD=1:MNR=2:MNC=1:GOSUB 80:GOSUB 431
459 K=0:FOR I=1 TO AB:FOR J=1 TO N(I):K=K+1:X(I,J)=XX(K,1):NEXT J:NEXT I
460 GOTO 447
461 '◙--- Print Data ---
462 DO$="print this data":GOSUB 20:IF Z$="N" THEN 467 ELSE GOSUB 162:GOSUB 165:IF VN$<>"Y"THEN PRINT #2,"Variable not named." ELSE PRINT #2,"Variable #"KL"= "VN$(KL)"."
463 PRINT #2,:IF T%=0 OR T%=10 THEN PRINT #2,"DATA:" ELSE PRINT #2,"DATA, with Transform ="T$(T%)"."
464 FOR J=1 TO B:FOR I=1 TO A:PRINT #2,:PRINT #2,"Row "MID$(STR$(J),2)", Col "MID$(STR$(I),2)":":FOR K=1 TO N((J-1)*A+I):PRINT #2,X((J-1)*A+I,K);:NEXT K:PRINT #2,:NEXT I:NEXT J:PRINT #2,:GOSUB 160
465 IF T%>0 THEN 505
466 '◙--- Range Check ---
467 DO$="check EQUALITY of CELL DISPERSIONS":GOSUB 20:IF Z$="N" THEN 502
468 GOSUB 43:FOR I=1 TO AB:SM(I)=X(I,1):GR(I)=SM(I):FOR J=2 TO N(I):IF X(I,J)<SM(I) THEN SM(I)=X(I,J) ELSE IF X(I,J)>GR(I) THEN GR(I)=X(I,J)
469 NEXT J:NEXT I:SM=SM(1):FOR I=2 TO AB:IF SM(I)<SM THEN SM=SM(I)
470 NEXT I:QC=SGN(SM)
471 IF OP=1 THEN 476 ELSE CLS:PRINT"Cells have UNEQUAL REPLICATES, so enter d(n) values from BTS 27:":PRINT"d("MID$(STR$(N(1)),2)")";:INPUT Y(1)
472 FOR I=2 TO AB:FOR J=1 TO I-1:IF N(I)=N(J) THEN Y(I)=Y(J):J=I:FLAG=1
473 NEXT J:IF FLAG=1 THEN FLAG=0:GOTO 475
474 PRINT"d("MID$(STR$(N(I)),2)")";:INPUT Y(I)
475 NEXT I
476 CLS:GOSUB 160
477 F1$="#####.#":F2$="####.##":F3$="###.###":BB=0.4342945
478 IF OP=1 THEN PRINT #2,SPACE$(18)"RANGE CHECK OF CELL DISPERSIONS":PRINT #2,:PRINT #2,SPACE$(12)"Range in Cell":PRINT #2,"Transform";
479 IF OP>1 THEN PRINT #2,SPACE$(24)"HARTLEY'S MAX F RATIOS":PRINT #2,:PRINT #2,SPACE$(12)"Approx Variance of Cell":PRINT #2,"Transform";
480 FOR I=1 TO AB:PRINT #2,"   #";USING"## ";I;:NEXT I:PRINT #2,
481 PRINT #2,STRING$(8,"-");:FOR I=1 TO AB:PRINT #2,STRING$(7,"-");:NEXT I:PRINT #2,
482 PRINT #2,"NONE    ";:FOR I=1 TO AB:R(I)=GR(I)-SM(I):GOSUB 350:PRINT #2,USING F1$;R(I);:NEXT I:K=1:GOSUB 360:PRINT #2,
483 IF SM=0 THEN 499
484 IF QC=-1 THEN PRINT #2,"Negative data value(s) preclude Variance-Stabilizing Transforms.":GOTO 499
485 PRINT #2,"SQRT    ";:FOR I=1 TO AB:R(I)=SQR(GR(I))-SQR(SM(I)):GOSUB 350:PRINT #2,USING F2$;R(I);:NEXT I:K=2:GOSUB 360
486 IF QC=0 THEN 489
487 PRINT #2,:PRINT #2,"LOG     ";:FOR I=1 TO AB:R(I)=BB*(LOG(GR(I))-LOG(SM(I))):GOSUB 350:PRINT #2,USING F3$;R(I);:NEXT I:K=3:GOSUB 360
488 PRINT #2,:PRINT #2,"RECI    ";:FOR I=1 TO AB:R(I)=1/SM(I)-1/GR(I):GOSUB 350:PRINT #2,USING F3$;R(I);:NEXT I:K=4:GOSUB 360:GOTO 491
489 PRINT #2,:PRINT #2,"LOG+    ";:FOR I=1 TO AB:R(I)=BB*(LOG(GR(I)+1)-LOG(SM(I)+1)):GOSUB 350:PRINT #2,USING F3$;R(I);:NEXT:K=3:GOSUB 360
490 PRINT #2,:PRINT #2,"REC+    ";:FOR I=1 TO AB:R(I)=1/(SM(I)+1)-1/(GR(I)+1):GOSUB 350:PRINT #2,USING F3$;R(I);:NEXT I:K=4:GOSUB 360
491 PRINT #2,:PRINT #2,:PRINT #2,
492 IF OP=1 THEN PRINT #2,"Using          RANGE RATIOS   (See BTS 31c, with k ="AB"& n = "MID$(STR$(N(1)),2)")"
493 IF OP>1 THEN PRINT #2,"Using          MAX F RATIOS   (See BTS 31, with k ="AB"& nu = "MID$(STR$(INT(N/AB+P5)-1),2)")"
494 PRINT #2,STRING$(63,"-")
495 PRINT #2,USING"ORIGINAL X    "+F$;RR(1):IF QC<0 THEN 499
496 PRINT #2,USING"SQRT(X) "+S$+F$;RR(2)
497 IF QC=1 THEN PRINT #2,USING"LOG(X)  "+S$+F$;RR(3):PRINT #2,USING"100/X   "+S$+F$;RR(4):GOTO 499
498 IF QC=0 THEN PRINT #2,USING"LOG(X+1)"+S$+F$;RR(3):PRINT #2,USING"100/(X+1)     "+F$;RR(4)
499 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 478
500 IF PR=0 THEN GOSUB 160
501 '◙--- Transform? ---
502 IF T%>0 THEN 505 ELSE DO$="transform all the data":GOSUB 20
503 IF Z$="Y" THEN GOSUB 250:IF T%<10 THEN DO$="re-view or print that transformed data":GOSUB 20:IF Z$="Y" THEN CLS:PRINT"TRANSFORMED DATA:":GOTO 448
504 '◙--- Calc (A = # cols,  B = # rows) ---
505 QB=4:CLOSE:GOSUB 43:FOR I=1 TO AB:FOR K=1 TO N(I):C(I)=C(I)+X(I,K):V(I)=V(I)+X(I,K)*X(I,K):NEXT K:CM(I)=C(I)/N(I):S2=S2+V(I):V(I)=(V(I)-C(I)*C(I)/N(I))/(N(I)-1):S5=S5+C(I)*C(I)/N(I):NEXT I
506 FOR I=1TO A:FOR J=I TO AB STEP A:A(I)=A(I)+C(J):NI(I)=NI(I)+N(J):NEXT J:NEXT I
507 K=0:FOR J=1TO B:FOR I=1TO A:B(J)=B(J)+C(I+K):NJ(J)=NJ(J)+N(I+K):NEXT I:K=K+A:NEXT J
508 FOR I=1TO A:T=T+A(I):AM(I)=A(I)/NI(I):S3=S3+A(I)*A(I)/NI(I):NEXT I:FOR J=1TO B:BM(J)=B(J)/NJ(J):S4=S4+B(J)*B(J)/NJ(J):NEXT J:TM=T/N:S1=T*T/N
509 DA=A-1:DB=B-1:DI=(A-1)*(B-1):DT=N-1:DE=DT-DA-DB-DI:IF OP=3 THEN 544
510 SA=S3-S1:SB=S4-S1:SE=S2-S5:ST=S2-S1:SI=ST-SA-SB-SE:VA=SA/DA:VB=SB/DB:VI=SI/DI:VE=SE/DE:VT=ST/DT
511 E1=(SA-DA*VE)/(SA+SE):E2=-(E1>0)*SQR(ABS(E1)):E1=-(E1>0)*E1:E3=(SB-DB*VE)/(SB+SE):E4=-(E3>0)*SQR(ABS(E3)):E3=-(E3>0)*E3:E5=(SI-DI*VE)/(SI+SE):E6=-(E5>0)*SQR(ABS(E5)):E5=-(E5>0)*E5
512 '◙--- Show Results ---
513 CLS:Z$=HD$:GOSUB 46:PRINT:GOSUB 160
514 F3$=" ######.###":F4$=" ###"
515 IF SA>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
516 IF T%=0 OR T%=10 THEN PRINT #2,SPACE$(22)"DATA SUMMARY" ELSE PRINT #2,SPACE$(12)"DATA SUMMARY"S$"Transform = "T$(T%)
517 PRINT #2,:PRINT #2,"# of Row Levels ="B;S$"# of Column Levels ="A
518 F$="=#####.###   ":PRINT #2,:PRINT #2,"Cell Means:":FOR J=1 TO B:FOR I=1 TO A:PRINT #2,"R"MID$(STR$(J),2)",C"MID$(STR$(I),2);USING F$;CM((J-1)*A+I);:NEXT I:PRINT #2,:NEXT J:IF PR=1 THEN PRINT #2, ELSE GOSUB 5
519 PRINT #2,"Cell Variances:":FOR J=1 TO B:FOR I=1 TO A:PRINT #2,"R"MID$(STR$(J),2)",C"MID$(STR$(I),2);USING F$;V((J-1)*A+I);:NEXT I:PRINT #2,:NEXT J:IF PR=1 THEN PRINT #2, ELSE GOSUB 5
520 IF OP=3 THEN PRINT #2,"   Note:  The following are UNWEIGHTED means of cell means."
521 F$="##=#####.###   ":PRINT #2,"Row Means:":FOR J=1 TO B:PRINT #2,"#";USING F$;J;BM(J);:NEXT J:PRINT #2,:GOSUB 5
522 PRINT #2,"Col Means:":FOR I=1 TO A:PRINT #2,"#";USING F$;I;AM(I);:NEXT I:PRINT #2,:PRINT #2,:PRINT #2,USING"Grand Mean =#####.###";TM
523 IF OP=3 THEN PRINT #2,"Harmonic Mean # of Replicates =";HM
524 GOSUB 5:IF PR=0 THEN CLS ELSE PRINT #2,:PRINT #2,
525 V=VA/VE:PRINT #2,SPACE$(12)AT$;KIND$(OP):PRINT #2,STRING$(63,"-")
526 PRINT #2,"   Source"SPACE$(11)"SS"SPACE$(7)"df"S$"MS"S$"Variance Ratio":PRINT #2,STRING$(63,"-")
527 PRINT #2,"Betw Columns  ";USING F2$+"   "+F4$+F2$;SA;DA;VA;
528 PRINT #2,"    F("MID$(STR$(DA),2)","MID$(STR$(DE),2)") =";USING"#####.##";V
529 IF SB>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
530 PRINT #2,"Betw Rows     ";USING F2$+"   "+F4$+F2$;SB;DB;VB;:PRINT #2,"    F("MID$(STR$(DB),2)","MID$(STR$(DE),2)") =";USING"#####.##";VB/VE
531 IF ABS(SI)>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
532 PRINT #2,"Interaction   ";USING F2$+"   "+F4$+F2$;SI;DI;VI;:PRINT #2,"    F("MID$(STR$(DI),2)","MID$(STR$(DE),2)") =";USING"#####.##";VI/VE
533 IF SE>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
534 PRINT #2,"Within Cells  ";USING F2$+"   "+F4$+F2$;SE;DE;VE
535 PRINT #2, STRING$(63,"-"):IF OP=3 THEN 538
536 PRINT #2,USING"Total"+SPACE$(9)+F2$+"   "+F4$+F2$;ST;DT;VT
537 PRINT #2, STRING$(63,"-")
538 PRINT #2,"   Note: Above F values are based on Within Cells MS.":IF OP=3 THEN 541
539 PRINT #2,:PRINT #2,USING"Betw Cols:  Kelley's Epsilon Sq =####.###,    Epsilon = ###.###";E1;E2:PRINT #2,USING"Betw Rows:  Kelley's Epsilon Sq =####.###,    Epsilon = ###.###";E3;E4
540 PRINT #2,USING"Interactn:  Kelley's Epsilon Sq =####.###,    Epsilon = ###.###";E5;E6
541 IF PR=0 THEN PRINT #2,:GOSUB 5:GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 515
542 GOSUB 160:GOTO 10
543 '◙--- Unweighted Means ---
544 FOR I=1 TO AB:HM=HM+1/N(I):NEXT I:HM=AB/HM:FOR J=1 TO B:FOR I=1 TO A:S6=S6+CM((J-1)*A+I)*CM((J-1)*A+I):AP(I)=AP(I)+CM((J-1)*A+I):BP(J)=BP(J)+CM((J-1)*A+I):NEXT I:TP=TP+BP(J):NEXT J
545 S3=0:FOR I=1 TO A:AM(I)=AP(I)/B:S3=S3+AP(I)*AP(I):NEXT I:S3=S3/B:S4=0:FOR J=1 TO B:BM(J)=BP(J)/A:S4=S4+BP(J)*BP(J):NEXT J
546 S4=S4/A:TM=TP/AB:S1=TP*TP/AB:SE=S2-S5:SA=HM*(S3-S1):SB=HM*(S4-S1):SI=HM*(S6-S3-S4+S1):IF SI<0THEN SI=0
547 VA=SA/DA:VB=SB/DB:VI=SI/DI:VE=SE/DE:GOTO 513
548 'end
```

## ANOVU.BAS

```bas
1 '      2-WAY ANOVA, UNREPLICATED  --  ANOVU.BAS  --  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 2,177,10,30:STOP  '=start,printout,re-run,quit.◙◙*** Another go? ***
10 CLOSE:IF QB<>3 THEN IF HEAD=1 THEN LPRINT CHR$(10)STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=4:GOTO 9
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
49 '◙--- Vetted Decoding of FF X(I,J) from X$ ---◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 IF Q(0)=1 THEN 61 ELSE PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
61 INPUT X$:IF X$="" THEN 61 ELSE 51
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I);:INPUT X$:IF UT>0 AND I=M THEN N=M:GOTO 75 ELSE IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙*** Disk Input of X(I,J), N, M, etc ***◙    Needs MNR, MNC, & NEEDVARS.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 A=M:B=N:GOSUB 433 ' set dimensions◙◙---Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 IF NEEDVARS=0 THEN PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 '
93 '
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" THEN STOP
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" or "O" ---
130 IF IO$="I" THEN 134 ELSE STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,MXC) ' or replace MXC ....
139 GOTO 110
159 '◙*** Show/Print Answers ***
160 QB=3:PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HEAD=0 THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HEAD=1
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR L=1 TO M:IF L<10 THEN VN$(L)="Var #"+STR$(L) ELSE VN$(L)="Var #"+MID$(STR$(L),2)
211 NEXT L:RETURN
249 '◙*** Transform Sub ***
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None (leaving data unchanged)"
252 PRINT:LOCATE,,1:AA=57.29578:BB=0.4342945:H=100:P9=0.99999:E$(0)=""
253 INPUT"Which transform (1 to 10)";T%:IF T%=10 THEN 267 ELSE IF T%<1 OR T%>9 THEN PRINT"WHAT?  ";:GOTO 253
254 FOR J=1 TO B:FOR I=1 TO A:ON T% GOTO 256,255,259,258,261,260,263,262,264
255 X(J,I)=X(J,I)/H
256 IF X(J,I)>P9 THEN X(J,I)=P9 ELSE IF X(J,I)<0 THEN 266
257 X(J,I)=SQR(X(J,I)):X(J,I)=AA*ATN(X(J,I)/SQR(1-X(J,I)*X(J,I))):GOTO 265
258 X(J,I)=X(J,I)+1
259 IF X(J,I)>0 THEN X(J,I)=BB*LOG(X(J,I)):GOTO 265 ELSE 266
260 X(J,I)=X(J,I)+1
261 IF X(J,I)<>0 THEN X(J,I)=H/X(J,I):GOTO 265 ELSE 266
262 X(J,I)=X(J,I)+P5
263 IF X(J,I)>=0 THEN X(J,I)=SQR(X(J,I)):GOTO 265 ELSE 266
264 X(J,I)=X(J,I)*X(J,I)
265 NEXT I:NEXT J:IF E$(0)="" THEN GOSUB 44:GOTO 267
266 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((T%-1)/2)", Row"I:GOSUB 5:END
267 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙--- Anova Specials ---
350 SM=R(1):GR=SM:FOR I=2 TO A:IF R(I)<SM THEN SM=R(I) ELSE IF R(I)>GR THEN GR=R(I)
351 NEXT I:RR(K)=GR/SM:PRINT #2,:RETURN
359 '◙--- Inverse of Diag C(M,M) ---
360 D=1:FLAG=0:FOR I=1 TO M:IP(I)=0:NEXT I:FOR I=1 TO M:Z=0:FOR J=1 TO M:IF IP(J)=1 THEN 365
361 FOR K=1 TO M:ON SGN(IP(K)-1)+2 GOTO 363,364,362
362 I=M:J=M:K=M:FLAG=1:GOTO 364
363 IF Z < ABS(C(J,K)) THEN IR=J:IC=K:Z=C(J,K)
364 NEXT K
365 NEXT J:IF FLAG=1 THEN 371
366 IP(IC)=IP(IC)+1:IF IR<>IC THEN D=-D:FOR L=1 TO M:Z=C(IR,L):C(IR,L)=C(IC,L):C(IC,L)=Z:NEXT L
367 KR(I)=IR:KC(I)=IC:P(I)=C(IC,IC):D=D*P(I):IF ABS(P(I))<=0.000001 THEN D=0:I=M:GOTO 371
368 C(IC,IC)=1:FOR L=1 TO M:C(IC,L)=C(IC,L)/P(I):NEXT L
369 FOR K=1 TO M:IF K<>IC THEN Z=C(K,IC):C(K,IC)=0:FOR L=1 TO M:C(K,L)=C(K,L)-C(IC,L)*Z:NEXT L
370 NEXT K
371 NEXT I:IF FLAG=1 OR D=0 THEN 375
372 FOR I=1 TO M:Q=M-I+1:IF KR(Q)=KC(Q) THEN 374 ELSE K=KR(Q):L=KC(Q)
373 FOR J=1 TO M:Z=C(J,K):C(J,K)=C(J,L):C(J,L)=Z:NEXT J
374 NEXT I
375 RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:MXR=20:MXC=10:NEEDVARS=0:QB=1
402 DIM I,J,K,L,M,N,QP,Z,X$,Y$,Z$,ID$,A,B,S,T,TM,S1,S2,S3,S4,S5,S6
403 DIM VN$(MXC),Q(MXC),RR(4),T$(10),E$(3)
404 P5=0.5:S$=SPACE$(6):F$="#####.###"
405 T$(1)="Arcsin (Sqrt(p))":T$(2)="Arcsin (Sqrt(p%/100))":T$(3)="Log(X)":T$(4)="Log(X+1)":T$(5)="Reciprocal, 100/X":T$(6)="Reciprocal Plus, 100/(X+1)":T$(7)="Sqrt(X)":T$(8)="Sqrt(X+0.5)":T$(9)="X Squared":T$(10)="None":T$(0)=T$(10)
406 HD$=" 2 - W A Y   A N O V A,   U n r e p l i c a t e d ":VER$="(RL,2)"
407 QB=4:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
408 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
409 PRINT TAB(K)"║                                                       ║"
410 PRINT TAB(K)"║     Compares MEANS of row & column measurements       ║"
411 PRINT TAB(K)"║  with 2-20 ROWS (persons) & 2-10 COLS (treatments),   ║"
412 PRINT TAB(K)"║   if each person is measured on only 1 treatment.     ║"
413 PRINT TAB(K)"║                                                       ║"
414 PRINT TAB(K)"║        Data can be from keyboard or disk file.        ║"
415 PRINT TAB(K)"║     Features vetted Free Format entry for numbers.    ║"
416 PRINT TAB(K)"║    Simple editing & data transforms are available.    ║"
417 PRINT TAB(K)"║                                                       ║"
418 PRINT TAB(K)"║   Tests assumption of Equal Correlations between all  ║"
419 PRINT TAB(K)"║     pairs of cols (if cols > 2, & if rows >= cols).   ║"
420 PRINT TAB(K)"║                                                       ║"
421 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
422 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
423 PRINT TAB(K)"║                                                       ║"
424 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
425 '◙--- Get Data:  X(J,I) with B rows & A cols ---
426 DO$="enter data from disk":GOSUB 20:QB=1:IF Z$="N" THEN 430
427 '◙--- Disk Entry ---
428 QD=1:MNR=2:MNC=2:GOSUB 80:A=M:B=N:GOSUB 5:GOTO 436
429 '◙--- K/b Entry ---
430 QD=0:INPUT "No. of Rows (2-20) ";X$:B=VAL(X$):IF B<2 OR B>MXR THEN 430
431 INPUT "No. of Columns (2-10) ";X$:A=VAL(X$):IF A<2 OR A>MXC THEN 431
432 DIM X(B,A)
433 DIM N(B),A(A),AM(A),B(B),BM(B),GR(A),SM(A),S(A),R(A),AL(A),BE(B),TU(B),D(A,A),C(A,A),IP(A),P(A),KR(A),KC(A),CM(A-1):IF QD=1 THEN RETURN
434 PRINT"Enter measurements by rows, in Free Format ---":M=A:I=1
435 PRINT"Row"I;:INPUT X$:IF X$="" THEN 435 ELSE GOSUB 50:IF I<B THEN I=I+1:GOTO 435
436 CLS:PRINT"Data read was:":M=A:FOR I=1 TO B:GOSUB 200:NEXT I:GOSUB 5
437 '◙--- Edit ---
438 INPUT "Edit (C#=Change row, SA=Show all, Null=Proceed) ";Z$
439 IF Z$="" THEN 445 ELSE IF Z$="SA" OR Z$="sa" THEN 436
440 LZ$=LEFT$(Z$,1):IF LZ$="C" OR LZ$="c" THEN J=VAL(MID$(Z$,2)):IF J>0 AND J<=B THEN 442
441 PRINT"Sorry. Try again.":GOTO 438
442 PRINT"For row "MID$(STR$(J),2)", enter VARIABLE # (1-"MID$(STR$(A),2)") & new VALUE (Free Format) ";:INPUT X$:IF X$="" THEN 442 ELSE Q=J:I=J:Q(0)=1:M=2:GOSUB 50:J=Q:Q(0)=0:M=A
443 IF Q(1)<1 OR Q(1)>A THEN 441 ELSE X(J,Q(1))=Q(2):PRINT"Row"J"now =";:FOR I=1 TO A:PRINT X(J,I);:NEXT I:PRINT:GOTO 438
444 '◙--- Print Data? ---
445 DO$="print data":GOSUB 20:IF Z$="N" THEN 448 ELSE GOSUB 162:GOSUB 165:IF VN$<>"Y" THEN PRINT #2,"Columns are not named." ELSE FOR I=1 TO A:PRINT #2,"Col"I"= "VN$(I)"  ";:NEXT I:PRINT #2,
446 PRINT #2,:PRINT #2,"Data used:":FOR J=1 TO B:PRINT #2,USING "Row##: ";J;:FOR I=1 TO A:PRINT #2,X(J,I);:NEXT I:PRINT #2,:NEXT J:PRINT #2,:GOSUB 160
447 '◙--- Range Check ---
448 QB=3:PRINT:DO$="check EQUALITY of COLUMN DISPERSIONS"::GOSUB 20:IF Z$="N" THEN 474
449 GOSUB 43:FOR I=1 TO A:SM(I)=X(1,I):GR(I)=SM(I):FOR J=2 TO B:IF X(J,I)<SM(I) THEN SM(I)=X(J,I) ELSE IF X(J,I)>GR(I) THEN GR(I)=X(J,I)
450 NEXT J:NEXT I:SM=SM(1):FOR I=2 TO A:IF SM(I)<SM THEN SM=SM(I)
451 NEXT I:QC=SGN(SM)
452 CLS:GOSUB 160
453 F1$="#####.#":F2$="####.##":F3$="###.###":BB=0.4342945
454 PRINT #2,SPACE$(18)"RANGE CHECK OF COLUMN DISPERSIONS"CHR$(10)CHR$(10)SPACE$(12)"Range in Column":PRINT #2,"Transform";
455 FOR I=1 TO A:PRINT #2,"   #";USING "## ";I;:NEXT I:PRINT #2,
456 PRINT #2,STRING$(8,"-");:FOR I=1 TO A:PRINT #2,STRING$(7,"-");:NEXT I:PRINT #2,
457 PRINT #2,"NONE    ";:FOR I=1 TO A:R(I)=GR(I)-SM(I):PRINT #2,USING F1$;R(I);:NEXT I:K=1:GOSUB 350
458 IF QC=-1 THEN PRINT #2,"Negative data value(s) preclude variance-stabilizing transforms.";:GOTO 465
459 PRINT #2,"SQRT    ";:FOR I=1 TO A:R(I)=SQR(GR(I))-SQR(SM(I)):PRINT #2,USING F2$;R(I);:NEXT I:K=2:GOSUB 350
460 IF QC=0 THEN 463
461 PRINT #2,"LOG     ";:FOR I=1 TO A:R(I)=BB*(LOG(GR(I))-LOG(SM(I))):PRINT #2,USING F3$;R(I);:NEXT I:K=3:GOSUB 350
462 PRINT #2,"RECI    ";:FOR I=1 TO A:R(I)=1/SM(I)-1/GR(I):PRINT #2,USING F3$;R(I);:NEXT I:K=4:GOSUB 350:GOTO 465
463 PRINT #2,"LOG+    ";:FOR I=1 TO A:R(I)=BB*(LOG(GR(I)+1)-LOG(SM(I)+1)):PRINT #2,USING F3$;R(I);:NEXT I:K=3:GOSUB 350
464 PRINT #2,"REC+    ";:FOR I=1 TO A:R(I)=1/(SM(I)+1)-1/(GR(I)+1):PRINT #2,USING F3$;R(I);:NEXT I:K=4:GOSUB 350
465 PRINT #2,:PRINT #2,:PRINT #2,"Using          RANGE RATIOS   (See BTS 31c, with k ="A"& n = "MID$(STR$(B),2)")"
466 PRINT #2,STRING$(63,"-")
467 PRINT #2,USING "ORIGINAL X    "+F$;RR(1):IF QC<0 THEN 471
468 PRINT #2,USING "SQRT(X) "+S$+F$;RR(2)
469 IF QC=1 THEN PRINT #2,USING "LOG(X)  "+S$+F$;RR(3):PRINT #2,USING "100/X   "+S$+F$;RR(4):GOTO 471
470 IF QC=0 THEN PRINT #2,USING"LOG(X+1)"+S$+F$;RR(3):PRINT #2,USING "100/(X+1)     "+F$;RR(4)
471 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 454
472 IF PR=1 THEN PRINT #2,:GOSUB 160
473 '◙--- Transform? ---
474 IF T%=0 THEN DO$="transform all the data":GOSUB 20
475 IF Z$="Y" THEN GOSUB 250:IF T%<10 THEN DO$="re-view or print that transformed data":GOSUB 20:IF Z$="Y" THEN 436
476 '◙--- Calc  (A = M = # cols.   B = N = # rows) ---
477 GOSUB 43:FOR I=1 TO A:S(I)=0:FOR J=1 TO B:A(I)=A(I)+X(J,I):S(I)=S(I)+X(J,I)*X(J,I):NEXT J:AM(I)=A(I)/B:S2=S2+S(I):S(I)=(S(I)-A(I)*AM(I))/(B-1):S3=S3+A(I)*A(I):T=T+A(I):NEXT I
478 FOR J=1 TO B:FOR I=1 TO A:B(J)=B(J)+X(J,I):NEXT I:BM(J)=B(J)/A:S4=S4+B(J)*B(J):NEXT J
479 N=A*B:TM=T/N:S1=T/N*T:S3=S3/B:S4=S4/A:DA=A-1:DB=B-1:DT=N-1:DE=DT-DA-DB:SA=S3-S1:SB=S4-S1:ST=S2-S1:SE=ST-SA-SB:VA=SA/DA:VB=SB/DB:VE=SE/DE:VT=ST/DT
480 E1=(SA-DA*VE)/(SA+SE):E2=-(E1>0)*SQR(ABS(E1)):E1=-(E1>0)*E1:E3=(SB-DB*VE)/(SB+SE):E4=-(E3>0)*SQR(ABS(E3)):E3=-(E3>0)*E3
481 '◙--- Tukey's Non-additivity Test ---
482 S=0:FOR I=1 TO A-1:AL(I)=AM(I)-TM:S=S+AL(I):S5=S5+AL(I)*AL(I):NEXT I:AL(A)=-S:S5=S5+S*S:S=0:FOR J=1 TO B-1:BE(J)=BM(J)-TM:S=S+BE(J):S6=S6+BE(J)*BE(J):NEXT J
483 BE(B)=-S:S6=S6+S*S:FOR J=1 TO B:FOR I=1 TO A:TU(J)=TU(J)+X(J,I)*AL(I):NEXT I:NEXT J
484 S=0:FOR J=1 TO B:S=S+TU(J)*BE(J):NEXT J:SN=S*S/S5/S6:SR=SE-SN:DR=DE-1:VR=SR/DR
485 '◙--- Box's M ---
486 IF A<3 OR B<A THEN 500
487 FOR I=1 TO B:FOR J=1 TO A:FOR K=J TO A:D(J,K)=D(J,K)+X(I,J)*X(I,K):NEXT K:NEXT J:NEXT I
488 FOR J=1 TO A:FOR K=J TO A:D(J,K)=(D(J,K)-A(J)*AM(K))/(B-1):D(K,J)=D(J,K):C(J,K)=D(J,K):C(K,J)=C(J,K):NEXT K:NEXT J:M=A:GOSUB 360:D1=D
489 IF D1<=0 THEN 495 ELSE FOR I=1 TO M:DIAG=DIAG+D(I,I):NEXT I:DIAG=DIAG/M
490 FOR I=1 TO M-1:FOR J=I+1 TO M:ODIAG=ODIAG+D(I,J):NEXT J:NEXT I:ODIAG=ODIAG/(M*(M-1)/2)
491 FOR I=1 TO M:FOR J=1 TO M:IF I=J THEN C(I,I)=DIAG:D(I,I)=DIAG ELSE C(I,J)=ODIAG:D(I,J)=ODIAG
492 NEXT J:NEXT I:GOSUB 360:D2=D
493 BM=(1-B)*LOG(D1/D2):BC=(A*(A+1)^2*(2*A-3))/(6*(B-1)*(A-1)*(A^2+A-4)):BC=(1-BC)*BM:BD=(A^2+A-4)/2
494 '◙--- Hotelling's T Squared ---
495 N=B:M=A-1:FOR I=1 TO N:FOR J=1 TO M:X(I,J)=X(I,J)-X(I,J+1):NEXT J:NEXT I:FOR J=1 TO M:FOR K=J TO M:D(J,K)=0:NEXT K:NEXT J
496 FOR I=1 TO N:FOR J=1 TO M:CM(J)=CM(J)+X(I,J):FOR K=J TO M:D(J,K)=D(J,K)+X(I,J)*X(I,K):NEXT K:NEXT J:NEXT I
497 FOR J=1 TO M:FOR K=J TO M:D(J,K)=(D(J,K)-CM(J)/N*CM(K))/(N-1):D(K,J)=D(J,K):C(J,K)=D(J,K):C(K,J)=C(J,K):NEXT K:NEXT J:FOR J=1 TO M:CM(J)=CM(J)/N:NEXT J:GOSUB 360:IF D=0 THEN 500
498 FOR J=1 TO M:X(1,J)=0:FOR K=1 TO M:X(1,J)=X(1,J)+CM(K)*C(K,J):NEXT K:NEXT J:FOR J=1 TO M:HOT=HOT+X(1,J)*CM(J):NEXT J:HOT=HOT*N:HF=HOT*(N-M)/(N-1)/M
499 '          df for Hot's F = M, N-M◙◙--- Show Results ---
500 CLS:PRINT SPACE$(15)HD$:PRINT STRING$(79,"-"):F3$=" ######.###":F4$=" ###":GOSUB 160
501 IF SA>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
502 PRINT #2,:PRINT #2,"DATA SUMMARY";:IF T%>0 AND T%<10 THEN PRINT #2,S$"Transform = "T$(T%);
503 PRINT #2,S$;"Rows ="B;S$"Columns ="A:PRINT #2,:IF QD=1 THEN IF VN$="Y" THEN PRINT #2,"Columns are:":FOR I=1 TO A:PRINT #2,"#"USING"##=\        \  ";I;VN$(I);:NEXT I:PRINT #2,:PRINT #2,
504 F$="##=#####.###   ":PRINT #2,USING"Grand Mean =#####.###";TM:PRINT #2,:PRINT #2,"Row Means:":FOR J=1 TO B:PRINT #2,"#"USING F$;J;BM(J);:NEXT J:PRINT #2,:PRINT #2,"Col Means:":FOR I=1 TO A:PRINT #2,"#"USING F$;I;AM(I);:NEXT I:PRINT #2,
505 PRINT#2,:PRINT #2,"Col Variances:":FOR I=1 TO A:PRINT #2,"#"USING F$;I;S(I);:NEXT I:PRINT #2,:IF PR=0 THEN GOSUB 5:CLS ELSE PRINT #2,:PRINT #2,
506 PRINT #2,"2-Way ANOVA assumes EQUAL CORRELATIONS between all pairs of TREATMENTS."
507 IF A<3 OR B<A OR D1<=0 THEN 508 ELSE 511
508 PRINT #2,"However, Box's Test for Equal Correlations cannot be done in the present case":PRINT #2,"because ";
509 IF A<3 THEN PRINT #2,"there are only 2 columns." ELSE IF B<A THEN PRINT #2,"there are more columns than rows." ELSE IF D1<=0 THEN PRINT #2,"the dispersion matrix has DET <= 0."
510 PRINT #2,:GOTO 513
511 PRINT #2,:PRINT #2,"Box's Test for Equal Correlations (Compound Symmetry):"
512 PRINT #2,USING"   Det (DMAT)     = #.####^^^^";D1:PRINT #2,USING"   Det (Ave DMAT) = #.####^^^^";D2:PRINT #2,USING"   Box's M =#####.##";BM:PRINT #2,USING"   Chi-Sq  =#####.##       d.f.=###";BC;BD
513 GOSUB 5:IF PR=0 THEN CLS ELSE PRINT #2,:PRINT #2,
514 PRINT #2,SPACE$(12)"ANOVA TABLE  (assumes equal correlations)":PRINT #2,STRING$(63,"-")
515 PRINT #2,"   Source"SPACE$(11)"SS"SPACE$(7)"df"SPACE$(6)"MS"SPACE$(6)"Variance ratio":PRINT #2,STRING$(63,"-"):PRINT #2,"Betw Columns  ";USING F2$+"   "+F4$+F2$;SA;DA;VA;
516 PRINT #2,"    F("MID$(STR$(DA),2)","MID$(STR$(DE),2)") =";USING"#####.##";VA/VE
517 IF SB>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
518 PRINT #2,"Betw Rows     "USING F2$+"   "+F4$+F2$;SB;DB;VB;:PRINT #2,"    F("MID$(STR$(DB),2)","MID$(STR$(DE),2)") ="USING"#####.##";VB/VE:IF SE>1 THEN F2$=" ######.##" ELSE F2$=" ###.#####"
519 PRINT #2,"Residual Error"USING F2$+"   "+F4$+F2$;SE;DE;VE
520 PRINT #2,"   Tukey's":PRINT #2,"Non-Additivity";USING F2$+"   "+F4$+F2$;SN;1;SN;:PRINT #2,"    F(1,"MID$(STR$(DR),2)") =";USING"#####.##";SN/VR
521 PRINT #2,"   Remainder  "USING F2$+"   "+F4$+F2$;SR;DR;VR:PRINT #2,STRING$(63,"-")
522 PRINT #2,USING"Total"+SPACE$(9)+F2$+"   "+F4$+F2$;ST;DT;VT:PRINT #2,STRING$(63,"-")
523 PRINT #2,USING"Betw COLS Kelley's Epsilon SQ =####.###,  Epsilon = ###.###";E1;E2
524 PRINT #2,USING"Betw ROWS Kelley's Epsilon SQ =####.###,  Epsilon = ###.###";E3;E4:PRINT #2,
525 GOSUB 5:IF PR=0 THEN CLS ELSE PRINT #2,
526 PRINT #2,"MULTIVARIATE ANOVA  (doesn't assume equal correlations)":PRINT #2,STRING$(18,"-"):PRINT #2,
527 IF A<3 THEN PRINT #2,"....Can't be done with only 2 columns.":GOTO 539 ELSE IF B<A THEN PRINT #2,"....Can't be done since more columns than rows.":GOTO 539
528 PRINT #2,"TESTING EQUALITY OF COLUMN MEANS:":PRINT #2,"     Hotelling's T-Squared =";USING"#####.###";HOT
529 PRINT #2,"     F ("MID$(STR$(M),2)","MID$(STR$(N-M),2)") =";:PRINT #2,USING"#####.##";HF:PRINT #2,:PRINT #2,USING"     Det (CMAT) = #.####^^^^";D
530 IF PR=0 THEN PRINT #2,:PRINT #2,:PRINT #2,"Do you want to see Means & Dispersion Matrix of CHANGE SCORES,":PRINT #2,"for further analyses of columns";:GOSUB 21:IF Z$="Y" THEN ZC=1:CLS
531 IF ZC=0 THEN 539
532 PRINT #2,:PRINT #2,:PRINT #2,"CHANGE SCORE MEANS:":FOR I=1 TO M:PRINT #2,"#";USING F$;I;CM(I);:NEXT I:PRINT #2,:L=2:MM=M:AD=ABS(D(1,1))
533 IF AD<10 THEN FF$="####.##### " ELSE IF AD<1000 THEN FF$="#####.#### " ELSE FF$="########.# "
534 PRINT #2,:PRINT #2,"CHANGE SCORE DMAT:":FOR I=1 TO MM:PRINT #2,USING"Row##: ";I;:IF MM>5 THEN M=5 ELSE M=MM
535 FOR J=1 TO M:PRINT #2,USING FF$;D(I,J);:NEXT J:PRINT #2,:GOSUB 538
536 IF MM>5 THEN PRINT #2,SPACE$(7);:FOR J=6 TO MM:PRINT #2,USING FF$;D(I,J);:NEXT J:PRINT #2,:GOSUB 538
537 NEXT I:GOTO 539
538 IF PR=1 THEN RETURN ELSE L=L+1:IF L<16 THEN RETURN ELSE GOSUB 5:L=1:RETURN
539 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 501
540 GOSUB 160:GOTO 10
541 ' end
```

## CONTY.BAS

```bas
1 '        CONTINGENCY TABLES  ---  CONTY.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 405,177 :STOP  '=start,printout.◙◙--- Another go? ---
10 CLOSE:IF HEAD=1 THEN LPRINT" ":LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(T$(OP))\2);T$(OP);TAB(73)VER$:PRINT #2,STRING$(79,61):HEAD=1
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
199 '◙*** Show a Row of Data ***
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT USING"#######";X(I,J);:NEXT J:PRINT:RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙                  *** Contingency Specials ***◙---  Ln X!  ---
350 LF=0:IF X>1 THEN FOR J=2 TO X:LF=LF+LOG(J):NEXT J
351 RETURN
359 '◙---  L Tail Prob ---
360 CP=P(A):FOR I=1 TO A-1:I1=I-1:P(A-I)=P(A-I1)*(A-I1)*(D-I1)/(B+I)/(C+I):CP=CP+P(A-I):IF P(A-I)<=1.000000e-7 THEN I=A
361 NEXT I:RETURN
370 P(0)=P(1)*(D-A)/R1/C1:RETURN
379 '◙--- R Tail Prob ---
380 FOR I=1 TO AA-2:J=I-1:IF DD=0 THEN 382
381 PP(AA-I)=PP(AA-J)*(AA-J)*(DD-J)/(BB+I)/(CC+I):CQ=CQ+PP(AA-I):GOTO 383
382 PP(AA-I)=PP(AA-J)*(AA-J)/(BB+I)/(CC+I):CQ=CQ+PP(AA-I)
383 IF CQ>CP THEN CQ=CQ-PP(AA-I):I=AA
384 NEXT I:RETURN
389 '◙--- Screen Headers ---
390 CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(T$(OP))\2);:COLOR 0,7:PRINT " "T$(OP)" ";:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 3,1,0:K=12:RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-K:MXR=20:MXC=10:HEAD=0:VER$="(RL,4)"
402 DIM X(MXR,MXC),E(MXR,MXC),R(MXR),C(MXC),XI(MXR),XJ(MXC),P(100),PP(100),T$(4)
403 T$(1)="CHI-SQUARED FOR 2 x 3 OR LARGER TABLES":T$(2)="YATES' CHI-SQUARED FOR 2 x 2 TABLES":T$(3)="FISHER'S EXACT TEST FOR 2 x 2 TABLES":T$(4)="CHI-SQUARED GOODNESS OF FIT, R x 1 TABLES"
404 MA$=", & MEASURES OF ASSOCIATION"
405 QB=1:QBB=QB:CLOSE:CLS:Z$="M E N U   F O R   C O N T I N G E N C Y   T A B L E S":GOSUB 46
406 LOCATE 3,8:PRINT"Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT STRING$(80,196)
407 LOCATE 6,1:K=6:PRINT"◙"TAB(K)"1.  "T$(1)MA$".◙◙"TAB(K)"2.  "T$(2)MA$".◙◙"TAB(K)"3.  "T$(3)"."
408 PRINT"◙"TAB(K)"4.  "T$(4)".◙◙"TAB(K)"5.  Return to Main Menu."
409 PRINT:PRINT"     Note:  Data entry only from keyboard for these analyses.":PRINT
410 LOCATE,K-3:INPUT"===>  Option (1-5) ";OP:ON OP GOTO 467,452,412,553,30:BEEP:PRINT"No, please enter 1, 2, 3, 4, or 5.":GOTO 410
411 '◙--- Fisher's Tests ---
412 QB=1:GOSUB 390
413 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
414 PRINT TAB(K)"║                                                       ║"
415 PRINT TAB(K)"║  This computes probabilities for cell frequencies in  ║"
416 PRINT TAB(K)"║        2 x 2 contingency tables, provided that        ║"
417 PRINT TAB(K)"║    both 1st row total & 1st column total are < 101.   ║"
418 PRINT TAB(K)"║                                                       ║"
419 PRINT TAB(K)"║ It compares PROPORTIONS in 2 random binomial samples, ║"
420 PRINT TAB(K)"║  or seeks ASSOCIATION between 2 qualities tallied as  ║"
421 PRINT TAB(K)"║       matched observations from 1 random sample.      ║"
422 PRINT TAB(K)"║                                                       ║"
423 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
424 PRINT TAB(K)"║                                                       ║"
425 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
426 PRINT:PRINT TAB(9)"Enter your 2 x 2 table of cell counts by ROWS, in Free Format,":PRINT TAB(9)"with the first cell (A) the smallest or equal smallest count.":PRINT
427 INPUT"Row 1 ";X$:IF X$="" THEN 427 ELSE I=1:M=2:GOSUB 50:A=X(1,1):B=X(1,2)
428 INPUT"Row 2 ";X$:IF X$="" THEN 428 ELSE I=2:GOSUB 50:C=X(2,1):D=X(2,2):R1=A+B:R2=C+D:C1=A+C:C2=B+D:N=R1+R2
429 IF R1>100 THEN BEEP:PRINT"Sorry, your Row 1 Total exceeds 100.":GOTO 11
430 IF C1>100 THEN BEEP:PRINT"Sorry, your Column 1 Total exceeds 100.":GOTO 11
431 GOSUB 43:X=R1:GOSUB 350:LT=LF:X=R2:GOSUB 350:LT=LT+LF:X=C1:GOSUB 350:LT=LT+LF:X=C2:GOSUB 350:LT=LT+LF:X=N:GOSUB 350:LT=LT-LF:X=A:GOSUB 350
432 LB=LF:X=B:GOSUB 350:LB=LB+LF:X=C:GOSUB 350:LB=LB+LF:X=D:GOSUB 350:LB=LB+LF:P(A)=EXP(LT-LB):CP=P(A):IF A=0 THEN 436 ELSE IF A=1 THEN 435
433 FOR I=1 TO A-1:J=I-1:P(A-I)=P(A-J)*(A-J)*(D-J)/(B+I)/(C+I):CP=CP+P(A-I):IF P(A-I)<=1.000000e-7 THEN I=A:FLAG=1
434 NEXT I:IF FLAG=1 THEN FLAG=0:GOTO 436
435 P(0)=P(1)*(D-A)/R1/C1:CP=CP+P(0)
436 IF R1=R2 OR C1=C2 THEN CQ=CP:GOTO 444 ELSE IF A<R1*C1/N THEN 442
437 ' --- If A > EXP ---
438 CP=1-CP+P(A):IF CP>0.5 THEN CQ=CP:GOTO 444
439 CQ=0:FOR I=0 TO A:CQ=CQ+P(I):IF CQ>CP THEN CQ=CQ-P(I):I=A
440 NEXT I:GOTO 444
441 ' --- If A < EXP, calc R Tail ---
442 IF R1<C1 THEN AA=R1 ELSE AA=C1
443 BB=R1-AA:CC=C1-AA:DD=R2-CC:LB=0:X=AA:GOSUB 350:LB=LF:X=BB:GOSUB 350:LB=LB+LF:X=CC:GOSUB 350:LB=LB+LF:X=DD:GOSUB 350:LB=LB+LF:PP(AA)=EXP(LT-LB):CQ=PP(AA):IF CQ<CP THEN GOSUB 380 ELSE CQ=0
444 LOCATE ,1:PRINT SPACE$(10);:LOCATE ,1:GOSUB 160:F$="#### ####":CQ=CP+CQ:IF CQ>1 THEN CQ=1
445 PRINT #2,"DATA:":PRINT #2,USING F$;A;B:PRINT #2,USING F$;C;D
446 PRINT #2,:PRINT #2,USING"Probability (this particular table) =###.#!";P(A)*100;"%"
447 PRINT #2,USING"1-Tail Probability (this or any more extreme table) = ###.#!";CP*100;"%":PRINT #2,USING"2-Tail Probability (this or any less likely table)  = ###.#!";CQ*100;"%"
448 ' --- Printout? ---
449 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 445
450 GOSUB 160:GOTO 10
451 '◙--- Yates' Chi-Sq ---
452 QB=1:GOSUB 390
453 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
454 PRINT TAB(K)"║                                                       ║"
455 PRINT TAB(K)"║   This computes probabilities for cell frequencies    ║"
456 PRINT TAB(K)"║              in 2 x 2 contingency tables.             ║"
457 PRINT TAB(K)"║                                                       ║"
458 PRINT TAB(K)"║ It compares PROPORTIONS in 2 random binomial samples, ║"
459 PRINT TAB(K)"║   or seeks ASSOCIATION between 2 qualities tallied    ║"
460 PRINT TAB(K)"║     as matched observations from 1 random sample.     ║"
461 PRINT TAB(K)"║                                                       ║"
462 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
463 PRINT TAB(K)"║                                                       ║"
464 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
465 R=2:C=2:LC=1:GOTO 486
466 '◙--- Ordinary Chi-Sq ---
467 QB=1:GOSUB 390
468 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
469 PRINT TAB(K)"║                                                       ║"
470 PRINT TAB(K)"║   This computes probabilities for cell frequencies    ║"
471 PRINT TAB(K)"║              in large contingency tables.             ║"
472 PRINT TAB(K)"║                                                       ║"
473 PRINT TAB(K)"║     It compares PROPORTIONS in 1 or more samples      ║"
474 PRINT TAB(K)"║         of counts of various kinds, or seeks          ║"
475 PRINT TAB(K)"║  ASSOCIATION between 2 multinomial qualities tallied  ║"
476 PRINT TAB(K)"║     as matched observations from 1 random sample.     ║"
477 PRINT TAB(K)"║                                                       ║"
478 PRINT TAB(K)"║  Entries are vetted & can be corrected if necessary.  ║"
479 PRINT TAB(K)"║                                                       ║"
480 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
481 PRINT TAB(K)"║                                                       ║"
482 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1:PRINT
483 PRINT"How many ROWS (2-"RIGHT$(STR$(MXR),2)") ";:INPUT R:IF R<2 OR R>MXR THEN BEEP:GOTO 483
484 PRINT"How many COLS (2-"RIGHT$(STR$(MXC),2)") ";:INPUT C:IF C<2 OR C>MXC THEN BEEP:GOTO 484
485 IF C<10 THEN LC=1 ELSE LC=2
486 PRINT:PRINT"Enter"STR$(R)" x "RIGHT$(STR$(C),LC)" Contingency Table by ROWS (in Free Format):":PRINT:M=C:I=1
487 PRINT"Row"I;:INPUT X$:IF X$="" THEN 487 ELSE GOSUB 50:I=I+1:IF I<=R THEN 487
488 IF OP=2 THEN 494 ELSE CLS:PRINT"DATA READ WAS:":PRINT:PRINT SPACE$(7);:FOR J=1 TO C:PRINT USING"  Col #";J;:NEXT J:PRINT:FOR I=1 TO R:GOSUB 200:IF I=10 THEN GOSUB 5
489 NEXT I
490 DO$="make any CHANGES to those values":GOSUB 20:IF Z$="N" THEN 494
491 INPUT"Change which ROW ";RR:IF RR<1 OR RR>R THEN 491
492 INPUT"Change which COL ";CC:IF CC<1 OR CC>C THEN 492
493 PRINT"Present value ="X(RR,CC);:INPUT"   Correct value ";X(RR,CC):IF OP=4 THEN 570 ELSE 488
494 GOSUB 43:N=0:FOR I=1 TO R:R(I)=0:FOR J=1 TO C:R(I)=R(I)+X(I,J):NEXT J:N=N+R(I):NEXT I:FOR J=1 TO C:C(J)=0:FOR I=1 TO R:C(J)=C(J)+X(I,J):NEXT I:NEXT J
495 GOSUB 538:CLS:F1$="#####  ":F2$=" :#####":F3$="#####.#"
496 '  --- Answers ---
497 GOSUB 160
498 PRINT #2,"OBSERVED & EXPECTED VALUES, CONTRIBUTIONS TO CHI-SQUARED, & MARGINAL TOTALS.":PRINT #2,SPACE$(17)".... Any E < 5 will be marked `---' ...."
499 CH=0:FOR I=1 TO R:X=R(I)/N
500 PRINT #2,:PRINT #2,USING"Row##: ";I;:FOR J=1 TO C:PRINT #2,USING F1$;X(I,J);:NEXT J:PRINT #2,USING F2$;R(I):PRINT #2,"Expec: ";
501 FOR J=1 TO C:E(I,J)=X*C(J)
502 IF E(I,J)>=5 THEN PRINT #2,USING F3$;E(I,J); ELSE PRINT #2," ---";USING"#.#";E(I,J);
503 NEXT J:PRINT #2,:PRINT #2,"Contr: ";
504 IF OP=2 THEN 506
505 FOR J=1 TO C:T=(X(I,J)-E(I,J))^2/E(I,J):CH=CH+T:PRINT #2,USING F3$;T;:NEXT J:PRINT #2,:GOTO 507
506 FOR J=1 TO C:T=(ABS(X(I,J)-E(I,J))-0.5)^2/E(I,J):CH=CH+T:PRINT #2,USING F3$;T;:NEXT J:PRINT #2,
507 IF I/5=INT(I/5) THEN GOSUB 5
508 NEXT I
509 FOR J=1 TO C+2:PRINT #2,STRING$(7,".");:NEXT J:PRINT #2,:PRINT #2,"Total: ";:FOR J=1 TO C:PRINT #2,USING F1$;C(J);:NEXT J:PRINT #2,USING F2$;N
510 '   --- Larger Tables ---
511 IF OP=2 THEN 517 ELSE PRINT #2,:PRINT #2,USING"CHI-SQUARED =#####.##,    d.f. =####";CH;(R-1)*(C-1):GOSUB 5:IF R<C THEN X=R-1 ELSE X=C-1
512 PRINT #2,USING"Cramer's C  =###.####";SQR(CH/(X*N)):GOSUB 548
513 '    ---  Printout?  ---
514 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 498
515 GOSUB 160:GOTO 10
516 '   --- Yates' Phi, Phi-Limits, Yule's Q ---
517 TP=X(1,1)*X(2,2)-X(1,2)*X(2,1):PH=TP/SQR(R(1)*R(2))/SQR(C(1)*C(2)):TM=R(1):OT=C(1):IF R(2)>TM THEN TM=R(2):OT=C(2)
518 IF C(1)>TM THEN TM=C(1):OT=R(1)
519 IF C(2)>TM THEN TM=C(2):OT=R(2)
520 PU=SQR(((N-TM)/TM)*(OT/(N-OT))):PL=-SQR(((N-TM)/TM)*((N-OT)/OT)):YQ=TP/(X(1,1)*X(2,2)+X(1,2)*X(2,1))
521 '  --- Odds Ratio & S.E. LN ODS (SO) ---
522 K=0:IF X(1,1)=0 OR X(2,2)=0 THEN K=1:OD=0 ELSE IF X(1,2)=0 OR X(2,1)=0 THEN K=2
523 IF K=0 THEN OD=X(1,1)*X(2,2)/X(1,2)/X(2,1):SO=SQR(1/X(1,1)+1/X(1,2)+1/X(2,1)+1/X(2,2)):GOTO 525
524 SO=SQR(1/(X(1,1)+0.5)+1/(X(1,2)+0.5)+1/(X(2,1)+0.5)+1/(X(2,2)+0.5))
525 PRINT #2,
526 PRINT #2,USING"Yates' CHI-SQ   =#####.##,   d.f. = 1";CH:GOSUB 5
527 PRINT #2,USING"PHI Coefficient =###.####";PH
528 PRINT #2,USING"PHI Limits here =###.####  !####.####";PL;"&";PU
529 PRINT #2,USING"Yule's Q        =###.####";YQ
530 PRINT #2,USING"S.E. of Q       =###.####";(1-YQ^2)*0.5*SO
531 PRINT #2,
532 IF K=2 OR OD>1.000000e+8 THEN PRINT #2,"Odds Ratio      = Infinity":PRINT #2,"Ln Odds Ratio   = Infinity":GOSUB 548:GOTO 514
533 IF K=0 AND OD>100 THEN PRINT #2,USING"Odds Ratio      =########.##";OD:GOTO 535
534 IF K=0 THEN PRINT #2,USING"Odds Ratio      =######.####";OD
535 IF K=0 THEN PRINT #2,USING"Ln Odds Ratio   =######.####";LOG(OD):PRINT #2,USING "S.E. Ln Odds    =######.####";SO:GOSUB 548:GOTO 514
536 PRINT #2,USING"Odds Ratio      =#######.####";OD:PRINT #2,"Ln Odds Ratio   = Minus Infinity":GOSUB 548:GOTO 514
537 '   ---  Lambda ---
538 FOR I=1 TO R:XI(I)=X(I,1):FOR J=2 TO C:IF X(I,J)>XI(I) THEN XI(I)=X(I,J)
539 NEXT J:NEXT I
540 FOR J=1 TO C:XJ(J)=X(1,J):FOR I=2 TO R:IF X(I,J)>XJ(J) THEN XJ(J)=X(I,J)
541 NEXT I:NEXT J
542 RM=R(1):FOR I=2 TO R:IF R(I)>RM THEN RM=R(I)
543 NEXT I
544 CM=C(1):FOR J=2 TO C:IF C(J)>CM THEN CM=C(J)
545 NEXT J
546 TA=0:FOR J=1 TO C:TA=TA+XJ(J):NEXT J:TA=TA-RM:TB=0:FOR I=1 TO R:TB=TB+XI(I):NEXT I:TB=TB-CM:BA=N-RM:BB=N-CM
547 RETURN
548 PRINT #2,
549 PRINT #2,USING"Lambda (A), for predicting ROW =##.####";TA/BA
550 PRINT #2,USING"Lambda (B), for predicting COL =##.####";TB/BB
551 PRINT #2,USING"Lambda (Symmetric Version)     =##.####";(TA+TB)/(BA+BB):RETURN
552 '◙---  R x 1  Tables  ---
553 QB=1:GOSUB 390:F1$="         OBSERVED    EXPECTED ":F2$=": ######    ######.###"
554 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
555 PRINT TAB(K)"║                                                       ║"
556 PRINT TAB(K)"║        This compares a column of 2-20 OBSERVED        ║"
557 PRINT TAB(K)"║        cell counts with their EXPECTED values.        ║"
558 PRINT TAB(K)"║                                                       ║"
559 PRINT TAB(K)"║    It computes a Chi-Squared value which tells the    ║"
560 PRINT TAB(K)"║  probability of the differences being due to chance.  ║"
561 PRINT TAB(K)"║                                                       ║"
562 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
563 PRINT TAB(K)"║                                                       ║"
564 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
565 PRINT:PRINT"Your R x 1 Frequency Table is to be entered as R rows, each with 2 entries ---◙an OBSERVED count (whole number), & its EXPECTED value (up to 3 decimal places).":PRINT
566 'PRINT"Observed counts will be whole numbers, but expected values can have◙up to 3 decimal places if necessary.":?
567 PRINT"How many rows (2-"RIGHT$(STR$(MXR),2)") ";:INPUT R:IF R<2 OR R>MXR THEN BEEP:GOTO 567
568 PRINT"Enter OBSERVED & EXPECTED frequencies (in Free Format):":C=2:M=C:I=1
569 PRINT"Row"I;:INPUT X$:IF X$=""THEN 569 ELSE GOSUB 50:I=I+1:IF I<=R THEN 569
570 SO=0:SE=0:FOR I=1 TO R:SO=SO+X(I,1):SE=SE+X(I,2):NEXT I
571 CLS:PRINT"DATA READ WAS:":PRINT:PRINT F1$:FOR I=1 TO R:PRINT USING"Row###"+F2$;I;X(I,1);X(I,2):IF I=15 THEN GOSUB 5
572 NEXT I
573 PRINT STRING$(28,"."):PRINT USING"Totals"+F2$;SO;SE
574 IF ABS(SO-SE)>0.0009 THEN BEEP:PRINT:PRINT"Note:  OBSERVED & EXPECTED TOTALS DIFFER.  FIX THIS!!!◙":GOTO 491
575 DO$="make any CHANGES to those values":GOSUB 20:IF Z$="Y" THEN 491
576 CH=0:FOR I=1 TO R:P(I)=(X(I,1)-X(I,2))^2/X(I,2):CH=CH+P(I):NEXT I:IF PR=0 THEN CLS:GOSUB 160
577 '   --- Show data & answers ---
578 PRINT #2,F1$+"  CONTRIB TO CHI-SQ"
579 FOR I=1 TO R:PRINT #2,USING"Row###"+F2$+"    ######.##";I;X(I,1);X(I,2);P(I):IF I=15 THEN GOSUB 5
580 NEXT I
581 PRINT #2,STRING$(28,"."):PRINT #2,USING"TOTALS"+F2$;SO;SE
582 PRINT #2,:PRINT #2,USING"CHI-SQUARED =#####.##";CH:PRINT #2,"NOTE: The d.f. depend on the number of constraints when calculating the E's."
583 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 578
584 IF PR=1 THEN GOSUB 160:GOTO 10
585 'end
```

## COREL.BAS

```bas
1 '           CORRELATIONS  ---  COREL.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙◙*** Redirect to Block ***
9 ON QB GOTO 400,177,412:STOP  '=start,printout,etc - CLOSE (exc 177)◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 GOTO 400
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=4:GOTO 9
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.◙    Signals NEG=1 for Spearman's r.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$):IF X(I,J)<0 THEN NEG=1
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row."
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I-KN(Q-1));:INPUT X$:IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 AND ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 IF NEEDVARS=0 THEN PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 IF NEEDVARS=2 THEN PRINT"This test analyses only 2 column variables.":ND=M-2
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT:COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:PRINT SPACE$(15):M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" ***
130 IF IO$="O" THEN STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5:DIM X(MXR,2):GOTO 110 ' MXC replaced
159 '◙--- Show/Print Answers ---
160 QB=1:PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
189 '◙--- Print Data ---◙   Needs X( , ) & NEEDVARS=1 or 2: if=1, then NS,N( ),KN( ,1) else J,K,VN$( ).
190 DO$="print all the data used":GOSUB 20:IF Z$="N" THEN 193
191 PRINT #2,STRING$(2,10)"DATA USED: ":IF NEEDVARS=1 THEN FOR J=1 TO NS:PRINT #2,"Sample "CHR$(J+64)":":FOR I=1 TO N(J):PRINT #2,X(I+KN(J-1),1);:NEXT I:PRINT #2,:NEXT J:GOTO 193
192 IF NEEDVARS=2 THEN PRINT #2,VN$(1)", & "VN$(2):FOR I=1 TO N:PRINT #2,X(I,1);X(I,2),:NEXT I
193 PR=0:PRINT #2,:CLOSE:RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
211 NEXT L:RETURN
249 '◙--- Transform Sub ---
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None (leaving data unchanged)"
252 PRINT"◙"TAB(10)"Negative codes reverse transforms (e.g. -3 = Antilog)◙":LOCATE,,1
253 INPUT"Which transform (+/- 1 to 9, or 10)";T%:IF T%=10 THEN 273 ELSE IF ABS(T%)<1 OR ABS(T%)>9 THEN PRINT"WHAT?  ";:GOTO 253
254 IF M=1 THEN NT=1:Q(1)=1:GOTO 257 ELSE PRINT"How many variables are to have this transform (max"STR$(M)")";:INPUT NT:IF NT<1 OR NT>M THEN 254 ELSE IF NT=M THEN FOR J=1 TO M:Q(J)=J:NEXT J:GOTO 257
255 IF NT=1 THEN INPUT"Which variable # ";X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN PRINT"Silly":GOTO 255 ELSE 257
256 PRINT"Which"NT"variables (#'s in Free Format)";:INPUT X$:I=1:MM=M:M=NT:Q(0)=1:GOSUB 50:Q(0)=0:M=MM:FOR J=1 TO NT:IF Q(J)>0 AND Q(J)<=M THEN NEXT J ELSE PRINT"Value"J"is out-of-bounds.  Try again.":GOTO 256
257 GOSUB 43:A=57.29578:B=0.4342945:Z=0:U=1:H=100:P5=0.5:P9=0.99999:E$(0)=""
258 FOR J=1 TO NT:K=Q(J):FOR I=1 TO N:ON T%+10 GOTO 269,270,270,267,267,265,265,262,262,39,260,259,264,263,267,266,269,268,270
259 X(I,K)=X(I,K)/H
260 IF X(I,K)>P9 THEN X(I,K)=P9 ELSE IF X(I,K)<Z THEN 272
261 X(I,K)=SQR(X(I,K)):X(I,K)=A*ATN(X(I,K)/SQR(U-X(I,K)*X(I,K))):GOTO 271
262 IF X(I,K)>=Z THEN X(I,K)=(SIN(X(I,K)/A))^2:IF T%=-U THEN 271 ELSE X(I,K)=H*X(I,K):GOTO 271 ELSE T%=U:GOTO 272
263 X(I,K)=X(I,K)+U
264 IF X(I,K)>Z THEN X(I,K)=B*LOG(X(I,K)):GOTO 271 ELSE 272
265 X(I,K)=EXP(X(I,K)/B):IF T%=-3 THEN 271 ELSE X(I,K)=X(I,K)-U:GOTO 271
266 X(I,K)=X(I,K)+U
267 IF X(I,K)<>Z THEN X(I,K)=H/X(I,K):IF T%=-6 THEN X(I,K)=X(I,K)-U:GOTO 271 ELSE 271 ELSE 272
268 X(I,K)=X(I,K)+P5
269 IF X(I,K)>=Z THEN X(I,K)=SQR(X(I,K)):GOTO 271 ELSE T%=7:GOTO 272
270 X(I,K)=X(I,K)*X(I,K):IF T%=-8 THEN X(I,K)=X(I,K)-P5
271 NEXT I:NEXT J:IF E$(0)=""THEN GOSUB 44:GOTO 273
272 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((ABS(T%)-1)/2)", Row"I:GOSUB 5:END
273 RETURN
279 '◙--- Rank & Tie Corr Sub ---◙    Ranks input X(II,Q), II=1 to NN, Q= a constant (e.g. 0).◙    Returns ranks in RK(II), ave ranks if tied, & usually tie correction (TC).◙    Alters II, JJ, LK(II), SM, EQ, AR!, & KT.
280 ERASE RK,LK:DIM RK(NN),LK(NN):FOR II=1 TO NN:IF RK(II)>0 THEN 284 ELSE SM=0:EQ=0:FOR JJ=1 TO NN:IF X(JJ,Q)<X(II,Q) THEN SM=SM+1 ELSE IF X(JJ,Q)=X(II,Q) THEN EQ=EQ+1:RK(JJ)=-1
281 NEXT JJ:IF EQ<2 THEN RK(II)=SM+1:GOTO 284
282 AR!=SM+(EQ+1)/2:FOR JJ=II TO NN:IF RK(JJ)=-1 THEN RK(JJ)=AR!
283 NEXT JJ
284 NEXT II:IF NO.TC THEN RETURN
285 '  Tie Correction
286 TC=0:FOR II=1 TO NN-1:IF LK(II) THEN 288 ELSE KT=1:FOR JJ=II+1 TO NN:IF ABS(RK(II)-RK(JJ))<0.1 THEN KT=KT+1:LK(JJ)=1
287 NEXT JJ:IF KT>1 THEN TC=TC+KT*KT*KT-KT
288 NEXT II:TC=TC/12:RETURN  'for Spearman & Rank Biserial.
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙--- Number Sorter ---◙Convert numbers to sortable strings, then sort string array by:◙      DEF SEG: STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(n,x$(0))◙where n = no. of elements, & x$(0) = 1st element of string array (J. Dorner).
350 PRINT:INPUT"Maximum number of decimal places in your data (0-5)";NDP:IF NDP<0 OR NDP>5 THEN 350 ELSE I=NDP-(NDP>0)+(NDP=5):DP#=10.#^I    'DP enhanced if NDP=1-4 to ensure accurate estimates of medians
351 DEF FNNUM2STR$(X#,DP#,MXDIG%)=MID$("-0",(X#<0)+2,1)+RIGHT$(STRING$(MXDIG%,"0")+MID$(STR$(INT(X#*DP#)),2),MXDIG%)'◙    X=number, DP=dec factor, MXDIG=max digits/number (L. Rosenfelder)
352 DEC=10^(NDP+1):DEF FNROUND(X)=INT(X*DEC+0.5)/DEC  'Rounds to 1 dec more than in data entered.
353 DIM STRSORT%(33):RESTORE 354:FOR I=0 TO 33:READ STRSORT%(I):NEXT I:DEF SEG:STRSORT=VARPTR(STRSORT%(0)):RETURN
354 DATA &H5590,&HEC8B,&H1BA,&H8B00,&H876,&HC8B,&H7449,&H8B30
355 DATA &H676,&HDB33,&H1C8A,&H5646,&H8B51,&H37C,&H348B,&HCB8B
356 DATA &H5756,&HA6F3,&H5E5F,&HC7E,&HCB8B,&H58A,&H88A4,&HFF44
357 DATA &HF8E2,&HD233,&H5E59,&H4646,&HE246,&HBDC,&H74D2,&H5DC5
358 DATA &H4CA,&H0
359 '◙               --- Corel Specials ---
360 ZZ$=MID$(STR$(ZZ),2):IF OP<9 OR Q9=0 THEN RETURN
361 PRINT #2,"r("ZZ$")=";USING F$+"     ";R(I);:RETURN
362 ZZ=I:GOSUB 360:PRINT #2,"r("ZZ$")";:RETURN
363 R=(R(I)-R(J)*R(K))/SQR((1-R(J)*R(J))*(1-R(K)*R(K))):RETURN'◙◙--- Set binomial X(I,B) = 0 or 1 ---
364 X=X(1,B):FOR I=2 TO N:IF X(I,B)>X THEN I=N ELSE IF X(I,B)<X THEN X=X(I,B):I=N
365 NEXT I:NB=0:FOR I=1 TO N:IF X(I,B)=X THEN X(I,B)=0 ELSE X(I,B)=1:NB=NB+1
366 NEXT I:RETURN'◙◙--- Pearson r ---
370 A=0:B=0:C=0:D=0:E=0:FOR I=1 TO N:A=A+X(I,1):B=B+X(I,1)*X(I,1):C=C+X(I,2):D=D+X(I,2)*X(I,2):E=E+X(I,1)*X(I,2):NEXT I:B=B-A*A/N:D=D-C*C/N:E=E-A*C/N:R=E/SQR(B*D):DF=N-2:RQ=1-R*R:IF RQ>0 THEN T=R*SQR(DF/RQ):RETURN ELSE T=100000.:RETURN
374 '◙--- Z for given P (Hastings p 191) ---
375 ET=SQR(LOG(1/P^2)):Z=ET-((2.30753+ET*0.27061)/(1+ET*(0.99229+ET*0.04481))):H=2.718282^(Z*Z/-2)/2.506628:RETURN'◙◙--- Fisher's z ---
380 FZ=LOG((1+R)/(1-R))/2:SEZ=1/SQR(W):RETURN
381 Z=EXP(2*Z):RR=(Z-1)/(Z+1):RETURN
382 '◙--- Input & Validate Correlations for Partials ---
383 GOSUB 362:INPUT X$:GOSUB 390:IF L=501 OR L=-1 THEN 383 ELSE RETURN
384 '◙--- Input Correlations for Ave & Compares ---◙  Needs I, J.  Uses X$, L.  Returns X(I,J) & N.
385 INPUT;" r: ",X$:IF X$="" THEN 385 ELSE IF X$="/" THEN N=I-1:GOTO 387
386 GOSUB 390:IF L=501 OR L=-1 THEN 385 ELSE X(I,J)=VAL(X$)
387 RETURN
389 '◙--- Validate X$ as a number (uses L) ---
390 FOR L=1 TO LEN(X$):IF INSTR("+-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"  That contains a `non-numeric' entry.  Please re-do.":L=500
391 NEXT L:IF L=501 OR J=2 AND (OP=7 OR OP=8) THEN 393
392 IF VAL(X$)<=-1 OR VAL(X$)>=1 THEN BEEP:PRINT"  Correlations must be between -1 and +1.":L=-1
393 RETURN
394 '◙--- Start Showing Answers ---
395 CLS:GOSUB 160:PRINT #2,TAB(38-LEN(HD$)\2)HD$:PRINT #2,TAB(38-LEN(HD$)\2)STRING$(LEN(HD$),61);CHR$(10):RETURN
396 Q1=21:Q2=50:PRINT #2,TAB(Q1)VN$(1);TAB(Q2)VN$(2):PRINT #2,
397 PRINT #2,"First 3 data pairs:";:FOR I=1 TO 3:PRINT #2,TAB(Q1)X(I,1);TAB(Q2)X(I,2):NEXT I:PRINT #2,:PRINT #2,"Sample size, n"TAB(36)N:RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXR=400:MXC=20
402 DIM I,J,K,L,M,N,Q,Z,X$,Y$,Z$,X(MXR,2),Z$(MXR),VN$(MXC),Q(MXC),RK(MXR),LK(MXR),ED$(1),E$(3),T$(9)  'T$()=type of correlation
403 T$(1)=" Pearson's r ":T$(2)=" Spearman's r ":T$(3)=" Point Biserial r ":T$(4)=" Rank Biserial r ":T$(5)=" Biserial r ":T$(6)=" Tetrachoric r "
404 C$=" Correlations ":T$(7)=" Averaging"+C$:T$(8)=" Comparing"+C$:T$(9)=" Partial"+C$
405 P5=0.5:Z5=1.96:Z9=2.5758:S$=SPACE$(10):F$="+##.###":ED$(0)="C#=Change, D#=Delete, X=Extra data, Null=Proceed":ED$(1)="C#=Change, Null=Proceed":STDF$="Student's t =#####.###  df =":CL$="% Confidence Limits for Rho"
406 RH$=" ="+F$+"  ! "+F$:F5$=CHR$(10)+"95"+CL$+RH$:F9$="99"+CL$+RH$
407 QB=1:CLOSE:CLS:Z$="M E N U   F O R   C O R R E L A T I O N S":GOSUB 46
408 LOCATE 3,8:PRINT"Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT STRING$(80,196)
409 LOCATE 6,1:K=16:PRINT"◙"TAB(K)"1 "T$(1)"◙"TAB(K)"2 "T$(2)"◙"TAB(K)"3 "T$(3)"◙"TAB(K)"4 "T$(4)"◙"TAB(K)"5 "T$(5);
410 PRINT"◙"TAB(K)"6 "T$(6)TAB(43)"<--Data from keyboard (not files).◙"TAB(K)"7 "T$(7)TAB(43)"<--Ditto.◙"TAB(K)"8 "T$(8)TAB(43)"<--Ditto.◙"TAB(K)"9 "T$(9)TAB(43)"<--Ditto, with 3-4 variables.◙"TAB(K-1)"10  Return to Main Menu.◙"
411 PRINT:LOCATE,K-3:INPUT"===>  Option (1-10) ";OP:IF OP=10 THEN 30 ELSE IF OP<1 OR OP>10 THEN PRINT"No, please enter a number from 1 to 10":GOTO 411 ELSE HD$=T$(OP):VER$="(RL,5)"
412 QB=3:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12:IF OP>5 THEN 444 ELSE NEEDVARS=2
413 '◙                   --- Options 1 to 5 ---
414 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
415 PRINT TAB(K)"║                                                       ║"
416 PRINT TAB(K)"║        Data can be from keyboard or disk file.        ║"
417 PRINT TAB(K)"║ Computes correlation between 2 variables from a sample║"
418 PRINT TAB(K)"║  of 4-400 rows of paired measurements in Free Format. ║"
419 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
420 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
421 PRINT TAB(K)"║                                                       ║"
422 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
423 '◙--- Get Data ---
424 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 428
425 '◙--- Disk Entry ---
426 QD=1:MNR=4:MNC=2:GOSUB 80:GOSUB 5:GOTO 430
427 '◙--- K/b Entry ---
428 QD=0:PRINT"Ok, enter 4-400 paired values, 1 pair per line in Free Format, from keyboard.":IF OP>2 THEN PRINT TAB(5)"Note --->  Either can be the Binomial Variable, valued say 0 and 1."
429 I=1:M=2:Q=1:GOSUB 72
430 CLS:PRINT"Data read was:":FOR I=1 TO N:PRINT"Row #"MID$(STR$(I),2)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:NEXT I:IF OP<6 AND N<4 THEN PRINT"Not enough rows to analyse.  Will you add others";:GOSUB 21:IF Z$="N" THEN 2 ELSE 441
431 '◙--- Edit ---
432 PRINT:PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 442 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
433 IF LZ$="C" THEN 435 ELSE IF QD THEN 434 ELSE IF LZ$="D" THEN 439 ELSE IF LZ$="X" THEN 440
434 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid row number.":GOTO 432 ELSE PRINT"WHAT?":GOTO 432
435 IF I<1 OR I>N THEN 434 ELSE GOSUB 200
436 PRINT"Change which variable # (1 or 2)";:INPUT Z$:IF Z$="" THEN 432 ELSE J=VAL(Z$):IF J<1 OR J>M THEN BEEP:GOTO 436
437 PRINT"Old value = "X(I,J)"     New value";:INPUT X$:IF X$="" THEN 432 ELSE FOR L=1 TO LEN(X$):IF INSTR("-+.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do it.":GOTO 437
438 NEXT L:X(I,J)=VAL(X$):PRINT"New ";:IF X(I,J)<0 THEN NEG=1:GOTO 430 ELSE 430
439 IF I<1 OR I>N OR (N<5 AND OP<6) THEN GOSUB 40:GOTO 432 ELSE N=N-1:FOR K=I TO N:FOR L=1 TO M:X(K,L)=X(K+1,L):NEXT L:NEXT K:PRINT"Ok, Row"I"Deleted.":GOSUB 5:GOTO 430
440 IF N=MXR THEN PRINT"No, you have maximum rows already.":GOTO 432
441 PRINT"Ok, you can add up to"MXR-N"extra rows in Free Format.":I=N+1:N=0:Q=1:GOSUB 72:GOTO 430
442 IF OP>5 THEN RETURN ELSE IF OP=1 OR OP=5 THEN DO$="transform this data":GOSUB 20:IF Z$="Y" THEN GOSUB 250:GOTO 430
443 '◙--- Branch ---
444 IF OP=6 THEN 750
445 IF OP<6 AND VN$<>"Y" THEN VN$(1)="Var #1":VN$(2)="Var #2"
446 IF OP=1 OR OP=3 THEN GOSUB 43
447 ON OP GOTO 500,550,600,650,650,750,800,800,900:STOP
499 '◙--- Pearson ---
500 GOSUB 370:W=N-3:GOSUB 380:Z=FZ-Z5*SEZ:GOSUB 381:C1=RR:Z=FZ+Z5*SEZ:GOSUB 381:C2=RR:Z=FZ-Z9*SEZ:GOSUB 381:C3=RR:Z=FZ+Z9*SEZ:GOSUB 381:C4=RR:GOSUB 395
501 F23$="#########.###              ##########.###"
502 GOSUB 396:PRINT #2,"Mean"S$;USING F23$;A/N;C/N:PRINT #2,"S.D."S$;USING F23$;SQR(B/(N-1));SQR(D/(N-1))
503 PRINT #2,"SS  "S$;USING F23$;B;D:PRINT #2,"SP"S$S$;USING"     ##########.###";E
504 PRINT #2,CHR$(10);TAB(10);USING T$(1)+"="+F$+"     "+STDF$;R;T;:PRINT #2,DF:PRINT #2,USING F5$;C1;"&";C2:PRINT #2,USING F9$;C3;"&";C4
505 IF PR THEN J=1:K=2:GOSUB 190 ELSE PRINT:GOSUB 161:IF PR THEN GOSUB 165:GOTO 502
506 QB=3:DO$="edit or transform that data & re-run this test":GOSUB 20:IF Z$="Y" THEN 430 ELSE 10
549 '◙--- Spearman ---
550 GOSUB 350:CLS:GOSUB 43:Q=0:CONST=0:IF NEG=0 THEN 554 ELSE FOR I=1 TO N:IF X(I,1)<CONST THEN CONST=X(I,1)
551 IF X(I,2)<CONST THEN CONST=X(I,2)
552 NEXT I
553 FOR J=1 TO 2:FOR I=1 TO N:X(I,J)=X(I,J)-CONST:NEXT I:NEXT J
554 FOR J=1 TO 2:FOR I=1 TO N:Z$(I-1)=FNNUM2STR$(X(I,J),DP#,8):NEXT I
555 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(N,Z$(0))
556 Q=J:NN=N:GOSUB 280:IF J=2 THEN TY=TC ELSE TX=TC:FOR I=1 TO N:X(I,0)=RK(I):NEXT I
557 NEXT J
558 FOR I=1 TO N:SUMDSQ=SUMDSQ+(RK(I)-X(I,0))^2:NEXT I
559 DF=N-2:ZN=N*N*N-N:TC=TX+TY:IF TC>0.1 THEN 562
560 R=1-SUMDSQ/ZN*6:RQ=1-R*R:IF RQ>0 AND N>13 THEN T=R*SQR(DF/RQ)
561 GOTO 565
562 SSX=ZN/12-TX:SSY=ZN/12-TY:R=(SSX+SSY-SUMDSQ)/2/SQR(SSX*SSY):RQ=1-R*R:IF RQ>0 AND N>13 THEN T=R*SQR(DF/RQ) ELSE T=100000.
563 R2=1-(SUMDSQ+TC)/ZN*6:RQ=1-R2*R2:IF RQ>0 AND N>13 THEN T2=R2*SQR(DF/RQ) ELSE T2=100000.
564 '◙--- Spearman Answers ---
565 PS$="  (Langley, `PRAC STATS', p 204)"
566 GOSUB 395:FOR I=1 TO 3:X(I,1)=X(I,1)+CONST:X(I,2)=X(I,2)+CONST:NEXT I
567 GOSUB 396:IF TC>0.1 THEN 570
568 PRINT #2,CHR$(10)"No ties."STRING$(2,10)"    Sum D Squared ="SUMDSQ;PS$
569 PRINT #2,TAB(4);USING T$(2)+" ="+F$;R:IF N>13 AND RQ>0 THEN PRINT #2,TAB(5)USING STDF$;T;:PRINT #2,DF:GOTO 574 ELSE PRINT #2,:GOTO 574
570 PRINT #2,CHR$(10)"Ties present, so for AGREEMENT between "VN$(1)" & "VN$(2)":":PRINT #2,"    Sum D Squared ="SUMDSQ;PS$
571 PRINT #2,TAB(4)T$(2)" =";USING F$;R;:IF N>13 AND T<>100000. THEN PRINT #2,TAB(5)USING STDF$;T;:PRINT #2,DF ELSE PRINT #2,
572 PRINT #2,CHR$(10)"or....for ACCURACY of "VN$(1)" or "VN$(2)":":PRINT #2,"    Sum D Squared + Tie Correction ="SUMDSQ+TC;PS$
573 PRINT #2,TAB(4);USING T$(2)+" ="+F$;R2;:IF N>13 AND T2<>100000. THEN PRINT #2,TAB(5)USING STDF$;T2;:PRINT #2,DF ELSE PRINT #2,
574 IF PR THEN J=1:K=2:GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 567
575 GOTO 10
599 '◙--- Point Biserial ---
600 GOSUB 370:GOSUB 395
601 GOSUB 396
602 PRINT #2,:PRINT#2,TAB(7)T$(3)" =";USING F$;R;:PRINT #2,TAB(40)USING STDF$;T;:PRINT #2,DF:PRINT #2,CHR$(10)TAB(18)"95% & 99"CL$":":PRINT #2,TAB(8)"See Perry & Michael, `EDUC.PSYCHOL.MSMT.' 1954, p. 715"
603 IF PR THEN J=1:K=2:GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 601
604 GOTO 10
649 '◙--- Rank Bis r ---
650 INPUT"◙Which # is your binomial variable (1 or 2)";B:IF B<1 OR B>2 THEN GOSUB 40:GOTO 650 ELSE PRINT"Ok, I will recode that variable to 0 and 1 (if it's not already scored so).":PRINT:GOSUB 5:GOSUB 43:IF OP=5 THEN 700
651 NN=N:Q=3-B:GOSUB 280:GOSUB 364
652 FOR I=1 TO N:XY=XY+RK(I)*X(I,B):NEXT I:R=(2*XY/NB-N-1)/(N-NB):GOSUB 395
653 GOSUB 396:PRINT #2,"◙◙"TAB(20)T$(4)" =";USING F$;R:PRINT #2,CHR$(10)TAB(12)"Use Wilcoxon's Sum of Ranks for Significance."
654 IF PR THEN J=1:K=2:GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 653
655 GOTO 10
699 '◙--- Biserial r ---
700 GOSUB 364:GOSUB 370:P=NB/N:GOSUB 375:R=R*SQR(P*(1-P))/H:T=R*H*SQR(N/P/(1-P)):GOSUB 395
701 GOSUB 396:PRINT #2,:PRINT #2,"Assuming the binomial variable really has a Normal Distribution:"
702 PRINT #2,:PRINT #2,TAB(9)T$(5)" =";USING F$;R;:PRINT #2,TAB(37)USING STDF$;T;:PRINT #2,DF
703 IF PR THEN J=1:K=2:GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 701
704 GOTO 10
749 '◙--- Tetrachoric ---
750 PRINT"Enter cell frequencies in this 2 x 2 contingency table:":LOCATE 6,1
751 PRINT TAB(18)"            +                -"
752 PRINT TAB(18)  "╔══════════════════════════════════════════╗"
753 PRINT TAB(16)"+ ║     A:               B:                  ║"
754 PRINT TAB(18)  "║                                          ║"
755 PRINT TAB(16)"- ║     C:               D:                  ║"
756 PRINT TAB(18)  "║                                          ║"
757 PRINT TAB(18)  "╚══════════════════════════════════════════╝":LOCATE,,1
758 LOCATE 8,28,,6,7:INPUT;" ",A:LOCATE 8,45:INPUT;" ",B:LOCATE 10,28:INPUT;" ",C:LOCATE 10,45:INPUT;" ",D:LOCATE 13,1,,7,7
759 R=COS(3.141593/(1+SQR(A*D/B/C))):R1=A+B:R2=C+D:C1=A+C:C2=B+D:N=R1+R2
760 P=R1/N:GOSUB 375:H1=H:P=C1/N:GOSUB 375:T=R*H1*H*SQR(N/R1*N/R2*N/C1*N/C2*N)
761 U$="Assuming both variables really have Normal Distributions, and using the         Cosine PI Formula:":T$="        Z =###.##":GOSUB 160:PRINT#2,SPACE$(20)
762 PRINT #2,U$:PRINT #2,:PRINT #2,TAB(17);T$(6)" =";USING F$+T$;R;T
763 GOSUB 161:IF PR=0 THEN 771 ELSE GOSUB 165
764 PRINT #2,TAB(18)"            +                -"
765 PRINT #2,TAB(18)         "+------------------------------------------+"
766 PRINT #2,TAB(16);USING "+ |      A:#####          B:#####            |";A;B
767 PRINT #2,TAB(18)         "|                                          |"
768 PRINT #2,TAB(16);USING "- |      C:#####          D:#####            |";C;D
769 PRINT #2,TAB(18)         "+------------------------------------------+"
770 PRINT #2,:PRINT #2,U$:PRINT #2,:PRINT #2,TAB(17);T$(6)" =";USING F$+T$;R;T
771 GOSUB 193:GOTO 10
799 '◙--- Ave r & Comparing r's ---
800 PRINT"Enter your"C$"& Sample Sizes, with `/' End-Signal:":M=2:N=0:I=0
801 I=I+1:J=1:PRINT:PRINT"#"I;:GOSUB 385:IF N THEN 804
802 J=2:LOCATE ,20:INPUT;"n: ",X$:IF X$="" THEN 802 ELSE IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):IF X$>"" THEN N=I ELSE GOSUB 40:GOTO 802
803 GOSUB 390:IF L=501 THEN 802 ELSE IF VAL(X$)<1 THEN GOSUB 40:GOTO 802 ELSE X(I,J)=VAL(X$):IF N=0 THEN 801
804 PRINT:GOSUB 432:GOSUB 43
805 CS$="Sample Sizes   "+C$+"   Fisher's z":INF$=" Infinity":U$="Using Fisher's z:":FC$="####         +##.#####      +##.#####"
806 FOR I=1 TO N:R=X(I,1):W=X(I,2)-3:GOSUB 380:RK(I)=FZ:TOP=TOP+W*FZ:BOT=BOT+W:SQ=SQ+W*FZ*FZ:NEXT I
807 ZBAR=TOP/BOT:Z=ZBAR:GOSUB 381:RBAR=RR:SE=1/SQR(BOT):TAV=ZBAR/SE:Z=ZBAR-Z5*SE:GOSUB 381:C1=RR:Z=ZBAR+Z5*SE:GOSUB 381:C2=RR:Z=ZBAR-Z9*SE:GOSUB 381:C3=RR:Z=ZBAR+Z9*SE:GOSUB 381:C4=RR
808 GOSUB 395
809 PRINT #2,CS$:FOR I=1 TO N:ZZ=I:GOSUB 360:PRINT #2,"#"ZZ$"= ";USING FC$;X(I,2);X(I,1);RK(I):IF I MOD 20=0 THEN GOSUB 5
810 NEXT I:PRINT #2,:IF OP=8 THEN 850 ELSE PRINT #2,U$
811 PRINT #2,USING"Ave r ="+F$+"     "+STDF$+INF$;RBAR;TAV:PRINT #2,USING F5$;C1;"&";C2:PRINT #2,USING F9$;C3;"&";C4
812 IF PR THEN GOSUB 193 ELSE GOSUB 161:IF PR THEN GOSUB 165:ON OP-6 GOTO 809,851:STOP
813 GOTO 10
849 '◙--- Comparing r's, contd ---
850 TE$="Test of Equality of Independent"+C$+U$:INS$="If not significant, pooling gives:"
851 IF N=2 THEN T=(RK(1)-RK(2))/(SQR(1/(X(1,2)-3)+1/(X(2,2)-3))):PRINT #2,TE$:PRINT #2,USING STDF$+INF$;T:PRINT #2,:PRINT #2,INS$:GOTO 811
852 CH$="       Chi squared =####.##    df =###":CH=SQ-TOP*TOP/BOT:PRINT #2,TE$:PRINT #2,USING CH$;CH;N-1:PRINT #2,:PRINT #2,INS$:GOTO 811
899 '◙--- Partials ---
900 QB=1:P$=" ORDER PARTIALS:  ":P1$="◙◙1st"+P$:P2$="◙◙2nd"+P$
901 ERASE X,RK:DIM X(40),R(40)
902 INPUT"How many variables (3 or 4)";N:IF N<3 OR N>4 THEN BEEP:GOTO 902 ELSE GOSUB 160:IF N=4 THEN 908
903 X(0)=12.3:X(1)=13.2:X(2)=23.1:I=12:PRINT:GOSUB 383:R(I)=VAL(X$):I=13:PRINT:GOSUB 383:R(I)=VAL(X$):I=23:PRINT:GOSUB 383:R(I)=VAL(X$):GOSUB 43
904 Q9=1:I=12:J=13:K=23:GOSUB 363:R(0)=R:I=13:J=12:GOSUB 363:R(1)=R:I=23:K=13:GOSUB 363:R(2)=R:PQ=1:GOSUB 395
905 PRINT #2,"DATA:  ";:I=12:ZZ=I:GOSUB 360:I=13:ZZ=I:GOSUB 360:I=23:ZZ=I:GOSUB 360:PRINT #2,P1$;:FOR I=0 TO 2:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,
906 IF PR THEN GOSUB 193 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 905
907 GOTO 10
908 X(0)=12.3:X(1)=12.4:X(2)=13.2:X(3)=13.4:X(4)=14.2:X(5)=14.3:X(6)=23.1:X(7)=23.4:X(8)=24.1:X(9)=24.3:X(10)=34.1:X(11)=34.2:X(35)=12.34:X(36)=13.24:X(37)=14.23:X(38)=23.14:X(39)=24.13:X(40)=34.12
909 PRINT:FOR I=12 TO 14:GOSUB 383:R(I)=VAL(X$):NEXT I:FOR I=23 TO 24:GOSUB 383:R(I)=VAL(X$):NEXT I:I=34:GOSUB 383:R(I)=VAL(X$):GOSUB 43
910 I=12:J=13:K=23:GOSUB 363:R(0)=R:J=14:K=24:GOSUB 363:R(1)=R:I=13:J=12:K=23:GOSUB 363:R(2)=R:J=14:K=34:GOSUB 363:R(3)=R:I=14:J=12:K=24:GOSUB 363:R(4)=R
911 I=14:J=13:K=34:GOSUB 363:R(5)=R:I=23:J=12:K=13:GOSUB 363:R(6)=R:I=23:J=24:K=34:GOSUB 363:R(7)=R:I=24:J=12:K=14:GOSUB 363
912 R(8)=R:J=23:K=34:GOSUB 363:R(9)=R:I=34:J=13:K=14:GOSUB 363:R(10)=R:J=23:K=24:GOSUB 363:R(11)=R
913 I=0:J=5:K=9:GOSUB 363:R(35)=R:I=2:J=4:K=11:GOSUB 363:R(36)=R:I=4:J=2:GOSUB 363:R(37)=R:I=6:J=8:K=10:GOSUB 363
914 R(38)=R:I=8:J=6:GOSUB 363:R(39)=R:I=10:K=8:GOSUB 363:R(40)=R:GOSUB 395
915 Q9=1:PRINT #2,"DATA:":FOR I=12 TO 14:ZZ=I:GOSUB 360:NEXT I:PRINT #2,:FOR I=23 TO 24:ZZ=I:GOSUB 360:NEXT I:I=34:ZZ=I:GOSUB 360:PRINT #2,P1$
916 FOR I=0 TO 2:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,:FOR I=3 TO 5:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,
917 FOR I=6 TO 8:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,:FOR I=9 TO 11:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,P2$:FOR I=35 TO 37:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,
918 FOR I=38 TO 40:ZZ=X(I):GOSUB 360:NEXT I:PRINT #2,
919 IF PR THEN GOSUB 193 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 915
920 GOTO 10
921 END
```

## CORMT.BAS

```bas
1 '          RMAT & DMAT  ---  CORMT.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 407,177,437,10:STOP  '=start,printout,etc - CLOSE (exc 177)◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=4:GOTO 9
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
49 '◙--- Vetted Decoding of FF X(I,J) from X$ ---◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K=1:L=M:IF UT THEN L=M-I+1
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙*** K/b Input of all X(I,J) in FF ***◙    Needs first I, M.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row."
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I);:INPUT X$:IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.
80 IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT<>0 THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 '
93 '
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" or "O" ---
130 IF IO$="I" THEN 134 ELSE ON ERROR GOTO 132:OPEN DR$+FL$ FOR INPUT AS #1
131 CLOSE:DO$="<OVERWRITE> existing "+FL$:GOSUB 20:IF Z$="N" THEN 110 ELSE 133
132 RESUME 133  'OK to start new file, since FL$ not present.
133 ON ERROR GOTO 30:OPEN DR$+FL$ FOR OUTPUT AS #1:RETURN  'print #1,Q$A$Q$Q$B$Q$:close
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,MXC):GOTO 110
139 '◙*** Save data, Z(I,J) ***
140 IF ID$="" THEN LINE INPUT"Problem ID? ";ID$:GOTO 142
141 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
142 Q$=CHR$(34):IO$="O":GOSUB 110
143 PRINT "Saving data on disk ..... ";:PRINT #1,Q$FL$Q$Q$VER$Q$:PRINT #1,Q$DAT$Q$Q$ID$Q$;N;M;UT;Q$VN$Q$
144 IF VN$="Y" THEN FOR J=1 TO M:PRINT #1,Q$VN$(J)Q$;:NEXT J:PRINT #1,""
145 FOR I=1 TO N:IF QO=1 THEN L=1 ELSE L=I
146 FOR J=L TO M:PRINT #1,Z(I,J);:NEXT J:NEXT I:CLOSE:PRINT "done."
147 DO$="backup this file under the name "+FL$:GOSUB 20:IF Z$="Y" THEN GOSUB 115:GOTO 143 ELSE RETURN
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR L=1 TO M:IF L<10 THEN VN$(L)="Var #"+STR$(L) ELSE VN$(L)="Var #"+MID$(STR$(L),2)
211 NEXT L:RETURN
219 '◙--- Show MxM Matrix Z(I,J) in format FMT$ ---
220 IF QO<>4 THEN FMT$=F3$ ELSE FMT$=F5$
221 Z$=E$:FOR K=1 TO M STEP 5:IF M<K+5 THEN L=M ELSE L=K+4
222 PRINT #2,:PRINT #2,E$;:FOR J=K TO L:RSET Z$=VN$(J):PRINT #2,Z$;:NEXT J:PRINT #2,
223 FOR I=1 TO M:LSET Z$=VN$(I):PRINT #2,Z$;:FOR J=K TO L:PRINT #2,USING FMT$;Z(I,J);:NEXT J:PRINT #2,:NEXT I:PRINT #2,:IF L MOD 5=0 THEN GOSUB 5
224 NEXT K:RETURN
249 '◙*** Transform Sub ***
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Log (X)◙"TAB(K)"2   Log (X+1)◙"TAB(K)"3   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"4   Reciprocal Plus, 100/(X+1)◙"TAB(K)"5   Sqrt (X)◙"TAB(K)"6   Sqrt (X+0.5)◙"TAB(K)"7   X Squared◙"TAB(K)"8   None (leaving data unchanged)"
252 PRINT:LOCATE,,1
253 INPUT"Which transform (1 to 7, or 8)";T%:IF T%=8 THEN 273 ELSE IF T%<1 OR T%>7 THEN PRINT"WHAT?  ";:GOTO 253
254 IF M=1 THEN NT=1:Q(1)=1:GOTO 257 ELSE PRINT"How many variables are to have this transform (max"STR$(M)")";:INPUT NT:IF NT<1 OR NT>M THEN 254 ELSE IF NT=M THEN FOR J=1 TO M:Q(J)=J:NEXT J:GOTO 257
255 IF NT=1 THEN INPUT"Which variable # ";X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN PRINT"Silly":GOTO 255 ELSE 257
256 PRINT"Which"NT"variables (#'s in Free Format)";:INPUT X$:I=1:MM=M:M=NT:Q(0)=1:GOSUB 50:Q(0)=0:M=MM:FOR J=1 TO NT:IF Q(J)>0 AND Q(J)<=M THEN NEXT J ELSE PRINT"Value"J"is out-of-bounds.  Try again.":GOTO 256
257 GOSUB 43:B=0.4342945:Z=0:U=1:H=100:E$(0)=""
258 FOR J=1 TO NT:K=Q(J):FOR I=1 TO N:ON T% GOTO 264,263,267,266,269,268,270
263 X(I,K)=X(I,K)+U
264 IF X(I,K)>Z THEN X(I,K)=B*LOG(X(I,K)):GOTO 271 ELSE 272
266 X(I,K)=X(I,K)+U
267 IF X(I,K)<>Z THEN X(I,K)=H/X(I,K):GOTO 271 ELSE 272
268 X(I,K)=X(I,K)+P5
269 IF X(I,K)>=Z THEN X(I,K)=SQR(X(I,K)):GOTO 271 ELSE 272
270 X(I,K)=X(I,K)*X(I,K)
271 NEXT I:NEXT J:IF E$(0)=""THEN GOSUB 44:GOTO 273
272 BEEP:E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((T%+1)\2)", Row"I:GOSUB 5:END
273 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙*** Choose Option ***
350 IF QO<>4 THEN ZZ$="SsPpFfCcEe" ELSE ZZ$="SsPpFfDdEe"
351 PRINT OP$;R$;:INPUT Z$:I=(INSTR(ZZ$,Z$)+1)\2:IF I=0 THEN BEEP:GOTO 350 ELSE RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXR=400:MNR=3:MXC=20:MNC=2:P5=0.5
402 DIM X(MXR,MXC),Z(MXC,MXC),SS(MXC,MXC),A(MXC),Q(MXC),S(MXC),SK(MXC),VN$(MXC),T$(8),E$(3)
403 DEF FNSTRIP$(Z$)=LEFT$(Z$+"  ",INSTR(Z$+"  ","  ")-1)
404 M$="MEANS, S.D'S, & SKEWNESS COEFFICIENTS":S$="SSCP of DEVIATES":D$="DISPERSION MATRIX (Unbiased DMAT)":C$="CORRELATION MATRIX (RMAT)":E$=SPACE$(12):F3$="########.###":F5$="######.#####"
405 T$(1)="Log(X)":T$(2)="Log(X+1)":T$(3)="Reciprocal, 100/X":T$(4)="Reciprocal Plus, 100/(X+1)":T$(5)="Sqrt(X)":T$(6)="Sqrt(X+0.5)":T$(7)="X Squared":T$(8)="None.":T$(0)=T$(8)
406 HD$="  CORRELATION  &  DISPERSION  MATRICES  ":VER$="(RL,8)"
407 QB=4:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
408 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
409 PRINT TAB(K)"║                                                       ║"
410 PRINT TAB(K)"║  This program takes 3-400 rows of measurements, each  ║"
411 PRINT TAB(K)"║  row with 2-20 variables in Free Format, & computes:  ║"
412 PRINT TAB(K)"║                                                       ║"
413 PRINT TAB(K)"║ (1) Mean, SD, & Skewness Coefficient of each variable.║"
414 PRINT TAB(K)"║ (2) SSCP, Sum of Squares & Cross-Products of deviates.║"
415 PRINT TAB(K)"║ (3) DMAT, Dispersion Matrix (unbiased variance/covar).║"
416 PRINT TAB(K)"║ (4) RMAT, Correlation Matrix (between all variables). ║"
417 PRINT TAB(K)"║                                                       ║"
418 PRINT TAB(K)"║    Simple editing & data transforms are available.    ║"
419 PRINT TAB(K)"║   Matrices can be filed for input to other programs.  ║"
420 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
421 PRINT TAB(K)"║                                                       ║"
422 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
423 O1$=CHR$(10)+CHR$(10)+E$+"S  =  Show":O2$=CHR$(10)+E$+"P  =  Print":O3$=CHR$(10)+E$+"F  =  File ":O4$=CHR$(10)+E$+"C  =  Compute ":O5$=CHR$(10)+E$+"E  =  End"+CHR$(10)
424 OP$="         ====> Which option do you want (S, P, F, ":R$="C, E) "
425 '◙--- Get Data ---
426 DO$="enter data from disk":GOSUB 20:QB=1:PRINT:IF Z$="N" THEN 430
427 '◙--- Disk Entry ---
428 GOSUB 80:GOSUB 5:GOTO 437
429 '◙---   K/b Entry ---
430 PRINT"No. of variables (columns, 2-"MID$(STR$(MXC),2)")";:INPUT M:IF M<2 OR M>MXC THEN GOSUB 40:GOTO 430
431 VN$="Y":PRINT"Variable Names (1-10 letters each) 1 per line, or Null Entry if no names:":FOR J=1 TO M
432 PRINT"Var"J"? ";:LINE INPUT VN$(J):IF VN$(1)="" THEN VN$="N":J=M:GOTO 434
433 IF INSTR(VN$(J),Q$) THEN GOSUB 41:GOTO 432 ELSE VN$(J)=LEFT$(VN$(J),10)
434 NEXT J
435 I=1:GOSUB 70
436 '◙--- Show Data ---
437 QB=4:CLOSE:PRINT:IF QR=1 THEN PRINT"Revised ";
438 PRINT"Data is:";E$;"Transform = ";T$(T%):L=0:MM=M
439 FOR I=1 TO N:PRINT"Row"STR$(I)": ";:LN=0
440 J1=1+5*LN:J2=-(MM<J1+4)*MM-(MM>=J1+4)*(J1+4):FOR J=J1 TO J2:PRINT X(I,J);:NEXT J:PRINT:L=L+1:IF L>19 THEN GOSUB 6:L=0
441 IF MM>J2 THEN LN=LN+1:PRINT SPACE$(7);:GOTO 440
442 NEXT I:PRINT
443 IF VN$="N" THEN PRINT"Variables not named." ELSE FOR J=1 TO M:PRINT USING"Var##=";J;:PRINT VN$(J),:NEXT J:PRINT
444 GOSUB 5:LOCATE CSRLIN-1,1
445 DO$="see all the data again":GOSUB 20:IF Z$="Y" THEN 437
446 '◙--- Corrections ---
447 QB=3:IF QR=0 THEN DO$="correct any data values" ELSE DO$="correct any other data values"
448 GOSUB 20:IF Z$="N" THEN 454 ELSE INPUT"Which row";I:IF I<1 OR I>N THEN BEEP:PRINT"WHAT?";:GOTO 448
449 GOSUB 200
450 QR=1:PRINT"Change which variable # (1-"MID$(STR$(M),2)")";:INPUT Z$:J=VAL(Z$):IF J<1 OR J>M THEN BEEP:PRINT"WHAT?":GOTO 450
451 PRINT "Old value ="X(I,J);TAB(28)"New value";:INPUT Z$:FOR K=1 TO LEN(Z$):IF INSTR("-.0123456789",MID$(Z$,K,1)) THEN NEXT K:X(I,J)=VAL(Z$) ELSE PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 451
452 PRINT"Revised ";:GOSUB 200:DO$="change this row again":GOSUB 20:IF Z$="Y" THEN 450 ELSE 445
453 '◙--- Transforms ---
454 QB=3:PRINT:IF T%=0 THEN PRINT"Any"; ELSE PRINT"Any more";
455 PRINT" Transforms";:GOSUB 21:IF Z$="N" THEN 458 ELSE GOSUB 250
456 QR=1:DO$="see all the data again":GOSUB 20:IF Z$="Y" THEN 437
457 '◙--- Compute AVE A(J),  SD S(J),  SKEW SK(J),  SSCP SS(J,K), & VN$ ---
458 CLS:GOSUB 43:L=2:Q=3:E=0.00001
459 FOR I=1 TO N:FOR J=1 TO M:X=X(I,J)-X(1,J):A(J)=A(J)+X:SK(J)=SK(J)+X*X*X:FOR K=J TO M:Y=X(I,K)-X(1,K):SS(J,K)=SS(J,K)+X*Y:NEXT K:NEXT J:NEXT I
460 FOR J=1 TO M:IF SS(J,J)<E THEN SK(J)=0:GOTO 462
461 SK(J)=SK(J)-Q*SS(J,J)*A(J)/N+L*A(J)^Q/N^L:SK(J)=SK(J)/SQR(((SS(J,J)-A(J)^L/N)^Q)/N):IF ABS(SK(J))<E THEN SK(J)=0
462 FOR K=J TO M:SS(J,K)=SS(J,K)-A(J)/N*A(K):SS(K,J)=SS(J,K):NEXT K
463 NEXT J
464 FOR J=1 TO M:A(J)=A(J)/N+X(1,J):S(J)=SQR(SS(J,J)/(N-1)):NEXT J:SB=SQR(6*(N-L)/((N+1)*(N+Q)))
465 IF VN$="N" THEN FOR J=1 TO M:VN$(J)="Var #"+STR$(J):NEXT J
466 FOR J=1 TO M:VN$(J)=FN STRIP$(VN$(J)):NEXT J
467 '◙--- Means, SD's, Skews ---
468 QB=4:QO=1:GOSUB 160:CLS:PRINT SPACE$(18);M$:PRINT O1$;O2$;O3$;"Means & S.D's";O4$;"SSCP";O5$
469 GOSUB 350:CLS:ON I GOTO 470,479,480,482,10
470 PRINT #2,M$;"        ";"Transform = ";T$(T%):Z$=E$
471 FOR K=1 TO M STEP 5:IF M<K+5 THEN L=M ELSE L=K+4
472 PRINT #2,:PRINT #2,SPACE$(8);:FOR J=K TO L:RSET Z$=VN$(J):PRINT #2,Z$;:NEXT J
473 PRINT #2,:PRINT #2,"Mean    ";:FOR J=K TO L:PRINT #2,USING F3$;A(J);:NEXT J
474 PRINT #2,:PRINT #2,"S.D.    ";:FOR J=K TO L:PRINT #2,USING F3$;S(J);:NEXT J
475 PRINT #2,:PRINT #2,"Sqrt(B1)";:FOR J=K TO L:PRINT #2,USING F3$;SK(J);:NEXT J:PRINT #2,
476 IF J=11 OR J=21 THEN GOSUB 5
477 NEXT K
478 PRINT #2,:PRINT #2,USING"N = ###.    SD's have df = ###.    SE of Skews = ##.## (Approx)";N;N-1;SB:PRINT #2,:GOSUB 5:GOTO 468
479 GOSUB 162:GOSUB 165:GOTO 470
480 UT=-N:N=2:FOR J=1 TO M:Z(1,J)=A(J):Z(2,J)=S(J):NEXT J:GOSUB 140:N=-UT:GOTO 468 ' Negative UT identifies this kind of file, in which -UT holds true N.
481 '◙--- SSCP ---
482 FOR I=1 TO M:FOR J=I TO M:Z(I,J)=SS(I,J):Z(J,I)=Z(I,J):NEXT J:NEXT I
483 QO=2:GOSUB 160:CLS:PRINT SPACE$(18);S$:PRINT O1$;O2$;O3$;"SSCP Matrix";O4$;"DMAT";O5$
484 GOSUB 350:CLS:ON I GOTO 485,486,487,489,10
485 PRINT #2,S$;E$;"Transform = ";T$(T%):GOSUB 220:GOSUB 5:GOTO 483
486 GOSUB 162:GOSUB 165:GOTO 485
487 UT=N:N=M:L=M:GOSUB 140:N=UT:GOTO 483 ' With these UT matrices, UT holds the # of persons.
488 '◙--- DMAT ---
489 FOR I=1 TO M:FOR J=I TO M:Z(I,J)=SS(I,J)/(N-1):Z(J,I)=Z(I,J):NEXT J:NEXT I
490 QO=3:GOSUB 160:CLS:PRINT SPACE$(18);D$:PRINT #2,O1$;O2$;O3$;"Dispersion Matrix";O4$;"RMAT";O5$
491 GOSUB 350:CLS:ON I GOTO 492,493,494,496,10
492 PRINT #2,D$;E$;"Transform = ";T$(T%):GOSUB 220:GOSUB 5:GOTO 490
493 GOSUB 162:GOSUB 165:GOTO 492
494 UT=N:N=M:L=M:GOSUB 140:N=UT:GOTO 490
495 '◙--- RMAT ---
496 FOR I=1 TO M:FOR J=I TO M:IF I=J THEN Z(I,I)=1 ELSE D=S(I)*S(J):IF D<1.000000e-1 THEN Z(I,J)=0 ELSE Z(I,J)=Z(I,J)/D
497 Z(J,I)=Z(I,J):NEXT J:NEXT I:O4$=CHR$(10)+E$+"D  =  Data Printout":R$="D, E) "
498 QO=4:GOSUB 160:CLS:PRINT SPACE$(18);C$:PRINT #2,O1$;O2$;O3$;"Correlation Matrix";O4$;O5$
499 GOSUB 350:CLS:ON I GOTO 500,501,502,506,10
500 PRINT #2,C$;E$;"Transform = ";T$(T%):GOSUB 220:GOSUB 5:GOTO 498
501 GOSUB 162:GOSUB 165:GOTO 500
502 INPUT"Do you want to file the WHOLE RMAT or only the PREDICTOR RMAT (W/P)";Z$:IF INSTR("WwPp",Z$)=0 THEN BEEP:PRINT"Please enter `W' or `P'.":GOTO 502 ELSE Z$=CHR$(ASC(Z$) AND 95)
503 IF Z$="W" THEN MM=0 ELSE MM=M:M=M-1:V2$=VN$:LV=LEN(VN$)+(LEN(VN$)>2)*10:VN$=LEFT$(VN$,LV)
504 UT=N:N=M:L=M:GOSUB 140:N=UT:IF MM=0 THEN 498 ELSE M=M+1:VN$=V2$:GOTO 498
505 '◙--- Data Print ---
506 GOSUB 162:GOSUB 165:PRINT #2,"DATA USED";E$;"Transform = ";T$(T%):FOR I=1 TO N:FOR J=1 TO M:PRINT #2,X(I,J);:NEXT J:PRINT #2,:NEXT I:PRINT #2,:GOTO 498
507 'end
```

## DATFL.BAS

```bas
1 '        DATA FILER & EDITOR  ---  DATFL.BAS ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙◙--- Redirect to Block ---
9 ON QB GOTO 403,429,434,503,30:STOP'=start,menu,edit-prompt,print,quit.◙◙--- Another go? ---
10 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
11 PRINT "Have you FILED the present data";:GOSUB 21:IF Z$="Y" THEN 10 ELSE QB=2:GOTO 9
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=3:GOTO 9
43 BEEP:PRINT"You can't use '"L$"' with Upper Triangular matrices.":QB=3:GOTO 9
44 BEEP:PRINT"No, use REMAKE program to Delete rows of Upper Triangular matrices.":QB=3:GOTO 9
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs OP$, I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 L=M:IF OP$="XC" THEN K=J ELSE K=1:IF UT>0 THEN L=M-I+1
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b input of all X(I,J) in FF.  Counts N. ---◙    Needs first I, M, & if UT matrix UT>0.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT>0 THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT"Row"STR$(I);:INPUT X$:IF UT>0 AND I=M THEN N=M:GOTO 75 ELSE IF X$="" THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 THEN IF ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 '
93 '
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT:COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:IF UT<=0 THEN L=M ELSE L=M-I+1
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:PRINT SPACE$(15):M=M-ND:RETURN
104 I=0:MM=M:M=ND:GOSUB 50:FOR J=1 TO ND:Q(J)=X(0,J):NEXT J:M=MM
105 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
106 NEXT J
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" or "O" ---
130 IF IO$="I" THEN 134 ELSE ON ERROR GOTO 132:OPEN DR$+FL$ FOR INPUT AS #1
131 CLOSE:DO$="<OVERWRITE> existing "+FL$:GOSUB 20:IF Z$="N" THEN 110 ELSE 133
132 RESUME 133  'OK to start new file, since FL$ not present.
133 ON ERROR GOTO 30:OPEN DR$+FL$ FOR OUTPUT AS #1:RETURN  'print #1,Q$A$Q$Q$B$Q$:close
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5:DIM X(MXR,MXC):GOTO 110
139 '◙--- Save data, X(I,J) ---
140 IF ID$="" THEN LINE INPUT"Problem ID? ";ID$:GOTO 142
141 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
142 Q$=CHR$(34):IO$="O":GOSUB 110
143 PRINT "Saving data on disk ..... ";:PRINT #1,Q$FL$Q$Q$VER$Q$:PRINT #1,Q$DAT$Q$Q$ID$Q$;N;M;UT;Q$VN$Q$
144 IF VN$="Y" THEN FOR J=1 TO M:PRINT #1,Q$VN$(J)Q$;:NEXT J:PRINT #1,""
145 FOR I=1 TO N:IF UT<=0 THEN L=M ELSE L=M-I+1
146 FOR J=1 TO L:PRINT #1,X(I,J);:NEXT J:NEXT I:CLOSE:PRINT "done."
147 DO$="backup this file under the name "+FL$:GOSUB 20:IF Z$="Y" THEN GOSUB 115:GOTO 143 ELSE RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXR=400:MXC=20
402 DIM I,J,K,L,M,N,Q,X$,Y$,Z$,X(MXR,MXC),VN$(MXC)
403 QB=5:CLOSE:GOSUB 340:VER$="(RL,11)":HD$=" D A T A   F I L E R   &   E D I T O R "
404 CLS:PRINT DAT$;TAB(21);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:K=12:LOCATE 4,1,0
405 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
406 PRINT TAB(K)"║                                                       ║"
407 PRINT TAB(K)"║    Data can be entered from keyboard or disk file.    ║"
408 PRINT TAB(K)"║     Features vetted Free Format entry for numbers.    ║"
409 PRINT TAB(K)"║           Max rows (persons, etc) = 400.              ║"
410 PRINT TAB(K)"║           Max columns (variables) =  20.              ║"
411 PRINT TAB(K)"║       If trouble, try <Ctrl-Break> & GOTO 9.          ║"
412 PRINT TAB(K)"║                                                       ║"
413 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
414 '   Get Data
415 PRINT:DO$="enter data from disk":GOSUB 20:QB=1:PRINT:IF Z$="N" THEN 420
416 '   Disk Entry
417 IF QD=0 THEN DIM Q(MXC)
418 MNR=1:MNC=1:ZZ$="UTOK":GOSUB 80:GOSUB 5:GOTO 429
419 '   K/b Entry
420 PRINT"No. of variables (columns, 1-"MID$(STR$(MXC),2)")";:INPUT M:IF M<1 OR M>MXC THEN GOSUB 40:GOTO 420 ELSE IF M=1 THEN 423
421 DO$="enter an Upper Triangular matrix":GOSUB 20:IF Z$="N" THEN 423
422 PRINT "Based on how many persons ("MID$(STR$(M+2),2)" or more)";:INPUT UT:IF UT<M+2 THEN PRINT "Not enough!":GOTO 422'◙  --->  Note:       UT holds # persons since matrix N=M
423 VN$="Y":PRINT"Variable Names (1-10 letters each) 1 per line, or Null Entry if no names:":FOR J=1 TO M
424 PRINT "Var"J"? ";:LINE INPUT VN$(J):IF VN$(1)="" THEN VN$="N":J=M:GOTO 426
425 IF INSTR(VN$(J),Q$) THEN GOSUB 41:GOTO 424 ELSE VN$(J)=LEFT$(VN$(J),10)
426 NEXT J:IF OP$="V" THEN 434
427 I=1:GOSUB 70
428 '   Menu
429 CLS:LOCATE,,0:PRINT TAB(26)"EDITING MENU":PRINT:PRINT"Indicate your Editing requirements as follows ---":K=12
430 PRINT"◙"TAB(K)"F  = File data now◙"TAB(K)"V  = Variable names to be changed or added◙"TAB(K)"SV = Show variable names◙"TAB(K)"SA = Show all data";
431 PRINT"◙"TAB(K)"S# = Show row # (e.g. S4 shows row 4)◙"TAB(K)"C# = Change row #";:IF UT>0 THEN 433
432 PRINT"◙"TAB(K)"I# = Insert row #◙"TAB(K)"D# or D#-# = Delete row or range-of-rows (work up if multiple)◙"TAB(K)"XR = Extra rows to be added (from keyboard)◙"TAB(K)"XC = Extra cols to be added (from keyboard)";
433 PRINT"◙"TAB(K)"P  = Print datafile on printer◙"TAB(K)"Q  = Quit or Re-run":LOCATE,,1
434 QB=2:CLOSE:PRINT:PRINT"====> Option (F, V, SV, SA, S#, C#,";:IF UT<=0 THEN PRINT" I#, D#, XR, XC,";
435 PRINT" P, Q, Null=Menu)";
436 INPUT OP$:IF OP$="" THEN 429 ELSE PRINT
437 IF OP$="F" OR OP$="f" THEN 488 ELSE IF OP$="V" OR OP$="v" THEN 441 ELSE IF OP$="SV" OR OP$="sv" THEN 447 ELSE IF OP$="SA" OR OP$="sa" THEN 450 ELSE IF OP$="P" OR OP$="p" THEN 490 ELSE IF OP$="Q" OR OP$="q" THEN 11
438 L$=CHR$(ASC(OP$) AND 95):IF INSTR("SCIDX",L$)=0 OR LEN(OP$)=1 THEN 42
439 IF L$="S" OR L$="C" THEN 460 ELSE IF L$="I" THEN 467 ELSE IF L$="D" THEN 471 ELSE IF L$="X" THEN 476
440 '  Edit Varnames
441 IF VN$="N" THEN QR=1 ELSE 448
442 INPUT"# of variable to be renamed (Null=Menu)";Z$:IF Z$="" THEN 429 ELSE J=VAL(Z$):IF J<1 OR J>M THEN 442 ELSE IF VN$(J)="" THEN VN$(J)="<blank> "
443 PRINT"Present name of Var"J"is: "VN$(J);
444 LINE INPUT"    New name? ";VN$(J):IF VN$(J)="" THEN 442
445 IF INSTR(VN$(J),Q$) THEN GOSUB 41:GOTO 444 ELSE VN$(J)=LEFT$(VN$(J),10):VN$="Y":GOTO 442
446 '   Show Varnames
447 IF VN$="N" THEN PRINT"Variables not named.":GOTO 434
448 FOR J=1 TO M:PRINT J;VN$(J),:NEXT J:PRINT:IF OP$="V" OR OP$="v" THEN 442 ELSE 434
449 '   Show Data
450 IF OP$="XR" OR OP$="xr" THEN PRINT:PRINT"Extra rows are---":II=N1:GOTO 453
451 II=1:PRINT"Filename: "FL$
452 PRINT:IF QR=0 THEN PRINT"Data read was---" ELSE PRINT"Revised data is---"
453 LN=0:FOR I=II TO N:LN=LN+1
454 IF UT<=0 THEN L=M ELSE L=M-I+1
455 IF LN=21 THEN LN=1:GOSUB 6:IF IN$="/" THEN 457
456 PRINT"Row";STR$(I);": ";:FOR J=1 TO L:PRINT X(I,J);:NEXT J:PRINT:IF LN=0 THEN RETURN
457 NEXT I:IF IN$="/" THEN 434 ELSE GOSUB 5
458 IF OP$="XR" OR OP$="xr" THEN 434 ELSE 447
459 '   Show a Row
460 I=VAL(MID$(OP$,2)):IF I<1 OR I>N THEN 42 ELSE LN=0:GOSUB 454:IF L$="S" THEN 434
461 '   Change Datum
462 QR=1:IF M=1 THEN J=1:GOTO 464 ELSE IF UT<=0 THEN L=M ELSE L=M-I+1
463 PRINT "Change which variable # (1-"MID$(STR$(L),2)")";:INPUT Z$:J=VAL(Z$):IF J<1 OR J>L THEN BEEP:GOTO 463
464 PRINT "Old value ="X(I,J);TAB(28)"New value";:INPUT Z$:FOR K=1 TO LEN(Z$):IF INSTR("-.0123456789",MID$(Z$,K,1))THEN NEXT K:X(I,J)=VAL(Z$) ELSE PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 464
465 PRINT "Revised Row"STR$(I)": ";:FOR J=1 TO L:PRINT X(I,J);:NEXT J:PRINT:IF M=1 THEN 434 ELSE DO$="change that row again":GOSUB 20:IF Z$="Y" THEN 463 ELSE 434
466 '   Insert a Row
467 IF UT>0 THEN 43 ELSE KR=CSRLIN:PRINT "Working";:LOCATE KR,1,0
468 II=VAL(MID$(OP$,2)):IF II<1 OR II>N OR N=MXR THEN 42 ELSE QR=1:N=N+1:FOR I=N TO II+1 STEP -1:FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT:NEXT
469 I=II:PRINT "Row"STR$(I);:INPUT X$:GOSUB 50:GOTO 434
470 '   Delete Rows
471 IF UT>0 THEN 44 ELSE KR=CSRLIN:COLOR 23,0:PRINT "Working";:LOCATE KR,1,0:COLOR 7,0
472 J=INSTR(OP$,"-"):IF J=0 THEN I=VAL(MID$(OP$,2)):Q=1 ELSE I=VAL(MID$(OP$,2,J-1)):II=VAL(MID$(OP$,J+1)):Q=ABS(I-II)+1
473 IF I<1 OR I>N THEN 42 ELSE IF Q>1 THEN IF II<1 OR II>N THEN 42 ELSE IF I>II THEN SWAP I,II
474 QR=1:N=N-Q:FOR K=I TO N:FOR J=1 TO M:X(K,J)=X(K+Q,J):NEXT:NEXT:PRINT "OK, done.":GOTO 434
475 '   Extra Rows
476 IF UT>0 THEN 43 ELSE R$=CHR$(ASC(RIGHT$(OP$,1)) AND 95):IF R$="C" THEN 480 ELSE IF R$<>"R" OR N=MXR THEN 42
477 PRINT"You can append up to"MXR-N"extra rows (each with"M"variables).":N1=N+1:I=N1:N=0:QR=1:Q=1
478 GOSUB 70:DO$="view those extra rows":GOSUB 20:IF Z$="Y" THEN 450 ELSE 429
479 '   Extra Cols
480 OP$="XC":IF M=MXC THEN PRINT"This file already has the maximum number of variables,"MXC:GOTO 42 ELSE PRINT"No. of extra variables per row (max"STR$(MXC-M)")";:INPUT MM:IF MM<1 OR M+MM>MXC THEN 42
481 IF VN$="N" THEN 485 ELSE PRINT "Names of extra variables (1-10 letters each), 1 per line --":FOR J=M+1 TO M+MM
482 PRINT"Var"J"? ";:LINE INPUT VN$(J)
483 IF INSTR(VN$(J),Q$) THEN GOSUB 41:GOTO 482 ELSE VN$(J)=LEFT$(VN$(J),10)
484 NEXT J
485 PRINT"Enter extra variables in Free Format --":FOR I=1 TO N:PRINT"Row"STR$(I)":";:FOR J=1 TO M:PRINT X(I,J);:NEXT J
486 INPUT"  ";X$:M=M+MM:GOSUB 50:M=M-MM:NEXT I:M=M+MM:GOTO 434
487 '   Saving Data on Disk
488 GOSUB 140:GOTO 434
489 '   Printout
490 IF FL$="" THEN PRINT "Please file this data first.";:PLAY"L8O1CO3CO5C":GOSUB 5:GOTO 429
491 QB=4:CLS:LOCATE 8,1,0:K=12
492 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
493 PRINT TAB(K)"║                TURN PRINTER ON.                       ║"
494 PRINT TAB(K)"║                                                       ║"
495 PRINT TAB(K)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
496 PRINT TAB(K)"║                                                       ║"
497 PRINT TAB(K)"║    To send Printer Codes in Basic before printing,    ║"
498 PRINT TAB(K)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
499 PRINT TAB(K)"║                                                       ║"
500 PRINT TAB(K)"║ If this is showing, you can press / to stop printing. ║"
501 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1:IN$=INKEY$:IF IN$="/" THEN 429
502 IN$=INKEY$:IF IN$="/" THEN 429 ELSE IF IN$<>CHR$(13) THEN 502
503 QB=2:LPRINT CHR$(10)STRING$(79,61)CHR$(10):LPRINT CHR$(14)"FILENAME: "FL$;SPACE$(10)VER$
504 LPRINT CHR$(10)"Problem ID: "ID$;CHR$(10):LPRINT "Made: "DAT$,"ROWS ="N,"COLUMNS ="M;CHR$(10)
505 IF VN$="N"THEN LPRINT"Variables not named."CHR$(10) ELSE FOR J=1 TO M:LPRINT"Var"STR$(J)"="VN$(J),:NEXT J:LPRINT CHR$(10)
506 FOR I=1 TO N:IN$=INKEY$:IF IN$="/" THEN I=N:GOTO 509
507 IF UT<=0 THEN L=M ELSE L=M-I+1
508 FOR J=1 TO L:LPRINT X(I,J);:NEXT J:LPRINT
509 NEXT I:IF IN$="/" THEN PRINT "Printing aborted as requested.";:GOSUB 5:GOTO 429
510 LPRINT CHR$(10)STRING$(80,61)STRING$(4,10):GOTO 429
511 'end
```

## MENU.BAS

```bas
1 '      MENU for EASY-STATS  ---  MENU.BAS  ---  by  Dr Russell Langley
2 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:DEFINT A-Z:DIM OP$(40,1)
3 HD$="... EASY-STATS  by  LANGLEY ...":PRINT TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$:COLOR 7,0
4 PRINT:PRINT"  Use ARROW KEYS to move pointer to your choice, then press <ENTER> to run it.":PRINT STRING$(80,196)
5 FOR J=1 TO 40:READ OP$(J,0),OP$(J,1):IF OP$(J,0)="END" THEN OP$(J,0)="":OP=J-1:J=40
6 NEXT J:IF OP=0 THEN OP=40
7 IF OP <19 THEN N=OP ELSE N=INT(OP/2+0.5)
8 TOP=8:BOT=TOP+N-1:LT=3:GAP=40:RT=LT+GAP
9 FOR J=1 TO N:LOCATE TOP+J-1,LT+2,0:PRINT OP$(J,0):NEXT J:IF OP>N THEN FOR J=1 TO N:LOCATE TOP+J-1,RT+2,0:PRINT OP$(N+J,0);:NEXT J
10 P$=CHR$(16):S$=" ":LOCATE TOP,LT,0:PRINT P$;
11 ROW=CSRLIN:COL=POS(0):IN$=INKEY$:IF IN$=CHR$(13) THEN 17 ELSE IF LEN(IN$)<>2 THEN 11
12 ON ASC(RIGHT$(IN$,1))-71 GOTO 13,11,11,14,11,15,11,11,16:GOTO 11
13 IF ROW>TOP THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW-1,COL:PRINT P$;:GOTO 11 ELSE 11
14 IF COL=RT+1 THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW,COL-GAP:PRINT P$;:GOTO 11 ELSE 11
15 IF COL=LT+1 THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW,COL+GAP:PRINT P$;:GOTO 11 ELSE 11
16 IF ROW<BOT THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW+1,COL:PRINT P$;:GOTO 11 ELSE 11
17 J=ROW-TOP+1-(COL=RT+1)*N:IF J>OP THEN 11
18 IF J=1 THEN CLS:LOCATE 1,1:SYSTEM
19 IF J=7 THEN CLS:PRINT"Loading program....":SHELL "CRITS.EXE":GOTO 2
20 OPEN OP$(J,1) FOR INPUT AS #1
21 CLOSE:CLS:PRINT"Loading program....":RUN OP$(J,1)'◙◙---  Menu Items & Filenames ---
41 DATA Exit to DOS,-
42 DATA Ancova & Comparing Regr Lines,ANCOV.BAS
43 DATA Anova 1-way,ANOV1.BAS
44 DATA "Anova 2-way, Unreplicated",ANOVU.BAS
45 DATA "Anova 2-way, Replicated",ANOVR.BAS
46 DATA Anova by Ranks (1- & 2-way),ANOVK.BAS
47 DATA "Bonferroni Critical Z,t,F,r,Chisq",CRITS.EXE
48 DATA Contingency Table Analyses,CONTY.BAS
49 DATA Correlation & Dispersion Matrices,CORMT.BAS
50 DATA Correlations (various),COREL.BAS
51 DATA Data Filer & Editor,DATFL.BAS
52 DATA Descriptive Statistics,DSTAT.BAS
53 DATA Mathematical Functions,MATHF.BAS
54 DATA Matrix Operations,MATOP.BAS
55 DATA Probabilities,PROBS.BAS
56 DATA "Regression, 1 or 2 predictors",REGRS.BAS
57 DATA Regroup Datafile by Categories,GROUP.BAS
58 DATA Remake an Upper Triangular Matrix,REMAK.BAS
59 DATA Standard Scores,ZSCOR.BAS
60 DATA t Tests,TTEST.BAS
61 DATA Tabulation (1 & 2 ways),TABLE.BAS
62 DATA Wilcoxon's Tests,WILCX.BAS
63 DATA END,END
```

## DSTAT.BAS

```bas
1 '     DESCRIPTIVE STATISTICS  ---  DSTAT.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙◙*** Redirect to Block ***
9 ON QB GOTO 403,177,435,30:STOP  '=start,printout,cmd-prompt,quit.◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #87
39 ON ERROR GOTO 0:END'◙◙*** Messages ***
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":RETURN
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
49 '◙--- Vetted Decoding of FF X(I,J) from X$ ---◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT"Row"STR$(I-KN(Q-1));:INPUT X$:IF X$="" THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 AND ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 IF NEEDVARS=0 THEN PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 IF NEEDVARS=2 THEN PRINT"This test analyses only 2 column variables.":ND=M-2
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT:COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:PRINT SPACE$(15):M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" THEN STOP
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" ***
130 IF IO$="O" THEN STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5:DIM X(MXR,MXC):GOTO 110 ' or replace MXC ....
159 '◙--- Show/Print Answers ---
160 QB=3:PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
189 '◙*** Print Data ***◙   Needs X( , ) & QS=1 if Scattergram.
190 DO$="print all the data used":GOSUB 20:IF Z$="N" THEN 193
191 PRINT #2,"DATA USED: "VN$(J);:IF QS=0 THEN PRINT #2,:FOR I=1 TO N:PRINT #2,X(I,J);:NEXT I:PRINT #2,:GOTO 193
192 PRINT #2,", & "VN$(K):FOR I=1 TO N:PRINT #2,X(I,J);X(I,K),:NEXT I
193 PR=0:PRINT #2,:CLOSE:RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR J=1 TO M:IF J<10 THEN VN$(J)="Var #"+STR$(J) ELSE VN$(J)="Var #"+MID$(STR$(J),2)
211 NEXT J:RETURN
229 '◙--- Stats of X(I,J), I=II to NN  (for Sample Q if NS>1) ---
230 S1=0:S2=0:S3=0:S4=0:SM=X(II,J):GR=SM:FOR I=II TO NN:X=X(I,J)-X(II,J):S1=S1+X:S2=S2+X*X:S3=S3+X*X*X:S4=S4+X*X*X*X:IF X(I,J)<SM THEN SM=X(I,J) ELSE IF X(I,J)>GR THEN GR=X(I,J)
231 NEXT I:IF GR-SM<0.00001 THEN 237
232 NN=NN-II+1:AV=S1/NN:SS=S2-S1*AV:VA=SS/(NN-1):SD=SQR(VA):SE=SQR(VA/NN):VAN=SS/NN:SDN=SQR(VAN)
233 SKEW=(S3-3*S2*AV+2*AV^3*NN)/SQR(SS^3/NN):ZSKEW=SKEW/SQR(6*(NN-2)/((NN+1)*(NN+3))):CURT=(S4-4*S3*AV+6*S2*AV^2-3*AV^4*NN)/(SS^2/NN):ZCURT=(CURT-3)/SQR(24/NN)
234 AV=AV+X(II,J):TG1=(AV-SM)/SD:TG2=(GR-AV)/SD
236 RETURN
237 LOCATE,1:PRINT"Fatal Error.  Var #"J"has no variation.":GOSUB 5:END
249 '◙--- Transform Sub ---
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None (leaving data unchanged)"
252 PRINT"◙"TAB(10)"Negative codes reverse transforms (e.g. -3 = Antilog)◙":LOCATE,,1
253 INPUT"Which transform (+/- 1 to 9, or 10)";T%:IF T%=10 THEN 273 ELSE IF ABS(T%)<1 OR ABS(T%)>9 THEN PRINT"WHAT?  ";:GOTO 253
254 IF M=1 THEN NT=1:Q(1)=1:GOTO 257 ELSE PRINT"How many variables are to have this transform (max"STR$(M)")";:INPUT NT:IF NT<1 OR NT>M THEN 254 ELSE IF NT=M THEN FOR J=1 TO M:Q(J)=J:NEXT J:GOTO 257
255 IF NT=1 THEN INPUT"Which variable # ";X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN PRINT"Silly":GOTO 255 ELSE 257
256 PRINT"Which"NT"variables (#'s in Free Format)";:INPUT X$:I=1:MM=M:M=NT:Q(0)=1:GOSUB 50:Q(0)=0:M=MM:FOR J=1 TO NT:IF Q(J)>0 AND Q(J)<=M THEN NEXT J ELSE PRINT"Value"J"is out-of-bounds.  Try again.":GOTO 256
257 GOSUB 43:A=57.29578:B=0.4342945:Z=0:U=1:H=100:P5=0.5:P9=0.99999:E$(0)=""
258 FOR J=1 TO NT:K=Q(J):FOR I=1 TO N:ON T%+10 GOTO 269,270,270,267,267,265,265,262,262,39,260,259,264,263,267,266,269,268,270
259 X(I,K)=X(I,K)/H
260 IF X(I,K)>P9 THEN X(I,K)=P9 ELSE IF X(I,K)<Z THEN 272
261 X(I,K)=SQR(X(I,K)):X(I,K)=A*ATN(X(I,K)/SQR(U-X(I,K)*X(I,K))):GOTO 271
262 IF X(I,K)>=Z THEN X(I,K)=(SIN(X(I,K)/A))^2:IF T%=-U THEN 271 ELSE X(I,K)=H*X(I,K):GOTO 271 ELSE T%=U:GOTO 272
263 X(I,K)=X(I,K)+U
264 IF X(I,K)>Z THEN X(I,K)=B*LOG(X(I,K)):GOTO 271 ELSE 272
265 X(I,K)=EXP(X(I,K)/B):IF T%=-3 THEN 271 ELSE X(I,K)=X(I,K)-U:GOTO 271
266 X(I,K)=X(I,K)+U
267 IF X(I,K)<>Z THEN X(I,K)=H/X(I,K):IF T%=-6 THEN X(I,K)=X(I,K)-U:GOTO 271 ELSE 271 ELSE 272
268 X(I,K)=X(I,K)+P5
269 IF X(I,K)>=Z THEN X(I,K)=SQR(X(I,K)):GOTO 271 ELSE T%=7:GOTO 272
270 X(I,K)=X(I,K)*X(I,K):IF T%=-8 THEN X(I,K)=X(I,K)-P5
271 NEXT I:NEXT J:IF E$(0)=""THEN GOSUB 44:GOTO 273
272 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((ABS(T%)-1)/2)", Row"I:GOSUB 5:END
273 RETURN
289 '◙--- Scattergram Sub ---
290 QS=1:C$="*23456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#":S$=SPACE$(6):S12$=SPACE$(12):P5=0.5:IF QDIM=0 THEN DIM XP(5),O$(41)
291 QDIM=1:INPUT "Horizontal Var # ";J:IF J<1 OR J>M THEN 291 ELSE L=J
292 IF M>2 THEN INPUT "Vertical   Var # ";K:IF K<1 OR K>M OR K=J THEN 292 ELSE 293 ELSE IF J=1 THEN K=2 ELSE K=1
293 GOSUB 43
294 SM=X(1,L):GR=SM:FOR I=2 TO N:Z=X(I,L):IF Z<SM THEN SM=Z ELSE IF Z>GR THEN GR=Z
295 NEXT I
296 IF GR-SM<0.00001 THEN BEEP:J=L:LOCATE ,1:PRINT"Can't proceed. Var"J"has no variation.":GOSUB 5:GOTO 331 ELSE IF L=J THEN H=4 ELSE H=1.5'◙  Select Scales
297 Q=1:KT=0
298 R=GR-SM:C=SM
299 IF R<=1 THEN KT=KT+1:R=R*10:GOTO 299
300 IF R>10 THEN KT=KT-1:R=R/10:GOTO 300
301 IF Q>2 THEN 303 ELSE C=C*10^KT:IF C<0 AND C<>INT(C) THEN C=C-1
302 C=INT(C)/10^KT:R=(GR-C)/H:KT=0:Q=Q+2:GOTO 299
303 F=INT(R):IF F<>R THEN F=F+1
304 IF R<P5 THEN F=F-P5
305 F=F/10^KT:IF Q<>4 THEN IF(GR-SM)/(H*F)<=0.8 THEN KT=1:Q=2:GOTO 298
306 SM=C:D=F*INT(C/F):IF D<0 AND D<>C THEN D=D-F
307 IF D+H*F>=GR THEN SM=D
308 IF L=J THEN X=SM:U=F:L=K:GOTO 294 ELSE Y=SM:V=F'◙  Rpt with Y, then--◙  Calc r
309 IF PR=1 THEN 312 ELSE A=0:B=0:C=0:D=0:E=0
310 FOR I=1 TO N:A=A+X(I,J):B=B+X(I,J)*X(I,J):C=C+X(I,K):D=D+X(I,K)*X(I,K):E=E+X(I,J)*X(I,K):NEXT I
311 E=E-A*C/N:B=B-A*A/N:D=D-C*C/N:PEAR=E/SQR(B*D)
312 NX=41:LX=5:NY=16:A=10/U:B=10/V:IF PR=0 THEN GOSUB 160:CLS ELSE GOSUB 165
313 PRINT #2,"SCATTERGRAM"S$"n ="STR$(N)S$"PEARSON'S r =";USING"+##.###     (*=1, A=10, !=36 or more)";PEAR;"#":PRINT #2,'◙  Scan data points to be plotted
314 O=0:FOR KN=1 TO LX:XP(KN)=X+O*U:O=O+1:NEXT KN
315 FOR I=1 TO NY:Q=I-1:IL=NY-Q:FOR II=1 TO NX:O$(II)=" ":NEXT II
316 FOR L=1 TO N:IX=((X(L,J)-X)*A)+1:IF IX<1 OR IX>NX THEN 320 ELSE IY=((X(L,K)-Y)*B)+1:IF IY<>IL THEN 320 ELSE IF O$(IX)=" " THEN O$(IX)="*":GOTO 320
317 IF O$(IX)="#" THEN 320
318 FOR KK=1 TO 35:IF O$(IX)=MID$(C$,KK,1) THEN O$(IX)=MID$(C$,KK+1,1):KK=35
319 NEXT KK
320 NEXT L'◙  Print a line
321 FOR L=41 TO 1 STEP -1:IF O$(L)=" " THEN NEXT L:LN=1 ELSE LN=L
322 IF Q MOD 5 <>0 THEN 325
323 O=H-Q/10:D=Y+O*V:IF D<100000. THEN PRINT #2,USING"##########.#";D;:PRINT #2,"+ ";:FOR L=1 TO LN:PRINT #2,O$(L);:NEXT L:GOTO 327
324 IY=INT(D+P5):PRINT #2,USING"############";IY;:PRINT #2,"+ ";:FOR L=1 TO LN:PRINT #2,O$(L);:NEXT L:GOTO 327
325 IF I<>3 THEN PRINT #2,S12$; ELSE PRINT #2,USING"\        \  ";VN$(K);
326 PRINT #2,"| ";:FOR L=1 TO LN:PRINT #2,O$(L);:NEXT L
327 PRINT #2,:NEXT I'◙  Print X-axis
328 PRINT #2,S12$"  +";:FOR I=1 TO 4:PRINT #2,"---------+";:NEXT I:PRINT #2,:PRINT #2,S$;
329 FOR I=1 TO LX:PRINT #2,USING"########.#";XP(I);:NEXT I:PRINT #2,:PRINT #2,S12$S12$S$;VN$(J)
330 IF PR THEN PRINT #2,:GOSUB 190 ELSE GOSUB 161:IF PR THEN L=J:GOTO 294
331 QS=0:CLOSE:RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:MXR=400:MXC=20:Q$=CHR$(34)
402 DIM I,J,K,L,M,N,X$,Y$,Z$,C$,KN,I2,KK,X(MXR,MXC),VN$(MXC),N(14),PE(14),E$(3)
403 QB=4:HD$=" D E S C R I P T I V E    S T A T I S T I C S ":VER$="(RL,10)"
404 GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
405 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
406 PRINT TAB(K)"║                                                       ║"
407 PRINT TAB(K)"║     Computes Univariate &/or Bivariate statistics.    ║"
408 PRINT TAB(K)"║        Data can be from keyboard or disk file.        ║"
409 PRINT TAB(K)"║     Features vetted Free Format entry for numbers.    ║"
410 PRINT TAB(K)"║           Max rows = 400.   Max cols = 20.            ║"
411 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
412 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
413 PRINT TAB(K)"║                                                       ║"
414 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
415 P5=0.5:S$=SPACE$(6):H$=" = Histogram & Statistics":SC$="Scattergram"
416 FA$="### ###   <+#.#:":FB$="### ###   >+#.#:":F3$="##.#":F4$="=####":F6$="=###.##":F7$="=####.##":F8$="=########":F1$="=########.##"
417 FOR J=1 TO 7:READ PE(J):PE(15-J)=PE(J):NEXT:DATA .00135,.00486,.01654,.044057,.091848,.149883,.191462
418 '◙--- Get Data ---
419 DO$="enter data from disk":GOSUB 20:QB=1:PRINT:IF Z$="N" THEN 423
420 '◙--- Disk Entry ---
421 MNR=3:MNC=1:GOSUB 80:GOSUB 210:GOTO 430
422 '◙--- K/b Entry ---
423 PRINT"No. of variables (cols, 1-"MID$(STR$(MXC),2)")";:INPUT M:IF M<1 OR M>MXC THEN 423
424 PRINT"Variable Names (1-10 letters each) 1 per line, or Null Entry if no names:":FOR J=1 TO M
425 PRINT"Var"J"? ";:LINE INPUT VN$(J):IF VN$(1)="" THEN VN$="N":J=M:GOTO 427 ELSE VN$="Y"
426 IF INSTR(VN$(J),Q$) THEN GOSUB 41:GOTO 425 ELSE VN$(J)=LEFT$(VN$(J),10)
427 NEXT J
428 I=1:Q=1:GOSUB 70:GOSUB 210
429 '◙--- Menu ---
430 CLS:PRINT TAB(26)"COMMAND MENU":LOCATE 4,1,0:PRINT"Indicate your requirements thus---":K=12
431 PRINT"◙"TAB(K)"SA = Show all data◙"TAB(K)"C# = Change row #◙"TAB(K)"D# = Delete row #";
432 PRINT"◙"TAB(K)"I# = Insert row # (in Free Format)◙"TAB(K)"XR = Extra rows to be added (from keyboard)◙"TAB(K)"T  = Transform variables";
433 PRINT"◙"TAB(K)"H";:IF M=1 THEN PRINT" "H$;ELSE PRINT"#"H$" of Variable #◙"TAB(K)"S  = "SC$;:IF M>2 THEN PRINT"s of Selected Variables";
434 PRINT"◙"TAB(K)"Q  = Quit or Re-run"
435 QB=3:CLOSE:PRINT:PRINT"====> COMMAND (SA, C#, D#, I#, XR, T, H";:IF M>1 THEN PRINT"#, S";
436 PRINT", Q, Null=Menu) ";:LOCATE ,,1
437 INPUT OP$:IF OP$="" THEN 430 ELSE PRINT:IF OP$="SA" OR OP$="sa" THEN 442
438 IF OP$="XR" OR OP$="xr" THEN 457 ELSE IF OP$="T" OR OP$="t" THEN GOSUB 250:GOTO 430 ELSE IF (OP$="H" OR OP$="h") AND M=1 THEN J=1:GOTO 459 ELSE IF OP$="S" OR OP$="s" THEN 492 ELSE IF OP$="Q" OR OP$="q" THEN 10
439 L$=CHR$(ASC(OP$) AND 95):I=VAL(MID$(OP$,2)):IF I>0 AND I<=N THEN IF L$="C" THEN 448 ELSE IF L$="D" OR L$="I" THEN 453 ELSE IF L$="H" THEN J=I:IF J<=M THEN 459
440 GOSUB 42:GOTO 435
441 '◙--- Show Data ---
442 I=1:PRINT:IF QR=0 THEN PRINT"Data read was---"ELSE PRINT"Revised data is---"
443 GOSUB 200:IF I MOD 20=0 THEN GOSUB 6:IF IN$="/" THEN 445
444 I=I+1:IF I<=N THEN 443 ELSE PRINT
445 IF VN$<>"Y" THEN PRINT"Variables not named"; ELSE FOR J=1 TO M:PRINT TAB(1+30*((J+2) MOD 3)) USING"Var##=";J;:PRINT VN$(J);:NEXT J:PRINT
446 GOSUB 5:GOTO 430
447 '◙--- Change Datum ---
448 QR=1:IF M=1 THEN J=1:GOTO 450 ELSE GOSUB 200
449 PRINT "Change which variable # (1-"MID$(STR$(M),2)")";:INPUT Z$:J=VAL(Z$):IF J<1 OR J>M THEN BEEP:GOTO 449
450 PRINT "Old value ="X(I,J);TAB(28)"New value";:INPUT Z$:FOR K=1 TO LEN(Z$):IF INSTR("-.0123456789",MID$(Z$,K,1))THEN NEXT K:X(I,J)=VAL(Z$) ELSE PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 450
451 PRINT "Revised Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:IF M=1 THEN 435 ELSE DO$="change that row again":GOSUB 20:IF Z$="Y" THEN 449 ELSE 435
452 '◙--- Delete, Insert, or Add Extra Rows ---
453 IF INSTR(OP$,"-") THEN GOSUB 40:GOTO 435 ELSE GOSUB 43:IF L$="I"THEN 455
454 N=N-1:FOR K=I TO N:FOR J=1 TO M:X(K,J)=X(K+1,J):NEXT:NEXT:GOSUB 44:GOTO 430
455 IF N=MXR THEN 440 ELSE N=N+1:QR=1:FOR K=N TO I+1 STEP -1:FOR J=1 TO M:X(K,J)=X(K-1,J):NEXT:NEXT:LOCATE,1
456 PRINT"Row"STR$(I);:INPUT X$:GOSUB 50:GOSUB 44:GOTO 430
457 IF N=MXR THEN 440 ELSE PRINT"You can append up to"MXR-N"extra rows (each with"M"variables)":N1=N+1:I=N1:N=0:Q=1:QR=1:GOSUB 70:GOTO 430
458 '◙--- Compute ---
459 GOSUB 43:II=1:NN=N:GOSUB 230
460 FOR L=1 TO 14:N(L)=0:NEXT L
461 FOR I=1 TO N:Z=(X(I,J)-AV)/SDN:L=INT(2*(Z+3.5)+1):IF L<1 THEN L=1 ELSE IF L>14 THEN L=14
462 N(L)=N(L)+1:IF I=1 THEN 464
463 SQ=SQ+(X(I,J)-X(I-1,J))^2:IF I>2 THEN IF X(I-1,J)>X(I,J)AND X(I-1,J)>X(I-2,J)OR X(I-1,J)<X(I,J)AND X(I-1,J)<X(I-2,J)THEN TU=TU+1
464 NEXT I
465 T1=(AV-SM)/SD:T2=(GR-AV)/SD:RS=(GR-SM)/SD:VNR=(SQ/(N-1))/VAN:R1=1-VNR/2:ET=(2*N-4)/3:ZT=(ABS(TU-ET)-P5)/SQR((16*N-29)/90)
466 '◙--- Histogram ---
467 GOSUB 160:CLS
468 PRINT #2,"HISTOGRAM of Z SCORES of "VN$(J);:F0$=FA$
469 PRINT #2,SPACE$(6)"(Exp=Expected if Population Normal)":PRINT #2,:PRINT #2,"Exp Obs     Z  ";:FOR K=0 TO 5:PRINT #2,RIGHT$(STR$(K),1)"----+----";:NEXT K:PRINT #2,USING"#";6:F0$=FA$:ZL=-3
470 FOR L=1 TO 14:NE=INT(PE(L)*N+P5):PRINT #2,USING F0$;NE;N(L);ZL;
471 IF N(L) THEN IF N(L)<60 THEN PRINT #2,STRING$(N(L),42);ELSE PRINT #2,STRING$(55,42)"===>";
472 IF L<14 THEN PRINT #2,:IF L<13 THEN ZL=ZL+P5 ELSE ZL=3:F0$=FB$
473 NEXT L:PRINT #2,:GOSUB 5:GOTO 475
474 '◙--- Statistics ---
475 IF PR=0 THEN CLS ELSE PRINT #2,:PRINT #2,
476 PRINT #2,"STATISTICS of "VN$(J):PRINT #2,
477 PRINT #2,"First 6 data values:";:FOR I=1 TO 6:PRINT #2,X(I,J);:NEXT I
478 PRINT #2,:PRINT #2,:PRINT #2,"n  ";USING F8$;N
479 PRINT #2,"Ave";USING F1$+S$+"SD"+F7$;AV;SD
480 PRINT #2,"Var";USING F1$+S$+"SE"+F7$;VA;SE
481 PRINT #2,"Min";USING F1$+S$+"T "+F7$+" (Thompson-Grubbs, Technometrics 1969, p.4)";SM;T1
482 PRINT #2,"Max";USING F1$+S$+"T "+F7$+" (Ditto)";GR;T2
483 PRINT #2,"Sqrt(B1)";USING F6$+S$+"Z "+F7$+" (BTS 34B)";SKEW;ZSKEW
484 PRINT #2,"B2";S$;USING F6$+S$+"Z "+F7$+" (BTS 34C)";CURT;ZCURT
485 PRINT #2,"Range/SD";USING F6$+SPACE$(17)+"(BTS 29C)";RS
486 PRINT #2,"Serial Correlation, R1 ";USING F7$+" (Yamane, Stats, 3rd, p.1094)";R1
487 PRINT #2,"Von Neumann Ratio =";USING"#######.#### (Ditto, 1095)";VNR
488 PRINT #2,"Turns";USING F4$+S$+"Exp="+"####.#"+S$+"Z"+F6$;TU;ET;ZT
489 PRINT #2,:PRINT #2,"Note: `BTS xxx' = Biometrika Tables for Statisticians, ed 3, vol 1, Table `xxx'.":PRINT #2,:PRINT #2,
490 IF PR THEN GOSUB 190:GOTO 430
491 PRINT TAB(39)"====> See Histogram Again";:GOSUB 21:IF Z$="Y" THEN CLS:GOTO 468 ELSE LOCATE CSRLIN-1,39:PRINT SPACE$(34);:GOSUB 161:IF PR THEN GOSUB 165:GOTO 468 ELSE 430
492 '◙--- Scattergram ---
493 GOSUB 290:GOTO 430
494 END
```

## GROUP.BAS

```bas
1 '          REGROUP   ---   GROUP.BAS    by  Dr Russell Langley
2 GOTO 400
4 '◙*** Press Enter ***
5 PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 30,400,421 :STOP 'quit, restart, show file details again.◙◙--- Another go? ---
10 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M, & Q(0)=1 from #96 or Q(0)=0 from #446.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0)=0 THEN L(J)=VAL(Y$) ELSE Q(J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 Q(0)=-9
60 RETURN
79 '◙*** Disk Input of X(I,J), N, M, etc ***◙    Needs MNR, MNC.
80 IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT<>0 THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC THEN 100 ELSE PRINT
91 PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" or "O" ---
130 IF IO$="I" THEN 134 ELSE ON ERROR GOTO 132:OPEN DR$+FL$ FOR INPUT AS #1
131 CLOSE:DO$="<OVERWRITE> existing "+FL$:GOSUB 20:IF Z$="N" THEN 110 ELSE 133
132 RESUME 133  'OK to start new file, since FL$ not present.
133 ON ERROR GOTO 30:OPEN DR$+FL$ FOR OUTPUT AS #1:RETURN  'print #1,Q$A$Q$Q$B$Q$:close
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,MXC)
139 GOTO 110 '◙*** Save data ***
140 IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 142
141 LINE INPUT "Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
142 Q$=CHR$(34):IO$="O":GOSUB 110
143 PRINT"Saving data on disk ..... ";:PRINT #1,Q$FL$Q$Q$VER$Q$:PRINT #1,Q$DAT$Q$Q$ID$Q$;N;M;UT;Q$VN$Q$
144 IF VN$="Y" THEN FOR J=1 TO M:PRINT #1,Q$VN$(J)Q$;:NEXT J:PRINT #1,""
145 FOR I=1 TO N
146 FOR J=1 TO M:PRINT #1,X(GP(I-1),J);:NEXT J:NEXT I:CLOSE:PRINT "done."
147 DO$="backup this file under the name "+FL$:GOSUB 20:IF Z$="Y" THEN GOSUB 115:GOTO 143 ELSE RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙--- Integer Array Sorter  (J. Dorner) ---◙    Call by:   DEF SEG:INTSORT=VARPTR(INTSORT%(0)):CALL INTSORT(n,x%(0))
350 DIM INTSORT%(21):RESTORE 351:FOR I=0 TO 21:READ INTSORT%(I):NEXT I:DEF SEG:INTSORT=VARPTR(INTSORT%(0)):RETURN
351 DATA &H5590,&HEC8B,&H1BB,&H8B00,&H876,&HC8B,&H7449,&H8B19
352 DATA &H676,&H48B,&H4439,&H7302,&H8707,&H244,&H489,&HDB33
353 DATA &H4646,&HEEE2,&HDB0B,&HDC74,&HCA5D,&H4
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,C,E,F,G,Q,S:MXR=400:MNR=4:MXC=20:MNC=2:MG=31
402 DIM I,J,K,L,M,N,Q,X$,Y$,Z$,X(MXR,MXC),C(MG),GP(MXR),L(MG),N(MG),Q(MG),VN$(MXC)
403 HD$="  R E G R O U P  ":VER$="(RL,6)"
404 QB=1:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
405 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
406 PRINT TAB(K)"║                                                       ║"
407 PRINT TAB(K)"║  This program rearranges the order of persons (rows)  ║"
408 PRINT TAB(K)"║  in a datafile. It allows persons who share the same  ║"
409 PRINT TAB(K)"║  value of a `label' (0-30) to be grouped together.    ║"
410 PRINT TAB(K)"║                                                       ║"
411 PRINT TAB(K)"║  So all persons in Group `1' can be put at the top of ║"
412 PRINT TAB(K)"║  the file, those in Group `2' can come next, & so on. ║"
413 PRINT TAB(K)"║  You can specify any order of groups, like 4 2 5 3 1. ║"
414 PRINT TAB(K)"║   Put any UNWANTED groups at the BOTTOM of the list,  ║"
415 PRINT TAB(K)"║      and omit them when saving the regrouped file.    ║"
416 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
417 PRINT TAB(K)"║                                                       ║"
418 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1:PRINT
419 '◙--- Get & Show Data ---
420 GOSUB 80
421 QB=2:CLOSE:PRINT"Filename: "FL$:IF VN$="N" THEN PRINT"Variables not named.":GOTO 423
422 FOR J=1 TO M:PRINT J;VN$(J),:NEXT J:PRINT
423 PRINT"Data read was ---":LN=0:FOR I=1 TO N:LN=LN+1
424 IF LN=21 THEN LN=1:GOSUB 6:IF IN$="/" THEN 426
425 PRINT"Row";STR$(I);": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:IF LN=0 THEN I=N
426 NEXT I:IF IN$<>"/" THEN GOSUB 5
427 '◙--- Identify variable containing the Group Label ---
428 PRINT"In the datafile, what VARIABLE # is the GROUP LABEL (1-"MID$(STR$(M),2)")";:INPUT LAB:IF LAB<1 OR LAB>M THEN BEEP:GOTO 428
429 PRINT"Ok.   Wait while I examine its values."
430 '◙--- Make integer array GP(I), I=0 to N-1, concatenating Group Label & Row #,        with max value of 30400 if 31 groups (0-30) & 400 rows.
431 FOR I=1 TO N:IF X(I,LAB) > 30 THEN BEEP:PRINT"ERROR.  Processing stopped because Row"I"has a label > 30.":GOSUB 5:GOTO 10
432 GP(I-1)=X(I,LAB)*1000+I
433 NEXT I
434 '◙--- Sort Labels in ascending order of groups ---
435 GOSUB 350:DEF SEG:INTSORT=VARPTR(INTSORT%(0)):CALL INTSORT(N,GP(0))
436 '◙--- Get label values L(J), J=1 to NG, & N(J)=# in Jth gp, C(J)=cum # of N(J)'s.
437 Z=0:J=1:L(J)=GP(0)\1000:N(J)=1:C(J)=0
438 FOR I=2 TO N
439 IF GP(I-1)\1000=GP(I-2)\1000 THEN N(J)=N(J)+1 ELSE C(J)=C(J-1)+N(J):IF J<MG THEN J=J+1:L(J)=GP(I-1)\1000:N(J)=1 ELSE I=N:Z=9
440 NEXT I:IF Z=0 THEN NG=J:C(J)=N:GOTO 443
441 PRINT"Variable #"LAB"contains more than"MG"(0-30) different group labels.":DO$="group persons by another variable":GOSUB 20:IF Z$="Y" THEN 428 ELSE 10
442 '◙--- Show ascending labels L(J), & seek a different sequence ---
443 PRINT"Variable #"LAB"has the following Group Labels:":FOR J=1 TO NG:PRINT L(J);:NEXT J:PRINT
444 PRINT"Is this order Ok for your regrouped datafile";:GOSUB 21:IF Z$="Y" THEN 459
445 '◙--- Get new group order, & check validity of entries ---
446 PRINT"Enter required sequence of groups ---"NG"Group Label Values in Free Format:":INPUT X$:MM=M:M=NG:Q(0)=0:GOSUB 50:M=MM:IF Q(0)=-9 THEN 446
447 KT=0:FOR J=1 TO NG:FOR K=1 TO NG
448 IF L(J)=GP(C(K-1))\1000 THEN KT=KT+1:K=NG
449 NEXT K:NEXT J:IF KT<NG THEN BEEP:PRINT"You've entered 1 or more WRONG LABEL VALUES.  Please re-do.":GOTO 446
450 '◙--- Remake GP(I-1), I=1 to N, by going thru X(I,TAB) for each label in turn ---
451 K=0:FOR J=1 TO NG
452 FOR I=1 TO N:IF X(I,LAB)=L(J) THEN GP(K)=X(I,LAB)*1000+I:K=K+1
453 NEXT I:NEXT J
454 '◙--- Count Group Sizes again ---
455 J=1:N(J)=1:C(J)=0:FOR I=2 TO N
456 IF GP(I-1)\1000=GP(I-2)\1000 THEN N(J)=N(J)+1 ELSE C(J)=C(J-1)+N(J):J=J+1:N(J)=1
457 NEXT I
458 '◙--- Show Outcome ---
459 CLS:PRINT TAB(20)"SUMMARY OF REGROUPED DATA":PRINT:PRINT TAB(22)"#   GROUP-LABEL   SIZE":F$="####":G$=F$+"     "+F$+"       "+F$:H$="TOTAL ="+F$
460 FOR J=1 TO NG:PRINT TAB(19);USING G$;J;L(J);N(J):IF J=15 THEN GOSUB 5
461 NEXT J:PRINT TAB(32);USING H$;N:PRINT
462 PRINT TAB(15)"Press <Enter> to see Regrouped Data";:LINE INPUT;"";Z$:LOCATE ,1:PRINT SPACE$(60);:LOCATE ,1:GOSUB 43:LOCATE ,1
463 FOR I=1 TO N:GP(I-1)=GP(I-1)-(GP(I-1)\1000)*1000:NEXT I
464 PRINT"REGROUPED DATA:":FOR I=1 TO N
465 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(GP(I-1),J);:NEXT J:PRINT:IF I MOD 20=0 THEN GOSUB 5
466 NEXT I
467 '◙--- Delete Bottom Groups? ---
468 DO$="delete any groups from the bottom":GOSUB 20:IF Z$="N" THEN 473
469 PRINT"Delete how many groups (0-"MID$(STR$(NG-1),2)", or Null to re-view the data) ";:INPUT Z$:IF Z$="" THEN 459
470 Q=VAL(Z$):IF Q<0 OR Q>NG-1 THEN BEEP:GOTO 469 ELSE IF Q=0 THEN PRINT"Ok, none deleted!":GOTO 473
471 NG=NG-Q:N=C(NG)
472 '◙--- File Regrouped Data ---
473 PRINT:PRINT"Well, let's proceed now to save your rearranged datafile."
474 GOSUB 140
475 '◙--- Print Regrouped Data ---
476 BEEP:DO$="print this datafile on your printer":GOSUB 20:IF Z$="N" THEN 486
477 PRINT:COLOR 23,0:PRINT "Turn printer on, then press <ENTER>";:COLOR 7,0:LINE INPUT;"";Z$:LOCATE ,1:PRINT SPACE$(60)
478 LPRINT STRING$(79,"="):LPRINT" ":LPRINT CHR$(14);"R E G R O U P E D    D A T A";CHR$(20)   '= Wide letters on Epson printers.
479 LPRINT" ":LPRINT"Problem ID: "ID$
480 LPRINT" ":LPRINT"Filename: "FL$:LPRINT" ":IF VN$="N" THEN LPRINT"Variables not named." ELSE FOR J=1 TO M:LPRINT"Var"STR$(J)"="VN$(J)"  ";:NEXT J:LPRINT" "
481 LPRINT" ":LPRINT"   #   GROUP-LABEL   SIZE"
482 FOR J=1 TO NG:LPRINT USING G$;J;L(J);N(J):NEXT J:LPRINT USING SPACE$(13)+H$;N
483 LPRINT" ":LPRINT"DATA NOW:":FOR I= 1 TO N
484 LPRINT"Row"STR$(I)": ";:FOR J=1 TO M:LPRINT X(GP(I-1),J);:NEXT J:LPRINT
485 NEXT I:LPRINT" ":LPRINT STRING$(79,"=");STRING$(3,10)
486 GOTO 10
487 'end
```

## MATHF.BAS

```bas
9 GOTO 40
15                                                                                                                                                   :
20 + - * / ^ = SQR LOG EXP ABS SIN COS TAN INT RETURN
25 '
30 '  << MATHEMATICAL  FUNCTIONS  ---  MATHF.BAS --- by  Dr Russell Langley >>
35 '
40 CLEAR:DEF SEG:KEY OFF:ON ERROR GOTO 1610:DEFINT I-N:DIM X(401),Y(401),Z(401),T$(6),TC$(6),U$(9),UC$(9):HD$=" M A T H E M A T I C A L   F U N C T I O N S ":VER$="(RL,8)"
45 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4)
50 F1$="(##)   ######.# ######.###":F2$=F1$+" ######.###":W$="WORKING."
55 CLS:SCREEN 0,0,0,0:IT=0
60 PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$
65 LOCATE 3,8:PRINT "Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT TAB(22)"If trouble, try <Ctrl-Break> & GOTO 9.":PRINT STRING$(80,196):LOCATE 7,1:K=14
70 PRINT:PRINT TAB(K)"1.  Derivative of any Function"CHR$(10)TAB(K)"2.  Exponential Curve Fitting, Y = K + A * (B ^ X)"CHR$(10)TAB(K)"3.  Factorials, Permutations, & Combinations"CHR$(10)TAB(K)"4.  Function Plotter, Y = f(X)"
75 PRINT TAB(K)"5.  Integration"CHR$(10)TAB(K)"6.  Interpolation, linear"CHR$(10)TAB(K)"7.      ditto    , linear reciprocal"CHR$(10)TAB(K)"8.      ditto    , curvilinear"CHR$(10)TAB(K)"9.  Polynomial Roots"
80 PRINT TAB(K-1)"10.  Simultaneous Linear Equations, solving"CHR$(10)TAB(K-1)"11.  Return to Main Menu":PRINT
85 PRINT"     Note:  Data entry only from keyboard in this program.":PRINT
90 LOCATE ,K-1:INPUT"===> Option (1-11) ";OP:ON OP GOTO 880,630,1520,215,915,455,510,570,790,1080,1630:PRINT "Silly!":GOTO 90
95 '
100 ' -- SUBROUTINES
105 '
110 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT "  "ZZ$:RETURN
115 INPUT" (Y/N)";YN$:IF YN$="" THEN YN$="N":RETURN ELSE YN$=CHR$(ASC(YN$) AND 95):IF YN$="Y" OR YN$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 115
120 IF OP<>4 THEN PRINT TAB(46)"Press ANY KEY to continue";:Z$=INKEY$ ELSE PRINT TAB(68)"Press a key";:Z$=INKEY$
125 IF INKEY$ =""THEN 125 ELSE IF OP<>4 THEN LOCATE ,39:PRINT SPACE$(35):RETURN ELSE LOCATE 25,68:PRINT SPACE$(11);:RETURN
130 ' -- Read row I of A(I,J) for J=1 to M, in FF.
135 INPUT X$:IF X$="" THEN PRINT"WHAT";:GOTO 135 ELSE K=0
140 FOR J=1 TO M:Y$="":QP=0
145 K=K+1:IF K=LEN(X$) THEN Y$=Y$+RIGHT$(X$,1):IF J=M THEN 155 ELSE J=M:FLAG=1:GOTO 160
150 Z$=MID$(X$,K,1):IF Z$>" " THEN Y$=Y$+Z$:QP=1:GOTO 145 ELSE IF QP=0 THEN 145
155 A(I,J)=VAL(Y$)
160 NEXT J:IF FLAG=1 THEN FLAG=0:BEEP:PRINT"Not enough values.  Please re-do whole line.":GOTO 135 ELSE RETURN
165 '  -- Line Counter
170 L=L+1:IF L>20 THEN GOSUB 120:L=1
175 RETURN
180 ' -- Permutation Sub
185 M=N1:E=0:IF X=0 THEN RETURN
190 FOR J=X TO 1 STEP -1:IF M>=NT THEN M=M/NT:E=E+T
195 M=M*N:N=N-N1:NEXT J:RETURN
200 '
205 ' -- FUNCTION PLOTTER
210 '
215 CLS:Z$="F U N C T I O N   P L O T T E R":GOSUB 110
220 PRINT:PRINT:PRINT"After the `?', enter required function Y=f(X) in BASIC, starting with `Y='":PRINT"Any fractions must have 1 or more digits before the decimal point.":PRINT
225 IF T$(1)="+" THEN 255
230 DATA "+","-","*","/","^","=",SQR,LOG,EXP,ABS,SIN,COS,TAN,INT,RETURN
235 FOR I=1 TO 6:READ T$(I):NEXT I:FOR I=1 TO 9:READ U$(I):NEXT I
240 START=PEEK(&H30)+256*PEEK(&H31):AD1=PEEK(START)+256*PEEK(START+1):AD2=PEEK(AD1)+256*PEEK(AD1+1)+4:FOR I=1 TO 6:IF PEEK(AD2)<>32 THEN TC$(I)=TC$(I)+CHR$(PEEK(AD2)) ELSE I=I-1
245 AD2=AD2+1:NEXT I:AD2=AD2+1:FOR I=1 TO 9:IF PEEK(AD2)<>32 THEN UC$(I)=UC$(I)+CHR$(PEEK(AD2)):I=I-1
250 AD2=AD2+1:NEXT I
255 INPUT Z$:IF Z$="" THEN IF Z2$>"" THEN PRINT "Ok, I will use: "Z2$:PRINT:GOTO 285 ELSE BEEP:GOTO 255
260 FOR I=1 TO LEN(Z$):A=ASC(MID$(Z$,I,1)):IF A>96 THEN A=A-32:MID$(Z$,I,1)=CHR$(A)
265 NEXT I:PRINT:Z2$=Z$
270 FU$=Z$:AD=AD1+4:FOR I=1 TO LEN(FU$):FOR J=1 TO 6:IF MID$(FU$,I,1)=T$(J) THEN MID$(FU$,I,1)=TC$(J)
275 NEXT J:NEXT I:FOR J=1 TO 8:U=INSTR(FU$,U$(J)):IF U>0 THEN FU$=LEFT$(FU$,U-1)+UC$(J)+MID$(FU$,U+3)
280 NEXT J:FU$=FU$+":"+UC$(9)+CHR$(0):FOR I=1 TO LEN(FU$):POKE AD,ASC(MID$(FU$,I,1)):AD=AD+1:NEXT I
285 IF OP<>4 THEN RETURN
290 IT=1:INPUT"Smallest X ";SX:INPUT"Biggest  X ";BX:IF BX<=SX THEN PRINT"Silly":GOTO 290
295 PRINT:PRINT W$:XI=(BX-SX)/400:X=SX:GOSUB 15:SY=Y:BY=SY:FOR I=0 TO 400:X(I)=SX+I*XI:X=X(I):GOSUB 15:Y(I)=Y:IF Y(I)<SY THEN SY=Y(I) ELSE IF Y(I)>BY THEN BY=Y(I)
300 NEXT I:B=BX:S=SX:H=5:IF ABS(BY-SY)<0.00001 THEN PRINT"Y = Constant,"BY:GOTO 435
305 '
310 '  -- Select Scales  (H = No. of Axis Labels)
315 '
320 Q=1:KT=0
325 R=B-S:C=S
330 IF R<=1 THEN KT=KT+1:R=R*10:GOTO 330
335 IF R>10 THEN KT=KT-1:R=R/10:GOTO 335
340 IF Q>2 THEN 350 ELSE C=C*10^KT:IF C<0 AND C<>INT(C) THEN C=C-1
345 C=INT(C)/10^KT:R=(B-C)/H:KT=0:Q=Q+2:GOTO 330
350 F=INT(R):IF F<>R THEN F=F+1
355 IF R<0.5 THEN F=F-0.5
360 F=F/10^KT:IF Q=4 THEN 365 ELSE IF(B-S)/(H*F)<=0.8 THEN KT=1:Q=2:GOTO 325
365 S=C:D=F*INT(C/F):IF D<0 AND D<>C THEN D=D-F
370 IF D+H*F>=B THEN S=D
375 IT=IT+1:IF IT=2 THEN X=S:U=F:H=4:B=BY:S=SY:GOTO 320 ELSE Y=S:V=F
380 '
385 ' -- Display Axes (X,Y = Smallest Labels;  U,V = Gapes betw Labels)
390 '
395 SCREEN 2:CLS:LINE(70,1)-(70,160):LINE(70,160)-(580,160):FOR I=0 TO 160 STEP 40:LINE (65,I)-(70,I):NEXT I:FOR J=70 TO 570 STEP 100:LINE(J,160)-(J,164):NEXT J
400 LOCATE 4,3:PRINT"Y";:Q=-2:L(1)=0:L(2)=384:L(3)=832:FOR I=1 TO 3:Q=Q+2:YL(I)=Y+(H-Q)*V:LOCATE 5*Q+1,3:PRINT USING"####.#";YL(I);:NEXT I
405 LOCATE 22,3:PRINT;:FOR J=1 TO 6:XL(J)=SX+(J-1)*U:PRINT USING"########.#  ";XL(J);:NEXT J:LOCATE 23,64:PRINT"X";
410 '
415 '  -- Display Graph
420 '
425 X=14:Y=40
430 XI=(XL(6)-XL(1))/100:YI=(YL(1)-YL(3))/40:FOR I=0 TO 400:X0=X:Y0=Y:X=14+(X(I)-XL(1))/XI:Y=40-(Y(I)-YL(3))/YI:LINE(5*X0,4*Y0)-(5*X,4*Y):NEXT I:LOCATE 25,1:PRINT"Function: "Z2$;:GOSUB 120
435 LOCATE 25,1:PRINT SPACE$(79);:LOCATE 25,1:PRINT"Another graph of this function";:GOSUB 115:IF YN$="Y" THEN SCREEN 0:GOTO 285 ELSE 55
440 '
445 ' -- LINEAR INTERPOLATION
450 '
455 CLS:Z$="L I N E A R   I N T E R P O L A T I O N":GOSUB 110
460 PRINT:PRINT "First enter the X and Y COORDINATES of 2 known points which surround the":PRINT"required interpolate:":PRINT
465 INPUT;"X(1) ";X1:PRINT SPACE$(6);:INPUT "Y(1) ";Y1:INPUT;"X(2) ";X2:PRINT SPACE$(6);:INPUT "Y(2) ";Y2:PRINT
470 INPUT"What INTERPOLATE, X ";X
475 Y=Y1+(X-X1)*(Y2-Y1)/(X2-X1):Y=INT(Y*1000+0.5)/1000
480 LOCATE CSRLIN-1,40:PRINT "Y = ";Y
485 PRINT:PRINT"Another point on this line";:GOSUB 115:IF YN$="Y" THEN LOCATE CSRLIN-1,1:PRINT SPACE$(50);:LOCATE ,1:GOTO 470
490 PRINT:PRINT"Another line";:GOSUB 115:IF YN$="Y" THEN 455 ELSE 55
495 '
500 ' -- LINEAR RECIPROCAL INTERPOLATION
505 '
510 CLS:Z$="L I N E A R   R E C I P R O C A L   I N T E R P O L A T I O N":GOSUB 110
515 PRINT:PRINT "First enter the X and Y COORDINATES of 2 known points which surround the":PRINT"required interpolate:":PRINT
520 INPUT;"X(1) ";X1:PRINT SPACE$(6);:INPUT "Y(1) ";Y1:INPUT;"X(2) ";X2:PRINT SPACE$(6);:INPUT "Y(2) ";Y2:PRINT
525 INPUT"What INTERPOLATE, X ";X
530 IF X2>1 THEN P=(X-X1)/X ELSE P=(X1-X)*X2/(X1-X2)/X
535 Y=Y1+P*(Y2-Y1):Y=INT(Y*1000+0.5)/1000
540 LOCATE CSRLIN-1,40:PRINT "Y = ";Y
545 PRINT:PRINT"Another point on this line";:GOSUB 115:IF YN$="Y" THEN LOCATE CSRLIN-1,1:PRINT SPACE$(50);:LOCATE ,1:GOTO 525
550 PRINT:PRINT"Another line";:GOSUB 115:IF YN$="Y" THEN 510 ELSE 55
555 '
560 ' -- CURVILINEAR INTERPOLATION
565 '
570 CLS:Z$="C U R V I L I N E A R   I N T E R P O L A T I O N   (LAGRANGE)":GOSUB 110:PRINT
575 INPUT"Number of known points (3 or more) ";N:IF N<3 THEN 575
580 PRINT:FOR I=1 TO N:PRINT"X("MID$(STR$(I),2)") ";:INPUT;X(I):PRINT SPACE$(6);:PRINT "Y("MID$(STR$(I),2)") ";:INPUT Y(I):NEXT I:PRINT
585 INPUT"What INTERPOLATE, X ";X
590 Y=0:FOR J=1 TO N:T=1:FOR I=1 TO N:IF I=J THEN 595 ELSE T=T*(X-X(I))/(X(J)-X(I))
595 NEXT I:Y=Y+T*Y(J):NEXT J
600 LOCATE CSRLIN-1,40:PRINT"Y =";INT(Y*10000+0.5)/10000
605 PRINT:PRINT"Another point on this curve";:GOSUB 115:IF YN$="Y"THEN LOCATE CSRLIN-1,1:PRINT SPACE$(50);:LOCATE ,1:GOTO 585
610 PRINT:PRINT"Another curve";:GOSUB 115:IF YN$="Y"THEN 570 ELSE 55
615 '
620 '  -- EXPONENTIAL CURVES
625 '
630 CLS:Z$="E X P O N E N T I A L   C U R V E   F I T T I N G":GOSUB 110:MS$="METHOD OF SEMIAVERAGES":PRINT STRING$(37-LEN(MS$)\2,32)MS$:PRINT:PRINT
635 INPUT"No. of equally spaced X-Values (any multiple of 3) ";N:Z=N/3:IF N<3 OR INT(Z)<>Z THEN 635 ELSE NN=N:M=Z
640 INPUT"First X-Value ";X(1):IF X(1)>100 THEN PRINT"Too big. Code X-Values by subtraction so that all X's are < 100.":GOTO 640 ELSE INPUT"Interval between successive X-Values ";XI:FOR I=2 TO N:X(I)=X(I-1)+XI:NEXT I
645 PRINT:IF N=3 THEN PRINT"Enter 3 Y-Values read from your hand-drawn smooth curve:"ELSE PRINT"ENTER";N;"Observed Y-Values corresponding to observed X-Values:"
650 FOR I=1 TO N
655 PRINT"Y(";MID$(STR$(I),2);") ";:INPUT Y$:IF Y$>" " THEN Y(I)=VAL(Y$):NEXT I  ELSE BEEP:GOTO 655
660 K=0:FOR I=1 TO 3:S(I)=0:FOR J=1 TO M:K=K+1:S(I)=S(I)+Y(K):NEXT J:NEXT I:BM=(S(2)-S(3))/(S(1)-S(2)):B=BM^(1/M):A=(S(1)-S(2))*(1-B)/(1-BM)^2:K!=(S(1)*S(3)-S(2)^2)/(M*(S(1)+S(3)-2*S(2))):K!=INT(K!*10000+0.5)/10000
665 BM=(S(2)-S(3))/(S(1)-S(2)):B=BM^(1/M):A=(S(1)-S(2))*(1-B)/(1-BM)^2:K!=(S(1)*S(3)-S(2)^2)/(M*(S(1)+S(3)-2*S(2))):K!=INT(K!*10000+0.5)/10000
670 A=A/B^(X(1)/XI):AA=INT(A*10000+0.5)/10000:B=B^(1/XI):BB=INT(B*10000+0.5)/10000
675 PRINT:PRINT"FUNCTION:  Y ="K!;:IF A>0 THEN PRINT"+"AA;ELSE PRINT AA;
680 PRINT"* ("BB"^ X )":PRINT:PRINT "Estimates based on this equation:"
685 FOR I=1 TO N:Z(I)=K!+A*B^X(I):NEXT I:PRINT SPACE$(13)"X      EST Y":FOR I=1 TO N:PRINT USING F1$;I;X(I);Z(I):IF INT(I/15)=I/15 THEN GOSUB 120
690 NEXT I:PRINT
695 PRINT"Do you want more estimates based on this equation";:GOSUB 115:IF YN$="N" THEN 720ELSE PRINT"Ok, use a slash '/' to signal end."
700 FOR I=N+1 TO 100:INPUT"X ";X$:IF X$="/"THEN NN=I-1:I=100 ELSE X(I)=VAL(X$):Z(I)=K!+A*B^X(I):Z(I)=INT(Z(I)*1000+0.5)/1000:LOCATE CSRLIN-1,15:PRINT "Y ="Z(I)
705 NEXT I:PRINT
710 '
715 '         -- Printout
720 PRINT"Do you want printout of these results";:GOSUB 115:IF YN$="N" THEN 770
725 LINE INPUT "PROBLEM ID ? ";ID$
730 BEEP:LOCATE 24,30:LINE INPUT;"Press <ENTER> when PRINTER is ON.";Z$:LOCATE 24,30:PRINT SPACE$(50);
735 LPRINT CHR$(14)"EXPONENTIAL CURVE FITTING"CHR$(20) '= W I D E letters on/off with Epson Dot Matrix Printers.
740 LPRINT SPACE$(12)MS$
745 LPRINT" ":LPRINT"Problem: "ID$:LPRINT" ":LPRINT"DATA         X      0BS Y      EST Y"
750 FOR I=1 TO N:LPRINT USING F2$;I;X(I);Y(I);Z(I):NEXT I:LPRINT " "
755 LPRINT"FUNCTION: Y ="K!;:IF A>0 THEN LPRINT"+"AA;ELSE LPRINT AA;
760 LPRINT"* ("BB"^ X )":LPRINT " ":IF NN>N THEN LPRINT"ALSO         X      EST Y"
765 FOR I=N+1 TO NN:LPRINT USING"       ######.# ######.###";X(I);Z(I):NEXT I:LPRINT " ":LPRINT " "
770 PRINT"Do you want another Exponential Curve";:GOSUB 115:IF YN$="Y" THEN 630ELSE 55
775 '
780 '  -- POLYSOLVER (after B. P. Douglass)
785 '
790 CLS:CLEAR:DEFDBL A-Z:DEFINT I-N:Z$="P O L Y S O L V E R":GOSUB 110:PRINT:PRINT SPACE$(5)"This seeks N roots of:  Y = A + B(1)*X +B(2)*X^2 + ... + B(N)*X^N":PRINT SPACE$(10)"(Complex or unstable roots will cause non-convergence)":PRINT
795 INPUT"Order N of your polynomial (1-10) ";N:NN=N
800 INPUT"A ";A(0):FOR I=1 TO N:PRINT"B("MID$(STR$(I),2)") ";:INPUT A(I):NEXT I:FOR I=0 TO N:D(I)=A(I):NEXT I
805 PRINT:PRINT"Approx roots will first be found using NEWTON & HORNER'S method.":PRINT"Enter trial value for each root in turn:":FOR J=1 TO NN:K=0
810 PRINT"Trial Root #"J;:INPUT X:PRINT W$;:LOCATE ,1
815 GOSUB 860:IF ABS(B(0))<0.000001 THEN 825ELSE IF C(1)=0 THEN C(1)=0.0001
820 IF K>29 THEN 850ELSE K=K+1:X=X-B(0)/C(1):GOTO 815
825 X(J)=X:FOR I=1 TO N:A(I-1)=B(I):NEXT I:N=N-1:PRINT"Rough Root #"J"= "CSNG(X)"  after "K" iterations.":NEXT J
830 PRINT:PRINT"Improved ANSWERS obtained by re-solving with above approx roots:":N=NN:FOR I=0 TO N:A(I)=D(I):NEXT I:FOR J=1 TO N:PRINT "WORKING";:LOCATE ,1:X=X(J)
835 GOSUB 860:IF ABS(B(0))<1.000000e-7 THEN 845ELSE IF C(1)=0 THEN C(1)=0.00001
840 X=X-B(0)/C(1):GOTO 835
845 X(J)=X:PRINT"Root #"J"= "CSNG(X):NEXT:GOSUB 120:GOTO 9
850 PRINT"Incomplete convergence after 30 iterations.":PRINT"Rough Root = "X"  but differences still = "B(0)
855 PRINT"Is this acceptable";:GOSUB 115:IF YN$="Y"THEN 825ELSE K=0:GOTO 810
860 B(N)=A(N):FOR I=N-1 TO 0 STEP -1:B(I)=A(I)+B(I+1)*X:NEXT I:C(N)=B(N):FOR I=N-1 TO 1 STEP -1:C(I)=B(I)+C(I+1)*X:NEXT I:RETURN
865 '
870 ' -- DERIVATIVES
875 '
880 CLS:Z$="DERIVATIVE OF ANY FUNCTION":GOSUB 110:GOSUB 220:PRINT
885 INPUT"At what value of X do you want the derivative ";XD:D=0.001*XD:IF D=0 THEN D=0.000001 ELSE IF ABS(D)<0.000001 THEN D=0.000001*SGN(D)
890 X=XD+D:GOSUB 15:YD=Y:X=XD-D:GOSUB 15:PRINT"At X = "STR$(XD)", the derivative f'(X) = "(YD-Y)/2/D
895 PRINT:PRINT"Another derivative of this function";:GOSUB 115:IF YN$="Y"THEN LOCATE CSRLIN-1,1:GOTO 885ELSE 55
900 '
905 '  -- INTEGRATION by SIMPSON'S RULE
910 '
915 CLS:Z$="I N T E G R A T I O N":GOSUB 110:PRINT
920 INPUT"Simpson's rule or Romberg's algorithm (S/R) ";Z$:IF Z$="" THEN BEEP:GOTO 920 ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="S"THEN PRINT ELSE IF Z$="R"THEN 1020 ELSE BEEP:GOTO 920
925 PRINT"Will you enter a FORMULA, or equally spaced Y VALUES (F/V) ";
930 INPUT KIND$:IF KIND$=""THEN BEEP:GOTO 925ELSE KIND$=CHR$(ASC(KIND$) AND 95):IF KIND$="F"THEN GOSUB 220 ELSE IF KIND$<>"V"THEN BEEP:GOTO 925
935 INPUT"Start integrating at what X value ";X0:INPUT"End integrating at what X value ";XN:IF XN<=X0 THEN PRINT"SILLY":GOTO 935
940 YE=0:YO=0:IF KIND$="V" THEN 970
945 INPUT"Enter an Even Number of X Intervals (2-100) ";N:IF N<2 OR N/2<>INT(N/2)THEN PRINT"That's not an even number.":BEEP:GOTO 945
950 PRINT:PRINT W$;:LOCATE ,1:W=(XN-X0)/N:X=X0:GOSUB 15:Y(0)=Y:X=XN:GOSUB 15:Y(N)=Y
955 FOR I=1 TO N-1:X=X0+I*W:GOSUB 15:Y(I)=Y
960 IF I/2=INT(I/2)THEN YE=YE+Y(I) ELSE YO=YO+Y(I)
965 NEXT I:GOTO 995
970 PRINT"Enter an Odd Number (3-101) of equally spaced X Values at which Y is known,":INPUT "including the Starting & Ending Values ";N:IF N<3 OR N/2=INT(N/2)THEN PRINT"That's not an odd number.":BEEP:GOTO 970
975 PRINT:N=N-1:W=(XN-X0)/N
980 FOR I=0 TO N:PRINT"At X = ";X0+I*W;TAB(20)"Y("MID$(STR$(I+1),2)") ";:INPUT Y(I)
985 IF I=0 OR I=N THEN 990 ELSE IF I/2=INT(I/2)THEN YE=YE+Y(I) ELSE YO=YO+Y(I)
990 NEXT I:PRINT
995 PRINT"INTEGRAL AREA = ";W/3*(Y(0)+2*YE+4*YO+Y(N))"  (SIMPSON)":PRINT
1000 PRINT"Another Integral of this function";:GOSUB 115:IF YN$="Y" THEN 935ELSE 55
1005 '
1010 ' -- INTEGRATION by ROMBERG'S ALGORITHM (after B. P. Douglass)
1015 '
1020 CLEAR:ON ERROR GOTO 1610:GOSUB 220
1025 INPUT"Single or Double precision (S/D) ";Z$:IF Z$="D" OR X$="d" THEN DEFDBL R,S,W,X
1030 INPUT"Start integrating at what X value ";X0:INPUT"End integrating at what X value ";XN:IF XN<=X0 THEN PRINT"SILLY":GOTO 1030
1035 INPUT"How many iterations (2-15) ";N:IF N<2 OR N>15 THEN BEEP:GOTO 1035
1040 DIM R(N,N):W=XN-X0:X=X0:GOSUB 15:Y0=Y:X=XN:GOSUB 15:R(1,1)=W*(Y0+Y)/2:L=1
1045 FOR I=2 TO N:W=W/2:L=L+L:S=0:FOR K=1 TO L-1 STEP 2:X=X0+W*K:GOSUB 15:S=S+Y:NEXT K:R(I,1)=R(I-1,1)/2+W*S:PRINT"R("MID$(STR$(I),2)",1) ="R(I,1);
1050 EM=1:FOR J=2 TO I:EM=EM*4:R(I,J)=R(I,J-1)+(R(I,J-1)-R(I-1,J-1))/(EM-1):IF J>= I THEN I$=MID$(STR$(I),2):PRINT"   R("I$","I$") ="R(I,J)
1055 NEXT J
1060 NEXT I:PRINT"FINAL INTEGRAL ="R(N,N)"  (ROMBERG)":PRINT:LINE INPUT "Press <ENTER> to return to Math Functions Menu. ";Z$:GOTO 9
1065 '
1070 ' -- SIMULTANEOUS EQUATIONS
1075 '
1080 CLS:Z$=" SOLVING  SIMULTANEOUS  LINEAR  EQUATIONS ":GOSUB 110
1085 PRINT:PRINT TAB(18)"B1.X1   +   B2.X2   +  ...  +   BN.XN  =  Y":PRINT
1090 PRINT"     Given values of X's & Y for N equations, this program solves":PRINT"     for the unknown B coefficients, if possible.":PRINT"     The computations can be done with:"
1095 PRINT"        Single precision (6 digit accuracy), or":PRINT"        Double precision (16 digit accuracy, but slower).":PRINT
1100 INPUT"Which do you want (S/D) ";SD$
1105 IF SD$="S" OR SD$="s" THEN A0=0.000001:A3=0.001 ELSE IF SD$="D" OR SD$="d" THEN DEFDBL A,B,C,D,S,P,Y:A0=1.00000000000000e-12#:A3=0.001# ELSE PRINT"Please reply 'S' for Single, or 'D' for Double precision.":GOTO 1100
1110 PRINT
1115 INPUT"How many unknown coefficients, N (2-10) ";N:IF N<2 OR N>10 THEN 1115 ELSE M=N+1
1120 DIM A(N,M),B(N),C(N,N),D(N,N),IP(N),KR(N),KC(N),P(N)
1125 F4$="####.##### ":F5$="#####.#### ":F8$="########.# ":R$="Row##: ":D$="Determinant of X Matrix = "
1130 '   --Enter data from Keyboard.
1135 PRINT:PRINT"Enter"N"rows of data, each with X1 to X"MID$(STR$(N),2)" & Y, in Free Format:":I=1
1140 PRINT"Row"I;:GOSUB 135:I=I+1:IF I<=N THEN 1140
1145 CLS:IF QR=0 THEN PRINT"Data was read as ---" ELSE PRINT"Revised data is---"
1150 FOR I=1 TO N:PRINT USING R$;I;:FOR J=1 TO M:PRINT A(I,J);:NEXT J:PRINT:NEXT I:PRINT
1155 PRINT"Do you want to make any CHANGES to those values";:GOSUB 115:IF YN$="N" THEN 1220 ELSE INPUT"Which row";I
1160 IF I<1 OR I>N THEN PRINT"WHAT?   ";:GOTO 1155
1165 '   --Edit a row.
1170 PRINT USING R$;I;:FOR J=1 TO M:PRINT A(I,J);:NEXT J:PRINT
1175 PRINT"Enter DATUM # (1-"MID$(STR$(M),2)") & RIGHT VALUE, in Free Format: ";
1180 INPUT "",X$:IF X$="" THEN 1155 ELSE QR=1:K=0
1185 FOR J=1 TO 2:Y$="":QP=0
1190 K=K+1:IF K=LEN(X$) THEN Y$=Y$+RIGHT$(X$,1):IF J=2 THEN 1200 ELSE J=2:FLAG=1:GOTO 1205
1195 Z$=MID$(X$,K,1):IF Z$>" " THEN Y$=Y$+Z$:QP=1:GOTO 1190 ELSE IF QP=0 THEN 1190
1200 Y(J)=VAL(Y$):IF Y(1)<1 OR Y(1)>M THEN PRINT"WHAT?   ";:GOTO 1175
1205 NEXT J:IF FLAG=1 THEN FLAG=0:PRINT "No, please enter 2 VALUES on the same line.":GOTO 1175
1210 J=Y(1):A(I,J)=Y(2):GOTO 1145
1215 '   -- Calc now --
1220 COLOR 23,0:PRINT:PRINT"Working.":COLOR 7,0
1225 '   -- Copy A into Square C of order N.
1230 FOR I=1 TO N:FOR J=1 TO N:C(I,J)=A(I,J):NEXT J:NEXT I
1235 '   -- Inverse of Diag C(n,n) --◙      Uses I-M,D,Q,Z,FLAG,IR,IC,IP(n),KR(n),KC(n),P(n)
1240 D=1:FLAG=0:FOR I=1 TO N:IP(I)=0:NEXT I:FOR I=1 TO N:Z=0:FOR J=1 TO N:IF IP(J)=1 THEN 1265
1245 FOR K=1 TO N:ON SGN(IP(K)-1)+2 GOTO 1255,1260,1250
1250 I=N:J=N:K=N:FLAG=1:GOTO 1260
1255 IF Z < ABS(C(J,K)) THEN IR=J:IC=K:Z=C(J,K)
1260 NEXT K
1265 NEXT J:IF FLAG=1 THEN D=0:GOTO 1295
1270 IP(IC)=IP(IC)+1:IF IR<>IC THEN D=-D:FOR L=1 TO N:Z=C(IR,L):C(IR,L)=C(IC,L):C(IC,L)=Z:NEXT L
1275 KR(I)=IR:KC(I)=IC:P(I)=C(IC,IC):D=D*P(I):IF ABS(P(I))<=0.000001 THEN D=0:I=N:GOTO 1295
1280 C(IC,IC)=1:FOR L=1 TO N:C(IC,L)=C(IC,L)/P(I):NEXT L
1285 FOR K=1 TO N:IF K<>IC THEN Z=C(K,IC):C(K,IC)=0:FOR L=1 TO N:C(K,L)=C(K,L)-C(IC,L)*Z:NEXT L
1290 NEXT K
1295 NEXT I:IF D=0 THEN 1360
1300 FOR I=1 TO N:Q=N-I+1:IF KR(Q)=KC(Q) THEN 1310 ELSE K=KR(Q):L=KC(Q)
1305 FOR J=1 TO N:Z=C(J,K):C(J,K)=C(J,L):C(J,L)=Z:NEXT J
1310 NEXT I
1315 '   -- Confirm that C*C(INV) = I.
1320 FOR I=1 TO N:FOR J=1 TO N:D(I,J)=0:FOR K=1 TO N:D(I,J)=D(I,J)+A(I,K)*C(K,J):NEXT K:NEXT J:NEXT I
1325 FOR I=1 TO N:FOR J=1 TO N:IF I=J AND ABS(D(I,I)-1)>A3 THEN J=N:I=N:FLAG=1 ELSE IF I<>J AND ABS(D(I,J))>A3 THEN J=N:I=N:FLAG=1
1330 NEXT J
1335 NEXT I
1340 IF FLAG=1 THEN D=0:GOTO 1360
1345 '  -- Compute Coefficients
1350 FOR I=1 TO N:B(I)=0:FOR J=1 TO N:B(I)=B(I)+C(I,J)*A(J,M):NEXT J:NEXT I
1355 '  -- Show Answers.
1360 CLS:PRINT D$;D:PRINT:IF D<>0 THEN 1380
1365 PRINT"These equations are NOT soluble.":IF SD$="S" OR SD$="s" THEN PRINT"Try Double Precision."
1370 PRINT:GOSUB 120:GOTO 1425
1375 '   -- Show B Coefficients
1380 PRINT"B COEFFICIENTS:":FOR I=1 TO N:PRINT SPACE$(5)"B("MID$(STR$(I),2)") = "B(I):NEXT I:PRINT:GOSUB 120
1385 '   -- Show Inverse X Matrix
1390 PRINT"INVERSE X MATRIX:":L=2:C=ABS(C(1,1)):IF C<10 THEN F$=F4$ ELSE IF C<1000 THEN F$=F5$ ELSE F$=F8$
1395 FOR I=1 TO N:PRINT USING R$;I;:IF N>5 THEN MM=5 ELSE MM=N
1400 FOR J=1 TO MM:PRINT USING F$;C(I,J);:NEXT J:PRINT:GOSUB 170
1405 IF N>5 THEN PRINT SPACE$(7);:FOR J=6 TO N:PRINT USING F$;C(I,J);:NEXT J:PRINT:GOSUB 170
1410 NEXT I:GOSUB 120
1415 '
1420 ' -- Printout
1425 PRINT"Do you want PRINTOUT of these results";:GOSUB 115:IF YN$="N" THEN 1500
1430 LINE INPUT "Problem ID ? ";ID$
1435 BEEP:LOCATE 24,30:LINE INPUT;"Press <ENTER> when PRINTER is ON.";Z$:LOCATE 24,30:PRINT SPACE$(50);
1440 LPRINT CHR$(14)"SOLVING LINEAR EQUATIONS"CHR$(20) '= W I D E letters on/off with Epson Dot Matrix Printers.
1445 LPRINT" ":LPRINT"PROBLEM: ";ID$:LPRINT STRING$(7,"="):LPRINT" "
1450 LPRINT"DATA:":FOR I=1 TO N:LPRINT USING R$;I;:FOR J=1 TO M:LPRINT A(I,J);:NEXT J:LPRINT" ":NEXT I:LPRINT" "
1455 LPRINT D$;D:LPRINT" ":IF D<>0 THEN 1470
1460 LPRINT"These equations are NOT soluble.":IF SD$="S" OR SD$="s" THEN LPRINT"Try Double Precision."
1465 LPRINT" ":LPRINT" ":GOTO 1500
1470 LPRINT"B COEFFICIENTS:":FOR I=1 TO N:LPRINT SPACE$(5)"B("MID$(STR$(I),2)") = "B(I):NEXT I:LPRINT" "
1475 LPRINT"INVERSE X MATRIX:":L=2:C=ABS(C(1,1)):IF C<10 THEN F$=F4$ ELSE IF C<1000 THEN F$=F5$ ELSE F$=F8$
1480 FOR I=1 TO N:LPRINT USING R$;I;:IF N>5 THEN MM=5 ELSE MM=N
1485 FOR J=1 TO MM:LPRINT USING F$;C(I,J);:NEXT J:LPRINT" "
1490 IF N>5 THEN FOR J=6 TO N:LPRINT USING F$;C(I,J);:NEXT J:LPRINT" "
1495 NEXT I:LPRINT" ":LPRINT" "
1500 GOTO 9
1505 '
1510 ' -- FACTORIALS etc.
1515 '
1520 CLS:DEFDBL L,M,N:N1=1.#:NT=10000000000.#:T=10:LN=2.302585093#:LG=0.4342944819#
1525 Z$="FACTORIALS, PERMUTATIONS, & COMBINATIONS":GOSUB 110:PRINT:PRINT
1530 PRINT TAB(10)"This program computes Double Precision  n!,  nPx,  or  nCx,":PRINT TAB(10)"using a separate exponent which enables products to greatly":PRINT TAB(10)"exceed the normal upper limit of 1E38.":PRINT
1535 INPUT"Factorial, Permutation, Combination, or Menu (F/P/C/M)";X$:IF X$="" THEN 9 ELSE X$=CHR$(ASC(X$) AND 95):IF X$="M" THEN 9 ELSE IF INSTR("FPC",X$)=0 THEN BEEP:GOTO 1535
1540 INPUT"n";N:IF N<2 THEN BEEP:PRINT"n must be 2 or more!":GOTO 1540 ELSE IF X$<>"F" THEN 1550
1545 PRINT"n! =  ";:X=N:GOSUB 185:GOTO 1565' n! = nPn
1550 INPUT"x";X:IF X<0 OR X>N THEN BEEP:PRINT"x must be > 0 and < n.":GOTO 1550 ELSE GOSUB 185
1555 IF X$="P" THEN PRINT"nPx = ";:GOTO 1565' nPx
1560 PRINT"nCx = ";:MM=M:EE=E:N=VAL(STR$(X)):GOSUB 185:M=MM/M:E=EE-E' nCx = nPx/xPx
1565 FOR J=1 TO 12:IF E=0 OR M>100000000000.# THEN J=12 ELSE M=M*10.#:E=E-1
1570 NEXT J
1575 M=INT(M+0.5#):PRINT USING"###,###,###,###";M;:PRINT" E+";RIGHT$(STR$(E),LEN(STR$(E))-1)
1580 PRINT USING"LOG(E)  =#####.######";INT((LOG(M)+LN*E)*1000000.#+0.5#)/1000000.#
1585 PRINT USING"LOG(10) =#####.######";INT((E+LG*LOG(M))*1000000.#+0.5#)/1000000.#
1590 PRINT:GOTO 1535
1595 '
1600 ' -- ERRORS & END
1605 '
1610 IF ERR=0 THEN 1630
1615 IF ERR=11 THEN Y=100:RESUME NEXT
1620 BEEP:BEEP:IF ERR=2 AND ERL=15 THEN PRINT"  ERROR IN YOUR FORMULA:  "Z2$:PRINT"  Please re-enter it in correct BASIC (starting with `Y=' )":RESUME 255
1625 ON ERROR GOTO 0:GOTO 1635
1630 RUN "menu.bas"
1635 END
```

## MATOP.BAS

```bas
1 '        MATRIX OPERATIONS  ---  MATOP.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 10,177,429,409,488:STOP  '=start,printout,etc - CLOSE (exc 177)◙◙--- Another go? ---
10 CLOSE:IF HEAD=1 THEN LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=4:GOTO 9
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:LOCATE ,1:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙*** Vetted Decoding of FF ..C(I,J).. from X$ ***◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K=1:L=M:IF UT>0 THEN L=M-I+1
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE C(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT>0 THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"STR$(I);:INPUT X$:IF UT>0 AND I=M THEN N=M:GOTO 75 ELSE IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙*** Disk Input of C(I,J), N, M, etc ***
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT:IF MT=1 THEN NA=N:MA=M ELSE NB=N:MB=M
83 PRINT"File has"N"rows of data.":IF N>MXR THEN PRINT"--- Too many!":GOTO 85
84 PRINT:PRINT"File has"M"column variables.":IF M>MXC THEN PRINT"--- Too many!" ELSE IF ABS(UT)<=1 THEN 86 ELSE PRINT"This matrix based on"ABS(UT)"persons.":GOTO 86
85 CLOSE:BEEP:GOSUB 5:ERROR 210
86 IF MT=2 THEN 476 'test legality of B before proceeding.
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 '
93 '
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:IF UT<=0 THEN L=M ELSE L=M-I+1
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE C(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" or "O" ---
130 IF IO$="I" THEN 134 ELSE ON ERROR GOTO 132:OPEN DR$+FL$ FOR INPUT AS #1
131 CLOSE:DO$="<OVERWRITE> existing "+FL$:GOSUB 20:IF Z$="N" THEN 110 ELSE 133
132 RESUME 133  'OK to start new file, since FL$ not present.
133 ON ERROR GOTO 30:OPEN DR$+FL$ FOR OUTPUT AS #1:RETURN  'print #1,Q$A$Q$Q$B$Q$:close
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,MXC):GOTO 110
139 '◙*** Save data A(I,J) ***
140 IF ID$="" THEN LINE INPUT"Problem ID? ";ID$:GOTO 142
141 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
142 Q$=CHR$(34):IO$="O":GOSUB 110
143 PRINT "Saving data on disk ..... ";:PRINT #1,Q$FL$Q$Q$VER$Q$:PRINT #1,Q$DAT$Q$Q$ID$Q$;N;M;UT;Q$VN$Q$
144 IF VN$="Y" THEN FOR J=1 TO M:PRINT #1,Q$VN$(J)Q$;:NEXT J:PRINT #1,""
145 FOR I=1 TO N  'always file full matrix in this program.
146 FOR J=1 TO M:PRINT #1,A(I,J);:NEXT J:NEXT I:CLOSE:PRINT "done."
147 DO$="backup this file under the name "+FL$:GOSUB 20:IF Z$="Y" THEN GOSUB 115:GOTO 143 ELSE RETURN
159 '◙*** Show/Print Answers ***
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$
163 '
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HEAD=0 THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HEAD=1
179 IF ID$<>CHR$(168) THEN PRINT #2,CHR$(10)"Problem: "ID$:PRINT #2,"":ID$=CHR$(168)
180 RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR L=1 TO M:IF L<10 THEN VN$(L)="Var #"+STR$(L) ELSE VN$(L)="Var #"+MID$(STR$(L),2)
211 NEXT L:RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙--- Menu ---
350 Z$=HD$:CLS:GOSUB 46:PRINT
351 I=23:J=42:PRINT"1  A'"TAB(I)"7  A * k"TAB(J)"13  A' * B(Inv) * A◙2  A * A'"TAB(I)"8  A / k"TAB(J)"14  Normalize◙3  A(Inv)"TAB(I)"9  A * B"TAB(J)"15  Sqrt Diag Any Square A"
352 I=22:PRINT"4  A + B"TAB(I)"10  B * A"TAB(J)"16  Inv Sqrt Diag Any Square A◙5  A - B"TAB(I)"11  A * B(Inv)"TAB(J)"17  Eigenstructure Symmetric A◙6  B - A"TAB(I)"12  A' * B * A"TAB(J)"18  Eigenstructure B(Inv) * A":PRINT:RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30:DEFINT I-N,Q:I=22
401 DIM J,K,S1,N,L,X,S2,M,IJ,IC,XX,J1,Y,IR,IC,M1,Z,NM,MA,JJ,IV,AM,LL,F$,J2,NP,MJ,S,BD,LN,D,KK,P,M2,NV,SU,IR,X$,Y$,Z$,TR,KL,ME,M4,EM,Q,QP,R$,EI,MT
402 DIM CC(I),BB(I),C(I,I),V(I,I),DD(I),E(I),AA(I),VV(I*I),R(I*I),D(I,I),A(I,I),B(I,I),IP(I),P(I),KR(I),KC(I),Y(I),M$(2),VN$(I)
403 I=I-2:MD=I:MXR=I:MXC=I:MNR=1:MNC=1:NOP=18
404 F4$="####.##### ":F5$="#####.#### ":F8$="########.# "
405 D$="Determinant of ":E$="****>  ERROR.   ":L$=", with each row on a new line:":M$(1)="MATRIX A":M$(2)="MATRIX B"
406 NC$="These matrices are NOT CONFORMABLE.":NS$=" is not square.":P$="PRODUCT, ":EQA$=" = New A =":R$="Row##:   ":U$="Upper Triangular "
407 '--------
408 HD$="  M A T R I X    O P E R A T I O N S  ":VER$="(RL,6)"
409 QB=1:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
410 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
411 PRINT TAB(K)"║  A menu with 18 OPTIONS will appear whenever needed.  ║"
412 PRINT TAB(K)"║           MATRICES can be up to 20 x 20.              ║"
413 PRINT TAB(K)"║ VECTORS are handled as matrices with 1 row or column. ║"
414 PRINT TAB(K)"║   Square symmetric matrices can be UPPER TRIANGULAR.  ║"
415 PRINT TAB(K)"║                                                       ║"
416 PRINT TAB(K)"║  Matrices are to be entered BY ROWS, in Free Format,  ║"
417 PRINT TAB(K)"║          from keyboard, or from datafile.             ║"
418 PRINT TAB(K)"║   Simple data CORRECTIONS can be made in all cases.   ║"
419 PRINT TAB(K)"║                                                       ║"
420 PRINT TAB(K)"║       The 1st matrix entered will be CALLED A.        ║"
421 PRINT TAB(K)"║    If a 2nd matrix is needed, it will be CALLED B.    ║"
422 PRINT TAB(K)"║  Outcome matrices are automatically RE-NAMED as A to  ║"
423 PRINT TAB(K)"║  allow CONTINUED processing, like A x B(Inv) + C - D. ║"
424 PRINT TAB(K)"║                                                       ║"
425 PRINT TAB(K)"║    Printouts &/or filing can be done after displays.  ║"
426 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
427 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":PRINT:LOCATE ,,1:GOSUB 5
428 '◙--- Get Data ---
429 CLOSE:GOSUB 350:MT=1:ID$=""
430 DO$="enter "+CHR$(34)+M$(MT)+CHR$(34)+" from Disk":GOSUB 20:IF Z$="N" THEN 434
431 '◙--- Disk Entry ---
432 QB=3:GOSUB 80:GOSUB 5:GOTO 441
433 '◙--- Keyboard Entry ---
434 QB=3:QD=0:I=0:M=2:UT=0:PRINT"# of Rows & # of Cols in "M$(MT)" (Free Format, both max "MID$(STR$(MXC),2)")";:INPUT X$:GOSUB 50:N=C(0,1):M=C(0,2):IF N<1 OR N>MXR OR M<1 OR M>MXC THEN BEEP:PRINT"Size out of bounds!":GOTO 434
435 IF MT=1 THEN NA=N:MA=M ELSE NB=N:MB=M:GOTO 476
436 I=1:IF N=M THEN PRINT U$"Matrix";:GOSUB 21:IF Z$="Y" THEN 438
437 UT=0:PRINT"Enter "M$(MT)L$:GOTO 439
438 UT=1:PRINT"Enter "U$M$(MT)L$
439 PRINT"Row"I;:INPUT X$:GOSUB 50:IF I<N THEN I=I+1:GOTO 439
440 '◙--- Show Matrix ---
441 QB=4:GOSUB 160:PRINT #2,
442 IF QR=0 THEN PRINT #2,M$(MT);" was read as:" ELSE PRINT #2,"Revised ";M$(MT);" is:"
443 MM=M:L=1:FOR I=1 TO N:PRINT #2,USING R$;I,:LN=0:JJ=9:IF UT>0 THEN MM=M-I+1:IF QD=1 THEN JJ=4
444 J1=1+LN*(JJ+1):J2=-(MM<J1+JJ)*MM-(MM>=J1+JJ)*(J1+JJ):FOR J=J1 TO J2:PRINT #2,C(I,J);:NEXT J:PRINT #2,:L=L+1:IF L>19 THEN GOSUB 5:L=0
445 IF MM>J2 THEN LN=LN+1:PRINT #2,SPACE$(9);:GOTO 444
446 NEXT I:PRINT #2,:IF PR=1 THEN RETURN
447 '◙--- Edit Matrix ---
448 PRINT"Any data changes";:GOSUB 21:IF Z$="N" THEN 458
449 IF N=1 THEN I=1:GOTO 451
450 INPUT"Which row";I:IF I<1 OR I>N THEN PRINT"Silly.":GOTO 450
451 IF UT>0 THEN L=M-I+1 ELSE L=M
452 PRINT USING R$;I;:FOR J=1 TO L:PRINT C(I,J);:NEXT J:PRINT
453 QR=1:IF L=1 THEN INPUT"Right value";C(I,L):GOTO 441
454 PRINT"Change which variable # (1-"MID$(STR$(L),2)") ";:INPUT Z$:J=VAL(Z$):IF J<1 OR J>L THEN BEEP:PRINT"What ?":GOTO 454
455 PRINT"Old value =";C(I,J);TAB(28);"New value";:INPUT Z$:FOR K=1 TO LEN(Z$):IF INSTR("-.0123456789",MID$(Z$,K,1)) THEN NEXT K:C(I,J)=VAL(Z$) ELSE PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 455
456 GOTO 441
457 '◙--- Print Data? ---
458 DO$="print this data":GOSUB 20:IF Z$="N" THEN 461
459 GOSUB 162:GOSUB 165:GOSUB 442:GOSUB 160
460 '◙--- Copy C into A or B ---
461 CLS:QR=0:IF UT>0 THEN 465 ELSE ON MT GOTO 462,463
462 FOR I=1 TO N:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I:GOTO 470
463 FOR I=1 TO N:FOR J=1 TO M:B(I,J)=C(I,J):NEXT J:NEXT I:GOTO 481
464 '     First assign UTM values to their proper subscripts.
465 FOR I=2 TO M:FOR J=M TO I STEP -1:C(I,J)=C(I,J-I+1):NEXT J:NEXT I:ON MT GOTO 467,468
466 '     Now expand UTM to full matrices, C and A or B.
467 FOR I=1 TO M:FOR J=I TO M:C(J,I)=C(I,J):A(I,J)=C(I,J):A(J,I)=A(I,J):NEXT J:NEXT I:GOTO 470
468 FOR I=1 TO M:FOR J=I TO M:C(J,I)=C(I,J):B(I,J)=C(I,J):B(J,I)=B(I,J):NEXT J:NEXT I:GOTO 481
469 '◙--- Opcodes ---
470 QB=5:GOSUB 350:GOSUB 160
471 PRINT USING"Which ! (1-##)";"#";NOP;:INPUT OP:PRINT
472 ON OP GOTO 490,492,475,473,473,473,504,504,473,473,473,473,473,529,475,475,475,473:GOTO 471
473 MT=2:GOTO 430
474 '◙--- Test Legality ---
475 IF NA<>MA THEN BEEP:PRINT E$M$(1)NS$:GOTO 471 ELSE IF OP=3 THEN 494 ELSE ON (OP-14) GOTO 533,538,543
476 ON OP GOTO 2,2,2,477,477,477,2,2,478,479,478,479,479,2,2,2,2,479
477 IF NA<>NB OR MA<>MB THEN PRINT E$NC$:GOTO 430 ELSE 480
478 IF MA<>NB THEN PRINT E$NC$:GOTO 430 ELSE IF OP=9 THEN 480 ELSE IF NB<>MB THEN PRINT E$M$(2)NS$:GOTO 430 ELSE 480
479 IF NA<>MB THEN PRINT E$NC$:GOTO 430 ELSE IF OP=10 THEN 480 ELSE IF NB<>MB THEN PRINT E$M$(2)NS$:GOTO 430
480 IF QD=0 THEN 436 ELSE ON MT GOTO 441,88 'Continue data entry from disk if B.
481 GOSUB 43:ON OP GOTO 2,2,2,498,500,502,2,2,510,514,516,520,525,2,2,2,2,552
482 '◙--- Finale ---
483 DO$="file this matrix":GOSUB 20:IF Z$="N" THEN 487
484 INPUT "How many vectors of measurements contributed to this matrix";UT:IF UT<1 THEN BEEP:GOTO 484
485 IF VN$="" THEN VN$="N"
486 UT=-UT:GOSUB 140  'hold # persons as -ut, then file full matrix (not UTM).
487 PRINT:PRINT"Another operation on ";:COLOR 23,0:PRINT"this";:COLOR 7,0:PRINT" matrix";:GOSUB 21:IF Z$="Y" THEN 470 ELSE IF HEAD=1 THEN HEAD=0:LPRINT STRING$(79,61)STRING$(4,10)
488 CLOSE:BEEP:PRINT:PRINT"===> ANOTHER MATRIX PROBLEM";:GOSUB 21:IF Z$="Y" THEN CLS:GOTO 429 ELSE 30
489 ' ------------------- Operations -------------------◙◙--1  A'
490 FOR I=1 TO N:FOR J=1 TO M:C(J,I)=A(I,J):NEXT J:NEXT I:SWAP NA,MA:N=NA:M=MA:FOR I=1 TO N:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I
491 PRINT #2,"TRANSPOSE, A'"EQA$:GOSUB 564:IF PR=1 THEN 491 ELSE 483'◙◙--2  A * A'
492 GOSUB 43:FOR I=1 TO N:FOR J=1 TO N:C(I,J)=0:FOR K=1 TO M:C(I,J)=C(I,J)+A(I,K)*A(J,K):NEXT K:NEXT J:NEXT I:MA=NA:M=MA:FOR I=1 TO N:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I
493 PRINT #2,P$"A * A'"EQA$:GOSUB 564:IF PR=1 THEN 493 ELSE 483'◙◙--3  A(Inv)
494 GOSUB 43:FOR I=1 TO M:FOR J=1 TO M:D(I,J)=A(I,J):NEXT J:NEXT I:GOSUB 574
495 PRINT #2,D$M$(MT)" = ";D:PRINT #2,:IF D=0 THEN GOSUB 5:GOTO 483
496 IF PR=0 THEN FOR I=1 TO M:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I
497 PRINT #2,"INVERSE MATRIX, A(Inv)"EQA$:GOSUB 564:GOTO 594'◙◙--4  A+B
498 FOR I=1 TO N:FOR J=1 TO M:A(I,J)=A(I,J)+B(I,J):NEXT J:NEXT I
499 PRINT #2,"SUM, A + B"EQA$:GOSUB 564:IF PR=1 THEN 499 ELSE 483'◙◙--5  A-B
500 FOR I=1 TO N:FOR J=1 TO M:A(I,J)=A(I,J)-B(I,J):NEXT J:NEXT I
501 PRINT #2,"DIFFERENCE, A - B"EQA$:GOSUB 564:IF PR=1 THEN 501 ELSE 483'◙◙--6  B-A
502 FOR I=1 TO N:FOR J=1 TO M:A(I,J)=B(I,J)-A(I,J):NEXT J:NEXT I
503 PRINT #2,"REVERSE DIFFERENCE, B - A"EQA$:GOSUB 564:IF PR=1 THEN 503 ELSE 483'◙◙--7  A * k
504 INPUT"Constant (any number, whole or decimal)";C:IF OP=8 THEN 508
505 FOR I=1 TO N:FOR J=1 TO M:A(I,J)=A(I,J)*C:NEXT J:NEXT I
506 GOSUB 507:PRINT #2,"* k"EQA$:GOSUB 564:IF PR=1 THEN 506 ELSE 483
507 PRINT #2,:PRINT #2,"With k ="STR$(C)", SCALED MATRIX A ";:RETURN'◙◙--8  A / k
508 FOR I=1 TO N:FOR J=1 TO M:A(I,J)=A(I,J)/C:NEXT J:NEXT I
509 GOSUB 507:PRINT #2,"/ k"EQA$:GOSUB 564:IF PR=1 THEN 509 ELSE 483'◙◙--9  A * B
510 FOR I=1 TO NA:FOR J=1 TO MB:C(I,J)=0:FOR K=1 TO MA:C(I,J)=C(I,J)+A(I,K)*B(K,J):NEXT K:NEXT J:NEXT I:N=NA:MA=MB:M=MA:FOR I=1 TO N:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I
511 IF OP=11 THEN 513
512 PRINT #2,P$"A * B"EQA$:GOSUB 564:IF PR=1 THEN 512 ELSE 483
513 PRINT #2,P$"A * B(Inv)"EQA$:GOSUB 564:IF PR=1 THEN 513 ELSE 483'◙◙--10  B * A
514 FOR I=1 TO NB:FOR J=1 TO MA:C(I,J)=0:FOR K=1 TO MB:C(I,J)=C(I,J)+B(I,K)*A(K,J):NEXT K:NEXT J:NEXT I:NA=NB:N=NA:M=MA:FOR I=1 TO N:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I
515 PRINT"REVERSE "P$"B * A"EQA$:GOSUB 564:IF PR=1 THEN 513 ELSE 483'◙◙--11  A * B(Inv)
516 M=NB:FOR I=1 TO M:FOR J=1 TO M:D(I,J)=B(I,J):NEXT J:NEXT I:GOSUB 574:GOSUB 160
517 PRINT #2,D$M$(MT)" = "D:PRINT #2,:IF D=0 THEN GOSUB 5:GOTO 483
518 IF PR=0 THEN FOR I=1 TO M:FOR J=1 TO M:A(I,J)=C(I,J):NEXT J:NEXT I
519 PRINT #2,P$"A * B(Inv)"EQA$:GOSUB 564:GOTO 594'◙◙--12  A' * B * A
520 FOR I=1 TO MA:FOR J=1 TO MB:C(I,J)=0:FOR K=1 TO NA:C(I,J)=C(I,J)+A(K,I)*B(K,J):NEXT K:NEXT J:NEXT I
521 FOR I=1 TO MA:FOR J=1 TO MA:B(I,J)=0:FOR K=1 TO NA:B(I,J)=B(I,J)+C(I,K)*A(K,J):NEXT K:NEXT J:NEXT I
522 NA=MA:N=NA:M=MA:FOR I=1 TO N:FOR J=1 TO M:A(I,J)=B(I,J):NEXT J:NEXT I:GOSUB 160
523 IF OP=13 THEN 528
524 PRINT #2,"QUADRATIC "P$"A' * B * A"EQA$:GOSUB 564:IF PR=1 THEN 524 ELSE 483'◙◙--13  A' * B(Inv) * A
525 M=NB:FOR I=1 TO M:FOR J=1 TO M:C(I,J)=B(I,J):D(I,J)=B(I,J):NEXT J:NEXT I:GOSUB 574:GOSUB 160
526 PRINT #2,D$M$(MT)" = "D:PRINT #2,:IF D=0 THEN GOSUB 5:GOTO 483
527 IF PR=0 THEN FOR I=1 TO M:FOR J=1 TO M:B(I,J)=C(I,J):NEXT J:NEXT I:GOTO 520
528 PRINT #2,"QUADRATIC "P$"A' * B(Inv) * A"EQA$:GOSUB 564:GOTO 594'◙◙--14  Normalize
529 NA=N:MA=M:GOSUB 160:IF N>1 THEN 531 ELSE S=0:FOR J=1 TO M:S=S+A(1,J)*A(1,J):NEXT J:S=SQR(S):FOR J=1 TO M:A(1,J)=A(1,J)/S:NEXT J
530 PRINT #2,"NORMALIZED VECTOR"EQA$:GOSUB 564:IF PR=1 THEN 530 ELSE 483
531 FOR J=1 TO M:E(J)=0:FOR I=1 TO N:E(J)=E(J)+A(I,J)*A(I,J):NEXT I:NEXT J:FOR J=1 TO M:E(J)=SQR(E(J)):FOR I=1 TO N:A(I,J)=A(I,J)/E(J):NEXT I:NEXT J:IF M=1 THEN 530
532 PRINT #2,"NORMALIZED MATRIX"EQA$:GOSUB 564:IF PR=1 THEN 532 ELSE 483'◙◙--15  Sqrt Diag A
533 FOR I=1 TO N:FOR J=1 TO M:IF I<>J THEN A(I,J)=0:GOTO 535 'diagonalize the matrix.
534 IF A(I,I)>=0 THEN A(I,I)=SQR(A(I,I)) ELSE FLAG=I:I=N:J=M
535 NEXT J:NEXT I:IF FLAG>0 THEN 537 ELSE GOSUB 160
536 PRINT #2,"SQRT OF DIAGONAL A"EQA$:GOSUB 564:IF PR=1 THEN 536 ELSE 483
537 BEEP:PRINT"Can't SQRT, because diagonal element"FLAG"is negative.":FLAG=0:GOTO 488'◙◙--16  Inv Sqrt Diag A
538 FOR I=1 TO N:FOR J=1 TO M:IF I<>J THEN A(I,J)=0:GOTO 541 'diagonalize the matrix.
539 IF A(I,I)<0 THEN FLAG=I:I=N:J=M:GOTO 541 ELSE IF A(I,I)<9.99999870000000e-11# THEN A(I,I)=9.999999e-15
540 A(I,I)=1/SQR(A(I,I))
541 NEXT J:NEXT I:IF FLAG>0 THEN 537 ELSE GOSUB 160
542 PRINT #2,"INVERSE SQRT OF DIAGONAL A"EQA$:GOSUB 564:IF PR=1 THEN 542 ELSE 483'◙◙--17  Eigen Symmetric A
543 IF M=2 THEN NV=2 ELSE EMIN=M:PRINT"How many Eigenvalues required (2-"MID$(STR$(M),2)"), or Min Value (less than 2)";:INPUT EMIN:IF EMIN>M THEN 543 ELSE IF EMIN<2 THEN NV=M ELSE NV=EMIN
544 GOSUB 43:TR=0:FOR I=1 TO M:TR=TR+A(I,I):NEXT I:GOSUB 599:CLS:GOSUB 160
545 PRINT #2,D$M$(MT)" = ";:IF NV<M THEN PRINT #2,"?" ELSE D=1:FOR I=1 TO M:D=D*E(I):NEXT I:PRINT #2,D
546 PRINT #2,"EIGENVALUES ";:S=0:Q=0:IF OP=18 THEN PRINT #2,"=":T$=LEFT$(P$,7):GOTO 548
547 T$="A":IF M=2 THEN PRINT #2,"=" ELSE IF EMIN<2 THEN PRINT #2,"(No. determined by MIN VALUE ="STR$(EMIN)"):" ELSE PRINT #2,"("MID$(STR$(NV),2)" values, as requested) ="
548 IF PR=0 THEN GOSUB 160
549 GOSUB 559:PRINT #2,"SUM OF EIGENVALUES = "S"    TRACE OF "T$" = "TR:PRINT #2,:GOSUB 5
550 PRINT #2,"NORMALIZED EIGENVECTORS (columnwise)"EQA$:N=NA:M=NV:MA=M:Q=1:GOSUB 559:FOR I=1 TO N:FOR J=1 TO M:A(I,J)=V(I,J):NEXT J:NEXT I
551 GOSUB 570:IF PR=1 THEN 545 ELSE 483'◙◙--18  Eigen B(Inv) * A
552 M=MA:FOR I=1 TO NA:FOR J=1 TO M:C(I,J)=A(I,J):NEXT J:NEXT I:GOSUB 574:DA=D:FOR I=1 TO NB:FOR J=1 TO MB:C(I,J)=B(I,J):NEXT J:NEXT I:GOSUB 574:DB=D
553 FOR I=1 TO NA:FOR J=1 TO M:V(I,J)=0:FOR K=1 TO M:V(I,J)=V(I,J)+C(I,K)*A(K,J):NEXT K:NEXT J:NEXT I
554 TR=0:FOR I=1 TO NA:TR=TR+V(I,I):NEXT I
555 GOSUB 662:CLS:GOSUB 160
556 PRINT #2,"EIGENSTRUCTURE OF B(Inv) * A":PRINT #2,:PRINT #2,D$M$(1)" = "DA:PRINT #2,D$M$(2)" = "DB:GOTO 546
557 '◙          -------------- More Subroutines ---------------
558 '◙--- Print Eigenstructure ---
559 FOR K=1 TO NV STEP 5:IF NV<K+5 THEN L=NV ELSE L=K+4
560 FOR I=K TO L:PRINT #2,USING"     ##     ";I;:NEXT I:PRINT #2,:IF Q=0 THEN FOR J=K TO L:PRINT #2,USING" "+F4$;E(J);:S=S+E(J):NEXT J:PRINT #2,:GOTO 562
561 FOR I=1 TO N:FOR J=K TO L:PRINT #2,USING" "+F4$;V(I,J);:NEXT J:PRINT #2,:NEXT I:PRINT #2,
562 NEXT K:RETURN
563 '◙--- Show/Print Outcome Matrix,  A(I,J) ---
564 IF ABS(A(1,1))<10 THEN F$=F4$ ELSE IF ABS(A(1,1))<1000 THEN F$=F5$ ELSE F$=F8$
565 L=1:FOR I=1 TO NA:PRINT #2,USING R$;I;:LN=0
566 J1=1+LN*5:J2=-(MA<J1+4)*MA-(MA>=J1+4)*(J1+4):IF J1>5 THEN PRINT #2,SPACE$(9);
567 FOR J=J1 TO J2:PRINT #2,USING F$;A(I,J);:NEXT J:PRINT #2,
568 GOSUB 572:IF MA>J2 THEN LN=LN+1:GOTO 566
569 NEXT I:PRINT #2,:IF OP=3 OR OP=11 OR OP=13 THEN 571
570 IF PR=1 THEN GOSUB 160 ELSE GOSUB 161:IF PR=1 THEN GOSUB 165
571 RETURN'◙--- Line Count ---
572 IF PR=1 THEN RETURN ELSE IF L<20 THEN L=L+1:RETURN ELSE GOSUB 5:L=1:RETURN
573 '◙--- Inverse of C(M,M)   (Gauss-Jordan Method) ---◙    Uses I-M,D,Q,Z,FLAG,IR,IC,IP(M),KR(M),KC(M),P(M).
574 D=1:FLAG=0:FOR I=1 TO M:IP(I)=0:NEXT I:FOR I=1 TO M:Z=0:FOR J=1 TO M:IF IP(J)=1 THEN 579
575 FOR K=1 TO M:ON SGN(IP(K)-1)+2 GOTO 577,578,576
576 I=M:J=M:K=M:FLAG=1:GOTO 578
577 IF Z < ABS(C(J,K)) THEN IR=J:IC=K:Z=C(J,K)
578 NEXT K
579 NEXT J:IF FLAG=1 THEN 585
580 IP(IC)=IP(IC)+1:IF IR<>IC THEN D=-D:FOR L=1 TO M:Z=C(IR,L):C(IR,L)=C(IC,L):C(IC,L)=Z:NEXT L
581 KR(I)=IR:KC(I)=IC:P(I)=C(IC,IC):D=D*P(I):IF ABS(P(I))<=0.000001 THEN D=0:I=M:GOTO 585
582 C(IC,IC)=1:FOR L=1 TO M:C(IC,L)=C(IC,L)/P(I):NEXT L
583 FOR K=1 TO M:IF K<>IC THEN Z=C(K,IC):C(K,IC)=0:FOR L=1 TO M:C(K,L)=C(K,L)-C(IC,L)*Z:NEXT L
584 NEXT K
585 NEXT I:IF FLAG=1 OR D=0 THEN 589
586 FOR I=1 TO M:Q=M-I+1:IF KR(Q)=KC(Q) THEN 588 ELSE K=KR(Q):L=KC(Q)
587 FOR J=1 TO M:Z=C(J,K):C(J,K)=C(J,L):C(J,L)=Z:NEXT J
588 NEXT I
589 '      Verify inverse
590 FOR I=1 TO M:FOR J=1 TO M:V(I,J)=0:FOR K=1 TO M:V(I,J)=V(I,J)+D(I,K)*C(K,J):NEXT K:NEXT J:NEXT I:FOR I=1 TO M:FOR J=1 TO M:V(I,J)=ABS(V(I,J)):NEXT J:NEXT I
591 IF ABS(D) < 0.000001 THEN D=0
592 RETURN
593 '◙---  Print C*C(Inv)  ---
594 IF OP=3 THEN X$="A*A(Inv)" ELSE X$="B*B(Inv)":IF OP=13 THEN M=NB
595 GOSUB 572:PRINT #2,"Above results are Ok if the following "X$" product is an Identity Matrix:"
596 FOR I=1 TO M:FOR J=1 TO M:PRINT #2,USING"###.##";V(I,J);:NEXT J:PRINT #2,:GOSUB 572:NEXT I:IF PR=1 THEN PRINT #2,
597 GOSUB 570:IF PR=1 THEN 495 ELSE 483
598 '◙---  Sub HOW - (Householder, Ortega & Wilkinson, after W W Cooley & P R Lohnes)◙        Input = C(I,J), M, MD, NV, EMIN.   Output = V(I,J), E(I), NV.
599 FOR I=1 TO M:FOR J=1 TO M:R(I+(J-1)*MD)=C(I,J):NEXT J:NEXT I  'Equates uni-dimensional R(I) with C(I,J).
600 IF EMIN<2 THEN EIG=EMIN ELSE EIG= -1.00000010000000e+2#
601 '◙      Tri-diagonalize.
602 M1=M-1:M2=M1*MD+M:M3=M2-MD:M4=MD+1:L=0:FOR I=1 TO M2 STEP M4:L=L+1:AA(L)=R(I):NEXT I:BB(1)=0:IF M=2 THEN 614 ELSE KK=0
603 FOR K=2 TO M1:KL=KK+K:KU=KK+M:KJ=K+1:SUM=0
604 FOR J=KL TO KU:SUM=SUM+R(J)*R(J):NEXT J:S=SQR(SUM):Z=R(KL):IF Z>0 THEN BB(K)=-S ELSE BB(K)=S
605 S=1/S:CC(K)=SQR(ABS(Z)*S+1):R(KL)=CC(K):X=ABS(S/CC(K)):IF Z<0 THEN X=-X
606 FOR I=KJ TO M:JJ=I+KK:CC(I)=X*R(JJ):R(JJ)=CC(I):NEXT I
607 FOR J=K TO M:JJ=J+1:DD(J)=0:L=KK+J
608 FOR I=K TO J:L=L+MD:DD(J)=DD(J)+R(L)*CC(I):NEXT I:IF J=M THEN 610
609 FOR I=JJ TO M:L=L+1:DD(J)=DD(J)+R(L)*CC(I):NEXT I
610 NEXT J:X=0:FOR J=K TO M:X=X+CC(J)*DD(J):NEXT J:X=0.5*X:FOR I=K TO M:DD(I)=X*CC(I)-DD(I):NEXT I:LL=KK:KK=KK+MD
611 FOR I=K TO M:LL=LL+MD:FOR J=I TO M:L=LL+J:R(L)=R(L)+DD(I)*CC(J)+DD(J)*CC(I):NEXT J:NEXT I
612 NEXT K:L=1:FOR I=1 TO M:X=AA(I):AA(I)=R(L):R(L)=X:L=L+M4:NEXT I
613 '◙       Eigenvalues.
614 EM6=0.000001:EM9=1.000000e-9:EM15=1.000000e-15:E15=1.000000e+15:BB(M)=R(M3):BD=ABS(AA(1))
615 FOR I=2 TO M:XX=ABS(AA(I))+BB(I)*BB(I):IF BD<XX THEN BD=XX
616 NEXT I:BD=BD+1:FOR I=1 TO M:AA(I)=AA(I)/BD:BB(I)=BB(I)/BD:DD(I)=1:E(I)=-1:NEXT I
617 FOR K=1 TO M
618 XX=ABS(DD(K)):IF ABS(E(K))>XX THEN XX=ABS(E(K))
619 IF EM9 > XX THEN XX=EM9
620 IF((DD(K)-E(K))/XX) < EM6 THEN 633
621 X=(DD(K)+E(K))*0.5:S2=1:CC(1)=AA(1)-X:IF CC(1)<0 THEN S1=-1:N=0 ELSE S1=1:N=1
622 FOR I=2 TO M
623 IF BB(I)=0 THEN CC(I)=(AA(I)-X)*SGN(S1):GOTO 627
624 IF BB(I-1)=0 THEN CC(I)=(AA(I)-X)*CC(I-1)-BB(I)*BB(I)*SGN(S2):GOTO 627
625 IF ABS(CC(I-1))+ABS(CC(I-2)) < EM15 THEN CC(I-1)=CC(I-1)*E15:CC(I-2)=CC(I-2)*E15
626 CC(I)=(AA(I)-X)*CC(I-1)-BB(I)*BB(I)*CC(I-2)
627 S2=S1:IF CC(I) THEN S1=ABS(S1)*SGN(CC(I)):IF S1=-S2 THEN 629
628 N=N+1
629 NEXT I:N=M-N:IF N>=K THEN FOR J=K TO N:DD(J)=X:NEXT J
630 N=N+1:IF M<N THEN 618
631 FOR J=N TO M:IF X<=E(J) THEN J=M ELSE E(J)=X
632 NEXT J:GOTO 618
633 NEXT K
634 FOR I=1 TO M:AA(I)=AA(I)*BD:BB(I)=BB(I)*BD:CC(I)=(DD(I)+E(I))*BD*0.5:NEXT I:M1=M:K=1
635 I=1
636 FLAG=0:FOR J=1 TO M1:IF I-J THEN IF CC(I)-CC(J)>0 THEN I=J:J=M1:FLAG=1
637 NEXT J:IF FLAG=1 THEN 636
638 E(K)=CC(I):K=K+1:M1=M1-1:IF I-M1<1 THEN FOR M2=1 TO M1:CC(M2)=CC(M2+1):NEXT M2
639 IF M1>1 THEN 635 ELSE E(K)=CC(1):IF NV>=0 THEN FOR I=1 TO M:CC(I)=E(I):NEXT I:J=M:FOR I=1 TO M:E(I)=CC(J):IF E(I)>=EIG THEN J=J-1 ELSE NV=I-1:I=M
640 NEXT I
641 '◙       Eigenvectors.
642 EM10=1.000000e-1:IF NV=0 THEN 658 ELSE KX=ABS(NV):J=1
643 FOR IV=1 TO KX:X=AA(1)-E(IV):Y=BB(2):M1=M-1
644 FOR I=1 TO M1:IJ=I+J-1:ON SGN(ABS(X)-ABS(BB(I+1)))+2 GOTO 645,646,647
645 CC(I)=BB(I+1):DD(I)=AA(I+1)-E(IV):VV(IJ)=BB(I+2):Z=-X/CC(I):X=Z*DD(I)+Y:IF M1=I THEN 648 ELSE Y=Z*VV(IJ):GOTO 648
646 IF X=0 THEN X=EM10
647 CC(I)=X:DD(I)=Y:VV(IJ)=0:X=AA(I+1)-(BB(I+1)/X*Y+E(IV)):Y=BB(I+2)
648 NEXT I:MJ=M+J-1:IF X=0 THEN 651 ELSE VV(MJ)=1/X
649 I=M1:IJ=I+J-1:VV(IJ)=(1-DD(I)*VV(MJ))/CC(I):X=VV(MJ)*VV(MJ)+VV(IJ)*VV(IJ)
650 I=I-1:IJ=I+J-1:IF I=0 THEN 652 ELSE VV(IJ)=(1-(DD(I)*VV(IJ+1)+VV(IJ)*VV(IJ+2)))/CC(I):X=X+VV(IJ)*VV(IJ):GOTO 650
651 VV(MJ)=1.000000e+1:GOTO 649
652 X=SQR(X):FOR I=1 TO M:IJ=I+J-1:VV(IJ)=VV(IJ)/X:NEXT I:J1=M1*MD-MD:K=M:GOTO 654
653 K=K-1:J1=J1-MD:Y=0:FOR I=K TO M:IJ=I+J-1:L=J1+I:Y=Y+VV(IJ)*R(L):NEXT I:FOR I=K TO M:IJ=I+J-1:L=J1+I:VV(IJ)=VV(IJ)-Y*R(L):NEXT I
654 IF J1 THEN 653 ELSE NPLUS=0:NMIN=0:FOR I=1 TO M:IJ=I+J-1:IF VV(IJ)<0 THEN NMIN=NMIN+1 ELSE NPLUS=NPLUS+1
655 NEXT I:IF NPLUS<NMIN THEN FOR I=1 TO M:IJ=I+J-1:VV(IJ)=-VV(IJ):NEXT I
656 J=J+MD:NEXT IV
657 '◙      Restore Matrices.
658 ME=MD+1:JJ=ME:M1=M*MD:FOR I=2 TO M1 STEP ME:K=I:FOR J=JJ TO M1 STEP MD:R(K)=R(J):K=K+1:NEXT J:JJ=JJ+ME:NEXT I
659 FOR I=1 TO M:FOR J=1 TO NV:V(I,J)=VV(I+(J-1)*MD):NEXT J:NEXT I:FOR J=1 TO NV:IF V(1,J)<0 THEN FOR I=1 TO M:V(I,J)=-V(I,J):NEXT I
660 NEXT J:RETURN
661 '◙---   Sub DIRNM    (After P R Lohnes) ---
662 FOR I=1 TO M:FOR J=1 TO M:C(I,J)=B(I,J):NEXT J:NEXT I:NV=M:EMIN=M
663 GOSUB 599:IF NV<M THEN 672
664 FOR I=1 TO M:D=SQR(ABS(E(I))):FOR J=1 TO M:B(J,I)=V(J,I)*D:NEXT J:NEXT I
665 FOR I=1 TO M:E(I)=1/SQR(ABS(E(I))):NEXT I
666 FOR I=1 TO M:FOR J=1 TO M:B(I,J)=V(I,J)*E(J):NEXT J:NEXT I
667 FOR I=1 TO M:FOR J=1 TO M:V(I,J)=0:FOR K=1 TO M:V(I,J)=V(I,J)+B(K,I)*A(K,J):NEXT K:NEXT J:NEXT I
668 FOR I=1 TO M:FOR J=1 TO M:C(I,J)=0:FOR K=1 TO M:C(I,J)=C(I,J)+V(I,K)*B(K,J):NEXT K:NEXT J:NEXT I
669 GOSUB 599:IF NV<M THEN 672
670 FOR I=1 TO M:FOR J=1 TO M:A(I,J)=0:FOR K=1 TO M:A(I,J)=A(I,J)+B(I,K)*V(K,J):NEXT K:NEXT J:NEXT I
671 FOR I=1 TO M:S=0:FOR J=1 TO M:S=S+A(J,I)*A(J,I):NEXT J:FOR J=1 TO M:V(J,I)=A(J,I)/SQR(S):NEXT J:NEXT I
672 RETURN
673 'end
```

## MENU.BAS

```bas
1 '      MENU for EASY-STATS  ---  MENU.BAS  ---  by  Dr Russell Langley
2 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:DEFINT A-Z:DIM OP$(40,1)
3 HD$="... EASY-STATS  by  LANGLEY ...":PRINT TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$:COLOR 7,0
4 PRINT:PRINT"  Use ARROW KEYS to move pointer to your choice, then press <ENTER> to run it.":PRINT STRING$(80,196)
5 FOR J=1 TO 40:READ OP$(J,0),OP$(J,1):IF OP$(J,0)="END" THEN OP$(J,0)="":OP=J-1:J=40
6 NEXT J:IF OP=0 THEN OP=40
7 IF OP <19 THEN N=OP ELSE N=INT(OP/2+0.5)
8 TOP=8:BOT=TOP+N-1:LT=3:GAP=40:RT=LT+GAP
9 FOR J=1 TO N:LOCATE TOP+J-1,LT+2,0:PRINT OP$(J,0):NEXT J:IF OP>N THEN FOR J=1 TO N:LOCATE TOP+J-1,RT+2,0:PRINT OP$(N+J,0);:NEXT J
10 P$=CHR$(16):S$=" ":LOCATE TOP,LT,0:PRINT P$;
11 ROW=CSRLIN:COL=POS(0):IN$=INKEY$:IF IN$=CHR$(13) THEN 17 ELSE IF LEN(IN$)<>2 THEN 11
12 ON ASC(RIGHT$(IN$,1))-71 GOTO 13,11,11,14,11,15,11,11,16:GOTO 11
13 IF ROW>TOP THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW-1,COL:PRINT P$;:GOTO 11 ELSE 11
14 IF COL=RT+1 THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW,COL-GAP:PRINT P$;:GOTO 11 ELSE 11
15 IF COL=LT+1 THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW,COL+GAP:PRINT P$;:GOTO 11 ELSE 11
16 IF ROW<BOT THEN COL=COL-1:LOCATE,COL:PRINT S$;:LOCATE ROW+1,COL:PRINT P$;:GOTO 11 ELSE 11
17 J=ROW-TOP+1-(COL=RT+1)*N:IF J>OP THEN 11
18 IF J=1 THEN CLS:LOCATE 1,1:SYSTEM
19 IF J=7 THEN CLS:PRINT"Loading program....":SHELL "CRITS.EXE":GOTO 2
20 OPEN OP$(J,1) FOR INPUT AS #1
21 CLOSE:CLS:PRINT"Loading program....":RUN OP$(J,1)'◙◙---  Menu Items & Filenames ---
41 DATA Exit to DOS,-
42 DATA Ancova & Comparing Regr Lines,ANCOV.BAS
43 DATA Anova 1-way,ANOV1.BAS
44 DATA "Anova 2-way, Unreplicated",ANOVU.BAS
45 DATA "Anova 2-way, Replicated",ANOVR.BAS
46 DATA Anova by Ranks (1- & 2-way),ANOVK.BAS
47 DATA "Bonferroni Critical Z,t,F,r,Chisq",CRITS.EXE
48 DATA Contingency Table Analyses,CONTY.BAS
49 DATA Correlation & Dispersion Matrices,CORMT.BAS
50 DATA Correlations (various),COREL.BAS
51 DATA Data Filer & Editor,DATFL.BAS
52 DATA Descriptive Statistics,DSTAT.BAS
53 DATA Mathematical Functions,MATHF.BAS
54 DATA Matrix Operations,MATOP.BAS
55 DATA Probabilities,PROBS.BAS
56 DATA "Regression, 1 or 2 predictors",REGRS.BAS
57 DATA Regroup Datafile by Categories,GROUP.BAS
58 DATA Remake an Upper Triangular Matrix,REMAK.BAS
59 DATA Standard Scores,ZSCOR.BAS
60 DATA t Tests,TTEST.BAS
61 DATA Tabulation (1 & 2 ways),TABLE.BAS
62 DATA Wilcoxon's Tests,WILCX.BAS
63 DATA END,END
```

## PROBS.BAS

```bas
1 '          PROBABILITIES  ---  PROBS.BAS   by  Dr Russell Langley
9 GOTO 400' ◙◙--- Sub Y=DLOGE(X)
10 IF X>=10THEN X=X/10:KT=KT+1:GOTO 10
11 IF X<0.1THEN X=X*10:KT=KT-1:GOTO 11
12 X2=(X-1)/(X+1):X3=X2:Y=X2:I=3
13 PRINT"LOG "Y;:LOCATE ,1:X1=Y:X3=X3*X2*X2:Y=Y+X3/I:I=I+2:IF Y-X1 THEN 13 ELSE Y=2*Y
14 IF KT>0THEN Y=Y+EL:KT=KT-1:GOTO 14
15 IF KT<0 THEN Y=Y-EL:KT=KT+1:GOTO 15
16 PRINT SPACE$(30);:LOCATE ,POS(0)-30:RETURN' ◙◙--- Sub Y=DEXP(X)
20 X2=X:X=ABS(X):X3=1:Y=1:I=0
21 PRINT"EXP "Y;:LOCATE ,1:X1=Y:I=I+1:X3=X3/I*X:Y=Y+X3:IF Y-X1 THEN 21 ELSE PRINT:IF X2<0 THEN Y=1/Y
22 RETURN' ◙◙--- Sub Y=DLOGG(XG)  (after M. Abramowitz & I. A. Stegun)
30 XX=XG:XT=1
31 IF XX<=13 THEN XT=XT*XX:XX=XX+1:GOTO 31
32 X=XX:GOSUB 10:H1=Y:X=XT:GOSUB 10:H2=Y:Y=(XX-0.5#)*H1-XX+0.918939#-H2+1/XX*(0.0833333#-(1/XX/XX*(0.00277777#+(1/XX/XX*(0.000793651#-(1/XX*0.000592381#)))))):RETURN'◙--- Sub Y=DSQRT(X)
40 Y=SQR(X):Y=(Y+X/Y)/2:Y=(Y+X/Y)/2:RETURN' ◙◙--- P for given Z  (after M. Abramowitz & I. A. Stegun)
50 T=1/(1+0.2316419#*Z):X=-Z*Z/2:GOSUB 20:P=2*0.3989423#*Y*T*((((1.330274429#*T-1.821255978#)*T+1.781477937#)*T-0.356563782#)*T+0.31938153#):RETURN' ◙◙--- P for given F
60 P=1:IF D1*D2*F<=0 THEN 65 ELSE IF F<1 THEN U=D2/2:V=D1/2 ELSE U=D1/2:V=D2/2
61 B=U+V:XG=B:GOSUB 30:G3=Y:XG=U:GOSUB 30:G4=Y:XG=V:GOSUB 30:G5=Y
62 C=0:S=1:T=1:IF F<1 THEN VU=V*F/(U+V*F):UV=U/(U+V*F) ELSE VU=V/(V+U*F):UV=U*F/(V+U*F)
63 PRINT"SUM "S;:LOCATE ,1:TS=S:T=T*(B+C)/(V+1+C)*VU:S=S+T:C=C+1:IF T>D6 THEN 63
64 X=UV:GOSUB 10:G1=Y:X=VU:GOSUB 10:G2=Y:X=U*G1+V*G2+G3-G4-G5:GOSUB 20:P=Y*S/V:IF F<1 THEN P=1-P
65 RETURN' ◙◙--- P for given r
70 D1=1:D2=DF:F=R*R*DF/(1-R*R):GOSUB 60:RETURN' ◙◙--- P for given Chisq
80 P=1:IF CHI*DF<=0 THEN 84 ELSE U=DF/2:XI=CHI/2:S=0:T=1:R=U:IF XI<13 THEN 81 ELSE IF XI>U THEN 82
81 TS=S:S=S+T:R=R+1:T=T*XI/R:IF S>TS THEN 81 ELSE X=S:GOSUB 10:G1=Y:X=XI:GOSUB 10:G2=Y:XG=U:GOSUB 30:G3=Y:X=G1-XI+U*G2-G3:GOSUB 20:P=1-Y/U:GOTO 84
82 S=S+T:R=R-1:TS=R/XI:T=T*TS:IF TS=0 THEN 83 ELSE IF TS>-1 THEN 82
83 X=S:GOSUB 10:G1=Y:X=XI:GOSUB 10:G2=Y:XG=U:GOSUB 30:G3=Y:X=G1-XI+U*G2-G3:GOSUB 20:P=Y/XI
84 RETURN' ◙◙--- Permutation Sub nPx, allows n!=nPn & nCx=nPx/xPx.
90 M=N1:E=0:IF X=0 THEN 93
91 FOR J=X TO 1 STEP -1:IF M>=NT THEN M=M/NT:E=E+T
92 M=M*N:N=N-N1:NEXT J
93 RETURN' ◙◙--- Date
100 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN'◙◙--- Printout?
110 INPUT;"Do you want a printout of this result (Y/N) ";YN$
111 LOCATE ,1:PRINT SPACE$(60);:LOCATE ,1:IF YN$="" THEN BEEP:GOTO 110
112 YN$=CHR$(ASC(YN$) AND 95):IF YN$<>"Y" AND YN$<>"N" THEN BEEP:GOTO 110
113 IF YN$="Y" THEN LINE INPUT;"Press <ENTER> when printer is ON. ";Z$:LOCATE ,1:PRINT SPACE$(60);:LOCATE ,1
114 RETURN'◙◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:ON ERROR GOTO 503:DEFINT I-K
401 CLS:HD$=" P R O B A B I L I T I E S ":VER$="(RL,7)":GOSUB 100:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1:K=10:P$=" probabilities."
402 PRINT TAB(K)"1.  Z (standard normal deviate)"P$"◙"TAB(K)"2.  Student's t"P$"◙"TAB(K)"3.  F (variance ratio)"P$"◙"TAB(K)"4.  Pearson's r (correlation coefficient)"P$"◙"TAB(K)"5.  Chi-squared"P$
403 PRINT TAB(K)"6.  Binomial"P$"◙"TAB(K)"7.  Poisson"P$"◙"TAB(K)"8.  Combining probabilities from independent sources.◙"TAB(K)"9.  Return to Main Menu.":PRINT
404 INPUT"Which option (1-9)";JOB:ON JOB GOTO 405,405,405,405,405,456,456,439,503:BEEP:GOTO 404' ◙◙--- First 5 Probabilities ---
405 PRINT:DEFDBL A-Z:DEFINT I-N,Q
406 DIM Y,I,X3,X1,S,C,T,X2,TS,D6,X,V,VU,B,R,KT,XX,XI,F,XT,U,P,EL,AP,D7,G1,G2,UV,Z$,G3,Z,CH,FS,H1,H2,XG,G5,G4,DF,XS,IN,K,CP,X$,D1,D2,KI,AE,ND,J,E$,NC,S2,S1,N1,N2,ST
407 D6=1.00000000000000e-16#:D7=1.00000000000000e-7#:EL=2.302585093#:E$="  (#.#######^^^^)◙"
408 ON JOB GOTO 410,426,432,420,414   'Z,t,F,r,C
409 '◙--- Prob of Z ---
410 INPUT"Z value (or null for menu again) ";X$:IF X$="" THEN 400 ELSE Z=ABS(VAL(X$)):IF Z<1.00000000000000e-8# THEN P=1 ELSE GOSUB 50
411 PRINT USING"2-Tail Prob (Z >####.####) = #.#####"+E$;Z;P;P
412 GOSUB 110:IF YN$="Y" THEN LPRINT USING"2-Tail Prob (Z >####.####) = #.#####"+E$;Z;P;P:LPRINT:GOTO 410 ELSE 410
413 '◙--- Prob of CHISQ ---
414 INPUT "Chi-squared value (or null for menu again) ";X$:IF X$="" THEN 400 ELSE CHI=VAL(X$):IF CHI<0 THEN BEEP:PRINT"Squares can't be negative!":GOTO 414
415 INPUT"What df ";DF:ND=DF:IF ND<=0 THEN BEEP:PRINT"Degrees of freedom must be positive!":GOTO 415
416 IF CHI<1.00000000000000e-8# THEN P=1 ELSE GOSUB 80
417 PRINT USING"1-Tail Prob (CHISQ with##### df >####.####) = #.#####"+E$;ND;CHI;P;P
418 GOSUB 110:IF YN$="Y" THEN LPRINT USING"1-Tail Prob (CHISQ with##### df >####.####) = #.#####"+E$;ND;CHI;P;P:LPRINT:GOTO 414 ELSE 414
419 '◙--- Prob of r ---
420 INPUT"Pearson's r value (or null for menu again) ";X$:IF X$="" THEN 400 ELSE R=ABS(VAL(X$))
421 INPUT"What df ";DF:ND=DF:IF ND<=0 THEN BEEP:PRINT"Degrees of freedom must be positive!":GOTO 421
422 IF R<1.00000000000000e-8# THEN P=1 ELSE IF R>0.9999999# THEN P=0 ELSE GOSUB 70
423 PRINT USING"2-Tail Prob (PEARSON'S r with##### df > #.####) = #.#####"+E$;ND;R;P;P
424 GOSUB 110:IF YN$="Y" THEN LPRINT USING"2-Tail Prob (PEARSON'S r with##### df > #.####) = #.#####"+E$;ND;R;P;P:LPRINT:GOTO 420 ELSE 420
425 '◙--- Prob of t ---
426 INPUT "Student's t value (or null for menu again) ";X$:IF X$="" THEN 400 ELSE ST=ABS(VAL(X$))
427 INPUT "What df ";DF:ND=DF:IF ND<=0 THEN BEEP:PRINT"Degrees of freedom must be positive!":GOTO 427
428 IF ST<1.00000000000000e-8# THEN P=1 ELSE F=ST*ST:D1=1.#:D2=DF:GOSUB 60
429 PRINT USING"2-Tail Prob (STUDENT'S t with##### df >###.####) = #.#####"+E$;ND;ST;P;P
430 GOSUB 110:IF YN$="Y" THEN LPRINT USING"2-Tail Prob (STUDENT'S t with##### df >####.####) = #.#####"+E$;ND;ST;P;P:LPRINT:GOTO 426 ELSE 426
431 '◙--- Prob of F ---
432 INPUT "F value (or null for menu again) ";X$:IF X$="" THEN 400 ELSE F=VAL(X$):IF F<0 THEN BEEP:PRINT"Can't be negative!":GOTO 432
433 INPUT "Top df    ";D1:N1=D1:IF N1<=0 THEN BEEP:PRINT"Must be > 0.":GOTO 433
434 INPUT "Bottom df ";D2:N2=D2:IF N2<=0 THEN BEEP:PRINT"Must be > 0.":GOTO 434
435 IF F<1.00000000000000e-8# THEN P=1 ELSE GOSUB 60
436 PRINT USING"1-Tail Prob (F(####!#####) >####.####) = #.#####"+E$;N1;",";N2;F;P;P
437 GOSUB 110:IF YN$="Y" THEN LPRINT USING"1=Tail Prob (F(####!#####) >####.####) = #.#####"+E$;N1;",";N2;F;P;P:LPRINT:GOTO 432 ELSE 432
438 '◙--- Combining Probs ---
439 DEFSNG I-K:DIM PRB(40):PRINT:PRINT TAB(20)"COMBINING  INDEPENDENT  PROBABILITIES":PRINT TAB(20)STRING$(37,"~")
440 F$="\           \ #.###":P1$="1-Tail Prob =":P2$="2-Tail Prob ="
441 INPUT"How many probabilities (2-40)";K:IF K<2 OR K>40 THEN BEEP:GOTO 441 ELSE KK=K
442 PRINT TAB(6)"Now enter your"K"probability figures (as 1-TAIL DECIMALS, not %),":PRINT TAB(6)"or 1-P for cases with opposite sign from the others (e.g. if -Z).":C=0
443 FOR J=1 TO K
444 PRINT"Prob #";J;:INPUT PRB(J):IF PRB(J)<0 OR PRB(J)>1 THEN BEEP:PRINT"Must be a decimal figure between 0 and 1.  Please re-do.":GOTO 444
445 C=C+LOG(PRB(J)):NEXT J
446 C=-2*C:D=2*K:PRINT"COMBINED PROBABILITIES:  ";
447 B=1:FOR I=D TO 2 STEP -2:B=B*I:NEXT I:K=C^(INT((D+1)/2))*EXP(-C/2)/B:IF INT(D/2)=D/2 THEN J=1 ELSE J=SQR(2/C/3.141592653599#)
448 L=1:M=1
449 D=D+2:M=M*C/D:IF M>1.000000e-7 THEN L=L+M:GOTO 449
450 P=J*K*L:IF P>0.5 THEN P=1-P
451 PRINT USING F$;P1$;P;:PRINT USING"   "+F$;P2$;P*2
452 GOSUB 110:IF YN$="N" THEN 400
453 LPRINT"INDEPENDENT PROBABILITIES":FOR J=1 TO KK:LPRINT " # ";USING"##  #.#####";J;PRB(J):NEXT J
454 LPRINT"COMBINED PROBABILITIES:  ";:LPRINT USING F$;P1$;P;:LPRINT USING"   "+F$;P2$;P*2:LPRINT:LPRINT:GOTO 400
455 '◙--- Binomial Probs ---
456 DEFDBL M,N:DIM A(100),C(100):F=2.302585093#:N1=1.#:NT=10000000000.#:T=10:T1=24:T2=40
457 IF JOB=7 GOTO 481
458 PRINT:PRINT TAB(17)"B I N O M I A L   P R O B A B I L I T I E S":PRINT TAB(17)STRING$(43,"~")
459 INPUT "Population Proportion (%) ";X$:IF INSTR(X$,"%") THEN BEEP:PRINT"Please re-do with any % sign.":GOTO 459 ELSE PP=VAL(X$):IF PP<=0 OR PP>=100 THEN BEEP:PRINT"This must be a figure between 0 and 100.":GOTO 459
460 INPUT"Sample Size";S:IF S<2 THEN BEEP:GOTO 460
461 PRINT"In your sample ---"
462 INPUT "What is the SMALLEST number of cases for which you want P ";Y:IF Y<0 OR Y>S THEN BEEP:GOTO 462
463 INPUT "What is the LARGEST  number of cases for which you want P ";Z:IF Z<Y OR Z>S THEN BEEP:GOTO 463
464 INPUT "Should the number of cases be shown in Ascending or Descending order (A/D) ";X$:INC=INSTR("DdAa",X$):IF INC=0 THEN BEEP:GOTO 464 ELSE IF INC>2 THEN INC=1 ELSE INC=-1:SWAP Y,Z
465 PRINT:PRINT"# WITH ATTRIBUTE     INDIV. PROB.     CUM. PROB.":L=1:P=PP/100
466 FOR X=Y TO Z STEP INC:N=VAL(STR$(S)):GOSUB 90:MM=M:EE=E:N=VAL(STR$(X)):GOSUB 90:M=MM/M:E=EE-E:A(X)=100*EXP(LOG(M)+F*E+X*LOG(P)+(S-X)*LOG(1-P))
467 IF (X=0 AND INC=1) THEN C(X)=A(X) ELSE IF INC=1 THEN C(X)=C(X-1)+A(X) ELSE C(X)=C(X+1)+A(X)
468 PRINT TAB(8);USING"####";X;:PRINT TAB(T1);USING"###.##%";A(X);:PRINT TAB(T2);USING"###.##%";C(X)
469 L=L+1:IF L=21 THEN PRINT TAB(35)"Press <ENTER> to continue.";:LINE INPUT;Z$:LOCATE ,1:PRINT SPACE$(70);:LOCATE ,1
470 IF C(X)>99.997 THEN X=Z
471 NEXT X
472 GOSUB 110:IF YN$="N" THEN 400
473 LPRINT CHR$(14);"BINOMIAL PROBABILITIES";CHR$(20)     'Sets wide letters on Epson printers.
474 LPRINT:LPRINT"Pop Proportion ="STR$(PP)"%"SPACE$(6)"Sample Size ="S
475 LPRINT:LPRINT"# WITH ATTRIBUTE     INDIV. PROB.     CUM. PROB."
476 FOR X=Y TO Z STEP INC
477 LPRINT TAB(8);USING"####";X;:LPRINT TAB(T1);USING"###.##%";A(X);:LPRINT TAB(T2);USING"###.##%";C(X)
478 IF C(X)>99.997 THEN X=Z
479 NEXT X:LPRINT STRING$(48,"="):LPRINT" ":LPRINT" ":GOTO 400
480 '◙--- Poisson Probs ---
481 PRINT:PRINT TAB(17)"P O I S S O N   P R O B A B I L I T I E S":PRINT TAB(17)STRING$(41,"~")
482 INPUT "Expected number of Occurrences (MU) in your sample";X$:MU=VAL(X$):IF MU<=0 THEN BEEP:GOTO 482 ELSE LM=LOG(MU)
483 INPUT "What is the SMALLEST number of occurrences for which you want P ";Y:IF Y<0 THEN BEEP:GOTO 483
484 INPUT "What is the LARGEST  number of occurrences for which you want P ";Z:IF Z<Y THEN BEEP:GOTO 484
485 INPUT "Do you want occurrences shown in Ascending or Descending order (A/D) ";X$:INC=INSTR("DdAa",X$):IF INC=0 THEN BEEP:GOTO 485 ELSE IF INC>2 THEN INC=1 ELSE INC=-1:SWAP Y,Z
486 PRINT:PRINT"# OF OCCURRENCES     INDIV. PROB.     CUM. PROB.":L=1
487 FOR X=Y TO Z STEP INC:N=VAL(STR$(X)):GOSUB 90:A(X)=100*EXP(X*LM-MU-(LOG(M)+F*E))
488 IF (X=0 AND INC=1) THEN C(X)=A(X) ELSE IF INC=1 THEN C(X)=C(X-1)+A(X) ELSE C(X)=C(X+1)+A(X)
489 PRINT TAB(8);USING"####";X;:PRINT TAB(T1);USING"###.##%";A(X);:PRINT TAB(T2);USING"###.##%";C(X)
490 L=L+1:IF L=21 THEN PRINT TAB(35)"Press <ENTER> to continue.";:LINE INPUT;Z$:LOCATE ,1:PRINT SPACE$(70);:LOCATE ,1
491 IF C(X)>99.997 THEN X=Z
492 NEXT X
493 GOSUB 110:IF YN$="N" THEN 400
494 LPRINT CHR$(14);"POISSON PROBABILITIES";CHR$(20)      'Sets wide letters on Epson printers.
495 LPRINT:LPRINT"Expected Number, MU =";MU
496 LPRINT:LPRINT"# OF OCCURRENCES     INDIV. PROB.     CUM. PROB."
497 FOR X=Y TO Z STEP INC
498 LPRINT TAB(8);USING"####";X;:LPRINT TAB(T1);USING"###.##%";A(X);:LPRINT TAB(T2);USING"###.##%";C(X)
499 IF C(X)>99.997 THEN X=Z
500 NEXT X:LPRINT STRING$(48,"="):LPRINT" ":LPRINT" ":GOTO 400
501 '◙--- Errors / Exit ---
502 PRINT:PRINT"In line"ERL"EXP(X) would overflow because ABS(X) > 87.336":LINE INPUT "Press <ENTER> to resume.";Z$:GOTO 400
503 IF ERR THEN BEEP ELSE RUN "MENU"
504 IF ERR=6 AND ERL=21 THEN RESUME 502
505 ON ERROR GOTO 0
506 END
```

## REGRS.BAS

```bas
1 '      REGRESSION (1-2 predictors) --- REGRS.BAS --- by  Dr Russell Langley
2 GOTO 400
4 '  --- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40); : PRINT "Press <Enter> to continue."; : IN$ = INKEY$: WHILE INKEY$ <> CHR$(13): WEND: LOCATE , 40: PRINT SPACE$(26): RETURN
6 PRINT TAB(14); : PRINT "Press <Enter> to continue, or `/' to end viewing."; : IN$ = INKEY$: WHILE IN$ <> CHR$(13) AND IN$ <> "/": IN$ = INKEY$: WEND: LOCATE , 14: PRINT SPACE$(50): IF IN$ = "/" THEN I = N: RETURN ELSE RETURN
7 '  *** Redirect to Block ***
9 ON QB GOTO 409,177,700:STOP   '=re-start, printout, command menu.             '    --- Another go? ---
10 CLOSE : IF HD$ = "" THEN LPRINT STRING$(79, 61); STRING$(4, 10)
11 DO$ = "run this program again now": GOSUB 20: IF Z$ = "Y" THEN 2 ELSE 30
19 '  --- Yes/No? ---
20 PRINT : PRINT "Do you want to " + DO$;
21 INPUT " (Y/N)"; Z$: IF Z$ = "" THEN Z$ = "N": RETURN ELSE Z$ = CHR$(ASC(Z$) AND 95): IF Z$ = "Y" OR Z$ = "N" THEN RETURN ELSE PRINT "WHAT?  "; : GOTO 21
29 '  --- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
31 IF ERR = 70 THEN LINE INPUT "Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>."; Z$: RESUME
32 IF ERR = 71 THEN LINE INPUT "That drive is empty or its gate is open.  Fix, then press <Enter>."; Z$: RESUME
33 IF ERR = 210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0: END'            --- Messages ---
40 BEEP: PRINT "---> Sorry, that entry is illegal.": RETURN
41 BEEP: PRINT "---> Sorry, double quotes are not allowed here.": RETURN
42 BEEP: PRINT "* * * Can't Do That.": RETURN
43 COLOR 23, 0: PRINT : PRINT "Working"; : COLOR 7, 0: RETURN
44 LOCATE , 1: PRINT "Ok, done."; : GOTO 5
46 ZZ$ = STRING$(37 - LEN(Z$) \ 2, 177): LOCATE 1, 1: PRINT ZZ$; "  "; : COLOR 15, 0: PRINT Z$; : COLOR 7, 0: PRINT "  "; ZZ$: RETURN
47 '
48 '  --- Vetted Decoding of FF X(I,J) from X$ ---
49 ' Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K = 1: L = M: IF UT THEN L = M - I + 1
51 KX = 0: FOR J = K TO L: Y$ = SPACE$(10): KY = 0
52 KX = KX + 1: IF KX > LEN(X$) THEN IF J = L THEN 54 ELSE 57
53 Z$ = MID$(X$, KX, 1): IF INSTR("-.0123456789", Z$) THEN KY = KY + 1: MID$(Y$, KY, 1) = Z$: GOTO 52 ELSE IF Z$ <> " " THEN 58 ELSE IF KY = 0 THEN 52
54 IF Q(0) THEN Q(J) = VAL(Y$) ELSE X(I, J) = VAL(Y$)
55 NEXT J: IF KX >= LEN(X$) THEN 60
56 PLAY "L8O3CO2C": PRINT "Only the first"; L; "values have been read in that line.  Re-do it"; : GOSUB 21: IF Z$ = "Y" THEN 59 ELSE 60
57 PLAY "L32O4CEG>C": PRINT "Not enough values in the line above.  Please re-do whole line.": GOTO 59
58 PLAY "L16O3CEL4>B": PRINT "That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT "Row"; STR$(I); : INPUT X$: IF RIGHT$(X$, 1) <> "/" THEN 51 ELSE X$ = LEFT$(X$, LEN(X$) - 1): N = I + (X$ = ""): IF X$ > "" THEN 51
60 RETURN
67 '
68 '  *** K/b Input of all X(I,J) in FF ***
69 '      Needs first I, M (& if UT matrix UT>0).  Returns N.
70 PRINT "Enter data from keyboard, "; : IF M = 1 THEN PRINT "pressing <Enter> after each number.": GOTO 72
71 PRINT "in Free Format, pressing <Enter> at end of each row.": IF UT THEN 73
72 PRINT "Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT "Row"; STR$(I); : INPUT X$: IF UT > 0 AND I = M THEN N = M: GOTO 75 ELSE IF X$ = "" THEN IF I > 1 THEN FOR J = 1 TO M: X(I, J) = X(I - 1, J): NEXT J: I = I + 1: LOCATE CSRLIN - 1, POS(0) + 9: PRINT "Ditto": GOTO 73
74 IF RIGHT$(X$, 1) = "/" THEN X$ = LEFT$(X$, LEN(X$) - 1): N = I + (X$ = ""): IF X$ = "" THEN 76
75 GOSUB 50: IF N = 0 THEN IF I < MXR THEN I = I + 1: GOTO 73 ELSE N = MXR
76 RETURN
77 '
78 '  --- Disk Input of X(I,J), N, M, etc ---
79 '   Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 IO$ = "I": GOSUB 111: CLS : PRINT "Loading data from disk.": INPUT #1, FL$, VR$
81 IF LEFT$(VR$, 4) <> "(RL," THEN BEEP: PRINT "Unreadable file --- not made by our Data Filer/Editor program.": GOTO 86
82 INPUT #1, DT$, ID$, N, M, UT, VN$: PRINT "Filename: "; FL$, "Made: "; DT$, "Version: "; VR$: PRINT "ID: "; ID$: PRINT
83 IF UT > 0 AND ZZ$ <> "UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!": GOTO 86
84 PRINT "File has"; N; "rows of data. "; : IF N < MNR THEN PRINT "--- Not enough!": GOTO 86 ELSE IF N > MXR THEN PRINT "--- Too many!": GOTO 86
85 PRINT : PRINT "File has"; M; "column variables. "; : IF M < MNC THEN PRINT "--- Not enough!" ELSE IF M > MXC THEN PRINT "Too many!" ELSE 88
86 CLOSE : BEEP: GOSUB 5: ERROR 210
87 '  *** Select variables
88 PRINT : IF VN$ = "N" THEN PRINT "The"; M; "variables are not named.": GOTO 90
89 PRINT "Variables in file are:": FOR J = 1 TO M: INPUT #1, VN$(J): PRINT J; VN$(J), : NEXT J: PRINT
90 IF M = MNC OR UT > 0 THEN 100
91 IF NEEDVARS = 2 THEN PRINT "This analyses only 2 column variables.": ND = M - 2
92 IF NEEDVARS = 3 THEN PRINT "This analyses only 3 column variables.": ND = M - 3
94 IF ND = 1 THEN PRINT "Number of the variable to be IGNORED (1-"; MID$(STR$(M), 2); ")"; : INPUT X$: Q(1) = VAL(X$): IF Q(1) < 1 OR Q(1) > M THEN GOSUB 40: GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND), 2); " numbers of variables to be IGNORED (in ascending order & Free Format):": INPUT X$: IF VAL(X$) < 1 THEN GOSUB 40: GOTO 95
96 Q(0) = 1: MM = M: M = ND: GOSUB 50: Q(0) = 0: M = MM
97 KK = 1: L = 1: FOR J = 1 TO M: IF J = Q(KK) THEN KK = KK + 1 ELSE VN$(L) = VN$(J): L = L + 1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT : COLOR 23, 0: PRINT "Loading numbers"; : COLOR 7, 0: FOR I = 1 TO N: KK = 1: LL = 1: L = M
101 FOR J = 1 TO L: INPUT #1, Z
102 IF J = Q(KK) THEN KK = KK + 1 ELSE X(I, LL) = Z: LL = LL + 1
103 NEXT J: NEXT I: CLOSE : LOCATE , 1: M = M - ND: RETURN
108 '
109 '   --- Get Filespec ---
110 '
111 LINE INPUT "Filename (I will add .DAT extension)? "; FL$: IF FL$ = "" THEN 111 ELSE IF MID$(FL$, 2, 1) = ":" THEN DR$ = LEFT$(FL$, 1): FL$ = MID$(FL$, 3)
112 ER = 0: FOR I = 1 TO LEN(FL$): Z$ = MID$(FL$, I, 1): IF INSTR(" .,/\|?*:;[]+=" + CHR$(34), Z$) THEN ER = 1
113 NEXT I
114 IF ER = 0 AND FL$ > "" AND LEN(FL$) < 9 THEN FL$ = FL$ + ".DAT" ELSE BEEP: PRINT "Invalid filename.  Will you try again"; : GOSUB 21: IF Z$ = "Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)"; DR$: IF DR$ = "" THEN 115
116 DR$ = CHR$(ASC(DR$) AND 95): IF INSTR("ABCD", DR$) = 0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) "; DR2$: IF DR2$ = "" THEN DR$ = DR$ + ":" ELSE DR$ = DR$ + ":\" + DR2$ + "\"
128 '
129 '   *** Open File, IO$= "I" ***
130 IF IO$ = "O" THEN STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136: OPEN DR$ + FL$ FOR INPUT AS #1 'for input
135 ON ERROR GOTO 30: RETURN               'input #1,A$,B$:close
136 PRINT FL$; " not found on Drive "; DR$: RESUME 137
137 GOSUB 5: ON ERROR GOTO 30: CLS : ERASE X: SHELL "DIR " + DR$ + "/W": GOSUB 5
138 DIM X(MXR, 5)   'replacing MXC
139 GOTO 111
158 '
159 '   --- Show/Print Answers ---
160 QB=3:PR = 0: CLOSE : OPEN "SCRN:" FOR OUTPUT AS #2: RETURN
161 DO$ = "print these results": GOSUB 20: IF Z$ = "N" THEN PR = 0: RETURN
162 PR = 1: IF ID$ = "" THEN LINE INPUT "Problem ID? "; ID$: GOTO 164
163 LINE INPUT "Problem ID (null = unchanged)? "; Z$: IF Z$ > "" THEN ID$ = Z$
164 RETURN
165 QB = 2: CLS : LOCATE 8, 1
166 PRINT TAB(12); "╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12); "║                                                       ║"
168 PRINT TAB(12); "║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12); "║                                                       ║"
170 PRINT TAB(12); "║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12); "║                                                       ║"
172 PRINT TAB(12); "║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12); "║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12); "║                                                       ║"
175 PRINT TAB(12); "╚═══════════════════════════════════════════════════════╝": IN$ = INKEY$
176 IN$ = INKEY$: IF IN$ <> CHR$(13) THEN 176
177 CLS : PRINT "Printing .....": LOCATE 4, 1: CLOSE : OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$ > "" THEN PRINT #2, STRING$(79, 61): PRINT #2, DAT$; TAB(42 - LEN(HD$) \ 2); HD$; TAB(73); VER$: PRINT #2, STRING$(79, 61): HD$ = ""
179 PRINT #2, CHR$(10); "PROBLEM: "; ID$; CHR$(10)
180 RETURN
198 '
199 '   --- Show a Row of Data ---
200 PRINT "Row"; STR$(I); ": "; : FOR J = 1 TO M: PRINT X(I, J); : NEXT J: PRINT : RETURN
209 '   --- Varnames ---
210 IF VN$ = "Y" THEN RETURN ELSE FOR L = 1 TO M: IF L < 10 THEN VN$(L) = "Var #" + STR$(L) ELSE VN$(L) = "Var #" + MID$(STR$(L), 2)
211 NEXT L: RETURN
248 '
249 '   *** Transform Sub ***
250 K = 20: CLS : LOCATE , 24, 0: PRINT "TRANSFORM MENU": PRINT : PRINT TAB(K); "1   Arcsin(Sqrt(p))": PRINT TAB(K); "2   Arcsin(Sqrt(p% / 100))": PRINT TAB(K); "3   Log(X)": PRINT TAB(K); "4   Log(X + 1)": PRINT TAB(K); "5   Reciprocal 100/X"
251 PRINT TAB(K); "6   Reciprocal Plus, 100/(X+1)": PRINT TAB(K); "7   Sqrt (X)": PRINT TAB(K); "8   Sqrt (X+0.5)": PRINT TAB(K); "9   X Squared": PRINT TAB(K - 1); "10   None (leaving data unchanged)"
252 PRINT TAB(10); "Negative codes reverse transforms (e.g. -3 = Antilog)": PRINT : LOCATE , , 1
253 INPUT "Which transform (+/- 1 to 9, or 10)"; T%: IF T% = 10 THEN 273 ELSE IF ABS(T%) < 1 OR ABS(T%) > 9 THEN PRINT "WHAT?  "; : GOTO 253
254 PRINT "How many variables are to have this transform (max"; STR$(M); ")"; : INPUT NT: IF NT < 1 OR NT > M THEN 254 ELSE IF NT = M THEN FOR J = 1 TO M: Q(J) = J: NEXT J: GOTO 257
255 IF NT = 1 THEN INPUT "Which variable # "; X$: Q(1) = VAL(X$): IF Q(1) < 1 OR Q(1) > M THEN PRINT "Silly": GOTO 255 ELSE 257
256 PRINT "Which 2 variables (#'s in Free Format)"; : INPUT X$: I = 1: MM = M: M = NT: Q(0) = 1: GOSUB 50: Q(0) = 0: M = MM: IF Q(1) < 1 OR Q(1) > M OR Q(2) < 1 OR Q(2) > M THEN PRINT "One of those is invalid.  Try again.": GOTO 256
257 GOSUB 43: A = 57.29578: B = 0.4342945: Z = 0: U = 1: H = 100: P5 = 0.5: P9 = 0.99999: E$(0) = ""
258 FOR J = 1 TO NT: K = Q(J): FOR I = 1 TO N: ON T% + 10 GOTO 269, 270, 270, 267, 267, 265, 265, 262, 262, 39, 260, 259, 264, 263, 267, 266, 269, 268, 270
259 X(I, K) = X(I, K) / H
260 IF X(I, K) > P9 THEN X(I, K) = P9 ELSE IF X(I, K) < Z THEN 272
261 X(I, K) = SQR(X(I, K)): X(I, K) = A * ATN(X(I, K) / SQR(U - X(I, K) * X(I, K))): GOTO 271
262 IF X(I, K) >= Z THEN X(I, K) = (SIN(X(I, K) / A)) ^ 2: IF T% = -U THEN 271 ELSE X(I, K) = H * X(I, K): GOTO 271 ELSE T% = U: GOTO 272
263 X(I, K) = X(I, K) + U
264 IF X(I, K) > Z THEN X(I, K) = B * LOG(X(I, K)): GOTO 271 ELSE 272
265 X(I, K) = EXP(X(I, K) / B): IF T% = -3 THEN 271 ELSE X(I, K) = X(I, K) - U: GOTO 271
266 X(I, K) = X(I, K) + U
267 IF X(I, K) <> Z THEN X(I, K) = H / X(I, K): IF T% = -6 THEN X(I, K) = X(I, K) - U: GOTO 271 ELSE 271 ELSE 272
268 X(I, K) = X(I, K) + P5
269 IF X(I, K) >= Z THEN X(I, K) = SQR(X(I, K)): GOTO 271 ELSE T% = 7: GOTO 272
270 X(I, K) = X(I, K) * X(I, K): IF T% = -8 THEN X(I, K) = X(I, K) - P5
271 NEXT I: NEXT J: IF E$(0) = "" THEN GOSUB 44: GOTO 273
272 BEEP: E$(0) = "PROPORTION < 0": E$(1) = "LOG 0 or Negative Number": E$(2) = "DIVISION by 0": E$(3) = "SQRT of Negative Number": PRINT : PRINT "Fatal Error: "; E$((ABS(T%) - 1) / 2); ", Row"; I: GOSUB 5: END
273 RETURN
288 '
289 '   *** Scat Sub ***
290 QS = 1
291 SM = X(1, L): GR = SM: FOR I = 2 TO N: Z = X(I, L): IF Z < SM THEN SM = Z ELSE IF Z > GR THEN GR = Z
292 NEXT I
294 IF K < 9 THEN 296 ELSE K = 5: IF SM > -3 THEN SM = -3
295 IF GR < 3 THEN GR = 3
296 IF GR - SM < 0.00001 THEN BEEP: J = L: LOCATE , 1: PRINT "There is NO VARIATION in variable "; VN$(J): QE = 9: QS = 0: GOSUB 5: GOTO 313 ELSE IF L = J THEN H = 4 ELSE H = 1.5'  Select Scales
297 Q = 1: KT = 0
298 R = GR - SM: C = SM
299 IF R <= 1 THEN KT = KT + 1: R = R * 10: GOTO 299
300 IF R > 10 THEN KT = KT - 1: R = R / 10: GOTO 300
301 IF Q > 2 THEN 303 ELSE C = C * 10 ^ KT: IF C < 0 AND C <> INT(C) THEN C = C - 1
302 C = INT(C) / 10 ^ KT: R = (GR - C) / H: KT = 0: Q = Q + 2: GOTO 299
303 F = INT(R): IF F <> R THEN F = F + 1
304 IF R < P5 THEN F = F - P5
305 F = F / 10 ^ KT: IF Q <> 4 THEN IF (GR - SM) / (H * F) <= 0.8 THEN KT = 1: Q = 2: GOTO 298
306 SM = C: D = F * INT(C / F): IF D < 0 AND D <> C THEN D = D - F
307 IF D + H * F >= GR THEN SM = D
308 IF L = J THEN X = SM: U = F: L = K: IF K = 5 THEN K = 9: GOTO 291 ELSE 291 ELSE Y = SM: V = F'    Now go back & rpt with Y.
312 NX = 41: LX = 5: NY = 16: A = 10 / U: B = 10 / V
313 RETURN '  Scan data points to be plotted
314 O = 0: FOR KN = 1 TO LX: XP(KN) = X + O * U: O = O + 1: NEXT KN
315 FOR I = 1 TO NY: Q = I - 1: IL = NY - Q: FOR II = 1 TO NX: O$(II) = " ": NEXT II
316 FOR L = 1 TO N: IX = ((X(L, J) - X) * A) + 1: IF IX < 1 OR IX > NX THEN 320 ELSE IY = ((X(L, K) - Y) * B) + 1: IF IY <> IL THEN 320 ELSE IF O$(IX) = " " THEN O$(IX) = "*": GOTO 320
317 IF O$(IX) = "#" THEN 320
318 FOR KK = 1 TO 35: IF O$(IX) = MID$(C$, KK, 1) THEN O$(IX) = MID$(C$, KK + 1, 1): KK = 35
319 NEXT KK
320 NEXT L'   Print a line
321 FOR L = 41 TO 1 STEP -1: IF O$(L) > " " THEN LN = L: L = 1
322 NEXT L: IF Q MOD 5 <> 0 THEN 325
323 O = H - Q / 10: D = Y + O * V: IF D < 100000. THEN PRINT #2, USING "##########.#"; D; : PRINT #2, "+ "; : FOR L = 1 TO LN: PRINT #2, O$(L); : NEXT L: GOTO 327
324 IY = INT(D + P5): PRINT #2, USING "############"; IY; : PRINT #2, "+ "; : FOR L = 1 TO LN: PRINT #2, O$(L); : NEXT L: GOTO 327
325 IF I <> 3 THEN PRINT #2, S12$;  ELSE PRINT #2, USING "\        \  "; VN$(K);
326 PRINT #2, "| "; : FOR L = 1 TO LN: PRINT #2, O$(L); : NEXT L
327 PRINT #2, : NEXT I'  PRINT X - axis
328 PRINT #2, S12$; "  +"; : FOR I = 1 TO 4: PRINT #2, "---------+"; : NEXT I: PRINT #2, : PRINT #2, S$;
329 FOR I = 1 TO LX: PRINT #2, USING "########.#"; XP(I); : NEXT I: PRINT #2, : PRINT #2, S12$; S12$; S12$; VN$(J)
330 IF PR THEN PRINT #2,
331 QS = 0: RETURN
338 '
339 '   --- Date ---
340 DAT$ = MID$(DATE$, 4, 2) + " " + MID$("JanFebMarAprMayJunJulAugSepOctNovDec", -2 + 3 * VAL(LEFT$(DATE$, 2)), 3) + " " + RIGHT$(DATE$, 4): RETURN
359 '   *** Regr Special ***
360 IF Z > 1 THEN F$ = FL$: RETURN ELSE F$ = FS$: RETURN
398 '
399 '                  --- Start ---
400 KEY OFF: CLEAR : SCREEN 0, 0, 0, 0: CLS : ON ERROR GOTO 30
401 DEFINT I-N, Q: MXR = 400: MXC = 20
402 DIM I,J,K,L,M,N,Q,X,Y,Z,X$,Y$,Z$
403 DIM X(MXR, 5), N(20), A(3), S(3), SK(3), SS(3, 3), SB(2), O$(41), PE(14), XP(5), F(20), J(3), VN$(MXC), Q(MXC), ED$(1), HD$(6), E$(3)
404 P5 = 0.5: C$ = "*23456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#": ED$(0) = "C#=Change, D#=Delete, X=Extra data, Null=Proceed": ED$(1) = "C#=Change, Null=Proceed": SC$ = "SCATTERGRAM"
405 FA$ = "### ###  <+#.# :": FB$ = "### ###  >+#.# :": FE$ = "#.######^^^^": F2$ = "######.##": F4$ = "######.####"
406 S$ = SPACE$(6): S3$ = SPACE$(3): S4$ = SPACE$(4): S8$ = SPACE$(8): S9$ = SPACE$(9): S12$ = SPACE$(12): SF$ = SPACE$(14)
407 FOR J = 1 TO 7: READ PE(J): PE(15 - J) = PE(J): NEXT: DATA .00135,.00486,.01654,.044057,.091848,.149883,.191462
408 HD$(0) = "LINEAR REGRESSION": HD$(3) = "  (2 Predictors)": HD$(4) = "  (1 Predictor, ": HD$(5) = "Ungrouped X's)": HD$(6) = "Grouped X's)": HD$(1) = HD$(4) + HD$(5): HD$(2) = HD$(4) + HD$(6)
409 QB = 1: CLOSE : CLS : Z$ = "M E N U   F O R   L I N E A R   R E G R E S S I O N": GOSUB 46
410 LOCATE 3, 8: PRINT "Press the NUMBER of your choice, and then press <ENTER> to run it.": PRINT STRING$(80, 196)
411 LOCATE 6, 1: K = 10: PRINT TAB(K); "1    Y' = A + BX  (one predictor)": PRINT : PRINT TAB(K); "2    Y' = A + BX  (with repeated Xs, keyboard entry only)": PRINT : PRINT TAB(K); "3    Y' = A + B1.X1 + B2.X2  (two predictors)"
412 PRINT : PRINT TAB(K); "4    Return to Main Menu."
413 PRINT : LOCATE , K - 3: INPUT "===>  Option (1-4) "; OP: ON OP GOTO 500, 600, 900, 30: PRINT "No, please enter 1, 2, 3, or 4": GOTO 413
414 '
415 '                   --- 1 Predictor ---
500 HD$ = HD$(0) + HD$(1): VER$ = "(RL,3)": NEEDVARS = 2: M = 2
501 CLS : GOSUB 340: PRINT DAT$; TAB(40 - LEN(HD$) \ 2); : COLOR 0, 7: PRINT " "; HD$; " "; : COLOR 7, 0: PRINT TAB(73); VER$: LOCATE 4, 1, 0: K = 12
502 PRINT TAB(K); "╔═══════════════════════════════════════════════════════╗"
503 PRINT TAB(K); "║                                                       ║"
504 PRINT TAB(K); "║ Given 4-400 rows of paired measurements, X and Y, in  ║"
505 PRINT TAB(K); "║ free format, this computes coefficients, A and B, of  ║"
506 PRINT TAB(K); "║ a linear function:   Y' = A + BX     which estimates  ║"
507 PRINT TAB(K); "║ the most likely value of Y for any specified X value. ║"
508 PRINT TAB(K); "║                                                       ║"
509 PRINT TAB(K); "║        Data can be from keyboard or disk file.        ║"
510 PRINT TAB(K); "║   In either case, data can be edited or transformed.  ║"
511 PRINT TAB(K); "║        Underlying assumptions can be checked.         ║"
512 PRINT TAB(K); "║     Printouts can be done after viewing answers.      ║"
513 PRINT TAB(K); "║        If trouble, try <Ctrl-Break> & GOTO 9.         ║"
514 PRINT TAB(K); "║                                                       ║"
515 PRINT TAB(K); "╚═══════════════════════════════════════════════════════╝": LOCATE , , 1
516 '   --- Get Data ---
517 DO$ = "enter data from disk": GOSUB 20: PRINT : IF Z$ = "N" THEN 521
518 '   --- Disk Entry ---
519 MNR = 4: MNC = 2: GOSUB 80: GOTO 632
520 '   --- K/b Entry ---
521 PRINT "Ok, enter 4-400 X and Y values, 1 such pair per line in Free Format.": I = 1: M = 2: Q = 1: GOSUB 72: GOTO 632
522 '
523 '                 --- Replicated X's ---
524 '
600 HD$ = HD$(0) + HD$(2): VER$ = "(RL,3)": M = 2
601 CLS : GOSUB 340: PRINT DAT$; TAB(40 - LEN(HD$) \ 2); : COLOR 0, 7: PRINT " "; HD$; " "; : COLOR 7, 0: PRINT TAB(73); VER$: LOCATE 4, 1, 0: K = 12
602 PRINT TAB(K); "╔═══════════════════════════════════════════════════════╗"
603 PRINT TAB(K); "║                                                       ║"
604 PRINT TAB(K); "║       Given 4-400 pairs of measurements, X & Y,       ║"
605 PRINT TAB(K); "║  this computes coefficients, A and B, of a formula:   ║"
606 PRINT TAB(K); "║                    Y' =  A + BX                       ║"
607 PRINT TAB(K); "║    which will estimate the most likely value of Y     ║"
608 PRINT TAB(K); "║              for any specified X value.               ║"
609 PRINT TAB(K); "║                                                       ║"
610 PRINT TAB(K); "║     Input & formulas here are specially for data      ║"
611 PRINT TAB(K); "║       with 2 or more Y values for each X value.       ║"
612 PRINT TAB(K); "║                                                       ║"
613 PRINT TAB(K); "║          Data entry is only from keyboard.            ║"
614 PRINT TAB(K); "║      Transforms & simple editing are available.       ║"
615 PRINT TAB(K); "║        Underlying assumptions can be checked.         ║"
616 PRINT TAB(K); "║     Printouts can be done after viewing answers.      ║"
617 PRINT TAB(K); "║        If trouble, try <Ctrl-Break> & GOTO 9.         ║"
618 PRINT TAB(K); "║                                                       ║"
619 PRINT TAB(K); "╚═══════════════════════════════════════════════════════╝": LOCATE , , 1
620 PRINT : INPUT "How many X groups (3-20)"; NG: IF NG < 3 OR NG > 20 THEN 620
621 PRINT : PRINT "Enter the X value for each group just once.": PRINT "Then enter one Y value per line.": PRINT "Signal the end of each group by a `/' instead of another Y value."
622 I = 1: FOR K = 1 TO NG: PRINT : PRINT "GROUP"; K; TAB(18); "X"; TAB(31); "Y"
623 PRINT TAB(16); : GOSUB 628: IF L = 99 THEN 623 ELSE X(I, 1) = VAL(X$)
624 PRINT TAB(29); : GOSUB 628: IF L = 99 THEN 624 ELSE IF X$ = "/" THEN PRINT "  WHAT ?": GOTO 624 ELSE X(I, 2) = VAL(X$): I = I + 1
625 X(I, 1) = X(I - 1, 1): PRINT TAB(16); X(I, 1);
626 PRINT TAB(29); : GOSUB 628: IF L = 99 THEN 626 ELSE IF X$ = "/" THEN 627 ELSE X(I, 2) = VAL(X$): I = I + 1: GOTO 625
627 PRINT : N(K) = N(K) + I - 1: F(K) = N(K) - N(K - 1): NEXT K: N = I - 1: GOTO 632
628 INPUT ; " ", X$: IF X$ = "" THEN L = 99: GOTO 630 ELSE FOR L = 1 TO LEN(X$): IF INSTR("-.0123456789/", MID$(X$, L, 1)) = 0 THEN L = 98: PLAY "L16O3CEL4>B"
629 NEXT L
630 IF L < 99 THEN RETURN ELSE BEEP: PRINT "  WHAT ?": RETURN
631 '  --- Show Data ---
632 IF N < 4 THEN PRINT "Sample size MUST be 4 or more!": GOSUB 5: GOTO 11
633 I = 1: IF QR = 0 THEN PRINT "Data read was---" ELSE PRINT "Revised data is---"
634 GOSUB 200: IF I MOD 20 = 0 THEN GOSUB 6
635 IF I < N THEN I = I + 1: GOTO 634
636 IF VN$ <> "Y" THEN PRINT "Variables not named." ELSE FOR J = 1 TO M: PRINT USING "Var##="; J; : PRINT VN$(J), : NEXT J: PRINT
637 GOSUB 5
638 '
639 '                   --- Commands ---
640 '
700 QB=3:CLOSE:CLS:PRINT TAB(26); "COMMAND MENU": LOCATE 4, 1, 0: PRINT "Indicate your requirements thus---":K = 12
701 PRINT TAB(K); "SA = Show all data": PRINT TAB(K); "C# = Change row #"
702 IF OP <> 2 THEN PRINT TAB(K); "D# = Delete row #": PRINT TAB(K); "I# = Insert row # (in Free Format)": PRINT TAB(K); "XR = Add extra rows (in Free Format)"
703 PRINT TAB(K); "T  = Transform variables": PRINT TAB(K); "R  = Regress (i.e. Compute now)": PRINT TAB(K); "Q  = Quit or Re-run": PRINT : LOCATE , , 1
704 PRINT "====> COMMAND (SA, C#, ";
705 IF OP <> 2 THEN PRINT "D#, I#, XR, ";
706 INPUT "T, R, Q) "; Z$: IF Z$ = "" THEN 704 ELSE PRINT : IF Z$ = "SA" OR Z$ = "sa" THEN 632 ELSE IF Z$ = "XR" OR Z$ = "xr" THEN 719
707 IF Z$ = "T" OR Z$ = "t" THEN GOSUB 250: GOTO 700 ELSE IF Z$ = "R" OR Z$ = "r" THEN 727 ELSE IF Z$ = "Q" OR Z$ = "q" THEN 10
708 L$ = CHR$(ASC(Z$) AND 95): I = VAL(MID$(Z$, 2)): IF I > 0 AND I <= N THEN IF L$ = "C" THEN 711 ELSE IF L$ = "D" OR L$ = "I" THEN 717
709 LOCATE CSRLIN - 1, 1: BEEP: PRINT "SILLY.": PRINT : GOTO 704
710 '   --- Change ---
711 QR = 1: GOSUB 200
712 PRINT "Change which variable # (1-"; MID$(STR$(M), 2); ")"; : INPUT Z$: J = VAL(Z$): IF J < 1 OR J > M THEN BEEP: GOTO 712
713 PRINT "Old value ="; X(I, J); TAB(28); "New value"; : INPUT Z$
714 FOR K = 1 TO LEN(Z$): IF INSTR("-.0123456789", MID$(Z$, K, 1)) THEN NEXT K: X(I, J) = VAL(Z$) ELSE PLAY "L16O3CEL4>B": PRINT "That contains a `non-numeric' entry.  Please re-do.": GOTO 713
715 PRINT "Revised Row"; STR$(I); ": "; : FOR J = 1 TO M: PRINT X(I, J); : NEXT J: PRINT : DO$ = "change that row again": GOSUB 20: IF Z$ = "Y" THEN 712 ELSE 700
716 '   --- Delete, Insert, or Add Extra Rows ---
717 IF OP = 2 THEN 723 ELSE GOSUB 43: IF L$ = "I" THEN 719
718 N = N - 1: FOR K = I TO N: FOR J = 1 TO M: X(K, J) = X(K + 1, J): NEXT: NEXT: GOSUB 44: GOTO 700
719 IF OP = 2 THEN 723 ELSE IF N = MXR THEN GOSUB 42: GOSUB 5: GOTO 700 ELSE IF Z$ = "XR" OR Z$ = "xr" THEN 722
720 QR = 1: N = N + 1: FOR K = N TO I + 1 STEP -1: FOR J = 1 TO M: X(K, J) = X(K - 1, J): NEXT: NEXT: LOCATE , 1
721 PRINT "Row"; STR$(I); : INPUT X$: GOSUB 50: GOSUB 44: GOTO 700
722 QR = 1: PRINT "You can append up to"; MXR - N; "extra rows (each with"; M; "variables)": N1 = N + 1: I = N1: N = 0: Q = 1: GOSUB 71: GOTO 700
723 PRINT "Sorry, but Deletes, Inserts & Additions are not programmed for repeated X's": GOSUB 5: GOTO 700
724 '
725 '                     --- Compute ---
726 '
727 GOSUB 43: DF = N - M: L = 2: Q = 3: E = 0.00001: XX = 0: XY = 0: FOR J = 1 TO M: A(J) = 0: SK(J) = 0: FOR K = J TO M: SS(J, K) = 0: NEXT K: NEXT J
728 FOR I = 1 TO N: XX = XX + X(I, 1) * X(I, 1): XY = XY + X(I, 1) * X(I, 2)
729 FOR J = 1 TO M: X = X(I, J) - X(1, J): A(J) = A(J) + X: SK(J) = SK(J) + X * X * X
730 FOR K = J TO M: Y = X(I, K) - X(1, K): SS(J, K) = SS(J, K) + X * Y: NEXT K: NEXT J: NEXT I
731 FOR J = 1 TO M: IF SS(J, J) < E THEN SK(J) = 0: GOTO 733
732 SK(J) = SK(J) - Q * SS(J, J) * A(J) / N + L * A(J) ^ Q / N ^ L: SK(J) = SK(J) / SQR(((SS(J, J) - A(J) ^ L / N) ^ Q) / N): IF ABS(SK(J)) < E THEN SK(J) = 0
733 FOR K = J TO M: SS(J, K) = SS(J, K) - A(J) / N * A(K): NEXT K: NEXT J
734 FOR J = 1 TO M: A(J) = A(J) / N + X(1, J): S(J) = SQR(SS(J, J) / (N - 1)): NEXT J: SK = SQR(6 * (N - L) / ((N + 1) * (N + Q))): IF OP = 3 THEN 929
735 B1 = SS(1, 2) / SS(1, 1): B0 = A(2) - B1 * A(1): R1 = SS(1, 2) / SQR(SS(1, 1) * SS(2, 2)): RG = B1 * SS(1, 2): IF OP = 1 THEN S1 = SS(2, 2) - RG: GOTO 738
736 DF = NG - 2: WG = 0: J = 1: FOR L = 1 TO NG: S1 = 0: S2 = 0: FOR I = J TO J + F(L) - 1: S1 = S1 + X(I, 2): S2 = S2 + X(I, 2) * X(I, 2): NEXT I: J = I: WG = WG + (S2 - S1 / F(L) * S1): NEXT L
737 BG = SS(2, 2) - WG: S1 = BG - RG: RS = SS(2, 2) - RG: FL$ = " ######.##": FS$ = " ###.#####": FI$ = " ###"
738 S2 = S1 / DF: S3 = SQR(S2): SB = SQR(S2 / SS(1, 1)): TB = B1 / SB: SA = SQR(S2 * (1 / N + A(1) * A(1) / SS(1, 1))): TA = B0 / SA: BO = XY / XX: SO = SQR(S2 / XX)
739 FOR I = 1 TO N: X(I, 4) = B0 + B1 * X(I, 1): X(I, 5) = (X(I, 2) - X(I, 4)) / S3: NEXT I
740 '               --- Answers ---
741 GOSUB 160: CLS : PRINT #2, TAB(37 - LEN(HD$) \ 2); HD$; CHR$(10)
742 IF VN$ > "" THEN I = 23 - LEN(VN$(1)): PRINT #2, SPACE$(19); VN$(1); SPACE$(I); VN$(2)
743 PRINT #2, SPACE$(20); "X"; SPACE$(22); "Y"
744 PRINT #2, "1st 3 Data    "; : PRINT #2, USING F2$; X(1, 1); : PRINT #2, SF$; USING F2$; X(1, 2): FOR I = 2 TO 3: PRINT #2, SF$; USING F2$; X(I, 1); : PRINT #2, SF$; USING F2$; X(I, 2): NEXT I
745 PRINT #2, "n"; SPACE$(29); USING "###"; N
746 PRINT #2, "Mean  "; S8$; USING F2$; A(1); : PRINT #2, SF$; USING F2$; A(2): PRINT #2, USING "S.D. (df=###) "; N - 1; : PRINT #2, USING F2$; S(1); : PRINT #2, SF$; USING F2$; S(2)
747 PRINT #2, "SS"; SPACE$(13); USING FE$; SS(1, 1); : PRINT #2, SPACE$(11); USING FE$; SS(2, 2): PRINT #2, "SP"; SPACE$(24); USING FE$; SS(1, 2)
748 PRINT #2, : PRINT #2, S$; S$; "COEFFICIENTS, all with df = "; DF: PRINT #2, "A ="; USING F4$; B0; : PRINT #2, S$; "S(A) ="; USING F4$; SA; : PRINT #2, S$; "t = "; USING F2$; TA
749 PRINT #2, "B ="; USING F4$; B1; : PRINT #2, S$; "S(B) ="; USING F4$; SB; : PRINT #2, S$; "t = "; USING F2$; TB
750 PRINT #2, "r ="; USING "+#####.####"; R1; : PRINT #2, S$; "S(Y.X) ="; USING "####.####"; S3; : PRINT #2, S$; "PREP = "; USING "#####%"; (S(2) - S3) / S(2) * 100
751 IF OP = 1 THEN PRINT #2, "B*="; USING F4$; BO; : PRINT #2, S$; "S(B*)="; USING F4$; SO; : PRINT #2, "  <--- these forced through origin."; CHR$(10)
752 IF OP = 2 THEN PRINT #2, USING "(For r, df =###)"; N - 2: GOSUB 5: GOTO 756
753 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 743
754 IF PR = 1 THEN PRINT #2, : PRINT #2, : GOSUB 160: GOTO 800
755 '               --- Anova Table ---
756 CLS
757 PRINT #2,:PRINT #2, SPACE$(16); "ANOVA OF GROUPED REGRESSION DATA": PRINT #2, STRING$(63, 45):PRINT #2, "   SOURCE"; SPACE$(11); "SS"; SPACE$(7); "df"; S$; "MS"; S$; "VARIANCE RATIO"; STRING$(63, 45): Z = BG: GOSUB 360
758 PRINT #2, "Betw Groups   "; USING F$ + "   " + FI$ + F$; BG; NG - 1; BG / (NG - 1);: PRINT #2, "    F(";MID$(STR$(NG-1),2);","; MID$(STR$(N-NG), 2); ") ="; USING "#####.##"; BG / (NG-1) /WG * (N-NG): Z = RG: GOSUB 360
759 PRINT #2, "Linear Regr   "; USING F$ + "   " + FI$ + F$; RG; 1; RG; : PRINT #2, "    F(1,"; MID$(STR$(DF), 2); ") ="; USING "#####.##"; RG / S1 * DF: Z = S1: GOSUB 360
760 PRINT #2, "Devs from Regr"; USING F$ + "   " + FI$ + F$; S1; DF; S1 / DF;
761 PRINT #2, "    F("; MID$(STR$(DF), 2); ","; MID$(STR$(N - NG), 2); ") ="; USING "#####.##"; S1 / DF / WG * (N - NG): Z = WG: GOSUB 360
762 PRINT #2, "Within Groups "; USING F$ + "   " + FI$ + F$; WG; N - NG; WG / (N - NG)
763 PRINT #2, STRING$(63, 45): Z = SS(2, 2): GOSUB 360
764 PRINT #2, "Total Y Var   "; USING F$ + "   " + FI$ + F$; SS(2, 2); N - 1; SS(2, 2) / (N - 1): PRINT #2, STRING$(63, 45): PRINT #2,: PRINT #2,
765 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 743
766 IF PR = 1 THEN GOSUB 160
767 '
768 '                --- Check Assumptions ---
769 '
800 CLS : PRINT TAB(22); "EXAMINING REGRESSION ASSUMPTIONS"; CHR$(10); CHR$(10); "   S = Show Data, Estimates, & Standardized Residuals."
801 PRINT "   L = Linearity."; CHR$(10); "   N = Normality & Outliers."; CHR$(10); "   H = Homoscedasticity."; CHR$(10); "   I = Independence."
802 IF OP = 1 THEN PRINT "   P = Predictive Equations for X"
803 PRINT "   Null Entry = No more assumption checks needed.": PRINT
804 PRINT "===> Option (S, L, N, H, I, "; : IF OP = 1 THEN INPUT "P, Null) "; R$ ELSE INPUT "Null) "; R$
805 IF R$ = "" THEN CLS : GOTO 700 ELSE R$ = CHR$(ASC(R$) AND 95): IF R$ = "S" THEN CLS : GOTO 808 ELSE IF R$ = "L" OR R$ = "H" THEN 849 ELSE IF R$ = "N" THEN 823 ELSE IF R$ = "I" THEN 842 ELSE IF (R$ = "P" AND OP = 1) THEN 815
806 PRINT "   WHAT ?": GOTO 804
807 '   --- Show Estimates ---
808 IF OP = 3 THEN 958 ELSE IF PR = 0 THEN F$ = "### " + F2$ + S4$ + F2$ + S4$ + F2$ + S4$ + F2$
809 PRINT #2, " #"; S8$; "X"; S$; S$; "Y"; S9$; "EST(Y)"; S4$; " STAND.RESID": FOR I = 1 TO N: PRINT #2, USING F$; I; X(I, 1); X(I, 2); X(I, 4); X(I, 5)
810 IF PR = 1 THEN 811 ELSE IF I MOD 20 = 0 THEN GOSUB 5
811 NEXT I:PRINT #2,
812 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 809
813 IF PR = 1 THEN GOSUB 160: GOTO 800
814 '   --- Predictive Equations ---
815 BX = SS(1, 2) / SS(2, 2): AX = A(1) - BX * A(2)
816 PRINT #2, : PRINT #2,
817 PRINT #2, "If Fixed X's (Model I), X can be predicted using:"
818 PRINT #2, USING "      A =" + F4$ + S8$ + "B =" + F4$; -B0 / B1; 1 / B1
819 PRINT #2, : PRINT #2, "If Random X's (Model II), X can be predicted using:": PRINT #2, USING "      A =" + F4$ + S8$ + "B =" + F4$ + CHR$(10); AX; BX
820 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 816
821 IF PR = 1 THEN GOSUB 160: GOTO 800
822 '   --- Histogram of Residuals ---
823 S = X(1, 5): G = S: FOR L = 1 TO 14: N(L) = 0: NEXT L
824 FOR I = 1 TO N: L = INT(2 * (X(I, 5) + 3.5) + 1): IF L < 1 THEN L = 1 ELSE IF L > 14 THEN L = 14
825 N(L) = N(L) + 1: IF X(I, 5) < S THEN S = X(I, 5) ELSE IF X(I, 5) > G THEN G = X(I, 5)
826 NEXT I: CLS
827 PRINT #2, "HISTOGRAM, STANDARDIZED RESIDUALS (EXP=Expected if Population Normal)"
828 PRINT #2, "EXP OBS    Z   "; : FOR K = 0 TO 4: PRINT #2, RIGHT$(STR$(K), 1); "----+----"; : NEXT K: PRINT #2, USING "#"; 5: F0$ = FA$
829 ZL = -3: FOR L = 1 TO 14: NE = INT(PE(L) * N + P5): PRINT #2, USING F0$; NE; N(L); ZL;
830 IF N(L) = 0 THEN 831 ELSE IF N(L) < 50 THEN PRINT #2, STRING$(N(L), 42); : GOTO 831 ELSE PRINT #2, STRING$(45, 42); "===>";
831 IF L < 14 THEN PRINT #2, : IF L < 13 THEN ZL = ZL + P5 ELSE ZL = 3: F0$ = FB$
832 NEXT L
833 PRINT #2, : PRINT #2,
834 PRINT #2, USING "--- TESTS FOR OUTLIERS, With n =#### ---"; N
835 PRINT #2, "Thompson & Grubbs' Test    (Tables: `Technometrics', 1969, p 4, for n = 3-100)."
836 PRINT #2, USING "    Min Residual =####.##     T =####.##"; S * S3; S
837 PRINT #2, USING "    Max Residual =####.##     T =####.##"; G * S3; G
838 PRINT #2, USING "Range/SD Ratio   =####.##  (Tables: BTS 29c, for n = 3-1000)."; G - S
839 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 827
840 IF PR = 1 THEN PRINT #2, : GOSUB 160: GOTO 800
841 '   --- Durbin-Watson & Runs Test
842 GOSUB 43: DW = 0: KP = 0: KN = 0: RU = 0: L = 3 + (OP < 3)
843 FOR I = 1 TO N: IF X(I, 5) > 0 THEN KP = KP + 1 ELSE KN = KN + 1
844 IF I > 1 THEN DW = DW + (X(I, L) - X(I, 4) - X(I - 1, L) + X(I - 1, 4)) ^ 2: K1 = SGN(X(I - 1, 5)): K2 = SGN(X(I, 5)): IF K1 + K2 = 0 THEN RU = RU + 1
845 NEXT I
846 DW = DW / S1: AZ = (2 - DW) / SQR(4 / N): IF KP < KN THEN N1 = KP ELSE N1 = KN
847 N2 = N - N1: RU = RU + 1: IF N1 <= 20 AND N2 <= 20 THEN 850 ELSE E = 2 * N1 * N2 / N + 1: C = SGN(RU - E) * 0.5: ZR = -(RU - E - C) / SQR((2 * N1 * N2 * (2 * N1 * N2 - N)) / (N * N * (N - 1))): GOTO 850
848 '   --- Scattergrams ---
849 GOSUB 43
850 QS = 1: NBR = 1: NN = N: VN$(0) = " OBS #  ": VN$(4) = " EST(Y) ": VN$(5) = "ST RESID"
851 IF VN$ <> "Y" THEN VN$(M) = " Y      ": IF OP < 3 THEN VN$(1) = " X      " ELSE VN$(1) = " X1     ": VN$(2) = " X2     "
852 IF R$ = "I" THEN J = 1: K = 5: IF X(1, 0) = 1 THEN 854 ELSE FOR I = 1 TO 40: X(I, 0) = I: NEXT I: GOTO 854
853 IF R$ = "H" THEN J = 4: K = 5 ELSE IF R$ = "L" THEN IF OP < 3 THEN J = 1: K = 2 ELSE J = 1: K = 3
854 L = J: GOSUB 290: IF QE = 9 THEN QE = 0: GOTO 800
855 IF PR = 0 THEN CLS
856 PRINT #2, SC$; " "; : IF R$ = "L" AND OP < 3 THEN PRINT #2, USING "  Skew(X)=+##.##   Skew(Y)=+##.##   SE(Skew)=##.##"; SK(1); SK(2); SK
857 IF R$ = "H" THEN PRINT #2, "for Homoscedasticity:" ELSE IF R$ = "I" THEN PRINT #2, "#"; NBR; "for Independence of Residuals:"
858 PRINT #2,
859 GOSUB 314    'Show/Print Scat
860 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 862 ELSE GOSUB 165: GOTO 854
861 IF PR = 1 THEN PRINT #2, : PRINT #2, : GOSUB 160
862 IF R$ = "H" OR R$ = "L" AND OP < 3 THEN 800 ELSE GOSUB 43: NBR = NBR + 1
863 IF R$ = "L" THEN IF NBR = 2 THEN J = 2: K = 3: GOTO 854 ELSE IF NBR = 3 THEN J = 1: K = 2: GOTO 854 ELSE 800
864 IF OP < 3 THEN IF NBR = 2 THEN J = 0: K = 5: N = -(NN < 41) * NN - (40 < NN) * 40: GOTO 854 ELSE N = NN: GOTO 867
865 IF NBR = 2 THEN J = 2: K = 5: GOTO 854 ELSE IF NBR = 3 THEN J = 0: K = 5: N = -(NN < 41) * NN - (40 < NN) * 40: GOTO 854 ELSE N = NN
866 '   --- Serial Correlation
867 CLS
868 PRINT #2, "TESTS FOR SERIAL CORRELATION OF RESIDUALS:": PRINT #2, USING "     Durbin ! Watson's d = ###.##"; "&"; DW: PRINT #2, USING "     Approximate Z value = ###.##"; AZ
869 PRINT #2, "     Tables: `Biometrika', 1951, p 173-175, for n = 15-100."
870 PRINT #2, : PRINT #2, "RUNS TEST ON SIGNS OF RESIDUALS:"
871 PRINT #2, USING "N1 =####     N2 =####     Runs =####"; N1; N2; RU;
872 IF N1 > 20 OR N2 > 20 THEN PRINT #2, USING "     Z =###.##"; ZR: PRINT #2, :  ELSE PRINT "      Tables: LANGLEY's PRACTICAL STATISTICS, p 325.": PRINT #2,
873 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 868
874 IF PR = 1 THEN GOSUB 160: GOTO 800
875 '
876 '                    --- 2 Predictors ---
877 '
900 HD$ = HD$(0) + HD$(3): VER$ = "(RL,3)": NEEDVARS = 3: M = 3
901 CLS : GOSUB 340: PRINT DAT$; TAB(40 - LEN(HD$) \ 2); : COLOR 0, 7: PRINT " "; HD$; " "; : COLOR 7, 0: PRINT TAB(73); VER$: LOCATE 4, 1, 0: K = 12
902 PRINT TAB(K); "╔═══════════════════════════════════════════════════════╗"
903 PRINT TAB(K); "║                                                       ║"
904 PRINT TAB(K); "║ Given 4-400 rows of triple measurements, X1, X2, & Y, ║"
905 PRINT TAB(K); "║     in free format, each row coming from a sampled    ║"
906 PRINT TAB(K); "║   person or object, this computes a linear function:  ║"
907 PRINT TAB(K); "║                Y' = A + B1.X1 + B2.X2                 ║"
908 PRINT TAB(K); "║    which will estimate the most likely value of the   ║"
909 PRINT TAB(K); "║ criterion Y for any pair of predictor values X1 & X2. ║"
910 PRINT TAB(K); "║ Note: Y must be the last measurement in each triplet. ║"
911 PRINT TAB(K); "║      ---            ----------------                  ║"
912 PRINT TAB(K); "║        Data can be from keyboard or disk file.        ║"
913 PRINT TAB(K); "║   In either case, data can be edited or transformed.  ║"
914 PRINT TAB(K); "║        Underlying assumptions can be checked.         ║"
915 PRINT TAB(K); "║     Printouts can be done after viewing answers.      ║"
916 PRINT TAB(K); "║        If trouble, try <Ctrl-Break> & GOTO 9.         ║"
917 PRINT TAB(K); "║                                                       ║"
918 PRINT TAB(K); "╚═══════════════════════════════════════════════════════╝": LOCATE , , 1
919 '   --- Get Data ---
920 DO$ = "enter data from disk": GOSUB 20: PRINT : IF Z$ = "N" THEN 924
921 '   --- Disk Entry ---
922 MNR = 4: MNC = 3: NEEDVARS = 3: GOSUB 80: GOTO 632
923 '   --- K/b Entry
924 M = 3: CLS : PRINT "Enter 4-"; MID$(STR$(MXR), 2); " rows of X1, X2, Y values, in Free Format.": PRINT "Start each row of 3 values on a new line.  Enter `/' as the end-of-data signal."
925 I = I + 1: IF I > MXR THEN 632
926 PRINT "#"; STR$(I); : INPUT X$: K = 0: IF RIGHT$(X$, 1) = "/" THEN X$ = LEFT$(X$, LEN(X$) - 1): N = I + (LEN(X$) = 0): IF X$ = "" THEN 632 ELSE GOSUB 50: GOTO 632
927 GOSUB 50: GOTO 925
928 '   --- Compute ---
929 IF SS(1, 1) <= 0 OR SS(2, 2) <= 0 THEN 931
930 FOR J = 3 TO 2 STEP -1: FOR K = J - 1 TO 1 STEP -1: SS(J, K) = SS(K, J) / SQR(SS(K, K) * SS(J, J)): NEXT K: NEXT J: DET = 1 - SS(2, 1) * SS(2, 1): IF DET > 0 THEN 932
931 PRINT "===>>> PREDICTOR MATRIX IS SINGULAR, SO CAN'T BE SOLVED.": GOSUB 5: GOTO 900
932 BETA = (SS(3, 1) - SS(3, 2) * SS(2, 1)) / DET: BFTA = (SS(3, 2) - SS(3, 1) * SS(2, 1)) / DET: B1 = BETA * SQR(SS(3, 3) / SS(1, 1)): B2 = BFTA * SQR(SS(3, 3) / SS(2, 2))
933 B0 = A(3) - B1 * A(1) - B2 * A(2): R2 = BETA * SS(3, 1) + BFTA * SS(3, 2): F = R2 * DF / 2 / (1 - R2): S = (1 - R2) / DF / DET
934 FOR J = 1 TO 2: SB(J) = SQR(S * SS(3, 3) / SS(J, J)): NEXT J: S1 = SS(3, 3) - B1 * SS(1, 3) - B2 * SS(2, 3): S2 = S1 / DF: S3 = SQR(S2): IF R2 > 0 THEN R1 = SQR(R2) ELSE R1 = 0
935 FOR I = 1 TO N: X(I, 4) = B0 + B1 * X(I, 1) + B2 * X(I, 2): X(I, 5) = (X(I, 3) - X(I, 4)) / S3: NEXT I: CLS
936 '   --- Show/Print Results
937 GOSUB 160:CLS:PRINT #2, TAB(37 - LEN(HD$) \ 2); HD$; CHR$(10)
938 IF VN$ > "" THEN I = 18 - LEN(VN$(1)): J = 18 - LEN(VN$(2)): PRINT #2, SPACE$(19); VN$(1); SPACE$(I); VN$(2); SPACE$(J); VN$(3)
939 PRINT #2, SPACE$(19); "X1"; SPACE$(16); "X2"; SPACE$(17); "Y"
940 PRINT #2, "1st 3 Data    "; : PRINT #2, USING F2$; X(1, 1); : PRINT #2, S9$; USING F2$; X(1, 2); : PRINT #2, S9$; USING F2$; X(1, 3)
941 FOR I = 2 TO 3: PRINT #2, SF$; USING F2$; X(I, 1); : PRINT #2, S9$; USING F2$; X(I, 2); : PRINT #2, S9$; USING F2$; X(I, 3)
942 NEXT I
943 PRINT #2, "n"; SPACE$(25); USING "###"; N: PRINT #2, "Mean "; S9$; USING F2$; A(1); : PRINT #2, S9$; USING F2$; A(2); : PRINT #2, S9$; USING F2$; A(3)
944 PRINT #2, USING "S.D. (df=###) "; N - 1; : PRINT #2, USING F2$; S(1); : PRINT #2, S9$; USING F2$; S(2); : PRINT #2, S9$; USING F2$; S(3)
945 PRINT #2, USING "Skew (SE=#.##)"; SK; : PRINT #2, USING F2$; SK(1); : PRINT #2, S9$; USING F2$; SK(2); : PRINT #2, S9$; USING F2$; SK(3)
946 PRINT #2, : PRINT #2, "SSCP"; S$; "X1   "; USING FE$; SS(1, 1); : PRINT #2, S$; USING FE$; SS(1, 2); : PRINT #2, S$; USING FE$; SS(1, 3)
947 PRINT #2, " &  "; S$; "X2"; USING "  +#.####"; SS(2, 1); : PRINT #2, SPACE$(12); USING FE$; SS(2, 2); : PRINT #2, S$; USING FE$; SS(2, 3)
948 PRINT #2, "RMAT"; S$; "Y"; USING "   +#.####"; SS(3, 1); : PRINT #2, SPACE$(11); USING "+#.####"; SS(3, 2); : PRINT #2, SPACE$(12); USING FE$; SS(3, 3)
949 PRINT #2, : PRINT #2, "Determinant of Predictor RMAT = "; USING "#.####^^^^"; DET: PRINT #2, : PRINT #2, : IF PR = 0 THEN GOSUB 5: CLS
950 PRINT #2, S8$; S8$; "COEFFICIENTS, all with df ="; DF: PRINT #2, : PRINT #2, "Beta 1 ="; USING F4$; BETA: PRINT #2, "Beta 2 ="; USING F4$; BFTA
951 PRINT #2, : PRINT #2, "A  = "; USING F4$; B0: PRINT #2, "B1 = "; USING F4$; B1; : PRINT #2, S$; "S(B1) ="; USING F4$; SB(1); : PRINT #2, S$; "t ="; USING F2$; B1 / SB(1)
952 PRINT #2, "B2 = "; USING F4$; B2; : PRINT #2, S$; "S(B2) ="; USING F4$; SB(2); : PRINT #2, S$; "t ="; USING F2$; B2 / SB(2)
953 PRINT #2, : PRINT #2, "Mult R ="; USING "###.####"; R1; : PRINT #2, S$; "Mult Rsq ="; USING "###.####"; R2; : PRINT #2, S$; "F(2,"; MID$(STR$(DF), 2); ") ="; : PRINT #2, USING "####.##"; F
954 PRINT #2, "S.E. of Residuals, S(Y.12) = "; USING F4$; S3: PRINT #2,
955 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 938
956 IF PR = 1 THEN GOSUB 160: GOTO 800
957 '   --- Show Estimates ---
958 IF PR = 0 THEN F$ = "### " + F2$ + S3$ + F2$ + S3$ + F2$ + S3$ + F2$ + S3$ + F2$
959 PRINT #2, " #"; S$; " X1"; S9$; " X2"; S9$; "  Y"; S8$; "EST(Y)"; S4$; "STAND.RESID"
960 FOR I = 1 TO N: PRINT #2, USING F$; I; X(I, 1); X(I, 2); X(I, 3); X(I, 4); X(I, 5): IF PR = 0 AND I < N THEN IF I MOD 20 = 0 THEN GOSUB 5
961 NEXT I
962 IF PR = 0 THEN GOSUB 161: IF PR = 0 THEN 800 ELSE GOSUB 165: GOTO 959
963 GOSUB 160: GOTO 800
964 'End of file.
```

## REMAK.BAS

```bas
1 '          REMAKE U.T.M.  ---  REMAK.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 405,177,425 :STOP  '=start,printout,etc - CLOSE (exc 177)◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN LINE INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN LINE INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
41 BEEP:PRINT "---> Sorry, double quotes are not allowed here.":RETURN
42 BEEP:PRINT"* * * Can't Do That.":QB=4:GOTO 9
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M, NU(0), & UT>0.
50 K=1:L=M:IF UT>0 THEN L=M-I+1
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF NU(0) THEN NU(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
79 '◙*** Disk Input of X(I,J), N, M, etc ***◙    Needs MNR, MNC, & ZZ$="UTOK" since UT is acceptable.
80 IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by a program of this package.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 THEN IF ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:PRINT"The matrix was computed from"UT"rows of measurements.":PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 GOSUB 5
99 '   Now read numerical data from disk
100 COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0
101 FOR I=1 TO N:FOR J=I TO M:INPUT #1,X(I,J):X(J,I)=X(I,J):NEXT J:NEXT I 'reads UTM & fills it out.
102 CLOSE:LOCATE,1:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 30
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙--- Open File, IO$= "I" or "O" ---
130 IF IO$="I" THEN 134 ELSE ON ERROR GOTO 132:OPEN DR$+FL$ FOR INPUT AS #1
131 CLOSE:DO$="<OVERWRITE> existing "+FL$:GOSUB 20:IF Z$="N" THEN 110 ELSE 133
132 RESUME 133  'OK to start new file, since FL$ not present.
133 ON ERROR GOTO 30:OPEN DR$+FL$ FOR OUTPUT AS #1:RETURN  'print #1,Q$A$Q$Q$B$Q$:close
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5
138 DIM X(MXR,MXC):GOTO 110
139 '◙--- Save data U.T.M. using Z(I,J) ---
140 IF ID$="" THEN LINE INPUT"Problem ID? ";ID$:GOTO 142
141 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
142 Q$=CHR$(34):IO$="O":GOSUB 110
143 PRINT "Saving data on disk ..... ";:PRINT #1,Q$FL$Q$Q$VER$Q$:PRINT #1,Q$DAT$Q$Q$ID$Q$;N;M;UT;Q$VN$Q$
144 IF VN$="Y" THEN FOR J=1 TO M:PRINT #1,Q$;VN$(NU(J));Q$;:NEXT J:PRINT #1,""
145 FOR I=1 TO N
146 FOR J=I TO M:PRINT #1,Z(I,J);:NEXT J:NEXT I:CLOSE:PRINT "done."
147 DO$="backup this file under the name "+FL$:GOSUB 20:IF Z$="Y" THEN GOSUB 115:GOTO 143 ELSE RETURN
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR L=1 TO M:IF L<10 THEN VN$(L)="Var #"+STR$(L) ELSE VN$(L)="Var #"+MID$(STR$(L),2)
211 NEXT L:RETURN
219 '◙--- Show full MxM Matrix Z(I,J) in format FMT$ ---
220 FMT$="######.#####":S12$=SPACE$(12):Z$=S12$
221 FOR K=1 TO M STEP 5:IF M<K+5 THEN L=M ELSE L=K+4
222 PRINT #2,:PRINT #2,S12$;:FOR J=K TO L:RSET Z$=VN$(NU(J)):PRINT #2,Z$;:NEXT J:PRINT #2,
223 FOR I=1 TO M:LSET Z$=VN$(NU(I)):PRINT #2,Z$;:FOR J=K TO L:PRINT #2,USING FMT$;Z(I,J);:NEXT J:PRINT #2,:NEXT I:PRINT #2,:IF L MOD 5=0 THEN GOSUB 5
224 NEXT K:RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXR=20:MNR=2:MXC=20:MNC=2
402 DEF FNSTRIP$(Z$)=LEFT$(Z$+"  ",INSTR(Z$+"  ","  ")-1)
403 DIM X(MXC,MXC),Z(MXC,MXC),NU(MXC),VN$(MXC)
404 HD$="  REMAKE  UPPER  TRIANGULAR  MATRIX  ":VER$="(RL,2)"
405 QB=1:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
406 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
407 PRINT TAB(K)"║                                                       ║"
408 PRINT TAB(K)"║    This program reads any Upper Triangular Matrix     ║"
409 PRINT TAB(K)"║    (e.g. RMAT) filed by a program of this package,    ║"
410 PRINT TAB(K)"║    based on 2-20 variables, and then lets you ---     ║"
411 PRINT TAB(K)"║        (1)  Delete variables,  &/or                   ║"
412 PRINT TAB(K)"║        (2)  Change the sequence of variables.         ║"
413 PRINT TAB(K)"║    You can then file the revised version under the    ║"
414 PRINT TAB(K)"║    same or a different filename.                      ║"
415 PRINT TAB(K)"║                                                       ║"
416 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
417 PRINT TAB(K)"║                                                       ║"
418 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1
419 DO$="proceed":GOSUB 20:IF Z$="N" THEN 30
420 '◙--- Get & keep original full Data Matrix, X(I,J) ---
421 IO$="I":ZZ$="UTOK":GOSUB 80
422 '◙--- Prepare Varnames ---
423 IF VN$="N" THEN FOR J=1 TO M:VN$(J)="Var #"+STR$(J):NEXT J
424 FOR J=1 TO M:VN$(J)=FNSTRIP$(VN$(J)):NEXT J
425 QB=1:CLOSE:FOR J=1 TO M:NU(J)=J:NEXT J
426 '◙--- Copy, fill out, & show original data in Z(I,J) ---
427 FOR I=1 TO M:FOR J=I TO M:Z(I,J)=X(I,J):Z(J,I)=Z(I,J):NEXT J:NEXT I
428 CLS:PRINT"Here is the full data matrix that was read:":GOSUB 160:GOSUB 220:PRINT
429 '◙--- Get New Requirements, new M & NU(J) ---
430 QB=3:MM=M   'MM = original M.
431 PRINT "How many variables do you want in the new matrix (2-";MID$(STR$(MM),2);") ";:INPUT M:IF M<MNC OR M>MM THEN BEEP:GOSUB 431
432 PRINT"Now enter the required NEW SEQUENCE of"M"variable numbers, in Free Format:"
433 LINE INPUT X$:NU(0)=UT:UT=0:I=1:GOSUB 50:UT=NU(0)  'Returns new NU(J)'s.
434 '◙--- Test validity of sequence numbers ---
435 FOR J=1 TO M:IF NU(J)<1 OR NU(J)>MM THEN PRINT"Value #"J"is out-of-bounds.  Please try again.":ER=1:J=M
436 IF J=M THEN 439
437 FOR K=J+1 TO M:IF NU(J)=NU(K) THEN PRINT"Value #"J" is duplicated.  Please try again.":ER=1:J=M:K=M
438 NEXT K
439 NEXT J:IF ER=1 THEN ER=0:BEEP:GOTO 433
440 '◙--- Rearrange Original Matrix X(I,J) into New Matrix Z(I,J) ---
441 FOR I=1 TO M:FOR J=I TO M
442 Z(I,J)=X(NU(I),NU(J)):Z(J,I)=Z(I,J)
443 NEXT J:NEXT I
444 '◙--- Show Rearranged Matrix ---
445 PRINT:PRINT"New matrix is:":GOSUB 220
446 PRINT"Is that what you want";:GOSUB 21:IF Z$="N" THEN M=MM:GOTO 425
447 '◙--- Printout? ---
448 DO$="print this new matrix":GOSUB 20:IF Z$="N" THEN 451
449 GOSUB 162:GOSUB 165:GOSUB 220:GOSUB 160
450 '◙--- File it now ---
451 PRINT"I'm now ready to file your revised matrix as an Upper Triangular Matrix.":GOSUB 140:GOTO 10
452 'end
```

## TABDOC.BAS

```bas
1 '         TABULATION DOC  ---  TABDOC.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙*** Press Key ***
5 IN$=INKEY$:IF IN$="" THEN 5 ELSE IN$=CHR$(ASC(IN$) AND 95):IF INSTR("LMNS",IN$) THEN RETURN ELSE 5
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
399 '◙--- Start ---
400 KEY OFF:SCREEN 0,0,0,0:WIDTH 80:HD$="  TABULATING  QUESTIONNAIRE  DATA  ":VER$="(RL,2)":Q$=CHR$(34)
401 CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,,0,0:K=10
402 PRINT TAB(K)"╔══════════════════════════════════════════════════════════╗"
403 PRINT TAB(K)"║                                                          ║"
404 PRINT TAB(K)"║    This program tallies questionnaire responses into     ║"
405 PRINT TAB(K)"║      1-way frequency &/or 2-way contingency tables.      ║"
406 PRINT TAB(K)"║                                                          ║"
407 PRINT TAB(K)"║      Max responses (persons x questions) = 20,000.       ║"
408 PRINT TAB(K)"║                                                          ║"
409 PRINT TAB(K)"║    Responses to questions must be single digits, 1-9,    ║"
410 PRINT TAB(K)"║             with 0 entered for `no answer'.              ║"
411 PRINT TAB(K)"║                                                          ║"
412 PRINT TAB(K)"║ Persons can be optionally identified by 1-10 characters. ║"
413 PRINT TAB(K)"║                                                          ║"
414 PRINT TAB(K)"║   2-way tables need questions named by 1-10 characters.  ║"
415 PRINT TAB(K)"║                                                          ║"
416 PRINT TAB(K)"║ A feature of the program is the easy interactive way of  ║"
417 PRINT TAB(K)"║        getting any number of cross-tabulations.          ║"
418 PRINT TAB(K)"║                                                          ║"
419 PRINT TAB(K)"╚══════════════════════════════════════════════════════════╝":LOCATE 24,1,,7,7
420 COLOR 14,0:PRINT"Press N for next page, Shift_Prtsc to print this page, or M for Menu. ";:COLOR 7,0
421 GOSUB 5:IF IN$="N" THEN 423 ELSE IF IN$="M" THEN RUN"MENU" ELSE 421
422 '◙                        --- Page 2 ---
423 CLS:COLOR 14,0:PRINT TAB(5)HD$TAB(65)"Page 2":COLOR 7,0:PRINT
424 PRINT"This program requires a special way of entering your data."
425 PRINT"It must NOT be entered into our `Data Filer & Editor' program, but each person's";
426 PRINT"data is put in a BASIC DATA statement, starting like this with AUTO 1000,1 :"
427 PRINT"     1000 REM  ---example data, 7 questions ---"
428 PRINT"     1001 DATA Smith,1233197           < Responses can be packed or not."
429 PRINT"     1002 DATA P Jones, 264 451 1      < Spaces are ignored among responses."
430 PRINT"     1003 DATA #009, 1 1 5 4 0 0 0     < 0 must be used for each `no answer'."
431 PRINT"     1004 DATA ,10345   27             < ID can be null but comma is essential."
432 PRINT"     1005 DATA   END                   < End-signal must be in CAPS."
433 PRINT"     <Ctrl-Break> here to escape from Auto mode.":PRINT
434 PRINT"2-WAY TABLES also need a Label, comma, & number of choices for each question,"
435 PRINT"so to do cross-tabs in the above case, replace line 1005 and proceed thus:"
436 PRINT"     1005 DATA LABELS                  < Says Labels follow (in CAPS)."
437 PRINT"     1006 DATA Sex,2                   < Sex has 2 valid responses (1 & 2)."
438 PRINT"     1007 DATA Age Group,7             < Question 2 is Age, coded 1 to 7."
439 PRINT"     1008 DATA Q3,9                    < Question 3 has 9 options."
440 PRINT"     :    etc"
441 PRINT"     1013 DATA END                     < Only LABELS & END have no comma!"
442 PRINT"     <Ctrl-Break> here to escape from Auto mode.":LOCATE 24,1
443 COLOR 14,0:PRINT"Press N for next page, L for last page, Shift_Prtsc to print, or M for Menu. ";:COLOR 7,0
444 GOSUB 5:IF IN$="N" THEN 446 ELSE IF IN$="L" THEN 401 ELSE IF IN$="M" THEN RUN"MENU" ELSE 444
445 '◙                        --- Page 3 ---
446 CLS:COLOR 15,0:PRINT TAB(5)HD$TAB(65)"Page 3":COLOR 7,0:LOCATE 5,1
447 PRINT"You can check and edit the datafile that you've created by using the inbuilt"
448 PRINT"BASIC facilities:  LIST &  EDIT.":PRINT:PRINT
449 PRINT"When the datafile is ok, SAVE it in Ascii format, like this:":PRINT
450 PRINT"     SAVE "Q$"A:name.ASC"Q$",A       or      SAVE "Q$"B:name.ASC"Q$",A":PRINT
451 PRINT"with `name' replaced by a filename of your choice.":PRINT:PRINT
452 PRINT"Finally, run the main MENU program again, and call up the Tabulating program."
453 PRINT"Reply to its first question by asking it to MERGE with your special datafile."
454 PRINT"This will then be done automatically, and you will be reminded to enter the"
455 PRINT"command `RUN' to execute the program.  That's all!":LOCATE 24,1
456 COLOR 14,0:PRINT"L for last page, Shift_Prtsc to print, M for Menu, or S to start making file now";:COLOR 7,0
457 GOSUB 5:IF IN$="L" THEN 423 ELSE IF IN$="M" THEN RUN "MENU.BAS" ELSE IF IN$="S" THEN NEW ELSE 457
458 END
```

## TABLE.BAS

```bas
1 '           TABULATION  ---  TABLE.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE ,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:PR=1:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 400,177,500,30 '=start,printout,menu,quit.◙*** Finish up ***
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 GOTO 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
39 ON ERROR GOTO 0:END'◙◙*** Messages ***
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
109 '◙*** Get Filespec ***
111 LINE INPUT "Filename (I will add .ASC extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".ASC" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File if poss ***
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1
135 ON ERROR GOTO 30:CLOSE:RETURN 'it exists
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:SHELL "DIR "+DR$+"/W":GOSUB 5:GOTO 111
159 '◙--- Show/Print Answers ---
160 QB=3:PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
193 PR=0:PRINT #2,:CLOSE:RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 HD$="  TABULATING  QUESTIONNAIRE  DATA  ":VER$="(RL,2)"
402 QB=4:CLOSE:CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1
403 READ Z$:IF Z$="<end>" THEN K=12 ELSE 421
404 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
405 PRINT TAB(K)"║                                                       ║"
406 PRINT TAB(K)"║   This program tallies questionnaire responses into   ║"
407 PRINT TAB(K)"║     1-way frequency &/or 2-way contingency tables.    ║"
408 PRINT TAB(K)"║                                                       ║"
409 PRINT TAB(K)"║        The questionnaire data will only be read       ║"
410 PRINT TAB(K)"║             from a special kind of datafile.          ║"
411 PRINT TAB(K)"║                                                       ║"
412 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
413 PRINT TAB(K)"║                                                       ║"
414 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE 17,1,1
415 INPUT"Do you want Instructions, or to Merge a datafile (I or M)";Z$:IF Z$>"" THEN Z$=CHR$(ASC(Z$) AND 95):IF Z$="I" THEN RUN"TABDOC.BAS" ELSE IF Z$="M" THEN 418
416 GOTO 415
417 '◙--- Get filespec & Merge ---
418 QB=1:PRINT:GOSUB 111
419 PRINT:PRINT"Ok, merging......    When `Ok' appears, enter `RUN'.":MERGE DR$+FL$
420 '◙--- Restart with Datafile ---
421 DEFINT A-Z:MAX=20000
422 INPUT"Allow for how many persons";MP:INPUT"◙Allow for how many questions";MQ:IF MP*MQ>MAX THEN PRINT"Sorry, but that exceeds present capacity of"MAX"responses.":PRINT:GOTO 422
423 DIM I,J,K,M,N,Q,CK,NQ,ROW,COL,A(MP,MQ),F(10,10),ID$(MP),LAB$(MQ),NO(MQ),HD$(11)
424 S$=" ":EN$="END":LAB$="LABELS":F$=" ### ":TANS$="Tallying Answers of Person #":MM$="   Return to Main Menu.◙":ER$=CHR$(10)+"=====> ERROR."
425 FOR I=1 TO 9:HD$(I)=" ("+MID$(STR$(I),2)+") ":NEXT I:HD$(10)="NoAns":HD$(11)=" Sums"
426 PRINT"◙Choose type of tabulation:◙"TAB(12)"1   1-way frequency table.◙"TAB(12)"2   Both 1-way &/or 2-way tables."
427 INPUT "Which (1 or 2)";KIND:IF KIND<1 OR KIND>2 THEN 427
428 '◙--- Read Data ---
429 RESTORE:I=0:N=0
430 I=I+1:READ ID$(I):IF ID$(I)=EN$ THEN 439 ELSE IF ID$(I)=LAB$ THEN 440
431 LOCATE 16,1:PRINT"Reading Data of Person #"I:READ Z$:IF Z$="" THEN 441 ELSE Q=0:CK=0
432 FOR J=1 TO LEN(Z$):IF MID$(Z$,J,1)=S$ THEN 434 ELSE Q=Q+1:IF Q>MQ THEN 438 ELSE Q$=MID$(Z$,J,1):IF INSTR("0123456789",Q$)=0 THEN 437
433 A(I,Q)=VAL(Q$):IF I>1 THEN CK=CK+1
434 NEXT J:IF I=1 THEN NQ=Q ELSE IF CK<>NQ THEN 441
435 IF I<MP THEN 430 ELSE N=MP:READ Z$:IF Z$=EN$ THEN 439 ELSE IF Z$=LAB$ THEN 440 ELSE 442
436 '◙--- Checks & N ---
437 PRINT ER$:PRINT"Row"I"of datafile contains an invalid character.":GOTO 443
438 PRINT ER$:PRINT"Person #"I"has more than"MQ"questions!":GOTO 443
439 IF KIND=2 THEN PRINT ER$:PRINT"`LABELS' missing and needed for 2-way tables.":GOTO 443
440 N=-(N=0)*(I-1)-(N=MP)*MP:IF KIND=1 THEN 500 ELSE 445
441 PRINT ER$:PRINT"Number of answers from Person #"I"differs from Person #1.":GOTO 443
442 PRINT"Data statement with `END' or `LABELS' not found after"MP"persons."
443 PRINT"Please correct this by editing & re-saving your datafile!":END
444 '◙--- Read Labels ---
445 FOR J=1 TO NQ:LOCATE 18,1:PRINT"Reading Label #"J:READ LAB$(J):IF LAB$(J)=EN$ THEN 450 ELSE IF LAB$(J)="" THEN 448
446 READ NO(J):IF NO(J)>1 AND NO(J)<10 THEN NEXT J:READ Z$:IF Z$=EN$ THEN 500 ELSE 449
447 PRINT"Question"J"has "NO(J)" options.  It MUST have 2 to 9 options.":GOTO 443
448 PRINT"Question"J"has NO LABEL!":GOTO 443
449 PRINT ER$:PRINT"Too many entries in LABEL list!":GOTO 443
450 PRINT ER$:PRINT"Not enough entries in LABEL list!":GOTO 443
499 '◙--- Menu ---
500 QB=3:PR=0:CLOSE:CLS:PRINT TAB(30)"M E N U◙"TAB(29)STRING$(9,45)"◙"
501 PRINT"◙"TAB(26)"1   Show Data◙"TAB(26)"2   Print Data◙"TAB(26)"3   Tally & Show 1-Way Table";
502 IF KIND=1 THEN PRINT"◙"TAB(26)"4"MM$:M=4 ELSE PRINT"◙"TAB(26)"4   Show Labels◙"TAB(26)"5   Print Labels◙"TAB(26)"6   Tally & Show 2-Way Tables◙"TAB(26)"7"MM$:M=7
503 PRINT TAB(19)"---->  Which (1-"MID$(STR$(M),2)") ";:INPUT OP$:OP=VAL(OP$):IF OP<1 OR OP>M THEN BEEP:GOTO 503
504 ON OP GOTO 506,512,600:IF KIND=1 AND OP=4 THEN 10 ELSE ON OP-3 GOTO 610,614,700,10
505 '◙--- Show/Print Data ---
506 CLS:GOSUB 160:IF NQ<51 THEN SHO=20 ELSE SHO=10
507 PRINT #2,"Data read was:◙  #     ID     Answers (in blocks of 5)"
508 FOR I=1 TO N:PRINT #2,USING"### \        \ ";I;ID$(I);
509 FOR J=1 TO NQ:PRINT #2,MID$(STR$(A(I,J)),2);:IF J MOD 5=0 THEN PRINT #2,S$;
510 NEXT J:PRINT #2,:IF PR=0 THEN IF I MOD SHO=0 THEN IF I<N THEN GOSUB 6
511 NEXT I:GOSUB 5:GOSUB 193:GOTO 500
512 PRINT:GOSUB 162:GOSUB 165:SHO=1:GOTO 507
599 '◙--- 1-Way Tables ---
600 CLS:ERASE F:DIM F(NQ,10):PRINT TANS$;:FOR I=1 TO N:LOCATE 1,29:PRINT I:FOR J=1 TO NQ:K=A(I,J):IF K=0 THEN K=10
601 F(J,K)=F(J,K)+1:NEXT J:NEXT I:CLS:GOSUB 160
602 PRINT #2,"1-WAY FREQUENCY TABLE & Row Percentages based on"N"Persons."
603 PRINT #2,:PRINT #2,"Question. ";:FOR K=1 TO 9:PRINT #2," Ans"MID$(STR$(K),2);:NEXT K:PRINT #2," Null":PRINT #2,STRING$(64,45)
604 SHO=10:FOR I=1 TO NQ:PRINT #2,USING"  ###     ";I;:FOR K=1 TO 10:PRINT #2,USING F$;F(I,K);:NEXT K:PRINT #2,
605 PRINT #2,SPACE$(10);:FOR K=1 TO 10:PRINT #2,USING" ###%";F(I,K)*100/N;:NEXT K:PRINT #2,:IF I MOD SHO=0 THEN IF I<NQ THEN GOSUB 5
606 NEXT I
607 IF PR THEN GOSUB 193 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 602
608 GOTO 500
609 '◙--- Show/Print Labels ---
610 CLS:GOSUB 160:SHO=20
611 PRINT #2,"Question #       Label         # of Options"
612 FOR I=1 TO NQ:PRINT #2,USING"   ##            \        \          #";I;LAB$(I);NO(I):IF I MOD SHO=0 THEN IF I<NQ THEN GOSUB 5
613 NEXT I:GOSUB 5:GOSUB 193:GOTO 500
614 PRINT:GOSUB 162:GOSUB 165:SHO=1:GOTO 611
699 '◙--- 2-Way Tables ---
700 ERASE F:DIM F(10,10)
701 INPUT "Enter (in Free Format) a pair of question numbers to be cross-tabulated,◙or Null Entry to regain Menu";Z$
702 IF Z$="" THEN 500 ELSE IF LEN(Z$)<3 THEN PRINT"No, try again.":GOTO 701
703 FOR I=2 TO LEN(Z$):IF MID$(Z$,I,1)=S$ THEN ROW=VAL(LEFT$(Z$,I)):COL=VAL(MID$(Z$,I)):I=99
704 NEXT I:IF I=100 THEN IF ROW<1 OR ROW>NQ OR COL<1 OR COL>NQ THEN Z$=S$:GOTO 702
705 FOR I=1 TO NO(ROW):FOR K=1 TO NO(COL):F(I,K)=0:NEXT K:F(I,10)=0:RT(I)=0:NEXT I
706 FOR K=1 TO NO(COL):F(10,K)=0:CT(K)=0:NEXT K:F(10,10)=0:RT(10)=0:CT(10)=0:TOT=0
707 CLS:PRINT TANS$;:FOR I=1 TO N:LOCATE 1,29:PRINT I;:IF A(I,ROW)>NO(ROW) OR A(I,COL)>NO(COL) THEN 711
708 IF A(I,ROW) THEN J=A(I,ROW) ELSE J=10
709 IF A(I,COL) THEN K=A(I,COL) ELSE K=10
710 F(J,K)=F(J,K)+1:RT(J)=RT(J)+1:CT(K)=CT(K)+1:TOT=TOT+1
711 NEXT I:CLS:GOSUB 160
712 PRINT #2,TAB(13)"2-WAY FREQUENCY TABLE◙"TAB(18)LAB$(COL):PRINT #2,USING"\        \ ";LAB$(ROW);:FOR K=1 TO NO(COL):PRINT #2,HD$(K);:NEXT K:PRINT #2,HD$(10)HD$(11);:IF NO(COL)<9 OR PR=1 THEN PRINT #2,
713 FOR J=1 TO NO(ROW)+1:IF J>NO(ROW) THEN J=10
714 PRINT #2,TAB(7)HD$(J);:FOR K=1 TO NO(COL)+1:IF K>NO(COL)THEN K=10
715 PRINT #2,USING F$;F(J,K);:NEXT K:PRINT #2,USING F$;RT(J):NEXT J
716 PRINT #2,TAB(7)HD$(11);:FOR K=1 TO NO(COL):PRINT #2,USING F$;CT(K);:NEXT K:PRINT #2,USING F$+F$;CT(10);TOT
717 IF PR THEN GOSUB 193 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 712
718 INPUT"◙Enter another pair of question numbers (Null = No More)";Z$:GOTO 702
1000 DATA <end>
```

## TTEST.BAS

```bas
1 '         STUDENT'S t TESTS  ---  TTEST.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
8 QD=1:GOTO 622
9 ON QB GOTO 405,177,519,8,721:STOP  '=start,printout,1-Sample,Inde,Matched.◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 GOTO 400
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9 'from #86
39 ON ERROR GOTO 0:END'◙◙*** Messages ***
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
43 PRINT:COLOR 23,0:PRINT"Working ";:COLOR 7,0:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
45 BEEP:PRINT"Error.  Each sample must have at least 3 measurements!":PRINT:RETURN
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
47 PRINT #2,"Confidence limits not computed (since all requested t-values weren't entered).":RETURN
49 '◙--- Vetted Decoding of FF X(I,J) from X$ ---◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$)
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I);:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT"Row"STR$(I-KN(Q-1));:INPUT X$:IF X$=""THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 AND ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 IF NEEDVARS=0 THEN PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 IF NEEDVARS=2 THEN PRINT"This test analyses only 2 column variables.":ND=M-2
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT:COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=1:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE X(I,LL)=Z:LL=LL+1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:PRINT SPACE$(15):M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" ***
130 IF IO$="O" THEN STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5:DIM X(MXR,3):GOTO 110 ' *** MXC replaced ***
159 '◙--- Show/Print Answers ---
160 QB=1:PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
189 '◙*** Print Data ***◙   Needs X( , ) & NEEDVARS=1 or 2: if=1, then NS,N( ),KN( ,1) else J,K,VN$( ).
190 DO$="print all the data used":GOSUB 20:IF Z$="N" THEN 193
191 PRINT #2,STRING$(2,10)"DATA USED: ":IF OP=1 THEN 194 ELSE IF NEEDVARS=1 THEN FOR J=1 TO NS:PRINT #2,"Sample "CHR$(J+64)":":FOR I=1 TO N(J):PRINT #2,X(I+KN(J-1),1);:NEXT I:PRINT #2,:NEXT J:GOTO 193
192 IF NEEDVARS=2 THEN GOSUB 210:PRINT #2,VN$(1)", & "VN$(2):FOR I=1 TO N:PRINT #2,X(I,1);X(I,2):NEXT I
193 PR=0:PRINT #2,:CLOSE:RETURN
194 FOR I=1 TO N:PRINT #2,X(I,1);:NEXT I:PRINT #2,:GOTO 193
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR J=1 TO M:IF J<10 THEN VN$(J)="Var #"+STR$(J) ELSE VN$(J)="Var #"+MID$(STR$(J),2)
211 NEXT J:RETURN
229 '◙--- Stats of X(I,J), I=II to NN  (for Sample Q if NS>1) ---
230 S1=0:S2=0:S3=0:S4=0:SM=X(II,J):GR=SM:FOR I=II TO NN:X=X(I,J)-X(II,J):S1=S1+X:S2=S2+X*X:S3=S3+X*X*X:S4=S4+X*X*X*X:IF X(I,J)<SM THEN SM=X(I,J) ELSE IF X(I,J)>GR THEN GR=X(I,J)
231 NEXT I:IF GR-SM<0.00001 THEN 237
232 NN=NN-II+1:AV=S1/NN:SS=S2-S1*AV:VA=SS/(NN-1):SD=SQR(VA):SE=SQR(VA/NN)
233 SKEW=(S3-3*S2*AV+2*AV^3*NN)/SQR(SS^3/NN):ZSKEW=SKEW/SQR(6*(NN-2)/((NN+1)*(NN+3))):CURT=(S4-4*S3*AV+6*S2*AV^2-3*AV^4*NN)/(SS^2/NN):ZCURT=(CURT-3)/SQR(24/NN)
234 AV=AV+X(II,J):TG1=(AV-SM)/SD:TG2=(GR-AV)/SD
235 IF NS>1 THEN AV(Q)=AV:SS(Q)=SS:VA(Q)=VA:SD(Q)=SD:SKEW(Q)=SKEW:ZSKEW(Q)=ZSKEW:CURT(Q)=CURT:ZCURT(Q)=ZCURT
236 RETURN
237 LOCATE,1:PRINT"Fatal Error.  Var #"J"has no variation.":GOSUB 5:END
249 '◙--- Transform Sub ---
250 K=20:CLS:LOCATE,24,0:PRINT "TRANSFORM MENU◙◙"TAB(K)"1   Arcsin (Sqrt (p))◙"TAB(K)"2   Arcsin (Sqrt (p%/100))◙"TAB(K)"3   Log (X)◙"TAB(K)"4   Log (X+1)◙"TAB(K)"5   Reciprocal 100/X";
251 PRINT"◙"TAB(K)"6   Reciprocal Plus, 100/(X+1)◙"TAB(K)"7   Sqrt (X)◙"TAB(K)"8   Sqrt (X+0.5)◙"TAB(K)"9   X Squared◙"TAB(K-1)"10   None"
252 PRINT"◙"TAB(10)"Negative codes reverse transforms (e.g. -3 = Antilog)◙":LOCATE,,1
253 INPUT"Which transform (+/- 1 to 9, or 10)";T%:IF T%=10 THEN 273 ELSE IF ABS(T%)<1 OR ABS(T%)>9 THEN PRINT"WHAT?  ";:GOTO 253
254 IF M=1 THEN NT=1:Q(1)=1:GOTO 257 ELSE PRINT"How many variables are to have this transform (max"STR$(M)")";:INPUT NT:IF NT<1 OR NT>M THEN 254 ELSE IF NT=M THEN FOR J=1 TO M:Q(J)=J:NEXT J:GOTO 257
255 IF NT=1 THEN INPUT"Which variable # ";X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN PRINT"Silly":GOTO 255 ELSE 257
256 PRINT"Which"NT"variables (#'s in Free Format)";:INPUT X$:I=1:MM=M:M=NT:Q(0)=1:GOSUB 50:Q(0)=0:M=MM:FOR J=1 TO NT:IF Q(J)>0 AND Q(J)<=M THEN NEXT J ELSE PRINT"Value"J"is out-of-bounds.  Try again.":GOTO 256
257 GOSUB 43:A=57.29578:B=0.4342945:Z=0:U=1:H=100:P5=0.5:P9=0.99999:E$(0)=""
258 FOR J=1 TO NT:K=Q(J):FOR I=1 TO N:ON T%+10 GOTO 269,270,270,267,267,265,265,262,262,39,260,259,264,263,267,266,269,268,270
259 X(I,K)=X(I,K)/H
260 IF X(I,K)>P9 THEN X(I,K)=P9 ELSE IF X(I,K)<Z THEN 272
261 X(I,K)=SQR(X(I,K)):X(I,K)=A*ATN(X(I,K)/SQR(U-X(I,K)*X(I,K))):GOTO 271
262 IF X(I,K)>=Z THEN X(I,K)=(SIN(X(I,K)/A))^2:IF T%=-U THEN 271 ELSE X(I,K)=H*X(I,K):GOTO 271 ELSE T%=U:GOTO 272
263 X(I,K)=X(I,K)+U
264 IF X(I,K)>Z THEN X(I,K)=B*LOG(X(I,K)):GOTO 271 ELSE 272
265 X(I,K)=EXP(X(I,K)/B):IF T%=-3 THEN 271 ELSE X(I,K)=X(I,K)-U:GOTO 271
266 X(I,K)=X(I,K)+U
267 IF X(I,K)<>Z THEN X(I,K)=H/X(I,K):IF T%=-6 THEN X(I,K)=X(I,K)-U:GOTO 271 ELSE 271 ELSE 272
268 X(I,K)=X(I,K)+P5
269 IF X(I,K)>=Z THEN X(I,K)=SQR(X(I,K)):GOTO 271 ELSE T%=7:GOTO 272
270 X(I,K)=X(I,K)*X(I,K):IF T%=-8 THEN X(I,K)=X(I,K)-P5
271 NEXT I:NEXT J:IF E$(0)=""THEN GOSUB 44:GOTO 273
272 BEEP:E$(0)="PROPORTION < 0":E$(1)="LOG 0 or Negative Number":E$(2)="DIVISION by 0":E$(3)="SQRT of Negative Number":PRINT:PRINT"Fatal Error: "E$((ABS(T%)-1)/2)", Row"I:GOSUB 5:END
273 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
359 '◙*** Get t for specified P and DF ***
360 PRINT USING "What is Student's t for 2-tail P = #% with df =### ";P;DF;:INPUT TT:RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXR=400:MXC=20
402 DIM I,J,K,L,M,N,Q,Z,X$,Y$,Z$,VN$(MXC),Q(MXC),N(2),KN(2),DF(3),AV(3),SD(3),VA(3),SE(3),S1(3),S2(3),SM(3),GR(3),TG1(3),TG2(3),SKEW(3),ZSKEW(3),CURT(3),ZCURT(3),T5(3),T1(3),CL95(4),CL99(4),ED$(1),E$(3)
403 P5=0.5:S$=SPACE$(6)
404 ED$(0)="C#=Change, D#=Delete, X=Extra data, Null=Proceed":ED$(1)="C#=Change, Null=Proceed":FT$="What is the 2-tail P=#% value of Student's t for df=###":F$="#####.###":EDTR$="edit or transform that data & re-run this test"
405 QB=1:CLOSE:CLS:Z$="M E N U   F O R   S T U D E N T' S   t   T E S T S":GOSUB 46
406 LOCATE 3,8:PRINT"Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT STRING$(80,196)
407 LOCATE 6,1,0:K=20:PRINT"◙"TAB(K)"1   t Test on 1 Sample.◙◙"TAB(K)"2   t Test on 2 Independent Samples.◙◙"TAB(K)"3   t Test on 2 Matched Samples.◙◙"TAB(K)"4   Return to Main Menu."
408 PRINT:LOCATE ,18,1:INPUT"===>  Option (1-4) ";OP:ON OP GOTO 500,600,700,30:PRINT"No, please enter 1, 2, 3 or 4":GOTO 408
499 '◙------ <<< 1-Sample t Test >>>
500 QB=3:HD$=" S T U D E N T' S   1 - S A M P L E   t   T E S T ":VER$="(RL,2)"
501 NEEDVARS=1:DIM X(MXR,1):NS=1
502 F1$="=  ########.##":F6$="=  ###.##":F7$="=####.##":F8$="=  ########":FC$="##% Confidence Limits for Population Mean =####,###.###   !  ####,###.###"
503 CLS:GOSUB 340:PRINT DAT$;TAB(42-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
504 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
505 PRINT TAB(K)"║                                                       ║"
506 PRINT TAB(K)"║      Compares a sample mean & a population mean.      ║"
507 PRINT TAB(K)"║ Also estimates confidence limits for population mean. ║"
508 PRINT TAB(K)"║             Sample size = 3 to 400.                   ║"
509 PRINT TAB(K)"║       Various data transforms can be tried out.       ║"
510 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
511 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
512 PRINT TAB(K)"║                                                       ║"
513 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
514 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 518
515 '◙--- Disk Entry ---
516 QD=1:MNR=3:MNC=1:GOSUB 80:Q=1:GOTO 519
517 '◙--- K/b Entry ---
518 I=1:M=1:Q=1:GOSUB 70
519 CLOSE:PRINT:PRINT"Data read was:"
520 L=1:FOR I=1 TO N:PRINT TAB(L)"#"MID$(STR$(I),2)"="X(I,1);:L=L+16:IF L>65 THEN L=1:PRINT
521 IF I MOD 100=0 THEN GOSUB 6
522 NEXT I:PRINT
523 '◙--- Edit ---
524 PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 536 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
525 IF LZ$="C" THEN 527 ELSE IF QD THEN 526 ELSE IF LZ$="D" THEN 530 ELSE IF LZ$="X" THEN 532
526 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid datum number.":GOTO 524 ELSE PRINT"WHAT?":GOTO 524
527 IF I<1 OR I>N THEN 526
528 PRINT"Old value ="X(I,1)"     New value";:INPUT X$:IF X$="" THEN PRINT"Unchanged":GOTO 524 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That has a `non-numeric' entry.  Re-do.":GOTO 528
529 NEXT L:X(I,1)=VAL(X$):GOTO 519
530 IF I<1 OR I>N THEN 526 ELSE IF N<4 THEN GOSUB 45:GOTO 524 ELSE GOSUB 43:FOR L=I TO N:X(L,1)=X(L+1,1):NEXT L:N=N-1:T5=0
531 LOCATE ,1:PRINT"Ok, value #"I"deleted.":GOSUB 5:GOTO 519
532 IF N=MXR THEN PRINT"Total N is already maximum,"N;:GOTO 524
533 PRINT"You can append up to"MXR-N"extra measurements, 1 per line, with `/' end-signal:"
534 I=N+1:N=0:GOSUB 73:T5=0:GOTO 519
535 '◙--- Trans, t Values, & Calc ---
536 DO$="transform this data":GOSUB 20:IF Z$="Y" THEN GOSUB 250:GOTO 519
537 PRINT:INPUT "What population mean value do you want to test";PM:PRINT:IF T5=0 THEN DF=N-1:P=5:GOSUB 360:T5=TT:IF T5 THEN P=1:GOSUB 360:T1=TT
538 GOSUB 43:II=1:NN=N:J=1:GOSUB 230:T=(AV-PM)/SE:IF T5 THEN CL95(1)=AV-T5*SE:CL95(2)=AV+T5*SE:CL99(1)=AV-T1*SE:CL99(2)=AV+T1*SE
539 '◙--- Answer ---
540 CLS:GOSUB 160:PRINT #2,TAB(40-LEN(HD$)\2)HD$CHR$(10)CHR$(10)
541 PRINT #2,"First 3 values were:";:FOR I=1 TO 3:PRINT #2,X(I,1);:NEXT I:PRINT #2,
542 PRINT #2,:PRINT #2,"n  ";USING F8$;N
543 PRINT #2,"Ave";USING F1$+S$+"SD"+F7$;AV;SD
544 PRINT #2,"Var";USING F1$+S$+"SE"+F7$;VA;SE
545 PRINT #2,"Min";USING F1$+S$+"T "+F7$+" (Thompson-Grubbs, Technometrics 1969, p.4)";SM;TG1
546 PRINT #2,"Max";USING F1$+S$+"T "+F7$+" (Ditto)";GR;TG2
547 PRINT #2,"Sqrt(B1)";USING F6$+S$+"Z "+F7$+" (BTS 34B)";SKEW;ZSKEW
548 PRINT #2,"B2      ";USING F6$+S$+"Z "+F7$+" (BTS 34C)";CURT;ZCURT
549 PRINT #2,:PRINT #2,USING "Testing hypothesis that population mean =#####.###,";PM:PRINT #2,TAB(15);USING "t =#####.###, df =####";T;DF
550 PRINT #2,:IF T5=0 THEN GOSUB 47 ELSE PRINT #2,USING FC$;95;CL95(1);"&";CL95(2):IF T1 THEN PRINT #2,USING FC$;99;CL99(1);"&";CL99(2)
551 IF PR THEN GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 541
552 DO$=EDTR$:GOSUB 20:IF Z$="Y" THEN 519 ELSE 10
599 '◙-------<<< Inde t Test >>>
600 QB=4:HD$=" I N D E P E N D E N T   S A M P L E S   t   T E S T ":VER$="(RL,5)":IF OP=3 THEN QD=1:GOTO 622
601 NEEDVARS=1:DIM X(MXR,1):NS=2
602 FC$="##% Confidence Limits for Population Mean Diff =####,###.###   !  ####,###.###"
603 CLS:GOSUB 340:PRINT DAT$;TAB(42-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
604 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
605 PRINT TAB(K)"║                                                       ║"
606 PRINT TAB(K)"║     Compares means of 2 INDEPENDENT sample groups.    ║"
607 PRINT TAB(K)"║   Also confidence limits for population difference.   ║"
608 PRINT TAB(K)"║  Min sample sizes = 3.  Max total measurements = 400. ║"
609 PRINT TAB(K)"║       Various data transforms can be tried out.       ║"
610 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
611 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
612 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
613 PRINT TAB(K)"║                                                       ║"
614 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
615 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 621
616 '◙--- Disk Entry ---
617 QD=1:MNR=6:MNC=1:GOSUB 80
618 FOR Q=1 TO NS:PRINT"How many measurements belong to Sample "CHR$(Q+64);:INPUT N(Q):IF N(Q)<3 OR N(Q)>N-KN(Q-1)THEN GOSUB 40:GOTO 618
619 KN(Q)=KN(Q-1)+N(Q):NEXT Q:IF N=KN(Q-1) THEN 622 ELSE BEEP:PRINT"Hey, those sample sizes don't add up to"N:GOTO 618
620 '◙--- K/b Entry ---
621 PRINT"Ok, press <Enter> after each measurement.  Null entry duplicates previous value.Signal `end-of-each-sample' by entering a `/'."
622 CLOSE:Q=1:M=1
623 IF QD THEN 626
624 PRINT:PRINT"Sample "CHR$(Q+64)" ---"
625 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):IF N(Q)>2 THEN KN(Q)=N ELSE GOSUB 45:N=KN(Q-1):GOTO 625
626 PRINT:PRINT"Sample "CHR$(Q+64)" --- Data read was:"
627 L=1:FOR I=KN(Q-1)+1 TO KN(Q):PRINT TAB(L)"#"MID$(STR$(I-KN(Q-1)),2)"="X(I,1);:L=L+16:IF L>65 THEN L=1:PRINT
628 IF I MOD 100=0 THEN GOSUB 6
629 NEXT I:PRINT
630 '◙--- Edit ---
631 PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 642 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
632 IF LZ$="C" THEN 634 ELSE IF QD THEN 633 ELSE IF LZ$="D" THEN 637 ELSE IF LZ$="X" THEN 639
633 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid datum number.":GOTO 631 ELSE PRINT"WHAT?":GOTO 631
634 IF I<1 OR I>N(Q) THEN 633 ELSE I=I+KN(Q-1)
635 PRINT"Old value ="X(I,1)"     New value";:INPUT X$:IF X$="" THEN 631 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 635
636 NEXT L:X(I,1)=VAL(X$):GOTO 626
637 IF I<1 OR I>N(Q) THEN 633 ELSE IF KN(Q)-KN(Q-1)<4 THEN GOSUB 45:GOTO 631 ELSE GOSUB 43:FOR L=I+KN(Q-1) TO N:X(L,1)=X(L+1,1):NEXT L:N(Q)=N(Q)-1:KN(Q)=KN(Q)-1:N=N-1
638 LOCATE ,1:PRINT"Ok, value #"I"deleted.":T5(1)=0:GOSUB 5:GOTO 626
639 IF N=MXR THEN PRINT"Total N is already maximum,"N;:GOTO 631
640 PRINT"You can append up to"MXR-N"extra measurements, 1 per line, with `/' end-signal:"
641 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):KN(Q)=N:T5(1)=0:GOTO 626
642 IF Q<NS THEN Q=Q+1:GOTO 623
643 '◙--- Trans & Get t Values ---
644 DO$="transform this data":GOSUB 20:IF Z$="Y" THEN GOSUB 250:QD=1:GOTO 622
645 DF(1)=N(1)-1:DF(2)=N(2)-1:DF(3)=N-2
646 PRINT:FOR J=1 TO 3:IF J=2 AND DF(2)=DF(1) THEN T5(2)=T5(1):T1(2)=T1(1):GOTO 648
647 DF=DF(J):P=5:GOSUB 360:T5(J)=TT:IF T5(1)=0 THEN J=3 ELSE P=1:GOSUB 360:T1(J)=TT
648 NEXT J
649 '◙--- Calc ---
650 CLS:GOSUB 43:J=1
651 Q=1:II=1:NN=N(1):GOSUB 230
652 Q=2:II=N(1)+1:NN=N:CLS:GOSUB 230
653 DIF=AV(1)-AV(2):SED=SQR((SS(1)+SS(2))/DF(3)*N/N(1)/N(2)):T=DIF/SED
654 IF T5(3) THEN CL95(1)=DIF-T5(3)*SED:CL95(2)=DIF+T5(3)*SED:CL99(1)=DIF-T1(3)*SED:CL99(2)=DIF+T1(3)*SED
655 PBRSQ=(T*T)/(T*T+DF(3)):PBR=SQR(PBRSQ) 'Welkowitz 187
656 IF VA(1)>VA(2) THEN F=VA(1)/VA(2):DFT=DF(1):DFB=DF(2) ELSE F=VA(2)/VA(1):DFT=DF(2):DFB=DF(1)
657 FBVAD=VA(1)/N(1)+VA(2)/N(2):FBSED=SQR(FBVAD):FBT=DIF/FBSED:IF T5(1)=0 THEN 663
658 COCH5=(VA(1)/N(1)*T5(1)+VA(2)/N(2)*T5(2))/FBVAD
659 COCH1=(VA(1)/N(1)*T1(1)+VA(2)/N(2)*T1(2))/FBVAD
660 CL95(3)=DIF-COCH5*FBSED:CL95(4)=DIF+COCH5*FBSED
661 CL99(3)=DIF-COCH1*FBSED:CL99(4)=DIF+COCH1*FBSED
662 '◙--- Answers ---
663 CLS:GOSUB 160:PRINT #2,TAB(40-LEN(HD$)\2)HD$CHR$(10):Q1=20:Q2=50
664 PRINT #2,TAB(Q1)"Sample A";TAB(Q2)"Sample B":PRINT #2,
665 PRINT #2,"1st 3 values were:";:FOR I=1 TO 3:PRINT #2,TAB(Q1)X(I,1);TAB(Q2);X(I+KN(1),1):NEXT I:PRINT #2,
666 PRINT #2,"Size";TAB(Q1)N(1);TAB(Q2)N(2):PRINT #2,"Mean";TAB(Q1)AV(1);TAB(Q2)AV(2):PRINT #2,"S.D.";TAB(Q1)SD(1);TAB(Q2)SD(2)
667 PRINT #2,"Skewness, Sqrt(B1)"TAB(Q1)USING "+##.### (Z=###.#)";SKEW(1);ZSKEW(1);:PRINT #2,TAB(Q2)USING "+##.### (Z=###.#)";SKEW(2);ZSKEW(2)
668 PRINT #2,"Kurtosis, B2"TAB(Q1)USING "###.### (Z=###.#)";CURT(1);ZCURT(1);:PRINT #2,TAB(Q2)USING "###.### (Z=###.#)";CURT(2);ZCURT(2):IF PR THEN PRINT #2,
669 GOSUB 5:PRINT #2,"Difference betw means = ";DIF;S$"S.E. Diff =";SED
670 PRINT #2,TAB(10);USING "Student's t =####.###,  with d.f. ###.";T;DF(3)
671 PRINT#2,:IF T5(3)=0 THEN GOSUB 47:GOTO 674
672 PRINT #2,USING FC$;95;CL95(1);"&";CL95(2):IF T1(3)=0 THEN 674
673 PRINT #2,USING FC$;99;CL99(1);"&";CL99(2)
674 PRINT #2,:PRINT #2,USING "Between Group ! Data, Point Biserial r = +#.###  !  r squared = #.###";"&";PBR;"&";PBRSQ
675 PRINT #2,:PRINT #2,USING "Ratio of Sample Variances,  F =#####.##, with df ###  !  ###";F;DFT;"&";DFB
676 PRINT #2,"If this F-value is significant by 2-tailed test, prefer:"
677 PRINT #2,TAB(10);USING "Fisher-Behrens t' =####.###";FBT;:PRINT #2,S$"S.E. Diff ="FBSED
678 PRINT #2,".... This test can be judged by Cochran's t' values,";
679 IF T5(1)>0 AND T5(2)>0 THEN PRINT #2," namely:" ELSE PRINT #2,:PRINT #2,".... but you didn't enter the Student's t values needed for their calculation.":GOTO 684
680 PRINT #2,USING "     2-tail 5% t' =###.###    !    2-tail 1% t' =###.###";COCH5;"&";COCH1
681 PRINT#2,".... with adjusted limits as follows:"
682 PRINT #2,USING FC$;95;CL95(3);"&";CL95(4):IF T1(1)=0 THEN 684
683 PRINT #2,USING FC$;99;CL99(3);"&";CL99(4);
684 IF PR THEN GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 664
685 DO$=EDTR$:GOSUB 20:IF Z$="Y" THEN CLS:QD=1:GOTO 622 ELSE 10
699 '◙--------<<< Matched Pairs t Test >>>
700 QB=5:HD$=" M A T C H E D   S A M P L E S   t   T E S T ":VER$="(RL,5)"
701 NEEDVARS=2:DIM X(MXR,3):NS=2
702 FC$="##% Confidence Limits for Population Mean Diff =####,###.###   !  ####,###.###"
703 CLS:GOSUB 340:PRINT DAT$;TAB(42-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
704 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
705 PRINT TAB(K)"║                                                       ║"
706 PRINT TAB(K)"║      Compares means of 2 MATCHED sample groups.       ║"
707 PRINT TAB(K)"║   Also confidence limits for population difference.   ║"
708 PRINT TAB(K)"║      Accepts 3-400 rows of paired measurements.       ║"
709 PRINT TAB(K)"║       Various data transforms can be tried out.       ║"
710 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
711 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
712 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
713 PRINT TAB(K)"║                                                       ║"
714 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
715 '◙--- Get Data ---
716 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 720
717 '◙--- Disk Entry ---
718 QD=1:MNR=3:MNC=2:GOSUB 80:GOSUB 5:GOTO 721
719 '◙--- K/b Entry
720 PRINT"Ok, enter 3-400 paired values, 1 pair per line in Free Format, from keyboard.":I=1:M=2:Q=1:GOSUB 72:IF N<3 THEN PRINT "Not enough rows to analyse.  Will you add others";:GOSUB 21:IF Z$="N" THEN 2 ELSE 733
721 CLOSE:CLS:PRINT"Data read was:":FOR I=1 TO N:PRINT"Row #"MID$(STR$(I),2)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:IF I MOD 20=0 THEN GOSUB 6
722 NEXT I
723 '◙--- Edit ---
724 PRINT:PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 735 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
725 IF LZ$="C" THEN 727 ELSE IF QD THEN 726 ELSE IF LZ$="D" THEN 731 ELSE IF LZ$="X" THEN 732
726 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid row number.":GOTO 724 ELSE PRINT"WHAT?":GOTO 724
727 IF I<1 OR I>N THEN 726 ELSE GOSUB 200
728 PRINT"Change which variable # (1 or 2)";:INPUT Z$:IF Z$="" THEN 724 ELSE J=VAL(Z$):IF J<1 OR J>M THEN BEEP:GOTO 728
729 PRINT"Old value ="X(I,J)"    New value";:INPUT X$:FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do.":GOTO 729
730 NEXT L:X(I,J)=VAL(X$):PRINT"New ";:GOSUB 200:GOSUB 5:GOTO 721
731 IF I<1 OR I>N OR N<4 THEN GOSUB 40:GOTO 724 ELSE N=N-1:FOR K=I TO N:FOR L=1 TO M:X(K,L)=X(K+1,L):NEXT L:NEXT K:PRINT"Ok, Row"I"Deleted.":GOSUB 5:GOTO 721
732 IF N=MXR THEN PRINT"No, you have maximum rows already.":GOTO 724
733 PRINT"Ok, you can add up to"MXR-N"extra rows in Free Format.":I=N+1:N=0:Q=1:GOSUB 72:GOTO 721
734 '◙--- Trans, t Values & Calc ---
735 DO$="transform this data":GOSUB 20:IF Z$="Y" THEN GOSUB 250:GOTO 721
736 PRINT:IF T5=0 THEN DF=N-1:P=5:GOSUB 360:T5=TT:IF T5 THEN P=1:GOSUB 360:T1=TT
737 CLS:GOSUB 43
738 FOR I=1 TO N:X(I,0)=X(I,1)-X(I,2):X(I,3)=X(I,1)+X(I,2):NEXT I
739 II=1:NN=N:FOR J=0 TO 3:Q=J:GOSUB 230:NEXT J
740 SP=0:FOR I=1 TO N:SP=SP+X(I,0)*X(I,3):NEXT I:SP=SP-AV(0)*AV(3)*N:R=SP/SQR(SS(0)*SS(3))
741 DF=N-1:SED=SQR(SS(0)/N/DF):T=AV(0)/SED
742 IF T5 THEN CL95(1)=AV(0)-T5*SED:CL95(2)=AV(0)+T5*SED:IF T1 THEN CL99(1)=AV(0)-T1*SED:CL99(2)=AV(0)+T1*SED
743 '◙--- Answers ---
744 CLS:GOSUB 160:PRINT TAB(38-LEN(HD$)\2)HD$CHR$(10)
745 Q1=20:Q2=50:PRINT #2,TAB(Q1)"Sample A";TAB(Q2)"Sample B":PRINT #2,
746 PRINT #2,"1st 3 pairs were:";:FOR I=1 TO 3:PRINT #2,TAB(Q1)X(I,1);TAB(Q2);X(I,2):NEXT I:PRINT #2,
747 PRINT #2,"Size";TAB(Q1)N;TAB(Q2)N:PRINT #2,"Mean";TAB(Q1)AV(1);TAB(Q2)AV(2):PRINT #2,"S.D.";TAB(Q1)SD(1);TAB(Q2)SD(2)
748 PRINT #2,"Skewness, Sqrt(B1)"TAB(Q1)USING "+##.### (Z=###.#)";SKEW(1);ZSKEW(1);:PRINT #2,TAB(Q2);USING "+##.### (Z=###.#)";SKEW(2);ZSKEW(2)
749 PRINT #2,CHR$(10)"Difference between Means = "AV(0);S$"S.E. of Diff ="SED
750 PRINT #2,TAB(10);USING "Student's t =#####.###, with df =####";T;DF
751 PRINT#2,:IF T5=0 THEN GOSUB 47:GOTO 754
752 PRINT #2,USING FC$;95;CL95(1);"&";CL95(2):IF T1=0 THEN 754
753 PRINT #2,USING FC$;99;CL99(1);"&";CL99(2)
754 PRINT #2,CHR$(10)"For checking normality of the"N"difference values, they have:"
755 PRINT #2,TAB(10);USING "Sqrt(B1) = +##.### (Z=###.#)";SKEW(0);ZSKEW(0);:PRINT #2,S$;USING "B2 = ##.### (Z=###.#)";CURT(0);ZCURT(0)
756 PRINT #2,".... & Pearson's r between the"N"differences & sums is ";:PRINT #2,USING "+#.###, with df ###";R;N-2:GOSUB 5
757 IF PR THEN GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 745
758 DO$=EDTR$:GOSUB 20:IF Z$="Y" THEN 721
759 IF N>200 THEN 762
760 DO$="try the Independent Samples t Test on this data, in case the     matching has turned out to be ineffective":GOSUB 20:IF Z$="N" THEN 10
761 CLS:GOSUB 43:NS=2:N(1)=N:N(2)=N:KN(1)=N:KN(2)=2*N:N=KN(2):FOR I=1 TO N(2):X(I+N(1),1)=X(I,2):NEXT I:CLS:GOTO 600
762 END
```

## WILCX.BAS

```bas
1 '          WILCOXON'S TESTS  ---  WILCX.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
8 QD=1:GOTO 521
9 ON QB GOTO 404,177,8,619:STOP  '=start,printout,Sum,Signed.◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 GOTO 2
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN"MENU"
31 IF ERR=70 THEN INPUT"Can't write to that disk.  Remove its Write-Protect tab, then press <Enter>.";Z$:RESUME
32 IF ERR=71 THEN INPUT"That drive is empty or its gate is open.  Fix, then press <Enter>.";Z$:RESUME
33 IF ERR=210 THEN RESUME 9  'from #86
39 ON ERROR GOTO 0:END'◙◙*** Messages ***
40 BEEP:PRINT "---> Sorry, that entry is illegal.":RETURN
43 PRINT:PRINT"Working ";:RETURN
44 LOCATE,1:PRINT"Ok, done.";:GOTO 5
45 BEEP:PRINT"Error.  Each sample must have at least 3 measurements!":PRINT:RETURN
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
49 '◙*** Vetted Decoding of FF X(I,J) from X$ ***◙    Needs I, M, Q(0) from #96 or #256, & UT>0 if UT matrix.◙    Signal neg entries by NEG=1 since #351 needs pos values.
50 K=1:L=M
51 KX=0:FOR J=K TO L:Y$=SPACE$(10):KY=0
52 KX=KX+1:IF KX>LEN(X$) THEN IF J=L THEN 54 ELSE 57
53 Z$=MID$(X$,KX,1):IF INSTR("-.0123456789",Z$) THEN KY=KY+1:MID$(Y$,KY,1)=Z$:GOTO 52 ELSE IF Z$<>" " THEN 58 ELSE IF KY=0 THEN 52
54 IF Q(0) THEN Q(J)=VAL(Y$) ELSE X(I,J)=VAL(Y$):IF X(I,J)<0 THEN NEG=1
55 NEXT J:IF KX>=LEN(X$) THEN 60
56 PLAY"L8O3CO2C":PRINT"Only the first"L"values have been read in that line.  Re-do it";:GOSUB 21:IF Z$="Y" THEN 59 ELSE 60
57 PLAY"L32O4CEG>C":PRINT"Not enough values in the line above.  Please re-do whole line.":GOTO 59
58 PLAY"L16O3CEL4>B":PRINT"That line contains a `non-numeric' entry.  Please re-do whole line."
59 PRINT"Row"STR$(I-KN(Q-1));:INPUT X$:IF RIGHT$(X$,1)<>"/" THEN 51 ELSE X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$>"" THEN 51
60 RETURN
69 '◙--- K/b Input of all X(I,J) in FF ---◙    Needs first I, M, Q>0 (sample #), KN(Q), & if UT matrix UT>0.  Returns N.
70 PRINT"Enter data from keyboard, ";:IF M=1 THEN PRINT "pressing <Enter> after each number.":GOTO 72
71 PRINT"in Free Format, pressing <Enter> at end of each row.":IF UT THEN 73
72 PRINT"Null entry duplicates previous row.  Signal `end-of-data' by entering a `/'"
73 PRINT"Row"STR$(I-KN(Q-1));:INPUT X$:IF X$="" THEN IF I>1 THEN FOR J=1 TO M:X(I,J)=X(I-1,J):NEXT J:I=I+1:LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 73
74 IF RIGHT$(X$,1)="/" THEN X$=LEFT$(X$,LEN(X$)-1):N=I+(X$=""):IF X$="" THEN 76
75 GOSUB 50:IF N=0 THEN IF I<MXR THEN I=I+1:GOTO 73 ELSE N=MXR
76 RETURN
79 '◙--- Disk Input of X(I,J), N, M, etc ---◙    Needs MNR, MNC, & NEEDVARS.  Also ZZ$="UTOK" if UT is acceptable.
80 QD=1:IO$="I":GOSUB 110:CLS:PRINT "Loading data from disk.":INPUT #1,FL$,VR$
81 IF LEFT$(VR$,4)<>"(RL," THEN BEEP:PRINT "Unreadable file --- not made by our Data Filer/Editor program.":GOTO 86
82 INPUT #1,DT$,ID$,N,M,UT,VN$:PRINT "Filename: "FL$,"Made: "DT$,"Version: "VR$:PRINT"ID: "ID$:PRINT
83 IF UT>0 AND ZZ$<>"UTOK" THEN PRINT "This file is an upper triangular matrix, which this program can't use!":GOTO 86
84 PRINT"File has"N"rows of data. ";:IF N<MNR THEN PRINT "--- Not enough!":GOTO 86 ELSE IF N>MXR THEN PRINT"--- Too many!":GOTO 86
85 PRINT:PRINT"File has"M"column variables. ";:IF M<MNC THEN PRINT "--- Not enough!" ELSE IF M>MXC THEN PRINT"Too many!" ELSE 88
86 CLOSE:BEEP:GOSUB 5:ERROR 210
87 '   Select variables
88 PRINT:IF VN$="N" THEN PRINT "The"M"variables are not named.":GOTO 90
89 PRINT "Variables in file are:":FOR J=1 TO M:INPUT #1,VN$(J):PRINT J;VN$(J),:NEXT J:PRINT
90 IF M=MNC OR UT>0 THEN 100 ELSE PRINT
91 IF NEEDVARS=0 THEN PRINT"How many filed column variables are to be IGNORED (0-"MID$(STR$(M-MNC),2)")";:INPUT ND:IF ND<0 OR ND>M-MNC THEN 91 ELSE IF ND=0 THEN 100
92 IF NEEDVARS=1 THEN PRINT"This test analyses only 1 column variable at a time.":ND=M-1
93 IF NEEDVARS=2 THEN PRINT"This test analyses only 2 column variables.":ND=M-2
94 IF ND=1 THEN PRINT "Number of the variable to be IGNORED (1-"MID$(STR$(M),2)")";:INPUT X$:Q(1)=VAL(X$):IF Q(1)<1 OR Q(1)>M THEN GOSUB 40:GOTO 94 ELSE 97
95 PRINT MID$(STR$(ND),2)" numbers of variables to be IGNORED (in ascending order & Free Format):":INPUT X$:IF VAL(X$)<1 THEN GOSUB 40:GOTO 95
96 Q(0)=1:MM=M:M=ND:GOSUB 50:Q(0)=0:M=MM
97 KK=1:L=1:FOR J=1 TO M:IF J=Q(KK) THEN KK=KK+1 ELSE VN$(L)=VN$(J):L=L+1
98 NEXT J
99 '   Now read numerical data from disk
100 PRINT:COLOR 23,0:PRINT"Loading numbers";:COLOR 7,0:FOR I=1 TO N:KK=1:LL=0:L=M
101 FOR J=1 TO L:INPUT #1,Z
102 IF J=Q(KK) THEN KK=KK+1 ELSE LL=LL+1:X(I,LL)=Z:IF X(I,LL)<0 THEN NEG=1
103 NEXT J:NEXT I:CLOSE:LOCATE,1:PRINT SPACE$(15):M=M-ND:RETURN
109 '◙--- Get Filespec ---
110 IF IO$="O" AND FL$>"" THEN PRINT "Will you file this data under the name "FL$;:GOSUB 21:IF Z$="Y" THEN 115
111 LINE INPUT "Filename (I will add .DAT extension)? ";FL$:IF FL$="" THEN 111 ELSE IF MID$(FL$,2,1)=":" THEN DR$=LEFT$(FL$,1):FL$=MID$(FL$,3)
112 ER=0:FOR I=1 TO LEN(FL$):Z$=MID$(FL$,I,1):IF INSTR(" .,/\|?*:;[]+="+CHR$(34),Z$) THEN ER=1
113 NEXT I
114 IF ER=0 AND FL$>"" AND LEN(FL$)<9 THEN FL$=FL$+".DAT" ELSE BEEP:PRINT "Invalid filename.  Will you try again";:GOSUB 21:IF Z$="Y" THEN 111 ELSE 2
115 INPUT "Which drive (A,B,C,D)";DR$:IF DR$="" THEN 115
116 DR$=CHR$(ASC(DR$) AND 95):IF INSTR("ABCD",DR$)=0 THEN 115
117 INPUT "Which directory (e.g. WORK, MYDATA, or Null Entry if root) ";DR2$:IF DR2$="" THEN DR$=DR$+":" ELSE DR$=DR$+":\"+DR2$+"\"
129 '◙*** Open File, IO$= "I" ***
130 IF IO$="O" THEN STOP
131 '
132 '
133 '
134 ON ERROR GOTO 136:OPEN DR$+FL$ FOR INPUT AS #1  'for input
135 ON ERROR GOTO 30:RETURN   'input #1,A$,B$:close
136 PRINT FL$" not found on Drive "DR$:RESUME 137
137 GOSUB 5:ON ERROR GOTO 30:CLS:ERASE X:SHELL "DIR "+DR$+"/W":GOSUB 5:DIM X(MXR,NEEDVARS):GOTO 110 ' *** MXC replaced ***
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID? ";ID$:GOTO 164
163 LINE INPUT"Problem ID (null = unchanged)? ";Z$:IF Z$>"" THEN ID$=Z$
164 RETURN
165 QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem: "ID$;CHR$(10)
180 RETURN
189 '◙*** Print Data ***◙   Needs X( , ) & NEEDVARS=1 or 2: if=1, then NS,N( ),KN( ,1) else VN$(1 & 2).
190 DO$="print all the data used":GOSUB 20:IF Z$="N" THEN 193
191 PRINT #2,STRING$(2,10)"DATA USED: ":IF NEEDVARS=1 THEN FOR J=1 TO NS:PRINT #2,"Sample "CHR$(J+64)":":FOR I=1 TO N(J):PRINT #2,X(I+KN(J-1),1);:NEXT I:PRINT #2,:NEXT J:GOTO 193
192 IF NEEDVARS=2 THEN GOSUB 210:PRINT #2,VN$(1)", & "VN$(2):FOR I=1 TO N:PRINT #2,X(I,1);X(I,2):NEXT I
193 PR=0:PRINT #2,:CLOSE:RETURN
199 '◙--- Show a Row of Data ---
200 PRINT"Row"STR$(I)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:RETURN
209 '◙--- Varnames ---
210 IF VN$="Y" THEN RETURN ELSE FOR J=1 TO M:IF J<10 THEN VN$(J)="Var #"+STR$(J) ELSE VN$(J)="Var #"+MID$(STR$(J),2)
211 NEXT J:RETURN
279 '◙--- Rank & Tie Corr Sub ---◙    Ranks input X(II,Q), II=1 to NN, Q= a constant (e.g. 0).◙    Returns ranks in RK(II), ave ranks if tied, & usually tie correction (TC).◙    Alters II, JJ, LK(II), SM, EQ, AR!, & KT.
280 ERASE RK,LK:DIM RK(NN),LK(NN):FOR II=1 TO NN:IF RK(II)>0 THEN 284 ELSE SM=0:EQ=0:FOR JJ=1 TO NN:IF X(JJ,Q)<X(II,Q) THEN SM=SM+1 ELSE IF X(JJ,Q)=X(II,Q) THEN EQ=EQ+1:RK(JJ)=-1
281 NEXT JJ:IF EQ<2 THEN RK(II)=SM+1:GOTO 284
282 AR!=SM+(EQ+1)/2:FOR JJ=II TO NN:IF RK(JJ)=-1 THEN RK(JJ)=AR!
283 NEXT JJ
284 NEXT II:IF NO.TC THEN RETURN
285 '  Tie Correction
286 TC=0:FOR II=1 TO NN-1:IF LK(II) THEN 288 ELSE KT=1:FOR JJ=II+1 TO NN:IF ABS(RK(II)-RK(JJ))<0.1 THEN KT=KT+1:LK(JJ)=1
287 NEXT JJ:IF KT>1 THEN TC=TC+KT*KT*KT-KT
288 NEXT II:RETURN  'can have "TC=TC/12" before RETURN.
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
349 '◙--- Number Sorter ---◙Convert numbers to sortable strings, then sort string array by:◙      DEF SEG: STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(n,x$(0))◙where n = no. of elements, & x$(0) = 1st element of string array (J. Dorner).
350 PRINT:INPUT"Maximum number of decimal places in your data (0-5)";NDP:IF NDP<0 OR NDP>5 THEN 350 ELSE I=NDP-(NDP>0)+(NDP=5):DP#=10.#^I    'DP enhanced if NDP=1-4 to ensure accurate estimates of medians
351 DEF FNNUM2STR$(X#,DP#,MXDIG%)=MID$("-0",(X#<0)+2,1)+RIGHT$(STRING$(MXDIG%,"0")+MID$(STR$(INT(X#*DP#)),2),MXDIG%)'◙    X=number, DP=dec factor, MXDIG=max digits/number (L. Rosenfelder)
352 DEC=10^(NDP+1):DEF FNROUND(X)=INT(X*DEC+0.5)/DEC  'Rounds to 1 dec more than in data entered.
353 DIM STRSORT%(33):RESTORE 354:FOR I=0 TO 33:READ STRSORT%(I):NEXT I:DEF SEG:STRSORT=VARPTR(STRSORT%(0)):RETURN
354 DATA &H5590,&HEC8B,&H1BA,&H8B00,&H876,&HC8B,&H7449,&H8B30
355 DATA &H676,&HDB33,&H1C8A,&H5646,&H8B51,&H37C,&H348B,&HCB8B
356 DATA &H5756,&HA6F3,&H5E5F,&HC7E,&HCB8B,&H58A,&H88A4,&HFF44
357 DATA &HF8E2,&HD233,&H5E59,&H4646,&HE246,&HBDC,&H74D2,&H5DC5
358 DATA &H4CA,&H0
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:Q$=CHR$(34):MXC=20
402 DIM I,J,K,L,M,N,Q,Z,X$,Y$,Z$,X#,CONST#,SM,EQ,AR,TC,KT,AV,CT,VN$(MXC),Q(MXC),N(2),KN(2),ED$(1)
403 P5=0.5:S$=SPACE$(6):F$="#####.###":ED$(0)="C#=Change, D#=Delete, X=Extra data, Null=Proceed":ED$(1)="C#=Change, Null=Proceed"
404 QB=1:CLS:Z$="M E N U   F O R   W I L C O X O N' S   T E S T S":GOSUB 46
405 LOCATE 3,8:PRINT"Press the NUMBER of your choice, and then press <ENTER> to run it.":PRINT STRING$(80,196)
406 LOCATE 6,1:K=10:PRINT"◙"TAB(K)"1   Wilcoxon's Sum of Ranks Test for 2 Independent Samples.◙◙"TAB(K)"2   Wilcoxon's Signed Ranks Test for 2 Matched Samples.◙◙"TAB(K)"3   Return to Main Menu."
407 PRINT:LOCATE ,8:INPUT"===>  Option (1-3) ";OP:ON OP GOTO 500,600,30:PRINT"No, please enter 1, 2, or 3":GOTO 407
499 '◙-------<<< Sum of Ranks >>>
500 QB=3:HD$=" W I L C O X O N' S   S U M   O F   R A N K S   T E S T ":VER$="(RL,6)":IF NEEDVARS=2 THEN NEEDVARS=1:GOTO 545
501 NEEDVARS=1:MXR=400:DIM X(MXR,1),Z$(MXR),RK(MXR),LK(MXR),SR(2),AV(2),XMED(2)
502 CLS:GOSUB 340:PRINT DAT$;TAB(42-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
503 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
504 PRINT TAB(K)"║                                                       ║"
505 PRINT TAB(K)"║    Compares MEDIANS of 2 INDEPENDENT sample groups.   ║"
506 PRINT TAB(K)"║  Min sample sizes = 3.  Max total measurements = 400. ║"
507 PRINT TAB(K)"║   Reads data of 1st sample, then data of 2nd sample.  ║"
508 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
509 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
510 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
511 PRINT TAB(K)"║                                                       ║"
512 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
513 '◙--- Get Data ---
514 NS=2:DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 520
515 '◙--- Disk Entry ---
516 QD=1:MNR=6:MNC=1:GOSUB 80
517 FOR Q=1 TO NS:PRINT"How many measurements belong to Sample "CHR$(Q+64);:INPUT N(Q):IF N(Q)<3 OR N(Q)>N-KN(Q-1)THEN GOSUB 40:GOTO 517
518 KN(Q)=KN(Q-1)+N(Q):NEXT Q:IF N=KN(Q-1) THEN 521 ELSE BEEP:PRINT"Hey, those sample sizes don't add up to"N:GOTO 517
519 '◙--- K/b Entry ---
520 PRINT"Ok, press <Enter> after each measurement.  Null entry duplicates previous value.Signal `end-of-each-sample' by entering a `/'."
521 CLOSE:Q=1:M=1
522 IF QD THEN 525
523 PRINT:PRINT"Sample "CHR$(Q+64)" ---"
524 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):IF N(Q)>2 THEN KN(Q)=N ELSE GOSUB 45:N=KN(Q-1):GOTO 524
525 PRINT:PRINT"Sample "CHR$(Q+64)" --- Data read was:"
526 L=1:FOR I=KN(Q-1)+1 TO KN(Q):PRINT TAB(L)"#"MID$(STR$(I-KN(Q-1)),2)"= "X(I,1);:L=L+16:IF L>65 THEN PRINT:L=1
527 IF I MOD 100 =0 THEN GOSUB 6
528 NEXT I:PRINT
529 '◙--- Edit ---
530 PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 541 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
531 IF LZ$="C" THEN 533 ELSE IF QD THEN 532 ELSE IF LZ$="D" THEN 536 ELSE IF LZ$="X" THEN 538
532 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid datum number.":GOTO 530 ELSE PRINT"WHAT?":GOTO 530
533 IF I<1 OR I>N(Q) THEN 532 ELSE I=I+KN(Q-1)
534 PRINT"Old value = "X(I,1)"     New value";:INPUT X$:IF X$="" THEN 530 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do it.":GOTO 534
535 NEXT L:X(I,1)=VAL(X$):IF X(I,1)<0 THEN NEG=1:GOTO 525 ELSE 525
536 IF I<1 OR I>N(Q) THEN 532 ELSE IF KN(Q)-KN(Q-1)<4 THEN GOSUB 45:GOTO 530 ELSE GOSUB 43:FOR L=I+KN(Q-1) TO N:X(L,1)=X(L+1,1):NEXT L:N(Q)=N(Q)-1:KN(Q)=KN(Q)-1:N=N-1
537 LOCATE ,1:PRINT"Ok, value #"I"deleted.":GOSUB 5:GOTO 525
538 IF N=MXR THEN PRINT"Total N is already maximum,"N;:GOTO 530
539 PRINT"You can append up to"MXR-N"extra measurements, 1 per line, with `/' end-signal:"
540 I=N+1:N=0:GOSUB 73:N(Q)=N-KN(Q-1):KN(Q)=N:GOTO 525
541 IF Q<NS THEN Q=Q+1:GOTO 522
542 '◙--- Calc ---
543 GOSUB 350:CLS:GOSUB 43:CONST#=0.#:IF NEG=0 THEN 545 ELSE FOR J=1 TO NS:FOR I=1 TO N(J):IF X(I+KN(J-1),1)<CONST# THEN CONST#=VAL(STR$(X(I+KN(J-1),1))) 'If neg, find smallest value (CONST)
544 NEXT I:NEXT J 'Next subtract CONST to make all data >= 0, so when converted to strings they will always sort correctly.  Add it back later to medians.
545 FOR J=1 TO NS:AV(J)=0:FOR I=1 TO N(J):AV(J)=AV(J)+X(I+KN(J-1),1):X#=VAL(STR$(X(I+KN(J-1),1)))-CONST#:Z$(I-1)=FNNUM2STR$(X#,DP#,8):NEXT I:AV(J)=FNROUND(AV(J)/N(J))
546 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(N(J),Z$(0))
547 XMED(J)=(VAL(Z$((N(J)-2)/2))+VAL(Z$((N(J)-1)/2)))/2/DP#+CONST#:XMED(J)=FNROUND(XMED(J)):NEXT J
548 Q=1:NN=N:GOSUB 280
549 FOR J=1 TO NS:FOR I=1+KN(J-1)TO KN(J):SR(J)=SR(J)+RK(I):NEXT I:SIR(J)=N(J)*(N+1)-SR(J):NEXT J
550 TOP=SR(1)-N(1)*(N+1)/2:BOT=N(1)*N(2)/12*(N+1):BOTC=N(1)*N(2)/12*(N*N*N-N-TC)/N/(N-1):ZU=TOP/SQR(BOT):ZC=TOP/SQR(BOTC):RB=2*(SR(1)/N(1)-SR(2)/N(2))/N
551 '◙--- Answer ---
552 CLS:GOSUB 160:PRINT #2,TAB(40-LEN(HD$)\2)HD$CHR$(10)
553 Q1=20:Q2=50:PRINT #2,TAB(Q1)"Sample A";TAB(Q2)"Sample B":PRINT #2,
554 PRINT #2,"1st 3 values were:";:FOR I=1 TO 3:PRINT #2,TAB(Q1)X(I,1);TAB(Q2);X(I+KN(1),1):NEXT I:PRINT #2,
555 PRINT #2,"Size (n):";TAB(Q1)N(1);TAB(Q2)N(2):PRINT #2,"Median:"TAB(Q1)XMED(1);TAB(Q2)XMED(2):PRINT #2,"Mean:";TAB(Q1)AV(1);TAB(Q2)AV(2)
556 PRINT #2,"Sum Ranks:";TAB(Q1)SR(1);TAB(Q2)SR(2):PRINT #2,"Sum Inverse Ranks:";TAB(Q1)SIR(1);TAB(Q2)SIR(2)
557 PRINT #2,:PRINT #2,"If n is beyond ranksum tables (e.g. Langley, `PRAC STATS', p 170), use:":PRINT #2,TAB(10);USING "Z ="+F$+" (Uncorrected)";ZU:PRINT #2,USING "    or   Z ="+F$+" (Corrected for ties)";ZC
558 PRINT #2,:PRINT #2,USING "Rank Biserial r ="+F$;RB
559 IF PR THEN GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 553
560 GOTO 10
599 '◙--------<<< Signed Ranks >>>
600 QB=4:HD$=" W I L C O X O N' S   S I G N E D   R A N K S   T E S T ":VER$="(RL,6)"
601 NEEDVARS=2:MXR=400:DIM X(MXR,2),LAB(MXR),Z$(MXR),RK(MXR),LK(MXR),XMED(2)
602 CLS:GOSUB 340:PRINT DAT$;TAB(42-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
603 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
604 PRINT TAB(K)"║                                                       ║"
605 PRINT TAB(K)"║     Compares MEDIANS of 2 MATCHED sample groups.      ║"
606 PRINT TAB(K)"║      Accepts 6-400 rows of paired measurements.       ║"
607 PRINT TAB(K)"║     Reads 1 matched pair per line in Free Format.     ║"
608 PRINT TAB(K)"║   Only simple editing if data comes from disk file.   ║"
609 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
610 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
611 PRINT TAB(K)"║                                                       ║"
612 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE,,1
613 '◙--- Get Data ---
614 DO$="enter data from disk":GOSUB 20:PRINT:IF Z$="N" THEN 618
615 '◙--- Disk Entry ---
616 QD=1:MNR=6:MNC=2:GOSUB 80:GOSUB 5:GOTO 619
617 '◙--- K/b Entry
618 PRINT"Ok, enter 6-400 paired values, 1 pair per line in Free Format, from keyboard.":I=1:M=2:Q=1:GOSUB 72
619 CLOSE:CLS:PRINT"Data read was:":FOR I=1 TO N:PRINT"Row #"MID$(STR$(I),2)": ";:FOR J=1 TO M:PRINT X(I,J);:NEXT J:PRINT:IF I MOD 20=0 THEN GOSUB 6
620 NEXT I:IF N<6 THEN PRINT"Not enough rows to analyse.  Will you add others";:GOSUB 21:IF Z$="N" THEN 2 ELSE 632
621 '◙--- Edit ---
622 PRINT:PRINT ED$(QD);:INPUT Z$:IF Z$="" THEN 634 ELSE LZ$=CHR$(ASC(Z$) AND 95):I=VAL(MID$(Z$,2))
623 IF LZ$="C" THEN 625 ELSE IF QD THEN 624 ELSE IF LZ$="D" THEN 630 ELSE IF LZ$="X" THEN 631
624 BEEP:IF QD=0 AND (LZ$="C" OR LZ$="D") THEN PRINT"C or D need a valid row number.":GOTO 622 ELSE PRINT"WHAT?":GOTO 622
625 IF I<1 OR I>N THEN 624 ELSE GOSUB 200
626 PRINT"Change which variable # (1 or 2)";:INPUT Z$:IF Z$="" THEN 622 ELSE J=VAL(Z$):IF J<1 OR J>M THEN BEEP:GOTO 626
627 PRINT"Old value = "X(I,J)"    New value";:INPUT X$:IF X$="" THEN 622 ELSE FOR L=1 TO LEN(X$):IF INSTR("-.0123456789",MID$(X$,L,1))=0 THEN PLAY"L16O3CEL4>B":PRINT"That contains a `non-numeric' entry.  Please re-do it.":GOTO 627
628 NEXT L:X(I,J)=VAL(X$):IF X(I,J)<0 THEN NEG=1
629 PRINT"New ";:GOSUB 200:GOSUB 5:GOTO 619
630 IF I<1 OR I>N OR N<7 THEN GOSUB 40:GOTO 622 ELSE N=N-1:FOR K=I TO N:FOR L=1 TO M:X(K,L)=X(K+1,L):NEXT L:NEXT K:PRINT"Ok, Row"I"Deleted.":GOSUB 5:GOTO 619
631 IF N=MXR THEN PRINT"No, you have maximum rows already.":GOTO 622
632 PRINT"Ok, you can add up to"MXR-N"extra rows in Free Format.":I=N+1:N=0:Q=1:GOSUB 72:GOTO 619
633 '◙--- Calc ---
634 GOSUB 350:CLS:COLOR 23,0:GOSUB 43:COLOR 7,0:Q=0:CONST#=0.#:IF NEG=0 THEN 637 ELSE FOR I=1 TO N:IF X(I,1)<CONST# THEN CONST#=VAL(STR$(X(I,1)))
635 IF X(I,2)<CONST# THEN CONST#=VAL(STR$(X(I,2)))
636 NEXT I
637 NNZD=N:FOR I=1 TO N
638 AX=AX+X(I,1):AY=AY+X(I,2):X(I,0)=X(I,1)-X(I,2):LAB(I)=SGN(X(I,0)):IF LAB(I)=0 THEN X(I,0)=1.000000e+3:NNZD=NNZD-1 ELSE X(I,0)=ABS(X(I,0))' X(I,0) holds abs diffs.
639 NEXT I:AX=FNROUND(AX/N):AY=FNROUND(AY/N)
640 FOR J=0 TO 2
641 FOR I=1 TO N:X#=VAL(STR$(X(I,J)))-CONST#:Z$(I-1)=FNNUM2STR$(X#,DP#,8):NEXT I
642 DEF SEG:STRSORT=VARPTR(STRSORT%(0)):CALL STRSORT(N,Z$(0))
643 IF J=0 THEN Q=0:NN=N:NO.TC=1:GOSUB 280:NN=NNZD:GOSUB 286:GOTO 645'This ranks abs diffs in X(I,0).
644 XMED(J)=(VAL(Z$((N-2)/2))+VAL(Z$((N-1)/2)))/2/DP#+CONST#:XMED(J)=FNROUND(XMED(J))
645 NEXT J
646 FOR I=1 TO N:IF LAB(I)<0 THEN SN=SN+RK(I) ELSE IF LAB(I)>0 THEN SP=SP+RK(I)
647 NEXT I
648 TOP=2*SP-NNZD*(NNZD+1)/2:BOT=NNZD*(NNZD+1)/6*(2*NNZD+1):BOTC=BOT-TC/12:ZU=TOP/SQR(BOT):ZC=TOP/SQR(BOTC):RB=2*TOP/NNZD/(NNZD+1) 'Welkowitz p 276
649 '◙--- Answers ---
650 CLS:GOSUB 160:PRINT TAB(40-LEN(HD$)\2)HD$CHR$(10)
651 Q1=20:Q2=50:PRINT #2,TAB(Q1)"Sample A";TAB(Q2)"Sample B":PRINT #2,
652 PRINT #2,"1st 3 pairs were:";:FOR I=1 TO 3:PRINT #2,TAB(Q1)X(I,1);TAB(Q2);X(I,2):NEXT I:PRINT #2,
653 PRINT #2,"Size (n):";TAB(Q1)N;TAB(Q2)N:PRINT #2,"Median:"TAB(Q1)XMED(1);TAB(Q2)XMED(2):PRINT #2,"Mean:";TAB(Q1)AX;TAB(Q2)AY
654 PRINT #2,"Sum of Pos Ranks"TAB(38)SP:PRINT #2,"Sum of Neg Ranks"TAB(38)SN
655 PRINT #2,"No. of non-zero differences (n)"TAB(38)NNZD
656 PRINT #2,:PRINT #2,"If n is beyond ranksum tables (e.g. Langley, `PRAC STATS', p 181), use:":PRINT #2,TAB(10);USING "Z ="+F$+" (Uncorrected)";ZU:PRINT #2,USING "    or   Z ="+F$+" (Corrected for ties)";ZC
657 PRINT #2,:PRINT #2,USING "Rank Biserial r ="+F$;RB
658 IF PR THEN GOSUB 190 ELSE GOSUB 161:IF PR THEN GOSUB 165:GOTO 651
659 IF N>200 THEN 10
660 DO$="try the Sum of Ranks Test on this data, in case the matching has turned out to be ineffective":GOSUB 20:IF Z$="N" THEN 10
661 CLS:COLOR 23,0:GOSUB 43:COLOR 7,0:FOR I=1 TO N:X(I+N,1)=X(I,2):NEXT I:QB=3:NS=2:M=1:N(1)=N:N(2)=N:KN(1)=N:KN(2)=2*N:N=KN(2):GOTO 500
662 END
```

## ZSCOR.BAS

```bas
1 '        STANDARD SCORES  ---  ZSCOR.BAS  ---  by  Dr Russell Langley
2 GOTO 400
4 '◙--- Press Enter ---
5 IF PR THEN RETURN ELSE PRINT TAB(40);:PRINT "Press <Enter> to continue.";:IN$=INKEY$:WHILE INKEY$<>CHR$(13):WEND:LOCATE,40:PRINT SPACE$(26):RETURN
6 PRINT TAB(14);:PRINT "Press <Enter> to continue, or `/' to end viewing.";:IN$=INKEY$:WHILE IN$<>CHR$(13) AND IN$<>"/":IN$=INKEY$:WEND:LOCATE,14:PRINT SPACE$(50):IF IN$="/" THEN I=N:RETURN ELSE RETURN
7 '◙*** Redirect to Block ***
9 ON QB GOTO 403,177 :STOP  '=start,printout.◙◙--- Another go? ---
10 CLOSE:IF HD$="" THEN LPRINT STRING$(79,61)STRING$(4,10)
11 DO$="run this program again now":GOSUB 20:IF Z$="Y" THEN 2 ELSE 30
19 '◙--- Yes/No? ---
20 PRINT:PRINT"Do you want to "+DO$;
21 INPUT" (Y/N)";Z$:IF Z$="" THEN Z$="N":RETURN ELSE Z$=CHR$(ASC(Z$) AND 95):IF Z$="Y" OR Z$="N" THEN RETURN ELSE PRINT"WHAT?  ";:GOTO 21
29 '◙--- Errors & End ---
30 IF ERR THEN BEEP ELSE RUN "MENU"
39 ON ERROR GOTO 0:END'◙◙--- Messages ---
43 COLOR 23,0:PRINT:PRINT"Working";:COLOR 7,0:RETURN
46 ZZ$=STRING$(37-LEN(Z$)\2,177):LOCATE 1,1:PRINT ZZ$"  ";:COLOR 15,0:PRINT Z$;:COLOR 7,0:PRINT"  "ZZ$:RETURN 'Display brightened Z$ at top of screen
159 '◙--- Show/Print Answers ---
160 PR=0:CLOSE:OPEN "SCRN:" FOR OUTPUT AS #2:QB=-(QB<>2)*QB-(QB=2)*QBB:RETURN
161 DO$="print these results":GOSUB 20:IF Z$="N" THEN PR=0:RETURN
162 PR=1:IF ID$="" THEN LINE INPUT "Problem ID or Variable Name? ";ID$
164 RETURN
165 QBB=QB:QB=2:CLS:LOCATE 8,1
166 PRINT TAB(12)"╔═══════════════════════════════════════════════════════╗"
167 PRINT TAB(12)"║                                                       ║"
168 PRINT TAB(12)"║                TURN  PRINTER  ON.                     ║"
169 PRINT TAB(12)"║                                                       ║"
170 PRINT TAB(12)"║    Then PRESS <ENTER> to start printing ..... or ..   ║"
171 PRINT TAB(12)"║                                                       ║"
172 PRINT TAB(12)"║    To send Printer Codes in Basic before printing,    ║"
173 PRINT TAB(12)"║    press <Ctrl-Break>, & start printing by GOTO 9.    ║"
174 PRINT TAB(12)"║                                                       ║"
175 PRINT TAB(12)"╚═══════════════════════════════════════════════════════╝":IN$=INKEY$
176 IN$=INKEY$:IF IN$<>CHR$(13) THEN 176
177 CLS:PRINT"Printing .....":LOCATE 4,1:CLOSE:OPEN "LPT1:" FOR OUTPUT AS #2
178 IF HD$>"" THEN PRINT #2,STRING$(79,61):PRINT #2,DAT$;TAB(42-LEN(HD$)\2);HD$;TAB(73)VER$:PRINT #2,STRING$(79,61):HD$=""
179 PRINT #2,CHR$(10)"Problem or Variable Name: "ID$;CHR$(10)
180 RETURN
339 '◙--- Date ---
340 DAT$=MID$(DATE$,4,2)+" "+MID$("JanFebMarAprMayJunJulAugSepOctNovDec",-2+3*VAL(LEFT$(DATE$,2)),3)+" "+RIGHT$(DATE$,4):RETURN
399 '◙--- Start ---
400 KEY OFF:CLEAR:SCREEN 0,0,0,0:CLS:ON ERROR GOTO 30
401 DEFINT I-N,Q:M=200
402 DIM X(M),Z(M)
403 QB=1:CLOSE:HD$=" S T A N D A R D    S C O R E S ":VER$="(RL,2)"
404 CLS:GOSUB 340:PRINT DAT$;TAB(40-LEN(HD$)\2);:COLOR 0,7:PRINT HD$;:COLOR 7,0:PRINT TAB(73)VER$:LOCATE 4,1,0:K=12
405 PRINT TAB(K)"╔═══════════════════════════════════════════════════════╗"
406 PRINT TAB(K)"║                                                       ║"
407 PRINT TAB(K)"║   This program converts up to 200 measurements (X),   ║"
408 PRINT TAB(K)"║   entered from the keyboard, into a corresponding     ║"
409 PRINT TAB(K)"║   set of Z scores, traditionally defined as:          ║"
410 PRINT TAB(K)"║                     X  -  XBAR                        ║"
411 PRINT TAB(K)"║             Z  =  --------------                      ║"
412 PRINT TAB(K)"║                         S                             ║"
413 PRINT TAB(K)"║   where the standard deviation (S) has divisor of n.  ║"
414 PRINT TAB(K)"║                                                       ║"
415 PRINT TAB(K)"║          Simple data corrections can be done.         ║"
416 PRINT TAB(K)"║       Printouts available after viewing answers.      ║"
417 PRINT TAB(K)"║         If trouble, try <Ctrl-Break> & GOTO 9.        ║"
418 PRINT TAB(K)"║                                                       ║"
419 PRINT TAB(K)"╚═══════════════════════════════════════════════════════╝":LOCATE ,,1:PRINT
420 '◙--- Get Data ---
421 PRINT USING"How many measurements (2-###), or '/' if used as End Signal";M;:INPUT Z$:IF Z$="/"THEN N=M ELSE N=VAL(Z$):IF N<2 OR N>M THEN BEEP:GOTO 421
422 PRINT:PRINT"Enter data, with each number on a new line (null repeats previous number):":I=0
423 I=I+1:IF I>N THEN 428
424 PRINT"#"I;:INPUT Z$:IF Z$="" THEN X(I)=X(I-1):LOCATE CSRLIN-1,POS(0)+9:PRINT"Ditto":GOTO 423
425 IF RIGHT$(Z$,1)<>"/" THEN X(I)=VAL(Z$):GOTO 423
426 Z$=LEFT$(Z$,LEN(Z$)-1):N=I+(LEN(Z$)=0):IF Z$>"" THEN X(I)=VAL(Z$)
427 '◙--- Show Data & Edit ---
428 CLS:PRINT"DATA READ WAS:":PRINT:FOR I=1 TO N:PRINT"#"MID$(STR$(I),2)"= "X(I),:IF I/50=INT(I/50) THEN GOSUB 6
429 NEXT I:PRINT
430 DO$="CHANGE any values":GOSUB 20:IF Z$="N" THEN 435
431 INPUT"Change which # ";Z$:IF Z$="" THEN 430 ELSE I=VAL(Z$):IF I<1 OR I>N THEN BEEP:PRINT"No, # must be 1 to"N:GOTO 431
432 PRINT"#"I"= "X(I)"   Correct Value = ";:INPUT X(I)
433 DO$="change another value":GOSUB 20:IF Z$="Y" THEN 431 ELSE 428
434 '◙--- Calculate & Show Results ---
435 GOSUB 43:FOR I=2 TO N:X=X(I)-X(1):S1=S1+X:S2=S2+X*X:NEXT I:AV=S1/N+X(1):S=SQR((S2-S1*S1/N)/N):FOR I=1 TO N:Z(I)=INT((X(I)-AV)/S*1000+0.5)/1000:NEXT I
436 CLS:GOSUB 160
437 PRINT #2,"XBAR ="AV,"S.D. ="S"  df & n ="N:GOSUB 5
438 PRINT#2,:PRINT #2, ,"X SCORES","Z SCORES":FOR I=1 TO N:PRINT #2,"#"I,X(I),Z(I):IF I MOD 20 = 0 THEN GOSUB 5
439 NEXT I
440 '◙--- Printout? ---
441 IF PR=0 THEN GOSUB 161:IF PR=1 THEN GOSUB 165:GOTO 437
442 GOSUB 160:GOTO 10
443 'end
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2671

     Volume in drive A has no label
     Directory of A:\

    PKXARC   COM     12242   4-27-87
    READTHIS BAT      1676   5-16-90   3:45p
    UNPACK-F BAT      2575   9-21-89   2:09p
    UNPACK-H BAT      1479   9-21-89   2:05p
    EZSTATS1 ARC    174854   5-16-90   4:03p
    EZSTATS2 ARC    126961   5-11-90  10:47a
    GO       BAT        38   7-23-91   2:37a
    GO       TXT       925   7-26-91   1:06a
            8 file(s)     320750 bytes
                           38912 bytes free
