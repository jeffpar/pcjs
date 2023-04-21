---
layout: page
title: "PC-SIG Diskette Library (Disk #2633)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2633/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2633"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## APL-QREF.BAS

{% raw %}
```bas

             QUICK REFERENCE FOR HB'S ALL-PURPOSE LIBRARY:

  note: I have a .BAS extension on my filename so I'll come up on the pick
   list and you can pop me up quickly. Don't try to compile me !!

                >>>>>>>>>>>>> in SETUP-H.BAS  <<<<<<<<<<<<<
DEFINT A-Z
 DEFINE's: %False,  %True; Register names;  %Background = 16  %Center = 0
 PRINTERS:  %Star10X = 1:  %StarNX1000 = 2:  %IBMX24 = 3:  %LQ2500 = 4

                            ((( COLORS )))
   %Blk = 0:     %Blu = 1:    %Grn = 2:    %Cyn = 3:    %Red = 4:     %Vlt = 5
   %Brn = 6:     %Gry = 7:    %DGry = 8:   %LBlu = 9:   %LGrn = 10:   %LCyn = 11
   %LRed = 12:   %Pnk = 13:   %Ylo = 14:   %Wht = 15:   %Flash = 256

               >>>>>>>>>>>>> in INIT-U.BAS  <<<<<<<<<<<<<
SUB Initialize (PrinterType)
InitPrt$ GraphicsChrSetOn$ GraphicsChrSetOff$ BoldPrtOn$ BoldPrtOff$
ItalicPrtOn$ ItalicPrtOff$ RegPrt$ FastPrt$ WidePrt$ BigPrtOn$ BigPrtOff$
LQPrt$ DraftPrt$ MicroPrtOn$ MicroPrtOff$ ElitePrt$ PicaPrt$ NeedDCon VideoSeg& = &HB800: CursorTop = 6: CursorBottom = 7

               >>>>>>>>>>>>> in FENTRY-U.BAS  <<<<<<<<<<<<<
 %ReadRodent = 3                      %RightButton = 2
 %LeftButton = 1                      %MaxDecPlaces = 4
SUB ENTERSTRING (Wkg$,FLength,Opt$)
SUB ENTERNUMBER  (Wkg#, Masq$, Opt$)   SUB ENTERSSN  (A$, Opt$)
SUB ENTERDATE  (A$, Opt$)              SUB FASTPHONE  (A$, Opt$)
SUB RotaDate  (D$,Opt$)                SUB PressAKey
SUB ENTERTIME  (A$, Opt$)              FUNCTION GetYesOrNo
                                       SUB ENTERYESNO  (Yes)

           >>>>>>>>>>>>> in BOXES-U.BAS  <<<<<<<<<<<<<
SUB BOXMESSAGE(CornerLin, CornerCol, Margin)
SUB BOXMESSAGE2 (CornerLin, CornerCol, Margin, I$(1), Items%, Maxx)
SUB POPWINDOW
SUB PWSetUp (Fld$,Z)
SUB QBOX (L, C, Lines%, Message$, AnsFldLength)

                             >>>>>>>>>>>>> in MENUS-U.BAS  <<<<<<<<<<<<<
SUB TOPMENU (Lines% ,Choice, TLine$)
SUB POPMENU (TopKey$,MenuRight,MenuDown,Choice,MLine$,MCode$)
SUB SUPERMENU (MenuData$ (), MenuRight, MenuDown, Choice, Title$, Ky%)


'   ====
' Notes:               *** HOW TO USE SUPERMENU ***
'                         ===================
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

 FUNCTION FigDate&(A$)
 FUNCTION WriteDate$ (W&)
 FUNCTION WkDay$(W&)
 FUNCTION YearsSince (D0$)
 FUNCTION FlipDate$ (WrittenDate$)
 FUNCTION UnflipDate$ (FlippedDate$)

                   >>>>>>>>>>>>> in MISC-U.BAS  <<<<<<<<<<<<<

SUB SCREENPUSH
SUB SCREENPOP
SUB RestoreDOSScreen
SUB PRINTLINE (L$)
SUB FileFunctions (MenuRight, MenuDown, Choice$)
FUNCTION IsBlank (W$)
FUNCTION GetAttr
FUNCTION IsRodent           ' finds if you have a rodent and also resets it
SUB Mouse(MV1, MV2, MV3, MV4)
FUNCTION GetCurrentDrive$
FUNCTION GetCurrentDir$
FUNCTION GetFreeSpace! (Drv$)
FUNCTION ReadParamFor (A$)        ' this reads parameters from the command tail
SUB ClearLine
SUB DirFirst (F$, FileSize&, DateCode&, TimeCode&)
SUB DirNext (F$, FileSize&, DateCode&, TimeCode&)
FUNCTION DecodeDate$ (DateCode&)
FUNCTION DecodeTime$ (TimeCode&)
```
{% endraw %}

## APLIB-H.BAS

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

  %Okay               =   0
  %FileNotFound       = 1000   'You tried to open a non-existant file
  %FileAlreadyCreated = 1001   'You tried to create an already-created file.
  %InvalidCall        = 1002   'You used a command that doesn't exist.
  %FileNotDBLOW       = 1003   'The file exists, but is not an DBLOW file.
  %TooManyFiles       = 1004   'You have opened more than MaxFiles files.
  %KeyNotFound        = 1005   'You have referenced a non-existant key.
  %EndOfFile          = 1006   '
  %FileNotOpen        = 1007
  %KeyAlreadyExists   = 1008
  %TooManyKeys        = 1009
  %FileNotDBHIGH      = 1010
  %FileAllowsDups     = 1011   'You tried to open a Duplicate-key file in
                               'non-Duplicate mode
  %BadParameter       = 1012   'Parameter out of range


```
{% endraw %}

## BOXES-U.BAS

{% raw %}
```bas



'==============================================================================
'                         ALL-PURPOSE LIBARY
'
'                    THE FOURTH UNIT -- BOXES-U.BAS
'==============================================================================
'                                                               -- 2-18-90
'                                                                  H Ballinger
                            $COMPILE UNIT
                            $ERROR ALL OFF


 DEFINT A-Z
 %Center = 0

 EXTERNAL RD$, ColorDisplay, NeedDCon, FlashBox
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

 LOCAL I$(), MaxL, Items%, D$

  LOCATE ,,0 '                                           extinguish the cursor
BReadlines:
 DIM I$(23)                      ' each I$ is a msg line; # of lines is Items%
 READ D$
 WHILE D$ <> "END" AND Items% < 23 '                          (from data list)
   INCR Items% '                                                 count 1 item
   I$(Items%) = D$ '                                   plug the data into array
   IF LEN(D$) > MaxL THEN MaxL = LEN(D$)  '         MaxL = length of longest I$()
   READ D$ '                                                    ... and repeat.
   WEND

          CALL BOXMESSAGE2 (CornerLin, CornerCol, Margin, I$(), Items%, MaxL)
 END SUB                                                         REM BOXMESSAGE
'______________________________________________________________________________

SUB BOXMESSAGE2 (CornerLin, CornerCol, Margin, I$(1), Items%, MaxL) PUBLIC

'    Use this call if you wish to set text lines -- I$() -- at runtime instead
'    of using DATA statements ...

 LOCAL Wid, Height, I, P, Y, Z, F, Bar$

BSetVars:
 Items% = MIN (Items%, 23) '                  can't contain > 23 limes of text.
 Margin = MIN ((23 - Items%) / 2, Margin) '    if margin too big, reduce.

 Wid = MaxL + 4 + 4*Margin '        Total width of box: length of longest text
 '                                  string + 2 for sides, 4 for spaces, and 4
 '                                  for each unit of margin (2 each side).

 Items% = MIN (Items%, 23)
 Margin = MIN ((23 - Items%) / 2, Margin)

 Height = Items% + 2 + 2*Margin '     Height: add 2 for each unit of margin
 Wid = MIN (Wid, 80)
 Height = MIN (Height, 25)

 IF CornerCol = %Center THEN CornerCol = 41 - Wid / 2  '  horiz centering ...

 CornerCol = MIN (CornerCol, 81 - Wid) '       If CornerCol + Wid > 80, fix it.

 CornerCol = MAX (CornerCol, 1) '                            CornerCol not < 1.


 IF CornerLin = %Center THEN CornerLin = 13 - Height / 2

 CornerLin = MIN (CornerLin, 26-Height)

 CornerLin = MAX (1, CornerLin)
'                                             error traps keep box on screen

 Bar$ = "\"+SPACE$(Wid-4)+"\" '                                 set a line mask

BPrint:
 LOCATE CornerLin, CornerCol
 I = BoxColor MOD 16
 P = BoxColor \ 16 '                 set local variables for colors and
 F = FlashBox * -16 '                  if box to flash, let F = 16
 COLOR  I + F ,  P
 '                                                                print top bar
 PRINT CHR$(201);: PRINT STRING$ ((Wid-2), 205);: PRINT CHR$ (187);
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
   PRINT USING BAR$; SPACE$(2*Margin + (MaxL-Len(I$(Y))) / 2 + .9) + I$(Y);
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
 LOCATE Z, CornerCol, 1: PRINT CHR$ (200);: PRINT STRING$ ((Wid-2), 205);
   PRINT CHR$(188);
 COLOR  I ,  P
 FlashBox = 0


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
 COLOR FldColor MOD 16, FldColor \ 16

 END SUB                                                REM PWSetUp

' =========================================================================

SUB QBOX (L%, C%, Lines%, Message$, AnsFldLength) PUBLIC

  LOCAL I$(), AFCol, AFLin, Items, MaxL
  DIM I$(4)
  AnsFldLength = MIN (AnsFldLength, 75) '           trim excessive ans length

  IF Lines% > 1 THEN
'                                 THREE LINE Q-BOX
    IF L = %Center THEN L = 11
    L = MIN (L, 21)
    Message$ = LEFT$ (Message$, 76) '  trim excessive prompt
    I$(1) = Message$
    Items% = 3
    I$(2) = " "
    I$(3) = " "
    MaxL = MAX (LEN (Message$), AnsFldLength)
    IF C = %Center THEN C = FIX ((76 - MaxL) / 2)
    C = MIN (C, 76 - MaxL)
    AFCol = C + 2
    IF LEN(Message$) > AnsFldLength THEN
      AFCol = C + 2 + (LEN(Message$)-AnsFldLength)/2
    END IF
    AFLin = L + 3

  ELSE
'                             ONE LINE Q-BOX:
'                                      if it's all too long, trim prompt ...
    Message$ = LEFT$ (Message$, 75 - AnsFldLength)
    IF C = %Center THEN C = (80 - LEN (Message$) - AnsFldLength) / 2
    IF L = %Center THEN L = 12
    I$(1) = Message$ + SPACE$ (AnsFldLength + 1)
    Items% = 1
'                                  if C + box width > 80, decrease it to fit
    C = MIN (C, 76 - LEN(Message$) - AnsFldLength)
    AFCol = C + 3 + LEN (Message$)
    AFLin = MIN (L+1, 24)
    MaxL = LEN(Message$) + AnsFldLength + 1

  END IF

      CALL BOXMESSAGE2 (L,C,0,I$(),Items%,MaxL)

  LOCATE AFLin,AFCol,1
  END SUB

    '  exit with cursor set correctly at the end of the prompt$ so you
    '   can immediately call a keyboard input routine like those in FENTRY-U.

' --------------------------------------------------------------------------
SUB Marker2 (Z$)
  LOCAL L, C
  L = CSRLIN: C = POS
  LOCATE 1,1: PRINT ">>>>>>> "; Z$; " <<<<<<<<"
  DO: LOOP UNTIL INKEY$ <> ""
  LOCATE L,C
END SUB
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
'      HB'S ALL-PURPOSE LIBRARY, FORMATTED ENTRY UNIT -- FENTRY-U.BAS
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
 %Center = 0

 EXTERNAL RD$, ColorDisplay, NeedDCon, SoundOn
 EXTERNAL BoxColor, FldColor, WinColor, ScrColor
 EXTERNAL CursorTop, CursorBottom, Ln, Col
 EXTERNAL PressAKeyBeep$, OopsBeep$, TinyBeep$
 EXTERNAL LocalAreaCode$,InsertStatus, Record%

 SHARED AdvanceCursor

 DECLARE FUNCTION FigDate& (STRING)
 DECLARE FUNCTION WriteDate$ (LONG)
 DECLARE FUNCTION GetDate$ ()

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
'         event terminated the entry process. At any time during string entry
'         the operator can press [CR] or DOWN-ARROW to enter & go on; [F2] can
'         be pressed  (I use F2 for Database Function commands  -- Clear,
'         Find, Next/Prev, Save etc.) or F1 can also be made active (for a
'         help key) ...

'         UPDATE NOTE 11-90: InsertStatus is now an external var so it
'         remains on or off from data field to data field.


  LOCAL Fpos, Masq$,Starting$, Numeric, Auto, Caps, UpOut, BackOut, K$,_
       NoNeg,  Z, NumKStrokes, StartWord, EndWord, Done


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
'' IF INSTR (Opt$, "Ins") THEN InsertStatus = %True

 IF FLength > 1 THEN
    Masq$ = "\"+SPACE$(FLength-2)+"\"
 ELSEIF FLength = 1 THEN
    Masq$ = "!"
 ELSE
    PRINT "SETUP ERROR -- STRING FIELD HAS LENGTH < 1 !!"
    Done = %True
 END IF

 FPos = 1 + AdvanceCursor    '                    this simulates a part-full
 NumKStrokes = AdvanceCursor '                    field. Used in ROTADATE.

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
             FPos = 1  '                      otherwise place it at position #1
           END IF
         ELSE
           GOSUB EDelKey '                                else delete character.
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

 IF FPos <= FLength _
    AND NOT (InsertStatus=%True AND (LEN(Wkg$) => FLength) AND NumKStrokes >1)_
      THEN

'  if field isn't full yet, or
'  if it is, you don't have 'insert' on, unless this is the first keystroke ...
'                                                          (whew !!)

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
 AdvanceCursor = 0
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
  IF FPos =< FLength THEN
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
  IF FPos = LEN(Wkg$) THEN
    Wkg$ = LEFT$ (Wkg$, FPos-1)
  ELSEIF FPos < LEN(Wkg$) THEN
    Wkg$ = LEFT$(Wkg$, FPos-1) + MID$(Wkg$, FPos+1)
  END IF
'                                              (if FPos > LEN don't do nothin')
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
''''''    IF LTRIM$ (Wkg$) <> "" THEN Wkg$ = Starting$
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
 IF INSTR (Opt$, "N/A") THEN OKToReturnNA = %True

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
    IF OKToReturnNA THEN
      A$ = "  N/A   "
    ELSE
      A$ = "": LOCATE L,C: GOTO EnterDate1
    END IF
 END IF

 LOCATE L, C: PRINT A$
END SUB

' -------------------------------------------------------------------
SUB RotaDate  (D$,Opt$) PUBLIC
 LOCAL L, C, K$, I$(), UseF1, UseF2
 DIM I$ (3)

 L = CSRLIN: C = POS
 IF INSTR (Opt$, "F1") THEN UseF1 = -1
 IF INSTR (Opt$, "F2") THEN UseF2 = -1

 COLOR BoxColor MOD 16, BoxColor \ 16
 I$(1) = "To enter date shown press [CR]."
 I$(2) = " Use ["+CHR$(27)+"] or ["+CHR$(26)+"] to change."
 I$(3) = "You can also do a normal keyboard entry"
 CALL SCREENPUSH
 IF L < 19 THEN BoxTopLine = 25 ELSE BoxTopLine = 5
 CALL BOXMESSAGE2 (BoxTopLine, %Center, 0, I$(), 3, 47)

 LOCATE L+1,C+2 '                                         print double arrow
 PRINT CHR$(17);CHR$(205);CHR$(205);CHR$(16)

 COLOR FldColor MOD 16, FldColor \ 16
 DO
   LOCATE L,C: PRINT D$;
   DO:LOOP UNTIL INSTAT
   K$ = INKEY$
   IF LEN(K$) < 2 THEN
     IF K$ = CHR$(13) THEN
        Opt$ = "CR"
        CALL SCREENPOP
        LOCATE L,C: PRINT D$;
        EXIT SUB
     END IF
     IF K$ = CHR$(27) THEN
        Opt$ = "ESC"
        CALL SCREENPOP
        EXIT SUB
     END IF
     IF INSTR ("0123456789", K$) THEN '                UPDATED 11-90
        LOCATE L, C '                                    ==========
        D$ = K$ + " -  -" + RIGHT$ (GetDate$, 2) '     If you press a number
        CALL SCREENPOP  '                              key when Rotadate comes
        AdvanceCursor = 1
        CALL ENTERDATE (D$, Opt$)  '                   up, it automatically
        EXIT SUB '                                     switches to regular
     END IF '                                          keybd entry mode!
   ELSE  '                                             Thanks for the idea, Al!
     K$ = RIGHT$(K$,1)

     SELECT CASE ASC(K$)
       CASE &H4B  '                                    left -- back date 1 day
         D$ = WriteDate$(FigDate&(D$) - 1)
       CASE &H4D  '                                right -- advance date 1 day
         D$ = WriteDate$(FigDate&(D$) + 1)
       CASE &H48 '                                                         up
         Opt$ = "Up"
         CALL SCREENPOP
         LOCATE L,C: PRINT D$
         EXIT SUB
       CASE &H50  '                                                        down
         Opt$ = "Down"
         CALL SCREENPOP
         LOCATE L,C: PRINT D$
         EXIT SUB
       CASE &H3B  '
         IF UseF1 THEN Opt$ = "HELP!": CALL SCREENPOP : EXIT SUB
       CASE &H3C  '
         IF UseF2 THEN
           Opt$ = "F2"
           CALL SCREENPOP
           LOCATE L,C: PRINT D$
           EXIT SUB
         END IF
       END SELECT
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

SUB FASTPHONE (PN$, Opt$) PUBLIC
 LOCAL I$(), L, C, PN0$
 DIM I$ (2)
 L = CSRLIN: C = POS
 LOCATE 25,1: COLOR ScrColor MOD 16, ScrColor \ 16
 I$(1) = "PHONE # ENTRY: Type in the digits only. No hyphens etc. Include the area code"
 I$(2) = "if needed (eg: 5551234 or 7075553456). The computer will add the punctuation."
 CALL SCREENPUSH
 CALL BOXMESSAGE2 (22, 1, 0, I$(), 2, 78)
 PN0$ = PN$
 DO
   Opt$ = "NumUpOut"
   LOCATE L, C: COLOR FldColor MOD 16, FldColor \ 16

        CALL ENTERSTRING (PN$, 14, Opt$)

   IF Opt$ = "CR" OR Opt$ = "Up" THEN
     PN$ = REMOVE$ (PN$, ANY " /,.-_")
     IF LEFT$  (PN$, 1) = "1" THEN PN$ = MID$ (PN$, 2)
     IF VERIFY (PN$, "0123456789") THEN PN$ = ""
     SELECT CASE LEN (PN$)
       CASE 7
         PN$ = LEFT$ (PN$, 3) + "-" + RIGHT$ (PN$, 4)
       CASE 10
         PN$ = "1-"+ LEFT$(PN$, 3) +"-" +MID$(PN$, 4, 3) +"-"+ RIGHT$ (PN$, 4)
       CASE ELSE
         PN$ = ""
     END SELECT
   END IF
 IF Opt$ <> "CR" AND Opt$ <> "Up" THEN PN$ = PN0$
 LOOP UNTIL PN$ <> ""
 CALL SCREENPOP
 LOCATE L, C: COLOR FldColor MOD 16, FldColor \ 16
 PRINT USING "\            \"; PN$
END SUB


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
   DO UNTIL FPos > LEN(A$)
'      check each bunch in the string as it already exists. If it doesn't
'                               contain any blanks, jump to the next one ...
     IF INSTR (MID$ (A$, LEN (Sep$(B%)) + FPos, Size (B%)), " ")  = 0 THEN
       INCR FPos,  LEN(Sep$(B%)) + Size(B%)
       INCR B%                                  ' if it isn't, jump over it ...
     ELSE
       EXIT LOOP
     END IF
  LOOP
'         if the ALL the bunches of characters were found to be already full,
'                             set cursor (FPos) back to the home position (1)
  IF Fpos >= FLength THEN B% = 1: FPos = 1
 END IF

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

 IF SoundOn THEN PLAY PressAKeyBeep$
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

FUNCTION GETYESORNO  PUBLIC
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
     IF X$ =  CHR$(0)+CHR$(&H50) THEN X$ = "N" '            down arrow = "NO"
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
'             ║            SPRING / SUMMER 1990             ║
'             ║                                             ║
'             ╚═════════════════════════════════════════════╝
'                                                  ┌─────────────────────────┐
'                                                  │ TO CREATE THIS DEMO OF  │
'                 L O O K  =============== >>>>    │ THE APLIB ROUTINES JUST │
'                            :)                    │ TYPE "makedemo" FROM    │
'                                                  │ THE COMMAND LINE !      │
'                                                  └─────────────────────────┘
'
'              Version 2.00002     //    NOVEMBER '90

'                9-16-90 fixed a bit (mostly so it'll work
'                with the upcoming Power Basic version 2.10)
'
'               11-90: Incorporating some suggested improvements
'               and a 3 fixes into FENTRY-U. The window preprocessors
'               now both compile under PB -- one of them hadn't
'               been updated from the TB 1.1 version when I first
'               uploaded this suite. Oops!

'               Someone also noted that APLQREF.BAS won't compile.
'               I never thought it would. It's a Quick Reference
'               guide I made up! It has a .BAS extension only so it
'               will come up when I press F3 + CR from PB and get the
'               file select menu; that way I can jump to it for help!

'               MORE FIXES: Bulletproofing of QBox () and BOXMESSAGE ()
'                           Menu selection to test box routines
'                           Improved RotaDate -- the user can either use the
'                           arrow keys as before or just type the 4- or
'                           6-digit date (1124 or 112490) directly. Thanks
'                           to Al Musella for the idea.
'                           Insert status in entry fields now a Global var.
'                                (so it stays set from field to field)
'                           Improved PWW & SWW

'               NEW ROUTINE: FASTPHONE ()  -- much better than ENTERPHONE.
'                               (I keep forgetting most people can TYPE !!)
'
'               And -- I know I've made more improvements, undocumented,
'                      as I continue to hack away at my office DBMS (which
'                      is getting quite GOOD, pardon me saying so!)
'
'                                                  --   Howard,  11-24-90


' %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
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
'      Forum (# 71121,776), or MOE in the Bay Area.
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

                           $INCLUDE "APLIB-H.BAS"

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


 ButtonsActive = %False '             (button feature used only in MC-MENU.BAS)
 LocalAreaCode$ = "415"
 Item% = 101 '                           (starting # for demo checkbook entries)

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
'           SWW.EXE                              these lines to draw window
'                                                and set up its static fields.
'                                                The template files are similar
'                                                to those use to make POPWINDOW
'                                                designs, as described below.
'                                                See OPENDEMO.SW for an example.
' ===========================================================================

                      $INCLUDE "opendemo.inc"

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
 GOSUB SetBeeps
 If SoundOn THEN PLAY ArribaBeep$
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
 NextScrn2Pop = 1 '                          Reset the screen stack pointer
'                                            to 1. At this point the
'                                            next screen we "push" (save) will
'                                            be numbered 2 (I'm not using an 0)

 IF Choice > 0 THEN '  unless user has just backed out of a menu w/o selecting,
   TChoice = 1 '                  the return variable Choice will be > 0 and
   GOSUB Logo2 '                     the main menu will be reset to choice #1
 END IF
 TLine$ = " HB's POW-Bas Routines Library: the Demo " '            menu title

 RESTORE MainMenu
 If SoundOn THEN PLAY LookitBeep$
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
'    frankly I haven't used 2-line or 1-line TOPMENU's enough to even know
'    whether they have bugs, so just use 3 for now. T$ should be the menu
'    title if you want one, and after the CALL returns, will be set to the
'    string chosen by the user or "HELP!" if F1 pressed. Mostly I just branch
'    the program on the basis of TChoice, an integer showing which selection
'    was made.
' =============================================================================

 DATA "POPWINDOW DEMO","FILES","MENUS & BOXES","OTHER DEMOS","QUIT/CONFIG"
 DATA END
 NumberOfLines = 3
 DO

   CALL TOPMENU (NumberOfLines,TChoice,T$)

   ' if T$ = "HELP!"a suitable help screen may be added here ...

 LOOP UNTIL T$ <> "HELP!"
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
'           MenuData$ as just "  LOAD". (If there are <10 items, numbers
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
'           MKeyPressed$ = the actual key used (if L. Mousebutton was used it
'           simulates the CR key, i.e. CHR$(13)) -- or if [ESC] or a legal
'           function key was pressed it contains "ESC", "PgDn", "PgUp", "F1",
'           or "F2". (Right Mousebutton = "ESC".)
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
    If SoundOn THEN PLAY LookitBeep$
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
             If SoundOn THEN PLAY TinyBeep$
             CLOSE #TxtFile
             OPEN File2View$  FOR INPUT AS #TxtFile
             Ln = 0
           END IF
           FOR N = 1 TO 23: LOCATE N, 1: CALL ClearLine: NEXT: LOCATE 1,1
         END IF
       LOOP
       If SoundOn THEN PLAY ArribaBeep$
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
     If SoundOn THEN PLAY LookitBeep$
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


 MenuData$ (1) = "   Demo of MESSAGEBOX"
 MenuData$ (2) = "   Demo of QBOX"
 MenuData$ (3) = "   Demo of SUPERMENU"
 MenuData$ (4) = "   Hundred Items Menu"
 MenuData$ (5) = "END"
 Choice = 1
 PullDown = %Yes
 UseRArrow = %Yes
 UseLArrow = %Yes
 CALL SUPERMENU (MenuData$ (), 0, 2, Choice, "", KeyPressed)
 IF KeyPressed = %LArrow THEN GOSUB MZap: GOTO FileSubMenu
 IF KeyPressed = %RArrow THEN GOSUB MZap: GOTO MiscDemos
 ON Choice GOSUB MessageBoxTest, QBoxTest, MoveAMenuII, HundredItemsMenu
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

 IF SoundOn THEN
   MenuData$ (2) = "S Sound Off"
 ELSE
   MenuData$ (2) = "S Sound On"
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

 If SoundOn THEN PLAY LookitBeep$


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
     CALL CloseFiles '        Take care of writing database files back if any...
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
     If SoundOn THEN PLAY TaskBeep$ '     %Center as we do here to center the
     CALL SCREENPUSH '                    window ... and it's ready.
'                                         ===================================

       CALL BOXMESSAGE (%Center, %Center, Margin)

     GOSUB ClickOrStrike
     CALL SCREENPOP '               erase the box and return control to DOS.
     LOCATE OrigL, OrigC
     END '                             ================>> EXIT POINT

   CASE "S"
     SoundOn = NOT SoundOn

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
'         THERE ARE MANY MORE-TYPICAL EXAMPLES TO FOLLOW ...
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

 If SoundOn THEN PLAY LookItBeep$

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
 IF DateLastUsed$ = "" OR_
                    FigDate& (DateLastUsed$) = 0 THEN DateLastUsed$ = GetDate$

 IF Opt$ <> "Up" AND Opt$ <> "ShfTab" OR_
         FigDate& (TransactionDate$) = 0 THEN TransactionDate$ = DateLastUsed$

 Opt$ = "N/AOK"

   CALL RotaDate (TransactionDate$,Opt$)

' =========================================================================
'        ROTADATE: This is the date entry routine where you can use the cursor
'        keys to go ahead or back to the date you want. If you want you can
'        also key in the date in the usual way ...
' =========================================================================

   IF Opt$ = "HELP!" THEN GOSUB EDHelp: GOTO DateEntry
'                                                     FigDate returns a 0 if
' LOCATE L,C
' PRINT TransactionDate$
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
 If SoundOn THEN PLAY LookitBeep$
 CALL ENTERYESNO (Confirm) '                      query if save to be done ...
 CALL SCREENPOP
 IF Confirm THEN
   If SoundOn THEN PLAY TaskBeep$
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
  If SoundOn THEN PLAY LookitBeep$

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
      CALL SCREENPUSH
      CALL QBox (%Center, %Center, 1,_
            "DO YOU WANT TO CLEAR THIS ENTRY AND RETURN TO MAIN MENU ?? ", 7)
      IF NOT GetYesOrNo THEN CALL SCREENPOP: RETURN
    END IF
    NextScrn2Pop = MainMenuScreen
    CALL SCREENPOP
    RETURN MainMenu
 END IF
 RETURN

'    ___________________________________________________________________

EnterDemo:

 If SoundOn THEN PLAY LookitBeep$
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

'            =========== NEW !!! ====================
  CALL SCREENPUSH
  CALL QBox (%Center, %Center, 3,_
               "Here's the NEW phone # routine, FASTPHONE", 14)
  CALL FASTPHONE (Phone2$, Opt$)
  DELAY 3
  CALL SCREENPOP

' ------------------------------------------------------- a date & a time ...

 IF DateLastUsed$ = "" OR_
                    FigDate& (DateLastUsed$) = 0 THEN DateLastUsed$ = GetDate$

 IF Opt$ <> "Up" AND Opt$ <> "ShfTab" OR_
                                   FigDate& (D0$) = 0 THEN D0$ = DateLastUsed$

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 21,4: PRINT "DATE (use arrows or numbers) ";
 COLOR FldColor MOD 16, FldColor \ 16
 Opt$ = "F1 N/Aok"

   CALL ROTADATE (D0$, Opt$)

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
 If SoundOn THEN PLAY LookitBeep$
 IF ColorDisplay THEN Ink1 = %Blu: Paper1 = %Cyn: Ink2 = %Wht: Paper2 = %Red
 COLOR Ink1, Paper1: CLS
 ON KEY (15) GOSUB Done

 DO
   DoB$ = ""
   COLOR Ink1, Paper1
   LOCATE 5,6: PRINT "Date of Birth :";
   COLOR Ink2, Paper2
   Opt$ = ""
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
           If SoundOn THEN PLAY TaskBeep$
         CASE < 0
           PRINT "Your BIRTHDAY was ";ABS(N);" days ago."
           If SoundOn THEN PLAY TaskBeep$
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
  TaskBeep$ = "MN T100 O3 C16 E32 F32 G16 E16 C16"
  PressAKeyBeep$ = "T120 MS O4 P4 G64 P16 G64 MN"
  OopsBeep$ = "T120 O1 A64"
  TinyBeep$ = "MS T240 O3 C64"
 RETURN

FakeFunction:
 COLOR %LCyn, %Blu
 If SoundOn THEN PLAY LookitBeep$
 CLS
 LOCATE 10,10,0:PRINT "This function will of course be brilliantly implemented"
 DELAY .5
 LOCATE 12, 11: PRINT "by you, the creator of your own magnificent applications
 DELAY .5
 LOCATE 14, 13: PRINT "using Power Basic and this humble Library."
 If SoundOn THEN PLAY ArribaBeep$
 CALL PressAKey
 GOTO MainMenu

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

' ======================================================================
                                 $SEGMENT
' ======================================================================


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
   Title$ = "MOVE ME"                                    ' title
   MenuRight = R
   MenuDown = D
   CALL SCREENPUSH

   IF FakePage < FakePages THEN UsePgDn = %Yes ELSE UsePgUp = %Yes

   CALL SUPERMENU (MenuData$ (), MenuRight, MenuDown, Choice, Title$, Ky%)

   CALL SCREENPOP
   If SoundOn THEN PLAY TinyBeep$

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
     T$ (I) = USING$ ("  This is menu item  ###", I)
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
     MenuRight = 6 * MenuPage -20
     MenuDown = MenuPage - 1
     Title$ = "PgUp/Pg-Dn for more"
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
   IF WinColor = 0 THEN WinColor =  %Gry + %Background * %Blk
   IF FldColor = 0 THEN FldColor =  %Blk + %Background * %Gry
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
 DELAY .7: If SoundOn THEN PLAY LookitBeep$
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
     IF A$ <> "" THEN PLAY A$
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

MessageBoxTest:
 COLOR ScrColor MOD 16, ScrColor \ 16
 CLS
 CALL QBox (3, %Center, 1, "DEMO OF MESSAGE WINDOWS (TRY TO MAKE IT FAIL!)", 0)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 10, 50: PRINT "... 0 = Horiz. Centered Box"
 LOCATE 10,5: PRINT "LEFT UPPER CORNER AT COLUMN ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (CCol#, "###", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 12, 50: PRINT "... 0 = Vert. Centered Box"
 LOCATE 12,5: PRINT "LEFT UPPER CORNER AT ROW ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (CLin#, "###", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 14,5: PRINT " MARGIN ? ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (Marg#, "#", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu
 Margin = MIN (CINT(Marg#), 3)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 16,5: PRINT "HOW LONG SHALL WE MAKE THE TEXT LINES ? ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (LinL#, "###", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 18,5: PRINT " ... AND HOW MANY LINES ? ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (LinsNum#, "###", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 TenChr$ = "<Ten Chrs>"
 Digital$ = "123456789"
 N = INT (LinsNum#)
 L = INT (LinL#)
 Text4Box$ = REPEAT$ (L \ 10, TenChr$) + LEFT$ (Digital$, L MOD 10)
 DIM DYNAMIC T$ (1:N)
 FOR I = 1 TO N
   T$(I) = Text4Box$
 NEXT

    CALL BOXMESSAGE2 (CINT (CLin#), CINT (CCol#), Margin, T$(), N, L)

 CALL PressAKey
 CLS
 ERASE T$
 RETURN

QBoxTest:
 COLOR ScrColor MOD 16, ScrColor \ 16
 CLS
 CALL QBox (3, %Center, 1, "DEMO OF DIALOG BOX (TRY TO MAKE IT FAIL!)", 0)

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 10, 50: PRINT "... 0 = Horiz. Centered Box"
 LOCATE 10,5: PRINT "LEFT UPPER CORNER AT COLUMN ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (CCol#, "###", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 12, 50: PRINT "... 0 = Vert. Centered Box"
 LOCATE 12,5: PRINT "LEFT UPPER CORNER AT ROW ";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (CLin#, "###", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 Lins# = INT (Lins#)
 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 14,5: PRINT " ONE LINE BOX OR THREE LINE BOX ?? ";
 COLOR FldColor MOD 16, FldColor \ 16
 L = CSRLIN: C = POS
 DO
   LOCATE L, C
   Lins$ = " "
   CALL ENTERSTRING (Lins$, 1, Opt$)
   Lins = VAL (Lins$)
 LOOP UNTIL Lins = 1 OR Lins = 3
 IF Opt$ <> "CR" THEN RETURN MainMenu

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 16,5: PRINT "ENTER TEXT LINE: ";
 COLOR FldColor MOD 16, FldColor \ 16
 IF Prompt$ = "" then Prompt$ = "Sample Prompt"
 CALL ENTERSTRING (Prompt$, 40, Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu

 COLOR ScrColor MOD 16, ScrColor \ 16
 LOCATE 18,5: PRINT "LENGTH OF ANSWER FIELD ?";
 COLOR FldColor MOD 16, FldColor \ 16
 CALL ENTERNUMBER (AFL#, "##", Opt$)
 IF Opt$ <> "CR" THEN RETURN MainMenu


 AnsLength = CINT (AFL#)

    CALL QBox (CINT (CLin#), CINT (CCol#), Lins, Prompt$, AnsLength)

 DELAY 2
 COLOR FldColor MOD 16, FldColor \ 16
 FOR I = 1 TO AnsLength
   PRINT " ";
   DELAY .03
 NEXT
 DELAY 1
 CALL PressAKey
 COLOR ScrColor MOD 16, ScrColor \ 16
 CLS
 RETURN

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
 DECLARE FUNCTION Cen$ (string)

' =========================================================================

SUB Initialize (PrinterType) PUBLIC

 %Star10X  = 1: %StarNX1000  = 2: %IBMX24  = 3: %LQ2500 = 4 ' Printer constants

 LOCAL VideoSegError

 Up2B$ = " ["+CHR$(24)+"] to back up "
 Esc2Q$ = " [ESC] for Main Menu "
 F1Help$ = " [F1] for Help "
 F2Fun$ = " [F2] to SAVE or CLEAR data "
' EnHelp$ = "  Keys: ["+CHR$(26)+"] & ["+CHR$(27)+"], [HOME]"+_
'                " & [END], [INS] & [DELETE], ^T & ^Y. To go on: ["+CHR$(25)+"]"
EnHelp$ = Cen$ ("You can make an entry in this space now or press [" + _
                             CHR$(25)+"]" + " to go on.")
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

 InitPrt$ = CHR$(27) + "F" + CHR$(27) + "P" + CHR$(27) + "W0" + CHR$ (18)
 BoldPrtOn$ = CHR$(27) + "G"
 BoldPrtOff$ = CHR$(27) + "H"
 MicroPrt$ = CHR$(15)
 ElitePrt$ = CHR$(27) + "M"
 ItalicPrtOn$ = CHR$(27) + "4"
 ItalicPrtOff$ = CHR$(27) + "5"
 RegPrt$ = CHR$(27) + "E"
 FastPrt$ = CHR$(18) + CHR$(27) + "F"
 WidePrt$ = CHR$(14)
 LQPrt$ = CHR$(27) + "x" + CHR$(1)
 DraftPrt$ = CHR$(27) + "x" + CHR$(0)

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
' _________________________________________________________________________

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
 CALL SCREENPUSH '                               save the screen prior to
 GOSUB WriteAndPeek '                             writing to it ...
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
 COLOR 7,0: CLS
 COLOR 0,0
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
'                        ALL-PURPOSE LIBRARY

'                     THE NEW IMPROVED MENUS-U.BAS
'==============================================================================
'                                                               -- 2-18-90
'                                                                  H Ballinger
                            $COMPILE UNIT
                            $ERROR ALL ON


 DEFINT A-Z

 EXTERNAL RD$, VideoSeg&, ColorDisplay, NeedDCon
 EXTERNAL BoxColor, FldColor, WinColor, MenuColor, BarColor
 EXTERNAL PressAKeyBeep$, OopsBeep$, TinyBeep$
 EXTERNAL ButtonsActive, TimeOut
 EXTERNAL BXScreenSaved, PMScreenSaved
 EXTERNAL MenuHelpLine$()
 EXTERNAL UseRArrow, UseLArrow, UsePgUp, UsePgDn, PullDown

 DECLARE SUB Marker (string)

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
 TLine$ = ""

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
 DEF SEG = VideoSeg&
 BLAtt = PEEK (3841)
 DEF SEG

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
  IF TLine$ <> "HELP!" THEN TLine$ = RTRIM$ (LTRIM$ (I$ (Choice)))
  COLOR BLAtt MOD 16, BLAtt \ 16
  LOCATE 25, 1, 1
  PRINT SPACE$ (80);
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
''''''''''                      CALL Marker ("ArrayNum "+STR$(ArrayNum))#######
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
   IF Choices% > 9 THEN TopKey = ASCII ("A") ELSE TopKey = ASCII ("1")
 END IF

MPrint:

 L0 = CSRLIN: C0 = POS
 COLOR MenuColor MOD 16, MenuColor \ 16

'      =================== BEGIN PRINTING MENU =====================

 LOCATE CornerLin,CornerCol: PRINT CHR$(201); STRING$((Wid-1),205); CHR$(187)
 IF Title$ <> "" THEN LOCATE CornerLin,CornerCol+2: PRINT " ";Title$;" "
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

 %ResetRodent = 0 '        mouse routine and humor (??) courtesy of Barry Erick
 %ReadRodent = 3
 %CheckScreensSaved = %False

 DEFINT A-Z

 DECLARE SUB SUPERMENU (string array,integer,integer,integer,string,integer)

 EXTERNAL Footer$, CurrLine, LineGroup, Page%, NewRec, KeyField, PullDown
 EXTERNAL OopsBeep$, InitPrt$, FontCode$, NextScrn2Pop, ScrnStackSize
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
 FileFun$(4) = "V VIEW MEMOS"
 MenuHelpLine$(4) = "add extra notes on this entry"
 FileFun$(5) = "D DELETE RECORD"
 MenuHelpLine$(5) = "erase this record"
 FileFun$(6) = "END"
 RETURN

KeyFldExistRec:
 FileFun$(1) = "C CLEAR DATA FIELDS"
 MenuHelpLine$(1) = "clear all entries in this window, giving a blank record"
 FileFun$(2) = "N NEXT IN ORDER
 MenuHelpLine$(2) = "continue the search forward"
 FileFun$(3) = "P PREVIOUS RECORD"
 MenuHelpLine$(3) = "back up, search in reverse"
 FileFun$(4) = "S SAVE RECORD"
 MenuHelpLine$(4) = "update this record using entries shown"
 FileFun$(5) = "V VIEW MEMOS"
 MenuHelpLine$(5)_
           = "read extra notes on this entry if any; edit / change; or add"
 FileFun$(6) = "D DELETE RECORD"
 MenuHelpLine$(6) = "erase this record"
 FileFun$(7) = "END"
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
     REG %DX, 0 '                                 for default drive
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

 REG %AX, &H2F00
 CALL INTERRUPT &H21 '                     GET DOS'S D.T.A.
'                              (in FEXIST.BOX Barry gets out the DTA addr but
'                                 never uses it. It's ES:BX.)
 FZ$ = F$ + CHR$(0)
 REG %DS, STRSEG (FZ$)
 REG %DX, STRPTR (FZ$)
 REG %CX, &H7
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

FUNCTION Cen$ (A$) PUBLIC
  Cen$ = SPACE$ (40 - LEN (A$)\2) + A$
END FUNCTION

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
                          $OPTION CNTLBREAK ON


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
   IF COMMAND$ <> "" THEN
     MainFile$ = COMMAND$
   ELSE
     LOCATE 25,1
     INPUT " MAIN FILE TO SEARCH FOR UNIT NAMES (CR to quit):"; MainFile$
     LOCATE 25,1: PRINT SPACE$ (80);
   END IF
   IF MainFile$ = "" THEN END 1
   MainFile$ = UCASE$ (MainFile$)
   IF INSTR (MainFile$, ".") = 0 THEN MainFile$ = MainFile$ + ".BAS"
   IF EXIST (MainFile$) THEN EXIT LOOP
   LOCATE 20,26: PRINT "<<< ERROR OPENING FILE !! >>"
   IF COMMAND$ <> "" THEN END 1
   DELAY 3
   LOCATE 20,26: PRINT "                            "
 LOOP

 MainFile% = FREEFILE
 OPEN MainFile$ FOR INPUT AS MainFile%
 CLS
 LOCATE 2,1
 PRINT "                  ╔══════════════════════════════╗"
 PRINT "                  ║  HB PUBLIC VARIABLE LISTER   ║"
 PRINT "                  ╚══════════════════════════════╝"
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
 DELAY 1
 LOCATE L0, 40
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
     END 1
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
     END
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

'           ┌─────────────────────────────────────────────┐
'           │                                             │
'           │   SCREEN CODER -- HB. Started 7-26-87       │
'           │                                             │
'           │   CREATES INTERACTIVE DATA ENTRY WINDOWS    │
'           │                                             │
'           └─────────────────────────────────────────────┘


 DIM LineBuffer$(30): DIM FL(30): DIM FC(30)
 COLOR 14,0
 CLS
 IF INSTR (UCASE$ (COMMAND$), "BATCH") THEN BatchMode = -1

Start:
 LOCATE 25,1: PRINT "[F10] = Quit     [F1] = Help";: LOCATE 1,1
 COLOR 15,2:LOCATE 3,23
 PRINT " THE HB POP-UP WINDOW CODE WRITER "
 COLOR 14,0
 IF COMMAND$ <> "" THEN
    FlNm$ = EXTRACT$ (COMMAND$, " ")
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
   INCR L: LINE INPUT #1, Nput$                ' skip blank lines
   IF EOF(1) THEN PRINT "ERROR 1": STOP
 LOOP UNTIL Nput$ <> ""

 C = 1
'                                                   ' take 1st line ...
SearchBox:
 LOCATE 24,1: COLOR 12,0:PRINT C;Nput$: COLOR 14,0
 DO WHILE LEFT$(Nput$,1) = " "                       ' chop spaces off left end
     Nput$ = MID$(Nput$,2): GOSUB DispLns: INCR C '             and count them ...
 LOOP

 IF LEFT$(Nput$,1) <> "^" THEN
   CLS
   LOCATE 23,1: PRINT ">";Nput$;"<"
   PRINT "ERROR 2 IN LINE";L;": BOX NOT FOUND":STOP
 END IF

' ===================== SET WINDOW DIMENSIONS ================================

 CornerCol = C: BoxTop = L  '                       top of box has been found


 Wid = 1: DO UNTIL MID$(Nput$,Wid,1) <> "^": INCR Wid: LOOP  ' count carrots ...
 DECR Wid,2

 O$ = "  DATA "+STR$(Wid)+","+STR$(BoxTop)+","+STR$(CornerCol)
 LineBuffer$(1) = O$

' ============= PARSE EACH LINE DOWN TO BOXBOTTOM =======================

ParseLines:
 N = 2
 DO
   INCR L: LINE INPUT #1, Nput$
   IF EOF(1) THEN PRINT "ERROR -- INPUT FILE INCOMPLETE": STOP
   LOCATE 24,1: COLOR 12,0:PRINT Nput$: COLOR 14,0
   GOSUB DispLns

TrimLine:
   C = 0
'                                          remove blank spaces ...
   DO WHILE LEFT$(Nput$,1) = " "
     Nput$ = MID$(Nput$,2): INCR C
   GOSUB DispLns
   LOOP

  IF LEFT$(Nput$,1) = "^" THEN
     Nput$ = MID$(Nput$,2): INCR C '             remove the carrot on the left ...
     GOSUB DispLns
   ELSE
     LOCATE 25,3:PRINT "ERROR 4: LEFT SIDE OF BOX NOT INTACT";: STOP
   END IF

Check4Bottom:
   IF LEFT$(Nput$,1) = "^" THEN
       BoxBottom = L+1  '                               check for bottom
   ELSE

Check4Fields:

       X = 0 '                 otherwise find the field locations in the line...
       DO
         INCR X: INCR C
         IF MID$(Nput$,X,1) = "{" THEN '              if a field marker is found
           MID$(Nput$,X) = " "  '                     replace it w/ a space ...
           INCR Fld%
           FL(Fld%) = L  '                          and plug its location into
           FC(Fld%) = C  '                           arrays for later use ...
         GOSUB DispLns
         END IF
         IF MID$(Nput$,X,1) = "}" THEN MID$(Nput$,X) = " "  ' replace } w/ a space ...
       LOOP UNTIL X >= LEN(Nput$)

TrimRightEndOff:
       DO UNTIL RIGHT$(Nput$,1) <> " " AND RIGHT$(Nput$,1) <> "^"
         Nput$ = LEFT$(Nput$,LEN(Nput$)-1)
       LOOP

Goob:

      C = CornerCol + 1 '      Since the carrot has been trimmed off, that's
'                               where the placement of what's left of Nput$
'                                                 will start on screen ...
      DO UNTIL LEFT$ (Nput$,1) <> " "
         Nput$ = MID$(Nput$,2)
         GOSUB DispLns
         INCR C
      LOOP

      IF Nput$ <> "" THEN
         LineBuffer$ (N) = "  DATA " + CHR$(34) + Nput$ + CHR$(34) + ","_
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
   LINE INPUT #1,Nput$
   LOCATE 24,1: COLOR 12,0:PRINT LEFT$ (Nput$,79): COLOR 14,0
 LOOP UNTIL LEFT$(Nput$,1) = "\"

WritePtII:
 DO
  LINE INPUT #1,Nput$
  IF Nput$ <> "" AND LEFT$(Nput$,1) <> " " THEN
    LOCATE 24,1: COLOR 12,0:PRINT Nput$: COLOR 14,0
    INCR Fld%
    O$ = "  DATA "+Nput$+","+STR$(FL(Fld%))+","+STR$(FC(Fld%))
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
 IF Report$ <> "              DONE, NO ERRORS -- OK" THEN
   PLAY "O3 B8 P8 G4"
   DO: LOOP UNTIL INKEY$ <> ""
 END IF
 END

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
 COLOR 10,0: LOCATE 4,1:PRINT Nput$;: COLOR 14,0
 RETURN

```
{% endraw %}

## SHOWCHRS.BAS

{% raw %}
```bas
                        $LIB ALL OFF
    CLS
    COLOR 14, 4
    PRINT "                          CHARACTER SET DISPLAY                                 ";
    PRINT STRING$ (80, 221);
    COLOR 15, 2
    FOR N = 1 TO 255
      PRINT CHR$(N);
      N$ = USING$ ("### ", N)
      PRINT N$;
    NEXT
    COLOR 3, 0
    PRINT: PRINT
    END
```
{% endraw %}

## SWW.BAS

{% raw %}
```bas

'            ┌────────────────────────────────────────────────────────┐
'            │                                                        │
'            │  STATIC WINDOW CODER -- HB. Started 7-26-87 / 7-21-89  │
'            │                                                        │
'            └────────────────────────────────────────────────────────┘

 DIM LineBuffer$(30): DIM FL(30): DIM FC(30)
 Q$ = CHR$(34)
 COLOR 14,0
 CLS
 IF INSTR (UCASE$ (COMMAND$), "BATCH") THEN BatchMode = -1

Start:
 COLOR 15,2:LOCATE 3,23
 PRINT " THE HB STATIC WINDOW CODE WRITER "
 COLOR 14,0
 IF COMMAND$ <> "" THEN
    FlNm$ = EXTRACT$ (COMMAND$, " ")
 ELSE
    ON ERROR GOTO NoSuchInputFl
    FILES "*.SW"
    ON ERROR GOTO 0
    PRINT  '                                    get a directory ...

    COLOR 9,0: INPUT "NAME OF WINDOW DESIGN FILE TO PROCESS:";FlNm$
    IF FlNm$ = "" THEN CLS: GOTO AbnlTermi
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
 IF NOT BatchMode THEN
   LOCATE 14,20,1: PRINT "PROCEED ? (y/n)";
   DO: K$ = UCASE$ (INKEY$) : LOOP UNTIL K$ = "Y" OR K$ = "N": PRINT K$
   IF K$ <> "Y" THEN PRINT: PRINT "OK, ENDING HERE.": GOTO AbnlTermi
 END IF
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
   IF EOF(1) THEN BEEP: PRINT "OOPS ... Premature End of File": GOTO AbnlTermi
 LOOP UNTIL Inpt$ <> ""
 C = 1
'                                                   ' take 1st line ...
SearchBox:
 LOCATE 24,1: COLOR 12,0:PRINT Inpt$: COLOR 14,0
 DO WHILE LEFT$(Inpt$,1) = " "                       ' chop spaces off left end
     Inpt$ = MID$(Inpt$,2): GOSUB DispLns: INCR C '             and count them ...
 LOOP

 IF LEFT$(Inpt$,1) <> "^" THEN
   LOCATE 23,1: PRINT ">";Inpt$: PRINT "OOPS! Checking line";L;
   PRINT ": TOP OF BOX NOT FOUND":GOTO AbnlTermi
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
   IF EOF(1) THEN PRINT "ERROR -- INPUT FILE INCOMPLETE": GOTO AbnlTermi
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
       IF CommaPos = 0 THEN PRINT "NO DELIMITING COMMA IN LINE: ";Inpt$:GOTO AbnlTermi
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
 ECode = 0
 IF Fld% > 0 AND FL(Fld%) = 0 THEN
    Report$ = "DONE. INPUT FILE ERROR -- TOO MANY FIELDS NAMED."
 END IF

 INCR Fld%
 IF FL(Fld%) <> 0 THEN_
  Report$ = "DONE. INPUT FILE ERROR -- TOO MANY FIELD LOCATION"+_
    " MARKERS ({) IN DESIGN."

 Print #2, ""
 PRINT #2, "'  ";DATE$;", ";LEFT$(TIME$,5);_
           ":   end of StatWindow generated code for window {";FlNm$;"}"
 CLOSE
 PRINT: PRINT "     "; Report$
 IF Report$ <> "              DONE, NO ERRORS -- OK" THEN
   PLAY "O3 B8 P8 G4"
   DO: LOOP UNTIL INKEY$ <> ""
 END IF
 END
'               <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>

NoSuchInputFl:
     PRINT:PRINT:PRINT "    ERROR -- Input File ";FlNm$;".SW not found"
     PRINT: GOTO AbnlTermi
     RESUME

DispLns:
 LOCATE 4,1: PRINT SPACE$(80)
 COLOR 10,0: LOCATE 4,1:PRINT Inpt$;: COLOR 14,0
 RETURN

AbnlTermi:
 PLAY "O3 B8 P8 G4"
 DO: LOOP UNTIL INKEY$ <> ""
 END
```
{% endraw %}

## BARCODE.BAS

{% raw %}
```bas
'Program Name    : Barcode.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 10-25-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Develop Date    : 01-11-87
'Illustrative    : Program for use and creation of barcodes

DIM CHUNG(5, 450) , barcode(44, 19)


SCREEN 9
'read barcode info into the array
RESTORE barcode1:
FOR d = 1 TO 44
FOR e = 1 TO 19
READ barcode(d, e)
NEXT e
NEXT d


'constants
BUFF = 0

'Ascii String to print<<<<<<<<<<<<<<<<<
A$ = "*THIS IS A TEST 1010*"

PRINT A$
GOSUB INITARRAY
GOSUB STUFFBAR
GOSUB LINEADJ
GOSUB PBAR
GOSUB PSCREEN
GOSUB INITARRAY
GOSUB resetprt
END


PSCREEN:
LOCATE 11, 27: PRINT A$
COUNT = 1
FOR Y = 1 TO 20
FOR X = 1 TO 300
IF CHUNG(1, X) = 0 THEN PSET (150 + X, 160 + Y), 0 ELSE PSET (150 + X, 160 + Y), 15
COUNT = COUNT + 1
NEXT X
COUNT = 0
NEXT Y

LINEADJ:
'LPRINT CHR$(27); "~0"; CHR$(14):      REM CITIZEN MEMORY LINE FEED INCREMENT
LPRINT CHR$(27); CHR$(51); CHR$(20); : REM EPSON MEMORY LINE FEED INCREMENT
RETURN

STUFFBAR:
'IF LEN(a$) > 15 THEN GOTO stuffbuff
'
FOR C = 1 TO LEN(A$)
CHAR$ = MID$(A$, C, 1)
A = INSTR(1, "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-+* .$/%", CHAR$)
GOSUB setbar
IF CP >= 20 THEN GOTO STUFFBAR
NEXT C
RETURN

setbar:
REM BUFFER
FOR J = 1 TO 3 ' make the bars three tall
FOR I = 1 TO 19
CHUNG(J, I + BUFF) = barcode(A, I)
NEXT I
NEXT J
BUFF = BUFF + 20
RETURN

PBAR:
REM PRINT THE CHARACTER BUFFER TO THE PRINTER
FOR J = 1 TO 3
LPRINT CHR$(27); "K"; CHR$(194); CHR$(1);
FOR I = 1 TO 450
LPRINT CHR$(CHUNG(J, I));
NEXT I
LPRINT
NEXT J
LPRINT : LPRINT
BUFF = 0
RETURN

INITARRAY: 'CLEAR THE PRINT ARRAY BUFFER
FOR J = 1 TO 5: FOR I = 1 TO 450: CHUNG(J, I) = 0: NEXT I: NEXT J
RETURN

resetprt:  'RESET THE PRINTER TO THE POWER ON CONDITION
LPRINT CHR$(27); "@"
RETURN

barcode1: 'BARCODE DATA FILES
' the char - A
DATA 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255
' the char - B
DATA 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255
' the char - C
DATA 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255
' the char - D
DATA 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255
' the char - E
DATA 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255
' the char - F
DATA 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255
' the char - G
DATA 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255
' the char - H
DATA 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255
' the char - I
DATA 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255
' the char - J
DATA 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255
' the char - K
DATA 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255
' the char - L
DATA 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255
' the char - M
DATA 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255
' the char - N
DATA 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255
' the char - O
DATA 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255
' the char - P
DATA 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255
' the char - Q
DATA 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255
' the char - R
DATA 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255
' the char - S
DATA 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255
' the char - T
DATA 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255
' the char - U
DATA 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255
' the char - V
DATA 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255
' the char - W
DATA 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 0, 0, 255
' the char - X
DATA 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255
' the char - Y
DATA 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255
' the char - Z
DATA 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255
' the char - 0
DATA 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255
' the char - 1
DATA 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255
' the char - 2
DATA 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255
' the char - 3
DATA 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255
' the char - 4
DATA 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255
' the char - 5
DATA 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255
' the char - 6
DATA 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255
' the char - 7
DATA 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255
' the char - 8
DATA 255, 255, 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255
' the char - 9
DATA 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255
' the char "-"
DATA 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255
' the char - +
DATA 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255
' the char - *
DATA 255, 0, 0, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255
' the char -  " " -s pace
DATA 255, 0, 0, 0, 0, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255
'the char - .
DATA 255, 255, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 255, 255, 255, 0, 0, 255
'the char - $
DATA 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255
' the char - /
DATA 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 255, 0, 0, 0, 0, 255
' the char - %
DATA 255, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255, 0, 0, 0, 0, 255









```
{% endraw %}

## COMSET.DOC

{% raw %}
```






        
        
        
        
        
        
                                     COMSET
                                By David Macchia
        
             Comset  will install com ports 3 and 4 in the DOS bios  area 
        for IBM PC, XT, AT's and compatibles.  The power on self tests on 
        these  machines  only  tests for the presence of  the  first  two 
        serial  ports,  and  as  a result  any  program  which  uses  DOS 
        functions  cannot  access ports 3 and 4.  DOS  versions  3.3  and 
        above  support COM3 and COM4 as devices, and after  using  comset 
        you  may use the MODE command and redirection of output to  these 
        ports.
        
             Most programs which support COM3 and COM4 do so by using the 
        actual  device  addresses  rather than the  DOS  function  calls.  
        However those which go thru DOS cannot "see" ports 3 and 4.  Many 
        programs that use DOS will not allow selection of any port  above 
        COM2 even though the addresses are installed.  To get around this 
        there  are  a  couple of companion programs  included  with  this 
        package which will swap the com ports in the DOS bios area.  They 
        can  make DOS think that COM4 is really COM2 for instance.   They 
        are  called COMSWPxy.COM, where x and y are the ports  which  are 
        swapped (ie: COMSWP14.COM will exchange ports 1 and 4).
        
             Swapping the ports will allow you to access these ports, but 
        will  not affect the use of them by direct access programs.   For 
        instance  I have my modem installed as COM4 and have  swapped  it 
        with  COM1.  Sidekick and Async are configured to use  COM1,  but 
        are  actually using the address of COM4, while Procomm and  Xtalk 
        are  still configured as COM4. All of the can use the  modem.  My 
        mouse is actually connected to the physical COM1, and uses direct 
        access ignoring the DOS addresses and is configured as COM1  when 
        I load the driver.  This may sound complicated, but I just COMSET 
        and COMSWAP14 in my autoexec.bat file and everything works.
        
             This version of Comset fixes a bug in swapping port COM2
        
             If  you would like to inspect the area of memory which  con-
        tains these addresses, run debug and enter "D 40:0000".  The  com 
        ports will be the first eight entries, and should look like this: 
        0040:0000   F8 03 F8 02 E8 03 E8 02, which are 03F8, 02F8,  03E8, 
        02E8 for COM 1-4
        
             These  programs  are not TSR's.  The will  change  the  port 
        addresses  and  exit without wasting any memory.  They  are  free 
        programs  which may be used and distributed by anyone so long  as 
        they remain unmodified. 





             A few notes:
        
        1)   Physical  ports 1 and 3, use the same interrupt as do 2  and      
             4  respectively.   If you are using a mouse on  one  of  the 
             ports you probably will not be able to run a  communications 
             program  on  the  other as the are  both  usually  interrupt 
             driven.
        
        2)   Using  Sidekick's dialer may require the use of  the  public 
             domain program called SKFIX.COM, which is available on  most 
             bulletin boards, to fool Sidekick into thinking DSR is high.  
             If you are using version 1.52 you may find you will need  to  
             patch  out  address  xxxx:8BB6 from 74 F0 to  90  90.   This 
             worked  for  me, and really has nothing to do  with  comset.  
             SKFIX  will  also  allow you to send  stuff  to  your  modem 
             through DOS redirection such as "TYPE SETUP.TXT >  COM4:" to 
             send  the contents of setup.txt to the modem even if DSR  is 
             low.
        

```
{% endraw %}

## CROSSBAS.DOC

{% raw %}
```





















                                   CrossBas Manual

                       Power-BASIC Cross-Reference List Creator







                                  November 13, 1989 (1990)
                                  (c) Lester L. Noll
                              CompuServe Id:  72250,2551








                                     CrossBas.exe
                                    version 1.00P












                                    ContentsContents


                  1  Disclaimer  . . . . . . . . . . . . . . . . . . 1
                  2  Copyright and Usage . . . . . . . . . . . . . . 1
                  3  Introduction  . . . . . . . . . . . . . . . . . 1
                  4  Running CrossBas  . . . . . . . . . . . . . . . 2
                  5  Command Line Options  . . . . . . . . . . . . . 2
                  6  Changing Defaults File  . . . . . . . . . . . . 5
                  7  The Summary Report  . . . . . . . . . . . . . . 6
                  8  What CrossBas Does  . . . . . . . . . . . . . . 8
                     8.1  Initialize . . . . . . . . . . . . . . . . 8
                     8.2  InitScreen . . . . . . . . . . . . . . . . 8
                     8.3  ReadCmdLine  . . . . . . . . . . . . . . . 9
                     8.4  OpenFiles  . . . . . . . . . . . . . . . . 9
                     8.5  CalcFileNames  . . . . . . . . . . . . . . 9
                     8.6  ReadDefaults . . . . . . . . . . . . . . . 9
                     8.7  CheckStringSpace . . . . . . . . . . . .  10
                     8.8  CalcWordArraySize  . . . . . . . . . . .  10
                     8.9  PrintScreenTop . . . . . . . . . . . . .  10
                     8.10  ReadAndParseData  . . . . . . . . . . .  10
                     8.11  PrintScreen1  . . . . . . . . . . . . .  10
                     8.12  Compare . . . . . . . . . . . . . . . .  11
                     8.13  PrintScreen2  . . . . . . . . . . . . .  11
                     8.14  Sort  . . . . . . . . . . . . . . . . .  11
                     8.15  PrintScreen3  . . . . . . . . . . . . .  11
                     8.16  PrintList . . . . . . . . . . . . . . .  11
                     8.17  PrintReportBtm  . . . . . . . . . . . .  12
                     8.18  PrintScreen4  . . . . . . . . . . . . .  12
                     8.19  End Routines  . . . . . . . . . . . . .  12

               Appendix A  CrossBas Files                           13

               Appendix B  Modification History                     15

               Appendix C  Power-BASIC Reserved Words               17















                                          i































































                                         ii












                                    FiguresFigures


               Figure 1: Summary Report Example  . . . . . . . . . . 8















































                                         iii


          CROSSBAS.DOC                CrossBas Manual                page 1



          1  Disclaimer          1  Disclaimer


               Hear ye, hear ye!  Be it known that the author hereby
          disclaims all warranties expressed or implied as to the quality
          or performance of this program.  The author will not be held
          liable for any lost profits, lost savings or any other direct,
          indirect, incidental or consequential damages resulting from the
          use of this program.  Your use of this program constitutes your
          agreement to this disclaimer and your release of the author from
          any form of liability or litigation.  (Really gives you
          confidence, huh?)


          2  Copyright and Usage          2  Copyright and Usage


               This program, as well as its accompanying files and
          documents, is copyright by the author, Lester L. Noll.  You are
          free to use and distribute it as you wish as long as you charge
          no payment, either money or otherwise, for it.  Also, you must
          keep all the associated files together.  The files are listed in
          Appendix I.  Use PKUNZIP to unarchive.

               If you have any questions, comments or suggestions about
          this program, feel free to contact me at CompuServe:

                    Lester L. Noll
                    [72250,2551]


          3  Introduction          3  Introduction


               CrossBas will scan a Power-BASIC source file and create a
          cross-reference table of variable names, labels, procedure and
          function names versus the physical line numbers where those names
          occur.

               To do this we must first read in all words in the file.  We
          can skip text to the right of "REM" statements or "'" remark
          identifiers; text to the right of "DATA" statements; text between
          quote marks;  numbers;  and operators.

               After the program words are read in, we compare them with
          Power-BASIC reserved words and metastatements.  We keep only
          those that are not Power-BASIC words.

               Finally, we alphabetize the remaining words and print them
          out, one word to a line, followed by the physical source file
          line number(s) where these words are found.  The list is sorted
          without regard to case.


          CROSSBAS.DOC                CrossBas Manual                page 2



               We print the list to an ASCII file and allow the user some
          control over its format.  You may either print it to your printer
          using the DOS PRINT or TYPE filename.ext>PRN commands or you may
          use a print program such as Norton's LP.

               At the end of the file is a summary report showing
          processing times, number of words processed and a few
          calculations that may be helpful for customizing CrossBas to your
          own programming characteristics.


          4  Running CrossBas          4  Running CrossBas


               Run CrossBas from the DOS command line.  There is no
          interactive mode.  If you enter "CROSSBAS" with no command line
          parameters, CrossBas will print a short message showing proper
          syntax and the optional switches.


          5  Command Line Options          5  Command Line Options


               The only required command line parameter is the input file
          (source file) path/name.  The output file path/name and switches
          are optional.  If no output file is entered, I append ".cb" to
          the input file name to create an output file name.  If a file
          having the same name as output file already exists, I write over
          it -- so be warned.

               Command line options can be entered in any order.  In fact,
          the only rule is that the input file path/name must be entered
          before the output file path/name.  You may enter switches, one
          after the other, without separating spaces.  If, however, you
          enter a switch before a file path/name you must leave at least
          one space between the file path/name and the preceding switch.

          Syntax:

          crossbas infile[.ext][outfile][.ext][/bw][/p][/u][/s][/l:n][/w:n]


          Switches:
               /bw  Set screen colors to black and white.
               /p   Paginate output file and print page headers.
               /u   Print variables to output file in upper case.
               /s   Print the list to the screen as well as to file.
               /l:n Set the printer left margin to n columns.
               /w:n Override CrossBas' word array dimension calculation.


          CROSSBAS.DOC                CrossBas Manual                page 3



          Input File                    infile                   [required]

               The input file path/name must be a valid DOS pathname.  If
          no path is entered, the default path is assumed.  If the input
          file path/name is not found, CrossBas prints an appropriate
          message and quits.


          Output File                   outfile                  [optional]

               The output file path/name must be formed using valid DOS
          pathname and filename syntax.  If no path is entered, the default
          is assumed.  If no output file path/name is entered or if the
          entered output file path/name is invalid, I append ".cb" to the
          input file path/name for the output file.

               I do not check if a file with the same name already exists.
          If one does exist, I write over it.  If you have a main file with
          the extension ".bas" and an include file with the extension
          ".inc" you are responsible for providing output file names that
          do not conflict with each other.  By allowing CrossBas to use its
          default output file name, both cross-reference files would have
          the same name, which means the second one would overwrite the
          first.


          Black & White                    /bw                   [optional]

               The black and white switch, /bw, sets the screen color to
          black and white.  The default screen colors are yellow (#14)
          foreground on a blue (#1) background.  The upper and lower screen
          lines (lines 1 and 25) use the same colors but with foreground
          and background colors reversed.  Since only colors numbered 0
          through 7 are allowed for background colors, and since yellow is
          14, the upper and lower screen line colors are blue foreground
          and brown (#6) background (14 minus 8).


          Paginate                       /p                      [optional]

               The paginate switch, /p, causes the output file to be
          written with page breaks and page headers.  The header contains
          the current system date, the page number and the source file
          name.  To print a paginated file, type either "TYPE filename.ext
          > PRN" or "PRINT filename.ext" from the DOS command line.  Blank
          lines and form-feeds are inserted in the output file in order to
          leave two blank lines at the top of the page and three blank
          lines at the bottom of the page.  The header appears on line
          three of each page, followed by one blank line. On line five is a
          column header indicating "Variable/Label/Proc" name on the left,
          and "Physical Line Number" on the right.


          CROSSBAS.DOC                CrossBas Manual                page 4



               If the paginate switch is not selected, the output file is
          printed without page breaks or headers.  This method may be
          preferable if you use a print formatter like Norton Utilities'
          LP, which does its own page formatting.

               In either case, the summary report will be printed on the
          last page without breaks.  Thus if there are not enough lines to
          print the entire report on what remains of the last page, I
          insert a form-feed and print it on a new page.


          Upper-case                      /u                     [optional]

               The upper-case switch, /u, causes the variable, label,
          procedure and function names to be written to the output file in
          all upper-case.  If this switch is selected, two words, the same
          in name but written in different case, would only appear once in
          the output listing.  If this switch is not selected, for example,
          "Label1:", LABEL1:" and "label1:" would all be listed separately.
          If you use case to clarify your labels, such as,
          "ThisIsLabelOne:", you will probably choose to not use this
          switch.  Sorting is always done in upper-case order, therefore
          "AAA", "aaa" and "Aaa" would be treated equally.  (Because I use
          UCASE$(word$) to sort the list, the three previous examples could
          appear in any order.)


          Screen                        /s                       [optional]

               The screen switch, /s, causes the sorted list to print to
          the screen at the same time it prints to the output file.  After
          22 lines print to the screen, the scroll stops with a "...Press Q
          to Quit screen list, any other key to continue" message.  When
          you press a key the scroll continues for 22 more lines.  If you
          press <Q> or <ESC> the screen list stops but output to output
          file continues until the list print is completed.

          [Note:  The list prints to the output file at the same time it
          prints to the screen.  Therefore, if you decide you don't want to
          see anymore and press <Ctrl><Break>, you will also abort the
          write to file.]


          Left Margin                    /l:n                    [optional]

               The left margin switch and parameter, /l:n, will insert a
          printer setup string at the top of the output file to set the
          left margin at "n" columns.  The left margin range is 0 to 8
          columns.  Since the page width is 72 columns, having a left
          margin of more than 8 would push the page off the edge of an 80
          column page.  If you enter a left margin greater than 8, the
          value defaults to 8.


          CROSSBAS.DOC                CrossBas Manual                page 5



          [Note:  I use the Epson escape sequence, <ESC> "l" n, where n
          equals the left margin column.  If you have a different printer
          you must modify the code or not use this option.]


          Word Array Dimension Override     /w:n                 [optional]

               The word dimension override switch and parameter, /w:n, will
          override CrossBas' internal word dimension calculation.  You may
          need to use this if the source file is less densely commented
          than CrossBas expects.  Let me explain.

               CrossBas uses a string array to hold all the words read in
          from the input file.  I use two default parameters to calculate
          how many words to dimension the word array for.  The two
          parameters are Average Word Length and Packing Factor.  The word
          array will hold all of the non-comment, non-number words found in
          a source file.  To calculate the word array dimension, I first
          read the source file size in bytes.  Then I multiply it by the
          Packing Factor.  The Packing Factor is a number, less than 1,
          that represents the ratio of non-comment, non-number word bytes
          versus the total bytes in the file.  Then I divide the result by
          the Average Word Length.  These two parameters are read in from
          the defaults file, CROSSBAS.DEF, when CrossBas first starts.

               Normally, this calculation is accurate enough.  However, if
          the actual packing factor of a particular source file is
          considerably greater than the default or the actual average word
          length is considerably smaller than the default, you may need to
          use this switch.

               To use the /w:n switch:  approximate the number of words,
          both Power-BASIC reserved words and non-reserved words: labels,
          procedure names, function names, variable names, in the source
          file.  Do not include comment words, data words or numbers in the
          total.  This number will become the 'n' parameter of the word
          array dimension switch.


          6  Changing Defaults File          6  Changing Defaults File


               You can change the defaults file with any ASCII editor.
          When you run CrossBas the first time it will create CROSSBAS.DEF.
          The next time it runs it will look for that file in the default
          directory.  If it finds it, CrossBas will read in two parameters:
          Average Word Length, and Packing Factor.

               These two parameters are both in the first line of the
          defaults file, separated by a comma.  The rest of the defaults
          file contains a few lines of text explaining the default
          parameters.  You may do anything you like to this file except
          modify the format of the first line.  Change the values, if you
          like but be sure the first number, the Average Word Length, is a


          CROSSBAS.DOC                CrossBas Manual                page 6



          number greater than one.  Likewise, the second number, the
          Packing Factor, must be a decimal number less than one.  The two
          numbers must be separated by a comma.

               To determine the best default parameters, check the summary
          report, at the end of your CrossBas listings.  It shows the
          default values used by CrossBas.  It also shows the actual
          parameters that CrossBas found after reading in the words from
          the source file.  After CrossBas-ing a few of your source files,
          you can get an idea of the Average Word Lengths and Packing
          Factors you use in your files.


          7  The Summary Report          7  The Summary Report


               A summary report appears at the end of the CrossBas cross-
          reference file listing.

               The top two-thirds of the report is the same as what
          CrossBas prints to the screen as it processes the source file.

               Your command line options are listed on the top two rows.

               The next three lines show the read and parse procedure
          statistics.  This is where CrossBas reads in source file text
          lines, parses them into words and saves all the words that are
          not comments (REM or '), data words (DATA), operators (*, AND, =,
          etc.), or numbers.  The remaining words get stored in a word
          array.  Line number references for each of the saved words are
          stored in a line number array.  These three lines show the number
          of lines in the source file, the number of words saved to the
          word array and the start, end and elapsed processing times.

               The next three lines show the compare procedure statistics.
          Up to this point, the word array contains Power-BASIC reserved
          words, label names, variable names, subprogram (SUB) names and
          function (FN) names.  Now CrossBas compares each word in the word
          array with Power-BASIC reserved words.  If the words compare we
          do not save them.  These three report lines show the number of
          words compared, the number of non-Power-BASIC words in the source
          file (if the same word appears 5 times then it is counted as 5
          words at this point) and the start, end and elapsed processing
          times.

               The next two lines show the sort procedure statistics.
          CrossBas sorts the remaining words in alphabetical order, without
          regard for case.  These two report lines show the number of words
          sorted and the start, end and elapsed processing times.

               The next two lines show the printing to file statistics.
          CrossBas prints the sorted words to the output file in the manner
          specified by the command line options.  These two lines show the
          number of unique words (if the same word appears 5 times it is


          CROSSBAS.DOC                CrossBas Manual                page 7



          counted as only one unique word) printed to the output file and
          the start, end and elapsed processing times.

               The next line shows the total CrossBas processing times:
          start, end and elapsed, from the start of the read and parse
          procedure to the end of the print to file procedure.

               Next we have an analysis of the source file.  Use this to
          help you customize your CROSSBAS.DEF file.

               The total number of bytes used by the word array is taken at
          the time when it contained both non-reserved words (labels,
          procedures, functions, variables) and Power-BASIC reserved words.
          I use this figure (actually a projection of this figure using the
          input file length and the default Packing Factor) to determine if
          there will be enough string space to process the source file.

               The default word array dimension is the number used to
          dimension the word array.  This is a calculated value unless you
          included a command line override (/w:n).  The command line
          override is shown at the top of the report.  If no override
          option was included, the screen report will show "No o/r."

               The actual word array dimension is the actual number of
          words found in the source file.

               The default Average Word Length is the number read in from
          the CROSSBAS.DEF file.  I use this, along with the default
          Packing Factor, to calculate the default word array dimension.

               The actual average word length is the actual average word
          length of the non-reserved words in the source file.  I guess
          that explains itself.

               The default Packing Factor is the number read in from the
          CROSSBAS.DEF file (a number less than one).  I use this, along
          with the Average Word Length, to calculate the word array
          dimension.  I use this also to determine if there is enough
          string space to process the source file.

               Finally, we list the source and output file names and sizes.


          CROSSBAS.DOC                CrossBas Manual                page 8



                               -+-+-+- Summary Report -+-+-+-

          Options: Upper-case:  No     Screen:   No       Paginate:  Yes
                   Left Margin: 6      ArrayDim: No o/r

          Read:      448 lines from source file CROSSBAS.INC
          Found:     919 non-comment words.
          Times:     Start: 15:06:59  End: 15:07:16  Elapsed: 00:00:17

          Compared:  919 non-comment words from source file CROSSBAS.INC
          Found:     432 non-reserved words (variables, labels, procedures)
          Times:     Start: 15:07:17  End: 15:07:27  Elapsed: 00:00:10

          Sorted:    432 non-reserved words (variables, labels, procedures)
          Times:     Start: 15:07:28  End: 15:08:01  Elapsed: 00:00:33

          Printed:   93 unique, non-reserved words to CROSSBAS.CBI
          Times:     Start: 15:08:02  End: 15:08:04  Elapsed: 00:00:02

          Totals:    Start: 15:06:59  End: 15:08:04  Elapsed: 00:01:05

          Word Array Size:   4,852 bytes
          Default Word Array Dim.:  1,124 wds  Actual Word Array Dim.:    919 wds
          Default Avg.Word Length:      6 byt  Actual Avg.Word Length:      5 byt
          Default Packing Factor:   45.00 %    Actual Packing Factor:   32.35 %

          Source,    CROSSBAS.INC, File size:  14,998 bytes
          Cross-Ref, CROSSBAS.CBI, File size:   6,984 bytes


                              Figure 1: Summary Report Example                              Figure 1



          8  What CrossBas Does          8  What CrossBas Does


               CrossBas' main program flow consists of a series of GOSUB-
          type subroutines.  The following is a description of each one in
          the order in which they occur.

          8.1  Initialize          8.1  Initialize

               Initialize the screen type and color variables.  Most of my
          numbers will be integers so I define all number variables as
          integers.  Set up an error trap.

          8.2  InitScreen          8.2  InitScreen

               Print initializing message to the screen.


          CROSSBAS.DOC                CrossBas Manual                page 9



          8.3  ReadCmdLine          8.3  ReadCmdLine

               Read in the DOS command line parameters.  Set up the
          paginate, screen print and upper-case flags, and the left margin
          and word array dimension variables.  Get input file path/name.
          The second parameter that is not a valid switch is assumed to be
          the output file path/name.  If no input file path/name is found
          then print the appropriate message to the screen and die.

          8.4  OpenFiles          8.4  OpenFiles

               Attempt to open the input and output files.  If I fail while
          opening the input file, I check to see if it has an extension.
          If it doesn't, I append ".bas" and try again.  If I fail again, I
          print the appropriate message to the screen and die.

               If the input I open the input file ok, I next attempt to
          open the output file.  If no file path/name is given I append
          ".cb" to the end of the input file (after stripping the
          extension, if one exists).  If I fail, I somewhere along the way,
          I print the appropriate message to the screen and die.  If I am
          successful I close the output file until I'm ready to write to
          it.

          [Note:  A previously existing file with the same name as the
          output file is, at this point, replaced by a file of 0 bytes.]

          8.5  CalcFileNames          8.5  CalcFileNames

               Strip off the drive and directory specs from the input and
          output file path/names.  I use these stripped names for output
          file page headers and screen and file report headers.

          8.6  ReadDefaults          8.6  ReadDefaults

               Read in the default values for Average Word Length and
          Packing Factor from the defaults file, CROSSBAS.DEF.  If this
          file does not exist, I make one.

               If you run CrossBas from other than its home directory, it
          will not find its defaults file and will create a new one in the
          default directory.  This won't bother CrossBas but if you have
          modified the CROSSBAS.DEF and are assuming your modified default
          parameters will be used, you may be surprised.  In that case, you
          had better change directory to the CrossBas directory and run the
          program from there.  See the default section for more on
          modifying the defaults file.


          CROSSBAS.DOC                CrossBas Manual               page 10



          8.7  CheckStringSpace          8.7  CheckStringSpace

          [Note:  I removed this subroutine from the Power-BASIC version of
          CrossBas because of PB's increased string space capacity.  To use
          it with Turbo-BASIC, reinstall.]

               Check to see that there is enough free string space for
          storing the anticipated input file words.  I read the input file
          size and multiply it by the packing factor.  This should give me
          the approximate number of bytes of non-comment, non-number words
          in the input file.  Then I compare this "effective file size"
          with the free string space.  If not enough string space, I print
          the appropriate message to the screen and die.

          8.8  CalcWordArraySize          8.8  CalcWordArraySize

               First check to see if there is a command line Word Array
          Dimension override (/w:n).  If so, use this value to dimension
          the word array.

               If not calculate the approximate number of words in the
          input file.  Find the effective input file size by multiplying
          the input file size by the Packing Factor.  Then divide the
          effective file size by the Average Word Length.  Packing Factor
          and Average Word Length are values read in from the defaults file
          in the ReadDefaults section.

          8.9  PrintScreenTop          8.9  PrintScreenTop

               Print the first few lines of the screen report.  These show
          the input file name, less any drive or directory specifications;
          the condition of the three command line switch flags; and the
          option values for left margin and word array dimension override.

          8.10  ReadAndParseData          8.10  ReadAndParseData

               Read in the input file line by line, and parse out the non-
          comment, non-number words.  Save these words, along with their
          physical line numbers in separate arrays.  Keep a running total
          of the bytes in the word array.  Print the current input file
          line number and word to the status bar at the bottom of the
          screen after every input file line.

               Also, check the free string space after each line and, if it
          gets below 300 bytes (249 column limit per line, plus a few extra
          for good measure) then abort and print the appropriate message to
          the screen and die.

          8.11  PrintScreen1          8.11  PrintScreen1

               Print the number of lines read from the input file, the
          number of non-comment, non-number words read and saved in the
          word array, and the start and end times for the operation to the
          screen.


          CROSSBAS.DOC                CrossBas Manual               page 11



          8.12  Compare          8.12  Compare

               Compare the word array words with Power-BASIC reserved
          words.  If the words are not Power-BASIC words, then save them
          and their associated line-number array elements.  Print the
          current word number to the status bar at the bottom of the screen
          after every non-Power-BASIC word is saved.

               By checking the first letter of the word array word, I only
          need to compare the word array word with Power-BASIC words
          beginning with the same letter.  Save the non-Power-BASIC words
          back into the same array but at a lower location.

               Lets say words 1,2 and 3 were Power-BASIC words.  Word 4 is
          a label.  Therefore I save word array element number 4 back to
          the same array but as element 1.  I also save the associated
          line-number array element, in this case, 4 to 1.

               When I have compared all the words in the array, I blank out
          the remaining, non-used elements in the word array to free up
          string space.

          8.13  PrintScreen2          8.13  PrintScreen2

               Print the number of non-reserved words saved back to the
          word array and the start and end times for the operation to the
          screen.

          8.14  Sort          8.14  Sort

               Sort the remaining non-Power-BASIC words into alphabetical
          order.  I use a modified bubble sort and compare upper-case
          values of the words.  Print the current pass to the status bar at
          the bottom of the screen.

               If there are J words in the word array then I make J-1
          passes through the array, comparing a word with the word after
          it.  If the words are in order, I check the next two words.  If
          the words are out of order I swap them and their associated
          line-number array elements.  If I make an entire pass without
          making any swaps, then the sorting is complete.

          8.15  PrintScreen3          8.15  PrintScreen3

               Print the number of non-reserved words sorted and the start
          and end times for the operation to the screen.

          8.16  PrintList          8.16  PrintList

               Print the word list to the output file.  The words are
          listed in the left column.  The associated line numbers are
          listed in the right eight columns.  Print the current page and
          word number to the status bar at the bottom of the screen.


          CROSSBAS.DOC                CrossBas Manual               page 12



            o  If a left margin (/l:n) is selected, print the printer setup
               string at the top of the file.
            o  If the upper-case switch (/u) is selected, convert the words
               at print time.
            o  If the screen print switch (/s) is selected, print the words
               and line-numbers to the screen as they print to file.
            o  If the paginate switch (/p) is selected, print a page header
               at the top of each page and a form-feed at the bottom of
               each page.

          8.17  PrintReportBtm          8.17  PrintReportBtm

               Print the summary report on the last page of the report.  If
          the paginate switch (/s) is selected then if there is not enough
          room on the last page for the entire report, send out a form-feed
          and put it on a new page.  If the paginate switch is not selected
          then send out a form-feed to start a new page.

               The report contains read, compare, sort and print
          information, similar to that displayed on the screen.
          Additionally I print total procedure times; source and output
          file sizes; word array words and bytes, both default and actual;
          and Packing Factors and Average Word Lengths, default and actual.

          8.18  PrintScreen4          8.18  PrintScreen4

               Print the number of unique words printed to the output file
          and the start and end times for the operation to the screen.
          Erase the status bar and print a "CrossBas finished" message.

          8.19  End Routines          8.19  End Routines

               Finally, I close all open files, flush the keyboard buffer
          and wait for the user to acknowledge he has read the report
          screen by pressing a key.  I included this step because some
          versions of DOS erase the screen when they reload COMMAND.COM.


          CROSSBAS.DOC                CrossBas Manual               page 13









                                     Appendix AAppendix A

                                   CrossBas FilesCrossBas Files


               CrossBas uses the following files:

          CRSBAS.ZIP          CrossBas archive file that contains the
                              CrossBas files.
          CROSSBAS.EXE        CrossBas executable file.
          CROSSBAS.DEF        CrossBas defaults file.  (CrossBas creates
                              this file the first time it runs.)
          CROSSBAS.BAS        CrossBas main source file.
          CROSSBAS.INC        CrossBas subprograms file.
          CROSSBAS.DOC        CrossBas document file (this file).


          CROSSBAS.DOC                CrossBas Manual               page 14


          CROSSBAS.DOC                CrossBas Manual               page 15









                                     Appendix BAppendix B

                                Modification HistoryModification History


          version 1.00P     12/ 1/90

          Uploaded CrossBas version 1.00P to CompuServe PCVENB, Spectra
          forum.

          version 1.000     11/13/89

          Uploaded CrossBas version. 1.00 to CompuServe BPROGA forum,
          LIB 9.

          KEYWORDS:  CROSS-REFERENCE, TABLE, LIST, NON-RESERVED WORDS,
                     BASIC, CREF, XREF

          Description:   CrossBas will read in a Power-BASIC source file
                         and create an alphabetized cross-reference listing
                         of non-reserved words, i.e., variable, subprogram,
                         function and label names, along with the physical
                         line number(s) where they appear.  The list is
                         printed to file.  Handy for cleaning up unused
                         variable names, labels, etc.


          CROSSBAS.DOC                CrossBas Manual               page 16


          CROSSBAS.DOC                CrossBas Manual               page 17









                                     Appendix CAppendix C

                             Power-BASIC Reserved WordsPower-BASIC Reserved Words


          $COM             BLOAD            DEF              FILEATTR()
          $COM1            BSAVE            DEFBCD           FILES
          $COM2                             DEFDBL           FIX()
          $COMPILE         CALL             DEFEXT           FIXDIGITS
          $CPU             CASE             DEFFIX           FLEXCHR$
          $DEBUG           CBCD()           DEFFLX           FN
          $DYNAMIC         CDBL()           DEFINT           FOR
          $ELSE            CEIL()           DEFLNG           FRE()
          $ENDIF           CTEXT()          DEFQUD           FREEFILE
          $ERROR           CFIX()           DEFSNG           FROM
          $EVENT           CHAIN            DEFSTR           FUNCTION
          $FLOAT           CHDIR            DELAY
          $IF              CHR$()           DELETE           GET
          $INCLUDE         CINT()           DESCEND          GET()
          $INLINE          CIRCLE()         DIM              GET$
          $LIB             CLEAR            DO               GOSUB
          $LINK            CLNG()           DRAW             GOTO
          $LIST            CLOSE            DYNAMIC
          $OPTION          CLS                               HEX$()
          $SEGMENT         COLLATE          ELSE
          $SOUND           COLOR            ELSEIF           IF
          $STACK           COM()            END              IMP
          $STATIC          COMMAND$         ENDMEM           IN
          $STRING          COMMON           ENVIRON          INCR
                           COS()            ENVIRON$()       INKEY$
          ABS()            CQUD()           EOF()            INP()
          ABSOLUTE         CSNG()           EQV              INPUT
          AND              CSRLIN           ERADR            INPUT #
          ANY              CVB()            ERASE            INPUT$()
          APPEND           CVD()            ERDEV            INSERT
          ARRAY            CVE()            ERDEV$           INSTAT
          AS               CVF()            ERL              INSTR()
          ASC()            CVI()            ERR              INT()
          ASCEND           CVL()            ERROR            INTERRUPT
          ASCII()          CVMD()           EXECUTE          IOCTL
          DATA             CVMS()           EXIT             IOCTL$
          AT               CVQ()            EXP()
          ATN()            CVS()            EXP10()          KEY
                                            EXP2()           KEY()
          BASE             DATA             EXTERNAL         KILL
          BEEP             DATE$            EXTRACT$()
          BIN$()           DECLARE                           LBOUND()
          BINARY           DECR             FIELD            LCASE$()


          CROSSBAS.DOC                CrossBas Manual               page 18



          LEFT$()          OCT$()           RESET            TALLY()
          LEN()            OFF              RESTORE          TAN()
          LET              ON               RESUME           THEN
          LINE             OPEN             RETURN           TIME$
          LINE()           OPTION           RIGHT$()         TIMER
          LIST             OR               RMDIR            TIMER()
          LOC()            OUT              RND              TO
          LOCAL            OUTPUT           RND()            TROFF
          LOCATE                            ROUND()          TRON
          LOF()            PAINT()          RSET
          LOG()            PALETTE          RTRIM$()         UBOUND()
          LOG10()          PEEK()           RUN              UCASE
          LOG2()           PEEK$()                           UCASE$()
          LOOP             PEEKI()          SAVE             UNTIL
          LPOS()           PEEKL()          SCAN             USING
          LPRINT           PEN              SCREEN           USING$()
          LPRINT #         PEN()            SCREEN()         USR
          LSET             PLAY             SEEK             USR0
          LTRIM$()         PLAY()           SEG              USR1
                           PMAP()           SELECT           USR2
          MAP              POINT()          SERVICE          USR3
          MAX()            POKE             SGN()            USR4
          MAX$()           POKE$            SHARED           USR5
          MAX%()           POKEI            SHELL            USR6
          MEMSET           POKEL            SIN()            USR7
          MID$()           POS              SORT             USR8
          MIN()            POS()            SOUND            USR9
          MIN$()           PRESET           SPACE$()
          MIN%()           PRINT            SPC()            VAL()
          MKDIR            PRINT #          SQR()            VARPTR()
          MKB$()           PSET()           STATIC           VARPTR$()
          MKD$()           PUBLIC           STEP             VARSEG()
          MKE$()           PUT              STICK()          VERIFY()
          MKF$()           PUT()            STOP             VIEW
          MKI$()           PUT$             STR$()           VIEW()
          MKL$()                            STRIG
          MKMD$()          RANDOM           STRIG()          WAIT
          MKMS$()          RANDOMIZE        STRING$()        WEND
          MKQ$()           READ             STRPTR()         WHILE
          MKS$()           REDIM            STRSEG()         WIDTH
          MOD              REG              SUB              WINDOW
          MTIMER           REG()            SWAP             WINDOW()
                           REM              SYSTEM           WITH
          NAME             REMOVE$()                         WRITE
          NEXT             REPEAT$()        TAB()            WRITE #
          NOT              REPLACE          TAGARRAY
                                                             XOR

```
{% endraw %}

## DIABLO.ASM

{% raw %}
```
;Program Name    : Diablo.asm
;Author          : Mark Winkler, Consultant
;Date            : 10-20-90
;Compuserve #    : 73210,611
;Description     : Supports X-On, X-off as a TSR
;Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
;Tech Support Fax: 813-625-1698  G2 & G3 compatible
;Tech Support Voc: 813-625-1172  Voice
;
;
;       Diablo Driver
;
;       Intercepts calls to Int 17 (printer) and converts them
;       to Int 14 (communications) and does either x-on/x-off or
;       Etx logic
;
;       Command Format: Diablo L C X B P L S N
;                              | | | | | | | |
;                              | | | | | | | - Nulls
;                              | | | | | | --- Stop bits
;                              | | | | | ----- Word lenght
;                              | | | | ------- Parity
;                              | | | --------- Baud Rate
;                              | | ----------- Protocol (E)tx,(X)on,(R)edirect
;                              | ------------- Com device 0,1,2,3
;                              --------------- LPT Device 0,1,2
;
;               or
;
;       diablo *  -- activates or deactivates an existing driver
;
;
;       Note:
;               Pins 5,6 must be hooked up.
;               If simple hook up tie pin 20 to 5,6.
;
;
;       update history
;
;       10/24/87  init dtr and rts lines on start of program
;       12/24/87  added switch for nulls






code    segment byte public 'code'

etxbyte equ     03h
ackbyte equ     06h     ;
passbyte equ    01      ;pass through   byte
xonbyte equ     11h
xoffbyte equ    13h
;
etries  equ     20      ;number of error tries before reporting error
                        ;the exact time depends on what is located at
                        ;40:7c rs-232 timeout values


        assume cs:code,ds:code,es:code

        org     80h

comlength db    0


        org     100h
beg:    jmp     start
;
;
resident db     'Diablo'
int17:
        pop     dx              ;pop registers
        pop     ds
;
        db      0eah            ;jmp far instruction
intdword dd     0               ;double word ptr to int 17
activefg db     0ffh
intdwd  dd      0               ;storage for point to intercept

;
;
protocol db     0               ;protocol byte
comdevice dw    0               ;which com port to use
lptdevice dw    0               ;which printer device to use
errtries db     0               ;storage for errors
;
;
baud    db      0
parity  db      0
wordlen db      0
stopbit db      0
;
nulls   db      0               ;number of nulls to insert
;
int17catch:
        push    ds              ;save segment
        push    dx
        push    cs              ;place on stack
        pop     ds              ;update ds register

        cmp     dx,lptdevice    ;intercept this call ?
        jnz     int17           ;no
        cmp     ah,0            ;maybe
        jnz     initstat
        cmp     protocol,etxbyte
        jz      etx             ;
        cmp     protocol,passbyte
        jz      passthru
        jmp     xon             ;do xon stuff
;
initstat:
        mov     ah,10010000b    ;set printer status
        jmp     int17ret

;
int17ret:
        pop     dx
        pop     ds
        iret
;
;       redirected and pass thru, no protocol
;
passthru:
        mov     errtries,etries ;set error tries
trypassagain:
        call    sendtocom       ;send the byte
        and     ah,80h          ;check for timeout
        jz      rettocaller     ;return, a-ok
        dec     errtries
        jnz     trypassagain    ;try again maybe busy (pin 20)
        jmp     error

;
;       ETX Routines
;
ETX:
        call    sendtocom
        and     ah,80h          ;check for timeout
        jnz     error
        cmp     al,0dh          ;carriage return
        jnz     rettocaller
        mov     al,etxbyte      ;send etx to printer
        call    sendtocom
        mov     al,0dh          ;place byte back encase error
        and     ah,80h
        jnz     error
        mov     errtries,etries

tryetxagain:
        call    recfromcom      ;get character
        and     ah,80h
        jz      chkack
        dec     errtries                ;decrement number of tries
        jnz     tryetxagain
;
        mov     al,0dh          ;place org. back in
        jmp     error
chkack:
        and     al,7fh          ;throw any extra bits away
        cmp     al,ackbyte
        jnz     tryetxagain
        mov     al,0dh          ;place orginal byte back in
rettocaller:
        mov     ah,10010000b    ;set printer status
        jmp     int17ret
;
sendtocom:
        mov     ah,1            ;send character in al
        mov     dx,comdevice    ;get device number
        int     14h             ;send it
        test    ah,80h          ;error
        jnz     sendcomret      ;return if error
;
        cmp     al,0dh          ;carriage return
        jnz     sendcomret
;
        push    cx
        mov     cl,nulls        ;get the number of nulls
        or      cl,cl           ;if zero skip it
        jz      endnull
;
nulloop:
        mov     ah,1            ;send character in al
        mov     al,0h           ;send the null
        mov     dx,comdevice    ;get device number
        int     14h             ;send it
        test    ah,80h          ;error
        jnz     endnull         ;return if error
        dec     cl
        jnz     nulloop         ;if more send it

endnull:
        pop cx
        mov al,0dh
sendcomret:
        ret
;
recfromcom:
        mov     ah,2            ;rec character
        mov     dx,comdevice
        int     14h
        ret
;
getstatcom:
        mov     ah,3            ;get status of port
        mov     dx,comdevice
        int     14h
        ret
;

error:
        mov     ah,1            ;show printer busy
        jmp     int17ret
;
;
;       xon/xoff protocol
;
xon:    push    ax              ;save the character to send
        call    getstatcom      ;get the status
        and     ah,1            ;data ready
        jz      xon1
        call    recfromcom      ;get the character
        cmp     al,xoffbyte     ;xoff character
        jnz     xon1
;
        mov     errtries,etries
xonwait:
        call    recfromcom      ;get character
        and     ah,80h
        jz      chkxon
        dec     errtries        ;decrement number of tries
        jnz     xonwait
        pop     ax              ;restore the character
        jmp     error
;
chkxon:
        and     al,7fh          ;throw any extra away
        cmp     al,xonbyte
        jnz     xonwait
;
xon1:   pop     ax              ;rtestore character
        call    sendtocom       ;send the character
        jmp     rettocaller     ;and return to the caller

lastbyte db     0
;
;
clrspace:
        cmp     byte ptr [bx],20h
        jnz     clrret
        inc     bx
        dec     cl
        jnz     clrspace
clrret: ret
;
abort:
        mov     ah,9            ;print the string
        mov     dx,offset message
        int     21h             ;
        mov     ah,0            ;terminate program
        int     21h
        hlt

start:
        mov     ah,9            ;print signon
        mov     dx,offset signon
        int     21h
;
        mov     cl,comlength    ;get the command length
        and     cl,0ffh         ;if zero abort
        jz      abort
        mov     bx,offset comlength+1
;
;       check for 1st parameter lpt
;

        call    clrspace        ;get rid of spaces
        jz      abort           ;if zero abort
        mov     al,[bx]
        cmp     al,'*'          ;check for special (act or deact)
        jz      chkdrv
        jmp     chkpar
;
;       activate or deactivate exisiting driver
;
chkdrv:
        sub     ax,ax           ;clear reg
        mov     es,ax           ;page zero
        cld                     ;set the direction flag
look1:
        mov     di,ax
lookagain:
        mov     si,offset resident      ;point to message
        cmpsb                           ;compare a byte
        jz      maybefound
        cmp     di,0            ;top of 64k boundary
        jnz     lookagain
        mov     ax,es           ;get es
        add     ax,1000h        ;next 64k block
        cmp     ax,0a000h       ;top of memory
        jz      nofind          ;
        mov     es,ax
        jmp     lookagain
maybefound:
        mov     ax,di           ;save pointer incase of no match
        cmpsw                   ;foure more words to match
        jnz     look1
        cmpsw
        jnz     look1
        cmpsw
        jnz     look1
        cmpsw
        jnz     look1
        mov     dx,es:[di]
        or      dx,dx           ;find valid driver
        jnz     founddr         ;yes so do flip/flop
        jmp     look1
nofind:
        mov     dx,offset notvalid      ;not found
        mov     ah,9
        int     21h
        mov     ah,0            ;terminate
        int     21h
        hlt
;
;       found driver in memory
;
founddr:
        inc     di              ;get segment value of int 17
        inc     di
        mov     cx,es:[di]
        inc     di              ;point to  active flag
        inc     di
        mov     ah,es:[di]              ;get the value
        or      ah,ah           ;set the flag
        not     ah              ;complement it
        mov     es:[di],ah              ;flip it
        jz      actdrv          ;restore the driver
;
;       deactivate driver
;
        push    ds
        mov     ah,25h
        mov     al,17h          ;int 17 (printer)
        mov     ds,cx           ;place in the segment
                                ;dx register has offset
        int     21h             ;place in the vector
        pop     ds
        mov     dx,offset deactmsg
flipmsg:
        mov     ah,9
        int     21h
        mov     ah,0            ;terminate program
        int     21h             ;
        hlt
actdrv:
        inc     di              ;point to offset of driver
        mov     dx,es:[di]
        inc     di              ;and then segment
        inc     di
        mov     cx,es:[di]
        push    ds
        mov     ds,cx
        mov     ah,25h
        mov     al,17h          ;int 17 (printer)
        int     21h
        pop     ds
        mov     dx,offset actmsg
        jmp     flipmsg


abort1: jmp     abort


;
;       check for valid printer parameter
;
chkpar:
        cmp     al,30h          ;check if valid
        jb      abort1          ;error
        cmp     al,33h          ;check if valid
        jae     abort1          ;if equal or above abort
        sub     al,30h          ;subtract offset
        mov     ah,0            ;zero out ah
        mov     lptdevice,ax    ;update printer device
        inc     bx              ;move to next byte
;
;       check for com device
;

        call    clrspace        ;get rid of spaces
        jz      abort1          ;if zero abort
        mov     al,[bx]
        cmp     al,30h          ;check if valid
        jb      abort1          ;error
        cmp     al,34h          ;check if valid
        jae     abort1          ;if equal or above abort
        sub     al,30h          ;subtract offset
        mov     ah,0            ;zero out ah
        mov     comdevice,ax    ;update printer device
        inc     bx              ;move to next byte
;
;       check for protocol

        call    clrspace        ;get rid of spaces
        jz      abort1          ;if zero abort
        mov     al,xonbyte
        and     byte ptr [bx],5fh ;convert to upper case
        cmp     byte ptr [bx],'X'       ;check if valid
        jz      proto
        mov     al,etxbyte
        cmp     byte ptr [bx],'E'       ;check if valid
        jz      proto                   ;if equal or above abort
        mov     al,passbyte
        cmp     byte ptr [bx],'R'
        jnz     abort1
proto:  mov     protocol,al     ;place in the protocol byte
;
;       check for valid baud rate
;       110,150,300,600,1200,2400,4800,9600,19200
        inc     bx              ;point to next byte
        call    clrspace
        jz      abort1
        mov     ax,[bx]         ;get the next two bytes
        push    bx
        mov     ch,0            ;zero counter
        mov     bx,offset baudtab

baudloop:
        cmp     ax,[bx]
        jz      foundbaud
        inc     bx              ;point to next value
        inc     bx
        inc     ch              ;bump counter
        cmp     ch,9            ;check if not found
        jnz     baudloop
abort2: jmp     abort
baudtab:
        db      '11'            ;110 baud
        db      '15'
        db      '30'
        db      '60'
        db      '12'
        db      '24'
        db      '48'            ;4800
        db      '96'            ;9600
        db      '19'            ;19200
;
foundbaud:
        mov     baud,ch         ;save baud rate
        pop     bx              ;get pointer back
        inc     bx
        inc     bx              ;bump to next value
clrtospace:
        cmp     byte ptr [bx],20h
        jz      gotspace
        dec     cl              ;run out yet
        jz      abort2          ;yes so abort
        inc     bx
        jmp     clrtospace
;
gotspace:
        call    clrspace        ;clear spaces
        jz      abort2
        mov     al,[bx]
        and     al,5fh          ;upper case
        mov     ch,0            ;zero count
        cmp     al,'N'          ;none
        jz      chkword
        inc     ch
        cmp     al,'O'          ;odd
        jz      chkword
        mov     ch,3
        cmp     al,'E'          ;even
        jnz     abort2
chkword:
        mov     parity,ch       ;save parity
        inc     bx
        call    clrspace
        jz      abort2
        mov     al,[bx]         ;get wordlength
        mov     ch,2
        cmp     al,'7'
        jz      chkstop
        inc     ch
        cmp     al,'8'
        jz      chkstop
abort3: jmp     abort           ;error abort
;
chkstop:
        mov     wordlen,ch      ;save wordlength
        inc     bx
        call    clrspace
        jz      abort3
        mov     al,[bx]
        mov     ch,0
        cmp     al,'1'
        jz      patch34
        inc     ch
        cmp     al,'2'
        jnz     abort3
patch34:
        mov     stopbit,ch
;
;
        inc     bx              ;move to next character
        call    clrspace        ;move to next parameter
        jz      patcom34        ;nothing so continue on
        mov     al,[bx]
        cmp     al,'1'          ;1 to
        jb      abort3
        cmp     al,'9'          ;9 nulls
        ja      abort3
        sub     al,30h          ;sub ascii bias
        mov     nulls,al        ;keep nulls
;
;       patch in address of com3 and com4
;
patcom34:


        push    ds
        mov     ax,40h          ;set for low page
        mov     ds,ax
        mov     bx,4            ;set up the offset
        mov     [bx],03e8h      ;patch in com3
        inc     bx
        inc     bx              ;point to next port area
        mov     [bx],02e8h      ;patch in com4
        pop     ds              ;restore ds reg
;
;
;       set the baud rate,parity,stop bits and data bits
;
;
        mov     al,baud         ;get the baud rate
        mov     cl,5            ;5 bits to shift
        shl     al,cl
        mov     ah,parity       ;get parity
        mov     cl,3            ;move in parity
        shl     ah,cl
        or      al,ah           ;place in al
        mov     ah,stopbit
        mov     cl,2            ;two bits to shift
        shl     ah,cl
        or      al,ah
        mov     ah,wordlen      ;word length
        or      al,ah           ;al has all parameters
        mov     wordlen,al      ;save 19200 maybe
;
        mov     ah,0            ;init sio chip
        mov     dx,comdevice    ;get device to setup
        int     14h             ;tell bios
;
;       set dtr and rts lines of port
;
        mov     cx,comdevice    ;get device number
        shl     cx,1            ;muliply by 2,word offset
        push    ds
        mov     ax,40h          ;set for low page
        mov     ds,ax
        mov     bx,0            ;zero bx
        add     bx,cx           ;add in device number
        mov     dx,[bx]         ;get base of port
        add     dx,4            ;add four for modem control reg
        pop     ds              ;restore ds
        mov     al,3            ;dtr and rts
        out     dx,al
;
;
;       check if special 19200
;
        cmp     baud,8          ;if 8 special
        jnz     patchint
;
;       special case for 19200
;
        mov     cx,comdevice    ;get device number
        shl     cx,1            ;muliply by 2,word offset
        push    ds
        mov     ax,40h          ;set for low page
        mov     ds,ax
        mov     bx,0            ;zero bx
        add     bx,cx           ;add in device number
        mov     dx,[bx]         ;get base of port
        push    dx              ;save it
        add     dx,3            ;add three for line control reg
        in      al,dx
        mov     ah,al           ;save for later
        or      al,80h          ;set divisor latch bit
        out     dx,al
        pop     dx              ;get base port back
        inc     dx
        mov     al,0
        out     dx,al           ;high reg.
        dec     dx
        mov     al,6            ;divisor for 19200
        out     dx,al
        add     dx,3            ;back to line control
        mov     al,ah
        out     dx,al           ;set back to what it was
        pop     ds              ;restore ds reg
;
;
;       patch in the intercept vector
;
patchint:
        mov     ah,35h          ;get a vector
        mov     al,17h          ;printer vector
        int     21h             ;call dos
        mov     word ptr intdword,bx
        mov     word ptr intdword+2,es
        mov     ah,25h          ;set a vector
        mov     al,17h
        mov     dx,offset int17catch
        int     21h             ;do it
;
        mov     word ptr intdwd,offset int17catch ;save catch routine for flip
        mov     ax,cs                   ;get the cs valid
        mov     word ptr intdwd+2,ax    ;and save code value
;
;
        mov     dx,offset lastbyte
        int     27h             ;terminate but stay resident
        hlt

;
;
message db      0dh,0ah
        db      'Command Format: Diablo L C X B P W S N',0dh,0ah
        db      '                       | | | | | | | |',0dh,0ah
        db      '                       | | | | | | | - Nulls 1-9 (blank = 0)'
        db      0dh,0ah
        db      '                       | | | | | | --- Stop bits (1-2)'
        db      0dh,0ah

        db      '                       | | | | | ----- Word Length (7-8)'
        db      0dh,0ah
        db      '                       | | | | ------- Parity (N,O,E)',0dh,0ah
        db      '                       | | | --------- Baud Rate'
        db      ' (110 to 19200)',0dh,0ah
        db      '                       | | '
        db      '----------- Protocol (E)tx,(X)on,(R)edirected',0dh,0ah
        db      '                       | ------------- Com device 0,1,2,3'
        db      0dh,0ah
        db      '                       --------------- LPT Device 0,1,2'
        db      0dh,0ah,0dh,0ah
        db      'All seven parameters must be entered !!!!'




        db      0dh,0ah,0dh,0ah
        db      'Diablo *   - activates or deactivates existing driver in '
        db      'memory'
        db      0dh,0ah,'$'
;
signon  db      0dh,0ah,'Diablo Driver v1.6  C-1986 Mark Winkler',0dh,0ah,'$'
notvalid db     0dh,0ah,'Error --- Diablo driver not installed$'
deactmsg db     0dh,0ah,'Diablo Driver deactivated$'
actmsg  db      0dh,0ah,'Diablo Driver activated$'


code    ends
        end beg

```
{% endraw %}

## ERASCN.BAS

{% raw %}
```bas
'Program Name    : EraScn.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 10-26-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Description     : How to erase a line, section in a line, vert section of screen


cls

'Build an 80 character string
a$="1234567890"
for i=1 to 8:b$=b$+a$:next i

'Print full 80 character screen
for i=1 to 25
locate i,1:print b$;
next i

'Erase row 3 of screen to the end
call EraLine(3)

'Erase part of a line in the middle
call EraPartLine(10,40,10)


'Erase a verticle line
call EraVertLine(9,4,14)


sub EraVertLine(r,c,l)
'r=row,c=column,l=length
for j=c to l
locate (r-1)+j,c
print space$(1);
next j
end sub

sub EraPartLine(r,c,l)
'r=row,c=column,l=length
locate r,c:print space$(l);
end sub


sub EraLine(r)
'r=row
locate r,1:print space$(80);
end sub
```
{% endraw %}

## FACTORY.BAS

{% raw %}
```bas
'Program Name    : Factory.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 11-12-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Concept Date    : 07-13-90
'Concept by      : Smithtronix Corporation
'                : Advanced programming examples, few comments in source code
'
DIM Arry1(5000)

SCREEN 9, , 1, 0
LINE (0, 0)-(639, 349), 14, B

LINE (40, 30)-(600, 180), 8, BF

'Vertical Scaline Lines
os = 0
FOR i = 1 TO 12
LINE (67 + os, 31)-(67 + os, 179), 4'6
os = os + 48
NEXT i

'Horizontal Scaline Lines
os = 15
FOR i = 1 TO 5 '9
LINE (41, 31 + os)-(599, 31 + os), 4'6
os = os + 30
'os = os + 15
NEXT i



COLOR 14, 0: LOCATE 2, 28: PRINT "Smithtronix Trend Monitor";
COLOR 15, 0: LOCATE 3, 77: PRINT "400";
LOCATE 13, 77: PRINT "000";
COLOR 11, 0: LOCATE 4, 78: PRINT "O";
             LOCATE 5, 78: PRINT "V";
             LOCATE 6, 78: PRINT "E";
             LOCATE 7, 78: PRINT "N";
             LOCATE 9, 78: PRINT "T";
             LOCATE 10, 78: PRINT "E";
             LOCATE 11, 78: PRINT "M";
             LOCATE 12, 78: PRINT "P";

'Border Enhancement
LINE (39, 29)-(601, 181), 11, B

COLOR 14, 0
LOCATE 14, 2: PRINT "TFT  00000 03000 06000 09000 12000 15000 18000 21000 24000 27000 30000 33000";

LOCATE 15, 2: PRINT "TIME 12:00 12:15 12:30 12:45 01:00 01:15 01:30 01:45 02:00 02:15 02:30 02:45";
COLOR 15, 0
LOCATE 16, 2: PRINT "FPM  200"

LOCATE 16, 14: PRINT "Oven Colors ";
COLOR 10, 0:  PRINT "1/1 ";
COLOR 11, 0:  PRINT "1/2 ";
COLOR 12, 0:  PRINT "2   ";
COLOR 13, 0:  PRINT "3/1 ";
COLOR 14, 0:  PRINT "3/2 ";
COLOR 15, 0:  PRINT "4,  ";
COLOR 10, 0:  PRINT "5   ";
COLOR 11, 0:  PRINT "6   ";
COLOR 12, 0:  PRINT "7   ";
COLOR 13, 0:  PRINT "8/1 ";
COLOR 14, 0:  PRINT "8/2 ";
COLOR 8, 0: LOCATE 24, 2: PRINT "F1-Sel Make#, F2-Set Ovns, F5-Disp Ovn Tmp 1-4, F6-Disp Ovn 5-8, Esc-Exit";
 COLOR 15, 0
 LOCATE 17, 2: PRINT "Make #   17073-05  Product Name: Cheyenne Hickory  "; :
LOCATE 18, 2: PRINT "Ovens               1/1  1/2  2    3/1  3/2  4    5    6    7    8/1  8/2"
LOCATE 19, 2: PRINT "Oven Temp Set Pt F  000  250  250  000  250  235  235  235  275  225  280"
LOCATE 20, 2: PRINT "Oven Temp Actual    100  251  249  098  248  232  235  231  274  225  278";
LINE (0, 223)-(639, 223), 14
COLOR 13, 0: LOCATE 2, 2: PRINT "Time "; TIME$
          LOCATE 2, 65: PRINT "Date "; DATE$

SCREEN 9, , 0, 0
VIEW (40, 30)-(600, 180)
WINDOW (1, 1)-(630, 100)


MLoop:
COLOR 13, 0: LOCATE 2, 2: PRINT "Time "; TIME$
          LOCATE 2, 65: PRINT "Date "; DATE$

view:window:gosub PBCOPY '1, 0

k$ = INKEY$
IF k$ = CHR$(27) THEN SYSTEM
COLOR 13, 0: LOCATE 2, 2: PRINT "Time "; TIME$
          LOCATE 2, 65: PRINT "Date "; DATE$
          FOR Dly = 1 TO 1000: NEXT Dly
FOR j = 1 TO 2
FOR i = 0 TO 2 * 3.1415 STEP .02
k$ = INKEY$
IF k$ = CHR$(27) THEN SYSTEM
   v1 = INT(ABS(80 * SIN(i)))
   v2 = INT(ABS(94 * COS(i)))
   v3 = INT(ABS(100 * SIN(i + .45)))
   v4 = INT(ABS(100 * SIN(i + .78)))
   v5 = INT(ABS(100 * COS(i + .45)))
   v6 = INT(ABS(50 * COS(i + .78)))

   PSET (cnt, v1), 10
   PSET (cnt, v2), 11
   PSET (cnt, v3), 12
   PSET (cnt, v4), 13
   PSET (cnt, v5), 14
   PSET (cnt, v6), 15
COLOR 13, 0: LOCATE 2, 2: PRINT "Time "; TIME$
          LOCATE 2, 65: PRINT "Date "; DATE$

cnt = cnt + 1
NEXT i
NEXT j
cnt = 1
GOTO MLoop

'This routine copies the background screen to the foreground
PBCopy:
FOR n = 0 TO 349
SCREEN 9, , 1, 0
GET (0, n)-(639, n), Arry1
SCREEN 9, , 0, 0
PUT (0, n), Arry1,pset
NEXT n
VIEW (40, 30)-(600, 180)
WINDOW (1, 1)-(630, 100)
RETURN


```
{% endraw %}

## INPUSING.BAS

{% raw %}
```bas
cls
mask$ ="Phone (###) ###-####"
color 0,7
ans$ = "3035551212"    ' <--- data does not need to be pre-formatted
retcode% = 0           ' <--- complete entry NOT required
CALL MaskInput$(12,20,mask$,ans$,retcode%)
locate 21,20 : color 7,0
? ans$
ans$="123-45-67"       ' <--- try incomplete/required field
locate 13,20:? "SocSec No: ";   ' rtecode% NOT changed from prev. call
CALL MaskInput$(13, pos(0), "###-##-####",ans$,retcode%)
locate 22,20:? ans$
ans$=left$(date$,2) + mid$(date$,4,2) +mid$(date$,9,2)
locate 14,20 : ?"Date: ";:lastkey% = 1
CALL MaskInput$(14,pos(x),"##-##-##",ans$,retcode%)
locate 23,20 : color 7,0
? ans$;
print lastkey%
end

SUB MaskInput(row%, col%, mask$,ans$,mustfill%)
  '┌──────────────────────────────────────────────────────────────┐
  '│ Mask numeric input only ! - good for Social Security #'s,    │
  '│ dates, telephone numbers, etc. You can use a prompt as       │
  '│ part of the mask, but the prompt will be returned as part    │
  '│ of the data.  On exit mustfill% will contain exitkey% to     │
  '│ allow test for terminating key. A negative value indicates   │
  '│ an extended keycode/function key. To defeat mustfill% code,  │
  '│ the user can/must SPACE thru entire entry.                   │
  '└──────────────────────────────────────────────────────────────┘
  LOCAL x%, y%
  %right = 1:%left = -1
   'col% = pos(x)
   anslen% = LEN(mask$)
   old$ = ans$ : fillchar% = ASC("▒") ' <--- use your own preference
   CALL DispMask(row%, col%, mask$, ans$, fillchar%)
   CALL fbmove(mask$, x%, anslen%, %right)
   DO
	 LOCATE row% ,col% + x%-1,1
	 WHILE NOT instat:WEND
	 w$ = inkey$
	 IF LEN(w$) = 2 THEN
	  w% = ASC(RIGHT$(w$,1))
	  SELECT CASE w%
		CASE 75 : CALL fbmove(mask$, x%, anslen%, %left)
		CASE 77 : CALL fbmove(mask$, x%, anslen%, %right)
		CASE 71 : CALL fbmove(mask$, x%, anslen%, 0)
		CASE 79 : CALL fbmove(mask$, x%, anslen%, anslen%)
		CASE 83   'Del
			MID$(ans$, x%, 1) = chr$(fillchar%)
			? CHR$(fillchar%);
		CASE ELSE
			exitkey% = -w%
	  END SELECT
	 ELSE
	  SELECT CASE w$
		CASE chr$(8)
			IF x% >1 THEN
				w$ = CHR$(fillchar%)
				CALL fbmove(mask$, x%, anslen%, %left)
				LOCATE ,col% + x%-1,1
				MID$(ans$, x%, 1) = w$:? w$;
			ELSE
				BEEP
			END IF
		CASE chr$(13) : exitkey% = 13
		CASE CHR$(27)  'Escape
			ans$ = old$ : exitkey% = 27
		CASE "0" to "9", " "
			MID$(ans$, x%, 1) = w$:?w$;
			CALL fbmove (mask$, x%, anslen%, %right)
		CASE ELSE : BEEP
		END SELECT
	  END IF
	  IF exitkey% AND mustfill% THEN
		IF INSTR(ans$, CHR$(fillchar%)) THEN
			BEEP:exitkey% = 0:row% = CSRLIN
			LOCATE 24,1:? "Incomplete entry ! ";
			LOCATE row%
		END IF
	  END IF
   LOOP until exitkey%
   mustfill% = exitkey%
   REPLACE CHR$(fillchar%) WITH " " IN ans$
END SUB

SUB DispMask(r%, c%, mask$, ans$, fillchar%)
   LOCAL x%, y%, z%, MaskValue$, ans2$
   MaskValue$ = "#"
   ans2$ = space$(LEN(mask$))
   IF LEN(ans$) = LEN(mask$) THEN z%=1
   FOR x% = 1 TO LEN(mask$)
	   IF z% OR instr(MaskValue$, MID$(mask$, x%, 1)) THEN
		DO
		 incr y% : IF y% > LEN(ans$) THEN ch$="":EXIT LOOP
		 ch$ = MID$(ans$, y%, 1)
		LOOP WHILE instr("0123456789", ch$)=0
	   ELSE
		 ch$ = MID$(mask$, x%,1)
	   END IF
	  IF ch$=""  THEN ch$ = CHR$(fillchar%) '"▒"
	  MID$(ans2$, x%, 1) = ch$
   NEXT
   LOCATE r%,c%
   ans$ = ans2$
   ? ans$;
END SUB

SUB fbmove(mask$, x%, anslen%, move%)
  IF move% = 0 THEN x%=0:move% = 1
  IF move% >=anslen% THEN x% = anslen%
  IF move% < 0 and instr(LEFT$(mask$, x%-1),"#")=0 THEN EXIT SUB
  DO
	x% = x% + move%
	x% = max%(x%,0)
	x% = min(x%,anslen%)
	IF x% = 0 OR x% = anslen% THEN EXIT LOOP
	IF instr("#", MID$(mask$, x% ,1)) THEN EXIT LOOP
  LOOP
END SUB
```
{% endraw %}

## NATINST.BAS

{% raw %}
```bas
'Program Name    : NatInst.bas - graphics screen simulation
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 11-12-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Concept Date    :
'Example Screens : Windows feel screens can be achieved through simple
'                : programming.  Advanced examples - few comments.

screen 9,,0,0
line(0,0)-(639,349),15,bf

color 1,63
locate 1,5:print"File";
locate 1,12:print"Edit";
locate 1,19:print"Operate";
locate 1,29:print"Controls";
locate 1,40:print"Functions";
locate 1,52:print"Windows";
locate 1,62:print"PowerTools";

for i=0 to 17 step 2:line(0,13+i)-(639,13+i),8:next i
locate 2,35:print" Power Panel ";



line(5,50)-(625,348),4,bf

line(10,55)-(210,150),7,bf:line(215,55)-(415,150),3,bf:line(420,55)-(620,150),7,bf
line(10,153)-(210,248),3,bf:line(215,153)-(415,248),7,bf:line(420,153)-(620,248),3,bf
line(10,251)-(210,346),7,bf :line(215,251)-(415,346),3,bf:line(420,251)-(620,346),7,bf
locate 5,8:print " Oscilloscope ";
locate 5,36:print " Graph ";
locate 5,61:print" Filter ";
locate 12,10:print " Spectrum ";
locate 12,36:print " Chart ";
locate 12,61:print" History ";
locate 19,6:print " Magnetic Anaylzer ";
locate 19,33:print " User Defined ";
locate 19,59:print " User Defined ";

'Bottom Right corner of screen
line(460,267)-(600,335),1,bf
locate 20,54:print "5.00";
locate 22,54:print "2.50";
locate 24,54:print "0.00";

'Vert Line Right Hand of Screen
line(628,50)-(637,348),9,bf


'Das Affel
n=4
line (13,2)-(15,0),2:line (14,2)-(16,0),2
line (11-n,3)-(14+n,3),2
line(10-n,4)-(15+n,4),2
line (9-n,5)-(16+n,5),2
line(9-n,6)-(16+n,6),14
line(10-n,7)-(15+n,7),14
line(11-n,8)-(14+n,8),12
line(11-n,9)-(14+n,9),12
line (12-n,10)- (11,10),1:line(14,10)-(14+n-1,10),1


idle:
k$=inkey$:if k$=chr$(27) then system
goto idle
```
{% endraw %}

## BOOT.DOC

{% raw %}
```





BOOT.COM, Version 1.31 Copyright (c) 1990 mcTRONic Systems - Houston, TX

BOOT SUPPORT FILES:                               Date: August 31, 1990

Name           Description

BOOT.COM       Main Program, Selectable computer restart
BOOT.DOC       Main Program Document file
COLDBOOT.BAT   Use to replace COLDBOOT.COM when required
WARMBOOT.BAT   Use to replace WARMBOOT.COM when required
REBOOT.BAT     Use to replace REBOOT.COM when required

Syntax: BOOT [x] [B] [>nul]

"x" can be a "C" for System Coldboot, "W" for System Warmboot, or "M" for
menu.  If no command line parameter is entered then BOOT will display a
help screen.  If you enter a "B" then you will force BOOT to jump to the
power on reset location, instead of using the keyboard reset location.  If
you enter a "C" or "W" and do not wish to see any display from BOOT then
enter the ">NUL" and BOOT will display nothing to the screen.

BOOT has several advantages over other computer reboot type programs.
First in combines both COLD and WARM boot options into one program.  It
provides a menu option that can be aborted.  Being a single file, it
is smaller than most disk cluster sizes, and thus will take up less room
(than two separate files, discounting the support files).  And last but
most likely the most important, BOOT uses the keyboard controller chip
to reboot the computer if BOOT determines you do not have a PC or PC/XT
computer.  For compatability, BOOT will work on PC/XT computers, however
BOOT must jump to the power on reset location to reboot your computer.

With the advent of many memory manager type programs such as Quarterdecks
QEMM, Qualitas's 386MAX and Microsoft's Windows 3.0, some of the computer
reboot programs, when used on a system with a memory manager or EMS
emulator, will just lock up the computer.  BOOT uses a new trick to make
the computer think that a CTRL-ALT-DEL was pressed by the user (on AT
computers).  Since any self respecting memory manger will honor a keyboard
CTRL-ALT-DEL request over a unnatural jump to the BIOS power on reset
location, BOOT should work on almost all "AT" clones and PS/2 computers.

For those who might wonder what a Cold or Warm Boot mean, the term BOOT
or REBOOT means to restart your computer, either the very first time, or
one more time, since your computer was turned.  Your computer, when it is
rebooted, will reload DOS and so forth.  Each time you first turn on your
computer, your computer also goes through a Power On Self Test mode (POST),
which checks out your computer's hardware, including your computer memory.
A program that can COLDBOOT your computer will make it run through the
POST mode just like you first turned it on and it will take longer to
COLDBOOT than to WARMBOOT.  A WARMBOOT works more like a keyboard CTRL-ALT-
DEL.  Normally using the WARMBOOT option of BOOT will be just fine and take
less time, however, if your computer does not restart properly, then use
the COLDBOOT option of BOOT.






Houston Phone Number: 713-462-7687, 5-10pm, M-F, CST
Compuserve Number is: 74365,1716; James D. McDaniel
Houston Address: 7426 Cornwall Bridge; Houston, TX  77041-1709

BOOT is Freeware Software program and can be distribute free of charge.
No cost can be charged for BOOT except to cover the expense of
distribution.  Donations of $5 will be accepted.  BOOT is included with
the OPSYS program package for now.  A separate charge for BOOT may be
charged in the future....


```
{% endraw %}

## OPSYS.DOC

{% raw %}
```




          Product: OPSYS                   mcTRONic Systems
             Date: September 11, 1990      7426 Cornwall Bridge Ln.
         Document: Product Information     Houston, TX  77041-1709
          Version: OPSYS.EXE R1.03         (713) 462-7687 5-10pm M-F CST
                   BOOT.COM R1.31          CIS # : 74365,1716

        OPSYS will maintain up to 12 different operating system  configu-
        rations, each with its own separate AUTOEXEC and CONFIG files and
        an optional user defined batch file to be run at boot time.  Each
        configuration  is given a unique three letter code which is  used
        as the file name extension of your configuration files. All files
        are  maintained together in the OPSYS directory.  OPSYS  provides
        the  ability  to create, maintain and  remove  the  configuration
        descriptions  and support files.  OPSYS will use your ASCII  file
        editor  to edit your AUTOEXEC, CONFIG and USER files while  main-
        taining the file names, locations, and usage.

        The  advantages of OPSYS over other such programs is its  ability
        to make the operating system configuration selections before  you
        boot  your  computer.  Each time thereafter, when the  system  is
        booting,  your selection will be used without  further  interven-
        tion.  When you are ready to change selections again, start OPSYS
        and  make your new selection.  OPSYS does not get in the  way  of
        using your selected configurations, no matter how many times your
        may  restart your computer.  Another advantage for OPSYS  is  the
        fact  that  the copy of your AUTOEXEC.BAT  and  CONFIG.SYS  files
        located in your root directory of your boot drive are only tempo-
        rary.   Your  primary copy is maintained by OPSYS  in  the  OPSYS
        directory.  You can now elect to have new programs, which you are
        installing,  modify  your configuration files without  fear  that
        your  main  copy will be modified.  In addition, if you  want  to
        maintain the changes made, you can have OPSYS get them for you as
        yet another configuration.  And finally, if you are not using any
        other  multi-configuration program, OPSYS is much easier  to  use
        that any manual method that you might try to use.

        The OPSYS files are:

        OPSYS.EXE      -    The OPSYS Main program (*)
        OPSYS.DOC      -    The OPSYS Document file
        OPSYS.CFG      -    Maintains OPSYS setup, Created when first run
        OPSYS.FIL      -    Configuration Names, Created when first run
        INSTALL.BAT    -    OPSYS Hard Disk Install Program
        BH.COM         -    BATHELP Install program file
        DOCUTIL.BAT    -    Utility to print and display document files
        ORDER.DOC      -    OPSYS program order form
        PROBLEM.DOC    -    OPSYS problem report form

        The BOOT files are:

        BOOT.COM       -    Batch file computer boot utility (*)
        BOOT.DOC       -    The BOOT Document file
        COLDBOOT.BAT   -    Use to replace COM file of same name
        WARMBOOT.BAT   -    Use to replace COM file of same name
        RESTART.BAT    -    Use to replace COM file of same name


                                        1




        OPSYS INSTALLATION:

        OPSYS  includes  a hard disk installation program.   To  use  the
        install program, place all OPSYS files in your default directory.
        If on a floppy disk, place them in either the A: or B: drive  and
        then  make it your default drive.  OPSYS will also  install  from
        one hard disk directory to another directory.  Make sure OPSYS is
        in  the  default directory and elect to install it  in  either  a
        different  directory or a different disk from the default.   Then
        enter:

        INSTALL d:[\path]

        Where d: is the hard disk you want OPSYS installed on.  The  path
        is optional.  If you give no path, OPSYS will create a  directory
        called  \OPSYS  on the target drive.  If you do give a  path,  it
        must  already exist.  OPSYS will create a directory in  the  path
        you  entered.  For instance, INSTALL C: will create and copy  all
        OPSYS  files to the C:\OPSYS directory.  If you  entered  INSTALL
        C:\UTIL   then  OPSYS  would  be  installed  in   the   directory
        C:\UTIL\OPSYS.   If you enter just INSTALL you will  prompted  to
        select  a hard drive between C-G with the directory default  name
        of  \OPSYS.   After installation, the INSTALL  program  will  run
        OPSYS.  When you exit OPSYS, you will be asked if you want to run
        DOCUTIL  so you can either print or reread the documentation  for
        all  document  files.

        At any time you can elect to run DOCUTIL.  DOCUTIL will allow you
        to  either  print  or display OPSYS.DOC, BOOT.DOC  or  any  other
        included DOC file.  Both DOCUTIL and INSTALL use the file  BH.COM
        to  run, and neither will run if this program is not in  the  de-
        fault drive or in your path.  If DOCUTIL is run prior to  instal-
        lation  of  OPSYS, you will have a menu option  to  run  install.
        After installation this option will not be present.

        The  two  files (*) OPSYS.EXE and BOOT.COM are  required  to  use
        OPSYS.  If you do not have BOOT.COM, but do have another computer
        reboot  program,  rename  it to BOOT and place it  in  the  OPSYS
        directory.  Put both files together in a directory by  themselves
        and then run OPSYS.  See starting OPSYS the first time.

        STARTING OPSYS the first time:

        The first time OPSYS is run several questions will be asked.  You
        should be prepared to enter your name, which is required, and  an
        optional  company name.  You can edit your name or  company  name
        later.  You must select your boot drive, normally C:, whether you
        want color or not, the OPSYS directory name (use the default  the
        first  time  run), the name of your ASCII editor  (EDLIN  is  the
        default), the editor path and editor options, if any, and finally
        whether  you want to execute a warm or cold boot each  time  your
        computer is restarted.

        After you finish answering the OPSYS setup questions, OPSYS  goes
        into action.  OPSYS will create two configurations for you.   The


                                        2




        first is called MIN for minimum DOS configuration.  The second is
        your present AUTOEXEC and CONFIG located in the root directory of
        your  selected  boot drive.  Your present configuration  will  be
        copied  to the OPSYS directory and renamed AUTOEXEC.ORG and  CON-
        FIG.ORG.  You can elect to rename and describe them later.   Your
        original  files will be untouched until you elect to use  one  of
        the  OPSYS configurations.  After it is done OPSYS will send  you
        to the main menu.

        HOW DOES OPSYS WORK:

        OPSYS  maintains a separate CONFIG and AUTOEXEC file for each  of
        your  configurations.   The  file extension is the  same  as  the
        unique 3-letter code given to each configuration.  In addition  a
        TAG  batch file, if requested, will be run just before boot  time
        should  you  have other duties you must perform  before  the  new
        configuration  can take effect.  OPSYS literally copies  and  re-
        names your CONFIG and AUTOEXEC file to the root directory of your
        boot drive then runs the boot program, with either a warm or cold
        boot as you requested.

        STARTING OPSYS after installation.

        When OPSYS is started it must locate the OPSYS.CFG file which was
        created  the first time OPSYS was run.  OPSYS does recognize  the
        DOS  environment  variable  OPSYSCONFIG.   If  you  use  the  SET
        OPSYSCONFIG=d:\path  where d:\path is set to the location of  the
        OPSYS.CFG  file,  OPSYS will look there and  load  the  OPSYS.CFG
        file.   If  OPSYSCONFIG  is not set, then OPSYS  will  check  the
        default directory for OPSYS.CFG.  If it is not there, OPSYS  will
        determine  from  where it is being run and  check  for  OPSYS.CFG
        there.  If the OPSYSCONFIG variable is set, but OPSYS.CFG is  not
        present,  then  OPSYS.CFG will be created where  the  OPSYSCONFIG
        says  it should be.  If OPSYSCONFIG is not set and  OPSYS.CFG  is
        neither  in the default drive or in the directory with  OPSYS.EXE
        is, it will be created in the default directory.

        I  suggest that you do set the OPSYSCONFIG variable to the  OPSYS
        directory. In addition , either place the OPSYS directory in your
        path,  put  OPSYS.EXE in a directory that is in  your  path  (but
        separate from the OPSYS file directory) or create a batch file in
        a directory that is located in your path (to call OPSYS.EXE  when
        not  in  path).   Then you can run OPSYS from  anywhere  in  your
        system.

        OPSYS allows 1 command line parameter.  If you enter OPSYS  [???]
        where ??? represents the three letter code for a valid configura-
        tion,  OPSYS will restart your computer with that  configuration.
        If the entry is invalid, OPSYS will send you to the main menu.

        If  you start OPSYS with no command line options, you will go  to
        the main menu.  From the main menu you will see a complete memory
        rundown of your system, up to 12 configuration selections, and  8
        function  key selections.  You may use the up or down arrow  keys
        to highlight your configuration selection and then press enter or


                                        3




        just  enter the letter or number that is next to each  configura-
        tion.   After you select the required configuration, you will  be
        given the option to reboot or escape from the function.

        Function key F1 gives a very short program description for OPSYS.
        Press any key to return to the main menu.

        F2 allows you to create a new configuration.  You must give it  a
        unique 3-character code and up to a 43 character description.  Do
        not  enter a ?,*,\, or any invalid DOS file name  character  into
        the unique three-character code.  After the code and  description
        is entered, you will be asked if you want a TAG batch file creat-
        ed (Yes/No).  After the above information is entered you will  be
        asked  if you want to copy the files from another  configuration,
        or use the one in the root directory of your boot drive.  Enter X
        if  you do not want to create the files automatically.  When  you
        are done, OPSYS will carry out your instructions.

        F3 allows you to delete a configuration.  You may also optionally
        delete all files associated with this configuration.

        F4 allows you to edit a configuration.  If you change the  unique
        3-character code the files will also be renamed.

        F5 allows you to edit any of the files associated with a configu-
        ration.   After you select the configuration, you must select  to
        edit  either  the AUTOEXEC, CONFIG, or optional  USER  TAG  batch
        file,  if  present.  You will use the editor which  you  selected
        from  the  OPSYS setup menu.  You can change  your  selection  if
        needed.

        F6 allows you to change any part of you setup.  The user name  is
        required while the company name is not.  The OPSYS directory  you
        enter  must  already exist.  The ASCII editor you enter  must  be
        present  as  you enter it or you will not be able  to  edit  your
        files.   The  default editor is EDLIN.COM.  To use  Wordstar  you
        could  enter: WS.EXE for name, C:\WS6 for path and /N/X  for  op-
        tions.  Many other editors such as TED or ED could be used.   The
        EDLIN commands are:

        -------------------------EDLIN COMMANDS-------------------------
        F1  =  Copies one character from the template to the new line.
        F2  =  Copies  all characters from the template to the new  line,
        up to the character specified.
        F3  =  Copies  all remaining characters in the  template  to  the
        screen.
        DEL =  Does not copy (skips over) a character.
        F4  =  Does not copy (skips over) the specified characters in the
        template, up to the character specified.
        ESC = Clears the current input and leaves the template unchanged.
        INS = Enter/exists the insert mode.
        F5  = Makes the new line the new template.
        BKSP=  Deletes a character from the command line and  places  the
        cursor back one character in the template



                                        4




        A   =  Appends lines from disk to memory.
        C   =  Copies lines.
        D   =  Deletes lines.
        line=  Edits  a line or lines, 1-65534, . equals current lint,  #
        replaces line after the line you specify
        E   =  Ends editing session and saves edits.
        I   =  Inserts lines of text.
        L   =  Lists a range of lines.
        M   =  Moves a range of text to a specified line.
        P   =  Pages through a file 23 lines at a time.
        Q   =  Quits the editing session without saving the file.
        R   =  Replaces text.
        S   =  Searches for text.
        T   =  Transfers the contents of another file into the file being
        edited.
        W   =  Writes specified lines from memory to disk.
        -----------------------------------------------------------------

        EDLIN is not supplied with OPSYS but is included with every  copy
        of  DOS  that I have seen.  Use EDLIN only if you have  no  other
        ASCII file editor on your computer.

        F9  allows you to shell to DOS to perform any duties not  covered
        by OPSYS.  You do not need to change back to the OPSYS  directory
        or drive as OPSYS will handle this for you.  The DOS prompt  will
        include a double >> when shelled to DOS.  Please remember to type
        EXIT when done.

        F10 or ESC will return you to DOS.  OPSYS will always return  you
        to  the  directory you started from if different from  the  OPSYS
        directory.   In addition, if the default directory of  the  drive
        that contains the OPSYS directory, if other than the OPSYS direc-
        tory, it will be returned to normal when you exit from OPSYS.  If
        you  change  the default path, while shelled from OPSYS,  of  any
        other drive, it will not be returned to the original, pre-startup
        location.

        In addition to using the function keys, each function label has a
        highlighted letter.    This letter may be entered in place of the
        function  key with the same results as pressing the function key.
        "H" is F1, "N" is F2, "D" is F3, "E" is F4, "F" is F5, "O" is F6,
        "S" is F9, and "X" is F10.

        The  OPSYS  and BOOT package is a Shareware product  of  mcTRONic
        Systems.   It cost just $19.95 + $3.00 shipping sent first  class
        mail  to you.  Order your copy today! (P.S.  Orders  outside  the
        USA  must pay by money order and include an additional  $5.00  to
        cover increased handling, in USA funds only, Please!, Thank You)









                                        5



```
{% endraw %}

## ORDER.DOC

{% raw %}
```


                                Shareware



      OPSYS       is a Shareware program.  As a Shareware program you

      are allowed to copy   OPSYS     and pass out UNALTERED copies to

      your friends.  You can try out   OPSYS     on any of your machines

      free of charge.  If, however you find    OPSYS    works, and you

      decide to continue using    OPSYS   , no matter how infrequent, you

      ARE required to register your copy.  The cost of    OPSYS    is

      only $19.95 plus $3.00 shipping (outside the U.S. shipping is $8.00,

      U.S. funds only).  Please include your disk type (3.5" or 5.25" disk).

      I will send you the latest version of    OPSYS    First Class Mail.




      If you wish to register a copy of   OPSYS     you already have, you

      can forgo the shipping and handling charge if you like.  Keep in

      mind you may not have the latest version of the program and you will

      not have your own    OPSYS    disk.  Also each copy of   OPSYS    

      purchased from me will include a Shareware (unregistered copy) copy

      of MAILALL, my great mail list program.




      Please fill out the following form and send it iN today with your

      payment for OPSYS TODAY!
 

 


        OPSYS Version : ________      Serial Number : _____________


        TO:

           mcTRONic Systems
           James D. McDaniel
           7426 Cornwall Bridge Ln.
           Houston, TX  77041-1709


        Gentlemen:

        Enclosed is my check or money order for $19.95 + shipping
        (single user) or $89.95 + shipping (commercial site license,
        including a network or any multi-user system,  standard 
        version) as a registration fee for OPSYS.        I've also
        included $3.00 (all U.S. States) or $8.00 (any area outside
        the U.S.) for shipping and handling.  Make checks payable
        to: "James D. McDaniel" or "MCTRONIC SYSTEMS".  
        (U.S. Funds only, please! Money orders only outside the U.S)

        Please send my copy of OPSYS to:


        Name_______________________________________________________

        Company Name_______________________________________________

        Street Address_____________________________________________

        City,State,Zip_____________________________________________


        Where did you obtain this copy of OPSYS ? _________________

        ___________________________________________________________


        If you require 3.5 inch 720K disk check here [ ]


        Please allow two to three weeks for delivery.    Thank You!


        Please share with us any additional comments that you have
        concerning OPSYS.      


        COMMENTS:

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________
 
```
{% endraw %}

## PROBLEM.DOC

{% raw %}
```


        
                             OPSYS Problem Report

        
        
        FROM:__________________________________________   DATE:__________
        
        COMPANY:_______________________________________
        
        ADDRESS:_______________________________________
        
        CITY,STATE,ZIP:________________________________
        
        
        HARDWARE:
        
        
        OPSYS VERSION:___________            OPSYS SERIAL #:_____________
        
        COMPUTER TYPE(IBM/PC/XT/AT OR COMPATIBLE:________________________
        
        COMPUTER BRAND(IBM,COMPAQ,AST,EVEREX,ECT):_______________________
        
        COMPUTER MODEL NUMBER:___________________________________________
        
        FLOPPY DRIVE SIZE(S)  A:_______  B:_______ (360K,1.2M,720K,1.44M)
        
        DRIVE SIZE FOR HARD DISKS    C:_______    D:______ (20M,30M,ECT.)
        
        DISPLAY ADAPTER CARD TYPE (MDA,CGA,EGA,VGA):_____________________
        
        DO YOU HAVE A COLOR MONITOR?  YES  NO | BRAND____________________
        
        TOTAL STANDARD RAM MEMORY INSTALLED:_____________________________
        
        TOTAL EXPANDED MEMORY INSTALLED:_________________________________
        
        IF "AT" COMPUTER WHAT IS THE TOTAL EXTENDED MEMORY:______________
        
        DO YOU HAVE A 8087 / 80287 / 80387 MATH CHIP INSTALLED:__________
        
        WHAT BRAND PRINTER DO YOU USE:_____________  MODEL:______________
        
        PLEASE  LIST ANY  OTHER HARDWARE  THAT MAY BE INSTALLED INSIDE OR
        
        OUT SIDE OF BUT ATTACHED TO YOUR COMPUTER:
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
 




        SOFTWARE:

        
        
        HOW MANY COM/LPT PORTS DO YOU HAVE:______________________________
        
        
        WHAT IS THE ADDRESS OF YOUR COM THREE:__________COM FOUR:________
        
        
        FROM WHICH DISK DRIVE DO YOU NORMALLY RUN OPSYS : ________________
        
        
        WHAT IS THE OPSYS SUB-DIRECTORY NAME THAT YOU NOW USE :
        
        __________________________________________________________________
        
        
        NORMAL DEFAULT DIRECTORY WHEN YOU RUN OPSYS : ____________________
        
        
        WHAT IS YOUR NORMAL DEFAULT MENU DIRECTORY: ______________________
        
        
        DOES THE OPSYS SUB-DIRECTORY APPEAR IN YOUR PATH ? :
        
        __________________________________________________________________
        
        
        PLEASE   DESCRIBE  THE  PROBLEM  THAT  YOU HAVE WITH OPSYS AND 
        PLEASE  BE  SPECIFIC!   INCLUDE  PRINT SCREENS THAT SHOW ANYTHING 
        THAT  MIGHT  BE  HELPFUL  AND  INCLUDE ANY ERROR REPORTS THAT YOU
        MIGHT  RECEIVE.  USE BACK OF FORM IF REQUIRED.
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
        
        _________________________________________________________________
 
```
{% endraw %}

## PSWD.DOC

{% raw %}
```
Pswdfile.bas simulates your proking program file.  It has a password
concealed in a string data statement.  Compile this program to an .exe
file and run it.  It will print out the password secret.

Pswdwrit.bas This program reads and searches the Pswdfile for the
password secret.  It then write in a new password called FOOEY.

When you run pswdfile.exe again it will now print fooey on the screen.

This is one way of compiling you program once and then writing a new
password to the exe file each time you sell a new copy.  By rewriting
this program you could make hundreds of copies of your program at a time.
Each copy could have a unique password.

Lloyd - Spectra Tech Support


```
{% endraw %}

## PSWDFILE.BAS

{% raw %}
```bas
'Program Name    : PswdFile.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 10-31-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Description     : This simulates you program that you compile, sell, & wish
'                : to password protect, with recompiling to install new password.


read a$
print a$

data "secret"
```
{% endraw %}

## PSWDWRIT.BAS

{% raw %}
```bas
'Program Name    : PswdWrit.bas
'Author          : Lloyd L. Smith for Spectra Technical Support
'Date            : 10-31-90
'Compuserve #    : GO PCVENB, Vendor #12/Spectra,  Tech Support ID 71530,2640
'Tech Support BBS: 813-625-1721, PC-Board, 8,N,1 USR HST 300 - 14.4, 24hrs
'Tech Support Fax: 813-625-1698  G2 & G3 compatible
'Tech Support Voc: 813-625-1172  Voice
'Description     : Program reads you exe file, locates password, write a new
'

open "pswdfile.exe" for binary as #1

cls
for i&=1 to 64220  'this number must be bigger than the length of your exe
k$=inkey$:if k$=chr$(27) then system
locate 1,1:print i&
seek 1,i&
get$ 1,6,a$
k&=i&
if a$="secret" then
print "We found it ":beep:print i&
seek 1,k&
put$ 1,"poop  "
end if
if eof(1) then exit for
next i&
close #1
print "Done!"
```
{% endraw %}

## VPDEMO1.BAS

{% raw %}
```bas
 $COMPILE EXE
 $lib All OFF
 $ERROR ALL OFF
 DEFINT a-z
 %False = 0
 %True = NOT %False
 PUBLIC Vpatr
 ' Demo
 ' This is a demo of ViewPrint for PowerBASIC
 ' See ViewPrnt.Doc for details
 ' Copr. Barry Erick 1989, 1990

 COLOR 0,7
 origColor = SetVpatr(7,1)
 CLS
 ' Now fill the screen
 FOR y = 1 TO 25
     LOCATE y,3
     FOR x = 1 TO 7
         PRINT "PowerBASIC ";
     NEXT
     IF y < 24 THEN PRINT

 NEXT
 ' use the same attribute that the screen uses, grey on blue
 Vpatr =  SETVPATR(7,0)
 ' now open a viewport. This also clears the window
 CALL ViewPrint(11,17)
 CALL ClsVpWind
 x = 1
 ' until a key is hit, print the line number within the view port
 DO UNTIL INSTAT
     IF x = 65 THEN
        flag = %false
     END IF
     IF x = 1 THEN
        flag = %True
     END IF
     IF Flag THEN
        INCR x
     ELSE
        DECR x
     END IF
     IF x = 0 THEN x = 1
     A$=SPACE$(79)
     MID$(a$,x)="Hit any key"+STR$(x)
     CALL Vprint(a$)
 LOOP

 'throw away the key that was hit
 Dummy$ = INKEY$

 'make a empty line for us to use
 CALL Vprintck

 'and indent to position 2 on that line
 CALL VpLocate(-1,2)
 num = 18754.34

 'and use a normal PB command or two
 PRINT "A formatted"," number is ";
 PRINT USING "#########.##";num

 'now get to the next line by checking if a scroll is needed
 CALL VprintCk

 'and indent to column 2 again
 CALL VpLocate (-1,2)

 ' and use a normal PB command again
 INPUT "What is your name";na$

 'and check the next line
 CALL Vprintck

 'and indent again (VPLoate is not needed if we don't indent)
 CALL VpLocate(-1,2)

 'Again, use a PB command
 PRINT "Hello ";na$;

 'and allow the screen to stay active awhile so we can see it if in the IDE
 DELAY 1.24

 CLS

 $LINK "Vp1.Pbu"
```
{% endraw %}

## WHACPU.BAS

{% raw %}
```bas
$IF 0
 This is a very short demo program that shows how to use
 the Object code program, "GETCPU.OBJ" to use its Function
 GETCOU.OBJ.

 Written using TASM 2.0 and PowerBASIC 2.10 , 9/1990 by
   Barry Erick. Object code modified by Barry Erick from code
   by  cliff Brown, Jeff Prosise, and Ethan Winer

 Note that this code works on 386 using QEMM-386 Memory manager
 from Quarterdeck Office Systems and other code, such as PC Magazines
 WhatCpu will not.

$ENDIF


$LINK "getcpu.obj"		'Link in the object code
DECLARE FUNCTION getcpu2%()	'Let the program know what's in there
PRINT "The cpu is a";getcpu2%	'And print it.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2633

     Volume in drive A has no label
     Directory of A:\

    VPRNT    ZIP     25367   9-18-90   8:46a
    WHACPU   ZIP       941   9-29-90   7:58a
    APLIB    ZIP     73728  12-04-90  10:20p
    BARCODE  BAS      6329  10-25-90   6:40p
    COMSET   ZIP      2926  10-19-90   1:32p
    CRSBAS   ZIP     76799  12-04-90   7:35p
    DIABLO   ZIP      6441  10-20-90  12:30p
    ERASCN   BAS      1079  10-26-90  11:13a
    FACTORY  BAS      3870  11-11-90  11:37p
    MASKIN   ZIP      1792  12-04-90   7:28p
    NATINST  BAS      2089  11-11-90  11:46p
    OPSYS1   ZIP     57670  12-04-90  10:11p
    PASSWORD ZIP      1833  10-31-90   8:53p
    PATCH4   ZIP     28588  10-15-90   8:18a
    PBERR    ZIP     37912   9-29-90   7:58a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    GO       BAT        28  11-13-90   9:23a
    GO       TXT       705   6-27-91   3:14p
           18 file(s)     350119 bytes
                            4096 bytes free
