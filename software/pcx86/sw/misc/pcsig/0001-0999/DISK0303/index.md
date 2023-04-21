---
layout: page
title: "PC-SIG Diskette Library (Disk #303)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0303/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0303"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS WORKSHEETS #4"

    LOTUS WORKSHEETS 4 contains the OptionWare demo for solving
    mathematical problems.  Reports and graphs can be printed from the
    demo.  This disk also contains tips on converting Lotus 1-2-3
    worksheeks to Symphony worksheets, a 1984 Federal Income Tax template
    and a template to create letters and labels.  Documentation is included
    for all worksheets.
    
    System Requirements: 256K, two disk drives, LOTUS 1-2-3 v2.0
    
    How to Start:  Access through LOTUS 1-2-3
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    DIR-LIST      Listing of included files
    MAGEE    DOC  Documentation file for MAGEE.WKS
    AUTO123  WKS  Demo of OptionWare 1-2-3 models - self start with 1-2-3
    WSFF3    TXT  Worksheet File Format 1-2-3/Symphony:Appendix A
    WSFF2    TXT  Worksheet File 1-2-3/Symphony:Summary of record types
    WSFF1    TXT  Worksheet File Format 1-2-3/Symphony:Intro & quick ref.
    TAX1984  WKS  Individual tax planning model
    TAX1984  DOC  Documentation file for TAX1984.WKS
    PREVIEW  WKS  Part of demo for OptionWare - used with AUTO123.WKS
    MAIL     WKS  123 template to form letters/labels
    MAGEE    WKS  Ledger/database date math + reports - menu driven
    WSFF4    TXT  Worksheet File Format 1-2-3/Symphony:Appendix B
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MAGEE.DOC

{% raw %}
```







                         The 123 Ledger (tm), Version 1.6

         (C) Copyright 1984  by Patrick T. Magee.  All Rights Reserved.

         You are free to share unmodified copies of The 123 Ledger and
         this documentation with others.

         Should you find this application useful, and wish to receive the
         following:

           1) A disk containing the following applications:

             - Cash Flow application with several built in macros.
             - Menu-driven Tutorial for the Cash Flow application.
             - Advanced spreadsheet generator macro application for
               analyzing loans.
             - Menu driven Quote Generator.
             - Menu driven Tax Planner.
             - IRA/Annuity Analyzer
             - Sophisticated Integrated Business Plan (demonstrates how
               to integrate projected income statements, balance sheets,
               cash flow statements, cost of sales analysis, and ratio
               analysis, into a single worksheet for maximum "what-if"
               capabilities).

           2) The ProKey macro file I use to build my 1-2-3 macro
              applications.  Using this file in conjunction with ProKey
              from RoseSoft cut my macro development time in half.

           3) You get on my mailing list (unless you indicate otherwise)
              giving you timely notice of my new products as they
              become available.


         To receive all this, just send $25 (plus $2 S&H) to:

             Patrick Magee
             1711 143rd Place SE, Suite C1
             Bellevue, WA  98007

         (Washington State residents add sales tax.)

























                                     Preface

         The 123 Ledger is an advanced Lotus 1-2-3(tm) application making
         extensive use of 1-2-3's macro, database, and date-arithmetic
         features.  The end result is a general purpose transaction processo
         that can be used for summarizing checks or maintaining simple gener
         ledgers.  The application was designed to allow for up to 1700
         transactions and over 100 account numbers, on a computer having
         only 256k of memory.

         This application is managed by over 30k of macros which give
         even the most novice users easy access to the upper limits of
         1-2-3's power.


         This documentation is organized as follows:

              Getting Started
              The On-line Help System
              The Modify Data Options
              The Summarize Data Options  (The most useful & informative)
              The Query Data Options


         In case some of you are wondering who Patrick Magee is:

              He is a CPA based in Bellevue, WA who devotes all his time
              to the mastering of Lotus 1-2-3 and Symphony.  He acquired
              his Lotus knowledge by helping over 40 businesses implement
              Lotus products.  He teaches beginning, advanced, and macro
              classes for 1-2-3 and Symphony.  He writes a monthly column
              for Absolute Reference - The Journal for 1-2-3 and Symphony
              Users (1-800-428-5331).  And last May, he started the
              Pacific NW Lotus Users Group.
































    GETTING STARTED

         Begin by loading The 123 Ledger as you would a normal worksheet.

         /File Retrieve <LEDGER> <RETURN>

         After scanning the Copyright screen, press RETURN to continue on to
         the main menu which looks as follows:


    ========================================================================
                               The Winning Company                   Apr-84
    ========================================================================




                             1     Modify Data
                             2     Query Data
                             3     Summarize Data
                             4     Setup Options
                             5     Online Help
                             6     Save/Exit Options


                               Enter Selection ......



    ======== Copyright 1984 (C) =========== by Patrick T. Magee, CPA =======





































    THE ONLINE HELP SYSTEM

         As you can see, there are six main menu options.  Select option
         number 5 by pressing the 5 key.  This takes you to the main help
         screen which gives you an overview of all the command options as
         shown below.

    ========================================================================
                             Directory of Menu Options
    ========================================================================

        1           2                 3             4       5        6

     MODIFY       QUERY           SUMMARIZE       SETUP    HELP   SAVE/EXIT

     1.1 Add      2.1 Account     3.1 All         4.1 Recalc       6.1 Save
     1.2 Edit     2.2 Date_Range  3.2 Date_Range  4.2 Company      6.1 123
     1.3 Sort     2.3 Both        3.3 Xtract      4.3 Date         6.3 Exit
     1.4 Balance  2.4 Freeform    3.4 Scan        4.4 Initialize   6.4 Load
     1.5 Date     2.5 Scan        3.5 Print       4.5 Formfix      6.5 Dir.
     1.6 Print    2.6 Print       3.6 Help        4.6 Help         6.6 Help
     1.7 Help     2.7 Help        3.7 Quit        4.7 Quit         6.7 Quit
     1.8 Quit     2.8 Quit




         Note that you can view help on any command option by selecting an
         option from the menu appearing on the command line.  Note that all
         menus that appear on the command line work exactly like 1-2-3's
         menus.  You can select options by either typing the first letter,
         or pointing and pressing RETURN.

         There are 13 help screens in all.  Type a 3 to view the help for
         the Summarize options.  This takes you immediatly to a help screen
         for these options.  Pressing RETURN once takes you to the second
         screen, and pressing RETURN a last time takes you back to the main
         help menu.



























    THE MODIFY DATA OPTIONS

         Type in a 1 to select the Modify Data option.  This takes you to
         the top of the transactions database and brings up the Modify menu.

         This is the only place in the system that you can alter the
         content or structure of the database.

         There are two ways to add records; the first is under complete
         macro control using the Add option, the second is with little or no
         assistance from the macros under the Edit option.


         THE ADD OPTION

         Type an A to select the Add option.  You will be taken to the
         bottom of the database and prompted for the required information.
         The sample transaction you will enter here is as follows:

            05-Apr-84   577  Office supplies           655     (75.00)

         The first prompt that appears is:
              Enter Day of Month(2nd as 2) :

         Note that the current month and year appear in the upper left hand
         corner of the screen (this is changed by the month option).  All
         have to do is type in the day.

         Type in 5 and press ENTER

         Note that the entire date is entered, the cell is formatted, and
         the cell pointer is moved to the next cell.

         The next prompt to appear is:

              Enter Transaction Number:

         Type in 577 and press ENTER.

         The next prompt is:

              Enter Payee/Description:

         Type in "Office Supplies" and press ENTER.

         The next prompt is:

              Enter Account Number:

         Type in 655 and press ENTER

         And the final prompt is:

              Enter Amount:











         Checks are entered as negative amounts so type in -75 and press
         ENTER.

         The cell is formatted currency with two decimal places and the cell
         pointer is positioned for entering the next transaction.


         Although this method of data entry is simple and straight forward,
         most people will find it too slow and cumbersome.  This application
         was designed primarily for quick and dirty transaction processing,
         and thats where the EDIT option comes in.  As the message indicates
         at the top of the screen, you can enter a 0 for the day of month to
         return to the main menu.  Note that the message dissappears as the
         menu reappears.


         THE EDIT OPTION

         Select the Edit option now by typing the letter E.  Note that two
         messages appear in the message area before the macros return you to
         READY mode.  In READY mode, you are free to move around with the
         direction keys and issue regular 1-2-3 commands to alter the
         contents of the database.  At this point, transactions can be
         manually, or with the aid of the Alt-A macro, which is the
         recommended method of transaction entry.  To illustrate this macro,
         you will enter the following transaction.

            22-Apr-84   578  Business Periodicals     675     (25.00)

         Move the cell pointer to the next blank row in the database and
         move to the Date column.  Hold down the Alt key and tap the A key.

         Type in the number 22 and press ENTER.
         Type in the number 578 and press ENTER.
         Type in "Business Periodicals" and Press ENTER.
         Type in the number 675 and press ENTER.
         And lastly, type in the number -25 and press ENTER.

         Note that the macros handle all cursor movement and cell
         formatting as before.  The advantages to this method are that
         only the Date entry is required - the rest can be skipped
         simply by  pressing ENTER.  It's also much easier to break out
         of a macro(by pressing Control-Break) make a correction, and
         resume.  Or you may just want to enter a  single transaction,
         copy it down several rows and modify it.  Often  my clients
         simply enter the date, account #, and amount.


         CHANGING THE CURRENT MONTH OR YEAR

         To do this, return to the main menu by holding down the Alt key and
         tapping the R key.  Select the Date option, enter the new year and
         month numbers as prompted, and you're ready to do the next period.












         OTHER MENU OPTIONS

         The following briefly summarizes the remaining options available
         from this submenu.

          Sort -  lets you quickly sort the database on any field with only
                  a couple keystrokes (Pressing S, D, and ENTER) is all that
                  is required to sort the database by date in ascending
                  order.

          Balance-displays the total of all transactions up to and
                  including a specified date.  If The 123 Ledger is being
                  used as a checkbook ledger, this will display your
                  balance on any given date.  You simply select the
                  option, enter a year, month, and day, and the balance
                  is calculated and displayed.

          Print - Prints a listing of the entire database.

          Help -  takes you immediatly to the help screens for the Modify
                  Database menu options.

          Quit -  Returns you to the main menu.


         You've been familiarized with the database and how it is modified.
         Now you're ready to see what this application is really all about.
         Select the Quit option to return to the main menu.







































    THE SUMMARIZE DATA OPTIONS

         You can select the summarize option by typing the number 3.  To see
         all of the transactions totaled by account number, select the All
         option by typing an A.  A few moments later, you will see a list of
         account numbers appear and their current balances.  The macro that
         does this uses a combination of Data Query Unique, Data Table 1,
         Data Table Sort, and a single @DSUM formula to produce this
         summary.  This technique allows you to have over 100 account
         numbers, and enter over 1700 transactions, with a 256k computer.

         The Date_Range option does the same thing but only includes
         transactions that fall within a specified date range.  This is
         useful when more than one months data is entered into a single
         database.

         The Print option in this submenu gives you 3 choices:  The first
         simply prints the summary section as it currently appears on the
         screen;  The second produces the equivalent of a G/L listing - it
         takes one account number at a time, prints it's balance, and all
         the transactions that make up that balance;  The third does the
         same thing as the second, except for a specified date range.












































    THE QUERY DATA OPTIONS

         Select the Query Data option from the main menu now by typing 2.
         This section lets you quickly review the transactions for a given
         account number, date range, or both.  For example, if you wanted to
         see all of the transactions for account number 665, you would
         select the Account option by typing an A, type in the number 665,
         and press the ENTER key.  In a second or two, you should see a list
         of all the transactions for that account number.

         To see all the transactions for account number 665 for the month of
         May, select the Both option by typing a B, type in 665 and press
         ENTER.  A menu will appear with two options: Dates_Ok and
         Change_Dates.  The current beginning and ending dates are displayed
         on the screen, to leave them unchanged for this command, select
         the Dates_Ok option.  You will probably want to change them
         however, so select Change_Dates.  You will be asked for two sets
         of dates.  For each, you must enter a year, month, and day.  The
         exact keystrokes are as follows:

           84 <ENTER>
           4  <ENTER>
           1  <ENTER>

           84 <ENTER>
           4  <ENTER>
           30 <ENTER>

         After pressing the last ENTER, you should see the list of
         transactions appear on the screen.


         That's all for now.  I will update this documentation as time
         permits.  Your suggestions for improvement of either The 123
         Ledger or this documentation are welcome.  You are welcome to
         leave questions or messages for me on The World of Lotus
         (ID#  76044,273).  I will try to answer them at least once every
         week.  Thank you.

```
{% endraw %}

## TAX1984.DOC

{% raw %}
```
				 B. JOSEPH KENNEDY, CPA
				   PETRO BANK BUILDING
			  11,111 KATY FREEWAY, SUITE 310
				  HOUSTON, TEXAS 77079
					(713) 973-6475


THANK YOU FOR YOUR INTEREST IN THE INDIVIDUAL TAXPLANNING MODEL.


CAUTION: 

YOU SHOULD MAKE A COPY OF THE ORIGINAL DISKETTE AND FILE IT FOR
BACK-UP PURPOSES.  THE DISKETTE CAN BE USED BY YOU FOR YOUR
PERSONAL USE WITHOUT LIMITATION.  IF YOU CHOOSE TO USE THE MODEL
(OVERLAY OR TEMPLATE, ETC.) FOR OTHER OFFICES OR FOR ESTIMATING
TAX LIABILITY FOR OTHERS, I REQUEST A FEE OF $25.00.   IF YOU
ADVISE ME OF YOUR USE OF THIS TEMPLATE FOR PROFESSIONAL USE, I
WILL KEEP YOU APPRAISED OF ALL CHANGES/MODIFICATIONS OF THE
PROGRAM.  OBVIOUSLY, THIS IS ON THE HONOR SYSTEM, BUT I BELIEVE
YOU WILL AGREE IT IS LESS COSTLY THAN TRYING TO DEVELOP AND INPUT
THE MODEL INTO YOUR LOTUS SYSTEM.  THANK YOU FOR YOUR
COOPERATION.  I HOPE THIS HELPS KEEP YOUR TAXES TO A MINIMUM!!!!!

  THIS PROGRAM IS NOT TO BE SOLD OR OTHERWISE DISTRIBUTED TO ANY
  OTHER PARTIES WITHOUT THE EXPRESS WRITTEN PERMISSION OF THE
  AUTHOR OR A REPRESENTATIVE FROM HIS COMPANY.

		   * * * WHAT THE MODELS CAN DO * * *     

TAXPLAN:

The TAXPLAN model will calculate the following taxes:
			MARRIED FILING JOINT INCOME TAX Return
			SINGLE TAXPAYER INCOME TAX Return
			ALTERNATIVE MINIMUM TAX
			TEN YEAR AVERAGING ON LUMP-SUM DISTRIBUTIONS
			SELF EMPLOYMENT TAXES

How the TAXPLAN model works:

The user must be familiar with the Internal Revenue Code and the
individual income tax return, FORM 1040.  The model asks the user
to input information regarding items for the alternative minimum
tax computation, amounts for the various lines on Form 1040 and
Schedule A of the tax return.  (The input is not accumulated as
it is in the various tax return preparation software packages,
such as the Microtax tax return processing package.)

Amounts that would transfer from other schedules; interest income,
income from self-employment, partnership income (loss), etc.,
would have to be separately calculated or the amounts from the
prior year's return used to compute the taxpayer's 1984 projected
tax liability.

The model is set up to print a recap of the income items, the
Schedule A deductions and the tax amounts (regular, AMT, 10 year
averaging, self employment and tax credits) for your client's
analysis.  You can print the full detail if you wish, by modifying
the print command, although this may just confuse your clients.
I have set in a macro command for the printing function, after you
have input all the data for a client, press the "F9" function key
to compute the tax liability.  After the tax is computed, just
press the "ALT" key and the "P" key, printing will begin.  You
can separately request a written report of any and all fields of
the model by using the printing commands outlined in your LOTUS
123 tm manual.

UPDATES TO THE EXISTING MODEL:  Tentatively, I would like to
receive a business card from anyone interested in learning of any
updates to the original model.  I may add provisions for
calculating taxes for head of household and, possibly, for
married filing separately.  I am also planning to add the tax
rate schedules for 1985 in the near future, however, the 1984
rates can be used in the interim to compare alternatives for 1984
vs. 1985 without much distortion.

PLEASE SEND YOUR BUSINESS CARD TO ME IF YOU ARE INTERESTED!!!!
--------------------------------------------------------------


NOTE TO USERS:

If you wish to increase or decrease the number of comparisons,
using the COPY command in LOTUS to copy column B of the model to
the next available, unused column will provide that flexibility
to make simultaneous comparisons of tax choices.

You may wish to add other comparisons or tax schedules
(married/separate, or head of household) on your own and are
invited to use the formulations in this model as a guide.  Good luck!






```
{% endraw %}

## WSFF1.TXT

{% raw %}
```
                            WORKSHEET FILE FORMAT 
                                  FROM LOTUS 

                       INTRODUCTION AND QUICK REFERENCE

               Copyright(c) 1984, Lotus Development Corporation 
                               161 First Street 
                        Cambridge, Massachusetts 02142 
                                (617) 492-7171 
                      Electronic Edition, December, 1984 
                             All Rights Reserved 























































 PREFACE 

 Lotus Development Corporation's 1-2-3(TM) and Symphony(TM) perform user
 selected operations upon a data matrix that is termed a "worksheet". 

 Worksheet files are such matrices stored on disk. 

 A worksheet file is an unbroken sequence of binary coded records defining a
 single worksheet. 

 Both 1-2-3 and Symphony accept externally created data files if the files
 are in the worksheet file format.  Other programs can decode and process
 worksheet files created by 1-2-3 or Symphony. 

 The following document provides information required to create or access a
 worksheet file by describing the records used to create a worksheet file.
 It is assumed that the reader is familiar with Lotus products and has ready
 access to 1-2-3 or Symphony documentation. 

 Note that the worksheet files for 1-2-3 and Symphony are similar, but not
 necessarily interchangeable.  1-2-3 and Symphony share some record types,
 but also have record types unique to that product.  Symphony can read 1-2-3
 records, but 1-2-3 cannot read Symphony records. 

 The information contained in this document has been released into the
 public domain and is not considered to be confidential or proprietary
 although still the copyright and property of Lotus Development Corporation.
 All efforts have been made to ensure that this information is clear and
 useful since Lotus will not be providing customer assistance with this
 booklet.  Lotus will, however, incorporate any necessary corrections if
 they are reported in writing to: 

                        Lotus Development Corporation 
                        Worksheet File Format 
                        161 First Street 
                        Cambridge, MA 02142 


 WORKSHEET FILE FORMAT 

 Worksheet files are organized as an unbroken sequence of variable length
 binary records.  Each record consists of a 4-byte header followed by the
 record body. The header defines the record's type and length, as the
 example below shows.
  
 The header's composition is as follows: 



 Byte Number               Byte Description 
 0,1                       Record type code 
 2,3                       Record body length (bytes) 


 Example: Record Header 

                               Record Header 

                           Record         Record 
                            Type          Length 

          Byte Number      0    1         2    3 
             Hex Code     1C   00        20   00 
   Decimal Equivalent       28             32 


 The record body can be of many different types; most have predetermined
 length, but some vary in length. 

 The record type code is 28. 

 In a hex dump of the file, the record type appears as 1C 00h, noting that
 the 8086/88 stores the most significant byte of word in the higher memory
 address. 

 The record length is 32 bytes. 
 In a hex dump of the file, the record length appears as 20 00h. 


 Record types with Column/Row Coordinates 

 Some record types contain column/row coordinates to identify a cell, or one
 of the two points that define a range.  Numbering starts at zero in the
 upper left corner of the worksheet. 
 For example: 

                             Cell A1 = column 0, row 0 





 SUMMARY OF RECORD TYPES 

 This section describes the different record types found in 1-2-3 and
 Symphony. 

 There are to Quick Reference tables ordered by Opcode and by Product,
 followed by a detailed reference section ordered by Opcode.  In the
 reference section, there are examples for the more commonly used records. 

 It is assumed that the reader is familiar with 1-2-3 or Symphony and has
 access to Lotus' documentation. 

 Quick Reference by Opcode 

 Type       Code (hex)        Length (bytes)         Description 

 BOF            0                2                   Beginning of file 
 EOF            1                0                   End of file 
 CALCMODE       2                1                   Calculation mode 
 CALCORDER      3                1                   Calculation order 
 SPLIT          4                1                   Split window type 
 SYNC           5                1                   Split window sync 
 RANGE          6                8                   Active worksheet range 
 WINDOW1        7                31                  Window 1 record 
 COLW1          8                3                   Column width, 
                                                       window 1 
 WINTWO         9                31                  Window 2 record 
 COLW2          A                3                   Column width, 
                                                       window 2 
 NAME           B                24                  Named range 
 BLANK          C                5                   Blank cell 
 INTEGER        D                7                   Integer number cell 
 NUMBER         E                13                  Floating point number 
 LABEL          F                variable            Label cell 
 FORMULA        10               variable            Formula cell 
 TABLE          18               25                  Data table range 
 ORANGE         19               25                  Query range 
 PRANGE         1A               8                   Print range 
 SRANGE         1B               8                   Sort range 
 FRANGE         1C               8                   Fill range 
 KRANGE1        1D               9                   Primary sort key range 
 HRANGE         20               16                  Distribution range 
 KRANGE2        23               9                   Secondary sort key 
                                                       range 
 PROTEC         24               1                   Global protection 
 FOOTER         25               242                 Print footer 
 HEADER         26               242                 Print header 
 SETUP          27               40                  Print setup 
 MARGINS        28               10                  Print margins code 



 Quick Reference by Opcode (continued) 

 Type         code (hex)       Length (bytes)        Description 

 LABELFMT        29                  1               Label alignment 
 TITLES          2A                  16              Print borders 
 GRAPH           2D                  437             Current graph settings 
 NGRAPH          2E                  453             Named graph settings 
 CALCCOUNT       2F                  1               Iteration count 
 UNFORMATTED     30                  1               Formatted/unformatted 
                                                       print 
 CURSORW12       31                  1               Cursor location 
 WINDOW          32                  144             Symphony window 
                                                       settings 
 STRING          33                  variable        Value of string  
                                                       formula 
 PASSWORD        37                  4               File lockout (CHKSUM) 
 LOCKED          38                  1               Lock flag 
 QUERY           3C                  127             Symphony query 
                                                       settings 
 QUERYNAME       3D                  16              Query name 
 PRINT           3E                  679             Symphony print record 
 PRINTNAME       3F                  16              Print record name 
 GRAPH2          40                  499             Symphony graph 
                                                       record 
 GRAPHNAME       41                  16              Graph record name 
 ZOOM            42                  9               Orig coordinates 
                                                       expanded window 
 SYMSPLIT        43                  2               Nos. of split windows 
 NSROWS          44                  2               Nos. of screen rows 
 NSCOLS          45                  2               Nos. of screen columns 
 RULER           46                  25              Named ruler range 
 NNAME           47                  25              Named sheet range 
 ACOMM           48                  65              Autoload.comm code 
 AMACRO          49                  8               Autoexecute macro 
                                                       address 
 PARSE           4A                  16              Query parse 
                                                       information 




 Quick Reference by Product: 1-2-3 only 

 Type          Code (hex)         Length (bytes)     Description 

 SPLIT            4                    1             Split window type 
 SYNC             5                    1             Split window sync 
 WINDOW 1         7                    31            Window 1 record 
 WINTWO           9                    31            Window 2 record 
 COLW2            A                    3             Column width,  
                                                       window 2 
 NAME             B                    24            Named range 
 QRANGE           19                   25            Query range 
 PRANGE           1A                   8             Print range 
 SRANGE           1B                   8             Sort range 
 KRANGE1          1D                   9             Primary sort key range 
 KRANGE2          23                   9             Secondary sort key 
                                                       range 
 FOOTER           25                   242           Print footer 
 HEADER           26                   242           Print header 
 SETUP            27                   40            Print setup 
 MARGINS          28                   10            Print margins code 
 TITLES           2A                   16            Print borders 
 GRAPH            2D                   437           Current graph settings 
 NGRAPH           2E                   453           Named graph settings 




 Quick Reference by Product: 1-2-3 and Symphony 

 Type          Code (hex)         Length (bytes)     Description 

 BOF               0                   2             Beginning of file 
 EOF               1                   0             End of file 
 CALCMODE          2                   1             Calculation mode 
 CALCORDER         3                   1             Calculation order 
 RANGE             6                   8             Active worksheet range 
 COLW1             8                   3             Column width 
 BLANK             C                   5             Blank cell 
 INTEGER           D                   7             Integer number cell 
 NUMBER            E                   13            Floating point number 
 LABEL             F                   variable      Label cell 
 FORMULA           10                  variable      Formula cell 
 TABLE             18                  25            Data table range 
 FRANGE            1C                  8             Fill range 
 HRANGE            20                  16            Distribution range 
 PROTEC            24                  1             Global protection 
 LABELFMT          29                  1             Label alignment 
 CALCCOUNT         2F                  1             Iteration count 
 UNFORMATTED       30                  1             Formatted/unformatted 
                                                       print 
 CURSORW12         31                  1             Cursor location 




 Quick Reference by Product: Symphony only 

 Type          Code (hex)        Length (bytes)      Description 

 WINDOW           32                 144             Symphony window 
                                                       settings 
 STRING           33                 variable        Value of string 
                                                       formula 
 PASSWORD         37                 4               File lockout (CHKSUM) 
 LOCKED           38                 1               Lock flag 
 QUERY            3C                 127             Symphony query 
                                                       settings 
 QUERYNAME        3D                 16              Query name 
 PRINT            3E                 679             Symphony print record 
 PRINTNAME        3F                 16              Print record name 
 GRAPH2           40                 499             Symphony graph 
                                                       record 
 GRAPHNAME        41                 16              Graph rocord name 
 ZOOM             42                 9               Orig coordinates 
                                                       expanded window 
 SYMSPLIT         43                 2               Nos. of split windows 
 NSROWS           44                 2               Nos. of screen rows 
 NSCOLS           45                 2               Nos. of screen columns 
 RULER            46                 25              Named ruler range 
 NNAME            47                 25              Named sheet range 
 ACOMM            48                 65              Autoload. comm code 
 AMACRO           49                 8               Autoexecute macro 
                                                       address  
 PARSE            4A                 16              Query parse 
                                                       information 
```
{% endraw %}

## WSFF2.TXT

{% raw %}
```
                            WORKSHEET FILE FORMAT 
                                  FROM LOTUS 

                           SUMMARY OF RECORD TYPES

               Copyright(c) 1984, Lotus Development Corporation 
                               161 First Street 
                        Cambridge, Massachusetts 02142 
                                (617) 492-7171 
                      Electronic Edition, December, 1984 
                             All Rights Reserved 
























































                                     BOF

 Record Type      Code            Body length 
 BOF              0 (00H)         2 bytes 

 Record Description 

 Beginning of file 

 Used by both 1-2-3 and Symphony. 

 Byte Number       Byte Description 
 0-1               file format revision number 
                   1028 (0404h) = 1-2-3 file 
                   1029 (0405h) = Symphony file 


 Example 



                           Record Header             Record Body 

                        Record        Record              BOF   
                         Type         Length 
 Byte Number            0    1        2    3             0   1 
    Hex Code           00   00       02   00            04  04 
 Dec.Equivalent           0             2                1028 


                                     EOF 

 Record Type               Code              Body length 
 EOF                       1 (01H)           0 bytes 

 Record Description 

 End of file 

 Used by both 1-2-3 and Symphony 

 Byte Number          Byte Description 

 -no record body- 


 Example 

                           Record Header 

                      Record          Record 
                       Type           Length 
      Byte Number     0    1          2    3 
        Hex Code     01    00        00   00 
 Decimal Equivalent     1               0 

 Note: End of file is ony a header. EOF has a record 
 length of 0; therefore, no record body follows. 





                                   CALCMODE 

 Record Type            Code             Body length 

 CALCMODE               2 (02h)          1 byte 

 Record Description 

 Calculation method 

 Used by both 1-2-3 and Symphony. 

 Byte Number            Byte Description 

 0                      0 = Manual mode 
                        FF = automatic 





                                  CALCORDER 


 Recrod Type            Code                  Body length 
 CALCORDER              3 (03H)               1 BYTE 

 Record Description 

 Calculation order 

 Used by both 1-2-3 and Symphony 

 Byte Number            Byte Description 
 0                      0 = natural 
                        1 = by column 
                        FF = by row 



                                    SPLIT 

 Record Type            Code                  Body length 
 SPLIT                  4(04h)                1 byte 

 Record Description 

 Split window type 
 Used in 1-2-3 only. 

 Byte Number            Byte Description 

 0                      0 = not split 
                        1 = vertical split 
                        FF = horizontal split 




                                     SYNC 

 Record Type            Code                  Body length 
 SYNC                   5(05h)                1 byte 

 Record Description 

 Split window sync 

 This determines whether the two screens in 1-2-3's split-screen feature
 will move together with the cursor. 

 Used in 1-2-3 only. 

 Byte Number            Byte Description 

 0                      0 = not synchronized 
                        FF = synchronized 






                                    RANGE 


 Record Type         Code            Body length 
 RANGE               6(06h)          8 bytes 

 Record Description 

 Range of cells written to worksheet file. 
 If the worksheet file was created using a File Save command, then this
 range describes the active area with trailing blank columns and rows
 removed.  If the worksheet file was created using a File Xtract command,
 then this range describes the extract range with trailing blank columns and
 rows removed.  If there is no data in the range, the starting column is set
 to -1. 

 Used by both 1-2-3 and Symphony. 

 Byte Number            Byte Description 

 0-1                    starting column 
 2-3                    starting row 
 4-5                    ending column 
 6-7                    ending row 


 Example 

                   Record Header             rt_range Record Body 
                  Record  Record       Starting  Starting  Ending  Ending 
                   Type   Length       Column      Row     Column    Row 
 Byte Number      0    1   2   3       0     1    2    3    4   5   6   7 
    Hex Code     06   00  08  00      00    00   00   00   01  00  03  00 
 Dec.Equivalent     6       8             0         0         1       3 

 The record displays the worksheet range as A1...B4. 




                                   WINDOW1 

 Record Type             Code              Body length 
 WINDOW1                 7(07h)            31 bytes 

 Record Description 

 Window 1 record 
 Used in 1-2-3 only. 

 Byte Number              Byte Description 

 0-1                      cursor column position 
 2-3                      cursor row position 
 4                        format (see Appendix A, Cell Format Encoding) 
 5                        unused (0) 
 6-7                      column width 
 8-9                      number of columns on screen 
 10-11                    number of rows on screen 
 12-13                    left column 
 14-15                    top row 
 16-17                    number of title columns 
 18-19                    number of title rows 
 20-21                    left title column 
 22-23                    top title row 
 24-25                    border width column 
 26-27                    border width row 
 28-29                    window width 
 30                       unused (0) 



                                    COLW1 

 Record Type          Code            Body length 
 COLW1                8(08h)          3 bytes 

 Record Type Description 

 Column width 
 Used by both 1-2-3 and Symphony. 

 In 1-2-3, this record contains the width of a column Window 1. 
 In symphony, it contains width information for the Window Record that it 
 follows. 

 Byte Number          Byte Description 
 0-1                  column 
 2                    width 




                                    WINTWO 

 Record Type          Code           Body length 
 WINTWO               9(09h)         31 bytes 

 Record Description 
 Window 2 record 
 Used in 1-2-3 only. 

 Byte Number          Byte Description 

 0-1                  cursor column position 
 2-3                  cursor row position 
 4                    format (see Appendix A, Cell Format Encoding) 
 5                    unused (0) 
 6-7                  column width 
 8-9                  number of columns on screen 
 10-11                number of rows on screen 
 12-13                left column 
 14-15                top row 
 16-17                number of title columns 
 18-19                number of title rows 
 20-21                left titile column 
 22-23                top title row 
 24-25                border width column 
 26-27                border width row 
 28-29                window width 
 30                   unused (0) 




                                    COLW2 

 Record Type        Code          Body length 
 COLW2              10(0Ah)       3 bytes 

 Record Description 
 Column width, Window 2 
 Used in 1-2-3 only. 

 Byte Number        Byte Description 
 0-1                column 
 2                  width 






                                     NAME 

 Record Type        Code         Body length 
 NAME               11 (OBh)     24 bytes 

 Record Description 

 Name of range 
 The worksheet contains one record for each range name. 
 Used in 1-2-3 only. 

 Byte Number        Byte Description 
 0-15               NULL terminated ASCII string 
 16-17              Starting column 
 18-19              Starting row 
 20-21              Ending column 
 22-23              Ending row 

 Example 

                           Record Header 
                        Record      Record 
                         Type       Length 
 Byte Number            0    1      2    3 
 Hex Code              0B   00     18   00 
 Decimal Equivalent       11          24 




    (cont.) 

                           Record Body 
                        Range Name (Text) 
            Decimal Equivalent Expressed in ASCII Text 
      0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15 
     52 45 56 45 4E 55 45 53 00 00  00  00  00  00  00  00 
     R  E  V  E  N  U  E  S /    Unfilled  Names   Area 



    (cont.)                Record Body  

                Starting  Starting  Ending  Ending 
                Column      Row     Column    Row 
                16  17     18  19   20  21  22  23 
                00  00     00  00   01  00  03  00 
                   0         0        1        3 

 Range name is REVENUES (encompasses A1 to B4).






                                    BLANK 

 Record Type        Code           Body length 
 BLANK              12(0Ch)        5 bytes 

 Record Description 

 Blank cell 

 Blank cell records appear only for those cells that are protected, or do
 not have the default format. 

 Unprotected blank cells with the default format are omitted from the
 worksheet file. 

 Used by both 1-2-3 and Symphony. 

 Byte Number        Byte Description 
 0                  format (see Appendix A, Cell Format Encoding) 
 1-2                column 
 3-4                row 

 Example 

                      Record Header              Record Body 
                  Record         Record 
                   Type          Length      Format    Column     Row 
 Byte Number      0    1         2    3         0      1    2    3   4 
 Hex Code        0C   00        05   00        22     05   00   0A  00 
 Dec. Equivalent    12             5           34        5        10 

 This record displays cell in location F11 (column 5, row 10). 




                                   INTEGER 

 Record Type          Code             Body length 
 INTEGER              13(ODh)          7 bytes 

 Record Description 

 Integer number cell 

 An integer cell holds a single integer value 
 in the range -32767....+32767 (decimal). 

 Used by both 1-2-3 and Symphony. 

 Byte Number          Byte Description 

 0                    format (see Appendix A, Cell Format Encoding) 
 1-2                  column 
 3-4                  row 
 5-6                  integer value 


 Example 

                  Record Header                      Record Body 
                Record     Record 
                 Type      Length         Format   Column    Row    Integer 
 Byte Number    0    1     2    3            0     1    2    3  4    5   6 
 Hex Code      0D   00    07   00           00    00   00   00 00   DD  04 
 Dec. Equivalent  13        7                0       0        0      1245 

 This example displays the integer 1245 located in cell A1 (column 0, row
 0).  When reading a 2-byte integer, the lower byte appears first.  For
 example, DD04h is actually 04DDh (1245 decimal). 





                                    NUMBER 

 Record Type        Code        Body length 
 NUMBER             14 (0Eh)    13 bytes 

 Record Description 

 Floating point number 
 Used by both 1-2-3 and Symphony 

 Byte Number          Byte Description 

 0                    format 
 1-2                  column 
 3-4                  row 
 5-12 value           (IEEE long real; 8087 double-precision floating- 
                      point format) 

 Example 
 The following describes a 64-bit long real format. 


                   S           Exponent           Fraction 
                  63          62      52          51       0 
                  MSB                                    LSB 

 S                1-bit Sign field 
                  0 = + 
                  1 = - 

 Exponent         11-bit Exponent field 

                  Exponent is binary, excess 1023(base 10).  Thus, the true
                  exponent is: 2^(exponent -1023). 

 Fraction         52-bit Fraction field 

                  An implied leading 1 bit is at the beginning of the  
                  fraction.  The implied binary point is between the implied
                  1 bit and the Most  Significant Bit (MSB) of the fraction
                  field. 

 Special             NA:  S = 1 Exponent = 7FF Fraction = 0 
 Values             ERR:  S = 0 Exponent = 7FF Fraction = 0 

                 STRING:  S = 0 Exponent = 7FF Fraction = non-zero 
                                               (Symphony only) 





                                    LABEL 

 Record Type        Code           Body  length 
 LABEL              15(0Fh)        variable 

 Record Description 

 Label cell 
 Used by both 1-2-3 and Symphony. 

 Byte Number        Byte Description 

 0                  format (see Appendix A, Cell Format Encoding) 
 1-2                column 
 3-4                row 
 5+                 NULL terminated ASCII string; 
                    240 bytes maximum 


 Example 

                Record Header                     Record Body 
               Record   Record 
                Type    Length      Format  Column  Row        Label 
 Byte Number    0  1     2  3          0     1  2   3  4   5  6  7  8  9 10 
 Hex Code      0F 00    0B 00         F5    00 00  00 00  27 50 41 55 4C 00 
 Dec. Equivalent 15       11         245      0      0       P  A  U  L 

 This example is a label record located at A1 (column 0, row 0). 

 This record contains the word 'PAUL. 
 Byte 5 is always one of the following format prefixes:\'"^. 

 This record varies in relation to the amount of text stored in the cell. 

 A user can enter up to 240 characters in one cell. 






                                   FORMULA 

 Record Type         Code            Body length 
 FORMULA             16(10H)         variable 

 Record Description 

 Formula cell 

 Used by both 1-2-3 and Symphony. 

 Formulas are compiled in Reverse Polish Internal Notation.  By creating 
 formulas in 1-2-3 or Symphony, and dumping them as hex bytes, the formula 
 compilation logic can be deciphered. 

 Table 1 describes the available Opcodes and functions.  The functions are 
 discussed in greater detail in the 1-2-3 and Symphony documentation. 

 Appendix B discusses Lotus' proprietary formula compiler in greater
 detail. 

 Byte Number           Byte Description 
 0                     format (see Appendix A, Cell Format Encoding 
 1-2                   column 
 3-4                   row 
 5-12                  formula numeric value (IEEE long real; see NUMBER) 
 13-14                 formula size (bytes) 
 15+                   for code (see Table 1, Formula Opcodes); Reverse 
                       Polish Internal Notation; 2048 bytes maximum 





                                   FORMULA 

 Table 1-a Formula Compiler Opcode Table, Format 

 Dec        Hex           Operation          Description 
 0          0             constant           Code is followed by an 8 byte 
                                             IEEE Long Real Floating Point 
                                             Number 

 1          1             variable           Code followed by 4 byte coor- 
                                             dinate Byte 0,1 = Column 
                                             Byte 2,3 = Row 

 2          2             range              Code followed by 8 byte range 
                                               Byte 0,1 = Start column 
                                               Byte 2,3 = Start row 
                                               Byte 4,5 = End column 
                                               Byte 6,7 = End row 

 3          3             return               End of formula 

 4          4             parentheses          Indicates presence of paren- 
                                               theses in original formula. 
                                               It is ignored during recal- 
                                               culation. 

 5          5             2 byte integer       Followed by 2 byte signed  
                          constant             integer. 

 The above Opcodes will define the type and length of information that  
 follows the Opcode.  Opcode 3 defines the end of the formula. 

 For example, Opcode 0 is followed by an 8 byte floating point number. 
              Opcode 1 is followed by a 4 byte coordinate. 
              Opcode 2 is followed by an 8 byte range specifier. 
              Opcode 5 is followed by a 2 byte signed integer. 





                                   FORMULA 

 Table 1-b  Formula Compiler Opcode Table, Operations 

 Dec       Hex         Operation         Description 

 8         8           unary -           Negation 
 9         9           +                 Addition 
 10        A           -                 Subtraction 
 11        B           *                 Multiplication 
 12        C           /                 Division 
 13        D           ^                 Exponentiation; 
                                           ie. 3^2 is(3x3) 
 14        E           =                 Equal to 
 15        F           < >               Not equal to 
 16        10          < =               Less than or equal to 
 17        11          > =               Greater than or equal to 
 18        12          <                 Less than 
 19        13          >                 Greater than 
 20        14          #AND#             Logical AND 
 21        15          #OR#              Logical OR 
 22        16          #NOT#             Logical NOT 
 23        17          unary +           (Ignored during recalculation 
 31        1F          na                @Na not applicable 
 32        20          err               @Err error 
 33        21          abs               @abs (x) Absolute value of x 
 34        22          int               @int (x) Integer value of x 
 35        23          sqrt              @sqrt (x) Square root of x 
 36        24          log               @log (x) Log base 10 of x 
 37        25          ln                @ln (x) Log base e of x 
 38        26          pi                @pi 
 39        27          sin               @sin (x) Sine of x 
 40        28          cos               @cos (x) Cosine of x 
 41        29          tan               @tan (x) Tangent of x  
 42        2A          atan2             @atan2 (x) 4 quadrant arc tangent 
                                           of x 
 43        2B          atan              @atan (x) 2 quadrant arc tangent 
                                           of x 
 44        2C          asin              @asin (x) Arc sine of x 
 45        2D          acos              @acos (x) Arc cosine of x 
 46        2E          exp               @exp (x) Exponential anti-log of x 
 47        2F          mod               @mod (x,y)X Mod Y 
 48        30          sel               @Choose (x,v0,v1...vN) 
                                         Match a list item. 
 49        31          isna              @isna (x)x = NA then 1 (true) 








                                   FORMULA 

 Table 1-b (continued)  Formula Compiler Opcode Table, Operations 

 Dec      Hex         Operation         Description 
 51       33          false             @false Return 0 
 52       34          true              @true Return 1 
 53       35          rand              @rand Generate random number 
                                        between 0 and 1 
 54       36          date              @date (Y,M,D) Generate the days 
                                        since 1/1/1900 (Y = 0-199, 
                                        M = 1-12, D = 1-31) 
 55       37          today             @today  Output serial date number 
                                        from cpu's clock 
 56       38          pmt               @pmt (princ, int, term)Payment 
 57       39          pv                @pv (pmt, int, term) Present value 
 58       3A          fv                @fv (pmt, int, term) Future Value 
 59       3B          if                @if (argument, them else) Boolean 
                                          if 
 60       3C          day               @day (x) Print day of the month from 
                                          a serial date number 
 61       3D          month             @month (x) Print month of the year 
                                          from a serial date number 
 62       3E          round             @round (x,d) Round number x to d 
                                          decimal places 

 The above Opcodes are variable, constant and argument related. 

 For example: @sqrt (9) is the square root of the constant 9 
              @sqrt (A1) is the square root of the variable A1 
              @sqrt ((A1*2)/3) is the square root of the argument (A1*2)/3 
                (Note that the argument ((A1*2)/3) will be processed before 
                the @sqrt function.) 






                                   FORMULA 

 Table 1-c  Formula Compiler Opcode Table, Multiple Arguments 

 Dec      Hex      Operation        Description 
 80       50       sum              @sum (range and/or cell and/or  
                                      constant) Use commas to separate 
                                      arguments 
 81       51       avg              @avg (range and/or cell and/or constant) 
                                      Use commas to separate arguments 
 82       52       cnt              @cnt (range and/or cell and/or constant) 
                                      Use commas to separate arguments 
 83       53       min              @min (range and/or cell and/or constant) 
                                      Use commas to separate arguments 
 84       54       max              @max (range and/or cell and/or constant 
                                      Use commas to separate arguments 
 85       55       vlookup          @Vlookup (x, range, offset) X = Cell 
                                      address or constant, range = Table, 
                                      Offset = Row in Table 
 86       56       npv              @npv (int, range) Net present value; 
                                      Int = interest, Range = cash flows 
 87       57       var              @var (range) Variance of all items in 
                                      list 
 88       58       std              @std (range) Standard deviation of all 
                                      items in list 
 89       59       irr              @irr (guess,range) Guess = % estimate; 
                                      Range = range of cash flows 
 90       5A       hlookup          @hlookup, (x, range, offset) X = Cell 
                                      address or constant, range = Table, 
                                      Offseet = row in Table 
 91       5B       dsum             Database statistical functions 
 92       5C       avg              Database statistical functions 
 93       5D       dcnt             Database statistical functions 
 94       5E       dmin             Database statistical functions 
 95       5F       dmax             Database statistical functions 
 96       60       dvar             Database statistical functions 
 97       61       dstd             Database statistical functions 

 The above Opcodes deal specifically with ranges and multiple arguments. 
 For example: @sum (A1...A10, B25, 9) contains a range, a variable and a 
 constant as the arguments. 

           All function Opcodes which accept a variable number of arguments 
           are followed by a 1-byte argument count. 





                                   FORMULA 

 Table 1-d  Operator Precedence Table 

 Operator       Unary Precedence       Binary Precedence 
   +                 6                        4 
   -                 6                        4 
   *                 na                       5 
   /                 na                       5 
   ^                 na                       7 
   =                 na                       3 
  < >                na                       3 
  < =                na                       3 
  > =                na                       3 
   <                 na                       3 
   >                 na                       3 
 #and#               na                       1 
  #or#               na                       1 
 #not#               2                        na 

 A Note on the Decompiler 

 The algorithm for the formula decompiler was taken verbatim from: 

 Writing Interactive Compilers and Interpreters, P.J. Brown, John Wiley 
 and Sons, 1979.  See chapter 6.2.  The algorithm itself is described on 
 pages 216 and 217. 

 This algorithm is also described in the following article: 

 More on the Re-creation of Source Code from Reserve Polish, P.J. Brown, 
 Software Practice and Experience, Vol 7, 545-551 (1977). 






                                    TABLE 

 Record Type        Code         Body length 
 TABLE              24 (18h)     25 bytes 

 Record Description 

 Table range 

 Used by both 1-2-3 and Symphony. 
 In 1-2-3, the record refers to Data Tables 1 and 2. 
 In Symphony, it refers to What-if Tables 1 and 2. 

 Byte Number            Byte Description 

 0                        0 = no table 
                          1 = Table 1 
                          2 = Table 2 
 1-2                    Table Range;          starting column 
 3-4                                          starting row 
 5-6                                          ending column 
 7-8                                          ending row 
 9-10                  Input Cell 1;             starting column 
 11-12                                           starting row 
 13-14                                           ending column 
 15-16                                           ending row 
 17-18                 Input Cell 2;          starting column 
 19-20                                        starting row 
 21-22                                        ending column 
 23-24                                        ending row 





                                    QRANGE 

 Record Type        Code         Body length 
 QRANGE             25 (19h)     25 bytes 

 Record Description 

 Query range 
 Used in 1-2-3 only. 

 Byte Number       Byte Description 

 0-1               Input ranges;            starting column 
 2-3                                        starting row 
 4-5                                        ending column 
 6-7                                        ending row 
 8-9               Output ranges            starting column 
 10-11                                      starting row 
 12-13                                      ending column 
 14-15                                      ending row 
 16-17             Criteria;                starting column 
 18-19                                      starting row 
 20-21                                      ending column 
 22-23                                      ending row 
 24                Command;                    0 = no command 
                                               1 = find 
                                               2 = extract 
                                               3 = delete 
                                               4 = unique 






                                    PRANGE 

 Record Type        Code        Body length 
 PRANGE             26 (1Ah)    8 bytes 

 Record Description 

 Print range 

 Used in 1-2-3 only. 

 Byte Number        Byte Description 
 0-1                starting column 
 2-3                starting row 
 4-5                ending column 
 6-7                ending row 






                                    SRANGE 

 Record Type         Code           Body length 
 SRANGE              27 (1Bh)       8 bytes 

 Record Description 

 Sort range 

 Used in 1-2-3 only. 

 Byte Number         Byte Description 

 0-1                 starting column 
 2-3                 starting row 
 4-5                 ending column 
 6-7                 ending row 





                                    FRANGE 

 Record Type         Code          Body length 
 FRANGE              28 (1Ch)      8 bytes 

 Record Description 

 Fill range 

 Used by both 1-2-3 and Symphony. 

 Byte Number          Byte Description 

 0-1                  starting column 
 2-3                  starting row 
 4-5                  ending column 
 6-7                  ending row 







                                    KRANGE 


 Record Type          Code           Body length 
 KRANGE               29 (1Dh)       9 bytes 

 Record Description 

 Primary sort key range 

 Used in 1-2-3 only. 

 Byte Number          Byte Description 

 0-1                  starting column 
 2-3                  starting row 
 4-5                  ending column 
 6-7                  ending row 
 8                    Order:  0 = descending order 
                              FF = ascending order 



                                    HRANGE 


 Record Type         Code         Body length 
 HRANGE              32 (20h)     16 bytes 

 Record Description 

 Distribution range 

 Used by both 1-2-3 and Symphony. 

 Byte Number         Byte Description 

 0-1                 Values range;            starting column 
 2-3                                          starting row 
 4-5                                          ending column 
 6-7                                          ending row 
 8-9                 Bin range                   starting column 
 10-11                                           starting row 
 12-13                                           ending column 
 14-15                                           ending row 




                                  KRANGE2 


 Record Type           Code           Body length 

 KRANGE2               35(23h)        9 bytes 

 Record Description 

 Secondary sort key range 

 Use in 1-2-3 only. 

 Byte Number              Byte Description 

 0-1                      starting column 
 2-3                      starting row 
 4-5                      ending column 
 6-7                      ending row 
 8                        Order;  0 =  descending order 
                                  FF = ascending order 





                                    PROTEC 



 Record Type            Code              Body length 

 PROTEC                 36(24h)           1 byte 

 Record Description 

 Global protection 

 Used by both 1-2-3 and Symphony. 

 Byte Number            Byte Description 
 0                      0 = global protection OFF 
                        1 = global protection ON 





                                    FOOTER 


 Record Type        Code        Body length 

 FOOTER             37(25h)     242 bytes 

 Record Description 

 Print footer 

 Used in 1-2-3 only. 

 Byte Number       Byte Description 
 0-242             NULL termination ASCII string 





                                    HEADER 

 Record Type           Code            Body length 

 HEADER                38(26h)         242 bytes 

 Record Description 

 Print header 

 Used in 1-2-3 only. 

 Byte Number         Byte Description 
 0-242               NULL termination ASCII string 


                                    SETUP 


 Record Type           Code           Body length 

 SETUP                 39(27h)        40 bytes 

 Record Description 

 Print setup 

 Used in 1-2-3 only. 

 Byte Number          Byte Description 

 0-40                 NULL terminated ASCII string 



                                   MARGINS 



 Record Type             Code            Body length 

 MARGINS                 40(28h)         10 bytes 

 Record Description 

 Print margins code 

 Used in 1-2-3 only. 

 Byte Number             Byte Description 

 0-1                     left margin 
 2-3                     right margin 
 4-5                     page length 
 6-7                     top margin 
 8-9                     bottom margin 




                                   LABELFMT 



 Record Type           Code            Body length 

 LABELFMT              41 (29h)        1 byte 

 Record Description 

 Label alignment 

 Used by both 1-2-3 and Symphony 

 Byte Number          Byte Description 

 0                    27h = left 
                      22h = right 
                      5Eh = center 




                                    TITLES 


 Record Types         Code            Body length 

 TITLES               42(2Ah)         16 bytes 

 Record Description 

 Print borders 

 Used in 1-2-3 only. 

 Byte Number         Byte Description 

 0-1                 Row border;                  starting column 
 2-3                                              starting row 
 4-5                                              ending column 
 6-7                                              ending row 
 8-9                 Column border;                  starting column 
 10-11                                               starting row 
 12-13                                               ending column 
 14-15                                               ending row 




                                    GRAPH 


 Record Type          Code          Body length 

 GRAPH                45(2Dh)       437 bytes 

 Record Description 

 Current graph settings 

 Used in 1-2-3 only. 

 Byte Number             Byte Description 

                         -- see Table 2  Graph Record Structure -- 



                                    GRAPH 


 Table 2   Graph Record Structure 

 Byte Number          Byte Description 

 0-1                  X Range;                starting column 
 2-3                                          starting row 
 4-5                                          ending column 
 6-7                                          ending row 

 8-9                  A Range;                    starting column 
 10-11                                        starting row 
 12-13                                        ending column 
 14-15                                        ending row 

 16-17                B Range;                starting column 
 18-19                                        starting row 
 20-21                                        ending column 
 22-23                                        ending row 

 24-25                C Range;                    stating column 
 26-27                                        starting row 
 28-29                                        ending column 
 30-31                                        ending row 
 32-33                D Range;                starting column 
 34-35                                        starting row 
 36-37                                        ending column 
 38-39                                        ending row 

 40-41                E Range;                starting column 
 42-43                                        starting row 
 44-45                                        ending column 
 46-47                                        ending row 

 48-49                F Range;                starting column 
 50-51                                        starting row 
 52-53                                        ending column 
 54-55                                        ending row 

 56-57                A Labels;               starting column 
 58-59                                        starting row 
 60-61                                        ending column 
 62-63                                        ending row 

 64-65                B Labels;               starting column 
 66-67                                        starting row 
 68-69                                        ending column 
 70-71                                        ending row 

 72-73                C Labels;               starting column 
 74-75                                        starting row 
 76-77                                        ending column 
 78-79                                        ending row 

 80-81                D Labels;               starting column 
 82-83                                        starting row 
 84-85                                        ending column 
 86-87                                        ending row 




                                    GRAPH 


 Table 2   (continued)   Graph Record Structure 

 Byte Number         Byte Description 

 88-89               E Labels;                starting column 
 90-91                                        starting row 
 92-93                                        ending column 
 94-95                                        ending row 
 96-97               F Labels;                starting column 
 98-97                                        starting row 
 100-101                                      ending column 
 102-103                                      ending row 

 104                 Graph type               0 = XY, 1 = bar, 2 = pie, 
                                                4 = line, 5 = stacked bar 

 105                 Grid;                    0 = none, 1 = horizontal, 
                                                2 = vertical, 3 = both 

 106                 Color                    0 = black-white, FF = color 

 107                 A Range line format;     0 = none, 1 = line, 
                                                2 = symbol, 3 = line-symbol 

 108                 B Range line format;     0 = none, 1 = line, 
                                                2 = symbol, e = line-symbol 

 109                 C Range line format;     0 = none, 1 = line, 
                                                2 = symbol, 3 = line-symbol 

 110                 D Range line format;     0 = none, 1 = line, 
                                                2 = symbol, 3 = line-symbol 

 111                 E Range line format;     0 = none, 1 = line, 
                                                2 = symbol, 3 = line-symbol 

 112                 F Range line format;     0 = none, 1 = line, 
                                                2 = symbol, 3 = line-symbol 

 113                 A Range data label       0 = center, 1 = right,  
                      alignment;                2 = below, 3 = left, 
                                                4 = above 

 114                 B Range data label       0 = center, 1 = right 
                      alignment;                2 = below, 3 = left 
                                                4 = above 

 115                 C Range data label       0 = center, 1 = right 
                      alignment;                2 = below, 3 = left 
                                                4 = above 

 116                 D Range data label       0 = center, 1 = right 
                      alignment;                2 = below, 3 = left 
                                                4 = above 

 117                 E Range data label       0 = center, 1 = right 
                      alignment;                2 = below, 3 = left 
                                                4 = above 

 118                 F Range data label       0 = center, 1 = right 
                      alignment;                2 = below, 3 = left 
                                                4 = above 




                                    GRAPH 


 Table 2  (continued)  Graph Record Structure 

 Byte Number         Byte Description 

 119                 Scale                                    0 = auto 
                                                              FF = manual 
 120-127             X lower limit in floating point format 

 128-135             X upper limit in floating point format 

 136                 Y scale;                                 0 = automatic 
                                                              FF = manual 

 137-144             Y lower limit in floating point format 

 145-152             Y upper limit in floating point format 



 153-192             First title 

 193-232             Second title 

 233-272             X title 

 273-312             Y title 

 313-332             A legend 

 333-352             B legend 

 353-372             C legend 

 373-392             D legend 

 393-412             E legend 

 413-432             F legend 

 433                 X format 

 434                 Y format 

 435-436             Skip factor 





                                    NGRAPH 


 Record Type        Code         Body length 

 NGRAPH             46 (2EH)     453 bytes 

 Record Description 

 Named current graph settings 

 Used in 1-2-3 only. 

 Bytes Number       Byte Description 

                    -- see Table 3  Ngraph Record Structure -- 


                                    NGRAPH 


 Table 3  NGraph Record Structure 

 Byte Number      Byte Description 

 0-15             Name;                  NULL terminated ASCII string 

 16-17            X Range;               starting column 
 18-19                                   starting row 
 20-21                                   ending column 
 22-23                                   ending row 

 24-25            A Range;               starting column 
 26-27                                   starting row 
 28-29                                   ending column 
 30-31                                   ending row 

 32-33            B Range;               starting column 
 34-35                                   starting row 
 36-37                                   ending column 
 38-39                                   ending row 

 40-41            C Range;               starting column 
 42-43                                   starting row 
 44-45                                   ending column 
 46-47                                   ending row 

 48-49            D Range;               starting column 
 50-51                                   starting row 
 52-53                                   ending column 
 54-55                                   ending row 

 56-57            E Range;               starting column 
 58-59                                   starting row 
 60-61                                   ending column 
 62-63                                   ending row 

 64-65            F Range;               stating column 
 66-67                                   starting row 
 68-69                                   ending column 
 70-71                                   ending row 

 72-73            A Labels;              starting column 
 74-75                                   starting row 
 76-77                                   ending column 
 78-79                                   ending row 

 80-81            B Labels;              starting column 
 82-83                                   starting row 
 84-85                                   ending column 
 86-87                                   ending row 

 88-89            C Labels;              starting column 
 90-91                                   starting row 
 92-93                                   ending column 
 94-95                                   ending row 

 96-97            D Labels;              starting column 
 98-99                                   starting row 
 100-101                                 ending column 
 102-103                                 ending row 


                                    NGRAPH 


 Table 3  (continued)  NGraph Record Structure 

 Byte Number       Byte Description 

 104-105           E Labels;                  starting column 
 106-107                                      starting row 
 108-109                                      ending column 
 110-111                                      ending row 

 112-113           F Labels;                  starting column 
 114-115                                      starting row 
 116-117                                      ending column 
 118-119                                      ending row 

 120               Graph type;                0 = XY, 1 = bar, 2 = pie, 
                                                4 = line, 5 = stacked bar 

 121               Grid                       0 = none, 1 = horizontal, 
                                                2 = vertical, 3 = both 

 122               Color;                     0 = black-white, FF = color 

 123               A Range line format;       0 = none, l = line, 
                                                2 = symbol, 3 = line-symbol 

 124               B Range line format;       0 = none, 1 = line, 
                                                2 = symbol, 3 = line-symbol

 125               C Range line format;       0 = none, 1 = line                                                                        2 = symbol, 3 = line-symbol 
                                              2 = symbol, 3 = line-symbol 

 126               D Range line format;       0 = none, 1 = line 
                                                2 = symbol, 3 = line-symbol 

 127               E Range line format;       0 = none, 1 = line 
                                                2 = symbol, 3 = line-symbol 

 128               F Range line format;       0 = none, 1 = line 
                                                2 = symbol, 3 = line-symbol 

 129               A Range data label         0 = center, 1 = right 
                     alignment                  2 = below, 3 = left, 
                                                4 = above 

 130               B Range data label         0 = center, 1 = right 
                     alignment                  2 = below, 3 = left 
                                                4 = above 

 131               C Range data label         0 = center, 1 = right 
                     alignment                  2 = below, 3 = left 
                                                4 = above 

 132               D Range data label         0 = center, 1 = right 
                     alignment                  2 = below, 3 = left 
                                                4 = above 

 133               E Range data label         0 = center, 1 = right 
                     alignment                  2 = below, 3 = left 
                                                4 = above 

 134               F Range data label         0 = center, 1 = right 
                     alignment                  2 = below, 3 = left 

 135               Scale                      0 = auto 
                                              FF = manual 



                                    NGRAPH 


 Table 3  (continued)  NGraph Record Structure 

 Byte Number         Byte Description 

 136-143             X lower limit in floating point format 

 144-151             X upper limit in floating point format 

 152                 Y scale;                           0 = automatic 
                                                        FF = manual 

 153-160             Y lower limit in floating point format 

 161-168             Y upper limit in floating point format 


 209-224             First title 

 225-248             Second title 

 249-288             X title 

 289-328             Y title 

 329-348             A legend 

 349-368             B legend 

 369-388             C legend 

 389-408             D legend 

 409-428             E legend 

 429-448             F legend 

 449                 X format 

 450                 Y format 

 451-452             Skip factor 




                                  CALCCOUNT 


 Record Type       Code        Body length 

 CALCCOUNT         47(2Fh)     1 byte 

 Record Description 

 Iteration count 

 Used in 1-2-3 and Symphony. 

 Byte Number       Byte Description 

 0                 Iteration count 




                                 UNFORMATTED 

 Record Type         Code         Body length 

 UNFORMATTED         48(30h)      1 byte 

 Record Description 

 Formatted/unformatted print 

 Used in 1-2-3 only. 

 Byte Number         Byte Description 

 0                   0 = formatted 
                     1 = unformatted 




                                  CURSORW12 


 Record Type         Code         Body length 

 CURSORW12           49(31h)      1 

 Record Description 

 Cursor location 

 Used in 1-2-3 only. 

 Byte Number         Byte Description 

 0                   1 = cursor in Window 1 
                     2 = cursor in Window 2 



                                    WINDOW 


 Record Type              Code             Body length 

 WINDOW                   50(32h)          144 bytes 

 Record Description 

 Window record structure 

 Used in Symphony only. 

 Byte Number              Byte Description 

                          -- see Table 4  Window Record Structure -- 



                                    WINDOW 


 Table 4  Window Record Structure 

 Byte Number          Byte Description 

 0-15                 Window name                    NULL terminated ASCII 
                                                     string 
 16-17                Cursor position;               column 
 18-19                                               row 
 20                   Format (see Appendix A, 
                      Cell Format Encoding) 

 21                   Unused 
 22-23                Column width 
 24-25                Total number of columns 
 26-27                Total number of rows 
 28-29                Non-Title Home Position;       column 
 30-31                                               row 
 32-33                Number of title columns 
 34-35                Number of title rows 
 36-37                Left title column 
 38-39                Top title row 
 40-41                Home position column 
 42-43                Home position row 
 44-45                Number of screen columns 
 46-47                Number of screen rows 

 48                   Hidden Status;                 0 = hidden 
                                                     FF = not hidden 

 49                   Previous window;               0 = SHEET 
                                                     1 = DOC 
                                                     2 = GRAPH 
                                                     3 = COMM 
                                                     4 = FORM 
                                                     5 = APPLICATION 

 50                  Border display;                 0 = cell 
                                                     FF = no cell 

 51                  Border display lines;           0 = lines 
                                                     FF = no lines 

 52-53               Window Range                    starting column 
 54-55                                               starting row 
 56-57                                               ending column 
 58-59                                               ending row 

 60-61               Offset 

 62                  Insert mode flag;               0 = OFF 
                                                     non-zero = ON 

 63-78               Graph name 







                                    WINDOW 



 Table 4  (continued)  Window Record Structure 

 Byte Number          Byte Description 
 79                   Window type;                 0 = SHEET 
                                                   1 = DOC 
                                                   2 = GRAPH 
                                                   3 = COMM 
                                                   4 = FORM 
                                                   5 = APPLICATION 

 80                   Automatic display mode       "a" = automatic (ASCII 
                      flag;                          lower case "a") 
                                                     else = manual 

 81                   Forms filter;                0 = filter 
                                                   non-zero = no filter 

 82-97                Associated form name 
 98-99                Forms current record 

 100                  Space display;               0 = no spaces 
                                                   non-zero = spaces 

 101                  Line spacing;                1 = 1 space 
                                                   2 = 2 spaces 
                                                   3 = 3 spaces 

 102                  Justify type                 "1" = left (ASCII lower 
                                                     case "1") 
                                                   "r" = right (ASCII lower 
                                                     case "r") 
                                                   "c" = center (ASCII 
                                                     lower case "c" 
                                                   "e" = even (ASCII lower 
                                                     case "e" 

 103-104              Right Margin                 0 = FOh characters 
                                                     = right margin 
                                                   FF = no user-defined
                                                     right margin; use  
                                                     default value 

 105-106              Left Margin                  0-FOh characters = left 
                                                     margin 

 107-108              Tab interval 
 109                  CR display;                  0 = soft 
                                                   non-zero = hard 
 110                  Auto-justify on copy/        0 = no 
                        move;                      non-zero = yes 
 111-126              Associated application 
                        name 
 127-143              Reserved Application Area 



                                    STRING 

 Record Type           Code           Body length 

 STRING                51(33h)        variable 

 Record Description 

 Value of string formula 

 Used in Symphony only. 

 Byte Number          Byte Description 

 0                    format (see Appendix A, Cell Format Encoding) 
 1-2                  column 
 3-4                  row 
 5+                   NULL terminated ASCII string 



                                   PASSWORD 


 Record Type          Code           Body length 
 PASSWORD             55(37h)        4 byte 

 Record Description 

 File lockout (CHKSUM) 

 This is proprietary information. 

 Used in Symphony only. 

 Byte Number         Byte Description 

                     -- not available -- 



                                    LOCKED 

 Record Type           Code             Body length 

 LOCKED                56(38h)          1 byte 

 Record Description 

 Lock Flag 

 Used in Symphony only. 

 Byte Number           Byte Description 

 0                     0 = OFF 
                       1 = ON 

                                    QUERY 


 Record Type          Code           Body length 

 QUERY                60(Ch)         127 bytes 

 Record  Description 

 Query settings 

 Used in Symphony only. 

 Byte Number          Byte Description 

                      -- see Table 5  Query Record Structure -- 


                                    QUERY 

 Table 5  Query Record Structure 

 Byte Number            Byte Description 

 0-15                   Name;                 NULL termination ASCII string 

 16-17                  Input range;          starting column 
 18-19                                        starting row 
 20-21                                        ending column 
 22-23                                        ending row 

 24-25                  Output Range;         starting column 
 26-27                                        starting row 
 28-29                                        ending column 
 30-31                                        ending row 

 32-33                  Criteria Range;       starting column 
 34-35                                        starting row 
 36-37                                        ending column 
 38-39                                        ending row 

 40-41                  Form Entry;           starting column 
 42-43                                        starting row 
 44-45                                        ending column 
 46-47                                        ending row 

 48-49                  Form Def. Range;      starting column 
 50-51                                        starting row 
 52-53                                        ending column 
 54-55                                        ending row 

 56-57                  Report Output;        starting column 
 58-59                                        starting row 
 60-61                                        ending column 
 62-63                                        ending row 

 64-65                  Report Header;        starting column 
 66-67                                        starting row 
 68-69                                        ending column 
 70-71                                        ending row 

 72-73                  Report Footer;        starting column 
 74-75                                        starting row 
 76-77                                        ending column 
 78-79                                        ending row 

 80-81                  Table Range;          starting column 
 82-83                                        starting row 
 84-85                                        ending column 
 86-87                                        ending row 

 88-89                  Input Cell;           starting column 
 90-91                                        starting row 
 92-93                                        ending column 
 94-95                                        ending row 

                                    QUERY 


 Table 5  (continued)  Query Record Structure 

 Byte Number          Byte Description 

 96-97                1st Key range;               starting column 
 98-99                                             starting row 
 100-101                                           ending column 
 102-103                                           ending row 

 104-105              2nd Key range;               starting column 
 106-107                                           starting row 
 108-109                                           ending column 
 110-111                                           ending row 

 112-113              3rd Key range;               starting column 
 114-115                                           starting row 
 116-117                                           ending column 
 118-119                                           ending row 

 120                  Last command;                0 = no command 
                                                   1 = find 
                                                   2 = extract 
                                                   3 = delete 
                                                   4 = unique 

 121                  1st Key order;               0 = descending order 
                                                   FF = ascending order 

 122                  2nd Key order;               0 = descending order 
                                                   FF = ascending order 

 123                  3rd Key order                0 = descending order 
                                                   FF = ascending order 

 124                  Report number of records;    0 = multiple 
                                                   FF = single 

 125                  Number of records;           0 = multiple 
                                                   FF = single 

 126                  Marks;                       0 = yes 
                                                   FF = no 



                                  QUERYNAME 


 Record Type          Code            Body length 
 QUERYNAME            61(3Dh)         16 bytes 

 Record Description 

 Current Query Name 

 Used in Symphony only. 

 Byte Number         Byte Description 

 0-15                NULL terminated ASCII string 

                                    PRINT 



 Record Type          Code            Body length 
 PRINT                62(3Eh)         679 bytes 

 Record Description 

 Print record 

 Used in Symphony only. 

 Byte Number          Byte Description 

                      -- see Table 6 Print Record Structure -- 



                                    PRINT 


 Table 6  Print Record Structure 

 Byte Number        Byte Description 

 0-15               Print setting name;       NULL terminated ASCII string 

 16-17              Source range;             starting column 
 18-19                                        starting row 
 20-21                                        ending column 
 22-23                                        ending row 

 24-25              Row border;               starting column 
 26-27                                        starting row 
 28-29                                        ending column 
 30-31                                        ending row 

 32-33              Column border;            starting column 
 34-35                                        starting row
 36-37                                        ending column 
 38-39                                        ending row 

 40-41              Destination;              starting column 
 42-43                                        starting row 
 44-45                                        ending column 
 46-47                                        ending row 

 48                 Print format;             0 = as displayed 
                                              non-zero = formulas 

 49                 Page breaks               0 = yes 
                                              non-zero = no 
 50                 Line spacing 
 51-52              Left Margin 
 53-54              Right Margin 
 55-56              Page length 
 57-58              Top 
 59-60              Bottom of page 

 61-101             Setup string;             NULL terminated ASCII string 
 102-342            Header;                   NULL terminated ASCII string 
 343-584            Footer;                   NULL terminated ASCII string 
 585-600            Source database name;     NULL terminated ASCII string 

 601                Attribute;                0 = no 
                                              non-zero = yes 

 602                Space compression;        0 = no 
                                              non-zero = yes 

 603                Print destination         0 = printer 
                                              1 = file 
                                              2 = range 

 604-605            Starting page 
 606-607            Ending page 
 608-677            Destination filename;     NULL terminated ASCII string 

 678                Wait;                     0 = no 
                                              non-zero = yes 



                                  PRINTNAME 


 Record Type        Code           Body length 

 PRINTNAME          63(3Fh)        16 bytes 

 Record Description 

 Current Print Record Name 

 Used in Symphony only. 

 Byte Number        Byte Description 

 0-15               NULL terminated ASCII string 



                                    GRAPH2 



 Record Type        Code        Body length 

 GRAPH2             64(40h)     499 bytes 


 Record Description 

 Graph record 

 Used in Symphony only. 

 Byte Number        Byte Description 

                    -- see Table 7  Symphony Graph Record Structure -- 



                                    GRAPH2 


 Table 7  Symphony Graph Record Structure 

 Byte Number        Byte Description 
 0-15               Name;                NULL terminated ASCII string 
 16-17              XRange;              starting column 
 18-19                                   starting row 
 20-21                                   ending column 
 22-23                                   ending row 

 24-25              A Range;             starting column 
 26-27                                   starting row 
 28-29                                   ending column 
 30-31                                   ending row 

 32-33              B Range;             starting column 
 34-35                                   starting row 
 36-37                                   ending column 
 38-39                                   ending row 

 40-41              C Range;             starting column 
 42-43                                   starting row 
 44-45                                   ending column 
 46-47                                   ending row 

 48-49              D Range;             starting column 
 50-51                                   starting row 
 52-53                                   ending column 
 54-55                                   ending row 

 56-57              E Range;             starting column 
 58-59                                   starting row 
 60-61                                   ending column 
 62-63                                   ending row 

 64-65              F Range;             starting column 
 66-67                                   starting row 
 68-69                                   ending column 
 70-71                                   ending row 

 72-73              A Labels;            starting column 
 74-75                                   starting row 
 76-77                                   ending column 
 78-79                                   ending row 

 80-81              B Labels;            starting column 
 82-83                                   starting row 
 84-85                                   ending column 
 86-87                                   ending row 

 88-89              C Labels;            starting column 
 90-91                                   starting row 
 92-93                                   ending column 
 94-95                                   ending row 


                                    GRAPH2 


 Table 7  (continued)  Symphony Graph Record Structure 

 Byte Number         Byte Description 

 96-97               D Labels;                     starting column 
 98-99                                             starting row 
 100-101                                           ending column 
 102-103                                           ending row 

 104-105             E Labels;                     starting column 
 106-107                                           starting row 
 108-109                                           ending column 
 110-111                                           ending row 

 112-113             F Labels;                     starting column 
 114-115                                           starting row 
 116-117                                           ending column 
 118-119                                           ending row 

 120                 Graph type;                   0 = XY, 1 = bar, 2 = pie, 
                                                     4 = line, 5 = stacked 
                                                     bar 

 121                 Grid;                         0 = none, 1 = horizontal, 
                                                     2 = vertical, 3 = both 

 122                 Color;                        0 = black-white,
                                                     FF = color 

 123                 A Range line format;          0 = none, 1 = line,  
                                                     2 = symbol,  
                                                     3 = line-symbol 

 124                 B Range line format;          0 = none, 1 = line,  
                                                     2 = symbol,
                                                     3 = line-symbol 

 125                 C Range line format;          0 = none, 1 = line, 
                                                     2 = symbol, 
                                                     3 = line-symbol 

 126                 D Range line format;          0 = none, 1 = line 
                                                     2 = symbol, 
                                                     3 = line-symbol 

 127                 E Range line format;          0 = none, 1 = line 
                                                     2 = symbol, 
                                                     3 = line-symbol 

 128                 F Range line format;          0 = none, 1 = line 
                                                     2 = symbol 
                                                     3 = line-symbol 

 129                 A Range data label alignment; 0 = center, 1 = right,  
                                                     2 = below, 3 = left, 
                                                     4 = above 

 130                 B Range data label alignment; 0 = center, 1 = right 
                                                     2 = below, 3 = left 
                                                     4 = above 

 131                 C Range data label alignment; 0 = center, 1 = right 
                                                     2 = below, 3 = left 
                                                     4 = above 

 132                 D Range data label alignment; 0 = center, 1 = right 
                                                     2 = below, 3 = left 
                                                     4 = above 

 133                 E Range data label alignment; 0 = center, 1 = right 
                                                     2 = below, 3 = left 
                                                     4 = above 

 134                 F Range data label alignment; 0 = center, 1 = right 
                                                     2 = below, 3 = left 
                                                     4 = above 






                                    GRAPH2 


 Table 7  (continued)  Symphony Graph Record Structure 

 Byte Number    Byte Description 

 135            X Scale                                 0 = auto 

 136-143        X lower limit in floating point format  FF = manual 

 144-151        X upper limit in floating point format 

 152            Y scale;                                0 = automatic 
                                                        FF = manual 

 153-160        Y lower limit in floating point format 
 161-168        Y upper limit in floating point format 
 169-208        First title 
 209-248        Second title 
 249-288        X title 
 289-328        Y title 
 329-348        A legend 
 349-368        B legend 
 369-388        C legend 
 389-408        D legend 
 409-428        E legend 
 429-448        F legend 
 449            X format 
 450            Y format 
 451-452        Skip factor 
 453            X scale flag; (x1K)                     0 = ON 
                                                        FF = OFF 

 454            Y scale flag;(x1K)                      0 = ON 
                                                        FF = OFF 

 455            suppress;                               0 = no 
                                                        else = yes 

 456-463        Bar origin (float) 
 464-471        X linear scale (float) 
 472-479        Y linear scale (float) 
 480            X log scale 
 481            Y log scale 

 482            graph region color;                     X hue code 
 483                                                    A hue code 
 484                                                    B hue code 
 485                                                    C hue code 
 487                                                    D hue code 
 488                                                    F hue code 
 489-490        Y width 
 491-498        Aspect (float) 




                                  GRAPHNAME 


 Record Type          Code          Body length 

 GRAPHNAME            65 (41h)      16 bytes 

 Record Description 

 Current Graph Record Name 

 Used in Symphony only. 

 Byte Number          Byte Description 

 0-15                 NULL terminated ASCII string 


                                     ZOOM 



 Record Type      Code          Body length 

 ZOOM             66 (42h)      9 bytes 

 Record Description 

 Original coordinates expanded window 

 Used in Symphony only. 

 Byte Number      Byte Description 

 0                iszoom?                0 = no 
                                         1 = yes 
 1-2              X coordinates 
 3-4              Y coordinates 
 5-6              column depth 
 7-8              row depth 




                                   SYMSPLIT 


 Record Type         Code         Body length 

 SYMSPLIT            67 (43h)     2 bytes 

 Record Description 

 Number of split windows 

 Used in Symphony only. 

 Byte Number        Byte Description 

 0-1                number of split windows 




                                    NSROWS 

 Record Type Code Body length 

 NSROWS        Code         Body length 

 NSROWS        68 (44h)     2 bytes 

 Record Description 

 Number of screen rows 

 Used in Symphony only. 

 Byte Number    Byte Description 

 0-1            number of screen rows 





                                    NSCOLS 


 Record Type          Code           Body length 

 NSCOLS               69 (45h)       2 bytes 

 Record Description 

 Number of screen columns 

 Used in Symphony only. 

 Byte Number         Byte Description 

 0-1                 Number of screen columns 



                                    RULER 



 Record Type        Code        Body length 

 RULER              70 (46h)    25 bytes 

 Record Description 

 Name ruler range 

 Used in Symphony only. 

 Byte Number        Byte Description 

 0-15               Name;                NULL terminated ASCII string 
 16-17              Range;                 starting column 
 18-19                                     starting row 
 20-21                                     ending column 
 22-23                                     ending row 
 24                 Range type;            0 = single cell 
                                           1 = range 



                                    NNAME 


 Record Type           Code          Body length 

 NNAME                 71 (47h)      25 bytes 

 Record Description 

 Named sheet range 

 Used in Symphony only. 

 Byte Number        Byte Description 

 0-15               Name;                NULL terminated ASCII string 
 16-17              Range;                  starting column 
 18-19                                      starting row 
 20-21                                      ending column 
 22-23                                      ending row 
 24                 Range type;          0 = single cell 
                                         1 = range 



                                    ACCOM 


 Record Type          Code         Body length 

 ACOMM                72 (48h)     65 bytes 

 Record Description 

 Autoload communications file 

 Used in Symphony only. 

 Byte Number         Byte Description 

 0-64                Path name to Autoload file; 
                     NULL terminated ASCII string 




 AMACRO 


 Record Type        Code          Body length 

 AMACRO             73 (49h)      8 bytes 

 Record Description 

 Autoexecute macro address 

 Used in Symphony only. 

 Byte Number        Byte Description 

 0-1                starting column 
 2-3                starting row 
 4-5                ending column 
 6-7                ending row 



                                    PARSE 


 Record Type        Code         Body length 

 PARSE              74 (4Ah)     16 bytes 

 Record Description 

 Query parse information 

 Used in Symphony only. 

 Byte Number       Byte Description 

 0-1               Parse range;          starting column 
 2-3                                     starting row 
 4-5                                     ending column 
 6-7                                     ending row 
 8-9               Review range;            starting column 
 10-11                                      starting row 
 12-13                                      ending column 
 14-15                                      ending row 
```
{% endraw %}

## WSFF3.TXT

{% raw %}
```
                            WORKSHEET FILE FORMAT 
                                  FROM LOTUS 

                      APPENDIX A - CELL FORMAT ENCODING

               Copyright(c) 1984, Lotus Development Corporation 
                               161 First Street 
                        Cambridge, Massachusetts 02142 
                                (617) 492-7171 
                      Electronic Edition, December, 1984 
                             All Rights Reserved 























































                      APPENDIX A:  Cell Format Encoding 


 The first byte of a content-related record contains a cell format code. 

 Format is determined at the bit level. 


 Table 8   Cell Format Encoding 

 Bit number     Description               Code             Meaning 
 7              protection                1                protected 
                                          0                unprotected 

 4,5,6          format type               0                fixed 
                                          1                scientific 
                                                             notation 
                                          2                currency 
                                          3                percent 
                                          4                comma 
                                          5                unused 
                                          6                unused 
                                          7                special 
 0,1,2,3        number of decimal         0-15 
                 places decoded  
                 (if format type = 0-6) 

                special format type       0                +/- 
                (if format type = 7)      1                general 
                                          2                day-month-year 
                                          3                day-month 
                                          4                month-year 
                                          5                text 
                (Symphony only)           6                hidden 
                (Symphony only)           7                date;hour-min-sec 
                (Symphony only)           8                date;hour-min 
                (Symphony only)           9                date;intnt'l1 
                (Symphony only)           10               date;intnt'l1 
                (Symphony only)           11               time;intnt'l1 
                (Symphony only)           12               time;intnt'l2 
                                          13-14            unused 
                                          15               default 







 EXAMPLE 

 Currency format, two decimal places, unprotected cell 


 Bit Number    7   6   5   4   3   2   1   0 
 Binary Code   0   0   1   0   0   0   1   0 
                   --------- 
                  Format Type ---------------  
               Protection     Number of Decimal Places 
                                  or Special Format 

 The byte number is 0. 
 The hex code is 22. 


 Example 

 Special format, month-year, protected cell 


 Bit Number     7   6   5   4   3   2   1   0 
 Binary Code    1   1   1   1   0   1   0   0 
                    --------- 
                   Format Type  ------------- 
                 Protection    Number of Decimal Places 
                                  or Special Format 


 The byte number is 0. 
 The hex code is F4. 
```
{% endraw %}

## WSFF4.TXT

{% raw %}
```
                            WORKSHEET FILE FORMAT 
                                  FROM LOTUS 

                      APPENDIX B - THE FORMULA COMPILER

               Copyright(c) 1984, Lotus Development Corporation 
                               161 First Street 
                        Cambridge, Massachusetts 02142 
                                (617) 492-7171 
                      Electronic Edition, December, 1984 
                             All Rights Reserved 
























































                      APPENDIX B:  The Formula Compiler 

 This appendix describes the internal workings of the formula compiler.  The
 compiler transforms an ASCII string of characters representing a formula to
 its Reverse Polish code.  The basic algorithm utilizes and SR parser (SR =
 shift and reduce).  The aim of the parser is to apply a set of reduction
 rules which embody the syntax of the compiler to an input string.  Formula
 code is compiled to a temporary buffer. 

 Lexicon Analysis 

 A lexical analyzer breaks up the input string into lexical units called
 tokens.  A token is a substring of the original input string operand,
 operator, or special symbol (such as comma, parentheses, etc.) In addition,
 the lexical analyser supplies two special tokens, "beginning of formula"
 (boform) and "end of formula" (eoform), to facilitate the compilation
 process.  The lexical analyzer identifies and processes literals (both
 number and string), cell and range references, operators, and function
 calls.  It assigns a unique code to each distinct operator, function, or
 type of operand. 

 A function with no arguments is treated like a number. 

 Syntax Analysis 

 The syntactical analysis of a formula is accomplished by processing a list
 of tokens in left-to-right order.  A stack called the syntax is also used
 during the syntactical scan.  The basic algorithm is as follows: 

 Repeat the following steps: 

 1) Get the next token 

 2) If the token is a literal or cell reference: 
       a) Push the number code on the syntax stack 
       b) Push the number code on the syntax stack 

 3) If the token is a range reference: 
       a) Compile code to push the range reference 
       b) Push the range code on the syntax stack 

 4) Otherwise push the token code for the token on the syntax stack. 

 For each syntax rule, if the pattern on the top of the  syntax matches the
 rule pattern take the action associated with the rule and start scanning
 from the beginning for any additional rules which may apply. 

 When a token code is pushed on the syntax stack, an additional word of
 zeros is also pushed on the stack.  This is used when compiling function
 calls to hold the function's argument count. 





 Rule Matching 

 A relatively small number of rules are used to process formulas of arbitrary
 complexity.  If a rule matches the top of the syntax stack, then the
 compiler takes a specific action and rule scanning starts again with the
 first rule.  Each rule matches certain patterns on the syntax stack.  A
 typical rule might be: if the top of the stack is the token for right
 parenthesis, and the next-to-top is a number, and the second form the top
 is a left parenthesis, then pop the top three items from the syntax stack
 and push the number on the syntax stack. 

 This rule can be more succinctly represented as: 

                        Stack 

          Before                      After                 Action 
          ) 
          number 
          (                           number                none 



 The Rules 


 The following are the syntax rules used to process formulas.  Note that the
 order of the rules is important.  The rules for compilation of operators
 used additional tables which assign a precedence number and opcode to each
 legal unary and binary operator.  Thus, for example, there is a single
 token code for minus sign (-), but there are two opcodes one for unary
 minus and one for binary minus.  In addition, these two operators, while
 lexically identical, also have different precedence.  In general, operators
 of higher precedence will be performed before operators of lower precedence
 are performed left-to-right.  All special operators (boform, eoform,
 parentheses, comma, etc.) are implicitly assigned a precedence of zero. 

 Rule 1  Termination test 

                  Stack 

         Before           After       Action 
         eoform                       Output a return code to compile buffer 
         number                       Return, indicating successful compile 
         boform

 Rule 2  Function argument processing 

                 Stack 
         Before          After       Action 
         '                           Error if range argument illegal for 
         number or range             function. 
         (               (           Increment argument count on stack 
         function        function 

 Rule 3  Process final function argument 

                 Stack 
         Before         After        Action 
         )                           Error if range argument illegal for 
         number or range             function. 
         (                           Increment argument count on stack 
         function       number       Compile function opcode 
                                     If list function, compile argument 
                                     count; otherwise error is wrong 
                                     argument count. 




 Rule 4  Parenthesis removal 

                Stack 
        Before         After        Action 
        )                           Compile parenthesis opcode 
        number 
        (              number 
        operator       operator 



 Rule 5  Binary operators 

               Stack 
        Before         After        Action 
        op2                         If binary op<binary op, rule does 
        number                      not match.  Otherwise, compile opcode 
        op1            op2          for operator op1. 


 Rule 6  Unary operators 

               Stack 
        Before      After           Action 
        op2                         I unary op<binary op, rule does 
        number      op2             not match.  Otherwise, compile opcode. 
        op1         number          for operator op 1. 


 Rule 7  Error detection 

              Stack 
       Before       After          Action 
       eoform                      Return indicating unsuccessful compile 





 Table 9   Operator Precedence Table 

 Operator              Unary Precedence       Binary Precedence 
 +                             6                      4 
 -                             6                      4 
 *                            na                      5 
 /                            na                      7 
 ^                            na                      3 
 =                            na                      3 
 < >                          na                      3 
 < =                          na                      3 
 > =                          na                      3 
 <                            na                      3 
 >                            na                      3 
 #and#                        na                      1 
 #or#                         na                      1 
 #not#                        2                      na 











 Example: 

 Using the above rules, we can now see how a particular formula is
 compiled.  Let us consider the following formula: 

                  3+5*6 

 This is broken up by the lexical analyzer into seven tokens. 

                  boform 
                  3 
                  + 
                  5 
                  * 
                  6 
                  eoform 

 The syntax scans proceed as follows until a matching rule is found: 

 Stack 

 boform           number         +            number 
                  boform         number       + 
                                 boform       number 
                                              boform 

 Compile buffer 

                  push 3         push 3       push 3 
                                              push 5 

 At this point, rule 5 is invoked, but since the precedence of boform is
 zero, no action is taken. 

 Stack 

 *                number 
 number           * 
 +                number 
 number           + 
 boform           number 
                  boform 

 Compile buffer 

 push 3           push 3 
 push 5           push 5 
                  push 6 







 At this  point, since the binary precedence of + is lower than the binary
 precedence of *, rule 5 does apply, and the opcode for * is compiled.  The
 stack is reduced by replacing number * number by number and scan is made,
 but no further rule applies. 


 Stack 

 number          eoform 
 +               number 
 number          + 
 boform          number 
                 boform 

 Compile buffer 

 push 3          push 3 
 push 5          push 5 
 push 6          push 6 



 Rule 5 applies again, and the opcode for + is compiled, reducing the stack
 to boform, number, eoform.  Rescanning finds a match on rule 1 which
 compiles a return opcode and terminates.  The final compiled code is thus: 

 push 3 
 push 5 
 push 6 
 * 
 + 
 return 

 A Note on the Decompiler 

 The algorithm for the formula decompiler was taken verbatim from: 

 Writing Interactive Compilers and Interpreters, P.J. Brown, John Wiley and
 Sons, 1979.  See chapter 6.2.  The algorithm itself is described on pages
 216 and 217. 

 This algorithm is also described in the following article. 

 More on the Re-creation of Source Code from Reverse Polish, P.J. Brown,
 Software Practice and Experience, Vol 7, 545-551 (1977). 










 WORKSHEET COLUMN DESIGNATORS 

 Most records within the 1-2-3 Condensed Worksheet format are specified
 with column/row designators (for example, column 0, row 0 equals A1).  When
 determining the column designator, the table below will help make
 conversion easier. 


 Column   Hex   Dec        Column   Hex   Dec        Column   Hex   Dec 
   A       0     1           BA     34     52          DA     68    104 
   B       1     1           BB     35     53          DB     69    105 
   C       2     2           BC     36     54          DC     6A    106 
   D       3     3           BD     37     55          DD     6B    107 
   E       4     4           BE     38     56          DE     6C    108 
   F       5     5           BF     39     57          DF     6D    109 
   G       6     6           BG     3A     58          DG     6E    110 
   H       7     7           BH     3B     59          DH     6F    111 
   I       8     8           BI     3C     60          DI     70    112 
   J       9     9           BJ     3D     61          DJ     71    113 
   K       A    10           BK     3E     62          DK     72    114 
   L       B    11           BL     3F     63          DL     73    115 
   M       C    12           BM     40     64          DM     74    116 
   N       D    13           BN     41     65          DN     75    117 
   O       E    14           BO     42     66          DO     76    118 
   P       F    15           BP     43     67          DP     77    119 
   Q      10    16           BQ     44     68          DQ     78    120 
   R      11    17           BR     45     69          DR     79    121 
   S      12    18           BS     46     70          DS     7A    122 
   T      13    19           BT     47     71          DT     7B    123 
   U      14    20           BU     48     72          DU     7C    124 
   V      15    21           BV     49     73          DV     7D    125 
   W      16    22           BW     4A     74          DW     7E    126 
   X      17    23           BX     4B     75          DX     7F    127 
   Y      18    24           BY     4C     76          DY     80    128 
   Z      19    25           BZ     4D     77          DZ     81    129 
  AA      1A    26           CA     4E     78          EA     82    130 
  AB      1B    27           CB     4F     79          EB     83    131 
  AC      1C    28           CC     50     80          EC     84    132 
  AD      1D    29           CD     51     81          ED     85    133 
  AE      1E    30           CE     52     82          EE     86    134 
  AF      1F    31           CF     53     83          EF     87    135 
  AG      20    32           CG     54     84          EG     88    136 
  AH      21    33           CH     55     85          EH     89    137 
  AI      22    34           CI     56     86          EI     8A    138 
  AJ      23    35           CJ     57     87          EJ     8B    139 
  AK      24    36           CK     58     88          EK     8C    140 
  AL      25    37           CL     59     89          EL     8D    141 
  AM      26    38           CM     5A     90          EM     8E    142 
  AN      27    39           CN     5B     91          EN     8F    143 
  AO      28    40           CO     5C     92          EO     90    144 
  AP      29    41           CP     5D     93          EP     91    145 
  AQ      2A    42           CQ     5E     94          EQ     92    146 
  AR      2B    43           CR     5F     95          ER     93    147 
  AS      2C    44           CS     60     96          ES     94    148 
  AT      2D    45           CT     61     97          ET     95    149 
  AU      2E    46           CU     62     98          EU     96    150 
  AV      2F    47           CV     63     99          EV     97    151 
  AW      30    48           CW     64    100          EW     98    152 
  AX      31    49           CX     65    101          EX     99    153 
  AY      32    50           CY     66    102          EY     9A    154 
  AZ      33    51           CZ     67    103          EZ     9B    155 








 (CONTINUED)




               Column   Hex    Dec         Column    Hex    Dec 

                 FA     9C     156           HA      DO     208 
                 FB     9D     157           HB      D1     209 
                 FC     9E     158           HC      D2     210 
                 FD     9F     159           HD      D3     211 
                 FE     AO     160           HE      D4     212 
                 FF     A1     161           HF      D5     213 
                 FG     A2     162           HG      D6     214 
                 FH     A3     163           HH      D7     215 
                 FI     A4     164           HI      D8     216 
                 FJ     A5     165           HJ      D9     217 
                 FK     A6     166           HK      DA     218 
                 FL     A7     167           HL      DB     219 
                 FM     A8     168           HM      DC     220 
                 FN     A9     169           HN      DD     221 
                 FO     AA     170           HO      DE     222 
                 FP     AB     171           HP      DF     223 
                 FQ     AC     172           HQ      EO     224 
                 FR     AD     173           HR      E1     225 
                 FS     AE     174           HS      E2     226 
                 FT     AF     175           HT      E3     227 
                 FU     BO     176           HU      E4     228 
                 FV     B1     177           HV      E5     229 
                 FW     B2     178           HW      E6     230 
                 FX     B3     179           HX      E7     231 
                 FY     B4     180           HY      E8     232 
                 FZ     B5     181           HZ      E9     233 
                 GA     B6     182           IA      EA     234 
                 GB     B7     183           IB      EB     235 
                 GC     B8     184           IC      EC     236 
                 GD     B9     185           ID      ED     237 
                 GE     BA     186           IE      EE     238 
                 GF     BB     187           IF      EF     239 
                 GG     BC     188           IG      FO     240 
                 GH     BD     189           IH      F1     241 
                 GI     BE     190           II      F2     242 
                 GJ     BF     191           IJ      F3     243 
                 GK     CO     192           IK      F4     244 
                 GL     C1     193           IL      F5     245 
                 GM     C2     195           IM      F6     246 
                 GN     C3     195           IN      F7     247 
                 GO     C4     196           IO      F8     248 
                 GP     C5     197           IP      F9     249 
                 GQ     C6     198           IQ      FA     250 
                 GR     C7     199           IR      FB     251 
                 GS     C8     200           IS      FC     252 
                 GT     C9     201           IT      FD     253 
                 GU     CA     202           IU      FE     254 
                 GV     CB     203           IV      FF     255 
                 GW     CC     204 
                 GX     CD     205 
                 GY     CE     206 
                 GZ     CF     207 




 ANALYSIS OF 1-2-3  WORKSHEET FILE 

 The worksheet shown below was created in 1-2-3 and saved to disk. 



                                              Key: 

                                              A2..A5 Named Range (code 11) 
          EXAMPLE                                 A2: Label (code 15) 
             100                                  A3: Integer (code 13) 
            12.5                                  A4: Number (code 14) 
            87.5                                  A5: Formula (+A3-A4) 
                                                      (code 16) 


 The example shown below is a partial hex dump of this worksheet file.  By 
 reading each record header, you can determine the type of record you are
 encountering.  The record header will also tell you the length of that
 follows the header.  By analyzing the record header, you can read the
 records you want and skip unrelated records. 


    362B:0100                           06 00 08 00 00 00 00 00 00 00 
    362B:0110        04 00 2F 00 01 00  01 02 00 01 00 FF 03 00 01 00 
    362B:0120        00 04 00 01 00 00  05 00 01 00 FF 07 00 1F 00 00 
    362B:0130        00 01 00 71 00 09  00 08 00 14 00 00 00 00 00 00 
    362B:0140        00 00 00 00 00 00  00 04 00 04 00 48 00 00 0B 00 
    362B:0150        18 00 54 45 53 54  00 00 00 00 00 00 00 00 00 00 
    362B:0160        00 00 00 00 01 00  00 00 04 00 18 00 19 00 00 FF 
    362B:0170        FF 00 00 FF FF 00  00 FF FF 00 00 FF FF 00 00 FF 
    362B:0180 


    362B:05C0 
    362B:05D0        00 00 00 00 00 00  00 00 00 00 00 00 00 00 00 00 
    362B:05E0        00 00 00 00 00 00  00 00 00 00 00 00 00 00 00 00 
    362B:05F0        00 00 00 00 71 71  01 00 0F 00 0E 00 FF 00 00 01 
    362B:0600        00 27 45 58 41 4D  50 4C 45 00 0D 00 07 00 FF 00 
    362B:0610        00 02 00 64 00 
    362B:0620                           10 00 1B 00 FF 00 00 04 00 00 
    362B:0630        00 00 00 00 E0 55  40 0C 00 01 00 80 FE BF 01 00 
    362B:0640        80 FF BF 0A 03 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0303

     Volume in drive A has no label
     Directory of A:\

    MAGEE    WKS     44160   1-05-85   5:48p
    MAGEE    DOC     15488   1-05-85   5:33p
    WSFF1    TXT     14464   1-03-85   6:56p
    WSFF3    TXT      3712   1-03-85   7:20p
    TAX1984  WKS     37888  12-08-84   2:21p
    TAX1984  DOC      3983  12-08-84  12:09a
    MAIL     WKS      8320  12-15-84   5:11p
    AUTO123  WKS     57216  10-05-84   4:47p
    PREVIEW  WKS     60544  10-05-84   4:49p
    WSFF4    TXT     19968   1-03-85   7:35p
    WSFF2    TXT     79872   1-05-85   5:16p
    DIR-LIST          1408   1-05-85   8:14p
           12 file(s)     347023 bytes
                            9216 bytes free
