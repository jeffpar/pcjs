---
layout: page
title: "PC-SIG Diskette Library (Disk #1134)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1134/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1134"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BANK ACCOUNT MANAGER"

    BANK ACCOUNT MANAGER lets you keep track of all your bank accounts. It
    is intended for novice users who want to balance their checkbooks and/or
    keep track of up to 10 active accounts. Use special codes to describe
    different types of accounts, such as checking, interest, savings, etc.
    BANK ACCOUNT MANAGER's interface is easy-to-use and menu-driven, with
    on-line help, and extensive documentation is provided for reference. You
    can get reports on account number, outstanding checks, reconciled
    checks, type of transaction, transaction amounts, and individual checks.
    A pop-up calculator is included to help in calculations.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FIXES.DOC

{% raw %}
```
---------------------------------------------------------------------------
---------------------------------------------------------------------------
                         July 20, 1989
---------------------------------------------------------------------------
---------------------------------------------------------------------------

         This is Release number 2 of Version 2.53. There are a few bug
    fixes from version 2.50.


 
     1)  In v2.50 Release Number 1, the Report Program gave a Window
    Allocation Error if you requested a Search. This has been fixed

     2)   The program's prompts are now no longer in Uppercase. For some
    reason I used to like all Uppercase words.

     3)   The <Esc> key was inactive in a few places. This has now been
     fixed. Most notably when you Viewed your Accounts, the program
     would only allow you to press the <Y> key. Now you may press
     <Enter>, <Esc>, or <Y>.

     4)   A few problems with File Error Handling have been eliminated.

     5)   The address has changed, please make a note of it!

      
                    Manu Singh
                    105 Deerfield Drive
                    Easton, CT 06612
      
    

```
{% endraw %}

## PREVUSER.DOC

{% raw %}
```
----------------------------------------------------------------------------
                     Information for  Users
----------------------------------------------------------------------------

       If you attempted to register B.A.M. v2.50 using the old address,
and have still received no response from me, it is very likely that the
mail did not get forwarded.

       The Post Office will be returning any mail not deliverable, and
you should  please address the registration to the new address.

       If you have attempted to send in a registration and wish to know
if I have received it, please drop me a note telling me when you sent
your registration in, and I will get back to you as soon as possible.


     I apologize for any inconvenience this may have caused anyone!

                                                   
```
{% endraw %}

## PRODUCTS.TXT

{% raw %}
```
---------------------------------------------------------------------------
               Current and Planned Products from SupremeSoft
---------------------------------------------------------------------------

           We at SupremeSoft are dedicated to bringing useful, easy
     utilities to you. We attempt to develop programs that are not solely
     for "Power User's" in that we try to keep a consistent and meaningful
     user interface in all our programs. This is why you will find that all
     of the options for our command line based utilities are the same for
     each program.  We also attempt to keep a consistent menu driven
     interface across all our products which use menus.


           If you would like to see a particular program developed, for
     any reason, we would love to hear from you. If we do use your idea(s),
     for a program, you will receive a registered version of it at no
     charge.                

--------------------------------- B.A.M. -----------------------------------

     B.A.M. Utilities:  (As of 02/22/89)

           These are a collection of Utilities for Manu Singh's Bank
     Account Manager. They include:

           1) A Bank Statement Computer which will compare B.A.M.'s
     account status with the statement you receive from the bank.

           2) A Reconciler which works just like your checkbook. You may
     "check off" the checks which have been processed by the bank. Much
     better than B.A.M.'s internal reconciler.

           3) A program file sorter. Unfortunately, B.A.M. insists that you
     look at all your transactions in Date order. This program allows
     you to sort the files by Account, Special Code Number, Amount,
     or Code/Check Number.


     B.A.M Reporter:  (Projected Summer 1990)

           As all B.A.M. user's will attest to, B.A.M.'s reporting
     facilities leave something to be desired when it comes to a stand
     alone Report utility, and most certainly when it comes to
     Printing out your Transactions. This program will be a replacement
     for B.A.M's stand alone REPORT program, and of course the internal
     print routines.

-------------------------------- SETATTR -----------------------------------

     Set Attribute:  (As of 05/04/90) 

           This program allows you to set any file's attributes to a
     completely new set. In addition, it is designed to process your
     entire disk in one pass. This is useful if you wish to eliminate
     unwanted Archived files from a Backup. You may select which files
     you wish to change, and which you do not. In this way, you will
     also see which files are going to be backed up.

           Naturally this is only an example of the program's use. You
     may set the Archive, ReadOnly, System, or Hidden bits for any
     file. You have a variety of options as to what you actually wish
     the program to do.

--------------------------------SASK----------------------------------------

      SupremeAsk:   (As of 02/25/90)

           This program is designed for use primarily in batch files. It 
      allows  you to display a text file or a prompt and then wait for the 
      user to enter certain keys. Depending on the key pressed, the DOS 
      ERRORLEVEL variable is set for testing in the remainder of the batch 
      file. 
      
           The program is unique in that you may display an entire file as 
      the prompt, or you may enter your own on the command line. Also, the 
      program will not beep annoyingly at a wrong keypress, unless you 
      direct it to do so. 

--------------------------------- GRADES -----------------------------------

     Grades v2.70:  (As of August 25, 1989)

           This program allows one to keep track of all pertinent school
     information including class name, course number, teacher name, etc.
     In addition one may keep Test Score information, and then use that
     information to let the program predict your grade and then see how
     this grade would affect your GPA. The GPA is constantly updated and
     displayed.

           The new version of Grades includes:

           1) A Grade Curve feature to let one see how a grading curve
     would affect one's grade.

           2) Improved Data Entry ability.

           3) New "scroll-able" display format.

           3) Ability to maintain a number of class record files, for
     all the students in a household.

----------------------------------SupremeMove-------------------------------

     SupremeMove v1.31:  (As of 03/01/90)


         SupremeMove is a fast multiple file mover. The capability to move 
     across directories and across disks is supported. The program is faster 
     than any commercial or Shareware program available, and uses only 10K of 
     both disk space and only 12K of memory!
    
---------------------------------SupremeSched-------------------------------

     SupremeSched v1.03: (As of 02/25/90)

         SupremeSched is an Employee Scheduling system which allows the user 
     to enter Employee's work schedules and then check the schedule for 
     accuracy. The following are the programs major features:


           1) User defined work time periods, to ensure that Employees are 
     scheduled for all needed times.
           
           2) Unlimited number of Employees, and an unlimited amount of 
     Locations for your Business.
          
           3) Checks are made for Employee Off Days, Business Closed Days, 
     Employee not Already Scheduled, Employee meets Job requirements, 
     Scheduled Employee exists, and many more! 

          
         Maintaining your weekly work schedule is no longer a chore! This 
     program automates your scheduling, and even makes sure you don't make any 
     mistakes. The user may override the verification checks at any time just 
     in case you want to make mistakes.

         Output can be directed to any standard printer, either 80 or 132 
     columns. Simple Menu's guide you through the scheduling process, and the 
     easy to use configuration program makes sure you tell the program 
     everything it needs to know before you even start using it!
          
--------------------Move/Rename/Delete/Copy Utilities-----------------------

   Supreme Utility v1.09:  (As of 03/06/90) 

            This is an integrated program that will allow you to do the 
       following, using only one program call:
       
             1) Move files. Copy and Delete in one operation. Wildcards 
       obviously accepted and used. You may move across subdirectories 
       etc. 
       
             2) Copy files Globally using wildcards etc. Much easier and 
       faster than DOS's Copy command.
              
             3) A global Rename function. Useful if you have to rename a 
       number of files in one shot. 
       
             4) Global Delete. Have you ever wanted to type DEL *.BAK and 
       have all of your .BAK files deleted from the disk? This program
       option will let you do this. 
       
          This program is great for combining a number of operations into 
       one command call. Error reporting and trapping is quite extensive, 
       avoiding any possible user error. 
----------------------------------------------------------------------------
          
           We sincerely hope you will find our products useful and 
     will continue to use them in the future.  In order for us to
     keep in touch with you, please drop us a line with any questions
     or comments you may have.  Thank you.


     Please address all correspondence to:


                           SupremeSoft
                           105 Deerfield Drive 
                           Easton, CT 06612 

----------------------------------------------------------------------------
----------------------------------------------------------------------------
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
-----------------------------------------------------------------------------
                   Registration Benefits
-----------------------------------------------------------------------------

        1) The Registered versions of B.A.M. interface to the B.A.M. Utilities 
    put out by SupremeSoft.

        2) The Registered versions have eliminated all the Bugs that have been 
    found up to the time you Register.

        3) The file BAM.CFG is eliminated, and the program stores the defaults 
    internally for you.

        4) Other minor improvements in Execution and prompting.

        5) Information on new updates and fixes for all versions of B.A.M. You 
    will be immediately informed if a severe error is found in the program.

        6) You will no longer be limited to only 1000 Transactions per file.

        7) Your conscience will no longer bother you.


      To Register, please use the ORDER.DOC file. You may print this file out 
    on any standard Epson(r) compatible printer using 12cpi font. Just, fold 
    where indicated, enclose Check or Money Order, and send it along.



                        Thank You.
```
{% endraw %}

## SASK.DOC

{% raw %}
```
--------------------------------------------------------------------------
Version 1.32                       SupremeAsk                     02/25/90
Copyright (c) 1988-90 by SupremeSoft                   All Rights Reserved
--------------------------------------------------------------------------

  SASK is simply a Norton ASK clone. It has one added feature, the
ability to import text files as the prompts. This allows you to display
all those README files, and then request the user if they want to follow
a certain course of action. All you have to do is add the prompt at the
end of the README file.

  SASK automatically keeps track of the current display line, thus
allowing you to display files which are more than 24 lines long. SASK
will display "More...Press any key" at the end of each page. Naturally,
if the display doesn't overrun one page, no such prompt is made.

Calling Syntax:      SASK ["Display Prompt" | filename.txt]  KeyList

  You have the option to output a standard prompt, just as in Norton's
ASK. To do so, just enclose the prompt in double quotes ("). (See note
for C version), the program will then display that prompt and wait for
one of the keys in KeyList to be entered.

Returns:        ERRORLEVEL set according to the key pressed, and it's
                  location in the KeyList

                ERRORLEVEL set to 99 on any Errors including
                Ctrl-C/Ctrl-Break.

Examples:   SASK "Continue? (Y/N)" yn

      Displays <Continue? (Y/N)> and waits for either <Y>, <y>, <N>, <n>
to be pressed. ERRORLEVEL is set as follows:

             <Y>,<y>      ERRORLEVEL=1
             <N>,<n>      ERRORLEVEL=2
             Any error    ERRORLEVEL=99


            SASK readme.txt nye

      Displays the file README.TXT and waits for <Y>, <y>, <N>, <n>,
<E>, <e>. ERRORLEVEL is returned as follows:

             <N>,<n>      ERRORLEVEL=1
             <Y>,<y>      ERRORLEVEL=2
             <E>,<e>      ERRORLEVEL=3
             Any error    ERRORLEVEL=99



Note 1:  To test ERRORLEVEL in batch files, make sure that you test for
the HIGHEST possible return value FIRST! Otherwise, the batch file will
execute the very first condition. Therefore use the following
construct:  

           if ERRORLEVEL=99
           if ERRORLEVEL=98
           if ERRORLEVEL=97
                  .
                  .
                  .
           if ERRORLEVEL=1


Check your DOS manual for further information.

Note 2: For the C versions, instead of using double quotes, you must use
single quotes (').

Note 3: Unlike Norton ASK, the program does not Beep at an incorrect key
entry. Also, unlike ASK, the program will ALWAYS display it's copyright
notice
---------------------------------------------------------------------------
Changes since version 1.31:

The C versions are now also being distributed, and are on the disk as 
SASK2.EXE and SASK3.EXE. SASK2 is the version optimized for 
80186/80286/80386/80486 processors, though not suitable for running under 
OS/2. SASK3 is the 8086/808 processor version.

The C versions are slightly bigger in size, but take up less memory, and 
tend to run a bit faster. The choice of which version (Pascal or C) to use 
is left up to you.

There was only one small error in the program, thus the reason for not 
updating it for over two years. When you typed SASK by itself to get the 
calling syntax, the program told you that ERRORLEVEL was set from the KeyList 
from right to left. This was WRONG. It is actually from left to right.
---------------------------------------------------------------------------
License/Warranty:

     There is NO warranty either expressed or implied. You use this
program at your own risk! You may NOT hold SupremeSoft accountable for
any damages that may occur either directly or indirectly from the use of
this program.

     This program is distributed either by itself, or in a package of 
Utilities. To register SupremeAsk and to get a copy of the latest versions of 
all the Utilities send $5.00 to the address below:

                           SupremeSoft
                           105 Deerfield Drive
                           Easton, CT 06612


Corporate/Academic Site Licenses are available.
---------------------------------------------------------------------------
SupremeSoft is a Trademark of SupremeSoft in Easton CT.
SupremeAsk  is a Trademark of SupremeSoft.
ASK  is a Registered Trademark of Norton Computing.
---------------------------------------------------------------------------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1134

     Volume in drive A has no label
     Directory of A:\

    BAM      EXE     56685   7-20-89  11:21a
    BAM      HLP     14713   7-20-89  11:21a
    CONVERT  EXE      8352   7-20-89  11:21a
    FILES    ME        884   7-20-89  11:21a
    FIXES    DOC      1239   7-20-89  11:21a
    GO       BAT       422   7-20-89  11:21a
    INSTALL  EXE     29248   7-20-89  11:21a
    KEYCHART          8456   7-20-89  11:21a
    MANUAL   DOC    110717   7-20-89  11:21a
    ORDER    DOC      4129   7-20-89  11:21a
    PREVUSER DOC       862   7-20-89  11:21a
    PRODUCTS TXT      8130   7-20-89  11:21a
    README   COM      4105   7-20-89  11:21a
    REGISTER DOC      1183   7-20-89  11:21a
    REPORT   EXE     54207   7-20-89  11:21a
    SASK     DOC      4638   2-25-90  11:06a
    SASK     EXE      7008   2-25-90  11:06a
    UPDATE25 DOC     37404   7-20-89  11:21a
           18 file(s)     352382 bytes
                               0 bytes free
