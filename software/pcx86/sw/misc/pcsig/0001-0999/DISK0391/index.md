---
layout: page
title: "PC-SIG Library Disk #391"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0391/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0391"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "NMR"

    This series of programs are simulations and problems for the serious
    chemistry enthusiast of NMR - Nuclear Magnetic Resonance Spectroscopy.
    A set of statistical analysis programs are also included.  The programs
    are useful for students and professionals.
    
    System Requirements: Printer, graphic card and a hi-res color monitor.
    
    How to Start: To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.
    
    File Descriptions:
    
    BASTAT2V BAS  Basic statistics - two variables
    BASHADAM BAS  NMR - Calculates surface tension by use of the BASFORTH
    AUTOEXEC BAT  Starting batch file - lists directory, starts MENU.BAS
    ADIABAT  BAS  NMR - Adiabatic slow passage experiment
    GATDECUP BAS  Homonuclear gated decoupling for solvent peak suppression
    GAMMA(X) BAS  Gamma functions by Stirling's approximation
    FOURIER  BAS  Fourier coefficients
    EXPFIT   BAS  Exponential curve fit
    ERRANAL  BAS  Error analysis - root mean square
    ERFERFC  BAS  Calculates erf(x) and erfc(x)
    DIFFCAP  BAS  Differential capacitance of the electric double layer
    DEBYESOL BAS  Heat capacity of Debye solid
    CURVEFIT BAS  Curve fitter
    CUBICSPL BAS  Cubic spline function interpolation
    BESSELYN BAS  Calculates Bessel functions Yn(x)
    BESSELJN BAS  Calculates Bessel functions Jn(x)
    CUBICFIT BAS  Least squares cubic fit
    CHISQDIS BAS  Chi-square distribution
    BUBLSORT BAS  A bubble sort
    BR2DIFFN BAS  Diffusion of Bromine in a tube
    XRAYDIF1 BAS  X-ray diffraction simulations
    TWOMEANS BAS  Compares the means of two populations
    TRIDIAG  BAS  Tridiagonal systems of linear equations
    SPINECHO BAS  Spin echo simulation in NMR
    SPECPROB BAS  NMR Spectroscopy spin echo measurements problem
    SIMPINT  BAS  Integration by Simpson's rule
    SHELSORT BAS  A shell sort routine (300 entries max.)
    RUTHSCAT BAS  Rutherford scattering - calculates & plots trajectories
    RUTHEXPT BAS  Rutherford scattering apparatus & trajectories experiment
    ROOTFHLF BAS  Roots of functions / Half-interval search
    POWRCURV BAS  Power curve fit
    OFFRES   BAS  Procession on and off resonance
    NUMDIFF  BAS  Numerical differentiation - symmetrical 4-point formula
    NMRROT   BAS  NMR - behavior of the magnetization vector
    NMRRELAX BAS  Effect of correlation time on the longitudinal NMR
    NMRPHASE BAS  NMR line phasing simulation
    NMRFOURT BAS  Free induction decay in spectra with several signals
    NMREXEC  BAS  Older version of MENU.BAS - interesting graphics
    NMREXCH  BAS  NMR lineshapes in chemical exchange
    NMRAPP2  PIC  Diagram of NMR apparatus
    NMRAPP   PIC  Diagram of NMR apparatus
    NMR-WEFT BAS  Water peak supression by WEFT - Water Elimination by
    NMR-ABCD BAS  ABCD proton spectrum
    NMR-ABC  BAS  ABC proton spectrum
    NEWTONRT BAS  Newton's method for real roots of polynomials
    MULTPULS BAS  Multiple pulses in NMR
    MORSECRV BAS  Morse curves for diatomic molecules
    MOMSKKUR BAS  Moments, skewness, kurtosis
    MENU     BAS  Main menu program to gain access to all NMR programs
    MATRINV  BAS  Matrix inversion
    MATRDIAG BAS  Matrix diagonalization by partial pivot method
    MATERBAL BAS  Material balance equations
    LSQREXP  BAS  Non-linear least squares exponential curve fit
    LSQPARAB BAS  Least squares parabola
    LOGCURVE BAS  Logarithmic curve fit
    LINREGR  BAS  Linear regression
    LINLSQR  BAS  Linear least squares
    LINEQNS  BAS  Simultaneous linear equations
    HARMOSC  BAS  Harmonic oscillator function Hn(x) by recursion
    INTERP4  BAS  Quartic interpolation
    INTERP3  BAS  4-point polynomial interpolation
    LEGENDRE BAS  Calculation of Legendre polynomials by recursion
    INVRECOV BAS  NMR measurement of T1 by inversion recovery
    LARMOR   BAS  NMR Spectroscopy Larmor precession and other effects
    L2FILMS  BAS  Equation of state of L2 films in surface chemistry
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADIABAT.BAS

```bas
10 REM NMR - adiabatic slow passage experiment
20 CLEAR:KEY OFF:WIDTH 40:SCREEN 1,0:COLOR 0,1:CLS
30 LOCATE 7,6:PRINT"NMR - ADIABATIC SLOW PASSAGE"
40 LOCATE 10,10:PRINT"David J Wilson"
50 LOCATE 11,10:PRINT"Department of Chemistry"
60 LOCATE 12,10:PRINT"Vanderbilt University"
70 FOR I=1 TO 3000:NEXT I
80 CLS
90 PRINT"  Here we simulate the adiabatic slow   passage NMR experiment.  We will be     sweeping the frequency of the rotating  (H1) field.  The sweep rate is assumed"
100 PRINT"to be slow enough so that the orienta-  tion of the axis of precession of the   magnetization is able to follow the"
110 PRINT"orientation of the effective magnetic   field in the rotating coordinate sys-   tem.  This requires that yH0 be much    larger than the angular velocity of     the effective field."
120 PRINT:PRINT"  See C. P. Slichter, Principles of     Magnetic Resonance, pp. 21-22."
130 PRINT:PRINT"  Touch <return> to go on, please."
140 W$=INKEY$:IF W$="" THEN 140
150 CLS
160 PRINT"What is the magnitude of your H1 field? (.1 < H1 < 10)"
170 INPUT"H1 = ";H1
180 CLS:MRY=28
181 LOCATE 1,26:PRINT"Magnetization"
182 LINE (0,0)-(0,199),1
190 LINE (159,0)-(159,199),1
200 Y1=199:LINE (0,Y1)-(319,Y1),1
210 LOCATE 23,1:PRINT"Signal";
220 LOCATE 24,1:PRINT"amplitude";
221 LOCATE 1,6:PRINT"H eff"
230 H0=150
240 F=0.3125
250 W0=100:X0=160:Y0=80:MR=80
260 H12=H1*H1:MRX=MR*1.3
261 XX=0:YY=Y0
270 FOR I=0 TO 320
280 W=W0+F*I
290 TP=H0-W:TP2=SQR(TP*TP+H12)
300 CS=TP/TP2:SN=H1/TP2
310 LINE (X0,Y0)-(X,Y),0
311 LINE (1,Y0)-(XX,YY),0
320 Y=Y0-CS*MR:X=X0+MRX*SN
321 XX=H1*2.6+1
322 YY=Y0-TP*2
330 LINE (X0,Y0)-(X,Y),1
331 LINE (1,Y0)-(XX,YY),1
340 PSET (I,Y1-35*SN)
350 NEXT I
360 LOCATE 1,21:PRINT"Another run? (Y/N)"
370 W$=INKEY$:IF W$="" THEN 370
380 IF W$="N" OR W$="n" THEN CLS:RUN"menu.bas"
390 GOTO 150
```

## BASHADAM.BAS

```bas
1 REM this program calculates surface tension by use of the bashforth-adams tables.
5 CLEAR:WIDTH 40:SCREEN 1,0:COLOR 0,1:KEY OFF:CLS
10 LOCATE 5,9:PRINT"SURFACE TENSION BY THE"
15 LOCATE 7,9:PRINT"BASHFORTH-ADAMS METHOD"
20 LOCATE 13,10:PRINT"David J Wilson"
25 LOCATE 14,10:PRINT"Department of Chemistry"
30 LOCATE 15,10:PRINT"Vanderbilt University"
50 FOR I=1 TO 3000:NEXT I:CLS
55 PRINT"  A good reference to the Bashforth-    Adams method for calculating surface    tensions is Adamson, 'The Physics and   Chemistry of Surfaces', 4th ed., pp.    15-17"
77 GOSUB 1000
80 PRINT
85 INPUT"Liquid density (gm/cm3) = ";D
87 PRINT
90 INPUT"Air density (gm/cm3) = ";DA
92 PRINT
95 INPUT"Capillary radius (cm) = ";R
97 PRINT
100 INPUT"Capillary rise (cm) = ";H
102 K=0
105 A=SQR(R*H)
110 RA=R/A
115 I=INT(100*RA)
120 F=(100*RA-I)
125 RB=RB(I)+F*(RB(I+1)-RB(I))
130 B=R/RB
135 A2=SQR(B*H)
136 ER=ABS((A2-A)/A2)
137 IF ER < 1.000000e-9 THEN GOTO 155
140 K=K+1
145 PRINT"  a = ";A2
147 A=A2
150 IF K<30 THEN GOTO 110
155 G=A*A*(D-DA)*980/2
160 PRINT:PRINT"Surface tension = ";G;" dynes/cm"
161 T=R*(H+R*1/3 - 0.1288*R*R/H + 0.1312*R*R*R/(H*H))
162 G1=(D-DA)*T*980/2
163 PRINT:PRINT"Surface tension by II-18 (Adamson)        = ";G1
165 PRINT:PRINT"Do you want to make another run? (Y/N)"
170 W$=INKEY$:IF W$="" THEN 170
175 IF W$="Y" OR W$="y" THEN CLS:GOTO 80
180 CLS:RUN"menu.bas"
1000 REM generates bashforth-adams tables
1001 DATA 1., .9999,.9998,.9997,.9995,.9992,.9988,.9983,.9979,.9974
1002 DATA .9968,.9960,.9952,.9944,.9935,.9925,.9915,.9904,.9893,.9881
1003 DATA .9869,.9856,.9842,.9827,.9812,.9796,.9780,.9763,.9746,.9728
1004 DATA .9710,.9691,.9672,.9652,.9631,.961,.9589,.9567,.9545,.9522
1005 DATA .9498,.9474,.9449,.9424,.9398,.9372,.9346,.9320,.9293,.9265
1006 DATA .9236,.9208,.9179,.9150,.9120,.9090,.9060,.9030,.8999,.8968
1007 DATA .8936,.8905,.8873,.8840,.8807,.8774,.8741,.8708,.8674,.8640
1008 DATA .8606,.8571,.8536,.8501,.8466,.8430,.8394,.8358,.8322,.8286
1009 DATA .8249,.8212,.8175,.8138,.8101,.8064,.8026,.7988,.7950,.7913
1010 DATA .7875,.7837,.7798,.7759,.7721,.7683,.7644,.7606,.7568,.7529
1011 DATA .7490,.7451,.7412,.7373,.7334,.7295,.7255,.7216,.7177,.7137
1012 DATA .7098,.7059,.7020,.6980,.6941,.6901,.6862,.6823,.6783,.6744
1013 DATA .6704,.6665,.6625,.6586,.6547,.6508,.6469,.6431,.6393,.6354
1014 DATA .6315,.6276,.6237,.6198,.6160,.6122,.6083,.6045,.6006,.5968
1015 DATA .5929,.5890,.5851,.5812,.5774,.5736,.5697,.5659,.5621,.5583
1016 DATA .5545,.5508,.5471,.5435,.5398,.5362,.5326,.5289,.5252,.5216
1017 DATA .5179,.5142,.5106,.5070,.5034,.4998,.4963,.4927,.4892,.4857
1018 DATA .4822,.4787,.4753,.4719,.4686,.4652,.4618,.4584,.4549,.4514
1019 DATA .4480,.4446,.4413,.4380,.4347,.4315,.4283,.4250,.4217,.4184
1020 DATA .4152,.4120,.4089,.4058,.4027,.3996,.3965,.3934,.3903,.3873
1021 DATA .3843,.3813,.3783,.3753,.3723,.3683,.3663,.3633,.3603,.3574
1022 DATA .3543,.3517,.3489,.3461,.3432,.3403,.3375,.3348,.3321,.3294
1023 DATA .3267,.3240,.3213,.3186,.3160,.3134,.3108,.3082,.3056,.3030
1025 DIM RB(230)
1030 FOR I=1 TO 230
1031 READ RB(I)
1035 NEXT I
1100 RETURN
```

## BASTAT2V.BAS

```bas
10 REM basic statistics two variables
20 INPUT"No. of data pairs = ";N
21 XB=0:YB=0:X2=0:Y2=0:XY=0
30 FOR I=1 TO N
40 PRINT"i = ";I
50 INPUT"     x(i) = ";XI
55 INPUT"     y(i) = ";YI
70 XB=XB+XI
80 YB=YB+YI
90 X2=X2+XI*XI
100 Y2=Y2+YI*YI
110 XY=XY+XI*YI
120 NEXT I
125 PRINT:PRINT
130 XM=XB/N
135 PRINT:PRINT
140 PRINT"Mean of x = ";XM
150 YM=YB/N
160 PRINT"Mean of y = ";YM
170 TX=(X2-N*XM*XM)
180 SX=SQR(TX/(N-1))
190 PRINT"     Sx(sample) = ";SX
200 TX=SQR(TX/N)
210 PRINT"     Sx(population) = ";TX
220 TY=Y2-N*YM*YM
230 SY=SQR(TY/(N-1))
240 PRINT"     Sy(sample) = ";SY
250 TY=SQR(TY/N)
260 PRINT"     Sy(population) = ";TY
270 TXY=(XY-(XB*YB/N))
280 SAXY=TXY/(N-1)
290 PRINT"     Covariance (sample) = ";SAXY
300 TXY=TXY/N
310 PRINT"     Covariance (population) = ";TXY
320 GXY=SAXY/(SX*SY)
330 PRINT"     Correlation coefficient = ";GXY
340 VX=SX*100/XM
350 PRINT"     Vx = ";VX
360 VY=SY*100/YM
370 PRINT"     Vy = ";VY
380 INPUT"          Enter 0 for another run. ";K
390 IF K=0 THEN GOTO 10
400 CLS:END
```

## BESSELJN.BAS

```bas
1 CLEAR:CLS:WIDTH 40:LOCATE 5,5
2 PRINT"BESSEL FUNCTIONS Jn(X)":PRINT:PRINT
3 PRINT"You must input the order n of the func-"
4 PRINT"tion and the value of x.  The computer"
5 PRINT"will then give you the value of Jn(x).":PRINT
30 INPUT"Order n = ",D9
40 IF D9<-25 THEN 9999
50 INPUT"x = ",X
60 GOSUB 8500
70 PRINT
80 PRINT"Jn(";X;") = ";J7
90 PRINT:PRINT"Same n, another value of x? (Y/N)"
91 INPUT"",W$
92 IF W$="N" THEN GOTO 94
93 GOTO 50
94 INPUT"Another value of n? (Y/N) ",W$
95 IF W$="N" THEN GOTO 9999
110 GOTO 30
8500 REM Bessel fn Jn(x)
8510 T1=0.00001
8520 P7=3.1415927#
8530 X2=X*X
8540 IF X=0 AND D9=1 THEN 8740
8550 IF X>15 THEN 8760
8560 IF D9<>0 THEN 8590
8570 S6=1
8580 GOTO 8640
8590 X3=X
8600 X=D9+1
8610 GOSUB 9200
8620 X=X3
8630 S6=(X/2)^D9/G5
8640 T3=S6
8650 I=0
8660 IF(ABS(T3)<=ABS(S6*T1))THEN 8720
8670 I=I+1
8680 T4=T3
8690 T3=-T4*X2*0.25/(I*(D9+I))
8700 S6=S6+T3
8710 GOTO 8660
8720 J7=S6
8730 RETURN
8740 J7=0
8750 RETURN
8760 REM asymptotic expansion
8770 J7=SQR(2/(P7*X))*COS(X-P7/4-D9*P7/2)
8780 RETURN
9200 REM gamma function
9220 IF X<0 THEN 9270
9230 Y=X+3
9240 G2=SQR(2*P7/Y)*EXP(Y*LOG(Y)+(1-1/(30*Y*Y))/(12*Y)-Y)
9250 G5=G2/(X*(X+1)*(X+2))
9260 RETURN
9280 K5=0
9290 G3=X
9300 IF X>=0 THEN 9340
9310 K5=K5+1
9320 X=X+1
9330 GOTO 9300
9340 GOSUB 9200
9350 FOR J=1 TO K5
9360 X=X-1
9370 G5=G5/X
9380 NEXT J
9390 X=G3
9400 RETURN
9999 CLS:WIDTH 80:CLEAR:END
```

## BESSELYN.BAS

```bas
1 CLEAR:CLS:WIDTH 40:LOCATE 5,5
2 PRINT"BESSEL FUNCTIONS Yn(x)":PRINT:PRINT
3 PRINT"You must enter the order n of the"
4 PRINT"Bessel function (2nd kind, Yn(x)), and"
5 PRINT"the value of x (> 0).  The computer"
6 PRINT"will then give you the value of Yn(x).":PRINT
40 INPUT"Order n = ",D9
50 IF D9<0 THEN 9999
60 INPUT"  x ( > 0 ) = ",X
70 IF X<=0 THEN 60
80 GOSUB 4400
90 PRINT:PRINT"x = ";X:PRINT"Yn(x) = ";Y8
100 PRINT:PRINT"Same n, another value of x? (Y/N)"
101 INPUT"",W$
102 IF W$="N" THEN GOTO 120
103 GOTO 60
120 PRINT"Another value of n? (Y/N)"
121 INPUT"",W$
122 IF W$="N" THEN GOTO 9999
123 GOTO 40
4400 REM Yn(x) routine
4410 H2=1.000000e-8
4420 C5=0.57721566#
4430 P7=3.1415927#
4440 P8=2./P7
4450 IF X>12 THEN 4910
4460 Z5=0.5*X
4470 X2=Z5*Z5
4480 T=LOG(Z5)+C5
4490 S6=0:REM calc y0.
4500 T4=T
4510 YO=T
4520 J=0
4530 IF ABS(T4)<=H2 THEN 4600
4540 J=J+1
4550 IF J<>1 THEN S6=S6+1./(J-1)
4560 Z6=T-S6
4570 T4=-X2*T4/(J*J)*(1.-1./(J*Z6))
4580 YO=YO+T4
4590 GOTO 4530
4600 YO=P8*YO
4610 IF D9=0 THEN 4870
4620 T4=Z5*(T-0.5):REM calc y1
4630 S6=0
4640 Y1=T4
4650 J=1
4660 IF(ABS(T4)<=H2) THEN 4740
4670 J=J+1
4680 S6=S6+1./(J-1)
4690 Z6=T-S6
4700 T2=-X2*T4/(J*(J-1))
4710 T4=T2*((Z6-0.5/J)/(Z6+0.5/(J-1)))
4720 Y1=Y1+T4
4730 GOTO 4660
4740 Y1=P8*(Y1-1/X)
4750 IF D9=1 THEN 4890
4760 REM find Yn by recursion
4770 Z6=2/X
4780 Z1=YO
4790 Z2=Y1
4800 FOR J=2 TO INT(D9+0.01)
4810 Z3=Z6*(J-1)*Z2-Z1
4820 Z1=Z2
4830 Z2=Z3
4840 NEXT J
4850 Y8=Z3
4860 RETURN
4870 Y8=YO
4880 RETURN
4890 Y8=Y1
4900 RETURN
4910 REM asymptotic expansion
4920 Y8=SQR(2/(P7*X))*SIN(X-P7/4-D9*P7/2)
4930 RETURN
9999 CLS:WIDTH 80:CLEAR:END
```

## BR2DIFFN.BAS

```bas
1 CLEAR:WIDTH 40:CLS:SCREEN 1,0
2 KEY OFF
5 COLOR 0,1
6 A%=VAL(MID$(TIME$,7,2))
7 RANDOMIZE A%
10 LOCATE 15,1
20 PRINT"DIFFUSION OF BROMINE IN A TUBE"
21 PRINT:PRINT"Touch 'Q' to end the run."
30 LINE (1,5)-(319,5)
40 LINE -(319,30)
50 LINE (319,31)-(1,31)
60 LINE -(1,5)
70 DIM A(100)
80 FOR I=1 TO 100
90 A(I)=1
100 NEXT I
110 REM MAIN LOOP
120 FOR L=0 TO 24:LP=L+6
121 LINE (2,LP)-(318,LP),0
122 FOR LL=1 TO 4
123 I=L*4+LL
130 K=-40+81*RND(1)
140 K=A(I)+K
150 IF K<1 THEN K=2-K
151 IF K>319 THEN K=638-K
160 A(I)=K
170 J=6+L
180 PSET (K,J)
185 NEXT LL
190 NEXT L
195 W$=INKEY$
196 IF W$="Q" OR W$="q" THEN CLS:END
200 GOTO 110
```

## BUBLSORT.BAS

```bas
10 REM bubble sort
15 CLS
20 DIM X(300),Y(300)
30 INPUT"No of data points = ? ";N
40 FOR I=1 TO N
50 PRINT"I = ";I
60 INPUT"X(I) = ";X(I)
70 INPUT"Y(I) = ";Y(I)
80 NEXT I
90 NM=N-1
100 FOR I=1 TO NM
110 IP=I+1
120 FOR J=IP TO N
130 IF X(I)<X(J) THEN 200
140 H1=X(I)
150 X(I)=X(J)
160 X(J)=H1
170 H1=Y(I)
180 Y(I)=Y(J)
190 Y (J)=H1
200 NEXT J
210 NEXT I
215 PRINT"X(i)          Y(i)"
216 NP=0
220 FOR I=1 TO N
225 NP=NP+1
230 PRINT X(I),Y(I)
231 PRINT
235 IF(NP=10)THEN STOP:NP=240 NEXT I
240 NEXT I
250 END
```

## CHISQDIS.BAS

```bas
1 REM Chi-square distribution
2 REM see Hewlett-Packard HP-41C Stat Pac manual, p. 70
10 REM
15 PRINT "Nu must be >= 3"
20 INPUT"Nu = ";NU
40 T=(NU/2)-INT(NU/2)
50 IF T>0.4 THEN GOTO 90
55 GAM=1
60 FOR I=NU/2-1 TO 1 STEP -1
70 GAM=GAM*I
75 NEXT I
80 GOTO 140
90 GAM=SQR(3.1415927#)
100 N=INT(NU/2-0.4)
110 FOR I=1 TO N
120 GAM=GAM*(I-0.5)
130 NEXT I
140 GB=GAM*NU/2
145 INPUT"X = ? ";X
150 FX=X^(NU/2-1)*EXP(-X/2)
160 FX=FX/(2^(NU/2)*GAM)
170 S1=1
180 T1=1
190 I=0
200 I=I+1
210 T1=T1*X/(NU+2*I)
220 S2=S1+T1
230 IF (S2=S1) THEN GOTO 260
240 S1=S2
250 GOTO 200
260 S1=S1*(X/2)^(NU/2)
270 S1=S1*EXP(-X/2)/GB
280 PRINT"F(x) = ";FX
290 PRINT"P(x) = ";S1
300 INPUT"Enter 0 if another x ";M
310 IF M=0 THEN GOTO 145
320 INPUT"Enter 0 if another nu ";M
330 IF (M=0) THEN GOTO 20
340 PRINT"          End of run"
350 CLS
360 END
```

## CUBICFIT.BAS

```bas
5 REM least squares cubic fit
7 OPTION BASE 1
10 DIM A(4,4),AI(4,4),C1(4),Z(4),ST(4,4)
20 PRINT"Least squares cubic polynomial fit":PRINT
21 INPUT"   No. of data points = ";N
30 FOR I=1 TO N
35 PRINT"  i = ";I
40 PRINT"     x(";I;") = ";
41 INPUT"";X
60 PRINT"     y(";I;") = ";
61 INPUT"";Y
70 X1=X1+X
80 X2=X2+X*X
90 X3=X3+X^3
100 X4=X4+X^4
110 X5=X5+X^5
120 X6=X6+X^6
130 Y1=Y1+Y
140 U1=U1+X*Y
150 U2=U2+X*X*Y
160 U3=U3+Y*(X^3)
170 Y2=Y2+Y*Y
180 NEXT I
190 A(1,1)=N
200 A(1,2)=X1
210 A(1,3)=X2
220 A(1,4)=X3
230 A(2,2)=X2
240 A(2,3)=X3
250 A(2,4)=X4
260 A(3,3)=X4
270 A(3,4)=X5
280 A(4,4)=X6
290 FOR I=2 TO 4
300 FOR J=1 TO I-1
310 A(I,J)=A(J,I)
320 NEXT J
330 NEXT I
340 Z(1)=Y1
350 Z(2)=U1
360 Z(3)=U2
370 Z(4)=U3
1260 FOR I=1 TO 4
1270 FOR J=1 TO 4
1280 ST(I,J)=A(I,J)
1290 AI(I,J)=0.
1300 NEXT J
1310 AI(I,I)=1.
1320 NEXT I
1330 FOR I=1 TO 4
1340 TE=ST(I,I)
1350 FOR J=1 TO 4
1360 ST(I,J)=ST(I,J)/TE
1370 AI(I,J)=AI(I,J)/TE
1380 NEXT J
1390 FOR K=1 TO 4
1400 IF (K-I=0) THEN GOTO 1460
1410 BT=ST(K,I)
1420 FOR J=1 TO 4
1430 ST(K,J)=ST(K,J)-BT*ST(I,J)
1440 AI(K,J)=AI(K,J)-BT*AI(I,J)
1450 NEXT J
1460 NEXT K
1470 NEXT I
1480 FOR I=1 TO 4
1490 TE=0
1500 FOR J=1 TO 4
1510 TE=TE+AI(I,J)*Z(J)
1520 NEXT J
1530 C1(I)=TE
1540 NEXT I
1545 PRINT
1550 PRINT"  y = a + b*x + c*x^2 + d*x^3"
1560 PRINT"     a = ";C1(1)
1570 PRINT"     b = ";C1(2)
1580 PRINT"     c = ";C1(3)
1590 PRINT"     d = ";C1(4)
1600 PRINT
1610 R2=C1(1)*Y1+C1(2)*U1+C1(3)*U2+C1(4)*U3-(Y1*Y1/N)
1620 R2=R2/(Y2-(Y1*Y1/N))
1630 PRINT"     coefficient of determination = ";R2
1640 PRINT
1650 PRINT"          End of run"
1662 END
```

## CUBICSPL.BAS

```bas
10 CLEAR
12 WIDTH 40
15 LOCATE 5,10
20 PRINT"CUBIC SPLINE FUNCTION INTERPOLATION":PRINT:PRINT
30 DIM T(50),Y(50),D(50),C(50),Z(50)
35 INPUT"How many pairs of values (<= 50) of x and y? "; N
41 IF N<3 THEN PRINT"I need more points than that.":PRINT:GOTO 35
42 NM=N-1
45 FOR I=1 TO N
46 PRINT"x(";I;") = ";
47 INPUT"",T(I)
48 PRINT"  y(";I;") = ";
49 INPUT "",Y(I)
50 PRINT"OK?  (Y/N)"
51 INPUT"",W$
52 IF W$="N" THEN GOTO 46
53 PRINT
54 NEXT
60 D(1)=1:C(1)=0:Z(1)=0
65 FOR I=2 TO NM
70 D(I)=2*(T(I+1)-T(I-1))
75 C(I)=T(I+1)-T(I)
80 TP=(Y(I+1)-Y(I))/(T(I+1)-T(I))
85 Z(I)=6*(TP-(Y(I)-Y(I-1))/(T(I)-T(I-1)))
90 NEXT
95 D(N)=1:C(NM)=0:Z(N)=0
96 FOR I=1 TO N
97 PRINT"c(";I;") = ";C(I),"d(";I;") = ";D(I)
98 PRINT"  z(";I;") = ";Z(I):NEXT
100 GOSUB 200
105 GOTO 300
200 FOR I=2 TO N
205 XM=C(I-1)/D(I-1)
210 D(I)=D(I)-XM*C(I-1)
215 Z(I)=Z(I)-XM*Z(I-1)
220 NEXT
225 Z(N)=Z(N)/D(N)
230 FOR I=1 TO NM
235 Z(N-I)=(Z(N-I)-C(N-I)*Z(N-I+1))/D(N-I)
237 NEXT
238 FOR I=1 TO N
239 PRINT"  z(";I;") = ";Z(I):NEXT
240 RETURN
300 PRINT:PRINT"OK, I'm ready to go.  What value of x"
305 INPUT"shall I use? ",X
310 PRINT
312 GOTO 500
370 PRINT:PRINT"y(";X;") = ";YY:PRINT
375 PRINT"  Another value of x? (Y/N)"
380 INPUT"",W$
385 IF W$="N" THEN GOTO 400
390 GOTO 300
400 CLS:END
500 I=1
502 IF X<T(1) THEN PRINT"  x out of range; too small":PRINT:GOTO 300
503 REM
504 IF I>N THEN PRINT"  x out of range, too large":PRINT:GOTO 300
505 IF X-T(I)>0 THEN I=I+1:GOTO 503
507 I=I-1
512 H=T(I+1)-T(I)
515 S=(Z(I+1)*((X-T(I))^3)+Z(I)*((T(I+1)-X)^3))/(6*H)
520 S=S+(Y(I+1)/H - Z(I+1)*H/6)*(X-T(I))
525 S=S+(Y(I)/H-Z(I)*H/6)*(T(I+1)-X)
530 YY=S:GOTO 370
```

## CURVEFIT.BAS

```bas
10 REM ******program from:
20 REM chemistry with a computer
100 DIM T(10,10),X(30),Y(30)
130 PRINT"          CURVE FITTER"
135 PRINT
140 PRINT"  How many pairs of points (x,y) are known ? ";
145 INPUT"";N
150 PRINT:PRINT"What are they?"
152 FOR I=1 TO N
154 PRINT"     x(";I;") = ";
156 INPUT"";X(I)
157 PRINT"       y(";I;") = ";
158 INPUT"";Y(I)
160 NEXT I
170 D=1
180 D=D+1
190 FOR E=1 TO D
200 FOR I=1 TO D
209 T=0
210 FOR S=1 TO N:T=T+X(S)^(E+I-2):NEXT S
220 T(I,E)=T
230 NEXT I
239 T=0
240 FOR S=1 TO N:T=T+(X(S)^(E-1))*Y(S):NEXT S
250 T(0,E)=T
260 NEXT E
270 FOR H=(D-1) TO 1 STEP -1
280 FOR E=1 TO H
290 M=T(H+1,H+1)/T(H+1,E)
300 FOR I=0 TO H+2
310 T(I,E)=T(I,H+1)-M*T(I,E)
320 NEXT I
330 NEXT E
340 NEXT H
350 FOR H=1 TO D
360 A(H)=T(0,H)/T(H,H)
370 FOR E=H+1 TO D
380 T(0,E)=T(0,E)-A(H)*T(H,E)
390 NEXT E
400 NEXT H
410 PRINT"-----------------"
420 IF D>4 THEN GOTO 510
430 FOR I=1 TO D-1
440 PRINT A(D-I+1);" x^";CHR$(48+D-I)
441 PRINT"            +"
480 NEXT I
490 PRINT A(1);" = y"
500 GOTO 550
510 FOR I=D TO 1 STEP -1
520 PRINT"A(";I;") = ";A(I)
530 NEXT I
540 PRINT
550 V=0:R=0
560 FOR I=1 TO N
570 W=0
580 FOR J=1 TO D
590 W=W+A(J)*X(I)^(J-1)
600 NEXT J
610 R=R+ABS(W-Y(I)):V=V+(W-Y(I))^2
620 NEXT I
630 PRINT:PRINT:
635 PRINT"     deviation = ";V
637 PRINT"     average residual = ";R/N
640 PRINT:PRINT"Close enough? (Y/N)
650 INPUT"";C$
660 IF C$="N" THEN GOTO 180
670 IF C$="Y" THEN GOTO 680
675 GOTO 640
680 PRINT:PRINT
685 PRINT"OK, we're done."
690 END
```

## DEBYESOL.BAS

```bas
1 CLEAR:CLS:WIDTH 40
2 LOCATE 5,5
3 PRINT"HEAT CAPACITY OF DEBYE SOLID":PRINT:PRINT
4 PRINT"You must provide the Debye temperature":PRINT"and the temperature; the computer will":PRINT"then calculate the molar heat capacity."
5 PRINT:PRINT
20 INPUT"Theta Debye = ",TH
30 INPUT"Temperature (deg. K) = ",T
40 U=TH/T
50 DX=U/200
60 X=-0.5*DU
65 S=0
70 FOR K=1 TO 200
80 X=X+DX
90 TE=X*X*X/(EXP(X)-1)
100 S=S+TE
110 NEXT K
120 S=S*DX*12/(U*U*U)
130 S=S-3*U/(EXP(U)-1)
140 S=S*3*1.987
150 PRINT"C(Debye) (J/mole deg) = ",S
160 PRINT"Another temperature? (Y/N)"
161 INPUT"",W$
162 IF W$="N" THEN GOTO 175
163 GOTO 30
175 PRINT
180 PRINT"Another Debye temperature? (Y/N)"
181 INPUT"",W$
182 IF W$="N" THEN GOTO 200
183 GOTO 20
200 CLS:WIDTH 80:CLEAR
201 END
```

## DIFFCAP.BAS

```bas
10 REM differential capacitance by the formula of Kiefer and Wilson
20 CLEAR:WIDTH 40:SCREEN 1,0:COLOR 0,1:KEY OFF:CLS
30 LOCATE 7,6:PRINT"DIFFERENTIAL CAPACITANCE OF"
40 LOCATE 9,7:PRINT"THE ELECTRIC DOUBLE LAYER
50 LOCATE 13,10:PRINT"David J Wilson"
60 LOCATE 14,10:PRINT"Department of Chemistry"
70 LOCATE 15,10:PRINT"Vanderbilt University"
80 FOR I=1 TO 3000:NEXT I
90 CLS:PRINT"  This program uses a formula given in  J. E. Kiefer and D. J. Wilson, Separ.   Sci. Technol., 15, 57-74 (1980), to     calculate the differential capacitance"
100 PRINT"of a non-ideal electric double layer."
110 PI=3.14159:E=4.803000e-1:KB=1.380500e-16
115 PRINT:PRINT"  Touch <return> to go on, please."
116 W$=INKEY$:IF W$="" THEN 116
120 D0=78.54:D1=-0.361187:D2=0.000689621
130 T0=273.15:T25=298.15
135 SOLCONV=6.023000e+2:VCONV=1/300000.
140 CLS
150 PRINT"What is the temperature (deg C) of the  solution?  ";
160 INPUT"",T
170 T=T+T0
180 TP=T-T25
190 D=D0+TP*(D1+TP*D2)
200 PRINT:PRINT"What is the charge on the ions in the   ionic atmosphere?  (1, 2, or 3)"
210 INPUT"",Z
220 PRINT:PRINT"What is the salt concentration (moles/  liter) in the bulk solution?  (< 3)"
230 INPUT"",CINF
240 CINF=CINF*SOLCONV
250 PRINT:PRINT"What is the parameter cmax (moles/lit-  er)?  (< 40)  ";
260 INPUT"",CMAX
270 CMAX=CMAX*SOLCONV
280 PRINT:PRINT"What range of surface potentials (mil-  livolts) do you wish to use?  (-800 <   Vmin, 800 > Vmax)"
290 INPUT"Vmin (mv) = ";VMIN
292 XMIN=VMIN
295 VMIN=VMIN*VCONV
300 INPUT"Vmax (mv) = ";VMAX
302 XMAX=VMAX
305 VMAX=VMAX*VCONV
310 DV=(VMAX-VMIN)/320
320 A=8*PI*Z*E*CINF/((1-2*CINF/CMAX)*D)
330 B=2*CINF/(CMAX-2*CINF)
340 C=A*Z*E*B/(2*KB*T):C=SQR(C):C=C*D/(4*PI)
350 C2=Z*E/(KB*T)
351 CLS
352 LOCATE 24,1:PRINT XMIN;" mv";
353 LOCATE 24,33:PRINT XMAX;" mv";
360 V=VMIN-0.5*DV
363 LINE (0,199)-(319,199),1
365 B1=1+B
367 YF=199/1.000000e+9
370 FOR I=0 TO 319
380 V=V+DV
390 X=V*C2
400 EX=EXP(X):CH=0.5*(EX+1/EX):SH=0.5*(EX-1/EX)
410 TP=1+B*CH
420 CD=C/SQR(LOG(TP/B1))
430 CD=CD*ABS(SH)/TP
440 Y=199-YF*CD
450 PSET (I,Y),1
460 NEXT I
470 LOCATE 1,1:PRINT"Another run? (Y/N)"
480 W$=INKEY$:IF W$="" THEN 480
490 IF W$="Y" OR W$="y" THEN GOTO 140
500 CLS:RUN"menu.bas"
```

## ERFERFC.BAS

```bas
1 CLEAR:CLS:WIDTH 40:LOCATE 5,5
2 PRINT"ERF(X) AND ERFC(X)"
3 PRINT:PRINT
4 PRINT"You must enter a value of x ( >= 0),"
5 PRINT"and the computer will give you the val-"
6 PRINT"ues of erf(x) and erfc(x).":PRINT
30 INPUT"x ( >= 0 ) = ",X
40 IF X<0 THEN 9999
50 GOSUB 2500
70 PRINT"x = ";X
75 PRINT"  Erf(x) = ";E9
76 PRINT"  Erfc(x) = ";C9
80 PRINT:PRINT"Another value of x? (Y/N)"
81 INPUT"",W$
82 IF W$="N" THEN GOTO 9999
83 GOTO 30
2500 REM erf by series
2510 P8=SQR(3.1415927#)
2520 T1=0.00001
2530 IF X<=0 THEN 2680
2540 X2=X*X
2550 IF X>1.5 THEN 2710
2560 S3=X
2570 T4=X
2580 I=0
2590 REM begin loop
2600 I=I+1
2610 H3=S3
2620 T4=2*T4*X2/(1+2*I)
2630 S3=T4+H3
2640 IF T4>T1*S3 THEN 2600
2650 E9=2*S3*EXP(-X2)/P8
2660 C9=1-E9
2670 RETURN
2680 E9=0
2690 C9=1
2700 RETURN
2710 REM complementary error function
2720 T5=12
2730 V=0.5/X2
2740 U=1+V*(T5+1)
2750 FOR J=T5 TO 1 STEP -1
2760 S3=1+J*V/U
2770 U=S3
2780 NEXT J
2790 C9=EXP(-X2)/(X*S3*P8)
2800 E9=1-C9
2810 RETURN
9999 CLS:CLEAR:WIDTH 80:END
```

## ERRANAL.BAS

```bas
1 CLS:LOCATE 5,20
5 PRINT"ERROR ANALYSIS PROGRAM"
6 LOCATE 8,1
15 PRINT"  This program calculates the root mean square error in a quantity"
16 PRINT"calculated from parameters x(1), ... x(n), each parameter having a"
30 PRINT"standard error of estimate u(i).  The user must supply a subroutine"
40 PRINT"starting at 1000 which calculates the function f[x(1),..., x(n)]"
50 PRINT"and returns this value under the name of F.  The user must also"
55 PRINT"give the value of n, the number of variables, and the values of the"
60 PRINT"x(i)'s and u(i)'s."
75 DIM X(10),U(10),V(10)
80 PRINT:PRINT"  Touch <return> to go on, please.":INPUT"";W$:CLS
90 PRINT"How many parameters do you want?"
95 INPUT"     n = ";N
100 PRINT:PRINT"Have you written the subroutine to calculate the function F?"
105 INPUT"  (Y/N) ";W$
115 IF W$="N" OR W$="n" THEN PRINT"I'll stop here so you can put in the":PRINT"subroutine.  Start at 1000 and use":PRINT"x(1),..., x(";N;").  Call the function":PRINT"F.":END
120 PRINT
125 FOR I=1 TO N
130 PRINT"     x(";I;") = ";
135 INPUT"";V(I)
140 PRINT"       u(";I;") = ";
145 INPUT"";U(I)
150 NEXT I
155 S=0
160 FOR I=1 TO N
165 X(I)=V(I)
170 NEXT I
175 GOSUB 1000
180 FF=F
185 FOR I=1 TO N
190 X(I)=X(I)+U(I)
195 GOSUB 1000
200 T=F-FF
205 S=S+T*T
210 X(I)=X(I)-U(I)
215 NEXT I
220 S=SQR(S)
222 PRINT
223 PRINT"     The value of f is ";FF
224 PRINT
225 PRINT"     The error in f is ";S
227 PRINT
230 PRINT"Do you want another run with the same function f? (Y/N)
235 INPUT"";W$
245 IF W$="Y" OR W$="y" THEN GOTO 120
250 CLS:END
1000 F=5*X(1)*X(2)*X(3)
1005 RETURN
```

## EXPFIT.BAS

```bas
10 REM exponential curve fit
11 REM y = a*exp(b*x)
20 INPUT"No. of data pairs = ";N
30 XB=0:YB=0
50 XY=0:X2=0:Y2=0
60 FOR I=1 TO N
70 PRINT"i = ";I
80 INPUT"     x(i) = ";XI
85 INPUT"     y(i) = ";YI
86 YI=LOG(YI)
90 XB=XB+XI
100 YB=YB+YI
110 XY=XY+XI*YI
120 X2=X2+XI*XI
125 Y2=Y2+YI*YI
130 NEXT I
140 D=N*X2-XB*XB
150 A=(YB*X2-XY*XB)/D
160 B=(N*XY-XB*YB)/D
170 R2=A*YB+B*XY-(YB*YB/N)
180 R2=R2/(Y2-(YB*YB/N))
182 PRINT:PRINT
185 A=EXP(A)
186 PRINT"y = a*exp(b*x)"
190 PRINT"     a = ";A
195 PRINT"     b = ";B
200 PRINT"     coeff of determination = ";R2
210 INPUT"Enter 0 for another run. ";K
220 IF K=0 THEN GOTO 10
230 CLS:END
```

## FOURIER.BAS

```bas
10 'Fourier coefficients 05/22/83
15 NP=51:PI2=2*3.1415927#
20 DIM AC(40),BC(40),QX(250),QY(250)
25 KEY OFF:CLS
30 PRINT "Function should start in statement 535 and end with RETURN."
35 PRINT "If not provided, press Ctrl Break and append the function."
36 A$=INKEY$:IF A$=""THEN GOTO 36
40 SCREEN 0,0,0:WIDTH 80:FLAG=0:PRINT
45 PRINT"For even function enter 1; for odd function enter 2."
50 INPUT"If neither, or not known, enter 3.",A
55 IF A<1 OR A>3 OR A<>INT(A) THEN BEEP:GOTO 40
60 PRINT:INPUT"Period T = ";B
65 IF B<=0 THEN BEEP:GOTO 60
70 PRINT:INPUT"Number of integration intervals = ";C
75 IF C<2 OR C<>INT(C) THEN BEEP:GOTO 70
80 IF A=3 THEN 225 ELSE D=B/2/C
85 IF A=2 THEN 155 ELSE J=-1
90 J=J+1:X=0:GOSUB 535
95 E=Y:F=0:G=PI2*J/B
100 FOR I=1 TO C
105 X=D*I:GOSUB 535
110 F=F+(E+Y)/2*D*COS(G*(X-D/2))
115 E=Y
120 NEXT I
125 AC(J)=4*F/B
130 PRINT "A";J;" = ";AC(J)
135 PRINT:PRINT"More coefficients? (Y/N) ";
140 A$=INKEY$:IF A$=""THEN 140
145 PRINT A$:IF A$="Y" OR A$="y" THEN 90
150 IF A$="n" OR A$="N" THEN 340 ELSE BEEP:GOTO 135
155 J=0
160 J=J+1:X=0:GOSUB 535
165 E=Y:K=0:G=PI2*J/B
170 FOR I=1 TO C
175 X=D*I:GOSUB 535
180 K=K+(E+Y)/2*D*SIN(G*(X-D/2))
185 E=Y
190 NEXT I
195 BC(J)=4*K/B
200 PRINT "B";J;" = ";BC(J)
205 PRINT:PRINT"More coefficients?  (Y/N) ";
210 A$=INKEY$:IF A$="" THEN 210
215 PRINT A$:IF A$="y" OR A$="Y" THEN 160
220 IF A$="n" OR A$="N" THEN 340 ELSE BEEP:GOTO 205
225 D=B/C:J=-1
230 J=J+1:X=-B/2:GOSUB 535
235 E=Y:K=0:F=0:G=PI2*J/B
240 FOR I=1 TO C
245 X=D*I-B/2:GOSUB 535
250 M=G*(X-D/2)
255 F=F+(E+Y)/2*D*COS(M)
260 IF J=0 THEN 270
265 K=K+(E+Y)/2*D*SIN(M)
270 E=Y
275 NEXT I
280 H=2*F/B:AC(J)=H
285 PRINT"A";J;" = ";H
290 IF J=0 THEN 320
295 L=2*K/B:BC(J)=L
300 PRINT"B";J;" = ";L
305 N=SQR(H*H+L*L):P=ATN(-L/H)
310 PRINT"C";J;" = ";N
315 PRINT"  Theta";J;" = ";P
320 PRINT:PRINT"More coefficients?  (Y/N)";
325 A$=INKEY$:IF A$="" THEN 325
330 PRINT A$:IF A$="y" OR A$="Y" THEN 230
335 IF A$="n" OR A$="N" THEN 340 ELSE BEEP:GOTO 320
340 WIDTH 80:SCREEN 0:PRINT:PRINT"How many coefficients to use for the plot?"
345 PRINT"(but don't specify more than ";J;:INPUT"already computed.) ";NC
350 IF NC>J OR NC<>ABS(INT(NC)) THEN BEEP:GOTO 340
355 PRINT:PRINT"Please wait while I'm finding plot values."
360 PRINT"To leave the display mode, press any key. ";
365 IF FLAG =1 THEN 430 ELSE FLAG = 1
370 IF NP/2=INT(NP/2)THEN NP=NP-1
375 NP1=INT(NP/2):NP2=NP1+2:NP3=NP+NP1:NP4 =NP3+2
380 DELTA = B/(NP-1)
385 FOR I=1 TO NP1+1
390 PRINT".";:  X=DELTA*(I-1):GOSUB 535
395 QX(NP1+I)=X:QX(NP2-I)=-X
400 QX(NP3+I)=X:QY(NP3+I)=Y:QX(NP4-I)=-X
405 ON A GOTO 420,410,415
410 Y=-Y:GOTO 420
415 X=-X:GOSUB 535
420 QY(NP4-I) = Y
425 NEXT I
430 FOR I=1 TO NP1+1
435 Y1=0:Y2=0:Y3=0:X=DELTA*(I-1):PRINT".";
440 FOR K=1 TO NC
445 ON A GOTO 450,455,450
450 Y1=Y1+AC(K)*COS(PI2*K*X/B):IF A=1 THEN 465
455 Y2=Y2+BC(K)*SIN(PI2*K*X/B):IF A=2 THEN 465
460 Y3 = Y3+BC(K)*SIN(PI2*K*(-X)/B)+AC(K)*COS(PI2*K*(-X)/B)
465 NEXT K
470 ON A GOTO 475,480,485
475 QY(NP1+I)=Y1+AC(0)/2:QY(NP2-I)=QY(NP1+I):GOTO 490
480 QY(NP1+I)=Y2:QY(NP2-I)=-Y2:GOTO 490
485 QY(NP1+I)=Y1+Y2+AC(0)/2:QY(NP2-I)=Y3+AC(0)/2
490 NEXT I
495 'plot grids and labels
500 QN=2*NP:QFLG=1:GOSUB 1000
505 'plot function and its approximation
510 QN=NP:QFLG=2:GOSUB 1000
515 FOR I=1 TO NP
520 QY(I)=QY(I+NP)
525 NEXT I:GOSUB 1000
530 IF INKEY$=""THEN 530 ELSE 340
535 IF X>0 THEN Y=6
536 IF X=0 THEN Y=0
537 IF X<0 THEN Y=-6
540 REM
545 RETURN
1000 'subroutine GRAPH 06/24/83
1010 'qflg=0 - grid and plot, =1 - grid only, =2 - plot only
1020 IF QFLG>1 THEN 1690
1030 DEF FNQSC (QS,QXS,QNS,QXO,QNO)=INT(QXO-(QXO-QNO)/(QXS-QNS)*(QXS-QS)+0.5)
1040 Q$="##.##"
1050 'approximate number of vertical and horizontal intervals
1060 QNINX=6.5:QNINY=5.5
1070 SCREEN 1:CLS:KEY OFF
1080 'left and right borders
1090 QLNL=40:QLNR=299
1100 'bottom and top borders
1110 QLNB=183:QLNT=10:QLOCX1=1
1120 QLOCY1=INT(QLNT/8+0.5)
1130 QLOCY2=QLOCY1+1
1140 QLOCY3=INT(QLNB/8+0.625)
1150 QLOCY4=QLOCY3+1
1160 QLOCY5=QLOCY4+1
1170 QLOCX2=INT(QLNL/8-4)
1180 QLOCX3=QLOCX2+1
1190 QLOCX4=QLOCX3+INT((QLNR-QLNL)/8+0.625)-1
1200 QMINX=QX(1):QMAXX=QMINX
1210 QMINY=QY(1):QMAXY=QMINY
1220 'find min and max of the qx and qy arrays
1230 FOR QI=2 TO QN
1240 IF QMINX>QX(QI) THEN QMINX=QX(QI)
1250 IF QMAXX<QX(QI) THEN QMAXX=QX(QI)
1260 IF QMINY>QY(QI) THEN QMINY=QY(QI)
1270 IF QMAXY<QY(QI) THEN QMAXY=QY(QI)
1280 NEXT QI
1290 'find "nice" x-scale intervals
1300 QMIN=QMINX:QMAX=QMAXX:QNIN=QNINX
1310 GOSUB 2280
1320 QSCLX=QSCL:QMINPX=QMINP:QMAXPX=QMAXP
1330 QNINPX=QNINP:QWDTX=QWDT
1340 'find "nice" y-scale intervals
1350 QMIN=QMINY:QMAX=QMAXY:QNIN=QNINY
1360 GOSUB 2280
1370 QSCLY=QSCL:QMINPY=QMINP:QMAXPY=QMAXP
1380 QNINPY=QNINP:QWDTY=QWDT
1390 'draw title
1400 LOCATE QLOCY1,QLOCX1
1410 PRINT"MULT. X-AXIS BY";STR$(QSCLX);", Y-AXIS BY";QSCLY;
1420 QLOCWY=(QLOCY3-QLOCY2+1)/QNINPY
1430 QLNWY=(QLNB-QLNT)/QNINPY
1440 'draw horizontal grid and labels
1450 FOR QI=0 TO QNINPY
1460 IF QI=0 THEN 1490
1470 LOCATE INT(QLOCY3-QI*QLOCWY+1),QLOCX2
1480 PRINT USING Q$;QMINPY+QI*QWDTY;
1490 QLNY1=QLNB-QI*QLNWY
1500 LINE(QLNL,QLNY1)-(QLNR,QLNY1)
1510 NEXT QI
1520 QLOCWX=(QLOCX4-QLOCX3+1)/QNINPX
1530 QLNWX=(QLNR-QLNL)/QNINPX
1540 'draw vertical grid and labels
1550 FOR QI=0 TO QNINPX
1560 IF QI/2=INT(QI/2)THEN QLOC=QLOCY5 ELSE QLOC=QLOCY4
1570 LOCATE QLOC,INT(QLOCX3+QI*QLOCWX+0.5)
1580 PRINT USING Q$;QMINPX+QI*QWDTX;
1590 QLNX1=QLNL+QI*QLNWX
1600 LINE (QLNX1,QLNB)-(QLNX1,QLNT)
1610 NEXT QI
1620 IF QFLG=1 THEN RETURN
1630 'draw qx-qy array
1640 FOR QI=2 TO QN
1650 GOSUB 2220
1660 IF QI>2 THEN LINE -(QX2,QY2) ELSE LINE (QX1,QY1)-(QX2,QY2)
1670 NEXT QI
1680 RETURN
1690 IF QSCL>0 THEN 1710
1700 PRINT"NO GRID DRAWN; CHECK QFLG PARAMETER":RETURN
1710 FOR QI=2 TO QN
1720 GOSUB 2220
1730 'check for points outside the grid
1740 IF QX1<QLNL OR QX1>QLNR OR QY1>QLNB OR QY1<QLNT THEN QFL1=1 ELSE QFL1=0
1750 IF QX2<QLNL OR QX2>QLNR OR QY2>QLNB OR QY2<QLNT THEN QFL2=1 ELSE QFL2=0
1760 IF QFL1=0 AND QFL2=0 THEN 2190
1770 IF QFL1*QFL2=1 THEN 1990
1780 'one point outside, one inside
1790 IF QX1=QX2 THEN 1890
1800 IF QFL1=1 AND QX1>QLNR OR QFL2=1 AND QX2>QLNR THEN 1850
1810 QYT=FNQSC(QLNL,QX1,QX2,QY1,QY2)
1820 IF QYT>QLNB OR QYT<QLNT THEN 1850
1830 IF QFL2=1 THEN QX2=QLNL:QY2=QYT:GOTO 2190
1840 QX1=QLNL:QY1=QYT:GOTO 2190
1850 QYT=FNQSC(QLNR,QX1,QX2,QY1,QY2)
1860 IF QYT>QLNB OR QYT<QLNT THEN 1890
1870 IF QFL2=1 THEN QX2=QLNR:QY2=QYT:GOTO 2190
1880 QX1=QLNR:QY1=QYT:GOTO 2190
1890 IF QY1=QY2 THEN 1990
1900 IF QFL1=1 AND QY1/QLNT OR QFL2=1 AND QY2<QLNT THEN 1950
1910 QXT=FNQSC(QLNB,QY1,QY2,QX1,QX2)
1920 IF QXT<QLNL OR QXT>QLNR THEN 1950
1930 IF QFL2=1 THEN QY2=QLNB:QX2 =QXT:GOTO 2190
1940 QY1=QLNB:QX1=QXT:GOTO 2190
1950 QXT=FNQSC(QLNT,QY1,QY2,QX1,QX2)
1960 IF QFL2=1 THEN QY2=QLNT:QX2=QXT:GOTO 2190
1970 QY1=QLNT:QX1=QXT:GOTO 2190
1980 'both points outside
1990 QTEMP=0:IF QX1<QLNL AND QX2<QLNL OR QX1>QLNR AND QX2>QLNR THEN 2200
2000 IF QY1<QLNT AND QY2<QLNT OR QY1>QLNB AND QY2>QLNB THEN 2200
2010 IF QX1=QX2 THEN 2100
2020 QYT=FNQSC(QLNL,QX1,QX2,QY1,QY2)
2030 IF QYT>QLNB OR QYT<QLNT THEN 2050
2040 QX1=QLNL:QY1=QYT:QTEMP=1
2050 QYT=FNQSC(QLNR,QX1,QX2,QY1,QY2)
2060 IF QYT>QLNB OR QYT<QLNT THEN 2100
2070 QTEMP=QTEMP+1
2080 IF QTEMP=2 THEN QX2=QLNR:QY2=QYT:GOTO 2190
2090 QX1=QLNR:QY1=QYT
2100 IF QY1=QY2 THEN 2200
2110 QXT=FNQSC(QLNB,QY1,QY2,QX1,QX2)
2120 IF QXT<QLNL OR QXT>QLNR THEN 2160
2130 QTEMP=QTEMP+1
2140 IF QTEMP=2 THEN QY2=QLNB:QX2=QXT:GOTO 2190
2150 QY1=QLNB:QX1=QXT
2160 IF QTEMP=0 THEN 2200
2170 QXT=FNQSC(QLNT,QY1,QY2,QX1,QX2)
2180 QY2=QLNT:QX2=QXT
2190 LINE (QX1,QY1) - (QX2,QY2)
2200 NEXT QI
2210 RETURN
2220 'routine for linear transformation from subject to object space
2230 QX1=FNQSC(QX(QI-1)/QSCLX,QMAXPX,QMINPX,QLNR,QLNL)
2240 QX2=FNQSC(QX(QI)/QSCLX,QMAXPX,QMINPX,QLNR,QLNL)
2250 QY1=FNQSC(QY(QI-1)/QSCLY,QMAXPY,QMINPY,QLNT,QLNB)
2260 QY2=FNQSC(QY(QI)/QSCLY,QMAXPY,QMINPY,QLNT,QLNB)
2270 RETURN
2280 'routine to find "nice" scale intervals
2290 IF QMIN>=QMAX THEN BEEP:PRINT"Array cannot be plotted.":STOP
2300 QEPS=0.025:QA=ABS(QMIN)
2310 IF ABS(QMIN)<ABS(QMAX) THEN QA=ABS(QMAX)
2320 QSCL=10^INT(LOG(QA)/LOG(10))
2330 QMINA=QMIN/QSCL:QMAXA=QMAX/QSCL
2340 QD=(QMAXA-QMINA)/QNIN:QJ=QD*QEPS
2350 QE=INT(LOG(QD)/LOG(10))
2360 QF=QD/10^QE:QV=10
2370 IF QF<SQR(50) THEN QV=5
2380 IF QF<SQR(10) THEN QV=2
2390 IF QF<SQR(2) THEN QV=1
2400 QWDT=QV*10^QE
2410 QG=INT(QMINA/QWDT)
2420 IF ABS(QG+1-QMINA/QWDT)<QJ THEN QG=QG+1
2430 QMINP=QWDT*QG
2440 QH=INT(QMAXA/QWDT)+1
2450 IF ABS(QMAXA/QWDT+1-QH)<QJ THEN QH=QH-1
2460 QMAXP=QWDT*QH
2470 QNINP=QH-QG
2480 IF ABS(QMAXP)>=10 OR ABS(QMINP)>=10 THEN QSCL=QSCL*10:GOTO 2330
2490 RETURN
```

## GAMMA(X).BAS

```bas
1 CLS:LOCATE 5,20
2 PRINT"GAMMA FUNCTIONS":LOCATE 7,1
10 REM GAMMA(X)
20 INPUT"     x = ";X
40 IF X=0 THEN PRINT"x = 0; gamma(0) = infinity.":GOTO 20
50 GOSUB 9200
55 IF G5=0 THEN GOTO 70
60 PRINT:PRINT"       gamma(";X;") = ";G5
70 PRINT:INPUT"Enter 0 for another run. ";M
80 IF M=0 THEN GOTO 20
90 GOTO 9999
9200 REM stirling's approximation
9210 P7=3.1415927#
9220 IF X<0 THEN GOTO 9270
9230 Y=X+3
9240 G2=SQR(2*P7/Y)*EXP(Y*LOG(Y)+(1-1/(30*Y*Y))/(12*Y)-Y)
9250 G5=G2/(X*(X+1)*(X+2))
9260 RETURN
9270 REM negative argument
9272 IF X=INT(X) THEN PRINT"gamma (";INT(X);") = infinity":GOTO 9400
9280 K5=0
9290 G3=X
9300 IF X>=0 THEN 9340
9310 K5=K5+1
9320 X=X+1
9330 GOTO 9300
9340 GOSUB 9200:REM almost recursive
9350 FOR J=1 TO K5
9360 X=X-1
9370 G5=G5/X
9380 NEXT J
9390 X=G3
9400 RETURN
9999 CLS:END
```

## GATDECUP.BAS

```bas
10 REM gated decoupling for solvent peak suppression
20 CLEAR:WIDTH 40:KEY OFF:SCREEN 1,0:COLOR 0,1:CLS
25 DIM CS(179),SN(179)
30 T$=TIME$:S=VAL(RIGHT$(T$,2))
40 S=500*S-32000
50 RANDOMIZE S
60 LOCATE 7,4:PRINT"HOMONUCLEAR GATED DECOUPLING IN NMR"
70 LOCATE 9,6:PRINT"FOR SOLVENT PEAK SUPPRESSION"
80 LOCATE 13,10:PRINT"David J Wilson"
90 LOCATE 14,10:PRINT"Department of Chemistry"
100 LOCATE 15,10:PRINT"Vanderbilt University"
110 DTH=2*3.14159/180
120 TH=-DTH
130 FOR I=0 TO 179
140 TH=TH+DTH
150 CS(I)=COS(TH):SN(I)=SIN(TH)
160 NEXT I
170 CLS
180 PRINT"  One way to eliminate the resonance of the solvent is by saturating the sol-   vent protons, providing a 90 deg pulse, and observing the resulting free induc- tion decay."
190 PRINT"  The method is called homonuclear gat- ed decoupling, and is described on pp.  5-20 to 5-21 of the FX90-Q manual.      The sequence is diagrammed on the next  screen.  Touch <return>, please."
195 PRINT
200  W$=INKEY$:IF W$="" THEN 200
210 CLS:LINE (0,70)-(319,70),1:LINE (0,180)-(319,180),1
220 LINE (20,180)-(80,150),1,BF
230 LOCATE 3,1:PRINT"Observation"
235 LOCATE 4,1:PRINT"channel"
240 LOCATE 14,1:PRINT"Irradiation"
245 LOCATE 15,1:PRINT"channel (solvent protons)"
247 LINE (105,12)-(115,8),1
250 LOCATE 25,2:PRINT"Irradiation";
255 LINE (10,190)-(40,180),1
260 LINE (26,140)-(50,190),2
270 LOCATE 24,7:PRINT"Homo spoiling";
275 LINE (20,150)-(20,130),1:LINE (26,150)-(26,130),1
290 LINE (95,70)-(105,10),1,BF
295 LOCATE 1,13:PRINT"Observation pulse"
300 A=-50:B=0.04
305 XX=105:YY=70
307 LOCATE 3,18:PRINT"F.I.D."
308 LINE (160,21)-(130,51),1
310 FOR I=0 TO 150
320 X=105+I
330 Y=A*COS(I)*EXP(-B*I)+70
335 LINE (XX,YY)-(X,Y),1
340 XX=X:YY=Y
350 NEXT I
360 LOCATE 16,17:PRINT"Touch <return>, please.";
370 W$=INKEY$:IF W$="" THEN 370
380 CLS
390 X1=100:Y1=100:X2=210:Y2=100
400 RX=117:RY=90
410 LINE (X1,Y1)-(X1,Y1-RY),1
420 LINE (X2,Y2)-(X2,Y2-RY),1
430 LOCATE 24,1:PRINT"Saturate solvent protons.";
440 B=-0.0075
445 J=-1
448 X=X1:Y=Y1
450 FOR I=0 TO 720
455 J=J+1:IF J>179 THEN J=J-180
457 TP=EXP(B*I)
460 U=CS(J)*RY*TP
470 V=SN(J)*RX*TP
475 LINE (X1,Y1)-(X,Y),0
480 X=X1+V:Y=Y1-U
490 LINE (X1,Y1)-(X,Y),1
500 NEXT I
502 LOCATE 25,1:PRINT"Touch <return>, please.";
503 W$=INKEY$:IF W$="" THEN 503
504 LOCATE 25,1:PRINT"                       ";
510 LOCATE 24,1:PRINT"Observation pulse.        ";
520 FOR I=0 TO 45
530 U=CS(I)*RY:V=SN(I)*RX
540 LINE (X2,Y2)-(X,Y),0
550 X=X2+V:Y=Y2-U
560 LINE (X2,Y2)-(X,Y),1
565 NEXT I
570 LOCATE 25,1:PRINT"Touch <return>, please.";
580 W$=INKEY$:IF W$="" THEN 580
590 LOCATE 25,1:PRINT"                       ";
592 LOCATE 24,1:PRINT"   F.I.D. of sample protons.";
594 LINE (0,150)-(319,150),1
600 T1=0.02:T2=0.03
605 X=X2:Y=Y2
607 XM=0:YM=150+0.4*RX
610 FOR I=0 TO 150
615 LINE (X2,Y2)-(X,Y),0
620 Y=Y2-RY*(1-EXP(-I*T1))
625 XX=RX*EXP(-I*T2)
630 X=X2+XX
635 LINE (X1,Y1)-(X1,Y),1
640 LINE (X2,Y2)-(X,Y),1
645 YP=-0.4*COS(I)*XX+150
647 LINE (XM,YM)-(I,YP),1
648 XM=I:YM=YP
650 NEXT I
660 LOCATE 25,1:PRINT"Touch <return> to go on, please.";
670 W$=INKEY$:IF W$="" THEN 670
680 CLS:RUN"menu.bas"
```

## HARMOSC.BAS

```bas
1 CLEAR:CLS:WIDTH 40:LOCATE 5,5
2 PRINT"HARMONIC OSCILLATOR FUNCTIONS":PRINT:PRINT
3 PRINT"To calculate Hn(x) you must provide":PRINT"values of n and x.  The computer then":PRINT"calculates Hn(x) by recursion.":PRINT
20 INPUT"n = ",N
30 INPUT"x = ",X
40 P=1
50 Q=2*X
60 IF N=0 THEN H=P:GOTO 130
70 IF N=1 THEN H=Q:GOTO 130
80 FOR K=2 TO N
90 R=2*X*Q-2*(K-1)*P
100 P=Q
110 Q=R
120 NEXT K
125 H=R
130 NR=1/SQR(3.1415927#)
140 IF N=0 THEN 180
150 FOR K=1 TO N
160 NR=NR/(2*K)
170 NEXT K
180 H=SQR(NR)*H*EXP(-X*X/2)
200 PRINT"Hn(x) = ";H
210 PRINT:PRINT"Another value of x? (Y/N)"
211 INPUT"",W$
212 IF W$="N" THEN PRINT:GOTO 230
213 GOTO 30
230 PRINT"Another value of n? (Y/N)"
231 INPUT"",W$
235 IF W$="N" THEN GOTO 245
237 GOTO 20
245 CLS:CLEAR:WIDTH 80:END
```

## INTERP3.BAS

```bas
2 CLEAR:CLS:WIDTH 40
5 REM 4-POINT INTERPOLATION
15 DIM X(4),Y(4)
20 LOCATE 5,1:PRINT"  4-POINT POLYNOMIAL INTERPOLATION":PRINT
25 PRINT:PRINT"Requires x(i), y(i), i=1 to 4"
30 PRINT"Then you input the desired x (preferab-"
35 PRINT"ly x(2) < x < x(3)), and the program"
40 PRINT"gives you y(x)."
41 PRINT:PRINT
45 FOR I=1 TO 4
47 PRINT
50 PRINT "x(";I;") = ";
55 INPUT"",X(I)
60 PRINT"  y(";I;") = ";
65 INPUT"",Y(I)
70 NEXT
75 A1=(X(1)-X(2))*(X(1)-X(3))*(X(1)-X(4))
80 A2=(X(2)-X(1))*(X(2)-X(3))*(X(2)-X(4))
85 A3=(X(3)-X(1))*(X(3)-X(2))*(X(3)-X(4))
90 A4=(X(4)-X(1))*(X(4)-X(2))*(X(4)-X(3))
95 PRINT:INPUT"    x = ",X
100 PRINT
105 B1=(X-X(2))*(X-X(3))*(X-X(4))*Y(1)/A1
110 B1=B1+(X-X(1))*(X-X(3))*(X-X(4))*Y(2)/A2
115 B1=B1+(X-X(1))*(X-X(2))*(X-X(4))*Y(3)/A3
120 B1=B1+(X-X(1))*(X-X(2))*(X-X(3))*Y(4)/A4
125 PRINT"  y = ",B1
130 PRINT:PRINT"Another run with the same x(i), y(i)?"
131 PRINT"     (Y/N)"
132 INPUT"",W$
135 IF W$="N" THEN GOTO 140
136 GOTO 95
140 PRINT"Another run with new x(i), y(i)? (Y/N)"
145 INPUT"",W$
150 IF W$="N" THEN GOTO 155
152 GOTO 45
155 CLS:END
```

## INTERP4.BAS

```bas
2 CLEAR:REM QUARTIC INTERPOLATION
3 WIDTH 40
5 CLS
20 DIM X(5),Y(5)
22 LOCATE 5,2:PRINT"QUARTIC INTERPOLATION":PRINT:PRINT"Requires x(i), y(i), i=1 to 5"
25 PRINT"Then you input the desired x (preferab-":PRINT"ly x(2) < x < x(4)), and the program"
30 PRINT"gives you y(x)."
35 FOR I=1 TO 5
40 PRINT "x(";I;") = ";: INPUT"",X(I)
45 PRINT"  y(";I;") = ";:INPUT"",Y(I)
50 NEXT
55 A1= (X(1)-X(2))*(X(1)-X(3))*(X(1)-X(4))*(X(1)-X(5))
60 A2=(X(2)-X(1))*(X(2)-X(3))*(X(2)-X(4))*(X(2)-X(5))
65 A3=(X(3)-X(1))*(X(3)-X(2))*(X(3)-X(4))*(X(3)-X(5))
70 A4=(X(4)-X(1))*(X(4)-X(2))*(X(4)-X(3))*(X(4)-X(5))
75 A5=(X(5)-X(1))*(X(5)-X(2))*(X(5)-X(3))*(X(5)-X(4))
80 PRINT:INPUT"     x = ",X
85 Y=(X-X(2))*(X-X(3))*(X-X(4))*(X-X(5))*Y(1)/A1
90 Y=Y+(X-X(1))*(X-X(3))*(X-X(4))*(X-X(5))*Y(2)/A2
92 Y=Y+(X-X(1))*(X-X(2))*(X-X(4))*(X-X(5))*Y(3)/A3
95 Y=Y+(X-X(1))*(X-X(2))*(X-X(3))*(X-X(5))*Y(4)/A4
97 Y=Y+(X-X(1))*(X-X(2))*(X-X(3))*(X-X(4))*Y(5)/A5
110 PRINT:PRINT"          y = ",Y:PRINT
115 PRINT"Another run with same x(i), y(i)?  (Y/N)"
120 INPUT"",W$
125 IF W$="N" THEN GOTO 130
127 GOTO 80
130 PRINT:PRINT"Another run with new x(i), y(i)?  (Y/N)"
135 INPUT"",W$
140 IF W$="N" THEN GOTO 145
142 GOTO 35
145 CLS:END
```

## INVRECOV.BAS

```bas
10 REM NMR: measurement of T1 by inversion recovery
20 CLEAR:KEY OFF:SCREEN 1,0:COLOR 0,1:WIDTH 40:CLS
30 T$=TIME$
40 S=VAL(RIGHT$(T$,2))
50 S=500*S-32000
60 RANDOMIZE S
70 LOCATE 7,8:PRINT"NMR - MEASUREMENT OF T1"
80 LOCATE 9,9:PRINT"BY INVERSION RECOVERY"
90 LOCATE 13,10:PRINT"David J Wilson"
100 LOCATE 14,10:PRINT"Department of Chemistry"
110 LOCATE 15,10:PRINT"Vanderbilt University"
120 FOR I=1 TO 2000:NEXT I
130 CLS
140 PRINT"  One way by which T1s can be measured  is by the inversion recovery method.    In this, the spins are given a 180 deg"
150 PRINT"pulse, allowed to relax for a  time     tau, given a 90 deg pulse, and then     allowed to undergo free induction de-   cay.  The signal from this FID is meas- ured, and can be used to calculate T1."
160 PRINT:PRINT"Touch <return>, please."
170 W$=INKEY$:IF W$="" THEN 170
180 CLS
190 PRINT:PRINT"  After the 180 deg pulse, the magnet-  ization is in the negative z direction, and decays according to":PRINT
200 PRINT"   Mz(t) = Mo*[1 - 2*exp(-t/T1)]":PRINT
210 PRINT"The initial amplitude of the FID after  the subsequent 90 deg pulse is then     given by":PRINT
220 PRINT"   Mx(init) = Mo*[1 - 2*exp(-tau/T1)]"
230 PRINT
240 PRINT"The signal vanishes when Mx(init) is    zero, for which we must have":PRINT
250 PRINT"     tau[Mx(init) = 0] = ln(2)*T1"
260 PRINT:PRINT"from which we find that                   1.4427*tau(0) = T1.":PRINT
270 PRINT"Touch <return>, please."
280 W$=INKEY$:IF W$="" THEN 280
290 CLS
300 PRINT"Also, one can show that":PRINT
310 PRINT"     Mo - Mx(tau)      tau"
320 PRINT"  ln[------------] = - ---"
330 PRINT"         2*Mo           T1"
340 PRINT:PRINT"so that a plot of the LHS as a function of tau has - 1/T1 as its slope."
350 PRINT:PRINT"  I shall choose a value of T1.  You    then choose the time increment Dt for   tau--tau = 0, Dt, 2Dt, 3Dt, ... 9Dt."
360 PRINT"I'll then plot the spectra, and ask you to calculate the value of T1.  My val-  ues of T1 lie in the range .5 - 10 sec."
370 PRINT:PRINT"  Touch <return>, please."
380 W$=INKEY$:IF W$="" THEN 380
390 CLS
400 T1=0.5+9.5*RND(1)
401 PRINT"  What value of Dt, the increment in    tau, do you want?  (.1 <= Dt <= 5 sec)"
402 INPUT"Dt = ",DT
403 PRINT"To abort a set of runs, touch 'A'.      Touch <return> to go on, please."
404 W$=INKEY$:IF W$="" THEN 404
405 CLS
410 PRINT T1
420 FOR I=0 TO 190 STEP 8
430 LINE (0,I)-(319,I),2
440 NEXT I
450 W2=25
460 M0=50
462 LC=95
464 Y0=136
466 TAU=-DT
470 FOR J=1 TO 10
471 TAU=TAU+DT
472 MY=M0*(1-2*EXP(-TAU/T1))
473 W$=INKEY$
474 IF W$="A" OR W$="a" THEN CLS:J=10:I=319:GOTO 401
480 LC=LC+10
490 Y0=Y0-8
501 LOCATE 18-J,1:PRINT TAU
510 FOR I=0 TO 319
520 TP=I-LC:TP=TP*TP
530 Y=Y0-MY/(1+TP/W2)
540 PSET (I,Y),1
550 NEXT I
560 NEXT J
570 LOCATE 1,1
571 PRINT"Do you want to choose"
572 PRINT"another value of Dt"
573 PRINT"and make another set"
574 PRINT"of runs?  (Y/N)"
580 W$=INKEY$:IF W$="" THEN 580
590 IF W$="Y" OR W$="y" THEN CLS:GOTO 401
600 CLS:PRINT"OK, what value (sec) do you get for T1? (Give or take 5%)"
610 INPUT "",TT1
620 TB=T1*1.05:TS=T1*0.95
630 IF TT1 >=TS AND TT1<=TB THEN PRINT"Great!  I got ";T1;" sec.":FOR I=1 TO 3000:NEXT I:CLS:RUN "menu.bas"
640 PRINT"No, that's not within 5% of what I got, and computers never make misteaks.      Touch <return> and try again, please.   (Or touch 'Q' and give up!)"
650 W$=INKEY$:IF W$="" THEN 650
655 IF W$="Q" OR W$="q" THEN CLS:RUN"menu.bas"
660 CLS:GOTO 401
```

## L2FILMS.BAS

```bas
10 CLEAR:SCREEN 1:COLOR 1,0:CLS
15 DIM PI(320),SIG(320)
16 KB=1.380000e-16:REM Boltzmann's const
20 LOCATE 8,5:PRINT"EQUATION OF STATE OF L2 FILMS"
30 LOCATE 10,7:PRINT"(MITTELMAN AND PALMER'S METHOD)"
40 LOCATE 13,10:PRINT"David J Wilson"
50 LOCATE 14,10:PRINT"Department of Chemistry"
60 LOCATE 15,10:PRINT"Vanderbilt University"
70 FOR I=1 TO 2000:NEXT I
80 CLS:PRINT"  This model is discussed in A. W.      Adamson, The Physical Chemistry of      Surfaces, 3rd ed., pp. 135-137; also    see R. Mittelmann and R. C. Palmer,     Trans. Faraday Soc., 38, 506 (1942)."
90 PRINT"  It allows us to calculate the equa-   tion of state for an L2-type film of an insoluble surface-active substance."
100 PRINT"  The notation used in the program is   that in Adamson's book.  You provide    the parameters in the model, and I will then grind out a pi-sigma plot (surface"
110 PRINT"pressure versus surface area per mole-  cule) for you."
120 PRINT:PRINT"  Touch <return> to go on, please."
130 W$=INKEY$:IF W$="" THEN 130
140 CLS
150 PRINT"First I need some parameters."
155 PRINT
160 PRINT"What is the area occupied by the polar  head in the surface?  (sq. Angstroms)"
165 PRINT"(in the range 20-50)"
170 INPUT"A = ",AH
180 PRINT:PRINT"What is the width of a CH2 group?"
181 PRINT"(approximately 4.6 Angstroms)"
190 INPUT"(Angstroms); b = ";B
200 PRINT:PRINT"What is the length of a CH2 group?"
201 PRINT"(approximately 1.43 Angstroms)"
210 INPUT"(Angstroms); a = ";A
220 PRINT:PRINT"How many CH2's are there in the chain?"
230 INPUT"(count the terminal CH3) ; N = ";NC
240 CLS:PRINT"What is the temperature?  (deg. K)"
250 INPUT"",T
260 PRINT:PRINT"What is the Van der Waals energy of     attraction between a CH2 group and the  water surface?  (ergs/molecule)"
261 PRINT"(approx. 1 - 4e-15 is reasonable.)"
270 INPUT"W = ";W
280 PRINT:PRINT"What is the energy required to put one  bend in the CH2 chain?  (ergs)"
281 PRINT"( 5.56e-14 erg is about right)"
290 INPUT"e' = ";EP
300 AH=AH/1.000000e+16:A=A/1.000000e+8:B=B/1.000000e+8
310 CLS:LOCATE 10,1:PRINT"I'm now calculating the curve.  This    will take a little while."
320 DPI=0.5
330 PI=-DPI
340 FOR II=1 TO 100
350 PI=PI+DPI
360 EX=EXP(-(PI*A*B-W)/(KB*T))
370 NUM=0:DEN=1
380 EXN=1
390 FOR I=1 TO NC
391 IF I=NC THEN TP=EXP(-EP/(KB*T)):NUM=NUM*TP:DEN=DEN*TP
400 EXN=EXN*EX
410 NUM=NUM+I*EXN
420 DEN=DEN+EXN
430 NEXT I
440 SI=AH+A*B*NUM/DEN
450 SIG(II)=SI*1.000000e+16:PI(II)=PI
455 CLS:LOCATE 10,10:PRINT SIG(II), PI(II)
460 NEXT II
470 CLS:LOCATE 10,1:PRINT"Patience, Master, all things come to    him who waits."
475 FOR I=1 TO 1000:NEXT I:CLS
480 SCY=190/PI
490 SCX=310/SIG(1)
495 LINE (0,0)-(0,199):LINE (0,199)-(319,199)
500 FOR II=1 TO 150
510 X=SCX*SIG(II)
520 Y=199-PI(II)*SCY
530 PSET (X,Y)
540 NEXT II
550 LOCATE 1,2:PRINT"PI(MAX) = "
555 LOCATE 2,2:PRINT PI
560 LOCATE 20,28:PRINT "sigma(max) ="
565 LOCATE 21,28:PRINT SIG(1)
570 W$=INKEY$:IF W$="" THEN 570
580 CLS:END
600 END
```

## LARMOR.BAS

```bas
10 CLEAR:CLS:WIDTH 40:SCREEN 1,0:COLOR 0,1:KEY OFF
11 PI=3.14159:P2=2*PI
20 LOCATE 5,12:PRINT"NMR SPECTROSCOPY"
30 LOCATE 7,12:PRINT"LARMOR PRECESSION"
40 LOCATE 10,10:PRINT"David J Wilson"
50 LOCATE 11,10:PRINT"Department of Chemistry"
60 LOCATE 12,10:PRINT"Vanderbilt University"
70 FOR I=1 TO 2000:NEXT I
80 CLS:LOCATE 1,18:PRINT"MENU"
90 LOCATE 3,1:PRINT"1. Table of nuclear properties."
100 LOCATE 5,1:PRINT"2. Free precession in a uniform field."
110 LOCATE 7,1:PRINT"3. Free induction decay."
120 LOCATE 9,1:PRINT"4. Behavior with a periodic transverse     field."
130 LOCATE 12,1:PRINT"5. The CW NMR experiment."
140 LOCATE 14,1:PRINT"6. Multiple Pulse NMR experiments."
150 LOCATE 16,1:PRINT"7. End."
160 LOCATE 18,1:PRINT"Touch the number of what you wish to    see, please."
170 W$=INKEY$:IF W$="" THEN 170
180 NM=VAL(W$):IF NM<1 OR NM>7 THEN GOTO 160
190 CLS:ON NM GOTO 1000,2000,3000,4000,5000,6000,7000
1000 LOCATE 1,6:PRINT"Table of nuclear properties"
1010 LOCATE 3,1:PRINT"Nucleus Y      I    mu/mun   vo/Bz":PRINT
1020 PRINT           "     (T-1 s-1)               Mhz/T"
1030            PRINT"  1H  2.675E8  1/2 2.79277   42.577"
1040            PRINT"  2H  0.411    1   0.85735    6.536"
1050            PRINT" 13C  0.673    1/2 0.70216   10.705"
1060            PRINT" 19F  2.517    1/2 2.6273    40.055"
1070            PRINT" 31P  1.083    1/2 1.1316    17.235"
1080 PRINT
1090 PRINT"mun = 5.0505E-27 J/T"
1095 PRINT
1100 PRINT"You can use one of these nuclei or any  other one in the demonstrations.  When  you are ready to return to the menu,    touch <return>."
1110 W$=INKEY$:IF W$="" THEN 1110
1120 GOTO 80
2000 REM free precession in a uniform field
2001 LOCATE 1,5:PRINT"Larmor precession in a constant"
2002 LOCATE 2,5:PRINT"uniform field.  The spins here are"
2003 LOCATE 3,5:PRINT"assumed isolated; there is neither"
2004 LOCATE 4,5:PRINT"transverse nor longitudenal relax-"
2005 LOCATE 5,5:PRINT"tion.  Touch <return> to go on."
2006 W$=INKEY$:IF W$="" THEN 2006
2010 CLS:LOCATE 5,1:PRINT"What is the magnetogyric ratio of the   nucleus you want to work with?"
2020 INPUT"Y [1/(Tesla sec)] = ",Y
2030 PRINT:PRINT"What is the strength (Tesla) of the     constant magnetic field in this sim-    ulation?"
2040 INPUT"Bz (Teslas) = ";B0
2050 PRINT:PRINT"The frequency of the precession is"
2060 PRINT Y*B0/(P2*1);" Mhz."
2070 W=Y*B0/1
2080 PRINT"Touch <return> for a simulation of the  behavior of the magnetization of the    nuclei."
2090 W$=INKEY$:IF W$="" THEN 2090
2100 CLS
2110 XB=159:YB=199:XT=159:YT=10:A=100:B=10
2120 WP=W/2000
2130 I=-1:X1=209:Y1=25
2131 LINE (159,10)-(155,14),3:LINE (159,10)-(163,14),3
2132 LOCATE 1,20:PRINT "Bo"
2140 I=I+1
2150 X=XB+A*COS(WP*I)
2160 Y=25+B*SIN(WP*I)
2170 LINE (XB,YB)-(X1,Y1),0
2180 LINE (XB,YB)-(XB,10),3
2190 LINE (XB,YB)-(X,Y),3
2200 X1=X:Y1=Y
2210 W$=INKEY$:IF W$="" THEN GOTO 2140
2220 CLS:LOCATE 5,1:PRINT"Another run?  (Y/N)"
2230 W$=INKEY$:IF W$="" THEN 2230
2240 IF W$="Y" OR W$="y" THEN CLS:GOTO 2000
2250 CLS:GOTO 80
3000 REM Free induction decay with T1 and T2.
3010 CLS
3020 PRINT"What is the magnetogyric ratio of your  nucleus?  ";
3030 INPUT"[1/(T*sec)] ",Y
3040 PRINT"What is the magnetic field strength?    (Teslas) ";
3050 INPUT"",B0
3055 W=Y*B0/(P2*1)
3057 WP=W/2000
3060 PRINT"What is T1 (sec)? (default = 3) ";
3065 INPUT"",T1
3066 IF T1=<0 THEN T1=3
3070 PRINT"What is T2 (sec)? (default = 3) ";
3075 INPUT"",T2
3076 IF T2<=0 THEN T2=3
3080 PRINT"What is Mz(init)/Mz(equil)?  (-1 <= Mz  <=1) ";
3085 INPUT"",ML
3090 IF ML<-1 OR ML>1 THEN GOTO 3080
3095 PRINT"What is Mtrans(init)/Mz(equil)?  (0 <=  Mtr <= 1)";
3100 INPUT"",MTR
3105 MZZ=95*(1-ML)
3110 MTRR=95*MTR
3114 LINE (0,170)-(319,170),3
3115 TT1=T1*600:TT2=T2*600
3116 XB=159:YB=100
3117 CLS
3118 TP1=EXP(-1/TT1):TP2=EXP(-1/TT2)
3119 ET1=1:ET2=1
3120 I=-2
3130 I=I+2
3135 ET1=ET1*TP1:ET2=ET2*TP2
3140 MGTR=MTRR*ET2
3150 MGLO=95-MZZ*ET1
3155 MGLO=YB-MGLO
3157 XX=MGTR*COS(WP*I)
3160 X=XB+XX
3161 PSET (I/20,170-XX/3),3
3165 Y=MGLO+0.1*MGTR*SIN(WP*I)
3167 LINE (XB,YB)-(X1,Y1),0
3170 LINE (XB,YB)-(X,Y),3
3175 X1=X:Y1=Y
3180 W$=INKEY$:IF W$="" THEN GOTO 3130
3185 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
3190 W$=INKEY$:IF W$="" THEN 3190
3195 IF W$="Y" OR W$="y" THEN GOTO 3000
3200 GOTO 80
4000 REM Effect of a transverse field B1 on a non-relaxing spin system
4005 CLS
4010 PRINT"Here we shall simulate the behavior of"
4011 PRINT"a non-relaxing spin system in a con-"
4012 PRINT"stant field Bz in the z-direction and"
4013 PRINT"a transverse field B1 rotating in the"
4014 PRINT"x-y plane.":PRINT
4015 PRINT"What is the magnetogyric ratio of your  nuclei?  [1/(Tesla sec)]";
4016 INPUT"  ",Y
4020 PRINT"What is the strength of Bz?  (Tesla)"
4021 INPUT"",B0
4022 W=Y*B0:REM frequency
4023 W=W/(P2*1):WP=W/2000
4024 PRINT:PRINT"  The Larmor frequency of the free pre-":PRINT"cession is ";W;" Mhz."
4030 PRINT"Let us examine the case where B1 << Bz."
4035 PRINT"We therefore require that B1/Bz be <=   .05"
4040 INPUT"B1/Bz = ";BB
4041 IF BB>0.1 THEN GOTO 4035
4042 B1=B0*BB
4045 YY=Y/(2.000000e+9*P2)
4050 MZ=95:MX=0:MY=0
4055 CLS
4060 PRINT"We next need the frequency of the":PRINT"transverse rotating field B1."
4065 PRINT"Give this to me as"
4070 PRINT"    w(rotating field)/w(Larmor)":
4075 PRINT"(Make this between .5 and 1.5, please.)"
4080 INPUT"",WW
4081 IF WW<0.5 OR WW>1.5 THEN GOTO 4075
4085 WR=WP*WW
4086 I=-1:CLS
4087 I=I+1
4088 CS=COS(WR*I):SN=SIN(WR*I)
4090 MX1=YY*(B0*MY+B1*SN*MZ)
4091 MY1=-YY*(B0*MX-B1*CS*MZ)
4092 MZ1=YY*B1*(-SN*MX-CS*MY)
4093 NX=MX+MX1:NY=MY+MY1:NZ=MZ+MZ1
4094 CS=COS(WR*(I+1)):SN=SIN(WR*(I+1))
4095 MX2=YY*(B0*NY+B1*SN*NZ)
4096 MY2=YY*(-B0*NX+B1*CS*NZ)
4097 MZ2=YY*B1*(-SN*NX-CS*NY)
4098 MX=MX+0.5*(MX1+MX2)
4099 MY=MY+0.5*(MY1+MY2)
4100 MZ=MZ+0.5*(MZ1+MZ2)
4110 X=159+MX*1.33
4115 Y=100-MZ-0.1*MY
4120 LINE (159,100)-(X1,Y1),0
4121 PSET (X1,Y1),3
4125 LINE (159,100)-(X,Y),3
4126 X1=X:Y1=Y
4130 W$=INKEY$:IF W$="" THEN 4087
4135 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
4140 W$=INKEY$:IF W$="" THEN 4140
4142 CLS
4145 IF W$="Y" OR W$="y" THEN 4000
4150 GOTO 80
5000 REM Operation of a CW NMR spectrometer (with T1 and T2 operative)
5001 CLS
5002 PRINT"Here we shall simulate the operation of a CW NMR spectrometer operating in the  slow passage mode.  Transverse and"
5003 PRINT"longitudinal relaxation methanisms are  operative.":PRINT
5005 PRINT"What is the magnetogyric ratio of your  nuclei?  [1/(Tesla sec)]";
5006 INPUT"  ",Y
5007 PRINT"What is the strength of Bz?  (Tesla)"
5008 INPUT"",B0
5009 W=Y*B0:REM frequency
5010 W=W/(P2*1):WP=W/2000
5011 PRINT:PRINT"  The Larmor frequency of the free pre-":PRINT"cession is ";W;" Mhz."
5012 PRINT"Let us examine the case where B1 << Bz."
5013 PRINT"We therefore require that B1/Bz be <=   .05"
5014 INPUT"B1/Bz = ";BB
5015 IF BB>0.1 THEN GOTO 5013
5016 B1=B0*BB
5017 YY=Y/(2.000000e+9*P2)
5018 MZ=95:MX=0:MY=0
5019 CLS
5020 PRINT"We next need the frequency of the":PRINT"transverse rotating field B1."
5021 PRINT"Give this to me as"
5022 PRINT"    w(rotating field)/w(Larmor)":
5023 PRINT"(Make this between .5 and 1.5, please.)"
5024 INPUT"",WW
5025 IF WW<0.5 OR WW>1.5 THEN GOTO 4075
5026 WR=WP*WW
5027 PRINT:PRINT"We need values of the relaxation times  T1 and T2.  1-10 sec is reasonable."
5028 INPUT"T1 (sec) = ",T1
5029 INPUT"t2 (sec) = ",T2
5030 T1=T1*300:T2=T2*300
5032 I=-1:CLS
5033 LINE (0,170)-(319,170),3
5034 I=I+1
5036 CS=COS(WR*I):SN=SIN(WR*I)
5038 MX1=YY*(B0*MY+B1*SN*MZ)-MX/T2
5040 MY1=-YY*(B0*MX-B1*CS*MZ)-MY/T2
5042 MZ1=YY*B1*(-SN*MX-CS*MY)-(MZ-95)/T1
5044 NX=MX+MX1:NY=MY+MY1:NZ=MZ+MZ1
5046 CS=COS(WR*(I+1)):SN=SIN(WR*(I+1))
5048 MX2=YY*(B0*NY+B1*SN*NZ)-NX/T2
5050 MY2=YY*(-B0*NX+B1*CS*NZ)-NY/T2
5052 MZ2=YY*B1*(-SN*NX-CS*NY)-(NZ-95)/T1
5054 MX=MX+0.5*(MX1+MX2)
5056 MY=MY+0.5*(MY1+MY2)
5058 MZ=MZ+0.5*(MZ1+MZ2)
5060 X=159+MX*1.33
5062 Y=100-MZ-0.1*MY
5064 LINE (159,100)-(X1,Y1),0
5066 PSET (X1,Y1),3
5067 PSET (I/20,170-MX/3)
5068 LINE (159,100)-(X,Y),3
5069 X1=X:Y1=Y
5070 W$=INKEY$:IF W$="" THEN 5034
5072 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
5074 W$=INKEY$:IF W$="" THEN 5074
5076 CLS
5078 IF W$="Y" OR W$="y" THEN 5000
5080 GOTO 80
6000 REM operation of an nmr spectrometer in the pulsed mode with T1 and T2 operative
6005 CLS
6010 PRINT"Here we shall simulate the operation of an NMR spectrometer operating in the    pulsed mode.  Transverse and longitud-  inal relaxation mechanisms are oper-"
6015 PRINT"ative.":PRINT
6020 PRINT"What is the magnetogyric ratio of your  nuclei?  [1/(Tesla sec)]";
6025 INPUT"  ",Y
6030 PRINT"What is the strength of Bz?  (Tesla)"
6035 INPUT"",B0
6040 W=Y*B0:REM frequency
6045 W=W/(P2*1):WP=W/2000
6050 PRINT:PRINT"  The Larmor frequency of the free pre-":PRINT"cession is ";W;" Mhz."
6055 PRINT"In pulsed NMR experiments B1 can be     quite large."
6060 PRINT"We require that B1/Bz be <=   .25."
6065 INPUT"B1/Bz = ";BB
6070 IF BB>0.25 THEN GOTO 6060
6075 B1=B0*BB
6080 YY=Y/(2.000000e+9*P2)
6085 MZ=95:MX=0:MY=0
6090 CLS
6095 PRINT"We next need the frequency of the":PRINT"transverse rotating field B1."
6100 PRINT"Give this to me as"
6105 PRINT"    w(rotating field)/w(Larmor)":
6110 PRINT"(Make this between .25 and 2.5, please.)"
6115 INPUT"",WW
6120 IF WW<0.25 OR WW>2.5 THEN GOTO 6110
6125 WR=WP*WW
6130 PRINT:PRINT"We need values of the relaxation times  T1 and T2.  1-10 sec is reasonable."
6135 INPUT"T1 (sec) = ",T1
6140 INPUT"t2 (sec) = ",T2
6141 PRINT:PRINT"We shall start with the pulse off.      Hold 'P' down to keep the pulse on;     release 'P' to turn the pulse off.      This cycle can be repeated."
6142 PRINT:PRINT"Touch 'Q' to terminate the run."
6143 PRINT"Touch <return> to go on, please."
6144 W$=INKEY$:IF W$="" THEN 6144
6145 T1=T1*300:T2=T2*300
6150 I=-1:CLS
6155 LINE (0,170)-(319,170),3
6160 I=I+1:BB1=0
6161 W$=INKEY$:IF W$="P" OR W$="p" THEN BB1=B1
6165 CS=COS(WR*I):SN=SIN(WR*I)
6170 MX1=YY*(B0*MY+BB1*SN*MZ)-MX/T2
6175 MY1=-YY*(B0*MX-BB1*CS*MZ)-MY/T2
6180 MZ1=YY*BB1*(-SN*MX-CS*MY)-(MZ-95)/T1
6185 NX=MX+MX1:NY=MY+MY1:NZ=MZ+MZ1
6190 CS=COS(WR*(I+1)):SN=SIN(WR*(I+1))
6195 MX2=YY*(B0*NY+BB1*SN*NZ)-NX/T2
6200 MY2=YY*(-B0*NX+BB1*CS*NZ)-NY/T2
6205 MZ2=YY*BB1*(-SN*NX-CS*NY)-(NZ-95)/T1
6210 MX=MX+0.5*(MX1+MX2)
6215 MY=MY+0.5*(MY1+MY2)
6220 MZ=MZ+0.5*(MZ1+MZ2)
6225 X=159+MX*1.33
6230 Y=100-MZ-0.1*MY
6235 LINE (159,100)-(X1,Y1),0
6240 PSET (X1,Y1),3
6245 PSET (I/20,170-MX/3)
6250 LINE (159,100)-(X,Y),3
6255 X1=X:Y1=Y
6260 W$=INKEY$
6262 IF W$<>"Q" AND W$<>"q" THEN 6160
6265 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
6270 W$=INKEY$:IF W$="" THEN 6270
6275 CLS
6280 IF W$="Y" OR W$="y" THEN 6000
6285 GOTO 80
7000 REM exit from program
7005 SCREEN 0,1:CLS:RUN"menu.bas"
```

## LEGENDRE.BAS

```bas
1 CLEAR:CLS:WIDTH 40
2 LOCATE 5,5
3 PRINT"LEGENDRE POLYNOMIALS":PRINT:PRINT
4 PRINT"You must provide values of L and x for"
5 PRINT"calculating PL(x).  The computer does"
6 PRINT"the calculation by recursion.":PRINT
20 INPUT"L = ",L
30 INPUT"x = ",X
40 IF L=0 THEN P=1:GOTO 130
45 IF L=1 THEN P=X:GOTO 130
50 P=1
60 Q=X
70 FOR K=2 TO L
80 R=((2*K-1)*X*Q-(K-1)*P)/K
90 P=Q
100 Q=R
110 NEXT K
120 P=R
130 PRINT"PL(x) = ";P
140 PRINT"Another value of x, same value of L?"
141 INPUT"  (Y/N)",W$
142 IF W$="N" THEN GOTO 145
143 GOTO 30
145 PRINT:PRINT"New value of L?  (Y/N)"
147 INPUT"",W$
148 IF W$="N" THEN GOTO 155
149 GOTO 20
155 WIDTH 80:CLS:CLEAR:END
```

## LINEQNS.BAS

```bas
1 CLS:LOCATE 5,20
10 PRINT"SIMULTANEOUS LINEAR EQUATIONS":PRINT
11 PRINT
40 INPUT"Number of equations = ";R
49 REM limit a(*,*) to a(r,r+1)
50 DIM A(R,R+1)
52 PRINT
55 PRINT"Coefficient matrix: "
70 FOR J=1 TO R
80 PRINT:PRINT"Equation # ";J
90 FOR I=1 TO R+1
100 IF I=R+1 THEN GOTO 130
110 PRINT"     coefficient ";I;" = ";
120 GOTO 140
130 PRINT"       constant = ";
140 INPUT"";A(J,I)
150 NEXT I
160 NEXT J
170 FOR J=1 TO R
180 FOR I=J TO R
190 IF A(I,J)<>0 THEN GOTO 230
200 NEXT I
210 PRINT"No unique solution"
220 END
230 FOR K=1 TO R+1
240 X=A(J,K)
250 A(J,K)=A(I,K)
260 A(I,K)=X
270 NEXT K
280 Y=1/A(J,J)
290 FOR K=1 TO R+1
300 A(J,K)=Y*A(J,K)
310 NEXT K
320 FOR I=1 TO R
330 IF I=J THEN GOTO 380
340 Y=-A(I,J)
350 FOR K=1 TO R+1
360 A(I,K)=A(I,K)+Y*A(J,K)
370 NEXT K
380 NEXT I
390 NEXT J
400 PRINT
410 FOR I=1 TO R
420 PRINT "          x(";I;") = ";INT (A(I,R+1)*1000+0.5)/1000
430 NEXT I
440 PRINT:PRINT"Touch <return> to clear screen and end.":INPUT"";W$
445 CLS:END
```

## LINLSQR.BAS

```bas
1 REM linear least squares
20 INPUT"No. of data pairs = ";N
30 XB=0:YB=0
40 XY=0:X2=0:Y2=0
60 FOR I=1 TO N
70 PRINT"i = ";I
80 INPUT"   x(i) = ";XI
90 INPUT"   y(i) = ";YI
95 XB=XB+XI
100 YB=YB+YI
110 XY=XY+XI*YI
120 X2=X2+XI*XI
125 Y2=Y2+YI*YI
130 NEXT I
140 D=N*X2-XB*XB
150 A=(YB*X2-XY*XB)/D
160 B=(N*XY-XB*YB)/D
170 R2=A*YB+B*XY-(YB*YB/N)
180 R2=R2/(Y2-(YB*YB/N))
182 PRINT:PRINT
185 PRINT"    y = a + b*x":PRINT
190 PRINT"          a = ";A
195 PRINT"          b = ";B
200 PRINT"          coeff. of determination = ";R2
210 INPUT"Enter 0 for another run. ";K
220 IF K=0 THEN GOTO 10
230 CLS:END
```

## LINREGR.BAS

```bas
1 CLS:LOCATE 5,20
2 PRINT"LINEAR REGRESSION OF Y ON X(1), ... X(M)"
12 PRINT
14 PRINT"Variances and covariances"
16 OPTION BASE 1
20 DIM XX(8,8),YX(8),A(8),X(8),B(8,8),W(8),XB(8)
30 INPUT"No. of independent variables = ";MS
40 INPUT"No. of data sets = ";NS
50 FOR I=1 TO NS
60 PRINT "i = ";I
61 INPUT"     y = ";Y
62 YB=YB+Y
63 Y2B=Y2B+Y*Y
70 PRINT "Xm(";I;"):"
80 FOR M=1 TO MS
90 PRINT"     X";M;"(";I;") = ";
100 INPUT "";X(M)
101 XB(M)=XB(M)+X(M)
110 NEXT M
130 FOR K=1 TO MS
140 YX(K)=YX(K)+Y*X(K)
150 FOR L=1 TO MS
160 XX(K,L)=XX(K,L)+X(K)*X(L)
170 NEXT L
171 NEXT K
172 NEXT I
173 FOR L=1 TO MS
174 XB(L)=XB(L)/NS
175 NEXT L
176 YB=YB/NS
177 FOR L=1 TO MS
178 YX(L)=YX(L)-NS*XB(L)*YB
179 FOR K=1 TO MS
180 XX(L,K)=XX(L,K)-NS*XB(L)*XB(K)
181 NEXT K
182 NEXT L
190 GOSUB 5000
200 PRINT"  k           a(k)"
210 FOR K=1 TO MS
220 PRINT K, A(K)
230 NEXT K
231 BB=YB
232 FOR K=1 TO MS
233 BB=BB-A(K)*XB(K)
234 NEXT K
235 PRINT"b = ";BB
239 PRINT:PRINT"Enter <return> to go on, please.":INPUT"";W$
240 SI=Y2B-NS*YB*YB
250 FOR K=1 TO MS
260 SI=SI-A(K)*YX(K)
270 NEXT K
271 KK=0
280 FOR K=1 TO MS
290 FOR L=K TO MS
291 KK=KK+1
300 PRINT:PRINT"     Covariance(";K;",";L;") = ";
310 U=SI*B(K,L)
320 PRINT U
321 IF KK=10 THEN PRINT"Touch <return> to go on.":INPUT"";W$:KK=0
330 NEXT L
340 NEXT K
345 PRINT"Touch <return>, please.":INPUT"";W$
350 GOTO 9999
5000 REM gauss elimination
5080 FOR I=1 TO MS
5090 FOR J=1 TO MS
5100 B(I,J)=XX(I,J)
5110 NEXT J
5120 W(I)=YX(I)
5130 NEXT I
5140 E1=0
5150 FOR I=1 TO MS-1
5160 B1=ABS(B(I,I))
5170 L=I
5180 I1=I+1
5190 FOR J=I1 TO MS
5200 IF(ABS(B(J,I))<B1)THEN GOTO 5230
5210 B1=ABS(B(J,I))
5220 L=J
5230 NEXT J
5240 IF B1=0 THEN GOTO 5530
5250 IF L=I THEN GOTO 5340
5260 FOR J=1 TO MS
5270 H1=B(L,J)
5280 B(L,J)=B(I,J)
5290 B(I,J)=H1
5300 NEXT J
5310 H1=W(L)
5320 W(L)=W(I)
5330 W(I)=H1
5340 FOR J=I1 TO MS
5350 T=B(J,I)/B(I,I)
5360 FOR K=I1 TO MS
5370 B(J,K)=B(J,K)-T*B(I,K)
5380 NEXT K
5390 W(J)=W(J)-T*W(I)
5400 NEXT J
5410 NEXT I
5420 IF(B(MS,MS)=0)THEN 5530
5430 A(MS)=W(MS)/B(MS,MS)
5450 FOR I=MS-1 TO 1 STEP -1
5460 S6=0
5470 FOR J=I+1 TO MS
5480 S6=S6+B(I,J)*A(J)
5490 NEXT J
5500 A(I)=(W(I)-S6)/B(I,I)
5510 NEXT I
5520 RETURN
5530 E1=1
5540 PRINT"Error - matrix singular":PRINT
5550 RETURN
9999 CLS:END
```

## LOGCURVE.BAS

```bas
1 CLS:LOCATE 5,10
10 PRINT"LOGARITHMIC CURVE FIT":PRINT
12 PRINT"   y = a + b*log(x)":PRINT
20 INPUT"No. of data pairs = ";N
25 LOCATE 1,1
30 XB=0:YB=0:XY=0:Y2=0:X2=0
60 FOR I=1 TO N
70 PRINT"     x(";I;") = ";
75 INPUT"";XI
77 PRINT"        y(";I;") = ";
78 INPUT"";YI
86 XI=LOG(XI)
90 XB=SB+XI
100 YB=BY+YI
110 XY=XY+XI*YI
120 X2=X2+XI*XI
125 Y2=Y2+YI*YI
130 NEXT I
140 D=N*X2-XB*XB
150 A=(YB*X2-XY*XB)/D
160 B=(N*XY-XB*YB)/D
170 R2=A*YB+B*XY-(YB*YB/N)
180 R2=R2/(Y2-(YB*YB/N))
185 CLS:LOCATE 5,20
186 PRINT"y = a + b*log(x)":PRINT
190 PRINT"     a = ";A
195 PRINT"     b = ";B
200 PRINT"     coefficient of determination = ";R2
210 PRINT:INPUT"Enter 0 for another run. ";K
220 IF K=0 THEN GOTO 10
230 CLS:END
```

## LSQPARAB.BAS

```bas
10 REM least squares parabola
15 CLS
16 OPTION BASE 1
17 DIM A(3,3),B(3)
18 LOCATE 5,20
19 PRINT "LEAST SQUARES PARABOLA"
20 LOCATE 7,1
22 INPUT"No. of data pairs = ";N
23 X1=0:X2=0:X3=0:X4=0:Y1=0:XY=0:UXY=0:Y2=0
30 FOR I=1 TO N
40 PRINT"     x(";I;") = ";
41 INPUT"";XI
60 PRINT"       y(";I;") = ";
61 INPUT"";YI
70 X1=X1+XI
80 X2=X2+XI*XI
90 X3=X3+XI^3
100 X4=X4+XI^4
110 Y1=Y1+YI
120 XY=XY+XI*YI
130 UXY=UXY+XI*XI*YI
140 Y2=Y2+YI*YI
150 NEXT I
160 A(1,1)=N
170 A(1,2)=X1
180 A(1,3)=X2
190 A(2,1)=X1
200 A(2,2)=X2
210 A(2,3)=X3
220 A(3,1)=X2
230 A(3,2)=X3
240 A(3,3)=X4
250 D=A(1,1)*A(2,2)*A(3,3)+A(1,2)*A(2,3)*A(3,1)
260 D=D+A(1,3)*A(2,1)*A(3,2)-A(1,1)*A(3,2)*A(2,3)
270 D=D-A(2,1)*A(1,2)*A(3,3)-A(3,1)*A(2,2)*A(1,3)
280 IF D=0 THEN PRINT"Determinant = 0":GOTO 9999
290 B(1)=Y1
300 B(2)=XY
310 B(3)=UXY
320 AA=B(1)*(A(2,2)*A(3,3)-A(3,2)*A(2,3))
330 AA=AA-B(2)*(A(1,2)*A(3,3)-A(3,2)*A(1,3))
340 AA=(AA+B(3)*(A(1,2)*A(2,3)-A(2,2)*A(1,3)))/D
350 BB=-B(1)*(A(2,1)*A(3,3)-A(3,1)*A(2,3))
360 BB=BB+B(2)*(A(1,1)*A(3,3)-A(3,1)*A(1,3))
370 BB=(BB-B(3)*(A(1,1)*A(2,3)-A(2,1)*A(1,3)))/D
380 CC=B(1)*(A(2,1)*A(3,2)-A(3,1)*A(2,2))
390 CC=CC-B(2)*(A(1,1)*A(3,2)-A(3,1)*A(1,2))
400 CC=(CC+B(3)*(A(1,1)*A(2,2) - A(1,2)*A(2,1)))/D
410 R2=AA*Y1+BB*XY+CC*UXY-(Y1*Y1/N)
420 R2=R2/(Y2-(Y1*Y1/N))
430 CLS:LOCATE 5,10
433 PRINT"y = a + b*x + c*x^2":PRINT
440 PRINT"     a = ";AA
450 PRINT"     b = ";BB
460 PRINT"     c = ";CC:PRINT
470 PRINT"     Coefficient of determination = ";R2
475 PRINT
480 INPUT"Enter 0 for another run.";M
490 IF M=0 THEN CLS:GOTO 22
500 PRINT"          End of set":PRINT
505 GOTO 9999
9999 CLS:END
```

## LSQREXP.BAS

```bas
1 CLEAR:CLS:WIDTH 40
2 LOCATE 5,3
3 PRINT"NONLINEAR LEAST SQUARES EXPONENTIAL"
4 PRINT:PRINT
50 DIM X(100),Y(100)
65 PRINT"This program gives a nonlinear least"
66 PRINT"squares fit to the curve":PRINT
67 PRINT"    Y = Yo*exp(-k*x)":PRINT
70 PRINT"How many pairs of data points? (< 100)"
75 INPUT"  n = ",N
80 FOR I=1 TO N
85 PRINT"x(";I;") = ";:INPUT"",X(I)
90 PRINT"  y(";I;") = ";:INPUT"",Y(I)
100 NEXT I
110 INPUT"Low guess for k = ";K
115 INPUT"  dk = ";DK
116 J=1
120 EX=0:EY=0:E2=0:XY=0
125 FOR I=1 TO N
130 V=X(I)
131 U=EXP(-K*V)
135 EX=EX+V*U*U
140 EY=EY+Y(I)*U
145 E2=E2+U*U
150 XY=XY+V*Y(I)*U
155 NEXT I
160 G1=EY*EX-XY*E2
170 K=K+DK
180 EX=0:EY=0:E2=0:XY=0
185 FOR I=1 TO N
190 V=X(I)
195 U=EXP(-K*V)
200 EX=EX+V*U*U
210 EY=EY+Y(I)*U
215 E2=E2+U*U
220 XY=XY+V*Y(I)*U
225 NEXT I
230 G2=EY*EX-XY*E2
235 IF(G1*G2>0)THEN G1=G2:GOTO 170
240 K=K-DK
245 DK=DK/4
250 PRINT K
255 J=J+1
260 IF J<10 THEN GOTO 120
265 PRINT "k = ";K
270 YO=EY/E2
275 PRINT "  Yo = ";YO
280 PRINT:PRINT"Another run? (Y/N)"
285 INPUT"",W$
290 IF W$="N" THEN GOTO 300
295 CLS:GOTO 70
300 CLS:WIDTH 80:CLEAR:END
```

## MATERBAL.BAS

```bas
10 REM material balance equations
15 OPTION BASE 1
20 DIM B(12),AA(12,12),A(10,10),Y(10),W(12),X(10),AI(10,10),ST(10,10)
30 INPUT"No. of analyses = ";N
40 INPUT"No. of components = ";M
50 FOR I=1 TO N
60 FOR J=1 TO M
70 PRINT"     A(";I;,;J;") = ";
80 INPUT"";AA(I,J)
90 NEXT J
100 NEXT I
110 FOR I=1 TO N
120 PRINT"    stat. wt. of ";I;"th analysis = ";
130 INPUT"";W(I)
140 NEXT I
150 FOR K=1 TO M
160 FOR J=1 TO M
170 A(J,K)=0.
180 FOR I=1 TO N
190 A(J,K)=A(J,K)+W(I)*AA(I,J)*AA(I,K)
200 NEXT I
210 NEXT J
220 NEXT K
230 GOSUB 7000
240 PRINT:PRINT"Matrix inverted":PRINT
250 REM initialization complete
255 PRINT"Next, we enter the analytical results.":PRINT
260 FOR I=1 TO N
270 PRINT"     b(";I;") = ";
280 INPUT"";B(I)
290 NEXT I
300 FOR K=1 TO M
310 Y(K)=0
320 FOR I=1 TO N
330 Y(K)=Y(K)+W(I)*B(I)*AA(I,K)
340 NEXT I
350 NEXT K
355 D=0.
360 LA=100.
370 FOR L=1 TO M
380 T=0.
390 FOR J=1 TO M
395 D=D+AI(J,L)
400 T=T+AI(J,L)
410 NEXT J
420 T=T*Y(L)
430 LA=LA-T
440 NEXT L
450 LA=LA/D
460 FOR J=1 TO M
470 X(J)=0.
480 FOR L=1 TO M
490 X(J)=X(J)+AI(J,L)*(Y(L)+LA)
500 NEXT L
510 PRINT"          x(";J;") = ";X(J)
520 NEXT J
525 PRINT
530 PRINT"     lambda = ";LA
535 PRINT
540 INPUT"Enter 2 for another data set. ";P
550 IF P=2 THEN GOTO 260
560 REM
570 GOTO 9999
7000 REM matrix inversion
7010 R=N
7011 N=M
7030 FOR I=1 TO N
7040 FOR J=1 TO N
7065 ST(I,J)=A(I,J)
7070 NEXT J
7080 NEXT I
7090 FOR I=1 TO N
7100 AI(I,I)=1.
7110 NEXT I
7120 FOR I=1 TO N
7125 D=ST(I,I)
7140 FOR J=1 TO N
7150 ST(I,J)=ST(I,J)/D
7160 AI(I,J)=AI(I,J)/D
7170 NEXT J
7180 FOR K=1 TO N
7190 IF (K-I=0)THEN GOTO 7240
7200 BT=ST(K,I)
7210 FOR J=1 TO N
7220 ST(K,J)=ST(K,J)-BT*ST(I,J)
7230 AI(K,J)=AI(K,J)-BT*AI(I,J)
7235 NEXT J
7240 NEXT K
7250 NEXT I
7310 N=R
7320 RETURN
9999 CLS:END
```

## MATRDIAG.BAS

```bas
10 REM matrix diagonalization by partial pivot method
20 REM up to 10 x 10 symmetric matrix
25 OPTION BASE 1
30 DIM A(10,10),S(10,10),AI(10),AJ(10),SI(10),SJ(10)
35 S2=1/SQR(2)
36 PRINT"  This program will diagonalize symmetric matrices up to 10 x 10."
37 PRINT"It then lists the matrix elements of the diagonalized matrix and the":PRINT"transformation matrix."
40    INPUT"Matrix is n x n. n = ? ";N
41 INPUT"Allowed rel error = ? ";ER
45 MAX=0
50 FOR I=1 TO N
60 FOR J=1 TO N
70 PRINT"A(";I;",";J;") = ";
80 INPUT A(I,J)
85 T=ABS(A(I,J))
90 A(J,I)=A(I,J)
95 IF MAX<T THEN MAX=T
100 NEXT J
110 S(I,I)=1
120 NEXT I
130 II=1
140 JJ=1
150 B=0
155 NM=N-1
160 FOR I=1 TO NM
165 I1=I+1
170 FOR J=I1 TO N
175 T=ABS(A(I,J))
180 IF T>B THEN B=T:II=I:JJ=J
190 NEXT J
200 NEXT I
210 IF B/MAX<ER THEN GOTO 500
220 IF(A(JJ,JJ)=A(II,II))THEN S=S2:C=S2:GOTO 270
230 T=-2*A(II,JJ)/(A(II,II)-A(JJ,JJ))
240 T=0.5*ATN(T)
250 S=SIN(T)
260 C=COS(T)
270 FOR I=1 TO N
280 AI(I)=A(I,II)*C-A(I,JJ)*S
290 AJ(I)=A(I,II)*S+A(I,JJ)*C
300 SI(I)=S(I,II)*C-S(I,JJ)*S
310 SJ(I)=S(I,II)*S+S(I,JJ)*C
320 NEXT I
330 FOR I=1 TO N
340 S(I,II)=SI(I)
350 S(I,JJ)=SJ(I)
360 A(I,II)=AI(I)
370 A(I,JJ)=AJ(I)
380 NEXT I
390 FOR I=1 TO N
400 AI(I)=C*A(II,I)-S*A(JJ,I)
410 AJ(I)=S*A(II,I)+C*A(JJ,I)
420 NEXT I
430 FOR I=1 TO N
440 A(II,I)=AI(I)
450 A(JJ,I)=AJ(I)
460 NEXT I
470 GOTO 130
500 PRINT"New A(i,j)'s"
510 FOR I=1 TO N
530 FOR J=1 TO N
540 PRINT"A(";J;",";I;") = ";A(J,I)
550 PRINT"   S(";J;",";I;") = ";S(J,I)
560 NEXT J
570 INPUT"Touch <return> to go on.";W$
580 NEXT I
600 END
```

## MATRINV.BAS

```bas
7000 REM matrix inversion
7010 DIM A(12,12),AI(12,12),ST(12,12)
7020 INPUT"Size of matrix (< 13x13) = ";N
7025 PRINT"Read in the A(i,j)'s"
7030 FOR I=1 TO N
7040 FOR J=1 TO N
7050 PRINT"i = ";I;"  j = ";J
7060 INPUT A(I,J)
7065 ST(I,J)=A(I,J)
7070 NEXT J
7080 NEXT I
7090 FOR I=1 TO N
7100 AI(I,I)=1.
7110 NEXT I
7120 FOR I=1 TO N
7125 D=ST(I,I)
7140 FOR J=1 TO N
7150 ST(I,J)=ST(I,J)/D
7160 AI(I,J) = AI(I,J)/D
7170 NEXT J
7180 FOR K=1 TO N
7190 IF K-I=0 THEN GOTO 7240
7200 BT=ST(K,I)
7210 FOR J=1 TO N
7220 ST(K,J)=ST(K,J)-BT*ST(I,J)
7230 AI(K,J)=AI(K,J)-BT*AI(I,J)
7235 NEXT J
7240 NEXT K
7250 NEXT I
7260 FOR I=1 TO N
7270 FOR J=1 TO N
7280 PRINT"AI(";I;",";J;") = ";AI(I,J)
7290 NEXT J
7300 PRINT"Touch <return> to go on.":INPUT W$
7310 NEXT I
7320 END
```

## MENU.BAS

```bas
10 REM menu program
20 CLEAR:WIDTH 40:KEY OFF:SCREEN 0,1:COLOR 3,0:CLS
21 LOCATE 5,5:PRINT"NMR - SIMULATIONS AND PROBLEMS FOR"
22 LOCATE 7, 9:PRINT"THE SERIOUS ENTHUSIAST"
23 LOCATE 12,10:PRINT"David J Wilson"
24 LOCATE 13,10:PRINT"Department of Chemistry"
25 LOCATE 14,10:PRINT"Vanderbilt University"
26 LOCATE 20,1:PRINT"Touch <return> to go on, please."
27 W$=INKEY$:IF W$="" THEN 27
28 CLS
30 LOCATE 1,11:PRINT"MENU - MOSTLY NMR"
40 PRINT:PRINT"1. Diagram of NMR apparatus."
41 PRINT"2. Larmor precession + other effects."
42 PRINT"3. NMR in a rotating coordinate system."
43 PRINT"4. NMR relaxation."
44 PRINT"5. Precession on and off resonance."
45 PRINT"6. Adiabatic slow passage experiment."
46 PRINT"7. NMR line phasing simulation."
47 PRINT"8. ABC proton spectrum."
48 PRINT"9. ABCD proton spectrum."
49 PRINT"10. Free induction decay in spectra         with several signals - FT NMR."
50 PRINT"11. NMR lineshapes in exchange."
51 PRINT"12. Spin echo simulation."
52 PRINT"13. Spin echo problem."
53 PRINT"14. Multiple pulses in NMR."
54 PRINT"15. Water peak suppression by WEFT."
55 PRINT"16. Homonuclear gated decoupling."
56 PRINT"17. T1 by inversion recovery."
57 PRINT"18. OTHER PROGRAMS and QUIT."
58 PRINT"Enter a number, please.  ";
70 INPUT"",NM
71 IF NM <1 OR NM > 18 THEN GOTO 30
74 CLS
75 ON NM GOTO 101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,130
101 RUN "nmrpict.bas"
102 RUN "larmor.bas"
103 RUN "nmrrot.bas"
104 RUN "nmrrelax.bas"
105 RUN "offres.bas"
106 RUN "adiabat.bas"
107 RUN "nmrphase.bas"
108 RUN "nmr-abc.bas"
109 RUN "nmr-abcd.bas"
110 RUN "nmrfourt.bas"
111 RUN "nmrexch.bas"
112 RUN "spinecho.bas"
113 RUN "specprob.bas"
114 RUN "multpuls.bas"
115 RUN "nmr-weft.bas"
116 RUN "gatdecup.bas"
117 RUN "invrecov.bas"
130 LOCATE 1,12:PRINT"MENU - MISCELLANEOUS"
131 PRINT:PRINT"1. Rutherford scattering apparatus and     trajectories."
132 PRINT"2. X-ray diffraction simulation."
133 PRINT"3. Morse curves for diatomic molecules."
134 PRINT"4. L2 films in surface chemistry."
135 PRINT"5. Return to BASIC."
136 PRINT"6. Return to MS-DOS."
150 PRINT"Enter a number, please.  ";
160 INPUT"",NM
170 ON NM GOTO 181,182,183,184,185,186
181 RUN"ruthexpt.bas"
182 RUN"xraydif1.bas"
183 RUN"morsecrv.bas"
184 RUN"l2films.bas"
185 CLS:END
186 CLS:SYSTEM:END
```

## MOMSKKUR.BAS

```bas
10 REM moments, skewness, kurtosis
12 REM Hewlett-Packard HP-41-C manual
20 INPUT"No. of data points ";N
25 X1=0:X2=0:X3=0:X4=0
30 FOR I=1 TO N
40 PRINT"x(";I;") = ";
50 INPUT"";XI
60 X1=X1+XI
70 X2=X2+XI*XI
80 X3=X3+XI^3
90 X4=X4+XI^4
100 NEXT I
110 M1=X1/N
120 PRINT"M1 = x(bar) = ";M1
130 M2=(X2/N)-M1*M1
140 PRINT"M2 = ";M2
150 M3=(X3/N)-(3*M1*X2/N)+2*M1^3
160 PRINT"M3 = ";M3
170 M4=X4/N-(4*M1*X3/N)
180 M4=M4+6*M1*M1*X2/N-3*M1^4
190 PRINT"M4 = ";M4
200 G1=M3/(M2^1.5)
210 PRINT"skewness = ";G1
220 G2=M4/(M2*M2)
230 PRINT"kurtosis = ";G2
240 INPUT"Enter 0 for another run. ";K
250 IF K=0 THEN GOTO 10
260 CLS:END
```

## MORSECRV.BAS

```bas
1 CLEAR:WIDTH 40:SCREEN 1,0:CLS:KEY OFF
5 COLOR 0,2
10 LOCATE 5,5
20 PRINT"MORSE OSCILLATOR CURVES":PRINT:PRINT
30 PRINT"The Morse oscillator curve is given by"
40 PRINT"the function":PRINT
50 PRINT"V(r) ="
60 PRINT"  D*exp[-a(r-re)]*{-2 + exp[-a(r-re)]}":PRINT
70 PRINT"Enter D (kJ/mole), re (Angstroms), and"
80 PRINT"a (Angstrom-1) and the computer will"
90 PRINT"plot the Morse curve."
100 INPUT"D (kJ/mole) = ",D
110 INPUT"re (Angstroms) = ",RE
120 INPUT"a (Angstroms-1) = ",A
130 R=0
140 DR=RE/100
145 CLS
146 LINE (0,100)-(319,100)
147 LINE (0,0)-(0,199)
150 FOR I=1 TO 300
160 R=R+DR
170 X=R*100/RE
180 U=EXP(-A*(R-RE))
190 V=D*U*(U-2)
200 Y=100-90*V/D
202 IF Y<0 OR Y>199 GOTO 215
210 LINE (X1,Y1)-(X,Y)
215 X1=X:Y1=Y
220 NEXT I
230 LOCATE 5,2:PRINT"V(r)"
240 LOCATE 14,15:PRINT"r"
250 LOCATE 24,1
255 W$=INKEY$:IF W$="" THEN 255
260 END
```

## MULTPULS.BAS

```bas
10 CLEAR:CLS:WIDTH 40:SCREEN 1,0:COLOR 0,1:KEY OFF
11 PI=3.14159:P2=2*PI
20 LOCATE 5,12:PRINT"NMR SPECTROSCOPY"
30 LOCATE 7,12:PRINT"LARMOR PRECESSION"
40 LOCATE 10,10:PRINT"David J Wilson"
50 LOCATE 11,10:PRINT"Department of Chemistry"
60 LOCATE 12,10:PRINT"Vanderbilt University"
70 FOR I=1 TO 2000:NEXT I
80 CLS:LOCATE 1,18:PRINT"MENU"
90 LOCATE 3,1:PRINT"1. Table of nuclear properties."
100 LOCATE 5,1:PRINT"2. Free precession in a uniform field."
110 LOCATE 7,1:PRINT"3. Free induction decay."
120 LOCATE 9,1:PRINT"4. Behavior with a periodic transverse     field."
130 LOCATE 12,1:PRINT"5. The CW NMR experiment."
140 LOCATE 14,1:PRINT"6. Multiple Pulse NMR experiments."
150 LOCATE 16,1:PRINT"7. End."
160 LOCATE 18,1:PRINT"Touch the number of what you wish to    see, please."
170 W$=INKEY$:IF W$="" THEN 170
180 NM=VAL(W$):IF NM<1 OR NM>7 THEN GOTO 160
190 CLS:ON NM GOTO 1000,2000,3000,4000,5000,6000,7000
1000 LOCATE 1,6:PRINT"Table of nuclear properties"
1010 LOCATE 3,1:PRINT"Nucleus Y      I    mu/mun   vo/Bz":PRINT
1020 PRINT           "     (T-1 s-1)               Mhz/T"
1030            PRINT"  1H  2.675E8  1/2 2.79277   42.577"
1040            PRINT"  2H  0.411    1   0.85735    6.536"
1050            PRINT" 13C  0.673    1/2 0.70216   10.705"
1060            PRINT" 19F  2.517    1/2 2.6273    40.055"
1070            PRINT" 31P  1.083    1/2 1.1316    17.235"
1080 PRINT
1090 PRINT"mun = 5.0505E-27 J/T"
1095 PRINT
1100 PRINT"You can use one of these nuclei or any  other one in the demonstrations.  When  you are ready to return to the menu,    touch <return>."
1110 W$=INKEY$:IF W$="" THEN 1110
1120 GOTO 80
2000 REM free precession in a uniform field
2001 LOCATE 1,5:PRINT"Larmor precession in a constant"
2002 LOCATE 2,5:PRINT"uniform field.  The spins here are"
2003 LOCATE 3,5:PRINT"assumed isolated; there is neither"
2004 LOCATE 4,5:PRINT"transverse nor longitudenal relax-"
2005 LOCATE 5,5:PRINT"tion.  Touch <return> to go on."
2006 W$=INKEY$:IF W$="" THEN 2006
2010 CLS:LOCATE 5,1:PRINT"What is the magnetogyric ratio of the   nucleus you want to work with?"
2020 INPUT"Y [1/(Tesla sec)] = ",Y
2030 PRINT:PRINT"What is the strength (Tesla) of the     constant magnetic field in this sim-    ulation?"
2040 INPUT"Bz (Teslas) = ";B0
2050 PRINT:PRINT"The frequency of the precession is"
2060 PRINT Y*B0/(P2*1);" Mhz."
2070 W=Y*B0/1
2080 PRINT"Touch <return> for a simulation of the  behavior of the magnetization of the    nuclei."
2090 W$=INKEY$:IF W$="" THEN 2090
2100 CLS
2110 XB=159:YB=199:XT=159:YT=10:A=100:B=10
2120 WP=W/2000
2130 I=-1:X1=209:Y1=25
2131 LINE (159,10)-(155,14),3:LINE (159,10)-(163,14),3
2132 LOCATE 1,20:PRINT "Bo"
2140 I=I+1
2150 X=XB+A*COS(WP*I)
2160 Y=25+B*SIN(WP*I)
2170 LINE (XB,YB)-(X1,Y1),0
2180 LINE (XB,YB)-(XB,10),3
2190 LINE (XB,YB)-(X,Y),3
2200 X1=X:Y1=Y
2210 W$=INKEY$:IF W$="" THEN GOTO 2140
2220 CLS:LOCATE 5,1:PRINT"Another run?  (Y/N)"
2230 W$=INKEY$:IF W$="" THEN 2230
2240 IF W$="Y" OR W$="y" THEN CLS:GOTO 2000
2250 CLS:GOTO 80
3000 REM Free induction decay with T1 and T2.
3010 CLS
3020 PRINT"What is the magnetogyric ratio of your  nucleus?  ";
3030 INPUT"[1/(T*sec)] ",Y
3040 PRINT"What is the magnetic field strength?    (Teslas) ";
3050 INPUT"",B0
3055 W=Y*B0/(P2*1)
3057 WP=W/2000
3060 PRINT"What is T1 (sec)? (default = 3) ";
3065 INPUT"",T1
3066 IF T1=<0 THEN T1=3
3070 PRINT"What is T2 (sec)? (default = 3) ";
3075 INPUT"",T2
3076 IF T2<=0 THEN T2=3
3080 PRINT"What is Mz(init)/Mz(equil)?  (-1 <= Mz  <=1) ";
3085 INPUT"",ML
3090 IF ML<-1 OR ML>1 THEN GOTO 3080
3095 PRINT"What is Mtrans(init)/Mz(equil)?  (0 <=  Mtr <= 1)";
3100 INPUT"",MTR
3105 MZZ=95*(1-ML)
3110 MTRR=95*MTR
3114 LINE (0,170)-(319,170),3
3115 TT1=T1*600:TT2=T2*600
3116 XB=159:YB=100
3117 CLS
3118 TP1=EXP(-1/TT1):TP2=EXP(-1/TT2)
3119 ET1=1:ET2=1
3120 I=-2
3130 I=I+2
3135 ET1=ET1*TP1:ET2=ET2*TP2
3140 MGTR=MTRR*ET2
3150 MGLO=95-MZZ*ET1
3155 MGLO=YB-MGLO
3157 XX=MGTR*COS(WP*I)
3160 X=XB+XX
3161 PSET (I/20,170-XX/3),3
3165 Y=MGLO+0.1*MGTR*SIN(WP*I)
3167 LINE (XB,YB)-(X1,Y1),0
3170 LINE (XB,YB)-(X,Y),3
3175 X1=X:Y1=Y
3180 W$=INKEY$:IF W$="" THEN GOTO 3130
3185 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
3190 W$=INKEY$:IF W$="" THEN 3190
3195 IF W$="Y" OR W$="y" THEN GOTO 3000
3200 GOTO 80
4000 REM Effect of a transverse field B1 on a non-relaxing spin system
4005 CLS
4010 PRINT"Here we shall simulate the behavior of"
4011 PRINT"a non-relaxing spin system in a con-"
4012 PRINT"stant field Bz in the z-direction and"
4013 PRINT"a transverse field B1 rotating in the"
4014 PRINT"x-y plane.":PRINT
4015 PRINT"What is the magnetogyric ratio of your  nuclei?  [1/(Tesla sec)]";
4016 INPUT"  ",Y
4020 PRINT"What is the strength of Bz?  (Tesla)"
4021 INPUT"",B0
4022 W=Y*B0:REM frequency
4023 W=W/(P2*1):WP=W/2000
4024 PRINT:PRINT"  The Larmor frequency of the free pre-":PRINT"cession is ";W;" Mhz."
4030 PRINT"Let us examine the case where B1 << Bz."
4035 PRINT"We therefore require that B1/Bz be <=   .05"
4040 INPUT"B1/Bz = ";BB
4041 IF BB>0.1 THEN GOTO 4035
4042 B1=B0*BB
4045 YY=Y/(2.000000e+9*P2)
4050 MZ=95:MX=0:MY=0
4055 CLS
4060 PRINT"We next need the frequency of the":PRINT"transverse rotating field B1."
4065 PRINT"Give this to me as"
4070 PRINT"    w(rotating field)/w(Larmor)":
4075 PRINT"(Make this between .5 and 1.5, please.)"
4080 INPUT"",WW
4081 IF WW<0.5 OR WW>1.5 THEN GOTO 4075
4085 WR=WP*WW
4086 I=-1:CLS
4087 I=I+1
4088 CS=COS(WR*I):SN=SIN(WR*I)
4090 MX1=YY*(B0*MY+B1*SN*MZ)
4091 MY1=-YY*(B0*MX-B1*CS*MZ)
4092 MZ1=YY*B1*(-SN*MX-CS*MY)
4093 NX=MX+MX1:NY=MY+MY1:NZ=MZ+MZ1
4094 CS=COS(WR*(I+1)):SN=SIN(WR*(I+1))
4095 MX2=YY*(B0*NY+B1*SN*NZ)
4096 MY2=YY*(-B0*NX+B1*CS*NZ)
4097 MZ2=YY*B1*(-SN*NX-CS*NY)
4098 MX=MX+0.5*(MX1+MX2)
4099 MY=MY+0.5*(MY1+MY2)
4100 MZ=MZ+0.5*(MZ1+MZ2)
4110 X=159+MX*1.33
4115 Y=100-MZ-0.1*MY
4120 LINE (159,100)-(X1,Y1),0
4121 PSET (X1,Y1),3
4125 LINE (159,100)-(X,Y),3
4126 X1=X:Y1=Y
4130 W$=INKEY$:IF W$="" THEN 4087
4135 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
4140 W$=INKEY$:IF W$="" THEN 4140
4142 CLS
4145 IF W$="Y" OR W$="y" THEN 4000
4150 GOTO 80
5000 REM Operation of a CW NMR spectrometer (with T1 and T2 operative)
5001 CLS
5002 PRINT"Here we shall simulate the operation of a CW NMR spectrometer operating in the  slow passage mode.  Transverse and"
5003 PRINT"longitudinal relaxation methanisms are  operative.":PRINT
5005 PRINT"What is the magnetogyric ratio of your  nuclei?  [1/(Tesla sec)]";
5006 INPUT"  ",Y
5007 PRINT"What is the strength of Bz?  (Tesla)"
5008 INPUT"",B0
5009 W=Y*B0:REM frequency
5010 W=W/(P2*1):WP=W/2000
5011 PRINT:PRINT"  The Larmor frequency of the free pre-":PRINT"cession is ";W;" Mhz."
5012 PRINT"Let us examine the case where B1 << Bz."
5013 PRINT"We therefore require that B1/Bz be <=   .05"
5014 INPUT"B1/Bz = ";BB
5015 IF BB>0.1 THEN GOTO 5013
5016 B1=B0*BB
5017 YY=Y/(2.000000e+9*P2)
5018 MZ=95:MX=0:MY=0
5019 CLS
5020 PRINT"We next need the frequency of the":PRINT"transverse rotating field B1."
5021 PRINT"Give this to me as"
5022 PRINT"    w(rotating field)/w(Larmor)":
5023 PRINT"(Make this between .5 and 1.5, please.)"
5024 INPUT"",WW
5025 IF WW<0.5 OR WW>1.5 THEN GOTO 4075
5026 WR=WP*WW
5027 PRINT:PRINT"We need values of the relaxation times  T1 and T2.  1-10 sec is reasonable."
5028 INPUT"T1 (sec) = ",T1
5029 INPUT"t2 (sec) = ",T2
5030 T1=T1*300:T2=T2*300
5032 I=-1:CLS
5033 LINE (0,170)-(319,170),3
5034 I=I+1
5036 CS=COS(WR*I):SN=SIN(WR*I)
5038 MX1=YY*(B0*MY+B1*SN*MZ)-MX/T2
5040 MY1=-YY*(B0*MX-B1*CS*MZ)-MY/T2
5042 MZ1=YY*B1*(-SN*MX-CS*MY)-(MZ-95)/T1
5044 NX=MX+MX1:NY=MY+MY1:NZ=MZ+MZ1
5046 CS=COS(WR*(I+1)):SN=SIN(WR*(I+1))
5048 MX2=YY*(B0*NY+B1*SN*NZ)-NX/T2
5050 MY2=YY*(-B0*NX+B1*CS*NZ)-NY/T2
5052 MZ2=YY*B1*(-SN*NX-CS*NY)-(NZ-95)/T1
5054 MX=MX+0.5*(MX1+MX2)
5056 MY=MY+0.5*(MY1+MY2)
5058 MZ=MZ+0.5*(MZ1+MZ2)
5060 X=159+MX*1.33
5062 Y=100-MZ-0.1*MY
5064 LINE (159,100)-(X1,Y1),0
5066 PSET (X1,Y1),3
5067 PSET (I/20,170-MX/3)
5068 LINE (159,100)-(X,Y),3
5069 X1=X:Y1=Y
5070 W$=INKEY$:IF W$="" THEN 5034
5072 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
5074 W$=INKEY$:IF W$="" THEN 5074
5076 CLS
5078 IF W$="Y" OR W$="y" THEN 5000
5080 GOTO 80
6000 REM operation of an nmr spectrometer in the pulsed mode with T1 and T2 operative
6005 CLS
6010 PRINT"Here we shall simulate the operation of an NMR spectrometer operating in the    pulsed mode.  Transverse and longitud-  inal relaxation mechanisms are oper-"
6015 PRINT"ative.":PRINT
6020 PRINT"What is the magnetogyric ratio of your  nuclei?  [1/(Tesla sec)]";
6025 INPUT"  ",Y
6030 PRINT"What is the strength of Bz?  (Tesla)"
6035 INPUT"",B0
6040 W=Y*B0:REM frequency
6045 W=W/(P2*1):WP=W/2000
6050 PRINT:PRINT"  The Larmor frequency of the free pre-":PRINT"cession is ";W;" Mhz."
6055 PRINT"In pulsed NMR experiments B1 can be     quite large."
6060 PRINT"We require that B1/Bz be <=   .25."
6065 INPUT"B1/Bz = ";BB
6070 IF BB>0.25 THEN GOTO 6060
6075 B1=B0*BB
6080 YY=Y/(2.000000e+9*P2)
6085 MZ=95:MX=0:MY=0
6090 CLS
6095 PRINT"We next need the frequency of the":PRINT"transverse rotating field B1."
6100 PRINT"Give this to me as"
6105 PRINT"    w(rotating field)/w(Larmor)":
6110 PRINT"(Make this between .25 and 2.5, please.)"
6115 INPUT"",WW
6120 IF WW<0.25 OR WW>2.5 THEN GOTO 6110
6125 WR=WP*WW
6130 PRINT:PRINT"We need values of the relaxation times  T1 and T2.  1-10 sec is reasonable."
6135 INPUT"T1 (sec) = ",T1
6140 INPUT"t2 (sec) = ",T2
6141 PRINT:PRINT"We shall start with the pulse off.      Hold 'P' down to keep the pulse on;     release 'P' to turn the pulse off.      This cycle can be repeated."
6142 PRINT:PRINT"Touch 'Q' to terminate the run."
6143 PRINT"Touch <return> to go on, please."
6144 W$=INKEY$:IF W$="" THEN 6144
6145 T1=T1*300:T2=T2*300
6150 I=-1:CLS
6155 LINE (0,170)-(319,170),3
6160 I=I+1:BB1=0
6161 W$=INKEY$:IF W$="P" OR W$="p" THEN BB1=B1
6165 CS=COS(WR*I):SN=SIN(WR*I)
6170 MX1=YY*(B0*MY+BB1*SN*MZ)-MX/T2
6175 MY1=-YY*(B0*MX-BB1*CS*MZ)-MY/T2
6180 MZ1=YY*BB1*(-SN*MX-CS*MY)-(MZ-95)/T1
6185 NX=MX+MX1:NY=MY+MY1:NZ=MZ+MZ1
6190 CS=COS(WR*(I+1)):SN=SIN(WR*(I+1))
6195 MX2=YY*(B0*NY+BB1*SN*NZ)-NX/T2
6200 MY2=YY*(-B0*NX+BB1*CS*NZ)-NY/T2
6205 MZ2=YY*BB1*(-SN*NX-CS*NY)-(NZ-95)/T1
6210 MX=MX+0.5*(MX1+MX2)
6215 MY=MY+0.5*(MY1+MY2)
6220 MZ=MZ+0.5*(MZ1+MZ2)
6225 X=159+MX*1.33
6230 Y=100-MZ-0.1*MY
6235 LINE (159,100)-(X1,Y1),0
6240 PSET (X1,Y1),3
6245 PSET (I/20,170-MX/3)
6250 LINE (159,100)-(X,Y),3
6255 X1=X:Y1=Y
6260 W$=INKEY$
6262 IF W$<>"Q" AND W$<>"q" THEN 6160
6265 LOCATE 22,1:PRINT"Another run of this type?  (Y/N)"
6270 W$=INKEY$:IF W$="" THEN 6270
6275 CLS
6280 IF W$="Y" OR W$="y" THEN 6000
6285 GOTO 80
7000 REM exit from program
7005 SCREEN 0,1:CLS:RUN"menu.bas"
```

## NEWTONRT.BAS

```bas
1 REM NEWTON'S METHOD FOR REAL ROOTS OF POLYNOMIALS
2 WIDTH 40
10 CLS:PRINT TAB(3)"Real Roots of Polynomials:  Newton's Method"
20 PRINT
80 INPUT"Degree of equation:  ";N
84 REM set arrays to n+1
85 DIM A(N+1),B(N+1)
90 PRINT"Enter coefficients in order of lesser":PRINT"to higher degree."
100 FOR I=1 TO N+1
109 REM ENTER COEFFICIENTS IN ORDER OF LESSER TO HIGHER DEGREE
110 PRINT"Coefficient A(";I-1;") = ";
120 INPUT"";A(I)
130 NEXT I
140 FOR I=1 TO N
149 REM calculate coefficients of derivative polynomial
150 B(I)=A(I+1)*I
160 NEXT I
170 PRINT
179 REM initialize guess
180 INPUT"Guess:  ";X
200 Q=0
210 S=1
220 F1=0
230 FO=0
239 REM count iterations
240 Q=Q+1
250 FOR I=1 TO N+1
259 REM calculate value of function
260 FO=FO+A(I)*S
269 REM calculate value of derivative
270 F1=F1+B(I)*S
280 S=S*X
290 NEXT I
299 REM test for a zero derivative; if yes, stop search and print
300 IF F1=0 THEN 360
309 REM get new guess using previous guess
310 S=X-FO/F1
320 IF X=S THEN 380
329 REM save last guess
330 X=S
340 IF Q>100 THEN 490
350 GOTO 210
360 PRINT"     Derivative = 0 at x = ";X
370 GOTO 180
380 PRINT
390 PRINT"     Root = ";X
395 PRINT"          Error = ";FO
400 PRINT"          Derivative = ";F1
410 PRINT
419 REM rerun to find another root in same function?
420 INPUT"Another value of x?  (Y/N):  ";Z$
440 IF Z$="y" OR Z$="Y" THEN 170
449 REM restart or end program?
450 INPUT"Another function?  (Y/N):  ";Z$
460 IF Z$="Y" OR Z$="y" THEN CLEAR:GOTO 20
480 GOTO 550
489 REM print calculated values after 100 iterations; search 100 more
490 PRINT"100 iterations completed:"
500 PRINT"     x = ";X;"  f(x) = ";FO
510 INPUT"          Continue?  (Y/N):  ";Z$
530 IF Z$="Y" OR Z$="y" THEN 200
540 GOTO 420
550 CLS:END
```

## NMR-ABC.BAS

```bas
1 CLEAR:CLS:WIDTH 40:KEY OFF:OPTION BASE 1:DIM A(8,8),S(8,8),AI(8),SI(8),SJ(8),IX(8,8),SC(8,8),AJ(8)
2 GOSUB 3000
3 FOR I=1 TO 3000:NEXT I:CLS:LOCATE 5,1:PRINT"Please give me the parameters for the   spin Hamiltonian.  First the unperturb- ed frequencies, then the coupling con-  stants.":PRINT
4 INPUT"NuA = ";NUA:PRINT
5 INPUT"NuB = ";NUB:PRINT
6 INPUT"NuC = ";NUC:PRINT
7 INPUT"JAB = ";JAB:PRINT
8 INPUT"JAC = ";JAC:PRINT
9 INPUT"JBC = ";JBC:PRINT
32 GOSUB 2000:REM calculates the matrix elements of H and Ix
35 S2=1/SQR(2)
40 N=8
41 ER=0.000001
42 GOSUB 44
43 GOTO 650
44 REM matrix diagonalization starts here, goes to 600
45 MAX=0
50 FOR I=1 TO N
60 FOR J=1 TO N
85 T=ABS(A(I,J))
90 A(J,I)=A(I,J)
95 IF MAX<T THEN MAX=T
100 NEXT J
110 S(I,I)=1
120 NEXT I
130 II=1
140 JJ=1
150 B=0
155 NM=N-1
160 FOR I=1 TO NM
165 I1=I+1
170 FOR J=I1 TO N
175 T=ABS(A(I,J))
180 IF T>B THEN B=T:II=I:JJ=J
190 NEXT J
200 NEXT I
210 IF B/MAX<ER THEN GOTO 500
220 IF(A(JJ,JJ)=A(II,II))THEN S=S2:C=S2:GOTO 270
230 T=-2*A(II,JJ)/(A(II,II)-A(JJ,JJ))
240 T=0.5*ATN(T)
250 S=SIN(T)
260 C=COS(T)
270 FOR I=1 TO N
280 AI(I)=A(I,II)*C-A(I,JJ)*S
290 AJ(I)=A(I,II)*S+A(I,JJ)*C
300 SI(I)=S(I,II)*C-S(I,JJ)*S
310 SJ(I)=S(I,II)*S+S(I,JJ)*C
320 NEXT I
330 FOR I=1 TO N
340 S(I,II)=SI(I)
350 S(I,JJ)=SJ(I)
360 A(I,II)=AI(I)
370 A(I,JJ)=AJ(I)
380 NEXT I
390 FOR I=1 TO N
400 AI(I)=C*A(II,I)-S*A(JJ,I)
410 AJ(I)=S*A(II,I)+C*A(JJ,I)
420 NEXT I
430 FOR I=1 TO N
440 A(II,I)=AI(I)
450 A(JJ,I)=AJ(I)
460 NEXT I
470 GOTO 130
500 PRINT"New H(i,j)'s"
501 PRINT"Touch P for display of H's"
502 PRINT"<return> for no display"
503 W$=INKEY$:IF W$="" THEN 503
504 IF W$<>"P" AND W$<>"p" THEN GOTO 600
510 FOR I=1 TO N
530 FOR J=1 TO N
540 PRINT"H(";J;",";I;") = ";A(J,I)
550 PRINT"   S(";J;",";I;") = ";S(J,I)
560 NEXT J
570 INPUT"Touch <return> to go on.";W$
580 NEXT I
600 RETURN
650 REM transform the ix matrix
660 FOR I=1 TO 8
670 FOR J=1 TO 8
680 TP=0
690 FOR K=1 TO 8
700 TP=TP+IX(I,K)*S(K,J)
710 NEXT K
720 SC(I,J)=TP
730 NEXT J
740 NEXT I
750 FOR I=1 TO 8
760 FOR J=1 TO 8
770 TP=0
780 FOR K=1 TO 8
790 TP=TP+S(K,I)*SC(K,J)
800 NEXT K
810 IX(I,J)=TP
820 NEXT J
830 NEXT I
840 REM ix matrix transformed
850 REM calculate the line positions and relative intensities
860 JNT=0
870 FOR I=1 TO 7
875 FOR J=I+1 TO 8
880 IX(I,J)=IX(I,J)*IX(I,J)
890 JNT=JNT+IX(I,J)
900 NEXT J
910 NEXT I
915 JNT=500/JNT
920 FOR I=1 TO 7
925 FOR J=I+1 TO 8
930 IX(I,J)=IX(I,J)*JNT
935 NEXT J
940 NEXT I
945 REM tabulate frequencies, relative intensities
950 CLS
955 PRINT"Frequencies       Relative intensities"
956 K=0
960 FOR I=1 TO 7
965 FOR J=I+1 TO 8
970 PRINT A(I,I)-A(J,J);TAB(20);IX(I,J)
975 K=K+1:IF K<20 THEN GOTO 990
980 K=0
985 W$=INKEY$:IF W$="" THEN 985
990 NEXT J
995 NEXT I
1000 PRINT:PRINT"Next, I'll plot the spectrum for you."
1001 PRINT:PRINT"Do you want it Fancy and slow (F)":PRINT"or Quick and dirty (Q)?"
1002 W$=INKEY$:IF W$="" THEN 1002
1007 CLS
1010 SCREEN 2
1015 MIN=4.000000e+8:MAX=0
1020 FOR I=1 TO 7
1025 FOR J=I+1 TO 8
1030 SC(I,J)=A(I,I)-A(J,J)
1032 IF IX(I,J)<1 THEN GOTO 1045
1035 IF MIN>SC(I,J) THEN MIN = SC(I,J)
1040 IF MAX<SC(I,J) THEN MAX=SC(I,J)
1045 NEXT J
1050 NEXT I
1055 MIN=MIN-10:MAX=MAX+10
1057 IF W$="Q" OR W$="q" THEN GOTO 3050
1060 DNU=(MAX-MIN)/640
1065 T=4
1070 T2=T*T
1072 NU=MIN-DNU
1073 K1=0:Y1=199
1075 FOR K=1 TO 639
1080 NU=NU+DNU
1085 Y=199
1090 FOR I=1 TO 7
1095 FOR J=I+1 TO 8
1096 TP=IX(I,J):IF TP<1 THEN GOTO 1105
1097 SP=NU-SC(I,J)
1100 Y=Y-TP/(1+T2*SP*SP)
1105 NEXT J
1110 NEXT I
1115 LINE (K1,Y1)-(K,Y)
1116 K1=K:Y1=Y
1120 NEXT K
1125 MIN=0.1*INT(10*MIN):MAX=0.1*INT(10*MAX)
1130 LOCATE 1,1:PRINT MIN;" hz"
1135 LOCATE 1,65:PRINT MAX;" hz"
1136 W$=INKEY$:IF W$="" THEN 1136
1140 LOCATE 3,1:PRINT"Another run? (Y/N)"
1145 W$=INKEY$:IF W$="" THEN 1145
1150 IF W$="Y" OR W$="y" THEN CLS:CLEAR:LOCATE 5,1:GOTO 4
1155 CLS:RUN"menu.bas"
2000 REM calculates the matrix elements of H and Ix in the basic product representation
2010 FOR I=1 TO 8
2020 FOR J=1 TO 8
2030 A(I,J)=0:IX(I,J)=0
2040 NEXT J
2050 NEXT I
2060 REM calc matrix elements of H
2061 A(1,1)=0.5*(NUA+NUB+NUC)+0.25*(JAB+JAC+JBC)
2062 A(2,2)=0.5*(-NUA+NUB+NUC)+0.25*(-JAB-JAC+JBC)
2063 A(3,3)=0.5*(NUA-NUB+NUC)+0.25*(-JAB+JAC-JBC)
2064 A(4,4)=0.5*(NUA+NUB-NUC)+0.25*(JAB-JAC-JBC)
2065 A(5,5)=0.5*(-NUA-NUB+NUC)+0.25*(JAB-JAC-JBC)
2066 A(6,6)=0.5*(-NUA+NUB-NUC)+0.25*(-JAB+JAC-JBC)
2067 A(7,7)=0.5*(NUA-NUB-NUC)+0.25*(-JAB-JAC+JBC)
2068 A(8,8)=0.5*(-NUA-NUB-NUC)+0.25*(JAB+JAC+JBC)
2069 A(2,3)=0.5*JAB
2079 A(2,4)=0.5*JAC
2080 A(3,4)=0.5*JBC
2081 A(5,6)=0.5*JBC
2082 A(5,7)=0.5*JAC
2083 A(6,7)=0.5*JAB
2084 FOR I=1 TO 7
2085 FOR J=I+1 TO 8
2086 A(J,I)=A(I,J)
2088 NEXT J
2090 NEXT I
2091 FOR I=1 TO 8
2092 FOR J=1 TO 8
2093 IX(I,J)=0
2094 NEXT J
2095 NEXT I
2100 REM calc matrix elements of Ix
2101 B=0.5
2102 IX(1,2)=B
2103 IX(1,3)=B
2104 IX(1,4)=B
2105 IX(2,5)=B
2106 IX(2,6)=B
2107 IX(3,5)=B
2108 IX(3,7)=B
2109 IX(4,6)=B
2110 IX(4,7)=B
2111 IX(5,8)=B
2112 IX(6,8)=B
2113 IX(7,8)=B
2115 FOR I=1 TO 8
2116 FOR J=I TO 8
2117 IX(J,I)=IX(I,J)
2118 NEXT J
2120 NEXT I
2130 RETURN
3000 LOCATE 5,15:PRINT"NMR SPECTRA":PRINT:PRINT
3005 PRINT"              The ABC Case":PRINT:PRINT
3010 PRINT"          David J Wilson"
3015 PRINT"          Department of Chemistry"
3020 PRINT"          Vanderbilt University"
3025 RETURN
3050 AA=639*MIN/(MIN-MAX):BB=639/(MAX-MIN)
3054 FOR I=1 TO 7
3055 FOR J=I+1 TO 8
3060 TP=IX(I,J)
3061 IF TP<1 THEN 3100
3065 X=AA+BB*SC(I,J)
3070 Y=199-TP
3095 LINE (X,199)-(X,Y)
3100 NEXT J
3105 NEXT I
3110 LINE (0,199)-(639,199)
3115 GOTO 1125
```

## NMR-ABCD.BAS

```bas
1 CLEAR:CLS:WIDTH 40:KEY OFF:OPTION BASE 1:DIM A(16,16),S(16,16),AI(16),SI(16),SJ(16),IX(16,16),SC(16,16),AJ(16)
2 GOSUB 3000
3 FOR I=1 TO 3000:NEXT I:CLS:LOCATE 5,1
4 INPUT"NuA = ";NUA:PRINT
5 INPUT"NuB = ";NUB:PRINT
6 INPUT"NuC = ";NUC:PRINT
7 INPUT"NuD = ";NUD:PRINT
8 INPUT"JAB = ";JAB
9 INPUT"JAC = ";JAC
10 INPUT"JAD = ";JAD
11 INPUT"JBC = ";JBC
12 INPUT"JBD = ";JBD
13 INPUT"JCD = ";JCD
32 GOSUB 2000:REM calculates the matrix elements of H and Ix
35 S2=1/SQR(2)
40 N=16
41 ER=1.000000e-7
42 GOSUB 44
43 GOTO 650
44 REM matrix diagonalization starts here, goes to 600
45 MAX=0
50 FOR I=1 TO N
60 FOR J=1 TO N
85 T=ABS(A(I,J))
90 A(J,I)=A(I,J)
95 IF MAX<T THEN MAX=T
100 NEXT J
110 S(I,I)=1
120 NEXT I
130 II=1
140 JJ=1
150 B=0
155 NM=N-1
160 FOR I=1 TO NM
165 I1=I+1
170 FOR J=I1 TO N
175 T=ABS(A(I,J))
180 IF T>B THEN B=T:II=I:JJ=J
190 NEXT J
200 NEXT I
210 IF B/MAX<ER THEN GOTO 500
220 IF(A(JJ,JJ)=A(II,II))THEN S=S2:C=S2:GOTO 270
230 T=-2*A(II,JJ)/(A(II,II)-A(JJ,JJ))
240 T=0.5*ATN(T)
250 S=SIN(T)
260 C=COS(T)
270 FOR I=1 TO N
280 AI(I)=A(I,II)*C-A(I,JJ)*S
290 AJ(I)=A(I,II)*S+A(I,JJ)*C
300 SI(I)=S(I,II)*C-S(I,JJ)*S
310 SJ(I)=S(I,II)*S+S(I,JJ)*C
320 NEXT I
330 FOR I=1 TO N
340 S(I,II)=SI(I)
350 S(I,JJ)=SJ(I)
360 A(I,II)=AI(I)
370 A(I,JJ)=AJ(I)
380 NEXT I
390 FOR I=1 TO N
400 AI(I)=C*A(II,I)-S*A(JJ,I)
410 AJ(I)=S*A(II,I)+C*A(JJ,I)
420 NEXT I
430 FOR I=1 TO N
440 A(II,I)=AI(I)
450 A(JJ,I)=AJ(I)
460 NEXT I
470 GOTO 130
500 PRINT"New H(i,j)'s"
501 PRINT"Touch P for display of H's"
502 PRINT"<return> for no display"
503 W$=INKEY$:IF W$="" THEN 503
504 IF W$<>"P" AND W$<>"p" THEN GOTO 600
510 FOR I=1 TO N
530 FOR J=1 TO N
540 PRINT"H(";J;",";I;") = ";A(J,I)
550 PRINT"   S(";J;",";I;") = ";S(J,I)
560 NEXT J
570 INPUT"Touch <return> to go on.";W$
580 NEXT I
600 RETURN
650 REM transform the ix matrix
660 FOR I=1 TO 16
670 FOR J=1 TO 16
680 TP=0
690 FOR K=1 TO 16
700 TP=TP+IX(I,K)*S(K,J)
710 NEXT K
720 SC(I,J)=TP
730 NEXT J
740 NEXT I
750 FOR I=1 TO 16
760 FOR J=1 TO 16
770 TP=0
780 FOR K=1 TO 16
790 TP=TP+S(K,I)*SC(K,J)
800 NEXT K
810 IX(I,J)=TP
820 NEXT J
830 NEXT I
840 REM ix matrix transformed
850 REM calculate the line positions and relative intensities
860 JNT=0
870 FOR I=1 TO 15
875 FOR J=I+1 TO 16
880 IX(I,J)=IX(I,J)*IX(I,J)
890 JNT=JNT+IX(I,J)
900 NEXT J
910 NEXT I
915 JNT=500/JNT
920 FOR I=1 TO 15
925 FOR J=I+1 TO 16
930 IX(I,J)=IX(I,J)*JNT
935 NEXT J
940 NEXT I
945 REM tabulate frequencies, relative intensities
950 CLS
955 PRINT"Frequencies       Relative intensities"
956 K=0
960 FOR I=1 TO 15
965 FOR J=I+1 TO 16
970 PRINT A(I,I)-A(J,J);TAB(20);IX(I,J)
975 K=K+1:IF K<20 THEN GOTO 990
980 K=0
985 W$=INKEY$:IF W$="" THEN 985
986 CLS
990 NEXT J
995 NEXT I
1000 PRINT:PRINT"Next, I'll plot the spectrum for you."
1001 PRINT:PRINT"Do you want it Fancy but slow, or Quick and dirty? (F/Q)"
1002 W$=INKEY$:IF W$="" THEN 1002
1007 CLS
1010 SCREEN 2
1015 MIN=4.000000e+8:MAX=0
1020 FOR I=1 TO 15
1025 FOR J=I+1 TO 16
1030 SC(I,J)=A(I,I)-A(J,J)
1032 IF IX(I,J)<2   THEN GOTO 1045
1035 IF MIN>SC(I,J) THEN MIN = SC(I,J)
1040 IF MAX<SC(I,J) THEN MAX=SC(I,J)
1045 NEXT J
1050 NEXT I
1055 MIN=MIN-10:MAX=MAX+10
1056 IF W$="Q" OR W$="q" THEN GOTO 3050
1060 DNU=(MAX-MIN)/640
1065 T=4
1070 T2=T*T
1072 NU=MIN-DNU
1073 K1=0:Y1=199
1075 FOR K=1 TO 639
1080 NU=NU+DNU
1085 Y=199
1090 FOR I=1 TO 15
1095 FOR J=I+1 TO 16
1096 TP=IX(I,J):IF TP<1 THEN 1105
1100 Y=Y-TP/(1+T2*(NU-SC(I,J))^2)
1105 NEXT J
1110 NEXT I
1115 LINE (K1,Y1)-(K,Y)
1116 K1=K:Y1=Y
1120 NEXT K
1125 MIN=0.1*INT(10*MIN):MAX=0.1*INT(10*MAX)
1130 LOCATE 1,1:PRINT MIN;" hz"
1135 LOCATE 1,65:PRINT MAX;" hz"
1136 W$=INKEY$:IF W$="" THEN 1136
1140 LOCATE 3,1:PRINT"Another run? (Y/N)"
1145 W$=INKEY$:IF W$="" THEN 1145
1150 IF W$="Y" OR W$="y" THEN CLS:LOCATE 5,1:GOTO 1160
1155 CLS:RUN"menu.bas"
1160 FOR I=1 TO 16
1165 AI(I)=0:SI(I)=0:SJ(I)=0:AJ(I)=0
1170 FOR J=1 TO 16
1175 A(I,J)=0:S(I,J)=0:IX(I,J)=0:SC(I,J)=0
1180 NEXT J
1185 NEXT I
1190 GOTO 4
2000 REM calculates the matrix elements of H and Ix in the basic product representation
2010 FOR I=1 TO 16
2020 FOR J=1 TO 16
2030 A(I,J)=0:IX(I,J)=0
2040 NEXT J
2050 NEXT I
2051 A(1,1)=0.5*(NUA+NUB+NUC+NUD)+0.25*(JAB+JAC+JAD+JBC+JBD+JCD)
2052 A(2,2)=0.5*(-NUA+NUB+NUC+NUD)+0.25*(-JAB-JAC-JAD+JBC+JBD+JCD)
2053 A(3,3)=0.5*(NUA-NUB+NUC+NUD)+0.25*(-JAB+JAC+JAD-JBC-JBD+JCD)
2054 A(4,4)=0.5*(NUA+NUB-NUC+NUD)+0.25*(JAB-JAC+JAD-JBC+JBD-JCD)
2055 A(5,5)=0.5*(NUA+NUB+NUC-NUD)+0.25*(JAB+JAC-JAD+JBC-JBD-JCD)
2056 A(6,6)=0.5*(-NUA-NUB+NUC+NUD)+0.25*(JAB-JAC-JAD-JBC-JBD+JCD)
2057 A(7,7)=0.5*(-NUA+NUB-NUC+NUD)+0.25*(-JAB+JAC-JAD-JBC+JBD-JCD)
2058 A(8,8)=0.5*(-NUA+NUB+NUC-NUD)+0.25*(-JAB-JAC+JAD+JBC-JBD-JCD)
2059 A(9,9)=0.5*(NUA-NUB-NUC+NUD)+0.25*(-JAB-JAC+JAD+JBC-JBD-JCD)
2060 A(10,10)=0.5*(NUA-NUB+NUC-NUD)+0.25*(-JAB+JAC-JAD-JBC+JBD-JCD)
2061 A(14,14)=0.5*(-NUA+NUB-NUC-NUD)+0.25*(-JAB+JAC+JAD-JBC-JBD+JCD)
2062 A(11,11)=0.5*(NUA+NUB-NUC-NUD)+0.25*(JAB-JAC-JAD-JBC-JBD+JCD)
2063 A(12,12)=0.5*(-NUA-NUB-NUC+NUD)+0.25*(JAB+JAC-JAD+JBC-JBD-JCD)
2064 A(13,13)=0.5*(-NUA-NUB+NUC-NUD)+0.25*(JAB-JAC+JAD-JBC+JBD-JCD)
2065 A(15,15)=0.5*(NUA-NUB-NUC-NUD)+0.25*(-JAB-JAC-JAD+JBC+JBD+JCD)
2066 A(16,16)=0.5*(-NUA-NUB-NUC-NUD)+0.25*(JAB+JAC+JAD+JBC+JBD+JCD)
2067 A(2,3)=0.5*JAB:A(2,4)=0.5*JAC:A(2,5)=0.5*JAD:A(3,4)=0.5*JBC:A(3,5)=0.5*JBD
2068 A(4,5)=0.5*JCD:A(6,7)=0.5*JBC:A(6,8)=0.5*JBD:A(6,9)=0.5*JAC:A(6,10)=0.5*JAD
2069 A(7,8)=0.5*JCD:A(7,9)=0.5*JAB:A(7,11)=0.5*JAD:A(8,10)=0.5*JAB:A(8,11)=0.5*JAC
2070 A(9,10)=0.5*JCD:A(9,11)=0.5*JBD:A(10,11)=0.5*JBC:A(12,13)=0.5*JCD:A(12,14)=0.5*JBD
2071 A(12,15)=0.5*JAD:A(13,14)=0.5*JBC:A(13,15)=0.5*JAC:A(14,15)=0.5*JAB
2084 FOR I=1 TO 15
2085 FOR J=I+1 TO 16
2086 A(J,I)=A(I,J)
2088 NEXT J
2090 NEXT I
2091 FOR I=1 TO 16
2092 FOR J=1 TO 16
2093 IX(I,J)=0
2094 NEXT J
2095 NEXT I
2100 REM calc matrix elements of Ix
2101 B=0.5
2102 IX(1,2)=B:IX(1,3)=B:IX(1,4)=B:IX(1,5)=B:IX(2,6)=B:IX(2,7)=B:IX(2,8)=B:IX(3,6)=B
2103 IX(3,9)=B:IX(3,10)=B:IX(4,7)=B:IX(4,9)=B:IX(4,11)=B:IX(5,8)=B:IX(5,10)=B:IX(5,11)=B
2104 IX(6,12)=B:IX(6,13)=B:IX(7,12)=B:IX(7,14)=B:IX(8,13)=B:IX(8,14)=B:IX(9,12)=B:IX(9,15)=B
2105 IX(10,13)=B:IX(10,15)=B:IX(11,14)=B:IX(11,15)=B:IX(12,16)=B:IX(13,16)=B:IX(14,16)=B:IX(15,16)=B
2115 FOR I=1 TO 16
2116 FOR J=I TO 16
2117 IX(J,I)=IX(I,J)
2118 NEXT J
2120 NEXT I
2130 RETURN
3000 LOCATE 5,15:PRINT"NMR SPECTRA":PRINT:PRINT
3005 PRINT"              The ABCD Case":PRINT:PRINT
3010 PRINT"          David J Wilson"
3015 PRINT"          Department of Chemistry"
3020 PRINT"          Vanderbilt University"
3025 RETURN
3050 AA=639*MIN/(MIN-MAX):BB=639/(MAX-MIN)
3054 FOR I=1 TO 15
3055 FOR J=I+1 TO 16
3060 IF IX(I,J)<1 THEN GOTO 3100
3065 X=AA+BB*SC(I,J)
3070 Y=199-IX(I,J)
3075 LINE (X,199)-(X,Y)
3100 NEXT J
3105 NEXT I
3110 GOTO 1125
```

## NMR-WEFT.BAS

```bas
10 CLEAR:CLS:SCREEN 1,0:KEY OFF:WIDTH 40
20 COLOR 0,1
30 LOCATE 5,15:PRINT"NMR - WEFT"
40 LOCATE 7,1:PRINT"Water Elimination by Fourier Transform"
50 LOCATE 10,10:PRINT"David J Wilson"
60 LOCATE 11,10:PRINT"Department of Chemistry"
70 LOCATE 12,10:PRINT"Vanderbilt University"
80 FOR I=1 TO 3000:NEXT I
90 CLS
100 PRINT"  A major problem in taking proton NMR  spectra of samples dissolved in proton- containing solvents is the massive sol- vent peak.  In FT NMR this causes       severe dynamic range problems."
110 FOR I=1 TO 2000:NEXT I:PRINT:PRINT"  We describe here the WEFT method for"
120 PRINT"suppressing the water peak in proton    spectra.  This depends upon the sample  protons having substantially smaller    relaxation times T1 than the water pro- tons."
130 PRINT:PRINT"  Touch <return> to go on, please."
140 W$=INKEY$:IF W$="" THEN 140
150 CLS
160 PRINT:PRINT"  One first applies a 180 deg pulse,    and waits until the Mz of the water     protons has decayed to zero, by which   time the Mz's of the sample protons     will have decayed to their equilibrium  values."
170 PRINT"  One then applies a 90 deg pulse and   follows the resulting free induction.   Since a 90 deg pulse applied to a zero  value of Mz gives no magnetization com-"
180 PRINT"ponent in the x-y plane, the water pro- tons give no signal.  On the other      hand, the sample protons, relaxed back  to their equilibrium magnetization af-"
190 PRINT"ter the 180 deg pulse, give their nor-  mal signal."
200 PRINT:PRINT"  Touch <return> to go on."
210 W$=INKEY$:IF W$="" THEN 210
220 CLS
230 PRINT"  Here we shall look at the behavior of water and sample protons in the rotat-  ing coordinate system.  You will be     able to select the T1's, T2's, and the  pulse sequences."
240 FOR I=1 TO 2000:NEXT I
250 PRINT"  First the water protons.  What value"
260 PRINT"of T1 do you want?  (sec, 1 < T1 < 10)"
270 INPUT"",TW1
280 T1W=TW1
290 PRINT"What value of T2 do you want?  (sec,    1 < T2 < 10)"
300 INPUT"",TW2
310 T2W=TW2
320 PRINT:PRINT"Now the sample protons.  What value of  T1?  (sec, 1 < T1 < 10)"
330 INPUT "",TS1
340 T1S=TS1
350 PRINT"What value of T2 do you want?  (sec,    1 < T2 < 10)"
360 INPUT"",TS2
370 T2S=TS2
380 PRINT:PRINT"The upper left drawing will show the    behavior of Mz and Mx for the water     protons: the upper right, that of Mz    and Mx for the sample protons.  These"
390 PRINT"refer to the rotating coordinate sys-   tem."
400 PRINT:PRINT"  To provide pulses, touch the 'P' key. To allow free induction decay, touch    the 'F' key.  To quit, touch the 'Q'    key."
410 PRINT:PRINT"  Touch <return> to go on, please."
420 W$=INKEY$:IF W$="" THEN 420
430 CLS
440 OWX=80:OWY=60:OSX=200:OSY=60
450 R=60
460 LINE (0,145)-(319,145),1
470 LINE (0,175)-(319,175),1
471 LOCATE 18,34:PRINT"sample";
472 LOCATE 24,34:PRINT"water";
473 LOCATE 1,3:PRINT"water";
474 LOCATE 1,32:PRINT"sample";
480 MZE=60
490 MZS=60:MZW=60:MXS=0:MXW=0
500 TSC=0.02
510 T1W=T1W/TSC:T2W=T2W/TSC:T1S=T1S/TSC:T2S=T2S/TSC
520 PSC=0.05
525 I=0
530 W$=""
540 REM loop starts here
550 LINE (OWX,OWY)-(OWX+MXW,OWY-MZW),1
560 LINE (OSX,OSY)-(OSX+MXS,OSY-MZS),1
570 DEF SEG = 0:POKE 1050,PEEK(1052):DEF SEG
580 X$=INKEY$
590 IF X$<>"" THEN W$=X$
600 IF W$="P" OR W$="p" THEN GOTO 640
610 IF W$="Q" OR W$="q" THEN GOTO 820
620 IF W$="F" OR W$="f" THEN GOTO 690
630 GOTO 580
640 MZS2=MZS-PSC*MXS
650 MXS2=MXS+PSC*MZS
660 MZW2=MZW-PSC*MXW
670 MXW2=MXW+PSC*MZW
680 GOTO 740
690 MZS2=MZS+(MZE-MZS)/T1S
700 MXS2=MXS-MXS/T2S
710 MZW2=MZW+(MZE-MZW)/T1W
720 MXW2=MXW-MXW/T2W
730 GOTO 740
740 LINE (OWX,OWY)-(OWX+MXW,OWY-MZW),0
750 LINE (OSX,OSY)-(OSX+MXS,OSY-MZS),0
760 MXS=MXS2:MZS=MZS2:MXW=MXW2:MZW=MZW2
770 LINE (OSX,OSY)-(OSX+MXS,OSY-MZS),1
780 LINE (OWX,OWY)-(OWX+MXW,OWY-MZW),1
790 I=I+1:MS=0.25*MXS:MW=0.25*MXW
792 J=I/2.5
794 CS=COS(J):MS=MS*CS:MW=MW*CS
800 PSET (J,145-MS),1:PSET (J,175-MW),1
810 IF W$<>"Q" AND W$<>"q" THEN GOTO 540
820 CLS:SCREEN 0,1:RUN"menu.bas"
```

## NMREXCH.BAS

```bas
10 WIDTH 40:SCREEN 1,0,0,0,2:CLS:COLOR 0,2:KEY OFF
15 LOCATE 1,38
20 LOCATE 5,10:PRINT"NMR LINESHAPES WITH"
30 LOCATE 7,11:PRINT"CHEMICAL EXCHANGE"
40 LOCATE 10,10:PRINT"David J Wilson"
50 LOCATE 11,10:PRINT"Department of Chemistry"
60 LOCATE 12,10:PRINT"Vanderbilt University"
70 FOR I=1 TO 2000:NEXT I
80 CLS
90 PRINT"This program calculates the effects of  chemical exchange on the shapes of NMR  lines.":PRINT
100 PRINT"It requires as input the lifetimes tauA and tauB of the species A and B, the    frequencies nuA and nuB in the absence  of exchange, the mole fractions pA and"
110 PRINT"pB of A and B, and the width delta of   the lines at half-height. (hz)"
120 PRINT:PRINT"It will then calculate the resulting    spectrum.  Touch <return> to proceed."
130 W$=INKEY$:IF W$="" THEN 130
140 CLS
150 INPUT"tauA (sec) = ";TA
160 INPUT"tauB (sec) = ";TB
170 INPUT"mole fraction A = ";PA
180 INPUT"mole fraction B = ";PB
190 INPUT"nuA (hz) = ";NUA
200 INPUT"nuB (hz) = ";NUB
210 PRINT"linewidth at half-height (hz)"
215 INPUT" = ",LW
220 IF NUA<NUB THEN NUMIN=NUA ELSE NUMIN = NUB
230 NUMIN=NUMIN-10
240 IF NUA<NUB THEN NUMAX=NUB ELSE NUMAX=NUA
250 NUMAX=NUMAX+10
260 SCREEN 2,0
265 TAU=TA*TB/(TA+TB)
266 DNU=NUA-NUB
270 PI=3.14159
271 T1P=LW*LW/4+DNU*DNU/4
272 T2P=LW/(4*PI)
273 T1Q=0.5*(PA-PB)*DNU
274 T1R=T1Q
275 T2R=1+2*PI*TAU*LW
276 T1G=1+TAU*PI*LW
277 T2G=4*PI*PI
280 DGNU=(NUMAX-NUMIN)/639
285 NU=NUMIN-DGNU-(NUA+NUB)/2
287 IM=0:YM=199
290 FOR I=0 TO 639
295 NU=NU+DGNU
300 PP=(T1P-NU*NU)*TAU+T2P
310 QQ=(-NU-T1Q)*TAU
320 RR=T1R-NU*T2R
330 GG=(T1G*PP+QQ*RR)/(T2G*PP*PP+RR*RR)
340 Y=199-200*GG
350 LINE (IM,YM)-(I,Y)
355 IM=I:YM=Y
360 NEXT I
361 NUMIN=0.01*INT(100*NUMIN)
362 NUMAX=0.01*INT(100*NUMAX)
370 LOCATE 5,1:PRINT NUMIN;" hz"
380 LOCATE 5,70:PRINT NUMAX;" hz"
390 W$=INKEY$:IF W$="" THEN 390
400 CLS
410 SCREEN 1,0
415 LOCATE 5,5:PRINT"Do you want another run?  (Y/N)"
420 W$=INKEY$:IF W$="" THEN 420
425 IF W$="Y" OR W$="y" THEN GOTO 140
430 CLS:WIDTH 40
440 RUN"menu.bas"
```

## NMREXEC.BAS

```bas
10 CLEAR:WIDTH 40:SCREEN 1,0:CLS:KEY OFF   :COLOR 0,0
20 LOCATE 4,7:PRINT"NUCLEAR MAGNETIC RESONANCE"
30 LOCATE 7,10:PRINT"David J Wilson"
40 LOCATE 8,10:PRINT"Department of Chemistry"
50 LOCATE 9,10:PRINT"Vanderbilt University"
60 FOR I=1 TO 2000:NEXT I:CLS
70 DEF SEG = &HB800
80 BLOAD"nmrapp2.pic",0
90 LOCATE 24,1:PRINT"                                        ";
100 LOCATE 25,1:PRINT"                                        ";
110 LOCATE 25,1
120 PRINT"Touch <return> to go on, please."
130 W$=INKEY$:IF W$="" THEN 130
140 CLS
150 LOCATE 1,18:PRINT"MENU":PRINT
160 PRINT"1. Larmor precession and the Bloch         equations":PRINT
170 PRINT"2. NMR spectra, ABC case":PRINT
180 PRINT"3. NMR spectra, ABCD case":PRINT
190 PRINT"4. Free induction decay in spectra with    several signals, FT-NMR":PRINT
200 PRINT"5. Exchange effects in NMR":PRINT
210 PRINT"6. Spin echo experiment":PRINT
220 PRINT"7. NMR in rotating coordinate system":PRINT
230 PRINT"8. Multiple pulse experiments in the       lab coordinates":PRINT
240 PRINT"9. End":PRINT
245 FOR I=1 TO 1000:NEXT I
250 PRINT"Touch the number of what you'd like to  do, please."
260 W$=INKEY$:IF W$="" THEN 260
270 NM=VAL(W$):IF NM<1 OR NM>10 THEN GOTO 250
280 ON NM GOTO 290,300,310,320,330,340,350, 360,370
290 RUN"larmor.bas"
300 RUN"nmr-abc.bas"
310 RUN"nmr-abcd.bas"
320 RUN"nmrfourt.bas"
330 RUN"nmrexch.bas"
340 RUN"spinecho.bas"
350 RUN"nmrrot.bas"
360 RUN "multpuls.bas"
370 CLS:RUN"menu.bas"
```

## NMRFOURT.BAS

```bas
10 REM Interference in free induction decay of two peaks
12 DIM A(5),W(5),T2(5)
20 CLEAR:KEY OFF:SCREEN 1,0:CLS:WIDTH 40
29 LOCATE 5,14
30 PRINT"NMR SPECTRA"
34 LOCATE 7,1
35 PRINT"Free induction decay with several peaks"
40 PRINT:PRINT:PRINT SPC(10);"David J Wilson"
45 PRINT SPC(10);"Department of Chemistry"
50 PRINT SPC(10);"Vanderbilt University"
55 FOR I=1 TO 2000:NEXT I
60 CLS
65 PRINT"  Here we shall look at the interfer-   ence effects which occur in the free    induction decay of a signal resulting   from nuclei having more than one chem-"
70 PRINT"ical shift."
75 PRINT:PRINT"  You will need to enter signal ampli-  tudes, frequencies, and relaxation      times.":PRINT
80 PRINT"  I can handle up to five separate      lines."
85 PRINT:PRINT"Touch <return> to go on, please."
90 W$=INKEY$:IF W$="" THEN 90
95 CLS
100 I=0
105 I=I+1
110 IF I=6 THEN NL=5:GOTO 150
115 PRINT"Line amplitude(";I;"), [0 - 100] = "
116 INPUT"",A(I)
117 IF A(I)=0 THEN NL=I-1:GOTO 150
118 PRINT"Line frequency(";I;"), [4900-5100] = "
120 INPUT"",W(I)
122 PRINT"Relaxation time(";I;"), [1-10] = "
124 INPUT"",T2(I)
126 GOTO 105
150 SUM=0
155 FOR I=1 TO NL
160 SUM=SUM+A(I)
165 NEXT I
170 F=95/SUM
175 FOR I=1 TO NL
176 AA(I)=A(I):WW(I)=W(I):TT2(I)=T2(I)
180 A(I)=A(I)*F
185 W(I)=W(I)/5000
190 T2(I)=T2(I)*100
195 NEXT I
200 CLS:SCREEN 2
205 LINE (0,100)-(639,100)
210 FOR J=0 TO 639
215 Y=100
220 FOR I=1 TO NL
225 Y=Y-A(I)*SIN(W(I)*J)*EXP(-J/T2(I))
230 NEXT I
235 LINE -(J,Y)
240 NEXT J
245 W$=INKEY$:IF W$="" THEN 245
250 CLS
252 PRINT"Here's the Fourier transform of that FID."
253 XX=0:YY=199
255 FOR J=0 TO 639
256 JJ=J/2
257 PSET (J,199),1
260 SIG=0
265 FOR I=1 TO NL
270 SIG=SIG+AA(I)*TT2(I)/(1+((WW(I)-4850-JJ)*TT2(I))^2)
272 NEXT I
273 Y=199-SIG
275 LINE (XX,YY)-(J,Y),1
276 XX=J:YY=Y
280 NEXT J
285 W$=INKEY$:IF W$="" THEN 285
290 CLS:RUN"nmrexec.bas"
```

## NMRPHASE.BAS

```bas
10 CLEAR:KEY OFF:CLS:WIDTH 40:SCREEN 1,0:COLOR 0,1
20 REM nmr phasing simulation
40 SS=VAL(RIGHT$(TIME$,2))
50 SS=500*SS-32000
60 RANDOMIZE SS
70 DIM RE(319),IM(319)
80 LOCATE 7,9:PRINT"NMR PHASING SIMULATION"
90 LOCATE 11,10:PRINT"David J Wilson"
100 LOCATE 12,10:PRINT"Department of Chemistry"
110 LOCATE 13,10:PRINT"Vanderbilt University"
120 AMP = 130
130 A=50 + 220*RND(1)
140 S=1+10*RND(1)
150 FOR I=0 TO 319
160 TP=I-A
170 TPP=AMP/(1+TP*TP)
180 RE(I)=TPP
190 IM(I)=TPP*TP
200 NEXT I
210 CLS
220 PRINT"  In this program you will be shown an  NMR line.  It will be incorrectly phas- ed.  The signal which is plotted is":PRINT
230 PRINT"  Sig = cos(th)*Re + sin(th)*Im":PRINT
240 PRINT"where"
250 PRINT"  Re =      A"
260 PRINT"       -----------------"
270 PRINT"       1 + [(w - a)/s]^2"
280 PRINT"and"
290 PRINT"  Im =   A*(w - a)"
300 PRINT"       -----------------"
310 PRINT"       1 + [(w - a)/s]^2"
320 PRINT:PRINT"w = frequency"
330 PRINT"s = linewidth"
340 PRINT
350 PRINT:PRINT"Touch <return> to go on, please"
360 W$=INKEY$:IF W$="" THEN 360
370 CLS
380 PRINT"  After the spectrum has been display-  ed, each time you touch the 'I' key the phase angle will be increased.  Each    time you touch 'D', it will be decreas- ed.
390 PRINT"  Touch 'R' to display the rephased     spectrum."
400 PRINT"  Touch 'Q' to exit from the program."
410 PRINT:PRINT"  Touch <return> to go on, please."
420 W$=INKEY$:IF W$="" THEN 420
430 CLS
440 TH=5.*(-0.5+RND(1))
450 GOSUB 2000:REM display spectrum
460 LOCATE 22,1:PRINT"'I'ncrease or 'D'ecrease theta?"
470 LOCATE 23,1:PRINT"'R'ecord the newly phased spectrum?"
480 LOCATE 24,1:PRINT"'Q'uit?";
490 DTH=0.02
500 W$=INKEY$:IF W$="" THEN 500
510 IF W$="R" OR W$="r" THEN CLS:GOSUB 2000:IF ABS(TH)<0.015 THEN GOTO 1500:GOTO 460
515 IF W$="R" OR W$="r" THEN GOTO 460
520 IF W$="i" OR W$="I" THEN TH=TH+DTH:GOTO 500
530 IF W$="d" OR W$="D" THEN TH=TH-DTH:GOTO 500
540 IF W$="Q" OR W$="q" THEN CLS:GOTO 1000
550 GOTO 500
1000 RUN"menu.bas"
1500 LOCATE 15,1:PRINT"That looks pretty good.":GOTO 460
2000 REM display spectrum
2010 CS=COS(TH):SN=SIN(TH)
2011 LINE (0,100)-(319,100),1
2012 X=0:Y=100
2020 FOR I=0 TO 319
2030 SIG=CS*RE(I)+SN*IM(I)
2039 Y1=100-SIG
2040 LINE (X,Y)-(I,Y1),1
2041 X=I:Y=Y1
2050 NEXT I
2060 RETURN
```

## NMRRELAX.BAS

```bas
10 REM effects of correlation time tau sub c on T1
20 CLEAR:CLS:WIDTH 40:KEY OFF:SCREEN 1,0
22 COLOR 0,2
25 DIM LT1(320),LTAU(320)
30 LOCATE 5,5:PRINT"Effect of Correlation time on"
40 LOCATE 7,5:PRINT"the Longitudinal relaxation time T1"
50 LOCATE 9,10:PRINT"David J Wilson"
60 LOCATE 10,10:PRINT"Department of Chemistry"
70 LOCATE 11,10:PRINT"Vanderbilt University"
80 FOR I=1 TO 2000:NEXT I
90 CLS
100 PRINT"  We shall here take a look at how the"
110 PRINT"random fluctuations in magnetic field"
120 PRINT"associated with molecular motions"
130 PRINT"affect the longitudinal relaxation time"
140 PRINT"T1.  A good reference is E. D. Becker,"
150 PRINT"High Resolution NMR, Theory and Chem-   ical Applications, 2nd ed., Ch. 8."
160 PRINT:PRINT"  The correlation time tau gives a"
170 PRINT"measure of the time during which a      system remains 'close to' its initial   state.  If we have specified the init-"
180 PRINT"ial state, the shorter the correlation  time, the more rapidly do random pro-"
190 PRINT"cesses destroy our knowledge of the     state of the system at later times."
200 PRINT:PRINT"Touch <return> to go on, please."
210 W$=INKEY$:IF W$="" THEN 210
220 CLS
230 PRINT"Let us take a correlation function      showing exponential decay,":PRINT
240 PRINT"      k(t) = k(0)*exp(-t/tau)":PRINT
250 PRINT"Its spectral density function is defin- ed as":PRINT
259 PRINT"           /oo"
260 PRINT"   J(w) =  | k(t)*cos(wt)*dt"
261 PRINT"           /0"
270 PRINT"Carrying out the integration gives":PRINT
280 PRINT"  J(w) = tau/[1 + (w*tau)^2]"
290 PRINT:PRINT"This gives a measure of the various     frequency components of the correlation function."
300 PRINT"The only component which is effective   at causing nuclear spin flips is that   component at the Larmor frequency, wo."
310 PRINT:PRINT"Touch <return>, please."
320 W$=INKEY$:IF W$="" THEN 320
330 CLS
340 PRINT"The longitudinal relaxation time T1 is"
350 PRINT"inversely proportional to J(wo), so we  have":PRINT
360 PRINT"    T1 = C*[1 + (wo*tau)^2]/tau":PRINT
370 PRINT"What is the Larmor frequency of the     nuclei?  (hz) ";
375 INPUT"",W0
380 W0=W0*2*3.14159
390 TAUMIN=(0.01)/W0
400 TAUMAX=(100)/W0
410 M=LOG(10)
415 CLS:LOCATE 10,10:PRINT"calculating"
420 DLTAU=4/320
430 LTAU=LOG(TAUMIN)/M-DLTAU
440 FOR I=1 TO 320
450 LTAU=LTAU+DLTAU
460 TAU=10^LTAU
470 LTAU(I)=LTAU
480 LT1(I)=LOG((1+(W0*TAU)^2)/TAU)/M
490 NEXT I
500 CLS
505 LINE (0,0)-(0,199):LINE (0,199)-(319,199)
510 SCY=195/(LT1(1)-LT1(160))
520 SCX=320/4
522 SCY=SCX
530 FOR I=1 TO 320
540 X=(LTAU(I)-LTAU(1))*SCX
550 Y=197-SCY*(LT1(I)-LT1(160))
560 PSET (X,Y)
570 NEXT I
580 LOCATE 5,2:PRINT"log(T )";
590 LOCATE 6,2:PRINT"     1";
600 LOCATE 25,30:PRINT"log(tau)";
610 TP=0.01*INT(100*LTAU(1))
620 LOCATE 24,2:PRINT TP;
630 TP=0.01*INT(100*LTAU(320))
640 LOCATE 24,35:PRINT TP;
650 TP=0.01*INT(100*LT1(160))
660 LOCATE 23,2:PRINT TP;
670 TP=0.01*INT(100*LT1(1))
680 LOCATE 8,2:PRINT TP;
690 W$=INKEY$:IF W$="" THEN 690
700 CLS:RUN"menu.bas"
```

## NMRROT.BAS

```bas
10 REM nmr; behavior of magnetization in the rotating system
20 CLS:KEY OFF:SCREEN 1,0
30 LOCATE 10,3:PRINT"NMR:  BEHAVIOR OF THE MAGNETIZATION"
40 LOCATE 12,3:PRINT"VECTOR IN THE ROTATING COORDINATE"
50 LOCATE 14,17:PRINT"SYSTEM"
60 LOCATE 18,10:PRINT"David J Wilson"
70 LOCATE 19,10:PRINT"Department of Chemistry"
80 LOCATE 20,10:PRINT"Vanderbilt University"
90 FOR I=1 TO 4000:NEXT I
100 CLS
110 PRINT"  This program simulates the behavior   of the nuclear magnetization in an NMR  experiment as seen from a coordinate    system rotating at the Larmor  fre-"
120 PRINT"quency."
130 PRINT:PRINT"  You will need to supply the tip angle of the pulse, and T1 and T2.  The mach- ine will then show the behavior of the  magnetization during the pulse and the"
140 PRINT"following free induction decay."
150 PRINT:PRINT"  Touch <return> to go on, please."
160 W$=INKEY$:IF W$="" THEN 160
170 CLS
180 LOCATE 5,1:PRINT"Pulse tip angle (deg.) = ";
190 INPUT "",TH
200 LOCATE 7,1:PRINT"T1 (sec) = ";
210 INPUT "",T1
220 LOCATE 9,1:PRINT"T2 (sec) = ";
230 INPUT "",T2
240 LOCATE 11,1:PRINT"Touch <return> to start the display."
250 W$=INKEY$:IF W$="" THEN 250
260 CLS
261 LOCATE 1,22:PRINT"First, the pulse."
262 FOR I=1 TO 1000:NEXT I
270 X0=100:Y0=100:M0=95
275 R=95:RM=94
280 THR=TH*3.14159/180:REM tip angle in radians
290 NP%=TH/3
295 RP=R*7/6
300 DTHR=THR/NP%
310 LINE (99,100)-(99,1),3
315 TR=0
320 FOR I=1 TO NP%
330 TR=TR+DTHR
340 SN=SIN(TR):CS=COS(TR)
345 LINE (X0,Y0)-(X2,Y2),0
346 PSET (X2,Y2),3
350 X2=X0+RP*SN:Y2=Y0-R*CS
355 LINE (X0,Y0)-(X2,Y2),0
370 LINE (X0,Y0)-(X2,Y2),3
380 NEXT I
390 LOCATE 2,22:PRINT"Next, the FID."
392 MX=X2-X0:MY=Y2-Y0
400 FOR I=1 TO 2000:NEXT I
410 T1=T1*30:T2=T2*30
420 IMAX%=4*T1
422 LINE (0,170)-(319,170),3
424 XSC=319/IMAX%
425 YSC=MX*29/95
430 FOR I=1 TO IMAX%
435 LINE(X0,Y0)-(X3,Y3),0
436 PSET (X3,Y3),3
438 EX2=EXP(-I/T2)
440 X3=X0+MX*EX2
441 V=-COS(I/2)*EX2*YSC+170
442 U=I*XSC
443 PSET (U,V),3
450 Y3=5+(Y2-5)*EXP(-I/T1)
460 LINE (X0,Y0)-(X3,Y3),3
470 NEXT I
480 LOCATE 3,22:PRINT"Neat, huh!"
490 W$=INKEY$:IF W$="" THEN 490
500 CLS:RUN"menu.bas"
```

## NUMDIFF.BAS

```bas
2 REM Numerical Differentiation
3 CLEAR:CLS
4 WIDTH 40
5 LOCATE 5,5
10 PRINT"NUMERICAL DIFFERENTIATION"
11 PRINT:PRINT"Symmetrical 4-Point Formula"
15 DIM Y(5)
20 PRINT:PRINT"To calculate y'(x) this program re-"
25 PRINT"quires either a subroutine which cal-"
30 PRINT"culates y from x, or numerical values"
35 PRINT"for y(x-2h), y(x-h), y(x+h), and y(x+2h)."
40 PRINT:PRINT"If you use the subroutine, it must"
41 PRINT"start at 500."
45 PRINT"Enter S for subroutine, N for numerical"
46 PRINT"values."
50 INPUT"",W$
51 CLS
53 IF W$="S" THEN GOTO 100
54 INPUT"     x = ";X
55 CLS
56 FOR I=1 TO 5
58 IF I=3 THEN GOTO 64
59 PRINT"y(x+";I-3;"dx) = ";
61 INPUT"",Y(I)
64 NEXT
66 INPUT"     dx = ",H
68 GOTO 200
100 INPUT"     x = ",X
102 INPUT"    dx = ",H
105 X=X-3*H
110 FOR I=1 TO 5
115 X=X+H
120 GOSUB 500
125 Y(I)=Y
130 NEXT
135 X=X-2*H
140 GOTO 200
200 YP=(Y(4)-Y(2))/(2*H)-(Y(5)-2*Y(4)+2*Y(2)-Y(1))/(12*H)
205 PRINT:PRINT"     y'(";X;") = ";YP:PRINT
210 PRINT:PRINT"Do you want to calculate another value?"
215 INPUT"(Y/N) ",W$
225 IF W$="N" THEN GOTO 230
226 GOTO 45
230 CLS:END
500 REM subroutine to calculate y(x)
505 Y=SIN(X)
510 RETURN
```

## OFFRES.BAS

```bas
10 CLEAR:CLS:SCREEN 1,0:COLOR 0,1:KEY OFF:WIDTH 40
20 DIM CS(200),SN(200)
25 GOSUB 1000
30 DTH=2*3.14159/200
35 THET=-DTH
40 FOR I=0 TO 200
50 THET=THET+DTH
60 CS(I)=COS(THET):SN(I)=SIN(THET)
70 NEXT I
500 CLS
510 H0=150:H1=10
520 PRINT"What value of w do you want for the     rotating field?  (100 < w < 200)"
530 INPUT"",W
535 CLS
540 HEFF = SQR((H0-W)^2+H1*H1)
550 IF H0=W THEN THETA=3.14159/2:GOTO 561
560 THETA = ATN(H1/(H0-W))
561 XSC=1.3
570 XHEFF=160+2*XSC*H1:YHEFF=100-2*(H0-W)
575 LINE (160,0)-(160,199),1
580 LINE (160,100)-(XHEFF,YHEFF),1
590 MAG=90
600 CTH=COS(THETA):STH=SIN(THETA)
610 XC=160+90*CTH*STH*XSC
620 YC=100-90*CTH*CTH
621 X=-1:Y=-1
630 FOR I=1 TO 400
642 J=I*HEFF/H1
643 IF J<1 THEN GOTO 690
644 IF J>200 THEN J=J-200:GOTO 644
645 XP=-90*STH*CS(J)
650 YP=-18*STH*SN(J)
655 LINE (160,100)-(X,Y),0
656 LINE (160,0)-(160,199),1
657 LINE (160,100)-(XHEFF,YHEFF),1
658 PSET (X,Y),1
660 X=XC+(CTH*XP-STH*YP)*XSC
670 Y=YC+STH*XP+CTH*YP
680 LINE (160,100)-(X,Y),1
690 NEXT I
700 LOCATE 24,1:PRINT"Do you want another run?  (Y/N)";
710 W$=INKEY$:IF W$="" THEN 710
720 IF W$="N" OR W$="n" THEN CLS:RUN"menu.bas"
730 GOTO 500
1000 LOCATE 5,3 :PRINT"MAGNETIZATION IN THE ROTATING FIELD"
1010 LOCATE 7,9:PRINT"PRECESSION AROUND Heff"
1020 LOCATE 12,10:PRINT"David J Wilson"
1030 LOCATE 13,10:PRINT"Department of Chemistry"
1040 LOCATE 15,10:PRINT"Vanderbilt University"
1050 LOCATE 23,1:PRINT"Patience; I have to calculate a batch   of trig functions.";
1060 RETURN
```

## POWRCURV.BAS

```bas
1 CLS:LOCATE 5,20
2 PRINT"POWER CURVE FIT":PRINT
3 PRINT"  y = a*x^b":PRINT
4 PRINT
10 REM
20 INPUT"No. of data pairs = ";N
25 CLS:LOCATE 1,1
30 XB=0:YB=0:XY=0:X2=0:Y2=0
60 FOR I=1 TO N
65 PRINT"     x(";I;") = ";
70 INPUT"";XI
75 PRINT"       y(";I;") = ";
80 INPUT"";YI
86 XI=LOG(XI)
87 YI=LOG(YI)
90 XB=XB+XI
100 YB=YB+YI
110 XY=XY+XI*YI
120 X2=X2+XI*XI
125 Y2=Y2+YI*YI
130 NEXT I
140 D=N*X2-XB*XB
150 A=(YB*X2-XY*XB)/D
160 B=(N*XY-XB*YB)/D
170 R2=A*YB+B*XY-(YB*YB/N)
180 R2=R2/(Y2-(YB*YB/N))
181 A=EXP(A)
185 PRINT"     y = a*x^b":PRINT
190 PRINT"          a = ";A
195 PRINT"          b = ";B
200 PRINT"          coefficient of determination = ";R2
205 PRINT
210 INPUT"Enter 0 for another run. ";K
220 IF K=0 THEN CLS:GOTO 10
230 CLS:END
```

## ROOTFHLF.BAS

```bas
1 REM FUNCTION ROOTS HALF-INTERVAL SEARCH
10 CLS:PRINT TAB(10)"Roots of Functions":PRINT TAB(10) "Half-interval Search"
20 PRINT
22 PRINT
23 PRINT"Define the function [DEF FNR(X) = function] IN STATEMENT 31"
30 REM Enter function (DEF FNR(X) ="FUNCTION") HERE
31 DEF FNR(X)=SIN(X)
40 DIM D(3)
50 PRINT"Interval (lower, upper limit ":INPUT"0,0 to end search):";A,B
79 REM test for usable limits entered
80 IF A<>B THEN 120
89 REM end program?
90 IF A=0 THEN 430
100 PRINT"--Interval limits cannot be equal.--":SOUND 600,18
110 PRINT:GOTO 50
120 IF A<B THEN 150
130 PRINT"--Lower limit must be entered first.--":SOUND 600,18
140 PRINT:GOTO 50
150 A1=SGN(FNR(A))
160 B1=SGN(FNR(B))
169 REM test for root at either limit
170 IF A1*B1=0 THEN 360
179 REM test for opposite signs at interval limits
180 IF A1*B1<0 THEN 280
189 REM loop to search 100 numbers for opposite signs in function
190 FOR I=1 TO 1000
200 X=A+RND(2)*(B-A)
210 X1=SGN(FNR(X))
219 REM test for root at random number;  if yes, end search and print
220 IF X1=0 THEN CK=1:I=1000:GOTO 240
229 REM test for opposite signs at random number and lower limit
230 IF A1*X1<0 THEN CK=2:I=1000:GOTO 240
239 REM try another random number
240 NEXT I:ON CK GOTO 400,270
250 PRINT"No change of sign found."
260 GOTO 50
269 REM change of sign found;  calculate root
270 B=X
279 REM store positive point in d(3), negative pooint in d(1);  d(1) and d(3) become interval limits
280 D(2+A1)=A
290 D(2-A1)=B
299 REM calculate midpoint between the two limits
300 Y=(D(1)+D(3))/2
310 Y1=SGN(FNR(Y))
319 REM test for root at midpoint
320 IF Y1=0 THEN 400
329 REM get a new limit to close in on the root
330 D(2+Y1)=Y
339 REM test for a value close enough to zero to assume a root
340 IF ABS(D(1)-D(3))/(ABS(D(1))+ABS(D(3)))<0.000001 THEN 400
349 REM retest with new limits
350 GOTO 300
359 REM root at an interval limit - find which limit and print
360 IF A1=0 THEN 390
370 Y=B
380 GOTO 400
390 Y=A
400 PRINT"     Root = ";Y
410 PRINT
419 REM restart program
420 GOTO 50
430 CLS:END
```

## RUTHEXPT.BAS

```bas
1 CLEAR:REM Rutherford scattering experiment, macro
2 CLS:SCREEN 1:KEY OFF
3 P=3.14159 :PM=P-0.05:PP=P+0.05:P2=2*P
5 WIDTH 40:A%=VAL(MID$(TIME$,7,2)):RANDOMIZE A%
6 LOCATE 7,4
7 PRINT"RUTHERFORD SCATTERING EXPERIMENT":PRINT:PRINT
8 PRINT"          David J Wilson":PRINT"          Department of Chemistry":PRINT"          Vanderbilt University"
9 FOR I=1 TO 4000:NEXT I:CLS
10 LINE (30,97)-(30,90):LINE-(0,90):LINE-(0,110):LINE-(30,110):LINE-(30,103)
11 LINE (30,97)-(20,97):LINE-(20,95):LINE-(10,95):LINE-(10,105):LINE-(20,105):LINE-(20,103):LINE-(30,103)
12 LINE (10,97)-(15,103),1,BF
13 CIRCLE (200,100),119,1,0,PM
14 CIRCLE (200,100),119,1,PP,P2
20 LOCATE 15,1
21 PRINT"Alpha"
22 LOCATE 16,1
23 PRINT"source"
25 LOCATE 18,19
26 PRINT"Au foil"
30 LOCATE 1,32
31 PRINT"Detector"
112 DIM S(8)
113 LOCATE 21,2
114 PRINT"0   1   2   3   4   5   6   7   8"
120 A=0.1
130 XO=15:YO=100:X1=200 :Y1=100:R=119:X2=199:X3=201:Y2=20:Y3=155
140 FOR JJ=1 TO 100
150 Y=RND(1)
155 X=A*SQR(1/Y-1)
160 IF X>P THEN GOTO 150
165 IF RND(1)<0.5 THEN X=-X
170 X4=X1+R*COS(X):Y4=Y1+R*SIN(X)
172 LINE (XO,YO)-(X1,Y1),1:LINE-(X4,Y4),1
190 LINE (XO,YO)-(X1,Y1),0:LINE-(X4,Y4),0
200 LINE (X2,Y2)-(X2,Y3),1:LINE (X3,Y2)-(X3,Y3),1
201 II=INT(ABS(X)*9/P)
202 S(II)=S(II)+1
203 IK=4*II+1
204 LOCATE 22,IK
225 PRINT S(II)
235 NEXT JJ
240 FOR I=1 TO 2000:NEXT I
245 RUN"ruthscat.bas"
250 END
```

## RUTHSCAT.BAS

```bas
1 SCREEN 0:KEY OFF:CLS:WIDTH 40
2 LOCATE 7,1:PRINT"          RUTHERFORD SCATTERING":PRINT:PRINT
5 PRINT:PRINT"          David J Wilson"
6 PRINT"          Department of Chemistry"
7 PRINT"          Vanderbilt University"
8 FOR I=1 TO 3000:NEXT I:CLS
10 LOCATE 3,1:PRINT"     This program calculates and plots"
11 PRINT"the trajectories of alpha particles"
12 PRINT"(charge +2, mass number 4) colliding"
13 PRINT"with the nucleus of a gold atom (charge"
14 PRINT"+79, mass number 197)."
15 FOR I=1 TO 5000:NEXT I
16 DIM U(4,4),X(4,4),DX(2,4),DU(2,4)
17 M1=1:M2=49.25
25 G=-0.1
26 G=G*M1*M2
30 TL=0:TU=10:DT=0.2
45 X(1,1)=0
46 PRINT
50 X(1,2)=14
51 PRINT"The impact parameter of the collision"
52 PRINT"is the distance of closest approach"
53 PRINT"of the alpha particle to the nucleus if"
54 PRINT"there were no repulsive force between"
55 PRINT"them, so that the alpha particle moved"
56 PRINT"in a straight line past the nucleus."
57 PRINT:PRINT"  Select an impact parameter between":PRINT"+ 4 and - 4.  (+4 gives a wide miss;":PRINT"+ 1 gives a very near miss;":PRINT"0 gives a head-on collision.)"
58 INPUT"Impact parameter = ",X(1,3)
60 X(1,4)=0
65 U(1,1)=3
70 U(1,2)=0
75 U(1,3)=0
80 U(1,4)=0
83 SCREEN 1
84 LINE (0,0)-(0,199):LINE-(319,199):LINE-(319,0):LINE-(0,0)
85 T2=2*DT:T5=0.5*DT
95 K1=G/M1:K2=G/M2
96 K3=K2/K1
100 T=TL-DT
105 NT=(TU-TL)/DT
110 T=T+DT
115 K=1
120 L=1
125 GOSUB 5000
130 FOR I=1 TO 4
135 X(2,I)=X(1,I)+DT*DX(1,I)
140 U(2,I)=U(1,I)+DT*DU(1,I)
145 NEXT I
150 K=2:L=2
155 GOSUB 5000
160 FOR I=1 TO 4
165 X(2,I)=X(1,I)+T5*(DX(1,I)+DX(2,I))
170 U(2,I)=U(1,I)+T5*(DU(1,I)+DU(2,I))
175 NEXT I
200 FOR N=2 TO NT
205 T=T+DT
210 L=1:K=2
215 GOSUB 5000
220 FOR I=1 TO 4
225 X(3,I)=X(1,I)+T2*DX(1,I)
230 U(3,I)=U(1,I)+T2*DU(1,I)
235 NEXT I
240 L=2:K=3
245 GOSUB 5000
250 FOR I=1 TO 4
255 X(4,I)=X(2,I)+T5*(DX(1,I)+DX(2,I))
260 U(4,I)=U(2,I)+T5*(DU(1,I)+DU(2,I))
265 NEXT I
266 L=2:K=4:GOSUB 5000
267 FOR I=1 TO 4
268 X(4,I)=X(2,I)+T5*(DX(1,I)+DX(2,I))
269 U(4,I)=U(2,I)+T5*(DU(1,I)+DU(2,I))
270 NEXT I
271 FOR I=1 TO 4
275 X(1,I)=X(2,I)
280 X(2,I)=X(4,I)
285 U(1,I)=U(2,I)
290 U(2,I)=U(4,I)
295 NEXT I
318 GOSUB 4000
320 NEXT N
325 LOCATE 22,1:PRINT"                                       ":PRINT"                                       "
327 LOCATE 22,1
330 PRINT"     Run complete."
331 PRINT"Enter R for another run."
332 A$=INKEY$:IF A$="" THEN GOTO 332
335 IF A$="R" OR    A$="r" THEN GOTO 340
337 CLS:SCREEN 0:LOCATE 1,1:END
340 LOCATE 22,1:PRINT"New impact parameter (>-6 and <+6) = ";
341 INPUT"",X(1,3)
342 X(1,1)=0
343 X(1,2)=14
344 X(1,4)=0
345 U(1,1)=3
346 U(1,2)=0
347 U(1,3)=0
348 U(1,4)=0
349 GOTO 100
4000 REM plotting subroutine
4005 X1=INT(10*X(2,1))
4010 X2=INT(10*X(2,2))
4015 Y1=99-INT(10*X(2,3))
4020 Y2=99-INT(10*X(2,4))
4021 IF(X1<0 OR Y1<0) THEN GOTO 4026
4022 IF X1>639 THEN GOTO 4026
4023 IF Y1>199 THEN GOTO 4026
4025 PSET (X1,Y1)
4026 IF X2<0 OR Y2<0 THEN GOTO 4035
4027 IF X2>639 THEN GOTO 4035
4028 IF Y2>199 THEN GOTO 4035
4030 PSET (X2,Y2)
4035 RETURN
5000 R=(X(K,2)-X(K,1))^2+(X(K,4)-X(K,3))^2
5010 R=R^1.5
5020 DX(L,1)=U(K,1)
5025 DX(L,2)=U(K,2)
5030 DX(L,3)=U(K,3)
5035 DX(L,4)=U(K,4)
5040 DU(L,1)=K1*(X(K,2)-X(K,1))/R
5045 DU(L,2)=-K3*DU(L,1)
5050 DU(L,3)=K1*(X(K,4)-X(K,3))/R
5055 DU(L,4)=-K3*DU(L,3)
5060 RETURN
```

## SHELSORT.BAS

```bas
1 CLS:LOCATE 5,20
10 PRINT"SHELL SORT PROGRAM"
100 DIM A(300)
105 LOCATE 8,1
106 PRINT"This program can sort up to 300 entries."
108 PRINT
110 PRINT"Enter 99999 as data to terminate data entry."
120 K=0
125 K=K+1
130 PRINT"A(";K;") = ";
135 INPUT"";TP
140 IF TP=99999. THEN K=K-1:GOTO 150
145 A(K)=TP:GOTO 125
150 N=K
180 GOSUB 500
190 PRINT:PRINT
195 PRINT"                Sorted list":PRINT
219 K=0
220 FOR I=1 TO N
221 K=K+1
230 PRINT A(I)
231 IF K>=20 THEN INPUT"Touch <return>.";W$:K=0:CLS
240 NEXT I
250 INPUT"Touch <return> to clear screen and terminate run.";W$
255 CLS:END
500 D=1
510 D=2*D
520 IF D<=N THEN GOTO 510
530 D=INT((D-1)/2)
540 IF D=0 THEN GOTO 700
550 FOR I=1 TO N-D
560 J=I
570 L=J+D
580 IF A(J)<=A(L) THEN GOTO 640
590 X=A(J)
600 A(J)=A(L)
610 A(L)=X
620 J=J-D
630 IF J>0 THEN GOTO 570
640 NEXT I
650 GOTO 530
700 RETURN
```

## SIMPINT.BAS

```bas
1 REM simpson's rule integration
10 CLS:PRINT TAB(7)"INTEGRATION BY SIMPSON'S RULE":PRINT
30 PRINT"SELECTION:  1 = known formula for integrand":PRINT TAB(12)"0 = numerical values of integrand"
40 PRINT TAB12;:INPUT"  (1 or 0): ";S
42 IF S=0 THEN 62
49 REM if function is known enter at line 50 {DEFFNC(X) = "FUNCTION"}
50 PRINT"Enter a in Exp[-(x/a)^2]"
55 INPUT"  a = ;";AA
56 C1=1/(AA*SQR(3.1415927#))
60 DEF FN C(X) = C1*EXP(-((X/AA)^2))
62 INPUT"Lower, upper limits of integration  (a, b): ";A,B
80 INPUT"increment dx of x: ";X1
98 REM increment must divide interval into equal subintervals
99 REM if not, change increment
100 IF(B-A)/X1<>INT((B-A)/X1+0.5)THEN PRINT CHR$(7):GOTO 80
110 IF S=1 THEN 150
119 REM formula not known...enter function value at integration limits
120 INPUT"First, last values of f(x): ";Y1,Y2
130 PRINT TAB(15)"Enter values of f(x)"
140 GOTO 170
149 REM formula known...calculate f(x) at integration limits
150 Y1=FN C(A)
160 Y2=FN C(B)
170 C=0
180 D=0
189 REM loop for each subinterval
190 FOR I=1 TO (B-A)/X1-0.5
200 IF S=1 THEN 240
209 REM enter known function value at each interval
210 PRINT"at interval ";I;" (x = ";A+I*X1;");
220 PRINT HTAB30;:INPUT" = ";Y
230 GOTO 250
239 REM calculate f(x) at each subinterval
240 Y=FN C(A+I*X1)
249 REM interval even or odd
250 IF I/2 = INT(I/2) THEN 280
259 REM sum all odd-interval function values
260 C=C+Y
270 GOTO 290
279 REM sum all even-interval function values
280 D=D+Y
290 NEXT I
299 REM compute integral, print
300 PRINT"Integral is ";X1/3*(Y1+4*C+2*D+Y2)
310 END
```

## SPECPROB.BAS

```bas
10 CLEAR:SCREEN 1,0:COLOR 0,1:KEY OFF:CLS
12 S=VAL(RIGHT$(TIME$,2))
14 S=500*S-32000
16 RANDOMIZE S
20 REM nmr spin echo measurements
30 LOCATE 7,12:PRINT"NMR SPECTROSCOPY"
40 LOCATE 9,9:PRINT"SPIN ECHO MEASUREMENTS"
50 LOCATE 13,10:PRINT"David J Wilson"
60 LOCATE 14,10:PRINT"Department of Chemistry"
70 LOCATE 15,10:PRINT"Vanderbilt University"
80 FOR I=1 TO 2000:NEXT I
90 CLS
100 PRINT"  Here you will use the spin echo tech- nique to measure the transverse relax-  ation time T2 of a spin system."
110 PRINT:PRINT"  In spin echo experiments, an initial  90 deg pulse is followed after a time   tau by a 180 deg pulse.  The echo"
120 PRINT"occurs at a time tau after the 180 deg  pulse, and has an amplitude given by":PRINT
130 PRINT"     (Init ampl.)*exp[-2*tau/T2]"
140 PRINT:PRINT"  You may select any positive value for tau, and you may make several runs with different values of tau.  When your ex- periments are complete, tell me what"
150 PRINT"value you calculate for T2, and I'll    let you know whether or not you're      right.  Your answer must be within 5%   of the 'correct' value."
160 PRINT:PRINT"  Touch <return> to go on, please."
170 W$=INKEY$:IF W$="" THEN 170
180 CLS
190 A1=100
200 T2=0.5+7*RND(1)
210 PRINT"What value of tau do you want?"
212 PRINT"(.1 < tau < 20 sec)"
220 INPUT"  tau (sec) = ";TAU
225 IF TAU<0.1 OR TAU>20 THEN GOTO 212
230 A2=-A1*EXP(-2*TAU/T2)
240 IF TAU<0.5 THEN TSC=0.5:GOTO 260
242 IF TAU<2.5 THEN TSC=2.5:GOTO 260
244 IF TAU <5 THEN TSC=5:GOTO 260
246 IF TAU < 10 THEN TSC=10:GOTO 260
248 IF TAU < 25 THEN TSC=20
260 MAX2=TAU*300/TSC
270 W=6:REM linewidth
275 CLS
280 FOR I=0 TO 190 STEP 10
290 LINE (0,I)-(319,I),2
300 NEXT I
301 LINE (0,100)-(319,100),1
302 W2=W*W
304 XM=0:YM=0
310 FOR I=0 TO 319
315 J=I-MAX2
320 Y=A1*EXP(-I*I/W2)+A2*EXP(-J*J/W2)
322 Y=A1-Y
330 LINE (XM,YM)-(I,Y),1
340 XM=I:YM=Y
350 NEXT I
360 LOCATE 1,5:PRINT"Measure, then touch <return>."
370 W$=INKEY$:IF W$="" THEN 370
380 CLS
390 PRINT"Do you want to make another run before  giving me your answer?  (Y/N)"
400 W$=INKEY$:IF W$="" THEN 400
410 IF W$="Y" OR W$="y" THEN GOTO 210
420 PRINT:PRINT"OK, what value for T2 did you get?"
430 INPUT"  T2 (sec) = ";TT2
440 TL=0.95*T2:TB=1.05*T2
450 IF TT2>=TL AND TT2<=TB THEN PRINT"Great.  You got it!":PRINT:GOTO 1000
460 PRINT"No, you missed it.  Remember, "
470 PRINT:PRINT"  Echo amplitude"
480 PRINT"     = Init. amplitude*exp[-2*tau/t2]":PRINT
490 PRINT"Solve this for T2 and plug in the num-  bers."
495 IF NN=2 THEN GOTO 520
500 PRINT"  Try again, please."
502 PRINT"Touch <return> to go on."
504 W$=INKEY$:IF W$="" THEN 504
510 NN=2:GOTO 275
520 PRINT:PRINT"Touch <return>, please."
530 W$=INKEY$:IF W$="" THEN 530
540 CLS
550 PRINT"  Solving for T2 yields":PRINT
558 PRINT"          2*tau"
560 PRINT"  T2 = ----------"
562 PRINT"       ln(-A1/A2)"
570 PRINT:PRINT"  The answer I got was"
580 PRINT"       ";T2;" sec"
590 PRINT:PRINT"Do you want to try this again? (Y/N)"
600 W$=INKEY$:IF W$="" THEN 600
610 IF W$="Y" OR W$="y" THEN CLS:GOTO 110
620 GOTO 1000
1000 PRINT"Touch <return> to go on, please."
1002 W$=INKEY$:IF W$="" THEN 1002
1004 CLS:LOCATE 10,12:PRINT"That's all, folks!"
1010 FOR I=1 TO 2000:NEXT I:CLS
1020 RUN "menu.bas"
```

## SPINECHO.BAS

```bas
10 CLS:CLEAR:SCREEN 1,0:KEY OFF:COLOR 0,1
20 WIDTH 40
30 DIM XX(20),YY(20),X(20),Y(20),W(20),PHI(20)
40 T$=TIME$
50 S=VAL(RIGHT$(T$,2))
60 S=500*S-32000
70 RANDOMIZE S
110 LOCATE 10,11:PRINT"SPIN ECHOES IN NMR"
120 LOCATE 12,10:PRINT"David J Wilson"
130 LOCATE 13,10:PRINT"Department of Chemistry"
140 LOCATE 14,10:PRINT"Vanderbilt University"
150 FOR I=1 TO 3000:NEXT I
160 CLS
161 PRINT"Do you want the spin echo demonstration (D) or the spin echo problem (P)?"
162 W$=INKEY$:IF W$="" THEN 162
164 IF W$="P" OR W$="p" THEN CLS:RUN"specprob.bas"
170 PRINT"  This program demonstrates the behav-  ior of nuclear spins in a slightly in-  homogeneous magnetic field.  With it we"
180 PRINT"can simulate a spin-echo experiment for measuring the true T2 of the nuclei.
190 PRINT
200 PRINT"  You will need to select the true T2   and the interval tau between the init-  ial 90 deg pulse and the inverting 180  deg  pulse.  Also, you need to tell me"
201 PRINT"how many spins you want."
210 PRINT
220 PRINT"  Touch <return> to go on, please."
230 W$=INKEY$:IF W$="" THEN 230
240 CLS
250 PRINT"Select T2 in the range 1-10 sec."
260 INPUT"T2 (sec) = ";T2
270 IF T2<1 OR T2>10 THEN GOTO 250
280 PRINT"Select tau in the range .2 to 5 times   T2, sec."
290 TMIN=0.2*T2:TMAX=5*T2
300 INPUT"tau (sec) = ";TAU
310 IF TAU<TMIN OR TAU>TMAX THEN GOTO 280
311 PRINT"How many spins do you want?  ( < 21)"
312 INPUT"Number of spins = ";Q
313 IF Q>20 THEN GOTO 311
315 GW=8/Q
316 FOR I=1 TO Q
317 W(I)=-4+GW*I+(-0.1+0.2*RND)
318 NEXT I
320 REM 90 deg pulse to get things going
330 CLS
340 LOCATE 25,1:PRINT"90 deg. initiating pulse"
350 X0=160:Y0=80
360 R0=80
370 FOR I=0 TO 80
380 LINE (X0,Y0)-(X0+I,Y0),3
390 NEXT I
391 LOCATE 25,1:PRINT"Free induction decay               "
400 LINE (0,170)-(319,170),3
401 LINE (107,170)-(107,165),3:LINE (212,170)-(212,165),3
410 TMAX=3*TAU
420 DT=TMAX/320
430 Y(1)=80
440 IMAX=320
450 T=0
460 PHI=0
470 ITAU=107
475 LINE (X0,Y0)-(X0+80,Y0),0
480 FOR I=1 TO 320
490 IF I=ITAU THEN PHI=3.14159:LOCATE 25,1:PRINT"180 deg pulse             "
491 IF I=ITAU+2 THEN LOCATE 25,1:PRINT"Free induction decay.          "
495 IF I=2*ITAU THEN LOCATE 25,1:PRINT"There's the echo.      "
500 T=T+DT
510 EX=EXP(-T/T2)
520 R=R0*EX
530 ARG=I*0.0594
540 SIG=0
550 FOR J=1 TO Q
560 LINE (X0,Y0)-(X(J),Y(J)),0
570 NEXT J
575 IF I=ITAU THEN GOSUB 1000
580 FOR J=1 TO Q
590 CS=COS(W(J)*ARG+PHI(J)):SN=SIN(W(J)*ARG+PHI(J))
600 XX(J)=R*CS:YY(J)=R*SN
610 X(J)=X0+XX(J):Y(J)=Y0+YY(J)
620 SIG=SIG+XX(J)
630 NEXT J
640 FOR J=1 TO Q
650 LINE (X0,Y0)-(X(J),Y(J)),3
660 NEXT J
670 SIG=SIG*0.375/Q
680 PSET (I,170-SIG),3
690 NEXT I
700 W$=INKEY$:IF W$="" THEN 700
701 CLS
702 PRINT"Do you want to do a problem on spin     echo?  (Y/N)";
704 W$=INKEY$:IF W$="Y" OR W$="y" THEN CLS:RUN "specprob.bas"
710 IF W$="n" OR W$="N" THEN CLS:RUN"menu.bas"
720 GOTO 704
1000 FOR K=1 TO Q
1010 PHI(K)=ATN(XX(K)/YY(K))*2
1020 NEXT K
1030 RETURN
```

## TRIDIAG.BAS

```bas
5 REM menu program for basic programs on this diskette
10 CLS
15 PRINT"The following programs are on this diskette:":PRINT
20 PRINT"1. DOS 2.05"
25 PRINT"2. BASICA"
30 PRINT"3. Menu"
35 PRINT"4. Bubble sort"
40 PRINT"5. Shell sort"
45 PRINT"6. Matrix inversion"
50 PRINT"7. Matrix diagonalization"
55 PRINT"8. Analytical material balance"
60 PRINT"9. Gamma(x)"
65 PRINT"10. Linear equations solver"
70 PRINT"11. Error analysis program"
75 PRINT"12. Root finder, halving method"
80 PRINT"13. Root finder, Newton's method"
85 PRINT"14. Simpson's rule integration"
90 PRINT"15. Tridiagonal systems of linear equations"
500 PRINT
505 PRINT"Please enter the number of the program you wish to run."
510 INPUT"";N
515 ON N GOTO 500,500,550,555,560,565,570,575,580,585,590,595,600,605,610,615,620,625
520 END
550 RUN"menuprog"
555 RUN"bublsort"
560 RUN"shelsort"
565 RUN"matrinv"
570 RUN"matrdiag"
575 RUN"materbal"
580 RUN"gamma(x)"
585 RUN"lineqns"
590 RUN"erranal"
595 RUN"rootfhlf"
600 RUN"newtonrt"
605 RUN"simpint"
610 RUN"tridiag"
```

## TWOMEANS.BAS

```bas
1 REM this program compares two means
2 CLS:LOCATE 5,20
11 PRINT"COMPARE TWO MEANS"
18 LOCATE 8,1
19 PRINT"  This program compares the means of two populations and tests the"
20 PRINT"hypothesis that mean(1) = mean(2)."
25 M1=0:M2=0:S1=0:S2=0
27 PI=3.1415927#
30 FOR I=1 TO 3000:NEXT I
31 PRINT"Size of population 1 = n1.  n1 = ";
32 INPUT"";N1
40 PRINT"Size of population 2 = n2.  n2 = ";
41 INPUT"";N2
50 PRINT:PRINT"Input data of population 1"
55 FOR I=1 TO N1
60 PRINT"     x1(";I;") = ";:INPUT X
65 M1=M1+X
70 S1=S1+X*X
75 NEXT I
77 PRINT
80 PRINT"Input data of population 2"
85 FOR I=1 TO N2
90 PRINT"     x2(";I;") = ";:INPUT X
95 M2=M2+X
100 S2=S2+X*X
105 NEXT I
110 T1=(S1-M1*M1/N1)/(N1-1)
120 T2=(S2-M2*M2/N2)/(N2-1)
125 T1=SQR(T1)
130 T2=SQR(T2)
135 A1=M1/N1
136 PRINT
137 A2=M2/N2
138 PRINT"     m1 = ";A1
140 PRINT"          sigma1 = ";T1
141 PRINT"          sigma(mean)1 = ";T1/SQR(N1-1)
142 PRINT
145 PRINT"     m2 = ";A2
150 PRINT"          sigma2 = ";T2
151 PRINT"          sigma(mean)2 = ";T2/SQR(N2-1)
160 S=(S1-M1*M1/N1+S2-M2*M2/N2)/(N1+N2-2)
170 S=SQR(S)
180 T=(A1-A2)/(S*SQR((1/N1)+(1/N2)))
190 PRINT"     t = ";T
200 NU=N1+N2-2
210 X=NU/2
220 GOSUB 1000:REM gamma(.5*nu)
230 C=1/(G5*SQR(PI*NU))
240 X=(NU+1)/2
250 GOSUB 1000:REM gamma(.5*(nu+1))
255 B=(NU+1)/2
260 C=C*G5
270 DT=0.01
290 TP=ABS(T)
300 S=(1+(TP*TP/NU))^(-B)
310 J=-1
320 FOR I=1 TO 600
330 J=-J
340 TP=TP+DT
360 S=S+(3+J)*((1+(TP*TP/NU))^(-B))
370 NEXT I
375 S=S-((1+(TP*TP/NU))^(-B))
380 S=S*C*DT/3
390 PRINT"     S = ";S
400 PRINT"   2*s = ";2*S
410 PRINT:PRINT"Touch <return>, please.":INPUT"";W$
420 CLS:END
1000 REM gamma functions
1210 P7=PI
1220 IF(X<0)THEN GOTO 1270
1230 Y=X+4
1240 G2=SQR(2*P7/Y)*EXP(Y*LOG(Y)+(1-1/(30*Y*Y))/(12*Y)-Y)
1250 G5=G2/(X*(X+1)*(X+2)*(X+3))
1260 RETURN
1270 REM negative argument
1280 K5=0
1290 G3=X
1300 IF(X>=0)THEN GOTO 1340
1310 K5=K5+1
1320 X=X+1
1330 GOTO 1300
1340 GOSUB 1200
1350 FOR J=1 TO K5
1360 X=X-1
1370 G5=G5/X
1380 NEXT J
1390 X=G3
1400 RETURN
```

## XRAYDIF1.BAS

```bas
1 REM x-ray scattering interference relationships
2 KEY OFF:CLEAR:WIDTH 40:SCREEN 1,0:COLOR 0,1:CLS
3 LOCATE 7,2:PRINT"X-RAY DIFFRACTION PHASE RELATIONSHIPS":PRINT:PRINT
4 PRINT:PRINT:PRINT"          David J Wilson"
5 PRINT"          Department of Chemistry"
6 PRINT"          Vanderbilt University"
7 FOR I=1 TO 3000:NEXT I:CLS
40 FOR I=1 TO 7
45 XU=-24+46*I
50 PSET (XU,130),1
55 CIRCLE (XU,130),5
60 PSET (XU,180),1
65 CIRCLE (XU,180),5
70 NEXT I
72 LOCATE 21,1:PRINT"The crystal lattice"
73 LOCATE 20,33:PRINT"d"
74 LINE (253,130)-(253,180):LINE (251,130)-(255,130):LINE (251,180)-(255,180)
80 LOCATE 1,1
82 INPUT"Theta (10 - 45 deg) = ";TT:TT=TT*3.14159/180
85 INPUT"Wavelength (2 - 10 Angstroms) = ";LA
87 LA=LA*1.5
90 LOCATE 1,1:PRINT"The lattice spacing of this crystal is":PRINT"5.6569 Angstroms.  Write this down.     Touch <return>, please."
93 A$=INKEY$:IF A$="" THEN 93
95 FOR I=1 TO 6
96 LOCATE I,1:PRINT"                                       "
97 NEXT I
98 LOCATE 1,1:PRINT"Here come the X-rays."
99 FOR I=1 TO 3000:NEXT I:LOCATE 1,1:PRINT"                                       "
100 X1=0:Y1=131-175*SIN(TT)
110 X2=160:Y2=131
120 X3=319:Y3=Y1:NR=0
121 LINE (X1,Y1)-(X2,Y2):LINE-(X3,Y3)
123 DD=50*SIN(TT)
130 GOTO 170
140 Y1=Y1+50:Y2=Y2+50:Y3=Y3+50
150 X1=0
152 LINE (X1,Y1)-(X2,Y2):LINE-(X3,Y3)
160 DD=0
170 A=0.2
175 YP=Y1:VV=0
190 S1=(Y2-Y1)/(X2-X1)
200 S2=(Y3-Y2)/(X3-X2)
210 B=10
220 NU=1/LA
225 NS=2
230 FOR X=X1 TO X3 STEP NS
240 U=EXP(A*(X-X2))
250 Y=(Y1+S1*(X-X1))/(1+U)
260 Y=Y+(Y2+S2*(X-X2))/(1+1/U)
270 TH=ATN((Y-YP)/NS):CC=COS(TH):SS=SIN(TH)
271 YZ=Y-YP: VV=VV+SQR(NS*NS+YZ*YZ)
280 SV=SIN(NU*(VV-DD)):YY=Y-B*CC*SV
290 XX=X+B*SS*SV
310 PSET(XX,YY),3
320 YP=Y
330 NEXT X
340 NR=NR+1
345 IF NR=1 THEN LOCATE 21,1:PRINT"                         "
350 IF NR=1 THEN 140
360 A$=INKEY$:IF A$="" THEN 360
365 CLS:END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0391

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT        64   1-06-85  11:47a
    MENU     BAS      2048   1-01-80  12:52a
    NMRFOURT BAS      1664   1-01-80  12:31a
    NMRAPP   PIC     16512   1-01-80   8:25a
    NMREXEC  BAS      1280   1-01-80   6:05a
    NMRAPP2  PIC     16512   1-01-80  12:57a
    NMRROT   BAS      1920   1-01-80  12:36a
    NMR-ABC  BAS      4864   1-01-80   5:59a
    NMR-ABCD BAS      6144   1-01-80   6:01a
    SPINECHO BAS      2560   1-01-80   2:38a
    NMREXCH  BAS      1792   1-01-80   6:08a
    LARMOR   BAS      9344   1-01-80   5:49a
    NMRRELAX BAS      2688   1-01-80   6:13a
    MULTPULS BAS      9344   1-01-80   6:15a
    NMR-WEFT BAS      3584   1-01-80   6:17a
    OFFRES   BAS      1280   1-01-80   3:05a
    ADIABAT  BAS      1664   1-01-80   1:08a
    NMRPHASE BAS      2048   1-01-80  12:13a
    INVRECOV BAS      3072   1-01-80   5:03a
    GATDECUP BAS      2688   1-01-80   5:14a
    SPECPROB BAS      2816   1-01-80   2:11a
    RUTHSCAT BAS      2944  12-31-84   3:03p
    RUTHEXPT BAS      1152  12-31-84   4:48p
    XRAYDIF1 BAS      1664   1-01-80  12:19a
    L2FILMS  BAS      2688   1-01-80   1:02a
    MORSECRV BAS       768   1-01-80  12:32a
    DIFFCAP  BAS      2048   1-01-80   1:42a
    BASHADAM BAS      2816   1-01-80  12:54a
    BUBLSORT BAS       512   8-04-84  10:55a
    SHELSORT BAS       768   1-01-80   6:49a
    MATRINV  BAS       640   8-04-84  11:16a
    MATRDIAG BAS      1536   8-04-84   2:01p
    MATERBAL BAS      1536   1-01-80  12:57a
    GAMMA(X) BAS       768   1-01-80   1:06a
    LINEQNS  BAS       896   1-01-80   7:22a
    ERRANAL  BAS      1408   1-01-80   7:44a
    ROOTFHLF BAS      1920   1-01-80  12:41a
    NEWTONRT BAS      1664   1-01-80  12:03a
    SIMPINT  BAS      1536   1-01-80  12:13a
    TRIDIAG  BAS      1024   1-01-80   1:43a
    CUBICSPL BAS      1536   1-01-80  12:45a
    NUMDIFF  BAS      1024   1-01-80   1:06a
    FOURIER  BAS      7552   1-01-80   4:49a
    INTERP4  BAS      1152   1-01-80   1:49a
    MOMSKKUR BAS       640   8-04-84   2:38p
    CHISQDIS BAS       768   8-04-84   2:26p
    LINLSQR  BAS       640   8-04-84   2:49p
    EXPFIT   BAS       640   8-04-84   3:06p
    BASTAT2V BAS      1024   1-01-80   1:03a
    CUBICFIT BAS      1536   1-01-80  12:25a
    CURVEFIT BAS      1280   1-01-80   1:32a
    LOGCURVE BAS       640   1-01-80  12:15a
    POWRCURV BAS       768   1-01-80  12:41a
    LSQPARAB BAS      1536   1-01-80   2:17a
    LINREGR  BAS      1920   1-01-80   3:36a
    TWOMEANS BAS      1792   1-01-80   4:10a
    LEGENDRE BAS       640  12-13-84  12:17a
    DEBYESOL BAS       768  12-13-84  12:32a
    HARMOSC  BAS       640  12-13-84  12:51a
    ERFERFC  BAS       896  12-13-84   2:47a
    BESSELJN BAS      1152  12-13-84   3:22a
    BESSELYN BAS      1408  12-13-84   4:52a
    LSQREXP  BAS      1024  12-13-84   8:35a
    INTERP3  BAS      1024   1-01-80   2:14a
    BR2DIFFN BAS       640   1-01-80   1:38a
    FILES391 TXT      4027  10-24-85   1:07p
           66 file(s)     158843 bytes
                          138240 bytes free
