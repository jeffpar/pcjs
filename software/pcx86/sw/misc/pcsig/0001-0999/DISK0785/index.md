---
layout: page
title: "PC-SIG Diskette Library (Disk #785)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0785/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0785"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHECKMATE-GL"

    Do you own a small business, or are you thinking of starting one -- only
    to be frightened by the thought of all the financial howmework you know
    it entails? If you want to keep track of your expenses and
    manage your finances wisely, you need an accountant -- or
    CHECKMATE-GL.
    
    CHECKMATE-GL is a powerful multiple-entry general ledger package that
    operates on the principles of classical accounting. CHECKMATE-GL has
    turned the complicated world of accounting into a user-friendly task,
    and even has an introduction to the basic principles of accounting for
    anyone unfamiliar with them.
    
    CHECKMATE-GL was designed to integrate with CHECKMATE, but does operate
    independently. The two programs have a unique interface, letting
    CHECKMATE become, in effect, a cash disbursements journal for
    CHECKMATE-GL. What is special about this is you can operate your day-
    to-day finances with CHECKMATE, and not worry about accounting or
    expensing your checks except at specific times. In this way you can
    separate your day-to-day finances from more critical accounting data.
    Home users will discover that you need only run CHECKMATE-GL once a week
    or so to quickly update your records. For businesses, personnel can
    work with CHECKMATE while you or your accounting professional can work
    exclusively with CHECKMATE-GL.
    
    CHECKMATE-GL can support up to 256 accounts simultaneously, and has
    powerful search-and-filter routines for all databases and reports.
    CHECKMATE-GL also has a user-friendly pull-down and pop-up menu system
    with on-line help. Included in this menu system is a pop-up chart of
    accounts for quick reference, and a pop-up accountant's calculator with
    rolling tape. The system allows for 50 predefined journal transactions
    that you can be call up at a keystroke. CHECKMATE-GL also has unique
    "quick-look" reports and flexible predefined reports with output
    control.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES785.TXT

{% raw %}
```
Disk No  785
Program Title: CHECKMATE-GL version 1.70A
PC-SIG version 1.1
 
Do you own a small business, or are thinking of starting one in the near
future, and the thought of all that financial hassle scares you to
death?  If you want to track your expenses without having to become an
accountant, CHECKMATE-GL will turn your computer into your accountant
with ease.
 
CHECKMATE-GL is a powerful multiple-entry general ledger package that
operates on the principles of classical accounting.  CHECKMATE-GL has
turned the complicated world of accounting into a user-friendly
environment, even providing an introduction to the basic principles of
accounting for those unfamiliar with it.
 
CHECKMATE-GL has been designed to integrate with CHECKMATE (see disk
#784).  The two programs have a unique interface, allowing CHECKMATE to
become, in effect, a cash disbursements journal for CHECKMATE-GL.  What
is special is that you can operate your day-to-day finances with
CHECKMATE, and not worry about accounting or expensing your checks
except at specific times.  This way you can isolate your day-to-day work
from the more critical accounting data.
 
Home users will discover that you need only run CHECKMATE-GL once a week
or so to quickly update your records.  For businesses, personnel can
work with CHECKMATE while you or your accounting professional can work
exclusively with CHECKMATE-GL.
 
CHECKMATE-GL can support up to 256 accounts simultaneously, and has
powerful search-and-filter routines for all databases and reports.
CHECKMATE-GL also has a user-friendly pull-down and pop-up menu system
with on-line help.  Included in this menu system is a pop-up chart of
accounts for quick reference, and a pop-up accountant's calculator with
rolling tape.  The system allows for fifty predefined journal
transactions that can be called up at a keystroke.  CHECKMATE-GL also
has unique "Quick-Look" reports and flexible predefined reports with
output control.
 
Usage:  Financial.
 
System Requirements:  Two floppy drives or a hard dirve.
 
How to Start:  Type CMGL (press enter).
 
Suggested Registration:  $39.95
 
File Descriptions:
 
CMGL     000  Overlay file
CMGL     COM  Main program
CMGL     HLP  Online help file
CMGL     OVL  Overlay file
CMGLINST COM  Installation program
MANUAL   ARC  Archived documentation
ORDER    DOC  Order form
READ     ME   How to get started
PKXARC   COM  Unarchiving program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG Inc.

```
{% endraw %}

## CMGL.DOC

{% raw %}
```



     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
              CheckMate-GL (tm) -- Introductory User's Guide
                               Version 1.70A
                          Released July 28, 1988



                Copyright 1987, 88 by Custom Technologies
                            All Rights Reserved


                       1-800-541-6234 (Orders Only)
                         (719) 282-0402 (Support)

































     
                      Warranty and License Agreement
     
     
     CheckMate-GL (tm) is a trademark of Custom Technologies.
     
     
     - Warranty
     
     CheckMate-GL, and this manual, are provided AS IS without any warranty,
     expressed or  implied,  including but  not  limited to  fitness  for  a
     particular purpose.  CUSTOM TECHNOLOGIES SPECIFICALLY DISCLAIMS ANY AND
     ALL WARRANTIES.  IN  NO EVENT SHALL CUSTOM  TECHNOLOGIES BE LIABLE  FOR
     ANY LOSS OF PROFIT  OR ANY OTHER COMMERCIAL  DAMAGE, INCLUDING BUT  NOT
     LIMITED  TO  SPECIAL,  INCIDENTAL,   CONSEQUENTIAL  OR  OTHER   DAMAGES
     RESULTING FROM THE USE OF THIS PRODUCT.
     
     - License
     
     The CheckMate-GL software is the property of Custom Technologies.   You
     are granted  a limited  license  to use  this software  for  evaluation
     purposes.  If you wish to continue using CheckMate-GL after evaluation,
     you must  register  your copy.    CheckMate-GL may  not  be used  on  a
     continuous  basis  in   any  location  (home,   business,  school,   or
     governmental  agency)  without  registering.    If  you  wish  to   use
     CheckMate-GL in multiple  locations concurrently,  you should  register
     one copy for each location.
     
     You are free  to make as  many copies  as you wish  and may  distribute
     CheckMate-GL freely (in  its original  form, including  documentation).
     Recipients of copies  you make  are granted  a limited  license to  use
     CheckMate-GL on a trial and evaluation basis.  If the recipient  wishes
     to use CheckMate-GL on a continuous basis, he should register his copy.
     
     You may not sell or ask any  consideration for this product.  SIGs  and
     BBSs may ask  a nominal  fee to  cover their  copying and  distribution
     costs.  OEMs wishing to bundle CheckMate-GL with other products  should
     contact Custom Technologies for details.
     
     This manual may be reproduced and distributed only in conjunction  with
     CheckMate-GL, and may  not be used  for any other  purpose without  the
     expressed written consent of Custom Technologies.
     























     
                             Table of Contents
     
     Introduction
          0.1  Greetings.................................................I-1
          0.2  The CheckMate Concept.....................................I-1
          0.3  Features..................................................I-1
          0.4  Shareware Support.........................................I-2
          0.5  Other Products............................................I-2
     
     Chapter 1: Installing CheckMate-GL
          1.1  Hardware Requirements.....................................1-1
          1.2  Disk Operating System.....................................1-1
          1.3  File Paths................................................1-1
          1.4  Printer Installation......................................1-1
     
     Chapter 2: Things You Need to Know
          2.1  The Bottom Line...........................................2-1
          2.2  The Pull-Down Menu System.................................2-1
          2.3  The Help System...........................................2-1
          2.4  Pop-up Chart of Accounts..................................2-1
          2.5  Pop-up Calculator.........................................2-2
          2.6  Date Formats..............................................2-2
          2.7  Editing within CheckMate-GL...............................2-2
          2.8  Searching and Filtering the Database......................2-3
          2.9  Printing Reports..........................................2-3
          2.10 Backing Up Your Data......................................2-4
          2.11 Quick-Look Reports........................................2-4
     
     Chapter 3: Getting Started
          3.1  Setting Up Your Chart of Accounts.........................3-1
          3.2  General Setup.............................................3-4
          3.3  Company Information.......................................3-4
          3.4  Generating Custom Reports.................................3-4
          3.5  CheckMate Interface.......................................3-5
          3.6  Setting Up Your Standard Transactions.....................3-6
     
     Chapter 4: Daily Activity
          4.1  Entering Daily Journal Transactions.......................4-1
          4.2  Expensing Checks and other CheckMate Transactions.........4-2
          4.3  Editing Journal Transactions..............................4-3
     
     Chapter 5: End-of-Month Routines
          5.1  Generating Pre-Post Reports...............................5-1
          5.2  Posting Journal Transactions to the General Ledger........5-1
          5.3  Generating After-Post Reports.............................5-2
     
     Chapter 6: End-of-Year Routines
          6.1  Generating End-of-Year Reports............................6-1
          6.2  Closing Revenue and Expense Accounts and
               Transferring Balances.....................................6-1
     
     Appendix A: An Accounting Primer....................................A-1
     Appendix B: Sample Chart of Accounts................................B-1
     Appendix C: Defining and Modifying Custom Reports...................C-1
     Appendix D: Technical Description...................................D-1










                               Introduction
     
     0.1  Greetings
     
          Welcome to CheckMate-GL, our full-powered, multiple entry  general
     ledger package designed to integrate  with CheckMate (tm), our  popular
     personal financial system.
          CheckMate-GL is packed  with features  and was created  to be  the
     friendliest and  easiest  to use  accounting  system on  the  market...
     period.  The business user knows  that proper accounting is a must  for
     survival and success.   The  home user who  simply wants  to track  his
     budget and expenses will  find that true accounting  is not beyond  his
     reach after all!
          CheckMate-GL operates on the  principles of classical  accounting.
     We have made no compromises nor have we developed a "bastard" and  non-
     standard system of budgets and  categories.  We realize that  "debits",
     "credits",  "double  entries"  and  the  like  are  subjects  that  are
     unfamiliar to  most  non-accountant users.    What we  have  done  with
     CheckMate-GL is implement  these concepts into  a slick,  user-friendly
     environment.  If you are not  interested in tracking your expenses  and
     revenues completely, then  CheckMate-GL is  overkill for  you, and  you
     should stick to using CheckMate alone.  If you manage a business, or if
     you are  a personal  user with  a desire  for total  control over  your
     financial status, CheckMate-GL will help  you harness all the power  of
     true accounting.   If you  are unfamiliar  with accounting  principles,
     look at appendix A (a short primer to help you get started).
     
     0.2  The CheckMate Concept
     
          CheckMate-GL and  CheckMate are  each  stand-alone programs.    We
     recommend that you use them together, however.  The two programs have a
     unique interface.   CheckMate becomes, in  effect, a cash  disbursments
     journal for CheckMate-GL.  What is special is that you can operate your
     day to day finances with CheckMate,  and not worry about accounting  or
     expensing your  checks  except at  specific  times (once  a  week,  for
     instance).   We surveyed  local small  businesses and  home users,  and
     determined that this is a natural  and comfortable way to operate.   We
     call this "idea" the "CheckMate Concept."
          Another advantage to this concept is that you can isolate your day
     to day work and personnel from the more critical accounting data.  Only
     yourself,  or  your  accounting   professional  need  have  access   to
     CheckMate-GL,  while  your  secretary  or  clerks  interact  only  with
     CheckMate.  Home users will discover that you need only run  CheckMate-
     GL once a week or  so and can quickly update  your records.  You  won't
     have to worry about continually  struggling with accounting every  time
     you want to write a check!
     
     0.3  Features
     
          - Uses intuitive pull-down and pop-up menu system
          - Fully implemented "classical" general ledger system for
            both home and business use
          - Integrates with CheckMate (tm) Personal Financial Software
          - Supports up to 256 accounts simultaneously
          - Powerful search and filter routines available for all
     
     
     Introduction                                                       I-1








            databases and reports
          - Unique "Quick-Look" reports (including pre-posting)
          - Flexible pre-defined reports with output flow control
          - Unique and powerful "custom" report command language for
            the power user with automatic generation for the novice
          - Fully editable journal entries allowing pen and ink
            corrections (no reverse entries!) prior to posting
          - Allows 50 predefined journal transactions that can be
            called up at a keystroke
          - Pop-up chart of accounts for quick reference
          - Pop-up accountant's calculator with rolling tape
          - Includes extensive, context sensitive on-line help
     
     
          We suggest that you make good  use of the HELP system by  pressing
     the <F1> key  (note that  some help  screens have  multiple pages,  use
     <PgUp> and <PgDn> to move back and forth through the message).
     
     We hope you enjoy CheckMate-GL!
     
     Tim                                                              Bougan
     President, Custom Technologies
     
     
     0.4  Shareware Support
     
          CheckMate-GL, like many other fine "shareware" products, has  been
     released by its  authors to the  public for evaluation.   We allow  and
     encourage free  copying and  distribution of  the program  (in its  un-
     altered original form).  We  are committed to supporting and  improving
     CheckMate-GL, as well as developing additional products.
     
          Ifyou find CheckMate-GL useful, you should register your copy. The
     shareware concept is meant to provide  a full working copy to the  user
     for evaluation, and NOT to  give away the author's  hard work.  If  you
     choose not to  register, then  erase or pass  your copy  on to  someone
     else.   You  can register  by  sending  $39.95 (plus  $3  shipping  and
     handling).
     
         For registering you  will be placed  on our mailing  list and  will
     receive a  complete,  illustrated  User's Guide  with  a  comprehensive
     discussion of    the use  and  functions of  CheckMate-GL.  The  manual
     includes documentation on  writing and  customizing report  definitions
     and has special appendices.
     
         Make checks  payable to  Custom  Technologies.   Colorado residents
     please add  3%  sales  tax.   Send  your  registration  and  all  other
     correspondence to:
     
                               Custom Technologies
                                   PO Box 62118
                        Colorado Springs, CO  80962-2118
                                  (719) 282-0402

                           1-800-541-6234 (Orders Only)
                          MasterCard, VISA, COD Accepted
     
     Introduction                                                       I-2








     0.5  Other Products
     
          We have also released CheckMate... a powerful financial management
     program for  home  and  small  business.    CheckMate  integrates  with
     CheckMate-GL to become a cash disbursments journal.
          CheckMate is designed to help you  keep an accurate track of  your
     personal financial activity... no more will you have to "guess" at your
     balance, or  labor furiously  to make  your checkbook  match your  bank
     statement.  CheckMate will record and maintain your transactions,  with
     full editing capabilities at  your fingertips. It  will sort and  print
     reports, search for selected items, help you reconcile your statements,
     and even print your  checks for you.   Your balances are  automatically
     updated and reported,  and your  records are accurate  to the  penny...
     guaranteed!
     
     
     -- Features
     
          - Uses intuitive pull-down menu system
          - Supports up to eight accounts simultaneously
             (total number of accounts is limited only by disk space)
          - Supports Checking and Savings accounts
          - Up to 32,767 transactions may be active per account
          - Prints reports in standard format or in Borland Intl's
             Traveling SideKick (tm) format
          - Reports and Checks may be printed in PICA, ELITE or
             CONDENSED print
          - Transactions may be edited or printed and search criteria
             may be specified on ANY field in the transaction
          - Check printer supports continuous feed AND standard checks
             (YOU define the check printing in the Check Set-Up form
             and can use your own checks!)
          - Allows 100 predefined transactions that can be called up
             at a keystroke (such as mortgage payments, utility
             bills, etc)
          - Provides a financial calculator for quick figures on
             loans, regular deposit accounts, and compounding
          - Helps you reconcile your accounts when your statements
             arrive, and prints a complete report of outstanding
             transactions
          - Includes extensive, context sensitive on-line help
     
         You can  order CheckMate  by sending  $29.95 plus  $3 shipping  and
     handling.
     










     
     
     Introduction                                                       I-3








     
                   Chapter 1 -- Installing CheckMate-GL
     
     
     1.1  Hardware Requirements
     
          CheckMate-GL will run on an  IBM PC/XT/AT/jr (or compatible)  with
     at least 256K of memory and 2 DSDD floppy disk drives.  It supports all
     IBM compatible displays including the EGA.
     
     
     1.2  Disk Operating System
     
          CheckMate-GL supports  (and requires)  DOS 2.0  or above.    Also,
     since   CheckMate-GL   maintains   and   manipulates   several    files
     simultaneously, you must make provisions to insure that DOS is properly
     configured.
          You should  have a  file called  "CONFIG.SYS" on  your boot  disk.
     This file feeds key information and  requirements to DOS (see your  DOS
     Reference  Guide).    We  recommend  the  following  entries  in   your
     CONFIG.SYS file:
     
                    FILES=20
                    BUFFERS=12
     
          If you  do not  have a  CONFIG.SYS file  or have  not declared  an
     adequate number of file handles,  CheckMate-GL will abort when you  try
     to run it and give an error message (I/O error 243).
     
     
     1.3  File Paths
     
          You can specify the files  paths for which CheckMate-GL will  look
     for its overlay and data files with  CMGLINST.COM.  If you are using  a
     hard disk, you can put CheckMate-GL's program and overlay files in  one
     directory and its data  files in another.   If you include the  program
     file path in a DOS "PATH", you  can run CheckMate-GL from any drive  or
     directory.  If you are using a  floppy disk system, you should put  you
     data files on drive  B and your  program files on drive  A. If you  are
     using  floppies  but  have  a  good  sized  RAM  disk,   CheckMate-GL's
     performance will increase significantly if  you copy its program  files
     to the RAM disk.
          Run CMGLINST (make sure that CMGL.COM is in the default  directory
     first) and set up your paths.  CMGLINST will first display the  current
     default paths and then prompt you to enter new ones.  In order to  save
     disk  space,  CMGLINST  is  a  simple  program  and  does  not  include
     CheckMate-GL's editing features.  Note that entering only a <CR> at the
     prompts will cause CMGLINST to  clear the file paths (and  CheckMate-GL
     will use  the  default  directories  when run).    Before  you  do  run
     CheckMate-GL, make sure that the paths you selected are valid (you  may
     need to create them).
     



     
     
     Chapter 1                                                          1-1








     
     1.4  Printer Installation
     
          The "printer Setup" function (under  the "Setup" menu) allows  you
     to designate five  printer control strings.   It is  important to  note
     that any changes made here are temporary unless you use <F10> to  write
     the changes  to disk.   Saving  the changes  requires the  presence  of
     CMGL.COM on the program file path, and you must not change the name  of
     the file!
     
          The printer control  codes can  be found in  your printer  manual.
     You have five  available strings that  you can enter.   The format  for
     entry is
     
               \<decimal code>\<decimal code>\....
     
     
     The back-slashes delimit the codes.  Below is an example:
     
               \27\85
     
          This string represents an <ESC>  'U'.  (That's an  escape-capital-
     U).  This is a popular  means of defining printer codes.   CheckMate-GL
     comes pre-installed for an IBM graphics printer.
     
          The PICA, ELITE, and CONDENSED Pitch strings should configure your
     printer to the correct pitch.   The Printer Setup and Exit strings  are
     optional and provided for your convenience.
          The Printer Setup and Exit  strings are used by CheckMate-GL  when
     printing any report (both  pre-defined and custom).   The PICA,  ELITE,
     and CONDENSED  strings can  only  be used  within the  custom  reports.
     Refer to appendix C  for a discussion  on how to  use these strings  to
     configure your reports to your liking.
     
     




















     
     
     Chapter 1                                                          1-2








     
                   Chapter 2 -- Things You Need to Know
     
     
          This section  discusses some  of  the "basics"  of  CheckMate-GL's
     operation.
     
     
     2.1  The Bottom Line
     
          As you run CheckMate-GL, the bottom line of the screen  summerizes
     the functions that  are available to  you.  It  is always present,  and
     should speed your use  of the program as  you become familiar with  its
     many capabilities.  Most of  CheckMate-GL's functions are activated  by
     the PC's function keys.   The bottom line  identifies the operation  of
     these keys (and others).
     
     
     2.2  The Pull-Down Menu System
     
          CheckMate-GL uses  the  popular  "pull-down" menu  system  as  its
     primary user interface.  After your start CheckMate-GL, you will see  a
     row of four "choices" for  you to choose from.   You may select any  of
     the choices in one of two ways: first, by moving the highlighted bar to
     the item of your choice (using the  left or right arrow keys) and  then
     pressing "return"  (which  we will  also  refer  to as  <CR>),  or,  by
     pressing the  starting letter  of your  choosing.   Either method  will
     instantly produce a secondary menu (with  a bar that moves up and  down
     instead of left  to right).   Select individual functions  in the  same
     manner.
     
     
     2.3  The Help System
     
          CheckMate-GL includes built in on-line  help.  Just press <F1>  at
     any time  while  running CheckMate-GL  for  instant help.    Some  help
     screens have multiple pages, so use  <PgDn> and <PgUp> to move  through
     the message.  The help screens are contained in the file "CMGL.HLP" and
     this file must be  present in the  program file path  at runtime.   The
     program file path is set with CMGLINST.COM.
     
     2.4  Pop-Up Chart of Accounts
     
          Accounting systems typically work  with numbered accounts, and  in
     most instances, you will need to use an account's NUMBER instead of its
     name.  This  can involve constantly  referring to a  print-out of  your
     chart, especially for accounts that you do not use often.  CheckMate-GL
     addresses this problem by providing a "pop-up" chart of accounts.  Just
     press <F2> anytime while in CheckMate-GL and your accounts and  account
     numbers will appear.  You can quickly scroll through the chart with the
     arrow keys  and the  <PgDn> and  <PgUp> keys.   For  you WordStar  (tm)
     users, ^C and ^R will also page up and down through the display.   When
     you have found the  account that you were  looking for, press <ESC>  to
     return to CheckMate-GL.
     
     
     
     Chapter 2 - Things You Need to Know                                2-1








     2.5  Pop-Up Calculator
     
          Strictly for your convenience, we have implemented an accountant's
     style calculator inside  of CheckMate-GL.   Pressing <F3> anytime  will
     pop the calculator up.  The calculator  has a rolling tape to help  you
     keep track of  your math, and  you can  even direct the  output to  the
     printer!
          When  using  the  calculator,  be  careful  to  notice  when   the
     calculator expects an operation and when it expects a number.  The data
     entry field will be  reverse video when the  calculator is expecting  a
     number.  Otherwise, an intermediate result is displayed and any numbers
     entered will be rejected.  In  any case, pressing 'C' (for clear)  will
     zero the total and set the calculator up to accept a number.
          If you want to use the printer, make sure that it is ready  before
     you press 'P'.  If it is not, DOS will report a critical error.
     
     2.6  Date Formats
     
          One of the most  annoying aspects of many  programs is rigid  data
     entry, especially  DATES.   We built  a "free-format"  date entry  into
     CheckMate-GL.  Whenever CheckMate-GL  calls for a  date to be  entered,
     you can key it in almost any  fashion you choose.  Dates like  7-12-84,
     3/5/86, 12 Sept 82, and so forth are all valid.  So long as you include
     some delimiter between the  month, the day,  and the year  CheckMate-GL
     should figure out what you mean.  A delimiter can be a space, a dash, a
     slash, or virtually any non-number or  non-letter.  You can even  leave
     all or part of  the date out, and  CheckMate-GL will use defaults  (the
     DOS date).
     
     
     2.7  Editing within CheckMate-GL
     
          All data entry  fields within CheckMate-GL  are fully  "editable."
     The following control-key combinations are defined within CheckMate-GL:
     
          Control Key     Alternate Key               Function
          -----------     -------------       -----------------------
     
          Control-D        right-arrow        move one character right
          Control-S        left-arrow         move one character left
          Control-F                           move one word right
          Control-A                           move one word left
     
          Control-E        up-arrow           move up one field
          Control-X        down-arrow         move down one field
     
          Control-G        DEL                delete character at cursor
          Control-T                           delete word right
          Control-K                           delete field right
          Control-Y                           delete entire field
          Control-H        BACKSPACE          delete character left
     
                           INS                toggle INSERT/OVERWRITE
     
     
     
     
     Chapter 2 - Things You Need to Know                                2-2








          Notice that  the  control  sequences  closely  resemble  those  of
     MicroPro's WordStar  (tm).   We  chose  these combinations  because  of
     WordStar's popularity.  For your convenience we have also  imple-mented
     the PC's standard editing keys as alternatives.
     
     
     2.8  Searching and Filtering the Databases
     
          Throughout CheckMate-GL, you will have the ability to examine  and
     edit the  various  databases.   In  every  instance, you  will  have  a
     powerful search function available to help you quickly locate items  of
     interest.   Simply press  <F5> while  editing any  of the  files and  a
     "search window"  will  appear.    From  this  window  you  can  specify
     information that  will be  used as  a "pattern"  to match  against  the
     available data.  Once you have set the criteria, you can then  "filter"
     the data so that only the item or items that you are interested in will
     be accessible.  If you use CheckMate, this will be a familiar  feature.
     It is so useful that we  have incorporated it wherever possible  inside
     of CheckMate-GL.
          After you have entered  the criteria that you  want to match,  you
     have two options.  Pressing <F5> will force an EXACT match.  That means
     that "text" strings must match the  actual records exactly.  (Upper  or
     lower case  is NOT  important).   If  you desire  a more  powerful  and
     flexible search, press  <F6> instead.   In this case,  the text  string
     need not be complete but can match if it appears ANYWHERE in the field.
     For instance, the  word "bat"  will match only  the word  "bat" if  you
     press <F5>, but will match "bat cave", "battle", or "combatant" if  you
     choose <F6>.
          Any field that you leave blank is a wildcard and matches anything.
     You can clear all the fields by pressing <F9>.
          Many of the reports also allow you to "filter" your data.  You can
     use this feature, for  instance, to separate  specific journals out  of
     your general journal.  Simply specify the account numbers that you  are
     interested in and let CheckMate-GL do the work!
     
     
     2.9  Printing Reports
     
          The ability to produce reports is the reason we expend the  effort
     to maintain  an accounting  system in  the first  place.   We have  put
     together a powerful report package and include a lot of options.   This
     section discusses some features common to the various printable reports
     available in CheckMate-GL.
          Each report allows you to enter  two key pieces of data that  will
     be printed on the report itself.   The first is the report date.   This
     date is primarily for your  reference, but as you  will see, it can  be
     significant on  certain "custom"  reports.   The  date can  be  entered
     "free-format" (as discussed above).  Just pressing <CR> here will cause
     the report to use the default date.
          The next  piece of  information that  you can  enter is  a  report
     title.  Like the date, this title  will be printed at the top of  every
     page in the report.  Most reports will already have a "default"  title,
     but you can modify it directly at print time.
          If you press  <F4> while  in the print  report form,  a menu  will
     appear with three choices.  This menu will let you select which  device
     
     
     Chapter 2 - Things You Need to Know                                2-3








     you want to  direct your output  to.  You  may send the  report to  the
     screen, the printer, or a disk file.   If you choose the screen or  the
     printer, you may also specify whether you want to "pause" between pages
     (to change paper or  to view the screen).   If you  choose a file,  you
     must enter a valid file name.  CheckMate-GL fully supports the DOS  2.0
     and above directory structure and you may indicate a path name with the
     file name.  If the file already exists, CheckMate-GL will overwrite it,
     so be careful!
          While the report is printing, you can pause output at anytime with
     the space bar (<SPACE BAR>).  Once paused, you can continue to print by
     pressing <CR>.  Or, pressing the <SPACE BAR> again will cause a  single
     line to print.  You can abort printing at any time by pressing <ESC>.
     
     NOTE: Many printers  have memory buffers,  and you may  not be able  to
     pause or abort the printing immediately.   The pausing feature will  be
     particularly useful when printing to the screen.
     
     2.10  Backing Up Your Data
     
          All of the data files in  an accounting system are related to  the
     other files  in  the system.    In  some cases,  this  relationship  is
     critical.  We recommend that when you back up your data files, you back
     up ALL of your data files, even your report definitions.  That way  you
     can be assured of consistent backups  in case you need to restore  your
     data from your backup files.
     
     2.11  Quick-Look Reports
     
          CheckMate-GL includes  another unique  and useful  feature...  the
     ability to  take a  "quick-look" at  the two  most critical  accounting
     reports.   Under the  "Reports"  menu, you  will  see options  for  two
     "quick" reports, a "quick Balance  sheet" and a "quick P/L  statement".
     Selecting either one of these options  will bring up another menu  with
     four additional options.   These choices give you  a chance to look  at
     data from four different points of view.
          As you will see later in  this manual, your reports are  generally
     classified as either "pre-post" or "after-post".  The pre-post  reports
     operate only  on  the journal  entries,  while the  after-post  reports
     reflect the status  of the ledger  only.  The  quick reports,  however,
     give you the opportunity to "merge" the two.   In effect, you can do  a
     "pre-posting" of your journal entries (without ACTUALLY posting) to get
     a clearer idea of your current and up-to-date financial status.
          The four options are listed and described below:
     
               1)  Current Month: reports on UNPOSTED transactions
                   for the current month (DOS date) only
               2)  Specific Month: reports on POSTED transactions only
                   (for the month you specify)
               3)  Year to Current Month: reports on the total
                   balances of accounts up to the current month
                   (POSTED transactions only)
               4)  Year to Date: reports on ALL available data, posted
                   and unposted.  This is the most up-to-date report
                   available
     
     
     
     Chapter 2 - Things You Need to Know                                2-4








          We have included the discussion  of these reports in this  section
     because they  are "extras"  that  are not  necessary to  maintain  your
     accounting system.  You  may find them  useful for immediate  feedback,
     but they are NOT intended to replace the more complete and  informative
     hard-copy reports!
     

















































     
     
     Chapter 2 - Things You Need to Know                                2-5








                       Chapter 3 -- Getting Started
     
          This chapter discusses the  steps you must follow  to set up  your
     accounting system under CheckMate-GL.
     
     
     3.1  Setting up your Chart of Accounts
     
     3.1.1  Philosophy
     
          Most people are anxious to set a  new piece of software to use  at
     once.  With accounting systems, however, it is necessary to generate  a
     Chart of Accounts before you  can input data.   You need to resist  the
     urge to breeze  through this step,  since a well  thought out chart  of
     accounts is  ESSENTIAL  to successful  accounting.   We  have  provided
     sample charts  (for both  home  and small  business)  to help  you  get
     running as quickly as possible.   You can use these samples as  guides,
     or you  may  simply  modify them  to  meet  your needs.    If  you  are
     unfamiliar with what a chart of accounts is, refer to appendix A for  a
     brief tutorial on accounting principles.
          In CheckMate-GL, you  may have  two different  types of  accounts.
     These are SUMMARY accounts and ENTRY accounts.  An ENTRY account is one
     in which you may post journal  transactions.  A SUMMARY account  merely
     "summerizes" the balances of accounts "underneath" it, and you may  NOT
     post transactions to such an account.  The accounts that you enter will
     all be ENTRY accounts.  The SUMMARY accounts, numbered '1' through '5',
     are created for you.
          To correctly identify which accounts must sum to higher  accounts,
     CheckMate-GL uses  a  "parent-child" system.    While you  define  your
     accounts, you must indicate  a "parent" for each  one that you  create.
     The only accounts that  will not have parents  are the five  predefined
     accounts (ASSETS, LIABILITIES, OWNER'S EQUITY, REVENUE, and  EXPENSES).
     These accounts are at the top level, and are the "parents" to all other
     accounts.  For instance,  all of the balances  from the accounts  under
     "ASSETS" will sum together to form the total "ASSETS" balance.
          In most cases, an  account will be the  same Debit/Credit type  as
     its PARENT.    For instance,  since  ASSETS  is a  debit  account,  its
     children will most  likely be  debit accounts  as well.   (In  advanced
     accounting, this does not have to be the case.  You may, for  instance,
     have CONTRA accounts.  CheckMate-GL  supports these types of  accounts.
     See a  good accounting  text for  details  if you  wish to  use  CONTRA
     accounts).
         CheckMate-GL will order  your accounts (in  your chart of  accounts
     and on reports) by number.   To have a  logical order on your  accounts
     and reports,  you should  adhere to  the standard  numbering  sequence.
     Note that the numbers are ordered alphabetically and not  sequentially.
     This means that the number '111' comes BEFORE the number '2', but after
     the number '11'.  You could number your accounts as such:
     






     
     
     Chapter 3: Getting Started                                         3-1








     
     
              Number         Account Name
              ------         ---------------------------
              1              ASSETS
              10000            Bay Bank and Co.
              10001            Security Federal
              10010            Land
              10011            Buildings
              2              LIABILITIES
              20000            Accounts Payable
              20001            etc...
     
     
          The  indentions   are  meant   to  illustrate   the   PARENT/CHILD
     relationship between  the accounts.   For  style and  information,  all
     SUMMARY account names  are written in  all capital letters.   You  will
     find that CheckMate-GL will force you to begin each account number with
     the same number  as its  parent.  This  means that  an all  LIABILIBITY
     accounts must  start  with the  number  '2',  for instance.    This  is
     necessary to insure proper grouping on  your reports and your chart  of
     accounts.  For a more complete example see the sample chart of accounts
     in appendix B.
     
     3.1.2  Generating Your Own Chart of Accounts
     
          With the above information in mind,  you should now sit down  with
     the sample chart  (appendix B) and  draft your own  chart of  accounts.
     Try and be as complete  as possible, but you  can easily add or  modify
     the accounts later.  Be careful to note whether each account should  be
     a debit or a credit account.  If you have previous accounting data, you
     should have that ready  as well (to enter  previous years' balances  or
     budgeting data).
     
     3.1.3  Entering Your Chart of Accounts
     
          From the  main menu,  select  "Files".   From the  pull-down  menu
     select "Chart of accts".   From the pop-up  menu you may select  either
     "Enter new accounts" or "eDit  existing accounts" depending on  whether
     you are modifying existing accounts or adding new ones.
     
     3.1.4  Entering New Accounts
     
          If you are entering  new accounts, the first  thing that you  must
     enter is the  account number.   Remember  to use  the numbering  scheme
     discussed above.  If you have forgotten where you are in the  sequence,
     press <F2> and your current chart of accounts will pop-up.   CheckMate-
     GL will not let you save any account with a duplicate account number.
          Next you must specify the account's PARENT.  Only level 1 accounts
     do not  have  parents, and  since  the  level 1  accounts  are  created
     automatically, you MUST  specify a  valid parent  (numbers '1'  through
     '5').   After entering  the parent,  you need  to specify  whether  the
     account carries a  debit or a  credit balance.   Most of  the time  the
     account will have the  same type balance as  its parent.   CheckMate-GL
     will default to  the this  type, but make  sure you  have this  correct
     
     
     Chapter 3: Getting Started                                         3-2








     before you save the account!
          Next, you may then enter previous years' balances and an  optional
     budget.  No changes will be  written into the general ledger until  you
     press <F10> to save the account.  If you have made any critical  errors
     in the account entry,  CheckMate-GL will display  an error message  and
     abort the saving process.  You may then correct the errors and re-save.
     
     SPECIAL TIP: Most people set up there accounting system after they have
     already started doing business.  This is almost certainly the case  for
     home users.  When you entered  your accounts, you could directly  enter
     previous years' balances, but not CURRENT balances!  This is  necessary
     since  CheckMate-GL  must  perserve  the  integrity  of  your   account
     balances.   To make  these  initial enteries,  you should  use  journal
     transactions.  The method is  straight-forward... simply make a  single
     transaction for each account  that reflects its  current balance.   The
     balancing  entry  should  be  to  an  account  under  OWNER'S   EQUITY.
     "Capital" or  "Initial  Capital" is  a  good name  for  this  balancing
     account.  When you have made  and verified all of the initial  entries,
     you will need to POST them to the general ledger (see section 5.2).  It
     is also good practice to run the end-of-month reports here for a record
     of your initial inputs.  These  routines are also discussed in  chapter
     5.
     
     
     3.1.5  Editing Existing Accounts
     
          You may edit  accounts if  you wish to  modify one  of the  sample
     charts or if you need to correct mistakes made while entering your  own
     accounts.  All the same rules that applied for entering accounts  still
     apply for  editing  them.   There  are  some  additional  restrictions,
     however.
          If you have already posted  some transactions to an account,  then
     that account will have a current  balance (and so will its parent,  and
     its parent's parent, etc).  There  are certain items which you may  not
     change for any  account that has  a current balance  (since that  would
     corrupt your books).  These items are:
     
               1)  the debit/credit type
               2)  the account's PARENT
     
          You may modify the account's name, number, previous balances,  and
     budget and any time.  (NOTE: you may not modify the PARENT accounts  AT
     ALL!)  For these  reasons, it is important  that you double check  your
     chart of accounts before you do any posting.  It is especially critical
     for you  to ensure  that  the debit/credit  type  is correct  for  each
     account.  BE  VERY CAREFUL  WHEN MODIFYING AN  ACCOUNT'S NUMBER,  SINCE
     UNPOSTED TRANSACTIONS MAKE  REFERENCE TO  THESE NUMBERS!   If you  have
     open transactions and change an account's number before you post  them,
     you may lose some of the data!   In practice, it is a good idea not  to
     change account numbers after you have started using the system.
     
          As you edit accounts, you may press <F5> to bring up a search  and
     filter window.  You can use this function to quickly find the  accounts
     you need to modify.  Refer to section 2.8 (Searching and Filtering  the
     Databases) for information on  how to use  this very powerful  function
     
     
     Chapter 3: Getting Started                                         3-3








     throughout CheckMate-GL.  Also  note that pressing  <F7> and <F8>  will
     let you move back and forth through  your accounts.  You may delete  an
     account with <F4>.  Remember that you must save the changes with  <F10>
     before any of the changes will become permanent!
     
     3.1.6  Printing Your Chart of Accounts
     
          You can use the "chart  of Accounts" function under the  "Reports"
     menu to print out your chart.  As with all reports in CheckMate-GL, you
     have several options regarding where you want your report to go and can
     control the report output.   Refer to 2.9  (Printing Reports) for  more
     details on printing reports.
          The search window is available to filter your output.  Press  <F5>
     to pop it up.  When you are ready to print, press <F10>.
     
     
     3.2  General Setup
     
          Once you have  created your chart  of accounts, you  are ready  to
     proceed with the configuration of your accounting system.  You will  do
     a good bit of this under the "Setup" menu.
     
          Start with the "General  setup".  In this  module, you will  first
     enter the  account to  which you  will clear  all Revenue  and  Expense
     balances at the  end of the  accounting year.   This account should  be
     under Owner's  Equity  and is  usually  called "Retained  Earnings"  or
     "Profit/Loss".   Enter the  correct account  number (CheckMate-GL  will
     then display the account name).   Remember to press <F10> to save  your
     selection.  You will not be able to run the End-of-Year routines  until
     you have specified this account.
          The next  two  options  are  for personal  preference.    You  may
     instruct CheckMate-GL to display  commas in dollar  values (or you  may
     have the  commas omitted).    Generally, the  commas make  the  numbers
     easier to read.  One reason why you may want to turn them off, however,
     is that due  to limited  screen space many  of the  display fields  are
     restricted to  12  characters.   This  is adequate  to  display  values
     ranging from -999,999.99 to 9,999,999.99.  For most users, this will be
     more than adequate.  You can get another digit or two of range  without
     the commas.
          The last option lets you decide between displaying negative values
     with minus-signs (the way  most of us do  it) or with parentheses  (the
     way accountant's prefer).   In order to keep  the columns in line,  you
     sacrifice one  additional  digit  of  display  range  while  using  the
     parentheses option.
          Remember that none of your selections will be permanent until  you
     press <F10>!
     
     3.3  Company Information
     
          In the  "company Information"  module  you can  enter data  to  be
     printed at the top of  reports.  You will  probably want to enter  your
     company or personal name on  line 1 as that  line is also displayed  in
     the upper right corner of the CheckMate-GL screen (to remind you  whose
     files you are working with).  You may also enter address, phone numbers
     and  slogans  on  the  additional  lines.    The  information  will  be
     
     
     Chapter 3: Getting Started                                         3-4








     automatically centered at  the top  of the  reports.   Again, you  must
     press <F10> to save your entries!
     
     3.4  Generating Custom Reports
     
          The two basic  reports produced  by an accounting  system are  the
     Balance Sheet and  the Profit and  Loss Statement.   These reports  are
     specific to a chart  of accounts and therefore  will vary from user  to
     user.  CheckMate-GL  has a  very powerful custom  report facility  that
     will let  you  define  and  customize  up  to  ten  different  reports.
     Unfortunately, this  level of  flexibility makes  defining the  reports
     somewhat difficult, even for experienced computer users.
          BUT DON'T WORRY!   As we did with  CheckMate, we are dedicated  to
     making CheckMate-GL painless and easy to use.  Toward this end, we have
     implemented a "generate Reports" option in the "Setup" menu.
          When you  select this  option,  you will  see  a menu  with  three
     choices.  These choices correspond to the three different reports  that
     CheckMate-GL will  let  you generate  automatically.   They  include  a
     balance sheet and two variations of the profit and loss statement.
          Generating the reports is simple.  First pick the report that  you
     want to generate  from the  menu.   Next, you  will be  prompted for  a
     number between  0 and  9  (remember that  you  can have  ten  different
     reports).  Then  press <F10>  and CheckMate-GL will  create the  report
     design for you!  Once your reports  are created, you can run them  from
     the "Reports" menu (this is discussed in detail later in this manual).
         The reports generated are  standard ASCII text  files, and you  can
     modify them  (to summerize  your data  or add  features).   This is  an
     advanced step (see appendix C for details).
          If you choose a number that  is already in use, CheckMate-GL  will
     prompt you for confirmation of your intentions.  This is to prevent you
     from inadvertantly over-writing your reports.
          IMPORTANT!   Your  reports  are generated  around  your  chart  of
     accounts.  If you modify your chart of accounts, you should re-run this
     procedure to ensure that your report definitions are up-to-date!
     
     3.5  CheckMate Interface
     
          The "Checkmate interface"  module is where  you give  CheckMate-GL
     pertinent information about your checking and savings accounts.  If you
     are using CheckMate in coordination with CheckMate-GL, you need to tell
     CheckMate-GL where  to look  for your  CheckMate files  and into  which
     accounts to expense your CheckMate transactions.
          Start by  matching  your  CheckMate  account  numbers  to  account
     numbers in your  general ledger.   CheckMate allows up  to 8  different
     checking and savings  accounts.  They  are numbered 1  through 8.   For
     example, if your first CheckMate account is "Bay Bank", you would  look
     at your chart of accounts and see which general ledger account you have
     set up  as  "Bay Bank".    You would  enter  this number  next  to  the
     CheckMate "Account 1."   If you can not  remember the account  numbers,
     press <F2> to view your chart  of accounts.  Repeat this procedure  for
     all the CheckMate  accounts you  wish to  integrate into  CheckMate-GL.
     After you  have coordinated  your  CheckMate and  CheckMate-GL  account
     numbers, you need to  tell CheckMate-GL about  the environment you  are
     operating in.  If  you are using  a hard-disk (and  you keep your  data
     files  on  the  hard  disk)  answer  YES  to  the  "Hard-Disk  System?"
     
     
     Chapter 3: Getting Started                                         3-5








     question.  Then specify the directory in which CheckMate-GL should look
     for the CheckMate files.  If you are using floppies, then answer NO  to
     the question and specify  the CheckMate Data File  Path to be the  same
     drive as your CheckMate-GL PROGRAM disk.  CheckMate-GL will prompt  you
     to switch disks at the appropriate times.  It is important to note that
     your CheckMate-GL and your  CheckMate data files  MUST BE AVAILABLE  TO
     THE SYSTEM AT THE SAME TIME!
          Don't forget to press <F10> to save your entries!
     
     
          At this point you can run CheckMate-GL on a daily basis and  begin
     keeping accurate accounting data.  You  may wish to go directly to  the
     next chapter, "Daily Activity", and begin  using the system.  The  rest
     of this chapter is devoted to discussing the setup and use of "Standard
     Transactions" (a unique and powerful time-saving feature of  CheckMate-
     GL).
     
     3.6  Setting up your Standard Transactions
     
     3.6.1  Philosophy
     
          The most  tedious job  in  accounting is  making  the day  to  day
     journal transactions  that  reflect  the  cash flow  of  your  home  or
     business.  Proper  accounting procedures  demand that  you account  for
     every penny  that comes  in or  goes out...  and that  you make  double
     entries to properly document the flow!
           Fortunately,  much  of  the  tedium  can  be  relieved  when  you
     recognize the fact  that many  of the entries  that you  make during  a
     month will be similar to those that  you made last month.  In a  manner
     similar to CheckMate's  "PayTo" menu system,  you may record  up to  50
     "standard" journal transactions that will pop-up at the touch of a key.
          Think about this for a  minute, and you will  begin to see what  a
     tremendous time and work-saver this feature will be.  You will not need
     to remember  or  look up  account  numbers or  names.   The  number  of
     keystrokes you make will  be substantially reduced.   But even  better,
     you will  not have  to "re-think"  how to  distribute the  transactions
     between your accounts  each month.   An enormous amount  of the  effort
     involved in maintaining a good set  of books has just dropped into  the
     proverbial "bit-bucket"!
     
     3.6.2  Entering Your Standard Transactions
     
          Selecting "Standard entries"  from the "Files"  menu will cause  a
     pop-up menu with three choices to appear.  From here, you may enter  or
     edit the  standard  transactions,  or  you  may  rebuild  the  standard
     transactions file.
          Select "Enter standard  transactions" to input  new entries.   The
     first field  that you  are prompted  for is  the name  of the  standard
     transaction.  This name will appear on the pop-up menu (in alphabetical
     order).  It is important that you make a good descriptive entry here to
     help you while  you are inputing  your journal entries.   If you  leave
     this field blank, you will have a blank line on your menu.
          Next you make your  actual journal entries.   You need only  enter
     the account numbers, as  CheckMate-GL will fill in  the names for  you.
     CheckMate-GL incorporates  a substantial  amount of  error checking  at
     
     
     Chapter 3: Getting Started                                         3-6








     this level to prevent you from making illegal entries.
          Once CheckMate-GL has filled in the account name, you may enter  a
     description and amount.  Each line of the transaction may have either a
     debit or  a  credit (but  not  both).   Note  that you  can  leave  the
     description blank and  the amounts zero  and enter them  later (as  you
     make your actual journal entries).  You may also alter any of the  pre-
     defined fields during actual entry.
          Obviously, these transactions do not have to balance at this time.
     You may leave  many parts of  the transaction unfinished.   You  should
     complete as much as is practical, however, to minimize your work later.
          Press <F10> to save your transaction.  The <F9> key will clear the
     entry.  It my also be handy to note that you may press <F6> to bring up
     a menu  of  transactions  that  you have  already  defined.    You  may
     incorporate any of these into the one that you are working on!
     
     
     SPECIAL NOTE: If  you are using  CheckMate to keep  track of your  bank
     accounts, you will notice that CheckMate-GL will fill in the first line
     of the transaction  for you (see  the "eXpense checks"  section in  the
     next chapter).  For this reason, you  will want to leave that line  out
     while defining standard  transactions (which  will save  you even  more
     work!).
     
     
     3.6.3  Rebuilding the Standard Transactions file
     
          This  feature  is  included  for  maintenance.    You  may  repair
     corrupted index  files  or  reclaim  disk  space  released  by  deleted
     records.


























     
     
     Chapter 3: Getting Started                                         3-7








     
                        Chapter 4 -- Daily Activity
     
     4.1  Entering Daily Journal Transactions
     
          The secret to keeping abreast of your financial status is to  make
     frequent and timely entries into your general journal.  If you let your
     cash flow transactions build up, and  do not enter them regularly  into
     your journal, you will soon have an accounting nightmare on your hands.
          Large businesses  typically  maintain bookkeeping  personnel  that
     will make many journal  entries each day.   For the small business  and
     the  home  user,  however,  weekly  or  even  monthly  entries  may  be
     sufficient.  If you use CheckMate to keep track of your bank  accounts,
     CheckMate-GL provides  an exceptional  mechanism to  help you  in  your
     periodic journal entries (see the "eXpense checks" section below).  For
     those transactions not covered by your bank accounts, CheckMate-GL sets
     a  new  standard   of  "user-friendliness"  in   journal  entries   and
     maintenance.
     
     4.1.1  Entering Journal Transactions
     
          After selecting this function from  the "Activity" menu, you  will
     find  yourself  in  a  powerful   data  entry  window.     CheckMate-GL
     facilitates classical journal  entries (allowing  multiple entries  per
     transaction and a separation of debit and credit totals).
          The first field you need to enter is the date.  We anticipate that
     you may be making  your entries in "batch",  so we initially leave  the
     date blank.  As any date field in CheckMate-GL, you may key it in  free
     format leaving all or part of the  date out.  If you make your  entries
     every day, you can simply press <CR> here and CheckMate-GL will use the
     current DOS date.
          Now you may  make your individual  entries.  You  can move up  and
     down through  the lines  with the  arrow keys.  A <CR>  will cause  the
     cursor to move forward through the fields  on each line.  You may  make
     up to ten entries within each transaction.
          You must indicate the account number for each account  represented
     in the transaction.  Notice that CheckMate-GL fills in the account name
     for you.  You may also note that CheckMate-GL performs a great deal  of
     error checking throughout this module  to protect you from  inadvertant
     or illegal activity.
          After  supplying  the  account  number,  you  can  input  a  short
     description of the transaction.  You should make an effort to use  this
     space wisely, as your general journal will in many cases be the primary
     record  of  your  financial  activity.    The  columns  following   the
     description are for the amount of the entry.  CheckMate-GL will let you
     set the debit OR the credit, but not both.  Remember that the totals of
     the debits and the  credits for the entire  transaction must be  equal!
     CheckMate-GL will not let  you save the transaction  until this is  the
     case.  As always, you must press <F10> to save your data.
     
     TIME SAVERS:
     
          The built-in editing features of  CheckMate-GL alone make it  more
     friendly and useable than any other package on the market, and we  have
     added even more features to help you along.  One very powerful  feature
     
     
     Chapter 4: Daily Activity                                          4-1








     is the ability to automatically complete a transaction at the touch  of
     a key.  Pressing <TAB> causes CheckMate-GL to total and modify an entry
     so that the entire transaction is  in balance.  Pressing the <TAB>  key
     affects only the  line that the  cursor is on,  and it is  particularly
     useful in entering the last line of the transaction.
          CheckMate-GL boasts a revolution  in accounting packages with  its
     "CheckMate-style" pop-up  standard transactions.   Since  most of  your
     journal entries will periodically repeat, you can record them under the
     "Files" menu and save  yourself mountains of work.   Simply press  <F6>
     while entering transactions to bring up a menu of pre-defined  entries.
     You can have up to  fifty of them, so use  <PgUp> and <PgDn> to  scroll
     through the  available choices.   For  a discussion  on defining  these
     "standard transactions", see the previous chapter ("Getting Started").
     
     
     4.2  Expensing Checks and other CheckMate Transactions
     
          If you use CheckMate to keep track of your bank account  activity,
     then you have already  done much of the  work necessary in  maintaining
     accurate books.   Select  the  'eXpense checks'  option to  enter  this
     module.
          If you have a floppy disk only system, you will first be  prompted
     to exchange your  CheckMate-GL PROGRAM  disk with  your CheckMate  DATA
     disk.  At this  point, both your CheckMate-GL  and your CheckMate  data
     disks are available to the computer simultaneously.  You should also be
     aware that  since you  no longer  have your  CheckMate-GL program  disk
     available, you can not use the <F1> key to access the help file.
          If you have a hard disk  system, or if you keep your  CheckMate-GL
     and your  CheckMate  data files  on  the same  disk,  you will  not  be
     prompted to switch disks and help  will continue to be available.   You
     make  CheckMate-GL  aware  of  your  operating  environment  with   the
     "Checkmate interface" function located under the "Setup" menu.
          Now  you  are  ready  to   begin  processing  your  bank   account
     transactions.  You will first need to indicate a starting date.   There
     is no reason why CheckMate-GL should have to search through your entire
     CheckMate file searching for  transactions to expense.   You will  save
     this search time by indicating a  starting date for CheckMate-GL.   The
     default is the DOS date, so you will probably want to set it back a few
     weeks.
          Each CheckMate account should have a corresponding account in your
     general ledger.   The appropriate GL  account should appear  underneath
     the CheckMate account name.  You can specify the relationships  between
     these accounts in the "Setup" menu,  or you can enter them manually  at
     this stage.
          CheckMate-GL automatically  sets up  your first  active  CheckMate
     account to  process.   If all  is  well, you  should see  that  account
     displayed on the screen.  The <F4> key will pop-up a menu of  available
     CheckMate accounts.  When you have  selected the account that you  want
     to process,  press  <F10>.    Make  sure that  you  have  a  valid  and
     appropriate GL  account  specified  and  have  entered  an  appropriate
     starting date!
     
          After you press <F10>, CheckMate-GL  will open the CheckMate  file
     and look for un-expensed transactions.   If you get a "No  Transactions
     Found!" error, it means one of three things:
     
     
     Chapter 4: Daily Activity                                          4-2








     
          1)  there are no transactions in the file, or
          2)  all the transactions are already expensed, or
          3)  you did not properly specify the starting date
     
     Remember that CheckMate-GL will look for transactions entered after the
     starting date that you enter.
          Assuming that you have successfully entered the transaction  entry
     form, you will notice that you now have a split screen.  The top of the
     display shows the CheckMate transaction, and CheckMate-GL has filled in
     the first line of the general  ledger transaction.  You now proceed  in
     the same manner as you did while entering normal transactions.  All  of
     the editing and  time-saving features  are still available.   You  will
     not, however, be permitted  to modify the top  line of the  transaction
     (the one that CheckMate-GL provides).
          Once you save the transaction with <F10>, CheckMate-GL will update
     your CheckMate file  and mark  the CheckMate  transaction as  expensed.
     You can move back and forth through the available transactions with the
     <F7> and <F8> keys respectively.
     
     
     4.3  Editing Journal Transactions
     
          No matter how careful we try to be, we are bound to make  mistakes
     from time to time.  For this reason, and so you can easily examine your
     transactions, we have built  a powerful search  and edit facility  into
     CheckMate-GL.  Select "eDit transactions"  from the "Activity" menu  to
     access this function.
          The screen that you will see looks much like the transaction entry
     form.   CheckMate-GL  will automatically  position  you at  the  latest
     entry.  You can browse back and forth through the entries with the <F7>
     and <F8> keys.  To search for specific entries or to "filter" the  data
     file, press  <F5>  to  bring up  a  search  window.   This  feature  is
     particularly powerful in the transaction edit module.  You can  specify
     search and filter criteria for multiple accounts (and therefore quickly
     zoom in on the transactions of  interest).  Section 2.8 (Searching  and
     Filtering the Databases) describes in detail how to use the search  and
     filter functions throughout CheckMate-GL.
          You can edit any part of  the transaction, but you must adhere  to
     the same rules you did while entering them.  CheckMate-GL will not  let
     you save illegal transactions.  You may change any or all entries,  and
     the <F6> (standard transaction) menu  is available.  Your changes  will
     not be  permanent until  you press  <F10>.   You  may also  delete  the
     transaction by pressing <F4>.  In either case, CheckMate-GL will prompt
     you for confirmation before proceeding.
     
     SPECIAL NOTE: You  may edit  ANY transaction  fully, including  entries
     made while expensing checks.   You must take  care while editing  these
     transactions, as  changing  the debit  or  credit entries  could  cause
     CheckMate-GL's account balances to disagree with CheckMate's!





     
     
     Chapter 4: Daily Activity                                          4-3








     
                    Chapter 5 -- End-of-Month Routines
     
          At the end  of each month  you will generate  several reports  and
     POST your transactions to  the general ledger.   These are the  reports
     that make  all  the  hard  work of  maintaining  an  accounting  system
     worthwhile.
          The reports CheckMate-GL produces can be divided into two distinct
     categories: pre-post  and after-post  reports.   The  pre-post  reports
     operate on the general journal, while the after-post reports  summerize
     the general ledger balances.  It is important that you generate them in
     the proper order!
     
     
     5.1  Generating pre-post reports
     
          The posting process removes transactions from the general  journal
     and transfers their balances to the ledger.  It is crucial,  therefore,
     that you run the pre-post reports prior to posting, since they will  be
     UNAVAILABLE afterwards!  The two pre-post reports are:
     
          1)  Activity Report
          2)  Transaction Report
     
          Both of these reports are available under the "Reports" menu.
     
          The "activity Report" is equivalent to what many accountants  call
     a trial balance.  We don't call it that since CheckMate-GL will not let
     you make  journal entries  that don't  balance (so  theoretically  your
     accounts CAN'T be out of balance).   What the report does is  summerize
     the activity of each account.  You can filter the output by bringing up
     the search window (the <F5> key) to narrow your report around  specific
     dates and/or  accounts.    Section 2.8  (Seraching  and  Filtering  the
     Databases) discusses the  use and  operation of the  search and  filter
     function.   You also  have a  number  of options  available to  you  to
     control the  destination and  output flow  of your  report.   As  these
     options are consistent throughout CheckMate-GL, we have summerized them
     in section 2.9 (Printing Reports).
          The "Transaction report"  produces the same  data as the  activity
     report except that  the transactions  are displayed just  as they  were
     entered (rather  than  summerized  by  account).    This  report  is  a
     permanent record of your journal activity and should be kept in a  safe
     place!  Like the activity report,  you can filter your output with  the
     search and filter  function (see  section 2.8)  and you  have the  same
     printing options (see section 2.9).
          Both of  these reports  are useful  for isolating  and  correcting
     errors in your accounting  procedures.  In  practice, you should  print
     these out and examine them closely BEFORE you proceed with posting your
     transactions.  After posting, do not  discard these reports.  They  are
     valuable records!
     
     5.2  Posting journal transactions to the general ledger
     
          After you have  printed your  pre-post reports, you  are ready  to
     take a rather drastic  step: POSTING your  journal transactions to  the
     
     
     Chapter 5: End-of-Month Routines                                   5-1








     general ledger.  This  step is irreversible.   This is  a GOOD time  to
     make a back up copy of ALL your data files!
     
          Posting  involves  transferring  the  account  activity  from  the
     journal to the ledger.  After this is done, the transaction is deleted.
     Before you post, you may edit  your journal transcations directly.   To
     correct an error AFTER posting, you will have to make a reverse entry.
          You access this  function by selecting  "Post transactions"  under
     the "Activity" menu.  You must then  enter the month and year that  you
     want to  post.   Only the  transactions  dated in  that month  will  be
     posted, so you may have other  periods open and active and still  post.
     For instance, you may  have already made  journal entries for  February
     before posting January.   This is OK.   You may  even make entries  for
     January 1987 before posting January 1986 (but be careful!  You must run
     the  End-Of-Year  routines   before  subsequently   posting  the   1987
     transactions).  Once you have selected  a month and year, press  <F10>.
     CheckMate-GL will  prompt  you TWICE  to  be sure  of  your  intention.
     REMEMBER TO RUN YOUR PRE-POST REPORTS PRIOR TO POSTING!
          As your transactions are posted, you can see the number of  active
     transactions decrease.  If CheckMate-GL detects any errors, you will be
     prompted and the posting process will abort.
     
     5.3  Generating after-post reports
     
          After you  have  posted  the month's  transactions,  your  general
     ledger accounts will contain up-to-date balances.  You can now run your
     after-post reports (which are your "custom" reports).
          Select "Custom reports" from the "Reports" menu and you will see a
     menu listing the available reports.  (If this menu is blank, proceed to
     the "generate Reports" option under "Setup" to create them.)  Pick  the
     report that you want to  print, and the report  form will appear.   You
     have  several  options  at  this  point  concerning  both  the   output
     destination of the report and the flow of the output.  Refer to section
     2.9 (Printing Reports)  a general discussion.   When you  are ready  to
     print the report, press <F10>.
          The most common reports that you will print here are your  balance
     sheet and your profit/loss statements.  CheckMate-GL will create  these
     reports for  you  (see  section  3.4  --  Generating  Custom  Reports).
     CheckMate-GL will generate your balance sheet and TWO versions of  your
     profit and  loss statements.    The first  is  a cumulative  total  P/L
     statement and is labeled YTD (year-to-date).   The second one is for  a
     specific month.   You  decide which  month  you want  to report  on  by
     specifying the "Report Date" while printing out the report.
          Remember that even  though CheckMate-GL  generates these  reports,
     you can  modify them  to fit  your  specific needs  and desires.    See
     appendix C  for  a  detailed discussion  concerning  the  creation  and
     modification of custom reports.








     
     
     Chapter 5: End-of-Month Routines                                   5-2








     
                     Chapter 6 -- End-of-Year Routines
     
          The end of the accounting  year is a special  event.  This is  the
     time when accounts clear all expense and revenue accounts and  generate
     cumulative, yearly  reports.   You may  notice that  unlike some  less-
     friendly accounting packages, CheckMate-GL does not force you to  start
     your accounting year in January.   You may start  and end in any  month
     that you wish!
     
     6.1  Generating End-of-Year reports
     
          To close out  a year,  all revenue  and expense  accounts must  be
     zeroed and  their  balances  transferred directly  to  Owner's  Equity.
     Additionally, all monthly balances in ALL accounts must be cleared  and
     current balances copied to last year's balances.  Last year's  balances
     will be  moved to  year before  last's balances,  and the  year  before
     last's balances will be discarded.  Consequently, you want to run  your
     end-of-year reports BEFORE you close the year.
          Your primary end-of-year reports will  be a cumulative profit  and
     loss statement and a final balance sheet.  Use the YTD profit and  loss
     report and the balance sheet  you generated under the "Custom  reports"
     menu.  Be sure to post  your final month's transactions before you  run
     these yearly reports.
     
     6.2  Closing Revenue and Expense Accounts and Transferring Balances
     
          To perform all of these tedious tasks of transferring balances  in
     one easy step, proceed  to "end Year  routines" beneath the  "Activity"
     menu.   CAUTION!   BE SURE  THAT YOU  HAVE COMPLETED  THE  END-OF-MONTH
     PROCEDURES FOR YOUR LAST  MONTH BEFORE YOU CLOSE  OUT THE YEAR!   ALSO,
     THIS IS AN EXCELLENT TIME  TO MAKE A BACK UP  COPY OF YOUR DATA!   When
     you are ready  to close the  year, press <F10>.   As this  is a  pretty
     drastic step,  CheckMate-GL  will  prompt  you  twice  before  actually
     executing the procedure.  If you have not specified a valid account  to
     transfer the expense and revenue balances to, CheckMate-GL will not let
     you close the year.  If you  get an error message, look at section  3.2
     (General Setup).
     
     Congratulations!  You have  now completed an  accounting year, and  are
     all set up to start a new one!
     
     












     
     
     Chapter 6: End-of-Year Routines                                    6-1








     Appendix A -- An Accounting Primer
     
          This short tutorial is intended to give you a start into the world
     of classical accounting.  It is  by no means exhaustive, but it  should
     get you going.    If you run a small  business, this primer will  help,
     but you should still obtain a  complete text or hire an accountant  (or
     bookkeeper) to  help you  with  some of  the more  difficult  subjects.
     Since CheckMate-GL  follows standard  accounting rules,  virtually  any
     accounting text will be compatible.  If you are a casual or home  user,
     don't be frightened if this primer makes things seem complicated!   For
     home use, the rules of accounting can be can be greatly relaxed.
     
     
     What is Accounting?
     
          Accounting is the term we  apply to the discipline of  maintaining
     complete and  accurate  financial data.    Over the  years,  some  well
     defined practices and  conventions have developed.   Adhering to  these
     conventions will  make  your  accounting  data  compatible  with  other
     people's data,  and  consequently  it  will be  easier  for  others  to
     understand.  This is what we refer to as "classical" accounting.
     
          For business, proper accounting  can spell the difference  between
     success and  failure.   The fruits  of the  accounting system  are  the
     reports that you can generate.  These reports can help you analyze your
     cash flow and  make decisions  based on past  and present  performance.
     Having these reports available  can you give  you the competitive  edge
     that you need to succeed.  Also, most  banks, as well as the IRS,  will
     want to  see your  balance  sheet and  income statements  before  doing
     business with you!
     
          To start, we must divide your holdings, debt, expenses and income.
     We will  group these  items under  5 categories:  ASSETS,  LIABILITIES,
     EQUITY, REVENUE, and EXPENSES.
     
     What are ASSETS?
     
          Assets  are  money,  land,  items,  etc  that  you  have  in  your
     possession.  Essentially, they are anything that holds any value.   You
     do not have to own something for it to be an asset.  For instance,  the
     bank may hold the deed  to your home while you  pay off the note.   But
     since the use of the home is under  your control, it is still an  asset
     to you.   We  will see  below  how we  can balance  this asset  with  a
     corresponding debt (or  liability).  Assets  can take many  forms.   If
     someone owes you  money, for instance,  then you have  an asset in  the
     form of a note or an IOU.
     
     What are LIABILITIES?
     
          Liabilities are any debts that you owe.  In the example above,  we
     have an asset (our home).  But we also owe money against the home,  and
     that is a liability.   Not all liabilities  need be bank  loans.  In  a
     business, money that we owe to our employees (in the form of pay) is  a
     liability.  Income tax that we  owe the government is also a  liabilty,
     as is rent due, etc.  In short, any time that we owe money or  services
     
     
     Appendix A: An Accounting Primer                                   A-1








     we have a liability.
     
     What is EQUITY?
     
          Equity is the difference between  our assets and our  liabilities.
     The equity in  your home, for  example, is the  difference between  the
     value of  your home  (your asset)  and  the money  that you  owe  (your
     liability).  Your total  net worth, then, is  the delta between all  of
     your assets and the total of your liabilities.
     
     The Accounting Equation
     
          It is  the  above relationship  that  forms the  principle  behind
     classical accounting.  We can state that relationship as such:
     
                       ASSETS - LIABILITIES = EQUITY
     
     If we do a little math, we can rearrange the above equation:
     
                    ------------------------------------
                    |  ASSETS = LIABILITIES + EQUITY   |
                    ------------------------------------
     
     This equation  is referred  to as  the ACCOUNTING  EQUATION.   Remember
     it... it is important!
     
          The principle of  this equation is  clear.  If  you increase  your
     assets, then something else  has to change to  keep the equation  true.
     Let's say you buy a car, and hence increase your assets (you now have a
     car).   To keep  the above  equation true,  you must  do one  of  three
     things:
     
               1) Decrease another asset (pay cash or trade for the car)
               2) Increase a liability (borrow the money for the car)
               3) Increase your equity
     
     The first two options are  straight-forward and are easily  understood.
     The last  option is  a little  more difficult  to understand  until  we
     further explore how we can make changes to equity.
     
     
     What are REVENUE and EXPENSES?
     
          The  three  categories  that  we  discussed  above  describe  your
     financial status in a "static" way.  There is no way to either increase
     nor decrease  your  net  worth  (equity) by  merely  adding  assets  or
     liabilities.  Revenue and expenses provide this avenue.
          Revenue is money that you take  in, usually in exchange for  goods
     or services.  Revenue has the characteristic of INCREASING your equity.
     That is, an asset  will increase (such as  cash) with NO  corresponding
     increase in a liability.   Not all money that  you take in is  revenue.
     Money that you receive in payment of a debt, for example, increases  an
     asset (cash) but also decreases another asset (the note you hold).  The
     net effect is that your equity is unchanged.  In the above example, you
     could obtain the new car by working for it, or maybe by winning it in a
     
     
     Appendix A: An Accounting Primer                                   A-2








     contest.  In  either case,  we have increased  our equity  by the  same
     amount that we have increased our assets (the price of the car).
          Expenses reduce your equity.  A  good example is your power  bill.
     You pay the bill with cash, and your  assets are reduced.  But you  did
     not reduce a liability,  and you did not  increase another asset.   The
     electricity was  consumed!    Whether  or not  goods  or  services  are
     "consumed" is one good way to tell expenses apart from liabilities.
     
          In the case of  a business or a  corporation, you can increase  or
     decrease the company's equity in another fashion.  When you sell stock,
     you DIRECTLY increase the equity  in the company.   But it is not  YOUR
     equity in the company that has increased, but the person who bought the
     stock.  In fact, a company can have many, many owners.  That is why  we
     will often refer to equity as OWNER'S EQUITY.
     
          But lets' get back to revenue and expenses.  There is yet  another
     relationship that we should document here.  This one is more familiar:
     
                --------------------------------------------
                |  PROFIT (or LOSS) = REVENUE - EXPENSES   |
                --------------------------------------------
     
     Notice that that if expenses exceed  revenue, we have incurred a  LOSS.
     Let me take a minute to point  out that (LOSS) here is in  parentheses.
     Accountants typically do not like  to use negative numbers, but  rather
     indicate a  negative  amount  by  enclosing  it  in  parentheses.    In
     CheckMate-GL, we give you the option of using either convention.
          In either case, the difference  between revenue and expenses  will
     tend to either increase  or decrease our equity.   Also notice that  if
     equity changes, then either assets  or liabilities must change.   Let's
     say we incur  a loss,  and equity decreases.   To  make the  accounting
     equation remain true, we must either draw on assets (maybe take cash to
     pay the loss) or increase liabilities (perhaps borrow money to make  up
     for the loss).
          Revenue and expenses are actually  only extensions of equity.   We
     give them  their  own categories  since  it  is useful  to  treat  them
     separately while computing profit or loss.
     
     
     How does it all work in real life?
     
          To try and tie the above principles together, let's hypothesize  a
     small company, called  XYZ Shoes, Inc.   We will  draw on this  example
     throughout the remainder of this primer.
     
     
     What are ACCOUNTS?
     
          Accounts are the accountant's  method of separating and  detailing
     individual items under each of the above categories.  You can think  of
     an account as the dollar value of each item.  We will give each account
     a descriptive name, as well as an account number.
          Accounts  are  logical  entities,  and  it  may  be  difficult  to
     physically separate them  from one  another.   This is  OK, because  we
     don't need to...  we merely  need to track  the current  value of  each
     
     
     Appendix A: An Accounting Primer                                   A-3








     account.
          Things may be starting to seem  confusing.  An example here is  in
     order.  Consider our  ASSETS category.  We  will use accounts to  break
     down and detail the assets of the XYZ Shoe company:
     
          ASSETS of XYZ Shoe Company
          --------------------------
            Cash :              $   450.35
            Checking Account:     1,300.25
            Building :           78,000.00
            Inventory :           4,875.00
            Pickup Truck :        6,500.00
            Office Furniture :    1,200.00
            Office Equipment :    3,200.00
            Accounts Receivable :   880.00
     
     Each item that we listed has become  an account.  The total of all  the
     listed accounts will be the total assets  for XYZ.  Now lets' list  the
     liabilities and equity accounts:
     
          LIABILITIES of XYZ Shoe Company
          -------------------------------
            Accounts Payable : $  1,345.00
            Salaries Payable :      850.00
            Sales Tax Payable :     242.25
            Income Tax Payable :      0.00
            Mortgage :           65,000.00
     
          EQUITY of XYZ Shoe Company
          --------------------------
            Initial Capital :  $ 28,968.35
            Profit/Loss  :            0.00
     
     We are assuming (for the purpose  of this example) that the above  data
     was true on Jan 1, 1987.   Profit/Loss is zero, since we have  incurred
     no expenses nor made any revenue in the  new year.  We will follow  the
     example and see how the profit builds.
     
          If you total the amounts above,  you will see that the  accounting
     equation is satisfied.  But don't  bother just yet... we will prove  it
     in a minute.
     
          Now lets  construct our  "Chart of  Accounts", which  is simply  a
     listing of all our accounts.  We will also add our REVENUE and  EXPENSE
     accounts while we are at it.
     









     
     
     Appendix A: An Accounting Primer                                   A-4








     
     
     ------------------------------------------------------------------------
                                 XYZ Shoes, Inc
                                  PO Box 0000
                                 Anytown, USA
                                (555) 555-5555
                            "Our Shoes Smell Good"
     ------------------------------------------------------------------------
                                 Mar 22, 1987
     Chart of Accounts                                               page   1
     ------------------------------------------------------------------------
     ------------------------------------------------------------------------
     Acct#   DB/CR   Account Name
     -----   -----   -----------------------------------
     1        DB     ASSETS
     10000    DB       Cash
     10001    DB       Checking Account
     10002    DB       Building
     10003    DB       Inventory
     10004    DB       Pickup Truck
     10005    DB       Office Furniture
     10006    DB       Office Equipment
     10007    DB       Accounts Receivable
     10008    DB       Purchases
     2        CR     LIABILITIES
     20000    CR       Accounts Payable
     20001    CR       Salaries Payable
     20002    CR       Sales Tax Payable
     20003    CR       Income Tax Payable
     20005    CR       Mortgage
     3        CR     OWNER'S EQUITY
     30000    CR       Initial Capital
     30001    CR       Profit/Loss
     4        CR     REVENUE
     40000    CR       Sales
     40001    CR       Misc Income
     5        DB     EXPENSES
     50000    DB       Cost of Goods Sold
     50001    DB       Salary Expense
     50002    DB       Utilities Expense
     50003    DB       Interest Expense
     50004    DB       Misc Expense
     
     
          We used CheckMate-GL to print the chart.  See the account numbers?
     The five  major  categories are  numbered  '1' through  '5',  and  each
     account under them begins with the same  number.  This is a common  and
     logical way to number and group your accounts.  The 'DB' and 'CR' stand
     for 'debit' and 'credit'... we are just about to get around to that...
     
     What are DEBITS and CREDITS?
     
          It makes sense that when you use cash to pay a loan, you  decrease
     an asset (cash) and  decrease a liability  (the loan).   It is easy  to
     
     
     Appendix A: An Accounting Primer                                   A-5








     visualize, but not so  easy to document.   Accountants use a system  of
     'debits' and 'credits' to document the  flow of value.  Also,  remember
     that accountants avoid the use of negatives wherever possible.
          Every account has a  balance.  We  saw that the  sum of the  asset
     accounts must equal the sum of  the liability and equity accounts.   We
     will say,  arbitrarily,  that  assets  have  DEBIT  balances  and  both
     liabilities and  equity have  CREDIT balances.   Therefore,  the  total
     debit balance equals the total credit balance.
          Whoa!  You may well be wondering how we decided to assign  "types"
     to the balances.  It is strictly a  way of looking at the data.  If  we
     say that assets  have debit  balances and both  liabilities and  equity
     have  credit  balances,  we  have  merely  transformed  the  accounting
     equation into this form:
     
                          ----------------------
                          |  DEBITS = CREDITS  |
                          ----------------------
     
          Take a minute and let  this sink in.   The concept is the  same...
     we have just changed the notation.  When you understand the  difference
     between a  debit and  a credit,  you will  be over  a major  hurdle  in
     understanding the basic premises of accounting.
     
          Now lets transform this notation into practice.  An asset  carries
     a debit balance.  This means that when we wish to INCREASE the asset we
     must DEBIT the account.  So, if I  start with $50 in an account, and  I
     make a $100 debit, I now have $150 in the account.
          Most people unfamiliar with accounting  may scratch their head  at
     this point.  Does it seem backwards?   After all, when the bank  DEBITs
     my account, my assets DECREASE, not  increase.  True, BUT the debit  is
     from the bank's point of view, not  yours!  The debit did increase  the
     bank's  assets  (at  your  expense!).    For  those  of  you  who   use
     CheckMate... that is  why we  refer to  the transcation  types as  BANK
     DEBITS and BANK  CREDITS, so there  is no confusion  on whose point  of
     view is prevailing.
          Conversely, we  will  credit  a liability  or  equity  account  to
     increase it.  Can  you see that  when we want  to DECREASE a  liability
     that we will debit it?  Let's look at the payment of a loan again.   We
     have two accounts... one called 'CASH' and one called 'LOAN'.  CASH  is
     an asset  (debit) account  and LOAN  is a  liability (credit)  account.
     When we make payments on a  loan, both accounts must decrease (cash  is
     obviously less, and now we owe less).  Let's see it work:
     
          Pay $50.00 cash    (credit CASH $50)
          Lower loan $50.00  (debit LOAN $50)
     
     See what we have done?  We have credited CASH and debited LOAN, and the
     sum of the debits ($50.00) equals the sum of the credits ($50.00).   It
     may still not be  crystal clear, but  give it a little  time.  What  we
     have documented above is  a TRANSACTION.   The transaction affects  the
     balances of  our accounts.   As  always,  we MUST  make sure  that  the
     accounting equation is satisfied.  To do this, the transaction must not
     disturb the overall balance of the equation.  Hence, all debit  entries
     in a transaction must equal all credit entries in the transaction!
          Incidently, here  is how  CheckMate-GL would  document the  trans-
     
     
     Appendix A: An Accounting Primer                                   A-6








     action.  Notice that the sum of debits and credits do indeed equal.
     
     ------------------------------------------------------------------------
     ------------------------------------------------------------------------
     Date:    Mar 22, 1987
     Acct#     Account Name      Description          Debit         Credit
     -----  ------------------  -----------------  ------------  ------------
     10000  CASH                Payment to LOAN            0.00         50.00
     20000  LOAN                Reduce LOAN               50.00          0.00
                                                   ------------  ------------
                                                          50.00         50.00
     ------------------------------------------------------------------------
     
     
          The above  transaction is  a "double-entry"  transaction since  we
     made two entries  (to show  how the money  flowed from  one account  to
     another).  Now  you can  see why  people call  true accounting  systems
     "double-entry" systems.  In  real life, however,  money often flows  to
     and from many accounts in the same transaction.  CheckMate-GL will  let
     you make up to TEN entries per transaction.
          Let's see how this would work.  Assume that Mr. Jackson walks into
     XYZ's showroom and  wants to buy  a pair of  alligator skin boots  with
     inlaid gold  and ruby  trim.   The  price on  the  shoes (on  sale)  is
     $999.95.  Mr. Jackson has good credit, and decides to pay $200 cash and
     make  the  rest  in  weekly  installments  of  $50.    How  would  this
     transaction be recorded?
     
     ------------------------------------------------------------------------
     ------------------------------------------------------------------------
     Date:    Mar 22, 1987
     Acct#     Account Name       Description         Debit         Credit
     -----  ------------------  -----------------  ------------  ------------
     40000  Sales               Mr. Jackson                0.00        999.95
     20002  Sales Tax Payable   5% sales tax               0.00         50.00
     10000  Cash                Down Payment             200.00          0.00
     10007  Accounts Receivabl  On Credit                849.95          0.00
                                                   ------------  ------------
                                                       1,049.95      1,049.95
     ------------------------------------------------------------------------
     
     In a single transaction, we have made four entries.  We have  increased
     (debited) two assets,   CASH and  ACCOUNTS RECEIVEABLE.   We have  also
     increased (credited)  a liability  (SALES TAX  PAYABLE) and  a  revenue
     (SALES).  Mr. Jackson has paid $200 and still owes $849.95 for a  total
     of $1049.95 (including sales tax).
     
          You should  take a  moment  to see  how future  transactions  will
     develop.  Every time that Mr. Jackson makes a payment on his boots,  we
     will debit (increase) CASH and credit (decrease) ACCOUNTS  RECEIVEABLE.
     Also, when  we  pay  the  state  our sales  tax  due,  we  will  credit
     (decrease) CASH and debit (decrease) SALES TAX PAYABLE.  For you  folks
     in business...   notice  how the  sales tax  never found  its way  into
     either revenue or  expenses?   It shouldn't, since  the collection  and
     paying of sales tax does not affect our profit or loss!
          Speaking of profit and loss... how much profit did we make when we
     
     
     Appendix A: An Accounting Primer                                   A-7








     sold the boots?   Well, the cost  of the boots  falls into the  account
     COST OF GOODS SOLD.   But rather than  calculate profit on every  sale,
     XYZ uses  the End-of-Period  Adjustment method.   At  the end  of  each
     month, XYZ  will  take  an  inventory  of all  shoes  in  stock.    The
     difference between  the current  (closing) inventory  and last  month's
     (opening) inventory  is entered  into  the journal.    (We do  this  by
     crediting INVENTORY with last month's  value and then debiting it  with
     the current value).   As we make purchases  during the month, we  enter
     them into an account called PURCHASES.  At month's end we will transfer
     our PURCHASES to INVENTORY while we  calculate the COST OF GOODS  SOLD.
     The difference between the two is COST OF GOODS SOLD for the month.  To
     illustrate, suppose that XYZ  had $3,000 worth of  shoes at the end  of
     February.  At the end of March they had $2,750 worth of shoes in stock.
     During March, they bought $3,200 worth of new shoes.  What is the  COST
     OF GOODS SOLD during March?
     
     ------------------------------------------------------------------------
     ------------------------------------------------------------------------
     Date:    Apr  1, 1987
     Acct#     Account Name       Description        Debit         Credit
     -----  ------------------  -----------------  ------------  ------------
     10003  Inventory           At End of Feb              0.00      3,000.00
     10008  Purchases           Purchases (Mar)            0.00      3,200.00
     10003  Inventory           At End of March        2,700.00          0.00
     50000  Cost of Goods Sold  For March              3,500.00          0.00
                                                   ------------  ------------
                                                       6,200.00      6,200.00
     ------------------------------------------------------------------------
     
     The COGS (Cost of  Goods Sold) for  March was $3,500.   I realize  that
     this is kind of a whirlwind  approach to accounting methods.   Remember
     that this is a simple  primer designed to get  you started off.   There
     have been entire volumes  written on accounting, and  we can't hope  to
     cover all  the subjects  here.   If  you need  to do  serious  business
     accounting, we heartily recommend that you get yourself a good book  or
     an accountant to help you!
     
         Hopefully you now can visualize this subject of debits and credits.
     We also hope that you have a grasp on the concepts of profit and  loss.
     We will now persue that topic in more detail.
     
     
     Accounting Reports
     
          You saw above how you make daily entries into something we call  a
     JOURNAL.  In CheckMate-GL, we maintain a GENERAL JOURNAL (since we make
     all journal entries into a common  database).  Your chart of  accounts,
     on the other hand, makes up the  GENERAL LEDGER.  You will notice  that
     after you  save  your journal  entries  that NOTHING  HAPPENS  to  your
     accounts!  The balances do  not change.  And  they will not, until  you
     POST your journal entries to the ledger.
          Accountants  maintain  the  journals  separate  from  the  ledgers
     because it  helps  them detail  activity  in a  particular  period  and
     because they can make adjusting entries and corrections to the  journal
     before they  post.    That's  a  mouthful.   Suffice  it  to  say  that
     
     
     Appendix A: An Accounting Primer                                   A-8








     CheckMate-GL behaves properly and follows these rules.  Therefore,  you
     must eventually POST your journal transactions to your general ledger.
          Usually you will post at the end of each month.  Before you  post,
     however, you will  make some  reports that  are based  on the  journal.
     These are your ACTIVITY  REPORT and your TRANSACTION  REPORT.  For  you
     accountants, the ACTIVITY REPORT  is very similar  to a trial  balance.
     In short, the activity report  lists all accounts sequentially and  the
     debit and credit summary of each.  If you make end-of-month adjustments
     (like the one discussed above for COST OF GOODS SOLD), this report will
     help you collect  the figures that  you need.   The other report,  your
     TRANSACTION REPORT, details  all entries  for the month  and serves  as
     your permanent record that these entries were made.
          Once you  have  made these  reports,  you will  POST  the  month's
     transactions to the ledger.  This involves transferring all debits  and
     credits for  each  transaction to  the  corresponding accounts  in  the
     ledger.  This  can be tedious  and long!   Thank goodness the  computer
     (and CheckMate-GL) will do it for us.
     
          After posting, your ledger is up to date!  Now comes the most ben-
     eficial aspect of accounting... your accounting reports.
     
     The Balance Sheet
     
          Remember the accounting equation?  The way we ensure that we  have
     followed all the rules is through our BALANCE SHEET.  The balance sheet
     can be very  detailed or very  general.  CheckMate-GL  will generate  a
     balance sheet  report  definition that  will  list ALL  of  your  asset
     accounts and show how  they balance against ALL  of your liability  and
     equity accounts.    This is  a  very detailed  balance  sheet.   If  we
     summerized the data (which you can do by customizing your reports), you
     could produce a general balance sheet.  The balance sheet is a snapshot
     of the company's holdings  and debt at  a given instant.   It does  not
     reflect the passage of any time,  but rather shows an entity's  current
     worth.
          An example is worth a thousand words.  Below is an example for XYZ
     Shoes.  Notice that the total of assets does indeed equal the total  of
     liabilities and equity.


















     
     
     Appendix A: An Accounting Primer                                   A-9








     
     ------------------------------------------------------------------------
                                 XYZ Shoes, Inc
                                   PO Box 0000
                                  Anytown, USA
                                 (555) 555-5555
                             "Our Shoes Smell Good"
     ------------------------------------------------------------------------
                                  Apr  1, 1987
     Balance Sheet                                                   page   1
     ------------------------------------------------------------------------
     
     
     * ASSETS
     
      Cash                                        1,685.11
      Checking Account                            1,642.69
      Building                                  101,987.88
      Inventory                                   9,251.11
      Pickup Truck                               13,000.00
      Office Furniture                            4,400.00
      Office Equipment                            7,550.85
      Accounts Receivable                         3,114.71
      Purchases                                   3,100.00
                                            --------------
        Total Assets                                           145,732.35
                                                           --------------
                                                           --------------
     
     
     * LIABILITIES AND OWNER'S EQUITY
     
     Liabilities
      Accounts Payable                            1,345.00
      Salaries Payable                            3,150.00
      Sales Tax Payable                             487.25
      Income Tax Payable                              0.00
      Mortgage                                   84,055.80
                                            --------------
        Total Liabilities                                       89,038.05
     
     Owner's Equity
      Initial Capital                            54,430.43
      Profit/Loss                                     0.00
      plus REVENUE                               12,808.79
      less EXPENSES                              10,544.92
                                            --------------
        Total Owner's Equity                                    56,694.30
                                                           --------------
        Total Liabilities + Equity                             145,732.35
                                                           --------------
                                                           --------------
     
     

     
     
     Appendix A: An Accounting Primer                                  A-10








     
     The Profit & Loss Report
     
          The Profit and  Loss Report,  on the  other hand,  does reflect  a
     change from earlier period to the present.  It is simply the difference
     between REVENUE  and EXPENSES  for  a given  period.   You  can  create
     monthly, quarterly, and  yearly reports, and,  like the balance  sheets
     they may be very general or  very specific.  CheckMate-GL will let  you
     automatically create  very  detailed  reports for  monthly  and  yearly
     reports.  An example (for XYZ shoes)  is presented below.  The data  is
     all hypothetical.
     
     ------------------------------------------------------------------------
                                 XYZ Shoes, Inc
                                   PO Box 0000
                                  Anytown, USA
                                 (555) 555-5555
                             "Our Shoes Smell Good"
     ------------------------------------------------------------------------
                                  Mar 31, 1987
     Profit/Loss Statement (Month)                                   page   1
     ------------------------------------------------------------------------
     
     
     * REVENUE
     
      Sales                                      12,488.79
      Misc Income                                   320.00
                                            --------------
        Total Revenue                                           12,808.79
     
     
     * EXPENSES
     
      Cost of Goods Sold                          8,803.00
      Salary Expense                              1,200.00
      Utilities Expense                             125.33
      Interest Expense                              128.59
      Misc Expense                                  288.00
                                            --------------
        Total Expenses                                          10,544.92
     
     
                                                           --------------
        Total Profit (Loss)                                      2,263.87
                                                           --------------
                                                           --------------
     
     
          These reports are  produced at  the end of  an accounting  PERIOD,
     usually a month,  and are called  End-of-Period Reports.   CheckMate-GL
     assumes an accounting period to be a month, and generates  end-of-month
     reports.   With CheckMate-GL's  powerful report  customizing  features,
     however, you can define quarterly or semi-annual reports, or any report
     in any format that you choose!   See appendix C for more details.   You
     
     
     Appendix A: An Accounting Primer                                  A-11








     will also want  to create  end-of-year reports,  which are  essentially
     reports created after your  last month and BEFORE  you do your  end-of-
     year maintainance (discussed below).
          These reports  offer a  wealth  of information.   As  you  produce
     reports each month,  you can draw  additional information by  comparing
     new reports with old.  These reports will also be helpful while  filing
     taxes (or surviving an  audit) and when negotiating  with the bank  for
     loans.
          Home users have the  opportunity to see  trends in their  spending
     and to quantify their  net worth.  Few  individuals or families  REALLY
     know where they are financially.   CheckMate-GL can help you make  your
     dollars go farther by showing you where they went in the past!
     
     Where does it all end?
     
          We aren't quite finished  yet.  There is  still one more topic  to
     cover... ending  the  accounting  year.   At  some  point  we  want  to
     consolidate cumulative data and "reset" our books.  This is the end-of-
     year routine.
          First, we want  to transfer  our current balances  to LAST  YEAR'S
     BALANCE (a  figure  we keep  for  history  and comparison).    We  also
     transfer LAST YEAR'S BALANCE to the YEAR  BEFORE LAST.  We do NOT  zero
     out our  current balances.   Rather,  at  the start  of any  year,  our
     current balance for each account  should equal the last year's  balance
     for that account.  This makes sense, when you think about it, but there
     is an exception.
          Remember that  REVENUE  and  EXPENSES  are  actually  sub-sets  of
     EQUITY?  We keep them separate during  the year so that we can  quickly
     assess our profit/loss picture.   At the end  of the year, however,  we
     want to zero the  revenue and expense accounts  and start with a  clean
     slate.
          Anytime that  we  change  an  account's balance  we  must  make  a
     corresponding  change  to  another  account  (remember  the  accounting
     equation!).  In order to "zero" our revenue and expenses, then, we must
     make balancing  entries  to  some  other  appropriate  account.    This
     balancing account  is usually  called "Profit  and Loss"  or  "Retained
     Earnings."  Since the profit (or  loss) for the year is the  difference
     between revenue and expenses,  these names are  both appropriate.   For
     this discussion, lets call the  account PROFIT/LOSS.  This account,  by
     the way, is an EQUITY account.
          So what do we do?   Well, we simply  transfer the balance of  each
     revenue account  to PROFIT/LOSS.   Since  revenue accounts  are  CREDIT
     accounts, we do  this by  DEBITING each revenue  account and  CREDITING
     PROFIT/LOSS.  So debits and credits are equal, and all revenue accounts
     now have a current balance of zero.
          Now repeat the process with all expense accounts.  Our debits  and
     credits are reversed now, however,  since expenses are DEBIT  accounts.
     Can you see that PROFIT/LOSS now holds the DIFFERENCE between  revenues
     and expenses?
          CheckMate-GL automates the end-of-year routines  as well.  Now  we
     are ready for a new  year and can track  our profit and loss  situation
     independently of previous years' data!
     
     

     
     
     Appendix A: An Accounting Primer                                  A-12








     
     Tying It All Together
     
     
          Let me fininsh this primer with  a diagram for creating and  main-
     taining your accounting system with CheckMate-GL:
     
        -------------------------
        | Install CheckMate-GL  |
        |  Chapter 1            |
        -------------------------
                    |
                    V
        -----------------------------
        | Create Chart of Accounts  |
        |  Chapter 3                |
        -----------------------------
                    |
                    V
        ----------------------------------------
        | Additional Setup                     |
        |  (Company info, P/L interface, etc)  |
        |  Chapter 3                           |
        ----------------------------------------
                    |
                    |<------------------------------------------------------
                    V                         ^              ^             ^
        -------------------------------       |              |             |
        | Daily Journal Transactions  |       |              | End         |
        |  Chapter 4                  |--------              | -of-        |
        -------------------------------   End-of-Month       | Year        |
                    |                        =NO             |  =          |
               ------                                        |  NO         |
               | End-of-Month=YES                            |             |
               V                                             |             |
      --------------------     -----------------     ------------------    |
      | Monthly Pre-Post |     | POST          |     | Monthly After- |    |
      |  Reports         |---->|  Transactions |---->|  Post Reports  |    |
      |  Chapter 5       |     |  Chapter 5    |     |  Chapter 5     |    |
      --------------------     -----------------     ------------------    |
                                                             |             |
                            End-of-Year=YES                  |             |
                   -------------------------------------------             |
                   |                                                       |
                   V                                                       |
        ------------------------     -------------------------             |
        | End-of-Year Reports  |---->|  End-of-Year Routines | -------------
        |  Chapter 6           |     |   Chapter 6           |
        ------------------------     -------------------------
     
     
     Final Thoughts
     
          I certainly hope that this primer has been of some use.  It is NOT
     meant to be  a substitute  for formal education,  since it  is much  to
     
     
     Appendix A: An Accounting Primer                                  A-13








     brief to  cover  many  of  the aspects  of  accounting  that  you  will
     encounter as you run your home or business.  It should give you a push,
     however, and perhaps make talking to your bookkeeper a little easier.
          I would  like to  have  put more  effort  and examples  into  this
     tutorial, including more discussion on  using CheckMate-GL in the  home
     environment.  But time and space are lacking.  The disk based manual is
     already 100K+, and there are many CheckMate users eager for the release
     of CheckMate-GL.  I CAN promise that we are working on expanded  tools,
     including a workshop for the home user.
     
     HOME USERS:  When you register, you will be placed on our mailing list,
     and will be notified when our "Home-User Workshop" is available.
     
     BUSINESS USERS:    If the  response  is positive,  we  are  considering
     putting together a workbook that takes a novice bookkeeper through  the
     basics of accounting for business, with examples and exercises based on
     and using CheckMate-GL.  This will be a "hands-on" workbook.  When  you
     register, give us feedback on  this project (since it is  significant).
     We will keep you informed by placing you on our mailing list.
     
     EDUCATIONAL USERS:  Both  packages we mention  above would be  suitable
     for classroom use.   We are considering  an "Educational Program"  that
     would make  copies  of the  Home-User  Workshop and  Business  Workbook
     available  in  quantity  and  at   reduced  prices  for  students   and
     instructors.  Mention your interest when you register, and we will keep
     you informed of our progress.
     
     Note to UNREGISTERED Users:   CheckMate and CheckMate-GL represent  our
     livelihood.  A significant investment in talent and time have been made
     and will continue.  We are  proud to release the products as  shareware
     for your evaluation, but it would be unfair to us and to our registered
     users to  provide  you with  support  and enhancements  (including  the
     packages mentioned above).  If  you use CheckMate and/or  CheckMate-GL,
     then we expect you  to register and support  the shareware concept  and
     our efforts  to provide  quality software.   Both  products are  priced
     significantly below competing commercial products since we have reduced
     advertising and  distribution  costs.    This  is  to  your  advantage.
     Support shareware and register today!
     
















     
     
     Appendix A: An Accounting Primer                                  A-14








     Appendix B -- Sample Chart of Accounts
     
          We have listed two  sample charts of  accounts for your  reference.
     The first chart is for a small business,  the second one is for a  home.
     Both charts  are  for reference  only  are  may not  represent  all  the
     accounts that you need for your particular application.
     
     -- Simple Chart of Accounts for a Small Business
     
     -------------------------------------------------------------------------
                               Your Business Name Here
                                       Address
                                       Address
                                    Phone Number
                                       Slogan
     -------------------------------------------------------------------------
                                    Mar 31, 1987
     Chart of Accounts                                                  page 1
     -------------------------------------------------------------------------
     -------------------------------------------------------------------------
     Acct#   DB/CR   Account Name
     -----   -----   -----------------------------------
     1        DB     ASSETS
     10001    DB       Your Bank
     10002    DB       Accounts Receivable
     10003    DB       Inventory
     10004    DB       Equipment
     10005    DB       Furniture and Fixtures
     10006    DB       Property - Land
     10007    DB       Prepaid Expenses
     10008    DB       Accumulated Depreciation
     2        CR     LIABILITIES
     20001    CR       Accounts Payable
     20002    CR       Salaries/Benefits Payable
     20003    CR       Commissions Payable
     20004    CR       Income Tax Payable
     20005    CR       Sales Tax Payable
     20006    CR       Line of Credit
     20007    CR       Credit Cards
     3        CR     OWNER'S EQUITY
     30001    CR       Shareholder's Equity
     30002    CR       Profit/Loss
     4        CR     REVENUE
     40001    CR       Sales
     40002    CR       Services Sold
     40003    CR       Misc Income
     40004    CR       Interest Income
     5        DB     EXPENSES
     50001    DB       Cost of Goods Sold
     50002    DB       Returns and Allowances
     50003    DB       Power
     50004    DB       Telephone
     50005    DB       Water/Sewer
     50006    DB       Gas
     50007    DB       Salaries/Benefits
     
     
     Appendix B: Sample Chart of Accounts                               B-1








     
     -------------------------------------------------------------------------
                                    Mar 31, 1987
     Chart of Accounts                                                  page 2
     -------------------------------------------------------------------------
     -------------------------------------------------------------------------
     Acct#   DB/CR   Account Name
     -----   -----   -----------------------------------
     50008    DB       Travel & Entertainment
     50009    DB       Depreciation Expense
     50010    DB       Bank Fees
     50011    DB       Office Supplies
     50012    DB       Interest Expense
     50013    DB       Advertising Expense
     50014    DB       Postage Expense
     50015    DB       Insurance Expense
     50016    DB       Misc Expense
     50017    DB       Rent Expense
     50018    DB       Income Tax Expense
     
     
     

































     
     
     Appendix B: Sample Chart of Accounts                               B-2








     
     -- Simple Chart of Accounts for a Home
     
     -------------------------------------------------------------------------
                                   Your Name Here
                                       Address
                                       Address
     
                                    Phone Number
     -------------------------------------------------------------------------
                                    Mar 31, 1987
     Chart of Accounts                                                  page 1
     -------------------------------------------------------------------------
     -------------------------------------------------------------------------
     Acct#   DB/CR   Account Name
     -----   -----   -----------------------------------
     1        DB     ASSETS
     10000    DB       Your Bank #1
     10002    DB       Your Bank #2
     10003    DB       Home Value
     10004    DB       Your Car #1
     10005    DB       Your Car #2
     10006    DB       Life Ins Policies
     10007    DB       Bonds
     10008    DB       Prepaid Expenses
     10009    DB       Household Goods
     2        CR     LIABILITIES
     20001    CR       Income Tax Payable
     20002    CR       Car Loan #1
     20003    CR       Car Loan #2
     20004    CR       MasterCard
     20005    CR       Visa
     20006    CR       Home Mortgage
     3        CR     OWNER'S EQUITY
     30001    CR       Savings
     30002    CR       Home Equity
     4        CR     REVENUE
     40001    CR       Salary
     40002    CR       Interest Income
     40003    CR       Misc Income
     5        DB     EXPENSES
     50001    DB       Electricity Expense
     50002    DB       Phone Expense
     50003    DB       Water/Sewer Expense
     50004    DB       Gas Expense
     50005    DB       Mortgage Interest
     50006    DB       MasterCard Interest
     50007    DB       Visa Interest
     50008    DB       Car Loan #1 Interest
     50009    DB       Car Loan #2 Interest
     50010    DB       Federal Income Tax
     50011    DB       State Income Tax
     50012    DB       Sales Tax
     50013    DB       Social Security
     50014    DB       Food Expense
     
     
     Appendix B: Sample Chart of Accounts                               B-3








     
     -------------------------------------------------------------------------
                                   Mar 31, 1987
     Chart of Accounts                                                  page 2
     -------------------------------------------------------------------------
     -------------------------------------------------------------------------
     Acct#   DB/CR   Account Name
     -----   -----   -----------------------------------
     50015    DB       Maintenance Expense
     50016    DB       Entertainment Expense
     50017    DB       Auto Insurance
     50018    DB       Home Owner's Insurance
     50019    DB       Term Life Insurance
     50020    DB       Misc Expense









































     
     
     Appendix B: Sample Chart of Accounts                               B-4








     
     Appendix C: Defining and Modifying Custom Reports
     
          This appendix  is  included in  the  full, 90+  page,  illustrated
     CheckMate-GL User's Guide (included when you register).


















































     
     
     Appendix C: Defining and Modifying Custom Reports                  C-1








     
     Appendix D: Technical Description
     
          This appendix  is  included in  the  full, 90+  page,  illustrated
     CheckMate-GL User's Guide (included when you register).
     

















































     
     
     Appendix D: Technical Description                                  D-1






```
{% endraw %}

## ORDER.DOC

{% raw %}
```

          CheckMate Series Order Form

          To:  Custom Technologies
               PO Box 62118
               Colorado Springs, CO  80962-2118


          Name: _________________________________________________

          Address:  _____________________________________________

                    _____________________________________________

                    _____________________________________________

          =======================================================
          Where did you hear about (and/or receive a copy of)
          CheckMate or CheckMate-GL?

               [ ] BBS    Name_________________  Ph______________
               [ ] SIG    Name___________________________________
               [ ] CompuServe
               [ ] Friend
               [ ] Other ________________________________________

          =======================================================
          Indicate the Product and Quantity to Order:

          Product                                Qty       Price
          -------                                ---       -----
          CheckMate @ $29.95 EA                  ___    ________
          CheckMate-GL @ $39.95 EA               ___    ________
          CheckMate/CheckMate-GL Bundle Pack
            @ $59.95 (save $10!)                 ___    ________

          Shipping & Handling ($3 ea pc)         ___    ________
            ($10 outside US/Canada)
          Tax (Colorado Residents add 3%)               ________

          TOTAL.....................................    ________

          ======================================================
          Payment by:

          [ ] Check/MO    [ ] VISA    [ ] MasterCard    [ ] COD

          (Make Checks Payable to Custom Technologies)

          Credit Card Number __________________________________

          Expires __________

          Name on the Card ____________________________________

          ======================================================
          YOU MAY ALSO ORDER BY CALLING TOLL FREE 1-800-541-6234
          OR (719) 597-8389.  Operators are on duty 24 hours a
          day, seven days a week.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0785

     Volume in drive A has no label
     Directory of A:\

    CMGL     000    120320   7-28-88   5:48a
    CMGL     COM     36484   7-28-88   5:48a
    CMGL     HLP     53560   4-01-87   9:29p
    CMGL     OVL     49335   7-11-88   5:09a
    CMGLINST COM     13145   5-09-88   5:18a
    FILES785 TXT      2581   9-16-88   3:10p
    GO       BAT        38   6-18-87   2:01p
    GO       TXT       617   9-16-88  11:51a
    MANUAL   ARC     52313   7-28-88   6:28a
    ORDER    DOC      2221   6-26-88   8:16p
    PKXARC   COM     11482  12-15-86
    READ     ME       4959   7-28-88   6:16a
           12 file(s)     347055 bytes
                            8192 bytes free
