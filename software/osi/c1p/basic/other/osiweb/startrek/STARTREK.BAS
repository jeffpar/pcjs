10 REM EXPANDED APRIL 1977 BY W.A. BURTON
20 REM PIRATED JAN. 1978 BY ZOSO
21 DEF FNA1(X)=INT(.5+A1+X*COS(C1*CX))
22 DEF FNB1(X)=INT(.5+B1+X*SIN(C1*CX))
30 DIM G(8,8),S(8,8),K(3,3)
50 GOSUB 5470
60 PRINT
70 INPUT "What is your security clearance number (1 TO 1000)",T9
80 E8=T9
90 IF (T9<1) OR (T9>1000) THEN PRINT AR$;"INVALID!! REENTER!!":GOTO 70
100 FOR A=1 TO T9/2
110 R9=RND(1):R9=RND(2)
120 NEXT A
130 INPUT"       Enter rank     (1=Low,12=High)",R9
140 IF (R9<1) OR (R9>12) THEN GOTO 130:RR=R9
150 X4=R9:R9=R9+1E-03:W1=W1+1E-03
170 PRINT "Command order : STAND BY !"
180 PRINT "You are presently being assigned to a mission..."
190 PRINT " with a failure factor of "; (RR*20)
200 PRINT"       Good-bye, Captain..."
210 CX=.017453:AR$=" ---> "
220 XA=INT(X4*50):AC=(1/(X4+.1))
230 IF X4>=9 THEN 3800
240 E=3000-XA+100:P=10:S9=200
250 DEF FND(D)=SQR((K(I,1)-S1)^2+(K(I,2)-S2)^2)
260 Q1=INT(RND(1)*8+1):Q2=INT(RND(1)*8+1)
270 S1=INT(RND(1)*8+1):S2=INT(RND(1)*8+1)
280 DATA "Warp Engines","Short Range Sensors","Long Range Sensors"
290 DATA "Phasers", "Photon Torpedoes","Shield Control"
300 DATA "Damage Control", "Computer","Damage Repair","Communications"
310 FOR A=1 TO 10:READ D$(A):NEXT A
320 A$(0)=" . ":A$(1)=" E ":A$(2)=" * ":A$(3)=" K ":A$(4)=" B "
330 F1=.86:F2=.01:F3=.95:F4=.99:K9=0:B9=K9
340 FOR I=1 TO 8:FOR J=1 TO 8:R1=RND(1):R2=RND(1):R3=INT(8*RND(1)+1)
350 K3=-(R1>F1-F2*R9)-(R1>F3-F2*R9)-(R1>F4-F2*R9):K9=K9+K3
360 B3=-(R2>F3):B9=B9+B3:G(I,J)=100*K3+10*B3+R3:NEXT J: NEXT I
370 IF NOT((B9>0) AND (K9>0))THEN 330
380 PRINT"Objective: Destroy ";K9;" Klingons using ";B9;" starbase";
390 U=K9:Y=B9
400 IF B9=1 THEN PRINT" ";:GOTO 420
410 PRINT"s ";
420 T9=K9+RND(1)*K9/R9+10-R9:PR=T9/K9:PRINT"in ";T9;" stardays."
430 GOSUB 4270
440 S3=0:B3=S3:K3=B3:FOR A=1 TO 8:FOR B=1 TO 8:S(A,B)=0:NEXT B: NEXT A
450 FOR A=1 TO 3:FOR B=1 TO 3:K(A,B)=0:NEXT B:NEXT A:S(S1,S2)=1
460 X=.01*G(Q1,Q2):K3=INT(X):Y=(X-K3)*10:B3=INT(Y)
470 S3=G(Q1,Q2)-100*K3-10*B3
480 IF K3=0 THEN FOR A=1 TO 3:FOR B=1 TO 3:K(A,B)=0:NEXT B:NEXT A:GOTO 520
490 PRINT AR$;"CONDITION RED !!!!!":FOR A=1 TO K3
500 R1=INT(RND(1)*8+1):R2=INT(RND(1)*8+1):IF S(R1,R2)<>0 THEN 500
510 S(R1,R2)=3:K(A,1)=R1:K(A,2)=R2:K(A,3)=S9:NEXT A:IF B3=0 THEN 550
520 IF B3=0 THEN 550
530 R1=INT(RND(1)*8+1):R2=INT(RND(1)*8+1):IF S(R1,R2)<>0 THEN 530
540 S(R1,R2)=4
550 IF S3=0 THEN 590
560 FOR A=1 TO S3
570 R1=INT(RND(1)*8+1):R2=INT(RND(1)*8+1):IF S(R1,R2)<>0 THEN 570
580 S(R1,R2)=2:NEXT A
590 G(Q1,Q2)=INT(G(Q1,Q2))+.5
600 PRINT
610 PRINT"QUADRANT (";Q1;",";Q2;")"
620 PRINT"SECTOR   (";S1;",";S2;")"
630 IF KP<>0 THEN 4060
640 IF DT=1 THEN 2680
650 IF S<200*K3 THEN PRINT AR$;"Shield Energy too low":SL=1:A=6:GOTO 750
660 A=2: GOTO 750
670 PRINT
680 PRINT D$(2):FOR A=1 TO 8:FOR B=1 TO 8:PRINT A$(S(A,B));:NEXT B:PRINT:NEXT A
690 PRINT:PRINT"Shields ";S;SPC(4);" Energy ";E;SPC(4);" Photons ";P;
700 PRINT SPC(4);" Stardays ";T9-T
710 GOSUB 3220:INPUT"Command",A
720 IF (A>10) OR (A<0) THEN INPUT" ----> COMMAND",A
730 IF (A>10) OR (A<0) THEN PRINT"WARNING - PROPER COMMANDS ONLY !! ":GOTO 710
740 IF A=1 THEN 780
750 IF D(A)>=0 THEN 780
760 PRINT AR$;"Captain, we don't have ";D$(A);" anymore."
770 IF DT=1 THEN 2680 ELSE 710
780 ON A GOTO 820,670,1470,1530,1790,2140,2230,2680,4910,3910
790 PRINT:FOR A=1 TO 9:PRINT A;" = ";D$(A):NEXT A
800 A=10
810 PRINT A;"= ";D$(A):GOTO 710
820 INPUT"COURSE",C1:IF (C1<0) OR (C1>359.99) THEN 850
830 INPUT"WARP FACTOR",W1
840 SL=0:KP=0:GOTO 860
850 PRINT AR$"REJECTED ! Course must be in range of o to 359.99 degrees."
860 IF NOT(W1>0)THEN 710
870 IF (D(1)>=0) OR (W1<=AC) THEN 900
880 PRINT AR$;"Warp Engines are damaged, maximum speed = ";AC
890 GOTO 820
900 TEC=TEC+1:C$="":IF K3>0 THEN GOSUB 2290
910 IF E>5*W1 THEN 980
920 IF S<1 THEN 2450
930 PRINT"Captain, you only have ";E;" units of energy. "
940 PRINT"Refuel from your Shield reserves, which have ";S;" units";
950 Q9$="NO":INPUT " ",Q9$:IF (Q9$="Y") OR (Q9$="YES") THEN GOSUB 6860
960 A=6:IF D(A)<0 THEN 2450
970 GOTO 710
980 FOR I=1 TO 10:IF D(I)>=0 THEN 1020
990 D(I)=D(I)+1:IF D(I)<0 THEN 1020
1000 IF D(7)<0 THEN 1020
1010 PRINT"Damage Control report: ";D$(I);" repaired."
1020 NEXT I:IF RND(1)>.1 THEN 1130
1030 IF RND(1)>.1 THEN 1130
1040 GOTO 1100
1050 IF RND(1)>R9/10 THEN RETURN
1060 R1=INT(RND(1)*8+1):IF D(R1)<0 THEN RETURN
1070 D(R1)=D(R1)-10*RND(1)-1:IF D(7)<0 THEN RETURN
1080 IF D(7)<0 THEN RETURN
1090 PRINT:PRINT"Damage Control report: ";D$(R1);" out.":PRINT:RETURN
1100 R1=INT(RND(1)*8+1):IF D(R1)>=0 THEN 1130
1110 IF D(7)<0 THEN 1130
1120 PRINT:D(R1)=0:PRINT"Damage Control report: ";D$(R1);" repaired.":PRINT
1130 W1=W1*8:A1=8*Q2+S2-9:B1=72-8*Q1-S1:IF W1<1 THEN W1=W1*1.25
1140 E=E-2*W1:T=T+W1/25:IF T>T9 THEN 2520
1150 A2=INT(A1+W1*COS(C1*CX)+.5)
1160 B2=INT(B1+W1*SIN(C1*CX)+.5)
1170 IF NOT((A2<0) OR (A2>63) OR (B2<0) OR (B2>63))THEN 1200
1180 PRINT AR$;"Captain, heed Starfleet regulations! ( STAY IN GALAXY ) !!"
1190 T=T+W1/24:GOTO 710
1200 REM DEF FNA1(X)=INT(.5+A1+X*COS(C1*CX))
1210 REM DEF FNB1(X)=INT(.5+B1+X*SIN(C1*CX))
1220 FOR X=0 TO INT(W1)
1230 IF NOT(Q1=8-INT(FNB1(X)/8)AND Q2=INT(FNA1(X)/8+1))THEN X=W1:GOTO 1400
1240 S3=8-FNB1(X)+8*INT(FNB1(X)/8):S4=FNA1(X)+1-8*INT(FNA1(X)/8)
1250 IF S(S3,S4)<2 THEN 1400
1260 S(S1,S2)=0:S1=8-FNB1(X-1)+8*INT(FNB1(X-1)/8)
1270 S2=FNA1(X-1)+1-8*INT(FNA1(X-1)/8):S(S1,S2)=1: rem don't know about -1 !!
1280 PRINT AR$;"Navigational error :Engines shut down at (";
1290 PRINT S1;","S2;")"
1300 T=T+(W1/24)
1310 PRINT" You lost ";T;" units startime restarting engines."
1320 PRINT
1330 IF S(S3,S4)<>4 THEN 710
1340 PRINT"Shields lowered for refueling"
1350 S=0:P=10:C$="D":E=3000-XA+100
1360 GOSUB 2290
1370 FOR R1=1 TO 10
1380 IF D(R1)>=0 THEN NEXT R1:GOTO 710
1390 D(R1)=D(R1)+(11*RND(1)/R9):NEXT R1:GOTO 710
1400 NEXT X:S(S1,S2)=0:S1=8-B2+8*INT(B2/8):S2=A2+1-8*INT(A2/8)
1410 Q3=8-INT(B2/8):Q4=INT(A2/8)+1
1420 IF NOT((Q1=Q3) AND (Q2=Q4))THEN Q1=Q3:Q2=Q4:GOTO 440
1430 S(S1,S2)=1:FOR A=S1-1 TO S1+1:FOR B=S2-1 TO S2+1
1440 IF (A>8) OR (B>8) OR (A<1) OR (B<1) THEN 1460
1450 IF S(A,B)=4 THEN 1340
1460 NEXT B: NEXT A:GOTO 710
1470 PRINT
1480 FOR A=(Q1-1) TO (Q1+1):FOR B=(Q2-1) TO (Q2+1)
1490 IF (A<1) OR (B<1) OR (A>8) OR (B>8) THEN PRINT" ***";:GOTO 1520
1500 G$ = STR$(G(A, B)): IF G(A, B) < 100 THEN G$="0"+G$
1510 IF G(A, B) < 10 THEN G$="0"+G$
1515 PRINT " ";LEFT$(G$, 3);
1520 G(A, B)=INT(G(A, B))+0.5: NEXT B:PRINT:NEXT A:GOTO 710
1530 PRINT
1540 IF K3<=0 THEN 2270
1550 IF D(8)>=0 THEN 1570
1560 PRINT AR$;" Computer failure hampers accuracy"
1570 PRINT"Phasers locked on target.  Energy available=";E;
1580 PRINT": Number of units to fire:";
1590 INPUT X
1600 IF E-X<0 THEN PRINT"NOT ENOUGH POWER":GOTO 710
1610 T=T+.05:IF T>T9 THEN 2520
1620 E=E-X
1630 IF C$<>"D"THEN GOSUB 2290
1640 IF D(8)>=0 THEN 1660
1650 X=X*RND(1)
1660 FOR I=1 TO 3
1670 IF K(I,3)<=0 THEN 1770
1680 H=(X/FND(0))+SGN(RND(1)-.5)*8*RND(1)
1690 K(I,3)=K(I,3)-H
1700 PRINT H;" Unit hit on vessel at (";K(I,1);
1710 PRINT K(I,2);"), leaving ";K(I,3)
1720 IF K(I,3)>0 THEN 1770
1730 PRINT"Klingon at (";K(I,1);",";K(I,2);
1740 PRINT") destroyed":K3=K3-1:K9=K9-1:IF K9=0 THEN 2650
1750 G(Q1,Q2)=G(Q1,Q2)-100:S(K(I,1),K(I,2))=0:K(I,1)=0:K(I,2)=0
1760 K(I,3)=0
1770 NEXT I
1780 GOTO 710
1790 PRINT
1800 IF P>0 THEN 1830
1810 PRINT AR$;"All Photon Torpedoes expended"
1820 GOTO 710
1830 INPUT"DIRECTION",C1
1840 T=T+.05:IF T>T9 THEN 2520
1850 P=P-1:IF C$<>"D" THEN GOSUB 2290
1860 A1=8*Q2+S2-9:B1=72-8*Q1-S1:IF C1=90*INT(C1/90)THEN 2090
1870 REM DEF FNA1(W1)=INT(.5+A1+W1*COS(C1*CX))
1880 REM DEF FNB1(W1)=INT(.5+B1+W1*SIN(C1*CX))
1890 FOR W1=0 TO 10 STEP .9
1900 IF W1=0 THEN S3=S1:S4=S2:GOTO 1950
1910 IF NOT(Q1=8-INT(FNB1(W1)/8)AND Q2=INT(FNA1(W1)/8+1))THEN 710
1920 S3=8-FNB1(W1)+8*INT(FNB1(W1)/8):S4=FNA1(W1)+1-8*INT(FNA1(W1)/8)
1930 IF (FNA1(W1)=A2) AND (FNB1(W1)=B2) THEN 2070
1940 A2=FNA1(W1):B2=FNB1(W1)
1950 PRINT"(";S3;",";S4;")";A$(S(S3,S4))
1960 ON S(S3,S4)+1 GOTO 2070,2070,2050,1970,2040
1970 IF RND(1)<(.1*X4) THEN PRINT"Shields deflect Torpedo":GOTO 710
1980 PRINT"Klingon destroyed":S(S3,S4)=0:G(Q1,Q2)=G(Q1,Q2)-100
1990 K3=K3-1:K9=K9-1:IF K9=0 THEN 2650
2000 FOR A=1 TO 3
2010 IF (K(A,1)=S3) AND (K(A,2)=S4) THEN K(A,1)=0:K(A,2)=0:K(A,3)=0
2020 NEXT A
2030 GOTO 710
2040 PRINT AR$;"Starbase destroyed":B3=0:B9=B9-1:S(S3,S4)=0:GOTO 2060
2050 PRINT AR$;"You can't destroy a star":GOTO 710
2060 G(Q1,Q2)=G(Q1,Q2)-10:GOTO 710
2070 NEXT W1
2080 GOTO 710
2090 FOR W1=0 TO 8
2100 S3=INT(S1-W1*SIN(C1*CX))
2110 S4=INT(S2+W1*COS(C1*CX))
2120 IF (S3>8) OR (S4>8) OR (S3<1) OR (S4<1) THEN 710
2130 GOTO 1950
2140 PRINT
2150 PRINT"Energy available=";E+S;": Number of units to Shields";
2160 INPUT X
2170 IF X<0 THEN 710
2180 IF E+S-X<0 THEN 2150
2190 E=E+S-X
2200 S=X
2210 IF SL=1 THEN 660
2220 GOTO 710
2230 PRINT
2240 PRINT"DEVICE              STATE OF REPAIR"
2250 FOR R1=1 TO 10:PRINT D$(R1);TAB(21);D(R1):NEXT R1
2260 IF DT=1 THEN 2680 ELSE 710
2270 PRINT"Short Range Sensors report no Klingons in this quadrant"
2280 IF DT=1 THEN 2680 ELSE 710
2290 IF (C$="D") AND (K3<>0) THEN PRINT"Starbase protects Enterprise" ELSE 2310
2300 GOTO 710
2310 PRINT
2320 FOR I=1 TO 3
2330 IF K(I,3)<=0 THEN 2430
2340 H=K(I,3)/FND(0)+SGN(RND(1)-.5)*RND(1)*7
2350 S=S-H:PRINT H;" Unit hit from (";K(I,1);",";
2360 PRINT K(I,2);"), leaving ";S
2370 IF S<0 THEN 2550
2380 GOSUB 1050
2390 IF RND(1)>R9/10 THEN 2430
2400 R1=INT(8*RND(1)+1):R2=INT(8*RND(1)+1)
2410 IF NOT(S(R1,R2)=0)THEN 2400
2420 S(R1,R2)=3:S(K(I,1),K(I,2))=0:K(I,1)=R1:K(I,2)=R2
2430 NEXT I
2440 RETURN
2450 PRINT AR$;" Enterprise dead in space"
2460 PRINT
2470 CY=1:PRINT:GOTO 2590
2480 IF K3<=0 THEN 2590
2490 GOSUB 2290
2500 GOTO 2480
2510 PRINT
2520 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT AR$;
2530 PRINT"It is stardate"T:PRINT
2540 GOTO 2590
2550 PRINT
2560 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT AR$;
2570 PRINT"Enterprise disabled !!":PRINT:PRINT
2580 CY=0
2590 PRINT"There are ";K9;" Klingons remaining.":IF CY<>0 THEN 3560
2600 PRINT"You have failed !!":PRINT
2610 L=INT(RND(1)*5)
2620 ON L+1 GOTO 3440,3470,3490,3510,3540
2630 PRINT:INPUT"Do you want to try again",X$
2640 IF LEFT$(X$,1)="Y" THEN 130 ELSE 5430
2650 PRINT"The Federation is saved !!"
2660 PRINT"You are hereby promoted to Admiral!!!!":PRINT
2670 GOTO 2630
2680 DT=1
2690 INPUT"Computer on--COMMAND",A: IF A=0 THEN GOTO 2720
2700 IF (A<0) OR (A>=10) THEN PRINT AR$;" NO SUCH COMMAND !!":GOTO 2690
2710 ON A GOTO 2900,2950,3000,2840,600,3400,3420,5120,710
2720 PRINT"FUNCTIONS AVAILABLE FROM COMPUTER"
2730 PRINT"   1 = Galactic Memory Map"
2740 PRINT"   2 = General Status Report"
2750 PRINT"   3 = Photon Trajectory"
2760 PRINT"   4 = New Mission"
2770 PRINT"   5 = Present Position"
2780 PRINT"   6 = Self-Destruct"
2790 PRINT"   7 = Warp-Compass"
2800 PRINT"   8 = Mission Progress Report"
2810 PRINT"   9 = Exit Computer"
2820 GOTO 2680
2830 PRINT:PRINT"--TEMPORARY MALFUNCTION--":GOTO 710
2840 IF XM<0 THEN 2880
2850 PRINT AR$;"Safety check -- Do you wish to abort mission":INPUT AN$
2860 IF LEFT$(AN$,1)<>"Y" THEN 2890 ELSE 130
2870 PRINT
2880 PRINT"You have not been authorized for new mission !!":PRINT
2890 GOTO 2680
2900 PRINT"QUADRANT CODE MEMORY MAP"
2910 FOR A=1 TO 8:FOR B=1 TO 8:IF G(A,B)=INT(G(A,B))THEN PRINT" ???";:GOTO 2940
2920 G$ = STR$(G(A, B)): IF G(A, B) < 100 THEN G$="0"+G$
2930 IF G(A, B) < 10 THEN G$="0"+G$
2935 PRINT " ";LEFT$(G$, 3);
2940 NEXT B:PRINT" ":NEXT A:GOTO 2680
2950 PRINT"   STATUS REPORT"
2960 PRINT"Number of Klingons left =";K9
2970 PRINT"Number of stardates left =";T9-T
2980 PRINT"Number of Starbases left =";B9
2990 A=7:GOTO 750
3000 IF K3=0 THEN 2270
3010 IF D(2)<0 THEN A=2:GOTO 740
3020 PRINT"COORD","LOWDIR","HIGHDIR","DIST"
3030 FOR A=1 TO 47:PRINT"-";:NEXT A
3040 PRINT
3050 FOR I=0 TO 3
3060 IF NOT(K(I,3)>0)THEN 3190
3070 W1=SQR((S1-K(I,1))^2+(S2-K(I,2))^2)
3080 IF W1=0 THEN PRINT"--->MALFUNCTION !":GOTO 710
3090 ON ERROR GOTO 2830
3100 C1=1.5708-ATN((K(I,2)-S2)/W1/SQR(1-((K(I,2)-S2)/W1)^2))
3110 ON ERROR GOTO 2830
3120 C1=C1*SGN(S1-K(I,1))/CX
3130 C2(I)=C1-(10*RND(1))
3140 C3(I)=C1+(10*RND(1))
3150 IF C3(I)<0 THEN C3(I)=C3(I)+360
3160 IF C2(I)<0 THEN C2(I)=C2(I)+360
3170 PRINT"(";K(I,1);",";K(I,2);
3180 PRINT")",C2(I),C3(I),W1
3190 NEXT I
3200 IF DT=1 THEN 2680 ELSE 710
3210 RETURN
3220 MR=(T9-T)/K9:DT=0
3230 XM=((MR-PR)/PR)*100
3240 IF KA=1 THEN PRINT TK-T;" stardates left to save Starbase.":GOTO 3330
3250 IF (RND(1)>.01*R9) OR (B9=0) THEN RETURN
3260 KA=1:FOR A=1 TO 8:FOR B=1 TO 8
3270 IF G(A,B)-100*INT(G(A,B)/100)>9 THEN K1=A:K2=B:IF RND(1)>.5 THEN A=8:B=8
3280 NEXT B: NEXT A:TK=T+.09*SQR((Q1-K1)^2+(Q2-K2)^2)*(10-R9)
3290 TK=TK+1
3300 PRINT AR$;"!!! Starbase in quadrant (";K1;",";
3310 PRINT K2;") is under attack!!"
3320 PRINT"You have ";TK-T;" stardates to save it!";:RETURN
3330 IF T<TK THEN 3380
3340 PRINT"Too late!":KA=0:G(K1,K2)=G(K1,K2)-10:B9=B9-1
3350 IF NOT((Q1=K1) AND (Q2=K2))THEN RETURN
3360 FOR A=1 TO 8:FOR B=1 TO 8:IF S(A,B)=4 THEN S(A,B)=0
3370 NEXT B: NEXT A:RETURN
3380 IF (Q1=K1) AND (Q2=K2) THEN PRINT"You arrived in time! Starbase saved!"
3390 KA=0:GOTO 710
3400 IF SD<>1 THEN 4230 ELSE 5320
3410 GOTO 710
3420 GOSUB 3660
3430 GOTO 2680
3440 PRINT"You have screwed up once too often !"
3450 PRINT"Off to the Vulcan torture camps !!"
3460 IF T<= 0 THEN 2630 ELSE 3560
3470 PRINT"You will be executed at sunrise"
3480 GOTO 3560
3490 PRINT"You will be put to death for your incompetence"
3500 GOTO 3560
3510 PRINT"You will be confined to your quarters until"
3520 PRINT"Vulcan's moons become tourist traps !!"
3530 IF T<=0 THEN 2630 ELSE 3560
3540 PRINT"Imbecile !! We hope you consider suicide!"
3550 IF T<=0 THEN 2630 ELSE 3560
3560 L=(U-K9)*10+((U-K9)*500/T)-100*(Y-B9)
3570 IF (E<=0) OR (S<0) THEN L=L-200
3580 IF K9=0 THEN L=L+(R9*100)
3590 PRINT:PRINT
3600 PRINT"Your mission rating is: ";L
3610 PRINT:PRINT:PRINT:PRINT:PRINT
3620 GOSUB 5450
3640 GOTO 5460
3650 GOTO 2630
3660 PRINT
3670 PRINT"             O9O"
3680 PRINT"  135         .        O45"
3690 PRINT"       .      .      ."
3700 PRINT"          .   .   ."
3710 PRINT"18O .  .  .   E   .  .  .OOO       WARP-COMPASS"
3720 PRINT"          .   .   ."
3730 PRINT"       .      .      ."
3740 PRINT"  225         .        315"
3750 PRINT"             27O"
3760 PRINT
3770 RETURN
3780 XX=INT(RND(2)*10)+1
3790 RETURN
3800 PRINT:IF X4>12 THEN 3900
3810 PRINT"Command Central advises that your ranking-";X4;"-is in the expert"
3820 PRINT"category. Be advised that if you are not properly qualified"
3830 PRINT"your chances of avoiding failure are nil."
3840 PRINT
3850 PRINT"Do you wish reassignment to a less hazardous mission (Y or N)"
3860 INPUT AN$
3870 IF LEFT$(AN$,1)="Y"THEN 130
3880 IF LEFT$(AN$,1)="y" THEN 130
3890 GOTO 240
3900 PRINT"You have requested a suicide mission":GOTO 3840
3910 PRINT"--COMMUNICATIONS ACTIVE--"
3920 PRINT
3930 GOSUB 3780
3940 PD=XX
3950 GOSUB 3780
3960 PE=XX
3970 GOSUB 3780
3980 PF=XX
3990 GOSUB 3780
4000 PG=XX
4010 PH=PD*10+PE
4020 PJ=PF*10+PG
4030 IF PH=PJ THEN 2830
4040 KP=1:IF (PD=PE) OR (PF=PG) THEN 4050 ELSE 4070
4050 PRINT"Sunspots block transmission at : ":GOTO 610
4060 PRINT"Move elsewhere and try again":PRINT:GOTO 820
4070 PRINT"Authorized frequencies":PRINT
4080 PRINT"Federation Command Base = ";PH
4090 PRINT"Klingon Command Central = ";PJ
4100 PRINT
4110 INPUT"Communication on channel",XF
4120 IF XF=PH THEN 4340
4130 IF XF=PJ THEN 4630
4140 PRINT
4150 PRINT AR$;"ALERT !!"
4160 PRINT"Attempted communication on unauthorized frequency"
4170 PRINT
4180 PRINT"While security check is conducted on enterprise"
4190 GOSUB 3780:A=XX
4200 GOSUB 3780:I=(XX/2)+(X4/7)
4210 PRINT"Your ";D$(A);" will be inoperative for ";I;" units of startime"
4220 D(A)=D(A)-I:GOTO 710
4230 PRINT
4240 PRINT"Security Control advises that no authorization has been"
4250 PRINT"given to activate Self- Destruct system."
4260 PRINT"Proceed with assigned mission":PRINT:GOTO 2690
4270 PRINT
4280 PRINT"Be advised, your mission progress factor is ";PR
4290 GOSUB 3780
4300 TF=(XX*X4)/1.6:IF TF<10 THEN TF=TF+10
4310 PRINT" The tolerance factor for this mission is [+/-] ";TF;" percent"
4320 PRINT
4330 RETURN
4340 ON SGN(XM)+2 GOTO 4350,4390,4410
4350 IF ABS(XM)>(TF*1.5)THEN 4470
4360 IF ABS(XM)>TF THEN 4440
4370 PRINT:PRINT"Captain, you are behind schedule - Let's go !!"
4380 GOTO 710
4390 PRINT:PRINT"You are exactly on computed schedule; Proceed with mission"
4400 GOTO 710
4410 IF XM>TF THEN 4560:IF XM>(TF*1.5)THEN 4590
4420 PRINT:PRINT"You are ahead of computed schedule, keep up the good work !!"
4430 GOTO 710
4440 PRINT:PRINT"You are behind schedule and out of tolerance factor !!"
4450 PRINT"Command Control projects failure...you may surrender to enemy"
4460 EQ=1:SD=1:GOTO 3910
4470 YY=AC^X4
4490 PRINT AR$;"---------COMPUTER PROJECTION----------":PRINT
4500 PRINT"Projected likelihood of success for your mission =";YY;"percent"
4510 PRINT"We have auto activated Self-Destruct system on your vessel"
4520 PRINT"Goodbye, Captain.............":PRINT
4530 PRINT"End of message from Federation Command":PRINT:PRINT
4540 GOSUB 5450
4550 GOTO 5320
4560 PRINT:PRINT"You are ahead of schedule and beyond tolerance factor"
4570 PRINT"Call Klingon leaders and request their surrender":KQ=1
4580 PRINT:GOTO 3910
4590 PRINT AR$;"Message from Command base"
4600 PRINT:PRINT"Enemy has surrendered to Federation Command !!"
4610 PRINT:PRINT:PRINT:PRINT
4620 GOTO 2650
4630 IF KQ=1 THEN 4880:IF EQ=1 THEN 4660
4640 ON SGN(XM)+2 GOTO 4650,4710,4760
4650 IF ABS(XM)<=TF THEN 4710
4660 PRINT:PRINT"Klingon command on frequency"
4670 PRINT"Naturally, we are pleased that you are conceding, Captain"
4680 PRINT"We are presently boarding your craft"
4690 PRINT:PRINT"Here is a message from your leaders-":PRINT:GOSUB 5450
4700 GOTO 2610
4710 GOSUB 3780
4720 IF XX<=5 THEN 4750
4730 PRINT:PRINT"Message from Klingon Command...."
4740 PRINT"Eat Phaser Death, Federation dogs!!":GOTO 4840
4750 PRINT:PRINT"We'll talk with our weapons, Earth-swine !!":GOTO 4840
4760 GOSUB 3780
4770 AQ=INT((XX+1)/2)
4780 ON AQ GOTO 4730,4750,4790,4790,4760
4790 GF=TF*1.5
4800 IF XM>GF THEN 4880
4810 IF XM>TF THEN 4850
4820 PRINT:PRINT"Captain, despite your slight advantage, you are no match for"
4830 PRINT"the glorious Klingon Fleet"
4840 PRINT TAB(25);"End of message from Klingon Command":GOTO 710
4850 GOSUB 3780
4860 IF XX<=5 THEN PRINT" Klingon command to Enterprise..":GOTO 4750
4870 GOTO 4890
4880 REM PRINT CHR$(26)
4890 PRINT:PRINT"Message from Klingon leaders..."
4900 PRINT:PRINT"We concede the war, Sir, congratulations !!":GOTO 3610
4910 AV=INT(X4/2)+1:DR=-1
4920 IF TEC<AV THEN 4940
4930 IF C$<>"D" THEN 4980 ELSE 5000
4940 AU=AV-TEC:IF AU=1 THEN KF$=""ELSE KF$="s"
4950 PRINT:PRINT"Damage Repair inactive !!"
4960 PRINT"Requires ";AU;" more recharge unit ";KF$
4970 PRINT:GOTO 710
4980 PRINT:PRINT AR$;"You must be docked at Starbase for Damage Repair !!"
4990 PRINT:GOTO 710
5000 PRINT
5010 PRINT:FOR A=1 TO 10
5020 IF D(A)<0 THEN PRINT TAB(10)A;TAB(20)D$(A);TAB(40)"damaged"
5030 NEXT A
5040 PRINT:PRINT"If no damage indicated above, answer with 0 (ZERO)"
5050 INPUT "Which one to repair",A
5060 IF (A<1) OR (A>10) THEN PRINT AR$;:GOTO 710
5070 IF D(A)<0 THEN 5090
5080 PRINT:PRINT D$(A);"        not damaged !!":GOTO 5050
5090 PRINT:PRINT TAB(20)D$(A);"-- repaired":PRINT
5100 D(A)=0:TEC=0:GOTO 710
5110 PRINT:PRINT AR$;"Nothing damaged at present":GOTO 710
5120 PRINT
5130 GOSUB 4310
5140 PRINT"Initial mission progress factor was ";PR
5150 PRINT"Current mission progress factor is  ";MR
5160 IF XM<0 THEN PW$=" worsened "ELSE PW$=" improved "
5170 PRINT
5180 PRINT"Your combat situation has ";PW$;" by a factor of ";XM;" percent"
5190 IF ABS(XM)>=TF THEN EG$=" not "ELSE EG$=" "
5200 IF EG$=" "THEN EH$=""ELSE EH$=AR$
5210 PRINT EH$;"Your progress is ";EG$;" within tolerance for this mission"
5220 PRINT
5230 IF EG$=" not "THEN 5240 ELSE 2680
5240 IF XM<0 THEN 5250 ELSE 5290
5250 PRINT:SD=1:KD=0
5260 PRINT"Captain, Command Central projects defeat by enemy. You are now"
5270 PRINT"authorized to surrender or to activate Self-Destruct system"
5280 GOTO 2680
5290 PRINT:SD=0:KD=1
5300 PRINT"Captain, Federation Command projects success for your mission."
5310 GOTO 4560
5320 REM PRINT CHR$(26)
5330 GOSUB 5440
5340 PRINT"Self Destruct System activated"
5350 PRINT:PRINT:PRINT:GOSUB 5440
5360 PRINT"COUNTDOWN BEGUN !":PRINT:PRINT
5370 PRINT TAB(25)"FIVE":PRINT:GOSUB 5440
5380 PRINT TAB(20)"FOUR":PRINT:GOSUB 5440
5390 PRINT TAB(15)"THREE":PRINT:GOSUB 5440
5400 PRINT TAB(10)"TWO":PRINT:GOSUB 5440
5410 PRINT TAB(5)"ONE":PRINT:GOSUB 5440
5420 PRINT"ZERO":GOSUB 5440
5430 GOTO 5460
5440 FOR I=1 TO 50:A=A+1:NEXT I:RETURN
5450 FOR I=1 TO 1200:A=A+1:NEXT I:RETURN
5460 GOTO 6910
5470 REM INTRODUCTION TO GAME. R.SCHRADER, 1/12/83
5480 REM WITH ADDITIONS AND CORRECTIONS BY V. STAPEL
5490 PRINT:PRINT:PRINT:PRINT
5500 PRINT "                    SPACE - THE FINAL FRONTIER!":PRINT
5510 PRINT "    THESE ARE THE VOYAGES OF THE STARSHIP ENTERPISE.  THE MISSION: "
5520 PRINT "    TO SEEK NEW LIFE AND NEW CIVILIZATIONS; TO BOLDLY GO WHERE NO"
5530 PRINT "                      MAN HAS GONE BEFORE.":PRINT:PRINT:PRINT:PRINT
5540 PRINT:PRINT:PRINT:PRINT:PRINT:PRINT:INPUT "Do you need instructions",Q9$
5550 IF LEFT$(Q9$,1)="N" THEN RETURN
5560 IF LEFT$(Q9$,1)="n" THEN RETURN
5570 PRINT "        **********    WELCOME TO STARTREK    **********":PRINT
5580 PRINT "    You are in control of the Starship Entrprise. Your mission"
5590 PRINT "will be to rid the galaxy of Klingons."
5600 PRINT "    The known galaxy is mapped into 64 quadrants (8 X 8). Each"
5610 PRINT "quadrant is composed of 64 sectors (also 8 X 8)."
5620 PRINT "    A map of the galaxy, as represented by your on-board Com-"
5630 PRINT "puter, looks like this:":PRINT
5640 FOR Q8=1 TO 3:PRINT "      ??? ??? ??? ??? ??? ??? ??? ???":NEXT Q8
5650             PRINT "      ??? ??? ??? ??? 316 ??? ??? ???"
5660 FOR Q8=1 TO 4:PRINT "      ??? ??? ??? ??? ??? ??? ??? ???":NEXT Q8
5670 PRINT
5680 PRINT "The question marks represent unexplored quadrants. The 3-digit"
5690 PRINT "numbers encode information about quadrants. The first digit"
5700 PRINT "tells how many Klingons are in the quadrant; the second, how"
5710 PRINT "many friendly bases; the third, how many stars."
5720 PRINT:INPUT "HIT RETURN TO CONTINUE";Q8$:PRINT
5730 PRINT "    When you are in a quadrant, it will be displayed as:"
5740 PRINT:PRINT
5750 PRINT "     . . . . . . . ."
5760 PRINT "     . K . . . . * ."
5770 PRINT "     . . . . . . . ."
5780 PRINT "     * . . * . . . ."
5790 PRINT "     . . . . . E . ."
5800 PRINT "     . . . K . . . B"
5810 PRINT "     . * K . . . . ."
5820 PRINT "     . . . * . . . *"
5830 PRINT:PRINT
5840 PRINT "The Klingons are represented by 'K', stars by '*', Your ship by"
5850 PRINT "an 'E', bases by 'B', and empty sectors by '.'"
5860 PRINT:INPUT "HIT RETURN TO CONTINUE";Q8$:PRINT
5870 PRINT "    In your pursuit of Klingons, you will have a large number of"
5880 PRINT "units of energy. These can by used to move the ship, to defend"
5890 PRINT "the ship, or to fire at Klingons. In executing any of the afore-"
5900 PRINT "mentioned functions, energy is expended. If you ever run out of"
5910 PRINT "energy, you will be immobile and defenseless.":PRINT:PRINT
5920 PRINT "    A SUMMARY OF TOP LEVEL COMMANDS FOLLOWS:"
5930 PRINT
5940 PRINT "---> LIST TOP LEVEL COMMANDS  (Activated by a '0')"
5950 PRINT "     This will list the commands you have available to you in"
5960 PRINT "     response to `COMMAND?'."
5970 PRINT
5980 PRINT "---> WARP  (Activated by entering a '1')"
5990 PRINT "     WARP moves the starship. Upon entering the command, you"
6000 PRINT "     will be asked for a direction of travel ( 0 to 360 degrees,"
6010 PRINT "     0 is right, 90 is up, etc), and the warp speed."
6020 PRINT 
6030 PRINT "---> SHORT-RANGE SCAN  (Activated by a '2')"
6040 PRINT "     Displays the local quadrant."
6050 PRINT:INPUT "HIT RETURN TO CONTINUE";Q8$
6070 PRINT "---> LONG-RANGE SCAN  ('3')"
6080 PRINT "     Displays information about your quadrant and it's eight"
6090 PRINT "     immediate neighbors:":PRINT
6100 PRINT "          103 008 104           (Numbers are interprteted"
6110 PRINT "          203 316 004            like on a galactic map)"
6120 PRINT "          106 505 207":PRINT
6130 PRINT "     The computer updates your galactic map after every "
6140 PRINT "     Long-Range scan."
6150 PRINT 
6160 PRINT "---> PHASERS  ('4')"
6170 PRINT "     Computer-controlled high energy beams are fired at all"
6180 PRINT "     Klingons in the quadrant."
6190 PRINT 
6200 PRINT "---> PHOTON TORPEDOES  ('5')"
6210 PRINT "     One of ten Torpedoes can be fired at a Klingon. They must"
6220 PRINT "     be manually aimed."
6230 PRINT:INPUT "HIT RETURN TO CONTINUE";Q8$
6240 PRINT 
6250 PRINT "---> SHIELDS  ('6')"
6260 PRINT "     As the Klingons have weapons like yours, your ship has"
6270 PRINT "     shields to protect it. This command controls the energy"
6280 PRINT "     in the shields."
6290 PRINT 
6300 PRINT "---> DAMAGE CONTROL  ('7')"
6310 PRINT "     Enables you to check the operational status of any of the"
6320 PRINT "     ship's functions. "
6330 PRINT
6340 PRINT "---> COMPUTER  ('8')"
6350 PRINT "     Accesses the on-board Computer. (See the list of computer"
6360 PRINT "     commands at the end of this list.)"
6370 PRINT
6380 PRINT "---> DAMAGE REPAIR  ('9')"
6390 PRINT "     This will allow you to repair damage to the Enterprise"
6400 PRINT "     if you are docked at a Starbase."
6410 PRINT:INPUT "HIT RETURN TO CONTINUE";Q8$
6420 PRINT:PRINT "LIST OF COMPUTER COMMANDS"
6430 PRINT "   These are the options available to you in response"
6440 PRINT "to `Computer on---COMMAND?'":PRINT:PRINT
6450 PRINT "---> `0' Lists available commands from the Computer.":PRINT
6460 PRINT "---> GALACTIC MEMORY MAP   (`1')"
6470 PRINT "     This option lists all quadrants that the Enterprise has"
6480 PRINT "     been to or has seen through a Long-Range Scan.":PRINT
6490 PRINT "---> GENERAL STATUS REPORT   (`2')"
6500 PRINT "     This will list the number of Klingons, Stardates and"
6510 PRINT "     Starbases left, as well as the state of repair of all"
6520 PRINT "     devices on the ship.":PRINT
6530 PRINT "---> PHOTON TRAJECTORY   (`3')"
6540 PRINT "     This will assist in telling the Captain what direction"
6550 PRINT "     to aim the Photon Torpedoes.":PRINT
6560 INPUT "HIT RETURN TO CONTINUE";Q8$
6570 PRINT "---> NEW MISSION   (`4')"
6580 PRINT "     This is to be used on the first couple of turns to abort"
6590 PRINT "     a mission that is too much (or too little) for the" 
6600 PRINT "     player's experience or skill.":PRINT
6610 PRINT "---> PRESENT POSITION   (`5')"
6620 PRINT "     If your Short-Range Scanners are out, this will give your"
6630 PRINT "     present position, but NOT what is in the quadrant.":PRINT
6640 PRINT "---> SELF-DESTRUCT   (`6')"
6650 PRINT "     If Security Control authorizes it, you may destroy the"
6660 PRINT "     Enterprise to avoid take-over by the Klingons.":PRINT
6670 PRINT "---> WARP-COMPASS   (`7')"
6680 PRINT "     With the Enterprise in the middle, this will help deter-"         
6690 PRINT "     mine direction for movement and Photon Trajectory.":PRINT
6700 PRINT "---> MISSION PROGRESS REPORT   (`8')"
6710 PRINT "     This gives the Initial and Current Progress Factors as "
6720 PRINT "     well as the tolerance factor for this mission.":PRINT
6730 INPUT "HIT RETURN TO CONTINUE";Q8$
6740 PRINT "---> EXIT COMPUTER   (`9')"
6750 PRINT "     This returns you to the top level of commands."
6760 PRINT 
6770 PRINT 
6780 PRINT "   Some free advice for beginners:"                       
6790 PRINT "      1) Put enery in the shields before warping."        
6800 PRINT "      2) When in doubt, consult the Computer (COMMAND 8)" 
6810 PRINT "      3) Choose a low Security Clearance and a low Rank." 
6820 PRINT                                                            
6830 INPUT "HIT RETURN TO START";Q8$
6850 RETURN                                                           
6860 PRINT "  Amount to transfer from Shields";: INPUT Q8             
6870 IF (Q8<0) OR (Q8>S) THEN GOTO 6860                                   
6880 S=S-Q8:E=E+Q8:PRINT                                              
6890 PRINT E;" units of energy now - Try again."                      
6900 RETURN                                                           
6910 RESET                                                            
