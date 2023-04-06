---
layout: page
title: "PC-SIG Diskette Library (Disk #646)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0646/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0646"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "AMY'S FIRST PRIMER"

    A collection of a half-dozen games designed to teach basic skills to
    children, ages 3-8. They stress positive reinforcement and promote a
    "learning is fun" attitude.
    
    The collection includes a sing-along alphabet, a letter-matching game,
    an alphabet tutorial, a numbers-counting game, a maze game, and a
    pattern-matching game.
    
    Repeated suggestions that the parents use the games with their child
    add a nice reinforcement for family-based learning.
    
    File Descriptions:
    
    AMYMENU  TBC  Menu program to provide access to the other programs.
    AMYABC   TBC  ABC musical program for picture/word/letter association.
    AMYBEARA TBC  Beary fun ABC's -- learn keyboard and printed letters.
    AMYBUNNY TBC  Bunny letters program to learn alphabet.
    AMYBEAR1 TBC  Beary Fun counting program. Learn counting and numbers.
    AMYFROG  TBC  Help the Froggy maze program for problem solving.
    AMYTRUCK TBC  Load the Truck program for shapes, colors.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABC.BAS

```bas
10 '                            A B C . B A S
20 '                                            Modified 8/10/86 10:46 pm
30 '
40 '    ABC will help a pre-schooler learn the alphabet, by
50 '    matching pictures with the letters as it plays the ABC song.
60 '
70 '    Screen 1 version for IBM PC.
80 '
90 SCREEN 1 : COLOR 0,1 : CLS : KEY OFF
100 LOCATE 7,2 : PRINT "A B C" : LOCATE 12,1 : PRINT "S O N G"
110 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
120 '
130 '
140 '         Poke subroutine ALOAD into memory.
150 '
160 DEF SEG : ALOAD= 48000.
170 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
180 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
190 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
200 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
210 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
220 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
230 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
240 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
250 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
260 '
270 '           Load the title picture onto the screen.
280 '
290 SEG2%=&HB800 : BERR%=0 : FILE$="ABC1.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
300 '
310 DIM A(150),B(150),C(150),D(150),E(150),F(150),G(150),H(150),I(150),J(150)
320 DIM K(150),L(150),M(150),N(150),O(150),P(150),Q(150),R(150),S(150),T(150)
330 DIM U(150),V(150),W(150),X(150),Y(150),Z(150),BUNNY(150),RABBIT(150)
340 DIM XTL(28),YTL(28),XBR(28),YBR(28),LETTER(30),ALPHA(4)
350 DIM N$(40),T$(14)
360 FOR I=1 TO 7
370     XTL(I)=23+I*32 : XBR(I)=58+I*32 : YTL(I)=10 : YBR(I)=39
380     XTL(I+7)=23+I*32 : XBR(I+7)=58+I*32 : YTL(I+7)=50 : YBR(I+7)=79
390     XTL(I+14)=23+I*32 : XBR(I+14)=58+I*32 : YTL(I+14)=90 : YBR(I+14)=119
400     XTL(I+21)=20+I*35 : XBR(I+21)=55+I*35 : YTL(I+21)=140 : YBR(I+21)=169
410 NEXT I
420 XTL(6)=218 : XBR(22)=89 : XBR(19)=217 : XTL(21)=250 : XBR(26)=232
430 FOR I=1 TO 7
440     ON I GOTO 450,500,550,600,650,700,740
450     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),A
460     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),H
470     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),O
480     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),V
490     GOTO 770
500     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),B
510     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),I
520     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),P
530     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),W
540     GOTO 770
550     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),C
560     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),J
570     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),Q
580     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),X
590     GOTO 770
600     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),D
610     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),K
620     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),R
630     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Y
640     GOTO 770
650     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),E
660     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),L
670     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),S
680     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Z
690     GOTO 770
700     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),F
710     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),M
720     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),T
730     GOTO 770
740     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),G
750     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),N
760     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),U
770 NEXT I
780 XB=240 : YB=145 : GET (XB,YB)-(XB+25,YB+15),BUNNY
790 GET (21,59)-(36,84),RABBIT
800 CLS
810 LINE (0,0)-(319,199),2,B : LINE (0,35)-(319,35),2
820 '
830 '          Play the alphabet song.
840 '
850 DATA C4,C4,E4,E4,G4,G4,E2,F4,F4,E4,E4,D8,D8,D8,D8,C2
860 DATA C4,C4,E2,G4,G4,E2,F8F8F4,E2,D4D4,C2
870 DATA C4,NOW,C4,I'VE,E4,SAID,E4,MY,G4,A,G4,B,E2,C'S.
880 DATA F4,WILL,F4,YOU,E4,COME,E4,AND,D4,PLAY,D4,WITH,C2,ME?
890 IF N$(1)="" THEN FOR K=1 TO 26 : READ N$(K) : NEXT K
900 IF N$(27)="" THEN FOR K=27 TO 40 : READ N$(K),T$(K-26) : NEXT K
910 FOR K=1 TO 26
920   Y=INT(K/7)*40+50: X=(K MOD 7)*40+20
930   GOSUB 1150
940   IF K>21 THEN LINE (0,199)-(319,199),2
950   R=INT(K/7)*5+6 : C=(K MOD 7)*5+4 : LOCATE R,C
960   PRINT CHR$(ASC("A")+K-1);" ";CHR$(ASC("a")+K-1);
970   IF INKEY$=CHR$(27) THEN RUN"MENU"
980   PLAY "MFO3"+N$(K)
990 NEXT K
1000 LINE (0,199)-(319,199),2
1010 LINE (1,1)-(318,34),0,BF : NK=26
1020 FOR N=2 TO 3
1030   LOCATE N,5
1040   FOR K=1 TO 7
1050     NK=NK+1
1060     PRINT T$(NK-26);" "; : PLAY "MFO3"+N$(NK)
1070 IF INKEY$=CHR$(27) THEN RUN"MENU"
1080   NEXT K
1090 NEXT N
1100 FOR I=1 TO 500 : IF INKEY$=CHR$(27) THEN RUN"MENU" ELSE NEXT I
1110 GOTO 800
1120 RUN"menu"
1130 REM ---------- SUBROUTINE PLOT PICTURE AT (X,Y) FOR LETTER NUMBER K ----------
1140 '
1150     IF K<13 THEN ON K GOTO 1170,1180,1190,1200,1210,1220,1230,1240,1250,1260,1270,1280
1160     ON K-12 GOTO 1290,1300,1310,1320,1330,1340,1350,1360,1370,1380,1390,1400,1410,1420
1170     PUT (X,Y),A,PSET : RETURN
1180     PUT (X,Y),B,PSET : RETURN
1190     PUT (X,Y),C,PSET : RETURN
1200     PUT (X,Y),D,PSET : RETURN
1210     PUT (X,Y),E,PSET : RETURN
1220     PUT (X,Y),F,PSET : RETURN
1230     PUT (X,Y),G,PSET : RETURN
1240     PUT (X,Y),H,PSET : RETURN
1250     PUT (X,Y),I,PSET : RETURN
1260     PUT (X,Y),J,PSET : RETURN
1270     PUT (X,Y),K,PSET : RETURN
1280     PUT (X,Y),L,PSET : RETURN
1290     PUT (X,Y),M,PSET : RETURN
1300     PUT (X,Y),N,PSET : RETURN
1310     PUT (X,Y),O,PSET : RETURN
1320     PUT (X,Y),P,PSET : RETURN
1330     PUT (X,Y),Q,PSET : RETURN
1340     PUT (X,Y),R,PSET : RETURN
1350     PUT (X,Y),S,PSET : RETURN
1360     PUT (X,Y),T,PSET : RETURN
1370     PUT (X,Y),U,PSET : RETURN
1380     PUT (X,Y),V,PSET : RETURN
1390     PUT (X,Y),W,PSET : RETURN
1400     PUT (X,Y),X,PSET : RETURN
1410     PUT (X,Y),Y,PSET : RETURN
1420     PUT (X,Y),Z,PSET : RETURN
```

## BEAR123.BAS

```bas
10 '                     B E A R 1 2 3 . B A S         8/10/86 11:20 pm
20 '
30 '   BEARY FUN COUNTING helps a child with counting and with locating numbers
40 ' on the keyboard.  It displays a random number of fruit on the screen and
50 ' waits patiently until the proper number is pressed. For each correct answer
60 ' a bear face is placed on the border of the screen
70 ' The game continues until the border is filled with bears.
80 '
90 '    Converted for IBM-PC Screen 1.
100 '
110  SCREEN 1 : CLS : COLOR 0,0
120 LOCATE 6,10 : PRINT "BEARY FUN COUNTING";
130 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
140 '
150 '
160 '         Poke subroutine ALOAD into memory.
170 '
180 DEF SEG : ALOAD= 48000.
190 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
200 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
210 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
220 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
230 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
240 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
250 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
260 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
270 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
280 '
290 '           Load the title picture onto the screen.
300 '
310 SEG2%=&HB800 : BERR%=0 : FILE$="BEAR1231.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
320 '
330 '     get the pictures into arrays.
340 '
350 DIM CHERRY(100),ORANGE(100),PINEAPPLE(100),BANANA(100),APPLE(100),BEAR(400)
360 DIM X(9),Y(9) : FOR I=1 TO 9 : READ X(I),Y(I) : NEXT I : DATA 60,45,140,45,220,45,60,90,140,90,220,90,60,135,140,135,220,135
370 GET (154,91)-(168,105),CHERRY
380 GET (191,88)-(204,99),ORANGE
390 GET (225,72)-(239,99),PINEAPPLE
400 GET (200,60)-(210,74),BANANA
410 GET (167,66)-(184,80),APPLE
420 GET (77,76)-(100,98),BEAR
430 FOR I=1 TO 3000 : NEXT I
440 '
450 '   Start the game.
460 '
470 RANDOMIZE TIMER
480 REM
490 LINE (0,0)-(319,199),2,B
500 LINE (30,30)-(289,169),3,B
510 LINE (31,31)-(288,168),0,BF
520 '
530 '   Pick a number from 1 to 9 and one of the fruits.
540 '   Then place that many fruit on the screen.
550 '
560 N=INT(RND*9)+1
570 FRUIT=INT(RND*5)+1
580 IF N>=4 THEN I=1:GOSUB 900
590 IF N>=7 THEN I=2:GOSUB 900
600 IF N>=4 THEN I=3:GOSUB 900
610 IF N=2 OR N=3 OR N=6 OR N=8 OR N=9 THEN I=4:GOSUB 900
620 IF N=1 OR N=3 OR N=5 OR N=7 OR N=9 THEN I=5 : GOSUB 900
630 IF N=2 OR N=3 OR N=6 OR N=8 OR N=9 THEN I=6 : GOSUB 900
640 IF N>=4 THEN I=7 : GOSUB 900
650 IF N>=7 THEN I=8 : GOSUB 900
660 IF N>=4 THEN I=9 : GOSUB 900
670 WHILE INKEY$<>"" : WEND
680 '
690 '   Wait until the proper number key is pressed.  (Quit if Q is pressed.)
700 '
710 R$=INKEY$
720 IF R$=CHR$(27)  THEN RUN"MENU
730 IF R$<>CHR$(48+N) THEN 710
740 '
750 '   The correct key was pressed, add a happy bear face to the border.
760 '
770 NB=NB+1
780 XB=(NB-1)*32+3 : YB=3
790 IF NB>10 THEN XB=292 : YB=(NB-10)*35+3
800 IF NB>14 THEN XB=3 : YB=(NB-14)*35+3
810 IF NB>18 THEN YB=173 : XB=(NB-19)*32+3
820 PUT(XB,YB),BEAR,PSET
830 SOUND 115+NB*5,1:SOUND 350+NB*5,1:SOUND 756+NB*5,1:SOUND 1036+NB*5,1:SOUND 1435+NB*5,1
840 FOR T=1 TO 100 : NEXT T
850 IF NB=28 THEN GOTO 990
860 GOTO 510
870 '
880 '   Subroutine to plot a piece of fruit at position I.
890 '
900 ON FRUIT GOTO 910,920,930,940,950
910 PUT (X(I),Y(I)),CHERRY : RETURN
920 PUT (X(I),Y(I)),ORANGE : RETURN
930 PUT (X(I),Y(I)),PINEAPPLE : RETURN
940 PUT (X(I),Y(I)),BANANA : RETURN
950 PUT (X(I),Y(I)),APPLE : RETURN
960 '
970 '   The screen is full of bears, congratulate the kid.
980 '
990 LOCATE 10,19 : PRINT "YAY!"
1000 LOCATE 16,16:PRINT "YOU DID IT!"
1010 FOR T=1 TO 10 : SOUND 1435,1 : SOUND 1100,1 : NEXT T
1020 '
1030 '   Reset the game and go back for a new one.
1040 '
1050 R$=INKEY$ : IF R$<>"" THEN 1050
1060 FOR I=1 TO 3000 : NEXT I
1070 CLS : NB=0
1080 GOTO 480
1090 END
```

## BEARABC.BAS

```bas
10 '                     B E A R A B C . B A S    8/10/86 11:10 pm
20 '
30 '     BEARY FUN ABC'S will help associate each picture with the
40 '     letter and the keyboard key.  It displays the picture then
50 '     waits for the entry of the proper key.  If the key isn't 
60 '     pressed in 3 seconds, the letter will also be displayed on
70 '     the screen.  Each time the right key is pressed, a bear
80 '     is placed on the screen.
90 '
100 '    Modified for IBM-PC screen 1
110 '
120 '    Initialize all variables and arrays.
130 '
140 SCREEN 1 : COLOR 0,0 : CLS
150 LOCATE 6,1 : PRINT "Beary";
160 LOCATE 7,2 : PRINT "Fun"; : LOCATE 12,1 : PRINT "Letters";
170 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
180 '
190 '
200 '         Poke subroutine ALOAD into memory.
210 '
220 DEF SEG : ALOAD= 48000.
230 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
240 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
250 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
260 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
270 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
280 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
290 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
300 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
310 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
320 '
330 '           Load the title picture onto the screen.
340 '
350 SEG2%=&HB800 : BERR%=0 : FILE$="BEARABC1.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
360 UP$=CHR$(0)+CHR$(72) : DN$=CHR$(0)+CHR$(80)
370 LT$=CHR$(0)+CHR$(75) : RT$=CHR$(0)+CHR$(77)
380 DIM A(150),B(150),C(150),D(150),E(150),F(150),G(150),H(150),I(150),J(150)
390 DIM K(150),L(150),M(150),N(150),O(150),P(150),Q(150),R(150),S(150),T(150)
400 DIM U(150),V(150),W(150),X(150),Y(150),Z(150),BEAR(150)
410 DIM XTL(28),YTL(28),XBR(28),YBR(28),LETTER(30),ALPHA(4)
420 DIM N$(40),T$(14)
430 FOR I=1 TO 7
440     XTL(I)=23+I*32 : XBR(I)=58+I*32 : YTL(I)=10 : YBR(I)=39
450     XTL(I+7)=23+I*32 : XBR(I+7)=58+I*32 : YTL(I+7)=50 : YBR(I+7)=79
460     XTL(I+14)=23+I*32 : XBR(I+14)=58+I*32 : YTL(I+14)=90 : YBR(I+14)=119
470     XTL(I+21)=20+I*35 : XBR(I+21)=55+I*35 : YTL(I+21)=140 : YBR(I+21)=169
480 NEXT I
490 XTL(6)=218 : XBR(22)=89 : XBR(19)=217 : XTL(21)=250 : XBR(26)=232
500 RANDOMIZE TIMER
510 '
520 '           Sort the letters into random order for a new game.
530 '
540 FOR I=1 TO 26 : LETTER(I)=I : NEXT I
550 LETTER(27)=INT(RND*26)+1 : LETTER(28)=INT(RND*26)+1
560 FOR I=1 TO 100
570     J=INT(RND*26)+1 : K=INT(RND*26)+1
580     T=LETTER(J) : LETTER(J)=LETTER(K) : LETTER(K)=T
590 NEXT I
600 '
610 '           Load the pictures and store each one in an array.
620 '
630 FOR I=1 TO 7
640     ON I GOTO 650,700,750,800,850,900,940
650     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),A
660     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),H
670     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),O
680     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),V
690     GOTO 970
700     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),B
710     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),I
720     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),P
730     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),W
740     GOTO 970
750     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),C
760     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),J
770     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),Q
780     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),X
790     GOTO 970
800     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),D
810     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),K
820     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),R
830     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Y
840     GOTO 970
850     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),E
860     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),L
870     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),S
880     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Z
890     GOTO 970
900     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),F
910     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),M
920     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),T
930     GOTO 970
940     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),G
950     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),N
960     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),U
970 NEXT I
980 GET (10,59)-(32,84),BEAR
990 '
1000 '           Prepare for a new game.
1010 '
1020 CLS
1030 N=0 : NB=0
1040 LINE (0,0)-(319,199),2,B
1050 LINE (30,30)-(289,169),2,B
1060 LINE (31,31)-(288,168),0,BF
1070 '
1080 '           Pick the next letter and display the picture on the screen.
1090 '
1100 N=N+1 : K=LETTER(N) : X=150 : Y=90 : GOSUB 1750
1110 U$=CHR$(K-1+ASC("A")) : L$=CHR$(K-1+ASC("a"))
1120 WT=0
1130 '
1140 '           Wait until the proper key is pressed.
1150 '           If WT gets to 150, display the letters on the screen.
1160 R$=INKEY$
1170 WT=WT+1 : IF WT=150 THEN LOCATE 10,19 : PRINT U$;" ";L$ : WT=0
1180 IF R$=CHR$(27) THEN RUN"MENU
1190 IF R$<>L$ AND R$<>U$ THEN 1160
1200 '
1210 '           The correct key was pressed, put a bear face on the border.
1220 '
1230 NB=NB+1
1240 XB=(NB-1)*32+3 : YB=3
1250 IF NB>10 THEN XB=292 : YB=(NB-10)*35+3
1260 IF NB>14 THEN XB=3 : YB=(NB-14)*35+3
1270 IF NB>18 THEN YB=173 : XB=(NB-19)*32+3
1280 PUT (XB,YB),BEAR,PSET
1290 SOUND 115+NB*5,1 : SOUND 350+NB*5,1 : SOUND 756+NB*5,1 : SOUND 1036+NB*5,1 : SOUND 1435+NB*5,1
1300 IF NB<28 THEN GOTO 1060
1310 '
1320 '           The border is filled with bears, congratulate the kid.
1330 '
1340 LOCATE 10,16:PRINT "YAY  ";N$;"!"
1350 SOUND 115+NB*5,1:SOUND 350+NB*5,1:SOUND 756+NB*5,1:SOUND 1036+NB*5,1:SOUND 1435+NB*5,1
1360 LOCATE 16,16:PRINT "YOU DID IT!"
1370 FOR T=1 TO 10 : SOUND 1435,1 : SOUND 1100,1 : NEXT T
1380 FOR I=1 TO 3000 : NEXT I
1390 R$=INKEY$ : IF R$<>"" THEN 1390
1400 '
1410 '          End the game by playing the alphabet song.
1420 '
1430 CLS
1440 LINE (0,0)-(319,199),2,B : LINE (0,35)-(319,35),2
1450 DATA C4,C4,E4,E4,G4,G4,E2,F4,F4,E4,E4,D8,D8,D8,D8,C2
1460 DATA C4,C4,E2,G4,G4,E2,F8F8F4,E2,D4D4,C2
1470 DATA C4,NOW,C4,I'VE,E4,SAID,E4,MY,G4,A,G4,B,E2,C'S.
1480 DATA F4,WILL,F4,YOU,E4,COME,E4,AND,D4,PLAY,D4,WITH,C2,ME?
1490 IF N$(1)<>"" THEN GOTO 1520
1500 FOR K=1 TO 26 : READ N$(K) : NEXT K
1510 FOR K=27 TO 40 : READ N$(K),T$(K-26) : NEXT K
1520 FOR K=1 TO 26
1530   Y=INT(K/7)*40+50: X=(K MOD 7)*40+20
1540   GOSUB 1750
1550   IF K>20 THEN LINE (0,199)-(319,199),2
1560   R=INT(K/7)*5+6 : C=(K MOD 7)*5+4 : LOCATE R,C
1570   PRINT CHR$(ASC("A")+K-1);" ";CHR$(ASC("a")+K-1);
1580   PLAY "MFO3"+N$(K)
1590 NEXT K
1600 LINE (0,199)-(319,199),2
1610 LINE (1,1)-(318,34),0,BF
1620 FOR N=2 TO 3
1630   LOCATE N,5
1640   FOR K=1 TO 7
1650     NK=K+(N-2)*7
1660     PRINT T$(NK);" "; : PLAY "MFO3"+N$(NK+26)
1670   NEXT K
1680 NEXT N
1690 LINE (1,1)-(318,34),0,BF
1700 LOCATE 3,5
1710 FOR I=1 TO 3000 : NEXT I
1720 GOTO 1020
1730 REM ---------- SUBROUTINE PLOT PICTURE AT (X,Y) FOR LETTER NUMBER K ----------
1740 '
1750     IF K<13 THEN ON K GOTO 1770,1780,1790,1800,1810,1820,1830,1840,1850,1860,1870,1880
1760     ON K-12 GOTO 1890,1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2010,2020
1770     PUT (X,Y),A,PSET : RETURN
1780     PUT (X,Y),B,PSET : RETURN
1790     PUT (X,Y),C,PSET : RETURN
1800     PUT (X,Y),D,PSET : RETURN
1810     PUT (X,Y),E,PSET : RETURN
1820     PUT (X,Y),F,PSET : RETURN
1830     PUT (X,Y),G,PSET : RETURN
1840     PUT (X,Y),H,PSET : RETURN
1850     PUT (X,Y),I,PSET : RETURN
1860     PUT (X,Y),J,PSET : RETURN
1870     PUT (X,Y),K,PSET : RETURN
1880     PUT (X,Y),L,PSET : RETURN
1890     PUT (X,Y),M,PSET : RETURN
1900     PUT (X,Y),N,PSET : RETURN
1910     PUT (X,Y),O,PSET : RETURN
1920     PUT (X,Y),P,PSET : RETURN
1930     PUT (X,Y),Q,PSET : RETURN
1940     PUT (X,Y),R,PSET : RETURN
1950     PUT (X,Y),S,PSET : RETURN
1960     PUT (X,Y),T,PSET : RETURN
1970     PUT (X,Y),U,PSET : RETURN
1980     PUT (X,Y),V,PSET : RETURN
1990     PUT (X,Y),W,PSET : RETURN
2000     PUT (X,Y),X,PSET : RETURN
2010     PUT (X,Y),Y,PSET : RETURN
2020     PUT (X,Y),Z,PSET : RETURN
```

## BUNNY.BAS

```bas
10 '                       B U N N Y . B A S
20 '                                            Modified 8/10/86 11:18 pm
30 '
40 '    BUNNY LETTERS will help a pre-schooler learn the alphabet, by
50 '    matching pictures with the letters they start with.
60 '
70 '    Converted for IBM-PC Screen 1.
80 '
90 '    Initialize all variables and arrays.
100 '
110 SCREEN 1 : COLOR 0,1 : CLS
120 LOCATE 7,2 : PRINT "Bunny"; : LOCATE 12,1 : PRINT "Letters";
130 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
140 '
150 '
160 '         Poke subroutine ALOAD into memory.
170 '
180 DEF SEG : ALOAD= 48000.
190 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
200 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
210 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
220 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
230 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
240 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
250 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
260 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
270 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
280 '
290 '           Load the title picture onto the screen.
300 '
310 SEG2%=&HB800 : BERR%=0 : FILE$="BUNNY1.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
320 UP$=CHR$(0)+CHR$(72) : DN$=CHR$(0)+CHR$(80)
330 LT$=CHR$(0)+CHR$(75) : RT$=CHR$(0)+CHR$(77)
340 DIM A(150),B(150),C(150),D(150),E(150),F(150),G(150),H(150),I(150),J(150)
350 DIM K(150),L(150),M(150),N(150),O(150),P(150),Q(150),R(150),S(150),T(150)
360 DIM U(150),V(150),W(150),X(150),Y(150),Z(150),BUNNY(150),RABBIT(150)
370 DIM XTL(28),YTL(28),XBR(28),YBR(28),LETTER(30),ALPHA(4)
380 DIM N$(40),T$(14)
390 M1$= "C4C4E4E4G4G4E2F4F4E4E4D8D8D8D8C2"
400 M2$= "C4C4E2G4G4E2F2E2D2C2"
410 M$=M1$+M2$
420 FOR I=1 TO 7
430     XTL(I)=23+I*32 : XBR(I)=58+I*32 : YTL(I)=10 : YBR(I)=39
440     XTL(I+7)=23+I*32 : XBR(I+7)=58+I*32 : YTL(I+7)=50 : YBR(I+7)=79
450     XTL(I+14)=23+I*32 : XBR(I+14)=58+I*32 : YTL(I+14)=90 : YBR(I+14)=119
460     XTL(I+21)=20+I*35 : XBR(I+21)=55+I*35 : YTL(I+21)=140 : YBR(I+21)=169
470 NEXT I
480 XTL(6)=218 : XBR(22)=89 : XBR(19)=217 : XTL(21)=250 : XBR(26)=232
490 RANDOMIZE TIMER
500 '
510 '           Sort the letters for a new game.
520 '
530 FOR I=1 TO 26 : LETTER(I)=I : NEXT I
540 FOR I=1 TO 50
550     J=INT(RND*26)+1 : K=INT(RND*26)+1
560     T=LETTER(J) : LETTER(J)=LETTER(K) : LETTER(K)=T
570 NEXT I
580 '
590 '           Load the pictures and store each one in an array.
600 '
610 FOR I=1 TO 7
620     ON I GOTO 630,680,730,780,830,880,920
630     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),A
640     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),H
650     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),O
660     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),V
670     GOTO 950
680     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),B
690     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),I
700     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),P
710     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),W
720     GOTO 950
730     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),C
740     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),J
750     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),Q
760     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),X
770     GOTO 950
780     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),D
790     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),K
800     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),R
810     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Y
820     GOTO 950
830     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),E
840     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),L
850     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),S
860     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Z
870     GOTO 950
880     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),F
890     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),M
900     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),T
910     GOTO 950
920     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),G
930     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),N
940     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),U
950 NEXT I
960 XB=240 : YB=145 : GET (XB,YB)-(XB+25,YB+15),BUNNY
970 GET (21,59)-(36,84),RABBIT
980 CLS
990 '
1000 '           Clear the screen for a set of five rounds.
1010 '
1020 LINE (0,0)-(319,199),2,B : LINE (0,35)-(319,35),2
1030 FOR N=1 TO 5
1040 '
1050 '           Select four letters and place them on the screen
1060 '
1070   FOR R=1 TO 4 : ALPHA(R)=LETTER((N-1)*4+R) : NEXT R
1080   FOR R=1 TO 10 : I=INT(RND*4)+1 : J=INT(RND*4)+1
1090     T=ALPHA(I) : ALPHA(I)=ALPHA(J) : ALPHA(J)=T
1100   NEXT R
1110   FOR J=1 TO 4
1120     K=LETTER((N-1)*4+J) : L=ALPHA(J)
1130     LOCATE J*5+3,30 : PRINT CHR$(ASC("A")+L-1);" ";CHR$(ASC("a")+L-1)
1140     X=55 : Y=J*40+1
1150     GOSUB 2060 ' PUT PICTURE AT (X,Y) FOR LETTER NUMBER K
1160   NEXT J
1170 LOCATE 1,1
1180 '
1190 '           Place the pictures in a different order on the left side.
1200 '
1210 FOR J=1 TO 4
1220    K=LETTER((N-1)*4+J)
1230    FOR I=1 TO 4
1240      IF ALPHA(I)=K THEN TB=I*40+10
1250    NEXT I
1260 XB=95 : YB=J*40+10 : PUT (XB,YB),BUNNY,>= : XL(J)=XB-1 : YL(J)=YB+5 : XR(J)=XB-1 : YR(J)=YL(J)
1270 '
1280 '           Redraw all current lines on the screen and wait for a
1290 '           key press on the keyboard
1300 '
1310 FOR I=1 TO J-1 : LINE (XL(I),YL(I))-(XR(I),YR(I)),1 : NEXT I
1320 LINE(XL(J),YL(J))-(XR(J),YR(J)),2
1330 C$=INKEY$ : IF C$="" THEN 1330
1340 '
1350 '           A key was pressed, respond to it.
1360 '
1370 IF C$=CHR$(27) THEN RUN "MENU"
1380 IF C$=UP$ THEN YD=-10: GOTO 1470
1390 IF C$=DN$ THEN YD=+10: GOTO 1470
1400 IF C$=RT$ THEN XD=+10: GOTO 1470
1410 IF C$=LT$ THEN XD=-10: GOTO 1470
1420 IF C$="q" OR C$="Q" THEN RUN "MENU"
1430 GOTO 1330
1440 '
1450 '           Move the bunny in the direction indicated.
1460 '
1470 PUT (XB,YB),BUNNY,>= : LINE(XL(J),YL(J))-(XR(J),YR(J)),0
1480 IF XB+XD>=95 AND XB+XD<=205 THEN XB=XB+XD : XR(J)=XR(J)+XD
1490 IF YB+YD>=50 AND YB+YD<=170 THEN YB=YB+YD : YR(J)=YR(J)+YD
1500 PUT (XB,YB),BUNNY,>= : XD=0 : YD=0
1510 WHILE INKEY$<>"" : WEND
1520 IF XB<>205 OR YB<>TB THEN 1310
1530 '
1540 '          The bunny has reached the right letter,
1550 '          change the line to blue, and put the rabbit on the right side.
1560 '
1570 XR(J)=XR(J)+30
1580 PUT (XB,YB),BUNNY,>= : PUT (XB+80,YB),BUNNY,PSET
1590 LINE (XL(J),YL(J))-(XR(J),YR(J)),1
1600 PLAY "O3C32E32G32O4C8"
1610 WHILE INKEY$<>"" : WEND
1620 NEXT J
1630 '
1640 '          All lines are connected, put a rabbit on the top of the screen.
1650 '          Then clear the screen for a new round.
1660 '
1670 FOR W=1 TO 500 : NEXT W : PLAY "O4C32E32G32O5C8"
1680 PUT ((N-1)*60+25,5),RABBIT,PSET
1690 FOR I=1 TO 2000 : NEXT I
1700 LINE (1,36)-(318,198),0,BF
1710 NEXT N
1720 '
1730 '          All rabbits are in the top row.  End the game
1740 '          by playing the alphabet song.
1750 '
1760 DATA C4,C4,E4,E4,G4,G4,E2,F4,F4,E4,E4,D8,D8,D8,D8,C2
1770 DATA C4,C4,E2,G4,G4,E2,F8F8F4,E2,D4D4,C2
1780 DATA C4,NOW,C4,I'VE,E4,SAID,E4,MY,G4,A,G4,B,E2,C'S.
1790 DATA F4,WILL,F4,YOU,E4,COME,E4,AND,D4,PLAY,D4,WITH,C2,ME?
1800 IF N$(1)<>"" THEN GOTO 1830
1810 FOR K=1 TO 26 : READ N$(K) : NEXT K
1820 FOR K=27 TO 40 : READ N$(K),T$(K-26) : NEXT K
1830 FOR K=1 TO 26
1840   Y=INT(K/7)*40+50: X=(K MOD 7)*40+20
1850   GOSUB 2060
1860   IF K>20 THEN LINE (0,199)-(319,199),2
1870   R=INT(K/7)*5+6 : C=(K MOD 7)*5+4 : LOCATE R,C
1880   PRINT CHR$(ASC("A")+K-1);" ";CHR$(ASC("a")+K-1);
1890   PLAY "MFO3"+N$(K)
1900 NEXT K
1910 LINE (0,199)-(319,199),2
1920 LINE (1,1)-(318,34),0,BF
1930 FOR N=2 TO 3
1940   LOCATE N,5
1950   FOR K=1 TO 7
1960   NK=(N-2)*7+K
1970     PRINT T$(NK);" "; : PLAY "MFO3"+N$(NK+26)
1980   NEXT K
1990 NEXT N
2000 LINE (1,1)-(318,34),0,BF
2010 LOCATE 3,5
2020 FOR I= 1 TO 3000 : NEXT I
2030 GOTO 980
2040 REM ---------- SUBROUTINE PLOT PICTURE AT (X,Y) FOR LETTER NUMBER K ----------
2050 '
2060     IF K<13 THEN ON K GOTO 2080,2090,2100,2110,2120,2130,2140,2150,2160,2170,2180,2190
2070     ON K-12 GOTO 2200,2210,2220,2230,2240,2250,2260,2270,2280,2290,2300,2310,2320,2330
2080     PUT (X,Y),A,PSET : RETURN
2090     PUT (X,Y),B,PSET : RETURN
2100     PUT (X,Y),C,PSET : RETURN
2110     PUT (X,Y),D,PSET : RETURN
2120     PUT (X,Y),E,PSET : RETURN
2130     PUT (X,Y),F,PSET : RETURN
2140     PUT (X,Y),G,PSET : RETURN
2150     PUT (X,Y),H,PSET : RETURN
2160     PUT (X,Y),I,PSET : RETURN
2170     PUT (X,Y),J,PSET : RETURN
2180     PUT (X,Y),K,PSET : RETURN
2190     PUT (X,Y),L,PSET : RETURN
2200     PUT (X,Y),M,PSET : RETURN
2210     PUT (X,Y),N,PSET : RETURN
2220     PUT (X,Y),O,PSET : RETURN
2230     PUT (X,Y),P,PSET : RETURN
2240     PUT (X,Y),Q,PSET : RETURN
2250     PUT (X,Y),R,PSET : RETURN
2260     PUT (X,Y),S,PSET : RETURN
2270     PUT (X,Y),T,PSET : RETURN
2280     PUT (X,Y),U,PSET : RETURN
2290     PUT (X,Y),V,PSET : RETURN
2300     PUT (X,Y),W,PSET : RETURN
2310     PUT (X,Y),X,PSET : RETURN
2320     PUT (X,Y),Y,PSET : RETURN
2330     PUT (X,Y),Z,PSET : RETURN
```

## FROG.BAS

```bas
10 '             F R O G . B A S          8/10/86 11:21 PM
20 '
30 '    HELP THE FROGGY generates random mazes for a child to solve
40 '    by guiding a frog to the lily pad at the end of the maze.
50 '    The size of the maze may be set to a 5x5, 6x6, or 7x7 maze by changing
60 '    the value for the variable SIZE in line 120 below.
70 '
80 '    Converted for IBM-PC Screen 1.
90 '
100 ' **      Algorithm for generic maze generator by Dan Rollins, 04/25/83
110 ' **      Rest of program by Rob Robinson 12/28/85
120 '
130 '    Initialize all variables.
140 '
150 DEFINT A-R,T-Z
160 SCREEN 1 : COLOR 1,0 : CLS
170 LOCATE 2,13 : PRINT "HELP THE FROGGY"
180 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
190 '
200 '
210 '         Poke subroutine ALOAD into memory.
220 '
230 DEF SEG : ALOAD!= 48000.
240 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD!+IB,BYTE : NEXT IB
250 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
260 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
270 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
280 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
290 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
300 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
310 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
320 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
330 '
340 '           Load the title picture onto the screen.
350 '
360 SEG2%=&HB800 : BERR%=0 : FILE$="FROG1.PIC" : CALL ALOAD!(FILE$,SEG2%,BERR%)
370 SIZE=7
380 DIM T(5),MZ(100,100)
390 DIM YD(3),XD(3) : YD(0)=-1 : XD(1)=1 : YD(2)=1 : XD(3)=-1
400 DIM PWR2(3) : PWR2(0)=1 : PWR2(1)=2 : PWR2(2)=4 : PWR2(3)=8
410 RANDOMIZE TIMER
420 DIM FROGGY(250),PAD(250)
430 '
440 '   Load the title picture onto the screen and fill the graphics arrays.
450 '
460 LOCATE 25,7
470 GET (41,20)-(71,36),FROGGY
480 GET (236,150)-(285,165),PAD
490 '
500 '   Generate a random maze.
510 '
520 H=SIZE-1 : V=SIZE-1 : TH=H*30+3 : TV=V*20+30
530 X=INT(RND*H) : Y=INT(RND*V)
540 GOSUB 710
550 MZ(0,0)=MZ(0,0)+1
560 '
570 '   Display the maze on the screen.
580 '
590 GOSUB 940
600 '
610 '   Solve the maze.
620 '
630 GOSUB 1130
640 '
650 '   Go back for another maze.
660 '
670 GOTO 420
680 '
690 '           Subroutine to generate a randome maze.
700 '
710 FOR J=0 TO H : FOR K=0 TO V : MZ(J,K)=0 : NEXT : NEXT
720 LS=1
730 RC=0 : TR=(H+1)*(V+1)-1
740 Q=0 : IF RC=TR THEN RETURN
750 IF PLAY(0)<4 THEN GOSUB 1820
760 IF Y>0 THEN IF MZ(X,Y-1)=0 THEN Q=Q+1 : T(Q)=0
770 IF X<H THEN IF MZ(X+1,Y)=0 THEN Q=Q+1 : T(Q)=1
780 IF Y<V THEN IF MZ(X,Y+1)=0 THEN Q=Q+1 : T(Q)=2
790 IF X>0 THEN IF MZ(X-1,Y)=0 THEN Q=Q+1 : T(Q)=3
800 IF Q=0 GOTO 880
810 D=INT(RND*Q)+1 : DIR=T(D)
820 MZ(X,Y)=MZ(X,Y)+PWR2(DIR)
830 Y=Y+YD(DIR) : X=X+XD(DIR)
840 ND=DIR-2 : IF ND<0 THEN ND=4+ND
850 MZ(X,Y)=MZ(X,Y)+PWR2(ND)
860 RC=RC+1
870 GOTO 740
880 Y=Y+1 : IF Y>V THEN Y=0 : X=X+1 : IF X>H THEN X=0
890 IF MZ(X,Y)=0 THEN 880
900 GOTO 740
910 '
920 '           Subroutine to display the maze on the screen.
930 '
940 CLS : LOCATE 25,7
950 PRINT "H E L P   T H E   F R O G G Y";
960 DX=30 : DY=20 : PX=DX : PY=DY : CL=3
970 FOR Y=0 TO V
980   FOR X=0 TO H
990     IF INT(MZ(X,Y)/2)=MZ(X,Y)/2 THEN LINE (PX,PY)-(PX+DX,PY),CL : PX=PX+DX : GOTO 1010
1000     PX=PX+DX
1010   NEXT X : PX=DX
1020   FOR X=0 TO H
1030     IF MZ(X,Y)>7 THEN PX=PX+DX : GOTO 1050
1040     LINE(PX,PY)-(PX,PY+DY),CL : PX=PX+DX
1050   NEXT X : LINE(PX,PY)-(PX,PY+DY),CL : PX=DX : PY=PY+DY
1060 NEXT Y
1070 FOR X=0 TO H-1
1080 LINE (PX,PY)-(PX+DX,PY),CL : PX=PX+DX
1090 NEXT X
1100 RETURN
1110 '
1120 '           Subroutine to solve the maze.
1130 '          Set up variables for playing
1140 '
1150 PX=DX+1 : PY=DY+1 : MOVES=0
1160 BLANK=0 : RED=2 : BLUE=1
1170 NUL$=CHR$(0) : UP$=NUL$+CHR$(72) : DN$=NUL$+CHR$(80)
1180 RT$=NUL$+CHR$(77) : LT$=NUL$+CHR$(75) : STIME$=TIME$
1190 PUT (PX*(V+1)-8,PY*(V+2)+8),PAD,PSET
1200 PUT (PX,PY),FROGGY,>=
1210 C$=INKEY$ : IF C$=CHR$(27) THEN RUN"menu"
1220 IF C$<>"" THEN 1210
1230 '
1240 '           Wait until a key is pressed, then compute the direction desired
1250 '
1260 C$=INKEY$ : IF C$="" THEN 1260
1270 DX=0 : DY=0 : TX=0 : TY=0
1280 IF C$=CHR$(27) THEN RUN "menu"
1290 IF C$=UP$ AND PY>21 THEN DY=-20 : TY=-1
1300 IF C$=DN$ AND PY<TV THEN DY=20 : TY=+19
1310 IF C$=RT$ AND PX<TH THEN DX=30 : TX=+29
1320 IF C$=LT$ AND PX>31 THEN DX=-30 : TX=-1
1330 IF DX=0 AND DY=0 THEN 1260
1340 '
1350 '           Check to see if a maze wall is blocking the desired path.
1360 '
1370 S=POINT (PX+TX,PY+TY)
1380 IF S<>BLANK AND S<>RED AND S<>BLUE THEN 1260
1390 '
1400 '           Move the froggy to the new spot.
1410 '
1420 S=POINT(PX+DX+15,PY+DY+10)
1430 PUT (PX,PY),FROGGY,>=
1440 SOUND  37,4 :SOUND  88,2
1450 '
1460 '           If the frog moved backwards, erase the red line.
1470 '           If it moved forward, plot a red line showing the path.
1480 '
1490 IF S=RED THEN LINE (PX+15,PY+10)-(PX+DX+15,PY+DY+10),BLANK ELSE LINE (PX+15,PY+10)-(PX+DX+15,PY+DY+10),RED
1500 '
1510 '           Update the coordinates and the number of moves.
1520 '
1530 PX=PX+DX : PY=PY+DY : MOVES=MOVES+1
1540 LOCATE 24,1 : PRINT MOVES;" moves";
1550 '
1560 '           If the frog isn't on the pad yet, go back for another move.
1570 '
1580 IF PX>TH-30 AND PY>TV THEN 1630 ELSE 1200
1590 '
1600 '           The frog is on the pad, give him a fly to catch and eat.
1610 '           then go back for another game with a new maze.
1620 '
1630 PUT (PX,PY),FROGGY,PSET : LOCATE 1,1
1640 FL=PX+50 : FR=PX+75 : FT=PY : FB=PY+15 : FX=FR : FY=FB
1650 FOR I=1 TO 50
1660   PSET (FX,FY),0 : FX=INT(RND*6-3)+FX : FY=INT(RND*6-3)+FY
1670   PSET (FX,FY),3
1680   SOUND 37+RND*25,0.25
1685   FOR J=1 TO 10 : NEXT J
1690 NEXT I
1700 LINE (PX+28,PY+6)-(FX,FY),RED
1710 SOUND 1050,0.5
1720 LINE (PX+28,PY+6)-(FX,FY),0
1730 FOR I=1 TO 25 : SOUND 97,0.02
1740 LINE (PX+23,PY+6)-(PX+28,PY+6),1 : LINE (PX+23,PY+6)-(PX+28,PY+6),0
1750 FOR J=1 TO 100 : NEXT J
1760 NEXT I
1770 PSET (PX+23,PY+6),1 : PSET (PX+24,PY+5),0
1780 T$=INKEY$ : IF T$="" THEN 1810
1790 IF T$=CHR$(27) THEN RUN"MENU"
1800 GOTO 1780
1810 GOTO 520
1820 '
1830 '          SUBROUTINE TO PLAY "FROGGY WENT A COURTIN"
1840 '
1850 ON LS GOTO 1860,1880,1900
1860 PLAY "MBMST200O1C4F8F8F8F8F8F8A4 G4 D4MLC4F2F4C4F2F4P4"
1870 GOTO 1910
1880 PLAY "MSA8>C8C8C8C8C8D4C4<A4 F4"
1890 GOTO 1910
1900 PLAY "  MST200G4F4F4MLF8G8MSA4F4D4MLC4F2F4C4F4F2"
1910 LS=LS+1 : IF LS=4 THEN LS=1
1920 RETURN
```

## MENU.BAS

```bas
10 '                   M E N U . B A S                 5/25/87 11:49 am
20 '
30 '   MENU provides a menu for access to Amy's First Primer.  It loads
40 '   a picture with the menu on it, and then let's a child select the
50 '   desired program by moving a big blue arrow up or down with the
60 '   cursor keys.  The name of the program is also highlighted in blue when
70 '   the arrow points to it.  When the child presses the ENTER key, the
80 '   program with the arrow pointing to it will be run.
90 '
100 '    Converted for IBM-PC Screen 1
110 '
120 CLEAR ,48000. : SCREEN 1 : COLOR 0,1 : KEY OFF : CLS
130 LOCATE 22,12 : PRINT "AMY'S FIRST PRIMER  1.2"
140 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
150 '
160 '
170 '         Poke subroutine ALOAD into memory.
180 '
190 DEF SEG : ALOAD= 48000.
200 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
210 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
220 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
230 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
240 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
250 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
260 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
270 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
280 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
290 '
300 '           Load the menu picture onto the screen.
310 '
320 SEG2%=&HB800 : BERR%=0 : FILE$="MENU1.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
330 MYNAME$="AMY"
340 LOCATE 22,15-LEN(MYNAME$) : PRINT MYNAME$;
350 '
360 '           Initialize all necessary variables.
370 '
380 UP$=CHR$(0)+CHR$(72) : DN$=CHR$(0)+CHR$(80)
390 TITLE$(1)="ABC SONG"
400 TITLE$(2)="BEARY FUN LETTERS"
410 TITLE$(3)="BUNNY LETTERS"
420 TITLE$(4)="BEARY FUN COUNTING"
430 TITLE$(5)="HELP THE FROGGY"
440 TITLE$(6)="LOAD THE TRUCK"
450 '
460 '           Get the arrow into an array, then point it at the first
470 '           program on the menu.
480 '
490 DIM ARROW(200) : GET (6,1)-(55,28),ARROW : LINE (6,1)-(55,28),0,BF
500 N=1 : X=6 : Y=1 : PUT (X,Y),ARROW,>= : ROW=3 : COL=22 : L=1
510 ' LOCATE ROW,COL : PRINT TITLE$(N);
520 WHILE INKEY$<>"" : WEND
530 '
540 '           Wait until one of the three command keys are pressed.
550 '           The up arrow will move the arrow up and select the previous
560 '           program.  The down arrow will move the arrow down and select
570 '           the next program.  The ENTER key will run the selected program.
580 '
590 K$=INKEY$ : IF K$="" THEN 590
600 IF K$=CHR$(13) THEN GOTO 790
610 IF K$=UP$ AND N>1 THEN N=N-1
620 IF K$=DN$ AND N<6 THEN N=N+1
630 '
640 '           Remove the arrow from the current program and place it on the
650 '           newly selected program.  Also change the current program name
660 '           back to red and the new program name to blue.
670 '
680 PUT (X,Y),ARROW,>= ' LOCATE ROW,COL : PRINT TITLE$(L);
690 Y=6+(N-1)*24 : ROW=N*3 : L=N
700 PUT (X,Y),ARROW,>= ' LOCATE ROW,COL : PRINT TITLE$(N);
710 WHILE INKEY$<>"" : WEND
720 '
730 '           Go back for another key press.
740 '
750 GOTO 590
760 '
770 '           The ENTER key was pressed, execute the selected program.
780 '
790 ON N GOTO 800,810,820,830,840,850
800 RUN"ABC"
810 RUN"BEARABC"
820 RUN"BUNNY"
830 RUN"BEAR123"
840 RUN"FROG"
850 RUN"TRUCK"
860 END
```

## START.BAS

```bas
10 '                    C O P Y R I T E . B A S          8/10/86
20 '
30 '    COPYRITE displays the copyright message for Amy's First Primer.
40 '
50 SCREEN 0 : WIDTH 40 : DEF SEG : KEY OFF : CLS
60 LOCATE 1,12 : COLOR 9,0 : PRINT "AMY'S FIRST PRIMER"
70 COLOR 5,0 : LOCATE 3,1
80 PRINT "This disk is dedicated to Amy, whose "
90 PRINT "birthday came on September 8. It helped"
100 PRINT "her wait another year for kindergarten"
110 PRINT
120 PRINT "We hope this disk will help your child"
130 PRINT "too. It's recommended for children 4-8."
140 PRINT "These programs should help to learn the"
150 PRINT "alphabet and the numbers 1 through 9."
160 PRINT "They will also help build skills in "
170 PRINT "problem solving and pattern matching."
180 PRINT : COLOR 5,0
190 PRINT "If you find the disk helpful,we request";
200 PRINT "that you send $15.00 to:"
210 COLOR 14,0
220 PRINT "             Rob Robinson "
230 PRINT "          523 Albany Ave. NE"
240 PRINT "        Orange City, IA  51041"
250 COLOR 5,0
260 PRINT "In appreciation, we'll send you a free"
270 PRINT "copy of the DRAW program used to create"
280 PRINT "the graphics for this disk."
290 PRINT : COLOR 9,0
300 PRINT "      Press any key to continue.";
310 PRINT : COLOR 4,0
320 PRINT " copyright 1985, Computing Specialties";
330 WHILE INKEY$="" : WEND
340 RUN "menu"
```

## TRUCK.BAS

```bas
10 '                            T R U C K . B A S          5/25/87 11:14 am
20 '
30 '    LOAD THE TRUCK helps with problem solving, pattern recognition,
40 '    and following orders.  Stock piles of shapes are stored on the
50 '    left side of the screen, with a loader in the middle and a
60 '    truck trailer at the bottom left.  A deisel tractor is at the
70 '    bottom right.  An order form at the top left of the screen 
80 '    indicates which shapes are needed on the trailer.  The child
90 '    must use the loader to fill the trailer with the same pattern
100 '   that is on the order form.  When the order is filled properly,
110 '   and the loader is out of the way, the tractor will back up
120 '   and haul the load away.
130 '
140 '   Converted for the IBM-PC Screen 1
150 '
160 SCREEN 1 : KEY OFF : CLS
170 COLOR 0,0 : LOCATE 25,7
180 PRINT "L O A D   T H E   T R U C K"
190 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
200 '
210 '
220 '         Poke subroutine ALOAD into memory.
230 '
240 DEF SEG : ALOAD= 48000.
250 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
260 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
270 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
280 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
290 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
300 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
310 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
320 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
330 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
340 '
350 '           Load the title picture onto the screen.
360 '
370 SEG2%=&HB800 : BERR%=0 : FILE$="TRUCK1.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
380 '
390 '   Fill the shape tables with the figures on the screen.
400 '
410 DIM LOADER(300), TRAILER(300), TRACTOR(300), COMBO(900)
420 DIM SQUARE(100),DIAMOND(100),RECTANGLE(100),TRIANGLE(100),SIRCLE(100)
430 GET (0,7)-(15,19),SQUARE : GET (0,32)-(15,44),DIAMOND
440 GET (0,57)-(15,69),RECTANGLE : GET (0,82)-(15,94),TRIANGLE
450 GET (0,107)-(15,119),SIRCLE  : GET (144,50)-(221,76),LOADER
460 GET (11,152)-(115,168),TRAILER : GET (246,135)-(305,170),TRACTOR
470 '
480 '   Fill the order square with four random shapes.
490 '
500 LINE (223,12)-(301,30),0,BF
510 RANDOMIZE TIMER
520 FOR I=1 TO 4
530     SHAPE=INT(RND*5)+1 : XS=215+I*18 : YS=16
540     GOSUB 2020  ' PLOT SHAPE AT XS,YS
550     ORDER(I)=SHAPE
560 NEXT I
570 '
580 '   Set up the variables for moving the loader.
590 '
600 XL=145 : YL=50 : LINE (XL,YL)-(221,76),0,BF : PUT (XL,YL),LOADER,>=
610 FOR I=1 TO 5 : NLEFT(I)=5 : NEXT I : S=1
620 YS=ORDER(S)*25-25 : NS=NLEFT(ORDER(S)) : XS=NS*15-15
630 NUL$=CHR$(0) : UP$=NUL$+CHR$(72) : DN$=NUL$+CHR$(80) : LT$=NUL$+CHR$(75)
640 RT$=NUL$+CHR$(77)
650 '
660 '   Let the buldozer move around the screen until the shape S is found.
670 '
680 C$=INKEY$
690 T=T+1 : IF T=10 THEN T=0 : SOUND 37,0.1
700 IF C$="" THEN 680
710 SOUND 37,0.1 : T=5
720 IF C$=CHR$(27) THEN RUN"MENU"
730 XO=XL : YO=YL
740 IF C$=LT$ THEN XL=XL+5*(XL>4) : GOTO 780
750 IF C$=RT$ THEN XL=XL-5*(XL<240) : GOTO 780
760 IF C$=UP$ THEN YL=YL+5*(YL>4)  : GOTO 780
770 IF C$=DN$ THEN YL=YL-5*(YL<150) : GOTO 780
780 PUT (XO,YO),LOADER,>=
790 PUT (XL,YL),LOADER,>=
800 WHILE INKEY$<>"" : WEND
810 IF YL<100 AND S=5 THEN GOTO 1610
820 IF XL<>XS OR YL<>YS THEN GOTO 680
830 '
840 '   The shape has been found, raise the hoist.
850 '
860 YS=YS+5 : GET (XS,YS)-(XS+17,YS+15),COMBO
870 LINE (XS,YS)-(XS+17,YS+15),0,BF : PUT (XS,YS),COMBO,>=
880 FOR I=1 TO 5
890   PUT (XS,YS),COMBO,>=
900   YS=YS-1
910   PUT (XS,YS),COMBO,>=
920   SOUND 100+I*5,1
930 NEXT I
940 GOSUB 2080
950 '
960 '   Get the loader and shape as one figure.
970 '
980 GET (XL+2,YL)-(XL+77,YL+25),COMBO : LINE (XL+2,YL)-(XL+77,YL+25),0,BF
990 PUT (XL,YL),COMBO,>= : XS=110 : YS=140
1000 '
1010 '   Let the buldozer move around the screen until it gets to the
1020 '   back of the trailer.
1030 '
1040 C$=INKEY$
1050 T=T+1 : IF T=10 THEN T=0 : SOUND 57,0.1
1060 IF C$="" THEN 1040
1070 SOUND 57,0.1 : T=5
1080 IF C$=CHR$(27) THEN RUN"MENU
1090 XO=XL : YO=YL
1100 IF C$=LT$ THEN XL=XL+5*(XL>4) : GOTO 1140
1110 IF C$=RT$ THEN XL=XL-5*(XL<240) : GOTO 1140
1120 IF C$=UP$ THEN YL=YL+5*(YL>4)  : GOTO 1140
1130 IF C$=DN$ THEN YL=YL-5*(YL<150) : GOTO 1140
1140 PUT (XO,YO),COMBO,>=
1150 PUT (XL,YL),COMBO,>=
1160 WHILE INKEY$<>"" : WEND
1170 IF XL<>XS OR YL<>YS THEN GOTO 1040
1180 '
1190 '   The trailer has been found, slide the shape back onto the truck
1200 '
1210 GET (XS-50,YS)-(XS+15,YS+13),COMBO
1220 LINE (XS-50,YS)-(XS+15,YS+13),0,BF : PUT (XS-50,YS),COMBO,>=
1230 FOR I=1 TO 15
1240   PUT (XS-50,YS),COMBO,>=
1250   XS=XS-1
1260   PUT (XS-50,YS),COMBO,>=
1270 SOUND 150+I*10,1
1280 NEXT I
1290 GOSUB 2080
1300 GET (XS+14,YS)-(XS+15,YS+13),COMBO : LINE (XS+14,YS)-(XS+15,YS+13),0,BF
1310 XS=XS+14 : PUT (XS,YS),COMBO,>=
1320 FOR I=1 TO 15
1330   PUT (XS,YS),COMBO,>=
1340   XS=XS+1
1350   PUT (XS,YS),COMBO,>=
1360 SOUND 300-I*10,1
1370 NEXT I
1380 GOSUB 2080
1390 '
1400 '   The shape has been loaded, lower the hoist.
1410 '
1420 YS=YL : XS=XL : GET (XS,YS)-(XS+15,YS+15),COMBO
1430 LINE (XS,YS)-(XS+15,YS+15),0,BF : PUT (XS,YS),COMBO,>=
1440 FOR I=1 TO 5
1450   PUT (XS,YS),COMBO,>=
1460   YS=YS+1
1470   PUT (XS,YS),COMBO,>=
1480 SOUND 125-I*5,1
1490 NEXT I
1500 GOSUB 2080
1510 '
1520 '   Switch to the regular loader again and go back for another shape.
1530 '
1540 LINE (XL,YL)-(XL+76,YL+26),0,BF
1550 PUT (XL,YL),LOADER,>=
1560 NLEFT(ORDER(S))=NLEFT(ORDER(S))-1
1570 S=S+1
1580 GOTO 620
1590 '
1600 '   The truck is loaded and the loader is out of the way,
1610 '  Back the truck up.
1620 '
1630 XT=246 : YT=133 : LINE (246,135)-(305,170),0,BF : PUT (XT,YT),TRACTOR,>=
1640 PLAY "O1C2P4C2"
1650 WHILE XT>100
1660   PUT (XT,YT),TRACTOR,>=
1670   XT=XT-5
1680   PUT (XT,YT),TRACTOR,>=
1690   SOUND 300,0.1
1700 WEND
1710 '
1720 '  Haul the load off
1730 '
1740 PLAY "O1C2P4C2P4CDEF8P8CDEF8P8"
1750 GET (5,134)-(175,170),COMBO : XT=5 : YT=134
1760 WHILE XT<145
1770   XT=XT+5 : PUT (XT,YT),COMBO,PSET
1780   SOUND 300,0.1
1790 WEND
1800 WHILE XT<314
1810   GET (XT,YT)-(314,170),COMBO
1820   XT=XT+5 : PUT (XT,YT),COMBO,PSET
1830 SOUND 300,0.1
1840 WEND
1850 FOR I=1 TO 2000 : NEXT I
1860 '
1870 '  Set up the screen for a new game.
1880 '
1890 CLS : LOCATE 25,7
1900 PRINT "L O A D   T H E   T R U C K";
1910 PUT (144,50),LOADER,PSET
1920 PUT (11,152),TRAILER,PSET : PUT (246,135),TRACTOR,PSET
1930 FOR I=0 TO 4
1940    PUT (I*16,7),SQUARE,PSET
1950    PUT (I*16,32),DIAMOND,PSET
1960    PUT (I*16,57),RECTANGLE,PSET
1970    PUT (I*16,82),TRIANGLE,PSET
1980    PUT (I*16,107),SIRCLE,PSET
1990 NEXT I
2000 LINE(222,11)-(302,31),3,B
2010 GOTO 520
2020 ON SHAPE GOTO 2030,2040,2050,2060,2070
2030 PUT (XS,YS),SQUARE : RETURN
2040 PUT (XS,YS),DIAMOND : RETURN
2050 PUT (XS,YS),RECTANGLE : RETURN
2060 PUT (XS,YS),TRIANGLE : RETURN
2070 PUT (XS,YS),SIRCLE : RETURN
2080 FOR I=1 TO 300 : NEXT I : RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0646

     Volume in drive A has no label
     Directory of A:\

    ABC      BAS      5445   8-10-86  11:14p
    ABC1     PIC     16392   1-31-86   9:03a
    AMY      DOC     20473   9-27-86  10:14a
    AUTOEXEC BAT        27   5-25-87  11:40a
    BEAR123  BAS      3720   8-10-86  11:20p
    BEAR1231 PIC     16392   1-31-86   7:13a
    BEARABC  BAS      7338   8-10-86  11:18p
    BEARABC1 PIC     16392   1-31-86   8:57a
    BUNNY    BAS      8253   8-10-86  11:20p
    BUNNY1   PIC     16392   1-31-86   9:00a
    FILES646 TXT      1817   6-25-87   9:27a
    FROG     BAS      6093   8-10-86  11:21p
    FROG1    PIC     16392   1-01-80   4:09a
    GO       BAT        12   4-11-87  11:11p
    MENU     BAS      3425   5-25-87  11:49a
    MENU1    PIC     16392   1-01-80   1:59a
    README            1095   4-11-87  11:18p
    START    BAS      1191   8-10-86  11:49p
    TRUCK    BAS      6555   5-25-87  11:13a
    TRUCK1   PIC     16392   1-31-86   9:08a
           20 file(s)     180188 bytes
                          126976 bytes free
