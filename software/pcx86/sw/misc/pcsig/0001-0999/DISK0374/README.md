---
layout: page
title: "PC-SIG Diskette Library (Disk #374)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0374/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0374"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 18"

    A collection of handy DOS programs and utilities that can be used to
    improve your system.  From the simple (a screen-clock routine), to the
    sublime (give programs access to DOS path-search capabilities.  Along
    with display controllers, security programs, and others, this disk can
    become a valuable part of your everyday operations.
    
    System Requirements: Some programs require BASIC
    
    How to Start: To read DOC or TXT files, enter TYPE filename.ext and
    press <ENTER>.  To run an EXE or COM program, just type its name and
    press <ENTER>.
    
    File Descriptions:
    
    AUTORES  BAT  Batch file for AUTOMENU under DOS 2.0
    FK20     DOC  Documentation for FK20.COM
    FK20     COM  Function key handler for PC-DOS 1.0 and 1.1
    EXL      EXE  Allows extension of DOS commands.
    EQUIP    DOC  Documentation for EQUIP.COM
    EQUIP    COM  Display of the equiptment installed in/on the PC/XT.
    DU       COM  Displays disk/directory information.
    DPATH    DOC  Documentation for DPATH.COM
    DPATH    COM  Gives programs a directory path search capability
    CLOKATTR DOC  Instructions to change clock display
    CLCK     COM  Displays clock and key status in the upper right hand
    CGCLOCK  DOC  Documentation for CGCLOCK.COM
    CGCLOCK  COM  Real time clock display for color/graphics display.
    CAL-YR   BAS  Displays a calendar for any given year.
    BANNER2  LBR  Library of the BANNER program files.
    BANNER2  BAT  batch file to extract all the files from BANNER.LBR
    AUTORES2 BAT  Same as AUTORES.BAT
    XTMENU   BAS  Menu and utilities program.
    UPDIR    COM  Utility to go back up the directory path
    SPRINT   DOC  Documentation for SPRINT.COM
    SPRINT   COM  Speedy PRINT replacement for IBM ROM BIOS routines.
    SPOOL20  COM  Improved print spooling utility.
    FLIP     COM  Control special key status (i.e. FLIP NUM OFF).
    KEYSTAT  DOC  Documentation for KEYSTAT.COM
    KEYSTAT  COM  Displays status of CapsLock and NumLock keys.
    KEYLOC_3 EXE  Modifies operation of the Alt, Ctrl, AND Shift keys.
    KEYLOC   DOC  Documentation for KEYLOC_3.EXE
    KBFIX    FIX  Patch to quiet the bell in KBFIX.COM
    KBFIX    COM  Change DOS keyboard buffer size.
    HGC      DOC  Documentation for HGC.COM
    HGC      COM  Screen Save Program for the Hercules Graphics Card
    SPEEDKEY DOC  Documentation for SPEEDKEY.COM
    LUE      COM  Used by BANNER2.BAT
    MONOCLK2 DOC  Documentation for MONOCLK2.COM
    MONOCLK2 COM  MONOCHROME Clock display.
    NPAD     COM  A windowing notepad.
    NOLF     DOC  Documentation for NOLF.EXE
    NOLF     EXE  Allows use of RADIO SHACK printer with the IBM PC.
    NOBLINK  COM  Prevents blinking of displayed characters.
    RE-VIEW  COM  Screen scroll buffer program
    PC-WINDO COM  Public domain attempt at SIDEKICK
    PASSWORD DOC  Documentation for PASSWORD.BAS
    PASSWORD DAT  Password file
    PASSWORD BAS  Provides password protection for you system
    NPAD     DOC  Documentation for NPAD.COM
    SPEEDKEY COM  Speeds up the PC keyboard.
    SNAPSHOT COM  DOS extension saves graphics screen in a disk file.
    SEARCH   DOC  Documentation for SEARCH.COM
    SEARCH   COM  Useful replacement for the DOS PATH command.
    SCRN     DOC  Documentation for SCRN.COM
    SCRN     COM  Shuts off display when it has not been used for a time
    S-LOCK   COM  Part of RE-VIEW.COM
    RUN      DOC  Documentation for RUN.COM
    RUN      COM  Allows execution of a file in a 'HIDDEN' directory
    RE-CLS   COM  Used by RE-VIEW.COM
    RE-VIEW  DOC  Documentation for RE-VIEW.COM
    REMIND   COM  Memo keeper. Like a string around your finger.
    RECALL   DOC  Documentation for RECALL.COM
    RECALL   COM  Allows retrieval of previously issued DOS commands
    RE-UP    COM  Used by RE-VIEW.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAL-YR.BAS

{% raw %}
```bas
10 CLS: DEFINT A-Z
20 DIM BD(28),DA(12,7,6),DM(12),M$(12)
30 FOR T=1 TO 12: READ DM(T): NEXT
40 FOR T=1 TO 28: READ BD(T-1): NEXT
50 FOR T=1 TO 12: READ M$(T): NEXT
60 INPUT "WHAT YEAR "; Y
70 X=Y-14: IF X<0 THEN 60
80 X= Y - (INT(X/28)*28 +14)
90 IF Y/4 = INT(Y/4) THEN DM(2)=29 ELSE DM(2)=28
100 C2=1:CO=BD(X)-1
110   FOR T=1 TO 12
120 C3=C3+1:CO=CO+1:DA(T,CO,C2)=C3:IF CO=7 THEN CO=0:C2=C2+1
130 IF C3<>DM(T) THEN 120 ELSE C3=0:C2=1
140   NEXT:  PRINT
150   FOR T=1 TO 12 STEP 3
160 LOCATE,10: PRINT M$(T) TAB(37) M$(T+1) TAB(63) M$(T+2): PRINT
180 PRINT "    S  M  T  W  T  F  S" TAB(29) "  S  M  T  W  T  F  S" TAB(55)        "  S  M  T  W  T  F  S"
190     FOR TR=1 TO 6
200       FOR TRR=1 TO 3
210 LOCATE ,(TRR-1)*26+2: PRINT " ";
220         FOR TT=1 TO 7
230 D=DA(T+TRR-1,TT,TR)
240 IF D=0 THEN D$="   ": GOTO 260
250 D$=RIGHT$(" "+STR$(D),3)
260 PRINT D$;
270         NEXT
280       NEXT:  PRINT
290     NEXT
300   NEXT
310 END
320 DATA 31,28,31,30,31,30,31,31,30,31,30,31,3,4,5,7,1,2,3,5,6,7,1,3,4,5,6,1,2,3,4,6,7,1,2,4,5,6,7,2," JANUARY ","FEBRUARY","  MARCH  ","  APRIL  ","  MAY  ", "  JUNE  ","  JULY  "," AUGUST ","SEPTEMBER","OCTOBER","NOVEMBER"
330 DATA "DECEMBER "
```
{% endraw %}

## CGCLOCK.DOC

{% raw %}
```

;------------------------------------------------------------------------
; source available from DAN OBRIEN upon request via message on GENE PLANTZ's
; PC-BBS in CHICAGO, IL.
;------------------------------------------------------------------------
; cgclock.asm - real time clock display for color/graphics
;		display. adapted from clock.asm found on one of
;		the PC-BBS in Chicago. Allows any color for time
;		by patching color value using DEBUG. Look for
;		      "Color value of time display="
;		and set byte follow "=" to BASIC color value.
;		Currently set to YELLOW (color number is 14 decimal).
;
;		Displays time in human form not computer, i.e.,
;		24 hour military time.
;
;		To enable military (24 hour) time display patch
;		using DEBUG the statement that says
;			     "Military time=N"
;		from "N" to "Y".
;
;		Also beeps the speaker every quarter hour.
;
;		To disable beeping on the quarter hours patch
;		using DEBUG the statement that says
;			     "Beep=Y"
;		from "Y" to "N".
;
;		Timer display is refreshed every N tics as defined
;		by a patchable area using DEBUG. Look for
;		      "Timer tics before time display refresh="
;		and the value after the "=" is binary 4. Patch to higher or
;		lower value as you wish to lengthen or shorten interval
;		between refreshes. Tics occur 18.5 times a second,
;		and after 4 (default) the display is refreshed with the time.
;		This keeps overhead of running cgclock to about 4 percent.
;
;		To start cgclock just enter "cgclock".
;		To toggle off and on enter "cgclock" repeatedly.
;
;	NOTE:
;		1. Uses user timer exit int 1Ch for timer display
;		2. Defines int 60h to toggle time off and on.
;		3. Displays time without annoying "snow"!
;			Technique from PC-Tech Journal Premier Issue.
;		4. Developed under DOS 2.0. Not tested under DOS 1.1
;			but should work.
;
; adapted from clock.asm by DANIEL M. O'BRIEN - 9 July 83 (Version 1.0)
;
; 1) meaningful labels added
; 2) made to work on color/graphics
; 3) use user timer exit int 1ch instead of 08h directly - slows down
;	disk drives, also allows BASIC to gain direct control of timer.
;	And use int 60h instead of 44h (44h defined by DOS 2.0)!
; 4) allow patching of time display color using DEBUG (Version 1.1)
; 5) meaningful comments added
; 6) include salutation
;
; DMO - 10 July 83 (Version 1.2)
; 7) beep on quarter hour and allow patching off
; 8) 12 hour clock with AM and PM indicator and allow patch for military time
;
; DMO - 21 July 83 (Version 1.3)
; 9) keep counter and update screen only after specified tics count.
;    currently set to 4 which yields an overhead of about 4 percent.
;    if set to 1, i.e., update every clock tic, then cgclock has a
;    overhead of about 20 percent.
;
; DMO - 31 July 83 (Version 1.4)
; 10) move some temporary data areas below init routine for less
;     resident space requirements.
;
; DMO - 12 Sept 83 (Version 1.5)
; 11) try different algorithm to stuff display into memory to reduce
;     possible interference with BASIC display to terminal
; 12) fix bug whereby BX was not being saved and restored when BEEP occured
; 13) fix bug whereby direction flag not set causing stray characters on
;     display
; 14) speedup entry and exit when not time to display
;
; FUTURE work
; 1) date
; 2) alarm clock
; 3) any suggestions?
;---------------------------------------------------------------
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
tions?
;---------------------------------------------------------
```
{% endraw %}

## CLOKATTR.DOC

{% raw %}
```
Following are instructions to change the video
attributes of the clock display produced by the
monochrome clock program on this BBS, in case you
are concerned about the long term effects on the
phosphor on your screen.
There are two bytes to be concerned with.
The byte at 11E (in debug) controls the attributes
for all the numerals, while the one at 148 controls
the attribute for the colon. (:)
To set the display to normal (un-hilighted), change
the byte at 11E to 07, and the one at 148 to 87.
If you don't want the colon to flash, change the byte
at 148 to 07.

Example: To turn off the hi-lighting,

A>debug monoclok.com
-e 11e 07
-e 148 87
-w
Writing xx bytes
-q

```
{% endraw %}

## DPATH.DOC

{% raw %}
```
DPATH gives programs a directory path search capability to
find data files and program overlays.  This is especially
useful for hard disks so that copies of overlays for programs
such as WordStar need not be kept in each directory where
the program is used.
 
To use DPATH, download DPATH.BIN using XMODEM or another
binary file transfer protocol, and rename it to DPATH.COM.
Then type DPATH followed by a series of path names separated
by semicolons (the same syntax as used by the DOS 2.X PATH
command).  The first time DPATH is typed after booting,
the message 'Resident part of DPATH loaded' appears and the
size of DOS increases by 544 bytes.  After this, when a
program opens a file for reading, the file will be searched
for in the current directory.  If it is not in the current
directory, it will be searched for in the directories
specified in the last DPATH command (in the order that they
were specified).  Files that are opened for writing will
be opened in the current directory.
 
To set a new data path search, enter DPATH followed by a
new list of paths.  Those new paths will replace the old
ones.  If DPATH ; is entered, all search paths will be reset.
If DPATH is entered with no argument, the current search
paths are displayed.
 
Restrictions:
DPATH will work with most (but not all) programs that are
written to work under DOS 1.1.  It will not work with
most programs that run only under DOS 2.X.  Whether a
program works or not is determined by how it opens files
that it uses.
 
Programs that are known to work with DPATH:
  1.  WordStar (for overlays).
  2.  Computer Innovations C86 compiler (for #include
      files).
 
Programs that are known not to work with DPATH:
  1.  IBM assembler (for include files).
 
 
                                David Micon 74216,2045
DPATH gives programs a directory path search capability to
find data files and program overlays.  This is especially
useful for hard disks so that copies of overlays for programs
such as WordStar need not be kept in each directory where
the program is used.
 
To use DPATH, download DPATH.BIN using XMODEM or another
binary file transfer protocol, and rename it to DPATH.COM.
Then type DPATH followed by a series of path names separated
by semicolons (the same syntax as used by the DOS 2.X PATH
command).  The first time DPATH is typed after booting,
the message 'Resident part of DPATH loaded' appears and the
size of DOS increases by 544 bytes.  After this, when a
program opens a file for reading, the file will be searched
for in the current directory.  If it is not in the current
directory, it will be searched for in the directories
specified in the last DPATH command (in the order that they
were specified).  Files that are opened for writing will
be opened in the current directory.
 
To set a new data path search, enter DPATH followed by a
new list of paths.  Those new paths will replace the old
ones.  If DPATH ; is entered, all search paths will be reset.
If DPATH is entered with no argument, the current search
paths are displayed.
 
Restrictions:
DPATH will work with most (but not all) programs that are
written to work under DOS 1.1.  It will not work with
most programs that run only under DOS 2.X.  Whether a
program works or not is determined by how it opens files
that it uses.
 
Programs that are known to work with DPATH:
  1.  WordStar (for overlays).
  2.  Computer Innovations C86 compiler (for #include
      files).
 
Programs that are known not to work with DPATH:
  1.  IBM assembler (for include files).
 
If you would like to have me upload the source, please
contact me.
 
                                David Micon 74216,2045

```
{% endraw %}

## EQUIP.DOC

{% raw %}
```
3/19/84                  DOCUMENTATION FOR EQUIP.COM


WRITTEN BY: EVERETT DELANO
            P.O. BOX 205
            ELK CITY, OKLA. 73648


     THE EQUIP.COM PROGRAM READS THE SWITCH SETTINGS ON THE SYSTEM BOARD AND
PRODUCES A DISPLAY OF THE EQUIPMENT INSTALLED IN/ON THE IBM-PC/XT.
THE DISK DRIVE STATISTICS FOR THE SELECTED DRIVE ARE ALSO DISPLAYED.

                    ***************EXAMPLES***************

         A>EQUIP
                    PRODUCES STANDARD EQUIPMENT LIST WITH STATISTICS
                    FOR THE DEFAULT DISK DRIVE.

         A>EQUIP B
                    PRODUCES STANDARD EQUIPMENT LIST WITH STATISTICS
                    FOR DISK DRIVE B:.

     THE DISK DRIVE DESIGNATION IS ANY LEGAL DRIVE LETTER. IT WILL GIVE THE
BYTES/DISK  &  BYTES-FREE  FOR A FIXED DISK  UP TO 99 MEGABYTES.

     EQUIP.COM DISPLAYS THE VERSION OF PC-DOS THAT IS CURRENTLY RESIDENT IN
THE COMPUTER.  THE ROM RELEASE DATE IS ALSO DISPLAYED.(THIS IS THE RELEASE
MARKER THAT IS ON THE READ ONLY MEMORY IN THE MACHINE)

                ***************SAMPLE DISPLAY:***************

                     Equipment Installed on your IBM - PC



MEMORY on System Board   :        64 K              - - - FLOPPY DISK - - - -
                                                   | DRIVE SELECTED * * * * B |
TOTAL MEMORY in System   :       320 K             | SIDES on Disk:         2 |
                                                   | SECTORS/TRACK:         9 |
Number of DISK DRIVES    :   2 ------------------->| BYTES/SECTOR :       512 |
                                                   | BYTES/DISK   :    362469 |
Number of PRINTER CARDS  : 1 <Parallel Printers>   | BYTES-FREE   :    204800 |
                                                    - - - - - - - - - - - - -
Number of RS-232 CARDS   : 2 <Async. Communications>

COLOR GRAPHICS VIDEO CARD:

NO GAMES ADAPTER CARD    :

                          IBM PC-DOS VERSION:  2.10
                        R O M Release Date :  10/19/81
PTER CARD    :

                          IBM PC-DOS VERSION:  2.10
                        R O M Release Date :  1
```
{% endraw %}

## FILES374.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 374   DOS Utilities #2                                  V1.1 DS
------------------------------------------------------------------------
A collection of handy DOS programs and utilities that can be used to
improve your system.
 
ANSIPCH  EXE  Part of Re-View
AUTORES  BAT  Batch file for AUTOMENU under DOS 2.0
AUTORES2 BAT  Same as AUTORES.BAT
BANNER2  BAT  Batch file to extract all the files from BANNER2.LBR
BANNER2  LBR  Library of the BANNER program files.
CAL-YR   BAS  Displays a calendar for any given year.
CGCLOCK  COM  Real time clock display for color/graphics display.
CGCLOCK  DOC  Documentation for CGCLOCK.COM
CLCK     COM  Displays clock and key status in the upper right hand
              corner of the screen.
CLOKATTR DOC  Instructions to change the clock display produced by the
              monochrome clock program.
DPATH    COM  Gives programs a directory path search capability to find
              data files and program overlays.
DPATH    DOC  Documentation for DPATH.COM
DU       COM  Displays disk/directory information.
EQUIP    COM  Display of the equiptment installed in/on the IBM-PC/XT.
EQUIP    DOC  Documentation for EQUIP.COM
EXL      EXE  Allows extension of DOS commands.
FK20     COM  Function key handler for PC-DOS 1.0 and 1.1
FK20     DOC  Documentation for FK20.COM
FLIP     COM  Control special key status (i.e. FLIP NUM OFF).
HGC      COM  Screen Save Program for the Hercules Graphics Card
HGC      DOC  Documentation for HGC.COM
KBFIX    COM  Change DOS keyboard buffer size.
KBFIX    FIX  Patch to quiet the bell in KBFIX.COM
KEYLOC   DOC  Documentation for KEYLOC_3.EXE
KEYLOC_3 EXE  Modifies operation of the Alt, Ctrl, AND Shift keys.
KEYSTAT  COM  Displays status of CapsLock and NumLock keys.
KEYSTAT  DOC  Documentation for KEYSTAT.COM
LUE      COM  Used by BANNER2.BAT
MONOCLK2 COM  MONOCHROME Clock display.
MONOCLK2 DOC  Documentation for MONOCLK2.COM
NOBLINK  COM  Prevents blinking of displayed characters.
NOLF     EXE  Allows use of RADIO SHACK printer with the IBM PC.
NOLF     DOC  Documentation for NOLF.EXE
NPAD     COM  A windowing notepad.
NPAD     DOC  Documentation for NPAD.COM
PASSWORD BAS  Provides password protection for you system
PASSWORD DAT  Password file
PASSWORD DOC  Documentation for PASSWORD.BAS
PC-WINDO COM  Public domain attempt at SIDEKICK
RE-VIEW  COM  Screen scroll buffer program
RE-VIEW  DOC  Documentation for RE-VIEW.COM
RE-CLS   COM  Used by RE-VIEW.COM
RE-UP    COM  Used by RE-VIEW.COM
RECALL   COM  Allows retrieval of previously issued DOS commands
RECALL   DOC  Documentation for RECALL.COM
REMIND   COM  Memo keeper. Like a string around your finger.
RUN      COM  Allows execution of a file in a 'HIDDEN' directory
RUN      DOC  Documentation for RUN.COM
S-LOCK   COM  Part of RE-VIEW.COM
SCRN     COM  Shuts off display when it has not been used for a time
SCRN     DOC  Documentation for SCRN.COM
SEARCH   COM  Useful replacement for the DOS PATH command.
SEARCH   DOC  Documentation for SEARCH.COM
SNAPSHOT COM  DOS extension saves graphics screen in a disk file.
SPEEDKEY COM  Speeds up the PC keyboard.
SPEEDKEY DOC  Documentation for SPEEDKEY.COM
SPOOL20  COM  Improved print spooling utility.
SPRINT   COM  Speedy PRINT replacement for IBM ROM BIOS routines.
SPRINT   DOC  Documentation for SPRINT.COM
UPDIR    COM  Utility to go back up the directory path
XTMENU   BAS  Menu and utilities program.
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FK20.DOC

{% raw %}
```

**********************************************************************
  DOCUMENTATION FOR FK : A FUNCTION KEY HANDLER FOR PC-DOS 1.0 and 1.1
**********************************************************************

I.  Introduction

	This document describes the program FK, a function key handler for
use under IBM PC-DOS versions 1.0 and 1.1.  The program may not work
under other versions of DOS.

	This document is up-to-date as of Halloween 1982.

	The program was developed under a grant from Userview Corporation.


II.  Rationale

	Under standard PC-DOS, the ten function keys are not used to their
full potential.  The keys are used for simple command line editing, and
several of the functions are duplicated by other keys on the keyboard.
FK allows you to assign strings up to 24 characters in length to each
of the function keys, so you can give an entire command or file name
with a single keypress.

	For those who use the normal PC-DOS command line editing facilities,
FK moves functions not already duplicated to keys on the cursor moving pad.


III.  Using the program

	There are five different actions available with FK.  They all
begin with the command name 'FK'; of course, the FK program (FK.COM) must be
available on the selected disk drive when the command is issued.

	The actions are as follows:

	SHOWING THE DEFINITIONS:  You may display the current definitions
of the ten function keys by giving the command "FK". Control characters
imbedded in the strings are displayed as ^x (just as they are echoed
during command line input) except for carriage return (ENTER), which is
displayed as a vertical bar. Users with a printer may get
a hardcopy of their definitions by pressing CTRL-PRTSC before giving the
FK command.  Note that earlier versions of FK used a leftward-pointing
arrow (ASCII 27) to show a carriage return; this was changed to a
vertical bar for consistency with "FK Fn" (see below) and to avoid
problems with printers which use ASCII 27 (ESC) as a special code.

	REDEFINING A KEY:  You may assign a string to one of the function
keys by giving the command "FK Fn <string>" where n is the number of the
key to assign (1 thru 10), and <string> is the string of characters you
wish to get when you press that key.  For example, "FK F1 DIR" would
assign the directory command "DIR" to function key F1.  You may include
a carriage return in the string by using the vertical line character (|)
wherever you want the CR; for example, "FK F1 DIR|" would do the directory
command immediately upon your pressing F1 (in the previous case, you would
have to press ENTER yourself after pressing F1).  Keys may only be assigned
strings of up to 24 characters in length; strings which are too long will
be truncated without warning.

	SAVING THE DEFINITIONS:  You may save the current definitions of
the function keys to a disk file for later use (see LOADING below).  To
do so, give the command "FK SAVE <fname>" where <fname> is the name of
the file in which to save the definitions.  For example, "FK SAVE MY.KEY"
would save all current key assignments in the file "MY.KEY".  Any valid
filename may be used, but the use of the ".KEY" extension is recommended
for clarity.

	LOADING KEY DEFINITIONS:  You may recover key definitions previously
saved with "FK SAVE" by typing "FK LOAD <fname>", where <fname> is the
name of the file containing the key definitions.  You should *only* use
this command on files which have been created by "FK SAVE"; if you don't,
FK will probably not accept the file.  The key definitions which are
automatically loaded with FK when it is first called should be available
in the file "STD.KEY" on the disk with this document.

	GETTING HELP: You can get a rundown of these command formats by
typing "FK HELP".


	FK, Quad Version

	The new version of FK supports definition of all four banks
(normal, shifted, ALT, and CTRL) of the function keys.	An expanded
version of the HELP message is available in the new FK.


IV.  Notes

	Abbreviations: You can use S, L, and H as abbreviations for
"SAVE", "LOAD", and "HELP", respectively.  For example, you might type
"FK L STD.KEY" to recover those definitions.

	Warning concerning key files:  Attempting to load key files
which were not created with "FK SAVE" or which were altered with DEBUG
or some editor may result in system crashes.

	Command line editing facilities:  As mentioned, the old actions
assigned to the function keys have been moved to the cursor keypad.
F1 (copy one char from template) has always been duplicated by the cursor-
right key.  With FK active, the skip/copy function of F2 is moved to
the cursor-up key.  Copy-remaining (F3) is moved to the END key.
Skip/delete (F4) is now assigned to the down-arrow key. Move-displayed (F5)
has been reassigned to the BACKTAB (shift-tab) key. (NOTE: versions
of FK before 8/27/82 used the HOME key for this purpose.)

	F6 was used by DOS to issue the end-of-file mark, ^Z.  The
standard key definitions leave ^Z assigned to F6, but if you need to
change this, you can always signal end-of-file by typing CTRL-Z.


V. Additions to revision 2

	The following enhancements have been added to FK (version 08/27/82).
Thanks to Webb Blackman, Jr. , and Michael Sullivan for suggestions and
comments.

	* QUIET MODE: To prevent extraneous output during FK processing
	  (for example, the possibly unwanted listing of key definitions
	  during a "load" in an autoexec file), the 'quiet mode' option
	  has been added.  Preceeding any command letter with 'Q' causes
	  most output to be suppressed.  Copyright notices and error
	  messages will be displayed even if quiet mode is requested.
	  Example: "FK QL DEV.KEY" to 'quietly' load the definition file
	  "DEV.KEY".

	* WIDE DISPLAY:  Preceeding any command letter with 'W' causes
	  key definitions to be displayed two per line.  One can
	  also use "FK W" to simply display the keys in the wide format.

	* DEFAULT EXTENSION:  If no extension is supplied on loading
	  or saving keys, FK adds ".KEY" to the file name.

	* ONE-KEY SCREEN CLEAR: The HOME key now clears the screen and
	  issues a carriage return.  As mentioned above, previous versions
	  of FK had used HOME for the old F5 function; 08/27/82 FK uses
	  BACKTAB for this function.

	* EASIER PATCHING:  FK has been recoded to facilitate patching
	  to support nonstandard versions of DOS (i.e. RAMDrive, Davong,
	  JEL, etc). Patching methods are available in the document
	  FKPATCH.DOC.

	The author may be contacted at:

		Jeffrey P. Garbers
		890E Clubhouse Circle West
		Decatur, GA 30032

		or via SourceMail at CL0040

		or via the PC Midnight Express at 404-294-6879.




```
{% endraw %}

## HGC.DOC

{% raw %}
```
           Screen Save Program for the Hercules Graphics Card

There is in circulation on electronic bulletin boards, magazines and
users groups a program called variously, Mono Blank, Monitor Blank,
MONBLK2, SCRNSAVE, and probably a few other things by now too.  The
program is designed to remove the display from the monochrome screen
after some period of inactivity.  This is meant to protect the monitor
from having an image burned into the phospher if something is left on
the screen for a long time.  The programs will work on IBM's monochrone
board, but are quite unsuitable for use with a monochrome graphics card.
This is because in graphics mode the 6845 CRT controller chip operates
with a different set of controlling parameters than it uses in a text
mode.  If one of these programs goes into effect while the board is in
graphics mode it will remove the display, but will not replace proper
parameters.  Quite severe monitor damage can result.

On this diskette is a file called HGC.COM.  It is an elaboration of the
HGC.EXE file that has been shipped with the Hercules Graphics Card model
GB101.  The program will blank the screen after there has not been any
activity at the keyboard for five minutes.  It will ONLY run properly on
the Hercules Graphics Card.  Do NOT use this program with a regular IBM
Monochrome Display/Printer Adapter Card, or any video adapter other than
the Hercules Graphics Card. If you are using any other version of this
program with a Hercules Graphics Card you should immediately get rid of
it.  And tell anyone else that you know who may be using it in the same
situation to do so as well.  This program was written by Hercules in
response to a number of their customers who were having unfortunate
experiences with other versions of this program.

To use the program simply type "HGC SAVE" while at the DOS level.  If you
want to incorporate this command in a regular start-up configuration for
the Hercules Card, you can specify "HGC FULL SAVE" or "HGC HALF SAVE".
After the program takes effect, and blanks the screen, the display may be
restored by striking any key.  (The shift key is recommended, because the
keystroke will be processed.)

```
{% endraw %}

## KEYLOC.DOC

{% raw %}
```
Keyloc  -  Keyboard Lock Program
--------------------------------

    Keyloc is a patch to the BIOS keyboard routine.  It modifies the
    operation of the Alt, Ctrl, Left Shift and Right Shift keys. It allows
    one finger typing by locking those keys in their shifted state.

    Normally the Ctrl, Alt, Left Shift, and Right Shift keys have to be held
    down with one finger, while another finger is used to type another key.
    For example, if a program requires you enter a ^P, you must hold down
    the Ctrl key with one finger, then depress the "P" key with another.

    When Keyloc is loaded in memory, it changes the way these keys operate.
    To type in a ^P, you first type and release the Ctrl key. This locks the
    Ctrl key in it's shifted state. Next the "P" key is depressed and
    released. This enters a ^P. Depressing Ctrl again takes the key
    from it's shifted to unshifted state.

    Keyloc gives an audio signal so the user can tell when he is shifting or
    unshifting a key.  The first time the Ctrl key is depressed, a low tone
    followed by a high tone is sounded.  This signals that the key has been
    put in the shifted state. The next time the Ctrl key is depressed, a high
    tone followed by a low tone is sounded.  This signals that the key has
    been returned to the unshifted state.

Loading Keyloc Into Memory
--------------------------

    The program Keyloc is loaded into memory by executing the program
    KEYLOC. This can be done by typing in the name of the program, KEYLOC,
    with the the file KEYLOC.EXE on the diskette in the default drive.

    Keyloc remains loaded in memory until the system is rebooted.  It uses
    approximately 500 bytes of memory.

Which Version of Keyloc to Use
------------------------------

    Because Keyloc is only a patch to a program that already exists in
    the ROM of the IBM PC, it may not work if changes are made to the
    code in the ROM.

    There are at least 3 versions of ROM-BIOS for the IBM PC and the new
    IBM XT.  The original Keyloc patch worked for the first two versions,
    but changes to it were required by the latest version of ROM-BIOS.

    The original Keyloc is "KEYLOC.EXE".  It should work if you purchased
    your PC before the release of the IBM XT.

    A modified version of Keyloc is "KEYLOC_3".  This should work if you
    have an IBM XT or an IBM PC purchased after the XT was released.

    You can find out which version of ROM-BIOS you computer has by
    using the DEBUG program to print out the release marker of
    your ROM.  Type in "DEBUG" to start the program, then type the
    command "D F000:FFF5 L 8".  A date will be displayed that indicates
    which ROM you computer has.

        "04/24/81"  - Version 1, use "KEYLOC.EXE"
        "10/19/81"  - Version 2, use "KEYLOC.EXE"
        "10/27/82"  - Version 3, use "KEYLOC_3.EXE"

```
{% endraw %}

## KEYSTAT.DOC

{% raw %}
```

Displays status of CapsLock and NumLock keys.

Turn on with  KEYSTAT ON,  off with  KEYSTAT OFF


```
{% endraw %}

## MONOCLK2.DOC

{% raw %}
```
.FO MONOCLK2.DOC
The 'MONOCLK2.HEX' file on the download menu is similar 


The 'MONOCLK2.HEX' file on the download menu is similar 
to 'MONOCLOK.HEX'.  That is, it will put a clock display 
in the upper right corner of a monochrome display. 
The improvement is that now you can turn off the clock 
without having to re-boot.  Each time the program is 
run from DOS, the clock display is toggled on or off.
You can also toggle the display by executing an
interrupt type 44h from within a program.
If you use another timer-interrupt driven routine, such as
a spooler, run the spooler before you run this program.
Use the 'HEX2BIN' program to generate a COM file from
the HEX file. (Note: You must use the COM extension,
EXE will not work.)
 
		Rich Winkel
		Columbia, Mo.

```
{% endraw %}

## NOLF.DOC

{% raw %}
```
NOLF   WRITTEN BY RICHARD HAMILTON

ALLOWS RADIO SHACK PRINTERS TO BE USED WITH THE IBM PC WITHOUT DOUBLE SPACING.


```
{% endraw %}

## NPAD.DOC

{% raw %}
```
This program was copied out of the 12/25 issue of PC Magazine
as a windowing notepad. It works fine as is, but the description
in the article as how to change the CRTL N as the triggering
keys does not work. I don't know enough to correct it. CRTL N
is not a good combination, as Wordstar, dBASE and probably use
it in the program and would preclude using the notepad in these
programs. It would be handy to have to make notes to your self
should the phone ring or you get a brilliant idea in the middle
of a Wordstar or dBASE program.

I have included the basic program that creates a .COM file and
the comfile as well. Another small problem is that the window
overlays the display generated by the program CLOCK. This is
not too serious, but perhaps some enterprising soul could
modify the code to move the window down a couple of rows. In
the magazine there is also the source code in Assembly Code.

To use the program, simply type at the A>NPAD (Rtn), then to
invoke the window, type anytime, CTRL N, and the window pulls
up in the upper right corner of the screen. Simply type in
your notes, the lines auto wrap. When finished, another
CTRL N turns off the window, but the note stays in memory
and can be called up anytime. Rebooting or turning off the
system naturally clears the memory, so to print the message
use Prtsc.

The article tells how to change or rather add colors to the
window, however I have a mono display and did not do these
changes, besides the ones to change from the CTRL N to a
CTRL ` didn`t work for me and had to leave it as is.

ot do these
changes, besides the ones to change from the CTRL N to a
```
{% endraw %}

## PASSWORD.BAS

{% raw %}
```bas
1000 '=========================================================================
1010 'PASSWORD.BAS (From "Softalk", March, May & July, 1984)
1015 'minor mods and color added by P. Eskildsen, July 10, 1984
1020 'Uses BASICA 2.0 key trapping to kill Ctrl-Alt-Del, Ctrl-C, & Ctrl-Break:
1030 '
1040 KEY OFF :COLOR 2,0,1
1050 KEY 15,CHR$(12) + CHR$(83)                'CTRL-ALT-DEL
1060 KEY 16,CHR$(4) + CHR$(46)                 'CTRL-C
1070 KEY 17,CHR$(4) + CHR$(70)                 'CTRL-BREAK
1080 ON KEY(15) GOSUB 1120 : KEY(15) ON
1090 ON KEY(16) GOSUB 1120 : KEY(16) ON
1100 ON KEY(17) GOSUB 1120 : KEY(17) ON
1110 GOTO 1130
1120 BEEP:COLOR 12:PRINT "So there!":COLOR 2:RETURN
1130 '
1140 '
1150 'Read in password
1160 '
1170 OPEN "password.dat" FOR INPUT AS 1
1180 LINE INPUT#1,PASSWORD$
1190 CLOSE
1200 '
1210 'Check user's password entry one char at a time, as entered:
1220 '
1230 WHILE INKEY$ <> "": WEND
1240 CLS: PRINT "Please enter your password:"
1250 TRY = 0
1260 I = 1
1270 A$ = INKEY$:IF A$ = "" THEN 1270
1280 IF A$ = "}" THEN 1330
1290 IF MID$(PASSWORD$,I,1) <> A$ THEN GOTO 1340
1300 IF I = LEN(PASSWORD$) THEN GOTO 1330
1310 I = I + 1:IF I > LEN(PASSWORD$) + 1 THEN GOTO 1340
1320 GOTO 1270
1330 PRINT:LOCATE ,30:COLOR 26:PRINT "Welcome!":COLOR 2,0,1:SYSTEM
1340 'destroy system!
1350 TRY = TRY + 1
1360 COLOR 14:IF TRY < 3 THEN PRINT "Wrong! Try again from start of password.":GOTO 1260
1370 CLS:COLOR 23,4,4:CLS
1375 LOCATE 12,20 :PRINT "- Illegal entry attempt! System killed -"
1380 DEF SEG = 0
1390 FOR I = 0 TO 32767:POKE I,0:NEXT
```
{% endraw %}

## PASSWORD.DOC

{% raw %}
```


                               PASSWORD.BAS
                               (Version 1.1)

This BASICA 2.0 program reads a password from a user-defined file called
PASSWORD.DAT and compares it character-by character with the keyboard entry
of the password. It starts over each time an error of any kind is made and
kills the system by zeroing low memory after three errors are made.

During the running of PASSWORD.BAS the control sequences Ctrl-Alt-Del,
Ctrl-C, & Ctrl-Break are disabled.

To control a password-controlled system, create an autoexec.bat file as
follows on each system disk or in the root (\) directory of your hard disk:


     Prompt  user enters
     ------  --------------------------
         A>  copy con autoexec.bat     | & press {return}
             basica password           | & press {return}
             date                      | & press {return}
             time                      | & press {return}
             {F6}  or {Ctrl}Z          | & press {return}

If you alseady have an Autoexec.bat file simply edit the file so that the
line "basica password" is the first one in the file.

Naturally, BASICA.COM, PASSWORD.DAT, and the above AUTOEXEC.BAT files must
all be on the system disk in the root directory.

A password file called PASSWORD.DAT has already been created with the
password of 'system manager'. If you want a different password enter:

     Prompt  user enters
     ------  --------------------------
         A>  copy con password.dat     | & press {return}
             {your password}           | & press {return}
             {F6}  or {Ctrl}Z          | & press {return}

If you forget your password the program allows the character "}" as an
alternate.

7/10/84 - Version 1.1 now supports color (also works fine on IBM
          or equivalent high-res monochrome monitors). Have fun!
next    - maybe some good sole would like to compile the program or
          better yet translate it to assembler or Turbo Pascal.

```
{% endraw %}

## RE-VIEW.DOC

{% raw %}
```
		 ----------------------------------------
		|	  *** RE-VIEW  1.8 ***		 |
		|					 |
		|  Copyright (C) 1983 by Vincent T. Bly  |
		|					 |
		|   RE-VIEW is a user supported program. |
		| If you use RE-VIEW, send $15 to:	 |
		|	     Vincent Bly		 |
		|	     P. O. Box 409		 |
		|	     Ft. Belvoir, VA  22060	 |
		|					 |
		|   You are encouraged to give copies of |
		| this software and documentation to your|
		| friends.  Please make sure it includes |
		| the notice above.  Anyone who wishes to|
		| get RE-VIEW directly from the author	 |
		| can send $22 which covers the software,|
		| diskette, mailer, and postage.	 |
		|					 |
		|   Support will be provided to users who|
		| have paid for the program.  Send your  |
		| clearly worded questions to the above  |
		| address.  A stamped, self-addressed	 |
		| envelope will speed replies.		 |
		 ----------------------------------------


   GENERAL DESCRIPTION
   -------------------
       RE-VIEW provides enhanced text display capabilities for the IBM PC
   or PC-XT equipped with the standard Color/Graphics Adapter.	It is also
   compatible with the COMPAQ portable computer.  RE-VIEW can be used with
   MS-DOS 1.0, 1.1, or 2.0.  Its main features include:
       a) A 75 line screen buffer which saves text as it scrolls off the
   top of the active display page.
       b) The ability to review the 75 line screen buffer and the active
   display page together as one virtual screen of 100 text lines.
       c) The ability to scroll rapidly up and down the 100 line virtual
   screen, a line at a time or a page (25 lines) at a time.
       d) The ability to quickly pause normal screen display by tapping
   the [Scroll Lock] key.  During the pause, you can review any text in
   the 100 line virtual screen.
       e) The ability to temporarily stop saving new scrolled text, so
   that text already in the buffer is preserved for future reference.
       f) An improved scrolling routine with substantually reduced flicker.


   PAGING KEYS
   -----------
       RE-VIEW uses the extreme right-hand [-] and [+] keys for page up and
   page down functions, respectively (the normal [-] and [+] keys are not
   affected).  These keys are used by RE-VIEW to avoid incompatibility with
   other programs which use the [Pg Up] and [Pg Dn] keys for their own
   purposes.
       In the text below, "rgt[-]" and "rgt[+]" signify the extreme right-
   hand [-] and [+] keys, respectively.  "<shft>rgt[-]" and "<shft>rgt[+]"
   signify the shifted right-hand [-] and [+] keys.


   LIMITATIONS
   -----------
       RE-VIEW only operates with the Color/Graphics Adapter.  It is NOT
   compatible with the Monochrome Display Adapter.  RE-VIEW's main features
   operate in the 80 column text mode only (although the quick pause feature
   can be used from any display mode).	Also, the DOS 2.0 ANSI.SYS device
   driver is not compatible with RE-VIEW; however, a patching program is
   provided with RE-VIEW which will create a compatible version of ANSI.SYS.


   INSTALLING RE-VIEW
   ------------------
       RE-VIEW can be installed from DOS by typing the command: RE-VIEW
   and pressing return.  Normally, you would include this command in your
   AUTOEXEC.BAT file.  Once RE-VIEW has been installed, it will remain in
   your system--ready to provide the capabilities listed below--until you
   turn your system off or reboot with <Ctrl><Alt>[Del].


   USING RE-VIEW
   -------------
       RE-VIEWs features can be used any time your computer is waiting for
   keyboard input.  The function of the keys used by RE-VIEW are as follows:

   rgt[-] or rgt[+] ... These keys allow you to quickly scroll up or down
			through the 100 line virtual screen, a line at a time.

   <shft>rgt[-] or <shft>rgt[+] ... These keys allow you to move up or down
			through the 100 line virtual screen, a page at a time
			(there are a total of 4 pages).

   <Alt>[Scroll Lock] ... This key combination allows you to toggle saving of
			scrolled text into the 75 line buffer.	In order to
			help you keep track of the current state--an audible
			signal will be sounded as follows:
				   2 BEEPS - scrolled text will be saved,
				   1 BEEP  - scrolled text will not be saved.
			   This feature can be used to save text created by
			one program for later review by another.  For example,
			you could use TYPE to display up to 75 lines of your
			program source code.  Next, you would scroll the lines
			off the screen to save them in the 75 line buffer.*
			Next, you would press <Alt>[Scroll Lock] to prevent
			future scrolled lines from disturbing the contents of
			the buffer.  Now, you could enter DEBUG to analyze
			your program, while--at any time--being able to review
			your commented source code using RE-VIEW's paging keys
			(rgt[-], etc.).
			*  The UP.COM program, included with RE-VIEW, makes
			scrolling the text into the buffer easier--see the
			description near the end of this documentation.

       RE-VIEW's features can also be used while your computer is displaying
   text on the screen.	First--you must pause the screen display by pressing
   the [Scroll Lock] key.  During the pause you may use the keys listed below:

   rgt[-] or rgt[+] ... Scroll up or down through the 100 line virtual
			screen, a line at a time.

   <shft>rgt[-] or <shft>rgt[+] ... Move through the (4 page) virtual screen,
			a page at a time.

   <Alt>[Scroll Lock] ... Toggle between saving and not saving scrolled text.

   <Ctrl>[Scroll Lock] = "Break" ... Perform a Break immediately.  Unlike the
			<Ctrl>[Num Lock] pause, the [Scroll Lock] pause does
			not throw away the key used to restart.  Therefore you
			do not need to hit the "Break" key twice.

   Any Other Key (including [Scroll Lock]) ... Restart normal screen display.


   COMPATIBLE PROGRAMS
   -------------------
       RE-VIEW is compatible with most text producing programs which print
   to the screen using the standard DOS or ROM routines.  Known compatible
   programs include:
	       DIR, TYPE, <MORE, TREE, COMP, DEBUG, EDLIN, and BASIC.


   DEACTIVATING RE-VIEW
   --------------------
       Some programs will not be compatible with RE-VIEW.  These include:
			a) programs which access screen memory directly;
			b) programs which use screen pages other than page 0;
			c) and, programs which use the same keys as RE-VIEW.
   When you use one of these programs or need to use the right-hand [-] and
   [+] keys for data entry, you can--temporarily--deactivate RE-VIEW by
   pressing <Ctrl><Alt>[Scroll Lock].  When deactivated, RE-VIEW will have
   no effect on system processing except for a small routine which will wait
   for the next press of <Ctrl><Alt>[Scroll Lock], which you can use to
   reactivate RE-VIEW.	NOTE: you should use this feature from DOS, not from
   an application program (for example, you can deactivate RE-VIEW from BASIC,
   but must return to DOS to reactivate it).


   USING RE-VIEW WITH BASIC
   ------------------------
       RE-VIEW's features can be very helpful in BASIC, especially when list-
   ing long programs.  It is also compatible with SofTool Systems' BASIC
   Development System (BDS).  However, you should be aware that many BASIC
   programs will destroy the contents of RE-VIEW's screen buffer when they
   are run.  Most WIDTH and SCREEN commands will clear the buffer, some other
   commands may also.  However, this does not affect RE-VIEW's assistance in
   reviewing listing of large BASIC programs or the output of utilities such
   as SofTool's BDS.


   AUXILIARY PROGRAMS
   -------------------
       Three auxiliary programs are included with RE-VIEW:
	    CLA.COM ....... This program provides the DOS command CLA, which
			    operates like DOS 2.0's CLS command, except that
			    all 100 lines of the virtual screen are cleared.
	    UP.EXE ........ This program provides the DOS command UP, which
			    scrolls the text above the cursor just off the
			    top of the screen into the 75 line save buffer.
			    (Use it with <Alt>[Scroll Lock] to save text pro-
			    duced by one program for later review by another.)
	    ANSIPCH.EXE ... This program patches DOS 2.0's ANSI.SYS program
			    to provide compatibility with RE-VIEW (see below).


   USING RE-VIEW WITH ANSI.SYS
   ---------------------------
       If you are using the DOS 2.0 ANSI.SYS device driver, you will need to
   patch it for compatibility with RE-VIEW.  The original ANSI.SYS does not
   use the standard ROM routines for scrolling.  Therefore, RE-VIEW will be
   ineffective on systems using the original ANSI.SYS driver.  The program,
   ANSIPCH.EXE, creates a patched version of ANSI.SYS which is compatible
   with RE-VIEW and provides all the features of the original ANSI.SYS.
       You can patch ANSI.SYS as follows:
		1 ... Make sure the disk you are using has a copy of the
		      files "ANSI.SYS" and "ANSIPCH.EXE".
		2 ... Type ANSIPCH and press return.  In a few seconds, you
		      should see the message -
		      "*** Patch complete. Patched version = ANSIR.SYS ***".
		3 ... Edit your CONFIG.SYS file, changing the line -
		      "DEVICE = ANSI.SYS" to
		      "DEVICE = ANSIR.SYS".
		4 ... Re-boot your system to install the patched version of
		      ANSI.SYS.  Now install RE-VIEW by typing RE-VIEW and
		      pressing return; everything should work properly now.
		Note: ANSIPCH.EXE presumes the original version of ANSI.SYS
		      (dated 03/08/83) is on the default disk drive.  If it
		      is not found, ANSIPCH will abort after displaying the
		      message -
		      "* Cannot open ANSI.SYS *".
		      If ANSI.SYS is found, but does not compare with the
		      original version, ANSIPCH will abort after displaying
		      the message -
		      "* Unfamiliar version of ANSI.SYS, patching aborted. *"


   CREDITS
   -------
       IBM is a registered trademark of International Business Machines Corp.
       COMPAQ is a trademark of COMPAQ Computer Corporation.
       BASIC Development System (BDS), copyright (C) SofTool Systems 1982.



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## RECALL.DOC

{% raw %}
```


         RECALL                g.r.a.m.  Associates                 RECALL



         Purpose:  Recall permits the user to retrieve any one of up to 50
             unique DOS commands previously issued by the user.  Once
             retrieved, the command may be executed as is or modified by
             the user via the normal DOS line editing keys.

         Usage:  RECALL [-qb?]
                       -q  Suppresses the initial help screen when Recall
                           is loaded.
                       -b  Suppresses the loading and the end-of-buffer
                           bells.
                       -?  Produces a help screen without loading Recall.

         Operation:  F10         - recall the next oldest command.
                     Alt-F10     - recall the next newest command.
                     Shift-F10   - toggle the recall feature on and off.

         Note:  Attempts to recall beyond the first command issued (or the
             last command) are accompanied by a chirp (the end-of-buffer
             bell).  Recall will subsequently wrap around to the last
             (first) command.

         Examples:  Although the most meaningful examples will occur quite
             naturally with daily use, the following examples should help
             get things started.

             1) The goal is to get before and after printouts of the
             tabular data file mywealth.dat as produced by a BASIC program
             myprog.bas.  (It is assumed that the table requires the
             printer to be in 132 column mode for a readable printout and
             further that BASIC resets the printer.)

               Keystrokes        DOS screen               Comments
               ==========        ==========               ========
             1-Enter com-      A>dir my*.*                List files
             2- mands as       A>mode lpt1:132            Set printer
             3- shown after    A>copy mywealth.dat prn:   Print file
             4- DOS prompt.    A>basic myprog             Run program
             5-F10,            A>\
                   F10,F10     A>mode lpt1:132            Reset printer
             6-F10,            A>\
                   F10,F10     A>copy mywealth.dat prn:   Print new file

             2) Sometimes a rapid fire trigger finger will strike key F10
             too often, thus overrunning the DOS command.  In such a case
             the Alt-F10 combination may be used to return to the missed
             command.

               Keystrokes        DOS screen               Comments
               ==========        ==========               ========
                                 ...                      See example 1
             4-Enter as shown  A>basic myprog             Run program
             5-F10,            A>\
                   F10,F10,F10 A>dir my*.*                Oops!



                              RECALL V2.10   Page 1





         RECALL                g.r.a.m.  Associates                 RECALL


             6-Alt-F10         A>\
                               A>mode lpt1:132            Got it!
             7-F10,            A>\
                   F10,F10     A>copy mywealth.dat prn:   Print new file

         Caveats:
             - The DOS type ahead feature is disabled when using F10.
             - Recall will not work concurrently with FileCommand by IBM
             while it is attached to DOS.
             - Recall may fail if the total memory is changed to a non-4K
             multiple.
             - No known bugs.

         Technical:  The motivation for Recall was to provide a natural
             extension of the DOS F3 key which restored only the very last
             DOS command executed.  When first run, Recall attaches itself
             to DOS and chains itself onto the keyboard interrupt vector
             thus becoming poised to sense all F10, Alt-F10, Shift-F10 and
             other related keystrokes.  To prevent interference with other
             programs which use the function keys, Recall intercepts the
             DOS function calling mechanism and verifies that the user is
             at the DOS prompt level before processing any keystrokes.
             Moreover, Recall prevents multiple copies of itself from
             occupying memory by sensing its existence as an extension of
             DOS.  Recall reduces available memory by 8016 bytes.
                  Only the following versions of PC-DOS are currently
             supported: V1.1, V2.0, V2.1.  Support for any other IBM and
             compatible versions of DOS will correspond to interest and
             availability to the authors.
                  It is recommended that the loading of Recall be incor-
             porated into the boot-up procedure (autoexec.bat).


                              User Supported Software

                  If you have used this program and found it of value,
                  your contribution ($10 suggested) will be appreciated.
                  Regardless of whether you make a contribution, you are
                  encouraged to copy and share this program.  Users
                  sending in a contribution of $10 or more will be
                  entitled to a free update and notification of other
                  utilities as they become available.

                  Send all correspondence to:

                              G.R.A.M. Associates
                              User Supported Software
                              450 N. Jordan Street
                              Allentown, Pa.  18102








                              RECALL V2.10   Page 2






        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## SPEEDKEY.DOC

{% raw %}
```


		       N O T E S   O N	 S P E E D K E Y
			     by John B. Zuckerman


     1.  To use SPEEDKEY, simply type "SPEEDKEY" at the DOS prompt.  The
	 program then loads, initializes, and returns to DOS.  You may now
	 run any other DOS program (except BASIC, see below).  SPEEDKEY is
	 completely invisible to other programs.

     2.  I have attempted to keep the operation of the keyboard exactly the
	 same except for the speedup.  Without SPEEDKEY, the keyboard
	 produces some bizarre effects at times (especially when the BIOS
	 keyboard becomes full).  These effects are also present with
	 SPEEDKEY.

     3.  The interrupt handlers do something that from a programming
	 standards perspective is blatantly illegal.  They actually jump
	 into the middle of a ROM BIOS routine rather than enter the
	 routine via the conventional method (using the INT instruction).

	 Because this is in violation of the established programming
	 standards, I have included extra code in the initialization part
	 of the program to verify that the version of BIOS encountered is
	 one of the recognized versions (there are four of these, in
	 total).

     4.  I have tested the program on both PC's and XT's, with DOS 1.1 and
	 2.0, and with a variety of software.  The only program that I have
	 found so far that will not work properly with SPEEDKEY is BASIC
	 (and BASICA).	Actually, BASIC runs fine, but the repeat function
	 is defeated.  Curiously, when you exit BASIC (with SPEEDKEY
	 installed), the repeat function is reinstated!

     5.  Should you find a bug or error caused by this program, I would be
	 grateful if you would report it to me.



```
{% endraw %}

## SPRINT.DOC

{% raw %}
```
SPRINT: Speedy  PRINT replacement for IBM ROM BIOS routines.
        =       =====
 
Ver 1.0 - 11/04/84 by Ward Christensen
 
PURPOSE:
- To make screen print MUCH faster than the BIOS ROM routine under most
conditions by suppressing trailing blanks from the print lines.
- To have an execution-time option to eject the page after the print.
- To translate unprintable control characters shown on the screen, to '.' so
the printer won't "mess up".  (Prompted by Phoenix PFIX debugger which places
04H characters on the screen to represent unprintable characters in its ASCII
dump)
- To simulate an IBM printer box graphics when printing on a Gemini 10-X
printer.
 
INSTALLATION:
- Simply type: SPRINT, or place it in your AUTOEXEC.BAT.
 
DEPENDENCIES:
- Uses BIOS ROM int 17h for printer output, and INT 10h to get the characters
off the screen.
- Must be installed BEFORE GRAF or GRAPHICS or other routines that assume INT
5 is the default screen-print routine.
 
OPERATION:
- Left-Shift-PrtSc will print the screen, but NOT form-feed after print.
- Right-Shift-PrtSc will print the screen and form-feed after print.
 
COPYRIGHT:
- I do not place any conditions upon this program.  HOWEVER, This code is a
"derivitive work" based upon the Copyrighted IBM BIOS screen print code, and
thus is thus COPYRIGHT (C) IBM Corp.
 
NOTES:
- The GEMINI translation is assembly-time optioned.  Users with a standard IBM
printer will appreciate the speed improvement and form-feed option.
- Jams itself into screen print INT 5, ignores what was there.
 
 

```
{% endraw %}

## XTMENU.BAS

{% raw %}
```bas
10 ' ********** PGM     : XTMENU -  UTILITIES              **********
20 ' ********** AUTHOR  : DAVE ARMBRUSTER   SEPTEMBER 1984 **********
30 ' ********** VERSION : 1.2                              **********
40 '
50 SELECT = 6  'ENTER NUMBER OF SUBDIRECTORY APPLICATIONS HERE
60 KEY OFF:CLS:GOSUB 1020
70 CLS:COLOR 6,0,0
80 LOCATE 1,1,0:PRINT "   -----------------------------  ";:COLOR 7,0,0:PRINT"PRIMARY MENU";:COLOR 6,0,0:PRINT"  -----------------------------   "
90 DAY$=DATE$:COLOR 6,0,0:LOCATE 2,61,0:PRINT"DATE : ";:COLOR 0,7,0:PRINT DAY$
100 TIM$=TIME$:COLOR 6,0,0:LOCATE 4,61,0:PRINT"TIME : ";:COLOR 0,7,0:PRINT TIM$
110 COLOR 6,0,0:LOCATE 6,12,0:PRINT "F1  APPLICATION  - Select library foreground job"
120 LOCATE 7,12,0:PRINT "F2  UTILITY      - PC Utilities"
130 LOCATE 8,12,0:PRINT "F3  BASICA       - Exit to Basic Programming Language"
140 LOCATE 9,12,0:PRINT "F4  MESSAGE      - Post System Message"
150 LOCATE 10,12,0:PRINT "F5  SYSTEM       - Exit to Disk Operating System"
160 COLOR 7,0,0:LOCATE 2,4,0:PRINT"OPTION ===>>"
170 COLOR 0,7,0:SEL$=""
180 WHILE SEL$<>"1" AND SEL$<>"2" AND SEL$<>"3" AND SEL$<>"4" AND SEL$<>"5"
190 TIM$=TIME$:LOCATE 4,68,0:PRINT TIM$
200 POKE 106,0
210 SEL$=INKEY$
220 WEND:COLOR 7,0,0
230 IF SEL$="X" OR SEL$="x" THEN CLS:SYSTEM
240 X=VAL(SEL$):LOCATE 2,16,0:PRINT X
250 FOR I=1 TO 500:NEXT I
260 IF X=5 THEN CLS:SYSTEM
270 ON X GOTO 350,920,290,580
280 '
290 ' ========== SETUP PROGRAMMING ENVIRONMENT ==========
300 '
310 KEY 1,"LIST":KEY 2,"RUN":KEY 3,"CLS":KEY 4,"FILES"+CHR$(13):KEY 5,"LOCATE ":KEY 6,"COLOR "
320 KEY 7,"SYSTEM"+CHR$(13):KEY 8,"TRON":KEY 9,"TROFF":KEY 10,"KEY"
330 KEY ON:COLOR 6,0,0:CLS:NEW
340 '
350 ' ========== APPLICATION MENU ==========
360 '
370 CLS:COLOR 6,0,0
380 LOCATE 1,1,0:PRINT "   ----------------------------  ";:COLOR 7,0,0:PRINT"APPLICATION MENU";:COLOR 6,0,0:PRINT"  ----------------------------"
390 DAY$=DATE$:COLOR 6,0,0:LOCATE 2,61,0:PRINT"DATE : ";:COLOR 0,7,0:PRINT DAY$
400 TIM$=TIME$:COLOR 6,0,0:LOCATE 4,61,0:PRINT"TIME : ";:COLOR 0,7,0:PRINT TIM$
410 COLOR 6,0,0
420 FOR I=6 TO 12:LOCATE I,12,0:PRINT OPT$(I-5):NEXT I
430 COLOR 7,0,0:LOCATE 2,4,0:PRINT"PRESS OPTION LETTER ===>>"
440 COLOR 0,7,0:S$="":X=999
450 WHILE S$<>"1" AND S$<>"2" AND S$<>"3" AND S$<>"4" AND S$<>"5" AND S$<>"6" AND S$<>"7"
460 TIM$=TIME$:LOCATE 4,68,0:PRINT TIM$
470 POKE 106,0
480 S$=INKEY$
490 WEND:COLOR 7,0,0
500 IF S$="M" OR S$="m" THEN 70
510 X=VAL(S$):LOCATE 2,30,0:PRINT X
520 IF X=7 THEN 70
530 FOR I=1 TO SELECT
540 IF X=I THEN CHDIR DIR$+PATH$(I)
550 NEXT I
560 CLS:SYSTEM
570 '
580 ' ========== MESSAGE ROUTINE ==========
590 '
600 COLOR 6,0,0:CTR=8:CLS:LOCATE 1,1,0:PRINT "   ----------------------------  ";:COLOR 7,0,0:PRINT"BULLETIN BOARD";:COLOR 6,0,0:PRINT"  ----------------------------   ":COLOR 7,0,0
610 LOCATE 3,16,0:PRINT"F1 ==> READ     F2 ==> APPEND     F3 ==> CREATE"
620 COLOR 6,0,0:LOCATE 7,1,0:PRINT"....+....1....+....2....+....3....+....4....+....5....+....6....+....7....+...."
630 Q$="":WHILE Q$<>"1" AND Q$<>"2" AND Q$<>"3"
640 POKE 106,0
650 Q$=INKEY$
660 WEND:T=VAL(Q$):IF T=1 THEN 670 ELSE IF T=2 THEN 680 ELSE 690
670 OPEN "BULLETIN.XTM" FOR INPUT AS #1:GOTO 710
680 OPEN "BULLETIN.XTM" FOR APPEND AS #1:COLOR 7,0,0:GOTO 790
690 OPEN "BULLETIN.XTM" FOR OUTPUT AS #1:COLOR 7,0,0:GOTO 790
700 FOR I=8 TO 23:LOCATE I,1,0:PRINT R$:NEXT I
710 IF EOF(1) THEN CLOSE:GOTO 760
720 LINE INPUT #1,H$
730 LOCATE CTR,1,0:PRINT H$
740 CTR=CTR+1:IF CTR<21 THEN 710 ELSE CTR=8
750 LOCATE 23,53,0:INPUT"......<ENTER) to continue";ANS$:GOTO 700
760 LOCATE 23,40,0:INPUT"MESSAGE COMPLETE.....<ENTER> when ready";ANS$
770 COLOR 7,0,0:GOTO 70
780 '
790 ' ============= MESSAGE INPUT ==========
800 '
810 LOCATE 5,58,0:PRINT"Input begins, enter 'DONE' to end":GOTO 830
820 FOR I=8 TO 23:LOCATE I,1,0:PRINT R$:NEXT I
830 LOCATE CTR,1,0:INPUT"",H$
840 IF H$="DONE" OR H$="done" THEN CLOSE:GOTO 890
850 LENGTH=LEN(H$):IF LENGTH>80 THEN 830
860 PRINT#1,H$
870 CTR=CTR+1:IF CTR>=23 THEN CTR=8:GOTO 820
880 GOTO 830
890 LOCATE 23,26,0:PRINT"DATA ENTRY COMPLETE........."
900 FOR I=1 TO 2500:NEXT I
910 COLOR 7,0,0:GOTO 70
920 ' ========== INSERT UTILITIES HERE ==========
930 ' =                                         =
940 ' =                                         =
950 ' =                                         =
960 ' =                                         =
970 ' =                                         =
980 ' =                                         =
990 ' ===========================================
1000 GOTO 70
1010 '
1020 ' ========== SET SYSTEM PARMETERS ==========
1030 '
1040 DIM PATH$(SELECT):FOR I=1 TO SELECT:READ PATH$(I):NEXT I
1050 DIM OPT$(SELECT+1):FOR I=1 TO SELECT+1:READ OPT$(I):NEXT I
1060 FOR I=1 TO 10:Z$=RIGHT$(STR$(I),1):KEY I,Z$:NEXT I
1070 R$=SPACE$(78)
1080 DIR$="C:\MASTER\"  'SELECT DIRECTORY LEVELS
1090 DATA "ISPF","PASCAL","DBASE","GAMES","LOTUS","PCTALK"
1100 DATA " F1   ISPF  - Exit to Screen Productivity Facility"
1110 DATA " F2   PAS   - Pascal compiler subsystem"
1120 DATA " F3   DB    - Exit to DBASE macro language"
1130 DATA " F4   GMS   - Select GMS menu option"
1140 DATA " F5   123   - Lotus 1-2-3 spreadsheet"
1150 DATA " F6   PCT   - Begin PCTALK III communications"
1160 DATA " F7         - Exit to Menu"
1170 RETURN
1500 '
1510 '
1520 '*****************************************************************
1530 '
1540 '     This program acts as an applications control and utility
1550 ' menu. To use it in its current form you should have DOS 2.0
1560 ' or a higher release. It works by utilizing the directory
1570 ' capabilities in BASICA and a series of batch files. I use a
1580 ' program called MENU.BAT to start things rolling. This file
1590 ' is as follows :
1600 '
1610 ' echo off            <<=== turn off the echo function
1620 ' cls                 <<=== clear screen
1630 ' basica xtmenu.bas   <<=== execute the primary menu
1640 ' xtm.bat             <<=== execute application batch file in
1650 '                           directory ???
1660 '
1670 '     Each application must have its own subdirectory and files.
1675 ' The XTMENU file uses the root directory which must contain
1680 ' BASICA.COM. For instance if you are using PC-Talk then all
1690 ' of the associated files for it should be in one directory called
1700 ' PCTALK or whatever. When the program is run it changes the
1710 ' current directory using the CHDIR command and then returns
1720 ' control to the system. As shown above the system then
1730 ' executes the XTM.BAT file. The XTM.BAT file resides in each
1740 ' application directory so DOS doesnt fuss too much. A sample XTM
1750 ' file looks like this :
1760 '
1770 ' cls                 <<=== clear screen
1780 ' pc-talk.exe         <<=== execute any application
1790 ' cd\                 <<=== change to root directory
1800 ' xtmenu.bat          <<=== rerun the menu program
1810 '
1820 '     A XTM.BAT file must also reside in the root directory with
1830 ' the XTMENU file. Mine does the following on menu termination :
1840 '
1850 ' cls
1860 ' dir *.ba?
1870 '
1873 ' =====>> SETUP
1877 '
1880 '     The file MESSAGE.XTM should also be in the root directory.
1890 ' Use the CREATE option to place one there in your initial setup.
1900 '
1910 ' LINE   50 - Change the variable 'SELECT' to the number of
1920 '             applications you wish to use (UP TO 10).
1930 '
1940 ' LINE  450 - Change this to the number of selection you like plus
1950 '             one to exit back to the menu. This line could be
1960 '             changed to a loop but I leave that for you.
1970 '
1980 ' LINE  920 - The utilities I use are the Norton Utilities which
1990 '             I execute with the SHELL command in DOS 3.0. Since
2000 '             most people do not yet have this release I have
2010 '             omitted these routines to let somebody add their
2020 '             own favorites.
2030 '
2040 ' LINE 1080 - The variable DIR$ should be changed to your system
2050 '             needs. It provides the path to the application
2060 '             directories you need. All Applications should be on
2070 '             the same level . If they are not then use line
2080 '             1090 to make corrections to the proper path.
2090 '
2100 ' LINE 1090 - This line contains the names of the directories
2110 '             to be accessed for each application and should
2120 '             be changed to your system needs.
2130 '
2140 ' LINE 1100 - This group of lines is displayed for the application
2150 '             menu.
2160 '
2170 '      This program should be changed to your own needs and
2180 ' could be enhanced quite a bit. If you do have problems with
2190 ' it then leave a message on the bulletin board.
2200 '
2210 '                                     Dave Armbruster
2220 '
2230 '*****************************************************************
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0374

     Volume in drive A has no label
     Directory of A:\

    ANSIPCH  EXE      6144   3-17-84   1:28a
    AUTORES  BAT       128  10-26-86
    AUTORES2 BAT       128  10-26-18
    BANNER2  BAT       386   7-18-86   6:37p
    BANNER2  LBR     59648   3-02-85  11:04p
    CAL-YR   BAS      1280   6-16-99
    CGCLOCK  COM      1024   3-02-85  11:04p
    CGCLOCK  DOC      3584  12-16-17
    CLCK     COM       896  12-16-83
    CLOKATTR DOC       768   6-06-75
    DPATH    COM       640   7-26-08
    DPATH    DOC      3840  12-26-41
    DU       COM     13824   3-26-87
    EQUIP    COM      1664  12-26-75
    EQUIP    DOC      2176  11-26-71
    EXL      EXE     16768   3-04-27
    FILES374 TXT      3667  11-11-86   2:23p
    FK20     COM       896  12-06-03
    FK20     DOC      6912  11-16-19
    FLIP     COM       384   7-16-64
    HGC      COM       512   6-20-23
    HGC      DOC      2304   2-26-64
    KBFIX    COM      1408  12-26-11
    KBFIX    FIX       896   7-26-01
    KEYLOC   DOC      3072   7-06-65
    KEYLOC_3 EXE      1536   3-02-85  11:04p
    KEYSTAT  COM       896   3-02-85  11:04p
    KEYSTAT  DOC       128  10-16-87
    LUE      COM      1536   2-26-09
    MONOCLK2 COM       384   6-06-75
    MONOCLK2 DOC       896   3-02-85  11:04p
    NOBLINK  COM       768   3-26-91
    NOLF     DOC       128   6-26-34
    NOLF     EXE       768   6-16-91
    NPAD     COM      1152   3-02-85  11:04p
    NPAD     DOC      1664  10-26-95
    PASSWORD BAS      1664   3-26-25
    PASSWORD DAT       128  12-26-31
    PASSWORD DOC      2048   6-26-83
    PC-WINDO COM     21760  12-31-99  12:00a
    RE-CLS   COM       128   6-16-26
    RE-UP    COM       128  10-16-61
    RE-VIEW  COM      1280   3-02-85  11:04p
    RE-VIEW  DOC     10724  11-16-84   6:56p
    RECALL   COM      9216  12-26-93
    RECALL   DOC      6226  11-26-84   6:57p
    REMIND   COM     13568   7-26-31
    RUN      COM       512   6-20-91
    RUN      DOC      2048  10-20-95
    S-LOCK   COM       128  11-26-93
    SCRN     COM       512   3-16-83
    SCRN     DOC      2688  12-16-43
    SEARCH   COM      3712   3-04-53
    SEARCH   DOC      5248  11-04-83
    SNAPSHOT COM      1792  12-16-43
    SPEEDKEY COM       512   2-16-97
    SPEEDKEY DOC      1792   6-16-95
    SPOOL20  COM      2304  12-31-99  12:00a
    SPRINT   COM       640  12-31-99  12:00a
    SPRINT   DOC      1664   6-26-42
    UPDIR    COM       256   7-26-67
    XTMENU   BAS      9088  11-26-90
           62 file(s)     242571 bytes
                           49152 bytes free
