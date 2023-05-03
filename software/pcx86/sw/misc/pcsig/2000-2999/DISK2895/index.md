---
layout: page
title: "PC-SIG Diskette Library (Disk #2895)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2895/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2895"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DM.DOC

{% raw %}
```



------------------------------------------------------------

                          D O S   M A S T E R

------------------------------------------------------------


          (DOCUMENTATION FOR THE SHAREWARE VERSION OF DM)
                       by Michael Abley
                  Edmonton, Alberta, Canada.





Software and documentation Copyright (c) 1990-1992 by
Michael Abley
                     All rights reserved.

                         Release 2.01




------------------------------------------------------------
Disclaimer of Warranty

The author makes no warranty of any kind, expressed or
implied, with regard to the programs or the documentation
contained in this manual.

The information in this manual is subject to change without
notice.



------------------------------------------------------------
------------------------------------------------------------


                      PART    1



               INTRODUCTION AND INSTALLATION




                   1. INTRODUCTION




A. Philosophy
--------------

     Welcome to DOS MASTER! You are now using one of the
easiest, most powerful and cheapest file managers available
today. It has seemed to me that for the longest time most of
the existing commercial packages either try to do too much,
too little or are too expensive. This program was originally
written because I found that 90 percent of the DOS
housekeeping chores that I do are the simple procedures of
copying, deleting, moving, comparing, and editing. Eighty
percent of THOSE chores are just copying selected files and
deleting. Unfortunately, it seems that most commercial
packages feel that you should be bombarded with endless
pull-down menus and pop-up screens that can often make the
simple matter of copying a few files from one directory to
another a challenge to the user. My basic philosophy is KEEP
IT SIMPLE!, but with enough extras available to extend the
usefulness of the basic utilities. The program can be
'navigated' by either keyboard or mouse. I have tried to
make the operations of the program as intuitive as possible
and to keep with some of the current 'conventional' key
assignments for DOS programs. eg. F10 is usually Quit with
many programs as is F1 for Help.
     Besides the usual routines, DOS MASTER contains several
features not often found in other packages such as a
directory compare routine, file archiving/compression tool
IN THE REGISTERED VERSION, and the ability to remove an
entire multi-level directory structure with just three keys.
Now that's cleaning up! Please spend a little time and scan
through this manual to get a feeling for all the program's
features. I hope you find that DOS MASTER will handle most
of your DOS chores. Thank you.


B. Features of DM
------------------

- split-screen, detailed and scrollable listings of all
files and directories
- full mouse support with easy 'point and shoot' navigation
of directories and drives
- copy, move, delete files including read-only, hidden and
system files with two key strokes.
- built in text editor with full mouse and block
highlighting support.
- full or split screen VIEW/BROWSE utility for text files
(eg Batch files). Comes with built in text search and mouse
support.
- erase entire directories without having to first erase the
files they contain or remove any sub-directories.
- rename directories and files
- erase directories
- copy Whole Directories
- four types of sorting of directories/drives
- ability to shell out and run other programs or quit and
run a selected program
- will compare any two directories/disks and highlight which
files are different or are the most recent.
- find a file anywhere on current drive (similar to WHEREIS)
- find any text in current directory
- constant display of the room left on the current drive and
the total size of any selected files.
- command line controls, including a direct-to-editor
function
- help screen
- runs on CGA, EGA, VGA systems
- graphic tree display of your disk drive with easy
directory navigation.
- Directory Size Analysis utility to quickly show you where
all your hard drive space has gone to.
- archiving utility IN REGISTERED VERSION to let you easily
use PKWARE'S PKZip utility to compress, decompress, add to,
or view ZIPPED files.

C. Hardware requirements
--------------------------

     DOS MASTER will work on any system with 512K and a
color monitor i.e. CGA, EGA, VGA. As of this version, DM
will run on Hercules equipped machines or on any monochrome
system, but you may not see any difference on the screen
when you go to select files, so use a color monitor.
Naturally, 640K memory is preferred, and is almost a
necessity. You should use DOS version 3.2 or higher; DOS 5.0
is best right now because it provides more free conventional
memory than the previous versions. The more free memory you
have, the better it will be, especially when running
programs from inside DM or when shelling out to the command
line. If you have expanded memory, you may want to use the
overlay version of DOS MASTER, DM2.EXE. See the 'OTHER
NOTES' section for more info on this.
     The program is fully mouse supported including the
Editor, but a mouse is NOT required. Personally, I find the
mouse handy, especially with file selection and block
highlighting in the Editor.
     A hard drive is not required, but life sure is a lot
nicer with it.


D. Installation
---------------

DOS MASTER


     There's no complicated installation procedure for this
program. I recommend setting up DOS MASTER in a subdirectory
called simply 'DM'. Copy the program, help files and
documentation to this subdirectory and then add DM to your
PATH command in the AUTOEXEC.BAT file (hey, why not use the
editor in DM to do this?). This way, anytime you want to use
DOS MASTER, all you have to do is type DM.
     Here's how I would install DM on a hard drive C from
the A floppy drive. Type the following and hit Enter after
each line:

          C:
          CD\
          MD DM
          CD\DM
          COPY A:*.*
     To change your path command, enter DM and edit your
     AUTOEXEC.BAT file. i.e:

          DM /E C:\AUTOEXEC.BAT    (use command line to go
                                   straight to the DM
                                   editor)

          now edit the path line in the file so that DM is
          near the front:

          eg.PATH=C:\DOS;C:\DM;C:\UTILITY;C:\WINDOWS;etc....


Please note that you may put the .EXE file and the two .HLP
files that make up DM anywhere on your drive and once DM is
in your path it can be launched from any directory, BUT all
three files must remain together, otherwise DM will not be
able to find its help files when you need them.



------------------------------------------------------------
------------------------------------------------------------


                         PART    2



               GENERAL USE AND OPERATION


                         2. "OPERATION"



A. The Main Screen description:


When you first start DOS MASTER, you will see the Main
Operational Screen which consists of the following four
components:

     1. the screen split down the middle with two identical
     lists of the contents of the directory or drive in
     which you started the program. The path of the
     directory is centered at the top of each list, and a
     grey (color monitors) highlight bar appears at the top
     of the left hand list. All files are listed in each
     directory along with each file's size, date and time of
     creation. If the file is read-only, hidden or a system
     file, there will be a small shaded square with a 'hole'
     in it next to the file name.

     2. The third line from the bottom shows the disk space
     left on the current drive (middle screen) and if you
     start selecting any files (see below on how to do
     this), below each list will appear information on how
     many files you've picked and their total size in K
     bytes.

     3. The second line from the bottom is the file
     specification line. This line is used to let you choose
     what files are to be displayed in each list. eg. if you
     just wanted the list to show all the files on the C
     drive in sub-directory PROGS  with the ".EXE"
     extension, you would edit the file specification for
     that list to display "C:\PROGS\*.EXE". This line can be
     accessed at any time by holding down the Alt key and
     pressing E.
          Also note that there appears on this line on the
     far right hand side "Tag special= off". This part of
     the screen is to tell you whether file attribute
     detection is turned on/off i.e. this signals whether
     'special' files like hidden, read-only or system files
     will be 'tagged' to indicate that these files are
     different. This feature can be turned on or off and is
     explained in more detail under item 13 of Additional
     Utilities.

     4. The screen's bottom line contains the function key
     definitions.


B. Moving around:

     For mouse users, in most cases, the left button is used
to choose something (instead of arrow keys) and the right
button acts the same as pressing Enter.

To SWITCH from left to right directories (or vice-versa)
     -mouse: single click left or right button on menu you
     wish to use
     -keyboard: use TAB key OR left/right cursor keys

To move the HIGHLIGHT bar down the list of files, use
     - the up/down arrow keys
     - place mouse cursor over file name and click down with
     the left mouse button.
     - Press the FIRST LETTER of the file/directory you want
     to go to in the list.


The HOME key sends the highlight bar to the top of the list
(the 2 dots if you are not in the root directory);
END key moves the bar to the end of the file list.

If there are more files than will fit on the screen, a
scroll bar will appear on the right of the list. For mouse
users, by holding down the left button and dragging the
square icon in the scroll bar the list will scroll
vertically. PgUp/PgDn will move the list of files up one
screen or down.


- Changing directories:

To move DOWN into a directory, move the highlight bar to the
directory you want to 'open' or look at (recognized by the
conspicuous '{-SUB-DIR-}' phrase to the right of the listed
name) and do any of the following:
     -press space bar
     -press Enter
     -single click the RIGHT mouse button (this is the best
     method, in my opinion ) or
     -double click the left mouse button (slowly)

To move UP into a directory, move the highlight bar to the
two dots (..) at the top of the menu, and do any of the
above four actions. Unless you are in the root directory of
the current drive, you will always see the two dots at the
top of the file list.


-Selecting files:

To select a file for copying, deleting, editing, etc. do any
of the following:
     -press space bar
     -press Enter
     -single click the RIGHT mouse button

The chosen file name will now be highlighted in yellow on
color monitors
To select ALL the files in a directory:
     -hold down Alt key and press S (easy to remember
     'S'elect all)
     -hold down right mouse button and drag the mouse slowly

To select some of the files in a directory:
     -hold down the right mouse button and drag slowly over
     the files you want and/or
     -use Enter or Spacebar to make selections

To deselect files:
     -same keys and mouse action as selecting

To deselect all the files in a directory:
     -hold down Alt key and press D ('D'select)
     -drag with right mouse.


-Using input boxes:

     Whenever you are asked to supply a file name, directory
name, etc., an input box appears on the screen, usually with
two 'buttons' below it marked OK and CANCEL. When you are
entering a new word or over typing something, remember that
the input line can be edited with a number of keys. The Home
key will go to the start of the line, the End key to the
End. Arrow keys will move over any existing text without
erasing it. The Backspace key will erase. When you are
finished inputting, hit Enter to accept the default OK or
use the mouse to click on OK.
     Note that at any time if you wish to cancel the
procedure, you can do any of the following:

     -use the tab key to move to CANCEL, then hit Enter, or
     -click mouse on CANCEL, or
     -press Escape



------------------------------------------------------------
------------------------------------------------------------


                         PART    3



                         USING THE
                       FUNCTION KEYS



                    3. FUNCTION KEYS



A. Summary of function key assignments:

F1 = Displays a HELP screen listing function key assignments
     and menu options
F2 = COPIES files that have been selected or the single file
     that the cursor is currently on.
F3 = MOVE files. i.e. First copy the file to its new
     destination and then erase it from its old destination.
F4 = EDIT a selected ASCII text file (or, if nothing is
     selected, the current file that the cursor is on)
F5 = VIEW any file, even executable files.
F6 = SORT the directories by name, size, extension or date
F7 = COMPARES the two directories or disks and highlights
     the different files.
F8 = DELETE files/directory or a an entire directory
     structure (i.e. directory need not be empty)
F9 = displays a menu of additional utilities.
F10 = Quits the program, when you're at the main operational
     level of DM


B. Details of function keys:


F1 Help:
     Shows the help screen. Pressing any key will return you
     to the main dual directory display.

F2 Copy file(s):
     To copy a single file:
          Place the highlight bar on the file you wish to
          copy and SELECT the file with either the
          mouse(right button), or by hitting Enter or the
          Spacebar. Actually, it is not even necessary to
          SELECT when you are only copying ONE file. Just
          placing the highlight bar on the file in question
          is good enough to proceed.

     To copy multiple files:
          First select the files you want to copy by
          following the procedure discussed in SELECTING
          FILES.

     - Make sure that the other half of the screen shows the
     destination that you wish to copy the file(s) to. (See
     the above Navigational Aids section if you need help in
     doing this).
     - Press the F2 key or left click with the mouse on the
     F2 key designation at the bottom of the screen.
     - A pop-up box appears. If there are no changes to the
     path, hit Enter or click on OK. The file is copied.
     To change your mind, press Escape, click on Cancel with
     mouse or use tab key to move highlight to CANCEL and
     hit Enter.
     - If the file already exists on the destination drive,
     a warning box will appear. Three choices are presented.
     You can:
          1. OVERWRITE ALL (DEFAULT):
          This overwrites the existing file and, if you are
          copying more than one file, overwrites any future
          files that the program may find also existing on
          the destination drive.

          2. OVERWRITE FILE:
          Overwrite the existing file and, if you are
          copying more than one file, continue to warn you
          if it encounters any more files existing on the
          destination drive.

          3. CANCEL:
          Cancel copying that file.

          Since option 1 (overwrite all) is the default,
          just hit Enter for this. To access the other two
          options, either hit the tab key and Enter, or
          click with the mouse on one of the other two
          option buttons.


F3 Move file(s):
     Use exactly the same procedure as when copying. The
     only difference between this and COPYING is that the
     file is erased from the source directory after copying.

F4 Edit a file:
     Move the grey highlight bar to the file you wish to
     EDIT and press F4. If the file is too large to fit in
     memory, a message will flash up.


    --Using the Editor:

     All of the standard editing keys are supported. For
example, Home and End move to the beginning and end of the
line, the PgUp and PgDn keys scroll the screen by pages, and
Ctrl-PgUp and Ctrl-PgDn move to the first and last lines of
the file respectively. The cursor may also be moved to the
top or bottom of the edit window with the Ctrl-Home and
Ctrl-End keys.
     DM uses the Ctrl-Left and Ctrl-Right arrow keys to move
the cursor by words, and blocks are marked with any of the
Shift-Cursor keys. Notice that blocks may also be marked
using a combination of the Shift AND Ctrl arrows to jump by
whole words.
     Beyond the usual block operations, however, DM'S Editor
also supports block operations on COLUMNS. To mark a block
in sentence mode, place the cursor at the beginning of the
block and press the Shift-Right arrow key. The marked block
will be highlighted as the cursor travels over the text.
Alternately, entire lines may be marked by placing the
cursor at the desired starting point and pressing the Shift-
Down arrow key.
     To mark a column, place the cursor at the upper left
corner of the block and press the Shift-Right arrow key
until the highlight extends to the desired right edge. Then,
press Shift-Down until the bottom of the block has been
reached. Regardless of which marking mode is used, the block
will be captured to a 'clipboard' as soon as any non-marking
key has been pressed. If either Del or Shift-Del is pressed,
the block will first be captured and then deleted. To paste
the block from the clipboard into the text at the current
cursor location, simply press Shift-Ins.
     Naturally, the mouse is fully supported in the Editor
and I believe its use is quite intuitive. Press and hold
down the left mouse button to highlight text for deletion or
copying. To highlight a column, press and hold the left
button, drag it right as far as you want the column width to
extend and then drag down. Let go when you have highlighted
the text you want.
     The scroll bar on the right can be used with the mouse
by clicking and holding the left mouse button on the top
'up' arrow or bottom 'down' arrow. You can also click and
hold on the position square located in the scroll bar and
drag it to where you want to be in the document. The same
idea applies to the bottom scroll bar. This is fairly
standard for most DOS text scrolling applications.

Function keysin the Editor:

HELP (F1):
     The editor has its own help screen which will appear
     full screen when you press F1.

SAVE FILE (F3):
     To save a file, press F3 and input a new file name or
     use the old one. If you are going to over-write a
     previous file, you will be warned.

QUIT TO MAIN DM SCREEN (F10):
     If you have made no changes in the file or have just
     finished saving the file, pressing F10 will immediately
     close the Edit window and return you to DM's main
     screen. If you haven't saved prior to hitting F10, a
     pop-up box will appear giving you the chance to save
     the file before quitting. Use the mouse or tab key to
     make your selection. The default is to quit without
     saving, which is what happens if you just press F10
     then Enter.
          NOTE: Choosing the Save before quitting option and
     hitting OK or Enter will overwrite the existing file
     and quit the Editor. You don't get a second chance to
     change the file name. Use F3 to do that first.

   --Creating a New File in the Editor:

     It's easy to create a new file with DOS MASTER's
Editor. Begin by opening any small file (eg. a batch file
?). Next, erase the contents of the file by highlighting any
existing text with the mouse or keyboard, then pressing Del.
Now just type whatever you wished to create as a file. The
trick comes in the following operation: when you are ready
to save the file, hit F3 as usual, but back space over the
existing name and type a new name for your new file. When
you hit Enter, the file will be saved with the new name and
the old file will be untouched. Easy, huh?

     -Editor notes:

     -Currently, you can add up to 500 lines of extra text
to any existing file. If you need to add more than 500
lines, do this: add the 500 lines, save the file, quit, and
open it again with F4. Another 500 lines can now be added.
This could be done several times until the file becomes too
large to load into the editor.
     -If you try to load a file that is too big, you will
receive a pleasant message. Don't panic. Just use the VIEW
utility instead (F5).


F5 View a file:

     Move the grey highlight bar to the file you wish to
     VIEW and press F5.

     --Using View

     View lets you scan through any file up to 16,000 lines
long (which is a pretty big file when you think about it),
very much like a browse utility. Page-up, page-down and the
arrow keys are supported. The scroll bars on the right and
bottom show you where you are in the file. The View mode is
mouse supported now, so you can jump to locations in the
file by clicking on the arrows in the scroll bars.
     With keys, if the file you are viewing goes off the
screen, you can use the right arrow key to see the rest of
the text. Press Control - left arrow to return to the true
left margin.
     The Home key moves you to the beginning of the file
(NOT the first letter at the top of the screen) and the End
key moves you to the last page of the file. The up/down
arrow keys move the screen line by line while the PgUp and
PgDn keys will move you through the file one screen at a
time.

     --Split Screen Feature of View:

     You can view your file on one side of the screen while
scrolling through the file menu on the other. As you scroll
down the list of files, the corresponding file will appear
in the view window next to the menu. This feature is very
useful for quickly scanning through several batch files or
taking a quick peek at some of your word processing
documents.
     To access this 1/2 screen mode, you first place the
grey highlight bar on (either the left or right menu) the
file you wish to initially view in the directory of your
choice. Now you can view in 1/2 screen by doing any of the
following:
     1. Hold down the Alt key and press F5 or
     2. View the file as before (hit F5) then press F5
          again, or
     3. Press F9 to bring up the Additional Utility Menu
      -- press V to go to the "View file 1/2 screen.." menu
item, then press Enter (or use the mouse for all this, of
course).

     When in 1/2 screen mode, you can move the highlight bar
down the list of files and as you do so, the View window
will display the file. To scroll the view window and see
more of the file, move the cursor to the view window. Do
this by pressing either the tab, or left/right arrow keys,
or click the mouse on the View window. You can then use the
mouse or normal View window keys to look at your file i.e
up/down/left/right PgUp, PgDn, Home, End; even the search
function is active.

     F5 will expand to full screen. F10 will quit the
view/scroll mode completely. Note that in the View window
you can use the mouse to click on the small arrows you see
at the left and right of the scroll bar on the bottom of the
window, or click on the arrows on the top and bottom of the
right edge vertical scroll bar of the View window. Also note
that the red highlight bar on the top screen line switches
from the View window to the file menu, depending on whether
you are moving around in the View window or the file menu
list.


     --Why View is different to the Editor:


     It is important to realize that in order to avoid
running out of memory when handling large files, View reads
only small bits of the file from the drive, as you page up
or down. It doesn't read the whole file into memory in one
large chunk as does the Editor. So don't be surprised that
using the PgUp or PgDn keys is slower than when using the
DM's Editor. This is why View will often let you look at
files that are too large to be read for Editing.

     --Text search in View:

     I've thrown in a text search feature; in View. Press
F3 and you will be prompted for text to search for in the
file you are viewing. This functions in split screen or full
screen mode. If viewing a large file, be patient; remember
it has to re-read the file in chunks again to find the
chosen text. Once it finds the text, if you wish to look for
the next occurrence of the text string, just press F3
<Enter> again.


F6 Sorting directory contents:

     Pressing F6 will bring up a menu listing four
     possibilities you can choose by:
          -double clicking with the left mouse on your
          selection
          -single clicking with the right mouse
          -moving up/down with cursor keys to the desired
          selection and hitting Enter
          -moving to the selection by pressing the
          appropriate NUMBER of that selection and hitting
          Enter

     Note that any of the four sorting methods can be
     activated by the hot keys listed below. It is NOT
     necessary to use F6 to pull up the menu to sort if the
     hot keys are used.

     In summary, the sorting keys; are:

     sort by:                           press:

     NAME                          Ctrl -N
     EXTENSION                     Ctrl -X
     SIZE                          Ctrl -Z
     DATE                          Ctrl -A

     The default sort is by Name. All of the Sorts are
     carried out in ASCENDING order.

     Details:

     a) Sort by NAME: files are listed alphabetically by
     their first letter. This is how files are always listed
     when you first start DM without any command line
     parameters.

     b) Sort by EXTENSION: files are listed in alphabetical
     order by their three letter extension; useful for
     seeing all the .DOC files together in the directory.

     c) Sort by SIZE: files are listed in order of
     increasing size, smallest at the top.

     d) Sort by DATE: files are listed in order of their
     date of creation, the oldest file being at the top,
     newest at the bottom. If two files have the same date,
     they are sorted by their TIME of creation, the most
     recent being at the bottom. This sort really simplifies
     seeing which are your latest files.

     Note: If you have first selected files for moving,
     copying, etc. and then choose to sort, the selections
     are de-selected and ignored. Always call the sort
     utility FIRST before doing any comparing, copying,
     moving or deleting.


F7 Comparing two directories/disks:

          This will compare the two directories or disks
     that are currently displayed and highlights any files
     that are not present in one or the other
     directory/disk. If the same file name is found in both
     directories, DM will next compare the file's date and
     time in the two directories, highlighting in yellow
     whichever file is the most recent. If the same name,
     date and time appear in both directories, the files are
     assumed to be the same.
          After using F7, the selected files can then be
     copied, moved or deleted (with F2, F3 or F8). This
     feature is very useful for updating files on a floppy
     after working from a hard drive.
     Comparing two directories/disks: example; For
     example, if you've been working on several files in a
     directory on the hard drive and you're not sure which
     files have been backed-up on to your floppy, try this:

          - put in the floppy disk
          - display the two drives with DM so that the
          contents of the directory on the hard drive is on
          one side, and the contents of the floppy on the
          other
          - now press F7.
     The newer files will be shown in yellow highlighting,
     all set for copying to the floppy drive.
          - move the grey highlight bar to the side of the
          screen where the highlighted files are
          - press F2 <Enter>.

     The newly updated files that you'd been working on are
     now copied to the floppy.

F8 Delete file(s) OR a Directory Structure:
     A. To Delete a file:

     As with copy or move, begin by SELECTING the file or
     files you wish to delete. Press F8. You will be warned
     of the number of files you're about to erase, or the
     name of the file if it is only one file to be deleted.
     If you change your mind, you can do any of the
     following:

          - Press Escape
          - click on CANCEL with the mouse
          - tab to CANCEL and hit Enter

     If you try to delete Read only, Hidden or System files,
a second warning will appear. HEED THIS WARNING! DOS MASTER
will quite happily erase ANY file you tell it to.

     B. To Delete a Directory including all its files and
     any subdirectories:
         This is a very powerful feature in DOS MASTER and
     can save you a lot of time when you are trying to
     clean-up your hard drive by getting rid of all those
     nested sub-directories you no longer need. Around the
     office, we affectionately call this the ' Nuke 'em '
     feature! With just 3 keys you can save tons of endless
     selecting /deleting sequences.
     But BE CAREFUL. Make sure you really want to delete the
     stuff because once you erase those directories, it can
     be difficult to get them back. With that warning,
     here's how to use this very useful feature.

     Move the highlight bar to the directory you wish to
     erase. (DON'T select it, since this would only open up
     the directory). If you know the directory contains no
     files or subdirectories, just hit F8 and then Enter as
     though you were deleting another file. If the directory
     DOES contain files and/or subdirectories, then you can
     delete this entire directory structure very quickly and
     easily by doing one of two things:

          1. Press F8, just like you were deleting a file.
          You will be warned if there are any subdirectories
          or files in the directory. If you still want to
          proceed, hold down the Control key (Ctrl) while
          pressing F4. Hitting any other key will cancel the
          operation.

          2. An alternate way, once you've highlighted the
          directory, is to just hold down Ctrl while hitting
          F4. You will still be warned, but you'll be given
          the chance to Cancel. To continue, you'd just hit
          Enter as usual.

     Either way, you must press Ctrl-F4 to erase a directory
     structure.

     As a safety feature, once the program has started
     unmercifully erasing everything, it can be stopped AT
     ANY TIME by pressing any key.

     If all this Ctrl-F4 stuff sounds like rather more un-
     intuitive keys than you'd expect, it is. The ability to
     erase an entire directory structure is a very powerful
     and potentially dangerous tool. Not many programs have
     it. I've designed it so that you could never do it by
     accident, but that at the same time is still easy
     enough that you won't have a problem using it when you
     need it. The program will tell you which keys to hit if
     you forget.
     Once again, USE THIS FEATURE WITH CARE. Once activated,
     the program will happily erase all files and
     subdirectories inside your chosen directory, up to 9
     levels deep. Happy erasing.


F9 Additional utility menu:

     Pressing F9 will immediately reveal the pull-down menu
     system and the first pull-down will appear on the top
     far left of the screen. The many extra features are
     explained in detail in the section following this one
     called "ADDITIONAL UTILITIES". If you don't want to
     take any action, hit Escape or click with the mouse on
     any area outside the menu box.

F10 Quit:

     It's always easy to get out of DM. To quit the program,
     just press F10 or click on the 'F10=Quit' key at the
     screen bottom.



------------------------------------------------------------
------------------------------------------------------------


                         PART    4



                   4. ADDITIONAL UTILITIES


     The following extra options/utilities can be accessed
either by mouse or keyboard:
     If using the mouse, click on the top line of the
screen. The pull-down menu bar will appear across the top of
the screen and one of the pull-down menues will show-up,
depending on whereabouts on the top line you clicked the
mouse.
     If using the keyboard, just hit F9 (MENU).
     Once the pull-down menu has appeared, you can then make
your choice by doing any of the following:

     -left button double clicking on the menu item
     -right button single click
     -pressing the LETTER that matches the bright white
     letter of the menu item, then Enter
     -using the UP/DOWN arrow keys and then Enter

To cancel this menu with no action taken, press Escape, or
click anywhere off the menu.

If the menu selection process is too slow for you, or you
don't have a mouse (shame on you!), each utility has a two
key shortcut (hot-key) sequence and is described below. eg.
Alt-F pulls up the routine for file searching. Please note
that this won't work if you've already pulled up the menu;
you either go the menu route, or use the Ctrl/Alt shortcut
key route.


          SUMMARY OF ADDITIONAL UTILITIES:

 FILES
-------
     Select All
     De-Select All
     Find a File
     Rename a File

 DIRECTORIES
-------------
     Make a Directory
     Rename a Directory
     Copy Whole Directories
     Graphic Tree Display
     Directory Size Analysis

 DOS
-----
     Use Command Line
     Shell
     Shell + Run Program
     Quit + Run Program

 UTILITIES
-----------
     Text Search in Directory
     View 1/2 Screen + Scroll

 OPTIONS
---------
     Labelling/Unlabelling Hidden/Read Only/System Files
     Edit File Specification Line

 COMPRESS--ONLY IN REGISTERED VERSION

------------------------------------------------------------
------------------------------------------------------------
                         FILES

1. Select all (Alt-S):

     This will cause all files in the current directory to
     be selected (on a color monitor they will appear yellow
     on blue.)

2. De-select all (Alt-D):

     All previously selected files in the current directory
     will be de-selected (on a color monitor they will
     return to white on blue from yellow on blue).


3. Find a File (Alt-F):

     This will enable you to search a drive for any file.
     Hold down the Alt key and press F. You will then be
     prompted to enter the file name that you want to find.
     You can enter wild card values. eg. to look for all
     files with .exe extension in d drive, just type
          D:\*.EXE
     You can pause the program while searching by pressing
     the spacebar key. F10 quits and puts you back to the
     main program.
     When the program finds a file fitting your
     specifications, it will list the following:
          directory where found
          file name, size, date, time, attribute
     (Note: the attribute is only shown if the file is
     hidden, a read-only or a system file. I didn't think
     you would care to see if it was archive or not).
     If more files are found than fit on the screen, the
     program will pause and wait for you to hit either Enter
     to keep searching, or F10 to quit.
     It will search up to 10 nested directories deep, which
     is probably overkill since few of us create file
     hierarchies that go deeper than 4 levels of sub-
     directories. Do we ?
     When finished, the program lists how many files were
     found matching the specification.

4. Rename a file (Ctrl-F):

     Move the highlight bar to the file in question and hold
     down Ctrl and press F. An input box will ask you for
     the new file name. Type the new name and press Enter.


                      DIRECTORIES

1. Make a new directory (Alt-M):

     Hold down the Alt key and press M. An input box will
     ask you for the name of the new directory. Type in the
     name and press Enter or use Tab key (or mouse) to
     Cancel. Remember that the rules for new directory names
     are the same as for DOS file names. i.e. up to and
     including eight letters followed by a 3 letter
     extension. Extensions are not usually used in directory
     names as it means more typing when switching
     directories from the command line, so I advise against
     it unless you have good reason.
     After you have created the new directory, the
     corresponding directory list will be redisplayed
     showing your new sub-directory in its correct place
     according to the sort method you have chosen.


2. Rename a directory (Ctrl-D):

     First place the highlight bar on the subdirectory you
     wish to rename. Now hold down the Ctrl key and press D.
     An input box will appear with the name of the directory
     you have chosen to change. Just type over top and hit
     Enter or mouse click on OK. Remember that the highlight
     bar must first be on a directory to change it; nothing
     happens if you hit Ctrl-D while the highlight bar is on
     a file.


3. Copy Whole Directories (Alt-F2):

     This is a very handy new feature of DM with version
     2.01. This routine makes use of the DOS XCOPY command
     which has been available since DOS version 3.2. XCOPY
     is a program that I feel is greatly underused, so DM
     will now remedy this problem!
     XCOPY will copy entire directories very quickly, so
     naturally I decided, Why improve on the wheel? DM is
     set up so that all you have to do is tell DM which
     directories to copy and it will shell-out and make use
     of XCOPY to rapidly copy all directories, files and
     subdirectories for you.

     To use:
     A. Make sure that the DOS file XCOPY.EXE is in a
     directory with all your DOS command files (the
     directory is probably C:\DOS) and that your PATH
     command in your AUTOEXEC.BAT file is set-up to find
     this directory. Check your DOS manual if you need help
     with this, but virtually all PC,s have their DOS
     directory listed in the PATH command somewhere already,
     so you probably won't have to do anything.

     B. Now change to the directory where the
     directories/subdirectories are that you wish to copy.
     If the directories that you want to copy are in the
     root directory, no problem. Just change to the root.

     C. Now select the 'Copy Whole Directories' option from
     the pulldown menu (or hit ALT-F2) and you will be given
     a list of the directories in the current directory.
     Choose which ones to copy with the arrow keys and
     hitting Enter or the mouse in the usual way. If you
     want to copy all of those listed hit Alt-S (hmm, is
     this familiar? I didn't want you to have to memorize
     too many keys).

     D. Press F2 to begin the copying. DM will shell-out,
     run the XCOPY command and copy all the directories that
     you have selected along with all the files they contain
     and any subdirectories they have. Confused? Try it.
     It's very fast and saves an awful lot of time. If it
     doesn't work, check that PATH command in the
     AUTOEXEC.BAT.


4. Graphic Tree Display (Alt G):
     This option will let you look at your entire drive in
     the form of a branching system that develops from left
     to right. By using the arrow keys you can navigate
     around the "tree" and at a glance see the layout of
     your whole drive and quickly go to any particular
     subdirectory you want. By moving the highlight bar to a
     directory and hitting Enter, you are returned to the
     main program and you'll find yourself located in the
     directory you chose in the tree.

     Details:

     After selecting this utility, you will be asked if you
     want to re-scan the drive. The first time you use this
     utility, the drive is scanned and the tree is saved in
     an ASCII file called DMTREE.DIR in the root directory
     of the current drive. This is so that the next time you
     want to look at your directory tree, the program
     doesn't have to search through and anyalyze the whole
     directory structure each time. The next time you want
     to see the tree, the program just has to read this
     file. If you have erased, renamed or added a
     subdirectory since the tree was last scanned, you
     should tell the program to re-scan your drive. I have
     made re-scanning the default because I personally am
     often changing directories and erasing. If you haven't
     made any changes since last scanned, just hit the tab
     key or click on "Don't scan".
          [Remember when you re-scan to make sure you have
     enough room on your drive to contain the DMTREE.DIR
     file (usually < 10K).]

     Navigation of the Directory tree:

     Your numeric keypad/arrow keys can be used to move
     around the tree. They operate pretty much as you'd
     expect:

     KEY                         ACTION
     Home        Moves to top of tree (usually the root
                 directory).
     End         Moves to bottom (last directory) of tree.
     PgUp        Moves 1 screen up in the tree.
     PgDn        Moves 1 screen down in the tree.
     up arrow    Moves to the dir. just above that is in the
                 same column (on the screen) as the current
                 directory. If there is no dir. immediately
                 above, the highlight will jump to the top
                 of the tree, which is the root directory.
     down arrow  Moves to the dir. just below that is in the
                 same column as the current directory. If
                 there is no dir. immediately below, the
                 highlight will jump to the last dir. in the
                 tree.
     left arrow  Moves to the immediate left of the current
                 directory. If a dir. doesn't exist to the
                 left, then it goes to the dir. directly
                 above and to the far right.
     right arrow Moves to the immediate right of the current
                 directory. If a dir. doesn't exist to the
                 right then it goes to the dir. directly
                 below and to the far left.
     Enter             Quits the tree and puts you back in
                 the main program in the directory that the
                 highlight was located on when you left the
                 tree.
     F10 / Esc   Quits the tree and puts you back in the
                 main program in the same directory that you
                 where in before running the tree utility.


5. Directory Size Analysis (Alt F9):

     This is another new feature in DM. This utility will
     show you a list of every directory and subdirectory
     (nested up to 10 levels deep) on the current drive
     along with how many files and their total size in each
     directory. This is very handy when you find yourself
     once again running out of hard drive space and can't
     for the life of you figure out where all the room has
     gone to.

     Details:

     After selecting this option, the screen will clear and
     the current drive will be scanned for all its files and
     directories. This scanning can be paused or broken (see
     the following note). You will then be presented with a
     table containing the following directory size
     information:
          The first column will contain the number of files
     in each directory;
          The second, will show the total number of bytes
     used by all the files in that directory;
     The third column will list the full path name of the
     directory.

     As the message along the screen bottom says, you can
use the arrow keys or PgUp/PgDn keys to scroll this display
up or down. F10 or Esc will quit and return you to the main
program.
     Note: if you choose this utility and want to interrupt
the scanning of the drive for any reason, while it is going
through all your directories, I have let you escape by
assigning F10 to quit this and return to the main program.
This can be desirable sometimes on slower machines with
large drives.


                          DOS ACCESS

1. Use the Command Line (Ctrl-C):

     Pressing Ctrl C will pull up an input box so that you
     can enter a full line of text into the DOS command line
     and shell out and run a program along with any
     necessary command line parameters. This is the same as
     if you were not in DM and were just entering commands
     on the DOS command line.
     eg. after Ctrl-C, you could type:

     MYPROG /S /COLOR /MUSIC /FULLSCRN /WHOABABY /FILENAME
     and then press < enter >

     to run your favorite program MYPROG (if it had all
     these odd parameters!), with the settings you need. Of
     course, unless MYPROG was in your PATH, the program
     would be run from the directory you were in before you
     hit Ctrl-C. Once MYPROG was finished, you would be
     returned to DM automatically. If you wish to do several
     things in DOS but want DM to stay memory resident, use
     the following utility:

2. Shell (Alt L):

     Hitting Alt-L or the F9 menu item 9, activates this
     command which will temporarily 'shell out' of DM to DOS
     where you can then do anything you normally do in DOS.
     Remember that DM is still memory resident. Note the
     message at the top screen after shelling out that tells
     you the amount of memory left. To re-enter DM, type
     EXIT <Enter>.
     The difference between this utility and number 8, is
     that you stay in the DOS command line world for as long
     as you want, perhaps doing SEVERAL different things and
     you must type EXIT to return to DM. In the previous
     option 8, you run ONE program and are immediately
     returned to DM at the conclusion of that program, (See
     above).


3. Shell to DOS and run the selected program (Alt-P):

     First highlight the program file that you wish to run.
     Make sure it has either an .EXE, .COM or .BAT extension
     eg. WORD.EXE. Now Press Alt and then P to 'shell out'
     to DOS and load and run the program. It's that simple.
     When you quit the program, you will be returned to DM.
     The difference between this option and OPTION 8, is
     that DOS MASTER only runs the program you have selected
     from either screen menu. You cannot enter any extra
     parameters as in the above option 8. This makes this
     utility less powerful, but the fastest of the 3
     utilities.
     Obviously, since DM stays memory resident while running
     the selected program, this limits the size of the
     program you can run, but if you run out of memory by
     trying to load something too big, DM will tell you and
     just re-display its directories with no harm done. If
     memory IS a problem, and you really do want to run the
     program from DM, try running the DM2 overlay version of
     DOS MASTER. See the section OTHER NOTES for more info
     on DM2.


4. Quit DM and run a selected program (Alt-Q):

     Place the highlight bar on the program or batch file
     you wish to run (usually .EXE, .COM, or .BAT) and
     holding down the Alt key  press Q. DOS MASTER will
     quit, thereby freeing up memory, and then run the
     program selected.


                       UTILITIES

1. Search for text in a directory (Alt-T):

     Hold down the Alt key and press T. You will then be
     prompted to enter the text you wish to look for on the
     current drive. The program will then search through
     every file in the directory for the text.


2. View 1/2 Screen and Scroll (Alt-F5):

     This is identical to hitting F5 to VIEW a file and then
     hitting F5 again to view the file in 1/2 screen format
     so that you can scroll through the files on the
     opposite half of the screen. I included this just to
     give you a shortcut to 1/2 screen viewing.
     Of course, just like hitting the F5 key, make sure your
     grey highlight bar is sitting on a file before you use
     this utility.

                        OPTIONS

1. Turn on/off "tagging"Tagging of Hidden, Read-Only, or
     System files (Alt-A):

     Pressing Alt-A toggles this feature either on or off.
     This option is to enable you to turn on or off the
     function that allows ability to see at a glance which
     files in a directory are "special". i.e. whether any
     have the hidden, read-only, or system file attributes.
     Read your DOS manual if you are unsure what these
     attributes mean. If tagging is turned ON, when a file
     is read-only, hidden or a system file, you will see
     displayed in the directory list a small shaded square
     with a 'hole' in it next to the file name. The status
     of tagging (whether on or off) is always displayed on
     the main screen at the end of the file specification
     line as "Tag special= ON" or "Tag special= OFF". The
     default setting when you first start DM is for tagging
     to be OFF.

          Why would you ever want to turn off the ability to
     see which files are "special" ? Because the program has
     to check each file for its attribute with tagging on,
     turning off tagging can greatly increase the speed at
     which large directories ( > 200 files) are read on
     slower machines with sluggish hard drives. If you're
     not worried about seeing whether the file has a read-
     only or hidden attribute, I recommend leaving this
     setting off.

2. Edit the file specification line (Alt-E):

     Pressing Alt-E will let you edit the file specification
     line that is always displayed on the second line from
     the screen bottom. A faster method is to click with the
     mouse on the line to begin editing it. The default file
     specification is the current path plus '*.*' so that
     all files are shown. This file spec. is the same as the
     title displayed at the top of the CURRENT directory
     your highlight bar is on.
          Why would you want to bother changing the file
     specification, you ask ? For example, if for some
     reason you wanted to display only the files with a
     '.EXE' extension in the current directory for instance,
     this is how you could do it:

          Edit the file specification line:Keyboard:
     Press Alt-E, then the End key (which will go to the end
     of the file spec. line) then backspace over the default
     '*.*' so that it reads '*.EXE'. Press Enter and voila'!
     Now the current directory will only show files with the
     .EXE extension.
     You also could use the mouse by clicking on the line at
     the approximate point you want to edit or moving the
     cursor to wherever you wanted on the edit line with the
     mouse and typing the change.

          You may be interested to know that changing the
     file specification line is the only way to enter a
     HIDDEN subdirectory when you are working inside DOS
     MASTER (i.e. a hidden directory is one that has been
     given a hidden attribute by some other more nefarious
     DOS utility!). To open a subdirectory that's been made
     hidden, press Alt-E, and edit the file spec. line so
     that it contains the full path of the directory in
     question. Of course, the catch is that you must know
     the name of the hidden directory first.
          eg. if VITALDATA is the directory in C drive that
     is normally hidden when you do a DIR from DOS, and you
     wish to view the files in VITALDATA, you would edit the
     file spec. line to read:

          C:\VITALDATA\*.*         and press Enter.

     (Of course, you can always change to the hidden
     directory by using the DOS CD\ command  before starting
     DM if you wish).

     NOTE: As of this version, you cannot copy files into a
     hidden directory.

              SUMMARY OF ADDITIONAL UTILITY COMMAND KEYS
------------------------------------------------------------


Shortcut keys                 Action performed

Alt S               Select all the files in a directory
Alt D               De-select all the files in a directory
Alt F               Search for a file anywhere on a drive
Ctrl F              Rename a selected file

Alt M               Make a new directory
Ctrl D              Rename a directory
Alt+F2              Copy whole directories
Alt G               Graphic directory tree display
Alt F9              Directory size analysis

Ctrl C              Enter text into the DOS command line and
                    execute the command
Alt L               shell to DOS + execute any DOS commands
                    or programs
Alt P               Shell to DOS and run a selected program
Alt Q               Quit DM and Run a selected program

Alt T               Search for Text in a directory
Alt F5              View 1/2 screen and scroll files on the
                    other 1/2

Alt A               Turn on/off "tagging" of Hidden, Read-
                         Only, or System files
Alt E               Edit the file specification line


------------------------------------------------------------
------------------------------------------------------------

                         PART    5


               5. COMMAND LINE OPTIONS FOR DM


     The following command switches are typed after the DM
word at the DOS command line. It doesn't matter if you type
it in upper or lower case. Please note that these switches
are strictly optional, since all of these features can be
selected from within the program.

? or HELP
     = displays command line options
     eg. DM ?

/E FILENAME
     = puts you immediately into edit mode on the file you
     have typed.
      eg. DM /E C:\AUTOEXEC.BAT

/X
     = display the directories sorted in alphabetical order
     of their EXTENSIONS
     eg. DM /X

/Z
     = display the directories sorted in ascending order by
     their SIZE.

/D
     = display the directories sorted in ascending order by
     their creation DATE

/N
     = display the directories sorted in alphabetical order
     of their base NAMES (default)

------------------------------------------------------------

     The following switches are only available in the
     registered version of DM:

/S FILENAME
      = search for FILENAME on existing drive

/F FILE SPECIFICATION
      = preload the file specification when displaying the
     initial directories.



                          APPENDIX


A. PROBLEMS:

     I've never seen a program that didn't have some bugs
and no doubt this one is no exception. I would appreciate
being informed of any problems you might find. The program
was originally written for color CGA/EGA/VGA and as of this
version, I have not designed it to handle Hercules systems.
Maybe next on the list ? Naturally, there should be no
problem running it from a PC, XT, 386 or 486, or from a
floppy drive.
     While the program will show hidden files, I have not
designed it to show hidden directories. Some things are just
meant to be kept from prying eyes...

    FIXING A PROBLEM WITH FILES DATED EARLIER THAN 1980

     A user encountered a bizarre problem in which the
computer would lock up when entering a specific directory.
After much effort I found the problem to be that one of the
files was date 7-17-69.
     This may happen if you try to enter or open a directory
that contains a file dated earlier than 1980. Files dated
this early should not normally exist (the first IBM PC came
out in 1981) and DOS will not normally let you create files
dated pre-1980. Corrupted files, or viruses can cause these
strange dates to emerge.
     The solution in DM to the lock-up would require a lot
of extra code so, considering that its pretty unlikely
you'll ever have this problem, I didn't bother to correct
this bizarre bug.

     To solve this problem:

     Please check the directory that you suspect is giving
you the problem by using the old fashioned DIR/P command in
DOS before using DOS MASTER. Look at the file dates and once
you find the problem file(s), (i.e pre-1980) either erase
them, or use a utility program to change the date of the
offending file to any date you wish. An example of this is
TOUCH.COM from PC MAGAZINE. I continue to work on a more
convenient solution to this rare, but annoying event.


B.HINTS AND SUGGESTIONS:

     -I've found the fastest way to move up or down from
     directories is with single clicking the RIGHT mouse
     button on the directory name, rather than double
     clicking the left button or using the Enter key.
     -The quickest way to move to a file or subdirectory in
     a directory with many files/subdirectories is by
     pressing the FIRST LETTER of the file/subdirec. in
     question. I like this feature and it seems few shell
     programs have it.
     -Don't forget that to select all files in a
     subdirectory for copying/deletion/moving, use the Alt-S
     key combination; you don't need to drag the mouse
     through all the files.
     -moving from one side of the screen to the other can be
     done quickly with the left/right arrow keys or tab key.
     -Keep file attribute detection off (TAG SPECIAL= OFF)
     for greater speed in reading large directories.
     -Use the graphic tree display to get an overall view of
     your drive and move to a buried directory quickly.


C. ACKNOWLEDGMENTS:

     Special thanks to my dear wife Doris for her great
     patience and kind support through the long hours of
     development. What's that? Yes Dear, I'm coming to bed
     now...
     Additional thanks to Connie Kohut, Lito Arocena, Mike
     Rutherford and 'The Gang' for their encouragement and
     suggestions for improvement. Also a big thanks to the
     ever supportive Dr. Graeme Spiers who managed to come
     up with such a great name for a program.

D. LEGALITIES:

     1. No liability for consequential damages

     Under no circumstances shall the author of this
software be liable for any incidental or consequential
damages that may arise from the use or inability to use this
software.
The Department of Soil Science and the University of Alberta
is in NO WAY affiliated with this software or documentation.
The appearance of their name in this package has been
generously consented to ONLY for the purposes of a fixed
mailing address.

     2. Distribution:
     The shareware version of this program can be freely
distributed and I encourage you to do so, as long as the
DM.DOC documentation file and help files are included.
Registered users are licensed to use DOS MASTER on a SINGLE
computer (i.e with a single CPU at a single location). See
enclosed license agreement that comes with your registered
copy.


E. WHERE TO REACH ME:

     I encourage comments, suggestions or criticisms of this
program, so please feel free to write or fax me. If you wish
another copy, the fee is $25 in Canadian funds (sorry,
cheque or money order only, no VISA) which includes another
printed manual, of course. Inexpensive site licenses for
government, institutions, or corporations are available.
Please contact me for more information.
My mailing address is:

Michael Abley
c/o Dept. of Soil Science
University of Alberta
Edmonton, Alberta
T6G 2E3
fax: (403) 492-1767

Author's phone:(voice) (403) 483-1702 -after six p.m.
------------------------------------------------------------


G. Updates;

Version 1.10
- addition of Archive utility
- addition of Graphic tree utility displaying directories on
the current drive.
- bug fix in the sort.

Version 1.20
- addition of View utility with split screen scrolling of
  files
- mouse support added to View utility

Version 1.30

- addition of Directory Structure Erase feature (F8 + Ctrl-
F4)

Version 2.01
- addition of pull-down menues
- addition of directory size analysis utility
- addition of copying whole directories utility
- addition of utility to add files to existing ZIP files in
registered version.



Happy computing. Thank You!
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #2895  DOS MASTER  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To read the summary of the program, type:  TYPE PROMO.DOC  (press Enter)║
║                                                                         ║
║ To print the documentation and installation instructions, type:         ║
║                                          COPY DM.DOC PRN  (press Enter) ║
║                                                                         ║
║ To start the program, type:  DMS  (press Enter)                         ║
║                                                                         ║
║ To print the registration form, type:  COPY REGISTER.DOC PRN  (Enter)   ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PROMO.DOC

{% raw %}
```
                              DOS MASTER 2.02
                  copyright (c) 1990 - 1992 by Michael Abley

    DOS MASTER is an intuitive, mouse supported disk/file manager that has a
split-screen display of directories with a point and shoot interface. It
contains the standard copy, move, rename, and delete functions as well as a
complete mouse-aware text editor supporting block highlighting and a split-
screen file viewer/browse utility for examining large files.
    In addition, the program contains a text search utility, a file-find
feature, a four way sort function, a comparison of directories, a graphic
directory tree display to help navigate a drive, and the ability to enter
commands on the DOS command line, shell out to DOS or launch an application.
DOS MASTER continually displays the bytes free on the current drive as well
as the total size and number of selected files. You can copy or delete entire
directories that contain files or sub-directories. A new directory size
analysis feature shows you the number and size of all files in all
directories on a drive.
    People who register will also get a manual, phone support and a file ar-
chiving utility as part of DOS MASTER to compress files and save space on
their drives.

    To use this shareware version, type DMS <Enter>.
    
    The 6 files that make up this shareware package are:
          DMS.EXE        -DOS MASTER Program
          DM-MAIN.HLP    -Help screen used by program
          DM-EDIT.HLP    -""
          PROMO.DOC      -this file
          DM.DOC         -documentation for shareware version of DOS MASTER
          REGISTER.DOC   -form to print and fill-out for registering the
                          program
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```


                      REGISTRATION FORM FOR DOS MASTER


NAME:________________________________________________

ADDRESS:____________________________________________________
____________________________________________________________
____________________________________________________________

CITY_______________________________

PROVINCE/STATE____________________

COUNTRY___________________________

ZIPCODE/POSTAL CODE_______________________________

COMMENTS/SUGGESTIONS________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________
____________________________________________________________

DOS MASTER VERSION YOU CURRENTLY HAVE:_____________ (see opening screen)

WHERE DID YOU GET YOUR COPY ? ____________________________________________

DISK FORMAT ? (3 1/2 OR 5 1/4 INCH)_______________


Please send this form with $25.00
(Canadian funds- cheque, money order, sorry no VISA) to:

Michael Abley
c/o Dept. of Soil Science
University of Alberta
Edmonton, Alberta
T6G 2E3
fax: (403) 492-1767

THANKS!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2895

     Volume in drive A has no label
     Directory of A:\

    DM-EDIT  HLP      4007   3-17-92  10:33p
    DM-MAIN  HLP      4007   3-17-92  10:33p
    DMS      EXE    199668   3-19-92   9:55p
    DM       DOC     61882   3-17-92  10:33p
    PROMO    DOC      1745   3-19-92  11:04p
    REGISTER DOC      1220   3-19-92  11:04p
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1232   9-24-92   9:22a
            8 file(s)     273799 bytes
                           45056 bytes free
