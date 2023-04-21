---
layout: page
title: "PC-SIG Diskette Library (Disk #1296)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1296/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1296"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FASTBUCKS 2 OF 2 (ALSO 855)"

    FASTBUCKS is a completely menu-driven home-finance program that is easy
    to understand and operate.
    
    FASTBUCKS supports up to 25 accounts each in checking, savings, charge
    accounts, and 25 cash sheets. With each account you can update, list,
    reconcile, balance, or edit a record. List an account by month, year,
    or expense category. The program offers a graphic illustration of your
    expenses for a certain year, and shows your overall average
    expenditures.
    
    Account listings can be displayed or printed. When listing a checking
    account and overall balance, the program will immediately show you if a
    check has bounced by displaying its line in inverse print. Each line
    gives the date, description, whether or not it is a credit or debit, and
    total balance to date.
    
    Use the recursive budget model to create a workable family budget.
    Calculate total income, for both the pay period and the year, and
    compute your "disposable" income. Allot transactions to your various
    expense categories or to your savings account.
    
    There is a financial calculation section to calculate item
    depreciation, investments and loan information, plus a complete loan
    amortization generator.
    
    Change initialization parameters for display type, printer, drive, data
    file path, and expense categories as desired. FASTBUCKS presently
    supports 141 printers and a user configuration, if your printer is not
    presently supported.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ASP.DOC

{% raw %}
```
    Dennis Lozen  is a Member  of The Association  of Shareware Professionals
(ASP).   ASP has established stringent standards  for its members.  ASP wants
to  make sure that the shareware principle works  for you.  If you are unable
to  resolve a problem with an ASP  member (other than technical support), ASP
may be able to  help.   Please write  to the  ASP Ombudsman  at PO  Box 5786,
Bellvue, WA 98006"
```
{% endraw %}

## FILE1296.TXT

{% raw %}
```
Disk No: 1296
Disk Title: FastBucks 2 of 2 (855 also)  (Disk 2 of 2)
PC-SIG Version: S1.5

Program Title: FastBucks
Author Version: 4.10
Author Registration: $47.75
Special Requirements: Two floppy drives. Hard drive recommended.

FASTBUCKS is a completely menu-driven home-finance program that is
easy to understand and operate.

FASTBUCKS supports up to 25 accounts each in checking, savings, charge
accounts, and a cash sheet.  With each account you can update, list,
reconcile, balance, or edit a record.  List an account by month, year,
or expense category.  The program offers a graphic illustration of your
expenses for a certain year, and shows your overall average
expenditures.

Account listings can be displayed or printed.  When listing a checking
account and overall balance, the program will immediately show you if a
check has bounced by displaying its line in inverse print.  Each line
gives the date, description, whether or not it is a credit or debit, and
total balance to date.

Use the recursive budget model to create a workable family budget.
Calculate total income, for both the pay period and the year, and
compute your ``disposable'' income.  Allot to your various expense
categories or to your savings account.

There is a financial calculation section to calculate item depreciation,
investments and loan information, plus a complete loan amortization
generator.

Change initialization parameters for display type, printer, drive, data
file path, and expense categories as desired.  FASTBUCKS presently
supports 141 printers and a user configuration, if your printer is not
presently supported.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## FILES.TXT

{% raw %}
```

Disk 1

FB       DTA           FastBucks Data File
FB       EXE           FastBucks Program
FB       OVR           FastBucks Program Overlay file
INSTALL  EXE           FastBucks Install program
README   DOC           Information about documantation

Disk 2

ASP      DOC           Association Of Shareware Professionals file
ACTS     DAT           FastBucks Account data file
CHK0     DTA           FastBucks Sample checking account data
CHK0     NTE           FastBucks Sample data Note file
CHK0     SPL           FastBucks Sample data Split account data file
INSTALL  DOC           Documentation for Installing FastBucks 4.0
MANUAL   DOC           Complete FastBucks user Manual
FILES    TXT           This file.
README   NOW           General Information about FastBucks and liscense.
WARNING  DOC           Warning about FastBucks 4.0 and 3.1x compatability
WHATS    NEW           New FastBucks 4.10 Features.
ASP      BAT           Batch file Prints ASP.DOC
INSTDOC  BAT           Batch File Prints Install.doc
FILES    BAT           Batch File Prints this file
NEW      BAT           Batch File Prints New Program Features
WARNING  BAT           Batch file Prints Warning.doc
README   BAT           Batch file prints Readme.doc
MANUAL   BAT           Batch file prints Operator Manual 
FBFILES  EXE           Program to set your Config.sys file.
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
                      FastBucks INSTALL Documentation
                    -----------------------------------


System Requirements:
                     Memory : 196K Free user RAM
                     Storage: a minimum of 2 360K floppy drives
                              although a Hard disk is strongly recommended.

                     Monitor: MDA,CGA,EGA,PGA and just about anything else
                              I've forgotten.

                     CPU    : 100% compatible IBM XT/AT or 386

                     DOS    : DOS version 2.0 of higher.

                    CONFIG.SYS FILE MUST CONTAIN THE STATEMENTS

                    FILES=20
                    BUFFERS=20

                    THIS FILE MUST BE ON YOUR SYSTEM "BOOT" DISK WHEN
                    YOUR COMPUTER IS BOOTED UP.

                    OTHERWISE FastBucks will refuse to run.

    Note: A utility program  FBFILES.EXE has  been provided  on this  disk to
create a CONFIG.SYS file  on your  DOS boot  disk if  you don't  have one,and
modify your files= statement if it has less than 20 files allocated.  If more
than 20 files have been allocated to your system FBFILES will not change your
Files= Statememt.   If no files  statement exists, one will  be added to your
CONFIG.SYS file.

To use FBFILES.EXE:

Place the Sample data/Documantation diskette into drive a:
Type:  a:Fbfiles <return>

Re-Boot your system with your new Config.sys file.


Now proceed with the program installation process.

Installing FastBucks on a two floppy drive system:
===============================================================================

************************************************************
***                                                     ****
*** WARNING MAKE SURE YOUR SYSTEM HAS BEEN BOOTED WITH  ****
*** FILES = 20 AND BUFFERS = 20 IN YOUR CONFIG.SYS FILE ****
*** BEFORE RUNNING INSTALL                              ****
***                                                     ****
***        (You may use FBFILES.EXE to do this)         ****
***                                                     ****
************************************************************


------------------------ 
First time Installation:
------------------------

     Format  Two floppy diskettes
     Label the first diskette "FastBucks Program".
     Label the second diskette FastBucks Data.

     Insert the Program/Install diskette into Drive A:
     Type a: <return>
     Type Install <return>

     Carefully follow the prompts the install program gives you.

     If you don't want the sample data installed onto your system
     answer "N" when the install program asks you about them.
     It will then skip copying your data files to drive B: and
     initialize it for "zero" accounts.

Note:
     It takes the install program a fairly long time to copy the sample
     data files to drive b:. As long as "both" disk drives are flashing
     don't be concerned. The program is "not" hung up. Just relax and get
     a cup of coffee.

----------------------------------------------------------------------------
Users that have been using earlier versions of FastBucks 3.10 - 3.18
----------------------------------------------------------------------------

************************************************************
***                                                     ****
*** WARNING MAKE SURE YOUR SYSTEM HAS BEEN BOOTED WITH  ****
*** FILES = 20 AND BUFFERS = 20 IN YOUR CONFIG.SYS FILE ****
*** BEFORE RUNNING INSTALL                              ****
***                                                     ****
***        (You may use FBFILES.EXE to do this)         ****
***                                                     ****
************************************************************

     Format two Floppy diskettes.
     
    If you have been  using FastBucks  on a  single drive  system you  are no
longer allowed to do so: The program has grown so large that there is no room
left on the diskette for data files.

    For the same reason the FastBucks program disk CANNOT be formatted as a
"Bootable"  system disk.  There  just isn't enough room on the disk for the 
operating system and FastBucks program.

     
     Copy The following files from your old FastBucks 3.18 program disk
to one of the blank diskettes.
    
    Fb.dta
    FB.Com
    Fbconf.dat

    The easiest way to do this is to place your old program disk into drive
a: and the blank diskette into drive b:

Type Copy a:fbconf.dat  b: <return>
Type Copy a:fb.com b: <return>
Type Copy a:fb.dta b: <return>


remove the diskette in drive a: and place it in a safe place: You won't be
needing it again.

remove the diskette in drive b: and label it "FastBucks Program".

Label the second Blank diskette "FastBucks Data".         

it is not necessary to copy anything to this diskette:

   Install the Program/Install diskette into drive a:
   Type a: <return>
   Type Install <return>

    Carefully read and follow the prompts that Install gives you.It will read
your  program diskette and decide whether it needs to convert your data files
to  the New FastBucks 4.0 data structure.   it will then prompt you to insert
your  original data diskette into drive a:  and the blank diskette into drive
b: the  converted data files will be placed  onto drive b: and the "original"
data files will remain untouched.

=======================================================================
HARD DISK USERS:
=======================================================================

************************************************************
***                                                     ****
*** WARNING MAKE SURE YOUR SYSTEM HAS BEEN BOOTED WITH  ****
*** FILES = 20 AND BUFFERS = 20 IN YOUR CONFIG.SYS FILE ****
*** BEFORE RUNNING INSTALL                              ****
***                                                     ****
***        (You may use FBFILES.EXE to do this)         ****
***                                                     ****
************************************************************

---------------------------
First Time Installation:
---------------------------
Insert the Program/Install diskette into drive A:

Type a: <return>

    Carefully follow the prompts that the install program gives you.  Install
will create a  directory <drive>:\Fbucks if  you respond with  the same drive
designation for <drive> for your data files a subdirectory will be created as
<drive>:\FBucks\FBdata all  of  your  data  files  will  be  placed  in  this
subdirectory.

    If  you don't want the sample data  installed onto your system answer "N"
when the install program asks you about them.  It will then skip copying your
data files to your data directory and initialize it for "zero" accounts.

-----------------------------------------------------------------------------
Users that have been using earlier versions of FastBucks 3.10 - 3.18
-----------------------------------------------------------------------------
************************************************************
***                                                     ****
*** WARNING MAKE SURE YOUR SYSTEM HAS BEEN BOOTED WITH  ****
*** FILES = 20 AND BUFFERS = 20 IN YOUR CONFIG.SYS FILE ****
*** BEFORE RUNNING INSTALL                              ****
***                                                     ****
***        (You may use FBFILES.EXE to do this)         ****
***                                                     ****
************************************************************

    If you have been storing your data on a Floppy drive:

    Format a fresh diskette and label it FastBucks Data.

    Your  Program files for FastBucks 3.10-3.18  "MUST" reside in a directory
named <drive>:\Fbucks.

    If you have  been saving  your data  on your  "hard disk"  your data files
"MUST" reside in a directory <drive>:\Fbucks\Data.

    Install looks  for your program files and  data files in these respective
directories.

    If your program files are not in the directory <drive>:\Fbucks place them
there before proceeding.

    If you  have been saving your  FastBucks data on your  hard disk and your
data  files are  not in  the <drive>:\Fbucks\Data  directory then  place them
there before proceeding.

    Insert the program/install diskette into drive a:
 
    Type a: <return> 
    Type Install <return>
           
    Carefully follow the prompts that the install program gives you.

    Install will  place  the  converted  data files  into  a  directory  named
<drive>:\Fbucks\fbdata.   If you have been using  a floppy disk for your data
storage the converted  data will  be placed  on the  "Blank" floppy  that you
prepared earlier.  In any case your original data will remain untouched.

NOTE:

If you get a "TOO MANY FILES OPEN ERROR" when running FastBucks edit your 
CONFIG.sys file to read:

Files=20
Buffers=20

==============================================================================

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
                         
  
  
  
                  F A S T B U C K S  
  
  
  
  
  
                       Version 4   
  
                          By:   
  
                 SOFTWARE EXPRESSIONS   
  
  
  
  
  
  
  
  
  
-----------------------------------------------------   
  
  
  
                       FastBucks  
                             
                             
                   SHAREWARE USER'S  
                             
                        MANUAL  
  
  
-----------------------------------------------------   
  
  
  
  
          Software written and published by:  
  
                    Dennis C. Lozen  
                 SOFTWARE EXPRESSIONS  
                    P.O. Box 301002  
               Houston, Texas 77230-1002  
                    (713) 541-3063  
  
  
  
  
                  Manual written by:  
  
                    Pahl B. Meyers  
                    WORD  EXCHANGE  
                    Pearland,Texas  
  
  
  
  
  
                        NOTICE  
  
SOFTWARE EXPRESSIONS reserves the right to make im-  
provements in the program at any time without any  
notice.  
                                                      
      DISCLAIMER OF ALL WARRANTIES AND LIABILITY  
      ------------------------------------------  
      Software Expressions makes no warranties,  
      either expressed or implied, with respect  
      to the software described in this manual,  
      its quality, performance, merchantability,  
      or fitness for any particular purpose.   
      Software sold by Software Expressions is  
      sold or licensed "as is". The entire risk  
      as to its quality and performance is with  
      the buyer.  Should the programs prove  
      defective following their purchase or  
      registration, the buyer (not Software  
      Expressions, its distributor, or retailer)  
      assumes the entire cost of all necessary  
      servicing, repair, or correction and any  
      incidental or consequential damages.  In  
      no event will Software Expressions be  
      liable for direct, indirect, incidental or  
      consequential damages resulting from any  
      defect in the software, even if Software  
      Expressions has been advised of the  
      possibility of such damage.  
      ------------------------------------------  

This "on-disk" manual contains blank areas where illustrations 
are located in the typeset manual for registered users.  
The illustrations could not be included in this "on-disk" manual 
because it is intended to be printed on the shareware user's 
printer for his or her temporary use until registration.

  
  
Copyright 1986,87,88 by Software Expressions.    
            All rights reserved.     
  
  
                      TRADEMARKS   
  
  
FastBucks is a registered trademark of SOFTWARE  
EXPRESSIONS.  
  
IBM, PC, PC/XT, PC/AT are registered trademarks of  
International Business Machines Corporation.  
  
Microsoft Mouse is a registered trademark of Microsoft  
Corporation.  
  
Mouse Systems is a trademark of the Mouse Systems  
Corporation.  
  
  
  
                         i  
  
                  TABLE of CONTENTS  
  
Contents                                          Page  
------------------------------------------------------  
  
  
Notice ..........................................   ii  
Trademarks ......................................  iii  
  
  
SECTION 1 - INTRODUCTION   
Introduction . . . . . . . . . . . . . . . . . . . 1-2  
Hardware Requirements. . . . . . . . . . . . . . . 1-3  
Features . . . . . . . . . . . . . . . . . . . . . 1-4  
  
  
SECTION 2 - GETTING STARTED   
Preparation. . . . . . . . . . . . . . . . . . .  2- 2  
  Installation . . . . . . . . . . . . . . . . .  2- 2  
  Test Drive . . . . . . . . . . . . . . . . . .  2- 2  
  Using a Two Floppy Drive System. . . . . . . .  2- 3  
  Using a Hard Disk Drive System . . . . . . . .  2- 4  
  
Installation . . . . . . . . . . . . . . . . . .  2- 6  
  The Install Program. . . . . . . . . . . . . .  2- 6  
   Installation Procedure. . . . . . . . . . . .  2- 6  
   Your Monitor Type . . . . . . . . . . . . . .  2- 7  
   Previous Versions of FastBucks. . . . . . . .  2- 8  
   Drive For Program . . . . . . . . . . . . . .  2- 9  
   Drive For Data. . . . . . . . . . . . . . . .  2-10  
   Converting Earlier Versions of FastBucks. . .  2-11  
   First Installation of FastBucks . . . . . . .  2-12  
   Printer set-Up. . . . . . . . . . . . . . . .  2-13  
   Expense Categories Set-Up . . . . . . . . . .  2-14  
  
  
                          ii  
  
TEST DRIVE . . . . . . . . . . . . . . . . . . .  2-16  
  Test Drive - Try It Out! . . . . . . . . . . .  2-16  
   Start FastBucks . . . . . . . . . . . . . . .  2-16  
   The Main Menu . . . . . . . . . . . . . . . .  2-16  
   The Account Manager Menu. . . . . . . . . . .  2-16  
   Update Account. . . . . . . . . . . . . . . .  2-17  
   Listing an Account. . . . . . . . . . . . . .  2-19  
   Play Around With It . . . . . . . . . . . . .  2-20  
   Getting Out Of The Program. . . . . . . . . .  2-20  
   End Of The Test Drive!. . . . . . . . . . . .  2-20  
  
SECTION 3 - COMMANDS   
Introduction . . . . . . . . . . . . . . . . . . . 3-2  
Commands . . . . . . . . . . . . . . . . . . . . . 3-4  
  Commands From The Main Menu Screen . . . . . . . 3-4  
  Commands From The "Account Manager" Menu Screen. 3-6  
  Other Commands In "Account Manager". . . . . . . 3-8  
  Navigation Commands. . . . . . . . . . . . . . . 3-9  
  
SECTION 4 - ACCOUNT MANAGER   
Introduction . . . . . . . . . . . . . . . . . . .4- 2  
  Help Screen. . . . . . . . . . . . . . . . . . .4- 3  
  Display An Entry or Check. . . . . . . . . . . .4- 4  
  Account Selections . . . . . . . . . . . . . . .4- 5  
  Account Manager Menus "At-A-Glance". . . . . . .4- 7  
Account Maintenance. . . . . . . . . . . . . . . .4-10  
  Update Account . . . . . . . . . . . . . . . .  4-11  
    Check. . . . . . . . . . . . . . . . . . . .  4-13  
    Deposit. . . . . . . . . . . . . . . . . . .  4-19  
    Withdrawal . . . . . . . . . . . . . . . . .  4-20  
    Auto Teller. . . . . . . . . . . . . . . . .  4-21  
    Service Charge . . . . . . . . . . . . . . .  4-22  
    Interest Pmt . . . . . . . . . . . . . . . .  4-23  
  Reconcile Account. . . . . . . . . . . . . . .  4-24  
  Balance Account. . . . . . . . . . . . . . . .  4-25  
  Edit Account . . . . . . . . . . . . . . . . .  4-26  
    Search . . . . . . . . . . . . . . . . . . .  4-28  
    Edit . . . . . . . . . . . . . . . . . . . .  4-29  
      Change . . . . . . . . . . . . . . . . . .  4-30  
      Void . . . . . . . . . . . . . . . . . . .  4-32  
      Notes. . . . . . . . . . . . . . . . . . .  4-33  
    Purge. . . . . . . . . . . . . . . . . . . .  4-34  
  Account Status . . . . . . . . . . . . . . . .  4-35  
  
                         iii  
  
Account Reports/Graphs . . . . . . . . . . . . .  4-38  
  Expense Category Graphs. . . . . . . . . . . .  4-39  
  Monthly Cash Flow Graphs . . . . . . . . . . .  4-42  
  Yearly Cash Flow Graphs. . . . . . . . . . . .  4-42  
  Cash Flow Report . . . . . . . . . . . . . . .  4-42  
Account Listings . . . . . . . . . . . . . . . .  4-44  
  List All Entries . . . . . . . . . . . . . . .  4-45  
  List Outstanding . . . . . . . . . . . . . . .  4-47  
  List Expense Category. . . . . . . . . . . . .  4-48  
  List Tax Deductible. . . . . . . . . . . . . .  4-48  
  List ATM Transactions. . . . . . . . . . . . .  4-50  
  List Interest Payments . . . . . . . . . . . .  4-50  
  List Service Charges   . . . . . . . . . . . .  4-50  
  List Deposits. . . . . . . . . . . . . . . . .  4-50  
  
SECTION 5 - GLOBAL REPORTS--GRAPHS   
Introduction . . . . . . . . . . . . . . . . . .  5- 2  
  Tips . . . . . . . . . . . . . . . . . . . . .  5- 4  
Account Balances . . . . . . . . . . . . . . . .  5- 8  
Cash Flow Report . . . . . . . . . . . . . . . .  5-12  
Category Graphs. . . . . . . . . . . . . . . . .  5-16  
Cash Flow Graphs . . . . . . . . . . . . . . . .  5-20  
  
SECTION 6 - UTILITIES   
Introduction . . . . . . . . . . . . . . . . . .  6- 2  
Start New Account. . . . . . . . . . . . . . . .  6- 6  
Delete An Account. . . . . . . . . . . . . . . .  6-12  
Fix Data Files . . . . . . . . . . . . . . . . .  6-16  
Edit Account Name. . . . . . . . . . . . . . . .  6-20  
  
SECTION 7 - HOME BUDGET   
Introduction . . . . . . . . . . . . . . . . . .  7- 2  
Create New Budget. . . . . . . . . . . . . . . .  7- 6  
Update Old Budget. . . . . . . . . . . . . . . .  7-20  
  Change Income. . . . . . . . . . . . . . . . .  7-22  
  Change Deductions. . . . . . . . . . . . . . .  7-24  
  Change Fixed Expenses. . . . . . . . . . . . .  7-26  
  Change Variable Expenses . . . . . . . . . . .  7-28  
Print Old Budget . . . . . . . . . . . . . . . .  7-36  
  
                        iv  
  
SECTION 8 - CALCULATIONS   
Introduction . . . . . . . . . . . . . . . . . .  8- 2  
Investments. . . . . . . . . . . . . . . . . . .  8-10  
  Future value of one-time investment. . . . . .  8-12  
  Future value of regular deposits . . . . . . .  8-14  
  Deposits to create desired total value . . . .  8-16  
Depreciation . . . . . . . . . . . . . . . . . .  8-20  
  Annual depreciation rate . . . . . . . . . . .  8-22  
  Amount of depreciation . . . . . . . . . . . .  8-24  
  Salvage value. . . . . . . . . . . . . . . . .  8-26  
Loans. . . . . . . . . . . . . . . . . . . . . .  8-30  
  Regular payments on a loan . . . . . . . . . .  8-32  
  Last payment on a loan . . . . . . . . . . . .  8-34  
  Term of a loan . . . . . . . . . . . . . . . .  8-36  
  Remaining balance on a loan. . . . . . . . . .  8-38  
  Cost of borrowing. . . . . . . . . . . . . . .  8-40  
  Loan Amortization Schedule . . . . . . . . . .  8-42  
  
  
  
                      Page 1-1  
  
             SECTION 1 -- INTRODUCTION  
  
  
                     Page 1-2   
  
                    INTRODUCTION  
  
  
This FastBucks program provides you with a powerful,  
easy way to track your expenses in relation to your  
income, without taking up much of your time.  You can  
use it for budgeting, financial planning, and  
organizing your financial records.  You can organize  
and keep up with financial records that range from  
simply knowing how much spending cash is available for  
you, to evaluating your total expenditures for an  
entire year.  
  
FastBucks is a home finance package that is designed  
to be FAST and USER FRIENDLY.  It does this by using  
clear "plain language" MENUS for your operation with a  
minimum of typing on your part.  Its menus and  
messages are easy to understand, and they guide you at  
every step.  If you want, you can change any  
information that you've entered at any time.  
  
Even though you will see immediate benefits in using  
FastBucks, you can gain increasing benefits as the  
months go by.  After a year or so of using FastBucks,  
you can gain an even greater appreciation of its  
capabilities and speed because of its fast access to  
all the data files.  You can continue to load it up  
with lots of information on checking, savings, charge,  
and cash accounts and it will still give you amazingly  
fast access to all your information.  
  
                     Page 1-3  
  
                HARDWARE REQUIREMENTS  
  
You will need the following equipment to operate the  
FastBucks program:   
  
1. An IBM PC, PC/XT, PC/AT, or any compatible system  
   having at least 196K of Random Access Memory (RAM).  
  
2. PC-DOS or MS-DOS Disk Operating System (DOS)  
   version 2.0 or greater.   
  
3. Two floppy disk drives, or one floppy disk drive  
   with a hard disk.  
  
4. A monochrome or color monitor (CGA, EGA, VGA,  
   etc.).  Just about any monitor is OK.  
  
5. An 80 column printer (for printing reports) with  
   either a standard parallel or serial interface.  In  
   order to print FastBucks graphs, your printer must  
   be capable of printing the IBM Extended Character  
   Set.  FastBucks uses the Extended Character Set to  
   produce graphs on your screen.  It does not use the  
   graphics mode of your display adapter to do so.   
   This allows FastBucks to display graphs on your  
   screen even if your display adapter does not have  
   graphics capabilities.  (Some printers capable of  
   printing graphics require you to select "dip"  
   switches for graphic printing.  Consult your  
   printer's manual.)  
  
  
In addition to the FastBucks program disk, you will  
need at least one blank formatted disk to be used as  
your data disk.  Also I recommend that you provide  
another blank formatted disk to be used to make back-  
up copies of your data disk.   
  
  
                     Page 1-4  
  
                      FEATURES  
  
  
o FastBucks is completely menu driven.  It provides  
  the easiest and most convenient way for you to  
  operate the program, and with the least amount of  
  typing.   
  
o FastBucks avoids the use of accounting language.    
  It is designed for the non-accounting and  
  non-computer  oriented user.   
  
o FastBucks automatically creates data files and  
  automatically updates them.  You do not have to  
  remember to update or save information.   
  
o FastBucks supports up to twenty five of each type of  
  account: checking, savings, charge, and cash.   
  
o FastBucks can split expense categories for the same  
  transaction.  
  
o FastBucks provides printed Cash Flow and Account  
  Balance reports for all your accounts.  
  
o FastBucks differentiates between Business and  
  Personal accounts with separate expense categories  
  that can be customized to your needs.  
  
o FastBucks allows you to search for a specific entry.  
  
o FastBucks allows you to search for a specific check  
  by number, name, etc.  
  
o FastBucks provides complete transaction editing.    
  If a transaction amount is edited, FastBucks auto-  
  matically updates the account balance.   
  
o FastBucks has a recursive budget model that allows  
  you to create a budget for you or your family that  
  is easily workable.   
  
                     Page 1-5  
  
                      FEATURES  
  
o FastBucks has a separate financial calculation  
  section that allows you to calculate item deprecia-  
  tion, savings, and loan information.  You have the  
  ability to try "what-if" about costs and savings.   
  
o FastBucks uses error checking with automatic sorting  
  for a transaction date that is entered out of  
  sequence.  
  
o FastBucks includes a complete loan amortization  
  generator.  You can display schedules on either a  
  printout or the monitor.  (Requires 132 column  
  printer.)   
  
o FastBucks account listings can be displayed on  
  either a printer or a monitor.   
  
o FastBucks allows the user to change initialization  
  parameters for: monitor type, printer type, drive  
  selection, data file path, and expense categories.   
  
o FastBucks supports over 140 printers, including a  
  user configuration if your printer is not listed.   
  
                     Page 1-6  
  
                      FEATURES  
  
o FastBucks is solely user-supported.  It is not copy  
  protected.  You are encouraged to copy FastBucks,   
  give copies of the disk program to friends, or  
  distribute it, as long as there is no payment for  
  the program except to Software Expressions.   
  
  This way you are able to try out the program for a  
  while to determine if it is useful.  If you find  
  FastBucks useful, then you are expected to regis-  
  ter the program with Software Expressions.  A bound,  
  printed manual with a registered serial numbered  
  diskette will be sent to you.  
  
  For an additional registration fee the registrant  
  will receive FREE updates of FastBucks programs for  
  a period of one year from the date of registration.   
  
  All shipping and handling costs will be paid by  
  Software Expressions.   
  
  A rebate will be sent to the registered user for  
  each subsequent registration from copies of his or  
  her serial numbered distribution disk within one  
  year of the registration date.   
  
  Refer to the registration form included on the  
  distribution diskette for the registration, updates,  
  and rebate amounts.  
  
                      Page 2-1  
  
           SECTION 2 -- GETTING STARTED  
  
  
  
  
  
  
  
                     Page 2-2  
  
                     PREPARATION  
  
Installation ---------------------------------------  
             
Before you can use FastBucks, you need to install it  
so it will work properly on your computer.  
  
The built-in program "Install" does this for you.  It  
will ask you questions about your system.  It needs to  
know what kind of components it will have to work  
with: your monitor, your printer, the disk drives you  
will use.  It will suggest some built-in expense  
categories for both personal and business accounts,  
and allow you to change them to suit your  
requirements.  (Even though you have to do this for  
the first time installation, you can change any part  
of it at any time later.)  
  
When you receive your FastBucks distribution diskette,  
it contains the installation file.  When you command  
"install", the program asks you to configure FastBucks  
to your system.  
  
  
Test Drive ------------------------------------------  
             
The FastBucks distribution diskette contains some  
"sample" data files that you can use to see how it  
works and how it looks.  Once you have completed the  
installation, you can give FastBucks a "test-drive"  
before you have entered any of your own data.  Refer   
to "Test Drive - Try It Out", on the pages following   
the installation procedure.   
  
                     Page 2-3  
  
                     PREPARATION  
  
Using a Two Floppy Drive System ---------------------  
                                  
If you are going to use a two disk drive system, you  
will need to format two floppy diskettes with the DOS  
format.  Label one of them "FastBucks" and the other  
one "FastBucks Data".   
  
    NOTE!  Do NOT make the formatted diskettes as  
    "bootable" diskettes containing the DOS system  
    boot-up files.  There will not be enough room  
    left on a 360K byte diskette for all of the  
    necessary program files to run FastBucks  
  
  
                     Page 2-4  
  
                     PREPARATION  
  
  
Using a Hard Disk Drive System ----------------------  
                                 
If you are going to use a hard disk drive system, you  
will only need formatted diskettes for making back-up  
copies of your account data as you use FastBucks.    
  
However, if you wish, you can run FastBucks from your  
hard disk, but save your account data to a floppy  
diskette instead of the hard disk.  Since a floppy  
diskette spins slower than a hard disk, the program  
will appear to run slower when accessing information  
from the floppy diskette than it would from the hard  
disk.    
  
If you are going to run FastBucks from your hard disk,  
and save your data on a floppy diskette, then have a  
diskette formatted with the DOS format labeled  
"FastBucks Data".  
  
  
  
  
                     Page 2-5  
                       
                    INSTALLATION  
  
  
  
  
  
  
  
                     Page 2-6  
  
                    INSTALLATION  
  
The Install Program ---------------------------------  
                      
The built-in "Install" program on the FastBucks  
distribution disk will automatically copy the program  
files to your working disk.  It will do this for you  
automatically.  
  
- It will copy the program files from the original  
  program disk in Drive A, to your working diskette or  
  your hard disk.  If you are using a hard disk it  
  will create the required directories and sub-  
  directories.  
  
- It will copy some "example" data files if you  
  request them.  If you have been using an earlier  
  version of FastBucks it will convert your old data  
  files to the new FastBucks data format.  
  
    NOTE!  If you have been using an earlier  
    version of FastBucks on your hard disk,  your  
    program files MUST reside in a directory named  
    "C:\FBUCKS" for the install program to be able  
    to find them and be able to convert your old  
    data files to the new FastBucks format.   
    Otherwise it will decide this is a "new"  
    installation, and will only copy the program  
    and example data files over to your hard disk.  
  
Installation Procedure ------------------------------  
                         
1. Insert the FastBucks Program Disk in Drive A.    
  
2. Enter "A" and press RETURN.  
  
3. Enter "INSTALL" and press RETURN.  
     
4. You will be prompted with directions on the screen.   
   Follow the directions to install FastBucks on your  
   system.   
  
  
                        Page 2-7  
  
                       INSTALLATION  
  
Your Monitor Type -----------------------------------  
                    
If the install program detects a monitor graphics  
board it will ask you if you have a color monitor on  
your system:  
  
        "A color board has been detected !!   
         do you have a color monitor?      "  
  
- Enter "Y" (for Yes) if you DO have a color monitor.   
  It will configure FastBucks for color monitor  
  operation.  This configuration remains in effect  
  each time you start FastBucks.  If you want to  
  change this configuration at a later time, refer to  
  the section on "Commands".  
  
- Enter "N" (for No) if you have a monochrome monitor.   
  This will re-map all color information to "black and  
  white" on a monochrome monitor.  
  
  
  
  
                     Page 2-8  
  
                    INSTALLATION  
  
Previous Versions of FastBucks ----------------------  
                                 
After the monitor type is configured, the install  
program will display this notice:  
  
          "**  WARNING  **  WARNING  **  
  
           If you have previously  been  
           using  earlier  versions  of  
           FastBucks,  you  should have  
           made  a backup  of your data  
           and program files...          
  
           Do you want to proceed (Y/N)?"  
  
  
- Enter "N" (for No) (or any other key) if you have  
  NOT made back-up copies.  The installation program  
  will abort so you can make back-up copies of your  
  existing files.  You can then start the Install  
  program again to configure FastBucks to your system.  
  
  
- Enter "Y" (for Yes) if you HAVE already made back-up  
  copies, and want to continue with configuring  
  FastBucks to your system.  
  
  
  
  
  
  
  
                     Page 2-9  
  
                    INSTALLATION  
  
Drive For Program -----------------------------------  
                    
If you answered "Y" to continue the installation, the  
program will proceed to ask you what drive you want to  
run the FastBucks program on:  
  
         "Enter the drive you want to  
          run FastBucks program files  
          on.                          
  
          Dual floppy systems select A:  
  
              Enter your choice A:    "  
  
  
Enter the letter of the drive you want to run  
FastBucks on.    
  
- If you select a drive letter that is a hard disk,  
  the install program will automatically create a  
  directory on your hard disk named "\FBUCKS".  
  
- If you select a drive letter that is a floppy drive,  
  the install program will not create a directory  
  since only the program files will be placed on that  
  diskette.  
  
  
  
  
  
  
  
  
                    Page 2-10  
  
                    INSTALLATION  
  
Drive For Data --------------------------------------  
                 
The install program will proceed to ask you what drive  
you want to keep your FastBucks data files on:  
  
         "Enter the drive you want to  
          run FastBucks data files on.  
  
          Dual floppy systems select B:  
  
              Enter your choice B:     "  
  
  
Enter the letter of the drive you want to save your   
FastBucks data files on.    
  
- If you select a drive letter that is a hard disk,  
  the install program will automatically create a sub-  
  directory (to your program directory on your hard  
  disk) named "\FBUCKS\FBDATA" to store your data  
  files in.  
  
- If you select a drive letter that is a floppy drive,  
  the install program will not create a sub-directory  
  since only the data files will be placed on that  
  diskette.  
  
  
The install program will then ask you if your  
selections are correct.  
  
- Enter "N" (for No) if you want to change any of the  
  entries for drive selection.  After you change them  
  it will ask you again if they are correct.    
  
- Enter "Y (for Yes) if the selections are correct.   
  The install program will proceed with the  
  installation process.  
  
  
                    Page 2-11  
  
                    INSTALLATION  
  
Converting Earlier Versions of FastBucks ------------  
                                           
If the install program determines that you already  
have an earlier version of FastBucks installed on your  
system, it will display:  
  
          "FastBucks is already installed  
           on selected drive.  
  
           The original FastBucks program  
           set-up and data files will be  
           preserved  
  
           Hit any key to continue.       "  
  
- Earlier versions on a hard disk:  
  If your existing FastBucks files are on a hard disk,  
  the installation program will look for a directory  
  named "\FBUCKS".  If it finds the existing file to  
  start FastBucks in that directory it will determine  
  the version you have been using.  If it is an  
  earlier version than this one you are installing, it  
  will convert your old program files and your old  
  data files.  The new program files will reside in  
  the directory "\FBUCKS" and the converted data files  
  will be places in the sub-directory  
  "\FBUCKS\FBDATA".    
  
- Earlier versions on a two floppy drive system:  
  If your existing FastBucks files are on a diskette  
  in drive A, the installation program will look for   
  the existing file to start FastBucks to determine  
  the version you have been using.  If it is an  
  earlier version than this one you are installing, it  
  will convert your old program files and your old  
  data files.  The new program files will reside in  
  the diskette in drive A, and the converted data  
  files will be places on a diskette in drive B.  
  
                    Page 2-12  
  
                    INSTALLATION  
  
First Installation of FastBucks ---------------------  
                                  
- First Installation on a Hard Disk:  
  If the installation program determines that this is  
  a "new" installation, it will copy the FastBucks  
  program files to a directory named "\FBUCKS" and the  
  sub-directory "\FBUCKS\FBDATA" will be reserved for  
  your data files as they are accumulated.  
  
  
- First Installation on a Two Floppy Drive System:  
  If the installation program determines that this is  
  a "new" installation, it will copy the FastBucks  
  program files to drive A at this time.  Drive B will  
  be reserved for your data files as they are  
  accumulated.  
  
  
During a first-time installation, the install program  
will ask you if you want to copy the example data  
files contained on the distribution diskette.  You can  
use these example data files to see how FastBucks  
operates.  You can make a "Test Drive" using these  
files or just play around with them to see how the  
program works.  When you wish, you can erase these  
example data files from your disk to make more room  
for your own data files as you use FastBucks.  
  
- Enter "Y (for Yes) if you DO want to copy the  
  example data files.  When they are copied to your  
  disk, the program will proceed with the  
  installation.  
  
- Enter "N" (for No) if you do NOT want to copy the  
  example data files to your disk.  The installation  
  program will proceed with the installation.  
  
                    Page 2-13  
  
                    INSTALLATION  
  
Printer set-Up --------------------------------------  
                 
The install program will proceed to display a list of  
printer types.    
  
You can navigate the cursor to the selection of your  
printer description by using the cursor arrow keys and  
the PgUp and PgDn keys.  
  
Select the appropriate printer type by moving the  
highlighted cursor bar to it and press RETURN.  
  
- If you do not have a printer at this time, you can  
  select "No Printer on System" from the last page of  
  the printer selection list.  
  
  This selection will prevent the program from giving  
  an error message if you accidentally try to use a  
  "print-only" type of report without a printer  
  connected to your system.  
  
- If you are using 14 inch wide paper on your printer,  
  you can select "No printer set-up required".  
  
- If you cannot find your printer type in the printer  
  listing, you may use the "User Installed" definition  
  by entering "U".    
  
  The install program will ask you for the appropriate  
  decimal codes for normal 80 column operation, and  
  132 column operation, along with the name of your  
  printer.  
  
  
  
                    Page 2-14  
  
                    INSTALLATION  
  
Expense Categories Set-Up ---------------------------  
                            
The install program will proceed to the expense  
category set-up.    
  
It will display a list of suggested expense categories  
for use with a personal account.  If you have  
previously been using an earlier version of FastBucks,  
the install program will display your existing expense  
categories at this time.  It will ask you:  
  
   "Do you want to change any expense categories?"  
  
- Enter "Y" (for Yes) if you DO want to change any of  
  the expense category descriptions.  
  
  A highlighted cursor will appear over the first  
  expense category.  Use the Up or Down arrow keys to  
  move the highlighted cursor onto an expense category  
  you want to change.  Press the "Del" key to erase  
  the existing description.  Then type in your new  
  description and press RETURN.  Press "F10" when you  
  have the expense category descriptions the way you  
  want them.    
  
- Enter "N" (for No) if all the expense category  
  descriptions are acceptable to you.  
  
The install program will then display a list of  
suggested expense categories for use with a business  
account.  Use the same procedure as you did for  
personal expense category descriptions.    
  
If you do not have need of either the personal or  
business categories, you can ignore it by entering "N"  
to accept them as displayed.  
  
The install program is completed.  It will  
automatically load and run FastBucks.  If you want to  
try a "test drive" refer to the following pages.  
  
                     Page 2-15  
  
                      TEST DRIVE  
  
  
  
  
  
  
  
                    Page 2-16  
  
                     TEST DRIVE  
  
TEST DRIVE - TRY IT OUT! ----------------------------  
                           
Once you have completed the set-up of FastBucks to  
your system, you can give it a test drive to see what  
it looks like.  You can use the sample data files that  
came with the distribution diskette until you have  
generated some of your own.  When you are through  
using the sample data files, you can erase them from  
your disk if you want.  
  
In just a few minutes, you will have a good sense of  
the power and usefulness of the program.  
  
Remember, to start FastBucks you must be in the  
directory that the FastBucks program files are  
located.   
  
o Two floppy drive systems must have the FastBucks  
  program files on the disk in drive "A".   
  
o Hard disk systems will have the FastBucks program  
  files on the sub-directory C:\FBUCKS.   
  
  
Start FastBucks -------------------------------------  
Enter "FB" and press RETURN.  
  
The Main Menu ---------------------------------------  
The Main Menu appears.  Notice it gives you several  
options to select.    
  
The Account Manager Menu ----------------------------  
For this test, select the first option "Account  
Manager".  With the cursor on the "Checking Account"  
selection, press RETURN.  You will see the Account  
Manager's menus of options.  Notice the name of the  
financial institution and account number are listed in  
the upper portion of the screen.  
  
                    Page 2-17  
  
                     TEST DRIVE  
  
Update Account --------------------------------------  
  
To see how the "Account Maintenance" can help you  
manage a checking account, select "Update Account".   
Notice this option is already highlighted.  Press  
RETURN to select it.  
  
  
Type of transaction  
-------------------  
You have a choice of what kind of transaction to  
update.  Notice the cursor is resting on "Check".   
Lets use that one.  Press RETURN.  
  
  
Check number  
------------  
Now you're being asked to enter a check number.   
Notice the program has assumed you want to enter the  
next sequential number.  To accept the suggested check  
number, press RETURN.  
  
  
Check Date  
----------  
Now you need to enter the date of the check.  For now,  
accept the date suggested, press RETURN.  
  
  
Name the payee  
--------------  
Now you can enter the name of the payee.  You can make  
up any payee name you want for this test drive.  Type  
the name and press RETURN.  
  
  
                    Page 2-18  
  
                     TEST DRIVE  
  
  
Amount of the check  
-------------------  
How much do you want to pay this payee?  Type an  
amount and press RETURN.  
  
  
Expense category  
----------------  
Now you're asked to enter an expense category for the  
check.  To display the list of expense categories to  
pick from, press "F1".  Later you can customize these  
to your liking.  But for now, select an existing  
category by typing its number, and press RETURN.  
  
  
Tax deductible?  
--------------  
Is this a tax deductible expense?  Let's assume not.   
Press RETURN.  
  
  
Review your entries  
-------------------  
Now the program is giving you a chance to look over  
what you have entered to make sure it is correct.   
Let's assume it is.  Type "Y" and press RETURN.  
  
  
That's it!  
---------  
Notice the new check entry you've made has appeared at  
the end of the list, and the balance displayed at the  
bottom of the screen has been adjusted accordingly.  
  
                    Page 2-19  
  
                     TEST DRIVE  
  
Listing an Account ----------------------------------  
  
From the "Account Listings" menu, select "List All  
Entries".  Press RETURN.  
  
  
List by month  
-------------  
Now you can select whether you want to list the  
transactions for a month, a year, or the total file.   
Let's just list one month's transactions.  Select "By  
Month" and press RETURN.  
  
  
Which month?  
-----------  
Now you're being asked to enter the month you want  
listed.  (The last month recorded for this sample  
account is October, 1988.)  Type Oct88 and press  
RETURN.  
  
  
Review the displayed list  
-------------------------  
You should see a screen-full of entries.  Later, you  
can refer to other sections of this manual to identify  
what each column contains.  To display the next  
screen-full of entries, press any key.  
  
  
Continue  
--------  
Notice the message at the bottom of the screen  
indicates when the list is complete.  To continue,  
press any key.  
  
                    Page 2-20  
  
                     TEST DRIVE  
  
Play Around With It ---------------------------------  
  
Now that you have a basic idea of how you can list  
information with FastBucks, you might want to play  
around with other listings.  If you do, remember that  
the last month in this sample file is October, 1988.  
  
  
  
  
Getting Out Of The Program --------------------------  
  
That's about it for a brief test drive.  Feel free to  
play with the various options in FastBucks.  You can't  
hurt anything with the sample data files.  That's why  
they are there, for you to learn with.  
  
When you are ready to stop using the program, press  
"Esc" to back out until you have exited to the DOS  
prompt.  
  
  
  
End Of The Test Drive! ------------------------------  
  
  
                      Page 3-1  
  
                SECTION 3 -- COMMANDS  
  
  
  
  
  
  
  
  
                     Page 3-2  
  
                    INTRODUCTION  
  
This section provides an overview of the special  
purpose commands that can be used in conjunction with  
the menus of FastBucks.     
  
The function keys are used for most of the commands.   
Depending upon which screen of menus you have  
displayed, the same function keys will provide  
different options corresponding to your location in  
the program.  So, when you have the Main Menu screen  
displayed, the function keys do different things than  
when you have the Account Manager menu screen  
displayed.  
  
There are some other commands that do not use the  
function keys, and we'll describe those here, too.  
  
  
                     Page 3-3  
  
                      COMMANDS  
  
  
  
  
  
  
  
                     Page 3-4  
  
                      COMMANDS  
  
COMMANDS FROM THE MAIN MENU SCREEN ------------------  
  
  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
            From this screen, press "F1"  
            for commands available:  
  
                     Page 3-5  
  
                      COMMANDS  
  
F1 -- Help  
      With the Main Menus displayed, pressing "F1"  
      displays a list of command options available.  
  
F2 -- Re-Define Crt Type  
      This allows you to change your existing monitor  
      configuration you made in the original program  
      installation.  
  
F3 -- Re-Define Expense Categories  
      This allows you to change your existing expense  
      categories descriptions you selected in the  
      original program installation.  
  
F4 -- Re-Define Data File Drive/Pathname  
      This allows you to change your existing file  
      drive and pathname selections you made in the  
      original program installation.  
  
F5 -- Re-Define Printer Type  
      This allows you to change your printer selection  
      made in the original program installation.  
  
F6 -- Print FastBucks Registration Form  
      This allows you to print the form on your  
      printer to register FastBucks.  
  
F7 -- Toggle Program Introduction *   
      This toggles the FastBucks program introduction  
      screen to be OFF or ON.  When it is OFF, the  
      program starts with the Main Menu screen.  
  
F8 -- Turn Off Sales Pitch *  
      This deletes the registration appeal upon  
      exiting the program.  
  
F9 -- Display Registration Info *  
      This displays the name and address of the  
      individual to whom FastBucks is registered.  
  
      * For registered users only.  
  
                     Page 3-6  
  
                      COMMANDS  
  
COMMANDS FROM THE "ACCOUNT MANAGER" MENU SCREEN -----  
  
  
  
  
  
  
  
       

       (Illustration in registered manual)  
  
  
  
  
  
  
  
  
             From this screen, press "F1"  
             for commands available:  


       (Illustration in registered manual)  


  
                     Page 3-7  
  
                      COMMANDS  
  
F1 -- HELP  
      When the screen is displaying the main menu  
      categories of the "Account Manager", pressing  
      "F1"  displays a list of options available.  
  
  
F2 -- Account Listing To Printer  
      This will cause all listing performed with the  
      "Account Listing" menu to be directed to your  
      printer ("PRN") instead of the screen ("CON").   
      The status line at the bottom of the screen will  
      display "PRN" to identify the mode of listing.  
  
F3 -- Account Listing To CRT  
      This will cause all listings performed with the  
      "Account Listing" menu to be directed to your  
      screen "CRT" (identified "CON" on the status  
      line).  This is the default mode.   
  
F4 -- Display an Entry or Check  
      You can use this function to display an existing  
      entry or check.  
  
F5 -- List Notes "ON"  
      This function activates the Note of comments  
      function to be active.  (Also, "Alt-N" toggles  
      "Notes" ON and OFF.)  
  
F6 -- List Notes "OFF"  
      This switches the "Notes" function "OFF".  
  
  
  
                     Page 3-8  
  
                      COMMANDS  
  
OTHER COMMANDS IN "ACCOUNT MANAGER ------------------  
  
  
F1     Anytime the program prompts you to enter an  
       "Expense Category", you can press "F1" to  
       display all the available categories and their  
       numbers.  (This works anywhere the program asks  
       you to enter an expense category.)  
  
F2     You can split expense categories for the same  
       check by pressing "F2" at the "Enter expense  
       category" entry.  (This works for "Update  
       Account" and "Edit Account".)  
  
Alt-N  You can toggle "Notes" of comments for account  
       entries by pressing "Alt-N" before you go into  
       the individual entries.  (Works for "Update  
       Account" and "Edit Account".)  
  
Ctrl-P You can direct screen displays to be printed by  
       your printer by pressing "Ctrl-P".  
  
                     Page 3-9  
  
                      COMMANDS  
  
NAVIGATION COMMANDS ---------------------------------  
  
  
  
Esc    If you find that you have selected a menu entry  
       that you don't want to be in, just press the  
       "ESC" key to back out to the previous menu.   
       Then you can make a different selection of your  
       choice.  
  
Ctrl-E From almost anywhere, you can EXPRESS back to  
       the Main Menu screen by pressing "Ctrl-E".  
  
                      Page 3-10  




         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
                       Page 4-1  
  
             SECTION 4 -- ACCOUNT MANAGER  
  
  
  
  
  
  
  
  
                       Page 4-2  
  
                      INTRODUCTION  
  
The Account Manager gives you a selection of menus for  
operations that you can use to perform maintenance to  
your account, list and print graphs and reports of  
your account, and display and print listings of your  
account.  Just select the entry of your choice from  
the menus that are presented.   
  
Here are some tips while using the Account Manager  
functions:  
  
- If you find that you have selected a menu entry that  
  you don't want to be in, just press the "ESC" key to  
  back out to the previous menu.  Then you can make a  
  different selection of your choice.  
  
- From almost anywhere, you can EXPRESS back to the  
  Main Menu screen by pressing "Ctrl-E".  
  
- You can direct screen displays to be printed by your  
  printer by pressing "Ctrl-P".  
  
- You can toggle "Notes" of comments for entries by  
  pressing "Alt-N" before you go into the individual  
  entries.  
  
- You can split expense categories for the same check  
  by pressing "F2" at the "Enter expense category"  
  entry.  
  
- You can display all the expense categories available  
  by pressing "F1" at the "Enter expense category"  
  entry.  
  
                       Page 4-3  
  
                      INTRODUCTION  
  
                       HELP SCREEN  
                                                       
F1 -- HELP  
      When the screen is displaying the main menu  
      categories of the "Account Manager", "F1"   
      displays a list of options available:  
       F2 -- Account Listing To Printer  
       F3 -- Account Listing To CRT  
       F4 -- Display an Entry or Check  
       F5 -- List Notes "ON"  
       F6 -- List Notes "OFF"  
  
F2 -- Account Listing To Printer  
      This will cause all listing performed with the  
      "Account Listing" menu to be directed to your  
      printer ("PRN") instead of the screen ("CON").   
      The status line at the bottom of the screen will  
      display "PRN" to identify the mode of listing.  
  
F3 -- Account Listing To CRT  
      This will cause all listings performed with the  
      "Account Listing" menu to be directed to your  
      screen "CRT" (identified "CON" on the status  
      line).  This is the default mode.   
  
F4 -- Display an Entry or Check  
      You can use this function to display an existing  
      entry or check.  The features of this function  
      are explained in more detail on the next pages.  
  
F5 -- List Notes "ON"  
      This function activates the Note of comments  
      function to be active.  (Also, "Alt-N" toggles  
      "Notes" ON and OFF.)  
  
F6 -- List Notes "OFF"  
      This switches the "Notes" function "OFF".  
  
                       Page 4-4  
  
                      INTRODUCTION  
  
                DISPLAY AN ENTRY OR CHECK  
                                                       
You can display an entry or check for review.  The  
data will be displayed in the form of a check:  
  
- If the entry does not have a note attached, and is  
  not split for expense categories, only the check  
  format with its tax deductible status will be  
  displayed.  
  
- If the entry has a note of comments attached to it,  
  the note will be displayed below the check display.  
  
- If the entry has its expense categories split, the  
  split tabulation will be displayed below the check  
  display.  
  
- If the entry has a note attached to it and has its  
  expense categories split, both the note and the  
  split will be displayed below the check display.  
  
  
       (Illustration in registered manual)  
  
  
                       Page 4-5  
  
                     INTRODUCTION  
  
                  ACCOUNT SELECTIONS  
                                                       
The types of accounts you can select from the "Account  
Manager" menu are:  
  
     1--Checking Account        
  
     2--Charge Account          
  
     3--Savings Account         
  
     4--Cash Account            
  
Select the type of account you want to work on.  
  
Then, the "Account Manager" of FastBucks displays  
menus for you to perform various operations to your  
accounts:  
  
     - Account Maintenance   
  
     - Account Reports/Graphs  
  
     - Account Listings  
  
  
       (Illustration in registered manual)  
  
  
  
  
                       Page 4-6  
  
                     INTRODUCTION  
  
                  ACCOUNT SELECTIONS  
  
This is the arrangement of the display screen's Main  
Menus for working with your accounts:  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
The display is arranged in three main sections:  
  
Top of the display   
The selected account identification:  
- The name of the account    
- The account number   
- The current date.  
  
Middle of the display  
The Account Manager menu selections of options.  
- Account Maintenance  
- Account Reports/Graphs  
- Account Listings  
  
Bottom of the display  
The "Status Line"  
- List Device   
  "CON" for screen display ("CONsole")  
- Balance = $ XXXXX.XX  
  The current balance of the account  
- Last Entry = XX-XXX-XXXX  
  The date of the last entry to this account  
  
  
                       Page 4-7  
  
                     INTRODUCTION  
  
         Account Manager Menus "At-A-Glance"   
  
Account Maintenance   
 1--Update Account   
    - Check   
    - Deposit   
    - Withdrawal   
    - Auto Teller   
    - Service Charge   
    - Interest Pmt   
  
 2--Reconcile Account   
  
 3--Balance Account   
  
 4--Edit Account   
    - Search   
      - Check  
      - Entry  
    - Edit   
      - Change   
      - Void   
      - Notes  
    - Purge   
  
 5--Account Status   
    - Account Status Report  
      - Date Account Opened   
      - Date Last Updated   
      - Account Used For   
      - Total Account Entries   
    - Account Summary   
      - Earliest Outstanding Transaction  
      - Last Check Number Written  
      - Total Outstanding Credits  
      - Total Outstanding Debits   
      - Account Balance  
  
  
                       Page 4-8  
  
                     INTRODUCTION  
  
         Account Manager Menus "At-A-Glance"   
  
Account Reports/Graphs   
 6--Expense Category Graphs   
 7--Monthly Cash Flow Graphs   
 8--Yearly Cash Flow Graphs   
 9--Cash Flow Report   
  
Account Listings   
 A--List All Entries   
    - List by Month   
    - List by Year   
    - List Total File   
 B--List Outstanding   
 C--List Expense Category   
    - List by Month   
    - List by Year   
 D--List Tax Deductible   
    - List by Month   
    - List by Year   
 E--List ATM Transactions   
    - List by Month   
    - List by Year   
 F--List Interest Payments   
    - List by Month   
    - List by Year   
 G--List Service Charges   
    - List by Month   
    - List by Year   
  
                       Page 4-9  
  
                  ACCOUNT MAINTENANCE  
  
  
  
  
  
  
                       Page 4-10  
  
                 ACCOUNT MAINTENANCE  
  
The "Account Maintenance" section provides the means  
for you to perform these functions to your account:  
  
- Update your account  
  Use this function to enter: checks you have written,  
  deposits you have made, withdrawals made, automatic  
  teller machine transactions, service charges you  
  have incurred, or interest payments you have made.  
  
- Reconcile your account  
  Use this to identify checks that have been cancelled  
  by your bank.  
  
- Balance your account  
  Use this to have the program calculate an adjusted  
  balance.  
  
- Edit your account entries  
  Use this to make changes to existing entries in your  
  account.  You can have the program search and  
  display individual entries so you can edit them.   
  You can change any part of an entry, void an entry,  
  or attach a note of comments to any entry.  You can  
  also purge your account of all entries you have  
  voided.  
  
- Display the current status of your account.  
  You can display a tabulation of the current status  
  of your account.  
  
                       Page 4-11  
  
                  ACCOUNT MAINTENANCE  
  
                  1 -- UPDATE ACCOUNT  
   
Here is the procedure to update your account:   
   
1. Select from the "Account Manager" menu, the type of  
   account:   
  
     1--Checking Account        
     2--Charge Account          
     3--Savings Account         
     4--Cash Account            
   
2. Select the account name you want to update.  (If     
   you have only one account name in the files, the    
   program will skip this step.)    
   
3. Select: 1--Update Account.  
   
4. Select which part (of the selected account) you  
   want to update by placing the cursor on the type of  
   transaction you want to enter:   
  
              1--Check                                   
              2--Deposit                                 
              3--Withdrawal                              
              4--Auto Teller                             
              5--Service Charge                          
              6--Interest Pmt  
  
  You have these options available for update  
   entries:  
  
  - You can split expense categories for the same  
     Check, Withdrawal, or Auto Teller entry.  
  
  - You can attach a note of comments to each  
     transaction you enter.  
  
                       Page 4-12  
  
                  ACCOUNT MAINTENANCE  
  
                  1 -- UPDATE ACCOUNT  
  
  Split Expense Categories  
  To split expense categories for the same check:  
  - Press "F2" when the cursor is on the "Enter  
     expense category" entry.  The procedure is on the  
     following pages.  
  
  Attach a Note of Comments  
  To attach a note of comments to an entry:  
  - When the update selection list is displayed,  
    press "Alt-N" (or F5) to switch "Notes" ON.   
    ("Alt-N" toggles "Notes" ON and OFF, and "F5"  
    switches them ON and "F6" switches them OFF.)  
  
  
  "Check" is used to enter information about checks  
   you have written to the account.  
  
  "Deposit" is used to enter deposits you have made  
   to the account.   
  
  "Withdrawal" is used to enter withdrawals you have  
   made against the account.  
  
  "Auto Teller" is used to enter withdrawals against  
   the account you have made with an Automatic Teller  
   machine.  
  
  "Service Charge" is used to enter service charges  
   you have incurred against the account.  
  
  "Interest Pmt" is used to enter any interest  
   payments you have made for the account.  
  
                       Page 4-13  
  
                  ACCOUNT MAINTENANCE  
  
              1 -- UPDATE ACCOUNT - CHECK  
  
Reminder!:  
If you want to attach a note of comments to any of  
these transactions, this is the time to do it, before  
you select one to update.  Press "Alt-N" to activate  
the note option.  The status line at the bottom of the  
screen will display "Notes" to indicate the option is  
active.   
  
By the way, just because you activate the notes option  
does not mean you are forced to use it.  When the  
program asks you if you want to attach notes, you can  
answer "N" for No if you decide you don't want to  
attach a note at that time.  (You can also attach  
notes to existing entries by using the "Edit Account"  
option available from the "Account Maintenance" menu.)  
  
  
When you select "1--Check" it will display a  
tabulation for entering information about a check you  
have written:  
  
  "Enter check number                 :  XXXX  
   Enter date check written           :        
   Enter payee for check              :        
   Enter amount of check              :        
   Enter expense category             :        
   Is transaction tax deductible (Y/N)?       "  
  
  
                       Page 4-14  
  
                  ACCOUNT MAINTENANCE  
  
              1 -- UPDATE ACCOUNT - CHECK  
  
- "Enter check number"  
   FastBucks remembers the last check number you  
   entered, and automatically displays the next check  
   number at the cursor for your convenience.  If that  
   is the number you want to enter, just press the  
   RETURN key.  If you wish to enter a later check  
   number, just press the "Del" key to erase the  
   displayed number.  Then enter the number you wish  
   and press RETURN.   
  
  
- "Enter date check written"  
   The current date will be automatically displayed.   
   If you want to enter a previous date, just press  
   the "Del" key to erase the displayed date.  Then  
   enter the date of your check and press RETURN.  
  
   You can also over-type just the day or month or  
   year.  The "Tab" key will move the cursor from the  
   "day" field to the first letter in the "month"  
   field.  "Tab" once more moves the cursor to the  
   last digit in the "year" field.  "Shift-Tab" does  
   the reverse.  
  

- "Enter payee of check"
   Enter to whom the check is written.
   
     
- "Enter amount of check"  
   This is the TOTAL amount of the check.  (You can  
   split amounts of the total when you enter the  
   expense category in the next step.)  
  
                       Page 4-15  
  
                  ACCOUNT MAINTENANCE  
  
              1 -- UPDATE ACCOUNT - CHECK  
  
- "Enter expense category"  
   Enter the expense category you want recorded for  
   the amount of the check.    
  
      NOTE: You can split expense categories for  
      the same check by pressing "F2" at this  
      point.  Refer to "Splitting Expense  
      Categories" on the following pages for the  
      procedure.  
  
   If you do not remember the expense category  
   numbers, press "F1" to temporarily display all the  
   available category numbers.  Enter the appropriate  
   number and press RETURN.  
  
- "Is transaction tax deductible (Y/N)?"  
  
   Enter "N" if it is NOT tax deductible, "Y" if it  
   IS, and press RETURN.  
  
  Then, it will display all your entries and ask:  
  
       "Is the above correct (Y/N)?"  
  
   NOTE:  If your entry for "date check written" is  
   out of chronological sequence, the program will  
   flash a notice at this point.  This is to alert you  
   before the program re-sorts the entries.   
  
   Enter "N" for No if you want to change any of the  
   entries.  Use the cursor keys to move to any entry  
   you want to change.   
  
   Enter "Y" for Yes if you want to save the entries  
   as entered.  
  
                       Page 4-16  
  
                  ACCOUNT MAINTENANCE  
  
              1 -- UPDATE ACCOUNT - CHECK  
  
  -  If you did NOT toggle "Notes" to be "ON" at the  
     "Update Account" selection menu, the program will  
     save the entries and place you back on the update  
     selection list.  
  
  -  If you DID toggle "Notes" to be "ON", it will ask  
     you:  
            "Any Comments or Notes (Y/N)?"  
  
    -  Enter "N" for No if you do NOT want to attach a  
       note of comments to this entry.  The program  
       will save the entries and place you back on the  
       update selection list.  
  
    -  Enter "Y" for Yes if you DO want to attach a  
       note of comment to this entry.  A note window  
       opens in the display.  Type your comments about  
       the entry in the window.  If you change your  
       mind, you can press the "Esc" key and back out  
       of the note window without saving it or  
       attaching it.  Otherwise, move the cursor to a  
       blank line and press "F10" to save and attach  
       the note to the entry.  
  
       
       (Illustration in registered manual)  
 
  
       When you attach a note to an entry, it will be 
       indicated for that entry in the "Edit Account" 
       display by a symbol made of a column of three dashes.
  
  
                       Page 4-17  
  
                  ACCOUNT MAINTENANCE  
  
              1 -- UPDATE ACCOUNT - CHECK  
  
- Splitting Expense Categories  
  
     When you are ready to enter the expense category,  
     you can enter more than one expense category for  
     the same check:  
  
    -  Press "F2" to display the "Split Expense  
       Category" window:  

  
  
       (Illustration in registered manual)  
  
  
  
  -  Enter an expense category number.  If you do not  
     remember the expense category numbers, press "F1"  
     to temporarily display all the expense categories.  
     Press RETURN.  
  
  -  Enter the amount for the expense category.  Press  
     RETURN to move to the Tax Deductible column.  
  
  -  Enter "N" if the category is NOT tax deductible.   
     Enter "Y" if the category IS tax deductible.    
  
  -  You can enter other expense categories with their  
     amounts.  The amounts do not have to add up to  
     the total of the check.  However, the amounts can  
     not add up to more than the total of the check.   
     If you enter an amount that does, the program  
     will beep and erase the amount for your  
     correction.  
  
  
                       Page 4-18  
  
                  ACCOUNT MAINTENANCE  
  
              1 -- UPDATE ACCOUNT - CHECK  
  
  -  Then, it will display all your entries and ask:  
  
         "Is the above correct (Y/N)?"  
  
     From here the procedure is the same as described  
     on the previous pages for "Update Account -  
     Check" using one expense category (without  
     splitting).  
  
  
                       Page 4-19  
  
                  ACCOUNT MAINTENANCE  
  
             1 -- UPDATE ACCOUNT - DEPOSIT  
  
When you select "2--Deposit" it will ask you:  
  
 "Enter date of deposit       :XX-XXX-XXXX    
  Enter Description of deposit:
  Enter amount of deposit     :            "  
  
The current date will be automatically displayed.  If  
you want to enter a previous date, just press the  
"Del" key to erase the displayed date.  Then enter the  
date of your deposit and press RETURN.  
  
You can also over-type just the day or month or year.   
The "Tab" key will move the cursor from the "day"  
field to the first letter in the "month" field.  "Tab"  
once more moves the cursor to the last digit in the  
"year" field.  "Shift-Tab" does the reverse.  

Enter a description of the deposit for your records.  
When you enter a description, it will be prefixed with 
"<DEP>" in the record.  If you do NOT enter a description 
and just press RETURN, it will place "<Deposit>" in the
record.
  
Then enter the amount of your deposit and press  
RETURN.  
  
Then it will display your entries and ask:  
  
   "Is the above correct (Y/N)?"  
  
Enter "N" for No if you want to change any of the  
entries.  Use the cursor keys to move to any entry you  
want to change.   
  
Enter "Y" for Yes if you want to save the entries as  
entered.  You will be returned to the Update selection  
list.  
  
The procedure to attach a note is the same as for  
"UPDATE ACCOUNT - CHECK, Enter expense category".  
  
  
                       Page 4-20  
  
                  ACCOUNT MAINTENANCE  
  
           1 -- UPDATE ACCOUNT - WITHDRAWAL  
  
When you select "3--Withdrawal" it will ask you:  
  
"Enter date of withdrawal           :XX-XXX-XXXX  
 Enter reason for withdrawal        :             
 Enter amount of withdrawal         :             
 Enter expense category             :             
 Is transaction tax deductible (Y/N)?            "  
  
The current date will be automatically displayed.  If  
you want to enter a previous date, just press the  
"Del" key to erase the displayed date.  Then enter the  
date of your withdrawal and press RETURN.  
  
Enter a brief description of the reason for the withdrawal 
for your records.  When you enter a reason, it will be 
prefixed with "<WTH>" in the record.  If you do NOT enter
a description and just press RETURN, it will only place
"<WTH>" for the reason.
  
Then enter the amount of your withdrawal and press  
RETURN.  
  
The remainder of the entries for Withdrawal are the  
same as explained on previous pages for "UPDATE  
ACCOUNT - CHECK, Enter expense category".  
  
  
                       Page 4-21  
  
                  ACCOUNT MAINTENANCE  
  
           1 -- UPDATE ACCOUNT - AUTO TELLER  
  
When you select "4--Auto Teller" it will ask you:  
  
 "Is transaction a withdrawal or deposit (W/D)?"  
  
Enter "W" if it is a withdrawal.  The display and  
procedure are the same as explained on previous pages  
for "UPDATE ACCOUNT - WITHDRAWAL".  
  
  
Enter "D" if it is a deposit.  The display and  
procedure are the same as explained on previous pages  
for "UPDATE ACCOUNT - DEPOSIT".  (With the exception
that the entry for the reason will be displayed with
"<ETF>", with or without a description.)
  
  
  
                       Page 4-22  
  
                  ACCOUNT MAINTENANCE  
  
         1 -- UPDATE ACCOUNT - SERVICE CHARGE  
  
When you select "5--Service Charge" it will ask you:  
  
 "Enter date of service charge      :XX-XXX-XXXX  
  Enter reason for service charge   :             
  Enter amount of service charge    :            "  
  
The date, reason, and amount entries are the same as  
explained on previous pages for "UPDATE ACCOUNT -  
WITHDRAWAL".  (With the exception that the entry for 
the reason will be displayed with "<SVC>", with or 
without a description.)
  
  
                       Page 4-23  
  
                  ACCOUNT MAINTENANCE  
  
          1 -- UPDATE ACCOUNT - INTEREST PMT  
  
When you select "6--Interest Pmt" it will ask you:  
  
"Enter date of interest payment   :XX-XXX-XXXX  
 Enter amount of interest payment :            "  
  
The date and amount entries are the same as explained  
on previous pages for "UPDATE ACCOUNT - DEPOSIT".  
  
  
  
  
                       Page 4-24  
  
                  ACCOUNT MAINTENANCE  
  
                2 -- RECONCILE ACCOUNT  
   
Each entry that is still outstanding will be displayed  
one at-a-time.   
  
Enter "Y" (for Yes) if the entry has been cancelled.   
  
Enter "N"(for No) if the entry has NOT been cancelled.  
  
If you need to change the "Amount", you can press the  
left arrow key.  The cursor will move to the "amount"  
column.  Press the "Del" key to erase the existing  
amount.  Then enter the correct amount.  Press RETURN  
and the program will re-balance your account.  
  
After answering "Y" or "N" for each entry, the display  
will ask you:  
  
        "Enter Statement Balance $        "   
  
When you enter your statement balance the screen will  
display an updated account balance tabulation.  
  
      Total outstanding credits = $   0.00   
      Total outstanding debits  = $ 350.00   
      Statement balance         = $1041.00   
      Account balance           = $ 691.00   
      Adjusted balance          = $   0.00   
   
         ****** ACCOUNT BALANCES ******  
  
  
  
                       Page 4-25  
  
                  ACCOUNT MAINTENANCE  
  
                  3 -- BALANCE ACCOUNT  
  
The program will ask you:  
  
        "Enter Statement Balance $       "   
  
When you enter your statement balance the screen will  
display an updated account balance tabulation.  
  
      Total outstanding credits = $   0.00   
      Total outstanding debits  = $ 350.00   
      Statement balance         = $1041.00   
      Account balance           = $ 691.00   
      Adjusted balance          = $   0.00   
   
         ****** ACCOUNT BALANCES ******  
   
   
   
                       Page 4-26  
  
                  ACCOUNT MAINTENANCE  
  
                   4 -- EDIT ACCOUNT  
   
1. Select: 4--Edit Account.  
   
   The screen will display a listing of your entries.   
   The cursor will be in reverse video on the last  
   entry of the list.    
  
  
       (Illustration in registered manual)  
  
  
   There are some abbreviations in the heading:
   - Can = Cancelled (T = True, F = False)
   - Cat = Expense Category number
   - Ded = Tax Deductible (T = True, F = False)

   The symbol of a column of three dashes indicates that
   the entry has a "note" attached.
   
   Available commands are displayed at the bottom of  
   the screen:  
  
           "Search    Edit    Purge    Quit"  
  
   The capitalized first letter identifies the key to  
   press for the operation you want.  
  
   - "Search" is used to find the entry you want to  
      edit.  
  
   - "Edit" is used to change the information in a  
      selected entry.  
  
   - "Purge" is used to remove entries that have been  
      voided.  
  
   - "Quit" is used to back out to the "Account  
      Maintenance" menu.  
  
  
                       Page 4-27  
  
                  ACCOUNT MAINTENANCE  
  
                   4 -- EDIT ACCOUNT  
  
   You can select any entry within the list to be  
   displayed for editing in several convenient ways:  
  
  -  Up arrow/Down arrow keys:  
     Just move to the one you want to edit by moving  
     the cursor with the up or down arrow keys.  This  
     way is easy if you are selecting an entry on the  
     displayed screen.   
  
  -  PgUp/PgDn keys:  
     You can move a screen-full at a time by pressing  
     the PgUp or PgDn keys.  This way is easy if the  
     entry you want to select is within a few display  
     screens.  
   
  -  Home key:  
     You can move directly in one jump from the  
     current screen listing to the very beginning of  
     your entry listings.  This is a fast way to get  
     to the first listings.  
  
  -  End key:  
     You can move directly in one jump from the  
     current screen listing to the very end of your  
     entry listings.  This is a fast way to get to the  
     last, or current, listings.  
  
  
                       Page 4-28  
  
                  ACCOUNT MAINTENANCE  
  
              4 -- EDIT ACCOUNT - SEARCH  
  
  
You can have FastBucks search for and display an entry  
for editing when you don't know its location.  You can  
avoid scrolling up and down the listing blindly by  
using this search feature.  
  
How to use "Search":  
   
1. Press "S" for Search.                                
   The program will ask:  
  
   "Search for a Check or Entry number (C/E)?  "  
  
  -  Enter "C" for "Check" if you want to search by  
     locating a check number.  It will ask you:  
  
      "Enter Check number you wish to find   "  
  
     The entry with the check number you specified  
     will be displayed for editing.  
  
  
  
  -  Enter "E" for "Entry" if you want to search by  
     locating an entry.  It will ask you:  
  
      "Enter Entry number you wish to find   "  
   
     The entry of the number you specified will be  
     displayed for editing.  
  
  
                       Page 4-29  
  
                  ACCOUNT MAINTENANCE  
  
               4 -- EDIT ACCOUNT - EDIT  
  
How to use "Edit":  
  
1. Press "E" for "Edit".  
  
   The first field of the selected entry will begin  
   flashing to indicate which field is selected for  
   editing.  If you want to "Change" other fields, you  
   can select them by pressing the left or right arrow  
   keys.  If you want to attach a "Note", or "Void" an  
   entry, you can remain on the first field.  
  
   The command list at the bottom of the screen  
   changes to display the commands that you can use  
   for editing the selected entry:  
  
       Change    Void    Notes    Quit  
  
   The capitalized first letter identifies the key to  
   press for the operation you want.  
  
  - "Change" is used to make a field ready for  
     changing within a selected entry.  
  
  - "Void" is used to void a selected entry.  
  
  - "Notes" is used to make a note of comments to be  
     attached to a selected entry.  It can also be  
     used to change the comments of an existing note.  
     (A symbol of a column of three dashes will indicate 
     that the entry has a "note" attached.)


  - "Quit" is used to back out to the previous edit  
     menu.  "Quit" also saves the edited entries.  
  
     NOTE!:  You can press "Esc" to abort any changes  
     without saving them.  
  
  
                       Page 4-30  
  
                  ACCOUNT MAINTENANCE  
  
           4 -- EDIT ACCOUNT - EDIT - CHANGE  
  
How to use "Change".  
  
1. Move the flashing cursor to the field you want to  
   change by pressing the right or left arrow keys.  
  
2. Press "C" for "Change" (or press the RETURN key).  
  
   The field will stop flashing, and become steady to  
   indicate the field is able to be edited:  
  
3. You can re-type the field to edit in two ways:  
  
   - You can just over-type the old characters.  
  
   - You can press the "Del" key to erase all the 
     characters in the field.  Then type in the new 
     information.  
  
4. Press the RETURN key to stop the editing for that  
   field.  
  
5. If you want to change other fields within the same  
   entry, just move the cursor to that field and  
   repeat the procedure for changing a field.  
  
  
                       Page 4-31  
  
                  ACCOUNT MAINTENANCE  
  
           4 -- EDIT ACCOUNT - EDIT - CHANGE  
  
7. Press "Q" to "Quit" when you are completed with all  
   the fields you want to edit in the selected entry.  
   You will be returned to the display for selecting  
   an entry for editing.    
  
   NOTE!:  You can press "Esc" to abort any changes  
   without saving them.  
    
  -  If you want to edit another entry, just repeat  
     the procedure for locating the entry.  
  
  -  If you do not want to edit another entry, press  
     "Q" for "Quit".  You will be returned to the  
     "Account Maintenance" menu.  
  
  
  
  
                       Page 4-32  
  
                  ACCOUNT MAINTENANCE  
  
            4 -- EDIT ACCOUNT - EDIT - VOID  
  
How to use "Void".  
  
CAUTION!   
BE SURE YOU WANT TO VOID THIS ENTRY!  
YOU CAN BACK OUT!  
If you have NOT pressed "V" for "Void", just press "Q"  
for "Quit" (or "Esc").  Then you can select the  
correct entry for voiding.  
  
If you HAVE pressed "V", but NOT followed by "Q", you  
can press "Esc" and the entry will be restored.  
  
IF YOU WANT TO PROCEED WITH "VOID":  
These steps are required to void a selected entry.  
  
1. Void the entry.  
   - Press "V" for Void.    
     NOTE!:  You can restore the entry after pressing  
     "V" if you go no farther.  At this point, press  
     "Esc", and the entry will be restored.  
   
2. Press "Q" for Quit.  The entry will be shown as  
   "void" and the "amount" column will be changed to  
   "0.00", and the check number remains the same.  
  
Remember, once you have pressed "V" for "Void" AND "Q"  
for "Quit", the only way the entry can be restored is  
to use the "Edit" command and re-type each field wiped  
out by the void operation.  
  
  
  
                       Page 4-33  
  
                  ACCOUNT MAINTENANCE  
  
           4 -- EDIT ACCOUNT - EDIT - NOTES  
  
How to use "Notes".  
  
1. Press "N" for "Notes".  
  
   A window opens in the center of the display.    
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
   You can type comments about the entry in the  
   window.  This note will be attached to this entry,  
   and can be viewed in various listings.  
  
   - If you change your mind and want to abort the  
     note before saving it, press the "Esc" key.  
  
   - If you want to save the note, press the "F10"  
     key.  Then press "Q" to Quit.  The note will be  
     attached to that entry.  
  
     A symbol that is a column of three dashes will 
     appear to indicate that the entry has a "note" 
     attached.
  
                       Page 4-34  
  
                  ACCOUNT MAINTENANCE  
  
               4 -- EDIT ACCOUNT - PURGE  
  
NOTE!:  Normal accounting practices require that  
voided entries be kept on record.  However, if you  
want to remove specific entries that have been  
"voided", you can use the "Purge" option.  
  
  
How to "Purge" Checks:  
  
1. You must use the "Edit - Change" option to change  
   the check number field of a "Check" entry to minus  
   one ("-1").  
   - Press the "Del" key to erase the check number.  
   - Enter "-1" for the check number and press RETURN.  
  
2. Void the entry (if it is not already "Void").  
   - Press "V" for Void.    
  
3. Press "Q" for Quit.  The entry will be shown as  
   "void", the "amount" column will be changed to  
   "0.00", and the check number change to "-1".  
  
4. Press "P" for "Purge".  The screen displays:  
    "Purging files for voided entries ....."  
  
  
How to "Purge" entries that are not Checks:  
  
1. Void the entry (if it is not already "Void").  
   - Press "V" for Void.  
   - Press "Q" for Quit.  
   - Press "P" for Purge.  
  
After "Purging", the selected account will no longer  
contain voided entries, or checks that had their check  
numbers changed to "-1" and voided..  
  
  
                       Page 4-35  
  
                  ACCOUNT MAINTENANCE  
  
                  5 -- ACCOUNT STATUS  
  
How to display a current status of your account:  
  
1. Select: 5--Account Status.  
  
   The screen will display a tabulation of the current  
   status:  
  
    - Account Status Report   
      - Date Account Opened   
      - Date Last Updated   
      - Account Used For   
      - Total Account Entries   
  
    - Account Summary   
      - Earliest Outstanding Transaction  
      - Last Check Number Written  
      - Total Outstanding Credits  
      - Total Outstanding Debits   
      - Account Balance  
  

  
       (Illustration in registered manual)  
  
  
  
  
  
  
                       Page 4-36  
  
  
  
  
         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                       Page 4-37  
  
                 ACCOUNT REPORTS/GRAPHS  
  
  
  
  
  
  
                       Page 4-38  
  
                ACCOUNT REPORTS/GRAPHS  
  
The "Account Reports/Graphs" section provides the  
means for you to perform these functions to your  
account:  
  
  
  6--Expense Category Graphs (By category and year)  
  
  7--Monthly Cash Flow Graphics (By month)  
  
  8--Yearly Cash Flow Graphs (By year)  
  
  9--Cash Flow Report (Print-out by year)  
  
  
  
  
  
                       Page 4-39  
  
                ACCOUNT REPORTS/GRAPHS  
  
             6 -- EXPENSE CATEGORY GRAPHS  
  
1. Select: 6--Expense Category Graphs.   
   
   When you select "Expense Category Graphs", it will  
   ask you:  
  
             "Enter Expense Category    "               
  
  Enter the number corresponding to the expense cate-  
  gory that you want displayed as a graph.   
   
  If you cannot remember the numbers corresponding  
  with the expense category you want, press F1 to  
  temporarily display all the expense categories.   
   
   
   
   
  
       (Illustration in registered manual)  
   
   
   
   
   
   
   
   
  When you enter the expense category number, the  
  temporary display of the expense categories will  
  disappear.   
  
  
                       Page 4-40  
  
                ACCOUNT REPORTS/GRAPHS  
  
             6 -- EXPENSE CATEGORY GRAPHS  
  
   
2. It will then ask you:   
   
     "Enter year you want to search       "        
   
  The year contained within the cursor is the current  
  year for convenience.  If that is the year you want  
  to graph, just press the RETURN key without the need  
  to enter anything.  
  
  Enter other years as four numbers "XXXX".  If you  
  enter less than four numbers, it will beep to let  
  you know you have entered the year incorrectly (or  
  if the year entered cannot be found).  
  
  When you press the RETURN key, the graph will be  
  displayed.  An example graph is shown on the  
  following page.  
  
  
                       Page 4-41  
  
                ACCOUNT REPORTS/GRAPHS  
  
             6 -- EXPENSE CATEGORY GRAPHS  
   
   
   
   
   
   
   
   
   
   
       (Illustration in registered manual)  
   
   
   
   
   
   
   
   
   
   
If your printer has the capability to print graphics  
(IBM or compatible), You can print each graph by  
pressing these keys:   
   
                 "SHIFT and PRT SC".   
   
Whether you print the graph or not, press any key to  
be returned to the menu.  You can select another graph  
to be displayed, or move to other menus to do other  
operations.  
  
  
                       Page 4-42  
  
               ACCOUNT REPORTS/GRAPHS  
  
          7 -- MONTHLY CASH FLOW GRAPHS  
          8 -- YEARLY CASH FLOW GRAPHS  
          9 -- CASH FLOW REPORT   
  
Here is the procedure to display Cash Flow graphs or  
printed reports of your current account:   
  
1. When you make your selection for a graph or report,  
   the program will ask you to enter the date for it  
   to search for the data.    
  
   The date contained within the cursor is the current  
   date for convenience.  If you want the entries for  
   that date, just press the RETURN key without the  
   need to enter anything.    
    
   If you wish, you can enter any other date that is  
   earlier than the current date displayed.  It must  
   be entered in the same format as the one you see in  
   the cursor.  If you enter the date incorrectly, it  
   will beep to let you know.  Just re-enter the date  
   correctly.  
   
   When you press the RETURN key, the graph will be  
   displayed, or the tabulated report will be printed.  
  
   If your printer has the capability to print  
   graphics (IBM or compatible), You can print each  
   graph by pressing these keys:   
    
               "SHIFT and PRT SC".   
   
   Whether you print the graph or not, press any "Esc"  
   to be returned to the menu.  You can select another  
   graph to be displayed, or move to other menus to do  
   other operations.  
  
  
                       Page 4-43  
  
                    ACCOUNT LISTINGS  
  
  
  
  
  
  
  
  
  
  
                       Page 4-44  
  
                   ACCOUNT LISTINGS  
  
  
The "Account Listings" of the "Account Manager"  
provide several convenient ways to display listings of  
your account entries:   
   
A - You can display all your account's entries by  
    month, year, or the total file.  
  
B - You can display only the entries that are still  
    outstanding.  
  
C - You can display only entries for an expense  
    category, by month or year.  
  
D - You can display only entries that are tax  
    deductible, by month or year.  
  
E - You can display only entries that are automatic  
    teller machine transactions, by month or year.  
  
F - You can display only entries that are interest  
    payments, by month or year.  
  
G - You can display only entries that are service  
    charges.  
  
H - You can display only the entries that are  
    deposits, by month or year.  
  
  
  
                       Page 4-45  
  
                   ACCOUNT LISTINGS  
  
                 A -- LIST ALL ENTRIES  
  
Here is the procedure to display a list of all entries  
of your account by a selected month or year, or the  
total file listing of all years:   
   
1. Select: A--List All Entries.  
   
2. Select whether the listing is to be:                 
  
            - List by Month   
            - List by Year   
            - List total file   
   
- List by Month   
   
  - If you select "List by Month", it will ask you:  
       "Enter month you wish to list       "        
  
- List by Year   
  
  - If you select "List by Year", it will ask you:  
       "Enter year you wish to list       "        
  
The date contained within the cursor is the current  
date for convenience.  If you want the entries for  
that date displayed, just press the RETURN key without  
the need to enter anything.    
    
If you wish, you can enter any other date that is  
earlier than the current date displayed.  It must be  
entered in the same format as the one you see in the  
cursor.  If you enter the date in the wrong format, it  
will beep to let you know you have entered it  
incorrectly.  Just re-enter the date correctly.  
  
  
  
                       Page 4-46  
  
                   ACCOUNT LISTINGS  
  
                 A -- LIST ALL ENTRIES  
  
- List Total File   
   
- If you select "List Total File" it will NOT ask you  
  for any date.  
  
  When you select "List Total File", EVERY ENTRY in  
  the entire selected account will be displayed, a  
  screen-full at a time.  It will begin  with the  
  first entry you put in and continue to the last.    
  
  When you have accumulated a few years of entries,  
  this can grow to be a very long listing.   
  
  
  
EVERY ENTRY for a specified date will be displayed.    
  
The entries displayed in GREEN are those that are  
outstanding.  (Reverse video on monochrome monitors.)   
  
The entries displayed in RED REVERSE VIDEO are those  
that are overdrawn. (An asterisk "*" in the first  
column in monochrome.)  
  
If you did NOT toggle "Notes" to be "ON" at the  
"Account Listings" selection menu, the listings will  
not include note comments in the display.  
  
If you DID toggle "Notes" to be "ON" at the "Account  
Listings" selection menu, then each entry with a note  
attached will display the note's contents on a line  
below the entry.  The note will be displayed in yellow  
on color monitors (low intensity on monochrome).  
  
  
  
                       Page 4-47  
  
                   ACCOUNT LISTINGS  
  
                 B -- LIST OUTSTANDING  
  
Here is the procedure to display a list of all entries  
of your account that are still outstanding (haven't  
cleared the bank):   
  
1. Select: B--List Outstanding.  
  
   The screen will display a listing of ONLY your  
   outstanding entries.  
  
   Since the entries are only those that are  
   outstanding, they will all be displayed in GREEN.   
   (With an asterisk "*" in the first column in  
   monochrome.)  
  
  
                       Page 4-48  
  
                   ACCOUNT LISTINGS  
  
             C -- LIST EXPENSE CATEGORY  
             D -- LIST TAX DEDUCTIBLE  
   
1. Select either: C--List Expense Category,  
              or: D--List Tax Deductible  
  
   It will ask you:   
  
             "Enter Expense Category    "               
   
   Enter the number corresponding to the expense cate-  
   gory that you want listed.   
   
   If you cannot remember the numbers corresponding  
   with the expense category you want, press F1 to  
   temporarily display all the expense categories.   
   
   
   
   
       (Illustration in registered manual)  
   
   
   
   
   
When you enter the expense category number, the  
temporary display of the expense categories will  
disappear.   
   
   
It will then ask you:   
   
  "List By Month   
   
   List By Year"   
  
  
                       Page 4-49  
  
                    ACCOUNT LISTINGS  
  
             C -- LIST EXPENSE CATEGORY  
             D -- LIST TAX DEDUCTIBLE  
   
- List by Month                                         
  
  When you select "List By Month", it will ask you:   
      "Enter month you wish to list       "  
  
- List by Year  
  
  When you select "List By Year", it will ask you:   
      "Enter year you wish to list       "   
  
The date contained within the cursor is the current  
date for convenience.  If you want the entries for  
that date displayed, just press the RETURN key without  
the need to enter anything.    
  
If you wish, you can enter any other date that is  
earlier than the current date displayed.  It must be  
entered in the same format as the one you see in the  
cursor.  If you enter the date in the wrong format, it  
will beep to let you know you have entered it  
incorrectly.  Just re-enter the date correctly.  
  
NOTE!:  When an Expense Category has been split, ONLY  
the amount appropriate for the selected category will  
be displayed in the list.  An asterisk "*" will  
precede the amount to indicate it is a "partial"  
amount.  
  
NOTE!:  When a Tax Deductible entry has been split,  
ONLY that portion of the "split" that is tax  
deductible will be displayed in the list.  An asterisk  
"*" will precede the amount to indicate it is a  
"partial" amount.  
  
  
                       Page 4-50  
  
                   ACCOUNT LISTINGS  
  
            E -- LIST ATM TRANSACTIONS  
            F -- LIST INTEREST PAYMENTS  
            G -- LIST SERVICE CHARGES    
            H -- LIST DEPOSITS          
  
- List by Month                                         
  
  When you select "List By Month", it will ask you:   
   
      "Enter month you wish to list       "  
  
- List by Year  
  
  When you select "List By Year", it will ask you:   
   
      "Enter year you wish to list       "   
   
  
  
The date contained within the cursor is the current  
date for convenience.  If you want the entries for  
that date displayed, just press the RETURN key without  
the need to enter anything.    
    
If you wish, you can enter any other date that is  
earlier than the current date displayed.  It must be  
entered in the same format as the one you see in the  
cursor.  If you enter the date in the wrong format, it  
will beep to let you know you have entered it  
incorrectly.  Just re-enter the date correctly.  
   
  
                       Page 5-1  
  
        SECTION 5 --  GLOBAL REPORTS/GRAPHS  
  
  
  
  
  
  
  
  
  
                      Page 5-2  
  
                     INTRODUCTION  
  
  
This Global Reports--Graphs section of FastBucks is  
used to produce information about all your accounts  
merged together.  You can select these options for  
reporting:  
  
  
  
Account Balances  
  
This option will print-out an "Account Balance Report"  
of all your accounts.  It will separate the  
tabulations according to:  
  
"ASSET ACCOUNTS":  
 - A tabulation of all your checking accounts.  
 - A tabulation of all your savings accounts.  
  
"LIABILITY ACCOUNTS":  
 - A tabulation of all your charge accounts.  
  
"CASH ACCOUNTS":  
 - A tabulation of all your cash accounts.  
  
Each will list your separate account names, their  
respective balances, and a total balance for each type  
of account group.  
  
                      Page 5-3  
  
                    INTRODUCTION  
  
  
Cash Flow Report  
  
This option will print-out these reports:   
  
"Cash Flow Report for All Accounts".    
 - A tabulation of all expense categories for each  
   month of the year, for ALL your accounts (either all  
   personal accounts or all business accounts).  Each  
   expense category will have a total and an average  
   amount tabulated for the year.  
  
"Actual Vs. Budgeted Expense Report".    
 - A tabulation of all your expenditures compared with  
   your budgeted amounts, with a difference between  
   them, if any.  
  
  
  
Category Graphs  
  
This option will display a graph of a year's  
expenditures for a selected expense category.  
  
  
  
  
  
Cash Flow Graphs  
  
This option will display a graph of your cash flow  
from all your accounts by month or year.  
  
  
                      Page 5-4  
  
                    INTRODUCTION  
  
                         Tips  
  
Here are some tips while using the "Global Reports--  
Graphs" functions:  
  
  
Printer ready!  
  
1. Be sure your printer is loaded with paper, and  
   switched "ON".  
  
  
   NOTE!:  If your printer is switched "OFF", or is  
   "Off-Line", the program will beep you and display:  
  
  
"Error                          Printer #1 Not On-Line  
 Correct the problem then press ENTER or "Esc" to Quit  
  
 -  Press "Esc" if you do NOT want to print your  
    report at this time.  You will be returned to the  
    Main Menu.  
  
 -  If you switch your printer "ON", or "On-Line",  
    then press ENTER (RETURN) and your report will be  
    printed.    
  
  
                      Page 5-5  
  
                    INTRODUCTION  
  
                         Tips  
  
  
Entering Dates  
  
   The date contained within brackets is the current  
   date for convenience.  If you want the current  
   date, just press the RETURN key without the need to  
   enter anything.  
  
   Enter other dates in the same format as the current  
   date displayed.  If you enter the date in the wrong  
   format, it will beep to let you know you have  
   entered it incorrectly.  
  
   You can also over-type just the characters you want  
   to be different.  Use the arrow keys to move the  
   cursor to the first character or number you want to  
   change, then just type them in.  
  
  
  
  
                      Page 5-6  
  
  


         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                      Page 5-7  
  
                  ACCOUNT BALANCES  
  
  
  
  
  
  
  
  
                      Page 5-8  
  
                  Account Balances  
  
The procedure to generate a report of all your account  
balances:  
  
1. Be sure your printer is loaded with paper, and  
   switched "ON".  
  
2. Select from the "Global Reports--Graphs" menu,  
   "Account Balances".  The program automatically  
   begins printing the report on your printer.  
  
  
  
                      Page 5-9  
  
                  Account Balances  
  
  
Example of a printed "Account Balance Report:  
  
  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
                      Page 5-10  
  
  


         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
  
                      Page 5-11  
  
                   CASH FLOW REPORT  
  
  
  
  
  
  
  
  
                      Page 5-12  
  
                  Cash Flow Report  
  
The procedure to generate a report of the cash flow  
for all your accounts:  
  
1. Be sure your printer is loaded with paper, and  
   switched "ON".  (Refer to "Tips", Printer ready!",  
   in the Introduction of this section.)  
  
2. Select from the "Global Reports--Graphs" menu,  
   "Cash Flow Report".  The program will ask you:  
  
"Do you want a Personal or Business Report (P/B)?  "  
  
  -  Enter "P" if you want a report on all the  
     personal accounts.  
  
  -  Enter "B" if you want a report on all the  
     business accounts.  
  
   When you enter the type of accounts, it will ask  
   you:  
  
      "Enter year you want to search [1988]"  
  
   Enter the year you want for the report and press  
   RETURN.  (Refer to "Tips", "Entering Dates", in the  
   Introduction of this section.)  
  
   Two reports will be printed:  
  
   - "Cash Flow Report for All Accounts"  
  
   - "Actual Vs. Budgeted Expense Report"  
  
A typical example of each are shown on the next page.  
  
  
                      Page 5-13  
  
                  Cash Flow Report  
  
  
"Cash Flow Report for All Accounts"  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
  
  
  
  
  
"Actual Vs. Budgeted Expense Report"  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
                      Page 5-14  
  




         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                      Page 5-15  
  
                    CATEGORY GRAPHS  
  
  
  
  
  
  
  
  
                      Page 5-16  
  
                   Category Graphs  
  
The procedure to generate a graph of an expense  
category for all your accounts:  
  
1. Select from the "Global Reports--Graphs" menu,  
   "Category Graphs".  The program will ask you:  
  
  "Search Personal or Business Accounts (P/B)?  "  
  
  -  Enter "P" if you want a report on all the  
     personal accounts.  
  
  -  Enter "B" if you want a report on all the  
     business accounts.  
  
2. When you enter the type of accounts, it will ask  
   you:  
          "Enter Expense Category     "  
  
   If you do not remember the expense category  
   numbers, press "F1" to temporarily display all the  
   available category numbers.  Enter the appropriate  
   number and press RETURN.  The program will ask you:  
  
      "Enter year you want to search [1988]"  
  
   Enter the year you want for the report and press  
   RETURN.  (Refer to "Tips", "Entering Dates", in the  
   Introduction of this section.)  
  
   The graph will be displayed on your screen.  If  
   your printer has the capability to print graphics  
   (IBM or compatible), You can print it by pressing  
   these keys:   
  
                 "Shift and PrtSc".   
  
Whether you print the graph or not, press "Esc" to be  
returned to the menu.    
  
  
                      Page 5-17  
  
                     Category Graphs  
  
Example of a Category Graph  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
                      Page 5-18  
  
  



         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                      Page 5-19  
  
                   CASH FLOW GRAPHS  
  
  
  
  
  
                      Page 5-20  
  
                  Cash Flow Graphs  
  
The procedure to generate a graph of the cash flow for  
all your accounts:  
  
1. Select from the "Global Reports--Graphs" menu,  
   "Cash Flow Graphs".  The program will ask you:  
  
  "Search Personal or Business Accounts (P/B)?  "  
  
  -  Enter "P" if you want a report on all the  
     personal accounts.  
  
  -  Enter "B" if you want a report on all the  
     business accounts.  
  
2. When you enter the type of accounts, it will ask  
   you:  
  
    "Monthly or Yearly Cash Flow Graph (Y/M)?  "  
  
  -  Enter "M" if you want your cash flow graph for a  
     month's worth.  It will ask you:  
  
        "Enter month you want to search [Oct88]"  
  
  -  Enter "Y" if you want your cash flow graph for a  
     year's worth.  It will ask you:  
  
         "Enter year you want to search [1988]"  
  
  Refer to "Tips", "Entering Dates", in Introduction.  
    
The graph will be displayed on your screen.  If your  
printer has the capability to print graphics (IBM or  
compatible), You can print it by pressing these keys:   
                 "Shift and PrtSc".   
Whether you print the graph or not, press "Esc" to be  
returned to the menu.    
  
  
                      Page 5-21  
  
                  Cash Flow Graphs  
  
  
Example of a Cash Flow Graph  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
                      Page 5-22  




         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)

  
  
                      Page 6-1  
  
              SECTION 6 -- UTILITIES  
  
  
  
  
  
  
                     Page 6-2  
  
                    INTRODUCTION  
  
The Utilities section of FastBucks is used to:  
  
             o Start a New Account  
  
             o Delete an Account  
  
             o Fix Data Files  
  
             o Edit an Account Name  
  
  
  
                     Page 6-3  
  
                    INTRODUCTION  
  
Start New Account  
-----------------  
This selection is used to start any new accounts for  
the Account Manager.  You can start an account for  
personal or business accounting.  
  
  
  
Delete an Account  
-----------------  
This selection is used to delete any existing account.   
  
  
  
Fix Data Files  
--------------  
This selection is used to repair and rebuild account  
data files that may have become corrupted.  
  
  
  
Edit Account Name  
-----------------  
This selection is used to change the identification of  
an account.  You can change the account name or its  
identification number.  
  
  
  
  
                     Page 6-4  
  
  



         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)

  
                     Page 6-5  
  
                 START NEW ACCOUNT  
  
  
  
  
  
  
                     Page 6-6  
  
                 START NEW ACCOUNT    
  
The procedure to start a new account:  
  
1. Select from the "Utilities" menu, "Start New  
   Account".  
  
Select the Type of Account  
  
2. Select the type of account to start:  
     1--Checking Account        
     2--Charge Account          
     3--Savings Account         
     4--Cash Account            
  
  
  
  
   When you select the type of account, and press  
   RETURN, the program will display the "FastBucks  
   Account Initialization" screen:  
  
       "Enter account name            :   
        Enter account number          :   
        Enter initial account balance :   
        Enter date account opened     :"  
  
  
  
   You can move the cursor to any entry by pressing  
   the RETURN key or using the up or down arrow keys.   
     
   If you press RETURN without entering the account  
   name, number, or balance, those entries will be  
   blank.  If that happens, wait until the program  
   asks you: "Is the above information correct?".   
   Then you can answer "N" for No, and you can go  
   through each of the entries again.   
  
  
  
                     Page 6-7  
  
                 START NEW ACCOUNT    
  
  
Enter account name  
------------------  
3. Enter the name of the account.    
  
  
Enter account number  
--------------------  
4. Enter the number identification of the account.  
  
  
Enter initial account balance  
-----------------------------  
5. Enter the balance you are beginning the account  
   with.  
  
  
Date Account Opened  
-------------------  
6. The current date is automatically displayed for  
   convenience.  If you want the current date, just  
   press the RETURN key without the need to enter  
   anything.    
  
   You can enter any date prior to or after the  
   current date displayed.  Just press the "Del" key  
   to erase the displayed date.  Then enter the date  
   in the same format and press RETURN.  
  
   You can also over-type just the day or month or  
   year.  The "Tab" key will move the cursor from the  
   "day" field to the first letter in the "month"  
   field.  "Tab" once more moves the cursor to the  
   last digit in the "year" field.  "Shift-Tab" does  
   the reverse.  
  
  
                     Page 6-8  
  
                  START NEW ACCOUNT  
  
Keep it or start over  
---------------------  
7.  The program will then ask:  
  
      "Is the above information correct (Y/N)?  "  
  
   -  Enter "N" (for No) if it is NOT correct.  The  
      cursor will be placed at the beginning entry  
      again.  You will have to enter the information  
      in all the entries again.  When you have  
      completed the last entry and pressed RETURN, the  
      program will again ask:  
  
      "Is the above information correct (Y/N)?  "  
  
   -  Enter "Y" (for Yes) if it IS correct.  The  
      program will ask:  
  
"Is this account for Personal or Business use P/B?  "  
  
  
Personal or Business Use  
------------------------  
8. - Enter "P" if the account is for a personal use.  
  
   - Enter "B" if the account is for business use.  
  
   When you have selected "P" or "B", the program  
   asks:  
  
 "Do you wish to initialize any other accounts Y/N?  "  
  
  
  
  
  
  
                     Page 6-9  
  
                 START NEW ACCOUNT    
  
Start another account or quit  
-----------------------------  
9. - Enter "Y" (for Yes) if you want to initialize  
     another account.  You can initialize up to 25  
     accounts of any type: checking, charge, savings,  
     or cash, at this time or later.   
  
  -  Enter "N" (for No) when you do NOT want to  
     initialize any more accounts.  The program will  
     exit back to the "Utilities" menu.   
  
  
10. This completes the initialization of a new  
    account.  



                      Page 6-10  




         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)


                      Page 6-11  

                   DELETE AN ACCOUNT

  
  
  
                     Page 6-12  
  
                 DELETE AN  ACCOUNT  
  
The procedure to delete one of your accounts:   
  
1. Select from the "Utilities" menu, "Delete an  
   Account".  
  
  
Type of Account to delete  
  
2. Select the type of account to delete:  
  
     1--Checking Account        
     2--Charge Account          
     3--Savings Account         
     4--Cash Account            
  
  
  
Name the Account to delete  
--------------------------  
3. Select the account name you want to delete.  (If  
   you have only one account name in the files, the   
   program will skip this step.)  
  
   A WARNING will be displayed, to caution you that     
   the account you have just selected will be com-  
   pletely removed from your existing data files if    
   you proceed:  
  
  
  
   "***** Warning ***** Warning ***** Warning *****  
  
          Account will be completely removed  
          from your files ........  
  
   "***** Warning ***** Warning ***** Warning *****"  
  
  
  
                     Page 6-13  
  
                 DELETE AN  ACCOUNT  
  
  
o  BE SURE YOU WANT TO DO THIS!  
   While the WARNING is displayed, this is the time to  
   back out if you have selected the wrong account to  
   delete, or if you change your mind and don't want  
   to delete any account.  
   
o  YOU CAN BACK OUT!  
   You can back out, as long as the WARNING remains  
   displayed, by pressing the RETURN key.  You will be  
   returned to the "Delete Account Selection" menu.  
  
  -  You can select another account to delete, and   
     proceed from there.  
  
  -  You can exit the "Delete Account Selection" by  
     pressing the "Esc" key, which will return you to  
     the "Utilities" menu.  
  
o  YOU CAN PROCEED WITH THE DELETE!  
   Purposely, we have made this delete function con-  
   tain safeguards against accidental deletion of your  
   data files.  Once a file is deleted, IT IS GONE  
   FOREVER!  So, at this point, you cannot delete a  
   selected file with just a keystroke!  You will have  
   to type your request in plain language to proceed!  
  
   - Below the WARNING display is an instruction for    
     you to proceed with the delete function:   
  
   "Type REMOVE THIS FILE if you want to proceed...."   
  
   - If you want to proceed, then type the words:  
     "REMOVE THIS FILE" and press the RETURN key.   
  
     The screen will blank momentarily while the file  
     is being deleted.  Then you are returned to the  
     "Utility" menu, where you can delete another  
     account, or exit to other functions of FastBucks.  
  
  
  
                     Page 6-14  
  



         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                     Page 6-15  
  
                   FIX DATA FILES  
  
  
  
  
  
  
                     Page 6-16  
  
                   FIX DATA FILES  
  
The procedure to repair and rebuild account data files  
that may have been corrupted:   
  
1. Select from the "Utilities" menu, "Fix Data Files".  
  
2. The screen displays:   
  
"This procedure re-balances all FastBucks accounts and  
 rebuilds all Index Files ............................   
 Do you wish to proceed (Y/N) ? "                        
  
   -  Enter "N" (for No) if you do NOT want to re-  
      balance all your accounts and rebuild all your  
      Index Files at this time.  When you press the  
      RETURN key, the program will back out to the  
      "Utilities" menu.  
  
   -  Enter "Y" (for Yes) if you want to start the  
      process of re-balancing all your accounts and  
      re-build all your Index Files.  When you press  
      the RETURN key, the screen displays the  
      identification of the account being rebuilt.  It  
      also displays the year that is being rebuilt,  
      with the balance amount.  
  
  
       (Illustration in registered manual)  
  
  
      Each year of an account is displayed in sequence  
      as it is being rebuilt.   
  
  
       (Illustration in registered manual)  
  
  
                     Page 6-17  
  
                   FIX DATA FILES   
  
Each account file will be displayed in sequence as it  
is being rebuilt.   
  
The length of time this takes depends on the size of  
your account files and how many there are, and the  
operating speed of your computer.   
  
For example, a PC/XT or compatible computer operating  
with a clock speed of 4.77 MHz will usually be able to  
rebuild these data files as follows:   
  
- Small account data files can take just a few    
  seconds to be rebuilt.   
  
- Large account data files can take a minute or so  
  to be rebuilt.   
  
- Many large account data files can take a few    
  minutes to be rebuilt.   
  
  
  Faster operating computers should take less time to  
  rebuild your account data files.   
  
  
After all the account files have been rebuilt, the  
screen will return to the "Utilities" menu.   
  
  
                     Page 6-18  





         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                     Page 6-19  
  
                  EDIT ACCOUNT NAME  
  
  
  
  
  
  
  
  
                     Page 6-20  
  
                  EDIT ACCOUNT NAME  
  
The procedure to edit an account name:  
  
1. Select from the "Utilities" menu, "Edit Account  
   Name".  
  
2. Select the type of account to want to re-name:  
  
     1--Checking Account        
     2--Charge Account          
     3--Savings Account         
     4--Cash Account            
  
3. The program will display all the account  
   identifications for the type of account you  
   selected.    
  
  
       (Illustration in registered manual)  
  
  
  
   Move the cursor to the account name you want to  
   change, and press RETURN.  The "Account Name" field  
   will begin flashing.  You can also move the cursor  
   to the "Account Number" field by using the right  
   arrow key.  Only the field the cursor is on will be  
   flashing.  
  
   You can "Change" the field that is flashing by  
   pressing "C" (the flashing stops).  Then press the  
   "Del" key to erase the existing characters in the  
   field.  Type in the identification you want and  
   press RETURN.  (See NOTE, below!)  Press "Q" (to  
   Quit) and the new identification will be saved.  
  
      NOTE!:  If you change your mind, and you have  
      NOT pressed "Q", you can back out by pressing  
      "Esc". The field will remain as it was, and  
      you will be returned to the selection menu.  
  
                      Page 7-1  
  
             SECTION 7 -- HOME BUDGET  
  
  
  
  
  
  
  
                      Page 7-2  
  
                    INTRODUCTION  
  
The Home Budget Model of FastBucks is used to  
establish your budget according to your income and  
expenses.  
  
  
Home Budget Model has three main parts:  
  
                o Create a new budget    
  
                o Update an existing budget    
  
                o Print a budget    
  
  
  
                      Page 7-3  
  
                    INTRODUCTION  
  
  
  
Create a new budget:  
  
This allows you to set up a new budget at any time.  
You will provide the information you want for:  
- Budget period (Weekly, Monthly, etc.)  
- Number of incomes in your family  
- Paycheck deductions  
- Fixed expenses  
- Variable expenses  
  
The results of your information will be presented to  
you in these forms:  
- Screen graph of expenses  
- Budget saved to disk  
- Budget print-out  
  
  
  
Update an existing budget:  
  
This allows you to make changes to an existing budget  
at any time.  You can change any or all of these:  
- Change income  
- Change deductions  
- Change fixed expenses  
- Change variable expenses  
- Print-out changed budget  
  
  
  
Print a budget:  
  
This allows you to make a print-out of an existing  
budget of any year at any time.  
  
  
  
                      Page 7-4  
  

  
 
  
         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
  
  
                      Page 7-5  
  
                  CREATE NEW BUDGET  
  
  
  
  
  
                      Page 7-6  
  
                  CREATE NEW BUDGET  
  
The procedure to create a new budget:  
  
1. Select from the "Home Budget Model" menu, "Create  
   New Budget".  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
  
  
2. Select the type of budget:  
   - Weekly  
   - Bi-Weekly  
   - Semi-monthly  
   - Monthly  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
                      Page 7-7  
  
                  CREATE NEW BUDGET  
  
Income  
------  
3. Select "1--Change Income".  The program will ask  
   for information about income for the budget period:  
  
  
  
    "Income for the period:  
  
         Enter number of incomes for family     "  
                                              
  
  
   If you enter "1" for the number of incomes, the  
   program will present just one tabulation for you to  
   enter the income amount and paycheck deductions.  
  
  
   If you enter MORE than "1" for the number of  
   incomes (up to a maximum of "3"), the program will  
   present a tabulation for each income in sequence  
   for you to enter income amounts and paycheck  
   deductions.  
  
  
  
  
  
 
  
  
  
  
  
  
                      Page 7-8  
  
                  CREATE NEW BUDGET  
  
Income  
------  
4. Enter your income amount.  Also, be sure to enter  
   income from other sources if you have any.  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
Deductions  
----------  
5. After you have entered income, then enter each    
   paycheck deduction amount.  
  
   You can move the cursor over any entry without  
   entering an amount.  The entry will then be entered  
   automatically as "0.00".  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
  
                      Page 7-9  
  
                  CREATE NEW BUDGET  
  
Deductions  
  
   When you have entered the last of the paycheck  
   deductions, press "F10".  The program will ask:  
  
            "Is the above correct (Y/N)? "  
  
   Enter "N" (for No) if it is NOT correct.  You can  
   then scroll through the entries again, and change  
   any one just by entering the new amount.  When you  
   are satisfied that all the entries are correct,  
   press "F10" again.  The program will ask again:  
  
            "Is the above correct (Y/N)? "  
  
   Enter "Y" (For Yes) if the entries ARE correct.  
  
   - If you had entered more than "1" income, the  
     program will now ask for income information for  
     the next paycheck earner.  Repeat the procedure  
     for entering income and deductions for "Income  
     number 2".  Repeat this for each income earner.  
  
6. When you have completed entering income and de-  
   ductions for the last income earner, the program  
   will then ask for entries of your fixed expenses  
   for the budget period. 
  
  
  
  
  
  
                      Page 7-10  
  
                  CREATE NEW BUDGET  
  
Fixed Expenses  
--------------  
  Enter each Fixed Expense for the budget period.  
  
  Just like the previous entries, you can move the  
  cursor over any entry without entering an amount.   
  The entry will be entered automatically as "0.00".  
  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
   When you have completed entering all your fixed  
   expenses for the budget period, press "F10".  The  
   program will  ask:  
  
            "Is the above correct (Y/N)? "  
  
   Enter "N" (for No) if it is NOT correct.  You can  
   then scroll through the entries again, and change  
   any one just by entering the new amount.  When you  
   are satisfied that all the entries are correct,  
   press "F10" again.  The program will ask again:  
  
            "Is the above correct (Y/N)? "  
  
  
   Enter "Y" (For Yes) if the entries ARE correct.  
  
  
  
                      Page 7-11  
  
                  CREATE NEW BUDGET  
  
Disposable Income Review  
------------------------  
7. The program compares your paycheck deductions and    
   your fixed expenses against your total income.  
  
   - If your deductions and fixed expenses are GREATER   
     than your total income, the program will beep and   
     display a notice that you cannot continue:  
  
       "Your fixed expenses exceed your income !  
        The budget process is unable to continue."  
  
     Review your deductions and fixed expenses to see  
     if there are any errors.  If not, see if you are  
     able to reduce your deductions.  You must change  
     your outgo of money so that it is less than your  
     total income.  If you can, you can start over  
     again to create a new budget.  
  
  
  
   - If your deductions and fixed expenses are LESS  
     than your total income, the program will display  
     a "Disposable Income Summary" table:  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
   After reviewing your disposable income, press any  
   key to advance to the next display for forecasting  
   your variable expenses.  
  
  
                      Page 7-12  
  
                   CREATE NEW BUDGET  
  
Variable Expenses  
-----------------  
8. Now, the program displays a table of "Variable  
   Expense Initialization".  (These are the expense  
   Categories you established  during "Getting  
   Started".)  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
   The idea here is for you to be able to experiment  
   with your forecast of variable expenses.  The nice  
   thing is that you don't have to be agonizingly  
   accurate at this stage of the forecast.  Once you  
   have entered estimated amounts, the program com-  
   putes each of your initial entries proportionally  
   against the amount of disposable income and re-  
   displays them.  
  
   You will be able to experiment with any one or all  
   of these entries as many times as you wish.  As  
   long as you do not "freeze" an entry, you can  
   continue to make changes to it.  
  
   You can enter "0.00" for any entry by moving past  
   it.  However, we don't recommend this at this early  
   stage because "0.00" will automatically "freeze"  
   the entry at "0.00".  Unless you know you will  
   never use a particular category, it would be better  
   to enter some small amount temporarily to see how  
   the program proportions it.  You can change the  
   amount at a later time using "Update Old Budget".  
  
  
                      Page 7-13  
  
                   CREATE NEW BUDGET  
  
Variable Expenses  
-----------------  
   After you have entered the last expense category,  
   press "F10".  The program asks you:  
  
           "Is the above correct (Y/N)? "  
  
   - Enter "N" (for No) to be able to scroll through  
     each of the entries again.  You can change any  
     entry while the cursor is on it.  Press "C" (for  
     Change).  Enter the new amount this way for each  
     expense category you want to change.  
  
   - Enter "Y" (for Yes) and the program will compute  
     all the expense amounts proportionally and re-  
     display the results.  
  
  
   As long as you do not "freeze" an entry, you can  
   continue to make changes to it.  When any entry is  
   satisfactory, then you should "freeze" it.  Entries  
   that are "frozen" will erase the dollar amount and  
   display only the category description in red (or  
   blank-out the description on a monochrome monitor).  
  
  
   When you press "F" to Freeze an entry, the program  
   will ask:  
                "Are you sure (Y/N)? "  
  
  
   - Enter "N" (for No) to refrain from freezing the  
     entry now.  
  
  
   - Enter "Y" (for Yes) to "freeze" the entry from  
     further changes.  
  
  
  
                      Page 7-14  
  
                  CREATE NEW BUDGET  
  
Variable Expenses  
-----------------  
                         NOTE!  
        You can freeze all the entries (or any  
        remaining unfrozen entries) all at once by  
        pressing "F10".  The program will ask you:  
  
          "Are you sure you want to Freeze  
           all remaining accounts?"  
  
        - Enter "N" (for No) to refrain from freezing  
          all the entries now.  
  
        - Enter "Y" (for Yes) to "freeze" ALL the  
          entries from further changes.  The program  
          will display:  
  
         "All remaining accounts have been frozen"  
  
  
   When you have "frozen" all the entries indi-  
   vidually, press "F10".  The program will display:  
  
          "All accounts have been frozen"  
  
  
  
  
  
  
  
  
  
  
  
  
                      Page 7-15  
  
                  CREATE NEW BUDGET  
  
Variable Expenses  
-----------------  
   The object of this is to have all the variable  
   expense categories "frozen" before the budget is  
   established.  Once frozen, you cannot change these  
   category entries at this time.  (However, you can  
   change them later, after completing and exiting  
   this "Create New Budget".  Then you can select  
   "Update Old Budget" and make changes.)  
  
Bar Graph  
---------  
   When all the entries are frozen, the program will  
   display a convenient BAR GRAPH of all the expense  
   categories:  
  
  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
  
  
  
   A pointer is positioned under the first category  
   bar.  That category's name and amount are also  
   displayed at the bottom of the graph.  
  
  
  
                      Page 7-16  
  
                  CREATE NEW BUDGET  
  
Bar Graph  
---------  
   You can move the pointer with the left or right  
   cursor keys (or the spacebar or backspace key).    
   As you position the pointer under each bar, its  
   corresponding name and amount displays at the  
   bottom of the graph.  
  
   Each bar length is in proportion to the percentage  
   of your total income.  
  
   If your printer can print graphics, you can make a  
   print of the bar graph at this time.  Press the  
   Shift and PrtSc keys to make a "screen print".   
   (You will be able to make a tabulated budget  
   printout later in this procedure.)  
  
   NOTE!:  Some printers must have their internal  
   switches set to enable graphics to be printed.   
   Refer to your printer's manual for the procedure.  
  
9. Press "Esc" to exit the bar graph.  
  
Save Budget to Disk  
-------------------  
10. The program asks:  
       "Enter Year For The Budget [1988]     "  
  
    The year contained within brackets is the current  
    year for convenience.  If you want the current  
    year, just press the RETURN key without the need to  
    enter anything.  
  
    Enter other years as four numbers "XXXX".  If you  
    enter less than four numbers, it will beep to let  
    you know you have entered the year incorrectly.  
  
    When you press RETURN, all your budget entries will  
    be saved to disk.  
  
  
                      Page 7-17  
  
                    CREATE NEW BUDGET  
  
Print Budget  
------------  
11. The program asks:  
  
        "Do you want to print your budget?   "  
  
    - Enter "N" (for No) if you DO NOT want to print   
      your budget.  The program will exit "Create New  
      Budget" and display the "Home Budget Model" main  
      menu.  You can exit by pressing the "Esc" key.  
  
  
    - Enter "Y" (for Yes) if you want to print your  
      budget. The program will ask:  
  
           "Enter your name                 "  
                              
  
    The name you enter will be the "family name"  
    printed on the heading of the budget.  
  
    Be sure your printer is loaded with paper and  
    switched "ON".  If it is switched "OFF", or is  
    "Off-Line", the program will beep you and display:  
  
"Error                          Printer #1 Not On-Line  
 Correct the problem then press ENTER or "Esc" to Quit  
  
   -  Press "Esc" if you do NOT want to print your  
      budget at this time.  You will be returned to  
      the Main Menu.  
  
   -  If you switch your printer "ON", or "On-Line",  
      then press ENTER (RETURN) and your budget will  
      be printed.  A typical example of a printed  
      budget is shown on the next page.  
  
  
  
                      Page 7-18  
  
                  CREATE NEW BUDGET  
  
Print Budget  
------------  
  
  
  
  
  
  
  
  
  
  
  
  
       (ARTWORK TYPICAL BUDGET PRINT-OUT)  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    When printing is completed, the program will exit  
    to the "Home Budget Model" main menu.  
  
  
                      Page 7-19  
  
                  UPDATE OLD BUDGET  
  
  
  
                      Page 7-20  
  
                  UPDATE OLD BUDGET  
  
Procedure to update an existing budget:  
  
1. Select from the "Home Budget Model" menu, "Update  
   New Budget".  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
2. The program asks:  
  
     "Enter Year For The Budget File <1988>    "  
  
   The year contained within brackets is the current  
   year for convenience.  If you want the current  
   year, just press the RETURN key without the need to  
   enter anything.  
  
   Enter other years as four numbers "XXXX".  If you    
   enter less than four numbers, it will beep to let    
   you know you have entered the year incorrectly.  
  
  
  
  
  
  
  
  
                      Page 7-21  
  
                  UPDATE OLD BUDGET  
  
  
3. Select what part of the budget you want to change,   
   ie; Income, or Deductions, or Fixed Expenses, or    
   Variable Expenses:  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  "1 -- Change Income" allows you to change any of  
   your  existing data of income, and deductions.  It  
   also allows you the option to "Change Fixed  
   Expenses" and subsequently "Change Variable  
   Expenses".  
  
  
  "2 -- Change Deductions" allows you to change any  
   of your existing data of deductions only.  It also  
   allows you the option to "Change Fixed Expenses"  
   and subsequently "Change Variable Expenses".  
  
  
  "3 -- Change Fixed Expenses" allows you to change  
   any  of your existing data of fixed expenses.  It  
   also allows you the option to "Change Variable  
   Expenses".  
  
  
  "4 -- Change Variable Expenses" only allows you to  
   change any of your existing data of fixed expenses.  
  
  
                      Page 7-22  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
------------------  
"Change Income" allows you to change any of your   
existing data of income, and Change Deductions.  It  
also allows you the option to "Change Fixed Expenses"  
and subsequently "Change Variable Expenses".  
  
Select "1--Change Income".  The program will ask:  
  
  
      "Enter number of incomes for Family    "  
  
  
  Enter the number of incomes you want to change to.  
  
   If you do NOT want to change the number, press    
   RETURN to enter the existing number of incomes.  
  
  
   The program then asks:  
  
           "Is the above correct (Y/N)?  "  
  
  
   Enter "N" (for No) if it is NOT correct.  You can    
   change the number just by entering the new amount.   
   It will ask again:  
  
           "Is the above correct (Y/N)?  "  
  
  
  
   Enter "Y" (For Yes) if the entry IS correct.  
  
  
                      Page 7-23  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
------------------  
The program displays the "Income Modification"  
tabulation with the cursor blinking on the "Salary/  
Wages" amount.  
  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
  
   Enter the changed amount of income.  
  
   If you change your mind before making an entry, you  
   can press RETURN (or move with the up and down  
   arrow keys), and the entry amount remains  
   unchanged.  
  
  
                      Page 7-24  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
----------------------  
You can select "2 -- Change Deductions" from the "Home  
Budget Model", "Update Old Budget", or as an  
integrated part of "1 -- Change Income".  
  
You can scroll through each "Income" and "Paycheck  
Deductions" entry.  If you do not want to change an  
entry, just press RETURN (or use the arrow keys) and  
the entry will remain unchanged.  Change any entry by  
pausing on it and enter the new amount.  
  
   Press "F10" when you are done.  
  
  
  
                      Page 7-25  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
----------------------  
8. The program will ask:  
  
               "Is the above correct?"  
  
   Enter "N" (for No) if it is NOT correct.  You can  
   then scroll through each entry again, and change  
   any one just by entering the new amount.  When you  
   are done, press "F10".  It will ask again:  
  
               "Is the above correct?"  
  
   Enter "Y" (For Yes) if the entries ARE correct.  It  
   will then ask you:  
  
     "Do you want to modify Fixed Expenses (Y/N)?  "  
  
   - Enter "N" (for No) if you do NOT want to modify  
     Fixed Expenses at this time.  (You can modify  
     them at a later time by selecting "Change Fixed  
     Expenses" from the "Home Budget Model" menu.  
  
     The program will then display a "Disposable  
     Income Summary" for your review.  For the  
     remaining procedures, continue by skipping ahead  
     to the page "UPDATE OLD BUDGET, Change Variable  
     Expenses".  
  
  
   - Enter "Y" (for Yes) if you DO want to modify  
     Fixed Expenses at this time.  (This is a  
     convenient way to follow through with other  
     changes to your budget without having to select  
     them separately from the menu.)  
  
  
                      Page 7-26  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
--------------------------  
You can select "3 -- Change Fixed Expenses" from the  
"Home Budget Model", "Update Old Budget", or as an  
option upon completing "1 -- Change Income" or "2 --  
Change Deductions".  
  
The program will display a tabulation of your existing  
"Fixed Expenses":  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
Move the cursor to any of the entries you want to  
change.  Enter the amount you want and press RETURN.   
If you change your mind, press an arrow key INSTEAD  
and the entry will remain unchanged.  
  
  
  
                      Page 7-27  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
--------------------------  
  
When you have completed entering all changed entries,  
press "F10".  The program will  ask:  
  
          "Is the above correct (Y/N)?  "  
  
Enter "N" (for No) if it is NOT correct.  You can then  
scroll through the entries again, and change any one  
just by entering the new amount.  When you are  
satisfied that all the entries are correct, press  
"F10" again.  The program will ask again:  
  
          "Is the above correct (Y/N)?  "  
  
- Enter "Y" (For Yes) if the entries ARE correct.  
  
  
Disposable Income Summary  
  
The program displays a "Disposable Income Summary"   
for your review.    
  
  
  
  
  
       (Illustration in registered manual)  
  
 
  
  
  
                      Page 7-28  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
4 -- Change Variable Expenses  
-----------------------------  
You can select "4 -- Change Variable Expenses" from  
the "Home Budget Model", "Update Old Budget", or as an  
option upon completing "1 -- Change Income" and "2 --  
Change Deductions" and "3 -- Change Fixed Expenses".  
  
(When you select "4 -- Change Variable Expenses" from  
"Update Old Budget", the program displays a  
"Disposable Income Summary" for your review.)  
  
After reviewing the "Disposable Income Summary", press  
any key to advance to the next display, a "Variable  
Expense Refinement" tabulation.  This is the same  
tabulation you use during "Create New Budget" to  
establish and freeze all your variable expenses.   
However, you will notice that none of the entries are  
frozen.  This is your chance to re-proportion the  
amounts for each variable expense.  
  
  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
                      Page 7-29  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
4 -- Change Variable Expenses  
-----------------------------  
- If you DO want to change any (or all) of the  
  entries, the procedure is the same as you performed  
  during "Create New Budget".  Refer to those pages  
  for the procedures and options.  
  
  
- If you do NOT want to change any of the entries of  
  the "Variable Expenses", you can press "F10" to  
  freeze all the entries at once, just like you did  
  when you established these amounts during "Create  
  New Budget".    
  
  The procedures are the same as for "Create New  
  Budget" with one exception, you can view a "Recap"  
  of all the entries.  The "Recap" displays each entry  
  with its percentage of the total budget.  When you  
  have reviewed the "recap" the "Variable Expenses"  
  are re-displayed for your action.  From here on, the  
  procedures are the same as during "Create New  
  Budget".  Refer to those pages for the procedures  
  and options.  
  
  
  
  
  
  
  
  
                      Page 7-30  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
4 -- Change Variable Expenses  
-----------------------------  
Display a bar graph of your budget  
  
When all the entries are frozen, the program will   
display a convenient BAR GRAPH of all the expense   
categories:  
  
  
  
  
             (ARTWORK BAR GRAPH)  
       (Illustration in registered manual)  
  
  
  
  
  
A pointer is positioned under the first category bar.   
That category's name and amount are also displayed at  
the bottom of the graph.  
  
You can move the pointer with the left or right cursor  
keys (or the spacebar or backspace key).  As you  
position the pointer under each bar, its corresponding  
name and amount displays at the bottom of the graph.  
  
Each bar length is in proportion to the percentage of  
your total income.  
  
If your printer can print graphics, you can make a  
print of the bar graph at this time.  Press the Shift  
and PrtSc keys to make a "screen print".  (You will be  
able to make a tabulated budget printout later in this  
procedure.)  
  
  
                      Page 7-31  
  
                   UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
4 -- Change Variable Expenses  
-----------------------------  
Save your budget to disk  
  
Press "Esc" to erase the BAR GRAPH from the display.   
The program will ask you:  
  
 "Do you want to save your Budget to Disk (Y/N)?  "  
  
- Enter "N" (for No) if you DO NOT want to save it to  
  disk.  CAUTION: If you do not save the budget to  
  disk, ALL THIS CHANGED BUDGET DATA WILL BE LOST!   
  The budget will remain as it was.  
  
- Enter "Y" (for Yes) to save the budget to disk.     
  Be sure you have your "data disk" inserted in the   
  drive you established as the "data drive".  
  
  The program asks you:  
  
     "Enter Year For The Budget [1988]     "  
  
  The year contained within brackets is the current  
  year for convenience.  If you want the current year,  
  just press the RETURN key without the need to enter  
  anything.  
  
  Enter other years as four numbers "XXXX".  If you  
  enter less than four numbers, it will beep to let  
  you know you have entered the year incorrectly.  
  
  When you press RETURN, all the changed budget  
  information is saved to disk, replacing the old  
  budget.  
  
  
  
                      Page 7-32  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
4 -- Change Variable Expenses  
-----------------------------  
Print your budget on your printer  
  
The program then asks you:  
  
    "Do you want to print your budget (Y/N)?  "  
  
- Enter "N" (for No) if you DO NOT want to print your  
  budget.  The program will exit to the "Home Budget  
  Model" menu.  
  
- Enter "Y" (for Yes) if you want to print your  
  budget. The program will ask:  
  
      "Enter your name                  "  
  
  The name you enter will be the "family name" printed  
  on the heading of the budget.  
  
  Be sure your printer is loaded with paper and  
  switched "ON".  If it is switched "OFF", or is "Off-  
  Line", the program will beep you and display:  
  
"Error                          Printer #1 Not On-Line  
 Correct the problem then press ENTER or "Esc" to Quit  
  
  - Press "Esc" if you do NOT want to print your  
    budget at this time.  You will be returned to the  
    Main Menu.  
  
  - If you switch your printer "ON", or "On-Line",  
    then press ENTER (RETURN) and you budget will be  
    printed.  A typical example of a printed budget is  
    shown on the next page.  
  
  
  
                      Page 7-33  
  
                  UPDATE OLD BUDGET  
  
1 -- Change Income  
2 -- Change Deductions  
3 -- Change Fixed Expenses  
4 -- Change Variable Expenses  
-----------------------------  
Print the budget on your printer  
  
  
  
  
  
  
  
  
  
  
       (ARTWORK TYPICAL BUDGET PRINT-OUT)  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    When printing is completed, the program will exit   
    to the "Home Budget Model" menu.   
  
                      Page 7-34  
  




         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
  
                      Page 7-35  
  
                   PRINT OLD BUDGET  
  
  
  
  
  
  
  
                      Page 7-36  
  
                  PRINT OLD BUDGET  
  
The procedure to print an existing budget:  
  
1. Select from the "Home Budget Model" menu, "Print  
   Old Budget".  
  
  
2. The program asks:  
  
     "Enter Year For The Budget File <1988>    "  
  
  
   The year contained within brackets is the current  
   year for convenience.  If you want the current  
   year, just press the RETURN key without the need to  
   enter anything.  
  
   Enter other years as four numbers "XXXX".  If you  
   enter less than four numbers, it will beep to let  
   you know you have entered the year incorrectly.  
  
   When you press RETURN, a bar graph of your existing  
   budget will be displayed on the screen.  After  
   viewing the graph, press "Esc" to erase the graph.   
   The program will ask you:  
  
      "Do You Want To Print The Budget (Y/N)?  "  
  
   - Enter "N" if you change your mind and do NOT want  
     to print your budget at this time.  You will be  
     returned to the "Home Budget Model" menu.  
  
   - Enter "Y" if you Do want to print your budget.  
  
  
  
  
  
                      Page 7-37  
  
                  PRINT OLD BUDGET  
  
  
3. The program will ask:  
  
          "Enter your name                "  
  
  
   The name you enter will be the "family name"     
   printed on the heading of the budget.  
  
   Be sure your printer is loaded with paper and  
   switched "ON".  If it is switched "OFF", or is  
   "Off-Line", the program will beep you and display:  
  
  
"Error                          Printer #1 Not On-Line  
 Correct the problem then press ENTER or "Esc" to Quit  
  
  
  - Press "Esc" if you change your mind and do NOT  
    want to print your budget at this time.  You will  
    be returned to the Main Menu.  
  
  - If you switch your printer "ON", or "On-Line",  
    then press ENTER (RETURN) and you budget will be  
    printed.  A typical example of a printed budget is  
    shown on the next page.  
  
  
  
                      Page 7-38  
  
                  PRINT OLD BUDGET  
  
  
  
  
  
  
  
  
  
  
       (ARTWORK TYPICAL BUDGET PRINT-OUT)  
       (Illustration in registered manual)  
  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    When printing is completed, the program will exit   
    to the "Home Budget Model" menu.   
  
                       Page 8-1  
  
             SECTION 8 -- CALCULATIONS  
  
  
  
  
  
  
  
  
  
                      Page 8-2  
  
                     INTRODUCTION  
  
This Calculation part of FastBucks is provided as a  
convenience.  It operates independently of the  
Accounts Manager and Home Budget.  
  
You can use it to make calculations of various finan-  
cial activities.  It is designed to quickly and easily  
process calculations from your information.  You can  
use it for financial investigation or to perform  
"what-if" scenarios in forecasting.  
  
FastBucks Calculations has three main calculation  
categories:  
  
                    o Investments   
  
                    o Depreciation   
  
                    o Loans   
  
                      Page 8-3  
  
                     INTRODUCTION  
  
                      Investments  
                      -----------  
This calculates several different kinds of investing:  
  o Future value of one-time investment   
  o Future value of regular deposits   
  o Deposits to create a desired total value   
  
Future value of one-time investment   
-----------------------------------  
  You can calculate how much value a one-time invest-   
  ment will return for you according to the informa-  
  tion you provide:  
  
  - The amount of an initial investment  
  - The nominal interest rate  
  - The term of the investment you want  
  - The number of compounding periods you want  
  
Future value of regular deposits   
--------------------------------  
  You can calculate how much value regular deposits   
  will make toward an investment according to the   
  information you provide:  
  
  - The amount you want to make each deposit  
  - The nominal interest rate  
  - The term of the investment you want  
  - The number of deposits you want to make  
  
Deposits to create a desired total value   
------------------------------------------------  
  You can calculate how much each regular deposit   
  must be to get a desired return value of an   
  investment according to the information you provide:  
  
  - The desired total value  
  - The nominal interest rate  
  - The term of the investment  
  - The number of deposits  
  
  
                      Page 8-4  
  
                     INTRODUCTION  
  
                     Depreciation  
                     ------------  
This calculates different aspects of depreciation:  
  
             o Annual depreciation rate   
             o Amount of depreciation   
             o Salvage value   
  
  
Annual depreciation rate   
------------------------  
  You can calculate the annual rate of depreciation   
  of your purchase according to the information you   
  provide:  
  
  - The original value of your purchase  
  - The current resale value of your purchase  
  - The term of depreciation  
  
  
Amount of depreciation   
----------------------  
  You can calculate the amount of depreciation of   
  your purchase according to the information you   
  provide:  
  
  - The original value of your purchase  
  - The current depreciation rate of your purchase  
  - The term (duration) of depreciation  
  
Salvage value   
-------------  
  You can calculate the salvage value of your purchase   
  according to the information you provide:  
  
  - The original value of your purchase  
  - The current depreciation rate of your purchase  
  - The term (duration) of depreciation  
  
  
                      Page 8-5  
  
                     INTRODUCTION  
  
                         Loans  
  
This calculates different aspects of loans.            
  
            o Regular payments on a loan               
            o Last payment of a loan                   
            o Term of a loan                           
            o Remaining balance of a loan              
            o Cost of borrowing                        
            o Loan amortization schedule               
  
  
  
  
  
Regular payments on a loan  
--------------------------  
  You can calculate how much regular payments on a   
  loan will be according to the information you   
  provide:  
  
  - The principal amount of the loan                   
  - The current annual rate of interest                
  - The term (duration) of the loan                    
  
  
  
Last payment of a loan  
----------------------  
  You can calculate how much the last payment on a   
  loan will be according to the information you   
  provide:  
  
  - The principal amount of the loan                   
  - The current annual rate of interest                
  - The term (duration) of the loan                    
  
  
  
                      Page 8-6  
  
                     INTRODUCTION  
  
                         Loans  
                         -----  
Term of a loan   
--------------  
  You can calculate how much the term (duration) of a   
  loan will be according to the information you   
  provide:  
  
  - The principal amount of the loan                   
  - The amount you want to pay each period             
  - The current annual rate of interest                
  
  
Remaining balance of a loan  
---------------------------  
  You can calculate how much the remaining balance is   
  of an existing loan according to the information you   
  provide:  
  
  - The principal amount of the loan                   
  - The current annual rate of interest                
  - The term (duration) of the loan                    
  
  If you do not know the amount of each payment, the   
  program can calculate it for you.  
  
  If you already know the amount of each payment, you   
  can enter it for the program to use in its calcu-   
  lations.  
  
  
Cost of borrowing   
-----------------  
  You can calculate how much borrowing the money will   
  cost according to the information you provide:  
  
  - The principal amount of the loan                   
  - The current annual rate of interest                
  - The term (duration) of the loan                    
  
  
                      Page 8-7  
  
                     INTRODUCTION  
  
                         Loans  
                         -----  
Loan Amortization Schedule  
--------------------------  
  You can calculate the repayment schedule of a   
  declining interest loan according to the informa-   
  tion you provide:  
  
  - The principal amount of the loan                   
  - The current annual rate of interest                
  - The term (duration) of the loan                    
  - The first month payment is to be made              
  - The year that the first payment is to be made      
  
  If you do not know the amount of each payment, the   
  program can calculate it for you.  
  
  If you already know the amount of each payment, you   
  can enter it for the program to use in its calcu-   
  lations.  
  
  You can have the amortization schedule printed on   
  your printer.  
  
  - For full size printing, your printer must be able    
    to print more than 80 columns.  
  
  - For reduced size printing, you can use an 80     
    column printer in "compressed" mode.  
  
  
                      Page 8-8  
  
  
  


         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                      Page 8-9  
  
                      INVESTMENTS  
  
  
  
  
  
  
  
  
                      Page 8-10  
  
                      INVESTMENTS  
  
The procedure to make calculations of investments:  
  
1. Select "Calculations".  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
  
  
2. Select "Investments".  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
                      Page 8-11  
  
                      INVESTMENTS  
  
3. Select the type of investment:  
  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
If you want to calculate:  
o The "Future value of one-time investment",   
  Turn to Page 8-12.  
  
  
  
If you want to calculate:  
o The "Future value of regular deposits",   
  Turn to Page 8-14.  
  
  
  
If you want to calculate:  
o "Regular deposits to create a desired total value",   
  Turn to Page 8-16.  
  
                      Page 8-12  
  
                      INVESTMENTS  
  
Future value of one-time investment  
-----------------------------------  
The program will ask:  
  
         "Enter initial investment  :      "  
  
Enter the amount of your investment.  
  
        "Enter nominal interest rate  :     "  
  
Enter the current interest rate available.  
  
           "Term of investment:  Years=   "  
                                Months=   "  
  
Enter the number of years and months for the duration  
of the investment.  
  
      "Number of compounding periods/year:    "  
  
Enter the number of times the interest is compounded  
each year.  
  
The program displays the results of the calculation:  
  
-----------------------------------------------------  
          Value of your investment: 0000.00  
          Value of accum. interest: 0000.00  
          Total Value             : 0000.00  
-----------------------------------------------------  
"Do you want another calculation (Y/N)?  "  
  
  
Enter "Y" (for Yes) to make another calculation.  
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the INVESTMENT CALCULATIONS  
menu.  
  
  
                      Page 8-13  
  
                      INVESTMENTS  
  
Future value of one-time investment  
-----------------------------------  
Here is an example of a calculation of the future  
value of a one-time investment of $1000 at 5% interest  
for a term of 5 years.  The future value of the  
investment would be calculated to be $1282.04:  
  
          
EXAMPLE   
  
  
  
         FUTURE VALUE OF ONE-TIME INVESTMENT  
  
Enter initial investment          : 1000  
Enter nominal interest rate       : 5  
Term of investment:  
                             Years= 5  
                            Months= 0  
  
Number of compounding periods/year: 4  
  
  
-----------------------------------------------------  
          Value of your investment: 1000.00  
          Value of accum. interest:  282.04  
          Total Value             : 1282.04  
-----------------------------------------------------  
  
  
                      Page 8-14  
  
                      INVESTMENTS  
  
Future value of regular deposits  
--------------------------------  
The program will ask:  
  
        "Enter amount of each deposit :      "  
  
Enter the amount you want each deposit to be.  
  
        "Enter nominal interest rate  :      "  
  
Enter the current interest rate available.  
  
           "Term of investment:  Years=   "  
                                Months=   "  
  
Enter the number of years and months for the duration  
of the investment.  
  
         "Number of deposits per year:    "  
  
Enter the number of deposits you want to make each  
year.  
  
The program displays the results of the calculation:  
  
-----------------------------------------------------  
          Value of your investment: 0000.00  
          Value of accum. interest: 0000.00  
          Total Value             : 0000.00  
-----------------------------------------------------  
"Do you want another calculation (Y/N)?  "  
  
  
Enter "Y" (for Yes) to make another calculation.  
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the INVESTMENT CALCULATIONS  
menu.  
  
  
                      Page 8-15  
  
                      INVESTMENTS  
  
Future value of regular deposits  
--------------------------------  
  
Here is an example of a calculation of the future  
value of regular deposits of $100 a month at 5%  
interest for a term of 5 years.  The value of the  
investment of regular deposits would be calculated to  
be $6800.61:  
  
          
EXAMPLE   
  
  
  
           FUTURE VALUE OF REGULAR DEPOSITS  
  
Enter amount of each deposit      : 100  
Enter nominal interest rate       : 5  
Term of investment:  
                             Years= 5  
                            Months= 0  
  
Number of deposits per year       : 12  
  
  
-----------------------------------------------------  
          Value of your investment: 6000.00  
          Value of accum. interest:  800.61  
          Total Value             : 6800.61  
-----------------------------------------------------  
  
  
  
                      Page 8-16  
  
                      INVESTMENTS  
  
Deposits to create a desired total value  
------------------------------------------------  
The program will ask:  
  
       "Enter the desired total value :      "  
  
Enter the total value you want to get from the  
investment.  
        "Enter nominal interest rate  :      "  
  
Enter the current interest rate available.  
  
           "Term of investment:  Years=   "  
                                Months=   "  
  
Enter the number of years and months for the duration  
of the investment.  
  
         "Number of deposits per year:    "  
  
Enter the number of deposits you want to make each  
year.  
  
The program displays the results of the calculation:  
  
  
Regular deposits: 000.00  
-----------------------------------------------------  
          Value of your investment: 0000.00  
          Value of accum. interest: 0000.00  
          Total Value             : 0000.00  
-----------------------------------------------------  
"Do you want another calculation (Y/N)?  "  
  
Enter "Y" (for Yes) to make another calculation.  
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the INVESTMENT CALCULATIONS  
menu.  
  
  
                      Page 8-17  
  
                      INVESTMENTS  
  
Regular deposits to create a desired total value  
------------------------------------------------  
  
Here is an example of a calculation to determine what  
the regular monthly deposit would be at 5% interest  
rate to create a desired total value of $6000 at the  
end of 5 years.  The regular monthly deposit would be  
calculated to be $88.23:  
  
          
EXAMPLE   
  
  
              REQUIRED REGULAR DEPOSITS  
  
Enter the desired total value     : 6000  
Enter nominal interest rate       : 5  
Term of investment:  
                             Years= 5  
                            Months= 0  
  
Number of deposits per year       : 12  
  
  
  
Regular deposits :  88.23  
-----------------------------------------------------  
          Value of your investment: 5293.64  
          Value of accum. interest:  706.36  
          Total Value             : 6000.00  
-----------------------------------------------------  
  
  
                      Page 8-18  
  
  
  

         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
  
                      Page 8-19  
  
                     DEPRECIATION  
  
  
  
  
  
  
  
  
  
                      Page 8-20  
  
                     DEPRECIATION  
  
The procedure to calculate depreciation:  
  
1. Select "Calculations".  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
 
  
  
  
  
  
  
2. Select "Depreciation".  
  
  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
                      Page 8-21  
  
                     DEPRECIATION  
  
3. Select the type of depreciation:  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
  
  
  
  
If you want to calculate:  
o Annual depreciation rate   
  Turn to Page 8-22.  
  
  
If you want to calculate:  
o Amount of depreciation   
  Turn to Page 8-24.  
  
  
  
If you want to calculate:  
o Salvage value   
  Turn to Page 8-26.  
  
  
  
                      Page 8-22  
  
                     DEPRECIATION  
  
Annual depreciation rate  
------------------------  
The program will ask:  
  
         "Enter the original value :      "  
  
Enter the original value of your purchase.  
  
           "Enter the resale value :      "  
  
Enter the current value you can sell your purchase.  
  
           "Enter depreciation term  :   "  
  
Enter the number of years and months for the duration  
of the depreciation.  
  
  
  
  
The program displays the calculation of the rate of  
depreciation.  
  
             "Depreciation Rate = 0.00%"  
  
         "Do you want another calculation (Y/N)?  "  
  
  
Enter "Y" (for Yes) to make another calculation.  
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the DEPRECIATION CALCULATIONS  
menu.  
  
  
  
                      Page 8-23  
  
                     DEPRECIATION  
  
Annual depreciation rate  
------------------------  
  
Here is an example of a calculation to determine what  
the annual depreciation rate would be for an original  
value of $1000 (with an estimated resale value of  
$800) depreciated over a period of 5 years.  The  
depreciation rate would be calculated to be 4.36% per  
year:  
  
          
EXAMPLE   
  
  
  
               ANNUAL DEPRECIATION RATE  
  
Enter the original value          : 1000  
Enter the resale value            : 800  
Enter depreciation term:  
                             Years= 5  
                            Months= 0  
  
Depreciation rate  = 4.36%  
  
  
  
                      Page 8-24  
  
                     DEPRECIATION  
  
Amount of depreciation  
----------------------  
The program will ask:  
  
         "Enter the original value :      "  
  
Enter the original value of your purchase.  
  
          "Enter depreciation rate :      "  
  
Enter the current rate of depreciation.  
  
       "Depreciation term:  
                              Years =    "  
                             Months =    "  
  
Enter the number of years and months for the duration  
of the depreciation.  
  
  
  
  
The program displays the calculation of the amount of  
depreciation.  
  
          "Amount of depreciation = 000.00"  
  
         "Do you want another calculation (Y/N)?  "  
  
  
Enter "Y" (for Yes) to make another calculation.  
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the DEPRECIATION CALCULATIONS  
menu.  
  
  
                      Page 8-25  
  
                     DEPRECIATION  
  
Amount of depreciation  
----------------------  
  
Here is an example of a calculation to determine what  
the amount of depreciation would be for an original  
value of $1000 depreciated at a rate of 4% for 5  
years.  The amount of depreciation would be calculated  
to be $33.97:  
  
          
EXAMPLE   
  
  
  
                 DEPRECIATION AMOUNT  
  
Enter the original value          : 1000  
Enter depreciation rate           : 4  
Enter depreciation term:  
                             Years= 5  
                            Months= 0  
  
Amount of depreciation = 33.97  
  
  
  
                      Page 8-26  
  
                     DEPRECIATION  
  
Salvage value  
-------------  
The program will ask:  
  
         "Enter the original value :      "  
  
Enter the original value of your purchase.  
  
          "Enter depreciation rate :      "  
  
Enter the current rate of depreciation.  
  
       "Depreciation term:  
                             Years =   "  
                            Months =   "  
  
Enter the number of years and months for the duration  
of the depreciation.  
  
  
  
  
The program displays the calculation of the amount of  
salvage value.  
  
          "Amount of depreciation = 000.00"  
  
         "Do you want another calculation (Y/N)?  "  
  
  
Enter "Y" (for Yes) to make another calculation.  
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the DEPRECIATION CALCULATIONS  
menu.  
  
  
                      Page 8-27  
  
                     DEPRECIATION  
  
Salvage value  
-------------  
  
Here is an example of a calculation of what the  
salvage value would be for an original value of $1000  
at a depreciation rate of 4% for 5 years.  The amount  
of the salvage value would be calculated to be  
$815.37:  
  
          
EXAMPLE   
  
  
  
                    SALVAGE VALUE  
  
Enter the original value          : 1000  
Enter depreciation rate           : 4  
Enter depreciation term:  
                             Years= 5  
                            Months= 0  
  
Salvage value =  815.37  
  
                      Page 8-28  
  
  



         (This page is intentionally blank so that
          the next subject will start on the right 
          hand side in the registered manual.)
  
  
                      Page 8-29  
  
                         LOANS  
  
  
  
  
  
  
  
                      Page 8-30  
  
                        LOANS  
  
The procedure to calculate loans:  
  
1. Select "Calculations".  
  
  
  
  
       (Illustration in registered manual)  
  
  
  
  
  
  
  
  
  
  
2. Select "Loans".  
  
  
  
 
  
       (Illustration in registered manual)  
  
  
  
                      Page 8-31  
  
                         LOANS  
  
3. Select the type of loan you want to calculate:  
  
  
  
  
  
       (Illustration in registered manual)  
 
  
  
  
If you want to calculate:                              
o Regular payments on a loan                           
  Turn to Page 8-32.                                   
  
If you want to calculate:                              
o Last payment of a loan                               
  Turn to Page 8-34.                                   
  
  
If you want to calculate:                              
o Term of a loan                                       
  Turn to Page 8-36.                                   
  
  
If you want to calculate:                              
o Remaining balance of a loan                          
  Turn to Page 8-38.                                   
  
  
If you want to calculate:                              
o Cost of borrowing                                    
  Turn to Page 8-40.                                   
  
  
If you want to calculate:                              
o Loan amortization schedule                           
  Turn to Page 8-42.                                   
  
  
                      Page 8-32  
  
                         LOANS  
  
Regular payments on a loan  
--------------------------  
The program will ask:                                  
  
         "Enter the principal amount  :      "         
  
Enter the amount of money you want to borrow.          
  
          "Enter annual interest rate  :   "           
  
Enter the current interest rate per year.              
  
           "Term of loan:                              
                                 Years=   "            
                                Months=   "            
  
Enter the number of years and months for the loan to  
be paid off.  
  
  
  
  
The program displays the calculation of how much each  
regular payment will be:  
  
           "Regular payments = 000.00"                 
  
      "Do you want another calculation (Y/N)?  "       
      
  
  
Enter "Y" (for Yes) to make another calculation.       
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the LOAN CALCULATIONS menu.  
  
  
                      Page 8-33  
  
                         LOANS  
  
Regular payments on a loan  
--------------------------  
  
Here is an example of a calculation to determine how  
much the regular payments would be for a loan of $1000  
at an interest rate of 12% for a term of one year.   
Each regular payment would be calculated to be $88.25:  
  
  
          
EXAMPLE   
  
  
  
              REGULAR PAYMENTS ON A LOAN               
  
Enter the principal amount        : 1000               
Enter annual interest rate        : 12                 
Term of loan :  
                             Years= 1                  
                            Months= 0                  
  
  
Regular payments =  88.85                              
  
  
  
  
                      Page 8-34  
  
                         LOANS  
  
Last payment on a loan  
----------------------  
The program will ask:                                  
  
         "Enter the principal amount  :      "         
  
Enter the amount of money you want to borrow.          
  
          "Enter annual interest rate  :   "           
  
Enter the current interest rate per year.              
  
           "Term of loan:                              
                                 Years=   "            
                                Months=   "            
  
Enter the number of years and months for the loan to  
be paid off.  
  
  
  
The program displays the calculation of how much the  
last payment will be:  
  
            "Last payment = 000.00"                    
  
     "Do you want another calculation (Y/N)?  "        
      
  
  
Enter "Y" (for Yes) to make another calculation.       
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the LOAN CALCULATIONS menu.  
  
  
  
                      Page 8-35  
  
                         LOANS  
  
Last payment on a loan  
----------------------  
  
Here is an example of a calculation to determine how  
much the last payment on a loan would be for a loan of  
$1000 at an interest rate of 12% for a term of one  
year.  The amount of the last payment would be  
calculated to be $88.84:  
  
  
          
EXAMPLE   
  
  
  
              LAST PAYMENT ON A LOAN                   
  
Enter the principal amount        : 1000               
Enter annual interest rate        : 12                 
Term of loan :  
                             Years= 1                  
                            Months= 0                  
  
  
Last payment =  88.84                                  
  
  
  
                      Page 8-36  
  
                         LOANS  
  
Term of a loan  
--------------  
The program will ask:                                  
  
         "Enter the principal amount  :      "          
  
Enter the amount of money you want to borrow.          
  
       "Enter amount of regular payment :     "        
  
Enter how much you want to pay per payment.            
  
          "Enter annual interest rate  :   "           
  
Enter the current interest rate per year.              
  
  
  
  
The program displays the calculation of how long it  
will take to pay back the loan according to the  
payments and interest you entered.  
  
         "Term of loan     years     months"           
  
        "Do you want another calculation (Y/N)?  "     
      
  
  
Enter "Y" (for Yes) to make another calculation.       
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the LOAN CALCULATIONS menu.  
  
  
  
                      Page 8-37  
  
                         LOANS  
  
Term of a loan  
--------------  
  
Here is an example of a calculation to determine how  
long the term of a loan would be for a loan of $1000  
at an interest rate of 12% with regular monthly  
payments made of $100.  The term of the loan would be  
calculated to be 10 months:  
  
  
          
EXAMPLE   
  
  
  
                    TERM OF A LOAN                     
  
Enter the principal amount         : 1000              
Enter the amount of regular payment: 100               
Enter annual interest rate         : 12                
  
  
Term of loan  0 years 10 months                        
  
  
  
                      Page 8-38  
  
                         LOANS  
  
Remaining balance on a loan  
---------------------------  
The program will ask:  
  
"Do you want to have the loan payment calculated Y/N?"  
  
Enter "N" (for No) if you already know the amount of  
the loan payments and do NOT want the program to  
calculate it.  (The program will ask you later to  
enter the loan payment amount.)  
  
Enter "Y" (for Yes) if you do not know the amount of  
the loan payment and you DO want the program to  
calculate it.  (The program will not ask you to enter  
the loan payment amount.)  
  
The program will then ask:                             
         "Enter the principal amount  :      "         
  
Enter the amount of money you want to borrow.          
          "Enter annual interest rate  :   "           
  
Enter the interest rate per year of the loan.          
           "Term of loan:                              
                                 Years=   "            
                                Months=   "            
  
Enter the number of years and months for the loan to  
be paid off.  
       * "Enter regular payment amount :   "           
  
* Enter the amount you have been paying each payment.  
  
  
* The program asks this ONLY if you answered "No" to  
  having the program calculate the loan payment.  This  
  entry is OMITTED if you answered "Yes" to have the  
  program calculate the loan payment.  
  
  
  
                      Page 8-39  
  
                         LOANS  
  
Remaining balance on a loan  
---------------------------  
  
The program then asks:                                 
  
            "Number of payments made :   "             
  
Enter the number of payments you have already paid.    
  
The program displays the calculation of how much the  
remaining balance is on the loan:  
  
            "Remaining balance :   000.00"             
  
  
  
Here is an example of a calculation to determine how  
much the remaining balance of a loan is for a loan of  
$1000 at an interest rate of 12% for a term of one  
year, and you have made 6 monthly payments.  The  
remaining balance would be calculated to be $514.92:  
  
          
EXAMPLE   
  
  
             REMAINING BALANCE ON A LOAN               
  
Enter the principal amount        : 1000               
Enter annual interest rate        : 12                 
Term of loan :  
                             Years= 1                  
                            Months= 0                  
  
Number of payments made           : 6                  
  
Remaining balance :   514.92                           
  
  
  
                      Page 8-40  
  
                         LOANS  
  
Cost of borrowing  
-----------------  
The program will ask:                                  
  
         "Enter the principal amount  :      "         
  
Enter the amount of money you want to borrow.          
  
          "Enter annual interest rate  :   "           
  
Enter the current interest rate per year.              
  
           "Term of loan:                              
                                 Years=   "            
                                Months=   "            
  
Enter the number of years and months for the loan to  
be paid off.  
  
  
  
The program displays the calculation of the cost of  
borrowing and what the payments will be:  
  
  
-----------------------------------------------------  
          Regular payment         : 0000.00            
          Total payments          : 0000.00            
          Cost of borrowing       : 0000.00            
-----------------------------------------------------  
     "Do you want another calculation (Y/N)?  "        
      
  
  
Enter "Y" (for Yes) to make another calculation.       
  
Enter "N" (for No) if you do NOT want another calcu-  
lation.  It will exit to the LOAN CALCULATIONS menu.  
  
  
  
                      Page 8-41  
  
                         LOANS  
  
Cost of borrowing  
-----------------  
  
Here is an example of a calculation to determine how  
much the cost of borrowing is for a loan of $1000 at  
an interest rate of 12% for a term of one year.  The  
cost of borrowing would be calculated to be $66.19:  
  
          
EXAMPLE   
  
  
                  COST OF BORROWING                    
  
Enter the principal amount        : 1000               
Enter annual interest rate        : 12                 
Term of loan:  
                             Years= 1                  
                            Months= 0                  
  
  
-----------------------------------------------------  
          Regular payment         :   88.85            
          Total payments          : 1066.19            
          Cost of borrowing       :   66.19            
-----------------------------------------------------  
  
  
  
                      Page 8-42  
  
                         LOANS  
  
Loan Amortization Schedule  
--------------------------  
The program will ask:                                  
"Do you want to have the loan payment calculated Y/N?"  
  
Enter "N" (for No) if you already know the amount of  
the loan payments and do NOT want the program to  
calculate it.  (The program will ask you later to  
enter the loan payment amount.)  
  
Enter "Y" (for Yes) if you do not know the amount of  
the loan payment and you DO want the program to  
calculate it.  (The program will not ask you to enter  
the loan payment amount.)  
  
The program will then ask:                             
         "Enter the principal amount  :    "         
  
Enter the amount of money you want to borrow.          
          "Enter annual interest rate  :    "           
  
Enter the interest rate per year of the loan.          
  
           "Term of loan:                              
                                 Years=   "            
                                Months=   "            
  
Enter the number of years and months for the loan to  
be paid off.  
       * "Enter regular payment amount :      "   
  
* Enter the amount you have been paying each payment.  
  
  
* The program asks this ONLY if you answered "No" to  
  having the program calculate the loan payment.  This  
  entry is OMITTED if you answered "Yes" to have the  
  program calculate the loan payment.  
  
  
                      Page 8-43  
  
                         LOANS  
  
Loan Amortization Schedule  
--------------------------  
  
The program then asks:                                 
                                                       
      "Enter month first payment made:     "            
  
Enter the three-letter abbreviation of the month you  
want to make the first payment.  
  
         "Enter year first payment made:    "          
  
Enter the four-digit description of the year you want  
to make the first payment.  
  
 "Do you want amortization sent to printer (Y/N)?  "  
  
Enter "N" (for No) if you do NOT want the amortization  
schedule printed on your printer.  The amount will be  
displayed on the screen instead of printed.  
  
Turn to the next page for an example of a screen  
display of the amortization schedule.  
  
  
  
Enter "Y" (for Yes) if you want the amortization  
schedule to be printed on your printer.  
  
- For full size printing, your printer must be able    
  to print more than 80 columns.  
  
- For reduced size printing, you can use an 80 column   
  printer in "compressed" mode.  
  
Turn two pages ahead for an example of an amortization  
schedule printed on a printer.  
  
  
                      Page 8-44  
  
                         LOANS  
  
Loan Amortization Schedule  
--------------------------  
If you entered "N" (for No) because you do NOT want  
the amortization schedule printed on your printer, it  
will be displayed on the screen instead of printed.  
  
Here is an example of a screen display of an amort-  
ization schedule for a loan of $1000 at an interest  
rate of 12% for 6 months:  
  
EXAMPLE   
  
  
              LOAN AMORTIZATION SCHEDULE               
  
Enter the principal amount        : 1000               
Enter annual interest rate        : 12                 
Term of loan :  
                             Years= 0                  
                            Months= 6                  
  
Enter month first payment made    : JAN                
Enter year first payment made     : 1987               
  
Do you want amortization sent to the printer (Y/N)? N  
  
  
  
  
  
  
  
  
  
  
                      Page 8-45  
  
                         LOANS  
  
Loan Amortization Schedule  
--------------------------  
If you entered "Y" (for Yes) because you DO want the  
amortization schedule printed on your printer, it will  
be printed on your printer.  Remember, if your printer  
does not print more than 80 columns, set it to print  
"compressed" printing.  
  
Here is an example of a print-out of the same  
amortization schedule of a loan of $1000 at an  
interest rate of 12% for a term of 6 months:  
  
EXAMPLE   
  
              LOAN AMORTIZATION SCHEDULE               
  
Enter the principal amount        : 1000               
Enter annual interest rate        : 12                 
Term of loan :  
                             Years= 0                  
                            Months= 6                  
  
Enter month first payment made    : JAN                
Enter year first payment made     : 1987               
  
Do you want amortization sent to the printer (Y/N)? Y  
  

  
       (Illustration in registered manual)  


  
  
                        INDEX  
  
  
  
  
  
  
  
  
  
A ---------------------------------------------------  
  
Abort . . . . . . . . . . . . . . . . . . . . . .4-33  
Account balance report. . . . . . . . . . . . . . 5-9  
Account balance  . . . . . . . . . . .4-24,25,35, 5-8  
Account Manager menu. . . . . . . . . . . . . . .2-16  
Account Listing To CRT. . . . . . . . . . . .3-7, 4-3  
Account Listing To Printer. . . . . . . . . .3-7, 4-3  
Account Used For. . . . . . . . . . . . . . . . .4-35  
Account data. . . . . . . . . . . . . . . . . . . 2-4  
Account number. . . . . . . . . . . . . . . . . . 4-6  
Account Manager Menus . . . . . . . . . . . . . . 4-7  
Account Listings. . . . . . . . . . . . . . . . .4-44  
Alt-N . . . . . . . . . . . . . . . . . . . . 4-2, 12  
Amortization. . . . . . . . . . . . . . . . . . .8-42  
Amount of depreciation. . . . . . . . . . . . . .8-24  
Annual depreciation rate. . . . . . . . . . . . .8-22  
Asterisk "*". . . . . . . . . . . . . . . . . . .4-49  
Asterisk "*" in the first column. . . . . . . . .4-47  
  
B ---------------------------------------------------  
  
Back out. . . . . . . . . . . . . . . . . . . . . 4-2  
Back-up copies. . . . . . . . . . . . . . . . . . 2-8  
Balance account . . . . . . . . . . . . . . . . .4-25  
Balance . . . . . . . . . . . . . . . . . . . 4-6, 10  
Bar Graph . . . . . . . . . . . . . . . . . .7-15, 30  
Bootable diskettes  . . . . . . . . . . . . . . . 2-3  
Budget, changing. . . . . . . . . . . . . . . . .7-20  
Business vs. personal accounts . . . . .5-16, 6-8, 20  
Business expense categories . . . . . . . . . . .2-14  
  
C ---------------------------------------------------  
  
Cash account. . . . . . . . . . . . . . . . . . . 4-5  
Cash flow graph . . . . . . . . . . . . . .4-42, 5-20  
Cash flow report. . . . . . . . . . . . . .4-42, 5-12  
Category graphs . . . . . . . . . . . . . . . . .5-16  
Change account name . . . . . . . . . . . . . . .6-18  
Change Variable Expenses. . . . . . . . . . . . .7-28  
  
  
Change old budget . . . . . . . . . . . . . . . .7-20  
Change Deductions . . . . . . . . . . . . . . . .7-24  
Change fixed expenses . . . . . . . . . . . .7-25, 26  
Change Income . . . . . . . . . . . . . . . . . .7-22  
Change. . . . . . . . . . . . . . . .4-29, 6-18, 7-13  
Charge account. . . . . . . . . . . . . . . . . . 4-5  
Checking account. . . . . . . . . . . . . . . . . 4-5  
Color monitor . . . . . . . . . . . . . . . . . . 2-7  
Commands. . . . . . . . . . . . . . . . . . . . . 3-4  
Comments. . . . . . . . . . . . . . . . . . . . .4-33  
CON . . . . . . . . . . . . . . . . . . . . . . . 4-6  
Convert your old data files . . . . . . . . . . . 2-6  
Converting earlier versions . . . . . . . . . . .2-11  
Copy the example data files . . . . . . . . . . .2-12  
Copy the program files. . . . . . . . . . . . . . 2-6  
Cost of borrowing . . . . . . . . . . . . . . . .8-40  
Create a new budget . . . . . . . . . . . . . .7-3, 6  
Ctrl-P. . . . . . . . . . . . . . . . . . . .3-8, 4-2  
Ctrl-E. . . . . . . . . . . . . . . . . . . .4-2, 3-9  
Current date. . . . . . . . . . . . . 4-6, 19, 20, 45  
Current status. . . . . . . . . . . . . . . . . .4-10  
  
D ---------------------------------------------------  
  
Date Last Updated . . . . . . . . . . . . . . . .4-35  
Date Account Opened . . . . . . . . . . . . . . .4-35  
Day field ... . . . . . . . . . . . . . .4-14,19, 6-7  
Deductions. . . . . . . . . . . . . . . . . . . . 7-8  
Del . . . . . 2-14, 4-14,19,20,24,30,34, 6-7,10,11,18  
Delete an account . . . . . . . . . . . . . . . .6-12  
Deposits to create a desired total value. . . . .8-16  
Depreciation. . . . . . . . . . . . . . . . . 8-4, 20  
Directories . . . . . . . . . . . . . . . . . . . 2-6  
Directory . . . . . . . . . . . . . . . . . .2-10, 16  
Display an Entry or Check . . . . . . . . . . . . 3-7  
Display expense categories. . . . . . . .4-17, 39, 48  
Display category numbers. . . . . . . . . . . . .4-15  
Display an Entry or Check . . . . . . . . . . .4-3, 4  
Display Registration Info . . . . . . . . . . . . 3-5  
Display a bar graph of your budget. . . . . . . .7-30  
Displayed in RED REVERSE. . . . . . . . . . . . .4-46  
Displayed in GREEN. . . . . . . . . . . . . .4-46, 47  
Disposable Income . . . . . . . . . .7-11, 25, 27, 28  
  
  
DOS format. . . . . . . . . . . . . . . . . . . . 2-4  
Down arrow. . . . . . . . . . . . . . . . . . . .4-27  
Drive for data files. . . . . . . . . . . . . . .2-10  
Drive for FastBucks program . . . . . . . . . . . 2-9 
  
E ---------------------------------------------------  
  
Earlier version of FastBucks. . . . . . . . . . . 2-6  
Earliest Outstanding Transaction. . . . . . . . .4-35  
Edit account. . . . . . . . . . . . . . . . . . .4-26  
Edit account name . . . . . . . . . . . . . . . .6-18  
Edit. . . . . . . . . . . . . . . . . . .4-10, 26, 29  
End key . . . . . . . . . . . . . . . . . . . . .4-27  
Enter date of deposit . . . . . . . . . . . . . .4-19  
Enter date of interest payment. . . . . . . . . .4-23  
Enter date of service charge. . . . . . . . . . .4-22  
Enter checks. . . . . . . . . . . . . . . . . . .4-12  
Enter date check written. . . . . . . . . . . . .4-14  
Enter expense category. . . . . . . . . . . .4-15, 20  
Enter withdrawals . . . . . . . . . . . . . . . .4-12  
Enter Statement Balance . . . . . . . . . . .4-24, 25  
Enter account name. . . . . . . . . . . . . . . . 6-6  
Enter account number. . . . . . . . . . . . . . . 6-6  
Enter date account opened . . . . . . . . . . . . 6-6  
Enter service charges . . . . . . . . . . . . . .4-12  
Enter reason for withdrawal . . . . . . . . . . .4-20  
Enter deposits. . . . . . . . . . . . . . . . . .4-12  
Enter check number. . . . . . . . . . . . . . . .4-14  
Enter interest payments . . . . . . . . . . . . .4-12  
Enter reason for service charge . . . . . . . . .4-22  
Enter date of withdrawal. . . . . . . . . . . . .4-20  
Enter initial account balance . . . . . . . . . . 6-6  
Enter amount of withdrawal. . . . . . . . . . . .4-20  
Enter amount of check . . . . . . . . . . . . . .4-14  
Enter amount of deposit . . . . . . . . . . . . .4-19  
Enter amount of service charge. . . . . . . . . .4-22  
Enter amount of interest payment. . . . . . . . .4-23  
Entering Dates. . . . . . . . . . . . . . . . . . 5-5  
Erase the displayed entry . . . . . . . . . . . .4-14  
Erase characters in a field . . . . . . . . . . .4-30  
Esc  . . . . . .3-9, 4-2,16,31-33, 6-18, 7-16, 31, 37  
Example data files. . . . . . . . . . . . . .2-12, 13  
  
  
Existing FastBucks. . . . . . . . . . . . . . . .2-11  
Expense Category Graphs . . . . . . . . . . . . .4-39  
Expense categories. . . . . . . .2-14, 3-8, 4-2, 5-16  
Expense category set-up . . . . . . . . . . . . .2-14  
Expenses exceed your income . . . . . . . . . . .7-11  
Experiment with your forecast . . . . . . . . . .7-12  
Express . . . . . . . . . . . . . . . . . . .3-9, 4-2  
  
F ---------------------------------------------------  
  
F1. . . . . . . . . . . . . . . . . 4-2, 39, 48, 5-16  
F2. . . . . . . . . . . . . . . . . . . . . . 4-2, 17  
F5. . . . . . . . . . . . . . . . . . . . . . . .4-12  
F10 . . . . . . . . 2-14, 4-16, 7-9,10,13,14,24,27,29  
Features  . . . . . . . . . . . . . . . . . . . . 1-4  
First time installation . . . . . . . . . . . . .2-12  
Fix data files. . . . . . . . . . . . . . . . . .6-14  
Fixed Expenses. . . . . . . . . . . . . . . . . .7-10  
Floppy diskette . . . . . . . . . . . . . . . . . 2-4  
Format. . . . . . . . . . . . . . . . . . . . . . 2-3  
Formatted diskettes . . . . . . . . . . . . . . . 2-3  
Freeze entries. . . . . . . . . . . . . . . . 7-12-14  
Freeze all entries. . . . . . . . . . . . . . . .7-14  
Future value of one-time investment . . . . . . .8-12  
Future value of regular deposits. . . . . . . . .8-14  
  
G ---------------------------------------------------  
  
Getting out of the program. . . . . . . . . . . .2-20  
Graphic printer . . . . . . . . . . . . . . . . . 1-3  
Graphics printing . . . . . . . . . . . . . . . .7-16  
  
H ---------------------------------------------------  
  
Hard disk . . . . . . . . . . . . . . . . . . . . 2-4  
Hardware requirements . . . . . . . . . . . . . . 1-3  
Home budget . . . . . . . . . . . . . . . . . . . 7-2  
Home key. . . . . . . . . . . . . . . . . . . . .4-27  
  
I ---------------------------------------------------  
  
IBM graphics. . . . . . . . . . . . . . . . . . .7-16  
  
  
Income. . . . . . . . . . . . . . . . . . . . . . 7-7  
Installation procedure. . . . . . . . . . . . . . 2-6  
Investments . . . . . . . . . . . . . . . . . 8-3, 10  
  
J ---------------------------------------------------  
  
K ---------------------------------------------------  
  
L ---------------------------------------------------  
  
Last Check Number Written . . . . . . . . . . . .4-35  
Last Entry. . . . . . . . . . . . . . . . . . . . 4-6  
Last check number . . . . . . . . . . . . . . . .4-14  
Last payment on a loan. . . . . . . . . . . . . .8-34  
List Outstanding. . . . . . . . . . . . . . . . .4-47  
List Notes "ON" . . . . . . . . . . . . . . . . . 4-3  
List All Entries. . . . . . . . . . . . . . . . .4-45  
List Expense Category . . . . . . . . . . . . . .4-48  
List by Year. . . . . . . . . . . . . . . . . . .4-45  
List by Month . . . . . . . . . . . . . . . . . .4-45  
List Notes "ON" . . . . . . . . . . . . . . . . . 3-7  
List Notes "OFF". . . . . . . . . . . . . . . . . 4-3  
List an account . . . . . . . . . . . . . . . . .2-19  
List Tax Deductible . . . . . . . . . . . . . . .4-48  
List Total File . . . . . . . . . . . . . . . . .4-46  
List Notes "OFF". . . . . . . . . . . . . . . . . 3-7  
Loan Amortization Schedule. . . . . . . . . . . .8-42  
Loans . . . . . . . . . . . . . . . . . . . . 8-5, 30  
  
M ---------------------------------------------------  
  
Main Menu . . . . . . . . . . . . . . . . . . . .2-16  
Monitor type. . . . . . . . . . . . . . . . . . . 2-7  
Monochrome monitor. . . . . . . . . . . . . . . . 2-7  
Month field . . . . . . . . . . . . . . .4-14,19, 6-7  
Monthly Cash Flow Graphs. . . . . . . . . . . . .4-42  
  
N ---------------------------------------------------  
  
Name of the account . . . . . . . . . . . . . . . 4-6  
No Printer on System. . . . . . . . . . . . . . .2-13  
No printer set-up required. . . . . . . . . . . .2-13  
Notes  . . . . . . . . . 3-8, 4-2,3,11-13,16,29,33,46  
  
  
  
O ---------------------------------------------------  
  
Out of chronological sequence . . . . . . . . . .4-15  
Outgo of money. . . . . . . . . . . . . . . . . .7-11  
Outstanding Debits. . . . . . . . . . . . . . . .4-35  
Outstanding . . . . . . . . . . . . . . . . . . .4-46  
Outstanding Credits . . . . . . . . . . . . . . .4-35  
Over-type  . . . . . . . . . . . . . .4-14,19,30, 6-7  
Overdrawn . . . . . . . . . . . . . . . . . . . .4-46  
  
P ---------------------------------------------------  
  
Partial amount. . . . . . . . . . . . . . . . . .4-49  
Personal expense categories . . . . . . . . . . .2-14  
Personal vs. business accounts  . . . .  5-16,20, 6-8  
PgDn. . . . . . . . . . . . . . . . . . . . . . .4-27  
PgUp. . . . . . . . . . . . . . . . . . . . . . .4-27  
Previous versions of FastBucks. . . . . . . . . . 2-8  
Print Budget. . . . . . . . . . . . . . . . . .7-3,17  
Print FastBucks Registration Form . . . . . . . . 3-5  
Print graphics. . . . . . . . . . . . . . . . . .4-41  
Print compressed. . . . . . . . . . . . . . . 8-7, 45  
Print old budget. . . . . . . . . . . . . . . . .7-36  
Print your budget . . . . . . . . . . . . . . . .7-32  
Printed reports . . . . . . . . . . . . . . . . .4-42  
Printer . . . . . . . . . . . . . . . . 3-8, 4-2, 8-7  
Printer types . . . . . . . . . . . . . . . . . .2-13  
Printer set-up. . . . . . . . . . . . . . . . . .2-13  
Printing graphics . . . . . . . . . . . . . . . .7-16  
Program files . . . . . . . . . . . . . . . . 2-6, 13  
PrtSc . . . . . . . . . . . . . . . . . . . . . .4-41  
Purge checks. . . . . . . . . . . . . . . . . . .4-34  
Purge . . . . . . . . . . . . . . . . . . . .4-26, 34  
Purge entries that are not checks . . . . . . . .4-34  
  
Q ---------------------------------------------------  
  
Quit. . . . . . . . . . . . . . . . . . .4-26, 29, 32  
  
  
  
R ---------------------------------------------------  
  
Re-Build index files. . . . . . . . . . . . . . .6-14  
Re-Define Crt Type. . . . . . . . . . . . . . . . 3-5  
Re-Define Data File Drive/Pathname. . . . . . . . 3-5  
Re-Define Expense Categories. . . . . . . . . . . 3-5  
Re-Define Printer Type. . . . . . . . . . . . . . 3-5  
Recap entries . . . . . . . . . . . . . . . . . .7-29  
Reconcile . . . . . . . . . . . . . . . . . . . .4-10  
Reconcile account . . . . . . . . . . . . . . . .4-24  
Regular payments on a loan. . . . . . . . . . . .8-32  
Remaining balance on a loan . . . . . . . . . . .8-38  
  
S ---------------------------------------------------  
  
Salvage value . . . . . . . . . . . . . . . . . .8-26  
Sample data files . . . . . . . . . . . . . . . .2-12  
Save Budget to Disk . . . . . . . . . . . . . 7-16,31  
Save your account data. . . . . . . . . . . . . . 2-4  
Savings account . . . . . . . . . . . . . . . . . 4-5  
Search. . . . . . . . . . . . . . . . . . . .4-26, 28  
Shift-Tab . . . . . . . . . . . . . . . . . . . .4-14  
Split expense categories. . . 3-8, 4-2,11,12,15,17,49  
Start new account . . . . . . . . . . . . . . . . 6-6  
Status Line . . . . . . . . . . . . . . . . . 4-6, 13  
Status of your account. . . . . . . . . . . . . .4-35  
Status Report . . . . . . . . . . . . . . . . . .4-35  
  
T ---------------------------------------------------  
  
Tab . . . . . . . . . . . . . . . . . . . . 4-14, 6-7  
Term of a loan. . . . . . . . . . . . . . . . . .8-36  
Test drive. . . . . . . . . . . . . . . . . . . .2-16  
The display screen's Main Menus . . . . . . . . . 4-6  
Tips. . . . . . . . . . . . . . . . . . . . . . . 4-2  
Toggle Program Introduction . . . . . . . . . . . 3-5  
Total Account Entries . . . . . . . . . . . . . .4-35  
Turn Off Sales Pitch. . . . . . . . . . . . . . . 3-5  
Two disk drive system . . . . . . . . . . . . . . 2-3  
  
  
  
U ---------------------------------------------------  
  
Up arrow. . . . . . . . . . . . . . . . . . . . .4-27  
Update Account - Deposit. . . . . . . . . . . . .4-19  
Update account - interest pmt . . . . . . . . . .4-23  
Update your account . . . . . . . . . . . . .4-10, 11  
Update account - withdrawal . . . . . . . . . . .4-20  
Update account - service charge . . . . . . . . .4-22  
Update Account - Check. . . . . . . . . . . . . .4-13  
Update old budget . . . . . . . . . . . . . . . .7-20  
Update account - auto teller. . . . . . . . . . .4-21  
Update account. . . . . . . . . . . . . . . . . .2-17  
Update an existing budget . . . . . . . . . . . . 7-3  
User installed printer. . . . . . . . . . . . . .2-13  
  
V ---------------------------------------------------  
  
Variable Expenses . . . . . . . . . . . . . .7-12, 13  
Void. . . . . . . . . . . . . . . . . . .4-29, 32, 34  
  
W ---------------------------------------------------  
  
X ---------------------------------------------------  
  
Y ---------------------------------------------------  
  
Yearly Cash Flow Graphs . . . . . . . . . . . . .4-42  
  
Z ---------------------------------------------------  

```
{% endraw %}

## NEW.DOC

{% raw %}
```
WHATS NEW!

        New Features for FastBucks 4.0X

Note: * indicates function available to registered user.

   1. More streamlined data entry procedures
   2. Entry comment or notes: 3 lines 23 chars
   3. Full screen editing in "Edit Account" mode
      With: Void,Purge, & Search Modes.
   4. Split expense categories over 6 expense categories
   5. Search for Individual Check or Transaction or description.
   6. Pop-Up expense categories during expense category entry
   7. Edit account name/Number.
   8. Merged listings and graphics
   9. Cash flow Reports (merged and individual account)
  10. Differentiates between Business and Personal account
     ( with seperate expense categories )
  11. Cash flow graphics for individual and merged accounts
  12. Account Balance report for all accounts.
  13. Toggle account listing between crt and printer
  14. Change transaction amount during account reconciliation process 
  15. Each account can process up to 270,000 entries
  16. A maximum check number of 32648 is accepted.
  17. Crt Type can be re-defined (color or monochrome)
  18. Expense categories can be re-defined for both Business and Personal
      expense categories.
  19. Printer type can be re-defined
  20. Data Drive:\Pathname can be re-defined (with defaults).
  21. Faster Screen IO 
  22. More efficient date entry and error checking with automatic sort
      for a transaction date that is out of sequence.
  23. Last check number + 1 becomes default check number for next entry.
  24. On line HELP menus.
  25. More descriptive I/O error codes and more extensive I/O error trapping.
                (.....Hopefully you will never see these.....)
  26. Delete an account from your files.
  27. FastBucks now directly supports 141 printers and has a user configuration
      if your printer is not directly supported.
  28. Search for a check or entry number.
  29. Entries are automaticly sorted by date during Update and account edit.
* 30. Program introduction can be toggled on or off as desired.
* 31. Program exit Shareware information screen may be turned off.
  32. Program registration form may be printed out at any time.
  33. Integrated menu screens.
  34. Complete operator manual included with Shareware program.

    The  Insthd.bat file has been abandoned  and a program called install.com
has been created.

The install program performs the following functions:

    1.   Automaticaly sets up data and work disks for a 2 drive floppy system

    2.   Sets up the printer,Crt-type,and expense categories for personal and
business  accounts.   If Earlier  versions of  FastBucks have  been installed
Install picks up those definitions and places them into the new configuration
file. You may still re-define them if you desire to do so.
  
    3.  Install  allows user  to re-define  business expense  categories from
program default definitions.   installation  of  FastBucks  personal  expense
categores can also be re-defined at this time.

    4.  Install converts earlier version FastBucks data files to 4.xx format
```
{% endraw %}

## README.DOC

{% raw %}
```



                                                                        1


                            FastBucks Vers 4.10
        Copyright (c) Software Expressions 1986 All Rights Reserved
                                     
                           Software Expressions
                              P.O. Box 301002
                         Houston,Texas 77230-1002
                                     
         ( Member of Association of Shareware Professionals "ASP")
                                     
       ***************************************************************
       *         DISCLAIMER OF ALL WARRANTIES AND LIABILITY          *
       ***************************************************************
       * Software Expressions makes no warranties, either expressed  *
       * or implied, with respect to the software described in this  *
       * document,  its quality,  performance, merchantability,  or  *
       * fitness  for  any  particular  purpose.  Software  sold by  *
       * Software Expressions is  sold  or  licensed  "as is".  The  *
       * entire risk as to its quality and performance is  with the  *
       * user.  Should the programs prove defective following their  *
       * use or registration, The  user  (not Software Expressions,  *
       * its distributor or retailer) assumes the entire cost of all *
       * necessary servicing,repair,or correction and any incidental *
       * or consequential damages.                                   *
       * In no event will Software Expressions be liable for direct, *
       * indirect, incidental for  consequential damages  resulting  *
       * from any defect in the software,even if Software Expressions*
       * has been advised of the possibility of such damage.         *
       ***************************************************************
     
     
               License is   granted  to   user to   use  the FastBucks
          program for  a period not to  exceed ninety  days from  date
          of installation  on their  computer  system  for  evaluation
          purposes. If  the user  continues  to  use  the    FastBucks
          program he  or she  is expected to pay a registration fee of
          $47.75 US funds to Software Expressions.
               
               This software   may   be  freely  copied as  long as no
          payment for  the FastBucks  program files  and  sample  data
          files is  requested. A  nominal copying  service fee  may be
          charged  only  with  the  express    written  permission  of
          Software Expressions.
               
               The FastBucks program  files and data files may not  be
          installed  by a commercial vendor  on a computer, hard  disk
          Floppy disk  or CDROM  disk for  sale to  a third  party  or
          bundled   with a  computer for   any  reason   without   the
          express written  permission of Software Expressions.
          
     
     
     
      FastBucks (r) is a registered trademark of Software Expressions
     


                                                                        2


     
           FastBucks is not a "Public Domain" or "Free" program. It is
     marketed using  the "ShareWare"  (user    supported)  concept  of
     program   distribution to avoid the high cost of advertising. You
     have the chance to try FastBucks and decide whether it suits your
     needs. If  you use FastBucks you are expected to "Buy  it".  This
     is the  ultimate "money  back guarantee".  If you  don't use  the
     program simply discard it or pass it on to a friend.
     
          For   a small  registration fee of $47.75 you will receive a
     bound 167  page user  manual, a serialized  distribution diskette
     of the  latest   FastBucks release,  A software Key to enable the
     function keys so you can turn off the exit shareware screen , and
     toggle the program  introduction  on or off as  you desire, along
     with telephone  support for  the program  for one  year following
     date   of  registration  and  my  "Sincere Thanks" for purchasing
     FastBucks.
     
           For an  additional registration Fee of $17.25 the user will
     receive "Free" Fastbucks program updates for a period of one year
     from the  date   of registration. All shipping and handling costs
     will be paid for by Software Expressions.
     
           A rebate  of $5.00  will be sent to the registered user for
     each  subsequent   registration    from  his  or  her  serialized
     distribution diskette or copies made from the serialized diskette
     for one year following date of registration.
     
     *** WARNING ****
     
     If you  have been  using earlier  versions of FastBucks, for your
     own peace of  mind and mine.
     
          BEFORE YOU RUN INSTALL MAKE A BACKUP OF YOUR DATA FILES
                                     
     Things do  go wrong  when they  are most inconvenient and I would
     hate to  have you  re-key in your account  data if something went
     off into the weeds.
     
                                                                        4


     Some "Basic" operation information:
     
         Hit  "Esc" to back out of one level Menu  to a higher level
     Menu.  Or Hit "Esc" from the "Main Menu" this will exit the
     program.
     
           "Esc" is  generally (  But not always ) the "Get  me out of
     Here Key"  or "Just  kidding" key,  so if you seem to be stuck in
     the graphics  mode or  other FastBucks  function hit "Esc". NEVER
     HIT CTRL-ALT-DEL  OR TURN POWER OFF. This can damage some of your
     data files, or lose some or all of your data.
     
           Hit Ctrl+E  to jump  to the  main menu from any lower level
     menu. This also works from the account listing section.
     
         Most commands  are intuitive and  don't need much
     explanation except for the following:
     
     During an expense category input prompt:
     
     1. Hitting the F1 key will Pop-Up a listing of all expense
        categories.

     2. If you are at a expense category prompt during either update
        or edit modes:
     
         a.) Hitting the F1 key will Pop-Up a listing of all expense
             categories.
         b.) Hitting the F2 key will put you in the split account
             mode.
     
     From the "Account Manager Menu" or "First" update screen:
     
     1. Hitting  Alt+N will toggle the note entry-output mode.A Prompt
     on line  25 will  show "Notes" when this toggle is on. If "Notes"
     are toggled  "On"   the update  procedure will  accept notes  for
     each entry,and  the account  listing will   list  any  notes  you
     have   entered   on   the line  below the transaction entry. Also
     hitting the  F5 key  will turn notes "On" hitting the F6 key will
     turn "Notes" off.
     
          I  would strongly recommend a "limited" use of this feature.
     Each note eats up 69  bytes of  your disk space. Each entry  uses
     38. Since   it  is possible to  enter approximately 270,000 notes
     per account  It would  not take  very long  before your note file
     started to eat up substantial amounts of your disk space.


                                                                        5


     
     2. Hitting Ctrl + P will toggle the  printer. A prompt on line 25
     will indicate   the  listing device.  If the prompt indicates CON
     then the  listing will  go to  the   CRT. If the prompt indicates
     PRN then  the listing  will be  directed to  the   printer.  Also
     hitting   F2 will   turn  the PRN  flag "on"  and hitting  the F3
     function turn on the "CON" flag.
     
     3. Hitting  F4 will  select the  "Search" mode.   you  may get an
     individual listing  of a  account transaction  or check  while in
     this mode.
     
     4. Hitting F1 will Pop-Up a window reminding you what the
     function keys do should you forget
     
          You   may "Edit"  a   transaction amount during  the account
     reconciliation process.   simply  hit  the Left arrow  key.  Type
     in the  New    amount  then  hit  return.  The    program    will
     automatically   re-balance  your  account  before continuing with
     the reconciliation process.
     
     5. If you  hit "F1"  while  in the  First FastBucks screen a menu
     will  Pop-Up that  will allow you to redefine your CRT type, Data
     file path,expense categories,register FastBucks etc.

        If you are a "registered" FastBucks customer you will also be
     able to  turn off  the Shareware exit screen from this menu. and
     toggle the program introduction on or off as you desire.

          I trust that the above information will be of assistance for
     you to  Install   and operate FastBucks Home finance. Whether you
     decide to  buy FastBucks  or not.  If there are any features that
     you  would like to see in future versions of this program. Please
     feel free to write me and let me know what you would like to see,
     I really  want your input. It's the only way I can determine what
     the "Public" really wants in a home accounting program.
     
     
                 What's New:
     
                     Please read Whats.new
     
    I will  be happy to answer any  "Can-it-do" and "Will-it-do" questions on
Compuserve.   Any "How-do-it-do" or "Why-do-it-do"  answers are reserved only
for "Registered Fastbucks Customers".  My Compuserve ID is 76676,1316.
     
    You  may also register with MC/Visa through the Public (Software) Library
by   calling  1-800-2424-PSL   (for  orders   only;  for   information,  call
713-665-7017) or by writing PSL; P.O.B.  35705; Houston, TX 77235-5705."

    Have Fun!  and I hope you find Fastbucks a useful program.
     
     
     
     
                               Dennis C. Lozen
     
```
{% endraw %}

## WARNING.DOC

{% raw %}
```

             *********************************************************
             *********************************************************
             *                                                       *
             *   WARNING WARNING WARNING WARNING WARNING WARNING     *
             *                                                       *
             *********************************************************
             * FastBucks vers 4.0 uses completely different data     *
             * structure you must use the install program to convert *
             * them.                                                 *
             *                                                       *
             *   DO NOT TRY TO RUN FASTBUCKS 4.0 ON EARLIER 3.1X     *
             *                     DATA FILES                         *
             *                                                       *
             * FastBucks 4.0 will destroy any 3.xx series data files  *
             * that it tries to read.                                *
             *                                                       *
             *********************************************************
             *********************************************************

Please read the Readme.now and Install documentation on Disk-2 before trying to
install FastBucks on your computer. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1296

     Volume in drive A has no label
     Directory of A:\

    ACTS     DAT        42   8-24-89   5:49p
    ASP      BAT        28   8-24-89   5:49p
    ASP      DOC       415   8-24-89   5:49p
    CHK0     DTA     66861   8-24-89   5:49p
    CHK0     NTE      1012   8-24-89   5:49p
    CHK0     SPL      1014   8-24-89   5:49p
    CONFIG   SYS        22   8-24-89   5:49p
    FBFILES  EXE      7791   8-24-89   5:49p
    FILE1296 TXT      1770  12-05-89  12:13p
    FILES    BAT        30   8-24-89   5:49p
    FILES    TXT      1385   8-24-89   5:49p
    GO       BAT        38  10-19-87   2:37p
    GO       TXT       463   9-18-89   3:25p
    INSTALL  DOC      9267   8-24-89   5:49p
    INSTDOC  BAT        32   8-24-89   5:49p
    MANUAL   BAT       767   8-24-89   5:49p
    MANUAL   DOC    201500   8-24-89   5:49p
    NEW      BAT        30   8-24-89   5:49p
    NEW      DOC      3130   8-24-89   5:49p
    README   BAT        31   8-24-89   5:49p
    README   DOC     10172   8-24-89   5:49p
    WARNING  BAT        32   8-24-89   5:49p
    WARNING  DOC      1423   8-24-89   5:49p
    WHATS    NEW       932   8-24-89   5:49p
           24 file(s)     308187 bytes
                           38912 bytes free
