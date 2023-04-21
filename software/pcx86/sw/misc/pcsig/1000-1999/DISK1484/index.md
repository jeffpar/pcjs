---
layout: page
title: "PC-SIG Diskette Library (Disk #1484)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1484/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1484"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QMODEM SST 5 OF 5 (310,1022,1023,1483)"

    A fast and powerful telecommunications program for anyone using a
    modem. Expanded memory usage, windowing, Xmodem protocol and
    auto-redial are only some of the strengths of this package.
    
    The "quick-learn" mode option is perfect for novices and further
    training is available with the context-sensitive Help function.  Read
    and write ASCII files with the integrated text editor.  X,Y and IMODEM
    protocols are fully supported as are multi-tasking environments such as
    Topview, Desqview, Taskview and Windows.  The dialing directory can be
    sorted, printed, and searched.  Terminal emulations for VT100, ANSI, TTY
    and Televideo 925 ensure further flexibility.  LOG allows you to
    maintain usage records -- who called, time called, time online and a
    Date/Time stamp for each log entry.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1484.TXT

{% raw %}
```
Disk No: 1484                                                           
Disk Title: Qmodem SST #5 of 5 (310,1022,1023,1483)                     
PC-SIG Version: S4.1                                                    
                                                                        
Program Title: QMODEM SST                                               
Author Version: 4.1                                                     
Author Registration: $30.00                                             
Special Requirements: Modem.                                            
                                                                        
A fast and powerful telecommunications program for anyone using a modem.
Expanded memory usage, windowing, Xmodem protocol and auto-redial are   
only some of the strengths of this package.                             
                                                                        
The ``quick-learn'' mode option is perfect for novices and further      
training is available with the context-sensitive Help function.  Read   
and write ASCII files with the integrated text editor.  X,Y and IMODEM  
protocols are fully supported as are multi-tasking environments such as 
Topview, Desqview, Taskview and Windows.  The dialing directory can be  
sorted, printed and searched.  Terminal emulations for VT100, ANSI, TTY 
and Televideo 925 ensure further flexibility.  LOG allows you to        
maintain usage records - who called, time called, time online and a     
Date/Time stamp for each log entry.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SHOW.DOC

{% raw %}
```
SHOW - The FirstLook Show Viewer
--------------------------------
Release 1.4 - (c) Copyright 1988, 1989 The Silicon Frog, Inc.


Introduction
------------
The SHOW program displays Show Files (.SHO) created with the
ShowMaker system.  SHOW requires approximately 60K to operate,
and PC- or MS-DOS release 2.1 or greater.  A color display is
recommended, but not mandatory.  Show also takes advantage of a
Microsoft or compatible mouse if one is available. 

SHOW Modes
----------
New in SHOW release 1.4 is the program's ability to operate in
either automatic or manual mode, and the implementation of
user-controlled special effects and screen display timing.  In
Automatic Display mode (AutoMode), the program cycles through
all eligible shows automatically, and each screen is displayed
for a user-specified duration.  Automatic Batch mode  can also
be used to control the number of automatic show iterations.  In
batch mode, SHOW will terminate and return to DOS once the "Show
is Over".  For additional details, refer to the section titled
"AutoMode Operation" found later in this document.

Starting SHOW in Manual Mode
----------------------------
The SHOW program is started with the following command:

SHOW [SHOWDIR] [/BW] [/NOFX] [/NH] <Enter> 

[SHOWDIR] is an optional parameter which points to the directory
where the desired Show Files (.SHO) are stored.  SHOWDIR must be
a valid DOS drive:\directory\ name containing a trailing
backslash.  If the [SHOWDIR] parameter is omitted, SHOW will
look for .SHO files in the current directory.  If the SHOW
program is in a PATH'ed directory (a directory defined in your
PATH command), start the SHOW program from the .SHO file
directory and omit the [SHOWDIR] parameter.  

The [/BW] optional parameter forces monochrome display in cases
where SHOW is unable to automatically detect a monochrome
monitor.  See the section titled "Video Adapter Support" later
on this document for additional information on supported
displays. 

The [/NH] parameter is intended specifically for Color Graphics
(CGA) and Enhanced Graphics (EGA) adapters which are not fully
compatible with the IBM hardware or firmware standards.  If your
color monitor exhibits erratic behavior, displays garbage, or if
your computer locks up for no apparent reason, try this parameter 
in the SHOW command line.

Following are sample commands: 

1. Show Files are in C:\DATA\SHOWS and the SHOW program is in
   the C:\SHOW directory

C:>CD SHOW
C:>SHOW C:\DATA\SHOWS\ <Enter>

2. The SHOW program is in the DOS PATH and Show Files are in the
   C:\DATA\SHOW directory:

C:>CD DATA\SHOW
C:>SHOW <Enter>

3. SHOW.EXE and Show files are in the current directory and
   monochrome output is desired:

C:>SHOW /BW <Enter>

The /NOFX parameter, if specified, disables special screen
transition effects, if any.  Screen effects and screen display
timing for Automode are defined by the show's author.  If
the show contains special effects, they are displayed by
default.  If /NOFX is specified, it can be overriden during the
show (in manual mode) by pressing the F3 key.


Program startup
---------------
If no Show Files were found in the current directory or in the
directory specified on the command line, SHOW will terminate
with an appropriate error message.  The error message may also
be displayed if an incorrect command-line parameter was used.

If .SHO files were found, SHOW will display its logo/copyright
screen.  The logo screen will scroll away, and will be replaced
by an informational screen about SHOW's Help Line.  Since most
screens contain 25 lines' worth of information, the Help Line is
not displayed by default.  To proceed with the Show File Menu
Screen, press any key or click any mouse button.


The Show File Menu
------------------
The Show File Menu Screen displays a variable-size, scrollable
window containing the titles of all shows found in the show
directory.  To select a show, use the cursor key(s) or roll the
mouse until the desired show name is highlighted, then press
<Enter> or click the left mouse button.  Pressing <Esc> or
clicking the right mouse button exits SHOW and returns to DOS.


The Credit Screen
-----------------
Once you have selected a Show,  a credit screen will be shown
for a few short seconds, acknowledging the show's author.  You
will then be prompted to press any key or click either mouse
button to start the Show.  In AutoMode, the credit screen
display may be disabled with the /NOA command-line parameter.


Running SHOW - Manual Mode
--------------------------
When SHOW starts, it immediately displays the first screen in
the .SHO file.  Pressing the F1 keys cycles help information on
the screen's 25th line.  The default Help Line displays keyboard
help;  the second help line displays mouse help.  Pressing F1 a
third time erases the help line so that all screen data is
visible.  Since many screens contain 25 lines' worth of
information, keeping the help line off will allow you to view
the entire screen.  Once you become familiar with SHOW's simple
commands, you will want to keep the help line OFF permanently.

SHOW controls are simple and intuitive:

                       F1 - Cycle Help Line (kb/mouse/OFF)
                       F2 - Show Screen Menu
                       F3 - Special Effects Toggle
          PgDn/Click Left - Display Next Screen
         PgUp/Click Right - Display Previous Screen
                     Home - Display First Screen
                      End - Display Last Screen
            F2/Click Both - Screen Menu
                      Esc - Exit Show/Return to Show File Menu


In addition to the PgUp and PgDn keys, SHOW also responds to the
following keys to move from screen to screen:
          
              Next Screen - Space Bar, Plus or Equal keys, 
                            <Enter>, Tab (-->|), Down Arrow
                            and Insert key.  
          Previous Screen - Minus keys, Backspace key, Up Arrow,
                            Shift-Tab, and Delete key.

When you exit the Show, the Show File Menu Screen will be
re-displayed. 


F2 - Screen Menu
----------------
Pressing F2 (or clicking both mouse buttons) at any time during
the show displays the Show's Screen Menu.  The top line of the
menu screen contains the Show's title.  Below the title, a
scrollable window displays the show's screen descriptions and
allows selection of the next screen to be viewed.

While in the screen selection window, the following keys and key
combinations are active:

            Dn/Mouse Down - Down one screen
              Up/Mouse Up - Up one screen
                     PgDn - Down 18 screens
                     PgUp - Up 18 screens
                     Home - Top of Window
                      End - Bottom of Window
                    ^Home - First Screen
                     ^End - Last Screen
         Enter/Click Left - Select screen and exit
          Esc/Click Right - Exit without screen change

Pressing <Enter> or clicking the left mouse button selects the
highlighted screen and resumes the show at the new starting
location.

Pressing <Esc> or clicking the right mouse button returns to the
show where you left off.

F3 - Special Effects Toggle
---------------------------
Shows may or may not contain special screen transition effects.
Most shows created for marketing / display-only purposes are
likely to contain screen effects.  While viewing the show in
manual mode, pressing the F3 key toggles special effects ON and
OFF.  When special effects are active, the "FX" indicator will
be displayed at the left of the help line (if the help line is
displayed).  When effects have been disabled, the "NoFX"
indicator is displayed instead.

First and Last Screens
----------------------
PgUp/Click Right when on the first screen or PgDn/Click Left on
the last screen will cause SHOW to "chirp" to let you know that
you were at the beginning or end of the show.  The current
screen will remain displayed.


AutoMode Operation
------------------
In AutoMode, SHOW continuously displays the Shows found in the
default or specified show directory (with the exception os
No-Show files, described below).  Prior to starting the display,
the file names are sorted in ascending alphabetic order.  This
allows user-specified ordering of the shows, merely by renaming
the files.  For example, the files TEST1.SHO, ZIGGIE.SHO, and
NEW1.SHO would be displayed in the following order: NEW1, TUTOR,
and ZIGGIE.  To change the show order to TUTOR, ZIGGIE, and
NEW1, the files should be renamed so that the new names are
sorted in the desired order:

C:>ren TUTOR.SHO SHOW1.SHO
C:>ren ZIGGIE.SHO SHOW2.SHO
C:>ren NEW1.SHO SHOW3.SHO

Any file names may be used (however, if the .SHO file is to be
later disassembled with the FirstLook Show Director program, the
file name should not exceed five characters).

No-Show Files
-------------
Files will be excluded from the AutoMode show if their name
starts with the "@" character.  Rather than deleting files
from the show directory, they can be easily renamed to a
filename starting with the "@" character.  (Note: if there is
only one file in the show directory it may not have the "@"
prefix).  

Starting and Running SHOW in AutoMode
-------------------------------------
To invoke AutoMode operation, the /AUTO parameter must be
used in the DOS command line used to start the SHOW program.

In addition, the /NOA (no acknowledgment) parameter may also be
used in conjunction with the /AUTO parameter to disable the
default 4-second show credit screen display.

The /NOFX parameter may also be specified to disable special
effects.  When /NOFX is used, screens are displayed
instantaneously and remain displayed for the duration specified
in the .SHO file.  As mentioned earlier, effects and display
timing are defined when the show is created and cannot be
altered by the viewer.

To start SHOW in AutoMode without the credit screen display, use
the following command line:

C:>SHOW [other parameters] /AUTO /NOA

No user prompts are displayed while in AutoMode.  At the
beginning of each show, SHOW displays the credit screen for 4
seconds (unless /NOA is used), then starts displaying show
screens automatically, using the special effects (unless /NOFX
is used) and screen timing values defined in the .SHO file.

AutoMode/Manual Mode Toggle
---------------------------
At any time during the show, pressing <F10> will toggle between
automatic and manual modes.  When F10 is pressed, an information
screen will be displayed, stating the program's new mode of
operation.  Pressing a key will resume operation under the new
mode.   When in AutoMode, <F10> is the only accepted keyboard
input.  The <F10> key will not be recognized if the program was
started in manual mode.

Automode Batch Operation
------------------------
AutoMode batch operation allows SHOW to start and end
automatically.  In this mode, the program may be included as
part of a batch file.

To specify Batch Mode, use the /AUTn parameter rather than
the /AUTO parameter.  The "n" suffix is a single digit from 0
to 9 which defines the number of shows to be displayed before
the program terminates and returns to DOS.  All other AutoMode
rules apply, but the program will not produce a display upon
startup.

The /NOA and /NOFX parameters may also be specified.

In Batch Mode, SHOW will automatically cycle through all
eligible .SHO files until the number of shows displayed equals
the "n" suffix in the /AUTn parameter.  If the show directory
only contains one file, then that show will be displayed n
times.  If the show directory contains two files and n=3, SHOW
will display the first show, the second show, the first show
again, and will terminate.

Continuous Unattended Operation
-------------------------------
If the /AUTX parameter is used, Show will start without
displaying its AutoMode startup prompt, and will run
indefinitely until the program is switched to manual mode via
the F10 key.  /AUTX allows SHOW to be included in an
AUTOEXEC.BAT file on a bootable diskette, for example.  As with
batch mode, /NOA and /NOFX may also be specified.

Video Adapter Support
---------------------
Shows are developed with color displays in mind, but they can be
viewed on any display.  Since the ShowMaker program allows
vibrant, high-intensity background colors, a color display is
strongly recommended.

SHOW automatically detects the following display types:

   - Color monitors attached to EGA and VGA adapters    
   - Monochrome monitors attached to MDA, Hercules, 
     EGA, and VGA adapters.

When a monochrome monitor is detected, SHOW will translate all
screen colors to provide a readable display.  Show also
recognizes the current video mode, which may be used to override
the installed hardware operation.

For monochrome composite video monitors attached to Color
Graphic Adapters (CGA), the DOS MODE BW80 command should be
used prior to starting SHOW to insure proper operation.

Certain special purpose monochrome monitors may not be
recognized by SHOW.  In this case, monochrome operation can be
forced by using the /BW command-line parameter.

WARNING: Problems have been reported when using show on systems
-------  equipped with certain generic CGA clones.  These adapters
         do not support the full CGA command set and will cause
         various problems, including unreadable garbage on the
         display screen and possibly complete system lockup.  If
         you experience this type of problem, use the /NH command
         line switch when using SHOW.  This will disable high-
         intensity backgrounds, but will cause high-intensity 
         backgrounds to be completely eliminated from the shows.
         SHOW is not responsible for these problems.  You should
         complain directly to your hardware vendor;  the only 
         remedy is an outright exchange of your Color Graphics
         Adapter for a unit that supports the full CGA command set.
         Similar problems may occur with generic early EGA clones
         which only implemented a subset of the IBM EGA BIOS.
         

FirstLook
---------
Screen shows are designed and assembled with the FirstLook
system, itself under development.  FirstLook is a commercial
product requiring a standard license agreement.

If you are interested in FirstLook, please send your written
inquiry to:

   The Silicon Frog, Inc.
   1514 South Drive
   Columbus, IN 47203
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1484

     Volume in drive A has no label
     Directory of A:\

    FILE1484 TXT      2073   1-02-90  12:18p
    GO       BAT        38   3-24-88   4:18p
    GO       TXT       694   7-13-89   4:04p
    Q4NEW    SHO     66861   9-25-89   4:10a
    QINS     SHO     34484   9-25-89   4:10a
    QLRN     SHO     25014   9-25-89   4:10a
    QMEI     SHO     15112   9-25-89   4:10a
    READ     ME       1288   9-25-89   4:10a
    SHOW     DOC     14807   9-25-89   4:10a
    SHOW     EXE     74727   9-25-89   4:10a
           10 file(s)     235098 bytes
                           81920 bytes free
