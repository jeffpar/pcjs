---
layout: page
title: "PC-SIG Diskette Library (Disk #858)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0858/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0858"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ARE YOU READY FOR CALCULUS, TUTOR"

    A well-written pre-calculus tutor program designed to help students
    review the basics of algebra and trigonometry.
    
    These programs give quizzes on those sections of algebra and
    trigonometry essential to calculus.  There are two programs, one to
    prepare you for Calculus I, and another for Business Calculus.  The
    differences are that the quizzes are easier in the Business Calculus
    section and there are fewer topics to review.
    
    You'll have several choices to choose from.  The instructions are
    written so you can start using the program right away.  The quizzes are
    multiple-choice and the different answers are well chosen.  The program
    is conveniently presented to the user with different window layouts.
    
    If you don't know how to answer a particular question, ask for help.
    You'll get a help screen which covers the topic of your quiz.
    
    If you want to take calculus next quarter or semester, this program is
    for you.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES858.TXT

{% raw %}
```
Disk No  858
Program Title: ARE YOU READY FOR CALCULUS version 2.01
PC-SIG version 1
 
    This well-written pre-calculus tutor program helps students review the
basics of algebra and trigonometry. Specifically, this program gives
quizzes on all sections of algebra and trigonometry which are essential to
calculus. In fact, there are two programs on this disk, one to prepare you
for Calculus I, and another for Business Calculus. The differences are that
the quizzes are easier in the Business Calculus section and there are less
topics to review. Once the program has been loaded, you'll have several
choices to pick by hitting the proper letter. The instructions are well
written so you can start using the program right away. The quizzes are
multiple-choice type and the different answers are well chosen. The program
is very nice with different window layouts. If you don't know how to answer
a particular question, you just ask for help. You get a help screen which
covers the topic of your quizz and you can go through the topic as many
times as you like. If you want to take calculus next quarter or semester,
it's probably time for you to ask yourself if you're ready for calculus by
loading this program and finding out your score at the end of each review.
 
Usage: Calculus Tutor
 
System Requirements: 128K memory and one disk drive.
 
How to Start: Type: README (press enter).
 
File Descriptions:
 
README   DOC  Documentation file: how to start the program.
README   EXE  Used to read README.DOC directly.
RURCI    EXE  The "R U Ready for Calculus I ?" main program.
RURBC    EXE  The "R U Ready for Business Calculus ?" main program.
RUNME    BAT  Used to run either RURCI or RURBC (optional).
GETKEY   COM  Used by RUNME.BAT to accept input to a batch file.
INSTRCI  DOC  Instructions for RURCI (can be read from RURCI).
INSTRBC  DOC  Instructions for RURBC (can be read from RURBC).
CREDITS  DOC  Acknowledgments of help from various people.
HISTORY  DOC  Version revision history.
ALG001   CDD  Elementary Algebra review questions (enciphered).
ALG001   HLP  Elementary Algebra Help file.
ALG001   LST  Advice to someone doing poorly in ALG001 review.
ALG002   CDD  Factoring review questions (enciphered).
ALG002   HLP  Factoring Help file.
ALG002   LST  Advice to someone doing poorly in ALG002 review.
ALG003   CDD  Fraction and exponential review questions (enciphered).
ALG003   HLP  Fraction and exponential Help file.
ALG003   LST  Advice to someone doing poorly in ALG003 review.
ALG004   CDD  Exponents and radicals review questions (enciphered).
ALG004   HLP  Exponents and radicals Help file.
ALG004   LST  Advice to someone doing poorly in ALG004 review.
ALG005   CDD  Functions and Equations review questions (enciphered).
ALG005   HLP  Functions and Equations Help file.
ALG005   LST  Advice to someone doing poorly in ALG005 review.
ALG006   CDD  Inequalities review questions (enciphered).
ALG006   HLP  Inequalities Help file.
ALG006   LST  Advice to someone doing poorly in ALG006 review.
CURVE001 CDD  Curves review questions (enciphered).
CURVE001 HLP  Curves Help file.
CURVE001 LST  Advice to someone doing poorly in CURVE001 review.
FORM001  CDD  Functions from Formula review questions (enciphered).
FORM001  HLP  Functions from Formula Help file.
FORM001  LST  Advice to someone doing poorly in FORM001 review.
GREEK001 CDD  The Greek symbol review questions (enciphered).
GREEK001 HLP  The Greek symbol Help file.
GREEK001 LST  Advice to someone doing poorly in GREEK001 review.
TRIG001  CDD  Elementary Trig review questions (enciphered).
TRIG001  HLP  The Elementary Trig Help file.
TRIG001  LST  Advice to someone doing poorly in TRIG001 review.
TRIG002  CDD  Trig Identities review questions (enciphered).
TRIG002  HLP  The Trig Identities Help file.
TRIG002  LST  Advice to someone doing poorly in TRIG002 review.
Q001     CDD  Quotations (enciphered).
Q002     CDD  Quotations (enciphered).
Q003     CDD  Quotations (enciphered).
Q004     CDD  Quotations (enciphered).
Q005     CDD  Quotations (enciphered).
Q006     CDD  Quotations (enciphered).
Q007     CDD  Quotations (enciphered).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #858 ARE YOU READY FOR CALCULUS  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view the Documentation, Type: README (press enter)                   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
Revision history of  RUREADY FOR CALCULUS

  Version  1.OO - Released May 28, 1987.

  Version  1.O1 - response to accepting "Y/N" changed
                - when re-reading file - return to same place.
                - various changes to *.doc, *.hlp (printing errors)

  Version  1.O2 - corrected typos in inequality help files
                - expanded Greek help file

  Version  1.O3 - optimized buffer sizes
                - added readme.exe and runme.bat, via getkey.com
                - minor corrections to Form001 and Alg005

  Version  1.O4 - corrected 2 wrong answers in ALG004
                - changed 0 to O throughout
                - now checks for NUMLCK key
                - reformatted help files for printer

  Version  1.O5 - added to instruction file

  Version  2.OO - no snow option, for flickering CGA cards, added
                - maximum of $8 charge permitted
                - released to PCSIG
                - 2000 copies distributed free to all Fall, 1987,
                  calculus students at the University of Arizona. 

  Version  2.O1 - corrected error in ALG005 help file
                - made compatible with Hercules cards 
                - released to BIGFOOTII

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0858

     Volume in drive A has no label
     Directory of A:\

    ALG001   CDD     11940   9-01-87  12:00a
    ALG001   HLP      2348   9-01-87  12:00a
    ALG001   LST       337   9-01-87  12:00a
    ALG002   CDD      8241   9-01-87  12:00a
    ALG002   HLP      1139   9-01-87  12:00a
    ALG002   LST       269   9-01-87  12:00a
    ALG003   CDD     13114   9-01-87  12:00a
    ALG003   HLP      3296   9-01-87  12:00a
    ALG003   LST       270   9-01-87  12:00a
    ALG004   CDD     12637   9-01-87  12:00a
    ALG004   HLP      2914   9-01-87  12:00a
    ALG004   LST       338   9-01-87  12:00a
    ALG005   CDD      9720   9-01-87  12:00a
    ALG005   HLP      1404   9-01-87  12:00a
    ALG005   LST       507   9-01-87  12:00a
    ALG006   CDD      7367   9-01-87  12:00a
    ALG006   HLP      1242   9-01-87  12:00a
    ALG006   LST       273   9-01-87  12:00a
    CREDITS  DOC      1470   9-01-87  12:00a
    CURVE001 CDD      8917   9-01-87  12:00a
    CURVE001 HLP      2588   9-01-87  12:00a
    CURVE001 LST       409   9-01-87  12:00a
    FILES858 TXT      4324  10-27-87   9:05a
    FORM001  CDD     11487   9-01-87  12:00a
    FORM001  HLP      2284   9-01-87  12:00a
    FORM001  LST       414   9-01-87  12:00a
    GETKEY   COM        39   9-01-87  12:00a
    GO       BAT        38  10-19-87   4:28p
    GO       TXT       386  10-27-87   9:13a
    GREEK001 CDD      5613   9-01-87  12:00a
    GREEK001 HLP      1061   9-01-87  12:00a
    GREEK001 LST       310   9-01-87  12:00a
    HISTORY  DOC      1246   9-01-87  12:00a
    INSTRBC  DOC      7230   9-01-87  12:00a
    INSTRCI  DOC      7267   9-01-87  12:00a
    Q001     CDD      7789   9-01-87  12:00a
    Q002     CDD      7495   9-01-87  12:00a
    Q003     CDD      7963   9-01-87  12:00a
    Q004     CDD      7532   9-01-87  12:00a
    Q005     CDD      7520   9-01-87  12:00a
    Q006     CDD      7517   9-01-87  12:00a
    Q007     CDD      7390   9-01-87  12:00a
    README   DOC      5177   9-01-87  12:00a
    README   EXE     30944   9-01-87  12:00a
    RUNME    BAT       427   9-01-87  12:00a
    RURBC    EXE     27389   9-01-87  12:00a
    RURCI    EXE     27661   9-01-87  12:00a
    TRIG001  CDD     10663   9-01-87  12:00a
    TRIG001  HLP      3157   9-01-87  12:00a
    TRIG001  LST       394   9-01-87  12:00a
    TRIG002  CDD      9158   9-01-87  12:00a
    TRIG002  HLP      2243   9-01-87  12:00a
    TRIG002  LST       403   9-01-87  12:00a
           53 file(s)     303261 bytes
                           23552 bytes free
