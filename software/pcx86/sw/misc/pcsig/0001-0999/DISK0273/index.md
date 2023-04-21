---
layout: page
title: "PC-SIG Diskette Library (Disk #273)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0273/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0273"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BEST UTILITIES"

    The programs here are a collection of some of our most popular
    utilities gathered from other disks in our library. Some of the high
    points include: a DOS command editor that remembers your last 15 DOS
    commands executed, a couple of selective copy-and-delete utilities to
    perform mass-file functions with ease and confidence, and utilities to
    let you BROWSE text files in a much easier manner than your DOS TYPE
    command.
    File Descriptions:
    
    BACKSCRL COM  Retrieve what has scrolled off screen top -- very useful.
    BROWSE   COM  Browse through text files of any size.
    BACKSCRL DOC  Documentation for BACKSCRL.COM.
    MEMBRAIN EXE  Flexible RAMdisk.
    MEMBRAIN DOC  Documentation for MEMBRAIN.EXE.
    GDEL     EXE  Selective delete utility.
    GDEL     DOC  Documentation for GDEL.EXE.
    GCOPY    EXE  Selective copy -- changes date to current.
    GCOPY    DOC  Documentation for GCOPY.EXE.
    FILEDUMP COM  Display disk sectors on screen.
    BROWSE   DOC  Documentation for BROWSE.DOC.
    MOVE     COM  Flexible copy, copy-and-erase utility with prompts.
    NDOSEDIT COM  DOS line editor, adapted from VMS.
    MOVE     DOC  Documentation for MOVE.COM.
    SP       DOC  Documentation for SP.EXE.
    SDIR24C  DOC  Documentation for SDIR24C.COM.
    SDIR24C  COM  Flexible screen directory display -- many options.
    NDOSEDIT DOC  Documentation for NDOSEDIT.COM.
    SP       EXE  Super spooler program -- variable size.
    ST       COM  Super type command -- 2-way scrolling.
    ST       DOC  Documentation for ST.COM.
    VDEL     COM  Selective delete utility -- prompts to delete each file.
    WHEREIS  DOC  Documentation for WHEREIS.COM.
    WHEREIS  COM  Find a file in any subdirectory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BACKSCRL.DOC

{% raw %}
```
        ---------------------------------------------------             
                      Back Scroll! Version 6.4
        ---------------------------------------------------

               A Bi-directional Scrolling Utility for 
                     the IBM Personal Computer
 
                     By Karlton & Kendrick Kam 

    Copyright (c) 1983 by The Kampro Group. All rights reserved.



     Back Scroll!, a product of The Kampro Group, is currently
distributed as User Supported Software.  With a few restrictions, 
this allows Back Scroll!, although copyrighted, to be freely copied 
and distributed.

     First, this product must be copied and distributed as a 
complete package.  This includes both the Back Scroll! program 
(BACKSCRL.COM) and this documentation file (BACKSCRL.DOC).      

     Second, Back Scroll! is copyrighted and may not be distributed 
if altered or modified in any way. 

     Third, no fee is to be charged for copying or distributing
Back Scroll! without the written permission of The Kampro Group.

     In short, Back Scroll! may be copied and distributed to 
anyone who wishes it as long as it is a complete unmodified
package including the program and documentation and no fee is 
charged. In turn, The Kampro Group is requesting a  small 
contribution. About $20.00 is suggested but please contribute 
whatever you feel Back Scroll! is worth. Your contributions will
help offset development costs by The Kampro Group and thus assure 
future updates and products. Also, registered users of Back Scroll 
will be placed on a mailing list for future notification. Even if 
you don't feel that Back Scroll! merits a contribution, please 
continue to copy and share this program with others. 

     The Kampro Group welcomes any ideas and suggestions for future
versions and will appreciate any comments regarding Back Scroll! or
any of its software. 


                                  The Kampro Group
                                  Post Office Box 90654
                                  Honolulu, Hawaii  96835



Introduction:
-------------

     Back Scroll! is a bi-directional scrolling utility. 
Once activated, Back Scroll! will buffer the screen scrolling
so that the user may recall, with a few simple keystrokes, data 
that has previously been scrolled off the screen .  The user 
may either scroll by line or by page through Back Scroll!'s 
buffer. In addition, Back Scroll!'s printer commands allow the 
user to select and print any data that is currently in the buffer.

     When Back Scroll! is loaded, it becomes an extension to DOS 
and from then on will be transparent to the user and most programs.
The activation of Back Scroll!, once loaded, can be done at any 
time without any danger to the current operation. When entering 
and exiting Back Scroll!, the current display screen will be
saved and restored so that the user may continue without any 
interference.    

Note: Back Scroll! will only support the eighty column text display
mode of either the color or monochrome display card. Unpredictable 
results may occur when Back Scroll! is toggled while in either the 
forty column mode or in any graphics mode.  



Installation:
-------------

     When using Back Scroll!, one must remember that since the 
screen scrolling must be buffered in memory, a certain amount 
must be set aside for it. Specifically, Back Scroll! when loaded 
and running, requires approximately 6700 bytes of memory. Another 
2000 bytes are needed per screen of buffer. It is the screen 
buffer memory that will take the most memory and if you are not 
careful, may cause some problems in systems with minimal memory.
The maximum number of screens is set at 28 or about 56000 bytes. 
Back Scroll! will default to 4 screens, or 8000 bytes, plus 6700
more for the program itself for a total overhead of about 14700
bytes. 

     The installation of Back Scroll! is simple in that the program
only needs to be copied onto a working disk.  Once installed the
program is called as follows:
   

                   BACKSCRL,Parm1,Parm2 

     
     Where "Parm1" may be substituted with a number between 1 and 28
to specify the number of screen pages. Remember, Back Scroll! will 
take up between 8000 and 58000 bytes of system memory depending on
the amount chosen. Again, the default is set at 4 screen pages or 
about 14700 bytes of memory.

     "parm2" may be substituted with a number between 1 and 25 and 
will specify the numbers of lines Back Scroll! will page up and down
through its buffer. The default is set at 25 lines or a full screen 
but you may wish to change it.

    
     		
Operations:
-----------

     The operation of Back Scroll! is easy and can be done in a 
few simple steps. 

First, Back Scroll! must be called with the proper parameters.
This can be done by entering this command at the DOS prompt:

                   BACKSCRL,parm1,parm2

And depressing the return key.

If no parameters are given, Back Scroll! will create a 4 screen 
buffer with a 25 line page up and page down rate. The size of 
Back Scroll! will be about 14700 bytes long but may be changed as 
noted in the installation section by simply specifying the parameters.

Once Back Scroll! is loaded, you will be returned to the DOS prompt.
Except for a reduction in system memory, you may then continue using 
your computer normally. 

Second, now that Back Scroll! is an extension of DOS, it may be
called up while in any program. The commands for doing this are
as follows:

Control + Space Bar: These two keys are used to toggle into Back Scroll!.
                     To avoid interfering with the current program,
		     the keyboard will respond normally until these
                     keys are pressed.  Once in Back Scroll!, The current
                     operation is suspended and the display screen is
                     saved. 

Control + Return:    Pressing these two keys simultaneously will 
                     "take a picture" of the current screen.
                     This can be done at any time and will move the 
                     entire screen into the buffer and then return the 
                     user to the current task.

The following keys must be used after the "Control + Space Bar"
sequence:

Home:              This key will move the cursor up one line in the
                   buffer. If the cursor is at the top of the screen, 
                   the screen will be scrolled down one row and the 
                   top line displayed on the screen from the buffer.

End:               This is the opposite of the above key. The cursor is
                   moved down or the screen is scroll up then a line
                   from the buffer displayed.   

Cursor Up:         This is used to scroll up the buffer. The screen 
                   will be scrolled while leaving the cursor in its
		   current position on the screen.
 
Cursor Down:       Same as the above command except that the buffer
                   is scrolled down.

Page Up:           This key will allow the buffer to be scrolled
                   up at between 1 and 25 lines at a time. The 
                   actual number of lines is selected when Back
                   Scroll! is loaded.

Page Down:         Same as the above key except that the buffer is
                   "paged" down instead.    

Minus (-):         This is the grey minus key on the right side of the
                   keyboard.  After positioning the cursor, pressing
		   this key will mark the beginning of the buffer to
		   be printed.

Plus (+):          This is the grey plus key on the right side of the
		   keyboard.  Pressing this key marks the end of the
		   buffer to be printed at the current cursor position.

PrtSc:             This will cause the marked buffer to be printed
                   to line printer 1. This command can be aborted
                   at any time by hitting any key.

Space Bar          Either of these keys will exit Back Scroll!.  The
or Return:         currently saved screen is restored and the
                   suspended operation is continued. Once out of
                   Back Scroll!, it can be easily called up at 
                   anytime again by using the "Control + Space Bar"
                   sequence.
      
     While using Back Scroll!, a number will appear in the upper 
right corner of the screen. This is a counter and it starts from
the last line that was saved into the buffer. This number will
change as the user moves around the buffer and serves as a guide
to the current location.



Customization
-------------

     Back Scroll! customization notes are available to any who wishes
by sending a self addressed stamped envelope to The Kampro Group.
With these notes, the keys used to enter and exit Back Scroll! can be 
modified to any combination of Control, Alternate, or Shift key
sequences. This may in some cases make Back Scroll! easier to use.

     These notes also allow other defaults to be changed such as the 
printer port, type of screen paging (fast or slow), beginning cursor
position, speed of scrolling, as well as  the  default  buffer  and
paging size. A "Do First" command may also be invoked which will allow 
a keyboard input to be automatically done upon entering Back Scroll!. 
This command, for example, can be set to automatically do a page down 
whenever Back Scroll! is entered.   



Warning:
--------

     To avoid disk drive errors, activation of Back Scroll! during
disk operations is not recommended. 



Suggestions:
------------

     Back Scroll! will be erased whenever a "Control Alt Delete"
sequence is done. It is recommended that Back Scroll! be put in an
autoexecute batch file so that it may be activated at any time
the system is running.  Back Scroll! should be the first program 
called from the autoexec batch file.

     Back Scroll! is especially useful with communications packages.
It successfully overcomes the limitation of the 25 line screen and
will allow the user to review large amounts of data easily although 
still at only 25 lines at a time.
  
     While in basic, Back Scroll! will automatically save the entire
screen into the buffer whenever a clear screen command (CLS) is given.
This is especially useful with programs that do not scroll but clear
the screen instead as the preceding screen displays can easily be 
recalled.

     When using a spread sheet or word processor that does not scroll
or clear the screen, Back Scroll! may be used to "take pictures"
of important data that can be recalled almost instantly for quick 
reference.  This can be done at any time with the "Control Return" 
sequence.
     		
     Remember, Back Scroll! has the ability to mark and print any 
data that is already in its buffer. This is useful if you wish
to print just parts of a screen or more that one screen of data.

     Since Back Scroll! can be toggled into at any time, this in 
turn will pause the execution of any program at any point.  This 
can be useful in many cases such as during rapid screen output.

     If  Back Scroll!  happens to  conflict  with a program, the 
customization notes mentioned above may resolve the problem if it 
is due to either the keyboard or video section. The Kampro Group 
is open to suggestions and would like to know of any incompatibilities
with software so that it can be worked out in future versions.  
 	


Disclaimer:
-----------

     Back Scroll! is being distributed without warranty on an
"as is" basis. The Kampro Group and/or any of its authors shall
not be held liable for any loss or damage caused directly or 
indirectly by this program or any program by The Kampro Group.
         


```
{% endraw %}

## BROWSE.DOC

{% raw %}
```
                           BROWSE.COM

     Usage: At the DOS prompt, type BROWSE filespec.

     Browse is very similar to the VM/CMS browse command.  It 
allows full screen viewing of any file.  Use the arrow keys to 
scroll up, down, left and right.  Home takes you to the top left 
corner of the file, End goes to the bottom left.  Press Esc to 
exit browse.

     Note: Browse is not an editor.  It can only be used to VIEW 
a file, not change it.

```
{% endraw %}

## FILES273.TXT

{% raw %}
```
Disk No  273
Program Title: BEST UTILITIES
PC-SIG version 1.5
 
    The programs on this disk comprise a collection of some of our most
popular utilities gathered from other disks in our library. Some of the
high points include a couple of screen/type handlers, to let you pick the
one you like best,and a couple of selective copy-and-delete utilities
to perform mass-file functions with ease and confidence.
 
Usage: Beginner-Advanced System-Enhancement Tools
 
System Requirements: 64K of memory and one disk drive.
 
How to Start: To run a COM or EXE program, type its name and press ENTER.
To read DOC files, enter TYPE FILENAME.EXT and press ENTER.
 
Suggested Registration: BACKSCRL $20.00, and SP $15.00
 
User Comments: "Lots of good stuff here. I had collected most of this
from other sources but still found it worth the money just for NDOSEDIT."
"BACKSCRL is excellent."BROWSE is 200% better than the type function in
DOS and easy to use. Just wish it was memory resident.
 
File Descriptions:
 
BACKSCRL COM  Retrieve what has scrolled off top of screen - very useful.
BACKSCRL DOC  Documentation for BACKSCRL.COM.
BROWSE   COM  Browse through text files of any size.
BROWSE   DOC  Documentation for BROWSE.DOC.
FILEDUMP COM  Display disk sectors on screen.
GCOPY    DOC  Documentation for GCOPY.EXE.
GCOPY    EXE  Selective copy - changes date to current.
GDEL     DOC  Documentation for GDEL.EXE.
GDEL     EXE  Selective delete utility.
MEMBRAIN DOC  Documentation for MEMBRAIN.EXE.
MEMBRAIN EXE  Flexible RAMdisk.
MOVE     COM  Flexible copy, copy-and-erase utility with prompts.
MOVE     DOC  Documentation for MOVE.COM.
NDOSEDIT COM  DOS line editor, adapted from VMS.
NDOSEDIT DOC  Documentation for NDOSEDIT.COM.
SDIR24C  COM  Flexible screen directory display - many options.
SDIR24C  DOC  Documentation for SDIR24C.COM.
SP       DOC  Documentation for SP.EXE.
SP       EXE  Super spooler program - variable size.
ST       COM  Super type command - 2-way scrolling.
ST       DOC  Documentation for ST.COM.
VDEL     COM  Selective delete utility - prompts to delete each file.
WHEREIS  COM  Find a file in any subdirectory.
WHEREIS  DOC  Documentation for WHEREIS.COM.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## MOVE.DOC

{% raw %}
```
		      MOVE

MOVE is sort of a cross between COPY and VDEL.
PC DOS version 2.00 or greater is required.
Options may be preceded by "/" or by " -".

Version 1.1 cleans up after a full-disk error and optionally
allow the user to change the target disk.

The following is produced by entering MOVE > MOVE.DOC --

	[MOVE Version 1.1]
	The MOVE utility is a COPY which prompts at each file.

	Syntax:
	  MOVE [SourceDir]FileSpec [TargetDir] [OptionList]

	OptionsList:
	  /Erase  -Erase  Erase each file after successful copy.
	  /Terse  -Terse  Suppress version message, instructions.
	  /Yes	  -Yes	  Automatic "Yes" response to each query.
	  /Change -Change Allow changing target disk on Full Disk.
			  [source and target disks must be different]

	Public Domain 1984,1987 by Lewis Haupt
	Box 25363, Houston, Texas  77265

Examples --
	-- Copy using full directory specifications.
	C> MOVE C:\DIRA\*.* C:\DIRB:

	[MOVE Version 1.1]
	Press Y to copy, N to skip, ESC to stop.

		Copy ABCD.DOC? Yes
		Copy EDGHI.DOC? No
		Copy JKL.DOC? Yes
		Copy MNOP.DOC? Stop

	-- Copy from A: to current disk and directory.
	-- Delete each file after it's moved.

	C> MOVE A:*.* /E
	[MOVE Version 1.1]
	Press Y to copy, N to skip, ESC to stop.

		Copy and erase ABCD.DOC? Yes
		Copy and erase EDGHI.DOC? No
		Copy and erase JKL.DOC? Yes
		Copy and erase MNOP.DOC? Stop

```
{% endraw %}

## SP.DOC

{% raw %}
```

                        SP: A PRINT SPOOLER
                    for the IBM Personal Computer
                            Version 3.79

                      Copyright Alan Jones 1983
                         3717 Wildwood Drive
                          Endwell, NY 13760
                           (607) 754-2339
                           June 27, 1984



SP is a software printer buffer to hold data intended for the printer.
It works like the buffers that can be installed in the printer but the
data is stored in RAM storage instead of in the printer.  The buffer
is unloaded to the printer at the printer's speed while DOS proceeds
at its speed.  The size of the buffer is specified as a parameter when
SP is invoked.  For example,

            SP 14

will produce a buffer of 14KB (1KB = 1024 bytes).

The complete syntax is:

     SP [ss] [C=cc] [P=pp]

where:

        ss: size of buffer in kilobytes.  One kilobyte = 1024 bytes.
            Maximum size is 62 KB.

        cc: number of copies desired.  Default: 1.

        pp: printer port desired (1, 2, or 3).  Default: 1.

NOTE:  You do not type the square brackets.  They merely indicate that the
contents are optional.  For example, if you want to use printer port 2 with
a buffer size of 20 KB, you would enter:

        SP 20 P=2

If you want to keep the previous buffer and only change the number of
copies to 3 copies, enter:

        SP C=3

For the "C" and "P" you can enter either upper or lower case characters.

If the size parameter is omitted, a default buffer of 16KB is used.

The program will work for all work sent to the printer whether it is from
the DOS TYPE command, a PrtSc command, a BASIC LLIST or LPRINT command, a
print command from The Personal Editor, etc.


TO STOP PRINTING

If you start a printout and decide you don't want it, press,
simultaneously, Alt-LeftShift-PrtSc to flush the buffer.  You can also
flush the buffer by turning the printer off and then back on.



TO PAUSE

If you want the printing to pause, hold down the ON LINE button until the
printer stops (which it will do at the end of a line).  Pressing the ON
LINE button again will allow printing to resume with no loss of data.


CHANGING BUFFER SIZE

You can remove SP from the machine by specifying a buffer of zero.  That
is:

      SP 0


will return DOS to its original state unless another DOS extension is
installed after SP.  You can then re-install SP at the new size, for
example:

      SP 45



MULTIPLE COPIES

To create multiple copies of a document, you must indicate to SP where the
beginning and end of the document is.  To indicate the beginning of a
document press Alt-LeftShift-B.  To indicate the end of a document press
Alt-LeftShift-E.  Of course, if you have indicated only one copy, that is
all you will get.  You can press the END indication when SP has gobbled up
the text.  You don't have to wait until the first copy is printed.

One nice way of using the multiple copies is after the fact.  That is, if
you just printed a document and decide you'd like another copy, from DOS
indicate the TOTAL number of copies you want (2 or more) and then invoke
the END indication.  SP will determine that one copy has already been
printed and proceed to print the rest according to the quantity specified.

You have to be a bit careful.  Once you indicate the beginning of a
document (Alt-LeftShift-B) that remains the beginning until you change it.
If you print multiple copies of something and then send something else to
the printer and again indicate the END, you will get a document from the
most recent BEGIN.  This may or may not be what you want.


MULTIPLE PRINTERS

SP can support more than one printer.  When you invoke SP it creates a
buffer for the specified printer.  If you do not specify one, it will
create a buffer for LPT1.  You can then re-invoke SP specifying another
printer and a new buffer will be created.  From then on, the data going to
the printer will enter the appropriate buffer and be printed on the
appropriate printer.  When you give keyboard commands, SP does not know
which printer to which they apply so it uses them for all.  That is, if you
flush the buffer (Alt-LeftShift-PrtSc), all buffers will be flushed.  If
you indicate the end of a document, this will apply to all buffers.



CAVEATS:

When using SP in some environments, such as with a word processor, there
may be commands that allow you to stop the printer.  However, when SP is
present, the program will be way ahead of the printer and will only stop
sending data to the buffer.  In cases like this, turn off the printer and
then turn back on again to stop printing.


OPERATING ENVIRONMENTS

SP has been tested in the following environments:

   PrtSc command                   WordStar
   DOS TYPE to printer             EasyWriter 1.1
   BASIC LLIST                     VisiCalc
   BASIC LPRINT                    With Communications
   BASIC PRINT#                    The Personal Editor
   Lotus 1-2-3                     Multiplan
   PC-FILE                         PC-TALK

And with many, many printers on the parallel port.  Note, SP will not work
properly with a printer on the communications (serial) port.



AVAILABILITY

Available from Alan Jones under the "user supported software" concept.
See below.

COPYING

SP can be copied onto one of your own diskettes for use on your machine.
In fact we recommend including it in your AUTOEXEC so that it is always
invoked.

DISCLAIMER.

In no event will the Author be liable to you for any damages, including any
lost profits, lost savings or other incidental or consequential damages
arising out of the use of or inability to use these programs, even if the
Author has been advised of the possibility of such damages, or for any
claim by any other party.

PERMISSION TO COPY:

Clubs and other non-profit organizations are granted permission by the
author to freely copy these programs and documentation and share it with
their members, so long as:

1.  No price is charged for the software or documentation.  However, a
    distribution cost may be charged for the cost of the diskette, so long
    as it is not more than $10 total.

2.  Club members are informed of the user-supported concept and encouraged
    to support it with their donations.

3.  The program or documentation are not modified in any way and are
    distributed together.


THE USER-SUPPORTED CONCEPT.

                        User-Supported Software
       If you are using this program and find it to be of value
                your contribution will be appreciated.
                          ($15 is suggested)

                            Alan Jones
                         3717 Wildwood Drive
                          Endwell, NY 13760

            Regardless of whether you make a contribution,
          you are encouraged to copy and share this program.



User-supported software is an experiment in distributing computer
programs, based on these beliefs:

1.  That the value and utility of software is best assessed by the
    user on his/her own system.

2.  That the creation of personal computer software can and should
    be supported by the computing community.

3.  That copying of programs should be encouraged, rather than
    restricted.

Anyone may request a copy of a user-supported program by sending a blank,
formatted disk to the author of the program.  An addressed, postage-paid
return mailer must accompany the disk (no exceptions, please).  A copy of
the program, with documentation on the disk, will be sent by return mail.
The program will carry a notice suggesting a contribution to the program's
author.  Making a contribution is completely voluntary on the part of each
user.

Free distribution of software and voluntary payment for its use eliminates
costs for advertising and copy protection schemes.

Users obtain quality software at reduced cost.  They can try it out before
buying, and do so at their own pace and in the comfort of their own home or
office.  The best programs will survive, based purely on their quality and
usefulness.

Please join the experiment.

If you believe in these ideals, your contribution is solicited to help make
them work.

Many of you have written requesting an invoice so that you could initiate
payment through your company accounting system.  The following invoice is
provided for those of you in this category, or for those who wish an
invoice for your tax records.  Perhaps it will serve the purpose.



                       --------------------
                              INVOICE
                       --------------------




   Purchased from:
       ALAN JONES
       3717 Wildwood Drive
       Endwell, NY 13760


  DATE:     /     /                           Invoice No. 314159
  --------------------------------------------------------------
                                       PRICE     PRICE
  PRODUCT                    QTY       EACH      EXTENDED
  -------------------------  ---       -----     --------

  SP: A Print Spooler
    program and
    documentation             1         $15         $15






                                      SALES TAX      0

                          --------------------------------------
                          PLEASE PAY THIS AMOUNT    $15    TOTAL
  --------------------------------------------------------------



Please make check payable to :ALAN JONES


You may retain this Invoice
for your tax records.



```
{% endraw %}

## ST.DOC

{% raw %}
```

ST -- the SuperTyper program -- an improved version of the DOS type command.

This program provides three significant enhancements to the type command:

 1) the display is paged, not scrolled, and thus is much easier to read.

 2) Previously displayed pages are saved and can be accessed by use of the 
    PgUp and PgDn keys.

 3) Wordstar's 'funny' characters are converted to normal display characters.
    (as all WordStar users know, 'type'ing a WordStar file creates a strange
     display)

Directions:
Type ST for directions and to be prompted for a filename to be listed.
Type ST <filename> to list a file.
PgUp and PgDn move through the display pages in the file.
The '+' toggles the display of page number in each page.  This display 
is convenient for keeping your place in big files -- especially files 
that are bigger than memory and only part of the file can be kept in memory.
This display is normally off, it is toggled on when "buffer wrap-around"
occurs.  If it bugs you, hit the '+' key and turn it off.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0273

     Volume in drive A has no label
     Directory of A:\

    BACKSCRL COM      6395   1-22-84   9:39p
    BACKSCRL DOC     12032   1-25-84   8:49p
    BROWSE   COM      2848   4-09-84  10:11a
    BROWSE   DOC       466   1-01-80  12:20a
    FILEDUMP COM      1408  10-23-83  12:18a
    FILES273 TXT      2344   9-28-87   4:15p
    GCOPY    DOC      1024   1-01-80  12:25a
    GCOPY    EXE     14336   1-01-80  12:25a
    GDEL     DOC      1024   3-26-84   9:09p
    GDEL     EXE     13312   3-26-84   9:09p
    GO       BAT        38   9-25-87   1:59p
    GO       TXT      1387   9-25-87   1:59p
    MEMBRAIN DOC      4096   6-12-84   5:48p
    MEMBRAIN EXE      3584   6-12-84   5:46p
    MOVE     COM      2499   1-15-87   3:20p
    MOVE     DOC      1405   1-15-87   3:15p
    NDOSEDIT COM      2560   6-08-84   1:13p
    NDOSEDIT DOC      5632   6-08-84   1:12p
    SDIR24C  COM      2304  12-11-83   4:23a
    SDIR24C  DOC      1536  12-11-83   4:22a
    SP       DOC      9764   6-27-84   9:09p
    SP       EXE      3840   6-27-84   9:53p
    ST       COM     14336   2-03-84   2:43a
    ST       DOC      1152   2-03-84   2:44a
    VDEL     COM       768   1-01-80  12:20a
    WHEREIS  COM       512   1-08-84   4:55a
    WHEREIS  DOC      1024   1-08-84   4:56a
           27 file(s)     111626 bytes
                           45056 bytes free
