---
layout: page
title: "PC-SIG Diskette Library (Disk #828)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0828/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0828"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDRAW"

    EDRAW is a sophisticated graphics program for drawing electronic
    schematics, block diagrams and flow charts. Originally designed for
    technical people such as engineers, teachers and students, it can even
    be used to lay out a printed circuit board!
    
    EDRAW features several text fonts for incorporating into any drawing or
    diagram. Logic and electronic symbols have been included for
    drawing electronic circuits as well as lines, boxes, circles, and other
    icons. EDRAW is a must for anyone who has specific drawing or graphic
    needs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES828.TXT

{% raw %}
```
Disk No  828
Program name: EDRAW version 3.2
PC-SIG version 3.2
 
    EDRAW is a sophisticated graphics program that can draw schematics,
block diagrams, flowcharts and can even be used to lay out a printed
circuit board. The program features several text fonts which can be
incorporated into any drawing or diagram. This is an excellent program and
I recommend it for anyone looking for a simple yet powerful graphics
program.
 
Usage: Graphics
 
System Requirements: 320K memory, one disk drive, color graphics, and a
printer is optional.
 
How to Start: To view documentation: TYPE READ.ME (press enter).
 
Suggested Registration: $49.95
 
File Descriptions:
 
README        Author notes.
MANUAL   DOC  Documentation for EDRAW.
FONT????      Different fonts for EDRAW (6 files).
FLINSTAL BAT  Floppy disk installation file.
HDINSTAL BAT  Hard disk installation file.
FIXD     CFG  Configuration file.
EDRAW    EXE  Main program.
EDRAW    CFG  Edraw configuration file.
EDEMO??  BAT  Batch files for a brief demo of EDRAW. (3 FILES).
???????? DOG  Files used by EDRAW (61 files).
DEMO?         Demonstration files. (3 files).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
















                           EDRAW - Easydraw
                           ----------------
                      Computer Drawing Program

                          for the IBM PC and
                      IBM Graphics Printer/Epson

                             Version 3.2
























      (C) Copyright Emark Systems 1985,1986.

      Distribution manual does not contain figures and illustrations.
                       TABLE OF CONTENTS

         WHAT IS EDRAW-----------------------------------   1
         LICENSE-----------------------------------------   1
         ORDERING/REGISTRATION INFORMATION---------------   1
         EDRAW REQUIREMENTS------------------------------   3
         WELCOME-----------------------------------------   4
         EDRAW INSTALLATION------------------------------   4
         FLOPPY USER INSTALLATION------------------------   4
         HARD DISK USER INSTALLATION---------------------   5
         AUTOMATED DEMONSTRATION(S)----------------------   5
         EDRAW COLOR'S-----------------------------------   5
         EDRAW.CFG---------------------------------------   6
         EDRAW ANATOMY-----------------------------------   6
         LOAD A DRAWING----------------------------------   7
         SAVE A DRAWING----------------------------------   8
         PRINT A DRAWING---------------------------------   9
         DISPLAY PARAMETERS------------------------------   9
         DISPLAY DISK FILES------------------------------   10
         INITIAL DRAWING SETUP---------------------------   10
         WINDOW MODE-------------------------------------   10
         PANNING-----------------------------------------   11
         ERASE ENTIRE DRAWING----------------------------   11
         DRAW MODE SUMMARY-------------------------------   12
         CHECKMARK / CURSOR------------------------------   14
         DRAWING/DELETING LINES--------------------------   14
         BOXES AND CIRCLES-------------------------------   14
         ERASE-------------------------------------------   15
         MOVE / COPY-------------------------------------   15
         HELP MENU---------------------------------------   16
         FILL AN AREA------------------------------------   16
         HORIZONTAL & VERTICAL WIDTH---------------------   16
         MICRO-POSITIONING-------------------------------   16
         LIFT--------------------------------------------   17
         MAGNIFY-----------------------------------------   17
         UX UY DIFF--------------------------------------   18
         TABS--------------------------------------------   19
         A BUZZING REMINDER------------------------------   19
         FONTS-------------------------------------------   20
         SYMBOL MODE SUMMARY-----------------------------   20
         SYMBOLS-----------------------------------------   21
         PUT SYMBOLS-------------------------------------   22
         F3 XOR------------------------------------------   22
         LOADING SAVED SYMBOLS---------------------------   22
         SAVING SYMBOLS----------------------------------   23
         F6 OPEN SYMBOL PATH-----------------------------   23
         AUTOMATED DEMONSTRATION-------------------------   24
         MANUAL TUTORIAL---------------------------------   24
         MOUSE SUPPORT-----------------------------------   27
      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  1




         WHAT IS EDRAW--------------------------------------------------

         Edraw  -  Easydraw  - is an IBM PC based general purpose drawing
         program  designed for technical people like engineers, teachers,
         students,  technicians  etc..   In  addition  to  drawing lines,
         boxes,   circles,  symbols,  etc.,  the  USER-SUPPORTED  program
         includes  logic/electronic  symbols and fonts which enable users
         to  draw  electronic circuits.  Edraw can load/save symbols, and
         is  not  limited  by  the  viewing  screen.   Edraw  is fast; it
         features automatic panning and mouse support.

         Edraw  requires  a  standard  color  graphic adapter (CGA) or an
         enhanced  graphic  adapter  (EGA)  and  supports  the  Epson  or
         compatible graphic printers.


         LICENSE-------------------------------------------------------

         Copyright (C) Emark Systems, 1985,1986.  All rights reserved.

         Edraw   is   being  distributed  according  to  the  "shareware"
         concept.   Users  are  encouraged  to  try  the  program for the
         purpose  of  evaluating  its suitability for their needs.  Users
         are  also  encouraged  to  make  unmodified  copies of the Edraw
         distribution  disk  for  the trial use of others, on the express
         condition  that  no  fee  or other consideration (other than the
         cost of the disk) may be requested or accepted for the copies.

         The  use  of  Edraw  by  any  individual, business, corporation,
         government  agency  or  other entity, beyond the limited purpose
         of  evaluation, requires registration.  For further information,
         please see "Ordering/Registration Information" section.

         Once  registered, a user may move the software and manual freely
         from  one  computer  location  to another so long as there is NO
         POSSIBILITY  of  the  software  being  used  at  more  than  one
         location simultaneously.

         The  contents  of  an  unmodified Edraw distribution disk may be
         packed  or archived as long as the reverse process maintains its
         original unmodified content.


         ORDERING/REGISTRATION INFORMATION------------------------------

         If,  after  trying  the  program on the distribution disk, users
         decide  they  would  like  to use Edraw on a regular basis, they
         must  register  with  Emark  Systems by placing an order for the
         complete fully documented program.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  2



         Registered  users of Edraw are entitled to use the software on a
         regular  basis.  They will receive full documentation, extending
         that which is included on the evaluation disk.

         The   $49.95   registration  fee  entitles  the  user  to  these
         benefits:

         1.    Edraw  (the fully documented computer drawing program).

         2.    A printed manual containing:

               a)    Figures   and   illustrations.  (A  graphic  drawing
                     program  is  best  learned  with  the aid of graphic
                     illustrations.)

               b)    Schematic application notes.

               c)    Printed circuit board application notes.

               d)    Instructions on merging figures with ascii files.

               e)    Flowchart and data flowchart application notes.

         3.    Single machine license to use Edraw.

         4.    Additional fonts designed for Epson printers.

         5.    EMIX  -  a  program  to mix figures with ascii files.  For
               example:   Entering  EMIX MANUAL.DOC would print the ascii
               file  MANUAL.DOC (the document you are reading).  Imbedded
               in  the  textual  information  are .FIGURE commands.  EMIX
               will  place  the  requested  EDRAW  drawed  figure at this
               location on the printout.

         6.    EPRINT.EXE  a  program  that  prints EDRAW drawings at the
               DOS  level.   For  example: EPRINT CPU1 CPU2 CPU3 /F <ret>
               would  print  three  drawings with a formfeed between each
               one and double strike each drawing.

         7.    Future updates - plotting user generated data points.

         A  form  is  included in the back of the manual for registration
         and   ordering.    Corporate,   government   agency,   or  other
         commercial users must be registered.

         EMARK  SYSTEMS  makes  no  representation, claims, or warranties
         with  respect  to  the  contents  of this manual or the software
         which  it  describes,  and  specifically  disclaims  any implied
         warranties   including those of merchantability or fitness for a
         particular  purpose.   EMARK  SYSTEMS  reserves  the   right  to
         change the manual or software at any time without notice.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  3




         TRADEMARKS-----------------------------------------------------

         IBM   and  IBM  PC  are  trademarks  of  International  Business
         Machines Corporation.

         Mouse  Systems  and  Designer  Pop-up  are  trademarks  of Mouse
         Systems Corporation.

         Microsoft is a trademark of Microsoft Corporation.

         Hercules is a trademark of Hercules Computer Technology.

         Radio Shack is a trademark of Tandy Corporation.

         Edraw has been tested on the following computers:
                 IBM (not jr.)
                 Radio Shack 1000, 1200, 3000, 4000
                 COMPAQ
                 AT&T
                 ZENITH
                 EPSON EQUITY 1
                 LEADING EDGE

         EDRAW REQUIREMENTS-------------------------------------------


                 MS-DOS 2.0 or greater.
                 IBM  Color  Graphics  Adapter (CGA) or compatible or IBM
                 Enhanced  Graphics Adapter (EGA).  EDRAW has been tested
                 succesfully  with  CGA  simulators  on  HERCULES graphic
                 cards.
                 320k memory.

         Edraw has been tested on the following printers:

                 FX80, FX100, FX185, MX80, MX80(graftrax)
                 IBM graphics printers
                 Spectra LX-80
                 Radio Shack DMP series (in the IBM mode)
                 Hewlett Packard laser jet plus, Thinkjet, and QuietJet
                 printers



         To  test  Edraw  with  your  monitor  and graphics card, run the
         following program from within BASICA.

                 10 SCREEN 2
                 20 LINE(0,0)-(450,150),1


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  4



         If  a  diagonal  line  appears  on the screen, the computer will
         support Edraw.

                                   .figure HZLIN



         WELCOME--------------------------------------------INTRODUCTION

         Welcome   to  Edraw  (Easydraw), the   lowest  cost professional
         drawing program.  Support your shareware programs.

         Edraw   is   easy to learn, and produces professional results in
         a  very  short  period  of  time.  Edraw is portable and runs on
         IBM   personal   computers  or  clones  that  can  be  found  in
         offices, schools, and homes throughout the world.

         Edraw  will   revolutionize   your  drawing  in the same fashion
         that  word  processors revolutionized writing.  The user will do
         the  thinking;  Edraw  will  perform  the  more  repetitive  and
         mundane aspects of executing a drawing.

         Edraw  allows  you  to  design  and  edit  a library of your own
         symbols.   For  schematic  applications,  Edraw  allows  you  to
         design   at   a   functional  level  and does not commit you  to
         specific components too early in the design process.

         With  a  few glue parts, engineers, teachers, students, and home
         hobbyists   can  design  a  circuit  with free-form style. Since
         Edraw  is   easy  to  edit,  the  designer  can  experiment with
         drawings  in much  the same manner as word processors experiment
         with and fine-tune text.
                               .figure DEMONS

         EDRAW INSTALLATION---------------------------------INTRODUCTION

         Before  beginning  any  installation, make a backup of the EDRAW
         disk.   Place  EDRAW  in  the  A drive and a blank disk in the B
         drive.  Enter the DOS request DISKCOPY A: B: .

         To  eliminate   disk   clutter   and  to  separate symbols as to
         function,  EDRAW's  symbols,  EDRAW'S  fonts,  and  user-created
         symbols   operate   thru  sub-directories;  different  types  of
         symbols  are stored in different directories.  A user can delete
         an  unwanted  group  of  symbols by  eliminating that directory.
         The  sub-directory names are easily maintained by the user in an
         ascii file called EDRAW.CFG.


         FLOPPY USER INSTALLATION---------------------------INTRODUCTION


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  5



             Make  a working EDRAW disk by first formatting a floppy with
             the  /S  option.   The /S option will place a copy of DOS on
             the disk.

             Insert  the  EDRAW  distribution  disk  into drive A and the
             formatted disk into drive B and enter:

             A: <ret>
             FLINSTAL <ret>


         HARD DISK USER INSTALLATION------------------------INTRODUCTION

             The  following  steps will create an EDRAW sub-directory and
             several  symbol  sub-directories on a hard drive.  The steps
             will also create your first EDRAW.CFG file.

             Insert  the  EDRAW  disk  into  drive A and type [INSTALL1 x
             ret].  The x indicates the fixed drive name.  (Do not type a
             colon after the drive name.)

             Upon  beginning  an  EDRAW session you should make sure that
             the number lock key is not set.

             To run the program enter:
             CD\EDRAW ret
             EDRAW ret


         AUTOMATED DEMONSTRATION(S)-------------------------INTRODUCTION

         EDRAW  contains  one  or  more  automated  DEMOs.   To start the
         DEMOs, see Tutorial section of this manual.


         EDRAW COLOR'S--------------------------------------INTRODUCTION

         EDRAW'S  colors  depend  on the type of graphic card used and on
         parameter settings.

         Except  for  an  Enhanced  Graphic Adapter, the user selects the
         graphic card thru the command line:

             EDRAW <ret>      CGA without a color monitor
             EDRAW /2<ret>    CGA with a color monitor
             EDRAW /3<ret>    Radio Shack RS1000 computer

         Color is automatic on a Enhanced Graphic Adapter.



      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  6



         EDRAW.CFG------------------------------------------INTRODUCTION

         EDRAW  is  a  multipurpose  drawing  program permitting users to
         separate  symbols  thru  sub-directories.   It  is  most conven-
         ient,  but  not necessary for these sub-directory names to be in
         EDRAW.CFG.  EDRAW.CFG  is  an  ascii  file containing path names
         used by EDRAW - it may be edited by the user.

         Fonts  are  a  special class of symbols and their path names are
         also in EDRAW.CFG.

         EDRAW  looks  for EDRAW.CFG first in the current directory, then
         in  the root directory.  Executing EDRAW'S "install" batch files
         will create the users first EDRAW.CFG file on a fixed disk.

         A  user  desiring  to  invent  a new class of symbols like flow-
         charting  or chemistry symbols should use MKDIR in DOS to create
         a  directory,  then insert the new path name into EDRAW.CFG.  In
         EDRAW,  draw the symbols and use F5 in the SYMBOL mode to create
         the  new  library.  Shown  below is an example of EDRAW.CFG on a
         hard disk drive.

                                  .figure SAMPTH

                          -------------------------------
                          |                             |
                          |        UTILITY MODE         |
                          |                             |
                          -------------------------------


         EDRAW ANATOMY--------------------------------------UTILITY MODE

         Edraw   consists   of  five  modes  that  allow users to perform
         various   electronic   drawing functions.   Edraw sessions start
         from  the  UTILITY mode.  From the UTILITY mode, Edraw users can
         enter  WINDOW mode.  Once in WINDOW mode, users can loop or move
         from  the WINDOW mode, to the DRAW mode, to the TEXT mode simply
         by  pressing the F9 key.  While in the DRAW mode users can enter
         SYMBOL  mode  either  by  lifting  an  area of the screen, or by
         pressing  F2.   Pressing  the ESC key from WINDOW, DRAW, or TEXT
         mode will return the user to the UTILITY menu.

         Prompts  are  scrolled  from  the  bottom of the screen.   Users
         should respond to the lowest prompt.

                                  .figure ANATOMY

         Edraw  has several menus that function in approximately the same
         fashion.   The  arrow  keys or the space bar can be used to move
         the  selection bar.  After highlighting the desired menu option,
         users  can  press  the  return  key to perform a menu selection.
         An  example  of  the  UTILITY  menu  appears in the UTILITY mode
         section of this manual.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  7



         Edraw   has   a users menu that appears on the bottom of the CRT
         in  WINDOW,  DRAW,  TEXT,  and  SYMBOL modes.  The users menu is
         found   under   the   solid horizontal line that spans the lower
         portion  of  the  CRT.   The  users  menu contains the most used
         functions  for  each  Edraw   mode  and provides access to other
         Edraw commands available in the current Edraw mode.

         The   lower   right side of the screen will always tell the user
         which  Edraw  mode  they  are  currently  utilizing.  Users that
         have   enabled  Edraw's color capabilities,  will see each Edraw
         mode  presented  in  a  different  color as an extra reminder of
         their current mode.

         Edraw  relies  heavily  on  the  function  keys  as  a  means of
         performing  frequently used Edraw tasks.   Function keys are the
         keys  on  the  left  of  your  keyboard  that  are marked with a
         capital  F  and  a  number  from one to ten.  Users will quickly
         remember  which function keys can be used to perform Edraw tasks
         without  having  to   utilize   the  arrow  keys  to highlight a
         menu   selection.   Due  to  the large number of Edraw commands,
         function keys have different meanings in each mode.

         Edraw  commands  can  be  issued via function keys, number keys,
         word  commands,  or  alphabetic  characters.   Number  keys  are
         located  on  the  top of the keyboard and are different than the
         function keys.

         Edraw's   UTILITY  mode  allows  users  to  perform  many of the
         tasks   required  to  begin  a drawing, to save a drawing, or to
         print  a  drawing.   The  UTILITY  mode  allows users with color
         monitors  to  specify   which  colors they want to appear on the
         CRT   in   various   Edraw  modes,  to  select  the  printer and
         drawing   orientation,  to load and save Edraw drawings, and  to
         display files located on a given drive.

                                  .figure UTILMU


         LOAD A DRAWING-------------------------------------UTILITY MODE

         Drawings  can be loaded from the UTILITY menu by pressing the F1
         key  or  by highlighting the "load a drawing" option either with
         the arrow keys or with the space bar.

         Edraw   will   prompt  the  user  with  "Depress enter to load a
         drawing."  If  you  do  not want to load a drawing you can press
         any  other  key  and  return  to  the  UTILITY menu.  Otherwise,
         pressing   enter   will cause a "file name?" prompt to appear on
         the  CRT.   At  this  point  you  can enter the file name  using
         DOS   format  of D:filename. Edraw will automatically assign the
         required   extensions,  but  will  limit  the file name to seven
         characters.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  8



         After  a  drawing is loaded, the UTILITY menu will appear on the
         CRT.   In  order  to  view the drawing,  select WINDOW mode from
         the UTILITY menu.

         When  saving  a  drawing  or  loading  a drawing the screen will
         temporarily  appear  fuzzy  and  distorted.    This is a natural
         Edraw  occurrence   and will not affect the drawing's resolution
         in future drawing sessions.


         SAVE A DRAWING-------------------------------------UTILITY MODE

         Drawings  can  be saved from the UTILITY menu by pressing the F5
         key   or   by  highlighting  the  "save this drawing" option and
         pressing the return (or enter) key.

         Once  again,   Edraw  prompts  the  user  with "Depress ENTER to
         save   a   drawing."    If  you  do  not wish to save a drawing,
         press  any other key to return to the UTILITY menu.

         At  the  "Filename ?" prompt,  enter  a  drive specification and
         up  to  seven  characters  for a file name.  If you enter a file
         name  with  more  than seven characters,  the save process  will
         be  aborted.   The  drawing still exists, and you should perform
         the   "save"   process   again  with  fewer  characters  in  the
         filename.

         Edraw   only  allows  a seven  letter name to be used for a file
         name,  With  no  three letter extention.  For  every  Edraw file
         that  a  user   saves,  Edraw will create a file  that remembers
         the   drawing's  parameter settings and at least one  file  that
         contains  the drawing.  The parameter settings will be stored in
         a  file  with  a  .PRM  extension.  If  a  user  creates a large
         drawing,   Edraw  may store the drawing in several files.  These
         files  are  automatically  assigned numbers by Edraw and that is
         why  Edraw  files  can  only  be  saved  with  a  name  of seven
         characters  or  less.  Edraw  assigns the last character and the
         extension.

         Drawings  can  be   hierarchical; they can be saved in different
         directories   according   to  a  level.  Create a directory with
         the   directory   name   describing  the top level.  Ensure that
         the  DOS  path  statement knows about the \EDRAW directory - DOS
         needs  to  know  where  EDRAW.EXE  resides.   Go  into  the  new
         directory  and  enter  EDRAW  ret  to run the program EDRAW.EXE.
         Save  your  drawings  with hierarchical names like PAGE1, PAGE2,
         etc.  or  make  further  hierarchical  sub-directories  for more
         drawings.

         EDRAW  does not permit saving into different directories but you
         can  go  to  a  directory  manually  and  operate EDRAW with the
         following requirements:


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  9



             The  path  statement  must  know where the program EDRAW.EXE
             resides.

             EDRAW.CFG  must  be in the current directory - or a copy can
             be  in  the root directory - and EDRAW.CFG must      contain
             the path names of the symbols.


         PRINT A DRAWING------------------------------------UTILITY MODE

         Drawings   can  be   printed   by  pressing   the   F3 key or by
         highlighting   the  "print  drawing"  option   and  pressing the
         return  key.   A printing menu will appear that will allow users
         to   print   Edraw  files  on  a number of printers. Selecting a
         printer   can  be  performed  by using the up and down arrows or
         the  space  bar  to   highlight your printer, or by entering the
         number to the right of your printer.

         When   creating  a  drawing,   determine  which   direction  the
         drawing  will appear during printing.  "Initial draw setup" is a
         method  to  configure the drawing and is discussed later in this
         section.   NORMAL mode orients the  drawing as it appears on the
         CRT,   LANDSCAPE  mode  will  turn  the  drawing  sideways   180
         degrees   during   printing.  Care should be taken to select the
         printer   and   drawing  orientation   during  "initial  drawing
         setup"    because  it  is   not  always  possible  to  re-orient
         drawings once they have been initialized.


         DISPLAY PARAMETERS---------------------------------UTILITY MODE

         DISPLAY  PARAMETERS  option allows users to  view or alter about
         40   variables   that   affect  drawings.   Select   the DISPLAY
         PARAMETERS  option  from the UTILITY menu and use the arrow keys
         to browse through each of the 40 parameters.

         Notice   that   the   40  parameters  are laid out on a  grid of
         five  columns   and   eight rows.   Row one on the grid contains
         parameters  one  through  five,  row  two  on  the grid contains
         parameters   six  through  ten.   The  line  directly under  the
         grid   contains    the   parameter   number  that  is  currently
         contained   in  the  rectangular  parameter  selection box.  The
         four  arrow  keys can be used to  scroll the parameter selection
         box  through  the  grid in any direction. (Some  parameters have
         not been assigned to allow room for future Edraw improvements.)

         Parameters  are further explained in the appendix of the printed
         version of the users manual.



      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  10



         DISPLAY DISK FILES---------------------------------UTILITY MODE

         Edraw  will  display the disk files that are contained on any of
         the  disk  drives.    Users   can   display disk files either by
         highlighting   the  menu  selection  or by  pressing the F7 key.
         After   selecting  the  DISPLAY DISK FILES option, a prompt will
         appear   on  the   lower   portion of the CRT that requests  the
         letter   of  the  drive  whose  files are to be displayed.   You
         should   enter   only  a  letter.  If  a  drive is entered  that
         does   not   exist,  Edraw  session will be  ended  and  control
         will  revert  to  the   default disk  drive.  Do  not worry,  as
         long  as  the power is not interrupted,   Edraw can be restarted
         and  you  can  work  on  your drawing as  it   appeared when the
         DISPLAY DISK FILES command was performed.


         INITIAL DRAWING SETUP------------------------------UTILITY MODE

         INITIAL   DRAWING  SETUP  establishes  the  resolution  of  this
         drawing  -  the  number  of  horizontal  and  vertical bits. The
         resolution  chosen is based on the printer type or printer modes
         that  the  drawing  will be printed on. Once the INITIAL DRAWING
         SETUP  has  been  established  for  a drawing,  it is  fixed for
         that  drawing.  For  schematic  type  drawings  on an Epson type
         printer,   choose   "narrow  carriage  Epson  normal"  or  "wide
         carriage Epson normal".

                                  .figure NORPOR

         INITIAL  DRAWING  SETUP  also  intializes  the  DRAW mode cursor
         indicators UX and UY to read in inches.

         INITIAL  DRAWING  SETUP  is actually changing parameter numbers.
         Parameter  numbers  are  saved with the drawing. The recommended
         procedure  to  draw  many  drawings  based  on  a  unique set of
         parameters  is:  1)  customize  the  parameters,  2)  erase  the
         drawing,  and  3)  save  the  drawing  under  a  dummy name like
         "MASTER" to be used over and over.




                        ----------------------------------
                        |                                |
                        |          WINDOW MODE           |
                        |                                |
                        ----------------------------------


         WINDOW MODE-----------------------------------------WINDOW MODE


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  11



         WINDOW   mode   allows  users  to  pan  through  and  view their
         drawings and to erase entire drawings.

         WINDOW  mode  can  be  entered from the UTILITY mode by pressing
         the   F9  key, by  using  the up arrow or down arrow keys, or by
         depressing   the   space  bar  until  "go  to  WINDOW  mode"  is
         highlighted  and  then pressing the return key.


         PANNING---------------------------------------------WINDOW MODE

         When  in  WINDOW  mode,  users   can   view  their   drawing  by
         pressing  the right, left, up, or down arrow keys.  Edraw allows
         users   to  pan  in any direction  until they reach the edge  of
         their  drawing.

         Pan  through  a drawing, notice the "HSEG" and  "VSEG" variables
         near   the   lower  left  corner  of  your  screen.  These   two
         variables  stand  for  Horizontal sections or Vertical  sections
         of   the  current  drawing. The HSEG and VSEG are measured  from
         the   top   left corner of a drawing and represent the  relative
         position  of your CRT in relationship to a  drawing.

         As   you  establish  your  initial drawing setup, you  will also
         establish   the  number  of  horizontal   and vertical  segments
         spanned   by   your  drawing.   The CRT contains five horizontal
         segments and ten vertical segments.

                                   .figure HVFIG

         The  above  illustration  depicts  the drawing as being fixed in
         place   and   the   CRT   panning   or  scrolling over the fixed
         drawing.

         HSEG  and  VSEG variables are always visible in the WINDOW mode.
         In  DRAW  mode,   TEXT   mode,   and  SYMBOL mode, HSEG and VSEG
         variables   appear   whenever  panning  causes  Edraw  to  enter
         another Vertical or Horizontal segment.


         ERASE ENTIRE DRAWING--------------------------------WINDOW MODE

         In  WINDOW  mode, pressing  F1  will allow the user  to erase an
         entire  drawing.   This  is a two-step task.  Edraw will ask you
         if  you  want  to  erase  the  whole  drawing. This  is the only
         means   through   which you can erase drawings  that you wish to
         discard.  (DRAW mode contains several methods to erase a portion
         of a  drawing.)

                                   .figure UMWID


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  12



         NEXT  MODE  appears  on the screen's lower right corner whenever
         a  user  is  in  WINDOW,  DRAW,  SYMBOL, or TEXT mode.  Pressing
         F9   in   WINDOW,   DRAW,   or  TEXT mode advances the user into
         the next Edraw mode.


         IMPORT----------------------------------------------WINDOW MODE

         Importing  of  screen  images  that  were  developed  with other
         programs  is  possible using two methods:  importing BSAVE files
         and   importing   screen-capture  files  from  a  screen-capture
         program.

         All  importing  of  screen  images  is implemented in the WINDOW
         mode.

         A  BSAVE  -  binary  save  -  screen image may be from a drawing
         program  like  PC PAINT, PC-KEY-DRAW or may be your own designed
         picture  using  BASICA.   To  load, depress CTRL L and enter the
         complete  filename  of  the  BSAVE  file.   To  place the screen
         picture  on  EDRAW's picture depress CTRL N for normal or CTRL I
         to invert the picture.

         Loading  screen-capture pictures is also very simple.  Using the
         screen-capture  instructions (from your screen-capture program),
         place  the desired picture on the screen in the WINDOW mode.  To
         place  the  screen picture on EDRAW's picture depress CTRL N for
         normal  or  CTRL  I  to  invert  the  picture.  A tested screen-
         capture  program  is  FRIEZE  by ZSOFT INC. and will load PAINT-
         PRUSH xxxxxx.PCX files.


                        ----------------------------------
                        |                                |
                        |           DRAW MODE            |
                        |                                |
                        ----------------------------------


         DRAW MODE SUMMARY-------------------------------------DRAW MODE

         F2 SYMBOL moves the user into SYMBOL mode.

         F3  UNDO erases the work that has been completed since:

              1.  the user pressed F10 HELP in DRAW mode;
              2.  the user pressed F5 FILL in DRAW mode; or
              3.  the user last panned.

         F5  FILL  shades  an  enclosed  area  and  asks  if the  user is
         satisfied.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  13



         F7 HORIZONTAL alters the width of horizontal lines.

         F8 VERTICAL alters the width of vertical lines.

         F9 NEXT MODE advances users to TEXT mode.

         CTRL(Z) places electrical short at cursor location.

                                   .figure SHORT

         CTRL(D) deletes electrical short from cursor location.

         F10  HELP  provides  a  menu  driven  list of DRAW mode commands
         shown below.

                                  .figure DRHELP

         To erase an area or lift an area in the DRAW mode:
              1)    Depress  the "INS" key in the upper left corner of an
                    imaginary box.

              2)    Move  the  cursor  to the  lower  right corner of the
                    imaginary box and depress F10.

              3)    Highlight  "erase  an  area"  or  "lift  an area" and
                    depress RETURN.


         WORD COMMAND SUMMARY----------------------------------DRAW MODE

         CLRCRT                                          erase the CRT.

         ERASE or ER                                     erase  imaginary
                                                         box      between
                                                         checkmark    and
                                                         cursor.


         LIFT            lift  area  enclosed  in  imaginary  box between
                         checkmark and cursor.


         USERZERO        force UX and UY to reference this location.


         MAGNIFY         magnify 40 by 32 area or modify pixel bits.


         DOTTED                                          draw  all  lines
                                                         dotted.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  14




         SOLID                                           draw  all  lines
                                                         solid.


         The   F9  key allows users to loop from WINDOW, to DRAW, to TEXT
         mode.   From  WINDOW  mode  users  should press F9 to enter DRAW
         mode.


         CHECKMARK / CURSOR------------------------------------DRAW MODE

         DRAW  mode  screen  tools  consist  of  a checkmark and a cross-
         hair  cursor.   The cross-hair cursor is moved by the arrow keys
         and the checkmark is placed on the cursor with the INS key.

         PARAMETER  5  controls  how many bits the left  and  right arrow
         keys   and  the  "<"  or  ">" symbols will move the cursor. (See
         Parameters section  of this manual.)


         DRAWING/DELETING LINES--------------------------------DRAW MODE

         Depressing  the  RETURN  key,  the  letter "v" or the letter "V"
         will  draw  a  line  from  the  checkmark   to  the cursor.  The
         checkmark    will    automatically   follow  this  line  drawing
         request.   To draw a line from the checkmark but to maintain the
         checkmark location, use the digit 3.

         In   the   DRAW  mode, the letter "p"  will  draw parallel lines
         (vectors).    The  "p" command will draw a line that is parallel
         to the last line or vector that was drawn.

                                  .figure PARALL

         In  the  DRAW  mode,   the  DEL   key   or   digit  9 will erase
         anything  on  a  straight   line  between  the checkmark and the
         cursor.    The  DEL   key   erases   the   line   and  moves the
         checkmark  to the cursor.   Digit  9 erases  the line and leaves
         the  checkmark  at  the  same  end  of  the line  to  be erased.
         Since   Edraw  can   display  only  two  colors, erasing  a line
         through  a  shaded  box  will have the same result  as drawing a
         contrasting line  through the box.


         BOXES AND CIRCLES-------------------------------------DRAW MODE

         In   the   DRAW  mode,   users   can   place  the  checkmark and
         cursor   at  opposite  corners of a desired  box  and  press the
         "["  or  the "]" key. Edraw will  automatically  draw a box with
         the checkmark  and the cursor at opposite end of the box.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  15



         To   draw  circles, place the  checkmark  in the  desired center
         of  a  circle,   move   the cursor  horizontally to the edge  of
         the   desired   circle,   and   enter  "(" or ")". When  drawing
         circles,    it    is   essential   that  the  cursor  is  placed
         horizontally  to  the  checkmark  located  in  the center of the
         desired  circle.

                                   .figure CIRCL


         ERASE-------------------------------------------------DRAW MODE

         In  DRAW  mode,  CLRCRT  will erase or clear the entire CRT. The
         CLRCRT   command  will be visible on the lower left hand side of
         the  CRT  as  you  type.   Also,  the CLRCRT command clears only
         the   space   displayed   on  the  CRT.  The ERASE  word command
         erases   everything   contained  inside  the  area  between  the
         cursor   and   the   checkmark.  Often  it is desirable to erase
         many  small  areas  of a  drawing. In WINDOW mode the F1 command
         allows users to erase an entire drawing.

         The  ERASE  command  can  be found on the F10 HELP menu in  DRAW
         mode,  or  can  be  executed  by   typing ERASE from inside DRAW
         mode.   Regardless  of  which  method   is  used to execute  the
         ERASE   command,  only   the  square or rectangular area between
         the checkmark and the cursor will be erased.


         MOVE / COPY-------------------------------------------DRAW MODE

         Edraw   has   four  related  MOVE  commands that enable users to
         move  areas  that  are  larger than the CRT.  These commands can
         be   located   on   the  F10  HELP  menu  in  the DRAW mode. All
         four   of   the  MOVE commands operate  by Edraw asking the user
         to  place  the  checkmark  on  one corner of the large area they
         wish  to  move,  then asking the user to place the cursor on the
         opposite    corner   of the area to be moved, and finally asking
         the   user  to  place  the cursor on a new corner location where
         he  would   like   the  marked  area  to  be  placed.  Watch the
         prompts closely!

         With  all  of  the  MOVE or COPY commands, pressing ESC from any
         point   inside   the  command  will abort the command and return
         the user to the DRAW mode.

         Edraw   also   enables   users   to  copy  square or rectangular
         areas  that  are   larger  than  the CRT screen.  The COPYRIGHT,
         COPYLEFT,  COPYUP,  COPYDOWN  commands   operate  identically to
         the  MOVE  commands  except  for  the fact that they copy rather
         than move a  section  of the drawing.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  16




         HELP MENU---------------------------------------------DRAW MODE

         After  learning several of  EDRAW's  commands, the F10 HELP menu
         should  be recognized  as  another means of executing these same
         DRAW   mode    commands    or   as  a  reminder  of   DRAW  mode
         commands.   Press  F10, and scan the list of DRAW mode commands.
         Use  the  up  and  down  arrow  keys or the space bar to  scroll
         through   the   DRAW  mode command menu.   These commands can be
         performed   by  highlighting  the  desired   task  and  pressing
         RETURN.   Alternatively, users can enter the HELP menu simply to
         remind  themselves  of a command and then enter ESC to return to
         their drawing.
                                  .figure DRHELP

         FILL AN AREA------------------------------------------DRAW MODE

         The  F5  key allows users to fill in an enclosed area. Place the
         cursor  inside an enclosed  area and press the F5 key. After the
         area  has been filled, Edraw will prompt you with a beep and ask
         if  you are satisfied.  If you are not satisfied enter a "n" and
         Edraw  will  erase  the  filled area. If you try to fill an area
         that  is  not completely enclosed, Edraw  will  paint the entire
         CRT.


         HORIZONTAL & VERTICAL WIDTH---------------------------DRAW MODE

         F7  allows  users  to  adjust the horizontal width of lines. The
         default   value  for horizontal width is 1,  and the upper limit
         on horizontal width is 10.

         As  you press F7, notice the  "enter a new horizontal line width
         (1-10)?"   prompt.   Enter   a number between 1 and 10 and watch
         that  number   displayed   above  the  "F7horiz".   This  is the
         width  that horizontal lines will be drawn until F7 is reset.

         In   DRAW  mode,   F8   adjusts   the  vertical width of a line.
         Vertical  widths  default  to  1,  and can be set as high as 10.
         Vertical  width  and   horizontal   width  command sequences and
         prompts  are  almost identical.

         F9 allows the user to loop from DRAW mode, to TEXT mode.


         MICRO-POSITIONING-------------------------------------DRAW MODE

         In  DRAW,   SYMBOL,   and  TEXT modes, users can greatly enhance
         their  ability   to  control  the cursor by pressing  the  shift
         key  and  an arrow key at the same time ( or shift key and mouse
         movement).  In DRAW and SYMBOL modes,  all  four arrow  keys can
         be  utilized  in  conjunction  with the shift keys and allow the
         user to move the cursor in minute increments.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  17



         In  TEXT  mode  only  the  up and down arrow keys can be used in
         conjunction  with  the  shift  key.   In DRAW mode, pressing the
         HOME   key   will   return   users  to  the nearest Edraw    co-
         ordinate.    Each   time   users  enter  DRAW,   SYMBOL, or TEXT
         modes,  the  cursor  will   be   positioned   on  the coordinate
         closest to the cursor.

         Keeping   the   cursor   on   coordinates   will  make   editing
         sessions  proceed  faster  since  the  arrow keys  automatically
         move   on   the   coordinates.   Press   HOME   to  position the
         cursor  on the  nearest coordinate.


         LIFT--------------------------------------------------DRAW MODE

         When  in  DRAW mode,  the checkmark and cursor hairs can be used
         to  specify   a  section of the drawing to be moved or copied to
         another  location.   The  LIFT command is useful only for  areas
         that   are  smaller   than  the CRT.    This can be accomplished
         via   the  LIFT command or the "Lift an area, go to symbol mode"
         option  located  on  the  F10 HELP menu.   The LIFT command will
         include  all  of  the  area  bounded  by  the  checkmark and the
         cursor.   Using the PUT command would  cause the user to overlap
         a  section  of  a drawing with whatever was included in the lift
         area.


         MAGNIFY-----------------------------------------------DRAW MODE

         The  MAGNIFY  word  command  or the MAGNIFY AN AREA command that
         is    found   on  the  F10 HELP menu allows users to turn pixels
         on   or  off inside a 40 by 32 pixel area of the CRT. Once users
         have  magnified  this  area, the arrow keys are used to position
         the  cursor  on a pixel. F5 will turn the pixel under the cursor
         on  or  dark,  while F6 will turn the pixel under the cursor off
         or light colored.

         Users  can  magnify  any  40  by 32 pixel area on the CRT.  Pos-
         ition  the   cursor  just  above and to the left of the 40 by 32
         area  to   be  magnified.    In   order  to closely position the
         cursor,  you  might  utilize   DRAW   mode's   MICRO POSITIONING
         features.

         ESC  is  used  to  move  out of MAGNIFY and back into DRAW mode.
         Users  can  move  back  and  forth between  DRAW  mode and CAPS.
         Finally,  users   can   utilize   Edraw's  SYMBOL mode to save a
         magnified area (or any area) of an EDRAW drawing to a library.

                                  .figure MAGNIFY


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  18




         HSEG VSEG---------------------------------------------DRAW MODE

         HSEG    stands    for    horizontal   segments  and   references
         horizontal  locations  within  a   drawing.   A  drawing's  left
         border   will  be  located  in  HSEG zero.   As the user pans to
         the  right  128 bytes, HSEG will update in increments of 1.  For
         example,  if  the  value  of  HSEG was 6, the user would know he
         Was  approximately  768 bytes to the right of the drawing's left
         border.

         VSEG     stands     for   vertical   segments   and   references
         vertical  location  within a  drawing.   A drawing's  top border
         will  always   be located in VSEG  zero.   Vertical segments are
         measured  in  increments  of  16.  A VSEG of 10 implies that the
         user  was  approximately  160  bytes  below  the  drawing's  top
         border.


         UX UY DIFF--------------------------------------------DRAW MODE

         UX   measures   horizontal   distances.   UY  measures  vertical
         distances,  and   DIFF  measures   the   distance   between  the
         checkmark  and the cursor.

         When   users  perform INITIAL DRAWING SETUP in the UTILITY mode,
         Edraw  automatically  sets parameters 21 and 22 so that UX,  UY,
         and   DIFF   represent  inches  on  the type of printer that the
         drawing  will  eventually be printed from.   When UX equals 3.5,
         this  means   the cursor  location  would be 3.5 inches  to  the
         right  of  the   printed  drawings leftmost edge. If UY  equaled
         8.0,   the   cursor   location  would  correspond  to a location
         eight  inches  below  the top  margin on  a printed page. A DIFF
         of  5.75  would  mean that the distance between  the  cursor and
         checkmark would be 5.75 inches apart on the printed drawing.

         It  is important that users recognize that UX, UY, and DIFF will
         be  accurate   only  for  the  printer  that was selected during
         INITIAL  DRAWING SETUP.  If users do not perform INITIAL DRAWING
         SETUP  at  the  start  of a drawing,  Edraw will present UX, UY,
         and  DIFF  in  pixels.  (This  manual's PARAMETERS  sections  21
         and   22   contain more  detailed information that describes how
         users can  define their own scale for UX, UY, and DIFF.)




                          -------------------------------
                          |                             |
                          |         TEXT MODE           |
                          |                             |
                          -------------------------------


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  19




         TEXT MODE SUMMARY-------------------------------------TEXT MODE

         F1   SET   TAB  will  set  a  tab to the column where the cursor
              box  is located.


         F2   CLEAR TAB clears all existing tabs.


         F3   Establishes 10 evenly spaced tabs across the CRT.


         F6   Opens path for fonts.


         F9   NEXT mode advances users to WINDOW mode.



         TABS--------------------------------------------------TEXT MODE

         In  TEXT  mode,  F1  will   set   a  tab to the column where the
         cursor  is  located.    Users  can  set one or more tabs to help
         them   position  text upon their  drawings.  Once a tab has been
         set,  pressing  TAB will  cause  the  cursor to move to the next
         tab  setting  on  the  current line.  The RETURN key will  cause
         the  cursor  to move to  the  next line and be positioned on the
         leftmost tab setting.

         In  TEXT  mode,   F2  clears any previously set tabs.  Users can
         set and reset tabs as often as they wish.

         F3   will  set  ten evenly spaced tabs.  F3 first eliminates all
         previously  set   tabs   and  then establishes ten evenly spaced
         tabs.   F3  provides  a rapid  mechanism  for  moving the cursor
         horizontally across TEXT mode screens with  the TAB key.

         On  a  given  line,  users  can move  right  one tab position by
         pressing  the  TAB  key.    Pressing  the  SHIFT key and the TAB
         key  simultaneously  will move the cursor one tab setting to the
         left.


         A BUZZING REMINDER------------------------------------TEXT MODE

         A  warning  buzzer  can be set by pressing the END key while the
         cursor   is   positioned   in the desired location. For example,
         users  might  press  the  END key in column 55. Once the END key
         has  been  pressed,   Edraw will buzz at users that try to enter
         text  or  blank spaces in or past column 55.  The  F2 CLEAR TABS
         FUNCTION is used to remove the warning buzzer.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  20



         If  users  wish   to  enter a large amount of left-aligned text,
         they  should   clear  all  tabs via F2,  set another tab to  the
         desired  location   via  F1,   and  then  begin  to  enter their
         text.    At   each  carriage  return,  the  cursor will move one
         line   down  and rest at the desired tab setting.  If users wish
         to  left-align  text   within  box  (or  any  other  shape) in a
         drawing,   the  warning buzzer can be set to buzz when text gets
         close to the right boundary of the box.


         FONTS-------------------------------------------------TEXT MODE

         Depressing  F6  in  the  TEXT mode will request that a font path
         be   selected.    EDRAW  looks  for  EDRAW.CFG  in  the  current
         directory,   then   in   the  root  directory  to  read the path
         names.   Refer  to EDRAW.CFG in the introduction section of this
         manual.

                                   .figure FONTS

         All  fonts  can be micro-positioned by holding the SHIFT key and
         an  arrow  key.   Fonts 1, 2, and 3 are variable spaced - future
         editing  will require the user to use micro-positioning to place
         the  cursor  on  the desired character.  Fonts 4 and 5 are fixed
         spacing - micro-positioning not as important.

         F1  is  used  to  set  the  left  margin.  Depressing the RETURN
         during  the  typing  session  will  move  the cursor to the left
         margin even if the user types beyond the current screen.

         F8  while  in  FONT  mode  will  return  the user back to normal
         typing.

         Use  the  DELETE  key  to delete a character at the cursor.  The
         DELETE key deletes more than the space bar.



                          -------------------------------
                          |                             |
                          |         SYMBOL MODE         |
                          |                             |
                          -------------------------------


         SYMBOL MODE SUMMARY---------------------------------SYMBOL MODE

         F1  PUT   affixes  an  area  from the computer's memory onto the
         drawing.   It  treats   the rectangular shaped area to be PUT on
         the  drawing  as  if  it were a solid piece of paper being glued
         on top of the drawing.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  21



         F2(or  RETURN)  PUT  OR   affixes  an  area  from the computer's
         memory  onto   the  drawing, but  treats the  rectangular shaped
         area  to be PUT on the drawing as if it were a transparent piece
         of paper being glued on top of the drawing.

         F3   LIFT(XOR)   performs   an  XOR function of the symbol  onto
         the drawing.

         F4   LOAD   SYMBOL   retrieves   a  frequently  used symbol from
         disk.

         F5 SAVE SYMBOL saves a frequently used symbol to disk.

         F6  OPEN  PATH opens a path for symbols.  Different type symbols
         can be saved in different directories.

         F7 FLIP X rotates a symbol horizontally 180 degrees.

         F8 FLIP Y rotates a symbol vertically 180 degrees.

         F9 returns user to DRAW mode.

         ESC returns user to DRAW mode.

         SPACEBAR  loads next symbol of like name from disk. If user used
         F4 to load BOX0, then depressing the SPACEBAR will load BOX1.

         BACKSPACE  same  as  SPACEBAR  except in the other direction. If
         last  symbol was a BOX7, then depressing the BACKSPACE will load
         BOX6.


         SYMBOLS---------------------------------------------SYMBOL MODE

         Symbols   are  rectangular  areas  of  a drawing that a user can
         specify.   While   the   user   is   most  interested within the
         symbol   inside   the  rectangle,  Edraw   treats   the   entire
         rectangle  as  a  symbol.  Once  a user defines a rectangle that
         contains  a  symbol   of  interest,  this  symbol  can be moved,
         copied,  flipped  horizontally,  flipped  vertically, saved to a
         disk, and recalled from the disk and placed upon a drawing.

         Users   can   invoke the LIFT command either by highlighting the
         LIFT  AN  AREA,  GO  TO SYMBOL MODE menu option that is found on
         the   F10  HELP  menu from DRAW mode, or by typing "LIFT". Prior
         to  invoking  the  command, the lift area must be enclosed in an
         imaginary box between the checkmark and curser.

         The  cursor   or   symbol   does  not  become  part of a drawing
         unless   it   is   PUT  on  the  drawing.   In  SYMBOL  mode the
         current   symbol  will begin to blink to help users identify the
         current  symbol.   Just because you see the symbol on the screen
         does   not   imply   that  it  will be printed on your program's
         output.    After  positioning  a symbol to a desired location on
         the drawing the user must PUT  the symbol on the drawing.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  22




         PUT SYMBOLS-----------------------------------------SYMBOL MODE

         In  SYMBOL  mode,  F1  and  F2  allow  the  user to PUT a symbol
         on  his drawing.  The RETURN key is equivalent to the F2 key and
         is the normal method of placing symbols.

         F1  treats  the  symbol  (actually a rectangular group of binary
         bits)  as   a   solid   patch   of  paper that is placed over an
         area   on   an  existing  drawing.    Using  F1  to PUT a symbol
         (rectangular   patch   of   binary   bits)  onto  a drawing will
         cover  portions  of   the   existing  drawing.  In the following
         figure  a  resistor  is placed over a line - without erasing the
         line  - with the F1 key; and a buffer is replaced by an inverter
         - without removing the buffer - with the F1 key.
                                  .figure EXSYF1
         F2  (or  the  RETURN  key)  treats   the   symbol   (actually  a
         rectangular  group of binary bits) as  a  transparent sheet that
         contains  the  symbol.  Using  F2 to PUT a symbol will not block
         the   existing  drawing  with blank sections of the symbol. F2 (
         or  RETURN  )  is  the  normal method of placing a symbol on the
         drawing.

         After  using  either  F1 or F2  to  PUT a symbol on the drawing,
         the  four arrow keys can be used to move copies of the symbol to
         other  locations  on the drawing.   Remember, only those symbols
         that  have  been  PUT  onto  a  drawing  will become part of the
         drawing.

         If  a  symbol is placed  directly above an identical symbol that
         has  already  been  PUT  onto  a drawing, then both symbols will
         temporarily   disappear.   Moving  the  cursor or symbol off the
         identical   shape   on   the  drawing  will  leave  the  drawing
         unchanged.


         F3 XOR----------------------------------------------SYMBOL MODE

         In  SYMBOL  mode, F3 performs an XOR function of the symbol onto
         the  drawing.   (XOR   performs  a bit for bit comparison of the
         symbol's  and  drawing's  bits  that are covered by the symbol.)
         By  placing  an identical  symbol on top of a symbol that exists
         on  a  drawing,   F3  can  be  used  to  erase  and/or  move the
         symbol.    Prior   to   pressing  F3,   users should position an
         identical  symbol  on  top  of the  portion of the drawing to be
         erased  or  moved.   When the shapes disappear, pressing F3 will
         erase or lift the symbol off the drawing.


         LOADING SAVED SYMBOLS-------------------------------SYMBOL MODE


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  23



         In  SYMBOL  mode,   F4  allows  users  to  load previously saved
         symbols.  Upon   pressing  the  F4 key,  Edraw will ask the user
         for  the  name of the previously saved symbol with the following
         prompt:"Symbol?"  If   the  desired symbol is not located on the
         default   disk,   users  should  include the drive specification
         before  the   symbol's   name.  If the symbol exists,  the named
         symbol will appear on the CRT and become the active symbol.

         If  the  symbol  does  not  exist,  Edraw will instruct the user
         that  the  symbol does not exist, and prompt the user to press a
         key to return to SYMBOL mode.

         Edraw  will  append  the  extension  ".SYM"  to  the symbol load
         request if the USER does not supply an extension.


         Edraw is compatible with other software developer's symbols: PC-
         KEY-DRAW's  and DRAW-IT's ".PIC" files.  To load, depress F4 and
         enter  the  symbol name including the extension.  EDRAW crashing
         while  attempting  to load an incorrect file is an indication of
         incompatability.


         SAVING SYMBOLS--------------------------------------SYMBOL MODE

         In  SYMBOL  mode,   F5  allows  users to save symbols to a disk.
         Users  might   create  a frequently used symbol in DRAW mode and
         then  enter  SYMBOL  mode in order to save the symbol to one  of
         their  libraries.  To  save symbols to a library, press  F5  and
         Edraw  will   prompt  for the name of the symbol  by  "symbol?".
         You  may  respond   with  or  without a  drive  specification in
         standard  DOS  format. If no drive is included,  the symbol will
         be   saved  to   the  default  drive.   EDRAW  will  append  the
         extension ".SYM".

         Symbol  names  can  be grouped as to function. To group symbols,
         reserve  the  last  character  in  the symbol name as a pointer.
         Name  your  Symbols  XXXXX0,  XXXXX1,  XXXXX2, XXXXX3 etc.. This
         scheme  can  continue  on  thru the ascii alphabet and can start
         anywhere - RESISA, RESISB, RESISC, RESISD etc..

         If  the  last  F4  loaded symbol was XXXXX0, then depressing the
         SPACEBAR  key would automatically load XXXXX1.  The SPACEBAR key
         and  the  BACKSPACE  will  automatically move the user thru this
         family of symbols.


         F6 OPEN SYMBOL PATH---------------------------------SYMBOL MODE

         Depressing  F6  in  the  SYMBOL  mode will request that a SYMBOL
         path  be  selected.   EDRAW  looks  for  EDRAW.CFG  for the path
         names.    See   EDRAW.CFG   in    INTRODUCTION  section  of this
         manual.   Users  should separate different type, of symbols into
         different directories.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  24



         For  example,  flowchart  symbols  are  not  provided  by  EDRAW
         because  they  can  be  easily  designed by the user - boxes and
         triangles.  Using DOS, create a directory called FLOWC and place
         this  path  name into EDRAW.CFG.  Draw your boxes and triangles,
         use  F6  in the SYMBOL mode to open the FLOWC path and save your
         boxes  and  triangles.   Design several size boxes and name them
         BOX0  thru  BOX5.  When  you  need  a box, depress F4 and answer
         BOX0,  then  use the SPACEBAR key or the BACKSPACE key to select
         the  desired box. Use the same method to design decision boxes -
         TRIANG0, TRIANG1,TRINAG2 TRIANG3 etc..



         AUTOMATED DEMONSTRATION-------------------------------TUTORIAL

         Emark  Systems  provides  one  or  more  automated demonstration
         tutors.    These  are  named  Edemo1,  Edemo2.....  To  start  a
         demonstration   reboot  computer  to  remove  all  stay-resident
         drivers then

         floppy user:     insert installed disk into drive A
         floppy user:     A: <ret>

         hard disk user:  C: <ret>         your hard disk drive
         hard disk user:  CD\EDRAW <ret>


         EDEMO1 (ret).
         Press  any  key  to  advance past the copyright notice. From the
         UTILITY   menu,   press   CTRL   O  (the  letter).  Advance  the
         demonstrations  with  the  space  bar.  To  stop a demo, depress
         CTRL, ALT, DELETE - reboot computer - and remove the disk.


         MANUAL TUTORIAL----------------------------------------TUTORIAL

         The  next  section  is  a  walk-thru  tutorial.  Note:  on  some
         keyboards the RETURN key may be labeled  ENTER, RETURN or RET.

              With  EDRAW disk 1 in your default drive enter EDRAW (ret).
              Depress any key to advance past the copyright notice.

         The next display is the UTILITY mode display.

              Press   the   space   bar  several  times  to  observe  its
              positioning  effect.  Now press the up and down arrow keys;
              they also allow selection of a utility.


         The RETURN key would execute the highlighted task.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  25



              Highlight  the  "GO  TO WINDOW MODE" option. Notice the key
              F9  would  also  move  you  to  the  WINDOW mode. Press the
              RETURN key to go to the WINDOW mode.

         At this time you may observe gibberish on the screen.

              Press F1 and the RETURN key to erase the drawing.

         You  should  note that the F1 key in the WINDOW mode is the only
         way to erase the entire drawing.

              Press F9 several times or hold F9 down.

         Notice  on  the  lower  right  corner  the 3 modes you are going
         thru:  DRAW, WINDOW, and TEXT. DRAW is used to draw lines, etc.;
         WINDOW  is used to scroll or pan; and TEXT is used to enter text
         or written information.

              Press the ESC  and you should be back in the UTILITY mode.

         The  ESC key in TEXT, WINDOW, DRAW modes will  return you to the
         UTILITY mode.

              Press F9 until you enter DRAW mode.  Press the INS key.

         You  have  positioned  the  mark  at  the  cursor  position. All
         drawing  functions  reference  this mark. Move the cursor to the
         right  until  UX on the screen reads 480. Now press the "V" key.
         You  have  drawn  a line from left to right. The RETURN can also
         be used to draw from the mark to the cursor.

              Press F10(the HELP key).

         The  HELP  key  provides  a  list of functions that can be  per-
         formed.  On  the  right  is  the key or  word command that would
         execute  this function.  You previously  pressed the INS and "V"
         which  are "insert mark here" and  "draw from mark to here".  As
         you  learn  more  EDRAW commands, you will have to return to the
         HELP menu less and less.

              Use  the  ESC key to exit the HELP mode without executing a
              HELP function.

         The  following tutorial section assumes that you are in the DRAW
         mode.

              Move  the  cursor  somewhere  to the left on the CRT. Press
              the INS key. Now move the cursor to the right and down.

              Press  the HELP key(F10) and select "draw a box". Press the
              RETURN key.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  26




         You  have made a box (note: you could also have typed "[" or "]"
         directly in the DRAW mode to draw the box).

              Now  let's lift the box. Press the INS key  with the cursor
              on  a  corner.  Move  the cursor to the opposite corner and
              press  the  HELP  key.  Highlight  "lift  area"  and  press
              RETURN.

         Notice  that  you  are in the SYMBOL mode and your symbol is the
         box.   You have  lifted the box and anything that you might have
         drawn inside  the box.

              With  the arrow keys, move the box to the right a few steps
              and  observe  that  it  is  lifted.  The symbol can also be
              moved  left  and  right  with the keys "<" ">" (without the
              SHIFT  key). Experiment with these keys and notice that the
              symbol  can  be moved much faster with these keys. Press F2
              to  place  the box on the drawing. Move and place boxes all
              over  the screen with the F2 key. The F2 key merges the box
              with  the  screen.  The  RETURN  key  can  also be used and
              functions like the F2 key. Press the ESC key.

              Use  the  ESC key or the F9 key to exit the SYMBOL mode and
              return to the DRAW mode.

         Read  the  bottom  function  key description line. F2 is labeled
         SYMBOL;  this  means  that  pressing F2 will also place you into
         the SYMBOL mode.

              Press F2.

         While  you  are  in  the SYMBOL mode, notice the bottom function
         key  description  line.  The  box  that  was  made into a symbol
         previously could be saved with the F5 key.

              Press  F6  to open a SYMBOL path.  Select GATES and depress
              RETURN.

              Press  F4  at  this  time and answer BUFF1 for the filename
              request.  Depress  the  SPACEBAR  key and the BACKSPACE key
              and  notice  an  automatic  loading  of symbols.  Move this
              symbol  with  the arrow keys and PUT it on the drawing with
              the  RETURN key. At this time exit the symbol mode with the
              ESC key.

              Your  drawing area is probably filled with boxes and lines.
              Press  the  HELP  key.  Locate  and  execute the "erase crt
              area".


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  27



         This is the end of the manual tutorial - "Many happy drawings."




         MOUSE SUPPORT--------------------------------------------------

         Edraw   has  been  tested  and  works  well  with  Mousesystems,
         Microsoft,  Radio  Shack, Logitech, and AT & T mice.  Many users
         who  have  used  Edraw in conjunction with a mouse have realized
         significant savings in time.

         The  mouse  interface  which  Edraw uses to control the mouse is
         provided  by  the  mouse  manufacturer  through  a device or DOS
         resident   program.    Edraw  looks  for  this  support  through
         interrupt  33H.   Edraw  is  compatible with the following mouse
         software:

              Mouse.com           Microsoft Corporation
              Msmouse.com         Mouse Systems Corporation

         or   any   software  that  is  compatible  with  the  above  two
         drivers.   Type  MOUSE  <ret>  or  MSMOUSE <ret> to activate the
         mouse driver.


         The mouse buttons issue the following commands to EDRAW:

         LEFT BUTTON      The  left  button  is  equivalent to the RETURN
                          key.   Edraw  menus  can be selected with mouse
                          movements and executed with the left button.

                          In  DRAW  mode,  the  RETURN key can be used to
                          draw  a  line - the left button is a convenient
                          "draw line from checkmark to cursor" command.

                          In  SYMBOL  mode,  the return key is equivalent
                          to   the   F2  key  -  the  left  button  is  a
                          convenient "place symbol on drawing" command.

         MIDDLE BUTTON       INS key

         RIGHT BUTTON        F10 or help menu


         The  Radio Shack mouse installation requires users to add a line
         to  the  DOS  file that is named CONFIG.SYS  Using the editor of
         your   choice   (or  EDLIN),  add  the  following  line  to  the
         CONFIG.SYS file.


      Copyright (C) 1985,1986 Emark Systems.       11-09-1987  page  28



         DEVICE=MOUSESYS

         The  AT  &  T  mouse  that  is attached to the keyboard does not
         require any setup procedures.

              If  you  find mouse actions to be reversed - up is down and
              down  is  up  -  then the mouse driver has been incorrectly
              programmed.    Contact   your   mouse   manufacture  for  a
              corrected version of MOUSE.COM or MSMOUSE.COM.


         PROBLEMS-------------------------------------------------------

         1)   The  INS  key  and  arrow  keys  do not work.  Check number
              lock.

         2)   Edraw  doesnt  work.  Three  reasons are not enough memory,
              not  a  Color  Graphic  Adapter  (CGA)  or  not  an IBM  or
              compatible.

         4)   I  loose  part  of  the printout on the H.P. laser printer.
              The  HP  Laser  Printer  must  be  the  PLUS  version which
              contains more memory.

         5)   What  do  I do if Edraw crashes?  Not to worry.  Check that
              your  are  in  the  directory that you should be in and re-
              enter Edraw.  The drawing should still be in memory.

         4)   The  demonstration  programs fall apart after running a few
              minutes.   The  demo  programs  assume  that "GATES" is the
              first   SYMBOL   selection   in   the   configuration  file
              EDRAW.CFG.  and  that  EDRAW.CFG  exists. Configuring EDRAW
              other  than  thru  the  Emark Systems install procedures is
              permitted but the demonstrations will not work.


      INDEX
      BACKSPACE, 21, 23, 24, 26
      BOXES, 1, 14, 24, 26
      BUZZING, 19
      CHECKMARK, 13, 14, 15, 17, 18, 21, 27
      CIRCLES, 1, 14, 15
      CLRCRT, 13, 15
      crash, 23, 28
      DELETING, 14
      DEMONSTRATION, 5, 24, 28
      DIFF, 4, 7, 8, 18, 21, 23
      EDRAW.CFG, 4, 5, 6, 9, 20, 23, 24, 28
      ENHANCED, 1, 3, 5
      ERASE, 10, 11, 12, 13, 14, 15, 16, 22, 25, 26
      ESC, 2, 6, 8, 15, 16, 17, 18, 21, 25, 26
      F1, 7, 11, 12, 13, 15, 16, 17, 19, 20, 21, 22, 25, 26, 27
      F10, 12, 13, 16, 17, 21, 27
      F2, 6, 12, 19, 20, 21, 22, 26, 27
      F3, 9, 12, 19, 21, 22
      F4, 21, 23, 24, 26
      F5, 6, 8, 12, 16, 17, 21, 23, 26
      F6, 17, 19, 20, 21, 23, 24, 26
      F7, 10, 13, 16, 21
      F8, 13, 16, 20, 21
      F9, 6, 11, 12, 13, 14, 16, 19, 21, 25, 26
      FLIP, 21
      FONTS, 1, 2, 4, 6, 19, 20
      GATES, 26, 28
      HELP, 12, 13, 15, 16, 17, 19, 21, 25, 26, 27
      home, 4, 17
      HSEG, 11, 18
      IMPORT, 12, 18, 20
      INCHES, 10, 18
      INITIAL, 9, 10, 11, 18
      INSTALLATION, 4, 5, 27
      LIFT, 6, 13, 17, 21, 22, 26
      LOAD, 1, 7, 8, 12, 21, 22, 23, 26
      LOADING, 22, 26
      MAGNIFY, 13, 17
      MICRO, 3, 16, 17, 20, 27
      mouse, 1, 3, 16, 27, 28
      PANNING, 1, 11
      parameter, 5, 8, 9, 10, 14, 18
      PATH, 6, 8, 9, 19, 20, 21, 23, 24, 26
      PRINT, 1, 2, 3, 7, 9, 10, 18, 21, 28
      SAVE, 1, 7, 8, 10, 12, 17, 21, 22, 23, 24, 26
      SAVING, 8, 23, 27
      SPACEBAR, 21, 23, 24, 26
      SUMMARY, 12, 20
      TAB, 1, 2, 4, 10, 11, 19, 20, 23
      userzero, 13
      UX, 10, 13, 18, 25
      UY, 10, 13, 18
      VSEG, 11, 18
      WALK-THRU, 24
      WIDTH, 13, 16
      XOR, 21, 22


                             EDRAW ORDER FORM
      **********************************************************************
      Remit to:               Emark Systems
                              P.O. Box 13796
                              Albuquerque NM 89192

      **********************************************************************


      Company           ____________________________________________________

      Name              ____________________________________________________

      Address           ____________________________________________________

                        ____________________________________________________

      City, State       ____________________________________________________

      Country           ____________________________________ Zip:___________

      Phone Work: ________________________ Phone Home:______________________

      **********************************************************************

      Qty:_______ Edraw Software package(s)  at $49.95 each  _______._____

                               $5.00 overseas shipping cost  _______._____

                                  $2.00 shipping & handling  _______._____

                                                      total  _______._____

      **********************************************************************

      Please send most current EDRAW distribution disk and
      list of other computer programs.                       _____$6.00___

      **********************************************************************

      Payment is by:

      __ Check    __Money order/bank draft

      __ MasterCard        __Visa      Purchase Order number_____________

      Card number___________________ Expiration date______________

      Card holder name:_______________________________

      Card holder Signature___________________________



      ALL CHECKS AND MONEY ORDERS MUST BE DRAWN ON U.S. ACCOUNTS ONLY.

      SORRY, NO C.O.D. ORDERS WILL BE ACCEPTED.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0828

     Volume in drive A has no label
     Directory of A:\

    AND1     DOG      1024   8-11-87   7:42p
    AND2     DOG      2048   8-11-87   7:42p
    ARROWA   DOG       128   8-11-87   7:44p
    ARROWB   DOG       256   8-11-87   7:44p
    ARROWC   DOG       256   8-11-87   7:44p
    ARROWD   DOG       256   8-11-87   7:44p
    BUBBLE1  DOG       128   8-11-87   7:43p
    BUBBLE2  DOG       128   8-11-87   7:43p
    BUBBLE3  DOG       128   8-11-87   7:43p
    BUBBLE4  DOG       128   8-11-87   7:43p
    BUFF1    DOG       384   8-11-87   7:42p
    BUFF2    DOG       384   8-11-87   7:42p
    BUFF3    DOG       384   8-11-87   7:42p
    BUFF4    DOG       384   8-11-87   7:44p
    BUS1     DOG       256   8-11-87   7:44p
    BUS2     DOG       256   8-11-87   7:44p
    BUS3     DOG       256   8-11-87   7:43p
    BUS4     DOG       256   8-11-87   7:44p
    CAP1     DOG       256   8-11-87   7:43p
    CAP2     DOG       384   8-11-87   7:44p
    COILH    DOG       256   8-11-87   7:43p
    CONN1    DOG       256   8-11-87   7:43p
    CONN2    DOG       128   8-11-87   7:44p
    CONN3    DOG       256   8-11-87   7:44p
    CONN4    DOG       128   8-11-87   7:43p
    DEMO1            12210  11-26-87   4:49p
    DEMO3            12004  11-19-87  11:19a
    DEMO4             8038  11-19-87  10:51a
    DIODE1   DOG       384   8-11-87   7:43p
    DIODE2   DOG       256   8-11-87   7:43p
    EDEMO1   BAT       256   8-16-87  12:32p
    EDEMO3   BAT       256   8-16-87  12:33p
    EDEMO4   BAT       256   9-27-87   5:45p
    EDGE1    DOG       128   9-24-87   7:10a
    EDGE2    DOG       128   8-11-87   7:44p
    EDGE3    DOG       128   8-11-87   7:44p
    EDRAW    CFG       128   8-20-87  12:37p
    EDRAW    EXE    111744  11-22-87   7:18p
    FILES828 TXT      1271   1-25-88   3:36p
    FIXD     CFG       128   8-16-87  12:43p
    FLINSTAL BAT       870  11-25-87  12:15a
    FLIP1    DOG      1408   8-11-87   7:42p
    FLIP2    DOG      1664   8-11-87   7:43p
    FLIP3    DOG      1024   8-11-87   7:43p
    FLIP4    DOG      1280   8-11-87   7:43p
    FLIP5    DOG      1792   8-11-87   7:43p
    FONTB1            9472   6-08-87   9:44p
    FONTB5            2816   6-27-87  12:08p
    FONTF1             128   6-13-87   4:58p
    FONTF5             128   6-30-87   8:51p
    FONTK1             512   6-08-87   9:44p
    FONTK5             512   6-27-87  12:08p
    GND1     DOG       256   8-11-87   7:44p
    GO       BAT        38   9-29-87  11:30a
    GO       TXT       617   9-29-87  11:38a
    HDINSTAL BAT      1125  11-25-87  12:15a
    LIGHT    DOG       384   8-11-87   7:43p
    MANUAL   DOC     78568  11-18-87   9:17a
    NAND1    DOG      1024   8-11-87   7:42p
    NAND2    DOG      1024   8-11-87   7:42p
    NAND3    DOG      1024   8-11-87   7:43p
    OPAMP    DOG       896   9-05-87   6:05p
    OR1      DOG      1024   8-11-87   7:42p
    OR2      DOG      1024   8-11-87   7:42p
    OR3      DOG      1024   8-11-87   7:43p
    OR4      DOG      1024   8-11-87   7:42p
    OR5      DOG      1024   8-11-87   7:42p
    RC1      DOG      1536   8-11-87   7:44p
    RCGND    DOG      1280   8-11-87   7:44p
    README            6272  11-25-87  12:38a
    RELAY1   DOG       640   8-11-87   7:44p
    RESIS1   DOG       256   8-11-87   7:43p
    RESIS2   DOG       384   8-11-87   7:44p
    TILE1    DOG       128   8-22-87   8:26p
    TILE2    DOG       128   8-22-87   8:20p
    TILE3    DOG       128   8-22-87   8:20p
    TILE4    DOG       128   8-22-87   8:21p
    TILE5    DOG       128   8-22-87   8:21p
    TILE6    DOG       128   8-22-87   8:24p
    XSTER1   DOG       640   8-11-87   7:43p
    XSTER2   DOG       640   8-11-87   7:44p
    XSTER3   DOG       512   8-11-87   7:43p
    XSTER4   DOG       512   8-11-87   7:43p
           83 file(s)     281141 bytes
                           31744 bytes free
