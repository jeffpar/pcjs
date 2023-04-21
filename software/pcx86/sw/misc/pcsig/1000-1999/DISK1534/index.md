---
layout: page
title: "PC-SIG Diskette Library (Disk #1534)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1534/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1534"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORD-PART DICTIONARY"

    Get ready for your placement tests while you enhance your word power
    with WORD-PART Dictionary.  The database of this system boasts 500 word
    parts and 2,000 related words with concise definitions.
    
    The program enables you to learn new words with ease and speed since it
    allows you to study a group of related words at a time, each
    stemming from a common root word part.  For example, a search of the
    root "retro" brings up on the screen: retroactive, retrocede,
    retroflex, and retrograde -- along with their definitions.  You get a
    highly selected list of word parts related to about 70 percent of the
    tough words in a typical SAT, ACT, CBAT, or GRE verbal test.  The
    system is menu-driven and has on-line instructions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1534.TXT

{% raw %}
```
Disk No: 1534
Program Title:  WORD-PART DICTIONARY version 2.0
PC-SIG Version 1

Get ready for your placement tests while you enhance your word power
with WORD-PART Dictionary.  The database of this system boasts 500 word
parts and 2,000 related words with concise definitions.

The program enables you to learn new words with ease and speed since it
allows you to study a group of related words at a time, each stemming
from a common root word part.  For example, a search of the root "retro"
brings up on the screen: "retroactive", "retrocede", "retroflex" and
"retrograde"---along with their definitions.  You get a highly selected
list of word parts related to about 70 percent of the tough words in a
typical SAT, ACT, CBAT, or GRE verbal test.  The system is menu-driven
and has on line instructions.

Synopsis:  Improve your vocabulary.  Learn new words grouped by their
common roots.  Great for preparing for the SAT, ACT, CBAT or GRE
verbal tests!

Usage:  Educational/Vocabulary/Dictionary.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $24.00

Author:  Jim C. Chung, EDICOM SYSTEMS

File Descriptions:

LOAD_WP  BAT  Load WORD-PART DICTIONARY from A: to C:
WP       EXE  WORD-PART DICTIONARY program.
WP_LINK  DAT  File to link the program to the text data files.
WP?      DAT  Text data file (4 files).
WP       DOC  User information.

The PC-SIG Library
1030D E Duane Ave.
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## WP.DOC

{% raw %}
```






                   WORD-PART DICTIONARY


                       User's Guide



                 (C) Copyright 1987, 1988 by
                       EDICOM SYSTEMS
                    19827 W. 12 Mile Rd.
                    Southfield, MI 48076
                       (313) 541-8889

 



     1. Introduction

           WORD-PART DICTIONARY is a program to enhance your
        word  power.   It has a data base of 500  word parts
        and 2000 related words with concise definitions. You
        can get access to the desired parts or words  with a
        few key strokes. The selected list of word parts are
        related to  about 70% of the tough words  in a typi-
        cal SAT, ACT, CBAT, or GRE verbal test.  The  system
        is menu-driven and has on line instructions. This is
        the first system that  employs  scientific method to
        collect the most frequently  used word parts.  It is
        one of the most  effective  systems  to improve your
        word power. (Note: Another powerful system available
        is PC DICTIONARY-10, which is described in DIC.DOC.)

     2.  Features:

         *  Comprehensive Data Base: The WORD-PART DICTIONARY
            has over 500 most frequently used word  parts and
            2000 related words with concise definitions.  The
            definitions of word parts  are compiled from four
            most respected sources.

         *  Menu Driven:  The  WORD PART DICTIONARY is  fully
            menu driven. All you need to do is "load and go".
            It enables you to  get access  to  part/word with
            a few keystrokes.

         *  A Necessary Tool to Prepare SAT, ACT,  CBAT,  GRE,
            and  any  Civil  Placement  Test:  The  system  is
            designed  specifically for these purposes.  Learn-
            ing words thru  word parts  allows  you to study a
            group of words at a time, instead of one at a time.
            It can also help you understand and remember words.

         *  Average Response Time: 0.4 second.

         *  Memory Requirement: 55 KB. ( Not memory-resident.)

         *  Hardware Requirements:  One  floppy disk drive  or
            one hard disk drive.

         *  Recommended for age 12 to adult.




     3. SYSTEM FILES

           WORD PART DICTIONARY comes with the following files:

        load_wp.bat      (a batch file to load  the  system
                          files from a: to c: )
        wp.exe           (the main program file)
        wp_link.dat      (a data file to  link the  program
                          and the text data files.)
        wp1.dat          (text data file #1)
        wp2.dat          (text data file #2)
        wp3.dat          (text data file #3)
        wp4.dat          (text data file #4)
        wp.doc           (This documentation)

        Notes: 1. Please make a backup copy of the files.
               2. Please do not modify any file.

      4. SYSTEM INSTALLATION AND RUNNING THE PROGRAM

      A. Floppy disk system

         0. Insert disk in drive A:

         1. At DOS prompt A>, enter the command: wp

            (Notes:
             A. wp.exe is the program name.
             B. The system is very easy to use, just run it. )

      B. Hard disk system

         0. To load the system from  A: to  C:
            Insert the disk in drive A:
            At DOS prompt A>, enter the command: load_wp

            (Notes:  load_wp.bat  is a  batch file that  makes a
             new directory  \wpart in  c:  and copies  all Word-
             Part  DICTIONARY  files from a: to this  directory.
             It also changes the working directory to c:\wpart.)

         1. To run the program:
            Enter the command: wp

            (Notes:
             A. wp.exe is the program name.
                The program wp.exe is in the dir. \wpart.

             B. It is recommended that you move wp.exe  to ano-
                ther directory so that it is  accessible at all
                time.

             C. You can run the program from any directory,
                provided that:
                a. all *.dat files are in \wpart
                b. wp.exe is accessible by DOS.

             D. The system is designed to be manual free; all
                you need to do is load and go. )
 
     5. LICENSE AGREEMENT

         This system is released to the shareware  distribution
         system under the following conditions:

         a. The files  shall be distributed as a completed set.
            All the  files that  come  with the  system   shall
            not be modified or deleted.

         b. The users may get a  copy  of this system  directly
            from  EDICOM SYSTEMS by  sending us a  check of $4,
            or from any of the shareware distributors.

         c. The user understands and  agrees  that  he/she will
            pay the author thru registration, if he/she decides
            to use this system beyond the evaluation period.


     6. LIMITED LIABILITIES

         THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT
         ANY WARRANTY AS TO PERFORMANCE. BECAUSE OF THE DIVER-
         SITY OF ENVIRONMENTS UNDER WHICH THIS PROGRAM MAY  BE
         USED, NO WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE
         IS OFFERED.  THE USER IS  ADVISED TO TEST  THE SYSTEM
         THOROUGHLY BEFORE RELYING ON IT. THE USER MUST ASSUME
         THE ENTIRE RISK OF USING THE SYSTEM. ANY LIABILITY OF
         SELLER AND MANUFACTURE WILL BE LIMITED EXCLUSIVELY TO
         PRODUCT REPLACEMENT OR REFUND OF THE PURCHASE PRICE.




        REGISTRATION  AND PAYMENT FORM

        To register,  please fill out the form below:

                                          Date: ____/__/19__
        Name: ___________________________ (Title:)  _______________
        (Company:)  _______________________________________________
        Address: ______________________________ City_______________
        State/Country: ________________________ Zip: ______________
        Phone  Work: (___) ___ - ____  Home: (___) ___ - ____

        Method of payment: Please complete the work sheet below and
        choose one of the payment options indicated. Michigan State
        residents must add sales tax. ALL CHECKS  AND MONEY  ORDERS
        MUST BE DRAWN ON U.S. ACCOUNTS ONLY.
                                         Cost                  Total
                  Description           Per Unit   Quantity    Cost
        ==============================================================
        WORD PART DICTIONARY Package  |  $24.00 |            |       |
        --------------------------------------------------------------
          Michigan residents add sales tax:  4%      --      |       |
        --------------------------------------------------------------
          COD orders  only,           add $ 3.00     --      |       |
        --------------------------------------------------------------
          Shipping Cost if Overseas,  add $6.00      --      |       |
        --------------------------------------------------------------
                                                    TOTAL    |       |
                                                             =========
         [ ] Check  [ ] Money Order  [ ] COD
         Send all items to:
                            EDICOM SYSTEMS
                            19827 W. 12 Mile Rd.
                            Southfield, MI 48076
                            (313) 541-8889

         *** The registered version of WORD-PART DICTIONARY comes
         with 30-day Money-back Guarantee/90-day Warranty.

        Comments and Suggestions:
        ____________________________________________________________

        ____________________________________________________________




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1534

     Volume in drive A has no label
     Directory of A:\

    FILE1534 TXT      1549   8-10-89   2:58p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       848   8-10-89   3:00p
    LOAD_WP  BAT       919   2-24-89   1:39a
    MANUAL   BAT       147   8-10-89   3:01p
    PAGE     COM       325   1-06-87   4:21p
    VIEW     BAT        38   8-10-89   3:00p
    WP       DOC      8057   2-26-89   2:34a
    WP       EXE     25424   2-26-89   3:26a
    WP1      DAT     49915   1-28-89  12:31a
    WP2      DAT     31850   1-28-89   2:50a
    WP3      DAT     28479   1-30-89   2:29a
    WP4      DAT     37007   1-30-89   2:35a
    WP_LINK  DAT     21633   1-30-89   2:45a
           14 file(s)     206229 bytes
                          108544 bytes free
