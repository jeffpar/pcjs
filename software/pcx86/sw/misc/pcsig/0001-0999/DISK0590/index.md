---
layout: page
title: "PC-SIG Library Disk #590"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0590/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0590"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "NUCLEAR MAGNETIC"

    This highly-technical and useful nuclear magnetic resonance (NMR)
    analysis program is of interest to students of chemistry and physics.
    Written by a University of South Florida professor of chemistry, NMR
    allows the analysis of this technique, used in many advanced chemistry
    applications.
    
    This unique program displays the calculated spectrum including
    adjustable peak broadening. Simulated plotting of very complex
    molecules, such as strong coupled proton spectra, is supported.
    Parameters for up to seven spins (nuclei) can be calculated.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## NMR0.BAS

```bas
10 'Program "NMR0"--Entry to NMRCALC routines.
20 DEFINT I-N
30 'COMMON IPFLAG,IREAD,FF$
31 IPFLAG = 0: IREAD = 0: FF$ = "null"
32 OPEN "scratch.nmr" FOR OUTPUT AS #1
33 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
34 CLOSE #1
40 SCREEN 0:COLOR 14,4,1:CLS
50 KEY OFF
60 PRINT:PRINT"Program NMRCALC"
70 PRINT:PRINT"Milton D. Johnston, Jr."
80 PRINT"Department of Chemistry"
90 PRINT"University of South Florida"
100 PRINT"Tampa, Florida  33620"
110 PRINT:PRINT"October 17, 1984  (Revised:  January 26, 1985)"
120 PRINT:PRINT"813-974-2535"
130 GOSUB 170
140 CLS:PRINT :PRINT"To get the menu, execute the 'ME' command."
150 GOSUB 170
160 CHAIN "NMR1"
170 PRINT: INPUT"Hit <Return> to continue.",A$: PRINT: RETURN
```

## NMR1.BAS

```bas
1 'Program NMR1 (of NMRCALC package).
2 'This comprises the main I/O routines.
5 DEFINT I-N: DEFDBL A-H,O-Z
10 'COMMON IPFLAG,IREAD,FF$
20 GOSUB 900
30 DIM SF(128,7),BC(7),FZ(8),SH(7),PM(7,7),BN(128)
40 DIM HA(35,35)
50 SCREEN 0,0,0:COLOR 14,4,1:CLS:KEY OFF:PRINT:PRINT
60 ON ERROR GOTO 60000
70 IPFLAG = 0: IREAD = 0
100 CLS:PRINT:PRINT"Command ('ME' for menu): ";:GOSUB 500
105 IF P$ = "IP" THEN GOSUB 700
110 IF P$ = "AR" THEN GOSUB 20000
115 IF P$ = "FF" THEN LPRINT CHR$(12);
120 IF P$ = "NS" THEN GOSUB 1000
130 IF P$ = "BA" THEN GOSUB 7000
140 IF P$ = "FR" THEN GOSUB 2000
150 IF P$ = "SH" THEN GOSUB 3000
160 IF P$ = "JJ" THEN GOSUB 4000
170 IF P$ = "HA" THEN GOSUB 10000
180 IF P$ = "AE" THEN GOSUB 9000
190 IF P$ = "ME" THEN GOSUB 8000
200 IF P$ = "CS" THEN GOSUB 5000
210 IF P$ = "CJ" THEN GOSUB 6000
220 IF P$ <> "QT" THEN 250
230 CLS: PRINT: PRINT"End of run.  Returning control to system."
240 END
250 IF P$ = "XC" THEN GOSUB 11000
260 IF P$ = "XD" THEN GOSUB 12000
270 IF P$ = "XR" THEN GOSUB 13000
280 IF P$ = "XS" THEN GOSUB 14000
290 IF P$ = "XB" THEN GOSUB 7030
300 IF P$ = "CB" THEN GOSUB 15000
310 IF P$ = "OL" THEN GOSUB 16000
320 IF P$ = "PL" THEN GOSUB 17000
330 IF P$ = "HD" THEN GOSUB 18000
335 IF P$ = "FL" THEN GOSUB 19000
336 IF P$ = "EN" THEN GOSUB 950: CHAIN "NMR6"
340 GOTO 100
500 P1$ = INKEY$: IF P1$ = "" THEN 500
505 IF ASC(P1$) > 90 THEN P1$ = CHR$(ASC(P1$) - 32)
506 PRINT P1$;
510 P2$ = INKEY$: IF P2$ = "" THEN 510
515 IF ASC(P2$) > 90 THEN P2$ = CHR$(ASC(P2$) - 32)
516 PRINT P2$
520 P$ = P1$ + P2$
530 RETURN
600 P$ = INKEY$: IF P$ = "" THEN 600
605 IF ASC(P$) > 90 THEN P$ = CHR$(ASC(P$) - 32)
610 PRINT P$
615 RETURN
700 CLS:PRINT:PRINT"Position paper in FX-80 so perforations are at tear bar."
710 PRINT:INPUT"Hit <Return> to continue.  ",A$
720 LPRINT CHR$(27);"@";  'initialize printer
730 LPRINT CHR$(27);"l";CHR$(8);  'set left margin
740 LPRINT CHR$(27);"M";  'set elite mode
750 LPRINT CHR$(27);"N";CHR$(10);  'set skip-over perforation setting
760 PRINT:PRINT"Epson FX-80 now initialized.": GOTO 63999
800 PRINT:PRINT"Do you desire printed output?  ";:GOSUB 600: PRINT
810 IF P$ = "Y" THEN IPRINT = 1 ELSE IF P$ = "N" THEN IPRINT = 0                      ELSE BEEP: GOTO 800
820 RETURN
900 OPEN "scratch.nmr" FOR INPUT AS 1
902 INPUT #1, IPFLAG: INPUT #1, IREAD: LINE INPUT #1, FF$
904 CLOSE #1: RETURN
950 OPEN "scratch.nmr" FOR OUTPUT AS 1
952 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
954 CLOSE #1: RETURN
1000 CLS:PRINT:PRINT:INPUT"Enter number of spins (nuclei): ",NS
1010 NF = 2^NS
1020 IF NS > 0 AND NS < 8 THEN 63999
1030 PRINT "Illegal entry.  Try again.": GOTO 1000
2000 CLS:PRINT:PRINT"Entry of spectrometer frequency must be in MHz.":PRINT
2010 PRINT:INPUT"Enter instrument frequency: ",FR
2020 GOTO 63999
3000 IF NS = 0 THEN GOSUB 1000
3010 CLS:PRINT:PRINT"Enter";NS;"chemical shifts (ALWAYS in ppm).":PRINT
3020 FOR I = 1 TO NS: PRINT"Enter DEL(";:PRINT USING "#";I;
3030 INPUT ") = ", SH(I)
3040 NEXT
3050 PRINT:PRINT"Entry complete.": GOTO 63999
4000 IF NS = 0 THEN GOSUB 1000
4010 CLS:PRINT:PRINT"Entry of";NS*(NS-1)/2;"coupling constants for";NS;"spins."
4020 PRINT:PRINT"Enter below as indicated:":PRINT
4030 FOR I = 1 TO NS - 1:PRINT
4040 FOR J = I + 1 TO NS
4050 PRINT "Enter J(";:PRINT USING "#";I;:PRINT",";:PRINT USING "#";J;
4060 INPUT ") = ", PM(I,J): PM(J,I) = PM(I,J)
4070 NEXT
4080 NEXT
4090 PRINT:PRINT"Entry of coupling constants completed.": GOTO 63999
5000 CLS:PRINT:PRINT"Shift corrections (in ppm).":PRINT
5010 PRINT"Enter shift index and then the new shift value.  Exit with a <Return>.":PRINT
5020 PRINT:INPUT"Enter number of nucleus: ",I
5030 IF I = 0 THEN PRINT: PRINT"Shift corrections completed.": GOTO 63999
5040 IF I < 0 OR I > NS THEN PRINT "Illegal entry--try again!": GOTO 5020
5050 PRINT "Current shift value: ";SH(I)
5060  INPUT "Enter correction (hit <Return> to keep old value): ",SH$
5070 IF SH$ = "" THEN 5020 ELSE SH(I) = VAL(SH$)
5080 GOTO 5020
6000 CLS:PRINT:PRINT"Coupling constant corrections.":PRINT
6010 PRINT"Correct by entering the two indices and then the new value, as requested.  Exit":PRINT" by hitting <Return> or entering zero for either index.":PRINT
6020 PRINT:INPUT"Enter index #1: ",I
6030 IF I = 0 THEN 6300
6040 IF I < 0 OR I > NS THEN PRINT"Illegal entry--try again":GOTO 6020
6050 INPUT"Enter index #2: ",J
6060 IF J = 0 THEN 6300
6070 IF J < 0 OR J > NS OR J = I THEN PRINT "Illegal entry--try again":              GOTO 6050
6080 PRINT"Current value: "; PM(I,J)
6090 INPUT"Enter correction (Hit <Return> to keep old value): ", SH$
6100 IF SH$ = "" THEN 6020
6110 PM(I,J) = VAL(SH$): PM(J,I) = PM(I,J): GOTO 6020
6300 PRINT:PRINT"Entry of corrections completed.": GOTO 63999
7000 IF NS = 0 THEN GOSUB 1000
7001 CLS:PRINT:PRINT"Ready to set up basis functions.": PRINT:                       PRINT "Auto-generate? ";:GOSUB 600
7002 IF P$ <> "Y" THEN 7200
7005 CLS:PRINT:PRINT"Now setting up basis functions.  Be patient!": GOSUB 50000
7010 GOSUB 63999
7020 CLS:PRINT:PRINT"Display basis functions? ";:GOSUB 600:                           IF P$ <> "Y" THEN RETURN
7025 GOSUB 800
7026 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"The spin basis functions:"
7030 NM = 0
7040 FOR M = 1 TO NS + 1
7050 CLS:PRINT:PRINT"Z-expectation value = ";FZ(M): PRINT
7055 IF IPRINT=1 THEN LPRINT:LPRINT"Z-expectation value = ";FZ(M):LPRINT
7060 NC = NM + 1: NM = NC + BC(M - 1) - 1
7070 PRINT " #"; TAB(10);"Function": PRINT "--"; TAB(10);"--------"
7072 IF IPRINT =1 THEN LPRINT "      #"; TAB(15);"Function":LPRINT "     --";         TAB(15);"--------"
7075 LOOPER = 0
7080 FOR I = NC TO NM
7082 LOOPER = LOOPER + 1: IF LOOPER > 15 THEN GOSUB 63998
7085 PRINT USING "###";I;:PRINT TAB(10);
7086 IF IPRINT=1 THEN LPRINT USING "    ###";I;:LPRINT TAB(15);
7090 FOR J = 1 TO NS
7100 IF SF(I,J) > 0 THEN PRINT "+";
7105 IF SF(I,J) > 0 AND IPRINT=1 THEN LPRINT "+";
7110 IF SF(I,J) < 0 THEN PRINT "-";
7115 IF SF(I,J) < 0 AND IPRINT=1 THEN LPRINT "-";
7120 NEXT
7130 PRINT
7135 IF IPRINT=1 THEN LPRINT
7140 NEXT
7150 GOSUB 63999
7160 NEXT
7170 PRINT:PRINT"Basis functions displayed.": GOTO 63999
7200 CLS:PRINT:PRINT"Manual generation of basis functions.": PRINT
7210 GOSUB 55000
7220 PRINT:PRINT"Ready.": PRINT: PRINT"It is recommended that you have these at hand on a pre-prepared list so that":PRINT"you won't make any monumental errors!":PRINT
7230 PRINT "Functions will be called for one at a time.  You will be given an opportunity":PRINT" to correct errors after each function.  If, for some reason, you find errors":PRINT"later, correct with the 'CB' command.":PRINT
7250 PRINT:PRINT"Also note that you will be generating these starting with highest Fz and":PRINT"going to the lowest in descending order.":PRINT: GOSUB 63999
7270 NM = 0
7280 PRINT:PRINT"Note that the following two functions are never entered, since they are the":PRINT"same for all possible spin systems.":PRINT:PRINT
7290 PRINT "#1:";TAB(8);"Fz = ";FZ(1); TAB(20);"Function:  ";
7300 FOR I = 1 TO NS: PRINT "+";: SF(1,I) = .5: NEXT
7310 PRINT: NF = 2^NS
7320 FOR I = 1 TO NS: PRINT "-";: SF(NF,I) = -.5: NEXT
7325 GOSUB 63999
7330 PRINT:PRINT"Now ready for manual entry:":PRINT
7340 NM = 1
7350 FOR M = 1 TO NS - 1
7360 NC = NM + 1: NM = NC + BC(M) - 1
7370 FOR I = NC TO NM
7380 CLS: PRINT: PRINT"Function number";I
7390 PRINT: PRINT "Fz = ";FZ(M + 1): PRINT
7400 FOR J = 1 TO NS
7410 PRINT "Spin #";:PRINT USING "#";J;:PRINT":  ";
7411 P$ = INKEY$: IF P$ = "" THEN 7411
7412 IF P$ = "_" THEN P$ = "-"
7413 IF P$ = "=" THEN P$ = "+"
7414 IF P$ <> "+" AND P$ <> "-" THEN BEEP: GOTO 7410
7415 PRINT P$
7420 IF P$ = "+" THEN SF(I,J) = .5 ELSE SF(I,J) = -.5
7430 NEXT
7440 FC = 0
7450 FOR J = 1 TO NS: FC = FC + SF(I,J): NEXT
7463 IF FC = FZ(M + 1) THEN 7470
7464 BEEP: PRINT"Illegal function--re-enter."
7465 PRINT:PRINT: GOTO 7400
7470 PRINT:PRINT"Change (re-enter) this function? ";:GOSUB 600
7475 IF P$ = "Y" THEN 7400 ELSE GOSUB 63999
7480 NEXT
7490 PRINT: PRINT "End of entries for Fz = ";FZ(M + 1)
7500 NEXT
7510 PRINT:PRINT "End of entries for all functions.": GOTO 63999
7999 CLS: PRINT: PRINT"Enter '+' for alpha spins and '-' for beta spins.":PRINT:     GOTO 63999
8000 CLS: PRINT: PRINT "Available commands:":PRINT
8010 PRINT "AE--Auto-entry of parameters.  Keeps track of things for you."
8015 PRINT "AR--Auto-reading of data and calculation files (otherwise done manually)."
8020 PRINT "BA--Set up and store spin basis functions."
8030 PRINT "CB--Correct or alter a spin basis function."
8040 PRINT "CJ--Correct or alter a coupling constant."
8050 PRINT "CS--Correct a chemical shift entry."
8052 PRINT "EN--Exit to energy level plotting routine."
8055 PRINT "FL--Alter pause flag (useful for printing under Ctrl/PrtSc option."
8056 PRINT "FF--Send form-feed to printer."
8060 PRINT "FR--Enter main spectrometer frequency (in MHz)."
8070 PRINT "HA--Generate and store Hamiltonian."
8080 PRINT "HD--Display Hamiltonian."
8085 PRINT "IP--Initialize printer (program configured for Epson FX80)."
8090 PRINT "JJ--Enter and store coupling constants (Hz)."
8095 GOSUB 8300: CLS: PRINT
8100 PRINT "ME--Display this menu."
8110 PRINT "NS--Enter number of spins (nuclei)."
8120 PRINT "OL--Use old calculations directly from disk."
8130 PRINT "PL--Exit to plotting routines."
8140 PRINT "QT--Exit and quit program."
8150 PRINT "SH--Enter and store shifts (ppm)."
8160 PRINT "XB--Display basis functions."
8170 PRINT "XC--Exit to calculation routines."
8180 PRINT "XD--Display current parameters."
8190 PRINT "XR--Read old set of parameters from disk."
8200 PRINT "XS--Save current parameters on disk"
8300 PRINT:INPUT"Hit <Return> to continue.",A$: RETURN
9000 CLS:PRINT:PRINT"Auto-entry of parameters; called in a relatively easy to handle order.":PRINT: GOSUB 63999
9005 GOSUB 20000
9010 GOSUB 1000
9020 GOSUB 2000
9030 GOSUB 3000
9040 GOSUB 4000
9050 GOSUB 7000
9060 GOSUB 14000
9070 GOSUB 10000
9080 GOTO 11000
9085 PRINT"     To calculate the spectrum:  'XC'"
10000 CLS:PRINT:PRINT"Now ready to calculate and store the NMR spin Hamiltonian.":PRINT:PRINT"This will be stored in several sectors to insure compatibility with the":PRINT" following routines and to save space."
10010 PRINT:PRINT"Have the parameters and basis functions been stored or recalled? ";:GOSUB 600
10020 IF P$ <> "Y" THEN GOSUB 14000
10025 NM = 0
10026 CLS: PRINT:PRINT"Now generating Hamiltonian and writing elements of each subblock on to disk.":PRINT
10030 FOR N = 1 TO NS + 1
10035 PRINT "Sub-block for Fz = ";FZ(N)
10040 DF$ = FF$ + "." + RIGHT$(STR$(N),LEN(STR$(N)) - 1)
10090 OPEN DF$ FOR OUTPUT AS 1
10100 BC = BC(N-1): NC = NM + 1: NM = NM + BC
10110 PRINT #1, BC
10120 FOR I = NC TO NM
10130 H = 0
10140 FOR J = 1 TO NS
10150 H = H + PM(J,J)*SF(I,J)
10160 NEXT
10170 FOR J = 1 TO NS - 1
10180 FOR K = J + 1 TO NS
10190 H = H + PM(J,K)*SF(I,J)*SF(I,K)
10200 NEXT
10210 NEXT
10220 PRINT #1, H
10230 NEXT
10240 IF NC = NM THEN 10500
10250 FOR I = NC TO NM - 1
10260 FOR J = I + 1 TO NM
10270 IL = 0: IR = 0: K = 1
10280 IF SF(I,K) <> SF(J,K) THEN 10300
10290 K = K + 1: IF K < NS THEN 10280
10300 IL = K: K = K + 1: IF K <= NS THEN 10320
10310 H = 0: GOTO 10400
10320 IF SF(I,K) <> SF(J,K) THEN 10340
10330 K = K + 1: IF K <= NS THEN 10320
10335 H = 0: GOTO 10400
10340 IR = K: IF K = NS THEN 10380
10350 K = K + 1
10360 IF SF(I,K) <> SF(J,K) THEN 10335
10370 K = K + 1: IF K <= NS THEN 10360
10380 H = PM(IL,IR)/2
10400 PRINT #1, H
10410 NEXT
10420 NEXT
10500 CLOSE #1
10600 NEXT
10605 PRINT:PRINT"Hamiltonian stored.  Now storing other useful information.":         PRINT
10610 DF$ = FF$ + ".inf"
10620 OPEN DF$ FOR OUTPUT AS 1
10630 PRINT #1, NS
10640 PRINT #1, NF
10650 FOR I = 0 TO NS: PRINT #1, BC(I): NEXT
10660 FOR I = 1 TO NS + 1: PRINT #1, FZ(I): NEXT
10670 CLOSE #1
10700 PRINT "This routine completed.": GOTO 63999
11000 CLS: PRINT: PRINT"Ready for calculation of frequencies and intensities? ";: GOSUB 600: IF P$ <> "Y" THEN RETURN
11010 PRINT:PRINT"Are you absolutely sure? ";:GOSUB 600:                               IF P$ <> "Y" THEN RETURN
11020 GOSUB 950: CHAIN "NMR2"
12000 IF FR = 0 THEN GOSUB 2000
12010 IF NS = 0 THEN GOSUB 1000
12020 CLS:PRINT:PRINT"Display of current parameter values:":PRINT
12025 GOSUB 800
12030 PRINT "Instrument frequency (MHz) = ";FR
12035 IF IPRINT=1 THEN LPRINT "Instrument frequency (MHz) = ";FR
12040 PRINT:PRINT NS;"nuclear spins"
12045 IF IPRINT=1 THEN LPRINT:LPRINT NS;"nuclear spins"
12050 PRINT:PRINT"Chemical shifts:":PRINT:PRINT" #";TAB(6);"  ppm  "; TAB(20);"  Hz  ":PRINT"--"; TAB(6);"-------";TAB(20);"------"
12055 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"The chemical shifts:":LPRINT:LPRINT" #";TAB(6);"  ppm  "; TAB(20);"  Hz  ":LPRINT"--"; TAB(6);"-------";TAB(20);"------"
12060 FOR I = 1 TO NS
12070 PRINT I; TAB(6);SH(I);: PM(I,I) = SH(I)*FR: PRINT TAB(20); PM(I,I)
12075 IF IPRINT=1 THEN LPRINT I; TAB(6); SH(I); TAB(20); PM(I,I)
12080 NEXT
12090 GOSUB 63999
12100 CLS:PRINT:PRINT"The coupling constants:": PRINT
12105 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"The coupling constants:":LPRINT
12106 PRINT " # ";TAB(6);
12107 IF IPRINT=1 THEN LPRINT " # ";TAB(6);
12110 FOR I = 1 TO NS: PRINT USING "     #    ";I;
12111 IF IPRINT=1 THEN LPRINT USING "     #    ";I;
12112 NEXT
12113 PRINT: PRINT TAB(6);
12114 IF IPRINT = 1 THEN LPRINT: LPRINT TAB(6);
12115 FOR I = 1 TO NS: PRINT" ---------";
12116 IF IPRINT=1 THEN LPRINT" ---------";
12117 NEXT
12118 PRINT
12119 IF IPRINT=1 THEN LPRINT
12120 FOR I = 1 TO NS
12125 PRINT USING " #";I;:PRINT TAB(6);
12126 IF IPRINT=1 THEN LPRINT USING " #";I;:LPRINT TAB(6);
12130 FOR J = 1 TO NS
12135 IF I = J THEN PRINT "    ------"; ELSE PRINT USING "#######.##";PM(I,J);
12136 IF I = J AND IPRINT=1 THEN LPRINT "    ------";
12137 IF I <> J AND IPRINT=1 THEN LPRINT USING "#######.##"; PM(I,J);
12140 NEXT
12145 PRINT
12146 IF IPRINT=1 THEN LPRINT
12150 NEXT
12160 GOSUB 63999
12180 PRINT: PRINT"Display of parameters now complete.": PRINT
12190 GOTO 7020
13000 CLS:PRINT:PRINT "Ready to ready in previously stored parameters and basis functions.": PRINT
13010 INPUT"Enter data set name: ", FF$
13020 DF$ = FF$ + ".0"
13030 OPEN DF$ FOR INPUT AS 1
13060 INPUT #1, NS
13070 NF = 2^NS
13080 INPUT #1, FR
13090 FOR I = 1 TO NS
13100 INPUT #1, SH(I)
13110 INPUT #1, PM(I,I)
13120 NEXT
13130 FOR I = 1 TO NS - 1
13140 FOR J = I+1 TO NS
13150 INPUT #1, PM(I,J)
13160 PM(J,I) = PM(I,J): NEXT
13170 NEXT
13180 FOR I = 1 TO NF
13190 FOR J = 1 TO NS
13200 INPUT #1, SF(I,J)
13210 NEXT
13220 NEXT
13221 FOR I = 0 TO NS
13222 INPUT #1, BC(I)
13223 NEXT
13230 CLOSE #1
13250 PRINT:PRINT"Old data set now retrieved.":PRINT:PRINT"Data set name:  ";          FF$:PRINT"Data file name:  ";DF$
13260 FZ(1) = NS/2
13270 FOR I = 1 TO NS: FZ(I+1) = FZ(I) - 1: NEXT
13280 GOTO 63999
14000 IF NS = 0 THEN GOSUB 1000
14010 IF FR = 0 THEN GOSUB 2000
14020 CLS:PRINT:PRINT"Ready to save parameters and basis functions on disk.":
14030 PRINT:INPUT"Enter data set name:  ",FF$
14040 DF$ = FF$ + ".0"
14045 PRINT"Data saved in file:  ";DF$
14050 OPEN DF$ FOR OUTPUT AS 1
14110 PRINT #1, NS
14120 PRINT #1, FR
14130 FOR I = 1 TO NS
14140 PRINT #1, SH(I)
14150 PM(I,I) = FR*SH(I)
14160 PRINT #1, PM(I,I)
14170 NEXT
14180 FOR I = 1 TO NS - 1
14190 FOR J = I + 1 TO NS
14200 PRINT #1, PM(I,J)
14210 NEXT
14220 NEXT
14221 FOR I = 1 TO NF
14222 FOR J = 1 TO NS
14223 PRINT #1, SF(I,J)
14224 NEXT
14225 NEXT
14226 FOR I = 0 TO NS
14227 PRINT #1, BC(I)
14228 NEXT
14230 CLOSE #1
14240 PRINT: PRINT"Spectral parameters and basis functions saved.": PRINT
14250 PRINT"Data set name:  ";FF$
14260 PRINT"Data file name: ";DF$
14270 GOTO 63999
15000 CLS:PRINT:PRINT"Basis set correction or alteration:":PRINT
15010 PRINT "(To exit, hit <Return> for the function number.)":PRINT
15020 PRINT: INPUT"Enter function number: ",I
15030 IF I > 0 THEN 15050
15040 PRINT:PRINT"Function alterations completed.":GOTO 63999
15050 IF I <= NF THEN 15070
15060 PRINT "Illegal index.  Try again!":PRINT: GOTO 15020
15070 PRINT"Current function: ";
15080 FOR J = 1 TO NS
15090 SF = SF(I,J)
15100 IF SF < 0 THEN PRINT "-";
15110 IF SF > 0 THEN PRINT "+";
15120 NEXT
15130 PRINT:PRINT"Altered function:  ";
15140 FOR J = 1 TO NS
15150 P$ = INKEY$: IF P$ = "" THEN 15150
15160 IF P$ = "=" THEN P$ = "+"
15165 IF P$ = "_" THEN P$ = "-"
15170 IF P$ <> "+" AND P$ <> "-" THEN BEEP: GOTO 15150
15180 PRINT P$
15190 IF P$ = "+" THEN SF(I,J) = .5 ELSE SF(I,J) = -.5
15200 NEXT
15210 PRINT:PRINT: GOTO 15020
16000 CLS:PRINT:PRINT"Ready to access old results.  Note that this bypasses all calculations!": PRINT
16010 PRINT:INPUT"Enter data set name:  ",FF$: PRINT: GOSUB 63999
16020 CLS:PRINT:PRINT"Now exiting to display routine."
16030 CHAIN "NMR4"
17000 CLS:PRINT:PRINT"Ready to exit to plotting routines.":PRINT
17010 PRINT"Have the necessary calculations been done? ";:GOSUB 600
17020 IF P$ <> "Y" THEN RETURN
17030 GOSUB 950: CHAIN "NMR5"
18000 CLS:PRINT:PRINT"Routine to display Hamiltonian.  Note that this is destroyed after 'XC' has":PRINT" been executed.":PRINT
18010 PRINT"Has the Hamiltonian been generated? ";:GOSUB 600: IF P$ <> "Y"             THEN RETURN
18015 GOSUB 800
18016 IF IPRINT=1 THEN LPRINT:LPRINT"The Hamiltonian sub-matrices:":LPRINT
18020 CLS:PRINT:PRINT"This will be read out by sub-blocks with the diagonal elements followed by the":PRINT"off-diagonal elements."
18030 BQ = NS + 1: PRINT: PRINT"You have";BQ;"sub-blocks numbered from 1 to";BQ:       PRINT
18040 GOSUB 63999
18050 CLS:PRINT:INPUT"Enter sub-block # (exit with <Return>): ",M
18060 IF M < 0 OR M > BQ THEN BEEP: GOTO 18050
18070 IF M > 0 THEN 18090
18080 PRINT: PRINT "Routine completed.": PRINT: GOTO 63999
18090 DF$ = FF$ + "." + RIGHT$(STR$(M),LEN(STR$(M)) - 1):                              OPEN DF$ FOR INPUT AS 1
18100 INPUT #1, N
18110 FOR I = 1 TO N: INPUT #1, HA(I,I): NEXT
18115 IF N = 1 THEN 18130
18120 FOR I = 1 TO N - 1: FOR J = I + 1 TO N: INPUT #1, HA(I,J):                       HA(J,I) = HA(I,J): NEXT: NEXT
18130 CLOSE #1
18132 LL = 1: IF M = 1 THEN 18140
18134 FOR I = 1 TO M - 1: LL = LL + BC(I - 1): NEXT
18140 FOR KK = 1 TO N STEP 7
18142 CLS:PRINT:PRINT"Sub-block number";M: PRINT:PRINT"Func";TAB(10);
18144 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"Sub-block number";M;
18146 IF IPRINT=1 AND KK>1 THEN LPRINT"(continued)" ELSE IF IPRINT=1 THEN LPRINT
18148 IF IPRINT=1 THEN LPRINT:LPRINT"Func";TAB(10);
18150 IX = KK + 6: IF IX > N THEN IX=N
18152 FOR I = KK TO IX: NN = LL + I - 1
18154 PRINT USING "  ###     ";NN;
18156 IF IPRINT=1 THEN LPRINT USING "  ###     ";NN;
18158 NEXT
18160 PRINT:PRINT"----";TAB(10);
18162 IF IPRINT=1 THEN LPRINT:LPRINT"----";TAB(10);
18164 FOR I = KK TO IX: PRINT "--------  ";
18166 IF IPRINT=1 THEN LPRINT "--------  ";
18168 NEXT
18170 PRINT: IF IPRINT=1 THEN LPRINT
18172 FOR I = 1 TO N: II = LL + I - 1
18174 PRINT USING " ###";II;: IF IPRINT=1 THEN LPRINT USING  " ###";II;
18176 PRINT TAB(8);: IF IPRINT=1 THEN LPRINT TAB(8);
18180 FOR J = KK TO IX
18182 A = HA(I,J)
18184 PRINT USING "######.###";A;:IF IPRINT=1 THEN LPRINT USING "######.###";A;
18186 NEXT
18188 PRINT: IF IPRINT=1 THEN LPRINT
18190 NEXT
18192 GOSUB 63999
18194 NEXT
18196 GOTO 18050
19000 CLS: PRINT:PRINT"Routine to alter 'PAUSE FLAG.'  When flag ON, pause is suppressed.  When flag":PRINT" is OFF, the pause is active.  This latter state is the default.": PRINT
19010 PRINT"Flag is currently ";: IF IPFLAG = 0 THEN PRINT "OFF."                      ELSE PRINT "ON."
19020 PRINT"Do you wish to change the state of the flag? ";: GOSUB 600
19030 IF P$ = "N" THEN 63999 ELSE IF P$ <> "Y" THEN 19020
19040 IF IPFLAG = 0 THEN IPFLAG = 1 ELSE IPFLAG = 0
19050 GOTO 63999
20000 CLS: PRINT: PRINT"Do you wish to have data and calculation files loaded automatically? ";: GOSUB 600: PRINT
20010 IF P$ = "Y" THEN IREAD = 1: PRINT"Automatic file reading performed.":            GOTO 63999
20020 IF P$ = "N" THEN IREAD = 0: PRINT"Manual file reading will be needed.":          GOTO 63999
20030 BEEP: GOTO 20000
50000 FOR I = 1 TO NF
50010 BN(I) = NF - I
50020 FOR J = 1 TO NS
50030 SF(I,J) = 0
50040 NEXT
50050 NEXT
50060 FOR I = 2 TO NF
50070 SF = I - 1
50080 FOR J = NS TO 1 STEP -1
50090 NC = INT (SF/2)
50100 SF = SF/2
50110 SF(I,J) = 2*(SF - NC)
50120 SF = NC
50130 NEXT
50140 NEXT
50150 FOR I = 1 TO NF
50160 FOR J = 1 TO NS
50170 IF SF(I,J) > 0 THEN SF(I,J) = -.5
50180 IF SF(I,J) = 0 THEN SF(I,J) = .5
50190 NEXT
50200 NEXT
50210 GOSUB 55000
50290 NM = 1: FZ = NS/2
50300 FOR M = 1 TO NS - 1
50310 NC = NM + 1: NM = NC + BC(M) - 1: FZ = FZ - 1
50320 FOR L = NC TO NM
50330 I = L
50340 FC = 0
50350 FOR J = 1 TO NS: FC = FC + SF(I,J): NEXT
50360 IF FC = FZ THEN 50390
50370 I = I + 1: IF I > NF THEN 50420
50380 GOTO 50340
50390 FOR J = 1 TO NS
50400 SWAP SF(L,J),SF(I,J)
50410 NEXT
50415 SWAP BN(L),BN(I)
50420 NEXT
50430 NEXT
50440 IF NS < 3 THEN RETURN
50450 NM = BC(1) + 1
50460 FOR M = 3 TO NS
50470 NC = NM + 1: NM = NM + BC(M - 1)
50480 FOR I = NC TO NM - 1
50490 BG = BN(I)
50500 FOR J = I + 1 TO NM
50510 IF BG > BN(J) THEN 50600
50520 BG = BN(J): BN(J) = BN(I): BN(I) = BG
50530 FOR K = 1 TO NS
50540 SWAP SF(I,K),SF(J,K)
50550 NEXT
50600 NEXT
50610 NEXT
50620 NEXT
50630 RETURN
55000 FOR I = 1 TO NS
55010 FF = 1: FM = 1: FD = 1
55020 FOR J = 1 TO NS: FF = J*FF: NEXT
55030 FOR J = 1 TO I: FM = J*FM: NEXT
55040 NM = NS - I: IF NM = 0 THEN 55060
55050 FOR J = 1 TO NM: FD = J*FD: NEXT
55060 BC(I) = FF/(FM*FD)
55070 NEXT
55080 BC(0) = 1
55090 FZ(1) = NS/2
55100 FOR I = 1 TO NS
55110 FZ(I + 1) = FZ(I) - 1
55120 NEXT
55140 RETURN
60000 PRINT: BEEP: PRINT"Error encountered!"
60010 GOSUB 63999
60020 RESUME 100
63998 LOOPER = 0
63999 IF IPFLAG = 1 THEN RETURN ELSE PRINT:INPUT"Hit <Return> to continue.",A$:       RETURN
```

## NMR2.BAS

```bas
1 'Program NMR2
10 'Part 2 of NMRCALC package.
15 'Calculates and stores eigenvalues and eigenvectors; uses Givens-Householder
16 ' method of matrix diagonalization.
20 DEFINT I-N: DEFDBL A-H,O-Z
30 'COMMON IPFLAG,IREAD,FF$
31 OPEN "scratch.nmr" FOR INPUT AS #1
32 INPUT #1, IPFLAG: INPUT #1, IREAD: LINE INPUT #1, FF$
33 CLOSE #1
40 DIM A(35,35),V(35,35),E(35),W(5,35),BC(7),FZ(8)
45 ON ERROR GOTO 60000
50 CLS:PRINT:PRINT"Now ready to diagonalize the sub-blocks of the Hamiltonian and to get the":PRINT" eigenvalues and eigenvectors.":PRINT: GOSUB 63999
60 CLS:PRINT:PRINT"Now reading in matrix coefficients to set up reading of sub-blocks.":PRINT
65 FACTOR = (SQR(5#) - 1#)/2#
70 DF$ = FF$ + ".inf"
80  OPEN DF$ FOR INPUT AS 1
90 INPUT #1,NS
100 INPUT #1,NF
110 FOR I = 0 TO NS: INPUT #1,BC(I): NEXT
120 FOR I = 1 TO NS + 1: INPUT #1, FZ(I): NEXT
130 CLOSE 1
140 FOR NQ = 2 TO NS
150 CLS: PRINT: PRINT "Processing sub-block for Fz =";FZ(NQ)
160 DF$ = FF$ + "." + RIGHT$(STR$(NQ),LEN(STR$(NQ))-1)
170 OPEN DF$ FOR INPUT AS 1
180 INPUT #1, N
190 FOR I = 1 TO N
200 FOR J = 1 TO N
210 A(I,J) = 0
220 NEXT
230 NEXT
240 FOR I = 1 TO N
250 INPUT #1, A(I,I)
260 NEXT
270 FOR I = 1 TO N-1
280 FOR J = I + 1 TO N
290 INPUT #1, A(I,J)
300 A(J,I) = A(I,J)
310 NEXT
320 NEXT
330 CLOSE 1
340 GOSUB 50000
350 PRINT:PRINT "Storing eigenvalues and eigenvectors for sub-block.":PRINT
360 DF$ = FF$ + "." + RIGHT$(STR$(NQ),LEN(STR$(NQ))-1)
370 OPEN DF$ FOR OUTPUT AS 1
380 PRINT #1, N
390 FOR I = 1 TO N
400 PRINT #1, E(I)
410 NEXT
420 FOR J = 1 TO N
430 FOR I = 1 TO N
440 PRINT #1, V(I,J)
450 NEXT
460 NEXT
470 CLOSE 1
480 NEXT
490 PRINT:PRINT"Storage of eigenvalues and eigenvectors completed.":PRINT:           GOSUB 63999
500 OPEN "scratch.nmr" FOR OUTPUT AS #1
510 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
520 CLOSE 1
600 CHAIN "NMR3"
50000 EPS = .0000000001#: NMAX = N: NV = N: IORD = 1: M = N
50010 NM1 = N - 1: IF N=2 THEN 50220
50020 'Householder transformation.
50030 PRINT: NM2 = N - 2: PRINT"Tridiagonalizing the matrix.": PRINT
50040 FOR K = 1 TO NM2: KP1 = K + 1: W(2,K) = A(K,K)
50050 PRINT"Step:";K: SUM =0
50060 FOR J = KP1 TO N: W(2,J) = A(K,J): SUM = W(2,J)^2 + SUM: NEXT
50070 S = SQR(SUM): IF W(2,KP1)<0 THEN S = -S
50080 W(1,K) = -S: W(2,KP1) = W(2,KP1) + S: A(K,KP1) = W(2,KP1): H = W(2,KP1)*S:      IF H = 0 THEN 50210
50090 SUMM = 0
50100 FOR I = KP1 TO N: SUM = 0
50110 FOR J = KP1 TO I: SUM = A(J,I)*W(2,J) + SUM: NEXT
50120 IF I >= N THEN 50150
50130 IP1 = I + 1
50140 FOR J = IP1 TO N: SUM = A(I,J)*W(2,J) + SUM: NEXT
50150 W(1,I) = SUM/H
50160 SUMM = W(1,I)*W(2,I) + SUMM: NEXT
50170 U = SUMM*.5/H
50180 FOR J = KP1 TO N: W(1,J) = W(2,J)*U - W(1,J)
50190 FOR I = KP1 TO J: A(I,J) = W(1,I)*W(2,J) + W(1,J)*W(2,I) + A(I,J)
50200 NEXT: NEXT
50210 A(K,K) = H: NEXT
50220 W(2,NM1) = A(NM1,NM1): W(2,N) = A(N,N): W(1,NM1) = A(NM1,N): W(1,N) = 0:        GERSCH = ABS(W(2,1)) + ABS(W(1,1))
50230 FOR I = 1 TO NM1: GG = ABS(W(2,I+1)) + ABS(W(1,I)) + ABS(W(1,I+1)):             IF GG > GERSCH THEN GERSCH = GG
50240 NEXT
50250 DEL = EPS*GERSCH
50260 FOR I = 1 TO N: W(3,I) = W(1,I): E(I) = W(2,I): V(I,NV) = E(I): NEXT
50270 IF DEL = 0 THEN 50530
50280 'QR method with origin shift.
50290 PRINT:PRINT"Solving for eigenvalues.":PRINT
50300 K=N
50310 L=K: PRINT"E(";K;") = ";E(K)
50320 IF ABS(W(3,L-1)) < DEL THEN 50340
50330 L = L - 1: IF L > 1 THEN 50320
50340 IF L=K THEN 50410
50350 WW = (E(K-1) + E(K))/2: R = E(K) - WW: ONE = 1: IF WW<0 THEN ONE = -1
50360 Z = WW - ONE*SQR(W(3,K-1)^2 + R*R)
50370 EE = E(L) - Z: E(L) = EE: FF = W(3,L): R = SQR(EE*EE + FF*FF): J = L:           GOTO 50390
50380 R = SQR(E(J)^2 + W(3,J)^2): W(3,J-1) = S*R: EE = E(J)*C: FF = W(3,J)*C
50390 C = E(J)/R: S = W(3,J)/R: WW = E(J+1) - Z: E(J) = (FF*C + WW*S)*S + EE          + Z: E(J+1) = C*WW - S*FF: J = J + 1: IF J<K THEN 50380
50400 W(3,K-1) = E(K)*S: E(K) = E(K)*C + Z: GOTO 50310
50410 K = K-1: IF K>1 THEN 50310
50420 'Straight selection sort of eigenvalues.
50430  IF IORD < 0 THEN SORTER = -1 ELSE SORTER = 1
50440 J = N
50450 L=1: II=1: LL=1
50460 FOR I = 2 TO J: IF (E(I) - E(L))*SORTER > 0 THEN 50480
50470 L=I: GOTO 50490
50480 II = I: LL = L
50490 NEXT
50500 IF II=LL THEN 50520
50510 WW = E(LL): E(LL) = E(II): E(II) = WW
50520 J = II-1: IF J>=2 THEN 50450
50530 PRINT: IF M=0 THEN RETURN
50540 'Inverse-iteration for eigenvectors.
50550 QFN = N: EPS1 = SQR(QFN)*EPS: SEPS = SQR(EPS):                                  EPS2 = (.000001#*GERSCH)/(QFN*SEPS): RN = 0: RA = EPS*FACTOR: IG = 1
50560 FOR I = 1 TO M: PRINT"Processing eigenvector";I
50570 IM1 = I - 1
50580 FOR J = 1 TO N: W(3,J) = 0: W(4,J) = W(1,J): W(5,J) = V(J,M) - E(I): RN = RN+ RA: IF RN >= EPS THEN RN = RN - EPS
50590 V(J,I) = RN: NEXT
50600 FOR J = 1 TO NM1: IF ABS(W(5,J)) >= ABS(W(1,J)) THEN 50630
50610 W(2,J) = -W(5,J)/W(1,J): W(5,J) = W(1,J): T = W(5,J+1): W(5,J+1) = W(4,J): W(4,J) = T: W(3,J) = W(4,J+1): IF W(3,J)=0 THEN W(3,J)=DEL
50620 W(4,J+1) = 0: GOTO 50650
50630 IF  W(5,J)=0 THEN W(5,J) = DEL
50640 W(2,J) = -W(1,J)/W(5,J)
50650 W(4,J+1) = W(3,J)*W(2,J) + W(4,J+1)
50660 W(5,J+1) = W(4,J)*W(2,J) + W(5,J+1): NEXT
50670 IF W(5,N)=0 THEN W(5,N)=DEL
50680 ITERE = 1
50690 IF ITERE = 1 THEN 50730
50700 FOR J = 1 TO NM1: IF W(3,J)=0 THEN 50720
50710 T = V(J,I): V(J,I) = V(J+1,I): V(J+1,I) = T
50720 V(J+1,I) = V(J,I)*W(2,J) + V(J+1,I): NEXT
50730 V(N,I) = V(N,I)/W(5,N): V(NM1,I) = (V(NM1,I) - V(N,I)*W(4,NM1))/W(5,NM1):       VN = ABS(V(N,I)): VNI = ABS(V(NM1,I)): IF VNI > VN THEN VN = VNI
50740 IF N=2 THEN 50790
50750 K = NM2
50760 V(K,I) = (V(K,I) - V(K+1,I)*W(4,K) - V(K+2,I)*W(3,K))/W(5,K)
50770 VNI = ABS(V(K,I)): IF VNI>VN THEN VN=VNI
50780 K = K-1: IF K>=1 THEN 50760
50790 S = EPS1/VN
50800 FOR J = 1 TO N: V(J,I) = V(J,I)*S: NEXT
50810 IF ITERE > 1 AND VN > 1 THEN 50840
50820 ITERE = ITERE + 1: IF ITERE > 5 THEN 50830 ELSE GOTO 50700
50830 'Transformation of eigenvectors.
50840 IF N=2 THEN 50920
50850 FOR J = 1 TO NM2
50860 K = N-J-1: IF A(K,K)=0 THEN 50910
50870 KP1 = K + 1: SUM =0
50880 FOR KK = KP1 TO N: SUM = A(K,KK)*V(KK,I) + SUM: NEXT
50890 S = -SUM/A(K,K)
50900 FOR KK = KP1 TO N: V(KK,I) = A(K,KK)*S + V(KK,I): NEXT
50910 NEXT
50920 J = IG
50930 IF ABS(E(J) - E(I)) < EPS2 THEN 50960
50940 J = J+1: IF J<=I THEN 50930
50950 J = I
50960 IG = J: IF IG=I THEN 51040
50970 'Reorthogonalization.
50980 FOR K = IG TO IM1: SUM =0
50990 FOR J = 1 TO N: SUM = V(J,K)*V(J,I) + SUM: NEXT
51000 S = -SUM
51010 FOR J = 1 TO N: V(J,I) = V(J,K)*S + V(J,I): NEXT
51020 NEXT
51030 'Normalization.
51040 SUM = 0
51050 FOR J = 1 TO N: SUM = V(J,I)^2 + SUM: NEXT
51060 SINV = 1/SQR(SUM)
51070 FOR J = 1 TO N: V(J,I) = V(J,I)*SINV: NEXT
51080 NEXT
51090 RETURN
60000 PRINT: BEEP: PRINT"Error encountered!  Cannot continue.  Will return to main I/O routine.":PRINT"Be sure that required files exist.": GOSUB 63999
60010 CLOSE 1
60020 CHAIN "nmr1"
63999 IF IPFLAG = 1 THEN RETURN ELSE PRINT:INPUT"Hit <Return> to continue.",A$         :PRINT:RETURN
```

## NMR3.BAS

```bas
1  'NMR3--Part 3 of NMRCALC package.
2  'Calculates line frequencies and intensities.
10 DEFINT I-N: DEFDBL A-H,O-Z
15 'COMMON IPFLAG,IREAD,FF$
16 OPEN "scratch.nmr" FOR INPUT AS #1
17 INPUT #1, IPFLAG: INPUT #1, IREAD: LINE INPUT #1, FF$
18 CLOSE 1
20 DIM A(35,35),B(35,35),E(35),F(35)
30 DIM SF(128,7),BC(7),FZ(8),PM(7,7),SH(7)
40 DIM NCV(35,35)
45 ON ERROR GOTO 60000
50  TI = 0
60 COLOR 14,4,1: KEY OFF: CLS
70 N2 = 1
80 NTOTAL = 0
130 DF$ = FF$ + ".0": PRINT:PRINT "Loading file:  ";DF$: PRINT:                      OPEN DF$ FOR INPUT AS 1
140 INPUT #1, NS: INPUT #1, FR: NF = 2^NS: FZ = NS/2 + 1
145 FACTOR = 1/2^(NS - 3)
150 FOR I = 1 TO NS + 1: FZ = FZ - 1: FZ(I) = FZ: NEXT
160 FOR I = 1 TO NS: INPUT #1, SH(I): INPUT #1, PM(I,I): NEXT
170 FOR I = 1 TO NS - 1: FOR J = I+1 TO NS: INPUT #1, PM(I,J): NEXT: NEXT
180 FOR I = 1 TO NF: FOR J = 1 TO NS: INPUT #1, SF(I,J): NEXT: NEXT
190 FOR I = 0 TO NS: INPUT #1, BC(I): NEXT
200 CLOSE 1
210 PRINT "File now loaded.": PRINT
220 D1$ = FF$ + ".lin": UL = 1: UU = 1: DF$ = D1$: PRINT: PRINT "Setting up file ";DF$: PRINT: OPEN DF$ FOR OUTPUT AS 2: CLOSE 2
230 NZ = 1: GOSUB 61000
240 FOR NZ = 2 TO NS + 1
250 GOSUB 62000
260 GOSUB 61000
262 NTRANS = BC(NZ-2)*BC(NZ-1): NTOTAL = NTOTAL + NTRANS
265 PRINT"Calc:  Fz =";FZ(NZ);"to Fz =";FZ(NZ-1);"(";NTRANS;"TRANSITIONS)."
270 N1 = N2: N2 = N: LL = UL: LU = UU: UL = UU + 1: UU = LU + BC(NZ - 1):            DF$ = D1$: OPEN DF$ FOR APPEND AS 2
275 GOSUB 61500
280 FOR MM = 1 TO N1
290 MI = LL + MM - 1: TN = MI/1000
300 FOR NN = 1 TO N2
310 NI = UL + NN - 1: TM = 0
320 TR = NI + TN: PRINT #2,TR
330 ER = E(MM) - F(NN): PRINT #2,ER
340 FOR K = 1 TO N1
350 A = A(K,MM)
360 FOR L = 1 TO N2
370 IF NCV(K,L) = 0 THEN 390
380 TM = TM + A*B(L,NN)
390 NEXT
400 NEXT
410 TM = (TM/2)^2: TM = TM*FACTOR: PRINT #2,TM
415 TI = TI + TM
420 NEXT
430 NEXT
440 CLOSE 2
450 NEXT
460 PRINT: PRINT "Total of intensities: ";TI
470 PRINT NTOTAL;"transitions calculated and listed."
500 PRINT: PRINT "Calculation of frequencies and intensities finished.": PRINT
510 GOSUB 63999
560 CLS
570 PRINT: PRINT"The following files are saved:": PRINT
580 PRINT TAB(5);FF$;".0"
590 PRINT TAB(5);FF$;".inf"
600 PRINT TAB(5);FF$;".lin"
605 FOR I = 1 TO NS + 1: PRINT TAB(5);FF$ + "." + RIGHT$(STR$(I),LEN(STR$(I))-1)     : NEXT
610 PRINT:PRINT"Ready to exit to final display routines.": GOSUB 63999
1000 CLOSE
1005 OPEN "scratch.nmr" FOR OUTPUT AS #1
1010 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
1020 CLOSE 1
1030 CHAIN "nmr4"
60000 PRINT: BEEP: PRINT"Error encountered!  Can't continue.  Will return to main I/O routine.": GOSUB 63999
60010 CLOSE 1,2
60020 CHAIN "nmr1"
61000 DF$ = FF$ + "." + RIGHT$(STR$(NZ),LEN(STR$(NZ))-1)
61010 OPEN DF$ FOR INPUT AS 1
61020 INPUT #1, N
61030 FOR I = 1 TO N: INPUT #1, F(I): NEXT
61040 IF N > 1 THEN 61060
61050 B(1,1) = 1: GOTO 61065
61060 FOR J = 1 TO N: FOR I = 1 TO N: INPUT #1, B(I,J): NEXT: NEXT
61065 CLOSE 1
61070 RETURN
61500 FOR MM = 1 TO N1
61510 MI = LL + MM - 1
61520 FOR NN = 1 TO N2
61530 NI = UL + NN - 1
61540 V = 0: I = 1
61550 IF SF(MI,I) <> SF(NI,I) THEN V = V + 1
61560 IF V > 1 THEN 61590
61570 I = I + 1: IF I <= NS THEN 61550
61580 NCV(MM,NN) = 1: GOTO 61600
61590 NCV(MM,NN) = 0
61600 NEXT
61610 NEXT
61620 RETURN
62000 N = BC(NZ - 2)
62010 FOR I = 1 TO N: E(I) = F(I): FOR J = 1 TO N: A(I,J) = B(I,J): NEXT:NEXT
62020 RETURN
63999 IF IPFLAG = 1 THEN RETURN ELSE PRINT: INPUT"Hit <Return> to continue.",A$        :RETURN
```

## NMR4.BAS

```bas
1  'Program NMR4--Part 4 of NMRCALC
10 DEFINT I-N
15 'COMMON IPFLAG,IREAD,FF$
16 OPEN "scratch.nmr" FOR INPUT AS #1
17 INPUT #1, IPFLAG: INPUT #1, IREAD: LINE INPUT #1, FF$
18 CLOSE 1
30 SCREEN 0,0,0:COLOR 14,4,1:KEY OFF: CLS
40 DIM BC(7),FZ(8),SLINES(3003,2)
50 DIM PM(7,7),SH(7)
60 DIM SF(128,7),E(35),A(35,35)
70 THRESHOLD1 = 0: THRESHOLD2 = 0
90 ON ERROR GOTO 60000
100 CLS:PRINT:PRINT"Display routine for frequencies and intensities.":PRINT
110 PRINT:PRINT"This is in a menu format; to get menu, press 'M' in command mode.":PRINT:BEEP:PRINT"NOTE:  IT IS NECESSARY TO READ IN THE LINES VIA THE 'R' COMMAND IF AUTO-READ":PRINT"       NOT IN EFFECT!": GOSUB 63999
120 IF IREAD=1 THEN BF = 0: GOSUB 5100
200 CLS:PRINT:PRINT"Command ('M' for menu):  ";:GOSUB 500
210 IF P$ = "E" THEN GOSUB 1000
215 IF P$ = "W" THEN GOSUB 900: CHAIN "nmr6"
220 IF P$ = "L" THEN GOSUB 3000
225 IF P$ = "T" THEN GOSUB 19000
230 IF P$ = "M" THEN GOSUB 2000
240 IF P$ = "D" THEN GOSUB 4000
250 IF P$ = "R" THEN GOSUB 5000
260 IF P$ = "S" THEN GOSUB 20000
270 IF P$ <> "Q" THEN 280
275 CLS: PRINT: PRINT"Returning control to system.": PRINT: END
280 IF P$ = "U" THEN GOSUB 6000
290 IF P$ = "C" THEN GOSUB 10000
300 IF P$ = "P" THEN GOSUB 900: CHAIN "nmr5"
310 IF P$ = "V" THEN GOSUB 14000
320 IF P$ = "F" THEN GOSUB 16000
330 IF P$ = "Z" THEN LPRINT CHR$(12);
340 IF P$ = "A" THEN GOSUB 18000
390 GOTO 200
500 P$ = INKEY$: IF P$ = "" THEN 500
510 IF ASC(P$) > 90 THEN P$ = CHR$(ASC(P$) - 32)
520 PRINT P$
530 RETURN
800 PRINT:PRINT"Do you desire printed output? ";
810 A$ = INKEY$: IF A$ = "" THEN 810
820 IF ASC(A$) > 90 THEN A$ = CHR$(ASC(A$) - 32)
830 PRINT A$
840 IF A$ = "Y" THEN IPRINT = 1 ELSE IF A$ = "N" THEN IPRINT = 0                      ELSE BEEP: GOTO 800
850 RETURN
900 OPEN "scratch.nmr" FOR OUTPUT AS #1
901 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
902 RETURN
1000 CLS:PRINT:PRINT"Returning to main I/O routine.":PRINT
1010 CHAIN "nmr1"
2000 CLS:PRINT:PRINT"Command menu:":PRINT
2005 PRINT "'A'--Alter status of auto-read option."
2010 PRINT "'C'--Display a particular line."
2020 PRINT "'D'--Display spectrum parameters."
2030 PRINT "'E'--Exit back to main I/O routine."
2035 PRINT "'F'--Check status and/or alter state of pause flag."
2040 PRINT "'L'--Display spectral lines."
2050 PRINT "'M'--Display this menu."
2055 PRINT "'P'--Exit to plotting routines."
2060 PRINT "'Q'--Quit and return to system control."
2070 PRINT "'R'--Read needed data from disk (allows resetting of file name)."
2080 PRINT "'S'--Sort lines by frequency."
2085 PRINT "'T'--Enter intensity thresholds for line printing."
2090 PRINT "'U'--Retrieve lines from disk (to get back unsorted lines)."
2100 PRINT "'V'--Print eigenvalues and eigenvectors."
2102 PRINT "'W'--Exit to energy level (or Fz) plotting routines."
2105 PRINT "'Z'--Form feed to printer."
2110 PRINT:INPUT"Hit return to continue. ",A$: RETURN
3000 CLS:PRINT:PRINT"Ready to display spectrum lines.  To abort, hit 'Q' during pause message.":PRINT
3005 GOSUB 800:  IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"Calculated lines of spectrum.":LPRINT
3010 PRINT: PRINT NS;"nuclei":PRINT NF;"spin functions":PRINT NL;"spectrum lines": PRINT
3011 IF THRESHOLD1=0 AND THRESHOLD2=0 THEN 3015
3012 PRINT"Lower threshold: ",THRESHOLD1
3013 PRINT"Upper threshold: ",THRESHOLD2
3015 IF IPRINT=1 THEN LPRINT NS;"nuclei":LPRINT NF;"spin functions":LPRINT NL;"spectrum lines":LPRINT
3016 IF THRESHOLD1=0 AND THRESHOLD2=0 THEN 3020
3017 IF IPRINT=1 THEN LPRINT"Lower threshold: ",THRESHOLD1
3018 IF IPRINT=1 THEN LPRINT"Upper threshold: ",THRESHOLD2
3020 IC = 0: GOSUB 63999
3025 A$ = " "
3030 FOR I = 1 TO NL STEP 15
3035 IF LEFT$(A$,1) = "q" OR LEFT$(A$,1) = "Q" THEN A$ = "Q"
3036 IF A$ = "Q" THEN 3050
3040 GOSUB 3900
3050 K = I + 14: IF K > NL THEN K = NL
3060 FOR J = I TO K
3061 IF THRESHOLD1 = 0 AND THRESHOLD2 = 0 THEN 3069
3062 SLINE = SLINES(J,2)
3063 IF SLINE < THRESHOLD1 THEN 3410
3064 IF SLINE > THRESHOLD2 THEN 3410
3069 IF A$ = "Q" THEN 3410
3070 SL = SLINES(J,0): SM = 1000*(SL - INT(SL)): SL = INT(SL): SM = INT(SM+.1)
3090 PRINT USING "###";SL;:PRINT">";:PRINT USING "###";SM;
3095 IF IPRINT=1 THEN LPRINT USING "###";SM;:LPRINT">";:LPRINT USING "###";SL;
3100 F = SLINES(J,1)
3110 PRINT TAB(8);
3115 IF IPRINT=1 THEN LPRINT TAB(8);
3160 PRINT USING "#####.##";F;:PRINT TAB(20);
3165 IF IPRINT=1 THEN LPRINT USING "#####.##";F;:LPRINT TAB(20);
3170 F = SLINES(J,2): IF F > .00001 THEN IC = IC + 1
3200 PRINT USING "##.#####";F;
3205 IF IPRINT=1 THEN LPRINT USING "##.#####";F;
3400 PRINT TAB(35);: PRINT USING "####"; J
3405 IF IPRINT=1 THEN LPRINT TAB(35);:LPRINT USING "####"; J
3410 NEXT
3415 IF A$ = "Q" THEN 3430
3420 GOSUB 63999
3430 NEXT
3435 IF A$ = "Q" THEN PRINT: PRINT"Printing routine aborted.  Partial results follow--"
3440 PRINT:PRINT"Sum of intensities:";:PRINT USING "###.#####";TI
3445 PRINT
3450 PRINT IC;"lines have intensity > 0.00001":PRINT
3460 PRINT"Printing of line intensities completed.": GOTO 63999
3900 CLS:PRINT:PRINT" Trans";TAB(11);"Freq";TAB(20);"Intensity";TAB(35);"Line#"
3902 IF I>1 THEN 3910
3905 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT" Trans";TAB(11);"Freq";TAB(20);"Intensity";TAB(35);"Line#"
3910 PRINT "-------";TAB(11);"----"; TAB(20);"---------";TAB(35);"-----"
3912 IF I>1 THEN 3920
3915 IF IPRINT=1 THEN LPRINT "-------";TAB(11);"----"; TAB(20);"---------";TAB(35);"-----"
3920 RETURN
4000 CLS:PRINT:PRINT"Spectral parameters:":PRINT:PRINT
4002 GOSUB 800
4004 CLS:PRINT:PRINT"Chemical shifts:"
4005 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"Spectral parameters and other input data for this data set:":LPRINT
4006 IF IPRINT=1 THEN LPRINT:LPRINT"Chemical shift information:"
4010 PRINT:PRINT"Spectrometer frequency: ";FR;" MHz"
4015 IF IPRINT = 1 THEN LPRINT:LPRINT"Spectrometer frequency: ";FR;" MHz"
4020 PRINT:PRINT:PRINT" #";TAB(12);"ppm";TAB(24);"Hz":PRINT"--";TAB(12);"---";        TAB(22);"------"
4025 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT" #";TAB(12);"ppm";TAB(24);"Hz":LPRINT"--";TAB(12);"---";        TAB(22);"------"
4030 FOR I = 1 TO NS
4040 PRINT I;TAB(10);:PRINT USING "##.###";SH(I);:PRINT TAB(21);:                     PRINT USING "####.##";PM(I,I)
4045 IF IPRINT=1 THEN LPRINT I;TAB(10);:LPRINT USING "##.###";SH(I);:LPRINT TAB(21);:LPRINT USING "####.##";PM(I,I)
4050 NEXT
4060 GOSUB 63999
4070 CLS:PRINT:PRINT"Coupling constants:":PRINT
4075 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"Coupling constants:":LPRINT
4080 PRINT " # ";TAB(6);
4082 IF IPRINT=1 THEN LPRINT " # ";TAB(6);
4084 FOR I = 1 TO NS: PRINT USING "     #    ";I;
4086 IF IPRINT=1 THEN LPRINT USING "     #    ";I;
4088 NEXT
4090 PRINT:PRINT TAB(6);
4092 IF IPRINT=1 THEN LPRINT: LPRINT TAB(6);
4094 FOR I = 1 TO NS: PRINT" ---------";
4096 IF IPRINT=1 THEN LPRINT" ---------";
4098 NEXT
4100 PRINT
4102 IF IPRINT=1 THEN LPRINT
4104 FOR I = 1 TO NS
4106 PRINT USING " #";I;:PRINT TAB(6);
4108 IF IPRINT=1 THEN LPRINT USING " #";I;:LPRINT TAB(6);
4110 FOR J = 1 TO NS
4112 IF I=J THEN PRINT"    ------"; ELSE PRINT USING "#######.##";PM(I,J);
4114 IF I=J AND IPRINT=1 THEN LPRINT"    ------";
4116 IF I<>J AND IPRINT=1 THEN LPRINT USING "#######.##"; PM(I,J);
4118 NEXT
4120 IF IPRINT=1 THEN LPRINT
4122 PRINT
4124 NEXT
4140 PRINT:PRINT"Listing of parameters completed.":GOTO 63999
5000 CLS:PRINT:PRINT"Ready to retrieve information from disk.":PRINT
5005 BF = 0
5010 PRINT"Do you need to specify the data set name? ";:GOSUB 500
5012 IF P$ = "Y" THEN 5020 ELSE IF P$ = "N" THEN 5100 ELSE BEEP: GOTO 5010
5020 PRINT:INPUT"Enter data set name:  ",FF$
5100 PRINT:PRINT"Now reading in the following:":PRINT
5110 DF$ = FF$ + ".0": PRINT TAB(5);DF$
5120 OPEN DF$ FOR INPUT AS 1
5130 INPUT #1,NS: INPUT #1,FR
5140 FOR I = 1 TO NS: INPUT #1,SH(I): INPUT #1,PM(I,I): NEXT
5150 FOR I = 1 TO NS-1: FOR J = I+1 TO NS: INPUT #1, PM(I,J): PM(J,I) = PM(I,J):      NEXT:NEXT
5151 NF = 2^NS
5155 FOR I = 1 TO NF: FOR J = 1 TO NS: INPUT #1,SF(I,J): NEXT:NEXT
5160 CLOSE 1
5170 DF$ = FF$ + ".inf":PRINT TAB(5);DF$
5180 OPEN DF$ FOR INPUT AS 1
5190 INPUT #1,NS: INPUT #1,NF
5200 FOR I = 0 TO NS: INPUT #1,BC(I): NEXT
5210 FOR I = 1 TO NS + 1: INPUT #1, FZ(I): NEXT
5220 CLOSE 1
5230 NL = 0
5240 FOR I = 1 TO NS: NL = NL + BC(I-1)*BC(I): NEXT
5250 DF$ = FF$ + ".lin":PRINT TAB(5);DF$
5260 OPEN DF$ FOR INPUT AS 1
5270 TI = 0
5280 FOR I = 1 TO NL
5290 INPUT #1,SLINES(I,0)
5300 INPUT #1,SLINES(I,1): INPUT #1,SLINES(I,2)
5310 TI = TI + SLINES(I,2): NEXT
5320 CLOSE 1
5330 IF BF <> 0 THEN RETURN
5340 PRINT:PRINT"Reading from disk completed.":PRINT: GOTO 63999
6000 CLS:PRINT:PRINT"Ready to retrieve lines from disk.  If unsorted lines remain on disk, this is":PRINT" the same as unsorting.":PRINT
6010 BF=1: GOSUB 63999
6020 DF$ = FF$ + ".lin": PRINT "Retrieving ";DF$
6030 GOSUB 5260
6040 BF = 0
6050 PRINT:PRINT"Retrieval completed.":GOTO 63999
10000 CLS:PRINT:PRINT"Routine to display particular lines."
10010 PRINT:PRINT"Note that values are not rounded off in this routine--you are not getting":PRINT" results in a tabular form!":PRINT
10020 PRINT"Submenu of three commands:":PRINT
10030 PRINT TAB(5);"'N'--Display by current line number."
10040 PRINT TAB(5);"'T'--Select by transition indices."
10050 PRINT TAB(5);"'Q'--Exit from this routine.":GOSUB 63999
10055 CLS:PRINT:PRINT"Sub-command (N, T, or Q):  ";: GOSUB 500
10060 GOSUB 63999
10070 IF P$ = "N" THEN GOSUB 10100
10080 IF P$ = "T" THEN GOSUB 10500
10090 IF P$ = "Q" THEN 200 ELSE 10055
10100 CLS:PRINT:PRINT"Printing individual lines.  To exit, hit <Return>.":PRINT
10110 PRINT: INPUT"Enter line number: ",I
10120 IF I = 0 THEN 10055
10130 IF I > 0 AND I <= NL THEN 10150
10140 BEEP: PRINT"Illegal value!  Try again!": GOTO 10110
10150 PRINT "Transition: ";
10160 SL = SLINES(I,0): SM = 1000*(SL - INT(SL)): SL = INT(SL): SM = INT(SM+.1)
10170 PRINT SL;">";SM
10180 PRINT "Frequency =";SLINES(I,1)
10190 PRINT "Intensity =";SLINES(I,2): GOTO 10110
10500 CLS:PRINT:PRINT"Examine lines by transition numbers.":PRINT
10510 PRINT "Enter the individual functions numbers as requested.  Terminate by entering":PRINT" a <Return> for either.  Order of entry is unimportant.":PRINT
10520 GOSUB 63999
10530 CLS:PRINT
10540 PRINT:INPUT"Enter index #1: ",L
10550 IF L = 0 THEN 10055
10560 IF L > 0 AND L <= NF THEN 10580
10570 BEEP:PRINT"Illegal index!  Try again!": GOTO 10540
10580 INPUT"Enter index #2: ",M
10590 IF M = 0 THEN 10055
10600 IF M > 0 AND M <= NF THEN 10620
10610 BEEP:PRINT"Illegal index!  Try again!": GOTO 10580
10620 IF L < M THEN TT = M + L/1000 ELSE TT = L + M/1000
10630 I = 1
10640 IF ABS(TT - SLINES(I,0)) < .00001 THEN 10700
10650 I = I + 1: IF I <= NL THEN 10640
10660 BEEP: PRINT "No such transition!": GOTO 10540
10700 PRINT:PRINT"Line number:";I
10710 PRINT "Frequency =";SLINES(I,1)
10720 PRINT "Intensity =";SLINES(I,2)
10730 PRINT: GOTO 10540
14000 CLS:PRINT:PRINT"Routine to display particular sub-block of eigenvalues and eigenvectors.":PRINT
14010 PRINT"Possible sub-blocks: 1 to";NS+1: PRINT
14015 GOSUB 800
14016 IF IPRINT=1 THEN LPRINT:LPRINT"Eigenvalues and eigenvectors:":LPRINT
14020 INPUT"Enter sub-block number (exit with <Return>): ",IB: PRINT:                  IF IB = 0 THEN RETURN
14030 LL = 1: IF IB > NS + 1 THEN BEEP: PRINT "Illegal value!  Try again!":            GOTO 14020
14035 IF IB = 1 THEN 14050
14040  FOR I = 1 TO IB - 1: LL = LL + BC(I-1): NEXT
14050 DF$ = FF$ + "." + RIGHT$(STR$(IB),LEN(STR$(IB))-1):                              OPEN DF$ FOR INPUT AS 1
14060 INPUT #1, N
14070 FOR I = 1 TO N: INPUT #1, E(I): NEXT
14080 IF N > 1 THEN 14090
14085 A(1,1) = 1: GOTO 14100
14090 FOR J = 1 TO N: FOR I = 1 TO N: INPUT #1, A(I,J): NEXT: NEXT
14100 CLOSE 1
14105 FOR KK = 1 TO N STEP 7
14110 CLS: PRINT: PRINT"Sub-block number";IB:PRINT:PRINT"Func";TAB(10);
14112 IF IPRINT=1 THEN LPRINT:LPRINT:LPRINT"Sub-block number";IB;
14113 IF IPRINT=1 AND KK > 1 THEN LPRINT"(continued)" ELSE                             IF IPRINT=1 THEN LPRINT
14114 IF IPRINT=1 THEN LPRINT:LPRINT"Func";TAB(10);
14115 IX = KK + 6: IF IX > N THEN IX = N
14120 FOR I = KK TO IX: NN = LL + I - 1
14125 PRINT USING "  ###     ";NN;
14126 IF IPRINT=1 THEN LPRINT USING "  ###     ";NN;
14127 NEXT
14130 PRINT: PRINT "----";TAB(10);
14131 IF IPRINT=1 THEN LPRINT:LPRINT "----";TAB(10);
14140 FOR I = KK TO IX: PRINT "--------  ";
14141 IF IPRINT=1 THEN LPRINT "--------  ";
14142 NEXT
14145 PRINT: IF IPRINT=1 THEN LPRINT
14150 FOR I = 1 TO N: II = LL + I - 1
14160 FOR J = 1 TO NS
14170 IF SF(II,J) > 0 THEN PRINT "+";: IF IPRINT=1 THEN LPRINT "+";
14180 IF SF(II,J) < 0 THEN PRINT "-";: IF IPRINT=1 THEN LPRINT "-";
14190 NEXT
14200 PRINT TAB(8);: IF IPRINT = 1 THEN LPRINT TAB(8);
14210 FOR J = KK TO IX
14220 A = A(I,J)
14230 PRINT USING "###.######";A;:IF IPRINT=1 THEN LPRINT USING "###.######";A;
14235 NEXT
14240 PRINT: IF IPRINT=1 THEN LPRINT
14245 NEXT
14250 PRINT TAB(10);: IF IPRINT=1 THEN LPRINT TAB(10);
14254 FOR I = KK TO IX: PRINT"--------  ";
14256 IF IPRINT=1 THEN LPRINT"--------  ";
14258 NEXT
14259 PRINT: IF IPRINT=1 THEN LPRINT
14260 PRINT"E-vals:";TAB(8);: IF IPRINT=1 THEN LPRINT"E-vals:";TAB(8);
14262 FOR I = KK TO IX: PRINT USING "#######.##";E(I);
14264 IF IPRINT=1 THEN LPRINT USING "#######.##";E(I);
14265 NEXT
14267 PRINT: IF IPRINT=1 THEN LPRINT
14270 GOSUB 63999
14275 NEXT
14290 CLS:PRINT: GOTO 14020
15000 CLS:PRINT:PRINT"Trans";TAB(10);"Freq";TAB(25);"Intensity"
15010 PRINT"-----";TAB(10);"----";TAB(25);"---------"
15020 RETURN
16000 CLS:PRINT:PRINT"Pause flag is currently ";
16010 IF IPFLAG = 1 THEN PRINT "ON." ELSE PRINT "OFF."
16020 PRINT:PRINT"Do you wish to alter the state of the pause flag? ";                 : GOSUB 500
16030 IF P$ = "N" THEN RETURN ELSE IF P$ <> "Y" THEN 16020
16040 IF IPFLAG = 0 THEN IPFLAG = 1 ELSE IPFLAG = 0
16050 RETURN
18000 CLS:PRINT:PRINT"Auto-read flag is currently ";
18010 IF IREAD = 0 THEN PRINT "OFF" ELSE PRINT "ON"
18020 PRINT:PRINT"Do you wish to alter its status? ";: GOSUB 500
18030 IF P$ = "N" THEN 63999
18040 IF P$ <> "Y" THEN BEEP: GOTO 18000
18050 IF IREAD = 0 THEN IREAD = 1 ELSE IREAD = 0
18060 GOTO 63999
19000 CLS:PRINT:PRINT"Routine for entering thresholds.":PRINT
19010 PRINT"Rules:  Prints all lines between THRESHOLD1 & THRESHOLD2."
19020 PRINT"        Set THRESHOLD1 for minimum intensity to print."
19030 PRINT"        Set THRESHOLD2 for maximum intensity to print."
19040 PRINT
19050 PRINT"        Set both = 0 to print all lines."
19060 PRINT"        Set THRESHOLD2 = 0 to print all lines above THRESHOLD1."
19070 PRINT
19080 INPUT"Enter THRESHOLD1:  ",THRESHOLD1
19090 INPUT"Enter THRESHOLD2:  ",THRESHOLD2
19100 IF THRESHOLD1 > 0 AND THRESHOLD2 = 0 THEN THRESHOLD2 = 1.00001
19110 GOTO 63999
20000 CLS:PRINT:PRINT"Now sorting lines from highest to lowest frequencies (NMR convention).":PRINT
20005 FOR I = 1 TO NL - 1
20006 PRINT ".";
20010 SM = SLINES(I,1): IS = I
20020 FOR J = I + 1 TO NL
20030 IF SLINES(J,1) < SM THEN 20050
20040 IS = J: SM = SLINES(J,1)
20050 NEXT
20060 IF IS = I THEN 20100
20070 FOR K = 0 TO 2: SWAP SLINES(I,K),SLINES(IS,K): NEXT
20100 NEXT
20110 PRINT:PRINT"Sorting completed.": PRINT:PRINT"You now have the option of storing the sorted lines on the disk.  Note that":PRINT" this destroys the unsorted lines and reduces the precision!":PRINT
20120 PRINT:PRINT"Put sorted lines on disk? ";: GOSUB 500
20130 IF P$ = "N" THEN 63999
20135 IF P$ <> "Y" THEN 20120
20140 PRINT:PRINT"Are you absolutely sure? ";: GOSUB 500
20142 IF P$ = "N" THEN 63999
20144 IF P$ <> "Y" THEN 20120
20150 PRINT:PRINT"Now replacing unsorted lines with sorted lines!":PRINT
20160 DF$ = FF$ + ".lin": OPEN DF$ FOR OUTPUT AS 2
20170 FOR I = 1 TO NL
20180 PRINT #2, CDBL(SLINES(I,0))
20190 PRINT #2, CDBL(SLINES(I,1))
20200 PRINT #2, CDBL(SLINES(I,2))
20210 NEXT
20220 CLOSE 2
20230 PRINT:PRINT"Storage of sorted lines completed.  Unsorted lines destroyed."      : PRINT: GOTO 63999
60000 PRINT: BEEP: PRINT"Error encountered!  Check that needed files have been read in!": GOSUB 63999
60010 CLOSE 1,2
60020 RESUME 100
63999 IF IPFLAG = 1 THEN RETURN ELSE PRINT:INPUT"Hit <Return> to continue.",A$:        :RETURN
```

## NMR5.BAS

```bas
1 'NMR5--Part 5 of NMRCALC package.  Plotting routines.
10 DEFINT I-N
15 'COMMON IPFLAG,IREAD,FF$
16 OPEN "scratch.nmr" FOR INPUT AS 1
17 INPUT #1, IPFLAG: INPUT #1, IREAD: LINE INPUT #1, FF$
18 CLOSE #1
20 DIM PL(639),BC(7),SLINES(3003,2)
25 DIM PLP(639),IPL(639)
27 SCREEN 0,0,0:COLOR 14,4,1:KEY OFF:CLS
30 CLS:PRINT:PRINT"Routine for plotting spectra as either stick plots or as Lorentzians.":PRINT:PRINT"Be sure to read in the data files if auto-read not in effect!": GOSUB 63999
35 ON ERROR GOTO 60000
40 DELNU = .5: ITFLAG = 0: IRFLAG = 0
50 HF = .8: FRAC = .001: YSCALE = 172
55 SCREEN 0: COLOR 14,4,1: CLS: KEY OFF
60 IF IREAD=1 THEN GOSUB 2020
100 SCREEN 0,0,0:COLOR 14,4,1: CLS: PRINT:PRINT"Enter command ('ME' for menu): ";: GOSUB 500
105 IF PP$ = "FF" THEN LPRINT CHR$(12);
110 IF PP$ = "ME" THEN GOSUB 1000
112 IF PP$ = "QE" THEN GOSUB 900: CHAIN "nmr6"
115 IF PP$ = "DR" THEN GOSUB 11000
120 IF PP$ = "RD" THEN GOSUB 2000
125 IF PP$ = "EP" THEN GOSUB 900: CHAIN "nmr6"
130 IF PP$ = "SP" THEN GOSUB 3000
135 IF PP$ = "FT" THEN GOSUB 20000
140 IF PP$ = "LP" THEN GOSUB 4000
150 IF PP$ = "HF" THEN GOSUB 5000
160 IF PP$ = "LF" THEN GOSUB 6000
170 IF PP$ = "VG" THEN GOSUB 7000
175 IF PP$ = "TI" THEN GOSUB 10000
180 IF PP$ = "NH" THEN GOSUB 9000
190 IF PP$ = "QM" THEN GOSUB 900: CHAIN "NMR1"
195 IF PP$ = "QL" THEN GOSUB 900: CHAIN "nmr4"
196 IF PP$ = "QT" THEN CLS: PRINT:PRINT"End of run.  Returning control to system.": END
200 GOTO 100
500 P1$ = INKEY$: IF P1$ = "" THEN 500
510 IF ASC(P1$) > 90 THEN P1$ = CHR$(ASC(P1$) - 32)
515 PRINT P1$;
520 P2$ = INKEY$: IF P2$ = "" THEN 520
530 IF ASC(P2$) > 90 THEN P2$ = CHR$(ASC(P2$) - 32)
535 PRINT P2$
540 PP$ = P1$ + P2$
550 RETURN
600 P$ = INKEY$: IF P$ = "" THEN 600
610 IF ASC(P$) > 90 THEN P$ = CHR$(ASC(P$) - 32)
620 PRINT P$
630 RETURN
700 BEEP:PRINT:PRINT"Illegal range.  Check values of upper and lower frequencies.": GOTO 63999
900 OPEN "scratch.nmr" FOR OUTPUT AS 1
910 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
920 CLOSE #1
930 RETURN
1000 CLS:PRINT:PRINT"Menu of available options--":PRINT
1002 PRINT"'DR'--Display ranges on plot (control of option to request this)."
1004 PRINT"'EP'--Exit to energy level (or Fz level) plotting routines."
1005 PRINT"'FF'--Send form feed to printer (used after a printer plot)."
1006 PRINT"'FT'--Dump plot to disk for use by FFT program (1K transform)."
1010 PRINT"'HF'--Set high (left) frequency limit of plot."
1020 PRINT"'LF'--Set low frequency (right) limit of plot."
1030 PRINT"'LP'--Do a Lorentzian plot (sets linewidth)."
1040 PRINT"'ME'--Display this menu."
1050 PRINT"'NH'--Redo Lorentzian plot with new vertical scale."
1052 PRINT"'QE'--Exit to energy level plotting routine (NMR6)."
1055 PRINT"'QL'--Chain back to listing routine (NMR4)"
1056 PRINT"'QM'--Chain back to main I/O routine (NMR1)"
1060 PRINT"'QT'--Exit and return control to system."
1070 PRINT"'RD'--Read spectrum line file.  This must be done before plotting!"
1080 PRINT"'SP'--Do a stick plot of spectrum."
1085 PRINT"'TI'--Puts a title on bottom of plot."
1090 PRINT"'VG'--Set vertical gain for normalization."
1100 PRINT:INPUT"Hit <Return> to continue.", A$: RETURN
2000 CLS:PRINT:PRINT"Ready to enter in spectrum lines.  Data set name needed? ";: GOSUB 600: IF P$ = "N" THEN 2020 ELSE IF P$ <> "Y" THEN 2000
2010 PRINT:INPUT"Enter data set name: ",FF$
2020 DF$ = FF$ + ".inf": OPEN DF$ FOR INPUT AS 1
2025 PRINT:PRINT"Reading in file ";DF$
2030 INPUT #1,NS: INPUT #1,NL
2040 FOR I = 0 TO NS: INPUT #1, BC(I): NEXT
2050 CLOSE 1
2051 DF$ = FF$ + ".0": OPEN DF$ FOR INPUT AS 1
2052 PRINT:PRINT"Getting spectrometer frequency."
2053 INPUT #1, NULL: INPUT #1, FR
2054 CLOSE 1
2055 FU = 10*FR: FL = 0
2059 NL = 0
2060 FOR I = 1 TO NS: NL = NL + BC(I-1)*BC(I): NEXT
2070 PRINT:PRINT NS;"spins": PRINT NL;"transitions": PRINT: DF$ = FF$ + ".lin":       OPEN DF$ FOR INPUT AS 1
2075 PRINT:PRINT"Reading in file ";DF$
2080 FOR I = 1 TO NL: FOR J = 0 TO 2: INPUT #1, SLINES(I,J): NEXT: NEXT
2090 CLOSE 1
2100 PRINT"Spectrum lines now loaded.": GOTO 63999
3000 IF FL > FU THEN 700 ELSE CLS:PRINT:PRINT "Now producing stick plot. Please stand by.":PRINT:PRINT"After plot completed, hit any key to get back to command mode and text screen.":PRINT
3005 LFLAG = 0
3010 GOSUB 3900
3020 FOR I = 1 TO NL
3025 PLINE = SLINES(I,1): IF PLINE > FU OR PLINE < FL THEN 3050
3030 IP = INT(RM*(PLINE - FU)): IF IP < 0 OR IP > 639 THEN 3050
3040 PL(IP) = PL(IP) + SLINES(I,2)
3050 NEXT
3060 GOSUB 8000
3070 FOR I = 0 TO 639: PL(I) = HF*PL(I)/X: NEXT
3075 IF LFLAG = 1 THEN RETURN
3080 GOSUB 3800
3090 FOR I = 0 TO 639
3100 IY = INT(YSCALE*(1 - PL(I))): IF IY < 0 THEN IY = 0
3110 IF IY < YSCALE THEN LINE (I,YSCALE)-(I,IY)
3120 NEXT
3125 IF ITFLAG THEN LOCATE 24,2:  PRINT TITLE$;
3127 IF IRFLAG THEN GOSUB 11500
3130 BEEP
3140 A$ = INKEY$: IF A$ = "" THEN 3140
3145 IF ITFLAG OR IRFLAG THEN PRINT
3150 RETURN
3800 SCREEN 0: SCREEN 2: OUT 985,14: LINE(0,0)-(639,199),,B: RETURN
3900 RM = 639/(FL - FU)
3910 PRINT:PRINT"Resolution: "; -1/RM;"Hz": PRINT
3920 FOR I = 0 TO 639: PL(I) = 0: NEXT
3930 RETURN
4000 IF FL > FU THEN 700 ELSE CLS:PRINT:PRINT"Routine to produce Lorentzian plot.":PRINT
4010 PRINT"Current linewidth: ";DELNU:PRINT: LFLAG = 1
4020 PRINT:INPUT"Enter new linewidth (or hit <Return> to keep old): ",DELNUTEMP
4030 IF DELNUTEMP > 0 THEN DELNU = DELNUTEMP
4040 GOSUB 3900
4050 RW = -2/(DELNU*RM)
4060 PRINT"This may take a while.  To pass the time, things will be displayed on the":PRINT" screen as they are generated.": PRINT:PRINT"After plot completed, hit any key to resume with text screen.": GOSUB 63999
4070 GOSUB 3800
4080 GOSUB 3020: LFLAG = 0
4090 INDEX = 0
4100 FOR I = 0 TO 639
4110 IF PL(I) > 0 THEN INDEX = INDEX + 1: IPL(INDEX) = I: PLP(INDEX) = PL(I)
4120 NEXT
4125 GOSUB 8000: PMIN = FRAC*X
4130 FOR I = 0 TO 639: PL(I) = 0: NEXT
4140 FOR I = 1 TO INDEX
4150 IPL = IPL(I): PLP = PLP(I)
4155 PSET(IPL,YSCALE*(1-PLP)): PL(IPL) = PL(IPL) + PLP
4160 J = IPL
4162 J = J + 1: IF J > 639 THEN 4170
4164 PLJ = PLP/(1 + (RW*(J - IPL))^2): IF PLJ < PMIN THEN 4170
4166 PL(J) = PL(J) + PLJ: PSET (J,YSCALE*(1-PLJ))
4168 GOTO 4162
4170 J = IPL
4172 J = J -1: IF J < 0 THEN 4200
4174 PLJ = PLP/(1 + (RW*(J - IPL))^2): IF PLJ < PMIN THEN 4200
4176 PL(J) = PL(J) + PLJ: PSET (J,YSCALE*(1-PLJ))
4178 GOTO 4172
4200 NEXT
4210 GOSUB 8000
4220 FOR I = 0 TO 639: PL(I) = HF*PL(I)/X: NEXT
4230 GOSUB 3800
4240 PSET (0,YSCALE)
4250 FOR I = 0 TO 639
4260 PY = YSCALE*(1- PL(I)): IF PY < 0 THEN PY = 0
4270 LINE -(I,PY)
4280 NEXT
4285 IF ITFLAG THEN LOCATE 24,2: PRINT TITLE$;
4287 IF IRFLAG THEN GOSUB 11500
4288 IF IRFLAG THEN PRINT "     Resolution:  ";: PRINT USING "##.## Hz"; DELNU
4290 BEEP
4300 GOTO 3140
5000 CLS:PRINT:PRINT"Routine to enter highest frequency to plot in PPM (left).":PRINT
5010 FU = FU/FR: PRINT"Current value: ";FU
5020 INPUT"Enter new value in PPM (or hit <Return> to keep old): ",FU$
5030 IF FU$ <> "" THEN FU = VAL(FU$)*FR ELSE FU = FU*FR
5040 GOTO 63999
6000 CLS:PRINT:PRINT"Routine to enter lowest frequency to plot in PPM (right).":PRINT
6010 FL = FL/FR: PRINT"Current value: ";FL
6020 INPUT"Enter new value in PPM (or hit <Return> to keep old): ",FL$
6030 IF FL$ <> "" THEN FL = VAL(FL$)*FR ELSE FL = FL*FR
6040 GOTO 63999
7000 CLS:PRINT:PRINT"Enter 'normalization' constant.  This must be between 0 and 1 for plot to be":PRINT" contained within the vertical scale.":PRINT
7010  PRINT"Current value: ";HF
7020 PRINT:INPUT"Enter new value (or hit <Return> to keep old): ",HFTEMP
7030 IF HFTEMP > 0 THEN HF = HFTEMP
7040 GOTO 63999
8000 X = 0
8010 FOR I = 0 TO 639
8020 IF X < PL(I) THEN X = PL(I)
8030 NEXT
8040 RETURN
9000 CLS:PRINT:PRINT"Routine to replot Lorentzian with new vertical scale.":         PRINT
9010 PRINT"Current scale factor:  ";HF: HFSAVE = HF
9020 PRINT:INPUT"Enter new scale factor (or hit <Return> to keep old): ",HF
9030 IF HF = 0 THEN HF = HFSAVE
9040 GOSUB 4210
9050 HF = HFSAVE
9060 RETURN
10000 CLS: PRINT:PRINT"Routine to enter a title to appear at bottom of spectrum.":PRINT
10010 PRINT"Enter title on next line.  It must be no longer than 78 characters."      :LINE INPUT "",TITLE$
10020 IF TITLE$ = "" THEN ITFLAG = 0 ELSE ITFLAG = 1
10030 RETURN
11000 CLS:PRINT:PRINT"Display ranges on plot? ";: GOSUB 600
11010 IF P$ = "N" THEN IRFLAG = 0: GOTO 63999
11020 IF P$ = "Y" THEN IRFLAG = 1 ELSE BEEP: GOTO 11000
11030 GOTO 63999
11500 LOCATE 2,2: PRINT USING " ####.##";FR;: PRINT " MHz       Range:  ";
11510 A = FU/FR: GOSUB 11600
11515 PRINT "- ";
11520 A = FL/FR: GOSUB 11600
11525 PRINT "PPM";
11530 RETURN
11600 IF A < 10 THEN PRINT USING "#.## ";A;
11610 IF A >= 10 AND A<100 THEN PRINT USING "##.## ";A;
11620 IF A >= 100 AND A<1000 THEN PRINT USING "###.## ";A;
11630 IF A >= 1000 THEN PRINT USING "####.## ";A;
11640 RETURN
20000 CLS:PRINT:PRINT"Routine to dump spectrum plot to disk for use by FFT program.":PRINT
20010 PRINT"NOTE:  YOU MUST HAVE PLOTTED THE SPECTRUM FOR THIS TO WORK!!!!!!!!":       PRINT
20020 PRINT"Has the spectrum been plotted?  ";: GOSUB 600
20030 IF P$ <> "Y" THEN PRINT "Generate spectrum and then return to this routine.": GOTO 63999
20040 PRINT:INPUT"Enter name of file to be used by FFT program:  ",OUTFILE$
20050 PRINT:PRINT"Now storing spectrum in file ";OUTFILE$
20060 OPEN OUTFILE$ FOR OUTPUT AS #1
20070 J = 10: PRINT #1, J
20080 J = 2^J - 1
20090 FOR I = 0 TO 639
20100 PRINT #1, PL(I)
20110 PRINT #1, 0!
20120 NEXT
20130 FOR I = 640 TO J
20140 PRINT #1, 0!
20150 PRINT #1, 0!
20160 NEXT
20170 CLOSE #1
20180 PRINT:PRINT "Plot now stored for use by FFT program."
20190 GOTO 63999
60000 PRINT: BEEP: PRINT"Error encountered!  Check that files needed have been read!": GOSUB 63999
60010 CLOSE 1
60020 RESUME 100
63999 IF IPFLAG = 1 THEN RETURN ELSE PRINT:INPUT"Hit <Return> to continue.",A$         :RETURN
```

## NMR6.BAS

```bas
1 'NMR6--Part 6 of NMRCALC package.  Energy level diagrams.
10 DEFINT I-N
20 'COMMON IPFLAG,IREAD,FF$
21 OPEN "scratch.nmr" FOR INPUT AS 1
22 INPUT #1, IPFLAG: INPUT #1, IREAD: LINE INPUT #1, FF$
23 CLOSE #1
30 DIM E(128), FZ(128), SINT(3003), BC(7), ILOW(3003), IHIGH(3003), IX(128),           IY(128), ILEN(7)
40 FOR I = 1 TO 7:  READ ILEN(I): NEXT
45 DATA 160,80,53,27,16,8,5
50 SCREEN 0,0,0: COLOR 14,4,1: KEY OFF: CLS
60 PRINT:PRINT"Routine to generate energy level (and Fz-level) diagrams.":          PRINT:PRINT"To return from plot, hit any key after plot completed.":PRINT
65 GOSUB 63999
70 ON ERROR GOTO 60000
80 ILINE = 0: TH1 = 0: TH2 = 0
90 YRANGE = 160: YTOP = (200 - YRANGE)/2
95 IF IREAD > 0 THEN GOSUB 5030
100 SCREEN 0,0,0: COLOR 14,4,1: CLS: PRINT: PRINT"Enter command ('ME' for menu):  ";: GOSUB 500
110 IF P$ = "EN" THEN GOSUB 1000
120 IF P$ = "FZ" THEN GOSUB 2000
130 IF P$ = "ME" THEN GOSUB 3000
140 IF P$ = "TR" THEN GOSUB 6000
150 IF P$ = "QL" THEN GOSUB 900: CHAIN "nmr4"
160 IF P$ = "QP" THEN GOSUB 900: CHAIN "nmr5"
170 IF P$ = "QM" THEN GOSUB 900: CHAIN "nmr1"
180 IF P$ = "QT" THEN PRINT:PRINT "End of run.  Exiting to system.": END
190 IF P$ = "RD" THEN GOSUB 5000
200 IF P$ = "TH" THEN GOSUB 4000
210 IF P$ = "FF" THEN LPRINT CHR$(12);
300 GOTO 100
500 P1$ = INKEY$: IF P1$ = "" THEN 500
510 IF ASC(P1$) > 90 THEN P1$ = CHR$(ASC(P1$) - 32)
520 PRINT P1$;
530 P2$ = INKEY$: IF P2$ = "" THEN 530
540 IF ASC(P2$) > 90 THEN P2$ = CHR$(ASC(P2$) - 32)
550 PRINT P2$
560 P$ = P1$ + P2$
570 RETURN
600 P$ = INKEY$: IF P$ = "" THEN 600
610 IF ASC(P$) > 90 THEN P$ = CHR$(ASC(P$) - 32)
620 PRINT P$
630 RETURN
900 OPEN "scratch.nmr" FOR OUTPUT AS 1
910 PRINT #1, IPFLAG: PRINT #1, IREAD: PRINT #1, FF$
920 CLOSE 1
930 RETURN
1000 CLS: PRINT:PRINT"Energy level plotting mode selected. "
1010 GOSUB 63999
1030 ESCALE = YRANGE/(EMIN - EMAX)
1040 B = YTOP - ESCALE*EMAX
1050 FOR I = 1 TO NF
1060 IY(I) = ESCALE*E(I) + B
1070 NEXT
1080 IMODE = 1
1090 GOSUB 10000
1100 P$ = INKEY$: IF P$ = "" THEN 1100 ELSE RETURN
2000 CLS:PRINT:PRINT"Fz-level plotting mode selected."
2010 GOSUB 63999
2020 ESCALE = YRANGE/(FZMIN - FZMAX)
2030 B = YTOP - ESCALE*FZMAX
2040 FOR I = 1 TO NF
2050 IY(I) = ESCALE*FZ(I) + B
2060 NEXT
2070 IMODE = 2
2080 GOSUB 10000
2090 GOTO 1100
3000 CLS:PRINT:PRINT"Menu of available options:  ":PRINT
3010 PRINT"EN--Do energy level plot."
3015 PRINT"FF--Form feed to printer (useful if printer plotting)."
3020 PRINT"FZ--Do Fz-level plot."
3030 PRINT"ME--Display this menu."
3050 PRINT"QL--Exit to line-listing routine (NMR4)."
3060 PRINT"QM--Exit to main program (NMR1)."
3070 PRINT"QP--Exit to plotting routine (NMR5)."
3080 PRINT"QT--Exit to main system (terminate execution)."
3090 PRINT"RD--Read in needed information from disk."
3100 PRINT"TH--Enter threshold options."
3120 PRINT"TR--Select transition drawing options."
3150 GOTO 63999
4000 CLS:PRINT:PRINT"Routine to select threshold selection options.":PRINT
4010 PRINT"The rules:  1)  If both thresholds are zero, all lines plotted."
4020 PRINT"            2)  THRESHOLD1 sets the minimum line intensity."
4030 PRINT"            3)  THRESHOLD2 sets the maximum line intensity."
4040 PRINT"                (Default:  THRESHOLD2 = 1.00001)"
4050 PRINT:PRINT
4060 INPUT"Enter THRESHOLD1:  ",TH1
4070 INPUT"Enter THRESHOLD2:  ",TH2
4075 IF TH1 = 0 AND TH2 = 0 THEN 63999
4080 IF TH1 >= 0 AND TH2 = 0 THEN TH2 = 1.00001
4090 IF TH1 > TH2 THEN BEEP: PRINT: GOTO 4050
4100 GOTO 63999
5000 CLS:PRINT:PRINT"Ready for relevant information from the disk.":PRINT:            PRINT"Do you need to specify the data set name? ";: GOSUB 600
5010 IF P$ = "N" THEN 5030 ELSE IF P$ <> "Y" THEN 5000
5020 PRINT: INPUT"Enter data set name:  ",FF$
5030 PRINT: PRINT "Now reading in needed information.":PRINT
5040 DF$ = FF$ + ".inf": PRINT: PRINT"Reading in file ";DF$
5050 OPEN DF$ FOR INPUT AS 1
5060 INPUT #1, NS
5070 INPUT #1, NF
5080 FOR I = 0 TO NS: INPUT #1, BC(I): NEXT
5090 CLOSE 1
5100 FZ = NS/2 + 1: K = 0
5110 FOR I = 1 TO NS + 1
5120 FZ = FZ - 1
5130 FOR J = 1 TO BC(I-1)
5140 K = K + 1: FZ(K) = FZ
5150 NEXT
5160 NEXT
5170 K = 0
5180 FOR I = 1 TO NS + 1
5190 DF$ = FF$ + "." + RIGHT$(STR$(I), LEN(STR$(I)) - 1)
5200 PRINT"Reading in file ";DF$
5210 OPEN DF$ FOR INPUT AS #1
5220 INPUT #1, N
5230 FOR J = 1 TO N
5240 K = K + 1
5250 INPUT #1, E(K)
5260 NEXT
5270 CLOSE #1
5280 NEXT
5290 EMIN = 1E+20: EMAX = -1E+20
5300 FOR I = 1 TO NF
5310 EI = E(I)
5320 IF EI > EMAX THEN EMAX = EI: GOTO 5340
5330 IF EI < EMIN THEN EMIN = EI
5340 NEXT
5350 FZMAX = FZ(1): FZMIN = FZ(NF)
5360 NL = 0
5370 FOR I = 1 TO NS: NL = NL + BC(I-1)*BC(I): NEXT
5380 DF$ = FF$ + ".lin"
5390 OPEN DF$ FOR INPUT AS 1: PRINT"Reading in file ";DF$
5400 FOR I = 1 TO NL
5410 INPUT #1, SLINE#
5420 SM = 1000*(SLINE# - INT(SLINE#)): SL = INT(SLINE#): SM = INT(SM + .1)
5430 ILOW(I) = SM: IHIGH(I) = SL
5440 INPUT #1, JUNK#
5450 INPUT #1, SINTIN#: SINT(I) = SINTIN#
5460 NEXT
5470 CLOSE 1
5475 K = 0
5480 FOR I = 1 TO NS + 1
5490 N = BC(I-1): XINCR = 640/(N + 1)
5500 FOR J = 1 TO N
5510 K = K + 1
5520 IX(K) = J*XINCR
5530 NEXT
5540 NEXT
5550 PRINT:PRINT"Preliminary reading finished.": GOTO 63999
6000 CLS:PRINT:PRINT"Routine to select transition-plotting option.":PRINT
6010 PRINT"This option is currently ";
6020 IF ILINE = 0 THEN PRINT "OFF" ELSE PRINT "ON"
6030 PRINT:PRINT"Change option? ";: GOSUB 600
6040 IF P$ = "N" THEN 63999
6050 IF P$ <> "Y" THEN BEEP: GOTO 6030
6060 IF ILINE = 0 THEN ILINE = 1 ELSE ILINE = 0
6070 GOTO 63999
10000 SCREEN 0: SCREEN 2: OUT 985,14: LINE (0,0)-(639,199),,B: IB = B
10002 LOCATE 2,2
10004 IF IMODE = 1 THEN PRINT"Energy level diagram--";
10006 IF IMODE = 2 THEN PRINT"Fz-level diagram--";
10010 FOR I = 0 TO 639
10020 IF I MOD 8 = 0 THEN PSET (I,IB)
10030 NEXT
10040 IL = ILEN(NS)
10050 FOR I = 1 TO NF
10060 IXI = IX(I): IYI = IY(I)
10070 LINE (IXI - IL, IYI) - (IXI + IL, IYI)
10080 NEXT
10085 IF ILINE = 0 THEN RETURN
10090 LOCATE 24,2
10100 IF TH1 = 0 AND TH2 = 0 THEN PRINT "All lines plotted.";: GOTO 10150
10110 PRINT"Intensity range:";
10120 PRINT USING "##.#####"; TH1;
10130 PRINT " - ";
10140 PRINT USING "##.#####"; TH2;
10150 FOR I = 1 TO NL
10160 SI = SINT(I)
10165 IF TH2 = 0 THEN 10180
10170 IF SI < TH1 OR SI > TH2 THEN 10200
10180 IA = ILOW(I): IB = IHIGH(I)
10190 LINE (IX(IA), IY(IA)) - (IX(IB), IY(IB))
10200 NEXT
10210 RETURN
60000 CLS:PRINT:PRINT"Error encountered!  Did you read in all needed files?"
60010 GOSUB 63999
60020 RESUME 100
63999 IF IPFLAG = 1 THEN RETURN ELSE PRINT: INPUT"Hit <Return> to continue.",A$:       RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0590

     Volume in drive A has no label
     Directory of A:\

    FILES590 TXT      1149   1-28-87   7:40p
    GO       BAT       384   8-16-86   4:31p
    NMR      BAT         7   4-19-85  12:50p
    NMR      DOC      1664   4-19-85   1:06p
    NMR0     BAS       736   4-19-85  11:38a
    NMR0     EXE     19103   4-19-85  12:26p
    NMR1     BAS     22194   4-19-85  11:49a
    NMR1     EXE     50927   4-19-85  12:30p
    NMR2     BAS      7118   4-19-85  11:55a
    NMR2     EXE     29983   4-19-85  12:33p
    NMR3     BAS      3557   4-19-85  12:01p
    NMR3     EXE     26031   4-19-85  12:35p
    NMR4     BAS     16393   4-19-85  12:06p
    NMR4     EXE     43071   4-19-85  12:40p
    NMR5     BAS     10014   4-19-85  12:11p
    NMR5     EXE     34271   4-19-85  12:46p
    NMR6     BAS      6734   4-19-85  12:14p
    NMR6     EXE     29055   4-19-85  12:49p
    NOTES590 TXT      2090   1-28-87   7:41p
    SCRATCH  NMR       128   1-15-87   9:31a
           20 file(s)     304609 bytes
                            6144 bytes free
