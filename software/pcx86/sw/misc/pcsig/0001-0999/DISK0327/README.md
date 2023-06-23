---
layout: page
title: "PC-SIG Diskette Library (Disk #327)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0327/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0327"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TRIVIA 1 OF 2 (ALSO 328)"

    A captivating trivia game which challenges you to put your knowledge of
    various categories of facts and fancies on the line.
    
    The subjects range from Science and Nature to Entertainment, Sports and
    Recreation to that well-known classification - Mixed Bag. The questions
    are hard enough to keep your interest but do not require a doctorate to
    answer.  Music and sound effects add to the interest and the fun.
    
    For your next party, try matching everyone's knowledge against this one.
    File Descriptions:
    
    The First Disk Contains:
    TRIVMACH EXE  Trivia game program.
    TRIVMACH DOC  Trivia game documentation.
    The Second Disk Contains:
    CATEGORY C    Science and Nature trivia questions
    CATEGORY A    Entertainment trivia questions
    TM       FNT  Support file for trivia game
    CATEGORY D    Mixed Bag trivia questions
    CATEGORY B    Sports and Recreation trivia questions
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES327.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 327  Trivia 1                                          v1
-----------------------------------------------------------------------
 
This disk contains a very good trivia game program  that is to be used
with the catagory files on disk # 328.
 
TRIVMACH EXE  Trivia game program
TRIVMACH DOC  Trivia game documentation
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## TRIVMACH.DOC

{% raw %}
```
The Trivia Machine -- by Bob Perez
Copyright 1984 Justus Software

The Trivia Machine is a trivia game written in C for the IBM and compatibles.
The program does not require a color graphics adapter, but will display color
graphics if a color adapter is present. The program file TrivMach.EXE actually
contains 2 different versions of the game, one designed with the monochrome
display in mind utilizing character graphics, and another version which fully
supports the IBM color display adapter using color and limited animation.

The program requires one other support file to run, tm.fnt, and four question
files (Category.A, Category.B, Category.C, & Category.D). The first time you
run the program it will come up with the configuration menu. At this time,
you will be asked if you want sound on/off, which keys you wish to use for
the four answer keys, how you want your drives/disks configured (program files
on A:, questions on B:, both on C:, etc.) and (if you have both a color and
monochrome card) whether you want to play in color or B&W. Once you've
selected your options, the program will create a new file, tm.dat that will
thereafter automatically load in when you next run the game, bypassing the
configuration menu. At the title page, you will have the option to play
(hit the spacebar) or to reconfigure the game (hit 'R'). Those of you with
both color and monochrome monitors installed can switch back and forth from
color to monochrome and vice-versa.

Once you have elected to begin playing, you will be given the list of
available question categories. The program is modular in design and will
accept any properly formatted question files and display its subject matter
on the screen for selection. Other question files can be easily created with
a utility I will make available if there's enough interest. Once you've
selected a question category, you will be asked what level you wish to play
at. Each round consists of 20 questions presented in multiple choice format,
with only one of the four answers correct. After presenting the question to
you, a timer starts counting down from 99 to 0. The lower levels of play
slow down the timer somewhat and also affect your score. A penalty is
deducted for playing at the novice level, so that you can never do better
than about an 80 or so at that level. At the intermediate level, you can do
better, but you can never achieve a perfect score. Only at the Expert level
can you achieve the perfect score of 99. The score represents an average of
the times remaining on the timer after you have answered each question. The
high score is saved to a disk file called hiscore.dat and will be displayed
most of the game.

One final note: some version of this game will be installed on various BBS's
in a compressed (squeezed) format. Also, on some boards (Compuserve, e.g.),
the filenames will be shortened. If any of the filenames contain a 'q' in
the suffix, they have been "squeezed", and must be "unsqueezed" utilizing
the popular public domain program, USQ.COM. None of the files will operate
as expected with the 'q' suffix.  Also, make sure that the question files are
named "Category.A", etc...they won't work otherwise.
Good Luck!   --   Bob Perez

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0327

     Volume in drive A has no label
     Directory of A:\

    FILES327 TXT       512   5-23-85   1:51p
    TRIVMACH DOC      3272   3-17-85  10:59a
    TRIVMACH EXE    114560   3-17-85  10:59a
            3 file(s)     118344 bytes
                           41472 bytes free
