---
layout: page
title: "PC-SIG Diskette Library (Disk #2560)"
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

## FILE2560.TXT

{% raw %}
```
Disk No: 2560                                                           
Disk Title: Q4Tools - Prog. Tools for QuickBasic                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: Q4Tool - Programming Tools for QuickBASIC 4.x            
Author Version: 1.2                                                     
Author Registration: $25.00                                             
Special Requirements: QuickBasic 4.x.                                   
                                                                        
Q4TOOL LIBRARY is a collection of innovative and direct programming     
tools for Microsoft, QuickBASIC 4.xx.  These library routines are       
intended for use by individuals with some QB programming experience.    
All of the routines are easily incorporated into almost any QuickBASIC  
4.xx source without greatly increasing the efficient size of the        
stand-alone program.                                                    
                                                                        
A summary of key services:                                              
                                                                        
 ~ Mouse support includes a majority of the routines that are needed to 
   add mouse services into any application.                             
                                                                        
 ~ Window support uses screen routines developed with machine code for a
   fast, clean appearance.  Select title location, type and location of 
   shadow, and solid frames.                                            
                                                                        
 ~ Screen save/restore routines save and restore the contents of any    
   screen.                                                              
                                                                        
 ~ Other services include screen display, screen string centering,      
   program delay, and other routines for access to system interrupts.   
                                                                        
While Q4TOOL doesn't contain routines for data input or manipulation, it
does provide a solid foundation from which to build your own personal   
libraries.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║<<< PC-SIG Disk #2560 Q4TOOLS - PROGRAMMING TOOLS FOR QUICKBASIC 4.X >>>>║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To start the program, type: Q4T-DEMO                                   ║
║                                                                         ║
║  To print the documentation, type: COPY Q4TOOL.DOC PRN                  ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1991, PC-SIG Inc.
```
{% endraw %}

## Q4T-DEMO.BAS

{% raw %}
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
{% endraw %}

## Q4TOOL.DOC

{% raw %}
```


                            The Q4Tool Library [Q4T]
                                    Ver. 1.2
                      Library Routines for QuickBASIC 4.x
                        by  R. J. Crouch  -  August 1990
                          Copyright - 1990 - CareWare
                              All Rights Reserved
                   _________________________________________



                      **   What is the Q4Tool Library?  **
                     ======================================


          Q4Tool  is  a  small  collection  of  innovative  and direct
          programming tools, in  the  form  of  a  user  library,  for
          Microsoft (R), QuickBASIC 4.xx [QB].  These library routines
          are intended for use by individuals with some QB programming
          experience.  The following files make up the Q4Tool Library.

            Primary:  Q4T.LIB  -  Q4T.QLB  -  Q4T.BI  -  Q4TOOL.DOC

            Support:  Q4T-DEMO.BAS  -  Q4T-DEMO.EXE  -  SHOWMENU.OBJ

          Q4Tool  [Q4T]  has  emerged  from  a  necessity for a simple
          collection of comprehensive routines to supplement the BASIC
          language.  All of its routines are easily incorporated  into
          almost any QuickBASIC 4.xx source without greatly increasing
          the efficient size of the "stand-alone" program.  The Q4Tool
          Library is intended as a  solid  foundation  from  which  to
          build your own personal libraries.



                   **   What the Q4Tool Library provides   **
                  ============================================


          Mouse Services:  Mouse*()

          A  majority  of  the  routines  in  Q4T  pertain  to   mouse
          functions.   These  functions  will  allow  a  programmer to
          incorporate the much needed  mouse  services  into  any  de-
          manding  application.   They  are  intelligently  written to
          compensate for a few idiosyncrasies that tend to emerge from
          the mouse interrupt (33H).


          Windowing:  DoWindow()

          Windowing  for  todays  applications  is  not  new, but this
          windowing routine adds a few features that will enhance  any
          program.   The  screen write for this routine is serviced by
          machine code for  a  fast  and  clean  appearance.   Select-
          ability for title location, type and location of shadow, and
          a solid frame, make this windowing routine unique from other
          we have seen.


          Screen save/restore:  PutScrn()/GetScrn()

          The ability to save and later restore a screens contents are
          essential  for contemporary programming.  These two routines
          are designed to work within the QB environment.   They  make
          use  of  QB's string descriptor block for ease of use.  This
          pair of routines is written entirely  of  machine  code  for
          instant results.


          Screen print:  PrtScrn()

          This is a little machine code routine that will print to the
          screen,  at the location and color desired, any string vari-
          able.  It's fast, compact, and incorporates  into  just  one
          CALL,  QB's  LOCATE,  COLOR,  and  PRINT  statements.   This
          routine is the heart of  the  windowing  procedure  and  the
          reason for its speed.


          Screen string centering:  Ctr()

          This  is  a  handy  little  function that returns the column
          position needed to center string data or  variables  on  the
          screen.   It  can  easily  be  incorporated into QB's LOCATE
          statement.  [i.e., LOCATE 12, Ctr(strg$)]


          Program delays:  Delay()

          This  is  a  smart  replacement for QB's new SLEEP statement
          (which, by the way, takes over 2K of executable code).   The
          delay   can   either  be  forced or user bypassed  with  any
          key or mouse button.


          Access to system interrupts:  QB.QLB/QB.LIB/QB.BI (C)

          Incorporated  within  this  library  are QuickBASIC's QB.QLB
          (C), QB.LIB (C) and QB.BI (C).  These files  were  necessary
          for  writing the mouse routines.  Because of their presence,
          you also have access  to  DOS  service  calls.   This  is  a
          powerful feature for any programmer.



               **   What the Q4Tool Library does not provide   **
              ====================================================


          Q4Tool  does  not  contain routines for data input or manip-
          ulation.  It is felt these  type  of  procedures  should  be
          handled  by  the programmer for their particular application
          needs.  Absent also from this library is  the  abundance  of
          routines  that  can't  possibly  be  incorporated into every
          program.  Q4T is intended to be a small library  from  which
          to build from.


               **   The nuts and bolts of the Q4Tool Library   **
              ====================================================


          The following is a clarified description of  the  prototypes
          used in the CALL's to these Q4Tool library routines.  Please
          note  the  variable  types  used  for the arguments in these
          routines.  The mouse service calls are designed to work with
          a Microsoft (R) mouse driver or close compatible.


          -------------------
          MouseStatus(Ready%)
          -------------------
          This routine does a nondestructive interrupt vector check to
          determine  the  existence  of  a mouse driver.  This routine
          should be called prior to using any of the other  Q4T  mouse
          routines  to  insure  the  presence  of  the mouse interrupt
          (33H).

          Passed:  An integer variable

          Returns: 0 if a mouse driver is not detected
                   1 if a mouse driver has been installed

          Example:  CALL MouseStatus(have%)


          ----------------
          MouseReset(Set%)
          ----------------
          This routine will initialize the mouse driver and will allow
          the saving and restoring of two separate mouse states.

          Passed:  An initialized integer variable or constant
                   0 = hard reset - initializes mouse driver, turns
                       mouse pointer off and disables any prior
                       user installed events (function 00H)
                   1 = soft reset - reset mouse driver and turns
                       pointer off (function 21H)
                   2 = will save the current mouse state to mouse
                       buffer #1
                   3 = will restore the mouse state as saved in mouse
                       buffer #1
                   4 = will save the current mouse state to mouse
                       buffer #2
                   5 = will restore the mouse state as saved in mouse
                       buffer #2

          Returns:  If passed a variable initialized to 0, will reset
                    mouse and return number of buttons installed, else
                    returns nothing

          Example:  buttons% = 0
                    CALL MouseReset(buttons%)


          ----------------------
          MouseVersion(Version$)
          ----------------------
          This routine will return both the major and minor version of
          the mouse driver installed.

          Passed:  A string variable at lease 5 characters in length

          Returns:  A string containing the version of the mouse
                    driver installed.  (i.e., 6.123)

          Example:  CALL MouseVersion(ver$)


          ---------------------
          MouseVisible(Status%)
          ---------------------
          This routine will allow  the  mouse  pointer  to  be  either
          turned  on  or  off.  This routine has been stabilized by an
          internal variable to  compensate  for  the  mouse  interrupt
          counter.   Recursive  calls  to  the  same  Status% will not
          increase or decrease the mouse interrupt counter.  This will
          only be done by opposing Status% calls.

          Passed:  An initialized integer variable or constant
                   0 = mouse pointer off
                   1 = mouse pointer on

          Returns:  Nothing

          Example:  CALL MouseVisible(1)
                    CALL MouseVisible(off%)


          ----------------------------------------
          MouseLocate(ScrnRowY%, ScrnColX%, Mode%)
          ----------------------------------------
          This routine will place the  mouse  pointer  at  the  screen
          location  indicated  by its arguments.  The Mode switch will
          allow the location to be given  in  either  row/column  text
          positions or X/Y pixel positions.

          Passed:  An initialized integer variable or constant
                   Mode 0 = pixel positions
                      ScrnColX% = horizontal (X) position with a value
                                  from 0 to 632
                      ScrnRowY% = vertical (Y) position with a value
                                  from 0 to 192
                   note:  The pixel given is the upper left dot of
                          the standard 8x8 mouse pointer.  Pixel
                          positions start from 0,0.

                   Mode 1 = text positions
                      ScrnColX% = text column position with a value
                                  from 1 to 80
                      ScrnRowY% = text row position with a value from
                                  1 to 25


          Returns:  Nothing

          Example:  CALL MouseLocate(12, 30, 1)
                    CALL MouseLocate(y%, x%, 0)


          ------------------------------------------
          MousePosition(ScrnRowY%, ScrnColX%, Mode%)
          ------------------------------------------
          This  routine  will return the current position of the mouse
          pointer.  The Mode switch will allow the  location  returned
          to be either given in row/column text positions or X/Y pixel
          positions.

          Passed:  An initialized integer variable or Mode% constant
                   Mode 0 = returned values represent X/Y pixel
                            positions
                   Mode 1 = returned values represent row/column
                            positions

          Returns:  An integer value
                    Mode 0
                       ScrnColX% = current horizontal (X) position of
                                   mouse pointer as represented by
                                   pixels (0 to 632)
                       ScrnRowY% = current vertical (Y) position of
                                   mouse pointer as represented by
                                   pixels (0 to 192)
                    note:  The pixel given is the upper left dot of
                           the standard 8x8 mouse pointer.  Pixel
                           positions start from 0,0.

                    Mode 1
                       ScrnColX% = current column position of mouse
                                   pointer (1 to 80)
                       ScrnRowY% = current row position of mouse
                                   pointer (1 to 25)

          Example:  CALL MousePosition(TextRow%, TextCol%, 1)


          ------------------------------------------------------------
          MouseLimits(UpRowY%, LeftColX%, LowRowY%, RightColX%, Mode%)
          ------------------------------------------------------------
          This routine will let you limit  the  motion  of  the  mouse
          pointer.    The   mouse   pointer  will  reside  within  the
          boundaries  specified  by  the  arguments  passed  to   this
          routine.  The  Mode switch will allow the limited area to be
          either given in  row/column  text  positions  or  X/Y  pixel
          positions.

          Passed:  An initialized integer variable or constant
                   Mode 0 = pixel positions
                      LeftColX% = left horizontal (X) position with a
                                  value from 0 to 632
                      UpRowY% = upper vertical (Y) position with a
                                value from 0 to 192
                      RightColX% = right horizontal (X) position with
                                  a value from LeftColX% to 632
                      LowRowX% = lower vertical (Y) position with a
                                  value from UpRowY% to 192
                   note:  The pixel given is the upper left dot of
                          the standard 8x8 mouse pointer.  Pixel
                          positions start from 0,0.

                   Mode 1 = text positions
                      LeftColX% = left column position with a value
                                  from 1 to 80
                      UpRowY% = upper row position with a value from
                                1 to 25
                      RightColX% = right column position with a value
                                   from LeftColX% to 80
                      LowRowY% = lower row position with a value from
                                 UpRowY% to 25

          Returns:  Nothing

          Example:  CALL MouseLimits(10, 25, 15, 55, 1)


          -------------------------------------------------------------
          MouseExclude(UpRowY%, LeftColX%, LowRowY%, RightColX%, Mode%)
          -------------------------------------------------------------
          This  routine  will  allow  the mouse pointer to be excluded
          from any portion of the screen as specified by the arguments
          passed to this routine.  When the mouse pointer  enters  the
          excluded  boundaries,  the pointer is turned off.  The mouse
          interrupt (33H)  does  not,  however,  reinstate  the  mouse
          pointer  to the on condition upon exiting the excluded area.
          This process must be performed within the  programming  code
          itself.    The   excluded   area  cannot  be  saved  by  the
          MouseReset() routines.  The mode switch will allow  the  ex-
          cluded  area to be either given in row/column text positions
          or X/Y pixel positions.

          Passed:  An initialized integer variable or constant
                   Mode 0 = pixel positions
                      LeftColX% = left horizontal (X) position with a
                                  value from 0 to 632
                      UpRowY% = upper vertical (Y) position with a
                                value from 0 to 192
                      RightColX% = right horizontal (X) position with a
                                   value from LeftColX% to 632
                      LowRowX% = lower vertical (Y) position with a
                                 value from UpRowY% to 192
                   note:  The pixel given is the upper left dot of
                          the standard 8x8 mouse pointer.  Pixel
                          positions start from 0,0.

                   Mode 1 = text positions
                      LeftColX% = left column position with a value
                                  from 1 to 80
                      UpRowY% = upper row position with a value from
                                1 to 25
                      RightColX% = right column position with a value
                                   from LeftColX% to 80
                      LowRowY% = lower row position with a value from
                                 UpRowY% to 25

          Returns:  Nothing

          Example:  CALL MouseExclude(15, 20, 21, 35, 1)


          -------------------------------------------------
          MouseClick(LeftClick%, MiddleClick%, RightClick%)
          -------------------------------------------------
          This  routine  will  return  a  value indicating the current
          mouse button in use.  The value is only  returned  upon  the
          release  of  the button, thus returning the value only once.
          This allows the mouse button status to be  effectively  used
          within a loop.

          Passed:  An integer variable

          Returns:  0 = button not in use
                    1 = button has been clicked

          Example:  CALL MouseClick(lft%, mid%, rgt%)


          -----------------------------------------------------
          MouseScroll(LeftButton%, MiddleButton%, RightButton%)
          -----------------------------------------------------
          This routine will return  a  value  indicating  the  current
          mouse   button   being  pressed.   This  value  will  remain
          constant until the button is released.

          Passed:  An integer variable

          Returns:  0 = button not in use
                    1 = button is being pressed

          Example:  CALL MouseScroll(lft%, mid%, rgt%)


          --------------------------------
          MouseCursor(Fore%, Back%, Char%)
          --------------------------------
          This routine allows you to change the character and color of
          the mouse pointer.

          Passed:  An initialized integer variable or constant
                   Fore = foreground color for the new pointer
                          (within a range of 0 to 15)
                   Back = background color for the new pointer
                          (within a range of 0 to 7)
                   Char = ASCII decimal value for the character of the
                          new pointer (within a range of 0 to 255)

          Returns:  Nothing

          Example:  CALL MouseCursor(12, 7, 30)


          --------------------------------------------------------
          DoWindow(UpR%, LfC%, VSz%, HSz%, Fgd%, Bgd%, Frm%, Shw%,
                   Txt$, Lct%)
          --------------------------------------------------------
          This routine will create attractive application  windows  at
          any  screen  position.  You have control over color, type of
          frame and color, type and location of shadow,  and  location
          of  window title and style.  This windowing routine offers a
          wide variety of possibilities.

          Passed:  An initialized integer variable or constant,
                   and string variable or constant for title
                   UpR = upper row position for start of window
                         (within a range of 1 to 24)
                   LfC = left column position for start of window
                         (within a range of 1 to 79)
                   VSz = vertical size of window (# of rows)
                         (within a range of 26 minus UpR)
                   HSz = horizontal size of window (# of columns)
                         (within a range of 81 minus LfC)
                   Fgd = foreground window color (frame/text)
                         (within a range of 0 to 15)
                   Bgd = background window color (window structure)
                         (within a range of 0 to 7)
                   Frm = frame type, if any
                         0 = no frame
                         1 = single line
                         2 = double line
                         3 = single vertical and double horizontal
                         4 = single horizontal and double vertical
                         5 = solid frame enclosing the window
                   Shw = shadow location and type, if any
                         0 = no shadow
                         1 = shadow left side and bottom of window
                             (black in color)
                         2 = shadow right side and bottom of window
                             (black in color)
                         3 = shadow left side and bottom of window
                             (tinted black)
                         4 = shadow right side and bottom of window
                             (tinted black)
                         note:  Tinted black is a combination, with
                                ASCII character #177, of the color
                                attribute outside the window and black.
                   Txt = string variable or constant used for the
                         title of the window
                         note: Empty double quotes ("") or a string
                               initialized to null will not produce
                               a title.
                   Lct = determines the location of the title, if any
                         0 = title at top without brackets
                         1 = title at bottom without brackets
                         2 = title at top with brackets
                         3 = title at bottom with brackets
                         note:  If a title is not present, the
                                location value has no effect.


                   note:  The horizontal and vertical size cannot be
                          less then 2.

          Returns:  Nothing

          Example:  CALL DoWindow(5, 10, 15, 60, 14, 6, 5, 3, "", 0)


          -----------------
          PutScrn(ScrnBuf$)
          -----------------
          This routine will allow you to save the entire  contents  of
          the  screen currently being displayed.  The screen saved can
          later be retrieved and displayed with the companion  routine
          GetScrn().   The screens contents is saved to a string vari-
          able or array initialized  to  4000  characters  in  length.
          (i.e., DIM ScrnBuf(3) AS STRING * 4000)

          Passed:  An initialized string variable or array at least
                   4000 characters in length

          Returns:  current screens contents

          Example:  DIM ScrnBuf AS STRING * 4000
                    CALL PutScrn(ScrnBuf)

                    DIM SHARED ScrnBufArr(2) AS STRING * 4000
                    CALL PutScrn(ScrnBufArr(0))  [default option base]


          -----------------
          GetScrn(ScrnBuf$)
          -----------------
          This routine will allow you  to  retrieve  and  display  the
          contents  of  the  screen  saved  by  its  companion routine
          PutScrn().

          Passed:  The string variable or array that contains the
                   screen to be displayed.

          Returns:  Nothing

          Example:  CALL GetScrn(ScrnBuf)
                    CALL GetScrn(ScrnBufArr(1))


          ---------------------------------
          PrtScrn(Strg$, Row%, Col%, Attr%)
          ---------------------------------
          This is a machine language routine that will print a  string
          variable or constant to the screen at the location and color
          indicated  by its arguments.  The attribute is a combination
          of  the  foreground  and  background  colors  and   can   be
          determined  by  the  following  formula: (background * 16) +
          foreground.

          Passed:  Initialized variables or constants
                   Strg = string variable or constant to be displayed
                   Row  = screen row for display
                          (within a range of 1 to 25)
                   Col  = screen column for display
                          (within a range of 1 to 80)
                   Attr = attribute of color to be displayed
                          (within a range of 0 to 127)

          Returns:  Nothing

          Example:  CALL PrtScrn("Hello Universe", 12, 33, 110)
                    CALL PrtScrn(hello$, rw%, cl%, att%)


          ------------
          Ctr(String$)
          ------------
          This is a handy little  function  that  returns  the  column
          position  need  to  screen center a string variable.  It can
          easily be incorporated into BASIC's LOCATE statement.

          Passed:  An initialized string variable

          Returns:  Column position needed to screen center a
                    string variable.

          Example:  LOCATE 12, Ctr(Strg$)
                    or
                    cntr = Ctr(Strg$)
                    LOCATE 12, cntr


          -----------------------
          Delay(Length!, Forced%)
          -----------------------
          This routine is  a  smart  alternative  to  QB's  new  SLEEP
          statement  or the numerous appearances of LOOPs.  This delay
          can either be forced or user bypass  with  the  keyboard  or
          mouse  buttons  (if installed).  The delay makes use of real
          time so CPU speed has little effect.

          Passed:  Initialized integer variables or constants
                   Length = single precision integer indicating the
                            length of the delay in seconds
                   Forced = integer indicating the type of delay
                            0 = not forced (can be bypassed with
                                any key or mouse button)
                            1 = delay is forced (remains in effect
                                until specified time has elapsed)
                   note:  If both Length and Forced are 0, then
                          Delay() will wait indefinitely until any
                          key or mouse button is pressed.

          Returns:  Nothing

          Example:  CALL Delay(.25, 0)
                    CALL Delay(lgth1!, 1)


          -----------------------------------
          QB.QLB (C) - QB.LIB (C) - QB.BI (C)
          -----------------------------------
          These three QuickBASIC files  are  incorporated  into  Q4T's
          libraries.   They  are necessary for the DOS interrupts used
          by the mouse routines.  The  following  is  a  list  of  the
          services   provided   by  these  files.   Because  of  their
          presence, you also have access to these important  services.
          Please  consult  your  QuickBASIC  4.x reference manuals for
          information on the use of these  QB CALL's.  The  demonstra-
          tion  source code (Q4T-DEMO.BAS) illustrates an example of a
          CALL to the Interrupt() routine.

               CALL Absolute()
               CALL Int86Old()
               CALL Int86XOld()
               CALL Interrupt()
               CALL InterruptX()


                       **   The $INCLUDE file Q4T.BI   **
                      ====================================


          The file Q4T.BI contains the declarations for the Ctr()  and
          Delay()   routines.    This   file  must  be  used  in  QB's
          metacommand  instructions  and  should  be  placed  at   the
          beginning  of  your  code.  Generally, the TYPE declarations
          for QB's Interrupt() and InperruptX() calls are also  placed
          in  this  file.   Please  see  the demonstration source code
          (Q4T-DEMO.BAS) for an example of a  metacommand  instruction
          or  consult  your  QB  reference  manuals for information on
          $INCLUDE: files.



                **   A demonstration of the Q4Tool Library   **
               =================================================


          There's  an  old  cliche  that states, "A picture is worth a
          thousand words".  So, provided with  Q4Tool  is  the  source
          code   [Q4T-DEMO.BAS]  for  a  short  demonstration  of  its
          routines.   This  source  code  will  give  you   a   better
          understanding  as  to  the actual usage of the Q4T routines.
          The code is presented in an ASCII format and can  be  viewed
          with  any  common  text editor or sent to your printer using
          the syntax;  COPY Q4T-DEMO.BAS PRN.  This  demonstration  is
          quite   simple   and   by  no  means  illustrates  the  only
          application for the Q4Tool Library.  If you wish to  compile
          this demo, the following command line syntax should be used.

          From the DOS command line for a stand-alone EXE:

               BC Q4T-DEMO,/O;
               LINK Q4T-DEMO+SHOWMENU,,,Q4T/E;

          Note:   Q4T-DEMO.BAS  code  can  be  viewed  but  not ran or
                  compiled  from  within  the  QB  environment.    The
                  environment   does  not  support  the  CALL  to  the
                  external demo module ShowMenu().


           **   Compiling within the QuickBASIC 4.5 Environment   **
          ===========================================================


          Q4Tool  was  developed  and  compiled with QuickBASIC 4.00b.
          QuickBASIC,  when  compiling,  includes  the  name  of   the
          standard  library  in  the object module.  In this case, the
          library BCOM41.LIB is used.   Due  to  the  syntax  used  by
          QuickBASIC  4.5  within  its environment, a LINK warning may
          result and is easily circumvented.

             LINK : warning L4051: BCOM41.LIB : cannot find library
             Enter new file spec:

          On  the  line  "Enter new file spec:"  you need to supply QB
          with the path and library for the version you are using.

          Examples for QB 4.5:

             For stand-alone EXE  -  C:\LIB\BCOM45.LIB

             For run-time EXE  -  C:\LIB\BRUN45.LIB

             Note:   If the location of your libraries is  within  the
                     current  directory  or  is  set  within  the  DOS
                     environment, then the path to your  libraries  is
                     not necessary.

          Q4Tool  can  also be linked to your object modules using the
          standard DOS command  line.   This  process  avoids  the  QB
          environment  entirely.   Your  source code (BAS) needs to be
          saved in text (ASCII) format in  order  for  BC  to  operate
          properly.   The  following  syntax has been tested and works
          quite well.

             For stand-alone EXE  -  BC YOURFILE.BAS,,/O;
                                     LINK YOURFILE.OBJ,,,Q4T.LIB/E;

             For run-time EXE  -  BC YOURFILE.BAS;
                                  LINK YOURFILE.OBJ,,,Q4T.LIB;

             Note:   Be  sure  you  supply  all necessary command line
                     switches  needed  for  your  source   code   when
                     compiling (BC).  [i.e.  /E /X /W]

          Please  consult  your  QuickBASIC reference manuals for more
          detailed information on compiling and linking your  programs
          from the DOS command line.


                   **   A look inside the Q4Tool Library   **
                  ============================================


          The  Q4Tool Library is comprised of six object code modules.
          With this type of construction,  it  is  possible  to  build
          libraries  containing  only the particular routines desired,
          or incorporate them into existing libraries.  These  modules
          are  provided  to  you  (on  disk) upon your registration of
          Q4Tool.  Below is a list  of  the  object  modules  and  the
          routines contained in each.

                Module Name         Routines          Source Type
                -----------         --------          -----------

                Q4TOOL.OBJ          Ctr()                 BAS
                                    Delay()               BAS

                Q4WIND.OBJ          DoWindow()            BAS

                Q4MOUSE.OBJ         Mouse*()              BAS

                PRTSCRN.OBJ         PrtScrn()             ASM

                PUTSCRN.OBJ         PutScrn()             ASM

                GETSCRN.OBJ         GetScrn()             ASM

          The  routine  Dowindow()  does  make CALL's to PrtScrn() and
          must have access to its services.   When  using  the  Q4WIND
          module,  the PRTSCRN module should always be linked with it.
          If MOUSE.OBJ is used separately,  it  must  have  access  to
          QB.LIB or QB.QLB if used within the QB environment.

          The screens handling  modules  (ASM)  employ  direct  memory
          access and assume the segment address of the regen buffer to
          be the following:

                      Card Type             Segment Address
                     -----------           -----------------

                      Monochrome                B0000H

                      Color                     B8000H

          The  following  is  a list of internal variables used in the
          mouse routines.  These variable names should not be used  by
          your  program  structure  in  conjunction with the COMMON or
          SHARED Statements.

               visible33%       mouse1buf33%()     mouse2buf33%()

          The  remaining  variables  within  the  Q4T   routines   are
          initialized upon their CALL and are not defined as SHARED.


              **   A few final notes about the Q4Tool Library   **
             ======================================================


          This documentation is not written to be a tutorial and makes
          the  assumption  you  have  some  knowledge  of  the calling
          conventions for QuickBASIC.  The demonstration  source  code
          (Q4T-DEMO.BAS)  was  written  to  provide you with a working
          example of the Q4T routines and  is  a  valuable  source  of
          information.

          Q4Tool  was  developed  and tested on a 16-bit 8088 machine,
          running at 8 mhz, and should perform  as  expected  on  most
          computers within the "86" family.

          The Q4Tool Library is presented as-is and with no warranties
          expressed or implied.  CareWare  assumes  no  responsibility
          for  this products use, misuse, or lose of any kind incurred
          by its use.

          The Q4Tool Library  is  copyrighted  to  CareWare  with  all
          rights  reserved, and is distributed as a Shareware product.
          If you find Q4T to be of  value  and  continue  to  use  its
          services,  then  you are required to register your copy with
          CareWare.    A   registration  form  is  provided  for  your
          convenience.

          Q4Tool  may  be  shared  with  others  as long as it remains
          unaltered and distributed in its entirety.   A  distribution
          fee,  not to exceed $6.00, may be imposed by disk vendors to
          cover shipping and  handling  costs.   The  following  files
          comprise  the  whole of this product, and are distributed as
          the file Q4TOOL.ZIP.

                 Q4T.LIB        Q4TOOL.DOC         SHOWMENU.OBJ
                 Q4T.QLB        Q4T-DEMO.BAS
                 Q4T.BI         Q4T-DEMO.EXE

          Upon  your completed registration you are granted full usage
          and support for this product.  Any comments  or  suggestions
          are gratefully accepted and an honest attend will be made to
          answer them.  Good Luck and Enjoy!

          Microsoft is a registered trademark of the Microsoft Corp.


                **   The Shareware principle works for you   **
               =================================================


          R. J. Crouch
          CareWare
          10217 Ridge View Dr.
          Grass Valley, CA  95945


          This program is produced by a member of the  Association  of
          Shareware  Professionals (ASP).  ASP wants to make sure that
          the shareware principle works for you.  If you are unable to
          resolve a shareware-related problem with an  ASP  member  by
          contacting the member directly, ASP may be able to help. The
          ASP Ombudsman can help you resolve a dispute or problem with
          an  ASP  member,  but does not provide technical support for
          members' products.  Please write to  the  ASP  Ombudsman  at
          P.O.   Box  5786,  Bellevue,  WA  98006 or send a CompuServe
          message via easyplex to ASP Ombudsman 70007,3536.


                  _______
             ____|__     |                (R)
          --|       |    |-------------------
            |   ____|__  |  Association of
            |  |       |_|  Shareware
            |__|   o   |    Professionals
          -----|   |   |---------------------
               |___|___|    MEMBER







                            The Q4Tool Library [Q4T]
                                    Ver. 1.2
                               Registration Form
                _______________________________________________


         CareWare
         10217 Ridge View Dr.
         Grass Valley, CA  95945


         Quantity        Type of registration          Cost      Total
         --------        --------------------          ----      -----

          ______    Registration of your current      $25.00    _______
                    copy

          ______    Registration, latest ver., OBJ    $30.00    _______
                    modules & SHOWMENU.BAS on disk

          ______    All the above plus all module     $55.00    _______
                    source codes on disk

                                                    Subtotal    _______


          Disk size:  [  ] 5.25  -  [  ] 3.5                    _______
                      (please add $1.00 for 3.5)

          Please add $3.00 for shipping outside of U.S.         _______


          (apd)                              Amount Enclosed    _______


          All  registered  user  will  receive  prompt  and  courteous
          support for this  product.   Notification  of  upgrades  are
          provided when available.  Thank you for your support.


          Name ___________________________________________

          Address ________________________________________

          City, State, Zip _______________________________

          Phone (optional) _______________________________


          Please make payable to the author - R. J. Crouch




```
{% endraw %}

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
