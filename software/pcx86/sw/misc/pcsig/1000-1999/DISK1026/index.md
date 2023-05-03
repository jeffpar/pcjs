---
layout: page
title: "PC-SIG Diskette Library (Disk #1026)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1026/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1026"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDDY AND TPOP"

    EDDY (EDit DirectorY) lets you edit the elements of a directory entry.
    These are filename, date, time, and file attributes.
    
    The program has commands to copy and move a file, as well as delete
    and/or destroy a file (or files). Additional commands let you view the
    contents of a file, and patch the data. A provision is made for
    viewing the directory in hex or text, as well as a "bit-stripping"
    feature that translates WordStar into ASCII files.
    
    A single keystroke inserts the current date and time into any directory
    entry.  Changes made to directory entries are not written to disk until
    you choose to do so. Also provided is an undo function. EDDY has
    extensive help, available at any time.
    
    TPOP is a memory-resident printer utility to use with any application.
    TPOP lets you use your printer directly as a typewriter or you can edit
    a full screen of text.  While editing, you can mark blocks of text to
    send to the printer.
    
    The left margin of the text is located wherever the print head is
    positioned before printing and lets you line up the printer for
    envelopes and labels.  Control codes can be sent to the printer.  You
    can direct the output from TPOP to any port (parallel or serial --
    LPT1, LPT2, COM1, or COM2), and you can permanently swap the addresses
    of printer ports.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDDY.DOC

{% raw %}
```
EDDY 4.02 User's Manual               Copyright (C) 1987,88,89 by John Scofield











				     EDDY




				 USER'S MANUAL










		       |-------------------------------|
		       |     EDDY (TM) version 4.02    |
		       |   File and Directory Editor   |
		       |    Copyright (C) 1987,1988    |
		       |	by John Scofield       |
		       |      All rights reserved      |
		       |  * User Supported Software *  |
		       |-------------------------------|













		   This program is supplied as-is. The author
		   disclaims all warranties, expressed or im-
		   plied, including, without limitation, the
		   warranties of merchantability and the war-
		   ranties of fitness for any purpose. Copies
		   of this program may not be sold for more
		   than the cost of the medium on which they
		   are copied, plus reasonable handling char-
		   ges. The total price may not exceed $10.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   i





			     TABLE OF CONTENTS


1.  What Does EDDY Do? ..............................................  1
    1.1 EDDY is Ready if You Are ....................................  1
    1.2 EDDY's Display ..............................................  2
	1.2.1 Sequence & Sorting ....................................  3
	1.2.2 Number of Files .......................................  4
	1.2.3 File Sizes & Disk Capacity ............................  4
	1.2.4 Playing With RAM ......................................  5
    1.3 An Overview .................................................  5
    1.4 What EDDY Doesn't Do ........................................  6
    1.5 Gee Whiz! Can EDDY Do That? .................................  6

2.  Keyboard Usage Summary ..........................................  8
    2.1 Moving the Cursor ...........................................  8
    2.2 Commands ....................................................  9

3.  EDDY's DOS Command Line ......................................... 11
    3.1 Path Specifications ......................................... 11
    3.2 Options ..................................................... 12
	3.2.1 Letter Options ........................................ 12
	3.2.2 Number Options ........................................ 13
    3.3 Other Command Line Parameters ............................... 14

4.  Editing Directory Entries ....................................... 14
    4.1 Selecting a File ............................................ 15
    4.2 Renaming Files .............................................. 15
    4.3 Changing Date and Time ...................................... 16
    4.4 Changing File Attributes .................................... 16

5.  Moving to a New Directory ....................................... 17
    5.1 Working Directory - <A-w> ................................... 17
    5.2 Target Directory - <A-t> .................................... 18
    5.3 Exchange Working & Target Directories - <A-x> ............... 19
    5.4 Where's That File? - Option /W and <^w> ..................... 19
    5.5 What d'ya mean, "Too big"? .................................. 20

6.  HELP Command - <F1> ............................................. 21

7.  UNDO Command - <F2>, <^F2> ...................................... 21

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  ii



8.  LOOK Command - <F3>, <^F3> ...................................... 22
    8.1 LOOK at Subdirectory ........................................ 22
    8.2 LOOK at File Contents (in Working Directory) ................ 23
	8.2.1 Text Format Display ................................... 23
	8.2.2 Text Format Commands .................................. 24
	    a. TAB Expansion - <0> thru <8> ......................... 24
	    b. Bit-stripping - <b> .................................. 24
	    c. Ruler Line Display - <r> ............................. 25
	    d. Jump to New Line - <j> ............................... 25
	    e. Line Wrapping - <l> .................................. 25
	8.2.3 Hex Format Display .................................... 26
	8.2.4 Hex Format Commands ................................... 27
	    a. Printability - <p> ................................... 27
	    b. Jump to New File Offset - <j> ........................ 27
    8.3 LOOK at File Contents (in Target Directory) - <A-F3> ........ 28
    8.4 LOOK at RAM (or ROM, or ???) ................................ 28

9.  PATCH Command - <F4>, <^F4> ..................................... 29
    9.1 Changing a File's Length .................................... 29
	9.1.1 Appending Bytes to a File - <A-z> ..................... 29
	9.1.2 Deleting Bytes From a File - <A-y> .................... 30
    9.2 Updating in PATCH - <Enter> or <^Enter> ..................... 30
    9.3 PATCHing RAM ................................................ 30

10. COPY Command - <F5>, <^F5> ...................................... 31
    10.1 COPY/MOVE Controls ......................................... 32
    10.2 COPY/MOVE Confirmation...................................... 33
    10.3 COPYing Files With Disk Errors ............................. 34
    10.4 COPYing RAM ................................................ 34

11. MOVE Command - <F6>, <^F6> ...................................... 34

12. DELETE Command - <F7>, <^F7> .................................... 35
    12.1 Logical DELETE (Ignore) - <A-F7> ........................... 35

13. DESTROY Command - <F8>, <^F8> ................................... 36

14. DOS Gateway - <F9> .............................................. 37

15. QUIT Command - <F10> ............................................ 38
    15.1 Exit Directory - <S-F10>, <A-F10> .......................... 38
    15.2 EGA and VGA Display Control ................................ 38

16. FIND String - <A-f>, <f> ........................................ 39
    16.1 Entering New FIND Strings .................................. 40
    16.2 Global Match Character - <A-g> ............................. 41
    16.3 "Don't Match" Attribute - <A-m> ............................ 41
    16.4 Search for FIND String in All Files - <^f> ................. 42
    16.5 FIND String in RAM ......................................... 42

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page iii



17. File Selection by Filtering ..................................... 43
    17.1 Filtering by Attribute ..................................... 43
	 17.1.1 Attribute Selection from the Command Line ........... 43
	 17.1.2 Attribute Selection in EDDY - <A-a> ................. 43
    17.2 Filtering by Timestamp...................................... 44
	 17.2.1 Timestamp Selection from the Command Line ........... 44
	 17.2.2 Timestamp Selection in EDDY - <A-b> ................. 45

18. VOLUME Labelling - <A-v> ........................................ 45

19. UPDATE Mode - <Enter>, <^Enter> ................................. 46
    19.1 Applying Changes ........................................... 46
    19.2 Target Capacity Check ...................................... 47
    19.3 Error Recovery ............................................. 48

20. What Annoys Me Most About EDDY Is: .............................. 49
    20.1 The Colors Are Awful ....................................... 49
    20.2 I Can't Even Read the Screen! .............................. 50
    20.3 EDDY Shouldn't Mess With the Cursor ........................ 50
    20.4 The Default HELP Screen .................................... 50
    20.5 The Default Option Settings Are All Wrong .................. 50
    20.6 I Don't Like the Directory Sort Sequence ................... 51
	 20.6.1 Why Does EDDY Start in Name Sequence? ............... 51
	 20.6.2 Timestamp Filtering Shouldn't Change the Sequence ... 51
    20.7 <Esc> Should QUIT From EDIT Mode ........................... 51
    20.8 EDDY Doesn't Know How Many Lines My Monitor Has ............ 51
    20.9 Scrolling is Too Fast (Slow?) .............................. 52
    20.10 LOOK Mode Formatting Commands Need Work ................... 52
    20.11 <Tab> is a Lousy Choice for the Hex/ASCII Toggle .......... 52
    20.12 Holding Down <F10> Doesn't Work ........................... 53
    20.13 I'd Rather Use '/' Instead of <A-f> for FIND .............. 53
    20.14 Anything But "#" for Error Recovery, Please ............... 53

21. Distribution and Support ........................................ 54
    21.1 EDDY is NOT Free! .......................................... 54
    21.2 Technical Support .......................................... 55

Appendix 1 - Command Reference ...................................... 56
Appendix 2 - Screen Attributes ...................................... 58

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   1



1. What Does EDDY Do?

EDDY (for EDit DirectorY) is a full-screen directory editor and general purpose
disk utility which provides the following services:

   - EDIT directory entries, including name, date, time and attributes of files
   - Sort directory display by file name, extension, size or date/time
   - COPY, MOVE, DELETE and/or DESTROY files
   - LOOK at or PATCH data in files - or in RAM
   - FIND strings of data in files - or in RAM
   - Locates files anywhere on your disk, by name (with wildcards), by
	file attributes, and/or by file timestamp

Most of what EDDY does isn't new (see Section 1.5 for the new stuff); EDDY was
developed as a test of the "Build a better mousetrap..." theory of economics.
EDDY is offered as a tool which is felt to be easier and more convenient to use
than other programs which provide similar capabilities.  EDDY is also cheaper.

EDDY is not in the public domain; EDDY is "user-supported" software.  Distri-
bution and use of EDDY is subject to the conditions given in Section 21.1.

EDDY's revision history, summarizing the features and enhancements in this and
earlier versions, is available in the file "EDDY.HST".


1.1 EDDY is Ready if You Are

EDDY needs the following hardware and software:

     IBM PC, XT, AT or close compatible
     A monitor that can accommodate 25x80 text mode display
     At least 75K of available memory
     PC- or MS-DOS level 2.0 or later

If you have those, EDDY is ready to go to work for you.  If you have more
memory, EDDY can handle more files and use bigger buffers for faster file I/O.
EDDY will use up to 144K of memory if it's available.  If your monitor can
handle more than 25 lines, so can EDDY (up to a maximum of 66 lines).

The simplest way to get familiar with EDDY is to just type "EDDY" and <Enter>.
EDDY has extensive HELP facilities, which may always be called on by pressing
<F1>.  HELP includes all of the basic information needed to use EDDY.

There is no danger of damage to your disk data, because no changes will be made
to any of your directories or files unless you explicitly tell EDDY to do so.

If you see the message "Need video in 80 column text mode", you must use the
DOS MODE command to change to text mode by entering "mode co80" or "mode bw80".


NOTE:

If EDDY's display is blurred, unreadable, or strange-looking, see Section 20.2
of this document.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   2



1.2 EDDY's Display

EDDY's basic display is similar to that of the MS-DOS "DIR" command. This is a
sample of a typical EDDY display, which might have resulted from entering the
command "EDDY A:"

================================================================================
filename.ext	size   date	time	RHSDA				       
DIR of A:\*.*
Volume in drive A is EDDY	     109 files, 308224 bytes	 2048 bytes free

BAT	     <DIR>    2/04/87  9:15:04p nnnyn
EDDY	     <DIR>    1/25/87 12:52:12p nnnyn
AUTOEXEC BAT	 788 10/21/86 11:30:10a nnnny
CMDSUB	 ASM   12856  9/17/86  7:45:26p nnnny
CMDSUB	 OBJ	1246  9/17/86  7:52:38p nnnny
COMMAND  COM   22885 11/26/85 10:22:08p nnnny
CONFIG	 SYS	  79 10/18/86  7:31:12p nnnnn
CONVRT	 ASM	5927  9/06/86 11:15:16a nnnnn
CONVRT	 OBJ	 499  9/06/86 11:20:52a nnnnn
ERROUT	 ASM	5663  9/15/86  8:15:24p nnnnn
ERROUT	 OBJ	2127  9/15/86  8:16:12p nnnnn
MIO	 SYS	9054 11/18/85 12:00:00p yyyny
MSDOS	 SYS   27856 11/18/85 12:00:00p yyyny
PRINT	 COM	8339 11/18/85 12:00:00p nnnnn
PSP	 DEF	1195  1/29/87  7:21:04p nnnny
UTLSUB	 ASM   10649  2/09/87  1:49:34a nnnny
UTLSUB	 OBJ	 965  2/09/87  1:50:32a nnnny
VDISK	 SYS	2721 11/18/85 12:00:00p nnnnn
WOMBAT	 EXE   80201  1/02/83  9:00:46a nnnnn

-EDIT- seq=N  <Enter> to UPDATE  F1:HELP F2:UNDO F3:LOOK F5:COPY F7:DEL F10:QUIT
================================================================================

				   Figure 1-1

The major differences between EDDY's display and DIR's display are:
    1) EDDY displays directory information for all (including hidden) files
    2) the "seconds" part of the timestamp is shown
    3) file attribute bit settings are included in the display
    4) the display may be sorted or unsorted (initially sorted by file name)
    5) only a page at a time is shown, and you may scroll forward and backward
	   in the display as desired.

You may notice that all the "seconds" displayed are even numbers.  This is not
a bug in EDDY.	It is because DOS stores "seconds / 2" (only 5 bits allocated
in the directory entry), and so any odd seconds are dropped.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   3



1.2.1 Sequence & Sorting

EDDY's starting display is sorted by file name.  The sequence is indicated on
the last line of the display.  In Figure 1-1 the last line shows the notation
"seq=N".  This indicates sorting by NAME.  Possible values of "seq" are:

     "D" - sorted by DATE, time, name & extension
     "E" - sorted by EXTENSION & name
     "H" - sorted by HOUR & minute
     "N" - sorted by NAME & extension
     "S" - sorted by SIZE, name & extension
     "U" - UNSORTED; i.e., in the sequence stored in the directory by DOS

EDDY builds the first display in name sequence.  If you would prefer a differ-
ent initial sequence, refer to Section 20.6 for information on tailoring EDDY's
default sort sequence.	You may also change the initial sequence by using
option /1 on the command line (see Section 3.2.2).

To change the sequence, press <A-d>, <A-e>, <A-h>, <A-n>, <A-s> or <A-u>.  The
directory will be processed again to present a display sorted in the new (or
same) sequence requested, and the "seq" field on the bottom line will be
changed accordingly.

Subdirectories are an exception to the sequences just described:  except for
UNSORTED sequence, all subdirectories are grouped at the top of the display,
before any file entries.  This is to make it easier to move around the disk,
from subdirectory to subdirectory, using the LOOK command (see Section 8.1).

To invert the order of the display (e.g., to get the files with the most recent
dates at the top), press <A-i>.  When the display is inverted, an up-and-down
arrow appears just to the right of the "seq" field.  Inverting affects the
entire list; when the display is inverted, subdirectories appear at the end.

Once the display has been inverted, it remains that way until <A-i> is pressed
again; <A-i> is a toggle.  Thus, if the display is by date, inverted (i.e.,
newest date first) and you press <A-s>, the resulting display will be by size,
inverted (biggest files first).

Inverting is different from sorting.  Inverting simply reverses the order of
the list of files currently displayed, and makes any later sort produce an
inverted list.	Inverting does not cause the directory to be reprocessed.

Under some unusual circumstances, you may see the following warning message
when you enter a command to re-sort:

	       "Sorting cancels changes not UPDATEd. Sort (y/n)?"

This occurs when you have very little memory available for EDDY's use, and
there are lots of pending changes when you enter the command.  EDDY will always
handle at least 35 pending changes without this problem.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   4



1.2.2 Number of Files

With displays containing more than one page, an arrow, pointing up and/or down
will appear in the upper right corner of the screen to show that there is more
data to be viewed by scrolling in that direction.  The arrow doesn't print on
most printers, so you probably won't see it in Figure 1-1, above.

EDDY can display up to around 350 directory entries, depending on available
memory.  This is a limit on the display only - not on the size of directories.
If you had, say, 600 files in directory "\BIGDIR", and you wanted to work with
all assembler source files in that directory, the command "EDDY \BIGDIR\*.ASM"
would yield a display of all .ASM files, up to the limit mentioned above.

If EDDY's display capacity is exceeded, the number of files indicated on the
third line ("109 files" in Figure 1-1) will be replaced by two numbers. The
first is the number of files actually displayed, and the second is the
additional number of files which would have been displayed if there had been
enough room in EDDY's memory.  In Figure 1-1, if the directory had contained
480 entries, the "109 files" would be replaced by "350+130 files".

When EDDY finds too many files to display at once, files are "dropped off" the
end of the list according to the current display sequence.  For example, if the
sequence is by date, inverted, the files with the oldest dates would be the
ones dropped.  Sorting the display again will reprocess the entire directory,
dropping those files which come at the end of the list according to the new
sequence.  (Inverting will redisplay the current list in the opposite order.)

It is possible to display up to double EDDY's capacity, by first displaying the
files in one sequence and then inverting and re-sorting.  Suppose a directory
had 600 entries, and was displayed in "Name" sequence.  The first 350 files
would be displayed.  To see the rest of the files in this directory, press
<A-i> followed by <A-n>.  This would show the rest of the files, starting from
the opposite end, in inverted sequence.


1.2.3 File Sizes & Disk Capacity

The third line of the display also shows the number of bytes used by the files
in the display, and the number of remaining free bytes on the disk.  Both are
multiples of the disk cluster size, while file sizes are counts of bytes of
data in the files, rather than all bytes in the clusters occupied by the files;
thus, the "bytes used" will generally not equal the total of the file sizes.

If the directory has more files than EDDY can display, the "bytes used" is the
total for all files (i.e., the "350+130 files" in the example above).

Directory sizes are not included in the bytes used, as DOS reports these with
size = 0.

For diskettes with no subdirectories, and with all files displayed (*.*), the
sum of bytes used plus bytes free should equal the disk capacity.  If it does
not, you might want to run CHKDSK/F to see if there are some stray sectors to
be reclaimed.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   5



1.2.4 Playing With RAM

You may access your PC's main memory from EDDY, in much the same way as for
files.	If option /P is turned ON, the display will include an entry with the
name " memory", showing the no. of bytes of RAM in your system (as indicated
by your system's BIOS), and the current DOS date and time.

This entry will appear at the end of the list of "real" files in most displays,
with two exceptions:  if the sort sequence is inverted, the " memory" entry
will be at the top; and if there are more files in the directory than EDDY can
display at once, the " memory" entry will not appear at all.

" memory" is not included in the summary of number of files and bytes used as
shown in the display heading.

If you turn option /P on or off during execution of EDDY, the " memory" entry
will appear (or disappear) when you either re-sort the display or change work-
ing directory.

You may LOOK at, FIND strings in, PATCH or COPY the " memory" entry.  More
information on these is provided in the respective sections of this document.


1.3 An Overview

The directory displayed by EDDY is referred to as the "working directory".  If
any files are copied or moved, they will be placed in the "target directory".

The working and target directories, as well as some other parameters, may be
given on the DOS command line.	The directories may be changed during execution
of EDDY.  If the command line does not include any directory specification, the
current directory on the default drive will be the initial working directory.

Details on use of the DOS command line with EDDY are given in the Section 3.0.

EDDY begins execution in EDIT mode.  In EDIT mode, the entries in the working
directory are displayed.  You may edit information in those directory entries,
including filename, extension, date, time and attribute bit settings. Just move
the cursor to the field you want to edit, and type your changes.

You may also select files to be examined, patched, copied, moved, deleted or
destroyed.  All changes will be shown on the screen, but no changes will be
made on disk until you tell EDDY to do so.  EDDY applies the requested changes
to disk when you enter UPDATE mode, by pressing <Enter>.  EDDY will ask you to
confirm that you want to write to disk (by pressing <Enter> again), and will
give you the choice of returning to EDIT without making any changes.

At any time before writing changes to disk (in UPDATE mode), you may change
your mind and UNDO the changes.  You may UNDO changes to the current file with
<F2>, or you may UNDO all changes to all files by pressing <^F2>.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   6



1.4 What EDDY Doesn't Do

EDDY does all file and directory manipulations by use of various functions of
DOS's service interrupt, INT 21h - no direct writes are made to directories or
other parts of the disk.  Thus, EDDY does not offer file "undelete", sector
oriented patching, or directory sorting (except in the display).  On the other
hand, since EDDY does no absolute sector writes (BIOS INT 13h or DOS INT 26h),
the chances of accidentally trashing your disk are minimized.

Additional functionality is planned for EDDY, depending on market response.
For more information on future plans, see the file "EDDY.HST".


1.5 Gee Whiz! Can EDDY Do That?

As mentioned earlier, most of EDDY's capabilities aren't new. However, there
are a few things that you can do easily with EDDY that are difficult, if
possible at all, with other utilities.	If you know of programs that do these
things better than EDDY, let me know, so I can stop making false claims. On the
other hand, if you find some more neat things to do with EDDY, I'd like to hear
about them, too.

 - Have you ever installed a new package and wondered what it was doing to your
disk (watching the "busy" light blink), and then been unable to find the new or
changed files?	Many programs create "hidden" files, in directories of their
choice, on your disk. You can find them by using EDDY's "Where's That File?"
function combined with attribute filtering.  If you enter:
				   eddy/w +H
EDDY will search the whole disk for hidden files.

- Or maybe you'd like to know whether any new files were created or any of your
files were changed by the program you just ran at (say) 9 PM on Sep. 14, 1988.
If you enter:
			   eddy/w ">09/14/88 08:59p"
EDDY will find the new or changed files, wherever they are, hidden or not.

- EDDY's string-finding capabilities are similar to those in the "grep"
utility, but the search strings are easier to set up and are more powerful.
You can find strings (in one or more files) that are continued from one line to
the next, as well as specify strings in a mixture of hex and ASCII if you want.

- Tired of wasting paper because of the form feed that many programs put on
every page of output?  If you use DOS's PRINT command to print a series of such
files, you get a blank page between each one.  To avoid this, display the files
with EDDY (assuming you've got them in one directory) and press <^F4>.  This
will put you in PATCH mode in each file, one after the other, positioned at the
first character - that annoying form feed.  You can change the form feed to a
space, or delete it entirely.  No more wasted paper!

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   7



- Want to know what the differences are between two directories?  EDDY will not
just make the directories available for you to compare side-by-side.  Instead,
if you use <A-c> to set all the COPY/MOVE controls to "C", and then press <^F5>
or <^F6>, EDDY will tell you what the differences are.	For each file, EDDY
will report whether it is in the other directory or not.  If it is, the
relation between the timestamps - newer, older, same, or even same timestamp
but different size - will be displayed as well.  You can also stop to look at
either file's contents, copy, move, patch or delete them, and then continue on
with the next file.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   8



2. Keyboard Usage Summary

This summary is provided as a "quick reference" guide.  The same information is
available on-line with HELP mode.  Further details of use of the various keys
may be found in the later sections of this document.

In this document, key names are enclosed between "<" and ">" delimiters.


2.1 Moving the Cursor

The "arrow" characters are not printable in general, so the cursor control keys
are indicated by the word - left, right, up, down - for the direction of the
arrow that's printed on the key cap.

In key names, these prefixes are used to indicate shifted key combinations:
     "S-" = Shift, "^" = Ctrl, and "A-" = Alt

EDDY's cursor is moved around in the display as follows:

     <Up>     - move up 1 line		 <PgUp>   - up 1 page
     <Down>   - move down 1 line	 <PgDn>   - down 1 page
     <Home>   - move to top of page	 <End>	  - move to end of page
     <^Home>  - display first page	 <^End>   - display last page
     <Left>   - left 1 column		 <Right>  - right 1 column
     <S-Tab>  - left 1 field		 <Tab>	  - right 1 field
     <^Left>  - move to column 1	 <^Right> - move to last column
     <^PgDn>  - auto-scroll down	 <^PgUp>  - auto-scroll up

     </> - move to date field		     <:> - move to time field
     <.> - left edge, except in filename field <.> moves to extension
     <+> - move to attribute field, except in attribute field <+> toggles


Some fields on the screen, such as file size, can't be edited.  These fields
are "protected" so that the cursor can't be moved to that position.  Instead,
it will move to the next unprotected position.

Auto-scrolling is EDDY's capability to move a directory or (in LOOK mode) a
file display up or down continuously, without repeatedly pressing the arrow or
paging keys.  Auto-scrolling is started by <^PgDn> or <^PgUp>.	Pressing the
same key again speeds up scrolling (up to a maximum rate which is a function of
your CPU speed); pressing the opposite one slows it down.  Entering any other
command stops auto-scrolling.  If you don't like the rate scrolling begins
with, see Section 20.9.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page   9



2.2 Commands

Commands tell EDDY what to do to the files that are displayed. Generally, they
affect the current file, as selected by the cursor.

Most common commands are assigned to function keys.  Other commands generally
are assigned to an <Alt-letter> combination.

The function keys are "paired", so that the left (or odd-numbered) key command
is at least vaguely related to the command assigned to the key immediately on
its right.  The right key command is in some sense an extension of or a more
"drastic" command than the left key command.  (The commands for <F1> and <F2>
have perhaps the weakest logical connection, but a case can be made.)

The most frequently-used commands are displayed at the bottom of the screen for
quick reference.  As there is not enough room to display all of the command
choices, this pairing approach is intended as an aid to remembering the second
key of a pair when you see the first displayed.  Here's hoping the "logic" of
this fits your way of thinking!

The function key commands are:

     <F1>  - HELP
  *  <F2>  - UNDO changes on this file
  *  <F3>  - LOOK at data in file - OR - LOOK at files in directory
     <A-F3> - LOOK at data in target directory file
  *  <F4>  - PATCH data in file
  *  <F5>  - COPY file
  *  <F6>  - MOVE file
  *  <F7>  - DELETE file
     <A-F7> - Logical DELETE (affects display only)
  *  <F8>  - DESTROY file
     <F9>  - Exit to DOS temporarily
     <F10> - QUIT, return to original default directory
     <S-F10> - Select exit directory
     <A-F10> - QUIT, set default to exit directory

* - Commands indicated by an asterisk may be used with the <Ctrl> key.	<Ctrl>
    (indicated in this document by "^") means "do the command for all files".
    E.g., <^F5> means copy all files, and <^F2> means undo all changes on all
    files.  (Option /T, - Section 3.2.1 - changes the effect of the "^".)

    If you want to interrupt one of the <^Fn> commands, press <BS>.
    Any files tagged for copy, delete, etc. up to that point will stay
    tagged, but no further action will take place.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  10



The other command keys used in EDIT mode are:

   <A-d>: Sort files by DATE/time	    <A-n>: Sort files by NAME
   <A-e>: Sort files by EXTENSION	    <A-s>: Sort files by SIZE
   <A-h>: Sort files by HOUR/minute	    <A-u>: Display files UNSORTED
			<A-i>: INVERT display sequence

   <A-a>: file ATTRIBUTE filter selection
   <A-b>: file timestamp filter selection
   <A-c>: inquire/change CONTROLS for Copy & Move
   <A-f>: FIND string in file
   <^f>:  FIND string in all files
   <A-o>: inquire/change OPTIONS
   <A-t>: inquire/change/create TARGET directory
   <A-v>: change/create VOLUME label
   <A-w>: change WORKING directory/file selection
   <^w>:  "Where's That File?" search for WORKING directory
   <A-x>: eXCHANGE working & target directories

   <Esc>: return to preceding mode (or QUIT - see Section 20.7)
   <A-equal>: Set EDDY's internal timestamp = current file's date & time
   <A-minus>: Undo the effect of a preceding <A-equal>
   <=>: Set file timestamp = EDDY's internal timestamp or DOS date & time
   <+>: Toggle file attribute ON/OFF

Additional commands are available in LOOK , PATCH and FIND modes. See Sections
8.2, 9 and 16, respectively, for more information.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  11



3. EDDY's DOS Command Line

When EDDY is executed without any options, paths or filenames given on the com-
mand line, the current default drive and directory information are displayed.

The command line format is:

EDDY [/option...] [work] [target] [+attribute...] ["timestamp"]

All parameters - enclosed in "[   ]" - are optional.  The last two parameters,
"attribute" and "timestamp", are for use in selecting files to be displayed by
criteria other than paths and filenames with wildcards.  Full explanations of
these are given in Section 17.

If you enter a command line in the wrong format, EDDY will display the format
description line shown above, with an arrow pointing to the parameter which is
in error.


3.1 Path Specifications

"work" defines the working directory, in normal DOS format, just as used with
the DIR command (d:\path\filename.ext). Wild card characters are supported. If
no filename is given, *.* is assumed.

For example, "EDDY c:\testdir\abc" would display all files in subdirectory
"abc" or, if there is no such subdirectory, display all files with name "abc"
in the "testdir" subdirectory.

"target" defines the target directory, to receive any files copied or moved. No
filenames are allowed in the "target" specification, as the filenames will come
from the files in the working directory.

If you want to use the current directory, "work" or "target" (but not both) may
be abbreviated to "."

Paths may be specified using either "\" or "/", as you prefer.

"EDDY . c:" would display all files in the current default directory, and any
files copied or moved would go to the current directory of drive "c:".

Both working and target directories may be changed during execution of EDDY.
This is explained further in Section 5.

Note that the working directory and target directory may not be the same. EDDY
will give an error message if this occurs.

Whenever a path name is entered, either from the command line or after an <A-t>
or <A-w>, any ";" encountered is treated as a ":", on the assumption that it
was entered because you forgot to <Shift>.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  12



3.2 Options

Options are parameters given to EDDY on the command line, as with normal DOS
commands, e.g., "EDDY/A/K" tells  EDDY to use options "A" and "K". Options must
be placed at the beginning of the command line, before any path specifications.

EDDY has two types of options - letters and numbers. Letter options can have
only two states: they are either on or off, and they can generally be changed
during execution of EDDY.  Number options are used only from the command line,
and provide certain initial values to override EDDY's normal start-up state.

If your version of DOS supports "switch" characters other than "/" for command
line parameters, EDDY will accept whatever character you use with your system
(e.g., "-" is preferred by some users).


3.2.1 Letter Options

You may change the option settings (except for option /R) at any time.	Press
<A-o> to get a display of the current settings.  While this display is on the
screen, pressing any of the option letters toggles the option setting between
ON and OFF.  When the settings are the way you want them, press <Enter>.
Pressing <*> resets the options to the values they had when EDDY started: i.e.,
the default values, as modified by any options you used on the command line.

The available letter options and their meanings are listed below.  If you don't
like EDDY's default option settings, refer to Section 20.5, which explains how
to change them.

/A - Do not change the file archive (modify) attribute when copying or moving
     files. Default is to always set this attribute on in the new copy, and to
     turn it off in the original whenever the working directory is a hard disk
     and the target is a floppy.

     EDDY assumes any drive other than A: or B: is a hard disk.

/B - Turn off the "beep" that normally sounds for errors or warnings.

/C - Do not change the cursor size.  Default is to use a larger cursor in EDIT
     mode, a full-height cursor in PATCH mode, and set it to a two-pixel high
     underline at exit.  If you start EDDY with this option off, and then turn
     it on, EDDY will not reset the cursor at exit.

     If you use option /E as well as /C, /C has no effect - i.e., the cursor
     will be changed.

/E - Set EGA or VGA monitor to use "extra-line" text display mode (43 or 50
     lines, respectively).  If off initially, the mode will be left unchanged.
     In this case, if the monitor is already in extra-line mode, the option
     display window - <A-o> - will show /E is ON.  If you change option /E
     while in EDDY, the display mode will change immediately, and the first
     page of the working directory will be displayed.  If your monitor is
     neither EGA nor VGA, option /E has no effect.

     If you were also using option /C, that option is turned off.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  13



/F - Turn on filename editing (i.e., renaming).  When turned ON, files may be
     renamed by typing the new filename over the old filename in the display.
     With option /F turned OFF, typing a character in the filename field causes
     the cursor to move to the first file with a matching name.  The matching
     is done from the first character of the filename up to and including the
     character just typed.

     With option /F turned OFF, pressing <Ins> in EDIT mode turns renaming ON
     for that file only, until the cursor moves to another line.

/K - Some error and status messages are displayed briefly and then disappear.
     If you would rather have the messages remain until you press a key (any
     key), use this option.

/M - Monochrome monitor.  Useful with mono monitor + Color Graphics Adapter.
     Other equipment combinations do not need this option, although it will
     toggle between color and mono displays on a color monitor.

/P - Play with RAM.  With this option turned ON, EDDY treats the PC's memory as
     a file, which you may LOOK at, FIND strings in, PATCH or COPY.

/R - Reserve minimum memory.  Default is to expand to 128K, if there is that
     much available.  A maximum of 72K will be used if this option is turned
     on.  Using this option means that fewer files can be accommodated
     (currently, around 115), and a smaller I/O buffer will be used, which
     means slower copying and moving.

/T - Changes the scope of the commands <^F2> thru <^F8>.  Normally, these
     commands affect all files from the top of the display (i.e., the first
     file) downwards.  If you want EDDY to start from the current cursor
     position (ignoring files higher up in the display), use /T.

/W - Set "Where's That File?" searching; move to new working directory if the
     directory contains a file which matches the current file spec.  Search
     from current directory downwards in the directory tree.


3.2.2 Number Options

These options are used to specify parameters that override the normal colors,
display sort sequence, and/or COPY/MOVE Controls used initially by EDDY.


/0-aabbccdd
     Override EDDY's display colors.  If you want to experiment with other
     colors, use /0.  "aa", "bb", "cc" and "dd" must be valid 2-digit hex
     screen attributes; they specify the colors used for the main body of text,
     the heading and footer lines, the line with the cursor, and the outlines
     for the various message windows.  The "-" after the "/0" must be included.

     When you find a color combination you like, you can make it permanent by
     using the PATCH procedure described in Section 20.1.  A list of valid
     color attributes is provided in Appendix 2.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  14



/1x
     Override the normal startup display sequence.  "x" must be one of the sort
     sequence codes defined in Section 1.2.1.  If "x" is a capital letter, the
     sequence will be in ascending order; if lower case, in descending order.

/2xxxxx
     Override the normal COPY/MOVE Control Code settings, as described in
     Section 10.1.  From 1 to 5 "x"s may be specified.  Each "x" must be "c",
     "y" or "n".  Either case is O.K.


For example, if you want to back up files which have changed, but only if they
are already in the target directory, you might enter a command like this:
"EDDY/1d/2n WORK A:".  The "/1d" produces a display of the "WORK" directory in
descending order of date/time (i.e., newest first).  If you then pressed <^F5>,
the "/2n" prevents files which are not on A:  from being displayed for the
confirmation step, and any files in WORK which are newer than the files on A:
will be tagged for copying.  For a full explanation of the processing associ-
ated with this example, refer to Section 10.



3.3 Other Command Line Parameters

Two other parameters may be entered on the command line:  an "attribute filter"
specification and/or a "timestamp filter" specification.  These specifications
are used to select files for display based on their file attributes - hidden,
directory, etc. - or date and time.  They are explained in detail in Sections
17.1.1 and 17.2.1, respectively.



4. Editing Directory Entries

To select a file for editing, move the cursor to the line of the display for
that file.  The line with the cursor will be highlighted, and the corresponding
file becomes the "current file".  Editing is then done by simply typing the new
information over the old on the screen.

The cursor will skip over fields which can't be edited, such as file size.  If
you try to enter data which is not valid for the field under the cursor (e.g.,
letters in a date or time field), EDDY will "beep" at you and ignore the entry.

It is possible to enter combinations of characters which result in invalid data
in a field.  For example, "02" is a valid month and "31" is a valid day, but
together they are an invalid date.  EDDY catches errors of this type whenever
you try to move the cursor off of the current file.  EDDY "beeps" and puts the
cursor on the field where the error was detected.

When any editing has been done, an "*" will appear at the right end of the line
to indicate that changes have been made to that file.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  15



4.1 Selecting a File

There are two ways to move to the file you are interested in:  by using the
normal cursor control keys (<Up>, <Down>, etc.), or directly, by typing the
name of the file (with option /F turned OFF).

With the cursor in the filename field, typing any character that's valid for a
filename is a signal to EDDY to move the cursor to the first entry in the
display with a filename that matches.  Matching is done from the first char-
acter of the current filename up to and including the character just typed.

For example, consider the display of Figure 1.1.  If you were positioned on the
"WOMBAT" entry, with the cursor on the "W", and you typed "E", the cursor would
move to the "EDDY" entry, with the cursor on the first "D".  If you then typed
"R", it would move to "ERROUT.ASM", on the second "R".

Direct selection is disabled when option /F is ON.



4.2 Renaming Files

Turn on option /F (explained in Section 3.2) if you want to rename files.  If
this method is used, direct file selection, as described above, is disabled;
typing in the filename field renames the file.

To rename a file without disabling direct file selection, first press <Ins>.
This turns on /F only while the cursor remains on the current line; as soon as
it moves to a new line, /F is reset to the value it had when <Ins> was pressed.

To rename a file, type the new name over the old on the screen.  A "*" will
appear to the right of the extension, to remind you that a change has been
made.  The file will be renamed on disk when you enter UPDATE mode.

Any valid characters for filenames may be entered, including spaces (except the
first character may not be a space). Valid characters are any in the range 20h
through 7Eh, except for the following:	[ .  " / \ :  | < > + = ; , ]
If you press <.>, it will not be used for the name:  instead, the cursor will
move to the extension field, and subsequent characters will go there.

Lower case letters are converted to upper case by DOS.	You can rename files
with EDDY so that they can't be used with normal DOS commands, by using names
containing embedded blanks.

When you rename a file, its display may no longer be in the correct place in
the list, if the current display is sorted by name ("seq=N") or extension
("seq=E").  If you want to get the file's display sorted to its proper spot,
just press the key for the sequence you want.  (This may be the same as or
different from the sequence already in use, as indicated on the last line.)

If you try to rename a file so that it is the same as an existing file or sub-
directory in your working directory, EDDY will "beep" and put the cursor in the
file name field.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  16



4.3 Changing Date and Time

Dates are displayed in month/day/year format, and times are displayed based on
a 12-hour clock with an "a" or "p" to show a.m. or p.m.

EDDY allows only valid month/day/year combinations to be entered.  Hours in the
range 01 to 12 are accepted, and minutes must be 00 to 59.  Seconds can't be
updated directly; any change to the time will set the seconds field to zero.

EDDY maintains an internal timestamp.  EDDY's timestamp is either the current
DOS date and time, or a date and time which has been set by pressing <A-equal>.
Pressing <A-equal> freezes EDDY's timestamp at the date and time of the current
file or directory until is changed by another <A-equal>.

Pressing <=> puts EDDY's timestamp on the file if <A-equal> has been pressed
previously; if not, the current DOS date and time is used.

<A-minus> undoes the effect of a previous <A-equal>.

When a change has been made to the date or time, an asterisk will appear in the
line to the right of the field changed.


4.4 Changing File Attributes

Attribute bit settings are displayed under the heading "RHSDA", indicating
	       READ-ONLY, HIDDEN, SYSTEM, DIRECTORY, and ARCHIVE
file attributes, respectively.

A "y" indicates the attribute is on for this file; "n" means it is off.

The attribute bit settings may be changed by typing the new value over the old.
The "directory" attribute can't be changed.

When a "y" or "n" is typed in an attribute field, the cursor moves right, to
the next attribute.  This can be annoying if what you are trying to do is
change the attributes on a series of files (e.g., removing read-only
attributes).  To accommodate this, a second way of changing the attributes is
provided:  <+>.  Pressing <+> will toggle the attribute ON/OFF without moving
the cursor.

When a change has been made to an attribute bit, that attribute will be dis-
played as a capital letter instead of the normal, lower case display.

You can also change an attribute for all files in the working directory with a
single command. Move the cursor to the column of the attribute you want to
change (the line the cursor is on doesn't matter) and press <^y> or <^n>.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  17



5. Moving to a New Directory

EDDY can change working directory and/or target directory at any time.	These
may be on the same or different disks.

You may specify the full path including drive and/or root, or you may specify
the path relative to the current working directory, if appropriate.  If your
entry includes a drive and root (e.g., "C:\WORK"), EDDY will use the specifi-
cation exactly as you enter it.

If you enter only a drive (e.g., "C:"), the default directory for that drive
will become the new (working or target) directory.  If the current default is
anything other than the root, it will be displayed before it is used by EDDY.

If you start the name with a "\", EDDY interprets this as a directory path
starting from the root of the current working directory's drive.  If there's no
initial "\", EDDY appends the name you provide to the end of the current
working directory path string, and uses that as the new directory.

For example: suppose your current working directory is C:\UTIL and the DOS
default on drive D: is D:\WORK. Then, after pressing <A-w>, if you enter...
     ... "\" or ".."the new working directory will be C:\
     ... "\FOO" the new working directory will be C:\FOO
     ... "FOO" (or "C:FOO") the new working directory will be C:\UTIL\FOO
     ... "D: the new working directory will be D:\WORK
     ... "D:FOO" the new working directory will be D:\WORK\FOO

When EDDY constructs a path in this way, the resulting path is always displayed
for review and approval before the new working or target directory is set.

When you are typing a path specification, you may use <Ins> and <Del> to change
what you have typed.


5.1 Working Directory - <A-w>

The working directory is initially set from the command line.  It may be
changed by pressing <A-w> and entering the new path, according to the rules
described above.  A file specification may be entered, either with or without a
path specification.  If you enter only a file specification (e.g., "*.BAT"),
that file specification will be used with the current working directory.

EDDY tries to use your specification as a path.  If no such path can be found,
EDDY then interprets what you have entered as a file specification.

If the directory you specify has no files to be displayed (e.g., an empty
diskette or no files matching your specification), you will see the normal
display headings but the file count will be zero. On the assumption that you
will probably want to either move to another working directory or change the
file specification for this one, EDDY presents the same command window that
you get normally by pressing <A-w>.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  18



If you enter an unambiguous filename (i.e., no wildcards) as your working
directory, EDDY will go straight into LOOK mode for that file.	When you exit
LOOK, the working directory will be "*.*".

After you go to LOOK in this way, you may notice that your disk's "busy" light
comes on for a bit.  Not to worry!  EDDY is just using the time between
keystrokes to build the "*.*" display, to minimize the delay when you exit
from LOOK.

If you change your working directory to the same as your target directory, the
target directory specification in EDDY will be set to "no target".  If you then
enter a COPY or MOVE command, EDDY will ask you for a new target directory.

Changing directories with <A-w> turns off option /W if it is on.

Other ways to change the working directory are described in Sections 5.3 (Ex-
change Working & Target Directories), 5.4 (Where's That File?) and 8.1 (LOOK at
Directory).

If your working directory is on a diskette, you can change diskettes if you
wish.  After loading the new diskette, just press any of the "sort" keys (but
not the "invert" key - <A-i>).  The directory of the new diskette will be
displayed.


5.2 Target Directory - <A-t>

The target directory will receive all copies or moves.	It may be specified on
the command line when EDDY is started, or at any time during execution.

To check the target directory setting, press <A-t>.  EDDY will display the
current drive and path (or tell you that there is no current target) and allow
you to change the target directory if you wish.

If you do not want to enter a new target directory path after pressing <A-t>,
just press <Esc> to return to EDIT.  The current target directory assignment
will remain unchanged.

The target directory cannot be set the same as the working directory.

No file specification may be used in the target directory path specification;
only a drive and path are allowed.

You may create a new directory from within EDDY, and use that as your target
directory.  When EDDY asks you to enter the target directory (following a <A-t>
or <A-x> keypress), the first 3 characters you enter should be "MD " ("MD" =
DOS "mkdir" command).  This tells EDDY that you want to create a new directory.
After "MD ", enter the path specification of the new directory.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  19



Alternatively, if you enter a target directory name that doesn't exist after
pressing <Alt-t> or <Alt-x>, EDDY will normally ask if you want to create a new
directory.  However, if any parts of the path preceding the name of the
directory are also invalid, you will just get an error message.


5.3 Exchange Working & Target Directories - <A-x>

To exchange the current working and target directories, press <A-x>.

When you exchange, EDDY will "remember" your current file in the working direc-
tory, and will return the cursor to that file if you later exchange back (with
no intervening changes of directory).

<A-x> turns off option /W if it is on.


5.4 Where's That File? - Option /W and <^w>

If you want to find out what directory (or directories) a file is in, use
option /W and <^w>.

From the command line, using option /W causes EDDY to search the disk for
matching files, starting with the given working directory and continuing
downwards in the directory tree.  The directories are searched in "unsorted"
sequence; i.e., the order they actually are stored on your disk.

The working directory which will be displayed is the first one found which has
matching files.  If there is no match, EDDY will terminate with a "File not
found" message.

Pressing <^w> when option /W is off turns /W on, and the current working direc-
tory becomes the base for searching through the directory tree.  EDDY then
searches from the base downwards in the tree for a directory with one or more
files matching the current file, attribute and/or timestamp specifications.  If
found, that directory becomes the new working directory.  If there are no
matching files, you'll get a "File not found" message, and /W will be turned
off.

Pressing <^w> when option /W is on causes EDDY to search the directory tree for
the next directory, relative to the current base, which contains matching
files.	Using <^w> repeatedly will display in succession all directories from
the base downwards which have matching files.

Changing working directory by pressing <F3>, <A-w> or <A-x> cancels the base
and turns off option /W.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  20



5.5 What d'ya mean, "Too big"?

There is one rare situation which can be puzzling the first time you encounter
it:  when you have a path involving a long chain of subdirectories, EDDY may
refuse to move to the directory you want, giving you the message "Path too
big!".  This means that DOS has refused to recognize the directory, even though
you know it's there.  This can happen if you rename one or more of the subdi-
rectories in the path with a name longer than the original, and the resulting
path is longer than DOS allows (64 bytes total).  The situation can be even
more obscure if you have part of the path as a "SUBST"ed disk, so that the path
doesn't look particularly long at first glance; however, DOS uses the total
effective length, after expanding the SUBST path.

The reason for dwelling on this at such length is that several users have re-
ported this as a bug in EDDY, and postage to reply to these reports (as prom-
ised in Section 21.2) from Hong Kong adds up quickly.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  21



6. HELP Command - <F1>

At any time you may press <F1> to get HELP.  The HELP screen displayed will be
different, depending on what you were doing when you pressed <F1>.

Once you are in HELP mode, you may view other HELP screens by selecting from
the list at the bottom of the screen, or you may press <PgUp> or <PgDn> to view
the screens sequentially.

In order for the HELP function to operate, EDDY must be able to find the file
"EDDY.HLP". EDDY will be able to find it if you have EDDY.HLP in a directory
which is mentioned in your DOS PATH statement, or in your current default
directory. If you are using DOS 3.0 or higher, EDDY will also be able to find
the HELP file if it is in the same directory from which you executed EDDY.

If the HELP display appears mixed up, and does not have a nice, neat border
around the text, it may be that someone has been using a word processor on it
and stored it back with TABs in it to conserve space. If your word processor
has an option to store the text fully expanded, without TABs, try that on
EDDY.HLP.






7. UNDO Command - <F2>, <^F2>

Any changes which have been requested may be "Undone" as long as they have not
yet been written to disk by entering UPDATE mode.

To undo changes on the current file, press <F2>.  To undo all changes requested
for all files, press <^F2>.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  22



8. LOOK Command - <F3>, <^F3>

LOOK has two distinct functions, depending upon the current file when LOOK is
requested. If the current file is actually a subdirectory, then the request is
interpreted as "display the contents of this subdirectory". For normal files,
LOOK means "display the contents of this file".


8.1 LOOK at Subdirectory

When you LOOK at a subdirectory, you change EDDY's working directory.  This is
done by moving the cursor to the display line of the directory you want to LOOK
at and pressing <F3>.  Changing directories with <F3> turns off option /W if
it is on.  For other ways to change the working directory, refer to Section 5.

Figure 8-1 is an example of a display which might have been reached from the
display shown in Figure 1-1, by the following steps:  1) turn on option /P,
causing the " memory" entry to be included in the display; 2) move the cursor
to the line containing the subdirectory "EDDY", and press <F3>; 3) in the
resulting display (not shown), move the cursor to the line containing "MACROS"
and press <F3> again.

================================================================================
filename.ext	size   date	time	RHSDA
DIR of A:\EDDY\MACROS\*.*
Volume in drive A is EDDY	     7 files,	7168 bytes	 2048 bytes free

.	     <DIR>   11/16/86  8:45:00a nnnyn
..	     <DIR>    1/25/87 12:52:02p nnnyn
DOS	 MAC	 319  8/25/86  8:43:36p nnnny
KEYBD	 MAC	 621  1/21/87  1:15:14a nnnny
MISC	 MAC	1607  1/21/87  3:49:18p nnnny
OPCODES  MAC	1448  2/04/87  7:54:22p nnnny
VIDEO	 MAC	 711  1/21/87  1:38:48a nnnny
 memory       655360  7/11/88  8:55:00p












-EDIT- seq=N  <Enter> to UPDATE  F1:HELP F2:UNDO F3:LOOK F5:COPY F7:DEL F10:QUIT
================================================================================

				  Figure 8-1
EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  23



To go to the parent directory of the working directory, move the cursor to the
line containing ".." and press <F3>.  In our example, this would get the
display of "A:\EDDY\*.*".  To return to the display of Figure 1-1, use <F3> on
the ".." line again.

Using <F3> to change directories turns off option /W if it is on.

If you move to a new working directory with changes pending (renames, copies,
etc., which have not been through an UPDATE), the changes will be discarded -
in effect, Undone.  If there are pending changes, EDDY will warn you and ask
for confirmation before moving to the new directory.


8.2 LOOK at File Contents (in Working Directory)

To LOOK at the data contained in the current file, press <F3>.	<^F3> LOOKs at
the data in ALL files in the directory, one at a time.

EDDY will display the contents in either text or hex format, depending on the
data.  EDDY examines the first 2000 bytes in the file.	A file is displayed in
text format if EDDY finds that at least 80% of the first 2000 bytes are print-
able (20h - 7Eh) or common control characters - CR, LF, FF, TAB - and there is
at least one LF per 256 bytes.	Otherwise, it will be displayed in hex format.

	    <Tab> toggles the display between text and hex formats.

See Section 16 for a discussion of the FIND string command, which works closely
in conjunction with LOOK.


8.2.1 Text Format Display

In text format, a new line is initiated when either a CR or LF is encountered
(but a CRLF pair only counts as one line).  The line number of the line at the
top of the screen is shown on the status line at the bottom of the screen. The
highest line number EDDY can display is 65535.

As there is no cursor, the "arrow" (and related) keys work a little differently
in LOOK mode.  The display may be thought of as a "window" which can be moved
around to view various parts of a file, while the file itself does not move.

The keys used to move the display window around in text-format are:

    <Up>	- move up 1 line	 <PgUp>   - up 1 page
    <Down>	- move down 1 line	 <PgDn>   - down 1 page
    <^Home>	- first page		 <^End>   - last page
    <Left>	- left 1 column 	 <Right>  - right 1 column
    <S-t> (<T>) - tab left 20 columns	 <t>	  - tab right 20 columns
    <^Left> - left edge (col. 1)     <^Right> - right edge (last column)
    <^PgDn> - auto-scroll down	     <^PgUp>  - auto-scroll up

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  24



<PgUp> and <PgDn> move 23 lines at a time, overlapping the previous screen by
one line to give some continuity for scanning through text.

When paging in text format through a long non-text file, EDDY may spend a lot
of time looking for CRs and LFs that aren't there.  If EDDY appears to be
"hung up" after a <PgUp> or <PgDn>, press <BS>.  This interrupts the
processing and displays the file from wherever EDDY has read to thus far.


8.2.2 Text Format Commands

a.  TAB Expansion - <0> thru <8>

TABs expand to 8-character boundaries as a default.  (To use another default
value, refer to Section 20.10).  You may change the TAB expansion by pressing
<0>, <1>, ..., <8>.  TABs will then expand to the boundary you have selected.
If you press <0>, TAB characters will be shown as a "blob" on the screen, and
no expansion will be done.

The current TAB expansion factor is shown on the status line at the bottom of
the screen; e.g., "tab:8" is displayed as a default.

If you change the TAB expansion, the new setting will remain in effect until it
is changed again, even though you exit LOOK mode and then enter it again for a
different file (or the same file).  If you prefer that the TAB setting revert
to the default value each time, see Section 20.10.


b.  Bit Stripping - <b>

If you have a WordStar-type file, with lots of high-order bits set to obscure
the real meanings of the characters, you may wish to use the bit-stripping com-
mand <b>.  Pressing <b> causes EDDY to clear the high-order bit before the
characters are displayed.  Pressing <b> again toggles the bit-stripping action,
so you can experiment to see which way gives the best result.

If bit-stripping is turned on, you will see the display "bits:7" on the status
line at the bottom of the screen. If it is off, the display will show "bits:8".
Bit-stripping is always off when you enter LOOK mode.  (If you would prefer
that bit-stripping retains the setting that you used last, see Section 20.10).

If you use <b> after leaving the first line of the file, EDDY loses track of
the line number.  To indicate this, the bottom line shows "line:?".  Returning
to the top of the file restores the line number synchronization.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  25



c.  Ruler Line Display - <r>

To determine what position a particular character in the display occupies in
its line, press <r>.  You will see a line similar to this one at the top of the
screen:

21 ++++++^+++++++++^+++++++++^+++++++++^+++++++++^+++++++++^+++++++++^+++++++++^

The number at the left is the column number in the file of the character shown
in column 1 of the screen.  The "^" characters mark the columns which are even
multiples of 10 in the FILE (not necessarily the same as columns on the
screen).  In this example, which is what you might see after a <Tab>, the "^"s
mark columns 30, 40, 50, etc.

The ruler line may be moved up or down by pressing <u> or <d>.


d.  Jump to New Line - <j>

You may move directly to any line in the file by pressing <j>, and then typing
the line number you are interested in.	If you type a number larger than any in
the file, you'll get a display of the last few lines of the file.

After pressing <j>, you'll see a field of 5 zeros, where you may enter the line
number to which you want to jump.  The cursor starts in the second digit of
this field, on the assumption that line numbers entered will most frequently be
9999 or less.  However, you may use all 5 positions if needed for larger line
numbers.  Line numbers larger than 65,535 are not supported.

If you enter a line number of "00000", the file display will be positioned at
the start (just like pressing <^Home>).  If you press <Esc>, the display will
not move.


e.  Line Wrapping - <l>

Line wrapping means all lines are "broken" if they are longer than 80 charac-
ters, with the remainder appearing on the next line of the screen. Thus, the
whole line is visible on the screen at once.

<l> is a toggle key which turns line wrapping alternately on and off.  Line
wrapping is initially off on entering LOOK mode.  If you would prefer that the
most recent toggle state is retained, refer to Section 20.10.  The current
state of this toggle is indicated by the first letter of the word "line:" at
the bottom of the display.  If line wrapping is on, a broken vertical line (the
DOS "piping" symbol) appears - "|ine:".

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  26



Even though the lines are wrapped on the screen, EDDY still works with complete
logical lines, as determined by the presence of CR/LF characters. When you move
the display up or down, a line at a time or by paging, the display moves in
units of complete logical lines.

The first line of the display will always begin at the start of a logical line
(except in some cases when toggling between text and hex modes).  Movement of
the display up or down is based on the line at the top of the screen.


8.2.3 Hex Format Display

An example of a hex format display appears below (Figure 8-2).	The number
under the heading "Offset" is the number of bytes from the start of the file,
expressed in hex as a segment and offset.  Next comes the hex value of the
data, followed by the equivalent characters, under the "ASCII" heading.



================================================================================
 Offset    00 01 02 03 04 05 06 07-08 09 0A 0B 0C 0D 0E 0F	    ASCII     P

0000:0000  E9 4A 16 0B 1B 1E 1E 01 2A 41 42 43 45 46 4B 4D     iJ......*ABCEFKM
0000:0010  50 52 54 57 2D 43 59 43 43 4E 2D 4E 00 71 46 03     PRTW-CYCCN-N.qF.
0000:0020  62 38 6C 6C 54 38 54 01 66 23 3F 3F 3F 3F 3F 3F     b8llT8T.f#??????
0000:0030  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:0040  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:0050  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:0060  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:0070  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:0080  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:0090  3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F 3F     ????????????????
0000:00A0  3F 3F 3F 3F 3F 3F 3F 3F 00 00 00 00 00 00 00 00     ????????........
0000:00B0  00 00 00 00 00 D5 CD CD CD CD CD CD CD CD CD CD     .....UMMMMMMMMMM
0000:00C0  CD CD CD CD CD CD CD CD CD CD CD CD CD CD CD CD     MMMMMMMMMMMMMMMM
0000:00D0  CD CD CD B8 0A 24 B3 20 20 20 20 45 44 44 59 20     MMM8.$3	  EDDY
0000:00E0  28 54 4D 29 20 76 65 72 73 69 6F 6E 20 34 2E 30     (TM) version 4.0
0000:00F0  32 20 20 20 B3 0A 24 B3 20 20 46 69 6C 65 20 61     2   3.$3  File a
0000:0100  6E 64 20 44 69 72 65 63 74 6F 72 79 20 45 64 69     nd Directory Edi
0000:0110  74 6F 72 20 20 B3 0A 24 B3 20 20 20 43 6F 70 79     tor  3.$3   Copy
0000:0120  72 69 67 68 74 28 43 29 20 31 39 38 37 2C 38 38     right(C) 1987,88
0000:0130  2C 38 39 20 20 20 B3 0A 24 B3 20 62 79 20 4A 6F     ,89   3.$3 by Jo
0000:0140  68 6E 20 53 63 6F 66 69 65 6C 64 2C 20 42 6F 78     hn Scofield, Box

-LOOK-	  <Esc> to EDIT       file: EDDY.COM	       F1:HELP F4:PATCH F10:QUIT
================================================================================

				Figure 8-2
EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  27



8.2.4 Hex Format Commands

The keys used in LOOK mode to move around in the hex-format display are:

    <Up>    - move up 1 line	      <PgUp>  - up 1 page
    <Down>  - move down 1 line	      <PgDn>  - down 1 page
    <^Home> - display first page      <^End>  - display last page
    <^PgDn> - auto-scroll down	      <^PgUp> - auto-scroll up

Additional commands are available in hex format are described below.


a.  Printability - <p>

Normally, the characters under the "ASCII" heading are the exact equivalents of
the hex data.  However, many of the characters corresponding to the hex values
in the ranges 00h - 1Fh and 7Fh - 9Fh are interpreted as printer commands by
most printers.	An attempt to use the DOS <Shift>-<PrtSc> function on a screen
containing these characters will result in an assortment of form feeds, font
changes, carriage returns, etc., rather than the screen print desired.

EDDY provides an option to accommodate screen printing of hex displays.  If you
press <p>, telling EDDY to format the screen for printing, the characters in
the troublesome ranges will be replaced by periods, and all high-order bits
will be turned off.  The hex data part of the display is unchanged.  When <p>
is pressed, a blinking letter "P" appears at the right end of line 1 to remind
you that "printability" is turned on.  <p> is a toggle key, and turns printa-
bility alternately on and off.

The example in Figure 8-2 has printability selected; depending upon your prin-
ter's capabilities, the "P" on line 1 may not be blinking on the page.


b.  Jump to New File Position - <j>

You may move directly to any position in the file by pressing <j> and then
typing the segment and offset which you are interested in.  If you type a value
larger than the file, you'll get a display of the last few lines of the file.

EDDY normally uses segments that are even multiples of 64K (i.e., 1000, 2000,
etc.), but you may enter any valid segment you wish.  EDDY will use that seg-
ment for the display, adjusting the offset portion as necessary to yield the
correct offset.

If you enter an offset of "0000:0000", the file display will be positioned at
the start (just like pressing <^Home>).  If you press <Esc>, the display will
not move.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  28



8.3 LOOK at File Contents (in Target Directory) - <A-F3>

If there is a file in the target directory with the same name as the current
file, the contents may be LOOKed at by pressing <A-F3>.  If there is no target
directory, or there is no file with that name, you will be informed.  Other-
wise, you will see a display identical to that described above, and all the
LOOK mode commands will work the same way.

When the file displayed is from the target directory, a "T" is shown on the
last line in column 7, thus:

. . .

0000:00F0  65 63 74 6F 72 79 20 45 64 69 74 6F 72 20 20 B3     ectory Editor  |
0000:0100  24 B3 20 20 20 43 6F 70 79 72 69 67 68 74 20 28     $|   Copyright (
0000:0110  43 29 20 31 39 38 37 2C 31 39 38 38 20 20 20 B3     C) 1987,1988   |
0000:0120  24 B3 20 62 79 20 4A 6F 68 6E 20 53 63 6F 66 69     $| by John Scofi
0000:0130  65 6C 64 2C 20 42 6F 78 20 34 37 31 33 36 20 B3     eld, Box 47136 |
0000:0140  24 B3 4D 6F 72 72 69 73 6F 6E 20 48 69 6C 6C 20     $|Morrison Hill

-LOOK-T   <Esc> to EDIT       file: EDDY.COM	       F1:HELP F4:PATCH F10:QUIT
================================================================================



8.4 LOOK at RAM (or ROM, or ???)

You may LOOK at the current contents of your PC's memory (if option /P is ON)
by moving to the " memory" entry in the display (either with the cursor keys
or by pressing <Space> when the cursor is in column 1) and then pressing <F3>.

RAM contents will be displayed in hex format, from 0000:0000 up to the limit of
installed RAM.	EDDY bases it's assumption about RAM size on the value in
memory at 0040:0013 - :0014h (the same location the BIOS uses) at the time EDDY
begins executing.  If your system has 640K of memory, for example, you will see
"80 02" in these locations.

It's sometimes interesting to browse around in other parts of the PC address
space, such as ROMs and display memory.  To make all of this accessible to
EDDY, PATCH RAM (as described in Section 9.3) at 0040:0013h to "00 04".  This
tells EDDY (and the BIOS) that you have 1,024K bytes of RAM.

After doing this, the next time you sort the display or change to a new working
directory, the size of the " memory" entry will be 1024K.  You may now LOOK
anywhere you like in the address space.

For example, if you press <j> and then enter an offset of "FFFF:FFFF", you will
see the end of the manufacturer's ROM, which usually has the copyright notice.
(Be patient after entering the big offset; EDDY looks at every byte on the way
to the end, so it can take a while.)

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  29



9. PATCH Command - <F4>, <^F4>

Normally, you will use LOOK or FIND before using PATCH, in order to locate the
place in the file you want to PATCH.  Once you have found it, press <F4>.  Or,
if you want to PATCH every file in the directory (one at a time), press <^F4>.

The PATCH mode display is similar to the LOOK mode hex format display with
"printability" turned off.  It also has two cursors - one in the hex part of
the display and one in the text (ASCII) part.  These cursors move in unison, so
that you can easily match corresponding data in the two parts of the display.

One of the cursors will be blinking, the other not.  The blinking cursor shows
where you may enter changes to the data.  If you want to enter data in the
other format - hex vs. text - press <Tab> to toggle the data format.

In text data entry format, the cursor in the text part of the display blinks
and the hex cursor does not.  The hex cursor also expands to cover two hex
digits, since entering a single text character affects both digits.

In either format, as you enter data in one part of the display the
corresponding data in the other part is updated and displayed accordingly.
Also, any data changed remains highlighted (reverse video) in the display.

You can move the cursors to the place where you want to change data by using
the "arrow" keys - <Left>, <Right>, <Up> and <Down> - and <Home> and <End>.

Changes can be made to only one screen at a time.  PATCH mode does not have
paging capability.

You can UNDO changes with <F2>, just as in EDIT mode.  Similarly, once you have
made changes on disk via UPDATE, those changes cannot be undone.

<Esc> from PATCH returns directly to EDIT, with no stop in LOOK mode.

A practical example of PATCHing with EDDY is presented in Section 20.1.


9.1 Changing a File's Length

You may add bytes at the end of a file, using <A-z>.  You may also use <A-y> if
you want to delete bytes, either from the beginning or end of the file.


9.1.1 Appending Bytes to a File - <A-z>

Files may also be expanded using PATCH.  When you are positioned at the end of
the file, with unused space left on the screen, you can add a ^z (end-of-file)
byte after the last byte in the file by pressing <A-z>.  You can add as many
bytes as you want, up to the limit of space on the screen (or until the disk is
full).	Once those bytes have been added, they can also be patched, just like
any other bytes in the file.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  30



9.1.2 Deleting Bytes From a File - <A-y>

After a press of <A-y>, EDDY asks whether you want to delete bytes BEFORE or
AFTER the cursor, and then waits for a reply of <B> or <A>, respectively.  You
may also press <Esc>, if you decide not to delete anything after all.

Pressing <B> deletes from the beginning of the file up to, but not including,
the byte under the cursor.  <A> deletes everything in the file after the byte
under the cursor.  The byte under the cursor is never deleted.

If you press <B> with the cursor on the first byte of the file, or <A> while
it's on the last, EDDY won't complain, but nothing will be deleted.


9.2 Updating in PATCH - <Enter> or <^Enter>

When you have made your changes, they may be written to disk by going to UPDATE
mode (two successive <Enter> key presses).

The UPDATE process normally - after <Enter> - puts the current DOS date and
time on a file that has been patched.  If you use <^Enter> instead to start the
UPDATE, EDDY will ask whether you want to do this or not.  (If you have patched
EDDY to eliminate the default help screen at start-up, as described in Section
20.4, EDDY assumes you are familiar with the program; in this case, no question
is asked, and the timestamp remains unchanged.)

After UPDATE, EDDY will return to LOOK mode.  In LOOK mode you may move to
another part of the file, and then press <F4> to go back to PATCH to make more
changes.  This cycle of PATCH-UPDATE-LOOK-PATCH may be repeated as necessary.


9.3 PATCHing RAM

With option /P turned ON, you may change the contents of your PC's memory by
using the PATCH process on the " memory" entry in the display.

This can be amusing, but be particularly careful when patching in low memory.
It's easy to confuse DOS or the BIOS to the point where you'll have to do a
cold boot to get going again.

One thing that is almost SURE to hang up your machine is to mess with the
values in the BIOS keyboard buffer pointers (0040:001A - 0040:001D).  Therefore
EDDY will not allow these locations to be updated.  EDDY won't complain if you
TRY to change them, and they'll appear to be changed if you LOOK at them right
after patching, but they'll always remain set to whatever values DOS has put
there.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  31



10. COPY Command - <F5>, <^F5>

Press <F5> to copy the current file.  If there is no target directory, EDDY
will ask you for one.  Entering target directories is explained in Section 5.2.

The word "Copy" will appear, to show that the file has been selected.  The
actual copy will be done when you enter UPDATE mode.  After the copy has been
made, the word "copied" will appear in the EDIT mode display for that file.

If you have other changes to be made to the directory entry (renaming, time-
stamping or attribute settings), these changes will be made after the copy, so
the new copy will have the original values in its directory entry.

An exception to this is the archive attribute bit.  Files copied will have the
archive attribute turned ON in the target directory.  For files copied from a
fixed disk (i.e., drives C: through Z:) to a floppy (A: or B:), the archive
attribute is also set OFF in the working directory.  A RAM disk will be treated
the same as a fixed disk in this respect.  In all other cases, the archive
attribute is left unchanged in the working directory.

If you are copying from drive A: or B:, and you want to have the archive
attribute turned off after copying, use the DOS "SUBST" command (if you have
DOS 3.1 or above) - for example, "SUBST X:  A:\" or "SUBST Y:  B:\" - and then
use the SUBSTed drive as the working directory.

If you don't want any archive attributes changed, use option /A.

Copied files normally receive the same date and time as the original; if you
want to put the current timestamp on copies, use <^Enter> to start the UPDATE
process, rather than <Enter>.  If you use <^Enter>, EDDY will ask you whether
or not you want new timestamps.

<^F5> will review all files in the working directory for copying, except those
already tagged for COPY, MOVE, DELETE or DESTROY.  All files which meet the
current requirements defined by the COPY/MOVE controls (see the following
section) will be tagged for copying when you enter UPDATE mode.  To interrupt
EDDY after <^F5>, and before all files have been reviewed, press <BS>.

Changing the target directory while there are files selected for copying or
moving will result in these files being deselected.  EDDY will warn you if this
situation occurs.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  32



10.1 COPY/MOVE Controls

When a COPY or MOVE command is entered, EDDY checks the target directory for a
file of the same name.	There are seven possible situations which may be iden-
tified as a result of this check:

	    1. File not in target
	    2. Target file older
	    3. Target file NEWER!
	    4. Target different size (date and time same)
	    5. Same date,time & size
	    6. Target file read-only
	    7. Subdirectory in target w/ this name

When appropriate, you will be told which of these situations exists by one of
the messages listed above.

Message no. 7 will "beep" to alert you, remain on screen long enough for you
to read it, and then EDDY will move on to the next file to continue processing.
The file will not be tagged for copying.

Message no. 6 "beeps" and blinks, and waits for you to confirm whether or not
you wish to proceed with the COPY. If you decide to go ahead, the file will be
tagged for copying. When you UPDATE, EDDY will turn off the read-only attribute
in the target and copy the file. The read-only status of the new copy will be
the same as the original file in the working directory.

Processing for situations 1 - 5 depends on the settings of the COPY/MOVE con-
trols. There is a control flag corresponding to each of these situations.

A control flag setting of "C" means that whenever EDDY encounters that situa-
tion, the target directory entry (if any) will be displayed.  EDDY will then
wait for you to confirm that you want to COPY or MOVE, as described in Section
10.2, or indicate that you do not, by pressing <Esc>.

In the case of situation 3, EDDY will both beep and blink at you when it is
encountered (and the control setting is "C") so that this important case is not
overlooked.

A control setting of "C" is effective for both single COPY commands - <F5> -
and multiple COPY commands - <^F5>.

The other possible settings are "Y" and "N".  A setting of "Y" means:  if this
situation is encountered, tag the file for copying.  An "N" means:  don't tag
the file.

"Y" and "N" are used as a way of screening the files during multiple COPY com-
mands - <^F5>. They are not used with single COPY commands.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  33



The default control settings for situations 1 - 5 are C,Y,C,C,N.  The settings
may be displayed and/or changed by pressing <A-c>.  Pressing <*> will restore
the control flags to their default settings if you have changed them.  With
these settings, normal backup processing is straightforward.  Pressing <^F5>
would tag for copying all files in the working directory which:

	1. Have a file with the same name in the target directory, AND
	2. have a date/time later than the corresponding target file, AND
	3. are not already tagged for COPY, MOVE, DELETE or DESTROY.

No other files would be tagged by this command.  Any files found which are not
in the target directory would be displayed, and the program would wait for your
decision as to whether the file should be copied.

There is one case where the "File not in target" control will be ignored. If
you press <F5>, <^F5>, <F6> or <^F6> when there is no target directory, one of
the actions you may take is to create one, using "MD" as explained in Section
5.2.  If you have just created the target, then obviously any file you want to
copy will be "not in target".  In this case, if the control flag is set to "C",
it will be treated as though it were "Y" for as long as the target directory
remains the same.


10.2 COPY/MOVE Confirmation

When EDDY encounters a situation that you have flagged with a control value of
"C", the following message is displayed:

     "<F3>/<A-F3>:LOOK,  <F5>:COPY,  <F6>:MOVE,  <F7>:DELETE,  else <Esc>"

An <F3> puts you into LOOK mode, to examine the file contents in the working
directory, in case you need more information from the file in order to decide
what to do.  <A-F3> lets you LOOK at the file in the target directory.	In
either case, when you exit from LOOK, you will be at the same place in the
display, with EDDY still waiting for one of the other keys to be pressed.

<F5>, <F6> and <F7> will tag the file for the normal action for that key.
<Esc> - or any other key - will leave the file untagged.

One situation can be tricky:  if the reason for the display is "Target file
NEWER!", and you proceed to LOOK mode and from there to PATCH, your patching
will normally update the file's timestamp.  Upon return, EDDY will find that
the condition requiring your decision no longer exists, and will tag the file
for COPY or MOVE automatically.

The confirmation process can be used as a directory screening tool.  For
example, if you would like to clean up useless extra copies of files that have
worked their way into the wrong directory, set the controls to N,N,C,C,C and
press <^F5>.  Any files in the target which have the same or later timestamp
will be displayed for review.  <F7> will tag the corresponding files for
deletion from the working directory.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  34



10.3 COPYing Files With Disk Errors

If you have a file that's on a disk that has "bad spots" on it, EDDY will often
let you save the parts that are still good, by COPYing the file.  This is
explained in more detail in Section 19.3.



10.4 COPYing RAM								Press <F6> to select the current file to be moved.  If there is no target
										directory specified, EDDY will ask you for one.  Entering target directories is
If you want to capture the contents of RAM at some point, use <F5> on the	explained in Section 5.2.
" memory" entry of the display.
										<^F6> will review all files in the working directory for moving, except those
The data will be dumped into a file named "MEMORY.@@@".  If such a file already already tagged for COPY, MOVE, DELETE or DESTROY.  All files which meet the
exists, it will be overwritten. 						current requirements defined by the settings of the COPY/MOVE controls (see
										Section 10.1) will be tagged for moving when you enter UPDATE mode.
The file will be as large as your PC's memory, so on DSDD floppy-based systems
you may not have sufficient disk capacity to create the file.			To interrupt EDDY after <^F6>, and before all files have been reviewed, press
										<BS>.

										The word "Move" will appear in the display to show that the file has been
11. MOVE Command - <F6>, <^F6>							selected.  The actual moving will be done when you enter UPDATE mode.  After
										UPDATE, the word "moved" will appear in the display for that file.  The display
Moving a file means that its directory entry is placed in the target directory	of size, date, etc., will be cleared, indicating that the file no longer exists
and deleted from the working directory.  The effect is the same as doing a COPY in that directory.  If you re-sort the display, or move to another working
followed by a DELETE. (If the files are on different disks, that's exactly what directory and then return, files that have been moved will not be displayed.
happens.)

The heading information showing the number of files in the display and the num-
ber of free bytes on the disk will be updated.

No other changes may be made to a file that is selected for moving.

The archive attribute is always set "on" in the moved file's directory entry
(unless you are using option /A), so that the file will be backed up the next
time a backup is done for the target directory.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  35



12. DELETE Command - <F7>, <^F7>

To select the current file for deletion from the working directory, press <F7>.

<^F7> will tag all files in the working directory for deletion, except those
already tagged for COPY, MOVE or DESTROY.  To interrupt EDDY after <^F7>, and
before all files have been tagged, press <BS>.

The word "Delete" will appear in the display to show that the file has been se-
lected.  The actual deletion will be done when you enter UPDATE mode.  After-
ward, the word "deleted" will appear in the display for that file.  All
directory information (size, date, etc.) will be blanked out, indicating that
the file no longer exists in that directory.  If you re-sort the display, or
move to another working directory and then return, files that have been deleted
will not be displayed.

The heading information showing the number of files in the display and the num-
ber of free bytes on the disk will be updated to reflect the deletion.

When you delete all files from a subdirectory, you may notice that the "bytes
free" figure does not increase quite as much as you expected.  This is because
the space used to hold the subdirectory information for the files is not re-
leased by DOS when the files are deleted.  The subdirectory space allocation
stays at the maximum value this directory EVER required, until the directory
itself is deleted.

No other changes may be made to a file that is selected for deletion.

Directories may also be deleted, if they have no files in them.


12.1 Logical DELETE (Ignore) - <A-F7>

Pressing <A-F7> flags a file with "(Ignore)".  The file will then be ignored
during any of the repeating commands - <^F3> thru <^F8>, <^f>, <^n> and <^y>.
The main reason for this feature is to eliminate files from a list that you
want to do a repeated FIND string operation on, so as not to waste time with
files that are in the display but are not of interest for the FIND.

<A-F7> also undoes any changes that may be pending on the file.

Pressing any key other than one of the cursor control keys while on a logically
deleted file cancels the "(Ignore)".

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  36



13. DESTROY Command - <F8>, <^F8>

Destroying a file means to overwrite the file, thus destroying the data within
it, and then delete the file from the working directory.  This can be used to
protect sensitive data from snoopers who might try to use one of the "undelete"
utilities to get at the data.

The current file will be marked for destruction if you press <F8>.

<^F8> will tag all files in the working directory for destruction, except those
already tagged for COPY, MOVE or DELETE.  To interrupt EDDY after <^F8>, and
before all files have been tagged, press <BS>.

The word "Destroy" will appear in the display to show that the file has been
selected.  The actual overwrite and deletion will be done when you enter UPDATE
mode.  EDDY overwrites the entire file with question marks.  After destruction,
the word "destroyed" will appear in the EDIT mode display for that file, and
all directory information will be removed from the display.

The heading information showing the number of files in the display and the num-
ber of free bytes on the disk will be updated to reflect the deletion.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  37



14.0 DOS Gateway - <F9>

EDDY allows you to exit to DOS, execute other commands or programs, and return
to EDDY to pick up where you left off.	All requested changes and actions will
still be in effect when you return.

Press <F9> to exit to DOS.  EDDY will ask you to confirm that you want to exit.
When you exit, EDDY loads a new copy of COMMAND.COM, which will process your
DOS commands normally.	The screen is cleared, followed by COMMAND.COM's
announcement of its presence, and then the DOS prompt.

The default directory will be EDDY's current working directory. You may change
this if you wish.  EDDY will restore it when you return.

When you are ready to return to EDDY, type "EXIT" at the DOS command prompt.

If you forget to EXIT, you may run short of memory later on, because memory
will remain assigned to both EDDY and the extra copy of COMMAND.COM.

EDDY looks for the string "COMSPEC" in the DOS environment segment, in order to
determine where to load COMMAND.COM from in response to <F9>.  If it can't find
this string, <F9> will display the message "No COMMAND.COM", and will not exit
to DOS.  This message means that the environment has been corrupted somehow,
and probably indicates a serious internal problem with some program you are
using - hopefully, not EDDY.

Before turning control over to DOS, EDDY computes a checksum of all of the mem-
ory it is using.  When you return to EDDY, this checksum is computed again.  If
the two values are the same, EDDY continues normally.  However, if there is a
difference, it indicates that some processing you have done while outside of
EDDY has changed part of the memory allocated to EDDY.	To avoid possible prob-
lems, such as writing trash to your directories, EDDY displays the DOS error
message "Invalid memory blocks" and terminates immediately.  If this happens,
directory defaults and cursor size will be left at their current values, rather
than being restored to their pre-EDDY settings.

If you expect to exit to DOS and return often, you may want to consider using
option /R when you execute EDDY.  This leaves more memory for DOS to work with.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  38



15. QUIT Command - <F10>

When you are through with EDDY, press <F10>.  <F10> will restore your default
drive and directory to the settings they had when you executed EDDY (or to your
"exit" directory, if you have selected one as described below).  EDDY will ter-
minate immediately and return to DOS.

If you have changes pending which have not yet been processed by UPDATE, EDDY
will remind you that there are such changes, and ask you to confirm that you
want to QUIT anyway.

One exception to this may occur when option /K is used.  Pressing <F10> when a
message is displayed and waiting for a key press will only erase the message
(like any other key).  You must press <F10> again to terminate.

You can also use <Esc> to QUIT from EDIT.  See Section 20.7 for more informa-
tion on this.


15.1 Exit Directory - <S-F10>, <A-F10>

Pressing <S-F10> at any time selects the current working directory as the
"exit" directory.  The exit directory is the directory which will be left as
the DOS default when you QUIT from EDDY by using <F10>.  If no exit directory
is selected, the default after <F10> will be the same as it was before you
executed EDDY.

Pressing <A-F10> exits from EDDY - just like <F10> - but ignores the exit
directory, leaving the current working directory as the DOS default.


15.2 EGA and VGA Display Control

If you have an EGA or VGA monitor, EDDY normally resets the display to the same
number of lines that were in use when EDDY was executed.  However, if you hold
<F10> (or <A-F10>) down until EDDY's terminating logo appears on the screen,
EDDY will leave the display in the mode you have set it while in EDDY.

If this feature doesn't seem to work on your machine, try patching EDDY as de-
scribed in Section 20.12.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  39



16. FIND String - <A-f>, <f>

To find a string in a file, press <A-f> when the EDIT mode cursor is on that
file, or when LOOKing at that file.  If you want to search through all files in
the working directory, one after another, press <^f> - see Section 16.4.

As an example, suppose you were using EDDY to LOOK at this file ("EDDY.DOC")
and were positioned to the "Technical Support" section.  If you pressed <A-f>,
the display would be similar to Figure 16-1.

The second line in the window shows a series of "5F"s and underlines.  The
underlines have no special significance.  They only mark the place where you
may enter the string you want EDDY to find.

When you have entered the string EDDY is to search for, press <Enter> for a
"close" match search or <^Enter> for an exact match.




			(text continues on next page)

EXAMPLE "FIND" SCREEN:
================================================================================
bug, surely!), if you take the trouble to report it, I'll try to solve it.  And
I'll get back to you with a fix, if possible.

EDDY's PATCH command, using an area within EDDY reserved for this purpose,
makes it reasonably easy to fix minor bugs without having to wait for a whole
new version of the program.

With any problem report, please include the following information:

    1. Version and serial numbers of your copy of EDDY (as shown on the logo
|------------------------------------------------------------------------------|
|		   Enter new FIND string, or use this one...		       |
|	   5F 5F 5F 5F 5F 5F 5F 5F 5F 5F 5F 5F 5F 5F 5F 5F     ________________|
|							       ^	       |
|	    <Enter> to FIND "close" match, <^Enter> for exact match            |
|									       |
|		      Global match is:"?"  <A-g> to change                     |
|------------------------------------------------------------------------------|
    5. As complete a description of the problem as possible -
       - what did you enter on the command line?
       - <PrtSc> listings of the screen before and after the problem
       - how was EDDY's output different from what you expected?
       - any other information that seems relevant

-LOOK-	 <Esc> to EDIT	  bits:8   tab:8   line:1357   F1:HELP F4:PATCH F10:QUIT
================================================================================

				  Figure 16-1
EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  40



A "close" match will ignore upper and lower case differences.  One or more
blanks in the string will match any number of consecutive blanks, carriage
returns, line feeds or TABs (or any combination).  An exact match requires that
every character match completely, including case and blanks.

A close match will also find words that have been hyphenated and broken across
two lines.  If you enter "bicycle" and then ask EDDY for a "close" match, it
will not only find any occurrance of "bicycle" but also occurrances like "bicy-
cle" (i.e., broken at the end of the line).

Once you have entered a string, that string becomes the default for any later
FINDs, on the same or other file.

In LOOK mode, you may press <f> to repeat the previous FIND, using the same
string and the same type of match (close or exact).

When EDDY locates the string you have asked for, it goes to LOOK mode with the
display positioned so that the line containing the string is at the top.  The
first character of the matching string is highlighted, and it blinks.  If the
file has long lines, and the matching string is off-screen, EDDY will move the
display window to get to the part containing the string.

If the matching string begins with a carriage return or line feed, the LOOK
mode display will be in hex format, even if it was in ASCII when the search
began.	This is because these characters are used as line break controls, and
do not appear in the display itself.  In order to display and highlight them,
it is necessary to use hex format.

If the string was not found, EDDY will "beep" and the message "Not found" will
be displayed. In this case, the display will be the last page of the file.

You may interrupt EDDY's search at any time by pressing <BS>.


16.1 Entering New FIND Strings

You may notice that the line where you enter strings looks a lot like EDDY's
PATCH mode display.  In fact, the same data entry routines are used, and you
enter your string just as though you were patching this line.  If you want to
enter your string in hex, <Tab> toggles between hex and ASCII, just as with
PATCH.	(If any part of the string is entered in hex, or if the string has a
hyphen in it, matches to words broken over two lines will not be found.)

Under the data entry line, marking the end of the string to be searched for, is
an up arrow (shown in Figure 16-1 as "^" for readability).  This arrow normally
points to the last character entered, although you may move back to change a
character if you make a mistake, and the arrow won't move.  If you want to mark
the end of the string at another place, just move the cursor to that column and
press <Up>.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  41



If you begin entering characters in the first (leftmost) position of the
string, EDDY erases whatever previous string was there and accepts your input
as a completely new string.  However, if you move the cursor to some position
further to the right, and enter your first character there, you can make
changes to the previous string (including the first position).

You may also use <Ins> and <Del> to edit FIND strings.

Two other features provide a lot of flexibility for FINDing data: the "global
match" character and the "don't match" attribute.


16.2 Global Match Character - <A-g>

The global match character works just like the "?" wild card in DOS filenames.
If a FIND string contains the global match character, that position in the
string will match any character in the file.  For example, the FIND string
"str?ng" will match "strxng", "str@ng", "str ng", etc. The default global match
character is "?".

If you want to search for a string which includes the character currently used
for global matching, you can specify any other character by pressing <A-g> and
then typing the new global match character.  You may use any character except
space for global matching.  The new global match character remains in effect
for all subsequent matches, until changed by another <A-g> command.


16.3 "Don't Match" Attribute - <A-m>

You may also give any character in the FIND string the "don't match" (or "match
anything BUT this") attribute.  This means that the character in that position
in the string will match any character in the file EXCEPT the actual character
in the string.	To give this attribute to a character, press <A-m> and then
type the character.  The character will be highlighted on the screen to remind
you that it has the "don't match" attribute.

For example, if the second character in the string "xyz" were designated as
"don't match", the string would be a successful match to "x0z", "x=z", etc.,
but would not match "xyz".

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  42



If your string contains a global match character, you may designate it as
"don't match" if you wish.  In this case, that character (in that string
position only) is no longer treated as a global match.	For example, suppose
the global match character is "?", and you use the string "abc?" with the last
character as "don't match".  Then EDDY would not find "abc?" if it occurred in
the file, but it would find "abc-" or "abcd", etc.

Similarly, if you designate a blank as "don't match", it will no longer match
multiple blanks, carriage returns, line feeds or TABs. Instead, it will simply
be treated as a match to any single character except blank.

Typing any character in a string position previously designated "don't match"
removes the "don't match" attribute.


16.4 Search for FIND String in All Files - <^f>

To search through all files for the given string, press <^f>.  The first file
from your current display will be displayed in LOOK mode, and the FIND window
will be ready for you to enter the FIND string.

If a matching string is found, the first character is highlighted in a LOOK
mode display, as for <A-f> or <f>.  However, if there is no match in that file,
you will not see the normal "Not found" message; instead, the search will pro-
ceed to the next file, continuing until there is a match or there are no more
files to search.

After a match, you have 4 choices:

    1.	Pressing <f> searches the file for any more matches, and proceeds to
    the next file if no match is found.

    2.	You can press <A-f> to change the FIND string, and the new string will
    used for matching from that point on.

    3.	<Esc> exits from the current file without searching further, and moves
    on to the next file.

    4.	To stop the search and return to EDIT mode, press <BS>.

During the search, pressing <BS> will stop and return to EDIT.	No more files
will be searched.


16.5 FIND String in RAM

The FIND command may also be used to locate data in your PC's memory (i.e., the
" memory" file entry of the display).

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  43



17. File Selection by Filtering

EDDY provides two "filters", or screening mechanisms, which allow you to be
more selective about the files you access.  In addition to the usual selection
by specifying the DOS pathname and filename (with or without wildcards), you
may also specify file attribute byte and/or timestamp values.

Filter values may be entered from the command line or while executing EDDY.
When either filter is in use, it is shown in the top line of the display.

Filters normally have no effect on subdirectory entries in the display.  All
subdirectories are displayed, regardless of attribute settings or timestamp,
with two exceptions:  if the directory attribute is selected as part of an
attribute filter or if the display sequence is "unsorted", then subdirectory
entries are filtered in the same manner as other file entries.


17.1 Filtering by Attribute

You may filter the directory display so that it contains only files with attri-
butes you specify, by using an attribute selection parameter.


17.1.1 Attribute Selection from the Command Line

A command line attribute selection parameter begins with a plus sign ("+") to
distinguish it from a path specification.  The "+" is followed by one or more
letters for the file attributes you choose.  The letters to use are the same as
the letters in EDDY's display heading:  R, H, S, D or A.

To select files which have the attribute ON, enter the letter in upper case;
for files with the attribute OFF, lower case.  Thus, to select only files which
are "hidden", enter "+H"; to select files which are read-only and have not been
modified since last backup (i.e., "archive" attribute off), enter "+Ra" or
"+aR" (the order makes no difference).  If more than one attribute is selected,
all must match in order for a file to be selected.

If you specify an incorrect letter, or use the same letter in both upper and
lower case, EDDY will terminate with an "Invalid format" error message.

Your attribute selection will be shown in the display heading:	the heading
letter for each attribute specified will blink, to show it is being used as a
file selection criterion.  Also, the letter will be in the same case - upper or
lower - as you specified.


17.1.2 Attribute Selection in EDDY - <A-a>

Press <A-a> for attribute selection while executing EDDY.  Any attribute filter
in effect at that time will be cancelled, and you may enter the attributes to
be used for attribute filtering.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  44



To select an attribute, press the key for the corresponding letter - <R>, <H>,
<S>, <D> or <A>.  Pressing a key once selects "attribute ON", twice selects
"attribute OFF", and a third time deselects the attribute.  When you are
satisfied with the selection, press <Enter>.

When you change the attribute filter and there are other changes pending, such
as renaming, copying, etc., EDDY checks to be sure that all files with changes
will still be included in the display after the new filter takes effect.  If
not, you will be warned that some changes will be lost, and given a chance to
decide whether to proceed or not.


17.2 Filtering by Timestamp

You may filter the directory display so that it contains only files with time-
stamps in a range you specify, by using a timestamp selection parameter.


17.2.1 Timestamp Selection from the Command Line

A command line timestamp selection parameter is enclosed in double quote marks
Immediately following the first quote must be one of the following:  ">", "<"
or "=".  These mean that the files to be selected for display must have
timestamps greater than, less than, or equal to the timestamp you specify.

Next, you must provide the timestamp value.  This may be a date, a time, or
both.  Following the timestamp value is the closing quote mark.

Dates must be in the form "mm/dd/yy".  Leading zeros must be supplied if neces-
sary to make up a 2-digit value - e.g., "5/31/88" would be rejected, but
"05/31/88" would be O.K.

Times are based on a 12-hour clock, and must be in the form "hh:mma" for A.M.
times, or "hh:mmp" for P.M.  Again, leading zeros are required.

If you wish to specify both date and time, the date and time must be separated
by one space.

Some examples of valid timestamp values are:

    ">05/31/88 09:00p" - select files with timestamps later than this

    "=07/23/86" - select files created at any time on this date only

    "<10:30p" - select files created before this time, on any date

When a timestamp filter includes a date value, the display will be sorted by
date.  If the filter is based only on a time value, the display will be sorted
by time.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  45



If you make a mistake with the timestamp, EDDY will usually terminate with an
"Invalid format" error message.  However, if you leave off one or the other of
the quotes, and your filter value includes a "<" or a ">", DOS will interpret
these as redirection symbols, rather than as part of EDDY's command line.

With "<", you will probably get a "File not found" message, while with ">" the
"Invalid format" and logo display output from EDDY will be put in a (hopefully
new!) file in your default directory.

If these possibilities worry you, you may use "+" and "-" instead of ">" and
"<", when entering a timestamp filter value from the command line.

17.2.2 Timestamp Selection in EDDY - <A-b>

Press <A-b> for timestamp selection from within EDDY.  Any timestamp filter in
effect at that time will be cancelled, the null timestamp "=00/00/00 00:00p"
will appear in the top line, and the cursor will move to the equal sign.  If
you don't want to enter a new timestamp value, press <Enter> while the null
timestamp is displayed, and no timestamp filter will be used.

Otherwise, the null timestamp may be edited just as though it was a normal file
timestamp in the body of the display.  When you are happy with the filter
value, press <Enter>.  If you enter an invalid timestamp, EDDY will "beep" at
you and move the cursor to the field in error.

When you change the timestamp filter and there are other changes pending, such
as renaming, copying, etc., EDDY checks to be sure that all files with changes
will still be included in the display after the new filter takes effect.  If
not, you will be warned that some changes will be lost, and given a chance to
decide whether to proceed or not.




18. VOLUME Labelling - <A-v>

To create or change a volume label on a disk, press <A-v>.  Then enter the new
label and <Enter>.  <Ins> and <Del> may be used to revise what you have typed,
prior to <Enter>.

EDDY can't create labels with lower case characters, nor make a file into a
label by changing its attributes.  This is because EDDY restricts itself to
doing things that can be done with DOS's INT 21h, as discussed in Section 1.4.

When creating a new label for an unlabelled disk, it is possible to get an
error indicating that there is no room for the label.  This can occur if the
disk's root directory already has the maximum number of files (112 for a DSDD
floppy) allowed by DOS.  Also, a label can't have leading blanks.

EDDY does not have a label deletion function.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  46



19. UPDATE Mode - <Enter>, <^Enter>

When you want to apply the changes you have made in EDIT mode to disk, press
<Enter> to go to UPDATE mode.  EDDY will display the net change in number of
bytes used on disk which will result from your update.	A "+" means more bytes
will be used, and a "-" means some bytes will be freed.

Before actually writing anything to disk, EDDY will ask you to confirm that you
want to proceed, by pressing <Enter> again.  This is to avoid accidentally
writing to disk before you are ready because of touching a key by mistake.

If you use <^Enter> to start the UPDATE, EDDY will ask you whether or not to
put the current date/time on files copied.  The UPDATE process normally - after
<Enter> - leaves the timestamp unchanged on a file that has been copied.  If
you use <^Enter> instead, EDDY will ask whether you want to do this or not.
(If you have patched EDDY to eliminate the default help screen at start-up, as
described in Section 20.4, EDDY assumes you are familiar with the program; in
this case, no question is asked, and the timestamp on copied files will be set
to the current DOS values.)


19.1 Applying changes

As each file is being processed, its EDIT mode display line appears on the
screen, allowing you to monitor UPDATE's progress through the directory.  If a
file's display line is not yet shown, nothing has been done to that file.

After each file has been processed, EDDY checks to see if you have asked for
updating to be suspended ( <Esc> or <BS> ).  All processing for the file being
worked on will be completed, but no work will start on the next file.

When UPDATE has been suspended, it may be resumed by pressing <Enter> (or
<^Enter>, if you want to change the way timestamps on any further copied files
are treated).  If you press <Esc>, EDDY returns to EDIT mode, leaving intact
any requests for changes not yet processed by UPDATE; these changes may be
undone if desired, or you may UPDATE them later.

UPDATE does Deletes or Destroys before anything else, in a preliminary pass
through the list of files.  After deletions, a second pass is made for other
requests.  On this pass, if a Copy is requested it is done first, followed by
any other changes to the file.	Thus, a file which is to be both copied and
renamed will be renamed in the working directory but not in the target.

If any errors are encountered during UPDATE processing, such as read or write
problems, EDDY reports the error as indicated by DOS and suspends the UPDATE at
that point.  You may resume the UPDATE or return to EDIT, as you choose.

After UPDATE, if you return to EDIT, you may make further changes, copies,
etc., just as when you first started EDDY.  These changes will be processed
when you enter UPDATE again.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  47



19.2 Target Capacity Check

EDDY checks to be sure there is enough room on the target directory disk
to satisfy any COPY or MOVE requests you may have made before starting the
update.  If there is, EDDY proceeds as described above.

However, when there is not enough room, you will see the following messages:

			    Not enough room on X:
			    Bytes needed: nnnnnnn
			    Can't COPY/MOVE files

"X:" is the target disk drive.  The number of additional bytes needed is
calculated from the file sizes in the working directory and the cluster size of
the target directory disk, and takes into account that EDDY does deletions
first while updating.

To make room on the target disk, you must delete or move files occupying
clusters equal to the total "bytes needed".  (Remember that most files' sizes
are not even cluster multiples, but the space allocated to them by DOS is.)

When there are changes requested in addition to the copies and/or moves, this
message will also be displayed:

			<Enter> to apply other UPDATEs

If you decide to go ahead, requested changes other than copies and moves will
be done, while the files selected for copying or moving will be ignored.

Even though the net change in bytes used indicates there is enough room to do
all the requested copies and moves, EDDY may run out of disk space at some
intermediate stage.  This happens very rarely, and only when all of these
conditions occur:

    1) Two or more files, for which there are files with the same name in the
       target directory, are being copied or moved.
    2) Some of the files from the working directory use more clusters than
       their namesakes in the target directory, and some use fewer.
    3) The big files are copied or moved before the small ones.

Under these conditions, all available space can be used before space is freed
by the copying or moving of the smaller files.	If this happens, try this:

    1) Return to EDIT mode (UPDATE would be suspended at the point where EDDY
       ran out of space).
    2) Switch working and target directories, discarding the unapplied changes.
    3) Delete the files that would have been overwritten by the copies and
       moves that didn't happen (including the file where the out-of-space
       condition occurred).
    4) Switch directories again.
    5) Copy or move the remaining files.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  48



19.3  Error Recovery

If a read error is encountered on a disk during a COPY or MOVE operation, EDDY
offers three alternatives:

     1 - Write a block (sector) of "#" bytes in the new copy of the file in
	 place of the block that cannot be read.  The new copy will be the same
	 length as the original.  All data which was in disk sectors that did
	 not have a problem will of course be copied intact.

	 To see where the errors were, you might do a FIND on a string with
	 several "#"s in a row.  (EDDY writes a full sector, minus 4 bytes, of
	 "#"s - the "#"s are preceded and followed by a CR,LF pair.)

     2 - Skip the bad block entirely, and write the next good block immediately
	 after the previous block in the new copy. This obviously results in
	 a new copy that is shorter than the original.

	 When this alternative is used, there is no trace left in the new file
	 to indicate where sectors have been deleted.

     3 - Abort the copy/move process. In this case the DOS error code will be
	 displayed, and no new copy will be produced. EDDY will continue with
	 any other updates that may have been requested for other files.

After an update where choice 1 or 2 has been selected, the message displayed
for the file(s) involved will be "copied(?)" or "moved(?)", to indicate that
the new copy is not exactly the same as the original.  Also, the date and time
on the new copy will always be the current date and time in this case.

If more than one error is found on a file, all will be treated in the same way,
according to the alternative you select when the first was encountered.

If you don't like the choice of the "#" for filling bad sectors, Section 20.14
explains how to change it.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  49



20. What Annoys Me Most About EDDY Is:

You can't please all of the people all of the time.  With this in mind, EDDY
has been designed to be easy to "tailor" to your taste in several ways, all of
which make use of EDDY's own PATCH facility. (Anthony Barcellos, reviewing EDDY
in the May-June, '88 issue of "Micro Cornucopia" called this "...user-driven
self-modifying code.")


20.1 The Colors Are Awful

If you have a color monitor, but you don't like the colors EDDY uses, why not
change them to something you do like?  For monochrome monitors, the options are
more limited, but there are still changes you can make.

EDDY's PATCH command can be used to change EDDY's colors.  This also serves as
a simple but practical illustration of some of EDDY's capabilities.  To change
the colors, use the following steps (you might want to make a backup copy of
EDDY, "just in case"):

    1. Put the disk containing EDDY in the default drive.

    2. Type "EDDY ." and press <Enter>

    3. Move the cursor to the line containing EDDY.COM

    4. Press <F4> - you will see a display similar to Figure 8-2.

    5. Move the cursor to the byte at offset 0000:0003 - the character there
       (0Bh if your copy has not been previously modified) is the screen attri-
       bute used for the main body of the display.

    6. Enter the new screen attribute of your choice. (Valid attributes values
       are listed for reference in Appendix 2.)

    7. Repeat as desired for the next three bytes. These are, respectively, the
       attributes for the heading and footer lines, for highlighting the cur-
       rent file line, and for the borders of the various message windows that
       may be displayed.

    8. Press <Enter> twice, followed by <F10>.

    9. Repeat step 2, and see how you like the new colors. If you don't, repeat
       the other steps as well, until you are satisfied.

On monochrome monitors, the "current file" line is indicated by an underline.
If you'd like to see the effect of other possible screen attributes, follow the
procedure outlined above to change the byte at offset 0000:0007.  In an unmod-
ified copy of EDDY, this byte will contain "01h".  Note that the underline is
only used with the monochrome display adapter (or Hercules board).  If you are
using a mono monitor with a Color Graphics Adapter, see the following section.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  50



20.2 I Can't Even Read the Screen!

If your monitor gets blurred or unreadable when you run EDDY, try using option
/M - i.e., enter "EDDY/M".  If the display is now OK, you probably have a
composite monochrome monitor running with a Color Graphics Adapter.

You have 3 choices when using EDDY with this hardware:

    - Use the DOS command "mode bw80" before running EDDY.
    - Use option /M every time you run EDDY.
    - Patch EDDY's default to option /M, so you don't have to type it every time

The patching process for this is explained below, in Section 20.5.

Another possible cause of strange-looking screens is if you have a copy of EDDY
which has been modified as described in Section 20.8.


20.3 EDDY Shouldn't Mess With the Cursor

Some video controllers and some clone versions of BIOS seem to have a problem
with changes of cursor size.  If you have this type of problem, or if you just
don't like the looks of the cursors normally used by EDDY, use option /C.


20.4 The Default HELP Screen

Would you prefer to be able to just type "EDDY" rather than "EDDY ." to get a
display of the current default directory without seeing a HELP screen?	If so,
patch EDDY at offset 0000:0008 to any value other than the "*" which is there
in an unmodified copy.


20.5 The Default Option Settings Are All Wrong

Beginning at offset 0000:0009 of EDDY (in an unmodified copy) are the option
letters, in upper case, corresponding to the options described in Section 3.2.
If EDDY finds these upper case letters here, the corresponding options default
to "off" when EDDY is executed.

If you want an option to default to "on", PATCH that option letter to any other
value.	Using the same letter in lower case can help by visually keeping track
of where the option letter is in EDDY, but any value is acceptable.

Similarly, default assignments for the COPY/MOVE controls may be changed (see
Section 10.1).	The values for these controls (in the order they are displayed
by the <A-c> command) are located at offset 0000:0015.	They may be changed to
"Y", "N" or "C".  If set to anything else, they are treated as equal to "C".

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  51



20.6 I Don't Like the Directory Sort Sequence

You can change the sequence used for EDDY's start-up display, and you can tell
EDDY not to change the sort sequence when timestamp filtering is used.


20.6.1 Why Does EDDY Start in Name Sequence?

At offset 0000:001B is a byte which defines the initial sequence for sorting
the directory display.	In an unmodified copy of EDDY, this byte contains "N",
indicating "sort by file NAME".  To get EDDY to use a different initial seq-
uence, PATCH this byte.  Valid codes are D, E, H, N, S and U, as described in
Section 1.2.1.	If you use a capital letter, the display will be in ascending
order.	Lower case indicates sort in descending order.	If the code in this
byte is not valid, "N" is used.


20.6.2 Timestamp Filtering Shouldn't Change the Sequence

If you don't want EDDY to set the sort sequence to date or time when you use
timestamp filtering, change the byte at 0000:001E to anything other than "F".


20.7 <Esc> Should QUIT From EDIT Mode

There seems to be a division of opinion as to whether <Esc> should exit to DOS
from EDIT mode, or only back up to the next higher level (e.g., from LOOK or
PATCH) until EDIT is reached.  Accordingly, this has been made a "customizable"
feature.  If the byte at offset 0000:001D is an upper case "Q", pressing <Esc>
will exit from EDDY, just like <F10>, from EDIT mode.  If this byte contains
any other value, <Esc> in EDIT mode will be ignored (but it will "beep").


20.8 EDDY Doesn't Know How Many Lines My Monitor Has

EDDY determines the number of lines to use from a byte in memory that is set by
the standard PC BIOS.  Some versions of MS-DOS apparently don't maintain this
byte.  If this seems to be your situation (i.e., EDDY doesn't use all the lines
your screen can handle), try PATCHing EDDY at offset 0000:001C with the number
of lines (in hex) that you want to have displayed.  The maximum value for this
byte is 42h (66 lines).  If this byte is zero, EDDY relies on the value
provided by the BIOS.

Setting this byte to a number greater than the monitor can handle has unpredic-
table results.	Using a number less than 25 can be amusing.

This patch should not be used with EGA or VGA monitors.  Screen height is
adjusted in this case by using Option /E.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  52



20.9 Scrolling is Too Fast (Slow?)

EDDY starts auto-scrolling at a rate determined by the scrolling control byte
at offset 0000:001F.  This byte may be set to a value 00h (fastest scrolling)
thru 09h (slowest).  In an unmodified copy of EDDY, it is 03h.	Each increment
will add approximately 1/10 of a second to the delay between successive lines.
The total inter-line delay depends upon the speed of your CPU; it includes the
processing time to create the display for the next line, plus an (n + 1)/10
second delay, where "n" is the value of the scrolling control byte.

If this byte is set to a value greater than 09h, 03h is used.


20.10 LOOK Mode Formatting Commands Need Work

At offset 0000:0020 there are three pairs of bytes that control whether the
bit-stripping, line-wrapping and TAB settings are reset to their default values
at each entry to LOOK mode, and what the default settings should be.

The first two bytes control bit-stripping.  If the byte at 0000:0020 is
anything but "B", then the bit-stripping toggle will be reset to its default
value every time LOOK mode is entered.	If it is "B", the toggle will be left
in its current state until changed by the <b> command.	The byte at 0000:0021
defines the default setting for bit-stripping.	A value of "7" (37h) means
bit-stripping is ON as a default; any other value means OFF.

The next two bytes (0000:0022-0023) control line-wrapping.  A value other than
"L" in the first byte means line-wrapping will be automatically reset to its
default on entry to LOOK, and the second byte defines the default:  "|" (the
DOS "piping" symbol) means line-wrapping ON, and any other value means OFF.

A "T" in byte 0000:0024 means that TAB settings are to be left unchanged.  Any
other value results in the default settings being used at each entry to LOOK
mode. The byte at 0000:0025 specifies the default TAB setting.	Values allowed
are "0" through "8". Any other value is treated as "8".

In an unmodified copy of EDDY, the string at 0000:0020 is "b8llT8", which means
that bit-stripping defaults to OFF and is reset on each entry to LOOK; line-
wrapping defaults to OFF and is also reset; and TAB settings default to "8" and
they are not automatically reset.


20.11 <Tab> is a Lousy Choice for the Hex/ASCII Toggle

If you don't like <Tab>, how about <F9>?  A '9' in byte 0000:0026 tells EDDY to
use <F9> instead.  Any other value has no effect.

When <F9> is used as the toggle, pressing <Tab> in ASCII mode when in PATCH or
FIND enters a Tab character (09 hex).

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  53



20.12 Holding Down <F10> Doesn't Work

When you hold down the key used to QUIT - <F10> or <A-F10> - in order to stay
in 43/50-line mode on an EGA/VGA, on some machines there is no effect.	If you
have this problem, it's probably due to your keyboard's "typematic" (auto-
repeat) action needing a longer delay than the 1/2 second EDDY normally uses.
The delay is controlled by the byte at 0000:0027.  Setting this byte to 0, 1,
2 or 3 tells EDDY to use a delay of 1/4, 1/2, 3/4 or 1 second, respectively.

If you set it to 3 and it still doesn't work, please let me know.


20.13  I'd Rather Use '/' Instead of <A-f> for FIND

If you would rather use a '/' to tell EDDY you want to do a FIND, instead of
the <A-f> command, patch the byte at 0000:0028 to a '/' (any other value has
no effect).  If you do this, </> will work the same as <A-f>.  Normally, if you
type a '/' in EDIT mode, the cursor will move to the date field.  If you use
this patch, however, this quick-positioning feature is disabled.


20.14 Anything But "#" for Error Recovery, Please

You can change the "filler" character, used for error recovery as described in
Section 19.3, to any character you like.  Just patch location 0000:0029.

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  54



21. Distribution and Support

EDDY is distributed as "user supported" software, without charge.  EDDY and
this User's Manual may be copied ad lib provided the author's copyright notice
and disclaimers of warranty are reproduced in full.

The program is supplied as-is.	The author disclaims all warranties, expressed
or implied, including, without limitation, the warranties of merchantability
and the warranties of fitness for any purpose.	Copies of the program may not
be sold for more than the cost of the medium they are copied on, plus
reasonable handling charges.  The total charge may not exceed $10.


21.1 EDDY is NOT Free!

Although EDDY is distributed in this way, it is not free.  After a reasonable
trial period, if you find EDDY to be useful and satisfactory to you, and you
continue to use EDDY, then please consider sending me a usage and registration
fee of $15.00.	It should be mailed to one of the addresses shown below.

This low fee entitles you to technical support as described below, to receive
one free update, subsequent updates at cost of distribution, and to the
satisfaction of knowing you have done "the right thing".

Please send all correspondence to John Scofield, at one of these addresses:

	     Box 47136				1522 W. 5th St.
	     Morrison Hill P.O.      -OR-	San Pedro,CA 90732
	     Hong Kong				USA

When registering, you may use the form provided by PRINTing the ASCII file
"EDDY.REG", or just drop me a line with information such as:

    1. Your name, address and phone number

    2. Version and serial numbers of your copy of EDDY (as shown on the logo
       which is displayed when you exit from EDDY)

    3. Where did you get your copy of EDDY?

    4. Type of hardware you use - computer, monitor and display adapter

    5. Any comments or suggestions


THANKS FOR YOUR SUPPORT!

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  55



21.2 Technical Support

In the unlikely event you (as a registered user) have a problem with EDDY (not
a bug, surely!), if you take the trouble to report it, I'll try to solve it.
And I'll get back to you with a fix, if possible.

EDDY's PATCH command, using an area within EDDY reserved for this purpose,
makes it reasonably easy to fix minor bugs without having to wait for a whole
new version of the program.

With any problem report, please include the following information:

    1. Version and serial numbers of your copy of EDDY (as shown on the logo
       which is displayed when you exit from EDDY)

    2. Type of hardware - computer, monitor and display adapter

    3. Level of MS- or PC-DOS you are using

    4. Any resident programs being used

    5. As complete a description of the problem as possible -
       - what did you enter on the command line?
       - <PrtSc> listings of the screen before and after the problem
       - how was EDDY's output different from what you expected?
       - any other information that seems relevant

    6. Your name, address and phone number

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  56



				  Appendix 1

			       Command Reference


	 <F1>		 HELP
	 <F2>		 UNDO
	 <F3>		 LOOK at file contents/LOOK at directory
	 <F4>		 PATCH
	 <F5>		 COPY
	 <F6>		 MOVE
	 <F7>		 DELETE
	 <F8>		 DESTROY
	 <F9>		 DOS gateway
	 <F10>		 QUIT, return to exit directory if selected

	 <^F2> - <^F8>	 Same as above, for all files

	 <S-F10>	 Select exit directory

	 <A-F3> 	 LOOK at file in target directory
	 <A-F7> 	 Logical DELETE (Ignore)
	 <A-F10>	 QUIT, ignore any exit directory selection

	 <A-a>		 ATTRIBUTE filtering
	 <A-b>		 Timestamp filtering
	 <A-c>		 Copy/Move CONTROL
	 <A-d>		 Sort by file DATE/time
	 <A-e>		 Sort by file EXTENSION
	 <A-f>		 FIND string in file
	 <A-g>		 Assign GLOBAL match character (FIND)
	 <A-h>		 Sort by file time (HOUR/minute)
	 <A-i>		 INVERT display sequence
	 <A-j>
	 <A-k>
	 <A-l>
	 <A-m>		 Set "don't MATCH" byte (FIND)
	 <A-n>		 Sort by file NAME
	 <A-o>		 OPTION settings
	 <A-p>
	 <A-q>
	 <A-r>
	 <A-s>		 Sort by file SIZE
	 <A-t>		 TARGET directory inquiry/change
	 <A-u>		 Leave display UNSORTED
	 <A-v>		 VOLUME labelling
	 <A-w>		 WORKING directory change
	 <A-x>		 eXCHANGE working and target directories
	 <A-y>		 Delete bytes from beginning or end of file (PATCH)
	 <A-z>		 Append ^Z to file (PATCH)

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  57



	 <^f>		 FIND string in all files
	 <^n>		 change attribute on all files to OFF
	 <^w>		 "Where's That File?"
	 <^y>		 change attribute on all files to ON

	 <A-equal>	 Set EDDY's timestamp to date and time of...
			 ...current file or directory
	 <A-minus>	 Undo effect of preceding <A-equal>
	 <=>		 Set file date and time to...
			 ...EDDY's timestamp if <A-equal> previously used...
			 ...otherwise, use current DOS date and time
	 <+>		 Toggle attribute ON/OFF
	 <BS>		 Interrupt repeating command
	 <Tab>		 Toggle hex/ASCII display or data entry format...
			 ...(LOOK, PATCH and FIND)

	 <0>		 TAB characters not expanded (LOOK)
	 <1> - <8>	 TAB characters expand to next "n"-byte boundary (LOOK)

	 <b>		 BIT-stripping toggle (LOOK)
	 <d>		 Move ruler DOWN (LOOK)
	 <f>		 Repeat previous FIND (LOOK)
	 <j>		 JUMP to new position in file (LOOK)
	 <l>		 LINE-wrapping toggle (LOOK)
	 <p>		 Make hex display PRINTABLE (LOOK)
	 <r>		 RULER line display (LOOK)
	 <u>		 Move ruler UP (LOOK)

EDDY 4.02 User's Manual   Copyright (C) 1987,88,89 by John Scofield   page  58



				  Appendix 2

			       Screen Attributes


A screen attribute is a byte defining the color and other characteristics of
data displayed on the screen.  On a color monitor, the first hex digit of a
screen attribute byte specifies the background color, and the second specifies
the foreground (i.e., the letters).

The valid color attribute digits and the colors they produce are:

			 BACKGROUND	     FOREGROUND

			 0 = Black	     0 = Black
			 1 = Blue	     1 = Blue
			 2 = Green	     2 = Green
			 3 = Cyan	     3 = Cyan
			 4 = Red	     4 = Red
			 5 = Magenta	     5 = Magenta
			 6 = Brown	     6 = Brown
			 7 = Light gray      7 = Light gray
					     8 = Dark gray
					     9 = Light blue
					     A = Light green
					     B = Light cyan
					     C = Light red
					     D = Light magenta
					     E = Yellow
					     F = White

For example, EDDY's default screen attributes are 0B, 1B and 1E. These produce:

	0B = Light cyan letters on a black background
	1B = Light cyan letters on a blue background
	1E = Yellow letters on a blue background

If you set the background to a value greater than 7, it blinks.


```
{% endraw %}

## FILE1026.TXT

{% raw %}
```
Disk No: 1026
Program Title: EDDY version 1.06 and TPOP version 3.0
PC-SIG version 1

EDDY (EDit DirectorY) is a utility that lets you edit the elements of a
directory entry.  These elements are filename, date, time, and file
attributes.  The program has commands to COPY a file and MOVE a file, as
well as DELETE and/or DESTROY a file (or files).  Additional commands
are LOOK, to view the contents of a file, and PATCH, to patch the data
in a file.  A provision is made for viewing the directory in HEX or
TEXT, as well as a "bit-stripping" feature for Wordstar-like  files
(text mode only).  A single keystroke inserts the current date and time
into any directory entry.  Changes made to directory entries are not
written to disk until the user chooses to do so, this lets you make and
review changes without their being permanent.  EDDY has extensive help,
which can be called at any time by pressing <F1>.  HELP includes all of
the basic information needed to use EDDY.

TPOP is a memory-resident printer utility that pops up over any
application.  TPOP lets you use your printer directly as a typewriter,
or you can edit a full screen of text.  While editing, you can mark
blocks of text to send to the printer.  The left margin of the text is
located wherever the print head is positioned before printing, this lets
you line up the printer for envelopes and labels.  Control codes can be
sent to the printer by typing a backslash, followed by the three-digit
number.  You can direct the output from TPOP to any port (parallel or
serial -- LPT1, LPT2, LPT3, COM1, or COM2), and you can permanently swap
the addresses of printer ports.

Usage:  Home Business/Printer Utility.

Special Requirements:  A hard disk and a printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for EDDY and $10.00 for TPOP.

File Descriptions:

-------- ---  EDDY
EDDY     COM  Main program.
EDDY     DOC  Documentation file.
EDDY     HLP  Help file.
EDDY     HST  Text file.
EDDY     REG  Registration form.
EDDY     WHY  Text file.
EDDYREAD ME   Brief description.
-------- ---  TPOP
README   DOC  Documentation.
TPOP     COM  Memory-resident program.

PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk No 1026 EDDY, TPOP  >>>>                   ║
╟─────────────────────────────────────────────────────────────────────────╢
║ To print the documentation for this disk, type:                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║ To run the program EDDY, Type: EDDY (press enter)                       ║
║                                                                         ║
║ To run the program TPOP, Type: TPOP (press enter)                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
7/11/87

Greetings!

This is Version 3.0 of TPOP, the printer control program.

TPOP has the following capabilities:

* Pops up over any application. (Press alt/p) 

* Allows you to use your printer as a typewriter.  Just type at the
  initial screen.

* Allows you to send control codes to your printer.  From the initial
  screen, just type a backslash (\), followed by the three digit number
  which represents the decimal equivalent of your control code.  \027 =
  ESCAPE, condensed mode on my Okidata ML 92 can be activated by \029.

  One thing to keep in mind is that complicated control code sequences
  can be recorded in a keyboard macro utility (I use Superkey) and then
  played back through TPOP.  Just call up TPOP over your application and
  then press the key sequence on which you have recorded the control
  sequence.

* Allows you to direct the output from TPOP to any port (parallel or
  serial - LPT1, LPT2, LPT3, COM1, or COM2).  Press ALT/F1, F2, or F3
  for LPT1, LPT2, or LPT3.  Press CTRL/F1 or CTRL/F2 for COM1 or COM2.
  This re-direction applies only to output from the TPOP program.

* Allows you to permanently swap the addresses of printer ports (F7).
  This capability is great for those people who have more than one
  printer (like me).  Usually these people have a letter quality and a
  dot matrix printer and would like to swap between them whenever they
  want without having to return to the DOS prompt.  This is a big
  benefit of having resident program like TPOP to do this for you.

  The "port swap" screen provides a printer description.  You may want
  to put descriptive gummed labels on your printers (i.e. Parallel 1,
  Serial 1, etc.) to keep track of which port is which after you've
  swapped them a few times.  Or if you want to get fancy, use DEBUG to
  patch TPOP.COM, changing the string "Parallel Port 1" to "Okidate ML
  92" or the name for whatever printer you own. Anyway, it's easy to
  determine which printer is at which address by simply typing a
  carriage return at the initial screen and watching to see which
  printer reacts.

* Allows you to edit a screen full of text, then mark off sections of
  the text using the cursor keys and send the marked block to the
  printer (F8).  Note that the left margin for printing is wherever the
  print head of the printer happens to be before printing starts.  This
  allows you to print an address on an envelope by simply positioning
  the print head anywhere on your envelope. This capability is also good
  for printing on label forms.  Just type your text on the screen, then
  mark off six lines, line your label up at the printer head, then print
  (F8).  (Sounds more complicated than it really is.)

  Several editing keys are available in this mini-editor:

    The cursor keys, the backspace key, HOME, END, DEL, INS,
      and the return key.

    CTRL/left and CTRL/right advance to the next word.

The resident portion of TPOP takes up 11,185 bytes (10.9 K).  It was
developed with version 4.0 of the Microsoft Macro Assembler and with the
Periscope debugger. (both great products)


You don't need to read all of this before starting.  Just try TPOP.  I
hope you find it useful.  If you do, send ten dollars to register your
copy.  Then you'll be on my list and I'll notify you when the next
version of this handy utility is available.


Sincerely, 



Big John


Big John Software
70 Key Street
Millis, Massachusetts 02054


DISCLAIMER

Big John Software makes no representations or warranties, either
expressed or implied, with respect to the adequacy of this documentation
or the programs which it describes in regard to merchantibility or
fitness for any particular purpose or with respect to its adequacy to
produce any particular result.  The computer programs and documentation
are sold "as is," and the entire risk as to quality and performance is
with the buyer.  In no event shall Big John Software be liable for
special, direct, indirect or consequential damages resulting from any
defect in the programs, documentation, or software.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1026

     Volume in drive A has no label
     Directory of A:\

    EDDY     COM     47495   2-22-89   3:16a
    EDDY     DOC    139297   2-22-89   4:01a
    EDDY     HLP     39525   2-22-89   2:57a
    EDDY     HST     29814   2-22-89   3:40a
    EDDY     REG       806   7-12-88   1:14a
    EDDY     WHY      3604   2-22-89   4:02a
    EDDYREAD ME       4239   2-22-89   4:19a
    FILE1026 TXT      2328   3-09-89   9:22a
    GO       BAT        38  12-09-87   4:29p
    GO       TXT       771   3-02-89  10:56a
    MANUAL   BAT       147   3-02-89  10:57a
    README   DOC      4189   7-11-87  10:45a
    TPOP     COM     11552   9-27-86   9:06a
           13 file(s)     283805 bytes
                           29696 bytes free
