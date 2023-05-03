---
layout: page
title: "PC-SIG Diskette Library (Disk #1250)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1250/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1250"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STARBOOKS"

    STARBOOKS generates purchase orders, maintains stock levels based on
    sales rates, tracks and automatically updates your inventory, invoices
    and bills your customers and tracks their accounts, keeps tabs on
    backorders, and tracks sales trends and profits on an item-by-item
    basis. It's a big, smart comprehensive program -- and yet is
    surprisingly simple to run.
    
    STARBOOKS does a lot more than similar programs costing over a thousand
    dollars. Set your proper inventory levels and STARBOOKS, through
    computer generated SKU numbers, watches sales to make sure you order
    soon enough, never forgetting to include backorders. It generates
    purchase orders by supplier and can automatically update stock levels.
    It prints out stock lists for inventories and lets you identify your
    shrinkage.
    
    The accounts receivable menu lets you generate invoices and statements
    which list past due invoices. Posting payments takes seconds. While the
    program does not age accounts, it generates a customer list with
    account statuses. It watches backorders and lets you split payments
    among invoices. If a customer phones in a query, you can bring up the
    account in seconds. Almost unique to the program is its ability to
    generate long invoices with hundreds of items printed on it.
    
    Read the documentation carefully. This program has its own way of doing
    things and isn't very forgiving of experimental key pressing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1250.TXT

{% raw %}
```
Disk No: 1250                                                           
Disk Title: StarBooks                                                   
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Starbooks                                                
Author Version: 2.06                                                    
Author Registration: $29.95                                             
Special Requirements: Hard drive strongly recommended.                  
                                                                        
STARBOOKS generates purchase orders, maintains stock levels based on    
sales rates, tracks and automatically updates your inventory, invoices  
and bills your customers and tracks their accounts, keeps tabs on       
backorders, and tracks sales trends and profits on an item-by-item      
basis.  It's a big, smart comprehensive program -- and yet is           
surprisingly simple to run.                                             
                                                                        
STARBOOKS does a lot more than similar programs costing over a thousand 
dollars.  Set your proper inventory levels and STARBOOKS, through       
computer generated SKU numbers, watches sales to make sure you order    
soon enough, never forgetting to include backorders.  It generates      
purchase orders by supplier and can automatically update stock levels.  
It prints out stock lists for inventories and lets you identify your    
shrinkage.                                                              
                                                                        
The accounts receivable menu lets you generate invoices and statements  
which list past due invoices.  Posting payments takes seconds.  While   
the program does not age accounts, it generates a customer list with    
account statuses.  It watches backorders and lets you split payments    
among invoices.  If a customer phones in a query, you can bring up the  
account in seconds.  Almost unique to the program is its ability to     
generate long invoices with hundreds of items printed on it.            
                                                                        
Note: Read the documentation carefully.  This program has its own way of
doing things and isn't very forgiving of experimental key pressing.     
                                                                        
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
║           <<<<  Disk No 1250  STARBOOKS               >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANPRINT (press enter)                                      ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             SB (press enter)                                            ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## READ_ME.DOC

{% raw %}
```
	To print the manual, type MANPRINT.  Make sure your printer is
	ready.  Manual is about 22 pages long.  To register for the most
	up to date copy of STARBOOKS send $29.95 to:

============================================================================
                          Allsoft Computer Products
	                   2404 Sugar Maple Court        
		        Monmouth Junction, NJ  08852
============================================================================

	Please support the Shareware concept with your registration fee
	to keep programs like this available.

--------------
Version 2.00
--------------
This disk also includes a file calles MSSG.DAT.  It holds a message that
will be printed at the end of each invoice.  You can use this one, modify
it using a word processor (keep it in ASCII) or re-install the program.

--------------
Version 2.02
--------------
Fixed Bug that would not allow more than 1 Vendor Account.

--------------
Version 2.02
--------------
Added ability to print Shipping Labels after printing the sales order.
At the Prompt "How many boxes are you shipping?"  Enter the number or 0
for none.

-------------
Version 2.03
-------------
Added Canadian Zip Code capability and create purchase orders for new parts
with no sales history

-------------
Version 2.04
-------------
Added ability to change date during invoicing.  This is useful for customers
who wish delayed billing.

-------------
Version 2.05
------------
Added larger Company name and address fields

Added option to use Tax Rate.  Re-install using SB INSTALL and set tax rate
or set to 0 to keep options for wholesale.  At end of invoice preperation,
option will say "Add tax rate? (Y/N)"  All account and totals will reflect
tax added to invoice total.

------------
Version 2.06
------------
Added A)djustment option in the Inventory Menu.  This allow the adjustment
of on hand quantities without affecting your on order amounts.  Select the
option, enter the part number then enter the adjustment amount.  Use a 
negative number to subtract from your on hand, positive to add.  This 
option in most useful after taking inventory.

I hope that you enjoy STARBOOKS 2.06.  Your voices made 2.06 possible.


-Brian
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1250

     Volume in drive A has no label
     Directory of A:\

    SB       EXE    221904   2-21-90   8:15p
    CONVERT  EXE     41171  10-02-88   9:50a
    STARBOOK MAN     47504   1-14-90  11:47a
    A-C      BAT       532  12-22-88   8:51p
    B-A      BAT       532  12-22-88   8:52p
    MANPRINT BAT        73   4-05-88   9:25a
    MSSG     DAT        52  11-06-88  11:14a
    READ_ME  DOC      2294  12-30-89  10:55a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1002   1-01-80   1:59a
    FILE1250 TXT      2961   3-22-90  11:11a
           11 file(s)     318063 bytes
                           37888 bytes free
