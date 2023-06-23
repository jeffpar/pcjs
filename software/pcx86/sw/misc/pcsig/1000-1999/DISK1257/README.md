---
layout: page
title: "PC-SIG Diskette Library (Disk #1257)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1257/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1257"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISK WIZ"

    DISK WIZ is a disk file manager, editor, and printer control center
    that pops up like magic at the DOS prompt or within running programs to
    provide an easy and convenient way to work with your computer. It is
    much easier and faster than DOS commands and provides many functions DOS
    doesn't, and is as simple to use as possible.
    
    DISK WIZ displays up to 100 alphabetized file and subdirectory names at
    a time, including hidden ones, and basic disk information. Selecting
    files or switching directories is as easy as moving the highlight bar to
    the name and pressing "Enter" -- no typing of names! Files may be
    selected in groups matching a pattern (i.e., ".BAK") or directories
    displayed with standard DOS wildcard matching. Files may be viewed
    "raw" or processed as text files, with word and line count and line
    numbering if wanted. ASCII files may be edited with the simple built in
    editor and text files can be printed out in several formats.
    
    DISK WIZ's printer control features let you send special codes from a
    user customizable menu of 20 single keystrokes for commonly used
    commands, such as condensed print and formfeeds or strings of commands
    for those used less often. DISK WIZ can swap output between two
    printers, LPT1 and LPT2, change the cursor shape and display all the
    screen colors and characters available on your computer. There is also a
    screen blanking feature to extend monitor life.
    
    A marvelous feature of the program is an interactive tutorial
    demonstration which leads you through the use of the program with lively
    sound effects and graphics.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DWMANUAL.DOC

{% raw %}
```
------------------------------------------------------------------------------

                                    DISK WIZ

                    Disk Drive & Printer Management Program
                             ShareWare Version 1.30


                               c. 1986-8 Ted Wood
                              All Rights Reserved

                               Computer Creations
                               3538 Walker Avenue
                               Memphis, TN 38111
                                  901/327-9210

------------------------------------------------------------------------------

                        User's Manual- Shareware Version

------------------------------------------------------------------------------

------------------------------------------------------------------------------
Introduction:
------------------------------------------------------------------------------

     Welcome to Disk Wiz. Disk Wiz is a File Manager for both floppy and hard
disks, a Printer Setup Utility program and other useful things too. It
requires an IBM or compatible computer using PC or MSDOS 2.0 or higher. We're
sure you'll be delighted with it and will use it every time you turn on your
computer. If you have any problems, suggestions or feedback (and hopefully,
orders), please call Computer Creations during normal business hours.

    Thank you.

    The following is a summary of Disk Wiz's features:

Disk Operations
---------------
* Displays file names (hidden and subdirectories too!) on any disk in
   alphabetical order, up to 100 at a time, as well as disk size, free space,
   and number of entries.
* Directory searches with standard DOS wildcards (ie. *.*).
* See any subdirectory or parent(root) directory with a single keypress.
* Easy file selection by highlighting with cursor keys- No typing of names!
* Select all files matching a pattern (ie. ".BAK") at one time.
* Select up to 100 files to work on at a time, unselect files too.
* Set the DOS Drive and File Path to the current Disk Wiz path with one key.
* Keeps selection list intact for multiple or repeated operations.
* Create and Delete Subdirectories.
* Get the Directory information on files and display the total of sizes, as
    well as the space required for them on a floppy disk (always bigger).
* View any file's contents on screen, including program & hidden files.
* Display Text files on screen with or without line numbers. Makes Wordstar
    files legible!
* Print Text files with or without line numbers. Special program listing mode
    for condensed printout with Epson type dot matrix printers.
* Word Count, printable character count and line count for text files.

DOS Operations
--------------
* Displays current date and time.
* Size, Date and Time directory data for any file.
* Erase, Rename, Copy up to 100 different files at one time.
* Copy with rename.
* Copy with easy path access to all drives & subdirectories without typing
    path names!
* Overwrite warning for copying over existing files.
* Interrupt file operations at any time.

Special Functions
-----------------
* Send Printer any special codes for print style changes, special characters,
    line feeds, form feeds, reset, etc.
* Edit or Create Disk Text files with mini-word-processor.
* Typewriter emulation with printer for those quickie jobs like envelopes.
* Switch between two printers (LPT1<-->LPT2) and show which one is active.
* Display all 256 PC/ASCII characters.
* Display all 256 Screen display colors/attributes.
* Change Cursor size- (also restore it if lost).
* Toggle Disk Wiz Sound cues on or off.
* Screen Saver blanks monitor during non-use upon entering Disk Wiz.

Resident Feature: Available with full Disk wiz program package only.
----------------
     All these capabilities are available at the press of the special key
combination from DOS or from within almost any program (Text mode only). A
keystroke then sends Disk Wiz back to memory and returns you to your original
program. The screen and cursor will be just as you left it (unless you changed
the cursor shape deliberately)! In this mode, Disk Wiz needs only a little
over 40K of memory. It can be used as a stand alone, non-resident program as
well.

------------------------------------------------------------------------------
Disk Wiz Shareware Agreement & Registration
------------------------------------------------------------------------------

     As most readers already know, shareware software is NOT free software,
but is a freely distributed version of a program that you get to try out to
see if you like it, before paying for it. If you use the program on a regular
basis, you are obligated to send in the required payment. The shareware
concept will only work if software users pay for the privilege of using these
programs that otherwise would cost much more to distribute through commercial
channels. Since the shareware success stories are few, we decided to release
only part of the Disk Wiz package in this way. This Shareware version of Disk
Wiz consists of a complete copy of the stand alone Disk Wiz version that one
runs from the DOS prompt as an independent program. It is identical in
operation and capabilities to the same stand alone version in the commercial
Disk Wiz product.
     The manual for Disk Wiz included here has been modified to reflect that
the shareware version does not include the memory resident (Pop Up) Disk Wiz,
Customization program, or other utilities you receive when you register for
the full program release (which includes a printed manual). If you have
received any of these additional programs with this shareware version, please
call on our toll free number and let us know- thanks. A "Demo" program is
also included to show visually how to use Disk Wiz.
     The power of Disk Wiz really shows through when it is available at the
press of a key within your other programs or at the DOS prompt without having
to run the program each time. It is usually within a program that you want
easy and complete access to your disk drives and printer. That is exactly what
the memory resident version gives you. To get that power though, you have to
send (or call) in your order for the complete package. You also get the
Customization program that permits you to change the Disk Wiz screen colors,
install your own Printer Control Menu selections, and "Pop Up Hot Key".
     To order your complete Disk Wiz, call Computer Creations at
1-800-654-7684 or (901) 327-9210 and use your credit card, or you can send in
your order to us at 3538 Walker Avenue, Memphis, TN 38111. The cost is only
$25 + $3 postage & handling. Your Disk Wiz will be sent immediately by first
class mail.

------------------------------------------------------------------------------
What does Disk Wiz do?
------------------------------------------------------------------------------

     The list of Disk Wiz features above is complete, but doesn't really tell
you what to do with it. A typical example of using Disk Wiz in real life will
show you what it's all about:

The Situation:
------------- You've been using the same data disk for word processing on your
2 floppy drive system all semester and it is full up with a bunch of files,
about half of which are the backups the word processor creates when you resave
an existing file. You want to clean up the disk, eliminate the backups, throw
away the out-of-date files and separate what's left onto a couple of floppies
organized by subject. The horrible prospect of doing this with DOS or the file
functions built into the word processor is the reason you haven't done it all
along!

The Solution:
------------ You just got a shareware copy of Disk Wiz from a friend who talks
about it like a religious experience. After watching the DEMO program, you run
Disk Wiz from the A> prompt and then replace the Disk Wiz disk with your data
disk. Pressing the "A" key at the "Directory?" prompt, you quickly see most of
the screen fill up with a list of the 70 or so files on the floppy in
ALPHABETICAL order! You observe that a lot of them have "BAK" as a file name
extension, indicating they are the backups of final versions of your
documents.
     You press "Q" to Quick Pick file names and then enter ".BAK" as the
pattern to match. Instantly, all the backups are selected and the highlight
bar is on the last one. You press "Enter" again to finish the list, then "E"
to erase them and confirm your action when Disk Wiz checks to see if you
really want to erase these files. A moment later, the directory is
redisplayed, half its previous size, with all the backups gone. Piece of cake!
     You have a good idea what's in most of the files, but several of the file
names don't ring a bell at all. So using the cursor and Enter keys, you flag
them all and then press "T" for Text functions and the Enter key twice to
select the defaults of "Screen" and "No Line Numbers". Continuing to hold the
Enter key down, the first file scrolls up onto the screen, appearing like it
did in the word processor. Good thing too, because you were using WordStar and
DOS's "TYPE" command displayed a bunch of illegible garbage when you tried it,
and loading each of these into WordStar would take forever.
     After a few lines, you recognize the document and press ESC to skip to
the next one. Repeating this procedure, you quickly see what is in each file
you had in the list. When the directory is redisplayed, all the files are
still flagged. You "Unselect" a couple of them, add a couple more to the list
and press "C" and then "B" to copy them to floppy you put in your B drive.
After a bit of disk activity, you are back to the directory with the list
still intact.
     That was so easy, you decide that now is a good time to start the
practice of making backups of your floppies, so you put another disk in B and
press "C" & "B" again to copy the files a second time. Back at the directory
again, you press "E" to erase the files you copied from the original disk.
When the new directory is displayed, it is considerably smaller.
     Repeating the process of selecting a group of files, copying them and
then deleting them from your data disk, you soon have sorted out the whole
mess- all without ever typing in a single file name or command! Disk Wiz has
also been telling you how much space these files are taking up on your
floppies- you didn't realize that those one line files each required more
space than DOS told you. You also decided to rename some of them so you'd be
able to recognize them better in the future, which Disk Wiz did easily.
     While you're at it, you decide you need a couple of the files printed out
to refer to. It would be nice if you didn't use up all the paper they
originally took when you handed them in. With 2 keys you switch to the Printer
Codes Menu and then select Condensed type with 88 lines per page. 2 more keys
later, you are back at a floppy directory and highlight the file(s) you want
to print. Using the Text & Print options, they are soon appearing on the
printer.
     After that, you want to write a quick note, so you switch to Disk Wiz's
Editor function in Typewriter mode and zip it out without needing to run your
word processor or save it on a floppy first. You press the ESC key and soon
you're back to drab old DOS.
     "Wow!" you say- "This is a great little program!" You realize that it
would be even more wonderful to do this all from within your word processor
or spreadsheet- so you pick up the phone and call in your order for the whole
Disk Wiz program package right away- and then start thinking of all the
people you know who would love to have a copy of the shareware version of
Disk Wiz too!

------------------------------------------------------------------------------
Getting Started:
------------------------------------------------------------------------------

     The first thing you should do with any new program is make a backup copy
of it. Store the original in a safe place and use the copy. Next, we suggest
running the Disk Wiz Demonstration program to familiarize you with Disk Wiz's
capabilities. Do this by entering "DWIZDEMO" from the DOS prompt with the disk
containing the Disk Wiz programs in your floppy drive. It will take about 10
minutes to go through the demonstration.
     To run the Disk Wiz program you enter "DISKWIZ" from the DOS prompt. The
title and copyright screen will appear, at which time you can remove the
floppy disk if desired.
     Disk Wiz has been designed to be as simple to operate as possible for a
program of its power and size. The emphasis has been on small size, retaining
displayed information on the screen and minimizing keystrokes. Size, of
course, is of utmost importance for a memory resident program. We have not
cluttered up the program with fancy border displays, windows and lengthy
descriptive menus. Everything you need to know about the choices at any time
is displayed in easy to read terms.
     If you exclusively use floppies, without the need for subdirectories,
you will not be hindered by Disk Wiz's enhanced hard disk capabilities. On
the other hand, If you have a ton of files and directories on a hard disk,
Disk Wiz will let you access them with unprecedented ease. Enjoy!

------------------------------------------------------------------------------
Disk Wiz Menu & Operation Structure
------------------------------------------------------------------------------

     If you look at the following "map", you will be able to see how to get to
all of Disk Wiz's features. When you are running the program, you will almost
always find the information you need on how to proceed displayed on the
screen, albeit in an abbreviated form to reduce program size. Please look over
this map and refer to it as we elaborate on Disk Wiz's features.

Main Disk Wiz Prompt:
---Directory For Which Drive?    <----------------------------<-------------\
   :    :    :                                                              |
   :    :    :.....F1= Toggle between DIR:"*.*" and user defined            |
   :    :              Directory search.                                    |
   :    :                                                                   |
   :    : "Enter" Key=                                                      |
   :    :.....Special Function Menu                                         |
   :            :                                                           |
   :            :....Printer Codes Menu = "P"                               |
   :            :  :....Preset Menu for Epson type printers                 |
   :            :  :....Send any byte value(s) to printer                   |
   :            :                                                           |
   :            :....Text File Editor = "E"                                 |
   :            :....Typewriter = "T"                                       |
   :            :....Switch printers (LPT1<-->LPT2) = "L"                   |
   :            :....ASCII + Graphic Character set = "C"                    |
   :            :....Screen Display Color Set = "S"                         |
   :            :....Cursor Shape Editor = "U"                              |
   :            :....Turn Disk Wiz Sound Cues On or Off = "O"               |
   :            :....Remove Memory Resident Disk Wiz = "#"                  |
   :            :...."ESC" = return to main prompt --------------->-------->|
   :                                                                        |
   : Drive Letter,ie. "A"                                                   |
   :     or Space Bar for current DOS path                                  |
   :                                                                        |
Directory Display= Alphabetical list of files    <--------<---------------\ |
:  :  :   :   :                                                           | |
:  :  :   :   : "Enter" key while Parent or Subdirectory Highlighted=     | |
:  :  :   :   :....Go to Parent directory or Subdirectory ------->------->| |
:  :  :   :                                                               | |
:  :  :   : "P" key = Path Set                                            | |
:  :  :   :....sets DOS Drive & Path to currently displayed one  ---->--->| |
:  :  :                                                                   | |
:  :  : "X" key = Subdirectory Operations                                 | |
:  :  :....Make & Delete Disk Subdirectories Function      ------->------>| |
:  :                                                                      | |
:  :...."N" key = New drive selection         ------------->--------------->|
:  :                                                                      | |
:  :...."S" key = Start file selection over from scratch    -------->---->| |
:  :                                                                      | |
:  :...."ESC" key = Exit from Disk Wiz        ------->DOS prompt          | |
:                                                                         | |
:....File Selection                                                       | |
   :     :                                                                | |
   :     : Cursor, "Enter" keys                                           | |
   :     :....Move Highlight bar to & Select files to work with           | |
   :     :                                                                | |
   :     : "U" key = Unselect file                                        | |
   :     :....Remove files from Selected file list                        | |
   :     :                                                                | |
   :     : "Q" key = Quick pick                                           | |
   :     :....Rapid selection of all files matching a pattern, ie. ".BAK" | |
   :                                                                      | |
   :...."Enter" Key again on an already selected file = completed list    | |
      :                                                                   | |
      :                                                                   | |
File List Action Menu                                                     | |
:   :   :   :                                                             | |
:   :   :   : "D" key = Directory data display                            | |
:   :   :   :....Display of File Size, Date & Time of Creation, & amount  | |
:   :   :   :     :       of space file will take up on a floppy disk.    | |
:   :   :   :     :..Total of files sizes                                 | |
:   :   :   :                                                             | |
:   :   :   : "R" key = Rename files                                      | |
:   :   :   :....Rename each file on File List, entering a blank name     | |
:   :   :   :           quits this function.                              | |
:   :   :   :                                                             | |
:   :   :   : "V" key = View files                                        | |
:   :   :   :....Displays contents of files (hidden ones too) directly    | |
:   :   :   :           to screen with no conversion of code to text.     | |
:   :   :   :                                                             | |
:   :   :   :."S" key = Start file selection over from beginning with     | |
:   :   :   :           current directory   --------->-------------->---->| |
:   :   :   :                                                             | |
:   :   :   :."N" key = Start over again with a NEW directory  -------->--->|
:   :   :                                                                 |
:   :   : "E" key = Erase files                                           |
:   :   :....Delete files from disk with Yes/No Verification              |
:   :      :                                                              |
:   :      :...."ESC" key = Abort erase files operation    ------->------>|
:   :                                                                     |
:   : "C" key = Copy Files                                                |
:   :............Copy files from current disk/subdirectory                |
:     :    :    :           to another disk or subdirectory               |
:     :    :    :                                                         |
:     :    :    :Drive letter (ie."B")                                    |
:     :    :    :....Copy files directly to that disk drive   ----->----->|
:     :    :    :"P" key                                                  |
:     :    :    :....Copy files directly to printer  ------------->------>|
:     :    :                                                              |
:     :    :..........."Enter" key   = Current Disk Wiz directory path    |
:     :    :       or     :                                               |
:     :    :..Spacebar    :          = Current DOS directory path         |
:     :          :        :                                               |
:     :          :        :                                               |
:     :    Subdirectory/Path Edit Line for copying                        |
:     :    :    :    :                                                    |
:     :    :    :    :Left/Right Cursor keys                              |
:     :    :    :    :....Move Towards & Away from Root Directory         |
:     :    :    :                                                         |
:     :    :    :Up/Down Cursor keys                                      |
:     :    :    :....Select between subdirectories within current one     |
:     :    :                                                              |
:     :    :"Enter" key                                                   |
:     :    :....Start copying to the selected Path  ------------>-------->|
:     :                                                                   |
:     :"ESC" key                                                          |
:     :....Interrupt copying of files immediately! ---------------->----->|
:                                                                         |
:"T" key = Text File Functions                                            |
:.........Display or Print Text Files                                     |
   :   :   :   :                                                          |
   :   :   :   :"S" key = Screen                                          |
   :   :   :   :....Display of text files to screen     ------------>---->|
   :   :   :       :                                                      |
   :   :   :       :..Question: Display file with line numbers?           |
   :   :   :            :...."Y"=Yes.... Question: Start at what line?    |
   :   :   :       File is displayed to screen with all special characters|
   :   :   :          converted to text. (WordStar files made legible!)   |
   :   :   :                                                              |
   :   :   :"E" key = Edit                                                |
   :   :   :........Edit text files in sequence --------->--------------->|
   :   :   :        using mini-word processor.                            |
   :   :   :                                                              |
   :   :   :"P" key = Print                                               |
   :   :   :........Print text files           ----------->-------------->|
   :   :       :..Print Options:                                          |
   :   :         :..Line Numbering?                                       |
   :   :         :..Special program listing                               |
   :   :                                                                  |
   :   :"W" key = Words                                                   |
   :   :....Count Lines, Words, Printable characters in file.  ------>--->|
   :                                                                      |
   :...."ESC" key = interrupt display or printing of current file         |
   :                                                                      |
   :...."END" key = interrupt display or printing of whole file list ---->|

------------------------------------------------------------------------------
Using Disk Wiz
------------------------------------------------------------------------------

     After entering "DISKWIZ" at the DOS prompt, Disk Wiz will load and run
from the disk. You will first see the Title & Copyright display and will need
to press a key to continue with the program. You will then see a brief Disk
Wiz title and copyright notice again with the current Time and Date displayed
as stored in the computer. If you didn't set the internal clock when turning
the computer on, it may be wrong. The Printer that is currently active (LPT1
or LPT2) will also be shown. You will also see the Main Disk Wiz prompt:

            "Directory for ? Drive: "

        This is the point where the Map above starts. There are three general
directions you can go:

    Disk Directory
    -------------- See a disk's directory by pressing a letter (ie. "A") to
    see that drive's directory or the <SPACE> bar to see the current DOS
    Path's directory. No ":" or "Enter" is needed.
        The default directory command retrieves ALL the files in the
    directory. The F1 key is used to toggle (switch) between this "all files"
    mode and one where you can enter any normal DOS DIR wildcard specif-
    ication. For example, normal mode is equal to DIR *.*. A possible
    Alternate Mode specification could be "*.BAT" to retrieve only the batch
    files in that directory. This mode is very useful when the directory
    contains too many (>100) files to fit on the screen at one time. It will
    remain active until you switch it back to "*.*" by pressing F1 again and
    then "Enter" to select the default.

    Special Functions Menu
    ---------------------- Press "Enter" to access the Special Functions Menu
    for the Printer Commands, Editor, Typewriter & non-file functions.

    Quit Disk Wiz
    ------------- Exit to DOS by pressing the <ESC> key. If you had been
    using the Pop-Up version of Disk Wiz, you would return to the other
    program (ie. word processor) that was running before you brought up Disk
    Wiz with the "Hot Key".

     The Escape key "ESC" is very important in Disk Wiz. At almost any time,
pressing it will either interrupt whatever process is underway or exit the
program. With the shareware (stand alone) Disk Wiz, you always have an
opportunity to cancel the "Exit to DOS" and continue running the program.
There are also a few places where Disk Wiz will ask you to press "ESC" before
proceeding. This gives you a chance to digest the screen contents before they
scroll up and away.

------------------------------------------------------------------------------
Directory Display
------------------------------------------------------------------------------

     Copying, renaming, deleting, displaying(viewing) & printing files are the
main reason to use Disk Wiz. Except for renaming files, you will not have to
type in any commands or file names to perform these actions! Being able to do
this in the middle of your word processor or other program brings a level of
convenience to your computer you won't want to work without. File selection
begins at a disk directory, so press the letter of the disk drive you want to
work on. If you have a hard disk, you can press the Spacebar to go straight to
the current DOS path. Disk Wiz will read the directory from that drive,
assuming you have a disk in it.
     We've tried to make Disk Wiz "error-proof"- if you specify a drive that
doesn't exist, or don't have a floppy in it, or the door's open, Disk Wiz will
tell you. NOTE: the timeouts for these errors to be detected varies on
different machines, so be patient, especially if you accidentally try to send
output to a printer that isn't there!
     Normally, the disk directory is sorted and displayed in alphabetical
order, up to 100 files at a time. You have the option to see the actual order
by pressing any key while the directory is being read. At the top of the
display are several pieces of information:
        * The current drive and subdirectory(if any) path.
        * The DIR wildcard mask used to pick the directory entries (*.*=all).
        * The size of the disk.
        * The amount of free space on the disk.
        * The number of file entries (not including "." & ".." entries).
        * The sum of the file sizes.
        * The number of subdirectories.

    There are three different types of files you may see.
        * Normal files have no prefix character in the display.
        * Subdirectories have a diamond prefix character.
        * Hidden files have an 8 pointed asterisk prefix.

     If you are in a subdirectory, the "Parent Directory" has two diamonds in
front of it. Disk Wiz does not use the confusing "." and ".." Parent & current
SubDirectory listings.
     To see the directory of a subdirectory, simply move the cursor bar to
that item and press Enter.
     You can change the "mask" used to select files from the entire disk
directory to a customized one that will display only selected files according
to the DOS DIR wildcard rules. Press F1 at the Directory? prompt or from the
File Selection Menu to enter a new mask. The default (selected by pressing
Enter) is "*.*". This is useful for displaying only a specific type of file
out of a directory with hundreds of entries. Note that subdirectories usually
are excluded from the selection process with a special mask, and you therefore
cannot change directories by merely selecting it from the display. The mask
that is current will remain active until you change it back to the default or
another mask. This is also true with the Pop-Up Disk Wiz after you leave it
and then return later.
     For those of you who do not know about DOS "wildcards" for files: When
you do a directory listing from the DOS prompt with the command "DIR", the
default file mask is "*.*". This matches up any and all files and is equal to
"????????.???". The "*" and "?" are the DOS wildcards. The "?" says: accept
any character in this position including a blank one. The "*" says: accept
any sequence of characters in this position and is shorthand for filling in
all the allowable spaces with "?"s. DOS filenames can be up to 8 characters +
a period + 3 more characters.
   Examples:
      ???.* will match any files with 3 or less characters in the prefix and
      any suffix: ie. TED.DOC or 1.BAT

      *.BAT will pick all files with "BAT" as an extension: ie. AUTOEXEC.BAT

      DW*.DAT will pick all files beginning with "DW" and DAT as a suffix,
      like DW1.DAT or DW123.DAT

------------------------------------------------------------------------------
File Selection
------------------------------------------------------------------------------

     Selecting files to work with is easy. Use the Cursor Keys to move the
highlight bar to the file you want to select. Press "ENTER" to select that
file name. If you select a directory, Disk Wiz will immediately go to that
subdirectory and display it's contents using the same file mask, though you
may not see any subdirectories displayed, depending on the mask. You can
select up to 100 files to work on at one time, including Hidden files.
     You can save time by using "Quick Pick" (press "Q") to automatically
select all the files matching a pattern, such as ".BAK", in one operation.
Just enter the pattern to match at the prompt. If you enter no pattern, Disk
Wiz will select all the files except the hidden ones, which you will have to
do manually.
     You can start the selection process over again by pressing "S". If you
need to Unselect a file from the list, use the "U" key.
     To complete your list and advance to the File Action Menu, cursor to one
of the files you already picked and press "Enter" again. Picking any file
twice signals Disk Wiz to move on.
     If there are more than 100 files to display, you will see a special
option: "<A>dditional Files". You can work on the files presently displayed
and then access the additional ones later with this command or press "A" now
to see the additional files. You can only work on one "page" at a time though.
This is where the special DIR mask comes in handy. By using it to sift through
the whole directory and pick up only certain ones, you can usually pull the
ones you want up all at one time.
     There are other things you can do at this point besides selecting files,
but reduce confusion, we will cover them later.

------------------------------------------------------------------------------
File Action Menu:
------------------------------------------------------------------------------
     Copy, Rename, Erase, View, Directory Info, Text File operations.

     Once you've completed the list of files to work on, you can perform these
DOS and additional operations with them. Simply press the letter indicated by
<>'s in the menu command. While Disk Wiz is performing the selected operation,
you can Interrupt it with the <ESC> key. In the View and Text operations, you
can interrupt the whole file list with the <END> key.
     Disk Wiz keeps the list of files you selected intact so you don't have to
reselect them to do another file operation. The exceptions to this rule are
after erasing or renaming files, which cause the directory to be changed.

Special Notes:

  Erase: You are asked before the erasing begins if you really want to delete
  the files. Pressing "Enter" selects the default of "Yes". Pressing "ESC" at
  this point or during the erasing procedure will stop the procedure and send
  you back to the directory display.

  Rename: Prompts you for the new name of each file and then makes the change
  to the disk directory. Enter a blank name to quit this function without
  changing the file name at the new name prompt.

  View: Displays files directly into the video display memory. This allows you
  to examine programs and other non-text files. The offset into the file is
  displayed at each line in decimal. You can interrupt the display with the
  <ESC> and <END> keys.

  Directory Data: Displays the information about the file in the disk
  directory. This consists of the Date and Time the file was created, and the
  Size of the file in bytes. Disk Wiz supplies additional information on the
  file sizes. In parentheses you will see another size for each file. This
  number is the actual space the file will take up on a floppy disk. Floppy
  disks portion out their space in 512 byte chunks, so a 600 byte file takes
  up 1024 bytes or 1K of space. Disk Wiz also shows you the total of the
  files' sizes in both formats.

  The Text and Copy operations have enough subtopics each to warrant their own
  sections.

------------------------------------------------------------------------------
Text File Operations
------------------------------------------------------------------------------

     Disk Wiz can display, edit, print or derive information from your text
files. Many word processors (ie. WordStar) convert some of the letters in your
text to unreadable form. Disk Wiz will display and print them normally. Some
word processors format the text on the fly and save their files without any
line breaks in the text. These will be displayed, but Disk Wiz has no way to
tell where the lines are supposed to end, so the display may not be exactly
what you expect.
     Disk Wiz converts the files by "stripping" the eighth bits off of each
byte in the file. Form feeds and Tabs are indicated by displaying those words
in the text, rather than forwarding them through.
     Disk Wiz will step through the files you selected, one by one, with
chosen text file function. To skip to the end of the current file, press the
ESC key. To skip to the end of your selected file list, press the END key.

Display to Screen:
     After selecting text operations, the default operation is Screen Display,
selected with the "S" key or simply pressing "Enter". The display can be with
line numbers and if numbering is selected, can start anywhere in the file. You
must hold down a key to scroll the text up the screen.

Edit:
     The Disk Wiz Editor is a sophisticated line editor using many word
processing commands, with WordStar control key compatibility. This Shareware
version of Disk Wiz is limited to editing a 388 line file. You have a 20 line
cut/copy "clipboard area" to recover deleted lines from and copy lines into
for insertion at another point. Due to its smaller data area, the Pop-Up Disk
Wiz has a smaller capacity. The Editor is described in detail below.

Print:
     This is similar to the screen display, except that it is output to the
printer. There is a special listing mode for Epson type dot matrix printers.
It prints the file name in Bold Pica followed by the file in condensed type
with 8 lines per inch, line numbers and form feeds between files. This listing
mode also does no character translation.
     If your file contains graphic characters (box, etc) you may want to use
the "Copy to Printer" feature of the Copy Files function. These characters, as
well as many special symbols, have values above 127 and would be changed by
the Text Print function.

------------------------------------------------------------------------------
Copying Files
------------------------------------------------------------------------------

     To simply copy to another disk drive, just press the letter for it (ie.
"B") after selecting the Copy option from the File Action Menu.
     If you want to copy to a subdirectory, press "Enter" or the Spacebar.
This will drop you into the "Edit Path" line. Either the Disk Wiz path or the
current DOS path will be displayed depending on which you pressed. You can use
the cursor keys now to select the path to copy to. Cursor left to back up the
path all the way to a different drive if desired. Cursor right to display the
next subdirectories available along the path. When a list is displayed, use
the up/down cursor keys to select the desired one. When the full desired path
is displayed on the Path Specification line, press <ENTER> to start copying to
that path. If you want a different subdirectory within the current parent
directory, back up to the parent and then cursor right to display the child
list. This isn't as complicated as it sounds. Once you try it, you will find
this method to be fast and intuitive.
     If all you use are floppies, and you don't understand this subdirectory
talk, don't worry about it. All you need to do is press the drive letter at
the "Copy to:" prompt!
     If you try to copy over an existing file of the same name, Disk Wiz will
beep and ask you for permission to overwrite it. The default (Enter key) is to
overwrite. You also have the option to rename it, which you always get if
copying only one file.
     You can Halt the copying process at any time with the <ESC> key, though
this may leave you with a partial copy on the target disk. Disk Wiz will warn
you if this happens.
     You can copy a file and rename the copy at the same time by selecting
only one file at a time. If you are copying several files and select "Rename"
instead of overwrite for any existing file, you will be prompted for a new
name on each of the remaining files on the selected file list.
     You can copy files directly to the Printer by pressing "P" at the "Copy
to:" prompt. In this way, you can print out a file without any of the
conversion that the Text Print Function performs. This is useful for sending
the printer a long sequence of codes instead of using the Printer Codes Menu.
This file can be created with the TEXT2BYT program included with the full
Diskwiz package.

------------------------------------------------------------------------------
Making & Removing Subdirectories
------------------------------------------------------------------------------

     One of the key functions we skipped at the File Selection Menu is "X" for
Disk Wiz's Subdirectory functions. When entering the name of a subdirectory to
create, remember that you are limited to normal DOS file names.
     Also, you cannot delete a subdirectory while it is the active DOS
directory or if it has files in it. Refer to the DOS manual for more
information on subdirectories.

------------------------------------------------------------------------------
Setting DOS Drive & Path
------------------------------------------------------------------------------

     The other skipped function at the File Selection Menu is the Path
command. Pressing "P" will change the active (default) DOS drive and path
specification to that of the currently displayed directory. When you exit to
DOS (or your "surface" program if using the Pop-Up DiskWiz), you will find the
new path set. This is an easy way to move to a subdirectory deep in the hard
disk without typing in the whole "CD" command line.

------------------------------------------------------------------------------
Special Functions
------------------------------------------------------------------------------

     Disk Wiz has several Special Functions, accessed by pressing <ENTER> at
the "Directory for ? Drive:" prompt. These are:

Printer Commands
----------------
     The Printer Code Menu is a list of 19 preset 5-byte instructions can be
sent to your printer by pressing the appropriate menu key. Normally, this
would have to be done through a word processing program, if even possible
then. These commands can be a simple as a form feed or printer reset, to as
complicated as setting a different print style and line spacing.
     Disk Wiz comes with a set of Epson dot matrix codes. The abbreviations
used in the menu list are:

      FF/LF: Formfeed/Linefeed   Cnd: Condensed          Exp: Doublewide
      Micro: Superscript & condensed (tiny print)        Mic: Micro
      Emp: Emphasized            Und: Underlined         LPI: Lines per inch
      +: turn it on              -: turn it off          Ital: Italics

     The "ESC" key exits the Printer Menu prompt, but you must enter a blank
line to quit the special codes prompt.
     Note that you can change these menu selections for your printer if you
have the customization program that comes with the full Disk Wiz package.
Also note that some programs, such as PC-Write, will completely reset the
printer before sending the document to it, though a work-around can usually be
found with a little trial and error.
     The last menu selection is for special codes not listed in the menu. Disk
Wiz makes it very easy to send a whole string of commands. You can almost copy
them directly from your printer manual. Normally, a printer instruction
consists of several bytes (a number from 0 to 255). For example, turning on
underlining might be 27,95,1. Usually though, the printer manual lists the
byte sequence as a combination of numbers and letters. Disk Wiz lets you type
in byte numbers, hexadecimal numbers and characters all on the same line and
converts them to the bytes required by your printer.

    The procedure is simple, once you understand the "rules":
         1. Commands are entered as lines of text. Several commands can be on
         each line.
         2. Each entry in the line MUST be 3 characters long separated by a
         space.
         3. Decimal numbers require no prefix, but must have the leading zeros
         required to make them 3 characters long, ie. 000 001 027 123 255.
         4. Hex values are prefixed with a "$" (dollar) sign, ie. $07 $FF $1a
         5. Letters, number & punctuation characters must be sandwiched, one
         at a time, between quotes ("), ie. "A" "0" "."

     Disk Wiz will check the line for errors before sending anything to the
printer, and will point out where the problem is. To get out of this function
you must enter a blank line (not escape).

Example: 015 027 "S" 000 027 "3" 015
         This turns on condensed print, then turns on superscript, then sets
line spacing to 14 lines per inch for a really tiny printed output on Epson
compatible dot matrix printers.

Characters
----------
     Disk Wiz will display all 256 characters that your computer is capable of
displaying. The first 128 of these are known as the ASCII character set, the
remainder are the special IBM character set. The first 31 ASCII characters are
normally special purpose codes such as #12 for form feed, #13 for carriage
return, #10 for line feed, #7 for bell, etc. They appear as characters on the
screen since your computer has a full 256 character set for display purposes,
though 0 and 255 normally don't display anything. You can find the value for
any character by adding the row and column values together at the character
location.

Screen Colors
-------------
     Depending on the display adaptor and monitor (screen) type, your computer
can display up to 256 different foreground and background color combinations
for text display. Color is put on the screen by placing the value of the color
combination (including blinking and intensity) in the attribute byte for the
specific letter position on the screen. The values for a color in this
function is obtained by adding the row and column values.

Typewriter
----------
     Disk Wiz will let you use your computer and printer just like a
typewriter, except better! The printer doesn't receive anything until you
finish editing the document and send it. You can even print multiple copies.
The Typewriter function uses the same editor as the Disk Wiz File Editor,
described in detail further on.
     When your page looks the way you want it, press the ESC key to exit the
Editor. You will be asked whether to send the page to the printer. You can
also go back to editing.
     After printing is completed you will be prompted to print it again or
re-edit it if you like. This function is perfect for whipping out an envelope
or quick note when you don't want to quit what you're doing and load your word
processor. You can even do a manual mail merge by re-editing in a new address
and printing out the document again.

Disk File Editor
----------------
     You can make or edit existing text files, such as DOS batch files, with
Disk Wiz's Mini-Word Processor. The function is the same as the Typewriter
except you are prompted for the name of the file before starting the editing.
Usually, you will enter the Editor for an existing file through the Text File
Operations function after selecting it out of the directory display. That way,
you don't have to type in the file name or path. Selecting the Editor through
the Special Functions menu allows you to create new files.
     If you try to edit an existing file that is too big for the data area in
Disk Wiz, you will get a warning. You can then proceed with as much of the
file as will fit in.
     Note: when making "Batch Files" (list of DOS commands), you sometimes
want to have the last line finish without a carriage return (CR). Disk Wiz's
Editor will do this if you make that line the last line of the file.
    Again, when you are done editing the document, press the ESC key to get to
the "Save/Print File?" prompt. As in typewriter mode, you can print, re-edit,
and print again if you like, and actually never even save the file.

Switch printers
---------------
     If you have two parallel ports (printer ports) and two printers or
devices hooked up to them, you can use Disk Wiz to switch the output between
them. These printers are called LPT1 and LPT2. This is very useful for
outputting draft copy or graphics on a dot matrix printer and then switching
to a daisy wheel printer for final copy.
     Of course, this assumes your printed output would be normally going to
LPT1. If you change your word processor to print to LPT2, and then use Disk
Wiz to swap LPT1 & LPT2, you'll print on 1. You can always see which printer
is going to receive output at the "Directory for ? Drive" prompt, which will
display "Printer 1" or 2.
     Disk Wiz does its best to figure out which printer is 1 or 2 when you
first run the program. This means that if you run once, switch printers, exit
and then run it again, you will find the correct display. If your computer
does not follow the standard LPT addressing, you may find 1 & 2 switched in
the display, but it will be consistently so.

Change Cursor
-------------
     Disk Wiz allows you to change the cursor appearance for Disk Wiz and the
program from which you invoked it. You can restore the cursor if you lose it
from another program as well! Note that some programs (notably BASIC) reset
the cursor with every keystroke, so using Disk Wiz to change the cursor will
not help within that program, but will be invaluable for restoring it after
running the program!
     Note that when you enter Disk Wiz, you'll always get a cursor. When you
exit Disk Wiz, the cursor is normally restored to the way it was before,
unless you specifically use the Change Cursor option. So don't be confused by
seeing a cursor in Disk Wiz and having it disappear when you exit.

Sound Toggle
------------
     This function turns the sound cues (beeps) of Disk Wiz on or off for
silent operation.

Screen Saver
------------
     This feature extends the life of your monitor(screen) by filling it with
black spaces after 30 seconds of not using Disk Wiz. This ONLY occurs when you
first run Disk Wiz (or call it up with the Hot Key in the Pop-Up version) and
don't reply to the "Directory for ? Drive" prompt. Pressing any key will bring
back the screen. Because Disk Wiz's screen saver feature works by filling the
screen with black spaces instead of using a hardware setting, it will work
with any monitor!

------------------------------------------------------------------------------
Disk Wiz Editor
------------------------------------------------------------------------------

     The Editor built into Disk Wiz may well be the nicest little line editor
you've ever used. "Line Editor" means that you work on one line at a time
without any word-wrapping (you can't type past the end of a line). Except for
that limitation, you have an excellent set of word processing functions,
including copying lines, moving lines, recovery of accidentally deleted lines,
and extended cursor movement functions. To top it off, almost all of the
WordStar cursor, deletion and insertion keys work with Disk Wiz's Editor.
     You are limited to a maximum of 388 lines of 79 characters each with the
shareware and stand-alone Disk Wiz versions. The Pop-Up version has 60 lines,
enough for a full page of text. The cut & paste area is 20 lines (4 lines in
Pop-Up Disk Wiz).
     The Editor is always in "Insert" mode. This means that what ever you type
in is inserted into the line at the cursor position, and does not overwrite
what was already there. Whenever a line becomes longer than 70 characters, you
will hear a short beep reminding you that the end is near.

Cursor Movement
---------------
     The following keys and Control key combinations move the cursor through
your text file. A Control key combination means to press the Ctrl key down and
then press the second key in the combination. This is written as "^" + the
key. For example, ^T is Ctrl+T and deletes a word to the right of the cursor.

  * Cursor keys move the cursor left or right along the line or up and down the page.
  The corresponding WordStar keys are ^S, ^D, ^E, ^X.
  * PageUp (or ^R) and PageDown (or ^C) keys move the text up or down 21
  lines at a time.
  * Home and End keys move the cursor to the beginning and end of lines.
  * Control + Cursor Right or Left move one word at a time along a line. ^F
  and ^A are the WordStar equivalents.
  * TAB: On a blank line the Tab key moves the cursor to the next increment of
  8 spaces from the left edge. Since you are actually inserted the necessary
  number of spaces to do this, any text on the line will be moved to the right
  as well.
  * ENTER: The Enter key drops the cursor down to the next line, and "starts"
  a new one if at the end of the file.

Inserting, Deleting, Copying Text
---------------------------------
     The Editor has a special area where it keeps a copy of deleted lines. If
you accidentally delete a line with the "delete line key" you can recover it
from this area. You can also copy lines into this Cut & Paste area and recover
them as well. This gives you the ability to move lines from one part of the
file to another or to repeat lines from one part to another. The INSERT key is
the one that recovers these lines back into the file, inserting them between
existing lines. The Cut & Paste area is 20 lines with this Shareware Disk Wiz.
Note that you can't recover text deleted with the Delete or Backspace keys
which erase characters one at a time, either at the cursor or to its left.

  * Delete lines with Alt + "D" or ^Y at the cursor position.
  * Insert lines with Alt + "I" or ^N. A blank line will appear above the
  current line and the cursor will be moved to the beginning of it.
  * Copy lines to the Cut & Paste area with Alt + "C". You'll see the line
  disappear momentarily and then reappear to let you know you actually did
  something.
  * Insert lines from the C & P area with the Ins key.
  * Erase a word at a time with the ^T key.

Editor File Format
------------------
     Disk Wiz's Editor is a straight ASCII editor. It expects only normal
characters and standard linefeed/CR's and does not do any conversion when
reading in a file to edit. You can convert files to this format with the
utility included with the complete Disk Wiz package. Alternatively, you can
use Disk Wiz to print out a file (which does some conversion) and capture it
with a print spooler.

------------------------------------------------------------------------------
Error Messages
------------------------------------------------------------------------------

     The following are the meanings of some error message numbers which you
might get under unusual circumstances. Normal error messages are displayed in
Disk Wiz's operation.

  1. File does not exist.
  2, 3, 4. File not open.
  32. Operation not allowed on logical device.
  34. Operation not allowed on standard file.
  145, 153. Unexpected end of file.
  240. Disk full.
  241. Directory full.
  243. Too many open files. (Put Files=20 in Config.Sys).
  255. File Disappeared.
  256. Disk write protected.
  768, 2816, 3072. Device not ready.
  1280, 1792, 2048, 2304. Bad disk or drive.


              Thank You for using our Shareware Disk Wiz version!
              I hope you enjoy it and will order the full package.
                                       -Ted Wood, Disk Wiz author.

END OF DOCUMENTATION.

```
{% endraw %}

## README.DOC

{% raw %}
```
                              Computer Creations
                              3538 Walker Avenue
                              Memphis, TN 38111

                                                         February, 1988

      Dear Shareware User,

      I have spent two years perfecting the most convenient, versatile,
      and economical disk and printer manager on the market. It's called
      Disk Wiz, and I'd like to share it with you.

      Disk Wiz's major feature is that it loads into RAM and remains in
      the background until called up at the touch of a key to allow you
      to use it without having to exit the program you're working in. For
      instance, if you're speadsheeting, Disk Wiz's pop-up feature lets
      you jump out of the spreadsheet into Disk Wiz to pull up a letter
      containing figures needed in the spreadsheet, print the letter out
      or view it on the screen, and then go back to the spreadsheet to
      insert the numbers. Disk Wiz returns you to your exact place in the
      original program. All in a matter of seconds.

      Disk Wiz is far superior to similar programs. It performs more
      functions, uses less memory, and costs less money. Disk Wiz is also
      easier to learn and simpler to operate.

      Disk Wiz works on IBM(R) and compatible computers using PC or MS
      DOS 2.0 or higher. There are 2 versions of Disk Wiz on every
      distribution disk to accomodate different hardware. Plus, there is
      even a non-memory resident version for those with small memories or
      not-so-compatibles. Also, Disk Wiz can be customized for the
      Invoking Keys combination, Screen colors, and Special Printer Codes
      menu.

      Disk Wiz has many, many desirable features.

      * It takes the hassle out of managing hard-disk files and floppies.

      * It eliminates typing file names and commands over and over.

      * It has a printer control feature that allows users to switch
        printers and to send special printer codes such as letter quality,
        condensed print, smaller line spacing, etc.

      * It has a versatile editor and typewriter mode for quick notes and
        envelopes.

      * It use less than 43K of memory. (Similar programs usually use
        twice as much!)

      * It saves time and frustration every day.

      * And much, much more.

      You'll be glad to know that the Disk Wiz Shareware manual is a
      straight ASCII text file. There are no tabs, formfeeds, graphic
      characters or extra blank lines. You can load it into any word
      processor and read it or print it out in any fashion you see fit.

      A 15-minute tutorial program called DWIZDEMO will take you through
      Disk Wiz and teach you enough to use it without referring to the
      manual for most operations.

      For only $5, you can order a Shareware copy of Disk Wiz direct from
      me without risk of viruses or trojans. In the Shareware Version,
      the program's pop-up is not included for obvious reasons. However,
      this will not prevent you from fully appreciating Disk Wiz as a
      stand alone program.

      I know that when you see how many times a day you use Disk Wiz as a
      stand alone program, you will want the convenience of having it as
      a Pop-Up program, available at the press of a key. Of course, when
      you order the whole Disk Wiz package, you get the invaluable
      Customization program and other useful utilities, as well as an
      easy-to-read printed manual.

      Disk Wiz regularly sells for only $25, plus $3 for postage and
      handling. It may well be the biggest bargain in computer software.
      Disk Wiz has been favorably reviewed by Sally Price in InfoWorld
      and by Herb Friedman in Hands-On Electronics. In June of 1987,
      InfoWorld had this to say about Disk Wiz: "Versatility, power &
      simplicity come wrapped in RAM...Valuable utility for business and
      home." Hands-On Electronics, which featured Disk Wiz twice, called
      it a "lovely program that sneaks up on you...finally...you can't do
      without it." We know you'll think as highly of Disk Wiz as the
      experts do.

      To order the complete Disk Wiz package, call 1-800-654-7684 and
      charge it to your VISA or MasterCard. Or order by mail and send a
      personal check. Either way, we'll ship immediately. We won't wait
      for the check to clear. (Sorry, no purchase orders or COD's.) You
      can't lose. Disk Wiz is fully guaranteed. If you're not completely
      satisfied, simply return the manual and registration card within 30
      days for a full refund. Erase the disk and keep it for your
      trouble.

      Please remember that a tremendous amount of effort and money goes
      into developing a software program. And no one gets rich from
      selling programs through the shareware plan. If you like the
      program and continue to use it, you are obligated to pay the full
      price.

      If you have any questions, please call me personally during regular
      business hours at 901-327-9210.

      Sincerely,

      Ted Wood
      President
      Computer Creations

      P.S. I'm frantically interested in BUGS! A free Disk Wiz to the
      first report of any bug found (with the bug fixed, of course.)

```
{% endraw %}

## DWMANUAL.DOC

{% raw %}
```
------------------------------------------------------------------------------

                                    DISK WIZ

                    Disk Drive & Printer Management Program
                             ShareWare Version 1.30


                               c. 1986-8 Ted Wood
                              All Rights Reserved

                               Computer Creations
                               3538 Walker Avenue
                               Memphis, TN 38111
                                  901/327-9210

------------------------------------------------------------------------------

                        User's Manual- Shareware Version

------------------------------------------------------------------------------

------------------------------------------------------------------------------
Introduction:
------------------------------------------------------------------------------

     Welcome to Disk Wiz. Disk Wiz is a File Manager for both floppy and hard
disks, a Printer Setup Utility program and other useful things too. It
requires an IBM or compatible computer using PC or MSDOS 2.0 or higher. We're
sure you'll be delighted with it and will use it every time you turn on your
computer. If you have any problems, suggestions or feedback (and hopefully,
orders), please call Computer Creations during normal business hours.

    Thank you.

    The following is a summary of Disk Wiz's features:

Disk Operations
---------------
* Displays file names (hidden and subdirectories too!) on any disk in
   alphabetical order, up to 100 at a time, as well as disk size, free space,
   and number of entries.
* Directory searches with standard DOS wildcards (ie. *.*).
* See any subdirectory or parent(root) directory with a single keypress.
* Easy file selection by highlighting with cursor keys- No typing of names!
* Select all files matching a pattern (ie. ".BAK") at one time.
* Select up to 100 files to work on at a time, unselect files too.
* Set the DOS Drive and File Path to the current Disk Wiz path with one key.
* Keeps selection list intact for multiple or repeated operations.
* Create and Delete Subdirectories.
* Get the Directory information on files and display the total of sizes, as
    well as the space required for them on a floppy disk (always bigger).
* View any file's contents on screen, including program & hidden files.
* Display Text files on screen with or without line numbers. Makes Wordstar
    files legible!
* Print Text files with or without line numbers. Special program listing mode
    for condensed printout with Epson type dot matrix printers.
* Word Count, printable character count and line count for text files.

DOS Operations
--------------
* Displays current date and time.
* Size, Date and Time directory data for any file.
* Erase, Rename, Copy up to 100 different files at one time.
* Copy with rename.
* Copy with easy path access to all drives & subdirectories without typing
    path names!
* Overwrite warning for copying over existing files.
* Interrupt file operations at any time.

Special Functions
-----------------
* Send Printer any special codes for print style changes, special characters,
    line feeds, form feeds, reset, etc.
* Edit or Create Disk Text files with mini-word-processor.
* Typewriter emulation with printer for those quickie jobs like envelopes.
* Switch between two printers (LPT1<-->LPT2) and show which one is active.
* Display all 256 PC/ASCII characters.
* Display all 256 Screen display colors/attributes.
* Change Cursor size- (also restore it if lost).
* Toggle Disk Wiz Sound cues on or off.
* Screen Saver blanks monitor during non-use upon entering Disk Wiz.

Resident Feature: Available with full Disk wiz program package only.
----------------
     All these capabilities are available at the press of the special key
combination from DOS or from within almost any program (Text mode only). A
keystroke then sends Disk Wiz back to memory and returns you to your original
program. The screen and cursor will be just as you left it (unless you changed
the cursor shape deliberately)! In this mode, Disk Wiz needs only a little
over 40K of memory. It can be used as a stand alone, non-resident program as
well.

------------------------------------------------------------------------------
Disk Wiz Shareware Agreement & Registration
------------------------------------------------------------------------------

     As most readers already know, shareware software is NOT free software,
but is a freely distributed version of a program that you get to try out to
see if you like it, before paying for it. If you use the program on a regular
basis, you are obligated to send in the required payment. The shareware
concept will only work if software users pay for the privilege of using these
programs that otherwise would cost much more to distribute through commercial
channels. Since the shareware success stories are few, we decided to release
only part of the Disk Wiz package in this way. This Shareware version of Disk
Wiz consists of a complete copy of the stand alone Disk Wiz version that one
runs from the DOS prompt as an independent program. It is identical in
operation and capabilities to the same stand alone version in the commercial
Disk Wiz product.
     The manual for Disk Wiz included here has been modified to reflect that
the shareware version does not include the memory resident (Pop Up) Disk Wiz,
Customization program, or other utilities you receive when you register for
the full program release (which includes a printed manual). If you have
received any of these additional programs with this shareware version, please
call on our toll free number and let us know- thanks. A "Demo" program is
also included to show visually how to use Disk Wiz.
     The power of Disk Wiz really shows through when it is available at the
press of a key within your other programs or at the DOS prompt without having
to run the program each time. It is usually within a program that you want
easy and complete access to your disk drives and printer. That is exactly what
the memory resident version gives you. To get that power though, you have to
send (or call) in your order for the complete package. You also get the
Customization program that permits you to change the Disk Wiz screen colors,
install your own Printer Control Menu selections, and "Pop Up Hot Key".
     To order your complete Disk Wiz, call Computer Creations at
1-800-654-7684 or (901) 327-9210 and use your credit card, or you can send in
your order to us at 3538 Walker Avenue, Memphis, TN 38111. The cost is only
$25 + $3 postage & handling. Your Disk Wiz will be sent immediately by first
class mail.

------------------------------------------------------------------------------
What does Disk Wiz do?
------------------------------------------------------------------------------

     The list of Disk Wiz features above is complete, but doesn't really tell
you what to do with it. A typical example of using Disk Wiz in real life will
show you what it's all about:

The Situation:
------------- You've been using the same data disk for word processing on your
2 floppy drive system all semester and it is full up with a bunch of files,
about half of which are the backups the word processor creates when you resave
an existing file. You want to clean up the disk, eliminate the backups, throw
away the out-of-date files and separate what's left onto a couple of floppies
organized by subject. The horrible prospect of doing this with DOS or the file
functions built into the word processor is the reason you haven't done it all
along!

The Solution:
------------ You just got a shareware copy of Disk Wiz from a friend who talks
about it like a religious experience. After watching the DEMO program, you run
Disk Wiz from the A> prompt and then replace the Disk Wiz disk with your data
disk. Pressing the "A" key at the "Directory?" prompt, you quickly see most of
the screen fill up with a list of the 70 or so files on the floppy in
ALPHABETICAL order! You observe that a lot of them have "BAK" as a file name
extension, indicating they are the backups of final versions of your
documents.
     You press "Q" to Quick Pick file names and then enter ".BAK" as the
pattern to match. Instantly, all the backups are selected and the highlight
bar is on the last one. You press "Enter" again to finish the list, then "E"
to erase them and confirm your action when Disk Wiz checks to see if you
really want to erase these files. A moment later, the directory is
redisplayed, half its previous size, with all the backups gone. Piece of cake!
     You have a good idea what's in most of the files, but several of the file
names don't ring a bell at all. So using the cursor and Enter keys, you flag
them all and then press "T" for Text functions and the Enter key twice to
select the defaults of "Screen" and "No Line Numbers". Continuing to hold the
Enter key down, the first file scrolls up onto the screen, appearing like it
did in the word processor. Good thing too, because you were using WordStar and
DOS's "TYPE" command displayed a bunch of illegible garbage when you tried it,
and loading each of these into WordStar would take forever.
     After a few lines, you recognize the document and press ESC to skip to
the next one. Repeating this procedure, you quickly see what is in each file
you had in the list. When the directory is redisplayed, all the files are
still flagged. You "Unselect" a couple of them, add a couple more to the list
and press "C" and then "B" to copy them to floppy you put in your B drive.
After a bit of disk activity, you are back to the directory with the list
still intact.
     That was so easy, you decide that now is a good time to start the
practice of making backups of your floppies, so you put another disk in B and
press "C" & "B" again to copy the files a second time. Back at the directory
again, you press "E" to erase the files you copied from the original disk.
When the new directory is displayed, it is considerably smaller.
     Repeating the process of selecting a group of files, copying them and
then deleting them from your data disk, you soon have sorted out the whole
mess- all without ever typing in a single file name or command! Disk Wiz has
also been telling you how much space these files are taking up on your
floppies- you didn't realize that those one line files each required more
space than DOS told you. You also decided to rename some of them so you'd be
able to recognize them better in the future, which Disk Wiz did easily.
     While you're at it, you decide you need a couple of the files printed out
to refer to. It would be nice if you didn't use up all the paper they
originally took when you handed them in. With 2 keys you switch to the Printer
Codes Menu and then select Condensed type with 88 lines per page. 2 more keys
later, you are back at a floppy directory and highlight the file(s) you want
to print. Using the Text & Print options, they are soon appearing on the
printer.
     After that, you want to write a quick note, so you switch to Disk Wiz's
Editor function in Typewriter mode and zip it out without needing to run your
word processor or save it on a floppy first. You press the ESC key and soon
you're back to drab old DOS.
     "Wow!" you say- "This is a great little program!" You realize that it
would be even more wonderful to do this all from within your word processor
or spreadsheet- so you pick up the phone and call in your order for the whole
Disk Wiz program package right away- and then start thinking of all the
people you know who would love to have a copy of the shareware version of
Disk Wiz too!

------------------------------------------------------------------------------
Getting Started:
------------------------------------------------------------------------------

     The first thing you should do with any new program is make a backup copy
of it. Store the original in a safe place and use the copy. Next, we suggest
running the Disk Wiz Demonstration program to familiarize you with Disk Wiz's
capabilities. Do this by entering "DWIZDEMO" from the DOS prompt with the disk
containing the Disk Wiz programs in your floppy drive. It will take about 10
minutes to go through the demonstration.
     To run the Disk Wiz program you enter "DISKWIZ" from the DOS prompt. The
title and copyright screen will appear, at which time you can remove the
floppy disk if desired.
     Disk Wiz has been designed to be as simple to operate as possible for a
program of its power and size. The emphasis has been on small size, retaining
displayed information on the screen and minimizing keystrokes. Size, of
course, is of utmost importance for a memory resident program. We have not
cluttered up the program with fancy border displays, windows and lengthy
descriptive menus. Everything you need to know about the choices at any time
is displayed in easy to read terms.
     If you exclusively use floppies, without the need for subdirectories,
you will not be hindered by Disk Wiz's enhanced hard disk capabilities. On
the other hand, If you have a ton of files and directories on a hard disk,
Disk Wiz will let you access them with unprecedented ease. Enjoy!

------------------------------------------------------------------------------
Disk Wiz Menu & Operation Structure
------------------------------------------------------------------------------

     If you look at the following "map", you will be able to see how to get to
all of Disk Wiz's features. When you are running the program, you will almost
always find the information you need on how to proceed displayed on the
screen, albeit in an abbreviated form to reduce program size. Please look over
this map and refer to it as we elaborate on Disk Wiz's features.

Main Disk Wiz Prompt:
---Directory For Which Drive?    <----------------------------<-------------\
   :    :    :                                                              |
   :    :    :.....F1= Toggle between DIR:"*.*" and user defined            |
   :    :              Directory search.                                    |
   :    :                                                                   |
   :    : "Enter" Key=                                                      |
   :    :.....Special Function Menu                                         |
   :            :                                                           |
   :            :....Printer Codes Menu = "P"                               |
   :            :  :....Preset Menu for Epson type printers                 |
   :            :  :....Send any byte value(s) to printer                   |
   :            :                                                           |
   :            :....Text File Editor = "E"                                 |
   :            :....Typewriter = "T"                                       |
   :            :....Switch printers (LPT1<-->LPT2) = "L"                   |
   :            :....ASCII + Graphic Character set = "C"                    |
   :            :....Screen Display Color Set = "S"                         |
   :            :....Cursor Shape Editor = "U"                              |
   :            :....Turn Disk Wiz Sound Cues On or Off = "O"               |
   :            :....Remove Memory Resident Disk Wiz = "#"                  |
   :            :...."ESC" = return to main prompt --------------->-------->|
   :                                                                        |
   : Drive Letter,ie. "A"                                                   |
   :     or Space Bar for current DOS path                                  |
   :                                                                        |
Directory Display= Alphabetical list of files    <--------<---------------\ |
:  :  :   :   :                                                           | |
:  :  :   :   : "Enter" key while Parent or Subdirectory Highlighted=     | |
:  :  :   :   :....Go to Parent directory or Subdirectory ------->------->| |
:  :  :   :                                                               | |
:  :  :   : "P" key = Path Set                                            | |
:  :  :   :....sets DOS Drive & Path to currently displayed one  ---->--->| |
:  :  :                                                                   | |
:  :  : "X" key = Subdirectory Operations                                 | |
:  :  :....Make & Delete Disk Subdirectories Function      ------->------>| |
:  :                                                                      | |
:  :...."N" key = New drive selection         ------------->--------------->|
:  :                                                                      | |
:  :...."S" key = Start file selection over from scratch    -------->---->| |
:  :                                                                      | |
:  :...."ESC" key = Exit from Disk Wiz        ------->DOS prompt          | |
:                                                                         | |
:....File Selection                                                       | |
   :     :                                                                | |
   :     : Cursor, "Enter" keys                                           | |
   :     :....Move Highlight bar to & Select files to work with           | |
   :     :                                                                | |
   :     : "U" key = Unselect file                                        | |
   :     :....Remove files from Selected file list                        | |
   :     :                                                                | |
   :     : "Q" key = Quick pick                                           | |
   :     :....Rapid selection of all files matching a pattern, ie. ".BAK" | |
   :                                                                      | |
   :...."Enter" Key again on an already selected file = completed list    | |
      :                                                                   | |
      :                                                                   | |
File List Action Menu                                                     | |
:   :   :   :                                                             | |
:   :   :   : "D" key = Directory data display                            | |
:   :   :   :....Display of File Size, Date & Time of Creation, & amount  | |
:   :   :   :     :       of space file will take up on a floppy disk.    | |
:   :   :   :     :..Total of files sizes                                 | |
:   :   :   :                                                             | |
:   :   :   : "R" key = Rename files                                      | |
:   :   :   :....Rename each file on File List, entering a blank name     | |
:   :   :   :           quits this function.                              | |
:   :   :   :                                                             | |
:   :   :   : "V" key = View files                                        | |
:   :   :   :....Displays contents of files (hidden ones too) directly    | |
:   :   :   :           to screen with no conversion of code to text.     | |
:   :   :   :                                                             | |
:   :   :   :."S" key = Start file selection over from beginning with     | |
:   :   :   :           current directory   --------->-------------->---->| |
:   :   :   :                                                             | |
:   :   :   :."N" key = Start over again with a NEW directory  -------->--->|
:   :   :                                                                 |
:   :   : "E" key = Erase files                                           |
:   :   :....Delete files from disk with Yes/No Verification              |
:   :      :                                                              |
:   :      :...."ESC" key = Abort erase files operation    ------->------>|
:   :                                                                     |
:   : "C" key = Copy Files                                                |
:   :............Copy files from current disk/subdirectory                |
:     :    :    :           to another disk or subdirectory               |
:     :    :    :                                                         |
:     :    :    :Drive letter (ie."B")                                    |
:     :    :    :....Copy files directly to that disk drive   ----->----->|
:     :    :    :"P" key                                                  |
:     :    :    :....Copy files directly to printer  ------------->------>|
:     :    :                                                              |
:     :    :..........."Enter" key   = Current Disk Wiz directory path    |
:     :    :       or     :                                               |
:     :    :..Spacebar    :          = Current DOS directory path         |
:     :          :        :                                               |
:     :          :        :                                               |
:     :    Subdirectory/Path Edit Line for copying                        |
:     :    :    :    :                                                    |
:     :    :    :    :Left/Right Cursor keys                              |
:     :    :    :    :....Move Towards & Away from Root Directory         |
:     :    :    :                                                         |
:     :    :    :Up/Down Cursor keys                                      |
:     :    :    :....Select between subdirectories within current one     |
:     :    :                                                              |
:     :    :"Enter" key                                                   |
:     :    :....Start copying to the selected Path  ------------>-------->|
:     :                                                                   |
:     :"ESC" key                                                          |
:     :....Interrupt copying of files immediately! ---------------->----->|
:                                                                         |
:"T" key = Text File Functions                                            |
:.........Display or Print Text Files                                     |
   :   :   :   :                                                          |
   :   :   :   :"S" key = Screen                                          |
   :   :   :   :....Display of text files to screen     ------------>---->|
   :   :   :       :                                                      |
   :   :   :       :..Question: Display file with line numbers?           |
   :   :   :            :...."Y"=Yes.... Question: Start at what line?    |
   :   :   :       File is displayed to screen with all special characters|
   :   :   :          converted to text. (WordStar files made legible!)   |
   :   :   :                                                              |
   :   :   :"E" key = Edit                                                |
   :   :   :........Edit text files in sequence --------->--------------->|
   :   :   :        using mini-word processor.                            |
   :   :   :                                                              |
   :   :   :"P" key = Print                                               |
   :   :   :........Print text files           ----------->-------------->|
   :   :       :..Print Options:                                          |
   :   :         :..Line Numbering?                                       |
   :   :         :..Special program listing                               |
   :   :                                                                  |
   :   :"W" key = Words                                                   |
   :   :....Count Lines, Words, Printable characters in file.  ------>--->|
   :                                                                      |
   :...."ESC" key = interrupt display or printing of current file         |
   :                                                                      |
   :...."END" key = interrupt display or printing of whole file list ---->|

------------------------------------------------------------------------------
Using Disk Wiz
------------------------------------------------------------------------------

     After entering "DISKWIZ" at the DOS prompt, Disk Wiz will load and run
from the disk. You will first see the Title & Copyright display and will need
to press a key to continue with the program. You will then see a brief Disk
Wiz title and copyright notice again with the current Time and Date displayed
as stored in the computer. If you didn't set the internal clock when turning
the computer on, it may be wrong. The Printer that is currently active (LPT1
or LPT2) will also be shown. You will also see the Main Disk Wiz prompt:

            "Directory for ? Drive: "

        This is the point where the Map above starts. There are three general
directions you can go:

    Disk Directory
    -------------- See a disk's directory by pressing a letter (ie. "A") to
    see that drive's directory or the <SPACE> bar to see the current DOS
    Path's directory. No ":" or "Enter" is needed.
        The default directory command retrieves ALL the files in the
    directory. The F1 key is used to toggle (switch) between this "all files"
    mode and one where you can enter any normal DOS DIR wildcard specif-
    ication. For example, normal mode is equal to DIR *.*. A possible
    Alternate Mode specification could be "*.BAT" to retrieve only the batch
    files in that directory. This mode is very useful when the directory
    contains too many (>100) files to fit on the screen at one time. It will
    remain active until you switch it back to "*.*" by pressing F1 again and
    then "Enter" to select the default.

    Special Functions Menu
    ---------------------- Press "Enter" to access the Special Functions Menu
    for the Printer Commands, Editor, Typewriter & non-file functions.

    Quit Disk Wiz
    ------------- Exit to DOS by pressing the <ESC> key. If you had been
    using the Pop-Up version of Disk Wiz, you would return to the other
    program (ie. word processor) that was running before you brought up Disk
    Wiz with the "Hot Key".

     The Escape key "ESC" is very important in Disk Wiz. At almost any time,
pressing it will either interrupt whatever process is underway or exit the
program. With the shareware (stand alone) Disk Wiz, you always have an
opportunity to cancel the "Exit to DOS" and continue running the program.
There are also a few places where Disk Wiz will ask you to press "ESC" before
proceeding. This gives you a chance to digest the screen contents before they
scroll up and away.

------------------------------------------------------------------------------
Directory Display
------------------------------------------------------------------------------

     Copying, renaming, deleting, displaying(viewing) & printing files are the
main reason to use Disk Wiz. Except for renaming files, you will not have to
type in any commands or file names to perform these actions! Being able to do
this in the middle of your word processor or other program brings a level of
convenience to your computer you won't want to work without. File selection
begins at a disk directory, so press the letter of the disk drive you want to
work on. If you have a hard disk, you can press the Spacebar to go straight to
the current DOS path. Disk Wiz will read the directory from that drive,
assuming you have a disk in it.
     We've tried to make Disk Wiz "error-proof"- if you specify a drive that
doesn't exist, or don't have a floppy in it, or the door's open, Disk Wiz will
tell you. NOTE: the timeouts for these errors to be detected varies on
different machines, so be patient, especially if you accidentally try to send
output to a printer that isn't there!
     Normally, the disk directory is sorted and displayed in alphabetical
order, up to 100 files at a time. You have the option to see the actual order
by pressing any key while the directory is being read. At the top of the
display are several pieces of information:
        * The current drive and subdirectory(if any) path.
        * The DIR wildcard mask used to pick the directory entries (*.*=all).
        * The size of the disk.
        * The amount of free space on the disk.
        * The number of file entries (not including "." & ".." entries).
        * The sum of the file sizes.
        * The number of subdirectories.

    There are three different types of files you may see.
        * Normal files have no prefix character in the display.
        * Subdirectories have a diamond prefix character.
        * Hidden files have an 8 pointed asterisk prefix.

     If you are in a subdirectory, the "Parent Directory" has two diamonds in
front of it. Disk Wiz does not use the confusing "." and ".." Parent & current
SubDirectory listings.
     To see the directory of a subdirectory, simply move the cursor bar to
that item and press Enter.
     You can change the "mask" used to select files from the entire disk
directory to a customized one that will display only selected files according
to the DOS DIR wildcard rules. Press F1 at the Directory? prompt or from the
File Selection Menu to enter a new mask. The default (selected by pressing
Enter) is "*.*". This is useful for displaying only a specific type of file
out of a directory with hundreds of entries. Note that subdirectories usually
are excluded from the selection process with a special mask, and you therefore
cannot change directories by merely selecting it from the display. The mask
that is current will remain active until you change it back to the default or
another mask. This is also true with the Pop-Up Disk Wiz after you leave it
and then return later.
     For those of you who do not know about DOS "wildcards" for files: When
you do a directory listing from the DOS prompt with the command "DIR", the
default file mask is "*.*". This matches up any and all files and is equal to
"????????.???". The "*" and "?" are the DOS wildcards. The "?" says: accept
any character in this position including a blank one. The "*" says: accept
any sequence of characters in this position and is shorthand for filling in
all the allowable spaces with "?"s. DOS filenames can be up to 8 characters +
a period + 3 more characters.
   Examples:
      ???.* will match any files with 3 or less characters in the prefix and
      any suffix: ie. TED.DOC or 1.BAT

      *.BAT will pick all files with "BAT" as an extension: ie. AUTOEXEC.BAT

      DW*.DAT will pick all files beginning with "DW" and DAT as a suffix,
      like DW1.DAT or DW123.DAT

------------------------------------------------------------------------------
File Selection
------------------------------------------------------------------------------

     Selecting files to work with is easy. Use the Cursor Keys to move the
highlight bar to the file you want to select. Press "ENTER" to select that
file name. If you select a directory, Disk Wiz will immediately go to that
subdirectory and display it's contents using the same file mask, though you
may not see any subdirectories displayed, depending on the mask. You can
select up to 100 files to work on at one time, including Hidden files.
     You can save time by using "Quick Pick" (press "Q") to automatically
select all the files matching a pattern, such as ".BAK", in one operation.
Just enter the pattern to match at the prompt. If you enter no pattern, Disk
Wiz will select all the files except the hidden ones, which you will have to
do manually.
     You can start the selection process over again by pressing "S". If you
need to Unselect a file from the list, use the "U" key.
     To complete your list and advance to the File Action Menu, cursor to one
of the files you already picked and press "Enter" again. Picking any file
twice signals Disk Wiz to move on.
     If there are more than 100 files to display, you will see a special
option: "<A>dditional Files". You can work on the files presently displayed
and then access the additional ones later with this command or press "A" now
to see the additional files. You can only work on one "page" at a time though.
This is where the special DIR mask comes in handy. By using it to sift through
the whole directory and pick up only certain ones, you can usually pull the
ones you want up all at one time.
     There are other things you can do at this point besides selecting files,
but reduce confusion, we will cover them later.

------------------------------------------------------------------------------
File Action Menu:
------------------------------------------------------------------------------
     Copy, Rename, Erase, View, Directory Info, Text File operations.

     Once you've completed the list of files to work on, you can perform these
DOS and additional operations with them. Simply press the letter indicated by
<>'s in the menu command. While Disk Wiz is performing the selected operation,
you can Interrupt it with the <ESC> key. In the View and Text operations, you
can interrupt the whole file list with the <END> key.
     Disk Wiz keeps the list of files you selected intact so you don't have to
reselect them to do another file operation. The exceptions to this rule are
after erasing or renaming files, which cause the directory to be changed.

Special Notes:

  Erase: You are asked before the erasing begins if you really want to delete
  the files. Pressing "Enter" selects the default of "Yes". Pressing "ESC" at
  this point or during the erasing procedure will stop the procedure and send
  you back to the directory display.

  Rename: Prompts you for the new name of each file and then makes the change
  to the disk directory. Enter a blank name to quit this function without
  changing the file name at the new name prompt.

  View: Displays files directly into the video display memory. This allows you
  to examine programs and other non-text files. The offset into the file is
  displayed at each line in decimal. You can interrupt the display with the
  <ESC> and <END> keys.

  Directory Data: Displays the information about the file in the disk
  directory. This consists of the Date and Time the file was created, and the
  Size of the file in bytes. Disk Wiz supplies additional information on the
  file sizes. In parentheses you will see another size for each file. This
  number is the actual space the file will take up on a floppy disk. Floppy
  disks portion out their space in 512 byte chunks, so a 600 byte file takes
  up 1024 bytes or 1K of space. Disk Wiz also shows you the total of the
  files' sizes in both formats.

  The Text and Copy operations have enough subtopics each to warrant their own
  sections.

------------------------------------------------------------------------------
Text File Operations
------------------------------------------------------------------------------

     Disk Wiz can display, edit, print or derive information from your text
files. Many word processors (ie. WordStar) convert some of the letters in your
text to unreadable form. Disk Wiz will display and print them normally. Some
word processors format the text on the fly and save their files without any
line breaks in the text. These will be displayed, but Disk Wiz has no way to
tell where the lines are supposed to end, so the display may not be exactly
what you expect.
     Disk Wiz converts the files by "stripping" the eighth bits off of each
byte in the file. Form feeds and Tabs are indicated by displaying those words
in the text, rather than forwarding them through.
     Disk Wiz will step through the files you selected, one by one, with
chosen text file function. To skip to the end of the current file, press the
ESC key. To skip to the end of your selected file list, press the END key.

Display to Screen:
     After selecting text operations, the default operation is Screen Display,
selected with the "S" key or simply pressing "Enter". The display can be with
line numbers and if numbering is selected, can start anywhere in the file. You
must hold down a key to scroll the text up the screen.

Edit:
     The Disk Wiz Editor is a sophisticated line editor using many word
processing commands, with WordStar control key compatibility. This Shareware
version of Disk Wiz is limited to editing a 388 line file. You have a 20 line
cut/copy "clipboard area" to recover deleted lines from and copy lines into
for insertion at another point. Due to its smaller data area, the Pop-Up Disk
Wiz has a smaller capacity. The Editor is described in detail below.

Print:
     This is similar to the screen display, except that it is output to the
printer. There is a special listing mode for Epson type dot matrix printers.
It prints the file name in Bold Pica followed by the file in condensed type
with 8 lines per inch, line numbers and form feeds between files. This listing
mode also does no character translation.
     If your file contains graphic characters (box, etc) you may want to use
the "Copy to Printer" feature of the Copy Files function. These characters, as
well as many special symbols, have values above 127 and would be changed by
the Text Print function.

------------------------------------------------------------------------------
Copying Files
------------------------------------------------------------------------------

     To simply copy to another disk drive, just press the letter for it (ie.
"B") after selecting the Copy option from the File Action Menu.
     If you want to copy to a subdirectory, press "Enter" or the Spacebar.
This will drop you into the "Edit Path" line. Either the Disk Wiz path or the
current DOS path will be displayed depending on which you pressed. You can use
the cursor keys now to select the path to copy to. Cursor left to back up the
path all the way to a different drive if desired. Cursor right to display the
next subdirectories available along the path. When a list is displayed, use
the up/down cursor keys to select the desired one. When the full desired path
is displayed on the Path Specification line, press <ENTER> to start copying to
that path. If you want a different subdirectory within the current parent
directory, back up to the parent and then cursor right to display the child
list. This isn't as complicated as it sounds. Once you try it, you will find
this method to be fast and intuitive.
     If all you use are floppies, and you don't understand this subdirectory
talk, don't worry about it. All you need to do is press the drive letter at
the "Copy to:" prompt!
     If you try to copy over an existing file of the same name, Disk Wiz will
beep and ask you for permission to overwrite it. The default (Enter key) is to
overwrite. You also have the option to rename it, which you always get if
copying only one file.
     You can Halt the copying process at any time with the <ESC> key, though
this may leave you with a partial copy on the target disk. Disk Wiz will warn
you if this happens.
     You can copy a file and rename the copy at the same time by selecting
only one file at a time. If you are copying several files and select "Rename"
instead of overwrite for any existing file, you will be prompted for a new
name on each of the remaining files on the selected file list.
     You can copy files directly to the Printer by pressing "P" at the "Copy
to:" prompt. In this way, you can print out a file without any of the
conversion that the Text Print Function performs. This is useful for sending
the printer a long sequence of codes instead of using the Printer Codes Menu.
This file can be created with the TEXT2BYT program included with the full
Diskwiz package.

------------------------------------------------------------------------------
Making & Removing Subdirectories
------------------------------------------------------------------------------

     One of the key functions we skipped at the File Selection Menu is "X" for
Disk Wiz's Subdirectory functions. When entering the name of a subdirectory to
create, remember that you are limited to normal DOS file names.
     Also, you cannot delete a subdirectory while it is the active DOS
directory or if it has files in it. Refer to the DOS manual for more
information on subdirectories.

------------------------------------------------------------------------------
Setting DOS Drive & Path
------------------------------------------------------------------------------

     The other skipped function at the File Selection Menu is the Path
command. Pressing "P" will change the active (default) DOS drive and path
specification to that of the currently displayed directory. When you exit to
DOS (or your "surface" program if using the Pop-Up DiskWiz), you will find the
new path set. This is an easy way to move to a subdirectory deep in the hard
disk without typing in the whole "CD" command line.

------------------------------------------------------------------------------
Special Functions
------------------------------------------------------------------------------

     Disk Wiz has several Special Functions, accessed by pressing <ENTER> at
the "Directory for ? Drive:" prompt. These are:

Printer Commands
----------------
     The Printer Code Menu is a list of 19 preset 5-byte instructions can be
sent to your printer by pressing the appropriate menu key. Normally, this
would have to be done through a word processing program, if even possible
then. These commands can be a simple as a form feed or printer reset, to as
complicated as setting a different print style and line spacing.
     Disk Wiz comes with a set of Epson dot matrix codes. The abbreviations
used in the menu list are:

      FF/LF: Formfeed/Linefeed   Cnd: Condensed          Exp: Doublewide
      Micro: Superscript & condensed (tiny print)        Mic: Micro
      Emp: Emphasized            Und: Underlined         LPI: Lines per inch
      +: turn it on              -: turn it off          Ital: Italics

     The "ESC" key exits the Printer Menu prompt, but you must enter a blank
line to quit the special codes prompt.
     Note that you can change these menu selections for your printer if you
have the customization program that comes with the full Disk Wiz package.
Also note that some programs, such as PC-Write, will completely reset the
printer before sending the document to it, though a work-around can usually be
found with a little trial and error.
     The last menu selection is for special codes not listed in the menu. Disk
Wiz makes it very easy to send a whole string of commands. You can almost copy
them directly from your printer manual. Normally, a printer instruction
consists of several bytes (a number from 0 to 255). For example, turning on
underlining might be 27,95,1. Usually though, the printer manual lists the
byte sequence as a combination of numbers and letters. Disk Wiz lets you type
in byte numbers, hexadecimal numbers and characters all on the same line and
converts them to the bytes required by your printer.

    The procedure is simple, once you understand the "rules":
         1. Commands are entered as lines of text. Several commands can be on
         each line.
         2. Each entry in the line MUST be 3 characters long separated by a
         space.
         3. Decimal numbers require no prefix, but must have the leading zeros
         required to make them 3 characters long, ie. 000 001 027 123 255.
         4. Hex values are prefixed with a "$" (dollar) sign, ie. $07 $FF $1a
         5. Letters, number & punctuation characters must be sandwiched, one
         at a time, between quotes ("), ie. "A" "0" "."

     Disk Wiz will check the line for errors before sending anything to the
printer, and will point out where the problem is. To get out of this function
you must enter a blank line (not escape).

Example: 015 027 "S" 000 027 "3" 015
         This turns on condensed print, then turns on superscript, then sets
line spacing to 14 lines per inch for a really tiny printed output on Epson
compatible dot matrix printers.

Characters
----------
     Disk Wiz will display all 256 characters that your computer is capable of
displaying. The first 128 of these are known as the ASCII character set, the
remainder are the special IBM character set. The first 31 ASCII characters are
normally special purpose codes such as #12 for form feed, #13 for carriage
return, #10 for line feed, #7 for bell, etc. They appear as characters on the
screen since your computer has a full 256 character set for display purposes,
though 0 and 255 normally don't display anything. You can find the value for
any character by adding the row and column values together at the character
location.

Screen Colors
-------------
     Depending on the display adaptor and monitor (screen) type, your computer
can display up to 256 different foreground and background color combinations
for text display. Color is put on the screen by placing the value of the color
combination (including blinking and intensity) in the attribute byte for the
specific letter position on the screen. The values for a color in this
function is obtained by adding the row and column values.

Typewriter
----------
     Disk Wiz will let you use your computer and printer just like a
typewriter, except better! The printer doesn't receive anything until you
finish editing the document and send it. You can even print multiple copies.
The Typewriter function uses the same editor as the Disk Wiz File Editor,
described in detail further on.
     When your page looks the way you want it, press the ESC key to exit the
Editor. You will be asked whether to send the page to the printer. You can
also go back to editing.
     After printing is completed you will be prompted to print it again or
re-edit it if you like. This function is perfect for whipping out an envelope
or quick note when you don't want to quit what you're doing and load your word
processor. You can even do a manual mail merge by re-editing in a new address
and printing out the document again.

Disk File Editor
----------------
     You can make or edit existing text files, such as DOS batch files, with
Disk Wiz's Mini-Word Processor. The function is the same as the Typewriter
except you are prompted for the name of the file before starting the editing.
Usually, you will enter the Editor for an existing file through the Text File
Operations function after selecting it out of the directory display. That way,
you don't have to type in the file name or path. Selecting the Editor through
the Special Functions menu allows you to create new files.
     If you try to edit an existing file that is too big for the data area in
Disk Wiz, you will get a warning. You can then proceed with as much of the
file as will fit in.
     Note: when making "Batch Files" (list of DOS commands), you sometimes
want to have the last line finish without a carriage return (CR). Disk Wiz's
Editor will do this if you make that line the last line of the file.
    Again, when you are done editing the document, press the ESC key to get to
the "Save/Print File?" prompt. As in typewriter mode, you can print, re-edit,
and print again if you like, and actually never even save the file.

Switch printers
---------------
     If you have two parallel ports (printer ports) and two printers or
devices hooked up to them, you can use Disk Wiz to switch the output between
them. These printers are called LPT1 and LPT2. This is very useful for
outputting draft copy or graphics on a dot matrix printer and then switching
to a daisy wheel printer for final copy.
     Of course, this assumes your printed output would be normally going to
LPT1. If you change your word processor to print to LPT2, and then use Disk
Wiz to swap LPT1 & LPT2, you'll print on 1. You can always see which printer
is going to receive output at the "Directory for ? Drive" prompt, which will
display "Printer 1" or 2.
     Disk Wiz does its best to figure out which printer is 1 or 2 when you
first run the program. This means that if you run once, switch printers, exit
and then run it again, you will find the correct display. If your computer
does not follow the standard LPT addressing, you may find 1 & 2 switched in
the display, but it will be consistently so.

Change Cursor
-------------
     Disk Wiz allows you to change the cursor appearance for Disk Wiz and the
program from which you invoked it. You can restore the cursor if you lose it
from another program as well! Note that some programs (notably BASIC) reset
the cursor with every keystroke, so using Disk Wiz to change the cursor will
not help within that program, but will be invaluable for restoring it after
running the program!
     Note that when you enter Disk Wiz, you'll always get a cursor. When you
exit Disk Wiz, the cursor is normally restored to the way it was before,
unless you specifically use the Change Cursor option. So don't be confused by
seeing a cursor in Disk Wiz and having it disappear when you exit.

Sound Toggle
------------
     This function turns the sound cues (beeps) of Disk Wiz on or off for
silent operation.

Screen Saver
------------
     This feature extends the life of your monitor(screen) by filling it with
black spaces after 30 seconds of not using Disk Wiz. This ONLY occurs when you
first run Disk Wiz (or call it up with the Hot Key in the Pop-Up version) and
don't reply to the "Directory for ? Drive" prompt. Pressing any key will bring
back the screen. Because Disk Wiz's screen saver feature works by filling the
screen with black spaces instead of using a hardware setting, it will work
with any monitor!

------------------------------------------------------------------------------
Disk Wiz Editor
------------------------------------------------------------------------------

     The Editor built into Disk Wiz may well be the nicest little line editor
you've ever used. "Line Editor" means that you work on one line at a time
without any word-wrapping (you can't type past the end of a line). Except for
that limitation, you have an excellent set of word processing functions,
including copying lines, moving lines, recovery of accidentally deleted lines,
and extended cursor movement functions. To top it off, almost all of the
WordStar cursor, deletion and insertion keys work with Disk Wiz's Editor.
     You are limited to a maximum of 388 lines of 79 characters each with the
shareware and stand-alone Disk Wiz versions. The Pop-Up version has 60 lines,
enough for a full page of text. The cut & paste area is 20 lines (4 lines in
Pop-Up Disk Wiz).
     The Editor is always in "Insert" mode. This means that what ever you type
in is inserted into the line at the cursor position, and does not overwrite
what was already there. Whenever a line becomes longer than 70 characters, you
will hear a short beep reminding you that the end is near.

Cursor Movement
---------------
     The following keys and Control key combinations move the cursor through
your text file. A Control key combination means to press the Ctrl key down and
then press the second key in the combination. This is written as "^" + the
key. For example, ^T is Ctrl+T and deletes a word to the right of the cursor.

  * Cursor keys move the cursor left or right along the line or up and down the page.
  The corresponding WordStar keys are ^S, ^D, ^E, ^X.
  * PageUp (or ^R) and PageDown (or ^C) keys move the text up or down 21
  lines at a time.
  * Home and End keys move the cursor to the beginning and end of lines.
  * Control + Cursor Right or Left move one word at a time along a line. ^F
  and ^A are the WordStar equivalents.
  * TAB: On a blank line the Tab key moves the cursor to the next increment of
  8 spaces from the left edge. Since you are actually inserted the necessary
  number of spaces to do this, any text on the line will be moved to the right
  as well.
  * ENTER: The Enter key drops the cursor down to the next line, and "starts"
  a new one if at the end of the file.

Inserting, Deleting, Copying Text
---------------------------------
     The Editor has a special area where it keeps a copy of deleted lines. If
you accidentally delete a line with the "delete line key" you can recover it
from this area. You can also copy lines into this Cut & Paste area and recover
them as well. This gives you the ability to move lines from one part of the
file to another or to repeat lines from one part to another. The INSERT key is
the one that recovers these lines back into the file, inserting them between
existing lines. The Cut & Paste area is 20 lines with this Shareware Disk Wiz.
Note that you can't recover text deleted with the Delete or Backspace keys
which erase characters one at a time, either at the cursor or to its left.

  * Delete lines with Alt + "D" or ^Y at the cursor position.
  * Insert lines with Alt + "I" or ^N. A blank line will appear above the
  current line and the cursor will be moved to the beginning of it.
  * Copy lines to the Cut & Paste area with Alt + "C". You'll see the line
  disappear momentarily and then reappear to let you know you actually did
  something.
  * Insert lines from the C & P area with the Ins key.
  * Erase a word at a time with the ^T key.

Editor File Format
------------------
     Disk Wiz's Editor is a straight ASCII editor. It expects only normal
characters and standard linefeed/CR's and does not do any conversion when
reading in a file to edit. You can convert files to this format with the
utility included with the complete Disk Wiz package. Alternatively, you can
use Disk Wiz to print out a file (which does some conversion) and capture it
with a print spooler.

------------------------------------------------------------------------------
Error Messages
------------------------------------------------------------------------------

     The following are the meanings of some error message numbers which you
might get under unusual circumstances. Normal error messages are displayed in
Disk Wiz's operation.

  1. File does not exist.
  2, 3, 4. File not open.
  32. Operation not allowed on logical device.
  34. Operation not allowed on standard file.
  145, 153. Unexpected end of file.
  240. Disk full.
  241. Directory full.
  243. Too many open files. (Put Files=20 in Config.Sys).
  255. File Disappeared.
  256. Disk write protected.
  768, 2816, 3072. Device not ready.
  1280, 1792, 2048, 2304. Bad disk or drive.


              Thank You for using our Shareware Disk Wiz version!
              I hope you enjoy it and will order the full package.
                                       -Ted Wood, Disk Wiz author.

END OF DOCUMENTATION.

```
{% endraw %}

## FILE1257.TXT

{% raw %}
```
Disk No: 1257
Program Title:  DISKWIZ version 1.31
PC-SIG version 1.1

DISKWIZ is a file manager for both floppy and hard disks, a printer
setup utility program, and other useful things, too.

Using a command station in pop-up windows, you can use simple control
keys to perform a variety of functions better than with DOS alone, and a
whole lot faster and easier.

DISKWIZ displays file names (hidden and subdirectories too!) on any
disk in alphabetical order, as well as disk size, free space, and number
of entries; allows you to see any subdirectory or parent (root)
directory with a single keypress; and provides easy file selection by
highlighting with cursor keys--no typing of names!

You may select up to 100 files matching a pattern (i.e., ".BAK") to work
on at a time; view any file's contents on screen, including program &
hidden files; display text files on screen with or without line numbers;
make WordStar files legible; print text files with or without line
numbers; condense printing with Epson type dot matrix printers; and find
out word count, printable character count and line count for text files.

DISKWIZ also lets you send your printer any special codes for print
style changes, special characters, line feeds, form feeds, reset, etc.;
typewriter emulation with printer for those quickie jobs like envelopes;
switch between two printers (LPT1 and LPT2) and show which one is
active; display all 256 PC/ASCII characters; display all 256 screen
display colors/attributes; change cursor size (also restore it, if
lost); and, a screen saver blanks monitor during non-use.

A marvelous feature of the program is an interactive tutorial
demonstration which leads you through the use of the program with lively
sound effects and graphics.

Usage:  Disk Management and Printer Control.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $5.00

File Descriptions:

DISKWIZ  ARC  Arcived file containing files below (backup).
DISKWIZ  COM  Main program.
DWIZDEMO COM  Demo program for DISKWIZ.
DWMANUAL DOC  Instruction manual for DISKWIZ.
README   DOC  Small introduction file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk No 1257  DISKWIZ version 1.31 >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             DISKWIZ (press enter)                                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
                              Computer Creations
                              3538 Walker Avenue
                              Memphis, TN 38111

                                                         February, 1988

      Dear Shareware User,

      I have spent two years perfecting the most convenient, versatile,
      and economical disk and printer manager on the market. It's called
      Disk Wiz, and I'd like to share it with you.

      Disk Wiz's major feature is that it loads into RAM and remains in
      the background until called up at the touch of a key to allow you
      to use it without having to exit the program you're working in. For
      instance, if you're speadsheeting, Disk Wiz's pop-up feature lets
      you jump out of the spreadsheet into Disk Wiz to pull up a letter
      containing figures needed in the spreadsheet, print the letter out
      or view it on the screen, and then go back to the spreadsheet to
      insert the numbers. Disk Wiz returns you to your exact place in the
      original program. All in a matter of seconds.

      Disk Wiz is far superior to similar programs. It performs more
      functions, uses less memory, and costs less money. Disk Wiz is also
      easier to learn and simpler to operate.

      Disk Wiz works on IBM(R) and compatible computers using PC or MS
      DOS 2.0 or higher. There are 2 versions of Disk Wiz on every
      distribution disk to accomodate different hardware. Plus, there is
      even a non-memory resident version for those with small memories or
      not-so-compatibles. Also, Disk Wiz can be customized for the
      Invoking Keys combination, Screen colors, and Special Printer Codes
      menu.

      Disk Wiz has many, many desirable features.

      * It takes the hassle out of managing hard-disk files and floppies.

      * It eliminates typing file names and commands over and over.

      * It has a printer control feature that allows users to switch
        printers and to send special printer codes such as letter quality,
        condensed print, smaller line spacing, etc.

      * It has a versatile editor and typewriter mode for quick notes and
        envelopes.

      * It use less than 43K of memory. (Similar programs usually use
        twice as much!)

      * It saves time and frustration every day.

      * And much, much more.

      You'll be glad to know that the Disk Wiz Shareware manual is a
      straight ASCII text file. There are no tabs, formfeeds, graphic
      characters or extra blank lines. You can load it into any word
      processor and read it or print it out in any fashion you see fit.

      A 15-minute tutorial program called DWIZDEMO will take you through
      Disk Wiz and teach you enough to use it without referring to the
      manual for most operations.

      For only $5, you can order a Shareware copy of Disk Wiz direct from
      me without risk of viruses or trojans. In the Shareware Version,
      the program's pop-up is not included for obvious reasons. However,
      this will not prevent you from fully appreciating Disk Wiz as a
      stand alone program.

      I know that when you see how many times a day you use Disk Wiz as a
      stand alone program, you will want the convenience of having it as
      a Pop-Up program, available at the press of a key. Of course, when
      you order the whole Disk Wiz package, you get the invaluable
      Customization program and other useful utilities, as well as an
      easy-to-read printed manual.

      Disk Wiz regularly sells for only $25, plus $3 for postage and
      handling. It may well be the biggest bargain in computer software.
      Disk Wiz has been favorably reviewed by Sally Price in InfoWorld
      and by Herb Friedman in Hands-On Electronics. In June of 1987,
      InfoWorld had this to say about Disk Wiz: "Versatility, power &
      simplicity come wrapped in RAM...Valuable utility for business and
      home." Hands-On Electronics, which featured Disk Wiz twice, called
      it a "lovely program that sneaks up on you...finally...you can't do
      without it." We know you'll think as highly of Disk Wiz as the
      experts do.

      To order the complete Disk Wiz package, call 1-800-654-7684 and
      charge it to your VISA or MasterCard. Or order by mail and send a
      personal check. Either way, we'll ship immediately. We won't wait
      for the check to clear. (Sorry, no purchase orders or COD's.) You
      can't lose. Disk Wiz is fully guaranteed. If you're not completely
      satisfied, simply return the manual and registration card within 30
      days for a full refund. Erase the disk and keep it for your
      trouble.

      Please remember that a tremendous amount of effort and money goes
      into developing a software program. And no one gets rich from
      selling programs through the shareware plan. If you like the
      program and continue to use it, you are obligated to pay the full
      price.

      If you have any questions, please call me personally during regular
      business hours at 901-327-9210.

      Sincerely,

      Ted Wood
      President
      Computer Creations

      P.S. I'm frantically interested in BUGS! A free Disk Wiz to the
      first report of any bug found (with the bug fixed, of course.)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1257

     Volume in drive A has no label
     Directory of A:\

    DISKWIZ  ARC     83573   2-14-89  12:00a
    DISKWIZ  COM     35926   2-14-89  12:00a
    DWIZDEMO COM     39096   7-29-88  12:00a
    DWMANUAL DOC     56019   7-29-88  12:00a
    FILE1257 TXT      2296   2-27-89   4:27p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   2-24-89  12:57p
    MANUAL   BAT       147   1-19-89   9:21a
    README   DOC      5446   2-14-89  12:00a
            9 file(s)     223543 bytes
                           93184 bytes free
