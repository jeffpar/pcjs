---
layout: page
title: "PC-SIG Diskette Library (Disk #468)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0468/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0468"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CPA LEDGER 2 OF 2 (ALSO 466)"

    A menu-driven general ledger and financial statement program designed
    for non-manufacturing businesses that offer products or services for
    sale.
    
    Start your books and maintain them: post transactions; prepare
    unadjusted and post-closing trial balances, and income statements; print
    a list of all postings for any period; search for previously-entered
    transactions; and reconstruct specific GL accounts and add new ones.
    CPA-LEDGER has plenty of muscle to record your daily transactions. Any
    single general ledger entry can have up to 30 debits and 30 credits,
    with total values of up to $999,999,999.99. A very powerful system.
    Some knowledge of double-entry bookkeeping is necessary to operate this
    package.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHP1.TXT

{% raw %}
```
  

                                                                          1
          
                                 INTRODUCTION 
          
     CPA-LEDGER  is  an  automated general ledger system written for IBM PC 
     and IBM PC compatible microcomputers.  The system was  written  on  an 
     IBM  Personal  Computer  using  IBM's Advanced BASIC (BASICA,  Version 
     1.10) and PC-DOS, Version 2.10. 
     
     See Appendix B,  page 99-3,  for information on the various CPA-LEDGER 
     versions.  In  this manual,  we will refer to three diskettes by name. 
     They are "PC-DOS disk" (containing PC-DOS), "Program Disk" (containing 
     CPA-LEDGER),  and "Documentation Disk" (containing the  User's  Manual 
     AND  a  practice general ledger that is already set up so that you can 
     practice using the system.) Remember those names. 

     PC-DOS DISK.
     
     PC-DOS came with your microcomputer.  It  contains  the  IBM  Personal 
     Computer  Disk  Operating System and the BASICA computer language.  As 
     will  be  explained  later,  you  will  need  PC-DOS  AND  BASICA  for 
     CPA-LEDGER. 
          
     "PROGRAM DISK" & "DOCUMENTAION DISK".
          
     The "Program Disk" & the "Documentation Disk" are on three (two if you 
     have the public  domain  version  of  CPA-LEDGER)  different  physical 
     diskettes. 
     
          .  The  "Program Disk" contains the CPA-LEDGER computer programs. 
             You can identify  computer  programs  by  the  name  extension 
             ".BAS"  (without  the quotes). 
     
    ---------> .   (If  you  have  the public domain version of the system, 
                   the practice general ledger is also on the Program Disk. 
                   The practice general ledger has files with an  extension 
                   of ".FIL".) 
               
          .  The "Documentation Disk" (on two physical diskettes)  contains 
             (1)  the  User's Manual AND (2) a practice general ledger with 
             balances that have already  been  set  up  for  you.  You  can 
             identify  general  ledger  files  by the name extension ".FIL" 
             (without  the  quotes).   The  User's  Manual  (also  on   the 
             Documentation Disk) has file extensions of .TXT. 
     
          .  Appendix   B  contains  complete  instructions   for   loading 
             CPA-LEDGER  onto your microcomputer.  Appendix B also contains 
             information about the various versions of CPA-LEDGER  and  how 
             to order.  See page 99-3.
     
       
                                                                    
                                                                          2
     

     PC-DOS, BASICA, DRIVE A:, DRIVE B:, & DRIVE C: AND THE COPY COMMAND.

     We assume that you understand how to use PC-DOS,  how to get to BASICA 
     and the meaning of the term "Drive C:", "Drive A:", and "Drive B:". We 
     also  assume  that  you know how to use the COPY command to copy files 
     from one disk to another.  If you  do  not,  read  your  IBM  Personal 
     Computer Disk Operating System manual. 
     
    
     USING CPA-LEDGER.
  
     To  use  CPA-LEDGER,  you  will  need  five  things.  They  are  (1) a 
     microcomputer (2) a printer,  (3) IBM PC-DOS,  which  includes  PC-DOS 
     (Version 2.10 or higher) and BASICA (Version 1.10 or higher),  and (4) 
     a knowledge of double-entry bookkeeping.  The fifth item you will need 
     depends on your version of CPA-LEDGER.  If you have the "For Hard Disk 
     Only" version,  you will need hard disk.  For the "For Hard  &  Floppy 
     Disk" version, you will need hard disk and one floppy disk drive.  For 
     the "For Two Floppy Disks Only", version you will need two floppy disk 
     drives.  We will discuss each of these areas.  First, let's talk about 
     equipment needs. 
               
         
     EQUIPMENT NEEDS.
         
     The minimum equipment configuration is: 
     
          .  An IBM PC or PC compatible microcomputer with hard/floppy disk 
             drives as mentioned above. 

          .  An  80  or  120  column  printer,  for  printing  output  from 
             CPA-LEDGER. 

           
          
                                                                          3
     
     PC-DOS AND BASICA.

     Make sure that you have IBM's PC-DOS  (IBM's  Personal  Computer  Disk 
     Operating  System,  Version  2.10 or higher) and IBM's BASICA (Version 
     1.10 or higher) before you use  computer  programs  on  your  "Program 
     Disk".  Look  in the prefaces to your Disk Operating System and BASICA 
     reference manuals.  Version information is shown there. 
     
     YOUR KNOWLEDGE OF DOUBLE-ENTRY BOOKKEEPING. 
     
     You should have a knowledge of double-entry bookkeeping before you use 
     CPA-LEDGER.  First, let's define, specifically,  what you need to know 
     regarding how CPA-LEDGER functions.  You should understand how to: 
     
          .  Set up a new bookkeeping system and prepare the  beginning  or 
             "opening" entries for starting your general ledger.  (Once you 
             prepare the opening entries, CPA-LEDGER asks you to enter them 
             in the system.) Knowing how to set up a new bookkeeping system 
             includes a requirement that you know which accounts should  be 
             included  in  the  various  income statement and balance sheet 
             "account classifications", such as Current Assets, Operational 
             Assets,  and Current Liabilities.  Appendix D contains a  list 
             of  "account classifications" used by CPA-LEDGER.  Please read 
             Appendix B  and  make  sure  that  you  completely  understand 
             "account classifications" and accounts that should be included 
             in each classification BEFORE you use CPA-LEDGER.  

          .  Review each financial transaction that occurs in your business 
             and determine the proper accounting entry. (Once you decide on 
             the accounting entry,  CPA-LEDGER asks you to post it  to  the 
             general ledger.) 
     
          .  Prepare a standard bank reconciliation.  (CPA-LEDGER will  not 
             automatically  reconcile  your  bank  account(s),  but it will 
             separately list all of your bank transactions so that you  may 
             make the reconciliation.) 
                                             
          .  Prepare  the proper adjusting journal entries each time before 
             you prepare financial statements.  (You decide which  accounts 
             need  to  be  adjusted  and  enter  the  adjustments  into the 
             system.) 
          
     As you can see,  in addition to knowing how CPA-LEDGER functions,  you 
     will  also  need  a  thorough  knowledge  of double-entry bookkeeping.  
     Appendix D contains some comments  about  accounting  and  bookkeeping 
     systems.  Read  the  Appendix.  It contains some observations that may 
     be helpful to you.  However,  DO NOT rely on Appendix D to convey  the 
     bookkeeping  knowledge that you will need to use CPA-LEDGER!  Appendix 
     D is, BY NO MEANS, intended to be a course in bookkeeping.  If you are 
     not already an experienced bookkeeper, DO NOT USE CPA-LEDGER.  Even if 
     you ARE an experienced bookkeeper,  CPA-LEDGER may  not  be  for  you.  
     Read  this  User's  Manual  from  cover  to cover.  Practice using the 
     
     
     
                                                                          4
     

     system.  If  everything  looks OK and you believe that CPA-LEDGER will 
     fill your needs,  start your general ledger and try CPA-LEDGER  for  a 
     reasonable period (at LEAST three to four months).  Make sure that you 
     understand  not only how to use CPA-LEDGER but,  also,  that you fully 
     understand how to properly maintain a general ledger and  how  to  use 
     and interpret all of the printouts.  Then decide. 
     
     In  the  interim,  DO NOT discard you old bookkeeping system.  Rather, 
     keep your old general ledger up-to-date,  in the event you  decide  to 
     NOT  use  CPA-LEDGER.  In  other  words,  (1)  make VERY sure that you 
     thoroughly understand all  of  the  technical  facets  of  bookkeeping 
     BEFORE  you  start  using  CPA-LEDGER,  (2)  make  VERY  sure that you 
     understand how to interpret and use CPA-LEDGER's printouts,  (3)  make 
     VERY   sure  that  CPA-LEDGER  will  satisfy  YOUR  needs  BEFORE  you 
     permanently convert to it,  and  (4)  keep  your  old  general  ledger 
     up-to-date  until  you finally decide that CPA-LEDGER will satisfy all 
     of your needs, now and during the future. 
     
     Also,  before  you  decide  to use CPA-LEDGER,  please remember this - 
     CPA-LEDGER has no knowledge  of  bookkeeping!  It  simply  accumulates 
     data  that  YOU  enter  and reports the information back to you in the 
     form of financial statements.  For example,  it will not tell  you  if 
     you debit or credit an inappropriate account;  it will not tell you if 
     your debits and credits agree,  but they are in the incorrect amounts;  
     it will not tell you if you include a current asset account under  the 
     incorrect  "account  classification";  it  will  not  tell  you how to 
     interpret the values on your financial statements - it  merely  prints 
     some  "ratios"  that can be used as inconclusive guidelines - you must 
     apply YOUR judgement in making the final interpretation,  including  a 
     judgement  on  whether  or not to consider the ratio(s) in arriving at 
     the final interpretation.  We are not attempting to convience you  not 
     to  use CPA-LEDGER,  but,  rather to caution you on expecting too much 
     from the system.  If you have ANY questions on what CPA-LEDGER (1) can 
     and cannot do or (2) does and does not do, please contact Jim Foster. 
              
     AUTOMATIC FEATURES.
     
     CPA-LEDGER has many automatic features - all  you  do  is  select  and 
     execute  any  one  of  the  options  that  appear  in menu form on the 
     computer's screen.   
     
     Here are just a few of CPA-LEDGER's automatic capabilities.  It will: 
     
          .  List  your chart of general ledger accounts,  anytime that you 
             wish. 
               
          .  Add new general ledger accounts, anytime that you wish. 
     
          .  Monitor  your  input  into  the system and report,  in easy to 
             understand English, errors that you make. 
     

     
                                                                           5
     

          .  Find and print any entry that you previously entered into  the 
             general ledger. 

          .  Show you the status of any account, at any time. 
     
          .  Reconstruct any account, for any period that you wish. 
     
          .  Prepare  a check register,  on demand,  to provide information 
             for reconciling bank accounts or  for  researching  your  bank 
             transactions. 
    
          .  Summarize  each  general ledger account and report the results 
             to you.  

          .  Prepare a trial balance, on demand, so that you may review the 
             status of the accounts. 
     
          .  Prepare,  footnote,  and analyze  your  financial  statements, 
             anytime  that  you  wish. 

     HOW THIS MANUAL IS ORGANIZED. 
     
     This  manual  is  subdivided  into  progressive  chapters.  Chapter  1 
     introduces you to CPA-LEDGER and gives you an overview of the system.  
     
     Chapters 3 - 16 discuss each CPA-LEDGER option.  You  will  be  walked 
     through  the  entire  system  - from starting your electronic books to 
     preparing financial statements.  Chapter 18 discusses the  partnership 
     version of CPA-LEDGER and Chapter 19 discusses sole proprietorships. 
     
     Appendix  D  discusses  some  of the planning that you should complete 
     before you start your bookkeeping system.  Appendix E  suggests  forms 
     and  procedures  for  providing  complete  supporting documentation of 
     everything that you enter into CPA-LEDGER and for providing an orderly 
     and systematic method for recording  information  in  your  electronic 
     books. 
     
     Read  Appendix  D and Appendix E very carefully.  Even though they are 
     not a complete course in accounting procedure,  you should find enough 
     there to provide a starting point for planning your accounting system.  
     Do  not make the mistake of glossing over the planning process.  Plan,  
     precisely, the accounts that you will need,  when your entries will be 
     recorded,  who will record them, what supporting documentation will be 
     required,  and when financial statements will be prepared.  Decide  on 
     all  forms  that  you will need and train your employees in how to use 
     them.  These are only a few considerations.  Appendix D and Appendix E 
     go into some additional detail but ARE NOT intended to  cover  all  of 
     the  planning that you may need to do.  If you do not feel comfortable 
     in planning your accounting system,  consult with your  local  CPA  or 
     other qualified individual.  He or she can assist you. 
     
     
     
                                                                        5-1
     

     Appendix A contains some suggestions regarding planning your accounts, 
     depending on whether or not you wish to include a "Cost of Goods Sold" 
     section  in  your Income Statement.  Read the Appendix carefully.  For 
     example,  if you do  not  have  inventory  for  resale  (no  beginning 
     inventory,  and no purchases of resale items),  CPA-LEDGER will tailor 
     your Income Statement to your needs and will omit the  Cost  of  Goods 
     Sold  section  of the Income Statement.  But,  you must follow certain 
     rules.  You must follow other rules if a Cost of Goods Sold section is 
     to be included in the Income Statement.  These rules  are  covered  in 
     Appendix  A.  They are not difficult,  but you should keep them firmly 
     in mind. 
     
     
     
     
                                                                          6
     

                                    CHAPTER 1         
     
                               CPA-LEDGER OVERVIEW
                                                 
     

     MENUS - THE WAY YOU ACCESS CPA-LEDGER's DATA PROCESSING OPTIONS.
     
     CPA-LEDGER uses "menus" to list each of the data processing options at 
     your disposal.  
     
     CPA-LEDGER follows a menu numbering scheme.  1, 2, 3 ... one under the 
     other.  To the right of each number are a few words describing a  data 
     processing option that is assigned that particular number.  You select 
     an option by entering a number at your keyboard. 
         
     
     HOW TO BEGIN USING CPA-LEDGER.
     
     As already mentioned,  CPA-LEDGER is written in IBM's  Advanced  BASIC 
     programming  language.  So,  to use the system you will need access to 
     BASICA.  Follow the procedure outlined in Appendix B to gain access to 
     BASICA.
     
     CPA-LEDGER is activated by typing either of two commands, described in 
     the next two sub-sections,  to display the menu named "SETUP"  or  the 
     menu named "DAILY". 
     
     AN OVERVIEW OF THE "SETUP" MENU.         
   
     At  the  beginning  of  each  accounting  year,  use the SETUP menu to 
     establish a  new  general  ledger  for  recording  the  coming  year's 
     transactions. 
     
     To use SETUP, go to BASICA and type the following command,  as you see 
     it below, at your keyboard. 

       RUN  "SETUP"  (if  you  have either the "For Hard Disk Only" or "For 
                      Hard & Floppy Disk versions) 
       RUN "B:SETUP" (if you have the "For Two Floppy Disks Only" version.)

     In  a  few seconds,  the SETUP menu will be displayed on your computer 
     screen.  The menu will look like this: 
     
     
                                                                
                                                                         7
     

     ASSISTANCE?          THIS VERSION OF IS FOR _________.    ASSISTANCE?  
        WRITE                                                     CALL
     JIM FOSTER                      CPA-LEDGER                JIM FOSTER
     8529 GREELEY BLVD.            (Business Type)           (703) 569-2254
     SPRINGFIELD, VA  22152          SETUP MENU              AFTER 7:30 PM
                                                               OR ANYTIME
                                                                WEEKENDS
     SELECT ONE OF THE OPTION NUMBERS BELOW.
     
       1.  MAKE A NEW GENERAL LEDGER AND ASSIGN ACCOUNT TITLES.
       2.  IDENTIFY SELECTED ACCOUNT NUMBERS THAT ARE IN THE NEW GENERAL 
           LEDGER AND IDENTIFY YOUR BUSINESS NAME.
       3.  ASSIGN BEGINNING DOLLAR AMOUNTS TO NEW GENERAL LEDGER ACCOUNTS.
       4.  START THIS YEAR'S GENERAL LEDGER FROM LAST YEAR'S GENERAL LEDGER.
       5.  GO TO THE DAILY MENU.
       6.  STOP ALL CPA-LEDGER PROCESSING AND RETURN CONTROL TO PC-DOS.
     
     WHICH OPTION NUMBER DO YOU SELECT? _
          
     (C) COPYRIGHT 1986, 1988, 1989 TRONOLONE & FOSTER, PC
          
        Note:  At  the  top of the screen,  the "version" will be for "Hard 
               Disk Only",  "2 Floppy Disk  Drives"  or  "Hard  and  Floppy 
               Disk".   The   Business   Type   will   be   "Corporations", 
               "Partnerships",  or "Proprietorships".  For the remainder of 
               this  manual,  the  assistance  information,  version,   and 
               business type will not be shown, even thought they do appear 
               on the screen.  Also, see Chapters 18 and 19 for partnership 
               and sole proprietorship processing. 
               
     To start a COMPLETELY new general ledger,  You MUST use Options 1 &  2 
     in consecutive order.  (It is not REQUIRED that you use Option 3 - use 
     it  if you wish to start  your general ledger  with beginning values.)
     To start a general ledger from the one used last year,  use  Option  4 
     ONLY and DO NOT use Options 1, 2, or 3. (If you have the public domain 
     version, you do not have Option 4.) 

     If  you  use  Option  1,  CPA-LEDGER prints a complete list of general 
     ledger accounts,  with account numbers.  Refer to the account  numbers 
     are the input for Options 2 and 3.  It is not necessary to use Options 
     1, 2, and 3 during one continuous session. You may use Option 1 today, 
     Option 2 tomorrow,  and Option 3 the following day.  But remember, use 
     Option 1 first, Option 2 second, and (if you use it) Option 3 last. 
          
     SETUP OPTION 1.
          
     This option asks for the (1) number of, and (2) titles of new accounts 
     to be included in the general ledger.  Give  the  number  of  accounts 
     that  you  need,  but  do not include extras.  CPA-LEDGER will request 
     
     
     
                                                                          8

     account titles for the number  of  accounts  that  you  indicate.  For 
     example, if you indicate that you want five accounts under the Balance 
     Sheet  classification  Current  Assets,  CPA-LEDGER  will request five 
     account titles.  (Don't worry,  CPA-LEDGER  automatically  adds  extra 
     accounts for future expansion.) 
     
     Be  very  careful while entering account titles and other information. 
     Your input is displayed for your final review and approval  before  it 
     is added to the general ledger.  However,  once your input is added to 
     the general ledger,  you cannot use CPA-LEDGER for correcting mistakes 
     - such as a misspelled account title. (If we gave you that capability, 
     someone  else  could make changes that you might not want made.  Think 
     about it!) 
     
     After you have given all of your input,  Option 1  prints  a  complete 
     list  of  general  ledger  accounts that you entered.  Review the list 
     very carefully and note any input  errors.  As  mentioned  above,  you 
     cannot  use CPA-LEDGER to correct any mistakes.  But,  you can correct 
     them with the following procedure: 
     
          .  Completely erase your data files. (Do this by returning to the 
             SETUP menu and selecting Option 1  again.  Before  setting  up 
             your  new  general  ledger,  Option  1  erases any old general 
             ledger files.  Remember this at the beginning of each  year  - 
             if your use SETUP Option 1 without backing up your old general 
             ledger,  you  will not be able to recover your previous year's 
             general ledger files.) 
          
          .  Correctly answer all questions asked by Option 1. 
     
     The  correct  listing  from SETUP Option 1 is to be used while running 
     SETUP Option 2, described below. 
                             
                                    
     SETUP OPTION 2. 
     
     Several of the CPA-LEDGER computer programs need information that does 
     not change from month to month.  An example  is  your  business  name.  
     Every time a financial statement is prepared, CPA-LEDGER needs to know 
     your business name so it can be printed at the top of the page. 
     
     One way to handle this type of problem is to ask you to enter the name 
     every time CPA-LEDGER needs it.  But there is a better and easier way. 
     And, that is the purpose of Option 2. 
     
     Option 2 asks you to enter several account numbers and  your  business 
     name.  (If  you  have the partnership version of CPA-LEDGER,  you will 
     also be asked to identify how profits/losses are to  be  allocated  to 
     the  partners.  See  Chapter  18.)  CPA-LEDGER permanently stores your 
     input in its memory and automatically fetches it,  at  a  later  time, 
     when needed. 
     
      
     
                                                                          9
     

     Information needed for this option is shown in the printed output from 
     SETUP Option 1.  REMEMBER THIS - IF YOU MAKE A MISTAKE IN USING OPTION 
     2,  YOU MAY USE IT AGAIN AND AGAIN UNTIL YOUR INPUT IS WHAT IT  SHOULD 
     BE.  CPA-LEDGER will ask you about your intentions if you start to use 
     Option  2  for  the second,  third,  etc.,  time.  Then,  it processes 
     according to your instructions. 
     
                                                                          
     SETUP OPTION 3. 
     
     Option 3 assigns dollar values to  accounts  that  you  identified  in 
     Option  1.  Don't worry.  CPA-LEDGER makes sure that your debits equal 
     your credits.  It will not let you start your electronic books  unless 
     dollar  debits  equal  dollar  credits.  Information  needed  for this 
     option is in the printed output from SETUP Option 1. 
     

     SETUP OPTION 4.
     
     This Option is used in LIEU of Options 1,  2 and 3.  NEVER, NEVER  use 
     Options 1, 2, 3, AND 4.  Either use Options 1,  2,  and 3 OR Option 4.  
     Option  4  uses  last  year's  general  ledger balances to start a new 
     general ledger for the current year.  SO,  BEFORE IT CAN BE USED,  YOU 
     M-U-S-T  HAVE  A  GENERAL LEDGER ALREADY ESTABLISHED.  Option 4 merely 
     uses the account titles and values to (1) close your books and to  (2) 
     start the new general ledger for the coming year. 
     
         
     AN OVERVIEW OF THE "DAILY" MENU. 
        
     The DAILY menu is for your daily work.  Use it AFTER you have selected 
     and executed Options 1,  2, and 3 of the SETUP menu.  "DAILY" provides 
     functions such as adding daily transactions to your electronic  books, 
     listing the bank deposits and checks written, printing a trial balance 
     and the financial statements, and analyzing the financial statements. 

     To  start the DAILY menu type this at your keyboard - RUN "DAILY" (RUN 
     "B:DAILY" if you have the two floppy disk version).  In a few seconds, 
     the DAILY menu will appear on your computer screen: 
     
     
     
                                                                        10

                                   CPA-LEDGER 

                                   DAILY MENU 
     
     SELECT ONE OF THE OPTION NUMBERS BELOW. 
     
       1.  ENTER NEW TRANSACTIONS IN THE GENERAL LEDGER - NOT AUTOMATIC.
           SEE NBR. 10.
       2.  PRINT AN UNADJUSTED TRIAL BALANCE.
       3.  PRINT FINANCIAL STATEMENT(S)
       4.  PRINT TRANSACTIONS THAT HAVE BEEN POSTED TO THE GENERAL LEDGER.
       5.  PRINT GENERAL LEDGER ACCOUNTS WITH DETAILS OF ALL DEBITS AND ALL 
           CREDITS.
       6.  PRINT BANK DEPOSITS AND CHECKS WRITTEN (CHECK REGISTER).
       7.  PRINT GENERAL LEDGER ACCOUNTS AND THEIR BALANCES. 
       8.  ADD NEW ACCOUNTS TO THE GENERAL LEDGER.
       9.  PRINT A POST-CLOSING TRIAL BALANCE. 
      10   ENTER NEW TRANSACTIONS IN THE GENERAL LEDGER - AUTOMATIC.
      11.  STOP ALL CPA-LEDGER PROCESSING AND RETURN CONTROL TO PC-DOS. 
     
     WHICH OPTION NUMBER DO YOU SELECT?  _ 
          
     (C) COPYRIGHT 1986, 1988, 1989 TRONOLONE & FOSTER, PC
     

     You may select any of the above  options,  in  any  order  desired.  A 
     brief summary of each option follows. 
          
     DAILY OPTION 1. 
     
     Option  1  is  used to enter daily transactions in the general ledger.  
     It is also used to enter adjusting entries in the general ledger prior 
     to preparing financial statements.  CPA-LEDGER uses these transactions 
     and adjustments to prepare  all  printed  reports,  such  as  a  trial 
     balance, a balance sheet, and a check register. 
     
     Here is a point that you should remember.  As mentioned above,  Option 
     1 is used to enter adjusting entries in the  general  ledger.  DO  NOT 
     USE  OPTION 1 TO ENTER CLOSING ENTRIES!  CPA-LEDGER DOES THAT FOR YOU, 
     AUTOMATICALLY.   REMEMBER,   USE  CPA-LEDGER   FOR   RECORDING   DAILY 
     TRANSACTIONS  AND  ADJUSTING  ENTRIES  ONLY.  CPA-LEDGER AUTOMATICALLY 
     PREPARES THE CLOSING  ENTRIES.  Appendix  D  discusses  adjusting  and 
     closing entries. 
               
     Our  experience  has  proved the wisdom of entering transactions (some 
     call it "posting") in the accounting records as soon as possible after 
     they occur.  They are fresh, details are still clear, and it is easier 
     to decide which accounts are involved. 
     
     Develop a habit of using  Option  1  on  a  regular  basis,  daily  if 
     possible. 
     
               
                                                                         11

     DAILY OPTION 2. 
     
     Option  2  prints  a  general ledger unadjusted trial balance.  Do not 
     confuse 2 with Option 9.  An Option 2 trial balance is one that  shows 
     the  status  of  all accounts BEFORE adjusting and closing entries are 
     posted to the general ledger.  An Option 9 trial balance, on the other 
     hand,  is one that is prepared after posting all adjusting and closing 
     entries. 
     
     Use  Option  2 anytime you want to review your general ledger accounts 
     and to determine their current balances.  Likely,  you will want to do 
     this at the end of each month. 
          
     DAILY OPTION 3. 
     
     Use  Option  3  whenever  you  want an financial statement(s).  If you 
     order Balance Sheet capability from Tronolone  &  Foster,  you will 
     have two options for financial statements:
     
       1.  Print an Income Statement, a Balance Sheet & a ratio analysis of 
           the statements.  The Income Statement is printed first, followed 
           by footnotes to the Income Statement,  followed by  the  Balance 
           Sheet, followed by footnotes to the Balance Sheet, and, finally, 
           followed  by  a  ratio  analysis of the Income Statement and the 
           Balance Sheet.  Also,  statement(s) of partners'/owner's capital 
           are  printed  if  you  have  the  partnership  or proprietorship 
           versions of CPA-LEDGER. 
     
       2.  Print an Income Statement for any month or consecutive series of 
           months.  The  statement  is  followed by footnotes to the Income 
           Statement. 
     
     In  almost  all  cases,  adjusting entries are needed before preparing 
     financial statements.  Unless you have advanced bookkeeping knowledge, 
     you  may  wish  to  follow  this  procedure  in  preparing   financial 
     statements IF,  AND ONLY IF, ADJUSTING ENTRIES ARE TO BE POSTED TO THE 
     GENERAL LEDGER. 
     
          .  Return to PC-DOS and copy of your  data  files  onto  a  blank 
             diskette  or a different area (another directory\subdirectory) 
             of your hard  disk.  All  data  files  have  an  extension  of 
             ".FIL". 
     
          .  Return  to  BASICA  and  then  to  CPA-LEDGER,  as  previously 
             explained in Chapter 1, to post the adjusting entries.
     
          .  Then, (1) prepare your financial statement(s) and (2) copy the 
             unaltered  files  (the  ones you copied) back to the disk used 
             for your general ledger files. 
     
     By saving your data files and copying them back to the disk  used  for 
     your  general ledger files,  the general ledger data that you use from 
     
     
     
                                                                         12
     

     day-to-day will be unaltered by the adjusting entries.  If you DO  NOT 
     post adjusting entries, there is no need to follow this procedure.  If 
     you  have  advanced  bookkeeping knowledge,  there is a way to record, 
     say,  monthly adjustments,  but this procedure is beyond the scope  of 
     this User's Manual.  See your local CPA. 
     
     
     DAILY OPTION 4.

     Option   4  is  for  selecting  and  printing  transactions  that  you 
     previously  added  (posted)  to   the   accounts.   You   can   select 
     transactions based on dates,  account numbers,  dollar amounts,  check 
     numbers,  or document numbers.  Or,  you can print  all  transactions.  
     The choice is yours. 
     
     This  capability  comes  in  handy  if you want to review a previously 
     entered transaction.  An example might be to determine  which  entries 
     were made on a particular date.  Or, you might want to know if a check 
     has  been  posted to the records.  The list is endless.  Whatever your 
     reason,  CPA-LEDGER will scan the entire general ledger and search for 
     the transaction.  If found, it will be printed, exactly as you entered 
     it, with account titles. 
          
     DAILY OPTION 5. 
     
     Use  this  option  whenever  you  want  to review a particular general 
     ledger account.  The printout  shows  every  transaction  that  either 
     increased or decreased the account balance. 
               
     You can limit the printout to any period you wish - a month or a range 
     of months.  Or, if you wish, the printout will be for all transactions 
     regardless of when they were entered in the system. 
     
     DAILY OPTION 6. 
     
     Option  6  prints a complete list of all transactions that have either 
     increased or decreased your bank  account(s).  Each  bank  account  is 
     treated separately, with a separate printout.                             

     Like  Option 5,  you can limit the printout to any period you wish - a 
     month, a range of months, or the entire accounting period. 
     
     This option may be used for several purposes.  For  example,  you  may 
     use  it to assist in preparing your bank reconciliation.  Or,  perhaps 
     you will need to determine if a particular check or deposit  has  been 
     entered in the system.  
          
     DAILY OPTION 7. 
     
     Option  7  prints  a complete listing of general ledger accounts.  The 
     
     
     
                                                                         13
     

     listing includes ALL accounts - including those that are not currently 
     in use (inactive accounts). 
     
     If you want to add another account to  the  general  ledger,  get  the 
     account  number  from  an  Option  7  printout.  Then use that account 
     number in Option 8.  As you will see  from  the  printout,  CPA-LEDGER 
     automatically adds account numbers for your future use. 
     
               
     DAILY OPTION 8. 
     
     Use  this  option  whenever  you want to add an account to the general 
     ledger.  Get the account number from Option 7. 
     
     CPA-LEDGER will ask you for the new account  title  and  will  inquire 
     whether  the  account  normally  has  a debit or a credit balance.  Be 
     careful in entering this information.  Your  input  is  displayed  for 
     your review and approval.  However, once you approve your input, there 
     is  no  CPA-LEDGER  provision  for  subsequent  corrections.   So,  be 
     careful.  Make sure that your input is absolutely correct  before  you 
     tell CPA-LEDGER to use it in setting up a new account. 
     
     There is only one possible way to correct a mistake that is introduced 
     through using Option 8.  It is painful, but here it is: 
     
          .  Go  to  PC-DOS and erase your data disk.  These data files are 
             of no further value and will not be used again. 
     
          .  Get the latest backup of your data files.  The backup will  be 
             updated (below) and be used as the original data files. 
     
          .  Copy the backup data files onto your regular data disk. 
        
          .  Return  to BASICA (by typing BASICA at your keyboard) and then 
             use to CPA-LEDGER (by typing RUN "DAILY"  at  your  keyboard).  
             Use  Option  1  and  the  backup  data  files  to  reenter all 
             transactions that were on the erased data files but not on the 
             backup copy. 
                                                          
          .  Use  Option  8  again  - this time being careful not to make a 
             mistake. 
     
          .  Do not forget to backup your new data  files.  The  more  that 
             you  use microcomputers,  the more you will come to understand 
             the IMPORTANCE of FREQUENT (repeat, FREQUENT) BACKUPS. 
     
     We could have provided an option in CPA-LEDGER for correcting previous 
     input.  However,  that opens the door to  potential  problems  and  it 
     destroys  the  audit  trail built into the system.  We decided that it 
     would be much better to tell you to be careful while using  Option  8.  
     
     
     
                                                                         14
     

     Consult  with  your  local  CPA.  He  or she will inform you about the 
     importance of a clear and uninterrupted audit trail. 
                         
     DAILY OPTION 9. 
     
     Use  Option 9 at the end of the year,  AFTER Option 1 has been used to 
     enter the adjusting entries and AFTER all formal financial  statements 
     have been prepared.  The information shown in the Option 9 printout is 
     used  as a basis for starting a new general ledger for the coming year 
     IF you do not wish to use Option 4 of  the  SETUP  menu.  (Appendix  D 
     contains  more  details  about  accounts  to  be  included in your new 
     general ledger.) 

     DAILY OPTION 10.
     
     Use Option 10 to  automatically  post  transactions  to  your  general 
     ledger.  Automatic posting falls into two categories. 
     
       .  Those  transactions  that  you  save  and that do not change from 
          month to month. 
     
       .  The  final  debit  or credit of a long transaction.  For example, 
          assume that you frequently have a long list of debits,  with  one 
          credit  to  your  bank  account.   Enter  your  debits  and  tell 
          CPA-LEDGER to sum the amounts  already  entered  and  credit  the 
          bank.  The  credit  to  the  bank is automatic.  All you do is to 
          tell  CPA-LEDGER  to  "Quit".  Option 1 has a similar capability, 
          but you must  enter  the  bank  account  number.  In  Option  10, 
          everything  is  automatic.  This  gives you flexibility.  Want to 
          enter the bank account yourself,  with the rest being  automatic? 
          OK. Use Option 1.  Want CPA-LEDGER to do that for you?  OK again.  
          Use Option 10. 
     

     DAILY OPTION 11. 
     
     Option  11  returns  control to PC-DOS.  This is the ONLY way that you 
     should discontinue CPA-LEDGER's processing.  NEVER,  NEVER,  UNDER ANY 
     CIRCUMSTANCES,  STOP  CPA-LEDGER  BY  PRESSING  THE "Ctrl-Break" KEYS!  
     Always allow CPA-LEDGER to process completely and to return you to the 
     DAILY menu.
     
     
     BACKING UP YOUR DATA FILES.
     
     Each time you use Options 1,  8 or 10 BE SURE to make a duplicate copy 
     of your data files.  Frequent backups are very important.  Your PC-DOS 
     manual  contains  details  on how to make the backups.  The data files 
     have an extension of ".FIL" (without the quotes). 
        








































```
{% endraw %}

## CHP15.TXT

{% raw %}
```
          
 
                                                                      96-1

                                   CHAPTER 15
     
                             DAILY MENU - OPTION 10
     
     
     A NOTE ON PAGE NUMBERING.
     
     Information in this chapter replaces Chapter 15 in the old version  of 
     the User's Manual.  Because the previous Chapter 15 was on one page, a 
     revision  is  necessary  in  the page numbering scheme.  The procedure 
     followed is to use page numbers 96-1, 96-2,  96-3 ...  This eliminates 
     the  necessity for you to reprint Appendices D and E,  which are quite 
     long.  If these two appendices are in your old  documentation,  attach 
     them  to  this User's Manual,  without changing the page numbers.  The 
     page numbering  scheme  may  be  cumbersome,  but  it  will  save  you 
     extensive printing. 
     
     WHAT OPTION 10 IS USED FOR.

     Option  10  is used to save time.  It does the same thing as Option 1, 
     except faster. 
     
     Stated  simply,  Option  10  is  used  to  automatically  post  entire 
     transactions  or  parts  of  them.   That  statement  cries   for   an 
     explanation.   This   might   help,   zeroing   in   on  "post  entire 
     transactions" and "parts of them". 
     
       .  Post entire transactions.
     
           .  Option  10   allows  you  to  enter   (and   save)   standard 
              transactions that do not change from month to month - except, 
              perhaps  the  related  bank check numbers and payees shown on 
              the checks.  In a nutshell, here is how this feature works. 
               
                .  You  enter  (and  CPA-LEDGER saves) your standard trans- 
                   actions. 

                .  At a later time,  you  use  Option  10  again  and  tell 
                   CPA-LEDGER   to   post   the  general  ledger  with  the 
                   transactions that you saved previously.  If,  while  the 
                   transactions  are  being  posted,  CPA-LEDGER  detects a 
                   credit to a bank account,  the system asks you to  enter 
                   the check number and check payee. 

                .  To give you maximum flexibility,  CPA-LEDGER allows  you 
                   to reject or accept any transaction,  before it is saved 
                   and then again at execution time  -  immediately  before 
                   posting.  (Assume, for example, that a saved transaction 
                   is used for  several  months  before  it  is  no  longer 
                   needed.  Assume also that you forget to update the saved 
                   transaction  file.  As  Option 10 starts execution,  you 
     
     
     
                                                                       96-2
     

                   suddenly  remember - an unneeded  transaction  is  being 
                   processed.  No  problem.  You  can  reject  the unneeded 
                   transaction,  at execution time - thus  giving  YOU  the 
                   control, NOT the computer.) 
     
                .  That's all there is to it.  Simple, as it should be. And 
                   to make it even simpler, if you have ever used Option 1, 
                   you already know how to use Option 10.  (Well,  almost.) 
                   That's   because   Option  10  input  follows  the  same 
                   procedure (and screens) as Option 1.  The only thing new 
                   is a  few  more  "menus".  They  are  explained  in  the 
                   remainder of this chapter. 

       .  Post parts of them.

           .  Do  you  frequently  post  a long list of debits to expenses, 
              with one credit to your bank  account?  Remember  how  that`s 
              done?  You must sum the long list of debits, look up the bank 
              account  and  credit  it.  "Post  parts  of  them" means that 
              CPA-LEDGER sums your debits,  looks up your bank account  and 
              credits  it,  automatically.  But this feature is not limited 
              to expenses.  You can do the same thing for sales,  with  the 
              resulting  debit  to  the  bank  account.  Here  is  how this 
              feature works. 

                .  CPA-LEDGER asks  if  you  wish  to  post  (1)  operating 
                   expenses  or  (2)  sales.  After that,  if you have more 
                   than one bank account in your general ledger, the system 
                   displays each bank account (one at a time) and asks  you 
                   to  select  one  of  them.  If  you  have  only one bank 
                   account,  there is no need to ask you to identify  it  - 
                   CPA-LEDGER  already  knows  all  about  it,  its account 
                   number, its title and its balance. 

                .  Following  that,  CPA-LEDGER asks you to enter your part 
                   of the transaction (all except the bank  account).  When 
                   you  enter  a  "Q"  (for Quit - using the same format as 
                   Option 1),  CPA-LEDGER (1) sums your debits and credits, 
                   (2)  determines  if  the  balancing  entry  to  the bank 
                   account is a debit or credit,  (2) displays its part  of 
                   the entry and (3) continues processing in the exact same 
                   sequence  as  Option  1 (asking for the check payee - if 
                   required,  asking for the purpose  of  the  transaction, 
                   displays   the   entire   entry  for  your  approval  or 
                   disapproval,  etc.,  until you are asked if you want  to 
                   post  another  transaction to the general ledger.  Then, 
                   the process repeats - unless you tell  the  system  that 
                   there are no more transactions.  When there are no  more 
                   transactions,  you  are  asked what is to be done next - 
                   save transactions for future  posting  or  switch,  say, 
     
          
      
                                                                       96-3
     

                   from posting operating expenses to posting sales. 

                .  If you have used Option 1,  you  have  probably  noticed 
                   that  Option 1 does ALMOST the same thing if you enter a 
                   "?" when the system asks for "D" or "C" for  an  entry's 
                   debit  or  credit.  ALMOST,  but not quite.  Here is the 
                   difference.  Option 10 restricts your entries to  either 
                   operating  expenses  or  sales  (as selected by you) and 
                   does not require that you enter the account  number  for 
                   the  final  and balancing amount.  Option 1 does require 
                   that you enter the final account  number  but  does  not 
                   limit you to any specific categories of accounts.  Which 
                   feature  suits your fancy?  Option 1 or Option 10?  Take 
                   your pick. 
     

     OPTION 10 SEQUENCE OF EXECUTION.

     Option  10  starts by displaying this information and question on your 
     screen: 
     
     
     BEFORE YOU PROCEED, REMEMBER THAT THIS PROGRAM IS TO BE USED TO EITHER:
     
       1.  SAVE TRANSACTIONS FOR AUTOMATIC POSTING, UPON YOUR DEMAND, OR,
       2.  AUTOMATICALLY POST TRANSACTIONS IN 1, ABOVE.  OR,
       3.  AUTOMATICALLY POST A BANK ACCOUNT EACH TIME YOU POST ONE OR MORE 
           EXPENSE ACCOUNTS OR ONE OR MORE SALES/REVENUE ACCOUNTS.
      

     DO YOU WISH TO CONTINUE?
     
     
     
     ENTER `Y' FOR YES OR `N' FOR NO.   _
     
     
     
     Entering an `N' returns you to the  DAILY  menu.  Press  `Y'  and  the 
     following appears: 
     
     
     
                                                                       96-4
     
     
     BELOW,  YOU ARE ASKED TO ENTER THE TRANSACTION DATE (ONE DATE) FOR ALL 
     TRANSACTIONS THAT  YOU  POST  TO  YOUR  GENERAL  LEDGER.  IT  IS  VERY 
     IMPORTANT  THAT  YOU  ENTER  THE PROPER DATE BECAUSE THE DATE THAT YOU 
     ENTER IS USED TO UPDATE A  DATA  BASE  THAT  ACCUMULATES  TRANSACTIONS 
     ACCORDING  TO  THE DATE THAT THEY OCCURRED.  IF YOU ENTER AN INCORRECT 
     DATE,  AND YOU POST TRANSACTIONS,  YOUR DATA BASE WILL BE UPDATED  FOR 
     THE  IMPROPER  PERIOD  AND  YOUR  MONTHLY FINANCIAL STATEMENTS WILL BE 
     INCORRECT.  THE TRANSACTION DATE COULD BE THE POSTING  DATE,  OR  SOME 
     OTHER  DATE  IF  YOUR LOCAL CIRCUMSTANCES SO DICTATE.  IN ENTERING THE 
     DATE, USE FORMAT MMDDYY - 6/30/88 = 063088. 
     
     ENTER YOUR TRANSACTION DATE HERE.  ______
     

     Make sure that you use the proper transaction date,  as stated in  the 
     message.  After  entering  the  date,  processing  continues with this 
     menu: 
        
     
     SELECT ONE OF THE FOLLOWING OPTIONS:
     
       1.  SAVING TRANSACTIONS FOR AUTOMATIC POSTING, UPON YOUR DEMAND, OR,
       2.  AUTOMATICALLY POST TRANSACTIONS IN 1, ABOVE.  OR,
       3.  AUTOMATICALLY POST A BANK ACCOUNT EACH TIME YOU POST ONE OR MORE 
           EXPENSE ACCOUNTS OR ONE OR MORE SALES/REVENUE ACCOUNTS.
       4.  STOP ALL PROCESSING AND RETURN TO THE DAILY MENU.
     
     
     ENTER 1, 2, 3 OR 4.   _
     
     
     Processing  from  this point depends upon your input - 1,  2,  3 or 4. 
     Each is discussed,  in turn,  in the remainder of  this  chapter.  For 
     reference  purposes,  let's  refer  to  the above menu as the STARTING 
     MENU.  Please remember that name.  It will be used frequently  in  the 
     remainder of this chapter.  Now, for each option in the Starting Menu. 
     
     
     SAVE TRANSACTIONS FOR AUTOMATIC POSTING, LATER, UPON YOUR DEMAND.

     After entering "1", the following appears:
     
     
     

                                                                       96-5


     PLEASE CONFIRM.  YOU WISH TO SAVE TRANSACTIONS FOR AUTOMATIC  POSTING. 
     WARNING!  ANY  TRANSACTIONS PREVIOUSLY SAVED USING THIS OPTION WILL BE 
     COMPLETELY ERASED & YOU MUST REENTER THOSE YOU WISH TO KEEP  FROM  THE 
     BEGINNING. 
     
     
     CONFIRM BELOW WHETHER OR NOT YOU WISH TO CONTINUE WITH THIS OPTION.
     
     
     ENTER `Y' FOR YES OR `N' FOR NO.  _
     
     
     If  you  enter `N',  the Starting Menu reappears.  Entering `Y' causes 
     the previously saved transactions to be erased.  If they  contain  any 
     transactions  you wish to keep,  it will be necessary to reenter them. 
     Of course,  if you wish to discard all saved transaction,  you  should 
     NOT  reenter  any  of  the  one previously saved - enter your new ones 
     only.  A `Y' causes the following to appear: 
     
              
     WARNING!  ANY TRANSACTIONS PREVIOUSLY SAVED USING THIS OPTION WILL  BE 
     COMPLETELY  ERASED  & YOU MUST REENTER THOSE YOU WISH TO KEEP FROM THE 
     BEGINNING. 
     
     
     DO YOU HAVE READY A LIST OF ALL TRANSACTIONS THAT YOU WISH TO ENTER? 
     
     
     ENTER `Y' FOR YES OR `N' FOR NO.  _
     
     
     Please  use  a  prepared  LIST of your transactions and do not rely on 
     your memory.  It is very easy to make a  mistake.  Remember,  you  are 
     saving  transactions to be posted - automatically.  True,  you will be 
     given a chance to reject each transaction - both upon  original  input 
     and  at execution time.  But,  why take chances?  Be VERY careful with 
     your automatic input, please. 
     
     
     Again,  an `N' return you  to  the  Starting  Menu.  `Y'  causes  this 
     familiar input screen: (Remember it?  It is almost exactly the same as 
     the one used in Option 1.) 
     
     
                                                                        96-6
     
     
     EACH DEBIT OR CREDIT ENTRY REQUIRES INPUT IN THE COLUMNS BELOW.
     
      1. `POSTING REFERENCE' COLUMN IS FOR FUTURE REFERENCE TO SUPPORTING
         DOCUMENTATION. EXAMPLES ARE SALES INVOICE NUMBER AND PURCHASE 
         INVOICE NUMBER.
      2. ENTER `S' (FOR SAME) TO USE THE PREVIOUS POSTING REFERENCE.
      3. PRESS RETURN KEY AFTER YOU HAVE COMPLETED YOUR INPUT IN A COLUMN.
      4. ENTER `Q' (FOR QUIT) FOR ACCOUNT NUMBER WHEN THE JOURNAL ENTRY IS 
         COMPLETE.
      5. YOUR COMPUTER'S CAPS-LOCK KEY MUST BE `ON'.
     *********************************************************************

                 ACCOUNT   D=DEBIT     DOLLAR           POSTING
                 NUMBER    C=CREDIT    AMOUNT          REFERENCE
                                                 
     
     
     The only significant change from Option 1 is that the DATE column does 
     not appear.  Think about it.  At this point, a date is not needed. The 
     transactions will not posted until a later time.  Then, and only then, 
     do you need a transaction date. 

     Like  Option  1,  use a `Q' to quit - see instruction 4 in the screen, 
     above.  After you enter `Q',  the processing is exactly  the  same  as 
     Option  1.  Rather  than  repeat  a detailed explanation here,  please 
     refer to the chapter that describes that option. 
     
     Each  transaction  that  you accept is saved on disk and is printed on 
     your printer.  The printed transaction has a message  explaining  that 
     it was not posted to the general ledger. 
     
     After  you accept or reject the transaction (see the chapter on Option 
     1 processing) and all related  processing  is  completed  -  including 
     saving  and  printing  the transaction is you so elect,  the following 
     question is asked: 
     
     
     DO YOU DESIRE TO ENTER ADDITIONAL JOURNAL ENTRIES?
     
     
     ENTER `Y' FOR YES OR `N' FOR NO.
     
     
     A `Y' causes the processing described above to repeat.  `N' causes the 
     Starting  Menu to reappear.  Now,  let's proceed to the next option in 
     the Starting Menu. 
     
     
     AUTOMATIC POSTING OF TRANSACTIONS IN 1, ABOVE.

     After entering "2" in the Starting Menu, the following appears:
     
     
     
                                                                      96-7
     
     
     PLEASE CONFIRM.  YOU WISH TO AUTOMATICALLY POST TRANSACTIONS THAT YOU
     PREVIOUSLY SAVED FOR POSTING AT THIS TIME.
     
     
     ENTER `Y' FOR YES OR `N' FOR NO.  _
     
     
     `N' returns you to the Starting  Menu.  `Y'  causes  this  message  to 
     appear: 
     
     
     TRANSACTIONS  THAT  YOU  PREVIOUSLY SAVED WILL BE DISPLAYED,  ONE AT A 
     TIME,  ON  THE  SCREEN  FOR  YOU  APPROVAL.   ACCEPT  OR  REJECT  EACH 
     TRANSACTION,  FOLLOWING INSTRUCTIONS THAT WILL APPEAR.  ALSO,  IF YOUR 
     TRANSACTIONS INCLUDE CREDIT(S) TO A BANK ACCOUNT, YOU WILL BE ASKED TO 
     ENTER THE CHECK NUMBER(S) AND PAYEE(S).  PRESS ANY KEY TO CONTINUE. 
     

     After you press a key,  processing continues by displaying the  debits 
     and credits of each transactions,  one at a time, for your approval or 
     disapproval.  This processing is  the  same  as  Option  1,  with  one 
     exception. 
     
     The  exception  pertains  to  entering  (1)  check numbers,  (2) check 
     payees.  Following is an example of  CPA-LEDGER  asking  for  a  check 
     number. 
     
     
     PLEASE SEE MESSAGE BELOW.
     

     
            ACCOUNT                              DOLLAR  POSTING    CHECK
      DATA  NUMBER                               AMOUNT  REFERENCE  NUMBER
     092587     3  CITY BANK                     421.87  DCD #876   ______
     CHECK NUMBER AND PAYEE NEEDED. ENTER CHECK NUMBER FIRST, ABOVE.
     THE PURPOSE OF THE TRANSACTION IS:  MONTHLY PAYMENT ON NOTE.
     
     
     After you enter the check number, the message "CHECK NUMBER AND PAYEE 
     NEEDED. ENTER CHECK NUMBER FIRST, ABOVE." disappears and the following 
     message and request for input appears on the same line:
     
     
     NOW, ENTER THE PAYEE.  ______________________________
     
     
     The  last  line  on  the  screen  (THE PURPOSE OF THE TRANSACTION IS : 
     MONTHLY PAYMENT ON NOTE.) is to assist you in keeping track of journal 
     entries as CPA-LEDGER processes them. 
     
     
     
                                                                       96-8
          
     
     We  thought  and  thought about having you enter the payee upon saving 
     the transaction and not allowing you to make a change.  However,  that 
     was too close to being rigid.  Why not give YOU the option of changing 
     the payee,  and thus,  giving YOU more flexibility.  Good or bad, that 
     what we decided.  For example, what if the bank sells its note and you 
     are to make payments to someone else?  It could happen. 
     
     Processing from this point is exactly the same as Option 1.  After you 
     accept or reject  each  transaction,  the  system  displays  the  next 
     journal  entry  that  you saved.  This process repeats until all saved 
     journal entries  are  processed,  at  which  time  the  Starting  Menu 
     reappears. 
     
---->There is a process that CPA-LEDGER follows that you should know about.  
     When CPA-LEDGER posts your general ledger,  it posts the  transactions 
     to TWO data bases, (1) the master data base used to prepare cumulative 
     financial  statements  and  (2)  a  data  base  use  for  accumulating 
     information for monthly  income  statements.  If  the  data  base  for 
     monthly  financial  statements become unusable,  the following message 
     will appear: 
     
       PROCESSING ERROR.  MONTHLY DATA BASE RECORD NOT  FOUND.  DISCONTINUE 
       YOUR  USE  OF  CPA-LEDGER  UNTIL  YOU  HAVE  CONTACTED JIM FOSTER AT 
       (703)569-2254.  PROCESSING WILL CONTINUE TO UPDATE THE  MASTER  DATA 
       BASE FOR THIS TRANSACTION.  WHEN YOU ARE ASKED, TELL CPA-LEDGER THAT 
       YOU DO NOT WISH TO POST ANY ADDITIONAL TRANSACTIONS.  THEN, CALL (OR 
       WRITE IF YOU PREFER) JIM FOSTER AND GIVE HIM THIS MESSAGE: 
     
       A message for Jim appears here.
       
       PRESS ANY KEY TO CONTINUE.
     
     As  the  message  states,  you should discontinue using CPA-LEDGER and 
     contact Jim Foster.  (You should rarely, if ever, see the message - it 
     will appear only if CPA-LEDGER notices that notices that the data base 
     is not usable.   The message is listed in this manual so that you will 
     know  what to do - contact Jim Foster.  In the meantime,  be sure that 
     you keep frequent backups of your data files (those with an  extension 
     of .FIL).  


     Now, let's turn to Option 3 of the Starting Menu, which if for:
          
          
     AUTOMATIC POSTING A BANK ACCOUNT  EACH  TIME  YOU  POST  ONE  OR  MORE 
     OPERATING EXPENSE ACCOUNTS OR ONE OR MORE SALES/REVENUE ACCOUNTS. 

     After entering "3" you will see this:
     
     
     
                                                                       96-9
     

     PLEASE  CONFIRM.  YOU  WISH  TO  POST  EXPENSES  OR SALES/REVENUE WITH 
     AUTOMATIC POSTING OF THE BANK  ACCOUNT.  THIS  MEANS  THAT  YOU  NEVER 
     ENTER  THE     F-I-N-A-L     DEBIT OR CREDIT FOR THE BANK - CPA-LEDGER 
     DOES THAT FOR YOU.  FOR EXAMPLE,  ASSUME THAT YOU PAY  FIVE  OPERATING 
     EXPENSE INVOICES WITH ONE CHECK.  YOU ENTER THE FIVE OPERATING EXPENSE 
     ACCOUNT  NUMBERS,  DEBITING EACH WITH A DOLLAR AMOUNT.  THEN YOU ENTER 
     ONE `Q' (WHEN CPA-LEDGER ASKS FOR THE SIXTH ACCOUNT NUMBER) TO  SIGNAL 
     THAT  YOUR  INPUT  IS  COMPLETE.  CPA-LEDGER WILL RECOGNIZE YOU SIGNAL 
     (THE `Q'), WILL SUM YOUR FIVE ENTRIES AND WILL CREDIT THE BANK ACCOUNT 
     WITH THAT SUM,  AFTER THE ENTRY IS DISPLAYED FOR  YOUR  APPROVAL.  YOU 
     MAY ENTER AS MANY SEPARATE TRANSACTIONS AS YOU WISH. 
     
     THE  NEXT  MENU  WILL  ASK  IF  YOU  WISH TO USE OPERATING EXPENSES OR 
     SALES/REVENUE.  YOUR SALES/REVENUE ACCOUNT NUMBERS ARE IN THE RANGE  w 
     TO x.  YOUR OPERATING EXPENSE ACCOUNT NUMBERS ARE IN THE RANGE y TO z.  
     DEPENDING  ON THE OPTION YOU SELECT (EXPENSES OR SALES/REVENUE),  YOUR 
     ENTRIES WILL BE CONFINED TO THE APPROPRIATE RANGE OF ACCOUNT NUMBERS. 
     
     DO YOU WISH TO CONTINUE WITH THIS OPTION?  CONFIRM BELOW.
     
     ENTER `Y' FOR YES OR `N' FOR NO.  _
     
     
     (Before continuing,  find these words  is  the  paragraph  above  that 
     begins  with  "THE  NEXT  MENU  ..."  -  "ARE  IN  THE  RANGE w TO x.
     ..." 
     CPA-LEDGER prints an account number for the "w", "x", "y" and "z". "w" 
     and  "y"  are  beginning  account  numbers  and "x" and "z" are ending 
     account numbers.) 
     
     If  you  select  "N",  the  Starting  Menu reappears.  "Y" causes this 
     screen: 
     
     
     DO YOU WISH TO POST:
     
        1.  OPERATING EXPENSES, OR
        2.  SALES/REVENUE?  OR, DO YOU WISH TO
        3.  QUIT, BECAUSE YOU CAME HERE BY MISTAKE.
          

     SALES/REVENUE IS RESTRICTED TO THE PRIMARY INCOME ACCOUNTS AS SHOWN ON 
     YOUR INCOME STATEMENT (SHOWN BEFORE COST OF SALES AND OPERATING 
     EXPENSES.)
     
     
     ENTER 1, 2 OR 3.   _
     
     
                                                                      96-10

     
     A "3" causes the Starting Menu to display.  If your general ledger has 
     more than one bank account, each bank account (with titles) appears on 
     the screen (one at a time).  You are asked to select one of  the  bank 
     accounts  to  be  debited or credited,  with the debit or credit being 
     determined by the journal entries you are about to enter.  If only one 
     bank account is in your general ledger,  this query is  unnecessary  - 
     CPA-LEDGER already knows all that is necessary to debit or credit that 
     account.  Once  the bank account is know,  the standard Option 1 input 
     screen (with two modifications - see  instructions  1  and  4  in  the 
     screen  below)  appears  for  you.  It  looks like this,  WITH ASSUMED 
     INPUT: 
     

     EACH DEBIT OR CREDIT ENTRY REQUIRES INPUT IN THE COLUMNS BELOW.
      1. `DATE' IS TODAY'S DATE - THE DATE THAT YOU JUST ENTERED.
          (Jim's note - not part of this screen:  This is the first of the
          two changes.  Today's date is the first input requested by
          Option 10.)
      2.  `POSTING REFERENCE' COLUMN IS FOR FUTURE REFERENCE TO  SUPPORTING 
          DOCUMENTATION.  EXAMPLES  ARE  SALES  INVOICE NUMBER AND PURCHASE 
          INVOICE NUMBER. 
      3.  ENTER `S' (FOR SAME) TO USE THE PREVIOUS POSTING REFERENCE.
      4.  PRESS THE RETURN KEY AFTER YOU HAVE COMPLETED YOUR INPUT IN A 
          COLUMN.
          (Jim's note - not part of this screen:  This is the second of the 
          two  changes.  Old versions of Option 1 have the same instruction 
          as you see for number 4 above.  The new Option  1  version  tells 
          you  to  enter  "?"  for debit/credit to automatically complete a 
          journal entry.) 
      5.  ENTER `Q' (FOR QUIT) FOR ACCOUNT NUMBER WHEN THE JOURNAL ENTRY IS 
          COMPLETE.
      6.  YOUR COMPUTER'S CAPS-LOCK KEY MUST BE `ON'.
     **********************************************************************
     
                ACCOUNT  D=DEBIT     DOLLAR           POSTING      CHECK
      DATE      NUMBER   C=CREDIT    AMOUNT           REFERENCE    NUMBER
     092587        161       D       112.98           DCD #857
                   165       D       387.95
                   173       D        44.60
                   188       D       229.74
                     Q
     BANK ACCOUNT    3       C       775.27                        ______
     
     
     Now,  let's analyze.  Look at the four debits,  the posting  reference 
     and  the  "Q".   That  is  what  you  enter.   CPA-LEDGER  enters  the 
     information BELOW the "Q", except for the check number. (On the actual 
     screen,  the "Q" disappears and "BANK  ACCOUNT  3  C  775.27"  appears 
     immediately below "188  D  229.74".) 
     
     

                                                                      96-11
     

     Look under the CHECK NUMBER column.  Notice that CPA-LEDGER is  asking 
     for a check number.  After you enter that number, the system continues 
     with  two  additional queries,  as in normal Option 1 processing.  The 
     two queries ask for  (1)  a  payee  for  the  check  and  (2)  for  an 
     explanation for the transaction. 
     
     Now,  look under  the  DATE  column.  CPA-LEDGER  supplies  the  date, 
     automatically.  That  date  is the same one that you enter when Option 
     10 first begins to process. 
     
     After you enter the check number and  the  transaction's  explanation, 
     normal  Option  1  processing  resumes - displaying the entry for your 
     approval or disapproval.  Once that process is complete, you are asked 
     if you wish to enter more transactions.  If your answer is "N" for NO, 
     the  Starting  Menu  reappears.  If you answer "Y" for YES,  the input 
     menu reappears and the posting process continues. 
     
     In case you have not already guessed the answer, here is what to do if 
     you are posting operating expenses  and  wish  to  switch  to  posting 
     sales/revenue.  When you are asked,  tell CPA-LEDGER that there are no 
     more transactions to post.  The  Starting  Menu  will  appear.  Select 
     number  "3"  again,  and specify that sales/revenue accounts are to be 
     processed this time.  Then CPA-LEDGER debits your  bank  account.  (In 
     case you are wondering, CPA-LEDGER always determines the NET balancing 
     amount - whether your are posting operating expenses or sales/revenue.  
     For  example,  if  your NET posting to the sales/revenue accounts is a 
     DEBIT,  the bank account will be CREDITED.  If  your  NET  posting  to 
     operating expenses is a CREDIT, the bank account will be DEBITED.) 
          
     This brings us to the last option of the Starting Menu.
     
     
     STOP ALL PROCESSING AND RETURN TO THE DAILY MENU.
     
     The caption tells all.  If you enter "4" while in the  Starting  Menu, 
     all  Option  10  processing will stop and the DAILY MENU will appear - 
     after this summary is printed for you: 
     
     
     NUMBER OF ENTRIES POSTED                          =       w
     VALUE OF ALL DEBITS POSTED                        =       x
     VALUE OF ALL CREDITS POSTED                       =       y
     DIFFERENCE - DEBITS LESS CREDITS POSTED           =       z
     
     Of course, CPA-LEDGER prints values for w, x, y and z.
     
     
     
                                                                      96-12
     
     PRACTICE.

     Use  the DAILY menu to print an unadjusted trial balance.  (This trial 
     balance will be used to compare the results of Option 10  processing.) 
     Now,  use Option 10 of the DAILY menu.  When the Starting Menu appears 
     (after you enter the date),  select Option 2.  Two  transactions  have 
     been  placed  on  the  file  that  holds  saved  transactions.   These 
     transactions  will  be  posted   to   the   general   ledger.   Follow 
     instructions  that  will appear on the screen and tell CPA-LEDGER that 
     you DO wish to post the transactions  to  the  general  ledger.  After 
     posting,  return  to the DAILY menu and print another unadjusted trial 
     balance.  Look at the printout of the transactions and see results  of 
     the posting for yourself, as evidenced by balances on the second trial 
     balance. 
     
     Select Option 10 again.  This time select Option  1  of  the  Starting 
     Menu,  following  instructions  that will appear on the screen.  Enter 
     any transactions  that  you  wish,  and  save  them.  Then,  from  the 
     Starting Menu,  select Option 2.  Post the transactions to the general 
     ledger. 
     
     When  the  Starting  Menu  reappears,  select Option 3.  (Your general 
     ledger has two bank accounts.  Select either when Option 1 asks you to 
     select one of them.) When the appropriate (see example on  page  96-9) 
     menu appears, select OPERATING EXPENSES.  On the input screen appears, 
     debit  four  (any four) operating expense accounts for any amounts you 
     wish.  After the fourth entry, when you are asked for the next account 
     number,  enter `Q'.  You will see  that  your  bank  account  will  be 
     credited,  automatically.  Enter  the  remainder  of  the  transaction 
     (check payee and purpose of transaction).  Follow instructions on  the 
     screen and tell CPA-LEDGER to post the general ledger. 
     


























```
{% endraw %}

## CHP16.TXT

{% raw %}
```
  
     
       
                                                                      96-13
     
                                   CHAPTER 16
     
                                 SETUP OPTION 4 
     
     
     
     WHAT OPTION 4 IS USED FOR.
     
     Use Option 4 to start a new general ledger  from  the  general  ledger 
     used  during  the  past  year.  You  should  remember this about SETUP 
     Options 1, 2, 3, and 4: 
     
       .  Use SETUP menu Options 1,  2,  and 3 anytime you want to start  a 
          completely new general ledger.  Options 1,  2, and 3 allow you to 
          enter your old accounts,  to add new accounts and to provide  for 
          the maximum number of "inactive accounts" that may be needed at a 
          later time. 
     
       .  Use  SETUP  Option  4  if you want to "close" last year's general 
          ledger and to carry it over for  use  during  the  current  year.  
          Remember  this  -  Option  4  DOES  NOT  add  any  new  "inactive 
          accounts".  It uses the previous year account titles  exactly  as 
          they appeared during the previous year.  
     
       .  If  you  use Option 4,  it is very important that you back-up the 
          previous year's general ledger BEFORE you use Option 4!!!!!  This 
          is because Option  4  COMPLETELY  destroys  the  previous  year's 
          general ledger while constructing the one for the current year. 
       
     
     WHAT OPTION 4 ASKS FOR. 
     
     Option 4 asks you to answer a few questions.  The questions pertain to 
     whether  or  not  you  have  backed-up  last year's general ledger and 
     whether or not you are SURE you wish to use Option 4.  See the section 
     that follows. 
     

                                                                      96-14
     
     
       
     OPTION 4 SEQUENCE OF EXECUTION. 
     
     Option 4 starts with this message and question: 

     
     THIS OPTION OF THE SETUP MENU SHOULD BE USED O-N-L-Y WHEN ALL  OF  THE 
     FOLLOWING CONDITIONS EXIST: 
       1.  YOU PREVIOUSLY ESTABLISHED A GENERAL LEDGER USING OPTIONS 1, 2 & 
           3  OF THE SETUP MENU.  THAT IS,  A GENERAL LEDGER ALREADY EXISTS 
           FOR CPA-LEDGER. 
       2.  YOUR ARE READY TO START A NEW GENERAL  LEDGER  FOR  A  NEW  YEAR 
           A-N-D  YOU  WISH TO USE THE SAME ACCOUNT NUMBERS AND TITLES THAT 
           YOU USED LAST YEAR. 
       3.  IMMEDIATELY BEFORE COMING TO THIS OPTION OF THE SETUP MENU,  YOU 
           USED  THE  DAILY  MENU TO PREPARE (A) A BALANCE SHEET AND INCOME 
           STATEMENT AND (B) A POST-CLOSING TRIAL BALANCE. 
       4.  YOU H-A-V-E MADE A BACKUP OF ALL OF THE GENERAL LEDGER FILES FOR 
           LAST YEAR.  PLEASE REMEMBER  THIS!!!!!!  IF  YOU  CONTINUE  WITH 
           THIS  PROGRAM,  CPA-LEDGER  W-I-L-L COMPLETELY ERASE LAST YEAR'S 
           GENERAL LEDGER FILES AND THEY WILL BE  LOST  F-O-R-E-V-E-R.  YOU 
           SHOULD   ALWAYS   COMPLETELY  COPY  YOUR  GENERAL  LEDGER  FILES 
           B-E-F-O-R-E YOU USE THIS PROGRAM. 

           IF YOU DO N-O-T  WISH  TO  CONTINUE,  ANSWER  `N',  WITHOUT  THE 
           QUOTES, TO THE QUESTION THAT FOLLOWS.  `N' WILL CAUSE CPA-LEDGER 
           TO DISCONTINUE PROCESSING YOUR NEW GENERAL LEDGER AND  YOU  WILL 
           BE ALLOWED TO COMPLY WITH 1,  2, 3 AND 4 ABOVE.  THAT IS, IF YOU 
           ANSWER `N', NOTHING WILL HAPPEN TO LAST YEAR'S GENERAL LEDGER. 
     
     DO  YOU  WISH  CPA-LEDGER TO USE LAST YEAR'S GENERAL LEDGER TO START A 
     NEW GENERAL LEDGER FOR THIS YEAR? (N=NO, Y=YES) _ 
     
     
     
                                                                      96-15

     
     If you answer `N' to the above question, the SETUP menu reappears.  If 
     you answer `Y', the following appears: 
                                               

     LAST CHANCE!!  ARE YOU   A-B-S-O-L-U-T-E-L-Y    C-E-R-T-A-I-N      YOU 
     HAVE A BACK-UP OF ALL OF LAST YEAR'S GENERAL LEDGER FILES?  THE  FILES 
     THAT SHOULD BE BACKED-UP ARE THOSE WITH AN EXTENSION OF `.FIL'.  REFER 
     TO  YOUR  DOS  MANUAL FOR THE PROPER BACK-UP PROCEDURE.  PLEASE DO NOT 
     GUESS.  BE CERTAIN!!!! 
     
     IF  YOU  ANSWER  `N'  (WITHOUT  THE QUOTES) TO THE FOLLOWING QUESTION, 
     CPA-LEDGER WILL NOT DESTROY LAST YEAR'S GENERAL LEDGER FILES  AND  YOU 
     WILL  BE  RETURNED  TO THE SETUP MENU.  IF YOU ANSWER `Y' (WITHOUT THE 
     QUOTES) CPA-LEDGER WILL USE LAST YEAR'S GENERAL LEDGER TO START A  NEW 
     GENERAL LEDGER FOR THIS YEAR.  THEN, ALL OF LAST YEAR'S GENERAL LEDGER 
     FILES WILL BE COMPLETELY ERASED. 
     
     ALSO,  REMEMBER  THIS  -  IS YOU ANSWER `Y' TO THE FOLLOWING QUESTION, 
     CPA-LEDGER WILL USE THE EXACT SAME ACCOUNT NUMBERS AND ACCOUNT  TITLES 
     THAT  YOU  USED  LAST  YEAR.  THIS MEANS THAT ALL ACTIVE ACCOUNTS FROM 
     LAST YEAR WILL BE ACTIVE FOR THIS YEAR.  ALL  ACCOUNTS  THAT  REMAINED 
     INACTIVE AT THE END OF LAST YEAR WILL BE INACTIVE AT THE START OF THIS 
     YEAR.  EXTRA INACTIVE ACCOUNTS ARE NOT ADDED TO THE GENERAL LEDGER. IF 
     YOU  NEED  ROOM FOR ADDING ADDITIONAL ACCOUNTS AND LAST YEAR'S GENERAL 
     LEDGER DOES NOT HAVE  SUFFICIENT  INACTIVE  ACCOUNTS  FOR  YOUR  NEEDS 
     (INACTIVE  ONES  TO  BE  MADE  ACTIVE),  ANSWER  `N'  TO THE FOLLOWING 
     QUESTION AND USE OPTIONS 1,  2 AND 3 OF THE SETUP MENU.  THAT  IS  THE 
     ONLY WAY TO PROVIDE FOR ADDITIONAL INACTIVE ACCOUNTS. 
     
     ARE YOU SURE YOU WANT TO START A NEW GENERAL LEDGER? (N=NO, Y=YES)  _
     
     
     If you answer `N' to the question above, the SETUP menu reappears.  If 
     you answer `Y',  processing continues.  CPA-LEDGER checks to determine 
     if  you  prepared  an income statement and a balance sheet immediately 
     before executing Option 4 of the SETUP menu.  If CPA-LEDGER find  that 
     you  did  not use the DAILY menu to prepare and income statement and a 
     balance sheet, the following arrears: 

     YOU HAVE EITHER (1) NOT YET USED OPTION 3 OF THE DAILY MENU TO PREPARE 
     AN INCOME STATEMENT AND A BALANCE SHEET OR (2) YOU USED DAILY OPTION 1 
     SINCE YOU LAST USED OPTION 3.  YOU MUST USE DAILY MENU OPTION 3 BEFORE 
     CPA-LEDGER WILL START YOUR GENERAL LEDGER FOR THE CURRENT YEAR. 

     PRESS ANY KEY AND YOU WILL BE RETURNED TO THE DAILY MENU.
     
     After you press a key,  the SETUP menu reappears.  If CPA-LEDGER finds 
     that  you  DID  comply  with  the  income  statement and balance sheet 
     requirements, the message above does not appear.  Instead,  CPA-LEDGER 
     continues  to  the  next  step  -  it checks to be sure that a general 
     
     
     
                                                                      96-16

     ledger exists for creating the current year general  ledger.  If  not, 
     the following appears: 

     GENERAL  LEDGER  DATA  FILES NOT FOUND.  PRESS ANY KEY AND YOU WILL BE 
     RETURNED TO THE SETUP MENU. 
     
     After  you  press  a  key,  the SETUP menu reappears.  Assuming that a 
     general ledger does exist,  the system proceeds to  create  a  general 
     ledger  for  the  current  year.  After  the process is complete,  the 
     following message appears: 

     YOUR NEW GENERAL LEDGER HAS BEEN STARTED.  FOR DOCUMENTATION PURPOSES, 
     A  TRIAL  BALANCE  WILL  BE  PRINTED.  THE TRIAL BALANCE WILL SHOW ALL 
     ACTIVE ACCOUNTS AND THEIR RELATED BALANCES.  SAVE  THE  TRIAL  BALANCE 
     FOR  FUTURE REFERENCE.  MAKE SURE THAT YOUR PRINTER IS ON AND IS READY 
     TO PRINT.  ALSO MAKE SURE THAT  THE  PAPER  IS  AT  TOP-OF-PAGE.  YOUR 
     PRINTER WILL BE AT TOP-OF-PAGE WHEN THE PRINTER WILL PRINT ON THE VERY 
     FIRST LINE AT THE TOP OF THE PAGE. PRESS ANY KEY WHEN YOU ARE READY TO 
     CONTINUE. 
     
     After you press a key, a new trial balance is printed.  Before the new 
     trial  balance  is printed,  however,  you are asked to enter "today's 
     date". At the top of the trial balance, this message is printed: 

          THIS TRIAL BALANCE SHOWS BEGINNING ACCOUNTS AND BALANCES.
     
     
     PRINTED OUTPUT.
     
     The printed output comes from Option 2 of the DAILY menu  -  PRINT  AN 
     UNADJUSTED  TRIAL  BALANCE.  Refer  to  Chapter  7  of this manual for 
     sample output. 
     
     
     Practice. 
     
     Before you practice,  here is a WARNING!!!!  Be  very  sure  that  you 
     back-up any general ledger files that you use with Option 4 BEFORE you 
     use Option 4. 
     
     Go to the DAILY menu and select Option  3  (for  preparing  an  income 
     statement  and  a balance sheet).  The go to the SETUP menu and select 
     Option 4.  Answer all questions `Y'.  After processing  is  completed, 
     compare  account  titles and amounts on the trial balance with account 
     titles  and  amounts  on  the  balance  sheet.   You  should  find  NO 
     differences. 

     Note from Jim: I sure hope you backed-up the general ledger before you 
     used Option 4!  If you didn't,  then I hope you will never  need  your 
     previous year's general ledger again.  If you do need it again and you 
     didn't back-up, sorry, it's gone, FOREVER.  I did my best to warn you. 
     











```
{% endraw %}

## CHP17.TXT

{% raw %}
```
 
     
     
                                             
   
                                                                    96-17
     
                                   CHAPTER 17

                             SETUP MENU  -  OPTION 6
                                       AND
                            DAILY MENU  -  OPTION 11
     
     
     SETUP Option 6 and DAILY Option 11 returns control to PC-DOS.  This is 
     the ONLY way that  you  should  discontinue  CPA-LEDGER's  processing. 
     NEVER,  UNDER  ANY  CIRCUMSTANCES  STOP  CPA-LEDGER  BY  PRESSING  THE 
     "Ctrl-Break" KEYS!  Always allow CPA-LEDGER to process completely  and 
     to return you to either the SETUP menu or the DAILY menu. 
     




```
{% endraw %}

## CHP2.TXT

{% raw %}
```
                    
                                                                        14
          
                                    CHAPTER 2
              
                         STANDARD MESSAGES AND REMINDERS
                                    
     
     This and the following  chapters  contain  a  detailed  discussion  of 
     CPA-LEDGER  and  how  to  use  the system.  This chapter is devoted to 
     standard messages and reminders  that  will  appear  on  the  computer 
     screen  anytime  you  use  most any CPA-LEDGER option.  Also,  page 18 
     tells you what happens if you try to use the DAILY menu without  first 
     using Options 1 & 2 of the SETUP menu. 
     
     We tried to leave nothing to chance when we were designing CPA-LEDGER. 
     We did not assume that you would remember to  turn  on  your  printer, 
     when to adjust the paper in your printer,  or what to do if you make a 
     mistake in input.  So, we decided to give you a message or a reminder, 
     whichever one is required, when it is needed. 
     
     We also decided that it would be a good idea  to  devote  this  entire 
     chapter  to  standard  messages and reminders - so you may easily find 
     them in the event you need to refresh your memory at a later time. 
     

     PRINTER REMINDER. 
     
     Most of CPA-LEDGER's options  require  a  printer.  If  a  printer  is 
     needed,  the  following  appears  on your screen immediately after you 
     make a selection from either the SETUP or DAILY menus: 
    
     
       ADJUST THE PAPER IN YOUR PRINTER SO THAT THE PAPER IS AT TOP-OF-PAGE.
       
       THE PAPER WILL BE AT TOP-OF-PAGE WHEN THE PRINTER WILL PRINT ON  THE 
       VERY FIRST LINE AT THE TOP OF THE PAGE. 

       PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE. 
     
     
 
     Assume  that  you  DO adjust the paper,  but you FORGET to turn on the 
     printer.  In that event, the following message will appear: 
     
      
       CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON  OR  IT  IS  OUT  OF 
       PAPER.  PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE. 
     
     
     
     After you press a key, CPA-LEDGER continues where it left off. 
     
      
     
                                                                        15
     
     
     
     ERRORS IN INPUT.
     

     If  you  make  an error in input (for example,  alphabetic and numeric 
     data in lieu of completely numeric data), CPA-LEDGER will either: 
     
          .  Display a separate message telling you that you made a mistake 
             and ask you for the corrected information, or 
     
          .  Not display a separate message (one will  be  already  on  the 
             screen),  but refuse to accept your input.  So,  if CPA-LEDGER 
             refuses to proceed, it is because your input is incorrect. 
     
     
     Please keep this in mind regarding errors in input.  We very carefully 
     tried to check for as many errors as possible.  By  "errors",  we  are 
     referring to input such as month "13",  day "32", and "12CDE.56" for a 
     dollar value.  We are NOT referring to input such as month  "11"  that 
     should  be  "12",  day "31" that should be "13",  or dollars "1000.00" 
     that should be "10.00".  So,  be very careful in giving your input  to 
     CPA-LEDGER.  Take  your time,  be patient,  and be very sure that your 
     input is ABSOLUTELY correct. 
     
                                                      

                                                                        16
     
     

     
     TODAY'S DATE. 
     
     Several  of  CPA-LEDGER's  options  (for  both the SETUP and the DAILY 
     menus) show the "RUN DATE" on the printout.  CPA-LEDGER  asks  you  to 
     enter "TODAY'S DATE", like this: 
   
   
       
     ENTER TODAY'S DATE. (USE FORMAT MMDDYY. I.E., JUNE 10, 1985=061085.) _____ 
    
      
     

     It might be good to explain the  "MMDDYY"  format  because  CPA-LEDGER 
     uses  it  consistently.  MMDDYY  means that you are to use two numbers 
     for EACH COMPONENT of a date - two numbers in a specific order. 
     
          .  The first component (MM) is for the month.  January  is  "01". 
             February is "02", and so on, up to December which is "12". 
     
          .  The  second  component  (DD) is for the day.  Day one is "01".  
             Day two is "02",  and so on up to the end of the month,  which 
             will be either "28", "29", "30", or "31". 
     
          .  The third component (YY) is for the year.  1985 is "85".  1986 
             is "86", and so on. 
     
     
     Be careful in entering  your  dates.  CPA-LEDGER  checks  for  obvious 
     errors (such as month 13,  day 32, year 00).  However, "hidden" errors 
     will not be detected.  Here is an example of  a  "hidden"  date  error 
     that will be accepted. 
     
          .  Assume  that  you  want  to  enter June 2,  1985 in its MMDDYY 
             format. 
     
          .  You SHOULD enter 060285. 
     
          .  You DO enter 020685, in error. 
     
     CPA-LEDGER will accept your input as meaning February 6,  l985  -  not 
     the correct date June 2, 1985.  So, be careful in entering your dates. 
     
      
     
                                                                        17
     

     CPA-LEDGER BRIEFINGS. 
     
     Next comes a briefing on the input that CPA-LEDGER requires and on the 
     data  processing  that  is  about  to  begin.  Some CPA-LEDGER options 
     automatically brief you.  Others give you an option of  bypassing  the 
     briefing.  (If  you  use a program frequently,  you probably will have 
     read the briefing many times and would like to bypass it.) Here is the 
     question that you will be asked: 
     
      
     
       WOULD YOU LIKE TO HAVE A  BRIEFING  ON  HOW  TO  USE  THIS  COMPUTER 
       PROGRAM DISPLAYED ON THE COMPUTER SCREEN? 
     
       ANSWER WITH `Y' FOR `YES' OR `N' FOR `NO'. _ 
    
      

     If you answer `Y',  CPA-LEDGER will brief you.  Otherwise the briefing 
     is  bypassed.  We suggest that you read the briefing each time you use 
     a CPA-LEDGER option,  at least until you  become  thoroughly  familiar 
     with the system.  
     
     
      
                                                                        18
     
     IF YOU DO NOT USE SETUP MENU OPTIONS 1 AND 2.
     
     If you do not use SETUP menu Options 1 & 2,  CPA-LEDGER will not allow 
     you  to  use  any  of the options of the DAILY menu and will display a 
     message telling you to return to the SETUP menu for using Options 1  & 
     2. 
     

     SUMMARY. 
     
     This chapter presented the standard messages and  reminders  that  are 
     designed  to help you use the system.  To avoid repetition,  they will 
     not be repeated in the chapters to come.  Just remember that  they  do 
     appear. 
     
     There are other messages that you will see as you use CPA-LEDGER,  but 
     they are not standard in the sense that they appear in all,  or almost 
     all,  of  the SETUP and DAILY options.  Rather,  they are specialized.  
     They relate to the  specific  data  processing  tasks  that  you  have 
     directed. These specialized messages will be discussed in the chapters 
     that follow. 
     
















```
{% endraw %}

## CHP3-5.TXT

{% raw %}
```
              

                                                                        19
                                   CHAPTER 3
     
                            SETUP MENU  -  OPTION 1 
                                
     
    
                         

     As  mentioned  in Chapter 1,  CPA-LEDGER has two main menus.  They are 
     the SETUP menu and the DAILY menu. 
     
         .  The  SETUP  menu  has five processing options and an option for 
            discontinuing processing.  Use Options 1,  2,  and 3 to start a 
            COMPLETELY NEW general ledger.  Use Option 4 to start a general 
            ledger  from  the general ledger used during the previous year.  
            Use Option five to go to the DAILY menu. 
     
         .  The DAILY menu has ten processing options  and  an  option  for 
            discontinuing  processing.   Use  the  ten  processing  options 
            DURING the year to record transactions and  to  obtain  various 
            printed reports. 
     
     
     This  and the next two chapters discuss the SETUP menu.  The remaining 
     chapters take up the DAILY menu. 
     
     
     THE SETUP MENU. 
     
     Chapter 1 tells you how to use your PC-DOS diskette for loading BASICA 
     and for starting the  SETUP  menu.  When  the  menu  appears  on  your 
     computer screen, it will look like this: 
     
     
             
     
                                   CPA-LEDGER
     
                                   SETUP MENU
     
     
     SELECT ONE OF THE FOLLOWING OPTION NUMBERS BELOW.
     
       1.  MAKE A NEW GENERAL LEDGER AND ASSIGN ACCOUNT TITLES.
       2.  IDENTIFY SELECTED ACCOUNT NUMBERS THAT ARE IN THE NEW GENERAL
           LEDGER AND IDENTIFY YOUR BUSINESS NAME.
       3.  ASSIGN BEGINNING DOLLAR AMOUNTS TO NEW GENERAL LEDGER ACCOUNTS.
       4.  START THIS YEAR'S GENERAL LEDGER FROM LAST YEAR'S GENERAL LEDGER.
       5.  GO TO THE DAILY MENU.
       6.  STOP ALL CPA-LEDGER PROCESSING AND RETURN CONTROL TO PC-DOS.
     
     WHICH OPTION NUMBER DO YOU SELECT?  _
     
     (C) COPYRIGHT 1986, 1988, 1989 TRONOLONE & FOSTER,PC
     
          
                                                                        20
      
     If you wish to start a completely new general ledger,  you must select 
     Options 1,  2,  and 3  in  CONSECUTIVE  order.  Select  an  option  by 
     entering  1,  2,  or  3  as  your response to the menu question "WHICH 
     OPTION NUMBER DO YOU SELECT?".  Then press  the  RETURN  key  on  your 
     keyboard.  After  you  do  that,  SETUP  will  load  and  execute  the 
     appropriate computer program.  This chapter covers SETUP menu  Options 
     1,  2,  and 3.  Option 4 is discussed in Chapter 16.  Option 4 is used 
     whenever you already have a general ledger and do not wish to  reenter 
     all  of  the account titles and values.  Option 4 automatically closes 
     your old general ledger and starts a new general ledger for the coming 
     year. (Make SURE you make a back-up of a general ledger BEFORE you use 
     it to start a new general ledger for the coming year, PLEASE!)
          
     WHAT "SETUP" OPTIONS 1, 2, AND 3 ASK FOR. 
     
     The programs, as they execute, request several items of input. Respond 
     by giving your input at the computer's keyboard. 
     
       .  Option 1 asks for your  business  name  and  for  the  titles  of 
          accounts  that you want included in your general ledger.  It also 
          asks you to indicate,  for each account,  the "account  balance", 
          which  will be either a "D" for "debit" or a "C" for "credit".  A 
          listing of accounts that you entered, showing account numbers and 
          titles, is printed after Option 1 is finished processing. 

       .  Option 2 asks for a several account numbers and for your business 
          name.  Get the account numbers from  an  Option  1  printout.  As 
          explained  in  Chapter  1,  and  as  will  be illustrated in this 
          chapter,   this  data  is  stored  by  CPA-LEDGER  for  automatic 
          retrieval  whenever  it  is needed.  Option 2 is a time-saver for 
          you.  For example,  you inform CPA-LEDGER of your company name in 
          Option  2.  Then,  when printed reports are prepared,  CPA-LEDGER 
          gets the name from its memory.  The same concept applies for  the 
          account numbers that you are asked to supply. 
     
       .  Options 3 is for assigning dollar values to the accounts that you 
          established while using Option 1.  Again, get the account numbers 
          from  an  Option 1 printout.  (Use this option one time per year, 
          only.) 
          
     This chapter discusses  Option  1.  The  next  two  chapters  take  up 
     Options 2 and 3.  Option 4 is discussed in chapter 16.
          
     WHAT OPTION 1 IS USED FOR. 
     
     Option  1 is use to establish a new general ledger at the beginning of 
     each accounting year. 
     
     The  general  ledger  is  subdivided  into  Balance  Sheet  and Income 
     Statement "account classifications".  (All versions of CPA-LEDGER  use 
     these two account classifications.) The classifications are: 
     
      
     
                                                                        21
     
          .  BALANCE SHEET ACCOUNT CLASSIFICATIONS
     
               .  CURRENT ASSETS
               .  INVESTMENT AND FUNDS
               .  OPERATIONAL ASSETS
               .  INTANGIBLE ASSETS
               .  OTHER ASSETS
               .  DEFERRED CHARGES
               .  CURRENT LIABILITIES
               .  LONG-TERM LIABILITIES
               .  CONTRIBUTED CAPITAL          . These three classifications
               .  OTHER CONTRIBUTED CAPITAL    . are replaced by capital &
               .  RETAINED EARNINGS            . drawing accounts for part-
               .  ALL OTHER EQUITY               ships & proprietorships.
     
          .  INCOME STATEMENT ACCOUNT CLASSIFICATIONS
     
               .  SALES
               .  PURCHASES AND RELATED ACCOUNTS
               .  OPERATING EXPENSES
               .  OTHER REVENUES AND GAINS
               .  OTHER EXPENSES AND LOSSES
               .  EXTRAORDINARY GAINS
               .  EXTRAORDINARY LOSSES
               .  INCOME TAX EXPENSE           . Not used for partnerships
                                                 & proprietorships.
     Appendix D discusses each of the above classifications and informs you 
     of  the  types of accounts included in each.  Read the Appendix before 
     using Option 1. 
         
     WHAT OPTION 1 ASKS FOR. 
     
     Read Chapter 2 for the standard messages and reminders that  are  part 
     of  Option  1.  Also,  before  it  starts processing information about 
     specific accounts, Option 1 asks for your business name. 
     
     Then, for each of the above account classifications, you will be asked 
     to enter: 
     
               
          .  The number of accounts to be included in that  classification. 
             Your answer may be zero or a positive number.  
     
          .  The account titles, which may contain up to 30 characters. 
          
          .  For  each  account  title,  a  "code"  to indicate whether the 
             account is  a  debit  balance  account  or  a  credit  balance 
             account.  The codes are "D" for debit and "C" for credit.
     
     
     
                                                                        22
     

     OPTION 1 SEQUENCE OF EXECUTION AND AN ILLUSTRATION. 
     
     Following  is  an  illustration  that  shows  the Option 1 sequence of 
     execution.  Two account classifications are used for the  illustration 
     - "CURRENT ASSETS" and "INVESTMENT AND FUNDS". 
     
     This  is  a good time to inform you of a very important REQUIREMENT of 
     CPA-LEDGER.  The requirement is that you should ALWAYS use  the  upper 
     case  for  alphabetic  characters.  The illustration that follows uses 
     lower case so that it will be easy for you to  distinguish  CPA-LEDGER 
     requests  from  your  input.  This  is for illustration ONLY!  ALWAYS, 
     ALWAYS press the "Caps-Lock" key on your keyboard before you start  to 
     use CPA-LEDGER.  The illustration follows. 
      
         
     
     
       ENTER YOUR BUSINESS NAME.                      ABC Wholesale, Inc.
     
     

     
     After  you  enter  your  business  name  (ABC Wholesale,  Inc.  in the 
     illustration), Option 1 continues with: 
   
     


       THE FOLLOWING QUESTIONS PERTAIN TO THE BALANCE SHEET. 
    
     
       HOW MANY CURRENT ASSETS ACCOUNTS DO YOU WISH TO CREATE? 2 
    
      

     
     Assume that you enter "2", as shown above.  Using your input, Option 1 
     will ask you to enter titles  for  the  two  Current  Asset  accounts.  
     Also,  for each of these accounts, you will be asked to enter a "D" if 
     the account is a "debit" balance account or a "C" if it is a  "credit" 
     balance account, as follows: 
     
     
     
                                                                        23
               YOUR Caps-Lock KEY SHOULD BE `ON'

     ENTER THE TITLE OF CURRENT ASSET ACCOUNT NUMBER 1 OF 2.
     
              Cash on Hand
     
     
     DOES THE ABOVE ACCOUNT NORMALLY HAVE A DEBIT BALANCE  
     OR A CREDIT BALANCE?  ANSWER BY ENTERING A   `D'        
     FOR   `DEBIT'  OR A    `C'   FOR   `CREDIT'.                      d
     
     
     
     
     
     After  you  make  these  two entries,  CPA-LEDGER displays your input, 
     exactly as entered,  and asks you to confirm  whether  or  not  it  is 
     correct.  (You may have misspelled the account title, for example.) If 
     you indicate that your input is  incorrect,  the  previous  two  input 
     requests  are  repeated.  Otherwise,  the new account is added to your 
     general ledger and input requests and responses continue for the  next 
     Current Asset account: 
     
     
               
               YOUR Caps-Lock KEY SHOULD BE `ON'.

     ENTER THE TITLE OF CURRENT ASSET ACCOUNT NUMBER 2 OF 2. 
     
              Cash in ABC Bank
     
     
     DOES THE ABOVE ACCOUNT NORMALLY HAVE A DEBIT BALANCE         
     OR A CREDIT BALANCE?  ANSWER BY ENTERING A   `D'        
     FOR   `DEBIT'  OR A    `C'   FOR   `CREDIT'.                      d
     
     
     
     
     Again, Option 1 asks you to confirm you input.  Assuming that you find 
     no  errors,  input for Current Assets is complete.  Option 1 now turns 
     to the next account classification, Investment and Funds.  Assume that 
     there are no accounts under this classification.  The Option 1 request 
     for input and the assumed response are shown below. 
     
          
     
     
     HOW MANY INVESTMENT AND FUNDS ACCOUNTS DO YOU WISH TO CREATE?     0 
     
     
     
                                                                        24
      
    
     Because the input  is  zero,  Option  1  moves  to  the  next  account 
     classification, Operational Assets.  This process is repeated for each 
     Balance  Sheet and Income Statement account classification.  Using the 
     illustration above,  Option 1 will create 16 general ledger  accounts. 
     Two  are  active  (the  ones that you identified) and 14 are inactive. 
     (Don't forget to read Appendix D,  which informs you of the  types  of 
     accounts   that   should   be   included   in   each  of  the  account 
     classifications.) Two of the classifications display special messages.  
     When the RETAINED EARNINGS classification appears,  this message  also 
     appears  if  you  enter  0  (zero)  -  "AT LEAST ONE RETAINED EARNINGS 
     ACCOUNT  IS  REQUIRED".   When  PURCHASES  appears  this  message   is 
     displayed  -  "IF YOU DO NOT WISH TO HAVE A COST OF GOODS SOLD SECTION 
     ON YOUR INCOME STATEMENT,  ENTER 0 (ZERO).  REFER TO THE USER'S MANUAL 
     FOR DETAILS." (See Appendix A.) 
     
     
     ERROR MESSAGES.
     
     There are several errors that you might make while using Option 1.  An 
     example is an entry of 13 for the month.  Another example  is  failure 
     to make an entry when one is requested. 
     
     If you make an input error,  Option 1 signals that you should  reenter 
     your  answer.  Instructions for correct input will be displayed on the 
     computer screen. 
    
     
     PRINTED OUTPUT. 
     
     Using the above illustration for Current  Assets  and  Investment  and 
     Funds,  the  printout from Option 1 will look like this:  (To conserve 
     space, all of the "inactive accounts" are not shown.  Three dots (...) 
     indicate that you are to assume that other accounts are listed in  the 
     same fashion as the account immediately above the three dots.) 
     
          
                                                                        25
     
                                                                    PAGE 1
                                                         RUN DATE 01/01/85
              
     
                               ABC WHOLESALE, INC.
     
                        CHART OF GENERAL LEDGER ACCOUNTS 
     
     ************************ BALANCE SHEET ACCOUNTS ************************
     
          
     CURRENT ASSETS
             
        CASH ON HAND       NORMAL BALANCE = DEBIT   ACCOUNT NUMBER IS    3   
        CASH IN ABC BANK   NORMAL BALANCE = DEBIT   ACCOUNT NUMBER IS    7
     
     INVESTMENT AND FUNDS   (Note:  "Account  Classifications" are printed, 
                            even if you do not add any accounts in them.
     OPERATIONAL ASSETS     See page 21.  Also see Appendix D regarding
                            the types of accounts that CPA-LEDGER expects
     INTANGIBLE ASSETS      in each account classification, when you use
                            either SETUP Option 1 or DAILY Option 8 - see 
        .         .         paragraph immediately below.)
        .         .
        .         .
     

     Note  that  only accounts that you entered are printed.  Also note the 
     account numbers above.  The first two accounts (inactive  ones,  added 
     automatically)  are  Numbers 1 & 2,  even though they are not printed. 
     Accounts 4,  5 & 6 are also "inactive" ones.  CPA-LEDGER automatically 
     adds  inactive  accounts.  Activate inactive accounts with Option 8 of 
     the DAILY Menu.  Get a list of all inactive accounts with Option 7  of 
     the  DAILY  Menu.  (Inactive accounts are for your future use,  in the 
     event you want to add new accounts to your general ledger.) 
     
                
     Practice. 
     
     Set-up  procedures  for  this  first  practice  section  depend on the 
     version of CPA-LEDGER that you  have.  First,  let's  talk  about  the 
     CPA-LEDGER  computer  programs.  If you have the (1) hard disk version 
     or the (2) hard disk and floppy disk  version,  copy  all  files  with 
     ".BAS"  (from  your Program Disk) onto hard disk.  If you have the two 
     floppy disk version, merely place the "Program Disk" in the B:  drive.  
     Now  let's provide for the general ledger files.  If you have the hard 
     disk version,  do nothing.  CPA-ledger will create the files  on  hard 
     disk.  If  you  have  the (1) hard disk and floppy disk version or the 
     (2) two floppy disk version,  place a blank  floppy  disk  in  the  A: 
     drive.  CPA-LEDGER  will  use  the  blank  disk for the general ledger 
     files. 
     
     
                                                                         26
     

     Now, go to BASICA and give one of the following commands, depending on 
     your version of CPA-LEDGER: 
     
       RUN "SETUP"  (if you have either the hard disk version or the hard 
                     disk and floppy disk version.)
       RUN "B:SETUP (if you have the two floppy disk version.)
     
     First,  however,  reread  Chapter  2  so you will not forget about the 
     standard messages and reminders that are not covered in this  chapter. 
     Also, read Appendix A, if you have not done so previously. 
        
     Establish  these  accounts  in  the  practice general ledger (by using 
     Option 1 of the Setup Menu): 
     
       BALANCE SHEET ACCOUNTS:
     
          .  CURRENT ASSETS ACCOUNT TITLES (THREE ACCOUNTS):
     
             .  CASH IN BANK
             .  ACCOUNTS RECEIVABLE
             .  MERCHANDISE INVENTORY
  
          .  OWNER'S EQUITY ACCOUNT TITLES:
     
             .  RETAINED EARNINGS  for a corporation
                CAPITAL & DRAWING  for a partnership or proprietorship

       INCOME STATEMENT ACCOUNTS:
     
          .  SALES ACCOUNT TITLES (ONE ACCOUNT):
     
             .  SALES
     
     Use the following as your company's name:
     
           ABC WHOLESALE, INC. for a corporation
           ABC WHOLESALE       for a partnership or proprietorship
     
     Use  this  page  as a reference while you are answering questions that 
     will appear on your computer screen.  When CPA-LEDGER asks you for the 
     number of accounts for an account classification  that  is  not  shown 
     above  (i.e.,  any  account  classification other than CURRENT ASSETS, 
     RETAINED EARNINGS, CAPITAL,  DRAWING AND SALES),  your input should be 
     zero  (0).  If  you  do  not understand,  reread the "AN ILLUSTRATION" 
     section of this chapter. 
         
     One   more  point.   As  mentioned  at  the  start  of  this  chapter, 
     illustrated input to CPA-LEDGER is in lower case letters.  This is for 
     clarity of illustration only.  YOUR ALPHABETIC INPUT SHOULD ALWAYS  BE 
     IN  UPPER  CASE.  Your  printouts will look much better that way.  Use 
     
     
     
     
     
                                                                         27
     
     

     the "Caps-Lock" key on your keyboard. 
     
     As mentioned in Chapter 1,  you may use Option 1 more than  one  time.  
     If  you  want  to  use  Option  1  again,  refer  to Chapter 1 for the 
     procedure that you should follow. 
             
     Save the printout that will automatically come from Option 1. You will 
     be asked to use both while you read the next two chapters. 
     
     
                                                                      27-1
     
                                    CHAPTER 4
     
                             SETUP MENU  -  OPTION 2
     
          
     WHAT OPTION 2 IS USED FOR.
    
     During  the early stages of designing CPA-LEDGER,  we decided to use a 
     "computer trick" to solve a nagging problem.  Here is the problem  and 
     our solution: 
     
          .  Many CPA-LEDGER computer programs need information that  never 
             changes. 
     
                  .  An example is your business name,  which is  shown  at 
                     the  beginning  of every CPA-LEDGER printout.  Another 
                     example is the account number for beginning inventory, 
                     which is used while preparing the Income Statement. 

          .  The   problem  was  to  find  some   method  for  making  this 
             information available to CPA-LEDGER,  automatically,  whenever 
             needed,  without  having to ask you to enter the data over and 
             over again. 
     
          .  The "computer trick" is Option 2.  It is used for  permanently 
             storing  a  few  account numbers and your company name.  Then, 
             CPA-LEDGER  automatically  fetches  this   information,   when 
             needed, at a later time. 
     
          
     WHAT OPTION 2 ASKS FOR. 
     
     Option 2 asks you to enter, in the order listed, account numbers for: 
     
          .   Accounts  Receivable.
          .   Beginning  Inventory.
          .   Retained Earnings  for  corporations  or  capital  &  drawing 
              accounts for proprietorships & partnerships.
          .   Your business bank account(s). 
     
     CPA-LEDGER  also  asks  for your business name.  For partnerships,  it 
     also asks how you wish to distribute profits to the partners. 

     That's  all.  Once you enter this information,  CPA-LEDGER takes over.  
     The data is stored  and  is  automatically  made  available  to  other 
     computer programs, when needed. 
          
     OPTION 2 SEQUENCE OF EXECUTION.
     
     Read  Chapter  2 for the standard messages and reminders that are part 
     of Option 2. 
     
     
                                                                        28
     
     Use the printout from SETUP Option 1 to determine the account  numbers 
     that you will be asked to enter. 
     
     Option  2  asks  for  the  account  numbers  in  the same order as the 
     accounts are listed under "WHAT OPTION 2 ASKS FOR",  above.  After you 
     enter  an account number,  Option 2 fetches the account title from the 
     general ledger. 
          
     Then,  both the number and title are displayed for you to be sure that 
     you entered the correct information.  If you signal that your input is 
     correct,  the  system  moves to the next account.  Otherwise,  you are 
     asked to reenter a number for the current account. 
     
     Once you enter all of the account numbers,  the  last  input  is  your 
     company name. 
     
     There is no computer printout from Option 2. 
     
     
     AN ILLUSTRATION. 
     
     Following is an illustration.  Assume that: 
     
          .  Three (3) is the account number for Accounts Receivable. 

          .  The  general  ledger does not contain an account for Beginning 
             Inventory. 

          .  Forty seven (47) is the account number for Retained Earnings. 

          .  You have two  bank  accounts.  Their  general  ledger  account 
             numbers are 10 and 11. 
          
     Account  number  information  is  obtained  from  the  SETUP  Option 1 
     printout. 
     
     SETUP Option 1 input requests and your  assumed  responses  are  shown 
     below.  (Requests are in all upper case.  Responses are either numeric 
     or are in OTHER THAN upper case.) 
          

       ENTER THE ACCOUNT NUMBER FOR ACCOUNTS RECEIVABLE.        3
     
       ENTER THE ACCOUNT NUMBER FOR BEGINNING INVENTORY.        0
         (Note:  A message is displayed below this request,
                 explaining the rules for omitting the Cost
                 of Goods Sold section of the Income State-
                 ment.  See Appendix A.)

       ENTER THE ACCOUNT NUMBER FOR RETAINED EARNINGS.         47 
         (Note: CPA-LEDGER requires a valid account number.
                Zero (0) is not permitted.)
     

     
                                                                        29
     
       HOW MANY DIFFERENT CHECKING  ACCOUNTS  SHOULD  BE  INCLUDED  IN  THE 
       GENERAL  LEDGER?  CAREFULLY NOTE THAT THE REQUESTED INPUT IS FOR THE 
       NUMBER OF DIFFERENT CHECKING ACCOUNTS - NOT FOR THE NUMBER OF  BANKS 
       IN WHICH YOU HAVE THOSE CHECKING ACCOUNTS.  FOR EXAMPLE, IT YOU HAVE 
       TWO DIFFERENT CHECKING ACCOUNTS IN ONE BANK, YOUR INPUT SHOULD BE 2.  
       IF  YOU HAVE FIVE CHECKING ACCOUNTS IN TWO BANKS,  YOUR INPUT SHOULD 
       BE 5. 
     
       ENTER YOUR INPUT NOW.   2 
        (Note:  You may enter 0.)
     
       ENTER THE ACCOUNT NUMBER FOR BANK ACCOUNT NUMBER 1 OF 2.      10
        (Note: You must enter a valid account number.  Otherwise
               an error message appears.  The message allows you
               to start over (with the "2" above) or to reenter
               another account number.)
       ENTER THE ACCOUNT NUMBER FOR BANK ACCOUNT NUMBER 2 OF 2.      14
     
     
       ONE LAST INPUT IS  REQUIRED  BEFORE  PROCESSING  IS  COMPLETE.  THAT 
       INPUT  IS  THE  NAME OF YOUR COMPANY.  IF THE NAME IS `ABC COMPANY', 
       YOUR INPUT SHOULD BE `ABC COMPANY' (WITHOUT THE QUOTES). 
     
       ENTER THE NAME NOW.       ABC Wholesale, Inc.
          
     Note that zero (0) was  used  as  the  account  number  for  Beginning 
     Inventory.  Zero  is  the input when a requested account number is not 
     in your general ledger. 
     
     If you enter zero as an account number,  Option 2  requests  that  you 
     verify  that  the requested account in not in your general ledger.  If 
     you indicate that you made an input error,  Option 2 repeats the input 
     request  for  that  account.  Otherwise,  your  input  is  accepted as 
     correct. 
     
     As mentioned,  after you enter each of the account numbers (other than 
     a  zero),  Option  2 displays the title of that account as well as the 
     account number that you entered.  Then you are asked to either  accept 
     or  reject  your input.  Thus,  you are given a chance to recover from 
     input errors.  Also, before asking for the account number for Retained 
     Earnings,  the system reminds you that at least one Retained  Earnings 
     account should have been established under Option 1. 
     
     
     ERROR MESSAGES. 
     
     There  are several errors that you might make while entering data into 
     Option 2.  An example is an entry of 13 for a month.  The system  will 
     not  accept such input and will refuse to continue until you enter the 
     proper range of values. 
     
          
                                                                        30
     
     If  input  instructions  are not on the screen,  the system displays a 
     message explaining your error  and  requests  corrected  input.  These 
     input errors are: 

     
       ACCOUNT NUMBER IS TOO LARGE.
     
       If  you enter an account number that is not included in your general 
       ledger, Option 2 displays this message: 
     
       THE ACCOUNT NUMBER THAT  YOU  ENTERED  IS  TOO  LARGE.  THE  LARGEST 
       ACCOUNT  NUMBER  IN  THE  GENERAL  LEDGER  IS  (a  number is shown).  
       CONSULT A CURRENT LISTING OF THE ACCOUNTS AND TRY AGAIN.  PRESS  ANY 
       KEY TO CONTINUE. 
     
       After  you  press  a key,  Option 1 continues at the point where the 
       error was made. 

     
       AN INACTIVE ACCOUNT. 
     
       If you enter an inactive account,  the  following  appears  on  your 
       screen. 
     
       YOUR  INPUT IS FOR AN INACTIVE ACCOUNT.  ONLY ACTIVE ACCOUNTS CAN BE 
       PROCESSED AT THIS TIME.  CONSULT A PRINTOUT FROM  OPTION  1  OF  THE 
       SETUP MENU. 

       IF YOU MADE A MISTAKE IN OPTION 1 OF THE SETUP MENU AND THIS ACCOUNT 
       IS NOT INCLUDED IN THE GENERAL LEDGER PRINTOUT,  ANSWER `Y'  TO  THE 
       QUESTION THAT FOLLOWS AND YOU WILL BE RETURNED TO THE SETUP MENU FOR 
       USING  OPTION  1  TO  REENTER ALL OF YOUR ACCOUNT INFORMATION.  UPON 
       REENTERING YOUR ACCOUNT INFORMATION,  BE VERY  CAREFUL  AND  TRY  TO 
       AVOID MISTAKES. 
     
       DO YOU WISH TO RETURN TO THE SETUP MENU TO START AGAIN?
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.
        
     
       Option 2 continues processing, using your directions. 
     
     
       SAME ACCOUNT ENTERED MORE THAN ONE TIME. 
     
       If you duplicate your input,  Option  2  displays  another  message, 
       telling  you that you entered the same account number a second time. 
       The message gives you the option of continuing with Option 2  or  of 
       returning  to  the  SETUP  MENU  for reentering all of your input by 
       using Option 1 again.  If you opt  to  return  to  the  SETUP  MENU, 
       Option 2 first erases all of your data files, so you can start again 
       with Option 1. 
     
     
     
                                                                        31
     

     
     Practice.
     
     Use SETUP Option 2 to inform CPA-LEDGER of the account numbers and  of 
     your  business  name,  as explained under "WHAT OPTION 2 ASKS FOR" and 
     "AN ILLUSTRATION", above. 
     
     Use the printout from SETUP  Option  1  to  identify  the  appropriate 
     account  numbers.  The  general  ledger that you should use is the one 
     that you created under the Practice section of Chapter 3. 
     
     Save the practice general ledger.  You  will  need  it  while  reading 
     Chapter 5. 
     
     
  
                                                                        32
                                    CHAPTER 5
     
                         SETUP MENU  -  OPTIONS 3 AND 4
     
            
                      
     WHAT OPTION 3 IS USED FOR.
     
     SETUP  Option  3  is  for assigning opening balances to general ledger 
     accounts that you established by using SETUP Option 1 (Chapter 3). 
     
     Remember this.  SETUP  Option  1  starts  each  account  with  a  zero 
     balance.  Therefore,  it  is  NOT  necessary to assign a zero to those 
     accounts that should start with zero.  Generally,  these will  be  the 
     Income Statement revenue, expense, gain, and loss accounts. 
     
     
     WHAT OPTION 3 ASKS FOR. 
     
     Option  3,  as stated above,  asks for opening balances that should be 
     assigned to your general ledger accounts. 
     
     It is your responsibility to: 
     
          .  Identify the ACCOUNT  NUMBERS  for  accounts  that  should  be 
             assigned  an  opening balance.  Account numbers and titles are 
             shown on the SETUP Option 1 printout. 
     
          .  Calculate the opening balances. 
     
          .  Decide whether the  each  opening  balance  is  a  "debit"  or 
             "credit" amount. 
     
          
     A SUGGESTED PROCEDURE. 
     
     Before  using  Option 3,  use the SETUP Option 1 printout for making a 
     record of your opening balances.  Write the amounts  adjacent  to  the 
     appropriate account number.  That will facilitate your input. 
     
     After  recording amounts on the Option 1 printout,  double check to be 
     sure that the total value of all debits amounts equals the total value 
     of all credit amounts. 
     
     Save the Option 1 printout for future reference. 
    
     
     OPTION 3 SEQUENCE OF EXECUTION. 
     
     Read Chapter 2 for the standard messages and reminders that  are  part 
     of Option 3. 
                
     
                                                                        
                                                                        33
     

     Option  2  displays  the following instructions and headings to assist 
     you in entering your opening balances. 
     
     
     
       ENTER YOUR DEBIT AND CREDIT ENTRIES BELOW.  ALWAYS REMEMBER THAT: 

        1.  EACH DEBIT OR CREDIT REQUIRES  T-H-R-E-E  INPUTS  (THE  ACCOUNT 
            NUMBER; A `D' FOR `DEBIT' OR A `C' FOR CREDIT; AND THE AMOUNT). 
        2.  YOU  MUST PRESS THE RETURN KEY AFTER E-A-C-H OF THE THREE ABOVE 
            INPUTS. 
        3.  ALL  MESSAGES  WILL  APPEAR  IN  THE UPPER PART OF THE COMPUTER 
            SCREEN.
        4.  JOURNAL ENTRIES REJECTED IN THEIR ENTIRETY ARE TO BE REENTERED.
        5.  ENTER `Q` (FOR QUIT) AFTER ALL OPENING BALANCES ARE ENTERED.
        6.  YOUR COMPUTER'S CAPS-LOCK KEY MUST BE `ON'. 
     
     
                    ACCOUNT        D=DEBIT       DOLLAR
                    NUMBER         C=CREDIT      AMOUNT
     
     
     
     
     
     Enter your entries under the appropriate headings.  One line  is  used 
     for  each  debit  or  credit.  Up  to  30 debits and 30 credits may be 
     included in a single entry.  Option 3 has no limit on  the  number  of 
     entries. 
     

     AN ILLUSTRATION. 
     
     Assume that the following opening entry is to be made, using Option 3: 
     
        Account Number  3   Cash in Bank         $   5,000.10
        Account Number  7   Accounts Receivable     12,450.00
        Account Number 76      Retained Earnings               $ 17,450.10 
     
     
     The opening entry would be entered in Option 3 as follows:
     
     
                                                                        34
     
      

                  ACCOUNT        D=DEBIT        DOLLAR
                  NUMBER         C=CREDIT       AMOUNT
     
                    3               D           5000.10
                    7               D          12450.00
                    76              C          17450.10
                    Q
     
         
     Notice that account titles are not used.  Once  the  "Q"  is  entered, 
     Option  3 displays the entire opening entry,  with account numbers and 
     titles.  You are given an option of accepting or rejecting the  entry.  
     If  you  signal  Option  3  that  your input is correct,  and if debit 
     dollars equal credit dollars,  the entry  is  posted  to  the  general 
     ledger  and  is  printed.  Otherwise,  you  are  asked  to reenter the 
     incorrect entry, in correct form. 
     
     
     ERROR MESSAGES. 
     
     There are several errors that you might make while entering data  into 
     Option  3.  An example is 13 for a month.  If instructions for correct 
     input are already displayed on the computer screen,  Option 3 will not 
     continue until to enter the proper range of values. 
     
     If instructions are not on the screen,  Option 3 displays a message to 
     assist  you  in  determining  why  your  input  is  incorrect  and  in 
     determining the action that you should take.  These input errors are: 
     

       NO INPUT IS GIVEN FOR ANY ACCOUNTS. 
     
       In this event, Option 3 displays:
     
       YOU  DID  NOT ENTER ANY DEBITS OR CREDITS.  INPUT IS REQUIRED BEFORE 
       THE GENERAL LEDGER CAN BE POSTED.  RETURN TO THE SETUP  MENU,  RERUN 
       THIS OPTION,  AND ASK THAT INSTRUCTIONS BE DISPLAYED ON THE COMPUTER 
       SCREEN. 
     
       PRESS ANY KEY TO CONTINUE. 
     
       After you press a key, you are returned to the SETUP menu. 
     
     
       INCORRECT INPUT FOR DOLLAR VALUES. 
     
       See Chapter 6 (page 46) for this type of error and the message  that 
       is displayed. 
     
          
                                                                        35

       ENTERING THE SAME ACCOUNT NUMBER MORE THAN ONE TIME.
     
       If you duplicate your input, this message appears: 
     
        THE  ACCOUNT NUMBER (NBR.  a number is shown) THAT YOU SELECTED FOR 
        POSTING WAS ASSIGNED AN OPENING BALANCE DURING THIS OR  A  PREVIOUS 
        SESSION.  ONLY O-N-E OPENING BALANCE PER ACCOUNT IS PERMITTED. 
     
        PRESS ANY KEY TO CONTINUE. 
     
       After you press a key, Option 3 resumes at the point where the error 
       was made. 
          
       AN INACTIVE ACCOUNT IS SELECTED. 
     
       For this type of error, Option 3 displays: 
     
        YOU  SELECTED  AN INACTIVE ACCOUNT FOR POSTING.  THE ACCOUNT NUMBER 
        THAT YOU SELECTED IS NUMBER (a number is shown).  YOU WILL  NOT  BE 
        ALLOWED  TO ASSIGN AN OPENING BALANCE TO THIS ACCOUNT BECAUSE IT IS 
        CLASSIFIED AS INACTIVE.  REFER TO THE  PRINTOUT  OF  THE  CHART  OF 
        ACCOUNTS  FROM  SETUP  OPTION  1.  IF YOU DID NOT MAKE A MISTAKE IN 
        YOUR INPUT,  RETURN TO THE SETUP MENU AND SELECT ALL OPTIONS AGAIN, 
        STARTING WITH OPTION 1. 
     
        DO  YOU  WISH  TO RETURN TO THE SETUP MENU?  ENTER `Y' FOR `YES' OR 
        `N' FOR `NO'. _ 
     
       If  your answer is `Y',  you will be returned to the SETUP menu.  If 
       you answer `N',  Option 3 resumes at the point where the input error 
       was made. 
          
       ENTERING AN INCORRECT DEBIT OR CREDIT INDICATOR. 
     
       While  using  SETUP  Option  1,  you assigned a "debit balance" or a 
       "credit balance" for each account in the general ledger.  Except for 
       RETAINED EARNINGS and BANK ACCOUNTS,  this  account balance must  be 
       maintained  while  using  Option  3.  That  is,  if you indicated to 
       Option 1 that Cash  on  Hand  has  a  "debit  balance",  any  amount 
       assigned to Cash on Hand in Option 3 must be a debit amount.  If you 
       violate this rule, Option 3 displays: 
     
        YOUR OPENING ENTRY IS INCORRECT.  YOU REQUESTED TO DEBIT  A  CREDIT 
        BALANCE ACCOUNT OR TO CREDIT A DEBIT BALANCE ACCOUNT.  ACCORDING TO 
        YOUR INPUT, YOU WANT TO (debit or credit is shown) THE ACCOUNT (the 
        account  title  is shown).  NONE OF YOUR ENTRY WILL BE POSTED UNTIL 
        YOU CORRECT THE  PREVIOUS  DEBIT  OR  CREDIT.  WOULD  YOU  LIKE  TO 
        REENTER  THIS  ENTIRE  ENTRY FROM THE BEGINNING?  IF YOUR ANSWER IS 
        `N' FOR `NO',  YOU WILL BE ASKED TO REENTER THIS DEBIT  OR  CREDIT, 
        STARTING WITH THE   A-C-C-O-U-N-T   N-U-M-B-E-R. 
     
        ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _ 
     
     
         
                                                                        36
     

     If you answer `N',  you will  be  requested  to  reenter  the  account 
     number.  If  you  answer `Y',  you will be asked to reenter the entire 
     entry, from the beginning. 
          
     PRINTED OUTPUT.
     
     Using  the  above illustration,  the printed output from Option 3 will 
     look like this:  
                                                                    
                                                                PAGE      1 
                                                           RUNDATE 01/01/85 
     
     
                               ABC WHOLESALE, INC. 
     
                         OPENING GENERAL LEDGER ENTRIES 
            
     ACCOUNT
     NUMBER      ACCOUNT                            DEBIT            CREDIT
     
       3         CASH IN BANK                    5,000.10 
       7         ACCOUNTS RECEIVABLE            12,450.00
      76           RETAINED EARNINGS                              17,450.10
                      OPENING ENTRY
          
     Practice.
     
     Get the printout that you obtained while following the instructions in 
     the practice section of Chapter 3.  Record these  dollar  amounts,  on 
     the printout, for the accounts identified below: 
          

          .  CASH IN BANK                    $  1,350.00    DEBIT
          .  ACCOUNTS RECEIVABLE                4,000.65    DEBIT
          .  MERCHANDISE INVENTORY              8,400.00    DEBIT
          .  RETAINED EARNINGS                 13,750.65    CREDIT
             (Or, to the appropriate capital account if you have the 
             partnership or proprietorship version of CPA-LEDGER)

     Use  SETUP  Option  3  to  record the above data as an opening general 
     ledger entry.  Get the appropriate account numbers from the  Option  1 
     printout. 
     
     This  chapter  completes the discussion of the SETUP menu.  You should 
     erase your data disk (the one that you created in Chapter 3 - not  the 
     one  received  with  CPA-LEDGER).  We will not request that you use it 
     again. 
    
     The remaining chapters discuss the DAILY MENU.  To get ready  for  the 
     DAILY MENU, copy  the practice  general  ledger (on your Documentation 
       

     
                                                                       36-1
     

     disk,  files with an extension of .FIL) onto (1) your hard disk (where 
     you  have  CPA-LEDGER)  if  you  have  the  hard  disk only version of 
     CPA-LEDGER, or (2) one of your own floppy disks if you have either the 
     hard  disk-floppy  disk  version  or  floppy  disk  only  version   of 
     CPA-LEDGER. 
     
     To copy the practice general ledger:
     
      .  Follow  this  procedure  if you have the hard disk only version of 
         CPA-LEDGER: 
     
          .  Make sure you are in the directory where CPA-LEDGER is stored.
          .  Place  the Documentation Disk with the practice general ledger 
             (the disk with files that have an extension of .FIL) into  the 
             A: drive. 
          .  Give this command - COPY A:*.FIL C:/V
     
      .  Follow this procedure if you have either the hard disk-floppy disk 
         version or the floppy disk only version of CPA-LEDGER: 
     
          .  If you have two floppy disk drives:
     
              .  Place the Documentation Disk  with  the  practice  general 
                 ledger  (the  disk  with  files  that have an extension of 
                 .FIL) in the B: drive. 
              .  Place one of your own blank disks into the A: drive.
              .  Give this command - COPY B:*.FIL A:/V
       
            .  If you have only one floppy disk drive:
     
              .  Place the Documentation Disk  with  the  practice  general 
                 ledger  (the  disk  with  files  that have an extension of 
                 .FIL) in the A: drive. 
              .  Make sure you have one of your own blank  disks  ready  to 
                 receive the files that are about to be copied. 
              .  Give this command - COPY A:*.FIL B:/V
     
              You  will  be required to swap the disks several times as the 
              copying proceeds. 
            






































```
{% endraw %}

## CHP6-7.TXT

{% raw %}
```
 
 
                                                        

                                                                        37
                                    CHAPTER 6        
    
                              DAILY MENU - OPTION 1
          
     
     
     As mentioned in Chapter 1,  CPA-LEDGER has two main menu options - the 
     SETUP  menu  and  the  DAILY  menu.  The SETUP menu and its processing 
     options were discussed in Chapters  3  through  5,  except  for  SETUP 
     Option  4  which  is  discussed  in  Chapter 16.   Beginning with this 
     chapter, we will take up the DAILY menu. 
     
     Refer to Chapter 1 for an overview of the DAILY menu.  Also  refer  to 
     Chapter 2 for standard message and reminders that are designed to help 
     you use CPA-LEDGER.  For brevity, these standard message and reminders 
     will not be repeated. 
          
     THE DAILY MENU.
     
     Chapter 1 tells you how to use  PC-DOS  for  loading  BASICA  and  for 
     starting  the  DAILY  menu.  When  the  menu  appears on your computer 
     screen, it will look like this: 
     
     
                                   CPA-LEDGER          
     
                                   DAILY MENU
               
     
     
       SELECT ONE OF THE OPTION NUMBERS BELOW.
     
     
         1.  ENTER NEW TRANSACTIONS IN THE GENERAL LEDGER - NOT AUTOMATIC.
             SEE NBR. 10.
         2.  PRINT AN UNADJUSTED TRIAL BALANCE.
         3.  PRINT FINANCIAL STATEMENT(S).
         4.  PRINT TRANSACTIONS THAT HAVE BEEN POSTED TO THE GENERAL LEDGER.
         5.  PRINT GENERAL LEDGER ACCOUNTS WITH DETAILS OF ALL  DEBITS  AND 
             ALL CREDITS. 
         6.  PRINT BANK DEPOSITS AND CHECKS WRITTEN (CHECK REGISTER).
         7.  PRINT GENERAL LEDGER ACCOUNTS AND THEIR BALANCES.
         8.  ADD NEW ACCOUNTS TO THE GENERAL LEDGER.
         9.  PRINT A POST-CLOSING TRIAL BALANCE.
        10.  ENTER NEW TRANSACTIONS IN THE GENERAL LEDGER - AUTOMATIC.
        11.  STOP ALL CPA-LEDGER PROCESSING AND RETURN CONTROL TO PC-DOS.
     
     
       WHICH OPTION NUMBER DO YOU SELECT?  __
          
       (C) COPYRIGHT 1986, 1988, 1989 TRONOLONE & FOSTER, PC
     
     
     
                                                                        38
          
     WHAT OPTION 1 IS USED FOR.
     
     Option 1 is used for:
     
          .  Entering your day-to-day financial transactions in the general 
             ledger, and 
     
          .  Entering  any  adjusting  entries  that  are  needed  prior to 
             preparing the financial statements. 
     
     Read  Appendix  D  and  Appendix  E  before  you  use  Option  1.  The 
     Appendices  contain an overview of the accounting process and identify 
     procedures that will help ensure that your account balances  are  kept 
     current and accurate. 
     
     as indicated above, Option 1 may be used to enter adjusting entries in 
     the general ledger prior to preparing financial  statements.  Consider 
     using  the following procedures IF YOU MAKE ADJUSTING ENTRIES prior to 
     preparing the financial statements.  (There is a way to  make  monthly 
     adjustments,  without necessity of the following procedures.  However, 
     the details are beyond the scope of this User's Manual.  Se your local 
     CPA.) 
     
          . Return  to PC-DOS and make a copy onto another  disk  the  data 
            files that are on your data disk.  Use the COPY command to make 
            the  copy.  Your  IBM Disk Operating System Manual explains how 
            to use COPY. 
     
          . Return to  BASICA and then to the DAILY menu of CPA-LEDGER,  as 
            explained in Chapter 1. 
     
          . Use  Option 1 to record the adjustments.  Prepare the financial 
            statements.  Then, erase the data disk that you used to prepare 
            the   financial  statements  (the  disk  has  been  permanently 
            altered).  Finally, copy the data files without the adjustments 
            to the disk that you erased.  This will restore the data  files 
            to their form prior to preparing the financial statements. 
        
     Please remember this - DO NOT USE OPTION 1 TO ENTER  CLOSING  ENTRIES! 
     CPA-LEDGER DOES THAT FOR YOU,  AUTOMATICALLY.  USE CPA-LEDGER,  OPTION 
     1,  FOR RECORDING DAILY TRANSACTIONS AND FOR ADJUSTING ENTRIES,  ONLY.  
     CPA-LEDGER AUTOMATICALLY PREPARES THE CLOSING ENTRIES.  
     
          
     OPTION 1 SEQUENCE OF EXECUTION.
     
     Option 1 starts with this message:
       
       WOULD  YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM TO BE 
       DISPLAYED ON THE COMPUTER SCREEN? 
     
       ENTER `Y' OR `YES' OR `N' FOR `NO'.   _
     

      
                                                                        39
     
      

     If your answer is `N' (for `NO'),  Option 1 asks you to start entering 
     your daily transactions or adjustments.  See the paragraph, following, 
     entitled,  "ENTERING  YOUR  DAILY  TRANSACTIONS OR THE ADJUSTMENTS FOR 
     FINANCIAL STATEMENTS." 
     
     If your answer is `Y' (for  `YES'),  the  following  appears  on  your 
     computer screen: 
          
       THIS  COMPUTER  PROGRAM  IS  TO  BE  USED  ONLY FOR POSTING DAILY OR 
       ADJUSTING ENTRIES TO  THE  GENERAL  LEDGER  ACCOUNTS.  EACH  GENERAL 
       LEDGER  ACCOUNT  TO  BE  POSTED M-U-S-T (REPEAT,  MUST) BE AN ACTIVE 
       ACCOUNT.  YOU CAN DETERMINE WHICH ACCOUNTS ARE ACTIVE  BY  RETURNING 
       TO  THE  DAILY  MENU,  SELECTING  OPTION 7,  AND SPECIFYING THAT ALL 
       ACCOUNTS BE PRINTED.  IF YOU DESIRE TO RECLASSIFY  AN  ACCOUNT  FROM 
       INACTIVE  TO  ACTIVE  STATUS  (SO THAT YOU WILL BE ALLOWED TO POST A 
       TRANSACTION TO IT), YOU SHOULD USE OPTION 8 FROM THE DAILY MENU. 
     
    
       DO YOU WISH TO CONTINUE WITH THIS SESSION? 
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
          
     If your answer is `N' (for `NO'),  Option 1 stops processing  and  you 
     will be returned to the DAILY menu. 
     
     If  your answer is `Y' (for `YES'),  the following will appear on your 
     computer screen: 
         
       THE COMPUTER  IS  READY  TO  START  ACCEPTING  YOUR  GENERAL  LEDGER 
       ENTRIES. 
     
       EACH ENTRY REQUIRES AT LEAST ONE DEBIT AND ONE CREDIT. 
     
       EACH  DEBIT  OR  CREDIT,  IN TURN,  REQUIRES INPUT UNDER DESCRIPTIVE 
       COLUMN HEADINGS THAT WILL APPEAR ON THE COMPUTER SCREEN. 
     
       TO ASSIST YOU BRIEF INSTRUCTIONS WILL BE DISPLAYED ABOVE THE  COLUMN 
       HEADINGS. 
     
       AFTER  EACH CREDIT TO A BANK ACCOUNT,  THE COMPUTER WILL ASK YOU FOR 
       THE PAYEE`S NAME.  THE COMPUTER WILL PROMPT YOU FOR THIS INPUT. 
     
       ALL MESSAGES WILL  APPEAR  ABOVE  THE  COLUMN  HEADINGS.  THE  ERROR 
       MESSAGES ARE SELF EXPLANATORY. 
     
     
     (Continued on next page.) 
     
     
     
                                                                        40
     

       PRESS THE RETURN KEY AFTER YOU ENTER EACH REQUESTED INPUT.
     
       NEVER, UNDER A-N-Y CIRCUMSTANCES, INTERRUPT THIS PROGRAM BY PRESSING 
       THE `Ctrl-Break' KEYS ON YOUR KEYBOARD! 
     
       PRESS ANY KEY TO CONTINUE. 
      
     After  you  press  a  key,  Option  1 is ready to start accepting your 
     general ledger entries. 
     
     
     ENTERING YOUR DAILY TRANSACTIONS  OR  THE  ADJUSTMENTS  FOR  FINANCIAL 
     STATEMENTS. 
     
     The  following  will  appear  on your computer screen when Option 1 is 
     ready to accept your general ledger entries: 
     
     
     
     EACH DEBIT OR CREDIT ENTRY REQUIRES INPUT IN THE COLUMNS  BELOW.
     1. `DATE' COLUMN IS FOR TRANSACTION DATE. USE FORMAT YYMMDD-6/30/84=063084.
     2. `POSTING REFERENCE' COLUMN IS FOR FUTURE REFERENCE TO SUPPORTING   
        DOCUMENTATION.  EXAMPLES ARE SALES INVOICE NUMBER AND PURCHASE     
        INVOICE NUMBER.
     3. ENTER  `S'   (FOR SAME)   TO USE THE PREVIOUS DATE OR POSTING 
        REFERENCE.
---->4. ENTER `?' FOR DR/CR TO SUM ALL PREVIOUS DR/CR IN AN ENTRY - AUTO 
        TOTAL.
     5. ENTER `Q' (FOR QUIT) FOR ACCOUNT NUMBER WHEN JOURNAL ENTRY IS 
        COMPLETE.
     6. YOUR COMPUTER'S CAPS-LOCK KEY MUST BE `ON'.
       *********************************************************************    
                ACCOUNT   D=DEBIT      DOLLAR        POSTING       CHECK
        DATE    NUMBER    C=CREDIT     AMOUNT        REFERENCE     NUMBER 
     
      (Reader, to make sure you don't misunderstand - the following is also 
      part of  the  screen.) 
      *************************************************************************
      *  Read this before you begin.  It is very important that you enter the *
      *  correct date for each transaction.  The date that you enter is  used *
      *  to update a data base that accumulates transactions according to the *
      *  date  that  they occurred.  If you use an incorrect date,  your data *
      *  base will be updated  for  the  improper  period  and  your  monthly *
      *  financial  statements  will be incorrect.  Follow rule #1 at the top *
      *  of the screen for the date format.  PRESS ANY KEY TO CONTINUE.       *
      ************************************************************************* 
     
     After you press a key,  the message (immediately above) disappears and 
     CPA-LEDGER begins to ask for your input. 
     
     
          
                                                                         41
     

     Notice the instructions that appear above  the  column  headings.  You 
     will  enter  each  debit  or credit under the columns shown - with one 
     line being used for each debit or credit.  When you enter  an  account 
---->number,  the account's title appears at the bottom of the screen.  The 
     last two column headings (POSTING REFERENCE and CHECK  NUMBER)  appear 
     only when needed.  Also,  as you enter the dollar amounts,  the totals 
     of the debits and credits also appear at the bottom of the screen. 
     
          .  The POSTING REFERENCE column appears for the  first  debit  or 
             credit   of  each  general  ledger  entry.   After  that,   it 
             disappears. 
     
          .  The CHECK NUMBER column appears each time that  you  credit  a 
             bank account.  After entering the check number,  the following 
             message appears immediately below the credit entry: 
     
              ENTER THE PAYEE FOR THE ABOVE CHECK.  _______________________
     
            After you enter the payee,  the CHECK  NUMBER  column  and  the 
            message disappear. 
     
---->After you complete your entry for each  debit  or  credit,  CPA-LEDGER 
     asks you if all information on that line of information is correct. It 
     does that by displaying "OK?  (Y/N)" in the extreme right side of  the 
     screen.  If  you  enter  "Y",  the  system  asks for the next debit or 
     credit.  If you enter "N",  however,  your erroneous input  is  erased 
     from  the  screen  (and  ignored  by  CPA-LEDGER) and you are asked to 
     reenter that line of information. 
     
     This  process  continues  until you have completed your general ledger 
     entry.  As indicated in  instruction  5  above  the  column  headings, 
     signal the end of a complete general ledger entry by entering a single 
     `Q' (for QUIT) in the ACCOUNT NUMBER column. 
     
---->Each  general ledger entry may contain up to 30 debits and 30 credits.  
     If you exceed either of  those  limits,  the  following  message  will 
     appear on your computer screen: 
          
       MAXIMUM  OF  30 DEBIT OR 30 CREDIT POSTINGS EXCEEDED.  REDESIGN YOUR 
       ENTRY SO THAT THE MAXIMUMS WILL NOT BE EXCEEDED.  NONE OF THIS ENTRY 
       WILL BE POSTED UNTIL YOU REDESIGN THE ENTRY. 
     
       PRESS ANY KEY TO CONTINUE.
          
     After you press a key,  Option 1 returns to that part of the  computer 
     program  that  gets  ready for the next general ledger entry.  See the 
     paragraph,  following,  entitled "GETTING READY FOR THE  NEXT  GENERAL 
     LEDGER ENTRY." 
     
     
                                                                        42

     
     HOW TO DISCONTINUE INPUT FOR A GENERAL LEDGER ENTRY.
     
     A single `Q' (for QUIT) in the ACCOUNT NUMBER column is used to signal 
     that a general ledger entry is complete. 
     
     After you enter the `Q', the following request is displayed: 
     
       ENTER EXPLANATION FOR THE ABOVE ENTRY. ______________________________
     
               
     After you enter the explanation, Option 1 displays your entire general 
     ledger  entry  for  your  review  and approval.  The entry will not be 
     posted to the general ledger unless you approve it.  The  display  and 
     approval process is explained below. 
    
     
     REVIEWING AND APPROVING YOUR GENERAL LEDGER ENTRY. 
     
     Option  1  gives you a chance to approve each entry before posting the 
     general ledger.  The approval process starts with this message: 
      
     
       YOUR INPUT WILL BE DISPLAYED ON THE SCREEN SO THAT  YOU  MAY  VERIFY 
       IT.  (FOR  YOUR INFORMATION,  ACCOUNT TITLES ASSIGNED TO THE ACCOUNT 
       NUMBERS THAT YOU INPUT WILL ALSO BE DISPLAYED.) CAREFULLY  NOTE  ANY 
       ERRORS SO THAT INCORRECT DATA WILL NOT BE POSTED TO THE ACCOUNTS. 
     
       PRESS ANY KEY TO CONTINUE. 
       
     
     After  you  press  a key,  the following appears on your screen.  (The 
     example given is for debit entries.  A separate  screen  is  used  for 
     credits, in the same format.) 
     

       YOUR DEBIT ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.  THE LIST FOR 
       DEBIT ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.  PRESS ANY KEY TO 
       CONTINUE. 
     
     

               ACCOUNT                             DOLLAR   POSTING    CHECK
       DATE    NUMBER    ACCOUNT TITLE             AMOUNT   REFERENCE  NUMBER
     
     
     
     Each  debit  and credit entry that you entered will be displayed under 
     the columns.  After the display of both debits and credits is complete 
     and after you have pressed a key to continue,  the following  question 
     will appear on your computer screen: 
     
     
      
                                                                        43
     

       DO  YOU  DESIRE  TO  POST THE DEBIT AND CREDIT ENTRIES THAT YOU JUST 
       REVIEWED? 
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
        
     If you notice a mistake and answer `N' (for `NO'), Option 1 erases the 
     entry from its memory and returns to the section of the  program  that 
     gets  ready  for  the  next  general ledger entry.  See the paragraph, 
     following, entitled "GETTING READY FOR THE NEXT GENERAL LEDGER ENTRY." 
     
     If you answer `Y' (for `YES'),  Option 1 automatically makes sure that 
     the  total  value of debits equals the total value of credits.  If the 
     debits and credits agree,  your entry is posted to the general ledger.  
     
---->There is a process that CPA-LEDGER follows that you should know about.  
     It you enter `Y' to the above inquiry and debit amounts  equal  credit 
     amounts,  CPA-LEDGER posts to TWO data bases, (1) the master data base 
     used to prepare cumulative financial statements and (2)  a  data  base 
     use  for  accumulating  information for monthly income statements.  If 
     the data base for monthly financial statements  become  unusable,  the 
     following message will appear: 
     
       PROCESSING ERROR.  MONTHLY DATA BASE RECORD NOT  FOUND.  DISCONTINUE 
       YOUR  USE  OF  CPA-LEDGER  UNTIL  YOU  HAVE  CONTACTED JIM FOSTER AT 
       (703)569-2254.  PROCESSING WILL CONTINUE TO UPDATE THE  MASTER  DATA 
       BASE FOR THIS TRANSACTION.  WHEN YOU ARE ASKED, TELL CPA-LEDGER THAT 
       YOU DO NOT WISH TO POST ANY ADDITIONAL TRANSACTIONS.  THEN, CALL (OR 
       WRITE IF YOU PREFER) JIM FOSTER AND GIVE HIM THIS MESSAGE: 
     
       A message for Jim appears here.
       
       PRESS ANY KEY TO CONTINUE.
     
     As  the  message  states,  you should discontinue using CPA-LEDGER and 
     contact Jim Foster.  (You should rarely, if ever, see the message - it 
     will appear only if CPA-LEDGER notices that notices that the data base 
     is not usable.   The message is listed in this manual so that you will 
     know  what to do - contact Jim Foster.  In the meantime,  be sure that 
     you keep frequent backups of your data files (those with an  extension 
     of .FIL).  
     
     
     
                                                                        44


     Continuing,  if the debits and credits do  NOT  agree,  the  following 
     message appears on your screen: 
          
       FOR THE ENTRY THAT YOU JUST REVIEWED,  THE TOTAL VALUE OF THE DEBITS 
       DO  NOT EQUAL THE TOTAL VALUE OF THE CREDITS.  OR,  YOU ENTERED ONLY 
       DEBITS OR YOU ENTERED ONLY CREDITS,  WITH ZERO VALUES.  IF YOU ENTER 
       ZEROS  AS  VALUES,  THERE MUST BE AT LEAST ONE DEBIT AND ONE CREDIT.  
       NONE OF THE DEBITS OR CREDITS FOR THIS ENTRY WILL BE POSTED  TO  THE 
       GENERAL  LEDGER.  CAREFULLY  REVIEW THE DEBIT AND CREDIT AMOUNTS AND 
       REENTER THE ENTIRE ENTRY FROM THE BEGINNING.  THE TOTAL  VALUES  ARE 
       AS FOLLOWS: 
     
          TOTAL VALUE OF DEBITS             = $
          TOTAL VALUE OF CREDITS            = $
     
       THE COMPUTER IS PAUSING FOR YOU TO REVIEW YOUR SOURCE DOCUMENTATION.  
       DETERMINE WHETHER YOUR DOCUMENTATION OR  YOUR  INPUT  IS  IN  ERROR. 
       REMEMBER,  NO  DEBITS OR CREDITS OF THIS ENTRY WILL BE POSTED TO THE 
       GENERAL LEDGER.  REENTER THIS ENTRY EITHER DURING THIS SESSION OR AT 
       A LATER TIME.  IN    E-I-T-H-E-R    CASE,  C-A-R-E-F-U-L-L-Y    MARK 
       THE ENTRY SO THAT YOU WILL REMEMBER THAT IS IT TO BE REENTERED. 
     
       PRESS ANY KEY TO CONTINUE.
     
          Note:  If you are wondering why provision was made  for  entering 
          zeros  as  values,  it  is  to  allow you to enter your cancelled 
     N    checks.  Just make you entry in normal fashion,  with  zeros  for 
     E    values,  and  a credit to the bank account.  Then enter the check 
     W    number and payee.  Presto!  You have a record of  your  cancelled 
          check.   Another   suggestion,   use   "C-CHK"  for  the  posting 
          reference.  Then you can use DAILY Menu Option  4  to  print  ALL 
          cancelled checks, whenever you wish. 
     
     After you press a key,  Option 1 erases the erroneous entry  from  its 
     memory and proceeds to get ready for the next general ledger entry, as 
     discussed in the paragraph that follows. 
     
     

     GETTING READY FOR THE NEXT GENERAL LEDGER ENTRY. 
     
     After  each  general  ledger entry is processed,  Option 1 asks if you 
     wish to enter additional debits and credits, with this question: 
     
       DO YOU DESIRE TO ENTER ADDITIONAL DEBITS AND CREDITS?
     
       ENTER `Y' OR `YES' OR `N' FOR `NO'.  _
           
     If  you answer `N' (for `NO'),  the number and value of entries posted 
     
     

     
                                                                         45
     

     to the general ledger are printed on the printer.  Then,  you will  be 
     returned to the DAILY menu. 
     
     If you answer is `Y' (for `YES'),  you will be asked to enter the next 
     series of debits and  credits.  See  the  paragraph,  above,  entitled 
     "ENTERING  YOUR  DAILY  TRANSACTIONS  OR THE ADJUSTMENTS FOR FINANCIAL 
     STATEMENTS." This process will be repeated until you answer  `N'  (for 
     `NO') to the above question. 
          
     ERROR MESSAGES.
     
     Option 1 monitors your input, as much as possible, to help ensure that 
     your  general  ledger entries are correct.  Some of the error messages 
     were discussed above.  Others are discussed below. 

     In  some  cases,  the system will merely refuses to accept your input.  
     An example is where you enter a date in the improper format -  perhaps 
     you  enter  20  for the month.  In these cases,  instructions for such 
     input are already displayed on the screen and,  as stated,  the system 
     merely refuses to proceed. 
     
     In other cases,  however,  you will need a more detailed  explanation. 
     Refer  to  the paragraph entitled "ENTERING YOUR DAILY TRANSACTIONS OR 
     THE ADJUSTMENTS FOR FINANCIAL STATEMENTS" and get the column  headings 
     firmly  in  mind.  The  paragraphs  that  follow  inform you what will 
     happen if you enter incorrect data in the columns.  In each case, when 
     an error message is  indicated,  the  instructions  above  the  column 
     headings will disappear and the error message will be displayed. After 
     that,  if  appropriate,  the  instructions  will reappear as they were 
     before they disappeared. 
     
     
     INACCURATE ENTRY IN THE DATE COLUMN.  
     
     If you enter an incorrect date in the DATE column, the system will not 
     proceed until you do make an entry, in the proper format. 
     
      
     
                                                                        45
     

     INACCURATE ENTRY IN THE ACCOUNT NUMBER COLUMN.
     
     If  you enter an INACTIVE account number in the ACCOUNT NUMBER column, 
     the following error message will appear above the column headings: 
     
          
       YOU SELECTED AN INACTIVE ACCOUNT NUMBER  FOR  POSTING.  THE  ACCOUNT 
       NUMBER  THAT  YOU  SELECTED  IS NUMBER (a number is shown.) BEFORE A 
       GENERAL LEDGER ACCOUNT CAN BE POSTED, IT M-U-S-T FIRST BE CLASSIFIED 
       AS AN ACTIVE ACCOUNT BY USING OPTION 8 OF THE DAILY MENU. OTHERWISE, 
       THE ENTRY WILL NOT BE PERMITTED. 
     
       DO YOU WISH TO RETURN TO THE DAILY MENU? 
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO.'   _
     

     
     If you answer `N' (for `NO'),  you will be allowed  to  continue  with 
     your  general ledger entry.  If you enter `Y' (for `YES'),  processing 
     will stop and you will be returned to the DAILY menu. 
     
     If you enter an account number that is too large in the ACCOUNT NUMBER 
     column,  the following error message  will  appear  above  the  column 
     headings: 
          
       YOUR INPUT FOR THE ACCOUNT NUMBER IS TOO LARGE.  THE LARGEST ACCOUNT 
       NUMBER  IN THE GENERAL LEDGER IS ACCOUNT NUMBER (a number is shown.) 
       IF DESIRED YOU CAN DETERMINE THE  ACCOUNT  NUMBERS  IN  THE  GENERAL 
       LEDGER  BY  SELECTING OPTION 7 IN THE DAILY MENU AND SPECIFYING THAT 
       ALL ACCOUNTS BE PRINTED. 
     
       PRESS ANY KEY TO CONTINUE.
         
     After you press a key,  you will be  allowed  to  continue  with  your 
     general ledger entry. 
     
     
     INACCURATE ENTRY IN THE D=DEBIT / C=CREDIT COLUMN.
     
     If  you  enter anything other than a `C ',  `D' or `?' in this column, 
     you will be asked to reenter your input.  (Use `?' as the final  input 
  N  for  journal  entry and all previous debits and credits will be summed 
  E  and the final debit or credit will be automatic - a  handy  device  if 
  W  you  don't  like  to  add  debits  or  credits for the final balancing 
     amount.) 
     
     
     
                                                                        46
     

     INACCURATE ENTRY IN THE DOLLAR AMOUNT COLUMN.
     
     If  you  make  an  incorrect  entry in this column (such as alphabetic 
     characters, blanks, or a misplaced decimal point), the following error 
     message will appear above the column headings: 
          
     
       YOUR  INPUT  FOR  THE  DOLLAR  AMOUNT  IS  INCORRECT.   THE  O-N-L-Y 
       ALLOWABLE CHARACTERS FOR THE DOLLAR AMOUNT ARE ZERO (0) THROUGH NINE 
       (9)  AND A DECIMAL POINT TO SEPARATE DOLLARS AND CENTS.  EXAMPLES OF 
       CORRECT INPUT, FOR EITHER DEBITS OR CREDITS, ARE SHOWN BELOW. 
     
        0 .01  1  1.00  1.01  126  126.00  126.59  1648  1648.00  1648.29
     
       THE MINIMUM DOLLAR AMOUNT FOR ANY ONE DEBIT OR CREDIT IS 0
       THE MAXIMUM DOLLAR AMOUNT FOR ANY ONE DEBIT OR CREDIT IS 9999999.99.
     
       PRESS ANY KEY TO CONTINUE.
          
     After you press a key,  you will be  allowed  to  continue  with  your 
     general ledger entry. 
     
          
     INCORRECT ENTRY IN THE POSTING REFERENCE COLUMN.
     
     Input is required for the posting reference.  Unless  you  enter  some 
     combination  of  characters  (alphabetic  or  numeric),  Option 1 will 
     refuse to continue until you do make an entry. 
     
     Read  Appendix  E,  which  contains  some  suggestions  on  systematic 
     procedures  for  using  posting  references.  Posting  references  are 
     IMPORTANT (especially with DAILY Option 4); so, please do not overlook 
  R  their  significance.   A  "trick"  with  posting  references  -  using 
  E  standard   posting   references   (such  as  "LOAN  1")  for  standard 
  A  transactions (such as for an important loan) will  allow  you  to  use 
  D  DAILY  Option  4  to print ALL of such transactions,  anytime that you 
     wish.  Neat, eh!  Carefully plan your posting reference scheme. 
     
     INCORRECT ENTRY IN THE CHECK NUMBER COLUMN OR FOR THE PAYEE.
     
     Input  is  required for the CHECK NUMBER and for the PAYEE anytime you 
     credit  a  bank  account.   If  you   do   not   enter   this   input, 
     CPA-LEDGER refuses to continue until you do make an entry.  Your input 
     can be any combination of alphabetic or numeric characters. 
     
     
     
                                                                        47

     AN ILLUSTRATION.
     
     Assume  that  the  following  entry  is to made in the general ledger, 
     using Option 1,  for sales  made  on  February  16,  1985.  The  sales 
     transaction  is  recorded  on  an  internal  company DAILY CASH REPORT 
     number DCR 36.  (Appendix E illustrates a form that you  may  use  for 
     your DAILY CASH REPORT.) 
     
       Account Number 3      Cash in Bank         $ 5,000.10
       Account Number 11     Accounts Receivable   12,450.00
       Account Number 171       Sales                          $17,450.10
     
     
     After  the  CPA-LEDGER  briefing,  the  following  will appear on your 
     computer's screen.  The entry to record the transaction is shown below 
     the column headings. 
                   
          
    EACH  DEBIT  OR  CREDIT  ENTRY  REQUIRES INPUT IN THE COLUMNS BELOW. 
    1. `DATE' COLUMN IS FOR TRANSACTION DATE. USE FORMAT YYMMDD-6/30/84=063084.
    2. `POSTING REFERENCE' COLUMN IS FOR FUTURE REFERENCE TO SUPPORTING   
       DOCUMENTATION.  EXAMPLES ARE SALES INVOICE NUMBER OR PURCHASE      
       INVOICE NUMBER.
    3. ENTER  `S'   (FOR SAME)   TO USE THE PREVIOUS DATE OR POSTING        
       REFERENCE.
    4. ENTER `?' FOR DR/CR TO SUM ALL PREVIOUS DR/CR IN AN ENTRY - AUTO 
       TOTAL.
    5. ENTER `Q' (FOR QUIT) FOR ACCOUNT NUMBER WHEN JOURNAL ENTRY IS 
       COMPLETE.
    6. YOUR COMPUTER'S CAPS-LOCK KEY MUST BE `ON'.  
       **********************************************************************
                ACCOUNT    D=DEBIT       DOLLAR       POSTING
        DATE    NUMBER     C=CREDIT      AMOUNT       REFERENCE
       021685     3           D          5000.10      DCR 36
                  11          D          12450.00   
                  171         C          17450.10
                  Q    
     
     
     Notice, in the above illustration, that the CHECK NUMBER column is not 
     shown.  This is because there was no credit  to  a  bank  account.  If 
     there  had  been  a credit to a bank account,  the CHECK NUMBER column 
     would have appeared to the right  of  the  POSTING  REFERENCE  column. 
     Also,  the POSTING REFERENCE column, above, disappears after the first 
     line of input.  See the previous  paragraph  entitled  "ENTERING  YOUR 
     DAILY  TRANSACTIONS OR THE ADJUSTMENTS FOR FINANCIAL STATEMENTS" for a 
     detailed discussion. 
     
     Also notice that account titles  were  not  used  while  entering  the 
     transaction. 
     
     
     
                                                                      47-1
     
     

     There is one other point that you should understand.  It is this:
              

       .  While you enter your debits and credits, CPA-LEDGER:
     
           .  Identifies the title of the most recent account  number  that 
              you enter, and 
           
           .  Shows the cumulative total of all debits and credits for each 
              journal entry, as you enter the debit and credit values.  
     
     
     This  information is shown at the bottom of your screen.  For example, 
     after the second debit shown on  page  47  is  entered  the  following 
     appears at the bottom of the screen: 
     
     
     ACCOUNT =  ACCOUNTS RECEIVABLE - TRADE    DR=  17,450.10  CR=        .00
     
     
     After  the  first  credit  is entered (see the entry on page 47),  the 
     information changes to: 
     
     
     ACCOUNT = SALES                           DR=  17,450.10  CR=  17,450.10
     
     
     After  the  entry  is posted (or rejected for posting),  the debit and 
     credit amounts shown above return to zero. 
     
     Please carefully note that the debit and credit values,  shown  above, 
     pertain  to  the  cumulative value of debits and credits entered for a 
     specific journal entry and NOT to the account number identified to the 
     left of the values. 
     
     

                                                                        48
     

     Once  the  `Q'  is  entered (the fourth entry under the ACCOUNT NUMBER 
     column, page 47), the following will appear on your computer screen: 
     
     
     
       ENTER EXPLANATION FOR THE ABOVE ENTRY.  __________________________
     
     
     
     Assume that your input for the explanation is "DAILY SALES,  2/16/85". 
     The explanation is included in the output, illustrated on pages 49 and 
     50.  After  you  enter  the  explanation the following appears on your 
     screen: 
     
     
     
       YOUR INPUT WILL BE DISPLAYED ON THE SCREEN SO THAT  YOU  MAY  VERIFY 
       IT.  (FOR  YOUR INFORMATION,  ACCOUNT TITLES ASSIGNED TO THE ACCOUNT 
       NUMBERS THAT YOU INPUT WILL ALSO BE DISPLAYED.) CAREFULLY  NOTE  ANY 
       ERRORS SO THAT INCORRECT DATA WILL NOT BE POSTED TO THE ACCOUNTS. 
     
     
       PRESS ANY KEY TO CONTINUE.
     
     
     
     After you press a key the following appears on your screen: 
     
     
     
       YOUR DEBIT ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.
       THE LIST OF DEBIT ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.
       PRESS ANY KEY TO CONTINUE. 
     
     
     
                ACCOUNT                           DOLLAR     POSTING     CHECK
        DATE    NUMBER   ACCOUNT TITLE            AMOUNT     REFERENCE   NUMBER
       021685     3      CASH IN BANK              5,000.10  DCR 36
                  11     ACCOUNTS RECEIVABLE      12,450.00
     
     
     
     After  you  press a key (refer to the instruction in the third line of 
     the narrative, above), the credit entry will appear for your review: 
     
     
      
                                                                        49
     

       YOUR CREDIT ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.
       THE LIST OF CREDIT ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.
       PRESS ANY KEY TO CONTINUE.
     
     
                                                                       
                ACCOUNT                           DOLLAR     POSTING     CHECK
        DATE    NUMBER   ACCOUNT TITLE            AMOUNT     REFERENCE   NUMBER
       021685    171     SALES                    17,450.10  DCR 36
       ENTRY EXPLANATION = DAILY SALES, 2/16/85
     
     
     After you press a key (refer to the instruction in the third  line  of 
     narrative, above), the following will appear on your screen: 
          
     
       DO  YOU  DESIRE  TO  POST THE DEBIT AND CREDIT ENTRIES THAT YOU JUST 
       REVIEWED? 
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
     
     If you answer `Y' (for `YES'),  the entire entry will be posted to the 
     general  ledger.  If you answer `N' (for `NO'),  the entry will not be 
     posted. 
     
     Option 1 now needs to know if you wish to post additional  debits  and 
     credits  to  the  general  ledger.  To  make  that determination,  the 
     following question is next. 
     
          
       DO YOU DESIRE TO ENTER ADDITIONAL DEBITS AND CREDITS?
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
          
     If you answer `N' (for `NO'),  the number and value of entries  posted 
     to  the  general  ledger  are printed.  Then,  you are returned to the 
     DAILY menu. 
     
     If you answer `Y' (for `YES'),  you will be asked to  enter  the  next 
     series  of  debits  and  credits.  This  process is repeated until you 
     answer `N' to the above question. 
     
     This illustration assumes that your general ledger  entry  is  correct 
     and  that you instructed Option 1 to post the general ledger.  See the 
     previous paragraphs entitled "REVIEWING  AND  APPROVING  YOUR  GENERAL 
     LEDGER  ENTRY"  and  "ERROR  MESSAGES"  for  a  description  of  error 
     processing. 
     
     
     
                                                                        50
     

     PRINTED OUTPUT.
     
     Using the above general ledger entry for illustration, the output from 
     Option 1 would be: 
     
     
     
                                                                   PAGE  1
                                                       RUNDATE    02/16/85
     
                               ABC WHOLESALE, INC.
                             GENERAL LEDGER ENTRIES
                                              
              

              ACCT.
      DATE    NBR.    ACCOUNT TITLE                  DEBIT        CREDIT
     
     021685     3     CASH IN BANK                    5,000.10
               11     ACCOUNTS RECEIVABLE            12,450.00
              171        SALES                                    17,450.10 
                           DAILY SALES, 2/16/85
                           POSTING REFERENCE = DCR 36 
    
     
     
     
     
     
     NUMBER OF GENERAL LEDGER ENTRIES POSTED                  =       1
     VALUE OF ALL DEBITS POSTED                               = $ 17,450.10
     VALUE OF ALL CREDITS POSTED                              = $ 17,450.10
     DIFFERENCE - DEBITS LESS CREDITS POSTED                  = $      0.00
     
     
     
     Practice.
     
     
     Before starting this practice session,  make sure that you have copied 
     the practice general ledger (1) onto hard disk if you have  the  "hard 
     disk  only" version of CPA-LEDGER or (2) onto one of your blank floppy 
     disks if you have either the hard disk-floppy disk or floppy disk only 
     versions of CPA-LEDGER.  For instructions,  see the bottom of page  36 
     and  page 36-1.  We will move ahead slightly and use the DAILY menu to 
     print an unadjusted trial balance.  Do not  be  concerned.  CPA-LEDGER 
     knows what to do.  Just follow these procedures: 
     
     
     
                                                                        51
     

          .  After you load BASICA,  type this command at your keyboard, as 
             you see it below: 
     
               RUN "DAILY"    (if you have either the hard disk only or 
                               hard disk-floppy disk versions of CPA-LEDGER.)
               RUN "B:DAILY"  (if you have the two floppy disk version.)
     
          .  Select Option 2 from the DAILY menu &  direct  output  to  the 
             printer. 
     
          .  In a few seconds,  the proper computer program will be loaded. 
             Enter the date when it is asked for, and your unadjusted trial 
             balance will be printed on the printer.
          
     Review the trial balance.  Notice the account numbers in the left-hand 
     column.  You  will  use  these  account  numbers in making two general 
     ledger entries.  The entries are: 
     
          .  On February 16, 1985, cash sales totaled $17,450.10.  $5000.10 
             of the total was deposited in the bank on the same  date.  The 
             remainder   ($12,450.00)   should   be   charged  to  accounts 
             receivable.  The company uses a DAILY CASH  REPORT  to  record 
             daily cash receipts and uses the report as a posting reference 
             document.  (See Appendix E.) The DAILY CASH REPORT is numbered 
             DCR 36.  The entry to be recorded is: 
     
               Cash in Bank                      $ 5,000.10
               Accounts Receivable                12,450.00
                 Sales                                        $17,450.10 
     
                   Transaction explanation = Daily sales, 2/16/85
                   Posting reference       = DCR 36
     
          .  On the same day,  February 16, 1985, the company collected and 
             deposited in the bank $3000.00 from accounts  receivable.  The 
             collection  was  recorded  on DAILY CASH REPORT number DCR 36.  
             The entry to be recorded is: 
     
               Cash in Bank                      $ 3,000.00
                 Accounts Receivable                          $ 3,000.00

                   Transaction explanation = Collections on account
                   Posting reference       = DCR 36
     
     
     Use Option 1 of the DAILY menu to record the above two general  ledger 
     entries.  Use  the trial balance to determine the account numbers that 
     you should use while making the entries in Option 1. 
     
     
          
                                                                        52
     
                                    CHAPTER 7
              
                             DAILY MENU  -  OPTION 2
               
          
     WHAT OPTION 2 IS USED FOR.
     
     Option 2 is used to print  on  the  printer  or  to  display  on  your 
     computer's screen an unadjusted trial balance from the general ledger. 
     
       .  When  Option 2 starts execution,  you will be given the option of 
          having the output to be directed to either your printer  or  your 
          computer's screen.  Make your selection by entering `1' or `2' to 
          this question, which appears on the screen: 
     
       ENTER `1' FOR OUTPUT TO GO TO THE PRINTER OR `2' TO THE SCREEN.  _
     
     After the unadjusted trial balance has been printed, the following 
     appears:
     
       DISPLAY THE TRIAL BALANCE AGAIN, OR PRINT IT?  (Y/N)  _
     
     If you enter "Y",  the first message, above, reappears.  Thus, you may 
     display the trial balance over and over and then print it,  all in one 
     processing session.  

     
     This chapter will be short because,  other than responding to standard 
     message and reminders mentioned in Chapter 2,  CPA-LEDGER does most of 
     the work. 
     
     If  you completed the Practice section of Chapter 6,  you already know 
     how to use Option 2.  The Practice section of Chapter 6 also asked you 
     to enter two entries in  the  general  ledger.  The  two  entries,  of 
     course, changed some of the trial balance dollar amounts. 
     
     In the Practice section of this chapter,  you will be asked to prepare 
     a second unadjusted trial balance.  Then,  you  may  compare  the  two 
     trial  balances  (one from Chapter 6 and one from this chapter) to see 
     how the dollar amounts changed. 
                                  
     FOOTNOTE DISCLOSURES.
               
     Footnote disclosures are usually  included  financial  statements.  In 
     our opinion,  the unadjusted trial balance should not be an exception.  
     The objective of footnotes is to  disclose  all  relevant  information 
     needed   for  economic  decisions  but  which  cannot  be  effectively 
     communicated in any other manner. 
     
     Full disclosure is important so that the unadjusted trial balance will 
     not be misleading.  Examples of common disclosures are: 
     
     
     
                                                                         53

     
          .  An explanation of all significant accounting policies  of  the 
             company,   such  as  depreciation  methods,   amortization  of 
             intangibles, and inventory costing methods. 
     
          .  An explanation of adjustments needed to bring  the  unadjusted 
             trial  balance  up-to-date.  The  merchandise  inventory  date 
             should be  disclosed.  Old  inventory  values  are  common  on 
             unadjusted trial balances. 

          .  Details of pension plans.
     
          .  Maturity dates on payables and receivables.
     
          .  Certain restrictions related to long-term debt.
     
          .  Long-term leases.
     
          .  Contingencies.
     
          .  Any changes in accounting principles.
          
     After  the  unadjusted  trial balance has been printed (but NOT if you 
     display it on your screen),  Option  2  displays  a  message  on  your 
     computer screen that: 
     
          .  Informs you of the importance of footnote disclosures. 
     
          .  Identifies common types of disclosures. 
     
          .  Shows an example of a disclosure that you can use as a guide. 
          
     After you have had a chance to read the message, Option 2 continues by 
     asking  if  you  would like to include footnote disclosures as part of 
     the trial balance.  If your answer is no,  you will be returned to the 
     DAILY menu. 
     
     If your answer is yes, you will be asked to enter each disclosure, one 
     at   a   time.   The   disclosures  will  be  consecutively  numbered, 
     automatically, and will be printed on pages that follow the unadjusted 
     trial balance.  The following is an example of a disclosure. 
     
       FOOTNOTE DISCLOSURES.
     
       Note 1.  Long-Term Notes Payable ($50,000) shown in  the  unadjusted 
                  trial  balance  is  payable  in  1990  ($20,000) and 1991 
                  ($30,000). 
     
     There is no limit to the number of disclosures that you can make. 
     
     
     
     
     
                                                                        54

     
     
     Practice.
     
     
     Prepare an unadjusted trial balance,  using the instructions contained 
     in the Practice section of Chapter 6.  Compare the dollar  amounts  on 
     the  trial  balance  with the dollar amounts on the trial balance that 
     you prepared in the previous chapter.  Notice that the dollar  amounts 
     changed  based  on  the dollar value of the two general ledger entries 
     that you entered. 
     



































```
{% endraw %}

## CHP8.TXT

{% raw %}
```
      


                                                                        55
     
                                    CHAPTER 8
              
                             DAILY MENU  -  OPTION 3
     
                            
     WHAT OPTION 3 IS USED FOR.
    
     DAILY Option 3 is used for printing:
     
          .  A  cumulative  Income  Statement,  with  or  without  footnote 
             disclosures, 
     
          .  A   cumulative   Balance  Sheet,   with  or  without  footnote 
             disclosures, 
         
          .  Cumulative Statements of Owners' Capital (for partnerships and 
             proprietorships - see chapters 18 & 19), and 
     
          .  A   ratio  analysis  of  the  cumulative  Income  Statement  & 
             cumulative Balance Sheet. 
     
          .  An Income Statement for a month or a for continuous series  of 
             months,  with  or  without footnote disclosures.  ("Continuous 
             series" means that the months must  be  in  order  -  such  as 
             January,  February,  and  March.  "Continuous series" does NOT 
             mean,  for example,  January and  March  because  February  is 
             missing.  Just  to  be sure you understand,  let's assume that 
             you would like to print ONE Income Statement for  January  and 
             March,  ONLY.  (It's not possible in ONE Income Statement,  to 
             get to the point.) Continuing, you enter the beginning date as 
             January and the ending date as March.  Assuming that you  have 
             previously  entered  transactions  for  January through March, 
             CPA-LEDGER will  search  the  data  base  and  accumulate  all 
             transactions for the period January,  February, & March.  Here 
             is one final point - CPA-LEDGER does NOT check to see  if  you 
             have  entered  your transactions - it merely searches the data 
             base  for  the  period  that  you  request   and   accumulates 
             transactions  (zero  and  otherwise)  for  that  period.   For 
             example, assume that you have entered transactions for January 
             only and ask for an Income Statement that  covers  the  period 
             January and February.  Your financial statement's printed data 
             will be for January - because you haven't entered transactions 
             for the entire period that you requested.  If you not sure you 
             understand,  contact  Jim  Foster  (see  the cover page of the 
             User's Manual). 
          
     Refer to Chapter 2 for an explanation of  the  standard  messages  and 
     reminders  that are part of Option 3.  After the standard messages and 
     reminders, Option 3 asks for: 
     
     
     
                                                                        56
     

     
          .  The beginning and ending dates to be printed on your financial 
             statements. 
       
          .  The   value  of  the  ending  merchandise  inventory,  IF  you 
             previously directed CPA-LEDGER to include a Cost of Goods Sold 
             Section in your Income Statement. (See Appendix A.) If you ask 
             for an Income Statement for a month (or a series  of  months), 
             CPA-LEDGER  also  asks  for  the  value  of both beginning and 
             ending inventories, PROVIDED,  of course,  that you previously 
             asked for the Cost of Goods Sold to be included in your Income 
             Statement. 
     
          .  Information about primary and contra accounts. 
     
               .  Make very sure that you understand the concept of primary 
                  and  contra  accounts  before  you  use  this  feature of 
                  CPA-LEDGER.   Improper  classification  of  accounts   as 
                  having   primary/contra   relationships  can  cause  your 
                  financial  statements  to  be  incorrect.   If  you  need 
                  assistance in this area, contact your local CPA. 
     
     
     If you want cumulative financial statements,  the Income Statement  is 
     printed  first,  followed by the Balance Sheet.  After both statements 
     have been printed,  Option 3 prints ratios pertaining to the  reported 
     financial data. 
     
     If you want a monthly Income Statement,  it is  printed  and  you  are 
     returned  to  the DAILY menu,  after,  of course,  you add any desired 
     footnotes to the statement. 
         
     OPTION 3 SEQUENCE OF EXECUTION AND AN ILLUSTRATION.
     
     Option  3  begins  execution  by  asking  which  type   of   financial 
     statement(s) that you wish.  This screen appears: 
     
     
     
                                                                        57


     
     YOU HAVE TWO OPTIONS FOR FINANCIAL STATEMENTS.
     
      1.  PRINT AN INCOME STATEMENT & BALANCE SHEET.
          (Note:  The Statement of Partners'/Owner's Capital is also 
          identified for partnerships/sole proprietorships.
     
          .  THIS  OPTION  PRINTS   FINANCIAL  STATEMENTS  FOR  THE  ENTIRE 
             ACCOUNTING  PERIOD  -  FROM  THE FIRST OF THE YEAR TO THE LAST 
             TRANSACTION THAT YOU ENTERED.  FOR EXAMPLE,  ASSUME  THAT  YOU 
             STARTED  YOUR GENERAL LEDGER AS OF JANUARY 1 AND THAT THE LAST 
             TRANSACTION THAT YOU ENTERED WAS DATED JUNE 30.  ALL FINANCIAL 
             STATEMENTS WILL BE FOR THE PERIOD  JANUARY  1  THRU  THE  LAST 
             TRANSACTION THAT YOU ENTERED ON JUNE 30. 
     
      2.  PRINT  AN  INCOME  STATEMENT  FOR  ANY ONE MONTH OR ANY SERIES OF 
          CONTINUOUS MONTHS. 
     
          .  FOR  EXAMPLE,  YOU  CAN PRINT AN INCOME STATEMENT FOR JANUARY, 
             FOR  JANUARY  THRU  FEBRUARY,  FOR  JANUARY  THRU  MARCH,  FOR 
             FEBRUARY  THRU  JUNE,  OR  FOR  ANY  OTHER  PERIOD.  THE  ONLY 
             REQUIREMENT IS THAT THE MONTHS MUST BE CONTINUOUS AND THAT YOU 
             MUST HAVE ENTERED TRANSACTIONS FOR  THOSE  MONTHS  -  IF  YOUR 
             INCOME  STATEMENT  INCLUDES A COST OF GOODS SOLD SECTION,  YOU 
             WILL BE ASKED FOR THE VALUES  OF  BOTH  (1)  BEGINNING  &  (2) 
             ENDING INVENTORY.  BE PREPARED TO ENTER THOSE VALUES. 
     
       DO YOU WISH TO CONTINUE? (Y/N)  _
     
     
     If  you enter "N",  the DAILY menu reappears.  If you answer "Y",  the 
     question, above,  "DO YOU WISH TO CONTINUE? (Y/N)  is replaced by this 
     question: 
     
       WHICH FINANCIAL STATEMENT OPTION DO YOU WISH?  _
        
     
     If you enter "1",  the option for cumulative financial  statements  is 
     processed.  If  you  answer  "2",  CPA-LEDGER  processes  the  monthly 
     financial statement option. 
     
     The following discussion takes up (1) cumulative financial  statements 
     first,  (2) followed by monthly ones,  (3) followed by processing that 
     is the same for both  cumulative  and  monthly  financial  statements. 
     Processing, as far as you are concerned, is almost the same for either 
     cumulative   or   monthly   Income  Statements.   To  distinguish  the 
     differences,   the  following  discussion  will  be  subdivided   into 
     "CUMULATIVE FINANCIAL STATEMENTS ONLY",  (2) "MONTHLY INCOME STATEMENT 
     ONLY", AND (3) "BOTH CUMULATIVE AND MONTHLY FINANCIAL STATEMENTS". 
     
     
     
                                                                         58
     


     CUMULATIVE FINANCIAL STATEMENTS ONLY.
          
     After  the  standard  messages  and  reminders,  Option  3  begins  by 
     requesting that you enter two dates and the value of ending inventory.  
     The   requests  and  the  assumed  input  ("010184",   "123184",   and 
     "112250.00") are: 
     
     
     DATES, BELOW, DO NOT GOVERN THE PERIOD COVERED FOR FINANCIAL STATEMENT 
     AMOUNTS.  THE DATES ARE FOR PRINTING PURPOSES ONLY. 
        
     
        ENTER THE BEGINNING DATE TO BE PRINTED ON ALL FINANCIAL STATEMENTS.
        (USE FORMAT MMDDYY.  I.E., JUNE 30,1984 = 063084.) 010184 
     
        ENTER  THE ENDING DATE TO BE PRINTED ON ALL FINANCIAL STATEMENTS.
        (USE FORMAT MMDDYY.  I.E., DECEMBER 31,1984 = 123184.) 123184 
     
        ENTER VALUE OF ENDING INVENTORY.                        112250.00    
         (Note: You are asked for the value of the ending inventory ONLY if 
                you set up accounts for beginning inventory and one or more 
                accounts related to purchases.  See Appendix A. 
     
     
     MONTHLY FINANCIAL STATEMENTS ONLY.
     
     Dates to be printed on the Income Statement are requested, in the same 
     manner as explained above for "CUMULATIVE FINANCIAL STATEMENTS ONLY" - 
     except that the dates requested are those to be printed on the  Income 
     Statement.  After  entering  the dates,  the following screen appears 
     ONLY IF YOU REQUESTED CPA-LEDGER TO  INCLUDE  A  COST  OF  GOODS  SOLD 
     SECTION IN YOUR INCOME STATEMENT.  See Appendix A. 
     
     
       ENTER THE VALUE OF BEGINNING INVENTORY   ___________
     
     
       ENTER THE VALUE OF ENDING INVENTORY      ___________
     
     
     After entering the inventory values, the following screen appears, in 
     all cases,  whether or not you have a Cost of Goods  Sold  Section  in 
     your Income Statement: 
     
     
      
                                                                          59
     

          
     
     AS REQUESTED BELOW,  ENTER THE  BEGINNING  AND  ENDING  MONTHS  TO  BE 
     COVERED  BY  THE INCOME STATEMENT.  USE FORMAT `MM'.  I.E.,  JANUARY = 
     01, FEBRUARY = 02,  ETC.  THE ENDING MONTH MUST BE EQUAL TO OR GREATER 
     THAN THE BEGINNING MONTH AND ALL MONTHS MUST BE EQUAL TO OR BETWEEN 01 
     AND 12. 
     
     
     ENTER BEGINNING MONTH     __
     
     
     ENTER ENDING MONTH        __
     
       (Note:  The  dates  entered  DO NOT control the beginning and ending 
       dates printed on the Income Statement.  Printing dates are asked for 
       when the program first starts to execute.) 
     
     
     
     After you enter the ending month, the following question appears on 
     the same screen:
     
     
     REVIEW YOU DATES.  ARE THEY CORRECT?  (Y/N)  _
     
     
     If you enter "N",  you are asked to reenter the beginning  and  ending 
     months.  If  you  answer "Y",  processing continues as described below 
     for  "BOTH  CUMULATIVE  AND  MONTHLY  FINANCIAL  STATEMENTS".   Before 
     leaving the monthly financial statement,  however, there are two final 
     points. 
     
---->POINT 1.  If you are already using CPA-LEDGER,  run the program titled 
     "UPDATE.BAS" that is on the Program Disk.  UPDATE.BAS will start  your 
     monthly  data base.  Know this - the monthly data base will be updated 
     each time that you post the general ledger from the date that you  run 
     UPDATE.BAS; however, IT DOES NOT update the monthly data base for your 
     previous  transactions.   For  example,   it  you  are  already  using 
     CPA-LEDGER and the day that you run UPDATE.BAS is June 16, the monthly 
     data base will be updated each time that you post the  general  ledger 
     June 16 and thereafter. 
     
---->POINT 2.  There is a process that CPA-LEDGER follows that  you  should 
     know  about.  CPA-LEDGER  uses  a  data  base  that summarizes monthly 
     transactions to prepare  your  Income  Statement.  If  the  data  base 
     become unusable, the following message will appear: 
     
     
     
                                                                        60
     
       PROCESSING ERROR.  MONTHLY DATA BASE RECORD NOT  FOUND.  DISCONTINUE 
       YOUR   USE   OF   CPA-LEDGER   UNTIL   YOU  CONTACT  JIM  FOSTER  AT 
       (703)569-2254.  CALL (OR WRITE IF YOU PREFER) JIM  FOSTER  AND  GIVE 
       HIM THIS MESSAGE: 
     
       A message for Jim appears here.
       
       PRESS ANY KEY TO CONTINUE.
     
     As  the  message  states,  you should discontinue using CPA-LEDGER and 
     contact Jim Foster.  (You should rarely, if ever, see the message - it 
     will appear only if CPA-LEDGER notices that notices that the data base 
     is  not usable.  The message is listed in this manual so that you will 
     know what to do - contact Jim Foster.  In the meantime,  be sure  that 
     you  keep frequent backups of your data files (those with an extension 
     of .FIL)).  


     BOTH CUMULATIVE AND MONTHLY FINANCIAL STATEMENTS.
                     
     The illustration that follows is for the Income  Statement.  Option  3 
     processing for the Balance Sheet is the same,  except for the name  of 
     the financial statement,  account titles,  and account numbers.  After 
     you enter the two dates and the  inventory  value  (above),  Option  3 
     continues with: 
                                          
        THE  PURPOSE  OF  THESE  INSTRUCTIONS  IS TO EXPLAIN THE MEANING OF 
        `PRIMARY'  AND  `CONTRA'  ACCOUNTS.  YOU  SHOULD  UNDERSTAND  THESE 
        INSTRUCTIONS BEFORE YOU CONTINUE. 
     
        A  `CONTRA'  ACCOUNT  IS  AN  ACCOUNT WHOSE BALANCE IS SHOWN ON THE 
        INCOME STATEMENT AS EITHER AN ADDITION TO  OR  A  SUBTRACTION  FROM 
        ANOTHER ACCOUNT.  FOR EXAMPLE, THE BALANCE OF THE ACCOUNT `PURCHASE 
        RETURNS  AND  ALLOWANCES'  IS  SHOWN  ON  THE INCOME STATEMENT AS A 
        SUBTRACTION FROM THE ACCOUNT  `PURCHASES'.  `PURCHASE  RETURNS  AND 
        ALLOWANCES'  IS  THE  ***CONTRA***  ACCOUNT  AND `PURCHASES' IS THE 
        ***PRIMARY*** ACCOUNT.  IT IS IMPORTANT  THAT  YOU  UNDERSTAND  THE 
        MEANING  OF  `PRIMARY'  AND `CONTRA' ACCOUNTS' BEFORE YOU CONTINUE. 
        YOU CAN IDENTIFY `PRIMARY' AND `CONTRA' ACCOUNTS,  AS WELL AS THEIR 
        ACCOUNT  NUMBERS,  FROM  A  TRIAL  BALANCE  OR  A LISTING OF ACTIVE 
        ACCOUNTS.  IN THE QUESTIONS THAT FOLLOW AFTER  THESE  INSTRUCTIONS, 
        YOU  WILL  BE  ASKED  TO  ENTER  THE ACCOUNT NUMBERS OF PRIMARY AND 
        CONTRA ACCOUNTS. 
     
        PRESS ANY KEY TO CONTINUE.
     
    
     After you press a key, the following appears on your computer screen: 
     
     
     
                                                                        61
     
     
        DOES THE INCOME STATEMENT CONTAIN ANY CONTRA ACCOUNTS?
        ENTER `Y' FOR `YES' OR `N' FOR `NO'.  _                      
                                                                

     If you answer `N',  Option 2  prints  the  Income  Statement.  If  you 
     answer `Y', the following appears on your computer screen: 
     
     
        ENTER  THE  QUANTITY  OF  *** PRIMARY *** ACCOUNTS THAT HAVE CONTRA 
        ACCOUNTS.  YOU  SHOULD  DETERMINE  THIS  QUANTITY  BY  REVIEWING  A 
        CURRENT TRIAL BALANCE OR A LISTING OF ACTIVE ACCOUNTS. 
     
        ENTER  THE  QUANTITY  OF  PRIMARY ACCOUNTS NOW.  IF YOU HAVE MADE A 
        MISTAKE AND WISH TO INDICATE THAT THERE  ARE  NO  PRIMARY  ACCOUNTS 
        WITH CONTRA ACCOUNTS, ENTER A ZERO (0). _ 
     
     
     If you enter a zero, Option 3 starts printing the Income Statement. If 
     you  enter one or another number up through 20 (there is a limit of 20 
     primary accounts), Option 3: 
     

          .  Displays instructions on how you should proceed.
     
          .  Asks for pertinent information that pertains to  each  primary 
             and contra account. 


     An example follows,  assuming one primary and one contra account.  The 
     primary account is Sales (account number 171),  and the contra account 
     is Sales Returns and Allowances (account number 175). 
     
     
     
                                                                        62

     
     
        ENTER  THE PRIMARY AND CONTRA ACCOUNT NUMBERS BELOW.  PAY ATTENTION 
        TO THE TYPE OF INPUT THAT IS REQUESTED.  WORK FROM A CURRENT  TRIAL 
        BALANCE.  THE INPUT THAT YOU MAKE (BELOW) WILL BE DISPLAYED (LATER) 
        FOR YOUR REVIEW AND APPROVAL OR DISAPPROVAL.  IF YOU DISAPPROVE THE 
        INPUT,  YOU  WILL BE ASKED TO REENTER ALL OF THE DATA - STARTING AT 
        THE POINT WHERE THE COMPUTER ASKS IF  THERE  ARE  ANY  PRIMARY  AND 
        CONTRA ACCOUNTS TO BE CONSIDERED.  THUS,  IF YOU REJECT YOUR INPUT, 
        IT WILL BE COMPLETELY ERASED FROM THE  COMPUTER'S  MEMORY  AND  YOU 
        WILL BE GIVEN A FRESH START. 
     
     
     
        ENTER THE ACCOUNT NUMBER FOR  *** PRIMARY *** ACCOUNT  1.   171
          (Note: See the note immediately below.)
        ENTER THE ACCOUNT NUMBER FOR  *** CONTRA  *** ACCOUNT  1.   175
          (Note: CPA-LEDGER will not accept an inactive account,
                 an active account with a zero balance, or a
                 valid account more than one time.)
        ENTER THE QUANTITY OF CONTRA ACCTS. FOR THE ABOVE
        PRIMARY ACCT. (LIMIT 2)                                     1
     
     
     The sequence followed by Option 3 in asking for the above data is: 
     
          .  First,  you  are  asked  to  enter  the account number for the 
             primary account. (See the first input line.) 
     
          .  Next,  you are asked to enter the quantity of contra accounts. 
             Note  that  there  is  a limit of two contra accounts for each 
             primary account. (See the third input line.) 
     
          .  Finally,  you are asked for the account numbers of up  to  two 
             contra  accounts,  depending  on your input on the third input 
             line. (See the second input line.) 
     
     This process  is  repeated  for  each  primary  account  that  has  an 
     offsetting  contra  account.  After  your  entries  are complete,  the 
     following will appear on the computer screen: 
     
      
                                                                        63
     
     

        YOUR INPUT WILL BE DISPLAYED FOR YOUR REVIEW.  ACCOUNT NUMBERS,  AS 
        WELL  AS  ACCOUNT  TITLES  WILL BE DISPLAYED.  IT IS VERY IMPORTANT 
        THAT THE INPUT BE ABSOLUTELY CORRECT BEFORE THE PROGRAM USES IT  TO 
        PREPARE  THE  INCOME  STATEMENT.  OTHERWISE,  THE  STATEMENT MAY BE 
        INCORRECTLY PREPARED.  SO,  REVIEW THE DATA V-E-R-Y  CAREFULLY  AND 
        NOTE ANY ERRORS. 
     
        TO  THE  LEFT  ON THE SCREEN WILL BE ONE PRIMARY ACCOUNT,  WITH THE 
        RELATED CONTRA ACCOUNT(S) TO THE RIGHT.  STUDY THE  DISPLAYED  DATA 
        VERY  C-A-R-E-F-U-L-L-Y  AND  NOTE  ANY  INPUT  ERRORS.  STUDY  THE 
        ACCOUNT TITLES,  AS WELL AS THE ACCOUNT NUMBERS.  IT  IS  EXTREMELY 
        IMPORTANT  THAT  YOUR  INPUT FOR THE PRIMARY AND CONTRA ACCOUNTS BE 
        ABSOLUTELY CORRECT. 
     
        AFTER YOU FINISH YOUR REVIEW, YOU WILL BE ASKED TO INDICATE WHETHER 
        YOUR INPUT WAS OR WAS NOT CORRECT.  IF YOU INDICATE THAT YOUR INPUT 
        WAS INCORRECT, THE COMPUTER WILL ASK YOU TO REENTER YOUR DATA, FROM 
        THE BEGINNING. 
     
        PRESS ANY KEY TO CONTINUE.
     
     
     After you press a key to continue,  the following will appear on  your 
     screen:  (Refer  to  the  previously entered account number 175 (Sales 
     Returns and Allowances) as a contra account to primary account  number 
     171 (Sales).  These entries were made,  above, when Option 3 asked for 
     the account numbers of primary and contra accounts.) 
     
     
        YOUR INPUT (WITH ACCOUNT  TITLES)  IS  DISPLAYED  BELOW.  CAREFULLY 
        REVIEW  THE  INPUT AND NOTE ANY ERRORS.  ONE PRIMARY ACCOUNT,  WITH 
        THE ACCOUNT NUMBER AND TITLE,  IS ON THE SCREEN TO  THE  LEFT.  THE 
        RELATED CONTRA ACCOUNT(S),  WITH ACCOUNT NUMBER(S) AND TITLE(S), IS 
        ON THE SCREEN TO THE RIGHT.  CONSIDER IT TO BE AN  INPUT  ERROR  IF 
        ACCOUNT  NUMBERS  DO  NOT  CORRESPOND  TO THE ACCOUNT TITLES.  ALSO 
        CONSIDER IT TO BE AN INPUT ERROR IF THE DISPLAYED CONTRA ACCOUNT(S) 
        DO NOT RELATE TO THE DISPLAYED PRIMARY ACCOUNT.  (IF  ALL  OF  YOUR 
        ACCOUNT  NUMBERS  ARE  NOT  SHOWN BELOW,  THEY WILL APPEAR WHEN YOU 
        PRESS A KEY TO CONTINUE.) 
     
        ****** PRIMARY ACCOUNT ******  ****** CONTRA ACCOUNT ******
        ACCT.                          ACCT.
        NBR.  ACCOUNT TITLE            NBR.   ACCOUNT TITLE
     
        171   SALES                    175    SALES RETURNS & ALLOWANCES
     
     
          
        DISPLAY IS COMPLETE.  PRESS ANY KEY TO CONTINUE.
     
      
     
     
                                                                        64

     After you press a key, the following appears on you screen: 
     
     
        WERE ALL PRIMARY / CONTRA ACCOUNTS CORRECT AS  DISPLAYED?  (IF  YOU 
        INDICATE  THAT THEY WERE N-O-T CORRECT,  YOU WILL BE ASKED TO ENTER 
        THE DATA AGAIN.) 
     
        ENTER `Y' FOR `YES' OR `N' FOR `NO'.  _          
                                                                       

     If your answer is `N', Option 3 will ask you reenter all of your input 
     about the primary and contra accounts,  beginning  with  the  question 
     "DOES THE INCOME STATEMENT INCLUDE ANY CONTRA ACCOUNTS?". 
     
     If your answer is `Y', Option 3 prints the Income Statement. 
     
     
     ERROR MESSAGES.
     
     Like  all  CPA-LEDGER  options,  Option  3 monitors your input to help 
     ensure that you do not make a mistake.  In some cases, the system will 
     merely refuse to accept your input.  An example is where you  enter  a 
     date in the incorrect format - perhaps you enter 20 for the month.  In 
     these  cases,  instructions for correct input are already displayed on 
     the screen. 
     
     In other cases,  however,  you will need a more detailed  explanation.  
     The  following  is  a  summary  of  the  error  messages  that you may 
     encounter. 
     
     
     INACCURATE ENTRY FOR THE BEGINNING OR ENDING FINANCIAL STATEMENT DATES.
     
     In this case,  the system refuses  to  proceed  until  you  enter  the 
     correct range of values.  Instructions are on the computer screen. 
     
     
     INACCURATE ENTRY FOR THE BEGINNING INVENTORY OR ENDING INVENTORY.
     
     If  you  enter anything except zeros through nines and a decimal point 
     to separate dollars and cents, the following message will appear below 
     your input: 
     
        ENTRY IS INCORRECT.  TRY AGAIN.
        PRESS ANY KEY TO CONTINUE.
     
     After  pressing  a  key,  you  will  be  asked  to  reenter the ending 
     inventory value. 
      
     
                                                                        65
     
     INACCURATE ENTRY FOR PRIMARY OR CONTRA ACCOUNT NUMBERS.
     
     An incorrect entry for primary or contra account numbers may fall into 
     several areas.  They are: 
     
          .  You might not enter a numeric value - ZZ for example.  In this 
             case, Option 1 requests that you reenter your input. 
     
          .  You might enter an account number that is not on the financial 
             statement that is about to  be  printed.  In  this  case,  the 
             following message appears at the top of the computer screen: 
     
             YOUR  ENTRY  FOR  THE  ACCOUNT NUMBER WAS (a number is shown).  
             THAT ACCOUNT NUMBER IS NOT  INCLUDED  IN  THE  (the  financial 
             statement to be printed is identified).  STUDY A CURRENT TRIAL 
             BALANCE AND CORRECT YOUR INPUT. 
     
             PRESS ANY KEY TO CONTINUE.
     
          .  You  might  enter the same account number the second time.  In 
             that case the following message appears at  the  top  of  your 
             computer screen: 
     
             YOU  ENTERED THE SAME ACCOUNT NUMBER A SECOND TIME.  A PRIMARY 
             OR CONTRA ACCOUNT SHOULD BE IDENTIFIED ONE TIME ONLY.  STUDY A 
             CURRENT TRIAL BALANCE AND CORRECT YOUR INPUT. 
     
             PRESS ANY KEY TO CONTINUE.
     
          .  You might enter  an  inactive  account  number  or  an  active 
             account  with  a  zero  balance.  In  that event the following 
             appears at the top of your screen: 
     
             ERROR - INACTIVE ACCOUNT OR ACCOUNT WITH A ZERO BALANCE.  YOUR 
             INPUT CALLS FOR ACCT.  NUMBER (a number  is  shown).  STUDY  A 
             CURRENT TRIAL BALANCE AND CORRECT YOUR INPUT.
             PRESS ANY KEY TO CONTINUE. 
     
     
     After  you press a key,  Option 3 asks if you wish to start again.  If 
     so,  you are asked again if there are any primary accounts  that  have 
     contras. If you indicate that you do not wish to start again, Option 3 
     continues where it left off. 
     
     
     PRINTED OUTPUT.
     
     As already mentioned, printed output from Option 3 will be: 
     
     
     
                                                                       66

        .  FOR CUMULATIVE FINANCIAL STATEMENTS.
     
          .  First, an Income Statement.  And, if you ordered the footnote, 
             Balance  Sheet,  and  analysis capabilities of CPA-LEDGER (see 
             pages  ii  and  iii  of  this  manual),  the  processing  will 
             continue, as follows: 
     
          .  Second, footnote disclosures for the Income Statement. 
          
          .  Third, a Balance Sheet.

          .  Fourth, footnote disclosures for the Balance Sheet. 
     
          .  Fifth,  ratios  pertaining  to  amounts  shown  on  the Income 
             Statement and the Balance Sheet. 
     
        .  FOR MONTHLY FINANCIAL STATEMENTS.
     
           .  The Income Statement is printed, followed by footnotes to the 
              Income Statement.  Then you are returned to the DAILY menu.

     For cumulative financial statements,  if you do not have  CPA-LEDGER's 
     footnote,  Balance Sheet, and ratio capabilities, you will be returned 
     to the DAILY menu once the Income  Statement  is  printed.  Otherwise, 
     the processing continues, as indicated above (footnotes for the Income 
     Statement,  the Balance Sheet,  footnotes for the Balance Sheet, and a 
     ratio analysis of information on both the  Income  Statement  and  the 
     Balance Sheet). 
     
     Because  the output from Option 1 can be quite lengthy,  sample output 
     not shown  in  this  chapter.  Rather,  the  example  for  the  Income 
     Statement  will come from the practice section that is to follow.  
     
     The  Balance  Sheet,  also  not  illustrated,  is quite detailed.  For 
     example,  accounts are  grouped  by  account  classification  (current 
     assets,    operational   assets,    current   liabilities,   long-term 
     liabilities, contributed capital, retained earnings, etc.).  Subtotals 
     and final totals are shown, contra and primary accounts are offset and 
     then the contra account is subtracted from primary account,  with  the 
     net balance also being printed.  Totals are shown for various captions 
     such  as  current  assets,  operational  assets,  current liabilities, 
     long-term liabilities, total assets, and total liabilities and owners' 
     equity. 
     
     
     
     
                                                                        67
     

     
     
     FOOTNOTE DISCLOSURES.
     
     Footnote disclosures are usually included with  financial  statements. 
     The   objective  of  these  footnotes  is  to  disclose  all  relevant 
     information  needed  for  economic  decisions  but  which  cannot   be 
     effectively communicated in any other manner. 
     
     Full disclosure is important so that the financial statements will not 
     be misleading.  Examples of common disclosures are: 
     
          .  An  explanation  of all significant accounting policies of the 
             company,   such  as  depreciation  methods,   amortization  of 
             intangibles, and inventory costing methods. 
     
          .  Details of pension plans.
     
          .  Maturity dates on payables and receivables.
     
          .  Certain restrictions related to long-term debt.
     
          .  Long-term leases.
     
          .  Contingencies.
     
          .  Any changes in accounting principles.
     
     
     If  you have ordered the additional capabilities (see pages ii and iii 
     of this manual),  Option 3 displays a message on your computer  screen 
     after  either  the  Income Statement or the Balance Sheet has printed. 
     The message: 
     
     
     
                                                                        68
     

          .  Reminds you of the importance of footnote disclosures.
     
          .  Identifies  common  types  of  disclosures  for  the financial 
             statement that has just been printed. 
     
          .  Shows an example of a disclosure that you can use as a guide. 
     
     
     After you have had a chance to read the message, Option 3 continues by 
     asking if you would like to include any footnote  disclosures  in  the 
     financial  statement.   If  your  answer  is  no,  the  footnotes  are 
     bypassed. 
     
     If your answer is yes, you will be asked to enter each disclosure, one 
     at a time.  Option 3 consecutively numbers each disclosure  and  gives 
     you a chance to make corrections before they are printed. 
     
     The following is an example of a disclosure that Option 3 might print.  
     (You enter the narrative, beginning with "Long-Term Notes Payable" and 
     ending  with  "...  and  1987 ($30,000).".  CPA-LEDGER does everything 
     else. 
     
     

     
        FOOTNOTE DISCLOSURES.
        
        Note 1.  Long-Term Notes Payable ($50,000)  shown  in  the  Balance 
                 Sheet are payable in 1986 ($20,000) and 1987 ($30,000). 
     
     

     
     
          
                                                                      68-1
     
     FINANCIAL STATEMENT ANALYSIS.
     
     First,  remember this - financial statement analysis is for cumulative 
     financial statements ONLY.  They are NOT printed  for  monthly  Income 
     Statements. 
     
     Financial statements give valuable information concerning the position 
     of a business and the results of its operation.  Analysis of  data  on 
     financial  statements  is  necessary  in  reaching  conclusions  about 
     financial matters.  When the financial position of a business is being 
     considered, three factors are usually of primary interest.  They are: 
     
          .  Solvency.  To be solvent,  a business must be able to meet its 
             liabilities  as  they  mature.   Statements  are  analyzed  to 
             determine if the business is,  and will likely continue to be, 
             solvent. 
     
          .  Profitability.  Profitability is measured by earnings shown on 
             Income  Statements.  The  nature,  amount,  and  regularity of 
             earnings are important in appraising profitability. 
     
          .  Endurability.  To be endurable, a business must be able to (1) 
             meet both short-term and long-term obligations and (2) provide 
             a reasonable return to the  owners.  Solvency,  profitability, 
             and  efficient  use  of  resources are important in appraising 
             endurability. 
     
     There are many available methods for analyzing  financial  statements.  
     One  method  is to use financial and operating relationships expressed 
     in the terms of "ratios".  CPA-LEDGER presents several ratios that may 
     be helpful in analyzing your financial statements. 
     
     You should understand,  however,  that ratios have little significance 
     unless they are judged after applying appropriate standards. Standards 
     might consist of: 
     
          .  Ratios of your industry. 
     
          .  Ratios  of  other  companies that are within your industry and 
             that are in your local area. 
     
          .  Past ratios of your company. 
     
     You should also understand that the ratios that you will  need  for  a 
     particular  analysis  depends  upon  the  purpose  of  that  analysis.  
     CPA-LEDGER presents several ratios that may assist  you  in  making  a 
     preliminary study of the solvency,  profitability, and endurability of 
     your business.  We caution you, however, that no attempt has been made 
     to  give  CPA-LEDGER  capability  for  complete  financial   statement 
     analysis.  Carefully  read the two paragraphs that follow "EXPLANATION 
     OF RATIOS" on page 66. 
     
     
     
                                                                       68-2

     
     RATIOS PREPARED BY OPTION 3.
     
     Option  3  automatically  prepares over a dozen ratios for your study. 
     (Assuming,  that is,  that your financial  statements  have  the  data 
     necessary to compute the ratios.) They ratios are: 
     
          .  Ratios for solvency analysis:
     
              .  Current ratio.
              .  Ratio of working capital to total assets.
              .  Ratio of cash in bank to current liabilities.
              .  Ratio of sales to accounts receivable.
              .  Distribution of cash, accounts receivable, and inventory:
                  .  Cash in bank to the total of the three.
                  .  Accounts receivable to the total of the three.
                  .  Merchandise inventory to the total of the three.
     
          .  Ratios for profitability analysis:
     
              .  Ratio of operating income to net sales.
              .  Ratio of net profit to net sales.
              .  Ratio of gross profit to net sales.
              .  Ratio of operating expenses to net sales.
              .  Operating ratio.
              .  Ratio of net income to owners' equity. 
     
          .  Ratios for endurability analysis.
     
              .  Ratio of assets provided by creditors.
              .  Ratio of assets provided by owners.
              .  Ratio of owner's equity to fixed assets.
              .  Ratio of current assets to total liabilities.
              .  Ratio of operating income to total assets.
     
     Option  3  not  only  prints  the  ratios.  It  also  prints  a  short 
     explanation on how each ratio can be used in studying the  results  of 
     operations. 
     
     
     SAMPLE PRINTOUT OF THE ANALYSIS OF FINANCIAL STATEMENTS. 
     
     The  following  is  a  sample  printout  of  how Option 3 presents the 
     analysis of the Income Statement and the Balance Sheet: 
     
          
                                                                       68-3
     
       RATIOS FOR SOLVENCY ANALYSIS.
     
         CURRENT RATIO                                           250.5 %
         RATIO OF WORKING CAPITAL TO TOTAL ASSETS                 15.9 %
     
     
       RATIOS FOR PROFITABILITY ANALYSIS.
     
         RATIO OF OPERATING INCOME TO NET SALES                   15.0 %
         RATIO OF NET INCOME TO OWNER'S EQUITY                     8.5 %
     
       
       RATIOS FOR DURABILITY ANALYSIS.          
     
         RATIO OF ASSETS PROVIDED BY CREDITORS                    21.5 %
         RATIO OF ASSETS PROVIDED BY OWNERS                       78.5 %
     
     
       EXPLANATION OF RATIOS. 
     
       THOROUGH ANALYSIS OF FINANCIAL STATEMENTS IS A SPECIALIZED AREA THAT 
       REQUIRES  PROFESSIONAL TRAINING AND JUDGEMENT.  ALSO,  CPA-LEDGER IS 
       NOT DESIGNED TO PROVIDE FINANCIAL STATEMENT ANALYSIS  TO  COVER  ALL 
       NEEDS  IN  ALL  CIRCUMSTANCES.  DO NOT MAKE FINAL JUDGMENTS BASED ON 
       RATIOS THAT  COME  FROM  CPA-LEDGER.  INSTEAD,  USE  THE  RATIOS  AS 
       GENERAL  GUIDELINES  AND GET PROFESSIONAL ASSISTANCE BEFORE YOU MAKE 
       ANY CONCLUSIONS OR DECISIONS. 
     
       BEFORE  INTERPRETING  RATIOS  FOR YOUR BUSINESS,  YOU SHOULD DEVELOP 
       STANDARDS AS TO WHAT CONSTITUTES A HIGH RATIO AND WHAT CONSTITUTES A 
       LOW RATIO.  YOU CAN DO THIS BY USING PAST HISTORY OF YOUR  BUSINESS, 
       BY CONSULTING INDUSTRY STANDARDS,  AND BY CONSULTING,  IF AVAILABLE, 
       RATIOS OF SELECTED  COMPETING  COMPANIES  IN  YOUR  LOCAL  AREA.  IN 
       SETTING  YOUR  STANDARDS,  REMEMBER THAT THERE IS A DELICATE BALANCE 
       BETWEEN A RATIO THAT IS TOO HIGH AND A RATIO THAT IS TOO LOW. 

         CURRENT RATIO. 

           THE CURRENT RATIO IS COMPUTED BY DIVIDING TOTAL  CURRENT  ASSETS 
           BY  TOTAL  CURRENT  LIABILITIES.  THIS  RATIO  IS A MEASURE OF A 
           BUSINESS' ABILITY TO MEET ITS CURRENT  OBLIGATIONS.  A  RULE  OF 
           THUMB  IS THAT THE CURRENT RATIO IS UNSATISFACTORY IF IT IS LESS 
           THAN 200  PERCENT.  HOWEVER,  AS  MENTIONED,  DEVELOP  YOUR  OWN 
           STANDARD.  ALSO CONSIDER THE FOLLOWING: 

             .  YOUR  BUSINESS CAN HAVE A HIGH CURRENT RATIO AND STILL HAVE 
                A CASH DEFICIENCY. 
             .  A HIGH CURRENT RATIO MAY BE THE RESULT OF  OVERSTOCKING  OF 
                INVENTORY. 
             .  A HIGH CURRENT RATIO MAY INDICATE EXCESS FUNDS WHICH SHOULD 
                BE  PUT  TO  BETTER  USE,  SUCH  AS INVESTING IN SHORT-TERM 
                SECURITIES. 
             
      
                                                                       68-4
     
     
      
         RATIO OF WORKING CAPITAL TO TOTAL ASSETS.

           THIS RATIO IS COMPUTED BY DIVIDING CURRENT ASSETS MINUS  CURRENT 
           LIABILITIES  BY  TOTAL  ASSETS.  THE  RATIO  IS A MEASURE OF THE 
           DISTRIBUTION AND LIQUITY OF  ASSETS  AFTER  CURRENT  LIABILITIES 
           HAVE  BEEN  DEDUCTED  FROM  CURRENT  ASSETS.  A HIGH RATIO MIGHT 
           INDICATE: 

             .  EXCESSIVE  ACCOUNTS  RECEIVABLE,  DUE  TO  POOR  COLLECTION 
                PERFORMANCE. 
             .  UNUSED CASH THAT POSSIBLY SHOULD BE PUT TO BETTER USE, SUCH 
                INVESTMENT IN SHORT-TERM SECURITIES. 
             .  OVERSTOCKING  OF  INVENTORY.  A SHIFT FROM THE MORE CURRENT 
                ASSETS OF CASH AND  RECEIVABLES  TO  INVENTORY  IS  USUALLY 
                REGARDED AS UNDESIRABLE. 
     
          A  LOW  RATIO  MAY  INDICATE  A WEAKNESS IN THE CURRENT POSITION.  
          (SEE THE CURRENT RATIO.) 
     
     
     For brevity,  additional explanations of the ratios are not  shown  in 
     this chapter.  The remaining explanations are similar in nature. 
     
     The  public  domain version of CPA-LEDGER does not have capability for 
     analyzing financial statements.  If you would like to have this  added 
     feature,  refer to the instructions on pages ii and iii of this User's 
     Manual. 
     
     
     Practice.
     
     Use Option 3 and your practice general ledger to prepare a  CUMULATIVE 
     Income Statement - Option 1 of financial statement menu.
     
     .  Use the following input: 
     
          .  Beginning date for the Income Statement is 010185
          .  Ending date for the Income Statement is 022885.
          .  The value of the ending inventory is $112,250.00.
             (Use 112250.00 as your input.)
          .  The primary and contra accounts are:
             (Note that Sales and Purchases have two contra                  
             accounts each.)
     
      
                                                                        
                                                                       68-5
     

     
     
     ------PRIMARY ACCOUNT------         ---------CONTRA ACCOUNT--------
    ACCT.                               ACCT.
    NO.  ACCOUNT TITLE                  NO.  ACCOUNT TITLE
     
    INCOME STATEMENT:
     
    171   SALES                          175   SALES RETURNS AND ALLOWANCES
                                         179   SALES DISCOUNT
     
    185   MERCHANDISE PURCHASES          189   PURCHASE RETURNS & ALLOWANCES
                                         193   PURCHASES DISCOUNT
     
     
     
     After printing the CUMULATIVE financial statements,  use Option  3  of 
     the DAILY menu once again.  This time, ask for an Income Statement for 
     March.  When your are asked: 
     
       Enter 03 for the beginning date.
       Enter 03 for the ending date.
       Enter 10000 for the beginning inventory.
       Enter 9500 for the ending inventory.
     
---->Your  practice  disk  does  not include any "monthly" postings for any 
     month other than March.  These transactions were entered for the  sole 
     purpose of allowing you to practice using the monthly Income Statement 
     feature.   The  March  transactions  are  not  intended  to  be  fully 
     consistent with January transactions, which were created in the past. 
    

















```
{% endraw %}

## CHP9-11.TXT

{% raw %}
```
 
    
                                                                        
                                                                        69
                                    CHAPTER 9
              
                             DAILY MENU  -  OPTION 4
                            
     
     
     
   
     WHAT OPTION 4 IS USED FOR.
     
     DAILY Option 4 is for selecting and printing  or  displaying  on  your 
     computer  screen  transactions  that  you posted to the general ledger 
     while using DAILY Option 1.  You may  select  and  print  transactions 
     based on: 
     
          .  Dates.
     
          .  Account numbers.
     
          .  Dollar amounts.
     
          .  Check numbers.
     
          .  Document  numbers  or other information entered as the posting 
             reference. 
          
     This  capability  comes  in  handy  if you want to review a previously 
     entered transaction.  An example might be to determine  which  entries 
     were made on a particular date.  Or, you might want to know if a check 
     has  been  posted to the records.  The list is endless.  Whatever your 
     reason,  Option 4 will scan the entire general ledger and  search  for 
     the transactions.  If found, they will be printed or displayed (as you 
     specify) for your review. 
     
     Remember,  the transactions printed or displayed are  those  that  you 
     posted to the general ledger while using DAILY Option 1. 
     
     
     OPTION 4 SEQUENCE OF EXECUTION AND AN ILLUSTRATION.
     
     Refer  to  Chapter  2 for the standard messages and reminders that are 
     part of Option 4.  After the  standard  messages  and  reminders,  the 
     following will appear on your computer screen. 
     
     ENTER `1' FOR OUTPUT TO GO TO THE PRINTER OR `2' TO THE SCREEN.  _
     
     Following your input,  CPA-LEDGER asks for your search criteria.  (The 
     second  request  for input,  shown below,  appears after you give your 
     answer to the first request.  For clarity of  illustration,  both  are 
     shown  together.  The  assumed  answer to the first request is "3" and 
     the assumed answer to the second request is "1".) 
     
     
     
                                                                        70
     

       SELECT ONE OF THE FOLLOWING  NUMBERS.  EXCEPT  FOR  NUMBER  6,  YOUR 
       SELECTION WILL GOVERN WHAT ADDITIONAL INPUT WILL BE REQUESTED. 
         1.  A SPECIFIC TRANSACTION DATE OR A RANGE OF TRANSACTION DATES.
         2.  A SPECIFIC ACCOUNT NUMBER OR A RANGE OF ACCOUNT NUMBERS.
         3.  A SPECIFIC DOLLAR AMOUNT OR A RANGE OF DOLLAR AMOUNTS.
         4.  A SPECIFIC CHECK NUMBER OR A RANGE OF CHECK NUMBERS.
         5.  A SPECIFIC POSTING REFERENCE.
         6.  NO CRITERIA - ALL GENERAL LEDGER ENTRIES WILL BE PRINTED.
     
     
       WHICH NUMBER DO YOU SELECT?   3

     
     
       SELECT  ANOTHER NUMBER.  LIKE THE FIRST NUMBER,  YOUR SELECTION WILL 
       GOVERN WHAT ADDITIONAL INPUT WILL BE REQUESTED. 
         1.  A SPECIFIC TRANSACTION MONTH AND DAY, SUCH AS MAY 16.
         2.  A SPECIFIC TRANSACTION MONTH, SUCH AS MAY.
         3.  A RANGE OF TRANSACTION MONTHS, SUCH AS FROM MAY TO SEPTEMBER.
         4.  DISREGARD THE TRANSACTION DATE.  (THE DATE WILL BE IGNORED.)
     
     
       WHICH NUMBER DO YOU SELECT?   1

     
     
     Answers to these two requests for input  dictate  how  Option  4  will 
     proceed.  If  the first request had been answered with "6" (instead of 
     "3", as shown),  Option 4 would have proceeded immediately to printing 
     all  general  ledger  entries.  If the answer had been "1" (instead of 
     "3"),  the fourth possibility (DISREGARD  THE  TRANSACTION  DATE  ...) 
     would not have appeared in the second request for input. 
     
     Continuing with answers "3" and "1", the following will appear on your 
     screen:  (Like  before,  for  clarity,  all  input  requests are shown 
     together.  The assumed  inputs  are  "2",  "3000.00",  "5000.00",  and 
     "0519".) 
     
     
                                                                        71
     

     
       THE  FIRST  NUMBER  THAT  YOU  ENTERED  DIRECTS CPA-LEDGER TO SELECT 
       ENTRIES BASED ON A SPECIFIC DOLLAR  AMOUNT  OR  A  RANGE  OF  DOLLAR 
       AMOUNTS. 
     
       ENTER `1' TO USE A SPECIFIC DOLLAR AMOUNT OR
             `2' TO USE A RANGE OF DOLLAR AMOUNTS.      2
                                                         
       ENTER THE BEGINNING (LOW)  DOLLAR AMOUNT.        3000.00
       ENTER THE ENDING (HIGH)    DOLLAR AMOUNT.        5000.00
     
     
       THE  SECOND  NUMBER  THAT  YOU  ENTERED DIRECTS CPA-LEDGER TO SELECT 
       ENTRIES BASED ON A SPECIFIC TRANSACTION MONTH AND DAY. 
     
       ENTER THE SPECIFIC TRANSACTION MONTH AND DAY.
       (USE FORMAT MMDD.  I.E., JULY 16 = 0716.)           0519
     
     
     After you  make  the  last  entry  above  ("0519"),  Option  4  begins 
     searching  the general ledger.  The search is for any transaction that 
     is dated May 19 and that has  a  debit  or  a  credit  valued  between 
     $3,000.00  and  $5,000.00.  The  dollar value is based on the value of 
     each debit and each credit - not on their total values. 
     
     If the search is successful,  Option 4  prints  or  displays  (as  you 
     previously requested) the entire transaction for your review. 
     
     There  are  slight variations in the above displays.  For example,  if 
     you had answered question 2 with "3" (in lieu of "1",  as shown),  the 
     last  request  for  input  would  have asked for both the low and high 
     months instead of only the specific transaction month and day. 
     
     After  printing  or  displaying  the general ledger entries,  Option 4 
     displays this message and question on your screen,  after telling  you 
     that it displayed or printed your records: 
         
        DO YOU WISH TO PRINT OR DISPLAY OTHER TRANSACTIONS?
        ENTER `Y' FOR `YES' OR `N' FOR `NO'.      _
          

     If your response is `Y',  Option 4 displays:
     
     IF YOU INTEND TO PRINT (ON THE PRINTER),  MAKE SURE THAT THE PAPER  IS 
     AT TOP-OF-PAGE.  PRESS ANY KEY WHEN YOU ARE READY. 
         
     
     Once  you press a key,  CPA-LEDGER starts again,  with the request for 
     you specify whether  output  is  to  be  printed  on  the  printer  or 
     displayed on the screen. 
     
     
     
                                                                         72
     

     There  may  be  cases  where Option 4 does not find any general ledger 
     entries meeting your selection criteria.  In that event, the following 
     is displayed on your screen: 
     

       NO TRANSACTIONS WERE FOUND THAT MET YOUR SELECTION CRITERIA.
       DO YOU WISH TO TRY AGAIN?
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.  _
     
     

     The Option 4 response to `Y' or `N' is the same as  described,  above, 
     for instances when entries were found and printed. 
     
     
     ERROR MESSAGES.
     
     Option  4  monitors  your  input to help ensure that you do not make a 
     mistake.  In one case (when Option 4  asks  for  TODAY'S  DATE  -  see 
     Chapter 2),  the system refuses to proceed until you enter the correct 
     range of values.  Instructions are  already  on  the  computer  screen 
     explaining the required date format. 
     
     In  all other cases,  Option 4 displays this message immediately below 
     your incorrect input: 
     
     

       ENTRY IS INCORRECT.  TRY AGAIN.  PRESS ANY KEY TO CONTINUE.
     
     

     You will be given time to study the required input and  to  decide  on 
     necessary  corrections.   All  information  needed  to  determine  the 
     correct input will be on your computer screen. 
     
     
     PRINTED/DISPLAYED OUTPUT.
     
     Using the above illustration,  assume that only one transaction valued 
     between $3,000.00 and $5,000.00 was entered in the general  ledger  on 
     May 19.  Also assume that the entry was for charge sales in the amount 
     of  $4,800.00.  The  printout  or  display  on  the screen would be as 
     follows: 
     
     
     
                                                                        73

     
                                                                  PAGE  1
                                                        RUNDATE  06/15/85 
          
                               ABC WHOLESALE, INC.
                             GENERAL LEDGER ENTRIES
                                        
     
              ACCOUNT
     DATE     NUMBER   ACCOUNT TITLE                   DEBIT       CREDIT
     
     05/19/85  11       ACCOUNTS RECEIVABLE            $4,800.00
               171        SALES                                    $4,800.00
                            CHARGE SALES 
                            POSTING REFERENCE DCR #148
     
     If  your  screen  becomes  full while displaying an entry,  CPA-LEDGER 
     tells you that there is more and asks you to press  any  key  for  the 
     remaining lines.  Otherwise,  the system tells you that the display is 
     complete. 
     
     
     Practice.
     
     
     Use Option 4 and your practice general ledger to:
     
          .  Print all entries that have been made to the  general  ledger. 
             This  can be done by entering "6" (in lieu of "3" shown in the 
             above illustration) in answer to the first request for input. 
     
          .  Print any of the entries that you  made  while  practicing  in 
             Chapter 8.  Also, display them on your computer's screen.
     
     
                                                                        74
     
                                   CHAPTER 10
               
                             DAILY MENU  -  OPTION 5
             
     
     WHAT OPTION 5 IS USED FOR.
     
     Use  DAILY  Option  5  whenever you want to review your general ledger 
     accounts, their details,  and their balances.  For each general ledger 
     account printed, the following information is shown: 
     
          .  The account number and title.
     
          .  The beginning balance.
     
          .  The value of transactions posted to the account.
     
          .  The ending balance.
     
          .  Details of each transaction posted to that account,  including 
             the: 
     
              .  Transaction date.
     
              .  Transaction explanation.
     
              .  Posting reference.
     
              .  Check number (if applicable).
     
              .  Transaction amount.
     
     When this option starts to  execute,  you  are  given  the  option  of 
     directing  the  output to either the printer or the screen.  Make your 
     choice by answering this question: 
     
     ENTER `1' FOR OUTPUT TO GO TO THE PRINTER OR `2' TO THE SCREEN.  _
     
     The discussion which follows  refers  to  "printed".  Please  remember 
     this  -  print  means  printing  on  the  printer OR displaying on the 
     screen,  whichever you specify by answering the question  above.  That 
     will  make  the sentences much easier to write,  and easier for you to 
     read.  
     
     You can limit the printout (remember, that also means display, if that 
     is what you asked for) to any accounts that you wish.  Once CPA-LEDGER 
     starts processing,  it asks you identify  the  accounts  you  want  to 
     print. 
     
     You can also limit the printout to any monthly period(s) that you wish 
     - a month or a range of months.  Or,  if you wish,  the printout  will 
     
     
     
                                                                         75
     

     show  all  transactions  regardless of when they were entered into the 
     system. 
     
     The transactions printed are those that you entered  into  the  system 
     while using DAILY Option 1. 
     
     Contrast  this  Option with Option 4 discussed in Chapter 9.  Option 4 
     (Chapter 9) prints entire entries that have been posted to the general 
     ledger,  regardless of the general ledger account involved.  Option  5 
     (this chapter),  however, summarizes entries by general ledger account 
     and considers only that part of an entry  that  affected  the  account 
     being summarized. 
          
     As  mentioned  above,  you  can  summarize  the  general ledger by any 
     account(s) or for any monthly period(s)  that  you  wish.  This  means 
     that  you  can reconstruct your general ledger accounts.  For example, 
     assume that it is now July 20.  You wish to reconstruct  your  general 
     ledger accounts for March.  No problem.  As you will learn below, this 
     is  easily  done by telling Option 4 that you desire your output to be 
     for the month of March.  Option 4 will print the beginning balance for 
     March, the March transactions,  and the ending balance as of March 31.  
     You  can  do  the  same thing for a range of months,  say from January 
     through March.  Just tell CPA-LEDGER that you want the printout to  be 
     for  the  period  January through March.  You can also use Option 5 to 
     document your general ledger,  at the end  of  the  year,  by  telling 
     CPA-LEDGER  to  print both balance sheet and income statement accounts 
     and to disregard the date.  If  you  do  that,  each  account  general 
     ledger  will be printed.  The printout will show each debit and credit 
     to each account, which may come in handy during the future. 
     
     Or,  (and  this  is  handy  if  you  are  tracing entries to specified 
     accounts or want to review entries in only  a  few  accounts) you  can 
     restrict the printout to one,  two,  three, or any number of accounts. 
     Thus,  there is no need for you to print the entire general ledger  if 
     you are interested in only a few accounts. 
     
     
     OPTION 5 SEQUENCE OF EXECUTION AND AN ILLUSTRATION.
     
     Refer  to  Chapter  2 for the standard messages and reminders that are 
     part of Option 5.  After the  standard  messages  and  reminders,  the 
     following  will appear on your computer screen:
     
     
     

                                                                         76
     

     YOU HAVE AN OPTION OF ONE OF TWO PRINTOUTS.  THEY ARE:
     
       1.  FOR ANY TIME PERIOD THAT YOU WISH,  PRINT TRANSACTIONS THAT HAVE 
           BEEN  POSTED  TO  (1)  BALANCE  SHEET  ACCOUNTS,  OR  (2) INCOME 
           STATEMENT ACCOUNTS,  (3) BOTH BALANCE SHEET AND INCOME STATEMENT 
           ACCOUNTS.  IF  YOU  SELECT BALANCE SHEET ACCOUNTS,  FOR EXAMPLE, 
           ALL BALANCE SHEET ACCOUNTS ARE PRINTED AND YOU  CANNOT  RESTRICT 
           THE PRINTOUT TO ONLY CERTAIN OF THE BALANCE SHEET ACCOUNTS. 
     
       2.  THIS  PRINTOUT IS THE SAME AS NUMBER 1,  ABOVE,  EXCEPT THAT YOU 
           CAN RESTRICT THE PRINTOUT TO ANY ACCOUNT(S) THAT YOU WISH. 
     
     
     WHICH DO YOU SELECT, 1 OR 2?   _

     
     The processing following your input depends upon  whether  you  select 
     "1" or "2" to CPA-LEDGER's inquiry.  As summary of the processing is: 
     
       .  IF YOU SELECT "1": 

           .  CPA-LEDGER asks you if you want to print  (1)  balance  sheet 
              accounts  only,   (2)  income  statement  accounts  only,  or 
              (3) both. 
     
       .  IF YOU SELECT "2": 
     
           .  CPA-LEDGER asks you to identity the  general  ledger  account 
              numbers to be printed. 
     
       .  IF YOU SELECT "1" OR "2": 
     
           .  CPA-LEDGER  asks  you to identify the period to be covered in 
              the printout. 
     
     
     In the following discussion, it will be assumed that you select "1" 
     and the processing steps will be explained.  Following that, it will 
     be assumed that you select "2" and, again, the processing steps will 
     be explained.  Following that, the processing for identifying the 
     printout time period will be discussed.
     
     If you answer "1" to CPA-LEDGER inquiry regarding the printout that 
     you want, the following appears on your computer's screen:
     
     
     
                                                                        77
     
     
       SELECT ONE OF THE FOLLOWING NUMBERS.  THE  NUMBER  THAT  YOU  SELECT 
       WILL  GOVERN  WHICH  GENERAL  LEDGER  ACCOUNTS  ARE PRINTED FOR YOUR 
       REVIEW.  FOR EACH GENERAL  LEDGER  ACCOUNT  PRINTED,  THE  FOLLOWING 
       INFORMATION  WILL  BE  SHOWN  -  (1)  ACCOUNT NUMBER,  (2) BEGINNING 
       BALANCE,  (3) ENDING BALANCE,  AND (4) DETAILS OF  EACH  TRANSACTION 
       POSTED  TO THAT GENERAL LEDGER ACCOUNT.  THE DETAILS WILL,  FOR EACH 
       TRANSACTION,   INCLUDE  THE  TRANSACTION   DATE,   THE   TRANSACTION 
       EXPLANATION,  POSTING REFERENCE,  CHECK NUMBER (IF APPLICABLE),  AND 
       THE TRANSACTION AMOUNT.  THE TOTAL VALUE OF ALL PRINTED TRANSACTIONS 
       IS ALSO SHOWN. 
     
       THE NUMBERS AND THEIR MEANINGS ARE SHOWN BELOW.
     
        1.  BALANCE SHEET ACCOUNTS ONLY, OR
        2.  INCOME STATEMENT ACCOUNTS ONLY, OR
        3.  BOTH BALANCE SHEET AND INCOME STATEMENT ACCOUNTS.
     
       WHICH NUMBER DO YOU SELECT? (ENTER 1, OR 2, OR 3.)    1
                        
     After "1" is entered (above),  CPA-LEDGER  asks  you  about  the  time 
     period  to be covered in the printout.  Time period processing will be 
     explained after an explanation of processing in  the  event  you  tell 
     CPA-LEDGER  you  want to identify the specific accounts to be included 
     in the printout (that is,  if you answer with a "2" to the question of 
     the type of printout desired, as explained on the previous pages. 
     
     If  you  answer  "2" to CPA-LEDGER inquiry regarding the printout that 
     you want, the following appears on your computer's screen: 
     
     
     ENTER TODAY'S DATE. USE FORMAT MMDDYY. (I.E., JUNE 8, 1984=080884). ____
     
     
     After entering the date, this appears on your screen:
     
     
     WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM?
     
     ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
     
     If you enter `N', the briefing is bypassed.  If you enter `Y', the 
     following appears:
     
     
       THIS OPTION  SUMMARIZES  TRANSACTIONS  BY  GENERAL  LEDGER  ACCOUNT.  
       ENTER  UP  TO  10 ACTIVE GENERAL LEDGER ACCOUNTS AND CPA-LEDGER WILL 
       PRINT EACH TRANSACTION THAT HAS BEEN POSTED TO EACH ACCOUNT.  IF YOU 
       WANT TO PRINT MORE THAN 10 ACCOUNTS,  TELL CPA-LEDGER THAT YOU  WISH 
       TO PRINT MORE ACCOUNTS, WHEN YOU ARE ASKED. 
     
     
     
                                                                         78

       
       ENTER A `Q' (FOR QUIT) AFTER ALL ACCOUNT NUMBERS HAVE BEEN ENTERED. 
     
       YOU  CAN  SUMMARIZE  THE  ACCOUNTS  BY A SPECIFIC MONTH,  A RANGE OF 
       MONTHS,  OR YOU CAN TELL CPA-LEDGER TO IGNORE THE  TRANSACTION  DATE 
       AND ALL TRANSACTIONS WILL BE SUMMARIZED, REGARDLESS OF DATE. 
     
       PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.
        
     After you press a key, the following appears on your computer screen:
     
       IN  THE  SCREEN  WHICH FOLLOWS,  YOU WILL BE ASKED TO ENTER UP TO 10 
       ACCOUNT NUMBERS.  EACH ACCOUNT  NUMBER  MUST,  REPEAT,  MUST  BE  AN 
       ACTIVE ACCOUNT IN YOUR GENERAL LEDGER.  IN ORDER TO AVOID CONFUSION, 
       PLEASE REMEMBER THIS: 
     
         IF YOU ENTER AN INACTIVE ACCOUNT NUMBER OR IF YOU ENTER AN ACCOUNT 
         NUMBER  THAT  IS  NOT  IN  YOUR  GENERAL LEDGER (SUCH AS ZERO OR A 
         NUMBER THAT EXCEEDS  THE  LAST  ACCOUNT  NUMBER  IN  YOUR  GENERAL 
         LEDGER),  CPA-LEDGER  WILL  NOT  ACCEPT YOUR INPUT.  A SHORT ERROR 
         MESSAGE WILL APPEAR AT THE BOTTOM OF YOUR COMPUTER SCREEN. 
     
       IT IS RECOMMENDED THAT YOU USE A  CURRENT  LIST  OF  GENERAL  LEDGER 
       ACTIVE  ACCOUNTS WHILE YOU ARE ENTERING INPUT THAT WILL BE REQUESTED 
       NEXT. 
      
       PRESS ANY KEY TO CONTINUE.
     
     
     After you press a key,  CPA-LEDGER asks you to  identify  the  account 
     numbers that you want it to print.  The screen looks like this: 
     
     
                ENTER `Q' (QUIT) FOR THE ACCOUNT NUMBER TO QUIT.
                           

       1  ENTER GENERAL LEDGER ACTIVE ACCOUNT NUMBER.  ____
     
     
     Assume  that  you enter "3",  an active account.  A message appears at 
     the bottom of the screen, asking if you wish to process the identified 
     account.  The message looks like this (account title assumed): 
     
       ACCOUNT TITLE = CITY BANK - DOWNTOWN BRANCH
       PROCESS THIS ACCOUNT?  (`Y' FOR `YES' OR `N' FOR `NO')  _
              

     If you enter `N', you are asked to reenter the account number.  If you 
     answer `Y', the screen changes and looks like this:
     
          
                                                                       78-1
      

             ENTER `Q' (QUIT) FOR THE ACCOUNT NUMBER TO QUIT.
        
       1  ACCOUNT NUMBER = 3   & ACCOUNT TITLE = CITY BANK - DOWNTOWN BRANCH.
       2   ENTER GENERAL LEDGER ACTIVE ACCOUNT NUMBER.  ____
     
     
     The number on the extreme left is your request number.  Remember,  you 
     can enter 10 per screen. (You can use a many screens as you wish, with 
     10  account numbers per screen.  CPA-LEDGER prints the account numbers 
     entered in a screen and asks if you want to print additional accounts.  
     Thus, the number of accounts that you can print is limited only by the 
     accounts in your general ledger.) 
     
     This concludes the discussion regarding how you tell CPA-LEDGER  which 
     accounts  to  include in your printout.  Next,  we need to discuss how 
     you tell CPA-LEDGER about  the  time  period  to  be  covered  in  the 
     printout. 

     
     THE TIME PERIOD TO BE COVERED IN THE PRINTOUT.
     
     Regarding the time period,  two requests for input follow.  The second 
     request does not appear until you give your answer to the  first  one.  
     For  clarity of illustration,  however,  both are shown together.  The 
     assumed answer to the first request is "2" and the assumed answers  to 
     the second request are "01" and "02".) 
       

       SELECT  ANOTHER  NUMBER.  THE  NUMBER THAT YOU SELECT WILL DETERMINE 
       WHICH ADDITIONAL QUESTIONS ARE TO BE ASKED  ABOUT  THE  TIME  PERIOD 
       THAT YOU SELECT. 
     
        1.  A SPECIFIC TRANSACTION MONTH, SUCH AS MAY.
        2.  A RANGE OF TRANSACTION MONTHS, SUCH AS FROM MAY TO SEPTEMBER.
        3.  DISREGARD THE DATE.  (THE DATE WILL BE IGNORED.)
       
       WHICH NUMBER DO YOU SELECT?  (ENTER 1, OR 2, OR 3.)   2
     
          
       THE  NUMBER THAT YOU ENTERED IMMEDIATELY ABOVE DIRECTS CPA-LEDGER TO 
       LIMIT THE PRINTOUT TO TRANSACTIONS THAT OCCURRED DURING A  RANGE  OF 
       MONTHS. 
     
       ENTER THE BEGINNING (LOW) MONTH. (USE FORMAT MM. I.E. JULY = 07.) 01 
       ENTER THE ENDING (HIGH) MONTH.(USE FORMAT MM. I.E. OCTOBER = 10.) 02 
         
     After  you  make  the  last  entry  above  ("02"),  CPA-LEDGER  begins 
     summarizing the general ledger accounts for the period January through 
     February. 
     
     There are slight variations in the above  displays.  For  example,  if 
     
     
     
                                                                       78-2
     

     question  2  had  been  answered  with  "1"  (in lieu of "2") the last 
     request for input would have asked for the specific transaction  month 
     instead of for both the beginning and ending months. 
     
     After summarizing and printing the general ledger accounts,  Option  5 
     displays this message and question on your computer screen: 
     
       GENERAL  LEDGER  ACCOUNTS THAT MET YOUR SELECTION CRITERIA HAVE BEEN 
       PRINTED.  DO  YOU  WISH  TO  PRINT  ANY  ADDITIONAL  GENERAL  LEDGER 
       ACCOUNTS? ENTER `Y' FOR `YES' OR `N' FOR `NO'. _ 
     
     
     
     If  your  answer is `Y',  Option 5 starts again with the first request 
     for input.  (The first request,  above,  was answered with "1" as  the 
     assumed  input.) If you respond with `N',  Option 4 will return you to 
     the DAILY menu. 
     
     There may be instances where Option 5 does not find any general ledger 
     entries for the period that you specify.  In that event, the following 
     is displayed on your screen: 
          

       NO ENTRIES WERE POSTED FOR THE PERIOD THAT YOU SELECTED.
       DO YOU WISH TO TRY AGAIN?
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.     _
     
     
     
     The Option 5 response to `Y' or `N' is the same as  described,  above, 
     for instances when entries were found. 
     
     
     ERROR MESSAGES.
     
     There  are  several types of errors that you might make while entering 
     your data into Option 5.  An example is an entry of 13  for  a  month.  
     Another  example  is  a  number  that is not within a range of numbers 
     requested. 
     
     If  you  make  an  input error,  Option 5 refuses to proceed until you 
     reenter your answer.  Instructions will be on the screen so  that  you 
     may determine the correct input. 
     
     If  you tell CPA-LEDGER to print only selected general ledger accounts 
     (the account numbers that  you  enter),  you  may  enter  an  inactive 
     account  or  an account that is not in your general ledger.  If so,  a 
     message will appear at the bottom of your screen telling you that your 
     input is incorrect.  The message will ask that you try again. 
     
     
     
     PRINTED OUTPUT.
     
     The following sample output uses assumed answers shown  in  the  above 
     illustration.  (The  assumed  answers  specify  that  Option  5  is to 
     summarize general  ledger  accounts  for  January  and  February.  The 
     summary  is  to  be  limited  to those accounts related to the Balance 
     Sheet.)  For brevity, a summary for  only one account is shown.  Other
     
     
     
                                                                       78-3
     

     accounts would be summarized in the same fashion.  (The entries in the 
     POSTING REFERENCE column are explained in Appendix E.) 
     
     In the sample printout to follow,  the second and third lines  of  the 
     printout title  is  "POSTINGS TO GENERAL LEDGER ACCOUNTS PERTAINING TO 
     THE BALANCE SHEET".  This is  an  example  of  a  title  if  you  tell 
     CPA-LEDGER  you  want  to  print  balance  sheet accounts.  If you had 
     informed CPA-LEDGER that you wished  to  enter  the  specific  account 
     numbers to be printed, the title would be "POSTED TRANSACTIONS". 
         
     
                                                                      PAGE 1
                                                          RUNDATE   06/15/85
                               ABC WHOLESALE, INC.
              POSTINGS TO GENERAL LEDGER ACCOUNTS PERTAINING TO THE
                                  BALANCE SHEET
                              FOR MONTHS 01 AND 02
                              
     
     ACCT.                                    POSTING    CHECK
      NBR.   DATE   TRANSACTION EXPLANATION   REFERENCE  NUMBER   AMOUNT
     
       3  01/01/85  OPENING JOURNAL ENTRY     OPENING            12,620.10
       3  01/02/85  CASH TRANSACTIONS 1/2     DCR #1              4,726.22
       3  01/08/85  SALES RETURN., CASH SALE  FORM 11      1        105.00-
       3  01/14/85  CASH TRANSACTIONS 1/15    DCR #2              4,854.81
       3  01/14/85  SALES TAX FOR DEC. 84     FORM 12      2      1,410.00-   
       3  01/14/85  PAYROLL DUE, 1/14/85      FORM 12      3      1,590.00-
       3  01/14/85  PAYROLL DUE, 1/14/85      FORM 12      4        819.08-
       3  01/20/85  AIR CONDITIONER REPAIR    FORM 10      5        800.00-
       3  01/21/85  PAYMENT ON ACCOUNT        FORM 9       6      7,350.00-
       3  01/29/85  CASH TRANSACTIONS 1/29    DCR #3             10,720.01
     
                VALUE OF ABOVE TRANSACTIONS                      20,847.06
                BEGINNING BALANCE PRIOR TO ABOVE TRANSACTIONS          .00
                ENDING BALANCE AFTER ABOVE TRANSACTIONS          20,847.06
                ACCOUNT NAME (FOR ABOVE DATA) IS CASH IN BANK
              
          
     Practice.
     
     Use Option 5 and your practice general ledger to summarize all general 
     ledger transactions.  Then,  use Option 5 again  and  tell  CPA-LEDGER 
     that  you  wish  to  print  specific  account numbers.  Obtain a trial 
     balance and print or display as many accounts as  you  wish.  Use  the 
     trial balance to identify the accounts numbers to be printed.  For the 
     period to be covered, use January. 
     
     
                                                                        79
     
                                   CHAPTER 11

                             DAILY MENU  -  OPTION 6
     
     
     
     
     WHAT OPTION 6 IS USED FOR.
    
     DAILY  Option  6  prints a complete list of all transactions that have 
     either increased or decreased your bank account(s).  Each bank account 
     is treated separately, with a separate printout. 
     
     When this option starts to  execute,  you  are  given  the  option  of 
     directing  the  output to either the printer or the screen.  Make your 
     choice by answering this question: 
     
     ENTER `1' FOR OUTPUT TO GO TO THE PRINTER OR `2' TO THE SCREEN.  _
     
     The discussion  which  follows  refers  to  "printed"  output.  Please 
     remember  this  - print means printing on the printer OR displaying on 
     the screen,  whichever you specify by answering  the  question  above.  
     That will make the sentences much easier to write,  and easier for you 
     to read.  
         
     You may limit the printout (remember, "printout" also means display if 
     you asked for the output to be displayed on your computer's screen) to 
     any period you wish - a month,  a  range  of  months,  or  the  entire 
     accounting  period.  This  means  that  you  may reconstruct your bank 
     accounts,  as recorded in the general ledger,  for any period that you 
     wish.  For  example,  assume  that  today's  date is June 20.  You may 
     direct Option 6 to reconstruct your bank accounts for any prior month, 
     such as February.  All you do is  to  inform  Option  6  (as  will  be 
     explained below) that you wish to limit the time period to February. 
     
     You may also want to use Option 6 to assist in reconciling  your  bank 
     statement  with  CPA-LEDGER's  general ledger.  Option 6 can assist by 
     printing all transactions that you  entered  as  either  increases  or 
     decreases to the bank account(s).  The printout will show: 
     
          .  The general ledger account number.
     
          .  The transaction date.
     
          .  The payee (if the transaction decreased the bank account).
     
          .  An explanation (if the transaction increased the bank           
             account).
     
          .  The posting reference.
     
          .  The check number, if applicable.
     
          .  The amount of the increase or decrease.
     
     

                                                                        80
     

     OPTION 6 SEQUENCE OF EXECUTION AND AN ILLUSTRATION.
     
     Chapter 2 discusses the standard messages and reminders that are  part 
     of Option 6.  After the standard messages and reminders, the following 
     will appear on your computer screen: 
       

       WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM?
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
          
     If you respond with `Y' the following briefing appears on your screen: 
     (If you respond with `N', the briefing is bypassed.) 
          
       THIS COMPUTER PROGRAM PRINTS TRANSACTIONS THAT HAVE EITHER INCREASED 
       OR  DECREASED  THE BANK ACCOUNT(S).  EACH BANK ACCOUNT,  IF THERE IS 
       MORE THAN ONE,  CAUSES A SEPARATE PRINTOUT.  BANK  TRANSACTIONS  ARE 
       SELECTED  BASED ON CRITERIA THAT YOU SUPPLY.  THE SELECTION CRITERIA 
       IS EITHER A MONTH,  A RANGE OR MONTHS,  OR FOR THE ENTIRE ACCOUNTING 
       PERIOD TO DATE. 
     
       PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.
          
     When you press a key,  the following appears:  (Two requests for input 
     are shown below.  The second one appears after an  entry  is  made  to 
     satisfy the first request.  For clarity, both are shown together.  The 
     assumed entry, shown below, for the first request is "2".  The assumed 
     entries for the second request are "01" and "02".) 
         
       SELECT  ONE  OF  THE  FOLLOWING NUMBERS.  THE NUMBER THAT YOU SELECT 
       WILL DETERMINE WHICH ADDITIONAL QUESTIONS ARE TO BE ASKED ABOUT  THE 
       TIME PERIOD. 
     
        1.  A SPECIFIC TRANSACTION MONTH, SUCH AS MAY.
        2.  A RANGE OF TRANSACTION MONTHS, SUCH AS MAY TO SEPTEMBER.
        3.  DISREGARD THE TRANSACTION DATE.  (THE DATE WILL BE IGNORED.)
     
       WHICH NUMBER DO YOU SELECT? (ENTER 1, OR 2, OR 3.)     2
     
     
     
       YOU INDICATED YOUR DESIRE TO LIMIT THE PRINTOUT TO TRANSACTIONS THAT 
       OCCURRED DURING A RANGE OF MONTHS. 
     
       ENTER THE BEGINNING (LOW) MONTH. (USE FORMAT MM. I.E. JULY = 07.)  01
       ENTER THE ENDING (HIGH) MONTH. (USE FORMAT MM. I.E. OCTOBER = 10.) 02
     
     
      
                                                                        81
     

     After  the  last  input  ("02"  above),  Option 6 starts preparing the 
     printout for the period requested  -  January  and  February  for  the 
     illustration. 
     
     There  are  slight variations in the above displays.  For example,  if 
     input for  the  first  request  had  been  "1"  (in  lieu  of  "2"  as 
     illustrated),  the  second request would have been for the transaction 
     month instead of the beginning and ending months. 
     
     After printing transactions meeting your selection criteria,  Option 6 
     displays this message and question on your computer screen: 
     
          
       ALL BANK TRANSACTIONS THAT YOU SELECTED HAVE BEEN PRINTED.
       DO YOU WISH TO PRINT ADDITIONAL BANK TRANSACTIONS?
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
          
     If your response is `Y', Option 6 starts again, with the first request 
     for input. (See the request, above, that was answered with "2.) If you 
     respond with `N', Option 6 returns you to the DAILY menu. 
     
     There  may  be  cases  where  Option  6 does not find any transactions 
     meeting your selection criteria.  In that event,  the  following  will 
     appear on your screen: 
     
          
       NO BANK TRANSACTIONS WERE FOUND THAT MET YOUR SELECTION CRITERIA.
       DO YOU WISH TO TRY AGAIN?
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
          
     The  Option 6 response to `Y' or `N' is the same as described,  above, 
     for instances when entries were found. 
          
     ERROR MESSAGES.
     
     There are several types of errors that you might make  while  entering 
     your  data  into  Option 6.  An example is an entry of 13 for a month.  
     Another example is a number that is not  within  a  range  of  numbers 
     requested. 
     
     
     
                                                                        82
     

     If  you  make  an  input error,  Option 6 refuses to proceed until you 
     reenter your answer.  Instructions will be on the screen so  that  you 
     may determine the correct input. 

     
     PRINTED OUTPUT.
     
     The following is a sample of output from Option 6.    
     
     
                                                                     PAGE 1
                                                           RUNDATE 01/30/85
     
                               ABC WHOLESALE, INC.
                                 CHECK REGISTER
                                  FOR MONTH 01
     

     ACCT.          PAYEE (IF A DECREASE)         POSTING    CHECK
      NBR.   DATE   EXPLANATION (IF AN INCREASE)  REFERENCE  NUMBER   AMOUNT
     
       3  01/01/85  OPENING JOURNAL ENTRY         OPENING          12,620.10
       3  01/02/85  CASH TRANSACTIONS             DCR #1            4,726.22
       3  01/08/85  JAY'S HOBBY SHOP              FORM 11      1      105.00-
       3  01/14/85  CASH TRANSACTIONS 1/15        DCR #2            4,854.81
       3  01/14/85  STATE DEPARTMENT OF TAXATION  FORM 12      2    1,410.00-
       3  01/14/85  M. S. JONES                   FORM 12      3    1,590.00-
       3  01/14/85  M. R. JONES                   FORM 12      4      819.08-
       3  01/20/85  ACE AIR CONDITIONING, INC.    FORM 10      5      800.00-
       3  01/21/85  ACME SUPPLY                   FORM 9       6    7,350.00-
       3  01/29/85  CASH TRANSACTIONS 1/29        DCR #3           10,720.01
     
          VALUE OF ABOVE TRANSACTIONS                              20,847.06
          BEGINNING BALANCE PRIOR TO ABOVE TRANSACTIONS                  .00
          ENDING BALANCE AFTER ABOVE TRANSACTIONS                  20,847.06
          ACCOUNT NAME (FOR ABOVE DATA) IS CASH IN BANK
     
     

     Practice.
     
     Use   Option  6  and  your  practice  general  ledger  to  print  bank 
     transactions that were recorded  during  the  months  of  January  and 
     February.  Display the same transactions on your computer's screen.
     





















```
{% endraw %}

## FILES466.TXT

{% raw %}
```
Disk No:  466
Program Title: CPA LEDGER 1 OF 2 (Program & Practice Diskette)
PC-SIG version: 2.2

This is disk 1 of CPA-LEDGER; it contains all of CPA-LEDGER's main and
practice programs.  CPA-LEDGER is a menu-driven general ledger and
financial statement program.  It`s designed for non-manufacturing
businesses that offer products or services for sale.  You must have a
knowledge of double entry bookkeeping to operate this package.

The CPA-LEDGER has plenty of muscle to record your daily transactions.
Any one general ledger entry may have up to 30 debits and 30 credits,
with total values of up to 999,999,999.99.  Also, you may use any
combination of 1 to 30 characters to identify the payee of a check.  A
very powerful system!

Be sure to read the user`s manual on DISK 468 before you attempt to use
the CPA-LEDGER in your business.

Usage:  Financial.

Special Requirements:  A version of BASIC.

How to Start:  After loading BASICA, run the SETUP program.

Suggested Registration:  $45.00

File Descriptions:

ACTDTL   BAS  Processes the G/L files that are on your data disk.
???????? FIL  Data file (9 files).
???????? TXT  Text file (6 files).
CHKREG   BAS  Prints transactions that inc or dec bank accounts.
DAILY    BAS  Handles most daily operations and transactions.
GENLGR   BAS  To be used for establishing a new general ledger.
GLACTS   BAS  This program prints a chart of general ledger accounts.
NEWACT   BAS  Allows the user to add new accounts to the g/l.
OPNBAL   BAS  Opens and posts balances to the general ledger.
PANDL    BAS  Handles primary & contra accnts & income statements.
POST     BAS  This program allows the user to post entries.
PSTCLS   BAS  This program will prepare a Post-closing trial balance.
READ     ME   Author supplied documentation file.
SELTRA   BAS  This program selects input ranges and dates.
SETUP    BAS  This is the User's initial "SETUP" program.
STOACT   BAS  This program sets up and stores the accounts.
TRIBAL   BAS  This is the Trial Balance program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## FILES468.TXT

{% raw %}
```
Disk No:  468
Program Title: CPA Ledger 2 of 2 (466 1st disk in set)
PC-SIG version: 2.1

This is the second of a two disk set.  It contains CPA-LEDGER's User's
Manual (over 150 pages).  The manual is subdivided into 15 chapters and
Appendix A through Appendix E. They may be printed out using an ASCII
word processor or the DOS COPY command.  We suggest you start with the
README and the PREFACE.TXT; they are excellent introductions.

Usage:  Financial.

Special Requirements:  A version of BASIC.

How to Start:  After loading BASICA, run the SETUP program.

Suggested Registration:  $45.00

File Descriptions:

CHP1     TXT  CPA-LEDGER overview.
CHP12-15 TXT  Daily Menus - options 7,8,9 and 10 plus Setup Menu.
CHP2     TXT  Standard messages and reminders.
CHP3-5   TXT  Setup Menus - options 1,2 and 3.
CHP6-7   TXT  Daily Menus - options 1 and 2.
CHP8     TXT  Daily Menu  - option 3.
CHP9-11  TXT  Daily Menus - options 4,5 and 6.
PREFACE  TXT  Introduction, Table of Contents, disclaimer etc.
READ     ME   Author supplied documentation file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## PREFACE.TXT

{% raw %}
```
      
     

     
     Before you start reading this User's Manual, see page xx.
     
          
     
                                   CPA-LEDGER
                                  (Version 3.3)
                                       by
            
                              TRONOLONE & FOSTER, PC 
                           CERTIFIED PUBLIC ACCOUNTANTS
                               9108 VOLUNTEER DRIVE 
                           ALEXANDRIA, VIRGINIA   22309

                      For technical assistance always contact:
                              James E. Foster, CPA
                              8529 Greeley Blvd.
                              Springfield, Virginia  22152
                              (703) 569-2254 (after 7:30 PM weekdays or
                                             anytime during the weekend)
     
           A Few Preliminary Notes to You:
     
           CPA-LEDGER is available for corporations, partnerships, and sole 
           proprietorships.  Also, for  each  of  the  three,  versions are 
           available for hard disk only, hard disk (CPA-LEDGER) and  floppy 
           disk (general ledger data  files), and  floppy  disk  only (with 
           CPA-LEDGER on drive B: and the general ledger on  the  A: drive.
           Thus, nine different versions are available.  See Appendix B for 
           details.   Ordering  information  begins  on  page  99-6.   
           
           APPENDIX B CONTAINS INFORMATION ON HOW  TO  LOAD  CPA-LEDGER  ON 
           YOUR MICROCOMPUTER.  PLEASE READ THE APPENDIX.
     
     ----->Before you attempt to  use  CPA-LEDGER,  you  should  possess  a 
           knowledge  of double-entry bookkeeping.  See the discussion that 
           begins on page 3. 
          
     ----->Before starting your own general ledger, be sure to read Chapter 
           3  and  Appendix  D,   paying  close   attention   to   "account 
           classifications" used by CPA-LEDGER.  It is very important  that 
           you  include  each  of  your  accounts  in  the  proper "account 
           classification". 
         
     ----->Also,  be SURE to read the last paragraph on page 1 of 2 of  the 
           READ.ME file on the Program Disk & Practice Disk.
     
       
          
     COPYRIGHT 1986, 1988, 1989 TRONOLONE & FOSTER, PC
                

     
                                                                        ii
     DISCLAIMER.
     
     CPA-LEDGER  (which  includes  the  computer  programs,   the  practice 
     diskette,  and  the  User's  Manual)  is distributed on an as is basis 
     without warranty or guarantee.  In no event will Tronolone & Foster be 
     liable to you,  any other person,  or any other entity for  any  loss, 
     damage,  or compensation, for any reason, that is caused or is alleged 
     to be caused by any part of the  CPA-LEDGER  system.  This  disclaimer 
     applies  to  any  and  all  copies  of  CPA-LEDGER  that you may have, 
     regardless of source. 
       
     Disclaimed losses,  damages,  and compensation include,  but  are  not 
     limited  to,  regardless  of  reason,  interruption  of service;  lost 
     profits; lost savings; loss of business; inability to use or delays in 
     the use of CPA-LEDGER upon initial receipt or  anytime  after  it  has 
     been  initially  received;  and  anticipatory profits or consequential 
     losses or damages related to use of the CPA-LEDGER computer  programs, 
     the CPA-LEDGER practice diskette, or the CPA-LEDGER User's Manual. 
     
     PERMISSION TO COPY. 
     
     Individuals  and  organizations  are  granted  permission  to copy the 
     CPA-LEDGER computer programs,  the CPA-LEDGER practice  diskette,  and 
     the  CPA-LEDGER  User's  Manual as a complete unit for distribution to 
     others,  PROVIDED that  (1) no  changes  are  made  to the  CPA-LEDGER 
     computer  programs  as  released  by  Tronolone  &  Foster,   PC;  the 
     CPA-LEDGER practice diskette; or the CPA-LEDGER User's Manual, as each 
     of the three were originally received from, or as subsequently changed 
     by,  Tronolone & Foster;  (2) the CPA-LEDGER  computer  programs,  the 
     CPA-LEDGER  practice  diskette,  and  the CPA-LEDGER User's Manual are 
     distributed together;  (3) there is no  charge  in  ANY  form  to  the 
     individual  or  organization  that  receives the copy.  Individuals or 
     organizations using CPA-LEDGER are granted permission to make as  many 
     internal  copies as are needed.  In all other cases,  not specifically 
     covered above,  written permission should be obtained from Tronolone & 
     Foster before copies are made of the CPA-LEDGER computer programs,  or 
     the CPA-LEDGER practice diskette,  or the  CPA-LEDGER  User's  Manual.  
     Also, see "USER SUPPORTED SOFTWARE", below. 
        
     HOW TO ORDER THE EXPANDED VERSION OF CPA-LEDGER.
     
     If  you  find  CPA-LEDGER  be  useful,   your  contribution  would  be 
     appreciated.  Complete ordering information is included in Appendix B, 
     together  with  an  explanation of the nine versions available to you. 
     Order from Tronolone & Foster,  PC.  The address is on the cover sheet 
     of this manual.  Your contribution will entitle you to: 
     
       1.  Up to twenty hours of consultation,  without charge,  by mail or 
           telephone,  on  how  to  use  CPA-LEDGER.  These  consultations, 
           however,  are limited to an explanation of the technical aspects 
           of  CPA-LEDGER  computer  processing  and  will  not include any 
           accounting or bookkeeping consultations or services in any form. 
          
     
      
                                                                        iii
     

           All  consultations  will  be  on  a  time available basis at the 
           convenience of Tronolone & Foster and will be between the  hours 
           of  7:30  PM  -  10:00  PM  (Virginia time) weekdays and anytime 
           weekends.  All telephone toll charges will be at the expense  of 
           the  person or entity making the call.  Long distance calls will 
           not be returned.  (We hope that you can understand this policy - 
           returning  scores  of  long  distance  calls  can  become  quite 
           expensive.) 
     
       2.  CPA-LEDGER's Balance Sheet  AND  footnote  capabilites  for  the 
           unadjusted trial balance, Income Statement and Balance Sheet. 
     
       3.  CPA-LEDGER's financial statement analysis (ratios) capability.
       
       4.  "New enhancements" to CPA-LEDGER.  See "A NOTE FROM JIM", on the 
           following page. 
             
       5.  The  latest version of CPA-LEDGER,  anytime that you wish.  THIS 
           OFFER IS LIMITED TO THE VERSION OF CPA-LEDGER THAT  YOU  ORDERED 
           FROM  TRONOLONE  &  FOSTER.  For  example,  if  you ordered from 
           Tronolone & Foster the partnership version for hard  disk  only, 
           this  offer  extends  only  to  the partnership version for hard 
           disk.  See Appendix B, beginning on page 99-3, if you would like 
           to have another version of the system.  
     
           To receive an updated copy of the version  that  you  have  (#5, 
           immediately above), send your name, address & $5 for postage and 
           diskette  handling.  If  you  did  not  order  your  version  of 
           CPA-LEDGER from Tronolone & Foster,  the updating service is not 
           available to you. 

      ---> PLEASE   REMEMBER   THIS   -  this  manual  discusses  the  full 
           capabilities of CPA-LEDGER,  some capabilites that  are  in  the 
           public domain and some that are not.  If you obtained CPA-LEDGER 
           from  the public domain and have not ordered the expanded system 
           from Tronolone &  Foster,  CPA-LEDGER  capabilites  not  in  the 
           public  domain  (items 2 & 3 above and all items discussed in "A 
           NOTE FROM JIM" below) are NOT included on  the  disks  that  you 
     ----> have.  PLEASE REMEMBER THAT AS YOU READ THIS MANUAL. 
                
     USER SUPPORTED SOFTWARE. 
     
     Individuals  and  organizations  are granted permission to change,  at 
     their own risk, the system so that it better serves their own personal 
     accounting needs or the organization's own internal accounting  needs.  
     Individuals  or organizations who demonstrate or distribute CPA-LEDGER 
     to others  are  NOT  given  permission  to  change  any  part  of  the 
     CPA-LEDGER  system  without  prior  written  approval from Tronolone & 
     Foster.  Also,  if you change any part of the CPA-LEDGER  system,  you 
     are NOT authorized to distribute any part of CPA-LEDGER, including the 
     User's Manual, to others.  Also see "PERMISSION TO COPY", above.
     
               
                                                                        iv
     
     A NOTE FROM JIM.
     
     If  you have questions on how to use the CPA-LEDGER computer programs, 
     please do not hesitate to contact me!  Your contribution entitles  you 
     to  that.  I enjoy talking to CPA-LEDGER users and your call or letter 
     will  be  most  welcome.  Call  me  anytime  after  7:30  PM  weekdays 
     (Virginia  time)  or  anytime  during  weekends.  My  phone number and 
     address are on the cover sheet of this  manual.  CPA-LEDGER  has  been 
     changed  from  processing described in previous versions of the User's 
     Manual.  Here are the major changes: 
     
     
       .  CPA-LEDGER   is   available   for    partnerships    and    sole 
          proprietorships,  as  well  as  for corporations.  See Page 99-3. 
          Also see Chapters 18 and 19.  There is one thing you should  know 
          about   CPA-LEDGER   User's  Manuals  that  are  in  circulation. 
          Beginning in July,  1988,  we released  CPA-LEDGER  versions  for 
          partnerships  and  sole  proprietorships.  The  old User's Manual 
          makes no mention of partnerships or  sole  proprietorships.  This 
          User's   Manual   was   updated   for   partnerships   and   sole 
          proprietorships by adding two new chapters - Chapters  18  &  19.  
          Also,  partnerships  and  sole  proprietorships  are  referred to 
          briefly  in  selected  places  throughout  this  User's   Manual.  
          Chapters 18 & 19, however, contain the detailed information. 
     
       .  New Enhancements (But see the next-to-last paragraph on page iii.)
     
          .  Option  5  (Print  General Ledger Accounts With Details Of All 
             Debits and All Credits) of the DAILY menu has been enhanced by 
             allowing you to summarize any account(s) that you  wish.  This 
             enhancement  could  prove  helpful (and save printing time) if 
             you wish to review  transactions  posted  to  only  a  limited 
             number of accounts.  See Chapter 10. 
     
          .  Option 3 (Print Financial Statements) of the  DAILY  menu  has 
             been changed and it should be much more useful to you.  Option 
             3  can  now print an income statement for any whole month,  or 
             series of consecutive whole months.  For example, you can have 
             CPA-LEDGER  print  an  income  statement  for January,  or for 
             February,  or for January through March,  or for February  and 
             March,  etc.  This  enhancement  will  be  useful  if  you are 
             interested  in  comparing  income  statements  for   differing 
             periods.  The  old  Option 3 printed financial statements from 
             the beginning  of  the  accounting  period  through  the  last 
             transaction  that  you entered,  and you could not control the 
             period  covered  in  the  printout.   This  feature  has  been 
             retained, with the added capability of an income statement for 
             a  whole  month  or  series  of consecutive whole months.  See 
             Chapter 8. 
          
     
     
                                                                          v
     

          .  Five  of the Daily Menu options have been enhanced so that you 
             can direct output to either the  printer  or  your  computer's 
             screen.  These  enhancements  will be useful if you don't need 
             printed output and you wish to,  say,  quickly  search  for  a 
             previous  transaction or to review all debits and credits to a 
             particular account.  The five options that  have  both  screen 
             and printout capabilities are: 
     
                .  Unadjusted trial balance.  See Chapter 7.
                .  Print  transactions that have been posted to the general 
                   ledger.  See Chapter 9. 
                .  Print general ledger accounts with details of all debits 
                   and all credits.  See Chapter 10. 
                .  Print bank deposits and checks written.  See Chapter 11. 
                .  Print general ledger accounts and their balances.  See
                   Chapter 12. 

          .  Option 1 of the DAILY menu  (the  one  you  use  to  post  the 
             general ledger): 
     
               .  Now displays the account title when you enter an  account 
                  number.  That  makes it easier to make sure that your are 
                  using the proper account as you  supply  CPA-LEDGER  with 
                  posting information. 
     
               .  Displays the cumulative total value of debits and credits 
                  as you proceed with each entry.  This makes it easier for 
                  you to keep track of  the  accuracy  of  your  debit  and 
                  credit values. (Don't worry - CPA-LEDGER watches what you 
                  do and will NOT post your general ledger unless the total 
                  value  of  debits equals the total value of credits.  The 
                  display information  is  merely  to  let  you  know  what 
                  CPA-LEDGER knows.) 
     
               .  Can now sum a long list of debits and credits, saving you 
                  time and frustration.  For example,  assume that you have 
                  entered  10  debits  to various expense accounts and that 
                  the sum of the debits is to  be  credited  to  your  bank 
                  account.  Rather  than  sum  the 10 debits,  you can have 
                  CPA-LEDGER do that for you - automatically.  See  Chapter 
                  6,  which  tells  you  to  enter "?" for the debit/credit 
                  indicator of the last account number and CPA-LEDGER  will 
                  automatically  credit the bank account.  After that,  you 
                  enter the check number and purpose of the transaction and 
                  the entry is complete. 
     
               .  Will let you  correct  your  mistakes  while  entering  a 
                  journal entry, thus saving you more time and frustration.  
                  Here  is  how  CPA-LEDGER  does that - at the end of each 
                  complete line of debit or credit information,  CPA-LEDGER 
                 
                 

                                                                         vi
     

                  asks if all of your  input  is  correct.  If  you  answer 
                  "yes",  you  are asked to enter the next debit or credit. 
                  If you answer  "no",  however,  CPA-LEDGER  ignores  your 
                  erroneous   input   on   that   line  and  asks  for  new 
                  information.  So,  if you press the "Enter" key and  THEN 
                  see  an  error,  you  are  allowed  to correct that error 
                  before going on to the  next  debit  or  credit.  In  old 
                  versions of CPA-LEDGER,  you had no choice but to proceed 
                  and  to  reject  the  entry  after  a  long   series   of 
                  unproductive  processing.  No  more.  See  Chapter  6 for 
                  details. 
      
     
          .  Option 10 of the DAILY menu is new.  See  Chapter  15.  Option 
             10 allows you to: 
     
              .  Save  standard transactions for automatic posting,  in the 
                 future. 

              .  Automatically post transactions that you previously saved. 

              .  Automatically post your bank account (or the bank  account 
                 of  your choice if you have more than one such account) at 
                 the end of a  journal  entry.  See  Chapter  15  -  a  new 
                 chapter.  The  new  Option 10 is intended to save you time 
                 and to make it easier for you to use CPA-LEDGER. 
              
          .  Option 4 of the SETUP menu is  also  new.  It  allows  you  to 
             automatically start your general ledger after the first year's 
             operation.  It  is  no longer necessary to reenter all of your 
             general ledger information. See Chapter 16, a new chapter. 
     
     From time to time,  I make changes to  CPA-LEDGER.  If  you  have  any 
     suggestions,  please  do  not  hesitate  to  contact  me.  As you have 
     probably found by now,  I want you to be pleased with CPA-LEDGER.  You 
     will find that I will welcome your ideas!  I have been programming too 
     long  to  think  that ANY computer program can be what EVERYONE wants. 
     Far from it.  First,  I can only generalize what hopefully will be the 
     most  useful  in the most number of cases.  Second,  I,  like you,  am 
     human.  I gave up perfection LONG ago.  So,  I have learned to  listen 
     very  carefully  to  the  suggestions of others - there is strength in 
     numbers.  That (constructive ideas),  mixed with a generous portion of 
     patience usually gets the job done, reasonably well. 
     
     We do NOT have a program of notifying you each time that CPA-LEDGER is 
     changed.  Contact  me  from  time  to  time.  I will advise you of the 
     latest changes,  if any.  After talking to me,  if you want the latest 
     release,  just sent $5 for postage and handling and I  will  rush  the 
     latest version to you.  See item 5 on page iii. 
     
     
     
                                                                        vii
     

     
     A FEW MORE THOUGHTS - FROM ALL OF US.
       
     Before proceeding,  there are several points that need to made  clear. 
     The  disks  you  received are called "Program Disk" and "Documentation 
     Disk".  They contain  (1)  the  CPA-LEDGER  computer  programs  (2)  A 
     PRACTICE  GENERAL  LEDGER,  and (3) the User's Manual.  Here is how to 
     distinguish between files on  the  disks  -  (1)  CPA-LEDGER  computer 
     programs  have  an  extension  of ".BAS".  (2) Files that comprise the 
     practice general ledger have an extension of ".FIL".  (3) User  Manual 
     files  have an extension of ".TXT".  (The "practice general ledger" is 
     already set up and is for practicing on how to use the system - it  is 
     NOT  intended  for use as the general ledger that you will use in your 
     business.) 
     
     Second, CPA-LEDGER is programmed NOT to accept any date that you enter 
     UNLESS that date is January 1,  1986 or thereafter.  The  examples  in 
     this  manual and the prompts given by CPA-LEDGER illustrate the FORMAT 
     of required dates - NOT the dates that you should  enter.  So,  please 
     remember,  always  use  the  actual transaction date - which should be 
     January 1,  1986 or a date after January 1,  1986.  Date  formats  are 
     described  later.  (Some  clients  have  a special need to enter dates 
     before 1986.  If you ordered from us and wish to  enter  dates  before 
     1986, call Jim.  He will change the programs for you.) 
     
     Third,  please do not overlook Chapters 18 and 19.  Those two chapters 
     tell  you  about  CPA-LEDGER  processing  for  partnerships  and  sole 
     proprietorships. 
     
                               
     
                                                                      viii
     
                                  PREFACE     

     
     AN AUTOMATED GENERAL LEDGER AND FINANCIAL STATEMENT SYSTEM. 

     CPA-LEDGER  is  an  automated  general  ledger and financial statement 
     system.   The  public  domain  version  comes  with  income  statement 
     capability.  Balance  Sheet  capability  is available from Tronolone & 
     Foster - see "HOW TO ORDER THE EXPANDED VERSION OF CPA-LEDGER", above.  
     Accounts receivable, accounts payable, and payroll capabilites are not 
     part of CPA-LEDGER,  either in the public domain or expanded  versions 
     of  the  system.  You  can keep these accounts in your general ledger, 
     but related subsidiary capability is not available. 
          
     CPA-LEDGER is designed  for  commercial  non-manufacturing  businesses 
     which  offer  products  for sale (and,  consequently,  a cost of sales 
     section on the income statement),  AND for service businesses  without 
     inventory  (and  without  a  cost  of  sales  section  on  the  income 
     statement).  Separate accounts can be set up for different product  or 
     service lines; however, the system is not designed to prepare separate 
     financial statements for each of the lines. 
     
     Various  small  businesses  may  find CPA-LEDGER useful.  Some of them 
     include retail  merchandising  businesses,  grocery  stores,  hardware 
     dealers,  hobby supply shops,  landscaping gardeners, restaurants, and 
     service establishments such as veterinarians, non-profit organizations 
     and accountants.  Test the system and find  out  if  CPA-LEDGER  suits 
     your  needs.  Then,  make  a  decision on whether it is useful to YOU.  
          
     You should know,  however, that CPA-LEDGER is generalized in the sense 
     that it  was  designed  to  meet  the  needs  of  a  large  number  of 
     businesses.  There  is  no  guarantee  that it will meet your specific 
     needs.  Only YOU can make that decision.  Use the "Program Disk" & the 
     practice general ledger files (see the INTRODUCTION and CHAPTER 1)  to 
     test  the  system.   Then  decide  if  CPA-LEDGER  will  satisfy  your 
     requirements.  (The practice general ledger is for a business  with  a 
     cost  of sales section on the income statement.  Remember,  CPA-LEDGER 
     can also prepare an income statement for service  businesses  -  those 
     that do not need a cost of goods sold section.) 
     
                                   
     YOU SELECT ACCOUNT TITLES AND PREPARE THE GENERAL LEDGER ENTRIES. 
     
     During  design,  CPA-LEDGER  was changed many times.  However,  we did 
     keep two of our original ideas.  First,  we wanted the user to be able 
     to  determine  the  number and the titles of accounts that would be in 
     the system.  That capability was retained. 
     
     
                                                                         ix

     Second,  we  wanted CPA-LEDGER to have plenty of muscle in the area of 
     recording even the most complex business transactions.  To do that, it 
     soon  became  evident  that  a  single-entry,   canned  approach   for 
     classifying  transactions  was  not satisfactory.  There were too many 
     limitations for today's complex business environment. 
       
     Regardless  of  the  canned  approach  used,   there  were  plenty  of 
     transactions  that just would not fit.  Always,  important transaction 
     possibilities either had to be ignored, or, possibly, misclassified if 
     they did occur. 
     
     So,  we designed CPA-LEDGER to handle ANY transaction,  regardless  of 
     its  simplicity  or  complexity.  To do that,  you and CPA-LEDGER will 
     form a team - you will supply the transactions and CPA-LEDGER will  do 
     the processing. 
         
     ERROR CHECKING. 
     
     You  should  know  that,  to  make  your  job  easier,  CPA-LEDGER has 
     extensive error checking capabilities.  Here are a few. 
     
          .  The system will not accept input that is either  too  long  or 
             too  short.  Consider,  for  example,  the  explanation  for a 
             general ledger entry.  If you try to  bypass  the  explanation 
             (too short),  CPA-LEDGER will tell you what you did wrong, and 
             demand input.  If you try to enter an explanation that is  too 
             long,  the  system  will  ask  that  your  input be the proper 
             length.  And, all of this is automatic. 
     
          .  CPA-LEDGER will not accept a  transaction  unless  the  dollar 
             values of debits and credits agree.  If they do not agree, the 
             system will tell you what is wrong and tell you to correct the 
             information.  Thus, the total value of all recorded debits and 
             the total value of all recorded credits will always agree. 
     
          .  Before  debit  and  credit dollars are accepted (assuming that 
             debit dollars equal credit dollars),  CPA-LEDGER lists on your 
             computer  screen  the  entire general ledger entry,  including 
             account titles.  Then,  you can accept or  reject  the  entry.  
             CPA-LEDGER lets you decide before it posts your books. 
     
          .  All  dollar  entries  (such as dollar amounts of transactions) 
             are verified before they are accepted. 
     
          .  All calendar date entries are verified. 
     
          .  CPA-LEDGER will not let  you  add  (post)  transactions  to  a 
             general  ledger  account that is not included in your chart of 
             accounts.   This  means  that  you  will   not   have   "lost" 
             transactions  -  lost  because of being added to a nonexistent 
             account. 
            
          
                                                                          x
     

          .  CPA-LEDGER will not let  you  start  a  new  account  with  an 
             illogical debit or credit.  For example,  you CPA-LEDGER knows 
             that it is illogical to start the account Cash On Hand with  a 
             negative amount.  It monitors your input and detects this type 
             of error. 
            
          .  CPA-LEDGER will  not  let  you  change  an  account's  opening 
             balance,  once you open the account with a dollar amount.  Nor 
             will it let you erase or  change  the  way  a  transaction  is 
             recorded,  once  that  transaction  is accepted by the system.  
             This provides an audit trail and gives you a  complete  record 
             of  everything  that  went  into  the CPA-LEDGER.  Imagine the 
             confusion if you (or someone else) changed previously recorded 
             data.  What a mess that could be.  So,  CPA-LEDGER simply will 
             not  allow  it to happen.  Order is the word,  with everything 
             fully documented and permanently recorded. 
                     
     SOME OTHER CPA-LEDGER FEATURES. 
     
     How frustrating it  is  to  be  using  a  microcomputer  and  have  to 
     constantly  refer  to  a  user's  manual for technical explanations of 
     error codes or for instructions on what to do next.  This is not  only 
     frustrating.  It is also inefficient. 

     We  solved  a  large  part of that problem.  As you use CPA-LEDGER you 
     will notice that: 
     
          .  You  will  have  a  choice of having CPA-LEDGER brief you,  in 
             simple understandable English,  on what it is about  to  do  - 
             before  it  does it.  This briefing contains an explanation of 
             all of the types of input that  will  be  expected.  You  will 
             know what will happen, before it happens.  
     
          .  When CPA-LEDGER expects more than one item of input on a line, 
             complete instructions appear above that line.  
     
          .  When CPA-LEDGER expects one item of input on a line,  complete 
             instructions appear on the same line.  

          .  CPA-LEDGER does not require long complex input.  Instead,  you 
             enter brief understandable information and CPA-LEDGER does the 
             rest  -  like using an account number to look up the account's 
             title and telling you what will be done with your input.  
             
          .  If you make a computer error in giving your input,  CPA-LEDGER 
             informs you that you made an error.  If  necessary,  it  tells 
             you  what it found to be wrong,  tells you what to do,  pauses 
             for you to determine the correct  input,  and  then  continues 
             where it left off. 
          
     
     
                                                                         xi

     
          .  The system provides you with a printed copy of your input.  If 
             information on that printed copy is needed at  a  later  time, 
             the  system  will inform you to get the printout and will give 
             you complete instructions on what to do. 
                  
          .  CPA-LEDGER tells you when it has finished processing and gives 
             complete instructions on what you should do next. 
     
          .  A  common mistake is for one to forget to turn on the printer. 
             CPA-LEDGER watches for that and informs you if your printer is 
             not ready.  Then, it waits for you to do whatever is required.  
                       
          .  CPA-LEDGER even tells you when to adjust  the  paper  in  your 
             printer and how to adjust it. 
           
         
     CPA-LEDGER   also   has   plenty   of  muscle  to  record  your  daily 
     transactions. For example: 
     
          .  Any one general ledger entry may have up to 30 debits  and  30 
             credits. 
     
          .  Each debit and credit may have any value up to $9,999,999.99. 
     
          .  Total  values  of  up to $999,999,999.99 may be printed on the 
             printer. 
     
          .  Checks  may  be  numbered  from  1  to  999999  or  any  other 
             combination  of  six  characters (alphabetic or numeric,  or a 
             combination of both). 
     
          .  Documents that support a transaction may be numbered from 1 to 
             9999999999  or  any  other  combination   of   10   characters 
             (alphabetic or numeric, or a combination of both). 
     
          .  You  may use any combination of 1 to 30 characters to identify 
             the payee of a check. 
     
     

                                                                        xii 
     
     
          .  You may use any combination of 1 to 22 characters to  describe 
             the purpose of transaction. 
     
          .  You may use any combination of 1 to 30 characters as the title 
             of a general ledger account. 
     
          .  Your general ledger may have up to 9,999 accounts. 
     
     CPA-LEDGER will also: 
         
          .  List your chart of general ledger accounts. 
       
          .  Add new general ledger accounts. 
   
          .  Retrieve and print any general ledger entry that  you  entered 
             into system. 
     
          .  Summarize  your  general  ledger  entries  by  general  ledger 
             account and report the results to you. 
     
          .  Provide you the status of any account. 
     
          .  Prepare a listing of all deposits and checks, by bank account. 
         
          .  Prepare a trial balance so that you may review the  status  of 
             the accounts. 
     
          .  Prepare  a  formal  Income  Statement.  It will also prepare a 
             formal Balance Sheet,  allow you  to  add  footnotes  to  your 
             financial  statements,  prepare  Statements of Owners' Capital 
             for  partnerships  and  proprietorships,  and  analyze  (using 
             ratios)  the financial statements.  For partnerships,  you can 
             direct CPA-LEDGER to distribute profits/losses  automatically, 
             or  you  may  make the distribution manually.  See Chapters 18 
             and 19. 
     
          .  Automatically start your general ledger after the first year.
     
          .  Allow  you  to  "save"  standard transactions for posting at a 
             later time. 
     
          .  Post your bank account, at the conclusion of a journal entry.
     
          .  Sum  previous debits and credits of an entry and determine the 
             dollar amount for the last debit or credit. 

     These are only a  few  examples.  There  are  more.  You  will  become 
     familiar with all of the features as you use the system.  
     
     
     

                                                                        xiii 

     
                                TABLE OF CONTENTS
     
     CHAPTER
              DISCLAIMER, HOW TO ORDER, AND PREFACE                       ii 
              INTRODUCTION                                                1
                PC-DOS                                               1
                Program Disk and Practice General Ledger             1
                PC-DOS, BASICA, Drive A:, Drive B:, Drive C:
                 & the COPY Command                                  2
                Using CPA-LEDGER                                     2
                Equipment Needs                                      2
                PC-DOS and BASICA                                    3
                Your Knowledge of Double-Entry Bookkeeping           3
                Automatic Features                                   3
                How This Manual Is Organized                         4
     
       1      CPA-LEDGER OVERVIEW                                         6
                Menus - The Way to Access CPA-LEDGER Options         6
                How to Begin Using CPA-LEDGER                        6
                An Overview of the "SETUP" Menu                      7
                SETUP Option 1 - Establish a New General Ledger      7
                                 and Assign Account Titles
                SETUP Option 2 - Identify Selected Account Numbers   8
                                 That Are In The New General Ledger
                                 And Identify Your Business Name
                                 (For partnerships, SETUP Option 2
                                 also asks for the procedure to
                                 be followed in allocating profits/
                                 losses to the partners.  See
                                 Chapter 18.)
                SETUP Option 3 - Assign Beginning Dollar Amounts     9
                                 to New General Ledger Accounts    
                SETUP Option 4 - Start This Year's General Ledger    9
                                 From Last Year's General Ledger
        
                An Overview of the "DAILY" Menu                      9

                DAILY Option 1 - Enter New Transactions In The      10
                                 General Ledger - Not Automatic.
                                 See Option 10.
                DAILY Option 2 - Print An Unadjusted Trial Balance  10
                DAILY Option 3 - Print Financial Statement(s)       10
                                 (Note:  For partnerships and sole
                                 proprietorships, DAILY Option 3
                                 also prints statement(s) of
                                 partners'/owner's capital.
                                 See Chapters 18 and 19.)
     
     


                                                                       xiv 

     
                                TABLE OF CONTENTS
     

     CHAPTER
     
       1        DAILY Option 4 - Print Transactions That Have Been  11
                                 Posted to the General Ledger
                DAILY Option 5 - Print General Ledger Accounts      11
                                 With Details Of All Debits And
                                 All Credits
                DAILY Option 6 - Print Bank Deposits And Checks     11
                                 Written (Check Register)          
                DAILY Option 7 - Print General Ledger Accounts      12
                                 And Their Balances         
                DAILY Option 8 - Add New Accounts To The General    12
                                 Ledger        
                DAILY Option 9 - Print a Post-Closing Trial Balance 13
                DAILY Option 10- Enter New Transactions In The      13
                                 General Ledger - Automatic
                Backing Up Your Data Diskette                       13
     
       2      STANDARD MESSAGES AND REMINDERS                            14
                Printer Reminder                                    14
                Errors in Input                                     15
                Today's Date                                        16
                CPA-LEDGER Briefings                                17
     
       3      SETUP MENU  -  OPTION 1 - Establish A New General          19
                                        Ledger And Assign Account
                                        Titles
                The SETUP Menu                                      19
                What "SETUP" Options 1, 2, and 3 Ask For            20
                What Option 1 Is Used For                           20
                What Option 1 Asks For                              21
                Option 1 Sequence of Execution and an Illustration  22
                Error Messages                                      24
                Printed Output                                      24
                Practice                                            25
     
          
     
     
                                                                        xv
     
     
                                TABLE OF CONTENTS
     
     CHAPTER
     
     
       4     SETUP MENU  -  OPTION 2 - Identify Selected Account         27
                                       Numbers That Are In The
                                       New General Ledger And
                                       Identify Your Business
                                       Name
                                 (For partnerships, SETUP Option 2
                                 also asks for the procedure to
                                 be followed in allocating profits/
                                 losses to the partners.  See
                                 Chapter 18.)
               What Option 2 is Used For                            27
               What Option 2 Asks For                               27
               Option 2 Sequence of Execution                       27
               An Illustration                                      28
               Error Messages                                       29
               Practice                                             31
     
       5     SETUP MENU  -  OPTION 3 - Assign Beginning Dollar           32
                                       Amounts To New General
                                       Ledger Accounts.
               What Option 3 is Used For                            32
               What Option 3 Asks For                               32
               A Suggested Procedure                                32
               Option 3 Sequence of Execution                       32
               An Illustration                                      33
               Error Messages                                       34
               Printed Output                                       36
               Practice                                             36
     
         NOTE:  SEE CHAPTER 16 FOR SETUP MENU OPTION 4, WHICH
                PROVIDES FOR AUTOMATIC STARTING OF YOUR GENERAL
                LEDGER AFTER THE FIRST YEAR'S USE OF CPA-LEDGER.
     
       6     DAILY MENU  -  OPTION 1 - Enter New Transactions In         37
                                       The General Ledger - Not
                                       Automatic.  See Option 10.
               The DAILY Menu                                       37
               What Option 1 Is Used For                            38
               Option 1 Sequence of Execution                       38
               How to Discontinue Input for a General Ledger Entry  41
               Reviewing And Approving Your General Ledger Entry    42
               Getting Ready For The Next General Ledger Entry      43
               Error Messages                                       44
               Option 1 is continued on the next page.
     
     
     
     
     
                                                                       xvi
     
     
                                TABLE OF CONTENTS
     
     CHAPTER
     
       6       An Illustration                                      47
               Printed Output                                       50
               Practice                                             50
     
       7     DAILY MENU  -  OPTION 2 - Print An Unadjusted Trial         52
                                       Balance
               What Option 2 Is Used For                            52
               Footnote Disclosures                                 52
               Practice                                             54
     
       8     DAILY MENU  -  OPTION 3 - Print Financial Statement(s)      55
                                 (Note:  For partnerships and sole
                                 proprietorships, DAILY Option 3
                                 also prints statement(s) of
                                 partners'/owner's capital.
                                 See Chapters 18 and 19.)
               What Option 3 Is Used For                            55
               Option 3 Sequence of Execution and an Illustration   55  
               Error Messages                                       59
               Printed Output                                       60
               Footnote Disclosures                                 62
               Example of a Footnote Disclosure                     63
               Financial Statement Analysis                         64
               Ratios Prepared By Option 3                          65
               Sample Printout -  Analysis of Financial Statements  65
               Practice                                             68
     
     
       9     DAILY MENU  -  OPTION 4 - Print Transactions That Have      69
                                       Been Posted To The General
                                       Ledger
               What Option 4 Is Used For                            69
               Option 4 Sequence of Execution and an Illustration   69
               Error Messages                                       72
               Printed Output                                       72
               Practice                                             73
     
          
      
                                                                      xvii
     
                                TABLE OF CONTENTS
     
     CHAPTER    

     
     
      10     DAILY MENU  -  OPTION 5 - Print General Ledger              74
                                       Accounts With Details of
                                       All Debits and All Credits
               What Option 5 Is Used For                            74
               Option 5 Sequence of Execution and an Illustration   75
               Error Messages                                       77
               Printed Output                                       77
               Practice                                             78
     
      11      DAILY MENU  -  OPTION 6 - Print Bank Deposits and           79
                                       Checks Written (Check
                                       Register)
               What Option 6 Is Used For                            79
               Option 6 Sequence of Execution and an Illustration   79
               Error Messages                                       81
               Printed Output                                       82
               Practice                                             82
     
      12      DAILY MENU  -  OPTION 7 - Print General Ledger              83
                                        Accounts And Their Balances
               What Option 7 Is Used For                            83
               Option 7 Sequence of Execution and an Illustration   84
               Error Messages                                       85
               Printed Output                                       85
               Practice                                             86
     
      13      DAILY MENU  -  OPTION 8 - Add New Accounts To The           87
                                        General Ledger
               What Option 8 Is Used For                            87
               Option 8 Sequence of Execution and an Illustration   88
               Error Messages                                       91
               Printed Output                                       93
               Practice                                             93
     
      14      DAILY MENU  -  OPTION 9 - Print A Post-Closing              94
                                        Trial Balance
               What Option 9 Is Used For                            94
               Option 9 Sequence of Execution                       94
               Error Messages                                       94
               Practice                                             95
     
     

                                                                      xviii

     
                                TABLE OF CONTENTS
     
     CHAPTER    

     
     
     15       DAILY MENU  -  OPTION 10 - Enter New Transactions In      96-1
                                         The General Ledger -
                                         Automatic
               A note on page numbering                            96-1
               What Option 10 is Used For                          96-1
               Option 10 Sequence of Execution                     96-3
               Practice                                            96-11
     
     16      SETUP MENU  -  OPTION 4 - Start This Year's General         96-13
                                       Ledger From Last Year's
                                       General Ledger
               What Option 4 is Used For                           96-13
               What Option 4 Asks For                              96-13
               Option 4 Sequence of Execution                      96-14
               Printed Output                                      96-16
               Practice                                            96-16

     17      SETUP MENU  -  OPTION 6  AND
             DAILY MENU  -  OPTION 11 - Stop All CPA-LEDGER              96-17
                                        Processing And Return
                                        Control to DOS
     
     18      CPA-LEDGER & PARTNERSHIPS                                   96-18
              Why a Separate Chapter on Partnerships?              96-18
              The SETUP Menu                                       96-18
              SETUP Menu Option 1                                  96-19
              SETUP Menu Option 2                                  96-20
              The DAILY Menu                                       96-23
              Manual Allocation of Profit/Loss to Partners         96-24
              Automatic Allocation of Profit/Loss to Partners      96-28
              The Balance Sheet (DAILY Menu Option 3)              96-31
              Statement of Partner's Capital                       96-32
     19       CPA-LEDGER & SOLE PROPRIETORSHIPS                          96-35
              Why a Separate Chapter on Sole Proprietorships?      96-35
              SETUP Menu Option 1                                  96-35
              SETUP Menu Option 2                                  96-35
              DAILY Menu Option 3                                  96-36
     
     A listing of appendices is on the next page.
     
     

     
                                                                        xix
     

     APPENDIX A  -  CPA-LEDGER AND THE INCOME STATEMENT'S
                    COST OF GOODS SOLD SECTION                           97
     APPENDIX B  -  INSTALLING AND ORDERING CPA-LEDGER                   99
     APPENDIX C  -  SOME COMMENTS ON CAPACITIES                         100
     APPENDIX D  -  SOME COMMENTS ABOUT AN ACCOUNTING AND 
                    BOOKKEEPING SYSTEM                                  103
                      Cash Versus Accrual Basis of Accounting      104
                      Procedures and Controls                      105
                      The Accounting Cycle                         106
                      Adjusting Entries                            108
                      Reversing Entries                            112
                      The Balance Sheet and the Income Statement   112
     READ-------->    Account Classifications Used By CPA-LEDGER   113
                      Accounts To Be Included In Your Accounting
                      System                                       116
     APPENDIX E  -  SOME FORMS THAT MAY BE USED WITH CPA-LEDGER         117
                      Discussion                                   117
                      FORM 1  - Daily Cash Report                  118
                      FORM 2  - Accounts Receivable Collections    120
                      FORM 3  - Other Cash Receipts                122
                      FORM 4  - Cash Payments for Merchandise
                                Purchases                          123
                      FORM 5  - Operating Expenses Paid in Cash    
                                (Other Than Salaries and Wages)    124
                      FORM 6  - Sales Returns Paid in Cash or
                                Sales Returns Credited to
                                Accounts Receivable                125
                      FORM 7  - Other Cash Disbursements           127
                      FORM 8  - Sales on Account                   128
                      FORM 9  - Check Payments for Merchandise
                                Purchases                          129
                      FORM 10 - Operating Expenses Paid By Check   
                                (Other Than Salaries and Wages)    130
                      FORM 11 - Sales Returns Paid By Check        131
                      FORM 12 - Other Disbursements By Check       132
                      FORM 13 - Salaries and Wages                 133
                      FORM 14 - Purchases on Account               135
                      FORM 15 - Purchase Returns                   136
                      FORM 16 - Depreciation                       138
                      FORM 17 - Other General Ledger Entries       139 
      
       
     
     
                                                                         xx
     
     
     This User's Manual can be used for both the public domain and expanded 
     versions for CPA-LEDGER.  The manual explains the full capabilities of 
     CPA-LEDGER,  and if you are using  the  public  domain  version,  some 
     capabilities  described are not included in the computer programs that 
     you have.  Please remember that. 
     
     Also,  the expanded version of CPA-LEDGER comes on three diskettes and 
     the public domain version on two diskettes.  The public domain version 
     diskettes are called: 
              

       .  Program Disk & Practice Disk, which contains:
     
           .  The CPA-LEDGER computer programs (files with an extension  of 
              ".BAS". 
           .  A practice general ledger (files with an extension of ".TXT". 
     ----->.  Portions of the User's Manual (files with an extension of 
              ".TXT> 
      
       .  Documentation Disk,  which contains the REMAINDER  of  the  User's 
          Manual (files with an extension of ".TXT").
     
     
     As you read the User's Manual,  you will notice that three  disks  are 
     referred  to  (as  mentioned  above) and that you are advised that the 
     above files are on different diskettes.  For example, for the expanded 
     version, the practice general ledger is on disk 2 of the Documentation 
     Disk.  Just remember,  if  you  have  the  public  domain  version  of 
     CPA-LEDGER, disk contents for you are as described above. 
     
     

















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0468

     Volume in drive A has no label
     Directory of A:\

    CHP1     TXT     38757   1-23-89  10:16a
    CHP15    TXT     29625   1-23-89  10:15a
    CHP16    TXT      9492   1-23-89  10:17a
    CHP17    TXT       759   1-23-89  10:17a
    CHP2     TXT      7653   1-23-89  10:16a
    CHP3-5   TXT     42630   1-23-89  10:16a
    CHP6-7   TXT     44708   1-23-89  10:16a
    CHP8     TXT     42138   1-23-89  10:15a
    CHP9-11  TXT     39034   1-23-89  10:16a
    PREFACE  TXT     54957   1-03-80  12:49a
    READ     ME       4938   1-03-80   1:23a
    FILES468 TXT      1201   3-14-89  10:24a
    FILES466 TXT      2173   3-14-89  10:22a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   3-08-89   3:34p
    MANUAL   BAT       165   3-08-89   3:34p
           16 file(s)     318962 bytes
                           34816 bytes free
