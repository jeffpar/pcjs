---
layout: page
title: "PC-SIG Diskette Library (Disk #2211)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2211/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2211"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE BILLING STATEMENT"

    When you need a quick way to bill customers for time, services, or
    products, THE BILLING STATEMENT is an easy-to-use program for
    producing standard billing statements. The bills can be printed on
    plain or letterhead stationery. Track client accounts for one entire
    year. Individual charges and credits up to $100,000 and all balances
    and totals can be as much as $1,000,000.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2211.TXT

{% raw %}
```
Disk No: 2211                                                           
Disk Title: The Billing Statement                                       
PC-SIG Version: 1                                                       
                                                                        
Program Title: The Billing Statement                                    
Author Version: 11/89                                                   
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
When you need a quick way to bill customers for time, services, or      
products THE BILLING STATEMENT is an easy to use program for producing  
standard billing statements. The bills can be printed on plain or       
letterhead stationery. It also tracks client accounts for 1 entire year.
Individual charges and credits can be up to $100,000. And all balances  
and totals can be up to $1,000,000.  You can have up to 50 accounts if  
you use the program on floppy disk, but running on a hard drive is best.
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## STMT2SW.DOC

{% raw %}
```
                        The Billing Statement     
                        Vers: Shareware

                        Copyright 1989 A.P. Software
                                       P.O. Box 205
                                       Westford, Ma. 01886
                                       (508) 692-3726

System Requirements: IBM PC/XT/AT/jr or compatible with 256 K memory
                     DOS 2.0 or greater
                     5 1/4 inch disk drive
                     A printer is not required but recommended.

THE SHAREWARE VERSION IS A COMPLETE WORKING BILLING PROGRAM WITH FEWER
FEATURES THAN THE REGISTERED VERSION.

The registered version contains the following additional features:

                60 Item Entries for Each Bill
                A Message Placed on the Bottom of All Bills
                Printing of Address Labels
                Autoentry for Identical Charges/Credits
                Sorting of Client Address Information
                Select an Account Range to Erase, View or Print Reports
                Erase Account Data While Retaining Account
                Bring Balance Forward on Accounts
                Yearly Activity and Age of Balance Due(Receivables) Reports
                Changing Client Account Numbers
                Operation with Separate Program and Data Disks 

To obtain a copy of the latest registered version send  $ 35 to:

                             A.P. Software
                             P.O. Box 205
                             Westford, Mass. 01886

1.0 Introduction
----------------
    The Billing Statement is an easy to use program for producing standard
    billing statements. The bills can be printed on plain or letterhead
    stationery. It also tracks client accounts for 1 entire year.  Individual
    charges and credits must be less than $100,000.  All balances and totals
    must be less than $1,000,000. Multiple copy paper may be used providing
    your printer can produce enough pressure to write on the additional
    copies.

    If the system is installed on hard disk, there is no limitation on the
    number of client accounts that may be opened. If the system is used
    directly from a floppy disk, with only 1 drive, there is a maximum of 50
    accounts that may be stored on disk. (This is a function of the amount of
    disk space each file requires. If your accounts have only a few entries
    then you may get more than 50). With the registered version, if you use a
    separate data disk and program disk then the maximum number of accounts is
    112.(This is a function of the directory storage on your floppy. If your
    files are large then you may run out of disk space before you reach 112
    accounts.) For more information see section 5.0 FILES.

    Please send all comments and suggestions for enhancement and improvement
    to A.P. Software at the above address. With your help we can continue to
    improve our products.







    A.P. Software maintains a copyright on this program and will not be held
    responsible for any damages incurred. You may freely distribute this
    shareware version.


2.0 Installation Procedure
---------------------------
    2.1 One or Two Floppy Drive System
    ---------------------------
        There is no installation or setup necessary. Create a back-up disk.
        Put the original in a safe place. Put The Billing Statement in the
        active drive.

    2.2 Separate Program and Data Disks/Two Floppy Drive System
    ---------------------------
        Separate program and data disk operation is only available with the
        registered version. A setup program is provided to allow you to select
        the disk drive for data.

    2.3 Hard Disk Installation
    --------------------------
        Create a separate directory on your hard disk for the program.
        Copy the following files to the directory.

         STMT2SW.EXE      COMPANY.DAT        ACCOUNT.FIL

        All the client data files will be placed in this directory.


3.0 Starting the Program
------------------------
    One/Two Drives: Boot your DOS. Place program disk in A. Type STMT2SW. Hit
    return.
    Hard Disk: Type STMT2SW

    The introductory screen appears with the present date displayed on the
    left hand side. If you have a system clock and it is working correctly,
    the correct date should appear. If you do not have a system clock, the
    current date of the system will be shown. If that is not the correct date,
    please enter the correct date. The format is MM/DD/YY. MM is month and
    requires a number from 1-12. DD is the day and requires a number from
    1-31. YY is year and requires a number from 88-99. Leading 0's are not
    necessary. Please use the correct format including / as shown.
    Be aware that this date is used on all statements 


4.0 Main Menu
-------------
    The Main menu appears with  7 options as described below.

    4.1 Enter/Edit Billing Company Data
    ------------------------------------
        This allows you to enter all the necessary data about your company.
        Selecting E allows the entering and editing of the information. The up
        and down arrow keys allow you to move through the editing easily.
        While editing an item, hitting any key will completely erase that
        item. You must then retype an entry or the item will remain blank.
        The F10 key can be used at any time to end the editing process.







        There are 5 lines available for your company address and 1 line for
        Tel #/Fax #. Each entry will allow up to 30 characters. If you use
        plain paper, your Billing Company Data will be centered at the top of
        each bill. If you intend to use pre-printed letterhead stationery, you
        must blank out these 6 entries. ( To do this move the cursor to each
        line of entry and hit any key just once. ) Furthermore, the
        pre-printed letterhead must not be greater than 2 inches in length.

        Selecting S will save the data. You do not have to save this
        information however it is a very good idea to do so. 

        Selecting R will return control to the main menu. Hitting ESC will do
        the same. 

    4.2 Open a New Client Account
    -----------------------------
        This allows you to enter/edit and save data for all your new accounts.
        You must create an account before you can produce a billing statement.
        The E/S/R commands and F10 key operate identical to 4.1 above.
        This option can only be used on a new account. If you wish to edit
        data for an existing account, see 4.3

        Each entry contains 5 lines for Client Address, 1 for Attention, 1 for
        Tel. #/Fax. # and 1 for Account #. With the exception of the account
        number, all 7 fields can accomodate up to 30 characters. Consistency
        should be used when entering address information. For example, line 1
        should be used for company name, line 2 for street address, etc.
        (This will be useful when sorting, available on registered version)

        You may select any account number from 1-9999999. The maximum is 7
        digits in length. No spaces are allowed.  The data MUST be saved
        before you can create a billing statement.

        Accounts are stored in the sequence in which they are created. All
        reports are created using this sequence. 

    4.3 Work on an Existing Client Account
    --------------------------------------
        This allows you to edit client account data as well as enter/edit
        items in the billing statement. Once selected you must enter an
        account # to work on. After the account has been verified, you must
        select whether you want to E-edit client address data or M-make
        entries to the statement.

        E will allow you to edit any data about the selected account. The
        E/S/R and F10 keys operate as described in 4.1 .

        M will allow you to work on the actual statement and its entries.
        The first 10 items of the selected account are displayed along with
        the current Final Balance. The number of items and date are shown at
        the top of the screen.

        You will have 8 actions to chose from.

           S-Saves the current statement entries
             If you want these entries to be permanently recorded in this
             account, you MUST save these entries BEFORE returning to the Main
             Menu.








           E-Enter the next item on the statement
             Each item requests 4 entries to be complete
             Type denotes a charge or credit to the account. It MUST be C or
             R. You cannot leave this empty.
             Date is of the form MM/DD/YY as described in 3.0
             Desc is 35 chars of any descriptive phrase
             Amount is the dollar value for the entry. (less than $ 100,000)
             After an item is entered, the statement and Final Balance are
             updated. The maximum number of entries for a statement is 30.
             (The registered version can store 60 entries per statement)

           M-Modify any item on the statement
             Allows you to alter any entry. The up and down arrow keys allow
             you to move throught the editing easier. While editing an item
             hitting any key will erase that item. It must be re-entered or it
             will remain empty. The exception is the Type. It MUST be C or R.
             F10 will return you from the editing. After an item is modified,
             the statement and Final Balance are updated.

           D-Delete any item on the statement
             You may delete any line item. You are asked to verify Y/N if this
             is the item to be deleted. Once deleted it may not be recalled.
             After an item is deleted, the statement and Final Balance are
             updated.

           P-Print the statement
             You may print the current statement as it shown. 

           R-Return to Main Menu

           --> Display the next 10 statement entries

           <-- Display the previous 10 statement entries

    4.4 Print Billing Statements
    ----------------------------
        This allows you to select and print billing statements. You may select
        A-All Accounts  S-Single Account or R-Return. If you select a single
        statement, you must supply the account number. Please make sure that
        the Top of Form is set on your printer. While printing, you may cancel
        with the F10 key.

        Remember that your Billing Company Data will appear centered on each
        bill. If you are using pre-printed letterhead paper, make sure that
        the data is blank. (See 4.1). Your Billing Company Data Address Line 1
        and Tel. # appear on the last line of each bill. The statements are
        designed to be used in standard business size window envelopes. Just
        fold the sheet into thirds and the account address will appear through
        the envelope window.

    4.5 Erase a Client Account
    --------------------------
        This allows you to erase accounts completely.  You select A-All
        Accounts  S-Single Account or R-Return ( See 4.4 ). 

        Before any accounts are permanently erased you are prompted with a
        reminder. Answer Y if you wish to continue and erase an account or
        accounts. Answer N if you do not wish to erase any accounts.








    4.6 View/Print Client Account Data
    ----------------------------------
        You may select  A-All Accounts  S-Single Account or R-Return. Then you
        select a screen report or printed report. The report consists of all
        the address information, account number and telephone number for all
        accounts. The F10 key will cancel the printed report or halt scrolling
        on the screen report. The screen report can be un-frozen by hitting
        any key.

    4.7 View/Print Activity Summary of All Client Accounts
    ------------------------------------------------------
        You may select  A-All Accounts  S-Single Account or R-Return. Then you
        select a screen report or printed report.

        The Monthly report requires you to select a month from 1-12.
        The report consists of ALL entries, charges and credits, made to all
        accounts during the selected month. Subtotals for each client are
        calculated and printed. A Final Total of all subtotals for the
        selected month is also calculated and printed.

        If you have a large number of accounts, these reports may not be
        available instantaneously. The program must continually access the
        disk looking for your files. Please allow the program a few seconds
        of time, for each file, in order to complete the report. The F10 key
        will cancel the printed report or halt scrolling on the screen report.
        The screen report can be un-frozen by hitting any key.

5.0 Files
---------
    The program uses the following files:

        STMT2.EXE    COMPANY.DAT    ACCOUNT.FIL 

    It also creates a new file for every account that is opened and saved.
    These files have the name A#######.DT1.  The ####### represents the
    account number for that data. Each account file A#######.DT1 can hold up
    to 60 entries. A file with 60 entries requires about 4.1 k of disk
    storage. Therefore if all your files will contain maximum capacity,
    approx. 90 files ( 360/4 ) can be placed on a separate data disk.

    The above 4 files must be located in the same directory. Account.dat
    increases in size with each new account. It gains approx. 100-150
    bytes for each account. Company.dat remains approx. the same in size.


































```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2211

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        38   4-24-89   4:39p
    GO       TXT       617   6-08-90   3:49p
    ACCOUNT  FIL         1  11-04-89   2:46a
    COMPANY  DAT        72  11-04-89   2:49a
    STMT2SW  DOC     14336  11-04-89   2:58a
    STMT2SW  EXE    124248  11-01-89  12:36a
    FILE2211 TXT      1703   6-08-90   3:45p
            7 file(s)     141015 bytes
                           16896 bytes free
