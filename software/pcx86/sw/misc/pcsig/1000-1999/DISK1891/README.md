---
layout: page
title: "PC-SIG Diskette Library (Disk #1891)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1891/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1891"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEST MANAGEMENT DISK 2 OF 2"

    TMS stands for TEST MANAGEMENT SYSTEM, and the name is descriptive.  TMS
    is a software system, or system of programs, which automates many of the
    routine and tedious chores of administering multiple-choice and
    true/false tests.
    
    ~ Maintain a test bank of up to 999,999 questions.
    
    ~ Browse through the test bank and mark questions at will for inclusion
    in a test; you can let the program search for the questions by author,
    by the class or course from which it is derived, or by the topic or area
    of the questions.
    
    ~ Print the test directly on a printer, with a face sheet, a coded
    student answer sheet, and an overlay key template for correcting the
    student answer sheets.
    
    ~ Save a test in ASCII text form, to load into your favorite word
    processor for additional editing or special effects such as boldface or
    italics.
    
    ~ Print a reference key version of the test, which contains all the
    questions of the regular test, plus a graphic indication of the correct
    answer, the level of difficulty, area of the question, class, author and
    bibliographic citations.
    
    ~ Administer the test by computer, by placing the test on a single
    diskette; the test will be scored automatically, and if you choose, the
    program will show the student his/her score and even review the test,
    with the correct answers and the student answers shown.
    
    ~ For each test you administer by computer, print a report which
    contains the name and score of each person who took the test, and a
    tally of the distribution of answers for the test.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1891.TXT

{% raw %}
```
Disk No: 1891                                                           
Disk Title: Test Management Disk 2 of 2                                 
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Test Management System                                   
Author Version: 1.08                                                    
Author Registration: $75.00                                             
Special Requirements: 512K RAM Hard Drive.                              
                                                                        
TMS stands for TEST MANAGEMENT SYSTEM, and the name is descriptive.  TMS
is a software system, or system of programs, which automate many of the 
routine and tedious chores of administering multiple-choice and         
true/false tests.                                                       
                                                                        
~ Maintain a test bank of up to 999,999 questions.                      
                                                                        
~ Browse through the test bank and mark questions at will for inclusion 
in a test; you can let the program search for the questions by author,  
by the class or course from which it is derived, or by the topic or area
of the question.                                                        
                                                                        
~ Print the test directly on a printer, with a face sheet, a coded      
student answer sheet, and an overlay key template for correcting the    
student answer sheets.                                                  
                                                                        
~ Save a test in ASCII text form, to load into your favorite word       
processor for additional editing or special effects such as boldface or 
italics.                                                                
                                                                        
~ Print a reference key version of the test, which contains all the     
questions of the regular test, plus a graphic indication of the correct 
answer, the level of difficulty, area of the question, class, author and
bibliographic citations.                                                
                                                                        
~ Administer the test by computer, by placing the test on a single      
diskette; the test will be scored automatically, and if you choose, the 
program will show the student his/her score and even review the test,   
with the correct answers and the student answers shown.                 
                                                                        
~ For each test you administer by computer, print a report which        
contains the name and score of each person who took the test, and an a  
tally of the distribution of answers for the test.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1891  TEST MANAGEMENT  >>>>                 ║
║                         (disk 2 of 2, 1891 also)                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Copy all files from disk 1 & 2 to your hard drive.                      ║
║                                                                         ║
║ To run the program, type: TMS  (press enter)                            ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.TMS PRN  (press enter)        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## WARNING.TXT

{% raw %}
```

                  ***************************************
                  *                                     *
                  *         WARNING!   WARNING!         *
                  *         ===================         *
                  *                                     *
                  ***************************************


       This warning accompanies version 1.08 of Test Management System


                 If you have already installed and used any
                 version of TMS, and you want to PRESERVE
                 all of the test items and test histories
                 in the test database, copy ONLY the files
                 listed below to your TMS directory.  If
                 you copy all files to the TMS directory,
                 the data base of test items and test
                 histories will be written over and lost.


                   Instead, copy only the files listed
                   below - they are the only ones that
                   have changed with version 1.08 (last
                   2-10-90)


                             CNF_TEST DBF
                             HELPONE  TXT
                             TMS      EXE
                             MANUAL   TMS
                             TESTOR   EXE
                             README   1ST
                             WARNING  TXT

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1891

     Volume in drive A has no label
     Directory of A:\

    FILE1891 TXT      3553   3-20-90   2:41p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   3-20-90   2:39p
    TMS      EXE    339946   2-10-90  12:00p
    T_GROUPS DBF       394   2-10-90  12:00p
    UNAREA   DBF       491   2-10-90  12:00p
    UNAREA   NTX      2048   2-10-90  12:00p
    UNAUTH   DBF       148   2-10-90  12:00p
    UNAUTH   NTX      2048   2-10-90  12:00p
    UNCLASS  DBF       201   2-10-90  12:00p
    UNCLASS  NTX      2048   2-10-90  12:00p
    WARNING  TXT      1416   2-10-90  12:00p
           12 file(s)     353102 bytes
                            4096 bytes free
