---
layout: page
title: "PC-SIG Diskette Library (Disk #151)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0151/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0151"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINANCE MANAGER II"

    Finance Manager II is an extremely flexible and comprehensive
    accounting package for the non-professional accountant. It's an easy-
    to-use and very cost-efficient package for the small to medium
    businessperson.
    
    Outstanding features of Finance Manager II include:
    
    ~ Maintaining up to 1999 accounts
    
    ~ Recording up to 32,000 transactions per year (3,800 on floppies)
    ~ Providing a listing of all transactions in a specified period of time
    
    ~ Tracing account activity against Chart of Account numbers
    
    ~ Displaying net income (or net loss) for specific period requested
    ~ Showing balance sheet for assets, liabilities, and equity accounts
    ~ Providing cumulative or trended source/use-of-funds statement
    
    ~ Showing budget variance on expenditures
    
    ~ Listing a current Chart of Accounts to be run after changes
    
    ~ Listing of budgeted income or expense accounts
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES151.TXT

{% raw %}
```
Disk No:  151
Program Title:  FINANCE MANAGER II - General Ledger Lite version 1.3f
PC-SIG version: 2.9

The proper management of financial resources is the determining factor
in the survival of any business, large or small, public or private.
FINANCE MANAGER II is a splendid tool for you -- the small business
owner or individual, to easily manage your financial resources.  The
program, moreover, is easy to follow and designed for those with a
minimum of bookkeeping experience.

An exceptionally easy and low-cost way of managing your financial
resources, FINANCE MANAGER II provides the best and most comprehensive
personal or small-business financial program available.

Usage:  Business Bookkeeping/Financial Application.

Special Requirements:  Two floppy disk drives.

How to Start:  Type GO (press enter).

Suggested Registration:  $40.00

File Descriptions:

CONFIG   SYS  Needed to run FINANCE MANAGER (see CONFIG.SYS in DOS manual).
FMGL     COM  FINANCE MANAGER II executable file. Type FMGL to run.
FMGL     000  GL main module overlay 0.
FMGL     001  GL main module overlay 1.
FMGL     002  GL main module overlay 2.
FMGL     003  GL main module overlay 3.
FMGL-DOC ARC  GL Documentation manual archived (see PRINT-GL.BAT).
INSTALL  COM  Installation program.
RUN      BAT  To run FINANCE MANAGER.
EPSON    CNF  Sample EPSON printer configuration file.
HOME     CHR  HOME demo chart of accounts data.
HOME     GLT  HOME demo transaction data.
HP-LASER CNF  Sample HP printer configuration file.
JUKI     CNF  Sample JUKI printer configuration file.
ORDER    DOC  Blank order form which can be printed.
PRINT-GL BAT  Prints G/L documentation manual on printer (PRN).
PROWRITE CNF  Sample PROWRITER printer configuration file.
README   BAT  Displays this file on screen.
WORK     CHR  WORK demo chart of accounts data.
WORK     GLT  WORK demo transaction data.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## FMGL.DOC

{% raw %}
```










                                FINANCE MANAGER II 





                                GENERAL LEDGER Lite 


                                   USER'S MANUAL 










                                   Version 1.3f













                               Hooper International 
                                  P.O. Box 62219 
                            Colorado Springs, CO 80962 













      Copyright (C) 1986-1989 by Hooper International, Inc. 
      All rights reserved. 

















                                 COPYRIGHT NOTICE 

      FINANCE MANAGER is  not a public domain program.  It  is Copyright (C)
      1986-1989 by Hooper International.

      No part of  this manual may be reproduced, translated,  in any form or
      by  any  means,  without  the   prior  written  permission  of  Hooper
      International.

      The software described in this manual is protected by copyright laws. 


                   Copyright (C) 1986-1989 Hooper International 




                           RESTRICTED PERMISSION TO COPY 

      Clubs  and other  non-profit organizations  are granted  permission by
      Hooper International to  copy the evaluation version  of this program,
      as well as  its documentation, for member use only.   It is imperative
      that you  be aware that  said member use  is subject to  the following
      strictly-enforced restrictions: 

           No price may be charged, by  club or user group, for the software
           or documentation.  A  distribution fee may be  charged solely for
           the cost  of the diskette, as  long as the total  charge does not
           exceed $8. 

           It  is   imperative  that  club   members  be  informed   of  the
           user-support concept,  which allows them to  become familiar with
           FINANCE MANAGER through evaluation and  hands-on use.  It is also
           imperative that member users be informed that the program as well
           as   its   documentation  is   the   sole   property  of   Hooper
           International.  Members, without exception, must be encouraged to
           support its use by sending their user payments directly to Hooper
           International. 

           This software  and documentation  is fully copyrighted  by Hooper
           International  and may  not  be  modified in  any  way or  manner
           whatsoever.  The complete package  must be distributed intact, as
           a self-complementing unit. 



                                         i 












                               WARRANTY INFORMATION 

      HOOPER INTERNATIONAL LICENSES THIS SOFTWARE AND MANUAL "AS IS" WITHOUT
      WARRANTY OF ANY KIND, EITHER  EXPRESSED OR IMPLIED, INCLUDING, BUT NOT
      LIMITED  TO, THE  PARTICULAR PURPOSE.   HOOPER INTERNATIONAL  DOES NOT
      WARRANT   THAT  THE   "FINANCE  MANAGER"   SOFTWARE  WILL   MEET  YOUR
      REQUIREMENTS,  OR  THAT  THE  OPERATION OF  FINANCE  MANAGER  WILL  BE
      UNINTERRUPTED OR ERROR FREE. 

      IN NO  EVENT WILL  HOOPER INTERNATIONAL  BE LIABLE  FOR CONSEQUENTIAL,
      INCIDENTAL,  INDIRECT OR  OTHER DAMAGES,  INCLUDING ANY  LOST PROFITS,
      LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT
      OF THE  USE OF, OR  INABILITY TO USE,  THESE PROGRAMS, EVEN  IF HOOPER
      INTERNATIONAL HAS BEEN ADVISED OF  THE POSSIBILITY OF SUCH DAMAGES, OR
      FOR ANY CLAIM BY ANY OTHER PARTY. 

      Please  keep in  mind, WE  DO NOT  ACCEPT RETURNS  OR GIVE  REFUNDS ON
      REGISTERED COPIES.  Instead, we give  you every opportunity to try the
      software before you  decide to register your copy.   We will, however,
      replace defective disks for a  minimal shipping and handling charge of
      $5.00,  for up  to a  period of  90 days  from initial  shipping date.
      Please note that defective disks  must be returned prepaid and insured
      by  sender.   In  this  way,  we  are  assured  of  complete  customer
      satisfaction.  And, as you can see, we value your business. 

      Information in  this manual  is subject to  change without  notice and
      does not represent a commitment on the part of Hooper International. 

      This  product could  include technical  inaccuracies or  typographical
      errors.   Changes are  periodically  made to  the information  herein;
      these  changes   may  be  incorporated   in  new  additions   of  this
      publication. 



                                PRODUCT INFORMATION 

      FINANCE   MANAGER   II   is  an   extraordinary,   easy-to-understand,
      user-supported software  package.  Since we are  dedicated to customer
      satisfaction, we  heartily recommend  that you  take advantage  of the
      incredible money-saving opportunity that we offer, allowing you to use
      the  evaluation copy  in order  to determine  its suitability  to your
      individual financial  application.  Please  do this, and  discover for
      yourself that this  software is easy to use and  certainly what you've
      been hoping  it would be,  before registering  your copy with  us.  We
      sincerely value customer satisfaction. 

      Since we are  so confident of your satisfaction with  our software, we
      are able to offer evaluation copies at an unbelievable minimal cost to
      you.   We therefore  urge  you  to take  advantage  of inspecting  and



                                        ii 








      evaluating this  software, including hands-on use  for your particular
      needs   and  financial   applications.   This   is  an   unprecedented
      opportunity  for complete  customer satisfaction  before you  make any
      outlay of  money for  an individually-registered  copy.  We  want your
      name  to be  added to  our  ever-growing list  of satisfied  customers
      throughout the world! 


      Finance  Manager  II  General  Ledger  is  User-Supported  (Shareware)
      software.  If you are using this software,  and find it to be of value
      to you, your payment is necessary and appreciated. 

      You are  encouraged to  copy this  software and  share it  freely with
      others.  You have  the luxury of trying out the  complete programs, at
      your own pace and in the comfort  of your own home or workplace.  This
      is not a crippled or "demo"  copy, but the complete working version of
      the program. 

      After you have used Finance Manager for a reasonable evaluation period
      you  should  either discontinue  use  of  the  program or  purchase  a
      licensed copy from Hooper International  or from an authorized dealer.
      Your  support   is  important  and  greatly   appreciated.   With  it,
      User-supported  (Shareware)  authors  are  encouraged  to  design  and
      distribute new  products.  Without it,  a great deal of  high quality,
      low cost software will cease to be available. 



                            _______ 
                       ____|__     |                  (tm) 
                    --|       |    |------------------ 
                      |   ____|__  |  Association of 
                      |  |       |_|  Shareware 
                      |__|   o   |    Professionals 
                    -----|   |   |-------------------- 
                         |___|___|       MEMBER 


      Hooper  International is  a member  of the  Assocication of  Shareware
      Professionals and agrees with the association's standards of integrity
      in software distribution. 
















                                        iii 








                    FINANCE MANAGER II - GENERAL LEDGER Lite


                                      PREFACE 


      Before Reading Any Further .  .  . 

      If you are  eager to get started,  you might save time  by reading the
      guidelines  listed  in  this  preface.  Depending  on  your  level  of
      bookkeeping and  computer expertise,  certain sections of  the manuals
      are more essential than others. 



      If You've Already Used FINANCE MANAGER .  .  . 

      If  you already  have  a  working knowledge  of  some  of the  earlier
      versions of  FINANCE MANAGER, you  will be pleased  to see all  of the
      specially-enhanced features of the FINANCE MANAGER II program.   

      Before you start  working, read the "Getting Started"  section of this
      manual, which explains  the new installation procedures.   If you have
      any   questions  while   you  are   working,  simply   refer  to   the
      documentation. 



      If You Are An Experienced User of Menu-Driven Software .  .  . 

      If  you have  used quite  a  few software  packages, especially  those
      designed for the IBM PC or compatibles, you are more familiar with the
      terms used for configuring your system.  You might, therefore, want to
      take the following shortcuts: 

         - Read the Introduction and Getting Started section of this manual. 

         - Take  a look  at  the  sample accounts  (HOME  and  WORK) on  the
           DOCUMENTATION AND DEMO  disk, while using the  documentation as a
           guide and a reference. 

         - Set up your own  set of books by using the  sample accounts as an
           example, or as a framework.  Be sure to follow the guidelines and
           procedures as presented in the manual,  and you'll be on your way
           to incredibly-easy, hassle-free bookkeeping. 



      If You Are An Experienced Bookkeeper .  .  . 

      If you  have a  working knowledge of  bookkeeping and  accounting, you
      will have an  easier time understanding the terms used  in the FINANCE
      MANAGER manuals.  Initially,  however, we recommend that  you read all
      of  the manuals  in  order to  learn how  to  properly and  completely
      utilize all of the fantastic features available to you. 



      If You Have Little Or No Experience With Software Or Bookkeeping... 


                                     PAGE 1




                    FINANCE MANAGER II - GENERAL LEDGER Lite



      If you  have used few menu-driven  software packages in the  past, and
      you're not an  expert bookkeeper, you would do well  to make the whole
      thing  easier  for  yourself  by reading  all  manuals  completely  --
      mentally  following  all  of  the procedures  outlined.   We  strongly
      suggest that  you read completely  through the documentation  at least
      once, merely  to become familiar  with some of  the terms you  will be
      expected to know.   Next, repeat the documentation  process, this time
      using the program.



      For All Users ... 

      When using FINANCE MANAGER, keep in mind the steps listed below: 

         - Format  your new  disks before  beginning.  (Inexperienced  users
           sometimes forget this basic DOS step.) 

         - Always use  a backup copy  of your program  disk.  (Inexperienced
           users are inclined to forget to save their original disk, to fall
           back on, should something happen to the disk they are using.) 

         - Carefully  follow all  instructions in  the manuals,  for optimum
           understanding, before using FINANCE MANAGER. 

      This guide is intended for use by all users of FINANCE MANAGER II.  It
      does not assume that the  user has extensive accounting expertise.  It
      is suggested,  however, that users  with no accounting  or bookkeeping
      background  obtain  a  basic  accounting textbook  as  a  supplemental
      reference. 



      If You Have Any Questions .  .  . 

      If you have any questions or opinions about FINANCE MANAGER II, please
      return the User-Comment Form in the back of the manual. 




















                                     PAGE 2




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                                  AUTHOR'S NOTES 



      History of FINANCE MANAGER 

      The FINANCE  MANAGER series was created  as a result of  our own basic
      need for an affordable financial software package.  We needed a simple
      and  workable system,  to  keep  track of  both  income and  expenses.
      Unfortunately,  the   price  for   available  software   packages  was
      prohibitive. 

      Consequently, it became clear that  a new and affordable program would
      have to be created  and written by us, and it  would have to eliminate
      the piles of notes and receipts that were needed each year in order to
      compute income  taxes.  In  1981, therefore,  the original  version of
      FINANCE MANAGER was  created.  It was written for the  Atari 800, with
      64K bytes  of memory.  This  program provided a one-timeframe  look at
      the entire fiscal  year, while storing all  necessary information from
      the inevitable  notes and  receipts.  If bookkeeping  was to  become a
      "piece of cake", this was surely a sweet start! 

      In 1983, the initial basic FINANCE MANAGER was converted to the widely
      accepted IBM PC format.  This  second version was splendidly enhanced,
      and was  able to track  finances by month  instead of merely  by year.
      Furthermore, it was now able to categorize assets and liabilities.  At
      this  stage, it  became a  true  mini-bookkeeping system,  and it  was
      available to  fit the  limited budget  of those  who could  not before
      afford an expensive software package. 

      Friends and acquaintances, consequently,  began using FINANCE MANAGER.
      Some   of  these   early  users   were  small   business  owners   and
      entrepreneurs, while  others simply  needed FINANCE MANAGER  to assist
      them with their ordinary,  everyday personal finances and bookkeeping.
      They all,  however, told their  friends about the incredibly  low cost
      and easy system they were using, inviting them to try it. 

      This first group of users, many  of whom had no accounting background,
      sent  us  valuable  input  in  the  form  of  suggestions  and  ideas.
      Expressing  our  sentiments,  they wanted  easy-to-use  software  that
      required minimal setup time.  And, like  us, they disliked the idea of
      spending outrageous amounts for expensive software packages.   

      User  needs  in mind,  FINANCE  MANAGER  evolved  into a  simple,  but
      comprehensive,  financial   software  package,   yet  offered   at  an
      incredibly low  price that any  computer user could afford.   By early
      1984, many  more people were  using our  program, and telling  us they
      loved it! 



      Availability of FINANCE MANAGER 

      An exceptional and workable program  in hand, we decided to distribute
      as  many  copies as  needed  to  people  in  need of  an  inexpensive,
      comprehensive  bookkeeping  system.   As  you are  perhaps  aware,  we


                                     PAGE 3




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      employed a user-support method of distribution, feeling it would prove
      to be a  viable method of exposing computer users  to our grass-roots,
      user-friendly program. 

      By  mid 1984,  the program  became available  throughout the  country,
      distributed  through users'  groups and  computer clubs.   We owe  the
      success of FINANCE MANAGER to all of these interested early supporters
      who stood with  us in the belief of quality,  easy-to-use software, at
      unbelievably low cost. 

      Today, most  of our first users  continue to use FINANCE  MANAGER, and
      they continue to feel it is  the best bookkeeping package available to
      them.  Through  the years, we have  listened to what they  needed and,
      because of their comments, ideas, and suggestions, FINANCE MANAGER has
      evolved and expanded to the greatly enhanced package that it is today. 

      We sincerely thank  all of our users for their  continued support.  By
      purchasing our program, and telling their friends how greatly it helps
      them,  while easing  their record-keeping  burden, they  have made  it
      possible for  us to  offer further  enhancements and  welcome updates.
      There is  no doubt that  user support has put  us where we  are today.
      And it is gratifying to know that  there are people who, on their own,
      pay  for something  that they  have been  invited to  try without  any
      initial pre-paid  cash outlay.   Our final  pleasure and  thanks comes
      when these  same people send us  their check, to pay  for the product,
      because they genuinely enjoy using it. 

      At  this time,  we  continue  to employ  the  user-support concept  of
      distributing FINANCE MANAGER,  knowing that most of  you will register
      your  copies with  us, making  it  legal for  you to  use them.   Your
      registration fee provides the resources to continually enhance FINANCE
      MANAGER,  thus  providing newer,  updated  versions  for your  ongoing
      needs. 

      Needless to  say, we are  proud to present  this new version  for your
      inspection and, should you choose to  use it, ask that you continue to
      support  FINANCE MANAGER  by  promptly paying  your registration  fee.
      With your help,  you may continue to count on  our help.  Moreover, we
      want you  to know  that we sincerely  appreciate your  cooperation, as
      well as your faith in us. 


















                                     PAGE 4




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                         FINANCE MANAGER SYSTEM FLOWCHART 




                              ------------------- 
                              | FINANCE MANAGER | 
                              |   MASTER MENU   | 
                              ------------------- 
                                        | 
                        -------------------------------- 
                        |         |          |         | 
                        |         |          |         | 
                     SYSTEM    GENERAL    PRODUCT    ORDER 
                    UTILITIES  LEDGER   INFORMATION  FORM 
                      MENU                 MENU 






                              -------------------- 
                              | SYSTEM UTILITIES | 
                              |       MENU       | 
                              -------------------- 
                                       | 
                           ------------------------- 
                           |           |           | 
                           |           |           | 
                         CHANGE      CHANGE      CHANGE 
                          DATE       COMPANY     SYSTEM 
                                      NAME      DEFAULTS 

























                                     PAGE 5




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                                 TABLE OF CONTENTS 

      COPYRIGHT NOTICE ...............................................   i 
      RESTRICTED PERMISSION TO COPY ..................................   i 
      WARRANTY INFORMATION ...........................................  ii 
      PRODUCT INFORMATION ............................................  ii 

      PREFACE ........................................................   1 

      AUTHOR'S NOTES .................................................   3 

      SYSTEM FLOWCHARTS ..............................................   5 

      INTRODUCTION ...................................................   8 

      SECTION ONE - GETTING STARTED ..................................   9 
          1a - Essential hardware ....................................   9 
          1b - Installing Finance Manager ............................   9 
          1c - Starting up the Finance Manager program ...............  11 
          1d - The sample accounts ...................................  13 
          1e - Unique functions of Finance Manager ...................  13 

      SECTION TWO - FINANCE MANAGER II MASTER MENU....................  16 
          2a - System utilities menu .................................  16 
          2b - Changing the date .....................................  17 
          2c - Changing the company name .............................  17 
          2d - Changing the system defaults ..........................  18 

      SECTION THREE - USER SUPPORT ...................................  21 
          3a - The user-supported concept ............................  21 
          3b - If you have comments, suggestions, or questions .......  22 
          3c - Why should I pay?  ....................................  22 
          3d - Upgrade policy ........................................  23 

      SECTION FOUR - GETTING STARTED - THE GENERAL LEDGER 
          4a - Introduction ..........................................  24 
          4b - General Ledger flowcharts .............................  25 
          4c - Setting up your own books .............................  27 

      SECTION FIVE - THE GENERAL LEDGER MAIN MENU ....................  28 

      SECTION SIX - THE CHART OF ACCOUNTS ............................  29 
          6a - What is a Chart of Accounts?  .........................  29 
          6b - Types of account numbers ..............................  29 
          6c - Organization of the Chart of Accounts .................  30 
          6d - Subtotals .............................................  31 
          6e - Chart of Account data fields ..........................  31 
          6f - Getting familiar with the Chart of Accounts ...........  32 
          6g - Entering your Chart of Accounts .......................  33 
          6h - Making changes/modifying the Chart of Accounts ........  35 
          6i - Deleting Chart of Account numbers .....................  35 
          6j - Creating a new set of books with the same  
               Chart of Accounts .....................................  36 
          6k - Suggested method for setting beginning balances .......  36 

      SECTION SEVEN - INCOME AND EXPENSE BUDGET ......................  38 


                                     PAGE 6




                    FINANCE MANAGER II - GENERAL LEDGER Lite



      SECTION EIGHT - TRANSACTIONS ...................................  40 
          8a - Entering transactions .................................  40 
          8b - Entering multiple debit or credit transactions ........  42 
          8c - Changing transactions .................................  44 
          8d - Deleting transactions .................................  45 
          8e - Points to remember ....................................  46 

      SECTION NINE - REPORTS .........................................  47 
          9a - Explanations of reports ...............................  47 
          9b - General instructions for generating reports ...........  49 

      SECTION TEN - SORTING TRANSACTIONS .............................  53 

      SECTION ELEVEN - CHANGING ACCOUNT NUMBERS ......................  54 

      SECTION TWELVE - ENHANCEMENTS & HINTS ..........................  55 
          12a - Enhancements by version ..............................  55 
          12b - Helpful hints and suggestions ........................  57 

      SECTION THIRTEEN - FINANCE MANAGER II DISK FILE NAMES ..........  58 

      APPENDIX A - BASIC ACCOUNTING PRINCIPLES .......................  59 

      APPENDIX B - SAMPLE REPORTS ....................................  65 

      USER COMMENT FORM ..............................................  81 

      ORDER FORM .....................................................  82 





























                                     PAGE 7




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                                   INTRODUCTION 

      The proper management of financial resources is the determining factor
      in the  survival of any business,  large or small, public  or private.
      FINANCE MANAGER  II is  a splendid  tool for  you, the  small business
      owner or individual,  to easily manage your  financial resources.  The
      program, moreover,  is easy to  follow and  designed for those  with a
      minimum of bookkeeping experience.



      General Information 

      FINANCE MANAGER  is a personal or  small-business financial-management
      program for  the IBM PC,  XT, AT, and PS/2  (or compatibles ).   It is
      thorough,  efficient, and  simple to  use, consisting  of a  series of
      modules designed to assist the  beginning or advanced user in managing
      all types of  financial/bookkeeping systems.  The modules  may be used
      exclusive of one another (except  for Account Reconciliation), or they
      may  be used  together,  in any  combination.   The Accounts  Payable,
      Receivable, and Payroll modules do  however require the General Ledger
      module.  Available separately,  the modules are as  follows (see order
      form at the back of this manual to order): 

                                  General Ledger 
                              Account Reconciliation 
                                 Accounts Payable 
                                Accounts Receivable 
                                      Payroll 
                                Financial Utilities 


      FINANCE MANAGER II will become an  essential part of your own business
      and/or personal financial-management program. 

      An  exceptionally  easy and  low-cost  way  to manage  your  financial
      resources, FINANCE MANAGER II provides the best and most comprehensive
      personal  or  small-business  financial program  available.   We  look
      forward to hearing  from you, and any comments about  this program may
      be included on the user comment form on the last page of this manual. 


















                                     PAGE 8




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                           SECTION ONE - GETTING STARTED 


      Before you initially start using FINANCE  MANAGER II, be sure you take
      the time to  learn some of the basic  preliminary procedures necessary
      to operate the program, as well as  being certain you know some of the
      basic overall  system features.  In  this section, these  elements are
      discussed in detail. 



      1a - ESSENTIAL HARDWARE

      The minimum system hardware requirements and options are as follows:

      REQUIRED:

          - IBM PC, XT, AT, or PS/2 (or compatibles) 
          - Monochrome or color graphics board with 80-column display 
          - 256K bytes memory 
          - 2 floppy disk drives (or 1 high-density drive) 
          - PC-DOS or MS-DOS (DOS Version 2.0 through 4.0) 


      OPTIONAL:

          - Hard disk 
          - 80-column (or 132-column) printer 
          - Up to 640K memory 
          - Hercules graphics card 
          - EGA graphics card 



      1b - INSTALLING FINANCE MANAGER 

      In order  to run FINANCE  MANAGER II for the  first time, on  your own
      computer, be  sure to format your  new blank disks (beginners  tend to
      overlook this step).  And remember, if you have received a new version
      of FINANCE  MANAGER, you  need to re-install  it as if  it were  a new
      module.  If you  are installing a new version we  suggest that you use
      new blank disks or if you are using  a hard disk to delete all the old
      Finance Manager  program files (be  sure you  do not delete  your data
      files).  The procedures  for installing the disks are  outlined in the
      steps below:

      Quick install for advanced DOS users: 

         Make a  backup copy of all  the Finance Manager disks  by using the
         DOS COPY  *.* command and put  the original disks away.   Next copy
         all of the "HOME.*" and "WORK.*"  files from these disks to a blank
         data disk. 

         If  you are  using a  hard  disk, simply  copy all  of the  Finance
         Manager disks into any directory (suggest directory name \FMGL). 



                                     PAGE 9




                    FINANCE MANAGER II - GENERAL LEDGER Lite


         Next  copy  the CONFIG.SYS  file  from  the General  Ledger  Master
         Program disk to your DOS power-up  disk (or root directory for hard
         disk users).   If you already have  a CONFIG.SYS file be  sure that
         you add the two commands "FILES=20" and "BUFFERS=20". 

         To run Finance Manager type in "RUN" or "FMGL".  You may also add a
         filename parameter when running FMGL (e.g.  FMGL C:\FMGL\WORK). 


      If you have two 360K floppy disk drives: 

       1. Using the DOS "FORMAT" command, format two blank disks. 

          When installing Finance Manager the install procedure will ask you
          for your DOS  disk used when you power-up your  computer.  It will
          add a CONFIG.SYS  file to this disk (see DOS  manual for details).
          If a CONFIG.SYS file already exists on this disk it will modify it
          (if nessessary). 

          You will  also need one  additional disk to  be used as  your data
          disk  when setting  up your  own set  of books.   (When formatting
          disks beginners should remember that the DOS disk goes in drive A,
          and the blank disk goes in drive B. Then type FORMAT B:). 

       2. Label  each set  of two  disks as  follows: The  first is  labeled
          "Program  Disk", the  second  is labeled  "Documentation and  Demo
          Disk".  Also label the additional data disk "Data Disk".

       3. Put the ORIGINAL  (not the blank disk) Finance  Manager II General
          Ledger Master Program Disk in drive A. 

       4. From the A> prompt type in the command: INSTALL 

       5. Follow the  instructions on the  screen while running  the INSTALL
          procedure. 

       6. After completing  the INSTALL  procedures, FILE AWAY  the original
          FINANCE MANAGER II  disks for safe keeping.  You  should never use
          the original disks. 

       7. Place your DOS power-up disk in drive A. 

       8. Re-boot the  computer by  using "Ctrl Alt Del"  or by  turning the
          power off and on. 

       9. Take  the  DOS power-up  disk  out  of drive  A  and  put in  your
          newly-created FINANCE MANAGER II program disk (any module). 

      10. Place the Documentation and Demo Disk  in drive B, in order to use
          the demo accounts. 

      11. Type in the command: RUN (or FMGL). 

      12. You should  now be running  FINANCE MANAGER  II.  If you  are not,
          simply repeat steps 1 - 11. 



                                     PAGE 10




                    FINANCE MANAGER II - GENERAL LEDGER Lite



      If you have a high density or 3 1/2" (at least 720K) disk drive: 

      Follow instructions for two floppy-disk  drives above.  After you have
      completed the INSTALL procedure, you may  opt to copy all of the files
      from the  PROGRAM DISK and the  DOCUMENTATION AND DEMO DISK  on to one
      high-density disk. 

      Another option, if you have more than one module, would be to copy all
      of the "FMGL.COM",  "*.CHN", & "*.00?" files to one  "PROGRAM DISK" (*
      and ?  =  any character) which would eliminate the  need to swap disks
      when running different modules. 


      If you have a hard disk: 

       1. Create a directory on your hard disk (e.g., MD \FMGL). 

       2. Change  to this  newly-created  directory by  using  the DOS  "CD"
          command (e.g.,  CD \FMGL).  Remember, all  programs, documentation
          and data will be placed in this directory. 

       3. Put the ORIGINAL  (not the blank disk) Finance  Manager II General
          Ledger Master Program Disk in drive A. 

       4. From the A> prompt type in the command: INSTALL 

       5. Follow the  instructions on the  screen while running  the INSTALL
          procedure. 

       6. After completing  the INSTALL  procedures, FILE AWAY  the original
          FINANCE MANAGER II  disks for safe keeping.  You  should never use
          the original disks. 

       7. Re-boot the computer by using "Ctrl Alt Del", or simply by turning
          the power off and on.

       8. Change to the newly created directory (as above). 

       9. Type in the command: RUN (or FMGL). 

      10. You should  now be running  FINANCE MANAGER  II.  If you  are not,
          simply repeat above steps 1-9. 


      1c - STARTING UP THE FINANCE MANAGER II PROGRAM 

      After you have  installed your disks as outlined above,  you are ready
      to start using FINANCE MANAGER II.  To execute FINANCE MANAGER II on a
      regular basis, follow the procedures below: 

      1. Insert the FINANCE MANAGER II Program Disk, which you have created,
         into  drive A.   If you  use  a hard  disk, simply  change to  your
         FINANCE MANAGER directory as above. 

      2. Insert your Data  Disk (or Documentation and Demo Disk,  to use the


                                     PAGE 11




                    FINANCE MANAGER II - GENERAL LEDGER Lite


         demo accounts) in drive B. This step  is not necessary if you use a
         hard disk.  

      3. Type RUN. 

      4. The first screen contains a FINANCE MANAGER II logon notice.  Press
         any key to continue. 

      5. The next screen  asks you for your data disk  drive, directory, and
         file name: 

         ENTER DISK DRIVE(A-H):_: ENTER DIRECTORY:_______________________ 

         ENTER FILE NAME:________ 

      6. Insert your Data  Disk (or your Demo Disk, if  using demo accounts)
         in drive B:.   Then answer the "ENTER DISK DRIVE"  prompt with "B".
         If using a hard disk, answer with "C". 

         For advanced hard-disk  users, you may wish to  enter the directory
         (see your DOS manual) to select files in other directories.  If you
         are  using   directories,  enter  your  directory   at  the  "ENTER
         DIRECTORY:" prompt.  If not, simply press RETURN at this point. 

         NOTE: When using the Demo accounts, use your DOCUMENTATION AND DEMO
               DISK.  And when you want to set up your own set of books, use
               your blank DATA DISK which you created above. 

      7. At the "ENTER FILE  NAME" prompt, type in the name  of the file, or
         simply press ENTER to accept the name as shown. 

         The existing files are listed at the bottom half of the screen.  By
         using the left and right keypad  arrows, you can change the default
         value in the "Filename" field.  Typing in a filename which does not
         exist automatically creates a new data file with that name. 

         To eliminate  the need to  enter the disk  drive and the  file name
         each time  you run FINANCE  MANAGER, you should modify  the RUN.BAT
         file by adding a command line parameter to the "FMGL" command.  For
         example, if you want to use drive B: at all times, and also want to
         use the  file name "MYFILE",  you should change (edit)  the RUN.BAT
         file command  "FMGL" to "FMGL B:MYFILE".   (See your DOS  manual on
         how to edit  files using EDLIN).  When you run  FINANCE MANAGER, it
         will automatically use the selected file in drive B:, without again
         asking you. 

      8. You should now  be at the FINANCE MANAGER II  Master Menu (referred
         to as the "Master Menu"). 

      9. If, for example, you now want  to run the General Ledger, press the
         F2  key (use  the  "F2" key  on  the  left (or  top)  side of  your
         keyboard) to run the General Ledger Main Menu. 






                                     PAGE 12




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      1d - THE SAMPLE ACCOUNTS 

      The HOME  and WORK files mentioned  above are two demo  accounts which
      are  included on  the FINANCE  MANAGER II  Documentation &  Demo Disk.
      They include a  typical Chart of Accounts, to allow  you to demo while
      you are  learning the  different functions  of FINANCE  MANAGER.  They
      also provide you with a sample  of the different types of transactions
      you may employ on the module you are using.  If you are new to FINANCE
      MANAGER, print some reports while using the demo accounts, in order to
      familiarize yourself with the reports and functions of the module (see
      the  reports section)  Thoroughly  analyze these  reports, noting  the
      types of transactions  and which accounts were being  used.  This will
      be a  tremendous help when  you are entering your  transactions, since
      most people employ similar types of transactions. 

      It  is  important for  you  to  understand  that the  sample  packages
      included in the  program have been created  exclusively as instruction
      tools,  to be  used to  help  those who  are learning  to use  FINANCE
      MANAGER.  Please, do not try to expand  them for use as your own Chart
      of Accounts, since they contain beginning balances as well as existing
      transactions.   They are  intended to  be  used merely  as samples  to
      facilitate the learning process. 

      In order  to use  these sample  accounts, follow all  of the  steps in
      "Starting Up the FINANCE MANAGER  II Program" section above, selecting
      either the "HOME" or "WORK" file at the file name prompt. 


      1e - UNIQUE FUNCTIONS OF FINANCE MANAGER II 

      THE ESCAPE (ESC) KEY: The  Escape key  plays a  vital role  when using
                            FINANCE MANAGER II.  First of all, it allows you
                            to stop virtually any function, and get you back
                            to where  you were  before you  called something
                            up.   (Beginners,  especially,  will  appreciate
                            this function.) 

                            If you  are at an  input screen, and you  do not
                            want  to  continue to  a  new  screen or  a  new
                            transaction, the Escape key allows you to return
                            to the menu. 

                            If you are  entering data and you  make an error
                            in a certain field, the Escape key allows you to
                            exit the function and  return to the menu before
                            any input data is saved. 

                            If you are already at  a menu, Escape allows you
                            to return to a  previous menu.  Selection ESC on
                            the Master Menu  is used to end  the program, as
                            well as to select a different set of books.  

                            If  you  would  like   to  stop  a  report  from
                            printing, you can do so via the Escape key. 




                                     PAGE 13




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      INPUT and EDIT MODE:  There are two different modes for entering data:
                            the  input  mode  and the  edit  mode.   Certain
                            keystrokes allow  you to switch from  input mode
                            to edit  mode.  When entering data,  the default
                            is INPUT mode. 

                            To enter  edit mode, press keypad  "right arrow"
                            when in position 1 of  any field.  While in edit
                            mode, you may use the  keypad arrows, as well as
                            the Home, End, Ins, Del, and Backspace keys.   

                            To leave edit mode and enter input mode, move to
                            the  first position  of the  field by  using the
                            keypad "left  arrow".  Press the  Backspace key.
                            You are now in input mode. 

                            You  can differentiate  between  edit and  input
                            mode   by  the   highlighting  shades.    Simply
                            remember that when the shading is solid, you are
                            in input  mode; when  it is  dotted, you  are in
                            edit mode. 


      THE FUNCTION KEYS:    At each  of the FINANCE MANAGER  II Menus, there
                            is  a  series of  "F"  selections.   The "F"  or
                            "function"  keys are  the two  vertical rows  of
                            keys  located  on  the  far  left  side  of  the
                            keyboard.   These keys  are used  at the  screen
                            menus, in order to  select the function you wish
                            to do. 


      BACKING UP TO         When  you are entering  data in  various fields, 
      PREVIOUS FIELDS       for instance, when you are entering the Chart of
                            Accounts or  transactions, you can back  up to a
                            previous  field by  pressing  the Backspace  key
                            when you  are in the  first position of  a given
                            field.   Likewise,  you  can   move  back  to  a
                            previous field  by pressing the keypad  UP arrow
                            key. 

                            You cannot use the keypad  UP arrow when you are
                            in  a "Select"  field.  Examples  of a  "Select"
                            field is  the "Enter Filename"  prompt discussed
                            earlier  in  this  section.  Other  examples  of
                            "Select"   fields  are   the  fields   used  for
                            selecting account numbers  in Chart of Accounts,
                            budget, and transaction input. 


      PRINTER PAUSE KEY     When you  are printing reports to  your printer,
                            or to  the disk, you  may "PAUSE" the  report by
                            pressing  any  key  (except  Esc)  while  it  is
                            printing.  This  will cause the report  to pause
                            until you press any key to continue.  When using
                            this feature, please remember that some printers


                                     PAGE 14




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                            have print buffers which will cause the printing
                            to  continue  until  this buffer  is  completely
                            printed.   It will  only stop  printing at  that
                            time. 


      PAGE DOWN KEY (PgDn)  The PgDn key may be used to accept the remaining
                            default  inputs  on  the screen  (i.e.  skip  to
                            bottom of screen) without  the need to press the
                            Enter (or Return) key at each input field.  This
                            is very  useful, for  example, when you  need to
                            change only one input field on a screen and need
                            a fast way  to skip to  the bottom of  the input
                            screen. 

      TAB & SHIFT  TAB      The Tab  and Shift Tab keys  duplicate the Enter
                            and Backspace keys respectively. 









































                                     PAGE 15




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                   SECTION TWO - FINANCE MANAGER II MASTER MENU 


      The FINANCE MANAGER  II Master Menu is the first  menu to appear after
      you log on (enter filename) to the system.  The Master Menu appears as
      follows: 

                      --- FINANCE MANAGER II MASTER MENU --- 
                      |                                    | 
                      |   ESC End/Restart Program          | 
                      |   F1  System Utilities Menu        | 
                      |   F2  GENERAL LEDGER               | 
                      |   F3  Product Information Menu     | 
                      |   F4  Order Form                   | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

      This documentation  discusses getting started,  as well as  the System
      Utilities Menu.  For explanations on how  to use the other master menu
      selections, see the Users Manual  for that selection.  In the sections
      which follow,  we will briefly discuss  features of each of  the other
      financial modules. 



      2a - SYSTEM UTILITIES MENU 

      The System Utilities  Menu, which is selection F1 on  the Master Menu,
      contains  functions which  affect all  of the  modules.  By  selecting
      option F1, the System Utilities Menu appears as follows: 





















                                     PAGE 16




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                      ------- SYSTEM UTILITIES MENU -------- 
                      |                                    | 
                      |   ESC  Return to Main Menu         | 
                      |   F1   Change Date                 | 
                      |   F2   Change Company Name         | 
                      |   F3   Change System Defaults      | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 


      The System  Utilities menu allows you  to change the system  date (the
      date that  prints on your reports),  as well as the  company name that
      prints on your reports, and the system defaults. 



      2b - CHANGING THE DATE 

      Changing the date  is only necessary if  you have not set  the date at
      the time you  powered up your computer (either manually  using the DOS
      DATE command, or automatically with an internal clock board).  This is
      the date which will appear on your screen and on your printed reports.
      It is not  used for any other function.  Remember,  it does not change
      the date of  your system clock, and it will  be automatically reset if
      you  exit  the program.   If  your  computer  does  not set  the  time
      automatically, you  should set a new  date every time you  run FINANCE
      MANAGER, or your reports will have  the wrong date.  The currently set
      date is shown in the upper left-hand corner of your screen. 

      1. To change  the date, select F1  on the System Utilities  Menu.  The
         following prompt appears: 

                           REPORT HEADING DATE:__-__-__ 

      2. After typing in the desired date, press ENTER. 



      2c - CHANGING THE COMPANY NAME 

      The "company name" is a two-line name  which will appear at the top of
      your screen  and on  all reports.   This name is  tied to  the current
      Chart of Accounts  you are working on.  It is,  however, only used for
      report purposes and does not change your data file name. 

      1. Select F2  from the System  Utilities menu.  The  following prompts
         appear: 



                                     PAGE 17




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                     HEADING 1:______________________________ 
                     HEADING 2:______________________________ 

      2. At Line 1, type the new company name. 

      3. At Line 2, type any title which you would like on all reports. 



      2d - CHANGING THE SYSTEM DEFAULTS 

      The system defaults are preset in  the program.  Remember, they do not
      have  to  be  changed in  order  to  run  the  program.  Some  of  the
      parameters, however, may be reset or changed by you, depending on what
      type of hardware you have.  Each set  of books (data file) has its own
      configuration file, and must be set separately while using that set of
      books. 

      To change the system defaults, follow the procedures listed below: 

       1. Select F3  from the System  Utilities menu.  The  following screen
          appears: 

      NUMBER OF LINES PER PAGE (Usually 66):__    SELECT PRINTER PORT:____ 
      PRINTER CONTROL CODES (Escape Sequences): 
       Optional Initialization Setup:___ ___ ___ ___ ___ ___ ___ ___ ___ ___ 
            Compressed Mode (17 cpi):___ ___ ___ ___ ___ ___ ___ ___ ___ ___ 
                Normal Mode (10 cpi):___ ___ ___ ___ ___ ___ ___ ___ ___ ___ 


      100% IBM COMPATIBLE (Y/N):_         DO YOU WANT NETWORK SUPPORT(Y/N):_ 
      DO YOU WANT SOUND ON(Y/N):_         MOUSE SENSITIVITY 1=FAST,99=SLOW:_ 
      DISPLAY DATE IN U.S. FORMAT(Y/N):_     DISPLAY SCREEN IN COLOR (Y/N):_ 
      DOES PRINTER HAVE 14 INCH PAPER(Y/N):_        Foreground Color(0-15):_ 
      PRINT ACCOUNTS WITH ZERO AMOUNTS(Y/N):_       Background Color(0-15):_ 


       2. "NUMBER OF  LINES PER  PAGE" refers  to the number  of lines  on a
          page.  This  is usually  66 on 11-inch-long  paper, printing  at 6
          lines per  inch.  For example, if  the length of your  paper is 11
          inches long, you would multiply the  paper length by the number of
          lines per inch (e.g.   11 X 6 = 66) to arrive at  the 66 lines per
          page of paper.   The number of actual lines  printed is determined
          by the system, and is somewhat less, in order to leave a top and a
          bottom margin. 

       3. "SELECT PRINTER PORT" allows you to select the port you would like
          your printed reports  to be sent to.  If you  have a parallel port
          printer enter  "LPT1", "LPT2", "LST:",  or "PRN:".  If you  have a
          serial port printer enter"COM1" or "COM2".  If in doubt try "LST:"
          first. 

       4. The "PRINTER CONTROL CODES" are  used to customize FINANCE MANAGER
          to  your printer.   The inputs  for  these fields  are the  escape
          sequences which change your printer modes (see your printer manual
          for proper codes).  All inputs are  numbers from 0 to 255.  If you


                                     PAGE 18




                    FINANCE MANAGER II - GENERAL LEDGER Lite


          do not know  what codes to use for your  printer, simply leave all
          fields blank. 

            a. The "Optional Initialization Setup" will  allow you to send a
               special  setup string  to the  printer when  you run  FINANCE
               MANAGER.  It  is usually blank,  and usually is used  only by
               advanced users.   It may, for  example, be used to  move your
               printer's default  left margin, or  it may be used  to change
               printer font you are using. 

            b. The "Compressed Mode" is used  to change your printer font to
               its 17-characters-per-inch compressed-font  mode.  For Epson,
               use "15" in the first field. 

            c. The "Normal Mode" is to change  your printer font back to its
               normal 10-characters-per-inch  mode.  For Epson, use  "18" in
               the first field. 

       5. Answer the "100% IBM compatible" with "Y" (yes) if you have an IBM
          PC or a 100% clone equivalent to this machine. 

       6. Answer the  "DO YOU  WANT SOUND  ON" prompt with  "Y" if  you want
          beeps and other sound effects activated.  Otherwise enter "N". 

       7. If you  live in the U.S.A.,  you will probably want  to answer the
          "DISPLAY DATE IN  U.S.  FORMAT" prompt with "Y"  (yes).  This will
          cause all date displays and prompts  to be in the MM-DD-YY format.
          If you answer  with "N" (no), you will be  using the DD.MM.YY date
          format.  Be sure to note that  when using the DD.MM.YY format, the
          time displays will  be using a 24-hour time  display, without "am"
          or "pm" (i.e.  18:00 instead of 6:00pm). 

       8. If you happen to have a  wide-carriage printer, and are using 14''
          paper, you should answer "DOES PRINTER  HAVE 14" PAPER" with a "Y"
          (yes).  This will allow you to print trended reports on the entire
          width of  the paper.  A "N"  (no) answer to this  prompt will keep
          all printouts within 8 1/2" (80 characters) of paper width. 

       9. If you  prefer to skip the  printing of accounts with  zero amount
          balances,  on  reports,  answer  the  "PRINT  ACCOUNTS  WITH  ZERO
          AMOUNTS" prompt with a "N" (no). 

      10. Answer "DO  YOU WANT NETWORK  SUPPORT" with  "Y" if you  are using
          Finance Manager on a multi-user  network.  Otherwise answer with a
          "N". 

      11. Answer "MOUSE SENSITIVITY" with a  number 1 through 99.  The lower
          the  number   makes  the   sensitivity  (motion   detection)  more
          sensitive.  If you do not have a mouse enter zero "0". 

      12. Answer "DISPLAY  SCREEN IN  COLOR" with  "Y" (yes)  if you  have a
          color  display board  and you  would like  FINANCE MANAGER  to use
          color.   If you  select color,  you will  next be  prompted for  a
          "Foreground  Color"  and "Background  Color".   You  must enter  a
          number between 0  and 15 (as requested), and  the Foreground Color
          must  be  different   from  the  Background  Color.    A  list  of


                                     PAGE 19




                    FINANCE MANAGER II - GENERAL LEDGER Lite


          approximate colors selections is as follows: 

                              0 = Black   4 = Red 
                              1 = Blue    5 = Magenta 
                              2 = Green   6 = Brown 
                              3 = Cyan    7 = White 

                              8 - 15  Give you the same  colors as above but
                                      brighter (e.g. 9=light blue). 

      Change or add any necessary default  parameters.  To do this, refer to
      the  documentation for  your  individual hardware.   After adding  any
      data, press ENTER.  If you wish to leave any field as is, press ENTER.
      In order to clear a field, enter a blank space. 

      The above procedure will create a  file called "????.CNF" on your data
      disk.  The "????" will be replaced with  the name of the data file you
      are working on  (i.e. if you are  using the HOME demo  files, the file
      created  will  have  a  name  of "HOME.CNF").   You  should  create  a
      configuration file for  each of your data files.  Each  data file thus
      has its own configuration.  If you wish to save time, you may copy the
      configuration file from  one set of books to another  set by using the
      DOS "COPY" command. 

      Four  sample printer  configuration files  are on  the GENERAL  LEDGER
      DOCUMENTATION &  DEMO DISK.  These  files can  be copied to  your DATA
      DISK and renamed  to "????.CNF", where the "????" is  the name of your
      data  files.   Select  whichever  file  matches  your  printer  brand.
      However, it  is not necessary to  use these files since  they are only
      provided as sample configurations.   These configuration filenames are
      as follows: 

                  EPSON.CNF, HP-LASER.CNF, JUKI.CNF, PROWRITE.CNF 

























                                     PAGE 20




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                           SECTION THREE - USER SUPPORT 


      FINANCE MANAGER II IS USER-SUPPORTED  SOFTWARE!  If you are using this
      software, and find it to be of value to you, your payment is necessary
      and  appreciated.  The  suggested purchase  price is  a true  bargain.
      Please send your check or money order to:

                               HOOPER INTERNATIONAL 
                                  P.O.  Box 62219 
                            Colorado Springs, CO 80962 
                                  (719) 528-8989 

                                24 HOUR ORDER LINE 
                                  1-800-245-7789 

      As a  user of  FINANCE MANAGER II,  we invite you  to share  with your
      friends, and other  users, by making a copy of  the evaluation version
      of this program.  For payment, we continue to employ the honor system,
      which has worked for  us and for you, our user.  In  the long run, the
      $49.95  suggested  price  is  incidental when  compared  to  the  many
      benefits  and  time-saving  factors  derived from  using  this  superb
      program.  We invite you to use, share, and enjoy! 


      3a - THE USER-SUPPORTED CONCEPT

      User-supported  software  is  an  experiment in  the  distribution  of
      computer programs.  It is based on the following beliefs:

      - The value  and utility of software  is best assessed by  the user on
        his or her own system.

      - The  creation  of  personal  computer software  can  and  should  be
        supported by the computing community.

      - The  copying   of  programs   should  be  encouraged,   rather  than
        restricted.

      - Quality software should be available at reasonable cost. 

      Anyone may  request a copy  of a  user-supported program by  sending a
      blank, formatted  disk to  the author of  the program.   An addressed,
      postage-paid return  mailer must  accompany the disk.   A copy  of the
      program, with documentation on the disk,  is then sent by return mail.
      The program carries a notice  suggesting a payment of the registration
      fee to the program's author. 

      Free  distribution of  software, and  voluntary payment  for its  use,
      eliminates costs  for advertising and copy-protection  schemes.  Users
      obtain quality software  at reduced cost.  They have  the advantage of
      trying the  software before buying,  and they can  do so at  their own
      pace and in the comfort of their  own home or office.  We all know the
      best programs survive, based purely on their quality and usefulness. 

      Please join  in the experiment.  If  you believe in these  ideals, and


                                     PAGE 21




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      use the program, your payment is  necessary and solicited to help make
      the experiment viable and workable. 


      3b - IF YOU HAVE COMMENTS, SUGGESTIONS, OR QUESTIONS .  .  .

      It  is our  express  goal  to provide  you  with the  highest-quality,
      easiest-to-use programs at the lowest price. 

      The best way to receive help  with your questions, or response to your
      suggestions, is  to call or  send a letter to  us.  Or simply  use the
      User  Comment Form  on  the last  page  of this  manual.   Be sure  to
      carefully detail  the problem  and all  symptoms (perhaps  providing a
      printout as  an example,  if applicable).   Please include  a stamped,
      self-addressed  return   envelope.   We  will  respond   to  all  such
      questions, as soon as possible. 

      Before writing  or calling, however,  we encourage you to  please read
      over the  documentation one more time,  looking for an answer  to your
      questions or a solution to your problem. 

      If you  are a REGISTERED  USER you may call  us at (719)  528-8989 for
      instant help  with your  problem or  question.  We  do not  charge for
      customer support like others. 

      If you are NOT a REGISTERED USER (not having paid for your copy of the
      program), we  may not be  able to answer your  questions specifically.
      The honor system must prove to be a viable method of distributing this
      program, and  registering it in your  name, in order for  us to answer
      your questions about  its use or specific applications  of your needs.
      We're sure  you understand that  our time  is a limited  resource, and
      that it is only fair to spend it on our registered paid-in-full users.
      As you know, that's the way the system works! 

      If you have any comments  or suggestions regarding FINANCE MANAGER II,
      please  let  us know.   We  appreciate  all  comments and,  in  future
      versions  of  FINANCE MANAGER  II,  we  will certainly  implement  the
      suggestions that are advantageous to other users as well. 


      3c - WHY SHOULD I PAY?

      You are trusted to use this  copy of FINANCE MANAGER II for evaluation
      purposes  only, until  the requested  payment  is made.   Some of  the
      obvious reasons for sending in your payment are listed below: 

      - When we receive  your payment, we will  send you a FREE  COPY of our
        latest version of FINANCE MANAGER II.   This is the version with the
        newest  features and  enhancements.  Please  note: NEW  FEATURES ARE
        BEING ADDED REGULARLY TO THIS PROGRAM. 

      - You  will   also  receive  the   latest  version  of   our  complete
        Professional General  Ledger package which includes  many additional
        features.   Some of  these  additional  features include,  Graphics,
        datafile merge capability, automatic  updating of beginning balances
        at  the  beginning  of  each year,  income  &  expense  departments,


                                     PAGE 22




                    FINANCE MANAGER II - GENERAL LEDGER Lite


        interface to our other financial modules, etc.. 

      - You will  receive the complete  documentation on the disk,  and also
        have the option  of purchasing a printed manual, as  well as options
        to purchase our other available financial modules. 

      - You will  receive our quarterly  newsletter which provides  hints on
        using  Finance  Manager  as  well   as  keeps  you  abreast  of  new
        enhancements which become available. 

      - You will be entitled to our  free customer support whenever you have
        any questions or problems with operational procedures. 

      - We will add your name to our  list of registered users.  As each new
        version comes  out, you will  automatically receive a  mailing which
        gives you  the option of buying  the new version for  a very nominal
        upgrade fee. 

      - MAKE MONEY!   When your friends  register their copies and  put your
        registration  number on  their order  form  YOU WILL  RECEIVE A  $10
        COMMISSION  CHECK  FROM US.   This  commission  does not  apply  for
        subsequent orders and will be paid once a quarter. 

      - You will  also receive a  FREE CONVERSION PROGRAM (if  necessary) to
        convert your existing Finance Manager  II data files into the latest
        format without re-entering any of your data. 

      - You will feel better about using  FINANCE MANAGER II if you know you
        are a paid-in-full registered user. 

      - Last, but not least, you will receive priority treatment if you call
        or write to us with problems or questions.   


      3d - UPGRADE POLICY 

      As more fully  outlined above, when you send in  your payment with the
      version number of your copy, we will send you a registered copy of the
      latest version of FINANCE MANAGER  II.  You will then be automatically
      notified of all future releases.  These will be available to you for a
      nominal upgrade fee (usually under $10). 

















                                     PAGE 23




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                SECTION FOUR - GETTING STARTED - THE GENERAL LEDGER 

      4a - INTRODUCTION 

      The  FINANCE  MANAGER  -  General  Ledger  module  is  a  menu-driven,
      double-entry  bookkeeping system  which  is suitable  for personal  or
      small  business use.   It  is easy  to use,  but  you must  understand
      double-entry (debits and credits) bookkeeping.  For the novice, sample
      accounts are provided  to assist you in setting up  your accounts, and
      examples of basic transactions are provided. 

      The  General Ledger  keeps track  of assets,  liabilities, net  worth,
      income, and  expenses.  It  also assists the  small business  owner in
      spotting   financial  trends.    The  program   records  transactions,
      categorizes them  into various  accounts, and  generates a  variety of
      financial statements, reports, and graphs. 

      In  addition  to  being  a  powerful management  tool  for  the  small
      business,  this  module assists  you,  the  individual, in  the  tasks
      necessary  to keep  track  of your  financial  standing.  It  performs
      day-to-day functions such as monitoring the balances of bank accounts,
      credit cards, loans, etc.  In addition, this module tracks how closely
      you are  sticking to a budget.   It documents all of  your belongings,
      thus providing  a backup record  for insurance purposes.   The General
      Ledger  Module also  provides a  record of  earnings and  expenses, to
      assist you in preparing your income tax paperwork. 


      The  outstanding bookkeeping  features in  the General  Ledger program
      include the following:  

      * Maintains Accounts 
            - Stores up to 1999 accounts 
            - Tracks monthly budget for income and expense accounts   
            - Maintains multiple sets of books (e.g. home and work) 
            - Provides three subtotal levels 
            - Maintains a detailed  list of everything you  own and everyone
              you owe 
            - Variable fiscal year or accounting period capability  


      * Records Transactions 
            - Allows up to  32,000 transactions per year  (3,800 with floppy
              disks) 
            - Sorts transactions by date order or by input order 
            - Permits multiple debits and credits per transaction  
            - Allows user to easily correct and/or delete transactions 
            - Provides a check number input field when entering transactions 
            - Allows user  to enter  transactions from  a previous  month or
              year 




      * Creates Financial Reports 
            - Provides full range of financial reports 


                                     PAGE 24




                    FINANCE MANAGER II - GENERAL LEDGER Lite


            - Reports by month, quarter or year 
            - Provides summary or trended (by month) reports 

      System Features of the FINANCE MANAGER General Ledger Program 

      The advanced system features of FINANCE MANAGER include the following: 

      * Defaults for input fields to minimize data entry  
      * Validation of all inputs  
      * Customized configuration  
      * Ability to store reports to a disk file 
      * Pop-up Chart of Accounts listing window when entering transactions. 


      4b - System Flowcharts 


                                   -------------
                                   | MAIN MENU | 
                                   -------------
                                         | 
                  ---------------------------------------------- 
                  |          |           |         |           | 
                INPUT  CHANGE/DELETE  REPORTS   CHART OF    UTILITY 
                TRANS   TRANSACTIONS   MENU     ACCOUNTS     MENU 
                                                  MENU 




                                 ----------------
                                 | REPORTS MENU | 
                                 ----------------
                                         | 
        ---------------------------------------------------------------- 
        |       |       |      |       |       |        |       |      | 
     GENERAL    |    INCOME    |    SOURCES    |     CHART OF   |    TRIAL 
     JOURNAL    |   STATEMENT  |    & USES     |     ACCOUNTS   |    BALANCE 
             ACCOUNT        BALANCE   OF     BUDGET           BUDGET 
             HISTORY         SHEET   FUNDS  VARIANCE          LISTING 


















                                     PAGE 25




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                            --------------------------
                            | CHART OF ACCOUNTS MENU | 
                            --------------------------
                                         | 
                               --------------------- 
                               |                   | 
                             UPDATE           INPUT/CHANGE 
                       CHART OF ACCOUNTS    INCOME & EXPENSE 
                                                 BUDGETS 




                                ------------------
                                | UTILITIES MENU | 
                                ------------------
                                         | 
                                  --------------- 
                                  |             | 
                                 SORT         CHANGE 
                             TRANSACTIONS   ACCOUNT NUM 
                                              FOR ALL 
                                            TRANSACTIONS 



































                                     PAGE 26




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      4c - SETTING UP YOUR OWN BOOKS 

      Below is  a list  of steps  to follow when  using the  FINANCE MANAGER
      General Ledger  for the first time.   This list assumes that  you have
      read the getting  started sections, and that you are  now ready to set
      up your own "live" data files.   These brief steps are not intended to
      replace  reading the  manual, but  are  merely intended  to provide  a
      systematic step-by-step way of getting going on your own. 


       1. If you have not already done  so, follow the INSTALL procedures in
          section 1b. 

       2. Start FINANCE MANAGER (section 1c).  To  set up your own books you
          should have  a blank data disk  in drive B: (not  necessary if you
          have a hard disk). 

       3. At the Disk drive prompt enter  the drive letter where you want to
          put your data files, usually B: (or C: if you have a hard disk). 

       4. At the  Enter Filename prompt,  enter the  name (any name)  of the
          data file you want to create.   Next, answer the Create File (Y/N)
          with a "Y". 

       5. Enter the two  line company name you wish to  see on your reports.
          (See Changing the company name in section 2c). 

       6. You will now be at the Master Menu. 

       7.  OPTIONAL: If you wish you may go to the System Utilities Menu and
                     change any system defaults.  This may, however, be done
                     at any  time, and it is  not necessary in order  to run
                     the General Ledger. 

       8. Next you must set up your Chart of Accounts (See Section Six - The
          Chart of Accounts). 

       9. After setting up  your Accounts, you may print a  copy of it using
          the Chart of Account Report (Section Nine - Reports). 

      10. You  are  now  ready  to   Enter  Transactions  (Section  Eight  -
          Transactions). 

      11. After you have  entered some transactions you may  print a General
          Journal Report  to see what you  have done so far  (Section Nine -
          Reports). 

      12. Print  any  other  reports  as  required.   The  two  most  useful
          financial reports are the Income Statement and the Balance Sheet. 

      Again these  basic steps are  only intended to  show you the  order of
      getting started with your own books.  Please read all related sections
      before beginning. 





                                     PAGE 27




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                    SECTION FIVE - THE GENERAL LEDGER MAIN MENU 


      The General Ledger Main Menu is  a starting point for virtually all of
      the FINANCE MANAGER  features which are needed to  perform the General
      Ledger functions.  It may be compared to a "Table of Contents" for the
      General Ledger  program.  It can  also guide you  to all of  the other
      sub-menus for the entire General Ledger program.   

      The General Ledger Main Menu appears as follows:   

                      ------ GENERAL LEDGER MAIN MENU ------ 
                      |                                    | 
                      |  ESC  Return to Master Menu        | 
                      |  F1   INPUT TRANSACTIONS           | 
                      |  F2   CHANGE/Delete Transactions   | 
                      |  F3   REPORTS Menu                 | 
                      |  F4   CHART OF ACCOUNTS Menu       | 
                      |  F5   Utility Menu                 | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |  ENTER YOUR SELECTION:             | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

      Note that  many of the  selections are used to  go on to  other menus.
      All of  the "F"  selections are  discussed in  later sections  in this
      documentation.



























                                     PAGE 28




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                        SECTION SIX - THE CHART OF ACCOUNTS 


      The  Chart of  Accounts is  the foundation  upon which  your financial
      management program is  built.  Creating an accurate  and logical Chart
      of Accounts is imperative, if you wish to correctly input and retrieve
      data.   We strongly  recommend that  you  review the  sample Chart  of
      Accounts on the two  demo files, and use them as  guides in setting up
      your own accounts.

      In this section, we first describe the elements included in a Chart of
      Accounts; then we  describe the procedures for  entering, changing, or
      deleting  account  numbers.   If  you don't  have  much  expertise  in
      double-entry bookkeeping, or in the terminology used, you will find it
      worthwhile  to become  acquainted with  some of  the basic  principles
      described in Appendix A. 

      The Chart of Accounts Menu is  selection F4 at the General Ledger Main
      Menu.  It appears as follows: 

                      ------ G/L CHART OF ACCOUNTS MENU ----- 
                      |                                     | 
                      |  ESC  Return to GL Main Menu        | 
                      |  F1   Update Chart of Accounts      | 
                      |  F2   Input/Change Budgets          | 
                      |                                     | 
                      |                                     | 
                      |                                     | 
                      |                                     | 
                      |                                     | 
                      |                                     | 
                      |                                     | 
                      |  ENTER YOUR SELECTION:              | 
                      |                                     | 
                      |                                     | 
                      --------------------------------------- 



      6a - WHAT IS A CHART OF ACCOUNTS? 

      The Chart  of Accounts  is a  detailed listing  of all  your financial
      accounts.  This  listing includes all assets,  liabilities, income and
      expenses.  Also included are a Capital account and a Retained Earnings
      account. 



      6b - TYPES OF ACCOUNT NUMBERS 

      Each transaction posted to FINANCE MANAGER, must be posted to at least
      two accounts  from the  Chart of  Accounts.  At  least one  account is
      debited,  and   at  least  one   account  is  credited,   during  each
      transaction. 

      A total of  1999 different  accounts may  be listed  in your  Chart of


                                     PAGE 29




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      Accounts.  Each  account must be  assigned a  type code, and  a number
      between 1 and 9999.  The account types are represented as follows:

      A =  ASSETS           Money you have.  Things  you own.  Money owed to
                            you (includes cash, car, furniture, etc.). 

      L = LIABILITIES       Debts (e.g., loans, credit cards). 

      C = CAPITAL OR EQUITY Starting net worth or money invested in company. 

      R = RETAINED EARNINGS Used by the system to  record net income and net
                            equity  (shows all  profit related  increases or
                            decreases in equity). 

      I = INCOME            Earnings, paychecks, cash received. 

      E = EXPENSE           Money you  pay out for goods  or services (e.g.,
                            rent, gas, food, etc.).



      6c - ORGANIZATION OF THE CHART OF ACCOUNTS 

      A sample Chart  of Accounts listing  is included in Appendix  B. After
      reviewing this listing, notice the following characteristics: 

         - The Asset accounts are assigned  the lowest numbers.  Followed by
           Liabilities, Capital/Equity, Retained  Earnings, Income, and then
           Expenses.   

         - There is only one Retained Earnings "R" account type. 

         - All accounts of the same type are grouped together.   

         - Numbers are not assigned in  immediate sequence.  This helps when
           inserting  new account  numbers  at a  later  date.  New  account
           numbers can be inserted in the most logical sequence. 

         - We suggest assigning account numbers as listed below, so that all
           accounts of the same type are grouped together in the same series
           of account numbers: 

                            1 - 1999 Assets 
                         2000 - 2999 Liabilities 
                         3000 - 3999 Capital and Retained Earnings 
                         4000 - 4999 Income 
                         5000 - 5999 Expenses 

         - Account numbers  ending with  a 9  or a  99 are  subtotal account
           numbers. 








                                     PAGE 30




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      6d - SUBTOTALS

      Account numbers which end in "9" or "99" are reserved for subtotals in
      the Chart of  Accounts.  They are provided exclusively for  you to use
      in defining your own subtotal groups. 

      Again,  by  referring to  the  sample  Chart  of Accounts  listing  in
      Appendix B, or  by looking at the Sample Accounts  on your screen, you
      can see how the subtotals may be labeled and used. 

      By referring to the sample Income Statement in Appendix B, you can see
      how FINANCE MANAGER calculates your designated totals and subtotals:  

         - Subtotal  group 1  consists  of account  numbers  ending in  "9".
           These account numbers  provide a subtotal of all  accounts of the
           same type since the last group 1 subtotal.

         - Subtotal group  2 uses accounts  ending in "99".   These accounts
           subtotal back to  the previous 99.  Also, group  2 accounts clear
           the balance of any group 1 subtotal account.

         - You do not need to assign an account number for Grand Totals.  On
           reports,  the FINANCE  MANAGER  program  automatically creates  a
           bottom line figure, or a Grand Total, for each account type. 

         - You may set up  as many or as few subtotal  accounts as you wish.
           The only restriction is in the number of eligible account numbers
           between 9 and 9999.  The General Ledger Program allows a total of
           1999 actual accounts.   

         - Subtotal numbers should be assigned  the same account type as the
           group of accounts for which they are creating subtotals.   

         - Subtotals should each be assigned a unique, descriptive name. 

      As mentioned  above, these accounts  are for subtotals only.   They do
      not  have  beginning  balances,  and  you  are  not  allowed  to  post
      transactions to them. 



      6e - CHART OF ACCOUNTS DATA FIELDS 

      Each  account in  the  Chart of  Accounts  includes several  elements.
      These  elements, or  fields,  are  used when  entering  data for  each
      account.  The method for entering  accounts is described later in this
      section.  The data fields are defined below: 

      ACCOUNT NUMBER    The first  field entered is the  account number.  If
                        the account  is a  normal account  (as opposed  to a
                        subtotal account),  FINANCE MANAGER prompts  you for
                        all of the fields listed below.  If the account is a
                        subtotal account  (determined by whether or  not the
                        number ends with a "9"), the program prompts you for
                        all  of  the  information listed  below  except  the
                        Beginning Balance. 


                                     PAGE 31




                    FINANCE MANAGER II - GENERAL LEDGER Lite



      ACCOUNT NAME      The account name entered should clearly identify the
                        specific account or subtotal field. 

      ACCOUNT TYPE      This  field  consists  of  a  one-character  account
                        identification.  The  following values are  the only
                        values allowed: A, L, C, R, I, or E.   

      BEGINNING BALANCE The  beginning  balance  is usually  zero,  but  the
                        beginning-balance  option   is  provided   for  your
                        convenience.  Any time you enter a beginning balance
                        of more than  zero, or make a change  to a beginning
                        balance,  you  run  the risk  of  an  out-of-balance
                        situation.   The  default  value for  the  beginning
                        balance  is  zero.   You cannot  enter  a  beginning
                        balance on subtotal accounts. 

                        PLEASE NOTE: Income  & expense  accounts are  period
                                     accounts  and   thus  do  not   have  a
                                     beginning balance.   Balances for these
                                     accounts   are   changed  by   entering
                                     transactions. 

      NOTE: When  you enter  amounts,  use a  positive  number.  A  positive
            beginning balance  is always the normal  balance associated with
            that specific account type (e.g.,  Assets = debit, Liabilities =
            credit, etc.) See Appendix A for a detailed explanation. 



      6f - GETTING FAMILIAR WITH THE CHART OF ACCOUNTS 

      Before  beginning to  enter your  own  Chart of  Accounts, follow  the
      procedures listed below, using only the Demo Accounts. 

          1. After starting  FINANCE MANAGER  , select  your "set  of books"
             (see  the Getting  Started  section).   For learning  purposes,
             select the  file "HOME".  At  the FINANCE MANAGER  Master Menu,
             select F2.

          2. Now you are at the General  Ledger Main Menu.  Select F4.  This
             brings you to the General Ledger Chart of Accounts Menu.   

          3. At the General  Ledger Chart of Accounts Menu,  select F1.  The
             next screen displays the following fields: 


      Enter Account Number (1-9999):____ 
      Enter Account Name:_________________________ 
      Enter Account Type (A,L,C,R,I,E):_  Enter Beginning Balance:_________ 


          4. The cursor  will be  positioned at  the "Enter  Account Number"
             prompt. 

             On the lower half of your screen,  you can see a portion of the


                                     PAGE 32




                    FINANCE MANAGER II - GENERAL LEDGER Lite


             active Chart of Accounts.  Seeing  your accounts as they appear
             in the Chart of Accounts is  helpful when you are inserting new
             accounts into an existing Chart of Accounts. 

             The  highlighted account  is  a pointer,  showing the  selected
             account.  To move the highlighted account up or down, press the
             up or down arrows on the  keypad while the cursor is positioned
             at the  Enter Account Number  prompt.  If you move  the default
             pointer down a few lines, notice how the list scrolls. 

             You  may  select  an  existing account  number  by  moving  the
             highlighted pointer up or down  to the desired account and then
             press ENTER.  To set up a NEW account number you must type in a
             new account number. 

             Again, notice how the Demo file Chart of Accounts is organized.
             These are typical examples of Chart of Accounts. 

          5. If  you like,  enter some  data  into the  Sample Accounts  for
             practice. 

          6. To return to the Chart of Accounts Menu, press ESC. 

      Before entering your own Chart of Accounts, practice by entering a new
      account number  into one of  the existing sample accounts.   This will
      familiarize you with how to enter/change account numbers. 



      6g - ENTERING YOUR CHART OF ACCOUNTS 

      When you actually enter your own Chart of Accounts, it would be a good
      idea to collate your paperwork,  checks, statements, etc. in a logical
      account number  and order type (i.e.   Put all assets together  in the
      order  you want  them to  appear on  reports, but  don't forget  about
      possible subtotals).

      When you  enter your Chart of  Accounts, be sure to  have an organized
      plan of the different accounts you wish to enter.  You may wish to use
      the sample  accounts as an  example, but you  should not use  the Demo
      files as your own accounts.  You must  create a new file and enter all
      new accounts. 

      To create a new file, first  return to the FINANCE MANAGER Master Menu
      (Press the ESC key until your are  there).  When you are at the Master
      Menu, enter one  more ESC.  The program will then  prompt "DO YOU WANT
      TO RESTART (Y/N):_" Enter "Y". 

      Read  over the  Getting Started Section for  detailed instructions  on
      assigning/creating a filename and new database. 

      NOTE: Remember,  if you  have a  hard disk,  your new  file should  be
            created on  drive C:.  If  you have  two floppy disks,  your new
            file should be created on drive  B:.  Keep this in mind when you
            are entering the disk drive prompt data. 



                                     PAGE 33




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      After creating a  new file, you are  ready to enter your  new Chart of
      Accounts.   The procedures  listed below  may  be used  as an  example
      either  when trying  to enter  new accounts  into the  existing Sample
      Accounts, or when entering your own Chart of Accounts. 

          1. Select F1 at the Chart of Accounts Menu. 

          2. At the  input screen,  the cursor should  be positioned  at the
             "Enter Account  Number" prompt.   Unless you are  entering your
             very first account  number into a new Chart  of Accounts, there
             should already be default data in this field. 

          3. Instead of  using the  default data, enter  a new  number.  For
             example, you might  want to enter an account  for a Certificate
             of  Deposit.  Since  this  account  is an  asset,  it would  be
             assigned a number between 1 and 1999.   

          4. First, enter the account number.  For example: 

                        Enter Account Number (1-9999):550_ 

          5. Assign the account name: 

                     Enter Account Name:Certificate of Deposit___ 

          6. Assign the account type: 

                        Enter Account Type (A,L,C,R,I,E):A 

          7. Enter the beginning balance: 

                        Enter Beginning Balance:0________ 

             When entering  beginning balances  the program will  inform you
             that you  are out of  balance.  This  is normal until  you have
             entered  all of  your  beginning balances.   See  section 6k  -
             Setting Beginning Balances for more information. 

          8. If you  make a mistake  in a previous  field and would  like to
             change it, you can go back  to a previous field by pressing the
             Backspace key. 

          9. Once all of the data has  been entered correctly, answer "Y" at
             the "ARE INPUTS CORRECT Y/N:".  (If you want to answer "N", the
             cursor returns  to the account  number prompt and  the previous
             input is ignored.) 

         10. Your new account is now  entered into the FINANCE MANAGER Chart
             of Accounts. 

             NOTE: Please note  that the  account number  just added  is now
                   inserted into the Chart of  Accounts window at the bottom
                   half of  your screen.  Use  the cursor keys, when  at the
                   account number  field described  above, when you  wish to
                   scroll through the active account numbers to find the one
                   you  just   added.   If  you  have   added  your  account


                                     PAGE 34




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                   correctly, it will now be in numeric order in this list. 

         11. The cursor  should once again  be at the account  number field.
             Repeat steps  2 - 10  until you  have finished entering  all of
             your initial Chart of Account accounts.  To return to the Chart
             of Accounts menu at any time, enter ESC.   

         12. Any time you need to print a current Chart of Accounts listing,
             you can do so by using the  Reports Menu (see Section 9 - Chart
             of Accounts report). 



      6h - MAKING CHANGES/MODIFYING THE CHART OF ACCOUNTS 

      The steps below outline the procedure for making a change in the Chart
      of Accounts. 

          1. Select F1 at the Chart of Accounts Menu. 

          2. With  the cursor  at the  account  number prompt,  type in  the
             account number you wish to change.  Instead of typing a number,
             you may  accept the default  account by simply  pressing ENTER.
             To  choose a  different account,  move the  highlighted pointer
             line by using the up and down keypad arrows. 

          3. Because  the account  number you  have entered  is an  existing
             account, the system prompts: 

                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

             Answer this prompt with "M".  You are now in the change mode. 

          4. Make any  desired changes.  Press  ENTER to leave any  field as
             is.  (the account number itself  can not be modified, to change
             account  numbers you  must delete  the  account and  add a  new
             account). 

          5. If you would like to go back  to a previous field while you are
             entering data, you may do so by pressing the Backspace key. 

          6. After you have  entered data in and/or skipped over  all of the
             input  fields,  the  system  prompts  "ARE INPUTS CORRECT Y/N:"
             Press "Y"  to accept your  changes.  If you enter  "N" instead,
             the system ignores any modifications  and the cursor returns to
             the account number field. 



      6i - DELETING CHART OF ACCOUNT NUMBERS 

      When deleting account numbers from the chart of accounts there must be
      a zero  beginning  balance  on  the  account,  and  there  may  be  no
      transactions  using that  account  number.  If  there  is a  beginning
      balance or transactions for the account to be deleted, FINANCE MANAGER
      will not  allow the account  to be deleted.   If you have  a beginning


                                     PAGE 35




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      balance, or  transactions for the  account, you must follow  the steps
      listed below in order to delete the account. 

      Practice deleting accounts from the Sample Accounts before deleting an
      account from your own Chart of Accounts. 

          1. If there is  a beginning balance on the account,  you must move
             the beginning balance amount to  a new account number.  Do this
             by  ADDING the  beginning  balance from  this  account, to  the
             beginning  balance  of  another   account.   Next,  change  the
             beginning balance to  zero on the account to  be deleted.  This
             procedure will  ensure that  after you  delete the  account you
             will still be in balance. 

          2. If there  are any transactions  for the account number  you are
             trying to delete,  FINANCE MANAGER will tell you  so.  In order
             to remove these transactions,  you should follow the procedures
             in Section Eleven - Changing Account Numbers. 

          3. After successfully following steps one and two, as shown above,
             you will now be allowed to delete the account. 

          4. To  actually delete  the account,  select  F1 at  the Chart  of
             Accounts Menu. 

          5. Then enter the number of the account to be deleted while at the
             Enter Account Number prompt.  The system will then prompt: 

                    ACTIVE ACCOUNT Modify/Delete/Quit(M/D/Q):_ 

          6. Select "D".  The account is removed.  If the account has either
             a beginning balance, or transactions,  the system will tell you
             and the deletion will not be completed. 





      6j - CREATING A NEW SET OF BOOKS WITH THE SAME CHART OF ACCOUNTS 

      To create a set of books for a different company or name, but with the
      same Chart of Accounts, copy  the "[filename].CHR" file from your data
      disk to a new  data disk.  Then, rename the file.   By doing this, you
      can avoid the process of re-entering  the Chart of Accounts.  Next, it
      is important that  you set the beginning balances for  all accounts to
      zero. 



      6k - SUGGESTED METHOD FOR SETTING BEGINNING BALANCES 

      When  setting up  your books  for the  first time,  you must  set your
      beginning balances.  If you are starting a new company, your beginning
      balances would  be zero, so  this section obviously wouldn't  apply to
      you. 



                                     PAGE 36




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      The method for setting the beginning balances is explained below: 

          1. This method is to enter beginning balances when setting up your
             Chart of Accounts.   Please note that while you  are setting up
             account numbers  with beginning balances, the  system will tell
             you how much you are out  of balance.  Do not be concerned with
             this  out-of-balance condition  before  all of  your Asset  and
             Liability accounts  are added, and your  beginning balances are
             set. 

          2. After  you  have  finished  entering  all  of  your  Asset  and
             Liability  beginning balances,  you  would normally  be out  of
             balance by the difference between  your total assets, less your
             total liabilities  (this is the out-of-balance  amount shown on
             your   screen).    Enter   this  difference   in   your   first
             Capital/Equity type "C" account beginning balance.  This amount
             is your starting Equity.   After doing this, the out-of-balance
             message will go away. 








































                                     PAGE 37




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                     SECTION SEVEN - INCOME AND EXPENSE BUDGET 


      FINANCE MANAGER allows you to keep  track of your budget for any given
      income  or expense  account.  You  can determine  how closely  you are
      adhering to  your budget by  printing the Budget Variance  report (See
      section nine "Reports" and also Appendix B for examples). 

      The procedures in  this section describe how to add  budget amounts to
      your FINANCE MANAGER database: 

          1. At the Chart of Accounts Menu, select F2. 

          2. The following screen appears: 

           Enter Month of Budget (1-13):__   (13=ALL MONTHS) 

           Enter Account Number (1-9999):____ Enter JANUARY Budget:_______ 


          3. Enter the month number of the budget you would like to enter.

                          Enter Month of Budget (1-13):13 

             Month 13 is  used for all months.  For example,  if you want to
             set up a  budget for your car payment, which  is the same every
             month, you  would select month  13.  When entering  the monthly
             Budget amount, this  amount would be entered in  all 12 months.
             This eliminates having to enter the same budget figure 12 times
             (one for each month). 

          4. At  the Enter  Account  Number, you  should  enter the  account
             number for which you would like to set up a budget. 

                        Enter Account Number (1-9999):5000 

             This account number must be an active Income or Expense account
             which has previously been set  up during your Chart of Accounts
             setup.  This  field works similar  to the account  number field
             used in  the Chart  of accounts setup.   The active  income and
             expense  accounts which  may  have budget  amounts assigned  to
             them, are listed at the bottom half of the screen. 

             The  current  selected  account,  and it's  default  data,  are
             highlighted  in the  Chart of  Accounts window.   Remember, the
             highlighted default  account pointer  can be moved  up/down via
             the up/down  keypad arrow key.   The selected budget  month can
             also be  changed by using  the left/right keypad arrow  keys to
             move to the next or previous  month.  The keypad arrow keys are
             only active when at the Enter Account Number field. 

          5. Next,enter the monthly budget amount for the selected month. 

                          Enter ALL MONTH Budget:200____ 

             After you have entered this amount you will return to the Enter


                                     PAGE 38




                    FINANCE MANAGER II - GENERAL LEDGER Lite


             Account Number  field and  you may enter  a budget  for another
             account or month. 

      You may  now select another account  number, or use the  BACKSPACE key
      (or left/right keypad keys) to change the month number. 

      When you  have finished entering budget  data, press ESC to  return to
      the Chart of Accounts Menu.  At that point your budget will be written
      to disk and saved.  You may print a copy of all of your budget data by
      printing the Budget Listing report (see Section Nine on reports). 

      As  mentioned above,  the budget  data you  enter is  reported in  the
      Budget Variance report.  The Budget  Variance report can be run either
      as  a year-to-date  cumulative  report,  or as  a  trended (by  month)
      report.











































                                     PAGE 39




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                           SECTION EIGHT - TRANSACTIONS 


      Any transaction  which changes your  financial standing, such  as from
      making a savings account deposit to  being charged interest on a loan,
      should   be  recorded   in  your   FINANCE  MANAGER   program.   These
      transactions are recorded via Journal Entries. 

      We  refer to  Journal Entries  as "Transactions".   Anything affecting
      your  Balance  Sheet, or  Income  Statement  position, (i.e.  anything
      involving  money)  needs  to  be   stored  in  FINANCE  MANAGER  as  a
      transaction. 



      8a - ENTERING TRANSACTIONS

      Each  transaction  involves  the  debiting of  one  account,  and  the
      crediting of  another account.  When  entering debits and  credits, an
      easy rule to remember is that a  credit is where money (or funds) come
      from, and a  debit is where money  goes to.  If you are  new to double
      entry bookkeeping, some basic sample  transactions are included on the
      demo accounts.  Print a General  Journal report (see Section Nine) to
      get a listing of these sample transactions. 

      As you  enter each  transaction, FINANCE MANAGER  checks it  to ensure
      that it is in balance (i.e.  Debit amounts = Credit amounts).  If your
      accounts  in your  Chart  of Accounts  have been  set  up in  balance,
      FINANCE MANAGER will always keep your accounts in balance. 

          1. To begin entering transactions,  select F1 "Input Transactions"
             at the General Ledger Main Menu.  The following screen appears: 

              Item Date:__-__-__        Description:_____________________ 

               DEBIT:Check Num:_____ Account Number:____ Amount:_________ 
              CREDIT:Check Num:_____ Account Number:____ Amount:_________ 

          2. When entering transactions, the last transaction entered always
             provides the default data (unless, of course, this is your very
             first FINANCE MANAGER transaction).   To accept default data in
             any field, simply press ENTER in that field. 

          3. Enter the Item Date: 

                                Item Date:_1-12-87 

             The  item date  is the  date  on which  the actual  transaction
             occurred. 

          4. Enter the description: 

                         Description:Safeway Food Store___ 

             The "Description" field  may be used to specify  the purpose of
             the transaction.  For example, you  may want to indicate why or


                                     PAGE 40




                    FINANCE MANAGER II - GENERAL LEDGER Lite


             to whom a check was written. 

          5. Enter the debit check number: 

                               DEBIT:Check Num:____ 

             In the Check Num field, you  may enter the check number for the
             transaction,  or  you  may  use the  field  to  indicate  other
             qualities  about   the  transaction.   For  instance,   if  the
             transaction involved  an automated  teller, you  might indicate
             "ATM" in the check number field.  If the transaction involved a
             deposit, you might  want to indicate "DEP" in  the check number
             field.  In this case, we would  leave the field blank since the
             check is  written as a  credit, and  the check number  would be
             entered in the  credit check number field.  If  this would have
             been a deposit, we might have put "DEP" in this field. 

             FINANCE MANAGER  can automatically  increment the  check number
             for  you, once  the initial  check number  has been  input.  To
             increment check numbers,  press "+" and ENTER.   Also, you have
             an option of entering "=" which  will make the check number the
             same as your last transactions  check number.  To clear a check
             number just enter a space and press ENTER. 

          6. Enter the debit account number: 

                            Account Number:5050 [Food] 

             At the  debit and credit  Account prompt,  you may fill  in the
             account number,  or you  can choose the  account (the  Chart of
             Accounts are  highlighted on the  lower half of the  screen) by
             using the  keypad arrows with  Num Lock off.  Press  ENTER when
             the highlighted account has been selected. 

          7. Enter the debit amount: 

                                 Amount:143.27___ 


             This is the amount of the check written to Safeway Food Store. 

          8. Enter the credit check number: 

                               CREDIT:Check Num:1234 

             As this example is for a  check written the check number should
             be entered.  Also, see debit check number above. 

          9. Enter the credit account number: 

                      Account Number:1010 [Checking Account] 

         10. Enter the credit amount: 

                                 Amount:143.27___ 



                                     PAGE 41




                    FINANCE MANAGER II - GENERAL LEDGER Lite



             The Debit Amount/Credit Amount should, in most cases, match one
             another.   If you  do not  enter a  credit amount,  the program
             defaults to the same amount as the debit amount. 

             If the debit and credit amounts do not match, the program tells
             you that your account is out  of balance.  If you need multiple
             debit  or credit  transactions, refer  to section  8b "Entering
             Multiple Debit or Credit Transactions" below). 

         11. If you are entering a transaction and  you want to go back to a
             previous field, you can back up by using the Backspace key. 

         12. You may abort the transaction at any time by pressing ESC. 

         13. To accept the transaction: 

                            ARE INPUTS CORRECT (Y/N):Y 

             Answer the  prompt with "Y".   FINANCE MANAGER will  accept the
             transaction.   The cursor  will then  return to  the Item  Date
             field  ready for  the  next transaction.   If  you answer  this
             prompt with  a "N"  you will  return to the  date field  and be
             allowed to make any changes/corrections necessary. 

         14. After you have  entered all desired transactions,  press ESC to
             return to the General Ledger Main Menu. 



      8b - ENTERING MULTIPLE DEBIT OR CREDIT TRANSACTIONS 

      Most transactions have only one debit  and one credit.  There are some
      instances, however,  when there  are several debits  or credits  for a
      single transaction.  FINANCE MANAGER  allows for multiple debit and/or
      credit entry, thus preventing out  of balance situations.  The maximum
      parts in one transaction is 25. 

      Multiple debit or credit transactions  are entered just like any other
      transaction,  except   the  initial  debit  and   credit  amounts  are
      different.  For example:

           You would  like to record  a furniture purchase of  $100.00.  The
           check was  written for  $105.50 because of  sales tax.   You have
           decided to  record your sales tax  in a separate account,  so you
           need to debit both "Furniture" [Asset] and "Sales Tax" [Expense]. 

      This  transaction has  two debits  and one  credit.  To  complete this
      transaction, follow the steps outlined below:

          1. Follow steps 1-5 in "Entering Transactions". 

          2. Enter the debit account number: 

                          Account Number:1700 [furniture] 



                                     PAGE 42




                    FINANCE MANAGER II - GENERAL LEDGER Lite


          3. Enter the subtotal purchase amount:  

                                   Amount:100.00 

          4. Enter the check number for the credit account: 

                               CREDIT:Check Num:1023 

          5. Enter the account number: 

                      Account Number:1010 [Checking Account] 

          6. Enter the credit amount: 

                                  Amount: 105.50 

          7. At the prompt, answer "Y". 

                            ARE INPUTS CORRECT (Y/N):Y 

          8. At the "Out of Balance" prompt, answer "Y". 

                  TRANSACTION IS OUT OF BALANCE, CONTINUE (Y/N):Y 

          9. When  the  screen reappears,  notice  that  there is  a  column
             labeled "CUM AMT", at  the right,which registers the cumulative
             credit and debit amounts. 

         10. Now the  second part of  the transaction needs to  be recorded,
             namely, the recording of the sales tax for the transaction. 

         11. Enter the debit account number: 

                          Account Number:5670 [sales tax] 

         12. Enter the sales tax amount:  

                                    Amount:5.50 

             Note that the system default for  the debit amount field is the
             cumulative remaining amount to balance the transaction. 

         13. Answer the "ARE INPUTS CORRECT" prompt with a "Y": 

                            ARE INPUTS CORRECT (Y/N):Y 

         14. In this example, the transaction would now be in balance. 

      You may, in some cases, have a  situation in which there are more than
      two debits for one credit, or multiple credits for one debit.  FINANCE
      MANAGER continues  to prompt you  for more debit/credit  amounts until
      the transaction is in  balance, up to a maximum of  25 parts.  You can
      have  FINANCE  MANAGER calculate  the  amount  needed to  balance  the
      transaction by pressing ENTER while in the amount field. 

      Also of  note: When  you are  entering multiple  transactions, FINANCE


                                     PAGE 43




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      MANAGER will go to either the debit or credit side of the transaction,
      depending on which has a lower  cumulative amount.  If you wish to put
      an  amount on  the  other side  of the  transaction,  move forward  or
      backward by using the return and backspace keys respectively. 



      8c - CHANGING TRANSACTIONS 

      If you  discover an error in  an earlier transaction, or  if you would
      like to change previously  entered information, FINANCE MANAGER allows
      you  to  do  so.   Outlined  below are  the  procedures  for  changing
      previously entered transactions: 

          1. Select "F2" at the General Ledger Main Menu.   

          2. The system prompts you for "Transaction Search Data". 

          3. Enter data  in the fields  which you  want to match  that data.
             For example, if  you want to search for  all transactions which
             have a description  of "Safeway Food Store", you  would move to
             the description  field and  enter that description.   Upper and
             lower case do  not matter, and you do not  have to complete the
             description.  For example,  if you entered only  the first part
             of  the  description, "safe",  FINANCE  MANAGER  will find  all
             descriptions  which   begin  with  the  letters   "safe"  (i.e.
             "Safeway Food  Store").  You  could also add  a month  and year
             parameter to  the search,  and you would  find only  the "safe"
             descriptions in a particular month. 

             Any field  left blank  is an assumed  wildcard for  that field.
             Therefore,  if  you   leave  ALL  of  the   fields  blank,  all
             transactions are selected by the search. 

             While you  are at one of  the Account Number fields  and do not
             remember the  account number you  are seeking press "F2"  and a
             pop-up window will  appear to select your  account number from.
             To remove the  select-an-account window press the  Esc or Enter
             keys. 

          4. Next, FINANCE MANAGER searches  for all transactions containing
             the  values  you  have   specified.   As  each  transaction  is
             displayed, the program displays the following prompt:

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 

             You must select M,D,C,R,B,E,+,-, or Q. Where: 

                 M = Modify (change) transaction shown. 
                 D = Delete (remove) transaction shown. 
                 C = Continue (find next transaction that matches search). 
                 R = Reverse continue (find prior tran. that matches search). 
                 B = Beginning (go to first transaction in file). 
                 E = Ending (go to last transaction in file). 
                 + = Go to next consecutive transaction in file. 
                 - = Go to prior consecutive transaction in file. 


                                     PAGE 44




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                 Q = Quit transaction search. 


          5. As long  as you continue to  answer the above prompt  with "C",
             FINANCE  MANAGER  continues   searching  for  all  transactions
             containing the  values you have specified.   Selecting "R" does
             the same as "C" except it searches backwards. 

          6. Answering  the prompt  with  a "+"  causes  FINANCE MANAGER  to
             display the next  consecutive transaction; a "-"  shows you the
             previous transaction. 

          7. Entering a "B" or an "E" will  take you to the Beginning or End
             of the  transaction file  respectivly.  It ignores  your search
             paramaters. 

          8. When the search  function displays the transaction  you wish to
             change, answer the prompt with an "M" (Modify). 

          9. You  are  now  in  the  change  mode.   ENTER  leaves  a  field
             unchanged.  Change data in any field by typing in the new value
             for the given field.  

         10. If  you have  made a  mistake,  or would  like to  return to  a
             previous  field, use  the Backspace  key.  Use  the ESC  key to
             ignore your changes and return to the Main Menu. 

         11. If your changes cause the transaction to be out of balance, the
             system will  not accept  your change.   You must  re-enter your
             changes, making  sure your  cumulative debits  equal cumulative
             credits. 

      NOTE: If you  are changing a  transaction with multiple  debits and/or
            credits you can  not change the number of  parts the transaction
            had originally.  If you need to  change the number of parts of a
            transaction we suggest  that you delete the  old transaction and
            add a completely new one.


      8d - DELETING TRANSACTIONS 

      To delete or remove a transaction permanently, do the following: 

          1. Select F2 at the General Ledger Main Menu. 

          2. Enter search data and find  desired transaction as described in
             "Changing Transactions". 

          3. When the  transaction you  wish to delete  is displayed  on the
             screen, answer "D" at the: 

                Modify/Delete/Continue/Reverse/Begin/End/+/-/Quit: 

          4. When you are deleting a multiple part transaction, all parts of
             the transaction are deleted. 



                                     PAGE 45




                    FINANCE MANAGER II - GENERAL LEDGER Lite


          5. After you have deleted the  desired transaction(s), you may use
             the  "Sort"  function  (See  Section Ten).   When  sorting  the
             transactions,  the program  frees disk  space formerly  used by
             deleted transactions.  



      8e - POINTS TO REMEMBER 

      Each transaction must have at least one debit and one credit. 

      When  entering transactions,  try to  remember that  when you  write a
      check, in most  cases the transaction should reflect a  credit to your
      checking  account.   Likewise, when  you  make  a  deposit to  a  bank
      account, the  transaction usually should  reflect a debit to  the bank
      account. 

      ANOTHER WAY OF REMEMBERING DEBITS AND CREDITS: A CREDIT IS WHERE MONEY
      CAME FROM AND A DEBIT IS WHERE MONEY IS GOING TO. 







































                                     PAGE 46




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                              SECTION NINE - REPORTS 


      FINANCE MANAGER Reports Menu allows you to generate a full spectrum of
      financial statements from your own  database.  The Reports Menu (F3 on
      the General Ledger Main Menu) appears as follows: 

                      ----- GENERAL LEDGER REPORTS MENU ---- 
                      |                                    | 
                      |   ESC  Return to GL Main Menu      | 
                      |   F1   GENERAL JOURNAL             | 
                      |   F2   Account History             | 
                      |   F3   INCOME STATEMENT            | 
                      |   F4   BALANCE SHEET               | 
                      |   F5   Sources & Uses of Funds     | 
                      |   F6   Budget Variance             | 
                      |   F7   CHART OF ACCOUNTS           | 
                      |   F8   Budget Listing              | 
                      |   F9   Trial Balance               | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      -------------------------------------- 

      Explanations of the  available reports are listed  below.  Examples of
      the reports are shown in Appendix B. 

      Reports can  be generated to  show financial  standing for a  month, a
      range of months, a quarter, a  year, etc.  In this section, we discuss
      how reports  can help  you to  get optimum  results from  your FINANCE
      MANAGER program.   



      9a - EXPLANATIONS OF REPORTS 

      Each  of the  available  FINANCE MANAGER  General  Ledger reports  are
      described below.  Samples of these reports  are shown in Appendix B or
      may  be printed  while using  the DEMO  accounts (see  Getting Started
      Section). 

      General Journal Report: This report  is a listing of  all transactions
                              which took place during  a specified period of
                              time. 

      Account History:        An  Account  History   Report  can  trace  the
                              transaction  activity  against  given  account
                              numbers from your Chart  of Accounts.  You can
                              specify  only one  account, or  you can  get a
                              history for all of your accounts.  This report
                              is  excellent   for  keeping  track   of  your
                              checking  account activity.   It is  also very
                              helpful  in   tracking  loan   payments,  thus
                              monitoring  your loan  balance.   It can  help
                              keep track of variations in monthly utility or
                              phone  bills.  You  may want  to keep  in mind


                                     PAGE 47




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                              that the Account History  Report can be a very
                              long  report if  you  select more  than a  few
                              accounts. 

      Income Statement:       Also  called a  Profit  and  Loss report,  the
                              Income Statement shows the  net income (or net
                              loss, as the  case may be) for  a given period
                              of  time.   Simply  stated, it  is  the  total
                              income, less  the total expenses.   The report
                              may be run either as a cumulative report for a
                              specified period of time, or it may be trended
                              by month.

      Balance Sheet Report:   The   Balance  Sheet   shows  your   financial
                              position or financial  condition.  The Balance
                              Sheet shows the ending  balance for all of the
                              asset,  liability, and  equity accounts.   For
                              more information  on the  basic elements  of a
                              Balance  Sheet, see  Appendix  A. The  Balance
                              Sheet may  also be run either  as a cumulative
                              or as a trended report. 

      Sources and Uses        This is a two-part report.  The first part of 
      of Funds Report:        the report  shows each account  that qualifies
                              as  a  source  of  funds.   Adjacent  to  each
                              account name  is the  amount of  the "source".
                              The  second  part  of  the  report  lists  the
                              accounts which  reflect the use of  the source
                              funds listed above.  The bottom line total for
                              each part  of the  report should  match.  This
                              report can be either cumulative or trended. 

      Budget Variance Report: This  reports   the  difference   between  the
                              monthly  amount  budgeted   for  a  particular
                              expense  account, and  the actual  amount used
                              for  that  expense  account.   If  the  Budget
                              Variance  report is  being generated  for more
                              than   one  month,   the  report   shows  only
                              cumulative amounts, with  one variance for the
                              cumulative amounts. 

      Chart of Accounts:      This report  lists the  most current  Chart of
                              Accounts.  This  is the report that  should be
                              run before  and after you make  any changes to
                              the Chart of Accounts. 

      Budget Listing:         This, like the Chart of Accounts, is a listing
                              of  accounts.  The  accounts listed,  however,
                              are only  those which may have  budget amounts
                              assigned  to them  (i.e.,  income and  expense
                              accounts).   The   account  name   is  listed,
                              accompanied   by  all   other  account   data.
                              Instead of  including a column  for "Beginning
                              Balances",  there  is  a  column  for  "Budget
                              Amounts". 



                                     PAGE 48




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      Trial Balance:          This report  provides a quick look  at current
                              balances on all accounts.  It is like a income
                              statement and balance sheet combined into one.
                              In old manual  accounting systems, this report
                              would tell you  if you are in  balance.  It is
                              provided here mainly as  a convenience and for
                              completeness. 



      9b - GENERAL INSTRUCTIONS FOR GENERATING REPORTS 

      When using  FINANCE MANAGER  to generate  financial reports,  you have
      three  options.  First,  you can  simply list  reports to  the screen.
      Second,  if you  have a  printer, you  can print  a hard  copy of  the
      reports.  You also  have the option of sending your  reports to a disk
      file instead  of to  the printer.   With this  option, reports  can be
      stored and printed at a later date. 

      A "Destination" prompt is an option for each of the available reports.
      To select the destination, answer the prompt below: 

                         TO SCREEN/PRINTER/DISK (S/P/D):_

      If you  select "D"  for disk, the  system will prompt  you for  a disk
      filename.  Enter a filename of up  to eight characters.  The file will
      be saved on  your data disk with  the file extension of  ".RPT".  If a
      file with the name entered already exists, the system will tell you so
      and ask if  you want to delete  the old file.  If you  answer "N", the
      report will be appended to the already existing disk file. 

      When  you select  "P"  for  printer, you  may  pause  the printing  by
      pressing any key.  Please keep in mind that most printers have a print
      buffer, so the report continues to print until the buffer is empty. 

      For most  reports, you also  need to  specify reporting dates  via the
      "Date" prompt.  The date prompt appears as follows: 

                         ENTER DATE RANGE FOR REPORTS: 
                                 STARTING Month:__ Year:__  
                                   ENDING Month:__ Year:__ 

      These  dates  determine which  months  and  years  are shown  on  your
      reports.  The  ending month and year  must be within twelve  months of
      the starting month and year.  To  get a year-to-date report, you might
      select the  dates 1-87 through 12-87.   Likewise, if you want  a first
      quarter report, you could select 1-87 through 3-87. 

      When entering prompts for reports, remember  that you may back up to a
      previous field by pressing the Backspace  key.  If you want to go back
      to the reports menu while you are  at the input screen, press ESC.  If
      you want to return to the  reports menu after your report has finished
      listing to the screen, press ENTER.

      Since there are different reporting  options within reports, below are
      some of the  different types of input screen displays  and the reports


                                     PAGE 49




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      to which they apply. 


          1. To  print  the GENERAL JOURNAL (F1),  BUDGET VARIANCE (F6),  or
             TRIAL BALANCE (F9) reports the guidelines below apply: 

                a. Make your selection (F1 or F6). 

                b. The following screen appears: 


                         TO SCREEN/PRINTER/DISK (S/P/D):_ 

                         ENTER DATE RANGE FOR REPORTS: 
                                 STARTING Month:__ Year:__  
                                   ENDING Month:__ Year:__ 


                c. First, type  in the  destination for your  report.  Then,
                   enter the reporting dates.    


          2. When  you are  selecting ACCOUNT  HISTORY (F2),  the procedures
             below apply: 

                a. Select F2 at the Reports Menu. 

                b. The following screen appears: 

                         TO SCREEN/PRINTER/DISK (S/P/D):_ 

                         ENTER DATE RANGE FOR REPORTS: 
                                 STARTING Month:__ Year:__  
                                   ENDING Month:__ Year:__ 

                         DO YOU WANT COMPRESSED REPORT (Y/N):_ 

                         ACCOUNT NUMBER RANGE: 
                                 STARTING ACCOUNT:____ 
                                   ENDING ACCOUNT:____ 


                c. First, type  in the  destination for your  report.  Then,
                   enter the reporting dates.    

                d. Answer the "Compressed  Reports" prompt.  Compressed will
                   print more than one selected account per page to conserve
                   paper.  See Appendix B for examples of a compressed and a
                   regular Account History report.  

                e. Enter the starting through the ending account numbers. 


          3. For the INCOME  STATEMENT (F3), the BALANCE SHEET  (F4), or the
             SOURCES AND  USES OF FUNDS  Report (F5), follow  the procedures
             below: 


                                     PAGE 50




                    FINANCE MANAGER II - GENERAL LEDGER Lite



                a. Select F3, F4, or F5  at the Reports Menu.  The following
                   screen appears: 


                        TO SCREEN/PRINTER/DISK (S/P/D):_ 

                         ENTER DATE RANGE FOR REPORTS: 
                                 STARTING Month:__ Year:__  
                                   ENDING Month:__ Year:__ 

                        DO YOU WANT A TRENDED REPORT(Y/N):_ 


                b. First, type in the destination for your report.   

                c. Next, enter the reporting dates at the date range prompt. 

                d. Then, answer the "Trended  Report" prompt.  If you select
                   "Y",  your reports  will  be trended  by  month.  If  you
                   select   "N",   your   reports   will   show   cumulative
                   year-to-date amounts.   To see  the difference  between a
                   trended  regular  reports,  refer   to  the  examples  in
                   Appendix B.


          4. To print the CHART OF ACCOUNTS (F7) listing, do the following: 

                a. Select F7 at the Reports Menu. 

                b. The only prompt  you need to answer  is the "Destination"
                   prompt. 


          5. The BUDGET  LISTING (F8)  is similar to  the Chart  of Accounts
             listing, with a few variations: 

                a. Select  F8 at  the  Reports Menu.   The following  screen
                   appears: 


                        TO SCREEN/PRINTER/DISK (S/P/D):_ 

                                 STARTING MONTH:__ 
                                 ENDING   MONTH:__ 

                        DO YOU WANT A TRENDED REPORT(Y/N):_ 

                b. Answer the Screen/Printer/Disk prompt. 

                c. At the designated  prompt, enter the month  for which you
                   want the listing. 

                d. Then, answer the "Trended  Report" prompt.  If you select
                   "N", your  report will show  a cumulative amount  for all
                   months.  If  you select "Y",  your reports will  show the


                                     PAGE 51




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                   budget for each month on a seperate page. 

      NOTE: Do NOT  try to  print a  report (e.g. the  selection "P"  at the
            "S/P/D" prompt) if  you don't have a printer.  If  you try to do
            so, you will get an error message. 

      If you are  unfamiliar with financial reports, try as  many reports as
      you like, using  the sample accounts.  Doing so will  give you an idea
      of how the reports look and how they might be used. 

















































                                     PAGE 52




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                        SECTION TEN - SORTING TRANSACTIONS 


      FINANCE MANAGER  always keeps transactions  organized in the  order in
      which they are input.  The Sort function allows the user to choose the
      manner in which  FINANCE MANAGER sorts or  organizes the transactions.
      Transactions may be  sorted either by date of input  or by transaction
      date.

      To  start sorting  transactions,  select "F1"  at  the General  Ledger
      Utilities Menu.  The following screen appears: 

                      ---------- SELECT SORT ORDER --------- 
                      |                                    | 
                      |   ESC  Return to Utilities Menu    | 
                      |   F1   Transaction Input Order     | 
                      |   F2   Date Order                  | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |                                    | 
                      |   ENTER YOUR SELECTION:            | 
                      |                                    | 
                      |                                    | 
                      -------------------------------------- 

          1. Select  the  order  in  which   you  would  like  to  sort  the
             transactions. 

          2. FINANCE MANAGER automatically sorts all transactions. 

          3. Press any key to exit and return to the Main Menu when the sort
             is completed. 


      If you  have more transactions than  memory can hold at  one time, the
      default disk  drive is used  to store  a temporary file  while sorting
      transactions.  Therefore, the default drive must have enough free disk
      space and must not be write-protected. 

      If there is not enough space on  your default drive to sort your file,
      you must put an  empty disk in this drive (usually  drive A:).  If you
      do run  out of disk space,  your sort is aborted  and your transaction
      file  remains unchanged.   Finance  Manager will  tell  you before  it
      creates a temporary sort  file to allow you to insert  a blank disk in
      your default drive. 









                                     PAGE 53




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                     SECTION ELEVEN - CHANGING ACCOUNT NUMBERS 


      Selection F1 on the General Ledger Utilities Menu allows you to change
      the account number of every transaction  posted to a specific Chart of
      Accounts account number.  It is a sort of "Global Replace" feature.   

      For example,  if you  want to change  the "Telephone"  expense account
      number from account 320 to account 4320, you could do so by using this
      feature.  First, you would create a new account 4320.  Then, you would
      run this utility to change all transactions for account 320 to account
      4320. 

      WARNING: Since this is an advanced feature, we do not recommend it for
               beginners.  It is very important  to first make a backup copy
               of  the data  disk before  proceeding any  further with  this
               function.  If  you do something  wrong, it is much  easier if
               you have a  backup copy and are  thus able to go  back to the
               old Chart of Accounts and transaction file. 

      To execute this function, follow the instructions below: 

          1. Select F3 at the General  Ledger Utilities Menu.  The following
             appears:

             Enter Old Account Number:____   Enter New Account Number:____ 

          2. At the "Enter  Old Account Number" prompt, type  in the account
             number  you wish  to change  (in the  example above,  you would
             enter account number 320). 

          3. At the "Enter  New Account Number" prompt, type  in the account
             number which  replaces the old  number.  In the  example above,
             this account number  would be 4320.  As mentioned  on the input
             screen, the new account number must be a valid, active Chart of
             Accounts number. 

      After  the function  has  completed, FINANCE  MANAGER  returns to  the
      General Ledger Utilities Menu. 



















                                     PAGE 54




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                       SECTION TWELVE - ENHANCEMENTS & HINTS 

      12a - ENHANCEMENTS BY VERSION 

      FINANCE MANAGER I (by Genesis Software) 

          2.0  - First major release. 

          2.1  - Multiple debits/credits per transaction. 
               - Trended financial reports. 

          2.2  - Graphics capability. 
               - Adjustable fiscal year capability. 
               - Ability to send reports to disk file. 

          3.0  - Date input format changed. 
               - Ability to accept up to $9 million in balances. 
               - Better error checks added. 
               - Display of filenames on the disk. 

          4.0  - Check number field added to transactions. 
               - Multiple debit and credit  transactions enhanced to include
                 cumulative   totals  and   automatic  default   to  balance
                 transactions. 
               - Configuration parameters for color. 
               - Monthly budget for income and expense accounts. 
               - Budget Variance report added. 
               - Elimination of zero amounts from reports. 
               - Defaults set for Y/N prompts. 
               - Elimination of  extra ENTER  keystrokes on  completed input
                 fields. 
               - Automatic check increment added. 
               - Modification  of "Change  Transaction"  selection to  start
                 from a  selected date  and then  step forward  through each
                 transaction one by one until stopped by the user. 
               - Added time display when at menus. 
               - Report file sent to disk changed to an ASCII format. 

          4.1  - Transaction file always kept sorted in date order. 
               - Defaults shown on Y/N prompts. 
               - Added default  disk drive and filename  option when running
                 program. 
               - Fix alpha/numeric error on check number format. 

      FINANCE MANAGER II 

          1.0  - Major re-write of FINANCE MANAGER I. 
               - Sort options provided (input or date order). 
               - Much faster memory resident sort. 
               - Subdirectory support. 
               - International date/time option. 
               - Transaction  search  data  expanded to  include  all  input
                 fields. 
               - Up to 1,999 accounts available on Chart of Accounts. 
               - Full screen editing. 
               - Much faster, on-line Account Reconciliation added. 


                                     PAGE 55




                    FINANCE MANAGER II - GENERAL LEDGER Lite


               - Support of 14"-wide printers. 
               - BCD math eliminates rounding errors. 
               - Active  accounts  displayed  at  Chart  of  Accounts  input
                 screen. 
               - Default filename accepted as a command line parameter. 
               - Ability to have multiple years on-line in one disk file. 
               - Up to 30,000 transactions on-line. 
               - Ability to  run in 256K.   Will use  up to 640K  memory for
                 faster speed. 
               - Printer pause feature. 
               - Edit mode for changing data. 
               - Enhanced reporting format and features. 
               - Simplified installation procedures. 


          1.1  - Added some features  from FINANCE MANAGER I  which were not
                 originally included in FM II. 
               - Provided a "all 12 months the same" budget amount entry. 
               - Added error check to simplify account deletion. 
               - Allow transaction input of up to 99 million. 
               - Faster movement between menu selections. 
               - Smaller program files to save disk space. 
               - Default data disk drive and directories user definable. 

          1.2  - New simple one-step install procedure for all modules. 
               - Multiple transaction delete on one search. 
               - Enhanced transaction search: 
                     * Description  search  will  search entire  string  for
                       match (not position sensitive). 
                     * Go to first or last record of transaction file. 
                     * Added a  "Reverse Search"  to find  prior transaction
                       match. 
               - PgDn (page down) key  will skip to end of  input screen for
                 faster inputs. 
               - TAB  &  SHIFT-TAB  added   for  duplication  of  ENTER  and
                 BACKSPACE keys respectively. 
               - Inputs  will  now  accept  international  character  inputs
                 (decimal 32-175). 
               - Calculation speed now 5 times faster than version 1.0 (with
                 hard disk). 
               - One  graphics  module supports  CGA,  EGA,  PCJR, PS/2  and
                 Hercules boards. 
               - Color graphics display. 
               - Printer configuration input fields increased from 9 to 12. 
               - Editing of fields allowed during initial input of data. 
               - Insert toggle added for data input editing. 
               - Credit check number defaults to debit check number. 
               - Trended budget listing. 
               - Trial Balance report added. 

          1.3  - Pop-up windows for all select-an-account input fields. 
               - LAN Support 
               - Mouse supported. 
               - Network compatible. 
               - Multiple month trial balance report. 
               - Enhanced screen displays with pop-up windows. 


                                     PAGE 56




                    FINANCE MANAGER II - GENERAL LEDGER Lite


               - Insert on/off toggle on input fields. 


      12b - HELPFUL HINTS AND SUGGESTIONS 

          * Keep  a CURRENT  backup copy  of your  data disk  each time  you
            update your data.  This will  safeguard against loss of data due
            to power outage or other equally frustrating problem. 

          * Use the  Shift PrtSc keys to  make a hardcopy of  current screen
            display. 

          * When End-of-Period posting  is run, closing entries  are made to
            the first type "R" Retained Earnings account. 

          * To eliminate having  to put in the disk drive  and filename each
            time you run FINANCE MANAGER, you should modify the RUN.BAT file
            and  add a  command line  parameter  to the  "FM" command.   For
            example, if you want to always use drive B: and filename "HOME",
            you should change the RUN.BAT  file command "FM" to "FM B:HOME".
            When you run FINANCE MANAGER  it will automatically use the file
            "HOME" in drive B:. 

          * If when you are entering  transactions you want the check number
            to be the  same as the last check number  (only works for actual
            decimal numbers) enter "=" at the check number input field.  The
            "+" key will increment last check number input. 

          * END OF  YEAR CLOSING procedures  in this evaluation  version are
            not  automated.  This  function is  completely automatic  in the
            REGISTERED  VERSION  and  is  well worth  the  expense.   It  is
            possible to close your books at  the end of the year manually by
            performing the following steps: 

                1. Make a backup of all your data files. 
                2. Print  a  Balance  Sheet  report  for  the  end-of-period
                   (usually December). 
                3. Delete  (via DOS)  the data  file with  the extention  of
                   ".GLT", (e.g. DEL [filename].GLT). 
                4. Run Finance Manager  using the data file  above.  When it
                   says  the  [filename].GLT  file  is  missing  answer  the
                   "Create New File" prompt with "Y". 
                5. Go to the "Update Chart of Accounts" selection and change
                   the  beginning  balances on  ALL  accounts  to match  the
                   balances on the Balance Sheet printed in step 2 above. 
                6. You are now ready to  begin entering transactions for the
                   new year. 

            Again this process is automated completely in the FREE UPDATE we
            will send to you when you REGISTER your copy of Finance Manager. 








                                     PAGE 57




                    FINANCE MANAGER II - GENERAL LEDGER Lite


               SECTION THIRTEEN - FINANCE MANAGER II DISK FILE NAMES 

      Listed below is a description of  files on your FINANCE MANAGER disks.
      If you  have an evaluation  version, some of  these files will  not be
      included due to disk space limitations. 


      PROGRAM DISK 

      File name      Description 
      ------------   ------------------------------------------------------- 
      RUN      BAT - Use to run FINANCE MANAGER. 
      CONFIG   SYS - Needed to  run FINANCE MANAGER (See  CONFIG.SYS in your
                     DOS manual). 
      FMGL     COM - FINANCE MANAGER II executable file. 
      FMGL     000 - GL main module overlay 0. 
      FMGL     001 - GL main module overlay 1. 
      FMGL     002 - GL main module overlay 2. 
      FMGL     003 - GL main module overlay 3. 
      INSTALL  COM - Installation program (use to install this program). 
      README   BAT - Display this information on screen. 


      DOCUMENTATION & DEMO DISK 

      File name      Description 
      ------------   ------------------------------------------------------- 
      FMGL     DOC - GL documentation manual (see PRINT-GL below). 
      HOME     BUD - HOME demo budget data file. 
      HOME     CHR - HOME demo Chart of Accounts data file. 
      HOME     GLT - HOME demo transaction data file. 
      PRINT-GL BAT - Prints documentation manuals on your printer (PRN). 
      README   BAT - Display this information on screen. 
      WORK     BUD - WORK demo budget data file. 
      WORK     CHR - WORK demo Chart of Accounts data file. 
      WORK     GLT - WORK demo transaction data file. 
      EPSON    CNF - Sample configuration file for EPSON printer.
      HP-LASER CNF - Sample configuration file for HP LaserJet printer. 
      HP2LASER CNF - Sample configuration file for HP II LaserJet printer. 
      JUKI     CNF - Sample configuration file for JUKI printer. 
      PROWRITE CNF - Sample configuration file for PROWRITER printer. 

















                                     PAGE 58




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                                    APPENDIX A 
                            BASIC ACCOUNTING PRINCIPLES 

      In  this section,  we would  like  to give  you an  overview of  basic
      accounting principles.   Most of  the examples  in this  section refer
      primarily to various business transactions.  They can, however, easily
      be adapted to apply to an individual's financial transactions.


      A1 - ACCOUNTING ELEMENTS 

      To have complete accounting records, all transactions and events which
      affect  the basic  accounting elements  must be  recorded.  The  basic
      accounting  elements are  ASSETS, LIABILITIES  and CAPITAL  or EQUITY.
      These elements are defined below:

      ASSETS:         Items of value  which are owned by the  business or by
                      the  individual are  assets.  Examples  of assets  are
                      money,  accounts  receivable, merchandise,  furniture,
                      machinery, buildings, and land.

      LIABILITIES:    A liability  is   any  obligation   to  pay   a  debt.
                      Liabilities include  accounts payable,  taxes payable,
                      bank loans, and notes to creditors.

      CAPITAL/EQUITY: The amount by which  the assets exceed the liabilities
                      is termed capital, or  owner's equity in the business.
                      The word "equity", in this sense, means "interest in".
                      The terms  proprietorship, net  worth, or  capital are
                      all  synonyms for  owner's  equity.  If  there are  no
                      liabilities, the owner's equity  is equal to the total
                      amount of assets. 


      A2 - THE ACCOUNTING EQUATION 

      The relationship  between the three  basic accounting elements  can be
      expressed in the following simple equation: 

                       ASSETS = LIABILITIES + CAPITAL/EQUITY

      In  order to  increase equity  in a  business, the  owner must  either
      increase the assets without increasing the liabilities or decrease the
      liabilities without decreasing  the assets.  In order  to increase the
      assets and equity without investing  more money or other property, the
      business must  operate at  a profit (profit  and losses  are described
      later).

      Below are  examples of  the effect of  transactions on  the accounting
      equation:

           1.  An increase in an asset offset  by an increase in equity; for
               instance, opening  a bank account  with a deposit  of $5,000.
               As a  result of this  transaction, the assets  are increased.
               Since no liabilities are  involved, the equity also increases
               by the same amount.  The equation is as follows:


                                     PAGE 59




                    FINANCE MANAGER II - GENERAL LEDGER Lite



                     ASSETS     = LIABILITIES  + CAPITAL/EQUITY 

                     $5,000     =     $0       +     $5,000 
                     (cash)                      (owner's equity) 

           2.  An  increase  in  an  asset,  offset  by  an  increase  in  a
               liability.  For  example, you  purchase office  equipment for
               $4,000 on 30-day credit.  The result is an increase in assets
               and  an  increase  in  an  accounts-payable  liability.   The
               equation is as follows:

                     ASSETS     = LIABILITIES  + CAPITAL/EQUITY 

                     $4,000     =    $4,000    +      $0 
                     (office         (accounts  
                      equipment)       payable) 


           3.  An increase  in one  asset, offset by  a decrease  in another
               asset.  For example, the purchase of office supplies for $100
               cash.   In  this  case,  the office  supplies  asset  account
               increases by  $100, and the  cash asset account  decreases by
               $100, causing  the assets, liabilities, and  equity to remain
               unchanged.  The equation is as follows:

                     ASSETS     = LIABILITIES  + CAPITAL/EQUITY 

               supplies   $100 
                    cash <$100> 
                          ____ 
                           $0   =      $0      +       $0  

           4.  An  increase in  an asset,  offset by  an increase  in equity
               resulting from  revenue.  For example, you  receive $500 cash
               from a client for services.  This increases your cash balance
               and, since liabilities are not affected, the equity increases
               as well.  The equation is as follows:

                     ASSETS     = LIABILITIES  + CAPITAL/EQUITY 

                      $500      =      $0      +      $500  
                      cash                       owner's equity 


           5.  A decrease  in  an  asset  offset by  a  decrease  in  equity
               resulting from expense.  For example,  you paid $400 cash for
               rent.    This  decreases   your  cash   balance  and,   since
               liabilities are not affected, the equity decreases by $400 as
               well.  The equation is as follows:


                     ASSETS     = LIABILITIES  + CAPITAL/EQUITY 

                     <$400>     =      $0      +     <$400>  
                      cash                       owner's equity  


                                     PAGE 60




                    FINANCE MANAGER II - GENERAL LEDGER Lite




      A3 - THE INCOME STATEMENT 

      This  statement,  sometimes called  a  Profit  and Loss  Statement  or
      Operating  Statement,  shows  the  net  income (or  net  loss)  for  a
      specified period of time.  The Income Statement, simply stated, is the
      total income,  less the total  expenses.  A simple statement  is shown
      below:  

           Income from services        $ 500  
           Rent expense               <$ 400> 
                                       _____  

           Net Income                  $ 100 
                                       =====  


      A4 - THE BALANCE SHEET 

      The  balance  sheet  is  sometimes called  a  statement  of  financial
      condition, or a statement of financial position.  It shows the assets,
      liabilities, and equity  at a specific date.  The  balance sheet shows
      the  ending  balance for  all  of  the  asset, liability,  and  equity
      accounts.  The  balance sheet  for the  above five  transactions would
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


      (Notice that the accounting equation  holds true: ASSETS = LIABILITIES
      + EQUITY.) 


      A5 - DOUBLE ENTRY ACCOUNTING 



                                     PAGE 61




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      The  meanings of  the terms  asset, liability  and capital/equity  are
      explained  above.   Examples   have  been  given  to   show  how  each
      transaction  causes  a change  in  one  or  more  of the  three  basic
      accounting elements.   Note that  in each  of the  transactions above,
      there was a dual effect (two accounts were changed).  This will always
      be true.  A  change (increase or decrease) in any  asset, liability or
      capital/equity is always accompanied by an offsetting change. 

      The  fact that  each transaction  has two  elements is  the basis  for
      double entry  accounting.  This  does not mean  that a  transaction is
      recorded twice; it instead means that both of the two elements of each
      transaction are  recorded.  This method  is very orderly,  simple, and
      very flexible.  There is no transaction  which cannot be recorded in a
      double entry transaction. 

      A business or individual has many assets.  Each one of these assets is
      kept  track  of   in  a  separate  account   (e.g.,  cash,  furniture,
      buildings).   A  separate  account  would  be  kept  for  each  asset,
      liability and equity.   Thus, many accounts make up  the total assets;
      many accounts also make up the total liabilities. 

      To help you  to understand double entry accounting,  we will introduce
      you to a way of describing an  account.  This is called a "T" account.
      The T account has three major  parts: the tile and account number, the
      debit side, and  the credit side.  A  sample of the T  account form is
      shown below.

                                  ACCOUNT TITLE 
                             ------------------------ 
                             DEBIT SIDE | CREDIT SIDE 
                                        | 
                                        | 
                                        | 


      A6 - DEBITS AND CREDITS 

      To debit an  account means to record  an amount on the  left, or debit
      side, of the account.  To credit  an account means to record an amount
      on the  right, or  credit side,  of the  account.  Sometimes  the word
      CHARGE is used a substitute for debit.  Another easy rule is: A credit
      is where money is coming from and a debit is where money is going to. 

      Increases in  assets are recorded  on the  left side of  the accounts;
      increases  in  liabilities are  recorded  on  the  right side  of  the
      accounts.   

      Decreases in  assets are recorded on  the right side of  the accounts;
      decreases in liabilities  and equity are recorded on the  left side of
      the accounts.   

      These relationships are shown below:

           1. ASSETS = LIABILITIES & EQUITY  

           2. DEBITS = CREDITS  


                                     PAGE 62




                    FINANCE MANAGER II - GENERAL LEDGER Lite



           3.   ALL ASSET ACCOUNTS        ALL LIABILITY ACCOUNTS  
               _____________________      ______________________  
               Debit to  | Credit to      Debit to  | Credit to  
               Record    | Record         Record    | Record  
               Increases | Decreases      Decreases | Increases  
                  (+)         (-)            (-)         (+)  


                                           ALL EQUITY ACCOUNTS  
                                          ______________________  
                                          Debit to   | Credit to  
                                          Record     | Record  
                                          Decreases  | Increases  
                                             (-)          (+)  

      To illustrate double  entry accounting, the transaction 1  would be as
      follows:

                       CASH                EQUITY  
              _____________________ ___________________ 
                 Debit  |  Credit     Debit  |  Credit 
                $5,000  |                    |  $5,000 


      A7 - INCOME AND EXPENSES 

      The  term  "Income" refers  to  an  increase  in the  equity  account.
      Likewise,  the term  "Expense" refers  to  a decrease  in the  equity.
      Thus, there are  two new ways in which the  equity account can change.
      All transactions involving income or  expense always cause a change in
      the equity account.   

      These changes  could be  recorded by debiting  the equity  account for
      expenses and crediting that same  equity account for income.  However,
      if  you  were  to  record  income and  expense  in  this  manner,  the
      capital/equity  account  would have  a  mixture  of increases  due  to
      income, and the investment of assets  in the business, while the debit
      side would have  a mix of decreases due to  expenses and withdrawal of
      assets from the business.  This would make it very hard to analyze the
      profitability or  to determine the  net income.  Thus, all  income and
      expense transactions are recorded  in separately classified income and
      expense  accounts.   Only the  net  income  (or  net profit)  is  then
      reflected in the capital/equity account.


      The income and  expense accounts also have debits  and credits.  Shown
      below are the relationship of these accounts.

                ALL EXPENSE ACCOUNTS      ALL INCOME ACCOUNTS  
                ____________________     _____________________  
                 Debit to  | Credit to   Debit to  | Credit to  
                 Record    | Record        Record  | Record  
                 Increases | Decreases   Decreases | Increases  
                    (+)        (-)          (-)         (+)  



                                     PAGE 63




                    FINANCE MANAGER II - GENERAL LEDGER Lite


      The use of these accounts is illustrated in the following examples:

       1. An increase  in an  asset offset  by an  increase in  income.  For
          example, you receive $500 cash  for services rendered.  This would
          appear as follows:

                      CASH                       INCOME  
               _____________________     _____________________  
                  DEBIT | CREDIT            DEBIT  |  CREDIT 
                        |                          | 
                   $500 |                          |  $500 

       2. A decrease  in an  asset offset  by an  increase in  expense.  For
          example, you pay $400 for office  rent.  This would be recorded as
          follows:

                     CASH RENT                  EXPENSES 
               _____________________     _____________________  
                  DEBIT | CREDIT            DEBIT  |  CREDIT 
                        |                          | 
                        | $400               $400  | 


      This  brief  description of  accounting  principles  and double  entry
      accounting is not  intended to teach you  everything about accounting.
      You should  refer to  a basic  accounting or  bookkeeping text  if you
      would  like  more  details.   The  intention of  this  section  is  to
      familiarize our users  with double entry accounting and  to help users
      get started with FINANCE MANAGER. 

      For further transaction examples, look at the sample "HOME" and "WORK"
      files on  your demo disk.  By  printing the General Journal  report in
      the sample accounts, you will be  able to see some sample transactions
      to apply to your set of books. 
























                                     PAGE 64




                    FINANCE MANAGER II - GENERAL LEDGER Lite


                            APPENDIX B - SAMPLE REPORTS 


                                 Table of Contents


           General Journal - Monthly.................................66



           Account History...........................................67

           Account History - Compressed..............................68



           Income Statement - Year to date...........................69

           Income Statement - Trended................................70



           Balance Sheet - Year to date..............................71

           Balance Sheet - Trended...................................72



           Sources and Uses of Funds - Year to date..................73

           Sources and Uses of Funds - Trended.......................74



           Budget Variance - Year to date............................75

           Budget Variance - Monthly.................................76



           Chart of Accounts......................................77-78



           Budget Listing - Month of June............................79



           Trial Balance.............................................80









                                     PAGE 65


                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:36am                     WORK Demo Accounts Test
                                GENERAL JOURNAL
                                     APR-89

  DATE   ACT#      ACCOUNT NAME          CL CHECK     DEBITS        CREDITS
-------- ---- -------------------------  -- -----   -----------   -----------
04-01-89 1010 Checking Account #1           DEP       44,500.00
         3000 Owners capital/equity                                 45,000.00
         1000 Petty Cash                                 500.00
                initial investment in company
04-01-89 1500 IBM Personal Computer                    3,500.00
         1010 Checking Account #1         * 10001                    5,000.00
         1510 Computer Monitor                           200.00
         1520 Computer Printer                           450.00
         1550 Computer Software                          700.00
         1530 Other Computer Equipment                   150.00
                the computer store
04-05-89 1600 Office Building                         50,000.00
         2500 Building Loan                 10002                   45,000.00
         1010 Checking Account #1         * 10002                    5,000.00
                first national bank
04-10-89 1700 Office Furniture                        15,000.00
         2400 Bank loan                                             15,000.00
                purchase furniture
04-15-89 5620 Office expenses                            280.00
         1010 Checking Account #1         * 10003                      280.00
                OFFICE SUPPLY STORE
04-25-89 5200 Advertising                              2,000.00
         1010 Checking Account #1         * 10004                    2,000.00
                GRAND OPENING AD
04-30-89 5300 Depreciation                               140.00
         1595 Accumulated Depn Computer                                140.00
                monthly depreciation
04-30-89 1300 Software Inventory                       5,000.00
         1010 Checking Account #1         * 10005                    5,000.00
                purchase inventory
04-30-89 1400 Hardware Inventory                      20,000.00
         1010 Checking Account #1         * 10006                   20,000.00
                purchase inventory
04-30-89 5010 Labor & Payroll                          3,210.00
         1010 Checking Account #1         * 10007                    3,210.00
                WAGES FOR JOHN SMITH
                                                    -----------   -----------
                                                     145,630.00    145,630.00

















                                    PAGE 66
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:37am                     WORK Demo Accounts Test
                  ACCOUNT HISTORY for 1010 Checking Account #1
                             APR-89 Through JUN-89

  DATE           DESCRIPTION             CL CHECK     DEBITS        CREDITS
-------- ------------------------------  -- -----   -----------   -----------
         Beginning Balance                                 0.00
04-01-89 initial investment in company      DEP       44,500.00
04-01-89 the computer store               * 10001                    5,000.00
04-05-89 first national bank              * 10002                    5,000.00
04-15-89 OFFICE SUPPLY STORE              * 10003                      280.00
04-25-89 GRAND OPENING AD                 * 10004                    2,000.00
04-30-89 purchase inventory               * 10005                    5,000.00
04-30-89 purchase inventory               * 10006                   20,000.00
04-30-89 WAGES FOR JOHN SMITH             * 10007                    3,210.00
05-01-89 sold equipment                   * DEP        5,250.00
05-02-89 SOFTWARE SOLD                    * DEP          840.00
05-12-89 office supply store              * 10008                      122.00
05-12-89 SOLD SOFTWARE/EQUIP              * DEP        3,045.00
05-15-89 john doe                         * 10009                    2,000.00
05-15-89 jane smith                       * 10010                    1,900.00
05-18-89 modern computers                 * 10011                       55.00
05-21-89 local paper add                  * 10012                      345.00
05-31-89 loan payment                       10013                      600.00
05-31-89 bldg loan payment                  10014                      462.88
05-31-89 wages john doe                   * 10015                    2,200.00
05-31-89 wages jane smith                 * 10016                    2,550.00
06-06-89 sold equipment                     DEP       10,500.00
06-10-89 news paper ad                      10017                      440.00
06-11-89 sold software/hardwr               DEP        6,090.00
06-15-89 wages john doe                     10018                    1,800.00
06-15-89 wages jane smith                   10019                    1,800.00
06-15-89 pay may sales tax                  10020                      435.00
                                                    -----------   -----------
         Ending Balance                               15,025.12


























                                    PAGE 67
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:37am                     WORK Demo Accounts Test
                                ACCOUNT HISTORY
                             APR-89 Through JUN-89

  DATE           DESCRIPTION             CL CHECK     DEBITS        CREDITS
-------- ------------------------------  -- -----   -----------   -----------
1000 Petty Cash
---------------
         Beginning Balance                                 0.00
04-01-89 initial investment in company                   500.00
                                                    -----------   -----------
         Ending Balance                                  500.00

1010 Checking Account #1
------------------------
         Beginning Balance                                 0.00
04-01-89 initial investment in company      DEP       44,500.00
04-01-89 the computer store               * 10001                    5,000.00
04-05-89 first national bank              * 10002                    5,000.00
04-15-89 OFFICE SUPPLY STORE              * 10003                      280.00
04-25-89 GRAND OPENING AD                 * 10004                    2,000.00
04-30-89 purchase inventory               * 10005                    5,000.00
04-30-89 purchase inventory               * 10006                   20,000.00
04-30-89 WAGES FOR JOHN SMITH             * 10007                    3,210.00
05-01-89 sold equipment                   * DEP        5,250.00
05-02-89 SOFTWARE SOLD                    * DEP          840.00
05-12-89 office supply store              * 10008                      122.00
05-12-89 SOLD SOFTWARE/EQUIP              * DEP        3,045.00
05-15-89 john doe                         * 10009                    2,000.00
05-15-89 jane smith                       * 10010                    1,900.00
05-18-89 modern computers                 * 10011                       55.00
05-21-89 local paper add                  * 10012                      345.00
05-31-89 loan payment                       10013                      600.00
05-31-89 bldg loan payment                  10014                      462.88
05-31-89 wages john doe                   * 10015                    2,200.00
05-31-89 wages jane smith                 * 10016                    2,550.00
06-06-89 sold equipment                     DEP       10,500.00
06-10-89 news paper ad                      10017                      440.00
06-11-89 sold software/hardwr               DEP        6,090.00
06-15-89 wages john doe                     10018                    1,800.00
06-15-89 wages jane smith                   10019                    1,800.00
06-15-89 pay may sales tax                  10020                      435.00
                                                    -----------   -----------
         Ending Balance                               15,025.12

1020 Checking Account #2
------------------------
         Beginning Balance                                 0.00
                                                    -----------   -----------
         Ending Balance                                    0.00











                                    PAGE 68
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:38am                     WORK Demo Accounts Test
                                INCOME STATEMENT
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME              BALANCE      SUBTOTAL 9     SUBTOTAL 99
---- -------------------------   ------------   ------------   ------------
Income
------
4000 Software sales in-state         2,000.00
4010 Computer sales in-state        22,500.00
4020 Service sales in-state              0.00
4030 Other sales in-state                0.00
                                 ------------
4089 TOTAL SALES IN-STATE                          24,500.00

4100 Sales out of state                  0.00
                                 ------------   ------------   ------------
     Total Income                                                 24,500.00

Expense
-------
5000 Cost of software sold           1,000.00
5005 Cost of hardware sold          13,500.00
5010 Labor & Payroll                15,460.00
5020 Material and Supplies               0.00
5030 Other costs                         0.00
                                 ------------
5089 TOTAL COST OF GOODS SOLD                      29,960.00

5200 Advertising                     2,785.00
5210 Bad debts from sales                0.00
5220 Bank service charges                0.00
5230 Car and Truck Expenses              0.00
5240 Sales Commissions                   0.00
5250 Depletion expense                   0.00
5300 Depreciation                      280.00
5400 Employee Benefits                   0.00
5410 Employee pension plan               0.00
5500 Freight & transportation            0.00
5510 Insurance                           0.00
5600 Laundry and cleaning                0.00
5610 Legal & professional serv           0.00
5620 Office expenses                   402.00
5625 Dues and subscriptions             55.00
5630 Rent on business property           0.00
5640 Repairs                             0.00
5650 Other supplies                      0.00
5660 TAXES - PROPERTY                    0.00
5665 TAXES - Income                      0.00
5670 Sales tax expense                   0.00
5680 Travel and entertainment            0.00
5700 Utilities & telephone               0.00
5800 Interest on mortgage                0.00
5810 Interest other                    600.00
5900 Misc other expenses                 0.00
                                 ------------   ------------   ------------
     Total Expense                                                34,082.00
                                                               ------------
     NET INCOME                                                   -9,582.00


                                    PAGE 69
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:38am                     WORK Demo Accounts Test
                                INCOME STATEMENT
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME               APR-89        MAY-89        JUN-89
---- -------------------------   ------------  ------------  ------------
Income
------
4000 Software sales in-state             0.00      1,200.00        800.00
4010 Computer sales in-state             0.00      7,500.00     15,000.00
4020 Service sales in-state              0.00          0.00          0.00
4030 Other sales in-state                0.00          0.00          0.00
                                 ------------  ------------  ------------
4089 TOTAL SALES IN-STATE                0.00      8,700.00     15,800.00

4100 Sales out of state                  0.00          0.00          0.00
                                 ------------  ------------  ------------
     Total Income                        0.00      8,700.00     15,800.00

Expense
-------
5000 Cost of software sold               0.00        600.00        400.00
5005 Cost of hardware sold               0.00      4,500.00      9,000.00
5010 Labor & Payroll                 3,210.00      8,650.00      3,600.00
5020 Material and Supplies               0.00          0.00          0.00
5030 Other costs                         0.00          0.00          0.00
                                 ------------  ------------  ------------
5089 TOTAL COST OF GOODS SOLD        3,210.00     13,750.00     13,000.00

5200 Advertising                     2,000.00        345.00        440.00
5210 Bad debts from sales                0.00          0.00          0.00
5220 Bank service charges                0.00          0.00          0.00
5230 Car and Truck Expenses              0.00          0.00          0.00
5240 Sales Commissions                   0.00          0.00          0.00
5250 Depletion expense                   0.00          0.00          0.00
5300 Depreciation                      140.00        140.00          0.00
5400 Employee Benefits                   0.00          0.00          0.00
5410 Employee pension plan               0.00          0.00          0.00
5500 Freight & transportation            0.00          0.00          0.00
5510 Insurance                           0.00          0.00          0.00
5600 Laundry and cleaning                0.00          0.00          0.00
5610 Legal & professional serv           0.00          0.00          0.00
5620 Office expenses                   280.00        122.00          0.00
5625 Dues and subscriptions              0.00         55.00          0.00
5630 Rent on business property           0.00          0.00          0.00
5640 Repairs                             0.00          0.00          0.00
5650 Other supplies                      0.00          0.00          0.00
5660 TAXES - PROPERTY                    0.00          0.00          0.00
5665 TAXES - Income                      0.00          0.00          0.00
5670 Sales tax expense                   0.00          0.00          0.00
5680 Travel and entertainment            0.00          0.00          0.00
5700 Utilities & telephone               0.00          0.00          0.00
5800 Interest on mortgage                0.00          0.00          0.00
5810 Interest other                      0.00        600.00          0.00
                                 ------------  ------------  ------------
     Total Expense                   5,630.00     15,012.00     13,440.00
                                 ------------  ------------  ------------
     NET INCOME                     -5,630.00     -6,312.00      2,360.00
                                 ============  ============  ============


                                    PAGE 70
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:38am                     WORK Demo Accounts Test
                                 BALANCE SHEET
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME              BALANCE      SUBTOTAL 9     SUBTOTAL 99
---- -------------------------   ------------   ------------   ------------
Assets
------
1000 Petty Cash                        500.00
1010 Checking Account #1            15,025.12
1020 Checking Account #2                 0.00
1200 Accounts Receivable                 0.00
1300 Software Inventory              4,000.00
1400 Hardware Inventory              6,500.00
                                 ------------   ------------
1499 CURRENT ASSETS                                               26,025.12

1500 IBM Personal Computer           3,500.00
1510 Computer Monitor                  200.00
1520 Computer Printer                  450.00
1530 Other Computer Equipment          150.00
1550 Computer Software                 700.00
                                 ------------
1589 Gross Computer Assets                          5,000.00

1595 Accumulated Depn Computer        -280.00
                                 ------------   ------------
1599 Net Computer Assets                                           4,720.00

1600 Office Building                50,000.00
1700 Office Furniture               15,000.00
                                 ------------   ------------   ------------
     Total Assets                                                 95,745.12
                                                               ============

Liabilities
-----------
2000 Accounts Payable                    0.00
2100 Sales tax payable                 790.00
                                 ------------   ------------
2399 Current Liabilities                                             790.00

2400 Bank loan                      14,550.00
2500 Building Loan                  44,987.12
                                 ------------   ------------
2999 Long Term Debt                                               59,537.12

                                 ------------   ------------   ------------
     Total Liabilities                                            60,327.12

Capital/Equity
--------------
3000 Owners capital/equity          45,000.00
3500 Retained earnings              -9,582.00
                                 ------------   ------------   ------------
     Total Net Equity                                             35,418.00
                                                               ------------
     Total Liabilities & Equity                                   95,745.12
                                                               ============


                                    PAGE 71
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:38am                     WORK Demo Accounts Test
                                 BALANCE SHEET
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME               APR-89        MAY-89        JUN-89
---- -------------------------   ------------  ------------  ------------
Assets
------
1000 Petty Cash                        500.00        500.00        500.00
1010 Checking Account #1             4,010.00      2,910.12     15,025.12
1020 Checking Account #2                 0.00          0.00          0.00
1200 Accounts Receivable                 0.00          0.00          0.00
1300 Software Inventory              5,000.00      4,400.00      4,000.00
1400 Hardware Inventory             20,000.00     15,500.00      6,500.00
                                 ------------  ------------  ------------
1499 CURRENT ASSETS                 29,510.00     23,310.12     26,025.12

1500 IBM Personal Computer           3,500.00      3,500.00      3,500.00
1510 Computer Monitor                  200.00        200.00        200.00
1520 Computer Printer                  450.00        450.00        450.00
1530 Other Computer Equipment          150.00        150.00        150.00
1550 Computer Software                 700.00        700.00        700.00
                                 ------------  ------------  ------------
1589 Gross Computer Assets           5,000.00      5,000.00      5,000.00

1595 Accumulated Depn Computer        -140.00       -280.00       -280.00
                                 ------------  ------------  ------------
1599 Net Computer Assets             4,860.00      4,720.00      4,720.00

1600 Office Building                50,000.00     50,000.00     50,000.00
1700 Office Furniture               15,000.00     15,000.00     15,000.00
                                 ------------  ------------  ------------
     Total Assets                   99,370.00     93,030.12     95,745.12
                                 ============  ============  ============

Liabilities
-----------
2000 Accounts Payable                    0.00          0.00          0.00
2100 Sales tax payable                   0.00        435.00        790.00
                                 ------------  ------------  ------------
2399 Current Liabilities                 0.00        435.00        790.00

2400 Bank loan                      15,000.00     14,550.00     14,550.00
2500 Building Loan                  45,000.00     44,987.12     44,987.12
                                 ------------  ------------  ------------
2999 Long Term Debt                 60,000.00     59,537.12     59,537.12

                                 ------------  ------------  ------------
     Total Liabilities              60,000.00     59,972.12     60,327.12

Capital/Equity
--------------
3000 Owners capital/equity          45,000.00     45,000.00     45,000.00
3500 Retained earnings              -5,630.00    -11,942.00     -9,582.00
                                 ------------  ------------  ------------
     Total Net Equity               39,370.00     33,058.00     35,418.00
                                 ------------  ------------  ------------
     Total Liabilities & Equity     99,370.00     93,030.12     95,745.12
                                 ============  ============  ============


                                    PAGE 72
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:38am                     WORK Demo Accounts Test
                           SOURCES AND USES OF FUNDS
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME              BALANCE      SUBTOTAL 9     SUBTOTAL 99
---- -------------------------   ------------   ------------   ------------
Sources of Funds
----------------
1595 Accumulated Depn Computer         280.00
2100 Sales tax payable                 790.00
2400 Bank loan                      14,550.00
2500 Building Loan                  44,987.12
3000 Owners capital/equity          45,000.00
4000 Software sales in-state         2,000.00
4010 Computer sales in-state        22,500.00
                                 ------------   ------------   ------------
     Total Sources                                               130,107.12
                                                               ============

Uses of Funds
-------------
1000 Petty Cash                        500.00
1010 Checking Account #1            15,025.12
1300 Software Inventory              4,000.00
1400 Hardware Inventory              6,500.00
1500 IBM Personal Computer           3,500.00
1510 Computer Monitor                  200.00
1520 Computer Printer                  450.00
1530 Other Computer Equipment          150.00
1550 Computer Software                 700.00
1600 Office Building                50,000.00
1700 Office Furniture               15,000.00
5000 Cost of software sold           1,000.00
5005 Cost of hardware sold          13,500.00
5010 Labor & Payroll                15,460.00
5200 Advertising                     2,785.00
5300 Depreciation                      280.00
5620 Office expenses                   402.00
5625 Dues and subscriptions             55.00
5810 Interest other                    600.00
                                 ------------   ------------   ------------
     Total Uses                                                  130,107.12
                                                               ============


















                                    PAGE 73
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:38am                     WORK Demo Accounts Test
                           SOURCES AND USES OF FUNDS
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME               APR-89        MAY-89        JUN-89
---- -------------------------   ------------  ------------  ------------
Sources of Funds
----------------
1010 Checking Account #1                           1,099.88
1300 Software Inventory                              600.00        400.00
1400 Hardware Inventory                            4,500.00      9,000.00
1595 Accumulated Depn Computer         140.00        140.00
2100 Sales tax payable                               435.00        355.00
2400 Bank loan                      15,000.00
2500 Building Loan                  45,000.00
3000 Owners capital/equity          45,000.00
4000 Software sales in-state                       1,200.00        800.00
4010 Computer sales in-state                       7,500.00     15,000.00
                                 ------------  ------------  ------------
     Total Sources                 105,140.00     15,474.88     25,555.00
                                 ============  ============  ============

Uses of Funds
-------------
1000 Petty Cash                        500.00
1010 Checking Account #1             4,010.00                   12,115.00
1300 Software Inventory              5,000.00
1400 Hardware Inventory             20,000.00
1500 IBM Personal Computer           3,500.00
1510 Computer Monitor                  200.00
1520 Computer Printer                  450.00
1530 Other Computer Equipment          150.00
1550 Computer Software                 700.00
1600 Office Building                50,000.00
1700 Office Furniture               15,000.00
2400 Bank loan                                       450.00
2500 Building Loan                                    12.88
5000 Cost of software sold                           600.00        400.00
5005 Cost of hardware sold                         4,500.00      9,000.00
5010 Labor & Payroll                 3,210.00      8,650.00      3,600.00
5200 Advertising                     2,000.00        345.00        440.00
5300 Depreciation                      140.00        140.00
5620 Office expenses                   280.00        122.00
5625 Dues and subscriptions                           55.00
5810 Interest other                                  600.00
                                 ------------  ------------  ------------
     Total Uses                    105,140.00     15,474.88     25,555.00
                                 ============  ============  ============













                                    PAGE 74
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:39am                     WORK Demo Accounts Test
                                BUDGET VARIANCE
                             APR-89 Through JUN-89

ACT#      ACCOUNT NAME             ACTUAL      %       BUDGET       VARIANCE
---- -------------------------  ------------  ---   ------------   -----------
Income
------
4000 Software sales in-state        2,000.00   8%       2,200.00       -200.00
4010 Computer sales in-state       22,500.00  92%      20,000.00      2,500.00
4020 Service sales in-state             0.00   0%           0.00          0.00
4030 Other sales in-state               0.00   0%           0.00          0.00
                                ------------  ---   ------------   -----------
4089 TOTAL SALES IN-STATE          24,500.00 100%      22,200.00      2,300.00

4100 Sales out of state                 0.00   0%           0.00          0.00
                                ------------  ---   ------------   -----------
     Total Income                  24,500.00 100%      22,200.00      2,300.00

Expense
-------
5000 Cost of software sold          1,000.00   4%       1,100.00        100.00
5005 Cost of hardware sold         13,500.00  55%      14,000.00        500.00
5010 Labor & Payroll               15,460.00  63%           0.00    -15,460.00
5020 Material and Supplies              0.00   0%           0.00          0.00
5030 Other costs                        0.00   0%           0.00          0.00
                                ------------  ---   ------------   -----------
5089 TOTAL COST OF GOODS SOLD      29,960.00 122%      15,100.00    -14,860.00

5200 Advertising                    2,785.00  11%       5,500.00      2,715.00
5210 Bad debts from sales               0.00   0%           0.00          0.00
5220 Bank service charges               0.00   0%           0.00          0.00
5230 Car and Truck Expenses             0.00   0%           0.00          0.00
5240 Sales Commissions                  0.00   0%           0.00          0.00
5250 Depletion expense                  0.00   0%           0.00          0.00
5300 Depreciation                     280.00   1%         450.00        170.00
5400 Employee Benefits                  0.00   0%           0.00          0.00
5410 Employee pension plan              0.00   0%           0.00          0.00
5500 Freight & transportation           0.00   0%           0.00          0.00
5510 Insurance                          0.00   0%           0.00          0.00
5600 Laundry and cleaning               0.00   0%           0.00          0.00
5610 Legal & professional serv          0.00   0%           0.00          0.00
5620 Office expenses                  402.00   2%         375.00        -27.00
5625 Dues and subscriptions            55.00   0%           0.00        -55.00
5630 Rent on business property          0.00   0%           0.00          0.00
5640 Repairs                            0.00   0%           0.00          0.00
5650 Other supplies                     0.00   0%           0.00          0.00
5660 TAXES - PROPERTY                   0.00   0%           0.00          0.00
5665 TAXES - Income                     0.00   0%           0.00          0.00
5670 Sales tax expense                  0.00   0%           0.00          0.00
5680 Travel and entertainment           0.00   0%           0.00          0.00
5700 Utilities & telephone              0.00   0%           0.00          0.00
5800 Interest on mortgage               0.00   0%         242.50        242.50
5810 Interest other                   600.00   2%         599.82         -0.18
                                ------------  ---   ------------   -----------
     Total Expense                 34,082.00 139%      22,267.32    -11,814.68
                                ------------  ---   ------------   -----------
     NET INCOME                    -9,582.00 -39%         -67.32     -9,514.68
                                ============  ===   ============   ===========


                                    PAGE 75
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:39am                     WORK Demo Accounts Test
                                BUDGET VARIANCE
                                     MAY-89

ACT#      ACCOUNT NAME             ACTUAL      %       BUDGET       VARIANCE
---- -------------------------  ------------  ---   ------------   -----------
Income
------
4000 Software sales in-state        1,200.00  14%       1,000.00        200.00
4010 Computer sales in-state        7,500.00  86%      10,000.00     -2,500.00
4020 Service sales in-state             0.00   0%           0.00          0.00
4030 Other sales in-state               0.00   0%           0.00          0.00
                                ------------  ---   ------------   -----------
4089 TOTAL SALES IN-STATE           8,700.00 100%      11,000.00     -2,300.00

4100 Sales out of state                 0.00   0%           0.00          0.00
                                ------------  ---   ------------   -----------
     Total Income                   8,700.00 100%      11,000.00     -2,300.00

Expense
-------
5000 Cost of software sold            600.00   7%         500.00       -100.00
5005 Cost of hardware sold          4,500.00  52%       7,000.00      2,500.00
5010 Labor & Payroll                8,650.00  99%           0.00     -8,650.00
5020 Material and Supplies              0.00   0%           0.00          0.00
5030 Other costs                        0.00   0%           0.00          0.00
                                ------------  ---   ------------   -----------
5089 TOTAL COST OF GOODS SOLD      13,750.00 158%       7,500.00     -6,250.00

5200 Advertising                      345.00   4%       2,000.00      1,655.00
5210 Bad debts from sales               0.00   0%           0.00          0.00
5220 Bank service charges               0.00   0%           0.00          0.00
5230 Car and Truck Expenses             0.00   0%           0.00          0.00
5240 Sales Commissions                  0.00   0%           0.00          0.00
5250 Depletion expense                  0.00   0%           0.00          0.00
5300 Depreciation                     140.00   2%         150.00         10.00
5400 Employee Benefits                  0.00   0%           0.00          0.00
5410 Employee pension plan              0.00   0%           0.00          0.00
5500 Freight & transportation           0.00   0%           0.00          0.00
5510 Insurance                          0.00   0%           0.00          0.00
5600 Laundry and cleaning               0.00   0%           0.00          0.00
5610 Legal & professional serv          0.00   0%           0.00          0.00
5620 Office expenses                  122.00   1%         100.00        -22.00
5625 Dues and subscriptions            55.00   1%           0.00        -55.00
5630 Rent on business property          0.00   0%           0.00          0.00
5640 Repairs                            0.00   0%           0.00          0.00
5650 Other supplies                     0.00   0%           0.00          0.00
5660 TAXES - PROPERTY                   0.00   0%           0.00          0.00
5665 TAXES - Income                     0.00   0%           0.00          0.00
5670 Sales tax expense                  0.00   0%           0.00          0.00
5680 Travel and entertainment           0.00   0%           0.00          0.00
5700 Utilities & telephone              0.00   0%           0.00          0.00
5800 Interest on mortgage               0.00   0%         121.25        121.25
5810 Interest other                   600.00   7%         299.91       -300.09
                                ------------  ---   ------------   -----------
     Total Expense                 15,012.00 173%      10,171.16     -4,840.84
                                ------------  ---   ------------   -----------
     NET INCOME                    -6,312.00 -73%         828.84     -7,140.84
                                ============  ===   ============   ===========


                                    PAGE 76
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:39am                     WORK Demo Accounts Test
                               CHART OF ACCOUNTS

            ACT#        ACCOUNT NAME              TYPE   BEGIN BAL
            ---- ------------------------------   ----  -----------
            1000 Petty Cash                         A          0.00
            1010 Checking Account #1                A          0.00
            1020 Checking Account #2                A          0.00
            1200 Accounts Receivable                A          0.00
            1300 Software Inventory                 A          0.00
            1400 Hardware Inventory                 A          0.00
            1499 CURRENT ASSETS                     A
            1500 IBM Personal Computer              A          0.00
            1510 Computer Monitor                   A          0.00
            1520 Computer Printer                   A          0.00
            1530 Other Computer Equipment           A          0.00
            1550 Computer Software                  A          0.00
            1589 Gross Computer Assets              A
            1595 Accumulated Depn Computer          A          0.00
            1599 Net Computer Assets                A
            1600 Office Building                    A          0.00
            1700 Office Furniture                   A          0.00
            2000 Accounts Payable                   L          0.00
            2100 Sales tax payable                  L          0.00
            2399 Current Liabilities                L
            2400 Bank loan                          L          0.00
            2500 Building Loan                      L          0.00
            2999 Long Term Debt                     L
            3000 Owners capital/equity              C          0.00
            3500 Retained earnings                  R          0.00
            4000 Software sales in-state            I
            4010 Computer sales in-state            I
            4020 Service sales in-state             I
            4030 Other sales in-state               I
            4089 TOTAL SALES IN-STATE               I
            4100 Sales out of state                 I
            5000 Cost of software sold              E
            5005 Cost of hardware sold              E
            5010 Labor & Payroll                    E
            5020 Material and Supplies              E
            5030 Other costs                        E
            5089 TOTAL COST OF GOODS SOLD           E
            5200 Advertising                        E
            5210 Bad debts from sales               E
            5220 Bank service charges               E
            5230 Car and Truck Expenses             E
            5240 Sales Commissions                  E
            5250 Depletion expense                  E
            5300 Depreciation                       E
            5400 Employee Benefits                  E
            5410 Employee pension plan              E
            5500 Freight & transportation           E
            5510 Insurance                          E
            5600 Laundry and cleaning               E
            5610 Legal & professional serv          E
            5620 Office expenses                    E
            5625 Dues and subscriptions             E
            5630 Rent on business property          E



                                    PAGE 77
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 2
10:39am                     WORK Demo Accounts Test
                               CHART OF ACCOUNTS

            ACT#        ACCOUNT NAME              TYPE   BEGIN BAL
            ---- ------------------------------   ----  -----------
            5640 Repairs                            E
            5650 Other supplies                     E
            5660 TAXES - PROPERTY                   E
            5665 TAXES - Income                     E
            5670 Sales tax expense                  E
            5680 Travel and entertainment           E
            5700 Utilities & telephone              E
            5800 Interest on mortgage               E
            5810 Interest other                     E















































                                    PAGE 78
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:39am                     WORK Demo Accounts Test
                                 BUDGET LISTING
                                     JUN-89

            ACT#        ACCOUNT NAME              TYPE   BUDGET AMT
            ---- ----------------------------     ----  -----------
            4000 Software sales in-state            I      1,200.00
            4010 Computer sales in-state            I     10,000.00
            4020 Service sales in-state             I          0.00
            4030 Other sales in-state               I          0.00
            4089 TOTAL SALES IN-STATE               I
            4100 Sales out of state                 I          0.00
            5000 Cost of software sold              E        600.00
            5005 Cost of hardware sold              E      7,000.00
            5010 Labor & Payroll                    E          0.00
            5020 Material and Supplies              E          0.00
            5030 Other costs                        E          0.00
            5089 TOTAL COST OF GOODS SOLD           E
            5200 Advertising                        E      1,500.00
            5210 Bad debts from sales               E          0.00
            5220 Bank service charges               E          0.00
            5230 Car and Truck Expenses             E          0.00
            5240 Sales Commissions                  E          0.00
            5250 Depletion expense                  E          0.00
            5300 Depreciation                       E        150.00
            5400 Employee Benefits                  E          0.00
            5410 Employee pension plan              E          0.00
            5500 Freight & transportation           E          0.00
            5510 Insurance                          E          0.00
            5600 Laundry and cleaning               E          0.00
            5610 Legal & professional serv          E          0.00
            5620 Office expenses                    E         75.00
            5625 Dues and subscriptions             E          0.00
            5630 Rent on business property          E          0.00
            5640 Repairs                            E          0.00
            5650 Other supplies                     E          0.00
            5660 TAXES - PROPERTY                   E          0.00
            5665 TAXES - Income                     E          0.00
            5670 Sales tax expense                  E          0.00
            5680 Travel and entertainment           E          0.00
            5700 Utilities & telephone              E          0.00
            5800 Interest on mortgage               E        121.25
            5810 Interest other                     E        299.91


















                                    PAGE 79
                   FINANCE MANAGER II - GENERAL LEDGER lite


JUN-30-89                    YOUR COMPUTER COMPANY                     PAGE 1
10:39am                     WORK Demo Accounts Test
                                 TRIAL BALANCE
                                     JUN-89

         ACT#       ACCOUNT NAME              DEBITS       CREDITS
         ---- -------------------------    -----------   -----------
         1000 Petty Cash                        500.00
         1010 Checking Account #1            15,025.12
         1300 Software Inventory              4,000.00
         1400 Hardware Inventory              6,500.00
         1500 IBM Personal Computer           3,500.00
         1510 Computer Monitor                  200.00
         1520 Computer Printer                  450.00
         1530 Other Computer Equipment          150.00
         1550 Computer Software                 700.00
         1595 Accumulated Depn Computer                       280.00
         1600 Office Building                50,000.00
         1700 Office Furniture               15,000.00
         2100 Sales tax payable                               790.00
         2400 Bank loan                                    14,550.00
         2500 Building Loan                                44,987.12
         3000 Owners capital/equity                        45,000.00
         3500 Retained earnings              11,942.00
         4000 Software sales in-state                         800.00
         4010 Computer sales in-state                      15,000.00
         5000 Cost of software sold             400.00
         5005 Cost of hardware sold           9,000.00
         5010 Labor & Payroll                 3,600.00
         5200 Advertising                       440.00
                                           -----------   -----------
                                            121,407.12    121,407.12






























                                    PAGE 80
                   FINANCE MANAGER II - GENERAL LEDGER lite


                    FINANCE MANAGER II USER COMMENT FORM 

                         _                       _
    Product being used: |_|General Ledger       |_|Account Reconciliation
                         _                       _
                        |_|Accounts Receivable  |_|Accounts Payable
                         _                       _
                        |_|Financial Utilities  |_|Payroll

                     _            _            _
    Use of product: |_|Business  |_|Personal  |_|Other____________________

    What type of computer are you using:__________________________________

    Do you have a unique use for this product?_____  If so please explain.

    ______________________________________________________________________

    Please circle your rating:   Poor  Fair  Average  Very Good  Excellent
                                 ----  ----  -------  ---------  ---------
         Performance.              x     x      x         x          x

         Documentation.            x     x      x         x          x

         Ease of learning.         x     x      x         x          x

         Ease of use.              x     x      x         x          x

         Manual Reliability.       x     x      x         x          x

         Error Handling.           x     x      x         x          x

         Support.                  x     x      x         x          x

         Value.                    x     x      x         x          x

    Did you find any problems in using this product?  Please describe.

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    Do  you  have  any  suggestions  for  improving  this  program  and/or
    documentation.  Use the reverse side of this form if necessary:

    ______________________________________________________________________

    ______________________________________________________________________

    ______________________________________________________________________

    Please add any other comments about product on reverse side of form.

    RETURN THE COMPLETED FORM AND           HOOPER INTERNATIONAL
    ANY ADDITIONAL CORRESPONDENCE TO:       P.O. Box 62219
                                            Colorado Springs, CO  80962




                                    PAGE 81


     -----------------------------------------------------------------------
     |       F I N A N C E   M A N A G E R  II     O R D E R   F O R M     |
     |                                                                     |
     | MAIL:Hooper International           24 Hr ORDER LINE:1-800-245-7789 |
     |  TO  P.O. Box 62219                   24 Hr FAX line:(719) 528-8997 |
     |      Colorado Springs, CO 80962                                     |
     |      U.S.A.                             Tech Support:(719) 528-8989 |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:______________________________ Signature:_____________________ |
     |                                                                     |
     | Company Name:_______________________________ PC Brand:_____________ |
     |                                                                     |
     | Address:____________________________________ DISK SIZE:3"___  5"___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:______________________________    Phone:(____)_____________ |
     |                                                                     |
     | Registration number on disk you were evaluating:___________________ |
     |                                                                     |
     | How did you hear about FINANCE MANAGER?____________________________ |
     |---------------------------------------------------------------------|
     | ITEMS ORDERED - Version 1.3                |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     | FINANCE MANAGER II - REGISTERED COPIES:    |   |          |         |
     |                                            |   |          |         |
     |           GENERAL LEDGER (Main module)     | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |           Accounts Receivable              | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Accounts Payable                 | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Payroll                          | _ |  $41.95  | $       |
     |                                            |   |          |         |
     |           Account Reconciliation           | _ |  $14.95  | $       |
     |                                            |   |          |         |
     |           Financial Utilities              | _ |  $25.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     | EVALUATION COPY of General Ledger Lite     | _ |  $ 3.00  | $       |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | LESS QUANTITY DISCOUNT SCHEDULE PER ORDER                 |         |
     |    3 or 4 modules = 10% discount,  5+ modules 15% discount|$<      >|
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge                             | $ 3.00  |
     |-----------------------------------------------------------|---------|
     | ADD  AIR MAIL POSTAGE for orders                  $3.00   |         |
     |      shipped out of North America              per module | $       |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change.                                 |         |
     | All amounts in US currency.            GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------

                                    PAGE 82
```
{% endraw %}

## ORDER.DOC

{% raw %}
```



     -----------------------------------------------------------------------
     |       F I N A N C E   M A N A G E R  II     O R D E R   F O R M     |
     |                                                                     |
     | MAIL:Hooper International           24 Hr ORDER LINE:1-800-245-7789 |
     |  TO  P.O. Box 62219                   24 Hr FAX line:(719) 528-8997 |
     |      Colorado Springs, CO 80962                                     |
     |      U.S.A.                             Tech Support:(719) 528-8989 |
     |---------------------------------------------------------------------|
     | Mastercard:___   Visa:___   Amex:___   Check:___ (U.S. FUNDS ONLY)  |
     |                                                                     |
     | Card Number:________________________________  Expiration:__________ |
     |                                                                     |
     | Name:______________________________ Signature:_____________________ |
     |                                                                     |
     | Company Name:_______________________________ PC Brand:_____________ |
     |                                                                     |
     | Address:____________________________________ DISK SIZE:3"___  5"___ |
     |                                                                     |
     | City:____________________________  State:____  Zipcode:____________ |
     |                                                                     |
     | Country:______________________________    Phone:(____)_____________ |
     |                                                                     |
     | Registration number on disk you were evaluating:___________________ |
     |                                                                     |
     | How did you hear about FINANCE MANAGER? PC-SIG_____________________ |
     |---------------------------------------------------------------------|
     | ITEMS ORDERED - Version 1.3                |QTY|UNIT PRICE| AMOUNT  |
     |--------------------------------------------|---|----------|---------|
     | FINANCE MANAGER II - REGISTERED COPIES:    |   |          |         |
     |                                            |   |          |         |
     |           GENERAL LEDGER (Main module)     | _ |  $49.95  | $       |
     |                                            |   |          |         |
     |           Accounts Receivable              | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Accounts Payable                 | _ |  $36.95  | $       |
     |                                            |   |          |         |
     |           Payroll                          | _ |  $41.95  | $       |
     |                                            |   |          |         |
     |           Account Reconciliation           | _ |  $14.95  | $       |
     |                                            |   |          |         |
     |           Financial Utilities              | _ |  $25.95  | $       |
     |                                            |   |          |         |
     |                                            |   |          |         |
     | EVALUATION COPY of General Ledger Lite     | _ |  $ 3.00  | $       |
     |-----------------------------------------------------------|---------|
     |                                                  SUBTOTAL | $       |
     |-----------------------------------------------------------|---------|
     | LESS QUANTITY DISCOUNT SCHEDULE PER ORDER                 |         |
     |    3 or 4 modules = 10% discount,  5+ modules 15% discount|$<      >|
     |-----------------------------------------------------------|---------|
     | ADD  Shipping/Handling charge                             | $ 3.00  |
     |-----------------------------------------------------------|---------|
     | ADD  AIR MAIL POSTAGE for orders                  $3.00   |         |
     |      shipped out of North America              per module | $       |
     |-----------------------------------------------------------|---------|
     |                                                     TOTAL | $       |
     |-----------------------------------------------------------|---------|
     |                     Colorado residents add 6.5% sales tax | $       |
     |-----------------------------------------------------------|---------|
     | Prices subject to change.                                 |         |
     | All amounts in US currency.            GRAND TOTAL (US $) | $       |
     -----------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0151

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        22   1-01-89
    EPSON    CNF       182   1-01-89
    FMGL     000      8448   1-01-89
    FMGL     001     49408   1-01-89
    FMGL     002     63744   1-01-89
    FMGL     003     25344   1-01-89
    FMGL     COM     36421   1-01-89
    FMGL-DOC ARC     79530   1-01-89
    HOME     CHR      3060   1-01-89
    HOME     GLT      4816   1-01-89
    HP-LASER CNF       182   1-01-89
    HP2LASER CNF       182   1-01-89
    INSTALL  COM     28413   1-01-89
    JUKI     CNF       182   1-01-89
    ORDER    DOC      4844   1-01-89
    PKUNPAK  EXE     15112   8-02-88
    PRINT-GL BAT       469   1-01-89
    PROWRITE CNF       182   1-01-89
    README   BAT      1347   1-01-89
    RUN      BAT        21   1-01-89
    WORK     CHR      3105   1-01-89
    WORK     GLT      4558   1-01-89
    GO       BAT      1347   1-01-89
    FILES151 TXT      2035   7-17-89   3:12p
           24 file(s)     332954 bytes
                           15360 bytes free
