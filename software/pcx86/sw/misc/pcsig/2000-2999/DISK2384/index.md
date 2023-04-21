---
layout: page
title: "PC-SIG Diskette Library (Disk #2384)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2384/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2384"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TUTOR DOS 1 OF 4 (2385-2387 ALSO)"

    TUTOR DOS was created by a professional computer instructor to assist
    beginners who are trying to learn DOS. It was written with the novice
    in mind, and starts with the basics of RAM and DOS before moving on to
    topics such as formatting disks, manipulating sub-directories, and
    creating batch files.
    
    TUTOR DOS consists of 21 interactive lessons. Students are able to
    practice their newfound skills as they acquire them. TUTOR DOS will
    recognize a variety of answers to its questions and prompts users with
    hints. Each lesson ends with a short quiz to help students review what
    they have learned. At the end of the program, students take a
    multiple-choice test to evaluate their knowledge. Based on this test,
    TUTOR DOS either recommends lessons for review or rewards the student
    with a custom printed certificate.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2384.TXT

{% raw %}
```
Disk No: 2384                                                           
Disk Title: TUTOR DOS 1 of 4 (2385-2387 also)                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: TUTOR DOS                                                
Author Version: 1.1                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
TUTOR DOS was created by a professional computer instructor to assist   
beginners who are trying to learn DOS.  It was written with the novice  
in mind, and starts with the basics of RAM and DOS before moving on to  
topics such as formatting disks, manipulating sub-directories, and even 
creating batch files.                                                   
                                                                        
TUTOR DOS consists of 21 interactive lessons.  Students are able to     
practice their newfound skills as they acquire them.  TUTOR DOS will    
recognize a variety of answers to it's questions and prompts users with 
hints.  Each lesson ends with a short quiz to help students review what 
they have learned.  At the end of the program students take a           
multiple-choice test to evaluate their knowledge.  Based on this test,  
TUTOR DOS either recommends lessons for review or rewards the student   
with a custom printed certificate.                                      
                                                                        
No license fee is required for public schools and other federal or state
sponsored learning facilities. Corporate licensing rates and customized 
versions are also available.                                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TUTORDOS.DOC

{% raw %}
```








                                      TUTOR DOS

                                  Copyright (C) 1989
                                  Kevin L. Cummings

          LIMITATION OF LIABILITY

          This program is distributed 'as is' without warranty of any kind,
          either express or implied.

          The author of this software shall not be liable to the user or
          any other person or entity with respect to any liability, loss,
          or damage caused or alleged to be caused directly or indirectly
          by this software.

          TRADEMARK ACKNOWLEDGEMENTS

          MS-DOS and Microsoft are registered trademarks of Microsoft
          Corporation.

          IBM is a registered trademark of International Business Machines.

          Que is a registered trademark of Que Corporation.

          McGraw-Hill is a registered trademark of McGraw-Hill Corporation.

          Video Professor is a registered trademark of Video Professor
          Corporation.

          WordPerfect is a registered trademark of WordPerfect Corporation.

          Lotus and 1-2-3 are registered trademarks of Lotus Development
          Corporation.

          LICENSE AGREEMENT

          License to use this software is limited to private individuals in
          homes and use by public, non-profit, educational institutions
          (including, but not limited to; public elementary and secondary
          schools, public colleges and universities, and state and
          federally operated training facilities).

          ANY OTHER USE WILL BE CONSIDERED TO CONSTITUTE WILLFUL COPYRIGHT
          VIOLATION.

          Use of this program shall constitute agreement to these terms.

          This program may be freely copied and distributed so long as no
          fee (expect for media costs, under $7.00 U.S. per disk) is
          charged, and the program is not modified in any way.

 













          INTRODUCTION

          Now that we have all of the legal stuff out of the way, I can get
          on with telling you about the program.  TUTOR DOS is an
          interactive, beginner's DOS tutorial.  It assumes that the user
          knows virtually nothing about MS-DOS.

          The program consists of an introduction, twenty-one lessons, a
          final test, and a few closing remarks.  The program is contained
          in twenty-six program files, three batch files, and one
          documentation file.  (There is a complete list of the names of
          these files at the end of this document.)

          TUTOR DOS offers several advantages over currently available
          commercial tutorials.

               *TUTOR DOS was designed to talk 'to' you, rather than
               'at' you.

               *All of the lessons in TUTOR DOS are quite short and
               none of them should take more than twenty to twenty-
               five minutes to complete.

               *You may use the [ESCAPE] key to exit any lesson at any
               time.

               *TUTOR DOS has been programmed to accept several 
               answers to each of its questions.

               *If you give the wrong answer to a question, TUTOR
               DOS will provide a hint.

               *If you can't seem to get the right answer to a
               question, keep trying.  After you've tried three times,
               TUTOR DOS will type the right answer for you.

               *Each lesson ends with a quiz.  These quizzes will help
               you judge how well you've learned the material in each
               lesson.

               *The course ends with a comprehensive examination. 
               TUTOR DOS will analyze your answers and (if necessary)
               give you a list of lessons to review.

               *If you score over eighty percent on the test, TUTOR
               DOS will print out a certificate of achievement with
               your name on it.

               *TUTOR DOS is distributed as SHAREWARE.  If you enjoy
               it, I ask that you send me a donation of ten dollars. 
               This is far less expensive than commercial DOS
               tutorials which generally cost thirty to fifty dollars.














          SYSTEM REQUIREMENTS

          TUTOR DOS has been designed with the average user in mind and,
          therefore, will work on virtually any PC.  The specific
          requirements are:

               256 K Random Access Memory
               DOS 2.1 or higher

          There are no other requirements.  TUTOR DOS will run from floppy
          disk drives (of any size) or from a hard disk drive.  It will run
          equally well on color and monochrome monitors.

          INSTALLING TUTOR DOS

          If you do not have a hard disk drive, or do not want to put TUTOR
          DOS on your hard disk drive, no installation is necessary.  
          However, if you want to install TUTOR DOS on your hard disk
          drive, all you have to do is follow these instructions:

               1) Turn on your PC.

               2) Wait for the prompt to appear on the monitor, it
               should look something like C:\>, and it will be
               followed by a small, blinking cursor.

               3) Put TUTOR DOS disk number 1 in your A: disk drive.  (If
               you have more than one floppy disk drive, you'll have to
               figure out which one is the A: disk drive.  If your disk
               drives are stacked on top of one another, this will be the
               top disk drive.  If they are side by side, it will be on the
               left.)

               4) Type A:INSTALL A C and press the [ENTER] key.

               5) Follow the instructions that appear on your screen.

          USING TUTORDOS

          If you are using TUTOR DOS from a disk drive, make sure that
          TUTOR DOS disk number 1 is in the drive and the door is closed. 
          Type TUTORDOS and press [ENTER].

          If you have installed TUTOR DOS on your hard disk drive, wait for
          the C:\> and type TUTORDOS and press [ENTER].

          In either case, after a moment, TUTOR DOS will begin to give you
          instructions on the screen.  From this point on, all you have to
          do is follow these instructions.

















          AUTHOR'S NOTES

          I have enjoyed putting this program together and I hope you have
          enjoyed using it.  If you have comments, please feel free to
          write to me at the address given below:

                         Kevin L. Cummings
                         155 North Fort Lane "B"
                         Layton, UT  84041

          Thanks for taking the time to use this tutorial and the best of
          luck with your PC!





          APPENDIX -- COMPLETE FILE LIST FOR TUTOR DOS

          [Don't bother reading this unless you're a real computer junkie!]

          Disk #1                                 Disk #2
          TUTORDOS.EXE                            MENUDOS.TBC
          MENUDOS.TBC                             DOS5.TBC
          INTRO.TBC                               DOS6.TBC
          DOS1.TBC                                DOS7.TBC
          DOS2.TBC                                DOS8.TBC
          DOS3.TBC                                DOS9.TBC
          DOS4.TBC                                DOS10.TBC
          INSTALL.BAT                             DOS11.TBC
          HARDSTRT.BAT                            INSTALL.BAT
          PRINTDOC.BAT
          TUTORDOS.DOC

          Disk #3                                 Disk #4
          MENUDOS.TBC                             MENUDOS.TBC
          DOS12.TBC                               DOS19.TBC
          DOS13.TBC                               DOS20.TBC
          DOS14.TBC                               DOS21.TBC
          DOS15.TBC                               DOSTEST.TBC
          DOS16.TBC                               FINAL.TBC
          DOS17.TBC                               INSTALL.BAT
          DOS18.TBC
          INSTALL.BAT

          The files called MENUDOS.TBC and INSTALL.BAT have been placed on
          all four disks to aid beginning users and reduce the amount of
          disk swapping.

          TUTOR DOS was written using Borland International's TURBO BASIC
          version 1.1. Portions of the program make use of Rick
          Fothergill's public domain TBWINDO utilities.








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2384

     Volume in drive A has no label
     Directory of A:\

    TUTORDOS EXE     82360   8-23-90  11:40a
    MENUDOS  TBC     29364   8-20-90  11:56a
    INTRO    TBC     31550   2-09-90   9:46a
    DOS1     TBC     40095   2-09-90   9:43a
    DOS2     TBC     34518   2-09-90   9:47a
    DOS3     TBC     41205   2-09-90   9:48a
    DOS4     TBC     65225   2-09-90   9:48a
    TUTORDOS DOC      8786  12-08-89  10:22a
    HARDSTRT BAT        46   7-31-89   8:49a
    INSTALL  BAT      2704  11-09-89   1:24p
    PRINTDOC BAT       179  11-14-89   9:48a
    GO       BAT        24  10-03-90   1:40a
    GO       TXT       962  10-04-90   3:34a
    FILE2384 TXT      2443  10-03-90   1:05p
           14 file(s)     339461 bytes
                           15360 bytes free
