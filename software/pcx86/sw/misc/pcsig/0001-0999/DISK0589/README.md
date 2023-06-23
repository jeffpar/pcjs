---
layout: page
title: "PC-SIG Diskette Library (Disk #589)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0589/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0589"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PTOOLS"

    PTOOLS will prove to be an aid to the Turbo Pascal programmer at every
    level.  Included on the disk are the source code files for each of the
    routines, which will be included in your programs when compiled.  Also
    included is a documentation file with complete rules for use and a
    description of the routine itself.  Included for your convenience is a
    demonstration program of each of the routines.
    
    Also, these are complete stand-alone programs which can be compiled
    and run.  They will give the user a good feel for exactly what the
    routine does and how to best utilize it.  Included on this disk are
    routines which will create a window of any size and color which can
    overlay a text screen and later be removed (PTOOLWIN), a routine to
    change date types and manipulate them, many routines to allow program
    controlled data entry and editing.
    
    System Requirements: 64K, one disk drive and monochrome/graphics
    display.
    
    How to Start: Check the .DOC files for each program.  Then, since
    these are all Turbo Pascal routines to incorporate into other PASCAL
    programs, the document files will provide all the instructions.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    PTOOLSCR PAS  Demo for the PTOOLSCR routines
    PTOOLSCR INC  Routines to manipulate screen functions
    PTOOLENT PAS  Demo of the PTOOLENT routines
    PTOOLENT INC  Routines to display, edit and validate data entry fields
    PTOOLENT DOC  Documentation of the PTOOLENT routines
    PTOOLDAT PAS  Demo of PTOOLDAT routines
    PTOOLDAT INC  Converts and manipulates Gregorian & Julian dates
    PTOOL1   BOX  Combination of PTOOLDAT, PTOOLENT, PTOOLSCR programs
    PTOOLTIM PAS  Demo for the PTOOLTIM routines
    PTOOLTIM INC  Routines to read and interpret system clock
    PTOOLWIN PAS  Demo for the PTOOLWIN routines
    PTOOLWIN DOC  Documentation of the PTOOLWIN routines
    PTOOLWI3 PAS  Demo for the PTOOLWI3 routines
    PTOOLWI3 INC  Routines to create and manipulate text windows
    PTOOLWI3 DOC  Documentation of the PTOOLWI3 routines
    PTOOLWIN INC  Routines to create and manipulate text windows
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
 ptool1  .box     Comabination of PTOOLDAT, PTOOLENT, PTOOLSCR
 ptooldat.inc     Routines to convert and manipulate Gregorian and Julian dates
 ptooldat.pas     Demo of PTOOLDAT routines
 ptoolent.doc     Doc  of PTOOLENT routines
 ptoolent.inc     Routines to display, edit, and vaildate data entry fields
 ptoolent.pas     Demo of PTOOLENT routines
 ptoolscr.inc     Routines to manipulate screen functions
 ptoolscr.pas     Demo of PTOOLSCR routines
 ptooltim.inc     Routines to read and interpret system clock
 ptooltim.pas     Demo of PTOOLTIM routines
 ptoolwin.doc     Doc  of PTOOLWIN routines
 ptoolwin.inc     Routines to create and manipulate text windows
 ptoolwin.pas     Demo of PTOOLEWIN routines
 ptoolwi3.doc     Doc  of PTOOLWI3 routines
 ptoolwi3.inc     Routines to create and manipulate text windows
 ptoolwi3.pas     Demo of PTOOLEWI3 routines
```
{% endraw %}

## FILES589.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  589  PTOOLS                                                v1 DS2
---------------------------------------------------------------------------
 
This PTOOLS disk comes with many handy routines which may be needed by
the serious Turbo Pascal programmer.
 
PTOOL1   BOX  Combination of PTOOLDAT, PTOOLENT, PTOOLSCR programs
PTOOLDAT INC  Routines to convert and manipulate Gregorian & Julian dates
PTOOLDAT PAS  Demo of PTOOLDAT routines
PTOOLENT DOC  Documentation of the PTOOLENT routines
PTOOLENT INC  Routines to display, edit and validate data entry fields
PTOOLENT PAS  Demo of the PTOOLENT routines
PTOOLSCR INC  Routines to manipulate screen functions
PTOOLSCR PAS  Demo for the PTOOLSCR routines
PTOOLTIM PAS  Demo for the PTOOLTIM routines
PTOOLTIM INC  Routines to read and interpret system clock
PTOOLWIN DOC  Documentation of the PTOOLWIN routines
PTOOLWIN PAS  Demo for the PTOOLWIN routines
PTOOLWIN INC  Routines to create and manipulate text windows
PTOOLWI3 DOC  Documentation of the PTOOLWI3 routines
PTOOLWI3 INC  Routines to create and manipulate text windows
PTOOLWI3 PAS  Demo for the PTOOLWI3 routines
 
PC-SIG (SOFTWARE INTEREST GROUP)
1030 D DUANE AVE.
SUNNYVALE CA. 94086
PH# 408-730-9291
 
 
```
{% endraw %}

## NOTES589.TXT

{% raw %}
```
Program name:         PTOOLS
 
Author name:          R. D. Ostrander
Address:              5437 Honey Manor Dr., Indianapolis, IN  46241
 
Telephone Number:     None
 
Suggested Donation:   $20.00
 
Program Description:
 
PTOOLS will prove to be an aid to the Turbo Pascal programmer at every
level.  Included on the disk are the source code files for each of the
routines, which will be included in your programs when compiled.  Also
included, is a documentation file with complete rules for use and a 
description of the routine itself.  Included for your convenience is a
demonstration program of each of the routines.  These are complete 
stand-alone programs which can be compiled and run.  They will give the
user a good feel for exactly what the routine does and how to best 
utilize it.  Included on this disk are routines which will create a
window of any size and color which can overlay a text screen and later
be removed, a routine to change date types and manipulate them, many
routines to allow program controlled data entry and editing.  I found
that, by reading the three types of files for each include file,
understanding how to incorporate these into my own programs was an 
easy matter.  These programs will require an IBM PC or very close
compatible which runs Borland's Turbo Pascal and the Turbo Pascal
program itself.
```
{% endraw %}

## PTOOLENT.DOC

{% raw %}
```
 PTOOLENT.INC   Copyright 1984  R D Ostrander                   Version 1.0
                                 Ostrander Data Services
                                 5437 Honey Manor Dr
                                 Indianapolis  IN  46241


 This Turbo Pascal include file is a display and data entry tool. It Displays
 a given String (or Character Array), Integer, or Real (Dollar) data field
 in a given screen area and allows the operator to make changes via the
 keyboard. It allows the operator to end the editing using many ending
 keys and passes information about those keys to the calling program.


 This program has been placed in the Public Domain by the author and copies
 may be freely made for non-commercial, demonstration, or evaluation purposes.
 Use of these subroutines in a program for sale or for commercial purposes in
 a place of business requires a $20 fee be paid to the author at the address
 above.  Personal non-commercial users may also elect to pay the $20 fee to
 encourage further development of this and similar programs. With payment you
 will be able to receive update notices, diskettes and printed documentation
 of this and other PTOOLs from Ostrander Data Services.


  PTOOL, and PTOOLxxx are Copyright Trademarks of Ostrander Data Services.

 Turbo Pascal is a Copyright of Borland International Inc.



 The Call format for PTOOLENT is:

    Set Data            <String, Integer, or Real>      initial display value.
    Set DataType        <Char>                                   type of edit.
    Set DisplaySize     <Integer>                number of spaces for display.
    Set DisplayDecimals <Integer>                       for Real numbers only.
    Set ReturnCode      <Integer>      need not be set but must be a variable.
    GoToXY (X, Y)                            to set the Display Area location.
    PTOOLENT (Data, DataType, DisplaySize, DisplayDecimals, ReturnCode);



    Examples:     Var CustomerName : String [24];
                      ReturnCode   : Integer;
                  Begin
                  CustomerName := ' ';
                  Gotoxy (1,1)
                  PTOOLENT (CustomerName, 'S', 24, 0, ReturnCode);

    See companion program PTOOLENT.PAS for further examples.


    Note that the DisplaySize must be > DisplayDecimals + 1.

    Invalid data and cursor movements cause beeps to the operator.


 Editting Keys for use by the operator are:

         Left Arrow       : Move cursor to left one position
         Right Arrow      : Move cursor to right one position
         Ctrl-Left Arrow  : Move cursor to 1st position
         Ctrl-Right Arrow : Move cursor to first position past last character
         Tab              : Move cursor right to next word
         Shift-Tab        : Move cursor left to previous word
         Backspace        : Erase character to left of cursor
         Del              : Erase character under cursor
         Ctrl-E           : Erase editing area
         Ctrl-F           : Fill field with character to left of cursor
         Ctrl-X           : Erase all characters from cursor on
         Ctrl-L           : Left justify data
         Ctrl-R           : Right justify data
         Ctrl-S           : Start Editting over
         Ctrl-N or Ctrl-Q : Quit with no change in data
         Ctrl-P           : Retreive Previous data or Ctrl-E(rased) data
         Ctrl-U           : Change all data to Upper Case
         Ctrl-D           : Change all data to Lower Case
         Ins              : Toggle Insert function on/off

         Alt-Numerics may be used to enter character graphics codes



  Return codes are:

                  0 = Esc
                  1 = C/R or Ctrl-N or Ctrl-Q
                  2 = (Filled Field)
                  3 = Ctrl-Break or Ctrl-C  (if $C- not set)
16-26, 30-38, 44,50 = Alt-Alphabetics
              59-68 = F1 - F10
                 71 = Home                 These are the codes returned to the
                 72 = Up Arrow             calling program in the ReturnCode
                 73 = PgUp                 field when the operator ends the
                 79 = End                  editing by pressing one of these
                 80 = Down Arrow           keys. Other key combinations can
                 81 = PgDn                 also cause an end of edit & return
              84-93 = Shift F1 - F10       spurious codes. Note that the code
             94-103 = Ctrl F1 - F10        of 2 is returned when the operator
            104-113 = Alt F1 - F10         enters a character (or space) in
                114 = Ctrl-PrtSc           the last position of the field.
                117 = Ctrl-End
                118 = Ctrl-PgDn
                119 = Ctrl-Home
                132 = Ctrl-PgUp


 Now go out and try PTOOLENT and by all means, look at the code of both
 PTOOLENT.PAS and PTOOLENT.INC to completely understand how to incorporate
 the Ostrander Data Services product into your programs.

 Write to find out about other ODS software available that might not be
 on this bulletin board.

```
{% endraw %}

## PTOOLWI3.DOC

{% raw %}
```
 PTOOLWI3.INC   Copyright 1984  R D Ostrander                   Version 3.0
                                Ostrander Data Services             of
                                5437 Honey Manor Dr             PTOOLWIN.INC
                                Indianapolis  IN  46241

 These Turbo Pascal procedures are text window manipulation tools used to ease
 the manipulation of Windows in an IBM PC environment. They are used to open
 and close windows while saving the data covered by the window. Borders around
 windows are also supported.

 This program has been placed in the Public Domain by the author and copies
 may be freely made for non-commercial, demonstration, or evaluation purposes.
 Use of these subroutines in a program for sale or for commercial purposes in
 a place of business requires a $20 fee be paid to the author at the address
 above.  Personal non-commercial users may also elect to pay the $20 fee to
 encourage further development of this and similar programs. With payment you
 will be able to receive update notices, diskettes and printed documentation
 of this and other PTOOLs from Ostrander Data Services.


 PTOOL, and PTOOLxxx are Copyright Trademarks of Ostrander Data Services

 Turbo Pascal is a Copyright of Borland International Inc.

Version 2.0 of PTOOLWIN (aka PTOOLWI2) supports stack operations for holding
screen image data. Each screen opened absorbs 4006 bytes of Heap/Stack while
it is open for the storage of the image on the screen before the new screen
was opened. This area is freed up when the window is closed. No checks are
made within PTOOLWIN to ensure that there is sufficient space on the
Heap/Stack for PTOOLWIN to execute properly. The calling program must do this
via a MaxAvail call such as

    If MaxAvail < 0 or MaxAvail > 4006 then PTWOpen (1)
                                       else (((((ERROR ROUTINE)))));

Version 3.0 of PTOOLWIN (aka PTOOLWI3) automatically determine whether a
Color/Graphics or a Monochrome display card are active and sets the output
accordingly IF PTOOLWIN_Screen_Type IS AN 'X' WHEN PTWSET is first called.
This variable still has all the functionality in Version 1.0 and 2.0 - if
PTOOLWIN_Screen_Type is set to a 'C' or 'M' by the calling program, it will
take precedence and the switching of screens can still be done this way.

     Version 3.0 was developed by LEW PAPER of St. Paul MN using the
     card routine "WINDOW.PAS" developed by BELA LUBKIN of Borland.

     Thanks to both of these people by the original author. A good
     example of User Supported Software at work.
                                                RDO.



Procedures available in PTOOLWIN.INC are:


 PTWSet  (Screen#, X1, Y1, X2, Y2,  - Sets up window coordinates so that later
         BorderSwitch,                references can be made by Mnemonic only.
         BackgroundColor,             PTWSet must be done once for each window
         ForegroundColor)             before it is Opened.
                                      The Screen# is a number between 1 and
                                      the maximum number of windows allowable
                                      set in the Constants Block below.
                                      The X and Y Coordinates are the same as
                                      for the Turbo Pascal Window procedure.
                                      A border may be placed around the window
                                      and the size of the window will be
                                      decreased to fit inside the border. The
                                      BorderSwitch functions are:
                                         0 - No border
                                         1 - Single line block graphics border
                                         2 - Double line block graphics border
                                        -1 - Single line Reversed color border
                                        -2 - Double line Reversed color border
                                      The BackgroundColor and ForegroundColor
                                      parameters are the same as for the Turbo
                                      Pascal TextColor and TextBackground
                                      procedures.

 PTWOpen (Screen#)                  - Activates a window (previously set by
                                      PTWSet) and saves the screen covered by
                                      the window.
                                      In the Constants Block following, there
                                      is a parameter that sets the maximum
                                      number of windows that may be open at
                                      any one time.

 PTWClose                           - De-activates the open window, activates
                                      the previous window and restores the
                                      screen covered by the closed window.
                                      Note that the PTWOpen & PTWClose have a
                                      "Push/Pop" type of action.



Constants in the PTOOLWIN.INC file that must be set by the programmer before
compilation are:


   PTOOLWIN_Number_of_Windows = nn;

        This determines the number of windows that may be set with the
        PTWSet procedure. This is easily determined when the calling
        program is designed.

        It also determines the number of windows that may be open at any one
        time.

        Use the largest of the two figures that you expect.

There is a constant that must be set before the PTWOpen or PTWClose procedures
are called:


   PTOOLWIN_Screen_Type : Char = 'C';

        If the final program is going to be run on an IBM PC with a Monochrome
        video card then this parameter must be set to 'M'. If the PC has
        a Color/Graphics card then it must be set to 'C'. This setting may be
        done at run time rather than at compile time since the difference that
        this parameter makes is whether to store and recall the screen data at
        $B8000 (Color Graphics) or $B0000 (Monochrome) via the absolute
        variables :
                     PTOOLWIN_C_Screen   : Char absolute $B800:$0000;
                     PTOOLWIN_M_Screen   : Char absolute $B000:$0000;

        This may be found in the calling program by using either the
        PTEMonoAttached or PTEColorAttached functions found in the PTOOLENV
        Environment control.



 Now go out and try PTOOLWIN and by all means, look at the code of both
 PTOOLWIN.PAS and PTOOLWIN.INC to completely understand how to incorporate
 the Ostrander Data Services product into your programs.

 Write to find out about other ODS software available that might not be
 on this bulletin board.


```
{% endraw %}

## PTOOLWIN.DOC

{% raw %}
```
 PTOOLWIN.INC   Copyright 1984  R D Ostrander                   Version 1.0
                                Ostrander Data Services
                                5437 Honey Manor Dr
                                Indianapolis  IN  46241

 These Turbo Pascal procedures are text window manipulation tools used to ease
 the manipulation of Windows in an IBM PC environment. They are used to open
 and close windows while saving the data covered by the window. Borders around
 windows are also supported.

 This program has been placed in the Public Domain by the author and copies
 may be freely made for non-commercial, demonstration, or evaluation purposes.
 Use of these subroutines in a program for sale or for commercial purposes in
 a place of business requires a $20 fee be paid to the author at the address
 above.  Personal non-commercial users may also elect to pay the $20 fee to
 encourage further development of this and similar programs. With payment you
 will be able to receive update notices, diskettes and printed documentation
 of this and other PTOOLs from Ostrander Data Services.


 PTOOL, and PTOOLxxx are Copyright Trademarks of Ostrander Data Services

 Turbo Pascal is a Copyright of Borland International Inc.

Procedures available in PTOOLWIN.INC are:


 PTWSet  (Screen#, X1, Y1, X2, Y2,  - Sets up window coordinates so that later
         BorderSwitch,                references can be made by Mnemonic only.
         BackgroundColor,             PTWSet must be done once for each window
         ForegroundColor)             before it is Opened.
                                      The Screen# is a number between 1 and
                                      the maximum number of windows allowable
                                      set in the Constants Block below.
                                      The X and Y Coordinates are the same as
                                      for the Turbo Pascal Window procedure.
                                      A border may be placed around the window
                                      and the size of the window will be
                                      decreased to fit inside the border. The
                                      BorderSwitch functions are:
                                         0 - No border
                                         1 - Single line block graphics border
                                         2 - Double line block graphics border
                                        -1 - Single line Reversed color border
                                        -2 - Double line Reversed color border
                                      The BackgroundColor and ForegroundColor
                                      parameters are the same as for the Turbo
                                      Pascal TextColor and TextBackground
                                      procedures.

 PTWOpen (Screen#)                  - Activates a window (previously set by
                                      PTWSet) and saves the screen covered by
                                      the window.
                                      In the Constants Block following, there
                                      is a parameter that sets the maximum
                                      number of windows that may be open at
                                      any one time.

 PTWClose                           - De-activates the open window, activates
                                      the previous window and restores the
                                      screen covered by the closed window.
                                      Note that the PTWOpen & PTWClose have a
                                      "Push/Pop" type of action.



Constants in the PTOOLWIN.INC file that must be set by the programmer before
compilation are:


   PTOOLWIN_Number_of_Windows = 10;

        This determines the number of windows that may be set with the
        PTWSet procedure. This is easily determined when the calling
        program is designed.


   PTOOLWIN_Max_Number_Open = 10;

        This determines the number of windows that may be open at any one
        time. The programmer will want to set this accurately to the maximum
        number needed by the calling program since 4006 bytes of memory are
        taken for each window that may be opened. This memory is taken in the
        data area at compilation time. This was done in order to allow the
        calling program the widest possible latitude in design; the stack is
        not used for this since running out of memory at execution time would
        be very inconvenient.



There is a constant that must be set before the PTWOpen or PTWClose procedures
are called:


   PTOOLWIN_Screen_Type : Char = 'C';

        If the final program is going to be run on an IBM PC with a Monochrome
        video card then this parameter must be set to 'M'. If the PC has
        a Color/Graphics card then it must be set to 'C'. This setting may be
        done at run time rather than at compile time since the difference that
        this parameter makes is whether to store and recall the screen data at
        $B8000 (Color Graphics) or $B0000 (Monochrome) via the absolute
        variables :
                     PTOOLWIN_C_Screen   : Char absolute $B800:$0000;
                     PTOOLWIN_M_Screen   : Char absolute $B000:$0000;

        This may be found in the calling program by using either the
        PTEMonoAttached or PTEColorAttached functions found in the PTOOLENV
        Environment control.




        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0589

     Volume in drive A has no label
     Directory of A:\

    FILES    TXT       884   5-30-86  10:15a
    FILES589 TXT      1333   8-16-86   4:06p
    GO       BAT       382   8-16-86   4:16p
    NOTES589 TXT      1408   7-18-86   8:23a
    PTOOL1   BOX     57796   2-23-85   2:02p
    PTOOLDAT INC     36352   2-23-85   2:00p
    PTOOLDAT PAS      6784   2-23-85   2:00p
    PTOOLENT DOC      5248   2-23-85   2:02p
    PTOOLENT INC     20864   2-23-85   2:02p
    PTOOLENT PAS      6016   2-23-85   2:02p
    PTOOLSCR INC     11873   2-23-85   2:01p
    PTOOLSCR PAS      3456   2-23-85   2:03p
    PTOOLTIM INC     12672   2-21-85   8:14p
    PTOOLTIM PAS      2816   2-21-85   8:14p
    PTOOLWI3 DOC      7000   5-17-85  10:15a
    PTOOLWI3 INC     12867   5-17-85  10:00a
    PTOOLWI3 PAS      4576   5-17-85  10:22a
    PTOOLWIN DOC      6264   2-21-85   7:45p
    PTOOLWIN INC     11392   2-21-85   8:15p
    PTOOLWIN PAS      4352   2-21-85   8:14p
           20 file(s)     214335 bytes
                           97280 bytes free
