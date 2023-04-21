---
layout: page
title: "PC-SIG Diskette Library (Disk #347)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0347/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0347"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-FOIL"

    PC-FOIL consists of two routines - FOIL-EDIT and PC-FOIL.  These
    programs combine to provide a multi- purpose tool for the creation of
    overhead transparencies and attractive documents.
    
    When the large print, bold print, and boxes are combined with your own
    creativity and agenda, the effect can be dramatic.  You develop the
    presentation or document using FOIL-EDIT, a general purpose full-screen
    editor, and then print it.  Use it as a word processor, creating
    programs or modifying standard DOS files.  Fast and easy to use, it
    offers both menus and commands appropriate to your skill level.
    Complete with on-line Help.
    
    You have the information you want to present.  Now, here's the program
    that can do it!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES347.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 347  PC-FOIL                                            v1   DS
------------------------------------------------------------------------
 
This program makes it easy to generate and edit displays that combine
words with simple diagrams.The editor included in this package is a full
screen editor that uses not only the full screen top to bottom but left
to right as well.This allows you to move the cursor any where on the
screen regardless of where end of line markers are at.If your word
processing needs more than just words this disk is for you.
 
E        BAT  Type E <filename> instead of FOILEDIT <filename>
F        BAT  Type F <filename> instead of PC-FOIL <filename>
FOIL     LET  Font to let printer print large letters
FOILEDIT EXE  Main full screen editor program
FOILEDIT HLP  Help screens for editor
PC-FOIL  DOC  Instructions on how to print manual
PC-FOIL  EXE  Main presentation program
PC-FOIL  FOI  PC-FOIL program to display or print manual
PC-FOIL  HLP  Help screens for PC-FOIL and FOILEDIT
PC-FOIL1 FOI  Manual for FOILEDIT and PC-FOIL programs
PC-FOIL2 FOI          "               "
PC-FOIL3 FOI          "               "
PC-FOIL4 FOI          "               "
PC-FOIL5 FOI          "               "
PROFILE  DEF  Easy to set up default parameters for output,line widths, ect.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG Inc.
```
{% endraw %}

## PC-FOIL.DOC

{% raw %}
```
******************************************
*BASIC PC-FOIL AND FOILEDIT DOCUMENTATION*
******************************************

 To print this file issue the following commands:
 (press Ctrl-PrtSc) (This turns the printer on)
 A>TYPE B:PC-FOIL.DOC  (assuming you put it in drive B:)

PC-FOIL and its companion program FOIL-EDIT combine to provide a
multi-purpose tool for preparation of a complete presentation or
document on the IBM Personal Computer.  It allows you to make
effective use of the printer to graphically emphasize your thoughts
and ideas.  Key points can be highlighted.

PC-FOIL may be used to make overhead transparencies (FOILS) or to
create attractive documents.  When you combine the large print, the
big bold print, and the boxes with your creativity, the effect can
be dramatic.  You simply develop the presentation or document using
FOIL-EDIT, then print it using PC-FOIL.  This User's Guide is an example
of the type of document PC-FOIL can produce.

PC-FOIL can improve your productivity initially and when making
changes.  To make minor changes to the document or presentation,
simply crank up the PC, make the minor change using the FOIL-EDIT
full screen editor and then print out only the page(s) that
contains the change.

FOIL-EDIT is an excellent general purpose full-screen editor.
You can use it for creating programs, as a word processor, or for
just modifying any standard DOS file that you have, such as BAT
files or data base files.  It is fast and easy to use.  It offers
both menus and commands depending upon your skill level.  The
on-line help facility allows you to get help at any time without
losing your place.

PC-FOIL can been used for any general purpose documentation.  It
can and has been used for instruction manuals, user's guides,
operational instructions, management reports, program
documentation, mailing labels, name tags, stick-on labels and many
other documents.  If you make presentations or prepare documents
regularly, then PC-FOIL can be of assistance to you.

PC-FOIL requires a 128K or larger IBM Personal Computer with one or
two disk drives and an 80 character color or monochrome monitor.
PC-FOIL requires an IBM or compatible printer.  It can be a regular
matrix printer or a graphics printer but requires the graphics
printer if using the large block lettering.  It has been tested and
works with DOS Rel 1.1 and DOS Rel 2.0.  The hard disk is supported.
It has also been tested on a 128K PCjr and an IBM 3270 PC.

***************************
* USER SUPPORTED SOFTWARE *
***************************

PC-FOIL and FOIL-EDIT are distributed as user supported software.
User supported software is based upon a concept of allowing you to
try out the program prior to paying for it.  It is not copy
protected and you may give it to anyone you like.  The following
message will be displayed each time you exit the program.

   ************************************************************
   * If you are using the program and find it to be of value  *
   * you are encouraged to contribute $25 to the authors.     *
   ************************************************************
         *********************************************
         *  Don Logan          *   Wally Anderson    *     
         *  1863 Oxborough Ct  *   3000 Cleburne     *     
         *  Chesterfield       *   N. Little Rock    *     
         *  MO 63017           *   AR 72116          *     
         *********************************************
                                                           
Diskette requests and contributions should be mailed to Wally
Anderson.  To receive your copy, please send 2 single sided
diskettes and a stamped and addressed return envelope to Wally
Anderson.  Program defects and suggestions should be mailed to
Don Logan.  

Regardless of whether you make a contribution, you are encouraged
to copy and share this program with others as long as you do not
modify it in any way nor distribute the program for profit.
Please distribute it in the distribution format that includes
the documentation.  This program distribution is based upon the
FREEWARE concept but is not associated with The Headlands Press,
Inc.

FREEWARE is a trademark of The Headlands Press, Inc.
IBM is a trademark of IBM Corporation.

***************************
* Make a Production Copy  *
***************************

The following procedure will make a production copy of PC-FOIL for
double sided disk users.  Single sided users will not be able
to add DOS to the diskette due to the lack of space.  Those users
will have to start DOS, then insert the PC-FOIL diskette.

1.  Put a DOS disk in drive A and boot up.  Put a new disk in drive
    B and enter the following command:
                                          
     ************     ************
     *    A     *     *    B     *
     *   DOS    *     * New Disk *   A>FORMAT B:/S     (enter)
     ************     ************      (single sided users omit /S)

2.  Replace the DOS disk with the PC-FOIL program disk and enter
    the following command:

     ************     ************
     *    A     *     *    B     *
     * PC-FOIL  * ==> * New Disk *   A>COPY A:*.* B:   (enter)
     * PROGRAM  *     *          *
     ************     ************

3.  Remove your original copy of the PC-FOIL program disk and put
    it aside for a moment.  You now have a new program disk that
    you can tailor for your needs.  The DOS COPY command will
    copy all the production files from drive A to drive B.

*******************************
* Printing the Documentation  *
*******************************
The documentation files are on a separate diskette from the production
files.  The following procedure will print the PC-FOIL User's Guide.

1.  Put your new production PC-FOIL disk in drive A.
2.  Put the PC-FOIL documentation disk in drive B. (For double
    sided diskettes this is the original PC-FOIL program diskette.)
3.  Enter the following command:

     ************     ************
     *    A     *     *    B     *
     * PC-FOIL  *     * PC-FOIL  *   A>A:PC-FOIL    (enter)
     *   NEW    *     * DOCUMENT *
     ************     ************

This will start the PC-FOIL program from disk A.  At this point
you should see the primary menu which lists the FOI files.  These
files contain the PC-FOIL USER'S GUIDE.  To print it, enter the
following on the PC-FOIL Menu.  This documentation is about 50
pages so it will take quite a while.  

 SELECTION ===>PC-FOIL    (enter)    (This names the file to print)
 SELECTION ===>!          (enter)    (Optional emphasized (darker) print)
 SELECTION ===>P          (enter)    (This starts the printing)

If you do not have an IBM Graphics Printer and experience difficulties
with the printer, try changing the TYPEPRT= in the PROFILE to an M
or an L (M does not use dot addressable graphics and L uses very few  
printer control commands).

After you have printed off the documentation, remove the original
PC-FOIL documentation diskette and substitute a scratch diskette
that will hold your new PC-FOIL files.  Put your original PC-FOIL
diskettes away for back-up.  You are now ready to start FOIL-EDIT
from the menu and begin creating your presentation or document.

******************
* Using a PC/XT  *
******************

PC-FOIL works extremely well on a PC/XT with a hard disk.  A
recommended approach would be to create a sub-directory named
PC-FOIL.  Then copy both the documentation diskettes and the program
diskettes to the hard disk with the following command.

  A>copy a:*.* c:   (enter)  (copy program diskette to c:)

      (remove program diskette and insert documentation diskette)

  A>copy a:*.* c:   (enter)  (copy documentation diskette to c:)

NOTE:  Be sure and change the profile so that the default diskette
is C:. (see chapter on PROFILE)

**********************
* Files on the Disks *
**********************

The following files are on the PC-FOIL program disk:

PC-FOIL .EXE - THE PC-FOIL PROGRAM
FOILEDIT.EXE - THE FOIL-EDIT EDITOR
E       .BAT - A SHORTCUT FOR STARTING FOIL-EDIT
F       .BAT - A SHORTCUT FOR STARTING PC-FOIL
FOILEDIT.HLP - HELP SCREEN FOR FOIL-EDIT
PC-FOIL .HLP - HELP SCREEN FOR BOTH FOIL-EDIT AND PC-FOIL
FOIL    .LET - BLOCK LETTERS FOR THE IBM GRAPHICS PRINTER
PROFILE .DEF - DEFAULT DEFINITIONS

The following files are on the PC-FOIL documentation disk:

PC-FOIL .DOC - INSTRUCTIONS FOR PRINTING DOCUMENTATION
PC-FOIL .FOI - USED TO PRINT THE USER'S GUIDE (IMBEDS 1-5)
PC-FOIL1-5.FOI - THE PC-FOIL AND FOIL-EDIT USER'S GUIDE

                   ************
                   * TUTORIAL *
                   ************

The TUTORIAL is designed to get you started using the programs.
After you finish this lesson, you will be able to enter
information with FOIL-EDIT and print it out with PC-FOIL.  You
will also learn some basic information about FOIL-EDIT.  Let's get
started.

*******************
* STARTING IT UP  *
*******************

Just put your PC-FOIL diskette in drive A and a scratch diskette
in drive B.  Now enter an E when you see the DOS prompt.

               A>E

This will start the FOIL-EDIT program.  The initial menu should
appear on your screen.  Now you have a chance to enter some
information about what you want to do. Let's name our file TEST.

  SELECTION ==>test     (enter)    (file name is B:TEST.FOI)

You should now see the following:

  FILE=B:TEST.FOI   EXT=FOI   DISK=b:   RECORDS=0

Now let's enter some information into the file.  We can go into
edit mode by entering an E.

  SELECTION ==>e       (enter)

We now have a blank screen (almost ..  there is an information
line at the bottom).  This means that our document is empty and we
can begin entering information into it.

***********************
* HELP HELP HELP !!!! *
***********************

Press the F1 key.  Here comes your help.  You can do this any time
that you need to.  FOIL-EDIT remembers where you were.  Continue to
press F1 to page through the help screens or press any other key to
return to edit.  F2 gives you help on PC-FOIL commands.

********************
* USING THE CURSOR *
********************

The FOIL-EDIT editor is a full screen editor.  This means that you
can move the cursor anywhere on the screen with the arrow keys.
You can change anything that you like very easily and quickly.
There are also many other commands that allow you to move quickly
around the screen.  We'll learn those later.

The cursor should be sitting at the upper left hand corner of the
screen.  It's that little blinking line.  FOIL-EDIT works like a
word processor.  You simply type your information on the screen.
Now type the following 5 lines on the screen.  As you finish each
line, press the enter key.  This will take you to the beginning of
the next line.

\n
\c This line is centered
\s2
This line is normal size print
\L
This line is large size print

Notice that the cursor moves as you type.  If you make a mistake,
you can simply use the backspace key <-- to back up and re-type the
character, or you can use the arrow keys to move in any direction.

The backslash (\) is a command for PC-FOIL.  These commands do not
print but tell PC-FOIL how to print the information.  You use
these commands to do many things.  In our example, we have
centered a line, spaced forward two lines, and chosen large print
with our commands.

*******************
* SAVING THE FILE *
*******************

We should have five lines in our document.  Now press the F10 key.
This takes us back to the menu.  The information that we have
typed in is still in the computer memory, and we need to save it
on the diskette.  Press S and press the enter key.

  SELECTION ==>s       (enter)

The file is now saved.  The file name is TEST.FOI.  Let's go print
it.

**********************
* PRINTING THE FILE  *
**********************

Printing is done with PC-FOIL.  You can get there by entering an F
on the menu screen.  Let's do it now.

  SELECTION ==>f       (enter)

You should now see the PC-FOIL menu.  It looks a lot like the
FOIL-EDIT menu that you have been using, but if you look closely,
you can see the differences.  TEST.FOI should display as one of
the FOI files displayed.  Now tell PC-FOIL what file to print.
Key in the word TEST.

  SELECTION ==>test    (enter)  (selects B:TEST.FOI for display)

Now B:TEST.FOI should show up in the FOIL QUEUE.  To test
let's print to the screen first.

  SELECTION ==>d       (enter)  (select output device)

We should get the following message:

TPUT DEVICE: P=Printer S=Screen D=Disk

Select S for screen. This allows you to preview the information
without wasting time and paper.  Now key the letter P and press
enter to print the document to the screen.

  SELECTION ==>p       (enter)  (start printing to the screen)

The document that we entered with FOIL-EDIT should now display on
the screen.  Notice the prompt line at the bottom of the screen.
It provides instructions on stopping and starting the display
(space bar) and a toggle key to delete or display the prompt line
(F1).  It also shows the current file name, page number, and line
being printed on the screen.  It reminds you of the use of F9 to
cancel the print and F10 to skip the print.  You may wish to play
around with these keys to appreciate their usefulness.

Follow the instructions until complete and then print it on the
printer.  Notice that the file name TEST remains on the QUEUE
line.  PC-FOIL assumes that you were previewing the file and now
will want to print it.  Now select the printer as the output
device.  To do so enter a D and press enter; then select P at the
prompt for device type.  Enter a P again, and follow the
instructions for printing.  If you wish to return to DOS now, you
can enter an X command to exit PC-FOIL.  This sequence of actions
should be as follows:

  SELECTION ==>d       (enter)   (specify output Device)
  OUTPUT DEVICE: P=Printer S=Screen D=Disk
  p                    (no enter key required)
  SELECTION ==>p       (enter)   (print the document)
  ALIGN PRINTER - PRESS ANY KEY TO CONT
                       (press any key after aligning printer)
  SELECTION ==>x       (enter)   (finished - go to DOS)

************
* SUMMARY  *
************

This concludes the TUTORIAL.  You should now understand how
FOIL-EDIT and PC-FOIL work together to produce quality
presentations or documents.  You should also feel comfortable with
entering information using FOIL-EDIT.  For more detailed
information on using FOIL-EDIT, you could now turn to the chapter
entitled "INTRODUCTION TO FOIL-EDIT".



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0347

     Volume in drive A has no label
     Directory of A:\

    PC-FOIL  EXE     65152   1-15-84   9:51a
    PC-FOIL  HLP       921  12-05-83   1:10a
    FOILEDIT EXE     73600   1-16-84  12:22a
    FOILEDIT HLP      2306   1-03-83  12:24a
    FOIL     LET      7680  12-15-83  10:56p
    PROFILE  DEF      4224   1-15-84   4:47p
    E        BAT        14   8-13-83   1:04p
    F        BAT        10   8-14-83  11:57a
    PC-FOIL  DOC     15394   1-15-84  11:01p
    PC-FOIL  FOI       512   1-14-84  10:56a
    PC-FOIL1 FOI     20480   1-15-84   2:17p
    PC-FOIL2 FOI     33664   1-14-84  10:06a
    PC-FOIL3 FOI     34176   1-15-84   1:15p
    PC-FOIL4 FOI     21376   1-14-84  10:15a
    PC-FOIL5 FOI     14848   1-15-84   1:44p
    FILES347 TXT      1519   7-21-87  10:17a
           16 file(s)     295876 bytes
                           18432 bytes free
