---
layout: page
title: "PC-SIG Diskette Library (Disk #1984)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1984/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1984"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COST-BIZ"

    This job cost program is intended for those needing an easy to use,
    stand alone job cost program. The program provides for four types of
    cost records: equipment, labor, materials and subcontractor costs. It
    also includes the option for percentages or quantities to be used in the
    cost items. Various reports are provided for either cost method used,
    both can be used if desired.
    
    The program is very straightforward with four basic steps: add a job
    name record, add job cost records, enter and process transactions, and
    print reports as needed.
    
    The files used have virtually unlimited record capacities for large
    applications. It features automatic searching of tables and scrolling
    record windows for ease of use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COSBIZ.DOC

{% raw %}
```






                                      COST-BIZ
                                    Version  1.2

             This job cost program is intended for those needing an easy to
       use, stand alone job cost program.  It uses auto look up tables and
       scrolling record windows for ease of use.  The program provides for
       four types of cost records;  Equipment, Labor, Materials and Sub-
       contractor costs.  It also includes the option for percentages or
       quantities to be used in the cost items.  Various reports are provided
       for either cost method used, both can be used if desired.

             Requirements for this program are at least 512k RAM and a wide
       printer.  A hard disk is highly recommended for speed and capacity.
       The files used have virtually unlimited record capacities for large
       applications.  You will also need a proper CONFIG.SYS file in your
       root directory as described below.

             If you have a color system and this program does not come up
       in color, try entering  MODE CO80  just prior to running the program.

             Although the program will generate the needed data files,
       sample data files are included to familiiarize yourself with the
       program.  The automation used in the program can be very confusing
       without records until you understand how it all works.  I recommend
       creating a separate directory on your hard disk and copying all the
       files into it.

             Please read the following instructions before using, especially
       the section explaining the use of the keyboard keys in the program.

             The program is very straight forward with simple basic steps.

                 1.  Add a Job Name record.          Main Menu option 2
                 2.  Add Job Cost Records.            ''   ''    ''   3
                 3.  Enter and process transactions.  ''   ''    ''   1
                 4.  Print reports as needed.         ''   ''    ''   4


                             ENHANCED REGISTERED VERSION

             If you like this program, send 35.00 and you will be sent the
        registered version.  It provides the added capability of printing
        the actual and estimated totals of each cost type in the main reports.

             Your support is appreciated.  Feedback is welcome.

                               I. J. Smith
                               9795 Rustling Oaks
                               Baton Rouge, La. 70818

                             _ _ _ _ _ _ _ _ _ _ _ _ _












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
                             program will highlight the nearest record found.
                             This can be very useful when entering transactions
                             so as to highlight the first job number record.

            The data entry windows are fairly straight forward.  You simply
       add or change data as needed with the ENTER key.  Use of the ESC key
       can also restore data if you wish.  The ARROW keys can also be used to
       step thru the data fields.  If your data is correct, you can also
       press CTRL ENTER and not have to step thru the fields.

            Lookup fields are also used thru-out the program.  If prompted
       for a job number for example, you can enter the job number desired
       or if blank simply press ENTER.  Choices will then be displayed in a
       table.  Some field choices such as the job cost item for transactions
       will automatically place the job cost file table on the screen for
       your choices.














                                    JOB NAME FILE

             Job name records consist of the job number, job name and owner.
       Enter, change and delete records as described above.  Jobs are kept in
       the order of the job numbers.  You may use letters as well as numbers.
       NOTE:  DELETIONS WILL ALSO DELETE ALL RELATED JOB COST RECORDS AS WELL.
              This eliminates having to singly delete job cost records when a
              job is complete and no longer needed.


                                    JOB COST FILE

             Job cost records consist of the following described fields.

             The Job Number is the same number established in the job name
       record described above.

             The Item Number is the primary cost or bid item you wish to use.
       You are also allowed Sub Item numbers to be used for various cost
       component or phase costs to be used with the main item number.  This
       allows for many cost records to be used for each item.  Four types
       of costs are allowed;  'E' for equipment, 'L' for labor, 'M' for
       materials and 'S' for subcontractor costs.

             The above fields identify each particular record.  No duplicates
       are allowed.  Please note that you can have identical numbers for the
       four cost types used.

             Enter item and unit descriptions as desired.

             Enter estimated quantities and total amounts as estimated when
       the job was quoted or bid.

             The actual fields are normally kept up by the transactions.
       When entering new job items, simply press CTRL-ENTER to bypass entries
       in these items.  Maintain as needed.


                                     TRANSACTIONS

             Transactions are entered as described above.  When entering new
       transactions, the program will automatically display the job cost
       record table for your choices.  You may enter percentages, quantities
       and amounts as needed.  A reference field is also required and can
       be useful for listings to check out totals entered, record purposes,
       etc.  You will notice that when entering new transactions the previous
       reference is displayed.  It is a default and can be accepted by
       pressing Enter when prompted.

             You are not required to make entries in all fields.  Some may
       want to enter and process only quantities or percentages when required.
       Minus amounts can be entered by pressing the minus key instead of the
       Enter key after entry.  Please note that percentages are represented
       by decimal amounts, with 1.000 being 100%.

             Two printed listings are provided for the transactions...by job
       or by references.   The listings by reference can be very useful for
       checking invoice amounts, dated entries, etc.








             Processing transactions will post the percentages, quantities
       and amounts to the job cost records.  The transactions will be deleted
       by this step.  Make sure you have printed the listings required for
       your records before choosing this option.  Cost transactions must be
       processed before they will be reflected in the job cost reports
       described below.


                                    REPORTS MENU

             You will be prompted for the job number of the report wanted.

             The reports by quantities and percentages should be self
       explanatory.  The estimated columns are based on the actual quantities
       or percentages posted to the job cost records.  This provides a good
       report for monitoring actual versus estimated costs to date.  The
       registered version also prints the totals of each cost type for further
       comparisons.

             Reports are also provided for each type of costs desired.

             The 'Amounts Only' report will print total costs to date and
       total estimated costs only.  The registered version also prints the
       totals of each cost type.

             The 'Job Cost Listings' will only print estimated amounts and
       is primarily intended for checking out new job entries prior to any
       actual costs generated.


                                  SCREEN BLANKER

             The program has a built in feature that will blank the monitor
        screen after 10 minutes of inactivity.  This feature is to help
        protect your screen from burn in.  Simply press one of the arrow
        keys to refresh the screen display.

                                 TWO FLOPPY DRIVES

             Those wanting to use the program with dual floppy drives can
        place the program disk on drive B and the data disk in drive A.
        Simply enter  B:COSBIZ  at the A drive prompt.


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






            This file can be sent to your printer by typing the following
       at the DOS prompt:

                             COPY COSBIZ.DOC LPT1:


            Other programs by this author you may want to look into:

            "Easy Inventory"        Provides for various purchases and sales
                                    reports as well...monitor cash flow and
                                    income.  Easily used for in-house purposes
                                    as well.  Locations, vendors, etc.

            "Bid-Biz"               Contractors estimating program.  Provides
                                    for multiple component and phase costs,
                                    direct and indirect cost burdens, etc.

            "EIMS"                  Equipment Inventory and Maintenance
                                    Scheduling.  Program is being used for
                                    many types of scheduling, sales routes...

            "WYS-AR"                Easy to use accounts receivable program.
                                    Prints two types of statements, no special
                                    forms needed with letter sized statement.

            "Sales Biz"             Sales tracking program.  Colorful, with
                                    many features...contacts, notes, total
                                    customer sales, etc.

            "Easy Quote"            Product quoting program.  Provides a cost
                                    burden percentage based on costs and sales
                                    amounts for cost purposes.

             (Others)
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

```
{% endraw %}

## FILE1984.TXT

{% raw %}
```
Disk No: 1984                                                           
Disk Title: COST-BIZ                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: COST-BIZ                                                 
Author Version: 1.2                                                     
Author Registration: $35.00                                             
Special Requirements: 512K RAM, hard drive recommended.                 
                                                                        
This job cost program is intended for those needing an easy to use,     
stand alone job cost program.  The program provides for four types of   
cost records:  equipment, labor, materials and subcontractor costs.  It 
also includes the option for percentages or quantities to be used in the
cost items.  Various reports are provided for either cost method used,  
both can be used if desired.                                            
                                                                        
The program is very straightforward with four basic steps:  add a job   
name record, add job cost records, enter and process transactions, and  
print reports as needed.                                                
                                                                        
The files used have virtually unlimited record capacities for large     
applications.  It features automatic searching of tables and scrolling  
record windows for ease of use.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1984

     Volume in drive A has no label
     Directory of A:\

    CONFIG   DTA        22  10-20-89   3:01a
    COSBIZ   DOC     13694  10-20-89   3:16a
    COSBIZ   EXE    280570  10-20-89   3:00a
    FILE1984 TXT      2147   1-02-90  11:32a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-02-90  12:36p
    JOBCOST  DAT      1117  10-20-89  12:31a
    JOBCOST  K01      1024  10-20-89  12:30a
    JOBNAMES DAT       246  10-20-89  12:31a
    JOBNAMES K01      1024  10-20-89  12:30a
    JOBTRANS DAT       450  10-20-89  12:31a
    JOBTRANS K01      1024  10-20-89  12:16a
    JOBTRANS K02      1024  10-20-89  12:16a
           13 file(s)     302920 bytes
                           13312 bytes free
