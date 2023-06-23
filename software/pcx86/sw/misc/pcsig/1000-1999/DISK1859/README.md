---
layout: page
title: "PC-SIG Diskette Library (Disk #1859)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1859/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1859"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GARTHS SHAREWARE UTILITIES"

    GARTH'S SHAREWARE UTILITIES is a collection of utilities for copying
    disks, printing, and listing directories.
    
    COPYDISK is a multiple 360K disk copying program that makes several disk
    copies after reading the source disk only once.  If there are two floppy
    drives, you have the option to alternate between the two for writing
    onto the copy disks.
    
    D is a utility that allows you to change directories without having to
    look for the "\" key.
    
    DDIR is a date directory utility that lists files of a particular date,
    before a date, after a date, or in a particular date range.  Change the
    dates and times of specified files.  DDIR automatically searches every
    directory and can also be used as an ordinary file finder without the
    date options.
    
    PRINTER sends printer codes to the printer for changing the line spacing
    and the printing style.  The codes can be written to a file, which may
    be later used to set up the printer without the use of the program.
    
    DIRLABEL prints out a disk's entire directory in a small compact form.
    The program allows you to specify the drive, the printer port, the size
    of paper or label to be used, and the top and ending spaces for each
    label.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BUDGET.DOC

{% raw %}
```

                -----------------------------------------------
                |                                             |
                |                Turbo Budgeter               |
                |             (C) Copyright, 1990             |
                |             All Rights Reserved             |
                |              Garth Braithwaite              |
                |                                             |
                -----------------------------------------------



     P R E F A C E
     _____________________________________________________________________

     This file contains an introduction to and a description of the Turbo
     Budgeting program.  This file also contains a listing of the files
     that contain documentation and what sections are covered in those
     files.  At the very end of this file are the programs hardware
     requirements, how to install, disclaimers, problems, correspondence
     registration and the referral program.



     I  N  T  R  O  D  U  C  T  I  O  N
     _____________________________________________________________________

     Turbo Budgeter is a simple, fast, easy to learn, easy to use, flexible
     home budgeting program.  This purpose of this program is to help you
     get a handle on managing your checking accounts faster and easier.
     This program was designed after the simple checkbook register but it
     goes far beyond the usefulness of a check register.  Every transaction
     (withdrawal or deposit) is recorded to a category and can be tagged
     with special attributes (or flags).  This makes it possible for you
     to see at any time during the year where you stand with your spending
     and income verses what you budgeted for.  How much do you spend on
     food each month?  How much have you given in tax deductible donations?
     Car payments, house payments, electricity, gasoline, entertainment?
     Without Turbo Budgeter you either guess at where you spent all your
     money, or you spend long hours with a pencil, paper and calculator.
     With Turbo Budgeter you can find out this and much more in just a few
     seconds.  Entering checks and deposits is fast and enjoyable. Recurring
     entries can be entered with as little as two keystrokes.  Pre-defined
     reports can be printed that give you monthly or year-to-date totals
     for any or all categories or accounts.  The user can quickly view
     all transactions that have not yet cleared the bank, checks or
     deposits that deal with a certain account or budget category, or all
     checks made out to certain payees.  Many of the figures that go on
     your tax return are at your finger tips.

     Never again will you cringe at the thought of having to balance your
     checkbook.  This program will bring order into your financial life.
     Knowing where you are spending your money makes it much easier to
     plan for the future.  Turbo Budgeter handles the simple task of
     transaction tracking and budgeting, and it does it faster and easier
     than anything else.



     F E A T U R E S
     _____________________________________________________________________

     Some of the major advantages that this program offers are:  a easy
     to use, intuitive pulldown/popup window user interface, fast data
     entry with maximum editing capability, simple to install and configure,
     runs great on minimum hardware (like a 4.77mghz PC with 256K and a
     single floppy).  Turbo Budgeter also offers easy account reconciling,
     flexible viewing, flexible listings and most important, flexible,
     effective reports.  Listed below is an itemized list of some of the
     other major features of Turbo Budgeter.


     M A J O R   F E A T U R E S__________________________________________

     - FAST AND MINIMAL TIME REQUIRED FOR DATA ENTRY.  To enter in, and
       clear a hundered transactions it usually takes about an hour.
     - AN INTUITIVE AND EASY-TO-LEARN POPUP/PULLDOWN WINDOW DRIVEN,
       USER INTERFACE.
     - CONTINUAL HELP LINE on the bottom of the screen that guides
       the user through each step.
     - MAXIMUM "ON SCREEN" INFORMATION.
       - Program constantly DISPLAYS THE LATEST 17 ENTRIES that were
         worked with.
       - Account balance is constantly displayed.
       - Accounts cleared balance is constantly shown when clearing entries.
       - Category information, Account information, Split information and
         Transaction information are all displayed when viewing transactions.
       - Transaction Amounts are highlighted if the entry has not yet
         cleared the bank, deposited amounts are shown in green and with-
         drawals are shown in red.  The account balance is shown in RED if
         the amount is less than 0.
     - USER DEFINED AUTOMATIC DEFAULT VALUES for entries.
     - FULL EDITING CONTROL when entering/editing fields.  Move left/right,
       jump word left/right, delete character, delete word, delete to end
       of line, insert, typeover, cut and paste blocks, undo etc.
     - CUT AND PASTE data feature between data fields.  You can cut and
       paste numbers from the calculator into a number field or into any
       other field as you see fit.
     - SINGLE STEP BACK UP/UNDO completly back out of any procedure or
       accept and entry without ever having to step all the way through it.
     - SPLITTING OF ONE TRANSACTION INTO AN UNLIMITED NUMBER OF CATEGORIES.
       Entries can be split into as many categories as needed - until all
       of the total amount is accounted for.
     - FAST AND EASY RECONCILIATION.  The entries are cleared either by
       pointing to the entry or by typing in the transaction number.  The
       date the transaction was cleared can also be entered in at this
       time( then if you sort your entries by the cleared date it will
       match the order of your bank statment line for line).  When clear-
       ing, the program shows you the banks cleared balance as you clear
       the entry off.  This lets you check each entry with your bank stat-
       ment to see if your transactions match the bank.
     - FAST NUMBER CALCULATIONS.  Most accounting is done on the fly
       so that a total recalculation is hardly ever done and when it
       is done it takes only a few seconds even on an PC with thousands
       of entries.
     - SIMPLE AMOUNT TRACKING (no double entry accounting).
     - FLEXIBLE TRANSACTION VIEWING.  You can view all of your entries
       in any order from any/all accounts or any/all budget categories.
       When are viewing transactions the transactions category and account
       windows will also be opened and that information displayed.
     - FAST AND USER DEFINABLE TRANSACTION SORTING.  The user can sort
       on any field or any combinations of the fields.
     - FAST AND FLEXIBLE ENTRY SEARCHING.  Search by Who, the Description,
       the Transaction Number or the Amount (wild cards can be used in all
       these searches to aid in finding an item even if the entire item
       is not known).
     - FAST ENTRY DISPLAYING.  Windows pop up instantly and scrolling is
       very fast.
     - FAST DATA LOADING/SAVING time.  The program loads and saves its
       data in one swift move.
     - FLEXIBLE KEYBOARD OPERATION.  The user can move the selection bar
       in a variety of ways: arrow keys, WordStar type, single keystroke
       commands.
     - COMPACT AND EFFICIENT PROGRAM DESIGN.  This program has only one
       program file.  There are not any other EXE's to have to chain to
       and load when running, no overlays that must be loaded etc.  Once
       the program is loaded the disk containing the program can be taken
       completely out.  Installation time of the program and maintaince are
       kept to a minimum.  The actual program requires less than 100K of
       disk space and a data file with several thousand entries occupies
       less than 100k also.
     - EASY INSTALLATION AND MAINTENANCE.  The program has one data file
       that contains everything.  The program also creates a backup of
       your old data file.  No more loss of data due to a to a correped
       index file.
     - CLEAN ERROR TRAPPING AND HANDLING.  Printer and disk errors are
       all trapped by the program.
     - MINIMAL HARDWARE REQUIREMENTS.  Program runs great on a single
       floppy, 256k, 4.77mghz PC.
     - EASY TO UNDERSTAND AND USER DEFINABLE ACCOUNTS AND BUDGET
       CATEGORIES.  The user can add/edit and delete as they see fit.
     - USER DEFINED SPECIAL ATTRIBUTES (flags).  Each transaction entry
       can have three special flags.
     - FLEXIBLE MONTHLY SUMMARY AND BOTTOM LINE (yearly) summary reports
       keyed on accounts or budget categories.  These reports also cover
       all accounts giving you the real bottom line and summary.
     - POWERFUL AND FLEXIBLE SELECTING/GROUPING OF ENTRIES for
       very selective reports or listings.  The user can use all
       entries, pick a range of entries to use (very useful when also
       using the sort feature) or define a group that will act as
       a filter - allowing only those entries that are in that group
       to be used.  The group lets you specify date ranges, amount ranges,
       transaction number ranges, pick categories, accounts and attributes.
     - FLEXIBLE LISTINGS WHERE THE USER CAN SPECIFY WHICH FIELDS
       TO LIST AND THEIR ORDER.
     - POP-UP CALCULATOR with number cut and paste feature.



     O P E R A T I O N A L   O V E R V I E W
     _____________________________________________________________________

     The operational overview is given for the purpose to provide the user
     with a feeling of how the program works in common everyday usage (the
     tutorial gives a good start and a more detailed look into setting up
     the program and budgeting in general).  When the program is started it
     comes up in a checkbook type display.  The screen shows the 17 most
     recent entries, along with the main menu along the top of the screen
     and the help line at the bottom of the screen.  To make a withdrawal
     you simply press <W> or move the selection bar to "Withdrawal" and
     press the <Enter> key.  A list of your available budget categories is
     presented and you are prompted to scroll through the list and select
     the budget category that this withdrawal will be attributed to (the
     purpose of picking the budget category first is so that the new entry
     you are making can be filled out with the default values from the
     budget categorys' template information).  The transaction information
     is then displayed in its window and the user proceeds to step through
     and fill out the entry.  This involves picking the account which the
     transaction dealt with (done in the same manner as picking the budget
     category), typing in the date the transaction occurred on, the
     transaction number (which is automatically incremented), the amount,
     whom the transaction was with, a description of the transaction and
     finally picking any special attributes or flags from the list (like
     tax deductible, who wrote the check etc.).  At any point if the entry
     is correct you can press <Ctrl><Enter> and not have to step through
     the rest or you can press <Esc> and backup at any point.  Also
     remember that the transaction will be filled out in advance with
     default values obtained from the budget category you picked at first.
     You also have full editing capability of any string you are asked to
     enter or edit.  Some of the editing features are: insert, overstrike,
     jump word left, jump word right, delete the current character, delete
     word, delete to the end of the line, and even a cut and paste buffer.
     That is all there is to making a transaction entry.



     T A B L E   O F   D O C U M E N T A T I O N
     _____________________________________________________________________

          Documentation At The End Of This File___________________________

              Requirements
              Installing and running the program
              Disclaimer
              Problems
              Registration
              Referral Program


          FUNC.DOC________________________________________________________

              Conventions
                  Opening screen and what is shown
                  Bottom Help Line
                  Status Line
              Selecting
              Editing


          USE.DOC_________________________________________________________

              Pop-up Calculator
              Special
                  Split transaction entries
                  Clearing transaction entries
              View
                  Transactions
              Program startup
                  Command line options
                  Loading purged data files


          REPORTS.DOC_____________________________________________________

              Introduction to the reports
              Conventions
              Report filename extensions
              Quick report
              Account summary report
              Budget summary report
              Account bottom line report
              Budget bottom line report
              Entry listings


          GROUP.DOC________________________________________________________

              Introduction to groups
              Group Screen
              Ranges
              Adding Accounts to group
              Adding Budgets to a group
              Adding Attributes to a group
              Options
                  Item Logic
              Finished



     R E Q U I R E M E N T S
     _____________________________________________________________________

     This program runs on the IBM PC family of computers, including the PC,
     XT, AT, PS/2 and all true IBM compatibles.  Requires: MS-DOS or PC-DOS
     version 2.0 or higher, at least 192k of RAM, any IBM type 80 column
     display and at least one 360k floppy disk drive.  That is all that it
     takes for this program to run fast and effectively.



     I N S T A L L A T I O N   A N D   R U N N I N G
     _____________________________________________________________________

     HARD DISK SYSTEM:

         A.  Make a BUDGET directory on the C:\ drive.  At the
             C:\> prompt type, "MD \BUDGET" and press <Enter>.

         B.  Change to subdirectory BUDGET.  At the C:\> prompt
             type, "CD \BUDGET" and press <Enter>.

         C.  Insert into the A: drive, the floppy disk containing
             the Turbo Budgeter program.

         D.  At the C:\BUDGET> prompt type, "COPY A:BUDGET.EXE"
             and press the <Enter> key.

         E.  Remove the floppy disk from the A:\ drive - you are
             all done.

         F.  To run Turbo Budgeter you must first change to the \BUDGET
             subdirectory by typing "CD \BUDGET" <Enter>.  Now
             to run the program type "BUDGET" <Enter> and you will
             off and going.



     FLOPPY DISK SYSTEM:

         A.  Get a blank formatted system disk and put this disk
             into the A: disk drive.
             - If the floppy has not yet been formatted then
               refer to your DOS reference manual on how this
               is done.

         B.  Put the Turbo Budeter program disk into the B: floppy
             disk drive.
             - If you have single floppy system - skip this step.

         C.  Type, "COPY B:BUDGET.EXE A:" and press the <Enter>
             key.
             - If you have a single floppy system you will
               prompted to insert and remove the source and target
               disks.

         D.  Remove the original Turbo Budgeter floppy disk from the
             B: drive and store it away for a safe backup.

         E.  To run the program:
              1) Boot the computer with the MS-DOS system disk.
              2) Replace the MS-DOS system disk with your Turbo Budgeter
                 disk.
              3) Run the program by typing "BUDGET" <Enter>.

              -or-

              If you have a dual floppy system and you want to run the
              program on the system disk (drive A:) and have your data
              and reports put on the disk (drive B:) then you can do
              something like this:
              1) Boot the computer with your MS-DOS system disk.
              2) Replace the MS-DOS system disk with your Turbo Budgeter
                 disk.
              3) Insert a formatted data disk into drive B:.
              4) Go the data disk on the B: drive by typing the following
                 at the system prompt: A>B: <Enter>.
              5) Invoke the program by typing: "A:BUDGET" <Enter>.

              -or-

              1) Boot the computer with your MS-DOS system disk.
              2) Replace the MS-DOS system disk with your Turbo Budgeter
                 disk.
              3) Insert a formatted data disk into drive B:.
              4) Invoke the program and specify the data filename to
                 be used on the command line.

                 EXAMPLE:  A>BUDGET B:BUDGET.DAT <Enter> .



     D I S T R I B U T I O N   N O T I C E
     _____________________________________________________________________

     Turbo Budgeter is distributed as SHAREWARE.  Users are welcome to copy
     the software and share it with their friends.  After evaluating this
     product, if a person decides to use it, he or she is trusted to buy
     the registered set.

     Anyone may obtain an evaluation copy for $10 by directly contacting
     the address listed below.  The disk contains the complete working
     software and the documentation, ready to be printed on your own
     printer.  If you decide you like Turbo Budgeter and want to register
     (after ordering the evaluation copy) simply pay the difference between
     the evaluation copy and the registration fee.

     Registered owners receive phone and mail support, new product
     announcements, update services and enrollment into the Referral
     Program.



     D I S C L A I M E R
     _____________________________________________________________________

     The Turbo Budgeter program offers no written, expressed or implied
     warranties.  The programmer will not be liable or responsible for
     anything with respect to any loss or damage that may or may not be
     associated with Turbo Budgeter, including but not limited to loss of
     profits, interruption of service, loss of business or consequential
     damages resulting from the use of such programs.  It is distributed
     as is, what you see is what you get.  If a problem does arise, every
     effort will be made to correct the problem and satisfy you as quickly
     as possible.

     When starting the use of any new software package it is always good
     practice to test the programs with sample data, and to run the programs
     in parallel with any previous system for a period of time sufficient
     to ensure satisfactory results.

     This software is Copyrighted (C) by Garth Braithwaite, 1988, 1989,
     1990 all rights reserved.  Copies of this software may be made and
     distributed as long as the software is not changed or modified in
     any way, and the documentation files remain on the disk to be dis-
     tributed.



     P R O B L E M S
     _____________________________________________________________________

     If you encounter a problem with this program or if you would like to
     comment on anything, please write to the address below.  To help in
     trouble shooting please specify:  The program you are using, program
     version, name and model of the machine you are using, the specifi-
     cations of your computer (type of display, memory, disk drives), DOS
     version, any device drivers or TSR's running, the nature of the
     problem, along with any messages or anything that seems odd or out of
     place.

     If your problem is not urgent, write instead of calling.  The
     problem often can't be resolved over the phone anyway, since it
     usually requires that we have a copy of your data file to recreate
     the problem on our computer.  When writing include a diskette with
     a copy of your data file and the data mentioned above.  Also include
     any screen dumps or messages which may be useful in researching the
     problem.

     If you find it necessary to call for technical support, please have
     all the information available.  If possible, call from a phone near
     your computer, in case you need to run Turbo Budgeter to troubleshoot
     or explain the problem.



     R E G I S T E R I N G
     _____________________________________________________________________

     Registered users are entitled to one free update, future updates
     at minimal cost, technical support and enrollment into the Referral
     Program (see the next section for details).  Any comments on this
     program, updates, or future programs that you would like to see,
     are appreciated and welcomed.

     To register please include: your name, address, phone, what program(s)
     you are using, version number(s), the programs' EXE file date and
     time, any comments, and the amount that you feel this program is worth
     (any comments and/or monetary support will be greatly appreciated).  A
     sample registration form is included in a file named: "REGISTER.FRM".
     Simply copy this to your printer, fill in the blanks, and mail to the
     address given below.  To print the sample registration form, turn your
     printer on, and type the following DOS command: "COPY REGISTER.FRM PRN
     <Enter>".  If you need an invoice for a purchase order then type "COPY
     INVOICE.PO PRN <Enter>". Thank you for your support.

     Send comments and registration fees to:

     Garth Braithwaite, PC-Consulting
     2045 W.  1245  S.
     Syracuse, Utah  84075



     R E F E R R A L   P R O G R A M
     _____________________________________________________________________

     For a contribution of $20 or more you will be enrolled into the
     Referral Program.  This will entitle you to receive 25% of all
     donations received that reference you as the person who referred
     them to Turbo Budgeter.

     EXAMPLE:  1. Fully register.  When you fully register the most recent
                  program version is sent to you on your own personal
                  serialized disk.
               2. You introduce the Turbo Budgeter to a friend.  He/she
                  makes a copy of your diskette.
               3. They like the program and make a donation.
               4. We check our database for the name your friend has
                  specified as the person who introduced them to the
                  program (If no name is given we then try to match up
                  the programs serial number - the time associated with
                  the BUDGET.EXE file or the disk's volume label).
               5. You will then be sent 25% of your friend's donation!
                  Whatever the amount.  It's that simple.


     When sending in YOUR registration form, be sure to include the full
     name of the person who introduced you to this program or the Disk's
     Volume Label or the time and date associated with your BUDGET.EXE
     file.



     F I N A L   N O T E
     _____________________________________________________________________

     If you want or need to keep track of your money, budgets or accounts
     then this program can provide you with an easy and efficient way of
     doing it on a computer.  However, despite the claims of being easy
     and efficient, tracking your money still takes a lot of work.  Ded-
     ication, consistency, and careful preparation of how you want to keep
     track of your transactions, are essential to the enjoyment and useful-
     ness of this program.


     ------------------------ End of BUDGET.DOC --------------------------

```
{% endraw %}

## FILE1859.TXT

{% raw %}
```
Disk No: 1859                                                           
Disk Title: Garths Shareware Utilities                                  
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Garths Shareware Utilities                               
Author Version: 1.47                                                    
Author Registration: $20.00                                             
Special Requirements: 1360K floppy or a hard drive.                     
                                                                        
GARTH'S SHAREWARE UTILITIES is a collection of utilities for copying    
disks, printing, and listing directories.                               
                                                                        
COPYDISK is a multiple disk copying program that makes several disk     
copies after reading the source disk only once.  If there are two floppy
drives, you have the option to alternate between the two for writing    
onto the copy disks.                                                    
                                                                        
D is a utility that allows you to change directories without having to  
look for the "\" key.                                                   
                                                                        
DDIR is a date directory utility that lists files of a particular date, 
before a date, after a date, or in a particular date range.  Change the 
dates and times of specified files.  DDIR automatically searches every  
directory and can also be used as an ordinary file finder without the   
date options.                                                           
                                                                        
DIRLABEL prints out a disk's entire directory in a small compact form.  
The program allows you to specify the drive, the printer port, the size 
of paper or label to be used, and the top and ending spaces for each    
label.                                                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FUNC.DOC

{% raw %}
```

     F U N C T I O N A L   G U I D E
     _____________________________________________________________________

     This guide covers the programs conventions and serves as a technical
     reference for Selecting/Choosing items from the menus and Entering/
     Editing data.

     WordStar control key standard.  Because the WordStar control key
     standard is so popular, we support it in all our software packages.
     There are two important reasons why this standard is so popular:
     (1) it allows touchtypists to perform all the control key functions
     without removing their hands from the keyboard; and (2) it allows
     numeric keypad users an optional set of arrow keys so <NumLock> can
     be left on all the time.  If you are a fast typist and seldom look
     at the keyboard, or if you do a lot of ten-key input, you will
     likely find these control keys helpful.  It takes some time to get
     accustomed to them, but eventually they become second nature just
     like the other keys on the keyboard.



     C O N V E N T I O N S
     _____________________________________________________________________

     <key> - The letter or word between the <> brackets corresponds
          to a key on the computers keyboard.

          EXAMPLE:  <A> - this is the letter "A" on the keyboard located
                          on the left side next to the letter "S".
                    <Esc> - this is the "Escape" key located in the upper
                          left corner of most IBM PC keyboards or in the
                          upper left corner of the Number Pad on IBM PC/AT
                          keyboards.
                    <Enter> - this is the key as the <Return> key which is
                          known as the "Carriage Return" key on most type
                          writers or the "Enter" key.


     ^ -  When this precedes a key it means hold down the <Ctrl> key while
          pressing the letter.

          EXAMPLE:  <^A> - This means to hold down the <Ctrl> key and then
                          press the <A> key.  After pressing the <A> you may
                          release the <Ctrl> key.


     Numlock Key - The selection bar will move regardless of whether the
          lock is ON or OFF.  When editing if the NumLock is ON you will
          get the numbers if the NumLock is OFF then you will move the
          editors cursor.

     WYSIWYG - This is an acronym standing for: "What You See Is What You
          Get".

     Static Selections - These are selections that you the user will never
          be able to change.

     Dynamic Selections - These selections are those which can and probably
          will change.

     The Help line - The very bottom line on the screen is the users prompt
          or help line.  This line always tells you what the program is
          expecting from you and what some of your options are.

     The Status line - The next to the last line on the screen is used to
          display the status of various items.  When selecting, the status
          line shows you your current selection position and the very end
          selection. When entering/editing data the status line shows you
          if the Caps Lock is ON, if the NumLock is ON and whether you are
          in INSERT or OVERWRITE mode.



     S E L E C T I N G
     _____________________________________________________________________

     Selecting is the process of choosing an item from a pop up window or a
     pulldown menu.  The selection bar is highlighted and is moved using
     the arrow keys as described below.  There are three types of sel-
     ections to be made.  The first is a horizontal selection.  The next
     two are vertical selections with the first of them being a static
     selection list and the latter being a dynamic selection list.

     The horizontal selection is a menu usually placed at the very top of
     the screen.  Its highlight bar moves horizontally and when the end
     most position is overrun it will wrap back around to the other side.

     A Vertical selection is a menu listing its selections vertically up
     and down.  Static selections are those of which the list of selections
     are all shown and the list never changes.  Dynamic selections are
     those which the list has the potential to change (user add/delete of
     selections).  The dynamic selections may also have numerous pages of
     selections to choose from.



     H O R I Z O N T A L   M O V I N G / R E P O S I T I O N I N G________

     <Left arrow key>  or ^S or <Shift><Tab> - Moves the HIGHLIGHT BAR one
          selection to the left.
     <Right arrow key> or ^D or <Tab> - Moves the HIGHLIGHT BAR one
          selection to the right. <Home key> - Moves selection bar to the
          far left selection. <End key>  - Moves selection bar to the far
          right selection.


     V E R T I C A L   M O V I N G / R E P O S I T I O N I N G____________

     <Up arrow key>   or ^E - Moves the HIGHLIGHT BAR one selection UP.
     <Down arrow key> or ^X - Moves the HIGHLIGHT BAR one selection DOWN.
     <Home key>   - Moves selection bar to the upper most selection being
                    shown on the screen.
     <End key>    - Moves selection bar to the lower most selection
                    being shown on the screen.
     <PgUp> or ^R - Moves selection bar ONE Page UP.
     <PgDn> or ^C - Moves selection bar ONE Page DOWN.
     ^<PgUp>      - Moves selection bar to the very first selection.
     ^<PgDn>      - Moves selection bar to the very end selection.

     <first letter> - Dynamic Vertical selections - Pressing the first
          letter of any selection will reposition the selection bar to the
          corresponding selection.  If the letter pressed is the same as
          pressed before you will start from the current position and
          search down from that point.  If you press a new letter you will
          start the search from the beginning selection downward until a
          match is found.  If no match is found you will remain at the
          current position.




     C H O O S I N G / S E L E C T I N G / A B O R T I N G________________

     <Enter> or ^M or <+>  - chooses the item the highlight bar is on.
     ^<Enter> or ^J        - selects item the same as <Return> but it
          additional feature of accepting the rest of all entries to be
          entered/edited/selected (in most situations).
     <capitalized letter>
          - Horizontal selections - Pressing the corresponding Capitalized
               letter chooses/selects.
          - Static Vertical selections - Pressing the corresponding
               Capitalized/highlighted letter chooses/selects.

     <Del> - Selects an Item for deletion when in the in EDIT SECTION
          of the program.

     <Esc> - aborts current selection and backs up one step.
     <F10> - aborts current selection and returns all the way back to
          the main selections.

     <Alt><first letter of the main selections> - aborts current selection
          and selects that item.




     E N T E R I N G / E D I T I N G
     _____________________________________________________________________


     T Y P E S  O F  F I E L D S__________________________________________

     String Fields - String fields are items such as names, descriptions,
          titles etc. .  When you ENTER this to accept a string field -
          WYSIWYG (What You See Is What You Get).

     Number Fields - Number fields are items such as amounts, sizes, etc. .
          These fields are range checked and if the number trying to be
          entered is out of range the number is automatically adjusted to
          the nearest range bound.  Numbers are delimited by any non-number
          character.

          EXAMPLE:  "asd 34 400" would result in the number "34" being
                    accepted.  If the number had a range of 50-300 then
                    the number returned would be "50".


    Date Fields - Date fields deal with calendar dates.  The field is in
          the form of mm-dd-yy.  The mm represents the Month and is a 2
          digit number between 1 and 12. The dd is a 2 digit number that
          represents which day and it must be between 1 and 28,30,31 de-
          pending on the actual value for that month.  Finally yy is the
          last 2 digits of the year to be used and it can be 0 -> 99.  The
          delimiters used for the date can be "/", "-", ".", and ",".  If
          another character is used to delimit then the date will be trunc-
          ated and the default values will be used.  If a field is omitted
          then the default value will be used.  If this field is out of
          range for that item then it will be adjusted to the nearest bound
          value.  There is a special case when there is only one number
          entered followed by an invalid delimiter.  When this happens only
          the DAY is portion is changed.

          EXAMPLES: "12/13/87" would mean the 13th day of December in the
                               year 1987.
                    "13/1/88"  would be changed to "12/1/88" since the "13"
                               for the month was out of range.
                    "6/31/88"  would result in "6/30/88" since the day of
                               "31" is out of range for the month of June.
                    On input "12/13/88" after enter/edit "12/25sad" would
                               result in the "s" truncating the date at
                               "12/25" and using the default "/88" and thus
                               returning "12/25/88".
                    On input "12/13/88" after entering "14 " this would
                               adjust the day only resulting in "12/14/88".
                    The following are all equivalent: "12/13/88" =
                               "12-13-88" = "12.13.88" = "12,13,88".



     A C C E P T I N G / A B O R T I N G   K E Y S________________________

     <Enter> or ^M - Accepts edit and returns the value according to the
          field rules described above.
     ^<Enter> or ^J - Accepts edit same as <Enter> but it has an additional
          feature of accepting the rest all entries to be
          entered/edited/selected (in most situations).

     <Esc> - aborts edit, returns the initial value unchanged and backs up
          one step.  This usually will back you up to the previous entry if
          there are any.  If you are at the first entry position then you
          will backup one step to the point that put you at there.



     E D I T I N G   K E Y S______________________________________________

     <Ins key> or ^V - Toggles insert/overstrike on and off.
     <Left arrow key> or ^S - Moves the edit cursor one character to the
          left.
     <Right arrow key> or ^D - Moves the cursor one character to the
          right.
     ^<Left arrow key> or ^A or <Shift><Tab> - Moves the cursor one word to
          the left.
     ^<Right arrow key> or ^F or <Shift> - Moves the cursor one word to the
          right.
     <Home key> - Moves the cursor to the starting position.
     <End key> - Moves the cursor to the end of the end position.
     ^P - accepts the following character typed into the string.

          EXAMPLE:  to insert a ^O into a string you would first press
                    ^P followed by the ^O.

     <Backspace> or ^H - Moves left one character and deletes the
          character.
     <Del> or ^G  - Deletes the character at the current cursor position.
     ^<BackSpace> - Deletes the current word entirely.
     ^T - Deletes rest of current word.
     ^Y - Deletes rest of current line.

     ^U - UnEdit the current work string (start over).

     ^R - Right justifies what is being edited/entered.
     ^C - Centers what is being edited/entered.
     ^L - Left justifies what is being edited/entered.

     ^B - Mark the Beginning of the Cut/Paste block.
     ^E - Mark the End of the block and copy its contents into the
          Cut/Paste buffer.
     ^Q - Quick copy of the entire item into the Cut/Paste buffer.
     ^W - Write the contents of the Cut/Paste buffer at the current
          cursor position.


     -------------------------- End of FUNC.DOC --------------------------

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #1859  GARTHS SHAREWARE UTILITIES  >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start BUDGET, type: BUDGET (press enter)                             ║
║                                                                         ║
║ To print BUDGET's documentation, type: COPY BUDGET.DOC PRN (press enter)║
║                                                                         ║
║ To print UTILITY's documentation, type: COPY UTILITY.DOC PRN            ║
║                                                                         ║
║ To run COPYDISK, type: COPYDISK  (press enter)                          ║
║                                                                         ║
║ To run D, type: D (press enter)                                         ║
║                                                                         ║
║ To run Date Directory, type: DDIR (press enter)                         ║
║                                                                         ║
║ To run DIRLABEL, type: DIRLABEL  (press enter)                          ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GROUP.DOC

{% raw %}
```

     G R O U P   I  N  T  R  O  D  U  C  T  I  O  N
     _____________________________________________________________________

     Groups provide a special way to filter or lump transactions together
     to be used in the reports.  For an entry to be used it must match all
     of the defined groups criteria.  This consists of being within: the
     Amount range, the date range, the transaction number range, in the
     account set (if any accounts were chosen), in the budget set (if any
     chosen), and in the attribute set (if any were specified or chosen).
     When a entry matches all of these items then they are said to be in
     that group and will be included in the report or listing.

     EXAMPLE: If you wanted all the "tax deductible" items that where above
              $100.00 and were with the "checking account" what would you
              do?  You might be able to do it by sorting the transactions
              and hope they will all be together after the sort so that you
              can pick those transactions.  Chances are that they will not
              be together thus leaving you with the alternative of running
              the report using all the transactions.  Now lets get a more
              complicated example of where you wanted the transactions
              mentioned above but did not want any of those transactions
              that had a "church contributions" budget category.  Groups
              will allow you to do this and much more.  By giving the
              ranges and choosing the items you wish to have/not have in
              your defined group you can build your own custom filters and
              lump various transactions together.

     -------------------------- End of GROUP.DOC -------------------------

```
{% endraw %}

## REPORTS.DOC

{% raw %}
```

     R E P O R T S   T E C H N I C A L   R E F E R E N C E
     _____________________________________________________________________

     This part of the documentation gives a technical description of the
     reports and their numbers.  There are basically two types of reports:
     Summaries and Bottom lines.  The reports are based on either Accounts
     or Categories.  The entries that are to be reported on can be chosen
     in three base ways:  Use all entries, use only a range of entries
     where the user picks that range or define a group that will be used
     to filter the entries to use.  The report output can be sent to a
     user named disk file and or the printer.



     C O N V E N T I O N S
     _____________________________________________________________________

     - The reports are displayed in a spread sheet type format with rows
       and columns of numbers usually having some type of totals on the ends.
       The top of the report always tells you:  the report type, user title,
       page number, system date (Default Date) and whether or not entries
       with a "Transfer" attribute were included in the report.
     - The numbers presented correspond to what entries the user selected
       to use in the report.  The user can use all entries, a range of
       entries, or a defined group of entries.
     - The amounts show in the reports are rounded up to the nearest
       dollar - no decimal values are shown.
     - The percentages are shown with two decimal places.  These numbers are
       NOT EXACT - they have been approximated.
     - Year To Date amounts are also approximated and should be used only as
       a guide line amount.
     - The reports numbers are represented by symbols.  Below the report
       will be a list of what those symbols mean.
     - Symbols defined in previous reports retain their same meaning and
       are not redefined.

     NOTE:  If the "Include Transfers" flag has been set to 'Y' then the
            totals above will include every transaction entered.  If it is
            not set ('N') then those entries with a "Transfer" attribute
            will not be included in the counting.



     S Y M B O L   C O N V E N T I O N S
     _____________________________________________________________________

     #     - Number - count prefix.
     %     - Percentage prefix.
     d     - The small 'd' suffix denotes DEPOSIT.
     w     - a small 'w' suffix denotes WITHDRAWAL.
             Example: Td - is Total Deposits, Tw - is Total Withdrawals.
     n     - This represents the total number of items being reported on.
             (e.g. the last or end account/category).
     m     - This prefix stands for monthly.
     b     - This is a prefix for total budgeted amount.
     y -or-
     ytd   - The acronym 'YTD' stands for 'Year To Date'.  This prefix is
             associated with budgeted amounts as of the current date v.s.
             the starting fiscal year date.  YTD amount is a percentage of
             the total amount allotted with the percentage being determined
             as to the current date v.s. the fiscal year date.
     (i)   - The small 'i' denotes a subscript of an item.  This (i) is
             used to subscript similar items going down vertically.
             It has a range from 1 to n.
     (j)   - The small 'j' denotes another subscript.  This is used for
             monthly items where j is from 'a' to 'l', '1' to '12' or
             from Jan. to Dec.  .
     ...   - this is the same as etc.  Similar items that are repeating
             the same type of information are replaced with this because
             there is not enough room to display all fields in 80 columns.
     ~     - continuation.



     F I L E N A M E   E X T E N S I O N S
     _____________________________________________________________________

     If the user has specified a the output to be sent to a file then the
     user is prompted to enter a filename.  If the filename does NOT have
     an extension one will be provided.  These extensions vary for each
     report and they are:
         Account Bottom Line Report - filename.ABL
         Category   "    "     "    -    "    .CBL
         Account Summary Report     -    "    .AS
         Category   "    "          -    "    .CS
         Entry listing              -    "    .LST
         Entry ascii text listing   -    "    .TXT



     Q U I C K   R E P O R T
     _____________________________________________________________________

                 Month        Deposits     Withdrawals
                 -----      -----------    -----------
                  Jan          mGT( 1)d       mGT( 1)w
                  Feb          mGT( 2)d       mGT( 2)w
                  Mar          mGT( 3)d       mGT( 3)w
                  Apr          mGT( 4)d       mGT( 4)w
                  May          mGT( 5)d       mGT( 5)w
                  Jun          mGT( 6)d       mGT( 6)w
                  Jul          mGT( 7)d       mGT( 7)w
                  Aug          mGT( 8)d       mGT( 8)w
                  Sep          mGT( 9)d       mGT( 9)w
                  Oct          mGT(10)d       mGT(10)w
                  Nov          mGT(11)d       mGT(11)w
                  Dec          mGT(12)d       mGT(12)w
                 -----      -----------    -----------
                 Total              GTd            GTw
              Budgeted             bGTd           bGTw
              Budg YTD           ytdGTd         ytdGTw
            # of trans.            #GTd           #GTw


         New symbols defined in this section:
              mGT( i )d - TOTAL amount deposited during that month.
              mGT( i )w - TOTAL amount withdrawn during that month.
                    GTd - Total deposits; sum of all mGT( i's )d.
                    GTw - Same as GTd except withdrawals.
                   bGTd - Sum of all Budget allotments having their
                          Deposit/Withdrawal attribute set to DEPOSIT.
                   bGTw - Same as bGTd except withdrawals.
                 ytdGTd - Amount of budgeted deposits according to the
                          current date v.s. the starting fiscal year month.
                          This number is a percentage of the Total Budgeted
                          Deposits;  bGTd x (# days into the year) / 366 .
                 ytdGTw - Same as bytdTDw except for withdrawals.
                   #GTd - Total count of all deposit entries.
                   #GTw - Total count of all withdrawal entries.



     A C C O U N T   S U M M A R Y   R E P O R T
     _____________________________________________________________________

     This report is broken into two distinct sections.  The first section
     is a report on the amounts deposited into each account.  The second
     section reports the withdrawal amounts.  If ALL ENTRIES were used in
     the report then all accounts will be reported on even if no trans-
     actions were associated with the account.  If a USER RANGE or GROUP
     was used to choose the entries then only those accounts that had
     activity with the entries picked will be reported on.  The amounts
     and percentages shown will be according to the entries selected to
     be used.


         --------------------   --------AMOUNT DEPOSITED-------  -%of--
         ACCOUNT NAME             Jan     ...     Dec    Total   TOTAL
         --------------------   ------- ------- ------- ------- -------
         account( 1 )             a(1)d   ...     l(1)d   T(1)d  %T(1)d
         account( 2 )             a(2)d   ...     l(2)d   T(2)d  %T(2)d
         ...                       ...    ...      ...     ...     ...
         account( n )             a(n)d   ...     l(n)d   T(n)d  %T(n)d
         --------------------   ------- ------- ------- ------- -------
         TOTAL                   mT(a)d   ...    mT(l)d      Td     %Td
         PERCENTAGE OF TOTAL    %mT(a)d   ...   %mT(l)d
         --------------------   ------- ------- ------- ------- -------
         NUMBER OF TRANS.       #mN(a)d   ...   #mN(l)d     #Nd    %#Nd
         PERCENTAGE OF TRANS.   %mN(a)d   ...   %mN(l)d


         --------------------   --------AMOUNT WITHDRAWN-------  -%of--
         ACCOUNT NAME             Jan     ...     Dec    Total   TOTAL
         --------------------   ------- ------- ------- ------- -------
         account( 1 )             a(1)w   ...     l(1)w   T(1)w  %T(1)w
         account( 2 )             a(2)w   ...     l(2)w   T(2)w  %T(2)w
         ...                       ...    ...      ...     ...    ...
         account( n )             a(n)w   ...     l(n)w   T(n)w  %T(n)w
         --------------------   ------- ------- ------- ------- -------
         TOTAL                   mT(a)w   ...    mT(l)w      Tw     %Tw
         PERCENTAGE OF TOTAL    %mT(a)w   ...   %mT(l)w
         --------------------   ------- ------- ------- ------- -------
         NUMBER OF TRANS.       #mN(a)w   ...   #mN(l)w     #Nw     %Nw
         PERCENTAGE OF TRANS.   %mN(a)w   ...   %mN(l)w

         --------------------   ------- ------- ------- -------
         --------------------   ------- ------- ------- -------
         NET TOTAL AMOUNT        TNA(a)   ...    TNA(l)     TNA


         New Symbols defined in this section:
                a( i )  - Amount of deposits (or withdrawals depending
                          w or d suffix)  for that particular account
                          in the month of january.
                   ...  - Same as a(i) except that you have a column
                          for each month of Feb. through Nov. .
                l( i )  - Same as a(i) except for the month of december.
                T( i )  - Total Amount found by adding a(i) -> l(i);
                          T(1) = a(1) + b(1) + ... + k(1) + l(1).
               %T( i )d - Percentage of total deposits for that account
                          v.s. grand total; T(i)d / GTd.
               %T( i )w - Percentage of total withdrawals for that
                          account v.s. grand total; T(i)w / GTw.
                      T - Total of all T(i)'s.
                     %T - Percentage of the whole total v.s. the grand
                          total; %Gtw = Tw / GTw, %GTd = Td / GTd.
                mT( j ) - Monthly total of accounts;
                          mT(a)d = sum of all a(i's)d,
                          mT(l)d = sum of all l(i's)d.
               %mT( j ) - Monthly Percentage of the total month amount
                          v.s. the grand total;
                          %mT(a)d = { sum a(i's)d } / GTd.
               #mN( j ) - Monthly total of the number of transactions.
                          mN(a)d = count of all the number of transactions
                          for the month of Jan.
               %mN( j ) - Monthly count Percentage of the total month
                          number of v.s. the grand total number of;
                          %mN(a)d = #mN(a)d / #GTd.
                    #Nd - Total number of deposits;
                          #Nd = #mN(a) + ... + #mN(l) .
                    %Nd - Percentage of the total number of deposits used
                          in the report v.s. the grand total number of
                          deposits;  %Nd = { sum of #mN(j)d } / #GTd.

               TNA( j ) - This is the total net amount for each month;
                          TNA( a ) = mT(a)d + mT(a)w.
               TNA      - Sum of all TNA( j's ).



     C A T E G O R Y   S U M M A R Y   R E P O R T
     _____________________________________________________________________

     This is the same type of report as the Account Summary Report except
     that Budget Categories are reported on instead of Accounts and some
     additional budget numbers are given.


         -------------------   ---------AMOUNT DEPOSITED---------  Percent of-
         CATEGORY NAME           Jan   ...    Dec   Total YTD Bdg  Total Budgt
         -------------------   ------ ----- ------ ------ -------  ----- -----
         category( 1 )          a(1)d  ...   l(1)d  T(1)d  yB(1)d  %T(1) %yB(1)
         category( 2 )          a(2)d  ...   l(2)d  T(2)d  yB(2)d  %T(2) %yB(2)
         ...                     ...   ...    ...    ...     ...    ...   ...
         category( n )          a(n)d  ...   l(n)d  T(n)d  yB(n)d  %T(n) %yB(n)
         -------------------   ------ ----- ------ ------ -------  ----- -----
         TOTAL                 mT(a)d  ...  mT(l)d     Td     yBd    %Td  %yBd
         PERCENTAGE OF TOTAL  %mT(a)d  ... %mT(l)d
         PERCENT OF BUDGET    %mB(a)d  ... %mB(l)d
         -------------------   ------ ----- ------ ------ -------  ----- -----
         NUMBER OF TRANS.     #mN(a)d  ...  #N(l)d    #Nd            %Nd
         PERCENTAGE OF TRANS. %mN(a)d  ... %mN(l)d



         -------------------  ---------AMOUNT WITHDRAWN---------  Percent of-
         ... - same as the above section except for withdrawals.


         -------------------  ------ ----- ------ ------ -------
         -------------------  ------ ----- ------ ------ -------
         NET TOTAL AMOUNT     TNA(a)  ...  TNA(l)    TNA   ytdNB


         New Symbols defined in this section:
               yB( i )  - Amount budgeted ytd.  YTD amount from budget
                          category ( i ).
              %yB( i )  - Percentage of the budget category ( i ) ytd
                          amount v.s. the grand overall total ytd
                          amount;  %yB(1) = yB(1) / ytdGTd.
                    yBd - Total amount of deposits budgeted year to date;
                          yBd = sum of all yB(i)d's.
                   %yBd - Percentage of the total ytd amount v.s. the grand
                          overall total ytd amount;  %yBd = yBd / ytdGTd.
                  ytdNB - Total net amount budgeted year to date;
                          ytdNB = yBd + yBw.
               %mB( j ) - Percentage of the budget accounted for during
                          that month; %mB(a)d = { sum of a(i)d } / bGTd.



     A C C O U N T   B O T T O M   L I N E   R E P O R T
     _____________________________________________________________________

     This report deals with only the final figures.  This reference is
     broken into three parts because all the symbols can not be displayed
     within 80 columns at the same time.


     Part 1 of 3:

                         -----------------------ACTUAL-------------------- ~
         --------------  ---# of--- -------------Amounts------------------ ~
         ACCOUNT NAME     Dpst With Inital Deposit Withdrl   Net   Balance ~
         --------------  ----- ---- ------ ------- ------- ------- ------- ~
         account( 1 )   #N(1)d #N(1)w I(1)   T(1)d   T(1)w   TN(1)   AB(1) ~
         ...              ...    ...   ...     ...     ...     ...     ... ~
         account( n )   #N(n)d #N(n)w I(n)   T(n)d   T(n)w   TN(n)   AB(n) ~
         --------------  ----- ---- ------ ------- ------- ------- ------- ~
         TOTAL             #Nd  #Nw     I       Td      Tw     TN      AB  ~


     Part 2 of 3:

                              ~ -----------------CLEARED--------------- ~
         -------------------- ~ -----# of----- --------Amounts--------- ~
         ACCOUNT NAME         ~  Dpst    With   Deposit Withdrl Balance ~
         -------------------- ~ ------- ------- ------- ------- ------- ~
         account( 1 )         ~ #CN(1)d #CN(1)w  CT(1)d  CT(1)w   CB(1) ~
         ...                  ~    ...     ...     ...     ...      ... ~
         account( n )         ~ #CN(n)d #CN(n)w  CT(n)d  CT(n)w   CB(n) ~
         -------------------- ~ ------- ------- ------- ------- ------- ~
         TOTAL                ~    #CNd    #CNw     CTd     CTw      CB ~


     Part 3 of 3:

                              ~ ---BUDGETED----
         -------------------- ~ ----Amounts----
         ACCOUNT NAME         ~ Deposit Withdrl
         -------------------- ~ ------- -------
         account( 1 )         ~  bB(1)d  bB(1)w
         ...                  ~    ...     ...
         account( n )         ~  bB(n)d  bB(n)w
         -------------------- ~ ------- -------
         TOTAL                ~     bBd     bBw


         New Symbols defined in this section:
               #N( i )d - Count of all Deposits associated with that
                          account.
                I( i )  - Inital starting balance for account(i).
               TN( i )  - Net amount for that account;
                          TN(1) = T(1)d + T(1)w.
               AB( i )  - Actual account(i) balance;
                          AB(1) = I(1) + TN(1);
              #CN( i )  - Count of all CLEARED deposits/withdrawals
                          associated with that account.
               CT( i )  - Cleared amount deposited/withdrawn from
                          account(i).
               CB( i )  - Cleared balance for account(i);
                          CB(1) = I(1) + CT(1)d + CT(1)w.
               bB( i )d - Total amount of deposits budgeted to account( i ).
               bB( i )w - Same as bB(i)d except deals with withdrawals.
                    bBd - Total of all deposits budgeted;
                          bBd = sum of all bB(i's)d.



     C A T E G O R Y   B O T T O M   L I N E   R E P O R T
     _____________________________________________________________________

     This is the same type of report as the Account Bottom Line Report
     except it covers Budget Categories instead of Accounts.


     Part 1 of 3:

                               -------------------------BUDGET TRANS ~

         --------------------  -----# of---  ----Actual Amounts----- ~
         CATEGORY NAME          Dpst   With  Deposit Withdrl   Net   ~
         --------------------  ------ ------ ------- ------- ------- ~
         category( 1 )         #N(1)d #N(1)w   T(1)d   T(1)w   TN(1) ~
         ...                     ...    ...     ...     ...     ...  ~
         category( n )         #N(n)d #N(n)w   T(n)d   T(n)w   TN(n) ~
         --------------------  ------ ------ ------- ------- ------- ~
         TOTAL                    #Nd    #Nw      Td      Tw      TN ~


     Part 2 of 3:
                                ~ ACTIONS------------------------- ~
         --------------------   ~ --YTD Amounts--  -Total Amounts- ~
         CATEGORY NAME          ~ Budgetd   Left  Budgetd   Left   ~
         --------------------   ~ ------- ------- -------  ------- ~
         category( 1 )          ~ ytbB(1) ytbL(1)   bB(1)    bL(1) ~
         ...                    ~   ...     ...      ...      ...  ~
         category( n )          ~ ytbB(n) ytbL(n)   bB(n)    bL(n) ~
         --------------------   ~ ------- ------- -------  ------- ~
         TOTAL                       ytbB    ytbL      bB       bL ~


     Part 3 of 3:

                                ~ -------------PERCENTAGES--------------
         --------------------   ~ --- # of---  --Amounts--  - of-  Total
         CATEGORY NAME          ~ Dpst. With.  Dpst. With.  Budg.  Budg.
         --------------------   ~ ----- -----  ----- -----  -----  -----
         category( 1 )          ~ %N(1)d %N(1)w %T(1)d %T(1)w %B(1) %BT(1)
         ...                    ~   ...    ...    ...    ...    ...  ...
         category( n )          ~ %N(n)d %N(n)w %T(n)d %T(n)w %B(n) %BT(n)
         --------------------   ~ ----- -----  ----- -----  -----  -----
         TOTAL                  ~   %Nd   %Nw    %Td   %Tw     %B    %BT


         New Symbols defined in this section:
             ytdB( i )  - The YTD amount budgeted for budget(i).
             ytdL( i )  - Total amount Left of ytd budget(i);
                          ytdL(1) = TN(1) - ytdB(1).
               bB( i )  - Total amount budgeted for budget(i).
               bL( i )  - Total amount left of budget(i);
                          bL(1) = TN(1) - bB(1).
               %N( i )  - Percentage of number of deposits/withdrawals
                          for budget( i );
                          %N(1)d = #N(1)d / #GTd.
               %B( i )  - Percentage of the budget category (i) ytd
                          amount v.s. the grand overall total ytd
                          amount;  %B(1) = B(1) / bytdGTd.
              %BT( i )  - Percentage of budget(i)'s yearly allotment v.s.
                          the total budgeted allotment;
                          %BT(1)d = bB(1)d / bGTd.


     ------------------------- End of REPORTS.DOC -------------------------

```
{% endraw %}

## TUTORIAL.DOC

{% raw %}
```

     T U T O R I A L
     _____________________________________________________________________

     This tutorial is written to provide the user with a quick way to get
     started and to help the user get the feel of the program.  The pro-
     cedure is as follows:



     Step 1.  Setting up and planning your budget
     _____________________________________________________________________

     This is the most crucial part of budgeting and it doesn't involve the
     computer at all.


     A.  First, figure your total annual income.

         EXAMPLE:  $18,000 - husbands salary
                   $14,000 - wifes' salary
                   $ 3,000 - extra income
                   ------------------------------
                   $35,000 - total annual income.


     B.  Next, calculate your total annual expenditures.

         EXAMPLE:  $ 3,000 - federal income tax
                   $ 3,000 - FICA tax
                   $ 2,000 - state tax
                   $ 3,000 - charitable donations
                   $ 6,000 - house payment and property taxes
                   $ 1,000 - purchase of household goods
                   $ 1,000 - utility: gas/oil house heating fuel
                   $   500 - utility: electricity
                   $   500 - utility: city water/sewer/garbage
                   $ 5,000 - groceries
                   $ 1,500 - savings
                   $ 2,000 - retirement
                   $ 2,000 - entertainment
                   $ 1,000 - gifts: christmas, birthdays, others
                   $ 1,000 - clothes
                   $   500 - car repair
                   $ 1,000 - gasoline for car
                   $ 1,000 - medical
                  --------------------------------------------
                   $35,000 - total annual expenditures


     C.  Define your physical accounts.  Write down all of the open
         accounts you presently have, or those you want to have,
         along with their corresponding balances and their current
         transaction numbers, as of when you initiate this program.
         (Your first budget using this program will probably be
         initiated at some time other than the first day of
         January.  That is fine.  However, your first annual
         update should be Jan 1, 19XX, or some date at the end of
         a naturally occurring annual fiscal period for your
         family.)


         EXAMPLE:

              ACCOUNT IS WITH       ACCOUNT NAME/NUMBER   BALANCE   TRANS #
              -------------------   -------------------   -------   -------
              First National Bank,  Checking #344455,     $100.00,  23453
              First National Bank,  VISA     #344456,     -344.00,  N/A
              City Employees C.U.,  Savings  #23333,     $1000.00,  N/A
              Cash - spending,      Cash     #1,             0.00   1


     D.  Define your budget categories.  You have pretty much done
         this step already in steps 1.A and 1.B .  Please check them
         over again because the more categories you have the more
         detailed you can be in reporting and tracking.


     E.  Write down any special attributes associated with your
         transaction entries that you would like to track or flag.

         EXAMPLE:  You may want to control things which fall into
                   categories similar to those which follow.

                   Items which are: 1. tax deductible
                                    2. assets
                                    3. liabilities
                                    4. work related
                                    5. self-created
                                    6. created by spouse
                                    7. others



     Step 2.  Installing the program
     _____________________________________________________________________

     You did such a good job of gathering the data that entering it in is
     going to be as easy as A, B, C.  But first we must load the program
     onto your working disk or your hard disk, if you have one.


         FLOPPY SYSTEM

         A.  Format a floppy disk in your B: drive (see your MS-DOS
             manual for assistance).

         B.  Insert the master floppy disk (contains the Turbo Budgeter
             program) into the A: drive.

         C.  At the DOS prompt type, "COPY A:BUDGET.EXE B:" and press
             the <Enter> key.

         D.  Remove the master floppy disk from the A: drive and
             store away for safe keeping.

         E.  At the DOS prompt type, "BUDGET" followed by pressing the
             <Enter> key and you will be off and running.  It is that
             simple.  Now let's see what we have to do to operate the
             program.


         HARD DISK SYSTEM:

         A.  Make a BUDGET directory on the C:\ drive.  At the C:\>
             prompt type, "MD BUDGET" and press <Enter>.

         B.  Change to subdirectory BUDGET.  At the C:\> prompt
             type, "CD \BUDGET" and press <Enter>.

         C.  Insert the master floppy disk (contains the Turbo Budgeter
             program) into the A: drive.

         D.  At the C:\BUDGET> prompt type, "COPY A:BUDGET.EXE" and
             press the <Enter> key.

         E.  Remove the master floppy disk from the A: drive and
             store away for safe keeping.

         F.  At the C:\BUDGET prompt type, "BUDGET" and you will be
             off and running.  It is that simple.  Now let's see
             what we have to do to operate the program.



     Step 3. Operating the program and getting setup
     _____________________________________________________________________

     You are finally ready to proceed with using the program.  It is
     assumed that the program is still up and running from the step 2.

     A.  The first thing you have to do is input your physical ACCOUNTS.
         There are other ways to do it, which you will learn later,
         but here I am going to teach you to do it through the EDIT
         mode.  Please note the menu across the top of the screen.  We
         are going to use the arrow keys to access the various items
         on the menu.

         1)  Using the right arrow key, move across the menu to EDIT.
             When EDIT is high lighted, press <Enter>.  (Shortcut
             method: just press the letter "E" -or- <Alt><E> on the
             keyboard.)

         2)  The computer will present a vertical selection window which
             indicates what you can accomplish in the EDIT Section.  Your
             first task is to add accounts, so do the following:

             a)  Using the up/down arrow keys, move down to "Accounts"
                 and press <Enter> (or just press <A>).

                 A second vertical selection window will appear.  It will
                 overlay the first one.  The "Accounts" will have a flash-
                 ing triangle to its left indicating that you are editing
                 accounts (showing you what you selected and are working
                 on).

                 At this point, you have one of two options: either
                 press the <Enter> key to select "-ADD A NEW ACCOUNT-"
                 or press the <Esc> key to quit.  I hope you will
                 continue.  It is really very simple.

             b)  Press the <Enter> key.  This overlays yet another window
                 on top of the Account Selection window.  "-ADD A NEW
                 ACCOUNT-" has a flashing triangle to indicate that you
                 chose this item.   This new window is the Account
                 Information Window.

                 You are then asked to "Enter the BANKS NAME".  The program
                 will default to "The New Banks Name.."  The Functional
                 Guide which is located in a file named "FUNC.DOC" gives
                 a detailed description of the editing capabilities
                 available.

                 Now, let's return to the description of how the program
                 works.  Remember, the computer had ask for your first
                 BANK'S NAME.

             c)  Type "First National Bank" and ^Y.  (The ^Y deletes from
                 the current cursor position all the way to the end.)
                 Press <Enter>.

             d)  You are now ask to enter the ACCOUNT NAME.  Type "FNB
                 Checking #344455"  and press <Enter>.

             e)  You are now ask to enter the CURRENT TRANSACTION NUMBER.
                 That is, the current check number if it is a checking
                 account.  Type "23453 " (the space " " after the 23453
                 breaks the number string so that 23453 is the only part
                 of the number that will be accepted).  Press <Enter>.

             f)  Now enter the initial amount.  Type "1000 " and <Enter>.


             NOTE: - Please note that the cleared balance, account balance,
                     budgeted deposits and withdrawals do not change after
                     you have entered the initial balance.  That is because
                     you have not yet completed the account entry and thus
                     it has not yet been accepted.
                   - When entering money amounts you can enter the decimal
                     point but it is not required.
                   - If you don't type in the decimal value it is wise to
                     follow the last number with a blank space.  This will
                     cause the number you just entered to be truncated at
                     this point.


             g)  You have now accepted the account.  If you made a mistake
                 go to and select the EDIT section of the program and then
                 select the "Account" and proceed to edit the entry.


             NOTE:  When accepting or backing out of an entry, the Account
                    Information Window is closed and you are returned to
                    the Account Selection Menu.  Now, let's add the next
                    account:


             h)  Move the Account Selection bar down by pressing the down
                 arrow key until "-ADD A NEW ACCOUNT-" is high lighted.
                 Press <Enter>.

             i)  Repeat the steps indicated above.  Continue this process
                 until all your accounts have been entered.  When you have
                 entered all your accounts press <Esc>.  The Account
                 Selection Window is now closed and you are returned to
                 the main menu with the selection bar resting on EDIT.


     B.  Next lets enter your Categories (budgets).

         1)  Once again, select EDIT from the menu.  The Edit Selection
             Window reappears.  Move the selection bar down two positions
             and press <Enter>.

             If you had previously entered budget categories, you could
             now edit them.  Since this is your first time through the
             program, and there are no budget categories to edit, the only
             choices available are "-ADD-A-NEW-CATEGORY-" or <Esc> to quit.

             a)  Press <Enter> to ADD A NEW CATEGORY.  The flashing
                 triangle to the left will be flashing to indicate what
                 you selected but the Category Information window covers
                 it up so you won't see it.

                 The computer will ask you to enter the Category Name.
                 This is accomplished in the same manner the Bank Name and
                 Account Name were entered in the previous steps.

                 Now enter your first Deposit Budget Category "Salary".
                 Type in, "Salary", ^Y and press <Enter>.

             b)  Next you are asked to pick whether this category should
                 be considered a Deposit Category or a Withdrawal Category.
                 Move the selection bar to "Deposit" and press the <Enter>
                 key to select that.

             c)  You are then ask to enter the dollar amount allotted for
                 the year.  Don't use any commas, or dollars signs just
                 decimal points.  Type in the correct amount.

             Your next move will be to set up the default values to be used
             to fill out every transaction entry when the category "Salary"
             is chosen.  In other words, you are entering information which
             will probably be common to similar transactions in the future.
             This will save you having to type in the same information each
             time you select the "Salary" category when making your
             "Salary" deposits.

             d)  You must now choose the account in which the salary will
                 likely be deposited.  (The flashing triangle is your
                 prompt to show you that you are choosing that account.)
                 The following example puts the salary in the appropriate
                 checking account.

                 EXAMPLE:  Move the Account Selection bar to "FNB Checking
                           #344455" (created in the previous step) and
                           press the <Enter> key to select this account.
                           This is the account inwhich Salary deposits
                           will probably be put into.

             e)  You will then be prompted to enter the name of the
                 institution which this deposit will come from.  For our
                 example you may enter "Sam's Widgets, Inc.".

                 Type in: "Sam's Widget's Inc.", ^Y and press <Enter>.

             f)  Your next task is to enter a description.  Let's say you
                 get paid once a month.  Type in, "Monthly Salary Payment",
                 ^Y and press <Enter>.

             The computer now presents the default amount, which is the
             amount allotted divided by 12.  Since this is the correct
             number, press <Enter>.

             g)  The last thing you must do is select the three special
                 transaction's attributes that will be used.   By default,
                 the first through the third attribute is shown to be
                 blank.  You may select others or select the blank.

             h)  Carefully read the budget category information you have
                 entered to make sure it is correct.  As with your account
                 entries, if you made a mistake simply press the <Esc> key
                 to backup and correct the information.

         2)  You may now enter the rest of your budget categories and
             any special attributes you wish them to have.   (In reality,
             it is probably a good idea to enter any of the special attri-
             butes that you may want to have before you enter the budget
             categories.)

         3)  Having finished your budget categories, you are through with
             the category setup.  You may now begin making transaction
             entries.



     Step 4.  Entering your Transactions.
     _____________________________________________________________________

     A.  From the main selection select either the Withdrawal or Deposit by
         moving the selection bar and pressing the <Enter> key or by
         pressing the "W" or "D" key.

     B.  The Category Selection window opens and you are asked to select
         which budget category that this entry should be attributed to.
         Move the selection bar to the correct Budget Category and select
         it by pressing the <Enter> key (there is no one key short cut in
         selecting, although pressing the first letter of any budget
         category will reposition the selection bar to it).

     C.  Choose the account next in the same manner as step B.

     D.  Enter the transaction number.  This has to be a number only.
         Any characters will terminate the number at that spot.  Remember
         that anytime you are entering in data you have special editing
         commands available to you.  These are listed in detail in the
         "FUNC.DOC" file.

     E.  Enter the date of the transaction.  This will usually be the
         computers system date.  If the month and year are correct then
         you only need to type in the day followed by a space or any-
         other non-date related character.

     F.  Enter the amount of the transaction.  This number can be entered
         with or without the "-" sign (it doesn't matter).

     G.  Enter the description of the transaction.

     H.  Select the first special attribute if you need or want one.  If
         you are done and like the way it looks then press ^<Enter>.

     I.  Select the second and third attributes if you want.

     J.  The last item you can select is the "Cleared"/"Not Cleared"
         attribute.  If you choose "Cleared" then you are instructed
         to enter in the date the transaction entry cleared the bank
         account.

     K.  Thats it.  You have just made a full transaction entry.



     E.  ...


     This tutorial is not yet complete.  It will grow and get better as
     time goes on.  I hope this is enough to get you started and get the
     feel of the program and how it works.  Please refer to the other
     filename.DOC files for more detailed instruction.

     Remember that the bottom line of the screen offers you help prompts
     on what the program is expecting and what some of your options are.

     ----------------------- End of TUTORIAL.DOC -------------------------

```
{% endraw %}

## USE.DOC

{% raw %}
```

     G E N E R A L   U S A G E   I  N  T  R  O  D  U  C T  I  O  N
     _____________________________________________________________________

     This documentation when complete will describe in detail, the workings
     of each function available.  This part of the documentation is incomp-
     lete and is currently being worked on.



     F U N C T I O N   U S A G E
     _____________________________________________________________________


          Popup Calculator________________________________________________

          This program contains a "pop up anytime" calculator. It is
          invoked by pressing: <Alt><C>.  The calculator is a simple
          calculator supporting add, subtract, multiply and divide.  This
          calculator also has a feature of exporting its numbers to any
          field that you can enter/edit.

          EXAMPLE:  add $6.20 and $72.34 then save this value to
                    use later.
                    1. press <Alt><C> to invoke the calculator.
                    2. type in the first number to be used: "6.2 " <Enter>.
                       Note the space " " after the number to break the
                       number (incase another number was there).  When the
                       <Enter> key is pressed note the contents of Y was
                       pushed or copied into Z and the contents of X was
                       pushed or copied into Y.
                    3. type in the second number to be added to the first:
                       "72.34" <Enter>.  Note that no space was needed
                       because the two decimals is all that is accepted
                       anyway.

                    4. Now you can do any of the operations by simply
                       pressing the appropriate key.  In our case press the
                       "+" key to add the contents of Z and the contents of
                       Y and put the result into X (You can multiply,
                       divide, etc as you wish).

                    5. Save the value stored in X for latter use.  This is
                       done by pressing ^Q (^Q stands for "Quick save)".
                       This option or saving/restoring fields is available
                       in any field that can be entered/ edited.  To
                       retrieve our number (or string) you simply push ^W
                       (which stands for "Write" ).  The contents saved by
                       the ^Q will be inserted into the field you are
                       currently entering/editing.

                    6. Press <Esc> to leave the calculator.



          Special_________________________________________________________


               Split Transaction Entries__________________________________

               The "split withdrawal/deposit" options provide a special way
               of spliting up a single transaction entry into more than one
               category.  Using this option provides total amount checking
               and mimimal data entry.

               EXAMPLE:  Lets say you went to J-Mart and wrote a check
                         (#1234) for $120.63.  You spent $43.00 for "Garden
                         supplies", $27.50 for "Household Stuff" and $50.13
                         for "Kids Christmas".  You wrote one check for the
                         entire amount of $120.63 but to attach sub amounts
                         to the appropriate budget you would have to make
                         three entries.  Instead of making those three
                         separate withdrawals and running the chance of
                         making an arithmetic error lets use the "split
                         entries" option.

                         1. Select "Special" from the main menu by pressing
                            "S" or <Alt><S>.

                         2. Select "Split Withdrawal" option by pressing
                            "W".

                         3. Fill in the information common to the three
                            split entries to be entered.
                            A. Choose the category (to fill out the
                               default information).
                            B. Choose the account: "Checking".
                            C. Enter the Transaction Number: "1234".
                            D. Enter the Date.
                            E. Enter who the Transaction was with:
                               "J-Mart".
                            F. Enter the total amount: "120.63".

                         4. Now fill in the details of the first part or
                            split of your transaction:
                            A. Choose the Category:
                               "Garden supplies".
                            B. Enter the amount to be assigned to the part
                               of the entry: "43 ".
                            C. Enter a description: "whatever you would
                               like the description to be".
                            D. Choose the first special attribute: "    ".
                            E. Choose the second special attribute: "    ".


                         NOTE:  If at any point you are done with that part
                                you can press ^<Enter> and continue with
                                the next split.  You may also backup by
                                pressing the <Esc> key.


                         5. Repeat step (4.) for the other two parts of the
                            entry.  You will repeat until all of the money
                            has been accounted for or you completely back
                            out.


                         NOTE:  The split info. window shows you how much
                                the total amount transaction was and how
                                much has not yet been used (amount left)
                                along with displaying the previous split
                                transaction entries.



               Clearing Transaction Entries_____________________________

               Clearing entries is another name for reconciling your
               account when you get a statement from you bank.  To clear
               an entry you must first select the "Clear Transactions"
               option from the "Special" menu.  You then move the selection
               bar to the entry you need cleared then press the <Enter> key.
               Then you are instructed to insert the date that the entry
               cleared the account.  The balance shown(near the bottom of
               the screen) is that accounts' cleared balance and it should
               match your bank statement.  If the amount does not match
               then you need to double check your information and/or the
               banks.  Continue to clear the entries until you are done.
               Pressing the <Esc> quits clearing and puts you back to the
               main menu.  For searching options see the next section.



          View____________________________________________________________

               Transactions_______________________________________________

               Viewing entries is a way to quickly look at an entry along
               with its corresponding account and category information.
               Viewing offers the safety of not being able to change any
               part of the entry and convenience of seeing allot of infor-
               mation on the screen at one time.  To view an entry select
               the View option from the main menu by pressing "V" or
               <Alt><V>.  Next press the "T" to view transactions.  You
               can now move throughout all of the entries by using the
               arrow keys and pressing <Enter> to display that entry.

               Searching for an entry is a quick way to find an entry. You
               can search by: Whom the transaction was with, a Description
               of the transaction, the Amount or search for a Transaction
               Number.  You can search for an entry anytime during the view
               (or anytime you are selecting entries) by pressing "S".
               This will invoke the "Search Field" menu where you can
               choose what field or item that you want to search by.  When
               entering the Whom With or Description search field you can
               enter the letters in upper or lower case or any mixture
               thereof.  You can also enter in a subset of anything you
               wish to search for.  You can search for a transaction number
               directly by typing the transaction number.  The search will
               begin from the start of the entries and continue until the
               transaction number is found or the search reaches the end.
               Pressing the <Space Bar> will repeat the last specified
               search but will search from the current position in the
               direction last specified.



     P R O G R A M   S T A R T U P
     _____________________________________________________________________


          Loading Different Data Sets_____________________________________

          When starting Turbo Budgeter you simply type BUDGET on the
          command line followed by pressing the <Enter> key.  There is one
          other thing that could have been typed on that same line.  This
          other item is the filename you wish to use for your data.  To
          load or use a different data file, you must specify the filename
          on the command line when starting the program.  If no filename
          is given or an invalid filename was given then the program will
          default to "BUDGET.DAT".  This feature is useful when viewing
          previously purged data (covered in the next section) or when
          you have several people using the program and they want to be
          separate from one another.

          EXAMPLES:
              BUDGET B:BUDGET.DAT - Indicates data is on drive B and
                                    that its filename is "BUDGET.DAT".
              BUDGET \DATA\JOHN.BUD - Indicates data is in subdirectory
                                    "\DATA" on the current drive and that
                                    the filename is "JOHN.BUD".
              D:\>C:\ACCOUNTG\BUDGET A:\BUDGET\SUSAN\1990.DAT - This means
                                    you are on the D drive and you are
                                    invoking the program from the C drive
                                    under subdirectory "\ACCOUNTG" and
                                    loading the data file from the A drive
                                    under subdirectory "\BUDGET\SUSAN"
                                    with the filename of "1990.DAT".


          Accessing Purged Entries________________________________________

          This section deals with accessing previously purged transaction
          entries.  When transactions are purged they are loaded into a
          separate file named: "BUDGET.xxy" where xx is the last two
          digits of the current year and y is the backup letter (first
          backup letter is "A" and the last possible backup letter is "Z").
          The varying backup letter from A-Z is used so you can purge
          cleared entries bi-weekly or monthly.

          EXAMPLE:  If you used the program for all of 1989 and at the
                    start of 1990 you purged all of your cleared, 1989
                    entries, the program would produce a file named:
                    "BUDGET.90A".  To run the program and load the purged
                    1989 data file you would type the following at the DOS
                    system prompt: BUDGET BUDGET.90A <Enter>.

                    If you used the program for all of 1989 and you purged
                    your cleared entries in June of 1989 and at the end
                    of 1989 you would have two data files name: "BUDGET.89A"
                    and "BUDGET.89B".  The first would contain all cleared
                    entries up through the June date and the last would
                    include those cleared entries up through the ending
                    1989 date.  You can load either of these data files by
                    following the methods described above.

     ---------------------------- End of USE.DOC -------------------------

```
{% endraw %}

## UTILITY.DOC

{% raw %}
```

     I N T R O D U C T I O N
     _____________________________________________________________________

     Welcome to some simple but specialized utility programs.  Listed
     below is a description of the utility programs.  I hope you will
     find these programs easy to use and most of all useful.  Please
     see the "FUNC.DOC" file on conventions used, and a description of
     how these programs behave.



     C O N V E N T I O N S
     _____________________________________________________________________

     <> - These are used to bracket an actual key on the keyboard to be
          used/pressed.
          EXAMPLES: <A>   - this would be the "A" key on the keyboard.
                    <Esc> - this would be the "Esc" key on the keyboard.

     ^  - This denotes holding down the <Ctrl> key and pressing the
          following letter.
          EXAMPLE:  ^S - hold down the <Ctrl> key and press the <S> key
                    at the same time.

     <Enter> - This is the same key as the <Return> key.

     () - Default values are and can be enclosed in the parentheses.
     () - Comments/notes

     [] - Options

     /x - These are command line switches used to give the DDIR.COM
          and D.COM programs their instructions.

     CGA - Color Graphics Adapter.

     Snow - the noticeable fuzzy effect found on older CGA adapters.

     Selecting - the CopyDisk, DirLabel, and Printer programs are menu
          driven.  Selections are made by moving the Highlighted
          selection bar with the arrow keys and pressing the <Enter> key
          to select.  CopyDisk and DirLabel can both select directly by
          pressing the corresponding Capitalized/High lighted letter.

          NOTE: for more information on selecting/entering/editing please
                reference the functional guide ("FUNC.DOC").

          Moving:
              Up Arrow key, ^E - moves one line up.
              Down Arrow,   ^X - moves one line down.
              Page Up key,  ^R - moves one page up.
              Page Down,    ^C - moves one page down.
              Home key         - moves to the top selection shown.
              End  key         - moves to the end selection shown.
              ^Page Up key     - moves to the very top selection.
              ^Page Down key   - moves to the very end selection.




     P R O G R A M   D E S C R I P T I O N S
     _____________________________________________________________________


     CopyDisk.EXE - Multiple Disk copying program.  The program reads in
          an entire 360k floppy disk once and then you can make as many
          copies as you want without having to re-read the source disk
          each time. If you have two floppy drives then you can oscillate
          writing between both.  This program also has a verify option where
          the disk is re-read after a read/write to verify that what was
          read/written matches byte for byte.  You may also set the number
          of retries that the copy program will attempt before an error
          occurs.  To avoid CGA snow put "/S" on the command line.

          EXAMPLE:  COPYDISK A: B: /S <Enter>.

          ( Needs: 100% IBM PC/AT compat., 400k free RAM and only works on
            360k floppies ).


     D.COM - a no "\" change Disk/Directory program.  This program enables
          you to change to a specified disk and subdirectory quickly and
          without having to hunt the keyboard for the illusive "\" key.
          Now you won't have to type "\"  or enter long commands with path
          information, like "CD \name1\name2\name3".  With D, you can move
          from any drive\subdirectory to any other drive\subdirectory simply
          by typing commands such as "D A: INSTALL", "D C: DOS", "D UTILITY"
          or "D UTILITY DISK".  Run the program without anything on the
          command line and the instructions on how to use this program will
          be displayed.

     DDir.COM - This is a Date DIRectory service.  This program searches
          for files according to an optional user specified date range.
          The program can search all subdirectories or the default one.
          The user can optionally change the found files date and time.
          You can search before a date, after a date, search a date range,
          or simply use as a file find, ignoring the date.  For
          instructions at the DOS prompt type: A> DDir /h <Return>.

     DirLabel.EXE - This is a program to print out a disks entire directory
          in small compact form.  The program will print all files in all
          subdirectories (it will use as many labels/sheets of paper as
          needed).  The user can specify the disk drive, printer port, size
          of paper/label to be used, and the top/ending spaces for each
          label.  For instructions, bring up the program and press the
          "I" key for program Info.  (Program requires 128k RAM, dot matrix
          printer, and a IBM PC/AT etc. compatible computer).



     N O T E S
     _____________________________________________________________________

     DOS PATH:  If you have a hard disk then place any or all of the above
          utilities/files in the subdirectory that has your DOS PATH set
          to it. This will allow you to execute any of these programs from
          whatever subdirectory you are on.

          EXAMPLE: In your AUTOEXEC.BAT file, have the statement
                   "PATH C:\Dos;C:\Util", or whatever subdirectory(s)
                   you have placed these files in.


     HARDWARE REQUIREMENTS: "D" and "DDIR" will run on any MS-DOS version
          2.0 machine with as little as 64k of RAM.  The COPYDISK and
          DIRLABEL require true IBM PC/XT/AT compatibles.  The programs
          have been verified to be network compatible and will not hang
          the system.



     D I S C L A I M E R
     _____________________________________________________________________

     This software is Copyrighted (c) by Garth Braithwaite, 1987, 1988,
     1989 with all rights reserved.  Please feel free to make copies of
     these programs and pass them along to friends for their evaluation.
     These programs carry no written or implied warranties.



     P R O B L E M S
     _____________________________________________________________________

     If you encounter problems with any of these programs or if you simply
     would like to comment on anything please write to the address ment-
     ioned below in the registration section.  To help in trouble shooting
     please specify:  The program you are using, the version number, the
     type of machine you are running, the specs on that machine (type of
     display, memory, disk drives), the DOS version, TSR's you were
     running, any messages, and the nature of the problem along with
     anything that seems odd or out of place.



     R E G I S T E R I N G
     _____________________________________________________________________

     Any feed back or comments on any of these programs or future programs
     you would like to see will be welcomed and greatly appreciated.  These
     programs have been created for you to use and enjoy.  To be able to
     support you and these programs you are encouraged to register.  Regis-
     tered users are entitled to receive a free update, future updates at a
     very minimal cost, new programs, phone support and the 25% Referral
     Program (see next section for details).

     To register please include: your name, address, phone, what program(s)
     you are using, version number(s), any comments, and the amount that
     you feel these programs are worth (any comments and/or monetary
     support will be greatly appreciated).  A sample registration form is
     included in a file named: "REGISTER.FRM".  Simply copy this to your
     printer, fill in the blanks, and mail to the address given below.  To
     print the sample registration form turn your printer on, and type the
     following DOS command: "COPY REGISTER.FRM PRN <Enter>".  If you need
     an invoice for a purchase order then type "COPY INVOICE.PO PRN
     <Enter>".  Thank you for your support.

     Send comments and registration fees to:

     Garth Braithwaite
     2045 W.  1245  S.
     Syracuse, Utah  84075



     R E F E R R A L   P R O G R A M
     _____________________________________________________________________

     For a contribution of $15 or more you will be enrolled into the
     Referral Program.  This will entitle you to receive a 25% finder's
     fee for all future contributions received for those "Utility Programs"
     that reference you.

     EXAMPLE:  1. You introduce these utilities to a friend.
               2. He finds he likes the program and makes a donation.
               3. We check our user database for the name your friend has
                  specified as the person who introduced him the utilities.
               4. If that name is yours, I'll send you 25% of your friend's
                  donation!  Whatever the amount.  It's that simple.


     When sending in your registration form, be sure to include the full
     name of the person who introduced you to these utilities.

     -------------------------- End of UTILITY.DOC -----------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1859

     Volume in drive A has no label
     Directory of A:\

    READ     ME       2328   2-18-90   4:00a
    WHATS    NEW      3485   2-18-90   4:00a
    BUDGET   DOC     24719   2-18-90   4:00a
    TUTORIAL DOC     18061   2-18-90   4:00a
    FUNC     DOC     12673   2-18-90   4:00a
    USE      DOC     12890   2-18-90   4:00a
    GROUP    DOC      1823   2-18-90   4:00a
    REPORTS  DOC     21010   2-18-90   4:00a
    DEMO     BAT        18   2-18-90   4:00a
    DEMO     DAT     42130   2-18-90   4:00a
    BUDGET   EXE     98448   2-18-90   4:00a
    INVOICE  PO       1034   2-18-90   4:00a
    REGISTER FRM      1637   2-18-90   4:00a
    UTILITY  DOC      9581   2-18-90   4:00a
    COPYDISK EXE     28351   2-18-90   4:00a
    D        COM      3654   2-18-90   4:00a
    DDIR     COM     15574   2-18-90   4:00a
    DIRLABEL EXE     37637   2-18-90   4:00a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1464   4-17-90  12:36a
    FILE1859 TXT      2665   4-17-90   2:03p
           21 file(s)     339220 bytes
                           10240 bytes free
