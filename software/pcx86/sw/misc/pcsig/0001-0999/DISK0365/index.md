---
layout: page
title: "PC-SIG Diskette Library (Disk #365)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0365/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0365"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #5"

    Collection of routines written in Turbo Pascal for the IBM-PC.
    BLIST.PAS and GETDIR.PAS were written for CP/M-80.  Programs include
    asynchronous communications routines, an excellent disk cataloging
    program, and window management routines.
    
    System Requirements:  Turbo Pascal
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.  To run a COM program, simply type its name and press
    <ENTER>.
    
    File Descriptions:
    
    ASYNC    PAS  Asynchronous communication routines
    TURBO    DOC  Various routines -- date/time, hex math, registers
    SETCURSR PAS  Set cursor size for monochrome monitor
    RDIBMKBD INC  Procedure to read IBM keyboard -- all keys
    PTOOLWIN PAS  Demo/driver
    PTOOLWIN DOC  Documentation
    PTOOLWIN INC  Pascal TOOLs for WINdow management
    PTOOL1   BOX  Combination of PTOOLDAT, PTOOLENT, and PTOOLSCR
    PTOOLSCR PAS  Demonstration
    PTOOLENT PAS  Demonstration
    PTOOLENT DOC  Documentation
    PTOOLSCR INC  Associated file
    PTOOLENT INC  Pascal TOOls for record-oriented data ENTry
    PTOOLDAT PAS  Demonstration
    PTOOLDAT INC  Pascal TOOLs for DATe manipulation -- very complete
    BYTES    PAS  Associated program
    PC-DISK  COM  Compiled version
    PC-DISK  PAS  Disk Catalog program -- full-featured
    PARAMS   PAS  Demonstrates getting command line parameters
    MODEM    PAS  Telecommunications program
    HEXCALC  PAS  Hexadecimal calculations
    BLIST    DOC  Brief documentation
    BLIST    PAS  TURBO program lister and begin/end counter for CP/M-80
    BLIST    COM
    GETDIR   PAS  Get 8-sector, DSDD disk directory -- not TURBO
    CRFONTS  PAS  Character font creation and editing
    DATETIME INC  Date and time functions
    CRFONTS  DOC  Documentation
    BLIST    COM  Complied version of BLIST.PAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BLIST.DOC

{% raw %}
```
BList is a Turbo Pascal Source Code lister and BEGIN/END Counter
program.  It can print a listing to Console or Printer, with
optional begin/end, case/end, and record/end counter.  It was
initially published in the Aug./Sept. issue of TUG Lines.

This version of the code is specific to CP/M-80 because the program
looks for a parameter passed by CP/M at absolute location $80.
However, I believe it can be easily modified for MS-DOS.  The
program PARAMS.PAS (published in Jun./July issue of TUG Lines)
implies that only a few declarations need to be changed in the
BLIST.PAS program.  The following declarations should be changed
in the GET_IN_FILE procedure:

Var FNam: String[14];
    Parm: String[14] Absolute CSeg:$0081;
    ParmLth: Byte Absolute CSeg:$0080;
    Existing: Boolean;

```
{% endraw %}

## FILES.TXT

{% raw %}
```
San Francisco PC Users Group:     S O F T W A R E   L I B R A R Y
=================================================================
Volume 158:  TURBO PASCAL/4 (programs and utilities -- various authors)

This is a DOUBLE-SIDED diskette.

Index   Name           Description

158.01  ASYNC   .PAS   Asynchronous communication routines
158.02  BLIST   .PAS   TURBO program lister and begin/end counter for CP/M-80
158.03  BLIST   .COM   ^Compiled
158.04  BLIST   .DOC   ^Brief documentation
158.05  CRFONTS .PAS   Character font creation and editing
158.06  CRFONTS .DOC   ^Documentation
158.07  DATETIME.INC   Date and time functions
158.08  GETDIR  .PAS   Get 8-sector, DSDD disk directory -- not TURBO
158.09  HEXCALC .PAS   Hexadecimal calculations
158.10  MODEM   .PAS   Telecommunications program
158.11  PARAMS  .PAS   Demonstrates getting command line parameters
158.12  PC-DISK .PAS   Disk Catalog program -- full-featured
158.13  PC-DISK .COM   ^Compiled version
158.14  BYTES   .PAS   ^Associated program
158.15  PTOOLDAT.INC   Pascal TOOLs for DATe manipulation -- very complete
158.16  PTOOLDAT.PAS   ^Demonstration
158.17  PTOOLENT.INC   Pascal TOOls for record-oriented data ENTry
158.18  PTOOLSCR.INC   ^Associated file
158.19  PTOOLENT.DOC   ^Documentation
158.20  PTOOLENT.PAS   ^Demonstration
158.21  PTOOLSCR.PAS   ^Demonstration
158.22  PTOOL1  .BOX   Combination of PTOOLDAT, PTOOLENT, and PTOOLSCR
158.23  PTOOLWIN.INC   Pascal TOOLs for WINdow management
158.24  PTOOLWIN.DOC   ^Documentation
158.25  PTOOLWIN.PAS   ^Demo/driver
158.26  RDIBMKBD.INC   Procedure to read IBM keyboard -- all keys
158.27  SETCURSR.PAS   Set cursor size for monochrome monitor
158.28  TURBO   .DOC   Various routines -- date/time, hex math, registers
158.29  README  .158   YOU ARE READING IT
```
{% endraw %}

## FILES365.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 365               Turbo Pascal #4                       v2   DS2
------------------------------------------------------------------------
Collection of routines written in Turbo Pascal for the IBM-pc. BLIST.PAS
and GETDIR.PAS were written for CP/M-80.
 
ASYNC    PAS  Asynchronous communication routines
BLIST    PAS  TURBO program lister and begin/end counter for CP/M-80
BLIST    COM  Compiled
BLIST    DOC  Brief documentation
CRFONTS  PAS  Character font creation and editing
CRFONTS  DOC  Documentation
DATETIME INC  Date and time functions
GETDIR   PAS  Get 8-sector, DSDD disk directory -- not TURBO
HEXCALC  PAS  Hexadecimal calculations
MODEM    PAS  Telecommunications program
PARAMS   PAS  Demonstrates getting command line parameters
PC-DISK  PAS  Disk Catalog program -- full-featured
PC-DISK  COM  Compiled version
BYTES    PAS  Associated program
PTOOLDAT INC  Pascal TOOLs for DATe manipulation -- very complete
PTOOLDAT PAS  Demonstration
PTOOLENT INC  Pascal TOOls for record-oriented data ENTry
PTOOLSCR INC  Associated file
PTOOLENT DOC  Documentation
PTOOLENT PAS  Demonstration
PTOOLSCR PAS  Demonstration
PTOOL1   BOX  Combination of PTOOLDAT, PTOOLENT, and PTOOLSCR
PTOOLWIN INC  Pascal TOOLs for WINdow management
PTOOLWIN DOC  Documentation
PTOOLWIN PAS  Demo/driver
RDIBMKBD INC  Procedure to read IBM keyboard -- all keys
SETCURSR PAS  Set cursor size for monochrome monitor
TURBO    DOC  Various routines -- date/time, hex math, registers
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
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


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0365

     Volume in drive A has no label
     Directory of A:\

    ASYNC    PAS     12544   2-06-85   2:05a
    BLIST    COM      9856  12-01-84  12:43a
    BLIST    DOC       896  12-01-84  12:42a
    BLIST    PAS      7552  12-01-84  12:45a
    BYTES    PAS      1292   2-23-85   2:23p
    CRFONTS  DOC      2944   2-23-85   2:40p
    CRFONTS  PAS     15744   2-23-85   2:40p
    DATETIME INC      2304  11-04-84  11:50p
    GETDIR   PAS      2304  11-21-84   1:04a
    HEXCALC  PAS      3584  11-19-84   2:35a
    MODEM    PAS     17408   2-05-85   2:39a
    PARAMS   PAS       640  12-01-84  12:43a
    PC-DISK  COM     33536   2-23-85   2:22p
    PC-DISK  PAS     38998   2-23-85   2:23p
    PTOOL1   BOX     57794   1-01-85   5:05p
    PTOOLDAT INC     36352   2-23-85   2:00p
    PTOOLDAT PAS      6784   2-23-85   2:00p
    PTOOLENT DOC      5248   2-23-85   2:02p
    PTOOLENT INC     20864   2-23-85   2:02p
    PTOOLENT PAS      6016   2-23-85   2:02p
    PTOOLSCR INC     11904   2-23-85   2:03p
    PTOOLSCR PAS      3456   2-23-85   2:03p
    PTOOLWIN DOC      5760   2-23-85   2:18p
    PTOOLWIN INC     11392   2-23-85   2:18p
    PTOOLWIN PAS      4352   2-23-85   2:18p
    RDIBMKBD INC      1664   2-03-85  10:23p
    TURBO    DOC      9344  11-17-84   7:03p
    SETCURSR PAS      1366   3-08-85   2:48p
    FILES    TXT      1920   3-25-85   4:30p
    FILES365 TXT      1792   5-23-85   4:05p
           30 file(s)     335610 bytes
                           11264 bytes free
