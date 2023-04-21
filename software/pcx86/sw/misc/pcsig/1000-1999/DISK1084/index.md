---
layout: page
title: "PC-SIG Diskette Library (Disk #1084)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1084/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1084"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREEWORD"

    FreeWord is a powerful and easy to use, menu-driven word processor.  It
    is capable of right and left text justification; moving the cursor
    either by character, word, line, screen or page; searching a document
    for a word or phrase; and moving and copying blocks of text.  FreeWord
    even permits printing in the background mode so that you can proceed
    with other work!
    
    Features:
    
    ~ Cursor movement by character, word, line, screen, page
    
    ~ Move, copy, delete boxes
    
    ~ Automatic formatting
    
    ~ Forced page breaks supported
    
    ~ Typewriter mode
    
    ~ Search and replace
    
    ~ Page breaks displayed on-screen
    File Descriptions:
    
    FW       EXE  Main program file.
    FW       HLP  On-line help file.
    FW       DOC  Documentation, 72 pp.
    COLOR    EXE  Utility to set screen colors.
    NO-COLOR FIL  Utility for monochrome monitor/color card use.
    READ     ME   Instructions for printing FW.DOC.
    DEMO2         Text file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1084.TXT

{% raw %}
```
PROGRAMID = 10642
PROGRAM TITLE
Freeword
SUGGESTED REGISTRATION
$49.00
SPECIAL REQUIREMENTS
Two floppy drives.
PROGRAM VERSION
2.00
SHORT DESCRIPTION
An easy-to-run word processor with many functions including automatic
formatting, adjustable cursor movement, search and replace, and block
movement.  Print in background so you can continue your work.
LONG DESCRIPTION
FreeWord is a powerful and easy to use, menu-driven word processor.  It
is capable of right and left text justification; moving the cursor
either by character, word, line, screen or page; searching a document
for a word or phrase; and moving and copying blocks of text.  FreeWord
even permits printing in the background mode so that you can proceed
with other work!
 
Features:
 
~ Cursor movement by character, word, line, screen, page
 
~ Move, copy, delete boxes
 
~ Automatic formatting
 
~ Forced page breaks supported
 
~ Typewriter mode
 
~ Search and replace
 
~ Page breaks displayed on-screen
File Descriptions:
 
FW       EXE  Main program file.
FW       HLP  On-line help file.
FW       DOC  Documentation, 72 pp.
COLOR    EXE  Utility to set screen colors.
NO-COLOR FIL  Utility for monochrome monitor/color card use.
READ     ME   Instructions for printing FW.DOC.
DEMO2         Text file.
*******************END*******************
```
{% endraw %}

## FW.DOC

{% raw %}
```










                            F r e e W o r d
                              Version 2.0
                                   
                                   
                    A User Supported Word Processor
                                   
                PLUS  SSP's Spell - A Spelling Checker
                                    
                                    
                       (C) Copyright 1985, 1989
                      Stilwell Software Products
                          All Rights Reserved
                                   
                                   
                                   
                      Stilwell Software Products
                         1336 East Krista Way
                           Tempe, AZ  85284
                            (602)  820-4952



                          **** CONTENTS ****


USER SUPPORTED SOFTWARE . . . . . . . . . . . . . . . . . . . . . .   2

INTRODUCTION TO FREEWORD  . . . . . . . . . . . . . . . . . . . . .   4

FREEWORD SPECIFICATIONS . . . . . . . . . . . . . . . . . . . . . .   5

FILES ON THE FREEWORD DISKETTE: . . . . . . . . . . . . . . . . . .   5

GETTING STARTED . . . . . . . . . . . . . . . . . . . . . . . . . .   7

DEMO 1  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   9

DEMO 2  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12

DEMO 3  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  16

COLOR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  20
CURSOR MOVEMENT . . . . . . . . . . . . . . . . . . . . . . . . . .  22
DIRECTORY . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
FIND / FIND & REPLACE . . . . . . . . . . . . . . . . . . . . . . .  24
GENERAL EDITING . . . . . . . . . . . . . . . . . . . . . . . . . .  26
HELP. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  28
LOAD A FILE . . . . . . . . . . . . . . . . . . . . . . . . . . . .  29
MARK A BLOCK  . . . . . . . . . . . . . . . . . . . . . . . . . . .  30
NEW PAGE  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  32
OPTIONS . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  33
PRINT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  34
QUIT. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  36
REDISPLAY . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  37
SAVE. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  38
SPELL . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  39
TYPEWRITER  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  41

DISCLAIMER OF WARRANTY  . . . . . . . . . . . . . . . . . . . . . .  43

  
				-1-
                        USER SUPPORTED SOFTWARE


     FreeWord is a "user supported" program.  What is meant by that is,
FreeWord is available to anyone who wants to use it at a no cost (if you
get the program from Stilwell Software Products we charge $10 to help
cover the cost of postage and handling). This method of distributing
computer software allows you to try the program without having to pay
for it in advance.  It also allows you to freely share the program with
other users without the fear of prosecution by the owner of the program. 


     If you find FreeWord of use you are asked to send a contribution of
$49 to its author:

                      Stilwell Software Products
                         1336 East Krista Way
                           Tempe, AZ  85284

     By sending a contribution you will become a registered owner of
FreeWord.  You will receive a printed copy of the manual and will be
eligible for support from us.  You will also receive a program called SSP's
SPELL at no extra cost.  The SPELL program is a spelling checker. 
SPELL will search through the document you wrote with FreeWord
looking for misspelled words.  SPELL will also work with any standard
ASCII text file.    By contributing, you will enable us to send you
information on new versions of FreeWord as they become available as
well as other new programs from Stilwell Software Products.  You will
also be supporting a means of software development that will give you
quality software at a greatly reduced price.
     You may receive a copy of FreeWord by one of three methods. First,
you can send a $49 contribution to Stilwell Software Products and we will
mail you a diskette which will contain our word processing program, the
SSP's SPELL  program (the spelling checker), and the printed manual.
     The second way is for you to send $10 to Stilwell Software
Products.  We will send you a diskette with the program, and the
documentation on the diskette.  You will not received the printed manual,
the spelling checker, nor will you be eligible for our support.  You may
then use the software and make a contribution later if you wish.  Once
you mail the additional contribution to Stilwell Software Products, we will
send you the printed manual, the current version of FreeWord, SSP's
SPELL, and will make you eligible for support.  The third way is to get a
copy of the program from your local IBM-PC User's Group.  You can use
the program and later make a contribution if you wish.  We will then
send you all the items listed above.

     You are always free to make copies of FreeWord and to share them
with others.  You are not permitted to sell FreeWord nor can you include
it with any product you are distributing.  You may not modify FreeWord
in any way.  You may NOT share SSP's SPELL.  This program is NOT a
user supported program.  It is solely for the use of registered owners of
FreeWord.
				-2-
     Regardless of how you get the program, if you find FreeWord useful,
your contribution will be greatly appreciated.


















































				-3-

                       INTRODUCTION TO FREEWORD

     FreeWord is menu driven.  This means that there are not a lot of
commands that you must learn to use this program.  Many people will be
able to use the program without reading the manual or trying the demos. 
There is also a online help service available from the Main Menu.

     FreeWord supports a variety of ways to move around in your
document.  You can, for example, move the cursor by character, word,
line, screen or by page.  A block of text can easy be marked for
deletion, to move, or to copy.  You can search your document for a word
or phrase.  You can select to search and replace a word or phrase as
well.  With FreeWord, you can select to have your right margins justified
(left margins are always justified) so that your document will have that
formal look - or select to have the right margin "ragged" (so that it will
look like it came off a typewriter).  You can select to print up to nine
copies of any document.  Printing will go on in the background, allowing
you to edit the document you are printing, or another document, while
the printing is taking place.  FreeWord also has a "typewriter" mode for
sending special printer codes to your printers, and for addressing an
envelope, or filling out forms.






























				-4-


                        FREEWORD SPECIFICATIONS

FreeWord requires an IBM-PC, PC-XT, PC-Portable, or PC-AT and the
following;

     (1)  256KB RAM, and DOS 2.0 or later.
     (2)  Either monochrome or color monitor.
     (3)  At least one double-sided disk drive (you can use more diskette
drives or a hard disk).
     (4)  Any PC parallel printer.


FILES ON THE FREEWORD DISKETTE:

     FW.EXE    - The actual FreeWord program

     FW.HLP    - The on-line help file, can be deleted from your work
disk if you need the space on your diskette.

     COLOR.EXE - A utility program for users of color monitors to set
the color of the screen.

     NO-COLOR.FIL - Copy this file to "COLOR.FIL" if you have a color
graphics card, but a monochrome display.  This will improve the
appearance of the characters on the screen.  

























				-5-
OPTIONAL FILES:

     READ.ME   - Instructions on how to print FW.DOC if it is on your
diskette.

     FW.DOC  - Documentation file, (if you did not get the printed
manual) this can also be deleted from   your work disk to give you more
room on your diskette.

     SPELL.EXE - If you are a registered contributors to FreeWord you
will receive this program to check the spelling of documents produced
with FreeWord.  This file will not be on the same diskette as FW.EXE.

     SPELL.DIC - If you are a registered contributor to FreeWord you
will received this file which has the spellings of the words used by SSP's
SPELL.  This file will not be on the same diskette as FW.EXE.



































				-6-                                        

                            GETTING STARTED



     FIRST!!  The first thing to do with any software is to make a copy
of the original.  You will probably want to store the original and use
only the copy (the "work diskette").  This will insure that you have a
good copy of the program should anything ever happen to your work
diskette.

     To make a copy.  Put a blank diskette in drive B and a diskette
that has the FORMAT program (supplied on the DOS diskette from IBM)
in the A drive.  Type "FORMAT B: /S" (don't type the quotes).  This will
format the diskette and put a copy of the operating system on your
diskette.  

     Step 2.  Remove from drive A the FORMAT diskette and insert the
FreeWord diskette. Type "COPY *.* B:" (don't type the quotes).  This will
copy all the files from the FreeWord diskette to your work diskette.  We
suggest you put a write protect tab on the FreeWord diskette if you have
not already done so, and store that diskette. (To do this put a piece of
tape, which came with your diskettes, over the notch in the upper-right
corner of the diskette).  For additional information on formatting a
diskette and copying files from a diskette see your DOS manual.  If you
have a file called FW.DOC on your work diskette (type "DIR FW.DOC" to
find out), you might want to delete it after printing it to make more
room on your diskette (you will not have this file on your diskette if you
contributed $49 since you were sent a printed version of the manual). 
You can delete the documentation file by typing "DEL FW.DOC" (don't
type the quotes).

     Do not put a write protect tab on your work diskette since
FreeWord needs to write to that disk from time to time.

     If you have a color monitor on your system you might want to first
run a program called COLOR.  FreeWord is able to determine if your
system has a color graphics card in it or not.  If you do have a color
graphics card, FreeWord will display the screens in color.  If you do not
like the colors that FreeWord uses you can run the COLOR program to
select different colors.  To start COLOR put the diskette that has the
file COLOR.EXE in your default disk drive, and type the word COLOR. 
Press any key to get pass the start-up screen.  Then just follow the
directions given to you by the COLOR program.  The COLOR program
will create a file called COLOR.FIL.  This file must be on the same
diskette (and in the same directory) as the FreeWord program.  When
FreeWord starts it will search the current directory for that file if you
have a color graphics card.  If the file COLOR.FIL is not on your disk,
FreeWord will use the default color values.

     If you have a color graphics card, but a monochrome display you

				-7-will need to copy the file called "NO-COLOR.FIL" to "COLOR.FIL".  This
will improve the appearance of the characters on the screen.  The
portable COMPAQ and the IBM PC Portable both use this type of
configuration.

     You can delete the COLOR.EXE file from your work diskette (you
will want to leave it on the original diskette) once you are happy with
your selection of the colors for FreeWord, or if you do not have a color
monitor, by typing "DEL COLOR.EXE" (don't type the quotes).

     Now you are ready to start the program.  To do that just type the
letters "FW".  The first screen will be the start-up screen (it has the
copyright notice on it).  You may press any key when you are ready to
continue. 

     You will now see the main menu.  To obtain online help, hold down
the ALT key and press the "H" key.  This will give you a list of the help
topics.  Select one of the topics by typing in the desired number and
pressing the ENTER key.  After reviewing the help information for that
topic, press a key to return to the Help Menu.  You can now select
another help topic, or press Esc to return to the main menu. 
     You can select any of the options from the main menu by holding
the ALT key and pressing the first letter of that option.  You have to
hold down the ATL key so that FreeWord will "know" that you want to
use the key (for example, the letter "H") for a purpose other then just
typing that character in your document (for example, FreeWord has to
know that you want Help when you type a letter "H" as oppose to when
you are trying to type the "H" in the word "HOUSE").  For more
information, see the demos, or consult the reference section of this
manual.  The key you press along with the ALT key can be either lower
or upper case, i.e., either "H" or "h". 






















				-8-

                               D E M O 1


     In this demo we will learn how to create a simple word processing
document, how to save that document, and how to quit FreeWord, once
we are finished.  It is assumed that you have already read the section
called "Getting Started". 

     First, start FreeWord by putting the diskette in your default drive
and typing the letters "FW" (for FreeWord - don't type the quotes).  You
will see the startup screen.  Press any key once you are ready to begin.

     Help.  Once FreeWord is started you will see the main menu along
the bottom of the screen.  You can select the help option by holding
down the ALT key and pressing the letter "H".  You will see the Help
Menu.  You can select any of the topics by typing in the number and
pressing the ENTER key.  Once you have finished reading the help text
press any key to return to the Help Menu.  To return to the main menu
press the Esc (Escape) key from the Help Menu.  You may try to select
the Help option now.  Hold down the ALT key and press the "H" key. 
You will see a list of help topics.  For now, return to the main menu by
pressing the Esc key.
     
     The first order of business is to enter our short, one sentence
document.  You might have noticed that in the bottom right hand corner
of the main menu we are told that we are on Page 1, Line 1, Col (this
stands for column) 10.  We are at the beginning of a document and are
ready to get started.  You might think of this as having a blank piece of
paper in your typewriter. 

     The line you will type in is the following:  Now is the time for all
good men to come to the aid of their country. One of the major features
of a word processors is a thing called "word wrap".  What is meant by
this is that when you come to the end of a line, the word processor will
automatically move you to the next line.  You no longer have to be
concerned with pressing the return key when you get to the end of a
line, as you do on a typewriter.  As you type the above line, do not
press the ENTER key.  FreeWord will move you to the next line after
you type the space after the word "their".  You may type in "Now is the
time...".

     Word processors would not have become so popular as they have if
all they did was word wrap.  Certainly one of the most valuable features
is being able to find that one little mistake and correct it without having
to retype the entire document.  If you make a mistake while typing in
the DEMO1 document there are several ways of correcting the problem. 
We will deal with only some of the simpler ways in this session.

     Moving around.  Your position in your document is represented by
the cursor.  The cursor is the small blinking underline on your screen. 

				-9-You can move the cursor around in many different ways.  We will deal
with a few of the similar ways is this demo (see DEMO2 for the other
ways).  The arrow keys on the IBM PC are "shared" with the numbered
keys on the numeric pad on the right side of your keyboard.  This means
that you might have to press the Num Lock (Number Lock) key to get
you keyboard to treat the key as a arrow key and not a number key. 
When your PC starts, the arrow keys will work when you press the key. 
But if you change the setting (by pressing the Num Lock key) you might
get a number when you want a arrow key.  If this happens to you, simply
press the backspace key to remove the number that was entered on your
screen, and press the Num Lock key to change it to use the arrow keys.

     UP.  The up arrow (located with the "8" key) will move your cursor
up one line.  If you are already at the first line of the document, you
will not be able to move up since there is nowhere to move.

     DOWN.  The down arrow (located with the "2" key) will move your
cursor down one line.  If you have reached the end of your document,
you will not be able to continue to move downwards since there is
nowhere to move.

     LEFT.  The left arrow (located with the ""4" key) will move your
cursor one character to the left.  If your cursor is located on the left
margin, FreeWord will move the cursor to the end of the previous line
(providing that there is a previous line).  

     RIGHT.  The right arrow (located with the "6" key) will move your
cursor one character to the right.  If you are on the end of a line,
FreeWord will move your cursor to the start of the next line (providing
that there is a next line).  If your cursor is located at the end of a
document you will not be moved to the right since there is nowhere to
move.

     END.  The end key (located with the "1" key) will move your cursor
to the end of the present line.

     Backspace.  If you have made a mistake and you want to erase the
character(s) that are to the left of the cursor, press the backspace key. 
This key is located just above the ENTER key and it has a left-arrow on
it.  When you press this key, the cursor will be moved to the left and
the character which previously occupied that position will be erased.  

     Delete key.  If you have made a mistake and the cursor is located
on the character that you want to erase, you can press the Del (delete)
key to remove that character.  This key is located with the "." key on
the numeric keypad.  When you press this key the character that
previously occupied that position will be erased, and the character that
was to the right of your cursor will be moved over to your cursor.

     Now that you know the basics, correct any mistakes you might have
made when you entered the "Now is the time..." line.


				-10-
     Save.  Your document should be correct at this point.  We now want
to "save" the document to the disk.  This option will put a copy of the
document that we have created, on your disk so that we can use it again
later if we wish.  

     Select the Save option by holding down the ALT key and pressing
the "S".  You will be asked to name the file to be saved.  We will call
this file DEMO1.  When saving a file you need to "tell" FreeWord where
you want it to save the file.  If you have a two drive system, you might
want to save DEMO1 to the "B" drive.  If this is what you want to do,
put a diskette in drive B and type "B:DEMO1" (don't type the quotes) and
press the ENTER key.  If you have your disk set up for directories,
FreeWord will support that too.  You will just need to enter the full
pathname for the document you want to save.  

     You document will now be "saved" on your disk.  We can now
continue to edit the document knowing that we have a copy of it safe on
the disk.  To give you an idea of how the delete and the backspace keys
work, try deleting a letter or two from your screen.  Again, we can do
whatever we want to document on our screen since we know that the
corrected document is save on our disk - so have some fun here, but
leave at least one word on your screen.

     Quit.  We now have just one more option to learn about in this
demo - how to quit.  Once you have finished, hold down the ALT key
and press the "Q".  If you have at least one character on your screen,
FreeWord will ask you if you want to save your document (if you don't
have a document, FreeWord won't bother asking if you want to save it). 
The default is "Y", meaning, "Yes, I do want to save my document".  In
our case, we have altered our document, and do NOT want to save it. 
Press "N" (for NO).  We also could have press the Esc key had we found
that we did not want to quit yet, and we wanted to return to work on
our current document.

     After we respond to the "save document" prompt, we will be asked
if we want to work on another document.  If we respond with a "N" ("No
we do not want to work on another document"), FreeWord will quit and
you will be returned to the operating system.  If we respond with a "Y"
("Yes, I do want to work on another document"), FreeWord will erase the
current document from the screen - it will still exist on your disk though
- and we can start working on something else.  This is like removing one
piece of typing paper from your typewriter and getting out a new piece
to start work on another project.  
     
     If you want to work on DEMO2 at this time, respond "Y" (for Yes). 
If you do not have enough time to continue with the demos, press the
"N" (for NO).  





				-11-

                               D E M O 2


     In this demo we will learn how to load a file from your disk, learn
more on editing and moving around the document, how to reformat the
text on your screen, and how to print your document.  It is assumed that
you have already read the section called "Getting Started", and have the
knowledge of the items covered by DEMO1.

     If FreeWord is not already "running" on your computer, start
FreeWord by putting your FreeWord work diskette in your default drive
and typing the letters "FW" (for FreeWord - don't type the quotes).  You
will see the startup screen.  Press any key once you are ready to begin.

     Esc (Escape) key.  The Esc (escape) key can be used to return to
the main menu from any of the submenus.  Press the Esc key when you
have found you have selected an option by mistake, or when you have
changed your mind about wanting to select an option.

     Free memory.  FreeWord stores your entire document in your
computer's memory while you are working on it.  This means that the
size of your document is limited to the amount of available memory in
your computer.  On the bottom of your screen there is a box we called
the Main Menu.  On the center of the last line in that box there is a
number followed by the word "free".  This number is the amount of free
bytes (or characters) left in your computer.  As you type in new words,
you will see this number get smaller.  As you erase a word(s) you will
see this number get larger.  Once this number gets small (below 1000),
you will not want to try to add very much more, since there is not very
much memory left in your computer.  

     Load.  The first thing we want to do is to load the file called
DEMO2.  This file is on your FreeWord disk.  We want to "load" this file
(that is, transfer a copy of it from your disk to the FreeWord program)
so that we can work on it.  

     To load a file, hold down the ALT key and press "L" (for Load). 
You will be asked the name of the file to be loaded.  In this case the
file is called DEMO2 and is on our default drive, so you will want to
type "DEMO2" (don't type the quotes), and press the ENTER key  (if the
file was on a diskette in drive "B" you would type "B:DEMO2"). 
FreeWord will read the file from your disk, you will be returned to the
main menu, and your screen will be filled with the contents of DEMO2
(the Preamble of our Constitution).  

     Moving around.  As pointed out in DEMO1, there are many ways of
moving your cursor around.  The following are some of the more
advanced ways:

     CTRL-RIGHT.  Hold down the Ctrl (Control) key and press the right

				-12-arrow key.  This will move your cursor from the "W" in "We" to the "t"
in "the".  The Ctrl-Right combination will move your cursor from the
present word to the start of the next word.  Continue pressing the
Ctrl-Right combination until you get to the last word on the line (the
word "more").  Press the Ctrl-Right combination again and the cursor will
move down to the first word on the next line (to the "p" in "perfect"). 
Press the Ctrl-Right combination once again to move the cursor to the
"U" in "Union".  
     CTRL-LEFT.  Hold down the Ctrl (Control) key and press the left
arrow key.  This will move your cursor from the "U" in "Union" to the
space before "Union.   The Ctrl-Left combination will move your cursor
from the present word to the end of the previous word.  Press the
Ctrl-Left combination again and the cursor will move to the previous line
and will be placed after the word "more".  You can practice the
Ctrl-Left, and Ctrl-Right combination a few times now if you like.

     HOME UP.  Now we want to move to the first line, first position of
the screen.  You could use the arrow keys to move there but there is an
easier way.  If you press the Home key (it shares a key with the "7" key
on the numeric pad) and then one of the arrow key, that arrow key will
take on a new meaning.  That arrow key will become sort of a "Super"
key.  For example, if you press the Home key (you do not need to hold
this key down while pressing the arrow key) and the UP arrow, FreeWord
will move the cursor up to the first word on the screen.  Try that now. 


     HOME DOWN.  As you might already have guessed, the Home Down
keys combination will move you down to the end of the screen.  You may
try that now.  As you can see, you didn't exactly move to the end of the
screen.  In this case, our document did not fill the screen so the HOME
DOWN keys just moved us to the end of our document.  Had the
document been longer, though, we would have been move to the end of
the screen. 

     HOME RIGHT.   Move your cursor back to the top of the screen
with the HOME UP combination.  Next, press the HOME RIGHT keys. 
This will move you to the end your current line.

     HOME LEFT.  The HOME LEFT keys will move you to the start of
the current line.  You may try that now.

     HOME HOME UP.  There will be times when you want to move to
the very first line of your document.  You could move a screen at a
time, but if you were several screens away from the top of the document,
this might take a bit of time.  The HOME HOME UP combination will
move you quickly to the first line of your document.  As you recall, the
HOME keys act like a "Super" key.  Since the HOME UP combination,
takes you to the start of the screen, it is natural that an extra HOME
would take you to the top of the document.  You can try to move to the
top of your document now.  First move to the end of the screen with a
HOME DOWN.  Next, press the HOME HOME UP combination.  


				-13-
     HOME HOME DOWN.  This key combination will move your cursor
to the very end of a document.  You may try that now.  


     Tab key.  Move your cursor to the top of the screen by pressing
the HOME UP combination.  Now we want to insert a "TAB" at the start
of the first line (before the word "We").  FreeWord is set up so that
whenever you press the TAB key it will move to the next TAB setting. 
Tabs are set every five spaces (15, 20, 25, 30, 35, 40, 45, 50, 55, 60 and
65).  Press the TAB key now (it has a left arrow and a right arrow on it
- it is located just to the left of the letter "Q").  
     
     You might have noticed that the first line was moved over five
spaces.  You might also have noticed that the last word on the line
appears to have been lost (the word was "more").  FreeWord has not
really lost the word.  It is just that the first line is full and the word
"more" had to be moved to the next line.  You might ask then, "Why
can't I see it on the next line?".  To keep FreeWord working fast, when
words are moved down a line the lower lines are not redisplayed. 
FreeWord insures that any line your cursor is on will be displayed
correctly, and the lines above your cursor will also be displayed
correctly, but the lines below your cursor may not be displayed as they
would be printed.

     Redisplay.  There is are two easy ways for us to see that the word
"more" was in fact moved to the line below our cursor.  First, we could
just move our cursor down one line.  Since FreeWord insures that the
line currently displayed will be formatted correctly, moving the cursor
down a line will display that line correctly.  If we wanted to see what
the entire screen will look like though, we could select the REDISPLAY
option.  This option will reformat the entire screen for us.  FreeWord
will always correctly reformat your document for you.  You never NEED
to select the REDISPLAY option - it is just so that you can view what
your document looks like. 
     
     To select the REDISPLAY option, hold down the ALT key and press
the "R" key.  Your screen will be cleared, and the lines will be
redisplayed.

     ENTER key.  The ENTER key is used to mark the end of a line.  It
can also be used to move the text that is to the right of the cursor
down one line.  Press the HOME UP combination to move your cursor to
the top of the screen.  Next, press the ENTER key so that the entire
document will be moved down one line.  Notice that your cursor is now
located on line two.  This is how you can insert blank lines into the
document.  This will also cause the document to be printed one line lower
than it would have been if we had not pressed the ENTER key.

     Insert/Replace modes.  When you start FreeWord, the program will
be in the "Insert" mode.  This means that when you type a character,
everything to the right of your cursor will be pushed over to the right
one place.  This is the safest mode to work in since you will not
				-14-accidentally "type over" part of your document.  
     
     You can easily determine which mode you are operating in by
glancing to the bottom left-hand corner of the Main Menu.  It will say
"Insert Mode" or "Replace Mode".

     "Replace Mode" will result in the letter you type replacing the
character at your cursor's location.

     You can switch from one mode to the other by pressing the Ins
(Insert) key.  Press that key now to switch into the Replace mode.  Move
your cursor to the third word in line one ("people").  Replace "people"
with "person" by typing over the word "people".  Now return to the start
of "person" and return the word to "people" by typing "people" over the
word "person".  

     Press the Ins key and return to the Insert mode.  Move your cursor
back to the start of the third word ("people").  Type "abc" (don't type
the quotes).  The letters "abc" have now be inserted onto the beginning
of the word "people".  You can now remove the letters "abc" by pressing
the backspace key three times.


     Print.  If you do not have a printer connected to your PC, you will
need to skip this section.

     Basic printing is quite easy with FreeWord.  Hold the ALT key down
and press the "P" (for Print) key.  Select option "1" to print the entire
document.  It couldn't be easier!

     If you want to print a single page, select option "2" instead of
option "1".  See the reference section of this manual for more
information on changing the print options.

     To stop your printer, select option "4" from the print menu.


     This completes DEMO2.  If you do not have time to continue with
DEMO3 at this point, select the Quit option from the main menu.  Do
NOT select to save your current document (select "N" when asked to save
document).  Select "N" (for NO) when asked if you want to work on
another document.

     If you are going to continue with DEMO3 at this point, (1) Select
the Quit option, (2) Press "N" (for NO Save), and (3) Press "Y" (for YES
to continue).







				-15-

                               D E M O 3


     In this demo we will learn how to get a listing of files from your
disk (a Directory), use the Find command, delete a line of your document,
mark a block of text to be moved, copied or deleted, use the new page
command, and use the "typewriter" feature.  It is assumed that you have
already read the section called "Getting Started", and have the knowledge
of the items covered by DEMO1 and DEMO2.

     If FreeWord is not already "running" on your computer, start
FreeWord by putting your FreeWord word diskette in your default drive
and typing the letters "FW" (for FreeWord - don't type the quotes).  You
will see the startup screen.  Press any key once you are ready to begin.

     Directory.  The Directory option will allow you to display
information about the files on your disk.  Hold down the ALT key and
press the "D" key.  The default option on the directory is to obtain a
listing of all files on the disk ("*.*").  Since that is just what we want
to do, simply press the ENTER key.  

     The directory will display the current date and time, free space (in
bytes) left on your disk, and free memory left in the computer.  It will
also list the filenames, number of bytes each file occupies, and the date
and time they were created or last revised.  
     You can move the cursor around on the screen using UP, DOWN,
LEFT, and the RIGHT arrow keys, as well as the HOME, END, PGUP, and
PGDN.  Move the reverse video bar so that it highlights the file called
DEMO2.  

     Through this option we can delete a file (if you are running out of
space on your disk and you want to save the current document, you
might want to delete an old file that you could live without), or load a
file.  This is a easy way to load a file since you do not need to
remember the exact spelling of the file's name.  If you can find the file
on the list you can load it.  Select option "1" at this point so that we
can load DEMO2.  You will be returned to the main menu and DEMO2
will be displayed on the screen.

     Find.  We now want to find the first occurrence of the word
"people" in our document.  Hold down the ALT key and press the "F"
key.  The Find Action menu offers three options.  We want to search the
document in the forward direction, so we want option "1".  Press the "1"
key now.  Next, FreeWord needs to know what word, or words, we want
to find.  Enter the word "people" and press the ENTER key.  It does not
matter if you enter the word in lower or upper case, FreeWord will find
the word regardless.  Once the word is found, the word will be
highlighted and you will be returned to the main menu.  

     Select the Find option again by holding down the ALT key and

				-16-pressing the "F" key.  Select the "1" for the forward search.  Noticed
that FreeWord has inserted the word "people".  FreeWord will save the
last word you requested a "find" for as long as the next key you pressed
was the ALT "F" for another find.  Had you pressed any other key,
"people" would not have been inserted for you.  Since we want to search
for another occurrence of the word "people" all we have to do is press
the ENTER key.  FreeWord will search the document, and then report
back "No Match", meaning that there were no more occurrences of the
word "people" in our document.

     Select the Find option once again.  Press the "1" for a forward
find.  This time instead of searching for the word "people" we want to
search for the word "United States".  If you type the "U" in "United" the
word "people" will disappear and you can finish typing "United States". 
Press the ENTER key when finished.  You will see that the phase "United
States" is highlighted.  

     To remove the reverse video that highlights the word(s), press any
key.  For example, press the Esc (Escape) key, and the highlight will be
removed from the phase "United States".

     Find and Replace.  We will now change one of the words in
DEMO2.  Select the Find and Replace option by holding down the ALT
key and pressing the "F".  Select option "3".  Select "Y" when asked
"Confirm (Y/N)?" (this will allow us to change our mind before any
changes will actually take place).  The word we want to find is "Union". 
Type that word in now and press the ENTER key.

     The word we want to replace "Union" with is the word "Place". 
Type "Place" and press the ENTER key.

     FreeWord will find "Union" and highlight it.  You will be asked if
you want to replace it.  Respond with a "Y" (for YES).  The word will be
replaced and you will be asked if you want to find the next occurrence
(of the word "Union").  Respond "Y" (for YES).  FreeWord will search the
remainder of your document and report that it could not find any more
matches.  You will then be returned to the main menu.

     Deleting a line.  There will be times when you want to delete an
entire line at a time.  FreeWord make this action very simple.  Move to
the beginning of the third line (the line that starts "provide for the
common defense").

     Hold down the Ctrl (Control) key and press the End (located on the
numeric pad with the "1") key.  Your current line will be removed and
the line that used to be line 4 (it starts "and secure the Blessing") will
be moved up to line 3.

     You can use the Ctrl - End combination at any position on the
line.  All the text from your cursor to the right will be erased, and the
line beneath the cursor will be "rolled" up to finish out the remainder of
the line.

				-17-
     Mark a block.  For the next exercise you will copy the paragraph of
text in DEMO2 to the end of the document.  

     Move your cursor to the top of the screen by pressing the HOME
key and then the UP arrow.  Select the Block option by holding down
the ALT key and pressing the "M" key.  Move your cursor to the bottom
of the document by pressing the HOME key and then the DOWN arrow. 
Notice that FreeWord highlights the block of text as you mark it.  Select
the "1" option (copy the block).  Although we can call the block any
valid DOS filename, we will elect to take the default name for the block
by pressing the ENTER key.  FreeWord will erase the block from our disk
at the end of the session with FreeWord.  Had we wanted to use the
block of text at a latter time, we would have needed to give it a name.

     After you pressed ENTER when asked for a name for the block,
FreeWord returned you to the main menu and removed the highlighted
markings from your text.

     We now want to load the copy of DEMO2.  Your cursor should be at
the end of your document.  If it is not, move there by pressing the
HOME key and the DOWN arrow.  Select the Load option by holding
down the ALT key and pressing the "L" (for Load).  When asked for the
name of the file to be loaded, just press the ENTER key so that
FreeWord will retrieve the default block file.  You will be returned to
the main menu and the second copy of the document will be displayed on
your screen.


     New Page.  Your cursor should be located on the first word ("We")
of the second copy of the document.  If we wanted to force FreeWord to
start printing the second copy on a separate page we would select the
New Page option.

     Hold down the ALT key and press the "N" key.  You will noticed
that a dashed line is displayed where your cursor used to be located, and
that the line your cursor used to be on has been moved down one line on
the screen.  The dash line is to indicate to you where the page will
"break" (where one page ends and another one will begin).  You might
have also have noticed that the entire version of the second copy of the
Preamble is not displayed on the screen (one line is "missing").  Hold the
ALT key down and press the "R" (for Redisplay) and you will see the
entire second copy of the document.


     Page Up and Page Down.  We can now move around from page to
page.  Press the PgUp (the Page Up key is located on the numeric pad
with the "9" key) to move to the first line of the previous page (in this
case, page 1).  Press the PgDn (the Page Down key is located on the
numeric pad with the "3" key) to move to the first line of the next page.



				-18-
     Deleting a New Page mark.  Now we want to delete the New Page
mark we put in before.  Move your cursor to the first line, first position,
on page two (your cursor should be on the "W").  Press the backspace
key to remove the New Page mark.  This is the only way a New Page
mark can be deleted.  This is done so that you don't accidentally delete
it.  

     Typewriter.  If you do not have a printer connected to your PC you
will have to skip this section.

     First, make your printer ready to print.  Select the Typewriter
option by holding down the ALT key and pressing the letter "T".  You
will be asked if you want to send special print codes to your printer. 
These special codes will enable your printer to change the appearance of
its print (if your printer supports that feature).  For more details see the
reference section of this manual.  For now, respond with a "N" (for NO)
to this option.

     You can now type a line of text.  We will want to type "This is a
test of FreeWord's typewriter feature." (don't type the quotes).  Press
ENTER when you are ready to send the line to your printer.

     You can move your cursor left or right with the arrow keys if you
have to edit part of the line.  You can change from the Insert to the
Replace mode by pressing the Ins (Insert) key.  

     You might want to use this feature to quickly address an envelope
or to fill out some preprinted forms.



     You've made it!  This is the end of the tutorial.  I hope that it has
given you a good idea of the many features FreeWord has to offer.  By
continuing your work with FreeWord I think you will find it to be a very
easy, yet useful, word processor.

















				-19-


                               C O L O R

USAGE:  This separate program (called COLOR.EXE) will allow you to
change the color of the characters on your screen.  You can also use the
program to change the color of the border around your screen.  For
example, if you wanted FreeWord to use blue for your normal text and
yellow for the high intensity text you would run this program.


DESCRIPTION:  Insert the disk that has the program COLOR.EXE into
your disk drive.  Type "COLOR" (don't type the quotes).  Press any key
to see the main menu.  You will be asked what item you want to change
the color on, and be shown the available colors.  Once you have selected
all the colors you want to use, select the "exit" option to end the
program.

     The COLOR program will create a file called COLOR.FIL.  The file
COLOR.FIL needs to be on your FreeWord work disk.  If the disk you
create COLOR.FIL on is not the disk that has the program FW.EXE on it
you will have to copy COLOR.FIL to the disk with FW.EXE.  If you have
a two drive floppy system, insert the disk with FW.EXE in drive A and
the disk with COLOR.FIL in drive B.  Type "COPY B:COLOR.FIL
A:COLOR.FIL" (don't type the quotes).  If you have a hard disk system,
put the disk with COLOR.FIL in drive A and type "COPY A:COLOR.FIL
C:" (don't type the quotes).  

     The next time you run FreeWord, the colors will be the ones you
selected.

     Monochrome users.  If you are using a monochrome display but you
are using a color graphics card, you will need to copy the file
NO-COLOR.FIL to COLOR.FIL on the disk that has the FW.EXE file on
it.  The COMPAQ and the IBM PC Portable are two computers that have
this setup.  If the file NO-COLOR.FIL is on the same disk and the file
FW.EXE you will need to type "COPY NO-COLOR.FIL COLOR.FIL" (don't
type the quotes).  

     If you have a two drive floppy system and the NO-COLOR.FIL file
is not on the disk with FW.EXE, insert the disk with FW.EXE in drive A
and the diskette with NO-COLOR.FIL in drive B.  Then type "COPY
B:NO-COLOR.FIL A:COLOR.FIL" (don't type the quotes).  If you have a
hard disk system, put the disk with the 
NO-COLOR.FIL in drive A and type "COPY A:NO-COLOR.FIL
C:COLOR.FIL" (don't type the quotes).  This will improve the appearance
of the characters on your screen (you may have to make some
adjustments with the brightness and contrast knobs on your display to
get the best possible image).



				-20-
REMARKS:  You will need to have a color card in your computer to be
able to use this program.  You only need to run this program one time. 
Then just put the file the program created (called "COLOR.FIL") on the
disk that has FW.EXE on it.  When FreeWord starts, it will search the
default disk for the file COLOR.FIL.  If it finds the file it will use the
colors you selected.  If there is no COLOR.FIL file, FreeWord will use
the default color settings.
 












































				-21-


                    C U R S O R    M O V E M E N T


USAGE:  The cursor movement keys allow you to move around in your
document.  For example, you might want to move to the start of the next
page.  Do this by pressing the key labeled "PgDn".


DESCRIPTION:  You can move around in FreeWord by using the following
keys:

UP    -  Move to the line above the current line 
DOWN  -  Move to the line below the current line 
LEFT  -  Move one character to the left 
RIGHT -  Move one character to the right 
END   -  Move to the end of the current line 
 
Ctrl & RIGHT - Move to the start of the next word 
Ctrl & LEFT  - Move to the end of the previous word 
 
PgUp   -  Move to the top of the current page or to the start of       
previous  page if you are already at the start of a page.
PgDn   -  Move to the start of the next page 
 
HOME & UP   -  Move to the top of the screen 
HOME & DOWN -  Move to the bottom of the screen 
HOME & LEFT -  Move to the start of the current line 
HOME & RIGHT -  Move to the end of the current line 
HOME & HOME & UP -  Move to the start of the document 
HOME & HOME & DOWN -  Move to the end of the document         


REMARKS:  You must press the Ctrl key down and hold it and then press
the RIGHT or LEFT arrow when moving a word at a time.
















				-22-

                           D I R E C T O R Y


USAGE:  This option is used to find information about the files on your
disk, to delete a file, or to find the amount of free space left on your
disk.  For example, you are ready to start work on a document but you
cannot remember the name you gave to it when you created it.  Select
this option to see a listing of the files on your disk.


DESCRIPTION:  Select this option by holding down the "ALT" key and
pressing the letter "D".  Next, enter the name of the drive and a colon
for the drive you want to directory of, .e.g, "b:" for drive B.  You then
type "*.*" to get all the files on the disk, or something like "*.ltr" to get
all files which have "ltr" as their extensions.

     You will then see a directory of your disk.  You will be provided
with the date and time, the amount of free memory left in your
computer, and the amount of disk space remaining on the requested disk. 
The listing of the files will contain the filename, size, and the last date
and time the file was updated.  If there are more files than can fit on a
single screen you can move the reverse video bar down to the end of the
screen to cause the screen to scroll and the next filename to appear. 
You can also hit the "PgDn" key to move to the bottom of the screen,
and "PgUp" to move to the beginning of the screen.
     
     
     There are two actions you can perform on this screen.  You can
load the file highlighted in the reverse video bar, or delete it.  To select
a file, move the reverse video bar up, down, left or right with the arrow
keys until the filename is highlighted.  

     Load.  After selecting the file to be loaded, press the key labeled
"1".  The new file will be loaded and you will be returned to the main
menu.

     Delete.  After selecting the file to be deleted (by highlighting the
filename), press the key labeled "2".  As a safety measure, you will be
asked if you are certain that you want to delete this file.  Respond "N"
(for NO) if you do not want to delete the file, and respond "Y" (for YES)
to delete the file.  After the file is deleted, the name will still appear on
the list, but the size will be zero and the date and time of last update
will be erased.


REMARKS:  If you load a file when you are already working on a
document, the file will be loaded at the end of the word your cursor is
on in the original document.


				-23-

                  F I N D / F I N D  &  R E P L A C E



USAGE:  This option will find a particular word, or words, in your
document.  This option can also be used to find a word, or words, and
replace them with another word, or words (sometimes called search and
replace).  For example, if you wanted to find the location where you used
the word "understand".


DESCRIPTION:  Invoke this option be holding down the ALT key and
pressing the "F" key when at the main menu.  The Find Action Menu
allows three options; (1) Forward find, (2) Reverse Find, (3) Find and
Replace.

     Forward.  The Forward option will search the document from your
present location towards the end of the document.  Type "1" to select
this option.  Then type the word, or words, you are looking for and press
the ENTER key.  The program will go to the word (if the word is found)
and highlight it.  The word(s) will remain highlighed until you start
typing again.  If the word is not found, you will receive a message that
there was no match.  If there is no match, your cursor will be at the
word you were on when you requested the Find option.   

     Reverse.  The Reverse option will search the document from your
present location towards the beginning of the document.  Type "2" to
select this option.  Then type the word, or words, you are looking for
and press the ENTER key.  The program will go to the word (if the word
is found) and highlight it.  The word(s) will remain highlighed until you
start typing again.  If the word is not found, you will receive a message
that there was no match.  If there is no match, your cursor will be at
the word you were on when you requested the Find option.   

     Find & Replace.  This option works only in the forward direction. 
Type "3" to select this option.  This option gives you a choice on
whether or not you want to search the entire document without any
intervention from you or not.  If you want FreeWord to replace all
occurrence of the word(s) you are searching for, then respond with a "N"
when asked "With Confirmed (Y/N)?".  If you want to stop each time
FreeWord finds the word you are looking for and give you the option not
to replace the word, then select the "Y" option.  Next, you will be asked
for the word(s) that you want to find.  Enter the word(s) and press the
ENTER key.  You will then be asked for the word(s) you want to insert. 
Enter that word(s) and press ENTER.


REMARKS:  The Find and Replace option will search your document from
your present location to the end of the document.  If you want to make
sure you find every occurrence, press the "Home" key twice and then the

				-24-UP arrow.  This will move you to the first word in your document.  Now
when you request the Find and Replace, you will be certain to find all
occurrences in the document.


















































				-25-


                     G E N E R A L   E D I T I N G


USAGE:  These keys are used throughout FreeWord to enter, change and
delete text.  For example, you want to erase the letter to the left of the
cursor.  Press the Backspace key to do this.


DESCRIPTION:  FreeWord makes use of many of the special keys on your
IBM keyboard.  Below is a list of some of them:

Esc Key - Return to main menu from a submenu 
Backspace - Delete text left of the cursor 
Del Key - Delete character at the cursor's location 
Ctrl & End  - Delete from the cursor to end of line 
Enter Key - New Line.  
Ins Key - Used to toggle back and forth from Insert to the       
Replace mode. 
Tab Key - Double arrow key (this key has a left arrow and a right arrow
on it) used to move your cursor to the preset tab stops (at 15, 20, 25,
30, 35, 40, 45, 50, 55, 60, and 65).


Inserting.  Move cursor by using the arrow keys to position in text where
you want to insert.  Check to see if you are in insert mode (look at the
lower left corner of the main menu - if will either say Insert Mode, or
Replace Mode). Start typing. Once finished, press "ALT" & "R" if you
want to redisplay (reformat) text. 

Replacing.   Move cursor by using the arrow keys to position in text
where you want to replace.  Check to see that you are in the replace
mode (check lower left corner of the main menu).  Start typing. Once
finished, press "ALT" & "R" if you want to redisplay (reformat) text. 

Hyphenation.  When your computer "beeps", move LEFT and RIGHT
ARROW keys to appropriate place for hyphen; then press "Esc". 

Free memory.  Number of bytes (characters) left in memory is displayed
on the bottom line of main menu.  FreeWord keeps the document you are
working on in memory at all times, so the size of your document is
limited to the amount of free memory on your machine.


REMARKS:  If you press the ENTER key on a line that has text to the
right of the cursor, the text to the right will be cleared from the line
and moved down to the next line.

     If you need to create a document larger than what you can have in
memory at any one time, you can create two or more documents and

				-26-work on them separately.  When you go to print the documents, FreeWord
allows you to declare the starting page number.  You might, for example,
have a document called report-1 that is 12 pages long.  The second part
of the document might be in a file called report-2 and be 10 pages long. 
When you print report-2, request that FreeWord starts numbering the
pages at page 13.  After printing you can then put the pages together
and it will appear that you had one large report. 














































				-27-


                               H E L P 



USAGE:  To provide you with quick aid without having to turn to your
manual.  For example, you have forgotten what the Redisplay command
does and you want to check it first before using it.


DESCRIPTION:  Select this option by holding down the ALT key and
pressing the letter "H" (for Help).  You will be given a list of items for
which there is online help.  Type in the number for the desired item and
press ENTER.  Once you have completed reading the Help text press any
key to return to the Help Menu.  You can then select another item to
receive help with, or you can return to the main menu by pressing the
Esc key.


REMARKS:  If you are short of space on your disk you can delete the
file FW.HLP once you no longer need help from FreeWord.  If the disk
FW.HLP was on was in the "A" drive you would type "DEL A:FW.HLP"
once you are at the DOS prompt to delete this file.  Remember to do this
only on your backup copy since you might want to use FreeWord's Help
again at some point.


























				-28-

                         L O A D   A   F I L E

USAGE:  To transfer a file (i.e., a document) previously created and
saved to disk, from the disk to the FreeWord program.  For example, you
would select this option if you wanted to revise a document you saved to
disk last week.


DESCRIPTION:  Hold down the ALT key and press the "L" (for Load)
key.  You will be asked to enter the name of the file you want to load. 
You must enter the drive name if it is different from the default.  For
example, if drive "A" is your default drive but the file you want is on
drive "B" you will need to type "B:" (don't type the quotes) followed
immediately by the filename.  FreeWord also supports the use path names
if you wish to use them.

     The load command is also used to load blocks of text put on your
disk by the COPY and MOVE options (see the MARK BLOCK section for
more details).  If you copied or moved the text without naming the block
(by just pressing the ENTER key), press the ENTER key when asked for
the name of the file to be loaded. 

     You can also use the Load command to insert a few lines into any
document.  You might want, for example, to make a document called
ADDRESS.  This document could contain your name, street address, city
and state.  This document could be loaded in any letter you were writing
where you needed that information.  As you can see, this usage can be a
big time saver.


REMARKS:  Files can also be loaded from the Directory option found on
the main menu (see that section for more details).  
     
     When you are beginning a session with FreeWord, you can load a
file at the same time you load FreeWord.  Load a file called JONES from
the "B" drive by typing "FW B:JONES" from the command prompt (e.g.,
from the "A>").

     It is possible for FreeWord to accept any standard ASCII text file. 
If you load an ASCII file remember that each line is treated as though
you pressed the ENTER key at the end of the line.   You must also keep
in mind that when FreeWord loads a file it does not try to reformat that
file.  That is, it does not adjust the line length or where new pages will
start.  This is only a problem if you want to move around the document
a page at a time, or if you want to move to the end of the document.  It
is possible that your line and page numbers will be inaccurate.  You can
work around this in one of two ways (1) move your cursor downwards a
screen at a time (use the HOME-DOWN arrow combination) until you
reach the end of the document, or (2) print the entire document. Either
action will reformat the document.

				-29-


                        M A R K   A   B L O C K

USAGE:  This command has three ways to alter the document you are
working on.  You can mark a block and then Copy it (a block is merely a
collection of words - it could be a sentence or phase, a line, a
paragraph, a page, or the entire document), Delete a block, or Move a
block.  For example, you might find that a point you raised in a
paragraph early in the document seems to "work" better towards the end
of the document.  In that case you would select to move the paragraph.


DESCRIPTION:  Move to the start of the block you want to preform the
action on.  Next, selected this option from the main menu holding down
the ALT key and then pressing the "M" key.  Once the Mark option is
selected you will be provide with three options on the Mark Action
Menu.  You must now mark the block you want to perform the action
on.  To mark the block you move the cursor from it's present location to
the end of the desired block.  You can move the cursor with the arrow
keys, the key marked "End", and the Home-Arrow key combination (see
the General Editing section for more details).  You will not be allowed to
move the cursor prior (that is, forward in the document) to its location
when you pressed the ALT-M key combination.  

     After you have marked the block you are ready to select the desired
action.  The COPY option will leave the block you marked in tact but
make a copy that you can use elsewhere.  The DELETE option will
remove the marked text from the document and will NOT make a copy of
the block to be used elsewhere.  The MOVE option will remove the
marked text from the document, but will make a copy that you will be
able to insert elsewhere in the document.
     
     Copy and Move.  The options COPY and MOVE will store a copy of
the block on your disk.  When you select these options you will be
allowed to provide FreeWord with a name for the block.  If you choose
to name the block, the block will be stored on your disk and you will be
able to use that block of text whenever you like regardless of what
document you are working on.  You can use any valid DOS filename.  You
can put the block on any valid disk drive or in any valid subdirectory if
you wish.  

     If you choose not to name the block and just to press the ENTER
key the block will be named a temporary name and will be removed from
your disk when you finish the current session with FreeWord.   You will
want to press the ENTER key and have the block be a temporary file if
you do not think you will need that block of text again, or if you are
short of disk space and you do not want a lot of files using up the space
on your disk.


				-39-
     The Move option will delete the text from its current location in
your document after writing the text to your disk.

     If you have selected to COPY or MOVE the block, you will at some
point want to load the marked block back into your document (or into
another document if you wish).  To do this, locate the cursor at the
point where you want the block to be inserted.  

     FreeWord will insert the block after the current word.  You will
need to position the cursor on a blank line to make the block start on a
line by itself (if you are not on a blank line, first press the ENTER key
and then move the cursor by one line - by pressing the UP arrow).

     Hold down the ALT key and press the letter "L" (for LOAD).  The
Load Action Menu will ask you for the name of the file.  Enter the
filename exactly as you did when you copied or moved the file and press
ENTER (press the ENTER key without typing a filename if you used the
default filename when you copied or moved).  If you need more
information on loading a file see the section titled "LOAD FILE".

     Delete.  If you selected to DELETE the file (by pressing the option
"2", or the key marked "Del"), you will be asked to confirm that deleting
the block is in fact what you want to do.  FreeWord does this since
there will not be a copy of the block should you have pressed this key
by mistake.  If you decide that you do not want to delete the block at
this time press the ENTER key (the default is NOT to delete the block)
to return to the Block Action Menu.


REMARKS:  Before selecting the block option (by holding down the ALT
key and pressing the letter "M"), you must position the cursor at the
start of the block you want to mark.  You will not be able to move the
cursor to the left or above this point.  



















				-31-

                            N E W   P A G E


USAGE:  To force FreeWord to create a new page.  For example, you
have finished writing one chapter and are ready to start on the next and
you want each chapter to start at the top of a page.


DESCRIPTION:  Move your cursor to the point in the document you want
the new page to occur.  Hold down the ALT key and press the letter "N"
(for New page).  A dashed line will appear on your screen to indicate
where one page ends and the other begins.  The dashed line will not
appear on your document. 


REMARKS:  To remove a New Page Mark you will need to do the
following: (1) Locate the cursor at the first position of the first line for
the page following the page break (e.g., On page 2, line 1, position 10),
(2) Press the Backspace key to remove the New Page.
































				-32-

                             O P T I O N S

USAGE:  Select this option to change any of the following:  
     (1)  The left and/or right margins
     (2)  Column headings
     (3)  Lines per page

DESCRIPTION:  Hold down the ALT key and press the "O" (for Options)
key.  The Option menu will be displayed and allow you to choose one of
the following three options:
     Change margins.  This option will allow you to change the left
and/or the right margins.  FreeWord will start the left margin at ten
spaces in from the left margin of the paper.  The right margin will be at
75 spaces for the left side of the paper.  If you wanted to write less on
a page and to have a wider left and right margin you might want to
select a left margin of 20 and a right margin of 65.  
     After selecting to change the margins, FreeWord will display the
current margin settings.  After reviewing those settings, press the enter
key.  At that point you will allowed to change the value of the left
margin.  Either change the left margin and press the ENTER key when
completed, or just press the ENTER key to keep the current value of the
left margin.  The right margin will then be displayed.  Change the value
of the right margin, if that is what you want to do, or press the ENTER
key to retain the current value.

     Column Headings.  Column headings will appear on the bottom of the
Main Menu.  They are designed to help you in entering column of text. 
They will not print out - they are just for helping you line things up.
     Select this option from the Option Menu by pressing the number 2. 
You will then be allowed to enter your column headings.  Press the
ENTER key when the column heading is entered.

     Lines per page.  This option will allow you to change the number of
lines that will appear on a page.  The value can be between 5 lines and
99 lines.  You can only change the number of lines per page once in a
given document.  For example, Letter-1 can have a page length of 54
lines per page, and Letter-2 can have a page length of 52 lines per page,
but you could not have the first page of Letter-1 have 54 lines and the
remainder of the document have 66 lines per page.
     Select this option from the Option Menu by pressing the number 3. 
Then enter the number of lines per page you want this document to have.

REMARKS:  When changing the left and right margins, you must create
new margins that allow at least 20 characters of text to be entered. 
That is, a left margin of 10 and a right margin of 12 would not be
allowed since we would only be able to enter words that are 2 characters
long.  The other rule for changing margins is that the right margin
cannot be past 78.  So a right margin of 78 is allowed but 79 and 80 are
not.


				-33-
                               P R I N T



USAGE:  The print option can be used to print a document (or part of a
document) and to cancel the current printing of a document.  For
example,  you have completed typing your letter and now you want to get
a printed copy of it.


DESCRIPTION:  Hold the ALT key down and press the "P" (for Print)
key.  The Print Action Menu has four options: (1) Full text, (2) Page, (3)
Change Options, and (4) Cancel.

     Full Text.  Select this option to print the entire document, from
start to the end.  

     Page.  The Page option will print only the page the cursor is
currently on.  You will need to move to the desired page before selecting
the Print option if you want to use this feature.

     Change Options.  One of the features of FreeWord is that you do
not need to know a great deal about the program to use it.  FreeWord
will make assumptions about what it thinks you want.  FreeWord has
made a number of assumptions about how you might want to print your
documents.  If you find that some of these assumptions do not work well
for one of your documents, they are easily changed.  To make any
changes select option "3" from the Print Action Menu.  The Change Menu
will show you the current settings for all print items that you can
change.  
     
     RIGHT JUSTIFICATION.  Right justification will cause the right
margin to be aligned, just as your left margin is aligned.  This is how a
book or magazine will usually set up their margins.  This will give a very
neat look to your document when printed.  There are times, though, when
you want your document to look a bit less formal.  FreeWord allows you
to turn right justification off.  The default is to have your document
right justified when printed.  To turn right justification off, select option
"1" from the Change Menu.  If you want to return to right justification,
select option "2".  
     NUMBER OF COPIES.  FreeWord will allow you to print up to nine
copies of any document.  Each document will be printed in its entirety
before the next copy is started (that way you will not have to collate the
copies).  Change the number of copies (the default is one), by selecting
option "3" on the Change Menu, then enter the desired number.

     PAGE NUMBER POSITION.  The default is not to display a page
number.  If you are typing a report and need a page number on every
page you can select from a variety of positions for the page number. 
First select option "4".  You will then be transferred to another menu to
select the position of the page number.  The options there are: (1) Top

				-34-center, (2) Top right, (3) Bottom center, (4) Bottom right,  or (5) Not
displayed - the default. 

     STARTING PAGE NUMBER.  You might not always want the first
page you print to be labeled page one.  You can select the starting page
number to be anything between 1 and 9999.


REMARKS:  FreeWord does something called "background printing".  This
means that you can still edit a document while FreeWord is printing
(though editing will be a bit slower).  You can edit the same document or
a different one if you choose.  If you edit the same one, any changes
you make to the document will NOT appear on the printed version
currently being printed.  FreeWord makes a copy of the document (i.e., it
writes it to disk) when you instructed it to print.  

     Since FreeWord makes a copy of your document when it prints you
will need to have enough space on your default drive (the drive that has
the FreeWord program on it) for the entire document to be written.  For
example, if you have a document that uses 50,000 bytes, you will need to
have 50,000 bytes of space left on your FreeWord disk if you want to
print that file.  

     Changes made to the print options (e.g., number of copies, page
number position), are not kept with the document and will have to be
re-selected if you want the same options when printing at a later date.



























				-35-
                                Q U I T



USAGE:  To stop work on FreeWord and return to DOS (the operating
system), or to stop work on one document and to start on another.  For
example, you have completed your letter to your boss, and now you need
to start work on a monthly report.


DESCRIPTION:  Select this option by holding down the ALT key and
pressing "Q" (for Quit).  If you are currently working on a document, you
will be asked if you want to save that document first.  If you decide at
this point you do not want to continue with the Quit options, press Esc
and you will be returned to your document.

     After you have responded to the Save document question, you will
be asked if you want to work on another document.  Press the "Y" if you
do want to start work on another document.  The current document will
be removed from your computer's memory (it will still exist on your disk
if you have saved it), and you will receive a blank screen.  You can now
load a document from disk, or create a new one by typing it in.  


REMARKS:  If you select to quit, and you are not currently working on a
document, you will not be asked if you want to save the current
document (there is none to save), nor will you be asked if you want to
start a new document (you were already at the point where you could
create a new document.  Since you did not, FreeWord assumes that you
did not want to).  






















				-36-

                           R E D I S P L A Y


USAGE:  You document will always be correctly formatted from the top
of the screen down to your cursor.  If you insert or delete some text,
the text to the right and below your cursor may not be formatted
correctly on your screen.  You need not worry about this, FreeWord will
see that the document is always correctly formatted without any action
needed on your part, but you might want to view the correctly formatted
screen.  To do that, select the Redisplay option.  For example, you have
inserted a large amount of text and you want to see effects the
appearance of your new paragraph.


DESCRIPTION:  Hold down the ALT key and press "R".  There are no
options for this command.  You will see your screen clear and be
redisplayed.


REMARKS:  Unlike some word processors, FreeWord does not require you
to redisplay the screen after adding or deleting text into your document. 
The redisplay option is just for your use, to help you see what the
document will look like.  When you print the document, FreeWord will
rework the document so that it will be properly formatted.



























				-37-


                                S A V E


USAGE:  Any document you create while working with FreeWord will
have to be "saved" if you want to use that document at a later time. 
The Save option will record the document on your disk so that it can be
recalled and used again.  For example, you have typed a complaint letter
to a company and you want to use that letter again if you do not get a
response from the company.


DESCRIPTION:  Hold down the ALT key and press the "S" (for Save). 
You will be asked to enter the name of the file to be saved.  You will
need to enter the name of the disk drive you want to put the file on if
it is not the default drive.  For example, if you default drive is "A", and
you want to save the document called REPORT on drive "B", you will
need to type "B:REPORT".  You can use any valid filename (see your DOS
manual for detail on valid filenames), you can include drive and directory
names if you wish.  The filename can contain up to 45 total characters
(you can not use spaces).  If the document you are currently editing was
retrieved from the disk using the LOAD command, FreeWord will provide
the name you used when you loaded the file as the default name when
saving the file.  Just press the ENTER key if you want the current
document to replace the original one on your disk.  If you still want to
keep the original one in tact on the disk, just start typing a new
filename and the old one will disappear.
     
     If the document already exist on your disk you will be asked if you
want to replace the old file with the current document.  This safety
feature will prevent the removal of a valuable file by mistake.  If you do
not want to replace the original file, type an "N" (for NO) when asked if
you want to replace.  If you respond with an "N" you will be given the
chance to enter a new filename.  Type a "Y" (for YES) to replace the
original file with the current version of it.

     
REMARKS:  You can save your document as often as you like.  FreeWord
will "remember" where you were when you selected the Save option and
return you to that point once the document is saved.  You might want to
save your document after typing every few pages to avoid the possible
loss of information should something happen to your computer, e.g., loss
of power.








				-38-
                               S P E L L


USAGE:  SSP's SPELL is a separate program available to all registered
owners of FreeWord (there is no extra cost for SPELL).  SPELL is a
spelling checker.  It will read the file you created with FreeWord (or any
word processor or editor that can create an ASCII text file), and check
the spelling.  For example, you have just completed a very important
letter to your boss and you want to make certain that no words are
misspelled.


DESCRIPTION:  Start spelling by inserting the SSP's SPELL disk into
your disk drive and typing "SPELL" (don't type the quotes).  After
viewing the startup screen, press any key.  

     You will be asked for the name of the file that you want to check. 
Enter the full filename and press the ENTER key.  As with FreeWord,
you can start SPELL by typing the name of the program (SPELL),
followed by a space and the name of the file you want to work on (e.g.,
"SPELL LETTER1").

     Duplicate words.  SSP's SPELL will also check for duplicate words,
e.g., "The the sun has risen".  You will receive a message when a word is
found that is exactly like the word that proceeded it.  You will be given
the option to: (1) Skip this occurrence (you might have wanted to say
"REALLY, REALLY GREAT!!!!"),  (2) Correct the word (you can delete the
word by pressing the Del (delete) key until the word is gone, or you can
change the word), or (3) Cancel duplicate checking (for the remainder of
the session you will not be informed of any duplicates).

     Word not found.  SPELL will mark any word not in its dictionary
with a reverse video bar.  You will be given the following options:

     SKIP.   This option will leave the current word exactly the way you
typed it.  It might be that the word is spelled correctly but the SPELL
did not know the word.  

     CORRECT.  If you know the spelling of the word you might want to
just select to correct the spelling.  Once you select this option, the
reverse video bar will disappear, and you will be able to edit the word. 
Many of the editing features of FreeWord are found here.  The default is
the Insert Mode, but you can change to the Replace Mode by pressing
the Ins (Insert) key.  You can move the cursor right and left with the
arrow keys.  You will not be able to move the cursor up, or past the
beginning of the misspelled word, but you can edit any part of the line
from the misspelled word to the end of the line.  The Del (Delete) key
will delete the letter at your cursor's location.  

     ADD WORD.   Select this option to add a word to your auxiliary
dictionary.  This will prevent you from getting a spelling error the next

				-39-time SSP's SPELL encounters the word.  SPELL will create a file on your
disk called SPELL.AUX.  This file will contain all words that you have
added.


     LOOK UP.  When you are uncertain of how to spell a word that is
marked as unknown, select the LOOK UP (number 4) option.  You will be
asked to enter the first letters of the word you want to look up.  If, for
example, you want to look up the spelling for the word "ADMINISTRATE",
and you knew it started with "ADMIN", you would type in those letters
and press the ENTER key.  You will then be given a list of words that
start with the letters you provided.  If you find the word you are looking
for, you can select the word by typing the number to the left of the
word and pressing the ENTER key.  SPELL will automatically put the
selected word in place of the misspelled word.  

     If you are provided with more than one screen full of possible words
(more than 27 word), you can press the ENTER key to see the next
screen full of words. If you press the Esc key, SPELL will recheck the
word in your document, and then give you the message "Word not
found".  You can then select one of the four options.


     Once completed, SPELL will tell you the total number of words in
your document (SPELL does not count any group of characters that
contain a number as a word, e.g., "R2D2" will not be counted as a
word).  This is the number of total words, and not the number of unique
words.


REMARKS:  SSP's SPELL is only available to registered owners of
FreeWord.  
     
     If you want to stop the session with SPELL, press the Esc key
whenever you are given the DUPLICATE WORD screen, or the WORD
NOT FOUND screen.  You will be asked if you want to stop checking and
return the document to its original form.  If you want to stop, press "Y"
(for YES).  The document will be returned to how it was when you
started SPELL.  Select "N" (for NO) to return to having the spelling
checked.

     SSP's SPELL contains over 33,000 words.  The only limit to the
number of words you can add to your auxillary dictionary is the amount
of space you have on your disk.









				-40-
                          T Y P E W R I T E R



USAGE:  This option has two major uses.  The first use is to send
special non-printable characters to your printer.  These characters are
used to cause your printer to print differently.  The second use is as a
typewriter.  You can type a line of text, edit that line, and then send it
directly to the printer.  You might want select this option to print enve-
lopes or preprinted forms.  For example, you might have a dot matrix
printer that can produce near letter quality print if you send it a certain
set of characters by using the typewriter option.


DESCRIPTION:  Select this option by holding the ALT key down and
pressing "T".  You will first be asked if you want to send special print
codes to your printer.  Respond with a "Y" (for YES) if that is in fact
what you want to do, and a "N" (for NO) if you want to use FreeWord
and your printer and a typewriter.

     Special print codes.  Enter the special print code and press the
ENTER key to send the code to your printer.  Press Esc to return to the
main menu when you have finished.  You will need to check with your
printer manual to see the numeric values of the special codes since most
printers handle this feature a bit differently. 
 
     Typewriter.  This feature will allow you to type one line of text,
edit it, and then send it to your printer (much the same way as modern
memory typewriters).  You might find this a quick way of addressing an
envelope or filling out a form.  Press the ENTER key to actually send
the line to the printer.  Press the Esc key to return to the main menu. 


REMARKS:  There are two ways of sending special print codes to your
printer.  First, you can send the code (for example, you entered 27 - the
ASCII value for Escape) as a single ASCII character.  The second way, is
to send the code as a string of characters (send a character "2" and then
a character "7" for "27").  Some times you will want to send the special
code to your printer in one way and not the other.  To help you towards
this goal, FreeWord has two simple rules;  (1)  ANY STRING OF ONE OR
TWO CHARACTERS THAT IS ALL NUMERIC WILL BE SENT TO THE
PRINTER AS A SINGLE ASCII VALUE, (2)  ANY STRING OF
CHARACTERS THAT CONTAIN ANY NON-NUMERIC VALUE WILL SENT
TO THE PRINTER AS A STRING OF CHARACTERS.  

     The above rules present a problem only if you want to send a
numeric character(s) to your printer, but you want it to be treated as a
string.  On the Okidata printers, for example, you switch to the
correspondence quality mode by sending an escape character (ASCII value
27) and the character "1" (the command to send this code by using BASIC
is represented in the manual as - CHR$(27);"1").  FreeWord will send the

				-41-escape character out to the printer correctly, but would try to send the
one ("1") as an ASCII value rather than the character one ("1").  To work
around this, substitute the ASCII value (which is 49) for one ("1").  For
the above example you would enter a 27 (for the escape), press ENTER,
then enter a 49 (for the "1") and press ENTER - then press the Esc
(escape) key to return to the main menu.  The following is a list of the
ASCII values for numbers zero through nine.

           0 = 48;
           1 = 49;
           2 = 50;
           3 = 51;
           4 = 52;
           5 = 53;
           6 = 54;
           7 = 55;
           8 = 56;
           9 = 57;

     Remember, you do not need to worry about sending the ASCII values
unless you are trying to send a numeric value as a string.  Usually in the
documentation, this situation will be represented with quotes around the
string to be sent to the printer.






























				-42-

                        DISCLAIMER OF WARRANTY


     FreeWord and the documentation are distributed "AS IS" and without
warranties as to performance.  Any statements by the author do not
constitute warranties and shall not be relied on by the user in deciding
whether to contribute to the author.

     FreeWord is distributed without any express or implied warranties
whatsoever.  Because of the diversity of conditions and hardware under
which this program may be used, no warranty of fitness for a particular
purpose is offered.  The user is advised to test the program thoroughly
before relying on it.  Any liability of the author will be limited exclus-
ively to product replacement. 


     If you have any questions, or comments, please write to:


                      Stilwell Software Products
                         1336 East Krista Way
                           Tempe, AZ  85284





























				-43-
        
                            **** INDEX ****


Backspace . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  10
Block . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  18, 30
Change margins. . . . . . . . . . . . . . . . . . . . . . . . . . .  33
Color . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7, 20
Color monitor . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
Column headings . . . . . . . . . . . . . . . . . . . . . . . . . .  33
COMPAQ  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
Contribution  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Copy and Move . . . . . . . . . . . . . . . . . . . . . . . . . . .  30
Cursor movement . . . . . . . . . . . . . . . . . . . . . . . . . 9, 22
Delete  . . . . . . . . . . . . . . . . . . . . . . . . . .  10, 23, 31
Deleting a line . . . . . . . . . . . . . . . . . . . . . . . . . .  17
Deleting a New Page mark  . . . . . . . . . . . . . . . . . . . . .  19
DEMO1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
DEMO2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
DEMO3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  16
Directory . . . . . . . . . . . . . . . . . . . . . . . . . . .  16, 23
ENTER key . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
Esc key . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
Find  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  16
Find and Replace  . . . . . . . . . . . . . . . . . . . . . . .  17, 24
Free memory . . . . . . . . . . . . . . . . . . . . . . . . . . . .  26
General Editing . . . . . . . . . . . . . . . . . . . . . . . . . .  26
Help. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9, 28
Hyphenation . . . . . . . . . . . . . . . . . . . . . . . . . . . .  26
Insert/Replace modes  . . . . . . . . . . . . . . . . . . . . . . .  14
Inserting . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  26
Justification . . . . . . . . . . . . . . . . . . . . . . . . . . .  34
Lines per page. . . . . . . . . . . . . . . . . . . . . . . . . . .  33
Load  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12, 23
Load a file . . . . . . . . . . . . . . . . . . . . . . . . . . . .  29
Margins . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  33
Mark. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  30
Memory  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
Monochrome users  . . . . . . . . . . . . . . . . . . . . . . . . .  20
Moving around . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
New Page  . . . . . . . . . . . . . . . . . . . . . . . . . . .  18, 32
Options . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  33
Page Up and Page Down . . . . . . . . . . . . . . . . . . . . . . .  18
Print . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  15, 34
Quit  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  11
Redisplay . . . . . . . . . . . . . . . . . . . . . . . . . . .  14, 37
REFERENCE SECTION . . . . . . . . . . . . . . . . . . . . . . . . .  20
Replacing . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  26
Right justification . . . . . . . . . . . . . . . . . . . . . . . .  34
Save  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  11, 38
Spelling Checker  . . . . . . . . . . . . . . . . . . . . . . . . .  39
Tab . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
Typewriter  . . . . . . . . . . . . . . . . . . . . . . . . . .  19, 41
				User supported  . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Warranty. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  43

         **********************
         *       INVOICE      *
         **********************


Stilwell Software Products
1336 East Krista Way
Tempe, AZ  85284


DATE                     Invoice #89284
*********************************************************

                                                                       
                                             PRICE
FreeWord a word processor,
SSP's SPELL, a spelling checker,
and documentation                            $49.00   

FreeFile a database,
REBUILD, and documentation                                           
                                             $45.00             

FreeCalc an electronic
spreadsheet, The FreeCalc Auditor,
and documentation                                                      
                                             $47.50            

FreePack  a hard disk utility program
to help you track files on your hard
disk, also a menu program, plus others
                                             $39.00   
         

MATH SCHOOL an arithmetic
drill program for children                                       
                                             $15.00             

        


Arizona Sales Tax
   (Arizona residents Only)                                           
                                             ________



                                                                       
                                     TOTAL   $ ________

*********************************************************

You may keep this invoice for your records.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1084

     Volume in drive A has no label
     Directory of A:\

    READ     ME       1846   7-25-86  10:09p
    FW       EXE    135600   9-23-89  10:09p
    FW       HLP     15109   9-23-89   9:43p
    FW       DOC     92288   9-24-89   6:56p
    DEMO2              339  11-05-85   6:38p
    COLOR    EXE     18618   3-29-86   8:04p
    NO-COLOR FIL         7   6-02-85   9:57a
    FILE1084 TXT      1362   1-01-80  12:57a
    GO       BAT        38   1-01-80   1:13a
    GO       TXT       617   1-01-80   1:17a
           10 file(s)     265824 bytes
                           50176 bytes free
