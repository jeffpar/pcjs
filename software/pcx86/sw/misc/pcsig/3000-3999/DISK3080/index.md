---
layout: page
title: "PC-SIG Diskette Library (Disk #3080)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3080/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3080"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## QUICKREF.TXT

{% raw %}
```
                BD/PATCH Release 1.0   Quick Documentation

OVERVIEW
========
     BD/Patch  is  a versatile new utility from  Breakthrough  Designs  for 
viewing or editing files, and other file-like objects such as disk  drives, 
directories  and  memory.  Patch supports various display formats  to  help 
interpret the data being edited, but removes the usual restrictions on file 
and disk manipulation usually imposed by DOS or applications programs.  For 
this  reason it is both a powerful and useful tool, and a good way to  mess 
up  data if you're not sure what you're doing.  This program is a tool  for 
patching files and data; the intelligence for what you are accomplishing is 
provided  by you.  WHENEVER POSSIBLE, ONLY PATCH A FILE FOR WHICH A  BACKUP 
EXISTS.
     Patch is also a useful file or object viewer, to examine the structure 
of files or other data without making changes, and provides a good tool for 
seeing "what's inside" the data you examine.
     This program was created to fill several utility needs, and while this 
is  the  first commercial version of this program, it is  the  fifth  major 
revision  of a program which has been used profitably and powerfully  by  a 
number  of people for over six years.  Hopefully you will find  BD/Patch  a 
useful utility for your work as well.

SYSTEM REQUIREMENTS
====== ============
BD/Patch  requires  an  IBM-compatible computer running  MS-DOS  or  PC-DOS 
version  2.0  or  higher.  Version 3.0 or  higher  is  recommended.   Patch 
utilizes as much base memory as is available, but requires at least 220K of 
free  memory to operate.  Any standard video display will work with  Patch, 
although Patch has certain optional features which require an EGA or higher 
display.  Also, Patch makes use of the extended keyboards (twelve  function 
keys across the top) if you have one (and your system supports it).

INSTALLATION
============
The  programs  and files of Patch all fit, uncompressed, on a  single  low-
density  floppy  disk, and require less than 300K if installed  on  a  hard 
disk.   Simply copy the files from the Patch disk to a new floppy, or to  a 
hard disk subdirectory.
     While  the  Patch files take up little space on a hard disk,  you  may 
wish to eliminate some files if you are adding Patch to a "utilities" disk.  
Only  the  PATCH.EXE file is required for operation.   The  following  list 
describes the other files on the Patch disk, and what they are for:
     PATCH.HLP - the on-line help text.  If removed, no help is available.
     PATCH.PRF - these are your preferences, if you have set any.  If you
          remove this file, the factory defaults will be used.
     *.FS - any .FS file adds file system drivers.  If these are removed,
          Patch will only have FILE, SUBDIR, LDRIVE and PDRIVE.
     *.CTL - any .CTL file adds display format drivers.  If these are re-
          moved, Patch will only have HEX, TEXT, SUBDIR and LDRIVE.
     *.PRN - any .PRN file adds printer drivers.   If these are  removed,
          Patch will only have SIMPLE as a printer choice.
     QUICKREF.TXT - this document.
     README.TXT - quick description of the program and how to register.
     PATCH.PIF, PATCH.ICO - these are used by Microsoft Windows for infor-
          mation about this program, but are not required.

RUNNING PATCH
======= =====
To  start  the Patch program, if you are in the directory where  the  Patch 
program is located, just type "patch" and press the ENTER key.  Or, if  you 
have  from one to four files you would like to patch directly from the  DOS 
prompt, type the names of these files after "patch," such as:
     C:\PATCH>patch \mainmenu.mdf a:\sample.dat
If you want to patch a command from another file system, the format is  the 
same but the name is preceded by the file system and a colon, like this:
     C:\PATCH>patch mem:286 subdir:a:\temp
The number of files to patch you type specifies the number of windows which 
will  be  opened.   If you start Patch without any named  files,  a  single 
window appears with the "Opening Menu" displayed; choose options from  that 
by pressing the desired letter, or use the pull-down menus instead.
     MS-DOS  version 3.0 or higher is recommended if you run Patch  from  a 
different  directory than you are working in, which is often the case.   In 
MS-DOS  version  2, Patch can locate the supplemental files  if  Patch  was 
located  in  a  directory  specified  by the  path,  and  is  still  called 
"PATCH.EXE."   But  in  MS-DOS version 3 or higher, Patch  can  locate  the 
supplemental files based on how the command was started, regardless of what 
drive  or directory the files are on, or what the Patch command is  called.  
For example, if you had the Patch files on a floppy disk, you could type:
     C:\DOS>a:patch share.exe
Patch would run, and find all its files on the floppy disk, but only if the 
DOS  version is 3.0 or higher.  Under DOS 2.x, you would have to  make  the 
floppy drive the active drive and run from there, like this:
     C:\DOS>a:
     A:\>cd patch
     A:\PATCH>patch c:\dos\share.exe

BASIC OPERATIONS IN PATCH
===== ========== == =====
Patch  was  written  to view and edit a variety  of  files,  and  file-like 
objects,  in a consistent and editor-like way.  There are  two  overlapping 
methods for controlling Patch, one based upon the WordStar editor, and  the 
other  based  on cursor and function keys and pull-down menus,  which  have 
become customary elements in PC software.
     The cursor keys on your keyboard do pretty much what you would expect.  
The function keys are labeled at the bottom of the Patch screen by  default 
(you can remove the labels if you wish).  The pull-down menus are  operated 
by  pressing the ALT key and the first letter of the menu you  want  (these 
are  displayed  across the top line of the screen), and then  selecting  an 
option from the menu with the cursor keys and pressing ENTER on the one you 
want.  Menu options may also be chosen by typing the capitalized letter  on 
the option you want.
     The  WordStar codes are faster to use and harder to learn.   They  all 
require  a control code (press the CTRL key and the letter you want),  many 
commands  also  requiring a second character which need not  be  a  control 
code.   The commands are represented with a carat (^) symbol to indicate  a 
control  code, so "^KX" means press Ctrl-K, and then X (which can be  upper 
or  lower  case,  or even Ctrl-X).  If you are already  familiar  with  the 
WordStar editor many of the commands will be familiar to you.  If not,  but 
you  wish to learn them, the command reference in this document provides  a 
list,  or  you can turn on WordStar menus by setting the help level  to  3; 
this can be done with the command ^JJ3.
     Patch  can edit up to four files at one time; each appears in its  own 
"window"  (a group of screen lines independent from the others).  Only  one 
window  can be edited at one time, but the other windows continue  to  show 
what you are working on.  The F10 key jumps between windows.
     Several  commands for patching a file use "blocks," meaning a  section 
of the file which you define and use as a single item for this command.  In 
WordStar  commands, you mark the block with the ^KB and ^KK  commands,  and 
then  use  a  command to do something with that block.   In  the  pull-down 
menus, on the other hand, you choose the command, and Patch prompts you  to 
mark the length of the block (and, for some commands, where you want to use 
the  block  as well).  For this reason the two sets of block  commands  are 
similar but not the same.
     Patch has a number of built-in display formats, and some standard add-
on  display formats.  Built-in formats include HEX (displaying  hexadecimal 
bytes  and  ASCII equivalences; this is the default), TEXT (a  simple  text 
editor screen, but awkward if your file isn't text), SUBDIR (the format for 
subdirectory  data) and LDRIVE (the format for a logical drive).  The  file 
PATCH.CTL currently adds the DEC and OCT formats, which are similar to  HEX 
but use decimal or octal, respectively.
     Patch has a number of built-in file systems, and some standard  add-on 
file systems.  Built-in systems include FILE (normal DOS files; this is the 
default),  SUBDIR (DOS subdirectories), LDRIVE (a logical drive,  named  by 
its drive letter) and PDRIVE (a physical drive, named by its unit  number).  
The  file  PATCH.FS currently adds the MEM file system, which  patches  the 
"files"  BASE  (1M of system base memory), 286 (16M of memory on a  286  or 
higher  processor),  386 (4G of memory on a 386 or higher  processor),  and 
CMOS  (the  battery-backed  real time clock and config memory  in  most  AT 
compatibles).
     For  printing,  Patch  can support several printer  types,  which  are 
loaded  from  the  file PATCH.PRN.  Without the .PRN  file(s),  Patch  only 
supports  the SIMPLE printer type, which works suitably on any printer  but 
doesn't make the same data distinctions one of the named printer types can.
     Other  file systems, display formats and printer drivers can be  added 
to  your Patch program by simply adding the appropriate .FS, .CTL  or  .PRN 
files to the location of your existing Patch files.
     You  can change many of the default options in Patch to suit your  own 
preferences,  and to configure Patch to your display if your computer  will 
support 132-column text modes.  These settings are all accomplished via the 
"Prefer"  pull-down menu, and can be saved to the file PATCH.PRF to  become 
your new defaults.
                PATCH PLUS Release 1.0   Command Reference

Conventions:   WordStar control codes are shown in "carat" notation, as  in 
"^KX".  Keyboard keys are shown in all caps, like "RIGHT" or "F10".   Pull-
down menu options are shown by their displayed names, inside angle  braces, 
like  "<File,Save>".   For more help on any of these commands,  invoke  the 
Help system (F1, or ^Jc where c is a WordStar command).

FUNCTION/CURSOR KEYS
======== ====== ====
F1 (HELP) - Invokes help for this screen or general help index
F2 (GOTO) - Direct jump to location, same as ^QI or <Move,Absolute>
F3 (FIND) - Search for string or bytes, same as ^QF or <Move,Search>
F4 (PREV) - Jump to previous location, same as ^QP
F5 (HEADR) - Toggle window header between display modes
F6 (RSIZE) - Select record size, start offset, same as ^OR
F7 (CHECK) - Re-examine file for changes, same as ^KL or <File,Look>
F8 (UNDO) - Discard unwritten (highlighted) changes, same as ^U
F9 (SAVE) - Write unwritten changes, same as ^KS or <File,Save>
F10 (delta-WIN) - Change to next window, same as <Window,Next>, like ^OK
F11 (CLOSE) - Closes window, saving changes, same as ^KD or <File,Close>
F12 (EXIT) - Return to DOS, same as ^KX or <File,eXit>
SHIFT+F1 - Same as F11, for older keyboards
SHIFT+F2 - Same as F12, for older keyboards
LEFT - Cursor left, same as ^S
CTRL+LEFT - "Word" left, same as ^A
ALT+LEFT - All the way left, same as ^QS
RIGHT - Cursor right, same as ^D
CTRL+RIGHT - "Word" right, same as ^F
ALT+RIGHT - All the way right, same as ^QD
UP - Cursor up, same as ^E
CTRL+UP - Scroll up, same as ^W
DOWN - Cursor down, same as ^X
CTRL+DOWN - Scroll down, same as ^Z
PGUP - Cursor up one windowfull, same as ^R
CTRL+PGUP - Up one logical record, same as ^Q-
ALT+PGUP - Previous window
PGDN - Cursor down one windowfull, same as ^C
CTRL+PGDN - Down one logical record, same as ^Q+
ALT+PGDN - Next window, same as F10 or <Window,Next>
HOME - Cursor to top left of window, same as ^QE
CTRL+HOME - Cursor to top of file, same as ^QR
ALT+HOME - Select top window
END - Cursor to bottom right of window, same as ^QX
CTRL+END - Cursor to bottom of file, same as ^QC
ALT+END - Select bottom window
INS - Toggle insert mode between "Ovr," "InsB" and "Ins," same as ^V
DEL - Delete a character, if insert mode active, same as ^G
TAB - In HEX, DEC or OCT displays, toggles to/from text section
+ - On numeric data, increments value
- - On numeric data, decrements value


WORDSTAR STYLE COMMANDS
======== ===== ========
^A - "Word" left, same as Ctrl-LEFT
^B - Accept next character as literal and set high bit
^C - Page down, same as PGDN
^D - Cursor right, same as RIGHT
^E - Cursor up, same as UP
^F - "Word" right, same as Ctrl-RIGHT
^G - Delete a character, if insert mode active, same as DEL
^H - Backspace, generally same as ^S or LEFT
^I - In HEX, DEC or OCT, toggles to/from text, same as TAB
^J - WordStar help screen
^Jc (c is any WordStar command) - Display help for command
^JJn (n is 0-3) - Set help level to n, similar to <Help,Level>
^K - Block/file operations menu
^KB - Mark beginning of block for WordStar block commands
^KC - Copy marked block to this location, similar to <Edit,Copy block>
^KD - Save changes and close window, same as <File,Close>
^KF - Run DOS command (if typed) or DOS shell, same as <File,Run cmd>
^KH - Toggle display of blocks and place markers
^KK - Mark end of block for WordStar block commands
^KL - Re-examine file for changes, same as F7
^KP - Print block, if marked, or file, similar to <File,Print>
^KQ - Abandon changes and close window, same as <File,Abandon>
^KR - Read in or insert external file, same as <Edit,Read block>
^KS - Save changes and continue editing, same as <File,Save> or F9
^KV - Move marked block to this location, similar to <Edit,Move block>
^KW - Write marked block to a file, similar to <Edit,Write block>
^KX - Return to DOS, same as <File,eXit> or F12
^KY - Delete marked block, similar to <Edit,Delete block>
^Kn (n is 0-9) - set place marker n, similar to <Move,Place marker>
^K= - Fills marked block with value, similar to <Edit,mOdify,Fill>
^K+ - Adds value to block bytes, similar to <Edit,mOdify,Add>
^K- - Subtracts value from block bytes, similar to <Edit,mOdify,Subtract>
^K* - Multiplies block bytes by value, similar to <Edit,mOdify,Multiply>
^K/ - Divides block bytes by value, similar to <Edit,mOdify,Divide>
^K& - Logical-AND block bytes with value, similar to <Edit,mOdify,aNd>
^K| - Logical-OR block bytes with value, similar to <Edit,mOdify,Or>
^K^ - Logical-XOR block bytes with value, similar to <Edit,mOdify,eXclusive>
^K' - Converts block to lowercase, similar to <Edit,mOdify,Lowercase>
^K" - Converts block to uppercase, similar to <Edit,mOdify,Uppercase>
^K! - Locks marked block, similar to <Edit,Locking,Lock>
^K. - Unlocks last lock, same as <Edit,Locking,Unlock>
^L - Look again, repeats last ^QF or ^QA
^M - Same as ENTER
^N - If insertion allowed, inserts carriage return/line feed
^O - On-screen operations menu
^OB - Selects on-screen treatment of bytes with high bits set
^OF - Selects new screen format driver
^OH - Selects base used for window header
^OK - If only one window, creates another; otherwise, next window
^OL - Toggles display of function key labels
^OM - Selects position representation used for window header
^OO - Toggles outlined window feature
^OP - "Protects" a file from accidental changes
^OR - Select record size and start offset, same as F6
^OU - Selects on-screen treatment of bytes in unprintable ASCII ranges
^OV - Selects the video display mode to use
^O[ - Defines current position as start of record 0 (sets record offset)
^O] - Defines current position as end of record 0 (sets record size)
^O. - Toggles automatic record blocking mode
^O= - For some display drivers, displays logical layout of file
^O? - Displays memory usage within Patch at this moment
^P - Accepts next character as literal, not command
^Q - "Quick" operations menu
^QA - Search and replace, same as <Move,Replace>
^QB - Jump to beginning of marked block
^QC - Jump to end of file, same as Ctrl-END or <Move,End>
^QD - Move all the way to the right, same as Alt-RIGHT
^QE - Move to top left corner, same as HOME
^QF - Search for string or bytes, same as <Move,Search>
^QI - Move to absolute position, same as F2
^QK - Jump to end of marked block
^QP - Jump to previous location, same as F4
^QR - Jump to beginning of file, same as Ctrl-HOME or <Move,Beginning>
^QS - Move all the way to the left, same as Alt-LEFT
^QX - Move to bottom right corner, same as END
^QY - Truncate file here, same as <Edit,Truncate file>
^Qn (n is 0-9) - Move to marker n, similar to <Move,to Marker>
^Q[ - Move to beginning of record 0
^Q] - Move to end of record 0
^Q! - Move to start of locked region, same as <Edit,Locking,Go to lock>
^Q+ - Advance one logical record, same as Ctrl-PGDN
^Q- - Back up one logical record, same as Ctrl-PGUP
^R - Page up, same as PGUP
^S - Cursor left, same as LEFT
^T - Delete a "word," if insert mode active
^U - Discard unwritten changes, same as F8
^V - Toggles insert modes between "Ovr," "InsB" and "Ins," same as INS
^W - Scroll up one line, same as Ctrl-UP
^X - Cursor down, same as DOWN
^Y - Delete a screen line, if insert mode active
^Z - Scroll down one line, same as Ctrl-DOWN

PULL-DOWN MENU COMMANDS
==== ==== ==== ========
<File,Open> - Select a file to patch (defaults: FILE, HEX, Read/Write)
<File,View> - Select a file to patch (defaults: FILE, HEX, Read-only)
<File,Save> - Saves changes, continues editing, same as ^KS or F9
<File,Close> - Saves changes, closes window, same as ^KD or F11
<File,Abandon> - Discards changes, closes window, same as ^KQ
<File,Print> - Prints entire file, similar to ^KP
<File,Look> - Re-examines file for changes, same as ^KL or F7
<File,Run cmd> - Execute a DOS command, or run DOS shell, same as ^KF
<File,eXit> - Close all windows and return to DOS, same as ^KX or F12
<Edit,Copy block> - Prompt for block, and where to copy to, similar to ^KC
<Edit,Move block> - Prompt for block, and where to move to, similar to ^KV
<Edit,Delete block> - Prompt for block to delete, similar to ^KY
<Edit,mOdify,Fill block> - Prompt for block, byte to fill with, similar to ^K=
<Edit,mOdify,Add> - Prompt for block, byte to add, similar to ^K+
<Edit,mOdify,Subtract> - Prompt for block, byte to subtract, similar to ^K-
<Edit,mOdify,Multiply> - Prompt for block, byte to multiply, similar to ^K*
<Edit,mOdify,Divide> - Prompt for block, byte to divide by, similar to ^K/
<Edit,mOdify,Or> - Prompt for block, byte to logical-OR with, similar to ^K|
<Edit,mOdify,aNd> - Prompt for block, byte to logical-AND with, similar to ^K&
<Edit,mOdify,eXclusive-or> - Prompt for block, byte to XOR with, similar to ^K^
<Edit,mOdify,Uppercase> - Prompt for block to upper-case, similar to ^K"
<Edit,mOdify,Lowercase> - Prompt for block to lower-case, similar to ^K'
<Edit,Write block> - Prompt for block to write to a file, similar to ^KW
<Edit,Read block> - Read in or insert file, same as ^KR
<Edit,Print block> - Prompt for block to print, similar to ^KP
<Edit,Insertion,None> - Sets "Ovr" mode - no inserts/deletes allowed
<Edit,Insertion,Block> - Sets "InsB" mode - inserts/deletes within marked block
<Edit,Insertion,Full> - Sets "Ins" mode if allowed - full inserts/deletes
<Edit,Locking,Lock> - Prompts for block and locks it, similar to ^K!
<Edit,Locking,Unlock> - Releases last lock set, same as ^K.
<Edit,Locking,Go to lock> - Moves to position of last lock set, same as ^Q!
<Edit,Truncate file> - If possible, resets file length to location, same as ^QY
<Move,Search> - Search for string or bytes, same as ^QF or F3
<Move,Replace> - Search and replace, same as ^QA
<Move,Look again> - Repeats last <Move,Search> or <Move,Replace>, same as ^L
<Move,Absolute> - Jump to absolute location, same as ^QI or F2
<Move,to Marker> - Move to one of up to ten place markers, similar to ^Qn
<Move,Place marker> - Set one of up to ten place markers, similar to ^Kn
<Move,Beginning> - Jump to start of file, same as ^QR or Ctrl-HOME
<Move,End> - Jump to end of file, same as ^QC or Ctrl-END
<View,Format> - Selects a new display format driver, same as ^OF
<View,Structure,View> - For some drivers, shows file structure, same as ^O=
<View,Structure,Records> - Set record size and start offset, same as ^OR
<View,Header,nOne> - Display no header in this window
<View,Header,Decimal> - Display header in decimal numbers (usually one line)
<View,Header,Hex> - Display header in hexadecimal numbers (usually one line)
<View,Header,Both> - Display header in hex and decimal (usually two lines)
<View,Header,Absolute> - Display header locations as absolute byte values
<View,Header,Record> - Display header locations as record and offset
<View,Header,Native> - Display header locations according to file driver
<View,Header,Custom> - Display header locations according to display driver
<View,Unprintable,Full character set> - Unprintable ASCII shows as IBM graphic
<View,Unprintable,Represent controls> - Unprintables show as ASCII designation
<View,Unprintable,Dot display> - Unprintables show as a dot (".")
<View,Unprintable,Color-code high bits> - High-bit chars are a different color
<View,Unprintable,Ignore high bits> - High-bit chars displayed as IBM graphic
<View,Unprintable,Strip high bits> - High-bit chars displayed as high-bit off
<View,Display,Normal> - Display 25x80 text (works on any PC)
<View,Display,Ega> - Display 43x80 text (works on EGA and above)
<View,Display,Vga> - Display 50x80 text (works on VGA and above)
<View,Display,Wide> - Display 25x132 text (on video displays supporting it)
<View,Display,Tiny> - Display 43x132 text (on video displays supporting it)
<View,function Keys> - Toggles the display of function key labels, same as ^OL
<View,Boxed windows> - Toggles the display of window outlines, same as ^OO
<View,Option> - For drivers supporting them, offers additional options
<Window,Open> - Create another window (up to four allowed)
<Window,Close> - Close the current window, same as F11 or ^KD
<Window,Next> - Switch to next window down, same as F10
<Prefer,Colors> - Set Patch preferences for screen color usage
<Prefer,Display> - Set Patch preferences for display characteristics
<Prefer,Hardware> - Set hardware-specific options
<Prefer,Printer> - Set Patch preferences for printing
<Prefer,Options> - Set Patch preferences for option default settings
<Prefer,Save> - Save your preferences as new defaults
<Help,Index> - Invoke Help system, starting at front index, similar to F1
<Help,Keyboard> - Provide help for keyboard commands
<Help,Mouse> - Provide help for using a mouse with Patch
<Help,meNus> - Provide help with pull-down menus
<Help,Level> - Set help level 0-3, similar to ^JJn
<Help,About> - Displays Patch version and copyright information
```
{% endraw %}

## README.TXT

{% raw %}
```
                                 BD/PATCH

This  file  accompanies  the BD/Patch Utility.  An  additional  text  file, 
QUICKREF.TXT,  describes the commands and general concepts of the  program.  
You may wish to print out the QUICKREF.TXT file before using Patch.

BD/Patch  is  a  product of Breakthrough Designs,  and  is  distributed  as 
"shareware."   What this means is that you may freely copy, distribute  and 
examine  this  software.   However, if you find it  useful  and  intend  to 
continue  using  it,  you are required to pay Breakthrough  Designs  for  a 
license  to  continue  using the software.  This one-time  license  fee  is 
only  $25.00,  and entitles you to both the latest  shareware  version  and 
product  announcements  as we release new versions and/or titles,  both  in 
shareware and commercial form.

There  is  no  way that we can enforce your  obligation  to  register  this 
product.   However,  we hope that you will do so in order  to  support  our 
development  of future products.  The shareware concept depends  upon  this 
sort  of support, and represents an excellent value compared to prices  for 
commercial software.

When you register BD/Patch, please send $25.00, along with the version  and 
serial numbers of the copy you have (from within Patch, press ^O? for  this 
information), to:

               Breakthrough Designs
               525 Alexander Street
               Greensburg, PA 15601

For  comments  or  suggestions  (not orders),  you  can  also  contact  the 
program's primary author, Mark Bereit, directly by electronic mail at:

               marky@draco.ece.cmu.edu  (Internet)
                    or
               74040,1003               (CompuServe)

If  you  distribute copies of BD/Patch, all the original files  (listed  in 
QUICKREF.TXT) must accompany the PATCH.EXE program in unmodified form.   If 
you  are a commercial distributor, please let us know so that we  can  keep 
you informed as we develop new shareware programs or updates.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3080

     Volume in drive A has no label
     Directory of A:\

    PATCH    CTL      3433   3-19-92  10:20p
    PATCH    EXE    169371   3-31-92  11:31p
    PATCH    FS        902   6-29-91  11:07p
    PATCH    HLP     61784   3-31-92  11:25p
    PATCH    ICO       766   7-31-91  10:34a
    PATCH    PIF       545   6-14-91   2:00p
    PATCH    PRN      3766   1-11-92   2:26p
    QUICKREF TXT     22912   3-31-92  11:36p
    README   TXT      2176   3-19-92  10:12p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1078   8-27-92   9:54a
           11 file(s)     266771 bytes
                           49152 bytes free
