---
layout: page
title: "PC-SIG Diskette Library (Disk #797)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0797/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0797"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEST AND TRAIN"

    Whether you're a teacher wanting to give tests on the computer, or a
    student who needs to drill for tests or courses, or a manager who needs
    to administer training drills to your employees, TEST and TRAIN can
    help you do the job.
    
    You enter the questions and TEST AND TRAIN displays them on the screen.
    The program offers slightly different scoring options for testing and
    training.  In both cases, the program accepts valid answers and rejects
    inappropriate ones, showing the correct answer with an optional comment
    when the answer is incorrect.  You can put incorrectly answered
    questions on hold, and view them again until the correct answer is
    given.  TEST keeps score of points associated with correct answers, and
    counts the number of incorrect answers entered.  At the end of the test
    the program displays an optional evaluation, and stores the results in a
    permanent file on your disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
TEST1.COM       PRESENTS AND SCORES TESTS FROM EASILY PREPARED USER FILES
TRAIN1.COM      PRESENTS AND SCORES TRAINING MATERIAL, USER PREPARED
TESTEST1.COM    DEBUGGER AID PROGRAM FOR TEST1.COM  AND TRAIN1.COM
TEST.DOC        DOCUMENTATION FOR TEST1.COM, TRAIN1.COM, TESTEST1.COM
DOC.TST         DOCUMENTATION IN TEST FORM FOR TEST1.COM AND TRAIN1.COM
DEMO.TST        DEMONTRATION TEST FOR TEST1.COM AND TRAIN1.COM
SAMPLE.TST      SAMPLE TEST FOR TEST1.COM
FILES.TXT       DESCRIPTION OF FILES IN THIS PROGRAM
GO.BAT          PRINTS OUT TEST.DOC
```
{% endraw %}

## FILES797.TXT

{% raw %}
```
Disk No  #797
Program Title: TEST
PC-SIG version 1
 
    TEST will display your questions, accept valid answers and reject
inappropriate ones, show the correct answer with an optional comment when
the answer is incorrect, put incorrectly answered questions on hold and
present them again until the correct answer is givern, keep score of points
associated with correct answers as well as the number of times that an
incorrect answer was entered. All questions can be put on hold an
indefinite number of times, and will be presented again in the same order
as they were encountered. At the end of the test the program will display
an optional evaluation, and store the results in a permanent file on your
disk.
 
Usage: Educational
 
System Requirements: 128K and one floppy drive and a word processor.
 
How to Start: Type TEST1 and (press enter)
 
Suggested Registration: $11.88
 
File Descriptions:
 
TEST1    COM  Presents and scores tests from easily prepared user files.
TRAIN1   COM  presents and scores training material, user prepared.
TESTEST1 COM  Debugger aid program for TEST1.COM  and TRAIN1.COM.
TEST     DOC  Documentation for test1.com, TRAIN1.COM, TESTEST1.COM.
DOC      TST  Documentation in test form for TEST1.COM and TRAIN1.COM.
DEMO     TST  Demontration test for TEST1.COM and TRAIN1.COM.
SAMPLE   TST  Sample test for TEST1.COM.
FILES    TXT  Description of files in this program.
 
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
║                 <<<<  Disk #797 TEST AND TRAIN  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                      COPY TEST.DOC PRN (press enter)                    ║
║                                                                         ║
║ To start the program type: TEST1 (press enter)                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0797

     Volume in drive A has no label
     Directory of A:\

    DEMO     TST      7168   5-11-87   1:58p
    DOC      TST     15360   5-11-87   2:02p
    FILES    TXT       555   5-11-87   9:35a
    FILES797 TXT      1544   7-02-87  10:17a
    GO       BAT        38   7-02-87  10:20a
    GO       TXT       617   7-02-87  10:24a
    SAMPLE   TST     10752   5-11-87   2:07p
    TEST     DOC     11665   5-12-87   4:10p
    TEST1    COM     17522   5-11-87   2:17p
    TESTEST1 COM     17819   5-11-87   2:26p
    TRAIN1   COM     17430   5-11-87   2:22p
           11 file(s)     100470 bytes
                           56832 bytes free
