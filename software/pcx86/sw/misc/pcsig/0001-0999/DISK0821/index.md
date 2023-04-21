---
layout: page
title: "PC-SIG Diskette Library (Disk #821)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0821/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0821"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HDP ACCOUNTS RECEIVABLES"

    HDP ACCOUNTS RECEIVABLES manages your customer accounts and
    transactions for your business. It not only stores, organizes, and
    retrieves customer information, but also lets you edit all data or
    transaction information kept on file for each customer. With HDP
    ACCOUNTS RECEIVABLES you have full control over your transactions and
    invoices.
    
    The reports option lets you print and compute finance charges, print
    mailing labels, and process data at the end of the month. The system
    utilities of the program let you check data files and rebuild the
    various indexes, clear all transactions off accounts, selectively delete
    transactions on one account, and add new customer files.
    
    This version of the program is limited to about 250 customers but does
    not require you to pay a registration fee to use it. If you like it and
    want to upgrade up to the commercial version, you then need to purchase
    the program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARPARTA.DOC

{% raw %}
```
SHAREWARE VERSION 1.1
A. FIRST PRINT OUT THE MANUAL. Put disk in drive A: and Type; PRINTMAN <enter> 

B. Then get rid of DOC & BATCH files ..Type; ERASEMAN <enter>

C. Read the last section in the MANUAL.. Of course you will...

-------INSTALLING ON A HARD DISK SYSTEM -------------------------------------
To keep things simple I am not going to talk about path's
and sub-directories. It is assumed that your hard disk is
drive C: and you have at least 1 floppy disk as A:

Step 1. At The C> type; CD \ <enter> to get to the root directory.

Step 2. Make a sub-directory. Type; MKDIR \AR <enter>

Step 3. Go to that sub-directory. Type; CD \AR

Step 4. Put disk from HDP in drive A: and type; COPY A:*.* C: <enter>
        This should copy everything off the floppy to C:

Step 5. Type; ARINDX <enter> to load to the main menu program.

Step 6. Set your ID Code to ABC and your hardware configuration for hard disk. 
        Option 5 then Option 6.
------------------------------------------------------------------------------

        INSTALLING ON FLOPPY SYSTEM
Step 1. Put your dos disk in drive A: and Put a blank disk in drive B: 
        Type; FORMAT B: /S    When done Type; COPY FORMAT.EXE B:

Step 2. Now put disk that is in drive B: in drive a:

Step 3. Put HDP A/R disk in drive B: and Type; COPY B:*.* A:

Step 4. Remove disk in drive B and put up. Put a blank
        disk in drive B: now. Type; FORMAT B:

Step 5. Type; COPY A:ARCUST1.ABC B:  Then type; DEL A:ARCUST1.ABC

Step 6. Type; ARINDX <enter> to run the main menu.

Step 7. Set ID code to ABC and configuration to DUAL FLOPPY.
        Option 5 then Option 6.




```
{% endraw %}

## ARPARTB.DOC

{% raw %}
```
                    TABLE OF CONTENTS             SECTION.PAGE 
    -------- SHAREWARE VERSION 1.1 ---------------------------
    THE MAIN MENU -----------------------------------  0 .
    <1> ADD OR UPDATE CUSTOMER INFORMATION-----------  1 .
       <1> ADD A CUSTOMER ---------------------------   1.1
       <2> CORRECT A CUSTOMER -----------------------   1.2
       <3> DELETE A CUSTOMER ------------------------   1.3
       <4> LIST CUSTOMERS ---------------------------   1.4
       <5> SET SYSTEM LIMITS ------------------------   1.5
       <6> UPDATE TRANSACTION CODES -----------------   1.6
       <7> LIST TRANSACTION CODES & SYSTEM LIMITS ---   1.7

    <2> ENTER/POST TRANSACTIONS OR INVOICES ---------  2 .
       <1> ADD OR CHANGE TRANSACTIONS ---------------   2.1
       <2> LIST TRANSACTIONS ------------------------   2.2
       <3> COMPUTE CHECK TOTALS ---------------------   2.3
       <4> POST TRANSACTIONS ------------------------   2.4

    <3> REPORT OPTIONS MENU -------------------------  3 .
       <1> SCREEN CHECK OF CUSTOMER STATUS ----------   3.1
       <2> PRINT & COMPUTE FINANCE CHARGES ----------   3.2
       <3> PRINT AGEING REPORTS ---------------------   3.3
       <4> PRINT STATEMENTS -------------------------   3.4
       <5> PROCESS END-OF-MONTH ---------------------   3.5
       <6> PRINT MAILING LABELS ---------------------   3.6

    <4> SYSTEM UTILITIES MENU -----------------------  4 .
       <1> FORCE HOUSEKEEPING FUNCTIONS TO BE DONE --   4.1
       <2> CLEARING ALL TRANSACTIONS OFF ACCOUNTS ---   4.2
       <3> RESET COMPANY RETURN ADDRESS -------------   4.3
       <4> SELECTIVE DELETE TRANSACTION ON 1 ACCOUNT-   4.4
       <5> INITIALIZE A NEW CUSTOMER FILE (ARCUSTx)--   4.5

    <5> SET DATA FILE ID CODE -----------------------  5 .
    <6> SET HARDWARE CONFIGURATION ------------------  6 .
    <7> EXIT TO HOUSEKEEPING PROGRAM ----------------  7 .
    <8> PRINT AN INVOICE ----------------------------  8 .
    <9> QUIT ALL PROCESSING ------------------------   9 .
    INTRODUCTION --------------------------- APPENDIX  A .
        COPYRIGHT NOTICE ------------------------------ A.1
        SYSTEM PROGRAMS & DATA FILE NAMES ------------- A.2
        ORDERING STATEMENTS --------------------------- A.3
        RUNNING THE SAMPLE DATA FILES ----------------- A.4
        CONVERTING FLOPPY TO HARD DISK AND BACK ------- A.5
        INSTALLING PROGRAM ---------------------------- A.6


                 The  M A I N   M E N U              PAGE 0

    OVERVIEW: To get the MAIN MENU when your computer has
              been OFF you must 1st TURN it ON, insert the
              the proper disks (if running floppy disks) and
              wait for a DOS prompt.

    Step 1.   At the DOS prompt type: ARINDX

    NOTE 1  If you know how to use COPY CON and make a batch
    ======  batch file loading can be made easier.

    ********************************************************
    *    ACCOUNTS RECEIVABLE  (c) by HDP        PAGE 0     *
    *  SHAREWARE VERSION 1.1                               *
    * OPTION         M A I N   M E N U             MANUAL  *
    * ---------------------------------------------------- *
    * <1> ADD OR UPDATE CUSTOMER INFORMATION        PG 1.  *
    * <2> ENTER & POST TRANSACTIONS                 PG 2.  *
    * <3> REPORTS MENU                              PG 3.  *
    * <4> SYSTEM UTILITIES MENU                     PG 4.  *
    * <5> SET DATA FILE ID CODE                     PG 5.  *
    * <6> SET HARDWARE CONFIGURATION                PG 6.  *
    * <7> EXIT TO HOUSEKEEPING PROGRAM              PG 7.  *
    * <8> PRINT AN INVOICE                          PG 8.  *
    * <9> QUIT ALL PROCESSING                       PG 9.  *
    * ===================================================  *
    *  8-26-86   CONFIGURATION: HARDDISK   ID CODE= HDP    *
    * ===================================================  *
    * ENTER OPTION NUMBER ?                                *
    ********************************************************

     Step 2  Choose what you wish to do and enter the number,
             then turn to the corresponding page number.

             If you wish to exit the A/R system choose
             OPTION 9.

                        UPDATE CUSTOMER FILE            PAGE 1.

     OVERVIEW: This is where you add, change, delete, & list
               customers, define LIMITS and STATUS codes. 

     NOTE 1   It is important to note accounts only print in
     ======   ACCOUNT NUMBER sequence. If you need alpha-
              betical order then follow these instructions.

        A.  Take a piece of paper and write numbers on it
            starting with 1000 and add 1 (IE. 1001, 1002,
            & so on). Now assign these numbers to accounts
            & cross them off this list. Each account will
            have a UNIQUE 4 digit account number.

        B.  Use numbers  1 to 26 to represent the letters
            A to Z (A=1, B=2, C=3, etc.) & put this number
            IN FRONT of the 4 digit number to make the FULL
            account number 5 or 6 digits long. Accounts
            will now list in BLOCK alphabetical order.
   
        C.  System handles SUB-ACCOUNTS (or JOB #) to a
            MASTER account. The MASTER  account number is
            followed by a decimal & a number 1 to 99.
          Example. Bailey  #1005 would be  21005
                   Bailey Sub 1  would be  21005.1
                   Bailey Sub 10 would be  21005.10
                   Zinn    #1234 would be 261234

     ********************************************************
     * UPDATE CUSTOMER FILE                                 *
     *   OPTIONS ARE.........                   PAGE 1.     *
     *                                                      *
     *   <1> ADD A CUSTOMER                       PG 1.1    *
     *   <2> CORRECT A CUSTOMER                   PG 1.2    *
     *   <3> DELETE A CUSTOMER                    PG 1.3    *
     *   <4> LIST CUSTOMERS                       PG 1.4    *
     *                                                      *
     *   <5> SET SYSTEM LIMITS                    PG 1.5    *
     *   <6> CHANGE TRANSACTION CODES             PG 1.6    *
     *   <7> LIST TRANSACTION CODES &  LIMITS     PG 1.7    *
     *   <8> RETURN TO MAIN MENU                  PG 0.     *
     *   ENTER OPTION NUMBER ?                              *
     ********************************************************

     Step 1 Decide what you wish to do and type the number.

                      ADD A CUSTOMER               PAGE 1.1
   
     Step 1   Enter the account number and press <enter>.
              25001.1 is sub-account #1 of master account
              25001. See Page 1.5 item 3 for details.
              If you got here by mistake press <enter>.

     Step 2  Data file is opened. If file can't be found,
             Exit and check files on disk.
           
             If account number exists system tells you.

     *********************************************************
     * ADD CUSTOMER ......                        PAGE 1.1   *
     *        ACCOUNT #      . -                             *
     *=======================================================*
     * 1-NAME:_________________________ 10-ACCT.ESTABL.:____ *
     * 2-ADDR:__________________        11-INTEREST:__ % MO  *
     * 3-ADDR:__________________ 5-ZIP: 12-FUTURE USE N/A    *
     * 4-ADDR:__________________ _____  13-LAST PYMT:______  *
     *--------------------------------- CREDIT IN USE  0%    *
     * 6-TELEPHONE NUMBER:(___)________ 14-LIMIT:      0.00  *
     * 7-CUSTOMER STATUS: 0 = .........  BALANCE       0.00  *
     *=======================================================*
     *  CURRENT    OVER 30    OVER 60    OVER 90    OVER 120 *
     *    0.00       0.00       0.00       0.00         0.00 *
     *=======================================================*
     * ENTER NAME:                         :::               *
     *********************************************************
     NOTE 1  a. NAME and address can have punctuation.
     ======  b. TELEPHONE number is entered without ( ) or -
             c. See page 1.5 for STATUS CODE definition.
             d. DATES are entered without slashes
             e. AMOUNTS may not be accessable, see page 1.5
   
     Step 3  Input the information.  When done, you  see;
   
         <1>CORRECT ENTRY, <2>KEEP AND ADD ANOTHER OR <3>EXIT

     Step 4   Type: 1 to correct any mistakes. See page 1.2
                  2 to Add this account & continue adding.
                  3 to add this account & exit.
     Note. While adding the housekeeping program may run to
           sort the data file index when needed.

               CORRECT A CUSTOMER RECORD             PAGE 1.2

     Step 1  Enter the account number and press <enter>.
             If you got here by mistake just press <enter>.

     Step 2  Data file is accessed. If file is not on-line
             & you are using floppies then mount new disk.

             If account does not exist you return to menu.

     ********************************************************
     * CORRECT A CUSTOMER RECORD....             PAGE 1.2   *
     *       ACCOUNT # 81005. - HOLMAN DATA PROCESSING      *
     *======================================================*
     * 1-NAME: HOLMAN DATA PROCESSING 10-ACCT.ESTABL.: 1/82 *
     * 2-ADDR: ATTN: BILL HOLMAN      11-INTEREST: 1.5 % MO *
     * 3-ADDR: 2059 W. LINCOLN 5-ZIP: 12-FUTURE USE N/A     *
     * 4-ADDR: OROVILLE, CA.   95965  13-LAST PYMT: 1/19/82 *
     *------------------------------- CREDIT IN USE  200%   *
     * 6-TELEPHONE NUM:(916)533-5992  14-LIMIT:    $500.00  *
     * 7-CUSTOMER STATUS: 0 = ........BALANCE     $1000.00  *
     *======================================================*
     * CURRENT   OVER 30   OVER 60     OVER 90     OVER 120 *
     * 700.00    100.00      75.00       25.00       100.00 *
     *======================================================*
     * ENTER ITEM NUMBER OR <E>XIT                          *
     ********************************************************

     Step 3  Type the item number to correct then  <enter>.

     Step 4  Type in the new information.

     Step 5  When done correcting press <enter> to exit.
 
     NOTE 1 Amounts may or may not be accessible, see pg 1.5

                       DELETE A CUSTOMER           PAGE 1.3


     Step 1  Enter the account number and press <enter>.
             If you got here by mistake just press <enter>

     Step 2  Data file is accessed. If file is not on-line
             & you are using floppies, mount new disk.
  
             If account does not exist you return to menu.

     ********************************************************
     * DELETE  A CUSTOMER....                    PAGE 1.3   *
     *       ACCOUNT # 81005. - HOLMAN DATA PROCESSING      *
     *======================================================*
     * 1-NAME: HOLMAN DATA PROCESSING 10-ACCT.ESTABL.: 1/82 *
     * 2-ADDR: ATTN: BILL HOLMAN      11-INTEREST: 1.5 % MO *
     * 3-ADDR: 2059 W. LINCOLN  5-ZIP 12-FUTURE USE N/A     *
     * 4-ADDR: OROVILLE, CA.    95965 13-LAST PYMT: 1/19/82 *
     *------------------------------- CREDIT IN USE   0%    *
     * 6-TELEPHONE NUMBER:   533-5992 14-LIMIT:    $500.00  *
     * 7-CUSTOMER STATUS: 0 = ....... BALANCE         0.00  *
     *======================================================*
     * CURRENT    OVER 30   OVER 60   OVER 90      OVER 120 *
     *    0.00       0.00     0.00       0.00          0.00 *
     *======================================================*
     * DELETE THIS CUSTOMER (*Y/N)                          *
     ********************************************************
  
     Step 3  Type: Y or N for Yes Or No. A YES default was
             made to speed up multiple deletions.

     Note 1  If customer has a balance or an active 
             transaction you can not delete. Wait till you
             run end of month & check for zero balance then.

                          LIST CUSTOMERS           PAGE 1.4

     OVERVIEW: There are 2 types of customer listings
               available from this section.  You must decide
               how you will use each report. You can print
               them at anytime.

               The <S>hort  report was designed for counter
               sales people. It contains detailed information
               to identify  customers. It does not contain
               sensitive dollar figures for wandering eyes.

               The <L>ong report has everything shown on the
               screen display as seen on page 1.2

               Reports print in account # sequence ONLY.

     NOTE 1    The amounts shown on the LONG report do not
     ======    reflect any active transactions. The amounts
               represent the starting balances for the next
               period. BEST to print this report after MONTH-
               END processing & before posting transactions.

     ********************************************************
     * UPDATE CUSTOMER FILE                                 *
     *    LIST CUSTOMERS                        PAGE 1.4    *
     *                                                      *
     * ENTER FIRST ACCOUNT # TO LIST (PRESS <ENTER> FOR ALL)*
     *  <1>=LONG LIST                                       *
     * *<2>=SHORT LIST                                      *
     *   ENTER OPTION NUMBER ?  _2_                         *
     *                                                      *
     * ENTER TODAY'S DATE (MM/DD/YY) ? _1/15/84_            *
     ********************************************************

     Step 1  Press <enter> if you wish to print a list of all
             your accounts. If you do not, enter the FIRST
             account number and the system will then ask you
             for the LAST account number. Numbers do not have
             to exist but should be close to what you want.

     Step 2  Decide <1> or <2> for LONG or SHORT listing.
             Enter the date for the report.

     Note 1. To abort printout press the <E> key one time.

                       SET SYSTEM LIMITS           PAGE 1.5

       OVERVIEW: For input checking you must define certain
               limits. The maximums are shown below;
     ********************************************************
     * ACCOUNTS RECEIVABLE SYSTEM - UPDATE CUSTOMER RECORDS *
     * PARAMETER SPECIFICATIONS ARE.....          PAGE 1.5  *
     *  <1> LOWEST ACCOUNT NUMBER:           1              *
     *  <2> HIGHEST ACCOUNT NUMBER:     999999              *
     *  <3> HIGHEST JOB NUMBER              99              *
     *  <4> MAXIMUM MONTHLY INTEREST RATE: 10%              *
     *      (ANNUAL INTEREST RATE:  120%)                   *
     *  <5> FUTURE USE             (N/A)                    *
     *  <6> MAXIMUM CREDIT LIMIT:   $99,000.00              *
     *  <7> UPDATE CUSTOMER BALANCES        NO or YES       *
     *  <8> CUSTOMER STATUS CODES                           *
     *   ENTER ITEM # TO CHANGE OR <E>XIT ?                 *
     ********************************************************

     Item 1 After set, Account # must be equal or greater.
     Item 2 After set, Account # must be equal or less
     Item 3 A 0 allows no SUB-ACCOUNTS to a master account.
            JOB ACCOUNT (sub-accounts) are created just like
            any other account. If value set to 4 then up to
            4 sub-accounts are allowed to any one master
            account. Example: Account 21005 could have sub-
            accounts 21005.1, 21005.2, 21005.3, & 21005.4 .
            Each account is unique, the master account 21005
            will get a summary statement & JOB accounts get
            individual statement.
     Item 4 After set, rate can not be exceeded.
     Item 5 Reserved for future use. NOT AVAILABLE.
     Item 6 After set, you can not exceed this limit.
     Item 7 Set to NO & you can not access the amounts shown
            on the display on page 1.2.  If set to YES the
            amounts will be given access numbers 15 to 19.
     Item 8 Status codes are simply category codes. This is
            how you can give 90 day time-payment credit to
            customers who can't pay entire balance. Assigning
            an ODD number code to an account will allow part
            payment ( 1/3 of balance) to be requested on the
            statements. EVEN numbers mean total balance due
            on statements.  Some uses may be as follows;
            1 - RETAIL pp    To = Retail With part payment
            2 - COMMERCIAL   To = Commercial type account
            3 - A1 RATEDpp   To = Excellent credit & part pay
            Define them to what you want.

             UPDATE TRANSACTION CODES               PAGE 1.6

     OVERVIEW  System has transaction codes numbered 1 to 99.
               All 99 are defined to something now.

     Note 1.   EVEN or ODD codes determine what balances to
               apply credits towards. EVEN numbers credit
               the OLDEST amounts first. ODD numbers credit
               current balances first. Normally payment codes
               are EVEN and any returns could be ODD. Use
               either odd or even for charge sales (debits).

               These code numbers have a 23 character
               description associated to each code #. Code
               number is used for faster keyboard entry while
               posting transactions & preserve disk space.
               The description, not the code number shows 
               on the statement to make transactions clearer
               to your customers. System print totals by each
               code at end of the aging status reports.

     ********************************************************
     *  UPDATE CUSTOMER FILE                                *
     *  ENTER TRANSACTION CODE # (1-99) TO UPDATE OR <E>XIT *
     ********************************************************

     ********************************************************
     *  UPDATE CUSTOMER FILE                                *
     *                                                      *
     *     UPDATE TRANSACTION CODE # 1                      *
     *  :------------------------------------------------:  *
     *  :  1- DESCRIPTION:  INVOICE (CHARGE SALE)        :  *
     *  :  2- UPDATE LAST PAYMENT DATE:  NO              :  *
     *  :------------------------------------------------:  *
     *                                                      *
     *  ENTER ITEM # (1 or 2) TO CHANGE, <D>ELETE OR <E>XIT *
     ********************************************************
     Step 1  Type the code number to edit then press <enter>
     Step 2  Type: 1  to EDIT the description.
             Type: 2  then Y or N. A Yes will force the date
                      of last payment to be update whenever
                      this transaction code is used.


          LIST TRANSACTION CODES & SYSTEM LIMITS    PAGE 1.7

     OVERVIEW:  The system has many settings that can be
                changed to suit your needs. Whenever you make
                changes you should print a new listing of the
                system settings and codes. This report should
                be kept handy at each posting session or when
                adding new accounts into the system.



     Step 1    Press <7> to list.

               Enter date for the report and press <enter>

             ENTER/POST TRANSACTIONS                 PAGE 2.

     OVERVIEW This section is where you enter transactions
              stored in the data file "ARTRANS". This file
              holds ACCOUNT #, DATE, INVOICE #, TRANSACTION
              CODE, & AMOUNT for each line you enter. If you
              EXIT (option <4>), the ARTRANS file is posted
              to accounts & ARTRANS erased for next session.

     Note 1   RESTRICT the input session to about 150
     ======   MAXIMUM line items because you can fill a disk
              file and the HOUSEKEEPING program will need
              to be run to see if any files need to be split
              into 2 smaller files.

     ********************************************************
     *                                                      *
     *     ENTER TRANSACTIONS                               *
     *       OPTIONS ARE............            PAGE 2.     *
     *                                                      *
     *     <1> ADD OR CHANGE TRANSACTIONS         PG 2.1    *
     *     <2> LIST TRANSACTIONS                  PG 2.2    *
     *     <3> COMPUTE CHECK TOTALS               PG 2.3    *
     *     <4> POST TRANSACTIONS                  PG 2.4    *
     *     <5> EXIT TO MAIN MENU                  PG 0      *
     *                                                      *
     *       ENTER OPTION NUMBER?                           *
     *                                                      *
     ********************************************************

     Step 1 Decide what you want to do and enter the number.

                 ADD OR CHANGE TRANSACTIONS          PAGE 2.1

     OVERVIEW  Transactions are displayed 10 lines per
               screen. Each line represents 1 line on your
               customer's statements.
     ********************************************************
     * ENTER TRANSACTIONS: 1 TO 10                          *
     *                                                      *
     *     ACCOUNT #     DATE     INV #   T.C.     AMOUNT   *
     *     21005       1/04/84    1255     5        61.48   *
     *     21005.1     1/06/84    12.5     5        10.00   *
     *     11234       1/01/84    1205     2      <200.00>  *
     * ==>                                                  *
     *                                                      *
     *SELECT OPTION USE ARROWS, <A>DD, <C>HANGE, OR <D>ELETE*
     *  TRAMS. <L>OCATE TRANS. <F>ORWARD, <B>ACKWORD <E>XIT *
     ********************************************************

     OPTION A  ADD, screen pointer ==> must be located at
               first empty line & first column. The account
               number is not verified now but is verified at
               posting time. Posting report shows which ones
               are not posted.

          DATE input requires MONTH, DAY, & YEAR on 1st line.
               After 1st date, enter day as 2 digits or month
               and day as 3 or 4 digits. 01, 02 or 501 0501
  
          INVOICE # must be NUMERICAL up to 6 digits. A
               decimal point is ok. Use (.) for NO invoice #.
   
          TRANSACTION code is any number 1 to 99.
               See page 1.7 if you need a copy of the codes.

               AMOUNT can be a CREDIT or DEBIT (minus or +)
               entry. The system assumes 2 decimal places.
               Credit entries can be entered with a MINUS (-)
               sign in front of, or behind the amount. If you
               find a (.) period easier then  a (.) period
               in front of the amount is the same as (-).
               some examples;    125. = 125.00    125 = 1.25
               .125. = <125.00>  .25  = <.25>      25 =  .25
                Credit entries are always bracketed <>.

       REPEAT Acct#, Date, Inv.#, Trans code with <enter> key.
                       --- continued next page ---

           ADD OR CHANGE TRANSACTIONS  (CONT.)   PAGE 2.1.C

     Note 1.  The pointer ==> is moved around the screen by
              using the four cursor keys. Don't forget to
              toggle them on/off with the NUM-LOCK key.
            


     OPTION A ADD (cont.)    To terminate the add mode, press
              the <-> key & press <enter>. This will display
              the options menu at the bottom of the screen.

     OPTION C CHANGE. To make a change to any line item, move
              screen pointer using the ARROW keys to the
              desired entry and press the <C> key. Now type
              in the desired change.

     OPTION D DELETE. Move screen pointer ==> with ARROW keys
              to the desired line to delete, then press the
              <D> key. Then answer Y for yes or N for NO to
              delete the line.  After a line is deleted, you
              can add a transaction in the empty spot.

     OPTION L LOCATE. Press <L> key and system will ask you
              what transaction line number you wish to find.
              If you have 147 transactions entered and type
              200 the system will go to the last page that
              has entries.

     OPTION F FORWARD. To move forward a page of transactions
              press the <F> key and the system will display
              next page. It will not go forward if the next
              page of transactions is blank.

     OPTION B BACKWARDS. To move back to a prior page press
              the <B> key. The system will display the
              previous page of entries. If on page 1, the
              system will not go anywhere.

     OPTION E EXIT. To exit the input screen, press <E> key
              and the system returns to the transaction menu.
  

                        LIST TRANSACTIONS          PAGE 2.2

     OVERVIEW The transactions entered by the posting program
              are held in a temporary file called "ARTRANS"
              This file can be printed prior to the actual
              posting of the transactions. It is not required
              that you print them since the system
              will automatically produce an audit report when
              the transactions are posted to your accounts.
              The two reports do have different formats. The
              listing does not look at the customer disk
              where the posting report does.

              The transaction list report will summarize the
              DEBITS and CREDIT entries for you.

              You can print ALL transactions in "ARTRANS"
              file or you can print a RANGE of entries. The 
              report will print in the same order that the
              transactions were entered.

              When you enter <2> from the Transaction menu
              you will be asked;
   
     ********************************************************
     *                                                      *
     *  FIRST TRANSACTION # TO LIST PRESS <ENTER> FOR ALL   *
     *                                                      *
     ********************************************************
  
     Step 1  If you wish to list ALL transactions, simply
             press <enter>.  If you wish to list a RANGE of
             transactions, enter the FIRST transaction #. The
             system will then prompt you for the last 
             transaction number. 

     Step 2  When the report is finished the transaction menu
             is displayed. 

                    COMPUTE CHECK TOTALS           PAGE 2.3 

     OVERVIEW The system can give you a screen summary of all
              transactions entered into the TRANS file. The
              transactions are not posted to the accounts
              but simply held in a temporary file. The
              COMPUTE check total is another way to verify
              that you have entered all the transactions
              correctly.  If you were to run an adding
              machine tape of all your transactions prior
              to computer entry, you should end up with the
              same figure the computer would give you under
              this option.

      Step 1  Press <3> at the transaction menu. Compare the
              totals with your adding machine tape. They
              should agree. Fix any errors using option 1.

                   POST TRANSACTIONS            PAGE 2.4

     OVERVIEW This option should be done after option 3.

              You may have to run this option because you
              have entered 150 transactions and should post
              them to make room for more entries. The posting
              process will erase the ARTRANS file when done.

              The actual posting process is done by program
              ARPOSTAR. The system EXITS the posting entry
              program and runs ARPOSTAR. After the posting
              process, the system returns to the Main Menu.

              Transactions are sorted by account number prior
              to posting. This reduces the number of data
              file changes to a minimum.

              Report prints in account number sequence. Any
              transactions for accounts that CAN NOT BE
              FOUND will be flagged on the report.
              Find the error and Re-Enter them.

     *******************************************************

     Step 1   Press <4> at the Transaction menu to POST.

              The system will ask for the date.

     Step 2   You should enter the date you wish to have on
              the posting report.

              To exit without posting, Type: <E>

     Step 3   System will access each CUSTOMER file. If a
              file is not on-line you will be prompted to
              put it on-line or exit.

      NOTE 1   If you have a hardware or power failure, the
               ARTRANS file will still be there. If you re-
               post you will get duplicate postings up where
               the error occurred. To prevent this you should
               backup you data files FROM you last set of 
               backup files and then re-post.

                     R E P O R T S    M E N U        PAGE 3

     ********************************************************
     *    ACCOUNTS RECEIVABLE  (c) by HDP        PAGE 0     *
     *                                                      *
     * OPTION       R E P O R T S   M E N U         MANUAL  *
     * ---------------------------------------------------- *
     * <1> SCREEN CHECK OF CUSTOMER ACCOUNT          PG 3.1 *
     * <2> COMPUTE FINANCE CHARGES                   PG 3.2 *
     * <3> PRINT AGEING REPORTS                      PG 3.3 *
     * <4> PRINT STATEMENTS                          PG 3.4 *
     * <5> PROCESS END OF MONTH                      PG 3.5 *
     * <6> PRINT MAILING LABELS                      PG 3.6 *
     * <7> EXIT TO SYSTEM UTILITIES MENU             PG 4.  *
     * <8> EXIT TO MAIN MENU                         PG 0.  *
     * <9> QUIT ALL PROCESSING                       PG 9.  *
     * ===================================================  *
     *  8-26-86   CONFIGURATION: HARDDISK   ID CODE= HDP    *
     * ===================================================  *
     * ENTER OPTION NUMBER ?                                *
     ********************************************************

     Step 1  Choose what you wish to do and enter the number,
             then turn to the corresponding page number.

             If you wish to exit the A/R system
             choose OPTION 9.

             SCREEN CHECK OF CUSTOMER STATUS      PAGE 3.1

     OVERVIEW  This option allows you to quickly obtain the
               balance due on a customer. Only the screen is
               used to show the information.

     Step 1  Type <1> at Reports Menu.

     Step 2  Enter the Account Number and press <enter>
             System will access the data file.

     ********************************************************
     * SCREEN CHECK                                PAGE 3.1 *
     *                                                      *
     *...........81005 -  HOLMAN DATA PROCESSING ...........*
     * OLD BALANCE:      146.00 : CUSTOMER STATUS: RETAIL   *
     * CURRENT BALANCE:  258.53 : TELEPHONE # (916)533-5992 *
     * CREDIT LIMIT:     500.00 : ESTABLISHED:  1/82        *
     * OVER LIMIT BY:      0.00 : LAST PAYMENT:  1/19/82    *
     *                          :                           *
     * 7 TRANSACTION THIS MONTH : INTEREST RATE: 1.5% / MO. *
     *------------------------------------------------------*
     *  CURRENT -  30 DAYS  - 60 DAYS  - 90 DAYS - 120 DAYS *
     * LAST BILLING.........................................*
     *   86.86      59.14       -----      -----    -----   *
     * CURRENTLY............................................*
     *  212.78      45.75       -----      -----    -----   *
     * ENTER ACCOUNT NUMBER OR <E>XIT                       *
     ********************************************************

            If the account can not be found the system will
            display a message and ask for another account #.

     Step 3 The account will be displayed as shown above.
         Review the information. Type in a new account number
         or press <E> to exit.

                 PRINT & COMPUTE FINANCE CHARGES Page 3.2

     OVERVIEW Late charges are automatically calculated and
              posted to accounts as long as they have a
              PERCENTAGE put in their account data. See page
              1.1 item # 11 and have a past due amount.
              The A/R system looks at each account, gets the
              percent needed for the calculation, checks old
              balances for payments, & computes the finance
              charge amount.

    Note 1.   Program prints an audit trail and can be re-run
              if needed. Only 1 late charge is posted no
              matter how many times it is run.
           
    Note 2.   A minimum amount is entered for the late
              charge. If the calculated late charge is less,
              the late charge will be the minimum amount.
     ********************************************************
     * FINANCE CHARGE COMPUTATION & REPORT        PAGE 3.2  *
     *                                                      *
     * THIS PROGRAM COMPUTES THE FINANCE CHARGES FOR ALL    *
     * ACCOUNTS WITH OVERDUE BALANCES AND SHOULD BE RUN ONLY*
     * AFTER ALL TRANSACTIONS FOR THE MONTH HAVE BEEN POSTED*
     * IF NECESSARY, THE PROGRAM CAN BE RE-RUN              *
     *                                                      *
     * DO YOU WANT TO CONTINUE (Y/*N)? _Y_                  *
     *                                                      *
     * ENTER FINANCE CHARGE TRANSACTION CODE # ?  _15_      *
     * ENTER MINIMUM FINANCE CHARGE AMOUNT (X.XX)? _0.50_   *
     * ENTER BILLING DATE (MMDDYY) ? __123183__             *
     *                                                      *
     * IS EVERYTHING OK (Y/*N)?   _Y_                       *
     ********************************************************
     Step 1  Type: Y to continue or N to exit.
             Remember the * signifies default for <enter>.
     Step 2  Type the number of the transaction code you have
             setup for late charges. (sample data used 15)
     Step 3. Type in the minimum finance charge amount.
     Step 4. Type in the date for the report.
     Step 5. Type a Y if everything looks OK. 

                AGEING REPORTS                   Page 3.3

     OVERVIEW  This section is where the aging reports are
               printed.  You may print these reports for
               <E>very account, <R>ange of accounts, or
               <T>otals only.  The menu is shown below.
               The option <2> prints in a format similar
               to the statements. All other reports DO NOT
               show the detail of each transactions.

     ********************************************************
     * AGEING REPORTS                              PAGE 3.3 *
     *                                                      *
     * REPORT OPTIONS:                                      *
     * <1> LIST ALL CUSTOMERS      <5> OVER CREDIT LIMIT    *
     * <2> ACTIVE (WITH TRANSACT.) <6> PAST DUE ACCOUNTS    *
     * <3> ZERO BALANCE ONLY       <7> BOTH 5 & 6           *
     * <4> CREDIT BALANCE ONLY     <8> (EXIT PROGRAM)       *
     *                                                      *
     *  ENTER OPTION NUMBER:  _1_                           *
     * <1> = EVERY CUSTOMER                                 *
     * <2> = RANGE OF CUSTOMERS                             *
     * <3> = TOTALS ONLY                                    *
     *                                                      *
     * ENTER REPORT DATE (MMDDYY) ?  _123183_               *
     * ANY CHANGES (Y/*N)? _N_                              *
     ********************************************************

     Step 1 Make choice and type the number.
            Choose <2> & you will be asked if you want to
            list each account on a seperate page (Y/N).

     Step 2 Enter 1, 2, or 3 for Every customer, Range of
            customers or Totals only.

     Step 3 Enter report date.

     Step 4 If you made a mistake answer Y for "ANY CHANGES"
            and go back to step 1.

     Step 5 System will access the appropriate customer
            data file. If using floppy drives and the
            data file is not on-line you will get a screen
            prompt. Mount the correct file or exit.

                   PRINT STATEMENTS               PAGE 3.4

     OVERVIEW Program prints on plain paper or forms. If you
     choose forms, you will be allowed to print an allignment
     test.
     ********************************************************
     *  A/R BILLING PROGRAM                      PAGE 3.4   *
     *  OPTIONS ARE:                                        *
     * <1> FULL PRINTOUT (ALL ACCNTS) <3> SELECTED ACCOUNTS *
     * <2> RESTART FULL PRINTOUT      <4> (EXIT PROGRAM)    *
     * ENTER OPTION # ?  _1_                                *
     * ARE YOU PRINTING ON PLAIN PAPER (Y/N) _N_            *
     * PRINT BY AGEING OPTIONS ARE:                         *
     *     <1> = 30 DAYS & OVER                             *
     *     <2> = 60 DAYS & OVER                             *
     *     <3> = 90 DAYS & OVER                             *
     * <ENTER> = ALL ACCOUNTS ? _1_                         *
     *                                                      *
     * PRINT ZERO & CREDIT BALANCE CUST.(W/INVOICES) Y/N _N_*
     * PRINT BILL FOR ACCNTS WITH CREDIT BALANCES (Y/)? _Y_ *
     * PRINT BY STATUS CODE (1-18) OR <ENTER> FOR ALL _4_   *
     * BILLING DATE (MMDDYY)? _123183_                      *
     * IS EVERYTHING OK (Y/N) ?  _Y_                        *
     ********************************************************
     OPTION 1 FULL PRINTOUT. This will print statements for
              all accounts. Check sum printed on last page.
     OPTION 2 RESTART FULL PRINTOUT. This option lets you
              start printing statements at a selected account.
     OPTION 3 PRINT SELECTED ACCOUNTS. If you want to print
              any one account use this option. System will
              ask for each account number you wish to bill.
     OPTION 4 EXIT PROGRAM. Returns to REPORTS MENU.

     Step 1   CHOOSE options 1 to 4, and type of paper.
     Step 2   CHOOSE the ageing category you wish to print.
     Step 3   If you want accounts that have ACTIVE POSTED
              transactions and ZERO balance then type; Y
     Step 4   If you want statements for accounts with CREDIT
              balances to print, type: Y for Yes.
     Step 5   CHOOSE status code (1-18) or <enter> for all.
              (see page 1.5 for status code detail).
     Step 6   Enter a 2 line message or <enter> for none.
     Step 7   Enter the date for the statements.
     Step 8   If OK type Y or <enter> or N to start over.

                  END OF MONTH UPDATE               Page 3.5

     OVERVIEW Program will update balances & erase all posted
              transactions on every account.
            
              It is recommended that you do this AFTER backups
              are made of your data files.

              An audit report is generated for each account.


     ********************************************************
     * A/R END-OF-MONTH UPDATE                    PAGE 3.5  *
     *                                                      *
     * THE PROGRAM ERASES ALL TRANSACTIONS POSTED THIS MONTH*
     * AND UPDATES THE BALANCE FORWARD ACCORDINGLY.         *
     *                                                      *
     * YOU CANNOT RUN ANY REPORTS FOR THIS MONTH            *
     * AFTER THIS PROGRAM IS RUN!                           *
     *                                                      *
     * DO YOU WANT TO CONTINUE (Y/*N) ?  _Y_                *
     *                                                      *
     * DO YOU HAVE A CURRENT SET OF BACKUP DISKS (Y/*N)? _Y_*
     *                                                      *
     * ENTER REPORT DATE ? _123183_                         *
     *                                                      *
     ********************************************************

     Step 1  Type: Y for yes to "CONTINUE" or N to exit.
 
     Step 2  Type: Y if you have a set of "backup disks". If
             you LIE to the system it will not know it. YOU
             will be sorry IF you have a power failure or a
             hardware failure.

     Step 3  Enter the report date.
             Program will print an audit trail of the update.
             Check the ending balance with your statements.

                    PRINT MAILING LABELS             PAGE 3.6

     OVERVIEW System prints mailing labels on 1 across labels.
              The normal label is 3 1/2 by 15/16 of an inch.
              TOP to TOP of each label is 6 printed lines.

              You can print 1 or more labels.
              You can have phone number print on labels.
     ********************************************************
     * SET MAILING LABEL PARAMETERS               PAGE 3.6  *
     * -----------------------------------------------------*
     *   -- PRINT THE FOLLOWING CUSTOMER STATUS CODES --    *
     * 1-STATUS    YES :  8-HHHHHHHH  YES : 15-OOOOOOOO YES *
     * 2-CODES     YES :  9-IIIIIIII  YES : 16-PPPPPPPP YES *
     * 3-CCCCCCCC  YES : 10-JJJJJJJJ  YES : 17-QQQQQQQQ YES *
     * 4-DDDDDDDD  YES : 11-KKKKKKKK  YES : 18-RRRRRRRR YES *
     * 5-EEEEEEEE  YES : 12-LLLLLLLL  YES :                 *
     * 6-FFFFFFFF  YES : 13-MMMMMMMM  YES : 0-(NOT SET) YES *
     * 7-GGGGGGGG  YES : 14-NNNNNNNN  YES :                 *
     *------------------------------------------------------*
     * 19-ACCT #'S: 0 TO 999999  20-ZIP CODES:0 TO 99999    *
     *------------------------------------------------------*
     * ENTER ITEM #, SET 0-18 YES, RESET 0-18 NO, OR EXIT?  *
     ********************************************************
     OPTION S.  SET. Press <S> and codes 0-18 are set to YES
     OPTION R.  RESET Press <R> and codes 0-18 are set to NO
     OPTION #   NUMBER. Enter number 0 to 18 then Y or N for
                YES or NO to print labels by  status code.

     OPTION 19  ACCOUNT #. System asks for FIRST and LAST
                account number to print labels for.
     OPTION 20  ZIP CODES. System asks for FIRST and LAST
                zip codes to print labels for.
   
     Step 1  Answer if your want 1 or more labels and if you
             want the phone number on labels. If you want
             more than 1 label then you get the above screen
             and options.
   
     Step 2  OPTION E EXIT. Press <E> system will ask for
             the number of lines per label. (usually 6).

     Step 3  If everything is set the way you want it then
             type Y for Yes.

     Step 4. You can print an alignment box to check printer.






















 























```
{% endraw %}

## ARPARTC.DOC

{% raw %}
```
                 U T I L I T I E S    M E N U      PAGE 4

     ********************************************************
     *    ACCOUNTS RECEIVABLE  (c) by HDP        PAGE 4     *
     *                                                      *
     * OPTION     U T I L I T I E S   M E N U       MANUAL  *
     * ---------------------------------------------------- *
     * <1> FORCE HOUSEKEEPING FUNCTIONS TO BE DONE   PG 4.1 *
     * <2> CLEAR ALL TRANSACTIONS OFF ACCOUNTS       PG 4.2 *
     * <3> RESET COMPANY RETURN ADDRESS              PG 4.3 *
     * <4> SELECTIVE DELETE TRANSACTION ON 1 ACCT    PG 4.4 *
     * <5> INITIALIZE A NEW CUSTOMER FILE (ARCUSTx)  PG 4.5 *
     * <6> EXIT TO HOUSEKEEPING PROGRAM              PG 7.  *
     * <7> EXIT TO REPORTS MENU                      PG 3.  *
     * <8> EXIT TO MAIN MENU                         PG 0.  *
     * <9> QUIT ALL PROCESSING                       PG 9.  *
     * ===================================================  *
     *  8-26-86   CONFIGURATION: HARDDISK   ID CODE= HDP    *
     * ===================================================  *
     * ENTER OPTION NUMBER ?                                *
     ********************************************************

     Step 1  Choose what you wish to do and enter the number,
             then turn to the corresponding page number.

             To exit the A/R system choose OPTION 9.

                FORCE HOUSEKEEPING FUNCTIONS       PAGE 4.1

     OVERVIEW This utility should be run anytime system  has
              problems completing any function. Program
              manually forces the housekeeping program to
              check out data files and rebuild the various
              indexs the system uses to access customer data.

              If you think you have a problem backup the data
              files before proceeding.

     ********************************************************
     * FORCE HOUSEKEEPING ACTION                   PAGE 4.1 *
     *                                                      *
     * SPLIT COMMAND OPTIONS ARE.....                       *
     *   1 - RE-SORT CUSTOMER FILE                          *
     *   2 - RE-BUILD CUSTOMER FILE & TRANSACTION LINK      *
     *   3 - RE-BUILD ARMASTER CROSS-REFERENCE INDEX        *
     *                                                      *
     *  ENTER COMMAND NUMBER OR <E> TO EXIT?                *
     ********************************************************

     OPTION 1 Will check the index table at the beginning of
              any one customer data file. Input the file # to
              re-sort. A number 1 to 31 is valid if those
              files exist.

     OPTION 2 Will do a detail scan of customer records and
              check the transaction chained to each account.
              Input the file number. A file number 1-31 is
              valid only if the file is in use.

     OPTION 3 Will rebuild ARMASTER. This index tells what
              the highest account # is in each customer file.

     Note 2   Use only those numbers that will match  data
     ======   files. Example; If 3 data files exist the
              only valid numbers would be 1,2,3 for file
              numbers. If you enter a 4 system can't handle
              the lie and will keep asking for file 4.

     Step 1 Enter the number 1, 2, or 3
            If you choose 1 or 2 then enter the customer file
            number that needs fixing. Program then exits to
            the housekeeping program.

          CLEARING ALL TRANSACTIONS OFF ACCOUNTS   PAGE 4.2

     OVERVIEW This utility will erase all posted transactions
              on every account in your A/R system. The
              account balances will remain what they were
              when the END-OF-MONTH update program was run.

              It will not erase un-posted transactions in the
              ARTRANS file. These can still be posted.

              This utility does not print any report to tell
              you what transactions were deleted. It simply
              deletes them all.


     ********************************************************
     * ERASE ALL TRANSACTIONS                     PAGE 4.2  *
     *                                                      *
     * THIS PROGRAM WILL ERASE ALL TRANSACTIONS POSTED THIS *
     * MONTH WITHOUT CHANGING THE LAST END OF MONTH BALANCES*
     *                                                      *
     * IT WOULD BE AS IF THE TRANSACTIONS WERE NEVER POSTED.*
     *                                                      *
     * IS THIS WHAT YOU WANT TO DO (Y/*N) ? _Y_             *
     *                                                      *
     * ARE YOU SURE (Y/*N) ?  _Y_                           *
     *                                                      *
     ********************************************************

     Step 1 If you wish to clear all transactions, then
            type: Y for YES.

     Step 2 System will ask you "ARE YOU SURE (Y/*N)"
            Decide and enter Y or N.

            A NO answer to either question will exit.

                   UPDATE COMPANY FILE            PAGE 4.3

     OVERVIEW The company file contains the return address
              used by the statement program.  The invoicing
              program, "ARINV" uses the company name and
              address, tax rate, and updates the invoice
              number  when an invoice is created.

     NOTE 1  IF you are using PREPRINTED forms with your
     ======  return address printed then you must leave
             item 1 through 5 blank. Simply press SPACE bar
             a couple of times for each field.

     ********************************************************
     * A/R COMPANY FILE                           PAGE 4.3  *
     *                                                      *
     * CORRECTION OPTIONS ARE,     CURRENT STATUS IS        *
     *------------------------------------------------------*
     *<1> COMPANY NAME            HOLMAN DATA PROCESSING    *
     *<2> ADDRESS 1               2059 WEST LINCOLN         *
     *<3> ADDRESS 2               OROVILLE, CA. 95965       *
     *<4> ADDRESS 3               _______________________   *
     *<5> PHONE #                 (916) 533-5992            *
     *<6> TAX RATE                6 %                       *
     *<7> BEGINNING INVOICE #     1000                      *
     *<8> YEAR                    1984                      *
     *                                                      *
     *<0> EXIT TO MAIN INDEX MENU                           *
     * ENTER OPTION NUMBER ?                                *
     ********************************************************

     Step 1.  Choose what you wish to change, type the
              number (0-8), then enter the information.
  
              The information or changes are not recorded
              until you choose option <0>.

     Step 2.  To exit, type: 0   System  exits to MAIN MENU.

             DELETE SELECTIVE TRANSACTIONS         PAGE 4.4

     OVERVIEW Program will delete all transactions posted
              to any one account. It is intended to help
              you correct mistakes you have made posting
              transactions.

     ********************************************************
     * A/R SELECTIVE TRANSACTION DELETE            PAGE 4.4 *
     *                                                      *
     * THIS UTILITY PROGRAM WILL DELETE  All                *
     * TRANSACTIONS POSTED TO ANY ONE ACCOUNT.              *
     *                                                      *
     * DELETE <A>LL TRANSACTIONS OR <E>XIT ?  _O_           *
     *      --------------------                            *
     * ENTER CUSTOMER ACCOUNT NUMBER                        *
     * ? _21005_                                            *
     ********************************************************

     Step 1 Make choice by enter letter.
  
     OPTION A ALL: Enter the account number. System checks
              file that should have the account on it.

              Account #, NAME, & PHONE # is displayed and a
              prompt asks "ARE YOU SURE (Y/N)".ENTER a Y
              to erase or N for no.

     OPTION E EXIT:  Transactions are kept and program exits.

           INITIALIZE A NEW CUSTOMER FILE          PAGE 4.5

     OVERVIEW  System requires that you initialize each
               Customer data file before it can be used.
               The new file will fit on disk as long as you
               have 80 K free space. Even HARD DISK usres
               must do this for each 80k of data.

      *****    This procedure must NOT be done to a customer
      take     file MORE than ONCE. Doing so, will erase your
      heed     data file. Be sure you are doing this to a new
      ****     data file number that is not in user currently. 

               You must intialize a new file when any file
               becomes full and requires split in half.

     ********************************************************
     *  INITIALIZE A CUSTOMER FILE                PAGE 4.5  *
     *                                                      *
     *  THIS PROGRAM INITIALIZES A CUSTOMER FILE            *
     *                                                      *
     *  ** WARNING ** IF YOU RE-INITIALIZE AN EXISTING FILE *
     *   THE DATA IN THAT FILE WILL BE ERASED.              *
     *                                                      *
     *  IS THIS WHAT YOU WANT TO DO (Y/*N) ?  _Y_           *
     *                                                      *
     *  ENTER CUSTOMER FILE # (1-31)?  _2_                  *
     ********************************************************

     Step 1  Type: Y  to initialize disk.

     Step 2  Floppy systems mount a disk with enough free
             space on-line in drive B:

     Step 3  Type next UNUSED file number. It is important to
             use the correct number. If customer file # 1  is
             already in use then type: 2 and press <enter>.
             The above screen reflects this answer.

             If customer data files #1, #2, & #3 are in use,
             then the proper number would be 4. DO NOT use a
             number that is in use and do not skip a number.

             The new file is initialized and the housekeeping
             program is run to re-verify what files are in 
             use.

                    SET DATA FILE ID CODE       PAGE 5.

     OVERVIEW It is possible to have many companies on a
              hard disk at one time. The ID code makes this
              possible. The data files associated with any
              1 customer will have the same 3 letter ID
              code assigned to it.
       
                    ARMASTER    These file will have
                    ARTRANS     the same ID code. The
                    ARCUST1     sample data had .ABC
                    ARCUSS     
                    ARRET      

         The ID code is held in a file called ARDATA and it
         must always be on the same drive as the programs.

         Change the ID code any time you wish. Remember that
         if you do change the ID code there are not files for
         that ID code. 

       For example you have .ABC used and want a new customer
       set up using .XYZ then follow these steps.

       EXIT to DOS
       
       CREATE ARMASTER.XYZ by copying the old ARMASTER.ABC
          COPY ARMASTER.ABC to ARMASTER.XYZ
       
       Reload to the main menu.
       
       Set the ID CODE to XYZ            
       
       CREATE ARCUST1.XYZ by initializing it (see pg 4.5)
       
       The housekeeping program will run and ask if file
       number 1 is setup. Type Y for yes and No to the
       rest of the questions.

       The files ARTRANS.XYZ 
                 ARRET.XYZ
                 ARCUSS.XYZ
       will be created when needed automatically.                       

              SET HARDWARE CONFIGURATION     PAGE 6.


       OVERVIEW  The hardware configuration tells the program
                 where to look for the data files. Once set,
                 this is held in the file called ARDATA.

       FLOPPY=>  If you set it for a dual floppy system the
                 programs will look for the data files as
                 follows;
                     ARMASTER.abc   DRIVE A:
                     ARTRANS.abc    DRIVE A:
                     ARCUSS.abc     DRIVE A:
                     ARCUST1.abc    DRIVE B:
       Note 1. You can put at least 4 ARCUSTn files on 1 dual
               sided 40 track disk. It is recommended that 
               you do not try having more than 1 company set-
               up on any one set of floppy disks using 
               different ID codes.

       Note 2.  Your ID code may vary from the .abc above.

       HARDDISK/DEFAULT This setting will look for all files
               on the present logged drive. Usually the hard
               disk is drive C: but some of you may be using
               drive D: or higher on a network.


       Step 1. Set the configuration to match your hardware.
               Program returns to the main menu.

              HOUSEKEEPING PROGRAM                Page 7.

    OVERVIEW Program does the necessary housekeeping on the
             the internal data indexes. It is run auto-
             matically when needed, or manually.  A manual
             method is discussed on page 4.1

             When adding customers, system exits to this
             program whenever a disk sector becomes full.
             This starts around the 30th entry & as the file
             fills up, it becomes more frequent.  This type
             of split action is simply sorting an index at
             beginning of the data file being expanded.

             If a customer data file becomes full (at 300
             customers). System will want to SPLIT the full
             file in half. ARSPLIT will move 1/2 of the
             customers and their transactions to the next
             highest file not in use. (initialize it first
             see page 4.5). Posting transactions can also
             fill up a data file.
      --------------------------------------------------------
             If the disk does need to be split in half you
             will have to answer some screen prompts.
   
    Step 1 System asks if next higher file number is setup.
           Type: N for NO & system returns to the Main Menu.
           Initialize the new customer file. RE-RUN the
           housekeeping program & TYPE Y for YES this time.

    Step 2 System goes through the following cycle & prompts
           if it can not find a needed file on-line.
         a. Check file that NEEDED to be split.
         b. Ask if NEW file is initialized. TYPE: N for no.
            You initalize it and RE-RUN ARSPLIT program.
         c. check file that NEEDED to be split.(AGAIN)
         d. Ask if New file is initialized. TYPE: Y for Yes
         e. Copy data from full file to a temporary file .
         f. Check NEW data file and copy data to it.
         g. Check full file that NEEDED split & erase the
            copied data from it. Cycle e & f may require
            more than 1 pass to move required data.

    Step 3 RE-BUILD ARMASTER. System will re-verify what 
           files are in use starting with file #1. Be sure
           you know what files are in use. If you answer Y
           program will try to find & verify file.

                CREATE AND PRINT INVOICES           Page 8.
     OVERVIEW Invoice uses same Multi-purpose form as
              statements or use plain 8 1/2 by 11 paper.
     ********************************************************
     * A/R INVOICE WRITER                          PAGE 8.  *
     *    OPTIONS ARE........                               *
     *         *<1> PREPARE INVOICE                         *
     *          <2> CASH SALE                               *
     *          <3> RETURN TO MAIN MENU                     *
     *          <4> EXIT TO REPORTS MENU                    *
     *          <5> EXIT TO UTILITIES MENU                  *
     *          <6> RUN HOUSEKEEPING PROGRAM                *
     *          <7> QUIT ALL PROCESSING                     *
     *    ENTER OPTION NUMBER                               *
     ********************************************************
     Step 1  Make choice. * indicates a default for <enter>.
     Step 2  Enter the Customer # and press <enter>.
     Step 3  Varify that account is correct (*Y/N).
     Step 4  Enter the date you want printed on the invoice.
     Step 5  The next series of screen prompts will ask for;
             a. ATTENTION: Type person's name or whatever??
             b. SHIP TO ADDRESS: 4 lines, 30 char. each.
             c. MAKE CORRECTIONS: Correct/Go on with Y or N
             d. SHIPPING METHOD: 5 choices, pick one.
             e. FOB POINT: 3 choices. pick one.
             f. TERMS: 7 choices, pick one.
             g. SHIPPING DATE: <enter>=same as invoice date.
             h. PURCHASE ORDER #. If none, press <enter>.
             i. MAKE CORRECTIONS: Correct/Go on with Y or N.
     ********************************************************
     * A/R INVOICE WRITER                                   *
     *  #      :   #    :    ITEM # 3            :T:        *
     * ORDERED : SHIPPED:  DESCRIPTION           :X: AMOUNT *
     *------------------------------------------------------*
     *      10 :      10: A/R SYSTEMS MODEL 3    :N: 149.95 *
     *       5 :       5: REWRITE LABEL PACKS    :N:  10.95 *
     *         :        :                        : :        *
     * IS LINE CORRECT (*<Y>ES <N>O <E>RASE <D>ONE _D_      *
     * ------------------------------------------------     *
     * ARE ALL ITEMS CORRECT (*Y/N)                         *
     ********************************************************
                  --- continued on next page ---

           CREATE & PRINT INVOICES (cont.)      Page 8.0 C

     Step 6  Each line item on the invoice will prompt for
             the QUANTITY ORDERED & SHIPPED, a DESCRIPTION,
             if TAXABLE (Y/N) and the net UNIT price.

             The current numbered item is displayed at the
             TOP center of the screen. The PROMPT line is
             displayed at the BOTTOM of the screen.

             At the end of each line there are these options;

     OPTION <Y>_____ This line OK, enter more line items.
      The * indicates the default, <enter> also equals Y.
     OPTION <N>_____ Line has errors, allow corrections.
     OPTION <E>_____ ERASE line just entered.
     OPTION <D>_____ DONE. Line OK, finished entering items.
                     You then get ARE ALL ITEMS OK (*Y/N)
                     If No then you start over at step 6.

     Step 7  Pick the above option desired.
  
     Step 8  Enter the following;
             a. SHIPPING CHARGES: 12.55 = $12.50 dollars.
             b. TRANSACTION CODE: See Pg 1.6 for definition.
             c. DISCOUNT allowed. 10.5 give 10.5 % off items.
             d. INVOICE STATUS:  3 Choices, pick one.
             e. MAKE CORRECTIONS: Yes or No

     Step 9  HOW MANY COPIES?    OPTIONS ARE.....
             <1>____ Print 1 invoice.
             <2>____ Print Multiple copies of invoice (1-4)
             <3>____ Post invoice without printing invoice.
             <4>____ Print packing slip (No amounts shown).
             <E>____ Start over.

             Enter choice. After printing you can print more
             copies or type N for No. At this point the 
             program writes one line in the un-posted trans
             file to be posted with other transactions if this
             was not a CASH sale.

                        EXIT A/R SYSTEM            PAGE 9.
 
     OVERVIEW You can exit the system at almost any menu.

     NOTE 1  Using the system without proper backup files is
     ======  not recommended. You have an investment in time
             and information. The cost of diskettes is very
             small by comparison. The time it takes to backup
             your files is minimal.

             We will not go into listing backup proceedures
             here. Consult your DOS manual.
   
             "RUNNING A COMPUTER PROGRAM WITHOUT BACKUP IS
              LIKE DRIVING A CAR WITHOUT A SPARE TIRE."

     Note 2  You MUST  backup ALL data files.
     ======  Consult Page A.4 for file names.

     Note 3  If running on a floppy drive system you should
     ======  backup all your floppy disks by sets like A, B,
             C. Each set will have 2 disks minimum.
             Use the newly created disks and protect the
             source disks. If you do not use the backup disks
             you will NOT KNOW if they are in fact GOOD
             backups will you.
    
     Note 4  We typically make our backups just AFTER 
     ======  processing prior to turning system off.

             We have 3 sets minimum per client (A, B,
             and C).  and  rotate them each time we backup
             data from the hard disk. We mark a POST-IT note
             on the disk jacket as to what disk was used and
             what was last done to the files on the disk.
   
     Note 5  It is also a good practice to backup just prior
     ======  to running the END OF MONTH processing. This way
             you could always re-print a statement.

                            INTRODUCTION             PAGE A.
     ---------- SHAREWARE VERSION 1.1 ----------------------
     Thank you for taking a look at our A/R program .

     PLEASE remember that there is a difference between the
     SHAREWARE version 1.1 and version 2.0 which is the 
     commercial version. The features missing in Version 1.1
     are in version 2.0 (see the sign-off screen). The 
     shareware version is limited to about 250 customers
     (1 data file). Instead of a Shareware program going
     commercial we are reversing the process by offering a
     limited commercial version as Shareware.

     We  think you will find the program very fast, bug-free,
     worth using, and last but not least worth upgrading.

     The entire manual is included here to give you an idea
     what the missing features do and how they do it.

     ----- USING THE MANUAL AND PROGRAMS -------------------

     Most screen displays have a page number in the upper
     right corner of the screen. This is the manual's page
     number to look for help. If you see 3.2 this means
     option 3 from the main menu and option 2 from the next
     menu.

     If you see a YES/NO prompt like (Y/*N) or (*Y/N) the *
     marks what you get if you just press <enter>

     <ENTER> means press the ENTER key or the RETURN key.

     The screen is represented in this manual by a box of *'s
  
     You can use lower case in some instances BUT for most
     prompts you will have to use CAPITAL letters like Y, E,
     N, etc.

     There are no sample reports in this manual in hopes that
     you will exercise the sample data by printing them.

     Screen sample answers are shown by _Y_ or _21005_ in
     this manual. Your answers may vary.

              COPYRIGHT NOTICES                  PAGE A.1

     Item 1.  The programs and manual are copyrighted by  
              HDP Holman Data Processing. You can not sell
              them. But as a shareware product we allow you
              to give the shareware version away.

     Item 2.  We do not ask for any donations. We do offer
              added features at a reasonable price as 
              as shown on the sign-off screen.

     Item 3.  Programs were written in BASIC and compiled
              using Microsoft's Quick Basic. The BRUN20.exe
              file is provide with permission from Micro-
              soft.

     Item 4.  There is no warrantee with requards to
              suitability to any type of business. You must
              decide if it is suitable to your needs. The
              programs are distributed as-is.
    
     Item 5.  NO OTHER WARRANTEE IS IMPLIED.

          ORDERING STATEMENT FORMS                PAGE A.3

          There are two primary places to buy the 7 inch
          forms used by the statement program and the
          invoicing program.

          NEBS (New England Business Forms)
          Phone: 1-800-225-9550
          Form number is:  9050


          QUILL CORPORATION
          Phone:  1-312-634-4800
          Form name is:  MULTI-PURPOSE FORM


                 RUNNING THE SAMPLE DATA           PAGE A.4

     OVERVIEW:  A/R system is supplied with sample data
                files (about 15 accts.) using ID code ABC.
  
                If you follow the installation instructions
                you will also have the sample data installed.

                We recommend that you exercise the system
                with the sample data. This will allow you
                to become familiar with all aspects of the
                system quickly. This will save time and
                mistakes when you define and setup your own
                disks.

     Phase 1.   Start your learning process by accessing
                every Menu in the system.

     Phase 2.   Add & Edit customers, transaction codes,
                status codes, and system parameters. Print
                a long customer listing.

     Phase 3.   Enter and post transactions to accounts.

     Phase 4.   Run the finance charge report.

     Phase 5.   Print aging status report variations &
                print statements on plain paper.

     Phase 6.   Run  END-OF-MONTH program.

     Phase 7.   Print a customer list as in phase 1.

     Phase 8.   Look at all reports for one account and see
                what happened to the amounts & transactions.

             Items 2 through 8 would be about what you would
             do running the system in a 1 month cycle.

             IF YOU DO NOT WANT TO RUN THE SAMPLE DATA THEN
             SIMPLY RE-INITIALIZE CUSTOMER FILE #1 AGAIN. YOU
             CAN THEN EDIT THE TRANSACTION CODES TO YOUR NEEDS
             AND START ADDING NEW CUSTOMERS. IF YOU CHANGE ID
             CODE THEN YOU NEED TO INITIALIZE ALL FILES.

                ADDENDUMS FOR HARD DISKS           PAGE A.5

     OVERVIEW A/R system can be used on floppy or Hard disk.
              If configured for floppies then drives are
              assigned A: & B: 

              Our A/R is the only system that We know of that
              can be run on floppy disks with the SAME 
              capacity as a hard disk system because of the
              ability to span more than 1 floppy disk.

     NOTE 1 Data file references.
     Where Throughout manual.
             Hard disk systems deals with data similar to the
             floppy system. On a floppy system, if a file is
             not found on-line a screen prompt will allow
             you to mount another floppy. 
             Hard disk users should exit & search the
             directory to determine why the file is missing.

     NOTE 2 Initializing data files.
     Where Page 4.5
             The hard disk version must also have each file
             intialized like the floppy system. Each file
             is about 80k in size. This makes converting
             back and forth easier. Data stored in small
             files can be accessed faster.

             To run a floppy system on a hard drive, copy all
             programs & data files to your hard disk. Set the
             ID code & configuration for hard disk and run.
      --------------------------------------------------------
     CONVERTING from Hard disk to Floppies (they can break).

     Step 1 Install the system as shown for floppies.
     Step 2 Copy ARMASTER.abc & ARRET.abc from harddisk
            to the AR disk with the programs on it.
     Step 3 NOW make a data disk with just your customer
            data files on it. ARCUST1.abc, ARCUST2.abc, ETC.
            You can put up to 4 data files on a disk.
            At the A: prompt type: ARINDX  and press <enter>.
            Check the ID code & configuration.

           INSTALLING ON A HARD DISK SYSTEM     PAGE A.6
     ----- SHAREWARE VERSION 1.0 ----------------------------
     To keep things simple I am not going to talk about path's
     and sub-directories. It is assumed that your hard disk is
     drive C: and you have at least 1 floppy disk as A:

     Step 1. Turn on your computer and get to the C> prompt.
             Get to the Root directory, type; CD \ <enter>
     Step 2. Make a sub-directory. Type; MKDIR \AR <enter>
     Step 3. Go to that sub-directory. Type; CD \AR
     Step 4. Put disk from HDP in drive A: and 
             Type; COPY A:*.* C: <enter>
             This should copy everything off the floppy to C:
             Remove disk when done and put in safe place.
     Step 5. Type; ARINDX <enter> to load to
                   the main menu program.
     Step 6. Set your ID Code to ABC and your hardware 
             configuration for hard disk. 



             INSTALLING ON FLOPPY SYSTEM

     Step 1. Put your dos disk in drive A:
             Put a blank disk in drive B: 
             Type; FORMAT B: /S
        
     Step 2. Remove dos disk & put away. Put new disk in A:
     Step 3. Put HDP A/R disk in drive B:
             Type; COPY B:*.* A:
     Step 4. Remove disk in drive B and put up. Put a blank
             disk in drive B: now. Type; FORMAT B:
     Step 5. Copy sample data to B:
             Type; COPY A:ARCUST1.ABC B:
             Then delete it off drive A:
             Type; DEL A:ARCUST1.ABC
     Step 6. Type; ARINDX <enter> to run the main menu.
     Step 7. Set ID code to ABC and configuration
             to DUAL FLOPPY.














           









                  









```
{% endraw %}

## FILES821.TXT

{% raw %}
```
Disk No 821
Program Title: HDP ACCOUNTS RECEIVABLES version 1.1
PC-SIG version 1.3

    HDP ACCOUNTS RECEIVABLES manages your customer accounts and
transactions for your business. With this program you can add or edit
customer information of files and transaction entries, and editing and
posting are made quick and easy.

    The reports option lets you compute finance charges, print aging
reports and statements. A screen check of an account is available. System
utility programs check and rebuild various indexes if an error is found.
Multiple A/Rs can be setup on a hard disk using different file extension
letters which is ideal for accountants.

    This shareware version of the program is limited to about 250
customers. The program includes sample data files to help you learn the
program.

Usage: Customer Accounts Receivable Manangement

System Requirements: 256k memory, two floppy drives or a hard disk.

How to Start: Type ARINDX (press enter).

Suggested Registration: $25.00 for added features. $20.00 for lifetime
phone support.

File Descriptions:

ARDATA        holds current ID code (which data files current)
ARINDX   EXE  main program (customer maintenance & transaction input)
ARREPT   EXE  reports & screen check
ARUTIL   EXE  utility programs (maintain data integrity)
ARSPLIT  EXE  program to rebuild messed up indexes
BRUN20   EXE  program to make above work
??????   ABC  set of sample data files (id code ABC)
READ     ME   mailing address and brief starting instructions
ARPARTA  DOC  how to install program
ARPARTB  DOC  first part of manual
ARPARTC  DOX  second part of manual
PRINTMAN BAT  batch file to print manual
ERASEMAN BAT  batch file to erase unnecessary doc files

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0821

     Volume in drive A has no label
     Directory of A:\

    ARCUST1  ABC      6912  11-15-87   8:39p
    ARDATA             256   6-20-87  11:54a
    ARINDX   EXE     64065  11-14-87  11:00p
    ARMASTER ABC      8960  11-15-87   8:39p
    ARPARTA  DOC      1687  11-14-87  11:11p
    ARPARTB  DOC     44846  11-14-87  11:17p
    ARPARTC  DOC     30819  11-14-87  11:34p
    ARREPT   EXE     63905  11-14-87   9:46p
    ARRET    ABC       256  11-14-87  11:40p
    ARSPLIT  EXE     16465  11-14-87   9:46p
    ARTRANS  ABC       256  11-15-87   8:43p
    ARUTIL   EXE     13345  11-14-87   9:46p
    BRUN20   EXE     69454   1-16-87  11:44a
    ERASEMAN BAT        60   9-11-87   9:57a
    FILES821 TXT      1859   7-07-88   3:49p
    GO       BAT        38   1-20-88   4:15p
    GO       TXT       540   1-20-88   4:17p
    PRINTMAN BAT        46   9-11-87   9:56a
           18 file(s)     323769 bytes
                           27648 bytes free
