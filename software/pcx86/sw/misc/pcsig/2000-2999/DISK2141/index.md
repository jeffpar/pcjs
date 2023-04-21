---
layout: page
title: "PC-SIG Diskette Library (Disk #2141)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2141/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2141"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRYPTO! & CRYPTO! MAKER"

    Are you a cryptogram junkie? CRYPTO! and CRYPTO MAKER give you the
    chance to solve and create challenging word puzzles. Test yourself and
    tease your friends with jumbled famous quotes.
    
    Choose from a library containing 200 different puzzles. Ponder over
    the serious and funny quotations provided by the creator, Tom Gough, as
    you rack your brain trying to discover the next letter in the
    quote. Don't cheat! The program will give you hints, but try to
    unearth the answers for yourself. If you are stumped you can "cheat" by
    revealing a letter or use the hint key to tell you whether the letter is
    a vowel or consonant. The name of the speaker of the quotation appears
    when the puzzle is solved.
    
    You can also create your own cryptograms to perplex your friends. Type
    in your favorite quote, change the letter sequence, and you're ready to
    play. Becoming familiar with playing CRYPTO! will help you in making
    your puzzles.
    
    Function keys toggle colors and all puzzles can be printed. Easy-to-use
    instructions and menus give fast access to the game. A great game for
    all adults who enjoy word puzzles.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRYPTO.DOC

{% raw %}
```

CRYPTO!
Version 3.2
Copyright 1989, 1990  Tom Gough


CONTENTS
--------
CRYPTO! contains 200 enciphered quotations for you to solve. Each quotation
has been jumbled by substituting its letters with a different set of letters.
Each quotation uses a different code. In rare cases, words that are
capitalized are used.


RUNNING THE PROGRAM
-------------------
To run the program, type CRYPTO FILENAME, where FILENAME is one of
the eight .DAT files supplied on this disk or one of the .DAT files
you have created with CRYPTO! MAKER. The instructions for using CRYPTO! MAKER
follow the instructions for CRYPTO!.

Each .DAT file on this disk contains 25 puzzles.
The files are named as follows:

    1. DAT
    2. DAT
    3. DAT
    4. DAT
    5. DAT
    6. DAT
    7. DAT
    8. DAT

As an example, if you would like to solve the puzzles contained in the
file 1.DAT, just type CRYPTO 1 at the DOS prompt.

Do not include the file extension .DAT or you will get an error message.

If your video hardware supports it, the puzzles will be displayed in the
40 column mode. Otherwise, the 80 column mode will be used.

Next the title screen will appear. Press the SPACEBAR to begin solving the
puzzles.

Press the F1 key at any time for a list of commands.


SOLVING THE PUZZLES
-------------------
The first prompt that you will see requests a letter to CHANGE.
Press the key of the letter in the cipher for which you wish to make a
substitution. The CAPS LOCK key may be either on or off. Notice that the
letter you have selected has now been highlighted throughout the puzzle.

After you have selected a cipher letter to CHANGE, the second prompt appears
and requests a letter to change TO. Press the key of the letter that you wish
to substitute for the cipher letter. The substituted letter will appear
directly above each occurrence of the cipher letter and will be highlighted.

Example: If you think that the letter X in the cipher represents the
         letter E in the solution, press X at the CHANGE prompt and
         then press E at the TO prompt.

If you accidentally press the wrong key at the CHANGE prompt or simply change
your mind and wish to select a different letter, just press the ENTER key and
make a new selection. Hint: this feature is also useful if you would just like
to highlight all of the occurrences of a particular letter in the cipher.
Also, previously highlighted letters can be cleared by pressing ENTER.

By pressing the DELETE key you can erase all of the substitutions of the
puzzle you are presently working on; or you can erase just one of the
substitutions by pressing the SPACEBAR after you have selected a cipher
letter to CHANGE. Keep the NUM LOCK key turned off if you are using the
DELETE key on the numeric keypad.

The program protects you from substituting the same letter more than once.
However, you do not have to erase a substitution before you reassign it.
The previous substitution will be erased for you. Also, you will not be
allowed to CHANGE a cipher letter TO itself since all letters have been
jumbled.

If you get stuck on a puzzle and need a hint, select a letter to CHANGE and
then press SHIFT-F1. You will be told whether the solution letter is a vowel
or a consonant. In this program, vowels are the letters A,E,I,O,and U.

Also, to see the solution to any particular letter, select a cipher letter
to CHANGE and then press Alt-F1. The solution to that letter will be inserted
throughout the puzzle.

When you have solved a puzzle, the name of the speaker of the quotation will
appear below the puzzle.


TURNING PAGES
-------------
The puzzles do not have to be solved in any particular order and you are not
required to complete a puzzle before trying another. Use the PgUp and PgDn
keys to turn the pages. None of your previous work will be lost.

Keep the NUM LOCK key turned off if you are using the PgUp and PgDn keys on
the numeric keypad.


COLOR SELECTION
---------------
The initial colors of the solution and cipher letters are low intensity
white on a black background. The border is colored with black letters on
a white background.

The color of the solution letters may be changed by pressing the F7 key
and the color of the cipher letters may be changed by pressing the F8 key.
Pressing the F6 key will change the background color. The F5 key changes
the color of the characters on the border, and Shift-F5 changes the color
of the border background.

By repeatedly pressing these keys you can select the colors that are the
most pleasing to you.

For those with monochrome monitors the initial colors will probably be the
best for you. If you experiment with the color selections and then wish to
return to the initial colors, just press the F9 key.


MAKING HARDCOPIES
-----------------
You can print hardcopies of the puzzles by using the following keys:

  Ctrl-F2 - prints the solution in normal size letters.
 Shift-F2 - prints the solution in double wide characters.

  Ctrl-F3 - prints the cipher in normal size letters.
 Shift-F3 - prints the cipher in double wide characters.

  Ctrl-F4 - prints both the solution and the cipher in normal size letters.
 Shift-F4 - prints both the solution and the cipher in double wide characters.

The hardcopy features have been tested on an Epson printer only, but they
should work with many other types as well.


ENDING THE SESSION
------------------
Pressing the ESCAPE key will terminate a session and your work will be saved
automatically.

Your progress on the puzzles, your color configuration, and the page you
were last working on will be automatically reloaded at the beginning
of the next session.


-----------------------------------------------------------------------------
-----------------------------------------------------------------------------


CRYPTO! MAKER
Version 3.2
Copyright 1989, 1990  Tom Gough


CONTENTS
--------
CRYPTO! MAKER enables you to create your own collections of cryptogram
puzzles for others to solve. The puzzles you create can be solved using
CRYPTO! Version 3.2 or you can make hardcopies to enable those without
a computer to solve your puzzles.


RUNNING THE PROGRAM
-------------------
To run the program, type CRYPMAKE FILENAME at the DOS prompt. FILENAME
can be any legitimate DOS filename, but do not include a file extension
or you will receive an error message. The file extension .DAT will be
appended to your FILENAME automatically.

For example, to create a file named YOURFILE.DAT, just type
CRYPMAKE YOURFILE at the DOS prompt.


CREATING PUZZLES
----------------
You may create as many files as you wish, with each file containing up to
25 puzzles. Files you have created will be saved automatically by pressing
the ESCAPE key. These files may be edited at any time.

It is advised that you become familiar with using CRYPTO! to solve a few
puzzles before using CRYPTO! MAKER, since many of the commands are the same.

Upon leaving the title screen, you are ready to begin entering puzzles.
The first page you will see is page number one. Press F1 to see a list
of editing commands. When you have entered the quotation, press F10 and
a cipher will be created. You may press F10 as many times as you wish until
you are satisfied with the cipher.

If you have used CRYPTO! you will have noticed that after a puzzle has been
solved, the name of the speaker appears below the quotation. If you would
like to use this feature, just precede the speaker's name with two dashes.
For example:  --MARK TWAIN

Be sure that the speaker's name is entered on a line by itself, for any
line that contains two dashes in succession will be ignored when the cipher
is created.

That's really all there is to it. Just type in a quotation or whatever you
wish, press F10, then flip the page to enter a new puzzle. When you have
entered from 1 to 25 puzzles, press ESCAPE and your puzzles are ready to be
solved using CRYPTO!.

The same hardcopy and color selection features of CRYPTO! are included
in CRYPTO! MAKER. However, the color configuration will be saved to the
file CRYPMAKE.CFG. This file will be created the first time you run
CRYPTO! MAKER.


REGISTRATION
------------
Registered users of CRYPTO! and CRYPTO! MAKER will receive directly from the
author a disk containing the latest version of CRYPTO-HELPER.

CRYPTO-HELPER enables you to enter and solve cryptogram puzzles that
frequently appear in newspapers and pencil puzzle magazines. It is an
integrated program which combines the same full screen editor found in
CRYPTO! MAKER and the solving capabilities of CRYPTO! into a single program.
Just type in the cipher, press a key and begin solving the puzzle.
The puzzle you enter can be edited at any time with the press of a key.
CRYPTO-HELPER also includes the same color selection and save features
of CRYPTO! and CRYPTO! MAKER.

As a registered user, you will be included on the author's mailing list
and will be notified by mail of future updates as they become available.
If CRYPTO! and CRYPTO! MAKER have already been updated by the time your
request for registration has been received, the updated version will be
included along with the latest version of CRYPTO-HELPER.

If you would like to register, please send $6 to the author's address below.

Every effort will be made to mail your diskette to you on the
same day your request is received.

Please specify either 5.25" 360K or 3.5" 720K diskette.
   
    Tom Gough
    P.O. Box 1372
    817 Lea Street
    Clovis, NM 88101

    (505)762-7993

Your comments and suggestions for improvement are always welcome.


DISTRIBUTION
------------
CRYPTO! and CRYPTO! MAKER may be freely distributed to anyone you wish
as long as the original files are left intact.

```
{% endraw %}

## FILE2141.TXT

{% raw %}
```
Disk No: 2141                                                           
Disk Title: Crypto! & Crypto! Maker                                     
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: CRYPTO!                                                  
Author Version: 3.2                                                     
Author Registration: $6.00                                              
Special Requirements: None.                                             
                                                                        
Are you a cryptogram junkie?  CRYPTO! and CRYPTO MAKER give you the     
chance to solve and create challenging word puzzles.  Test yourself     
and tease your friends with jumbled famous quotes.                      
                                                                        
Choose from a library containing 200 different puzzles.  Ponder over    
the serious and funny quotations provided by the creator, Tom Gough,    
as you rack your brain trying to discover the next letter in the        
quote.  Don't cheat!  The program will give you hints, but try to       
unearth the answers for yourself.                                       
                                                                        
You can also create your own cryptograms to perplex your friends.       
Type in your favorite quote, change the letter sequence, and you're     
ready to play.  Becoming familiar with playing CRYPTO! will help you    
in making your puzzles.                                                 
                                                                        
Function keys toggle colors, "cheat" by revealing a letter, or give you 
an answer to the quotation.  All puzzles can be printed.  Easy-to-use   
instructions and menus give fast access to the game.  A great game for  
all adults who enjoy word puzzles.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2141

     Volume in drive A has no label
     Directory of A:\

    1        DAT     16230   5-29-90   3:22p
    2        DAT     16230   5-29-90   3:03p
    3        DAT     16230   5-29-90   3:06p
    4        DAT     16230   5-29-90   3:07p
    5        DAT     16230   5-29-90   3:08p
    6        DAT     16230   5-29-90   3:11p
    7        DAT     16230   5-29-90   3:14p
    8        DAT     16230   5-29-90   3:15p
    CRYPMAKE EXE     54986   5-29-90   1:49p
    CRYPTO   DOC      9959   5-25-90   3:56p
    CRYPTO   EXE     54142   5-29-90   2:14p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       730   1-01-80   8:54a
    FILE2141 TXT      2517   7-13-90  11:19p
           14 file(s)     252212 bytes
                           66560 bytes free
