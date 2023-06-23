---
layout: page
title: "PC-SIG Diskette Library (Disk #705)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0705/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0705"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "KIDGAMES"

    KIDGAMES is a blast! This collection of games is specifically geared
    to KIDS, ages 2-10 years, and has a straight forward commitment to make
    learning fun. It also has excellent graphics and is a great program for
    introducing your kids to your home computer.
    
    For education, HANGMAN in one of the best on this disk. It teaches
    basic spelling and allows you to expand the dictionary as the child's
    vocabulary increases. For pure fun, MOSAIC teaches pattern matching
    and encourages pattern building. Also on this disk are:
    
    ~ ALPHABET, which teaches the alphabet and alphabetic sequence
    
    ~ ANIMALS, which teaches simple preschool math
    
    ~ CLOCKGAME, which teaches how to read an analog clock
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES705.TXT

{% raw %}
```
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
DISK NO  705  KIDGAMES                                               v1
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
This Disk contains a collection of games specifically geared toward the ages
of 2-10 years of age. Your children will not only have fun with these games but
will also learn from them.
 
ALPHABET __2 Part of ALPHABET.COM
ALPHABET __1 Part of ALPHABET.COM
ALPHABET COM Main ALPHABET program
ANIMALS  __2 Part of ANIMALS.COM
ANIMALS  __1 Part of ANIMALS.COM
ANIMALS  COM Main ANIMALS program
ANIMALS  TAB Part of ANIMALS.COM
CLOCKGAM COM Main CLOCKGAM program
CLOCKGAM PIC Part of CLOCKGAM program
DICTNARY     Auxiliary dictionary for hangman
GO       BAT Types out kidgames.doc
HANGMAN  COM Teaches letter sounds and spelling
HANGMAN  DIC Dictonary for hangman
HANGMAN  DOC Documentation for hangman
KIDGAMES DOC Brief discription about the games on this disk
MAKEICON COM Icon maker program
MAKELIST COM Program which allows you to add word to the dictionary of hangman
MOSAIC   COM Mosaic main program
MOSAIC   PIC Part of MOSAIC program
MOSAIC   TAB Part of MOSAIC program
SPRITES      Pictures related to MOSAIC.COM
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## HANGMAN.DOC

{% raw %}
```


                     (* ****************************** *)
                     (*                                *)
                     (*          HANGMAN.COM           *)
                     (*                                *)
                     (*   (c) Donald L. Pavia          *)
                     (*       1488 Lahti Drive         *)
                     (*       Bellingham, WA  98226    *)
                     (*                                *)
                     (*           April 1986           *)
                     (*                                *)
                     (* ****************************** *)

           This disk contains six files related to this game.

           The game itself can be started by typing 'HANGMAN'. The game
       requires that there also be a dictionary named 'HANGMAN.DIC' on
       the same drive.

           You may create your own dictionary by using 'MAKELIST.COM'.
       This program will allow you to create a new dictionary, erasing the
       old one, or to add words to the existing dictionary without erasing
       it.

           The Hangman program will use any dictionary named 'HANGMAN.DIC'.
       Since you may wish to save the original game dictionary, I have placed
       a safe copy of it in the subdirectory 'DICTNARY'. You may recopy this
       from the subdirectory to the root directory at any time using the
       command: A>copy A:\DICTNARY\HANGMAN.DIC A:\  .

           The subdirectory 'SPRITES' contains the clue sprites used by the
       program. I have placed them in a subdirectory for two reasons. First
       there are over 90 of them and a single directory (like the main one)
       can only hold 112 files (max). Second, they are safer there. They
       also do not clutter up the root directory. Sprites may also be placed
       in the root directory. The hangman program looks first in the subdir-
       ectory, and if the sprite is not found it looks in the root (main)
       directory next. The program will operate in the absence of any sprites.
       They are optional.

           The program 'MAKEICON.COM' allows you to design your own clue
       sprites to go along with any words you add to the dictionary. Simply
       save them on the root directory and name them with the extension .SPR.
       If the word is longer than 8 letters, chop it off at eight. For in-
       stance, the sprite for 'woodpecker' would be named 'WOODPECK.SPR'.
       You may also use the more fully featured sprite designer form my
       sprites and animation package : DESIGNER.COM. This is on PCSIG #511.

                                   HAVE FUN !!!    Donald L. Pavia


```
{% endraw %}

## KIDGAMES.DOC

{% raw %}
```
                           << KIDGAMES >>

     (c) 1986  Donald L. Pavia  1488 Lahti Dr., Bellingham, WA.  98226

         These are games I wrote for my preschool children Morgan, Kevin,
     and Bronwyn. The following games are on this disk:
            HANGMAN     teaches letter sounds and spelling
                          (read HANGMAN.DOC for a full explanation)
            ALPHABET    teaches the alphabet and alphabetic sequence
            ANIMALS     teaches simple preschool math
            CLOCKGAME   teaches how to read an analog clock
            MOSAIC      teaches pattern matching
     Each game is started by typing the name shown in CAPITALS above.
     If you enjoy the games on this disk a contribution of $10 would
     be greatly appreciated and encourage me to write more PD games.
     Turbo Pascal source code is available from the author for $15 US.

     THE GAMES ON THIS DISK ARE PLACED IN THE PUBLIC DOMAIN. THEY MAY NOT
     BE SOLD FOR PROFIT NOR USED IN COMMERCIAL PROGRAMS WITHOUT EXPRESS
     PERMISSION OF THE AUTHOR. LOCAL USER GROUPS AND PUBLIC BULLETIN
     BOARDS MAY DISTRIBUTE THIS DISK PROVIDED FEES DO NOT EXCEED $10.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0705

     Volume in drive A has no label
     Directory of A:\

    ALPHABET COM     30249   6-10-86   3:25a
    ALPHABET __1     16384   5-18-86  11:39a
    ALPHABET __2      3072   6-09-86   5:06p
    ANIMALS  COM     25435   6-07-86   9:25p
    ANIMALS  TAB      3072   6-07-86   3:16p
    ANIMALS  __1     16384   6-01-86   3:14p
    ANIMALS  __2     16384   6-07-86   9:15p
    CLOCKGAM COM     15957   4-27-86  10:37a
    CLOCKGAM PIC     16384   4-26-86   6:23p
    FILES705 TXT      1729   6-05-87   9:30a
    GO       BAT        19   1-05-87   1:34p
    HANGMAN  COM     26042   4-23-86  10:26p
    HANGMAN  DIC      1104   4-13-86  11:05p
    HANGMAN  DOC      2743   1-05-87  12:32p
    KIDGAMES DOC      1189   1-06-87  12:22a
    MAKEICON COM     22015   4-13-86   3:30p
    MAKELIST COM     14139   4-13-86  10:53p
    MOSAIC   COM     23315  12-28-86   9:12p
    MOSAIC   PIC     16384   5-22-86   7:54p
    MOSAIC   TAB      3072   5-22-86   5:24p
           20 file(s)     255072 bytes
                           61440 bytes free
