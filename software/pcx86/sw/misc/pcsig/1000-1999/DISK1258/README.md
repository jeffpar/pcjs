---
layout: page
title: "PC-SIG Diskette Library (Disk #1258)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1258/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1258"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PULLED -- ALL FILES ON 1134"

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

## FILE1258.TXT

{% raw %}
```
Disk No: 1258
Program Title:  BANK ACCOUNT MANAGER version 2.50 (Disk 2 of 2)
PC-SIG version:  1.2

This is the second disk of the BANK ACCOUNT MANAGER, it lets you keep
track of all of your bank accounts.  Please note that you will need disk
#1134 to run the BANK ACCOUNT MANAGER program.

Usage:  Financial/Student Grades.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

CONVERT  EXE  Conversion program for B.A.M.
CONVERTG EXE  Conversion program for GRADES.
FILES    ME   Listing of files on disk.
FIXES    TXT  Bug fixes form version 2.50.
FUTURE   DOC  Text file.
GO       BAT  Batch file for displaying program information.
GOGRADES BAT  Batch file to start GRADES.
GRADES   DOC  Manual.
GRADES25 EXE  Main program.
INSTALL  EXE  Installation program for BANK ACCOUNT MANAGER.
KEYCHART      Text file.
ORDERBAM DOC  Registration form for B.A.M.
ORDERFRM TXT  Order form for other products.
PRODUCTS TXT  Other products available.
READ     ME1  Text file.
READ     ME2  Text file.
READ     ME3  Text file.
READ     ME4  Text file.
READGR   BAT  Batch file.
REGISTER DOC  Registration form.
REPORT   EXE  Program to print reports.
UPDATE25      Text file.
UPDATEG  DOC  Update information for GRADES.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## FIXES.TXT

{% raw %}
```
 --------------------------------------------------------------------------
 04/08/89         Bug Fix Information for Grades v2.51            04/08/89 
 --------------------------------------------------------------------------
     Sadly, a few bugs existed in v2.50 when it was released. This update 
   now fixes most of the bugs. 
      

              Note that the manual has NOT changed! 
   

     Version 2.51 has now corrected the following bugs, and they should 
   no longer cause any further problems: 


      1) There used to be a nasty bug which allowed one to change a class 
   which came EARLIER in the Database. You will recall that the program 
   will not let you change a class which you are not viewing. It would 
   correctly indicate that you were not viewing the class if you attempted 
   to change a class that came  LATER in the Database. But, if it came 
   earlier, it would not catch it, and would allow you to change the 
   information, thus corrupting the display. 
                                      
       2) In v2.50 when you Deleted a class, you could no longer reliably 
   Change any of the classes, since the program would not be able to 
   correctly determine where in the Database the class was.  
                                                                      
       3) When you  pressed <F1> in the Main Menu for Help, upon return 
   the Time Display would stop running, until you pressed another key. 
                                                
       4) The Conversion program used to fail for unknown reasons on 
   certain users' files. 


       All of these Bugs have now been corrected in this Maintenance 
   update.

       5) Finally, the background color for the Help text has been
   changed from Brown to Cyan. The previous color was difficult to read
   on some monitors.
          
---------------------------------------------------------------------------
        Thank You for your Support.      Please Register!! 
---------------------------------------------------------------------------
  

```
{% endraw %}

## FUTURE.DOC

{% raw %}
```
 ---------------------------------------------------------------------------
                        Future Plans for Grades
 ---------------------------------------------------------------------------


        Version 2.60 of Grades will be developed in conjunction with 
SupremeSoft (tm). Changes will be most noticeable in the user interface. An 
easier and more powerful interface is being developed for both Grades and Bank 
Account Manager.

        New features include:
                                    
           1) A completely new interface which is much easier to use
     than the current program's.

           2) The ability to include test scores within a given
     class record, and being able to "predict" your grade given
     this information.

           3) Ability to maintain a number of class record files, for
     all the students in a household.

           4) Instant access to the computed G.P.A. at a touch of a key.


        As of yet there is no projected release date. However, plans are to 
have version 2.60 released before Summer 1990.


      SupremeSoft is a Trademark of SupremeSoft based in Binghamton, NY
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
L---+---T1----+-T--2----T----3--T-+----4T---+---T5----+-T--6----T----7--T-+--------------------R
│                                                                                              │
│                                                                                              │
│ Where did you obtain this copy from? ______________________________________                  │
│                                                                                              │
│ Version Number?  __________________________________________________________                  │
│                                                                                              │
│ Your Telephone Number? ____________________________________________________                  │
│                                                                                              │
│ Comments/Needs? ___________________________________________________________                  │
│                                                                                              │
│  __________________________________________________________________________                  │
│                                                                                              │
│  __________________________________________________________________________                  │
│                                                                                              │
│                                                                                              │
│          Enclose a $10.00 Check or Money Order made out to Manu Singh                        │
│                     DO NOT SEND CASH THROUGH THE MAIL!!!                                     │
│___________________________________FOLD HERE 1st______________________________________________│
│                                                                                              │
│                                                                                              │
│ Name: ___________________________                                                            │
│                                                                                              │
│ Street: ______________________________                                                       │
│                                                                                              │
│ City/State/Zip:  __________________________________                                          │
│                                                                                              │
│                                                                                              │
│                                                                                              │
│                                                                                              │
F                                                                                              F
o                                      Manu Singh                                              o
l                                      1 Fairlawn Parkway                                      l
d                                      Rye Brook, NY 10573                                     d
│                                                                                              │
3                                                                                              4 
r                                                                                              t 
d                                      RE: Grades v2.51                                        h 
│                                                                                              │ 
│                                                                                              │
│___________________________________FOLD HERE 2nd______________________________________________│
                                                                                              



                   Fold where indicated and tape or staple ends. 


           If not Registering, and you desire a  response, please 
               enclose a self-addressed stamped envelope.














```
{% endraw %}

## PRODUCTS.TXT

{% raw %}
```
---------------------------------------------------------------------------
               Current and Planned Products from SupremeSoft(Tm)
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


     B.A.M Reporter:  (Projected Summer 1989)

           As all B.A.M. user's will attest to, B.A.M.'s reporting
     facilities leave something to be desired when it comes to a stand
     alone Report utility, and most certainly when it comes to
     Printing out your Transactions. This program will be a replacement
     for B.A.M's stand alone REPORT program, and of course the internal
     print routines.


     B.A.M. Deluxe: (Projected Summer 1990)

           We will be working with Manu Singh to develop a new version of
     Manu Singh's highly successful Bank Account Manager. New
     features include:

           1) An interface that is consistent with the interface
     being developed for Grades v2.60

           2) Incorporation of our own B.A.M. Utilities in
     replacement of the current B.A.M.'s versions.

           3) A different approach to Checking Account Maintenance
     than the current approach B.A.M. takes.


-------------------------------- SETATTR -----------------------------------

     Set Attribute:  (As of 05/01/89)

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

--------------------------------- GRADES -----------------------------------

     Grades v2.60:  (No known release date)

           Many of you will recognize this program. Also written by Manu 
     Singh, we will be working in conjunction with the author in the 
     development of this new version. The new release will be completely 
     different from the current program. New features include: 

           1) A completely new interface which is much easier to use
     than the current program's.

           2) The ability to include test scores within a given
     class record, and being able to "predict" your grade given
     this information.

           3) Ability to maintain a number of class record files, for
     all the students in a household.

           4) Instant access to the computer G.P.A. at a touch of a key.
          
--------------------Move/Rename/Delete/Copy Utilities-----------------------

       Move/Rename/Copy/Delete:  (Projected Summer 1989) 

            This set of programs will be small command line utilities 
       which will  allow you to:
       
             1) Move files. Copy and Delete in one operation. Wildcards 
       obviously accepted and used. You may move across subdirectories 
       etc. 
       
             2) Copy files Globally using wildcards etc. Much easier and 
       better than DOS's Copy command.
              
             3) A global Rename function. Useful if you have to rename a 
       number of files in one shot. 
       
             4) Global Delete. Have you ever wanted to type DEL *.BAK and 
       have all of your .BAK files deleted from the disk? This program 
       would let you do this. 
       
          These Utilities would work like our current Set Attribute 
       program. They can work either globally or locally, and reports, 
       prompting is available. 
----------------------------------------------------------------------------
          
           We sincerely hope you will find our products useful and 
     will continue to use them in the future.  In order for us to
     keep in touch with you, please drop us a line with any questions
     or comments you may have.  Thank you.


     Please address all correspondence to:


                           SupremeSoft
                           7 Watson Avenue
                           Binghamton, NY 13901

-------------------------------------------------------------------------
-------------------------------------------------------------------------



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
    on any standard Epson(r) compatible printer. Just, fold where indicated, 
    enclose Check or Money Order, and send it along.



                        Thank You.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1258

     Volume in drive A has no label
     Directory of A:\

    CONVERT  EXE      8352   4-11-89  10:59a
    CONVERTG EXE      6816   4-11-89  10:59a
    FILES    ME        943   4-11-89  10:59a
    FIXES    TXT      2125   4-11-89  10:59a
    FUTURE   DOC      1183   4-11-89  10:59a
    GO       BAT        57   1-04-80   1:30a
    GOGRADES BAT        64   4-11-89  10:59a
    GRADES   DOC     24859   4-11-89  10:59a
    GRADES25 EXE     58437   4-11-89  10:59a
    INSTALL  EXE     29168   4-11-89  10:59a
    KEYCHART          8454   4-11-89  10:59a
    ORDERBAM DOC      4228   4-11-89  10:59a
    ORDERFRM TXT      4351   4-11-89  10:59a
    PRODUCTS TXT      6150   4-11-89  10:59a
    READ     ME1       709   4-11-89  10:59a
    READ     ME2       689   4-11-89  10:59a
    READ     ME3      1091   4-11-89  10:59a
    READ     ME4      1027   4-11-89  10:59a
    READGR   BAT        23   4-11-89  10:59a
    REGISTER DOC      1166   4-11-89  10:59a
    REPORT   EXE     58928   4-11-89  10:59a
    UPDATE25         37767   4-11-89  10:59a
    UPDATEG  DOC      6786   4-11-89  10:59a
    FILE1258 TXT      1431   6-16-89   9:17a
           24 file(s)     264804 bytes
                           40960 bytes free
