---
layout: page
title: "PC-SIG Diskette Library (Disk #1856)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1856/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1856"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "WYS-AR"

    This accounts receivable program is based on a very simple concept,
    "What you see" in the data record windows is what you will get in your
    statements and reports. Being able to see the account records in
    scrolling record windows makes the program very easy to use. The
    program also uses many lookup tables to further enhance its ease of use.
    
    The concepts used in the program eliminate many extra steps needed in
    programs of this type. No journals to post. No periods to close. No
    loss of your existing charges by month end closeouts. No 30, 60, or 90
    day aged totals only. You decide the closing dates to print on your
    statements.
    
    This program is designed to keep all outstanding charges for visibility
    in record tables and for report purposes. The program offers virtually
    unlimited record capacities for maintaining large files if needed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1856.TXT

{% raw %}
```
Disk No: 1856                                                           
Disk Title: WYS-AR                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: WYS-AR                                                   
Author Version: 1.0                                                     
Author Registration: None.                                              
Special Requirements: 512 K RAM.                                        
                                                                        
This accounts receivable program is based on a very simple concept, What
You See in the data record windows is what you will get in your         
statements and reports.  Being able to see the account records in       
scrolling record windows makes the program very easy to use.  The       
program also uses many lookup tables to further enhance it's ease of    
use.                                                                    
                                                                        
The concepts used in the program does away with many extra steps needed 
in programs of this type.  No journals to post.  No periods to close.   
No loss of your existing charges by month end closeouts.  No 30, 60, or 
90 day aged totals only.  No need to keep from continuing to enter daily
charges either.  You decide the closing dates to print on your          
statements.                                                             
                                                                        
This program is designed to keep all outstanding charges for visibility 
in record tables and for report purposes.  The program offers virtually 
unlimited record capacities for maintaining large files if needed.      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WYS-AR.DOC

{% raw %}
```




                                       WYS-AR
                                    Version  1.0

             This accounts receivable program is based on a very simple
        concept, What You See in the data record windows is what you will
        get in your statements and reports.  Being able to see the account
        records in scrolling record windows makes the program very easy to
        use.  The program also uses many lookup tables to further enhance
        it's ease of use.

             The concepts used in the program does away with many extra
        steps needed in programs of this type.  No journals to post.
        No periods to close.  No loss of your existing charges by month
        end closeouts.  No 30, 60, or 90 day aged totals only.  No need
        to keep from continuing to enter daily charges either.  You
        decide the closing dates to print on your statements.

             This program is designed to keep all outstanding charges for
        visibility in record tables and for report purposes.  The program
        offers virtually unlimited record capacities for maintaining large
        files if needed.

             Two types of statements are provided for...a small and fairly
        standard (6-1/2 x 7) and letter size.  Should you decide to use the
        program, simply print out a few samples and take them to your local
        printer.  The program is designed to print continuous forms.  Your
        local printer should be able to help you design your own unique
        company letter head with logos and credit terms.  If you have many
        charges per customer, you will probably want to use the larger
        size.  Five blank lines are available at the bottom of both formats
        for additional company information.  The larger format could be used
        right away with a simple company name and address rubber stamp.

             Requirements for this program are 512k ram, hard disk or two
        drives.  A proper CONFIG.SYS file must also be in the root directory
        for the added files and buffers needed by the program.  If you have
        problems running the program, see CONFIG.SYS below.

             Please read the following instructions for using the program.
        Once you are familiar with the use of the various keyboard keys used
        in the program, you should be well on your way.

             If you like this program, send 35.00 and you will be sent the
        registered version.  It has added report options such as single
        account listing, optional beginning and ending dates for the summary
        and detailed reports in this version.  This will allow you to print
        aged or past due amounts as far back as your accounts allow, or use
        them for monthly reports if needed...any period you wish.


                                       I. J. Smith
                                       9795 Rustling Oaks
                                       Baton Rouge, La. 70818












                               FUNCTION KEY USAGE

            The following keyboard keys are used in the multiple record
       table windows.  A popup window will appear from these keystrokes.
       A description of the action will appear in this window such as
       'This record will be added' or 'Press ENTER to delete'.  You can
       press the ESC key to cancel or in the case of the deletion, press
       ENTER and the record is then removed.  You may find it easier to
       add records by being situated where you want to add the record...
       thus the use of the INSert key.


                   KEY       FUNCTION
                 -------     ---------------------------------------------
                 INSert      Used for adding new records.  Record will
                             automatically be inserted in proper position.

                 DELete      Used for deleting highlighted records.

                 ENTER       Used for changing highlighted record.

                 ESC         Cancel or exit.

                 ARROWS      These keys are used to scroll thru the records
                             one at a time.

                 PgUp        Displays previous window of records.

                 PgDn        Displays next window of records.

                 CTRL PgUp   Displays records from beginning of file.

                 CTRL PgDn   Displays records from end of file.

                 LOCATOR     Locator fields are used to locate records more
                             quickly.  As you enter the number desired, the
                             program will try to highlight the record or the
                             nearest one found.

            The data entry windows are fairly straight forward.  You simply
       add or change data as needed with the ENTER key.  Use of the ESC key
       can also restore data if you wish.  The ARROW keys can also be used to
       step thru the data fields.  If your data is correct, you can also
       press CTRL ENTER and not have to step thru the fields.

            Lookup fields are also used thru-out the program.  If prompted
       for an estimate number for example, you can enter the estimate number
       desired or if blank simply press ENTER.  Choices will then be displayed
       in a table.  Some field choices such as DESCRIPTIONS are shown with
       the acceptable choices.  Use the arrow keys to highlight your choice.

            New records will not always display when inserting new ones.  Use
        the combination CTRL-PgUp keys to refresh the display as needed.













                                 FIRST THINGS FIRST

             The first thing you will need to do is establish a customer file.
        A five position numbering system is used to identify the customer
        records.  You can use letters and numbers for this purpose.  You will
        find that using one or two letters from your customer's last name
        along with numbers helpful in the use of the program.  When prompted
        for an account number in the charge or payment entry window for
        example, you could enter  SM  and the program may highlight the
        first SMiths in your file.  This could save considerable time from
        scrolling or paging thru the records to find accounts.  Only upper
        case letters are allowed along with no duplicates of course.

             A twenty five character field is allowed for customer names.
        Due to the nature of this program, no duplicates are allowed.  It
        would be very easy otherwise to enter charges or payments to the
        wrong account.  You will need to make slight changes in the names if
        you have duplicate name accounts.

             Other information such as mailing address, phone number and
        contacts should be entered in the customer records also.  You will
        also notice a label field in the customer records.  This allows you
        to tag the accounts you wish to print labels with...Yes or No.

             You should also enter a couple of descriptions that will be used
        when entering charges and payments.  Use the Description option of
        the main menu for this purpose.  For now, try entering Invoice and
        Payment.  You can always add or change any as needed.  Using a few
        simple uniform descriptions will make it easier to see differences
        in the record tables.  You may also want to enter Returns to use for
        credit memos if used.

                                       CHARGES

             To start off with, you will have to enter beginning balances of
        your accounts.  You have the choice of simply entering the total
        balance amounts or outstanding invoices with their dates.  Your
        choice.  Keep in mind that the statements will print What You See.

             As explained above, use the INSert key for adding new records.
        If no records exist, the data entry window will automatically pop up
        for your first entry.  Lookup tables are provided for the customer
        number and description fields.  Simply press ENTER at the prompt for
        choices if desired.

             Use the date prompts properly as you may want to print reports
        based on only certain dates.  If your charges are entered daily,
        this becomes important to print reports on that day's activity only.

             An optional reference field is provided for invoice numbers or
        or other needs.

             If you need to enter credit memos or in some cases payments,
        enter the amount and press the minus key.  It acts like the enter
        key and will display the amount with a trailing minus sign.











                                      PAYMENTS

             Depending on your particular situation, you could always simply
        delete the individual charges to an account to apply payments.  You
        may even have to in order to remove only selected paid amounts.

             The Payments option of the main menu allows you to enter payments
        and let the program process them for you.  You can also print a report
        of the payments for your records prior to processing them.  Payment
        records are deleted as they are applied so make sure you print a
        report first if desired.  The program will apply payments to the
        oldest charges first.  The charges will be deleted until the amount
        of the payment is satisfied.  If overpaid, the overpayment will be
        reflected in the charges table as a minus amount.  If underpaid, the
        program will apply the balance of payment to the next oldest charge.
        While applying the payment, the program will pick up any credits and
        continue to remove charges until exhausted.

        Note:  Underpayments will change the last charge amount to reflect
               the balance of the outstanding amount only.

                                       LABELS

             As described above, mailing labels of your customers can be
        printed if desired.  Only accounts whose Labels field read "Y" will
        be printed.  Program will print standard roll labels, 6 lines and
        one across.

                                     STATEMENTS

             As described earlier, What You See in the charges data table
        will be printed on the chosen size statements.  You will have the
        option of entering a more descriptive date to be printed on the
        statements.  You will also be allowed to enter the last date you
        want printed on the statements.  You could thus enter charges beyond
        the date you want to use for your statements.

                                       REPORTS

             The Daily report option will prompt for the date you wish to
        print a report of your charges.

             The full reports should be self explanatory.  They will print
        all records in the charges file either in full detail or by total
        amounts only.  See registered version info above for more available
        options.

                                  SINGLE ACCOUNT

             The single account option of the main menu allows you to view
        a single customer account and print a report of the account.  You
        do not want to use this procedure for normal data entry since it
        may be too slow for that purpose.  As displayed above the table,
        you can press the F5 function key to print the report.

             Note:  The above report is only available with the registered
                    version, see above.









                                  SCREEN BLANKER

             The program has a built in feature that will blank the monitor
        screen after 10 minutes of inactivity.  This feature is to help
        protect your screen from burn in.  Simply press one of the arrow
        keys to refresh the screen display.

                                 TWO FLOPPY DRIVES

             Those wanting to use the program with dual floppy drives can
        place the program disk on drive B and the data disk in drive A.
        Simply enter  B:WYS-AR  at the A drive prompt.

                                  CONFIG.SYS file

            As stated above, the program will not work without a proper
       CONFIG.SYS file in your root directory.  It should contain lines of
       code such as:
                        files=24
                        buffers=16

            You can use your editor to check for these lines of code.  The
       numbers are not critical and can be less.  What's important is that
       you have this file.  You can check for it's existence by simply
       entering  TYPE CONFIG.SYS  at the prompt of your root directory.  If
       DOS returns a file not found message, you can copy the CONFIG.DTA
       file included with this application.  After it has been copied into
       your root directory, rename it CONFIG.SYS.  You must restart your
       system for this file to take effect.


            I hope you like the program.  Thank you for your support.


                                       I. J. Smith



         ================================================================
                                     DISCLAIMER
         ----------------------------------------------------------------
         USER ASSUMES ALL LIABILITIES IN THE USE OF THIS APPLICATION. DUE
         TO THE NATURE OF THIS PROGRAM AND THE MANY VARIOUS COMPUTERS AND
         OPERATING SYSTEMS BEING USED, IT IS THE USER'S RESPONSIBILITY TO
         INSURE THE FITNESS OF THE PROGRAM FOR IT'S INTENDED PURPOSE. THE
         APPLICATION HAS BEEN TESTED.     HOWEVER, IT IS STILL THE USER'S
         RESPONSIBILITY TO UNDERSTAND AND USE IT PROPERLY.  NO WARRANTIES
         ARE EXPRESSED OR IMPLIED.  AS WITH ALL COMPUTERS, BACKUPS OF ALL
         IMPORTANT DATA FILES SHOULD BE MADE PERIODICALLY.
         ================================================================

         Other programs by this author you may wish to look into:

                SPC-INVENTORY PLUS          Inventory, Purchases and Sales.
                                            Many features and reports.

                SALES-BIZ                   Sales tracking program for
                                            products, customers, contacts,
                                            logs, etc.  Program features as
                                            found in this program.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1856

     Volume in drive A has no label
     Directory of A:\

    WYS-AR   ARC    209754   7-16-89   8:10p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80  12:54a
    FILE1856 TXT      2369  12-22-89  10:40a
            4 file(s)     212855 bytes
                          107520 bytes free
