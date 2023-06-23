---
layout: page
title: "PC-SIG Diskette Library (Disk #1961)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1961/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1961"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPC-INVENTORY PLUS"

    SPC-INVENTORY is a business inventory program that will allow you to
    record an item's description, location, unit cost, last unit cost, unit
    price, quantity on hand, quantity on order, and up to three
    suppliers. For each item you may constantly update the sales and
    purchases to date. You may also update an item's price at any time. The
    program also allows for two other prices based on percentage
    factor of the standard price. This could be useful for fast sale
    lists. An inventory report can be generated using the last unit
    cost, thus representing the current value or replacement costs.
    Other reports include various sales and purchases reports, supplier
    listing, minimum order report, on-hand report, period usage report of
    quantities, and inventory report based on actual unit cost. The
    period reports generated could be especially useful to monitor
    profit from sales.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1961.TXT

{% raw %}
```
Disk No: 1961                                                           
Disk Title: SPC-Inventory Plus                                          
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: SPC-Inventory Plus                                       
Author Version: 2.11                                                    
Author Registration: $50.00                                             
Special Requirements: 384K RAM, DOS version 3.0 (or higher).            
                                                                        
SPC-INVENTORY is a business inventory program that will allow you to    
record an item's description, location, unit cost, last unit cost,      
unit price, quantity on hand, quantity on order, and up to three        
suppliers.  For each item you may constantly update the sales and       
purchases to date.  You may also update an item's price at any time.    
The program also allows for two other prices based on percentage        
factor of the standard price.  This could be useful for fast sale       
lists.  An inventory report can be generated using the last unit        
cost, thus representing the current value or replacement costs.         
Other reports include various sales and purchases reports, supplier     
listing, minimum order report, on-hand report, period usage report of   
quantities, and inventory report based on actual unit cost.  The        
period reports generated could be especially useful to monitor          
profit from sales.                                                      
                                                                        
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
║              <<<<  Disk #1961  SPC-INVENTORY PLUS >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  SPCINV  (press enter)                          ║
║                                                                         ║
║ To print documentation, type:  COPY SPCINV.DOC PRN  (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SPCINV.DOC

{% raw %}
```


























                                 SPC - INVENTORY PLUS
                                 --------------------
                                      Version 2.1

                                         By:

                                     I. J. Smith
                                  9795 Rustling Oaks
                                Baton Rouge, La. 70818

                                ----------------------
































           SPC-INVENTORY            Program Attributes              Page 1


               This application is intended for those needing an easy to use,
           stand alone business inventory application.  Some of the features
           it has to offer:

                        Inexpensive.
                        Quality, with good data integrity.
                        Weighted average costs.
                        Purchase, Sales and Inventory reports.
                        Virtually unlimited record capacities.

               Many users have found this program to be ideal for their
           primary accounting purposes.  The various reports generated allows
           for close monitoring of cash flow and profits.  Values can be
           transferred to general ledgers as needed (or furnished to your
           accountant).  I hope it's ease of use, speed, and many report
           capabilities make it ideal for your particular needs.

               The program uses the (c)BTRIEVE file handler, which many
           consider the best for data integrity...no lost files due to power
           failures.  You should still make periodic backups of your
           important data files...disk crashes do occur and no software
           can recover your data if this occurs.

               The Btrieve file handler also assures you of speed as your
           inventory file grows.

               The program maintains the inventory by unit amounts.  By
           using this method (rather then total amounts), it should make
           it easier to enter quantities from invoices, sales tickets,
           and for inventory file maintenance.  This can also be easier for
           those wanting to use the program for in house uses.



                                   ------------
                                   REQUIREMENTS
                                   ------------

               Requirements for this application are DOS 3.1 or greater,
           384k memory and a hard disk drive.  A color system is also
           recommended.  A CONFIG.SYS file is also required in the root
           directory of your system to expand the default files and
           buffer numbers.  The file should contain two lines of code
           similar to the following:

                                    files=24
                                    buffers=16

               If the numbers are greater in your CONFIG.SYS file then
           leave them as is (many applications require more).  If you are
           not sure if you have this file, enter  DIR CONFIG.SYS  at the
           prompt.  TYPE the file on the screen or use your editor to see
           if the above lines of code are present.  If not, then use your
           editor and add them in the file.  If you do not have this file,
           copy the CONFIG.DTA file included with this application and
           rename it CONFIG.SYS.  NOTE: IT MUST BE IN THE ROOT DIRECTORY.







               Program must be started by entering INVTORY.  This will
           load the Btrieve file handler first, then the program.  You
           cannot start the program from the SPCINV.EXE program file.
           All data files (DAT extensions) and the SPCINVP.LBR file must
           be available for the program.

           The application uses the average cost to maintain the inventory
           unit costs.  It also retains the last unit cost purchased and
           uses it to project costs when the sales quantities exceed the
           on hand quantities.  A current cost inventory report can also
           be printed using these costs.  (A more proper phrase might be
           replacement cost report).

           Sales taxes are automatically added to the unit purchase costs.
           The sales tax percentage can be changed from the purchase entry
           screen.  The program defaults to zero when first installed.  If
           you have a sales tax on your purchases, you should change this
           percentage immediately after installation.  The option for this
           change is shown at the bottom of the first purchase entry screen.
           Sales taxes are only added during purchase entries and not when
           when making changes, allowing for changes when entered in error.

           The inventory is kept sorted by the 12 digit inventory numbering
           system.  A good numbering system is essential for a good system.
           The sales and purchases are also kept by this number in order to
           spot errors on their respective reports.  A suppliers file is
           also included and maintained by a supplier number in the same
           order.  The supplier file is for convenience only and is not
           necessary for the application.  Many may prefer to identify
           vendor numbers in the inventory file with their accounts payable
           vendor numbers.

           Before you start using the application, the master inventory
           file must be created.  Sales and purchases cannot be entered
           without inventory item records.

           Inventory reports allow for group listings.  A prompt for the
           beginning and ending numbers will be displayed.  The first and
           last numbers in the file are displayed as defaults.  If you want
           a complete listing then simply accept these defaults.  This
           option can be very useful to maintain several inventories.  By
           using the first few characters in your numbering system for
           the different inventories, you can then print reports by simply
           entering the first and last inventory numbers of these groups.
           Even if you only maintain one inventory, you can establish
           reports of similar items or by locations.  An example may be
           in the use of FILT0001 thru FILT9999 for filters.  With this
           option, you could print various reports of filters only.
           Note:  this option is only available with the owner of record
           version, otherwise the full inventory will be printed.
















           Three selling prices are provided for.  One main controlling
           price in the inventory file, and two others by using percentage
           factors with the first.  This allows for various price lists
           and a fast way to print a sales price list.  At installation,
           the program defaults to price percentage factors of 1.05 and
           0.95 for price numbers two and three.  This translates to 5 %
           over the inventory price for price no. 2 and 5 % under the
           inventory price for price no. 3.  This percentage factor is
           easily changed from the Inventory Menu.  See the inventory on
           hand report for other details.  The enhanced owner of record
           allows for single price listings with a popup menu.

           The normal keyboard function keys are used for data entry.
           Options are listed at the bottom of the entry screens.  Full
           screen data entries are processed by pressing the F10 function
           key.  The ESC key is used to end and cancel various procedures.
           The PgUp and PgDn function keys are used to change records
           displayed (they will be listed as options on the screens where
           allowed).  Date prompts are used with some reports.  You can
           change the default date if you wish.  Menu options can be chosen
           by pressing option number or using the arrow keys.

           Always make sure to process the purchases before processing the
           sales.  This will reflect a more accurate cost of sales in your
           reports.  When processing the sales, if the sales quantity
           exceeds the quantity on hand the program will use the last unit
           cost for the excess sales quantities.  If no last unit cost
           is found in the inventory file, the program will then use the
           previous existing unit cost.  This may be sufficient for many
           users while others may prefer more accurate costs.  Remember,
           this is an inventory application, not an accounting system.
           However, if properly used, the program can be used for your
           accounting purposes.  The period to date reports should be
           useful in monitoring your income from sales.

           If you have sales taxes on your sales and would like to record
           them, simply add inventory records for that purpose.  I suggest
           you use low numbers such as 10, 11, 12, etc.  They will be easier
           to remember and you can exclude them or list them separately on
           most reports with the selection option.  Since the program
           maintains values in units, you will need to enter a quantity
           such as one for each entry.  Your reports would then reflect the
           total transactions and amounts.  With the owner of record
           version, you can print or exclude these from your reports.
           You could also use inventory items for other purposes as well.

           Following are instructions by Menu options.  Please read them
           to become familiar with the application.  The program offers
           many reports and you should familiarize yourself with them.  The
           best way is to print them out to see which ones you need.

                                 REGISTERED VERSION

                If you like this program, registration is 50.00.  You will
           then be sent the enhanced registered version.  It allows you to
           print many of the inventory reports by group numbers of your
           choice.  You simply enter the first and last inventory number you
           wish to print.  This could allow you to have various inventories.








                 You will also be able to set your own defaults for entering
           purchases and sales.  The sales default could be very useful for
           those wanting an inhouse program...by simply setting the sales
           price as the actual cost.

                 It will also print an inventory summary report.  This one
           page report prints the totals of period purchases, sales, costs,
           and inventory values.  This allows for an easy way to monitor
           cash flow and profits, as well as saving time with lengthy reports.

                Your support is appreciated.  Feedback is welcome.  Please
           feel free to make copies of this program for anyone who may have
           need of it.


                                    I. J. Smith
                                    9795 Rustling Oaks
                                    Baton Rouge, La. 70818




                            DISCLAIMER OF WARRANTY


   THIS SOFTWARE IS SOLD "AS IS" AND WITHOUT WARRANTIES AS TO PERFORMANCE OF
   MERCHANTABILITY OR ANY OTHER WARRANTIES WHETHER EXPRESSED OR IMPLIED.
   BECAUSE OF THE VARIOUS HARDWARE AND SOFTWARE ENVIRONMENTS INTO WHICH THIS
   PROGRAM MAY BE PUT, NO WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE IS
   OFFERED.

   GOOD DATA PROCESSING PROCEDURE DICTATES THAT ANY PROGRAM BE THOROUGHLY
   TESTED WITH NON-CRITICAL DATA BEFORE RELYING ON IT.  THE USER MUST ASSUME
   THE ENTIRE RISK OF USING THE PROGRAM.  ANY LIABILITY OF THE SELLER WILL
   BE LIMITED EXCLUSIVELY TO PRODUCT REPLACEMENT OR REFUND OF PURCHASE PRICE.

   THIS PROGRAM IS BEING USED IN SEVERAL FOREIGN COUNTRIES AS WELL AS ACROSS
   THE U.S.  OBVIOUSLY, IT IS A WELL TESTED PROGRAM.  THE SHAREWARE CONCEPT
   ALLOWS YOU TO TRY PROGRAMS BEFORE DECIDING TO USE THEM.  BY ALL MEANS,
   GIVE THIS PROGRAM A GOOD TEST.  NEVER ASSUME ANYTHING.  WHEN IN DOUBT,
   CONTACT THE AUTHOR OF THE PROGRAM BEFORE REGISTERING.



            NOTE:  The Btrieve program is a memory resident program and
                   will normally run fine with other programs of this
                   type being used.  If you still have problems running
                   this program, you may have to experiment in removing
                   other programs of this type from memory.  This can
                   sometimes happen with public domain TSR's.

                   Use of accellerated file handlers such as ram disks
                   should be avoided as they could eliminate the safety
                   recovery features of the program in case of power
                   failures, etc.

                   The program will be removed from memory upon proper
                   exit from the Main Menu.









           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 1


           MAIN MENU - OPTION 1    PURCHASES MENU


           Purchases Menu - Option 1  Purchase Entries

                The first prompt will ask for the inventory item of the
           purchase.  No entries are allowed without an existing inventory
           item in the inventory file.  You can also change the sales tax
           percentage at this time by pressing F2.

                The next screen will display data about the item and allow
           quantity and unit cost purchase entries.  Use the set defaults
           option to display default amounts desired.

                A reference field is also provided for your use.  You must
           enter a reference.  For your convenience, the previously entered
           reference will be displayed as a default.  You may want to use
           this for invoice numbers.  A report option will allow you to
           print a report in the order of the reference, and will print
           totals for each reference.  Invoice totals can then be checked.
           It's inevitable that small roundoff differences will occur,
           especially if sales taxes are applied.  If balancing is critical,
           you may consider an inventory item to record small over/under
           amounts.  This option could also be useful to balance by vendor
           name, date, etc.

                The program will automatically apply the sales tax percentage
           to the unit cost.  The report will reflect the total unit cost.


           Purchases Menu - Option 2  Changes

               This option is to make corrections of the entries entered in
           Option 1 above.  You will probably need to get a report with Option
           3 to check your entries.

               Again, your first prompt will be for the item number.  This
           time however, it must be found as an entry from Option 1 above.
           Make changes/deletions as needed.  NOTE:  Since the program may
           have several entries with the same number, it will default to the
           first occurrence of this number.  While this record is displayed,
           you can use the PgDn key to see the next records.  You can use
           this function key to step thru the records until you find the record
           you wish to change or delete.  The PgUp key is also used to view
           previous records.  You must use the F10 function key to save
           changes made.

           NOTE:  Sales taxes are not computed on the amounts changed.  This
                  allows for changes to items which sales taxes do not apply.
                  You will have to enter the correction with sales taxes
                  added if needed.












           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 2


           Purchases Menu - Option 3  Purchases Report

               A popup menu will appear when this option is chosen.  You may
           print purchases entered by references or by inventory items.  The
           report by reference is used for balancing your entries.  You will
           also be prompted for the date you wish to use for the report.

               You may want to print both reports for your records.


           Purchases Menu - Option 4  Process Purchases

               This is the final procedure to enter purchases to the inventory
           file.  It will post the purchases and delete the purchase records.
           If you have not printed a final purchases report, the program will
           warn you and give you the option to cancel the procedure in order
           for you to print the report first.


           Purchases Menu - Option 5   Main Menu

               Return to Main Menu


           MAIN MENU - OPTION 2    SALES MENU

           Sales Menu - Option 1  Sales Entries

               The first prompt will ask for the inventory item the sale
           is for.  No entries are allowed without an existing inventory
           record in the inventory file.

               The next screen will display data about the item and allow
           quantity and unit sales price entries.  Use the set defaults
           option to display sales amount defaults if desired.

                A reference field is also provided for your use.  You must
           enter a reference.  For your convenience, the previously entered
           reference will be displayed as a default.  You may want to use
           this for invoice numbers.  A report option will allow you to
           print a report in the order of the reference, and will print
           totals for each reference.  Invoice totals can then be checked.
           This option could also be useful for listings by department,
           sales people, date, etc.

           Sales Menu - Option 2  Changes

               This option is to make corrections of the entries entered
           with option 1 above.  You will probably need to get a report with
           Option 3 to check your entries.

               Again, your first prompt will be for the item number.  This
           time however, it must be found as an entry from Option 1 above.
           Make changes/deletions as needed.  NOTE:  Since the program may
           have several entries with the same number, it will default to the
           first occurrence of this number.  While this record is displayed,
           you can use the PgDn key to see the next record.  You can use
           the PgDn and PgUp keys to step thru the records to make changes.
           Changes are only recorded by pressing the F10 key however.




           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 3


           Sales Menu - Option 3  Sales Report

               A popup menu will appear when this option is chosen.  You may
           print purchases entered by references or by inventory items.  The
           report by reference is used for balancing your entries.  You will
           also be prompted for the date you wish to use for the report.

               You may want to print both reports for your records.


           Sales Menu - Option 4  Process Sales

               This is the final procedure to enter sales to the inventory
           file.  It will post the sales and delete the sales records.  If
           you have not printed a final sales report, the program will warn
           you and give you the option to cancel the procedure in order for
           you to print the report first.

               Always make sure you have entered and processed the purchases
          before processing the sales to assure accurate costs of sales.


          Sales Menu - Option 5   Main Menu

               Return to Main Menu


          MAIN MENU - OPTION 3    INVENTORY MENU

          Inventory Menu - Option 1  Inventory File

              Use this option to maintain your inventory file.  New records
          are entered by first entering the inventory item number you wish
          to use for the item.  If the item exists, the program will display
          it's contents for changes or deletion.  A small tone is generated
          if the record exists.  This makes it very easy to verify data
          after a new record has been entered.

              Following are the prompts displayed for each inventory item.

                Description               Item description

                Unit                      A 3 digit field

                On Hand                   Quantities on hand

                Unit Cost                 Cost of each item

                Unit Price                Unit Selling Price
                                          (See On-Hand Report comments on use)

                Location                  15 digit field for location purposes

                Minimum                   Re-stocking quantity

                On Order                  Re-stocking information







           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 4


                Suppliers                 Three 5 digit fields to record
                                          supplier numbers.  Supplier file is
                                          maintained with Option 4 of the Main
                                          Menu.

               Following are Period to Date fields which are primarily intended
           for Period to Date reports.  You may want to leave these items as
           zero, since your only tracking of these amounts are through the
           purchase and sales reports.


               Quantity Purchases        Quantities purchased this period

               Total Cost                Total purchases amount this period

               Last Unit Cost            Last Unit Cost recorded

               Sales Quantity            Quantities sold this period

               Total Sales               Total Sales amount this period

               Sales Costs               Total Recorded sales costs this period.


           Inventory Menu - Option 2  Price Changes

               This option provides for an easy way to change inventory prices
           only.

           Inventory Menu - Option 3  Price Factors

               This option provides for changes to the percentage factors
           applied to the standard price to arrive at prices number 2 and 3.
           The onhand report can be used for price listings.  This feature
           can be very useful for fast price changes on sales, etc.

           Inventory Menu - Option 4  Sales History

               This option provides for changes to the sales quantities and
           amounts to date.  This data reflects previous quantites and
           amounts posted at the time of resetting the period to date option.
           These amounts are only posted with the owner of record version.

           Inventory Menu - Option 5  Inventory Report

               Report listing Item number, Description, Unit, On Hand, Unit
           Cost, extensions and total.  This report is based on the actual
           average unit cost.

           Inventory Menu - Option 6  Minimum Order Report

               Report listing only items whose quantities on hand are less
           then the Minimum quantity desired.  It will also list the On-Order
           quantities (if any) and the Supplier numbers.









           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 5


           Inventory Menu - Option 7  File Listing

               Inventory file listing.


           Inventory Menu - Option 8  On Hand Report

               This report is ideal for sales personnel also.  A pop up
           menu allows for various options.  The full report will list
           quantities on hand, locations and the three prices described above.
           Other options will only list the single price chosen and will
           not list locations...allowing for more compact price listings.

               Since most prices do not contain three decimal figures, the
           program will usually round off to two decimals.  Three decimal
           prices are printed when the following conditions are met:

                   If the inventory price is less then 100.00 and the
                   third decimal digit in your inventory price is not
                   a zero.  If you want certain items less then 100.00
                   to reflect three decimal digits, then make sure you
                   enter a digit other than zero in the third decimal
                   position of the inventory price.  Conversely, if you
                   want two decimal amounts, make sure your third digit
                   is zero.


           Inventory Menu - Option 9  Main Menu

               Return to Main Menu



           MAIN MENU - OPTION 4    SUPPLIERS MENU

           Suppliers Menu - Option 1  Supplier File

               Suppliers are entered using a five digit number.  As described
           above, if the supplier record exists than the data will be
           displayed for changes.  This file is for convenience purposes
           only.  Many will prefer not to use it and opt for their accounts
           payable vendor numbers instead.  The program does not require
           any records if so desired.

               Names, addresses, phone numbers and comments are allowed.
           File is kept sorted by supplier number.


           Suppliers Menu - Option 2  Supplier Listing

               Lists suppliers' data in order of supplier number.












           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 6


           Suppliers Menu - Option 3  Main Menu

               Return to Main Menu


           MAIN MENU - OPTION 5    ON ORDER ENTRIES

               Records items on order.  Entries will be immediately added to
           the On-Order field of the Inventory File.  The current quantity on
           order will be displayed.  You can also remove from the amount with
           the minus key...an entry of such as  -25  is acceptable.  The
           quantity on order is reflected on the reorder report.  Quantities
           will automatically be decreased when purchases are processed.


           MAIN MENU - OPTION 6    PERIOD PROCESSING

           Period Processing Menu - Option 1  Sales Report

               This report reflects the period to date Sales and Costs.


           Period Processing Menu - Option 2  Purchases Report

               This report reflects the period to date Purchases.


           Period Processing Menu - Option 3  Usage Report

               This report reflects the Sales, Purchases and Inventory
           quantities used during the period.


           Period Processing Menu - Option 4  Last Cost Report

               Inventory report based on last unit cost recorded.  If no last
           unit cost is recorded, it will use the actual average cost.  If
           you want a replacement value report, maintain the last unit cost
           field in the inventory file with the current prices.


           Period Processing Menu - Option 5  Sales To Date Report

               This report lists all sales quantities and amounts recorded
           to date, this includes the history sales amounts and the period
           to date amounts.  History amounts are only maintained with the
           owner of record version, otherwise only current period amounts
           will be listed.















           SPC-INVENTORY          INSTRUCTIONS BY MENU                Page 7


           Period Processing Menu - Option 6  Reset Period

               Resets all period to date field data in the inventory file
           to zero.  Use this option to start a new period to date cycle.
           The program will ask for verification before executing this
           procedure.

               Use any period that is useful for your purposes.  The sales
           history to date fields will be updated when this option is
           executed.

           Period Processing Menu - Option 7  History Sales Reset

               This will set history sales to date to zero.  Make sure you
           have your final reports before executing this option.  You will be
           prompted for verification before proceeding with this option.
           This option is used to reset the sales reported with option 5
           above.  You may want to reset the sales at the end of each year,
           and the report could be used as an annual sales report.  The
           period used is your option.


           Period Processing Menu - Option 8  Main Menu

                Return to Main Menu




           If available, the program will make use of standard math chips
               for faster calculations.


           ------------------------------------------------------------------


                                   -  END  -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1961

     Volume in drive A has no label
     Directory of A:\

    BTRIEVE  EXE     32684  10-02-89   2:33p
    CONFIG   DTA        22  11-18-89   2:50a
    FILE1961 TXT      2147   3-02-90   9:11p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   3-02-90   9:14p
    IJINVMAS DAT      2048   2-07-89   7:20p
    IJINVPCT DAT        17   2-07-89   7:21p
    IJINVSPL DAT      3072   2-07-89   7:23p
    IJINVTAS DAT        15   2-07-89   7:19p
    INVTORY  BAT        17  11-18-89   3:24a
    SPCINV   DOC     29965  11-23-89  12:08a
    SPCINV   EXE    128938  11-18-89   1:39a
    SPCINVP  LBR     27168  11-19-89  12:08a
    SPINVPUR DAT      2048   2-07-89   7:20p
    SPINVSAL DAT      2048   2-07-89   7:20p
           15 file(s)     230767 bytes
                           83968 bytes free
