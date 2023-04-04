---
layout: page
title: "PC-SIG Library Disk #1609"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1609/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1609"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CREATING USER FRIENDLY SOFTWARE"

    This utility set should be in the haversack of everyone trying to write
    attractive, user friendly BASIC or Turbo Pascal programs.
    
    Some utilities will make your programs more attractive, most will make
    them quicker and more friendly.  Source code is available for most.
    Users should understand ASCII.
    
    Included are a batch of ways to help you write easy-to-use programs to
    get input from users, especially multiple data input.  One utility
    helps set up one-sentence prompts for each input.  Another enhances the
    use of default values.  A third makes BASIC and Pascal understand upper
    and lowercase inputs identically.  Other utilities help you deal with
    arrow key inputs, setting up data input screens, using lines and boxes,
    and displaying a message to buzz off when the computer is busy.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARROW.BAS

```bas
10 CLS
17 '****************************
18 '*   Arrow Key Demo
20 LOCATE 1,25 : PRINT "Press Arrow Keys or ESC to Leave Program"
30 PRINT : PRINT
100 KY$ = INKEY$ : IF KY$ = "" THEN 100
105 IF KY$ = CHR$(27) THEN END
110 IF LEFT$(KY$,1) = CHR$(0) THEN GOSUB 1003
200 GOTO 100
500 END
1003 IF ASC(RIGHT$(KY$,1)) = 77 THEN PRINT "Right Arrow  77"
1010 IF ASC(RIGHT$(KY$,1)) = 75 THEN PRINT "Left Arrow 75"
1020 IF ASC(RIGHT$(KY$,1)) = 80 THEN PRINT "Down Arrow 80"
1030 IF ASC(RIGHT$(KY$,1)) = 72 THEN PRINT "Up Arrow 72"
1050 RETURN
```

## BOX.BAS

```bas
10 CLS
12 '*****************************************
13 '***    Single or Double Line Boxes
100 INPUT "Enter 1 for single line box or 2 for double line box ";BOXVAR%
109 ' *** Coordinates for upper left & lower right corners
110 X1% = 10  : Y1% = 10  : X2% = 70 : Y2% = 20
120 GOSUB 1000
130 STOP
999 ' ** Subroutine for Single or Double Line Boxes
1000 IF BOXVAR% = 1 THEN CV1%=218 : CV2%=196 : CV3%=191 : CV4%=179 : CV5%=192 : CV6%=217
1010 IF BOXVAR% = 2 THEN CV1%=201 : CV2%=205 : CV3%=187 : CV4%=186 : CV5%=200 :  CV6%=188
1020 LOCATE Y1%,X1% : PRINT CHR$(CV1%);
1030 FOR I% = X1% TO X2%-1
1035  PRINT CHR$(CV2%);
1040  NEXT I%
1050  LOCATE Y1%,X2% : PRINT CHR$(CV3%);
1060 FOR I% = Y1%+1 TO Y2%
1070   LOCATE I%,X1% : PRINT CHR$(CV4%);
1080   LOCATE I%,X2% : PRINT CHR$(CV4%);
1090 NEXT I%
1100 LOCATE Y2%,X1% : PRINT CHR$(CV5%);
1110 FOR I% = X1% TO X2%-1
1120  PRINT CHR$(CV2%);
1130 NEXT I%
1140 LOCATE Y2%,X2% : PRINT CHR$(CV6%);
1150 RETURN
```

## CKNUM.BAS

```bas
10 CLS
98 ' ****  Check for Numeric
100 INPUT "Enter Numeric String ";IMPSTRING$
110 GOSUB 1000
120 IF FLAG% = 1 THEN PRINT "Not Numeric"
150 STOP
1000 FLAG% = 0
1010 FOR IXI% = 1 TO LEN(IMPSTRING$)
1020  TPASC% = ASC(MID$(IMPSTRING$,IXI%,1))
1025  IF TPASC% = 46 THEN 1050   ' ** decimal point ok
1030  IF TPASC% < 47  OR TPASC% > 57 THEN FLAG% = 1
1050 NEXT IXI%
1070 RETURN
```

## ENTER.BAS

```bas
8 '***********************************
9 '*  Display Enter Key on the Screen
10 CLS
100 PRINT "     ";CHR$(201);CHR$(205);CHR$(205);CHR$(205);CHR$(205);CHR$(187)
110 PRINT "     ";CHR$(186);"    ";CHR$(186)
130 PRINT "  ";CHR$(201);CHR$(205);CHR$(205);CHR$(188);"    ";CHR$(186)
140 PRINT "  ";CHR$(186);" Enter ";CHR$(186)
150 PRINT "  ";CHR$(200);CHR$(205);CHR$(205);CHR$(205);CHR$(205);CHR$(205);CHR$(205);CHR$(205);CHR$(188)
```

## HRZMENU.BAS

```bas
8 '*******************************
9 '*  Horizontal Menu Selection
10 CLS
12 COLOR 7,0
13 HORZLOC% = 1
15 STARTFLAG$ = "t"
20 COLOR 0,7 : LOCATE 1,1 : PRINT "ADD RECORDS"; :COLOR 7,0 : LOCATE 1,21: PRINT"UPDATE RECORDS";
25 LOCATE 1,41 : PRINT"PRINT REPORT"; : LOCATE 1,61 : PRINT"EXIT PROGRAM"
100 KY$ = INKEY$ : IF KY$ = "" THEN 100
105 IF KY$ = CHR$(13) THEN GOSUB 6000
110 IF LEFT$(KY$,1) = CHR$(0) THEN GOSUB 1000 ELSE GOSUB 2000
200 GOTO 100
500 END
1000 GOSUB 8000
1002 IF STARTFLAG$ = "f" THEN COLOR 7,0 : LOCATE 1, HORZLOC% : GOSUB 5000
1003 IF ASC(RIGHT$(KY$,1)) = 77 THEN GOSUB 3000 : REM move right
1010 IF ASC(RIGHT$(KY$,1)) = 75 THEN GOSUB 3100 : REM MOVE LEFT
1050 RETURN
2000 GOSUB 8000
2002 IF STARTFLAG$ = "f" THEN COLOR 7,0 : LOCATE 1, HORZLOC% : GOSUB 5000
2003 IF KY$ = "A" OR KY$="a" THEN LOCATE 1,1 : HORZLOC%=1 : GOTO 2020
2005 IF KY$ = "U" OR KY$="u" THEN LOCATE 1,21 : HORZLOC%=21 : GOTO 2020
2010 IF KY$ = "P" OR KY$="p" THEN LOCATE 1,41 : HORZLOC%=41 : GOTO 2020
2015 IF KY$ = "E" OR KY$="e" THEN LOCATE 1,61 : HORZLOC%=61 : GOTO 2020
2017 GOTO 2040
2020 COLOR 0,7 : GOSUB 5000
2040 RETURN
3000 HORZLOC% = HORZLOC% + 20
3003 IF HORZLOC% > 61 THEN HORZLOC% = 1
3005 LOCATE 1,HORZLOC% : COLOR 0,7
3006 GOSUB 5000
3020 RETURN
3100 HORZLOC% = HORZLOC% - 20
3103 IF HORZLOC% < 1  THEN HORZLOC% = 1
3105 LOCATE 1,HORZLOC% : COLOR 0,7
3107 GOSUB 5000
3120 RETURN
5000  IF HORZLOC% = 1 THEN PRINT"ADD RECORDS";
5005 IF HORZLOC% = 21 THEN PRINT "UPDATE RECORDS";
5010 IF HORZLOC% = 41 THEN PRINT "PRINT REPORT";
5015 IF HORZLOC% = 61 THEN PRINT "EXIT PROGRAM";
5016 STARTFLAG$ ="f"
5020 RETURN
6000 COLOR 7,0  : CLS
6003 IF HORZLOC% = 1 THEN 7000
6005 IF HORZLOC% = 21 THEN 7100
6010 IF HORZLOC% = 41 THEN 7200
6015 IF HORZLOC% = 61 THEN 7300
6050 RETURN
7000 PRINT TAB(40)"ADD RECORDS"
7010 END
7100 PRINT TAB(40)"UPDATE RECORDS"
7110 END
7200 PRINT TAB(40)"PRINT REPORT"
7210 END
7300 PRINT TAB(40)"EXIT PROGRAM"
7310 END
8000 IF STARTFLAG$ = "t" THEN COLOR 7,0 : LOCATE 1,1 : PRINT "ADD RECORDS"
8010 RETURN
```

## UPPER.BAS

```bas
10 CLS
98 ' ****  Convert to Uppercase
100 INPUT "Enter a String ";IMPSTRING$
110 GOSUB 1000
120 PRINT IMPSTRING$
150 STOP
1000 HOLD$ = ""
1010 FOR IXI% = 1 TO LEN(IMPSTRING$)
1020  TPASC% = ASC(MID$(IMPSTRING$,IXI%,1))
1030  IF TPASC% > 96 AND TPASC% < 123 THEN TPASC% = TPASC% - 32
1040  HOLD$ = HOLD$ + CHR$(TPASC%)
1050 NEXT IXI%
1060 IMPSTRING$ = HOLD$
1070 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1609

     Volume in drive A has no label
     Directory of A:\

    ARROW    BAS       428   1-01-80  12:59a
    ARROW    PAS       765   1-01-80  12:40a
    BOX      BAS       896  11-17-83  12:16a
    BOX      PAS      1224   1-01-80  12:18a
    CKLENGTH PAS      1468   1-01-80  12:38a
    CKNUM    BAS       384  11-17-83  12:03a
    CKNUM    PAS       830   1-01-80   1:00a
    ENTER    BAS       348   1-01-80  12:49a
    ENTER    PAS       769   1-01-80  12:22a
    FILE1609 TXT      2665  10-16-89   7:59p
    FRIEND   COM     32906   1-01-80  12:24a
    GO       BAT        38  10-12-89   9:21a
    GO       TXT       390  10-18-89   1:28p
    HRZMENU  BAS      1577   1-01-80  12:57a
    HRZMENU  PAS      2469   1-01-80  12:33a
    UPPER    BAS       384  11-17-83  12:08a
    UPPER    PAS       679   1-01-80  12:42a
           17 file(s)      48220 bytes
                          108032 bytes free
