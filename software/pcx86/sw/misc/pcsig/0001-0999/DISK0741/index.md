---
layout: page
title: "PC-SIG Diskette Library (Disk #741)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0741/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0741"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PURCHASE ORDER SYSTEM"

    PURCHASE ORDER SYSTEM is great for almost any kind of business. It
    makes it easy to enter and print purchase orders, and keep a record of
    all vendors. You can enter a list of vendors with addresses and phone
    numbers, which you can later browse, edit, or delete. And you can print
    a vendor master list.
    
    When entering a purchase order, the screen is divided into several
    columns for the account number, quantity, unit, item description, and
    price. Outstanding purchase transactions can be printed by account,
    vendor, or purchase order. Purchases received can be cleared
    immediately, and if a purchase transaction is accidentally cleared it
    can be uncleared for recall.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0741.TXT

{% raw %}
```
Disk No:  741                                                           
Disk Title: Purchase Order System                                       
PC-SIG Version: S3.2                                                    
                                                                        
Program Title: Purchase Order System                                    
Author Version: 4.02                                                    
Author Registration: $69.00                                             
Special Requirements: 640K RAM, a hard drive.                           
                                                                        
PURCHASE ORDER SYSTEM is great for almost any kind of business.  It     
makes it easy to enter and print purchase orders, and keep a record of  
all vendors.  You can enter a list of vendors with addresses and phone  
numbers, which you can later browse, edit, or delete.  And you can print
a vendor master list.                                                   
                                                                        
When entering a purchase order, the screen is divided into several      
columns for the account number, quantity, unit, item description, and   
price.  Outstanding purchase transactions can be printed by account,    
vendor, or purchase order. Purchases received can be cleared            
immediately, and if a purchase transaction is accidentally cleared it   
can be uncleared for recall.                                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PURCHASE.DOC

{% raw %}
```













                               Purchase Order System
                               =====================






                             Version 4.0 - Revision 02
           
           
           
           

           
           
                        Copyrighted (c) 1988,90 by Ron Byxbe
                                           
                                ALL RIGHTS RESERVED 
           
           
           
                                     _______ 
                                ____|__     |               (tm) 
                             --|       |    |------------------- 
                               |   ____|__  |  Association of 
                               |  |       |_|  Shareware 
                               |__|   o   |    Professionals 
                             -----|   |   |---------------------
                                  |___|___|    MEMBER

          Program Modification Request
          -----------------------------------------------------------------


          If you need  additional reports from  this system please fill  in
          this request sheet and mail to:

                   Program Modifications
                   Ron Byxbe & Associates
                   P. O. Box 1844
                   Dublin, Georgia  31040

          Please be very specific in  your request.  A sample  report would
          be helpful.

          Documentation
          -----------------------------------------------------------------

           . View Documentation

               Display the documentation  file to  the screen for  viewing.
               Use the

               Pagedown key to scroll forward and  the Pageup Key to scroll
               backwards.

               To exit press the ESC Key.

           . Print Documentation

               Prints the  documentation file to  the printer.   A  message
               will appear requesting you  to ready your printer.   Be sure
               your printer  is online and press the  ENTER key (or the ESC
               key to Abort).


          Post Purchase Orders
          -----------------------------------------------------------------
           F1  = Help Screen

               This is a  small screen display  the command options at  the
               bottom of the screen.

           F10 = Options Menu

               Pressing this key will present a  pulldown menu at the right
               hand side of the screen.  Select  your option by placing the
               light bar on the appropriate option and pressing then  ENTER
               key.  To exit the menu press the ESC key.

            .  Print Temp Orders

               This  option will print  all purchase orders  to plain white
               paper with  the default  heading.   It will  NOT update  the
               status codes.  This report is intended to be used as an edit
               report.

            .  Print All Orders

               This option will  print ALL purchase  orders to the  printer
               using the page size and heading  defined in the Set Purchase
               Defaults option on the System Menu.

               It  WILL  update  the  status  code  changing  it  from  'I'
               In-Process to 'P' Printed.  The purchase Order will be removed
               from the In-Process screen and placed on the Maintenance Screen.

               All Inventory Values  will be  updated as being  On Hand  or
               Ordered.

           Commands

           . Add

             Allows the user to create new purchase orders to the system.

           . Edit

             Allows the user to modify an existing purchase order.

           . Del

             Gives the  user the  ability  to delete  an existing  purchase
             order.

           . Find

               Lets the  user  find a  particular  purchase order.    Input
               values are based on the display order of the file.

           . Sel

               Takes you to the detail transactions associated with this
               purchase order.  (See Purchase Order Detail).

           . Print

               Prints ONE purchase order.   All values are updated  and the
               status codes are changed from 'I' In-Process to 'P' Printed.
               Inventory values are also updated at this time.


          Purchase Order Detail
          -----------------------------------------------------------------
           .  Add

               Lets the  user add  new detail  transactions to  an existing
               purchase order.

           .  Edit

               Lets the user change  the values of a purchase  order detail
               transaction.

           .  Delete

               Allows the deletion of a purchase order detail transaction.

           .  Compute

               Re-Computes  the purchase  Order  total.   If  you feel  the
               Purchase Order  is not  totaled correctly  then select  this
               option.

          Maintenance Menu
          -----------------------------------------------------------------
           F1  = Help Screen

           F10 = Menu

            . Change Display Order

               Gives the user the ability to  change the primary sort value
               to one of the three option below.

               . Purchase Order Number
               . Vendor Name
               . Purchase Order Status

            . Print NOT Received

               Prints a report  of all purchase  orders that have not  been
               received.  Status code is equal to 'P' or Printed.

            . Print Received Report (By Date)

               Prints  a  report of  all  purchase  orders that  have  been
               received as of a given date.

            . Print In-Process Purchase Orders

               Prints  a  report of  all  purchase  orders that  are  still
               outstanding.   Status code  is equal  to 'I'  or In-Process.
               This purchase orders have not been printed.

            . Delete All Received Orders less than Given Date

               Lets the user remove all  unwanted, received purchase orders
               from the system.   Once this option is  taken you should Re-
               Index the datafiles. (See Main Menu).

          Maintenance Menu  Commands

            .  Edit

               Allows user to edit the purchase order header record.

            .  Del

               Allows  user  to delete  this  purchase order.    All detail
               transactions are also deleted.

            .  Sel

               Selects the detail transactions for this purchase order.

            .  Rec

               A quick way  to receive the purchase order.  Place an 'R' by
               the purchase order and it becomes received.

            .  Print

               Allows  the  user   to  Re-Print  a  given   purchase  Order
               regardless of the status.

          Product Setup
          -----------------------------------------------------------------
           F1  = Help Screen

           F10 = Menu

             . Change Display Order (Product No., Product Name)

               Gives the user the ability to  change the primary sort value
               to one of the three option below.

             . Print Product Descriptions

               Prints a report of all product descriptions.

             . Print Inventory ReOrder Report

               Prints  all product  descriptions along  with the  inventory
               values  for  all  products that  fall  below  the designated
               inventory level.

             . Adjust Inventory Totals from External File

               This allows the user to build  an external file for updating
               the products in the product  inventory file.  The file  is a
               plain DOS Text file with two values in it and must be called
               ADJUST.INV.  The first  is the product number followed  by a
               comma, then  the quantity  to add  to or  subtract from  the
               inventory file.  If the quantity  is negative the value will
               be added to the product file, if the qauntity is positive it
               will be subtracted  from the file.   (** Please notice  that
               the values are  reversed.  This is done because  most of the
               time you will be subtracting values  from the inventory file
               and I  didn't want to  force you to enter  a negative number
               each time).

               Example:   34R5T,567    Subtracts 567 from inventory count

               Example:   34R5T,-10    Adds 10 to inventory count

           Product Setup Commands

             .  Add

               Allows the user to add a new product to the system.

             .  Edit

               Allows the user to change a  product description.  Also note
               that you can change the inventory values from this screen.

             .  Del

               Allows the user to delete a product description.

             .  Find

               Allows the user  to find  a particular product  description.
               Please  note that the KEY  value is based  on the sort order
               selected.

             .  +/- Adjust

               Allows the user to adjust the inventory count up or down  by
               using the + or - key on the numeric key pad.  Enter a  + and
               a  window will appear.  Enter an  amount and the record will
               be updated.


          Vendor Setup
          -----------------------------------------------------------------
           F1  = Help Screen
           F10 = Menu

             .  Change Display Order (Name, Number)

               Gives the user the ability to  change the primary sort value
               to one of the three option below.

             .  Print Vendor List

               Prints a list of all vendors in the vendor file.


           Commands

             .  Add

               Allows user to add a new vendor.

             .  Edit

               Allows user to edit an existing vendor record.

             .  Del

               Allows user to delete a vendor  record.  (** If you do  very
               much  deleting  you  should  Re-Index   the  data  files  to
               permantly remove deleted records from the file).

             .  Find

               Lets the user find a particuler vendor.  The KEY is based on
               the sort order selected for the file.  See F10 Menu for this
               module.

          System Menu
          -----------------------------------------------------------------
          Edit System Name

               This is where you put the  name and address of your company.
               This  value print at  the top of the  purchase order and all
               reports.

          ReIndex Data Files

               This option will  permantly remove all deleted  records from
               the file.   When a  record is  deleted it  is only  flagged.
               This option removes it  permantly.  If you do  much deleting
               you should select this option.

          Display System Status

          Set Purchase Defaults

            .  Page Size (66)

               This is the page  size of the paper  you are using.   If you
               are using  a standard tractor  feed printer then  this value
               should  be 66.  If  you are using a  shhet feeder or a laser
               printer then this  value should be  60.  For other  printers
               you may have to adjust up or down one line.

            .  First Line of Purchase Order (10)

               This is the first  line of the purchase order.   Normally it
               will start on  line 10.  If  you use you  company letterhead
               then you should set this to this first printable line on the
               letterhead and set print heading to 'N'.

            .  Print Heading (Y)

               If  'Y' then  prints the  standard heading  on the  purchase
               order.

            .  Default Terms

            .  Default Freight

            .  Default FOB

            .  Default Ship Via

            .  Default Tax Rate

               Sets the  default tax  rate for  purchases.   Values are  in
               decimal.  Example:  0.06 = 6%.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0741

     Volume in drive A has no label
     Directory of A:\

    PURCHASE EXE    232768   5-11-90   8:04a
    PURCHASE OVR     61672   5-11-90   8:04a
    PURCHASE DOC     12883   5-07-90   3:13p
    POST     HLP       262   3-18-90  10:52a
    MAINT    HLP       235   5-06-90   6:47p
    PROD     HLP       610   3-17-90  10:41a
    VENDOR   HLP       134   5-06-90   1:58p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       575   7-06-90   2:37a
    FILE0741 TXT      1999   7-10-90   1:48p
           10 file(s)     311176 bytes
                            5120 bytes free
