---
layout: page
title: "PC-SIG Diskette Library (Disk #1971)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1971/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1971"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORD FUGUE DISK 2 OF 2 (1970)"

    This a heavy duty wordprocessing program with an optional WordStar
    compatible interface.  It's ideal for the touch typist, since
    there is no need to take your hands off the home row to activate any
    functions.  Its features are extensive and include:
    
    ~ Eight editing windows
    
    ~ Context-sensitive help
    
    ~ Pull-down menus
    
    ~ Printer support that includes laser printers
    
    ~ Generation of indexes and tables of contents.
    
    ~ Macro facilities, the ability to record keystrokes, and a number of
    macro files for additional flexibility.
    
    ~ Automatic reformatting of text
    
    ~ Support of newspaper style columns, with word wrap and justification
    of each column.  Column mode blocks that can be defined and copied,
    moved or deleted.
    
    ~ Comprehensive monitor support -- Mono, CGA, EGA or VGA or Hercules
    graphics.
    
    ~ A DOS shell that permits the use of all DOS commands from within the
    program.
    
    ~ A pop up calculator with 16 functions.  The calculation result can
    be pasted into your text.
    
    ~ Support for box and line drawing, with characters available at the
    press of a key.
    
    ~ Optional on screen display of fonts and the ability to edit text
    with this mode operating (unlike WordStar).
    
    ~ Printing with multiple headers and footers, including functions such
    as current date or time.
    
    Hundreds of other sophisticated features are included such as
    insertion of current date or time (in different formats), the ability
    to mark changed text in the left hand margin, and offset page number
    on odd or even pages.  Registered users get a 100,000-word dictionary
    and an updated program that will add or delete words from the
    dictionary.
    
    The wordprocessor document files are ASCII text files, so there are no
    funny embedded characters and the files are WordStar compatible, so
    you can load them into any wordprocessor that reads WordStar files.
    
    Apart from printer control strings, all formatting commands are by use
    of dot commands (. in column one) or embedded functions ({. }) in the
    text body.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## TUTORIAL.DOC

{% raw %}
```
.he                      Word Fugue TUTORIAL

                           Word Fugue Tutorial
                            Version 1.8b

          Copyright 1985,87,89 by Fugue Software. All Rights Reserved.

 Permission is granted to distribute exact copies of this Tutorial.
 Fugue Software P.O. Box 942 WODEN   ACT   AUSTRALIA
 Registration Fee  Australia $55,
                   Overseas  $US55


By following the instructions in these lessons, you will learn how to
use the Word Fugue word processor. Although the lessons don't cover
every aspect of the program, they will provide you with a good working
knowledge of Word Fugue. In this tutorial you will learn the basics of:

o  Making a working disk.
o  Creating a file.
o  Entering text.
o  Saving and exiting.
o  Loading an existing file.
o  Moving around the screen.
o  Changing text.
o  Changing margins.
o  Copying, moving, and deleting text.
o  Finding and replacing text.
o  Using Help screens and menus.
o  Printing.

To get the most out of this tutorial, you should be familiar with
your computer and with DOS. If your knowledge of these areas is
sketchy, please read "Introduction to Computers and DOS" in the
User's Guide that came with your computor.

If you wish to obtain detailed knowledge of all Word Fugue commands,
you should register. This entitles you to updated versions of Word
Fugue, and the Word Fugue Users Guide. The Word Fugue User's Guide
gives detailed explanations of all Word Fugue commands. Refer to it if
you need more information. As you become an advanced Word Fugue user,
you'll discover powerful word processing techniques not covered in
this tutorial.

The instructions in this tutorial are for a computer with two disk
drives. If your computer has only one disk drive, just change disks
when your computer tells you to. If you have a hard disk, you can do
this tutorial with your floppy disk drive. If you want to (use "C:"
and a subdirectory name instead of "B:", for example). Now you're
ready to start. If you haven't done so already, boot your computer
with DOS. Place your DOS disk in drive A (the left or top disk drive)
and turn on the computer. Enter the date and time if you are asked to.
When the computer is ready, a DOS prompt will appear on the screen.
The DOS prompt looks like this:

  A>

Note: The DOS prompt may look like C> if you have a hard disk system.
At the DOS prompt, you can type DOS commands (you'll learn some of
these in the lessons) and the commands to start the Word Fugue edit
program and print program. The notation <Enter> means that you should
press the Enter key (also called the Return key) after you type the
command. You can type DOS or Word Fugue commands in upper or lower
case, or a mixture; it makes no difference. If you are asked to type
text that is shown in quote marks, type the text but not the quote
marks. The Esc key is the universal cancel key; use it cancel Word
Fugue commands

PCjr Users: The keyboard of the IBM PC contains certain keys that the
PCjr keyboard doesn't. For a function key like F1, press the PCjr Fn
key with the "1" key. For other keys, the PCjr command is contained
in parentheses with the notation PCjr:.

Lesson 1: Making a Working disk
===============================

Never work from the original disks that the program comes on. You
should always back up these disks, and work from the backup disks. The
originals should be put away in a safe place.

To make your copies, you will require 3 blank, formatted floppies.
Place the first Word Fugue disk into drive A, a blank disk into Drive
B, and type

    COPY A: B:

When the dos prompt returns, remove those disks, place the second Word
Fugue disk in drive A, another blank disk in drive B, and type the
copy statement again. Do this a third time for the third disk. Please
label your copies so you know which disk is which.

Now you can create a working disk to use for everyday editing and
printing.

Floppy Disk Users
=================

High Density Floppies
=====================

If you have a high density 3" or 5" drive, your floppy disk will hold
either 1.4 Meg or 1.2 Meg, and all files will fit on one disk. Simply
use the Dos COPY command to copy all files from the Word Fugue
distribution disks onto a single high density floppy.

Updating the Dictionary will require a second disk containing a copy
of the dictionary, since the update program creates a new copy of the
dictionary, renaiming the old one to WF_MAIN.BAK


720K 3" Floppies
================

This type of disk will fit most of the information on one disk.
Everything you need for day to day use will fit. What you need is:

        WF.EXE
        WF.OVR
        WF.HLP
        WF.RLR
         *.MAC
        your choice of .PDF files
        WF_MAIN.DIC

Installation of key strokes will need another (working) disk
containing:

       WF.EXE
       WFINST.EXE
       WF.TXT

Be sure to copy the updated WF.EXE and WF.HLP files to your main disk.

Updating the Dictionary will require a second disk containing a copy
of the dictionary, since the update program creates a new copy of the
dictionary, renaiming the old one to WF_MAIN.BAK

360K Floppies
=============

Word Fugue comes on three floppy disks. There is not enough room on
the program disk for the help file. You can run using the disks as
supplied, but you will not be able to use the online Help facility nor
the Spelling checker. If you want to use these facilities, you will
need to give some thought to the organization of files.

Note that if you wish to use Word Fugue's ability to save changes to
default conditions (eg margins, screen colors etc) you will need to
have the disk containing WF.EXE present

    StartUp disk
    ============
        This should contain
             WF.OVR
             WF.HLP
             WF.RLR
             *.MAC
             your choice of PDF files

        You will need a second drive containing WF.EXE (eg your B
        drive), while the startup disk is in drive A. Drive A should
        be the default drive (ie the dos prompt should show A:>) and
        you would start Word Fugue by entering

                B:WF

        Once Word Fugue has started, you do not need the disk with the
        WF.EXE file in drive B, and can replace it with your data
        disk. However, THE DISK IN DRIVE A SHOULD ONLY BE SWAPPED FOR
        THE DICTIONARY DISK (see below) WHEN YOU ARE CHECKING
        SPELLING, AND SHOULD BE REPLACED AS SOON AS SPELL CHECKING HAS
        FINISHED. You will not be able to obtain online help while
        checking spelling, because the help file will not be
        available.

   Dictionary Disk
   ===============

        This should contain WF.OVR and WF_MAIN.DIC. These 2 files will
        almost fill up the disk. When you want to do spell checking,
        you would remove the Startup disk and replace it with the
        dictionary disk. As soon as spell checking has finished, you
        would remove the dictionary disk and replace it with the
        Startup disk.

    RAM DISK
    ========

    If you have a 640K machine, you could load a Ram disk when you
    turn on your computer, and copy the WF.OVR and WF.HLP files to
    that drive. (Typically E: It must be in your PATH statement) Refer
    to your Dos manual for information on setting up a ram disk. You
    will need approximately 200K set aside for these files.

    With these files loaded into a RAM disk, you can put the disk
    containing WF.EXE in drive A, and then replace it with the
    dictionary disk as soon as Word Fugue has started. The dictionary
    disk should contain

         WF_MAIN.DIC
         *.MAC
         your choice of PDF file

If you have only one 360K drive, you will need to use a Ram disk to
take advantage of Word Fugue's features.

HARD DISK USERS
================

1. Choose a directory to be your Word Fugue working directory.

   MD C:\dirname
   CD C:\dirname

2. Put the Word Fugue backup program disk in drive A. At the
   DOS prompt, type:

   COPY A:*.* C:

3. Put the word Fugue backup utilities disk into drive A. At the DOS
   prompt, type:

   COPY A:*.* C:

4. Put the word Fugue backup dictionary disk into drive A. At the DOS
   prompt, type:

   COPY A:*.* C:

5. Change your path statement so that the Word Fugue directory is
   included.


You now have a Word Fugue working disk and are ready to continue the
tutorial. If you had any difficulty copying the files, try the steps
again.

Make sure that you spell everything correctly, and that you leave
spaces where indicated and don't add any extra spaces.


Configuring Word Fugue for your machine.
========================================

Word Fugue comes configured for color, and direct screen writes for IBM PCs
and clones. If you wish, you can configure it to run in B/W or even to
run on a Generic MSDOS machine.

1. Generic MSdos: at the DOS prompt, type:
    WF /G
Please ensure that you type a capital G, not lower case g. This will
cause Word Fugue to use MS Dos Bios calls to write to the screen. This
is not as fast as direct screen writes, but ensures that Word Fugue
will run on any MSDos machine. This option is active only for this one
time, unless you save Word Fugue's settings. See below for this.

2. Color or Black and white.

Word Fugue automatically senses whether your computer is in Black and
White mode or Color mode, and will work in colors or black and white
depending on what it finds. However, some older, non standard monitor
cards can look like color when they are not, or you may have a black
and white monitor attached to a color CGA card.

You can cause Word fugue to always come up in black and white by
entering

   WF /B

at the Dos prompt. Please ensure that you type a capital B and not
lower case b.

3. Vertical retrace.

When Word Fugue writes directly to the screen, you may find that the
screen sparkles and flickers, especially if you have an old IBM. This
is nothing to worry about. It means that Word Fugue is trying to use
the screen memory at the same time as the screen hardware is trying
to. You can cure this by activating the Pull Down Menu (Shift F1),
typing in O for option, and then D for Display options. You should see
a list of options, among them Snow control Off. Type in S and you
should see Snow control On. Press ESC to return to the options menu,
followed by S for save settings and continue with your edit session.
You must make sure that you have a the file WF.EXE available, or you
will not be able to save your settings

Lesson 2: Creating a File
=========================

Now, let's create a file called WRITING.TXT on the disk in the B drive.

1. Place your Word Fugue working disk in the A drive and a formatted
  disk in the B drive.
2. Make sure that a file called WRITING.TXT doesn't already exist. At the
   DOS prompt, type:
     DIR B:WRITING.TXT  <Enter>
   If there is a directory entry for a file called WRITING.TXT on the
   disk, substitute another name, like TALE, for WRITING.TXT in this
   tutorial.

3. Now type:
       WF B:WRITING.TXT  <Enter>

WF is the name of the Word Fugue edit program. B: is the drive
specification. This tells the edit program to create the new file on
the disk in the B drive. Now the disk drives whirr and click, and
the initial Word Fugue screen appears. This screen welcomes you to
Word Fugue.

As this screen comes up, Word Fugue checks to see if the file WRITING.TXT
exists on the disk in the B drive. Since this is a new file, the
edit area of the screen will be blank.

If you accidentally typed WRITIN.TXT instead of WRITING.TXT, then when
the edit screen comes up, you would press either F3 (function key 3)
or <Ctrl> K D. Word Fugue will prompt you for the name of the file you
wish to edit.

The Top Line gives information about the program's activities,
displays messages, and prompts you for information. Pay attention to
this line as you edit. The second line indicates the name of the file,
line and column numbers of the cursor, page number, and certain status
indicators. it should display WRITING.TXT. Further over, you will see
Line 1 col 1. You should also see Ins for insert mode on and Wrap for
word wrap. These will be discussed further in later lessons.

Lesson 3: Entering Text
=======================

In this lesson, you'll be asked to type some text. If you are familiar
with word processing, you may not want to do this.

Now the fun starts. Enter text just as you do on a typewriter. Use the
Shift keys to capitalize letters. Press the Caps Lock key to type all
capital letters (notice that only the alphabetic keys are affected).
If you use a Shift key when Caps Lock is on, you get lower case. Follow
the steps in this lesson to see how easy entering text can be.

1. The cursor (a blinking block that tells you where editing will take
   place) is at the top of the screen. Type this sentence, just as you
   would on a typewriter:

Twas brillig, and the slythy toves did gyre and gymbol in the wabe.

Press the Enter key. The cursor will go to the beginning of the next
line.

Press the Enter key a second time to insert a blank line. Don't worry
if you make any spelling mistakes, you will go back and correct them
later.

The Word Fugue program lets you enter lines of text this way (one line
at a time, pressing the Enter key after each line), but it also lets
you enter text in a simpler fashion, using two features called
wordwrap and reformatting. Both let you keep on typing without
pressing Enter at the end of each line. The program moves the words
around to the next line, keeping them between the left and right
margins. When you are editing text, press <Ctrl> B to reformat a
paragraph you are editing. (This is also shown as ^B). Look at the
Status Line. It may say Wrap. This means that wordwrap is on. If it
does not, then press <Ctrl> O W, (^OW) to set wordwrap on.


    Press the Enter key twice to start a new paragraph.


3. Type the following paragraphs using word wrap. Press the Enter key
   twice at the end of each paragraph. You'll use this story in the
   lessons that follow.

    Beware the Jabberwock, my son, the claws that bite, the jaws that
    catch, beware the JubJub bird, and shun the frumious bandersnatch.

    He took his Vorpal sword in hand, long time the manxome foe he
    sought. Then rested he by the tumtum tree, and stood a while in
    thought.

    And as in uffish thought he stood, the Jabberwock with eyes of
    flame came wiffling through the tulgy wood, and burbled as it
    came.

    One two. One Two. And through and though. His vorpal sword went
    snicker snack. He left it dead, and with its head, he went
    galumphing back.

If you hold a key down, the character will repeat until you release
it. This is handy for drawing lines of dots, hyphens, or periods.

5. Press the period and hold it down to make make a row of dots. Then
   press the Enter key twice.

Lesson 4: Saving and Exiting
============================

All your work up to this point is stored only in the computer's
memory. None has been copied to the disk. If you shut off your
computer, all of it will be gone for good. To use the text another
time, you need to save it on the disk.

Word Fugue lets you save the text and continue editing, or save and
then exit the edit program returning to DOS. The saved version
replaces the older version when you edit an existing file. You should
save the text frequently while you edit. Then, if you accidentally
kick the computer plug out of the wall, you won't lose too much work.
Let's learn how to save the text to the disk.

1. Press Shift F1. The Pulldown Menu appears on the Top Line:

   File  Window  Text  Block  Goto  Search  Options  Miscellaneous

   with File hi-lighted

2.  Press F, the file menu option. Another menu appears, showing among
    other commands New Quit Save. Press S for the Save option. As the
    edit program saves the file, the top line will show "Working". You
    could have achieved the same by pressing <Ctrl> and K at the same
    time, followed by S. When the file is saved, you are returned to
    edit mode, and may continue editing.

If you had finished editing, you would type <Ctrl> K D , or by
pressing function key 3 (F3), or from the Pulldown menu F(ile),
D(one). When Word Fugue is done saving the file, it will ask "Name of
File to edit?" and shows you the name of the file you just saved .

You can change this to a new file, or press ESC if you do not wish to
edit any file. In this case the menu will appear. You could select
Quit to finish.

Now let's see how to exit the edit program and return to DOS.

3. First press Shift F1 to get the PullDown Menu.

Then press F for file, and then press Q to Quit. Had you been editing,
WF would have asked you Save Changes Y/N? If you had entered Y, WF
would have saved the file automatically. The DOS prompt will appear;
you're out of the program. You could have achieved the same effect by:

     (i) pressing <Ctrl> K  X
or  (ii) pressing F10

You don't have to save a file before you exit the program. If you make
a mistake and don't want to save it, press the Shift F1 key, then the
F key and, finally, the Q key (for Quit). When Word Fugue prompts you to
Save Changes Y/N? just type in N for no. (Note, that if you have not
made any changes to the text since the last time you saved it, you
will not be asked if you want to save. Word Fugue knows that the text
is saved, and simple finishes) This takes you back to the last saved
it. You could achieve the same results by pressing <Ctrl> K Q

Lesson 5: Loading an Existing File
==================================

Now let's see how to load an existing file.

1. At the DOS prompt, type:
      WF B:Writing.txt  <Enter>

   Word Fugue checks for the file Writing.txt on the disk in the B
   drive. When it finds it, the Top line says:

      Reading

When the program is done reading the file from the disk into your
computer's memory, the edit screen comes up and the status line
displays

  WRITING.TXT

Lesson 6: Moving Around the Screen
==================================

In this lesson, you'll learn how to move the cursor around on the
screen and to move to different parts of your text file.

On the far right side of the keyboard are four keys called the Arrow
keys. The Up and Down Arrow keys move the cursor up and down one line
at a time. The Left and Right Arrow keys move it left and right one
space at a time. If you hold down an Arrow key, it repeats.

1. Experiment with the Arrow keys. Hold down the Down Arrow. The
   cursor moves down. Now move it up again with the Up Arrow. Do the
   same with the Right and Left Arrow keys.

The other keys in this lesson are also on the right side of the
keyboard. Home (PCjr: Fn Home) moves the cursor to the left margin.
The End key (PCjr: Fn End) moves the cursor to the end of the line
just after the last character or blank on the line.

2. Move the cursor to the last line of the second paragraph. Press the
   Home key and watch it move to the left margin. Now press the End
   key. Press the space bar 3 times, then the Home key, then End
   again. Watch where the cursor ends up.

The PgUp and PgDn (PCjr: Fn PgUp and Fn PgDn) keys scroll the text
down or up by one screen of text (20 lines).

3. Press the PgDn key and watch the text go up. Press PgUp and watch
   it go down. Hold them to repeat.


Lesson 7: More About Entering Text
==================================

The Word Fugue program has two "modes" for entering text. A mode is
the way the computer responds to certain keystrokes. The two modes are
Insert mode and Overwrite mode.

When you start editing a file, the edit program is in Insert mode.
This means that as you type new text, existing text to the right of
the cursor is pushed to the right. The status line will say Ins if
Word Fugue is in Insert mode. Otherwise it will show Ovr for overwrite
mode. Press the INS key several times, and watch the Ins and Ovr
appear and disappear. Every time Ovr appears, you are in Overwrite
mode. Chech that Ins shows at the top of the screen.

1. Place the cursor at the beginning of "Jabberwock" in the second
   paragraph. Press the space bar a few times. Watch "Jabberwock" move
   to the right. In Insert mode the space bar moves text to the right.

2. Now move the cursor to the first letter of the word "JubJub". Type
   "black" and press the space bar. As you type, the characters on the
   right are pushed over to make room.

In Overwrite mode, you replace old text as you enter new text, writing
over what is already there. To go from Insert to Overwrite mode,
press the Ins key. Press it again to change back.

3. Move the cursor to the first letter of the word "vorpal". Press the
   INS key and ensure that the letters Ovr show in the status line.
   Type "trusty" and watch the letters write over the old characters.
   You are in Overwrite mode. Press the space bar 3 or 4 times. In
   Overwrite mode, spaces write over existing text.

4. If you press Shift and Function key 1, you will see the pulldown
   menu appear. Press G for Goto, and you will see a list of options
   available, including Top of file, Bottom of file, Line, Column, and
   so on. You can select an option by moving the arrow keys to
   hi-light a word, and pressing return, or by typing in the capital
   letter that you see in each word. Try going to different places in
   the text by using different options, and see what happens.


Lesson 8: Changing Text
=======================

There are basically two ways to change text: 1) add new text, and 2)
delete existing text. In Lesson 7, you learned how to add new text in
Insert and Overwrite modes.

Word Fugue gives you a number of ways to delete text. Press the Bksp
(Backspace) key to delete the character to the left of the cursor.
Press the Del (Delete) key to delete the character at the cursor.

The Bksp Key

The Bksp key is located above the Enter key. It may have a left arrow
on it, but it is not the same as the Left Arrow key. If you mistype a
character, press Bksp to delete it. The cursor moves back so you can
type the correct character. Bksp moves the cursor just as the Left
Arrow key moves it, but it also deletes the character to the left.

Bksp also pulls the rest of the line to the left. The space bar pushes
to the right in Insert mode, or overwrites and moves the cursor to the
right in Overwrite mode, so Bksp and the space bar are complementary.

1. Move the cursor to the third paragraph of the Writing.txt. Make sure you
   are in Insert mode (see the previous lesson), then place the
   cursor on the period after the word "thought". Press the Bksp
   key 7 times until the whole word is gone.

The Line Boundary

Word Fugue places a line boundary character at the end of every line.
This is an "invisible" character, like a space. Just as the A key
inserts a letter "A", the Enter key inserts a line boundary. What
happens if the cursor is at the start of a line and you press Bksp?
You go to the end of the previous line, but you also delete the line
boundary.

2. You may see several different characters in the right most position
   of lines. These each indicate different things.

   o  The dot symbol indicates that the line has never been used. The
      only way of moving onto such lines is to use the Enter key.

   o  The right double arrow >> indicates that the line continues to
      the right of the screen. This happens if you enter text with
      Word Wrap off, and forget to move to a new line. If you move to
      the end of such a line, you will see similar markers << at the
      start of each line, indicating that the lines continue to the
      left of the screen.

   o  The symbol Pt indicates that this line will be at the top of a
      new page


3. Move the cursor up one line by pressing the Up Arrow key, then to
   the beginning of the line by pressing Home. Make sure you are in
   Insert mode. Press the Bksp key to delete the line boundary. Now
   press the Enter key to split the line again.

The Del Key

The other key that deletes one character at a time is the Del key.
Its located in the bottom right corner of the keyboard. It deletes a
character, but it doesn't move the cursor. It pulls the rest of the
line from the right.

4. Move the cursor to the beginning of the word "uffish" in the fourth
   paragraph. Press the Del key 6 times to delete "uffish,". Compare
   this to the Bksp key.

5. An easy way to replace a longer word with a shorter one is to use
   Overwrite mode and Del together. Move the cursor back to the second
   paragraph. Switch to Overwrite mode by pressing Insert. Move
   the cursor to the first letter of the word "manxome" and type
   "bad". Now press the Del key 4 times to close up the gap. Press
   the Insert key to return to Insert mode.



 Lesson 9: More Ways to Change Text
 ==================================

There are three more simple ways to delete text. Ctl Bksp deletes the
text on a line from the cursor to the end of the line. If the cursor
is at the start of the line, Ctl Bksp deletes the whole line. Ctl T
deletes one word at the cursor. Alt F1 deletes the word to the left
of the cursor.

1. Place the cursor at the beginning of the word "foe" in the third
   paragraph. Press the Ctl key and hold it while you press T. Watch
   the word disappear. Word Fugue considers the spaces after a word to
   be part of the word.

2. Place the cursor at the beginning of a line, and press Ctl Bksp
   and watch the whole line disappear.

3. Move back up to the last paragraph. Place the cursor at the end of
   the last line and press Alt F1. Watch the word to the left of the
   cursor disappear.

4. If you wish to delete an entire line, press Ctl Y. Watch the
   whole line disappear, and the lines below move up

There are a few other ways to delete text; these are described in the
Help screens and in the Word Fugue User's Guide.

Undeleting

When  you delete text with Ctl Y, the text is moved to a part  of  the
computer's  memory called the Undo Stack. It stays in the  Undo  Stack
until you put something else there or exit the file. There is room for
20 lines in the undo stack (unless you change this.) As you delete the
lines, they are added to the top of the stack. If you press undo, (the
Alt key and the Y key together), then a line is removed from the top
of the stack and placed in the text where the cursor is. You can
change the limit by using the pulldown option menu. Try this now -
press Shift F1 to activate the menu, followed by O for option, L for
Load file options and U for undo limit. You will be prompted for a new
limit. Press ESC 3 times to return to the editing screen.

Note that unless you save the defaults (Save defaults on the options
menu), your changes to the undo limit will be only be remembered while
Word Fugue is running, and will be forgotten once you finish.

4. Move the cursor to a line. Press Ctl Y to delete the line. Now press
   Alt Y and watch it reappear.

As long as you don't place anything else in the Undo Stack or exit the
edit program, you can move the cursor and undelete anywhere in the file.
This is one way of moving a block of text. In Lesson 11 you'll
learn another method. Characters deleted with Del or Bksp are not saved in
the Undo Stack.

5. Move the cursor to the beginning of the same line. Press Ctl Y
   to delete the whole line. Now move the cursor a few lines down and
   press Alt Y. Watch the line reappear.

The Ins Key

What if you're in Overwrite mode and want to replace a short word with
a longer one? You need to use the Ins key. It places you in insert
mode. Press Ctrl T to delete the short word, and then press Ins to
place the program into insert mode. Type in the new word.

After a while you may pick some keys that you like for editing.
Perhaps you will stay in Insert mode and mostly use the Bksp key.
Maybe you'll stay in Overwrite mode and use Bksp with Ins and Del.
Perhaps you'll use both methods.



Lesson 10: Changing Margins
===========================

In the last few lessons you made several changes to the WRITING.TXT
file. Automatic reformatting has kept the text between the left and
right margins. You can change the location of the margins by pressing
Ctrl O L key for the left margin, and Ctrl O R for the right margin.
Alternatively, you can use the pull down menu, Options menu, M for
Margins sub menu and type L for left margin change, or R for right
margin change. From the Options menu, pressing R allows you to control
tab settings.

Change the right margin to 45, and the left margin to 5, and type
in some text. (Ctrl O L 5 and Ctrl O R 45). Watch how each line starts
5 characters in from the left edge, and also how the text wraps around
so that it will not go over the right margin. (This only works if Word
Wrap is on. Check to see that Wrap appears on the status line. If you
do not see it, press CTRL and O at the same time, followed by W.

Word Wrapping
=============

When you reformat a paragraph with Ctl B, you arrange the text between
the margins. As you enter new text, Word Fugue moves it to the next line
when you reach the right margin unless you have wordwrap off.

5. Press Ctl O W to turn wordwrap off. The Top Line now has a space
   instead of Wrap. Press the Enter key twice then type a long line of
   text. It does not wrap around; it keeps going off the screen.

6. Press Ctl O W again. The Top Line says Wrap. Now wordwrap is on.
   Place the cursor in the middle of the line you just typed and type
   some new text. Notice that the text does not wordwrap even though
   wordwrap is on. Wordwrap does not reformat existing text when you
   edit it, only new text. Move the cursor to the beginning of the
   line and press the Ctl B key. The line falls between the left and
   right margins. Move the cursor to the end of the line with the End
   key and type some new text. The text is formatted correctly as you
   type because wordwrap is on.

7. However, you can select automatic reformatting of text as you type.
   First turn word wrap off, and type in a long line of text (one that
   passes beyond the margins). Now place the cursor in the middle of
   the text and press Alt P. You should see Para displayed on the
   status line, and the long line will be reformatted to fit within
   the margins.

   Make sure that Insert mode is on, and type some text into the
   middle of the line. Note how the lines of text are reformatted as
   you type. Delete some text and you will see the lines below flow up
   to fit with the current line.

   Press Alt P again and Para changes to Wrap. Some people like their
   text to reformat as they type, while others prefer to reformat text
   themselves. You will probably find that sometimes you prefer to
   have automatic reformatting on and other times just ordinary word
   wrap. Automatic reformatting can also be selected from the pull
   down menu - select Options, then Format options, and select auto
   reFormat (the F is hi-lighted - this selects auto reformat).
   Selecting it again toggles between Off and On.

When you reformat a paragraph, Word Fugue treats all lines of text as
part of the same paragraph until it encounters a blank line. It treats
this line as the end of the paragraph, and will reformat all text
between the cursor and the blank line. Some word processors have
special end of paragraph markers, which can cause problems when they
appear in the middle of a paragraph, because they stop the rest of the
paragraph from wrapping. Word Fugue takes a simpler approach, which is
more obvious to the eye - all lines that appear to be part of a
paragraph, because there is no blank lines, will be treated as one
paragraph.

Justification of Right Margin
=============================

Ordinary word wrap moves words to the next line when they will not fit
on the current line. However, the ends of lines do not line up with
the right margin - they are known as ragged right margin. This is the
default. However, you can select Justified Right margin, which means
that lines will be padded with spaces between words so that the ends
of the lines all line up with the right hand margin.

8. Select justification from the pull down menu - Options, Format
   options, J for Justify, or press Ctrl O J. You will see Just appear
   after the wrap in the status line. Put the cursor on the first line
   of a ling paragraph, and press ctrl B to reformat the paragraph.
   Note how extra spaces are inserted between some of the words so
   that each line ends in the same column.

   Turn justification off (press ctrl O J again), go to the start of
   the paragraph, and press ctrl B again. Notice that nothing changes.
   This is because the default word wrap does not remove the extra
   spaces that justification put in. However, this can be easily
   fixed. You simply tell Word Fugue that you want it to remove extra
   spaces between words when it wraps text.

   From the pull down menu, select Options, then Format, and select
   "Squash line on wrap". It will change from Off to On. Now go back
   to the first line of the paragraph and press ctrl B and see the
   paragraph change.

Temporary Left Margin
=====================

Pressing function key 4 (F4) will set a temporary left margin at the
column the sursor is in. Subsequent lines that wrap will wrap to the
column. You will see a little triangle mark appear in the ruler line
(the line below the status line) to indicate where the temporary left
margin is located. Temporary left margins only remain while the cursor
is within the paragraph that it was set from. Moving the cursor
outside this paragraph (ie up or down to a blank line) will clear the
temporary margin, as will pressing the enter key, or manually
reformatting the paragraph (via ctrl B).

Press F4, and type in some text, enough to cause the lines to wrap.
Then reformat the paragraph. Notice that the first line does not
conform to the temporary margin, but the others do. Set the temporary
left margin again and move the cursor around using the arrow keys.
Notice what happens when you move outside the paragraph.

 Lesson 11: Copying, Moving, and Deleting Text
 =============================================

In this lesson, you'll learn to move, copy, and delete blocks of text.
A block can be any amount of text that's all together in one place.
To copy a block of text from one spot in a file to another:

1. Place the cursor at the beginning of the fourth paragraph of the
   story. Press CTRL-K B and then the Down Arrow key three times.
   Press CTRL-K K. The text is highlighted. This is called a marked
   block. You can also use the Pulldown menu with Block Begin and
   Block End. Make sure that your cursor is on the line you wish to
   mark, and at the character you wish to include.

2. Move the cursor to the line that you want the text copied after.
   Press CTRL-K C (or from the pulldown Block Copy) You have copied
   the paragraph to the new location. Notice that the original stays
   marked. Press CTRL-K H to clear the marking.

To move a block of text from one place to another:

3. Place the cursor at the beginning of the block you wish to move,
   and mark the block as before. Then move the cursor to the line that
   you want the block to appear after, and press CTRL-K V (or from the
   Pulldown Menu select  Block and then Move).

To delete a block of text:

4. Place the cursor at the beginning of the block you wish to
   move, and mark the block as before. Then press CTRL-K Y (or from
   the Pulldown menu select Block and then Delete).

The text is not yet gone for good. It's in the Undo Stack. If you
delete a block of text by mistake, you can bring it back again by
pressing Alt Y once for each line that you deleted. They will appear
where the cursor is situated. This only works until you empty the Undo
Stack, since it only holds the last 20 lines that you deleted. (Unless
you changed this using the Options part of the Pull Down Menu).

Lesson 12: Finding and Replacing
================================

Another tool you'll find valuable is finding and replacing text. This
feature lets you search for a piece of text and, if you want, replace
it with other text. Before you can search, you have to tell Word Fugue
what to search for. If you plan to replace it, you have to tell Word
Fugue that too.

To search for "and" in the text:

1. First, you must tell Word Fugue that you wish to search for text.
   You can do this in any of 3 ways.

   (i)   Press function key F5
or (ii)  Activate the pull down menu. Press S for Search,
         followed by F for Find
or (iii) Press CTRL Q F (this is a WordStar command)

   A box will appear on the screen with the word "Search For"
   Type in the letters  and   and press return.
   The prompt will change to "Options (UBGWL)"

   The options available are:

   U    Upper case - treat the string to search for and the file
        as if they are all in upper case. Thus and will match
        and  AND  anD  AnD  aNd  . If you do not enter this
        option then the case of the letters will be important.
        This means that and will only match and

   B    Backward - This tells Word Fugue to search backwards from the
        cursor position. If you do not specify this, then Word Fugue
        will search forward.

   W    Word only - This tells Word Fugue to search for whole words
        only, and not to match bits of words
        Thus and will match and only.
        If you do not specify this, and will match with
        and   band  sand andalusium and so on.

   L    Local to the marked block. If this is not specified, the
        search will start with the cursor and continue through the
        entire file until the text is found.

   G    Global - Start at the begining of the file or the end of the
        file, instead of the cursor position. If you also specified B,
        then the search will start at the end of the file, and work
        backwards, otherwise it will start at the beginning and work
        forward.

   n    This is a decimal number. Word fugue will look for the nth
        occurrence of the search string.

   Press enter when you have entered the options, and Word Fugue will
   search for the letters and.

   The cursor stops on the first occurrence of "and".
   Press CTRL L to find the next occurrence. Keep pressing CTRL L.
   When Word Fugue stops finding "and", the Top Line says:
       Not found - Press ESC

To search and replace:

1. First, you must tell Word Fugue that you wish to replace text. You
   can do this in any of 3 ways.

   (i)   Press function key F6
or (ii)  Activate the pull down menu. Press S for Search,
         followed by R for Replace
or (iii) Press CTRL Q A (this is a WordStar command)

   A box will appear on the screen with the word "Search for"
   Type in the letters  and   and press return.
   Word Fugue will prompt with "Replace"
   Type the letters plus  to search for "and" and
   replace with "plus".
   Word Fugue will then prompt you with "Options (UGWBLN)"

   The options available are the same as for FIND above, with the
   following additions:

   G    Global search - go to the top of the file, and search for
        all occurrences, and replace them. You do not need to
        press CTRL L for the next occurrence. If you also
        specified the B option, then Word Fugue will go to the end of
        the file and search backwards. It will continue searching
        until it gets to the other end of the file.

   n    This is a decimal number. Word Fugue will only search for n
        occurrences, and will stop when it has encountered the nth
        occurrence.

   N    Do not ask. The default when replacing is to ask you "Replace
        Y/N/A/Q", to which you enter y for replace this occurrence,
        and n for not this occurrence. If you specify N option, then
        Word Fugue will not ask you, but will replace every
        occurrence. Q indicates quit replace, while A indicates
        replace all further occurrences without asking.

   Press enter when you have typed in any options. (you do not
   need to type in options). The cursor jumps to the first
   occurrence of "and" and replaces it with "plus".

Lesson 13: Help Screens and Menus
=================================

Now you know the basics of editing text with Word Fugue. If you forget a
command and need some help, you can use the Help screens. You must
have the help file available when you load Word Fugue, otherwise it
will not display any help. The help file must be either in the
directory from which you started Word Fugue, the Default directory, or
any of the directories displayed in your path statement. If Word fugue
could not locate the help file, you will be told "No help available"

1. Press F1 for help. The Pop Up help menu appears
   This menu contains a list of Help topics.

These Help screens are not designed to teach you how to use Word Fugue.
Instead, they will help you remember which key does what. Each of
these Help screens covers a specific topic. To access the
other Help topics, press one of Page Up or Page Down.

2. Press the Page Up and Page Down keys and look at the different
   topics

3. Press Esc to return to the editing screen.

You can also obtain help about particular commands, by activating the
pull down menu, highlighting a command and then pressing F1. You will
see some help screens that relate only to the command highlighted. If
you are on an item that is actually a sub menu, you will be told to
select a lower level to obtain help.



Lesson 14: Printing
===================

Printing is probably the most satisfying part of word processing.
Here's where you get to see all of your hard work pay off. You can
print a file while you're editing another.

To use the print program while you're editing a file:

1. Press Shift F1 then F followed by P. (or CTRL K P)
   A pop up menu appears.

   Do not press <Enter> on the first menu selection, Print file now,
   until the other items in the box have been set to your satisfaction.
   Selecting the first item starts the print job.

   After you select the second menu item, Name of file, a prompt box will
   request entry of the name of the file to print. When prompted for a
   file name, you may enter DOS wildcards or the name of another drive or
   subdirectory. In this case, another window will display the names of
   all matching files. You can select from this list by using the cursor
   keypad, or by pressing the first letter of the filename in which you
   are interested.

   If you wish to print a file that is currently loaded in memory, be
   sure to save any recent changes to disk before trying to print it. If
   you attempt to print a file that has unsaved changes, WordFugue will
   produce an error message.

   Set Auto formatting OFF if you wish to have WordFugue ignore
   formatting commands (. commands) in your text. In this case, text will
   print continuously with no form feeds or page breaks. Control codes
   embedded in the text will be written to the output without
   interpretation.

   By default, WordFugue prints all pages of the document. You can set
   starting and stopping pages if desired.

   Select from any of the available printer definition files (default
   extension .PDF) to find one that is appropriate for your printer. You
   can change to another file and use Options Save setup to regularly use
   that file.

   You can also choose between sending the printed output to LPT1, LPT2,
   LPT3 or to a file. LPT1 etc refer to the computer port where your
   printer is attached. If the printer is attached to a serial port, you
   must use the DOS MODE command in order to assign the serial port to
   one of the print devices LPT1, LPT2 or LPT3. Your choice will be saved
   with WordFugue when you Save Setup.

   When output is printed to a file, all control codes are written out
   just as when they are printed. In this case, you must also specify
   the name of the output file using the prompt window. If you wish to
   remove the print codes and produce plain ASCII text, you can select
   the BLANK.PDF, which strips out the control codes.

   Set Manual paper feed ON if you wish to have WordFugue prompt you to
   insert a new sheet of paper after each page. This choice is also
   stored as part of the printer definition file for your selected
   printer.

   Set Use formfeeds ON if your printer accepts ASCII character #12 to
   eject each page. Otherwise, WordFugue will fill out the end of each
   page with blank lines.

   After making all selections, move the menu bar to the Print file now
   item and press <Enter>. If you decide not to print, just press <Esc>.
   Printing occurs as a background task. You can continue editing with
   minimal loss of performance while the print job continues.

   To stop a print job at any time, execute the Print File command
   sequence. WordFugue will confirm whether you want to stop the print
   job.

   You can edit and store printer definitions from within WordFugue,
   using the File Print menu.

   Select a printer definition file (default extension .PDF) using the
   Which printer menu item. WordFugue will load this printer file into
   memory.

   NOTE - you can only print a file that you have saved to disk.
   If you are editing a file, press Shift F10 (or CTRL K S) to
   save it first so that you can continue editing while
   printing. Any changes you make after saving will not be
   printed unless you again save the file and reprint it.

Print formatting
================

There are 2 types of print formatting commands - font selection
commands and Dot commands

Font Selection
==============

Font command are special control commands in the text. The first command
turns on a font selection, and the next occurrence of the same command
turns it off. For example, if a Ctrl B character is found in the text,
it will turn on bolding. The next occurrence of Ctrl B will turn
bolding off. The appropriate printer control strings are stored in the
*.PDF files.

You can enter a Cntl B character into the text in 2 ways:

1. Press Alt B, which will insert the character Ctrl B.

2. Press Ctrl P followed by Ctrl B. The control P command tells word
   fugue to accept the following character and place it in the text,
   even though it would normally be interpretted as a command

The following are the default font commands, and the alternate methods
of entering them:

   Font command    Meaning                  You can type

   ^B On & Off    - usually bold            Alt B or Ctrl P B
   ^D On & Off    - usually double strike   Alt D or Ctrl P D
   ^S On & Off    - usually underline       Alt U or Ctrl P S
   ^T On & Off    - usually superscript     Alt T or Ctrl P T
   ^V On & Off    - usually subscript       Alt V or Ctrl P V
   ^A On & Off    - usually compressed      Alt C or Ctrl P A
   ^Y On & Off    - usually italics         Alt I or Ctrl P Y

You will find others listed in the user guide.

Fonts can be displayed on the screen, if you select to have font
display on. This is on the pull down menu, under Options, then Display
options. You can also type Ctrl O D to achieve the same effect. A text
screen cannot actually display the different fonts as they would
appear on the printed page, instead it displays them in different
colors (if you have a color monitor). If you select Colors from the
options menu, you will see what colors are used for which fonts.


Dot Commands
============

These commands appear in column one of your text, and determine how
the text prints. They are covered more fully in your user guide, but
some of the more common ones are considered here.

  Headers and Footers
  ===================

  Headers are lines that print at the top of each page, while footers
  are lines that print at the bottom of each page.

  The first header is prefixed by .HE or .H1  the dot must appear in
  column one to be effective. The 2nd heading is prefixed by .H2,
  while the third is prefixed by .H3

  The first footer is prefixed by .FO or .F1  the dot must appear in
  column one to be effective. The 2nd footing is prefixed by .F2,
  while the third is prefixed by .F3

  Some special characters appearing in the heading or footing
  represent special values.

    # means print the current page number
    @D0 means print the current date:  MMM DD, YYYY
    @D1 means print the current date:  DD/MM/YY
    @D2 means print the current date:  DD/MM/YYYY
    @D3 means print the current date:  MM/DD/YY
    @D4 means print the current date:  MM/DD/YYYY
    @D5 means print the current date:  YYYY/MM/DD
    @D6 means print the current date:  DD MMM YYYY
    @D7 means print the current date:  dayname, DD MMM YYYY
    @D8 means print the current date:  DD month YYYY
    @T0  print the current time:     HH:MM
    @T1  print the current time:     HH:MM:SS
    @T2  print the current time:     HH:MM XX     where XX = AM or PM
    @T3  print the current time:     HH:MM:SS XX  where XX = AM or PM


  Page Breaks
  ===========

    .PA     means start a new page at this line

    .CP n   means start a new page if less than n lines remain on the
            current page. This is very useful if you want to ensure
            that a paragraph always prints together, rather than the
            first line at the bottom of one page, and the other lines
            at the top of the next page.

    .PN n   means set the page number to n. This is good for printing
            chapters, where each chapter is a separate document, but
            they must have special page numbers

    .PL n   means that the length of the page is n lines. This is very
            useful if you have A4 stationary, which can fit 70 lines
            instead of the US standard 66 lines

    .FI filename
            means include a file called "filename" at this point. This
            is very useful if you have a large document. You can break
            it up into chapters, and have a file that includes each
            chapter by the .FI command. When you print the file, each
            included files will print one after the other.

            The filename must include the drive and directory of the
            file if it cannot be found in the current (default)
            directory. If Word Fugue cannot find the file, you will be
            given an error message displaying the missing file name.

            You can even place .FI commands inside included files, up
            to 5 levels deep

If you have a look at the manual.??? files that come with the
distribution disks, they contain examples of almost all print
formatting features. The top level file MANUAL.DOC includes the other
files at print time.

Have a look at these files, and try printing them. You should also
experiment with printing small documents yourself, and using different
commands.

Lesson 15: Windows
==================

When you edit a file, you can only look at a bit of it at a time
(unless it is small enough). That bit is known as a window on the
file. The window can be moved around by means of various commands,
including the Page Up and Page down keys.

For many word processing tasks, one window is enough, but not always.
You may want to look at a previous letter you wrote, or at different
chapters in a document to ensure that the wording is consistent. This
is especially true if you are programming.

Word Fugue gives you the ability to have up to 8 windows open at once.
You can have them all on the screen, or zoom one to the foreground and
drop all the others off the screen. Each window can look at a
different file, or at any file in any other window. Any changes you
make in one window will be reflected in all other windows that are
looking at the same file.

1 Open a Second Window
   Press Shift F1 followed by W for Window and O for Open. You can
   also achieve this with the sequence CTRL O A (^O A) or Shift F3.
   You will be prompted for a file name

   Type in a file name, or press Ctrl X for no file. (more on no file
   later). If you type in the name of a file that you are currently
   editing, then the new window will look at that file as well. You
   can in this case be looking at different parts of the same file.

2 Close a Window
   Press Shift F1 followed by W and C. You can also achieve this by
   typing the sequence Shift F4. If you have a file that you have made
   changes to, then Word Fugue will automatically save the file.

3 Switching Windows
   Press F2 or Shift F1 followed by W and N (or CTRL O N ). If
   you have more than one window active, you will be transfered to the
   next one on the list. Each time you enter the command you will go
   to the next window that you have open, until you come back to where
   you started. Open another window and try it now.

   You can also cycle in reverse by pressing Shift F2 or Ctrl O P to
   go to the previous window.

   Open another window and try it now.

4 Zoom Window
   Pressing Shift F5 will make one window fill up the entire screen,
   and drop the others from view. Pressing Shift F5 again will restore
   the other windows to the screen. With one window zoomed, you can
   still switch between windows.

   When a window is zoomed, the status line will show >Z< in the left
   hand corner.

5 Resize Window
   If you have more than one window open, you can make the current
   window bigger or smaller. The minimum window size is 2 lines. To
   resize the window, press Shift F6 or Ctrl O S. You will be prompted
   to use the up and down arrow keys to move the window divider, and
   to press Enter when you are finished resizing the window. Make sure
   that you have more than one window open, and try it now.

6 Import Text From Other Window
   You must have both windows open, and editing files. (They may be
   the same file). Mark a block of text in one window that you wish to
   copy (or Import) into the other window. (^KB and ^KK). Then goto
   the other window ( F2). Position the cursor at the position you
   want the text to come after. Press ^K C (CTRL K C) or F1 followed
   by B and then I. The marked text will be copied from its window
   into the current window, directly after the cursor.

.pa
Tutorial Summary

Well, you've come a long way in your Word Fugue odyssey. Let's sum up
the commands you've learned.

Lesson 1: Making a Working disk
   Make a working Word Fugue disk.            A>COPY WF.* B: <Enter>
   Configure Word Fugue for your screen       A>WF /G for MSDos
                                              shift F1 O S to save settings
Lesson 2: Creating a File
   See a directory of a disk.                 A>DIR B:  <Enter>
   Edit a new file.                           A>WF filename  <Enter>

Lesson 3: Entering Text
   Enter text one line at a time.             <Enter> at end of line
     Wordwrap on                              ^O W
     Paragraph reformatting                   ^B
     Auto reformatting                        Alt P
     Wordwrap off                             ^O W
   Repeat a character.                        Hold down the key
Lesson 4: Saving and Exiting
   Save the file then return to editing.      ^K S
   Save the file and edit new file.           F3 or ^K D
   Save the file and exit the program.        F10 or ^K X
   exit the file without saving               ^K Q
Lesson 5: Editing an Existing File
   Get back into an existing file.            A>WF filename  <Enter>
Lesson 6: Moving Around the Screen
   Move around by one line or column.         Up/Down/Lt/Rt Arrow keys
   Move to the left margin.                   Home key
   Move to the end of a line.                 End key
   Jump up or down by one screen.             PgDn or PgUp
Lesson 7: More About Entering Text
   Toggle Insert and Overwrite modes.         INS key
Lesson 8: Changing Text
   Delete character left of the cursor.       Bksp key
   Delete character at the cursor.            Del key
Lesson 9: More Ways to Change Text
   Delete from cursor to end of a line.       Ctl Bksp
   Delete the word at the cursor.             Ctl T
   Delete the word to left of the cursor.     Alt 1
   Undelete text                              Alt Y
Lesson 10: Changing Margins
   Reformat a paragraph manually.             ^B
   Bring up Ruler line, change margins.       ^O L or ^O R

Lesson 11: Copy, Move, Delete
   Copy a block of text.                      ^KB at block start, then
                                                ^KK  at block end, then
                                                ^KC  at new location
   Move a block of text.                      Same as copy but use
                                               ^KV for move
   Delete a block of text.                    Same as copy but
                                                 ^KY once marked
   Undelete block of text.                    Alt Y once for each
                                                 line
Lesson 12: Finding and Replacing
   Set find and replace text.                 F5 or F6
   Search for one occurrence.
   Search for and replace one occurrence.
   Search for/replace all occurrences.        option G
Lesson 13: Help Screens and Menus
   See the Help screen.                       F1
   See Main Menu.                             Shift F1
                                                help for commands
                                                press F1 once menu
                                                displayed
Lesson 14: Printing
   Print while editing.                       ^K P
   Printer Customization                      Setup *.PDF
Lesson 15: Windows
   Open a Window                              ^O A or Shift F3
   Close a Window                             Shift F4
   Zoom a window                              ^O Z
   Goto other window                          ^O N or ^O P
   Import Marked Text from another window     ^K C
You now have all the basic skills necessary to use Word Fugue.

To become more proficient, use the program. Please also read the
printed User Guide, and investigate the sample document files that
come with the program. Above all, experiment. That is the best way to
become proficient with the program.
```
{% endraw %}

## UPDATE.DOC

{% raw %}
```
CHANGE CONTROL LIST FOR WORD FUGUE VERSIONS

V1.6    A Pop Up calculator has been added, accessed by ^J^M. The
        results can be pasted into the text of the current window by
        use of the paste command ^J^I. The paste command will prompt
        for '=' to paste the calculation result, '#' to paste the
        equation, and '@' to prompt for and paste the appropriate
        print function. Eg date or time. These are available from 2
        macros, D for date in your preferred format, and T for the
        time in your preferred format. (access by Alt-M D and Alt-M T)

        In addition, the background printing function has been
        modified to allow nesting of include files up to 5 deep. That
        is, a file to be printed can include the dot command .FI, that
        file can include .FI, and those files can include .FI
        commands. If you require more depth, then write and tell me so
        when you register, and I will reconfigure the version that I
        send you. The overhead is that more nesting require more
        buffer space and assorted variables to keep track.

V1.6A   The code for paragraph reformat within columns has been
        tightened up so that it always adds blank lines at the bottom
        of the block to be reformatted, in order to maintain the
        integrity of the text in adjacent columns.

V1.6B   Allow print control sequences to be up to 132 chars long, to
        handle the more complex Laser print sequences.

V1.6C   Dictionary indexing changed for faster checking. The new
        dictionary is not campatible with earlier versions of WF.

V1.7A   Two new paste commands added:
            R - to install a ruler line from file WF.RLR
            M - to play back a macro from another macro file
        WF.RLR set up with a selection of ruler lines
        WF.MAC changed to to include macro commands to take advantage
        of these new commands - K, L, R, S.
        Paste command (^JI also set to @W (Alt W))

V1.7B   Indexing, Printing & TOC missing include file now displays file
        name

V1.7C   macros may now be invoked at startup from the command line
        prefix macro call by = followed by digit or letter followed by
        any relevant text. eg WF Z.PAS =1 =Cab
        separate each macro call by spaces from other parameters
        NOTE  - for long macros, simply invoke the first, then have each
                subsequent one invoke the next at the end of the current
                one. This stops buffer overflow, and makes it easier to
                debug any macros you set up.

V1.7D   Macro invoke changed to +, since .BAT files remove =from parms
        also allow new @prt function:
        @F0 = full pathname of file being printed
        @F1 = filename of file being printed, without Path

V1.7E   Fix to code around bug in Turbo Pascal Overlay manager (V5.5).
        When overlays are loaded into EMS, the overlay manager does
        not deallocate pages when the program finishes, which means
        that your LIM memory eventually fills up. This fix manually
        deallocates the pages.

V1.7F   Correct inconsistency of ^O being for hard space and also a
        print code. It now is only a hard space (a la wordStar) and
        the print code has been changed to ^\ (028 or FS). Additional
        font codes now added - ^] (029) ^^ (030) and ^_ (031). If you
        edit your printer definition files, please change text
        referring to ^O to refer to ^\. If you used this code in some
        of your text files, you can do a global replace.

        Also fixed a minor bug in font display - What Font was
        ignoring all fonts past Italic when displaying on screen. This
        now accepts all 22 possible font characters.

        Change to minor bug in display of Control characters. Before, when
        they were on the same line as the block, they were displayed in
        block color, otherwise they were displayed in Attrib color.
        Now they are displayed in Menu Select color if they are not
        within the block, otherwise the blockcolor is reversed for the
        control attrib - ie white on blue becomes blue on white and so
        on.

V1.7G   Introduce a new command to expand file includes. Place the
        cursor on the line containing the .FI command and press Alt F
        The file name will be opened in another window. This enables
        you to use Word Fugue as an outline processor. Jot your
        headings down, and on the line beneath each put in a .FI
        command. Open the files and type in details. You can nest
        include files 5 deep.

        Also included case changing commands on the menu.

V1.7H   Included window Open and Close commands on pulldown window.
        Also added file commands New file & Save and Edit New file to
        the pulldown window.

V1.7i   Permit the use of BIOS calls for all screen IO
        Command line params:
          /B    use black and white colors (despite what mode screen
                                            is in)
          /G    use BIOS for all screen io
          /Q    use BIOS for all screen io but use software cursor
                                                (Block Cursor)

V1.7j   Introduce new printing dot commands that test page number for
        Odd or Even:

        .CP follow this command by O or o and it will take a page
            break if the page number is ODD. Follow it by E or e and it
            will take a page break if the page number is EVEN.

        .PB This functions like .CP followed by .PA. It will always
            throw a page break, and optionally print another page that
            is blank, depending on whether the page number is ODD or
            EVEN. In addition, if the O or E is followed by text, that
            text will be printed centered in the blank page. The text
            will not be printed unless a blank page is printed.

            eg .PB O     THIS PAGE INTENTIONALLY LEFT BLANK

            If the current page number is ODD, a blank page will be
            printed, with the text THIS PAGE INTENTIONALLY LEFT BLANK
            centred on the page.

            If the page number is even, a page break will be taken.

            In either case, the next page to have printing will be an
            odd numbered page. (Think about it if this puzzles you)

        These commands are very useful for laying out a document where
        you want to have tables on the left hand pages, and text on
        the right hand pages. They avoid having to go through each
        time you make changes and ensure that the pages line up
        correctly.

V1.7k   This version allows you to add descriptions to files you edit.
        Whenever you display a directory, pressing F1 will permit you
        to edit a description up to 65 chars long. The descriptions
        are stored in a file FILEINFO.WF in the directory that you are
        displaying. The descriptions will display if you display a
        directory and list the associated files.

        Additional commands are Ctrl K E to edit the description for
        the file you are editing, Ctrl K Z to pack the description
        file, thus removing entries that no longer exist in the
        directory. If you have a large number of files floating
        around, this will make it much easier to keep track of which
        files are which.

V1.7L   This is to fix a minor bug when in column mode with word wrap
        and auto paragraph reformat activated, the cursor would
        sometimes stay on the preceeding line when text was wrapped.

V1.8

    1)  Changes to Table of contents Generation
        Now allows automatic generation of level numbers - place the
        level number in brackets : {.@L1} for level 1 to {.@L9} for
        level 9. Will be expanded at printing or TOC generation.

        Style - Office (one number only)   eg  1.
                Decimal (default)          eg  1.2.1.2.
                Nodot  (like Office)       eg  1
            set this with the .TS command
               .TS O or .TS D or .TS N

        Level Type each level can have its own type
                R      Roman uppercase     eg   III.
                r      roman lowercase     eg   iii.
                N      Numeric (default)   eg   3.
                A      Alphabetic uppercase eg  C.
                a      alphabetic lowercase eg  c.
           set this with the .TL command:
              .TLn x
                        where n is 1 to 9 (the level)
                              x is R,r,N,n,A,a (as above)

        Start number for a level can be set to other than 1 (default)
        For alphas , use the equivalent number eg a = 1, b=2, z=26 etc
        If you set the value for other than Level 1, you should also
        initialize all prior levels (even if to 1). Note that
        referencing a lower level will automatically reset all higher
        levels to 1.

        Set this with .TN command:
            .TNn  i
                       where n is 1 to 9 (the level)
                             i is the start number

        examples

          .TS Office
          .TL2 r
          .tl3 a
             {.@L1} this is level 1
               {.@L2} this is level 2
                  ({.@L3}) this is level 3

                    produces

             1. this is level 1
               i. this is level 2
                  (a.)  this is level 3

          .TS Nodot
          .TL2 r
          .tl3 a
             {.@L1} this is level 1
               {.@L2} this is level 2
                  ({.@L3}) this is level 3

                    produces

             1 this is level 1
               i this is level 2
                  (a) this is level 3

          .TS Decimal
          .TL2 r
          .tl3 a
             {.@L1} this is level 1
               {.@L2} this is level 2
                  ({.@L3}) this is level 3

                    produces

             1. this is level 1
               1.i. this is level 2
                  (1.i.a.) this is level 3

        Embed the commands in the .TC lines for the correct numbers to
        appear in table of contents

    2)  Set font control when the cursor is in the marked block and
        the window is in column mode now sets the font at the
        beginning and end of each column line in the block.

    3)  Introduction of page number types - as for level number types.
        Default is numeric, but can be set with the .PT command -

                 .PT Roman uppercase
                 .PT roman lowercase
                 .PT Alphabetic uppercase
                 .PT alphabetic lowercase
                 .PT Numeric

   4)   Introduction of Mail merge commands:

                .DF filename delim
                .RV variable list
                .AV prompt,variable
                .SV variable=value
                .MA variable=equation
                .DM message
                .GO go to top of file and start again
                .WS Y or N for Wordstar compatible variable
                    replacement

        The .DF command defines the data file containing the variables
        to be merged into the text. If you follow the filoename by at
        least one blank and another character, then that character is
        used as a delimiter instead of a comma

                eg .DF names.dat /

        means that the file NAMES.DAT contains the variables to be
        read, and that the separator between variables is a slash (/).
        The default is comma (,).

        The .RV command defines the variables to be found on a single
        line of the data file. You can have more that one .RV to
        define different lines. If a line is exhausted before all the
        variables are read, the remainder are set to blank.

                eg .RV name,address1,address2

        means that each line of the file will look like this:

                Joe Blogs,17 West street,Newtown DG 9999

        If you want to leave a variable blank, then leave it out:

                Joe Blogs,,Newtown Post Office DG 9999

        You can use a different separator, as defined on the .DF line,
        and put different variables on different lines:

                .DF names.dat /
                .rv name,address1
                .rv address2

        Your file would then look like this:

                Joe Blogs/17 Westside Ave.,
                Newtown DG 9999

        The .AV line will prompt you to enter the contents of the
        variable. You can inlude an optional prompt:

                .AV Address1

        will display   ADDRESS1?  and open a window for you to enter
        the value.

                .AV Enter the address,address1

        will display  Enter the address  and open a window for you to
        enter the value.

        The .SV line sets the variable to the value:

                .SV vara,this is the value for variable A
                .SV addr= This is the address

        You can use either comma (,) or equals sign (=). Leading
        spaces in the variable are significant.

        The .MA line allows you to compute values and store them in
        another variable:

                .MA VARB=25*10
                .MA varc= &vara&+&varb&

        The variables within the '&' are other variables that will be
        replaced before the calculation is done.


        The .DM line will display the following message. You can
        include variables which will be substituted before the message
        is displayed.

                .RV varb
                .DM message is varb = &varb&

        will display
                message is varb = the value of variable b

        The .GO is used to exit from the current print and go back to
        the top of the file (assuming that there are more records to
        be printed)

        The .WS is used to determine how variables in the text are
        replaced. You can set Y or N. The default is N

        All variables must be embedded within &s to be recognized and
        replaced. On Dot commands and headers and footers, this is all
        that is needed. Within the text body however, the default is
        to embed the text within braces as well:

                {.&address1&}
                {.&address2&}

        which means that you can use & within the text without too
        many problems. However, Wordstar simply embeds them in the
        text within &s, so you can set .WS Yes for increased wordstar
        compatability, and have

                &address1&
                &address2&

        recongized.

    5)  Additional printing commands for evaluating conditional
        expressions and controlling the text that is printed.

                .IF condition           is the IF condition
                .EL                     is the else
                .EI                     ends the IF expression.

        You must have an .EI for every .IF, but you do not need to
        have .EL (else). The lines following the .IF are evaluated if
        the .IF were true, while the lines following the .EL are
        evaluated if the condition were false.

V1.8a   You can now set the dot command prefix to a different charactet
	that a dot. From the pulldown menu, select Options, followed by
	Load File Option, and Print command prefix. It defaults to a dot,
	but you can set it to any character (except alphabetic and numeric)

V1.8b   Code around a bug in Turbo Pascal Overlay Manager.
	If you requested system information before using spell checker
	program would die with run time error 204

```
{% endraw %}

## WF.TXT

{% raw %}
```
@10

&TOP OF FILE

    Keystroke sequence:   10
)    Alternate keystrokes: 10

The cursor is moved to the first character in the
file.
@11

&BOTTOM OF FILE

    Keystroke sequence:   11
)    Alternate keystrokes: 11

The cursor is moved past the last character in
the file.
@18

&GO TO LINE NUMBER

    Keystroke sequence:   18
)    Alternate keystrokes: 18

The cursor will be repositioned to the specified
line number of the current window. A prompt box
will request the target line number. Enter any
number from 1 to 32767. If the value is preceded
by a plus (+) or minus (-) sign, the target line
number will be calculated relative to the current
line.
@19

&GO TO COLUMN NUMBER

    Keystroke sequence:   19
)    Alternate keystrokes: 19

The cursor will be repositioned to the specified
column number of the current line. A prompt box
will request the target column number. Enter any
number from 1 to 999. If the value is preceded
by a plus (+) or minus (-) sign, the target
column number will be calculated relative to the
current column.
@20

&GO TO WINDOW

    Keystroke sequence:   20
)    Alternate keystrokes: 20

The cursor will be moved to the current position
in another window on the screen. If only one
window is available, nothing will happen.
Otherwise a menu will appear, showing the
available windows, and the files currently in
each one. Select one of these choices by moving
the selection bar or by pressing the number of
the desired window.
@22

&UNDO LAST DELETION

    Keystroke sequence:   22
)    Alternate keystrokes: 22

The line of text most recently deleted will be
inserted into the current text stream at the
cursor position. Note that this applies only to
complete lines of text, and not to character or
word deletions. By default, 20 lines of deleted
text are stored for possible undeletion. The undo
limit can be adjusted via a Setup command.
@23

&RESTORE LINE

    Keystroke sequence:   23
)    Alternate keystrokes: 23

The current line of text will be restored to its
appearance just prior to when the cursor was
moved onto the line. The cursor position will
also be restored to the value when it entered the
line.
@34

&SEARCH FOR PATTERN

    Keystroke sequence:   34
)    Alternate keystrokes: 34

The current window will be searched to find a
specified sequence of text. When the pattern is
found, the cursor will be positioned at the
beginning of the pattern, and the matched text
highlighted until the next keystroke.

A prompt box will allow entry of the text
pattern and search options. Enter any text or
control characters just as they would be typed in
the body of the file.
]

Search options control the behavior of the
search. The following options are available:

 U - ignore case (Upper-case) while searching
) B - search Backwards from the cursor
)     position.
) W - search for whole Words only.
) G - search Globally, starting at the
)     beginning of the file (or end, if
)     searching backwards).
) L - search Locally (only within marked block).
) n - search for the nth occurrence of the
)     string (n is an integer).
]

Enter the following sequence of keystrokes to
search for the end of each text line:
<CtrlP><CtrlM><CtrlP><CtrlJ>. This sequence
enters Carriage return/Line feed into the search
pattern.

Note that each pattern must be found within a
single line. No match may span multiple lines.
@35

&SEARCH AND REPLACE

    Keystroke sequence:   35
)    Alternate keystrokes: 35

The current window will be searched for a
specified sequence of text. When the pattern is
found, it will be replaced with another specified
text sequence.

A prompt box will allow entry of the search
text, replacement text, and search options. Enter
any text or control characters just as they would
be typed in the body of the file.
]

Search options control the behavior of the
search. The following options are available:

 U - ignore case (Upper-case) while searching
) B - search Backwards from the cursor
)     position.
) W - search for whole Words only.
) G - search Globally, starting at the extreme
)     end of the file.
) L - search Locally (only within marked block).
) N - do Not prompt for confirmation when the
)     pattern is found.
) n - replace n occurrences of the string
)     (n is an integer).
]

If the N option is not specified, a prompt will
occur each time the search pattern is found. This
prompt will provide the following options:

 Y - replace this text and continue searching.
) N - do Not replace, but continue searching.
) A - replace this text and replace All others
)     without prompting.
) Q - do not replace, and Quit searching.
]

Enter the following sequence of keystrokes to
search for the end of each text line:
<CtrlP><CtrlM><CtrlP><CtrlJ>. This sequence
enters Carriage return/Line feed into the search
pattern.
@36

&SEARCH AND USE MACRO

    Keystroke sequence:   36
)    Alternate keystrokes: 36

The current window will be searched for a
specified sequence of text. When the pattern is
found, the cursor will be positioned just past the end of the
string, and a specified macro will be played
back.
]

A prompt box will allow entry of the search
text, macro selection, and search options. Enter
any text or control characters just as they would
be typed in the body of the file. The macro must
have been defined prior to using the search and
apply macro command.
]

Search options control the behavior of the
search. The following options are available:

 U - ignore case (Upper-case) while searching
) B - search Backwards from the cursor
)     position.
) W - search for whole Words only.
) G - search Globally, starting at the extreme
)     end of the file.
) L - search Locally (only within marked block).
) N - do Not prompt for confirmation when the
)     pattern is found.
) n - apply macro for n occurrences of the
)     search string (n is an integer).
]

If the N option is not specified, a prompt will
occur each time the search pattern is found. This
prompt will provide the following options:

 Y - apply macro and continue searching.
) N - do Not apply macro, but continue searching.
) A - apply macro and apply at All matches
)     without prompting.
) Q - do not apply macro, and Quit searching.
]

Enter the following sequence of keystrokes to
search for the end of each text line:
<CtrlP><CtrlM><CtrlP><CtrlJ>. This sequence
enters Carriage return/Line feed into the search
pattern.
@37

&SEARCH AGAIN

    Keystroke sequence:   37
)    Alternate keystrokes: 37

The previous search operation will be repeated.
This will repeat a plain search, a search and
replace, or a search and apply macro command.
@38

&OPERATING SYSTEM

    Keystroke sequence:   38
)    Alternate keystrokes: 38

Any DOS command or program may be executed. A
prompt box will ask for the name of the command
or program to run. Entering an empty line at the
prompt box will cause a DOS shell to be invoked.
You may execute any sequence of DOS commands from
the shell, and finally return to the editor by
typing Exit.
]

The DOS shell requires that a copy of COMMAND.COM
be present in the normal drive and directory
assigned by DOS. Sufficient random-access memory
must be available for the shell and any command
that you specify.

Do not execute any program that becomes memory
resident while within the DOS shell.
@39

&BACKWARD TAB

    Keystroke sequence:   39
)    Alternate keystrokes: 39

The cursor will be moved to the next tab left of
the current position. This command is available
only in fixed tab mode.
@40

&EDIT ANOTHER FILE

    Keystroke sequence:   40
)    Alternate keystrokes: 40

The current window will be cleared, and a prompt
box will ask for the name of another file to
edit. If the current window already holds a file
that has been modified, you will be given the
opportunity to save it.
]

When prompted for a file name, you may enter DOS
wildcards or the name of another drive or
subdirectory. In this case, another window will
display the names of all matching files. You can
select from this list by using the cursor keypad,
or by pressing the first letter of the filename
in which you are interested.

By entering an empty line for the file name, you
can edit a file without specifying a name for it.
A name can be specified later when you want to
write it out to disk.
@41

&FILE QUIT

    Keystroke sequence:   41
)    Alternate keystrokes: 41

The editing session will end and you will return
to DOS. If any windows have been modified, prompt
boxes will appear and you will be given the
opportunity to save each modified file. If you
type <Esc> at any of the prompt boxes, the FILE
QUIT command will be interrupted and you will
return to the current text window.
@42

&READ BLOCK FROM FILE

    Keystroke sequence:   42
)    Alternate keystrokes: 42

A prompt box will ask for the name of a file to
read. This file will be read into the current
window, starting at the current cursor position.
The newly read text will be marked as a block.
]

When prompted for a file name, you may enter DOS
wildcards or the name of another drive or
subdirectory. In this case, another window will
display the names of all matching files. You can
select from this list by using the cursor keypad,
or by pressing the first letter of the filename
in which you are interested.
@43

&SAVE AND CONTINUE EDIT

    Keystroke sequence:   43
)    Alternate keystrokes: 43

The contents of the current window will be saved
to disk, using a file name the same as when the
file was first read. If the file has not been
named, a prompt box will ask for a new name. If
the disk file already exists, a backup copy will
be made before overwriting the existing version.
The cursor will remain in place after the file is
written to disk.
@44

&WRITE BLOCK TO FILE

    Keystroke sequence:   44
)    Alternate keystrokes: 44

The currently marked block will be written to a
disk file. If no block is marked, an error
message will be produced. If the disk file
already exists, you will be given the choice of
overwriting it or appending to it.
@46

&FILE OPEN

    Keystroke sequence:   46
)    Alternate keystrokes: 46

A prompt box will ask for the name of a new file
to read. If another file is already being edited,
the current window will be split in half, and the
new file will be read into the new window.

By specifying a file name that matches an
existing window, you may look at two regions of
the same file. Changes made in one window will
affect all other windows which contain the same
file.
]

When prompted for a file name, you may enter DOS
wildcards or the name of another drive or
subdirectory. In this case, another window will
display the names of all matching files. You can
select from this list by using the cursor keypad,
or by pressing the first letter of the filename
in which you are interested.

By entering an empty line for the file name, you
can edit a file without specifying a name for it.
A name can be specified later when you want to
write it out to disk.
@47

&RESIZE WINDOW

    Keystroke sequence:   47
)    Alternate keystrokes: 47

Use this command to change the height of the
current window. The up and down arrow keys will
move the window dividing lines. Press <Enter>
when the window has the desired size.
@48

&SAVE/SWITCH FILES

    Keystroke sequence:   48
)    Alternate keystrokes: 48

The file in the current window will be stored to
disk. A prompt box will then ask for the name of
another file to edit. The new file will be read
into the current window. All window sizes will
remain the same.
]

When prompted for a file name, you may enter DOS
wildcards or the name of another drive or
subdirectory. In this case, another window will
display the names of all matching files. You can
select from this list by using the cursor keypad,
or by pressing the first letter of the filename
in which you are interested.

By entering an empty line for the file name, you
can edit a file without specifying a name for it.
A name can be specified later when you want to
write it out to disk.
@49

&NEXT WINDOW

    Keystroke sequence:   49
)    Alternate keystrokes: 49

The cursor will be moved to the current position
in the next window down on the screen. If the
cursor is already in the lowest window, it will
move to the topmost window. If there is only one
window, nothing will happen.
@51

&ZOOM WINDOW

    Keystroke sequence:   51
)    Alternate keystrokes: 51

The current window will grow to fill the screen.
Other text windows are kept in memory, but are
not visible until zoom is toggled off. The Next
window and Previous window commands will bring
each window to the forefront in succession. Text
markers and blocks may be accessed as usual in
the hidden windows. The only exception is block
delete: a block will not be deleted from a hidden
window.
]

When zoom is active, a letter Z will appear at the
left edge of the window status line. Toggling
the zoom command again will make all windows
visible.
@52

&BLOCK BEGIN

    Keystroke sequence:   52
)    Alternate keystrokes: 52

The cursor position will become the start of a
marked block.
@53

&BLOCK END

    Keystroke sequence:   53
)    Alternate keystrokes: 53

The cursor position will become the end of a
marked block.
@54

&START OF BLOCK

    Keystroke sequence:   54
)    Alternate keystrokes: 54

The cursor will be moved to the start of the
current block, whether it is visible or not.
@55

&END OF BLOCK

    Keystroke sequence:   55
)    Alternate keystrokes: 55

The cursor will be moved to the end of the marked
block, whether it is visible or not.
@56

&BLOCK COPY

    Keystroke sequence:   56
)    Alternate keystrokes: 56

A copy of the marked block will be inserted at
the current cursor position.
@57

&BLOCK MOVE

    Keystroke sequence:   57
)    Alternate keystrokes: 57

The marked block will be removed from its current
location and inserted at the current cursor
position.
@58

&BLOCK DELETE

    Keystroke sequence:   58
)    Alternate keystrokes: 58

The marked block will be deleted from the text
stream. If the block spans more than one line,
the deleted lines may be recovered via the
Undelete command.
@59

&HIDE BLOCK

    Keystroke sequence:   59
)    Alternate keystrokes: 59

The on-screen highlighting of the marked block is
toggled on or off. Blocks can be copied, moved,
or deleted only when the block is visibly marked.
Movement to block start or end is possible even
when the block is not visible.
@82

&LOAD MACROS FROM DISK

    Keystroke sequence:   82
)    Alternate keystrokes: 82

A previously stored file of WordFugue keyboard
macros is loaded into memory. The macro file is a
binary file in a special format used by
WordFugue. Macros may be recorded, edited, and
stored to disk from within WordFugue. Each macro
file contains 37 macros, each of which may hold
up to 255 keystrokes. WordFugue automatically
loads the macro file WF.MAC, if found, when the
program is started.
@83

&STORE MACROS TO DISK

    Keystroke sequence:   83
)    Alternate keystrokes: 83

The current set of WordFugue keyboard macros is
written to a disk file. A prompt box will ask for
a file name. The macro file is a binary file in a
special format used by WordFugue. Macros may be
recorded, edited, and stored to disk from within
WordFugue. Each macro file contains 37 macros,
each of which may hold up to 255 keystrokes.
WordFugue automatically loads the macro file
WF.MAC, if found, when the program is started.
@84

&TOGGLE MACRO RECORD

    Keystroke sequence:   84
)    Alternate keystrokes: 84

Any keystrokes entered after this command is
activated are stored within a keyboard macro,
which may be edited and later played back within
WordFugue. To stop macro recording, enter this
command a second time. A prompt box will ask for
which of the 37 macros should store the newly
recorded one, and for a descriptive name for the
macro.

Each macro can hold up to 255 keystrokes. Macros
can play back other macros. Macros are played
back by pressing one of the installed keystroke
combinations, or by choosing the WordFugue Macro
Playback option from the menu system.

@95

&PLAY BACK MACRO

    Keystroke sequence:   95
)    Alternate keystrokes: 95
)
This command allows you to replay a macro simply
by pressing the activation character 0..9 and A..Z
without having to go through the macro replay menu.
Lowercase letters count as uppercase letters.
)
)Press the replay macro command sequence followed by the
number or letter. The macro will be replayed.

@96

&PLAYBACK MACRO PROMPTED

This command will play back a previously recorded
macro. A menu showing the name of all macros will
appear; you should choose the one desired, either by moving
the high light bar, or by typing in the number corresponding
to the macro.

The following screen gives shortcut commands which
allow you to playback macros without using the
menu system.
]
The following commands will playback a macro
without using the menu system:
)Macro 1    Main: 85    Alternate: 85
)Macro 2    Main: 86    Alternate: 86
)Macro 3    Main: 87    Alternate: 87
)Macro 4    Main: 88    Alternate: 88
)Macro 5    Main: 89    Alternate: 89
)Macro 6    Main: 90    Alternate: 90
)Macro 7    Main: 91    Alternate: 91
)Macro 8    Main: 92    Alternate: 92
)Macro 9    Main: 93    Alternate: 93
)AnyMacro 0..9 A..Z   Main: 95    Alternate: 95   followed by
number or letter
)AnyMacro n times   Main: 94    Alternate: 94
)   You will be prompted for macro and number of times
]

The connection between macros and activation characters is
quite simple - the first 10 macros are named 0 to 9, the
next 26 are named A to Z.
@97

&EDIT CURRENT FILE DESCRIPTION

    Keystroke sequence:   97
)    Alternate keystrokes: 97

Use this command to add or edit the descriptive
comment attached to the file you are editing.
@98

&PACK DESCRIPTION FILE

    Keystroke sequence:   98
)    Alternate keystrokes: 98

Use this command to remove descriptions of files
that are no longer in the directory, or which
have blank comments.

)Comments are stored in a file called FILEINFO.WF
@99

&SET DOT COMMAND PREFIX

    Keystroke sequence:   99
)    Alternate keystrokes: 99

By defualt, all printer commands are prefixed by a dot (.)
in column 1. This is the wordstar standard. However, this may interfere
with some of your files, and so this command allows you to set it
to be any special character. for example, you could use an @, or perhaps
a |, or any character that is not a letter of the alphabet or a number
@100

&PASTE RESULT

    Keystroke sequence:   100
)    Alternate keystrokes: 100

This function is used to paste various function results
into the text file you are editing.
)
)   = - pastes the result of the last calculation
)   # - pastes the actual equation used
)   @ - prompts for a print function to evaluate,
)         and pastes the result

@101

&CALCULATOR

    Keystroke sequence:   101
)    Alternate keystrokes: 101

This function pops up a calculation window, and permits
you to enter mathematical equations, and calculates the
result when you press Enter. A list of available
functions is given in the window.

Equations are entered in normal mathematical fashion,
including brackets:
)      SQRT(PI + exp(1.734502))-sin(50)
) or   144+84+88+35+69
)
)Decimal values should start with 0. rather than .,
since the calculator will beep if it finds an error.
Sometimes an error message will appear, when the
calculator detects situations like dividing by zero, or
a floating point overflow. This last occurs when you
exceed the bounds of the calculatable values. The range
of values is ± 1*E1400 (which is quite large) and is
calculated to 19 significant digits.

If you have an 8087 maths co-processor, the calculator
will use that, otherwise it will emulate it. (Same
accuracy, only slower).
@102

&COLUMN REPLACE

    Keystroke sequence:   102
)    Alternate keystrokes: 102

Column replace mode only has meaning in conjunction
with Column Mode being ON. When Column Replace Mode is
ON moved and copied blocks will overwrite any text in
the area they are copied to, and delete and move will
space fill the deleted text.

When Column Replace mode is OFF, moved and copied
blocks will push existing text to the right, and delete
and move will suck text left to fill the hole left by
the deleted text.

@103

&COLUMN MODE

    Keystroke sequence:   103
)    Alternate keystrokes: 103

Column mode determines whether blocks of text continue
at the start of the next line, or continue at the same
column number in the line below. When column mode is
off, all text between the start block marker and the
end block marker is moved/copied/deleted. If Column
Mode is ON, the start marker is considered to mark the
top left corner of a rectangular block, while the end
marker is considered to mark the bottom right corner.
If the Block end column is less than the block start
column, no block will be visible.

If Column Mode is ON, the status line will show either
Cols if Column Replace is OFF, or C Rep if Column
Replace is ON.

If word wrap is on, columns of text can be delineated
by use of < and > or ] in the ruler line. In this case,
columns of text will wrap independently of other
columns, paragraph reformat will only reformat text
within the column boundaries, text will only insert
within the column (other columns will not be
displaced), and delete character and delete word will
only delete within column boundaries.

@104

&GET INFORMATION

    Keystroke sequence:   104
)    Alternate keystrokes: 104

Various facts about WordFugue and the current
file are displayed. Information shown includes
the complete path name of the current file; its
size in bytes, words, lines, and pages; whether
it has been modified since last disk save; the
time and date; available RAM and disk space; the
current directory; and the DOS and WordFugue
version numbers.

Some of the statistics that WordFugue presents
take a while to compute. By pressing any key while
the Get Info window is being updated, you can
"short-circuit" the computation of some items.
@106

&TOGGLE INSERT MODE

    Keystroke sequence:   106
)    Alternate keystrokes: 106

When insert mode is active, newly typed text is
inserted into the current text line, pushing
characters to the right of the cursor aside to
make room. When insert mode is off, newly typed
text overwrites existing text. Many commands,
such as block copy and insert line, operate in
insert mode independent of the setting of this
toggle.
@107

&TOGGLE AUTOINDENT MODE

    Keystroke sequence:   107
)    Alternate keystrokes: 107

When autoindent mode is active and the <Enter>
key is pressed, the new line of text will be
indented the same number of spaces as the line
immediately above it. The setting of this toggle
also affects the operation of the paragraph
reformatting command.
@108

&TOGGLE CASE

    Keystroke sequence:   108
)    Alternate keystrokes: 108

The case of the character at the cursor location
will be toggled from upper to lower, or from
lower to upper. If a block is marked and visible,
and the cursor is anywhere within the marked
block, the command will toggle the case of the
entire block.
@109

&LOWER CASE

    Keystroke sequence:   109
)    Alternate keystrokes: 109

The case of the character at the cursor location
will be set to lower-case. If a block is marked
and visible, and the cursor is anywhere within
the marked block, the command will change the
case of the entire block.
@110

&UPPER CASE

    Keystroke sequence:   110
)    Alternate keystrokes: 110

The case of the character at the cursor location
will be set to upper-case. If a block is marked
and visible, and the cursor is somewhere within
the marked block, the command will change the
case of the entire block.
@111

&SET RIGHT MARGIN

    Keystroke sequence:   111
)    Alternate keystrokes: 111

A prompt box will ask for a new value for the
right margin. Entering an empty prompt string will
set the right margin to the current cursor column.
The right margin is used only when Word Wrap mode
is active. When that is so, text entered in a
column beyond the right margin will automatically
be wrapped to the next line. Paragraph formatting
will move words so that lines are as full as
possible within, but not exceeding, the right
margin.
@112

&FORMAT PARAGRAPH

    Keystroke sequence:   112
)    Alternate keystrokes: 112

Format paragraph is available only when Word
Wrap mode is active. Paragraph reformatting will
move words so that lines are as full as possible
within, but not exceeding, the current left and
right margins. If Justify mode is active, the
lines will also be evenly filled with spaces so
that the rightmost word ends on the right margin.

The paragraph reformat is terminated when a blank
line, or a line beginning with a format character
(.), is reached.
@113

&TOGGLE WORD WRAP

    Keystroke sequence:   113
)    Alternate keystrokes: 113

When Word Wrap mode is active, paragraph
reformatting and automatic word wrap are
available. Otherwise, left and right margin
settings are ignored, and text may be entered in
any column up to the maximum line length.
@114

&SET LEFT MARGIN

    Keystroke sequence:   114
)    Alternate keystrokes: 114

A prompt box will ask for a new value for the
left margin. Entering an empty prompt string will
set the left margin to the current cursor column.

When Word Wrap mode is active, the left margin
controls the leftmost position where text may be
entered. The left margin also controls the
operation of the paragraph formatting command.

The left and right margins can be made visible by
toggling the Tab Line Display.

Print formatting commands require that the
format character (.) be located in column 1 even
if the left margin is set to a number greater
than one. To achieve this, enter the format
command starting at the left margin, move the
cursor to column 1 with the Left of Line command,
and delete the intervening spaces via Delete
Word. Alternatively, activate the Margin Release
command while the format command is entered.
@115

&DISPLAY TABS

    Keystroke sequence:   115
)    Alternate keystrokes: 115

Toggling Display Tabs ON reserves one line of the
current window for display of tab settings and
margins. The tabs and margins can be active
whether or not the tab line is visible.
@116

&INSERT UNDO BUFFER

    Keystroke sequence:   116
)    Alternate keystrokes: 116

The entire contents of the undo buffer are
inserted into the current text stream, prior to
the current line. This empties the undo buffer,
that is, the operation can be used only once for
any set of deletions.
@117

&TOGGLE JUSTIFY

    Keystroke sequence:   117
)    Alternate keystrokes: 117

When Justify is active, word wrap and paragraph
reformat operations will cause each line to be
filled in with spaces such that the rightmost
non-blank character is exactly on the right
margin.
]

By toggling Justify off, and reformatting lines
or paragraphs, the additional blanks will be
automatically removed from the text. Note that
blanks manually inserted (via the Tab command,
etc.) will also be removed, unless the Compress
Wrap mode is turned off.

WordFugue does not differentiate between "soft"
blanks added during justification and "hard"
blanks manually entered. However, the character
<CtrlO> may be used in place of a normal blank
when non-changing spaces are desired. The <CtrlO>
will be printed as a normal space. To enter a
<CtrlO> in the text stream, press 25<CtrlO>.
@118

&TOGGLE PAGE BREAKS

    Keystroke sequence:   118
)    Alternate keystrokes: 118

When pagination is activated, the right two
columns of the text window will be devoted to
showing page breaks. The characters ₧° in those
columns indicate that the corresponding line is
the first printing text line on its page.

In addition, the status line for the window will
indicate what page number the cursor is on. The
Jump to Page command is available only when
pagination is activated.
]

WordFugue calculates page numbers while it is
waiting for you to enter keystrokes. As a result,
if you enter new text it may take a short period
of time before the page break markers are redrawn
at their new positions.

Although the page breaks displayed on screen
correspond to those in a printout of the
document, WordFugue does not store any special
characters in the disk file. Page breaks are
recomputed each time the file is read into
WordFugue.

Pagination can be precisely controlled via the
formatting commands. See the help section for
File Print Formatting.
@119

&TOGGLE FONT DISPLAY

    Keystroke sequence:   119
)    Alternate keystrokes: 119

When Font Display is enabled, print formatting
commands that control font selections will not
be displayed on-screen. Instead the marked text
will be displayed in a color or attribute
corresponding to the font. This "what you see is
what you get" mode allows more accurate alignment
of tables, and avoids multiple print cycles to
correct formatting commands.

The screen colors for each font may be adjusted on
the Options Colors menu.

When font display is enabled, the control
characters that select the fonts are not visible.
However, the cursor can be positioned over the
control character, and it can be deleted if
desired. The WordFugue hardware cursor grows to a
large block when it is positioned over the
control character. The value of the control
character will be displayed at the right hand
edge of the window status line when the cursor is
positioned over it.

WordFugue computes the display of on-screen fonts
while it is waiting for you to enter keystrokes.
As a result, if you enter new text it may take a
short period of time before control characters
disappear and fonts are drawn in their final
colors.
@120

&CENTER LINE

    Keystroke sequence:   120
)    Alternate keystrokes: 120

The current line will be centered between the
left and right margins. This command is active
only when Word Wrap mode is on. If both Word Wrap
and Column Mode are on, the text within the current
column will be centred within the column boundaries.
@121

&SET COLORS

    Keystroke sequence:   121
)    Alternate keystrokes: 121

All of the editor colors can be customized to
your liking. Independent color settings are
available for normal text, block marked text,
window status lines, the prompt line at the top
of the screen, text in menus and prompt boxes,
menu frames, the highlighted character by which
each menu item may be selected, the currently
selected menu item, the block cursor (when
active), and each of the seven selectable fonts.
]

The colors that you select are saved with
WordFugue when you execute the Options Save
setup command.
@122

&SAVE SETUP

    Keystroke sequence:   122
)    Alternate keystrokes: 122

The toggles, settings, colors, and options are
stored as WordFugue defaults when this command is
executed. WF.EXE must be present in the default
directory or in the installed home directory.
@123

&PRINT FILE

    Keystroke sequence:   123
)    Alternate keystrokes: 123

Any text file can be printed from within
WordFugue. Files formatted with WordFugue's page
layout commands and font controls will print with
multiple fonts, headers, footers, and page breaks.

Do not press <Enter> on the first menu selection,
Print file now, until the other items in the box
have been set to your satisfaction. Selecting the
first item starts the print job.

After you select the second menu item, Name of
file, a prompt box will request entry of the name
of the file to print. When prompted for a file
name, you may enter DOS wildcards or the name of
another drive or subdirectory. In this case,
another window will display the names of all
matching files. You can select from this list by
using the cursor keypad, or by pressing the first
letter of the filename in which you are
interested.

If you wish to print a file that is currently
loaded in memory, be sure to save any recent
changes to disk before trying to print it. If you
attempt to print a file that has unsaved changes,
WordFugue will produce an error message.

Set Auto formatting OFF if you wish to have
WordFugue ignore formatting commands (. commands)
in your text. In this case, text will print
continuously with no form feeds or page breaks.
Control codes embedded in the text will be
written to the output without interpretation.

By default, WordFugue prints all pages of the
document. You can set starting and stopping
pages if desired.

Select from any of the available printer
definition files (default extension .PDF) to find
one that is appropriate for your printer. You can
change to another file and use Options Save setup
to regularly use that file.

You can also choose between sending the printed
output to LPT1, LPT2, LPT3 or to a file. LPT1 etc
refer to the computer port where your printer is
attached. If the printer is attached to a serial
port, you must use the DOS MODE command in order
to assign the serial port to one of the print
devices LPT1, LPT2 or LPT3. Your choice
will be saved with WordFugue when you Save
Setup.

When output is printed to a file, all control
codes are written out just as when they are
printed. In this case, you must also specify the
name of the output file using the prompt window.

Set Manual paper feed ON if you wish to have
WordFugue prompt you to insert a new sheet of
paper after each page. This choice is also stored
as part of the printer definition file for your
selected printer.

Set Use formfeeds ON if your printer accepts
ASCII character #12 to eject each page. Otherwise,
WordFugue will fill out the end of each page with
blank lines.

After making all selections, move the menu bar to
the Print file now item and press <Enter>. If
you decide not to print, just press <Esc>.
Printing occurs as a background task. You can
continue editing with minimal loss of performance
while the print job continues.

To stop a print job at any time, execute the
Print File command sequence. WordFugue will
confirm whether you want to stop the print job.
]

&PRINTER DEFINITIONS

You can edit and store printer definitions from
within WordFugue, using the File Print menu.

Select a printer definition file (default
extension .PDF) using the Which printer menu
item. WordFugue will load this printer file into
memory.

Any of the command sequences that control various
printer fonts can be edited using the Edit printer
codes menu selection. Each font is associated
with two strings - one to turn the font ON, and
another to turn it OFF. The sequences are activated by
control characters embedded in the text. These characters
can be inserted either by the special font characters (look
in help under Text Attributes) or by pressing the Control
character insertion command (25 or 25) followed by the
letter corresponding to the control character.

The relationship between the order of the sequences in the
file and the codes needed to activate them are as follows:

)Initilization  - sent to printer before file is printed
)Reset          - sent to printer after file is printed
)   these others are sent when a control character is
encounterd - the ON sequence is sent the first time, and the
OFF sequence is sent the second time. (then back to ON ...)
)
)^B On & Off    - usually bold
)^D On & Off    - usually double strike
)^S On & Off    - usually underline
)^T On & Off    - usually superscript
)^V On & Off    - usually subscript
)^A On & Off    - usually compressed
)^Y On & Off    - usually italics
)^C On & Off
)^E On & Off
)^F On & Off
)^G On & Off
)^N On & Off
)^O On & Off
)^P On & Off
)^Q On & Off
)^R On & Off
)^U On & Off
)^W On & Off
)^X On & Off

The linkage between the control character encountered in the
text and the sequence used is positional as detailed above.
Feel free to define your own meanings for these sequences,
but we advise you to include the activation character and
the words ON or OFF in the name, so that you do not forget
what they are. Word Fugue predefines the names of each
sequence, so should you delete the name of a sequence, word
Fugue will show the predefined name.

When you choose a sequence to edit, it appears in
another window. It can be edited using the cursor
keys, and the <Del> or <Backspace> keys. Most
characters you type will be inserted literally
into the string. <CtrlBksp> will delete the
existing string. <Enter> will end the session
in the string editor. In case you need to enter
any of these special keys as part of the control
string, press the <ScrollLock> key to enter
Literal mode. In this mode, all keystrokes will be
inserted into the string without further
interpretation.

The printer definition currently held in memory can be
stored to a disk file using the Save printer setup menu
item. WordFugue stores the printer command sequences for all
fonts, as well as the default settings for manual paper feed
and formfeeds, when you save the setup.

WordFugue will prompt for a file name when you
decide to store the current definition. The
default extension for printer definitions is .PDF.
@124

&FLUSH UNDO BUFFER

    Keystroke sequence:   124
)    Alternate keystrokes: 124

The contents of the undo buffer will be deleted,
freeing up whatever memory is being used. This
command is useful in combination with the Insert
Undo Buffer command.
@125

&TOGGLE MAKE BACKUP

    Keystroke sequence:   125
)    Alternate keystrokes: 125

When this is ON the old version of the file
(before editing) is saved with the extension of .BAK
)
)When this is OFF the old version is not saved.
@126

&TOGGLE CONTINUOUS REFORMAT

    Keystroke sequence:   126
)    Alternate keystrokes: 126

When this is ON and word wrap is set, the current
paragraph is reformatted as you edit it. If you press
any key, reformatting stops until you pause. The pause
is about a second, and in most cases, the paragraph can
be reformatted before you continue typing.

When this is OFF paragraphs are not reformatted unless
you use the Reformat Paragraph command (112 or 112)

Refer to this command for further information.
@127

&ACTIVE DIRECTORY

    Keystroke sequence:   127
)    Alternate keystrokes: 127

The current default drive or directory may be
changed using this command. Entering wildcards
will cause a directory window to appear showing
possible choices.

Files previously opened in other directories will
be properly accessed even after the active
directory is changed.
@128

&FILE DIRECTORY

    Keystroke sequence:   128
)    Alternate keystrokes: 128

Use this command to browse through a file
directory. Use standard DOS pathname and wildcard
notation to specify a file mask for the directory.

You can press F1 to add or edit a description line attached
to the highlighted line.
@129

&GO TO PAGE NUMBER

    Keystroke sequence:   129
)    Alternate keystrokes: 129

The cursor will be repositioned to the first line
of the specified page of the current window. This
command is available only when pagination is
active for the window. A prompt box will request
the target page number. Enter any positive integer
value. If the value is preceded by a plus (+) or
minus (-) sign, the target page number will be
calculated relative to the current page.
@130

&SET TOP MARGIN

    Keystroke sequence:   130
)    Alternate keystrokes: 130

This specifies the number of lines to leave blank
at the top of each page during printing or
pagination of the file in the current window. The
top margin is a default value that will be
overridden by WordFugue format (.) commands
embedded in the text. The value you specify in
the prompt box is not stored in the document file.
It is a default value that exists only while the
file is being edited.
@131

&SET BOTTOM MARGIN

    Keystroke sequence:   131
)    Alternate keystrokes: 131

This specifies the number of lines to leave blank
at the bottom of each page during printing or
pagination of the file in the current window. The
bottom margin is a default value that will be
overridden by WordFugue format (.) commands
embedded in the text. The value you specify in
the prompt box is not stored in the document file.
It is a default value that exists only while the
file is being edited.
@132

&SET PAGE LENGTH

    Keystroke sequence:   132
)    Alternate keystrokes: 132

This specifies the total number of lines on each
page during printing or pagination of the file in
the current window. The page length is a default
value that will be overridden by WordFugue format
(.) commands embedded in the text. The value you
specify in the prompt box is not stored in the
document file. It is a default value that
exists only while the file is being edited.
@133

&SET UNDO LIMIT

    Keystroke sequence:   133
)    Alternate keystrokes: 133

This specifies the maximum number of lines of
deleted text that will be stored in the Undo
buffer. If Undo limit is 10, and you delete 15
lines, the first five lines deleted will be lost.
Whenever lines are Undeleted, that space is
recovered for the undo buffer to reuse.
@134

&TOGGLE TAB EXPANSION

    Keystroke sequence:   134
)    Alternate keystrokes: 134

When tab expansion is ON, any tabs encountered
upon read-in of a file are expanded into spaces,
using a tab spacing that you specify. If tab
expansion is OFF, WordFugue leaves the tabs
intact. However, WordFugue does not expand tabs
as it displays them, so these will be displayed
on the screen as I.
@135

&SET FILE EXTENSION

    Keystroke sequence:   135
)    Alternate keystrokes: 135

If you edit many files with the same extension,
such as .DOC, you should enter that value for the
default extension. WordFugue will automatically
supply the default extension whenever you respond
to a filename prompt without entering an
extension. The extension you enter should not
include a period or any DOS wildcards, and is
limited to three characters.
@136

&SET TABS

    Keystroke sequence:   136
)    Alternate keystrokes: 136

The tab settings will be initialized based on the
contents of the current line of text. The start
of each blank-delimited word will set a tab at
that column. Any other tabs will be cleared. By
using this command in concert with the Put Tabs
command, you can store a custom tab line as part
of a document and easily use it later.

You can return to the default evenly spaced tabs
by activating the Options Tabs Restore even
menu selections.
@137

&SET TAB SIZE

    Keystroke sequence:   137
)    Alternate keystrokes: 137

By default, a tab is placed after every eight
columns of text. This tab size is also used when
files containing tabs are read into WordFugue.
Change the tab size and use the Restore even
command to initialize a different set of regularly
spaced tabs.
@138

&PUT TABS

    Keystroke sequence:   138
)    Alternate keystrokes: 138

The tab settings are stored into the current
window as a formatted text line. The line begins
with the WordFugue formatting character (.), and
will be ignored during printing. Use this command
in concert with the Set tabs command to store
a custom tab line as part of a document for later
use.
@139

&EDIT TABS

    Keystroke sequence:   139
)    Alternate keystrokes: 139

Tab positions can be interactively edited using
this command. The cursor will be moved to the
current window's tab line display. Use the cursor
keys or the tab key to move along the tab line.
Pressing the space bar will toggle a tab setting
on or off, pressing the <Ins> key will add a tab,
pressing the <Del> key will delete a tab at the
cursor position. Press <Enter> when editing is
complete, or <Esc> to undo any changes made.
@140

&SET TEMPORARY MARGIN

    Keystroke sequence:   140
)    Alternate keystrokes: 140

The current left margin will be moved to the right
by one tab stop. This is useful in making indented
lists. The temporary margin will remain in force
until you leave the current paragraph.

The temporary margin is indicated by a right
pointing arrow on the window tab display.
@141

&FORMAT BLOCK

    Keystroke sequence:   141
)    Alternate keystrokes: 141

Paragraph formatting will be applied to all
lines of text in the currently marked block. The
block must be highlighted, and the cursor must be
somewhere within the block, or an error message
will be produced.
@142

&FILE CLOSE

    Keystroke sequence:   142
)    Alternate keystrokes: 142

The current text window will be cleared. If it
has been modified since being saved to disk, you
will be given the opportunity to save it. The
window will then be closed. If the window is the
only one on the screen, you will return to the
WordFugue menu system.
@143

&SET MARKER

This command stores a record of the current cursor
position to which you can easily return later.
WordFugue supports up to ten text markers, which
are labeled with the numbers 0-9 when they are
placed in the text. Shortcut commands for using
each of the ten markers are presented on a
following screen.

The text marker display writes over the character
where it is placed. It does not affect the actual
text, but merely hides it.
]

When a marker is set from the menu system, another
menu will appear showing which markers are already
in use. Redefining an existing marker erases the
previously stored position. Defining a marker at
the same position where it is currently located
has the effect of erasing it.

The following screen provides shortcut keystrokes
for setting text markers without using menus.
]

The following commands will set any of the
markers without using a menu.

)Marker 0   Main: 62    Alternate: 62
)Marker 1   Main: 63    Alternate: 63
)Marker 2   Main: 64    Alternate: 64
)Marker 3   Main: 65    Alternate: 65
)Marker 4   Main: 66    Alternate: 66
)Marker 5   Main: 67    Alternate: 67
)Marker 6   Main: 68    Alternate: 68
)Marker 7   Main: 69    Alternate: 69
)Marker 8   Main: 70    Alternate: 70
)Marker 9   Main: 71    Alternate: 71
@144

&JUMP TO MARKER

This command moves the cursor to the position of a
previously stored text marker. If the marker has
not been set, an error will occur. WordFugue
supports up to ten text markers, which are labeled
with the numbers 0-9 when they are placed in the
text.

When you jump to a marker from the menu system,
another menu will appear showing which markers
have previously been set.

The following screen provides shortcut keystrokes
for jumping to text markers without using menus.
]

The following commands will jump to any of the
markers without using a menu.

)Marker 0   Main: 72    Alternate: 72
)Marker 1   Main: 73    Alternate: 73
)Marker 2   Main: 74    Alternate: 74
)Marker 3   Main: 75    Alternate: 75
)Marker 4   Main: 77    Alternate: 77
)Marker 5   Main: 77    Alternate: 77
)Marker 6   Main: 78    Alternate: 78
)Marker 7   Main: 79    Alternate: 79
)Marker 8   Main: 80    Alternate: 80
)Marker 9   Main: 81    Alternate: 81
@145

&SET PAGING AMOUNT

    Keystroke sequence:   145
)    Alternate keystrokes: 145

This command will set the Page Up and Page Down amount to
)
)   Page - move a full screen page at a time
)   Half - move only half a screen page at a time
)    Csr - move so that cursor is at top or bottom of
)            screen or a full screen page if it is already
)            there

@146

&TOGGLE FIXED TABS

    Keystroke sequence:   146
)    Alternate keystrokes: 146

When fixed tabs are ON, tab positions are taken
from a table of columns that you can set to even
spacing or customize through various tab
commands. When fixed tabs are OFF, tab positions
are based on the contents of the text line above
the current line, just like the Turbo Pascal
editor.
@147

&SET TEMPORARY MARGIN

    Keystroke sequence:   147
)    Alternate keystrokes: 147

The current cursor column will be assigned as the
temporary left margin. If the cursor is beyond the
right margin, an error will occur.
@148

&SET HOME DIRECTORY

    Keystroke sequence:   148
)    Alternate keystrokes: 148

WordFugue uses several files in its operation.
These contain the current printer definition,
default macros, and this help file. In order to
run WordFugue from a drive or directory other than
where these files are located, you will need to
set up a Home Directory. The home directory
specifies the location of the optional WordFugue
support files on your system.
]

The following files should be kept in that
directory:

)  WF.HLP   WF.MAC   *.PDF

WordFugue will operate without the use of these
files, but in that case certain program features
will not be available.

After the home directory is set, it can be saved
with WordFugue's Save Setup command.
@149

&TOGGLE HI-BIT STRIP

    Keystroke sequence:   149
)    Alternate keystrokes: 149

When Hi-bit strip is ON, the most significant bit
of each character read from the disk will be set
to zero. This is useful when reading in files
previously generated in WordStar document mode.
Note that stripping the high
bit will also affect any usage of the IBM extended
ASCII character set, such as the line drawing
characters.

Note that a block can be stripped later by use of
command 194 or 194
@150

&EDIT MACRO

    Keystroke sequence:   150
)    Alternate keystrokes: 150

Macros recorded within WordFugue can be edited on
a character by character basis using the built-in
macro editor.

First, a prompt box will ask for a new name for
the macro, which you can accept as is, or change.
]

The macro will appear in another window. It can
be edited using the cursor keys, and the <Del>
or <Backspace> keys. Most characters you type will
be inserted literally into the macro. <CtrlBksp>
will delete the macro. <Enter> will end the
session in the macro editor. <Esc> will undo any
changes made to the macro. In case you need to
enter any of these special keys as part of the
macro, press the <ScrollLock> key to enter
Literal mode. In this mode, all keystrokes will
be inserted into the macro without any
interpretation.
@151

&WRITE TO FILE

    Keystroke sequence:   151
)    Alternate keystrokes: 151

This command will store all text in the current
window to any file that you name. When you are
editing in a window that has not previously been
named, you can use this command to assign a name
to the window. Using it in an already-named window
will cause the name of that window, and all other
windows sharing the same text stream, to be
updated to the new name.
@152

&TOGGLE KEY HELP

    Keystroke sequence:   152
)    Alternate keystrokes: 152

When Key Help is ON, WordFugue will display the
command sequences that correspond to each menu
selection while you are browsing through the menu
system. This can serve to familiarize you with
the quick keystrokes and speed up your editing.
@153

&PREVIOUS WINDOW

    Keystroke sequence:   153
)    Alternate keystrokes: 153

The cursor will be moved to the current position
in the next window up the screen. If the cursor is
already in the topmost window, it will move to the
bottom window. If there is only one window,
nothing will happen.
@154

&NEXT SENTENCE

    Keystroke sequence:   154
)    Alternate keystrokes: 154

The cursor will be moved to the beginning of the
next sentence. Sentences are delimited by periods,
semicolons, and other common punctuation marks, as
well as by blank lines and lines beginning with
the WordFugue format character (.).
@155

&PREVIOUS SENTENCE

    Keystroke sequence:   155
)    Alternate keystrokes: 155

The cursor will be moved to the beginning of the
previous sentence. Sentences are delimited by
periods, semicolons, and other common punctuation
marks, as well as by blank lines and lines
beginning with the WordFugue format character (.).
@156

&RESTORE EVEN TABS

    Keystroke sequence:   156
)    Alternate keystrokes: 156

Tabs will be set on an even spacing as determined
by the current default tab spacing. Any other tab
settings will be cleared.
@157

&WHICH FONT

    Keystroke sequence:   157
)    Alternate keystrokes: 157

WordFugue will display the font type of the
character at the cursor position. If the
character has more than one font applied to it,
WordFugue will list all of them.
@158

&SELECT BOLD

    Keystroke sequence:   158
)    Alternate keystrokes: 158

WordFugue will place the Toggle Bold control character
(<CtrlB>) at the current cursor position, and position the
cursor at
the next position. Thus, newly entered text will be in the
selected typeface.
@159

&SELECT DOUBLESTRIKE

    Keystroke sequence:   159
)    Alternate keystrokes: 159

WordFugue will place the Toggle Double-strike control character (<CtrlD>)
at the current cursor position, and position the cursor at
the next position. Thus, newly entered text will be in the
selected typeface.

If the cursor is inside a marked block, the block will have
a font control character placed at each end of the block instead.

@160

&SELECT UNDERSCORE

    Keystroke sequence:   160
)    Alternate keystrokes: 160

WordFugue will place the Toggle
Underscore control character (<CtrlS>)
at the current cursor position, and position the cursor at
the next position. Thus, newly entered text will be in the
selected typeface.

If the cursor is inside a marked block, the block will have
a font control character placed at each end of the block instead.



@161

&SELECT SUPERSCRIPT

    Keystroke sequence:   161
)    Alternate keystrokes: 161

WordFugue will place the Toggle
Superscript control character (<CtrlT>)
at the current cursor position, and position the cursor at
the next position. Thus, newly entered text will be in the
selected typeface.

If the cursor is inside a marked block, the block will have
a font control character placed at each end of the block instead.


@162

&SELECT SUBSCRIPT

    Keystroke sequence:   162
)    Alternate keystrokes: 162

WordFugue will place the Toggle
Subscript control character (<CtrlV>) at the
current cursor position, and position the cursor at
the next position. Thus, newly entered text will be in the
selected typeface.

If the cursor is inside a marked block, the block will have
a font control character placed at each end of the block instead.


@163

&SELECT COMPRESSED

    Keystroke sequence:   163
)    Alternate keystrokes: 163

WordFugue will place the Toggle
Alternate 1 control character (<CtrlA>) at the current cursor
position, and position the cursor at the next position.
Thus, newly entered text will be in the selected typeface.

If the cursor is inside a marked block, the block will have
a font control character placed at each end of the block instead.


@164

&SELECT ITALICS

    Keystroke sequence:   164
)    Alternate keystrokes: 164

WordFugue will place the Toggle Alternate 2 control
character (<CtrlY>) at the current cursor position, and
position the cursor at the next position.
Thus, newly entered text will be in the selected typeface.

If the cursor is inside a marked block, the block will have
a font control character placed at each end of the block instead.


@165

&TOGGLE SNOW CONTROL

    Keystroke sequence:   165
)    Alternate keystrokes: 165

When Snow Control is ON, WordFugue avoids the
screen interference patterns called "snow" that
are produced by certain display adapters, notably
the IBM Color Graphics Adapter. For other color
adapters, the Snow Control can be turned off. This
improves screen updating performance considerably.
@166

&TOGGLE BLOCK CURSOR

    Keystroke sequence:   166
)    Alternate keystrokes: 166

WordFugue offers a choice between a blinking
hardware cursor and a solid unblinking cursor.
The color of the block cursor can be set via the
Options Colors menu.

This Block Cursor can be very useful on Lap Top PCs.
@167

&TOGGLE 43 LINE MODE

    Keystroke sequence:   167
)    Alternate keystrokes: 167

On computers equipped with an Enhanced Graphics
Adapter, WordFugue can display 43 lines on the
screen. Toggle this option ON if a longer text
display is desired.
@168

&MARGIN RELEASE

    Keystroke sequence:   168
)    Alternate keystrokes: 168

Setting Margin Release ON allows you to type
beyond the left and right margins while Word Wrap
mode is active. Margin release remains effective
until the cursor is moved to another line. It can
also be toggled off at any time.
@169

&SPELL CHECK

    Keystroke sequence:   169
)    Alternate keystrokes: 169

WordFugue will spell-check any of your documents
using its own dictionary WF_MAIN.DIC. This contains
approximately 100,000 words. It also checks against an
auxilliary dictionary if it finds one.


WordFugue checks the document in the current
screen window. By default, checking proceeds from
the current cursor position to the end of the
file. If a block is marked and visible, only that
block will be checked.
]

WordFugue also contains a small built-in dictionary of
the 500 most commonly used English words. This
dictionary is kept in memory at all times in order
to accelerate the checking process.

Once the operation begins, WordFugue keeps you
advised of its progress on the status line. The
line and column counters tell you what part of the
document is being checked, as does the percentage
indicator. These are updated each time a new word
is checked.
]

When Word Fugue finds a word that it does not
recognize, the screen will be updated to highlight
the word, and a popup menu will ask you to select
an option. Select by moving the bar and pressing
<Enter> or by pressing the first character of any
of the options:

)  Skip once
)    Ignore the spelling of this word in only this
)    one instance.
)  Ignore for this document
)    Ignore the spelling of this word for the
)    duration of the check.
]

)  List dictionary sound-alikes
)    Display a list of sound-alike words from
)    Word Fugue's dictionary. Select one and press
)    <Enter>, or press <Esc> to return to the
)    previous menu.
)  Edit from the keyboard
)    A prompt box will appear to allow interactive
)    editing of the word. Press <Enter> to accept,
)    or <Esc> to return to the previous menu.
)    WordFugue will recheck the word after you
)    finish editing it.
]

)  Mark with "~"
)    Place a tilde in front of the word. After
)    the document has been checked, you can use
)    the Find Pattern command to locate the marked
)    words.
)  Add to dictionary
)    Add the word to Word Fugue's auxiliary
)    dictionary (WF_AUX.DIC). A secondary
)    menu of case selections will appear. Press
)    <Esc> to return to the previous menu, or
)    <Enter> to add to the dictionary.
]

)  Batch mark rest of document
)    Cancel the interactive mode normally used
)    for spell-checking. From this point on, all
)    unrecognized words are marked with tildes
)    (~).

A spell-checking operation may be stopped by
pressing <Esc> at the corrections menu (once a
misspelling is found) or by pressing any key while
a file is being checked. In the latter case, a
prompt box will be displayed, asking if you want
to stop. Press Y to stop, N to continue.
]

The main dictionary should reside in the same directory as
Word Fugue itself, otherwise Word Fugue may not be
able to find it.

)The auxiliary dictionary should reside in the same directory
as the file you are spell checking. If Word Fugue does not find
it, it will create it if you request to add a word to the
dictionary.

)There is a limit on the size of the auxiliary dictionary -
it may not be larger than a segment (about 65,500 characters),
and also cannot be larger than available memory.
If it gets too large, you should look at adding the words in it to the
main dictionary. See next page.
]
)The words in the auxiliary dictionary may be applied to the
main dictionary by using the program WFDICT. This program will
either Add or Delete words from the dictionary, depending upon
the input on its screen. It will write a new dictionary, so as
not to destroy the old one if things go wrong. Make sure you have
enough disk space for 2 copies! You may allocate the new dictionary
on another drive or directory.

)The change file should have one word per line (like the auxiliary
dictionary), and should be SORTED. You can use the DOS SORT
command for this.

@170

&EXPAND INCLUDE FILE

    Keystroke sequence:   170
)    Alternate keystrokes: 170

When you use .FI commands, the files can be opened for editing by
simply placing the cursor on the line and pressing this command. If
there is sufficient memory, and a window is available, the file will
be opened in another window, and you will be positioned in the new
window. You can expand further .FI commands, as long as there is
sufficient memory and available windows. .FI commands can be nested up
to 5 deep.
@171

&TOGGLE TAB WRITING

    Keystroke sequence:   171
)    Alternate keystrokes: 171

By default, WordFugue does not write tab
characters in files saved from the editor. If Tab
Writing is activated, WordFugue will translate
sequences of spaces to tabs in order to save disk
space for the output file. Tabs are computed using
the fixed spacing currently set for fixed tabs.
Multiple spaces found within pairs of single or
double quotes (as used in Pascal or C source code)
will not be converted to tabs.

Tab writing is saved as a WordFugue default.
@172

&TOGGLE WRAP COMPRESSION

    Keystroke sequence:   172
)    Alternate keystrokes: 172

By default, WordFugue compresses extra spaces out
of any line before it is wrapped. This feature is
required in order to "unjustify" text that has
previously been right justified. However, in some
cases the compression will remove desired spaces,
as in the case of aligned columns of figures.

When this toggle is OFF, extra spaces will not be
removed from lines being wrapped. Wrap
compression is saved as a WordFugue default.
@173

&TOGGLE INITIAL ZOOM STATE

    Keystroke sequence:   173
)    Alternate keystrokes: 173

The state of this toggle determines WordFugue's
default behavior when more than one window is on
the screen. When Initial Zoom State is OFF,
multiple windows will appear simultaneously on
the screen, that is, they will not be zoomed.

When Initial Zoom State is ON, multiple windows
will be zoomed. The last file opened will be
visible on the screen, and others will be hidden
behind it.

Initial Zoom State is saved as a WordFugue
default.

The normal zoom window command may be used at any
time, regardless of Initial Zoom State.
@174

&HELP SUMMARY  (<F1> from Help menu)

WordFugue provides help in several ways. This
section describes how to use the help system.

Whenever the WordFugue help system is on screen,
you can use the <PgUp> and <PgDn> keys to
move from one screen to another. <Home> and
<End> will take you to the first and last pages
of the section. Press <Esc> when you are done
using help.
]

The WordFugue menu system is available at any
time by pressing 198. Most of WordFugue's
commands may be selected from the menus. Within
the menu system, you may activate "Key help" by
choosing Setup Display options Key help. With
Key help activated, the quick keystrokes that
activate each command will be displayed on the top
row of the screen while the selection bar is
positioned over that menu item.

Pressing <F1> while within the WordFugue menu
system or within any prompt box will bring up a
window containing more detailed help regarding the
selected command. Pressing 174 while you are
entering text will bring up a menu of help topics.
]

&Help and Status Keystrokes

)Show help menu
)    Main: 174    Alternate: 174
)Show help summary
)    Main: <F1> from the help menu
)Activate menu system
)    Main: 198    Alternate: 198
)Show system and file information
)    Main: 104    Alternate: 104
)Show available memory
)    Main: 105    Alternate: 105
@175

&ABOUT WORD FUGUE

WordFugue is a Shareware program, and is supplied on
that basis. If you use it, please register by
sending $US55 (Overseas users), or $A55 (Australian users) to:
)    Fugue Software
)       P.O. Box 942
)       WODEN   ACT   2606
)       AUSTRALIA
)You will receive the latest version of the program,
plus the full dictionary for spell checking, the
dictionary update program and the manual. You will also be placed
on our mailing list for future updates.
]
You are free to distribute this program to anyone you
wish, provided you do not tamper with the files, and distribute all
the files. We retain copywrite to the program, but we are responsive
to any suggestions you may have about our programs. We are committed
to providing good software for the price of a textbook. The
registration fee will help us to continue to develop it. Help us to
stamp out the Commercial Software Rip-Off.

Support you Shareware Authors and register today!

In addition, if you register, we will pay you a bounty of $5
for every person who registers and quotes your registration number.
@176

&Cursor Movement

Character left
)    Main: 0    Alternate: 0
)Character right
)    Main: 1    Alternate: 1
)Word left
)    Main: 2    Alternate: 2
)Word right
)    Main: 3    Alternate: 3
)Line up
)    Main: 4    Alternate: 4
)Line down
)    Main: 5    Alternate: 5
)Scroll up
)    Main: 6    Alternate: 6
)Scroll down
)    Main: 7    Alternate: 7
)Page up                    Amount defaults to full Page
)    Main: 9    Alternate: 9
)Page down                  but can be set to Half or Csr
)    Main: 8    Alternate: 8
)Top of file
)    Main: 10    Alternate: 10
)Bottom of file
)    Main: 11    Alternate: 11
)Beginning of line
)    Main: 12    Alternate: 12
)End of line
)    Main: 13    Alternate: 13
)Top of screen
)    Main: 14    Alternate: 14
)Bottom of screen
)    Main: 15    Alternate: 15
@177

&Quick Movement Commands

Go to line
)    Main: 18    Alternate: 18
)Go to column
)    Main: 19    Alternate: 19
)Go to page
)    Main: 129    Alternate: 129
)Go to window
)    Main: 20    Alternate: 20
)Previous cursor position
)    Main: 21    Alternate: 21
)Up to equal indent
)    Main: 16    Alternate: 16
)Down to equal indent
)    Main: 17    Alternate: 17
)Next sentence
)    Main: 154    Alternate: 154
)Previous sentence
)    Main: 155    Alternate: 155
]

&Text Markers

Set a marker by menu
)    Main: 143    Alternate: 143
)Jump to marker by menu
)    Main: 144    Alternate: 144
)Toggle marker display
)    Main: 61    Alternate: 61
)Set marker 0
)    Main: 62    Alternate: 62
)Set marker 1
)    Main: 63    Alternate: 63
)Set marker 2
)    Main: 64    Alternate: 64
)Set marker 3
)    Main: 65    Alternate: 65
)Set marker 4
)    Main: 66    Alternate: 66
)Set marker 5
)    Main: 67    Alternate: 67
)Set marker 6
)    Main: 68    Alternate: 68
)Set marker 7
)    Main: 69    Alternate: 69
)Set marker 8
)    Main: 70    Alternate: 70
)Set marker 9
)    Main: 71    Alternate: 71
)Jump marker 0
)    Main: 72    Alternate: 72
)Jump marker 1
)    Main: 73    Alternate: 73
)Jump marker 2
)    Main: 74    Alternate: 74
)Jump marker 3
)    Main: 75    Alternate: 75
)Jump marker 4
)    Main: 76    Alternate: 76
)Jump marker 5
)    Main: 77    Alternate: 77
)Jump marker 6
)    Main: 78    Alternate: 78
)Jump marker 7
)    Main: 79    Alternate: 79
)Jump marker 8
)    Main: 80    Alternate: 80
)Jump marker 9
)    Main: 81    Alternate: 81
@178

&Text Insertion and Deletion

Undo last deletion
)    Main: 22    Alternate: 22
)Restore line
)    Main: 23    Alternate: 23
)Insert undo buffer
)    Main: 116    Alternate: 116
)Tab
)    Main: 24    Alternate: 24
)Backward Tab
)    Main: 39    Alternate: 39
)New line
)    Main: 26    Alternate: 26
)Insert line
)    Main: 27    Alternate: 27
)Insert control character
)    Main: 25    Alternate: 25
)Delete current character
)    Main: 28    Alternate: 28
)Delete character left
)    Main: 29    Alternate: 29
)Delete word
)    Main: 30    Alternate: 30
)Delete to end of line
)    Main: 31    Alternate: 31
)Delete line
)    Main: 32    Alternate: 32
)Delete line (no undo)
)    Main: 33    Alternate: 33
)Abort command (1 char)
)    Main: 199    Alternate: 199
@179

&Search and Replace

Search for pattern
)    Main: 34    Alternate: 34
)Search and replace
)    Main: 35    Alternate: 35
)Search and playback macro
)    Main: 36    Alternate: 36
)Search again
)    Main: 37    Alternate: 37
)Find matching }]>) or End
)    Main: 191   Alternate: 191
@180

&Files

Edit another file
)    Main: 40    Alternate: 40
)Abandon file
)    Main: 41    Alternate: 41
)Read file into window
)    Main: 42    Alternate: 42
)Save and continue edit
)    Main: 43    Alternate: 43
)Save and exit to DOS
)    Main: 45    Alternate: 45
)Write to named file
)    Main: 151    Alternate: 151
)Save/Switch files
)    Main: 48    Alternate: 48
)Expand Include File
)    Main: 170    Alternate: 170
@181

&Windows

Open file
)    Main: 46    Alternate: 46
)Close window
)    Main: 142    Alternate: 142
)Resize window
)    Main: 47    Alternate: 47
)Next window
)    Main: 49    Alternate: 49
)Previous window
)    Main: 153    Alternate: 153
)Zoom window
)    Main: 51    Alternate: 51
@182

&Block Commands

Begin block
)    Main: 52    Alternate: 52
)End block
)    Main: 53    Alternate: 53
)Start of block
)    Main: 54    Alternate: 54
)End of block
)    Main: 55    Alternate: 55
)Copy block
)    Main: 56    Alternate: 56
)Move block
)    Main: 57    Alternate: 57
)Delete block
)    Main: 58    Alternate: 58
)Hide block
)    Main: 59    Alternate: 59
)Mark current word
)    Main: 60    Alternate: 60
)Write block to file
)    Main: 44    Alternate: 44
)Shift Block Left
)    Main: 192    Alternate: 192
)Shift Block Right
)    Main: 193    Alternate: 193
)Strip Hi Bits from block
)    Main: 194    Alternate: 194

@183

&Text Formatting

Format paragraph
)    Main: 112    Alternate: 112
)Format block
)    Main: 141    Alternate: 141
)Center line
)    Main: 120    Alternate: 120
)Margin release
)    Main: 168    Alternate: 168
)Toggle case
)    Main: 108    Alternate: 108
)Lower case
)    Main: 109    Alternate: 109
)Upper case
)    Main: 110    Alternate: 110
)Show current font
)    Main: 157    Alternate: 157
)Select Bold
)    Main: 158    Alternate: 158
)Select Double
)    Main: 159    Alternate: 159
)Select Underscore
)    Main: 160    Alternate: 160
)Select Superscript
)    Main: 161    Alternate: 161
)Select Subscript
)    Main: 162    Alternate: 162
)Select Compressed
)    Main: 163    Alternate: 163
)Select Italics
)    Main: 164    Alternate: 164
@184

&Tabs

)Tab
)    Main: 24    Alternate: 24
)Backward Tab
)    Main: 39    Alternate: 39
)Set tabs
)    Main: 136    Alternate: 136
)Put tabs
)    Main: 138    Alternate: 138
)Set tab size
)    Main: 137    Alternate: 137
)Edit tabs
)    Main: 139    Alternate: 139
)Tab temporary margin
)    Main: 140    Alternate: 140
)Set temporary margin
)    Main: 147    Alternate: 147
)Restore even tabs
)    Main: 156    Alternate: 156
@185

&Utility Commands

Print file
)    Main: 123    Alternate: 123
)Change active directory
)    Main: 127    Alternate: 127
)Directory
)    Main: 128    Alternate: 128
)Operating system
)    Main: 38    Alternate: 38
@186

&Settings and Toggles

Toggle insert mode
)    Main: 106    Alternate: 106
)Toggle autoindent mode
)    Main: 107    Alternate: 107
)Toggle word wrap
)    Main: 113    Alternate: 113
)Toggle wrap compression
)    Main: 172    Alternate: 172
)Toggle tab line display
)    Main: 115    Alternate: 115
)Toggle justify
)    Main: 117    Alternate: 117
)Toggle page breaks
)    Main: 118    Alternate: 118
)Toggle attributes
)    Main: 119    Alternate: 119
)Toggle fixed tabs
)    Main: 146    Alternate: 146
)Toggle hi-bit strip
)    Main: 149    Alternate: 149
)Toggle tab expansion
)    Main: 134    Alternate: 134
)Toggle tab writing
)    Main: 171    Alternate: 171
)Toggle key help
)    Main: 152    Alternate: 152
)Toggle snow check
)    Main: 165    Alternate: 165
)Toggle block cursor
)    Main: 166    Alternate: 166
)Toggle 43 line mode
)    Main: 167    Alternate: 167
)Set left margin
)    Main: 114    Alternate: 114
)Set right margin
)    Main: 111    Alternate: 111
)Set top margin
)    Main: 130    Alternate: 130
)Set bottom margin
)    Main: 131    Alternate: 131
)Set page length
)    Main: 132    Alternate: 132
)Set undo limit
)    Main: 133    Alternate: 133
)Set default file extension
)    Main: 135    Alternate: 135
)Set colors
)    Main: 121    Alternate: 121
)Set home directory
)    Main: 148    Alternate: 148
)Save setup
)    Main: 122    Alternate: 122
)Set Paging Amount
)    Main: 145    Alternate: 145
@187

&SPELL CHECK

    Keystroke sequence:   169
)    Alternate keystrokes: 169

WordFugue will spell-check any of your documents
using its own dictionary WF_MAIN.DIC, which contains about
80,000 words.


WordFugue checks the document in the current
screen window. By default, checking proceeds from
the current cursor position to the end of the
file. If a block is marked and visible, only that
block will be checked.
]

WordFugue also contains a small built-in dictionary of the
500 most commonly used English words. This dictionary is
kept in memory at all times in order to accelerate the
checking process.

Once the operation begins, WordFugue keeps you
advised of its progress on the status line. The
line and column counters tell you what part of the
document is being checked, as does the percentage
indicator. These are updated each time a new word
is checked.
]

When Word Fugue finds a word that it does not
recognize, the screen will be updated to highlight
the word, and a popup menu will ask you to select
an option. Select by moving the bar and pressing
<Enter> or by pressing the first character of any
of the options:

)  Skip once
)    Ignore the spelling of this word in only this
)    one instance.
)  Ignore for this document
)    Ignore the spelling of this word for the
)    duration of the check.
]

)  List dictionary sound-alikes
)    Display a list of sound-alike words from
)    Word Fugue's dictionary. Select one and press
)    <Enter>, or press <Esc> to return to the
)    previous menu.
)  Edit from the keyboard
)    A prompt box will appear to allow interactive
)    editing of the word. Press <Enter> to accept,
)    or <Esc> to return to the previous menu.
)    WordFugue will recheck the word after you
)    finish editing it.
]

)  Mark with "~"
)    Place a tilde in front of the word. After
)    the document has been checked, you can use
)    the Find Pattern command to locate the marked
)    words.
)  Add to dictionary
)    Add the word to Word Fugue's auxiliary
)    dictionary (WF_AUX.DIC). A secondary
)    menu of case selections will appear. Press
)    <Esc> to return to the previous menu, or
)    <Enter> to add to the dictionary.
]

)  Batch mark rest of document
)    Cancel the interactive mode normally used
)    for spell-checking. From this point on, all
)    unrecognized words are marked with tildes
)    (~).

A spell-checking operation may be stopped by
pressing <Esc> at the corrections menu (once a
misspelling is found) or by pressing any key while
a file is being checked. In the latter case, a
prompt box will be displayed, asking if you want
to stop. Press Y to stop, N to continue.
]

The main dictionary should reside in the same directory as
Word Fugue itself, otherwise Word Fugue may not be
able to find it.

)The auxiliary dictionary should reside in the same directory
as the file you are spell checking. If Word Fugue does not find
it, it will create it if you request to add a word to the
dictionary.

)There is a limit on the size of the auxiliary dictionary -
it may not be larger than a segment (about 65,500 characters),
and also cannot be larger than available memory.
If it gets too large, you should look at adding the words in it to the
main dictionary. See next page.
]
)The words in the auxiliary dictionary may be applied to the
main dictionary by using the program WFDICT. This program will
either Add or Delete words from the dictionary, depending upon
the input on its screen. It will write a new dictionary, so as
not to destroy the old one if things go wrong. Make sure you have
enough disk space for 2 copies! You may allocate the new dictionary
on another drive or directory.

)The change file should have one word per line (like the auxiliary
dictionary), and should be SORTED. You can use the DOS SORT
command for this.



@188
&Macros

Load macros from disk
)    Main: 82    Alternate: 82
)Store macros to disk
)    Main: 83    Alternate: 83
)Record macro
)    Main: 84    Alternate: 84
)Edit macro
)    Main: 150    Alternate: 150
)Playback macro by menu
)    Main: 96     Alternate: 96
)Playback macro by key
)    Main: 95     Alternate: 95
)      follow with character 0..9 A..Z
)Playback Macro 1
)    Main: 85    Alternate: 85
)Playback Macro 2
)    Main: 86    Alternate: 86
)Playback Macro 3
)    Main: 87    Alternate: 87
)Playback Macro 4
)    Main: 88    Alternate: 88
)Playback Macro 5
)    Main: 89    Alternate: 89
)Playback Macro 6
)    Main: 90    Alternate: 90
)Playback Macro 7
)    Main: 91    Alternate: 91
]
)Playback Macro 8
)    Main: 92    Alternate: 92
)Playback Macro 9
)    Main: 93    Alternate: 93
)Playback macro n times with menu
)    Main: 94    Alternate: 94
)
)There are a number of macro files supplied:
)
) WF.MAC   - standard word processing functions
) DOUBLE.MAC & SINGLE.MAC - line drawing
) GREEK.MAC & EUROPE.MAC - character sets
) MISC.MAC    - other characters
]
@189

&Printing a file

)    Main: 123    Alternate: 123

&Print Formatting Commands

Offset page to right by n columns
)      .PO n
)Start new page
)      .PA
)Start new page if fewer than n lines remain
)      .CP n
)Start new page if current page is Odd or Even
)      .CP O or E
)Print a blank page if page number is Odd or Even
and start a new page otherwise. Optionally print TEXT in the
middle of the blank page
)      .PB O or E   TEXT TO PRINT ON BLANK PAGE
)Set page number to n
)      .PN n
)Omit page numbers
)      .OP
)Print page numbers
)      .PG
)Put page number in column n
)      .PC n
)Set page length to n lines
)      .PL n
)Set top margin to n lines
)      .MT n
)Set bottom margin to n lines
)      .MB n
)Set header margin to n lines
)      .HM n
)Set footer margin to n lines
)      .FM n
)Define header lines
)      .HE header line 1   }  both the
)      .H1 header line 1   }  same
)      .H2 header line 2
)      .H3 header line 3
)Define footer lines
)      .FO footer line 1   } both the
)      .F1 footer line 1   } same
)      .F2 footer line 2
)      .F3 footer line 3
)Define Index Entry
)      .IXline
)   or <Ctrl>P<Ctrl>K at start
)   and <Ctrl>P<Ctrl>K at end
)
)Define Table Of Contents Entry
)      .TCline
)   or .TC1 for table 1
)   thru to .TC9 for table 9
)
)Include a file at this point
)       .FIfilename comments
)       filename should follow the .FI command directly with no space
)       space indicates any further text is comment
]

&Special Codes within Headers and Footers

Insert current page number
)      #
)Ignore following spaces on even pages
)      <CtrlK>
)Take next character literally
)      \
)Invoke printing functions
)      @
)   eg  @Dn for dates, n = 0 .. 8
)       @Tn for times, n = 0 .. 3
]

&Special Print @functions within Headers & Footers

)  - return the time in format:
)  @T0   HH:MM
)  @T1   HH:MM:SS
)  @T2   HH:MM XX     where XX = AM or PM
)  @T3   HH:MM:SS XX  where XX = AM or PM
)
) - return the name of the file being printed:
)  @F0  full path name drive:\path\filename.ext
)  @F1  filename.ext
]
)  - return the date in format:
)  @D0  MMM DD, YYYY
)  @D1  DD/MM/YY
)  @D2  DD/MM/YYYY
)  @D3  MM/DD/YY
)  @D4  MM/DD/YYYY
)  @D5  YYYY/MM/DD
)  @D6  DD MMM YYYY
)  @D7  dayname, DD MMM YYYY
)  @D8  DD month YYYY
]

&Typeface Selection Commands

)Select Bold
)    Main: 158    Alternate: 158
)Select DoubleStrike
)    Main: 159    Alternate: 159
)Select Underscore
)    Main: 160    Alternate: 160
)Select Superscript
)    Main: 161    Alternate: 161
)Select Subscript
)    Main: 162    Alternate: 162
)Select Compressed
)    Main: 163    Alternate: 163
)Select Italics
)    Main: 164    Alternate: 164
]

&Typeface Control Codes

Each of these must be prefixed with the
Control Char insertion code 25 (or 25)
)
)Toggle Boldface
)      <CtrlB>
)Toggle Underscore
)      <CtrlS>
)Toggle Doublestrike
)      <CtrlD>
)Toggle Superscript
)      <CtrlT>
)Toggle Subscript
)      <CtrlV>
)Toggle Compressed
)      <CtrlA>
)Toggle Italic
)      <CtrlY>
]

&Printer Definitions

Each type of printer is described to Word Fugue by
a small file with the extension PDF. This file
contains information regarding the control codes
that enable the printer's various fonts, as well
as some additional information that tells
WordFugue about the printer.

Existing PDF files can be changed, and new ones
created via the Word Fugue Printer definition
menu. The printer definition most recently
selected via the File Print menu can be modified
here. Choose Edit string to change the control
code for any supported font. Each font is
associated with two strings - one to turn the font
ON, and another to turn it OFF.

When you choose a string to edit, it appears in
another window. It can be edited using the cursor
keys, and the <Del> or <Backspace> keys. Most
characters you type will be inserted literally
into the string. <CtrlBksp> will delete the
existing string. <Enter> will end the session
in the string editor. In case you need to enter
any of these special keys as part of the control
string, press the <ScrollLock> key to enter
Literal mode. In this mode, all keystrokes will be
inserted into the string without further
interpretation.

You are also given the option of changing the name
of the string.

The current printer definition can be saved to a
disk file by using the Save definition menu
selection. A prompt box will ask for the name of
the file to be saved.
@190

&Function Keys

|

@191

&Find Matching Bracket

Main: 191 Alternate: 191

Place the cursor on ({[< and press the command.
The cursor will be positioned on the matching >]})
or you will receive an error message if none can be
found. Also, if you place the cursor on the B of begin
and Word Fugue will find the matching end for you.
@192

&Shift Block Left

Main: 192  Alternate: 192

If you have a block of text marked, this command will
shift the block left the number of characters you nominate.
You will be prompted for the number. Characters shifted
left past position 1 will be lost.
@193

&Shift Block Right

Main: 193  Alternate: 193

If you have a block of text marked, this command will
shift the block right the number of characters you nominate.
You will be prompted for the number. As characters are
shifted right, spaces are inserted at the beginning
of the line.
@194

&Strip Hi Bits From Block

main: 194   Alternate: 194

If perhaps you import a block from a Wordstar file,
you have a block of text showing graphics characters
in with the words. This command will turn off the
hi bits in the marked block, and restore the graphics
characters to letters.

Refer also to the Strip Hi Bits toggle in the
Load File options of the Options menu.
@196

&Table Of Contents Generation

main: 196   Alternate: 196

You must have marked table of contents entries in
your text with

)      .TCline
)   or .TC1 for table 1
)   thru to .TC9 for table 9

This will place the entries in one of nine files
depending on the number following the .TC characters.
If you omit the number, it defaults to 0. You will be
prompted for the name of the document. Each table of
contents file will have the document name, with the extension
set to

)   .TOC for the .TC lines
)   .TO1 for .TC1 lines
)   thru to .TO9 for .TC9 lines

If a table is not selected, there will not be a file
generated for it.

The entries in the file will appear exactly as they
appear following the .TC characters. Use # if you want
the page number to appear as part of the entry.
]
for example, if you enter this on page 1

).TC  DEFINITION .......................#

) and this on page 3

).TC     Default Definitons.............#
).TC1  Figure 1  .......................#

the following entries will be generated in the table of
contents .TOC file

)  DEFINITION .......................1
)     Default Definitons.............3

and the following in the .TO1 file

  Figure 1  .......................3
@197

&Generate Index

main: 197   Alternate: 197

An index is an alphabetic listing of topics, words
and phrases accompanied by page numbers for each topic.
Word Fugue can automatically create an index for a
document.

You mark index entries by pressing ^PK at the begining
and end of each phrase you want included in the index.
You can also mark a phrase by using the dot command .IX
followed by the word or phrase.

You will be prompted for the name of the file to
generate the index for. This index will have the same
name as the document, but the extension will be set to
.IDX
@198

&Toggle Mouse Scroll Bar

main: 198   Alternate: 198

This enables you to display a scroll bar on the
right hand side of the screen if you have a mouse.
)Note: the mouse driver must be loaded for the mouse to work

Clicking mouse buttons will have different effects depending upon
where it is on the screen. The scroll bar allows repositioning within
the file. The top 2 lines are for help & menus.

]
)Top 2 Lines:
) Left Button  - Open another window
) Right Button - PullDown Menu
) Both Buttons - Help Menu

)Menu System:
)  Left Button  - select highlighted choice
)  Right Button - escape to previous level
)  Both buttons - Help (if available)
)  Motion       - move highlight
]
)Scroll Bar:
)  Arrows:
)       Press Left button to scroll up or down
)  Bar:
)       Click left button to page up (above elevator)
)        or page down (below elevator)

)Text Body:
)  Left Button - click to position cursor
)                (will change windows if necessary)
)  Right Button - restore current line
)  Both buttons - press & drag to mark a block
)               marking stops when you release button
)               positions cursor at mouse cursor
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1971

     Volume in drive A has no label
     Directory of A:\

    ANSII    PDF      1081  11-29-89   4:30p
    BLANK    PDF       764   9-14-89   5:07p
    BROTH15  PDF       756  11-21-88   3:15p
    DIAB630  PDF       799  11-21-88   3:21p
    DMP210   PDF       729  11-21-88   3:31p
    DMP2100  PDF       790  11-21-88   3:27p
    DMP220   PDF       732  11-21-88   3:35p
    DMP410   PDF       694  11-21-88   3:36p
    DMP510   PDF       732  11-21-88   3:37p
    DRAFT    PDF       896   9-14-89   7:23p
    EPSLQ850 PDF       955   8-14-89   9:59a
    EPSNFX80 PDF       809   8-14-89   9:58a
    EPSON    PDF       942   9-14-89   7:30p
    FILE1971 TXT         0   8-30-90   1:57p
    FILEINFO WF       3818   6-08-90  10:04a
    GEMINI10 PDF       745  11-21-88   3:43p
    GENICOM  PDF       826  11-21-88   3:59p
    GO       BAT        38   1-01-80   1:37a
    IBMPRO   PDF       738  11-21-88   4:31p
    IBMQUIET PDF       738  11-21-88   4:32p
    IDSPRISM PDF       737  11-21-88   4:36p
    IMPACT90 PDF      1290   8-17-89   5:07p
    IMPACT_A PDF      1290   8-25-89  11:45a
    IMPACT_B PDF      1409  10-16-89   2:32p
    IMPACT_C PDF      1368   9-14-89   3:10p
    IMPACT_L PDF      1290   8-17-89  11:00a
    INDEX    COM     12809  11-04-87  11:06p
    JUKI6100 PDF       797  11-21-88   4:41p
    LASERJET PDF      1450   3-07-89   4:08p
    MANUAL   PRN     56212   7-19-89   1:04p
    NECP7    PDF       978   7-28-89  12:41p
    NECP7-66 PDF      1065   1-31-90   2:04p
    NECP7-8  PDF       980   8-18-89   3:08p
    OKI2350  PDF       708  11-22-88  12:14p
    OKI2410  PDF       712  11-22-88  12:16p
    OKI84    PDF       724  11-22-88  12:20p
    OKI84ST2 PDF       723  11-22-88  12:22p
    OKIMATE  PDF       716  11-22-88  12:25p
    ORDER    FRM     14409   8-10-90  10:39p
    PANASNIC PDF       723  11-22-88  12:30p
    README   1       10166   8-01-90  12:42a
    TOSH1340 PDF       718  11-22-88  12:33p
    TOSH321  PDF       771  11-22-88  12:37p
    TOSH351  PDF       727  11-22-88  12:39p
    TUTORIAL DOC     59695   6-07-90   8:52p
    UPDATE   DOC     16062   3-05-90  10:08p
    WF       RLR      1332   9-06-89   9:42a
    WF       TXT     90257   7-04-90   9:06p
    WFINST   EXE     38352   6-08-90  12:02a
    GO       TXT      1310   1-01-80   5:47a
           50 file(s)     337362 bytes
                            5120 bytes free
