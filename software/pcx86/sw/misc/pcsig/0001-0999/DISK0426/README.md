---
layout: page
title: "PC-SIG Diskette Library (Disk #426)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0426/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0426"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL #8"

    This disk contains powerful TURBO Pascal routines to assist users
    with data format manipulation, graphics, register manipulation,
    and window manipulation tools.  The two GRAPH programs manipulate
    a predefined object in a variety of ways.  The PTOOLWIN routines
    provide window opening and closing with data saved and borders.
    Worth Your Attentions: The TURBHERC is a collection of procedures
    for Hercules graphics support.
    
    System Requirements:  128K, two disk drives, color or
    monochrome graphics, Turbo Pascal
    
    How to Start:  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    GRAPH    PAS  Graphic manipulation of a model;  demo of GRAPH2
    LASTRSTR INC  Routine to restore registers
    GRAPH2   PAS  Graphic manipulation procedures
    PIBPICT  PAS  Demo of editing facilities of PICTFORM.PAS
    PIBPICT  DAT  Data for PIBPICT.PAS
    LASTWIN  INC  Provides further window capabilities
    LASTSAVE INC  Routine to save registers and restore previous contents
    PICTFORM PAS  Edits variables or strings as in PL/1 or COBOL
    PTOOLWI3 INC  Text window manipulation tools: open,close,borders
    PTOOLWI3 DOC  Description of PTOOLWI3.INC
    TURBHERC PAS  Collection of procedures for Hercules graphics support
    PTOOLWI3 PAS  Demo program for PTOOLWI3.INC
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES426.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 426   TURBO Pascal Routines #                          v1 DS2
-----------------------------------------------------------------------
This diskette contains powerful TURBO Pascal routines to  assist the
user with data format manipulation, graphics, register manipulation,
and window manipulation tools.  The two GRAPH programs manipulate a
predefined object in a variety of ways.  The PTOOLWIN routines provide
window opening and closing with data saved and borders.  The TURBHERC
is a collection of procedures for Hercules graphics support.
 
GRAPH    PAS  Graphic manipulation of a model;  demo of GRAPH2
GRAPH2   PAS  Graphic manipulation procedures
LASTRSTR INC  Routine to restore registers
LASTSAVE INC  Routine to save registers and restore previous contents
LASTWIN  INC  Provides further window capabilities
PIBPICT  DAT  Data for PIBPICT.PAS
PIBPICT  PAS  Demo of editing facilities of PICTFORM.PAS
PICTFORM PAS  Edits variables or strings as in PL/1 or COBOL
PTOOLWI3 DOC  Description of PTOOLWI3.INC
PTOOLWI3 INC  Text window manipulation tools: open,close,borders
PTOOLWI3 PAS  Demo program for PTOOLWI3.INC
TURBHERC PAS  Collection of procedures for Hercules graphics support
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0426

     Volume in drive A has no label
     Directory of A:\

    FILES426 TXT      1397  11-05-85   2:49p
    GRAPH    PAS     26624   2-25-85  10:28a
    GRAPH2   PAS     19200   2-25-85  10:32a
    LASTRSTR INC      1024   3-14-85  10:01p
    LASTSAVE INC      1152   3-14-85  10:01p
    LASTWIN  INC      2432   3-14-85  10:01p
    PIBPICT  DAT      1988   3-14-85  10:15p
    PIBPICT  PAS      2965   3-14-85  10:11p
    PICTFORM PAS     26886   3-14-85  10:12p
    PTOOLWI3 DOC      7000   5-17-85  10:15a
    PTOOLWI3 INC     12867   5-17-85  10:00a
    PTOOLWI3 PAS      4576   5-17-85  10:22a
    TURBHERC PAS      2560   2-25-85   8:58a
           13 file(s)     110671 bytes
                           47616 bytes free
