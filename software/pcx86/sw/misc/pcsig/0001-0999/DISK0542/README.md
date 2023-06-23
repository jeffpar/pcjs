---
layout: page
title: "PC-SIG Diskette Library (Disk #542)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0542/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0542"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "POLYGLOT AND LETTERFALL  (EDUCATIONAL)"

    POLYGLOT is a program that matches between two sets of data such as
    words and sentences, terms and definitions, questions and anwers.  It
    takes the user's answers and displays the percentage of correct answers
    up to and including the most recent answer.  It is an incredible
    educational tool for drill type studying.  LETTERFALL is a tutorial
    game to teach you how to type using the touch method.  It is set-up in
    a game enviroment and is very easy to use.  There are seventeen
    different parts to this program, but the author has supplied only one
    part for you to look at.  We don't normally include demos such as this
    but the program is outstanding.
    
    System Requirements:  128K, two disk drives and a monochrome display
    
    How to Start:  Type POLYGLOT or LETTERFA and press <ENTER> to start
    these programs.
    
    Suggested Registration:  $15.00
    
    File Descriptions:
    
    -------- ---  Polyglot
    FILLIN   DIC  A Polyglot dictionary file containing fill-in-the-blanks.
    FACTS    DIC  A Polyglot dictionary file concerning Polyglot
    INVST01  DIC  A Polyglot dictionary file for investment terms.
    POLY001  DIC  A Polyglot dictionary for vocabulary set one.
    NETWORK  DIC  A Polyglot dictionary for computer networking
    POLY003  DIC  A Polyglot dictionary for vocabulary set three.
    POLY002  DIC  A Polyglot dictionary for vocabulary set two.
    LETTERFA EXE  Executable program
    -------- ---  Letterfall (V1.1)
    POLYGLOT EXE  Main program
    POLYGLOT DIR  Definiation file for Polyglot
    POLY005  DIC  A Polyglot dictionary for vocabulary set five.
    POLY004  DIC  A Polyglot dictionary for vocabulary set four.
    SCORE    DTA  Data file to retain scores
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES542.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  542  Polyglot & Letterfall  (EDUCATIONAL)                  v1 DS2
---------------------------------------------------------------------------
Polyglot is a program that matches between two sets of data such as words and
sentences, terms and definitions, questions and anwers.  It takes the user's
answers and displays the percentage of correct answers up to and including the
most recent answer.  It is an incredible educational tool for drill type
studying.
 
LETTERFALL is a tutorial game to teach you how to type using the touch
method.  It is set-up in a game enviroment and is very easy to use.  There
are seventeen different parts to this program, but the author has supplied
only one part for you to look at.  We don't normally include demos such as this
but the program is outstanding.
 
------------  Polyglot
FACTS    DIC  A Polyglot dictionary file concerning Polyglot
FILLIN   DIC  A Polyglot dictionary file containing fill-in-the-blanks.
INVST01  DIC  A Polyglot dictionary file for investment terms.
NETWORK  DIC  A Polyglot dictionary for computer networking
POLY001  DIC  A Polyglot dictionary for vocabulary set one.
POLY002  DIC  A Polyglot dictionary for vocabulary set two.
POLY003  DIC  A Polyglot dictionary for vocabulary set three.
POLY004  DIC  A Polyglot dictionary for vocabulary set four.
POLY005  DIC  A Polyglot dictionary for vocabulary set five.
POLYGLOT DIR  Definiation file for Polyglot
POLYGLOT EXE  Main program
------------  Letterfall (V1.1)
LETTERFA EXE  Executable program
SCORE    DTA  Data file to retain scores
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES542.TXT

{% raw %}
```
Program name: Polyglot
Author name:  Harrison P. Lantz
Address:      11555 Southfork Avenue, Apt 2071
              Baton Rouge, La 2071
 
Suggested Donation: 15$, check or money order.
Program Description:
 
Polyglot is a usefull but simple program.  It simply matches two sets of data
taken from a data file against each other and scores the answer for the user.
The overall affect is much like one of those brain-quiz games seen in pin-ball
halls.
 
The matching capability of Polyglot is used to create several different game
senarios.  In all senarios, the user has the choice of which dirrection he
wishes to match in.  Hence a questions and answers senario can iether have the
user match the questions against the answers, or the answers against the
questions.  Besides questions and answers some other senarios are: words and
definitions, fillin-words and sentences with missing word, terms and
definitions.
 
Polyglot uses it's directory file, "Polyglot.dir" to supply the user of the
program with a menu of the possible senarios and also to supply the prompt for
the direction of play, questions to answers, or answers to questions.  Once
the two selections have been made, Polyglot then displays the question or the
answer along with five alternatives for the user to match against.  If the the
correct one is selected, Polyglot moves on the the next word or sentence.  If
the wrong one is selected, Polyglot displays the correct answer for a few
seconds before moving on.  Incorrect answers are saved and asked again.  The
percentage of correct answers to date is displayed in the upper write-hand
corner.  Once all the questions have been answered, or the program is exited,
Polyglot rewrites the source file, hence the order of play is random.  The
only drawback I found to polyglot is the screen, the blues could have been
made a different, easier to read color, perhaps magenta.  I am not certain,
but I don't believe any extra memory or features are required, not even
graphics.  The only limitation would be the maximum file size for a diskette.
 
 
Program name:       LETTERFALL
Author name:        Frank Harris
Address:            P.O. Box 69457, Station K
                    Vancouver, B.C.  V5K 4W6
                    Canada
 
Suggested Donation: A $25 registration fee will get you the current version
                    and you will be kept informed of program updates and
                    future programs.
Program Description:
 
LETTERFALL is a game to teach, or improve, your touch typing skills.  It has
16 levels of difficulty, each level consisting of a new group of keys plus
the keys from the previous levels.  As an example, this sampler contains
level 1, the "home" row - asdfghjkl; - of keys.
 
LETTERFALL works in "letter" and "word" mode, letters first and then words.
It scores you in both modes, allows you to practice on areas where you have
problems, and tells you what your typing speed is.
 
Note that this is only a sampler to see if you want to register and get the
full program.
 
No system requirements are given.  It should run on any minimally configured
IBM PC or compatible with 1 diskette drive.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0542

     Volume in drive A has no label
     Directory of A:\

    FACTS    DIC       384   5-12-86   1:14p
    FILLIN   DIC      1024   5-12-86   1:17p
    INVST01  DIC      1280   5-13-86  10:04a
    NETWORK  DIC      1492   1-01-84  12:18a
    POLY001  DIC      2560   5-30-86   2:24a
    POLY002  DIC      2560   1-01-84  12:58a
    POLY003  DIC      2560   1-01-84   2:07a
    POLY004  DIC      2432   1-01-84  12:06a
    POLY005  DIC      2432   5-12-86   1:19p
    POLYGLOT DIR       523   1-01-84  12:16a
    POLYGLOT EXE     34304   1-01-80  12:04a
    -------- ---        22   7-10-86  10:29a
    LETTERFA EXE     54142  10-05-85  10:09a
    SCORE    DTA       256   5-30-86  12:56a
    -------- --         26   7-10-86  10:30a
    GO       BAT       638   7-10-86  10:36a
    NOTES542 TXT      3218   7-10-86  10:33a
    FILES542 TXT      1780   7-10-86  10:33a
           18 file(s)     111633 bytes
                           45056 bytes free
