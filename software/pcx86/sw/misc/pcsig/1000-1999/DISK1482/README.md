---
layout: page
title: "PC-SIG Diskette Library (Disk #1482)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1482/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1482"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PERSONAL LEDGER"

    PERSONAL LEDGER will help you keep track of all your financial
    activities.
    
    Each transaction includes a check number or an entry number, a one-word
    description, payee/comment, amount, and date of the transaction.
    Entries can easily be sorted according to number or date. Automatic
    entry features are included to modify, delete, or search for previous
    entries. For personal sorting purposes, transactions may be grouped
    together in any of 10 user-defined categories, with each category having
    up to 20 descriptions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1482.TXT

{% raw %}
```
Disk No: 1482
Program Title:  PERSONAL LEDGER version 1.25
PC-SIG version: 2

PERSONAL LEDGER is a simple program that will help you keep track of all
your financial transactions.  Each financial transaction includes a
check number or an entry number, a one-word description, payee/comment,
amount, and date of the transaction.  Entries can automatically be
sorted according to number or to date.  Automatic entry features are
included, and you can also modify, delete, and search for previous
entries.  For personal sorting purposes, transactions may be grouped
together in any of 10 user defined categories, with each category having
up to 20 descriptions.

Usage:  Database/Accounting.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

ASSETS   PL   Data file
DEPOSITS PL   Data file
PL       DOC  Documentation
PL       EXE  Main program

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1482 PERSONAL LEDGER  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: MANUAL (press enter)                  ║
║                                                                         ║
║ To start the PERSONAL LEDGER program, type: PL (press enter)            ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PL.DOC

{% raw %}
```






                                                   March 12, 1989

                            Personal Ledger 1.20
                      Copyright 1982, 1987 A. A. Weber



   I. Overview
      Personal Ledger is  a  personal financial record keeping program that
      is very powerful  and  yet  very  simple to use. Personal Ledger will
      help you track  ALL  of  your  financial records, either by ASSET and
      LIABILITY or by  DEPOSIT  and  EXPENSE.  The records that you want to
      track will be  grouped  by  CATEGORY  and  DESCRIPTION automatically.
      Since  Personal  Ledger  can  summarize  each record into one of  ten
      CATEGORIES, and within each CATEGORY into one of twenty DESCRIPTIONS,
      you have the  power  to  categorize  records into up to 200 different
      groups. Furthermore, you have complete  control  over  the  naming of
      both CATEGORIES and DESCRIPTIONS. Each financial transaction you want
      to track  consists  of  just  a  few  pieces of information: an entry
      number  (such  as   a   check   number),   a   one-word  DESCRIPTION,
      payee/comment, amount, and date.

      Personal Ledger consists of five files, four of which are included as
      a shareware distribution:

      PL.EXE          Personal Ledger 1.20

      PL.DOC          This documentation

      ASSETS.PL       An example ASSETS/LIABILITIES Personal Ledger file.

      DEPOSITS.PL     An  example  DEPOSITS/MEMOS/EXPENSES  Personal Ledger
                      file.

      The fifth file,  Personal  Ledger X (PLX.EXE), offers enhancements to
      Personal Ledger and is not being distributed as shareware. Details on
      obtaining PLX.EXE are included at the end of this documentation.

      You  can  begin  using Personal Ledger with the example ASSETS.PL and
      DEPOSITS.PL files and adjust  them  to your needs, or create your own
      Personal  Ledger  files.   Either   way,  as  you  enter  and  adjust
      transactions,  you  will  see  your  BALANCE  and   SUMMARIES  change
      immediately.

      Personal     Ledger     handles    ASSETS/LIABILITY     (A/L)     and
      DEPOSITS/MEMOS/EXPENSES (DME) files in slightly different ways.

      A/L files treat  the  DESCRIPTIONS  within  each  of  the  first five
      CATEGORIES as ASSETS and the DESCRIPTIONS within last five CATEGORIES
      as LIABILITIES. Therefore, each transaction  into  one  of  the ASSET
      CATEGORIES  will  cause  the  CURRENT  BALANCE to increase,  while  a
      transaction  into  one  of the LIABILITY CATEGORIES  will  cause  the
      CURRENT BALANCE to decrease.






      DME  files  treat  a DESCRIPTION within any category according to the
      first four characters within  that  DESCRIPTION.  Transactions within
      DESCRIPTIONS that begin  with  the four characters 'DEPO' are treated
      as DEPOSITS and will cause  the CURRENT BALANCE (and, when 'CLEARED',
      the CLEARED BALANCE) to  increase.  Transactions  within DESCRIPTIONS
      that begin with  the  four  characters  'MEMO'  are  treated  as MEMO
      DESCRIPTIONS  (information  only)  and  will  leave  the  CURRENT AND
      CLEARED BALANCES unchanged. Transactions within any other DESCRIPTION
      are treated as  EXPENSES  and  will  cause  the  CURRENT  and CLEARED
      BALANCES to decrease.

      As  mentioned  above,  DME files also contain a CLEARED BALANCE. This
      BALANCE functions like the  BALANCE  of  your bank account statement.
      The CLEARED BALANCE allows you  to track any account, 'CLEARING' each
      transaction as it is recorded on your account  statement  while still
      tracking the CURRENT BALANCE as  the BALANCE of all transactions. See
      the  'CLEAR'  and  unCLEAR  functions  in the ENTRY section for  more
      information on 'CLEARING' transactions.

         A. Simple File Access
            Personal Ledger allows you to set up a "Current Directory Path"
            (consistent with MS-DOS(tm) 2.0 and up).  Then  Personal Ledger
            will  display  all  'PL'  data  files  within  that  Directory,
            itemizing each as A/L or DME. If there are no "PL" files in the
            "Current Directory" (or if  you  hit  the  <ESC> key instead of
            picking a file), you may create a new Personal Ledger file.

               1. Selecting a current Ledger File.
                  You may select any  file  appearing  within the file menu
                  window by using  the  cursor  movement  keys  and hitting
                  <ENTER> once you  have  highlighted the file you wish for
                  your current session.

                  Creating a new Ledger File.
                  If no files appear (or you hit "ESC" instead of selecting
                  one),  you will be asked for a new  file  name.  Enter  a
                  filename  (and extension, if you wish,  as  long  as  the
                  extension  begins with  the  characters  "PL").  Personal
                  Ledger will then prompt you for  subsequent  file related
                  information, such as type  (A/L  or  DME),  account year,
                  (your CURRENT and CLEARED BALANCES, if  you  select DME),
                  and the names of all CATEGORIES and DESCRIPTIONS that you
                  wish to activate. You do not need to supply names for all
                  CATEGORIES and DESCRIPTIONS at this time.

                  Within  a  CATEGORY,  when   you   finish   entering  the
                  DESCRIPTIONS you want, just hit  <ENTER>  instead  of the
                  next  DESCRIPTION  and  you will skip down  to  the  next
                  CATEGORY. Once you are finished with  all  CATEGORIES you
                  wish to name, hit <ENTER> for the next one.  If  you  are
                  creating  an A/L file, you can  enter  just  those  ASSET
                  CATEGORIES you want, hit  <ENTER>,  and  skip down to the
                  LIABILITY CATEGORIES you want to enter. Remember that you
                  can   always   start   with   the  example  ASSETS.PL  or



                              - 2 -






                  DEPOSITS.PL  file,  initialize  the BALANCE(s) within the
                  ENTRY/INIT  function,  and  modify whatever CATEGORIES or
                  DESCRIPTIONS you wish within the UPDATE section.

         B. Simple Data Entry
            The  record  entry  process  for  both  DME  and A/L  files  is
            identical. Each entry requires an entry number,  which consists
            of up to six characters (including blanks), a DESCRIPTION up to
            10 characters long,  a  Payee/comment entry up to 20 characters
            long, an amount (up to $9999999.99), and a  date  in MM/DD/YYYY
            format. The only  other  entry field tracked by Personal Ledger
            that you can access applies just to DME files.  This  field  is
            activated when you 'CLEAR'  an  entry  and deactivated when you
            'unCLEAR' it. The last field shown for each entry is the actual
            position of that entry within the Personal Ledger  file  and is
            displayed for information only. Because of sorting capabilities
            within Personal  Ledger,  entries  may  be  moved  to different
            record positions.

               1. Entry Number
                  The Entry Number field is a six-character field that will
                  basically accept anything, even six blanks. While some of
                  the  entry  features (MODIFY/DELETE/SORT,  etc.)  utilize
                  this  field  in  performing  their  function,  it  is not
                  essential that all entries in this field be different. In
                  fact, you may  find  that  entering  transactions  with a
                  common set of characters is advantageous, especially when
                  sorting.

               2. DESCRIPTION
                  This KEY field controls what happens to  your transaction
                  once  entered.  You  may enter all  or  just  part  of  a
                  DESCRIPTION into this field. Personal Ledger will attempt
                  to match it with those DESCRIPTIONS  you  have previously
                  activated. If Personal Ledger finds a  perfect  match, it
                  will summarize this entry within that DESCRIPTION without
                  further  comparisons. However, if these characters  match
                  any part of a DESCRIPTION,  Personal  Ledger  will prompt
                  you to decide whether that  DESCRIPTION  is  the  one you
                  want this transaction to be entered within. Until you say
                  yes, the comparison process will continue. If no match is
                  found,   Personal  Ledger  will  ask  you  whether   this
                  DESCRIPTION is a new one, allowing you to move the cursor
                  to the CATEGORY  you  want and activate a new DESCRIPTION
                  within that CATEGORY, if that  CATEGORY  has  room (fewer
                  than  20  active  DESCRIPTIONS).  If  you  decide  not to
                  activate this DESCRIPTION, just  hit  the  <ESC>  key and
                  Personal   Ledger   will  ask  you   to   re-enter   your
                  DESCRIPTION.   If  you  leave  your  DESCRIPTION   blank,
                  Personal Ledger will return you to the MAIN MENU.

                  As the display indicates, you can RECALL your entire list
                  of DESCRIPTIONS by entering <ALT> and  <R>  keys together
                  at any time during your DESCRIPTION entry. Scroll through



                              - 3 -






                  each  category  by  hitting  any  key, or return  to  the
                  DESCRIPTION entry by hitting the <ESC> key.

                  You  can  also  re-enter  the  DESCRIPTION  of  the  last
                  transaction in your file (normally the last  one entered,
                  unless  you  have  sorted   your   file   since  entering
                  transactions)   by  entering  the  <ALT>  and  <S>   keys
                  together. If you have  several  transactions,  all within
                  the same DESCRIPTION, <ALT-S> will speed entry.

               3. Payee/Comment Area
                  The  Payee/Comment Area is a twenty-character field  that
                  may  contain  any  characters   or   comments   you  want
                  associated with your current entry,  such  as  the actual
                  PAYEE. Some of the other features allow screening on this
                  field.

               4. Entry Amount
                  This   field  accepts  any  amount  from  -999999.99   to
                  9999999.99. Because this field is numeric, it will accept
                  negative  numbers. Personal Ledger, however, expects  all
                  transactions to be made using positive numbers.  Only the
                  CURRENT (or  CLEARED)  BALANCE  is  expected  to  ever be
                  negative.

               5. Date
                  This  field   accepts   MM/DD/YYYY   date   entries  that
                  correspond to the date the transaction was made. Personal
                  Ledger  does  not  keep track of the date you entered the
                  transaction into Personal Ledger.

               6. CLEARED Flag
                  This field, active  only  within  a  DME  file, indicates
                  whether  an entry has been "CLEARED".  One  of  the  Data
                  Entry  functions   accesses   this   field.   Clearing  a
                  transaction  will  cause  that  transaction's  amount  to
                  affect the "CLEARED BALANCE"  according  to  that entry's
                  DESCRIPTION Name (i.e., adding to the CLEARED  BALANCE if
                  the  DESCRIPTION  name  begins  with DEPO, or subtracting
                  from it if the  DESCRIPTION  begins  with  anything other
                  than DEPO or MEMO. (Remember that MEMO DESCRIPTIONS leave
                  both the CURRENT and CLEARED BALANCES unchanged. However,
                  they are  not automatically cleared to allow you to CLEAR
                  them when you want to.)

               7. Transaction number
                  Up  to  400 entries (1500 in PLX)  may  be  stored  in  a
                  Personal Ledger Data file. Each transaction is  stored in
                  the  order  entered   unless  reordered  via  the  "SORT"
                  Function within the ENTRY part of  Personal  Ledger. This
                  number is shown for information only.

         C. Simple Status




                              - 4 -






            Within each CATEGORY and DESCRIPTION both a count and a summary
            are kept of all  transactions.  These  counts and summaries are
            accessed automatically during data entry and on  command within
            the SUMMARY function.

         D. Key-Pad Activation
            The numeric  key-pad is activated by toggling the num-lock key.
            When num-lock (and the key-pad) is on, the cursor keys  will be
            de-activated except during menu selections.

  II. Main Parts of the Program
      Personal Ledger is  composed  of  five  main  parts,  ENTRY  of data,
      SUMMARY     (Reports),     UPDATE    (updating     or     maintaining
      CATEGORY/DESCRIPTION names), LIST (list the entire data contents of a
      PL file into a text file), and FINISH (ending the current session).

         A. ENTRY - Entering data transactions into Personal Ledger

               1. Data Entry Functions
                  Several  functions  are  available  to  assist  entering,
                  modifying, or deleting transactions. Each function can be
                  activated by hitting  <ENTER>  while the cursor is on it,
                  by typing the function name,  or by holding the <ALT> key
                  down while typing the function's first character. Not all
                  of the functions  available  are shown. To see more, move
                  the cursor all the way right with the right cursor arrow,
                  exposing those remaining functions. Furthermore,  some of
                  the features are  indicated as FUTURE FEATURES, available
                  in  PLX.  Under  the function menu are  the  most  recent
                  transactions. If you want to view all of  them,  move the
                  cursor all the way to the left with the  arrow  keys  and
                  hit the left arrow  one  more  time.  To reveal the other
                  functions again, hit the right arrow key.

                     a. AUTO
                        This function  has  two  options  within,  NEW  and
                        RENUMBER.

                           i. NEW
                              NEW allows you to  enter  up  to  a six-digit
                              number within  the  Entry  Number  field that
                              will  be  automatically  incremented by 1 for
                              each  additional  transaction  you enter. You
                              may turn off this function by over-typing the
                              function  name 'NOAUTO'  or  by  hitting  the
                              <ESC> key. In PLX Personal Ledger will search
                              all  previous  entry  numbers for the highest
                              one, increment it, and allow you to choose it
                              or another  one  with  which  to  start  your
                              series of entries. While AUTO-NEW  is active,
                              you may also access  the  other  functions by
                              entering the  function  name  instead  of the
                              current AUTO number (or the <ALT> key and the
                              first  character  of  the function name.) You



                              - 5 -






                              may  also over-type  a  different  number  or
                              other   transaction    characters,   allowing
                              transactions  to  be  entered  that  are  not
                              number  related while still remaining in  the
                              AUTO Function.

                          ii. RENUMBER
                              RENUMBER allows you to RENUMBER numeric Entry
                              Numbers. Personal Ledger  will  request three
                              numbers: A 'from'  number, a 'to' number, and
                              a 'new from' number. It  will  then  scan all
                              records, flagging those  entries  whose entry
                              numbers are between  'from' and 'to'. It will
                              then  display  each  entry number, its record
                              number in your ledger file for reference, and
                              the new entry number. You can then  allow the
                              change by hitting any  key  except  the <ESC>
                              key. Hitting the <ESC>  key  will  cause that
                              entry to remain unchanged.

                     b. NOAUTO
                        This  function turns  off  the  AUTO/NEW  numbering
                        function.  You  can  also  turn  off  the  AUTO/NEW
                        numbering  function by  hitting  <ESC>  instead  of
                        <ENTER> when the next ENTRY number appears.

                     c. MODIFY
                        This function  allows you to modify any of the five
                        normal data entry fields, including the DESCRIPTION
                        field.  The effect  of  modifying  the  DESCRIPTION
                        field is the same as deleting  the  transaction and
                        adding it under the new DESCRIPTION.

                     d. DELETE
                        This function allows you  to  remove  a transaction
                        completely  from  Personal  Ledger.  If  you  later
                        decide you didn't want  to  delete  it,  simply re-
                        enter it.

                     e. FIND
                        You can  review  transactions  with  this function.
                        FIND will allow you  to  retrieve  either  a single
                        transaction  or  all  transactions, displaying them
                        within the Entry window.

                           i. Entry No.
                              Personal  Ledger will request your Entry  No.
                              and retrieve each transaction whose Entry No.
                              matches your request  for your review. If you
                              answer  'Yes' to the question 'Is this  it?',
                              the retrieval process ceases.

                              All




                              - 6 -






                              This function allows many transactions  to be
                              reviewed (or echoed to a standard Printer via
                              LPT1:  --  see  your  DOS manual for standard
                              printer set-up). You will be asked to provide
                              a start date (the default date  shown  is the
                              date  of  the  earliest  transaction  in  the
                              file).  You  can also limit  your  review  to
                              transactions containing certain Payee/comment
                              characters. Only those entries from  the date
                              span--from and to dates--you provide  will be
                              listed.

                              You can  also use the ARROW keys or mouse (if
                              you  have  one),  to  scan  up  and  down the
                              listing of transactions. use the up arrow (or
                              move the mouse up) to scan backward,  and the
                              down  arrow  (or  downward  movement  of  the
                              mouse)   to  move  forward.  Once  you   have
                              selected  a  scan   direction,   hitting  the
                              <ENTER>  key (or the left mouse button)  will
                              allow you to continue the scan.

                     f. LAST
                        The  last transactions are retrieved and  displayed
                        within the Entry window.

                     g. SORT
                        Transactions may be ordered by either Entry No. (an
                        alphanumeric sort) or by Entry Date. If  you select
                        Entry No., multiple entries with the same Entry No.
                        will be sorted  by  Date. If you select Entry Date,
                        multiple entries by Date  will  also  be  sorted by
                        Entry No.

                     h. INIT
                        Sooner or later, you will want to create a new file
                        from your old one  and/or  initialize  all entries.
                        INIT has two options, RESET and ARCHIVE.

                              RESET
                              RESET  will allow you to RESET Account  Year,
                              CURRENT  BALANCE,  (CLEARED  BALANCE if a DME
                              file),   and   optionally,   initialize   all
                              transaction counts to zero. Before activating
                              RESET,  See 'DONE - ending your session'  for
                              information  on  creating  a  copy   of  your
                              current  file.  After adjusting  Year  and/or
                              BALANCE(s),  you  may  elect  to  clear  your
                              transactions.  If  you  answer  'No'  to  the
                              question  'Init  entries,  too?',  only   the
                              BALANCE  information will be changed. If  you
                              answer   'Yes',   counts,    summaries,   and
                              transactions  will  be initialized  to  zero.
                              Your  CATEGORY  and  DESCRIPTION  Names  will



                              - 7 -






                              remain intact regardless of which  choice you
                              make.

                              PLX contains Budget capability.  While within
                              the  INIT function,  you  may  initialize  or
                              modify    the    Budget    values   for   any
                              DESCRIPTIONS.  You  may  also  elect to FIX a
                              particular DESCRIPTION's budget to a  'fixed'
                              amount, or allow it to  be  averaged  for 'BY
                              MONTH' SUMMARY reporting.

                              ARCHIVE
                              ARCHIVE allows you to create a  PL  file from
                              your  current  PL  file  that  contains  only
                              records  up to and including a certain  date,
                              such as 12/31/1987.  You will be prompted for
                              a date. Then  Personal Ledger will delete all
                              transactions  subsequent  to  that  date  and
                              prompt you for a unique filename to save as a
                              complete PL file. Then, Personal  Ledger will
                              delete all records from your original PL file
                              that  were  just   ARCHIVED,   allowing  your
                              current  file  to contain  only  transactions
                              subsequent  to your ARCHIVE date. Be sure  to
                              save your new file at the end of your current
                              session. By  the  way,  an  ARCHIVE  file  is
                              identical to a normal file. You  can  load it
                              and  ADD/MODIFY/DELETE  transactions  if  you
                              want, as well as report SUMMARIES with it.

                              PLX  also allows you to archive by  Statement
                              Clear Month/Year. You first select  the year,
                              then   the  month  through  which  you   want
                              transactions archived. As  this  implies, the
                              Clear  function  within  Personal  Ledger   X
                              allows gives you the capability  of assigning
                              year,  as well as month, to your  transaction
                              clearing.

                     i. TAG
                        This function is available only in PLX. TAG will be
                        used  in  conjunction  with  'REPEAT' or 'POST'. It
                        will allow you  to identify certain DESCRIPTIONS as
                        those  you repeatedly enter or update  transactions
                        on. TAG will identify the DESCRIPTION  of  the next
                        transaction you make as special, storing the amount
                        you enter with that transaction for later retrieval
                        by the 'REPEAT' or 'POST' functions (also available
                        in just PLX). If you  TAG  a  DESCRIPTION  that was
                        previously TAGGED,  Personal  Ledger  will  ask you
                        whether you want to unTAG  it.  If  not,  the reTAG
                        will allow you to enter  a  transaction  and adjust
                        the TAGGED amount for that DESCRIPTION. As shown in
                        the question that appears after activating TAG, you



                              - 8 -






                        may  also  list  the  TAGGED  DESCRIPTIONS  to  the
                        display or printer.

                     j. REPEAT
                        This function will also be available  only  in PLX.
                        REPEAT will retrieve the  last  transaction  on all
                        tagged DESCRIPTIONS for you, allowing you to adjust
                        the amount  and/or  date  within  that transaction.
                        This feature should be  especially  useful  for A/L
                        files,  where  repeated  actions are adjustments to
                        ASSETS  or  LIABILITIES  that  have   already  been
                        entered.  If,  while  cycling  through  the  TAGGED
                        DESCRIPTIONS, you don't  want to update a retrieved
                        entry, just hit <ENTER> for amount and date areas.

                     k. POST
                        This function  is also available only in PLX. It is
                        similar to  REPEAT  in  that  it  retrieves  TAGGED
                        DESCRIPTIONS, but different  in that you are adding
                        a transaction within that DESCRIPTION,  rather than
                        updating the last one. Modify the entry  fields you
                        want to change or  hit  <ENTER>  for those that you
                        don't want to change. If you don't want  to  add an
                        entry for a  particular DESCRIPTION, just hit <ESC>
                        at the ENTRY No. field.

                        This function may also be used in  conjunction with
                        the  AUTO  function.  Activate AUTO first, entering
                        the Entry No. you wish  to  start  with.  When that
                        Entry No.  appears in the Entry No. field, just hit
                        the <ALT> and <P> keys  when you are ready to enter
                        the  TAGGED  DESCRIPTION  entries.  If you do, POST
                        will be activated and  the  AUTO  Entry No. will be
                        displayed for you to  accept  (or  change)  as each
                        TAGGED  DESCRIPTION  and  its amount are retrieved.
                        The  payee/comment area will be retrieved from  the
                        last  entry  within this DESCRIPTION.  If  you  hit
                        <CNTL>  and  <PgDn>  tpgether,  the  next  previous
                        payee/comment  within  this  DESCRIPTION  will   be
                        retrieved. If you hit <CNTL> and  <PgUp>,  the next
                        following  payee/comment  within  this  DESCRIPTION
                        will  be retrieved. This cycle will continue  until
                        you  accept or modify the displayed  payee/comment.
                        Remember that the amount  retrieved  is  the amount
                        originally  tagged,  not the amount  of  your  last
                        entry. (See "TAG" if  you  ever  want to adjust the
                        amount that is retrieved for you.)

                     l. WRITE
                        This function is also  available  only  in  PLX. It
                        will  allow  you to write  checks  using  unCLEARED
                        transactions   from  a   certain   date   on.   The
                        Payee/Comment will become the Payee, and the amount
                        will  be  printed  in  the appropriate locations on



                              - 9 -






                        either a business sized check (LONG) or  a personal
                        sized check (SHORT). To  set  up  for  LONG checks,
                        align your printer to the  top  line  of  the first
                        check, just  below  the  top  perforation. Personal
                        Ledger will allow you to  choose  which  checks you
                        want to write. As with  POST,  set  up  AUTO first,
                        then <ALT> <W> to access the WRITE  function. NOTE:
                        The  check  write  function  works on SHORT checks,
                        too. However, they require a holder that I'm trying
                        to develop. Once perfected, it will be available to
                        those registering, who express an interest in it. I
                        don't  know  how  much it will cost,  but  as  with
                        updates, it will be as close to cost as I  can make
                        it.

                     m. HOLES
                        This function is also  available  only  in  PLX. It
                        will search your Entry  Nos.  for  missing numbers.
                        Also, if you are currently working with a DME file,
                        you can also choose to  specialize  your  search to
                        those HOLES within CLEARED  Entries.  It  will find
                        the smallest and largest pure numbers, then display
                        missing numbers between them  for  you  either onto
                        the printer, or  onto  the  display.  If  you elect
                        display,  Personal Ledger will report each  missing
                        Entry No., one at  a  time,  advancing when you hit
                        any key.

                     n. BAL
                        This  function is available only within DME  files.
                        It allows you to retrieve a list of entries by Bank
                        Statement  Month.  In   addition  to  the  list  of
                        entries, a summary of DEPOSITS, MEMOS, and EXPENSES
                        will  be  printed  if you elect to send the list to
                        your printer.

                     o. CLEAR
                        This function is  applicable only within DME files.
                        It allows you to  flag  transactions  as 'CLEARED',
                        changing  the CLEARED  BALANCE  that  appears  just
                        below the CURRENT BALANCE in the right upper corner
                        of the screen.

                        Personal Ledger will first request the month within
                        which you are CLEARing entries, such  as  the month
                        within which  most  of  the  CLEARed  entries  were
                        either issued  or received by the bank or the month
                        within  your  Statement  Date. Personal Ledger will
                        then request an Entry No.  and  cycle  through each
                        match it finds asking you  'Is  this  it?'.  If you
                        answer  'Yes', that transaction will be flagged  as
                        CLEARED. If Personal  Ledger doesn't find the Entry
                        No., it will ask whether  you  want  to  enter that
                        transaction or not. Entering it now will cause that



                             - 10 -






                        transaction to be CLEARed at the same time. You may
                        type  'exit'  or  hit the <ESC> key  to  exit  this
                        function.

                        PLX will first request the year  within  which your
                        Statement Month exists. PLX will keep  track  of up
                        to seven years. For beyond  seven  years,  PLX will
                        simply flag the entries  you  clear  with an 'x' as
                        cleared.

                        A feature just added in PLX version 2.00 allows you
                        essentially double entry capability. Assuming  that
                        your  main  PL  file is a DME file that tracks your
                        checking account, you may have a VISA card and wish
                        to write a check to pay your visa bill. If you have
                        created a  DESCRIPTION  of  'VISA',  and  you  have
                        previously  created  a  DME file, called 'VISA.PL',
                        PLX will search for  'VISA.PL'  as  you  clear that
                        check.  When it finds it, PLX  will  allow  you  to
                        enter the same  amount  and Entry No. into that DME
                        file as a DEPOSIT, locating a  DESCRIPTION  for you
                        that matches  'DEPO...'.  Since  an  expense within
                        your checking account is  actually  a  deposit into
                        the  credit  card  account  'VISA.PL', PLX will now
                        make those entries easier.

                     p. unCLR
                        This function  reverses  the  CLEAR  process  on  a
                        transaction. As with CLEAR, to exit, type 'exit' or
                        hit the <ESC> key.

                     q. insert
                        This function is  not  shown on the menu because it
                        is a special function  that  bypasses  some  of the
                        normal  ledger tracking features. It allows you  to
                        insert CLEARED transactions into  a  DME  type file
                        after  you  have  started  it  and  not  change the
                        CURRENT  and  CLEARED  BALANCES during the process.
                        Each inserted transaction will be summarized in its
                        respective   CATEGORY   and   DESCRIPTION   without
                        affecting   either  the  CURRENT  or  the   CLEARED
                        BALANCES.   To  access  'insert',  you  must   type
                        'insert' in  the  Entry  No.  field  in  lower case
                        letters only. To exit,  just  hit  the  <ENTER> key
                        within the DESCRIPTION field. These entries will be
                        treated as having been  CLEARed  before  your first
                        normal monthly CLEAR session.

                        ...
                        This function is just a reminder that you can enter
                        whatever you  want into the Entry No. field. If any
                        key is  typed other than one of the cursor movement
                        keys, the  <ENTER> key, the <ALT> key and the first
                        character of one  of  the  function  names,  or the



                             - 11 -






                        <ESC> key, that key  will  begin  your Entry No. As
                        mentioned above, if your cursor is here and you hit
                        the  left  arrow  key, the rest of  the  menu  will
                        disappear,  allowing  you  to   see   all   of  the
                        transactions in the Entry window.

                        Once you  have  entered  your  Entry  No.,  hit the
                        <ENTER> key to move the cursor  to  the DESCRIPTION
                        field.  Whatever you enter will be matched  against
                        the current DESCRIPTIONS  after you hit the <ENTER>
                        key. (If  you  leave  this  field  blank,  you will
                        return to the MAIN MENU).

                        Once the correct  DESCRIPTION has been located, you
                        can  enter your Payee/Comment. If your  DESCRIPTION
                        is one that already contains previous transactions,
                        the last transaction's  payee/comment  is retrieved
                        for  you  to  accept   or   modify.   If   you  hit
                        <CNTL><PgUp> or <CNTL><PgDn>, you can cycle through
                        previous  payee/comments. Select the one you  want,
                        modify it for this particular transaction, or enter
                        a completely new payee/comment.

                        Next, enter the  transaction amount. This field may
                        not  be blank when you get to  it.  If  the  amount
                        within the last transaction within this DESCRIPTION
                        is  an  amount  entered  before,   Personal  Ledger
                        assumes that  you may wish to repeat it again. That
                        amount will  appear for you to accept or modify. If
                        you   selected   a   payee/comment   from   another
                        transaction, then the amount from  that transaction
                        will appear for you to accept or modify.

                        The last field to enter  is  the  transaction date,
                        entered as month, day, and  year  fields.  The most
                        recent date  is  retrieved  for  you  to  accept or
                        modify. Hit the <ENTER> key after entering the date
                        and  Personal  Ledger  will immediately display the
                        CATEGORY  and  DESCRIPTION  information  for   your
                        entry. Both CATEGORY and DESCRIPTION  summaries and
                        your CURRENT BALANCE will have been updated.

         B. SUMMARY - Reporting transactions within DESCRIPTIONS
            Personal Ledger  provides  you  with  access  to  the summaries
            within each CATEGORY and DESCRIPTION for  all  transactions. If
            your printer is currently on, Personal Ledger will allow you to
            choose whether or not to echo your summaries to the printer.

            Next,  the  current  status  of  all  CATEGORIES  is displayed,
            listing the counts and  totals  for  each, along with summaries
            for file specific  information,  such  as  Deposits,  MEMOS, or
            EXPENSES  summaries  for  DME  type   files,   or   ASSETS  and
            LIABILITIES summaries for A/L type files.




                             - 12 -






            Within PLX you will have the opportunity to combine the SUMMARY
            information from other PL files, most  likely  those previously
            ARCHIVED, REPORTING the CATEGORY and DESCRIPTION information on
            the totals. Once you  leave  the  SUMMARY function, the SUMMARY
            information will revert to your current PL  file's information.
            Keep in mind that  PLX's  feature  to  access PL files matching
            DESCRIPTIONs is not active  during  the  COMBINE  process. That
            way,  the same DESCRIPTION within several  PL  files  will  not
            cause that  DESCRIPTION file information to be entered into the
            SUMMARY  information  each  time  a   PL   file   is  combined,
            artificially increasing that DESCRIPTION's SUMMARY totals.

            You can select  any  of  the  ten  categories  to  summarize by
            hitting the <ENTER> key while the cursor is  on  that category.
            If you elected  to  echo  your  SUMMARY to the Printer, you can
            print  a  summary  of all active DESCRIPTIONS  within  all  ten
            Categories  by selecting the 'Summaries to Printer'  selection.
            Then, Personal Ledger  asks  whether you want to view summaries
            by DESCRIPTION or by MONTH.

               1. By DESCRIPTION
                  Personal Ledger will allow you to select a DESCRIPTION to
                  list  transactions  from.  If you are in a DME type file,
                  you  may  elect  to list all of your transactions or only
                  those transactions  that  haven't  CLEARED.  If  you  hit
                  <ALT-A>,  you  will  be  able  to  list  all DESCRIPTIONS
                  together.

                     a. All transactions
                        If you select  this  choice, you can also list only
                        those transactions from a specific transaction date
                        forward.

                     b. Transactions that have not CLEARED
                        This  choice  applies   only  to  DME  type  files.
                        Personal Ledger will  then list all transaction for
                        your DESCRIPTION that have not been CLEARED via the
                        CLEAR function. You may  also  elect  to  list just
                        certain  transactions,  screening   on   a  special
                        character  string  within the  Payee/Comment  area.
                        Personal    Ledger    will    then   display   your
                        transactions, providing monthly sub-totals (only to
                        the printer) whenever it detects a change  of month
                        from transaction to transaction. (Note that sorting
                        transactions with the  SORT function by Date rather
                        than by Entry No. is  recommended  to  make maximum
                        use of this facility.)

                  By MONTH
                  Personal  Ledger  will  provide  summaries for all active
                  DESCRIPTIONS within  that  CATEGORY  for  the  month  you
                  select,  within the ACCOUNT YEAR you  have  up  near  the
                  BALANCE(s).  All transactions made within that month  for
                  any DESCRIPTION within that CATEGORY  will  be  listed in



                             - 13 -






                  the transaction  window  (and  also  to  the  printer, if
                  selected).

                  PLX  has an additional feature within SUMMARY  selections
                  By  MONTH.  You may elect to  display  budgets  for  each
                  DESCRIPTION.  See the ENTRY section's  INIT  function for
                  information  on  initializing  each budget. Displayed are
                  each DESCRIPTION,  the  current  month's  count, summary,
                  budget type (either  Fixed,  Average,  or  Not  Set), the
                  budget value,  and  the  difference  between  budget  and
                  actual for that month.

                       - Fixed budgets remain the same for each  month. The
                         difference calculation  is  budget  -  summary for
                         that month.

                       - Average budgets are calculated dynamically.   Each
                         is   calculated  by  taking  the  summary   value,
                         dividing  it by the total count, then  multiplying
                         it by the current  month's  count.  The difference
                         calculation  is  then budget -  summary  for  that
                         month.

         C. UPDATE - Maintaining or Updating CATEGORY and DESCRIPTION Names
            Personal  Ledger allows you to modify  or  update  CATEGORY  or
            DESCRIPTION Names at any time. Note that changing a DESCRIPTION
            Name will change the  Name  for  all transactions stored within
            that  DESCRIPTION.  Adding  DESCRIPTIONS  can  be  accomplished
            either at the time the Personal Ledger file  is  first created,
            via  the  entry  of a new  DESCRIPTION  as  part  of  an  entry
            transaction, or within UPDATE.

               1. Modifying CATEGORY Names
                  Move the cursor over the CATEGORY that you wish to change
                  and hit the <ENTER> key. This activates the EDIT feature,
                  allowing you to modify that CATEGORY name to whatever you
                  wish.  Once  you  hit  the  <ENTER> key again,  you  will
                  register your  change  for  the  current  session.  Also,
                  Personal Ledger will convert your  changes  to  all upper
                  case letters. (Make  sure  you save your changes when you
                  exit your session if you want them as permanent changes.)

               2. Modifying DESCRIPTION Names
                  Select the CATEGORY within which  you  wish  to  change a
                  DESCRIPTION. Hitting the <ENTER> key twice (the first one
                  puts you into CATEGORY  Edit  mode)  allows you to access
                  the DESCRIPTIONS within that CATEGORY. Move the cursor to
                  the DESCRIPTION you want to  change  and  hit  <ENTER> to
                  move into the  Edit  mode. As with CATEGORY changes, your
                  DESCRIPTION changes will be converted to  upper  case. Be
                  sure to save  them  at  the  end of your session. You can
                  also add DESCRIPTION  names  by moving the cursor down to
                  the first open DESCRIPTION and enter the  DESCRIPTION you
                  want to add.



                             - 14 -






                  Special DESCRIPTION Names
                  Within A/L files in PLX  you  can  add  DESCRIPTION names
                  with special meaning.  When  an A/L files are loaded, PLX
                  scans your  current  directory  for  '.PL'  files,  whose
                  primary filename matches each DESCRIPTION. If you examine
                  the  example  ASSETS.PL  file  closely,  you  will  see a
                  DESCRIPTION within the BANK_ACCTS CATEGORY of 'DEPOSITS'.
                  The DESCRIPTION 'DEPOSITS' matches the name of  the other
                  example Personal Ledger  file.  When  PLX  finds  one, it
                  checks to assure it is a valid PL file,  and  then  loads
                  that file's CURRENT BALANCE  into  the  summary  for that
                  DESCRIPTION  and  its  corresponding CATEGORY, increasing
                  the count by one (but not actually adding a transaction),
                  and then into the CURRENT BALANCE for your A/L file.

                  When you want to save  your  A/L  file,  this information
                  will be  removed before saving, so that it doesn't 'build
                  up' artificially  over  time.  This  means  that  you can
                  create  DESCRIPTIONS that  actually  represent  other  PL
                  files,  and automatically  view  their  CURRENT  BALANCES
                  whenever you access your A/L file(s).

                  There  is a chance that you may  wish  to  represent  the
                  CURRENT  BALANCE   of  one  of  your  A/L  or  DME  files
                  differently in your  A/L file containing their filenames.
                  For example, if one of your DME files represents a credit
                  card, each  of  the  transactions  within  will  make the
                  CURRENT  BALANCE    negative,  while  payments  would  be
                  entered as DEPOSITS  to  make  the  BALANCE  positive. If
                  listed as one of the LIABILITY DESCRIPTIONS, the negative
                  balance  will  actually  be  negated  when  added  to the
                  BALANCE in your current file. So, you can change the sign
                  of  that  balance,  if  you  wish and make  the  negative
                  balance  positive,  when added to  the  CURRENT  BALANCE.
                  Doing so within this file  will  not  affect  your Credit
                  Card  DME file. So, when you  are  finished  modifying  a
                  special  name,  you  will be asked whether  you  wish  to
                  toggle the SIGN for reporting that DESCRIPTION's AMOUNT.

         D. LIST - Listing PL Contents to a Text File
            You  can  create  an ascii file  consisting  of  your  PL  file
            contents with  this option. The file created is entirely ASCII.
            The  name of the file is the same basic name as your current PL
            file, but has  an  'ASC'  extension.  You  are  also  given the
            opportunity to include or exclude your entry data as well.

         E. FINISH - File Saving/Changing
            You may end  a  current  session  three  ways:  by  saving your
            current  file,  by  accessing a new  one,  or  by  exiting  the
            program.

               1. SAVE - saving your current session.
                  By  selecting  SAVE, you have  another  option.  Personal
                  Ledger will  indicate  your  current  file  name.  If you



                             - 15 -






                  choose to modify it,  Personal  Ledger  will allow only a
                  new  filename, not another existing filename within  your
                  current directory.  Then,  Personal  Ledger  performs the
                  following steps to assure, if  possible,  that  your data
                  gets saved. (Following these steps, if you hit <ESC>, you
                  may exit Personal Ledger.)

                     a. If your filename existed before, it renames it with
                        an extension "PBK",  deleting a previous "PBK" file
                        if it finds one, first. Then it checks for adequate
                        space before saving your current file. If  there is
                        not enough space in the current  directory  for the
                        back-up file, it simply saves the  current  file in
                        the space it allocated for  it at the start of this
                        session.

                     b. If your filename did not exist before, it turns the
                        image of your current file it saved at the start of
                        the session as your back-up file,  provided  it has
                        enough space to  create  a new copy of your current
                        file. If not,  it  simply saves the current file in
                        the space it allocated at the start of the session.

               2. NEW - Retrieving a new Personal Ledger file.
                  This  option  is identical to  starting  Personal  Ledger
                  over.

               3. DONE - Leaving Personal Ledger.
                  Personal Ledger will return you to the directory you were
                  currently in when you  first  activated  Personal Ledger.
                  You may also exit Personal Ledger from the  MAIN  MENU by
                  repeatedly hitting the <ESC> key.

 III. Copyright Notice
      Personal Ledger is being distributed under  the  "Shareware" concept.
      You can  copy  and  distribute  PL.EXE,  as  long as you include this
      documentation and the two PL data  files,  do not charge for it other
      than for  media  preparation,  and  do  not  alter it. Although PL is
      completely  functional  in  that   you   can   print  and  save  your
      transactions,  (and  bug  free, I hope), you will notice that certain
      special features have not been activated. I plan  to  continue adding
      features and  capabilities. Personal Ledger X, will be available only
      to those who have registered and will not be released as "Shareware".
      To register for the latest version of PLX.EXE, please send your name,
      address, and $25 (check or money order) to:

                Anthony A. Weber
                331 N. High Pointe Ct.
                Roselle, Il. 60172

      Subsequent versions will be available for  as  close to cost as I can
      get (approx. $5 right now). I will try to announce major features and
      updates  as  efficiently  as I can.  If  you  send  a  stamped,  self
      addressed disk mailer and disk, the updates will be $1.00.



                             - 16 -






      Personal  Ledger  is  distributed  on  an 'as is' basis. It  contains
      assembler routines that access video directly. If your PC  is  not  a
      reasonable  compatible, this program may not  work  correctly  on  it
      (i.e., it assumes that B/W memory is at B0000h and Color memory is at
      B8000h, and that certain video info is in  low  RAM).  By  using this
      program  you  acknowledge  that I am not responsible for any problems
      resulting from the use of this program.

Notes: As of May 22, 1988,  both  PL.exe and PLX.exe (the enhanced version)
     have been updated. The following are applicable to both versions.

     A bug has  been  located  and  fixed in the 'add description' function
     that  arises  when  selecting  a  category that already  contains  the
     maximum 20 descriptions, hanging the program in an endless loop. Sorry
     about that.

     A  feature  has  been  added  that  is  activated  when you choose 'By
     Description', rather than 'By  Month'  for  a  report when in SUMMARY.
     Rather than selecting an individual  Description  by  hitting <ENTER>,
     hit <ALT-A> (for all) and list all Descriptions within that Category.

     Also added is mouse  support.  Right now, the Mouse Systems Mouse (tm)
     from MSC Technologies works great  for cursor control and three button
     support (<ENTER>, <DEL>, and <ESC>  respectively). All you need is the
     driver, MSMOUSE.SYS, which can be installed in your "CONFIG.SYS" file,
     or the executable resident program MSMOUSE.COM, which can be installed
     in your "AUTOEXEC.BAT" file.  Other  Microsoft  compatible  mouses may
     work as well.

     When  entering  records,  the payee/comment area is  filled  with  the
     payee/comment of the last entry within that DESCRIPTION, saving typing
     time if this entry's payee/comment is identical. Also, if you  hit the
     <ESC> repeatedly, the payee/comment of the  next  to  last DESCRIPTION
     is  retrieved,  and  so  on.  Continuing  the  <ESC>  will  wrap  your
     payee/comments back to the last one again.

     Added num-lock capability for key-pad. When num-lock is  on,  the key-
     pad will function  as  numeric  keys,  except when at a menu selection
     point in Personal Ledger. When num-lock is off, the keys will function
     as cursor arrows.

     Added a function to the AUTO feature, called RENUMBER (detailed within
     the AUTO feature).

     Added the ability to add  an  entry  within  CLEAR  if  that  entry is
     missing,  allowing  the  entry  to  be  added  and   cleared   in  one
     transaction.

     Added the LIST option to list PL contents to a TEXT file.

     Added the capability to retrieve the same DESCRIPTION as the  last one
     entered within the ENTRY Section by hitting <ALT-S>. If you are adding
     several  transactions  within  the  same  DESCRIPTION,  this  feature,




                             - 17 -






     combined  with  the payee/comment retrieval  feature,  will  hopefully
     simplify data entry.

     When   entering   or  modifing  payee/comments,   you   may   retrieve
     payee/comments from other entries  of  the  same DESCRIPTION by simply
     hitting the <CNTL-PgUp> or <CNTL-PgDn> keys.

     Personal Ledger requires at least 512K to run.

     Added 12/18/88 to  the  ENTRY  section  is "BAL", a function that will
     retrieve and print  all  DME  entries  CLEARed in a specific month and
     will report the CLEARED_BAL up to the end of that statement month.

     The CLEAR function  within  entry  is  also  modified  to  request the
     statement month within which entries are being cleared.

     Added in Jan 89 budget capability for Personal Ledger X.

     Added  in  Feb  89  is  the  capability  to  scroll  through lists  of
     transactions, such as in the FIND feature.

     Added  in March, 89, is double entry capability  for  PLX  within  DME
     files for expenses that  are  also deposits into another DME file. See
     the 'CLEAR' function within the ENTRY Section for details.

     Also, removed the need for an '*' in front of a DESCRIPTION within PLX
     as a flag that that A/L DESCRIPTION also  corresponds  to  a  PL file.
     Now, each DESCRIPTION is checked  for a corresponding PL file. Because
     of this, the capibility of having this feature active during a COMBINE
     process has been deactivated.



























                             - 18 -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1482

     Volume in drive A has no label
     Directory of A:\

    ASSETS   PL      21060   4-12-89   9:28p
    DEPOSITS PL      21060   1-17-88   6:55p
    FILE1482 TXT      1049   6-20-89  12:20p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   6-20-89  12:22p
    MANUAL   BAT       148   6-20-89  12:23p
    PL       DOC     59906   3-26-89   7:59p
    PL       EXE     99504   4-12-89   8:49p
            8 file(s)     203305 bytes
                          113664 bytes free
