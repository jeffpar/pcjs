---
layout: page
title: "PC-SIG Diskette Library (Disk #2262)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2262/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2262"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PARCEL SHIPPING PROGRAM (2319 ALSO)"

    The PARCEL SHIPPING PROGRAM (PSP) is a menu-driven system that meets
    all UPS reporting requirements. It is designed to eliminate the
    tedious UPS paperwork needed to ship parcels.
    
    All UPS shipping rates and tables are included. As you enter the
    shipping transaction, PSP calculates the UPS zone shipping charges.
    Produce shipping labels, COD tags, and UPS manifests. PSP maintains a
    shipping address file for frequently shipped-to customers, and a
    temporary file for one-time shipments that can be deleted at the end of
    the day. The format of the shipping data entry screen is similar to the
    UPS log book, making PSP very easy to use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2262.TXT

{% raw %}
```
Disk No: 2262                                                           
Disk Title: The Parcel Shipping Program (also 2319)                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Parcel Shipping Program                              
Author Version: 1.0                                                     
Author Registration: $125.00                                            
Special Requirements: A hard drive, or high density drives.             
                                                                        
The PARCEL SHIPPING PROGRAM (PSP) is a menu-driven system that meets all
UPS reporting requirements.  It is designed to eliminate the tedious UPS
paperwork needed to ship parcels.  All UPS shipping rates and tables    
are included.  As you enter the shipping transaction, PSP calculates    
the UPS zone shipping charges.  You can also produce shipping labels,   
COD tags, and UPS manifests.  PSP maintains a shipping address file for 
frequently shipped to customers, and a temporary file for one time      
shipments that can be deleted at the end of the day.  The format of the 
shipping data entry screen is similar to the UPS log book, making PSP   
very easy to use. Changes to UPS rate charges are supplied to registered
users for $35.00.                                                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```



The following 21 files are included in PSP Version 1.0

ST.EXE........Program Module
MN.EXE........Program Module
LB.EXE........Program Module
RT.EXT........Program Module
NA.EXE........Program Module
HK.EXE........Program Module
HL.EXE........Program Module

BRUN30.EXE....Microsoft QuickBASIC 3.0 run-time module

BTRIEVE.EXE...NOVELL record management system module

CHART1.UPS....Data File...UPS Rate and Service Charge information
CHART2.UPS....Data File...UPS Rate and Service Charge information
CHART3.UPS....Data File...UPS Rate and Service Charge information
CHARTN.UPS....Data File...UPS Rate and Service Charge information
CHARTI.UPS....Data File...UPS Rate and Service Charge information
NAME.UPS......Data File...Shipping Address File
USR.UPS.......Data File...User Information File

INSTALL.EXE...Installation Module
INSTALLB.BAT..Additional Installation batch file for 2 disk drive install

PSP.BAT.......Starting batch file after installation

MANUAL.DOC....PSP User's Manual
REGISTER.DOC..PSP Registration Form













		The Parcel Shipping Program (PSP)tm

                          USER'S MANUAL

                           Version 1.0

                             7/1/90


























(c) 1990 East Hampton Industries
    81 Newtown Lane
    East Hampton, NY 11937
    516-324-2224















          PSP - The Parcel Shipping Program Version 1.0
         --------------------------------------------- 

                        Table of Contents
                        -----------------


 
        Features----------------------------------------1

        How to Install and Start------------------------2

        Using PSP---------------------------------------3

        How to Obtain UPS Approval----------------------4

        If UPS Rates Change or
	Why you should register-------------------------6

        Reference Guide---------------------------------7








Features
========

-Eliminates use of UPS log book
-Includes all UPS rate tables
-Produces UPS accepted computer Manifests and Summaries
-Produces UPS accepted shipping labels, COD Tags
-Every package given a Package ID number
-Instantly computes all UPS charges, COD, AOD charges
-Maintains a Shipping Address file
-Pay only if you find the software useful

Overview
--------

The Parcel Shipping Program (PSP) is a menu-driven software system
that meets all UPS reporting requirements. It is designed to
eliminate the tedious UPS paperwork for companies that use UPS for
shipping.  

As you enter your shipping transactions, PSP looks up the UPS zone
from the ZIP code. Next PSP calculates the UPS shipping charges.

PSP also can produce shipping labels, COD Tags and UPS Manifests.

PSP maintains a shipping address file for frequently shipped to
customers and a temporary file for one time shipments that can be
deleted at the end of the day.

Local UPS approval is needed to operate PSP (see below).

Special Requirements: DOS 2.1 or higher, Minimum 256KB, IBM,
                      EPSON, or OKIDATA printer(s), Hard Disk
                      recommended. May be operated on one 720KB
                      (or more) disk or a 2 drive system.



How to Install & Start PSP
==========================

How to Install:        Insert copy of PSP in drive A and type
                       INSTALL after the A prompt. Follow in-
                       structions on screen.

How to Start:          1 Diskette Drive - Enter PSP after the
                       A prompt.

                       2 Diskette Drives - Insert diskette
                       labelled "PSP Programs" in drive A, "PSP
                       Data files" in drive B. Enter PSP after
                       the A prompt.

                       Hard Drive - Change directory to directory
                       containing PSP.  Enter PSP after prompt.


                               -2-



Using PSP
=========
 
General
-------
After starting PSP you will see the Main Menu. When you make a
selection from the Main Menu you will see submenus that will help
you operate PSP. Messages will appear at the bottom of screens to
suggest the next step. The ESCAPE key will generally take you back
one step and the F1 key is used to proceed after a processing error
has been detected.

You may want to set up a separate printer for your labels and COD
Tags to avoid changing paper. You may select up to 3 printers LPT1,
LPT2, LPT3 in the Housekeeping section (Main Menu #4, Submenu #6)
or attach A/B switches.


Initial Data Entry
------------------

When you first start PSP you must set up your company data (#4
Housekeeping, #1 Add/Edit Company Data.)

Next check to see if the label default (2 15/16" x 4") is
satisfactory. If not make your own selection (#4 Housekeeping, #2
Add/Edit Shipping Label Format).

Then Enter your Zone Chart (#4, #4)

Review the UPS Rates (#4, #3)

Review UPS service charges (#4, #5)

Finally select printer ports or accept default LPT1 (#4, #6)


Shipping Address Processing (#3 on Main Menu)
---------------------------------------------

PSP comes with several shipping addresses already on file to assist
in getting local UPS approval (see below). You may delete these
names after PSP is approved. EHI also has available a utility to
down load an ASCII Address file to PSP. Call EHI for more
information about the Utility.








                               -3-



How to Obtain Local UPS Approval
================================

Although PSP has been thoroughly examined and approved by the UPS
National office, your local office must also give its approval
before you can use PSP in your facility.

To obtain local approval, you must meet with your UPS
representative and request approval to install the Parcel Shipping
Program, which UPS refers to as a "Host Computer System".

Complete these steps before the UPS representative arrives at your
company:

1) Enter your Company name, address and UPS Pickup Record Number
(Housekeeping Menu, #1).

2) Set up your Zone Chart (Housekeeping Menu, #4) and print out a
copy for UPS.

3) Review and print out copies of all the Rate Charts (Housekeeping
Menu, #3).

4) Set up a label format (Housekeeping Menu, #2).

5) Enter the 29 shipping transactions shown on the Chart of
Transactions for UPS Approval below (Main Menu, #1).  
These 29 transactions include shipments to almost all the UPS zones
and were used to obtain National UPS approval for PSP. PSP provides
you with 15 pre-entered shipping addresses (Customer Numbers 1
through 15), so you can easily enter these transactions and create
the reports you need for the approval process. You may delete these
addresses after you receive approval.

6) Print the Manifest and Summary Reports (Reports Menu, #1).
The manifest will be 9 pages long and list 103 individual packages.
The summaries are one page each.

7) Print the first 10 of the shipping labels (Reports Menu, #2).
You do not need to print all 103 labels.

8) Print the 2 COD Tags on plain paper (UPS will supply you with
the required continuous forms when your approved).

Your UPS representative will fill out a form and submit it along
with your printouts and labels for local approval.

After you receive UPS approval, your representative will supply
you with a "Pickup Record - Computer Manifest Book" and show you
how to fill it out and what to submit each day to your driver. The
second summary printed when you print the Manifest contains all the
information you need to manually fill out your Pickup Record page.

If you encounter any difficulties with the local UPS approval
process, please call EHI, toll free, at 1-800-645-1188.


                               -4-
                               


             Chart of Transactions for UPS Approval

Control  Customer            No     COD     O  Declared  A  C
Number    Number  Zone   Wt  Pkg   Amount   S    Value   D  T   
  1         1       *    1    1    100.00   
  2         2       *    2    1             1
  3         3       *    3    1                  200.00
  4         4       *    4    1                          1
  5         5       *    5    1                              1
  6         6       *    6    1    600.00
  7         7       *    7    1                  700.00
  8         2      12    1    1
  9        10      14    1    1
 10        11      15    1    1
 11        12      16    1    1
 12         2      22    1    1
 13         2      22    LT   1
 14        10       1    1    1
 15        10      24    LT   1
 16        11      25    1    1
 17        11      25    LT   1
 18         8      51    1    1
 19        13      52    1    1
 20        14      53    1    1
 21         8      87    1    1
 22         8      87    LT   1
 23        13      89    1    1
 24        13      89    LT   1
 25         9      93    1    1
 26        15      93    LT   1
 27        15      97    1    1
 28        15      97    LT   1
 29         2       *    1    75

*Indicates zone selected by PSP


















                               -5-



If UPS Rates Change or Why you should register
================================================

UPS has changed rate charts on the average of once every two to
three years. When changes occur EHI will send to all registered
users the new rates for $35. 

In addition, registered users may purchase a module to update rates
themselves for $75.

Registered users will also receive toll-free telephone support on
our 1-800-645-1188 number.

New versions of PSP will be released to improve the software or to
accomodate any changes required by UPS. Registered users will be
informed of these new releases.

Print the file REGISTER.DOC to register.

If you have any comments or questions about PSP send them to:

                    Kenneth M. Ferrin
                    East Hampton Industries
                    81 Newtown Lane 
                    East Hampton, NY 11937
                    516-324-2224





























                               -6-





Reference Guide
===============

Menu Chart
----------

  Main Menu
  1. UPS Shipping Transactions Processing
  2. Reports
     1) Print UPS Manifest & Summary Reports
     2) Print Shipping Labels
        1) From UPS Manifest
        2) Entering All Information on Label
        3) From Shipping Address List
     3) Print COD Tags
     4) Print Billing Report
     5) Print Shipping Addresses
  3. Shipping Address Processing
     1) Add Shipping Addresses
     2) Modify Shipping Addresses
     3) Shipping Address Inquiry
     4) Delete Shipping Address
  4. Housekeeping
     1) Add/Edit Company Data
     2) Add/Edit Shipping Label Format
     3) View/Print UPS Rates
        1)  View/Print UPS Rates - Zones 1 thru 8
        2)  View/Print UPS Rates - Zones 12 thru 25
        3)  View/Print UPS Rates - Canada - Zones 51 thru 89
        4)  View/Print International Rates - Zones 93, 97, Air   
         Letters
     4) Add/Edit Zone Chart
     5) View/Print UPS Service Charges
     6) Select Printer Ports
  5. Exit Program

The remainder of this chapter describes each of the Menu selections
in the order presented above.














                               -7-



Main Menu
---------
After starting the system you will see the title screen and then
the screen requesting you to enter the current date. After you
enter the current date, the Main Menu will appear.

1. UPS Shipping Transaction Processing
--------------------------------------

The Shipping Transaction Screen:
  Use this screen to enter your daily Shipping transactions.
  This screen is similar in design to the UPS Record Book. The  
  entries you will make are similar, as well.

  Your company name, UPS Shipper Number and the number of trans-
  action lines you've entered will appear on the right side of
  the heading. Your company name and number will be blank until
  you enter this information in the Housekeeping section. 

  You may interrupt your data entry at any time by pressing 
  [ESCAPE].

Deleting previous days transactions:
  When you access the Shipping Transaction Screen, PSP will ask  
  if you want to erase previously entered transactions. Press
  [DELETE] to delete them. Press [ENTER] to continue without 
  deleting them. You  should delete the transactions after you've
  printed your manifest and are ready to start a new shipping    
  day.

  If you press [DELETE], and any transactions contain a temporary
  address, then a message will appear to permit you to erase     
  temporary addresses. Press [DELETE] to delete them. Press 
  [ENTER] to continue without deleting them. We recommend you
  delete temporary addresses to speed up processing time. The
  maximum number of temporary addresses is 999.

  After pressing [ENTER], you may change the date or the Pickup
  Record Number. Or you may retain them by pressing [ENTER].
  The cursor will then go to the last transaction line you      
  entered, and you may start entering transactions.

Accessing transaction lines that are off the screen:
  The transaction line area on the screen has room for ten trans-
  actions. When there are ten or more transactions, the top lines
  will scroll up, disappearing from view, and new lines will    
  appear on the bottom as you complete lines.

  You can scroll the lines in the transaction line area by using
  the [UP ARROW] and [DOWN ARROW] keys.





                               -8-



You have available these special keys:
  [ENTER]        Accepts data you've typed on the screen.
  [ESCAPE]       Exits screen. Use when you have completed
                 all your Transactions.
  [F2]           Completes a transaction line and moves the 
                 cursor to the next lower line.              
  [F3]           Deletes a transaction line.
  [F4]           Inserts a transaction line.
  [F5]           Copies data from line above - If you have
                 several shipments to the same customer, you
                 can duplicate control numbers, customer
                 numbers, etc. using this feature.
  [F6]           Prints a shipping label for the current trans-
                 action.
  [UP ARROW]     Moves the cursor to the next higher line.
  [DOWN ARROW]   Moves the cursor to the next lower line.
  [RIGHT ARROW]  Moves the cursor to the right.
  [LEFT ARROW]   Moves the cursor to the left, and to previous
                 entries.


Transaction line data entry fields:

Control Number - You may enter any 7-digit number. This number
can be any control number that is meaningful to your own business
(e.g., an invoice or order number).

Customer Number -  When you reach this item, please note the    
message at the bottom of the screen, "Enter Customer Number or  
press [ENTER] to add a Temporary Address." You must assign a    
Customer Number to every Shipping Address.

Shipping Addresses 
These may be entered through the Shipping Address Processing Menu
or by entering a Customer Number and pressing [ENTER] on the
Shipping Transaction Screen.

If you enter a Customer Number that is not on file, PSP will ask
if you want to enter the address. If the customer number is on
file, then PSP will supply the abbreviated Name, State, Zip Code
and Zone, provided the Zip Code is also on file.

Temporary Addresses
If you press [ENTER], the system will assign a temporary number of
the form * nnn, and you will be prompted to set up the address.
These temporary addresses can be deleted the next time you enter
this section of the program.

If you make a data entry error, you may assign another temporary
address to a transaction line by blanking out the temporary number.
PSP will then allow you to set up a new temporary address for the
transaction line.




                               -9-





Zone - PSP will accept all valid UPS Zone codes.

Weight - Enter a weight of 1 to 70 lbs or LT for Air Letter.

Number of Packages - For multiple packages, identical in weight,
going to the same customer. The UPS Computer Manifest will,
however, print one line for each package, as required by UPS.

After you enter Number of Packages, PSP will compute the UPS
charges. Additional charges will be added if you subsequently
require COD, Declared Value, AOD, or Call Tag services.

COD Amount - If a customer is classified as a COD only customer
(code 1 or 2), a message will appear to remind you to enter the
COD amount. The amount you enter should be the amount you wish UPS
to collect on your behalf for each package.

You may specify in the Company Data section of Housekeeping whether
you wish to add UPS Charges to this amount on the COD Tags and
Manifest Report.

Oversized Shipment - Enter a 1 if the box size is in excess of the
UPS requirements of length and girth. PSP will compute the required
UPS charges.

Declared Value - Enter declared value for each package. PSP will
compute the required UPS charges.

AOD - Enter a 1 if Acknowledgement of Delivery is required.

CT - Enter a 1 if this is a Call Tag transaction.





















                              -10-

2. Reports
----------

1) Print UPS Manifest and Summary Reports

When you access this menu, you can print the Computer Manifest,
the Computer Summary, and a second Summary listing all information
necessary to fill out the Pickup Record-Computer Manifest page.

You may have PSP print the UPS Computer Manifest in control number
order by selecting 2 on the first screen. Otherwise the report is
printed in the order in which you entered the transactions. Please
note the UPS charges on this report are the shipping rate charges
only.

You may also choose to print the Summaries only by entering a Y
when requested. The default is N; that is, both the Manifest and
the two Summaries are normally printed.

You may print multiple copies by entering the number of copies you
want to print. The default is 2 copies, one for UPS and one for
your files.

2) Print Shipping Labels

We recommend that you set up a separate printer using an A/B switch
or an additional port to print your shipping labels. The default
label is a blank label 4" (or 4 1/4") by 2 15/16". You may select
other label sizes or preprint your label. See instructions under
Housekeeping (#2).

 1) From UPS Manifest

    You may selectively print labels starting from the Shipping 
    Transactions you specify. You would use this option to avoid
    printing labels you've already printed-for example, when you
    want to print transactions you've just added. You may also   
    choose to print your labels without stopping to add additional
    information to each label.

    Labels for transactions requiring COD or Call Tag service will
    not be printed.
 
    As each label is printed, it is displayed on the screen.    
    Follow the instructions at bottom of screen to process labels.

 2) Entering All Information on Label

    After you select this option, a box will appear on the screen. 
    You may then enter the data you want to have appear on a batch 
    of shipping labels. Follow the instructions at the bottom of
    the screen to process the labels. All labels will be numbered.

 3) From Shipping Address List  
  
    By selecting this option, you may print all or a selected group
    of address labels from the Shipping Address List on a standard
    3 1/2" x 15/16" label or on your own shipping label.

                              -11-



3) Print COD Tags - optional

A COD Tag may be printed for every package where a COD amount is
entered on the Shipping Transaction. Please note that the COD
amount is for each package, and the COD Tag serves as the shipping
label. If you ship many COD packages, we recommend you set up a
separate printer for your COD Tags.

You may, however, use the COD screen to obtain the Reference
Number, COD Amount, and Shipping Address and type the COD Tags
manually.

Before you print each tag, you will be prompted to enter any
special instructions to appear on the tag.

At this time you may also elect to change the "Cash Only" code.

4) Print Billing Report

The Billing Report is similar to the UPS Computer Manifest produced
in Section 1 above. A line on the Billing Report corresponds to a
line on the Shipping Transaction screen while the Manifest Report
lists each package shipped. Also the UPS charges on the Billing
Report includes all UPS charges (CODs, AOD charges, etc.). In
addition, the Billing Report will compute sub-totals by Control
Number for the same Control Number entered consecutively. This
report is useful for reconciling your UPS bill and for keeping
track of shipping charges by Control Number.

5) Print Shipping Addresses

By selecting this option, you may print all or a selected group of
Shipping Addresses for reference purposes. This report helps you
to maintain your Shipping Address List.



















                              -12-



3. Shipping Address Processing
------------------------------

The screens in this section are all very similar to each other.
Titles at the top of the data entry screens will remind you of
which selection you have made.

 1) Add Shipping Addresses

    You will be prompted by the Shipping Address data entry 
    screen to set up a Customer Number. You may use any alpha-
    numeric characters for Customer Number, but PSP will ignore
    leading and trailing blanks.

    You may use the Reports Menu to print the customer list in
    Abbreviated Name or Customer Number order.

    When you use the Credit Code for a customer on the Shipping
    Address screen, PSP will prompt you to enter COD amounts
    when you enter shipping transactions for the customer and
    will indicate cash collections on the customer's COD Tags.

    The number of Shipping Addresses you may enter is limited
    only by disk space:
          Single diskette (720KB) system - 1,500 addresses
          Two diskette (360KB) system - 1,500 addresses
          Hard disk drive - 4,000 addresses per Megabyte

2) Modify Shipping Addresses

    You must know the Customer Number to modify the Shipping    
    Address Information. Enter the number and the information will 
    appear. Press [ENTER] to reach the field(s) you wish to modify.

3) Shipping Address Inquiry

    Shipping Address Information can be viewed by entering the   
    Customer Number. By pressing [ENTER], you can scan the entire 
    list.

4) Delete Shipping Addresses

    You may delete a Shipping Address by entering the Customer   
    Number as long as no shipping transactions are still entered 
    in the Shipping Transaction file. Use [DELETE] on the Shipping
    Transaction screen to purge the transactions. This should be
    done at the beginning of each new shipping day or after the  
    shipment has been picked up by UPS.





                              -13-



4. Housekeeping
---------------

1) Add/Edit Company Data

When you first receive the PSP system, enter your company name and
address, Zip Code, and UPS Shipper Number.

The address information you enter will appear on all your reports
and shipping labels.

If you want to have the UPS charges added to your COD amounts,
enter Y to the last question on this screen. The UPS charges will
then be added to the COD amounts on the COD Tags and the Manifest
Report. The default is N.

2) Add/Edit Shipping Label Format

PSP prints a UPS approved shipping label with a ship to address or
a tab label (3 1/2" x 15/16") which will contain only your UPS
Shipper Number, Pkg. ID, Zone and Wt on a label. Select option 1
for complete label and 2 for the tab label.

PSP supports the following label sizes:

     4" or (4 1/4") x 2 15/16" (default)
     5" x 2 15/16"
     4" x 2 7/16"
     5" X 2 7/16"

You may preprint your labels with your return address and a box
for UPS Shipper Number and Package ID Number. The box must be
printed on the upper right corner 1/8" from top and edge. The
dimensions of the box must be 2" long and 3/4" wide. Preprint "UPS
SHIPPER NUMBER" in the upper 3/8" of the box leaving 3/8"
for the computer to print your UPS Number and Package ID. PSP will
also print the weight and zone below the box. You must preprint
your return address in the upper left corner of the label.
Designate that your label is preprinted by answering Y to the
question on the format screen.

If you choose not to preprint your label, answer N on the format
screen. Your company address will automatically be printed in the
upper left corner and the UPS Shipper Number and ID Number will be
printed in the upper right corner of your labels.

You may also specify on which line and column you want the shipping
address to start printing.

You may print two sample labels to check to see if your format is
correct by pressing [ENTER] to accept the format and [ENTER] again
to print two sample labels.




                              -14-



3) View/Print UPS Rates

The UPS Rate Charts are already set up for you. You may print all
internal rate charts upon selection of these options.

   1) View/Print UPS Rates - Zones 2 through 8

   2) View/Print UPS Rates - Zones 12,14,15,16,22,24,25

   3) View/Print UPS Rates - Canada

   4) View/Print International Rates, Air Letters

If UPS changes any rates or service charges EHI will provide
updated Rates on diskette for $35.00.

4) Add/Edit Zone Charts

You must set up your own Zone Chart. The input screen is similar
to the chart provided by UPS. You can print the chart when you have
completed your entries.

5) View/Print UPS Service Charges

The current UPS charges for services are already entered in the
PSP files. 

6) Select Printer Ports

You may assign 3 different printer ports for your Reports, Labels
and COD Tags. You may also use A/B switches and select LPT1 for
all 3 ports.


5) Exit Program
---------------

You should always Exit PSP through this option on the Main Menu.















                              -15-





                                             
                           


          
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
      REGISTRATION FORM FOR THE PARCEL SHIPPING PROGRAM (PSP)tm


Parcel Shipping Program (PSP)tm Registration Amount........... $125    ______

With this registration you
    - may use our toll-free number for unlimited support. (800-645-1188)
    - will be able to purchase future UPS Rate change diskettes. ($35)
    - may order program module to update UPS rates. ($75)
    - may order PSP Utility Program to convert ASCII Customer Files to PSP. ($50)
    - will receive information about software updates.


Name of Company _______________________________________________________

Name and Title_________________________________________________________

Address________________________________________________________________

City_____________________________________State__________ZIP____________

Phone_________________________________FAX______________________________

Purchase Order No.____________________________________________________



To register with MasterCard or Visa, please fill out the information
requested below.


MasterCard ______ or Visa ______

Card Number _________________________________________________________

Expiration Date _____________

Cardholder's Signature REQUIRED ____________________________________


Mail or FAX this form to:

	   East Hampton Industries
	   81 Newtown Lane
	   East Hampton  NY, 11937

	   Phone 516-324-2224
		 800-645-1188

	   FAX   516 324-2248



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2262

     Volume in drive A has no label
     Directory of A:\

    GO       TXT       760   7-18-90   9:05a
    GO       BAT        40   1-01-80   6:00a
    FILE2262 TXT      1925   7-19-90   9:39a
    MANUAL   DOC     26989   6-20-90   3:01p
    REGISTER DOC      1471   6-20-90   3:15p
            5 file(s)      31185 bytes
                          128000 bytes free
