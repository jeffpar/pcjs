---
layout: page
title: "PC-SIG Library Disk #2632"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2632/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2632"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## ANIM.BAS

```bas
'Program Name    : Anim.bas  move graphics character across screen
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 08-24-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra, Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,n,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  voice
'Version         : Power Basic Version
'Trade Names     : Names mentioned in graphics image are the sole property
'        	 : of their respective companies, and are there only to add
'	         : realism to the Graphics scene.

defint a - z

DIM Array1(2000)

SCREEN 9, , 0, 0

'Load background screen
z=&h8000:path$ = "":nam$ = "ega": Gosub MPlaneLoad
'Load foreground screen
screen 9, , 0, 1
 z=&h0:nam$ = "ega": Gosub MPlaneLoad

screen 9,,0,0
'LINE (445, 316)-(631, 349), 12, B
x1 = 445: y1 = 316: x2 = 631: y2 = 349
GET (x1, y1)-(x2, y2), Array1

LINE (445, 316)-(631, 349), 0, BF

screen 9,,0,0:Dsp = 0:os = 0

Idle:
k$ = UCASE$(INKEY$): IF k$ = CHR$(27) THEN SYSTEM

IF os > -444 THEN GOSUB MovChar
if os <=-444  then
Screen 9,,0,0
LINE (x1 + os, y1)-(x2 + os + 10, y2), 0, BF

Screen 9,,1,0
LINE (x1 + os, y1)-(x2 + os + 10, y2), 0, BF

Dsp=0:os=0
Screen 9,,0,0
PUT (x1 + os, y1), Array1
end if

FOR Dly = 1 TO 2500: NEXT Dly  'screen delay routine adjust for min flickers

GOTO Idle


MovChar:
IF Dsp = 1 THEN
SCREEN 9, , 1, 0
'GET (x1 + os, y1)-(x2 + os, y2), Array1
LINE (x1 + os, y1)-(x2 + os + 10, y2), 0, BF
os = os - 3
PUT (x1 + os, y1), Array1
SCREEN 9, , 0, 1        'now display the back ground screen
Dsp = 0
ret = 1
END IF
IF ret = 1 THEN ret = 0: RETURN


IF Dsp = 0 THEN
SCREEN 9, , 0, 1
'GET (x1 + os, y1)-(x2 + os, y2), Array1
LINE (x1 + os, y1)-(x2 + os + 10, y2), 0, BF
os = os - 3
PUT (x1 + os, y1), Array1, XOR
SCREEN 9, , 1, 0        'display fore ground
Dsp = 1
END IF

RETURN

MPlaneLoad:
'bit plane load routine
DEF SEG = &HA000
OUT &H3C4, 2: OUT &H3C5, 1: BLOAD path$ + nam$ + ".BLU", z 'save bit plane 0
OUT &H3C4, 2: OUT &H3C5, 2: BLOAD path$ + nam$ + ".GRN", z 'save bit plane 1
OUT &H3C4, 2: OUT &H3C5, 4: BLOAD path$ + nam$ + ".RED", z 'save bit plane 2
OUT &H3C4, 2: OUT &H3C5, 8: BLOAD path$ + nam$ + ".INT", z 'save bit plane 3
OUT &H3C4, 2: OUT &H3C5, &HF: DEF SEG
return


```

## ANALOG.BAS

```bas
'Program Name    : Analog.bas  basic outline for Multi Input Analog Display
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-21-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice

CLS
SCREEN 9, , 0, 0

'Top Screen
LOCATE 1, 30: PRINT " Alarm Screen "
LOCATE 2, 30: PRINT " Analog Inputs "
LOCATE 4, 3: PRINT "Volt0     Volt1     Volt2     Volt3     Temp04    Temp05    Temp06    Temp07"
LOCATE 6, 5: PRINT "5         5         5         5       400       400       1400      1400"
LOCATE 8, 5: PRINT "0         0         0         0       330       330        625       625"
LOCATE 10, 5: PRINT "5         5         5         5       400       400       -100      -100"

n = 0
FOR i = 1 TO 8
LOCATE 6, 6 + n: PRINT CHR$(191)
LOCATE 7, 6 + n: PRINT CHR$(180)
LOCATE 8, 6 + n: PRINT CHR$(180)
LOCATE 9, 6 + n: PRINT CHR$(180)
LOCATE 10, 6 + n: PRINT CHR$(217)
n = n + 10
NEXT i

LOCATE 11, 4: PRINT "0.97     -0.08     -3.33     -3.93     -68.4     -52.3      -7.2      -8.8"
LOCATE 12, 4: PRINT "OK        OK      LoAlarm   LoAlarm   LoAlarm   LoAlarm   LoAlarm   LoAlarm"
os = 0
FOR i = 1 TO 8
LINE (0 + os, 40)-(78 + os, 44 + 124), 14, B
os = os + 80
NEXT i

os = 0
FOR i = 1 TO 8
PSET (50 + os, 133), 14
os = os + 80
NEXT i

COLOR 11, 0: LOCATE 10, 9: PRINT CHR$(17): COLOR 15, 0
COLOR 11, 0: LOCATE 10, 19: PRINT CHR$(17): COLOR 15, 0
COLOR 13, 0: LOCATE 10, 29: PRINT CHR$(17): COLOR 15, 0
COLOR 12, 0: LOCATE 10, 39: PRINT CHR$(17): COLOR 15, 0

COLOR 11, 0: LOCATE 10, 49: PRINT CHR$(17): COLOR 15, 0
COLOR 11, 0: LOCATE 10, 59: PRINT CHR$(17): COLOR 15, 0
COLOR 13, 0: LOCATE 10, 69: PRINT CHR$(17): COLOR 15, 0
COLOR 12, 0: LOCATE 10, 79: PRINT CHR$(17): COLOR 15, 0



'Bottom Half of Screen
LOCATE 14, 3: PRINT "Volt0     Volt1     Volt2     Volt3     Temp04    Temp05    Temp06    Temp07"
LOCATE 16, 5: PRINT "5         5         5         5       400       400       1400      1400"
LOCATE 18, 5: PRINT "0         0         0         0       330       330        625       625"
LOCATE 20, 5: PRINT "5         5         5         5       400       400       -100      -100"

n = 0
FOR i = 1 TO 8
LOCATE 16, 6 + n: PRINT CHR$(191)
LOCATE 17, 6 + n: PRINT CHR$(180)
LOCATE 18, 6 + n: PRINT CHR$(180)
LOCATE 19, 6 + n: PRINT CHR$(180)
LOCATE 20, 6 + n: PRINT CHR$(217)
n = n + 10
NEXT i

LOCATE 21, 4: PRINT "0.97     -0.08     -3.33     -3.93     -68.4     -52.3      -7.2      -8.8"
LOCATE 22, 4: PRINT "OK        OK      LoAlarm   LoAlarm   LoAlarm   LoAlarm   LoAlarm   LoAlarm"
os = 0
FOR i = 1 TO 8
LINE (0 + os, 180)-(78 + os, 184 + 124), 14, B
os = os + 80
NEXT i

os = 0
FOR i = 1 TO 8
PSET (50 + os, 273), 14
os = os + 80
NEXT i

COLOR 11, 0: LOCATE 20, 9: PRINT CHR$(17): COLOR 15, 0
COLOR 11, 0: LOCATE 18, 19: PRINT CHR$(17): COLOR 15, 0
COLOR 13, 0: LOCATE 20, 29: PRINT CHR$(17): COLOR 15, 0
COLOR 12, 0: LOCATE 16, 39: PRINT CHR$(17): COLOR 15, 0

COLOR 11, 0: LOCATE 20, 49: PRINT CHR$(17): COLOR 15, 0
COLOR 11, 0: LOCATE 17, 59: PRINT CHR$(17): COLOR 15, 0
COLOR 13, 0: LOCATE 19, 69: PRINT CHR$(17): COLOR 15, 0
COLOR 12, 0: LOCATE 20, 79: PRINT CHR$(17): COLOR 15, 0


Mloop:
k$ = UCASE$(INKEY$): IF k$ = CHR$(27) THEN SYSTEM
COLOR 13, 0
LOCATE 1, 1: PRINT TIME$: LOCATE 1, 70: PRINT DATE$
COLOR 15, 0
GOTO Mloop

```

## EIGHTDAY.BAS

```bas
'Program Name    : EightDay.bas Sample Industrial Chart Recorder
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-23-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice


'Create screen image on background screen
DIM Array1(1:5000)

SCREEN 9, , 1, 0

x = 180: y = 174
LINE (0, 0)-(639, 349), 8, BF
LINE (0, 0)-(639, 349), 7, B
LINE (1, 1)-(638, 348), 7, B
LINE (2, 2)-(637, 347), 7, B

LINE (1, 1)-(348, 348), 7, B
LINE (2, 2)-(347, 347), 7, B


n = 10
FOR i = 1 TO 8
CIRCLE (x, y), n, 12 ', , , 1
n = n + 20
NEXT i

COLOR 14, 0: LOCATE 2, 60: PRINT " Humidity    - 32 ";
COLOR 13, 0: LOCATE 3, 60: PRINT " Temperature - 89 ";
COLOR 15, 0
LOCATE 2, 12: PRINT " 8 Day Recording Chart ";
xc = 180: yc = 174
FOR i = 0 TO 3.14 STEP .174
x = INT(SIN(i) * 120): y = INT(COS(i) * 120)
xcn = xc + x: ycn = yc + y
xcs = xc - x: ycs = yc - y
LINE (xcs, ycs)-(xcn, ycn), 12
FOR w = 1 TO 300: NEXT w
'LINE (xcs, ycs)-(xcn, ycn), 0
NEXT i

gosub PBCopy
SCREEN 9, , 0, 0

Mloop:
k$ = INKEY$: IF k$ = CHR$(27) THEN SYSTEM
os = 0
xc = 180: yc = 174
FOR i = 0 TO 6.21 STEP .01  '174
k$ = INKEY$: IF k$ = CHR$(27) THEN SYSTEM
 IF i > 6.18 THEN EXIT FOR
 'two data loops drawn on chart face - insert you applicxation data here
 CIRCLE (xc, yc), 100 + z, 14, i, i + .1', 1
 CIRCLE (xc, yc), 120 + z, 13, i, i + .05', 1
 z = INT(SIN(i) * 12)
NEXT i
z = 0
gosub PBCopy
GOTO Mloop


PBCopy:
FOR n = 1 TO 349
SCREEN 9, , 1, 0
GET (1, n)-(639, n), Array1
SCREEN 9, , 0, 0
PUT (1, n), Array1,pset
NEXT n
return




```

## FLASH.BAS

```bas
'Program Name    : Flash.bas Demo program loads Flash Code .scr screens
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-23-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice

screen 0,,0,0
def seg=&hb800:bload "voltmtr.scr",0:def seg
def seg=&hb800:bload "fkeys.scr",4096*1:def seg
def seg=&hb800:bload "plcbar1.scr",4096*2:def seg
def seg=&hb800:bload "calendr1.scr",4096*3:def seg

NLoop:
k$ = UCASE$(INKEY$): IF k$ = CHR$(27) THEN SYSTEM

if k$="1" then screen 0,,0,0
if k$="2" then screen 0,,1,1
if k$="3" then screen 0,,2,2
if k$="4" then screen 0,,3,3
GOTO NLoop

```

## PBCOPY.BAS

```bas
'Program Name    : PBCopy.bas Screen 9, Background to Foreground copy program
'Author          : Spectra Publishing - Tech Support  Lloyd L. Smith
'Date            : 09-23-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Notes           : This program runs faster in Power Basic than other basics.


DIM Array1(5000)

SCREEN 9, , 0, 0
Nam$ = "demo"
CALL Mload(Path$,Nam$)


locate 10,10:print"Press 'G' to start";
locate 11,10:print"Press 'E' to Clear Screen";
locate 13,10:print"Press ESC to exit to DOS";


NLoop:
k$ = UCASE$(INKEY$): IF k$ = CHR$(27) THEN SYSTEM
IF k$ = "G" THEN GOSUB GetSCreen  'copy demo background screen to foreground
if k$="E" then screen 9,,0,0:cls
GOTO NLoop


'This routine copies the background screen to the foreground
GetSCreen:
cls
FOR n = 1 TO 349
SCREEN 9, , 1, 0
GET (1, n)-(639, n), Array1
SCREEN 9, , 0, 0
PUT (1, n), Array1
NEXT n
RETURN



SUB Mload (Path$,Nam$) STATIC
'Subroutine loads example screen into background screen
DEF SEG = &HA000
OUT &H3C4, 2: OUT &H3C5, 1: BLOAD Path$ + Nam$ + ".BLU", &H8000  'load bit plane 0
OUT &H3C4, 2: OUT &H3C5, 2: BLOAD Path$ + Nam$ + ".GRN", &H8000  'load bit plane 1
OUT &H3C4, 2: OUT &H3C5, 4: BLOAD Path$ + Nam$ + ".RED", &H8000  'load bit plane 2
OUT &H3C4, 2: OUT &H3C5, 8: BLOAD Path$ + Nam$ + ".INT", &H8000  'load bit plane 3
OUT &H3C4, 2: OUT &H3C5, &HF: DEF SEG
END SUB

```

## PUBVARS.BAS

```bas



'           FIND ALL THE "EXTERNAL" VARIABLES IN YOUR UNIT FILES

'                  AND MAKE AN ALPHABETIZED LIST OF THEM,

'                        IN THE FORM "PUBLIC ...
'                                     PUBLIC ... "

'                     TO "$INCLUDE" IN THE MAIN FILE


'                                                  -- Howard Ballinger, 4-22-90

' Soooo ... Just as soon as I'd uploaded the first version of this I said
'           to my Self -- or my Self said to me -- Why not have it read the
'           main program first and get its own unit filenames, instead of
'           me having to type 'em in? This, then, is the Improved Version !!

'                                                                   -- 5-12-90
			  $COMPILE EXE
			  $ERROR ALL OFF
			  $LIB ALL OFF

  %False = 0
  %True = NOT %False

 DEFINT A-Z
 DIM V$ (1:1000)
 DIM UnitName$ (1:30)

 COLOR 14,0
 CLS
 LOCATE 2,1
 PRINT "                     HB PUBLIC VARIABLE LISTER
 PRINT "                      =======================
 PRINT

 COLOR 2,0
 FILES "*.BAS"

GetFileName:
 DO
   COLOR 14,0
   LOCATE 25,1
   INPUT " MAIN FILE TO SEARCH FOR UNIT NAMES (CR to quit):"; MainFile$
   LOCATE 25,1: PRINT SPACE$ (80);
   IF MainFile$ = "" THEN STOP
   MainFile$ = UCASE$ (MainFile$)
   IF INSTR (MainFile$, ".") = 0 THEN MainFile$ = MainFile$ + ".BAS"
   IF EXIST (MainFile$) THEN EXIT LOOP
   LOCATE 20,26: PRINT "<<< ERROR OPENING FILE !! >>"
   DELAY 3
   LOCATE 20,26: PRINT "                            "
 LOOP

 MainFile% = FREEFILE
 OPEN MainFile$ FOR INPUT AS MainFile%
 CLS
 LOCATE 2,1
 PRINT "                     HB PUBLIC VARIABLE LISTER
 PRINT "                      =======================
 PRINT
 COLOR 29,0
 L0 = CSRLIN: C0 = POS
 PRINT "            Searching ";MainFile$; " ...": PRINT
 COLOR 14,0
 DO WHILE NOT EOF (MainFile%) '     search source file for units to be linked
   LINE INPUT #MainFile%, W$
   INCR Ln
   W$ = LTRIM$ (W$, ANY CHR$ (32, 9)) '                   strip spaces & tabs
   IF UCASE$ (LEFT$ (W$, 5)) = "$LINK" THEN
     PRINT USING "           line  ####: \                         \"; Ln, W$
     W$ = MID$ (W$, 6)
     W$ = LTRIM$ (W$, ANY CHR$ (32, 34)) '            strip spaces & quotes
     W$ = RTRIM$ (W$, ANY CHR$ (32, 34))
     INCR File%
     REPLACE ".PBU" WITH ".BAS" IN W$
     REPLACE ".pbu" WITH ".bas" IN W$
     UnitName$ (File%) = W$
   END IF
 LOOP
 L1 = CSRLIN: C1 = POS
 LOCATE L0, C0
 PRINT "            Searching ";MainFile$; " ...": PRINT
 LOCATE L1 + 1, 38
 PRINT "Done."
 CLOSE #MainFile%
 DELAY 1

 OutFile$ = EXTRACT$ (MainFile$, ".") + ".PV"
 BakFile$ = EXTRACT$ (MainFile$, ".") + ".&PV"

 IF EXIST (BakFile$) THEN
   L0 = CSRLIN: C0 = POS
   LOCATE 22,1
   PRINT " THERE'S A FILE NAMED ";BakFile$;" IN THIS DIRECTORY."
   PRINT " PRESUMABLY IT'S AN OLD BACKUP PUBVARS LIST. OVERWRITE IT ? (y/n) ";
   DO: K$ = UCASE$ (INKEY$): LOOP UNTIL K$ = "Y" OR  K$ = "N" OR K$ = CHR$ (27)
   PRINT K$
   IF K$ = "Y" THEN
     KILL BakFile$
     FOR L = 18 TO 25: LOCATE L, 1: PRINT SPACE$ (80);: NEXT
     LOCATE L0, C0
     PRINT "   "; BakFile$; " Deleted "
   ELSE
     PRINT
     PRINT "TO PRESERVE THE FILE ";BakFile$;" PLEASE RENAME IT, THEN START OVER"
     STOP
   END IF
 END IF

 PRINT
 IF EXIST (OutFile$) THEN
   PRINT "                  Renaming "; OutFile$; " as ";  BakFile$
   NAME OutFile$ AS BakFile$
 END IF

 File% = 0
 DO
   INCR File%
   InputFile$ = UnitName$ (File%)
   IF InputFile$ = "" THEN
     IF V$ (1) <> "" THEN
       LOCATE 23,46: PRINT "WRITING TO FILE "; OutFile$;
       OutputFile% = FREEFILE
       OPEN OutFile$ FOR APPEND AS OutputFile%
       Ind = 1
       DO
         PRINT #OutputFile, V$ (Ind)
         INCR Ind
       LOOP UNTIL V$ (Ind) = ""
     END IF
     COLOR 3,0
     LOCATE 24,1: PRINT SPACE$ (80);
     LOCATE 25,1: PRINT SPACE$ (80);
     LOCATE 22,1
     STOP
   END IF

   ARRAY SCAN V$ (), = "", TO FirstBlank
   Ind = FirstBlank  '                because this array doesn't start w/ 0

   InputFile$ = UCASE$ (InputFile$)
   InputFile% = FREEFILE
   OPEN InputFile$ FOR INPUT AS InputFile%
   GOSUB Status
   V$ (Ind) = "'   UNIT FILE SEARCHED: " + InputFile$
   INCR Ind

   Ln = 0
   DO WHILE NOT EOF (InputFile%)
     LINE INPUT #InputFile%, W$
     INCR Ln
     GOSUB Status
     W$ = LTRIM$ (W$, ANY CHR$(9, 32)) '             again remove spaces & tabs
     IF UCASE$ (LEFT$ (W$, 8)) = "EXTERNAL" THEN
       W$ = MID$ (W$,9)
       DO '                          chop off each variable name (up to comma)
         W$ = LTRIM$ (W$)
         Comma = INSTR (W$, ",")
         IF Comma THEN
           V$ (Ind) = "PUBLIC " + LEFT$ (W$, Comma-1)
           W$ = MID$ (W$, Comma+1)
         ELSE
           V$ (Ind) = "PUBLIC " + W$
         END IF
       INCR Ind
       INCR Vars%
       GOSUB Status
       LOOP WHILE Comma
     END IF
   LOOP
   ARRAY SORT V$ () FOR Ind - 1, COLLATE UCASE
   Ind = 1
   DO UNTIL V$ (Ind) = ""
     IF V$ (Ind) = V$ (Ind + 1) THEN
       INCR Dups%
       DECR Vars%
       ARRAY DELETE V$ (Ind)
       GOSUB Status
     END IF
     INCR Ind
   LOOP
   N$ = "NEXT "
 LOOP



Status:
 COLOR 14,4
 LOCATE 24,1
 PRINT USING "       Searching: \          \        Line: ####                                "  ; InputFile$, Ln;
 LOCATE 25,1
 PRINT USING_
"           EXTERNAL Vars Found: ###              Duplicates Removed: ###        ";_
					 Vars%, Dups%;
 RETURN



FUNCTION EXIST (F$)

  %FLAGS = 0:  %AX = 1:  %BX = 2:  %CX = 3:  %DX = 4
     %SI = 5:  %DI = 6:  %BP = 7:  %DS = 8:  %ES = 9

 LOCAL SearchErr, FZ$

 FZ$ = F$ + CHR$(0)
 REG %DS, STRSEG (FZ$)
 REG %DX, STRPTR (FZ$)
 REG %CX, &H17
 REG %AX, &H4E00
 CALL INTERRUPT &H21
 SearchErr = REG(%AX)
 SELECT CASE SearchErr
   CASE 2, 3, 15, 18
     EXIST = 0
   CASE ELSE
     EXIST = -1
 END SELECT
 DEF SEG
 END Function


```

## LJLBAR39.BAS

```bas
'00 ─────────────────────────────────────────────── Font39LandDownload sub.

'This group of routines with the function FNCode39$ defines the 128 characters
'of the Code 39 barcode set, and downloads them to the HP Laserjet II printer
'as an alternate character set.  This character set is for use in the landscape
'mode only.  The printer is reset by the sub Font39LandDownload, and landscape
'mode is then selected, the font set is then formated, and downloaded.  The
'function FNCode39$ is used to toggle between Code 39 and normal text sent to
'the printer.

'Note:	This code does not check printer ready status (online,paper,etc).

'PB 2.0 - Walter Haase
'TB 1.0 - Kent Walker

 Sub Font39LandDownload
	Local A%,B%,C%,D%
	Lprint Chr$(27);"E";		'reset the printer
	Lprint Chr$(27);"&l1O";		'select landscape mode
	Lprint Chr$(27);"*c0F";		'delete all current soft fonts
	Lprint Chr$(27);"*c1D";		'select font #1 for definition
	Lprint Chr$(27);")s64W";	'issue descriptor command

	'build font descriptor block (fixed-length of 64 bytes, reserved bytes
	'are set to null)

	Lprint Chr$(0);			'byte 0 is null
	Lprint Chr$(64);		'set font descriptor size (64 bytes)
	Lprint Chr$(0);			'reserved  - 1 byte
	Lprint Chr$(0);			'set font type to 7 bit (default)
	Lprint Chr$(0);Chr$(0);		'reserved  - 2 bytes
	Lprint Chr$(0);Chr$(&H32);	'set baseline distance (12/72*300=32h)
	Lprint Chr$(0);Chr$(&HFF);	'set cell width  (255d)
	Lprint Chr$(0);Chr$(&HFF);	'set cell height (255d)
	Lprint Chr$(1);			'set orientation to landscape
	Lprint Chr$(0);			'set spacing to fixed (default)
	Lprint Chr$(0);Chr$(25);	'set symbol set to Code 39
	Lprint Chr$(&H01);Chr$(&H04);	'set pitch 4.6 cpi (26/120*1200=104h)
	Lprint Chr$(&H01);Chr$(&H60);	'set height 21.1 (21/72*1200=160h)
	Lprint Chr$(0);Chr$(0);		'set xHeight (HPLJ ignores)
	Lprint Chr$(0);			'set width type (HPLJ ignores)
	Lprint Chr$(0);			'set style to upright (0, 1 is Italic)
	Lprint Chr$(0);			'set stroke weight medium (-7 to +7)
	Lprint Chr$(0);			'set typeface (default)
	Lprint Chr$(0);			'reserved - 1 byte
	Lprint Chr$(0);			'set Serif style (HPLJ ignores)
	Lprint Chr$(0);Chr$(0);		'reserved - 2 bytes
	Lprint Chr$(0);			'set underline distance (default)
	Lprint Chr$(0);			'set underline height (HPLJ ignores)
	Lprint Chr$(0);Chr$(0);		'set text height (HPLJ ignores)
	Lprint Chr$(0);Chr$(0);		'set text width (HPLJ ignores)
	Lprint String$(4,Chr$(0));	'reserved - 4 bytes
	Lprint Chr$(0);			'set pitch extended  (default)
	Lprint Chr$(0);			'set height extended (default)
	Lprint String$(6,Chr$(0));	'reserved - 6 bytes
	Lprint "CODE 39         ";	'issue font name (16 bytes padded)

	'end of font descriptor block

	'below are listed the four combinations of wid/narrow bar/space masks
	'used in the 128 character Code 39 set

	A%=1				'define narrow bar, narrow space mask
	B%=2				'define narrow bar, wide space mask
	C%=3				'define wide bar, narrow space mask
	D%=4				'define wide bar, wide space mask

	'define 128 character set masks, and perform character format

	Call Format(0,A%,B%,B%,B%,A%,D%,A%,A%,A%,C%)	'0   NUL	(%U)
	Call Format(1,B%,B%,B%,A%,A%,C%,A%,B%,A%,C%)	'1   SOH	($A)
	Call Format(2,B%,B%,B%,A%,A%,A%,C%,B%,A%,C%)	'2   STX	($B)
	Call Format(3,B%,B%,B%,A%,A%,C%,C%,B%,A%,A%)	'3   ETX	($C)
	Call Format(4,B%,B%,B%,A%,A%,A%,A%,D%,A%,C%)	'4   EOT	($D)
	Call Format(5,B%,B%,B%,A%,A%,C%,A%,D%,A%,A%)	'5   ENQ	($E)
	Call Format(6,B%,B%,B%,A%,A%,A%,C%,D%,A%,A%)	'6   ACK	($F)
	Call Format(7,B%,B%,B%,A%,A%,A%,A%,B%,C%,C%)	'7   BEL	($G)
	Call Format(8,B%,B%,B%,A%,A%,C%,A%,B%,C%,A%)	'8   BS		($H)
	Call Format(9,B%,B%,B%,A%,A%,A%,C%,B%,C%,A%)	'9   HT		($I)
	Call Format(10,B%,B%,B%,A%,A%,A%,A%,D%,C%,A%)	'10  LF		($J)
	Call Format(11,B%,B%,B%,A%,A%,C%,A%,A%,B%,C%)	'11  VT		($K)
	Call Format(12,B%,B%,B%,A%,A%,A%,C%,A%,B%,C%)	'12  FF		($L)
	Call Format(13,B%,B%,B%,A%,A%,C%,C%,A%,B%,A%)	'13  CR		($M)
	Call Format(14,B%,B%,B%,A%,A%,A%,A%,C%,B%,C%)	'14  SO		($N)
	Call Format(15,B%,B%,B%,A%,A%,C%,A%,C%,B%,A%)	'15  SI		($O)
	Call Format(16,B%,B%,B%,A%,A%,A%,C%,C%,B%,A%)	'16  DLE	($P)
	Call Format(17,B%,B%,B%,A%,A%,A%,A%,A%,D%,C%)	'17  DC1	($Q)
	Call Format(18,B%,B%,B%,A%,A%,C%,A%,A%,D%,A%)	'18  DC2	($R)
	Call Format(19,B%,B%,B%,A%,A%,A%,C%,A%,D%,A%)	'19  DC3	($S)
	Call Format(20,B%,B%,B%,A%,A%,A%,A%,C%,D%,A%)	'20  DC4	($T)
	Call Format(21,B%,B%,B%,A%,A%,D%,A%,A%,A%,C%)	'21  NAK	($U)
	Call Format(22,B%,B%,B%,A%,A%,B%,C%,A%,A%,C%)	'22  SYN	($V)
	Call Format(23,B%,B%,B%,A%,A%,D%,C%,A%,A%,A%)	'23  ETB	($W)
	Call Format(24,B%,B%,B%,A%,A%,B%,A%,C%,A%,C%)	'24  CAN	($X)
	Call Format(25,B%,B%,B%,A%,A%,D%,A%,C%,A%,A%)	'25  EM		($Y)
	Call Format(26,B%,B%,B%,A%,A%,B%,C%,C%,A%,A%)	'26  SUB	($Z)
	Call Format(27,A%,B%,B%,B%,A%,C%,A%,B%,A%,C%)	'27  ESC	(%A)
	Call Format(28,A%,B%,B%,B%,A%,A%,C%,B%,A%,C%)	'28  FS		(%B)
	Call Format(29,A%,B%,B%,B%,A%,C%,C%,B%,A%,A%)	'29  GS		(%C)
	Call Format(30,A%,B%,B%,B%,A%,A%,A%,D%,A%,C%)	'30  RS		(%D)
	Call Format(31,A%,B%,B%,B%,A%,C%,A%,D%,A%,A%)	'31  US		(%E)
	Call Format(32,0,0,0,0,0,B%,C%,A%,C%,A%)	'32  SPACE
	Call Format(33,B%,B%,A%,B%,A%,C%,A%,B%,A%,C%)	'33  !		(/A)
	Call Format(34,B%,B%,A%,B%,A%,A%,C%,B%,A%,C%)	'34  "		(/B)
	Call Format(35,B%,B%,A%,B%,A%,C%,C%,B%,A%,A%)	'35  #		(/C)
	Call Format(36,0,0,0,0,0,B%,B%,B%,A%,A%)	'36  $
	Call Format(37,0,0,0,0,0,A%,B%,B%,B%,A%)	'37  %
	Call Format(38,B%,B%,A%,B%,A%,A%,C%,D%,A%,A%)	'38  &		(/F)
	Call Format(39,B%,B%,A%,B%,A%,A%,A%,B%,C%,C%)	'39  '		(/G)
	Call Format(40,B%,B%,A%,B%,A%,C%,A%,B%,C%,A%)	'40  (		(/H)
	Call Format(41,B%,B%,A%,B%,A%,A%,C%,B%,C%,A%)	'41  )		(/I)
	Call Format(42,0,0,0,0,0,B%,A%,C%,C%,A%)	'42  *
	Call Format(43,0,0,0,0,0,B%,A%,B%,B%,A%)	'43  +
	Call Format(44,B%,B%,A%,B%,A%,A%,C%,A%,B%,C%)	'44  ,		(/L)
	Call Format(45,0,0,0,0,0,B%,A%,A%,C%,C%)	'45  -
	Call Format(46,0,0,0,0,0,D%,A%,A%,C%,A%)	'46  .
	Call Format(47,0,0,0,0,0,B%,B%,A%,B%,A%)	'47  /
	Call Format(48,0,0,0,0,0,A%,B%,C%,C%,A%)	'48  0
	Call Format(49,0,0,0,0,0,C%,B%,A%,A%,C%)	'49  1
	Call Format(50,0,0,0,0,0,A%,D%,A%,A%,C%)	'50  2
	Call Format(51,0,0,0,0,0,C%,D%,A%,A%,A%)	'51  3
	Call Format(52,0,0,0,0,0,A%,B%,C%,A%,C%)	'52  4
	Call Format(53,0,0,0,0,0,C%,B%,C%,A%,A%)	'53  5
	Call Format(54,0,0,0,0,0,A%,D%,C%,A%,A%)	'54  6
	Call Format(55,0,0,0,0,0,A%,B%,A%,C%,C%)	'55  7
	Call Format(56,0,0,0,0,0,C%,B%,A%,C%,A%)	'56  8
	Call Format(57,0,0,0,0,0,A%,D%,A%,C%,A%)	'57  9
	Call Format(58,B%,B%,A%,B%,A%,B%,C%,C%,A%,A%)	'58  :		(/Z)
	Call Format(59,A%,B%,B%,B%,A%,A%,C%,D%,A%,A%)	'59  ;		(%F)
	Call Format(60,A%,B%,B%,B%,A%,A%,A%,B%,C%,C%)	'60  <		(%G)
	Call Format(61,A%,B%,B%,B%,A%,C%,A%,B%,C%,A%)	'61  =		(%H)
	Call Format(62,A%,B%,B%,B%,A%,A%,C%,B%,C%,A%)	'62  >		(%I)
	Call Format(63,A%,B%,B%,B%,A%,A%,A%,D%,C%,A%)	'63  ?		(%J)
	Call Format(64,A%,B%,B%,B%,A%,B%,C%,A%,A%,C%)	'64  @		(%V)
	Call Format(65,0,0,0,0,0,C%,A%,B%,A%,C%)	'65  A
	Call Format(66,0,0,0,0,0,A%,C%,B%,A%,C%)	'66  B
	Call Format(67,0,0,0,0,0,C%,C%,B%,A%,A%)	'67  C
	Call Format(68,0,0,0,0,0,A%,A%,D%,A%,C%)	'68  D
	Call Format(69,0,0,0,0,0,C%,A%,D%,A%,A%)	'69  E
	Call Format(70,0,0,0,0,0,A%,C%,D%,A%,A%)	'70  F
	Call Format(71,0,0,0,0,0,A%,A%,B%,C%,C%)	'71  G
	Call Format(72,0,0,0,0,0,C%,A%,B%,C%,A%)	'72  H
	Call Format(73,0,0,0,0,0,A%,C%,B%,C%,A%)	'73  I
	Call Format(74,0,0,0,0,0,A%,A%,D%,C%,A%)	'74  J
	Call Format(75,0,0,0,0,0,C%,A%,A%,B%,C%)	'75  K
	Call Format(76,0,0,0,0,0,A%,C%,A%,B%,C%)	'76  L
	Call Format(77,0,0,0,0,0,C%,C%,A%,B%,A%)	'77  M
	Call Format(78,0,0,0,0,0,A%,A%,C%,B%,C%)	'78  N
	Call Format(79,0,0,0,0,0,C%,A%,C%,B%,A%)	'79  O
	Call Format(80,0,0,0,0,0,A%,C%,C%,B%,A%)	'80  P
	Call Format(81,0,0,0,0,0,A%,A%,A%,D%,C%)	'81  Q
	Call Format(82,0,0,0,0,0,C%,A%,A%,D%,A%)	'82  R
	Call Format(83,0,0,0,0,0,A%,C%,A%,D%,A%)	'83  S
	Call Format(84,0,0,0,0,0,A%,A%,C%,D%,A%)	'84  T
	Call Format(85,0,0,0,0,0,D%,A%,A%,A%,C%)	'85  U
	Call Format(86,0,0,0,0,0,B%,C%,A%,A%,C%)	'86  V
	Call Format(87,0,0,0,0,0,D%,C%,A%,A%,A%)	'87  W
	Call Format(88,0,0,0,0,0,B%,A%,C%,A%,C%)	'88  X
	Call Format(89,0,0,0,0,0,D%,A%,C%,A%,A%)	'89  Y
	Call Format(90,0,0,0,0,0,B%,C%,C%,A%,A%)	'90  Z
	Call Format(91,A%,B%,B%,B%,A%,C%,A%,A%,B%,C%)	'91  [		(%K)
	Call Format(92,A%,B%,B%,B%,A%,A%,C%,A%,B%,C%)	'92  \		(%L)
	Call Format(93,A%,B%,B%,B%,A%,C%,C%,A%,B%,A%)	'93  ]		(%M)
	Call Format(94,A%,B%,B%,B%,A%,A%,A%,C%,B%,C%)	'94  ^		(%N)
	Call Format(95,A%,B%,B%,B%,A%,C%,A%,C%,B%,A%)	'95  _		(%O)
	Call Format(96,A%,B%,B%,B%,A%,D%,C%,A%,A%,A%)	'96  `		(%W)
	Call Format(97,B%,A%,B%,B%,A%,C%,A%,B%,A%,C%)	'97  a		(+A)
	Call Format(98,B%,A%,B%,B%,A%,A%,C%,B%,A%,C%)	'98  b		(+B)
	Call Format(99,B%,A%,B%,B%,A%,C%,C%,B%,A%,A%)	'99  c		(+C)
	Call Format(100,B%,A%,B%,B%,A%,A%,A%,D%,A%,C%)	'100 d		(+D)
	Call Format(101,B%,A%,B%,B%,A%,C%,A%,D%,A%,A%)	'101 e		(+E)
	Call Format(102,B%,A%,B%,B%,A%,A%,C%,D%,A%,A%)	'102 f		(+F)
	Call Format(103,B%,A%,B%,B%,A%,A%,A%,B%,C%,C%)	'103 g		(+G)
	Call Format(104,B%,A%,B%,B%,A%,C%,A%,B%,C%,A%)	'104 h		(+H)
	Call Format(105,B%,A%,B%,B%,A%,A%,C%,B%,C%,A%)	'105 i		(+I)
	Call Format(106,B%,A%,B%,B%,A%,A%,A%,D%,C%,A%)	'106 j		(+J)
	Call Format(107,B%,A%,B%,B%,A%,C%,A%,A%,B%,C%)	'107 k		(+K)
	Call Format(108,B%,A%,B%,B%,A%,A%,C%,A%,B%,C%)	'108 l		(+L)
	Call Format(109,B%,A%,B%,B%,A%,C%,C%,A%,B%,A%)	'109 m		(+M)
	Call Format(110,B%,A%,B%,B%,A%,A%,A%,C%,B%,C%)	'110 n		(+N)
	Call Format(111,B%,A%,B%,B%,A%,C%,A%,C%,B%,A%)	'111 o		(+O)
	Call Format(112,B%,A%,B%,B%,A%,A%,C%,C%,B%,A%)	'112 p		(+P)
	Call Format(113,B%,A%,B%,B%,A%,A%,A%,A%,D%,C%)	'113 q		(+Q)
	Call Format(114,B%,A%,B%,B%,A%,C%,A%,A%,D%,A%)	'114 r		(+R)
	Call Format(115,B%,A%,B%,B%,A%,A%,C%,A%,D%,A%)	'115 s		(+S)
	Call Format(116,B%,A%,B%,B%,A%,A%,A%,C%,D%,A%)	'116 t		(+T)
	Call Format(117,B%,A%,B%,B%,A%,D%,A%,A%,A%,C%)	'117 u		(+U)
	Call Format(118,B%,A%,B%,B%,A%,B%,C%,A%,A%,C%)	'118 v		(+V)
	Call Format(119,B%,A%,B%,B%,A%,D%,C%,A%,A%,A%)	'119 w		(+W)
	Call Format(120,B%,A%,B%,B%,A%,B%,A%,C%,A%,C%)	'120 x		(+X)
	Call Format(121,B%,A%,B%,B%,A%,D%,A%,C%,A%,A%)	'121 y		(+Y)
	Call Format(122,B%,A%,B%,B%,A%,B%,C%,C%,A%,A%)	'122 z		(+Z)
	Call Format(123,A%,B%,B%,B%,A%,A%,C%,C%,B%,A%)	'123 {		(%P)
	Call Format(124,A%,B%,B%,B%,A%,A%,A%,A%,D%,C%)	'124 |		(%Q)
	Call Format(125,A%,B%,B%,B%,A%,C%,A%,A%,D%,A%)	'125 }		(%R)
	Call Format(126,A%,B%,B%,B%,A%,A%,C%,A%,D%,A%)	'126 ~		(%S)
	Call Format(127,A%,B%,B%,B%,A%,A%,A%,C%,D%,A%)	'127 DEL	(%T)

	Lprint Chr$(27);"*c5F";		'make soft font permanent
 End Sub

 Sub Format(AsciiValue%,A%,B%,C%,D%,E%,F%,G%,H%,I%,J%)

	Lprint Chr$(27);"*c";AsciiValue%;"E";	'assign character A,B,C,D, etc
	Lprint Chr$(27);"(s731W";		'issue char. descriptor command

	'build char. format descriptor block (reserved bytes are set to null)

	Lprint Chr$(4);			'set format (4 for HPLJ)
	Lprint Chr$(0);			'set continuation flag (default)
	Lprint Chr$(14);		'set descriptor size (14 for HPLJ)
	Lprint Chr$(1);			'set class (1 for HPLJ)
	Lprint Chr$(1);			'set orientation to landscape
	Lprint Chr$(0);			'reserved - 1 byte
	Lprint Chr$(&HFF);Chr$(&HCE);	'set left offset to -50 (FFCEh)
	Lprint Chr$(0);Chr$(&H42);	'set top  offset to +66 (0042h)
	Lprint Chr$(0);Chr$(&H58);	'set char. width  to 88 dots (11 bytes)
	Lprint Chr$(0);Chr$(&H41);	'set char. heigth to 65 dots
	Lprint Chr$(0);Chr$(0);		'set delta X (default)
					'bytes 16 - 64 character data

	'note that the following are sent in REVERSE order; this is because
	'landscape fonts are defined in raster scan order

	Call Decode(J%)		'send standard Code 39 masks
	Call Decode(I%)
	Call Decode(H%)
	Call Decode(G%)
	Call Decode(F%)

	If A%>0 Then		'is it a special Code 39 mask ?
		Call Decode(E%)	'if yes; then use $,%,+, or / masks
		Call Decode(D%)
		Call Decode(C%)
		Call Decode(B%)
		Call Decode(A%)
	End If
 End Sub

 Sub Decode(Mask%)		'calculates byte pixel patterns from masks
	Select Case Mask%
		Case=1			'narrow bar, narrow space - 2 bytes
			Call Download(&B00000000)
			Call Download(&B11111111)
		Case=2			'narrow bar, wide space	  - 2 bytes
        		Call Download(&B00000000)
			Call Download(&B00000000)
			Call Download(&B11111111)
        	Case=3			'wide bar, narrow space	  - 3 bytes
        		Call Download(&B00000000)
			Call Download(&B11111111)
			Call Download(&B11111111)
        	Case=4			'wide bar, wide space	  - 4 bytes
        		Call Download(&B00000000)
			Call Download(&B00000000)
			Call Download(&B11111111)
			Call Download(&B11111111)
	End Select
 End Sub

 Sub Download(BitPattern%)		'downloads bit patterns to printer
	Local A%,B%
	For A%=1 To 5
		For B%=1 To 11
			Lprint Chr$(BitPattern%);
		Next B%
	Next A%
 End Sub

 Def FNCode39$(Text$)			'builds Code 39 ASCII strings
	If Len(Text$)<1 Then
		FNCode39$=""
		Exit Def
	Else
		FNCode39$=Chr$(14)+"*"+Text$+"*"+Chr$(15)
	End If
 End Def

 'Demo starts here...

 Width"LPT1:",32767			'set printer graphics width

 Call Font39LandDownload		'download fonts to the HPLJ-II printer
 Lprint Chr$(27);")1X";			'select Code 39 as secondary font
 Lprint Chr$(15);			'select characters from primary font
 Lprint					'do a blank line
 Lprint FNCode39$("THIS IS A TEST");	'print some Code 39 stuff for test
 Lprint					'do a blank line
 Lprint"THIS IS A TEST"			'print some ASCII text for test
 Lprint Chr$(12);			'eject the page
```

## LIBMAKE.BAS

```bas
'Note: This is an Include File for MAKE.BAS
'To create MAKE.EXE, Compile MAKE.BAS
'------------------------------------------------------------------------
'File: LibMake.Bas
'Purpose: Library of functions needed for Make utility
'
'FUNCTION BINTODEC!(BinaryString$) 'RETURNS: Decimal equivelent of binary string
'SUB DTSTAMP$(FileName$,date$,time$)'RETURNS: Date and Time of last change
'FUNCTION FIGDATE&(DATE$)          'IN: DATE$ = mm/dd/yy RETURNS: Julian Date
'FUNCTION FILEEXISTS (FileName$)      'RETURNS: True if file exists
'FUNCTION GETFILENAME$             'RETURNS:Project main file name
'FUNCTION JULIAN#(D$,T$)           'RETURNS: pseudo julian time/date stamp
'SUB NOISE                         'Makes noise
'SUB WAITING                       'Process hit any key to continue

'------------------------------------------------------------------------
DEFINT A-Z
'Define register constants
%AX=1 : %BX=2 : %CX=3 : %DX=4 : %SI=5 : %DI=6 : %BP=7 : %DS=8 : %ES=9: %FLAGS=0
SUB DTSTAMP(FL$,D$,T$)
   'This sub returns the date and time stamp
   'In: fl$ = file name
   'Out: d$=date as mm/dd/yy
	 't$ = time as hr:mn:sc
   '1st open file to get it's handle for next part
   MAP BinBuff$$*16   'This makes sure that binary string is 16 characters

   Buf$=FL$+CHR$(0)       'ASCIIZ String
   REG %AX,&H3D02    'DOS Open File Function
   REG %DS, STRSEG(Buf$)
   REG %DX, STRPTR(Buf$)
   CALL INTERRUPT &H21  'Call DOS
   'if not on file, assign a time of 0 so it gets recompilied
   IF (REG(%FLAGS) AND 1) <> 0 THEN D$="00/00/00" :T$="00:00:00":EXIT SUB
   HANDLE = REG(%AX)   'Now AX holds file handle

   'Get file date and time
   REG %AX,&H5700   'DOS Get time and date function
   REG %BX,HANDLE   'Handle to file Fl$
   CALL INTERRUPT &H21
   TM= REG(%CX)    'Time (encoded)
   DT = REG(%DX)  'Date (encoded)

   'Now close file
   REG %AX,&H3E00  'DOS Close file function
   REG %BX,HANDLE  'BX
   CALL INTERRUPT &H21

   'Now uncode date and time
   RSET BinBuff$$=BIN$(TM)   'This insures 16 digits

    Hours$ = BinBuff$$
    RSET BinBuff$$=BIN$(DT)
    Dt$ = BinBuff$$
    Hrs%=CINT(BINTODEC!(MID$(Hours$,1,5)))   'Hours
    Mns%=CINT(BINTODEC!(MID$(Hours$,6,6)))   'Minutes
    Scs%=CINT(BINTODEC!(MID$(Hours$,12)))*2  'Seconds were in 2 sec intervals

    Yr$ =MID$(Dt$,1,7)
    Yr% = CINT(BINTODEC!(Yr$))+80  'YEAR IS OFFSERT FORM 1980
    Mn$=MID$(Dt$,8,4)
    Mn% =CINT(BINTODEC!(Mn$))       'MONTH
    Dy$=MID$(Dt$,12,6)
    Dy% =CINT(BINTODEC!(Dy$))        'DAY

    'Make up date string as: MM/DD/Yr
    MAP DtString$$*8
    DtString$$ = "00/00/00"
    MID$(DtString$$,1,2)=RIGHT$("00"+REMOVE$(STR$(Mn%)," "),2)
    MID$(DtString$$,4,2)=RIGHT$("00"+REMOVE$(STR$(Dy%)," "),2)
    MID$(DtString$$,7,2)=RIGHT$("00"+REMOVE$(STR$(Yr%)," "),2)
    D$=DtString$$  'DATE

    'Reuse DtString to make time string
    DtString$$="00:00:00"
    MID$(DtString$$,1,2)=RIGHT$("00"+REMOVE$(STR$(Hrs%)," "),2)
    MID$(DtString$$,4,2)=RIGHT$("00"+REMOVE$(STR$(Mns%)," "),2)
    MID$(DtString$$,7,2)=RIGHT$("00"+REMOVE$(STR$(Scs%)," "),2)
    T$=DtString$$   'Time String
END SUB
'------------------------------------------------------------------------
FUNCTION FIGDATE&(A$)
   'This function was "appropriated" from Howard Balinger's HBLIB file
   'on Compuserve
  LOCAL A#, M%, D%, Y&, LpYrDys%, W&, A&, B%
  M% = VAL(LEFT$(A$,2))
  D% = VAL(MID$(A$,4,2))
  Y& = VAL(RIGHT$(A$,2))
SELECT CASE M%
    CASE <1, >12
      GOTO FIGDATEError
    CASE 1,3,5,7,8,10,12
      IF D% < 1 OR D > 31% THEN FIGDATEError
    CASE 4,6,9,11
      IF D% < 1 OR D% > 30 THEN FIGDATEError
    CASE 2
      IF Y&/4 = FIX(Y&/4) AND Y& <> 0 THEN
        IF D% < 1 OR D% > 29 THEN FIGDATEError
      ELSE
        IF D% < 1 OR D% > 28 THEN FIGDATEError
           END IF: END SELECT
  IF Y& = 0 AND M% < 3 THEN GOTO DateRealOld
  IF M% < 3 THEN DECR Y&
  A& = FIX(Y&/4): W& = 1461 * A&: A& = Y& - 4*A&
  W& = W& + 365 * A&
  SELECT CASE M%
    CASE 3
      B% = 0
    CASE 4
      B% = 31
    CASE 5
      B% = 61
    CASE 6
      B% = 92
    CASE 7
      B% = 122
    CASE 8
      B% = 153
    CASE 9
      B% = 184
    CASE 10
      B% = 214
    CASE 11
      B% = 245
    CASE 12
      B% = 275
    CASE 1
      B% = 306
    CASE 2
      B% = 337
 END SELECT
 FIGDATE& = W& + B% + D% + 59: EXIT FUNCTION
DateRealOld:
 IF M% = 2 THEN FIGDATE& = D%+31 ELSE FIGDATE& = D%
EXIT FUNCTION
 FIGDATEError:
   FIGDATE& = 0
END FUNCTION
'------------------------------------------------------------------------
FUNCTION BINTODEC!(B$)
  'returns decimal equivelent of binary string
   L = LEN(B$)
   Total = 0
   Pointer=L
   FOR I = 1 TO L
      DIGIT$=MID$(B$,I,1)
      DECR Pointer
      Total=Total+(VAL(DIGIT$)*2^Pointer)
   NEXT I
   BINTODEC!=Total
END FUNCTION
'------------------------------------------------------------------------
FUNCTION GETFILENAME$
    'Returns main project filename
    'Assumes .Bas if not specified
    '1st see if command line parameter was passed
    LOCAL F$  'Filename
    F$ = COMMAND$
    IF F$="" THEN  'GET A NAME
	PRINT
	PRINT "Enter Main File Filename (.BAS is assummed if not specified):";
	INPUT F$
    END IF
    'Check for extension
    Ext=INSTR(F$,".")
    IF Ext=0 THEN F$=F$+".BAS"
    GETFILENAME$=F$
END FUNCTION
'------------------------------------------------------------------------
FUNCTION FILEEXISTS (FileSpec$)
  FileSpec1$ = FileSpec$ + CHR$(0)
  FileAttribute% = 0
  REG %AX, &H4E00
  REG %CX, FileAttribute%
  REG %DS, STRSEG(FILESPEC1$)
  REG %DX, STRPTR(FILESPEC1$)
  CALL INTERRUPT &H21
  IF (REG(%FLAGS) AND 1) = 0 THEN
    FILEEXISTS = -1
  ELSE
    FILEEXISTS = 0
  END IF
END FUNCTION 'FILEEXISTS

'------------------------------------------------------------------------
FUNCTION JULIAN#(D$,T$)

  'Creates pseudo julian time/date stamp
  'used to compare creation times
  'IN: D$ = Date String, T$ = Time String
    J&=FIGDATE&(D$)  'Get Julian Date
    'Now get fraction of day
    'T$ is now in form of  HH:MM:SS

 Seconds# =(CDBL(VAL(LEFT$(T$,2)))*3600)+(VAL(MID$(T$,4,2))*60)+(VAL(RIGHT$(T$,2)))

 'figure part of day that past
 PT#=Seconds#/86400     'Divide seconds by # of seconds in a day
 'Add it up
  JULIAN#=J&+PT#
 END FUNCTION
'-------------------------------------------------------------------------
SUB WAITING
   BEEP
   A$ = INKEY$  'Clear previous keystrokes into dummy variable
   PRINT"    < < <    Hit any key to continue ! ! ! > > > "
   WHILE NOT INSTAT:WEND
   A$ = INKEY$  'Clear  keystrokes into dummy variable
END SUB
'-------------------------------------------------------------------------

SUB NOISE
 FOR I% = 1 TO 2
    FOR X% = 57 TO 59
    PLAY "L64 N="+VARPTR$(X%)
    NEXT X%
 NEXT I%
END SUB
'-------------------------------------------------------------------------
SUB FINDDTSTAMP(F$,D$,T$)  'F$ = Filename D$=Date stamp  T$=Timestamp
  pbu$=f$  'save name
  'returns date and time of f$ or most recently changed include file of f$
  CALL DTSTAMP(F$,D$,T$)  'now d$ and t$ hold stamps of unit main file
  'now see if any of it's includes were updated mpre recently
   DIM I$(200)  'Hold Included filenames - to search through later
   Pointer = 0  'Pointer to next filename in I$()
   IncCount=0  'Count of Included filenames
    DO
      OPEN F$ FOR INPUT AS #1
	DO WHILE NOT EOF(1)
	   LINE INPUT #1,Txt$   '1 line of text from file
	   IF INSTR(Txt$,"$") THEN  'Use this to speed it up by only
		     'checking lines with a $ in them
	     Txt$=UCASE$(REMOVE$(Txt$,ANY CHR$(9,32)))  'Remove tabs and spaces
	     IF LEFT$(Txt$,8) = "$INCLUDE" THEN
	       F$=MID$(Txt$,10,12)  'Isolate filename
	       QUOTE = INSTR(F$,CHR$(34))  'Remove quote
	       IF QUOTE>0 THEN F$=LEFT$(F$,QUOTE-1)
		 IF FILEEXISTS(F$) THEN
		     INCR IncCount
		     I$(IncCount)=F$
		  ELSE
		     PRINT"WARNING!! ";F$;" is not in current directory,"
		     PRINT "and will not be checked!!!":beep:CALL WAITING
		  END IF
	     END IF
	   END IF
       LOOP
      CLOSE #1
      INCR POINTER
      F$=I$(POINTER)    'Check next file for includes
      LOOP WHILE F$<>""
      'now check all includes for a date that is less current than d$ and t$
      Stamp#= JULIAN#(D$,T$)  'Get julian date to compare easier
    FOR I = 1 TO IncCount
       FL$=I$(I)
       CALL DTSTAMP(FL$,D2$,T2$)
       Stamp2#= JULIAN#(D2$,T2$)
       IF Stamp2#>Stamp# THEN
	 Stamp#=Stamp2#
	 D$=D2$
	 T$=T2$
       END IF
    NEXT I
    f$=Pbu$ 'restore filename
END SUB
```

## MAKE.BAS

```bas
'This is a bug fix and an upgrade to Make version 1.0.
'
'BUG FIXED:   There are 3600 seconds in an hour, not 360.
'IMPOVEMENT:  1. This version checks for included files in the unit modules.
'	      2. Units do not require extension of .bas anymore.
'
'############################################################################
'                      VERSION 1.1
'FILE: MAKE.BAS  : This is the main FILE
'PURPOSE: UTILITY TO COMPILE ALL .PBU FILES THAT ARE NOT CURRENT
'WARNING: 1. THIS DOESN'T TRAP ERRORS OCCURRING DURING COMPILING.
'         2. ALL FILES MUST BE IN CURRENT DIRECTORY.
'         3. THIS UTILITY CREATES A BATCH FILE NAMED TMP-MKE.BAT,
'            AND WILL OVERWRITE ANY OTHER FILE OF THAT NAME.
'
'
'Author: Al Musella
'Upload date: 9/27/90
'Send comments (Good or Bad) to me at Compuserve: # 76114,637
'############################################################################
$STACK 32766


'--------------- INITIALIZE ------------------------------
DEFINT A-Z

COLOR 15,1:CLS
DIM L$(200,2)  'holds FILEnames for ,1-> .pbu  ,2 -> .bas
DIM Comp$(200)  'holds names of FILEs to compile
CompCount=0  'Count of items in Comp$
BatchFile$="TMP-MKE.BAT"   'Name of batch file that will compie the ubits

'Erase previous batch file
OPEN BATCHFILE$ FOR OUTPUT AS #3  'have to create one to avoid error on
CLOSE #3                         'kill statement
KILL BATCHFILE$
OPEN BATCHFILE$ FOR OUTPUT AS #3  'create batch file with names of files to
				       'compile

'display title page
PRINT STRING$(79,"*")
PRINT"                               Make Utility"
PRINT"                               Version 1.1"
PRINT"                        Programmed By : Al Musella"
PRINT STRING$(79,"*")
PRINT
'get name of main file and display it.
FileSpec$=UCASE$(GETFILENAME$)   'function getfilename returns name of project
PRINT
PRINT"             Main File: ";FileSpec$
PRINT
'Check if on file - abort if not on file
IF NOT FILEEXISTS(FileSpec$) THEN PRINT"This filename is not on file.":_
       PRINT"Try running this utility again with valid filename!!!":BEEP:END

'find all $link"*.pbu" files that are involved with this project
GOSUB  GETLINKS  '-------------------- Gets names of all Linked files into L$()

'check date and time of files
'if no links found, don't waste time checking their dates

IF LinkCount=0 THEN    'This is start of long If statement
       PRINT"THERE WERE NO $LINK STATEMENTS IN THIS PROJECT!"
ELSE     'only check dates and times if there are LINKS to compile.
      'NOW L$ (,1) HAS ALL FILES LINKED IN AS : *.PBU
      GOSUB GETSOURCE   'just changes .PBU to .BAS
      PRINT
      COLOR 15,1
      PRINT"----- UNITS ------------------------------- SOURCE FILES ----------------  ";
     'now get name of files that have to be compilied
     FOR I = 1 TO LinkCount
      IF L$(I,1)<>"" AND L$(I,2)<>"" THEN
	 COLOR 14,2
	 PRINT
	 'Get time and date stamp of files
	 CALL DtStamp$(L$(I,1),DPbu$,TPbu$)  'Stamp of .pbu
	 CALL FindDtStamp$(L$(I,2),DBas$,TBas$) 'stamp of newest include file
	 'convert to pseudo julian to compare easier
	 JPbu#=JULIAN#(DPbu$,TPbu$)  'function julian returns julian date
	 JBas#=JULIAN#(DBas$,TBas$)
	IF JBas#>JPbu# THEN  'if not current, add names to Comp$()
	   COLOR 0,4
	   INCR CompCount
	   Comp$(CompCount)=L$(I,2)
	 END IF
	PRINT L$(I,1);tab(15);DPbu$;" ";TPbu$;tab(40);L$(I,2);tab(55);DBas$;" ";TBas$;
      END IF
    NEXT I
    COLOR 14,1  'yellow/blue
    LOCATE 24,1
    PRINT
    IF CompCount>0 THEN
     'add them to batch file
     FOR I = 1 TO CompCount
       Text$="PBC -CU "+Comp$(I)
       PRINT#3,Text$
       PRINT "Adding to list: ";Text$
     NEXT I
   ELSE
     PRINT
     PRINT"No .Pbu files need to be recompiled"
     BEEP
   END IF

END IF  'This is the end of IF statement on line  56

'Now add main file to batch file
Exe$=FileSpec$  'Convert filename to .exe extension
P = INSTR(Exe$,".")
MID$(Exe$,P+1,3) = "EXE"
CALL DTSTAMP$(Exe$,DExe$,TExe$)
CALL DTSTAMP$(FileSpec$,DBas$,TBas$)
Text$="PBC -CE "+FileSpec$
PRINT "Adding to list: ";Text$
PRINT CompCount+1 ;" Files will be compilied"
PRINT
PRINT"--------------------------------------------------------------------------"
PRINT
PRINT"MAIN PROJECT:" FileSpec$,DBas$,TBas$
PRINT"COMPILED    :" Exe$,DExe$,TExe$
PRINT
PRINT#3, Text$
CLOSE#3
PRINT:PRINT:PRINT"Executing ";BatchFile$
PRINT
EXECUTE BATCHFILE$  'do the compiling

END




GETSOURCE:  'Convert .Pbu extension to .Bas for array L$
	    'Array L$(1 to LinkCount,1) holds .Pbu Filenames
	    'convert these to .Bas (or whatever) and store in L$(,2)
     FOR I = 1 TO LinkCount
	FPbu$=L$(I,1)  '.Pbu file
	    'for now, assume .bas - but this can be changed.
	    'Remove .Pbu , add .bAS
	FBas$ =  REMOVE$(FPbu$,".PBU")+".BAS"
	IF FILEEXISTS(FBAS$) THEN
	   L$(I,2) = FBas$
	ELSE
	  FStar$=REMOVE$(FPbu$,".PBU")+".*"
	  F$=DIR$(Fstar$) 'find first match
	  Ext$=RIGHT$(F$,3)  'file extension
	  WHILE (Ext$="EXE" or Ext$="BAK" or Ext$="PBU")
	     F$=DIR$  'Find next match
	     Ext$=RIGHT$(F$,3)  'file extension
	  WEND
	  L$(I,2) = F$
	  IF F$="" THEN
	   PRINT"WARNING!!! The source file for ";FPbu$;" is not in"
	   PRINT"current directory, or doesn't have an extension of .BAS"
	   PRINT"This file will not be checked!!!"
	   CALL WAITING
	   L$(I,1)=""   'DON'T CHECK THIS FILE
	  END IF
	END IF
     NEXT I
RETURN


GETLINKS:  ' Find all .Pbu files mentioned in the project,
	    ' and store them in array L$(1->LinkCount,1)
	    'LinkCount is returned as # of files in the array

  DIM INCS$(200)  'Hold Included filenames - to search through later
   Pointer = 0  'Pointer to next filename in Inc$()
   IncCount=0  'Count of Included filenames
   LinkCount=0 'Count of Linked filenames
   NF$ = FileSpec$  'NF$ = Next filename to check for more Links
   DO WHILE FILEEXISTS(NF$)
      PRINT"SEARCHING: ";NF$
      OPEN NF$ FOR INPUT AS #1
	DO WHILE NOT EOF(1)
	   LINE INPUT #1,T$   '1 line of text from file
	   IF INSTR(T$,"$") THEN  'Use this to speed it up by only
		     'checking lines with a $ in them
	     T$=UCASE$(REMOVE$(T$,ANY CHR$(9,32)))  'Remove tabs and spaces
	     IF LEFT$(T$,5)="$LINK" AND INSTR(T$,".PBU") THEN
		F$=MID$(T$,7,12)  'Isolate filename
		QUOTE = INSTR(F$,CHR$(34))  'Remove quote
		IF QUOTE>0 THEN F$=LEFT$(F$,QUOTE-1)
		       PRINT TAB(10) "FOUND :";F$
		    INCR LinkCount
		    L$(LinkCount,1)=F$
	     END IF
	     IF LEFT$(T$,8) = "$INCLUDE" THEN
	       F$=MID$(T$,10,12)  'Isolate filename
	       QUOTE = INSTR(F$,CHR$(34))  'Remove quote
	       IF QUOTE>0 THEN F$=LEFT$(F$,QUOTE-1)
		 PRINT TAB(10) "FOUND :";F$
		  IF FILEEXISTS(F$) THEN
		     INCR IncCount
		     INCS$(IncCount)=F$
		  ELSE
		     PRINT"WARNING!! ";F$;" is not in current directory,"
		     PRINT "and will not be checked!!!":beep:CALL WAITING
		  END IF
	     END IF
	   END IF
       LOOP
      CLOSE #1
      INCR Pointer
      NF$=INCS$(Pointer)
   LOOP
   PRINT"--------------------------------------------------------------------------"
RETURN

$INCLUDE"LibMake.Bas"  'library of functions and subs

```

## FINDFILE.BAS

```bas
 ' SEE THE COMMENT BEFORE THE SAMPLE ABOUT COMPILING THIS
 ' Copr 1988, 1989 Barry Erick
 $COMPILE UNIT
 $LIB ALL OFF
 $ERROR ALL OFF
 DEFINT a-z

 FUNCTION Findfirst$(filn$)  public
 'Copr 1988,1989 Barry Erick
LOCAL stringsegptr&,ferr%
LOCAL DTAAtt&,DTAOff&,DTASeg&,FExist$,Fil,Fil$,Ptr

 '  Format of the DTA after a file has been found:
 '
 '      Offset      Size(bytes)    Description
 '     (D) (H)
 '       0  0       21  15       Used by DOS for find next
 '      21  15       1   1       Attribute of file found
 '      22  16       2   2       Time Stamp of file
 '      24  18       2   2       Date Stamp of file
 '      26  1A       4   4       File size in bytes
 '      30  1E      13   D       Filename and extension (asciiz)
 '
 '  Attributes:
 '     bit    0 - READ Only
 '            1 - Hidden
 '            2 - SYSTEM
 '            3 - Volume Label
 '            4 - Subdirectory
 '            5 - Archive

 ' The formats for Time and Date are:
 '  Time = Hour * 2048 + Minute * 32 + Second / 2)
 '  Date = (Year - 1980) * 512 + Month * 32 + Day)
 '
 ' see the file Exists.Bas for the routines to turn the time and date into
 ' their members

 fexist$          = filn$+CHR$(0)       ' make it a ASCIIZ string for DOS
 REG 8,strseg(fexist$)                  ' String Segment  to Reg DS
 REG 4,strptr(Fexist$)                  ' String Seg Offset to Reg DX
 REG 3,&H17                             ' Find all but vol label Attribute
 REG 1,&H4E00                           ' DOS Function Find First Match
 CALL INTERRUPT &H21                    ' Just look for first matching file
 ferr% = REG(1)                         ' Reg AX.. 0 = no error
 IF ferr% = 2 OR_
    ferr% = 18 OR_
    ferr% = 3 OR_
    ferr% = 15 THEN
    Findfirst$ = ""
    EXIT Function
 END IF
 ' Get the dta that has the filename & stuff
 REG 1,&H2F00                               ' ah = 2F (Get DTA)
 CALL INTERRUPT &h21                        ' perform dos call
 dtaseg& = REG(9)                           ' DTA segment = ES
 dtaatt& = REG(2)+&H15                      ' offset of attributes
 dtaoff& = REG(2)+&H1E                      ' offset of filename
 fil$ = ""                                  ' prepare to retrieve filename
 DEF SEG=dtaseg&                            ' set segment = DTA segment
 FOR ptr% = 0 TO 12                         ' retrieve filename
     fil% = PEEK(dtaoff& + ptr%)                  ' from DTA
     IF fil% = 0 THEN EXIT FOR
     fil$ = fil$ + CHR$(PEEK(dtaoff& + ptr%))
 NEXT ptr%
 IF (PEEK(dtaatt&) AND 16) = 16 THEN
    fil$ = "<"+fil$+">"' its a subdir ' look late to see if we really want it
 END IF
 DEF SEG                                    ' reset segment to default
 Findfirst$ = fil$
 END Function

 '[********************]

 FUNCTION Findnext$                public
 'Copr 1988,1989 Barry Erick
LOCAL fil$,dtaseg&,dtaoff&,dtaatt&,fil%,ptr%

 REG 1,&h4F00
 CALL INTERRUPT &h21
 ' return if errors and/or no files
 IF REG(1) = 18 THEN
    Findnext$ = ""
    EXIT Function
 END IF
 REG 1,&H2F00
 CALL INTERRUPT &H21
 dtaseg& = REG(9)   ' DTA segment = ES
 dtaatt& = REG(2) + 21' offset of attributes
 dtaoff& = REG(2) + 30' filename offset
 fil$ = ""          ' prepare to transfer filename
 DEF SEG=dtaseg&    ' set segment to DTA segment
 FOR ptr% = 0 TO 12
     fil% = PEEK(dtaoff& + ptr%)                    ' from DTA
     IF fil% = 0 THEN EXIT FOR
     fil$ = fil$ + CHR$(PEEK(dtaoff& + ptr%))
 NEXT ptr%
 IF (PEEK(dtaatt&) AND 16) = 16 THEN
    fil$ = "<"+fil$+">"' mark subdirs, mask later if need be
 END IF
 DEF SEG                                    ' restore default segment
 Findnext$ = fil$
 END FUNCTION

 '[********************]

 '**********************************************************************
 ' The following is a sample of how to use this                        *
 ' test findfile                                                       *
 ' This sample will not compile unless you change %NotComment to = -1  *
 '**********************************************************************

 %notcomment = 0
 $IF  %notcomment

     INPUT "mask";mask$       'mask can be wildcards
     numfound% = 0
     a$=Findfirst$(mask$)
     IF a$="" THEN
        PRINT mask$ ;"Not found"
        END
     ELSE
        PRINT mask$;" found!"
        INCR numfound%
        PRINT USING "\              \";a$; 'print the first file
        DO
            a$=Findnext$
            IF a$="" THEN EXIT LOOP
            PRINT USING "\               \";a$;'print the rest
            INCR numfound%                  'note, you can save names
        LOOP                                'by sticking them in an
        PRINT                               'array, but for the demo, we
        PRINT numfound%-1 ;"Files found"    'just print them
     END IF

 $ENDIF
```

## PBTOUCH.BAS

```bas
 ' PowerBASIC version
 ' PBTOUCH.BAS
 $Compile EXE
 $LIB ALL OFF
 $ERROR ALL OFF
 DEFINT a-z
 %True = -1
 %False = 0
 PUBLIC FileTime&,FileDate&,TUError
 $Link "Touchu.Pbu"
 $Link "FindFile.Pbu"


 FUNCTION DOHelp
 PRINT " PBTouch  (c) 1990 Barry Erick"
 PRINT
 PRINT "Syntax is:"
 PRINT " PBTOUCH filename switches"
 PRINT "The switches are:"
 PRINT "    -D  Use DOS Time and Date   -T  use the passed time:
 PRINT " When using passed time, the format is:
 PRINT "PBTOUCH filename -T=date=time"
 PRINT "where:
 PRINT "     date is in MM/DD/YY format  and"
 PRINT "     time is in HH:MM:SS format or"
 PRINT "     time is in HH:MM format"
 PRINT
 PRINT "Wildcard file names are allowed."

 ' If you can see this source, you
 ' may want to see the pbu file source for additional
 ' things that you may do. Like update a file and
 ' then reset the time stamp to the original.
 END 255
 END FUNCTION

 'get the command line.. the only way for this to work
 IF COMMAND$ = "" THEN
    a = doHelp
 ELSEIF INSTR(COMMAND$,ANY "-/") = 0 THEN
    a = DoHelp
 ELSEIF LEFT$(COMMAND$,2)="/?" OR UCASE$(LEFT$(COMMAND$,2))="/H"_
        OR  LEFT$(COMMAND$,2) ="-?" OR UCASE$(LEFT$(COMMAND$,2))="-H" THEN
    a = DoHelp
 ELSE
    OurCommand$ = COMMAND$
 'get filename
    spcloc = INSTR(COMMAND$,ANY "-/")
    FileSpec$ = Ltrim$(Rtrim$(MID$(COMMAND$,1,spcloc-1)))
    'parce off any drive or path information
    ' check for drivespec
    DriveSpec = INSTR(filespec$,":")
    PathSpec = INSTR(FileSpec$,"\")
    IF PathSpec > 0 THEN
     ' check if more
       PPtr = PathSpec+1
       DO
           morePath  = INSTR(PPtr,FileSpec$,"\")
           IF MorePath = 0 THEN EXIT LOOP
           PPTr = MorePath + 1
       LOOP
       DrivePath$ = MID$(FileSpec$,1,PPTr-1)
    ELSE
       DrivePath$ = MID$(FileSpec$,1,DriveSpec)
    END IF
    f$ = FindFirst$(FileSpec$)
    IF f$ = ""THEN EXIT IF
    FileName$ = DrivePath$+ F$
    InFirst = %True
    DO
        IF NOT InFirst% THEN
           f$ = FindNext$
           IF f$ = "" THEN EXIT LOOP
           FileName$ = Drivepath$ + F$
        END IF
        InFirst% = %False
        WhatAction$ = MID$(OurCOMMAND$,spcloc+1,1)
        SELECT CASE UCASE$(WhatAction$)
               CASE "D"
                    CALL Touch(FileName$,"DOS")
               CASE "T"
				    'get the passed time and date
				    'Check.. must have two equals
                    f = INSTR(OurCOMMAND$,"=")
                    s = INSTR(f+1,OurCOMMAND$,"=")
                    IF f = 0 OR s = 0 THEN
                       TUError = 2
                       EXIT SELECT
                    END IF
                    da$ = MID$(Ourcommand$,f+1,(s-1)-(f))
                    ti$ = MID$(OurCommand$,s+1)
                    CALL TouchwithThis(FileName$,da$,Ti$)
               CASE ELSE
                    TUError = 2
                    EXIT SELECT
        END SELECT
    LOOP
 END IF
 END (TUError)
```

## TOUCH.BAS

```bas
' this program is being used to develop the ability to read, save and
' re-write the file date back to the directory. in this way, the
' program will apear un-altered. When used, we will first get the
' date and time, and then close the file. when done altering and
' closing the file, we will re-open and replace the current date and time
' with the original date and time.
' PowerBASIC version
' TOUCH.PBU
$Compile UNIT
Defint a-z

EXTERNAL FILEDate&,FileTime&,ErrorCode
%True = -1
%False = 0
'┌───────────────────────────────────────────────────────────────────────────┐
'│			      REGNAMES.INC				     │
'│									     │
'│ This file is to be used as a $INCLUDE file whenever you use the CALL      │
'│ INTERRUPT statement in your PowerBASIC program. The file contains         │
'│ named constants that represent the registers the CALL INTERRUPT statement │
'│ can manipulate.							     │
'│									     │
'│ In order to use this file include it in your programs using the $INCLUDE  │
'│ metastatement:                                          		     │
'│	                                                            	     │
'│   $INCLUDE "REGNAMES.INC"						     │
'│	                                  				     │
'└───────────────────────────────────────────────────────────────────────────┘

%FLAGS = 0
%AX    = 1
%BX    = 2
%CX    = 3
%DX    = 4
%SI    = 5
%DI    = 6
%BP    = 7
%DS    = 8
%ES    = 9
SUB Touch(FileName$,WayToGo$) PUBLIC

	'*********************************************************
        '*                                                       *
	'* Name: Touch                                           *
        '* Purpose: To get the current file time and date, and   *
        '*          save it. It will then be used to rewrite     *
        '*          back to the directory.                       *
	'* Application: PowerBasic  file invisible file updates  *
        '* By: Barry Erick                                       *
	'* Date: June 1, 1987, Jan 20,1990                       *
	'* Altered: Registers 0,1,2,3,4,8 (Flags,AX,BX,CX,DX,DS) *
        '*                                                       *
        '*********************************************************


  SHARED  FileDate&,FileTime&,ErrorCode	'Pass them on for later use
  DirectionError = %False
  IF UCase$(WayToGo$) = "SET" THEN
    WayToGo = Asc(">")
  ELSE
    WayToGo = ASC("<")
  END IF
  FileName$=FileName$ +CHR$(0)	' Tag on a Zero to make it a ASCIIZ
 '
  REG %AX,&H3D00	'open the file for read to then get date and time
  		' ah = 3d, al = 0..read only
  REG %DX,StrPtr(Filename$)
  REG %DS,StrSeg(FileName$)
  CALL INTERRUPT &H21
  CarryFlag = REG(%FLAGS)MOD &HFFFE
  Handle = REG(1) MOD 256

  IF WayToGo = asc(">") then  goto SetFileTimeDate
  IF WayToGo = asc("<") Then  goto GetFileTimeDate
  DirectionError = %True	' Parameter wrong
  Goto CloseIt          ' so tell and close it...delete once working

GetFileTimeDate:
  REG %AX,&H5700 ' get date,time ah=57, al = 0
  REG %BX,Handle
  CALL INTERRUPT &H21
 FileTime& = REG(%CX)
 FileDate& = REG(%DX)
 GOTO CloseIt

SetFileTimeDate:
 'set file date
  REG %AX,&H5701 ' set date,time ah=57, al = 1
  REG %BX,Handle
  REG %CX,FileTime&
  REG %DX,FileDate&
  CALL INTERRUPT &H21
  IF REG(%FLAGS) MOD &HFFFE = 1 then goto setError
  GOTO CloseIt
 SetError:
  errcode = REG(1) MOD 256 'AL
  if ErrCode = 1 then print "Bad Function Code (not 1 or 0)":goto CloseIt
  if ErrCode = 6 then print "Bad handle passed": GoTO CloseIt
  ? "I got and error on setting, but I don't know what it is..";errCode
  GOTO CloseIt



CloseIt:
 If DirectionError then
    ? " Parameter Error.... must be GET or SET "
 end if
 ' file is open.... close it for now
 REG %AX,&H3E00
 REG %BX,Handle
 CALL INTERRUPT &H21

END SUB

```

## PD200.BAS

```bas
 ' PW200 VIDEO, WINDOW AND MENU SUBROUTINES AND FUNCTIONS
 ' POWERBASIC VERSION 2.0 DEMONSTRATION PROGRAM
 ' COPYRIGHT (C) 1990, RICHARD D. FOTHERGILL  ALL RIGHTS RESERVED

$COMPILE EXE

$LIB ALL-

$ERROR ALL-

$INCLUDE "PW200.INC"

 CALL Openwin(1,1,25,80,attr(0,7),attr(0,7),0,0,0,0)
 CALL Fakewin(2,1,23,80,attr(7,1),attr(7,1),1,0,0,0)
 CALL Openwin(5,20,11,40,attr(0,7),attr(1,7),2,0,0,0)
 CALL Printcwin(2,"PW200")
 SELECT CASE curdisplay%
 CASE 0 : msg$ = "MONO"
 CASE 1 : msg$ = "CGA"
 CASE 2 : msg$ = "EGA"
 CASE 3 : msg$ = "MCGA"
 CASE 4 : msg$ = "VGA"
 END SELECT
 msg1$ = STR$(curvideo%)
 msg$ = msg$ + " monitor in video mode "+msg1$
 CALL Printcwin(3,msg$)
 IF mousehere THEN msg$ = "Mouse present and active." ELSE msg$ = "No mouse present"
 CALL Printcwin(4,msg$)
 CALL Printcwin(5,"Copyright (C) 1990")
 CALL Printcwin(6,"by Richard D. Fothergill")
 CALL Printcwin(7,"All Rights Reserved")
 x = 0
 WHILE NOT INSTAT AND (x < 32000)
   INCR x
 WEND
 CALL Closewin
 IF INKEY$ <> "" THEN
   a$ = INKEY$
   a$ = CHR$(0)
 END IF
 done = 0
 CALL Initmenus

 CALL Sprint(25,1,"             Use arrow keys to change selection - Return to select              ",attr(0,3))
 WHILE NOT done
   CALL Makehmenu(mitem$(),subitem$,mitemcount,mcurntpos,mstartpos,mhlattr,mflattr,mflon,mmenuspaces,mbarloc)
   SELECT CASE mcurntpos
   CASE 1 : CALL Fdemo
   CASE 2 : CALL Tdemo
   CASE 3 : CALL Sdemo
   CASE 4 : CALL Edemo
   CASE ELSE
     CALL Closewin
     CLS
     CALL Openwin(9,16,8,52,attr(0,7),attr(1,7),2,0,0,0)
     CALL Printcwin(3," P W ")
     CALL Printcwin(4,"2 0 0")
     DELAY(3)
     CALL Closewin
     done = -1
   END SELECT
 WEND
 END

SUB Initmenus
 SHARED mitem$(),subitem$,mitemcount,mcurntpos,mstartpos,mhlattr,mflattr,mflon,mmenuspaces,mbarloc
 SHARED sitem$(),sliveitem$,sitemcount,scurntpos,sstartpos,shlattr,sflattr,snoattr,sbartype,sflon
 SHARED eitem$(),eliveitem$,eitemcount,ecurntpos,estartpos,ehlattr,eflattr,enoattr,ebartype,eflon IF curvideo = 7 THEN menunoattr = attr(0,0) ELSE menunoattr = attr(8,7)

 mcurntpos = 0
 mstartpos = 1
 DIM mitem$(5)
 mitem$(1) = "Frames"
 mitem$(2) = "Titles"
 mitem$(3) = "Shadows"
 mitem$(4) = "Demos"
 mitem$(5) = "Quit"
 mitemcount = 5
 mhlattr  = attr(7,0)
 mflattr  = attr(15,7)
 mflon = -1
 mmenuspaces = 8
 mbarloc = 0
 subitem$ ="001110"
 sliveitem$ = "11011011"
 scurntpos = 0
 sstartpos = 1
 DIM sitem$(8)
 sitem$(1) = "Flat         (   0)"
 sitem$(2) = "Reattribute  (1, 2)"
 sitem$(3) = "Solid        (3, 4)"
 sitem$(4) = "Light Hatch  (5, 6)"
 sitem$(5) = "Medium Hatch (7, 8)"
 sitem$(6) = "Heavy Hatch  (9,10)"
 sitem$(7) = "Activate Items 3,6 "
 sitem$(8) = "Deact. Items   3,6 "
 sitemcount = 8
 shlattr = attr(7,0)
 sflattr = attr(15,7)
 snoattr = menunoattr
 sbartype = 1
 sflon = -1
 eliveitem$ = "11111"
 ecurntpos = 0
 estartpos = 1
 DIM eitem$(5)
 eitem$(1) = "Pop Windows       "
 eitem$(2) = "Zoom Windows      "
 eitem$(3) = "File / List Window"
 eitem$(4) = "DOS Utilities     "
 eitem$(5) = "Field Input       "
 eitemcount = 5
 ehlattr = attr(7,0)
 eflattr = attr(15,7)
 enoattr = menunoattr
 ebartype = 1
 eflon = -1
END SUB

SUB Continue
 CALL Sprintc(25,1,80,"             Press any key to continue...            ",attr(15,3))
 CALL Getkey(a1$,a2$)
 CALL Sprintc(25,1,80,"Use arrow keys to change selection - Return to select",attr(0,3))
END SUB

SUB Fdemo
 CALL Openwin(5,15,6,15,attr(15,2),attr(15,2),0,0,1,0)
 CALL Titlewin(2,attr(14,2),"[ Style 0 ]")
 CALL Openwin(5,34,6,15,attr(15,5),attr(15,5),1,8,1,0)
 CALL Titlewin(2,attr(14,5),"[ Style 1 ]")
 CALL Openwin(5,53,6,15,attr(15,3),attr(15,3),2,8,1,0)
 CALL Titlewin(2,attr(14,3),"[ Style 2 ]")
 CALL Openwin(8,5,6,15,attr(15,4),attr(15,4),3,8,1,0)
 CALL Titlewin(2,attr(14,4),"[ Style 3 ]")
 CALL Openwin(8,24,6,15,attr(15,3),attr(15,3),4,8,1,0)
 CALL Titlewin(2,attr(14,3),"[ Style 4 ]")
 CALL Openwin(8,43,6,15,attr(15,6),attr(15,6),5,8,1,0)
 CALL Titlewin(2,attr(14,6),"[ Style 5 ]")
 CALL Openwin(8,62,6,15,attr(15,5),attr(15,5),6,8,1,0)
 CALL Titlewin(2,attr(14,5),"[ Style 6 ]")
 CALL Openwin(11,15,6,15,attr(15,2),attr(15,2),7,8,1,0)
 CALL Titlewin(2,attr(14,2),"[ Style 7 ]")
 CALL Openwin(11,34,6,15,attr(15,7),attr(15,7),8,8,1,0)
 CALL Titlewin(2,attr(14,7),"[ Style 8 ]")
 CALL Openwin(11,53,6,15,attr(15,4),attr(15,4),9,8,1,0)
 CALL Titlewin(2,attr(14,4),"[ Style 9 ]")
 CALL Openwin(14,5,6,15,attr(15,7),attr(15,7),10,8,1,0)
 CALL Titlewin(2,attr(14,7),"[ Style 10]")
 CALL Openwin(14,24,6,15,attr(15,6),attr(15,6),11,8,1,0)
 CALL Titlewin(2,attr(14,6),"[ Style 11]")
 CALL Openwin(14,43,6,15,attr(15,5),attr(15,5),12,8,1,0)
 CALL Titlewin(2,attr(14,5),"[ Style 12]")
 CALL Openwin(14,62,6,15,attr(15,2),attr(15,2),13,8,1,0)
 CALL Titlewin(2,attr(14,2),"[ Style 13]")
 CALL Openwin(17,15,6,15,attr(15,3),attr(15,3),14,8,1,0)
 CALL Titlewin(2,attr(14,3),"[ Style 14]")
 CALL Openwin(17,34,6,15,attr(15,2),attr(15,2),15,8,1,0)
 CALL Titlewin(2,attr(14,2),"[ Style 15]")
 CALL Openwin(17,53,6,15,attr(15,7),attr(15,7),16,8,1,0)
 CALL Titlewin(2,attr(14,7),"[ Style 16]")
 CALL Continue
 FOR x = 1 TO 17
   CALL Closewin
 NEXT
END SUB

SUB Tdemo
 CALL Openwin(8,8,10,68,attr(15,5),attr(15,5),2,0,1,0)
 CALL Printcwin(3,"Titles may be placed in any of six different locations")
 CALL Printcwin(4,"and in any color attribute!")
 FOR x=1 TO 6
   msg$ = STR$(x)
   msg$ = "[ LOCATION "+msg$+" ]"
   CALL Titlewin(x,attr(9+x,5),msg$)
   DELAY(1)
 NEXT
 CALL Continue
 CALL Closewin
END SUB

SUB Sdemo
 SHARED sitem$(),sliveitem$,sitemcount,scurntpos,sstartpos,shlattr,sflattr,snoattr,sbartype,sflon
 CALL Openwin(2,32,10,23,attr(0,7),attr(0,7),1,8,1,0)
 done = 0
 WHILE NOT done
   CALL Makevmenu(sitem$(),sliveitem$,sitemcount,scurntpos,sstartpos,shlattr,sflattr,snoattr,sbartype,sflon)
   SELECT CASE scurntpos
   CASE 1
     CALL Openwin(10,4,7,74,attr(15,5),attr(15,5),2,0,0,0)
     CALL Titlewin(2,attr(15,5)," FLAT ")
     CALL Openwin(11,8,10,30,attr(15,3),attr(0,3),1,0,0,0)
     CALL Openwin(11,43,10,30,attr(15,7),attr(1,7),1,0,0,0)
     CALL Continue
     CALL Closewin
     CALL Closewin
     CALL Closewin
   CASE 2
     CALL Openwin(10,4,7,74,attr(15,5),attr(15,5),2,0,0,0)
     CALL Titlewin(2,attr(15,5)," REATTRIBUTE ")
     CALL Openwin(11,8,10,30,attr(15,3),attr(0,3),2,8,1,0)
     CALL Printcwin(7,"Left Shadow")
     DELAY(2)
     CALL Openwin(11,43,10,30,attr(15,7),attr(1,7),2,8,2,0)
     CALL Printcwin(7,"Right Shadow")
     CALL Continue
     CALL Closewin
     CALL Closewin
     CALL Closewin
   CASE 3
     CALL Openwin(10,4,7,74,attr(15,5),attr(15,5),2,0,0,0)
     CALL Titlewin(2,attr(15,5)," SOLID ")
     CALL Openwin(11,8,10,30,attr(15,3),attr(0,3),2,0,3,0)
     CALL Printcwin(7,"Left Shadow")
     DELAY(2)
     CALL Openwin(11,43,10,30,attr(15,7),attr(1,7),2,0,4,0)
     CALL Printcwin(7,"Right Shadow")
     CALL Continue
     CALL Closewin
     CALL Closewin
     CALL Closewin
   CASE 4
     CALL Openwin(10,4,7,74,attr(15,5),attr(15,5),2,0,0,0)
     CALL Titlewin(2,attr(15,5)," LT. HATCH ")
     CALL Openwin(11,8,10,30,attr(15,3),attr(0,3),2,attr(0,7),5,0)
     CALL Printcwin(7,"Left Shadow")
     DELAY(2)
     CALL Openwin(11,43,10,30,attr(15,7),attr(1,7),2,attr(0,7),6,0)
     CALL Printcwin(7,"Right Shadow")
     CALL Continue
     CALL Closewin
     CALL Closewin
     CALL Closewin
   CASE 5
     CALL Openwin(10,4,7,74,attr(15,5),attr(15,5),2,0,0,0)
     CALL Titlewin(2,attr(15,5)," MED. HATCH ")
     CALL Openwin(11,8,10,30,attr(15,3),attr(0,3),2,attr(0,7),7,0)
     CALL Printcwin(7,"Left Shadow")
     DELAY(2)
     CALL Openwin(11,43,10,30,attr(15,7),attr(1,7),2,attr(0,7),8,0)
     CALL Printcwin(7,"Right Shadow")
     CALL Continue
     CALL Closewin
     CALL Closewin
     CALL Closewin
   CASE 6
     CALL Openwin(10,4,7,74,attr(15,5),attr(15,5),2,0,0,0)
     CALL Titlewin(2,attr(15,5)," HEAVY HATCH ")
     CALL Openwin(11,8,10,30,attr(15,3),attr(0,3),2,attr(0,7),9,0)
     CALL Printcwin(7,"Left Shadow")
     DELAY(2)
     CALL Openwin(11,43,10,30,attr(15,7),attr(1,7),2,attr(0,7),10,0)
     CALL Printcwin(7,"Right Shadow")
     CALL Continue
     CALL Closewin
     CALL Closewin
     CALL Closewin
   CASE 7
     MID$(sliveitem$,3) = "1"
     MID$(sliveitem$,6) = "1"
   CASE 8
     MID$(sliveitem$,3) = "0"
     MID$(sliveitem$,6) = "0"
   CASE ELSE
     CALL Closewin
     done = -1
   END SELECT
 WEND
 done = 0
END SUB

SUB Edemo
 SHARED eitem$(),eliveitem$,eitemcount,ecurntpos,estartpos,ehlattr,eflattr,enoattr,ebartype,eflon
 CALL Openwin(2,46,7,22,attr(0,7),attr(0,7),1,8,1,0)
 done = 0
 WHILE NOT done
   CALL Makevmenu(eitem$(),eliveitem$,eitemcount,ecurntpos,estartpos,ehlattr,eflattr,enoattr,ebartype,eflon)
   SELECT CASE ecurntpos
   CASE 1
     CALL Openwin(8,8,10,65,attr(15,5),attr(15,5),2,0,1,0)
     CALL Printcwin(3,"Windows can be popped")
     CALL Printcwin(4,"onto the screen.")
     DELAY(2)
     CALL Openwin(5,5,10,50,attr(0,2),attr(14,2),2,8,1,0)
     DELAY(2)
     CALL Openwin(13,15,10,60,attr(1,3),attr(15,3),3,8,1,0)
     DELAY(2)
     CALL Openwin(7,33,10,45,attr(14,5),attr(14,5),1,8,1,0)
     CALL Continue
     FOR x = 1 TO 4
       CALL Closewin
     NEXT
   CASE 2
     CALL Openwin(8,8,10,65,attr(15,5),attr(15,5),2,0,1,0)
     CALL Printcwin(3,"Windows can be zoomed")
     CALL Printcwin(4,"onto the screen.")
     DELAY(2)
     winspeed = 0
     CALL Openwin(5,5,10,50,attr(0,2),attr(14,2),2,8,1,1)
     DELAY(2)
     winspeed = 10000
     CALL Openwin(13,15,10,60,attr(1,3),attr(15,3),3,8,1,1)
     DELAY(2)
     winspeed = 20000
     CALL Openwin(7,33,10,45,attr(14,5),attr(14,5),1,8,1,1)
     DELAY(2)
     winspeed = 30000
     CALL Openwin(7,20,12,40,attr(15,4),attr(14,4),2,8,1,1)
     CALL Printcwin(5,"HOW ABOUT THAT !!!")
     CALL Continue
     FOR x = 1 TO 5
       CALL Closewin
     NEXT
   CASE 3
     CALL Showfile
   CASE 4
     CALL Ddemo
   CASE 5
     CALL Idemo
   CASE ELSE
     CALL Closewin
     done = -1
   END SELECT
 WEND
 done = 0
END SUB

SUB Showfile
 dirinfo$ = STRING$(43,CHR$(0))
 DIM recarr$(5000)
 CALL Openwin(10,20,7,41,attr(0,7),attr(1,7),2,attr(8,0),1,0)
 CALL Titlewin(5,attr(1,7),"[ Press Enter for Directory ]")
 CALL Printcwin(2,"Enter a Text File Name to Display")
 sourcename$ = ""
 Capson = -1
 CALL Getfield(4,10,sourcename$,"S",20,0,retcode,attr(15,1),attr(0,7))
 Capson = 0
 CALL Closewin
 IF retcode <> 0 THEN
   IF sourcename$ = "" THEN
     sourcename$ = Makefmenu$("*.*",5,10,17,attr(1,7),attr(1,7),2,attr(8,0),1,0,attr(7,1))
   END IF
   IF RIGHT$(sourcename$,1)<>"\" THEN
     CALL Findfirst(sourcename$+CHR$(0),&H10,dirinfo$,doserror)
     IF doserror = 0 THEN
       OPEN sourcename$ FOR INPUT AS #1
       rec = 1
       DO
	 LINE INPUT #1,recarr$(rec)
	 IF LEN(recarr$(rec)) > 76 THEN
	   recarr$(rec + 1) = RIGHT$(recarr$(rec),LEN(recarr$(rec))-76)
	   recarr$(rec) = LEFT$(recarr$(rec),76)
	   INCR rec
	 END IF
	 INCR rec
       LOOP UNTIL EOF(1)
       CLOSE #1
       CALL Openwin(1,1,25,80,Attr(7,0),Attr(15,1),0,0,0,0)
       CALL Titlewin(1,Attr(15,1),"LIST DEMO")
       CALL Titlewin(3,Attr(15,1),Falign$(sourcename$))
       CALL Makelmenu(recarr$(),rec,pickrec,1,Attr(0,7))
       CALL Closewin
     ELSE
       CALL Openwin(10,20,5,40,Attr(15,4),Attr(15,4),2,Attr(8,0),1,0)
       CALL Printcwin(2,"FILE NOT FOUND - PROCEDURE ABORTED!")
       CALL Continue
       CALL Closewin
     END IF
   END IF
 END IF
 ERASE recarr$
END SUB

SUB Ddemo
 LOCAL dirinfo$,doserror
 dirinfo$ = SPACE$(43)
 CALL Openwin(1,1,24,80,attr(7,1),attr(7,1),0,0,0,0)
 PRINT
 PRINT
 PRINT
 PRINT "      The following is a sampling of the DOS functions available"
 PRINT "      in PW201.  For a better understanding of how to use the"
 PRINT "      information returned by these functions consult any of the"
 PRINT "      reference books on DOS interrupts.  You must have a good"
 PRINT "      understanding of DOS interrupts to take full advantage of"
 PRINT "      these utilities."
 CALL Continue
 CALL Clearwin
 LOCATE 1,1
 PRINT " THE DEFAULT DRIVE IS "Curdrive$
 PRINT
 PRINT " THEN CURRENT DIRECTORY PATH IS "Curdir$
 PRINT
 PRINT " FILES IN THIS DIRECTORY ARE:"
 PRINT
 CALL Findfirst("*.*"+CHR$(0),&H20,dirinfo$,doserror)
 PRINT Falign$(EXTRACT$(MID$(dirinfo$,31,12),CHR$(0)))"  ";
 WHILE doserror = 0
   CALL Findnext(dirinfo$,doserror)
   PRINT Falign$(EXTRACT$(MID$(dirinfo$,31,12),CHR$(0)))"  ";
 WEND
 PRINT
 PRINT
 PRINT " THE CURRENT DOS VERSION IS "Dosversion$
 PRINT USING " CURRENT DISK SIZE    ###,###,###";Disksize&(0)
 PRINT USING " DISK SPACE AVAILABLE ###,###,###";Diskfree&(0)
 PRINT USING " CONV MEMORY SIZE         ###,###";Maxmem&
 PRINT USING " AVAILABLE MEMORY         ###,###";FRE(-1)
 CALL Continue
 CALL Closewin
END SUB

SUB Idemo
 LOCAL wfield,done,info$(),loandata$()
 DIM info$(3)
 info$(1) = "R0010221092"
 info$(2) = "R0020324062"
 info$(3) = "I0030426040"
 DIM loandata$(3)
 CALL Openwin(5,7,14,32,attr(0,3),attr(0,3),2,8,1,0)
 CALL Titlewin(2,attr(15,3),"[ Payment Calculator ]")
 CALL Titlewin(5,attr(15,3),"[ Esc - Exit ]")
 CALL Printwin(2,2,"Principal Amount:")
 CALL Printwin(3,2,"   Interest Rate:")
 CALL Printwin(4,2," No. of Payments:")
 CALL Printwin(5,2,"         Payment:")
 CALL Printcwin(7, "F1 - Help             ")
 CALL Printcwin(8, "F2 - Calculate Payment")
 CALL Printcwin(9, "F5 - Pop-up Calculator")
 done = 0
 wfield = 1
 WHILE NOT done
   IF amount## = 0 THEN loandata$(1) = "" ELSE loandata$(1) = STR$(amount##)
   IF rate## = 0 THEN loandata$(2) = "" ELSE loandata$(2) = STR$(rate##)
   IF month = 0 THEN loandata$(3) = "" ELSE loandata$(3) = STR$(month)
   DO
     CALL Getrec(info$(),loandata$(),3,returncode,wfield,-1,attr(3,0),attr(0,3))
   LOOP UNTIL INSTR(CHR$(0)+CHR$(59)+CHR$(60)+CHR$(63),CHR$(returncode))
   amount## = VAL(loandata$(1))
   rate## = VAL(loandata$(2))
   month = VAL(loandata$(3))
   SELECT CASE returncode
   CASE 0   : done = -1
   CASE 59  : CALL Help.Message(wfield)
   CASE 60  : CALL Compute.Payment(amount##,rate##,month)
   CASE 63  : CALL Calculator(5,49,attr(15,5),1)
   END SELECT
 WEND
 CALL Closewin
END SUB

SUB Errmsg(what)
 CALL Openwin(13,44,5,32,attr(15,4),attr(15,4),1,8,1,0)
 SELECT CASE what
 CASE 3
   CALL Printcwin(1,"YOU MUST PROVIDE INPUT")
   CALL Printcwin(2,"FOR ALL THREE FIELDS")
   CALL Printcwin(3,"Press any key to continue ")
 END SELECT
 CALL Getkey(ch1$,ch2$)
 CALL Closewin
END SUB

FUNCTION Frac##(num##)
 Frac## = num## - INT(num##)
END FUNCTION

FUNCTION Powerof## (number##, power)
 Powerof## = EXP10(power * LOG10(number##))
END FUNCTION

SUB Compute.Payment(amt##,rt##,mo)
 LOCAL hold##
 IF (amt## > 0.0) AND (mo > 0) AND (rt## > 0.0) THEN
   hold## = powerof##(1.0 + rt## / 1200.0, mo)
   payment## = ((rt## / 1200.0) * hold## * amt##) / (hold## - 1.0)
   payment## = payment## + 0.005
   hold## = frac##(payment## * 100.0)
   payment## = ((payment## * 100.0)-hold##)/100.0
   CALL Windowxy(5,21)
   print using "######.##";payment##;
 ELSE
   CALL Errmsg(3)
 END IF
END SUB

SUB Help.Message(what)
 CALL Openwin(6+what,38,8,36,attr(0,2),attr(0,2),2,8,1,0)
 CALL Sprint(6+what,38,CHR$(17),attr(0,2))
 SELECT CASE what
 CASE 1
   CALL Titlewin(2,attr(15,2),"[ Principal Amount ]")
   CALL Printwin(1,2,"Enter the amount of the loan you")
   CALL Printwin(2,2,"wish to calulate.  The format is")
   CALL Printwin(3,2,"######.##.  Do not enter a")
   CALL Printwin(4,2,"negative number.")
 CASE 2
   CALL Titlewin(2,attr(15,2),"[ Interest Rate ]")
   CALL Printwin(1,2,"Enter the interest rate for the")
   CALL Printwin(2,2,"the loan you wish to calculate.")
   CALL Printwin(3,2,"The format is ##.##.  Where 11%")
   CALL Printwin(4,2,"would be entered as 11.00.  Do")
   CALL Printwin(5,2,"not enter a negative number.")
 CASE 3
   CALL Titlewin(2,attr(15,2),"[ No. of Payments ]")
   CALL Printwin(1,2,"Enter the number of payments for")
   CALL Printwin(2,2,"the loan you wish to calulate.")
   CALL Printwin(3,2,"The format is ####.  Enter the")
   CALL Printwin(4,2,"actual number of payments not the")
   CALL Printwin(5,2,"number of years.  Do not enter a")
   CALL Printwin(6,2,"negative number.")
  END SELECT
  CALL Titlewin(5,attr(15,2)," Press any key to continue ")
  CALL Getkey(ch1$,ch2$)
  CALL Closewin
END SUB

 ' ********** END OF PROGRAM **********
```

## DOSPOOL.BAS

```bas
$link "dospool.obj"

' ----------------------------------------------------------------------------

declare function spool%(integer,string)

' integer = 0 - Status check
'	    1 - Submit file
'	    2 - Remove file
'	    3 - Cancel all files
'	    4 - hold printing
'	    5 - resume printing

' string  = if integer is 0,3,4,5 - null string
'         = if integer is 1 - packet
'         = if integer is 2 - asciiz file name
' ----------------------------------------------------------------------------
' Demonstration of STATUS

cls

a% = spool%(0," ")

select case a%
  case = 0
    print "PRINT not installed.  Installing....."

'***
' In order for this to work, PRINT must be in a directory included in
' your path, or in the current directory.
'***

    shell "PRINT /D:PRN > NUL:"
    a% = 255
  case = 1
    print "PRINT not installed.  NOT Ok to install."
  case = 255
    print "PRINT installed."
  case else
    print "Unknown Status."
end select

' ----------------------------------------------------------------------------
' Demonstration of SUBMIT

if a% = 255 then
  print
  input "Enter file to spool : ";filname$
  if filname$ <> null$ then

' ***
'   The following two lines build the packet as required by PRINT
' ***

    filname$ = ucase$(filname$) + chr$(0)
    packet$ = chr$(0) + mki$(strptr(filname$)) + mki$(strseg(filname$))

    a% = spool%(1,packet$)
    print "Result of Submit is: ";a%;" - ";
    select case a%
      case = 0
	print "No Error."
      case = 1
	print "Function Invalid."
      case = 2
	print "File not found."
      case = 3
	print "Path not found."
      case = 4
	print "Too many open files."
      case = 5
	print "Access denied."
      case = 8
	print "Queue full."
      case = 9
	print "Spooler busy."
      case = 12
	print "Name too long."
      case = 15
	print "Drive invalid."
      case else
	print "Unknown error."
    end select
  end if
end if

' ----------------------------------------------------------------------------
' Demonstration of REMOVE

print
input "Enter a filename to remove from the queue {return = none}: ";xfile$
if xfile$ <> null$ then

'***
' Make sure the filename ends with a chr$(0) !
'***

  xfile$ = ucase$(xfile$) + chr$(0)

  a% = spool%(2,xfile$)
  print "Result of Remove: ";a%;" - ";
  select case a%
    case = 0
      print "No Error."
    case = 1
      print "Function Invalid."
    case = 2
      print "File not found."
    case = 3
      print "Path not found."
    case = 4
      print "Too many open files."
    case = 5
      print "Access denied."
    case = 8
      print "Queue full."
    case = 9
      print "Spooler busy."
    case = 12
      print "Name too long."
    case = 15
      print "Drive invalid."
    case else
      print "Unknown error."
    end select
end if

' ----------------------------------------------------------------------------
' Demonstration of CANCEL

print
input "Do you want to cancel all the files in the spooler? {Y/N}: ";can$
if ucase$(can$) = "Y" then
  a% = spool%(3," ")
  print
  print "Result of Cancel: ";a%
end if

' ----------------------------------------------------------------------------
' Demonstration of HOLD

print
print "Holding Print ......  Press any key to resume."

a% = spool%(4," ")

while inkey$ = null$ : wend

' ----------------------------------------------------------------------------
' Demonstration of RESUME

b% = spool%(5," ")
print
print "Result of Hold:   ";a%
print "Result of Resume: ";b%

stop
```

## TODAY.BAS

```bas

$LINK "Todayu.pbu"
 PUBLIC WK$,Month$,Dm$,Year$   'these variable MUST be made PUBLIC
			       'or the complier will complain about
			       'unresolved externals in the pbu.
 ' The following is the demo:

 CALL GetTodaysDate
 PRINT "Today is "WK$" "Month$ Dm$","Year$
```

## TODAYU.BAS

```bas
$compile UNIT
'(C) 1987-90 Barry Erick
' Other than this being a UNIT, there are no differences from the
' TB version
'any External MUST be made PUBLIC in the Main unit, even if not used
'Always let the user know what the variables are if the unit is supplied
'without a demo main
EXTERNAL wk$,dm$,month$,year$

SUB GetTodaysdate PUBLIC     'make it accessable to the main
 local wkdy%,Dat%,Mont%,yea%
 REG 1,&H2A00
 CALL INTERRUPT &H21
 wkdy%= REG(1) MOD 256    'AH
 Dat% = REG(4) MOD 256    'DH
 Mont%= REG(4)\256        'DL
 yea% = REG(3)            'CX
 SELECT CASE wkdy%
        CASE 0
             WK$ = "Sunday"
        CASE 1
             WK$ = "Monday"
        CASE 2
             WK$ = "Tuesday"
        CASE 3
             WK$ = "Wednesday"
        CASE 4
             WK$ = "Thursday"
        CASE 5
             WK$ = "Friday"
        CASE 6
             WK$ = "Saturday"
 END SELECT
 SELECT CASE dat%
        CASE 1,21,31
             Dm$ = STR$(dat%)+"st"
        CASE 3,23
             Dm$ = STR$(dat%)+"rd"
        CASE 2,22
             Dm$ = STR$(dat%)+"nd"
        CASE ELSE
             Dm$ = STR$(dat%)+"th"
 END SELECT
 SELECT CASE Mont%
        CASE 1
             Month$ = "January"
        CASE 2
             Month$ = "February"
        CASE 3
             Month$ = "March"
        CASE 4
             Month$ = "April"
        CASE 5
             Month$ = "May"
        CASE 6
             Month$ = "June"
        CASE 7
             Month$ = "July"
        CASE 8
             Month$ = "August"
        CASE 9
             Month$ = "September"
        CASE 10
             Month$ = "October"
        CASE 11
             Month$ = "November"
        CASE 12
             Month$ = "December"
 END SELECT
 Year$ = RIGHT$(STR$(yea%),4)

END SUB
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2632

     Volume in drive A has no label
     Directory of A:\

    GRAPH2   ZIP     49484   9-21-90   2:23p
    GRAPH3   ZIP    107526   9-22-90   8:00p
    LIST     ZIP     19374  10-21-90  12:04a
    LISVAR   ZIP      4096   9-18-90  10:27a
    LJLBAR   ZIP      4239   9-18-90   8:31a
    MAKE2    ZIP      6868   9-30-90   2:30p
    PATCH1   ZIP     30464   9-18-90   8:41a
    PATCH2   ZIP      2048   9-18-90   8:21a
    PBPLUS   ZIP      4864   9-18-90   8:18a
    PTOUCH   ZIP      5174   9-18-90   8:28a
    PW200    ZIP     72960   9-18-90   8:38a
    PWRBAS   ZIP      3328   9-18-90   8:27a
    SPOOL    ZIP      2304   9-18-90   8:31a
    TB2PB    INF      1372   9-18-90   8:29a
    TODAY    ZIP     19456   9-18-90   8:43a
    TOOLFX   ZIP      3094   9-18-90   8:38a
    UPGRAD   INF       555   9-18-90   8:29a
    USING    FIX      2131   9-18-90   8:30a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT      1017   6-27-91   2:57p
           20 file(s)     340382 bytes
                           11264 bytes free
