---
layout: page
title: "PC-SIG Library Disk #2560"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2560/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2560"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## Q4T-DEMO.BAS

```bas
'----------------------------------------------------------------------------
'                         **    Q4T-DEMO.BAS    **
'      Demonstration of the capabilities of the Q4Tool Library routines
'     Written for and compiled with Microsoft (R), QuickBASIC  4.00b (C)
'                       By R. J. Crouch  -  June 1990
'                      Copyright  -  1990  -  CareWare
'                            All Rights Reserved
'----------------------------------------------------------------------------

' For Q4tool v.1.1

REM $INCLUDE: 'Q4T.BI'                            ' Contains declarations for
                                                  '  Ctr() and Delay()
DEFINT A-Z

TYPE RegType                                      ' Necessary for the CALL to
   ax    AS INTEGER                               '  the QB's Interrupt()
   bx    AS INTEGER                               '  routine
   cx    AS INTEGER                               '
   dx    AS INTEGER                               ' Generally placed in the
   bp    AS INTEGER                               '  "$INCLUDE:" file
   si    AS INTEGER                               '
   di    AS INTEGER                               '
   flags AS INTEGER                               '
END TYPE                                          '
                                                  
DIM InReg AS RegType, OutReg AS RegType               ' Typed for Interrupt()

DIM ScrnBuf(8) AS STRING * 4000                          ' Room for 9 screens
                                                         '  w/ option base 0
FALSE = 0: TRUE = NOT FALSE                                           ' Flags
CONST CONT = "Press any key to continue"                            ' Prompts
CONST MCONT = "Left mouse button to continue"                       '

b1$ = CHR$(221) + " ": b2$ = " " + CHR$(222)                       ' Brackets
cpyr$ = b1$ + "Copyright - 1990 - CareWare" + b2$
mpos1$ = b1$ + "Row ## - Col ##" + b2$                         ' Formats for
mpos2$ = b1$ + "Y ###  -  X ###" + b2$                         '  PRINT USING
buttons = 0

'ON KEY(10) GOSUB Terminate                                 ' For programming
'KEY(10) ON                                                 '  purposes only

'----------------------------------------------------------------------------
'Title Screen
'----------------------------------------------------------------------------

   COLOR 0, 1, 0: CLS
   CALL DoWindow(2, 6, 23, 69, 14, 6, 5, 0, "Q4Tool Demo", 2)
   CALL PrtScrn(cpyr$, 24, 25, 110)
   CALL DoWindow(5, 13, 16, 55, 15, 0, 5, 3, CONT, 3)
   FOR row = 7 TO 16
      READ line$: lctr = Ctr(line$)
      IF row < 10 THEN att = 12 ELSE att = 14
      CALL PrtScrn(line$, row, lctr, att)
   NEXT row
   READ line$
   CALL PrtScrn(line$, row + 1, lctr, 10)
   CALL PutScrn(ScrnBuf(0))
   CALL Delay(0, 0)
   CALL MouseStatus(have)                         ' Check for mouse interrupt
   IF have THEN                                            ' Ask to use mouse
      CALL DoWindow(7, 16, 12, 49, 12, 0, 1, 0, "", 0)
      CALL PrtScrn(STRING$(29, 220), 20, 26, 15)
      CALL MouseVersion(ver$)
      FOR row = 9 TO 14
         READ line$: lcrt = Ctr(line$)
         CALL PrtScrn(line$, row, lctr, 14)
         IF row = 10 THEN CALL PrtScrn(ver$, row, lctr + 26, 10)
      NEXT row
      finish! = TIMER + 30
      DO
         i$ = UCASE$(INKEY$)                                   ' Wait for key
         now! = TIMER                                          '  or 30 sec.
      LOOP UNTIL i$ = "N" OR i$ = "Y" OR now! > finish!
      IF i$ = "Y" THEN                              ' Initialize mouse driver
         prompt$ = MCONT: pctr = Ctr(MCONT)                ' Use mouse prompt
         CALL MouseReset(buttons)                       ' Return # of buttons
         mouse = TRUE
      ELSE                                                 ' Mouse not wanted
         prompt$ = CONT: pctr = Ctr(CONT)                    ' Use key prompt
         mouse = FALSE
      END IF
      CALL PrtScrn(prompt$, 16, pctr, 10)
      CALL Delay(30, 0)
   ELSE                                                   ' No mouse detected
      FOR x = 1 TO 6: READ nul$: NEXT x                ' Skip mouse text data
   END IF
   CALL GetScrn(ScrnBuf(0))                         ' Retrieve opening screen
   IF mouse THEN CALL PrtScrn(b1$ + prompt$ + b2$, 20, pctr - 2, 15)
   CALL Delay(60, 0)
   CLS
   CALL DoWindow(8, 14, 9, 53, 13, 0, 5, 3, prompt$, 3)
   FOR row = 11 TO 13
      READ line$: lctr = Ctr(line$)
      CALL PrtScrn(line$, row, lctr, 15)
   NEXT row
   CALL Delay(60, 0)

'----------------------------------------------------------------------------
'Frame types and screen save/restore
'----------------------------------------------------------------------------

   COLOR 0, 0, 0: CLS
   col = 0: frm = -1: scrn = -1
   bgd = 0: fgd = 15
   FOR row = 2 TO 14 STEP 3
      col = col + 6: bgd = bgd + 1
      frm = frm + 1: fgd = fgd - 1
      CALL DoWindow(row, col, 10, 20, fgd, bgd, frm, 0, "Window", 2)
      scrn = scrn + 1
      CALL PutScrn(ScrnBuf(scrn))                   ' Screen save w/PutScrn()
   NEXT row
   FOR row = 11 TO 2 STEP -3
      col = col + 6: bgd = bgd + 1
      frm = frm + 1: fgd = fgd - 1
      IF frm = 6 THEN frm = 1
      IF fgd = 9 THEN fgd = 14
      CALL DoWindow(row, col, 10, 20, fgd, bgd, frm, 0, "Q4Tool", 3)
      IF scrn < 8 THEN                             ' Save all but last screen
         scrn = scrn + 1
         CALL PutScrn(ScrnBuf(scrn))             ' Save screens for later use
      END IF
   NEXT row
   FOR row = 3 TO 9
      READ line$
      CALL PrtScrn(line$, row, col + 2, 31)
   NEXT row
   CALL PrtScrn(prompt$, 25, pctr, 10)
   CALL Delay(60, 0)
   CALL DoWindow(9, 12, 7, 56, 15, 0, 5, 0, "", 3)
   FOR row = 11 TO 13
      READ line$: lctr = Ctr(line$)
      CALL PrtScrn(line$, row, lctr, 10)
   NEXT row
   CALL Delay(60, 0)
   FOR show = 7 TO 0 STEP -1
      CALL GetScrn(ScrnBuf(show))                    ' Retrieve saved screens
   NEXT show
   FOR row = 5 TO 7
      CALL PrtScrn("*  Fast  *", row, 11, 16)
   NEXT row
   CALL Delay(2, 0)
   CALL DoWindow(10, 12, 7, 56, 15, 0, 5, 0, prompt$, 3)
   FOR row = 12 TO 13
      READ line$: lctr = Ctr(line$)
      CALL PrtScrn(line$, row, lctr, 10)
   NEXT row
   CALL Delay(60, 0)
   FOR show = 1 TO 8
      CALL GetScrn(ScrnBuf(show))                ' Screen restore w/GetScrn()
      CALL Delay(.33, 0)                         '  .33 second delay added
   NEXT show
   CALL PrtScrn("Now a three", 5, 58, 31)
   CALL PrtScrn("second delay", 7, 58, 31)
   CALL Delay(3, 0)
   FOR show = 8 TO 0 STEP -1
      CALL GetScrn(ScrnBuf(show))
      CALL Delay(.33, 0)
   NEXT show
   CALL DoWindow(2, 6, 10, 20, 4, 7, 5, 0, "Q4Tool", 2)
   CALL PrtScrn("*  Next  *", 5, 11, 112)
   CALL PrtScrn("Shadow Styles", 7, 10, 112)
   CALL PrtScrn(prompt$, 25, pctr, 10)
   CALL Delay(60, 0)

'----------------------------------------------------------------------------
'Shadowing
'----------------------------------------------------------------------------

   CLS
   CALL DoWindow(1, 1, 25, 80, 9, 3, 5, 0, prompt$, 3)
   CALL DoWindow(2, 21, 3, 38, 0, 7, 1, 0, "", 0)
   CALL DoWindow(6, 41, 18, 35, 1, 1, 0, 0, "", 0)
   READ line$: lctr = Ctr(line$)
   CALL PrtScrn(line$, 3, lctr, 117)
   FOR row = 7 TO 16 STEP 9
      FOR col = 8 TO 43 STEP 35
         shadow = shadow + 1: back = back + 1
         CALL DoWindow(row, col, 7, 30, 14, back, back, shadow, "", 0)
         FOR x = row + 2 TO row + 4
            READ line$
            CALL PrtScrn(line$, x, col + 5, back * 16)
         NEXT x
      NEXT col
      back = back + 1
   NEXT row
   CALL PutScrn(ScrnBuf(0))
   CALL Delay(60, 0)
   CALL DoWindow(8, 9, 10, 62, 14, 0, 5, 0, prompt$, 3)
   FOR row = 10 TO 14
      READ line$: lctr = Ctr(line$)
      IF row < 12 THEN att = 15 ELSE att = 10
      CALL PrtScrn(line$, row, lctr, att)
   NEXT row
   CALL Delay(60, 0)
   CALL GetScrn(ScrnBuf(0))
   CALL DoWindow(11, 12, 6, 57, 11, 0, 5, 0, prompt$, 3)
   FOR row = 13 TO 14
      READ line$
      CALL PrtScrn(line$, row, 18, 15)
   NEXT row
   CALL Delay(60, 0)

'----------------------------------------------------------------------------
'MenuDemo
'----------------------------------------------------------------------------

   CALL ShowMenu                         ' Separate module linked to Q4T-DEMO
   COLOR 1, 1, 0: CLS
   CALL DoWindow(9, 12, 7, 57, 13, 0, 5, 3, prompt$, 3)
   FOR row = 11 TO 12
      READ line$
      CALL PrtScrn(line$, row, 18, 15)         ' The source code SHOWMENU.BAS
   NEXT row                                    '  is provided with your
   CALL Delay(60, 0)                           '  registration of Q4Tool
   
'----------------------------------------------------------------------------
'Mouse Services
'----------------------------------------------------------------------------

   mver$ = b1$ + "Mouse Driver ver. " + ver$ + "  -  "
   mstat$ = mver$ + "With" + STR$(buttons) + " buttons installed" + b2$
   sctr = Ctr(mstat$)

   CLS
   CALL DoWindow(1, 1, 25, 80, 14, 1, 5, 0, "Q4Tool", 2)
   CALL DoWindow(2, 31, 3, 20, 15, 1, 1, 0, "", 0)
   CALL PrtScrn("Mouse Services", 3, 34, 31)
   CALL DoWindow(5, 5, 10, 35, 12, 0, 5, 0, "Mouse State #1", 2)
   CALL DoWindow(7, 14, 3, 18, 12, 0, 1, 0, "", 0)
   CALL DoWindow(5, 42, 10, 35, 12, 0, 5, 0, "Mouse State #2", 2)
   CALL DoWindow(16, 7, 6, 68, 3, 7, 5, 3, "", 0)
   FOR row = 17 TO 20
      READ line$
      CALL PrtScrn(line$, row, 10, 112)
   NEXT row
   CALL PutScrn(ScrnBuf(0))
   IF mouse THEN
      CALL PrtScrn(mstat$, 25, sctr, 30)
      CALL MouseLimits(6, 6, 13, 38, 1)                 ' -------------------
      CALL MouseLocate(11, 22, 1)                       '
      CALL MouseCursor(9, 7, 30)                        '
      CALL MouseReset(2)                                ' Save mouse state #1

      CALL MouseVisible(1)                                 ' Mouse pointer on
      DO
         CALL MouseClick(lft, mid, rgt)                  ' Typical wait for a
      LOOP UNTIL lft OR rgt                              '  mouse button

      IF rgt THEN
         CALL MouseLimits(6, 43, 13, 75, 1)             ' -------------------
         CALL MouseLocate(11, 59, 1)                    '
         CALL MouseCursor(14, 0, 24)                    '
         CALL MouseReset(4)                             ' Save mouse state #2

         pos$ = mpos1$: mode = 1
         DO                                             ' Loop conditional to
            CALL MouseClick(lft, mid, rgt)              '  mouse button
            IF rgt AND switch THEN
               CALL MouseVisible(0)                     ' Turn old cursor off
               CALL MouseReset(5)                     ' Recall mouse state #2
               CALL MouseVisible(1)                      ' Turn new cursor on
               switch = FALSE
            ELSEIF rgt THEN
               CALL MouseVisible(0)                     ' Turn old cursor off
               CALL MouseReset(3)                     ' Recall mouse state #1
               CALL MouseVisible(1)                      ' Turn new cursor on
               CALL PrtScrn("Black Hole", 8, 18, 12)
               switch = TRUE
            END IF
            IF switch THEN                                   ' Mouse state #1
               CALL MouseExclude(7, 14, 9, 31, 1)           ' Black hole area
               CALL MousePosition(mr, mc, 1)                 ' Turn cursor on
               IF mr < 7 OR mr > 9 OR mc < 14 OR mc > 31 THEN ' outside of
                  CALL MouseVisible(1)                        ' excluded area
               END IF
            ELSE                                             ' Mouse state #2
               IF lft THEN                                     ' Toggle modes
                  IF mode = 0 THEN
                     pos$ = mpos1$: mode = 1
                  ELSE
                     pos$ = mpos2$: mode = 0
                  END IF
               END IF
               CALL MousePosition(r, c, mode)         ' Return mouse position
               LOCATE 14, 50: COLOR 12, 0: PRINT USING pos$; r; c
            END IF
         LOOP UNTIL lft AND switch
      END IF
      CALL MouseVisible(0)
      READ line$, line$
   ELSE                                                 ' Print no mouse text
      CALL PrtScrn("Black Hole", 8, 18, 12)
      CALL DoWindow(21, 7, 4, 68, 12, 0, 1, 0, CONT$, 3)
      FOR row = 22 TO 23
         READ line$: lctr = Ctr(line$)
         CALL PrtScrn(line$, row, lctr, 14)
      NEXT row
      CALL Delay(60, 0)
      CALL GetScrn(ScrnBuf(0))
   END IF
   CALL DoWindow(8, 12, 11, 56, 6, 0, 5, 0, prompt$, 3)
   FOR row = 10 TO 16
      READ line$: lctr = Ctr(line$)
      IF row < 12 THEN att = 15 ELSE att = 10
      CALL PrtScrn(line$, row, lctr, att)
   NEXT row
   CALL Delay(60, 0)

'----------------------------------------------------------------------------
'Closing
'----------------------------------------------------------------------------

   CLS
   CALL DoWindow(1, 1, 25, 80, 15, 4, 5, 0, "Q4Tool Demo", 2)
   CALL DoWindow(3, 6, 21, 69, 15, 0, 5, 0, "", 3)
   CALL PrtScrn(cpyr$, 25, 25, 79)
   READ line$: lctr = Ctr(line$)
   CALL PrtScrn(line$, 5, lctr, 12)
   FOR row = 7 TO 19
      READ line$: lctr = Ctr(line$)
      CALL PrtScrn(line$, row, lctr, 14)
   NEXT row
   CALL PrtScrn(prompt$, 21, pctr, 10)
   CALL Delay(90, 0)

'----------------------------------------------------------------------------
Terminate:
'----------------------------------------------------------------------------
  
   IF mouse THEN CALL MouseReset(0)

   ah = 7: al = 25                              ' Example of system Interrupt
   bh = 7: bl = 0                               '  to clear a screen window
   ch = 0: cl = 0                               '  with int 10h function 7h
   dh = 24: dl = 79                             '  (ah = scroll down)
   InReg.ax = (ah * 256) + al                   ' Conversion of high and low
   InReg.bx = (bh * 256) + bl                   '  byte for acceptance by QB
   InReg.cx = (ch * 256) + cl                   '
   InReg.dx = (dh * 256) + dl                   '
   CALL Interrupt(&H10, InReg, OutReg)          ' Returns nothing

   END


   DATA "Welcome to the world of the"
   DATA "Q4Tool Library [Q4T]"
   DATA "═══════════════════════════"," "
   DATA "This program is set up to demonstrate  the"
   DATA "features of the Q4T Library.  This library"
   DATA "is  designed  to  work with Microsoft (R),"
   DATA "QuickBASIC 4.xx (C).   The source code for"
   DATA "this demo is provided so you  can  examine"
   DATA "the  actual  usage  of these Q4T routines."
   DATA "              Shall we begin?             "
   DATA "This  program  detects  the presence of a"
   DATA "mouse driver, version no.      .  Do  you"
   DATA "wish  to  use your mouse throughout  this"
   DATA "demonstration?                           "," "
   DATA "               (Y)  -  (N)               "
   DATA "First you will see the various windowing"
   DATA "frame  styles and a demonstration of the"
   DATA "screen save and restore routines.       "
   DATA "Q4Tool  offers a"
   DATA "wide variety  of"
   DATA "frame styles."
   DATA "----------------"
   DATA "The window title"
   DATA "can be placed at"
   DATA "top or bottom.  "
   DATA "Each window screen was saved with PutScrn()."
   DATA "We will now use  GetScrn()  and recall those"
   DATA "nine screens.                               "
   DATA "Now  we will add a .33 second delay  and"
   DATA "again recycle through the saved screens."
   DATA "**  Window Shadow Styles  **"
   DATA "left side and bottom"," "
   DATA "*  black in color  *"
   DATA "right side and bottom"," "
   DATA "*  black in  color  *"
   DATA "left side and bottom"," "
   DATA "*   tinted black   *"
   DATA "right side and bottom"," "
   DATA "*   tinted  black   *"
   DATA "So far this demonstration has used  the  following"
   DATA "routines with a combined number of 72 occurrences."," "
   DATA "   MouseStatus() - DoWindow() - PrtScrn()   "
   DATA "   Delay() - PutScrn() - GetScrn() - Ctr()  "
   DATA "Next  is a demonstration of a mouse and key"
   DATA "driven menu created with routines from Q4T."
   DATA "Next will be a demonstration of  the  various"
   DATA "mouse services offered in the Q4Tool Library."
   DATA "The right mouse button will toggle between the separate mouse"
   DATA "states.  While in mouse state #2,  the left mouse button will"
   DATA "toggle  between  modes  for  MousePosition().  While in mouse"
   DATA "state #1, the left mouse button will exit Mouse Services.    "
   DATA "Sorry, but a mouse driver is not detected by this program."
   DATA "A demonstration of the mouse services can not be done."
   DATA "The following routines are used in the mouse"
   DATA "services demonstration.                     ", " "
   DATA "MouseStatus()    MouseReset()     MousePosition()"
   DATA "MouseLocate()    MouseLimits()    MouseVersion() "
   DATA "MouseVisible()   MouseExclude()   MouseCursor()  "
   DATA "MouseClick()                                     "
   DATA "  ==   Q4Tool Library (Q4T)   =="
   DATA "This concludes the short demonstration of the features"
   DATA "offered  by the Q4Tool Library.  Every  routine in Q4T"
   DATA "was  used  in  this  demo.  One half  of the 252 lines"
   DATA "of code in this program contain  a  Q4Tool  statement."
   DATA "The  features  offered  in  this library are common to"
   DATA "most programming needs.  The  prototypes  and  a  full"
   DATA "description  of  these  routines are documented in the"
   DATA "file Q4TOOL.DOC.  Information on the object files  and"
   DATA "source codes for the routines in Q4T is also available"
   DATA "in this file.                                         "," "
   DATA "Microsoft is a registered  trademark of the  Microsoft"
   DATA "Corporation.  Good Luck and Enjoy!                    "

'============================================================================
'
'      The source code for  this  demonstration  is  very  simple.   It
'      should, however, give you a better idea as to the practical  use
'      of  the  Q4Tool library routines.  Q4T is designed to be a small
'      library containing the  routines  generally  needed  most.   The
'      mouse  services  and windowing are the backbone of this library.
'      There's few programs, large  or  small,  that  couldn't  utilize
'      these features.
'
'      The   complete   Q4Tool  Library  is  distributed  as  the  file
'      Q4TOOL.ZIP and contains the following files:
'
'                Q4T.LIB         Q4T.QLB           Q4T.BI
'                Q4TOOL.DOC      Q4T-DEMO.BAS      Q4T-DEMO.EXE
'                SHOWMENU.OBJ
'
'      Information  on  the availability of the source and object codes
'      for Q4Tool is found in  the  file  Q4TOOL.DOC.  You  can  always
'      obtain the latest version of Q4Tool from CompuServe (R), IBMPRO,
'      LIB 4 (Browse Q4T) or directly from CareWare.
'
'      Q4Tool is copyrighted to the author with all rights reserved and
'      is  distributed  as  a Shareware product.  If you acquire Q4Tool
'      and decide to use its  services,  than  a  registration  fee  of
'      $30.00  is  required.  This fee, when paid, entitles you to full
'      usage and support of this product, and  the  latest  version  of
'      Q4Tool, with OBJ modules and ShowMenu source, on disk.
'
'                                           _______
'                                      ____|__     |                (R)
'      R. J. Crouch                 --|       |    |-------------------
'      CareWare                       |   ____|__  |  Association of
'      10217 Ridge View Dr.           |  |       |_|  Shareware
'      Grass Valley, CA  95945        |__|   o   |    Professionals
'                                   -----|   |   |---------------------
'                                        |___|___|    MEMBER
'
'
'      Microsoft is registered trademark of the Microsoft Corporation.
'
'============================================================================

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2560

     Volume in drive A has no label
     Directory of A:\

    Q4T-DEMO EXE     55431   8-18-90  12:24p
    Q4TOOL   DOC     39002   8-23-90   7:46a
    Q4T-DEMO BAS     20743   6-27-90   5:19p
    Q4T      LIB     13893   8-18-90   8:26a
    Q4T      QLB     12421   8-18-90   8:27a
    SHOWMENU OBJ      6714   6-27-90   4:48p
    Q4T      BI        702   7-24-90   7:25p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       880   2-06-91  11:23a
    FILE2560 TXT      2961   3-18-91  11:45a
           10 file(s)     152775 bytes
                            4096 bytes free
