---
layout: page
title: "PC-SIG Diskette Library (Disk #657)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0657/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0657"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZURI"

    This diskette contains the Zuri text editor, which is a very powerful
    program made up of many features. Primarily, it is very easy to use;
    Zuri is greatly intended for someone who easily forgets the common
    commands.  The program can edit as big a file as will fit into memory
    (maximum 480K in a 640K machine) and text lines can be up to 225
    characters, also lines longer than 75 characters are wrapped to the
    next line.  Zuri supports text macros with search and replace options
    and also block commands which are available.  A great deal of
    documentation comes with Zuri as well as on-screen help menus.
    
    IMPORTANT NOTE: The Zuri editor works ONLY on the MONOCHROME adapter
    card.
    
    System Requirements:  190K, at least one disk drive and a
    moncohrome display.  With this memory, the maximum editable file
    is 32K. Each additional 32K memory adds that much to the maximum
    editable file, up to the maximum 640K giving a possible file size
    of 480K!
    
    How to Start: Read carefully the ZURI.DOC file and all other .DOC files
    for the different parts of the editor.  TO start the editor, enter ZURI
    <ENTER>, making sure that the file zuri.com is on the drive being used.
    
    Suggested Registration:  $15.00 includes update and Turbo Pascal source
    code if you request it.
    
    File Descriptions:
    
    -------- ---  -  ZURI EDITOR (V3.2)
    DI       COM  This is a program to list a directory in sorted form
    Z        COM  The control file for the .chn programs, must be on same di
    DI       DOC  Documentation for di.com (28k)
    ZMAKEKEY CHN  This program provides an easy way to make text macros on Z
    ZURI     COM  The zuri editor. Start it by typing zuri
    ZMAKEKEY DOC  Documentation for zmakekey.chn
    ZURI     DOC  Documentation for the zuri editor
    GO       BAT  Startup information, type: GO (enter)
    ZURITWO  DOC  Documentation for zuritwo.chn
    ZURITWO  CHN  Display two files simultaneously, in windows
    ZURISPLT DOC  Documentation for zurisplt.chn
    ZURISPLT CHN  To split a file into several parts
    ZURISORT DOC  Documentation for zurisort.chn
    ZURISORT CHN  Sorts a text file, which can be quite big
    ZURISEQ  DOC  Documentation for zuriseq.chn
    ZURISEQ  CHN  Checks that a file is in a given order
    ZURIREIN DOC  Documentation for zurirein.chn
    ZURIREIN CHN  Cleans up a file;
    ZURIPRNT DOC  Documentation for zuriprnt.chn
    ZURIPRNT CHN  A program to print a specified file
    ZURIMERG DOC  Documentation for zurimerg.chn
    ZURIMERG CHN  To merge two sorted text files
    ZURIJUST DOC  Documentation for zurijust.chn
    ZURIJUST CHN  A program to word-wrap and justify a file
    ZURIINST COM  To install go-to-DOS feature on the editor; see zuri.doc
    ZURIEXTR DOC  Documentation for zuriextr.chn
    ZURIEXTR CHN  Extracts specified lines from a file
    ZURIDELL DOC  Documentation for zuridell.chn
    ZURIDELL CHN  Eliminates duplicate lines in a file
    ZURICOUN DOC  Documentation for zuricoun.chn
    ZURICOUN CHN  Counts lines and words in a file
    ZURICOMP DOC  Documentation for zuricomp.chn
    ZURICONV DOC  Documentation for zuriconv.chn
    ZURICONV CHN  Convert special characters; see also zurirein.chn
    ZURICOMP CHN  Compare two files, line by line
    ZURICHS  DOC  Documentation for zurichs.chn
    ZURICHS  CHN  A program to choose records by certain criteria
    ZURI     HLE  Help file for the editor. Can be omitted if desired
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DI.DOC

{% raw %}
```
di.com is a program to list a directory in sorted form, and list files,
too. It is invoked as follows:

di [x:] [ds] [b]

where [] indicates optional stuff. x is a drive letter a, b, etc.;
if x: is not there, the default drive will be taken. Normally, the
directory will be listed alphabetically by name. d means list by date
instead, s means list by size instead. b means list in reverse order.

    Once the program is activated, a small, self-explanatory description
appears at the top of the screen. It explains how to get more of the
directory, delete a file where the cursor is, list a file, move the
cursor, return to DOS, etc. All of a file can be listed, but it is
done in small pieces; within a piece, one can go backwards and forwards,
but once a new portion of the file is read in, it is not possible
to go back to a previous piece without going back to the directory
and restarting the listing process.

```
{% endraw %}

## FILES657.TXT

{% raw %}
```
------------------------------------------------------------------------------
Disk No  657  Zuri Editor                                          v1   DS2
------------------------------------------------------------------------------
This diskette contains the Zuri text editor, which is a very powerful
program made up of many features. Primarily, it is very easy to use; Zuri
is greatly intended for someone who easily forgets the common commands.
The program can edit as big a file as will fit into memory (maximum 480K
in a 640K machine) and text lines can be up to 225 characters, also
lines longer than 75 characters are wrapped to the next line.  Zuri
supports text macros with search and replace options and also block
commands which are available.  A great deal of documentation comes with
Zuri as well as on-screen help menus. The Zuri editor works ONLY on the
MONOCHROME adapter card.
 
------------- ZURI EDITOR (V3.2)
DI       COM  This is a program to list a directory in sorted form
DI       DOC  Documentation for di.com (28k)
Z        COM  The control file for the .chn programs, must be on same disk
ZMAKEKEY CHN  This program provides an easy way to make text macros on Zuri
ZMAKEKEY DOC  Documentation for zmakekey.chn
ZURI     COM  The zuri editor. Start it by typing zuri
ZURI     DOC  Documentation for the zuri editor
ZURI     HLE  Help file for the editor. Can be omitted if desired
ZURICHS  CHN  A program to choose records by certain criteria
ZURICHS  DOC  Documentation for zurichs.chn
ZURICOMP CHN  Compare two files, line by line
ZURICOMP DOC  Documentation for zuricomp.chn
ZURICONV CHN  Convert special characters; see also zurirein.chn
ZURICONV DOC  Documentation for zuriconv.chn
ZURICOUN CHN  Counts lines and words in a file
ZURICOUN DOC  Documentation for zuricoun.chn
ZURIDELL CHN  Eliminates duplicate lines in a file
ZURIDELL DOC  Documentation for zuridell.chn
ZURIEXTR CHN  Extracts specified lines from a file
ZURIEXTR DOC  Documentation for zuriextr.chn
ZURIINST COM  To install go-to-DOS feature on the editor; see zuri.doc
ZURIJUST CHN  A program to word-wrap and justify a file
ZURIJUST DOC  Documentation for zurijust.chn
ZURIMERG CHN  To merge two sorted text files
ZURIMERG DOC  Documentation for zurimerg.chn
ZURIPRNT CHN  A program to print a specified file
ZURIPRNT DOC  Documentation for zuriprnt.chn
ZURIREIN CHN  Cleans up a file; can be use to check for trojans
ZURIREIN DOC  Documentation for zurirein.chn
ZURISEQ  CHN  Checks that a file is in a given order
ZURISEQ  DOC  Documentation for zuriseq.chn
ZURISORT CHN  Sorts a text file, which can be quite big
ZURISORT DOC  Documentation for zurisort.chn
ZURISPLT CHN  To split a file into several parts
ZURISPLT DOC  Documentation for zurisplt.chn
ZURITWO  CHN  Display two files simultaneously, in windows
ZURITWO  DOC  Documentation for zuritwo.chn
GO       BAT  Startup information, type: GO (enter)
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## NOTES657.TXT

{% raw %}
```
Program Name: The Zuri Editor (v3.2)
 
Author Name: J. Donald Monk
Address:     2135 Goddard Place
             Boulder, Colorado 80303
 
Tel number:  Not listed
 
Suggested Donation:  $15 - includes information about updates
                     Send a disk and get the newest version from
                     the author.
 
 
Program Description:
 
This diskette contains the editor, Zuri, and several other programs
useful for working with the editor, or handling text files in general.
All of the programs were written in Turbo Pascal on an IBM PC with 640K
memory, monochrome display, Epson FX-100 printer.  The Zuri editor will
only operate on an IBM or compatible monochrome adapter.  The CGA will
not support Zuri.
 
The Zuri editor has the following features: (1) It is very easy to use,
intended for someone who easily forgets the common commands; (2) can
edit as big a file as will fit into memory (maximum 480K in a 640K
machine); (3) lines can be up to 225 characters, and lines longer than 75
characters are wrapped to the next line; (4) text macros can be defined;
(5) reading and writing files are fast operations; (6) search and replace
are available; (7) block commands are available; (8) lines are numbered on
the screen.
 
Memory requirement is at least 190K.  With this memory, the maximum
editable file is 32K.  Each additional 32K memory adds that much to the
maximum editable file, up to the maximum 640K giving a possible file
size of 480K.  In any case, no file is allowed to have more than 9999
lines.  The editor cannot handle a file that has lines longer than 225
characters, and also fouls up if characters with ascii 7,8,10,13,26 are
in the file (except to indicate end of line or end of file).
 
The Zuri editor is powerful and easy to use.  It should meet if not
exceed all general purpose text editing needs.  Those who desire an
inexpensive text editor who own a monochrome monitor adapter will find
Zuri extremely useful and valuable.
```
{% endraw %}

## ZMAKEKEY.DOC

{% raw %}
```
      ZMAKEKEY.CHN:  MAKE THE FILE ZURI.KEY
     This is an interactive program to make a macro file zuri.key for the
zuri editor, along with a file zurikey.lst which records those macros
in a readable form. If one or both of these files already exist, the
new information will be added at the end. Note that ZURI will take
the FIRST macro for a given key if zuri.key has more than one macro
for a given key.

```
{% endraw %}

## ZURI.DOC

{% raw %}
```




                         THE ZURI EDITOR
                           Version 3.2
                          (June 29, 1986)




     This program is  made available "as   is",   without any  warranties,
explicit   or implied, as  to performance, merchantability, or fitness for
any particular purpose, whether or not a contribution is made. It has been
put in the public domain. It  is advisable to thoroughly test this program
before using   it   seriously.  It can  be freely copied and   distributed
provided no charge is made.
     If you   find this program  of use,  a  contribution of $15 would  be
appreciated.  In return, I     will   inform you of  any  changes,  fixes,
additions, etc.  If you   supply   a standard  DOS 2.0 double sided double
density 5 1/4 " diskette in a self-adressed, stamped mailer along with the
$15, I will also send you the latest version of the editor  along with its
documented  source code (in   TURBO PASCAL), so  that modifications can be
made at will.
                      J. Donald Monk
                    2135 Goddard Place
                  Boulder, Colorado 80303

    Memory requirement: 190K. With this memory,  the maximum editable file
is 32K. Each  additional 32K memory adds that much to the maximum editable
file, up to  the maximum 640K giving a possible file size of  480K. In any
case, no file is allowed to have more than 9999 lines.

    System requirement, other limitations:  I do not  know the  limits. In
developing it,  I  have used  an  IBM PC with 640K  memory, varying  sized
virtual disks, monochrome display,  Epson  FX100 printer, DOS  2.0. I have
not used it with tree directories, piping, etc.

    NOTE:  The editor cannot handle a file that has lines longer  than 225
characters, and also fouls up if characters with ascii 7,8,10,13,26 are in
the file (except to indicate end of line or end of file).

     ERROR   PROTECTION:  Generally  speaking,    there is    enough error
protection so that the editor  will  not crash during normal  use. In most
cases  an error will  be  indicated at the bottom of   the screen. In some
cases, an error will simply be ignored, and nothing visible will happen.

     WARNING: As of this date, the editor has not been used  very much, so
there may be unexpected things happening.













                     TABLE OF CONTENTS
Summary of Commands...............................................3
Editing Commands..................................................4
Current memory line...............................................4
Going to a new line...............................................6
Other commands....................................................7
Changing defaults................................................10

    TO START THE EDITOR, TYPE

zuri <enter>

For this, the file zuri.com should be on the drive being used. There
are other files, which are not absolutely essential, but may be of
use:
zuri.hle  -  a help file
zuri.doc  -  this documentation
zuri.key  -  a file of user-defined macros (see below)
zuri.my   -  a file of user modifications (see below)
zuriinst.com  - a file to "install" the editor, so as to be able to
    use DOS from within it

                        ESSENTIAL INFORMATION

To start zuri, type  zuri <enter>    Then you will  be  asked  for a  file
name, and, in general you can start editing at once, since there is a help
screen.

**************************************************************************
*                   SUMMARY OF EDITING COMMANDS                          *
*                                                                    Page*
* Backspace   :  delete character to the left of cursor, go left.......5 *
* Del         :  delete character at cursor, pull characters in........5 *
* Ins : toggle between insert/ overwrite modes (insert = fat cursor)...5 *
* Cursor Left :  move cursor left one character........................5 *
* Cursor Right : move cursor right one character.......................5 *
* Tab         :  move cursor to next tab stop..........................5 *
* Ctrl CursorLeft : move cursor left in steps of 20....................5 *
* Ctrl CursorRight :  move cursor right in steps of 20.................5 *
* Home        :  move cursor to the beginning of current memory line...5 *
* End         :  move cursor to the end of the current memory line.....5 *
* alt a       :  enter a (special) ascii character.....................5 *
* alt f       :  forget changes on current memory line.................6 *
* TEXT MACROS :  ......................................................6 *
* ENTER       :  split line, or create blank line......................7 *
* CursorUp    :  go to the same column in the screen line above........7 *
* CursorDown  :  go to the same column in the screen line below........7 *
* alt 1       :  go to top of screen, in same column...................7 *
* alt 2       :  go to middle of screen, in same column................7 *
* alt 3       :  go to bottom of screen, in same column................7 *
* PgUp        :  go to previous screen full............................7 *
* PgDn        :  go to next screen full................................7 *
* Ctrl PgUp   :  scroll back continuously..............................7 *
* Ctrl PgDn   :  scroll forward continuously...........................7 *
* Ctrl Home   :  go to beginning of the file...........................7 *
* Ctrl End    :  go to the end of the file.............................7 *
* alt b       :  block commands (copy, move, delete)...................7 *
* alt d       :  delete a memory line..................................8 *
* alt g       :  display last filename saved to........................8 *
* alt h       :  display a help file...................................8 *
* alt i       :  set up automatic indenting............................8 *
* alt j       :  concatenate two memory lines..........................8 *
* alt k       :  shift lines to the right or left......................8 *
* alt l       :  list specified memory lines...........................8 *
* alt n       :  repeat previous search................................8 *
* alt o       :  go to DOS (must be installed).........................9 *
* alt p       :  change wrap limit.....................................9 *
* alt q       :  search for a string...................................9 *
* alt r       :  replace one string by another........................10 *
* alt s       :  save the file to disk................................10 *
* alt u       :  display the actual file size.........................10 *
* alt v       :  toggle word wrap, not at end of file.................10 *
* alt w       :  toggle word wrap, at end of file.....................10 *
* alt x       :  exit editor..........................................10 *
* alt y       :  save part of the file................................11 *
* alt z       :  insert a file........................................11 *
**************************************************************************

NOTE: It does not matter whether, for example, alt a or alt  A is pressed.

                        EDITING COMMANDS
     The screen has  a window  of  75 columns by 21 lines,  where the file
being edited  is displayed, in part. Left of this window are line numbers,
not present in the file itself, and a vertical border. Line  22 displays a
double  line, to form  a border. Line  23 displays informational messages:
the name of the old file, or an indication that it is a new file; the file
size, in lines and bytes, and the total file size  allowed with  the given
memory available (virtual disks are excluded in  counting this memory); an
indication of the  wrap number (see below), or an  indication that wrap is
off (both of these are only indicators for when one is working at the end
of a file); and an indicator of the column  on the screen line that the 
cursor is on (it can vary from 1 to 75). Screen lines 24 and 25 are used 
for interaction with the editor. Text entered here in response to the 
editor's requests can be edited a little bit: the cursor left and right 
keys, backspace, and del keys as well as the usual letters and symbols are
available for use here.
     The byte count will be about the same as that in the diskette file at
first, but after editing awhile  it may exceed that; it is lengthy to give
the rules for this,  so    the byte  size information should be used for a
rough idea only. On the other  hand, the  line size information is  always
accurate. To get the exact number of bytes which will be written out to  a
file, use the command alt u (see below).

     One can start with an   old file, or a new one; the  initial messages
indicate  how  to make  this choice.  WORD WRAP is automatically set at
column  65, but the limit changed can be changed (see below). Also, it is
set ON for work at the end of the file, and OFF otherwise. Both of these
defaults can be changed (see alt-v, alt-w). The word wrap  works as 
follows: when typing beyond the limit, say column 65, the first space 
(blank) which is typed will cause a line break; both a new blank memory 
line, and the corresponding screen line, will be input, exactly at the 
blank (which disappears). The wrap limit can be set to anything up to 225.
     It is possible that  during editing, the  cursor  can be  beyond  the
actual end of  the memory line. If an ordinary  character key, or a macro,
is pressed while this is true, the editor  will act as if the space beyond
the former end of the current line is filled  with blanks. Otherwise there
are no characters between the  end  of the   memory line  and   the cursor
position.
     The main part  of  the editor  can be  divided into  three kinds   of
activity: (1) working on a memory line - the CURRENT MEMORY LINE (2) GOING
TO A NEW MEMORY LINE, and (3) OTHER COMMANDS.



                      CURRENT MEMORY LINE



     At a given time in the  editing  process, the cursor  is on a certain
screen line, which  is associated  with part of a file memory line. As the
displayed  memory line is edited, the file memory line is not changed. The
current memory line  is stored temporarily in a string  variable  curline,
which is modified continuously during editing. The associated  file memory
line is changed - updated - only when  the current memory line is left for
some purpose,  the most frequent of  which is  to go to a new file  memory
line.
     Ordinary letters, digits, and  special characters are entered  in the
usual way. By default they are inserted before the letter where the cursor
is,  but this can be changed with the Ins key; see below. This insert mode
is indicated with  a fat cursor;  the overwrite mode is  indicated on  the
display with the ordinary cursor. Special keys for the current memory line
are as follows:

 BACKSPACE: This works  in  the usual  way: the  cursor goes back one, and
erases the character there, bringing in any other characters, if any, from
the right.   It works on the memory line: if  at  the far left of a screen
line which  is  not the beginning of the memory line, it goes to the right
of the screen line above.

 DEL:  This  also  works  as usual: deletes the character at the   cursor,
pulling  in  from the right the  remaining characters, if any, in both the
memory  and screen lines. If DEL is  used when  part of the memory line is
below  the  screen, all  of the memory  line will be  pulled up, scrolling
other screen lines up.

 INS: This toggles from the insert mode (fat cursor) to the overwrite mode
(ordinary cursor) or vice versa.

 ARROW POINTING LEFT: takes cursor  one  column to  the left. As a special
case, the cursor goes from column 1 of  a screen line to  column 75 of the
line above if not at the beginning of a memory line.

 ARROW POINTING RIGHT: similar to  arrow  pointing left. The cursor is not
allowed to   go beyond the screen  line containing the  last   part of the
current memory line, however.

 TAB (On the  left, under Esc key,  on the standard keyboard): goes to the
next tab stop. If beyond the end  of the current line, or if TAB takes you
beyond, the intervening space is filled with blanks. The default tab stops
are set at   columns 5, 10,  15, .  . ., 225. To have different tabs, they
should be put on a single line in a  file named zuri.tab on the same drive
as the zuri programs. The single line should have the format

t1 t2 t3 t4 . . . ti

where t1, t2, t3, . . .  are the  tabs in increasing order,  each positive
and less than  226. The number of tabs is at most 45,  but the line can be
as long as 180 characters.

 Ctrl cursorLeft : takes the cursor left in steps  of 20, otherwise acting
like cursorleft.

 Ctrl cursorRight  :  takes  the cursor right   in steps of 20,  otherwise
acting like cursorRight.

 End : the cursor goes to the very end of the current memory line.

 Home : the cursor goes to the beginning of the current memory line.

 alt a  : This puts the editor in the interactive mode, with the cursor on
screen line 24.  Give  the integer which is the ascii code of a character,
and  it will be entered appropriately in memory and  on the screen, at the
position  where the cursor  was before pressing alt a. Note: the   control
characters with ascii codes 7,8,10,13,26 cause trouble for the editor.

 alt f :  FORGET: when  editing a memory  line, this is a "forget changes"
command  - on the  screen and  in the storage curline, all changes made on
the memory line from the time the cursor most recently came to this memory
line are forgotten. After leaving a memory  line, changes can no longer be
forgotten.

     TEXT MACROS: It  is possible to define  special keys   for often used
sequences of  characters;    these  macros  can  be used in the file being
edited, or within an interactive response, but cannot be used to specify a
sequence of  commands  to the  editor.  The specifications for the special
keys are put on a special  file named  zuri.key, on the  same drive as the
other zuri  programs, in the following format: second code, macro,  second
code, macro, . . . . (one line for second code, then a line for the macro,
etc.). Here the  "second code" refers to  the extended ascii code (see the
IBM basic manual, appendix G). The keys available are  the  function  keys
F1-F40, and the macros may be  up to 75 characters each. The function keys
F1-F10 have second code 59-68; Shift- F1-F10 have second code 84-93; Ctrl-
F1-F10 have second code 94-103; and Alt- F1-F10 have second code 104-113.
     Example: Let the file zuri.key contain the following four lines:

 59
 Boulder, Colorado
 94
 It is a cold day, but it is supposed to warm up tomorrow.

THEN when in the editor, pressing F1 will produce

 Boulder, Colorado

in the file being edited (it will be inserted if in the insert mode, while
it will overwrite if in the overwrite  mode - see below) and pressing ctrl
F1 will produce

 It is a cold day, but it is supposed to warm up tomorrow.

    If macros  are not wanted, then  it  is not necessary to have the file
zuri.key  at all. If the format  of the  file zuri.key is not correct, the
editor will abort when it tries to load it. Since loading zuri.key  is the
first thing that the editor tries to do, this does not waste much time.
If several macros are available for a given key, the FIRST such will be
the one taken.


                      GOING TO A NEW LINE



     When going to a  new   line, the  current  line  is saved, except  as
indicated below.  It is actually put in a new place in memory, and the old
line is not deleted, although it is no longer accessible to the user. This
creates "garbage", and the  byte count, which counts both  the old and the
new line, becomes inaccurate.

 ENTER : This key, also called carriage return, is used  in several  ways.
Basically, if  in  the middle of a memory  line, pressing enter will cause
the first part of  the current memory line, up  to the symbol  before  the
cursor,  to remain  there, while the last part, including the symbol where
the cursor was, goes to a new memory  line created following   the current
one. The  cursor goes to the   beginning of the  second of the two  memory
lines formed in  this way, unless  automatic indenting is set (see below).
The first one is put in the file memory, but  not   the second. There  are
important special cases: if the cursor is at the first current memory line
position, an empty line is created preceding the  current memory line.  If
the cursor is at the end of the current memory line, a new line is created
following the current memory  line. This last case  is  the way that brand
new text is created. If the cursor is beyond the end of the current memory
line, which can happen, the space between the end and the cursor is filled
with blanks before the new line is formed.

 ARROW POINTING UP :  goes  to the  same column of the screen  line above;
scrolls screen if initially on the first screen line.

 ARROW POINTING DOWN : similar to arrow pointing up.

 alt 1 :  go  to  the top of the  screen, keeping the cursor  in  the same
column.

 alt  2 : go to  the middle of the  screen, keeping the cursor in the same
column.

 alt 3 : go to the bottom  of  the screen, keeping the  cursor in the same
column.

 PgUp : goes to  the previous page of text, with some overlap.  The cursor
goes to the top of the new page, in the same column it started in.

 PgDn : goes to the next page of text, with some overlap.  The cursor goes
to the bottom of the new page, in the same column it started in.

 Ctrl PgUp : Scroll back continuously. Can be stopped by pressing any key,
and then normal  editing can  continue. If the beginning of  the  file  is
reached, of course this procedure stops, and line 1 is ready to be edited.

 Ctrl PgDn : Similar to  Ctrl  PgUp, but  scrolling forward. It the end of
the file is reached, the last line of the file is ready to be edited.

 Ctrl Home  : editing goes back  to the  beginning of the file,  with  the
cursor in the upper left.

 Ctrl End :  editing goes to the end (last 15  screen  lines) of the file.
The cursor goes to the very end of the last memory line  in the file. Thus
if one wants to add to a given file,  the procedure   is to load it, press
the ctrl end keys, then press ENTER, and you are ready to go.



                          OTHER COMMANDS


 alt b  :  BLOCK COMMANDS: A block is defined by the user, and then one of
three commands can be done on the block: copy it to another place,  delete
it, or move it to another  place (destroying the  old copy). When alt b is
pressed, you will be  presented with a  small menu on screen  lines 24 and
25:
    b : mark block beginning - if <b>   is  pressed, the beginning of  the
block will  be set at the cursor, and will  be displayed in  reverse video
(black on white).
    e : mark   block end - if <e> is pressed, the end of the block will be
set at the cursor, and will be displayed in blinking reverse video. If the
end of   the block is a blank, it will not  blink. If the cursor is beyond
the end of    the current memory line, special things apply when doing the
operations below.
    y :  display block beginning - if <y> is pressed, the beginning of the
block, as previously defined, will be displayed in reverse video, with the
cursor there. If the beginning was not defined, nothing will happen.
    z : display block end, similarly.
    c : copy the block to just before the cursor position. If it is a pure
line block, starting at the beginning of a line  and ending beyond the end
of a line, with the cursor  at the beginning of another line, you have the
choice of making several copies.
    d : delete the block.
    m : move the  block to just before the cursor position, destroying the
old block.
    NOTE: After setting up a block, any  changes made on one of the  lines
where the block is located will unset the block. Also, moving, copying, or
deleting will unset the block.

 alt d : DELETES the memory line, and associated screen  lines, determined
by where  the cursor    is. The cursor goes to the beginning   of the next
memory line, or, if  the last memory line in the file was the one deleted,
to the previous line. The line is not actually removed from memory, but it
becomes inaccessable to  users,  and will not be  present when the file is
written to a disk. So for most practical purposes it is  deleted. The byte
count remains the same, however.

 alt g : Displays  name of  the  last file saved to, or indicates that the
stuff being edited has not yet been saved.

 alt h  : A help  screen is displayed. It  uses the file  zuri.hle,  which
should be on the default drive.

 alt i : AUTOINDENT. Interactively, one has  the following choices: indent
the same amount the preceding line is  indented, or indent a fixed amount.
At the start of editing, there  is no automatic indenting. To return to no
automatic indenting, use alt i to set automatic indenting to 0.

 alt  j : JOINS.  When this key combination is   pressed, the  memory line
below the  current memory line  is pulled up to the  current  one, with  a
space character  between them, and the cursor goes to the beginning of the
concatenated line.

 alt k  : User is prompted  for 3 integers, i,j,k. Lines  i  through j are
shifted  to  the right k units. The  ends may be   shifted off. k negative
means to shift to the left.

 alt l : Display on the screen starting at a prompted line number.

 alt n  : REPEAT PREVIOUS SEARCH.   If there was a  previous search, it is
repeated,  starting from the  line   the last  search  was on. If the last
search  went to the very end,  the new search starts  over  at line 1.  If
there was not a previous search, nothing  happens.  Also, if the  previous
search was at a line that is  now beyond the  end  of the file, because of
deletions, nothing happens.

 alt o : GO TO DOS. When  this  key combination is  pressed, the editor is
temporarily left, and control goes back to DOS, where any programs  at all
can be run, if there is enough memory. When ready to return to exactly the
same place in the editor, type

         exit <enter>

Command.com must be on drive a: to use this command. Also, the command has
to be installed, in  the following  way. When using zuri on a  disk,  also
load the file zuriinst.com. Type

         zuriinst <enter>

then follow   the instructions, which ask you how you want memory split up
between the editor  and DOS   for  this command.   After  the command   is
installed, it does not  need to be reinstalled for this disk, and the file
zuriinst.com can be deleted.
    Various programs give the  editor trouble with this command.  The user
should test out his favorite listers, spoolers, etc with  this command and
see  which ones really work. Some of them will work better if DOS is given
more memory with zuriinst as above. Others still won't work (this has been
my experience).

 alt  p  :  CHANGES THE WRAP LIMIT; user prompted for the new wrap  limit,
which can be  any  integer < 301, although  all  integers >  224 have  the
effect of no wrap limit (= wrap off). Afterwards, the   cursor  returns to
its previous position, and editing can continue.

 alt  q :  SEARCHES FOR A STRING.  User is prompted  for the number of the
memory line at which to begin the search, and for the search string, which
may be up to 75 characters long. Also, the user  has the option whether to
ignore uppercase/lowercase distinctions (in both  the stuff in memory  and
the search string simultaneously), and whether to search in the forward or
backward  direction.   After  each "find",  user  is  prompted  whether to
continue or  not. After  the search is finished, the editor stops over the
string found, or if no strings were   found, goes back to the beginning of
the file.

 alt r : REPLACES   ONE STRING  BY ANOTHER. The user is  prompted  for six
things: starting  memory line, ending memory line,  whether to be prompted
for go-ahead or not   at each occurrence  of the first string,  whether to
ignore the uppercase/lowercase distinction in the old string, and finally,
the   two strings. To  replace in a   backwards direction, simply make the
ending memory line less than the starting memory line. The string which is
to be replaced must be  non-empty; otherwise, the editor will keep waiting
until a non-empty one is  entered. After the procedure is finished, a list
of the lines in which  replacements were made is given on lines 24 and 25;
only the last 20  replacements   are  given if  there were more  than  20.
Finally, after a key is pressed, the  editor goes back to the beginning of
the file. If the result of replacing a line is exactly the same as the old
line,  the replacement    procedure will terminate. Note that it is  quite
possible to exceed the  current file limit with this  command, even if the
the size of the file  when written out on  a disk does not exceed it. This
is because each changed line is stored in a new place in memory, with  the
old (inaccessible) line  still taking  up space.  If the current limit  is
exceeded, because of such garbage or otherwise, the editor will then  stop
and allow the user  to  decide what to  do. One possibility is to exit the
editor, saving the file, and then read it back  in, thereby getting rid of
the garbage.

 alt s : SAVES the file  being edited. Prompts for file name. If  the file
already exists,   you  will  be asked whether  you  want  to overwrite  it
(destroy  the old file,  and  put  the new one in its place).  There is no
automatic back-up for   the file being edited, so   you  should save often
enough, with  a  new file name of your own choosing, to protect your  work
from machine errors,  interruptions, etc. After saving, the editor returns
to the current line being edited, with  the cursor in the same position as
before the command was given. The current memory line IS saved before this
operation. The disk associated with  the file name is checked to make sure
that  enough space  is available for the  given file (using the  real byte
count available  to the user in the command alt   u). If it does  not have
room, an error  message   is given and  the user  can   try again  with  a
different drive, or decide not to save the file.

 alt u : displays the real size of the file being edited if it  is written
to a disk. This is useful in many cases, since the displayed byte count on
line 23 is not very accurate.

 alt v : TOGGLES WORD WRAP on to off, off to on, for work not at the end 
of the file.

 alt w : TOGGLES WORD WRAP on  to  off, off to  on, for work at the end
of the file.

 alt x : EXITS the editor. Will  give a  prompt for saving the  file being
edited or not.

 alt y : SAVE  part of the file. The segment of lines given by the current
block is saved to a file of user's choice.

 alt z : INSERT  a file before  a given line.  Note: a big file will  take
quite a while to be inserted.

                        CHANGING DEFAULTS


    A limited number of defaults can be changed by putting any one or more
of the following lines in a file named zuri.my:

automatic indenting 
wrap off 
wrap at i 
overwrite

These should be  lower  case. i is an integer. "Automatic indenting" means
that each line will be indented the same as the previous   line when using
the  enter   key.  The default  is insert, and "overwrite" changes that to
overwrite.
    With this  file on  the  zuri disk, the indicated  choices  become the
defaults (which can still be changed while editing, if desired).

```
{% endraw %}

## ZURICHS.DOC

{% raw %}
```
    ZURICHS.CHN - EXTRACT RECORDS FROM A TEXT FILE
    This  program allows you to  select records from a text file according
to certain criteria.  There is a number x such that all records consist of
exactly x  lines.   A criterion for  selection consists  of a  conjunctive
normal  form of simple criteria. That is, the criterion is a conjunction
of disjunctions of simple criteria.  Each  simple criterion is a pair of 
the form <LineNumber> <string>, indicating that if the string is in the 
lineNumber of  a  record then that record  should be  selected; but if
the line number is negative, -y, it means that a record with that  string 
in line number y should  not be selected. One  is allowed to write to 
various files; one conjunctive normal form per file. The  output  files 
should all be  distinct. The uppercase/lowercase distinction is ignored,  
both in the keywords and in the target strings. Because this program is
slow, ram disks should be used if possible.
     Limits: The maximum number of  lines per record  is  10.  The maximum
number  of files to write to is 14. The maximum number of disjunctions per
file   is 5. The maximum number of  disjuncts per disjunction is   5.  The
maximum    length of  a keyword is  40  characters;  it  will be truncated
otherwise. Lines in the file should have at most 255 characters.

    To use this program non-interactively, type

      z zurichs inputfilename <enter>

In this case, the other necessary  information has to be put beforehand in
the file zurichs.key, in the following format: 
record size (maximum 10)
'output'             } The material in braces is considered
outputfilename1      } to be one key.
'or'                 }
linenumber keyword   }
linenumber keyword   }
    . .              }
    . .              }
    . .              }
'or'                 }
linenumber keyword   }
    . .              }
    . .              }
    . .              }
 'output'
 outputfilename2
 'or'
 linenumber keyword
    . .
    . .

```
{% endraw %}

## ZURICOMP.DOC

{% raw %}
```
          ZURICOMP.CHN - COMPARE TWO FILES LINE BY LINE
    Lines that do not compare are  displayed, and there is then the option
to stop,   or to   continue  comparing.  If the  two  files have different
lengths, that is indicated too, at the end. At the end of the program, the
message

 Except for indicated errors, if any, the files compare o.k.

is displayed. To use this program non-interactively, type

     z zuricomp infilename1 infilename2 <enter>

To stop the program before completion, type any key.

```
{% endraw %}

## ZURICONV.DOC

{% raw %}
```
         ZURICONV.CHN - CONVERT CERTAIN ASCII CHARACTERS.
    A very special program, which takes a user-specified file and replaces
characters  with   ascii 250-254  by characters with    ascii 7,8,10,13,26
respectively.
To use this program non-interactively, type

     z zuriconv infilename outfilename <enter>

To exit the program before completion, press any key.

```
{% endraw %}

## ZURICOUN.DOC

{% raw %}
```
  ZURICOUN.CHN - COUNTS THE NUMBER OF LINES AND WORDS IN A TEXT FILE
    The program gives a  running count of these numbers, and also  a final
count. To use the program non-interactively, type

     z zuricoun infilename <enter>

To stop the program before completion, press any key.

```
{% endraw %}

## ZURIDELL.DOC

{% raw %}
```
          ZURIDELL.CHN        ELIMINATE DUPLICATE LINES
    This program eliminates duplicate lines in a file, sending  the result
to an output file. It is possible to put on the output lines an indication
of the   number  of duplicates, and a comment up to 40 characters long. To
use the program non-interactively, type

     z zuridell infilename outfilename <y or n> <comment>

Here the comment  can be up to 40 characters  long. 'y' indicates that the
number of duplicates  is to be mentioned on  each line, 'n' that it is not
to  be mentioned. The comment also goes  on each  line if 'y'   is  on the
command line.
    To stop the program before it completes, type ctrl-break.

```
{% endraw %}

## ZURIEXTR.DOC

{% raw %}
```
          ZURIEXTR.CHN EXTRACT BLOCKS OF LINES FROM A FILE
    This little program   extracts specified lines from one file, and puts
them  into a  new file. The lines are specified in segments, x1 y1, x2 y2,
etc. One must have x1 <= y1 < x2 <= y2 < x3 . . . One can have up to  1000
such intervals.    The program will  tell   you  if you  don't put them in
non-decreasing order, but not if you exceed the   number  of lines in  the
input file  - then the  numbers   beyond  the maximum in the  file will be
ignored. Lines x1 through  y1,   x2 through y2, etc,  are written to   the
output file. It is possible to store   the  specified segments in the file
zuriextr.key for future   use    in  non-interactive   mode. Used  in  the
non-interactive mode, the following  must be  entered   on the command
line:

    z zuriextr <input file name> <output file name> <enter>

Also, the indicated intervals   have to be on the file zuriextr.key in the
following format:
 x1 y1
 x2 y2
 . .
 . .
 . .
 
 To exit the program before it is finished, press any key.

```
{% endraw %}

## ZURIJUST.DOC

{% raw %}
```
              ZURIJUST.CHN          JUSTIFY A FILE
    This is a simple program to take  one file and produce a new file with
lines justified. The available commands are as follows:

   \j    at the beginning of a line: start justification
   \q    at the beginning of a line : end justification
   \b    at the end of a line : temporarily stop justification

In addition,  a blank   line causes a temporary stop in justification,  as
does a line which starts with a blank. In addition to indicating input and
output  files,  you have  to indicate the desired line length. To use this
from the command line, type

    z zurijust <input> <output> <linelength> <enter>

There are no defaults here - but typing just  z   zurijust will  cause the
program to ask for the three pieces of required information.
    To stop this program before it officially ends, type ctrl-break.

```
{% endraw %}

## ZURIMERG.DOC

{% raw %}
```
     ZURIMERG.CHN     MERGE TWO SORTED FILES
    This is a program to merge two text files.  The
files consist of  records, where  there is a fixed integer <= 10 such that
all records  have  length x.  The order used  for  merging is
determined by keys, as explained  below.
The files can be of any size. There  can be up to  ten keys. The first key
establishes  an order; among items equal by the first key, the second  key
establishes an order, etc. The format of the keys is as follows:

      lineNumber BeginningColumn NumberOfColumns Direction Ignore

where lineNumber   is the   line, between 1 and rec_size inclusive, of the
key, BeginningColumn   is the column  to  begin the   sort distinction at,
NumberOfColumns is  the  number of columns to  consider significant (up to
255), Direction is a  single letter 'f' or  'b'  indicating increasing  or
decreasing  ascii order, and Ignore is 'y' if uppercase/lowercase is to be
ignored, 'n' otherwise. It is possible to have the keys stored on the file
zurisort.key for future use in the non-interactive mode.
     To merge two files using only the command line, type

   z zurisort <infilename1> <infilename2> <outfilename> <enter>

where everything is self-explanatory.
    To stop the program before it finishes, type ctrl-break.

```
{% endraw %}

## ZURIPRNT.DOC

{% raw %}
```
               ZURIPRNT.CHN            PRINT  A  FILE  
    This is a simple print program. It will break long lines into 75
character parts to fit on standard size paper. And  it will skip  over the
perforation, and provide line numbers if wanted. The first page has at the
top the name of the  file being printed, the current date, taken  from
the PC clock, and the date the file was created. The  pages are numbered. 
Optionally, all  headings can be omitted. One can start printing at any 
specified page  of  a file, and end on any specified page. If a line has  
just  one  character ascii 12, the printer will go to a  new page  (form 
feed). To  use  this program  non-interactively, type

   z zuriprnt <filename> <lineno> <startno> <endno> <head> <enter>

Here lineno should be 'y' or 'n', meaning to give line numbers or not. 
head should be 'y' or 'n'. 'y' means to supply the initial heading,
and page numbers for each page; 'n' means not to put such headings on any
page. In the above line, only the first two entries are mandatory, but 
the line must be an initial segment of the above. If  only

    z zuriprnt <enter>

is entered, you will be asked for the remaining entries. If at least

    z zuriprnt <filename>

is entered, missing entries will take the following default values:
    lineno - n 
    startno - 1 
    endno - 10000
    head - y 
To stop this program before it is finished, press any key.

```
{% endraw %}

## ZURIREIN.DOC

{% raw %}
```
         ZURIREIN.CHN CLEAN A FILE FOR THE EDITOR
    Another very special program, used to clean up files.
The following things are  done  to a specified file: a line longer
than 200 characters is split up. Ascii 10 standing alone is deleted. Ascii
7,8,26 are replaced by ascii 250,251,254, except for the possible ascii 26
at the end of the file. For more on this stuff see ZURICONV.CHN above.
To use this program non-interactively, enter

      z zurirein <input file name> <output file name> <enter>

To stop the program before completion, press any key.

```
{% endraw %}

## ZURISEQ.DOC

{% raw %}
```
      ZURISEQ.CHN CHECK THAT A FILE IS IN A SPECIFIED ORDER
    This program checks that a given file is in the proper order according
to keys described below in the description ZURISORT.doc. As the program is
running, a running count of the line number being processed is given. When
entering this program interactively, it is possible to have the keys
stored on  the file zurisort.key for   future use in  the  non-interactive
mode. To use the program in the non-interactive  mode, the keys have to be
stored on the file zurisort.key as described in zurisort.doc Then type

     z zuriseq <file name> enter
     
To stop the program before it finishes, type ctrl-break.

```
{% endraw %}

## ZURISORT.DOC

{% raw %}
```
     ZURISORT.CHN SORT A FILE
    This is a program to sort a text   file.  The
file consist of  records, where  there is a fixed integer <= 10 such that
all records  have  length x.  The order used  for  sorting  is
determined by keys, as explained  below. There  can be up to  ten keys. 
The first key establishes  an order; among items equal by the first key, 
the second  key establishes an order, etc. The format of the keys is as 
follows:

      lineNumber BeginningColumn NumberOfColumns Direction Ignore

where lineNumber   is the   line, between 1 and rec_size inclusive, of the
key, BeginningColumn   is the column  to  begin the   sort distinction at,
NumberOfColumns is  the  number of columns to  consider significant (up to
255), Direction is a  single letter 'f' or  'b'  indicating increasing  or
decreasing  ascii order, and Ignore is 'y' if uppercase/lowercase is to be
ignored, 'n' otherwise. It is possible to have the keys stored on the file
zurisort.key for future use in the non-interactive mode.
     To sort a file using only the command line, type

   z zurisort <inputfilename> <outputfilename> <enter>

where  everything is self-explanatory except. The keys should be in the 
above  format, one per line, in the file zurisort.key.  That  file should 
start with a single  line giving the record size.
    To stop the program before it finishes, type ctrl-break.

```
{% endraw %}

## ZURISPLT.DOC

{% raw %}
```
      ZURISPLT.CHN          TO SPLIT A FILE INTO SEVERAL PARTS
    This  is a  program to split a file into  several parts.  Three things
must be given to this program: name  of  the input   file,  prefix  of the
output files (they will be named pre.000, pre.001, etc., where pre is that
prefix),  and an increasing sequence  of integers m1,   m2, m3, . . . ,mk.
Lines 1 through m1-1 go to pre.000, lines m1 through  m2-1 to pre.001, . .
. lines mk to the end of the input file to the last file.
     To use this program non-interactively, enter  the following  (maximum
127 characters total):

   z zurisplt <infilename> <outprefix> m1 m2 m3 m4 . . . <enter>
   
To stop the program before it finishes, type ctrl-break.

```
{% endraw %}

## ZURITWO.DOC

{% raw %}
```
zuritwo.chn
This is a program to display two files simultaneously, in windows. Once
the program is started, two windows are displayed, with the names of
the files indicated. Then to display a new line to the first file, in 
the top window, type  t, and to display a new line in the second file, 
in the bottom window, type b, and to exit, type  x.
    To use this program non-interactively, type
    
  z zuritwo <filename1> <startline1> <filename2> <startline2> <y or n>
  
where y means line numbers wanted, n means linenumbers not wanted.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0657

     Volume in drive A has no label
     Directory of A:\

    DI       COM     16570   7-29-86   3:14p
    DI       DOC       935   8-13-86   9:43a
    FILES657 TXT      3084   1-04-80   1:40a
    GO       BAT       598   1-04-80   1:44a
    NOTES657 TXT      2015   1-04-80   1:41a
    Z        COM     11488   6-13-86  10:09a
    ZMAKEKEY CHN      1366   6-08-86  10:30p
    ZMAKEKEY DOC       417   6-14-86  10:02a
    ZURI     COM     50155   6-29-86   4:45p
    ZURI     DOC     28148   6-29-86   4:48p
    ZURI     HLE      1753   6-29-86   3:59p
    ZURICHS  CHN      4437   6-13-86  10:06p
    ZURICHS  DOC      2046   6-14-86   9:56a
    ZURICOMP CHN      1067   6-10-86   9:24p
    ZURICOMP DOC       527   6-14-86   1:03p
    ZURICONV CHN       660   6-12-86   9:30a
    ZURICONV DOC       379   6-14-86   1:18p
    ZURICOUN CHN       689   6-10-86   9:26a
    ZURICOUN DOC       293   6-14-86   1:21p
    ZURIDELL CHN      1600   6-14-86   1:42p
    ZURIDELL DOC       696   6-14-86   1:45p
    ZURIEXTR CHN      1777   6-12-86   3:46p
    ZURIEXTR DOC      1081   6-14-86   1:51p
    ZURIINST COM     10794   1-15-86   3:03p
    ZURIJUST CHN      3642   6-14-86  10:46p
    ZURIJUST DOC       892   6-14-86  10:52p
    ZURIMERG CHN      3112   8-13-86  10:34a
    ZURIMERG DOC      1313   8-13-86  10:45a
    ZURIPRNT CHN      2816   6-22-86  10:25p
    ZURIPRNT DOC      1457   6-15-86  10:54a
    ZURIREIN CHN       748   6-12-86   9:22p
    ZURIREIN DOC       571   6-14-86   1:11p
    ZURISEQ  CHN      2803   6-15-86   3:28p
    ZURISEQ  DOC       685   6-15-86   3:35p
    ZURISORT CHN      7365   8-13-86  10:38a
    ZURISORT DOC      1418   8-13-86  10:14a
    ZURISPLT CHN      1413   6-12-86   9:20p
    ZURISPLT DOC       735   6-15-86   3:39p
    ZURITWO  CHN      1283   6-12-86   9:33p
    ZURITWO  DOC       554   6-15-86   3:44p
           40 file(s)     173382 bytes
                          129024 bytes free
