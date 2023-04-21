---
layout: page
title: "PC-SIG Diskette Library (Disk #1560)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1560/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1560"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHEQUE-IT-OUT 2 OF 2 (ALSO 1559)"

    Quicker than "Quicken," more intuitive than "Intuit," CHEQUE-IT-OUT is
    the choice for everyone who wants to do more than just balance their
    checkbooks. Here at last is a complete personal bookkeeping system that
    doesn't expect you to be an accountant to use it. Nor does it treat you
    like a child in its well thought out explanations of how to keep track
    of your finances, balance the books and generate impressive statements
    of net worth, profit and loss, etc., -- guaranteed to impress your
    banker or accountant.
    
    The double-entry financial system creates financial reports, and
    tracks income and expenses, assets, liabilities and budgets. It
    prints checks, both standard pin-fed and individual personal checks.
    Easy-to-follow menus and context-sensitive pop-up help screens guide you
    along, and the optional sound effects actually make doing your books
    fun! More importantly, this is a program that puts you back in charge
    of your own finances -- teaching you what you need to know to manage
    your money yourself!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CIO.DOC

{% raw %}
```
















                                 CHEQUE-IT-OUT


                                 USER'S MANUAL













                                  Version 1.1













                          Hooper International, Inc.
                                P.O. Box 50200
                          Colorado Springs, CO 80949
                                (719) 528-8989








    Copyright (C) 1989, 90 by Hooper International, Inc.
    All rights reserved









                               COPYRIGHT NOTICE

    'CHEQUE-IT-OUT' is not a public domain program.  It is Copyright (C)
    1989, 90 by Hooper International, Inc.

    No part of this manual may be reproduced, translated, in any form or
    by any means, without the prior written permission of Hooper
    International.  The software described in this manual is protected by
    copyright laws.

               Copyright (C) 1989, 90 Hooper International, Inc.



                             WARRANTY INFORMATION

    HOOPER INTERNATIONAL, INC. LICENSES THIS SOFTWARE AND MANUAL "AS IS"
    WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING,
    BUT NOT LIMITED TO, THE PARTICULAR PURPOSE.  HOOPER INTERNATIONAL DOES
    NOT WARRANT THAT THE 'CHEQUE-IT-OUT' SOFTWARE WILL MEET YOUR REQUIRE-
    MENTS, OR THAT THE OPERATION OF 'CHEQUE-IT-OUT' WILL BE UNINTERRUPTED
    OR ERROR FREE.

    IN NO EVENT WILL HOOPER INTERNATIONAL, INC. BE LIABLE FOR CONSEQUENTIAL,
    INCIDENTAL, INDIRECT OR OTHER DAMAGES, INCLUDING ANY LOST PROFITS,
    LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT
    OF THE USE OF, OR INABILITY TO USE, THIS PROGRAM, EVEN IF HOOPER
    INTERNATIONAL, INC. HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES,
    OR FOR ANY CLAIM BY ANY OTHER PARTY.

    Please keep in mind, WE DO NOT ACCEPT RETURNS OR GIVE REFUNDS ON
    REGISTERED COPIES.  Instead, we give you every opportunity to try the
    software before you decide to register your copy.  We will, however,
    replace defective disks for a minimal shipping and handling charge of
    $5.50, for up to a period of 90 days from initial shipping date.
    Please note that defective disks must be returned prepaid and insured
    by sender.  In this way, we are assured of complete customer
    satisfaction.  And, as you can see, we value your business.

    Information in this manual is subject to change without notice and
    does not represent a commitment on the part of Hooper International, Inc.

    This publication could include technical inaccuracies or typographical
    errors.  Changes are periodically made to the information herein;
    these changes may be incorporated in new additions of this
    publication.



                                AUTHOR'S NOTES


    The HOOPER Finance series was created as a result of our own basic
    need for an affordable financial software package.  We needed a simple
    and workable system, to keep track of both income and expenses.
    Unfortunately, the price for available software packages was
    prohibitive.



                                      Page 2


                                   CHEQUE-IT-OUT


    Consequently, it became clear that a new and affordable program would
    have to be created and written by us, and it would have to eliminate
    the piles of notes and receipts that were needed each year in order to
    compute income taxes.  In 1981, therefore, Finance Manager I was
    created.  It was written for the Atari 800, with 64K bytes of memory.
    This program provided a one-timeframe look at the entire fiscal year,
    while storing all necessary information from the inevitable notes and
    receipts.  If bookkeeping was to become a "piece of cake", this was
    surely a sweet start!  Since then we have developed the original
    FINANCE MANAGER II into a complete small business accounting package,
    which now consist of the General Ledger, Account Reconciliation,
    Financial Utilities, Accounts Receivables, Accounts Payables and a
    Payroll module.

    In 1989 we then developed a new product, just for personal use,
    'CHEQUE-IT-OUT'.  This new product is perfect for the individual who
    wants to keep track of more then just his checking account balance.
    With 'CHEQUE-IT-OUT' you can track all your account balances and
    reconcile your checking and credit card statements in minutes.  Track
    your Income, Expenses, Liabilities, and it even prints your personal
    checks.  'CHEQUE-IT-OUT' is a complete personal accounting software
    package that uses intuitive user-friendly concepts to give you
    complete, personal financial statements.




                                    PREFACE


    Before Reading Any Further .  .  .

    If you are eager to get started, you might save time by reading the
    guidelines listed in this preface.  Depending on your level of basic
    bookkeeping as well as computer expertise, certain sections of the
    manual are more essential than others.



    If You've Already Used 'CHEQUE-IT-OUT' .  .  .

    If you already have a working knowledge of 'CHEQUE-IT-OUT', you will
    be pleased to see all of the specially-enhanced features of the
    registered 'CHEQUE-IT-OUT' program.

    Before you start working, read the "Getting Started" section of this
    manual, which explains the new installation procedures.  If you have
    any questions while you are working, simply refer to the
    documentation.



    If You Are An Experienced User of Menu-Driven Software .  .  .

    If you have used quite a few software packages, especially those
    designed for the IBM PC or compatibles, and you are more familiar with
    the terms used for configuring your system;  you might want to take
    the following shortcuts:


                                      Page 3


                                   CHEQUE-IT-OUT



         - Read the "Quick Start for advanced DOS users" section of the
           manual.

         - Take a look at the sample accounts (filename SAMPLE) while using
           the documentation as a guide and a reference.

         - Set up your own set of books by using the sample accounts as an
           example, or as a framework.  Be sure to follow the guidelines
           and procedures as presented in the manual, and you'll be on
           your way to incredibly-easy, hassle-free bookkeeping.



    If You Have Experience In Bookkeeping.  .  .

    If you have a working knowledge of accounting and computers, you will
    have an easier time understanding the terms used in the 'CHEQUE-IT-
    OUT' manual.  Initially, however, we recommend that you read all of
    the manual in order to learn how to properly and completely utilize
    all of the fantastic features available to you.



    If You Have Little Or No Experience With Software Or Accounting...


    If you have used few menu-driven software packages in the past, and
    are not a computer expert, you will find it easier by reading
    the entire manual completely, following all of the procedures
    outlined.  We strongly suggest that you read through the documentation
    at least once, first merely to become familiar with some of the terms
    you will be expected to know.  Next, re-read the documentation, this
    time using the program.



    For All Users ...

    When using 'CHEQUE-IT-OUT', keep in mind the steps listed below:

         - Floppy Disk Users, format your new disks before beginning

         - Always make a backup copy of your data files.  It is
           important to save all of your work in case something happens
           to the disk you are using.

         - Carefully follow all instructions in the manual, for optimum
           understanding, before using 'CHEQUE-IT-OUT'.

    This guide is intended for use by all users of 'CHEQUE-IT-OUT'.  It
    does not assume that the user has accounting expertise.  It is
    suggested, however, that users with no bookkeeping knowledge obtain a
    basic bookkeeping textbook as a supplemental reference.  A premier of
    accounting is included in Section 4a - Basic Accounting Skills.





                                      Page 4


                                   CHEQUE-IT-OUT


    If You Have Any Questions .  .  .

    If you have any questions or comments about 'CHEQUE-IT-OUT',
    please return the User-Comment Form in the back of the manual or
    call our technical line at (719) 528-8989.


                       'CHEQUE-IT-OUT' SYSTEM FLOWCHARTS


                                   MAIN MENU
                                       |
              _________________________|________________________
              |       |       |       |       |       |        |
            Quit      |     Trans     |    Accounts   |      Order
                   ConFig          Reports         Utility



                              Configuration Menu
                                       |
               ________________________|________________________
               |       |       |       |       |       |       |
               |  System Date  |    System     |    Screen     |
               |               | Configuration |    Colors     |
             Leave          Report         Passwords        Backup
         Configuration   Heading Name        Menu          Datafiles



                               Transactions Menu
                                      |
            __________________________|___________________________
            |        |        |       |         |        |       |
            |     Enter &     |  Modify/Delete  |  Modify/Delete |
            |  Print CHECKS   |  Transactions   |    Recurring   |
            |                 |                 |     Entries    |
          Leave             Enter             Create          Activate
       Transactions      TRANSACTIONS   Recurring Entries    Recurring
           Menu                                               Entries


                                 Reports Menu
                                       |
           ____________________________|____________________________
           |      |      |      |      |      |      |      |      |
           | Transaction |   Account   |   Balance   |    Budget   |
           |  Journals   |   History   |    Sheet    |   Variance  |
           |             |             |             |             |
         Leave       Recurring      Income       Chart of        Budget
        Reports       Entries      Statement     Accounts       Listing
         Menu








                                      Page 5


                                   CHEQUE-IT-OUT


                            Chart of Accounts Menu
                                       |
                            ___________|___________
                            |          |          |
                            |     Update Chart    |
                            |     of Accounts     |
                            |                     |
                       Leave Chart             Update
                    of Accounts Menu       Expense Budgets




                                 Utility Menu
                                       |
                         ______________|______________
                         |       |        |          |
                         |     Sort       |    Check Writing
                         | Transactions   |       Settings
                         |                |
                       Leave            Import
                   Utilities Menu     Transaction
                                         File


                                  Order Menu
                             _________|__________
                             |                  |
                       Order Software       Order Checks































                                      Page 6


                                   CHEQUE-IT-OUT


                               TABLE OF CONTENTS

         COPYRIGHT NOTICE . . . . . . . . . . . . . . . . . . . . . .  2
         WARRANTY INFORMATION . . . . . . . . . . . . . . . . . . . .  2
         AUTHOR'S NOTES . . . . . . . . . . . . . . . . . . . . . . .  2
         PREFACE. . . . . . . . . . . . . . . . . . . . . . . . . . .  3

         SYSTEM FLOWCHARTS. . . . . . . . . . . . . . . . . . . . . .  5

         INTRODUCTION . . . . . . . . . . . . . . . . . . . . . . . .  9


         SECTION ONE - GETTING STARTED
           1a. Essential Hardware . . . . . . . . . . . . . . . . . . 10
           1b. Quick Start for Advanced DOS Users . . . . . . . . . . 10
           1c. Installing 'CHEQUE-IT-OUT' . . . . . . . . . . . . . . 11
           1d. Starting Up 'CHEQUE-IT-OUT'. . . . . . . . . . . . . . 13
           1e. Selecting/Creating Data Files. . . . . . . . . . . . . 14
           1f. Using the Sample Accounts. . . . . . . . . . . . . . . 15
           1g. CONFIG.SYS File. . . . . . . . . . . . . . . . . . . . 16


         SECTION TWO - USING 'CHEQUE-IT-OUT'
           2a. Main and Sub-Menus . . . . . . . . . . . . . . . . . . 17
           2b. Making Selections and Special Keys . . . . . . . . . . 19


         SECTION THREE - CONFIGURATION MENU . . . . . . . . . . . . . 23
           3a. System Date. . . . . . . . . . . . . . . . . . . . . . 23
           3b. Report Heading Name. . . . . . . . . . . . . . . . . . 24
           3c. System Configuration . . . . . . . . . . . . . . . . . 24
           3d. Passwords. . . . . . . . . . . . . . . . . . . . . . . 27
           3e. Screen Colors. . . . . . . . . . . . . . . . . . . . . 29
           3f. Backing Up Datafiles . . . . . . . . . . . . . . . . . 32


         SECTION FOUR - ADDITIONAL INFORMATION
           4a. Basic Accounting Skills. . . . . . . . . . . . . . . . 34
           4b. Technical Support. . . . . . . . . . . . . . . . . . . 39


         SECTION FIVE - SETTING UP YOUR OWN BOOKS . . . . . . . . . . 41


         SECTION SIX - THE CHART OF ACCOUNTS
           6a. What is a Chart of Accounts? . . . . . . . . . . . . . 43
           6b. Types of Accounts. . . . . . . . . . . . . . . . . . . 43
           6c. Organization of the Chart of Accounts. . . . . . . . . 43
           6d. Subtotals. . . . . . . . . . . . . . . . . . . . . . . 44
           6e. Chart of Accounts Data Fields. . . . . . . . . . . . . 45
           6f. Getting Familiar with the Chart of Accounts. . . . . . 45
           6g. Adding/Modifying/Deleting Accounts . . . . . . . . . . 46
           6h. Entering your Chart of Accounts. . . . . . . . . . . . 47
           6i. Suggested Method for Setting Beginning Balances. . . . 48
           6j. Creating a New Filename with the same Chart of
               Accounts . . . . . . . . . . . . . . . . . . . . . . . 48




                                      Page 7


                                   CHEQUE-IT-OUT


         SECTION SEVEN - INCOME AND EXPENSE BUDGET. . . . . . . . . . 50


         SECTION EIGHT - TRANSACTIONS . . . . . . . . . . . . . . . . 51
           8a. Entering & Printing Checks . . . . . . . . . . . . . . 52
           8b. Entering Transactions. . . . . . . . . . . . . . . . . 52
           8c. Entering Multiple Debit and Credit Transactions. . . . 54
           8d. Modifying/Deleting Transactions. . . . . . . . . . . . 55
           8e. Creating Recurring Entries . . . . . . . . . . . . . . 56
           8g. Activate Recurring Entries . . . . . . . . . . . . . . 57
           8f. Modifying/Deleting Recurring Entries . . . . . . . . . 57


         SECTION NINE - REPORTS . . . . . . . . . . . . . . . . . . . 60
           9a. Explanation of Reports . . . . . . . . . . . . . . . . 60
           9b. General Instructions for Generating Reports. . . . . . 61


         SECTION TEN - UTILITIES. . . . . . . . . . . . . . . . . . . 64
          10a. Sorting Transactions . . . . . . . . . . . . . . . . . 64
          10b. Import Transaction File. . . . . . . . . . . . . . . . 64
          10c. Check Writing Settings . . . . . . . . . . . . . . . . 65

         SECTION ELEVEN - USER SUPPORT. . . . . . . . . . . . . . . . 69

         SECTION TWELVE - DISK FILE NAMES . . . . . . . . . . . . . . 72

         ORDER FORM . . . . . . . . . . . . . . . . . . . . . . . . . 73
































                                      Page 8


                                   CHEQUE-IT-OUT


                                 INTRODUCTION

    With 'CHEQUE-IT-OUT' you will manage your money like a financial whiz.
    The determining factor of the survival of anyone's finances is proper
    management of their financial resources.  'CHEQUE-IT-OUT' is the tool
    needed for individuals who easily and efficiently need to manage their
    resources.  An exceptionally easy and low-cost way to manage your
    finances, 'CHEQUE-IT-OUT' provides the best and most comprehensive
    personal finance program available.  'CHEQUE-IT-OUT' is a thorough,
    efficient, and easy to use program designed for the IBM PC, XT, AT,
    PS/2 and 100% compatibles.  In short; 'CHEQUE-IT-OUT' is a personal
    double-entry financial program which creates complete financial
    reports, keeps track of your income, expenses, liabilities and
    budgets.  It can also print single checks for you and keep track of
    all your Bank service charges and interest.  Password protection and
    an automatic Datafile backup function makes is very safe.

    We look forward to hearing from you, and any comments about this
    program may be included on the user comment form on the last page of
    this manual.  Thank you for selecting 'CHEQUE-IT-OUT'.








































                                      Page 9


                                   CHEQUE-IT-OUT


                         SECTION ONE - GETTING STARTED

    Before you initially start using 'CHEQUE-IT-OUT', be sure you take the
    time to learn some of the basic preliminary procedures necessary to
    operate the program, as well as being certain you know some of the
    basic overall system features.  In this section, these elements are
    discussed in detail.


    1a - ESSENTIAL HARDWARE

    The minimum system hardware requirements and options are as follows:

         REQUIRED:
             - IBM, PC, XT, AT, PS/2, or 100% compatibles
             - DOS 2.0 or greater
             - 448K memory
             - One high density (>500K) floppy disk drive,
               or two 360K floppy disk drives

         OPTIONAL:
             - Hercules, Monochrome, CGA, EGA, or VGA monitors
             - printer, laserjet printer, mouse (Microsoft or compatible)
             - Hard disk and one floppy disk drive

    1b - QUICK START FOR ADVANCED DOS USERS

    To run 'CHEQUE-IT-OUT' for the first time on your own computer, be
    sure to follow the appropriate install procedure outlined below.

    HARD DISK USERS: Create a new directory (i.e. MD\CHEQUE), then
        copy all of the ORIGINAL 'CHEQUE-IT-OUT' files into this new
        directory using the DOS "COPY" command.

        Next, copy the CONFIG.SYS file from the ORIGINAL 'CHEQUE-IT-OUT'
        program disk to your root directory.  If you already have a
        CONFIG.SYS file, be sure to add the two commands "FILES=20" and
        "BUFFERS=20".

        To run 'CHEQUE-IT-OUT', change to your new directory and type in
        the command: "CHEQUE".  You may also add a filename parameter when
        running CHEQUE-IT-OUT (e.g. CHEQUE C:\CHEQUE\WORK).

    FLOPPY DISK USERS: Have three blank formatted disks ready, one labeled
        'CHEQUE-IT-OUT' PROGRAM DISK, one labeled 'CHEQUE-IT-OUT' SAMPLE
        DISK and one labeled DATA DISK.

        Copy all of the files from the Original 'CHEQUE-IT-OUT' Program
        Disk to your blank program disk.  Now, copy the SAMPLE.* files
        from the Original 'CHECK-IT-OUT' Install and Sample Disk to your
        blank sample disk.

        Next, copy the CONFIG.SYS file from the ORIGINAL 'CHEQUE-IT-OUT'
        program disk to your DOS boot-up disk.  If you already have a
        CONFIG.SYS file, be sure to add the two commands "FILES=20" and
        "BUFFERS=20".




                                      Page 10


                                   CHEQUE-IT-OUT


    1c - INSTALLING 'CHEQUE-IT-OUT'

    To run 'CHEQUE-IT-OUT' for the first time on your own computer, be
    sure to follow the appropriate install procedure outlined below.

    FLOPPY DISK DRIVE USERS:

    Before installing, have three blank formatted disks ready.  If you do
    not, follow the commands below.

    Insert your DOS boot-up disk in drive A:.  Insert the first blank disk
    in drive B:.  Now type in the command "FORMAT B:".  Repeat this step
    until all three disks are formatted.

     1. Label your first disk 'CHEQUE-IT-OUT' PROGRAM DISK, the second
        'CHEQUE-IT-OUT' SAMPLE DISK, and the third DATA DISK.

     2. Insert the ORIGINAL (not the blank disk) 'CHEQUE-IT-OUT' Install
        and Sample Disk in drive A:.

     3. From the A: prompt, type in the command:  "INSTALL".

     4. Follow the instructions on the screen for the INSTALL procedure as
        outlined below:

    INSTALL PROGRAM for 'CHEQUE-IT-OUT'

                  Enter drive to install 'CHEQUE-IT-OUT' on (A,B,...):B
                                         Is Drive B: a hard disk(Y/N):N
               Enter directory to install 'CHEQUE-IT-OUT' on (if any):_______

               Enter drive where the original 'CHEQUE-IT-OUT' DISK is:A

     5. The first prompt (shown above) ask which disk drive you want
        'CHEQUE-IT-OUT' to BE INSTALLED ON. Enter here the Disk Drive
        Letter where you have your blank Program Disk inserted in (usually
        B:).

     6. The next prompt asks if this drive is a hard disk.  Answer "N" for
        no.

     7. The next prompt asks for your directory.  Since you are using
        floppies, you leave this section blank.

     8. Then, enter the drive where the original 'CHEQUE-IT-OUT' Program
        Disk is (usually A:) and press the ENTER key.

     9. The screen will then display the amount of formatted disks needed
        for the INSTALL procedure. You will also need the disk you use to
        boot-up your computer.

    10. Answer the prompt "Do you have all of the above disks formatted
        and labeled" with "Y" for Yes; or "N" if you still need to format
        the above mentioned disks.

    11. You will then need to insert your boot-up disk in drive B: and
        press any key to continue. A CONFIG.SYS file will then be created
        on your boot-up and if you already have a CONFIG.SYS file, your


                                      Page 11


                                   CHEQUE-IT-OUT


        original file will be saved as CONFIG.BAK file and your CONFIG.SYS
        file will be modified without losing any of your other
        configuration options.

    12. The install procedure will then prompt you for:

        Insert the original 'CHEQUE-IT-OUT' PROGRAM DISK in drive A:
        Insert your blank disk labeled 'CHEQUE-IT-OUT' PROGRAM DISK in
        drive B:

        Press any key to continue

    13. The screen will then show "INSTALLING 'CHEQUE-IT-OUT'" and files
        are being copied from drive A: to drive B:.

    14. After all of the program files are copied, a new prompt will
        appear:

        Insert the original 'CHEQUE-IT-OUT' DEMO DISK in drive A:

        Insert your blank disk labeled 'CHEQUE-IT-OUT' SAMPLE DISK in
        drive B:

        Press any key to continue

    15. After all the sample files are copied, the 'CHEQUE-IT-OUT'
        installation is complete.

    After completing the INSTALL procedures, FILE  AWAY the original
    'CHEQUE-IT-OUT' disks for safe keeping.  Never use the original disks.


    HARD DISK USERS:

     1. Create a new directory on your hard disk "MD\CHEQUE", you may
        substitute "CHEQUE" for a different directory name if you desire.

     2. Insert the ORIGINAL 'CHEQUE-IT-OUT' Install and Sample disk in
        drive A:.

     3. Now change to the A: prompt and from the A: prompt type in
        the command: "INSTALL".

     4. Follow the instructions on the screen for the INSTALL procedure as
        outlined below:


    INSTALL PROGRAM for 'CHEQUE-IT-OUT'

                 Enter drive to install 'CHEQUE-IT-OUT' on (A,B,...):C
                                        Is Drive C: a hard disk(Y/N):Y
              Enter directory to install 'CHEQUE-IT-OUT' on (if any):\CHEQUE\

               Enter drive where the original 'CHEQUE-IT-OUT' DISK is:A


     5. The first prompt (shown above) will ask which disk drive you want
        'CHEQUE-IT-OUT' to BE INSTALLED ON. Usually your hard disk is


                                      Page 12


                                   CHEQUE-IT-OUT


        called "C", if your hard disk has a different letter then "C",
        enter here your letter (e.g. "D").

     6. The next prompt asks if this drive is a hard disk.  Answer "Y" for
        Yes.

     7. Next, enter the directory name you want to install 'CHEQUE-IT-OUT'
        on.  The default directory name is already displayed "\CHEQUE". To
        except the default, press ENTER.  If you want to install the
        'CHEQUE-IT-OUT' program into another directory, then simply enter
        here the new directory name with the "\" in front of the name. If
        this directory does not exist on your hard disk the system will
        then prompt you with: "DIRECTORY NOT FOUND. CREATE NEW DIRECTORY
        (Y/N):" Enter "Y" to create this new directory on your hard disk
        or "N" to enter a new directory name or to except the default
        \CHEQUE name.

     8. Last, enter the drive where the original 'CHEQUE-IT-OUT' program
        disk is in (usually A:).

     9. Once these steps have been completed, the screen will then display
        "CREATING CONFIG.SYS FILE ON DISK C:" and if you already have a
        CONFIG.SYS file, it will be saved as a CONFIG.BAK.

    10. A new prompt will appear:

        Insert the Original 'CHEQUE-IT-OUT' Program Disk in Drive A:

        Press any key to continue

    11. The screen will then display "INSTALLING 'CHEQUE-IT-OUT'" and files
        will be copied from drive A: to drive C:.

    12. After all the program files are copied, a new prompt will instruct
        you to:


        Insert the original 'CHEQUE-IT-OUT' Install and Sample Disk in
        drive A:

        Press any key to continue

    13. Once all of the Sample files are copied, the installation is
        complete.

    After completing the INSTALL procedures, FILE AWAY the original
    'CHEQUE-IT-OUT' disks for safe keeping.  Never use the original disks!



    1d - STARTING UP 'CHEQUE-IT-OUT'

    After you have installed your disks as outlined above, you are ready
    to start using 'CHEQUE-IT-OUT'.  To use 'CHEQUE-IT-OUT' on a daily
    basis, follow the procedures outlined below:





                                      Page 13


                                   CHEQUE-IT-OUT


    FLOPPY DISK USERS:

     1. Reboot (turn off & on, or press Ctrl & Alt & Del) your computer
        with your POWER-UP disk in drive A:.

     2. Insert your newly created 'CHEQUE-IT-OUT' PROGRAM DISK in drive A:
        and your blank DATA DISK in drive B:.

     3. From the A: prompt, type in the command "CHEQUE" to run 'CHEQUE-
        IT-OUT'.

     4. The first screen displays a 'CHEQUE-IT-OUT' logon notice. Press any
        key to continue.

     5. Next, you will be asked for the DISK DRIVE, PATH (directory name),
        and FILENAME (See Section 1e below).

    HARD DISK USERS:

     1. Reboot (turn off & on, or press Ctrl & Alt & Del) your computer to
        enable the new CONFIG.SYS file.

     2. Change to your new 'CHEQUE-IT-OUT' directory "CD\CHEQUE".

     3. Then type in the command "CHEQUE" to run 'CHEQUE-IT-OUT'.

     4. The first screen displays a 'CHEQUE-IT-OUT' logon notice.  Press
        any key to continue.

     5. Next, you will be asked for the DISK DRIVE, PATH  (directory name),
        and FILENAME (See below).

    1e - SELECTING/CREATING DATA FILES

    Before selecting any menu items from the 'CHEQUE-IT-OUT' Master Menu,
    you must first select the datafile you will be working on, as shown
    below:


                      |-------- SELECT DATAFILE --------|
                      | DISK DRIVE:C                    |
                      | PATH:\CHEQUE___________________ |
                      | FILENAME:________               |
                      |---------------------------------|


    1.  SELECTING DISK DRIVE:  The first prompt asks for "DISK DRIVE".
        Here you enter the disk drive letter in which your data disk has
        been inserted. Usually "B" for floppy disk users.  Hard disk users
        type "C" unless you wish to store your data files on a floppy
        diskette. If so, type in the letter of the drive in which your
        blank data disk has been inserted. When your selection is
        complete, press "ENTER".

    2.  SELECTING PATH: The second prompt asks for "PATH" (Directory
        name).  If you are using floppies, leave this field blank. For
        hard disk users: The default is the directory you are currently
        in, which contains your program files.  If you want your datafiles


                                      Page 14


                                   CHEQUE-IT-OUT


        to be stored in the same directory as your program files, hit the
        "ENTER" key.  If you want your datafiles stored in a different
        directory, enter the ALREADY EXISTING directory name (i.e.
        \CHEQUE\DATA).  New directories should be created from the DOS
        prompt using the DOS command MD\???????? (? = directory name).

    3.  SELECTING/CREATING DATAFILE NAMES: The last prompt asks for a
        "FILENAME".  An automatic pop-up list of all of your filenames
        will appear every time you are at this filename prompt.
        To create a new datafile, you must first eliminate the pop-up
        filename selection window (if present) by pressing the "ESC" key.
        Next, enter a new filename up to eight characters long, without
        spaces, and press "ENTER".  Then, answer "Y" to the "Create new file"
        prompt.  If you answer "N" here, the system will then ask "Do you
        want to restart?".  Answering "Y" will take you back to the "DRIVE,
        PATH, FILENAME" prompt.  If you answer "N", you will leave the
        program.

        NOTE:  To eliminate the need to enter the disk drive and a file
               name each time you run 'CHEQUE-IT-OUT', enter from the
               \CHEQUE Directory, the command "CHEQUE ????????" (? =
               datafile name).  Another way to eliminate the need to enter
               the disk drive and the file name each time you run 'CHEQUE-
               IT-OUT' from anywhere in your directory, you should modify
               the RUN.BAT file by adding a command line parameter to the
               "CHEQUE" command.  For example: if you want to use drive C:
               at all times, and also want to use the file name "MYFILE",
               you should change (edit) the RUN.BAT file command "CHEQUE"
               to "CHEQUE B:MYFILE".  (See your DOS manual on how to edit
               files using EDLIN).  When you run 'CHEQUE-IT-OUT', it will
               automatically use the selected file in drive C:, without
               asking you again.

    After you have selected your DISK DRIVE, PATH, AND FILENAME, you can
    now select the appropriate menu item from the 'CHEQUE-IT-OUT' master
    menu, as described in 2a.


    1f - USING THE SAMPLE ACCOUNTS

    The "SAMPLE" datafiles are on the 'CHEQUE-IT-OUT' Samples Disk.  It
    includes a typical Chart of Accounts, to allow you to learn the
    different functions of 'CHEQUE-IT-OUT'.  It also provides you with
    samples of different types of transactions.  If you are new to
    'CHEQUE-IT-OUT', print some reports while using the Sample accounts,
    in order to familiarize yourself with the reports and functions of
    'CHEQUE-IT-OUT'.  See the Reports Section, in this Manual for more
    details on reports.  Thoroughly analyze these reports, noting the
    types of transactions and which accounts were being used.  This will
    be a tremendous help when you are entering your own transactions,
    since most people employ similar types of transactions.

    It is important for you to understand that the SAMPLE accounts
    included in the program, have been created exclusively as tutorial
    accounts, to be used to help those who are learning to use 'CHEQUE-IT-
    OUT'.  Please, do not try to expand it for use as your own Chart of
    Accounts, since it contains beginning balances as well as existing
    transactions.  The SAMPLE accounts are intended to be used merely as a


                                      Page 15


                                   CHEQUE-IT-OUT


    sample to facilitate the learning process.

    In order to use these SAMPLE accounts, follow all of the steps in
    Section 1d - Starting Up 'CHEQUE-IT-OUT', except with the 'CHEQUE-IT-
    OUT' Samples disk in drive B:.  At the filename prompt, select the
    "SAMPLE" datafile.


    1g - CONFIG.SYS FILE

    Many of the programs you run will open several files at ones, DOS
    normally only allows a few, and will crash your program if you do not
    have a CONFIG.SYS file in your root directory or on your boot-up disk.
    This will tell DOS to allow 20 files to be open at the same time and
    you will not have any problems running 'CHEQUE-IT-OUT'.

    If you already have a CONFIG.SYS file make sure it has the commands
    listed below in it.  If not, using your word processor or text editor
    program, input the following into your CONFIG.SYS file.

                             FILES=20
                             BUFFERS=20

    If you followed the 'CHEQUE-IT-OUT' INSTALL procedure outlined above,
    this was automatically done for you.



































                                      Page 16


                                   CHEQUE-IT-OUT


                     SECTION TWO - USING 'CHEQUE-IT-OUT'

    2a -  MAIN MENU AND SUB-MENU'S

    MAIN MENU

    The 'CHEQUE-IT-OUT' Main Menu is the starting point for all of the
    features needed to perform the 'CHEQUE-IT-OUT' functions.  It will
    also guide you to all of the other sub-menus for the entire 'CHEQUE-
    IT-OUT' program.  The section that follows includes a brief
    explanation of each sub-menu and its capabilities.

                        'CHEQUE-IT-OUT' MAIN MENU

    |--------------------------------------------------------------------|
    | Quit  conFig  Trans  Reports  Accounts  Utility  Order             |
    |--------------------------------------------------------------------|


    QUIT

    Used to leave the program or restart 'CHEQUE-IT-OUT'.  If you wish to
    leave the program simply press "ENTER" on the highlighted QUIT and
    answer "N" to the "DO YOU WANT TO RESTART" prompt.  To restart, simply
    enter "Y" at this prompt.



    CONFIGURATION  - (conFig)

    The Configuration Menu allows you to change the system date, the
    report heading name and the system configuration.  It also allows you
    to set up passwords, select screen colors, and backup datafiles.  The
    Configuration Menu appears as follows:

                           |- Configuration Menu -|
                           | Leave Configuration  |
                           | System Date          |
                           | Report Heading Name  |
                           | System Configuration |
                           | Passwords Menu       |
                           | Screen Colors        |
                           | Backup Datafiles     |
                           |----------------------|


    TRANSACTIONS  - (Trans)

    The Transaction Menu allows you to record anything that changes your
    financial position (e.g. writing checks, deposits, loan payments,
    finance charges, etc.).  The TRANSACTION MENU appears as follows:









                                      Page 17


                                   CHEQUE-IT-OUT


                      |------- Transactions Menu -------|
                      | Leave Transactions Menu         |
                      | Enter & Print CHECKS            |
                      | Enter TRANSACTIONS              |
                      | Modify/Delete Transactions      |
                      | Create Recurring Entries        |
                      | Modify/Delete Recurring Entries |
                      | Activate Recurring Entries      |
                      |---------------------------------|

    REPORTS  - (Reports)

    The 'CHEQUE-IT-OUT' Reports Menu allows you to generate a complete
    range of financial statements from your own recorded information.  The
    Reports Menu appears as follows:


                           |---- Reports Menu ----|
                           | Leave Reports Menu   |
                           | Transaction Journal  |
                           | Recurring Entries    |
                           | Account History      |
                           | Income Statement     |
                           | Balance Sheet        |
                           | Chart of Accounts    |
                           | Budget Variance      |
                           | Budget Listing       |
                           |----------------------|

    CHART OF ACCOUNTS - (Accounts)

    The Chart of Accounts is a detailed listing of all of your
    personal/business financial accounts.  The Chart of Accounts Menu
    appears as follows:

                       |--- Chart of Accounts Menu ---|
                       | Leave Chart of Accounts Menu |
                       | Update Chart of Accounts     |
                       | Update Expense Budgets       |
                       |------------------------------|

    UTILITY - (Utility)

    The options in the Utility Menu include important functions such as;
    sorting transactions, exporting, and closing your books at the end of
    the financial period.  The Utility Menu appears as follows:

                          |----- Utility Menu ------|
                          | Leave Utilities Menu    |
                          | Sort Transactions       |
                          | Import Transaction File |
                          | Check Writing Settings  |
                          |-------------------------|







                                      Page 18


                                   CHEQUE-IT-OUT


    ORDER - (Order)

    A computerized order form for ordering software or pre-printed
    checks.

                          |- Computerized Ordering -|
                          | Leave Ordering Menu     |
                          | Order Software          |
                          | Order Checks            |
                          |-------------------------|


    2b - MAKING SELECTIONS AND SPECIAL KEYS

    SELECTING MENU ITEMS

    Once you are at the MASTER MENU, the various menu items are listed
    across the top of your screen.  The four methods for making menu
    selections are listed below:

        1.  Using the keypad arrows, move the highlighted cursor to your
            selection and press "ENTER".

        2.  Type in the capitalized letter of your selection.

        3.  On a color monitor, type in the highlighted letter of
            your selection.

        4.  Move your mouse to the appropriate menu item and press the
            left button for "ENTER".

    SPECIAL FUNCTION KEYS

    1. PRINTER PAUSE KEY:  When you are printing reports to your printer,
          or to the disk, you may "PAUSE" the report by pressing any key
          (except ESC) while it is printing.  This will cause the report
          to pause until you press any key to continue.  When using this
          feature, please remember that some printers have print buffers
          which will cause the printing to continue until the buffer is
          completely printed.  It will only stop printing at that time.

    2. HELP: There are two help systems present in the 'CHEQUE-IT-OUT'
          program. The first one is a one line help sentence that is
          displayed at the bottom of the screen at all times.

          The second help system is context sensitive.  This means
          that the help screen will display help on the subject you
          are currently working on. To receive help at any time,
          anywhere in the program, press the "F1" key and a pop-up
          window will display an explanation of the field you are
          working on.  Several of the help files include cross
          references at the bottom of the screen.  To go to a cross
          reference, move the highlighted cursor to your selection
          and press "ENTER".  If there is only one cross reference,
          simply press "ENTER".  You may return to the field you were
          working on at any time by pressing the "ESC" key.

          Pressing the "F1" key once you are already at a help file will


                                      Page 19


                                   CHEQUE-IT-OUT


          display a listing of the overall available Help topics allowing
          you to select a new area of help. Move the cursor or mouse to
          the specific Help item and press "ENTER".

    3. SAVE/DONE:  The "F10" key is used to save information that you have
          just entered into the system.

    4. POP-UP ACCOUNTS: The "F2" key is used for the pop-up chart of
          accounts.

          When you are at an input field that requires an account number,
          pressing "F2" will display a pop-up chart of accounts which you
          can select from.  Using the keypad arrow keys, move the
          highlighted cursor to your selection and press "ENTER", or enter
          the first digit of the account and the first account starting
          with that number will be found.

          If you would like an automatic pop-up chart of accounts listing
          when you are at any input field that requires one, then, in the
          system configuration settings, answer "Y" to the "AUTO POP-UPS".
          Answering "N" will require the use of the "F2" function key for
          any pop-up listings.


    5. ESCAPE (ESC):  The Escape key allows you to stop any function and
          will take you back to your previous menu selection.  Pressing
          the ESC key several times will also take you out of the 'CHEQUE-
          IT-OUT' program.

          If you are at an input field, and you do not want to continue
          your current task, the ESC key allows you to abort and return to
          the previous menu.

          If you are at a menu, using the ESC key allows you to return to
          the previous menu.  Selecting ESC at the Master Menu will end
          the program, as well as allow you to select a different
          filename.

          If you would like to abort the printing of a report, you may do
          so via the Escape key.


    EDITING KEYS

    This section briefly describes the commands recognized by the data
    input editor (the keys you can use to move around the input fields).

     MOVING ONE CHARACTER TO THE LEFT:  Press the left arrow key once for
          each character you want to move to the left.

     MOVING ONE CHARACTER TO THE RIGHT:  Press the right arrow key once for
          each character you want to move to the right.

     MOVING CURSOR TO BEGINNING OF A FIELD: Press the <Home> key.

     MOVING CURSOR TO END OF A FIELD:  Press the <End> key.

     DELETING SINGLE CHARACTERS:  Press the <Del> key.


                                      Page 20


                                   CHEQUE-IT-OUT



     DELETING SINGLE CHARACTERS TO THE LEFT OF THE CURSOR:  Press the
          Backspace key (key with the arrow pointing to the left).

     DELETING AN ENTIRE FIELD:  Press <Ctrl/Y> or hit the space bar.

     DELETE FROM CURSOR ON TO END OF FIELD:  Press <Ctrl/End> or hit the
          space bar.

     DELETE FROM BEGINNING OF FIELD TO CURSOR:  Press <Ctrl/Home>.

    INSERTING A MISSING LETTER:  Press the "INSERT" key once, move the cursor
          to where the letter will be inserted, enter the appropriate letter
          and press the "INSERT" key again to turn INSERT off. Fat cursor
          indicated insert mode ON, thin cursor indicates insert mode OFF.

    RESTORE ORIGINAL CONTENTS OF FIELD:  Press <Ctrl/R>.

    ACCEPT THE CURRENT ENTRY AND MOVE TO THE NEXT INPUT FIELD:  <Enter>

    MOVE CURSOR TO PREVIOUS FIELD:  Press the UP arrow key or press the
          <Shift/Tab> keys.

    MOVE CURSOR TO FIRST FIELD ON SCREEN:  Press <Ctrl/PgUp>.

    MOVE CURSOR TO LAST FIELD ON SCREEN:  Press <Ctrl/PgDn>.

    QUIT:  Press <Esc>.

    SELECT NEXT INCREMENT VALUE:  Press <+> & <Spacebar> (multiple choice
          fields only).


    DROP TO DOS

    At any time when using 'CHEQUE-IT-OUT', you may temporarily drop down
    to DOS to perform a DOS command and return back to 'CHEQUE-IT-OUT' and
    continue where you left off.  To drop to DOS, simply press <Alt/D>.
    To return to the program, type in the command "Exit".

    WARNING: It is very important that you DO NOT load any memory
             resident program (i.e. PRINT.COM or SIDEKICK) while running
             'CHEQUE-IT-OUT' as it will corrupt 'CHEQUE-IT-OUT's memory
             and it will crash the program.


    MOUSE:  (MICROSOFT OR COMPATIBLE)

    You may also use a mouse instead of the keypad arrow keys for your
    selections from the menu's, filename listing, pop-up chart of account
    or prompts that require a single key stroke.

    Two-Button Mouse: The right button is for ESC.  The left button is for
    ENTER. Pressing both buttons at the same time will display the HELP
    system (F1) for the field you are current field working on.

    Three-Button Mouse: Pressing the left or middle button represents
    "ENTER".  The right button is for "ESC" and pressing both the right


                                      Page 21


                                   CHEQUE-IT-OUT


    and left button at the same time will call up the Help system.

    The mouse cursor can be moved directly to the input field you wish to
    change by clicking on that field.  On multiple choice prompts you can
    increment the value by pressing the left button several times.























































                                      Page 22


                                   CHEQUE-IT-OUT


                 SECTION THREE - THE CONFIGURATION MENU

    The Configuration Menu contains menu selections important to the
    overall setup and performance of the 'CHEQUE-IT-OUT' program.  Select
    conFig from the Master Menu, and the Configuration Menu will appear
    as follows:

                        |- Configuration Menu -|
                        | Leave Configuration  |
                        | System Date          |
                        | Report Heading Name  |
                        | System Configuration |
                        | Passwords Menu       |
                        | Screen Colors        |
                        | Backup Datafiles     |
                        |----------------------|

    The Configuration menu allows you to change the system date and the
    report heading name. Here you can also change the system configuration
    or except the default configuration.  You can also create passwords,
    change screen colors and make backup copies of your datafiles.
    Follow the detailed procedures outlined below for proper setup:

    3a - SYSTEM DATE

    1.  Changing the date is only necessary if you did not set the system
        date at the time you powered up your computer (manually using the
        DOS DATE command). It is done automatically for you if you have an
        internal clock board in your computer.

        The date, shown at the bottom right hand corner of your screen,
        also prints on all of your reports.  Changing the date here will
        also change the date of your system clock.  If your computer does
        not have an internal clock, you will need to enter the correct
        time and date each time you turn on your computer, or your reports
        will have the wrong date, which makes it difficult when comparing
        reports by dates. Depending on how you have entered your date
        format in the System Configuration (the default is mm-dd-yy), you
        will need to use the same format here.

    2.  To change the system date, select SYSTEM DATE at the Configuration
        Menu.  The following prompt will appear:

                             |- Change Date -|
                             | DATE:07-20-89 |
                             |---------------|

    3.  The default date format is mm-dd-yy.  Make any changes as needed.

                                 mm - month
                                 dd - day
                                 yy - year

    4.  When complete, press "F10" or "ENTER" to save your changes.






                                      Page 23


                                   CHEQUE-IT-OUT


    3b - REPORT HEADING NAME

    The report heading name is a two line name, each line can have a name
    up to 28 characters long.  The first line will always appear at the
    top of your screen, and when printing reports both lines will always
    show on your report as your report heading name. (Creating a name
    here will not change your data file name).

    1.  Select REPORT HEADING NAME at the Configuration Menu.  The
        following prompt appears:

               |---------- Change Report Heading Name -------|
               | Report Heading 1:__________________________ |
               | Report Heading 2:__________________________ |
               |---------------------------------------------|

    2.  On line 1, type in your name.

    3.  On line 2, type in any additional information you would like
        to appear on all of your reports.  If you do not want an
        additional title, simply leave this line blank, by pressing the
        spacebar.

    4.  If you do not want to change the heading name, press "ENTER" to
        accept what is already shown.

    3c - SYSTEM CONFIGURATION

    The system configuration settings are pre-defined for your convenience.
    They do not need to be changed in order to use the program, however,
    you may change them at any time, depending on your preference, or the
    type of hardware you have.  When you have completed your changes you
    may save your new configuration by pressing the "F10" function key and
    answer "Y" to the "Inputs Correct" prompt.  In order to have your
    changes activated, you must return to the Master Menu..

        Select SYSTEM CONFIGURATION at the Configuration Menu.  The
        following prompt will appear:

        |----------------- CONFIGURATION SETTINGS ------------------|
        |         Date Mask:mm-dd-yy         Time Mask:hh:mm:sste   |
        |   Error Sounds On:Y         Window Sounds On:Y            |
        | Exploding Windows:Y              Auto Pop-up:N            |
        |Print Zero Balance:Y      Pause Between Pages:N            |
        |                            Decimal Character:.            |
        |                                                           |
        |      Printer Port:LPT1        Lines per Page:66_          |
        |        Top Margin:1_           Bottom Margin:2_           |
        |     Wide Carriage:Y                                       |
        |       Init String:0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |                   0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        | Forms Init String:0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |    Normal (10cpi):0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |                   0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |Compressed (17cpi):0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |                   0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |       Exit String:0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ |
        |-----------------------------------------------------------|


                                      Page 24


                                   CHEQUE-IT-OUT



      NOTE: When ever you are modifying the system configuration,  it is
            important to know that pressing "ENTER" will take you to the
            next input field and pressing the up arrow key will take you
            back one field and pressing the ESC key will take out of this
            menu to your previous menu.  If you do make changes, remember
            to press the "F10" key to save your new input and that you need
            to return to the Master Menu before your changes take effect.

    1.  DATE MASK - Here you would select the date format of your choice.
            The date is always displayed on the bottom left side of your
            screen. The date also prints on all your reports and when
            entering transactions the date will be displayed in the
            format selected here. The system default is set to
            the mm-dd-yy format (i.e. 12-31-89).  The date mask can show
            any combination (i.e. dd-mm-yy, yy-mm-dd, mm-yyyy, mm-dd), you
            even can display the month and date without the year.  The
            date separator may be a dash "-", period ".", or any other
            separator of your choice.

                                  mm = month
                                  dd = day
                                  yy = year

            Enter here your new date format and press "ENTER" to continue
            to the next field, or "F10" (done/save) if this was your only
            change.

    2.  TIME MASK - The time format is preset in the system for
            "hh:mm:sste".  This displays every digit including "am" and
            "pm" (i.e. 05:02:32pm).  The break down of the time mask
            configuration is as follows:

                                 h; H = hours
                                 m; M = minutes
                                 s; S = seconds
                                    t = a or p
                                    e = m

            Notice, in the above example, that the time format is in
            lowercase letters, therefore displaying all zeros before
            single digit times.  Using capital letters will eliminate the
            leading zeros (i.e. HH:MM:SSte = 5: 2: 5pm).

            If you want the leading zero on minutes and seconds, you may
            simply only capitalize the hours (i.e. HH:mm:sste =
            5:02:05pm).  There is no requirement to use all lowercase or
            all uppercase letters.  It is important, however, that you use
            the double-letter format hh:mm:ss.  If you use a single letter
            format (h:m:s), the time readout will only show one digit
            whether it is a double digit hour, minute, second or not.

            Using the "te" at the end of the time format allows the "am"
            and "pm" to appear on the screen.  If want only the single
            letter "a" or "p" to show you may do so by only entering the
            letter "t" ( the letter "e" cannot stand alone, it must be
            accompanied by a corresponding "t").  If you choose to
            eliminate the "te" all together, then your time will appear in


                                      Page 25


                                   CHEQUE-IT-OUT


            military format (i.e. 05:03:32pm will then be 17:03:32).

    3.  ERROR SOUNDS ON - Here you can select if you want error sounds on
            (i.e. the sound you hear when an entry is entered incorrectly,
            or a file cannot be found).  Enter here "Y" for yes or "N" for
            no.  This selection does not effect any other sounds.

    4.  WINDOW SOUNDS ON - Here you can select to hear a sound when ever a
            window pop-ups and closes on your screen. Select "Y' for yes
            or "N" for no.  This has no effect if Exploding Windows are set
            to "N" (See below).

    5.  EXPLODING WINDOWS - The exploding windows start from the center
            and explode outward.  If you do not want this feature answer
            here "N" for no and the windows will pop-up instantly rather
            than explode outward.  Disabling exploding windows allows much
            faster execution speed of the screen displays.

    6.  AUTO POP-UP - Answering "Y" to auto pop-up will give you an
            automatic pop-up of the chart of accounts listing whenever you
            are at an input field that would require one.  If you answer
            "N" for no, you may manually request a pop-up chart of
            accounts listing by simply pressing the "F2" function key.

    7.  PRINT ZERO BALANCE - Here you have a "Y/N" option to include zero
            balance accounts on your reports, answer"Y" and your reports
            will include all your accounts. Answer "N" and all accounts
            that have a zero balance will not be printed.

    8.  PAUSE BETWEEN PAGES - This selection is for all owners of single
            sheet feeding printers.  If you would like a pause between
            each printed page, for paper re-loading, answer here "Y" for
            yes or "N" for no.

    9.  DECIMAL CHARACTER - This unique feature was explicitly developed
            for foreign countries that use commas instead of decimals in
            their currency.  Here simply enter the character you would
            like to appear as your decimal  ("," ".",  or "N" for no
            decimal character). The decimal point appears on all reports
            and when entering amount data.

    10. PRINTER PORT - This is multiple choice input field. Enter here the
            appropriate port code for your printer, depending on whether
            it is a parallel or serial port hook up.  For parallel port
            printers use the codes "LPT1", "LPT2", "PRN:", or "LST:".  For
            serial port printers use  "COM1", "COM2","COM3" or "COM4".  If
            in doubt, of your printer port, select "LST:".  Pressing the
            <Space> bar or the <+> key (on three button mice, the left
            button) will display the above mentioned printer port options,
            one at a time.   The code that is showing in this field can
            then be selected by pressing ENTER.

    11. LINES PER PAGE - This refers to how many lines one sheet of paper
            has.  An 8 1/2" x 11" page has usually 66 lines, printing at 6
            lines per inch.  To figure the total lines per page, you would
            multiply the length of the paper by the number of lines per
            inch, usually 6 (i.e. 11x6=66).  The actual lines printed on a
            page are determined by the top and bottom margin.  It is very


                                      Page 26


                                   CHEQUE-IT-OUT


            important that your printer is set to the same page length as
            you have entered here, if they are not the same you will
            experience difficulty with the page line-ups.

    12. TOP MARGIN - Entering a number here will indicate how many blank
            lines from the top of the page your printing will start.  We
            suggest you enter a "1" here.

    13. BOTTOM MARGIN - Entering a number here will indicate how many
            lines from the bottom of page the printing will stop.  We
            suggest you enter a "2" here.

    14. WIDE CARRIAGE - A wide-carriage printer can use 14" wide paper, if
            you have one answer "Y" for yes here.  This will allow you to
            print trended reports on the entire width (vertical) of the
            paper.  Answering "N" for no here will keep all print outs
            within the 8 1/2" of paper width.

    15. INIT STRING - This function will allow you to send a special setup
            string to the printer when you run 'CHEQUE-IT-OUT'.  It is
            usually blank, and most often used by advanced users.  It may
            be used to move your printer's left margin, or to change the
            printer font you are using.


    16. FORMS INIT STRING - The inputs for this field are the escape
            sequences which change your printer modes when using pre-
            printed forms (like checks).  It is usually used to turn off
            special modes in the init string above (see your printer
            manual for proper codes).  All inputs are numbers from 0 to
            255.  If you do not know what codes to use for your printer,
            simply leave all fields blank.

    17. NORMAL - The "Normal Mode" tells your printer to print in 10-
            characters-per-inch mode.  If you have an Epson printer enter
            "18".

    18. COMPRESSED - The "Compressed Mode" changes your printer to print
            in 17-characters-per-inch mode.  If you have an Epson printer
            enter "15" in the first field.

    19. EXIT STRING - This is an optional field for advanced users to
            reset their printer after printing reports.  Beginners should
            leave this section blank.


    3d - PASSWORDS

    1.  Passwords are used to protect your personal and/or confidential
        information from any unauthorized use by others.  Using passwords
        allows you be confident and ensures that no one will tamper with
        your information.  In 'CHEQUE-IT-OUT' we are giving you this
        outstanding feature at different levels.  Each password is
        created by you and can be up to 8 characters long.  Once a
        password has been created, it can be changed, but not bypassed.
        Another safety precaution is that the password NEVER appears on
        the screen when you are typing it in, but instead dot
        characters will appear.  Your password will only appear on the


                                      Page 27


                                   CHEQUE-IT-OUT


        screen when it is being created.  This is to ensure proper
        spelling.

        There are three levels of password protection available. You can
        either select one, or all for ultimate safety. Should you forget
        your password you will need to send your data files to us for
        password removal.

        First Option: "System Password", creating a password here will
        prohibit others from entering into that datafile.

        Second Option: "Acct Rec Password", creating a password here will
        prohibit the use of the Account Reconciliation module.

        Third Option: "Access to Reports". Creating a passwords here will
        prohibit only the printing of reports,  but all other menu items
        will be available.

    2.  At the Configuration Menu select PASSWORDS MENU.  The following
        prompt will appear.

                          |-- Passwords Menu --|
                          | Leave Passwords    |
                          | System Passwords   |
                          | Acct Rec Password  |
                          |--------------------|

        Using the keypad arrow keys, move the highlighted cursor to either
        the System Password or the Acct Rec Password and press "ENTER".
        (The Account Reconciliation has only one password). The next
        prompt will be as follows:

                           |----- Passwords ----|
                           |  Access to System  |
                           |  Access to Reports |
                           |--------------------|


        From this prompt you have the option to select one password for the
        system and/or the reports menu.  Using the keypad arrow keys, move
        the highlighted cursor to the appropriate selection and press
        ENTER.  If you want to create a password for both, you will need
        to do so one at a time.

        Once you have selected the system or reports, the following prompt
        will appear:

                         |--- Change Password ---|
                         | Old Password:________ |
                         |                       |
                         |-----------------------|

        This prompt (shown above) asks for the old password.  If you are
        creating a password for the first time, there will be no old
        password, so you would simply leave this field blank.

        If you are changing your old password to a new password, you will
        need to enter the old password first. It is very important that


                                      Page 28


                                   CHEQUE-IT-OUT


        you spell this word correctly, because it does not appear on the
        screen as you type in, if you type in your password incorrectly,
        or enter the wrong one, the prompt "INVALID ENTRY" appears.
        Remember each password can be up to eight characters long.  For
        each letter you type, a dot (  ) will appear to indicate each
        letter.   When you have entered the appropriate password, press
        "ENTER" to continue to the next field.  The next prompt to appear
        is as follows:


                         |--- Change Password ---|
                         | Old Password:________ |
                         | New Password:________ |
                         |-----------------------|

        Once you have entered your old password then enter here the new
        password whether you are creating or changing a password.  When
        complete press the ENTER key.

        NOTE: Remember that your password will only appear on the screen
              once, when entering a new password.  Other than a new
              entry, your password will NEVER appear on the screen.
              Instead, for each password character you enter a "" will
              appear.  Therefore, we recommend that you choose a password
              that is easy or write it down on a piece of paper and file
              it away.

        Once you have established a password, it cannot be bypassed.  You
        must have the right password in order to access the System,
        Account Reconciliation or Reports.

        If there is ever a time where you feel you no longer are in need
        of a password, simply enter the old password and leave the "New
        Password" blank (press spacebar), and press "ENTER" when complete.



    3e - SCREEN COLORS

    1.  If you have a color display board, 'CHEQUE-IT-OUT' will automatically
        display all screens in color.  The colors that appear are the
        default colors and are defined in the system configuration.  To
        change the color configuration, follow the steps below:

    2.  Select "Screen Colors" at the Configuration Menu and the following
        menu will appear:














                                      Page 29


                                   CHEQUE-IT-OUT


                      |- Colors Configuration Menu -|
                      | Leave Color Selections      |
                      | Main Screen Color           |
                      | Error Window Colors         |
                      | Input Window Colors         |
                      | Select-Acct Window Colors   |
                      | Main Menu Colors            |
                      | Sub-Menu Colors             |
                      | Acct Rec Menu Colors        |
                      | Help Screen Colors          |
                      | Reset to defaults - Color   |
                      | Reset to defaults - B&W     |
                      |-----------------------------|

        There are ten color selections available in this menu.  Please
        find below a brief explanation for each color selection:

        A. Main Screen Color - this is your background screen color.

        B. Error Window Colors - the color of the window that
           appears when an incorrect entry has been made or a file name
           cannot be found.

        C. Input Window Color - color of all input field windows.

        D. Select-Acct Window Colors - color of the pop-up chart of
           accounts and the filename windows.

        E. Sub-Menu Colors - colors in the sub-menu's.

        F. Acct Rec Menu Colors - colors of the Account Reconciliation
           Menu.

        G. Help Screen Colors - the colors of the Help window.

        H. Reset to default - COLOR - resets the colors to the programs
           original default color configuration.

        I. Reset to default - B&W - resets the color configuration for a
           black and white monitor.


    3.  Each menu item, excluding the Main Menu Color selection, has its
        own color menu.  The section that follows explains the color
        selection menus:

        The Error Window Colors, Input Window Colors and Select-Acct
        Window Colors have identical menus.  (Shown below using the
        Select-Acct Window Colors menu as an example)

                        |- Select-Acct Window Colors -|
                        | Window Frame Colors         |
                        | Window Title Colors         |
                        | Window Body Colors          |
                        | Selected Colors             |
                        | Prompt Colors               |
                        | Input Colors                |
                        |-----------------------------|


                                      Page 30


                                   CHEQUE-IT-OUT



        A. Window Frame Colors - the frame color around the windows.

        B. Window Title Colors - the color of the window heading title.

        C. Window Body Colors - the color of the body of the window.

        D. Selected Colors - the color of the currently selected item in
           the window.

        E. Prompt Colors - the color of each field title in a window.

        F. Input Colors - the color of the input field (the field you
           enter your information into).

    4.  The Main Menu Colors, Sub-Menu Colors, Utility Menu Colors and
        Acct Rec Menu Colors also share identical menus (shown below using
        the Main Menu Colors menu as the example).

        NOTE: The first four menu items are explained above #A - #D.

                            |- Main Menu Colors --|
                            | Window Frame Colors |
                            | Window Title Colors |
                            | Window Body Colors  |
                            | Selected Colors     |
                            | Pick Colors         |
                            | Help Colors         |
                            | Shadow Colors       |
                            |---------------------|

        G. Pick Colors - the color of the highlighted "Pick" letter of
           each menu selection (color monitors only).

        H. Help Colors - color of the one line help sentence which is
           displayed at the bottom of the screen.

        I. Shadow Colors - the color of the shadow behind every window.

    5.  The Help Screen Colors are as shown below.  Again, the first four
        selections are described above in #A - #D.


                           |- Help Screen Colors -|
                           | Window Frame Colors  |
                           | Window Title Colors  |
                           | Window Body Colors   |
                           | Selected Colors      |
                           | Un-Selected Colors   |
                           | Hi-Lite Color 1      |
                           | Hi-Lite Color 2      |
                           | Hi-Lite Color 3      |
                           |----------------------|

        J. Un-Selected Colors - the un-selected cross-reference selection
           of a Help Topic (e.g. the help topic "Filename" has the
           cross-reference "MOUSE COMMANDS" at the bottom of the screen).



                                      Page 31


                                   CHEQUE-IT-OUT


        K. Hi-Lite Colors 1,2&3 - important words and information in the
           help screen that are highlighted.

    6.  The last two selections in the Colors Configuration Menu are
        Reset default to color or B&W.  If you have selected a color
        combination you do not like, simply select the Reset to default -
        Color or B&W and press "ENTER".  A window will then appear
        stating "Colors reset to defaults".  Before leaving the Color Menu
        press "F10" and at the "SAVE INPUTS [Y]" prompt, answer "Y" for
        yes.

        To make color selections, make your selection from the Colors
        Configuration Menu. Then, use the keypad arrows to select the
        item you would like changed (i.e. window frame, window title,
        etc.).  Press "ENTER", and a pop-up window with a color chart will
        then appear.

        The color choices for background and foreground are listed below
        in the order they appear on the screen:

        BACKGROUND COLORS - are: black, blue, green, cyan, red, magenta,
        brown, and light grey.

        FOREGROUND COLORS - are: black, blue, green, cyan, red, magenta,
        brown, light grey, dark grey, light blue, light green, light cyan,
        light red, light magenta, yellow, and white.

        The background colors are displayed vertically, and the foreground
        colors are displayed horizontally on the color chart.

        To make a color selection, use the keypad arrows (or your mouse)
        to move the highlighted cursor to your color choice, press
        "ENTER", and the color chart will then disappear.  Your new colors
        are set.  Return to the Master Menu to activate your new color
        selection.

        NOTE:  When the cursor is on any selected item, the colors are
               reversed. (e.g.  green on red will appear red on green).


    3f - BACKING UP DATAFILES

    1.  Making daily back-up copies of your real data files is strictly
        for your own protection.  If there is ever a time when your hard
        disk or your floppy should crash, you should have a current backup
        copy of your data files that you could fall back on instead of
        having to re-enter all your information.  Therefore, we encourage
        you to make a backup copy of your datafiles at the end of each
        day.  We also recommend that you have more then one back-up disk
        so you can rotate the disks (one for each day of the week).  To
        make a back-up you need to have a new blank formatted disk ready,
        labeled "BACKUP DISK FOR ????????" (? = filename).  The backup
        procedure will only backup the datafile you are currently in.
        During the back-up the following extension are copied: .GLA, .CNF,
        .CKF, .GLT, .GLR.  To make a back-up of your datafiles please
        follow the steps below:

    2.  From the Configuration Menu, select Backup Datafiles.  The


                                      Page 32


                                   CHEQUE-IT-OUT


        following prompt will appear:


                          |--- Datafile Backup --|
                          | BACKUP DISK DRIVE:A  |
                          |----------------------|

        This prompt is asking you for the disk drive letter in which you
        have inserted your backup disk, the default is drive A:, to except
        the default press "ENTER", otherwise enter your disk drive letter.
        Hard disk users can only back-up their files to a floppy disk
        drive.  The following screen will then appear:

                    Put a BLANK FORMATTED disk in drive A:
                      **** PRESS ANY KEY WHEN READY ****

        'CHEQUE-IT-OUT' will then copy all of the above mentioned
        extensions of your data file to your backup disk.  If you run out
        of disk space on your backup disk , 'CHEQUE-IT-OUT' is smart
        enough to tell you to insert a new disk to continue the backup
        procedure.







































                                      Page 33


                                   CHEQUE-IT-OUT


                    SECTION FOUR - ADDITIONAL INFORMATION

    4a - BASIC ACCOUNTING SKILLS


    BASIC ACCOUNTING PRINCIPLES

    In this section, we would like to give you an overview of basic
    accounting principles.  Most of the examples in this section refer
    primarily to various business transactions.  They can, however, easily be
    adapted to apply to an individual's financial transactions.


    ACCOUNTING ELEMENTS

    To have complete accounting records, all transactions and events which
    affect the basic accounting elements must be recorded.  The basic
    accounting elements are ASSETS, LIABILITIES and CAPITAL or EQUITY.
    These elements are defined below:

    ASSETS:  Items of value which are owned by the business or by the
             individual are assets.  Examples of assets are: money,
             accounts receivable, merchandise, furniture, machinery,
             buildings, and land.

    LIABILITIES:  A liability is any obligation to pay a debt. Liabilities
             include: accounts payable, taxes payable, bank loans, and
             notes to creditors.

    CAPITAL/EQUITY:  The amount by which the assets exceed the liabilities
             is termed "Capital", or "Owner's Equity" in the business. The
             word "equity", in this sense, means "interest in".  The terms
             proprietorship, net worth, or capital are all synonyms for
             owner's equity.  If there are no liabilities, the owner's
             equity is equal to the total amount of assets.


    THE ACCOUNTING EQUATION

    The relationship between the three basic accounting elements can be
    expressed in the following simple equation:

                         ASSETS = LIABILITIES + CAPITAL/EQUITY

    In order to increase equity in a business, the owner must either
    increase the assets without increasing the liabilities or decrease the
    liabilities without decreasing the assets.  In order to increase the
    assets and equity without investing more money or other property, the
    business must operate at a profit (profit and losses are described
    later).

    Below are examples of the effect of transactions on the accounting
    equation:

    1.  An increase in an asset offset by an increase in equity; for
        instance, opening a bank account with a deposit of $5,000. As a
        result of this transaction, the assets are increased. Since no
        liabilities are involved, the equity also increases by the same


                                      Page 34


                                   CHEQUE-IT-OUT


        amount.  The equation is as follows:

                    ASSETS     =  LIABILITIES  +  CAPITAL/EQUITY

                    $5,000     =  $0           +  $5,000
                    (cash)                        (owner's equity)

    2.  An increase in an asset, offset by an increase in a liability.
        For example: you purchase office equipment for $4,000 on 30-day
        credit.  The result is an increase in assets and an increase in an
        accounts-payable liability.  The equation is as follows:


                    ASSETS     =  LIABILITIES  +  CAPITAL/EQUITY

                    $4,000     =  $4,000       +  $0
                    (office       (accounts
                    equipment)    payable)


    3.  An increase in one asset, offset by a decrease in another asset.
        For example: the purchase of office supplies for $100 cash.  In
        this case, the office supplies asset account increases by $100,
        and the cash asset account decreases by $100, causing the assets,
        liabilities, and equity to remain unchanged.  The equation is as
        follows:

                    ASSETS           =  LIABILITIES  +  CAPITAL/EQUITY

                    supplies   $100
                    cash      <$100>
                               ____
                                $0   =  $0           +  $0

    4.  An increase in an asset, offset by an increase in equity resulting
        from revenue.  For example: you receive $500 cash from a client
        for services.  This increases your cash balance and, since
        liabilities are not affected, the equity increases as well.  The
        equation is as follows:

                    ASSETS     =  LIABILITIES  +  CAPITAL/EQUITY

                    $500       =  $0           +  $500
                    cash                          owner's equity


    5.  A decrease in an asset offset by a decrease in equity resulting
        from expense.  For example: you paid $400 cash for rent.  This
        decreases your cash balance and, since liabilities are not
        affected, the equity decreases by $400 as well.  The equation is
        as follows:

                    ASSETS     =  LIABILITIES  +  CAPITAL/EQUITY

                    <$400>     =  $0           +  <$400>
                    cash                          owner's equity




                                      Page 35


                                   CHEQUE-IT-OUT


    THE INCOME STATEMENT

    This statement, sometimes called a Profit and Loss Statement or
    Operating Statement, shows the net income (or net loss) for a
    specified period of time.  The Income Statement, simply stated, is the
    total income, less the total expenses.  A simple statement is shown
    below:


                       Income from services        $ 500
                       Rent expense               <$ 400>
                                                    _____

                       Net Income                  $ 100
                                                    =====


    THE BALANCE SHEET

    The balance sheet is sometimes called a statement of financial
    condition, or a statement of financial position.  It shows the assets,
    liabilities, and equity at a specific date.  The balance sheet shows
    the ending balance for all of the asset, liability, and equity
    accounts.  The balance sheet for the above five transactions would
    appear as follows:

                      ASSETS
                      ------
                      Cash                      $5,000
                      Equipment                  4,000
                      Supplies                     100
                                                 _____
                      Total Assets              $9,100
                                                 =====

                      LIABILITIES
                      -----------
                      Accounts Payable          $4,000


                      CAPITAL/EQUITY
                      --------------
                      Owner's Equity            $5,100
                                                 _____

                      Total Liab & Equity       $9,100
                                                 =====


    (Notice that the accounting equation holds true: ASSETS = LIABILITIES
    + EQUITY.)


    DOUBLE ENTRY ACCOUNTING

    The meanings of the terms asset, liability and capital/equity are
    explained above.  Examples have been given to show how each
    transaction causes a change in one or more of the three basic


                                      Page 36


                                   CHEQUE-IT-OUT


    accounting elements.  Note that in each of the transactions above,
    there was a dual effect (two accounts were changed).  This will always
    be true.  A change (increase or decrease) in any asset, liability or
    capital/equity is always accompanied by an offsetting change.

    The basis for double entry accounting is that each transaction has two
    parts.  The first part is where the money is coming from, this is
    called a credit.  The second part is where the money is going to, this
    is called a debit.  There is no transaction which cannot be recorded
    in a double entry transaction.

    A business or individual has many assets.  Each one of these assets
    monitored in a separate account (e.g., checking account, savings
    account, furniture, buildings).  A separate account is kept for each
    asset, liability and equity.  There is no limit to how many accounts
    make up your total assets, liabilities or equity.

    To help you to understand double entry accounting, we will introduce
    you to a way of describing an account.  This is called a "T" account.
    The T account has three major parts: the title and account number, the
    debit side, and the credit side.  A sample of the T account form is
    shown below.

                                 ACCOUNT TITLE
                           ------------------------
                            DEBIT SIDE | CREDIT SIDE
                                       |
                                       |
                                       |

    DEBITS AND CREDITS

    An easy rule to remember is, that a credit is where money is coming
    from and a debit is where money is going to.  For example:  If you
    wrote a check totaling $100 for clothes, you would then credit your
    checking account (where the money came from), and debit your clothing
    account (what the money was used for).

    Increases in assets are recorded as debits (on the left side of the
    "T" account).  Increases in liabilities are recorded as credits (on
    the right side of the "T" account).

    Decreases in assets are recorded as credits (on the right side of the
    "T" account).  Decreases in liabilities and equity are recorded as
    debits (on the left side of the "T" account).

    These relationships are shown below:

    1. ASSETS = LIABILITIES & EQUITY

    2. DEBITS = CREDITS

    3.   ALL ASSET ACCOUNTS        ALL LIABILITY ACCOUNTS
       _____________________      ______________________
       Debit to  | Credit to      Debit to  | Credit to
       Record    | Record         Record    | Record
       Increases | Decreases      Decreases | Increases
          (+)         (-)            (-)         (+)


                                      Page 37


                                   CHEQUE-IT-OUT




                      ALL EQUITY ACCOUNTS
                     ______________________
                     Debit to   | Credit to
                     Record     | Record
                     Decreases  | Increases
                       (-)          (+)

    To illustrate double  entry accounting, the transaction would be as
    follows:

                          CASH                EQUITY
                 _____________________ ___________________
                    Debit  |  Credit     Debit  |  Credit
                   $5,000  |                    |  $5,000


    INCOME AND EXPENSES

    The term "Income" refers to an increase in the equity account.
    Likewise, the term "Expense" refers to a decrease in the equity.
    Thus, there are two new ways in which the equity account can change.
    All transactions involving income, and all transactions involving
    expense cause a change in the equity account.

    These changes could be recorded by debiting the equity account for
    expenses and crediting that same equity account for income.  However,
    if you were to record income and expense in this manner, the
    capital/equity account would have a mixture of increases due to
    income, and the investment of assets in the business, while the debit
    side would have a mix of decreases due to expenses and withdrawal of
    assets from the business.  This would make it very hard to analyze the
    profitability or to determine the net income.  Thus, all income and
    expense transactions are recorded in separately classified income and
    expense accounts.  Only the net income (or  net profit) is then
    reflected in the capital/equity account.


    The income and expense accounts also have debits and credits.  Shown
    below are the relationship of these accounts.

                 ALL EXPENSE ACCOUNTS      ALL INCOME ACCOUNTS
                ____________________     _____________________
                 Debit to  | Credit to   Debit to  | Credit to
                 Record    | Record        Record  | Record
                 Increases | Decreases   Decreases | Increases
                    (+)        (-)          (-)         (+)

    The use of these accounts is illustrated in the following examples:

    1.  An increase in an asset offset by an increase in income.  For
        example, you receive $500 cash for services rendered.  This would
        appear as follows:






                                      Page 38


                                   CHEQUE-IT-OUT


                         CASH                       INCOME
                  _____________________     _____________________
                     DEBIT | CREDIT            DEBIT  |  CREDIT
                           |                          |
                      $500 |                          |  $500

    2.  A decrease in an asset offset by an increase in expense.  For
        example, you pay $400 for office rent.  This would be recorded as
        follows:


                        CASH RENT                  EXPENSES
                  _____________________     _____________________
                     DEBIT | CREDIT            DEBIT  |  CREDIT
                           |                          |
                           | $400               $400  |


    This brief description of accounting principles and double-entry
    accounting is not intended to teach you everything about accounting.
    You should  refer to a basic accounting or bookkeeping text if you
    would like  more details.  The intention of this section is to
    familiarize our users with double-entry accounting and to help users
    get started with 'CHEQUE-IT-OUT'.  For further transaction examples,
    look at the "SAMPLE" files on your Sample disk.  By printing the
    Transactions Journal report in the sample accounts, you will be able
    to see some sample transactions to apply to your set of books.


    4b - TECHNICAL SUPPORT

    It is our goal to provide you with the best and friendliest customer
    support as well as the highest-quality and easiest-to-use program at
    the lowest price. In order for us to do so, we do have some guidelines
    we would like to bring to your attention:

    WHO:  All REGISTERED users are entitled to FREE, unlimited technical
          support.

    HOW:  Our support staff is on call from 8:30am to 5:30pm, mountain
          time, Monday through Friday.  When calling us please have your
          registration number at hand and your computer turned on with
          'CHEQUE-IT-OUT' already loaded.  You also may send letters
          containing questions but for fastest service it is recommend
          that you call our technical support line.


    WHERE:    24 HOUR ORDER LINE:          1-800-245-7789
              24 HOUR FAX LINE:            (719) 528-8997
              Technical Support/Questions: (719) 528-8989
              COMPUSERVE:                  75236,2326

              Mailing address:   HOOPER INTERNATIONAL, INC.
                                 P.O. Box 50200
                                 Colorado Springs, CO 80949





                                      Page 39


                                   CHEQUE-IT-OUT


    If you have any suggestions regarding 'CHEQUE-IT-OUT', we would like
    to hear them.  We welcome all comments, and in future versions of
    'CHEQUE-IT-OUT', we will certainly implement the suggestions that are
    advantageous to other users as well.
























































                                      Page 40


                                   CHEQUE-IT-OUT


                   SECTION FIVE - SETTING UP YOUR OWN BOOKS

    Below is a list of steps to follow when using 'CHEQUE-IT-OUT' for the
    first time.  These steps are for those who have read Section One -
    Getting Started, and are now ready to set up their own "live" data
    files.  The brief steps below are intended to provide a systematic
    step-by-step way to get started on your own.  They are not intended to
    replace reading the manual!

    If you have not already done so, follow the INSTALL procedures in
    Section 1c Installing 'CHEQUE-IT-OUT', otherwise please follow the
    instructions below:

         1.  To set up your own books, you will need your program disk in
             drive A: and a blank data disk in drive B:.  Change to the A:
             prompt.  Hard disk users change to your newly created
             'CHEQUE-IT-OUT' directory (e.g. CD\CHEQUE).

         2.  Type in the command "CHEQUE" to start up 'CHEQUE-IT-OUT'.  At
             the "DRIVE" prompt, enter the letter of the disk drive where
             you want your datafiles to be stored, usually B:. C: for hard
             disk users, unless you want your data to be stored on a
             floppy disk, then enter the drive letter where your blank
             data disk is.  Hard disk users will notice substantial speed
             increase if datafiles are kept on the hard disk.

         3.  At the "PATH" (directory name) prompt, press "ENTER" to
             accept the directory you are currently in, or enter the
             already existing directory name in which you would like your
             datafiles stored.  Floppy disk users leave this section
             blank.

         4.  At the "FILENAME" prompt, enter the name of the data file you
             want to create.  This can be any name up to eight characters
             long without spaces or special characters (A-Z only).  Next,
             answer the "Create new file" prompt with "Y" for yes.

         5.  You will then be at the 'CHEQUE-IT-OUT' Master Menu.  At this
             time you may go to the Configuration menu (CONFIG) and change
             any system defaults, such as; system date, report heading
             names, screen colors, set up passwords, and backup datafiles.
             However, this may be done at any time and is not necessary in
             order to run 'CHEQUE-IT-OUT'.  We do however, recommend that
             you set up the report heading name at this time (see Section
             3b - Report Heading Name).

         6.  Next, select the Chart of Accounts Menu (Accounts) to set up
             your own Chart of Accounts.  You need to have accounts active
             before you can enter any transactions or print reports.  See
             Section Six - The Chart of Accounts.

         7.  After you have set up accounts, select the Transaction Menu
             (Trans) from the Master Menu to start entering transactions
             and printing checks.  See Section Eight- Transactions.

         8.  Once you have entered transactions, select the Reports Menu
             (Reports) from the Master Menu to print a Transaction Journal
             Report (or other required reports) to see what you have done


                                      Page 41


                                   CHEQUE-IT-OUT


             so far.  The two most useful reports are the Income Statement
             and the Balance Sheet.  See Section Nine - Reports.

         9.  Then you may select the Utility Menu (UTILITY) from the
             Master Menu to set up your check configuration, sort
             transactions, export transactions, or perform the end-of-
             period posting.  See Section Ten - Utility.


    Please remember that the above steps are only intended to show you the
    order of getting started with your own books.  We highly recommend
    that you read ALL related sections before beginning.
















































                                      Page 42


                                   CHEQUE-IT-OUT


                      SECTION SIX - THE CHART OF ACCOUNTS

    6a  - WHAT IS A CHART OF ACCOUNTS?

    The Chart of Accounts is the foundation upon which your 'CHEQUE-IT-
    OUT' program is built.  Creating an accurate and logical Chart of
    Accounts is important if you wish to correctly input and retrieve
    data.  We strongly recommend that you review the sample Chart of
    Accounts on the Sample file and use it as a guideline in setting up
    your own accounts (see Sample datafile for a sample Chart of Accounts).

    In this section, the elements included in a Chart of Accounts will be
    described.  Also, the procedures for entering, changing or deleting
    account numbers will be discussed.  If you do not have much experience
    in double-entry bookkeeping or the terminology used, you may find it
    worth while to become acquainted with some of the basic principles
    described in Section 4a - Basic Accounting Skills.

    6b - TYPES OF ACCOUNTS

    Each transaction entered into the program requires a minimum of two
    accounts.  One account must be debited and one account must be
    credited during a transaction.  Often times, however, there may be
    several accounts that are debited and/or credited in one transaction.

    A total of 2000 different accounts may be set up in your Chart of
    Accounts.  Each account must be assigned a type code, and an account
    number between 1 and 999999.  The account types are listed as follows:

    A = ASSETS - Money you have, things you own, and money owed to you.

    L = LIABILITIES - debts (e.g. loans, credit cards, etc.)

    C = CAPITAL OR EQUITY - Starting net worth or money invested in a
                 company.

    R = RETAINED EARNINGS - Used by the system to track your net income
                 and net equity (shows all profit related increases or
                 decreases).  You must set up at least one type "R"
                 account (The first "R" account is used by the system).

    I = INCOME - Earnings, paychecks, or cash received.

    E = EXPENSE - Money you pay out for goods or services (e.g. rent, gas,
                 food, etc.).

    1 = SUBTOTAL GROUP 1 - Subtotals for reports only.

    2 = SUBTOTAL GROUP 2 - Subtotals for reports only.

    N = NET INCOME - "Net Income Subtotal" used only for Expense Accounts
                 (Type "E") and appears only in reports.


    6c - ORGANIZATION OF THE CHART OF ACCOUNTS

    A sample Chart of Accounts listing is included in the Sample datafile.
    Please review this listing to notice the following characteristics:


                                      Page 43


                                   CHEQUE-IT-OUT



         1.  The Asset accounts are assigned the lowest account numbers,
             followed by Liabilities, Capital/Equity, Retained Earnings,
             Income, and then Expenses.

         2.  There should be at least one Capital (Type "C") and one
             Retained Earnings (Type "R") account set up.

         3.  All accounts of the same type are grouped together and you
             may set up sub-total accounts within these groups.

         4.  Account numbers do not have to be assigned in immediate
             sequence.  We do recommend, however, that you leave large
             spaces between account numbers to help you when adding new
             account numbers at a later date.

         5.  We also suggest assigning account numbers so that all
             accounts of the same type are grouped together in the same
             series of account numbers.  Below is an example of account
             number groupings:

                              1 - 1999 Assets
                           2000 - 2999 Liabilities
                           3000 - 3999 Capital and Retained Earnings
                           4000 - 4999 Income
                           5000 - 5999 Expenses

    6d - SUBTOTALS

    Specific account numbers may be reserved for subtotals in the Chart of
    Accounts.  All subtotal accounts are defined with the account type
    "1", "2" or "N".  This allows you to organize your subtotal accounts
    to best suit your needs.  Refer to the sample Chart of Accounts in
    the Sample files, to see how the subtotals may be labeled and used.

         1.  Subtotal Group "1" will give you a subtotal of account
             numbers of the same account type (A,L,C,R,I,or E).

             FOR EXAMPLE: You have three checking accounts, #100, #110,
             and #120.  If you would like a subtotal for those three
             accounts, assuming that there are no other accounts between
             those numbers, you should create an "Account Type 1" with the
             account number 121.

         2.  Subtotal Group "2" will subtotal all of the accounts back to
             the previous group "2" subtotal.  Group "2" subtotals will
             also clear the group "1" subtotal accounts.

         3.  The Type "N" (Net Income) account is used only in the Expense
             account group (Type "E").  This account type will determine
             your cumulative net income to this point in the Expense
             Account group.  Net Income = Income - Expenses.

         4.  You may enter as many subtotal accounts as needed.

         5.  You do not need to enter any Grand Total accounts (i.e.Total
             Income).  On Reports, the 'CHEQUE-IT-OUT' program
             automatically creates a Grand Total for each account type


                                      Page 44


                                   CHEQUE-IT-OUT


             grouping.

         6.  You cannot get a combined subtotal for two account types
             (e.g. assets "A" and liabilities "L") as all subtotal
             balances are cleared between account types.

    Subtotal accounts do not have beginning balances and you cannot enter
    transactions into them.

    6e -  CHART OF ACCOUNTS DATA FIELDS

    Each account in the Chart of Accounts includes several input fields.
    These fields contain important information for that account.  The data
    fields are as follows:

         ACCOUNT NUMBER - First enter the new account number, up to six
             digits long, making sure you are following the suggested
             guidelines for organizing your Chart of Accounts (section
             6c.).  You cannot mix account types together.  All accounts
             must be organized in account type order (A,L,C,R,I,E).

         ACCOUNT NAME - The account name should clearly identify the
             purpose of that account or subtotal field (i.e. "Checking
             First National Bank" not "Checking Account").

         ACCOUNT TYPE - This field consists of a one-character account
             type identification.  Only the following types are allowed:
             A, L, C, R, I, E, 1, 2, N (See Section 6b - Types of
             Accounts).

         BEGINNING BALANCE - The beginning balance is usually zero. Any
             time you enter a beginning balance, you run the risk of an
             out-of-balance situation. If you choose to enter a beginning
             balance, you must always enter a positive number.  This is
             the normal balance associated with any given account  (e.g.
             Assets = debit, Liabilities = credit, etc.).  The default
             value for beginning balances is zero.  You cannot enter a
             beginning balance for type "1", "2", or "N" subtotal
             accounts (See Section 6j - Suggested Method for Setting
             Beginning Balances).

             NOTE:  Income and Expense accounts are period accounts and
             therefore, do not have beginning balances.  Any beginning
             balances need to be entered as transactions.


    6f - GETTING FAMILIAR WITH THE CHART OF ACCOUNTS

    Before you enter your own chart of accounts, follow the steps below
    using the sample accounts.

         1.  After you have started up 'CHEQUE-IT-OUT' select the filename
             "SAMPLE".

         2.  Once at the Main Menu, move the highlighted cursor to
             "Accounts" and press "ENTER".




                                      Page 45


                                   CHEQUE-IT-OUT


         3.  From the Chart of Accounts Menu, select "Update Chart of
             Accounts".  Notice how the sample Chart of Accounts is
             organized.  This is a typical example of a Chart of Accounts.

         4.  When selecting account numbers, use the keypad arrows to make
             your selection.  The screen will display eighteen account
             numbers at a time.  To see more accounts use the key pad
             arrows to scroll up or down.  To save time, if you know the
             account number, simply type it in (the account number you
             enter will appear at the bottom of the screen), and the
             cursor will automatically go to that account.  If you are
             unsure of the account number, you can also enter the first
             number of the account, and the cursor will move to the first
             account with that number (i.e. entering 5 will take you to
             account number 5000)

    Before setting up your own Chart of Accounts, enter some samples into
    the sample Chart of Accounts.  This will familiarize you with how to
    enter/change account numbers.


    6g - ADDING/MODIFYING/DELETING ACCOUNTS

    From the Chart of Accounts Menu, select Update Chart of Accounts. At
    the bottom of the Chart of Accounts screen, please notice three
    available functions: <F3>Add, <F4>Mod, and <F5>Del.  Selecting one of
    these functions, enables you to add, modify, or delete an account.
    Follow the appropriate steps below:

    1.  TO ADD AN ACCOUNT - press the <F3> function key and a pop-up
        window will appear.  If there are no already existing accounts,
        this add account window will automatically appear.


                  |------------- ADD ACCOUNT --------------|
                  |                                        |
                  |  Number:1000____                       |
                  |    Name:First National Bank Checking__ |
                  |    Type:A                              |
                  | Beg Bal:______0.00                     |
                  |                                        |
                  |------ 1 Active,  Maximum is 2000 ------|


        Here, enter the account number you want to add, account name,
        account type (A, L ,C, R, I, E. For subtotal accounts, enter
        "1","2" or "N") and a beginning balance (if any).  Once complete
        press "F10" or "ENTER" and your new account will immediately
        appear in the Chart of Accounts window.  Press "ESC" and the Add
        Account window will disappear.

    2.  TO MODIFY AN ACCOUNT - press the <F4> function key and a pop-up
        window will appear.







                                      Page 46


                                   CHEQUE-IT-OUT


                  |------------ MODIFY ACCOUNT ------------|
                  |                                        |
                  |  Number:0_______                       |
                  |    Name:______________________________ |
                  |    Type:A                              |
                  | Beg Bal:______0.00                     |
                  |                                        |
                  |------ 0 Active,  Maximum is 2000 ------|


        Here, you can change the account name and change or add a
        beginning balance. Once your changes are complete press <F10> or
        "ENTER" and your changes will be saved.  Press "ESC" and the
        Modify Account window will disappear.

        To change an account number, you must add a new account, change
        any existing transactions to this new account, and then delete the
        old account number as described below.

    3.  TO DELETE AN ACCOUNT - this account must first have a zero
        beginning balance and no transactions.  If it does have
        transactions, you must delete them in order to delete the account.
        To delete an account, move the highlighted cursor to the
        appropriate account number, and press the <F5> function key.
        Answer "Y" to the "Are you sure" prompt, and the account is now
        deleted.


    6h - ENTERING YOUR CHART OF ACCOUNTS

    When you actually create your own Chart of Accounts, it is important
    that you have an organized plan of the different accounts and types
    you wish to enter.  Organize your paperwork, checks, statements, etc.
    into a logical account type and account number order.  (i.e. Put all
    of your assets in the order you want them to appear in your Chart of
    Accounts, but don't forget to save room for additional accounts and
    subtotals.) To enter your new accounts, follow the steps below.  If
    you are unsure about how to enter accounts, you may practice using
    these steps with the sample Chart of Accounts.  DO NOT try to modify
    the sample Chart of Accounts for your own personal use.

    You must first create a new file for your own datafile as described
    in Section 5.

         1.  Once at the Master Menu, select Accounts.  At the Chart of
             Accounts Menu, select Update Chart of Accounts.

                    |--- Chart of Accounts Menu -----|
                    | Leave Chart of Accounts Menu   |
                    | Update Chart of Accounts       |
                    | Update Expense Budgets         |
                    |--------------------------------|

         2.  Since you are creating a new Chart of Accounts at this point,
             a blank window will appear asking for your first account
             number, name, type, and beginning balance.  It is very
             important, that you to group your accounts appropriately
             (e.g. 1-1999 = Assets, 2000-2999 = Liabilities etc.).  You


                                      Page 47


                                   CHEQUE-IT-OUT


             cannot mix account types together, so be sure to leave plenty
             of space between account numbers and types for additional
             accounts in the future.  We suggest that you increment
             account numbers by ten or twenty.

                  |------------- ADD ACCOUNT --------------|
                  |                                        |
                  |  Number:1000____                       |
                  |    Name:First National Bank Checking__ |
                  |    Type:A                              |
                  | Beg Bal:______0.00                     |
                  |                                        |
                  |------ 1 Active,  Maximum is 2000 ------|

         3.  Input all of the required information for your first account,
             once completed press "ENTER".  At this time your first active
             account will appear in the Chart of Accounts Window.  To add
             additional accounts, press the <F3> function key and the pop-
             up "Add Account" window will re-appear. Follow the above
             procedure until all accounts are entered.  'CHEQUE-IT-OUT'
             automatically sorts your new accounts in numerical order.
             When you have entered all of your accounts, simply press
             "ESC" and the "Add Account" window will disappear displaying
             only your new Chart of Accounts.

         4.  You may, at any time, print a current Chart of Accounts
             listing from the Reports menu (See Section 9 - Reports).

    6i - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES

    When setting up your chart of accounts for the first time, you might have
    beginning balances.  If you do, please follow the instructions below:

    1.  Please note:  that while you are creating new account numbers with
        beginning balances, the system will tell you how much you are out of
        balance.  Do not be concerned with this out-of-balance condition
        before you have finished entering all of your Asset and Liability
        accounts with their beginning balances.

    2.  After you have finished entering all of your Asset and Liability
        beginning balances, you would normally be out of balance by the
        difference between your total assets less your total liabilities (the
        out-of-balance amount shown on the screen).  Enter this difference in
        your first Capital/Equity type "C" account beginning balance.  This
        amount is your starting Equity.  After doing so, the out of balance
        message will disappear.



    6j - CREATING A NEW FILE NAME WITH THE SAME CHART OF ACCOUNTS

    To create a new file name for your Chart of Accounts, do the
    following:

    At the DOS prompt, change to the disk and directory where the
    datafile with the chart of accounts you want to copy is. Then type in
    the  following command: "COPY OLDNAME.CHR NEWNAME.CHR" (where
    "OLDNAME" is the old datafile name and "NEWNAME" is the new datafile


                                      Page 48


                                   CHEQUE-IT-OUT


    name).  By doing this, you avoid the process of having to re-enter the
    Chart of Accounts.

    Next, it is important to set all beginning balances in your NEWNAME
    Chart of Accounts to zero. (Then follow the procedure in Section
    1d - Starting Up 'CHEQUE-IT-OUT').






















































                                      Page 49


                                   CHEQUE-IT-OUT


                  SECTION SEVEN  - INCOME AND EXPENSE BUDGETS

    'CHEQUE-IT-OUT' allows you to keep track of your budgets for income
    and expenses.  You can determine how closely you are adhering to your
    budget by printing the Budget Variance report (See Section Nine -
    Reports).  Follow the procedure below to add budget amounts to your
    'CHEQUE-IT-OUT' database:

    1.  Select "Update Expense Budgets" at the Chart of Accounts Menu.  The
        following prompt will appear:

              |--------------- Enter Budgets -----------------|
              | Enter Account:______                          |
              | Type:   Name:                                 |
              |                                               |
              | ENTER BUDGET:  Month:__   Amount:________0.00 |
              |-----------------------------------------------|


    2.  First, enter the account number you would like to set a budget for.
        This account number must be an active Income or Expense account which
        has been previously set up.  If you are unsure of which account you
        would like to budget, you can press "F2" for a pop-up Chart of
        Accounts.  The system will only accept an Income or Expense account
        number in this field.  Once you have entered the account number, the
        type of account and name will appear.

    3.  Next, enter the month number for the budget you would like to
        create.  Month 13 is used for all months.  If you have a
        consistent monthly payment which is the same every month, you
        would select month 13 here.  Enter the amount for one month, and
        this amount will be entered in each of the 12 months.  This is to
        eliminate having to enter the same budget amount 12 times.

    4.  Next, enter the budget amount.  After you have entered the amount
        and press "ENTER", you will then be back at the "Enter Account:"
        field.  At this time you may enter another account to budget or
        press "ESC" to return to the Chart of Accounts menu.  At that
        point your budget has been saved.  You may print a copy of all of
        your budget data by printing the Budget Listing report (See
        Section Nine - Reports).

    The budget data you enter is reported to the Budget Variance report.
    This report can be run either as a year-to-date cumulative report, or
    as a trended (by month) report.















                                      Page 50


                                   CHEQUE-IT-OUT


                         SECTION EIGHT - TRANSACTIONS

    When entering transactions into 'CHEQUE-IT-OUT', you have three
    options.

    First - "Entering & Printing Checks":  this input screen looks and
    works like your actual checkbook with an option to print live checks.

    Second, "Entering Transactions":  this is an input screen that
    requires a debiting and crediting of accounts.  This field is also
    used for multiple distribution transactions.

    Third, "Creating Recurring Entries":  Here you are able to create
    a consistent transaction to occur weekly, bi-weekly, semi-monthly, or
    monthly.

    This section will cover the above options in detail.

    8a - ENTERING & PRINTING CHECKS

    This method of entering transactions is recommended for beginners.  It
    is a simplified transaction entering process that looks and works just
    like writing real checks.  Follow the steps below:

    1.  From the Transaction Menu, select "Entering Checks".  The
        following prompt appears:

                    |-------- SELECT ACCOUNT --------|
                    | Checking Account Number:0_____ |
                    |--------------------------------|

        Enter here the checking account number that is being used (where
        money is coming from).  If you are unsure of the account number,
        press the <F2> function key for a pop-up Chart of Accounts.  Move
        the highlighted cursor to the appropriate account number and press
        "ENTER" to accept the account number.  The following screen will
        then appear:

      |--------------------------------------------------------------------|
      |                                                      Check:2000___ |
      |                                          Date:09-03-89             |
      | Pay to                                                             |
      | the order of:Acme Computers_________________         $ ____1000.00 |
      | One Thousand and no/100___________________________________ Dollars |
      | Address:1234 Weeping Willow Blvd.____                              |
      |        :Colorado Springs, CO 80900___                              |
      |        :_____________________________                              |
      |                                                                    |
      | Expense:1200__ computer hardware              ____________________ |
      |                                                                    |
      |--------------------------------------------------------------------|

    2.  The first prompt asks for the check number.  'CHEQUE-IT-OUT' can
        automatically increment the check number for you.  To increment to
        the next check number, press the <+> key and then "ENTER", or
        simply enter the check number manually.  The check number will be
        entered and the cursor will move to the next input field.



                                      Page 51


                                   CHEQUE-IT-OUT


    3.  The next input field is the date.  Enter the date the check was
        written and press "ENTER" to move to the next field.

    4.  Next, enter who the check was/is made out to and press "ENTER" to
        continue.

    5   Next, enter amount of the check.  'CHEQUE-IT-OUT' automatically
        fills out the written amount for you.

    6.  At the address prompt enter an optional three line address for the
        person or company to which the check was made out to.


    7.  In the last field, enter the Expense (or Asset) account number you
        wish to debit (where money is going to).  Again, if you are unsure
        of the account number, press the <F2> function key for a pop-up
        Chart of Accounts.

    8.  Press the <F10> key when complete and the following prompt will
        appear:

               |------------------------------------------|
               | Print check (P) or Inputs Correct Y/N):  |
               |------------------------------------------|

    8.  If you want to print this check, press "P".  If you are simply
        entering a check that has already been written, press "Y" for
        "Inputs Correct" and the check will be saved.  If your inputs are
        not correct, press "N" and the cursor will take you to the first
        input field so you may re-enter the information.


        NOTE:  When you print a check, you must also enter "Y" to the
               "Inputs Correct" prompt in order to save that transaction
               after the check is printed. If you are simply printing a
               check again or for a transaction that has already been
               entered, answer "N" to "Inputs Correct" AFTER printing the
               check, and the transaction will not be saved.

    9.  Once a check has been saved, you will be back at the check number
        input field ready to enter the next check.  If you do not need to
        enter more checks, you may return to the Transaction Menu by
        pressing "ESC".

        NOTE: When using the "Entering Check" feature you can only enter one
              debit account.  If you used one check to pay for several items,
              you should enter this as a multiple distribution.  See Section
              8c - Entering Multiple Debit and Credit Transactions.


    8b - ENTERING TRANSACTIONS

    Each transaction involves the debiting of one account, and the
    crediting of another account.  When entering debits and credits, one
    easy rule to remember is that a credit is where money comes from and a
    debit is where money goes to.  If you are new to double-entry
    bookkeeping, you may wish to review Section Four - Basic Accounting
    Skills, or refer to the sample account for examples.


                                      Page 52


                                   CHEQUE-IT-OUT



    As you enter each of your transactions, 'CHEQUE-IT-OUT' will check it
    to ensure that it is in balance (Debit $ = Credit $).  If your
    accounts in your Chart of Accounts have been set up in balance,
    'CHEQUE-IT-OUT' will always keep them in balance.

    To begin entering transactions, follow the steps below:

    1.  From the Transaction Menu select "Enter Transactions".  The
        following screen will appear:

    |-------------------------- ADD TRANSACTION ----------------------------|
    |Date:08-07-89                                                          |
    |Pt  Check         Description            Acct      Debit      Credit   |
    |-- ------- ---------------------------- ------  ----------- -----------|
    |1_ 101____ Safeway_____________________ 5460__  ______57.74 _______0.00|
    |2_ 101____ Safeway_____________________ 200___  _______0.00 ______57.74|
    |                                                ___________ ___________|
    |                            TRANSACTION TOTAL         57.74       57.74|
    |-----------------------------------------------------------------------|

    2.  Enter the date on which the actual transaction occurred and press
        "ENTER" (e.g. 08-07-89).


    3.  Next, enter the check number for the transaction.  'CHEQUE-IT-OUT'
        can automatically increment the check number for you.  To do so,
        press the <+> key and then "ENTER" (e.g. 101).

    4.  Enter the description of the actual transaction.  This could be
        who the check was written to or why the check was written (e.g.
        Safeway).

    5.  Next, enter the Debit account number.  If you are unsure about the
        account number, press the <F2> key for a pop-up chart of accounts.
        In this example we debited account 5460 (Food).

    6.  Now enter the amount of this transaction.  In this case we want to
        debit account 5460 (Food) so we would enter the amount in the
        debit column and press "Enter". If we wanted to credit account
        5460 we could have entered the amount in the credit field by
        pressing "Enter" to skip the debit amount field.

    7.  You will now be on the second line of the transaction.  Enter a
        check number for the second part of the transaction (default is
        the check number entered in part one).

    8.  Enter the description for part two of this transaction.  Again,
        the description default is as entered in part one.

    9.  As we entered the debit account number in part one we now should
        enter the account number to be credited in the part 2 account
        field. If you are unsure about the account number, press the <F2>
        key for a pop-up chart of accounts. In the above example we
        entered account 200.

    10. Last, enter the amount to credit to account 200.  In most cases
        this is the same amount entered in the debit amount above.  In


                                      Page 53


                                   CHEQUE-IT-OUT


        fact the default for the credit amount will be the amount entered
        in the debit amount.

        You now must skip over to the credit amount field (press "Enter"),
        and enter the amount (e.g. 57.74).


    11. When the last credit/debit amount is entered, press "ENTER" and an
        "Are Inputs Correct" prompt will appear with a "Y" default.  Press
        "ENTER" to save all entries and you will be back at the first
        input field to enter another transaction.  If you do not need to
        enter more transactions, you may ESC to the Transaction Menu.

    When entering your debits and credits, it doesn't matter which order
    you enter the accounts, just be sure to debit or credit the correct
    account number.  If you need multiple debits or credits in one
    transaction, refer to the section that follows, "Entering Multiple
    Debit and Credit Transactions".


    8c - ENTERING MULTIPLE DEBIT AND CREDIT TRANSACTIONS

    Most transactions have only one debit and one credit.  However, there
    are some instances when there are several credits and/or debits for a
    single transaction.  'CHEQUE-IT-OUT' allows you to make multiple
    credit and/or debit entries.  It will allow up to 26 transaction parts
    in each transaction.

    Multiple debit or credit transactions are entered just like any other
    transaction, except the initial debit and credit amounts are
    different.  Follow the example outlined below to record a multiple
    debit/credit account:

    You wrote a check totaling $253.00 for your car payment, $107.00 went
    to loan principle and $146.00 went to finance charges.  You decide to
    enter this transaction in separate accounts, so you would debit both
    your "Auto Loan" [Liability] and "Finance Charge" [Expense] accounts.

    1.  First, follow steps 1 - 10 in the above section "Entering Other
        Transactions". Enter your first two parts of this transaction
        (Debit your loan principle account for $107 and credit your
        checking account for $253.


    2.  After entering your credit amount of $253 a message will appear
        which says  "Transaction is OUT OF BALANCE , continue: [N]", press
        "Y" to continue.

    3.  At this point your transaction entry will scroll and you will see
        a new (part 3) blank entry line.  As above enter the check number
        and description.

    4.  Now select the account to debit to finish the transaction.  In
        this example select the Finance charge expense account and press
        "Enter".

    5.  Lastly, enter the $146 to make the transaction balance in the
        debit amount field.


                                      Page 54


                                   CHEQUE-IT-OUT



    6.  A new input line (part 3) will appear displaying the last entry
        made on line 1.  On line 2, enter the second account number to
        debit/credit, and the final total of the transaction will appear
        in the "Amount" field.  Press "ENTER" or <F10> to accept that
        amount and   You have now made a multiple debit transaction.

    7.  In this example, you would now be in balance (total debit amounts
        = total credit amounts). Answer "Y" to the "Are inputs correct"
        prompt.

    If you are recording more than two debits or credits, repeat steps 3
    through 5 until you have entered all transaction parts and are in
    balance.

    8d - MODIFYING/DELETING TRANSACTIONS

    If you discover that a transaction was entered wrong or should not
    have been entered at all,  'CHEQUE-IT-OUT' allows you to go back to
    correct or delete the incorrect entry.  Follow the steps below to
    modify or delete a previously entered transaction:

    1.  From the Transaction Menu, select "Modify/Delete Transactions".
        The following screen will appear:

    |-------------------- TRANSACTION SEARCH PARAMETERS --------------------|
    | Month:__ Day:__ Year __                                               |
    |  Check           Description           Acct      Debit       Credit   |
    | ------- ----------------------------- ------  ----------- ----------- |
    | _______ _____________________________ ______  ___________ ___________ |
    |                                                                       |
    |-----------------------------------------------------------------------|

    2.  At this point, the system prompts you for transaction search
        parameters.  Enter appropriate search data (e.g. description). It
        is not necessary to make an entry in every field.  You can simply
        enter one description of the transaction and 'CHEQUE-IT-OUT' will
        search for any transactions with that description (i.e. Check #6,
        or "Food").  If you remember the check number, enter it in the
        "Check" field and press the <F10> key to initiate the search (you
        may also enter the date of the transaction to display all
        transactions entered on that date).  A "Search Match" screen will
        then appear displaying the transaction.  The bottom of the window
        will display:

              "Modify/Delete/Search/Reverse/Begin/End/+/-/Quit:S"

        At this point, select M, D, S, R, B, E, +, -, or Q.

        M = Modify/change transaction shown
        D = delete transaction shown
        S = Find the next transaction which matches search
        R = Find prior transaction which matches search
        B = Go to first transaction in file
        E = Go to last transaction in file
        + = Go to next consecutive transaction
        - = Go to prior consecutive transaction
        Q = Quit transaction search


                                      Page 55


                                   CHEQUE-IT-OUT



    3.  As long as you continue to answer the above prompt with "S"
        (default), 'CHEQUE-IT-OUT' will search for all transactions
        containing the values you have specified.  "R" does the same thing
        as "S" except it searches in reverse order.

    4.  TO MODIFY A TRANSACTION: Press "M" (Modify) and you will be in the
        change mode.  Type in the correct information in the appropriate
        field or press "ENTER" to leave a field unchanged.  Use the "up"
        arrow key to go to a previous field.  You MUST make sure that your
        new cumulative credits equal your cumulative debits.  Your change
        will not be accepted if it causes the transaction to be out of
        balance.  Pressing "ESC", will ignore your changes and take you
        back to a new parameter search.  The <F10> key will save inputs
        and record your changed transaction.

    5.  TO DELETE A TRANSACTION: Press "D" (Delete).  All parts of the
        transaction will be deleted.  To delete this transaction, answer
        the "Transaction has 2 parts, Delete OK? [N]" prompt with "Y".
        The transaction is now deleted, press "ESC" to go to a new
        parameter search.  Press "ESC" again to return to the Transaction
        Menu.

        NOTE: If you are deleting a multiple part transaction, the "DELETE
              OK?" prompt will display how many parts are in that
              transaction.  Most transactions will have only 2 parts.

     8e - CREATING RECURRING ENTRIES

    Recurring Entries are designed for those who have consistent deposits
    or payments on a weekly (W), bi-weekly (B), semi-monthly (S) or
    monthly (M) basis.  To eliminate the process of re-entering a
    transaction, follow the steps below:


    1.  From the Transaction Menu select "Creating Recurring Entries".
        The following prompt will appear:

    |---------------------- ADD RECURRING TRANSACTION ----------------------|
    |Frequency(W,B,S,M):M                                                   |
    |Pt  Check           Description          Acct      Debit       Credit  |
    |-- ------- ---------------------------- ------  ----------- -----------|
    |1  _______ Rent________________________ 5400__  _____445.00 _______0.00|
    |2  _______ Rent________________________ 200___  _______0.00 _____445.00|
    |                                                ___________ ___________|
    |                            TRANSACTION TOTAL        445.00      445.00|
    |-----------------------------------------------------------------------|

    2.  The first prompt asks for the frequency.  Enter here, how often
        you would like this transaction to occur, weekly (W), bi-weekly
        (B), semi-monthly (S), or monthly (M).  The default is "M"
        (monthly), press "ENTER" to accept your selection.

    3.  The next field, Check Number, is usually left blank and filled in
        when the transaction is activated at a later date.

    4.  Next, enter the description of the transaction (i.e. car payment).



                                      Page 56


                                   CHEQUE-IT-OUT


    5.  Then enter the account number to debit or credit.  Remember, you
        will be entering both a debit and a credit part of this
        transaction.  One account must be credited, and one account
        debited.  See Section 8b - Entering Transactions for further
        information on entering transaction data.

    6.  When the transaction is complete, press <F10> to save all inputs
        and the "ESC" key to return to the Transaction Menu.

    You have now created a recurring entry, however, it will not be
    automatic show up until it is activated. See Section 8f - Activating
    Recurring Entries.


    8f - ACTIVATE RECURRING ENTRIES

    Once you have entered a recurring entry, it is not a live transaction
    until it is activated.  When activated, the system will generate a
    live transaction based on the information in the recurring entry. The
    steps below explain how to activate a recurring entry.

    1.  From the Transaction Menu, select "Activate Recurring Entries".
        The following prompt will appear:

                   |--------------------------------------|
                   | Select Activate Frequency(W,B,S,M):  |
                   |--------------------------------------|

    2.  Select the frequency of the recurring entries you would like to
        activate.

    3.  The screen will then display all of the entries with that
        frequency.  Under the transaction window the following prompt
        appears:

                          |-- Activate Recurring --|
                          | Activate/Next/Quit:    |
                          |------------------------|

    4.  When you find the entry you wish to activate, press "A"(activate).
        The screen will then display the complete entry.  You may now make
        needed changes to this transactions as described above in
        Modifying transactions.  When the transaction is correct, press
        <F10> and answer "Y" to the "Are inputs correct" prompt.  Your
        transaction is now activated.

        If there is more than one transaction with the same frequency,
        they will be displayed one at a time. To skip the activation of
        any particular entry press "N" (next) and the next entry (if any)
        will be displayed.


    8g - MODIFYING/DELETING RECURRING ENTRIES

    If you entered a recurring entry incorrectly, or no longer wish to
    have it, you may change or delete that entry at any time.  To
    change/delete a recurring entry, follow the steps below:



                                      Page 57


                                   CHEQUE-IT-OUT


    1.  Select "Modifying/Deleting Recurring Entries" at the Transaction
        Menu.  The following will appear on the screen:

    |--------------------- RECURRING SEARCH PARAMETERS ---------------------|
    | Frequency(W,B,S,M):_                                                  |
    |  Check           Description           Acct      Debit       Credit   |
    | ------- ----------------------------- ------  ----------- ----------- |
    | _______ _____________________________ ______  ___________ ___________ |
    |                                                                       |
    |-----------------------------------------------------------------------|

    2.  At this point, the system prompts you for transaction search
        parameters.  Enter appropriate search data (e.g. description). It
        is not necessary to make an entry in every field.  You can simply
        enter one description of the transaction and 'CHEQUE-IT-OUT' will
        search for all entries with that description.

    3.  For example, to search for a particular frequency, enter the
        frequency code for the recurring entry you wish to modify/delete.
        At this point, you may press the <F10> key to initiate a search of
        entries with the same frequency.  If you are unsure, you may skip
        this field simply just enter the description, account number, and/or
        the amount of the entry.  Press <F10> to initiate the search.

    4.  Once the search is complete, a "Search Match" screen will then appear
        displaying the recurring entry.  At the bottom of the window the
        following will appear:

                "Modify/Delete/Search/Reverse/Begin/End/+/-/Quit:S"

        At this point, select M, D, S, R, B, E, +, -, or Q.

        M = Modify/change transaction shown
        D = delete transaction shown
        S = Find the next transaction which matches search
        R = Find prior transaction which matches search
        B = Go to first transaction in file
        E = Go to last transaction in file
        + = Go to next consecutive transaction
        - = Go to prior consecutive transaction
        Q = Quit transaction search

    5.  As long as you continue to answer the above prompt with "S"
        (default), 'CHEQUE-IT-OUT' will search for all transactions
        containing the values you have specified.  "R" does the same thing
        as "S" except it searches in reverse.

    6.  TO MODIFY A RECURRING ENTRY: Press "M" (Modify) and you will be in
        the change mode.  Type in the correct information in the
        appropriate field or press "ENTER" to leave a field unchanged.
        Use the "up" arrow key to go to a previous field.  You MUST make
        sure that your new cumulative credits equal your cumulative
        debits.  Your change will not be accepted if it causes the entry
        to be out of balance.  Pressing "ESC", will ignore your changes
        and take you back to a new recurring search parameter.  The <F10>
        key will save your inputs and record your new entry.




                                      Page 58


                                   CHEQUE-IT-OUT


    7.  TO DELETE A RECURRING ENTRY:  Press "D" (Delete).  All parts of
        this entry will be deleted.  To delete this entry, answer the
        "Transaction has 2 parts, Delete OK? [N]" prompt with "Y".  The
        entry is now deleted.  Press "ESC" to return to the Transaction
        Menu.

        NOTE: If you are deleting a multiple part entry, the "DELETE OK?"
              prompt will display how many parts this particular transaction
              has.  Most recurring entries will have only 2 parts.



















































                                      Page 59


                                   CHEQUE-IT-OUT


                            SECTION NINE - REPORTS

    The 'CHEQUE-IT-OUT' Reports Menu allows you to generate a full
    spectrum of financial reports from your database.  Reports can be
    generated to show financial standing for a day, month, several months,
    a quarter, a year, etc.  This section will discuss how reports will
    get you optimum results from your 'CHEQUE-IT-OUT' program.

    9a - EXPLANATION OF REPORTS

    Each of the available 'CHEQUE-IT-OUT' reports are described below.
    Samples of these reports may be printed while using the SAMPLE
    accounts.

    TRANSACTION JOURNAL REPORT - This report is a listing of all
              transactions recorded in a given time period.

    RECURRING ENTRIES REPORT -  This report is a listing of all recurring
              entries.

    ACCOUNT HISTORY - This report traces the transaction activity for
              any given account number from the Chart of Accounts.  You
              can get a history for all of your accounts or a history for
              only one account.  This report is excellent for keeping
              track of your checking account activity, loan payments, and
              monitoring your loan balance.  It can also keep track of
              variations in monthly utility and phone bills.  Please keep
              in mind that the Account History Report can be rather long
              when several accounts are selected.

    INCOME STATEMENT - The Income Statement shows the total income and
              expenses for a given period of time.  It also shows your net
              income which is the total income less the total expenses.
              This report may either be a cumulative report for a specific
              period, or a trended, by month report.

    BALANCE SHEET - This report shows your financial position.  It gives
              you the balance of all asset, liability, and equity
              accounts.  The Balance Sheet may also be run as a cumulative
              or trended report.

    CHART OF ACCOUNTS - This is a report of your most current Chart of
              Accounts.  You should run this report after making any changes
              to the Chart of Accounts.

    BUDGET VARIANCE REPORT - This report shows the difference between the
              actual amounts and the budgeted amounts for both income and
              expenses.  When generated for more than one month, the
              Budget Variance Report shows only cumulative amounts with
              one variance for that amount.

    BUDGET LISTING - This is a listing of all accounts that have been
              assigned budget amounts.  The account is listed, followed
              by the budget amount for that account.






                                      Page 60


                                   CHEQUE-IT-OUT


    9b - GENERAL INSTRUCTIONS FOR GENERATING REPORTS

    When using 'CHEQUE-IT-OUT' to generate reports, you have three
    options.  1. You may list reports to the screen (S), 2. you may print
    a hard copy on your printer (P), or 3. you may send your reports to a
    disk file (D).

    The destination prompt is an option for each of the reports.  It appears
    as follows:

                        Screen, Printer, Disk(S,P,D):_

    If you select "D" (disk), the system will prompt you for a disk
    filename.  You may enter a name up to eight characters long.  This
    file will be saved on your data disk with the file extension of
    ".RPT".  If you enter a filename that already exists, the system will
    ask if you want to delete the old file.  Answering "NO" will append
    the report to the already existing file.

    For most reports, you also need to specify a date range. The date
    prompt appears as follows:

                            Starting Date:08-01-89
                              Ending Date:08-31-89

    These dates determine which days, months and years will show on your
    reports.  The ending date must be within one year of the starting
    date (i.e. maximum date range of 01-01-89 through 12-31-89). To get a
    year-to-date report, you might select the dates 01-01-89 through 12-
    31-89. If you would like a quarterly report, you could select 01-01-89
    through 03-31-89.

    When entering prompts for reports, you can back up to a previous field
    via the "up" arrow key.  Below are examples of the different report
    options:

    1.  The Chart of Accounts and the Budget Listing Reports options are
        as follows:

                      |-------- Chart of Accounts ----------|
                      |                                     |
                      | Screen,Printer,Disk(S,P,D):S        |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |-------------------------------------|

        Enter the destination as described above.

    2.  The General Journal and Budget Variance Reports options are as
        follows:


                                      Page 61


                                   CHEQUE-IT-OUT



                      |--------- Budget Variance -----------|
                      |                                     |
                      | Screen,Printer,Disk(S,P,D):S        |
                      |                                     |
                      |                                     |
                      | Starting Date:08-01-89              |
                      |   Ending Date:08-31-89              |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |                                     |
                      |-------------------------------------|

        Enter the destination and date range as described above.

    3.  The Account History Report options are as follows:


                      |--------- Account History -----------|
                      |                                     |
                      | Screen,Printer,Disk(S,P,D):S        |
                      |                                     |
                      |                                     |
                      | Starting Date:08-01-89              |
                      |   Ending Date:08-31-89              |
                      |                                     |
                      | Accounts on separate pages:Y        |
                      |                                     |
                      | Account Starting:1000__             |
                      |           Ending:5000__             |
                      |                                     |
                      |-------------------------------------|

        Enter the destination prompt and date range as described above.
        Then, if you would like each account listed on a separate page,
        answer "Y" at the "Accounts on separate pages" prompt.  If not,
        simply answer "N" and more than one account will be printed on a
        page in order to conserve paper.

        Next, enter the account number range you would like printed on
        this report.  If you are only printing one account, enter that
        account number at both of the account prompts.


    4.  The Income Statement and Balance Sheet Reports options are as
        follows:











                                      Page 62


                                   CHEQUE-IT-OUT


                      |---------- Balance Sheet ------------|
                      |                                     |
                      | Screen,Printer,Disk(S,P,D):S        |
                      |                                     |
                      |                                     |
                      | Starting Date:08-01-89              |
                      |   Ending Date:08-31-89              |
                      |                                     |
                      |                                     |
                      |                                     |
                      | Trended Report:N                    |
                      |                                     |
                      |                                     |
                      |-------------------------------------|


        Enter the destination and date range as described above.  Next,
        answer the trended report prompt.  Answering "Y" to "Trended
        Report" will give you a spreadsheet type report with each month
        shown in a separate column.  Answering "N" will give you a
        cumulative total of the months you have chosen in one column.

    5.  The Recurring Transactions Report options are as follows:


                    |------ Recurring Transactions -------|
                    |                                     |
                    | Screen,Printer,Disk(S,P,D):S        |
                    |                                     |
                    |                                     |
                    |                                     |
                    |                                     |
                    |                                     |
                    |                                     |
                    | Recurring Frequency(A,M,S,B,W):A    |
                    |                                     |
                    |                                     |
                    |                                     |
                    |-------------------------------------|

        Enter the destination prompt as described above.  Then enter the
        recurring frequency code you wish to have a report of.  The
        frequency code default is "A", which will give you a report of all
        recurring entries.

    NOTE: If the screen already displays the correct information for your
          report, you can simply press <F10> to initiate the report.  If
          you do not have a printer and try to print a report to the
          printer, you will get an error message.

    If you are unfamiliar with financial reports, try as many reports as you
    like, using the SAMPLE accounts.  Doing so will give you an idea of how
    the reports look and how they might be used.







                                      Page 63


                                   CHEQUE-IT-OUT


                           SECTION TEN - UTILITIES

    The Utilities menu contains important menu items such as; Sorting
    transactions, Exporting Files, Check format settings, and utility that
    automatically closes your books at the end of the year.  From the
    'CHEQUE-IT-OUT' master menu select the Utility sub-menu and the
    following screen will appear:

                       |------ Utility Menu ------|
                       | Leave Utilities Menu     |
                       | Sort Transactions        |
                       | Import Transaction File  |
                       | Check Writing Settings   |
                       |--------------------------|

    10a - SORT TRANSACTIONS:

    'CHEQUE-IT-OUT' normally keeps your transactions and checks organized
    in the order in which they are input.  The Sort function allows the
    user to choose the manner in which you want your transactions and checks
    organized (sorted). You also may sort as often or as little as you
    want, as the sort order does not affect the operation of 'CHEQUE-IT-
    OUT'. If you have removed (deleted) some transactions, sorting your
    datafile will free disk space which was previously occupied by the
    now deleted transactions.  The sort function is also very useful
    when reconciling your accounts as you can sort transactions in date or
    check number order.

    1.   To start sorting select the Sort Transactions from the Utility
         Menu and the following screen will appear:

                      |----- Select Sort Order ------|
                      | Leave Sort Transactions Menu |
                      | Input Order                  |
                      | Date Order                   |
                      | Check Number Order           |
                      |------------------------------|

         Select the order in which you would like to sort your
         transactions, by moving the highlighted cursor or mouse to the
         appropriate item and pressing the "ENTER" key. If you have a
         mouse press the left button from the appropriate menu selection.

         'CHEQUE-IT-OUT' will then sort your transactions in the order you
         have selected.

    10b - IMPORT TRANSACTION FILE

    This is an advanced feature and is primarily used by experienced DOS
    users.  It allows you to IMPORT ASCII text files into your 'CHEQUE-IT-
    OUT' transaction file.

    To import transactions into 'CHEQUE-IT-OUT', you must create an ASCII
    fixed length file (one record per line).  The format of this record
    layout is as follows:





                                      Page 64


                                   CHEQUE-IT-OUT


              FIELDNAME       STARTING    LENGTH       MASK
              ---------       --------    ------       ----
              DATE                 1         8          User defined in
                                                        the configuration
              DESCRIPTION          9        30          TEXT
              CHECK               39         7          TEXT
              ACCOUNT             46         6          1-999999
              DEBIT/CREDIT TYPE   52         1          "D", "C"
              AMOUNT              53        11          ########.##
              CLEARED             64         1          "Y", "*", " "

    When importing transactions all records are error checked to be sure
    the transaction meets the mask edits before accepting the transaction.
    If a transaction does not meet the mask specifications that specific
    transaction will not be imported.

    Select "Import Transaction File" from the Utility menu, and the
    following prompt will appear.

                   |-------- IMPORT TRANSACTIONS ---------|
                   |                                      |
                   |    Import File Name:________.TXT     |
                   |                                      |
                   |                                      |
                   |                                      |
                   |                                      |
                   |--------------------------------------|

    Enter the datafile name you wish to import.  The import file must be
    on the same disk and directory as the database you are currently
    using.  When the import is complete, you will then be back at the
    Utility menu.


    10c - CHECK WRITING SETTINGS

    The Check Writing Settings allow you to set-up important printing
    positions for the check printing function of 'CHEQUE-IT-OUT'.  If you
    are not going to print checks, you may skip this section.  'CHEQUE-IT-
    OUT' allows you to print on ANY checks regardless of layout.  You can
    even print checks on your current personal checks. Pre-printed checks
    can be purchased from our recommended forms supplier, Deluxe Computer
    forms (1-800-328-0304). 'CHEQUE-IT-OUT' also has a On-Line Order form
    for ordering checks from Deluxe.  The following checks are recommended
    and can be ordered from DELUXE. When ordering please reference this
    fast service number # TO9023.

         LaserJet Checks # 091193     Personal Checks # 091050
         Non-Stub Checks # 091065         Stub Checks # 091004


    Select the Check Writing Settings from the Utility Menu and the
    following screen will appear:







                                      Page 65


                                   CHEQUE-IT-OUT


      |-------------------- CHECK WRITING SETTINGS ---------------------|
      |                                                                 |
      | Last Check Number USED:1004___   Check Size, Length:17 Width:60 |
      |                                                                 |
      |                            ---- CHECK -----    ----- STUB ----- |
      | Check writing Position:    Row       Column    Row       Column |
      |   Check Number(7),          1_         47      0_          0_   |
      |   Check Date(8),            3_         40      0_          0_   |
      |   Pay to Name(30),          8_         8_      0_          0_   |
      |   Address(30),              9_         8_      0_          0_   |
      |   Check Amount(12),         5_         45      0_          0_   |
      |   Amt with words(55),       6_         3_      0_          0_   |
      |   Expense Description(30),  12         3_      0_          0_   |
      |                                                                 |
      | Check Init String:0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__   |
      | Check Exit String:0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__ 0__   |
      |-----------------------------------------------------------------|

    NOTE:  The Check Writing Settings must be set-up for each one of your
           datafiles if you will be printing checks. The above settings
           are for the personal size continuous form checks from Deluxe.

    The Check Writing positions are used to customize your check writing.
    By changing these positions you can virtually use any check with this
    software. Select the row and column printing position for each of this
    fields.  If you want to omit an item from printing on the check put a
    zero (0) in the row field. To move from one input field to the next
    press "ENTER".

    Recommended settings for each of the other pre-printed checks are as
    follows:

    Laserjet Checks:   Check Size, Length:60 Width:85

                                  ---- CHECK -----    ----- STUB -----
       Check writing Position:    Row       Column    Row       Column
         Check Number(7),          1_         68      22          68
         Check Date(8),            8_         50      29          50
         Pay to Name(30),          8_         9_      29          9_
         Address(30),              9_         9_      30          9_
         Check Amount(12),         8_         66      29          66
         Amt with words(55),       6_         7_      27          7_
         Expense Description(30),  15         4_      36          4_


    No-Stub Checks:    Check Size, Length:21 Width:85

                                  ---- CHECK -----    ----- STUB -----
       Check writing Position:    Row       Column    Row       Column
         Check Number(7),          1_         68      0_          0_
         Check Date(8),            6_         53      0_          0_
         Pay to Name(30),          12         8_      0_          0_
         Address(30),              13         8_      0_          0_
         Check Amount(12),         6_         67      0_          0_
         Amt with words(55),       8_         7_      0_          0_
         Expense Description(30),  16         5_      0_          0_




                                      Page 66


                                   CHEQUE-IT-OUT


    Stub Checks:       Check Size, Length:42 Width:85

                                  ---- CHECK -----    ----- STUB -----
       Check writing Position:    Row       Column    Row       Column
         Check Number(7),          1_         68      22          68
         Check Date(8),            9_         52      30          52
         Pay to Name(30),          9_         10      30          10
         Address(30),              9_         10      30          10
         Check Amount(12),         9_         67      30          67
         Amt with words(55),       7_         9_      28          10
         Expense Description(30),  16         5_      37          5_


    NOTE:  ROW indicates the starting line from the top of the check (i.e.
           rows are down).

           COLUMN is the starting vertical position from the left side of
           the check (i.e. columns are across).

    Last Check Number USED: Enter here your last check number written.
           Valid numbers are 1 - 999999.

    Check Size, Length:60,  Width:17:.  These are the total numbers of
           rows and columns available on a personal check.  Usually a
           personal check with no stub is 6"x10="60" in width and
           2.83"x6="17" in length.

    CHECK NUMBER: Location of your check number on the check. If you have
           pre-numbered checks enter here "0".  This field is seven
           characters long.

    CHECK DATE: Location of the date on your check. This field is
           eight characters long.

    PAY TO NAME: Location of the name,  who this check is payable to.
           This field is thirty characters long.

    ADDRESS: Location of the three line address on your check. The address
           field is optional (if you do not want the address printed enter
           "0" here). The address itself is entered at the time you enter
           your check.  Each line can be up to thirty characters long.

    CHECK AMOUNT: Location of the decimal amount on your check
           (i.e. 500.00). This amount is twelve characters long.

    AMOUNT WITH WORDS: Location of the amount in words on your check (i.e.
           ****FIVE HUNDRED and NO/100). This line is 55
           characters long.

    EXPENSE DESCRIPTION: Location of the Expense account name.  This field
           is thirty characters long.

    The inputs for the fields below are the escape sequences which change
    your printer modes (see your printer manual for proper codes) when
    printing checks. All inputs are numbers from 0 to 255. If you do not
    know the codes to use for your printer, simply set all fields to zero.




                                      Page 67


                                   CHEQUE-IT-OUT


    CHECK INIT STRING: The initialization codes allows you to send a
    special setup string to the printer before printing checks.  It may,
    for example, be used to turn off your out-of-paper sensor and setting
    a half-line advance when you are using your personal checks in your
    printer.

    CHECK EXIT STRING: This is an optional field to reset your printer
    after printing checks.

    Once you have answered the above questions press the "F10" function
    key to save your new Check Writing Settings.

















































                                      Page 68


                                   CHEQUE-IT-OUT


                        SECTION ELEVEN - USER SUPPORT


    CHEQUE-IT-OUT IS USER-SUPPORTED (Shareware) SOFTWARE!  If you are
    using this software, and find it to be of value to you, your payment
    is necessary and appreciated.  The $49.95 purchase price is a true
    bargain.  Please send your payment to:

                           HOOPER INTERNATIONAL, INC.
                                P.O. Box 50200
                          Colorado Springs, CO  80949
                                (719) 528-8989

                              24 HOUR ORDER LINE
                                1-800-245-7789

    As a user of CHEQUE-IT-OUT, we invite you to share with your friends,
    and other users, by making a copy of the shareware version of this
    program.  For payment, we continue to employ the honor system, which
    has worked for us and for you, our user.  In the long run, the $49.95
    suggested price is incidental when compared to the many benefits and
    time-saving factors derived from using this superb program.  We invite
    you to use, share, and enjoy!


    THE USER-SUPPORTED CONCEPT

    User-supported software (also referred to as Shareware) is an
    experiment in the distribution of computer programs.  It is based on
    the following beliefs:

    - The value and utility of software is best assessed by the user on
      his or her own system.

    - The creation of personal computer software can and should be
      supported by the computing community.

    - The copying of programs should be encouraged, rather than
      restricted.

    - Quality software should be available at reasonable cost.

    Anyone may request a copy of a user-supported program by sending a
    blank, formatted disk to the author of the program.  An addressed,
    postage-paid return mailer must accompany the disk.  A copy of the
    program, with documentation on the disk, is then sent by return mail.
    The program carries a notice suggesting a payment of the registration
    fee to the program's author.

    Free distribution of software, and voluntary payment for its use,
    eliminates costs for advertising and copy-protection schemes.  Users
    obtain quality software at reduced cost.  They have the advantage of
    trying the software before buying, and they can do so at their own
    pace and in the comfort of their own home or office.  We all know the
    best programs survive, based purely on their quality and usefulness.

    Please join in the experiment.  If you believe in these ideals, and
    use the program, your payment is necessary and solicited to help make


                                      Page 69


                                   CHEQUE-IT-OUT


    the experiment viable and workable.


    IF YOU HAVE COMMENTS, SUGGESTIONS, OR QUESTIONS .  .  .

    It is our express goal to provide you with the highest-quality,
    easiest-to-use programs at the lowest price.

    The best way to receive help with your questions, or response to your
    suggestions, is to call or send a letter to us.  Or simply use the
    User Comment Form on the last page of this manual.  Be sure to
    carefully detail the problem and all symptoms (perhaps providing a
    printout as an example, if applicable).  Please include a stamped,
    self-addressed return envelope.  We will respond to all such
    questions, as soon as possible.

    Before writing or calling, however, we encourage you to please read
    over the documentation one more time, looking for an answer to your
    questions or a solution to your problem.

    If you are a REGISTERED USER you may call us at (719) 528-8989 for
    instant help with your problem or question.  We do not charge for
    customer support like others.

    If you are NOT a REGISTERED USER (not having paid for your copy of the
    program), we may not be able to answer your questions specifically.
    The honor system must prove to be a viable method of distributing this
    program, and registering it in your name, in order for us to answer
    your questions about its use or specific applications of your needs.
    We're sure you understand that our time is a limited resource, and
    that it is only fair to spend it on our registered paid-in-full users.
    As you know, that's the way the system works!

    If you have any comments or suggestions regarding CHEQUE-IT-OUT,
    please let us know.  We appreciate all comments and, in future
    versions of CHEQUE-IT-OUT, we will certainly implement the suggestions
    that are advantageous to other users as well.


    WHY SHOULD I PAY?

    You are trusted to use this copy of CHEQUE-IT-OUT for evaluation
    purposes only, until the requested payment is made.  Some of the
    obvious reasons for sending in your payment are listed below:

    - When we receive your payment, we will send you a FREE COPY of our
      latest version of CHEQUE-IT-OUT.  This is the version with the
      newest features and enhancements.  Please note: NEW FEATURES ARE
      BEING ADDED REGULARLY TO THIS PROGRAM.

    - You will recieve a complete 96 page printed and bound manual.

    - Unlimited FREE technical support for one year.  Support is available
      by phone, Fax, or mail.

    - You will receive FREE additional software to go with your
      CHEQUE-IT-OUT software.  This includes: Graphics, Account
      Reconciliation software, datafile export capability, automatic


                                      Page 70


                                   CHEQUE-IT-OUT


      updating of beginning balances at the beginning of each year, etc..

    - You will receive our quarterly newsletter which provides hints on
      using CHEQUE-IT-OUT as well as keeps you abreast of new enhancements
      which become available.

    - We will add your name to our list of registered users.  As each new
      version comes out, you will automatically receive a mailing which
      gives you the option of buying the new version for a very nominal
      upgrade fee.

    - You will also receive a FREE CONVERSION PROGRAM (if necessary) to
      convert your existing CHEQUE-IT-OUT data files into the latest
      format without re-entering any of your data.

    - You will feel better about using CHEQUE-IT-OUT if you know you are a
      paid-in-full registered user.

    - Last, but not least, you will receive priority treatment if you call
      or write to us with problems or questions.


    UPGRADE POLICY

    As more fully outlined above, when you send in your payment with the
    version number of your copy, we will send you a registered copy of the
    latest version of CHEQUE-IT-OUT.  You will then be automatically
    notified of all future releases.  These will be available to you for a
    nominal upgrade fee (usually under $10).































                                      Page 71


                                   CHEQUE-IT-OUT


                       SECTION TWELVE - DISK FILE NAMES

    PROGRAM DISK

    File Name      Description
    ------------   ------------------------------------------------------
    CHEQUE   EXE - Main Program executable file.
    CHEQUE   OVR - Program Overlay File.
    CHEQUE   HLP - Context-sensitive help file.
    ORDER    DOC - Blank order form which can be printed.
    SAMPLE   GLA - Sample - Chart of Accounts data file.
    SAMPLE   GLT - Sample - Transaction data file.
    SAMPLE   GLR - Sample - Recurring Transaction data file.
    SAMPLE   CKF - Sample - Reconciliation data file.
    CONFIG   SYS - Needed to run 'CHEQUE-IT-OUT' (See your DOS manual)
    README   BAT - Displays this file on screen


    DOCUMENTATION DISK

    File Name      Description
    ------------   -------------------------------------------------------
    CHEQUE   DOC - Documentation Manual.
    PRINTDOC BAT - Batch file which prints documentation on printer.
    README   BAT - Displays this file on screen
    ORDER    DOC - Blank order form which can be printed.


































                                      Page 72


                                   CHEQUE-IT-OUT


     -----------------------------------------------------------------------
     |                         O R D E R   F O R M                         |
     |                                                                     |
     | MAIL: Hooper International, Inc.    24 Hr ORDER LINE:1-800-245-7789 |
     |  TO   P.O. Box 50200                  24 Hr FAX line:(719) 528-8997 |
     |       Colorado Springs, CO 80949        Tech Support:(719) 528-8989 |
     |       U.S.A.                                                        |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:_______________________________  Signature:___________________ |
     |                                                                     |
     | Company:________________________________________                    |
     |                                                                     |
     | Address:_______________________________  Disk Size,5 1/4, 3 1/2:___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:_________________________  Phone:(____)____________________ |
     |                                                                     |
     | Registration number on disk you were using:________________________ |
     |                                                                     |
     | How did you hear about this software:______________________________ |
     |---------------------------------------------------------------------|
     | ITEMS ORDERED                              |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     |  CHEQUE-IT-OUT - Personal Accounting       | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |                                            |   |          |         |
     | INTEGRATED ACCOUNTING SYSTEM FOR BUSINESS: |   |          |         |
     | FINANCE MANAGER II - General Ledger        | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |                    - Account Reconciliation| _ |  $14.95  | $       |
     |                                            |   |          |         |
     |                    - Financial Utilities   | _ |  $24.95  | $       |
     |                                            |   |          |         |
     |                    - Accounts Receivable   | _ |  $39.95  | $       |
     |                                            |   |          |         |
     |                    - Accounts Payable      | _ |  $39.95  | $       |
     |                                            |   |          |         |
     |                    - Payroll               | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge (Shipped UPS Blue in USA)   |    5.00 |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change                                  |         |
     | All amounts in US currency             GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------

                                      Page 73
```
{% endraw %}

## FILE1560.TXT

{% raw %}
```
Disk No: 1560                                                           
Disk Title: Cheque-It-Out 2 of 2 (also 1559)                            
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Cheque-It-Out                                            
Author Version: 1.1                                                     
Author Registration: $39.95                                             
Special Requirements: 448K RAM, one (1) high density floppy, or two (2) 
                                                                        
Quicker than "Quicken," more intuitive than "Intuit," CHEQUE-IT-OUT is  
the choice for anyone who wants to do more than just balance their      
checkbook.  Here at last is a complete personal bookkeeping system      
that doesn't expect you to be an accountant to use it.  Nor does it     
treat you like a child in its well thought out explanations of how to   
keep track of your finances, balance the books and generate impressive  
statements of net worth, profit and loss, etc., -- guaranteed to        
impress your banker or accountant.                                      
                                                                        
The double-entry financial system creates financial reports, and        
tracks income and expenses, assets, liabilities and budgets.  It        
prints checks, both standard pin-fed and individual personal checks.    
Easy-to-follow menus and context-sensitive pop-up help screens guide    
you along, and the optional sound effects actually make doing your      
books fun!  More importantly, this is a program that puts you back in   
charge of your own finances -- teaching you what you need to know to    
manage your money yourself!                                             
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ORDER.DOC

{% raw %}
```


     -----------------------------------------------------------------------
     |                         O R D E R   F O R M                         |
     |                                                                     |
     | MAIL: Hooper International, Inc.    24 Hr ORDER LINE:1-800-245-7789 |
     |  TO   P.O. Box 50200                  24 Hr FAX line:(719) 528-8997 |
     |       Colorado Springs, CO 80949        Tech Support:(719) 528-8989 |
     |       U.S.A.                                                        |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:_______________________________  Signature:___________________ |
     |                                                                     |
     | Company:________________________________________                    |
     |                                                                     |
     | Address:_______________________________  Disk Size,5 1/4, 3 1/2:___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:_________________________  Phone:(____)____________________ |
     |                                                                     |
     | Registration number on disk you were using:________________________ |
     |                                                                     |
     | How did you hear about this software:______________________________ |
     |---------------------------------------------------------------------|
     | ITEMS ORDERED                              |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     | INTEGRATED ACCOUNTING SYSTEM FOR BUSINESS: |   |          |         |
     | FINANCE MANAGER II - General Ledger        | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |                    - Account Reconciliation| _ |  $14.95  | $       |
     |                                            |   |          |         |
     |                    - Financial Utilities   | _ |  $24.95  | $       |
     |                                            |   |          |         |
     |                    - Accounts Receivable   | _ |  $39.95  | $       |
     |                                            |   |          |         |
     |                    - Accounts Payable      | _ |  $39.95  | $       |
     |                                            |   |          |         |
     |                    - Payroll               | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |  CHEQUE-IT-OUT - Personal Accounting       | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |                                            |   |          |         |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge (Shipped UPS Blue in USA)   |    5.00 |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change                                  |         |
     | All amounts in US currency             GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1560

     Volume in drive A has no label
     Directory of A:\

    CIO      DOC    182917   2-01-90   1:10a
    FILE1560 TXT      2443   3-22-90   5:47p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       617  10-18-89  10:43a
    INSTALL  EXE     22800   2-01-90   1:10a
    ORDER    DOC      4692   2-01-90   1:10a
    PRINTDOC BAT       438   2-01-90   1:10a
    README   BAT      1201   2-01-90   1:10a
    SAMPLE   CKF       108   2-01-90   1:10a
    SAMPLE   GLA      8844   2-01-90   1:10a
    SAMPLE   GLF       132   2-01-90   4:36p
    SAMPLE   GLR        69   2-01-90   1:10a
    SAMPLE   GLT      8970   2-01-90   1:10a
           13 file(s)     233269 bytes
                           80896 bytes free
