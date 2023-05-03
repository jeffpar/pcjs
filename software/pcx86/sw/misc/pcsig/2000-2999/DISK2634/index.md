---
layout: page
title: "PC-SIG Diskette Library (Disk #2634)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2634/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2634"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## APL-QREF.BAS

{% raw %}
```bas

             QUICK REFERENCE FOR HB'S ALL-PURPOSE LIBRARY:

                         >>>>>>>>>>>>> in SETUP-H.BAS  <<<<<<<<<<<<<
DEFINT A-Z
 %False  %True
   %FLAGS = 0:  %AX = 1:  %BX = 2:  %CX = 3:  %DX = 4
      %SI = 5:  %DI = 6:  %BP = 7:  %DS = 8:  %ES = 9
 %Background = 16
 %Center = 0
 %Star10X = 1:  %StarNX1000 = 2:  %IBMX24 = 3:  %LQ2500 = 4 'Printer Codes
   %Blk = 0:     %Blu = 1:    %Grn = 2:    %Cyn = 3:    %Red = 4:     %Vlt = 5
   %Brn = 6:     %Gry = 7:    %DGry = 8:   %LBlu = 9:   %LGrn = 10:   %LCyn = 11
   %LRed = 12:   %Pnk = 13:   %Ylo = 14:   %Wht = 15:   %Flash = 256
 DIM FieldName$(20),FieldMask$(20),FL(20),FC(20)
 DIM ScreenStack$ ( 1 : %ScrnStackSize )
 ScrnStackSize = %ScrnStackSize

                           >>>>>>>>>>>>> in INIT-U.BAS  <<<<<<<<<<<<<
SUB Initialize (PrinterType) PUBLIC
InitPrt$ GraphicsChrSetOn$ GraphicsChrSetOff$ BoldPrtOn$ BoldPrtOff$
ItalicPrtOn$ ItalicPrtOff$ RegPrt$ FastPrt$ WidePrt$ BigPrtOn$ BigPrtOff$
LQPrt$ DraftPrt$ MicroPrtOn$ MicroPrtOff$ ElitePrt$ PicaPrt$ NeedDCon VideoSeg& = &HB800: CursorTop = 6: CursorBottom = 7
                            >>>>>>>>>>>>> in FENTRY-U.BAS  <<<<<<<<<<<<<
 %ReadRodent = 3
 %LeftButton = 1
 %RightButton = 2
 %MaxDecPlaces = 4
SUB ENTERSTRING (Wkg$,FLength,Opt$) PUBLIC
SUB ENTERNUMBER  (Wkg#, Masq$, Opt$) PUBLIC
SUB ENTERDATE  (A$, Opt$) PUBLIC
SUB RotaDate  (D$,Opt$) PUBLIC
SUB ENTERTIME  (A$, Opt$) PUBLIC
SUB ENTERSSN  (A$, Opt$) PUBLIC
SUB ENTERPHONE  (A$, Opt$) PUBLIC
SUB PressAKey PUBLIC
FUNCTION GetYesOrNo PUBLIC
SUB ENTERYESNO  (Yes) PUBLIC

                             >>>>>>>>>>>>> in BOXES-U.BAS  <<<<<<<<<<<<<
SUB BOXMESSAGE(CornerLin, CornerCol, Margin) PUBLIC
SUB BOXMESSAGE2 (CornerLin, CornerCol, Margin, I$(1), Items%, Maxx) PUBLIC
SUB POPWINDOW  PUBLIC
SUB PWSetUp (Fld$,Z) PUBLIC
SUB QBOX (L, C, Lines%, Message$, AnsFldLength) PUBLIC

                             >>>>>>>>>>>>> in MENUS-U.BAS  <<<<<<<<<<<<<
SUB TOPMENU (Lines% ,Choice, TLine$) PUBLIC
SUB POPMENU (TopKey$,MenuRight,MenuDown,Choice,MLine$,MCode$) PUBLIC
SUB SUPERMENU (MenuData$$ (), MenuRight, MenuDown, Choice, Title$, Ky%) PUBLIC


'   ====
' Notes:                    *** HOW TO USE MENU ***
'                               ===================
'
'        MENU SETUP: THE MenuData$$ ARRAY:
'           Each choice on your menu is represented by one string element in
'           this array. The decription of each choice -- for example, "LOAD",
'           will start with the third character of this string. If you are
'           specifying the hot-key for each choice put it into the first
'           character -- set MenuData$$ (1) as something like "L LOAD". To let
'           the software number or letter the items in order for you, set
'           MenuData$$ as just "  LOAD". (If there are <11 items, numbers
'           are used rather than letters.) After the last menu item, you
'           must set the next array element as "END".
'        PASSING HELP LINES TO MENU: Set MenuHelpLine$() to contain lines (up
'           to 80 chr long) to appear at screen bottom whenever the
'           corresponding menu choice is highlighted.
'        POSITION OF MENU ONSCREEN ETC.: MenuRight moves it right or left -- 0
'           is top center. MenuDown moves it -- you guessed it! Errors will be
'           trapped. Vertical centering is gotten by setting MenuDown = 25.
'           Usually set Choice = 1.  Title$ is title of menu.

' *** AFTER MENU ROUTINE: Choice will hold the choice #. Title$ reset to "".
'           MKeyPressed$ if the actual key used (if mouse was used it
'           simulates the CR key, i.e. CHR$(13)) -- or if [ESC] or a legal
'           function key was pressed it contains "ESC", "PgDn", "PgUp", "F1",
'           or "F2".

                             >>>>>>>>>>>>> in FIGDAT-U.BAS  <<<<<<<<<<<<<

 FUNCTION FigDate&(A$) PUBLIC
 FUNCTION WriteDate$ (W&) PUBLIC
 FUNCTION WkDay$(W&) PUBLIC
 FUNCTION YearsSince (D0$) PUBLIC
 FUNCTION FlipDate$ (WrittenDate$) PUBLIC
 FUNCTION UnflipDate$ (FlippedDate$) PUBLIC

                             >>>>>>>>>>>>> in MISC-U.BAS  <<<<<<<<<<<<<

SUB SCREENPUSH PUBLIC
SUB SCREENPOP PUBLIC
SUB RestoreDOSScreen PUBLIC
SUB PRINTLINE (L$) PUBLIC
SUB FileFunctions (MenuRight, MenuDown, Choice$) PUBLIC
FUNCTION IsBlank (W$) PUBLIC
FUNCTION GetAttr PUBLIC
FUNCTION IsRodent PUBLIC    ' finds if you have a rodent and also resets it
SUB Mouse(MV1, MV2, MV3, MV4) PUBLIC
FUNCTION GetCurrentDrive$ PUBLIC
FUNCTION GetCurrentDir$ PUBLIC
FUNCTION GetFreeSpace! (Drv$) PUBLIC
FUNCTION ReadParamFor (A$) PUBLIC ' this reads parameters from the command tail
SUB ClearLine PUBLIC
SUB DirFirst (F$, FileSize&, DateCode&, TimeCode&) PUBLIC
SUB DirNext (F$, FileSize&, DateCode&, TimeCode&) PUBLIC
FUNCTION DecodeDate$ (DateCode&) PUBLIC
FUNCTION DecodeTime$ (TimeCode&) PUBLIC


```
{% endraw %}

## BOXES-U.BAS

{% raw %}
```bas



'==============================================================================
'                    THE FOURTH UNIT -- BOXES-U.BAS
'==============================================================================
'                                                               -- 2-18-90
                            $COMPILE UNIT
                            $ERROR ALL OFF


 DEFINT A-Z

 EXTERNAL RD$, ColorDisplay, NeedDCon
 EXTERNAL BoxColor, FldColor, WinColor, CursorTop, CursorBottom, Ln, Col
 EXTERNAL PressAKeyBeep$, OopsBeep$, TinyBeep$
 EXTERNAL LocalAreaCode$, Record%
 EXTERNAL BXScreenSaved, PMScreenSaved
 EXTERNAL FieldName$(), FieldMask$(), FL(), FC(), Fields%

SUB BOXMESSAGE(CornerLin, CornerCol, Margin) PUBLIC
'   ====                   Boxes and displays your message.
'                          Top L. corner will be at the designated coordinates,
'                          but errors are trapped so box will stay on the
'                          screen regardless. The message line should appear
'                          in your code as DATA statements, terminated by
'                          "END". A RESTORE statement is needed, of course.
'                          See HBDEMO.BAS for examples & comments.

 LOCAL I$(), Maxx, Items%, D$

  LOCATE ,,0 '                                           extinguish the cursor
BReadlines:
 DIM I$(23)                      ' each I$ is a msg line; # of lines is Items%
 READ D$
 WHILE D$ <> "END" AND Items% < 23 '                          (from data list)
   INCR Items% '                                                 count 1 item
   I$(Items%) = D$ '                                   plug the data into array
   IF LEN(D$) > Maxx THEN Maxx = LEN(D$)  '         Maxx = length of longest I$()
   READ D$ '                                                    ... and repeat.
   WEND

          CALL BOXMESSAGE2 (CornerLin, CornerCol, Margin, I$(), Items%, Maxx)

 END SUB                                                         REM BOXMESSAGE
'______________________________________________________________________________

SUB BOXMESSAGE2 (CornerLin, CornerCol, Margin, I$(1), Items%, Maxx) PUBLIC
' Use this call if you wish to set text lines -- I$() -- at runtime instead
'  of using DATA statements ...

 LOCAL Wid, Height, I, P, Y, Z, F, Bar$

BSetVars:
 Wid = Maxx + 4 + 4*Margin '                                  compute box size --
 Height = Items%+2 + 2*Margin
 IF Wid > 80 THEN Wid = 80
 IF Height > 24 THEN Height = 24

 IF CornerCol = 0 THEN CornerCol = 41 - Wid \ 2
 CornerCol = ABS(CornerCol): IF CornerCol > 80-Wid THEN CornerCol = 80-Wid

 IF CornerLin = 0 THEN CornerLin = 13 - Height \ 2
 CornerLin = ABS(CornerLin):IF CornerLin > 25-Height THEN CornerLin = 25-Height
'                                             error traps keep box on screen

 Bar$ = "\"+SPACE$(Wid-4)+"\" '                                 set a line mask

BPrint:

 LOCATE CornerLin, CornerCol
 I = BoxColor MOD 16
 P = BoxColor \ 16 '                 set local variables for colors and
 IF P > 7 THEN
   DECR P, 8: F = 16 '   if box is to flash, set I as nonflashing
   BoxColor = BoxColor - %Flash
 END IF
 COLOR  I + F ,  P
 '                                                                print top bar
 PRINT CHR$(201);: PRINT STRING$((Wid-2),205);: PRINT CHR$(187);
 Z = CornerLin+1

IF Margin > 0 THEN
  FOR Y = 1 TO Margin
    LOCATE Z ,CornerCol
    COLOR  I + F ,  P : PRINT CHR$(186);: COLOR  I , P
    PRINT USING Bar$;" ";
    COLOR  I + F ,  P : PRINT CHR$(186);: COLOR  I , P
    INCR Z
  NEXT
END IF
 '
                                      ' print message lines
 FOR Y = 1 TO Items%
   LOCATE Z,CornerCol
   COLOR  I + F ,  P : PRINT CHR$(186);: COLOR  I , P '  print border char.
   PRINT USING BAR$;SPACE$(2*Margin+(Maxx-Len(I$(Y)))/2+.9)+I$(Y);
'          count off enough spaces to center the characters then print 'em ...
   COLOR  I + F ,  P : PRINT CHR$(186); '    and print right hand border.
   INCR Z
 NEXT

 IF Margin THEN '                print appropriate # of blank lines for margin
   FOR Y = 1 TO Margin
    LOCATE Z,CornerCol
    COLOR  I + F ,  P : PRINT CHR$(186);: COLOR  I , P
    PRINT USING Bar$;" ";
    INCR Z
    COLOR  I + F ,  P : PRINT CHR$(186);
   NEXT
 END IF
 '                                                             print bottom bar
 LOCATE Z,CornerCol,1:PRINT CHR$(200);:PRINT STRING$((Wid-2),205);
   PRINT CHR$(188);
 COLOR  I ,  P


 END SUB                                                        REM BOXMESSAGE2

' =============================================================================


SUB POPWINDOW  PUBLIC                         ' print a data entry window ...
'                                                and set up its lookup table

 LOCAL X, Y, Z, Title$, CornerCol, CornerLin, Prompt$, Ht, A$
 COLOR WinColor MOD 16, WinColor \ 16
 READ A$: Wid = VAL(A$)
 READ A$: CornerLin = VAL(A$)
 READ A$: CornerCol = VAL(A$)
 READ A$: Ht = VAL(A$)
'                                                       print top of window ...
 LOCATE CornerLin, CornerCol: PRINT CHR$(201);
                PRINT STRING$((Wid-2),205);: PRINT CHR$(187);

 FOR Z = CornerLin+1 TO CornerLin+Ht-2 '                              sides ...
    LOCATE Z, CornerCol: PRINT CHR$(186);SPACE$(Wid-2); CHR$(186);
 NEXT Z
 '                                                  ... print bottom bar.
 LOCATE Z, CornerCol:PRINT CHR$(200);
                PRINT STRING$((Wid-2),205);: PRINT CHR$(188);

  READ Prompt$, X, Y '               place prompts in window (you hope ...)
 DO
  LOCATE X, Y: PRINT Prompt$
  READ Prompt$: IF Prompt$ <> "END" THEN READ X, Y
 LOOP UNTIL Prompt$ = "END"

 COLOR FldColor MOD 16, FldColor \ 16

 Z=1

 READ FieldName$(Z),FieldMask$(Z),FL(Z),FC(Z) '      create the table for
'                                                      this record data window
 DO
   LOCATE FL(Z),FC(Z)
   PRINT SPACE$ (LEN(FieldMask$(Z))) '                 print a blank field ...
  INCR Z
  READ FieldName$(Z)
  IF FieldName$(Z) <> "END" THEN READ FieldMask$(Z), FL(Z), FC(Z)
 LOOP UNTIL FieldName$(Z) = "END"


 Fields% = Z-1

 END SUB

' ----------------------------------------------------------------------------


SUB PWSetUp (Fld$,Z) PUBLIC    ' sets up to ENTER a record field at the right
'                         location in a pop-up data record window using the
'                         lookup table (FieldName$() etc.). When a match is
'                         found the cursor is placed. The subscript # used
'                         is returned as the parameter Z.

 Z = 1

 DO UNTIL FieldName$(Z) = Fld$                         'find fld name in table
  INCR Z
  IF Z > Fields% THEN
     BEEP
     LOCATE 25,1
     PRINT "            PWSetUp error: window for "+Fld$+" not open !!!          "
     DO: LOOP UNTIL INKEY$ <> ""
     END 1
  END IF
 LOOP

 LOCATE FL(Z), FC(Z)

 END SUB                                                REM PWSetUp

' =========================================================================
SUB QBOX (L, C, Lines%, Message$, AnsFldLength) PUBLIC

  LOCAL I$(), AFCol, AFLin, Items, Maxx
  DIM I$(4)

  IF Lines% > 1 THEN
    IF C = %Center THEN C = 80 - (LEN (Message$) - AnsFldength - 4) / 2
    I$(1) = Message$
    Items% = 3
    I$(2) = " "
    I$(3) = " "
    AFCol = C + 2
    IF LEN (Message$) > AnsFldLength THEN _
      INCR AFCol, (LEN(Message$)-AnsFldLength)/2
    AFLin = L+3
    Maxx = LEN(Message$)
    IF AnsFldLength > Maxx THEN Maxx = AnsFldLength
  ELSE
    IF C = %Center THEN C = (76 - LEN (Message$)) / 2
    I$(1) = Message$+SPACE$(AnsFldLength)
    Items% = 1
    AFCol = C + 2 + LEN (Message$)  '  or 6
    AFLin = L+1
    Maxx = LEN(Message$)+AnsFldLength
  END IF
  CALL BOXMESSAGE2 (L,C,0,I$(),Items%,Maxx)
  LOCATE AFLin,AFCol,1
  END SUB

    '  with L & C set correctly for and ENTER call -- Wowee !!!

```
{% endraw %}

## COLORSET.BAS

{% raw %}
```bas

 DEFINT A-Z
 CLS
 ScrColor = &H02
 BoxColor = &H4E

 LOCATE ,,0

'   Code to write Static Window {colorset} to Screen
'        note: created by StatWindow Writer (SWW) from colorset.SW

 COLOR BoxColor MOD 16, BoxColor \ 16
 LOCATE  3, 5
 PRINT "┌───────────────────────────────────────────────────────────────────┐"
 LOCATE  4, 5
 PRINT "│                                                                   │";
 LOCATE  5, 5
 PRINT "│     COLORSET is a part of the HB All-Purpose library for Power    │";
 LOCATE  6, 5
 PRINT "│     Basic programming. One of the features included is making     │";
 LOCATE  7, 5
 PRINT "│     your PB programs color-customizable by the end user.          │";
 LOCATE  8, 5
 PRINT "│     COLORSET.BAS, once compiled,  automates the process of        │";
 LOCATE  9, 5
 PRINT "│     writing command line switches to reset the colors of the      │";
 LOCATE  10, 5
 PRINT "│     Demo (or any PB program that uses the SetColors routine).     │";
 LOCATE  11, 5
 PRINT "│     Start it and follow directions! The program will end up       │";
 LOCATE  12, 5
 PRINT "│     writing a batch file (name is entered at runtime) to start    │";
 LOCATE  13, 5
 PRINT "│     a PB exe file (likewise) in the colors chosen onscreen.       │";
 LOCATE  14, 5
 PRINT "│                                                                   │";
 LOCATE  15, 5
 PRINT "│         (Thanks to Barry Erick of Spectra support for giving his  │";
 LOCATE  16, 5
 PRINT "│     OK to recycle his elegant color selector procedure as the     │";
 LOCATE  17, 5
 PRINT "│     kernel of COLORSET.)                                          │";
 LOCATE  18, 5
 PRINT "│                                             -- Howard Ballinger   │";
 LOCATE  19, 5
 PRINT "│                                                    9-8-90         │";
 LOCATE  20, 5
 PRINT "│      PRESS ANY KEY                                                │";
 LOCATE  21, 5
 PRINT "│      [Esc] to Quit                                                │";
 LOCATE  22, 5
 PRINT "└───────────────────────────────────────────────────────────────────┘";

'  09-08-1990, 11:13:   end of StatWindow generated code for window {colorset}

 COLOR ScrColor MOD 16, ScrColor \ 16
 DO: K$ = INKEY$: LOOP UNTIL K$ <> ""
 IF K$ = CHR$ (27) THEN PRINT: PRINT: PRINT "OK, Ending Here.": STOP

 ScrColor = &H02
 WinColor = &H71
 FldColor = &H2F
 MenuColor = &H03
 BarColor = &H1F
 BoxColor = &H3A

Start:
 COLOR ScrColor MOD 16, ScrColor \ 16
 CLS: LOCATE 12,5: PRINT "THIS IS THE SCREEN BACKGROUND COLOR"
 LOCATE 2,20: PRINT "COLOR SELECT FOR HB / POWER BASIC PROGRAMS"
 LOCATE 3,21: PRINT "========================================"

 LOCATE 19,25: PRINT "╔══════╗
 LOCATE 20,25: PRINT "║BUTTON║
 LOCATE 21,25: PRINT "╚══════╝

 COLOR MenuColor MOD 16, MenuColor \ 16
 LOCATE 14,3: PRINT "╔═ sample menu ═╗"
 LOCATE 15,3: PRINT "║ 1 - Machaut   ║"
 LOCATE 16,3: PRINT "║ 2 - Lassus    ║"
 LOCATE 17,3: PRINT "║ 3 - Des Prez  ║"
 LOCATE 18,3: PRINT "║ 4 - Palestrina║"
 LOCATE 19,3: PRINT "║ 5 - Holborne  ║"
 LOCATE 20,3: PRINT "║ 6 - Tallis    ║"
 LOCATE 21,3: PRINT "╚═══════════════╝"


 COLOR BarColor MOD 16, BarColor \ 16
 LOCATE 15,4: PRINT " 1 - Machaut   "

 COLOR WinColor MOD 16, WinColor \ 16
 LOCATE 14,37: PRINT "╔═══════════════════════════════════╗
 LOCATE 15,37: PRINT "║     SAMPLE DATA ENTRY WINDOW      ║
 LOCATE 16,37: PRINT "║                                   ║
 LOCATE 17,37: PRINT "║  Year: 1610    Form: Gaillard     ║
 LOCATE 18,37: PRINT "╚═══════════════════════════════════╝

 COLOR FldColor MOD 16, FldColor \ 16
 LOCATE 17, 46: PRINT "1610"
 LOCATE 17, 60: PRINT "Gaillard   "

 COLOR BoxColor MOD 16, BoxColor \ 16
 LOCATE 20,48: PRINT "╔═════════════════════╗
 LOCATE 21,48: PRINT "║ SAMPLE MESSAGE BOX  ║
 LOCATE 22,48: PRINT "╚═════════════════════╝


 LOCATE 24,1
 COLOR 15,0
 PRINT "  1: Menu / 2: Menu Select Bar / 3: Window / 4: Data Fields in Window        ";
 LOCATE 25,1
 PRINT "     5: Message-Dialog Boxes / 6: Screen Background & Buttons / [Esc]: QUIT   ";

 LOCATE 23,1,1: COLOR 14,0: PRINT "Which color do you want to set ? ";
 DO
   Choice$ = INKEY$
   IF Choice$ = "" THEN Choice$ = "0"
 LOOP UNTIL (INSTR ("123456", Choice$) >  0) OR Choice$ = CHR$(27)

 LOCATE 23,1,0: PRINT "                                       "
 LOCATE 24,1: PRINT SPACE$ (79);
 LOCATE 25,1: PRINT SPACE$ (79);
 SELECT CASE Choice$
   CASE "1"
      LOCATE 24,10: COLOR 31,0: PRINT "SELECT YOUR MENU COLOR";
      F = MenuColor MOD 16: B = MenuColor \ 16
      GOSUB GetChoice
      MenuColor = F + 16*B
      EXIT SELECT
   CASE "2"
      LOCATE 24,10: COLOR 31,0: PRINT "SELECT YOUR MENU SELECTION BAR COLOR";
      F = BarColor MOD 16: B = BarColor \ 16
      GOSUB GetChoice
      BarColor = F + 16*B
      EXIT SELECT
   CASE "3"
      LOCATE 24,10: COLOR 31,0: PRINT "SELECT YOUR DATA ENTRY WINDOW COLOR";
      F = WinColor MOD 16: B = WinColor \ 16
      GOSUB GetChoice
      WinColor = F + 16*B
      EXIT SELECT
   CASE "4"
      LOCATE 24,10: COLOR 31,0: PRINT "SELECT YOUR DATA ENTRY FIELD COLOR";
      F = FldColor MOD 16: B = FldColor \ 16
      GOSUB GetChoice
      FldColor = F + 16*B
      EXIT SELECT
   CASE "5"
      LOCATE 24,10: COLOR 31,0: PRINT "SELECT YOUR MESSAGE / DIALOG BOX COLOR";
      F = BoxColor MOD 16: B = BoxColor \ 16
      GOSUB GetChoice
      BoxColor = F + 16*B
      EXIT SELECT
   CASE "6"
      LOCATE 24,10: COLOR 31,0
      PRINT "SELECT YOUR OVERALL SCREEN & BUTTON COLOR";
      F = ScrColor MOD 16: B = ScrColor \ 16
      GOSUB GetChoice
      ScrColor = F + 16*B
      EXIT SELECT
   CASE CHR$ (27)
      LOCATE 5,1
      L$ = "ScrC="+FnHEX2$ (ScrColor)+_
       " MnuC="+FnHEX2$ (MenuColor)+_
       " BarC="+FnHEX2$ (BarColor)+_
       " WinC="+FnHEX2$ (WinColor)+_
       " FldC="+ FnHEX2$ (FldColor)+_
       " BoxC="+FnHEX2$ (BoxColor)
      PRINT "the parameter string is: ";L$
      COLOR ScrColor MOD 16, ScrColor \ 16
PrepareBatFile:
      LOCATE 6,1
      PRINT "  IF YOU WANT TO CREATE A BATCH FILE, ENTER ITS NAME (no ext) "
      INPUT "      (TO SKIP, JUST PRESS [ENTER]). FileName ";BatName$
      IF BatName$ <> "" THEN
        P = INSTR (BatName$, ".")
        IF P THEN BatName$ = LEFT$ (BatName$, P-1)
        BatName$ = UCASE$ (LEFT$ (BatName$, 8))
        LOCATE 8,1
        PRINT "  NAME OF POWER-BASIC EXE PROGRAM TO BE STARTED IN NEW COLORS"
        PRINT "    BY THE BATCH FILE ";BatName$ + ".BAT ?? (no ext) ";
        INPUT ExeName$
        P = INSTR (ExeName$, ".")
        IF P THEN ExeName$ = LEFT$ (ExeName$, P-1)
        ExeName$ = LEFT$ (ExeName$, 8)
        IF ExeName$ = BatName$ THEN
          LOCATE 8,10
          PRINT "THE FILE NAMES CAN'T BE THE SAME ";
          PRINT "OR DOS WON'T KNOW WHICH ONE TO START !"
          PLAY "O0 C4": DO: LOOP UNTIL INKEY$ <> ""
          GOTO Start
        END IF
        ON ERROR GOTO Oops
        OPEN BatName$ + ".BAT" FOR OUTPUT AS #1
        PRINT #1, "echo off"
        PRINT #1, ExeName$ + " " + L$
        PRINT #1, ":   this batch file created by SETCOLOR.BAS to run " + ExeName$
        CLOSE #1
        ON ERROR GOTO 0
        LOCATE 10,20: PRINT "FILE CREATED"
      END IF
      LOCATE 25,79
      STOP

 END SELECT

 GOTO Start

DEF FnHEX2$ (N)
 IF N < &H10 THEN FnHEX2$ = "0" + HEX$(N) ELSE FnHEX2$ = HEX$ (N)
END DEF
'      __________________________________________________________

GetChoice:
 DO
   IF F = B OR (F = 8 AND B = 0) THEN INCR F
   COLOR 15,0
   CALL GetUserColorChoice (F,B)
   COLOR F, B: LOCATE 16,20: PRINT F,B
   IF F = B OR (F = 8 AND B = 0) THEN
     LOCATE 11,10: COLOR 15,1: PLAY "O3 MS B16 G16"
     PRINT " OOPS! Your combination,";F;"&";B;", is INVISIBLE. Try again ... "
   ELSE
     LOCATE 12,10: COLOR 0,0: PRINT SPACE$ (65)
   END IF
 LOOP WHILE F = B OR (F = 8 AND B = 0)
 RETURN

SUB GetUserColorChoice(Fore%,Back%)
'                                     (c) 1988 Barry Erick
'                                         used by presumption -- thanks
 FirstY% = 2   'MAX is 17 MIN is 2
 FirstX% = 3   'MAX is 16 MIN is 1
' CLS
 Fore% = Fore% MOD 17
 back% = back% MOD 9
 If Fore% <0 THEN Fore% = 0
 If Back% < 0 THEN Back% = 0
 FirstY% = FirstY% MOD 18
 IF FirstY%<2 THEN FirstY%=2
 FirstX% = FirstX% MOD 17
 IF FirstX%<1 THEN FirstX%=1
 Title$ = "Move with "+CHR$(24)+CHR$(25)+CHR$(26)+CHR$(27)+"; <Enter> Selects"
 Title$ = "BARRY'S COLOR CHART. " + Title$
 LOCATE FirstY%-1,(32-(LEN(Title$)/2))
 PRINT title$;
 LOCATE FirstY%,FirstX%
 FOR Y% = 0 TO 7
     FOR X% = 0 TO 15
         COLOR  X%,Y%
         PRINT " XX ";
     NEXT
     LOCATE CSRLIN+1,FirstX%
 NEXT
 UsersFirstX%=(Fore%*4)+FirstX%
 usersFirstY%=Back%+FirstY%
 LOCATE UsersFirstY%,UsersFirstX%
 Cline% = CSRLIN
 Ps%=POS
 Oldcline%=Cline%
 Oldps%=Ps%
 COLOR ((Ps%\4)-(FirstX%\4))+16,Cline%-FirstY%
 PRINT " XX ";

 DO
     WHILE NOT INSTAT:WEND
     A$=INKEY$
     IF LEN(A$)=1 THEN
        SELECT CASE A$
               CASE CHR$(13)
' this one
                    Fore%=(Oldps%\4)-(FirstX%\4)
                    Back%=Oldcline%-FirstY%
                    IF FirstY%>13 THEN
                       LOCATE 2,1
                    ELSE
                       LOCATE FirstY%+9,1
                    END IF
                    EXIT LOOP
        END SELECT
     ELSEIF LEN(A$)=2 THEN
        SELECT CASE ASC(RIGHT$(A$,1))
               CASE 72 'up arrow
                    IF CSRLIN >FirstY% THEN
                       DECR Cline%
                    END IF
               CASE 75 'left arrow
                    IF POS >FirstX%+4 THEN
                       DECR Ps%,4
                    END IF
               CASE 77 'right arrow
                    IF POS <FirstX%+61 THEN
                       INCR Ps%,4
                    END IF
               CASE 80 ' down arrow
                    IF CSRLIN < FirstY%+7 THEN
                       INCR Cline%
                    END IF
        END SELECT
     END IF
     LOCATE Oldcline%,Oldps%
     COLOR ((Oldps%\4)-(FirstX%\4)),Oldcline% -FirstY%
     PRINT " XX ";
     COLOR ((Ps%\4)-(FirstX%\4))+16,Cline%-FirstY%
     Oldcline% = Cline%
     Oldps%=Ps%
     LOCATE Cline%,Ps%
     PRINT  " XX ";
 LOOP

END SUB

Oops:
 LOCATE 8,1: PRINT "ERROR OPENING FILE ";BatName$
 PLAY "O0 C4": DO: LOOP UNTIL INKEY$ <> ""
 RESUME Start

```
{% endraw %}

## FENTRY-U.BAS

{% raw %}
```bas


'==============================================================================
'                    THE FIRST UNIT -- FENTRY.BAS
'==============================================================================
'                                                               -- 2-13-90
                            $COMPILE UNIT
                            $ERROR ALL OFF


 DEFINT A-Z

 %False = 0
 %True = NOT %False
 %ReadRodent = 3
 %LeftButton = 1
 %RightButton = 2
 %MaxDecPlaces = 4

 EXTERNAL RD$, ColorDisplay, NeedDCon
 EXTERNAL BoxColor, FldColor, WinColor, ScrColor
 EXTERNAL CursorTop, CursorBottom, Ln, Col
 EXTERNAL PressAKeyBeep$, OopsBeep$, TinyBeep$
 EXTERNAL LocalAreaCode$, Record%

 DECLARE FUNCTION FigDate& (STRING)
 DECLARE FUNCTION WriteDate$ (LONG)

 DECLARE SUB CloseFiles ()
 DECLARE SUB Mouse (INTEGER, INTEGER, INTEGER, INTEGER)
 DECLARE SUB BOXMESSAGE2 (INTEGER, INTEGER, INTEGER, STRING ARRAY,_
                                                           INTEGER, INTEGER)
 DECLARE SUB SCREENPUSH ()
 DECLARE SUB SCREENPOP ()



SUB ENTERSTRING (Wkg$,FLength,Opt$) PUBLIC

'   WHAT IS THIS ?? This routine provides a field right at the present cursor
'         location for the operator to enter something into (if it starts off
'         blank) or edit. Wkg$ is the current value of the field.  FLength =
'         length of field.
'
'         Opt$ may be "" or may hold the strings "Cap" for all uppercase,
'         "Auto" to automatically go on when the field is full, "UpOut" or
'         "BackOut" if UpArrow or Left/ backspace keys are to be able to end
'         entry; also may include "Ins" to start up in the insert mode, and/or
'         "-" if the minus sign is allowed to be entered.
'
'         Active keys also include:  ^Y to clear the line
'                                    ^T to delete one word (to right)
'                                    ^U to undo (restore original string)
'                                     Home, End, cursor rt/left,
'                                    ^cursor (jumps to beginning of a word)
'
'         If there is something in the field to begin with and the operator
'         starts typing something else, the field clears. If the cursor is
'         moved around first, that doesn't happen.
'
'         On exiting sub, Opt$ will be reset as "Left", "Auto", "Up", "Down",
'         "HELP!", "F2", "ESC" or "CR", "Tab" or "ShfTab" according to what
'         event terminated the entry
'         process. At any time during string entry the operator can press [CR] or
'         DOWN-ARROW to enter; [F2] can be pressed  (I use F2 for Database
'         Function commands  -- Clear, Find, Next/Prev, Save etc.) or F1 can also
'         be made active (for a help key) ...


  LOCAL Fpos, Masq$,Starting$, Numeric, Auto, Caps, UpOut, BackOut, K$,_
       NoNeg, InsertStatus, Z, NumKStrokes, StartWord, EndWord, Done


 Wkg$ = LEFT$ (Wkg$, FLength)
 Starting$ = Wkg$ '                                    save starting string --
  Ln = CSRLIN: Col = POS
'                                         Scan the Option String for Codes ...
'                                                and set flags accordingly
 Numeric = INSTR(Opt$,"Num")
 Auto = INSTR(Opt$,"Auto")
 Caps = INSTR(Opt$,"Cap")
 UpOut = INSTR(Opt$,"UpOut")
 BackOut = INSTR(Opt$,"BackOut")
 IF INSTR (Opt$, "-") = 0 THEN NoNeg = %True
 IF INSTR (Opt$, "Ins") THEN InsertStatus = %True

 IF FLength > 1 THEN
    Masq$ = "\"+SPACE$(FLength-2)+"\"
 ELSEIF FLength = 1 THEN
    Masq$ = "!"
 ELSE
    PRINT "SETUP ERROR -- STRING FIELD HAS LENGTH < 1 !!"
    Done = %True
 END IF

 FPos = 1

'                   ============ WRITE THE FIELD TO DISPLAY =============
 DO UNTIL Done

   LOCATE Ln, Col,0 '                                   print the string
   PRINT USING Masq$;Wkg$
'                                    now, if you already pressed Up or ShfTab,
'                                    we'll exit after printing restored line
   IF Opt$ = "Up" OR Opt$ = "ShfTab" THEN EXIT LOOP
'                      if "auto-CR" is on and we have reached the end, quit ...
   IF Auto AND FPos > FLength THEN Opt$ = "Auto": EXIT LOOP
'                     if there are trailing spaces, get rid of them
'                     unless the cursor is out to the right of the last chr ...
   IF FPos =< LEN(Wkg$) THEN Wkg$ = RTRIM$(Wkg$)

 '                 ================== SET CURSOR: ===========================

   IF ColorDisplay THEN
     LOCATE Ln,(Col+FPos-1),1,(6+2*InsertStatus),7
   ELSE
     LOCATE Ln,(Col+FPos-1),1,(11+4*InsertStatus),12
   END IF

   DO:LOOP UNTIL INSTAT '                   ****************************
   K$ = INKEY$  '                          **   RECEIVE KEYPRESS ...   **
 '                                          ****************************


   INCR NumKStrokes


   SELECT CASE K$

      CASE CHR$(0)+CHR$(&H48)
         GOSUB EUpArrow
         IF Done THEN EXIT LOOP

      CASE CHR$(0)+CHR$(&H4B)
         GOSUB ELeftArrow
         IF Done THEN EXIT LOOP

      CASE CHR$(0)+CHR$(&H4D)
         GOSUB ERightArrow
         IF Done THEN EXIT LOOP

      CASE CHR$(0)+CHR$(&H50)
         GOSUB EDownArrow
         IF Done THEN EXIT LOOP

      CASE CHR$(0)+CHR$(&H47)
         GOSUB EHomeKey

      CASE CHR$(0)+CHR$(&H4F)
         GOSUB EEndKey

      CASE CHR$(0)+CHR$(&H53)
         GOSUB EDelKey

      CASE CHR$(0)+CHR$(&H52)
         GOSUB EInsKey

      CASE CHR$(0)+CHR$(&H3B)
         GOSUB EF1Key
         IF Done THEN EXIT LOOP

      CASE CHR$(0)+CHR$(&H3C)
         GOSUB EF2Key
         IF Done THEN EXIT LOOP

      CASE CHR$(0)+CHR$(115)
         GOSUB ECtrlLeftKey

      CASE CHR$(0)+CHR$(116)
         GOSUB ECtrlRightKey

      CASE CHR$(13)                'you pressed [CR]: exit w/ resulting string
        Opt$ = "CR"
        EXIT LOOP

      CASE CHR$(8) '                                    You pressed [BACKSPACE].
         DECR FPos '                                    back up 1 space;
         IF FPos < 1 THEN '                                if cursor is trying
           IF BackOut THEN '                           to get out the left side
             Opt$ = "Left" '                             of the box and BackOut
             EXIT LOOP '                                  is on, then exit;
           ELSE
             FPos = 1 '  : GOTO ESetCursor (I'M ELIMINATING THE SKIPWRITE LABEL ...)
           END IF
         ELSE
           GOSUB EDelKey '                                 else delete character.
         END IF

      CASE CHR$(27)                    ' you pressed [ESC]: exit
         Opt$ = "ESC"
         EXIT LOOP

      CASE CHR$(9)                    ' you pressed [TAB]: exit
         Opt$ = "Tab"
         EXIT LOOP

      CASE CHR$(0) + CHR$(15)                    ' you pressed [ShfTAB]: exit
         Opt$ = "ShfTab"
         EXIT LOOP

      CASE CHR$(20)
         StartWord = FPos
         DO UNTIL MID$ (Wkg$,StartWord,1) = " " OR StartWord = 1
           DECR StartWord
         LOOP
         EndWord = FPos
         DO
           INCR EndWord
         LOOP UNTIL MID$ (Wkg$,EndWord,1) = " " OR EndWord > LEN(Wkg$)
         Wkg$ = LEFT$ (Wkg$, StartWord-1) + MID$ (Wkg$, EndWord)
         IF LEFT$(Wkg$,1) = " " THEN Wkg$ = MID$(Wkg$,2)
         FPos = StartWord

      CASE CHR$(25)   '                                      you pressed ^Y
         Wkg$ = ""
         FPos = 1

      CASE CHR$(21)   '                                      you pressed ^U
         Wkg$ = Starting$
         FPos = 1

 CASE ELSE '                                       some other key was pressed.

 IF ((LEN(Wkg$) < FLength) OR NOT InsertStatus)_
                       OR NumKStrokes = 1  THEN '  if field isn't full yet, or
'                                                  INS is off, or just starting
   IF  NumKStrokes = 1 THEN Wkg$ = ""
                               '  this zaps the old entry if you
        SELECT CASE ASC(K$) '                        start a new one ...
           CASE 1 TO 31, >126
             K$ = "": EXIT SELECT '                  eliminate invalid chrs ...
           CASE 32 TO 44, 47, >57
             IF Numeric THEN PLAY "O3 A64":K$ = "": EXIT SELECT
           CASE 45
             IF Numeric AND NoNeg THEN PLAY "O3 A64":K$ = "": EXIT SELECT
       END SELECT
       IF Caps THEN K$ = UCASE$(K$)
       IF FPos > LEN(Wkg$) THEN

             DO WHILE FPos-LEN(Wkg$) > 1: Wkg$ = Wkg$ + " ": LOOP
'                                                add spaces out to cursor pos.
             Wkg$=Wkg$+K$ '                             ...  and tack on K$

     ELSE
             Wkg$ = LEFT$(Wkg$,FPos-1)+K$+MID$(Wkg$,FPos+1+InsertStatus)
     END IF
    '                               the long line plugs K$ in -- the hard way!
     IF K$ <> "" THEN INCR FPos

   ELSE  '                            else,  the line is full and Auto is off

        PLAY "O0 A64"  '              so we ignore the keystroke & just Beep

   END IF

 END SELECT

 LOOP

'                           ***************** END OF MAIN LOOP

 LOCATE ,,1,CursorTop,CursorBottom
 EXIT SUB

ELeftArrow:
  IF FPos > 1 THEN
'                                      Wkg$ = RTRIM$(Wkg$)
    FPos = FPos - 1
  ELSE
    IF BackOut THEN
       Opt$ = "Left"
       Done = %True
    END IF
  END IF
  RETURN

ERightArrow:
  IF FPos < FLength THEN
    INCR FPos
  ELSEIF Auto THEN
    Opt$ = "Auto"
    Done = %True '                                 if Auto is on then exit
  END IF
  RETURN

EInsKey:
  IF InsertStatus = %False THEN
    InsertStatus = %True
  ELSE
    InsertStatus = %False
  END IF
  RETURN

EDelKey:
  IF FPos = 1 THEN Wkg$ = MID$(Wkg$,2): RETURN
  IF FPos > LEN(Wkg$) THEN
    DECR FPos
  ELSE
    Wkg$ = LEFT$(Wkg$,FPos-1) + MID$(Wkg$,FPos+1)
  END IF
  RETURN

EHomeKey:
  FPos = 1
  RETURN

EEndKey:
  FPos = LEN(Wkg$)+1
  RETURN

ECtrlLeftKey:
 IF FPos > 1 THEN DECR FPos
 DO UNTIL FPos = 1
   DECR FPos
 LOOP UNTIL MID$ (Wkg$,FPos,1) = " "
 IF FPos > 1 THEN INCR FPos
 RETURN

ECtrlRightKey:
 DO
   INCR FPos
 LOOP UNTIL MID$ (Wkg$,FPos,1) = " " OR FPos > LEN (Wkg$)
 INCR FPos
 FPos = MIN (FPos, LEN(Wkg$)+1)
 RETURN

EUpArrow:
  IF UpOut THEN
    Wkg$ = Starting$
    Opt$ = "Up"
  END IF
  RETURN

EDownArrow:
  Opt$ = "Down"
  Done = %True
  RETURN


EF1Key:
 IF INSTR (Opt$, "F1") THEN
   Opt$ = "HELP!"
   Done = %True
 END IF
 RETURN


EF2Key:
 IF INSTR (Opt$, "F2") THEN
   Opt$ = "F2"
   Done = %True
 END IF
 RETURN

 END SUB                                              REM: ENTERSTRING

' -------------------------------------------------------------------
SUB ENTERNUMBER  (Wkg#, Masq$, Opt$) PUBLIC '          note: Shell for
'                                                                ENTERSTRING
'   =======                This the routine to enter a number onscreen. It
'                          makes the value into a string if <> 0 and calculates
'                          the field length based on Masq$.  Opt$ is simply
'                          passed without much alteration to ENTERSTRING.

 LOCAL Wkg$, FLength, DecPlaces

 IF VERIFY (Masq$, "#.-$!") THEN
   COLOR %Wht, %Blk
   BEEP: PRINT "ENTERNUMBER: MASK STRING ERROR": EXIT SUB
 END IF

 IF INSTR (Masq$, ".") THEN
   DecPlaces = TALLY (MID$ (Masq$, INSTR (Masq$, ".")), "#")
 ELSE
   DecPlaces = 0
 END IF
 Wkg# = ROUNDOFF# (Wkg#, DecPlaces)

 Ln = CSRLIN: Col = POS
 FLength = LEN (Masq$)
 Opt$ = "Num" + Opt$

 IF Wkg# = 0 THEN
    Wkg$ = ""
 ELSE
    Wkg$ = LTRIM$ (STR$(Wkg#))'     set working $.
 END IF

 IF INSTR (Wkg$,".") THEN            '                strip trailing zeroes ...
   Wkg$ = LEFT$(Wkg$,INSTR(Wkg$,".")+4)
   Wkg$ = RTRIM$ (Wkg$, "0")
   Wkg$ = RTRIM$ (Wkg$, ".")
 END IF

'                       -----------------------------------

                        CALL ENTERSTRING(Wkg$,FLength,Opt$)

'                       -----------------------------------

 Wkg# = VAL(Wkg$) '                                              reset Wkg# ...
 Wkg# = ROUNDOFF# (Wkg#, DecPlaces)
 LOCATE Ln, Col: PRINT USING Masq$;Wkg# '                            print it
'         ...

END SUB                                                         REM ENTERNUMBER

' -------------------------------------------------------------------

SUB ENTERDATE  (A$, Opt$) PUBLIC

 LOCAL L,C
'                                           set up to use the formatted entry
EnterDate1: '                                routine ENTERBUNCHES with 3 blank
 L = CSRLIN: C = POS '                      fields to fill and 2 hyphens
 DATA 2,"-",2,"-",2,"END"
 RESTORE EnterDate1
 Opt$ = Opt$ + "Num"

   CALL ENTERBUNCHES(A$, Opt$)
'                                          now check the result for being a
'                                          valid date (FnFigDate& returns > 0)

 IF (Opt$ = "CR" OR Opt$ = "Auto") AND FigDate& (A$) = 0 THEN
    A$ = "": LOCATE L,C: GOTO EnterDate1
 END IF

END SUB

' -------------------------------------------------------------------
SUB RotaDate  (D$,Opt$) PUBLIC
 LOCAL L, C, K$, I$()
 DIM I$ (3)
 L = CSRLIN: C = POS
 COLOR BoxColor MOD 16, BoxColor \ 16
 I$(1) = "To enter date shown press [CR]."
 I$(2) = " Use ["+CHR$(27)+"] or ["+CHR$(26)+"] to change."
 I$(3) = "For normal keyboard entry press SpaceBar."
 CALL SCREENPUSH
 CALL BOXMESSAGE2 (18, 24, 0, I$(), 3, 47)
 LOCATE L+1,C+2
 PRINT CHR$(17);CHR$(205);CHR$(205);CHR$(16)
 COLOR FldColor MOD 16, FldColor \ 16
 DO
   LOCATE L,C: PRINT D$;
   DO:LOOP UNTIL INSTAT
   K$ = INKEY$
   IF LEN(K$) < 2 THEN
     PLAY TinyBeep$
     IF K$ = CHR$(13) THEN
        Opt$ = "CR"
        CALL SCREENPOP
        EXIT SUB
     END IF
     IF K$ = CHR$(27) THEN
        Opt$ = "ESC"
        CALL SCREENPOP
        EXIT SUB
     END IF
     IF K$ = " " THEN
        Opt$ = "RegularEntry"
        CALL SCREENPOP
        EXIT SUB
     END IF
   ELSE
     K$ = RIGHT$(K$,1)

     SELECT CASE ASC(K$)
       CASE &H4B  '                                    left -- back date 1 day
         D$ = WriteDate$(FigDate&(D$) - 1)
       CASE &H4D  '                                right -- advance date 1 day
         D$ = WriteDate$(FigDate&(D$) + 1)
       CASE &H48 '                                                         up
         Opt$ = "Up": CALL SCREENPOP : EXIT SUB
       CASE &H50  '                                                        down
         Opt$ = "Down": CALL SCREENPOP : EXIT SUB
       CASE &H3C  '
         Opt$ = "F2": CALL SCREENPOP : EXIT SUB
       END SELECT

     PLAY TinyBeep$
   END IF
 LOOP

 END SUB
' -------------------------------------------------------------------


SUB ENTERTIME  (A$, Opt$) PUBLIC
 LOCAL L, C, Hours, H$, AmPm$

EnterTime1:
 DATA 2,":",2,"END"
 RESTORE EnterTime1
 Opt$ = Opt$ + "Num"
 L = CSRLIN: C = POS

   CALL ENTERBUNCHES(A$, Opt$)

 IF A$ <> "" THEN
    IF VAL (LEFT$(A$,2)) > 24 OR VAL (RIGHT$(A$,2)) > 59 THEN
      A$ = ""
      LOCATE L,C
      GOTO EnterTime1
    END IF

    IF RIGHT$ (A$,2) = "  " AND LEFT$ (A$,2) <> "  " THEN
      Hours = VAL(LEFT$ (A$,2))
      IF Hours > 10 THEN
         H$ = LEFT$(A$,2)
      ELSE
        H$ = LEFT$ (STR$(Hours),2)
      END IF
      A$ = H$ + ":00"
      LOCATE L,C: PRINT A$
    END IF

AMorPM:
    IF LEFT$(A$,2) <> "  " AND VAL (LEFT$(A$,2)) < 13 THEN
'                                             dialog box to select a.m. or p.m.
       CALL SCREENPUSH
'   Code to write Static Window {AM_PM} to Screen
'        note: created by StatWindow Writer (PWW) from AM_PM.PW

       COLOR BoxColor MOD 16, BoxColor \ 16
       LOCATE  9, 24
       PRINT "┌──────────────────────────────────────┐"
       LOCATE  10, 24
       PRINT "│    A - for A.M.                      │";
       LOCATE  11, 24
       PRINT "│    P - for P.M.                      │";
       LOCATE  12, 24
       PRINT "│        [ESC] to Quit                 │";
       LOCATE  13, 24
       PRINT "│              Time entered:           │";
       LOCATE  14, 24
       PRINT "└──────────────────────────────────────┘";

       COLOR FldColor MOD 16, FldColor \ 16
       LOCATE  13, 53
       PRINT USING  "\   \";A$;
       COLOR ScrColor MOD 16, ScrColor \ 16

'  08-22-1990, 18:40:   end of StatWindow generated code for window {AM_PM}
       DO
         AmPm$ = UCASE$ (INKEY$)
       LOOP UNTIL AmPm$ = "A" OR AmPm$ = "P"
       CALL SCREENPOP
       A$ = A$ + " " + MID$ ("a.m.p.m.", 5 + 4*(AmPm$="A"), 4)
       LOCATE L,C: PRINT A$
     END IF
 END IF
 END SUB

' -------------------------------------------------------------------

SUB ENTERSSN  (A$, Opt$) PUBLIC

EnterSSN1:
 DATA 3," ",2," ",4,"END"
 RESTORE EnterSSN1
 Opt$ = Opt$ + "Num"

   CALL ENTERBUNCHES(A$, Opt$)

END SUB

' -------------------------------------------------------------------


SUB ENTERPHONE  (A$, Opt$) PUBLIC

 LOCAL L,C

EnterPhone1:
 DATA "(",3,") ",3,"-",4," ext. ",5
 DATA END
EShortPhone:
 DATA "(",3,") ",3,"-",4
 DATA END
 LOCAL WithExtension

 IF INSTR(Opt$,"NoExt") THEN
     RESTORE EShortPhone
   ELSE
     RESTORE EnterPhone1
     WithExtension = %True
   END IF
 A$ = LTRIM$ (RTRIM$ (A$))
 IF A$ = "" THEN A$ = "("+LocalAreaCode$+")"
 Opt$ = Opt$ + "Num"

   CALL ENTERBUNCHES(A$, Opt$)

 A$ = LTRIM$ (RTRIM$ (A$))
 IF WithExtension THEN
   IF RIGHT$ (A$,4) = "ext." THEN A$ = LEFT$ (A$,19)  ' if no ext # then trim
   PRINT USING "\"+SPACE$(23)+"\"; A$  '                 off the word "ext."
 ELSE
   PRINT USING "\"+SPACE$(14)+"\"; A$
 END IF
 END SUB  '

' -------------------------------------------------------------------

SUB ENTERBUNCHES (A$, Opt$)
 LOCAL L, C, FLength, Sep$(), Size(), Bunch%, B$, B%, FPos, Opt0$
 DIM Sep$ (20): DIM Size (20)
 Bunch% = 1
 L = CSRLIN: C = POS
 READ B$
 DO UNTIL B$ = "END"
   IF INSTR("123456789",B$) THEN
      Size(Bunch%) = VAL (B$)
      INCR FLength, (LEN(Sep$(Bunch%))+Size(Bunch%))
      INCR Bunch%                   ' get sizes of bunches and separator chrs
   ELSE
      Sep$(Bunch%) = B$
   END IF
   READ B$
 LOOP

 A$ = A$ + SPACE$(FLength-LEN(A$))


 B% = 1
 FPos = 1                              '  this is to move the cursor past a
 IF Opt$ <> "Up" THEN
   DO UNTIL FPos > LEN(A$) '            full field:  check first chr of each
     IF MID$(A$,LEN(Sep$(B%))+FPos,1) <> " " THEN  '  bunch for being blank ...
       INCR FPos,  LEN(Sep$(B%)) + Size(B%)
       INCR B%                                  ' if it isn't, jump over it ...
     ELSE
       EXIT LOOP
     END IF
  LOOP
  IF Fpos >= FLength THEN B% = 1: FPos = 1  '            for a full field,
 END IF  '                                     set cursor back to pos. # 1 ...

'   now the bunch to start with is B% // the starting $ is A$


TakeEntry:
 LOCATE L,C: PRINT USING "\"+SPACE$(FLength-2)+"\"; A$

 Opt0$ = Opt$
 DO UNTIL Size(B%) = 0
   LOCATE L, (C + FPos-1)
   PRINT Sep$(B%);
   Ln = CSRLIN: Col = POS
   Opt$ = Opt0$+"Auto BackOut UpOut"
   B$ = MID$ (A$, FPos+LEN(Sep$(B%)), Size(B%))

     CALL ENTERSTRING (B$,Size(B%),Opt$)

   MID$(A$,FPos) = Sep$(B%)+B$

 SELECT CASE Opt$

   CASE "Left"
     IF B% > 1 THEN
       DECR B%
       DECR FPos, Size(B%)+LEN(Sep$(B%))
          END IF

   CASE "Up", "ESC", "F2", "HELP!", "Tab", "ShfTab", "CR", "Down"
     EXIT LOOP

   CASE "Auto"
     INCR FPos, Size(B%)+LEN(Sep$(B%))
     INCR B%

   CASE ELSE
     PRINT "ENTERBUNCHES: Error! Opt$ = "; Opt$; :CALL CloseFiles: STOP

 END SELECT
 LOOP

BunchDone:
 LOCATE L,C
END SUB  '                                          REM    ENTERBUNCHES

SUB PressAKey PUBLIC
 LOCAL Click

 LOCATE 20, 58, 0: COLOR 0,7
 PRINT "╔═════════════════╗"                ' pcWrite is great for boxing now!
 LOCATE 21, 58
 PRINT "║   HIT ANY KEY   ║"           ' (always did do a zippy search/replace)
 IF NeedDCon THEN
   LOCATE 22, 58
   PRINT "║ OR CLICK RODENT ║"
   LOCATE 23, 58
   PRINT "║    TO GO ON     ║"
   LOCATE 24, 58
   PRINT "╚═════════════════╝";
 ELSE
   LOCATE 22, 58
   PRINT "║    TO GO ON     ║"
   LOCATE 23, 58
   PRINT "╚═════════════════╝";
 END IF

 PLAY PressAKeyBeep$
 IF NeedDCon THEN
   DO
     CALL Mouse (%ReadRodent, Click, X, Y)
   LOOP UNTIL ((INKEY$ <> "") OR Click)
 ELSE
   DO: LOOP UNTIL INKEY$ <> ""
 END IF

 LOCATE ,,1

 END SUB
'____________________________________________________________________________

FUNCTION GetYesOrNo PUBLIC
   LOCAL X$
   PRINT " (y/n) ";
   DO WHILE X$ <> "Y" AND X$ <> "N"
     IF NeedDCon THEN
       DO
         CALL Mouse (%ReadRodent, Click, X, Y)
       LOOP UNTIL (INSTAT OR Click)
     ELSE
       Click = %False
       DO: LOOP UNTIL INSTAT
     END IF
     X$ = INKEY$
     X$ = UCASE$(X$)
     IF Click = %LeftButton THEN X$ = "Y"
     IF Click = %RightButton THEN X$ = "N"
   LOOP
   PRINT X$;
   GetYesOrNo = (X$ = "Y")
   END FUNCTION

SUB ENTERYESNO  (Yes) PUBLIC
 LOCAL Choice$, L, C
 COLOR FldColor MOD 16, FldColor \ 16
 L = CSRLIN
 C = POS
 PRINT "Y"
 LOCATE L, C
 DO
   DO:LOOP UNTIL INSTAT
   Choice$ = INKEY$
   SELECT CASE Choice$
     CASE "y", "Y", CHR$(13)
       PRINT "Y"
       Yes = %True
       EXIT LOOP
     CASE "n", "N", CHR$(27)
       PRINT "N"
       Yes = %False
       EXIT LOOP
     CASE ELSE
       PLAY OopsBeep$
   END SELECT
 LOOP
 END SUB '                                         REM -- ENTERYESNO

FUNCTION ROUNDOFF# (N#, Places%)
 SELECT CASE Places%
   CASE 0
     ROUNDOFF# = ROUND (N#, 0)
     EXIT SELECT
   CASE 1
     ROUNDOFF# = ROUND (N#, 1)
     EXIT SELECT
   CASE 2
     ROUNDOFF# = ROUND (N#, 2)
     EXIT SELECT
   CASE 3
     ROUNDOFF# = ROUND (N#, 3)
     EXIT SELECT
   CASE 4
     ROUNDOFF# = ROUND (N#, 4)
 END SELECT
END FUNCTION
```
{% endraw %}

## FIGDAT-U.BAS

{% raw %}
```bas

'==============================================================================
'                DATE ARITHMETIC MODULE -- FIGDAT-U.BAS
'==============================================================================
'                                                             -- 2-14-90

                               $COMPILE UNIT
                               $ERROR ALL OFF
 DEFINT A-Z

 EXTERNAL PressAKeyBeep$, OopsBeep$, TinyBeep$



 FUNCTION GetDate$ PUBLIC
 GetDate$ = Left$(DATE$,6)+RIGHT$(DATE$,2)
     END FUNCTION
'____________________________________________________________________________

 FUNCTION FigDate&(A$) PUBLIC

  LOCAL A#, M%, D%, Y&, LpYrDys%, W&, A&, B%

'  ON ERROR GOTO FigDateError
  M% = VAL(LEFT$(A$,2))
  D% = VAL(MID$(A$,4,2))
  Y& = VAL(RIGHT$(A$,2))
'  ON ERROR GOTO Oops

SELECT CASE M%
    CASE <1, >12
      GOTO FigDateError
    CASE 1,3,5,7,8,10,12
      IF D% < 1 OR D > 31% THEN FigDateError
    CASE 4,6,9,11
      IF D% < 1 OR D% > 30 THEN FigDateError
    CASE 2
      IF Y&/4 = FIX(Y&/4) AND Y& <> 0 THEN
        IF D% < 1 OR D% > 29 THEN FigDateError
      ELSE
        IF D% < 1 OR D% > 28 THEN FigDateError
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

 FigDate& = W& + B% + D% + 59: EXIT FUNCTION

DateRealOld:
 IF M% = 2 THEN FigDate& = D%+31 ELSE FigDate& = D%
 EXIT FUNCTION

FigDateError:
 FigDate& = 0
' ON ERROR GOTO Oops

     END FUNCTION
'____________________________________________________________________________

 FUNCTION WriteDate$ (Julioid&) PUBLIC
 LOCAL W&, A#, B#, Y%, Y#, M$, D$, Y$
 W& = Julioid&                    ' new line to avoid a new problem. see below.
 IF W& > 36524 THEN WriteDate$ = " 2000 + ": EXIT FUNCTION
 IF W& < 1 THEN WriteDate$ =  "ERR:FigD=0": EXIT FUNCTION
 IF W& < 60 THEN
  Y$ = "01"                       ' note: I had trouble with this guy after
  SELECT CASE W&                  ' converting it from a DEF Fn to its present
    CASE > 31                     ' form because -- it altered its argument!
      M$ = "02": D$ = STR$(W&-31) ' (true FUNCTIONS do.)
    CASE ELSE
      M$ = "01": D$ = STR$(W&)
         END SELECT
 ELSE
  W& = W& - 59
  A# = INT (W&/1461)
  W& = W& - 1461 * A#
  B# = INT (W&/365.25)
  Y# = 4 * A# + B#
  W& = W& - B# * 365
  SELECT CASE W&
    CASE 0
      M$ = "02": D$ = " 29"
      EXIT SELECT
    CASE 1 TO 31
      M$ = "03": D$ = STR$(W&)
      EXIT SELECT
    CASE 32 TO 61
      M$ = "04": D$ = STR$(W& - 31)
      EXIT SELECT
    CASE 62 TO 92
      M$ = "05": D$ = STR$(W& - 61)
      EXIT SELECT
    CASE 93 TO 122
      M$ = "06": D$ = STR$(W& - 92)
      EXIT SELECT
    CASE 123 TO 153
      M$ = "07": D$ = STR$(W& - 122)
      EXIT SELECT
    CASE 154 TO 184
      M$ = "08": D$ = STR$(W& - 153)
      EXIT SELECT
    CASE 185 TO 214
      M$ = "09": D$ = STR$(W& - 184)
      EXIT SELECT
    CASE 215 TO 245
      M$ = "10": D$ = STR$(W& - 214)
      EXIT SELECT
    CASE 246 TO 275
      M$ = "11": D$ = STR$(W& - 245)
      EXIT SELECT
    CASE 276 TO 306
      M$ = "12": D$ = STR$(W& - 275)
      EXIT SELECT
    CASE 307 TO 337
      M$ = "01": D$ = STR$(W& - 306): INCR Y#
      EXIT SELECT
    CASE > 337
      M$ = "02": D$ = STR$(W& - 337): INCR Y#
        END SELECT

  END IF

  D$ = MID$(D$,2)
  IF LEN(D$) = 1 THEN D$ = "0"+D$
  Y% = Y#
  Y$ = MID$(STR$(Y%),2)
  IF LEN(Y$) = 1 THEN Y$ = "0"+Y$
  WriteDate$ = M$+"-"+D$+"-"+Y$
 END FUNCTION
'____________________________________________________________________________

 FUNCTION WkDay$ (W&) PUBLIC
    LOCAL N
    N = W& MOD 7
    SELECT CASE N
      CASE 0
        WkDay$ = "Sun":EXIT FUNCTION
      CASE 1
        WkDay$ = "Mon":EXIT FUNCTION
      CASE 2
        WkDay$ = "Tue":EXIT FUNCTION
      CASE 3
        WkDay$ = "Wed":EXIT FUNCTION
      CASE 4
        WkDay$ = "Thu":EXIT FUNCTION
      CASE 5
        WkDay$ = "Fri":EXIT FUNCTION
      CASE 6
        WkDay$ = "Sat": END SELECT: END FUNCTION
'____________________________________________________________________________

 FUNCTION YearsSince (D0$) PUBLIC
 LOCAL Y, D$
 D$ = DATE$
 Y = VAL (RIGHT$(D$,2)) - VAL (RIGHT$(D0$,2)) - 1
'                                             (take deep breath ...)
 IF VAL (LEFT$ (D$,2)) > VAL (LEFT$ (D0$,2)) THEN
    INCR Y
 ELSEIF VAL (LEFT$ (D$,2)) = VAL (LEFT$ (D0$,2))_
              AND VAL (MID$(D$,4,2)) => VAL (MID$(D0$,4,2)) THEN
    INCR Y
 END IF

 YearsSince = Y
                  END FUNCTION

'____________________________________________________________________________

 FUNCTION FlipDate$ (WrittenDate$) PUBLIC
 FlipDate$ = RIGHT$(WrittenDate$,2)+LEFT$(WrittenDate$,2)_
                                                    +MID$(WrittenDate$,4,2)
END FUNCTION
       '  this makes dates come out like 880312 (for today) for easy sorting


 FUNCTION UnflipDate$ (FlippedDate$) PUBLIC
   UnflipDate$ = MID$(FlippedDate$,3,2) + "-" + RIGHT$(FlippedDate$,2)_
                                                 + "-" + LEFT$(FlippedDate$,2)
END FUNCTION


```
{% endraw %}

## HBDEMO.BAS

{% raw %}
```bas


'
'             ╔═════════════════════════════════════════════╗
'             ║                                             ║
'             ║                                             ║
'             ║    THE NEW HB ALL-PURPOSE LIBRARY DEMO      ║
'             ║                                             ║
'             ║                                             ║
'             ║        FOR POWER-BASIC PROGRAMMERS          ║
'             ║                                             ║
'             ║                                             ║
'             ╚═════════════════════════════════════════════╝
'
'
'              Version 2.00001     //    SPRING - SUMMER 1990

'                9-16-90 fixed a bit (mostly so it'll work
'                with the upcoming Power Basic version 2.10)
'
'
'   This is my custom routines library, a set of procedures etc. that I have
'   written over a few years time, mostly for use in database programs. Also
'   I include a do-nothing program intended for demonstration and
'   development of the functions in the library.
'
'   FEATURES:
'    ------
'
'      MAIN MENUS ACROSS TOP OF SCREEN AND PULLDOWN SUBMENUS -- WITH
'        STANDARD KEYBOARD AND MOUSE CONTROL
'
'      POP UP AND VANISH MENUS AND DIALOG BOXES, ANYWHERE ON THE SCREEN
'
'      INPUT ROUTINES FOR TEXT FIELDS, NUMBERS, DATES ETC. W/ FULL EDITING --
'
'      POP-UP DATA ENTRY WINDOWS  -- CURSOR OR TAB BACK AND FORTH FROM
'        FIELD TO FIELD
'
'      GET DISK, DIRECTORY AND SYSTEM INFO DIRECTLY FROM DOS
'
'      ALL IN BASIC FOR RELIABILITY AND EASY MAINTENENACE
'
'      NOW USES UNITS, SAVES SCREENS DIRECTLY TO MEMORY
'        (USED TO NEED A RAM-DISK, BUT NO MORE)
'
'
'      Your feedback is welcomed -- write to 2097 7th St. in
'      Oakland, Ca. 94607 --  or via the CompuServe PCVENB
'      Forum (# 71121,776), or Pro-Net or MOE in the Bay Area.
'
'      -- Howard Ballinger
'
                           $COMPILE EXE
                           $LIB LPT ON,_
                                COM OFF, GRAPH OFF, FULLFLOAT OFF, IPRINT OFF
                           $STACK 3072
                           $ERROR ALL ON

 %ScrnStackSize = 12

'   Correct order seems to be: DIM Statements, $LINK statements,
'                                            then PUBLIC statements. WORKS !!

                           $INCLUDE "SETUP-H.BAS"

                           $LINK "INIT-U.PBU"
                           $LINK "FENTRY-U.PBU"
                           $LINK "FIGDAT-U.PBU"
                           $LINK "BOXES-U.PBU"
                           $LINK "MENUS-U.PBU"
                           $LINK "MISC-U.PBU"

                           $INCLUDE "HBDEMO.PV"

'                                        The *.PV files are lists of all the
'                                        public variables in a program's units.
'                                        Any time you change the EXTERNAL
'                                        variables in your units, run
'                                        PUBVARS.EXE and you will get a fresh,
'                                        sorted list to include in the main
'                                        file, like this.


 ButtonsActive = %False '                           (button feature not used)
 LocalAreaCode$ = "415"
 Item% = 101

 CALL Initialize (%LQ2500) '              see INIT-U.BAS for other sets of
'                                         printer codes you can select. (New!)
 ON ERROR GOTO Oops

'     =============================================== TITLE SCREEN
 GOSUB SetColors
 COLOR ScrColor MOD 16, ScrColor \ 16 '    This breaks down an integer color
'                                          attribute into foreground & backgrd
 CLS
 GOSUB Logo3 '                                print a title in a box on screen
 COLOR ScrColor MOD 16, ScrColor \ 16
'                                              and next, open a Static Window
'                                              (by that I mean one that displays
'                                              some data at run-time but doesn't
'                                              let the user enter any) and
'                                              displays some disk and system
'                                              info in it.

' ===========================================================================

'          USE OF THE                            SWW.EXE is a screen generator
'        STATIC WINDOW                           and by processing DEMO.SW
'        PAINT UTILITY                           gives the BASIC statements in
'           SWW.EXE                              these lines (I read in the INC
'                                                file with ^KR) to draw window
'                                                and set up its static fields.
'                                                The template files are similar
'                                                to those use to make POPWINDOW
'                                                designs, as described below.
'                                                See DEMO.SW for an example.
' ===========================================================================

'   |====== ...  HERE IS THE INCLUDE FILE "demo.inc", ONLY I ======|
'   |======    COPIED IT INTO THE FILE (^KR) FOR CONVENIENCE ======|

'   Code to write Static Window {DEMO} to Screen
'        note: created by StatWindow Writer (PWW) from DEMO.PW

 COLOR BoxColor MOD 16, BoxColor \ 16
 LOCATE  10, 9
 PRINT "┌─────────────────────────────────────────────────────────────────┐"
 LOCATE  11, 9
 PRINT "│                       SYSTEM AND DOS INFO                       │";
 LOCATE  12, 9
 PRINT "│                        =================                        │";
 LOCATE  13, 9
 PRINT "│                                                                 │";
 LOCATE  14, 9
 PRINT "│           CURRENT DEFAULT DRIVE & DIR:                          │";
 LOCATE  15, 9
 PRINT "│                                                                 │";
 LOCATE  16, 9
 PRINT "│              COLOR DISPLAY DETECTED ?                           │";
 LOCATE  17, 9
 PRINT "│                                                                 │";
 LOCATE  18, 9
 PRINT "│    RODENT DETECTED ?                   SOUND ON ?               │";
 LOCATE  19, 9
 PRINT "│                                                                 │";
 LOCATE  20, 9
 PRINT "│    FREE SYSTEM MEMORY      K.    FREE DISK SPACE       K.       │";
 LOCATE  21, 9
 PRINT "│                                                                 │";
 LOCATE  22, 9
 PRINT "└─────────────────────────────────────────────────────────────────┘";

 COLOR FldColor MOD 16, FldColor \ 16
DEMOFields:
 LOCATE  14, 50
 PRINT USING  "\\";GetCurrentDrive$;
 LOCATE  14, 52
 PRINT USING  "\               \";GetCurrentDir$ ("");
 LOCATE  16, 49
 PRINT USING  "!";MID$ ("YN", 2+ColorDisplay, 1);
 LOCATE  18, 32
 PRINT USING  "!";MID$ ("YN", 2+NeedDCon, 1);
 LOCATE  18, 61
 PRINT USING  "!";MID$ ("YN", 2+SoundOn, 1);
 LOCATE  20, 33
 PRINT USING  "####";FRE (-1) / 1024;
 LOCATE  20, 60
 PRINT USING  "#####";GetFreeSpace! ("") / 1024;
 COLOR ScrColor MOD 16, ScrColor \ 16

'  07-06-1990, 23:46:   end of StatWindow generated code for window {DEMO}

'        |=============== (INCLUDE FILE ENDS HERE) ====================|

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 24, 41: PRINT "note: use a mouse if you wish. L = yes.";

 COLOR BarColor MOD 16, BarColor \ 16
 LOCATE 25,1: CALL ClearLine '        SUB ClearLine erases screen from cursor
'                                     position all the way to rt edge of scrn
 PRINT "     SOUND ON ?? ";
 SoundOn = GetYesOrNo '                 FUNCTION GetYesOrNo simply writes a
'                                       "(y/n)" prompt to the screen and then
'                                       awaits the user's pleasure. It is case
'                                       insensitive & also Mousable. (L = Yes.)
 IF SoundOn THEN GOSUB SetBeeps
 PLAY ArribaBeep$
 Choice = 256 '                                   We don't want Choice, the
'                                                 menu return value, to be 0 at
'                                                 the start. A Choice value of
'                                                 0 is used for a specific
'                                                 purpose: it means [Esc] was
'                                                 pressed in reponse to a
'                                                 pull-down menu.


' ==================================== PRINT MAIN MENU -- A BAR ACROSS TOP

MainMenu:
 GOSUB SetColors '                                 set colors based on defaults
 COLOR ScrColor MOD 16, ScrColor \ 16 '               or command line switches.
 CLS
 NextScrn2Pop = 1 '                          We need to keep track of the stack
'                                            of screens. At this point the
'                                            next screen we "push" (save) will
'                                            be numbered 2 (I'm not using an 0)

 IF Choice > 0 THEN '  unless user has just backed out of a menu w/o selecting,
   TChoice = 1 '                  the return variable Choice will be > 0 and
   GOSUB Logo2 '                     the main menu will be reset to choice #1
 END IF
 TLine$ = " HB's POW-Bas Routines Library: the Demo " '            menu title

 RESTORE MainMenu
 PLAY LookitBeep$
' =============================================================================
'
'       How to use "TOPMENU ()" -- The Horizontal Main Menu Procedure --
'        -----------------------------------------------------------
'
'    This procedure writes a list of choices across the top of the screen and
'    allows the user to select from them by one of three methods: (1) Press the
'    first letter of the desired choice (note that you can't have two choices
'    starting with the same letter!) or (2) use the cursor arrows to highlight
'    your choice and then press Enter (CR), or (3) if you have a Furry Friend,
'    just click on your choice with the left button. (This is pretty much the
'    way people expect a menu to behave!)
'
'    Set it up with a DATA list of selection titles like the one following --
'    follow w/ DATA END; don't forget to RESTORE to the label above the list.
'    you can use less than a three line menu (to save screen space) but
'    frankly I haven't use 2-line or 1-line TOPMENU's enough to even know
'    whether they have bugs, so just use 3 for now. TLine$ should be the
'    title if you want one, and after the CALL returns, will be set to the
'    string chosen by the user. Mostly I just branch the program on the
'    basis of TChoice, an integer showing which selection was made.
' =============================================================================

 DATA "POPWINDOW DEMO","FILES","MENU DEMOS","OTHER DEMOS","QUIT/CONFIG"
 DATA END
 NumberOfLines = 3
 CALL TOPMENU (NumberOfLines,TChoice,TLine$)

 CALL SCREENPUSH '                      save this screen to memory ...

 MainMenuScreen = NextScrn2Pop '          make a note of what number it is ...

 ON TChoice GOTO OpenEntryWindow, FileSubmenu, MenuDemo, MiscDemos, QuitSubMenu


'  ------------------ MAIN MENU CHOICE # 2: FILE SUBMENU ------------------

FileSubmenu:
' ============================================================================

' Notes:              *** HOW TO USE: SUPERMENU () ***
'                           ===================
'
'Syntax:
'CALL SUPERMENU (MenuData$(), MenuRight, MenuDown, Choice, Title$, KeyPressed)
'
'
'        MENU SETUP: THE MenuData$ ARRAY:
'           Each choice on your menu is represented by one string element in
'           this array. The decription of each choice -- for example, "LOAD",
'           will start with the third character of this string. If you are
'           specifying the hot-key for each choice put it into the first
'           character -- set MenuData$ (1) as something like "L LOAD". To let
'           the software number or letter the items in order for you, set
'           MenuData$ as just "  LOAD". (If there are <11 items, numbers
'           are used rather than letters.) After the last menu item, you
'           must set the next array element as "END".
'        PASSING HELP LINES TO MENU: Set MenuHelpLine$() to contain lines (up
'           to 80 chr long) to appear at screen bottom whenever the
'           corresponding menu choice is highlighted.
'        POSITION OF MENU ONSCREEN ETC.: MenuRight moves it right or left --
'           MenuDown moves it -- you guessed it! 0,0 is top center. Errors are
'           trapped. Vertical centering is gotten by setting MenuDown = 25.
'           Usually set Choice = 1.  Title$ is title of menu.

' *** AFTER MENU ROUTINE: Choice will hold the choice #. Title$ reset to "".
'           MKeyPressed$ if the actual key used (if mouse was used it
'           simulates the CR key, i.e. CHR$(13)) -- or if [ESC] or a legal
'           function key was pressed it contains "ESC", "PgDn", "PgUp", "F1",
'           or "F2".
' ============================================================================

 MenuData$(1) = "F Directory"
 MenuData$(2) = "V View .BAS"
 MenuData$(3) = "D View .DOC"
 MenuData$(4) = "C Copy files"
 MenuData$(5) = "O Shell to DOS"
 MenuData$(6) = "END"
 MenuHelpLine$ (1) =_
      "Using CALL DirFirst & DirNext (SUB's that get info direct from DOS)"
 MenuHelpLine$ (2) = "this lets you read the source file HBDEMO.BAS"
 MenuHelpLine$ (3) =_
      "this lets you display the documentation accompanying HBLib"
 MenuHelpLine$ (4) = "here a dummy function"
 MenuHelpLine$ (5) = "this works -- if it can find COMMAND.COM & load it ..."

 Title$ = ""
 Choice = 1
 PullDown = %Yes '                  Make this a pulldown supermenu ...
 UseRArrow = %Yes '                 We want to be able to drag it either
 UseLArrow = %Yes '                   rt or left with arrow keys or rodent ...
 MenuRight = -15
 MenuDown = 2

   CALL SUPERMENU (MenuData$(), MenuRight, MenuDown,_
                                                Choice, Title$, KeyPressed)

 DECR NextScrn2Pop '                   we won't need to pop the previous screen
 IF Choice = 0 THEN MainMenu
 IF KeyPressed = %LArrow THEN GOSUB MZap: GOTO OpenEntryWindow
 IF KeyPressed = %RArrow THEN GOSUB MZap: GOTO MenuDemo
 SELECT CASE LEFT$ (MenuData$ (Choice), 1)
   CASE "F"
     GOSUB Directory
     GOTO MainMenu
   CASE "V", "D"
    PLAY LookitBeep$
    IF ColorDisplay THEN COLOR %Wht, %Vlt ELSE COLOR %Gry, %Blk
     CLS
     IF Choice = 3 THEN File2View$ ="AP-LIB.DOC" ELSE File2View$ = "HBDEMO.BAS"
     IF EXIST (File2View$) THEN '              uses function EXIST () ...
       TxtFile = FREEFILE '                    gets an available handle # ...
       OPEN File2View$  FOR INPUT AS #TxtFile
       Ln = 0
       DO UNTIL EOF (TxtFile) OR FileError '             and views the file.
         LINE INPUT #1, L$
         INCR Ln
         PRINT LEFT$ (L$, 79)
         IF CSRLIN = 23 THEN
           Color %Blu, %Cyn
           PRINT STRING$ (80, 205);
           CALL ClearLine
           PRINT "  WORLD'S MOST PRIMITIVE FILE VIEWER:  File ";
           PRINT File2View$; ",  LINE "; Ln-21;
           LOCATE 25,1
           CALL ClearLine
           PRINT " PRESS [ESC] TO EXIT, [PG-UP] TO GO BACK TO LINE 1, ";
           PRINT "ANY OTHER KEY TO GO ON";
           Color %Wht, %Vlt
           DO: LOOP UNTIL INSTAT
           K$ = INKEY$
           IF K$ = CHR$ (27) THEN EXIT LOOP
           IF K$ = CHR$ (0) + CHR$ (&H49) THEN
             PLAY TinyBeep$
             CLOSE #TxtFile
             OPEN File2View$  FOR INPUT AS #TxtFile
             Ln = 0
           END IF
           FOR N = 1 TO 23: LOCATE N, 1: CALL ClearLine: NEXT: LOCATE 1,1
         END IF
       LOOP
       PLAY ArribaBeep$
       CLOSE #1
     ELSE
       CALL QBox (10,30,1,"DID NOT FIND FILE " + File2View$, 0)
'                                   QBox was written to put little dialog boxes
'                                   onscreen -- but it turns out to very handy
'                                   as a message box as well. This will print
'                                   a box at position 19,13 with this string
'                                   in it and an answer field length of zero

       CALL PressAKey '             Little box says Press Any Key ... if mouse
     END IF '                       present it also suggests a click.
     EXIT SELECT
   CASE "O"
     PLAY LookitBeep$
     IF ColorDisplay THEN COLOR %Ylo, %Red ELSE COLOR %Blk, %Gry
     CLS
     LOCATE 2,12: PRINT "TYPE `EXIT' TO RETURN TO PROGRAM"
     SHELL
     GOTO MainMenu
   CASE ELSE
     GOTO FakeFunction
 END SELECT
 GOTO MainMenu

'  -------------------- MAIN MENU CHOICE #3: MENU DEMOS ----------------

MenuDemo:


 MenuData$ (1) = "   Demo of POPMENU"
 MenuData$ (2) = "   Demo of SUPERMENU"
 MenuData$ (3) = "   Hundred Items Menu"
 MenuData$ (4) = "END"
 Choice = 1
 PullDown = %Yes
 UseRArrow = %Yes
 UseLArrow = %Yes
 CALL SUPERMENU (MenuData$ (), 0, 2, Choice, "", KeyPressed)
 IF KeyPressed = %LArrow THEN GOSUB MZap: GOTO FileSubMenu
 IF KeyPressed = %RArrow THEN GOSUB MZap: GOTO MiscDemos
 ON Choice GOSUB MoveAMenu, MoveAMenuII, HundredItemsMenu
'           NOTE: if [Esc] was pressed, Choice = 0 and there's no GOSUB at all.
 GOTO MainMenu


'   ==================== MAIN MENU CHOICE # 4 -- MISC. SUBMENU

MiscDemos:
                               ' set up menu lines & help lines ...

 MenuData$ (1) = "  ENTRY MODES" '            note that for this menu I've
 MenuData$ (2) = "  DATE ARITHMETIC" '        left two spaces in front of
 MenuData$ (3) = "  BEEPS" '                  each choice. SUPERMENU will
 MenuData$ (4) = "  END" '                    number them (or letter if > 9)

 MenuHelpLine$ (1) = "many different types of line entries demonstrated"
 MenuHelpLine$ (2) = "the all-knowing machine will tell you your age ..."
 MenuHelpLine$ (3) =_
     "this is a test-bed to invent, hear and save your own favorite Beeps ..."

 MenuRight = 18              ' locate menu ...
 MenuDown = 2
 Choice = 1                 ' start with first item highlighted ...
 Title$ = ""                 ' no title ...
 Choice = 1
 UseRArrow = %Yes
 UseLArrow = %Yes
 PullDown = %Yes

 CALL SUPERMENU (MenuData$(), MenuRight, MenuDown, Choice, Title$, KeyPressed)

 IF KeyPressed = %LArrow THEN GOSUB MZap: GOTO MenuDemo
 IF KeyPressed = %RArrow THEN GOSUB MZap: GOTO QuitSubMenu

 DECR NextScrn2Pop '                   we won't need to pop the previous screen
 ON Choice GOSUB EnterDemo, DateTest, BeepTest
 GOTO MainMenu


QuitSubMenu: '  ====================== MAIN MENU CHOICE #5: QUIT

 MenuData$ (1) = "Y Exit to DOS"

 IF LookitBeep$  = "" THEN
   MenuData$ (2) = "S Sound On"
 ELSE
   MenuData$ (2) = "S Sound Off"
 END IF

 MenuData$ (3) = "E Fake ERROR"
 MenuData$ (4) = "N Cancel"
 MenuData$ (5) = "END"

 MenuHelpLine$ (3) = "force an error just to see the error handling routine"
 MenuHelpLine$ (4) = "don't quit after all ... "

 Title$ = ""
 Choice = 1
 PullDown = %Yes
 UseLArrow = %Yes
 CALL SUPERMENU (MenuData$(), 40, 2, Choice, Title$, KeyPressed)
 IF KeyPressed = %LArrow THEN GOSUB MZap: GOTO MiscDemos

 PLAY LookitBeep$


 IF CHOICE = 0 THEN
   CALL SCREENPOP
   GOTO MainMenu
 ELSE
   IF LEFT$ (MenuData$ (Choice), 1) <> "E" THEN COLOR 0,0:CLS:DECR NextScrn2Pop
 END IF
 IF Choice <> 0 THEN OldChoice = 1

 SELECT CASE LEFT$ (MenuData$ (Choice), 1)
   CASE "Y"
LastScrn:
     CLS
     CALL CloseFiles '           Take care of writing database files back ...
     DELAY 0.5
     ON ERROR GOTO HarmlessError
     CALL RestoreDOSScreen '      restore screen that was there to begin with;
     LOCATE ,,0

'                                   write a boxed Farewell Message on top
'                                   of the restored screen -- really
'                                   impress 'em!

     DATA "Thank you for using", "the HB Library DEMO",""
     DATA Program ends., Press something.
     DATA END
'                                         ===================================
'                                         USING BOXMESSAGE ():
'                                         You need a DATA list like this;
'                                         use a RESTORE statement so the
'                                         runtime system can find it;
     RESTORE LastScrn '                   set the margin ...
     Margin = 1 '                         set CornerLin & CornerCol or use
     PLAY TaskBeep$ '                     %Center as we do here to center the
     CALL SCREENPUSH '                    window ... and it's ready.
'                                         ===================================

       CALL BOXMESSAGE (%Center, %Center, Margin)

     GOSUB ClickOrStrike
     CALL SCREENPOP '               erase the box and return control to DOS.
     LOCATE OrigL, OrigC
     END '                             ================>> EXIT POINT

   CASE "S"
     IF LookitBeep$  = "" THEN
       GOSUB SetBeeps
     ELSE
       GOSUB ShutUpAlready
     END IF

   CASE "E"
   ErrorMessage$ = "fake error generated from HBDEMO menus"
    DO
      CALL SCREENPUSH
      EType$ = " "
      CALL QBox_
        (5,10,1,"D for DOS ERROR, P for PRINTER ERROR, O for OTHER ERROR ", 2)
      COLOR FldColor MOD 16, FldColor \ 16
      Opt$ = "AutoCap"
      FieldSize = 1

        CALL ENTERSTRING (EType$, FieldSize, Opt$)

' =============================================================================

'                How to use SUB ENTERSTRING (Wkg$,FLength,Opt$)
'                  ----------------------------------------

'                   This routine provides a field at current corsor loc
'                   for the operator
'                   to enter data into. Wkg$ is the current value of the field.
'                   FLength = length of field. Opt$ may be "" or may hold
'                   the strings "Cap" for all uppercase, "Auto" for automatic
'                   entry when full, "UpOut" or "BackOut" if UpArrow or Left/
'                   backspace keys are to be able to end entry. Tab and ShfTab
'                   also work.
'
'        On exiting sub, Opt$ may be reset as Left, Auto, Up, Down, ESC or CR.
'        At any time during string entry the operator can press [CR] or DOWN-
'        ARROW to enter;  [F2] is pressed for Database Function commands
'        (Clear, Find, Next/Prev, View Notes, Save) implemented (see SUB
'        FileFunctions)
'        2-4-89: Now supports: Ins default (in Opt$), ^Y, ^T, and ^Arrow
'                Negative numbers not allowed unless Opt$ includes a "-"
'
'   N.B.: OF COURSE THIS IS JUST A ONE-CHR STRING TO ENTER. I PUT THE DOC
'         BLOCK HERE 'CAUSE IT'S THE  F I R S T  INSTANCE OF THIS CALL. 
'         THERE ARE MANY MORE TYPICAL EXAMPLES TO FOLLOW ...
' ===========================================================================

      CALL SCREENPOP
    LOOP UNTIL EType$ = "O" OR EType$ = "P" OR EType$ = "D" OR Opt$ = "ESC"
    ON ERROR GOTO Oops
    IF Opt$ = "ESC" THEN MainMenu
    SELECT CASE EType$
      CASE "O"
        ERROR 5
      CASE "D"
        JustDemonstratingOops = %True
        ERROR 53
        EXIT SELECT
      CASE ELSE
        ERROR 27
    END SELECT
  END SELECT
  GOTO MainMenu '                here end the various pulldown menus. Next
'                                come major routines ... Starting with
'                                OpenEntryWindow (lifted, as you might guess,
'                                from my personal custom Checkbook Program).

OpenEntryWindow:

'===============================================================================
'    ABOUT POPWINDOWS:
'    Here's how to create a window for data entry like the one demonstrated
'    here: (1) Create a plain-ASCII template file for your window and name
'              it like WHATEVER.PW (See PWDEMO.PW for a sample).
'          (2) Draw out the top and left side of the window box using the
'              carat (^^^) symbol. Type in the field titles and then use a
'              left bracket ("{") to show where you want each data entry field
'              to start.
'          (3) Under that type a backslash ("\") at the left margin, followed
'              by a list of the following: First your name for the field, then
'              a comma, and then IN QUOTES the mask string you want to use for
'              the data in your field (according to the rules for the
'              PRINT USING statement).
'          (4) Now you need to use a utility PWW.EXE. Compile PWW.BAS to create
'              it if you need to. Type PWW, followed optionally by the name
'              of your POPWINDOW file (with or without its .PW extension). If
'              you haven't screwed up, an INClude file will be created just
'              like PWDEMO.INC, to include (or read into) your program !!
'===============================================================================

 RESTORE OpenEntryWindow

                          $INCLUDE "PWDEMO.INC" '      contains DATA statements
'                                                      to define the window.
   CALL POPWINDOW

 PLAY LookItBeep$

'===============================================================================
'   OK, now what's happened ?? First off, your data entry window has been
'   opened (drawn) on the screen, using the attribute BoxColor; and the blank
'   data fields have been added using FieldColor. Also a table has been created
'   in memory consisting of several arrays to instantly reset the cursor to
'   any of the fields in the window and find which mask string to use on that
'   particular field. This job is done by PWSetUp (). Read on ...
'===============================================================================

'                    ____________________________

 NewRec = %True

BeginEntry:

GetTypeOfTransaction:

 LOCATE 25,1: CALL ClearLine
 LOCATE 24,1: CALL ClearLine: PRINT Esc2Q$;

'                                     create a SUPERMENU of these choices ...
 MenuData$ (1) = "C CHECK"
 MenuData$ (2) = "D DEPOSIT"
 MenuData$ (3) = "A AUTO DEBIT"
 MenuData$ (4) = "T TRANSFER"
 MenuData$ (5) = "J ADJUSTMENT"
 MenuData$ (6) = "END"

 CALL SCREENPUSH

 Choice = 1                 ' start with first item highlighted ...
 Title$ = ""                 ' no title ...
 Choice = 1
 UseRArrow = %Yes
 PullDown = %Yes
 MenuDown = 2
 MenuRight = -40
 CALL SUPERMENU (MenuData$(), MenuRight, MenuDown, Choice, Title$, KeyPressed)

 IF KeyPressed = %RArrow THEN GOSUB MZap: GOTO FileSubMenu

 IF Choice = 0 THEN
   COLOR %Vlt, %Vlt: CLS
   GOTO MainMenu
 END IF

TypeOfTransferMenu:

 IF Choice = 4 THEN
   DATA FROM CHECKING TO SAVINGS,
   DATA FROM SAVINGS TO CHECKING,
   DATA END
                                          ' this is a POPMENU, the predecessor
                                          ' of SUPERMENU. Now SUB POPMENU ()
                                          ' is just a wrapper for SUPERMENU
   RESTORE TypeOfTransferMenu             ' so I don't have to convert all my
   MLine$ = "type of transfer"            ' old code. It uses READ intead of
   Choice = 1                             ' passing an array.

     CALL POPMENU ("1", -12, 9, Choice, MLine$, Dum$)

   CALL SCREENPOP
   IF Choice = 0 THEN GOTO BeginEntry
   IF ColorDisplay THEN COLOR %Ylo,%Red
   IF Choice = 1 THEN TransactionType$ = "TRANSFER C-S" ELSE_
                                 TransactionType$ = "TRANSFER S-C"
 ELSE
   CALL SCREENPOP
   TransactionType$ = MID$ (MenuData$ (Choice), 3)
 END IF

'===============================================================================
'  OK, gentle hackfriend -- don't panic! What happens in the first data entry
'  field in this dummy checkbook program, is that two successive menus are used
'  as "pick lists" to get the data rather than having the user type it in. (If
'  this isn't clear, try it out -- run HBDEMO.EXE -- and it should make
'  a modicum of sense.)
'
'  So here is that PWSetUp () call. It searches out a field name in the table
'  I mentioned above to match the field description string (FldN$)
'===============================================================================

 FldN$ = "TYPE OF TRANSACTION"
 COLOR FldColor MOD 16, FldColor \ 16
 KeyField = %False

 CALL PWSetUp (FldN$,Tbl%)
'                                             now the cursor should be in
'                                             the right place and Tbl%
'                                             should be the right item # in
'                                             the array. Let's try it & see ...

 PRINT USING FieldMask$(Tbl%); TransactionType$
'                _______________________________________      WOW !!! NeatO !!

CheckNumberEntry:

 COLOR %Blk, %Blk: LOCATE 23,1: CALL ClearLine
 COLOR FldColor MOD 16, FldColor \ 16
 LOCATE 25,1: CALL ClearLine: PRINT "    "; F2Fun$; Up2B$; Esc2Q$;
 LOCATE 24,1: CALL ClearLine: PRINT EnHelp$;
 FldN$ = "NUMBER": A# = Item%
 CALL PWSetUp (FldN$,Tbl%)

 IF RTRIM$ (TransactionType$) = "CHECK" THEN
   KeyField = %True '                    this clues in the FileFunctions menu
   Opt$ = "F1 F2 UpOut"
'                                                  ENTERNUMBER () works a lot
     CALL ENTERNUMBER (A#,"####",Opt$) '           like ENTERSTRING () except
'                                                  you specify a Mask String
'                                                  so it can do PRINT USING.

   IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO CheckNumberEntry
   IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO GetTypeOfTransaction
   Item% = A#
   GOSUB F2orEscHandler
 ELSE
   PRINT " -- "
 END IF

DateEntry:

 LOCATE 25,1: CALL ClearLine: PRINT "    "; Up2B$; Esc2Q$;
 BXScreenSaved = %False
 KeyField = %True
 FldN$ = "DATE"
 CALL PWSetUp (FldN$,Tbl%)
 L = CSRLIN: C = POS
 IF DateLastUsed$ = "" THEN DateLastUsed$ = GetDate$
 IF Opt$ <> "Up" AND Opt$ <> "ShfTab" THEN TransactionDate$ = DateLastUsed$

   CALL RotaDate (TransactionDate$,Opt$)

' =========================================================================
'        ROTADATE: This is the date entry routine where you can use the cursor
'        keys to go ahead or back to the date you want. But if the Opt$
'        variable comes back as "RegularEntry" the user can key in the date
'        in the usual way ...
' =========================================================================

 IF Opt$ = "RegularEntry" THEN
   Opt$ = "F1F2Auto UpOut"
   LOCATE L, C
   DO
    IF TransactionDate$ = "" THEN TransactionDate$ = GetDate$
    MID$ (TransactionDate$,4,2) = "  " '        so date looks like "08-  -90"

      CALL ENTERDATE (TransactionDate$, Opt$) '                      date entry

'                                      (note that the cursor skips over
'                                       the nonblank month field and
'                                       goes right to the blanks !!)
   LOOP UNTIL FigDate& (TransactionDate$) > 0 OR Opt$ = "HELP!" OR Opt$ = "ESC"

   IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO DateEntry
'                                                     FigDate returns a 0 if
 ELSE '                                               string not a valid date.
   LOCATE L,C
   PRINT TransactionDate$
 END IF
 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO CheckNumberEntry
 GOSUB F2orEscHandler
 DateLastUsed$ = TransactionDate$

ToFromWhomEntry:
 LOCATE 24,1: CALL ClearLine: PRINT EnHelp$;
 LOCATE 25,1: CALL ClearLine: PRINT "    "; F2Fun$; Up2B$; Esc2Q$;
 KeyField = %True
 FldN$ = "TO/FROM"
 CALL PWSetUp (FldN$,Tbl%)
 X = CSRLIN: Y = POS
 Opt$ = "F1F2UpOutCaps"

 IF RTRIM$ (TransactionType$) = "AUTO DEBIT" THEN
   ToFrom$ = "CASH FROM A.T.M."
 ELSE
   ToFrom$ = ""
 END IF

   CALL ENTERSTRING (ToFrom$,LEN(FieldMask$(Tbl%)),Opt$)

 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO ToFromWhomEntry
 IF Opt$ = "Up" OR Opt$ = "ShfTab" THEN GOTO DateEntry
 GOSUB F2orEscHandler
 KeyField = %False
 IF Opt$ = "Up" THEN
   GOTO DateEntry
 ELSE
   ToFrom$ = A$
 END IF

EntAmt:
 COLOR Ink2, Paper2
 COLOR FldColor MOD 16, FldColor \ 16
 LOCATE 25,1: CALL ClearLine: PRINT Up2B$; Esc2Q$;
 FldN$ = "AMOUNT": Amt# = 0
 CALL PWSetUp (FldN$,Tbl%)
 Opt$ = "F2UpOut - "

   CALL ENTERNUMBER (Amt#, FieldMask$(Tbl%), Opt$)

 IAmtCents& = 100 * Amt#
 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO ToFromWhomEntry
 GOSUB F2orEscHandler

SaveRecord:

 COLOR %Wht,%Blk: LOCATE 24,1: CALL ClearLine: LOCATE 25,1: CALL ClearLine
 LOCATE 24,9: PRINT "Note: THERE IS NO REAL SAVE RECORD FUNCTION -- DUMMY ONLY";
 CALL SCREENPUSH
 CALL QBox (19,30,1,"SAVE RECORD ?? ",3)
 PLAY LookitBeep$
 CALL ENTERYESNO (Confirm) '                      query if save to be done ...
 CALL SCREENPOP
 IF Confirm THEN
   PLAY TaskBeep$
   DELAY 1.6
   IF RTRIM$ (TransactionType$) = "CHECK" THEN INCR Item%
   GOTO MainMenu
 ELSE
   GOTO BeginEntry
 END IF

 GOSUB SaveRecord

 GOTO OpenEntryWindow
'___________________________________________________________________________


F2orEscHandler:
'                          Smart menu of choices appropriate to a database,
'                                  such as SAVE, CLEAR, FIND, NEXT etc.
 IF Opt$ = "F2" THEN
  PLAY LookitBeep$

  SELECT CASE GetFileFunction$
    CASE "C"
      RETURN OpenEntryWindow
    CASE "F"
      RETURN FakeFunction
    CASE "S"
      RETURN SaveRecord
    CASE ELSE
      RETURN
   END SELECT

 ELSEIF Opt$ = "ESC" THEN
    IF NOT IsBlank (TransactionType$) THEN
      LOCATE 25,1: CALL ClearLine
      LOCATE 24,1: CALL ClearLine
      LOCATE 24,8
      PRINT "DO YOU WANT TO CLEAR THIS ENTRY AND RETURN TO MAIN MENU ?? ";
      IF NOT GetYesOrNo THEN LOCATE 24,1: CALL ClearLine: RETURN
    END IF
    NextScrn2Pop = MainMenuScreen
    CALL SCREENPOP
    RETURN MainMenu
 END IF
 RETURN

'    ___________________________________________________________________

EnterDemo:

 PLAY LookitBeep$
 IF ColorDisplay THEN
   FldColor =  %Ylo + %Background * %Red
   ScrColor =  %Ylo + %Background * %Blk
 END IF
 COLOR %Gry, %Blk
 CLS
'   Code to write Static Window {ENTERDEM} to Screen
'        note: created by StatWindow Writer (SWW) from ENTERDEM.SW

 COLOR BoxColor MOD 16, BoxColor \ 16
 LOCATE  2, 9
 PRINT "┌───────────────────────────────────────────────────────────┐"
 LOCATE  3, 9
 PRINT "│        A-P Library Demo : the Data Entry Routines         │";
 LOCATE  4, 9
 PRINT "│                                                           │";
 LOCATE  5, 9
 PRINT "│         (ENTERSTRING, ENTERNUM, ENTERDATE ETC.)           │";
 LOCATE  6, 9
 PRINT "└───────────────────────────────────────────────────────────┘";

 COLOR ScrColor MOD 16, ScrColor \ 16

'  07-06-1990, 23:46:   end of StatWindow generated code for window {ENTERDEM}

 LOCATE 24,1: CALL ClearLine: PRINT EnHelp$;
 LOCATE 25,1: CALL ClearLine: PRINT F1Help$;

'    -----------------------   First line: a plain entry, except no lower case:
StartEntries:
 O$ = "DEFAULT ENTRY" '                          the string starts off as this
 LOCATE 7,4: PRINT "REGULAR ENTRY, ALL CAPS w/ DEFAULT: "; ' leave cursor here
 COLOR FldColor MOD 16, FldColor \ 16
 Opt$ = "Caps F1" '                                use all capitals, accept F1
 FLength = 14

   CALL ENTERSTRING (O$, FLength, Opt$)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 7,60: PRINT "Opt$ = ";Opt$;"   " '                    The value of Opt$
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO StartEntries '     on termination of
 IF Opt$ = "ESC" GOTO DoneED '                                SUB ENTER* shows
'                                                             what key was used
'                                                             to exit the sub.

' --------------------------  Next line: a string with Auto-CR when field full:
 P$ = "Just keep typing ..."
AutoE:
 LOCATE 9,4: PRINT "ENTRY w/ AUTOMATIC TERMINATION: ";
 COLOR FldColor MOD 16, FldColor \ 16
 Opt$ = "F1 Auto"

   CALL ENTERSTRING (P$, 20, Opt$)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 9,60: PRINT "Opt$ = ";Opt$;"   "
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO AutoE
 IF Opt$ = "ESC" GOTO DoneED

' ------------------------  This time up-arrow, ShfTab or left arrow will exit
 LOCATE 25,1: PRINT Up2B$; F1Help$;
UpArrE:
 LOCATE 11,4: PRINT "ENTRY w/ UP-ARROW & BACK-OUT ENABLED: ";
 COLOR FldColor MOD 16, FldColor \ 16
 Opt$ = "F1UpOut BackOut"

   CALL ENTERSTRING (Q$, 4, Opt$)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 11,60: PRINT "Opt$ = ";Opt$;"   "
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO UpArrE
 IF Opt$ = "Up" OR Opt$ = "Left" OR Opt$ = "ShfTab" GOTO AutoE
 IF Opt$ = "ESC" GOTO DoneED

' ----------------------------- Let us not forget the main purpose of
'                               computers, counting beans! Here is money entry:
DollE:
 LOCATE 13, 4: PRINT "DOLLAR AMOUNT ENTRY: ";
 COLOR FldColor MOD 16, FldColor \ 16
 IF Opt$ <> "Up" THEN O# = 0: Opt$ = "F1UpOut"
'                                              Here is ENTERNUMBER ().
   CALL ENTERNUMBER (O#,"$####.##", Opt$) '    Note that the second argument is
'                                              a mask string for PRINT USING.
 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 13,60: PRINT "Opt$ = ";Opt$;"   "
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO DollE
 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO UpArrE
 IF Opt$ = "ESC" GOTO DoneED

' ---------------------------- Now let's enter a decimal number.
NumE:
 LOCATE 15, 4: PRINT "NUMERIC ENTRY, 1 DECIMAL: ";
 COLOR FldColor MOD 16, FldColor \ 16
 Opt$ = "F1UpOut"
 IF Opt$ <> "Up" THEN P# = 98.6

   CALL ENTERNUMBER (P#,"##.#", Opt$)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 15,60: PRINT "Opt$ = ";Opt$;"   "
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO NumE
 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO DollE
 IF Opt$ = "ESC" GOTO DoneED

' ---------------------------------  ... an SSA # ...
SSNE:
 LOCATE 17,4: PRINT "ENTER A SOCIAL SECURITY #: ";
 COLOR FldColor MOD 16, FldColor \ 16
'         IF Opt$ <> "Up" THEN SSN$ = ""
 Opt$ = "F1UpOut"

   CALL ENTERSSN (SSN$, Opt$)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 17,60: PRINT "Opt$ = ";Opt$;"   "
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO SSNE
 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO NumE
 IF Opt$ = "ESC" GOTO DoneED

' ------------------------------------
PhoneE:
 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 19,4: PRINT "ENTER A PHONE #: ";
 COLOR FldColor MOD 16, FldColor \ 16
 IF Opt$ <> "Up" THEN Phone$ = ""
 Opt$ = "F1UpOut"

   CALL ENTERPHONE (Phone$, Opt$)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 19,60: PRINT "Opt$ = ";Opt$;"   "
 IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO PhoneE
 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO SSNE
 IF Opt$ = "ESC" GOTO DoneED
' ------------------------------------------------------- a date & a time ...
 D0$ = GetDate$  '                  e.g. D0$ is 09-01-90
 MID$ (D0$,4) = "  " '                                   e.g. D0$ is 09-  -90
 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 21,4: PRINT "DATE ENTRY w/ DEFAULT MO/YR ";
 COLOR FldColor MOD 16, FldColor \ 16
 Opt$ = "F1UpOut"

   CALL ENTERDATE (D0$, Opt$)

 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO PhoneE
 IF Opt$ = "ESC" GOTO DoneED

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 21,50: PRINT "TIME: ";
 COLOR FldColor MOD 16, FldColor \ 16
 T$ = ""
 Opt$ = "F1UpOut"

   CALL ENTERTIME (T$, Opt$)

 IF Opt$ = "Up" OR Opt$ = "ShfTab" GOTO PhoneE

DoneED:
 LOCATE 25,1: CALL ClearLine
 IF NeedDCon THEN
   PRINT "          hit a key or click your beast to go on ...";
 ELSE
   PRINT "          hit a key to go on ...";
 END IF
 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 24,1: CALL ClearLine
 GOSUB ClickOrStrike
 GOTO MainMenu

EDHelp:
 CALL SCREENPUSH
 RESTORE EDHelp
 CALL BOXMESSAGE (0, 0, 1)
 GOSUB ClickOrStrike
 CALL SCREENPOP
 COLOR FldColor MOD 16, FldColor \ 16
 RETURN

 DATA "HELP FOR DATA ENTRY ROUTINES FROM HB'S ALL-PURPOSE POWER-BASIC TOOLBOX"
 DATA ""
 DATA "There is a space on the screen to type something into. The keyboard"
 DATA "works the way you'd expect it to -- just like typing on a word"
 DATA "processing program. If numbers are expected, no other keys will work."
 DATA ""
 DATA "You can switch between INSERT MODE (big cursor) OVERSTRIKE MODE w/"
 DATA "[INSERT] key. The [DELETE] key removes the letter the cursor is on;"
 DATA "the [BACKSPACE] key also works. Press [ESC] to quit the entry process."
 DATA ""
 DATA "If there is something in the field to begin with and you start"
 DATA "typing something else, the field clears. If the cursor is moved"
 DATA "around first, that doesn't happen. Use Ctrl-U to undo."
 DATA ""
 DATA " Use:   [HOME] key, [END] key, Arrow Keys (Rt & Left) to move cursor   "
 DATA "        Ctrl-Y to clear the line                                       "
 DATA "        Ctrl-T to delete one word (to right)                           "
 DATA "        Ctrl-U to undo (restore original string)                       "
 DATA "        Ctrl-Rt or Left Arrow, (jumps to beginning of a word)          "
 DATA ""
 DATA "See bottom line of screen for more help.                PRESS ANY KEY  "
 DATA END

' ===========================================================================

DateTest:
 PLAY LookitBeep$
 IF ColorDisplay THEN Ink1 = %Blu: Paper1 = %Cyn: Ink2 = %Wht: Paper2 = %Red
 COLOR Ink1, Paper1: CLS
 ON KEY (15) GOSUB Done

 DO
   DoB$ = ""
   COLOR Ink1, Paper1
   LOCATE 5,6: PRINT "Date of Birth :";
   COLOR Ink2, Paper2
   CALL ENTERDATE (DoB$, Opt$)
 LOOP UNTIL DoB$ <> "" '                          if date entered not valid,
'                                                 the result string will be ""
      COLOR Ink1, Paper1
      LOCATE 7,6
      W& = FigDate&(DoB$)
      IF W& = 0 THEN RETURN MainMenu
      PRINT "Days from 1-1-1900 (Julioid) = ";
      COLOR Ink2, Paper2: PRINT W&

      LOCATE 9,6: COLOR Ink1, Paper1
      PRINT "Converting Back to Date = ";
      COLOR Ink2, Paper2: PRINT WriteDate$(W&)
      LOCATE 10,6
      COLOR Ink1, Paper1: PRINT "  (This Date was a ";
      COLOR Ink2, Paper2: PRINT WkDay$(W&);
      COLOR Ink1, Paper1: PRINT " )."

      Today$ = GetDate$ '                                      a function ...
      LOCATE 12,6: COLOR Ink1, Paper1: PRINT "Today is ";
      COLOR Ink2, Paper2
      PRINT Today$
      LOCATE 14,6: COLOR Ink1, Paper1: PRINT "YOUR AGE IS: ";
      COLOR Ink2, Paper2
      PRINT YearsSince (DoB$)
      BDay$ = DoB$: MID$ (Bday$,7) = RIGHT$ (Today$,2)

      N = FigDate& (BDay$) - FigDate& (Today$)
      LOCATE 16,6: COLOR Ink1, Paper1
      SELECT CASE N
         CASE 0
           L = CSRLIN: C = POS
           COLOR Ink1+16, Paper1
           PRINT "HAPPY BIRTHDAY !!"
           LOCATE ,,0
           PLAY "O2 G8 G16 A4 G4 O3 C4 O2 B2": DELAY 2
           COLOR Ink1, Paper1: LOCATE L,C,1
           PRINT "HAPPY BIRTHDAY !!"
         CASE > 0
           PRINT "Your BIRTHDAY is only ";N;" days from today !"
           PLAY TaskBeep$
         CASE < 0
           PRINT "Your BIRTHDAY was ";ABS(N);" days ago."
           PLAY TaskBeep$
      END SELECT

 LOCATE 25,1: CALL ClearLine
 CALL PressAKey
 GOSUB Done

Done:
 RETURN MainMenu

'__________________________________________________________________________

Logo2:
  DATA HB's ALL-PURPOSE LIBRARY DEMO, For POWER BASIC, JULY 1990, END
  RESTORE Logo2
  CALL BOXMESSAGE (0,0,1)
    RETURN

Logo3:
  RESTORE Logo2
  CALL BOXMESSAGE (1,1,1)
    RETURN

'__________________________________________________________________________


SUB CloseFiles PUBLIC

'      What normally has to be done here, in a database program, is the
'      index file closures (writing back data). If the program just crashes
'      out to DOS, thus automatically closing all files at the DOS level,
'      the index files will have been corrupted.

   Dummy = IsRodent '                    also reset your furry friend if any ...

 END SUB


' ______________________________________________________________________

Oops:
'         if error is the printer, beeps til you press a key; if any other
'         error, calls file closure procedures and ends the program ...
 SELECT CASE ERR
   CASE 52, 53, 54, 55, 58, 61, 64, 67, 70, 71, 72, 73, 74, 75, 76
     PLAY "ML O0 C16 D64"
     FileError = %True
     L00 = CSRLIN: C00 = POS
     CALL SCREENPUSH
     IF ErrorMessage$ <> "" THEN
       LOCATE 23,1: COLOR %Red, %Wht: CALL ClearLine
       PRINT "      => ";ErrorMessage$
     END IF
     BoxColor = %Wht + %Background * %Red
     CALL QBox (6, 20, 1,"OOPS: DOS UNABLE TO USE FILE. ERROR" + STR$(ERR), 0)
     DELAY 1
     CALL PressAKey
     CALL SCREENPOP
     LOCATE L00, C00
     RESUME NEXT

   CASE 24, 25, 27
     DATA "P R I N T E R   E R R O R"
     DATA "====="
     DATA "Please check the printer. Apparently it is either"
     DATA "off, not on-line, unplugged or out of paper."
     DATA "Kindly FIX IT ... then PRESS ANY KEY to"
     DATA "go ahead with printing"
     DATA END

     L00 = CSRLIN: C00 = POS
     CALL SCREENPUSH
     IF ErrorMessage$ <> "" THEN
       LOCATE 23,1: COLOR %Red, %Wht: CALL ClearLine
       PRINT "      => ";ErrorMessage$
     END IF
     RESTORE Oops
     CALL BOXMESSAGE (6, 16, 1)
     DO
        PLAY "O3 C64 P16 O4 C64 O3 P16 G-64"
        FOR N = 1 TO 30
          DELAY .1
          IF INSTAT THEN EXIT FOR
        NEXT
     LOOP UNTIL INSTAT
     CALL SCREENPOP
     LOCATE L00, C00
     IF INKEY$ = CHR$(27) THEN
       CALL CloseFiles
       END 1
     ELSEIF  ErrorMessage$ = "fake error generated from HBDEMO menus" THEN
       JustDemonstratingOops = %False
       RESUME NEXT
     ELSE
       RESUME
     END IF
   CASE ELSE
     PLAY "ML O0 C16 D64"
     IF ErrorMessage$ <> "" THEN
       LOCATE 21,1: COLOR %Red, %Wht: CALL ClearLine
       PRINT "      => ";ErrorMessage$
     END IF
     LOCATE 22,1: COLOR %Red, %Wht: CALL ClearLine
     PRINT " OOPS! UNABLE TO CONTINUE. ERROR";ERR;" AT ADDRESS ";ERADR;"     "
     COLOR %Red, %Gry
     BXScreenSaved = %False
     CALL CloseFiles
     COLOR %Grn, %Blk
     LOCATE 25,1: CALL ClearLine
     LOCATE 24,1: CALL ClearLine: END 1 '                 this places the DOS
 END SELECT '                                            prompt at 25,1 for you
 RESUME '                                                without messing up
'                                                        the display otherwise.
'                           Note: ERRORLEVEL is set to 1.
HarmlessError:

   DATA "FILE ERROR APPARENTLY"
   DATA "====="
   DATA "PRESS ANY KEY"
   DATA END
   ON ERROR GOTO 0
   L00 = CSRLIN: C00 = POS
   Ink3 = %Wht + %Flash
   Paper3 = %Red
   BXScreenSaved = %False
   RESTORE HarmlessError
   CALL SCREENPUSH
   CALL BOXMESSAGE (6, 16, 1)
   PLAY "O3 B32 P64 G32"
   DO: LOOP UNTIL INKEY$ <> ""
   CALL SCREENPOP
   LOCATE L00, C00
   RESUME NEXT

SetBeeps:
  LookitBeep$ = "T100 O5 C64 P64 O4 E64"
  ArribaBeep$ = "T70 O2 A32 P32 A32 A32 > E4"
  TaskBeep$ = "MB T100 O3 C16 E32 F32 G16 E16 C16"
  PressAKeyBeep$ = "T120 MS O4 P4 G64 P16 G64 MN"
  OopsBeep$ = "T120 O1 A64"
 RETURN

ShutUpAlready:
  LookitBeep$ = ""
  ArribaBeep$ = ""
  TaskBeep$ = ""
  PressAKeyBeep$ = ""
  OopsBeep$ = ""
 RETURN


FakeFunction:
 COLOR %LCyn, %Blu
 PLAY LookitBeep$
 CLS
 LOCATE 10,10,0:PRINT "This function will of course be brilliantly implemented"
 DELAY .5
 LOCATE 12, 11: PRINT "by you, the creator of your own magnificent applications
 DELAY .5
 LOCATE 14, 13: PRINT "using Power Basic and this humble Library."
 PLAY ArribaBeep$
 CALL PressAKey
 GOTO MainMenu


MoveAMenu:
 IF ColorDisplay THEN
   LOCATE 4,1                     ' this prints a pretty (??) background ...
   FOR Z = 4 TO 23
     COLOR 0,Z MOD 5 + 1: PRINT SPACE$(80);
   NEXT Z
   FOR Z = 24 TO 25
     COLOR 0,Z MOD 5 + 1: LOCATE Z, 1: CALL ClearLine
   NEXT Z

 ELSE
   COLOR %Wht,%Blk '       this prints an important-looking background ...
   LOCATE 4,1
   FOR Z = 4 TO 23
      PRINT SPACE$(Z);"Screenful of Very Important Data ..."
   NEXT Z
  END IF
   MenuColor =  %Blk + %Background * %Gry
   BarColor =  %Ylo + %Background * %Grn

 D = 3: R = -4
                  ' menu lines are set up (D,R,L & Q will be the HotKeys) ...
 DATA U UP,,D DOWN,,R RIGHT,,L LEFT,,Q QUIT,
 DATA END
 Choice = 1

 DO
   RESTORE MoveAMenu
   TopKey$ = ""   '  when this parameter is "", the HotKeys are taken off the
   '         lines in the DATA statement (the 2nd character is discarded) ...

   MLine$ = "MOVE ME"                                    ' title
   MenuRight = R
   MenuDown = D
   CALL SCREENPUSH
   CALL POPMENU (TopKey$, MenuRight, MenuDown, Choice, MLine$, MCode$)
   CALL SCREENPOP
   SELECT CASE Choice
     CASE 1
      IF D > 0 THEN DECR D,2
     CASE 2
      IF D < 30 THEN IF D = 3 THEN INCR D,1 ELSE INCR D,2
     CASE 3
      IF R < 40 THEN INCR R,4
     CASE 4
      IF R > -40 THEN DECR R,4
   END SELECT

 IF ColorDisplay THEN
   COLOR %Wht, %Vlt
 ELSE
   COLOR %Wht, %Blk
 END IF
   LOCATE 25,3,0
   PRINT "ARGUMENTS: Choice = ";Choice;"MenuDown = ";D;
   PRINT "   --   ";"MenuRight = ";R;

 LOOP UNTIL Choice = 5 OR Choice = 0
 MenuColor =  %Wht + %Background * %Blu
 BarColor =  %Ylo + %Background * %Red
 LOCATE ,,1
 RETURN

'____________________________________________________________________________

'____________________________________________________________________________

MZap:
 NextScrn2Pop = MainMenuScreen
 CALL SCREENPOP
 DEF SEG = VideoSeg&
 TopAtt = PEEK (1)
 FOR I = 161 TO 320 STEP 2: POKE I, TopAtt: NEXT
 DEF SEG
 RETURN

ClickOrStrike:
 DO: LOOP UNTIL INKEY$ <> "" OR MouseClicked
 RETURN


' ===========================================================================

Directory:

 DIM DYNAMIC ListOfDirectories$ (32)
 CALL QBox (5,36,1,"FileSpec ?? ", 20)
 COLOR FldColor MOD 16, FldColor \ 16
 M$ = "*.*"
 CALL ENTERSTRING (M$, 20, "Cap")
 U$ = "File \            \ saved \      \ at \       \  --  "
 M$ = FQFileSpec$ (M$)
 Heading$ = "HB Custom Directory of " + M$
 Heading$ = LEFT$ (Heading$, 80)

 COLOR %Cyn, %Blk: CLS: LOCATE 1, 41-LEN(Heading$)\2: PRINT Heading$

 Fls% = 0
 FlName$ = M$
 CALL DirFirst (FlName$, FileSize&, DateCode&, TimeCode&)
 IF FlName$= "" THEN
   CALL QBox (11, 30, 1, "No file "+ M$ +" found", 0)
   CALL PressAKey
   RETURN
 ELSE
   INCR Fls%
   GOSUB PrDir
   DO
     CALL DirNext (FlName$, FileSize&, DateCode&, TimeCode&)
     IF FlName$ = "" THEN EXIT LOOP
     GOSUB PrDir
     INCR Fls%
     IF CSRLIN > 23 THEN
       COLOR %Cyn, %Blk
       IF NeedDCon THEN
         PRINT "                   ... PRESS ANY KEY (OR MOUSEBUTTON) TO GO ON";
       ELSE
         PRINT "                                   ... PRESS ANY KEY TO GO ON";
       END IF
       T& = TIMER
       DO: K$ = INKEY$: LOOP UNTIL K$ <> "" OR MouseClicked OR TIMER - T& > 4
       IF K$ = CHR$ (27) THEN GOTO DoneDirectory
       COLOR %Cyn, %Blk: CLS
       LOCATE 1, 41-LEN(Heading$)\2: PRINT Heading$
     END IF
   LOOP
   PRINT
   COLOR %Cyn, %Blk: PRINT Fls% ;"Files found"
 END IF

 IF RIGHT$ (M$, 3) = "*.*" THEN  '         only show subdirectories if a full
   PRINT '                                 directory was listed
   COLOR %Wht, %Blk
   PRINT STRING$ (80, 205);
   PRINT
   PRINT "Subdirectories of "; M$;
   N = 1: D% = 1
   DO WHILE (ListOfDirectories$ (N)) <> ""
     PRINT
     IF MID$ (ListOfDirectories$ (N), 2, 1) <> "." THEN
       PRINT USING " \           \  (directory)"; ListOfDirectories$ (N);
       INCR D%
     END IF
     INCR N
   LOOP UNTIL INKEY$ <> ""
   IF D% = 1 THEN PRINT "  None"
 END IF

 CALL PressAKey

DoneDirectory:
 ERASE ListOfDirectories$
 D% = 0
 RETURN

PrDir:
 IF ColorDisplay THEN
   COLOR 2 + (7 * (CSRLIN - 2*(CSRLIN\2))), 0
 ELSE
   COLOR (7 * (CSRLIN - 2*(CSRLIN\2))), 7 - (7 * (CSRLIN - 2*(CSRLIN\2)))
 END IF
 IF LEFT$ (FlName$, 1) = "<" THEN
   INCR D%
   ListOfDirectories$ (D%) =FlName$
 ELSE
   PRINT USING U$; FlName$, DecodeDate$ (DateCode&), DecodeTime$ (TimeCode&);
   IF FileSize& < 1024 THEN
     PRINT USING "   #### bytes"; FileSize&
   ELSE
     PRINT USING "###.# KB"; FileSize& / 1024
   END IF
 END IF
 RETURN

MoveAMenuII:
   S = NextScrn2Pop
   NextScrn2Pop = 1
   CALL SCREENPOP
   NextScrn2Pop = S
   DELAY 1

   RANDOMIZE TIMER
   FOR Word = 1 TO 50
     LOCATE INT (1+RND*25), INT (1+RND*61)
     COLOR INT (1+RND*15), 0: PRINT "Important Data";
     DELAY .05
   NEXT Word

   MenuColor =  %Blk + %Background * %Gry
   BarColor =  %Ylo + %Background * %Grn

 FakePage = 1
 FakePages = 2
 D = 3: R = -4
                  ' menu lines are set up (D,R,L & Q will be the HotKeys) ...
 MenuData$(1) = "U UP"
 MenuData$(2) = "D DOWN"
 MenuData$(3) = "R RIGHT"
 MenuData$(4) = "L LEFT"
 MenuData$(5) = "Q QUIT"
 MenuData$(6) = "END"

 Choice = 1


 DO
   RESTORE MoveAMenu
   Title$ = "MOVE ME"                                    ' title
   MenuRight = R
   MenuDown = D
   CALL SCREENPUSH

   IF FakePage < FakePages THEN UsePgDn = %Yes ELSE UsePgUp = %Yes

   CALL SUPERMENU (MenuData$ (), MenuRight, MenuDown, Choice, Title$, Ky%)

   CALL SCREENPOP
   PLAY TinyBeep$

   SELECT CASE Choice
     CASE 1
      IF D > 0 THEN DECR D,2
     CASE 2
      IF D < 30 THEN IF D = 3 THEN INCR D,1 ELSE INCR D,2
     CASE 3
      IF R < 40 THEN INCR R,4
     CASE 4
      IF R > -40 THEN DECR R,4
   END SELECT
 IF Ky% = %PgDn THEN INCR FakePage: D = 20
 IF Ky% = %PgUp THEN DECR FakePage: D = 1

 IF ColorDisplay THEN
   COLOR 15,5
 ELSE
   COLOR 0,7
 END IF

 LOCATE 25,3,0
 PRINT "ARGUMENTS: Choice = ";Choice;"MenuDown = ";D;
 PRINT "   --   ";"MenuRight = ";R;

 IF Ky% = %F1 THEN GOSUB MenuHelpScrn

 IF Ky% = %F2 THEN LOCATE 23,1: COLOR 14,7: PRINT " F2 Pressed! "

 LOOP UNTIL Choice = 5 OR Ky% = %Esc
 GOSUB SetColors
 RETURN

' ======================================================================
                                 $SEGMENT
' ======================================================================

HundredItemsMenu:
 CALL SCREENPUSH '                              a multipage menu ...
 RANDOMIZE TIMER
 StartScreen =  NextScrn2Pop
 REDIM T$ (1:100)
 MenuPages = 7
 DO
   COLOR 0, RND * 8: CLS
   COLOR %Ylo, %Grn
   MenuPage = 1
   Choice = 1
   DATA "Hundred Items", "Menu", "====", Use PG-DN or just
   DATA drag bar down past, last line to see, "more choices"
   DATA END
   RESTORE HundredItemsMenu
   CALL BOXMESSAGE (2, 1, 1)
   FOR I = 1 TO 100
     T$ (I) = USING$ ("  This is item  ###", I)
   NEXT

   DO
     FOR I = 1 TO 16
       IF (MenuPage - 1) * 16 + I > 100 THEN
         MenuData$ (I) = "END"
       ELSE
         MenuData$ (I) = T$ ((MenuPage - 1) * 16 + I)
       END IF
     NEXT

     MenuData$ (17) = "END"
     MenuRight = 6 * MenuPage -10
     MenuDown = MenuPage - 1
     Title$ = "Pg-Up or Pg-Dn for more"
     IF MenuPage > 1 THEN UsePgUp = %Yes
     IF MenuPage < 7 THEN UsePgDn = %Yes

     CALL SUPERMENU (MenuData$ (), MenuRight, MenuDown, Choice, Title$, Ky%)

     SELECT CASE Ky%
       CASE %PgUp
         DECR MenuPage
         CALL SCREENPOP
         Choice = 16
       CASE %PgDn
         INCR MenuPage
         CALL SCREENPUSH
         Choice = 1
       CASE %F1
         GOSUB MenuHelpScrn
     END SELECT
   LOOP UNTIL Ky% = %Esc OR Ky% = %CR
   NextScrn2Pop = StartScreen
   CALL SCREENPOP
 LOOP UNTIL Ky% = %Esc
 ERASE T$
 RETURN MainMenu

'   -------------------------------------------------------------------

SetColors:


 IF COMMAND$ <> "" THEN
   ScrColor = ReadParamFor ("ScrC") '              ReadParamFor looks
   MenuColor = ReadParamFor ("MnuC") '            for a command line switch
   BarColor = ReadParamFor ("BarC") '            like "BoxC=3F", for example,
   WinColor = ReadParamFor ("WinC") '            which sets the color of a
   FldColor = ReadParamFor ("FldC") '            box to &H3F (like COLOR 15,3)
   BoxColor = ReadParamFor ("BoxC")  '           that is, white letters on cyan
 ELSE '                                          background ...
   MenuColor = 0:  BarColor = 0:   WinColor = 0
   FldColor = 0:   BoxColor = 0:   ScrColor = 0
 END IF

'                                 then if colors are not yet set (= 0) we give
'                                   them a default value here:
 IF ColorDisplay THEN
   IF MenuColor = 0 THEN MenuColor =  %Wht + %Background * %Blu
   IF BarColor = 0 THEN BarColor =  %Ylo + %Background * %Red
   IF WinColor = 0 THEN WinColor =  %Blu + %Background * %Gry
   IF FldColor = 0 THEN FldColor =  %Ylo + %Background * %Red
   IF BoxColor = 0 THEN BoxColor =  %Wht + %Background * %Grn
   IF ScrColor = 0 THEN ScrColor =  %Wht + %Background * %Vlt
 ELSE
   IF MenuColor = 0 THEN MenuColor =  %Blk + %Background * %Gry
   IF BarColor = 0 THEN BarColor =  %Gry + %Background * %Blk
   IF WinColor = 0 THEN WinColor =  %Blk + %Background * %Gry
   IF FldColor = 0 THEN FldColor =  %Wht + %Background * %Blk
   IF BoxColor = 0 THEN BoxColor =  %Wht + %Background * %Blk
   IF ScrColor = 0 THEN ScrColor =  %Gry + %Background * %Blk
 END IF

 RETURN

MenuHelpScrn:
 CALL SCREENPUSH
 RESTORE MenuHelpScrn

 DATA "WHAT DOES THIS MENU DO ??  --  Not much really. After all, this whole"
 DATA "program is nothing but a demo."
 DATA ""
 DATA "IN THAT CASE, HOW DO I USE A MENU LIKE THIS ??"

 DATA " I thought you'd never ask! Well, you can use ..."
 DATA "(1) THE ONE KEY METHOD: Just find which item on the menu you want."
 DATA "There will be a letter or number at the start of the"
 DATA "item. Just press it and that's all."
 DATA "(2) THE CURSOR KEY METHOD: Use the up or down cursor / arrow keys"
 DATA "to move the highlighted bar to your selection, then"
 DATA "press the ENTER key."
 DATA "(3) THE PLASTIC PEST METHOD: Your mouse can make the choice you want!"
 DATA "You don't see a mouse cursor but don't panic. Just press the left"
 DATA "button and drag the highlighted bar to your choice; then let go."
 DATA ""
 DATA "TO CANCEL THE MENU (Not make a choice):"
 DATA "Press the Escape key, or the right mouse button. (You can even press"
 DATA "the right button while you hold the left one -- or right after you"
 DATA "let it go.)"
 DATA END

       CALL BOXMESSAGE (%Center, %Center, 0)

 GOSUB ClickOrStrike
 CALL SCREENPOP
 RETURN

' -------------------------------------------------------------------------

BeepTest:
 LOCATE 22,1
 IF ColorDisplay THEN
   Ink1 = %Blu:  Paper1 = %Cyn: Ink2 = %LCyn: Paper2 = %Blu
 ELSE
   Ink1 = %Gry:  Paper1 = %Blk: Ink2 = %Blk:  Paper2 = %Gry
 END IF
 DELAY .7: PLAY LookitBeep$
 DO
   IF CSRLIN > 20 THEN
     COLOR Ink1, Paper1: CLS
     COLOR Ink2, Paper2
     LOCATE 1,22: PRINT " HB BEEP-TESTING ENVIRONMENT, V. 1.0 "
     LOCATE 22,1: CALL ClearLine
     LOCATE 23,1: CALL ClearLine
     PRINT "    Use syntax for PLAY as in BASICA and ";
     PRINT "PowerBasic, e.g. O0 G2 A4 B-4 P4 G4"
     LOCATE 24,1: CALL ClearLine
     COLOR Ink1, Paper1
     LOCATE 3,1
   END IF

   PLAY "O3"
   PRINT " PLAY ";CHR$(34);SPACE$(45);CHR$(34);
   LOCATE CSRLIN, 8
   Opt$ = "Auto Caps"
   CALL ENTERSTRING (A$, 45, Opt$)
   IF Opt$ = "ESC" OR A$ = "" THEN
      PRINT "                                   QUIT ?? ";
      Quit = GetYesOrNo
      IF Quit THEN
        EXIT LOOP
      ELSE
        GOTO There
      END IF
   ELSE
     ON ERROR GOTO Clunker
     PLAY A$
     ON ERROR GOTO Oops
     LOCATE (CSRLIN), 56
     PRINT "Print It ?";
     Yes = GetYesOrNo
     IF Yes THEN
        INPUT "                         Comment ? ",B$
        L = CSRLIN
        COLOR 16+Ink2, Paper2
        LOCATE 25,3,0: CALL ClearLine: PRINT "PRINTING ...";
        LPRINT "From HB PowerBasic Beep Tester, ";GetDate$;":"
        LPRINT "    Name: ";B$;" -- PLAY ";CHR$(34);A$;CHR$(34)
        LOCATE 25,1,1: CALL ClearLine
        COLOR Ink1, Paper1
        LOCATE L+1, 1
     ELSE
        PRINT
     END IF
   END IF
There:
 LOOP
 RETURN

Clunker:
 PLAY "O1 C2"
 A$ = ""
 RESUME NEXT

```
{% endraw %}

## INIT-U.BAS

{% raw %}
```bas

'                      ╔════════════════════════════╗
'                      ║                            ║
'                      ║         INIT_U.BAS         ║
'                      ║                            ║
'                      ║ HB's AP LIBRARY INITIALIZE ║
'                      ║                            ║
'                      ╚════════════════════════════╝


                            $COMPILE UNIT
                            $ERROR ALL OFF

 %False = 0
 %True = NOT %False

 DEFINT A-Z

 EXTERNAL RD$, VideoSeg&, ColorDisplay, NeedDCon, CursorTop, CursorBottom
 EXTERNAL OrigL, OrigC
 EXTERNAL Up2B$, Esc2Q$, F1Help$, F2Fun$, EnHelp$
 EXTERNAL InitPrt$, GraphicsChrSetOn$, GraphicsChrSetOff$, BoldPrtOn$
 EXTERNAL BoldPrtOff$, ItalicPrtOn$, ItalicPrtOff$, RegPrt$, FastPrt$
 EXTERNAL WidePrt$, BigPrtOn$, BigPrtOff$, LQPrt$, DraftPrt$
 EXTERNAL MicroPrtOn$, MicroPrtOff$, ElitePrt$, PicaPrt$, ReverseLF$


 DECLARE SUB SCREENPUSH ()
 DECLARE FUNCTION GetYesOrNo ()
 DECLARE FUNCTION IsRodent ()

SUB Initialize (PrinterType) PUBLIC

 %Star10X  = 1: %StarNX1000  = 2: %IBMX24  = 3: %LQ2500 = 4 ' Printer constants

 LOCAL VideoSegError

 Up2B$ = " ["+CHR$(24)+"] to back up "
 Esc2Q$ = " [ESC] to Quit "
 F1Help$ = " [F1] for Help "
 F2Fun$ = " [F2] for Search/Save/Clear/etc. "
 EnHelp$ = "  Keys: ["+CHR$(26)+"] & ["+CHR$(27)+"], [HOME]"+_
                " & [END], [INS] & [DELETE], ^T & ^Y. To go on: ["+CHR$(25)+"]"

 IF PrinterType = %Star10X THEN

'            <<<  PRINTER CODES FOR STAR GEMINI 10X  >>>

 InitPrt$ = CHR$(27) + "F" + CHR$(27) + "P" + CHR$(27) + "W0" + CHR$ (18)
 BoldPrtOn$ = CHR$(27) + "G"
 BoldPrtOff$ = CHR$(27) + "H"
 MicroPrt$ = CHR$(27) + "F" + CHR$(15)
 ElitePrt$ = CHR$(27)+"B"+CHR$(2)
 ItalicPrtOn$ = CHR$(27) + "4"
 ItalicPrtOff$ = CHR$(27) + "5"
 RegPrt$ = CHR$(27) + "E"
 FastPrt$ = CHR$(18) + CHR$(27) + "F"
 WidePrt$ = CHR$(14)


 ELSEIF PrinterType = %StarNX1000 THEN

'              <<<  PRINTER CODES FOR STAR NX - 1000  >>>

 InitPrt$ = CHR$(27) + "@"
 BoldPrtOn$ = CHR$(27) + "G"
 BoldPrtOff$ = CHR$(27) + "H"
 MicroPrt$ = CHR$(15)
 ElitePrt$ = CHR$(27) + "M"
 ItalicPrtOn$ = CHR$(27) + "4"
 ItalicPrtOff$ = CHR$(27) + "5"
 RegPrt$ = CHR$(27) + "E"
 FastPrt$ = CHR$(18) + CHR$(27) + "F"
 WidePrt$ = CHR$(14)

 ELSEIF PrinterType = %IBMX24 THEN

'    <<<  PRINTER CODES FOR PANASONIC KX-P1124 EMULATING PROPRINTER X24  >>>

 InitPrt$ = CHR$(27) + "I" + CHR$(0) + CHR$(27) + "[@" + CHR$(4) + CHR$(0) + _
        CHR$(0) + CHR$(0) + CHR$(17) + CHR$(1) + CHR$(27) + "F" + CHR$(27) + _
           "H" + CHR$(18)
 BoldPrtOn$ = CHR$(27) + "G"
 BoldPrtOff$ = CHR$(27) + "H"
 LQPrt$ = CHR$(27) + "I" + CHR$(2)
 MicroPrt$ = CHR$(27)+"I"+CHR$(16)
 MicroLQPrt$ = CHR$(27)+"I"+CHR$(18)
 ElitePrt$ = CHR$(27) + "I" + CHR$(8)
 EliteLQPrt$ = CHR$(27) + "I" + CHR$(10)
 ItalicPrtOn$ = ""
 ItalicPrtOff$ = ""
 RegPrt$ = CHR$(27) + "E"
 FastPrt$ = CHR$(18) + CHR$(27) + "F"
 WidePrt$ = CHR$(14)
 BigPrt$ = CHR$(27) + "[@" + CHR$(4) + CHR$(0) + CHR$(0) + CHR$(0) + _
                 CHR$(17) + CHR$(1) + CHR$(27) + "G"

 ELSEIF PrinterType = %LQ2500 THEN

'    <<<  PRINTER CODES FOR PANASONIC KX-P1124 EMULATING LQ-2500  >>>

 InitPrt$ = CHR$(27) + "@"
 GraphicsChrSetOn$ = CHR$(27) + "t" + CHR$(1) + CHR$(27) + "6"
 GraphicsChrSetOff$ = CHR$(27) + "t" + CHR$(0)
 BoldPrtOn$ = CHR$(27) + "G"
 BoldPrtOff$ = CHR$(27) + "H"
 ItalicPrtOn$ = CHR$(27) + "4"
 ItalicPrtOff$ = CHR$(27) + "5"
 RegPrt$ = CHR$(27) + "E"
 FastPrt$ = CHR$(18) + CHR$(27) + "F"
 WidePrt$ = CHR$(14)
 BigPrtOn$ = CHR$(27) + "w" + CHR$(1) + CHR$(27) + "W" + CHR$(1)
 BigPrtOff$ = CHR$(27) + "w" + CHR$(0) + CHR$(27) + "W" + CHR$(0)

 LQPrt$ = CHR$(27) + "x" + CHR$(1)
 DraftPrt$ = CHR$(27) + "x" + CHR$(0)
 MicroPrtOn$ = CHR$(15) '                        137 chr/ln
 MicroPrtOff$ = CHR$(18)
 ElitePrt$ = CHR$(27) + "M"  '                    96 chr/ln
 PicaPrt$ = CHR$(27) + "P"
 ReverseLF$ = CHR$(27) + "j" + CHR$ (30)

 END IF

'  GetMonitorType

 DEF SEG = &H40
 IF PEEK(&H63)+256*PEEK(&H64)+6 = &H3BA THEN
    ColorDisplay = %False '                      I got this from a .ASM file by
 ELSE                     '                      Mike Mefford -- tho' I don't
    ColorDisplay = %True  '                      speak ASM at all. I just took
 END IF                   '                      the address & byte to check
                          '                      for and it seems to work ...

'  CheckVideoAddress

 GOSUB SetVideoAddress
 OrigL = CSRLIN: OrigC = CSRLIN
 CALL SCREENPUSH
 GOSUB WriteAndPeek
 IF VideoSegError THEN
   COLOR 3,0: LOCATE 10,10
   PRINT "ERROR READING MONITOR TYPE. IS THIS A COLOR MONITOR?";
   ColorDisplay = GetYesOrNo
   GOSUB SetVideoAddress
   GOSUB WriteAndPeek
   IF VideoSegError THEN
     COLOR 3,0: LOCATE 12,10
     PRINT "UNABLE TO SET ADDRESS OF DISPLAY CORRECTLY FOR THIS MACHINE"
     LOCATE 14, 14: PRINT "SOME DEEP PROBLEM NEEDS CORRECTED. EXITING NOW."
     STOP
   END IF
 END IF

 NeedDCon = (IsRodent <> %False)

 EXIT SUB
'           ==================================   end of subroutine HBInit

SetVideoAddress:

 IF ColorDisplay THEN
     VideoSeg& = &HB800: CursorTop = 6: CursorBottom = 7
 ELSE
     VideoSeg& = &HB000: CursorTop = 14: CursorBottom = 15
 END IF
 RETURN


WriteAndPeek:
 COLOR 0,0: CLS
 PRINT "01234"
 DEF SEG = VideoSeg&
 FOR N = 0 TO 4
    IF VAL(CHR$(PEEK(2*N))) <> N OR PEEK (2*N+1) <> 0 THEN
      VideoSegError = %True
      RETURN
    END IF
 NEXT
 RETURN

 END SUB


```
{% endraw %}

## MENUS-U.BAS

{% raw %}
```bas

'==============================================================================
'                     THE NEW IMPROVED MENUS-U.BAS
'==============================================================================
'                                                               -- 2-18-90
                            $COMPILE UNIT
                            $ERROR ALL OFF


 DEFINT A-Z

 EXTERNAL RD$, VideoSeg&, ColorDisplay, NeedDCon
 EXTERNAL BoxColor, FldColor, WinColor, MenuColor, BarColor
 EXTERNAL PressAKeyBeep$, OopsBeep$, TinyBeep$
 EXTERNAL ButtonsActive, TimeOut
 EXTERNAL BXScreenSaved, PMScreenSaved
 EXTERNAL MenuHelpLine$()
 EXTERNAL UseRArrow, UseLArrow, UsePgUp, UsePgDn, PullDown

 %False = 0
 %True = NOT %False
 %ButtonsDefined = 0

 %ResetRodent = 0 '        mouse routine and humor (??) courtesy of Barry Erick
 %ReadRodent = 3
 %LeftButton = 1
 %RightButton = 2
 %Wht = 15
 %MouseVertSensit = 1 '                   controls mouse sensitivity in POPMENU
 %MouseHorizSensit = 10 '                controls mouse sensitivity in POPMENU
 %MouseIcon = 15 '              ... a little sun or bug character

 %MaxMenuWidth = 40

'  MENU RETURN CODES (KEY PRESSED.)
      %CR = 0:    %Esc = &H20:          %F1 = &H100:           %F2 = &H200
            %PgUp = &H400:              %PgDn = &H600
            %RArrow = &H800:            %LArrow = &HA00



 DECLARE SUB Mouse (integer, integer, integer, integer)


' ----------------------------------------------------------------------------

SUB TOPMENU (Lines% ,Choice, TLine$) PUBLIC


 LOCAL I$(), K$(), Choices%, D$, LEach, L, SpacesLeftOver, I%, B$, Att,_
  Choice$, Click, Ln, Col, RefTime&

 STATIC mcsrX, mcsrY
 IF %ButtonsDefined THEN ButtonActive = %False

TReadlines:
 DIM I$(6): DIM K$(6)
 Choices% = 0

 READ D$

 DO WHILE D$ <> "END"
   INCR Choices%
   I$(Choices%) = D$
   K$(Choices%) = LEFT$(D$,1)
   READ D$
 LOOP


 LOCATE ,,0


TSetVars:
 IF Choice = 0 THEN Choice = 1
 LEach = 80\Choices%
 SpacesLeftOver = 80 - Choices% * LEach

 FOR I% = 1 TO Choices% '                      create menu elements
  B$ = I$(I%)
  L = ((LEach - LEN(B$))/2) + 1: IF L<2 THEN L=2 '               fixed 12-88
  I$(I%) = SPACE$(LEach)
  MID$ (I$(I%), L) = B$
  IF SpacesLeftOver THEN I$(I%) = I$(I%)+" ": DECR SpacesLeftOver
 NEXT I%
'                                      making their total length = 80 chrs
 COLOR MenuColor MOD 16, MenuColor \ 16
 LOCATE 25,1: PRINT "CHOOSE MAIN PROGRAM FUNCTION FROM TOP ROW.";
               PRINT " USE ARROWS TO SELECT THEN PRESS [CR]";
 DEF SEG = VideoSeg&
 POKE 3998, ASC("."): POKE 3999,PEEK (3997)
 DEF SEG '                                  menu borders & help line printed

 LOCATE 1,1
 IF Lines% > 2 THEN PRINT STRING$ (80, 205)
 IF TLine$ <> "" THEN LOCATE 1, (40 - LEN(TLine$)\2): PRINT TLine$;
TDisp:
 Att = 16
 GOSUB TPrint '                                     print menu elements
 COLOR MenuColor MOD 16, MenuColor \ 16
 IF Lines% > 1 THEN LOCATE 3,1:PRINT STRING$ (80, 205)

TGetChoice:
 IF NeedDCon THEN
   Cheese = 0
   Choice$ = ""
   DEF SEG = VideoSeg&
   StoredChr = PEEK (Addr): StoredAttr = PEEK (Addr+1)
   DO
     CALL Mouse (%ReadRodent, Click, mcsrX, mcsrY)

     IF Addr <> mcsrX/4 + 160*INT(mcsrY/8) THEN
       POKE Addr, StoredChr
       POKE Addr+1, StoredAttr
       Addr = mcsrX/4 + 160*INT(mcsrY/8)
       StoredChr = PEEK (Addr)
       StoredAttr = PEEK (Addr+1)
       POKE Addr, %MouseIcon '                         move the mouse cursor if nec.
       POKE Addr+1, %Wht OR PEEK (Addr+1)
     END IF

     IF (Click = %LeftButton) AND (mcsrY < 60) THEN '   you clicked on top bar:
       Choice = INT (mcsrX * Choices% / 640) + 1  '       so move cursor ...
       Att = 16
       GOSUB TPrint '                                  &  reprint menu elements
       IF mcsrY > 0 AND mcsrY < 30 THEN
         Choice$ = CHR$(13)
         POKE Addr, StoredChr
         POKE Addr+1, StoredAttr
         EXIT LOOP
       END IF
     END IF

   IF ButtonsDefined THEN                        ' ---------------------------|
     IF Click AND mcsrY > 112 THEN
       Ln = mcsrY / 8 + 1 '                    8 mickeys per line
       Col = mcsrX / 8 + 1 '                     8 mickeys per column
       IF Ln > 18 AND Ln < 25 THEN
         IF Col > 8 AND Col < 23 THEN ButtonActive = %DirButton: EXIT LOOP
         IF Col > 30 AND Col < 44 THEN ButtonActive = %TreeButton: EXIT LOOP
       END IF
       IF (Ln > 14 AND Ln < 18) AND (Col > 68 AND Col < 75) THEN _
                                         ButtonActive = %HelpButton: EXIT LOOP
     END IF

   END IF                                 ' ----------------------------------|

     IF TimeOut AND (TIMER > RefTime& + TimeOut) THEN
       TimeUp = %True
       EXIT LOOP
     END IF

   LOOP UNTIL INSTAT
'   LPRINT "ButtonActive ="; ButtonActive
   IF Choice$ = "" THEN Choice$ = INKEY$
   DEF SEG

 ELSE

   DO
     IF TimeOut AND (TIMER > RefTime& + TimeOut) THEN
       TimeUp = %True
       EXIT LOOP
     END IF
   LOOP UNTIL INSTAT

'                                                         ****************
   Choice$ = INKEY$ '                                   ** GET KEYSTROKE **
'                                                         ****************
 END IF

 IF TimeUp OR ButtonActive THEN BEEP:BEEP: Choice = 1 : GOTO TDone

 IF LEN(Choice$) > 1 THEN '                        you pressed an arrow key ...
   SELECT CASE RIGHT$(Choice$,1)
     CASE CHR$(&H4D)
       GOSUB TRightArrow
     CASE CHR$(&H4B)
       GOSUB TLeftArrow
     CASE CHR$(&H50)
       Choice$ = CHR$(13)
     CASE CHR$(59)
       TLine$ = "HELP!"
       GOTO TDone
     CASE ELSE
       GOTO TError
   END SELECT
 END IF

 IF Choice$ = CHR$(13) THEN Choice$ = K$(Choice): GOTO TDone
 IF Choice$ = CHR$(27) THEN Choice = Choices%: GOTO TDone
 Choice$ = UCASE$(Choice$)
 FOR I = 1 TO Choices%
   IF Choice$ = K$(I) THEN Choice = I:GOTO TDone
 NEXT
 GOTO TError

TError:

 PLAY OopsBeep$
 GOTO TGetChoice

TLeftArrow:
   DECR Choice
   IF Choice < 1 THEN Choice = Choices%
   RETURN TDisp

TRightArrow:
   INCR Choice
   IF Choice > Choices% THEN Choice = 1
   RETURN TDisp

TDone:
  Att = 0: GOSUB TPrint
  TLine$ = RTRIM$ (LTRIM$ (I$ (Choice)))
  LOCATE ,,1
  EXIT SUB

TPrint:
 LOCATE Lines%-1,1
'                          IF Choice < 1 OR Choice > Choices% THEN Choice = 1
 FOR I% = 1 TO Choices%
   IF I% = Choice THEN
     COLOR Att + (BarColor MOD 16), BarColor \ 16
   ELSE
     COLOR MenuColor MOD 16, MenuColor \ 16
   END IF
   PRINT I$(I%);
 NEXT
 RETURN

 END SUB                                                    REM TOPMENU

' ==============================================================================

SUB POPMENU (TopKey$,MenuRight,MenuDown,Choice,MLine$,MCode$) PUBLIC
'   ====

 LOCAL Choices%, D$,A$, Maxx, Title$, MKeyPressed$, PopRead$ ()
 DIM DYNAMIC PopRead$ (24)


MReadlines:

 Choices% = 0: A$ = ""

 READ D$ '                   read 2 $'s- the menu line & the assoc. memo

 DO WHILE D$ <> "END" AND A$ <> "END" '                     (from data list)
   READ A$
   IF Choices% < 24 THEN INCR Choices% '                          count 1 item
   PopRead$(Choices%) = D$
   IF TopKey$ <> "" THEN PopRead$(Choices%) = "  " + PopRead$(Choices%)
   MenuHelpLine$(Choices%) = A$                          '     plug arrays --
   READ D$ '                                                 ... longest $ is
 LOOP
 PopRead$ (Choices% + 1) = "END"

 Title$ = MLine$

       CALL SUPERMENU (PopRead$ (), MenuRight, MenuDown, Choice, Title$, Ky%)

 MCode$ = MenuHelpLine$(Choice)
 MLine$ = PopRead$ (Choice)
 ERASE PopRead$

END SUB                                                           REM POPMENU
'______________________________________________________________________________

SUB SUPERMENU (MenuData$ (), MenuRight, MenuDown, Choice, Title$, Ky%) PUBLIC
'   ====
'
'                               ===================
'
'     BRIEF SYNTAX:   MenuData$ () ARRAY holds items in menu
'
'          ferexample, MenuData$ (1) = "L LOAD" (pressing L will select)
'                or ... MenuData$ (1) = "  LOAD" (pressing 1 will select)
'
'           After all menu lines are defined, the next array item must be "END"
'
'                     MenuRight may be >0 for right of center, <0 for left.
'                     MenuDown = 0 places menu at screen top; >24 centers it.
'
'                     Choice is usually set as 1 before calling menu
'
'                     Title$ is just a menu title
'
'
'
'*** AFTER SUPERMENU CALL: Choice will hold the choice # (according to array passed)
'
'                     Ky% will encode the key used to exit the menu process --
'                       %CR, %Esc, %PgUp, %PgDn, %RArrow, %LArrow, %F1, %F2
'
'        (PgUp key will only function if the global var UsePgUp = %Yes, and
'         similarly for the others. If there is another page, cursoring or
'         mousing past the bottom of the displayed page will simulate
'         pressing PgDn, etc. All these globals are reset to %False after exit,
'         but UseF1 isn't.
'



 LOCAL Choices%, D$, A$, K$(), Longest, HelpLines, TopKey
 LOCAL Wid, Height, K$, CornerLin, CornerCol, N, C
 DIM K$ (24)
 Ky% = 0


'      ======= START; GET WIDTH OF ITEMS AND HOW MANY ===============

 LOCATE ,,0
 ArrayNum = 1
 DO UNTIL UCASE$ (RTRIM$ (LTRIM$ (MenuData$(ArrayNum) ))) =  "END"
   INCR Choices%
   IF LEN (RTRIM$ (MenuData$(ArrayNum))) > Longest THEN_
                      Longest = LEN (RTRIM$ (MenuData$(ArrayNum)))
     'keep track of how long the items are ...
   K$ (ArrayNum) = LEFT$ (MenuData$ (ArrayNum), 1)
   IF MenuHelpLine$ (ArrayNum) <> "" THEN INCR HelpLines
   INCR ArrayNum
 LOOP
 DECR Longest, 2  '          clip off the 2 chrs which are not part of the item

'      ==================== DO CALCULATIONS FOR MENU ===========================

MSetVars:

 VCentered = (MenuDown > 23) '                           trap hi MenuDown value
 Wid = Longest + 6  '                                       compute box size --
 Height = Choices%+2
 MenuDown = MAX% (0, MenuDown)
 MenuDown = MIN% ((23-Choices%), MenuDown)
 MenuRight = MIN% ((40 - Wid\2), MenuRight)
 MenuRight = MAX% (-39, MenuRight)
 CornerCol = INT((80-Wid)/2 + MenuRight)'            & the top left corner --
 CornerCol = MAX% (1, CornerCol)
 CornerLin = INT(1 + MenuDown)
 CornerLin = MAX% (1, CornerLin)
 IF VCentered THEN CornerLin = (24-Height)/2 + 1 '  trap hi MenuDown value
 IF TopKey$ <> "" THEN TopKey = ASC(TopKey$)'         (means center vertically)
 BAR$ = "\"+SPACE$(Wid-8)+"\"
 Choice = MAX% (1, Choice)
 Choice = MIN% (Choices% , Choice)
 IF LEFT$ (MenuData$ (1), 1) = " " THEN
   IF Choices% > 10 THEN TopKey = ASCII ("A") ELSE TopKey = ASCII ("1")
 END IF

MPrint:

 L0 = CSRLIN: C0 = POS
 COLOR MenuColor MOD 16, MenuColor \ 16

'      =================== BEGIN PRINTING MENU =====================

 LOCATE CornerLin,CornerCol: PRINT CHR$(201); STRING$((Wid-1),205); CHR$(187)
 IF MLine$ <> "" THEN LOCATE CornerLin,CornerCol+2: PRINT " ";MLine$;" "
'                                                top of menu frame is complete

 '                                                             print menu lines
 FOR N = 1 TO Choices%
   IF TopKey > 0 THEN K$ (N) = CHR$(TopKey-1+N)
   LOCATE N+CornerLin, CornerCol
   PRINT CHR$(186); " "; K$(N); " - ";
   PRINT USING BAR$; MID$(MenuData$(N),3); : PRINT CHR$(186);
 NEXT
 '                                                             print bottom bar
 LOCATE N+CornerLin,CornerCol:PRINT CHR$(200); STRING$((Wid-1),205); CHR$(188);

 IF PullDown THEN '                                  hold here if clicking ...
   Click = %False
   DO
     IF NeedDCon THEN CALL Mouse (%ReadRodent, Click, X, Y)
     IF Y0 = 0 THEN Y0 = Y
     IF Click THEN
       IF Y - Y0 > %MouseVertSensit THEN
         MouseNotMoved = %False '                     unless mouse moved down.
         EXIT LOOP
       ELSE
         MouseNotMoved = %True
       END IF
     END IF
   LOOP WHILE Click
   IF MouseNotMoved THEN Choice = 0: GOTO ExitMenu
 END IF

 GOSUB DrawHighlightedBar

MGetChoice:
 DO '                                         ********************************
   Click = %False '                          ** GET KEYSTROKE OR MOUSE INPUT **
   WasClick = %False '                        ********************************
   Choice$ = ""
   DO
     IF NeedDCon THEN
       CALL Mouse (%ReadRodent, Click, X, Y)
       IF Click THEN
         IF Click >= %RightButton THEN
           Choice$ = CHR$(27)
           EXIT LOOP
         END IF
         IF WasClick THEN
           IF X - X0 > %MouseHorizSensit THEN
             Choice$ = CHR$(0) + CHR$ (&H4D)
           ELSEIF X0 - X > %MouseHorizSensit THEN
             Choice$ = CHR$(0) + CHR$ (&H4B)
           ELSEIF Y - Y0 > %MouseVertSensit THEN
             Choice$ = CHR$(0) + CHR$ (&H50)
           ELSEIF Y0 - Y > %MouseVertSensit THEN
             Choice$ = CHR$(0) + CHR$ (&H48)
           END IF
         END IF
         X0 = X: Y0 = Y: WasClick = Click
       ELSE
         IF WasClick THEN
           Choice$ = CHR$(13)
           FOR I = 1 TO 5 '                            this builds in a slight
             DELAY .05 '                               delay (1/4 sec.) after
             CALL Mouse (%ReadRodent, Click, X, Y) '   mouse button is released
             IF Click >= %RightButton THEN '           during which the right
               Choice$ = CHR$(27) '                    (cancel) button can be
               EXIT FOR '                              pressed if you change
             END IF '                                  your mind.
           NEXT
         ELSE
           Choice$ = UCASE$(INKEY$)
         END IF
       END IF
     ELSE
       Choice$ = UCASE$(INKEY$)
     END IF
     OldChoice = Choice
   LOOP UNTIL Choice$ <> ""

 '                  ======================== CHOICE HAS BEEN MADE ...

   SELECT CASE Choice$
         CASE CHR$ (0 ) + CHR$(&H48 )
           GOSUB MUpArrow
         CASE CHR$ (0 ) + CHR$(&H50 )
           GOSUB MDownArrow
         CASE CHR$ (0 ) + CHR$(&H4B )
           IF UseLArrow THEN GOSUB MLArrow
         CASE CHR$ (0 ) + CHR$(&H4D )
           IF UseRArrow THEN GOSUB MRArrow
         CASE CHR$ (0 ) + CHR$(&H3B )
           GOSUB MF1Key
'    deleted       CASE CHR$ (0 ) + CHR$(&H3C )
'    deleted         GOSUB MF2Key
         CASE CHR$ (0 ) + CHR$(&H49 )
           IF UsePgUp THEN GOSUB MPgUpKey
         CASE CHR$ (0 ) + CHR$(&H51 )
           IF UsePgDn THEN GOSUB MPgDnKey
         CASE CHR$(13)
            Choice$ = K$(Choice) '                    you pressed [CR]

         CASE CHR$(27)'     you pressed [ESC]. Sets return var as 0 and exits.
'                           First erase the highlighted bar by rewriting it ...
            COLOR MenuColor MOD 16, MenuColor \ 16
            LOCATE (Choice+CornerLin),(CornerCol+1)
            PRINT " ";K$(Choice);" - ";
            PRINT USING BAR$;MID$(MenuData$(Choice),3);
            Choice = 0
            Ky% = %Esc
            EXIT LOOP ' --------------------------------------------------------
   END SELECT

'                                                              & chose Choice$
'                Your entry is checked vs. list of K$'s,  If it's valid
'                                             then Choice is set appropriately.
     FOR I = 1 TO Choices%
       IF Choice$ = K$(I) THEN Choice = I: EXIT LOOP
     NEXT

 LOOP

ExitMenu:
 IF Choice > 0 THEN GOSUB MoveBar
 MenuDown = 0: MenuRight = 0
 UsePgUp = 0: UsePgDn = 0: UseRArrow = 0: UseLArrow = 0: PullDown = 0
 FOR N = 1 TO Choices%: MenuHelpLine$(N) = "": NEXT
 LOCATE L0,C0,1
 EXIT SUB



MoveBar:
   COLOR MenuColor MOD 16, MenuColor \ 16 '                 NOTE: THIS IS ONE
   LOCATE (OldChoice+CornerLin),(CornerCol+1) '             OF THOSE DREADED
   PRINT " ";K$(OldChoice);" - "; '                         TWO-HEADED SUB-
   PRINT USING BAR$;MID$(MenuData$(OldChoice),3); '         ROUTINES. MoveBar
'                                                           RUNS RIGHT INTO
DrawHighlightedBar: '                                       DrawHighLightedBar!
   COLOR BarColor MOD 16, BarColor \ 16 '                   (works just Fine!)
   LOCATE (Choice + CornerLin),(CornerCol+1)
   PRINT " ";K$(Choice);" - ";
   PRINT USING BAR$;MID$(MenuData$(Choice),3);
                                           ''  print bottom line on screen
   IF HelpLines THEN GOSUB MClearLine
   IF LEN(MenuHelpLine$(Choice)) > 9 THEN
       MenuHelpLine$(Choice) = Left$(MenuHelpLine$(Choice), 78)  ' trap long ln
       COLOR MenuColor MOD 16, BarColor \ 16
       LOCATE 25, (41-LEN(MenuHelpLine$(Choice))/2)
       PRINT MenuHelpLine$(Choice);
   END IF
   RETURN

MUpArrow:
   DECR Choice
   IF Choice < 1 THEN
     IF PullDown THEN
        '                                   an up-arrow when the bar is at
       Choice = 0 '                           the top will clear the menu
       RETURN ExitMenu
     ELSEIF UsePgUp THEN
       Ky% = %PgUp
       RETURN ExitMenu
     ELSE
       Choice = Choices%
     END IF
   END IF
   GOSUB MoveBar: RETURN

MDownArrow:
   INCR Choice
   IF Choice > Choices% THEN
     IF PullDown THEN
       DECR Choice
     ELSEIF UsePgDn THEN
'                             erase the highlighted bar by rewriting it ...
       COLOR MenuColor MOD 16, MenuColor \ 16
       DECR Choice
       LOCATE (Choice + CornerLin), (CornerCol+1)
       PRINT " "; K$ (Choice); " - ";
       PRINT USING BAR$; MID$ (MenuData$ (Choice), 3);
       Choice = 0
       Ky% = %PgDn
       RETURN ExitMenu
     ELSE
       Choice = 1
     END IF
'                               IF PullDown THEN DECR Choice ELSE Choice = 1
   END IF
   GOSUB MoveBar: RETURN

MF1Key:
   Ky% = %F1
   Choice = 0 '                  just as if ESC had been pressed
   RETURN ExitMenu

MF2Key:
   Ky% = %F2
   RETURN ExitMenu

MPgUpKey:
   Ky% = %PgUp
   RETURN ExitMenu

MPgDnKey:
   Ky% = %PgDn
   RETURN ExitMenu

MRArrow:
   Ky% = %RArrow
   RETURN ExitMenu

MLArrow:
   Ky% = %LArrow
   RETURN ExitMenu

MClearLine:
   LOCATE 25,1
   PRINT STRING$ (80," ");
   RETURN

 END SUB                                                         REM SUPERMENU
```
{% endraw %}

## MISC-U.BAS

{% raw %}
```bas

'                      ╔════════════════════════════╗
'                      ║                            ║
'                      ║         MISC_U.BAS         ║
'                      ║                            ║
'                      ║   H.B. LIBRARY LEFTOVERS   ║
'                      ║                            ║
'                      ╚════════════════════════════╝


                            $COMPILE UNIT
                            $ERROR ALL OFF

  %False = 0
  %True = NOT %False
  %FLAGS = 0:  %AX = 1:  %BX = 2:  %CX = 3:  %DX = 4
                         %SI = 5:  %DI = 6:  %BP = 7:  %DS = 8:  %ES = 9

 %ReadRodent = 3
 %CheckScreensSaved = %False

 DEFINT A-Z

 DECLARE SUB SUPERMENU (string array,integer,integer,integer,string,integer)

 EXTERNAL Footer$, CurrLine, LineGroup, Page%, NewRec, KeyField, PullDown
 EXTERNAL OopsBeep$, InitPrt$, FontCode$, NextScrn2Pop, ScrnStackSize, Foo
 EXTERNAL ScreenStack$ (), VideoSeg&, OrigL, OrigC,  ReverseLF$, NeedDCon
 EXTERNAL MenuHelpLine$()


'            _____________________________________________________


SUB SCREENPUSH PUBLIC

 DEF SEG = VideoSeg&

 INCR NextScrn2Pop
                       $IF %CheckScreensSaved

 FOR N = 1 TO 9: LPRINT ReverseLF$;: NEXT
 LPRINT "SCREEN PUSHED: "; NextScrn2Pop
 FOR N = 1 TO 9: LPRINT: NEXT
                                                $ENDIF
 IF NextScrn2Pop =< ScrnStackSize THEN
   ScreenStack$ (NextScrn2Pop) = PEEK$ (0, 4000)
 ELSE
   BSAVE RD$ + "SCRN_" + LTRIM$(STR$(NextScrn2Pop)), 0, 4000
 END IF

 DEF SEG
 END SUB                                                      REM PUSHSCREEN
'            _____________________________________________________

SUB SCREENPOP PUBLIC
 DEF SEG = VideoSeg&
                       $IF %CheckScreensSaved
 FOR N = 1 TO 9: LPRINT ReverseLF$;: NEXT
 LPRINT "                                SCREEN POPPED: "; NextScrn2Pop
 FOR N = 1 TO 9: LPRINT: NEXT
                                            $ENDIF
 IF NextScrn2Pop < 1 THEN
   FOR N = 1 TO 10: LOCATE 2*N, 5*N: PRINT "SCREEN STACK UNDERFLOW": NEXT
 ELSEIF NextScrn2Pop =< ScrnStackSize THEN
   POKE$ 0, ScreenStack$ (NextScrn2Pop)
 ELSE
   BLOAD RD$ + "SCRN_" + LTRIM$(STR$(NextScrn2Pop))
 END IF

 DECR NextScrn2Pop

 DEF SEG
 END SUB                                                      REM POPSCREEN
'            _____________________________________________________




SUB RestoreDOSScreen PUBLIC
 NextScrn2Pop = 1
 CALL SCREENPOP
 LOCATE OrigL, OrigC
 END SUB

' ============================================================================


' =============================================================================




SUB PRINTLINE (L$) PUBLIC
 LOCAL NL, I

 NL = %PageLength - %TopMargin - %BottomMargin
 IF Footer$ <> "" THEN DECR NL, 2
 IF Header$ <> "" THEN DECR NL, 2

'                    line comes in as a passed string. increase line counter ...
 INCR CurrLine
 IF UCASE$ (L$) = "START" THEN
   CurrLine = 1
   Page% = 1
   LPRINT  InitPrt$ + FontCode$;
   FOR I = 1 TO %TopMargin: LPRINT: NEXT

'   IF PAGE IS FULL, OR DOESN'T HAVE ROOM FOR LineGroup LINES, PRINT FOOTER ...

 ELSEIF CurrLine + LineGroup > NL OR UCASE$ (L$) = "END" THEN
    IF Footer$ <> "" THEN GOSUB PPrintFoot
    INCR Page%: CurrLine = 1: LPRINT CHR$(12)
'                       ... AND IF THERE'S MORE TO PRINT, ALSO A HEADER ...
    IF UCASE$(L$) <> "END" AND Header$ <> "" THEN_
                      FOR I = 1 TO %TopMargin: LPRINT: NEXT: GOSUB PPrintHead
 END IF

'                                               NOW PRINT THE LINE AND EXIT
 IF UCASE$(L$) = "END" THEN
   Page% = 0
   LPRINT  InitPrt$;
 ELSEIF UCASE$(L$) <> "START" THEN
   LPRINT L$
 END IF
 EXIT SUB

PPrintHead:
   LPRINT Header$;
   IF INSTR (UCASE$ (RIGHT$(Header$,8)), "PAGE") THEN
     LPRINT Page%
   ELSE
     LPRINT
   END IF
   LPRINT: RETURN

PPrintFoot:
   LPRINT
   LPRINT Footer$;
   IF INSTR (UCASE$ (RIGHT$(Footer$,8)), "PAGE") THEN
     LPRINT Page%
   ELSE
     LPRINT
   END IF
   RETURN

     END SUB                                              REM PRINTLINE


' =========================================================================


 FUNCTION GetFileFunction$ PUBLIC

 LOCAL Choice, Title$, Ky%, FileFun$ ()
 DIM DYNAMIC FileFun$ (24)


 IF NewRec THEN
   IF KeyField THEN GOSUB KeyFldNewRec ELSE GOSUB NonkeyfldNewRec
 ELSE
   IF KeyField THEN GOSUB KeyFldExistRec ELSE GOSUB NonkeyFldExistRec
 END IF

 Choice = 1

      CALL SCREENPUSH
      CALL SUPERMENU (FileFun$ (), 0, 30, Choice, "FILE FUNCTION", Ky%)
      CALL SCREENPOP

 IF Choice = 0 THEN
   GetFileFunction$ = ""
 ELSE
   GetFileFunction$ = LEFT$ (FileFun$(Choice), 1)
 END IF

 ERASE FileFun$

 EXIT FUNCTION

KeyFldNewRec:
 FileFun$(1) = "C CLEAR DATA FIELDS"
 MenuHelpLine$(1) = "clear all entries in this window, giving a blank record"
 FileFun$(2) = "F FIND A MATCH"
 MenuHelpLine$(2) = "match entry in this field as closely as possible"
 FileFun$(3) = "S SAVE RECORD"
 MenuHelpLine$(3) = "write data shown into a new record"
 FileFun$(4) = "D DELETE RECORD"
 MenuHelpLine$(4) = "erase this record"
 FileFun$(5) = "END"
 RETURN

KeyFldExistRec:
 FileFun$(1) = "C CLEAR DATA FIELDS"
 MenuHelpLine$(1) = "clear all entries in this window, giving a blank record"
 FileFun$(2) = "S SAVE RECORD"
 MenuHelpLine$(2) = "update this record using entries shown"
 FileFun$(3) = "V VIEW MEMOS"
 MenuHelpLine$(3) = "read extra notes on this entry if any; edit / change; or add"
 FileFun$(4) = "D DELETE RECORD"
 MenuHelpLine$(4) = "erase this record"
 FileFun$(5) = "END"
 RETURN

NonkeyFldNewRec:
 FileFun$(1) = "C CLEAR DATA FIELDS"
 MenuHelpLine$(1) = "clear all entries in this window, giving a blank record"
 FileFun$(2) = "S SAVE RECORD"
 MenuHelpLine$(2) = "write data shown into a new record"
 FileFun$(3) = "D DELETE RECORD"
 MenuHelpLine$(3) = "erase this record"
 FileFun$(4) = "END"
 RETURN

NonkeyFldExistRec:
 FileFun$(1) = "C CLEAR DATA FIELDS"
 MenuHelpLine$(1) = "clear all entries in this window, giving a blank record"
 FileFun$(2) = "S SAVE RECORD"
 MenuHelpLine$(2) = "update this record using entries shown
 FileFun$(3) = "V VIEW MEMOS"
 MenuHelpLine$(3) = "read extra notes on this entry if any; edit / change; or add"
 FileFun$(4) = "D DELETE RECORD"
 MenuHelpLine$(4) = "erase this record
 FileFun$(5) = "END"
 RETURN

 END FUNCTION

'=============================================================================

 FUNCTION IsBlank (W$) PUBLIC
   IF RTRIM$ (W$) = "" THEN
     IsBlank = %True
   ELSE
     IsBlank = %False
   END IF
 END FUNCTION


FUNCTION GetAttr PUBLIC
 DEF SEG = VideoSeg&
 GetAttr = PEEK ((80*CSRLIN-80 + POS - 1) * 2) + 1
 DEF SEG
 END FUNCTION


FUNCTION IsRodent PUBLIC    '     finds if you have a rodent and also resets it
 REG %AX, %ResetRodent
 CALL INTERRUPT &H33
 IsRodent = REG(%AX) '                                          true if present
END FUNCTION


SUB Mouse(MV1, MV2, MV3, MV4) PUBLIC

 REG %AX, MV1: REG %BX, MV2: REG %CX, MV3: REG %DX, MV4
 CALL INTERRUPT &H33
 MV1 = REG(%AX): MV2 = REG(%BX): MV3 = REG(%CX): MV4 = REG(%DX)

END SUB
' _________________________________________________________________________

FUNCTION MouseClicked PUBLIC
 LOCAL MC, X, Y
 IF NeedDCon THEN
   CALL Mouse (%ReadRodent, MC, X, Y)
   MouseClicked = MC
 ELSE
   MouseClicked = 0
 END IF
END FUNCTION
' _________________________________________________________________________

FUNCTION GetCurrentDrive$ PUBLIC
   REG %AX, &H1900
   CALL INTERRUPT &H21
   GetCurrentDrive$ = CHR$ ((REG (%AX) AND &B00001111) + 65) + ":"

END FUNCTION

FUNCTION GetCurrentDir$ (Drv$) PUBLIC
   STATIC Dummy$
   Dummy$ = SPACE$ (64)

   REG %AX, &H4700

   IF Drv$ = "" THEN
     REG %DX, 0 '     for default drive
   ELSE
     REG %DX, (ASC(UCASE$(Drv$))-64)
   END IF

   REG %DS, STRSEG (Dummy$)
   REG %SI, STRPTR (Dummy$)

   CALL INTERRUPT &H21

   GetCurrentDir$ = "\" + EXTRACT$ (Dummy$, CHR$(0))

END FUNCTION '             ==========================        GetCurrentDir$ ()

FUNCTION GetFreeSpace! (Drv$) PUBLIC
   IF Drv$ = "" THEN
     REG %DX, 0 '     for default drive
   ELSE
     REG %DX, (ASC(UCASE$(Drv$))-64)
   END IF
   REG %AX, &H3600  '     dos function number &H36 into AH
   CALL INTERRUPT &H21
   GetFreeSpace! = CSNG (REG(%BX)) * REG (%CX) * REG (%AX)
'                     free clusters  * byt/sect  * sect/cluster

END FUNCTION '                    ----------

FUNCTION ReadParamFor (A$) PUBLIC ' this reads parameters from the command tail
 LOCAL L, N
 L = INSTR (COMMAND$, A$)
 IF L THEN
   N = VAL ("&H"+MID$ (COMMAND$, L + 5, 2))
   IF N THEN ReadParamFor = N
 END IF
 END FUNCTION '                    ----------

SUB ClearLine PUBLIC

 LOCAL CLL0, CLC0

 CLL0 = CSRLIN
 CLC0 = POS
 PRINT STRING$ ((81-CLC0)," ");    ' this almost fills the line ...
 LOCATE CLL0, CLC0

 END SUB '                    ----------  

' ============================================================================


SUB DirFirst (F$, FileSize&, DateCode&, TimeCode&) PUBLIC

 LOCAL DTASeg&, AttrOffset&, FlNOffset&, SearchErr, FlN$, N

 FlN$ = F$ + CHR$(0)
 REG %DS, STRSEG (FlN$)
 REG %DX, STRPTR (FlN$)
 REG %CX, &H17
 REG %AX, &H4E00
 CALL INTERRUPT &H21
 SearchErr = REG(%AX)
 IF SearchErr THEN
    F$ = ""
    EXIT SUB
 END IF

 REG %AX, &H2F00

    CALL INTERRUPT &H21

 DTAseg& = REG(%ES)
 AttrOffset& = REG(%BX) + &H15
 FlNOffset& = REG(%BX) + &H1E
 TimeOffset& = REG(%BX) + &H16
 DateOffset& = REG(%BX) + &H18
 SizeOffset& = REG(%BX) + &H1A

 FlN$ = ""
 DEF SEG = DTAseg&
 N = 0

 DO UNTIL PEEK (FlNOffset& + N) = 0 '          read the ASCIIZ file-name string
   FlN$ = FlN$ + CHR$ (PEEK (FlNOffset& + N))
   INCR N
 LOOP

 IF (PEEK(AttrOffset&) AND 16) = 16 THEN '        bracket if a subdirectory
    FlN$ = "<"+FlN$+">"
 END IF

 FileSize& = CVL (PEEK$ (SizeOffset&, 4))
 DateCode& =  PEEK (DateOffset&) + &H100 * PEEK (DateOffset& + 1)
 TimeCode& =  PEEK (TimeOffset&) + &H100 * PEEK (TimeOffset& + 1)

 DEF SEG

 F$ = FlN$

 END SUB

'                        ===========================



 SUB DirNext (F$, FileSize&, DateCode&, TimeCode&) PUBLIC

 LOCAL FlN$, DTAseg&, FlNOffset&, AttrOffset&, N

 REG %AX, &H4F00
 CALL INTERRUPT &H21
 IF REG(%AX) = 18 THEN
    F$ = ""
    EXIT SUB
 END IF
 REG %AX, &H2F00
 CALL INTERRUPT &H21
 DTAseg& = REG(%ES)
 AttrOffset& = REG(%BX) + 21
 FlNOffset& = REG(%BX) + &H1E
 TimeOffset& = REG(%BX) + &H16
 DateOffset& = REG(%BX) + &H18
 SizeOffset& = REG(%BX) + &H1A

 FlN$ = ""
 DEF SEG = DTAseg&

 DO UNTIL PEEK (FlNOffset& + N) = 0
   FlN$ = FlN$ + CHR$(PEEK(FlNOffset& + N))
   INCR N
 LOOP

 IF (PEEK(AttrOffset&) AND 16) = 16 THEN
    FlN$ = "<"+FlN$+">" '                  subdirs will come back w/ brackets
 END IF

 FileSize& = CVL (PEEK$ (SizeOffset&, 4))
 DateCode& =  PEEK (DateOffset&) + &H100 * PEEK (DateOffset& + 1)
 TimeCode& =  PEEK (TimeOffset&) + &H100 * PEEK (TimeOffset& + 1)
 DEF SEG
 F$ = FlN$

END SUB

'                   ========================================


FUNCTION DecodeDate$ (DateCode&) PUBLIC
 LOCAL M, D, Y
 Y = DateCode&\512
 M = (DateCode& MOD 512) \ 32
 D = DateCode& MOD 32
 DecodeDate$ = LTRIM$ (STR$ (M)) + "-" +_
                   STRING$ (1 + (D > 9), "0") + LTRIM$ (STR$ (D)) + "-" +_
                               LTRIM$ (STR$ (Y + 80))

END FUNCTION '         ============================      DecodeDate$ ()


FUNCTION DecodeTime$ (TimeCode&) PUBLIC
 LOCAL H, H24, M
 H24 = INT(TimeCode&\2048)
 IF H24 > 12 THEN
    H = H24 - 12
    pm = %True
 ELSE
    H = H24
    pm = %False
 END IF
 IF H = 0 THEN H = 12
 M = (TimeCode&-(CLNG(H24)*2048))\32

 DecodeTime$ = STRING$ (1 + (H > 9), " ") + LTRIM$ (STR$ (H)) + ":" +_
                   STRING$ (1 + (M > 9), "0") + LTRIM$ (STR$ (M)) +_
                               MID$ (" pm am", pm*3+4, 3)
END FUNCTION '         ============================      DecodeTime$ ()


FUNCTION EXIST (F$) PUBLIC

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

END Function '            ==================        EXIST ()


FUNCTION FQFileSpec$ (A$) PUBLIC

 LOCAL CurrentDir$, CurrentDrv$             ' Of course there's a DOS function
 CurrentDrv$ = GetCurrentDrive$             ' that does something like this --
 CurrentDir$ = GetCurrentDir$ ("")          ' maybe exactly this! I never did
                                            ' try it out. So this may be the
 A$ = REMOVE$ (A$, " ")                     ' hard way!
 IF INSTR (A$, ANY "^/,<>+()|"+CHR$(34)) THEN
   FQFileSpec$ = "": EXIT FUNCTION
 END IF

 SELECT CASE INSTR (A$, ":")
   CASE 0
     IF INSTR (A$, "\") THEN
       A$ = CurrentDrv$ + A$
     ELSE
       A$ = CurrentDrv$ + CurrentDir$ +"\"+ A$
     END IF
     EXIT SELECT
   CASE 2
     IF INSTR (A$, "\") = %False THEN
       CurrentDir$ = GetCurrentDir$ (LEFT$(A$,1))
     END IF
     EXIT SELECT
   CASE ELSE
     PLAY "O0 C64": FQFileSpec$ = "": EXIT FUNCTION
 END SELECT
 IF INSTR (A$, "\") = %False THEN
   IF RIGHT$ (A$, 1) = ":" THEN
     A$ = A$ + CurrentDir$ + "\"
   ELSEIF CurrentDir$ = "\" THEN
     A$ = LEFT$ (A$, 2) + "\" + MID$ (A$, 3)
   ELSE
     A$ = LEFT$ (A$, 2) + CurrentDir$ + "\" + MID$ (A$, 3)
   END IF
 END IF

 IF RIGHT$ (A$, 1) = "\" THEN A$ = A$ + "*.*"

 REPLACE "\\" WITH "\" IN A$
 FQFileSpec$ = A$

END FUNCTION '                 =========                      FQFileSpec$


```
{% endraw %}

## PUBVARS.BAS

{% raw %}
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
{% endraw %}

## PWW.BAS

{% raw %}
```bas



'               SCREEN CODER -- HB. Started 7-26-87

 DIM LineBuffer$(30): DIM FL(30): DIM FC(30)
 KEY(10) ON
 ON KEY (10) GOSUB QT
 COLOR 14,0
 CLS


Start:
 LOCATE 25,1: PRINT "[F10] = Quit     [F1] = Help";: LOCATE 1,1
 COLOR 15,2:LOCATE 3,23
 PRINT " THE HB POP-UP WINDOW CODE WRITER "
 COLOR 14,0
 IF COMMAND$ <> "" THEN
    FlNm$ = COMMAND$
 ELSE
    ON ERROR GOTO NoSuchInputFl
    FILES "*.PW"
    ON ERROR GOTO 0
    PRINT  '                                    get a directory ...

    COLOR 9,0: INPUT "NAME OF WINDOW DESIGN FILE TO PROCESS:";FlNm$
    IF FlNm$ = "" THEN CLS: STOP
    IF INSTR (FlNm$, ".") THEN FlNm$ = LEFT$(FlNm$,(INSTR(FlNm$,".")-1))
 END IF
 COLOR 10,0: CLS
 COLOR 14,4:LOCATE 3,23
 PRINT "THE HB POP-UP WINDOW CODE WRITER "
 COLOR 10,0
 LOCATE 7,10:PRINT "Will now make window ";FlNm$;" into compliable Basic"
 LOCATE 8,13:PRINT "DATA statements for use with POPWINDOWS calls"
 LOCATE 10,20:PRINT "INPUT FILE IS ";FlNm$+".PW"
 LOCATE 11,20:PRINT "OUTPUT FILE IS ";FlNm$+".INC"
 LOCATE 14,36: PRINT "[F10] = Quit"
'                                                 file names are now set ...
OpenFiles:

 ON ERROR GOTO NoSuchInputFl:
 OPEN FlNm$+".PW" FOR INPUT AS 1
 ON ERROR GOTO 0
    COLOR 12,0:PRINT:PRINT " INPUT FILE OPEN -- LENGTH = ";LOF(1)
    COLOR 14,0

 OPEN FlNm$+".INC" FOR OUTPUT AS 2

'=========================== START PROCESSING INPUT FILE ======================

SkipBlanks:
 L = 0
 DO
   INCR L: LINE INPUT #1, In$                ' skip blank lines
   IF EOF(1) THEN PRINT "ERROR 1": STOP
 LOOP UNTIL In$ <> ""

 C = 1
'                                                   ' take 1st line ...
SearchBox:
 LOCATE 24,1: COLOR 12,0:PRINT C;In$: COLOR 14,0
 DO WHILE LEFT$(In$,1) = " "                       ' chop spaces off left end
     In$ = MID$(In$,2): GOSUB DispLns: INCR C '             and count them ...
 LOOP

 IF LEFT$(In$,1) <> "^" THEN_
   LOCATE 23,1: PRINT ">";In$;"<"
   PRINT "ERROR 2 IN LINE";L;": BOX NOT FOUND":STOP

' ===================== SET WINDOW DIMENSIONS ================================

 CornerCol = C: BoxTop = L  '                       top of box has been found


 Wid = 1: DO UNTIL MID$(In$,Wid,1) <> "^": INCR Wid: LOOP  ' count carrots ...
 DECR Wid,2

 O$ = "  DATA "+STR$(Wid)+","+STR$(BoxTop)+","+STR$(CornerCol)
 LineBuffer$(1) = O$

' ============= PARSE EACH LINE DOWN TO BOXBOTTOM =======================

ParseLines:
 N = 2
 DO
   INCR L: LINE INPUT #1, In$
   IF EOF(1) THEN PRINT "ERROR -- INPUT FILE INCOMPLETE": STOP
   LOCATE 24,1: COLOR 12,0:PRINT In$: COLOR 14,0
   GOSUB DispLns

TrimLine:
   C = 0
'                                          remove blank spaces ...
   DO WHILE LEFT$(In$,1) = " "
     In$ = MID$(In$,2): INCR C
   GOSUB DispLns
   LOOP

  IF LEFT$(In$,1) = "^" THEN
     In$ = MID$(In$,2): INCR C '             remove the carrot on the left ...
     GOSUB DispLns
   ELSE
     LOCATE 25,3:PRINT "ERROR 4: LEFT SIDE OF BOX NOT INTACT";: STOP
   END IF

Check4Bottom:
   IF LEFT$(In$,1) = "^" THEN
       BoxBottom = L+1  '                               check for bottom
   ELSE

Check4Fields:

       X = 0 '                 otherwise find the field locations in the line...
       DO
         INCR X: INCR C
         IF MID$(In$,X,1) = "{" THEN '              if a field marker is found
           MID$(In$,X) = " "  '                     replace it w/ a space ...
           INCR Fld%
           FL(Fld%) = L  '                          and plug its location into
           FC(Fld%) = C  '                           arrays for later use ...
         GOSUB DispLns
         END IF
         IF MID$(In$,X,1) = "}" THEN MID$(In$,X) = " "  ' replace } w/ a space ...
       LOOP UNTIL X >= LEN(In$)

TrimRightEndOff:
       DO UNTIL RIGHT$(In$,1) <> " " AND RIGHT$(In$,1) <> "^"
         In$ = LEFT$(In$,LEN(In$)-1)
       LOOP

Goob:

      C = CornerCol + 1 '      Since the carrot has been trimmed off, that's
'                               where the placement of what's left of In$
'                                                 will start on screen ...
      DO UNTIL LEFT$ (In$,1) <> " "
         In$ = MID$(In$,2)
         GOSUB DispLns
         INCR C
      LOOP

      IF IN$ <> "" THEN
         LineBuffer$ (N) = "  DATA " + CHR$(34) + In$ + CHR$(34) + ","_
          + STR$(L) + "," + STR$(C)
         INCR N
      END IF

   END IF

 LOOP UNTIL BoxBottom

'         ============== WRITE TO TARGET FILE =================
WriteLns:

 PRINT #2, "'   Begin PopWindow data for window {";FlNm$;"}"
 PRINT #2, "'        note: created by PopWindow Writer (PWW) from ";FlNm$;".PW"
 PRINT #2, ""
 LineBuffer$(1) = LineBuffer$(1)+","+STR$(BoxBottom - BoxTop)

 '          and write first line of code
 N = 1
 DO UNTIL LineBuffer$(N) = ""
    PRINT #2, LineBuffer$(N)
    LOCATE 24,1: PRINT LineBuffer$(N)
    INCR N
 LOOP
 PRINT #2, "  DATA END"
 PRINT "                               ++++"
'         ===================== READ FIELD DATA =====================
ReadFldData:
PartTwo:

 PRINT #2, ""
 PRINT #2, FlNm$+"Fields:" '                           create a line label ...
' PRINT #2, "'"+SPACE$(50);"fld name, mask str, loc" '         and a remark ...

 Fld% = 0
 DO
   LINE INPUT #1,In$
   LOCATE 24,1: COLOR 12,0:PRINT LEFT$ (In$,79): COLOR 14,0
 LOOP UNTIL LEFT$(In$,1) = "\"

WritePtII:
 DO
  LINE INPUT #1,In$
  IF In$ <> "" AND LEFT$(In$,1) <> " " THEN
    LOCATE 24,1: COLOR 12,0:PRINT In$: COLOR 14,0
    INCR Fld%
    O$ = "  DATA "+In$+","+STR$(FL(Fld%))+","+STR$(FC(Fld%))
    PRINT #2, O$
  END IF
 LOOP UNTIL EOF(1)
 Report$ = "              DONE, NO ERRORS -- OK"
 IF FL(Fld%) = 0 THEN_
    Report$ = "DONE. INPUT FILE ERROR -- TOO MANY FIELDS NAMED."
 INCR Fld%
 IF FL(Fld%) <> 0 THEN_
  Report$ = "DONE. INPUT FILE ERROR -- TOO MANY FIELD LOCATION"+_
    " MARKERS ({) IN DESIGN."
 PRINT #2, "  DATA END"

 Print #2, ""
 PRINT #2, "'  ";DATE$;", ";LEFT$(TIME$,5);_
           ":   end of PopWindow data for window {";FlNm$;"}"
 CLOSE
 PRINT: PRINT "     "; Report$
 STOP

'               <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>

QT:
 STOP
 RETURN

NoSuchInputFl:
     PRINT:PRINT:PRINT "    ERROR -- Input File ";FlNm$;".PW not found"
     PRINT: STOP
     RESUME

DispLns:
 LOCATE 4,1: PRINT SPACE$(80)
 COLOR 10,0: LOCATE 4,1:PRINT In$;: COLOR 14,0
 RETURN

```
{% endraw %}

## SETUP-H.BAS

{% raw %}
```bas

DEFINT A-Z

'                                              compiler instructions ...
 %False =  0
 %True  =  NOT %False '                       basic truths of the universe ...
 %Yes = %True
 %No = %False

  %FLAGS = 0:  %AX = 1:  %BX = 2:  %CX = 3:  %DX = 4
     %SI = 5:  %DI = 6:  %BP = 7:  %DS = 8:  %ES = 9

 %Background = 16
 %Center = 0

'Printer Codes
        %Star10X = 1:  %StarNX1000 = 2:  %IBMX24 = 3:  %LQ2500 = 4


'Color #s
  %Blk = 0:     %Blu = 1:    %Grn = 2:    %Cyn = 3:    %Red = 4:     %Vlt = 5
  %Brn = 6:     %Gry = 7:    %DGry = 8:   %LBlu = 9:   %LGrn = 10:   %LCyn = 11
  %LRed = 12:   %Pnk = 13:   %Ylo = 14:   %Wht = 15:   %Flash = 256

 %LeftButton = 1
 %RightButton = 2
 %UDVal = 3 '                  controls mouse sensitivity in POPMENU
 %MouseIcon = 15 '              ... a little sun or bug character
 %MaxMenuWidth = 40

 DIM DYNAMIC FieldName$(20),FieldMask$(20),FL(20),FC(20)
 DIM DYNAMIC ScreenStack$ ( 1 : %ScrnStackSize )

 ScrnStackSize = %ScrnStackSize

 DIM DYNAMIC MenuData$ (24) ' max menu length = 23; need one more for the "END"
 DIM DYNAMIC MenuHelpLine$ (23)
 DIM DYNAMIC MCode$ (23)


'  MENU RETURN CODES (KEY PRESSED.)
      %CR = 0:    %Esc = &H20:          %F1 = &H100:           %F2 = &H200
            %PgUp = &H400:              %PgDn = &H600
            %RArrow = &H800:            %LArrow = &HA00
```
{% endraw %}

## SWW.BAS

{% raw %}
```bas




'               STATIC WINDOW CODER -- HB. Started 7-26-87 / 7-21-89


 DIM LineBuffer$(30): DIM FL(30): DIM FC(30)
 KEY(10) ON
 ON KEY (10) GOSUB QT
 Q$ = CHR$(34)
 COLOR 14,0
 CLS

Start:
 LOCATE 25,1: PRINT "[F10] = Quit     [F1] = Help";: LOCATE 1,1
 COLOR 15,2:LOCATE 3,23
 PRINT " THE HB STATIC WINDOW CODE WRITER "
 COLOR 14,0
 IF COMMAND$ <> "" THEN
    FlNm$ = COMMAND$
 ELSE
    ON ERROR GOTO NoSuchInputFl
    FILES "*.SW"
    ON ERROR GOTO 0
    PRINT  '                                    get a directory ...

    COLOR 9,0: INPUT "NAME OF WINDOW DESIGN FILE TO PROCESS:";FlNm$
    IF FlNm$ = "" THEN CLS: STOP
    IF INSTR (FlNm$, ".") THEN FlNm$ = LEFT$(FlNm$,(INSTR(FlNm$,".")-1))
 END IF
 COLOR 10,0: CLS
 COLOR 14,4:LOCATE 3,23
 PRINT "THE HB STATIC WINDOW CODE WRITER "
 COLOR 10,0
 LOCATE 7,10:PRINT "Will now make window ";FlNm$;" into compliable Basic"
 LOCATE 8,13:PRINT "DATA statements.
 LOCATE 10,2:PRINT "INPUT FILE IS ";FlNm$+".SW"
 LOCATE 11,2:PRINT "OUTPUT FILE IS ";FlNm$+".INC (note: if a file by that"
 LOCATE 12,30:PRINT " name exists it will be overwritten.)"
 LOCATE 14,20,1: PRINT "PROCEED ? (y/n)";
 DO: K$ = UCASE$ (INKEY$) : LOOP UNTIL K$ = "Y" OR K$ = "N": PRINT K$
 IF K$ <> "Y" THEN PRINT: PRINT "OK, ENDING HERE.": STOP
 LOCATE ,,0
'                                                 file names are now set ...
OpenFiles:

 ON ERROR GOTO NoSuchInputFl:
 OPEN FlNm$+".SW" FOR INPUT AS 1
 ON ERROR GOTO 0
    COLOR 12,0:PRINT:PRINT " INPUT FILE OPEN -- LENGTH = ";LOF(1)
    COLOR 14,0

 OPEN FlNm$+".INC" FOR OUTPUT AS 2

'=========================== START PROCESSING INPUT FILE ======================

SkipBlanks:
 L = 0
 DO
   INCR L: LINE INPUT #1, Inpt$                ' skip blank lines
   IF EOF(1) THEN BEEP: PRINT "OOPS ... Premature End of File": STOP
 LOOP UNTIL Inpt$ <> ""
''''''''''''''''''''''''''''''''  INCR L
 C = 1
'                                                   ' take 1st line ...
SearchBox:
 LOCATE 24,1: COLOR 12,0:PRINT Inpt$: COLOR 14,0
 DO WHILE LEFT$(Inpt$,1) = " "                       ' chop spaces off left end
     Inpt$ = MID$(Inpt$,2): GOSUB DispLns: INCR C '             and count them ...
 LOOP

 IF LEFT$(Inpt$,1) <> "^" THEN
   LOCATE 23,1: PRINT ">";Inpt$: PRINT "OOPS! Checking line";L;
   PRINT ": TOP OF BOX NOT FOUND":STOP
 END IF

' ===================== SET WINDOW DIMENSIONS ================================

 CornerCol = C: BoxTop = L  '                       top of box has been found


 Wid = 0
 DO UNTIL MID$(Inpt$,Wid+1,1) <> "^": INCR Wid: LOOP  ' count carrots ...

 PRINT  "'   Code to write Static Window {";FlNm$;"} to Screen"
 PRINT  "'        note: created by StatWindow Writer (SWW) from ";FlNm$;".SW"
 PRINT
 PRINT  " COLOR BoxColor MOD 16, BoxColor \ 16"
 PRINT  " LOCATE "+ STR$(BoxTop)+","+STR$(CornerCol)

 T$ = "": FOR N = 1 TO Wid-2: T$ = T$+CHR$(196): NEXT
 PRINT  " PRINT "+ Q$ + CHR$(218) + T$ + CHR$(191)

 PRINT #2, "'   Code to write Static Window {";FlNm$;"} to Screen"
 PRINT #2, "'        note: created by StatWindow Writer (SWW) from ";FlNm$;".SW"
 PRINT #2, ""
 PRINT #2, " COLOR BoxColor MOD 16, BoxColor \ 16"
 PRINT #2, " LOCATE "+ STR$(BoxTop)+","+STR$(CornerCol)
 PRINT #2, " PRINT "+ Q$ + CHR$(218) + T$ + CHR$(191) + Q$


'    ============= PARSE REMAINING LINES DOWN TO BOXBOTTOM ===============

 N = 2
 DO
   INCR L: LINE INPUT #1, Inpt$
   IF EOF(1) THEN PRINT "ERROR -- INPUT FILE INCOMPLETE": STOP
   LOCATE 24,1: COLOR 12,0:PRINT Inpt$: COLOR 14,0
   GOSUB DispLns

'                                        cut off leading spaces ...

   DO WHILE LEFT$(Inpt$,1) = " ": Inpt$ = MID$(Inpt$,2) : GOSUB DispLns : LOOP
   IF Inpt$ = "" THEN Inpt$ = "^^"
   Inpt$ = MID$(Inpt$,2) '                   cut off the leading carrot ...

'                                             see if this is the bottom ...

   IF LEFT$(Inpt$,1) = "^" THEN
       BoxBottom = L+1  '   if there's a second carrot this must be the bottom;
       EXIT LOOP
   ELSE
'                                                  at this point the string
'                                                  has to be either spaces
'                                                  & text, spaces only, or "".

'               ============= Check4Fields =============

       C = 0
       X = 0 '                 otherwise find the field locations in the line...
       DO
         INCR X: INCR C
         IF MID$(Inpt$,X,1) = "{" THEN '              if a field marker is found
           MID$(Inpt$,X) = " "  '                     replace it w/ a space ...
           INCR Fld%
           FL(Fld%) = L  '                          and plug its location into
           FC(Fld%) = C  '                           arrays for later use ...
         GOSUB DispLns
         END IF
         IF MID$(Inpt$,X,1) = "}" THEN MID$(Inpt$,X) = " " '    replace "}" w/  " "
       LOOP UNTIL X >= LEN(Inpt$)


'                    ============ TrimRightEndOff =============

       DO UNTIL RIGHT$(Inpt$,1) <> " " AND RIGHT$(Inpt$,1) <> "^"
         Inpt$ = LEFT$(Inpt$,LEN(Inpt$)-1)
       LOOP

   END IF

    PRINT #2, " LOCATE "+ STR$(L)+","+STR$(CornerCol)
    PRINT #2, " PRINT "+ Q$ + CHR$(179) + Inpt$ _
                 + SPACE$ (Wid - LEN (Inpt$) - 2) + CHR$(179) + Q$ + ";"
'               LPRINT "                  It is Written ...";
    LOCATE 24,1
    PRINT " LOCATE "+ STR$(L)+","+STR$(CornerCol)
    PRINT " PRINT "+ Q$ + CHR$(179) + Inpt$ _
                 + SPACE$ (Wid - LEN (Inpt$) - 2) + CHR$(179) + Q$ + ";"

 LOOP UNTIL BoxBottom
 LOCATE 24,1
 PRINT " LOCATE "+ STR$(L)+","+STR$(CornerCol)
 PRINT " PRINT "+ Q$ + CHR$(192) + T$ + CHR$(217) + Q$ + ";"

 PRINT #2, " LOCATE "+ STR$(L)+","+STR$(CornerCol)
 PRINT #2, " PRINT "+ Q$ + CHR$(192) + T$ + CHR$(217) + Q$ + ";"


'         ===================== READ FIELD DATA =====================

 IF Fld% > 0 AND NOT EOF (1) THEN
   PRINT #2, ""
   PRINT #2, " COLOR FldColor MOD 16, FldColor \ 16"
   PRINT #2, FlNm$+"Fields:" '                           create a line label ...

   PRINT " COLOR FldColor MOD 16, FldColor \ 16"
   PRINT FlNm$+"Fields:" '                           create a line label ...

   Fld% = 0
   DO
     LINE INPUT #1,Inpt$
     LOCATE 24,1: COLOR 12,0:PRINT LEFT$ (Inpt$,79): COLOR 14,0
   LOOP UNTIL LEFT$(Inpt$,1) = "\"

WritePtII:
   DO UNTIL EOF(1)
     LINE INPUT #1,Inpt$

     IF Inpt$ <> "" AND LEFT$(Inpt$,1) <> " " THEN
       LOCATE 24,1: COLOR 12,0:PRINT Inpt$: COLOR 14,0
       INCR Fld%

       CommaPos = INSTR (Inpt$, ",")
       IF CommaPos = 0 THEN PRINT "NO DELIMITING COMMA IN LINE: ";Inpt$:STOP
       DO WHILE INSTR (CommaPos+1, Inpt$, ",") > CommaPos
         CommaPos = INSTR (CommaPos+1, Inpt$, ",")
       LOOP

       PRINT " LOCATE " + STR$ (FL(Fld%)) + "," + STR$ (FC(Fld%) + CornerCol)
       PRINT " PRINT USING " + MID$ (Inpt$, CommaPos+1) + ";"_
                                                    + LEFT$ (Inpt$, CommaPos-1)

       PRINT #2, " LOCATE " + STR$ (FL(Fld%)) + "," + STR$ (FC(Fld%) + CornerCol)
       PRINT #2, " PRINT USING " + MID$ (Inpt$, CommaPos+1) + ";"_
                                               + LEFT$ (Inpt$, CommaPos-1) + ";"
   END IF

   LOOP

   PRINT #2, " COLOR ScrColor MOD 16, ScrColor \ 16"

 END IF

 Report$ = "              DONE, NO ERRORS -- OK"
 IF Fld% > 0 AND FL(Fld%) = 0 THEN_
    Report$ = "DONE. INPUT FILE ERROR -- TOO MANY FIELDS NAMED."
 INCR Fld%
 IF FL(Fld%) <> 0 THEN_
  Report$ = "DONE. INPUT FILE ERROR -- TOO MANY FIELD LOCATION"+_
    " MARKERS ({) IN DESIGN."

 Print #2, ""
 PRINT #2, "'  ";DATE$;", ";LEFT$(TIME$,5);_
           ":   end of StatWindow generated code for window {";FlNm$;"}"
 CLOSE
 PRINT: PRINT "     "; Report$
 STOP

'               <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>

QT:
 STOP
 RETURN

NoSuchInputFl:
     PRINT:PRINT:PRINT "    ERROR -- Input File ";FlNm$;".SW not found"
     PRINT: STOP
     RESUME

DispLns:
 LOCATE 4,1: PRINT SPACE$(80)
 COLOR 10,0: LOCATE 4,1:PRINT Inpt$;: COLOR 14,0
 RETURN
```
{% endraw %}

## GO.TXT

{% raw %}
```

 ╔═════════════════════════════════════════════════════════════════════════╗
 ║               <<<<  #2634 POWER BASIC LIBRARY #4  >>>>                  ║
 ╠═════════════════════════════════════════════════════════════════════════╣
 ║                                                                         ║
 ║ To unzip the files, you will need PKUNZIP. If you don't have it in your ║
 ║ software library, you will find it on POWER BASIC LIBRARY #1, #3, #5,   ║
 ║ and #6.                                                                 ║
 ║                                                                         ║
 ║ To unzip a utility, type:  PKUNZIP [filename.ZIP]  (press Enter)        ║
 ║                                                                         ║
 ║                                                                         ║
 ║                                       (c) Copyright 1991, PC-SIG Inc.   ║
 ╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PORT4.BAS

{% raw %}
```bas
'Program Name    : Port4.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 11-12-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Prog ConceptDate: 07-01-88 - Smithtronix Corporation
'
'Basic Serial Port routines for extended com ports, illustrates polled use
'of serial ports before PowerBasic 2.10a.  Use subroutines as needed.  These
'are programming examples.
'
'Remember if you use polled ports, they are not interrupt driven nor buffered.
'With PB 2.1a you now have access to 4 interrupt driven & buffered serial ports.
'
'Serial Port Base Address Information
'these addresses vary, be sure to check the board you are using.
'com1 3f8-3ff ,com2 2f8-2ff ,com3 3e8-3ef ,com4 3e0-3e7
'com5 2f0-2f7 ,com6 2e8-2e7 ,com7 2e0-2e7 ,com8 260-267
'
'Serial Port Address Register LineUp
'3F8H (Out) Data Output to transmitter holding register
'3F8H (In)  Data Input from receive Data Register
'3F9H (Out) Baud-Rate Divisor(Low Byte)
'3F9H (In)  Baud-Rate Divisor(High Byte)
'3FAH (In)  Interrupt Enable Register
'3FBH (Out) Line Control Register
'3FCH (Out) Modem Control Register
'3FDH (In)  Line Status Register
'3FEH (In)  Modem Status Register


Xmitcom3:
def seg= &H40
Ckt3stat:
address=&h3E8
x=inp(address+5)
if x and 32 then gosub xmitcom3 else Ckt3stat
xmitcom3:
out Port3,DataO3$
def seg
return

RecCom3:
def seg= &H40
ckr3stat:
address=&h3E8
x=inp(address+5)
if x and 1 then gosub RecCom3 else ckr3stat
reccom3:
datai3$=inp(address)
def seg
return


Xmitcom4:
def seg= &H40
ck4stat:
address=&h3E0
x=inp(address+5)
if x and 32 then gosub xmitcom4 else ck4stat
xmitcom4:
out port4,dataO4$
def seg
return

RecCom4:
def seg= &H40
ckr4stat:
address=&h3E0
x=inp(address+5)
if x and 1 then gosub RecCom4 else ckr4stat
reccom4:
datai4$=inp(address)
def seg
return



'This routine swaps the base addresses of com1 & com2
SWapCom12:
defseg=&H40
x=peek(0):y=peek(1)
poke 0,peek(2):poke1,peek(3)
poke 2,x:poke 3,y
def seg


SetBaudRate:
'Setup the serial port baud rate the hardway
'Additional register programming available from intel 8250 data books.
base=&H3F0
addr=base+3
out addr,&H80    'turn on the seventh high bit
out addr-2,0     'msb for 1200 baud
out addr-3,&h60  'lsb for 1200 baud
'setting up the number of start and stop bits for serial port control
a=0
a=a or &H02
out base+3,27
out base+5,0   'disable interrupts
return


'this routine swaps the port addresses to trick dos into going
'to more than one one port.  Only two serial ports can be open at any
'one time.
setport:
close #1
def seg=&H40
basel=&HF8:baseh=&H3
poke 0,basel
poke 1, baseh
def seg
OPEN "com1:9600,n,8,1,RS,CD,DS,CS,OP1000,RB2000" FOR RANDOM AS #1
return

Comset4PortsLow:
'com1 3f8-3ff ,com2 2f8-2ff ,com3 3e8-3ef ,com4 3e0-3e7
def seg=&h40
poke 0,&f8  'com1 set low byte
poke 1,&h3  'com1 set hi  byte

poke 2,&f8  'com2 set low byte
poke 3,&h2  'com2 set hi  byte

poke 4,&e8  'com3 set low byte
poke 5,&h3  'com3 set hi  byte

poke 6,&e0  'com4 set low byte
poke 7,&h3  'com4 set hi  byte
def seg
return

Comset4PortsHi:
'com5 2f0-2f7 ,com6 2e8-2e7 ,com7 2e0-2e7 ,com8 260-267
def seg=&h40
poke 0,&f0  'com1 set low byte
poke 1,&h2  'com1 set hi  byte

poke 2,&e8  'com2 set low byte
poke 3,&h2  'com2 set hi  byte

poke 4,&e0  'com3 set low byte
poke 5,&h2  'com3 set hi  byte

poke 6,&60  'com4 set low byte
poke 7,&h2  'com4 set hi  byte
def seg
return



```
{% endraw %}

## READ123.BAS

{% raw %}
```bas
'Read123.bas
DEFINT A-Z
DECLARE SUB GetFormat (Format, Row, Column)

DIM SHARED FileNum
DIM SHARED CellFmt AS STRING * 1

CLS
DO
   INPUT "Enter name of Lotus file to read: ", FileName$
   IF FileName$ = "" THEN FILES "*.w?"
LOOP UNTIL LEN(FileName$)

FileNum = FREEFILE
OPEN FileName$ FOR BINARY AS #FileNum

DO UNTIL Opcode = 1
   GET FileNum, , Opcode
   GET FileNum, , Length

   SELECT CASE Opcode
	 
	  CASE 0
		 GET FileNum, , Integ
		
		 IF Integ < 1028 OR Integ > 1030 THEN ' test this if you want
			PRINT "Not a Lotus FIle !"
			END
		 END IF
		
		 PRINT "BOF:  Lotus ";
		 SELECT CASE Integ
			 CASE 1028
				PRINT "123 version 1.0 or 1A"
			 CASE 1029
				PRINT "Symphony version 1.0"
			 CASE 1030
				PRINT "123 version 2.0, 2.1 or Symphony version 1.1"
		 END SELECT
	  
	  CASE 12                     'Blank - Notee: Lotus saves cells only
								  'if they are formatted or protected
		 GetFormat Format, Row, Column
		 PRINT "Blank:  "; Format, "Row ="; Row, "Col ="; Column

	  CASE 13                     'Integer
		 GetFormat Format, Row, Column
		 GET FileNum, , Integ
		 PRINT "Integer:"; Format, "Row ="; Row, "Col ="; Column
	 
	  CASE 14                     'Real number (BASIC double precision type)
		 GetFormat Format, Row, Column
		 GET FileNum, , Number#
		 PRINT "Number: "; Format, "Row ="; Row, "Col ="; Column, Number#

	  CASE 15 'Label
		 GetFormat Format, Row, Column  'Create a string to hold the label
		 Info$ = SPACE$(Length - 6)
										'6 is subtracted to exclude the
										' Format, Column, Row, and 0 bytes
										'that were included in the original
										'length byte (already gotten by the
										'GetFormat routine)
		 GET FileNum, , Info$           'get the label text
		 GET FileNum, , CellFmt$        'gobble up the trailing chr$(0) byte
		 PRINT "Label:  "; Format, "Row ="; Row, "Col ="; Column, Info$
	 
	  CASE 16                   'Forumla
		 GetFormat Format, Row, Column
		 GET FileNum, , Number#
		 GET FileNum, , Length
		 SEEK FileNum, SEEK(FileNum) + Length

		 PRINT "Formula :"; Format, "Row ="; Row, "Col ="; Column, Number#
	 
	  CASE ELSE

		 Dummy$ = SPACE$(Length)
		 GET FileNum, , Dummy$
		 PRINT "Opcode: "; Opcode 'Show its opcode just for fun
	 
	  END SELECT

	  IF CSRLIN > 21 THEN
		 PRINT : PRINT "Press <Esc> to end or any other key for more . . ."
		 DO: k$ = INKEY$: LOOP UNTIL LEN(k$)
		 IF k$ = CHR$(27) THEN EXIT DO
		 CLS
	  END IF
	 
	  Cntr = Cntr + 1
LOOP

PRINT "Number of Records Processed ="; Cntr
CLOSE

SUB GetFormat (Format, Row, Column)
GET FileNum, , CellFmt$: Format = ASC(CellFmt$)
GET FileNum, , Column
GET FileNum, , Row
END SUB

```
{% endraw %}

## RESWORD.DOC

{% raw %}
```
			      " RESWORD "
			   SHADETREE SOFTWARE
			  Bruce Nopper, Author
			 Compuserve  73300,2444

  This program is to search Basic ( Turbo 1.xx, Quick 3.xx & 4.xx, Power 2.00x,
  and {Interpreted} GW 3.11 up ) source code for the use of reserved words for
  PowerBasic 2.1 w/PowerPack as variables. This program is slow ( 1 second per
  line ) but very smart, it will ignore Comments, Data and Data Strings. The
  program will work on all variables, numerical and string, including unsigned
  variables, no matter if they are written with Uppercase, Lowercase or mixed.
  This program will detect only exact matches not imbedded matches, eg...

  Sample line of code;

  Maxamount% = Max% + Max2% : Array$ = "Data used =" + Oldstring$  ' Append it

   "Resword" would report that it found the reserved words "Max" and "Array"
   used in this line. It will ignore the word "Append" because it is a comment,
   not code. It ignores Data in "Data used =" because it is used as a Data
   String. The variables Maxamount%, Max2%, and Oldstring$ are ignored because
   they are imbedded and are not true reserved words.

   The output of the search can be directed to;  Printer, File (reserved.fnd),
   or Screen. The screen output is paused when the screen is full until a key
   is pressed to continue. The Source code type can be selected from a list,
   each different type of Basic's contains different word lists. The program
   when it finds a reserved word within the code; lists the line number ( this
   is the line number for use with the PowerBasic editor line counter ), the
   reserved word that it found, and displays the line of code in question.

   There is no limit to the size of the source code, this program is free for
   personal use only. Please report any bugs or comments to me on Compuserve
   or write to:  Shadetree Software   PO Box 642   N. Amherst, Ma.  01059



```
{% endraw %}

## SCANP2.BAS

{% raw %}
```bas
'Program Name    : ScanP2.bas scans screen - builds pixel image for printer
'Author          : Lloyd Smith for Spectra Tech Support
'Date            : 10-31-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Description     : Program scans a 640 x 350 ega screen and prints to Citizen
'                : or Epson compatible printer

DIM  static Parray(1125,1)
width "lpt1:",255
gosub ParrayInit
gosub PrintInit
screen 9,,0,0

color 12,0
for i=1 to 25
locate i,1:print "This is a test of the system  ABCDEFGHIJKLOMNOPRSTUVWXYZ, line #";i;
next i


ycnt=0
for y1=0 to 350 step 8
for x1=0 to 639
if point(x1,y1)>0   then a=128 else a=0
if point(x1,y1+1)>0 then b=64  else b=0
if point(x1,y1+2)>0 then c=32  else c=0
if point(x1,y1+3)>0 then d=16  else d=0
if point(x1,y1+4)>0 then e=8   else e=0
if point(x1,y1+5)>0 then f=4   else f=0
if point(x1,y1+6)>0 then g=2   else g=0
if point(x1,y1+7)>0 then h=1   else h=0
Parray(x1,1)=a+b+c+d+e+f+g+h
k$=inkey$:if k$=chr$(27) then system 'exit scan routine
next x1
gosub PrintScnArray
gosub ParrayInit
next y1
end

ParrayInit:
for xx=0 to 1045
Parray(xx,1)=0
next xx
return

PrintScnArray:
' Print the screen buffer to the printer
dts= (80*13+2)  '960  'num or dots
n1 = dts mod 256
n2 = int(dts/256)

k$=inkey$:if k$=chr$(27) then system
LPRINT CHR$(27)"L"CHR$(n1)CHR$(n2);   '120 dots/in or 960 dots/line
FOR x = 0 TO dts-1
LPRINT CHR$(int(Parray(x,1)));
NEXT x
LPRINT
return

PrintInit:
 LPRINT CHR$(27)"~0"CHR$(16): REM CITIZEN MEMORY LINE FEED INCREMENT
' LPRINT CHR$(27)CHR$(51)CHR$(20): REM EPSON MEMORY LINE FEED INCREMENT
return

```
{% endraw %}

## SPECTERN.BAS

{% raw %}
```bas
'Program Name    : Spectern.bas  Example of Specter Factory Terminal
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 11-12-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Concept Date    : 07-07-88
'Concept by      : SmithTronix Corporation
'                : Advanced programming examples, few comments
'                : Enter a six digit number to activate displays,
'                : to exit Program, type stop.

DECLARE SUB Font ()
DECLARE SUB messages ()

SHARED d1$, d2$, d3$, d4$, d5$, d6$, d7$, d8$, d9$, d0$, SP$
SHARED P1$, P2$, P3$, P4$, P5$
SHARED FA$, FB$, Fc$, Fd$, Fe$, Ff$, Fg$, fh$, fi$, FJ$, Fk$, Fl$, Fm$
SHARED QN$, Fo$, FP$, FQ$, FR$, FS$, Ft$, Fu$, Fv$, Fw$, Fx$, Fy$, FZ$
SHARED msg$(), size, Letcolor

DIM msg$(30)

SCREEN 9



CALL messages

'blue border around entire screen

LINE (0, 0)-(639, 199), 7, BF
FOR I = 0 TO 4
LINE (I, 0)-(635 + I, 199), 11, B '9, B
NEXT I

'blue box around keypad
FOR I = 0 TO 4
LINE (25 + I, 35)-(345 + I, 185), 11, B'9, B
'LINE (25 + I, 35)-(350 + I, 185), 9, B
NEXT I

G = 15
FOR I = 0 TO 4
LINE (30 + I + G, 40)-(70 + I + G, 60), 11, B '9, B
LINE (31 + I + G, 41)-(69 + I + G, 59), 0, BF '9, B
G = G + 60
NEXT I

G = 15
FOR I = 0 TO 4
LINE (30 + I + G, 70)-(70 + I + G, 90), 11, B'9, B
LINE (31 + I + G, 71)-(69 + I + G, 89), 0, BF'9, B
G = G + 60
NEXT I

G = 15
FOR I = 0 TO 4
LINE (30 + I + G, 100)-(70 + I + G, 120), 11, B'9, B
LINE (31 + I + G, 101)-(69 + I + G, 119), 0, BF'9, B
G = G + 60
NEXT I

G = 15
FOR I = 0 TO 4
LINE (30 + I + G, 130)-(70 + I + G, 150), 11, B '9, B
LINE (31 + I + G, 131)-(69 + I + G, 149), 0, BF '9, B
G = G + 60
NEXT I


COLOR 14, 0
LOCATE 2, 20
PRINT "Specter"
COLOR 15, 0

      CALL Font
      CALL messages
      GOSUB check
PSET (450, 8), 0: DRAW msg$(1)
PSET (550, 8), 0: DRAW msg$(2)
PSET (500, 52), 0: DRAW msg$(3)


PSET (355, 70), 7: DRAW msg$(4)
PSET (355, 80), 7: DRAW msg$(5)
PSET (355, 90), 7: DRAW msg$(6)
PSET (500, 60), 7: DRAW msg$(7)
PSET (500, 105), 0: DRAW msg$(8)

PSET (500, 152), 0: DRAW msg$(9)
PSET (355, 176), 0: DRAW msg$(10)

PSET (55, 50), 0: DRAW msg$(11) 'tl

'Numbers on the keypad
PSET (125, 50), 0: DRAW d1$ '#1
PSET (185, 50), 0: DRAW d2$ '#2
PSET (245, 50), 0: DRAW d3$ '#3
PSET (291, 50), 0: DRAW msg$(13) 'scale
PSET (291, 58), 0: DRAW msg$(14) 'raw

PSET (47, 80), 0: DRAW msg$(15)
PSET (125, 80), 0: DRAW d4$ '#4
PSET (185, 80), 0: DRAW d5$ '#5
PSET (245, 80), 0: DRAW d6$ '#6
PSET (291, 78), 0: DRAW msg$(16) 'force
PSET (291, 88), 0: DRAW msg$(17) 'next

PSET (47, 110), 0: DRAW msg$(18) 'clear
PSET (125, 110), 0: DRAW d7$ '#7
PSET (185, 110), 0: DRAW d8$ '#8
PSET (245, 110), 0: DRAW d9$ '#9
PSET (291, 108), 0: DRAW msg$(19) 'unforce
PSET (291, 118), 0: DRAW msg$(20) 'prev


PSET (230, 138), 0: DRAW msg$(23) 'ack
PSET (230, 148), 0: DRAW msg$(24)'test
PSET (185, 140), 0: DRAW d0$ '#0
PSET (291, 138), 0: DRAW msg$(25) 'shift

' Pattern used for seven segment display
'    2
'    --
'  1| 4|3
'    --
'  5| 7|6
'    --

idle:
x = 434: y = 16
Fg = 12: bg = 0
again:
LOCATE 16, 2: PRINT "                "
LOCATE 16, 2: INPUT kb$
IF UCASE$(kb$) = "STOP" THEN CLS : SYSTEM
IF LEN(kb$) > 6 OR LEN(kb$) < 6 THEN GOTO again

for z=1 to 5
FOR I = 1 TO LEN(kb$)
A = VAL(MID$(kb$, I, 1))
'                     1234567
IF A = 1 THEN pat$ = "0010010"
IF A = 2 THEN pat$ = "0111101"
IF A = 3 THEN pat$ = "0111011"
IF A = 4 THEN pat$ = "1011010"
IF A = 5 THEN pat$ = "1101011"
IF A = 6 THEN pat$ = "1001111"
IF A = 7 THEN pat$ = "0110010"
IF A = 8 THEN pat$ = "1111111"
IF A = 9 THEN pat$ = "1111011"
IF A = 0 THEN pat$ = "1110111"


'left side of seven segment
IF MID$(pat$, 1, 1) = "1" THEN LINE (x, y)-(x + 1, y + 10), Fg, BF ELSE LINE (x, y)-(x + 1, y + 10), bg, BF
IF MID$(pat$, 5, 1) = "1" THEN LINE (x, y + 12)-(x + 1, y + 22), Fg, BF ELSE LINE (x, y + 12)-(x + 1, y + 22), bg, BF
'top line of seven segment display
IF MID$(pat$, 2, 1) = "1" THEN LINE (x + 3, y)-(x + 19, y), Fg ELSE LINE (x + 3, y)-(x + 19, y), bg

'middle line of seven segment display
IF MID$(pat$, 4, 1) = "1" THEN LINE (x + 3, y + 11)-(x + 19, y + 11), Fg ELSE LINE (x + 3, y + 11)-(x + 19, y + 11), bg
'bottom line of seven segement display
IF MID$(pat$, 7, 1) = "1" THEN LINE (x + 3, y + 22)-(x + 19, y + 22), Fg ELSE LINE (x + 3, y + 22)-(x + 19, y + 22), bg
'right side of seven segment
IF MID$(pat$, 3, 1) = "1" THEN LINE (x + 21, y)-(x + 22, y + 10), Fg, BF ELSE LINE (x + 21, y)-(x + 22, y + 10), bg, BF
IF MID$(pat$, 6, 1) = "1" THEN LINE (x + 21, y + 12)-(x + 22, y + 22), Fg, BF ELSE LINE (x + 21, y + 12)-(x + 22, y + 22), bg, BF

 x = x + 30
 NEXT I
if z=1 then x=434
if z=2 then x=434:y=y+53
if z=3 then x=434:y=y+47
if z=4 then x=434:y=y+50
next z
GOTO idle

check:
FOR I = 1 TO 4
IF I = 1 THEN W = 420: V = 10: H = 31

IF I = 2 THEN W = 420: V = 63: H = 31
IF I = 3 THEN W = 420: V = 110: H = 31
IF I = 4 THEN W = 420: V = 160: H = 31

LINE (W, V)-(W + 200, V), 8
LINE (W + 1, V + 1)-(W + 200, V + 1), 8
LINE (W + 2, V + 2)-(W + 200, V + 2), 8
LINE (W + 3, V + 3)-(W + 200, V + 3), 8


LINE (W, V + 1)-(W, V + H), 15
LINE (W + 1, V + 2)-(W + 1, V + H), 15
LINE (W + 2, V + 3)-(W + 2, V + H), 15
LINE (W + 3, V + 4)-(W + 3, V + H), 15
LINE (W + 4, V + 5)-(W + 4, V + H), 15

LINE (W, V + H)-(W + 197, V + H), 15
LINE (W, V + H + 1)-(W + 198, V + H + 1), 15
LINE (W, V + H + 2)-(W + 199, V + H + 2), 15
LINE (W, V + H + 3)-(W + 200, V + H + 3), 15

LINE (W + 196, V)-(W + 196, V + H - 1), 8
LINE (W + 197, V)-(W + 197, V + H), 8
LINE (W + 198, V)-(W + 198, V + H + 1), 8
LINE (W + 199, V)-(W + 199, V + H + 2), 8
LINE (W + 200, V)-(W + 200, V + H + 3), 8
LINE (W + 201, V)-(W + 201, V + H + 3), 8

'make the hole
LINE (W + 5, V + 4)-(W + 195, V + H - 1), 0, BF

NEXT I

RETURN

SUB Font STATIC
'Draw Font Character Set - Hand edited
size = 4: Letcolor = 14
    FA$ = "S=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br1u4e2f2d2l4r4d2br2"
    FB$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br1u6r3f1d1G1l2br2F1d1g1l3br6"
    Fc$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br5BU5H1L2G1D4F1R2E1BF1BR1"
    Fd$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6R3F1D4G1L3BR6"
    Fe$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6R4BD3BL2L2D3R4BR2"
    Ff$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6R4BD3BL2L2BD3BR6"
    Fg$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br5BU5H1L2G1D4F1R2E1U1L1BD2BR3"
    fh$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6BD3R4BU3D6BR2"
    fi$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1R1U6L1R2L1D6R1BR2"
    FJ$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR5BU6D5G1L2H1BD1BR6"
    Fk$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6BR4G3F3BR2"
    Fl$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6BD6R4BR2"
    Fm$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6F3E3D6BR2"
    QN$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6F6U6BD6BR2"
    Fo$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br5BU5H1L2G1D4F1R2E1U4BD5BR2"
    FP$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6R4F1D1G1L2BD3BR5"
    FQ$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br5BU5H1L2G1D4F1R2E1U4BD4H1F2BR2"
    FR$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1U6R3F1D1G1L2F3BR2"
    FS$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR5BU5H1L2G1D1F1R2F1D1G1L2H1BD1BR6"
    Ft$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6R4L2D6BR4"
    Fu$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6D5F1R2E1U5BD6BR2"
    Fv$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6D4F2E2U4BD6BR2"
    Fw$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6D6E2F2U6BD6BR2"
    Fx$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1E6BL6F6BR2"
    Fy$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6F2E2BG2D4BR4"
    FZ$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6R6G6R6BR2"
    d1$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU5E1D6L1R2BR2"
    d2$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU5E1R2F1D1G4R4BR2"
    d3$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6R4G2F2D1G1L2H1BD1BR6"
    d4$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR4U6G3R4BD3BR2"
    d5$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU1F1R2E1U1H1L3U3R4BD6BR2"
    d6$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR3BU6L1G1D4F1R2E1U1H1L2G1BD2BR6"
    d7$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU6R4G3D3BR4"
    d8$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR1BU1U1E1R2E1U1H1L2G1D1F1R2F1D1G1L2H1BD1BR6"
    d9$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "BR5BU4G1L2H1U1E1R2F1D4G1L1BR4"
    d0$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br5BU5H1L2G1D4F1R2E1U4BD5BR2"
    SP$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br7"
    P1$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br2L1U1R1D1BR2"
    P2$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br2L1U1R1D2G1BE1BU1BR2"
    P3$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br2L1U1R1D1BU4L1U1R1D1BD4BR2"
    P4$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br2L1U1R1D2G1BE1BU5L1U1R1D1BD4BR2"
    P5$ = "s=" + VARPTR$(size) + "c=" + VARPTR$(Letcolor) + "br1BU5E1R2F1D1H1L1D1BD2R1BR3"
END SUB

SUB messages STATIC
'Text Messages using Draw Chatacter Fonts
msg$(1) = Fm$ + Fw$ + SP$ + Ft$ + Fy$ + FP$ + Fe$
msg$(2) = FA$ + Fd$ + Fd$ + FR$ + Fe$ + FS$ + FS$
msg$(3) = Fl$ + Fo$ + Fc$ + FA$ + Ft$ + fi$ + Fo$ + QN$
msg$(4) = FA$ + Fl$ + FA$ + FR$ + Fm$
msg$(5) = Ff$ + Fo$ + FR$ + Fc$ + Fe$ + Fd$
msg$(6) = FP$ + FR$ + Fo$ + Ft$ + Fe$ + Fc$ + Ft$ + Fe$ + Fd$
msg$(7) = FP$ + P1$ + Fu$ + P1$ + SP$ + FP$ + Fc$ + SP$ + QN$ + Fo$
msg$(8) = Ft$ + FA$ + Fg$ + SP$ + Fd$ + SP$ + Ft$ + Fy$ + FP$ + Fe$
msg$(9) = FP$ + FR$ + Fe$ + FS$ + Fe$ + Ft$
msg$(10) = Fc$ + Fu$ + FR$ + FR$ + Fe$ + QN$ + Ft$
msg$(11) = Ft$ + P1$ + Fl$
msg$(12) = FR$ + FA$ + FP$
msg$(13) = FS$ + Fc$ + FA$ + Fl$ + Fe$
msg$(14) = FR$ + FA$ + Fw$
msg$(15) = Fe$ + QN$ + Ft$ + Fe$ + FR$
msg$(16) = Ff$ + Fo$ + FR$ + Fc$ + Fe$
msg$(17) = QN$ + Fe$ + Fx$ + Ft$
msg$(18) = Fc$ + Fl$ + Fe$ + FA$ + FR$
msg$(19) = Fu$ + QN$ + Ff$ + FR$ + Fc$
msg$(20) = FP$ + FR$ + Fe$ + Fv$
msg$(21) = Fc$ + fh$ + FA$ + QN$ + Fg$ + Fe$
msg$(22) = FR$ + Fu$ + QN$
msg$(23) = FA$ + Fc$ + Fk$
msg$(24) = Ft$ + Fe$ + FS$ + Ft$
msg$(25) = FS$ + fh$ + fi$ + Ff$ + Ft$
END SUB

```
{% endraw %}

## SPKDEMO.BAS

{% raw %}
```bas
$COMPILE EXE
$LIB ALL OFF
DEFINT a-z
$INCLUDE "SPOOLKIT.INC"
$LINK "SPOOLKIT.PBU"

DIM STATIC QueList$(32)
CLS
locate 4,1
print TAB(28);" SpoolKit version 1.0 demo"
print " "
print "Testing for presence of DOS PRINT resident - ";
IF SpoolInstalled% THEN
	 PRINT "found it, SPKDEMO ready to go!"
ELSE
	 PRINT "spooler not installed, can't run demo"
	 end
END IF

print "Press any key to begin the demo, or ESC to stop"
CALL WaitForKey
' Part 1
print " "
print " "
print "Part 1:  Checking current contents of spool queue"
print "This test simply lists the contents of the print spooler job queue"
print " "
CALL ListSpooledFiles(QueList$(),Count%,Stat%)
IF Stat% <> 0 THEN
	print tab(10);"* Error number ";Stat%;" occurred, demo stopping"
	STOP
END IF
print TAB(10);" - Number of queued files: ";Count%
IF Count% > 0 THEN
	FOR x% = 1 to Count%
		print TAB(15);QueList$(x%)
	NEXT x%
END IF

Print " "
Print "Press any key for next step, ESC to stop demo"
Call WaitForKey

' Part 2

CLS
LOCATE 4,1
print "Part 2:  Submit a file to print"
print " "
print "This test will submit a print file to the spooler.  When asked for a"
print "file name, give the path of a single file.  For demonstration purpose,"
print "a short file will work as good as a long one (i.e. C:\CONFIG.SYS)."
print "If your printer is on-line and ready, the file should print."
print " "
Input "Enter name of file to print: ";a$
CALL SubmitSpoolFile(a$,Count%,Stat%)
SELECT CASE Stat%
   CASE 0
      print tab(10);Count%;" files successfully spooled"
   CASE 8
      print Tab(10);"Print spooler queue is full,";Count%;" files spooled"
   CASE ELSE
      print Tab(10);"Error number";Stat%;" occurred, demo stopping"
      STOP
END SELECT

Print " "
Print "Press any key for next step, ESC to stop demo"
Call WaitForKey
CLS
locate 4,1
print "Part 3:  Cancel a file from print queue"
print " "
print "This portion of the demo will queue several files to the spooler, then"
print "ask you which one to remove from the spool queue.  You will be asked to"
print "take your printer off-line first, so that the files will not finish"
print "printing while you are typeing your answers.  This is an advantage to"
print "using the DOS PRINT spooler.  The PowerBasic programmer is relieved"
print "from having to deal with the printer being offline, out of paper, etc"
print " "
print "Please take your printer off-line, press any key when done (ESC exits)"
CALL WaitForKey
print " "
print "I now need you to supply a wild card file specification.  All files"
print "meeting the specification will be placed in the spool queue.  Please"
print "use a file spec that will cause more than one file to enter the queue"
print "The demo will stop submitting files if the spooler queue fills up.
print " "
print "An example would be: C:\BIN\*.BAT"
print " "
line input "Please enter a file specification: ";x$
print " "
print "Queueing files . . .";
CALL SubmitSpoolFile(x$,Count%,Stat%)
SELECT CASE Stat%
   CASE 0
      print tab(10);Count%;" files successfully spooled"
   CASE 8
      print Tab(10);"Print spooler queue is full,";Count%;" files spooled"
   CASE ELSE
      print Tab(10);"Error number";Stat%;" occurred while submitting, demo stopping"
      STOP
END SELECT
CALL ListSpooledFiles(QueList$(),Count%,Stat%)
IF Stat% <> 0 THEN
	print "     * Error number ";Stat%;" occurred listing queue, can't continue"
	STOP
END IF
print "Press any key for a list of the contents of the PRINT queue (ESC quits)"
CALL WaitForKey
CLS
locate 4,1
print "List of";Count%;" queued files: "
IF Count% > 0 THEN
	FOR x% = 1 to Count%
		print "    ";QueList$(x%)
	NEXT x%
END IF

print " "
print "We will now remove files from the queue.  Enter the FULLY QUALIFIED"
print "path and file name of the file or files to be removed for the queue"
print "Wild cards are OK, but must include a drive/path specification"
print " "
line input "Please enter FULL specification of file to cancel: ";x$
CALL RemoveFromSpool(x$,Stat%)
SELECT CASE Stat%
	Case 0
      PRINT "Files successfully removed from queue"
		CALL ListSpooledFiles(QueList$(),Count%,Stat%)
		print "Press any key for new list of queued files. (ESC quits) "
      CALL WaitForKey
      print "PRINT queue contains";Count%;" files"
		IF Count% > 0 THEN
			FOR x% = 1 to Count%
				print "    * ";QueList$(x%)
			NEXT x%
		END IF
	CASE 2,3,&H0C
		PRINT "    * INVALID name given"
	CASE ELSE
		PRINT "    * Error number ";Stat%;" occurred removeing file, demo stopping"
		STOP
END SELECT
Print " "
Print "Press any key for next step, ESC to stop demo"
Call WaitForKey

CLS
print " "
print "Part 4: Cancel all jobs in print queue"
print "This last portion will remove all remaining jobs from the spooler queue."
print "Press any key to remove all files.  (ESC Quits)"
CALL WaitForKey
print "Clearing PRINT queue."
CALL CancelAllSpool(Stat%)
CALL ListSpooledFiles(QueList$(),Count%,Stat%)
print "List of queued files: "
IF Count% > 0 THEN
	FOR x% = 1 to Count%
		print "    * ";QueList$(x%)
	NEXT x%
ELSE
   print "    NONE!"
END IF

print TAB(10);"GoodBye from the SPOOLKIT demo!"

end

SUB WaitForKey
WHILE NOT INSTAT:WEND
a$ = inkey$
IF a$ = CHR$(27) THEN
   locate 24,1
   print "Demo stopped at user request"
   STOP
END IF
END SUB
```
{% endraw %}

## TTD100.BAS

{% raw %}
```bas
'
'  Demo using PowerBasic 2.10 Directory command along with using the DTA
'  area to get extended file information.
'

$LINK "TTDIR100.PBU"

DIM UDir$(255)

Path$ = COMMAND$
IF Path$ = "" THEN
  Path$ = "*.*"
END IF

N% = 0
CALL GetDir100(Path$, UDir$(), N%)

FOR J% = 0 TO N%
  PRINT UDir$(J%)
NEXT J%

```
{% endraw %}

## TTD101.BAS

{% raw %}
```bas
'
'  Demo using PowerBasic 2.10 Directory command along with using the DTA
'  area to get extended file information.
'

OPTION BASE 1

$LINK "TTDIR101.PBU"

DIM UDir$(255)

Path$ = COMMAND$
IF Path$ = "" THEN
  Path$ = "*.*"
END IF

N% = 0
CALL GetDir(Path$, UDir$(), N%)

FOR J% = 1 TO N%
  PRINT UDir$(J%)
NEXT J%

```
{% endraw %}

## TTD105.BAS

{% raw %}
```bas
'
'  Demo using PowerBasic 2.10 Directory command along with using the DTA
'  area to get extended file information.
'

OPTION BASE 1

$LINK "TTDIR105.PBU"

DIM UDir$(255,3), FFDate%(255,6), FFSize&(255)

Path$ = COMMAND$
IF Path$ = "" THEN
  Path$ = "*.*"
END IF

N% = 0
CALL GetDirectory(Path$, UDir$(), FFDate%(), FFSize&(),N%)

FOR J% = 1 TO N%
  PRINT USING "\         \"; UDir$(J%, 1);
  PRINT USING "\    \";      UDir$(J%, 2);
  PRINT UDir$(J%, 3); " ";
  PRINT USING "##\"; FFDate%(J%,1); FFdate%(J%, 2);
  PRINT USING "##  "; FFDate%(J%,3);
  PRINT USING "##:"; FFDate%(J%,4); FFDate%(J%,5);
  PRINT USING "##  "; FFDate%(J%,6);
  PRINT USING "###,###,###"; FFSize&(J%)
NEXT J%

PRINT USING "Number of Files: ###,###,###"; N%

T& = 0
FOR J% = 1 TO N%
  T& = T& + FFSize&(J%)
NEXT J%

PRINT "Total Size.....: ";
PRINT USING "###,###,###"; T&

```
{% endraw %}

## TTDIR100.BAS

{% raw %}
```bas
$COMPILE UNIT
$INCLUDE "REGNAMES.INC"

'
' ┌─────────────────────────────────────────────────────────────────────┐
' │                                                                     │
' │ Function Name:  GetDir                                              │
' │ Date.........:  90/11/16                                            │
' │                                                                     │
' │ Description..:  Reads the directory specified by the user and       │
' │                 returns an array of the files found.                │
' │                                                                     │
' └─────────────────────────────────────────────────────────────────────┘
'
' Original Code.  Kept to illustrate the difference between the first 'draft'
' of the code and the current version.
'
SUB GetDir100(Path$, FilesFound$(), NumFiles%) LOCAL PUBLIC

LOCAL A%
LOCAL Att$
LOCAL DTAOFS&
LOCAL DTASEG&
LOCAL FD$
LOCAL FDate%
LOCAL FSize&
LOCAL FT$
LOCAL FTHour%
LOCAL FTime%
LOCAL LowB%
LOCAL UFn2$
LOCAL UpprB%
LOCAL X%


'
' Get the lower bound and upper bound of the array for the directory.
'

  LowB%  = LBOUND(FilesFound$(1))
  UpprB% = UBOUND(FilesFound$(1))

  NumFiles%   = 0

  FilesFound$(LowB%) = DIR$(Path$,55)

  DO WHILE (LEN(FilesFound$(LowB%)) > 0  AND  LowB% <= UpprB%)
    INCR NumFiles%, 1

'
'   Make a call to get the DTA on the file just read in.
'
    REG %AX, &H2F00
    CALL INTERRUPT &H21

    DTASEG& = REG(%ES)
    DTAOFS& = REG(%BX)

    DEF SEG = DTASEG&
    A%     = PEEK(DTAOFS&+21)													     ' Attributes
    FSize& = (PEEK(DTAOFS&+27) * 256) + PEEK(DTAOFS&+26)   ' Size
    FDate% = PEEKI(DTAOFS&+24)                             ' Date
    FTime% = PEEKI(DTAOFS&+22)                             ' Time
    DEF SEG

'
'   Convert the number into a string:  Location 1 = System
'                                               2 = Hidden
'                                               3 = Read only
'                                               4 = Archive
'                                               5 = Directory Entry
'                                               6 = Blank for padding

    Att$ = "..... "
    IF (A% AND 32%) THEN
      MID$(Att$, 4, 1) = "A"
    END IF

    IF (A% AND 16%) THEN
      MID$(Att$, 5, 1) = "D"
    END IF

    IF (A% AND 4%) THEN
      MID$(Att$, 1, 1) = "S"
    END IF

    IF (A% AND 2%) THEN
      MID$(Att$, 2, 1) = "H"
    END IF

    IF (A% AND 1%) THEN
      MID$(Att$, 3, 1) = "R"
    END IF

'
' Reformat the file name into a string 13 characters in length.  Separate the
' file name from the extension.  The file name is the right hand most portion
' of the string.  The extension is the left most portion of the string.  The
' 13th character is a blank for padding.
'

    UFn2$ = SPACE$(13)
    IF (FilesFound$(LowB%) = ".")  OR  (FilesFound$(LowB%) = "..")  THEN
      MID$(UFn2$, 1, LEN(FilesFound$(LowB%))) = FilesFound$(LowB%)
    ELSE
      X% = INSTR(FilesFound$(LowB%), ".")
      IF X% > 0 THEN
        MID$(UFn2$,  1, LEN(MID$(FilesFound$(LowB%), 1, X%-1))) = MID$(FilesFound$(LowB%), 1, X%-1)
        MID$(UFn2$, 10, LEN(MID$(FilesFound$(LowB%), X%+1))) = MID$(FilesFound$(LowB%), X%+1)
      ELSE
        MID$(UFn2$,  1, LEN(FilesFound$(LowB%))) = FilesFound$(LowB%)
      END IF
    END IF

'
'   Convert the File time into a string.
'
    FTHour% = FTime% \ 2048%
    IF FTHour% < 0 THEN
      INCR FTHour%, 32%                  ' Fix for some P.M. hours
    END IF

    FT$ = USING$("##", FTHour%) + ":" + USING$("##", (FTime% AND 2047%) \ 32%) + ":" + USING$("##", FTime% AND 31%)
    REPLACE ANY " " WITH "0" IN FT$

'
'   Convert the file date into a string.
'

    FD$ = USING$("##", (FDate% \ 512) + 80%) + "/" + USING$("##", (FDate% AND 511%) \ 32%) + "/" + USING$("##", FDate% AND 31%)
    REPLACE ANY " " WITH "0" IN FD$

    FilesFound$(LowB%) = UFn2$ + Att$ + USING$("######## ", FSize&) + FT$ + " "+ FD$

    INCR LowB%, 1

'
'   If not the last entry in the array read another directory entry.
'

    IF LowB% <= UpprB% THEN
      FilesFound$(LowB%) = DIR$
    END IF
  WEND

END SUB
```
{% endraw %}

## TTDIR101.BAS

{% raw %}
```bas
$COMPILE UNIT
$INCLUDE "REGNAMES.INC"

'
' ┌─────────────────────────────────────────────────────────────────────┐
' │                                                                     │
' │ Function Name:  GetDir                                              │
' │ Date.........:  90/11/16                                            │
' │                                                                     │
' │ Description..:  Reads the directory specified by the user and       │
' │                 returns an array of the files found.                │
' │                                                                     │
' └─────────────────────────────────────────────────────────────────────┘
'
SUB GetDir(Path$, FilesFound$(), NumFiles%) LOCAL PUBLIC

LOCAL A%
LOCAL Att$
LOCAL DTAOFS&
LOCAL DTASEG&
LOCAL FD$
LOCAL FDate%
LOCAL FSize&
LOCAL FT$
LOCAL FTHour%
LOCAL FTime%
LOCAL LowB%
LOCAL UFn2$
LOCAL UpprB%
LOCAL X%
LOCAL DTAAttr&
LOCAL DTADate&
LOCAL DTASize&
LOCAL DTATime&


'
' Get the lower bound and upper bound of the array for the directory.
'

  LowB%  = LBOUND(FilesFound$(1))
  UpprB% = UBOUND(FilesFound$(1))

  FilesFound$(LowB%) = DIR$(Path$,55)
'
'   Make a call to get the DTA on the file just read in.
'
  REG %AX, &H2F00
  CALL INTERRUPT &H21

  DTASEG& = REG(%ES)
  DTAOFS& = REG(%BX)
  DTAAttr& = DTAOFS& + 21
  DTASize& = DTAOFS& + 26
  DTADate& = DTAOFS& + 24
  DTATIME& = DTAOFS& + 22

  DO WHILE (LEN(FilesFound$(LowB%)) > 0  AND  LowB% <= UpprB%)

    DEF SEG = DTASEG&
      A%     = PEEK(DTAAttr&)                         ' Attributes
      FSize& = PEEKL(DTASize&)                        ' Size (Fix)
      FDate% = PEEKI(DTADate&)                        ' Date
      FTime% = PEEKI(DTATime&)                        ' Time
    DEF SEG

'
'   Convert the number into a string:  Location 1 = System
'                                               2 = Hidden
'                                               3 = Read only
'                                               4 = Archive
'                                               5 = Directory Entry
'                                               6 = Blank for padding

    Att$ = "..... "
    IF (A% AND 32%) THEN
      MID$(Att$, 4, 1) = "A"
    END IF

    IF (A% AND 16%) THEN
      MID$(Att$, 5, 1) = "D"
    END IF

    IF (A% AND 4%) THEN
      MID$(Att$, 1, 1) = "S"
    END IF

    IF (A% AND 2%) THEN
      MID$(Att$, 2, 1) = "H"
    END IF

    IF (A% AND 1%) THEN
      MID$(Att$, 3, 1) = "R"
    END IF

'
' Reformat the file name into a string 13 characters in length.  Separate the
' file name from the extension.  The file name is the right hand most portion
' of the string.  The extension is the left most portion of the string.  The
' 13th character is a blank for padding.
'

    UFn2$ = SPACE$(13)
    IF (FilesFound$(LowB%) = ".")  OR  (FilesFound$(LowB%) = "..")  THEN
      MID$(UFn2$, 1, LEN(FilesFound$(LowB%))) = FilesFound$(LowB%)
    ELSE
      X% = INSTR(FilesFound$(LowB%), ".")
      IF X% > 0 THEN
        MID$(UFn2$,  1, LEN(MID$(FilesFound$(LowB%), 1, X%-1))) = MID$(FilesFound$(LowB%), 1, X%-1)
        MID$(UFn2$, 10, LEN(MID$(FilesFound$(LowB%), X%+1))) = MID$(FilesFound$(LowB%), X%+1)
      ELSE
        MID$(UFn2$,  1, LEN(FilesFound$(LowB%))) = FilesFound$(LowB%)
      END IF
    END IF

'
'   Convert the File time into a string.
'
    FTHour% = FTime% \ 2048%
    IF FTHour% < 0 THEN
      INCR FTHour%, 31%                  ' Fix for some P.M. hours
    END IF

    FT$ = USING$("##", FTHour%) + ":" + USING$("##", (FTime% AND 2047%) \ 32%) + ":" + USING$("##", FTime% AND 31%)
    REPLACE ANY " " WITH "0" IN FT$

'
'   Convert the file date into a string.
'

    FD$ = USING$("##", (FDate% \ 512) + 80%) + "/" + USING$("##", (FDate% AND 511%) \ 32%) + "/" + USING$("##", FDate% AND 31%)
    REPLACE ANY " " WITH "0" IN FD$

    FilesFound$(LowB%) = UFn2$ + Att$ + USING$("######## ", FSize&) + FT$ + " "+ FD$

    INCR LowB%, 1

'
'   If not the last entry in the array read another directory entry.
'

    IF LowB% <= UpprB% THEN
      FilesFound$(LowB%) = DIR$
    END IF
  WEND

  NumFiles% = LowB% - LBOUND(FilesFound$(1))          ' Calculate number of
                                                      ' files found.

END SUB
```
{% endraw %}

## TTDIR105.BAS

{% raw %}
```bas
$COMPILE UNIT
$INCLUDE "REGNAMES.INC"

'
' ┌─────────────────────────────────────────────────────────────────────┐
' │                                                                     │
' │ Function Name:  GetDirectory                                        │
' │ Date.........:  90/11/16                                            │
' │                                                                     │
' │ Description..:  Reads the directory specified by the user and       │
' │                 returns an array of the files found.                │
' │                                                                     │
' └─────────────────────────────────────────────────────────────────────┘
'
'   Modified.....:  90/11/23
'
'                   1.01 - Changed the return of the complete
'                          directory in FileFound$ to the filename,
'                          attribute, date and time to separate
'                          fields.
'
'                   1.02 - Changed the calculation for the number of
'                          files. I did a direct calc outside the loop
'                          instead of incrementing a counter within
'                          the loop.
'
'                   1.03 - Fixed the portion that calculated the file
'                          size. I used the wrong type of 'peek'
'                          function and the maximum size it returned
'                          was 65,535.
'
'                   1.04 - Passed file string information in one
'                          string and date/time information in one
'                          array.
'
'                   1.05 - Moved the DOS call to get the DTA address.
'                          The program only needs to find out the
'                          address once!
'

SUB GetDirectory(Path$, FileInfo$(), FIDate%(), FISize&(), NumFiles%) LOCAL PUBLIC

'  The parameters for the sub-routine are as follows:
'
'        Path$            - The file path
'
'
'        FileInfo$(r,c)   - The files found.  A string array with up
'                           to 'r' number of elements with 'c'
'                           columns.  Column 1 is the file name.
'                           Column 2 is the file extension and column
'                           3 is the attributes of the file.
'
'
'
'        FIDate%(r,c)    - The Date and time for each file found. This
'                          is a two dimensional array.  The number of
'                          rows ('r') must be the same as for the
'                          FileInfo$ field.  The number of columns
'                          ('c') must be six (For Year, Month, Day,
'                          Hour, Minute, Second)
'
'        FISize&(r)     -  The size in bytes of each file.
'
'        NumFiles%       - The number of files found in the directory
'                          specified by PATH$
'
'

LOCAL A%
LOCAL CDHiB%
LOCAL CDLowB%
LOCAL CDMidB%
LOCAL CTHiB%
LOCAL CTLowB%
LOCAL CTMidB%
LOCAL DTAAttr&
LOCAL DTADate&
LOCAL DTAOFS&
LOCAL DTASEG&
LOCAL DTASize&
LOCAL DTATime&
LOCAL FDate%
LOCAL FF$
LOCAL FTHour%
LOCAL FTime%
LOCAL LowB%
LOCAL UpprB%

'
' Get the lower and upper bound for all of the arrays used.  I am assuming
' that all arrays are defined with the same lower and upper bound ranges.
'

  LowB%  = LBOUND(FileInfo$(1))
  UpprB% = UBOUND(FileInfo$(1))

  CDLowB%    = LBOUND(FIDate%(2))
  CDMidB%    = CDLowB% + 1%
  CDHiB%     = CDLowB% + 2%

  CTLowB%    = CDLowB% + 3%
  CTMidB%    = CDMidB% + 3%
  CTHiB%     = CDHiB%  + 3%

  FF$ = DIR$(Path$, 55%)

'
'   Make a call to get the DTA on the file just read in.  I moved this code
'   to outside the loop as I only have to get the address once!
'
  REG %AX, &H2F00
  CALL INTERRUPT &H21

  DTASEG& = REG(%ES)
  DTAOFS& = REG(%BX)
  DTAAttr& = DTAOFS& + 21
  DTASize& = DTAOFS& + 26
  DTADate& = DTAOFS& + 24
  DTATIME& = DTAOFS& + 22

  DO WHILE (LEN(FF$) > 0%  AND  LowB% <= UpprB%)

    DEF SEG = DTASEG&
      A%             =  PEEK(DTAAttr&)
      FISize&(LowB%) = PEEKL(DTASize&)
      FDate%         = PEEKI(DTADate&)
      FTime%         = PEEKI(DTATime&)
    DEF SEG

    FileInfo$(LowB%, 1) = FF$
    FileInfo$(LowB%, 2) = " "
    X% = INSTR(FF$, ".")
    IF X% > 0 THEN
      FileInfo$(LowB%, 1) = MID$(FF$, 1, X%-1)
      FileInfo$(LowB%, 2) = MID$(FF$, X%+1)
    END IF

    FileInfo$(LowB%, 3%) = "....."
    IF (A% AND 32%) THEN
      MID$(FileInfo$(LowB%, 3%), 4, 1) = "A"
    END IF

    IF (A% AND 16%) THEN
      MID$(FileInfo$(LowB%, 3%), 5, 1) = "D"
    END IF

    IF (A% AND 4%) THEN
      MID$(FileInfo$(LowB%, 3%), 1, 1) = "S"
    END IF

    IF (A% AND 2%) THEN
      MID$(FileInfo$(LowB%, 3%), 2, 1) = "H"
    END IF

    IF (A% AND 1%) THEN
      MID$(FileInfo$(LowB%, 3%), 3, 1) = "R"
    END IF

    FIDate%(LowB%, CTLowB%) = FTime% \ 2048%           ' Hours
    IF FIDate%(LowB%, CTLowB%) < 0% THEN
      INCR FIDate%(LowB%, CTLowB%), 31%                ' Fix for some P.M. hours
    END IF

    FIDate%(LowB%, CTMidB%) = (FTime% AND 2047%) \ 32% ' Minutes
    FIDate%(LowB%, CTHiB%)  = FTime% AND 31%           ' Seconds

    FIDate%(LowB%, CDLowB%) = (FDate% \ 512%) + 80%    ' Year
    FIDate%(LowB%, CDMidB%) = (Fdate% AND 511%) \ 32%  ' Month
    FIDate%(LowB%, CDHiB%)  = FDate% AND 31%           ' Day

    INCR LowB%, 1

'
'   If not the last entry in the array read another directory entry.
'

    IF LowB% <= UpprB% THEN
      FF$ = DIR$
    END IF
  WEND

  NumFiles% = LowB% - LBOUND(FileInfo$(1))            ' Calculate number of
                                                      ' files found.

END SUB
```
{% endraw %}

## TTDIR105.DOC

{% raw %}
```

PowerBasic Directory Function:  Version 1.05   November 24, 1990


What is the program:

    The files in this archive use the Directory function of PowerBasic
    2.10.  I have added a sub-routine to read a directory along with
    additional information about each file in that directory.


How it works:

    The heart of the program is the 'DIR$' function included in the
    PowerBasic 2.10 package.  I used this as the base for the GetDirectory
    functions.  When I ran a test call to get the 'DTA' after doing a
    'DIR$' I found that the DTA area had all of the additional information
    about the file.  Using this fact I wrote a sub-routine to get a
    complete directory.

    The sub-routine in 'TTDIR100.BAS' is the first draft of this
    sub-routine.  All of the information about the directory is stored in a
    string array.

    The sub-routine in 'TTDIR101.BAS' is the second draft.  I corrected a
    problem in calculating the size of the file.  Also, I found out that I
    could place the call to get the 'DTA' outside of the loop reading the
    directory.

    The sub-routine in 'TTDIR105.BAS' is the latest draft.  I placed all
    text information into one string array.  Also, I moved the file date
    and time into a separate integer array and the file size into a third
    separate array.  I did this to see if using integer arrays were faster
    than appending everything into a string array.  There should be a
    program called 'TTEST5.BAS' that will call all of the sub-routines to
    show the difference in speed.

    If you don't have PowerBasic you still can use these program.  Just
    replace the first call to 'DIR$' with the DOS 'FINDFIRST' function and
    the second call to 'DIR$' with the DOS 'FINDNEXT' function.

    The sub-routines themselves have comments on the parameters expected.
    If you have any questions, comments, for suggestions on this subroutine
    you can reach me on CompuServe.  My ID is 72540,2315.




Thanks
      Thomas Traynor
      72540,2315
```
{% endraw %}

## TTEST5.BAS

{% raw %}
```bas
'
'  Timing test using the two directory routines I wrote.
'  This program very slow running program!
'


$LINK "TTDIR105.PBU"
$LINK "TTDIR101.PBU"
$LINK "TTDIR100.PBU"

' Arrays for old sub-routine:

DIM UDir$(255)


' Arrays for new sub-routine:

DIM UD$(255, 3), FFD%(255,6), FFS&(255)

%MaxRuns = 100

Path$ = COMMAND$
IF Path$ = "" THEN
  Path$ = "*.*"
END IF

N% = 0

CLS

PRINT "Kick back and take it easy."
PRINT
PRINT
PRINT "The author of this program developed these programs using an IBM PS/2"
PRINT "model 50 (runs around 8mHz).  The program took about 2 minutes on that"
PRINT "machine (I haven't bought a math chip yet!)."
PRINT ""
PRINT "This program is calling each sub-routine ";
PRINT %MaxRuns
PRINT "times without printing the directory on the screen.  This should give"
PRINT "you a good idea of the speed differences between the three versions of"
PRINT "the sub-routines."
PRINT
PRINT

UStart0! = TIMER
FOR J% = 1 TO %MaxRuns
  CALL GetDir100(Path$, UDir$(), N%)
NEXT J%
UEnd0! = TIMER

UStart! = TIMER
FOR J% = 1 TO %MaxRuns
  CALL GetDir(Path$, UDir$(), N%)
NEXT J%
UEnd! = TIMER

UStart2! = TIMER
FOR J% = 1 TO %MaxRuns
  CALL GetDirectory(Path$, UD$(), FFD%(), FFS&(), N%)
NEXT J%
UEnd2! = TIMER

PRINT       "Original Version routine took:      ";
PRINT USING "######.### Seconds"; UEnd0!  - UStart0!
PRINT       "Original Version modified slightly: ";
PRINT USING "######.### Seconds"; UEnd!  - UStart!
PRINT       "Version 1.05 took.................: ";
PRINT USING "######.### Seconds"; UEnd2! - UStart2!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2634

     Volume in drive A has no label
     Directory of A:\

    PBWND2   EXE     98947   9-29-90   7:54a
    PORT4    BAS      3736  11-11-90  10:02p
    READ123  BAS      2751   7-20-89  12:58p
    RESWOR   ZIP     33792  12-04-90  10:14p
    SCANP2   ZIP      1199  10-31-90   6:23p
    SPECTERN BAS     10999  11-11-90  10:57p
    SPOOLK   ZIP     34048  12-04-90   7:38p
    TTDIR1   ZIP     91008  11-30-90   5:36p
    APLIB    ZIP     69632   9-18-90   7:46a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT      1017   6-27-91   3:17p
           11 file(s)     347157 bytes
                           11264 bytes free
