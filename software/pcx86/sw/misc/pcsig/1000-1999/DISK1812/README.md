---
layout: page
title: "PC-SIG Diskette Library (Disk #1812)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1812/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1812"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EASY QUOTE"

    Do you need an easy-to-use price quoting program and only need to keep
    track of products with a single unit cost and price?  EASY QUOTE will
    make your price quoting easier and faster.  The program is designed to
    allow the printed quote to be used as a billing invoice.  Automatic
    search tables and scrolling windows give you instant access to your
    products and prices.
    
    The program provides a customer name and address file, product file,
    multiple company file and quote files.  These files are maintained by
    the system, giving you a built-in record keeping system.  You won't have
    to fumble through documents trying to find a quote you prepared last
    week, you can simply go into the system and retrieve the quote.  EASY
    QUOTE offers virtually unlimited record capacities.  It will even blank
    your monitor screen after 10 minutes of inactivity to protect it from
    burn in.
    
    Well maintained costs and prices will make it easy for you to provide
    accurate quotes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EASYQTE.DOC

{% raw %}
```




                                      EASY QUOTE
                                     Version  1.0

              This price quoting program is for those seeking an easy to
         use program for that purpose and only need a product file with a
         single unit cost and price for that purpose.  Two overhead factors
         are provided for projected cost purposes.  Program design allows
         for the printed quote to be used as a billing invoice also.  It
         uses auto look up tables and scrolling record windows.  Quoted
         products are displayed with extensions in the multiple record
         windows.  Totals can be displayed by simply pressing the F5 function
         key in the registered version described below.  I think you will
         agree that the program fit's the name.

              The program provides a customer name and address file, product
         file, multiple company file and quote files.  It offers virtually
         unlimited record capacities.  It will even blank your monitor screen
         after 10 minutes of inactivity to protect it from burn in.

              Contractors wanting to use this program for cost estimates
         will have to establish their product costs as completely in place.

              Requirements for this program are at least 512k ram and a
         proper CONFIG.SYS file in the root directory.  A hard disk is
         also highly recommended.  This is a large application and a separate
         directory should be created for it's use.  Please see CONFIG.SYS
         below for further information concerning this file.

              If you like this program, the registration is 35.00.  You
         will then be sent the registered version which will allow you to
         display the total amounts at any time while in the quote record
         tables as described below.  You will also be able to add your own
         bottom comment line in the printed quotes.

              Please feel free to make copies of this program for anyone who
         may have need of it.

                                 I. J. Smith
                                 9795 Rustling Oaks
                                 Baton Rouge, La. 70818


              Please read the following instructions before using, especially
         the section explaining the use of the keyboard keys in the program.
         Sample files are included for setup and test purposes.  You can
         simply delete the records when through with them or you can copy the
         EASYQTE.EXE file only.  It will create the necessary data files.
         To start the program, enter EASYQTE at the prompt.

              The program is straight forward with the following steps:

              1.  Add Company records.            Main Menu option G
              2.  Add Customer records.            ''   ''    ''   F
              3.  Add Products.                    ''   ''    ''   E
              4.  Create Quote Name record.        ''   ''    ''   D
              5.  Enter quotes.                    ''   ''    ''   A or B
              6.  Use reports as needed.           ''   ''    ''   C








              The order shown is for first time use.  Many items can be added
         when their tables are displayed for lookup purposes from various
         data prompts by simply pressing the INSert key.


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
                             These are located in the upper left corners of
                             the record table windows.

            The data entry windows are fairly straight forward.  You simply
       add or change data as needed with the ENTER key.  Use of the ESC key
       can also restore data if you wish.  The ARROW keys can also be used to
       step through the data fields.  If your data is correct, you can also
       press CTRL-ENTER and not have to step through the fields.

            Lookup fields are also used thruout the program.  If prompted
       for a number for example, you can enter the number desired or if
       blank simply press ENTER.  Choices will then be displayed in a table.
       The table will also be displayed if the number you enter does not
       exist.  If the number is new, it can be added by simply pressing the
       insert key.  Where appropriate, some tables will automatically pop
       up for your choices.









                                  SCREEN BLANKER

             The program has a built in feature that will blank the monitor
        screen after 10 minutes of inactivity.  This feature is to help
        protect your screen from burn in.  Simply press one of the arrow
        keys to refresh the screen display.


        Main Menu option A   Price Quotes

             Use this option to enter your quote items.  You will be prompted
        for the quote name so make sure you have one established.  The quote
        names table will appear for your choice.  You can also enter a new
        name (descritpion) at this time by simply pressing the INSert key.
        The name record will also require the customer number and company
        number to be used.

             If there are no item records for this quote, the popup data
        entry window will automatically appear for your entry of a new item.
        Select or add record items with the keyboard keys as described above.

             When adding new quote items by pressing the INSert key, you will
        be prompted for the item number, product number and quantity.  You
        can simply press the ENTER key for the product number and you will be
        able to highlight and select your choice from it's record table.  It
        will be added to the quote item.

             When changing an item, the product file is no longer used.  You
        will then be allowed to make changes to most of the information.  This
        allows a fast way to make last minute cost changes.  It also means you
        do not need to have a product record for every item quoted.  You can
        simply use dummy product records for entries and enter new data with
        the change option.

             The total of the quote can be displayed at anytime by pressing
        the F5 function key.  It will also display the sales taxes added, if
        any.  (This feature only available with registered version.)

             Negative amounts can be entered by pressing the minus key after
        the number entered.  This may be useful for some special discount.


        Main Menu option B   Cost Estimates

             This option is similar to option A above but will display costs
        and extensions also.  Press the F5 function key to display the price
        total, costs, cost factors and net profit (hopefully).  (Feature only
        available with registered version described above.)

        Main Menu option C   Reports

             This option will display the reports menu.  Most of the reports
        are file listings and should be self explanatory.

             As mentioned above, the quote layout makes it very feasable to
        use as the invoice also.  Print the sample quote provided.  You may
        also want to use your own letterhead forms at a later date.









             The estimate report will reflect the costs, prices, customers
        and the information needed for your records.

             The price list leaves a margin at the left making it easy to
        place in binders.

             The customer contacts listing can be useful for sales purposes.

             Customer labels will print one across.  It will only print the
        customers with a Yes in the labels field.  The program will print the
        customer name first (blank lines after the address).  Align the forms
        accordingly.

             Use the quote names listing to maintain the quotes needed and
        and those needing to be deleted.

             Use the product, customer and company data listings as needed.


        Main Menu option D   Quote Names

             Use this option to establish a new quote name record.  The name
        or description used will be used to identify the quote.  It will also
        be printed on the quote.  The number used could also be useful for
        identifying the quote.  You will also be prompted for a date, customer
        number and company number.  If you would like to print a single quote
        to be used for multiple customers, see customer file option F below.

             Deletion of a quote name record will also delete all quoted
        records as well.  Use the delete option only for this purpose.  Do
        not change the number if you have quote items or they will be left
        in the file with the old number assigned to them.


        Main Menu option E   Product File

             This file is the most important one of course.  It will be used
        to establish your quote items.  Good maintained costs and prices will
        really make it easy for you to establish your quotes.  You can use
        letters as well as numbers to establish your product numbers.  Use
        the keyboard keys as described above for entries.

             You will be prompted for the descriptions of the product and
        unit, unit cost and unit price.


        Main Menu option F   Customer File

             If you do not need a customer file, simply enter a dummy record
        for this purpose.  You do not have to enter any names and addresses.
        Keep in mind however, the program does provide for labels which could
        be very useful otherwise.  Consider creating a blank record to use
        when needed.  You could then use the labels for multiple copies if
        desired.

             Customer numbers can be a mixture of letters and numbers.  You
        can also tag the customers you want to use for labels by choosing
        Yes for labels and No otherwise.








        Main Menu option G   Company File

             You may need to spend a little time creating a few records for
        this file.  Multiple records can be useful in several ways:

                  Multiple company quotes
                  Different sales tax percentages (or none)
                  Different overhead cost percentages
                  Different comment lines with different terms, etc.
                  Different comment lines to use quote for invoice purposes
                  Use of pre-printed customized forms by leaving blanks

             As you can see, the program can be very versatile.  The sample
        files included should be helpful in establishing your own.  Use them
        to print sample quotes and check their layout in their respective
        records.  Simply change the company number in the quote name record
        for different uses.

             If you do not need the sales taxes added, leave the description
        blank and the percentage as zero.

             Two overhead cost factors are provided.  The factor on costs is
        based on the total costs.  It should be used for fixed overhead costs.
        The factor on prices should be used for commissions, bond premiums,
        insurance or other factors based on sales volume.


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

                             COPY EASYQTE.DOC LPT1:

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





       Some other programs by this author you may want to look at also:

            PC-BID PLUS & BID-BIZ                Contractor's Estimating
                                                 programs

            EIMS                                 Equipment Inventory and
                                                 Maintenance Scheduling

            SPC-INVENTORY PLUS                   Purchases, Sales and
                                                 Inventory

            SALES-BIZ                            Sales Tracking

            WYS-AR                               Accounts Receivable

            COST-BIZ                             Job Cost



        NOTE:  If you have a color system and this program does not come up
               in color, try entering  MODE CO80  just prior to executing
               the program.  If this problem is consistent with this program
               or others on your system, you may consider running them from
               BAT files with this line of code in it.
```
{% endraw %}

## FILE1812.TXT

{% raw %}
```
Disk No: 1812                                                           
Disk Title: Easy Quote                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Easy Quote                                               
Author Version: 1.0                                                     
Author Registration: $35.00                                             
Special Requirements: 512K RAM, Hard Drive Recommended.                 
                                                                        
Do you need an easy-to-use price quoting program and only need to keep  
track of products with a single unit cost and price?  Easy Quote will   
make your price quoting easier and faster.  The program is designed to  
allow the printed quote to be used as a billing invoice.  Automatic     
search tables and scrolling windows give you instant access to your     
products and prices.                                                    
                                                                        
The program provides a customer name and address file, product file,    
multiple company file and quote files.  These files are maintained by   
the system giving you a built-in record keeping system.  You won't have 
to fumble through documents trying to find a quote you prepared last    
week, you can simply go into the system and retrieve the quote.  EASY   
QUOTE offers virtually unlimited record capacities.  It will even blank 
your monitor screen after 10 minutes of inactivity to protect it from   
burn in.                                                                
                                                                        
Well maintained costs and prices will make it easy for you to provide   
accurate quotes.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1812  EASY QUOTE  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Must have PKXARC to install program.                                    ║
║                                                                         ║
║ To start program, type: EASYQTE                                         ║
║                                                                         ║
║ To print documentation, type: COPY EASYQTE.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1812

     Volume in drive A has no label
     Directory of A:\

    EASYQT   ARC    215306   8-19-89   2:13a
    FILE1812 TXT      2443  12-20-89   4:26p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80   8:25a
            4 file(s)     218481 bytes
                          101376 bytes free
