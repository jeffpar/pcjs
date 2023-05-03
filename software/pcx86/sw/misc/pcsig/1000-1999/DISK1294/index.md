---
layout: page
title: "PC-SIG Diskette Library (Disk #1294)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1294/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1294"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DAC EASY TUTOR"

    Learn to use the DAC EASY accounting system, plus gain knowledge of
    basic bookkeeping with lessons that lead you step-by-step through the
    program. The non-interactive tutorial can either be printed out, or
    read off the screen for quick reference using the included read utility.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAP1.TXT

{% raw %}
```

1. FILE CREATION WITH DAC EASY

SCREEN 1-1: A>
/-----------------------------------------------------------------------------\
A>

\-----------------------------------------------------------------------------/

Look at the screen, and find the "A>". This is known as the A prompt.
To me, it shows that the computer expects me to issue a command following 
the A prompt. Next, I want to load the DAC EASY SYSTEM disk into the A 
drive [the drive on top/left]. First I want to make sure that the system 
disk is in the A drive.

TYPE:  dir/w
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Display the directory of the disk in the A drive.

Comments / Questions:

1.1. FUNCTION OF "A>"
"A>" indicates that the default drive is drive A. It also indicates that
the system is in the control of the Disk Operating System [DOS].

1.1.1. DIRECTORY OF FILES WITHIN DAC EASY
DAC EASY system disk contains a file named "EASY.EXE". After typing the
command "DIR/W" you should be able to see this file in the list of files
displayed. If no such file is in the list, it indicates that you have the 
wrong disk.

1.1.1.1. DIRECTORY DISPLAY

SCREEN 1-2: Display the directory of the disk in the A drive     
/-----------------------------------------------------------------------------\
A>dir/w

 Volume in drive A has no label
 Directory of  A:\

EASY     EXE    EA-00    EXE    EA-02    EXE    EA-03    EXE    EA-04    EXE
EA-05    EXE    EA-06    EXE    EA-07-08 EXE    EA-09    EXE    BASRUNB  EXE
       10 File(s)      8192 bytes free

A>
\-----------------------------------------------------------------------------/

Look at the screen, and find the file named "EASY" with the extension 
"EXE". To me, it shows that I have the correct disk in the A drive.  
Next, I want to load the Dac Easy program into the system and start 
working with it.

TYPE:  EASY
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  load and run the EASY program.

Comments / Questions:

1.2. TRANSFERRING CONTROL OF THE SYSTEM
At this point the control of the system will be transferred from DOS to the 
EASY program.

SCREEN 1-3: Load and run the EASY program
/-----------------------------------------------------------------------------\ 

MISSING FILE DEFINITION
<RETURN> to continue

\-----------------------------------------------------------------------------/

Look at the screen, and find the "MISSING FILE DEFINITION" and "<RETURN> to
continue".  To me, it shows that the file to be used in the system has 
not been defined and the system is telling me to press the return key to 
continue.  Next, I want to continue working with the system.

PRESS:  [<-']  Enter/Return key

                              SCREEN 1-4: DAC EASY ACCOUNTING            
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                               M A I N  M E N U

                       1. FILE UTILITIES
                       2. GENERAL LEDGER
                       3. ACCOUNTS RECEIVABLE
                       4. ACCOUNTS PAYABLE
                       5. PURCHASE ORDERS
                       6. BILLING
                       7. INVENTORY
                       8. REPORTS
                       9. FORECASTING
                      10. END PERIOD ROUTINES
                      11. FILE CREATION AND MAINTENANCE
                      99. EXIT TO DOS

                            ENTER YOUR SELECTION:
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to enter my selection from the menu by typing 
the corresponding number of the selection. Next, I want to select option 
number 1.

TYPE:  1
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  display another set of menu.



SCREEN 1-5: Display another set of menu
/-----------------------------------------------------------------------------\
                     FILE UTILITIES


                   1. FILE DEFINITIONS

                   2. FILE STATUS

                   3. FILE REHASH

                   4. FILE DRIVE CHANGE

                   5. PRINTER PARAMETERS

                   99. RETURN TO MAIN MENU


                     ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to enter a selection number for my next 
operation.  Next, I want to select option number 1 for file definitions.

TYPE:  1
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: issue a set of questions for me to answer.

Comments / Questions:

1.3. DEFINITION OF FILES
When working with the system for the first time it is necessary to define
the files to be used in the system.

1.3.1. ISSUANCE OF QUESTIONS
Issue a set of questions for me to answer

SCREEN 1-6: Issue a set of questions for me to answer
/-----------------------------------------------------------------------------\    
             FILE DEFINITIONS


         IN WHICH DRIVE WILL YOUR FILES BE DEFINED? :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " IN WHICH DRIVE WILL YOUR FILES BE 
DEFINED ?:". To me, it shows that the computer expects me to tell it in 
which drive I want to define my files. Next, I want to tell the system to 
define the files in drive B:.

TYPE:  B
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: ask me the following question, "ARE YOU SURE?"
(Y/N) :".
TYPE:  Y
PRESS:  [<-']  Enter/Return key

Comments / Questions:

1.4. ROUTINE FOR RESPONDING TO QUESTIONS
When working with this system, it is important to response to the questions 
by typing in the responses using CAPITAL LETTERS. The system will not 
response to lower case letters.

1.4.1. ACTUAL QUESTIONS

SCREEN 1-7: Ask me the following question, "ARE YOU SURE?"
/-----------------------------------------------------------------------------\
             FILE DEFINITIONS


           DESCRIPTION               # RECORDS
------------------------------------ ---------
ACCOUNTS FILE.......................

\-----------------------------------------------------------------------------/

Look at the screen, and find the "DESCRIPTION" and "# RECORDS". To me, 
it shows that the computer expects me to enter the number of records 
desired. Next, I want to start entering the number of records.

TYPE:  31
PRESS:  [<-']  Enter/Return key
TYPE:  Y
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  ask me to define for another set of file.

Comments / Questions:

1.5. AMOUNT OF RECORDS TO BE PROCESSED
The process will continue until all of the files has been defined. After
entering the desired number of records the system will ask me whether I am
sure or not. I had answered "Y" for the above file. To cancel type "N". 
I am not going to show how I enter the number of records for the rest of the
files here. Look at Appendix 1 for the numbers that I have used.

1.5.1. Remember that the records are being entered in blocks, so the number you
entered may be increased by the system.

1.5.1.1. CONFIRMING THE ENTRIES
When you have finished entering the system will ask you to confirm those
entries by typing either "YES" or "NO".  Following the word "YES" the
system will display "INITIALIZING....".  When the process is completed 
press the return key to go back to the FILE UTILITIES menu.

1.5.1.2. INITIALIZING THE SYSTEM
This is the most important part of the system. Once you have initialize
your systems you cannot initialize it again without having another system 
disk or deleting the " BASRUNB  EXE " from the system disk. It is advisable,
however to have a back up system disk.

SCREEN 1-8: Ask me to define for another set of file                        
/-----------------------------------------------------------------------------\
                      FILE UTILITIES


                   1. FILE DEFINITIONS

                   2. FILE STATUS

                   3. FILE REHASH

                   4. FILE DRIVE CHANGE

                   5. PRINTER PARAMETERS

                   99. RETURN TO MAIN MENU


                     ENTER YOUR SELECTION :
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :".  To me, it shows 
that the computer expects me to enter the number for the next operation I 
want to work on.  Next, I want to go back to the main menu.

TYPE:  99
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  take me back to the main menu.

Comments / Questions:

1.6. END OF INITIALIZATION PROCESS
This is the end of the system initialization process.

1.6.1. LEVELS OF SECURITY
Undisplayed in the main menu is item #98, the password option. It is not
displayed for security reasons. In this system there are five levels of
security. To enter or change the password select this option.

SCREEN 1-9: Take me back to the main menu
/-----------------------------------------------------------------------------\
DATE 04-27-86                                                       TIME 13:23
                         DAC EASY ACCOUNTING

                      FILE CREATION AND MAINTENANCE MENU

            GENERAL LEDGER                        ACCOUNTS PAYABLE
        1. CHART OF ACCOUNTS FILE             4. VENDOR FILE
        2. FINANCIAL STATEMENTS FILE
                                                      INVENTORY
            ACCOUNTS RECEIVABLE               5. PRODUCT FILE
        3. CUSTOMER FILE

                                COMPLETE SYSTEM

                            6. COMPANY'S IDENTIFICATION
                            7. G/L INTERFACE TABLE


                           99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION:

\-----------------------------------------------------------------------------/

Look at the screen, and find the " FILE CREATION AND MAINTENANCE MENU ".
To me, it shows that I have selected option #11 in the main menu and the
computer is now expecting me to work with this option. It is now asking me 
to select one of the available choices in this option to work with.  Next,
I want to select option #1 to create the file for the General Ledger.

TYPE:  1
PRESS:  [<-']  Enter/Return key

                        SCREEN 1-10: ACCOUNTS FILE MAINTENANCE
/-----------------------------------------------------------------------------\
                        ACCOUNTS FILE MAINTENANCE

                ACCOUNT NUMBER
                ACCOUNT NAME
                DB/CR ACCT.(1=DB/-1=CR)
                ACCOUNT LEVEL (1-5)
                TYPE (G=GENERAL/D=DETAIL)
                GENERAL ACCOUNT
                CLEAR TO ACCOUNT NUMBER
                PREVIOUS BALANCE
                THIS PERIOD
                CURRENT BALANCE

                HISTORICAL INFORMATION       BALANCE       VARIANCE     %
                YEAR BEFORE LAST
                LAST YEAR
                CURRENT YTD
                FORECAST AT END YEAR
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor blinking following the phrase
"ACCOUNT NUMBER". To me, it shows that the computer expects me to enter 
the code number for the account that I will be using in the system. Next, I 
want to enter code number plus all the required details.

TYPE:  1
PRESS:  [<-']  Enter/Return key
TYPE:  ASSETS
PRESS:  [<-']  Enter/Return key
TYPE:  1
PRESS:  [<-']  Enter/Return key
TYPE:  1
PRESS:  [<-']  Enter/Return key
TYPE:  G
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key until you are back to the position where the
cursor is blinking following the phrase "ACCOUNT NUMBER".
AND THE SYSTEM WILL: create an account according to the given specifications.

Comments / Questions:

1.7. RULE FOR PASSING ENTRIES
At any positions where you do not wish enter anything just press the enter key.

1.7.1. CREATING AN ACCOUNT

SCREEN 1-11: Create an account according to the given specifications
/-----------------------------------------------------------------------------\
DATE 04-28-86                                                       TIME 03:41
                             DAC EASY ACCOUNTING
             
                      FILE CREATION AND MAINTENANCE MENU

            GENERAL LEDGER                        ACCOUNTS PAYABLE
        1. CHART OF ACCOUNTS FILE             4. VENDOR FILE
        2. FINANCIAL STATEMENTS FILE
                                                      INVENTORY
           ACCOUNTS RECEIVABLE                5. PRODUCT FILE
        3. CUSTOMER FILE

                                COMPLETE SYSTEM

                            6. COMPANY'S IDENTIFICATION
                            7. G/L INTERFACE TABLE


                           99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION:

\-----------------------------------------------------------------------------/

Look at the screen, and find that the system has taken me back to the 
position where I have to enter the particulars of the accounts I will be 
using in the system. To me, it shows that the computer expects me to 
create another account for my system. However, at the moment I have all 
the accounts I need for my system. Next, I want to get out of this screen.

PRESS:  [Esc]  Escape key
AND THE SYSTEM WILL: take me back to the "FILE CREATION AND MAINTENANCE
MENU".

Comments / Questions:

1.8. ADDITION OF ACCOUNTS
Should you decide to have more accounts later you can always come back to
this menu and select option #1 to create the new account(s).

1.8.1. DELETION OF AN ACCOUNT
To delete an account, enter the account # and when the cursor is
positioned in the NAME field erase the name with BACK SPACE or CTRL BACK
SPACE. Replace the name with the word DELETE [ALL IN CAPITALS!!!] and pressing
the enter key.

SCREEN 1-12: Take me back to the "FILE CREATION AND MAINTENANCE"
/-----------------------------------------------------------------------------\
DATE 04-28-86                                                      TIME 03:50
                               DAC EASY ACCOUNTING

                      FILE CREATION AND MAINTENANCE MENU

            GENERAL LEDGER                        ACCOUNTS PAYABLE
        1. CHART OF ACCOUNTS FILE             4. VENDOR FILE
        2. FINANCIAL STATEMENTS FILE
                                                      INVENTORY
           ACCOUNTS RECEIVABLE                5. PRODUCT FILE
        3. CUSTOMER FILE

                                COMPLETE SYSTEM

                            6. COMPANY'S IDENTIFICATION
                            7. G/L INTERFACE TABLE


                           99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION:

\-----------------------------------------------------------------------------/

Look at the screen, and find the "3. CUSTOMER FILE". To me, it shows that 
I have to choose this option to create a customer file. Next, I want to 
create a customer file.

TYPE:  3
PRESS:  [<-']  Enter/Return key

                          SCREEN 1-13: CUSTOMER FILE MAINTENANCE
/-----------------------------------------------------------------------------\
                          CUSTOMER FILE MAINTENANCE
CUSTOMER CODE
         NAME                            SALES PERSON
      CONTACT                            CUSTOMER TYPE
      ADDRESS                            DISCOUNT %            DAYS
         CITY                 STATE      DUE DAYS
     ZIP CODE            (    )          ACCOUNT TYPE

  CREDIT LIMIT              BALANCE              CREDIT AVAILABLE

             LAST  SALES   DATE          LAST PAYMENT DATE
             FINANCIAL CHARGE %          SALES TAX RATE
                            STATISTICAL INFORMATION
              YR.BEF.LST LAST YEAR  THIS YEAR   FORECAST   VARIANCE    %
  # INVOICES
   $ SALES
   $ COST
   $ PROFIT
\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor is now blinking after the phrase
"CUSTOMER CODE". To me, it shows that the computer expects me to enter a 
customer code. Next, I want to enter a customer code.

TYPE:  01
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: display the available information for the customer with
the code # 01.

Comments / Questions:

1.9. THE CUSTOMER ACCOUNT NUMBER AND TYPE
If the number is a new number [i.e. now such customer exists] the system
will move the cursor to the next blank space until all the required details
have been fill in. For account type use either 1 or just press the return
key. Account Type 1 will keep all customer transaction until the End Month
Process is run. This is the balance forward method. By pressing the return 
key will set the customer to the Open Invoice method which will keeps each
invoices until its net balance is zero and the End Month Process is run.

SCREEN 1-14: Display the available information for the customer
/-----------------------------------------------------------------------------\
                      CUSTOMER FILE MAINTENANCE
CUSTOMER CODE 01
         NAME ARTHUR & CO.               SALES PERSON  JANE
      CONTACT MARY                       CUSTOMER TYPE 1
      ADDRESS 234 SANTONA STREET         DISCOUNT %     0.00   DAYS   0
         CITY MIAMI           STATE FL   DUE DAYS       30
     ZIP CODE 33146      (305 )661.7465  ACCOUNT TYPE  1

  CREDIT LIMIT   500000.00  BALANCE        0.00  CREDIT AVAILABLE   500000.00

             LAST  SALES   DATE       0  LAST PAYMENT DATE       0
             FINANCIAL CHARGE %  18.00   SALES TAX RATE      5.000
                            STATISTICAL INFORMATION
              YR.BEF.LST LAST YEAR  THIS YEAR   FORECAST   VARIANCE    %
  # INVOICES          0          0          0          0          0     0.0
   $ SALES            0          0          0          0          0     0.0
   $ COST             0          0          0          0          0     0.0
   $ PROFIT           0          0          0          0          0     0.0

\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor blinking after "ARTHUR & CO.". To 
me, it shows that I had previously filled in all the necessary particulars 
in the customer file for the the customer with the code # 01. The blinking
cursor indicates that the system is expecting me to edit these informations or
confirm them by pressing the return key. Should I want to make any changes, I
must first delete the original entry using the Back Space key and then
entering the new information. Next, I want to confirm these informations.

PRESS:  [<-'] Enter / Return key
AND THE SYSTEM WILL: confirm my entries.

Comments / Questions:

1.10. CONFIRMATION OF ENTRIES
Repeat the process until all the entries and/or corrections has been 
confirmed. 

1.10.1. RETURN TO EMPTY FILE
When all the informations has been confirmed the system will take you back to 
the empty customer file for you to fill in more.

1.10.1.1. DELETION OF A CUSTOMER
To delete a customer follow the same process as in the Account Creation
process. However the system will not allow the deletion of any accounts or
customer having balance amounts.

PRESS:  [Esc]  Escape key
AND THE SYSTEM WILL: take me back to the "FILE CREATION AND MAINTENANCE 
MENU".

TYPE:  4
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: take me into the "VENDOR FILE MAINTENANCE" module of
the system.

Comments / Questions:

1.11. PROCESS FOR ENTRIES IN VENDOR FILES
In the next few screens you can see that the process for entering and
working with the creation of vendor file is similar to the process in the
creation of customer files.


SCREEN 1-15: Take me back into the "VENDOR FILE MAINTENANCE" module 
/-----------------------------------------------------------------------------\
                           VENDOR FILE MAINTENANCE

  VENDOR CODE
         NAME                            TERRITORY
      CONTACT                            VENDOR   TYPE
      ADDRESS                            DISCOUNT %            DAYS
         CITY                 STATE      DUE DAYS
     ZIP CODE            (    )          ACCOUNT TYPE

  CREDIT LIMIT              BALANCE              CREDIT AVAILABLE

             LAST PURCHASE DATE          LAST PAYMENT DATE
                                         SALES TAX RATE
                            STATISTICAL INFORMATION
              YR.BEF.LST LAST YEAR  THIS YEAR   FORECAST   VARIANCE    %
  # INVOICES
  $ PURCHASE

\-----------------------------------------------------------------------------/

Look at the screen, and find the cursor blinking after the "VENDOR CODE".
To me, it shows that the computer expects me to enter a VENDOR CODE 
number. As in the Customer File previously, the system will a created file 
if the number I type in had previously been used to create a vendor file. If 
the code has not been used previously the system will display an empty file 
and will be ready to create another.  Next, I want to enter a code number.

TYPE:  01
PRESS:  [<-']  Enter/Return key

                            SCREEN 1-16: VENDOR FILE MAINTENANCE
/-----------------------------------------------------------------------------\
                            VENDOR FILE MAINTENANCE
  VENDOR CODE 01
         NAME RODRIGUEZ CO.              TERRITORY     1
      CONTACT JR                         VENDOR   TYPE 1
      ADDRESS 16 WEST 52ND STREET        DISCOUNT %     2.00   DAYS  10
         CITY MIAMI           STATE FL   DUE DAYS       30
     ZIP CODE 33135      (305 )666.6666  ACCOUNT TYPE  1

  CREDIT LIMIT  1000000.00  BALANCE        0.00  CREDIT AVAILABLE  1000000.00

             LAST PURCHASE DATE       0  LAST PAYMENT DATE       0
                                         SALES TAX RATE      0.000
                            STATISTICAL INFORMATION
              YR.BEF.LST LAST YEAR  THIS YEAR   FORECAST   VARIANCE    %
  # INVOICES          0          0          0          0          0     0.0
  $ PURCHASE          0          0          0          0          0     0.0

\-----------------------------------------------------------------------------/

Look at the screen, and find the system displaying the information about the
vendor and the cursor is positioned following the vendor's name. To me, it 
shows that I had previously created this vendor file using the above code. 
The system is presently waiting for me to confirm the information in this file 
or make some changes in it. If I do not want to do any thing to it I need to 
press the [Esc] key to return to the main menu. If this is a new file I have 
to type in the required information and pressing the enter key. Repeat this 
process entirely. Next, I want to return to the menu.

PRESS:  [Esc]  Escape key
AND THE SYSTEM WILL:  take me back to the menu.


Comments / Questions:

1.12. VENDOR ACCOUNT TYPE
The same process applies for Account Type in vendor files as in the
customer files.

1.12.1. DELETION OF A VENDOR
To delete a vendor, follow the same process as in the deletion of an
account and the same rules apply.

TYPE:  5
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: take me into the PRODUCT FILE CREATION module of the
system.

SCREEN 1-17: Take me into the PRODUCT FILE CREATION module of the system
/-----------------------------------------------------------------------------\
                          PRODUCT FILE MAINTENANCE

INVENTORY #                 DESCRIPTION
MEASURE                 FRACTION          TYPE     BIN       VENDOR
SALES PRICE             TAXABLE? (Y/N)             LAST SALE DATE
MINIMUM                  REORDER               LAST PURCHASE DATE
LST.PURCH.PRICE             STANDARD COST            AVERAGE COST

              ON HAND   UNITS             DOLLARS
              COMMITTED UNITS
              ON ORDER  UNITS

                            STATISTICAL INFORMATION
              YR.BEF.LST LAST YEAR  THIS YEAR   FORECAST   VARIANCE    %
UNITS PURCHSE
$ PURCHASES

UNITS SOLD
$ SALES
$ COST
$ PROFIT
TIMES TURN
GROSS RETURN
\-----------------------------------------------------------------------------/

Look at the screen, and find the system displaying an empty product file and
the cursor is positioned after "INVENTORY #". To me, it shows that the 
computer expects me to enter a code number for my inventory file. If the 
number has already exists, the system will display the available information 
in the file. If it is a new number the system will display an empty file and 
will expect me to create a Product file. Next, I want to enter a code 
number.

TYPE: 100
PRESS: [<-']  Enter/Return key

                          SCREEN 1-18: PRODUCT FILE MAINTENANCE
/-----------------------------------------------------------------------------\
                          PRODUCT FILE MAINTENANCE

INVENTORY # 100             DESCRIPTION GIZMOS
MEASURE     CASE        FRACTION   100    TYPE 2C  BIN 1     VENDOR RCO.
SALES PRICE     20.000  TAXABLE? (Y/N) Y           LAST SALE DATE       0
MINIMUM       5000       REORDER    2500       LAST PURCHASE DATE       0
LST.PURCH.PRICE      0.000  STANDARD COST      0.000 AVERAGE COST      0.000

              ON HAND   UNITS      0.000  DOLLARS       0.000
              COMMITTED UNITS      0.000
              ON ORDER  UNITS      0.000

                            STATISTICAL INFORMATION
              YR.BEF.LST LAST YEAR  THIS YEAR   FORECAST   VARIANCE    %
UNITS PURCHSE         0         0         0           0          0      0.0
$ PURCHASES           0         0         0           0          0      0.0

UNITS SOLD            0         0         0           0          0      0.0
$ SALES               0         0         0           0          0      0.0
$ COST                0         0         0           0          0      0.0
$ PROFIT              0         0         0           0          0      0.0
TIMES TURN          0.0       0.0       0.0         0.0        0.0      0.0
GROSS RETURN          0         0         0           0          0      0.0
\-----------------------------------------------------------------------------/

Look at the screen, and find the system displaying the contents of a product
file. To me, it shows that the computer expects me to edit this file. The 
same process and rules apply for this module as it apply for the previous 
modules. Next, I want to return to the menu.

PRESS:  [Esc]  Escape key
AND THE SYSTEM WILL:  return me to the menu.

Comments / Questions:

1.13. FIELD ENTRY INSTRUCTION
FIELD ENTRY INSTRUCTION:  Measure - for units of measure such as cases, gross, 
kilos. Fraction - breakdown for unit of measure [Example, hours would be 60 
and six-pack would be 6.]. Standard Cost - Enter up to 999999.999 digits if 
using standard method, if not press return.

TYPE:  6
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: take me into the COMPANY'S IDENTIFICATION routine.

SCREEN 1-19: Take me into the COMPANY'S IDENTIFICATION routine
/-----------------------------------------------------------------------------\
                 1234567890123456789012345678901234567890
         LINE 1  AZMI, FERUT & JUAN INC.
         LINE 2  1235 MARIPOSA AVENUE
         LINE 3  MIAMI, FL 33146-3247
         LINE 4  (305) 661 - 0708

\-----------------------------------------------------------------------------/

Look at the screen, and find the system displaying the COMPANY'S
IDENTIFICATION that I have previously created. To me, it shows that 
the computer expects me to work on this module and make some changes.  
Next, I want to return to the main menu.

PRESS:  [Esc]  Escape key
AND THE SYSTEM WILL: take me back to the menu.

Comments / Questions:

1.14. ROUTINE FOR PRINTING COMPANY NAME
This routine is a way of placing your company name on all the statements,
reports, etc. which will be generated by the system.

1.14.1. EDITING
Press return after every entry or to skip a line. Press BACK-SPACE or CTRL
BACK-SPACE to delete previous entry in a particular line and  re-enter.

TYPE:  7
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  take me into the General Ledger Interface Table.

SCREEN 1-20: Take me into the General Ledger Interface Table
/-----------------------------------------------------------------------------\
                             G/L INTERFACE TABLE

       BANK CHECKING         1121              COST OF GOODS SOLD   41
       ACCOUNTS RECEIVABLE   113               SALES                51
       INVENTORY             114               PURCHASE DISCOUNTS   524
       ACCOUNTS PAYABLE      211               FINANCE CHARGES      521
       PURCHASES TAX         42101             SALES TAX            2131

\-----------------------------------------------------------------------------/

Look at the screen, and find the "G/L INTERFACE TABLE" that I have created.
The G/L Interface table is the brains of the perfect integration within the
seven modules of the system. I this routine I assign the account numbers which
will allow the automatic transaction from the individual posting processes to
the General Ledger journal file. Before working on this module a complete
chart of accounts must first be created having at least the 10 accounts listed
in this routine. The system will not allow skipping of any account listed in
this routine. If you are not going to use one of the modules you will still
need to  create a " dummy " account in your charts of accounts and then enter
that account in this routine. All must be DETAIL accounts, otherwise rejected
by the routine. Next, I want to return to the menu.

PRESS:  [Esc]  Escape key

Comments / Questions:

1.15. COMPLETION OF G/L INTERFACE TABLE
When the G/L Interface table has been completed the system will display
another table for you to enter code, description and account # for purchase
orders and invoices.





```
{% endraw %}

## CHAP2.TXT

{% raw %}
```

2. GENERAL LEDGER MENU

                              SCREEN 2-1: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                              GENERAL LEDGER MENU

                       1. ENTER TRANSACTIONS
                       2. PRINT JOURNALS
                       3. PRINT ACCOUNT ACTIVITY DETAIL REPORT
                       4. POST TRANSACTIONS
                       5. PRINT TRIAL BALANCE
                       6. PRINT CHART OF ACCOUNTS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION:

\-----------------------------------------------------------------------------/

Look at the screen, and find the "GENERAL LEDGER MENU" and "ENTER YOUR
SELECTION". To me, it shows that the computer expects me to work on the
General Ledger module of the system and is currently waiting for me to enter
my selection. Next, I want to select option 1, ENTER TRANSACTION.

TYPE:  1
PRESS:  [<-']  Enter/Return key

SCREEN 2-2: G/L TRANSACTION ENTRY  JOURNAL CODE:     TRANSACTION #           DATE:
/-----------------------------------------------------------------------------\
G/L TRANSACTION ENTRY  JOURNAL CODE:     TRANSACTION #           DATE:

ACCT.#  ACCOUNT NAME        DESCRIPTION           DEBITS      CREDITS     REC.
------ -------------- ------------------------ ------------ ------------ -----
\-----------------------------------------------------------------------------/

Look at the screen, and find the system displaying an empty general ledger.
The cursor is currently positioned at the "JOURNAL CODE:" section of the
journal. To me, it shows that the computer expects me to enter a journal
code. Next, I want to enter a journal code.

TYPE:  GL
PRESS:  [<-']  Enter/Return key
TYPE:  01
PRESS:  [<-']  Enter/Return key

Comments / Questions:

2.1. TRANSACTION NUMBERS
01 which I had previously entered will be accepted by the system as the
TRANSACTION #.


SCREEN 2-3: G/L TRANSACTION ENTRY  JOURNAL CODE: GL  TRANSACTION #  01   DATE:   860205
/-----------------------------------------------------------------------------\
G/L TRANSACTION ENTRY  JOURNAL CODE: GL  TRANSACTION #  01   DATE:   860205
----- -------------- ------------------------ ------------ ------------ -----
1121   TEXAS AMERICAN PROCEED FRM SALE OF STK   5000000.00                  14
311    STOCK PAR VALU STOCK ISSUED                           5000000.00     15
1211   ORIGINAL VALUE TRANS. EQUIP. PURCHASED    100000.00                  16
1121   TEXAS AMERICAN TRANS. EQUIP. PURCHASED                 100000.00     17
1221   ORIGINAL VALUE OFFICE EQUIP. PURCHASED     50000.00                  18
1121   TEXAS AMERICAN OFFICE EQUIP. PURCHASED                  50000.00     19
1231   ORIGINAL VALUE BUILDING PURCHASED        1000000.00                  20
1121   TEXAS AMERICAN BUILDING PURCHASED                     1000000.00     21
124    LAND           LAND PURCHASED            1000000.00                  22
1121   TEXAS AMERICAN LAND PURCHASED                         1000000.00     23
111    PETTY CASH     TRANSFER FR TEXAS AMERIC     5000.00                  24
1121   TEXAS AMERICAN TRANSFER TO PETTY CASH                    5000.00     25

\-----------------------------------------------------------------------------/

Look at the screen, and find the system displaying the contents of of my
general journal. To me, it shows that the computer expects me either to 
make corrections or add transactions to the journal. To add transaction[s] 
I have to type in the account number of the transaction[s]. The system will 
automatically bring up the name of the account. Then I have to type in the 
description of the transactions, and the amount in either the debit or credit 
column. At the end of each entry or to skip a column I need to press the 
return key. The system will automatically bring up the next record number. I 
have to press the return key again after confirming that all the entries a 
correct. If there is any error I must delete the entry by pressing CTRL X. To 
end the process I have to type in the letter "T" and the system will take me 
to the next empty journal if there is no error. If error occurs the system 
will automatically inform me by displaying "9999" in the account # column and 
"VOUCHER DIFFERENCE" in the description column and the error amount either in 
the debit or credit column as the case may be. To cancel an incorrect entry,
enter the letter "C" in the account # column. The cursor will automatically 
move to the REC # column. Enter the record # for the transaction to be deleted.
Next, I want to end the enter transaction process.

TYPE:  T
PRESS:  [<-']  Enter/Return key
PRESS:  [Esc]  Escape key
TYPE:  2
PRESS:  [<-']  Enter/Return key

                          SCREEN 2-4: PRINT G/L JOURNALS
/-----------------------------------------------------------------------------\
                          PRINT G/L JOURNALS


                           JOURNAL CODE FROM:
                                          TO:

                           INITIAL PAGE :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " PRINT G/L JOURNALS". To me, it shows 
that the series of commands that I had previously entered has taken me back 
to the menu and into this module. The system is currently waiting for me to 
enter the top range for printing. [See the explanation below.]  Next, I want 
to issue to the system the upper range.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  move the cursor to the initial page section.

Comments / Questions:

2.2. PRINTING REPORTS
In all reports you have the choice to print one, a range, or all of the items
you have selected. To print all, press return key in the FROM: field and the
cursor will nor stop at the TO: field. Enter the ranges accordingly if you
wish to do otherwise.

TYPE:  1
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  print the transactions in the journal.

Comments / Questions:

2.3. POSTED VERSUS UNPOSTED TRANSACTIONS
The system will also tell, in the print out, whether those transactions
have been posted or not, the total amount transacted and the # of accounts
printed.

2.3.1. SUSPENDING THE PRINTER
To pause printing, press CTRL X and the system will as whether or not to
continue printing.

TYPE:  3
PRESS:  [<-']  Enter/Return key

SCREEN 2-5: Print the transactions in the journal
/-----------------------------------------------------------------------------\
                          PRINT ACCOUNT ACTIVITY
                               DETAIL REPORT


                           PRINT ACCOUNT # FROM:
                                             TO:

                           PRINT PAGE BY PAGE ?:


                           INITIAL PAGE NUMBER:
\-----------------------------------------------------------------------------/

Look at the screen, and find the system has taken me into the "PRINT ACCOUNT
ACTIVITY DETAIL REPORT" module of the system. To me, it shows that the 
computer expects me to print the account activity detail report. Next, I 
want to print the report.

PRESS:  [<-']  Enter/Return key
TYPE:  Y
PRESS:  [<-']  Enter/Return key
TYPE:  1
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  print the report and take me back to the menu.

Comments / Questions:

2.4. ACCOUNT ACTIVITY DETAIL REPORT
The purpose of the account activity detail report is to detail each account's
beginning balance, detail of all the month's transactions, and the current
balance. This report will help you in your checking reconciliations, audits,
expense analysis, etc.

TYPE:  4
PRESS:  [<-']  Enter/Return key

SCREEN 2-6: Print the report
/-----------------------------------------------------------------------------\
                           POST TRANSACTIONS TO G/L

                  WARNING: BEFORE YOU RUN THIS ROUTINE BE SURE
                           YOU HAVE FILES BACKUP TO PREVENT
                           ANY POWER OR HARDWARE FAILURE.

                           DO YOU WANT TO CONTINUE ? (Y/N)

                           MONTH TO BE POSTED ? (1-12)

\-----------------------------------------------------------------------------/

Look at the screen, and find that the system has taken me into the "POST
TRANSACTION TO G/L" module. Also take note of the warning given by the
system. To me, it shows that the computer expects me to the system is 
expecting to post the transactions to the general ledger. Next, I want to 
begin posting.

TYPE: Y
PRESS:  [<-']  Enter/Return key
TYPE: 5
PRESS:  [<-']  Enter/Return key
TYPE:  Y
PRESS:  [<-']  Enter/Return key
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: post the transactions into the general ledger.

Comments / Questions:

2.5. POSTING TRANSACTIONS
For options 5 & 6 follow the procedures in options 2 & 3.

2.6. GENERAL LEDGER PROCESSING COMPLETION
This is the end of the General Ledger module.























































```
{% endraw %}

## CHAP3.TXT

{% raw %}
```

3. CUSTOMER'S BILLING & PAYMENTS WITH DAC EASY

                              SCREEN 3-1: DAC EASY ACCOUNTING                  
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                               M A I N  M E N U

                       1. FILE UTILITIES
                       2. GENERAL LEDGER
                       3. ACCOUNTS RECEIVABLE
                       4. ACCOUNTS PAYABLE
                       5. PURCHASE ORDERS
                       6. BILLING
                       7. INVENTORY
                       8. REPORTS
                       9. FORECASTING
                      10. END PERIOD ROUTINES
                      11. FILE CREATION AND MAINTENANCE
                      99. EXIT TO DOS

                            ENTER YOUR SELECTION:
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the system is expecting me to enter my selection from the main menu.
Next, I want to tell the system that I want to go into Accounts Receivable
routines.

TYPE:  3
PRESS:  [<-']
AND THE SYSTEM WILL: load the routine for me.

SCREEN 3-2: Load the routine for me
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                          ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                   5. ENTER INVOICES AND
        TRANSACTIONS                                 TRANSACTIONS
     2. GENERATE FINANCE CHARGES                  6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                             7. PRINT CHECKS
     4. POST                                      8. PRINT JOURNALS
                                                  9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " ENTER YOUR SELECTION :". To me, it 
shows that I have to make another selection from the accounts receivable 
menu to work with. Next, I want to start working with option no.1, ie. 
enter cash receipts and transactions.

TYPE:  1
PRESS:  [<-']
AND THE SYSTEM WILL: load process no. 1 for me.

Comments / Questions:

3.1. ACCOUNTS RECEIVABLE DAILY ROUTINES
The accounts receivable daily routines is divided into 4 operations. It is 
important that you follow the sequence of the operation to ensure a smooth 
flow of the program.

3.1.1. BILLING SYSTEM TRANSACTIONS
Many of the transactions which affect the balance of the customers will 
be done thru the BILLING system, this routine will enter directly 
customer 
payments, charges to the customer not relative to inventory items, and
miscellaneous debits and credits.

SCREEN 3-3: Load process No. 1 for me
/-----------------------------------------------------------------------------\
                   ACCOUNTS RECEIVABLE TRANSACTION #             (I=Invoice)
CUSTOMER CODE          NAME                                 CODE (K=Check  ):
INVOICE No.            TRANSACTION DATE                          (D=Debit  )
REF./CHECK No.                 DUE DATE                          (C=Credit )
                          DISCOUNT DATE
                            D I S T R I B U T I O N
       ACCOUNT #      ACCOUNT NAME         DEBITS       CREDITS      REC.
       ---------  --------------------  ------------  ------------  -----

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ACCOUNTS RECEIVABLE TRANSACTION #".
To me, it shows that the system is asking me to enter the transaction #. 
If I am working  on a new accounts receivable, I only need to press the 
return key and the system will automatically assigned the next available 
number. Next, I want to enter a new accounts receivable.

PRESS:  [<-']
AND THE SYSTEM WILL:  Automatically assigned a new available number.

Comments / Questions:

3.2. TRANSACTION POSSIBILITIES
The only time you would enter a transaction number is for an inquiry,
cancel or modification. In this case, the system will ask "DO YOU WANT TO
EDIT?( Y/N)". If you want to modify a previously entered cash receipts and
transaction, enter Y. If you enter N,the system will ask "DO YOU WANT TO
CANCEL? (Y/N)". If you enter Y the entire cash receipts and transaction will 
be canceled. If you enter N, the screen will clear and the cursor will be
positioned for another purchase order.


SCREEN 3-4: Automatically assigned a new available number    
/-----------------------------------------------------------------------------\
                       DAC EASY ACCOUNTING                  

CUSTOMER CODE          NAME                                 CODE (K=Check  ):
INVOICE No.            TRANSACTION DATE                          (D=Debit  )
REF./CHECK No.                 DUE DATE                          (C=Credit )
                          DISCOUNT DATE
                            D I S T R I B U T I O N
       ACCOUNT #      ACCOUNT NAME         DEBITS       CREDITS      REC.
       ---------  --------------------  ------------  ------------  -----
\-----------------------------------------------------------------------------/

Look at the screen, and find the "CUSTOMER CODE".  To me, it shows that 
the system is asking me for the customer code.

TYPE:  01
PRESS:  [<-']
AND THE SYSTEM WILL: Bring up the name of the existing customer found in 
the customer file.

Comments / Questions:

3.3. APPROPRIATE COMMAND (CODE) SELECTION
You have to fill in the information in the appropriate field when ask by 
the system. For code, Enter I if you have an invoice which did not go 
through BILLING system .K when a customer makes payment. Use D or C when 
there are miscellaneous debits or credits to the customer account. For 
example the "hot check" charge will be a debit.

3.3.1. EXECUTION OF ENTRIES
After every entry, you have to press return key to execute it. Information
such as due date and discount date will be automatically displayed since 
we have entered that information in the customer file. 

3.3.1.1. MAIN MENU DISPLAY
After entering all the information we have to strike [Esc] key to 
finish off with the routine and the system will bring up the main menu.

SCREEN 3-5: Bring up the name of the existing customer
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                          ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                   5. ENTER INVOICES AND
        TRANSACTIONS                                 TRANSACTIONS
     2. GENERATE FINANCE CHARGES                  6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                             7. PRINT CHECKS
     4. POST                                      8. PRINT JOURNALS
                                                  9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " ENTER YOUR SELECTION".  To me, it 
shows that in order for me to go into the next operation of the accounts 
receivable routine, I have to specify my choice by entering my selection 
number from the menu. Next, I want to select operation no. 2, ie. 
generate finance charges.

TYPE:  2
PRESS:  [<-']
AND THE SYSTEM WILL:  load this operation for me.

Comments / Questions:

3.4. GENERATE FINANCE CHARGES
In this routine you will be able to generate all finance charges you 
set up in the customer file.

SCREEN 3-6: Load this operation for me
/-----------------------------------------------------------------------------\

                          GENERATE FINANCE CHARGES


                  WARNING: BEFORE YOU RUN THIS ROUTINE BE SURE
                           YOU HAVE FILES BACKUP, ENTERED ALL INVOICES
                           TRANSACTIONS AND POST THEM.

                           DID YOU RUN THIS ROUTINE EARLIER
                           IN THE CURRENT MONTH ? (Y/N)
\-----------------------------------------------------------------------------/

Look at the screen, and find the "DID YOU RUN THIS ROUTINE EARLIER IN 
THE CURRENT MONTH? (Y/N)". To me, it shows that the system wants to 
know whether we had run this routine earlier in the current month. Next, 
I want to tell the system that I had not run it earlier in the current 
month.

TYPE: N
PRESS:  [<-']
AND THE SYSTEM WILL: Come up with a message "DO YOU WANT TO RUN IT NOW?
(Y/N)".

Comments / Questions:

3.5. PROCESS TO GENERATE FINANCE CHARGES
To begin the process to generate finance charges, I need to answer Y to 
the above question and the system will response by stating that it is now
processing the operation.

3.5.1. ROUTINE FOR POSTING
It is important that you post this only one time each month. Enter all the
cash receipts and post all transactions in the billing and receivable 
systems before running this routine. You may cancel any customers finance 
charge automatically created by this routine by entering the transaction 
number and answer Y to the question to cancel it in routine 3.1.ie enter 
receipts and transaction.

SCREEN 3-7: Come up with a message
/-----------------------------------------------------------------------------\
DATE 05-04-86                                                      TIME 02:02
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                          ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                   5. ENTER INVOICES AND
        TRANSACTIONS                                 TRANSACTIONS
     2. GENERATE FINANCE CHARGES                  6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                             7. PRINT CHECKS
     4. POST                                      8. PRINT JOURNALS
                                                  9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that I have to make a selection from the menu to proceed with accounts 
receivable routines. Next, I want to print journal.

TYPE:  3
PRESS:  [<-']
AND THE SYSTEM WILL:  proceed with my option.

Comments / Questions:

3.6. PRINTING A JOURNAL
It is important that you print a journal which allows you to verify that
the data entry is correct before you post the transactions. His report 
will also serve as the primary audit trail in the receivable system.

SCREEN 3-8: Proceed with my option
/-----------------------------------------------------------------------------\
                   DO YOU WANT TO PRINT JOURNAL NOW? (Y/N)

\-----------------------------------------------------------------------------/

Look at the screen, and find the " DO YOU WANT TO PRINT JOURNAL NOW?
(Y/N)". To me, it shows that the system wants to know whether we are 
ready to print the journal now. Next, I want to tell the system that 
I want to print the journal now.

TYPE: Y
PRESS:  [<-']
AND THE SYSTEM WILL:  print the journal


SCREEN 3-9: Print the journal
/-----------------------------------------------------------------------------\
DATE 05-04-86                                                  TIME 02:14
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                          ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                   5. ENTER INVOICES AND
        TRANSACTIONS                                 TRANSACTIONS
     2. GENERATE FINANCE CHARGES                  6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                             7. PRINT CHECKS
     4. POST                                      8. PRINT JOURNALS
                                                  9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :". To me, it shows 
that I have to specify my choice by entering the next operation # in order 
to proceed. Next, I want to finish off the accounts receivable routines 
by posting the transaction.

TYPE:  4
PRESS:  [<-']
AND THE SYSTEM WILL:  come up with the last operation.

Comments / Questions:

3.7. PURPOSES FOR THE POSTING PROCESS
This posting process will update the balance of the customers, create the
open invoice, and prepare the summary transactions for the general ledger
journal file.


SCREEN 3-10: Come up with the last operation
/-----------------------------------------------------------------------------\
                           POST A/R TRANSACTIONS

                  WARNING: BEFORE YOU RUN THIS ROUTINE BE SURE
                           YOU HAVE PRINTED THE JOURNAL AND
                           FILES BACKUP TO PREVENT ANY POWER OR
                           HARDWARE FAILURE.

                           DO YOU WANT TO CONTINUE? (Y/N):

\-----------------------------------------------------------------------------/

Look at the screen, and find the "DO YOU WANT TO CONTINUE? (Y?N):"
To me, it shows that the system is asking me whether I want to continue
posting. Next, I want to tell the system that I want to continue, since 
I have printed the journal and have my files back up.

TYPE:  Y
PRESS:  [<-']
AND THE SYSTEM WILL:  continue with the posting.

SCREEN 3-11: Continue with the posting
/-----------------------------------------------------------------------------\
                           POST A/R TRANSACTIONS

                  WARNING: BEFORE YOU RUN THIS ROUTINE BE SURE
                           YOU HAVE PRINTED THE JOURNAL AND
                           FILES BACKUP TO PREVENT ANY POWER OR
                           HARDWARE FAILURE.

                           DO YOU WANT TO CONTINUE? (Y/N): Y


BE SURE PRINTER IS ON-LINE AND PRESS <RET> TO BEGIN

\-----------------------------------------------------------------------------/

Look at the screen, and find the "BE SURE PRINTER IS ON LINE AND PRESS
<RET> TO BEGIN". To me, it shows that the system is asking me to align 
the paper and to press return key when I am ready, to begin the posting.
Next, I want to do posting.

PRESS:  [<-']
AND THE SYSTEM WILL: start this routine.





























```
{% endraw %}

## CHAP4.TXT

{% raw %}
```

4. GETTING STARTED WITH DAC EASY

                            SCREEN 4-1: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                            DAC EASY ACCOUNTING
                             
                             M A I N  M E N U

                       1. FILE UTILITIES
                       2. GENERAL LEDGER
                       3. ACCOUNTS RECEIVABLE
                       4. ACCOUNTS PAYABLE
                       5. PURCHASE ORDERS
                       6. BILLING
                       7. INVENTORY
                       8. REPORTS
                       9. FORECASTING
                      10. END PERIOD ROUTINES
                      11. FILE CREATION AND MAINTENANCE
                      99. EXIT TO DOS

                            ENTER YOUR SELECTION:
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to select an option from the numbered choices.  
This is the main menu or the screen from which we enter and proceed through 
the program. We will always return to this screen to proceed to another 
option. Next, I want to select option 4, which is "ACCOUNTS PAYABLE".

TYPE:  4
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with the "ACCOUNTS PAYABLE" menu.


SCREEN 4-2: Return with the "ACCOUNTS PAYABLE" menu             
/-----------------------------------------------------------------------------\
                               DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                          ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                 5. ENTER INVOICES AND
        TRANSACTIONS                               TRANSACTIONS
     2. GENERATE FINANCE CHARGES                6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                           7. PRINT CHECKS
     4. POST                                    8. PRINT JOURNALS
                                                9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to choose an option from the accounts payable 
options which are numbered five through nine. It also shows that we entered 
the "ACCOUNTS PAYABLE" menu. Notice that the "ACCOUNTS RECEIVABLE" options 
also appear on this screen. Next, I want to choose option number 5, "ENTER 
INVOICES AND TRANSACTIONS".

TYPE:  5
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with the "ENTER INVOICES AND TRANSACTIONS" 
option.
   
Comments / Questions:

4.1. ROUTINE USED FOR PAYMENTS
This routine is used for payments which do not go through the "PRINT 
CHECKS ROUTINE", any liability we need to pay such as advertising, 
expense reimbursements, rent payments, and miscellaneous debits and 
credits to vendors, this routine will also be used to set up an existing 
company.

4.1.1. MAIN ENTRIES TO ACCOUNTS PAYABLE
The main entries to accounts payable are done through the purchase order 
routine and has been explained previously. This routine is truly a minor 
one.

4.1.1.1. ROUTINE TO SET UP AN EXISTING COMPANY
If this routine is used to set up an existing company, account 9998, "NOT 
REGISTERED ACCOUNT" may be required.  Here balances would be entered to 
offset the accounts payable credit for an existing company.

4.1.1.2. NO WAY TO ENTER BEGINNING BALANCES
This is one part of this system which I do not like.  There is no way to 
enter beginning balances,and setting up an existing company is a lengthy 
task.  Also the appearance of the 9998 account on the trial balance and 
the financial statements does not give a good impression.

SCREEN 4-3: Return with "ENTER INVOICES AND TRANSACTIONS"
/-----------------------------------------------------------------------------\
                   ACCOUNTS  PAYABLE   TRANSACTION #       (I=Invoice)
VENDOR   CODE          NAME                           CODE (K=Check  ):
INVOICE No.            TRANSACTION DATE                    (D=Debit  )
REF./CHECK No.                 DUE DATE                    (C=Credit )
                          DISCOUNT DATE        DISCOUNT AVAILABLE
                          D I S T R I B U T I O N
     ACCOUNT #      ACCOUNT NAME         DEBITS       CREDITS      REC.
     ---------  --------------------  ------------  ------------  -----
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ACCOUNTS PAYABLE TRANSACTION #". To 
me, it shows that the computer expects me to enter a transaction number.
This is done automatically by pressing the return. Since this is our first 
transaction for this vendor the program will return with the number 1.
Next, I want to press the return to have the number entered automatically.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Return with the transaction number and allow us to 
proceed to the vendor code.


Comments/Questions

4.2. TIME TO ENTER A TRANSACTION NUMBER
The only time we will enter a transaction number is for an inquiry, a 
cancellation, or modification. When the number is entered, the information 
previously recorded for that account number will be displayed. (See 
audtrl on routine 5.1 for further details).
   
4.2.1. ADDRESS AND PAYMENT TERMS, VENDOR INFORMATION
This routine follows basically the same procedure outlined previously.  
Inventory should have been set up in routine 11.5, and the vendor 
should have been set up in routine 11.4. After the vendor code, the vendor's 
name, address and payment terms will appear, editing or canceling follows the 
same procedure outlined previously.

4.2.1.1. ENTER ACCOUNTS PAYABLE
Notice the "CODE" and the letter choices following. The "I" refers  to 
invoices that are not merchandise.  This is how we would enter accounts 
payable such as advertising.  The "K" refers to any payment on these 
transactions not made by the "ENTER CHECKS TO PRINT" option, which is 
option 4.6."D" and "C" are confusing, since they can also be for vendor 
transactions, however in actual use they cannot be, because if we try to 
debit or credit inventory through this routine, the program will not 
allow us to. Debits or credits to inventory can only be made through the 
purchase order routines, and are made automatically by the system.

SCREEN 4-4: Return with the transaction number
/-----------------------------------------------------------------------------\
                   ACCOUNTS  PAYABLE   TRANSACTION # 0001  (I=Invoice)

VENDOR   CODE 01       NAME RODRIGUEZ CO.             CODE (K=Check  ):  
INVOICE No.            TRANSACTION DATE 04/01/86           (D=Debit  )
REF./CHECK No.                 DUE DATE 05/01/86           (C=Credit )
                          DISCOUNT DATE 04/11/86 DISCOUNT AVAILABLE  0.0      
                          D I S T R I B U T I O N
     ACCOUNT #      ACCOUNT NAME         DEBITS       CREDITS      REC.
     ---------  --------------------  ------------  ------------  -----
\-----------------------------------------------------------------------------/

Look at the screen, and find the " TRANSACTION # 0001". To me, it shows 
that the computer has entered the transaction number automatically.  
Notice the "VENDOR CODE", which has already been typed in, when we type in 
the vendor code number the vendor's name, address and payment terms will 
appear automatically, if the vendor file exists, if not the code number  
will be rejected. (This should have been done using routine 11.4).
Next, I want to complete the transaction by typing in the remaining 
information.

TYPE: (type in the remaining information item by item)
PRESS: [<-']  Enter/Return key (after each item)
AND THE SYSTEM WILL:  Return with the completed transaction.                

Comments / Questions:

4.3. VENDOR IDENTIFIED BY THE CODE NUMBER
The system will return with a previously entered vendor identified by 
the vendor code number, and if found, the program will return with the 
vendor name.  Notice that after "NAME", "RODRIGUEZ CO." has appeared.
Also notice that information relating to the transaction date, discount  
date and payment due date have appeared automatically. This is how I 
know that the vendor is on file. Notice also that the date is 4-30-86.
This is the date that I typed in at the DOS prompt. It is always important 
to key in the correct date at the DOS prompt, and not press the return 
because this is the date that the program will read, and if the default is
used the program will read the default date of DOS, which will certainly  
cause problems since the program calculates the discount available and 
whether the invoice is overdue automatically using the typed in date.

SCREEN 4-5: Return with the completed transactions
/-----------------------------------------------------------------------------\
                       ACCOUNTS  PAYABLE        TRANSACTION # 0001  (I=Invoice)

VENDOR   CODE 01       NAME RODRIGUEZ CO.             CODE (K=Check  ):K
INVOICE No.91749       TRANSACTION DATE 04/01/86           (D=Debit  )
REF./CHECK No. 10000           DUE DATE 05/01/86           (C=Credit )
                          DISCOUNT DATE 04/11/86 DISCOUNT AVAILABLE  0.0      
                          D I S T R I B U T I O N
     ACCOUNT #      ACCOUNT NAME         DEBITS       CREDITS      REC.
     ---------  --------------------  ------------  ------------  -----
       211      ACCOUNTS PAYABLE         24000.00                   1  
       112      CASH IN BANK                           24000.00     2
        T

\-----------------------------------------------------------------------------/

Look at the screen, and find the "T". To me, it shows that the 
transaction has been completed, and that this is what we enter when we 
wish to tell the program the entry is complete. Next, I want to 
return to the "ACCOUNTS PAYABLE" menu.
 
PRESS:[<-']  Enter/Return key,then [Esc] Escape key
AND THE SYSTEM WILL: End the transaction, and return to the "ACCOUNTS 
PAYABLE" menu.

Comments / Questions:

4.4. ACCOUNTS PAYABLE
Press return to end the screen, then escape to return to  the "ACCOUNTS 
PAYABLE" MENU.

4.4.1. DEBIT OR CREDIT ACCOUNTS PAYABLE
Notice the "ACCOUNT # 211", this is one of the ways we can debit or 
credit accounts payable. The other ways would be through other parts of 
this routine 4.2, and also through the "PURCHASE ORDER" routine, which  
i s option 5. We cannot make journal entries to accounts payable through 
the GL. Accounts payable is one of the GL Interface accounts which has  
it's own routine, the others are inventory and accounts receivable.

4.4.1.1. SAMPLE ENTRY
This is a sample entry only for demonstration purposes, since the payment  
will be entered in the "ENTER CHECKS TO PRINT" routine. It was canceled  
by using "C". When we use "C", we type in "C" where the "T" is, and enter 
the "REC." number of the transaction we wish to cancel in the right most  
column. If we enter the record number of the "ACCOUNTS PAYABLE" transaction,
the system will ask "DO YOU WISH TO CANCEL COMPLETELY (Y/N)?", answer "Y"  
and the operation will be canceled. This method is used if the user makes 
a mistake entering the journal entry and then keys the journal entry in again.

SCREEN 4-6: End the transaction
/-----------------------------------------------------------------------------\         
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                          ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                 5. ENTER INVOICES AND
        TRANSACTIONS                               TRANSACTIONS
     2. GENERATE FINANCE CHARGES                6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                           7. PRINT CHECKS
     4. POST                                    8. PRINT JOURNALS
                                                9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION". To me, it shows 
that the computer expects me to enter a selection. Next, I want to 
choose option number 6, "ENTER CHECKS TO PRINT".

TYPE:  6 
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Return with the "ENTER CHECKS TO PRINT" option.

Comments / Questions:

4.5. MAIN ROUTINE OF ACCOUNTS PAYABLE
This is the main routine of accounts payable. Through here accounts 
payable is debited and cash is credited. This system is not logically 
organized and routine titles are misleading as to their importance.

SCREEN 4-7: Return with the "ENTER CHECKS TO PRINT" option
/-----------------------------------------------------------------------------\
                      TRANSACTION #.......

                      VENDOR CODE.........
                      VENDOR NAME.........

                      INVOICE TO PAY......
                      INVOICE BALANCE.....
                      DISC. AVAILABLE.....

                      NET TO PAY..........

                      DISCOUNT TAKEN......
                      AMOUNT CHECK........

                      BALANCE AFTER CHECK.
\-----------------------------------------------------------------------------/

Look at the screen, and find the "TRANSACTION #...". To me, it shows that
the computer expects me to enter a transaction number, if I wish to cancel 
a previously issued check, or to press return to have the number appear 
automatically. Next, I want to proceed to answer the remaining questions 
to be able to print a check.

TYPE: (answer each question individually)
PRESS:   [<-']  Enter/Return key

Comments / Questions:

4.6. CANCELLATION PROCEDURES
To cancel, follow the previously described cancellation procedures.

4.6.1. VENDOR CODE
Notice the "VENDOR CODE", if we enter the vendor code and it has not 
been previously defined in routine 11.4, it will be rejected. If it has 
been previously defined the vendor name will be displayed automatically.
We will enter the invoice we want to pay, if it is not found the next 
three rows will be "0". If it is found, the invoice balance will appear.  
"DISC.  AVAILABLE" is then displayed automatically. "NET TO PAY" AND "DISC. 
TAKEN" must then be entered by the user. Balance after the check is then 
calculated by the computer.  

4.6.1.1. UNAUTHORIZED USER PASSWORD
This is another weakness in the program, if an unauthorized user the password 
a check can still be printed because even if no invoice is found the system 
will print a check.  There will be a record of the transaction because it will 
be recorded in the accounts payable and the vendor file, but still a measure 
of protection will be to not allow a check to be printed if the invoice is not 
found.

                      SCREEN 4-8: ACCOUNTS PAYABLE CHECKS TO PRINT
/-----------------------------------------------------------------------------\
                      ACCOUNTS PAYABLE CHECKS TO PRINT

                      TRANSACTION #.......0001
                      VENDOR CODE.........01
                      VENDOR NAME.........RODRIGUEZ CO.

                      INVOICE TO PAY......91749
                      INVOICE BALANCE.....       24000.00
                      DISC. AVAILABLE.....           0.00

                      NET TO PAY..........       24000.00

                      DISCOUNT TAKEN......           0.00
                      AMOUNT CHECK........       24000.00

                      BALANCE AFTER CHECK.       24000.00

                        IS THE DATA CORRECT ?  (Y/N)  :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "IS THE DATA CORRECT? (Y/N):".  To me, 
it shows that the computer expects me to verify that the data we entered 
is correct. Next, I want to verify the data by typing "Y" and return to  
the "ACCOUNTS PAYABLE" menu.

TYPE:  Y
PRESS:    [<-']  Enter/Return key       

Comments / Questions:

4.7. VENDOR NAME APPEARS AUTOMATICALLY
Notice the information has been completed. As mentioned before the vendor 
name appears automatically after typing in the vendor code. After typing in 
the invoice number the next three rows appear automatically. We typed in the 
the "DISC. TAKEN" and the "AMOUNT CHECK", and the rest was done automatically.

                              SCREEN 4-9: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                        ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                5. ENTER INVOICES AND
        TRANSACTIONS                              TRANSACTIONS
     2. GENERATE FINANCE CHARGES               6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                          7. PRINT CHECKS
     4. POST                                   8. PRINT JOURNALS
                                               9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION :  

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :". To me, it shows 
that the computer expects me to choose an option. Next, I want to choose 
option 7, "PRINT CHECKS".

TYPE:  7
PRESS:  [<-']  Enter/Return key

Comments / Questions:

4.8. CONTROLS THE PRINTING OF ALL THE CHECKS
Before this routine is possible we must first do routine 4.5 and 4.6. This 
routine controls the printing of all the checks. The system will always void  
the first check by printing out void. This is a necessary process for the 
printer alignment.

                      SCREEN 4-10: ACCOUNTS PAYABLE PRINT CHECKS
/-----------------------------------------------------------------------------\
                      ACCOUNTS PAYABLE PRINT CHECKS

                   THIS ROUTINE WILL PRINT CHECKS FOR
                   INVOICES ENTERED IN ROUTINE # 6

                   ARE ALL THE INVOICES TO BE PAID ENTERED? <Y/N> :  

                   ENTER FIRST CHECK #                    
                   ENTER AMOUNT AVAILABLE        
                   MAXIMUM INVOICES BY CHECK (1-10)       
                   DATE ON CHECKS (YYMMDD)         
                   CHECKING ACCOUNT #:                      

\-----------------------------------------------------------------------------/

Look at the screen, and find the " ARE ALL THE INVOICES TO BE PAID ENTERED? 
<Y/N> : ". To me, it shows that the computer expects me to answer "Y" or 
"N". Next, I want to answer "Y".

TYPE: Y
PRESS:   [<-']  Enter/Return key      
  
Comments / Questions:

4.9. PROCESS ACCOUNTS TRANSACTIONS
We must answer "Y' to proceed with the routine. This routine will only process
transactions that went through routine 4.6, but, routine 4.6 also requires 
routine 4.5.  All payments must go through routine 4.6, whether related to a 
vendor, advertising or any other payment.

                  SCREEN 4-11: ACCOUNTS PAYABLE PRINT CHECKS
/-----------------------------------------------------------------------------\
                  ACCOUNTS PAYABLE PRINT CHECKS

                   THIS ROUTINE WILL PRINT CHECKS FOR
                   INVOICES ENTERED IN ROUTINE # 6

                   ARE ALL THE INVOICES TO BE PAID ENTERED ? <Y/N> : Y

                   ENTER FIRST CHECK #              000001  
                   ENTER AMOUNT AVAILABLE        100000.00
                   MAXIMUM INVOICES BY CHECK (1-10)      1
                   DATE ON CHECKS (YYMMDD)          860430
                   CHECKING ACCOUNT #: 112     CASH IN BANK
                   PLACE CONTINUOUS FORMS IN THE PRINTER
                   AND PRESS <RETURN> WHEN READY

                   ARE THE CHECKS ALIGNED ? <Y/N> :Y

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ARE THE CHECKS ALIGNED? <Y/N> :". To 
me, it shows that the remainder of the questions have been answered, the 
checks are in the printer, and the computer is asking if the checks have 
been aligned. Next, I want to verify that the checks are aligned by 
typing "Y", so that I may print the checks.

TYPE: Y
PRESS:  [<-']  Enter/Return key

Comments / Questions:

4.10. PRINTING CHECKS
We must enter the number of the first check, which will be voided due to  
the printer alignment process. We must then enter the amount we wish
to disburse at this time. The "MAXIMUM INVOICES BY CHECK" indicates the 
number of invoices we are paying. This is another printing checks feature, 
some vendors have numerous small invoices and credits which are part of the 
payment and this is an unnecessary feature. We enter the date in the 
year-month-day format, if we press return the system will default with the  
date we enter at the DOS prompt. The system then requests that we place the 
check forms in the printer and press return when we are ready to print the 
alignment marks XXXX. The computer will then ask if the alignment marks are 
aligned properly. The alignment marks must be printed over the perforation 
line between the checks and the check stub.

                      SCREEN 4-12: ACCOUNTS PAYABLE PRINT CHECKS  
/-----------------------------------------------------------------------------\
                      ACCOUNTS PAYABLE PRINT CHECKS

                   THIS ROUTINE WILL PRINT CHECKS FOR
                   INVOICES ENTERED IN ROUTINE # 6

                   ARE ALL THE INVOICES TO BE PAID ENTERED ? <Y/N> : Y

                   ENTER FIRST CHECK #              000001
                   ENTER AMOUNT AVAILABLE        100000.00
                   MAXIMUM INVOICES BY CHECK (1-10)      1
                   DATE ON CHECKS (YYMMDD)          860430
                   CHECKING ACCOUNT #: 112     CASH IN BANK
                   PLACE CONTINUOUS FORMS IN THE PRINTER
                   AND PRESS <RETURN> WHEN READY

                   ARE THE CHECKS ALIGNED ? <Y/N> :Y

                   PROCESS FINISHED !!

                     TOTAL CHECK PRINTED         2
                     TOTAL DOLLAR PAID    24000.00

                   PRESS <RET> TO ESC

\-----------------------------------------------------------------------------/

Look at the screen, and find the "PROCESS FINISHED !!". To me, it shows 
that the computer expects me to verify the the checks printed by visual 
inspection. Next, I want to return to the "ACCOUNTS PAYABLE" menu.

PRESS:[<-']  Enter/Return key

Comments / Questions:

4.11. FORMAT OF CHECKS
After the system has finished printing the checks the system will display  
the total checks printed and the amount disbursed. Notice the "2", this is  
because the first check was voided due to the printer alignment requirements,
the second is the actual check. Notice the "TOTAL DOLLAR   PAID", this is the 
total amount paid out. Canceling this transaction follows the same procedure 
as outlined previously, except that you would physically void the check that 
was printed out.
On the following page is a facsimile of the way the check would print out.
The format of the actual check is not screen visible.

SCREEN 4-13: "XXXXX"
/-----------------------------------------------------------------------------\
"XXXXX" 
                            VOID - VOID
                               000001

  04/30/86

    000002
                                      04/30/86      **** 24000.00
                                                
RODRIGUEZ CO. 
16 W. 52ND STREET
MIAMI                      FL    33135

\-----------------------------------------------------------------------------/

Comments / Questions:

4.12. CONTENTS OF CHECKS
Notice the "XXXXX" in the upper left hand corner, these are the 
alignment marks. Notice the "VOID - VOID" and the number below them.
This is the first check which was voided for alignment purposes. Notice  
the line with the "91749" and the "24000.00" following it. This would be  
the invoice number, the gross amount, (the 00.0 is the discount, since 
none was taken it is 0), and the "24000.00" again is the net amount to pay.
Notice the date and the check number which is 2, since the first one was 
voided. The upper portion is the informational part of the check and is 
not the actual check. The actual check begins with the check number, below 
that is the date and the net amount to pay, and in the lower left is the 
vendor's name and address.




                              SCREEN 4-14: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                        ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                5. ENTER INVOICES AND
        TRANSACTIONS                              TRANSACTIONS
     2. GENERATE FINANCE CHARGES               6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                          7. PRINT CHECKS
     4. POST                                   8. PRINT JOURNALS
                                               9. POST

                             99. RETURN TO MAIN MENU

                             ENTER YOUR SELECTION : 

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION".  To me, it shows 
that the computer expects me to choose an option.  Next, I want to 
select option 8, "PRINT JOURNALS". 

TYPE:  8
PRESS:  [<-']  Enter/Return key

Comments / Questions:

4.13. THREE DIFFERENT JOURNALS PRINTED
In this menu three different journals may be printed, "INVOICES/TRANSACTIONS",
"CHECKS TO PRINT", and "CHECKS PRINTED".
They all follow the same procedure. These must be printed sequentially before 
posting or the system will not post.

                           SCREEN 4-15: ACCOUNTS PAYABLE JOURNALS
/-----------------------------------------------------------------------------\
                           ACCOUNTS PAYABLE JOURNALS

                              JOURNAL TO PRINT

                           1. INVOICES/TRANSACTIONS
                           2. CHECKS TO PRINT
                           3. CHECKS PRINTED

                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " ENTER YOUR SELECTION". To me, it shows 
that the computer expects me to choose an option. Next, I want to 
choose option 1, "INVOICES/TRANSACTIONS". 

TYPE:  1
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with the "INVOICES/TRANSACTIONS" option.

Comments / Questions:

4.14. INVOICES/TRANSACTIONS IS ACCOUNTS PAYABLE JOURNAL 
This is another example of how this can be misleading, "INVOICES/TRANSACTIONS" 
is actually the Accounts Payable Journal.

SCREEN 4-16: Return with the "INVOICES/TRANSACTIONS" option
/-----------------------------------------------------------------------------\
                           ACCOUNTS PAYABLE JOURNALS

                              JOURNAL TO PRINT

                           1. INVOICES/TRANSACTIONS
                           2. CHECKS TO PRINT
                           3. CHECKS PRINTED

                            ENTER YOUR SELECTION : 1  


                   Processing...


press <CTRL>+<X> to pause printing
\-----------------------------------------------------------------------------/

Look at the screen, and find the "Processing...". To me, it shows that 
the computer is processing the transactions. Next, I want to examine 
the facsimile print outs when the program finishes printing and return to  
the "ACCOUNTS PAYABLE" menu.

PRESS:  [<-']  Enter/Return key

Comments / Questions:

4.15. SCREEN FACSIMILES FOR EVALUATION PURPOSES
The same screen message is given while the program is printing out.
The same screen messages and procedures are followed for all three selections.
"CHECKS TO PRINT" must be printed before the actual checks are printed.
The format of the print outs are not visible to the user on the screen. The  
following are facsimiles for evaluation purposes. The actual print outs are 
printed out in condensed print.                   

                          SCREEN 4-17: JUAN, BOMB & FERUT INC.
/-----------------------------------------------------------------------------\ 
                          JUAN, BOMB & FERUT INC.
DATE: 04-30-86                                                 PAGE :  1
TIME: 02:34
                          ACCOUNTS PAYABLE JOURNAL

TRAN VENDOR                         REF.# DUE  DISC DISC   C ACC
 No   CODE  VENDOR NAME INV.# DATE CHECK# DATE DATE AVAIL. D G/L Dr  Cr
---- ------ ----------- ----- ---- ------ ---- ---- ------ - --- --- ---



                                   TOTALS : #  TRANSACTIONS   

                              GRAND TOTAL : #  TRANSACTIONS 

\-----------------------------------------------------------------------------/

Comments / Questions:

4.16. DATE AND TIME
Notice the date and time, these are the dates we typed in at the DOS prompt  
when we booted up the system . (As  explained in a previous audtrl).

4.16.1. HEADINGS: TRANSACTION NUMBER, VENDOR CODE, NAME, INVOICE NUMBER AND DATE 
Notice the headings, they begin with the transaction number, then comes the 
vendor code, then the vendor name, then the invoice number, then the date, 
(in the year, month, day format), then the reference number or check number,
then the due date and the discount date, then the discount available, then 
whether the transaction was a debit or a credit, then what account number  
was debited or credited, and the amount that was debited or credited.

4.16.1.1. NUMBER OF TRANSACTIONS 
Finally, the total number of transactions appears ,with the amounts that 
were posted to them. 
The "CHECKS TO PRINT" and "CHECKS PRINTED JOURNAL" follow the same formats,
except that the check journals are organized according to the relevant  
information that they require such as the  check number, the discount taken 
and the net amount paid.

                              SCREEN 4-18: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

       ACCOUNTS RECEIVABLE                        ACCOUNTS PAYABLE

     1. ENTER CASH RECEIPTS AND                5. ENTER INVOICES AND
        TRANSACTIONS                              TRANSACTIONS
     2. GENERATE FINANCE CHARGES               6. ENTER CHECKS TO PRINT
     3. PRINT JOURNAL                          7. PRINT CHECKS
     4. POST                                   8. PRINT JOURNALS
                                               9. POST

                             99. RETURN TO MAIN MENU


                        ENTER YOUR SELECTION : 

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION". To me, it shows 
that the computer expects me to choose an option. Next, I want to 
choose option 9, which is "POST". 

TYPE:  9 
PRESS:  [<-']  Enter/Return key

Comments / Questions:

4.17. FACSIMILE PRINT-OUTS
We are returning to this screen from screen 16, the preceding were facsimile 
print-outs for demonstration purposes.  
   
4.17.1. POSTING PROCESS AND CHECKS TO PRINT
The posting process follows the same procedures outlined previously, the  
print routines must be printed out in sequence, with the exception of  
"CHECKS TO PRINT" which must be printed out before the "PRINT CHECKS" routine.

                           SCREEN 4-19: POST A/P TRANSACTIONS  
/-----------------------------------------------------------------------------\ 
                           POST A/P TRANSACTIONS

                  WARNING: BEFORE YOU RUN THIS ROUTINE BE SURE
                           YOU HAVE PRINTED JOURNALS AND CHECKS AND
                           FILES BACKUP TO PREVENT ANY POWER OR
                           HARDWARE FAILURE.

                           DO YOU WANT TO CONTINUE ? (Y/N): Y


BE SURE PRINTER IS ON-LINE AND PRESS <RET> TO BEGIN

                  POSTING          
\-----------------------------------------------------------------------------/

Look at the screen, and find the " DO YOU WANT TO CONTINUE? (Y/N): Y".
To me, it shows that the computer expects me to answer with a "Y" to 
continue, after having printed the checks and journals, and having made 
the necessary backup files.  Next, I want to return to the "ACCOUNTS  
PAYABLE" menu, after the posting process is completed.

PRESS:  [<-']  Enter/Return key

Comments / Questions:

4.18. WARNING MESSAGE AND BACKUP FILES
Notice the warning message, as mentioned previously routines must be printed  
and backup files must be made before posting. If the printing routines are  
not done, the system will not post the information.

4.18.1. ACCOUNTS PAYABLE
We will press the return and return to the "ACCOUNTS  PAYABLE" menu when the 
posting process is complete, (the program will give the user a screen 
message), from the "ACCOUNTS PAYABLE" menu we will type 99 and strike the 
return to return to the "MAIN MENU".






```
{% endraw %}

## CHAP5.TXT

{% raw %}
```

5. GETTING STARTED WITH DAC EASY PURCHASE ORDER TRANSACTIONS

                             SCREEN 5-1: DAC EASY ACCOUNTING 
/-----------------------------------------------------------------------------\
                             DAC EASY ACCOUNTING                    

                               M A I N  M E N U


                       1. FILE UTILITIES
                       2. GENERAL LEDGER
                       3. ACCOUNTS RECEIVABLE
                       4. ACCOUNTS PAYABLE
                       5. PURCHASE ORDERS
                       6. BILLING
                       7. INVENTORY
                       8. REPORTS
                       9. FORECASTING
                      10. END PERIOD ROUTINES
                      11. FILE CREATION AND MAINTENANCE
                      99. EXIT TO DOS
                            ENTER YOUR SELECTION:
\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to choose an option. This is the main menu 
or the screen from which we enter, exit and proceed through the program. We 
will always return to this screen to proceed to another option. Next, I want 
to choose option number 5, "PURCHASE ORDERS".

TYPE:  5
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with the purchase order menu.         

Comments / Questions: 

5.1. PURCHASE ORDERS OPERATION
Although not apparent at first glance, "PURCHASE  ORDERS" is an important  
operation. This operation controls accounts payable and inventory through  
the "ENTER MERCHANDISE RECEIVED" operation. This may not seem so important 
but remember, inventory and accounts payable cannot be keyed in directly 
through the GL transaction file as they are part of the GL/Interface files 
and are controlled exclusively through their own program routines.

5.1.1. GL PROGRAM FEATURE TROUBLESOME AT TIMES
I find that the GL Interface program feature is troublesome at times. 
Although the program feature is designed to control the important functions  
of inventory, accounts receivable and accounts payable and not allow  
unbalanced journal entries to unrelated accounts, it may become troublesome  
when there are errors requiring adjusting entries. When adjusting entries 
are required they cannot simply be entered and posted through the GL, they 
must be entered trough their individual programs, and if the correcting 
journal entries are not to accounts within the program, posting sometimes  
results in errors due to program quirks. There should be some type of feature 
allowing adjusting entries to these accounts to be entered directly through 
the GL.

SCREEN 5-2: Return with the purchase order menu
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                              PURCHASE ORDER MENU

                       1. ENTER PURCHASE ORDERS
                       2. ENTER MERCHANDISE RECEIVED
                       3. ENTER RETURNS
                       4. PRINT PURCHASE ORDERS
                       5. PRINT MERCHANDISE RECEIVED
                       6. PRINT RETURNS
                       7. PRINT PURCHASE JOURNAL
                       8. POST PROCESS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "PURCHASE ORDER MENU". To me, it shows 
that the purchase order options are, and that we have entered the purchase 
order menu. Next, I want to choose option number 1, "ENTER PURCHASE 
ORDERS".

TYPE:  1
PRESS:  [<-']  Enter/Return key

Comments / Questions:

5.2. ROUTINE FOR ENTERING PURCHASE ORDERS
You will be able to enter purchase orders through this routine. You can also 
prepare purchase orders for non-inventory items.         

5.2.1. PURCHASE ORDER PROGRAM CONTROL
The purchase order program will control all merchandise purchased with the 
first three routines. Vendors must have been set up previously in routine 
11.4 "SET UP VENDOR FILE" and inventory must have been set up in routine 
11.5 "SET UP PRODUCT FILE" or the system will not accept the information.
                                 
                              SCREEN 5-3: PURCHASE ORDER # 
/-----------------------------------------------------------------------------\
                              PURCHASE ORDER #
  VENDOR CODE                                  REMARKS
         NAME
      ADDRESS
         CITY
VIA                 FOB             DISC.DAYS     DISC.%    DUE DAYS
YOUR REFERENCE #                                  OUR REFERENCE #
========================================================================      
INVENTORY #  DESC.                  ORDERED     PRICE   DISC.  EXTENDED
=======================================================================       



========================================================================        
SUB-TOTAL    SALES TAX      TOTAL    ADV.REF.  ADVANCE $      NET TO PAY
\-----------------------------------------------------------------------------/

Look at the screen, and find the "PURCHASE ORDER #". To me, it shows that 
the computer expects me to either enter a number to edit an existing 
purchase order or strike the return to have the next available number entered 
automatically. Next, I want to have the number entered automatically by 
striking the return. Since this is our first purchase order the number 1  
will be entered automatically if the purchase order starting number is set
in routine 7.11 (see comment 1 below for further details).

PRESS:  [<-']  Enter/Return key
   
Comments / Questions:

5.3. PURCHASE ORDER #
Notice the screen heading "PURCHASE ORDER #". The number will be entered 
automatically by striking return. The only time you would enter a purchase  
order number is if you wished to cancel or edit a previously entered purchase 
order. To edit a purchase order you need to enter the number of the purchase 
order that you wish to edit. After entering the number and pressing the return 
you will receive a message "DO YOU WANT TO  EDIT(Y/N)?", answer Y, in 
capitals, and proceed to make the desired changes, to cancel, answer N, in 
capitals, and the program will return with "DO YOU WANT TO CANCEL?(Y/N)",
answer Y, and the purchase order will be canceled. The  starting number is 
set by adding one to the last purchase order issued, which is entered in 
routine 7.11. If this is not done the default is one. This is useful feature 
for an established company, since our example is a new company we will press 
the return and use the default of one.

                              SCREEN 5-4: PURCHASE ORDER # 00001  
/-----------------------------------------------------------------------------\

                              PURCHASE ORDER # 00001
  VENDOR CODE 01                                             REMARKS
         NAME RODRIGUEZ CO.                                            
      ADDRESS 16 W.52ND STREET                                       
         CITY MIAMI           FL  33135
VIA                  FOB          DISC.DAYS 10 DISC.%  2.00 DUE DAYS  30
YOUR REFERENCE #                               OUR REFERENCE #      
========================================================================        
INVENTORY #  DESC.          ORDERED              PRICE   DISC.  EXTENDED
========================================================================       






========================================================================      
SUB-TOTAL    SALES TAX      TOTAL    ADV.REF.  ADVANCE $      NET TO PAY
\-----------------------------------------------------------------------------/

Look at the screen, and find the "00001" after the "PURCHASE ORDER #".
To me, it shows that the purchase order number was automatically entered 
by the program. Notice the "VENDOR CODE", when we type in the vendor's 
number the vendor's name, address, and payment terms will be entered 
automatically if the vendor file exists, if not the code number will be 
rejected. Next, I  want to complete the purchase order by typing in the  
remaining information.

TYPE:  (Type  in the remaining information,and strike the  return  after 
each entry)
PRESS:  [<-']  Enter/Return key

Comments / Questions:
 
5.4. VENDOR'S INFORMATION
After striking the return after the "PURCHASE ORDER #", type in the vendor 
code and strike the return again. The program will return with the vendor's  
name, address, and payment terms. It is necessary that the vendor's name be 
in the file, to do this you should have previously coded in the vendor in 
option 11.4.

5.4.1. NEXT ITEM IS REMARKS
The next item we will type in is "REMARKS", if we have any. We are allowed 
three lines and each line can have as many as 25 alphanumeric characters.

5.4.1.1. SHIPPING INFORMATION LINE
Next, there is the shipping information line. In "SHIP VIA" you can enter  
up to 10 alphanumeric characters for the desired  method of shipment. In 
"FOB" you can enter up to 10 alphanumeric characters for the city where the 
freight originates.

5.4.1.2. DISC. DAYS, DISC %, AND DUE DAYS
The "DISC. DAYS, DISC.%, and DUE DAYS" information is automatically 
entered form the data set up in the accounts in the vendor files. These 
fields may be edited if the terms of are different from those in the 
vendor file, if you do not wish to edit simply strike the return.

                          SCREEN 5-5: PURCHASE ORDER # 00001
/-----------------------------------------------------------------------------\ 
                          PURCHASE ORDER # 00001

  VENDOR CODE 01                                                   REMARKS
         NAME RODRIGUEZ CO.                           LAST SHIPMENT DID
      ADDRESS 16 W.52ND STREET                        ARRIVE ON TIME.
         CITY MIAMI           FL  33135
VIA THEIR TRUCK     FOB MIAMI     DISC.DAYS 10 DISC.%  2.00 DUE DAYS  30
YOUR REFERENCE #                               OUR REFERENCE # 00001
========================================================================        
INVENTORY #  DESC.          ORDERED              PRICE   DISC.  EXTENDED
========================================================================       
100          GIZMOS
                             2500.000            10.000  0.00  25000.000
T




========================================================================      
SUB-TOTAL    SALES TAX      TOTAL    ADV.REF.  ADVANCE $      NET TO PAY
25000.00         0.00     25000.00                 0.00         25000.00



\-----------------------------------------------------------------------------/

Look at the screen, and find the "25000.00" under the "NET TO PAY". To me,
it shows that the amount to pay has been calculated automatically, and the 
purchase order has been completed. Next, I want to return to the purchase 
order menu, to do so, I will press return to end the screen, then press escape 
to return to the purchase order menu.
        
PRESS:  [<-']  Enter/Return key,then  [Esc]  Escape key
                              
Comments / Questions:

5.5. INVENTORY NUMBER
After the information was entered as described in the preceding screens, the  
next information that must be entered is the inventory number, which must  
be on file also, (it must have been keyed in using routine 11.5). After the 
inventory number has been entered the product name and price will be listed.
(The price can be edited if different from the price in the product file).
You may enter comments by entering 0 instead of an inventory number and type 
in the special comments. You can also enter up to 20 special codes created in 
the GL Interface Table in routine 11.7.  The codes can be numbered 1-20,
according to routine 11.7, and can be for special charges such as freight,
insurance and similar items. To enter these items type the word "CODE", all 
in capitals, in the "INVENTORY #" field, press return and enter the desired  
code. If the code has not been created previously, it will be rejected. Once  
the amount ordered is entered the remaining operations are calculated auto-
matically by the program. To end the entries in the inventory field type 
in a capital "T". If an advance payment is required, it is entered by 
the user under "ADVANCE", and the remaining calculations are made by the 
program.

                              SCREEN 5-6: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                              PURCHASE ORDER MENU

                       1. ENTER PURCHASE ORDERS
                       2. ENTER MERCHANDISE RECEIVED
                       3. ENTER RETURNS
                       4. PRINT PURCHASE ORDERS
                       5. PRINT MERCHANDISE RECEIVED
                       6. PRINT RETURNS
                       7. PRINT PURCHASE JOURNAL
                       8. POST PROCESS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :". To me, it 
shows that the computer expects me to choose an option. Next, I want 
to choose the "ENTER MERCHANDISE RECEIVED" option, which is option 2.

TYPE:  2
PRESS:   [<-']  Enter/Return key

Comments / Questions:

5.6. ROUTINE FOR RECEIVING MERCHANDISE ORDERED
This routine is used for receiving merchandise ordered in the purchase order 
routine, 5.1, and it can also be used to record merchandise received that was 
not ordered through the purchase order system. This is the way an existing 
company would record it's inventory. 

5.6.1. ENTER MERCHANDISE RECEIVED
The "ENTER MERCHANDISE RECEIVED" option is one of the most important routines 
in the program. When merchandise is received the amount received less returns
(explained in screen 9 to 11) is debited to inventory and credited to accounts 
payable. This is the main routine for both of these GL Interface transactions.
These amounts cannot be entered directly in the GL as the program only allows 
journal entries through their own special routines. 

          SCREEN 5-7: MERCHANDISE RECEIVED FROM PURCHASE ORDER #
/-----------------------------------------------------------------------------\ 
          MERCHANDISE RECEIVED FROM PURCHASE ORDER #
  
VENDOR CODE                               REMARKS
         NAME
      ADDRESS
         CITY
VIA               FOB             DISC.DAYS    DISC.%       DUE DAYS
YOUR REFERENCE #                               OUR REFERENCE #
========================================================================       
INVENTORY #  DESC.  ORDERED RECEIVED  BACK-ORD.  PRICE   DISC.  EXTENDED
========================================================================      







========================================================================      
SUB-TOTAL    SALES TAX      TOTAL    ADV.REF.  ADVANCE $      NET TO PAY

\-----------------------------------------------------------------------------/

Look at the screen, and find the "MERCHANDISE RECEIVED FROM PURCHASE 
ORDER #". To me, it shows that the computer expects me to enter the 
purchase order number from which we received the merchandise. Next, 
I want to tell the computer that we received merchandise from purchase 
order #1, and complete the rest of the routine.     

TYPE: 1
PRESS:  [<-']  Enter/Return key

Comments / Questions:

5.7. PURCHASE ORDER NUMBER WE RECEIVED MERCHANDISE FROM
The routine follows the same procedures outlined previously except that  
we enter the purchase order number that we received merchandise from. If  
the purchase order is not on file it will be rejected. If we press return  
the system will automatically assign a purchase order number.  We would do 
this to enter the inventory for an established company.

5.7.1. ENTER THE VENDOR CODE
The next step is to enter the vendor code and the system will respond 
with the vendor's name, address, and discount information. This follows 
the same procedures as the purchase orders.
After entering the related information, the next step is to enter inventory,
inventory #, etc. Again if the inventory is not in the system the program 
will reject it.

               SCREEN 5-8: MERCHANDISE RECEIVED FROM PURCHASE ORDER # 00001
/-----------------------------------------------------------------------------\
               MERCHANDISE RECEIVED FROM PURCHASE ORDER # 00001
  VENDOR CODE 01                            REMARKS
         NAME RODRIGUEZ CO.                           LAST SHIPMENT DID
      ADDRESS 16 W.52ND STREET                        ARRIVE ON TIME.
         CITY MIAMI           FL  33135
VIA THEIR TRUCK     FOB MIAMI     DISC.DAYS 10 DISC.%  2.00 DUE DAYS  30
YOUR REFERENCE # 91749P                        OUR REFERENCE # 1000
========================================================================       
INVENTORY #  DESC.  ORDERED RECEIVED  BACK-ORD.  PRICE   DISC.  EXTENDED
========================================================================         
100          GIZMOS
                    2500.000 2500.000  00.000    10.000  0.00   25000.00





========================================================================        
SUB-TOTAL    SALES TAX      TOTAL    ADV.REF.  ADVANCE $      NET TO PAY
 25000.00         0.00   25000.00                 0.00          25000.00


\-----------------------------------------------------------------------------/

Look at the screen, and find the "NET TO PAY". To me, it shows that 
the operation has been completed and the program has automatically 
calculated the amount. Next, I want to return to the purchase order menu, 
to do so, I will press return to end the screen, then press escape to return 
to the purchase order menu.
                
PRESS:   [<-']  Enter/Return key,then  [Esc]  Escape key                        
 
Comments / Questions: 
 
5.8. DEBIT INVENTORY AND CREDIT ACCOUNTS PAYABLE
This is a very important process because through this operation the 
related entries to inventory and to accounts payable are made. When this 
process is completed and posted the system will debit inventory and credit 
accounts payable.


                             SCREEN 5-9: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\                              DAC EASY ACCOUNTING
                             DAC EASY ACCOUNTING

                             PURCHASE ORDER MENU

                       1. ENTER PURCHASE ORDERS
                       2. ENTER MERCHANDISE RECEIVED
                       3. ENTER RETURNS
                       4. PRINT PURCHASE ORDERS
                       5. PRINT MERCHANDISE RECEIVED
                       6. PRINT RETURNS
                       7. PRINT PURCHASE JOURNAL
                       8. POST PROCESS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION :


\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :". To me, it 
shows that the computer expects me to choose an option. Next, I want to 
choose "ENTER RETURNS", which is option 3.

TYPE:  3
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with the "ENTER RETURNS" routine.

Comments / Questions:

5.9. RETURN MERCHANDISE NOT WISH TO KEEP
This routine is used to return merchandise that we do not wish to keep, such  
as damaged merchandise, goods sent by mistake, or goods which are sent with 
the wrong price.

5.9.1. AFFECTS ACCOUNTS PAYABLE
This is an important process, because this is one of the operations from  
where inventory  reads its reductions, and also affects accounts payable.

SCREEN 5-10: Return with the "ENTER RETURNS" routine
/-----------------------------------------------------------------------------\
                            PURCHASE RETURN #

  VENDOR CODE                               REMARKS
         NAME
      ADDRESS
         CITY
VIA                 FOB           DISC.DAYS    DISC.%       DUE DAYS
YOUR REFERENCE #                               OUR REFERENCE #
========================================================================      
INVENTORY #  DESC.                  RETURNED     PRICE   DISC.  EXTENDED
========================================================================      



========================================================================       
  SUB-TOTAL    SALES TAX      TOTAL
\-----------------------------------------------------------------------------/

Look at the screen, and find the "PURCHASE RETURN #". To me, it shows 
that the computer expects me to enter a number or strike return for the 
next available number. Next, I want to complete the rest of the purchase 
return.

TYPE:  (Type in the remaining information, and strike the return after each 
entry)                                          
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Enter the next available purchase return number.

Comments / Questions:

5.10. MERCHANDISE TO DEDUCT FROM INVENTORY
The operation of this routine is the same as the one outlined previously.
We will strike the return for the next available purchase return number,
or type in the number of the purchase return that we wish to edit or cancel. 
The merchandise is entered in the same manner, however the program will 
read it as merchandise to deduct from inventory and also reduce the accounts 
payable.

5.10.1. NO ADVANCES AND REF.
Notice also that there is no "ADVANCES" and "REF.", these items, as mentioned 
previously, relate to advance payments, since these are returns, there are no 
advance payments.
Using the same procedure for these operations makes this part of the program 
easy to learn.

SCREEN 5-11: Enter the next available purchase return number 
/-----------------------------------------------------------------------------\
                               PURCHASE RETURN # 00001
  
          VENDOR CODE 01                            REMARKS
         NAME RODRIGUEZ CO.                         CARTONS ARRIVED OPEN
      ADDRESS 16 W.52ND STREET                      AND BROKEN.
         CITY MIAMI           FL  33135
VIA                 FOB MIAMI     DISC.DAYS  0 DISC.%  0.00 DUE DAYS  30
YOUR REFERENCE #                               OUR REFERENCE # 1000
========================================================================      
INVENTORY #  DESC.          RETURNED             PRICE   DISC.  EXTENDED
========================================================================      
100          GIZMOS
                                    100.000      10.000  0.00   1000.00
T




========================================================================      
  SUB-TOTAL    SALES TAX      TOTAL
     1000.00         0.00      1000.00



\-----------------------------------------------------------------------------/

Look at the screen, and find the "TOTAL". To me, it shows that the 
computer has automatically calculated the amount, and the routine is 
completed. Next, I want to return to the purchase order menu.

PRESS:   [<-']  Enter/Return key,then  [Esc]  Escape key                        

Comments / Questions:

5.11. BLANK PURCHASE ORDER
We will press return and another blank purchase order screen will appear, 
then we will press escape to return to the purchase order menu.

5.11.1. CONTROL FEATURE
Only being able to use these routines to enter inventory and accounts 
payable is a control feature, but, in the case of an adjusting entry we 
would have to use these routines to make the entry. This I find to be 
troublesome, there is no way to enter adjusting entries through the 
GL. Adjustments must be entered through this routine which is time 
consuming as compared to making a simple adjusting entry.

                               SCREEN 5-12: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                               DAC EASY ACCOUNTING
                               
                               PURCHASE ORDER MENU

                       1. ENTER PURCHASE ORDERS
                       2. ENTER MERCHANDISE RECEIVED
                       3. ENTER RETURNS
                       4. PRINT PURCHASE ORDERS
                       5. PRINT MERCHANDISE RECEIVED
                       6. PRINT RETURNS
                       7. PRINT PURCHASE JOURNAL
                       8. POST PROCESS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the " ENTER YOUR SELECTION :".  To me, it 
shows that the computer expects me to choose an option. Next, I want  
to do routines 4, 5, 6 and 7 which are " PRINT PURCHASE ORDERS, PRINT 
MERCHANDISE RECEIVED, PRINT RETURNS, and PRINT PURCHASE JOURNAL", 
respectively.  I will print these individually since each has their own 
separate routine, although the print routines are basically the same.

TYPE:  5
PRESS:[<-']  Enter/Return key
AND THE SYSTEM WILL: Return with option 5, "PRINT MERCHANDISE RECEIVED".

Comments / Questions:  

5.12. POST PROCESS
I will go through one routine, 5. 5, as all print routines are similar.  
Routines  5.4., 5.5, 5.6, and 5.7 must all be done before routine 5.8,
"POST PROCESS", or the system will not accept the post information.

SCREEN 5-13: Return with option 5
/-----------------------------------------------------------------------------\
                        PRINT MERCHANDISE RECEIVED


                        DO YOU WANT TO REPRINT? (Y/N):
                        NUMBERS FROM :            TO :
                        PRE-PRINTED FORMS ?  <Y/N>   :
                        DATE TO BE PRINTED? (YYMMDD) :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "DO YOU WANT TO REPRINT? (Y/N) :". 
To me, it shows that the computer is asking me several questions that I 
must answer before I can print. To answer the questions I can answer 
them individually by typing in a response or I can strike the return for 
each question and the computer will read the default values. Next, I want 
to enter the default values by striking the return.

PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Return with the default values.

Comments / Questions:

5.13. PRINT MORE THAN ONCE   
The first question refers to whether I want to print more than once. By 
striking the return the program will read the default of no. The second  
question refers to which purchase orders I wish to print, if I only wished 
to print certain numbers. The default is all of the purchase orders. The  
third question refers to whether we are using preprinted forms, the program 
gives us two choices, we can print on seven inch forms or on eleven inch 
forms, we will answer  either "7" or "11". The default is eleven inches.
The fourth question refers to the date to be printed, notice the format 
YYMMDD, this refers to year-month-day. If no date is specified it will 
print the default date which is the date that the user typed in at the 
original DOS prompt when the computer was booted. This is why it is 
important to enter the date properly and not strike the return at the date 
prompt, which will give the default date of DOS.
These same questions are followed for the other options, 5.4, 5.5, and 
5.7.

SCREEN 5-14: Return with the default values
/-----------------------------------------------------------------------------\
                        PRINT MERCHANDISE RECEIVED

                        DO YOU WANT TO REPRINT? (Y/N):
                        NUMBERS FROM :            TO :
                        PRE-PRINTED FORMS ?  <Y/N>   :
                        DATE TO BE PRINTED? (YYMMDD) : 860401

                        Processing...
PRESS <CTRL>+<X> TO PAUSE PRINTING
\-----------------------------------------------------------------------------/

Look at the screen, and find the "Processing...". To me, it shows that 
the computer is processing the information and this is also the message 
that appears when it is printing. Notice also the message on how to pause 
printing, and the default values assigned particularly the date which is the 
date that was typed in at the DOS prompt. Next, I want to return to the 
purchase order menu, after printing out the forms and examining them.

PRESS:  [Esc]  Escape key       
AND THE SYSTEM WILL: Return to the purchase order menu.  

Comments / Questions:

5.14. SAMPLE FORMS
Follow the same procedure for each routine 5.4, 5.5, 5.7.
On the following pages are sample forms.  Purchase orders print out in 
the same format as they appear in the program. These following examples 
are facsimiles of the way the real ones print out since they print out 
on condensed print and are too large to be viewed on the CRT screen. 
Possibly for this reason they are not visible to the user, however 
help messages do appear to inform the user, particularly error messages 
warning the user to make a back up of the files and try again.
Following are the facsimiles print outs of routine 5.5, "PRINT MERCHANDISE 
RECEIVED", and routine 5.6 "PRINT PURCHASE JOURNAL".

SCREEN 5-15: Return to the purchase order menu
/-----------------------------------------------------------------------------\
                        JUAN, BOMB & FERUT INC.
                        6405 SANTONA STREET    
                        MIAMI                   
                        FL 33146-3147     (305) 665-7882
                           P. ORDER RECEIVED 

PURCHASE TO:O1                                  REMARKS
RODRIGUEZ CO.                                   LAST SHIPMENT DID
JR                                              ARRIVE ON TIME.
16 W. 52ND STREET
MIAMI            FL 33135 
                          DATE ; 04/01/86 No. 00001 DUE DATE:5/01/86
======================================================================== 
SHIP VIA THEIR TRUCK   F.O.B. MIAMI  DISC.DAYS 10  DISC.%2  NET DAYS 30
======================================================================== 
INVENTORY#  DESCRIP. ORDERED RECEIVED BACK ORDER UNIT PRICE DISC.% EXT.
======================================================================== 
100         GIZMOS   2500.00  2500.00              10.00        25000.00






                                                     TOTAL      25000.00
      
                                                     NET TO PAY 25000.00
                                                                ========
\-----------------------------------------------------------------------------/

Look at the screen, and find the "PURCHASE TO:". To me, it shows that 
the computer has printed out the total of purchase orders received.  
Notice the "01" following the "PURCHASE  TO:", this refers to the vendor 
code, or to which vendor the merchandise was returned to.  Notice the  
"NET TO PAY", this is the total amount that must be paid from purchase 
orders received, this routine does not take returns into consideration.
Next, I want to view the "PURCHASE JOURNAL REPORT", which is the total 
of all transactions through the purchase order system.

Comments / Questions:

5.15. TITLE OF THE COMPANY MUST BEEN DEFINED
Notice the title of the company,this will automatically print out but 
must have been defined in routine 11.6.

                         SCREEN 5-16: JUAN, BOMB & FERUT INC.
/-----------------------------------------------------------------------------\
                         JUAN, BOMB & FERUT INC.
DATE : 4-01-86                                              PAGE : 1
TIME : 09:55 
                         PURCHASE JOURNAL REPORT
         P.O. RET. 
TYPE     NO.       V.C. NAME            DATE      GROSS    TAX  TOTAL
------------------------------------------------------------------------
PURCHASE   00001    01  RODRIGUEZ CO.   04/01/86  25000.00  0.0 25000.00
RETURN     00001    01  RODRIGUEZ CO.   04/01/86   1000.00  0.0  1000.00

                        TOTALS    :               24000.00  0.0 24000.00

\-----------------------------------------------------------------------------/

Look at the screen, and find the "DATE".  To me, it shows that the 
computer has printed the totals of the transactions for this date, which 
is the date that was entered at the date prompt. This is another reason 
why it is important to enter the date correctly. Next, I want to view 
page two of the "PURCHASE JOURNAL REPORT".

Comments / Questions:

5.16. TOTAL OF EACH PURCHASE RECEIVED AND RETURNED
This report prints the total of each purchase received and returned. The  
next report is a summary of each miscellaneous code and product included  
in the purchase order received and returns. Purchase orders are not included 
in these reports because they do not represent an accounting value.

5.16.1. DATE AND TIME
Notice the date and time. This is the date and time we entered at the DOS  
prompt* when we started the program. If we had typed in a specific date to 
print, it would have appeared, and the program would have printed out the 
transactions for that date. The time, however, would still be the time we 
typed in at the DOS prompt. *(The time progressed from the time we typed 
in at the DOS prompt. When we typed in the time, we started the computer's 
"clock". As we progressed through the program the time also progressed. This 
would be the time that we actually made the print out).
The program uses the total amount to make a balancing journal entry to 
accounts payable and to inventory.

                         SCREEN 5-17: JUAN,BOMB, & FERUT INC.
/-----------------------------------------------------------------------------\
DATE : 4-01-86           JUAN,BOMB, & FERUT INC.                PAGE : 2
TIME : 09:55 
                         PURCHASE JOURNAL REPORT
                      SUMMARY BY INVENTORY AND CODE
INVENTORY#      DESCRIPTION               UNITS    AMOUNT    AVG. P/UNIT
------------------------------------------------------------------------
100             GIZMOS                  2400.00  24000.00        10.000


                                         TOTALS :24000.00
\-----------------------------------------------------------------------------/

Look at the screen, and find the "SUMMARY BY INVENTORY AND CODE". To me, 
it shows that this report is a summary of each miscellaneous code and 
product included in the purchase order received and returns, and is a 
summary of the purchase process. Next, I want to return to the purchase 
order menu to view the "POST PROCESS" option.

Comments / Questions:

5.17. THREE INFORMATIONAL SCREENS
These past three screens have simply been informational screens, we will 
return to the purchase order menu from the escape command in screen 14.



                              SCREEN 5-18: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                              PURCHASE ORDER MENU

                       1. ENTER PURCHASE ORDERS
                       2. ENTER MERCHANDISE RECEIVED
                       3. ENTER RETURNS
                       4. PRINT PURCHASE ORDERS
                       5. PRINT MERCHANDISE RECEIVED
                       6. PRINT RETURNS
                       7. PRINT PURCHASE JOURNAL
                       8. POST PROCESS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :". To me, it 
shows that the computer expects me to choose an option. Next, I want 
choose option 8, "POST PROCESS".                          

TYPE:  8
PRESS: [<-']  Enter/Return key
    
Comments / Questions:

5.18. POSTING PROCESS
We have returned to this screen from screen 14, the preceding screens were 
informational.
Before proceeding with the posting process the routines from 5.4 to 5.7 must 
have been printed, otherwise the information will be excluded from the 
posting process. Also make sure to make back-up copies of the files before 
posting, to prevent loss of files due to power or hardware failure.

                              SCREEN 5-19: POST PROCESS
/-----------------------------------------------------------------------------\
                              POST PROCESS

                  WARNING: BEFORE YOU RUN THIS ROUTINE BE SURE
                           YOU HAVE:

                           - ENTERED ORDERS AND/OR RETURNS
                           - PRINTED ORDERS AND/OR RETURNS
                           - PRINTED THE JOURNAL
                           - BACKUP OF ALL FILES TO PREVENT ANY
                             POWER OR HARDWARE FAILURE

                           DO YOU WANT TO POST NOW? (Y/N)

\-----------------------------------------------------------------------------/

Look at the screen, and find the "DO YOU WANT TO POST NOW? (Y/N)". To me, 
it shows that the computer expects me to answer the question as to whether 
I want to post or not. Before posting make sure that routines 5.4 through 5.7 
have been printed or the process will not accept the information, also make  
sure to make a back-up copy of the files before posting because due to several 
factors such as a power surge or a power loss the information may be lost, or 
errors in the posting process may cause the program to lose information.
Next, I want to enter Y, after I have followed the preceding steps, and 
return to the purchase order menu.

TYPE: Y
PRESS:  [<-']  Enter/Return key,then  [Esc]  Escape key                 
AND THE SYSTEM WILL: Post, and when it is finished it will return to the 
purchase order menu.
  
Comments / Questions:

5.19. STEPS IN POSTING
Press return after typing "Y", and the system will post. When the process is  
finished press return and the system will return to the purchase order menu.

5.19.1. JOURNAL ENTRY TO THE GENERAL LEDGER
The preceding routines will result in journal entry to the General Ledger of 
an inventory debit of $24,000 and an accounts payable debit of $24,000.

SCREEN 5-20: Post
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                              PURCHASE ORDER MENU

                       1. ENTER PURCHASE ORDERS
                       2. ENTER MERCHANDISE RECEIVED
                       3. ENTER RETURNS
                       4. PRINT PURCHASE ORDERS
                       5. PRINT MERCHANDISE RECEIVED
                       6. PRINT RETURNS
                       7. PRINT PURCHASE JOURNAL
                       8. POST PROCESS

                      99. RETURN TO MAIN MENU

                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION :". To me, it 
shows that the computer expects me to choose an option. Next, I want to 
choose option 99, "RETURN TO MAIN MENU ".                          

TYPE:  99 
PRESS: [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return to the main menu.

Comments / Questions:

5.20. ROUTINES THAT AFFECT INVENTORY AND ACCOUNTS PAYABLE
This is a very important routine, these are the main entries to inventory and 
accounts payable. Other routines that affect inventory and accounts payable 
are billing, 6.1 and 6.2, and inventory, 7.7 to 7.9.

5.20.1. DRAWBACKS TO CONTROL
We have reviewed several routines which follow basically the same procedures,
making them easy to learn for the user. However, a drawback is that any 
adjustments must go through these routines, and although designed as a 
control feature can be troublesome and time consuming. A feature that would  
be helpful would be allowing adjusting entries directly to the GL.











































```
{% endraw %}

## CHAP6.TXT

{% raw %}
```

6. PRINT-OUT OPERATION OF INVENTORY WITH DAC EASY
                              SCREEN 6-1: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                              DAC EASY ACCOUNTING

                               M A I N  M E N U

                       1. FILE UTILITIES
                       2. GENERAL LEDGER
                       3. ACCOUNTS RECEIVABLE
                       4. ACCOUNTS PAYABLE
                       5. PURCHASE ORDERS
                       6. BILLING
                       7. INVENTORY
                       8. REPORTS
                       9. FORECASTING
                      10. END PERIOD ROUTINES
                      11. FILE CREATION AND MAINTENANCE
                      99. EXIT TO DOS

                            ENTER YOUR SELECTION:

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it 
shows that the computer expects me to choose an option. Next, I want 
to select option 7, which is "INVENTORY".

TYPE:  7
PRESS:  [<-']  Enter/Return key  
AND THE SYSTEM WILL:  Return with the "ACCOUNTS PAYABLE" menu. 

Comments / Questions:

6.1. ROUTINE USED TO PRINT-OUT INVENTORY LISTINGS
This routine is not the main inventory routine, it is basically used to 
print-out inventory listings sorted according to different requirements. The  
main entry to inventory is made by the system in the "PURCHASE ORDER" routine. 

SCREEN 6-2: Return with with the "ACCOUNTS PAYABLE" menu
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING
   
                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it 
shows that the computer expects me to select an option, and also that we 
are in the "INVENTORY" menu. Next, I want to select option 1, which is 
"PRICE ASSIGNMENT".  

TYPE:  1
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with the "PRICE ASSIGNMENT" option.

Comments / Questions:

6.2. ROUTINE USED TO PRINT-OUT THE INVENTORY REPORTS
Options 7.1 through 7.6 are have the same print options, which will be 
explained later, the differences are in the purpose of the reports. 
Basically this routine is used to print-out the inventory reports sorted 
and ranked according to the most useful format for the user.
Since routines 7.1 through 7.6 are basically similar, I will explain 
routine 7.1 in detail and briefly describe the other routines.

6.2.1. MUST CONVENIENT WAY TO PRINT INVENTORY LISTINGS
Routine 7.2, "PRODUCT LISTING", is used to print the inventory listing 
in the most convenient way to the user. For example, if sorted by bin 
number it provides a "map" of the product location. By vendor it provides 
the reader with an idea of which vendor sells which product, the 
combinations and possibilities are unlimited.

SCREEN 6-3: Return with the "PRICE ASSIGNMENT" option
/-----------------------------------------------------------------------------\
                           PRICE ASSIGNMENT

         SORTED BY:                           RANK BY:

         1. INVENTORY #                    1. INVENTORY #
         2. DESCRIPTION                    2. DESCRIPTION
         3. PRODUCT TYPE                   3. ON-HAND UNITS
         4. PRODUCT BIN                    4. ON-HAND DOLLARS
         5. PRODUCT VENDOR                 5. PURCHASE UNITS
                                           6. PURCHASE DOLLARS
       ENTER YOUR SELECTION :              7. SALES UNITS
                                           8. SALES DOLLARS
         FROM:                             9. PROFIT
           TO:                            10. TURNS
                                          11. GROSS RETURN

                                          ENTER YOUR SELECTION :

                                           FROM:
                                            TO:

\-----------------------------------------------------------------------------/

Look at the screen, and find the "SORTED BY:". To me, it shows that 
there are several options to sort by, and that there are several options 
to rank by. Next, I want to return to the "INVENTORY" menu.

PRESS:  [Esc]  Escape key
AND THE SYSTEM WILL:  Return to the "INVENTORY" menu. 

Comments / Questions:

6.3. SORTING AND RANKING OPERATIONS
There are five sorting operations and eleven ranking operations. Most of the 
options are straightforward, however, "TURNS" refers to inventory turnover,
which is how many times the inventory comes in and goes out (is purchased and 
sold).

6.3.1. PRINT-OUT OPERATION OF INVENTORY ON HAND
This operation  is simply a print-out operation of the inventory on hand.
Price assignments are then made, in other words the new prices are compared  
to the old ones and the new prices are keyed in. This is essential in the 
inventory process as the correct price is required to have a correct dollar 
value calculated for the Balance Sheet amount.

Press escape to return to the "INVENTORY" menu.

SCREEN 6-4: Return to the "INVENTORY" menu
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING

                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it 
shows that the computer expects me to choose an option. Next, I want to 
choose option number 7.6, "COUNT SHEETS".

TYPE:  6
PRESS:  [<-']  Enter/Return key

Comments / Questions:

6.4. ROUTINE FOR PRICE LISTING
Routine 7.3, "PRICE LISTING", prints out by price, and gives the user an 
idea of the different prices of the products. This routine can be used to 
call attention to expensive items in inventory which may require special 
care or security. This routine can also be printed with the price of the 
product shown, printed in code, or not shown. The code for the price not 
to appear is 1234567890, to code them in 1234567890=ABCDEFGHIJ, so 
12.95=AB.IE.

6.4.1. INVENTORY ACTIVITY PRINT-OUTS
Routine 7.4, "ACTIVITY REPORT", is used to print-out inventory activity,
can be ranked by turnover to determine the best selling and worst selling 
products. 

6.4.1.1. ALERT REPORT
Routine 7.5, "ALERT REPORT", this report should be a daily routine because  
it tells the company which products need to be ordered due to low inventory 
or which items may be stocked out.

6.4.1.2. ROUTINE FOR PHYSICAL INVENTORY ENTRIES
Routine 7.6, "COUNT SHEETS", is used to enter the physical inventory and 
then the differences are entered in 7.7.

                           SCREEN 6-5: COUNT SHEETS                        
/-----------------------------------------------------------------------------\
                           COUNT SHEETS      

         SORTED BY:                           RANK BY:

         1. INVENTORY #                    1. INVENTORY #
         2. DESCRIPTION                    2. DESCRIPTION
         3. PRODUCT TYPE                   3. ON-HAND UNITS
         4. PRODUCT BIN                    4. ON-HAND DOLLARS
         5. PRODUCT VENDOR                 5. PURCHASE UNITS
                                           6. PURCHASE DOLLARS
       ENTER YOUR SELECTION :              7. SALES UNITS
                                           8. SALES DOLLARS
         FROM:                             9. PROFIT
           TO:                            10. TURNS
                                          11. GROSS RETURN

                                          ENTER YOUR SELECTION :

                                           FROM:
                                             TO:

\-----------------------------------------------------------------------------/

Look at the screen, and find the "SORTED BY:". To me, it shows that 
there are several options to sort by, and that there are several items to 
rank by. Next, I want to print out the count sheets.

TYPE:  (type in the desired selections or strike the return to print the 
default values where the system allows you to, then) 
PRESS:   [<-']  Enter/Return key                   
AND THE SYSTEM WILL:  Print-out the count sheets.


Comments / Questions:

6.5. NO DEFAULT RULE
The "FROM:" and "TO:" are the numbers to print, if we strike return, the 
program will print all of them out. The "ENTER YOUR SELECTION:" must be 
answered as there is no default in the sort and rank operations.

6.5.1. PRINT-OUT IS NOT SCREEN VISIBLE
As explained previously the following print-out is not screen visible, it  
is only a facsimile of the actual, which prints out in condensed print.

The following example was sorted and ranked by inventory number.

SCREEN 6-6: Print-out the count sheets  
/-----------------------------------------------------------------------------\
DATE: 04-01-86             JUAN,BOMB & FERUT INC.             PAGE NO. 1
TIME: 05:12                6405 SANTONA STREET
                           MIAMI
                           FL  33146-3147     (305) 665-7882       


TOTALS BY: INVENTORY #

                      UNIT   BIN          
INV.#   DESCRIPTION   TYPE  VENDOR  UNITS  FRACTIONS   REMARKS
------- -----------   ----  ------  -----  ---------   -------
100      GIZMOS       UNIT             
                       1       01
                                    -----  ---------   -------


 GRAND TOTAL   1
 
\-----------------------------------------------------------------------------/

Comments / Questions:

6.6. INVENTORY MENU
Notice the "DATE" AND "TIME", these have been explained before and the 
heading is similar to the other print-out headings. Notice the "TOTALS 
BY:", this indicates that the inventory was sorted according to inventory 
number. Notice the other headings, these are clues to the location and 
description of the inventory, and notice the blank lines after the items,
here we will write in by hand the amounts we actually counted. Notice also 
the "GRAND TOTALS", this is not a dollar amount but the amount of inventory 
items that were printed out.

There are no system prompts on this screen, as this is merely an informational 
screen, we will return to the "INVENTORY" menu from screen five. After we 
finished printing the count sheets we pressed escape to return to the 
"INVENTORY" menu.

                           SCREEN 6-7: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING

                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it 
shows that the computer expects me to choose an option. Next, I want to 
select option 7, "ENTER PHYSICAL INVENTORY". 

TYPE:   7
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL: Return with option 7, "ENTER PHYSICAL INVENTORY ".  


Comments / Questions:

6.7. ROUTINE FOR HAND WRITTEN ENTRIES
This routine will allow you to enter the hand written entries off your 
inventory count sheets for comparison to the perpetual inventory records.

SCREEN 6-8: Return with option 7
/-----------------------------------------------------------------------------\
                   PHYSICAL INVENTORY ENTRY

INVENTORY #        DESCRIPTION         UNITS/FRACT.COUNTED  REC
------------ ------------------------- ------------------- -----



\-----------------------------------------------------------------------------/

Look at the screen, and find the "INVENTORY #". To me, it shows that 
the computer expects me complete the worksheet. Next, I want to 
complete the worksheet, and return to the "INVENTORY" menu.

TYPE:  (type in the entries individually as explained below, then:)
PRESS:  [<-']  Enter/Return key, when finished [Esc] Escape key

Comments / Questions:

6.8. ASSIGNING RECORD NUMBERS
Enter the inventory number under the caption "INVENTORY #" and the 
description will appear automatically. Enter the amount from the count 
sheets in the "UNITS/FRACT.COUNTED" column and the record number ("REC") 
will be assigned automatically by the system.

6.8.1. CANCELLING A RECORD
The record number will be used if there is a need to cancel an entry made in 
error or that may need to be corrected later. To cancel a record enter the 
invoice number, press return and the cursor will move to the " UNITS/FRACT.
COUNTED" column, here you enter "C" and enter the record number that you 
wish to cancel in the "REC" column. After you enter "C" press the return to 
delete the entry and re-enter the correct amount. This is similar, but not 
exactly the same as the cancel procedures described previously. Enter "T" to 
indicate you are finished.

                           SCREEN 6-9: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING

                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen and find the "SELECTION:". To me, it shows that the 
computer expects me to choose an option. Next, I want to select option 8, 
which is "PRINT PHYSICAL-PERPETUAL".

TYPE:   8 
PRESS:  [<-']  Enter/Return key

Comments / Questions:

6.9. COMPARING INVENTORY COUNT
There are five sort operations in this routine. They are the same five 
previously described. This routine is used to compare the physical inventory  
entered from the count sheets and the perpetual inventory on the books (in 
the system's book of accounts).

                        SCREEN 6-10: PERPETUAL-PHYSICAL COMPARATIVE REPORT
/-----------------------------------------------------------------------------\ 
                        PERPETUAL-PHYSICAL COMPARATIVE REPORT


                         SORTED BY: 1. INVENTORY #
                                    2. DESCRIPTION
                                    3. PRODUCT TYPE
                                    4. PRODUCT BIN
                                    5. PRODUCT VENDOR

                         ENTER YOUR SELECTION :1

Processing...

PRESS <CTRL>+<X> TO PAUSE PRINTING

\-----------------------------------------------------------------------------/

Look at the screen, and find the "Processing...". To me, it shows that 
the computer is processing the physical-perpetual inventory report and is 
printing it. Next, I want to view the finished print-out and return to  
the "INVENTORY" menu.

PRESS:  [Esc]  Escape key

Comments / Questions:

6.10. INVENTORY MENU DISPLAY
We will press escape when the program is finished printing to return to the  
"INVENTORY" menu. This procedure follows the same procedures outlined  
previously, except that there is no default, a selection must be made. 

The following is a facsimile print-out, since the actual print-out is not 
visible on the screen.

                           SCREEN 6-11: JUAN,BOMB & FERUT INC.
/-----------------------------------------------------------------------------\
DATE : 04-01-86            JUAN,BOMB & FERUT INC.             PAGE NO. 1
TIME:  06:07               6405 SANTONA STREET
                           MIAMI
                           FL  33146-3147     (305) 665-7882       


Sorted  BY:INVENTORY#    PERPETUAL-PHYSICAL INVENTORY COMPARATIVE REPORT
                                   PERPETUAL  PHYSICAL
INV.#  DESC. TYPE BIN  VENDOR UNIT UNITS FRAC UNITS FRAC DIF REMARKS REC 
-----  ----- ---- ---  ------ ---- ----- ---- ----- ---- --- ------- ---



        GRAND TOTAL PRODUCTS
\-----------------------------------------------------------------------------/

Comments / Questions:

6.11. DIFFERENCE BETWEEN INVENTORY FROM THE COUNT SHEETS AND THE PERPETUAL INVENTORY 
RECORDS
This print-out shows the difference between the actual inventory count entered 
from the count sheets in operation 7.7 and the perpetual inventory records in 
the system. The differences are calculated by the program in the "DIF" or 
difference column.

6.11.1. FACSIMILE ACTUAL PRINT-OUT
This is a facsimile of the actual print-out for demonstration purposes 
since the actual does not appear on the  screen.

6.11.1.1. INVENTORY MENU
We will return to the "INVENTORY" menu from screen 10, after having pressed 
escape when the printing was finished.

                           SCREEN 6-12: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING

                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to choose an option. Next, I want to select 
option 9, "POST ADJUSTMENTS".

TYPE:   9 
PRESS:  [<-']  Enter/Return key


Comments / Questions:

6.12. POSTING INVENTORY DIFFERENCES
This routine will post the differences from the preceding operation to 
the GL, the accounts affected will be inventory and accounts payable.

                         SCREEN 6-13: POST PHYSICAL INVENTORY TO PERPETUAL
/-----------------------------------------------------------------------------\
                         POST PHYSICAL INVENTORY TO PERPETUAL

                   WARNING: BEFORE YOU RUN THIS ROUTINE HAVE
                            BACKUP FILES TO AVOID PROBLEMS.



                            DO YOU WANT TO CONTINUE? (Y/N)

\-----------------------------------------------------------------------------/

Look at the screen, and find the "DO YOU WANT TO CONTINUE? (Y/N)". To me, 
it shows that the computer expects me to respond to the screen question.
Next, I want to respond "Y" to be able to continue.

TYPE:  Y
PRESS:  [<-']  Enter/Return key


Comments / Questions:

6.13. WARNING MESSAGE
This is the same procedure as we followed before, to continue we must type 
"Y", which is yes. Notice the "WARNING" message, this has also been described 
before.

              SCREEN 6-14: POST PHYSICAL INVENTORY TO PERPETUAL         
/-----------------------------------------------------------------------------\
              POST PHYSICAL INVENTORY TO PERPETUAL

                   WARNING: BEFORE YOU RUN THIS ROUTINE HAVE
                            BACKUP FILES TO AVOID PROBLEMS.


                            DO YOU WANT TO CONTINUE? (Y/N)  Y

BE SURE PRINTER IS ON-LINE AND PRESS <RET> TO BEGIN


\-----------------------------------------------------------------------------/

Look at the screen, and find the "PRESS <RET> TO BEGIN". To me, it shows 
that the computer expects me to have completed the preceding instructions 
and make sure that the printer is on line before I press return to begin the 
posting process. Next, I want to press return to begin the posting 
process, and when the posting is completed press escape to return to the 
"INVENTORY" menu.

PRESS:  [<-']  Enter/Return key,then [Esc]  Escape key

Comments / Questions:

6.14. ADJUSTING ENTRIES
Once the inventory has been correctly entered we will post the difference to 
the GL. (An adjusting entry). In the GL Interface routine we have already set 
up the account which will allow the system to post the difference, the account 
is cost of goods sold. This is necessary since we cannot key in any journal 
entry directly to inventory, if it is not through one of the inventory  
routines.

6.14.1. NOTICE THE WARNING MESSAGES
Notice the warning messages. This is a problem with the system,information 
does not remain in the files after the posting  routine. If we wish to post  
each month (a normal process for the monthly financial statements) we will 
need at least twelve or more different back-up files.

6.14.1.1. PRINTER ON-LINE DURING THE POSTING PROCESS
Another question is why does the printer have to be on-line during the 
posting process as nothing prints out, unless there is an error message 
and that prints out on the screen.

                           SCREEN 6-15: DAC EASY ACCOUNTING
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING

                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to choose an option. Next, I want to select 
option 10, "DEFINE COST SYSTEM".

TYPE:   10 
PRESS:  [<-']  Enter/Return key
AND THE SYSTEM WILL:  Return with option 10, "DEFINE COST SYSTEM".


                          SCREEN 6-16: DEFINE COSTING SYSTEM
/-----------------------------------------------------------------------------\
                          DEFINE COSTING SYSTEM


                           1. LAST PURCHASE PRICE
                           2. STANDARD COST
                           3. AVERAGE COST


                            ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to choose one of the options to define the 
cost system. Next, I want to choose "AVERAGE COST".

TYPE: 3
PRESS:  [<-']  Enter/Return key,then [Esc]  Escape key                                               

Comments / Questions: 

6.15. ROUTINE FOR DEFINING THE COST SYSTEM
This  routine allows the user to define his cost system.  He  has 
three 
choices."LAST PURCHASE PRICE" (LIFO), "STANDARD COST", or "AVERAGE 
COST". If we do not define the cost system the default is "AVERAGE COST".
Retailers  would  generally  use the  first  option, manufacturers  would 
generally use the second option, and a small business would use the third 
option.

6.15.1. ALTERING THE COST SYSTEM
The cost  system can be changed at any time. If the user is changing 
methods, the system will inform the user of the previous method used. This 
routine should be done in the start up operation.

6.15.1.1. INVENTORY MENU DISPLAY
After entering the number and pressing the return, we will press escape 
to return to the "INVENTORY" menu.

SCREEN 6-17: DATE 04-01-86                                                 TIME 06:47
/-----------------------------------------------------------------------------\
                           DAC EASY ACCOUNTING

                             INVENTORY MENU

                          1. PRICE ASSIGNMENT
         REPORTS                              PHYSICAL INVENTORY

     2. PRODUCT LISTING                      6. COUNT SHEETS
     3. PRICE LISTING                        7. ENTER PHYSICAL INVENTORY
     4. ACTIVITY REPORT                      8. PRINT PHYSICAL-PERPETUAL
     5. ALERT REPORT                         9. POST ADJUSTMENTS

                                OTHERS

                         10. DEFINE COST SYSTEM
                         11. P.O./INVOICES #
                         99. RETURN TO MAIN MENU

                         ENTER YOUR SELECTION :

\-----------------------------------------------------------------------------/

Look at the screen, and find the "ENTER YOUR SELECTION:". To me, it shows 
that the computer expects me to choose an option. Next, I want to 
select option 11, which is "P.O./INVOICES #".

TYPE:   11
PRESS:  [<-']  Enter/Return key
   
                         SCREEN 6-18: ENTER THE LAST NUMBER OF:
/-----------------------------------------------------------------------------\
                         ENTER THE LAST NUMBER OF:

                         PURCHASE ORDERS
                         RETURNS TO VENDORS      0
                         INVOICES                0
                         SALES RETURNS           0

\-----------------------------------------------------------------------------/

Look at the screen, and find the "PURCHASE ORDERS". To me, it shows that 
the computer expects me to enter the last number issued or press return for 
the default. Next, I  want to press return for the default value, which  
is zero, and when I have done so for each of the choices, I will  press  
escape to return to the "INVOICES" menu, then in the invoices menu, I will 
type 99 and press return to return to the main menu.

PRESS:  [<-']  Enter/Return key,then [Esc]  Escape key                  

Comments / Questions:

6.16. PURCHASE ORDER NUMBERS
Through  this  routine the purchase order numbers, the invoice numbers, the   
sales return numbers and the return to vendors are controlled.

6.16.1. AUTOMATIC NUMBERING
Enter the last number issued and the system  will automatically continue the 
numbering. If we do not enter any numbers the default will be "1"  for each 
of the above.

6.16.1.1. FILE CREATION AND MAINTENANCE
This routine is actually part of the start up routine. The organization of 
these routines is another shortcoming of the system. Routines are not 
logically organized or are deceptively labeled. This routine and the 
preceding one should be routine # 11, "FILE CREATION AND MAINTENANCE", which  
would be a more logical place to  place them, since their use is not 
compatible with the rest of the operations in this process, and would even be 
more logical for a fist time user, as where they are now they could be 
overlooked.















































```
{% endraw %}

## FILE1294.TXT

{% raw %}
```
Disk No: 1294
Program Title:  DAC EASY TUTORIAL version 1.0
PC-SIG version: 1

Learn to use the DAC EASY accounting system, plus gain knowledge of
basic bookkeeping with lessons that lead you step-by-step through the
program.  Non-interactive tutorial can either be printed out, or read
off the screen for quick reference using the included READ utility.

Usage:  Educational.

Special Requirements:  Printer for hardcopy.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

File Descriptions:

CHP?      TXT  Chapters of tutorial text (6 files).
TABCONT   TXT  Table of contents.
INDEX     TXT  Index of tutorial information.
READ      ME   Introductory information.
AUTOEXEC  BAT  Automatic startup file for floppy systems.
PRINTALL  BAT  Batch file to print all documentation.
PRINTEXT  BAT  Batch file to start the program.
DISPLAY   BAT  Screen display setup file.

PC-SIG
1030-D East Duane Avenue
Sunnyvale, CA   94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  Disk No: 1294  DAC EASY TUTORIAL, version 1.0  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             PRINTALL (press enter)                                      ║
║                                                                         ║
║   To display the documentation, type:                                   ║
║                                                                         ║
║             DISPLAY (press enter)                                       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INDEX.TXT

{% raw %}
```

INDEX

A
A>, 1-1
ACCOUNT ACTIVITY DETAIL REPORT, 2-4
ACCOUNT NUMBER, 1-6
ACCOUNTS PAYABLE, 4-4, 4-14
ACCOUNTS PAYABLE TRANSACTION #, 4-2
ACCOUNTS RECEIVABLE DAILY ROUTINES, 3-2
ACCOUNTS RECEIVABLE PRINT STATEMENTS, 7-3
ACCOUNTS RECEIVABLE TRANSACTION #, 3-2
ACTUAL QUESTIONS, 1-4
ADDITION OF ACCOUNTS, 1-8
ADDRESS AND PAYMENT TERMS
   VENDOR INFORMATION, 4-3
ADJUSTING ENTRIES, 6-11
AFFECTS ACCOUNTS PAYABLE, 5-8
ALERT REPORT, 6-4
ALTERING THE COST SYSTEM, 6-12
AMOUNT OF RECORDS TO BE PROCESSED, 1-4
APPROPRIATE COMMAND (CODE) SELECTION, 3-3
ARE ALL THE INVOICES TOBEPAID ENTERED?, 4-8
ARE THE CHECKS ALIGNED? <Y/N> :, 4-9
Ask me the following question, "ARE YOU SURE?", 1-4
Ask me to define for another set of file, 1-4
ASSETS, 1-6
ASSIGNING RECORD NUMBERS, 6-7
AUTOMATIC NUMBERING, 6-13
Automatically assigned a new available number, 3-2

B
B, 1-3
BE SURE PRINTER IS ON LINE AND PRESS, 3-7
Begin posting, 2-4
Begin printing, 7-2
Begin printing the statements, 7-3
BILLING SYSTEM TRANSACTIONS, 3-2
BLANK PURCHASE ORDER, 5-10
Bring up the name of the existing customer found in, 3-3

C
CANCELLATION PROCEDURES, 4-6
CANCELLING A RECORD, 6-7
Choose, 4-7
Choose "ENTER RETURNS", which is option 3, 5-8
Choose option 1, "INVOICES/TRANSACTIONS, 4-11
Choose option 1, "VENDOR CODE", and press return to enter the default value and, 8-4
Choose option 2, 7-2
Choose option 7, which is "AUTOMATICCALCULATION", for Accounts Payable, 8-2
Choose option 8, "POST PROCESS, 5-15
Choose option 99, "RETURN TO MAIN MENU, 5-17
Choose option 9, which is "POST", 4-13
Choose option number 5, "ENTER, 4-2
Choose option number 5, "PURCHASE ORDERS, 5-1
Choose option number 6, "ENTER CHECKS TO PRINT, 4-5
Choose option number 7.6, "COUNT SHEETS, 6-4
Choose the "ENTER MERCHANDISE RECEIVED" option, which is option 2, 5-6
Come up with a message "DO YOU WANT TO RUN IT NOW?, 3-4
Come up with the last operation, 3-6
COMPARING INVENTORY COUNT, 6-8
Complete the transaction by typing in the remaining information, 4-3
Complete the worksheet, and return to the"INVENTORY" menu, 6-7
COMPLETION OF G/L INTERFACE TABLE, 1-14
Confirm my entries, 1-10
CONFIRMATION OF ENTRIES, 1-10
CONFIRMING THE ENTRIES, 1-4
CONTENTS OF CHECKS, 4-10
Continue with the posting, 3-7
CONTROL FEATURE, 5-10
CONTROLS THE PRINTING OF ALL THE CHECKS, 4-8
Create a customer file, 1-8
CREATING AN ACCOUNT, 1-7
Cursor blinking after "ARTHUR & CO., 1-9
Cursor blinking after the "VENDOR CODE, 1-11
Cursor is now blinking after the phrase, 1-9
CUSTOMER CODE, 3-3
CUSTOMER'S BILLING & PAYMENTS WITH DAC EASY, 3-1

D
DAC SOFTWARE SUPPLIES, 7-3
DATE, 5-14
DATE AND TIME, 4-13, 5-14
DEBIT INVENTORY AND CREDIT ACCOUNTS PAYABLE, 5-8
DEBIT OR CREDIT ACCOUNTS PAYABLE, 4-4
DEFINITION OF FILES, 1-3
DELETION OF A CUSTOMER, 1-10
DELETION OF A VENDOR, 1-12
DELETION OF AN ACCOUNT, 1-8
DESCRIPTION" and "# RECORDS, 1-4
DID YOU RUN THIS ROUTINE EARLIER IN, 3-4
DIFFERENCE BETWEEN INVENTORY FROM THE COUNT SHEETS AND THE PERPETUAL INVENTORY, 6-9
DIRECTORY DISPLAY, 1-1
DIRECTORY OF FILES WITHIN DAC EASY, 1-1
DISC. DAYS
   DISC %, AND DUE DAYS, 5-4
Display another set of menu, 1-2
Display the available information for the customer with, 1-9
Display the directory of the disk in the A drive, 1-1
Do posting, 3-7
Do routines 4, 5, 6 and 7 which are " PRINTPURCHASE ORDERS, PRINT, 5-11
DO YOU WANT TO CONTINUE? (Y/N), 6-10
DO YOU WANT TO CONTINUE? (Y/N): Y, 4-14
DO YOU WANT TO CONTINUE? (Y?N):, 3-6
DO YOU WANT TO POST NOW? (Y/N), 5-16
DO YOU WANT TO PRINT JOURNAL NOW?, 3-5
DO YOU WANT TO REPRINT? (Y/N) :, 5-11
DRAWBACKS TO CONTROL, 5-17


E
EASY, 1-1
EDITING, 1-14
END OF INITIALIZATION PROCESS, 1-5
End the enter transaction process, 2-2
End the transaction, and return to the "ACCOUNTS PAYABLE" menu, 4-4
Enter a code number, 1-11
Enter a new accounts receivable, 3-2
ENTER ACCOUNTS PAYABLE, 4-3
Enter code number plus all the required details, 1-6
ENTER MERCHANDISE RECEIVED, 5-6
Enter selection #1, 7-1
Enter the default values by striking the return, 5-11
Enter the next available purchase return number, 5-9
ENTER THE VENDOR CODE, 5-7
ENTER YOUR SELECTION, 3-4, 4-5, 4-11, 4-13, 8-4, 8-5
ENTER YOUR SELECTION :, 3-1, 3-6, 4-7, 5-6, 5-8, 5-11, 5-15, 5-17
ENTER YOUR SELECTION :".  To me, it shows, 1-5
ENTER YOUR SELECTION:, 1-2, 1-3, 3-1, 3-5, 4-1, 5-1, 6-1, 6-2, 6-3, 6-6, 6-9, 6-11, 6-12, 6-13, 8-1, 8-2
Enter Y, after I have followed the precedingsteps, and return to the purchase o, 5-16
EXECUTION OF ENTRIES, 3-3

F
FACSIMILE ACTUAL PRINT-OUT, 6-9
FACSIMILE PRINT-OUTS, 4-14
FIELD ENTRY INSTRUCTION, 1-13
FILE CREATION AND MAINTENANCE, 6-14
FILE CREATION AND MAINTENANCE MENU, 1-6
FILE CREATION WITH DAC EASY, 1-1
FORECAST, 8-3
FORECASTING & SORTING WITH DAC EASY, 8-1
FORECASTING MENU DISPLAY, 8-4
FORECASTING ROUTINE, 8-1
FORMAT 1 AND 2, 7-2
FORMAT OF CHECKS, 4-10
FORMAT OF THE STATEMENT, 7-3
FUNCTION OF "A>", 1-1

G
G, 1-7
G/L INTERFACE TABLE" that I have created, 1-14
GENERAL LEDGER MENU, 2-1
GENERAL LEDGER MENU" and "ENTER YOUR, 2-1
GENERAL LEDGER PROCESSING COMPLETION, 2-4
GENERATE FINANCE CHARGES, 3-4
Get out of this screen, 1-7
GETTING STARTED WITH DAC EASY, 4-1
GETTING STARTED WITH DAC EASY PURCHASE ORDER TRANSACTIONS, 5-1
GL, 2-1
GL PROGRAM FEATURE TROUBLESOME AT TIMES, 5-1
Go into the print directory section of this module, 7-4




H
HEADINGS: TRANSACTION NUMBER
   VENDOR CODE, NAME, INVOICE NUMBER AND DATE, 4-13

I
I had previously created this vendor file using the above code., 1-11
I had previously filled in all the necessary particulars, 1-9
I have selected option #11 in the main menu and the, 1-6
I have to choose this option to create a customer file, 1-8
I have to make a selection from the menu to proceed with accounts, 3-5
I have to make another selection from the accounts receivable, 3-1
I have to specify my choice by entering the next operation # in order, 3-6
In order for me to go into the next operation of the accounts, 3-4
IN WHICH DRIVE WILL YOUR FILES BE, 1-3
INDEX, A-1
INITIALIZING THE SYSTEM, 1-4
INTERPRETATION OF THE COLUMNS, 8-5
INVENTORY #, 6-7
INVENTORY ACTIVITY PRINT-OUTS, 6-4
INVENTORY MENU, 6-5, 6-9
INVENTORY MENU DISPLAY, 6-8, 6-12
INVENTORY NUMBER, 5-5
INVOICES/TRANSACTIONS IS ACCOUNTS PAYABLE JOURNAL, 4-12
IS THE DATA CORRECT? (Y/N):, 4-7
ISSUANCE OF QUESTIONS, 1-3
Issue a set of questions for me to answer, 1-3
Issue to the system the upper range, 2-3
It shows that the purchase order number was automatically entered bythe program, 5-4

J
JOURNAL ENTRY TO THE GENERAL LEDGER, 5-17

L
LEVELS OF SECURITY, 1-5
Load and run the EASY program, 1-1
Load process no. 1 for me, 3-2
Load the Dac Easy program into the system and start, 1-1
Load the routine for me, 3-1
Load this operation for me, 3-4

M
MAIN ENTRIES TO ACCOUNTS PAYABLE, 4-2
MAIN MENU DISPLAY, 3-3
MAIN ROUTINE OF ACCOUNTS PAYABLE, 4-5
MERCHANDISE RECEIVED FROM PURCHASE, 5-7
MERCHANDISE TO DEDUCT FROM INVENTORY, 5-9
MISSING FILE DEFINITION" and "<RETURN> to, 1-2
Move the cursor to the initial page section, 2-3
MUST CONVENIENT WAY TO PRINT INVENTORY LISTINGS, 6-2

N
N, 3-4, 7-3
NET TO PAY, 5-7
NEXT ITEM IS REMARKS, 5-4
NO ADVANCES AND REF., 5-9
NO DEFAULT RULE, 6-5
NO WAY TO ENTER BEGINNING BALANCES, 4-2
NOTICE THE WARNING MESSAGES, 6-11
NUMBER OF TRANSACTIONS, 4-13

P
POST PROCESS, 5-11
Post the transactions into the general ledger, 2-4
POSTED VERSUS UNPOSTED TRANSACTIONS, 2-3
POSTING INVENTORY DIFFERENCES, 6-10
POSTING PROCESS, 5-15
POSTING PROCESS AND CHECKS TO PRINT, 4-14
POSTING TRANSACTIONS, 2-4
Post, and when it is finished it will return to the purchase order menu, 5-17
PRE-POSTING OF TRANSACTIONS, 7-2
PRE-POSTING OF TRANSACTIONS WITH DAC EASY, 7-1
PRESS <RET> TO BEGIN, 6-10
Press the return to have the numberentered automatically, 4-2
PREVIOUS YEAR, 8-3
PREVIOUS YEAR SELECTION, 8-3
PRINT G/L JOURNALS, 2-3
PRINT MORE THAN ONCE, 5-11
Print the design of the Profit & Loss statement, 7-3
Print the financial statement, 7-2
Print the forecasts, after selecting acalculation method, 8-3
Print the journal, 3-5
Print the report, 2-3
Print the report and take me back to the menu, 2-4
Print the transactions in the journal, 2-3
PRINT-OUT DISPLAYS, 8-4
PRINT-OUT IS NOT SCREEN VISIBLE, 6-5
PRINT-OUT OPERATION OF INVENTORY ON HAND, 6-3
PRINT-OUT OPERATION OF INVENTORY WITH DAC EASY, 6-1
Print-out the count sheets, 6-5
PRINTER ON-LINE DURING THE POSTING PROCESS, 6-11
PRINTING A JOURNAL, 3-5
PRINTING CHECKS, 4-9
PRINTING REPORTS, 2-3
Proceed with my option, 3-5
PROCESS ACCOUNTS TRANSACTIONS, 4-8
PROCESS FINISHED !!, 4-10
PROCESS FOR ENTRIES IN VENDOR FILES, 1-10
PROCESS TO GENERATE FINANCE CHARGES, 3-4
Processing..., 4-12, 5-12, 6-8
PURCHASE ORDER #, 5-3
PURCHASE ORDER MENU, 5-2
PURCHASE ORDER NUMBER WE RECEIVED MERCHANDISE FROM, 5-7
PURCHASE ORDER NUMBERS, 6-13
PURCHASE ORDER PROGRAM CONTROL, 5-2
PURCHASE ORDERS, 6-13
PURCHASE ORDERS OPERATION, 5-1
PURCHASE RETURN #, 5-9
PURCHASE TO:, 5-13
PURPOSES FOR THE POSTING PROCESS, 3-6

R
REASON TO CHOSE ACCOUNTS PAYABLE, 8-2
Remember that the records are being entered in blocks
   so the number you, 1-4
REPORT FORMAT, 7-3
REPORT MENU" and "ENTER YOUR SELECTION:, 7-1
Respond "Y" to be able to continue, 6-10
Return me to the menu, 1-13
RETURN MERCHANDISE NOT WISH TO KEEP, 5-8
RETURN TO EMPTY FILE, 1-10
RETURN TO FORECASTING MENU, 8-5
Return to the, 5-12
Return to the "ACCOUNTS PAYABLE" menu, 4-4
Return to the "INVENTORY" menu, 6-3
Return to the main menu, 1-13, 5-17, 8-6
Return to the main menu and conclude the program, 8-5
Return to the menu, 1-14
Return to the purchase order menu, 5-12
Return with option 10, "DEFINE COST SYSTEM", 6-12
Return with option 5, "PRINT MERCHANDISE RECEIVED, 5-11
Return with option 7, "ENTER PHYSICAL INVENTORY, 6-6
Return with the "ACCOUNTS PAYABLE" menu, 4-1, 6-1
Return with the default values, 5-11
Return with the "ENTER CHECKS TO PRINT" option, 4-5
Return with the "ENTER INVOICES AND TRANSACTIONS" option, 4-2
Return with the "ENTER RETURNS" routine, 5-8
Return with the "FORECASTING" option, 8-1
Return with the "INVOICES/TRANSACTIONS" option, 4-11
Return with the "PRICE ASSIGNMENT" option, 6-2
Return with the purchase order menu, 5-1
Return with the transaction number and allow us to proceed to the vendor code, 4-3
REVIEW OF THE PROGRAM, 8-6
ROUTINE FOR DEFINING THE COST SYSTEM, 6-12
ROUTINE FOR ENTERING PURCHASE ORDERS, 5-2
ROUTINE FOR HAND WRITTEN ENTRIES, 6-6
ROUTINE FOR PHYSICAL INVENTORY ENTRIES, 6-4
ROUTINE FOR POSTING, 3-4
ROUTINE FOR PRICE LISTING, 6-4
ROUTINE FOR PRINTING COMPANY NAME, 1-14
ROUTINE FOR RECEIVING MERCHANDISE ORDERED, 5-6
ROUTINE FOR RESPONDING TO QUESTIONS, 1-4
ROUTINE TO SET UP AN EXISTING COMPANY, 4-2
ROUTINE USED FOR PAYMENTS, 4-2
ROUTINE USED TO PRINT-OUT INVENTORY LISTINGS, 6-1
ROUTINE USED TO PRINT-OUT THE INVENTORY REPORTS, 6-2
ROUTINES THAT AFFECT INVENTORY AND ACCOUNTS PAYABLE, 5-17
RULE FOR PASSING ENTRIES, 1-7

S
SAMPLE ENTRY, 4-5
SAMPLE FORMS, 5-12
SCREEN FACSIMILES FOR EVALUATION PURPOSES, 4-12
Select, 6-9, 6-11
Select option #1 to create the file for the General Ledger, 1-6
Select option 11, which is "P.O./INVOICES #, 6-13
Select option 7, "ENTER PHYSICAL INVENTORY, 6-6
Select option 7, which is "INVENTORY, 6-1
Select option 8, "PRINT FORECAST, 8-4
Select option 8, "PRINT JOURNALS", 4-11
Select option 9, "FORECASTING, 8-1
SELECTING A SORT OPTIONS, 8-2
SHIPPING INFORMATION LINE, 5-4
SORTED BY:, 6-3, 6-5
SORTING AND RANKING OPERATIONS, 6-3
SORTING BY TRANSACTIONS, 8-4
SORTING OPTIONS, 8-2
Start this routine, 3-7
STEPS IN POSTING, 5-17
SUMMARY BY INVENTORY AND CODE, 5-14
SUSPENDING THE PRINTER, 2-3
System displaying an empty product file and, 1-12
System displaying the contents of a product, 1-13
System displaying the contents of of my, 2-2
System displaying the information about the, 1-11
System has taken me into the "PRINT ACCOUNT, 2-3

T
T, 2-2, 4-4
Take me back to the "FILE CREATION AND MAINTENANCE, 1-7, 1-10
Take me back to the main menu, 1-5
Take me back to the menu, 1-11, 1-14
Take me into the COMPANY'S IDENTIFICATION routine, 1-13
Take me into the General Ledger Interface Table, 1-14
Take me into the PRODUCT FILE CREATION module of the, 1-12
Take me into the "VENDOR FILE MAINTENANCE" module of, 1-10
Tell the computer that we received merchandise from purchase, 5-7
Tell the system that I had not run it earlier in the current, 3-4
Tell the system that I want to go into Accounts Receivable, 3-1
The, 4-4, 5-10, 5-14, 6-7
The amounttopayhas beencalculated automatically, and the, 5-5
The computer expects me complete the worksheet, 6-7
The computer expects me to answer the question as to whether, 5-16
The computer expects me to answer with a "Y" to continue, after having printed, 4-14
The computer expects me to choose an option, 4-7, 4-11, 4-13, 5-1, 5-6, 5-8, 5-11, 5-15, 5-17, 6-1, 6-3, 6-6, 6-9, 6-11, 6-13, 8-2, 8-4
The computer expects me to choose an optionfrom the accounts payable, 4-2
The computer expects me to choose one of the options to define the, 6-12
The computer expects me to choose which data to use, 7-2
The computer expects me to either enter a number to edit an existing, 5-3
The computer expects me to enter, 1-6
The computer expects me to enter a number or strike return for the, 5-9
The computer expects me to enter a selection, 4-5
The computer expects me to enter a selection number for my next, 1-3
The computer expects me to enter a VENDOR CODE, 1-11
The computer expects me to enter atransaction number, 4-2
The computer expects me to enter atransaction number, ifI wish to cancel, 4-6
The computer expects me to enter my selection from the menu by typing, 1-2
The computer expects me to enter the last number issued or press return for, 6-13
The computer expects me to enter the number for the next operation I, 1-5
The computer expects me to enter the number of records, 1-4
The computer expects me to havecompleted the preceding instructions, 6-10
The computer expects me to issue a command following, 1-1
The computer expects me to print the Accounts, 7-3
The computer expects me to respond to the screen question, 6-10
The computer expects me to select an option, 8-1, 8-5
The computer expects me to select an option from the numbered choices., 4-1
The computer expects me to select an option, to print the forecast by, 8-4
The computer expects me to select anoption, and also that we, 6-2
The computer expects me to the system is, 2-4
The computer expects me to verify that the data we entered, 4-7
The computer expects me to verify the the checks printed by visual, 4-10
The computer expects me to work on the REPORT module of, 7-1
The computer expects me to work on this module and make some changes, 1-13
The computer expects me to work on this section to print the format of the, 7-3
The computer has entered the transactionnumber automatically, 4-3
The computer has printed out the total of purchase orders received., 5-13
The computer is asking me several questions that I must answer before I can pri, 5-11
The computer is processing the information and this is also the message, 5-12
The computer is processing the transactions, 4-12
The computer is processing thephysical-perpetual inventory report and is, 6-8
THE CUSTOMER ACCOUNT NUMBER AND TYPE, 1-9
The file named "EASY" with the extension, 1-1
The first of the four calculation methods offered, 8-3
The operation has been completed and the program has automatically, 5-7
The purchase order options are, and that we have entered the purchase, 5-2
The remainderofthequestions havebeen answered, the, 4-9
The series of commands that I had previously entered has taken me back, 2-3
The system displaying an empty general ledger., 2-1
The system displaying the COMPANY'S, 1-13
The system has taken me back to the, 1-7
The system has taken me into the "FINANCIAL, 7-1
The system has taken me into the "POST, 2-4
The system is asking me for the customer code, 3-3
The system is asking me to enter the transaction #, 3-2
The system is asking me whether I want to continue, 3-6
The system is expecting me to enter my selection from the main menu, 3-1
There are several options to sort by, andthat there are several options, 6-3
There are several options to sortby, andthat there are several items to, 6-5
This report is a summary of each miscellaneous code and, 5-14
THREE DIFFERENT JOURNALS PRINTED, 4-11
THREE INFORMATIONAL SCREENS, 5-14
TIME TO ENTER A TRANSACTION NUMBER, 4-3
TITLE OF THE COMPANY MUST BEEN DEFINED, 5-13
To make sure that the system, 1-1
Toexamine, 4-12
TOTAL, 5-10
TOTAL OF EACH PURCHASE RECEIVED AND RETURNED, 5-14
TRANSACTION # 0001, 4-3
TRANSACTION #..., 4-6
TRANSACTION NUMBERS, 2-1
TRANSACTION POSSIBILITIES, 3-2
TRANSFERRING CONTROL OF THE SYSTEM, 1-2




U
UNAUTHORIZED USER PASSWORD, 4-6
USE DATA FROM: 1. BUDGET  2. LAST YEAR, 7-2

V
VENDOR ACCOUNT TYPE, 1-11
VENDOR CODE, 4-6
VENDOR IDENTIFIED BY THE CODE NUMBER, 4-4
VENDOR NAME APPEARS AUTOMATICALLY, 4-7
VENDOR'S INFORMATION, 5-4
View, 5-14
View the "PURCHASE JOURNAL REPORT", which is the total, 5-13

W
WARNING MESSAGE, 6-10
WARNING MESSAGE AND BACKUP FILES, 4-14

Y
Y, 1-4, 2-3, 2-4, 3-5, 3-6, 4-7, 4-8, 4-9, 5-17, 6-10




































```
{% endraw %}

## TABCONT.TXT

{% raw %}
```
                       T A B L E   O F   C O N T E N T S 

  1. FILE CREATION WITH DAC EASY.............................................1-1
     1.1. FUNCTION OF "A>"...................................................1-1
          1.1.1. DIRECTORY OF FILES WITHIN DAC EASY..........................1-1
                 1.1.1.1. DIRECTORY DISPLAY..................................1-1
     1.2. TRANSFERRING CONTROL OF THE SYSTEM.................................1-2
     1.3. DEFINITION OF FILES................................................1-3
          1.3.1. ISSUANCE OF QUESTIONS.......................................1-3
     1.4. ROUTINE FOR RESPONDING TO QUESTIONS................................1-4
          1.4.1. ACTUAL QUESTIONS............................................1-4
     1.5. AMOUNT OF RECORDS TO BE PROCESSED..................................1-4
          1.5.1. Remember that the records are being entered in blocks, so t.1-4
                 1.5.1.1. CONFIRMING THE ENTRIES.............................1-4
                 1.5.1.2. INITIALIZING THE SYSTEM............................1-4
     1.6. END OF INITIALIZATION PROCESS......................................1-5
          1.6.1. LEVELS OF SECURITY..........................................1-5
     1.7. RULE FOR PASSING ENTRIES...........................................1-7
          1.7.1. CREATING AN ACCOUNT.........................................1-7
     1.8. ADDITION OF ACCOUNTS...............................................1-7
          1.8.1. DELETION OF AN ACCOUNT......................................1-8
     1.9. THE CUSTOMER ACCOUNT NUMBER AND TYPE...............................1-9
     1.10. CONFIRMATION OF ENTRIES..........................................1-10
           1.10.1. RETURN TO EMPTY FILE.....................................1-10
                   1.10.1.1. DELETION OF A CUSTOMER.........................1-10
     1.11. PROCESS FOR ENTRIES IN VENDOR FILES..............................1-10
     1.12. VENDOR ACCOUNT TYPE..............................................1-11
           1.12.1. DELETION OF A VENDOR.....................................1-12
     1.13. FIELD ENTRY INSTRUCTION..........................................1-13
     1.14. ROUTINE FOR PRINTING COMPANY NAME................................1-14
           1.14.1. EDITING..................................................1-14
     1.15. COMPLETION OF G/L INTERFACE TABLE................................1-14

  2. GENERAL LEDGER MENU.....................................................2-1
     2.1. TRANSACTION NUMBERS................................................2-1
     2.2. PRINTING REPORTS...................................................2-3
     2.3. POSTED VERSUS UNPOSTED TRANSACTIONS................................2-3
          2.3.1. SUSPENDING THE PRINTER......................................2-3
     2.4. ACCOUNT ACTIVITY DETAIL REPORT.....................................2-4
     2.5. POSTING TRANSACTIONS...............................................2-4
     2.6. GENERAL LEDGER PROCESSING COMPLETION...............................2-4

  3. CUSTOMER'S BILLING & PAYMENTS WITH DAC EASY.............................3-1
     3.1. ACCOUNTS RECEIVABLE DAILY ROUTINES.................................3-2
          3.1.1. BILLING SYSTEM TRANSACTIONS.................................3-2
     3.2. TRANSACTION POSSIBILITIES..........................................3-2
     3.3. APPROPRIATE COMMAND (CODE) SELECTION...............................3-3
          3.3.1. EXECUTION OF ENTRIES........................................3-3
                 3.3.1.1. MAIN MENU DISPLAY..................................3-3
     3.4. GENERATE FINANCE CHARGES...........................................3-4
     3.5. PROCESS TO GENERATE FINANCE CHARGES................................3-4
          3.5.1. ROUTINE FOR POSTING.........................................3-4
     3.6. PRINTING A JOURNAL.................................................3-5
     3.7. PURPOSES FOR THE POSTING PROCESS...................................3-6

  4. GETTING STARTED WITH DAC EASY...........................................4-1
     4.1. ROUTINE USED FOR PAYMENTS..........................................4-2
          4.1.1. MAIN ENTRIES TO ACCOUNTS PAYABLE............................4-2
                 4.1.1.1. ROUTINE TO SET UP AN EXISTING COMPANY..............4-2
                 4.1.1.2. NO WAY TO ENTER BEGINNING BALANCES.................4-2
     4.2. TIME TO ENTER A TRANSACTION NUMBER.................................4-3
          4.2.1. ADDRESS AND PAYMENT TERMS, VENDOR INFORMATION...............4-3
                 4.2.1.1. ENTER ACCOUNTS PAYABLE.............................4-3
     4.3. VENDOR IDENTIFIED BY THE CODE NUMBER...............................4-4
     4.4. ACCOUNTS PAYABLE...................................................4-4
          4.4.1. DEBIT OR CREDIT ACCOUNTS PAYABLE............................4-4
                 4.4.1.1. SAMPLE ENTRY.......................................4-5
     4.5. MAIN ROUTINE OF ACCOUNTS PAYABLE...................................4-5
     4.6. CANCELLATION PROCEDURES............................................4-6
          4.6.1. VENDOR CODE.................................................4-6
                 4.6.1.1. UNAUTHORIZED USER PASSWORD.........................4-6
     4.7. VENDOR NAME APPEARS AUTOMATICALLY..................................4-7
     4.8. CONTROLS THE PRINTING OF ALL THE CHECKS............................4-7
     4.9. PROCESS ACCOUNTS TRANSACTIONS......................................4-8
     4.10. PRINTING CHECKS...................................................4-9
     4.11. FORMAT OF CHECKS.................................................4-10
     4.12. CONTENTS OF CHECKS...............................................4-10
     4.13. THREE DIFFERENT JOURNALS PRINTED.................................4-11
     4.14. INVOICES/TRANSACTIONS IS ACCOUNTS PAYABLE JOURNAL ...............4-12
     4.15. SCREEN FACSIMILES FOR EVALUATION PURPOSES........................4-12
     4.16. DATE AND TIME....................................................4-13
           4.16.1. HEADINGS: TRANSACTION NUMBER, VENDOR CODE, NAME, INVOICE.4-13
                   4.16.1.1. NUMBER OF TRANSACTIONS ........................4-13
     4.17. FACSIMILE PRINT-OUTS.............................................4-14
           4.17.1. POSTING PROCESS AND CHECKS TO PRINT......................4-14
     4.18. WARNING MESSAGE AND BACKUP FILES.................................4-14
           4.18.1. ACCOUNTS PAYABLE.........................................4-14

  5. GETTING STARTED WITH DAC EASY PURCHASE ORDER TRANSACTIONS...............5-1
     5.1. PURCHASE ORDERS OPERATION..........................................5-1
          5.1.1. GL PROGRAM FEATURE TROUBLESOME AT TIMES.....................5-1
     5.2. ROUTINE FOR ENTERING PURCHASE ORDERS...............................5-2
          5.2.1. PURCHASE ORDER PROGRAM CONTROL..............................5-2
     5.3. PURCHASE ORDER #...................................................5-3
     5.4. VENDOR'S INFORMATION...............................................5-4
          5.4.1. NEXT ITEM IS REMARKS........................................5-4
                 5.4.1.1. SHIPPING INFORMATION LINE..........................5-4
                 5.4.1.2. DISC. DAYS, DISC %, AND DUE DAYS...................5-4
     5.5. INVENTORY NUMBER...................................................5-5
     5.6. ROUTINE FOR RECEIVING MERCHANDISE ORDERED..........................5-6
          5.6.1. ENTER MERCHANDISE RECEIVED..................................5-6
     5.7. PURCHASE ORDER NUMBER WE RECEIVED MERCHANDISE FROM.................5-7
          5.7.1. ENTER THE VENDOR CODE.......................................5-7
     5.8. DEBIT INVENTORY AND CREDIT ACCOUNTS PAYABLE........................5-8
     5.9. RETURN MERCHANDISE NOT WISH TO KEEP................................5-8
          5.9.1. AFFECTS ACCOUNTS PAYABLE....................................5-8
     5.10. MERCHANDISE TO DEDUCT FROM INVENTORY..............................5-9
           5.10.1. NO ADVANCES AND REF.......................................5-9
     5.11. BLANK PURCHASE ORDER.............................................5-10
           5.11.1. CONTROL FEATURE..........................................5-10
     5.12. POST PROCESS.....................................................5-11
     5.13. PRINT MORE THAN ONCE   ..........................................5-11
     5.14. SAMPLE FORMS.....................................................5-12
     5.15. TITLE OF THE COMPANY MUST BEEN DEFINED...........................5-13
     5.16. TOTAL OF EACH PURCHASE RECEIVED AND RETURNED.....................5-14
           5.16.1. DATE AND TIME............................................5-14
     5.17. THREE INFORMATIONAL SCREENS......................................5-14
     5.18. POSTING PROCESS..................................................5-15
     5.19. STEPS IN POSTING.................................................5-17
           5.19.1. JOURNAL ENTRY TO THE GENERAL LEDGER......................5-17
     5.20. ROUTINES THAT AFFECT INVENTORY AND ACCOUNTS PAYABLE..............5-17
           5.20.1. DRAWBACKS TO CONTROL.....................................5-17

  6. PRINT-OUT OPERATION OF INVENTORY WITH DAC EASY..........................6-1
     6.1. ROUTINE USED TO PRINT-OUT INVENTORY LISTINGS.......................6-1
     6.2. ROUTINE USED TO PRINT-OUT THE INVENTORY REPORTS....................6-2
          6.2.1. MUST CONVENIENT WAY TO PRINT INVENTORY LISTINGS.............6-2
     6.3. SORTING AND RANKING OPERATIONS.....................................6-3
          6.3.1. PRINT-OUT OPERATION OF INVENTORY ON HAND....................6-3
     6.4. ROUTINE FOR PRICE LISTING..........................................6-4
          6.4.1. INVENTORY ACTIVITY PRINT-OUTS...............................6-4
                 6.4.1.1. ALERT REPORT.......................................6-4
                 6.4.1.2. ROUTINE FOR PHYSICAL INVENTORY ENTRIES.............6-4
     6.5. NO DEFAULT RULE....................................................6-5
          6.5.1. PRINT-OUT IS NOT SCREEN VISIBLE.............................6-5
     6.6. INVENTORY MENU.....................................................6-5
     6.7. ROUTINE FOR HAND WRITTEN ENTRIES...................................6-6
     6.8. ASSIGNING RECORD NUMBERS...........................................6-7
          6.8.1. CANCELLING A RECORD.........................................6-7
     6.9. COMPARING INVENTORY COUNT..........................................6-8
     6.10. INVENTORY MENU DISPLAY............................................6-8
     6.11. DIFFERENCE BETWEEN INVENTORY FROM THE COUNT SHEETS AND THE PERPET.6-9
           6.11.1. FACSIMILE ACTUAL PRINT-OUT................................6-9
                   6.11.1.1. INVENTORY MENU..................................6-9
     6.12. POSTING INVENTORY DIFFERENCES....................................6-10
     6.13. WARNING MESSAGE..................................................6-10
     6.14. ADJUSTING ENTRIES................................................6-11
           6.14.1. NOTICE THE WARNING MESSAGES..............................6-11
                   6.14.1.1. PRINTER ON-LINE DURING THE POSTING PROCESS.....6-11
     6.15. ROUTINE FOR DEFINING THE COST SYSTEM.............................6-12
           6.15.1. ALTERING THE COST SYSTEM.................................6-12
                   6.15.1.1. INVENTORY MENU DISPLAY.........................6-12
     6.16. PURCHASE ORDER NUMBERS...........................................6-13
           6.16.1. AUTOMATIC NUMBERING......................................6-13
                   6.16.1.1. FILE CREATION AND MAINTENANCE..................6-13

  7. PRE-POSTING OF TRANSACTIONS WITH DAC EASY...............................7-1
     7.1. PRE-POSTING OF TRANSACTIONS........................................7-2
          7.1.1. FORMAT 1 AND 2..............................................7-2
     7.2. FORMAT OF THE STATEMENT............................................7-3
     7.3. DAC SOFTWARE SUPPLIES..............................................7-3
     7.4. ACCOUNTS PAYABLE PROCESS...........................................7-4

  8. FORECASTING & SORTING WITH DAC EASY.....................................8-1
     8.1. FORECASTING ROUTINE................................................8-1
     8.2. SORTING OPTIONS....................................................8-2
          8.2.1. SELECTING A SORT OPTIONS....................................8-2
                 8.2.1.1. REASON TO CHOSE ACCOUNTS PAYABLE...................8-2
     8.3. PREVIOUS YEAR SELECTION............................................8-3
          8.3.1. FORECAST....................................................8-3
     8.4. SORTING BY TRANSACTIONS............................................8-4
          8.4.1. PRINT-OUT DISPLAYS..........................................8-4
                 8.4.1.1. FORECASTING MENU DISPLAY...........................8-4
     8.5. INTERPRETATION OF THE COLUMNS......................................8-5
          8.5.1. RETURN TO FORECASTING MENU..................................8-5
     8.6. REVIEW OF THE PROGRAM..............................................8-6



Appendices

  A. INDEX ..................................................................A-1






































                         L I S T   O F   S C R E E N S 

 1-1: A>.....................................................................1-1
 1-2: Display the directory of the disk in the A drive     ..................1-1
 1-3: Load and run the EASY program..........................................1-2
 1-4: DAC EASY ACCOUNTING            ........................................1-2
 1-5: Display another set of menu............................................1-3
 1-6: Issue a set of questions for me to answer..............................1-3
 1-7: Ask me the following question, "ARE YOU SURE?".........................1-4
 1-8: Ask me to define for another set of file                        .......1-5
 1-9: Take me back to the main menu..........................................1-5
 1-10: ACCOUNTS FILE MAINTENANCE.............................................1-6
 1-11: Create an account according to the given specifications...............1-7
 1-12: Take me back to the "FILE CREATION AND MAINTENANCE"...................1-8
 1-13: CUSTOMER FILE MAINTENANCE.............................................1-8
 1-14: Display the available information for the customer....................1-9
 1-15: Take me back into the "VENDOR FILE MAINTENANCE" module ..............1-10
 1-16: VENDOR FILE MAINTENANCE..............................................1-11
 1-17: Take me into the PRODUCT FILE CREATION module of the system..........1-12
 1-18: PRODUCT FILE MAINTENANCE.............................................1-12
 1-19: Take me into the COMPANY'S IDENTIFICATION routine....................1-13
 1-20: Take me into the General Ledger Interface Table......................1-14

 2-1: DAC EASY ACCOUNTING....................................................2-1
 2-2: G/L TRANSACTION ENTRY  JOURNAL CODE:     TRANSACTION #           DATE:.2-1
 2-3: G/L TRANSACTION ENTRY  JOURNAL CODE: GL  TRANSACTION #  01   DATE:   8.2-2
 2-4: PRINT G/L JOURNALS.....................................................2-2
 2-5: Print the transactions in the journal..................................2-3
 2-6: Print the report.......................................................2-4

 3-1: DAC EASY ACCOUNTING                  ..................................3-1
 3-2: Load the routine for me................................................3-1
 3-3: Load process No. 1 for me..............................................3-2
 3-4: Automatically assigned a new available number    ......................3-3
 3-5: Bring up the name of the existing customer.............................3-3
 3-6: Load this operation for me.............................................3-4
 3-7: Come up with a message.................................................3-5
 3-8: Proceed with my option.................................................3-5
 3-9: Print the journal......................................................3-6
 3-10: Come up with the last operation.......................................3-6
 3-11: Continue with the posting.............................................3-7

 4-1: DAC EASY ACCOUNTING....................................................4-1
 4-2: Return with the "ACCOUNTS PAYABLE" menu             ...................4-1
 4-3: Return with "ENTER INVOICES AND TRANSACTIONS"..........................4-2
 4-4: Return with the transaction number.....................................4-3
 4-5: Return with the completed transactions.................................4-4
 4-6: End the transaction....................................................4-5
 4-7: Return with the "ENTER CHECKS TO PRINT" option.........................4-5
 4-8: ACCOUNTS PAYABLE CHECKS TO PRINT.......................................4-6
 4-9: DAC EASY ACCOUNTING....................................................4-7
 4-10: ACCOUNTS PAYABLE PRINT CHECKS.........................................4-8
 4-11: ACCOUNTS PAYABLE PRINT CHECKS.........................................4-8
 4-12: ACCOUNTS PAYABLE PRINT CHECKS  .......................................4-9
 4-13: "XXXXX"..............................................................4-10
 4-14: DAC EASY ACCOUNTING..................................................4-11
 4-15: ACCOUNTS PAYABLE JOURNALS............................................4-11
 4-16: Return with the "INVOICES/TRANSACTIONS" option.......................4-12
 4-17: JUAN, BOMB & FERUT INC...............................................4-12
 4-18: DAC EASY ACCOUNTING..................................................4-13
 4-19: POST A/P TRANSACTIONS  ..............................................4-14

 5-1: DAC EASY ACCOUNTING ...................................................5-1
 5-2: Return with the purchase order menu....................................5-2
 5-3: PURCHASE ORDER # ......................................................5-2
 5-4: PURCHASE ORDER # 00001  ...............................................5-3
 5-5: PURCHASE ORDER # 00001.................................................5-4
 5-6: DAC EASY ACCOUNTING....................................................5-5
 5-7: MERCHANDISE RECEIVED FROM PURCHASE ORDER #.............................5-6
 5-8: MERCHANDISE RECEIVED FROM PURCHASE ORDER # 00001.......................5-7
 5-9: DAC EASY ACCOUNTING....................................................5-8
 5-10: Return with the "ENTER RETURNS" routine...............................5-9
 5-11: Enter the next available purchase return number ......................5-9
 5-12: DAC EASY ACCOUNTING..................................................5-10
 5-13: Return with option 5.................................................5-11
 5-14: Return with the default values.......................................5-12
 5-15: Return to the purchase order menu....................................5-12
 5-16: JUAN, BOMB & FERUT INC...............................................5-13
 5-17: JUAN,BOMB, & FERUT INC...............................................5-14
 5-18: DAC EASY ACCOUNTING..................................................5-15
 5-19: POST PROCESS.........................................................5-15
 5-20: Post.................................................................5-17

 6-1: DAC EASY ACCOUNTING....................................................6-1
 6-2: Return with with the "ACCOUNTS PAYABLE" menu...........................6-1
 6-3: Return with the "PRICE ASSIGNMENT" option..............................6-2
 6-4: Return to the "INVENTORY" menu.........................................6-3
 6-5: COUNT SHEETS                        ...................................6-4
 6-6: Print-out the count sheets  ...........................................6-5
 6-7: DAC EASY ACCOUNTING....................................................6-6
 6-8: Return with option 7...................................................6-6
 6-9: DAC EASY ACCOUNTING....................................................6-7
 6-10: PERPETUAL-PHYSICAL COMPARATIVE REPORT.................................6-8
 6-11: JUAN,BOMB & FERUT INC.................................................6-8
 6-12: DAC EASY ACCOUNTING...................................................6-9
 6-13: POST PHYSICAL INVENTORY TO PERPETUAL.................................6-10
 6-14: POST PHYSICAL INVENTORY TO PERPETUAL         ........................6-10
 6-15: DAC EASY ACCOUNTING..................................................6-11
 6-16: DEFINE COSTING SYSTEM................................................6-12
 6-17: DATE 04-01-86                                                 TIME 0.6-12
 6-18: ENTER THE LAST NUMBER OF:............................................6-13

 7-1: DATE 05-04-86                                                      TIM.7-1
 7-2: FINANCIAL STATEMENTS...................................................7-1
 7-3: FINANCIAL STATEMENTS...................................................7-2
 7-4: Print the financial statement..........................................7-2
 7-5: Print the design of the Profit & Loss Statement........................7-3




 8-1: DAC EASY ACCOUNTING                      ..............................8-1
 8-2: Return with the "FORECASTING" option...................................8-1
 8-3: DAC EASY ACCOUNTING....................................................8-2
 8-4: DATE 04-01-86                                                 TIME 08:.8-3
 8-5: Return to the main menu                            ....................8-4
 8-6: JUAN,BOMB & FERUT, INC.   .............................................8-5
 8-7: DATE 04-01-86                                                 TIME 08:.8-5






































































































```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1294

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       147   1-01-80   5:35a
    CHAP1    TXT     30976   1-01-80  12:04a
    CHAP2    TXT      9472   1-01-80  12:05a
    CHAP3    TXT     15232   1-01-80  12:07a
    CHAP4    TXT     34432   1-01-80  12:09a
    CHAP5    TXT     41344   1-01-80  12:11a
    CHAP6    TXT     30080   1-01-80  12:14a
    DISPLAY  BAT       267   1-01-80   5:29a
    FILE1294 TXT      1030   2-23-89  12:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002  12-20-88   2:47p
    INDEX    TXT     17664   1-01-80  12:17a
    PRINTALL BAT       241   1-01-80   3:25a
    PRINTEXT BAT       241   1-01-80   3:25a
    READ     ME      10111   1-01-80   9:07a
    TABCONT  TXT     23040   1-01-80  12:15a
           16 file(s)     215317 bytes
                           97280 bytes free
