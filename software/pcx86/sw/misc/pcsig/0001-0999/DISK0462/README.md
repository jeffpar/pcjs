---
layout: page
title: "PC-SIG Diskette Library (Disk #462)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0462/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0462"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CK SYSTEM"

    Use this personal and household financial mangement program to keep a
    close eye on income and expenses. You worked hard to get it -- know
    what you're doing with it!
    
    CK tracks your cashflow and financial obligations in checkbook form and
    prints checks and many types of reports. Repeating checks can be
    printed each month by changing the check number and date and re-printing
    the checks. Keep an orderly and accurate check register/deposit record.
    Prepare a month-by-month year-end summary of all your income and
    expenses for up to nine separate accounts. Draw up bar charts on
    income/expenses. Detailed documentation is provided for the new user.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CK.DOC

{% raw %}
```
.op
.mt 0
.mb 0
.RR L!----!----!----!----!----!----!----!----!----!----!----------R
















                                   #########
                                 ####      ####
                                ####
                               ####
                              ####                    ####           tm
                              ####                    ####   ### 
                               ####                   ####  ###
                                ####                  #### ###
                                  ###########         #######
                                                      #### ###
                                                      ####  ###
                                                      ####   ###
                                                      ####    ###





                  CK A Program To Report On Your Income And Expenses

                  CK Program and Manual Copyright 1985, 1987 by 
                       David M.  Alexander



                             NO WARRANTY

    THERE ARE NO WARRANTIES OF ANY KIND ON CK, INCLUDING, BUT NOT
    LIMITED TO NO WARRANTY OF FITNESS AND NO WARRANTY OF
    MERCHANTABILITY.  WHEN YOU USE CK, YOU USE IT AT YOUR OWN
    RISK.  IF ANYTHING GOES WRONG, YOUR NUMBERS DON'T COME OUT
    RIGHT OR WHATEVER, IT IS YOUR RISK NOT MINE.  IF YOU DON'T 
    AGREE TO TAKE THIS RISK AND RELIEVE ME OF ANY LIABILITY, THEN
    DON'T USE CK.  THIS PROGRAM "AS IS".  AT THIS PRICE, IF ANYTHING 
    GOES WRONG, THE RISK IS YOURS.  IF ANY PART OF THE PROGRAM IS 
    DEFECTIVE YOU, NOT I, ASSUME THE ENTIRE COST OF SERVICING
    OR REPAIR.


    No one has ever told me that CK did anything
    "bad" or gave the wrong numbers, but I don't want there to be
    a first time at my expense.  -- David M. Alexander

             print by telling your word processor to
             print the file CK.DOC or by typing
             A>COPY CK.DOC  LPT1: [return]

                  CK is a Trade Mark of David M. Alexander

                  MS DOS is a Trade Mark of Microsoft, Inc.

       This manual is copyrighted by David M. Alexander 1985, 1987, 1988 

             All  of  the programs beginning with the  letters  CK  and 
       referred to in this manual are copyrighted by David M. Alexander 
       1983.   No  part of this manual or these programs may be  copied 
       without the written permission of David M. Alexander.

             CK tm  owned and written by David M. Alexander
                                           2600 El Camino Real #506
                                           Palo Alto, CA  94306
                                           415-857-9233

       NO WARRANTY -- There is no warranty of  merchantibilty,  fit-
       ness  or any other warranty with this program.   By using the 
       programs,  user assumes all risks of use.   In short, if your 
       numbers  come  out  wrong,  only you  and  not  Alexander  
       are at risk.  Registration Fee: $25.00







                                                          i


                      TABLE OF CONTENTS --- PAGE NUMBERS                 

              SECTION I -- BASIC INFORMATION  * * * * * 1 - 6

               (A) Overview Of The Program;  (1 - 2)
               (B) Hardware Requirements;    (3)
               (C) Why I Wrote This Program; (4 - 6)


              SECTION II -- GETTING READY TO RUN CK * * 7 - 16

               (A) General Rules;                        ( 7 - 10)
               (B) Copying The Programs Onto Your Disks; (11 - 14)
               (C) All About The Main Menu;              (15 - 16)

                 ---- Shareware CK.DOC ends here ---

              SECTION III -- RUNNING CK THE 1ST TIME  * 17 - 28

               (A) Setting Up Your Income & Expense Codes; (17 - 19)
                   Sample Set Up Session;                  (20 - 24)

               (B) Listing Your Checking Accounts;         (25)
                   Sample Listing Session;                 (26 - 28)


              SECTION IV -- EVERYDAY USE OF CK  * * * * 29 - 81

               (A) Entering Your Check Stubs & Deposits;      (29 - 45)
                       Printed Audit Trail --------------- 29
                       Which Account To Use -------------- 29
                       Biggest & Smallest Check Numbers -- 30
                       Add Data To New Or Old Report? ---- 30
                       Name Of File To Hold Data --------- 30
                       Beginning & Ending Dates ---------- 31
                       Erasing An Entry ------------------ 38
                       Data Entry Summary ---------------- 38
                       Reconciling With Bank Statement --- 38-45

                   Sample Entry Session;                      (46 - 52)


                                                          ii
                            TABLE OF CONTENTS


               (B) Looking At Entries & Correcting Typos;     (53)
                   Sample Correcting Session;                 (54 - 58)

               (C) Creating Your Reports;                     (59 - 64)
                   & Printing Checks
                   Sample Report Creation Session;            (65 - 68)

               (D) Year To Date Report Of Income & Expenses;  (69 - 71)
                   Sample Year To Date Session;               (72 - 75)

               (E) How To Print Your Reports;                 (76 - 78)

               (F) Adding Several Files Together;             (79)
                   Sample Adding Session;                     (80 - 81)


              SECTION V -- PROGRAM DETAILS  * * * * * * 82 - 89

               (A) How CK Works;             (82 - 85)
               (B) How To Break The Program; (86 - 89)


                                                          iii


                         READ THIS FIRST

          Before you do anything else, PRINT this manual.
          Next, before you do anything else, READ the manual.

          To use the program you: first, have to set up your income
    categories; second, you have to set up your checking account
    list; third, you have to enter income and expense data; 
    fourth, you have to create your reports and fifth you have
    to print your reports.

          Codes for deposits always end in a slash, e.g. fees/ or
    salary/ or int/ for fee, salary or interest deposits.  Codes for
    debits never end in a slash.  Thus, RENT may be the code for
    rent you pay and RENT/ can be the code for rent you receive.

          The best way to print your reports is by telling your
    word processor to print the CK report disk file.  Another way
    to print your reports is to type A>copy 1-89.cat LPT1
    to print the file 1-89.cat.
          
          If you have a hard disk, put the CK programs in their
    own subdirectory and run the program from the hard disk.

	  When entering data, if you are asked for a check number
    for an entry for which you have no real check number, e.g. a
    bank charge, bank interest, deposits (if your deposit slips
    are not numbered) just make up a number---9000, 9001, whatever.

	                  !! IMPORTANT !!

	If you don't already have one, you MUST create a 
    file called CONFIG.SYS on your boot disk.  Here's how:
    C:\> COPY CON: CONFIG.SYS
    FILES=20
    BUFFERS=20
    ^Z  [CONTROL Z THEN RETURN]
         one file(s) copied
     C:\>

	Now, REBOOT (press Control And ALT and DEL keys all at once) 
     your system so that DOS can read the CONFIG.SYS file.

	If your screen cannot be read, you may be using a Leading Edge
    with a monochrome screen or you may have a monochrome screen
    attached to a color monitor.  Go to the section of the manual
    dealing with color setup and set the colors to Bright White (15)
    on Black (0).


                                                       iv

        
                              WHAT'S NEW

	Starting with Version 3.13 I am including a sample income
     and expense code file called SAMPLE.  If you want, you can
     press C on the main menu then D on the Checking Accounts menu
     to Display the Sample Checking Accounts.  Next you can press
     E on the Main Menu and D on the Expense Code Menu to display
     the income and expense file named SAMPLE.  You can modify
     and use this file if you like.  If you want to rename it,
     be sure that you rename every file on the disk with the
     word SAMPLE as part of the file name.
     
          Beginning with Ver. 3.14, CK will display your income and
     expense codes while you enter your check and deposit data.  Now, 
     if you have a code PHONE for telephone expenses and if you type:
     45 phne, that is you make a typo, CK will notice the typo, will
     tell you that it did not find your code 'PHNE', and then it will
     print a list of your income and expense codes starting with the 
     first code beginning with the letter "P".  

          You can press return to cycle screen by screen through all
     of your codes or you can press escape (esc on most keyboards) to
     return to data entry.   If you enter a code 20 YYY and you have no
     codes beginning with the letter "Y", CK will display your codes from
     the beginning.  

          If your list of codes which appear in the input module when you 
     enter an unknown code are not in alphabetical order, then you need to 
     cause CK to create a new .ABV file.  

          Here is how you do that:  Press "E" on the main menu to
     display your Expense codes.  When that module comes up on screen,
     press "D" to display your codes.  Enter your expense code name,
     EXP or whatever.  Your codes will appear on screen.  Now, press
     "C" to change a code.  Enter a number between 1 and 70, it is not
     important which one.  "1" is fine.  Press Return.  Next, press "Q" 
     to quit the module.  CK will automatically create a new .ABV file.  
     From now on your codes will appear alphabetically on the screen if 
     you enter an unknown code in the enter checking account data module.

        Beginning with Ver. 3.17 I have added several features/changes.
     In the Enter Data Module (D on the Main Menu) I have simplified the
     mechanism to change an entry.  Previously, if at the Name? line, the 
     user would type /1 to go back to the first field, the check number.
     Now the user does not need to type a slash.  You need only type 1 
     followed by a return and you will be given the chance to change
     the check number.  

          If you type LOOK in the Data Entry module to look at a previous
     entry, you can additionally change the account number as well as 
     all the other attributes.

                                        v

          The reconsile module now works a little differently.  If you
     have broken a check or a deposit into several entries, for 
     example 1500.1, 1500.2 and 1500.3 for three entries on deposit
     slip 1500, the reconsile module now adds all three up auto-
     matically, displays the total, and gives you the opportunity
     to individually review each of the three entries for accuracy.
     
          All of the menus have been modified for greater clarity.
     The menus listed in the body of the manual may no longer match
     the screen displays.  For example, "X" is only used now to exit
     to DOS.  Everywhere else, "Q" is used to Quit a portion of a 
     module.  Thus, you Q to Quit the reconsile menu and only X to 
     Exit directly to DOS.     

	Starting with Version 3.13 I am including a sample income
     and expense code file called SAMPLE.  If you want, you can
     press C on the main menu then D on the Checking Accounts menu
     to Display the Sample Checking Accounts.  Next you can press
     E on the Main Menu and D on the Expense Code Menu to display
     the income and expense file named SAMPLE.  You can modify
     and use this file if you like.  If you want to rename it,
     be sure that you rename every file on the disk with the
     word SAMPLE as part of the file name.
     
        Beginning with version 3.18 you can browse through your checks
     in the Look module.  Press "L" at the main menu.  Display some
     checks.  Press "C" to change a check.  Give the check number to change.
     When the check is displayed, a space bar will display the next check
     in your file.  A "P" for Previous will display the previous check
     in your file.
   
        Also starting with Version 3.18, the reconsile portion of the 
     Data Entry module will show you if you have listed the check
     as Cleared or Uncleared.  Thus, you can "browse" through your list
     of checks indicating whether a check has cleared or not cleared, and
     you will be able to see how you answered that question the last time
     it was asked.

        Ver. 3.19 has several major improvements:

          (1)   Entries  with decimal points:  If your last check was
    was 2000 and you press ENTER at the Check Number question, CK will
    automatically enter 2001 as the current check number.  Sometimes you
    will break a check into pieces, for example, one check may cover
    principal, interest, taxes and insurance and you will want to break
    it into four different entries, say 2010.1, 2010.2, etc.  

        If you  have  manually entered  check number 2010.1, then the 
    next time you get  to  the check number question, ENTER will 
    automatically bring up  2010.2.  If you are at 2010.9, ENTER will 
    automatically bring up 2011.1.

                                        vi

          (2)  Copying the amount and code:  At most questions, pressing
    ENTER or RETURN will automatically copy the entry from the last
    check into this one.  This does not happen at the Check Amount &
    Code question.  If you want to duplicate your Check Amount & Code
    entry, you can now do so by pressing a  "Control C" (C for Copy) 
    while at the "Amount & Code" question.   A  "heart" symbol will 
    appear on the screen.  Press ENTER and the amount and code from 
    your most recent entry will be copied into the  current entry.  

          (3)   Tagging Entries:  You may want to "tag" certain checks
    and deposits for copying to a separate file.  For example, you may
    use the Group entry to classify all your checks or deposits as
    taxable, non-taxable, deductable and non-deductable.  But, at the end
    of the year, you might want to create a separate file of all of your
    auto related expenses.  To do this, you can type "D" at the Main
    Menu, call up the file of checks you wish to work with, and use 
    the LOOK function to browse through the file of checks.  Each time
    you see an auto related check, for example, insurance, gasoline,
    repairs, tires, etc., you can "Tag" that check to be copied
    to a separate file where it can be sorted into detailed reports.

         You "tag" an entry by calling up the Group question dealing
    with that check or deposit.  You can go back to the Group question 
    by typing  "LOOK" then entering a check number (e.g. 2010).  That
    check will be displayed and can be changed.  Press "4" for the Group 
    entry.  Now press a Control T (T for Tag).   A  "paragraph"  symbol 
    will appear on screen.  Press ENTER.   The Group entry will now appear 
    in inverse video.  To untag, repeat the process.  Use the space 
    bar and "P" to browse forward and backward through your file, tagging 
    checks and deposits as you go.

          When  you  quit the program, you will be asked for  a  file 
    name  to write the tagged entries to.  If you press  ENTER without
    giving a file name,  tagged entries will be written to a file called 
    "JUNK".  If you give the  name of an existing file, you will be 
    prompted to add these tagged entries  to the end of that old file.  

          The file of tagged items which you create can be dealt with 
    like  any other CK file.  It can be sorted, added,  edited,  etc. 
    just like any other CK file which you created. 

          When  you  quit  the "Data Entry"  module,  all  tags  are 
    automatically removed from your original file.


		LISTING OF SELECTED ERROR MESSAGES

	Error #7: Out of Memory.  Your file was too big to fit into
     the memory in  your machine.  Remove some memory resident programs 
     and/or add more memory to your computer.

        Error #9:  This may occur if a record in your CK data
     file has been "trashed" by your system.  If strange garbage 

                                                     vii

     values get entered into one of the fields in the trashed record
     they can be out of range of what the program expects to see and
     thus may generate this error.   If this happens go to your backup
     copy of your .CKD data file.

        Error #14:  Similar to Error #7 above.

        Error #24:  Device Time-out.  Your computer has tried to send
     data to a printer port and did not receive an acknowledgement within
     the specified time.  Try setting the DOS MODE command to ignore
     time-out errors.  ( Example C:\DOS> MODE LPT1: 132,,P ).

        Error #25 or #27:  Device Fault.  This usually means that your 
     printer ran out of paper or out of ribbon or was turned off.  
     Essentially, it means that the printer told the computer that it 
     could not continue to function.

	Error #57: Device I/O error.  Again, a hardware problem has
     occurred usually in connection with communication with either a
     disk drive or a printer.

        Error #61: Disk full.  Delete some files to make more room
     on the disk.

	Error #63:  This error occurs when some of your data in a disk
     file has been trashed by your machine.  The program expects to find
     a particular value in a file and the value is instead a zero 
     because the record was damaged.  This zero is unacceptable to the
     program and it generates a "bad record number" error.  Use the
     back-up copy of your file.

        Error #67:  Too many files open.  Again, this will occur 
     if you do not create a CONFIG.SYS file in the root directory
     which file contains FILES=20 and BUFFERS=20.

        Error #68:  Hardware is unavailable.  E.G., you tried to write
     to a printer on LPT2 and you don't have an LPT2.

	Error #71: Disk drive not ready.  The drive door is open
     or there is no disk in the drive

        Error #72:  Disk error.  Something is wrong with the disk.
     It may have bad sectors or not be formatted or the like.

        Error 74:  You have given the wrong disk drive letter for
     the location of your CK files.  For example, if you have only 
     drives A, B and C and you gave CK the letter D as the drive where
     your CK files would be stored, you would get this error.  Solution:
     erase your file DISKDRVE.  Then, when asked, give CK the proper 
     disk drive letter.

                                                  viii


              CREATING A SUBDIRECTORY ON YOUR HARD DISK
                              RUNNING CK

          A>C: [return]
          C>cd \ [return]
          C>prompt $p$g [return]
          C:\>md ck [return]
          C:\>cd ck [return]
          C:\CK>copy a:*.* [return]  [copies all ck files on ck prog disk]
          C:\CK>ck [return]  [runs the ck program]
          Disk Drive To Store Your CK Files?
          C  [return]


                                    ix
.RR    L--!----!----!----!----!----!----!----!----!----!-------------R





                                  SECTION 1   

                             WHAT'S IT ALL ABOUT?
        

                        (A)   OVERVIEW OF THE PROGRAM

                                WHAT CK tm  DOES

          Ck  keeps  track of all of the money that you receive  and 
       all of the money that you spend.  
           
             You tell CK the money you spent and received,  the category 
       of expense, the date you spent it, who you paid it to, the check 
       number, if you want, a narrative description of what it was 
       for and a cross reference group, like "tax deductable".  

             CK will prepare a report telling you
                  
                  (1) how  much you spent on each item in your list  of 
       expenses  and how much you received in every category of income.  

                   (2)  how  much you paid any person during any  given 
       month or quarter or year.

                   (3)  how  much you spent and received on  any  given 
       date; 

                   (4)  what your balance was on every day  during  the 
       period; 

                   (5)   how much you spent all year on everything  and 
       how much you received all year from everyone.

                   (6) how  much  you spent for any group  of  expenses 
       like tax deductable automobile or all tax deductable expenses.

             CK  prepares  written reports arranging  your  income  and 
       expenses  by  

                  check number
                  date
                  payee name
                  amount
                  category of income and expense 
                  cross reference group
                  year to date summary
                  stacked bar chart of income and expenses

                                   1

                             Sec. 1  A Overview -- What CK Does
             
             CK can print checks directly on the printer.

             Each  report  can  keep  track of  up  to  nine  different 
       checking accounts. 

             Each  report subtotals all the the checks and deposits  in 
       each category.

             If you want,  you can add your monthly checks and deposits 
       together into one big quarterly or annual file and can sort that 
       file  by payee name,  expense category,  amount,  check  number, 
       cross  reference or date,  thus producing a  complete,  detailed 
       breakdown of each check and each deposit for the entire year.

             CK  labels  each  report  entry  to  show  which  checking 
       account,  (e.g.  General,  Trust,  Personal, etc) each check was 
       written on.

             CK  will prepare a "bar" chart of your income and expenses 
       with  dollars along the vertical axis and categories  along  the 
       horizontal axis.   These charts can be manipulated to produce an 
       annual  chart  with dollars along the vertical axis  and  months 
       along the horizontal axis.

             Each  check takes up 53 bytes and each narrative  descrip-
       tion takes up 64 bytes.

                                   2

               Sec. 1  A Overview -- What CK Does











                       (B)  HARDWARE REQUIREMENTS


       MS-DOS Operating System and two disk drives.

       256 K RAM

       If  all of the CK programs are saved on one disk,  they take  
       up about  276,000 bytes of disk storage.  Because of the room
       taken up by the CK.DOC file, you may need to delete CK.DOC
       from your working disk in order to run the program from a 
       floppy disk.

       Most of the modules are .TBC, Turbo Basic Chain modules and 
       are called by typing CK which loads the CK.EXE file.

       CK  consists  of  16  separate  programs called from the Main
       Menu.  





















                                   3

                        Sec. 1  B  Overview --  Hardware Required




                             SPECIAL REQUEST  


	  Please, PLEASE, learn how to use your computer.  I get calls
    from people who don't know how to copy files; who don't know what
    a subdirectory is, leasewise how to use one; who fill up their disks
    and then wonder why the program won't work when the disk is full;
    who don't know the difference between DOS, CK and WordPerfect;
    essentially, who don't know the first thing about how to use their
    computer except how to turn on the power.  And they think that they
    have a right to expect to be able to use the machine with that
    level of knowledge!!!  They do not.  You do not.  Your computer is not 
    a toaster.  It takes training to understand it.

           If you are going to use your computer for business it is your
    obligation, your duty, to learn how to use it.  If you call me with
    a problem which turns out to be that you don't understand how to
    copy a file or how what the difference is between the root 
    directory and the CK subdirectory, you will get no sympathy from
    me.  It is your JOB to know these things.  So, bite the bullet and 
    buy a book; buy a VCR Tape; go to a class; hire a kid from the
    computer store to train you, but learn the basics of DOS!!!




                  PAGES  5 & 6 INTENTIONALLY BLANK

                                 4

                        Sec. 2  A   Getting Started  -- General Rules






                                  SECTION 2

                               GETTING STARTED


                  (A)  BASIC ASSUMPTIONS MADE IN THIS MANUAL

           GENERAL RULES FOR USING YOUR COMPUTER WITH THIS PROGRAM


             It  is  probably  a  good idea to make  clear  some  basic 
       assumptions  about how your computer works.   I will put all  of 
       them  here so that I don't have to repeat them in  each  chapter 
       and so you don't have to re-read them in each chapter.

             First:  CK doesn't care if you type in UPPER CASE or lower 
       case.   Except for the "Special Description" lines, CK automati-
       cally translates lower case entries to upper  case.   Therefore, 
       all your file names,  your disk drive designations,  Y's and N's 
       for YES and NO,  category codes,  payee names, everything except 
       special descriptions, are always converted to upper case.  If it 
       is easier for you to type everything in lower case,  please feel 
       free to do so.

             Second:   Throughout  the manual I will tell you to  press 
       certain keys and I will give examples of things to type.  I will 
       give you these instructions by printing that letter within quotes.  
       For example, if I want you to press a "P" I will say Press "P".
       Don't type the quotes, just the P.

             Third:   The  control key is usually at the lower left  of 
       the  keyboard and is often labeled "CTRL".   The control key  is 
       similar  to a "shift" key.   If you press a key on a typewriter, 
       it  will print a lower case letter.   If you hold the shift  key 
       down  and at the same time press a key,  it will type  an  upper 
       case letter.

             The control key works the same way.   If you hold it  down 
       and at the same time press another key, the keyboard will send a 
       special  code to the computer.   If I want you to hold down  the 
       control key and at the same time press a P,  I will say: Type a 
       control "P".

             MS-DOS uses certain conventions with control keys.  
       If you  are typing an entry and you make a mistake, press the 
       backspace key and it will move the cursor backwards and erase.

                                   7

                        Sec. 2  A   Getting Started  -- General Rules

           If  you are in the middle of a program and you want to get 
       back  to the operating system right away,  you can type Control-
       ALT-Delete or a Control-Break BUT this is NOT a good idea.  You 
       could lose data.  Only do this in an emergency!!  The better 
       practice is to press the menu entry that allows you to exit the 
       program, usually X at the menu. To get to the menu, answer
       questions by pressing ENTER.  Each ENTER usually "returns" you to
       the previous question.

                    If   you don't have a word processing program  and 
       you   want to  print  your reports,  you can copy the  file  to 
       your printer.  For example, C:\CK>COPY 1-87.CAT LPT1:
       will cause the file 1-87.cat to be printer on your printer.

             Fourth:  To be "in DOS"  means  that  the operating system 
       is ready  to  take  your commands.   You know it is ready because 
       you will see the letter of the drive your computer is using and 
       a pointy bracket  called a  "prompt" on the screen.   If you see:  
       A>  or B> or C> or the like, then your operating  system  is ready 
       for you to give it a  program  name, like CK [Return] or copy.

             If you have a hard disk, use the PROMPT command to be able 
       to see what subdirectory you are in.  For example:
       C>PROMPT $P$G [return]
       C\>

             If you have a hard disk, create a subdirectory called CK
       and put all your check files into it.  At the C:\> type:
       C:\>MD CK [return]
       C:\>CD \CK
       C:\CK>   
       C:\CK>copy a:*.* [return]

             NOTE: if you will run CK from a floppy disk, copy the program
       disk to another floppy, and DELETE CK.DOC from the working copy.
       This is necessary to make room on the working disk.


                                   8

                        Sec. 2  A   Getting Started  -- General Rules

             Fifth:   Every  place  in  the program where you  have  to 
       answer a question and your answer will always one character long 
       like a Y or an N  those  are entered  by just typing them.   You 
       don't have to press  ENTER.  

             Sometimes,  the number of characters you will type  cannot 
       be  known in advance by the program.   For example,  if you  are 
       asked  for a file name,  that name could be anywhere from one to 
       eight characters long.  In that case, you will have to type your 
       answer  and  then press ENTER to let the program know that  you 
       have completed your entry and that it can now proceed.

             Sixth:   Filenames:   CK  allows you to pick your own file 
       names for your data files.  It is usually helpful to pick a name 
       that describes your data.   If you have a file of checks for the 
       month  of  April 1987,  then a good file name would be  4-87  or 
       APRIL87.  If these checks are only for your trust account then a 
       good name would be TR4-87.  

             The  file name CANNOT be more than eight  characters  long 
       (ABCDEFGH)  and  it  CANNOT have a decimal  point  in  it.   For 
       example  ABC.DEF is not a legal file name in CK.   You can't  do 
       this  because CK automatically puts the extension .CKD after the 
       name of every file of checks.

             Your file names CANNOT have slashes  or backslashes in 
       them  because  DOS uses these characters.  If  you include a slash 
       in your file name, DOS you will  generate an error.  Also, Your 
       file name CANNOT have SPACES in it!

             Seventh:   CK sees all money spent, that is all checks, as 
       positive numbers and all money received,  that is all  deposits, 
       as  negative  numbers.   If you ever see a negative number as  a 
       check  amount,  that means that CK is treating that entry  as  a 
       deposit.  Codes for Deposits ALWAYS end in a slash, e.g., SL/ for
       salary received.

             Last:   If you want to sort  a file but can't remember your 
       file name,  type in  a garbage name  in  response  to the 
       file name  question  and  CK will display your list of files.  If the 
       file you want is not on  the list, Press ENTER.  When in doubt, 
       press ENTER.  In most of the modules, a return  to a question 
       will "return" you to the previous question or to a menu which will 
       allow you to leave the module. 

                                   9

                        Sec. 2  A   Getting Started  -- General Rules




                              BLANK




                                  10

                        Sec. 2  A   Getting Started  -- General Rules





           (B) TURNING ON YOUR MACHINE AND COPYING THE CK PROGRAMS


       For Floppy Disk Computers:
       (Hard Disk people skip this part)

             Take a blank disk from your box of disks and  "format" it
       with the DOS FORMAT command.  This  means  you must run the 
       "format" program which  came with DOS like this:
       A>FORMAT B: [return]   DON'T leave out the B: to format the disk
       on drive B or you may end up formatting your DOS disk on drive A.

             Format two disks.  When done, copy the DOS file,
       COMMAND.COM onto each of these disks.

             Now,  put the CK disk into the A: an a new formatted disk
       in drive B.  Type
       COPY  *.TBC B:[return] then COPY *.EXE B: Then copy CKS B:

             The second disk you just formatted will be will be your data 
       disk to hold your data files.  Most floppy users will put the data 
       disk into drive B.

             Label the program disk(s) as "CK PROGRAM DISK --DRIVE 
       A" and in our example, the data disk as "CK DATA DISK--DRIVE B".  
       Note:  your program disk does not have to go into drive A.   You 
       can  put your programs on any disk.   Also,  your data disk does 
       not  have to go in drive B.   You can choose any drive  as  your 
       data disk drive.

                           For Hard Disk Computers

             If you have a hard disk, make a CK subdirectory, go to it,
       and type C:\CK>COPY A:*.* [RETURN]  [That's all!] 

             In our example, we have the program disk in A and the data 
       disk in B.  To begin Type A>CK [Return].  CK  will  begin with the 
       Main Menu.   It will  immediately 

                                  13

              Sec. 2  B - Getting Started -- Copying The Program

       notice  that it cannot find a file containing the letter of  the 
       drive which will hold your data disk.   It will immediately 
       ask you  for  the  drive where  you want to put your data disk.   
       You may pick any letter from A to L.   

             In our example, we would answer B for floppy disk 
       computers or C for hard disk computers.

             WARNING:   Always keep a backup of your data disk.   Disks 
       do have a habit of dying.   If yours gets its directory  damaged 
       it may not be salvageable.   Every two or three months, it would 
       be a good idea to copy your data disk onto your backup disk.

             You will now be returned to a menu which will allow you to 
       set  up  your income and expense categories.  Press "S" to 
       set up your income and expense code name.

       Next, you set up your list of Checking Accounts (C on the Main 
       Menu).  Next, you enter your income and expense data.  Last, 
       sort your entries and prepare your reports.

                             ABOUT COLOR

          The default colors are white letters (the foreground color) on 
    a blue background.  These colors can be changed by placing the numbers 
    your alternate colors in the DISKDRVE file.

          Let me explain: each color has a number according to the list 
    below:

    0=Black;   1=Blue;   2=Green;  3=Cyan;   4=Red;    5=Magenta
    6=Brown;   7=White;  8=Gray;   9=Light Blue;  10=Light Green
    11=Light Cyan;  12=Light Red;  13=Light Magenta    14=Yellow
    15=Bright White;

                                 14

          Thus, Bright white letters on a blue background (the 
    default) would be 15 (bright white), 1 (blue);

          Blue letters on a white background would be 1 (blue
    15 (bright white);

          You can add two lines of color numbers to your diskdrve 
    file to tell CK that you want it to use the specified 
    colors instead of white letters on a blue background.  For
    example, if you wanted White letters on a Black background,
    your DISKDRVE file would look like this:

    C       [DATA DRIVE NAME, DRIVE C]
    15      [THE NUMBER FOR THE COLOR WHITE]
    0       [THE NUMBER FOR THE COLOR BLACK]

          Don't type in the information in the brackets.  That is 
    just to explain the data to you.  Here is how you could create
    a diskdrve version to put white letters on a black background:

    C:\CK>COPY CON: DISKDRVE  [RETURN]
    C  [RETURN]
    15 [RETURN]
    0  [RETURN]
    ^Z [CONTROL Z THEN RETURN]
          1 file(s) copied

          The control Z means that you hold down the control key and press 
    a Z at the same time.

          If you are happy with white on blue, YOU DON'T HAVE TO DO
    ANYTHING AT ALL TO DISKDRVE.  JUST LEAVE IT ALONE AND YOU WILL 
    GET WHITE ON BLUE.







                                 14A

              Sec. 2  B - Getting Started -- Copying The Program


                         (C)  THE MAIN MENU EXPLAINED


             The Main Menu looks like this:


       Copyright David M. Alexander, 1984, 1987 For This Program And
               For ALL Programs Called From This Program

           Revision No. 3.19  Jan. 24, 1990

                    **** MAIN MENU ****

       D  DATA  Entry From Your Check Stubs,                 
       L  LOOK  At A File Of Checks                          

       S  SORT Your Checks & Create Reports                  
       Y  YEAR TO DATE  Reports                       
       R  REPORT Information/Help
       P  PRINT Checks On The Printer

       E  EXPENSE Category Set up/Display
       C  CHECKING Accts Set up/Display

       A  ADD Several FILES Together
       
       X  EXIT To The Operating System


             When  you want to enter your checks and deposits into  the 
       program,  you  press D.   

             When  you  want to review the checks you have  entered  or 
       correct typo's or add or delete checks,  press L.   

             When  you  want  to prepare reports,  you will  sort  your 
       checks by name, number, amount, etc.  Press S.  

             When  you  want  to create a year to date report  of  your 
       income and expenses,  press Y.  CK will display the Year To Date 
       menu and give you the opportunity to erase the old year to  date 
       report  and create a new one or to add files to  the  existing 
       year to date report.

             When  you  are unsure how to print a hardcopy of your  re-
       ports, press R.  CK will tell you how to print your reports.
       P will let you print your checks on the printer.

             When  you want to set up or change or look at  your  cate-

                                  15

                        Sec. 2  C  Getting Started -- The Main Menu

       gories  of  income  and expenses,  press E.   

             When you want to set up or change the list of your various 
       checking  accounts,  press  C.   You  will  be  able to chose up  to  
       9  different accounts and will be able to sort each account separately.

             When  you want to add several files together press A.   
       CK which will allow you to add  several  individual files into one 
       big file,  e.g. add three months of checks together to have one file 
       for the whole quarter.

             When you want to return to the operating system,  press  X 
       which will and put you back into DOS.

             WHEN YOU FIRST START THE PROGRAM, you will be automatically
       taken to the module to set up your expense categories.  After
       returning to the Main Menu, press C to set up your list of
       checking accounts.  Only after you have done this will you
       press D to enter any data.  Only after you have entered 
       your data, will you press S to sort your checks and create
       your reports.

             You will be wise to create your reports to disk files
       and print the files on your printer through your word processor
       or through the DOS PRINT command or COPY filename LPT1:

               If you don't have a word processor, get one!  














                                  16


                           NOTES TO SHAREWARE USERS

                             CK QUICK USE OUTLINE

             The short course in using CK is as follows:

             1)  copy the disks as outlined above;

             2)  put the input disk in the A drive or,  if you are using 
       a hard disk, go to your hard disk;

             3)  type A>CK [return] or C:\CK>CK [return]

             4)   You will be asked what drive you want to use  as  your 
       data  drive.   If you are using floppies,  say  B .   If you  are 
       using  a  hard  disk,  answer with your hard disk  drive  letter, 
       usually C.

             5)  press  S  to Set up your income and expense categories.
                 OR press D and then give the name:  SAMPLE
             6)   when asked,  respond with the name of a file  to  hold 
       your  income  and expense categories of up to seven  (NOT  eight) 
       characters  --- use  your  initials  or  just  call  it  EXP  for 
       expenses.  

             7)   enter your income and expense codes in answer  to  the 
       prompts on screen;

             8)  when done, return to the main menu;

             9)   Press  C  on the main menu,  then when the  next  menu 
       appears, press S to Set up your list of checking  accounts.   You 
       can have up to 9,  e.g.  general account,  trust account, Bank Of 
       America account,   Visa Card,  American Express,  S & L  account, 
       etc.  OR press D, and SAMPLE list will appear.

             10)  Go to the main menu and press D to enter your Data 
       (that's your checks and deposits).  When done go back to the 
       Main Menu.

             11)   Type S on the main menu to go to  the  sort 
       menu.  Select the type of report you want to create and press the 
       menu  entry  for  that  kind  of  report.   When  the  report  is 
       completed, print it:

             a)  through  your word processer, OR

                                  18


             b)  A>COPY B:FILENAME.XXX  LPT1 [return] 
             [For example:   OCT88.CAT]
             The above Table of Contents gives you an outline of what is 
       in  the  full CK manual.   Users who register with me will get  a 
       disk containing the full manual.

             To register, send me your name and address and $25.  If you 
       use  CK,  I ask you to send me the $25 as part recompense for the 
       many hundreds of hours I have invested in the program.

             Commercial users, corporations, are also asked to pay the $25 
       if they use the program.   If you haven't registered the program, 
       don't call with questions.    If you have registered and you call 
       and I can't take your call, I will return your call collect.

                              David M. Alexander
                          2600 El Camino Real  #506
                             Palo Alto, CA  94306
                                 415-857-9233

             If you like CK,  you should consider trying MR.  BILL tm, a 
       program  I  wrote  to keep time and prepare  full  bills/invoices 
       including  ageing,  chronological  reports,  management  reports, 
       variable billing rates and all the good stuff I needed for a full 
       billing program for my law practice.   MR. BILL is also available 
       from the distributor who sent you CK.

             Take care,

             David M. Alexander















                                  19


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0462

     Volume in drive A has no label
     Directory of A:\

    CKM      TBC      8189   9-07-89   4:18p
    CKCAT    TBC     18801   5-15-90   9:00a
    CKDATE   TBC     17472   9-07-89   4:20p
    CKEXSET  TBC     14886   9-07-89   4:18p
    CKAMTD   TBC     15903   9-07-89   4:19p
    CKINPUT  TBC     54884   2-21-90   5:09p
    CKADD    TBC      5955   9-07-89   4:19p
    CKNAME   TBC     22855   9-07-89   4:20p
    CKNUMBR  TBC     12949   9-07-89   4:20p
    CKLOOK   TBC     18121   9-07-89   4:17p
    CKACCTS  TBC      5277   9-07-89   4:19p
    CKEXTOT  TBC      9987   9-07-89   4:18p
    CKCHRT   TBC     11732   9-07-89   4:20p
    CKSORT   TBC      2556   9-07-89   4:18p
    CKPRINT  TBC     24100   9-07-89   4:18p
    CK       EXE     59424   9-07-89   4:20p
    CKS                128   5-31-90  11:23a
    SAMPLE   CDE      2336  10-04-87   3:21p
    SAMPLE   MAX       284  10-04-87   3:21p
    CK       DOC     45056   2-12-90   6:08p
    GO       BAT       789   7-06-90  12:17a
           21 file(s)     351684 bytes
                               0 bytes free
