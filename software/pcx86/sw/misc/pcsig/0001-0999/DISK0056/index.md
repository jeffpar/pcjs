---
layout: page
title: "PC-SIG Library Disk #56"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0056/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0056"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "KEYBOARD UTILITIES 1"

    This assortment of BASIC language programs gives you animation,
    word processing, a filing system, and more.  This disk has good
    stuff for those interested in exploring the capabilities of the
    BASIC language.  The keyboard programs serve to give the user
    an on-screen status display of the CAPS LOCK and NUM LOCK keys,
    and are meant for use with BASIC and the Volkswriter word
    processing program.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start:  To run an EXE program simply type its name and press
    <ENTER>. To read DOC files, enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    BASIC-KB ASM  Assembly language source for BASIC-KB.EXE
    BASIC-KB DOC  Documentation for BASIC-KB.BAS
    BASIC-KB EXE  Executable program file
    SPEECH   BAS  IPCO Produces test of speech
    DISTAR   BAS  IPCO Computes stellar parameters
    XMASCARD BAS  IPCO Animated Christmas card
    DECIDE   BAS  IPCO Decision maker
    MINI-WP  BAS  Mini word processor
    KEYBOARD DOC  Documentation for KEYBOARD.BAS
    KEYBOARD EXE  Executable program file
    KEYBOARD ASM  Assembly language source for KEYBOARD.EXE
    ADDR-PH  BAS  IPCO Filing system for names, addresses & phone #s
    PROVERB1 BAS  IPCO Prints proverbs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDR-PH.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(21)"ADDRESSES AND PHONE NUMBERS 6005-A.BAS"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 '    ***************************************************************
250 '    *                                                             *
260 '    *    FILING PROGRAM FOR NAMES, ADDRESSES AND PHONE NUMBERS    *
270 '    *                                                             *
280 '    *    The program uses a bubble sort to alphabetize and a      *
290 '    *     search loop to find a particular name.                  *
300 '    *                                                             *
310 '    ***************************************************************
320 '
330 '
340 DIM N$(20)
350 DIM A$(20)
360 DIM T$(20)
370   READ N                '*********************************
380   FOR I = 1 TO N        '*  ENTER THE DATA INTO 3 ARRAYS *
390     READ N$,A$,T$       '*                               *
400     N$(I) = N$          '*  AN ARRAY FOR THE NAMES       *
410     A$(I) = A$          '*               THE ADDRESSES   *
420     T$(I) = T$          '*               THE PHONE #     *
430  NEXT I                 '*********************************
440 '
450 '
460  FOR I = 2 TO N         '*****************************************
470   K = I                 '*                                       *
480   J = I-1               '*    THE BUBBLE SORT WHICH SORTS EACH   *
490   N$(0) = N$(K)         '*            ARRAY IN TANDEM            *
500   WHILE N$(J) > N$(K)   '*                                       *
510     SWAP N$(J), N$(K)   '*****************************************
520     SWAP A$(J), A$(K)
530     SWAP T$(J), T$(K)   ' NOTE: N$(0) is a sentinel value
540     K = J
550     J = J - 1
560   WEND
570  NEXT I
580 '
590 '
600 PRINT "FOR A LISTING OF ALL ENTRIES, ENTER A"  '***********************
610 PRINT "TO PRINT A PARTICULAR ENTRY, ENTER B"   '*                     *
620 PRINT "TO QUIT, ENTER C"                       '*     THIS IS THE     *
630 INPUT Z$                                       '*                     *
640 IF Z$ = "A" OR Z$ = "a" THEN GOSUB 700         '*         MENU        *
650 IF Z$ = "B" OR Z$ = "b" THEN GOSUB 800         '*                     *
660 IF Z$ = "C" OR Z$ = "c" THEN END               '***********************
670 GOTO 600
680 '
690 '
700 PRINT " "
710 FOR I = 1 TO N
720   PRINT N$(I)               '******************************************
730   PRINT A$(I)               '*                                        *
740   PRINT T$(I)               '*  THIS SUBROUTINE PRINTS THE LIST OF    *
750   PRINT " "                 '*       ENTRIES THAT HAVE BEEN           *
760 NEXT I                      '*            ALPHABETIZED                *
770 RETURN                      '*                                        *
780                             '******************************************
790 '
800 INPUT "WHOSE NUMBER ARE YOU LOOKING FOR"; S$   '***********************
810 I = 1                                          '*                     *
820 N$(N+1) = S$                                   '*   THE SEARCH LOOP   *
830 WHILE N$(I) <> S$                              '*                     *
840    I = I + 1                                   '***********************
850 WEND
860 IF I = N + 1 THEN GOTO 940
870 PRINT " "                    'NOTE: N$(N+1) is a sentinel which ends
880 PRINT N$(I)                  '      an unsuccessful search. You put
890 PRINT A$(I)                  '      whatever you are looking for at the
900 PRINT T$(I)                  '      very end of the array so the search is
910 PRINT " "                    '      sure to end. Otherwise you will search
920 RETURN                       '      off the end of the error and get an
930                              '      error message.
940 PRINT
950 PRINT
960 PRINT "NOT FOUND - remember that spacing and capitalization must be                                identical to that in the data statement":PRINT
970 GOTO 600
980 '          *************************************************************
990 '          *                                                           *
1000 '          *   ENTER THE DATA HERE --- BE SURE TO UPDATE THE NUMBER    *
1010 '          *                OF ENTRIES IN LINE #685                    *
1020 '          *                                                           *
1030 '          *************************************************************
1040 '
1050 '
1060 DATA 5
1070 DATA SMITH RAY, 6 HICKORY STICK APT HARRIS NY, 587-6687
1080 DATA TAMARINE BRIAN, 555 HARVARD STREET BOSTON MA 55138, 655-866-9887
1090 DATA BARTHOL MURRAY, 44123 TAM O`SHANTER DR. SUNNY CA 96664, 714-555-5660
1100 DATA ANESHANSELY DAN, SOMEWHERE IN ITHACA, ###########
1110 DATA JOHNSON RUTH, 441 EAST 25nd ST NY NY, 212-455-0338
1120 END
```

## DECIDE.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(34)"DECIDE #2001"
140 COLOR 23
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
250 CLEAR 500
260 MD=10
270 DIM L$(MD),F$(MD),V(MD),C(MD,MD),D(MD),Z(MD)
280 E$="END"
290 GOSUB 1530
300 PRINT "I CAN HELP YOU MAKE A DECISION.  ALL I NEED TO DO IS ASK SOME QUESTIONS AND THENANALYZE THE INFORMATION YOU GIVE."
310 PRINT:PRINT TAB(10) STRING$(60,205):PRINT
320 PRINT "WHICH OF THESE BEST DESCRIBES THE TYPE OF DECISION FACING YOU?"
330 PRINT :PRINT "  1) CHOOSING AN ITEM FROM VARIOUS ALTERNATIVES."
340 PRINT "  2) CHOOSING A COURSE OF ACTION FROM VARIOUS ALTERNATIVES."
350 PRINT "  3) MAKING A `YES' OR `NO' DECISION."
360 PRINT :PRINT"WHICH ONE (1,2, OR 3)?":
370 R$=INKEY$:IF R$="" THEN 370
380 T=VAL(R$):IF T<1 OR T>3 THEN 370
390 PRINT  T:GOSUB 1530
400 FOR J=1 TO 9:R$=INKEY$:NEXT:ON T GOTO 410,430,440
410 PRINT"WHAT TYPE OF ITEM MUST YOU DECIDE UPON?"
420 INPUT T$:GOTO 470
430 T$="COURSE OF ACTION":GOTO 470
440 T$="'YES' OR 'NO'"
450 NI=2:L$(1)="DECIDING YES":L$(2)="DECIDING NO"
460 GOTO  690
470 GOSUB 1530:NI=0
480 PRINT"I NEED TO HAVE A LIST OF EACH ";T$;" UNDER CONSIDERATION.":PRINT
500 PRINT"INPUT THEM ONE AT A TIME IN RESPONSE TO EACH QUESTION MARK.  THE ORDER IN WHICH   YOU INPUT THEM HAS NO SPECIAL SIGNIFICANCE."
520 PRINT :PRINT"TYPE THE WORD `";E$;"' TO INDICATE THAT THE WHOLE LIST HAS BEEN ENTERED.":PRINT
530 IF NI>=MD THEN PRINT "--LIST FULL--":GOTO  570
540 NI=NI+1:INPUT L$(NI)
550 IF L$(NI)<>E$ THEN 530
560 NI=NI-1
570 IF NI>=2 THEN 600
580 PRINT :PRINT"YOU MUST HAVE AT LEAST 2 CHOICES!":PRINT
590 PRINT"TRY AGAIN":GOSUB 1550:GOTO 470
600 GOSUB 1530:PRINT"O.K. HERE'S THE LIST YOU'VE GIVEN ME:":PRINT
610 FOR J=1 TO NI:PRINT"  ";J;CHR$(24);") ";L$(J):NEXT:PRINT
620 FOR J=1 TO 9:R$=INKEY$:NEXT:PRINT"IS THIS LIST CORRECT (Y OR N) ?";
630 R$=INKEY$:IF R$="" THEN 630
640 IF R$="Y" THEN PRINT "YES":GOTO 690
650 IF R$="N" THEN PRINT"NO"
660 IF R$="N" THEN PRINT:PRINT"THE LIST MUST BE RE-ENTERED"
670 IF R$="N" THEN GOSUB 1550:GOSUB 470
680 GOTO 630
690 GOSUB 1530:FOR J=1 TO 9:R$=INKEY$:NEXT
700 PRINT"NOW, THINK OF THE DIFFERENT FACTORS ";
710 IF T<3 THEN PRINT"THAT ARE IMPORTANT TO YOU IN CHOOSING THE BEST ";T$;"."
730 IF T=3 THEN PRINT" THAT ARE IMPORTANT TO YOU IN DECIDING ";T$;"."
740 PRINT :PRINT"INPUT THEM ONE AT A TIME IN RESPONSE TO EACH QUESTION MARK.":PRINT
750 PRINT"TYPE THE WORD`";E$;"' TO TERMINATE THE LIST."
760 PRINT :NF=0
770 IF NF>=MD THEN PRINT"--LIST FULL --":PRINT:GOTO 810
780 NF=NF+1:INPUT F$(NF)
790 IF F$(NF)<>E$ THEN 770
800 NF=NF-1:PRINT
810 IF NF<1 THEN PRINT"YOU MUST HAVE AT LEAST ONE ! REDO IT"
820 IF NF<1 THEN GOSUB 1550:GOTO 690
830 GOSUB 1530: PRINT"HERE'S THE LIST OF FACTORS YOU GAVE ME:":PRINT
840 FOR J=1 TO NF:PRINT "  ";J;CHR$(24);") ";F$(J):NEXT:PRINT
850 PRINT"DECIDE WHICH FACTOR ON THE LIST IS THE MOST IMPORTANT AND INPUT IT'S NUMBER.     (TYPE 0 IF THE LIST NEEDS TO BE CHANGED."
870 PRINT
880 INPUT A:A=INT(A):IF A=0 THEN 690
890 IF A>NF OR A<0 THEN 830
900 GOSUB 1530:IF NF=1 THEN 1020
910 PRINT"NOW LET'S SUPPOSE WE HAVE A SCALE OF IMPORTANCE RANGING FROM 0 TO 10."
930 PRINT:PRINT"  WE'LL GIVE ";F$(A);" A VALUE OF 10 SINCE ";F$(A)
950 PRINT" WAS RATED THE MOST IMPORTANT.":PRINT
960 PRINT"ON THIS SCALE, WHAT VALUE OF IMPORTANCE WOULD THE OTHER FACTORS HAVE?"
980 FOR J=1 TO NF:IF J=A THEN 1010
990 PRINT:PRINT F$(J):INPUT THE (J)
1000 IF V(J)<0 OR V(J)>10 THEN
1010 NEXT
1020 V(A)=10:Q=O:FOR J=1 TO NF:Q=Q+V(J):NEXT:FOR J=1 TO NF
1030 V(J)=V(J)/Q:NEXT:GOSUB 1530
1040 IF T<>3 THEN PRINT"EACH ";T$;
1050 IF T=3 THEN PRINT"DECIDING `YES' OR DECIDING `NO' ";
1060 PRINT " MUST NOW BE COMPAIRED WITH RESPECT TO EACH IMPORTANCE FACTOR."
1080 PRINT "WE'LL CONSIDER EACH FACTOR SEPARATELY AND THEN RATE";
1090 IF T<>3 THEN PRINT" EACH ";T$" IN TERMS";
1100 IF T=3 THEN PRINT"DECIDING `YES' OR DECIDING `NO' IN TERMS ";
1110 PRINT " OF THAT FACTOR ONLY.":PRINT
1120 PRINT "LET'S GIVE ";L$(1);" A VALUE OF 10 ON EVERY SCALE.  THE OTHER ";T$;" UNDER CONSIDERATION WILL BE ASSIGNED A VALUE HIGHER OR LOWER THAN 10."
1150 PRINT " THIS VALUE DEPENDS ON HOW MUCH YOU THINK IT IS BETTER OR WORSE THAN ";L$(1);"."
1180 PRINT " ********* (HIT ANY KEY TO CONTINUE)"
1190 R$=INKEY$:IF R$="" THEN 1190
1200 FOR J=1 TO NF
1210 PRINT  TAB(8);STRING$(25,"-")
1220 PRINT "CONSIDERING ONLY ";F$(J);" AND ASSIGNING 10 TO ";L$(1);" ;"
1240 PRINT "WHAT VALUE WOULD YOU ASSIGN TO ";
1250 FOR K=2 TO NI
1260 PRINT L$(K);:INPUT C(K,J):IF C(K,J)>=0 THEN 1280
1270 PRINT "  -- NEGATIVE VALUES NOT LEGAL --":GOTO 1260
1280 NEXT:PRINT:C(1,J)=10:NEXT
1290 FOR J=1 TO NF:Q=0:FOR K=1 TO NI
1300 Q=Q+C(K,J):NEXT:FOR K=1 TO NI
1310 C(K,J)=C(K,J)/Q:NEXT:NEXT
1320 FOR K=1 TO NI:D(K)=0:FOR J=1 TO NF
1330 D(K)=D(K)+C(K,J)*V(J):NEXT:NEXT
1340 MX=0:FOR K=1 TO NI
1350 IF D(K)>MX THEN MX=D(K)
1360 NEXT:FOR K=1 TO NI:D(K)=D(K)*100/MX:NEXT
1370 FOR K=1 TO NI:Z(K)=K:NEXT:NM=NI-1
1380 FOR K=1 TO NI:FOR J=1 TO NM:N1=Z(J):N2=Z(J+1): IF D(N1)>D(N2) THEN 1400
1390 Z(J+1)=N1:Z(J)=N2
1400 NEXT:NEXT:J1=Z(1):J2=Z(2):DF=D(J1)-D(J2):GOSUB 1530
1410 PRINT L$(J1);
1420 PRINT" COMES OUT BEST";
1430 IF DF<5 THEN PRINT " BUT IT'S VERY CLOSE.":GOTO 1470
1440 IF DF<10 THEN PRINT" BUT IT'S FAIRLY CLOSE.":GOTO 1470
1450 IF DF<20 THEN PRINT" BY A FAIR AMOUNT.":GOTO 1470
1460 PRINT" QUITE DECISIVELY."
1470 PRINT TAB(16)"******* HERE IS THE FINAL LIST IN ORDER ********"
1480 PRINT L$(J1);" HAS BEEN GIVEN A VALUE OF 100 AND THE OTHERS RATED ACCORDINGLY."
1500 PRINT TAB(10) STRING$(60,205)
1510 FOR J=1 TO NI:Q=Z(J):PRINT D(Q),L$(Q):NEXT
1520 END
1530 FOR J=1 TO 400:NEXT
1540 CLS:PRINT TAB(26);"DECIDE":PRINT:RETURN
1550 FOR J=1 TO 1500:NEXT:RETURN
```

## DISTAR.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(30)"DISTAR  7005-A.BAS "
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240  KEY OFF  '    "DISTAR" of August 9, 1982, For Pittsburgh in 1982   JJS
250  C1=5:P=57.29578:LAT1=42.48/P:LONG1=80.22/P:IN=99.3324  '0Z Dec 30 81
260  CLS:PRINT TAB(24);CHR$(34);"DISTAR";CHR$(34);" computes:": LOCATE 3,5
270  PRINT "1. Great Circle Distance and the Initial Heading.": Y2=0
280  PRINT TAB(5);"2. Current Position of a star, given its celestial address."
290  PRINT: INPUT "     Enter your choice ", CHOICE
300  IF CHOICE <>1 AND CHOICE <>2 THEN 240 ELSE PRINT
310  PRINT "       Entries can be made either in decimal degrees or in "
320  PRINT "       Degrees, Minutes and Seconds, separated by colons."
330 PRINT: PRINT TAB(5);"Hit 'Enter' if the reference point is to be ";
340 PRINT "the Pittsburgh Airport" :PRINT
350 INPUT "     Otherwise enter Latitude of new reference point ",A$
360 IF A$="" THEN LOCATE 13: PRINT SPC(23);: GOTO 400
370 GOSUB 1010: LAT1=L/P: PRINT TAB(36);
380 INPUT "and its Longitude ",A$: GOSUB 1010: IF L<0 THEN L=L+360
390 LONG1=L/P:PRINT TAB(20)
400 IF CHOICE=2 THEN PRINT " Both date and time are necessary":PRINT:GOTO 510
410 PRINT TAB(24);:INPUT "Enter Latitude of destination ",A$:GOSUB 1010:LAT2=L/P
420 PRINT TAB(42);:INPUT "& longitude ",A$:GOSUB 1010:PRINT:IF L<0 THEN L=L+360
430 LONG2=L/P:IF ABS(LAT1)>1.58 OR ABS(LAT2)>1.58 THEN PRINT "Where?":GOTO 490
440 GOSUB 1080:SM=INT(NM*11.5+.5)/10:KM=INT(NM*18.5+.5)/10:N=INT(10*NM+.5)/10
450 IF NM>3 THEN 470 ELSE PRINT:PRINT "Distance is";CINT(100*NM)/100;"NM, or";
460 PRINT CINT(NM*6076.1);"feet and, the direction is";CINT(AZ): GOTO 490
470 LOCATE 19:PRINT "Great Circle Distance is ";N;"NM   ";SM;"SM   ";KM;"KM"
480 PRINT:PRINT "Initial Heading is ";:PRINT USING "###";AZ;:PRINT CHR$(248)
490 LOCATE 24:LINE INPUT "'A' for another, anything else for the Menu  ";Y$
500 IF Y$<>"A" AND Y$<>"a" THEN 250 ELSE CLS: LOCATE 13,1: GOTO 410
510 PRINT "The computer date is ";DATE$;:INPUT "    Correct or hit Enter ",D$
520 IF D$="" THEN 530 ELSE DATE$=D$+"-82"
530 PRINT "Computer time EST is ";TIME$;:INPUT "      Correct or hit Enter ",T$
540 Z2$="###.#"+CHR$(248):Z1$="+##.#"+CHR$(248): IF T$<>"" THEN TIME$=T$
550 PRINT: INPUT "Enter Sidereal Hour Angle in Degrees ",A$:GOSUB 1010: SHA=L
560 INPUT "   Also, enter declination with sign ",A$:GOSUB 1010: DEC=L
570 '       DAYS ELAPSED SINCE START OF YEAR
580 X = VAL(LEFT$(DATE$,2)):            LAT2=DEC/P:IF ABS(LAT2)>1.565 THEN 490
590 IF X>1 THEN D= 31: IF X> 2 THEN D= 59:IF X> 3 THEN D= 90:IF X>4 THEN D=120
600 IF X>5 THEN D=151: IF X> 6 THEN D=181:IF X> 7 THEN D=212:IF X>8 THEN D=243
610 IF X>9 THEN D=273: IF X>10 THEN D=304:IF X>11 THEN D=334
620 D1=D + VAL(MID$(DATE$,4,2)):GOSUB 940:CLS:GOSUB 740: P$=DATE$
630 '            SCREEN PRINTING ROUTINE
640 IF P$<>DATE$ THEN 570
650 IF Y2<1 AND ABS(H)<.01 THEN H=-H:Y2=2:GOSUB 740
660 LOCATE 3,2:PRINT "EST time is ";TIME$;TAB(30);"LHA of Aries is ";
670 PRINT USING Z2$;R2;:PRINT TAB(59);"GHA of Aries is ";: PRINT USING Z2$;R1
680 LOCATE 7,10:PRINT "For a celestial object of SHA ";:PRINT USING Z2$;SHA;
690 PRINT " and Declination of ";:PRINT USING "+##.#";DEC: LOCATE 11,3
700 PRINT "Its Elevation is ";:PRINT USING Z1$;H;:PRINT " at an Azimuth of ";
710 PRINT USING Z2$;AZ;:PRINT " and Local Hour Angle of ";:PRINT USING Z2$;LHA
720 Z$=INKEY$:IF Z$="A" OR Z$="a" THEN CLS:LOCATE 10,10:GOTO 550
730 IF Z$>CHR$(31) THEN 250 ELSE GOSUB 940: GOTO 630
740 '            RISING AND SETTING
750 LOCATE 15,4:W1=ABS((LAT1-LAT2)*P):W2=ABS((LAT1+LAT2)*P)
760 IF W1>90 THEN PRINT "And it never rises at this latitude":   GOTO 920
770 IF W2>90 THEN PRINT "And it never sets at this latitude":    GOTO 920
780 X=SIN(LAT2)/COS(LAT1):GOSUB 1190:AZR=CINT(Z*P):AZS=360-AZR:K=15.04107
790 X=SIN(Z)/COS(LAT2):IF ABS(X)<.99999 THEN GOSUB 1210 ELSE Z=0
800 Z1=90/P-Z:E1=Z1*P:IF DEC>0 THEN E1=180-E1
810 IF H<0 THEN TR=T+(360-E1-LHA)/K:TS=TR-(360-2*E1)/K:  GOTO 840
820 IF LHA>180 THEN TR=T-(E1-360+LHA)/K ELSE TR=T-(E1+LHA)/K
830 TS=TR+2*E1/K:IF TS>24 THEN TS=TS-24
840 IF TR<0 THEN TR=TR+24
850 IF TR>24 THEN TR=TR-24
860 IF TS<0 THEN TS=TS+24
870 B=TR:GOSUB 930: HR$=B$: MR$=C$:B=TS:GOSUB 930: IF H>0 THEN 900
880 PRINT "   It set at ";B$;":";C$;"  Az of ";AZS;
890 PRINT " and will rise at ";HR$;":";MR$;"  Az of ";AZR:      GOTO 920
900 PRINT "   It rose at ";HR$;":";MR$;"  Az of ";AZR;
910 PRINT " and will set at ";B$;":";C$;"  Az of ";AZS:
920 LOCATE 24,14:PRINT DATE$;"   'A' for another, otherwise the Menu";:RETURN
930 B$=STR$(INT(B)):C=(B-INT(B))*60+100.1:C$=MID$(STR$(C),3,2):RETURN
940 '              COMPUTE ARIES
950 A$=TIME$:GOSUB 1010:T=L:IF T>T3 AND Q1<1 THEN Q1=2:GOTO 570
960 R1=IN+D1*.985646+(T+C1)*15.041:R1=(R1/360-INT(R1/360))*360   'GHA of Aries
970 R2=R1-LONG1*P: IF R2<0 THEN R2=R2+360                        'LHA of Aries
980 LHA=R2+SHA: IF LHA>360 THEN LHA=LHA-360                       'LHA of star
990 LONG2 =LHA/P+LONG1:IF LONG2>360/P THEN LONG2=LONG2-360/P
1000 GOSUB 1080: H=(90-(NM/60)): RETURN
1010 '         TO ACCEPT EITHER DECIMALS OR D,M,S
1020 L$="":L1=0:L2=0:L3=0:GOSUB 1040:IF VAL(A$)>=0 THEN L=L1+L2+L3: RETURN
1030 L=L1-L2-L3: RETURN
1040 FOR N=1 TO LEN (A$): IF ASC(MID$(A$,N,1))=58 THEN 1060
1050 L$=L$+MID$(A$,N,1): L1=VAL(L$): NEXT:RETURN
1060 L2=VAL(MID$(A$,N+1,2))/60: IF LEN(A$)<>N+5 THEN RETURN
1070 L3=VAL(MID$(A$,N+4,2))/3600:RETURN
1080 '             COMPUTE NM AND Az
1090 DIF=LONG2-LONG1:X=SIN(LAT1)*SIN(LAT2)+COS(LAT1)*COS(DIF)*COS(LAT2)
1100 AZ=0: IF ABS(X)<.9995 THEN GOSUB 1210:NM=Z*P*60: GOTO 1130
1110 NM=P*60*SQR((LAT1-LAT2)^2+((DIF)*COS(LAT1))^2):IF NM=0 THEN RETURN
1120 X=(LAT2-LAT1)*P*60/NM:IF ABS(X)<.999995 THEN GOSUB 1210:AZ=Z*P: GOTO 1170
1130 IF ABS(LAT2-LAT1)<.001 THEN AZ=90: GOTO 1170
1140 IF ABS(DIF)<.001 OR ABS(LAT1)>89.9/P THEN 1150 ELSE 1160
1150 IF LAT2>LAT1 THEN RETURN ELSE AZ=180:RETURN
1160 X=(SIN(LAT2)-SIN(LAT1)*COS(Z))/(COS(LAT1)*SIN(Z)):GOSUB 1210:AZ=Z*P
1170 IF SIN(DIF)=<0 THEN RETURN
1180 AZ=360-AZ: RETURN
1190 IF ABS(X)<.9999999 THEN 1210 ELSE IF LAT2>LAT1 THEN AZ=0:RETURN
1200 AZ=180: RETURN
1210 Z=(1.570796-ATN(X/SQR(1-X*X))): RETURN
```

## MINI-WP.BAS

```bas
100 ' WORDMERG.BAS                                           VERSION 2.0
110 '
120 ' ******************************************************************
130 ' ******************************************************************
140 '
150 ' MINI WORD PROCESSOR-MAIL MERGE
160 '
170 ' WILLIAM HT BAILEY                                      AUGUST 1982
180 '
190 ' ******************************************************************
200 '
210 '          ---------- LIST OF VARIABLES -----------
220 '
230 ' A$     : Operator's response to a cue.
235 ' B$     : Set of valid character responses.
250 ' BEGIN% : First line of a list operation.
260 ' E%     : Last line of a list operation.
265 ' F$     : Name of user's text file.
270 ' FLAG1$ : Indicator of cassette or disk storage.
280 ' FLAG2$ : Indicator of normal or enhanced printing.
290 ' FLAG3% : End of file flag.
310 ' I%     : Indexing variable.
320 ' J%     : Indexing variable.
330 ' K%     : Indexing variable.
340 ' L%     : Indexing variable.
345 ' M$     : Name of auxillary file.
347 ' MB$    : Modify line buffer.
350 ' NEWLN$ : File buffer. Holds the modified file during editing.
360 ' OLDLN$ : File buffer. Holds the original file during editing.
365 ' P%     : Cursor position
370 ' SEL%   : Operator's response to a cue.
380 '
390 ' *******************************************************************
400 ' *******************************************************************
410 '
420 '          ------------ INITIALIZATION ------------
430 '
440 OPTION BASE 1: DIM OLDLN$(108),NEWLN$(60): DEF SEG: POKE 106,0
445 CLS: CLOSE
450 KEY OFF: LOCATE 10,1,1: PRINT "Are you using cassette or disk?"
460 PRINT "Enter C for cassette or D for disk."
470 FLAG1$=INKEY$: IF FLAG1$="" THEN 470
480 IF FLAG1$="C" OR FLAG1$="c" OR FLAG1$="D" OR FLAG1$="d" THEN 500
490 PRINT: PRINT "INVALID ENTRY": GOTO 460
500 ON ERROR GOTO 5070
510 '
520 CLS: PRINT TAB(7) "*** MINI WORD PROCESSOR-MAIL MERGE ***": PRINT
530 PRINT TAB(23) "MENU": PRINT
535 PRINT "    0. EXIT"
540 PRINT "    1. DESCRIPTION"
550 PRINT "    2. CREATE/EDIT A TEXT FILE"
560 PRINT "    3. INITIALIZE THE AUXILLARY FILE"
570 PRINT "    4. EDIT AN AUXILLARY FILE"
580 PRINT "    5. OUTPUT A TEXT FILE"
590 PRINT "    6. OUTPUT AN AUXILLARY FILE"
600 PRINT "    7. OUTPUT A TEXT FILE WITH BLOCK MERGE"
610 PRINT "    8. LIST DISK FILES": PRINT
620 PRINT "       Enter selection";
625 A$=INKEY$: IF A$="" THEN 625 ELSE SEL%=VAL(A$)
630 IF SEL%>-1 AND SEL%<9 THEN 650
640 PRINT: PRINT "       INVALID ENTRY": GOTO 620
650 IF SEL%=0 THEN ON ERROR GOTO 0: END
660 ON SEL% GOSUB 10050,15050,20050,25050,30050,35050,40050,45050
670 GOTO 520
5000 '
5010 ' *****************************************************************
5020 '
5030 '         ------------- SUBROUTINES --------------
5040 '
5050 ' ERROR HANDLER
5060 '
5070 IF ERR=53 THEN PRINT: PRINT "*** FILE NON-EXISTENT ***": GOTO 5100
5080 IF ERR=27 THEN PRINT: PRINT "*** PRINTER NOT READY ***": GOTO 5100
5090 PRINT: PRINT "*** ERROR";ERR;" DETECTED ON LINE";ERL;" ***"
5100 PRINT "    Press space bar to return to menu.";
5110 A$=INKEY$: IF A$="" THEN 5110 ELSE RESUME 520
5120 '
5130 ' PREPARE CASSETTE
5140 '
5150 PRINT: PRINT "Prepare cassette for access."
5160 PRINT "Press space bar when ready."
5170 A$=INKEY$: IF A$="" THEN 5170 ELSE RETURN
5180 '
5190 ' PREPARE PRINTER
5200 '
5210 PRINT: PRINT "Do you want normal or emphasized print?(N/E)";
5220 FLAG2$=INKEY$: IF FLAG2$="" THEN 5220 ELSE PRINT FLAG2$
5230 IF FLAG2$="N" OR FLAG2$="n" OR FLAG2$="E" OR FLAG2$="e" THEN 5250
5240 PRINT "INVALID ENTRY": GOTO 5210
5250 PRINT "Prepare printer for output."
5260 PRINT "Press space bar when ready."
5270 A$=INKEY$: IF A$="" THEN 5270 ELSE RETURN
5280 '
5290 ' PRESS SPACE BAR
5300 '
5310 PRINT: PRINT "*** PRESS SPACE BAR TO CONTINUE ***"
5320 A$=INKEY$: IF A$="" THEN 5320 ELSE RETURN
5330 '
5340 ' OPERATOR INPUT. CHARACTER RESPONSE
5350 '
5360 A$=INKEY$: IF A$="" THEN 5360 ELSE I%=1: FLAG3%=0
5370 WHILE I%<=L% AND FLAG3%=0: IF A$=MID$(B$,I%,1) THEN FLAG3%=1
5380 I%=I%+1: WEND
5390 IF FLAG3%=1 THEN PRINT A$: RETURN
5400 PRINT: PRINT "INVALID ENTRY. RE-ENTER";: GOTO 5360
5410 '
5420 ' OPERATOR INPUT. INTEGER RESPONSE
5430 '
5440 INPUT SEL%: IF SEL%>=BEGIN% AND SEL%<=E% THEN RETURN
5450 PRINT: PRINT "INVALID ENTRY. RE-ENTER.";: GOTO 5440
5460 '
5470 ' OPERATOR INPUT. NUMBER OF LINES TO EDIT
5480 '
5490 INPUT L%: IF L%>=1 AND L%<=(61-SEL%) THEN RETURN
5500 PRINT: PRINT "INVALID ENTRY. RE-ENTER.";: GOTO 5490
10000 '
10010 ' ****************************************************************
10020 '
10030 '        ------------- DESCRIPTION --------------
10040 '
10050 CLS: PRINT "   --- DESCRIPTION ---": PRINT
10060 PRINT "This program allows the user to create any number of text"
10070 PRINT "files which are 74 characters wide, up to 60 lines long and"
10080 PRINT "are user named. These files can be edited and output to"
10090 PRINT "the printer. Thus this program serves as a rudimentary"
10100 PRINT "word processor.": PRINT
10110 PRINT "User named auxillary files can also be created. These"
10120 PRINT "auxillary files are divided into 18 blocks of 6 lines. A"
10130 PRINT "selected block can be inserted between lines 6 and 7 of a"
10140 PRINT "text file during output. Thus this program can also serve"
10150 PRINT "as a rudimentary mail merger.": PRINT
10160 PRINT "All files are created as sequential files, so that cassette"
10170 PRINT "users can be supported.": PRINT
10180 PRINT "SELECTION 2"
10190 PRINT "Under this selection the user can insert lines, delete"
10200 PRINT " lines, change lines and modify lines."
10210 PRINT "The INSERT request inserts before the selected line."
10220 GOSUB 5310: CLS: PRINT "   ---DESCRIPTION continued ---"
10230 PRINT "The user should write a XXXX line to designate the end of"
10240 PRINT " the text file, if it is less than 60 lines long."
10245 PRINT "The MODIFY request allows in-line editing."
10250 PRINT "The LIST request lists 20 lines at a time."
10260 PRINT "Lines longer than 74 characters are truncated. The"
10270 PRINT " computer will beep, if a truncation has occurred."
10280 PRINT "The END request writes the modified buffer to file."
10290 PRINT "The QUIT request restores the unmodified buffer.": PRINT
10300 PRINT "SELECTION 3"
10310 PRINT "This selection initializes an auxillary file.": PRINT
10320 PRINT "SELECTION 4"
10330 PRINT "This selection allows the user to fill in selected 6 line"
10340 PRINT " blocks. Lines longer than 74 characters are truncated."
10350 PRINT " The computer will beep, if a truncation has occurred."
10360 PRINT "If the first line of a block is a XXXX, then that block"
10370 PRINT " and those following are treated as null. If the first"
10380 PRINT " line of a block is a ZZZZ, then that block only is"
10390 PRINT " treated as null.": GOSUB 5310: CLS
10400 PRINT "   --- DESCRIPTION continued ---": PRINT
10410 PRINT "SELECTION 5"
10420 PRINT "Under this selection a text file can be output to the"
10430 PRINT " display or printer."
10440 PRINT "If output is to the display then 20 lines at a time are"
10450 PRINT " displayed."
10460 PRINT "If output is to the printer then the print can be either"
10470 PRINT " normal or emphasized."
10480 PRINT "The output terminates when either line 60 or a XXXX is"
10490 PRINT " encountered.": PRINT
10500 PRINT "SELECTION 6"
10510 PRINT "This selection allows the user to output the auxillary file"
10520 PRINT " to display or printer."
10530 PRINT "If output is to the display, then 18 lines at a time are"
10540 PRINT " displayed. A XXXX line encountered at the beginning of a"
10550 PRINT " block terminates output. A ZZZZ line encountered at the"
10560 PRINT " beginning of a block generates a space block in the"
10570 PRINT " display.": GOSUB 5310: CLS
10580 PRINT "   ---DESCRIPTION continued ---"
10590 PRINT "If output is to the printer, the print can be either"
10600 PRINT " normal or emphasized. A XXXX line encountered at the"
10610 PRINT " beginning of a block terminates output. A ZZZZ line"
10620 PRINT " encountered at the beginning of a block causes the"
10630 PRINT " printer to skip that block."
10640 PRINT "When outputting to printer, a 0 to 4 line space may be"
10650 PRINT " selected between blocks."
10660 PRINT
10670 PRINT "SELECTION 7"
10680 PRINT "Under this selection a text file is output to the display"
10690 PRINT " or printer with a selected block from the auxillary file"
10700 PRINT " merged between lines 6 and 7. The output terminates at"
10710 PRINT " line 60 or a XXXX line."
10720 PRINT "If output is to the display, then 22 lines at a time are"
10730 PRINT " displayed. If output is to the printer, the print can"
10740 PRINT " be either normal or emphasized.":PRINT
10743 PRINT "SELECTION 8"
10745 PRINT "This selection lists the files on a selected disk.": PRINT
10750 PRINT "WILLIAM HT BAILEY   Phone: 215-924-0771         August 1982";
10760 GOSUB 5310: RETURN
15000 '
15010 ' ****************************************************************
15020 '
15030 '         ------------ EDIT TEXT FILE ------------
15040 '
15050 CLS: PRINT "   --- EDIT TEXT FILE ---"
15060 PRINT: PRINT "Enter file name ";: INPUT F$
15070 PRINT: PRINT "Is this a New or Old file?(N/O)";
15080 B$="NnOo": L%=4: GOSUB 5360
15090 IF A$="O" OR A$="o" THEN 15110
15093 A$="XXXX 6789 1 34567890 2 45678901 3 56789012 4 67890123 5 78901234 6 8"
15095 FOR I%=1 TO 60: NEWLN$(I%)=A$: NEXT I%: GOTO 15160
15100 '
15110 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
15120 OPEN F$ FOR INPUT AS #1: I%=1
15130 WHILE I%<=60 AND NOT EOF(1) : LINE INPUT#1,OLDLN$(I%)
15140 NEWLN$(I%)=OLDLN$(I%): I%=I%+1: WEND: CLOSE#1
15150 '
15155 PRINT
15160 PRINT"Insert,Delete,Change,Modify,List,End or Quit? (I/D/C/M/L/E/Q)";
15170 B$="IiDdCcMmLlEeQq": L%=14: GOSUB 5360
15180 IF A$="E" OR A$="e" THEN 15540
15190 IF A$="Q" OR A$="q" THEN 15610
15200 PRINT "Line number";
15205 BEGIN%=1: E%=60: GOSUB 5440
15207 IF A$="L" OR A$="l" THEN 15270
15208 PRINT "Number of lines";: GOSUB 5490
15210 IF A$="I" OR A$="i" THEN 15340
15220 IF A$="D" OR A$="d" THEN 15420
15230 IF A$="C" OR A$="c" THEN 15465
15235 IF A$="M" OR A$="m" THEN 15660
15240 '
15250 ' LIST 20 LINES
15260 '
15270 PRINT: BEGIN%=SEL%-9: E%=SEL%+10
15280 IF BEGIN%<1 THEN BEGIN%=1: E%=20
15285 IF E%>60 THEN BEGIN%=41: E%=60
15290 FOR J%=BEGIN% TO E%
15300 PRINT USING "##";J%;: PRINT ">";NEWLN$(J%): NEXT J%: GOTO 15160
15310 '
15320 'INSERT LINE
15330 '
15340 FOR K%=SEL% TO (SEL%+L%-1): IF K%=60 THEN 15360
15350 FOR J%=59 TO K% STEP -1: NEWLN$(J%+1)=NEWLN$(J%): NEXT J%
15360 PRINT:PRINT USING "##";K%;:PRINT ">";: LINE INPUT;NEWLN$(K%)
15370 IF LEN(NEWLN$(K%))>76 THEN BEEP:NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15380 NEXT K%: PRINT: GOTO 15160
15390 '
15400 ' DELETE LINE
15410 '
15420 FOR J%=SEL% TO (60-L%): NEWLN$(J%)=NEWLN$(J%+L%): NEXT J%
15430 FOR J%=60 TO (61-L%) STEP -1: NEWLN$(J%)="XXXX":NEXT J%: GOTO 15160
15440 '
15450 ' CHANGE LINE
15460 '
15465 FOR K%=SEL% TO (SEL%+L%-1)
15470 PRINT: PRINT USING "##";K%;: PRINT ">";NEWLN$(K%)
15480 PRINT USING "##";K%;: PRINT ">";: LINE INPUT;NEWLN$(K%)
15490 IF LEN(NEWLN$(K%))>76 THEN BEEP:NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15500 NEXT K%: GOTO 15160
15510 '
15520 ' END EDITING
15530 '
15540 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
15550 OPEN F$ FOR OUTPUT AS #1
15560 FOR J%=1 TO 60: PRINT#1,NEWLN$(J%): NEXT J%
15570 CLOSE#1: RETURN
15580 '
15590 ' QUIT EDITING
15600 '
15610 PRINT "Abort Edit?(Y/N)";: B$="YyNn": L%=4: GOSUB 5360
15620 IF A$="N" OR A$="n" THEN 15160 ELSE RETURN
15630 '
15640 ' MODIFY LINE
15650 '
15660 FOR K%=SEL% TO (SEL%+L%-1)
15670 PRINT: PRINT USING "##";K%;: PRINT ">";NEWLN$(K%);: LOCATE ,4,1
15680 A$=INKEY$: IF A$="" THEN 15680 ELSE P%=POS(0)
15690 IF A$=CHR$(13) THEN 15920
15700 IF LEN(A$)=2 THEN B$=MID$(A$,2,1) ELSE GOTO 15880
15710 IF ASC(B$)<>77 THEN 15750
15720 IF POS(0)=79 THEN 15680
15730 IF POS(0)=LEN(NEWLN$(K%))+1 THEN NEWLN$(K%)=NEWLN$(K%)+" "
15735 IF LEN(NEWLN$(K%))>76 THEN BEEP: NEWLN$(K%)=LEFT$(NEWLN$(K%),76):               GOTO 15680
15740 LOCATE ,(POS(0)+1): GOTO 15680
15750 IF ASC(B$)<>75 THEN 15780
15760 IF POS(0)=4 THEN 15680
15770 LOCATE ,(POS(0)-1): GOTO 15680
15780 IF ASC(B$)<>83 THEN 15830
15785 IF P%>LEN(NEWLN$(K%))+3 THEN 15680
15790 IF P%=4 THEN NEWLN$(K%)=MID$(NEWLN$(K%),2): GOTO 15820
15800 IF P%=LEN(NEWLN$(K%))+3 THEN                                                    NEWLN$(K%)=LEFT$(NEWLN$(K%),LEN(NEWLN$(K%))-1): GOTO 15820
15810 NEWLN$(K%)=LEFT$(NEWLN$(K%),(P%-4))+MID$(NEWLN$(K%),(P%-2))
15820 LOCATE ,4,0:PRINT NEWLN$(K%);" ";: LOCATE ,P%,1: GOTO 15680
15830 IF ASC(B$)<>82 THEN 15680
15835 IF P%>LEN(NEWLN$(K%))+3 THEN 15680
15840 IF P%=4 THEN NEWLN$(K%)=" "+NEWLN$(K%): GOTO 15860
15850 NEWLN$(K%)=LEFT$(NEWLN$(K%),(P%-4))+" "+MID$(NEWLN$(K%),(P%-3))
15860 IF LEN(NEWLN$(K%))>76 THEN BEEP: NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15870 LOCATE ,4,0: PRINT NEWLN$(K%);: LOCATE ,P%,1: GOTO 15680
15880 IF ASC(A$)<32 OR ASC(A$)>126 THEN 15680
15890 NEWLN$(K%)=LEFT$(NEWLN$(K%),(P%-4))+A$+MID$(NEWLN$(K%),(P%-2))
15900 IF LEN(NEWLN$(K%))>76 THEN BEEP: NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15910 LOCATE ,4,0: PRINT NEWLN$(K%);: LOCATE ,P%+1,1: GOTO 15680
15920 NEXT K%: PRINT: GOTO 15160
20000 '
20010 ' *****************************************************************
20020 '
20030 '         ------ INITIALIZE AUXILLARY FILE -------
20040 '
20050 CLS: PRINT "   --- INITIALIZE AUXILLARY FILE ---"
20055 LOCATE 10,1:INPUT "Enter name of auxillary file ";M$:PRINT
20060 PRINT "CURRENT DATA WILL BE DESTROYED"
20070 PRINT "Continue or Return to menu?(C/R)";
20080 B$="CcRr": L%=4: GOSUB 5360
20090 IF A$<>"C" AND A$<>"c" THEN RETURN
20100 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
20110 PRINT: PRINT: PRINT "Initializing auxillary file"
20120 OPEN M$ FOR OUTPUT AS #2
20125 A$="XXXX 6789 1 34567890 2 45678901 3 56789012 4 67890123 5 78901234 6 8"
20130 FOR J%=1 TO 108: OLDLN$(J%)=A$: PRINT#2,OLDLN$(J%): NEXT J%
20140 CLOSE#2: RETURN
25000 '
25010 ' *****************************************************************
25020 '
25030 '         --------- EDIT AUXILLARY FILE ----------
25040 '
25050 CLS: PRINT "   --- EDIT AUXILLARY FILE ---"
25055 PRINT:INPUT "Enter name of auxillary file ";M$
25060 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
25070 OPEN M$ FOR INPUT AS #2: J%=1
25080 WHILE J%<=108 AND NOT EOF(2): LINE INPUT#2,OLDLN$(J%)
25090 J%=J%+1: WEND: CLOSE#2
25100 '
25110 PRINT: PRINT "Enter block number (1-18) or 0 to return to menu";
25120 BEGIN%=0: E%=18: GOSUB 5440: IF SEL%=0 THEN 25240
25130 PRINT: PRINT "Block";SEL%
25140 FOR J%=((SEL%-1)*6+1) TO ((SEL%-1)*6+6)
25150 PRINT USING "###";J%;: PRINT ">";OLDLN$(J%): NEXT J%
25160 '
25170 PRINT: PRINT "Overwrite? (Y/N)";: B$="YyNn": L%=4: GOSUB 5360
25180 IF A$="N" OR A$="n" THEN 25100
25190 FOR J%=((SEL%-1)*6+1) TO ((SEL%-1)*6+6)
25200 PRINT USING "###";J%;:PRINT ">";: LINE INPUT;OLDLN$(J%): PRINT
25210 IF LEN(OLDLN$(J%))>76 THEN BEEP:OLDLN$(J%)=LEFT$(OLDLN$(J%),76)
25220 NEXT J%: GOTO 25100
25230 '
25240 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
25250 OPEN M$ FOR OUTPUT AS #2
25260 FOR J%=1 TO 100: PRINT#2,OLDLN$(J%): NEXT J%: CLOSE#2: RETURN
30000 '
30010 ' *****************************************************************
30020 '
30030 '         ----------- OUTPUT TEXT FILE ------------
30040 '
30050 CLS: PRINT "   --- OUTPUT TEXT FILE ---"
30060 PRINT: INPUT "Enter file name";F$
30070 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
30080 OPEN F$ FOR INPUT AS #1: I%=1
30090 WHILE I%<=60 AND NOT EOF(1): LINE INPUT#1,OLDLN$(I%)
30100 I%=I%+1:WEND: CLOSE#1
30110 '
30120 PRINT: PRINT "Output to Display or Printer? (D/P)";
30130 B$="DdPp": L%=4: GOSUB 5360
30140 IF A$="P" OR A$="p" THEN 30270
30150 '
30160 ' OUTPUT TO DISPLAY
30170 '
30180 FLAG3%=0: I%=0
30190 WHILE I%<=2 AND FLAG3%=0: CLS: J%=I%*20: K%=1
30200 WHILE K%<=20 AND FLAG3%=0
30210 IF MID$(OLDLN$(J%+K%),1,4)="XXXX" THEN FLAG3%=1: GOTO 30230
30220 PRINT OLDLN$(J%+K%)
30230 K%=K%+1: WEND: GOSUB 5310: I%=I%+1: WEND
30231 PRINT: PRINT "Output to printer? (Y/N)";: B$="YyNn": L%=4
30232 GOSUB 5360: IF A$="N" OR A$="n" THEN RETURN
30240 '
30250 ' OUTPUT TO PRINTER
30260 '
30270 GOSUB 5210: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27);"E"
30280 I%=1: FLAG3%=0
30290 WHILE I%<=60 AND FLAG3%=0
30300 IF MID$(OLDLN$(I%),1,4)="XXXX" THEN FLAG3%=1 ELSE LPRINT OLDLN$(I%)
30310 I%=I%+1: WEND: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27);"F"
30320 PRINT: PRINT "Another printout? (Y/N)";: B$="YyNn": L%=4
30330 GOSUB 5360: IF A$="Y" OR A$="y" THEN LPRINT CHR$(12): GOTO 30270
30340 LPRINT CHR$(12): RETURN
35000 '
35010 ' *****************************************************************
35020 '
35030 '         -------- OUTPUT AUXILLARY FILE ----------
35040 '
35050 CLS: PRINT "   --- OUTPUT AUXILLARY FILE ---"
35055 PRINT: INPUT "Enter name of auxillary file ";M$
35060 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
35070 OPEN M$ FOR INPUT AS #2: J%=1
35080 WHILE J%<=108 AND NOT EOF(2): LINE INPUT#2,OLDLN$(J%)
35090 J%=J%+1: WEND: CLOSE#2
35100 '
35110 PRINT: PRINT "Output to Display or Printer? (D/P)";
35120 B$="DdPp": L%=4: GOSUB 5360
35130 IF A$="P" OR A$="p" THEN 35300
35140 '
35150 ' OUTPUT TO DISPLAY
35160 '
35170 FLAG3%=0: I%=0
35180 WHILE I%<=17 AND FLAG3%=0: CLS: J%=1
35190 WHILE J%<=3 AND FLAG3%=0:K%=I%*6:IF OLDLN$(K%+1)<>"ZZZZ" THEN 35210
35200 FOR L%=1 TO 6: PRINT "": NEXT L%: GOTO 35230
35210 IF MID$(OLDLN$(K%+1),1,4)="XXXX" THEN FLAG3%=1: GOTO 35230
35220 FOR L%=(K%+1) TO (K%+6): PRINT OLDLN$(L%): NEXT L%
35230 IF J%<>4 THEN PRINT
35235 J%=J%+1: I%=I%+1: WEND
35240 GOSUB 5310: WEND
35250 PRINT: PRINT "Output to printer? (Y/N)";: B$="YyNn": L%=4
35260 GOSUB 5360: IF A$="N" OR A$="n" THEN RETURN
35270 '
35280 ' OUTPUT TO PRINTER
35290 '
35300 PRINT: PRINT "Number of spaces between blocks? (0-4)";
35310 BEGIN%=0: E%=4: GOSUB 5440
35320 GOSUB 5210: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT  CHR$(27);"E"
35330 I%=0: FLAG3%=0
35340 WHILE I%<=17 AND FLAG3%=0: J%=I%*6
35350 IF OLDLN$(J%+1)="ZZZZ" THEN 35400
35360 IF MID$(OLDLN$(J%+1),1,4)="XXXX" THEN FLAG3%=1: GOTO 35400
35370 FOR L%=(J%+1) TO (J%+6): LPRINT OLDLN$(L%): NEXT L%
35380 IF SEL%=0 THEN 35400
35390 FOR L%=1 TO SEL%: LPRINT: NEXT L%
35400 I%=I%+1: WEND: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27); "F"
35410 PRINT: PRINT "Another printout? (Y/N)";: B$="YyNn": L%=4
35420 GOSUB 5360: IF A$="Y" OR A$="y" THEN LPRINT CHR$(12): GOTO 35300
35430 LPRINT CHR$(12): RETURN
40000 '
40010 ' *****************************************************************
40020 '
40030 '         -- OUTPUT TEXT FILE WITH BLOCK MERGE ----
40040 '
40050 CLS: PRINT "   --- OUTPUT TEXT FILE WITH BLOCK MERGE ---"
40060 PRINT: INPUT "Enter file name";F$
40070 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
40080 OPEN F$ FOR INPUT AS #1: I%=1
40090 WHILE I%<=60 AND NOT EOF(1): LINE INPUT#1,NEWLN$(I%)
40100 I%=I%+1:WEND: CLOSE#1
40110 PRINT: INPUT "Enter name of auxillary file ";M$
40120 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
40130 OPEN M$ FOR INPUT AS #2: J%=1
40140 WHILE J%<=108 AND NOT EOF(2): LINE INPUT#2,OLDLN$(J%)
40150 J%=J%+1: WEND: CLOSE#2
40160 '
40170 PRINT "Enter block number (1-18)";
40180 BEGIN%=1: E%=18: GOSUB 5440
40190 IF OLDLN$((SEL%-1)*6+1)="ZZZZ" THEN PRINT "Null entry": GOTO 40170
40200 IF MID$(OLDLN$((SEL%-1)*6+1),1,4)<>"XXXX" THEN 40210
40205 PRINT "Null entry": GOTO 40170
40210 PRINT: PRINT "Output to Display or Printer? (D/P)";
40220 B$="DdPp": L%=4: GOSUB 5360
40230 IF A$="P" OR A$="p" THEN 40420
40240 '
40250 ' OUTPUT TO DISPLAY
40260 '
40270 CLS: FOR I%=1 TO 6: PRINT NEWLN$(I%): NEXT I%
40280 FOR I%=1 TO 6: PRINT OLDLN$((SEL%-1)*6+I%): NEXT I%
40290 I%=7: FLAG3%=0
40300 WHILE I%<=16 AND FLAG3%=0
40310 IF MID$(NEWLN$(I%),1,4)="XXXX" THEN FLAG3%=1 ELSE PRINT NEWLN$(I%)
40320 I%=I%+1: WEND: GOSUB 5310: IF FLAG3%=1 THEN 40370 ELSE I%=0
40330 WHILE I%<=1 AND FLAG3%=0: CLS: J%=I%*22+16: K%=1
40340 WHILE K%<=22 AND FLAG3%=0
40350 IF MID$(NEWLN$(J%+K%),1,4)="XXXX" THEN FLAG3%=1 ELSE PRINT NEWLN$(J%+K%)
40360 K%=K%+1: WEND: GOSUB 5310: I%=I%+1: WEND
40370 PRINT: PRINT "Output to printer? (Y/N)";: B$="YyNn": L%=4
40380 GOSUB 5360: IF A$="N" OR A$="n" THEN RETURN
40390 '
40400 ' OUTPUT TO PRINTER
40410 '
40420 GOSUB 5210: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27);"E"
40430 FOR I%=1 TO 6: LPRINT NEWLN$(I%): NEXT I%
40440 FOR I%=1 TO 6: LPRINT OLDLN$((SEL%-1)*6+I%): NEXT I%
40450 I%=7: FLAG3%=0
40460 WHILE I%<=60 AND FLAG3%=0
40470 IF MID$(NEWLN$(I%),1,4)="XXXX" THEN FLAG3%=1 ELSE LPRINT NEWLN$(I%)
40480 I%=I%+1: WEND: IF FLAG2$="E" OR FLAG2$="e" THEN  LPRINT CHR$(27);"F"
40490 PRINT: PRINT "Another printout? (Y/N)";: B$="YyNn": L%=4
40500 GOSUB 5360: IF A$="Y" OR A$="y" THEN LPRINT CHR$(12): GOTO 40170
40510 LPRINT CHR$(12): RETURN
45000 '
45010 ' ****************************************************************
45020 '
45030 '            ------------ LIST DISK FILES -------------
45040 '
45050 CLS:PRINT "    --- LIST DISK FILES ---"
45060 PRINT: PRINT "Drive A, Drive B or Return? (A/B/R) ";:B$="AaBbRr":L%=6
45065 GOSUB 5360
45070 IF A$="R" OR A$="r" THEN RETURN
45080 PRINT: PRINT TAB(27);"*** Files On Drive ";A$;" ***":FILES A$+":*.*"
45090 PRINT: GOTO 45060
49996 '
49997 ' ****************************************************************
49998 ' ****************************************************************
49999 END
```

## PROVERB1.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(30)"PROVERBS  7004-A.BAS"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 ' THIS IS A LITTLE PROGRAM THAT ALLOWS YOU TO NEATLY TYPE OUT PROVERBS
250 ' OR QUOTATIONS TO AN MX-80 OR IBM PRINTER IN ANY FORMAT YOU LIKE
260 '           (You can enter your own quotations as data statements
270 '              at the end of the program if you don`t like mine !)
280 INPUT "select a page length  ",PAGELENGTH
290 INPUT "select a line width  ",LINEWIDTH
300 PRINT
310 PRINT
320 READ A$
330 READ B$
340 IF B$ = "z" THEN GOTO 550
350 NB = LEN(B$)
360 FOR J = 1 TO NB
370   X$ = MID$(B$,J,1)
380   IF X$ = " " GOTO 420
390 NEXT J
400 A$ = A$ +  " "  + B$
410 GOTO 330
420 BP$ = LEFT$(B$,J-1)
430 B$ = RIGHT$(B$,NB-J)
440 IF LEN(A$) + LEN(BP$) > LINEWIDTH THEN GOTO 470
450 A$ = A$ + " " + BP$
460 GOTO 350
470 L$ = A$
480 A$ = BP$
490 Y = (80 - LINEWIDTH)/2
500 PRINT TAB(Y) L$
510 LPRINT TAB(Y) L$
520 COUNT = COUNT + 1
530 IF COUNT = PAGELENGTH THEN PRINT :PRINT: COUNT = 0
540 GOTO 460
550 PRINT TAB(Y) A$
560 LPRINT TAB(Y) A$
570 ' from Yiddish Proverbs (H.J. Ayalti, ed.) Schocken Books, NY, 1965
580 DATA "*"
590 DATA "`For example' is no proof * "
600 DATA "Half a truth is a whole lie * "
610 DATA "A wise man hears one word and understands two * "
620 DATA "A fool is his own informer * "
630 DATA "A lock is only meant for honest men * "
640 DATA "All children are clever when they are small, but most of them grow no wiser * "
650 DATA "All brides are beautiful, all the dead are holy * "
660 DATA "When a lion sleeps, let him sleep * "
670 DATA "A man who's too good for the world is no good to his wife * "
680 DATA "The girl who can't dance says the band can't play * "
690 DATA "He that is fated to drown will drown - in a spoonful of water * "
700 DATA "If things don't get better, depend on it, they will get worse * "
710 DATA "If you can't bite, don't show your teeth * "
720 DATA "He that cannot endure the bad, will not endure to see the good * "
730 DATA "Talk too much and you talk about yourself * "
740 DATA "If you dance at every wedding, you will weep at every death * "
750 DATA "Before you marry, make sure you know whom you are going to divorce * "
760 DATA "Better a good enemy than a bad friend * "
770 DATA "Hell shared with a sage is better than paradise with a fool * "
780 DATA "If the ass had horns and the ox knew his strength, the world would be done for * "
790 DATA "Better to lose with a wise man than win with a fool * "
800 DATA "A wise man hides his wisdom, a fool reveals his folly * "
810 DATA "A man is what he is, not what he used to be * "
820 DATA "He is a giant who has many dwarfs about him * "
830 DATA "Passion is a master * "
840 DATA "Love is sweet, but tastes best with bread * "
850 DATA "It is easier to spot faults in others than virtues in oneself * "
860 DATA "Don't sell the skin off the bear that's still in the woods * "
870 DATA "You can't pull two hides off one ox * "
880 DATA "One doesn't live off joy, nor die of sorrow * "
890 DATA "God gave limbs to the fool and let him run * "
900 DATA "Beware of your friends, not your enemies * "
910 DATA "Don't be afraid when you have no other choice * "
920 DATA "What you have, hold; what you know, keep to yourself; what you can, do* "
930 DATA "Each man has a quirk all his own * "
940 DATA "Dumplings in a dream are not dumplings but a dream * "
950 DATA "Love is like butter, it goes well with bread * "
960 DATA "You don't stumble because you are weak, but because you think yourself strong * "
970 DATA "It is easy to poke the fire with another's hands * "
980 DATA "If you have learning, you'll never lose your way * "
990 DATA "Many complain of their looks, but none of their brains * "
1000 DATA "Poverty is no disgrace, but no great honor either * "
1010 DATA "Convenient to learn the barbers trade on the other fellows beard * "
1020 DATA "If charity cost no money and benevolence caused no heartache, the world would be full of philanthropists * "
1030 DATA "Trying to please costs you dear * "
1040 DATA "You don't need a calendar to die * "
1050 DATA "Two things are a burden: a fool among wise men and a wise man among fools * "
1060 DATA "Let a fool throw a stone in a well and ten wise men can't get it out * "
1070 DATA "If grandma had whiskers, she'd be grandpa * "
1080 DATA "If praying did any good, they'd be hiring men to pray * "
1090 DATA "We know the time of our setting out, but not the time of our return * "
1100 DATA "Laugh and everybody sees you, cry and you cry alone * "
1110 DATA "What saddens a wise man gladdens a fool * "
1120 DATA "A man's worst enemy can't wish him what he thinks up for himself * "
1130 DATA "What good is the cow that gives plenty of milk and then kicks over the pail? * "
1140 DATA "They are madly in love - he with himself, she with herself * "
1150 DATA "z"
```

## SPEECH.BAS

```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(31)"2029-A.BAS  SPEECH"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 REM**  SPEECH - MODIFIED FOR THE IBM PC
1010 REM**  GRAHAM JONES
1020 REM**  CARROLLTON, TEXAS
1030 REM**  DECEMBER, 1982
1040 REM**
1050 REM**
1060 REM SIMP-SIMPLIFIED INTEGRATED MODULAR PROSE
1070 CLS : COLOR 1 : PRINT "SPEECH - COMPUTERIZED SPEECH OR PROPOSAL GENERATOR" : COLOR 7
1080 PRINT : PRINT"PRESS ANY KEY TO START AND STOP FOR PARAGRAPHING"
1090 PRINT : PRINT"       PRESS ANY KEY WHEN READY TO START" : PRINT
1100 IF INKEY$ = "" THEN 1100
1110 CLS : L$="    " : E$=" "
1120 RANDOMIZE (VAL(RIGHT$(TIME$,2)))
1130 DIM A$(10),B$(10),C$(10),D$(10)
1140 FOR I=1 TO 10 : READ A$(I) : NEXT I
1150 FOR I=1 TO 10 : READ B$(I) : NEXT I
1160 FOR I=1 TO 10 : READ C$(I) : NEXT I
1170 FOR I=1 TO 10 : READ D$(I) : NEXT I
1180 I=1+INT(9.99*RND(1))
1190 J=1+INT(9.99*RND(1))
1200 K=1+INT(9.99*RND(1))
1210 L=1+INT(9.99*RND(1))
1220 ON 1+INT(2.99*RND(1)) GOSUB 1240,1250,1260
1230 GOTO 1180
1240 F$=A$(I)+E$+B$(J)+E$+C$(K)+E$+D$(L)+".  " : GOSUB 1580 : RETURN
1250 F$=D$(I)+E$+A$(J)+E$+C$(K)+E$+B$(L)+".  " : GOSUB 1580 : RETURN
1260 F$=B$(I)+E$+A$(J)+E$+C$(K)+E$+D$(L)+".  " : GOSUB 1580 : RETURN
1270 DATA"IN PARTICULAR,","ON THE OTHER HAND,","HOWEVER,","SIMILARLY,"
1280 DATA"AS A RESULTANT IMPLICATION,","IN THIS REGARD,","FOR EXAMPLE,","THUS,"
1290 DATA"BASED ON INTEGRAL SUBSYSTEM CONSIDERATIONS,"
1300 DATA"IN RESPECT TO SPECIFIC LIMITATIONS,","A LARGE PORTION OF THE INTERFACE COORDINATION COMMUNICATIONS"
1310 DATA"A CONSTANT FLOW OF EFFECTIVE INFORMATION"
1320 DATA"THE CHARACTERIZATION OF SPECIFIC CRITERIA"
1330 DATA"THE FULLY INTEGRATED TEST PROGRAM","THE PRODUCT CONFIGURATION BASELINE
1340 DATA"INITIATION OF CRITICAL SUBSYSTEM DEVELOPMENT"
1350 DATA"ANY ASSOCIATED SUPPORTING ELEMENT"
1360 DATA"THE INCORPORATION OF ADDITIONAL MISSION CONSTRAINTS"
1370 DATA"THE INDEPENDENT FUNCTIONAL PRINCIPAL"
1380 DATA"A PRIMARY INTERRELATIONSHIP BETWEEN TECHNOLOGIES"
1390 DATA"MUST UTILIZE AND BE FUNCTIONALLY INTERWOVEN WITH"
1400 DATA"MAXIMIZES THE PROBABILITY OF PROJECT SUCCESS AND MINIMIZES THE COST FOR"
1410 DATA"ADDS EXPLICIT PERFORMANCE LIMITS TO"
1420 DATA"NECESSITATES THAT URGENT CONSIDERATION BE APPLIED TO"
1430 DATA"REQUIRES CONSIDERABLE SYSTEM AND TRADE-OFF ANALYSIS TO ARRIVE AT"
1440 DATA"IS FURTHER COMPOUNDED, WHEN TAKING INTO ACCOUNT"
1450 DATA"PRESENTS EXTREMELY INTERESTING CHALLENGES TO"
1460 DATA"RECOGNIZES THE IMPORTANCE OF OTHER SYSTEMS AND THE NECESSITY FOR"
1470 DATA"EFFECTS A SIGNIFICANT IMPLEMENTATION CONSTRAINT ON"
1480 DATA"ADDS OVERRIDING PERFORMANCE CONSTRAINTS TO"
1490 DATA"THE MICROPROCESSOR-BASED HARDWARE"
1500 DATA"THE ANTICIPATED THIRD GENERATION EQUIPMENT"
1510 DATA"THE TOP-DOWN STRUCTURED DESIGN CONCEPT REALIZATION"
1520 DATA"THE SOFTWARE STRUCTURAL DESIGN, BASED UPON PROPER SYSTEMS ENGINEERING CONCEPTS"
1530 DATA"THE PRELIMINARY QUALIFICATION LIMIT"
1540 DATA"THE PHILOSOPHY OF COMMONALITY AND STANDARDIZATION"
1550 DATA"THE EVOLUTION OF SPECIFICATIONS OVER A GIVEN TIME PERIOD"
1560 DATA"THE GREATER COMPUTATIONAL-WORTHINESS CONCEPT"
1570 DATA"ANY DISCRETE CONFIGURATION MODE","THE TOTAL SYSTEM RATIONALE"
1580 IF INKEY$ <> "" THEN PRINT L$ : L$="   " : GOSUB 1660
1590 IF LEN(L$)+LEN(F$)>255 THEN PRINT L$ : L$="  "
1600 L$=L$+F$
1610 IF LEN(L$)<80 THEN RETURN
1620 FOR I=79 TO 1 STEP-1
1630 IF MID$(L$,I,1)=" "THEN PRINT LEFT$(L$,I) : L$=RIGHT$(L$,LEN(L$)-I) : GOTO 1610
1640 NEXT I
1650 RETURN
1660 IF INKEY$ = "" THEN 1660
1670 PRINT : RETURN
```

## XMASCARD.BAS

```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            4023-A.BAS             │░"
80 PRINT"░│          CHRISTMAS CARD           │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 REM Written By Jim & Wendy
1010 KEY OFF
1020 SCREEN 2
1030 CLS:LINE (320,100)-(440,160),,B
1040 DRAW "BM500,10M492,15L12M488,20M484,25M500,22"
1050 DRAW "BM500,10M508,15R12M512,20M516,25M500,22"
1060 DRAW "BM320,100E60F60"
1070 DRAW "BM200,160U10l30E10l5E10l5E10l5E10l5E10"
1080 DRAW "F10L5F10L5F10L5F10L5F10L35"
1090 DRAW "BM375,160U30R20D30"
1100 DRAW "BM325,94U25R15D11"
1110 DRAW "BL10BD40D30R30U30L30BD15R30BD15BL15U30"
1120 DRAW "BR60D30R30U30L30BD15R30BD15BL15U30"
1130 DRAW "BD70BR215L640U200R640D200BU25BL30L580"
1140 DRAW "BR80BU5U10L30E10L5E10L5E10L5E10L5E10"
1150 DRAW "F10L5F10L5F10L5F10L5F10L5L30"
1160 DRAW "BD10BR450U10L30E10L5E10L5E10L5E10L5E10"
1170 DRAW "F10L5F10L5F10L5F10L5F10L5L30"
1180 LOCATE 3,5:FOR I = 1 TO 15:READ A:PRINT CHR$(A);:NEXT
1190 LOCATE 5,5:FOR I = 1 TO 20:READ A:PRINT CHR$(A);:NEXT
1200 LOCATE 7,5:FOR I = 1 TO 24:READ A:PRINT CHR$(A);:NEXT
1210 PLAY "MBT100O3D4G4G8A8G8F+8E4E4E4A4A8B8A8G8"
1220 PLAY "F+4D4D4B4B8O4C8O3B8A8G4E4D8D8E4A4O3F+4G2"
1230 FOR I=1 TO 400
1240 PSET (RND*637,RND*I*.5)
1250 NEXT
1260 FOR I= 1 TO 750
1270 PSET (RND*637,RND*190)
1280 PSET (RND*637,RND*25+165)
1290 PSET (RND*637,RND*25+165)
1300 NEXT
1310 CIRCLE (280,155),20:CIRCLE (280,140),15:CIRCLE (280,129),10
1320 DRAW "BM265,125R30Bl8U7L15D7"
1330 DRAW "BM265,140L10H5BM295,140R15E5"
1340 DRAW "C1BM279,129D1R1U1L1BM276,128U1R1D1L1BM282,128U1R1D1L1"
1350 DRAW "C1BM279,136D1R1U1L1BM279,140U1R1D1L1BM279,144U1R1D1L1"
1360 A$=INKEY$:IF A$="" THEN 1360
1370 DATA 77,69,82,82,89,00,67,72,82,73,83,84,77,65,83
1380 DATA 65,78,68,00,65,00,72,65,80,80,89,00,78,69,87,00,89,69,65,82
1390 DATA 70,82,79,77,00,66,79,66,00,65,78,69,83,00,65,78,68,00,70,65,77,73,76,89
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0056

     Volume in drive A has no label
     Directory of A:\

    BASIC-KB ASM     10075   3-31-83
    BASIC-KB EXE      1280   3-31-83
    BASIC-KB DOC      5033   4-06-83
    DISTAR   BAS      6656   8-21-82   3:14p
    DECIDE   BAS      6144   2-03-82
    XMASCARD BAS      2944   4-02-83   3:40p
    KEYBOARD ASM      7589   3-21-83
    KEYBOARD EXE      1280   3-21-83
    KEYBOARD DOC      2802   4-06-83
    MINI-WP  BAS     18048  11-09-82
    SPEECH   BAS      3968  12-31-82   8:03p
    ADDR-PH  BAS      5376   8-01-82  10:09p
    PROVERB1 BAS      5376   8-01-82  10:21p
    CRC      TXT      1169  11-09-84  10:59a
    CRCK4    COM      1536  10-21-82   7:54p
           15 file(s)      79276 bytes
                           78336 bytes free
