---
layout: page
title: "PC-SIG Diskette Library (Disk #2054)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2054/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2054"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PULLED FROM THE LIBRARY"

    If your business maintains inventory information and could benefit from
    knowing what the best quantity levels are for each part, then INVENTORY
    MASTER (IM) may be your program.
    
    IM allows you to set up your inventory parts by vendor and then to
    indicate quantity discount levels for each item.  IM then calculates for
    each item the optimum quantity to buy and when to buy it.  The formula
    seeks to balance the cost of keeping the item on the shelf against the
    cost of placing numerous orders.
    
    IM is easy to set up and use, although the manual is a must.  It
    explains how to end work sessions and explains numerous terms in clear
    terminology.  IM does not track inventory stock levels but is used to
    determine stock levels that are optimum for the company.  In so doing, a
    company can minimize stock purchasing costs while maximizing profits.
    For those needing such capabilities, INVENTORY MASTER will answer the
    call.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2054.TXT

{% raw %}
```
Disk No: 2054                                                           
Disk Title: Inventory Master                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: Inventory Master                                         
Author Version: 1.0                                                     
Author Registration: $99.95                                             
Special Requirements: None.                                             
                                                                        
If your business maintains inventory information and could benefit      
from knowing what the best quantity levels are for each part, then      
INVENTORY MASTER (IM) may be your program.                              
                                                                        
IM allows you to set up your inventory parts by vendor and then to      
indicate quantity discount levels for each item.  IM then calculates    
for each item the optium quantity level to keep.  The formula seeks     
to determine the cost of keeping the item on the shelf and which        
quantity represents the least holding cost to the business.             
                                                                        
IM is easy to set up and use, although the manual is a must.  It        
explains how to end work sessions and explains numerous terms in        
clear terminology.                                                      
                                                                        
A particular limitation worth noting, when entering the lead time       
(from the time an order is placed to the time it arrives), the program  
only accepts full weeks and not days and weeks or partial of a week.    
                                                                        
IM does not track inventory stock levels but is used to determine stock 
levels that are optium for the company.  In so doing, a company can     
minimize stock overhead while maximizing profits.  For those needing    
such capabilities, inventory master will answer the call.               
                                                                        
                                                                        
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
║                 <<<<  Disk #2054  INVENTORY MASTER  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  IM (press enter)                               ║
║                                                                         ║
║ To print documentation, type:  COPY IM.DOC PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## IM.DOC

{% raw %}
```
           
           
           
           
           
           
           
           
           
           
           
           
           
                                                      INVENTORY MASTER
                                                      User's Guide
                                                      Version 1.0 SW
           
           
                                                  (C) Copyright 1988, 1989
                                                      by Blair D. Peery
                                                      All Rights Reserved
           
                                                      PEERY DATA
                                                      P.O. Box 12235
                                                      Charlotte, NC 28220
           
           
           
           
           
           
           
           
           
           
           INVENTORY MASTER is not a public domain program, nor is it free. 
           It is (C) Copyright 1988, 1989 by Blair Peery and Peery Data.  
           
           Non-registered users are granted a limited license to use
           INVENTORY MASTER for a trial period to see if the program is of
           interest.  Continued use beyond a reasonable trial period
           requires Registration.  Information on registering appears on
           page 24, followed by an order form.
           
           You may make distribution copies of INVENTORY MASTER for others
           to use for a trial period, provided that all documentation is
           included.  Tell those receiving a copy that it is a shareware
           product, not free or public domain.
           
           
           
           
           
                                    C O N T E N T S
           
           
           
           
                Introduction and System Requirements...................  1
                     What can INVENTORY MASTER do?
           
           
                Overview of the Economic Order Quantity................  2
                     What is EOQ, and how can it benefit my
                     company?
                        - The Concept..................................  2
                        - Real World Complications.....................  4
           
           
                Installation...........................................  5
                     How can I set up INVENTORY MASTER on my
                     computer?
                        - Using a Hard Disk............................  5
                        - Using Two Floppy Drives......................  6
           
           
                Tutorial...............................................  7
                     How do I run the program?
                        - Step 1:  Starting INVENTORY MASTER...........  7
                        - Step 2:  Identifying Your Company............  7
                        - Step 3:  Using The Menus..................... 10
                        - Step 4:  Describing The Vendors.............. 11
                        - Step 5:  Entering Stock Data................. 14
                        - Step 6:  Printing The Report................. 17
           
           
                Glossary / Index....................................... 20
                     Would you mind going over the terms for
                     me again?
           
           
                Technical Stuff........................................ 23
                     What files does INVENTORY MASTER use?
           
           
                Warranties............................................. 23
                     What is the limit of liability?
           
           
                Registration........................................... 24
                     How can I register my copy and receive a
                     printed manual, update notices, new product
                     information, and more?
           
           
                Order Form............................................. 25
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 1
           
           
           
                                I N T R O D U C T I O N
           
           
           	Welcome to Version 1.0 SW of INVENTORY MASTER!  
           
           	INVENTORY MASTER is a sophisticated program designed to
           reduce the cost of purchasing inventory.  The powerful EOQ
           (Economic Order Quantity) concept is the engine that drives
           INVENTORY MASTER:  it's the most advanced scientific method
           available for controlling warehouse expense.  But don't worry --
           throughout this program we've balanced the power of academic
           theory with a healthy dose of user friendliness.  You won't need
           an M.B.A. to start enjoying a stronger bottom line now.
           
           	The program's centerpiece is the "Inventory Order Report",
           containing restocking instructions on ALL of your company's in-
           stock inventory items.  For each item, the report tells you:
           
           		* HOW MANY to buy, and
           
           		* WHEN to buy it!
           
           What could be easier?  The format of the report makes it easy to
           maintain an existing Max/Min system or to start a new one.  
           
           	Different vendors with different discount schedules are no
           problem.  We'll even remember which vendors give what discounts. 
           You only enter it one time, and then forget about it.  The next
           time you power up the information will still be there.
           
           
           
                         S Y S T E M   R E Q U I R E M E N T S
           
           
           	INVENTORY MASTER requires the following hardware to run:  
           
           a computer --       IBM PC, XT, AT or compatible; 
           a monitor --        monochrome, CGA color, or EGA color;
           internal memory --  256 KB of RAM;
           disk drives --      at least one 5.25" or 3.5" drive;
           hard disk --        optional, but recommended;
           printer --          80 column printer.
           DOS --              2.1 or later version
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 2
           
           
           
                                    O V E R V I E W
                                      O F   T H E
                     E C O N O M I C   O R D E R   Q U A N T I T Y
           
           
           	The EOQ was not widely used originally because it was very
           calculation-intensive.  Before the age of computers, it wasn't
           practical to hand calculate all of the derivatives required for
           each part number.  Today, when virtually every business has a
           personal computer in its office, the age of the EOQ has arrived.
           
           
           The Concept
           -----------
           
           	The larger the order a firm places to stock an item, the
           greater the cost to the firm of holding the resulting larger
           inventory.  Expenses associated with holding stock include cost
           of capital, insurance, inventory taxes, warehouse rental, and
           others.  Inventory Holding Cost can be reduced by making smaller
           orders more frequently, because the average inventory amount will
           be smaller.  
           
           	However, there is a cost associated with the act of placing
           any order, and as the frequency of ordering increases that
           Ordering Cost (for the year) will increase.  These two basic
           costs vary inversely with each other.  Of vital importance to the
           competitive firm is the minimization of the TOTAL Cost:  Ordering
           and Holding Costs combined, as shown in Figure 1.  The EOQ is the
           mathematical quantity that balances the two components, yielding
           the lowest Total Cost.
           
           
                                     < FIGURE 1 >
           
                | TC                                          
                |  \                                           Total   
                |   \                                        __ Cost   
             D  |    -_                              ____----          
             O  | OC   -_                    ____----                    
             L  |  \     --__        ____----                  Holding 
             L  |   \        --*-----                     ___-- Cost  
             A  |    \         :                     ___--             
             R  |     \        :                ___--                  
             S  |      `.      :           ___--                       
                |        `.    :      ___--                            
                |          `._ : ___--                                 
                |           __-*-_                                      
                |      ___--   :  ----____                     Ordering   
                | HC---        :           -------_____________  Cost   
                +--------------:------------------------------------------
                              EOQ
           
                                  O R D E R   S I Z E
           INVENTORY MASTER USER'S GUIDE-------------------------------- 3
           
           
           
           	As an example, consider NDC, a distributor of valves.  They
           order from a manufacturer and store the stock in inventory,
           attempting to anticipate customer demand for the coming year. 
           For Valve X, listing at $5.00 each, they expect to sell a
           quantity of 1,000.  It costs NDC $3.00 every time they place an
           order for Valve X, and they estimate their inventory Holding Cost
           at 10% of the average dollar value in inventory.  (Average
           inventory is one half of the order quantity, multiplied by the
           $5.00 cost per item.)
           
           	Table 1 shows several ordering possibilities for Valve X. 
           The simplest method is to purchase an entire year's supply with
           one order.  The average inventory for the year would be $2,500,
           since there would be $5,000 worth at January 1st (1,000 pieces @
           $5.00) which in theory would decline steadily as sales were made
           to $0 by December 31st.
           
                                      < TABLE 1 >
           
                             Part Number:      Valve X
                             Projected Sales:  1,000 units
                             List Price:       $5.00
                             Ordering Cost:    $3.00
                             Holding Cost:     10.0 %
           
           
                Order     Average   Holding   Orders   Ordering    Total
               Quantity  Inventory   Cost    per Year    Cost       Cost
               --------  ---------  -------  --------   -------   -------
                  1,000     $2,500  $250.00         1     $3.00   $253.00
                    500      1,250   125.00         2      6.00    131.00
                    250        625    62.50         4     12.00     74.50
                    150        375    37.50         7     21.00     58.50 *
                     50        125    12.50        20     60.00     61.50
                     25         63     6.30        40    120.00    126.30
                      1          3      .30     1,000  3,000.00  3,000.30
           
           
           	From the average inventory, the holding 10% is applied to
           arrive at the Holding Cost of $250.00.  With only one order per
           year, the Ordering Cost is $3.00, giving a Total Cost of $253.00. 
           Obviously, this method is not the best.  If 500 Valve X's were
           ordered twice a year, then the Holding Cost savings of $125.00
           more than offsets the increase in Ordering cost of $3.00.  The
           Total Cost drops from $253.00 to $131.00.  As the order quantity
           continues to be lowered, the example is reached of ordering one
           Valve X at a time 1,000 times a year.  Table 1 shows that the
           Total Cost has risen to an unacceptable $3,000.30.
           INVENTORY MASTER USER'S GUIDE-------------------------------- 4
           
           
           
           	Somewhere between the extreme order quantities of 1,000 at a
           time and one at a time lies the Economic Order Quantity.  An
           order quantity of 150 on Table 1 corresponds to a $58.50 Total 
           Cost, the lowest of our guesses.  It is marked with an asterisk. 
           However, running the EOQ calculation on this problem gives an
           order quantity of 110, which is the lowest POSSIBLE solution: 
           the Total Cost becomes $54.50.  
           
           
           Real World Complications
           ------------------------
           
           	EOQ yields the biggest savings, and is much faster than
           setting up a trial-and-error table.  Unfortunately, in most real
           life situations purchasing is complicated by quantity discounts
           offered by the manufacturer.  In that case, EOQ's must be
           calculated using each new discounted price, and compared to the
           EOQ's found at the standard price.
           
           	But who's going to be performing all this math?  Using a
           personal computer to do the work cuts the time and eliminates the
           numerical errors inherent in the "paper and pencil" approach. 
           With INVENTORY MASTER, EOQ's are calculated for every part you
           enter, for every discount possible, and you end up with the
           discount which is the most advantageous.  All results are
           compiled in a handy Inventory Order Report.  
           
           	If you save only $10.00 per inventory item in your
           purchasing decisions, and you stock 500 different items, then
           you'll save $5,000.00 in the first year alone.  INVENTORY MASTER
           should recover its own registration fee within the first month --
           how's that for an aggressive payback period?
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 5
           
           
           
                                I N S T A L L A T I O N
           
           
           	After INVENTORY MASTER is installed you can experiment with
           the program.  It's meant to be self-explanatory, but to avoid
           confusion you may wish to read through the Tutorial.  It will
           guide you step by step as a fictitious company (much like yours)
           gets INVENTORY MASTER up and running.  
           
           	If you have a hard disk, read section one below and then go
           on to the Tutorial.  If you don't have a hard disk, skip down to
           section two now.
           
           
           1. Using A Hard Disk
           --------------------
           
           	Hard disk users will want to set up a subdirectory to hold
           INVENTORY MASTER and its data files.  The instructions use the
           suggested name of Imaster on drive C, but you can choose any
           subdirectory or disk drive.  At the DOS prompt, usually C>, type
           the following to create the subdirectory (end each line by
           pressing the <ENTER> key):
           
                     c:              <ENTER>
                     md \imaster     <ENTER>
           
           Not so difficult!  Now you must copy the program files from the
           floppy diskettes onto the hard disk.  Put the original diskette
           in drive A.  Type this command from the DOS prompt, followed by
           the <ENTER> key as before:
           
                     copy a:im*.*  c:\imaster     <ENTER>
           
           You'll see this response on the screen:
           
                     A:IM.EXE
                     A:IM.DOC
                       2 File(s) copied
           
           	To start the program, simply change the current directory to
           Imaster:
           
                     cd \imaster     <ENTER>
           
           and type the command that invokes INVENTORY MASTER:
           
                     im     <ENTER>.
           
           	Now skip over section two and read the Tutorial.  It should
           help you understand the nature of the program by watching as
           others get it up and running. 
           INVENTORY MASTER USER'S GUIDE-------------------------------- 6
           
           
           
           2. Using Two Floppy Drives
           --------------------------
           
           	The first task is to make a working copy of the INVENTORY
           MASTER diskette.  To do this, place your DOS system disk in drive
           A and a blank diskette in drive B.  At the A> prompt, type
           
                     format b: /s     <ENTER>
           
           You will be prompted to insert a new diskette in drive B.  Check
           to make sure it's ready and the door is closed, and press
           <ENTER>.  When the format is complete and the DOS system is
           transferred, you'll be asked if you want to format another. 
           Answer N for "No" and press <ENTER>.
           
           	Now replace the DOS diskette in drive A with the INVENTORY
           MASTER diskette.  The next command will copy the program files
           onto your newly formatted disk:
           
                     copy a:*.*  b:     <ENTER>
           
           With a felt tipped pen label the new disk in drive B "INVENTORY
           MASTER  Working Copy version 1.0 SW".  Take the original from
           drive A and store it in a safe place as a backup.  When you run
           INVENTORY MASTER, the Working Copy goes in drive A and a blank,
           formatted Data disk goes in B.  (NOTE:  When formatting the Data
           disk, leave off the "/s" from the format command above.)
           
           	You're now ready to run.  With disks in place, type the
           command to invoke INVENTORY MASTER from the A> prompt:
           
                     im     <ENTER>.
           
           	The chapter that follows is the Tutorial.  It should help
           you understand the nature of the program by watching as others
           get it up and running. 
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 7
           
           
           
                                    T U T O R I A L
           
           
           	You may find it helpful to have your PC on and INVENTORY
           MASTER running as you go through the Tutorial.  (If you have
           questions about how to install INVENTORY MASTER on your computer,
           refer to the preceding chapter called Installation.)  If you
           enter the data along with us you'll understand the ideas a lot
           faster.
           
           	We'll use a fictitious company in our examples.  It's called
           Northern Distribution Corporation, or NDC for short.  (Whenever
           you see that name, you can substitute the name of your company.) 
           NDC is a distributor, and warehouses several thousand different
           stock items from twenty manufacturers.  We call the manufacturers
           who sell to NDC "vendors".  
           
           	Jennifer Ryan is NDC's Purchasing Officer, and is testing
           their new INVENTORY MASTER.  She has an IBM-XT with a hard disk,
           and the program is already installed following the guidelines in
           the Installation chapter.
           
           
           Step 1:  Starting INVENTORY MASTER
           ----------------------------------
           
           	After booting up (turning on her computer), Jennifer changed
           directories to Imaster, where the program is located:
           
                     cd \imaster     <ENTER>
           
           and started the program:
           
                     im     <ENTER>.
           
           
           
           Step 2:  Identifying Your Company
           ---------------------------------
           
           	The title and copyright went by, then a screen titled "In-
           House Information" appeared.  This section records information
           about the user's company, NDC.  It automatically comes first if
           you've never run INVENTORY MASTER before.  At the Company Name
           prompt, Jennifer typed:
           
                     northern dist     <ENTER>
           
           and the name was displayed in the top of the screen, within the
           rectangle formed by double lines.  This area is called the
           "banner".  It has the program name and version number, the date,
           and now also the name of the company.  From now on when you start
           the program, INVENTORY MASTER will remember your company name
           plus everything else you enter in the In-House Information
           screen.  Capitalization doesn't matter, because everything ends
           up all caps anyway.
           INVENTORY MASTER USER'S GUIDE-------------------------------- 8
           
           
           
           	Next, the program asked for Inventory Holding Cost. 
           Jennifer's boss Paul had figured that NDC's cost of capital was
           the main component of the Holding Cost.  It was prime + 1.75%, or
           10.75% currently.  To that was added 5% to cover inventory
           insurance, taxes, etc.  That made a total of 15.75%, so Jennifer
           typed:
           
                     15.75     <ENTER>.
           
           (The "%" should not be typed; the computer adds it and lines the
           number up automatically.)
           
           	For Inventory Ordering Cost, Paul estimated the paperwork
           and employee time involved in placing a line item order.  From 
           that, he calculated that the Ordering Cost was roughly $10.00. 
           Fortunately, the Total Cost curve (see Figure 1) is fairly flat
           on either side of the EOQ.  That means that the estimates for
           Ordering and Holding Costs need not be exact.  If they are
           reasonable approximations, then INVENTORY MASTER will give a
           reasonable approximation of the EOQ.  Jennifer entered the
           estimate:
           
                     10     <ENTER>.
           
           (Don't type the dollar sign "$".  Also, there's no need to
           include the decimal point and the trailing zeros in a number like
           "$10.00".  If there were non-zero digits to the right of the
           decimal, then you'd have to type the decimal point and the
           digits.  The number will align itself properly.  Ain't science
           great?)
           
           	The cursor moved to "Disk drive for vendor file".  Since
           Jennifer wanted to keep all data on the hard disk, she tried to
           enter C, but her finger slipped and she typed V instead. 
           Immediately a Nasty-gram flashed "Invalid Response" in red at the
           lower left corner of the screen, and the V vanished.  Only A, B,
           C, or D are acceptable answers here.  She had another chance,
           thanks to the nice guys at Peery Data!  So she typed:
           
                     C
           
           without a colon and without pressing the <ENTER> key.  Whenever
           there's a one letter response called for, there is no need to
           press <ENTER>.  For instance, in Yes or No questions, a "Y" or an
           "N" will do the trick just fine.
           
           	Jennifer wanted to keep the list of vendors in a hard disk
           directory called Data, which was a subdirectory of Purchase.  The
           default answer for vendor data path was "(Current Path)", meaning
           the path that the program was in.  (When the program was started,
           the directory was Imaster, so that was the current path.)  She
           typed:
           
                     \purchase\data     <ENTER>.
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 9
           
           
           
           	The next two prompts referred to the location of the
           Inventory Order Report (sometimes called the Stock Report for
           short).  They were to stay on the hard disk too, so Jennifer
           typed:
           
                     C
           
           again.  For directory path, the current one (Imaster, remember?)
           would do, so the only thing needed to accept the default was:
           
                     <ENTER>.
           
           All the information was entered, and the question appeared at the
           bottom:
           
                     Is this information correct? <Y/N> Yes.
           
           Note that INVENTORY MASTER tried to anticipate the response by
           offering "Yes".  Whenever a default response is shown, then just
           hit the <ENTER> key to accept it, just like (Current Path) was
           accepted before.  
           
           The screen looked like this:
           
           
                IN-HOUSE INFORMATION
           
                Company Name.......................... NORTHERN DIST
                Inventory Holding Cost %..............   15.75 %
                Inventory Ordering Cost $.............  $10.00
           
                Where will the Vendor data be kept?
                    Disk drive for the vendor file..... C:
                    Path (Press <ESC> for current).....\PURCHASE\DATA
           
                Where will the Stock Report be kept?
                    Disk drive for EOQ data............ C:
                    Path (Press <ESC> for current).....(CURRENT PATH)
           
                        Is this information correct? <Y/N> Yes
           
            
           	Jennifer was about to press <ENTER> to answer "Yes" when
           Paul noticed that the paths for vendor data and the stock report
           were reversed from his plan.  So instead of <ENTER>, she pressed:
           
                     N
           
           for "No".  Immediately, the cursor jumped back up to the first
           entry, Company Name, so that the user could correct any mistakes. 
           For entries that have no errors, <ENTER> will keep them and move
           to the next entry.  So Jennifer pressed <ENTER> for Company Name,
           Holding Cost, Ordering Cost, and Vendor Drive.  When she got to
           Vendor Path, it said "\PURCHASE\DATA".  She wanted to change it
           to the same path as the main program, Imaster.  There were two
           choices.  Either to type:
           INVENTORY MASTER USER'S GUIDE-------------------------------- 10
           
           
           
                     \imaster     <ENTER>
           
           or use the automatic escape key feature.  She chose the easy way:
           
                     <ESC>
           
           and "\PURCHASE\DATA" was replaced with "(Current Path)".  
           
           	The cursor moved to Report Drive, and she pressed <ENTER> to
           keep it at C:.  Then she arrived at report Path, which said
           (Current Path).  She changed that to:
           
                     \purchase\data     <ENTER>.
           
           Arriving back at the "Is this information correct? <Y/N>",
           Jennifer noticed that INVENTORY MASTER had switched the answer
           from "No" back to "Yes".  A very optimistic program!  Since all
           was as it should be, she hit <ENTER>.
           
           
           Step 3:  Using the Menus
           ------------------------
           
           	Now that the preliminaries were taken care of, Jennifer saw
           the Main Menu appear.  
           
                                  M A I N   M E N U
           
                                1  Stock Data Entry
                                2  Vendor Menu
                                3  In-House Information
                                4  Print Menu
                                5  Quit
           
                               Enter your selection:
           
           
           INVENTORY MASTER will accept either the number or the first
           letter of the option, and no <ENTER> is necessary.  This being
           the first time the program was used, she wanted to enter some
           vendors that NDC used frequently.  The Vendor Menu was listed as
           number two, so she could either press "2" or "V", the first
           letter of the choice.  She pressed:
           
                     V
           
           (without the <ENTER> key) and the Vendor Menu appeared.  "That
           was fast!" she thought.  This is what she saw:
           
                                 V E N D O R   M E N U
           
                              1  List All Vendors
                              2  Edit or Add Vendor Data
                              3  Main Menu
           
                               Enter your selection:
           INVENTORY MASTER USER'S GUIDE-------------------------------- 11
           
           
           
           	"Hmm.  There aren't any vendors entered yet,"  thought
           Jennifer.  "I wonder what would happen..."  She decided to
           experiment and typed:
           
                     L
           
           for List All Vendors.  INVENTORY MASTER responded with a red
           "THERE ARE NO VENDORS ON FILE" Nasty-gram in the lower left
           corner.  After a second, the message disappeared.  
           
           
           Step 4:  Describing the Vendors
           -------------------------------
           
           	Next, Jennifer chose:
           
                     E
           
           to begin Edit or Add Vendor Data and start adding vendors to
           NDC's list.  The question "Which vendor do you want to work
           with?" appeared.  NDC's biggest manufacturer was Johnson Valves. 
           She shortened it to:
           
                     Johnson
           
           and saw this message:  "That vendor is not in the file.  Would
           you like to add it? <Y/N>".  The expected answer of "Yes" was
           supplied, so Jennifer only had to hit:
           
                     <ENTER>
           
           to add Johnson.  The next screen allowed Jennifer to tell about
           Johnson Valves.
           
           	Beneath the banner were the words "Vendor discount schedule
           for JOHNSON".  The cursor sprang to an entry called "Forecast
           Factor", which currently said "100%".  That 100% signified that
           the forecast for next year was the same as what was sold last
           year.  Jennifer looked at the Sales Manager's forecast for
           Johnson Valves products in the coming year:  a ten percent
           decline was expected overall.  That meant NDC could only expect
           to sell 90% of what it sold last year on the average.  She typed:
           
                     90     <ENTER>.
           
           	Johnson was pretty prompt about shipping.  Jennifer knew
           that equipment ordered from Johnson would arrive at NDC's
           warehouse in four weeks on the average.  So for "Default Lead
           Time" she typed:
           
                     4      <ENTER>.
           
           	Then a help box appeared below.  It explained about the
           terms used in describing Johnson's quantity purchase discounts. 
           Basically, "Lowest" means the smallest order quantity of an item
           that qualifies NDC for a discount.  "Highest" is the highest 
           INVENTORY MASTER USER'S GUIDE-------------------------------- 12
           
           
           
           number qualifying for the same discount.  "Lowest" and "Highest"
           are on the same line as the "Discount" NDC gets for ordering any
           quantity that falls between the two.
           
           	The cursor rested on the space for "Highest" for the first
           discount.  Jennifer looked at NDC's price sheet for Johnson
           orders.  They gave NDC a twenty-five percent discount off of list
           price for any order up to a quantity of ninety-nine pieces of the
           same item.  
           
           	The "1" was supplied by INVENTORY MASTER as the lower
           boundary for the first level discount.  Jennifer typed:
           
                     99     <ENTER>
           
           as the upper order quantity boundary at "Highest", and then
           entered the discount NDC would receive under "Discount":
           
                     25     <ENTER>.
           
           Consulting the price sheet again, Jennifer saw that an order
           quantity from 100 to 999 pieces entitled NDC to a thirty-five
           percent discount off list.  Once again the "Lowest" number
           appeared automatically, so she only had to enter the "Highest"
           and "Discount" figures:
           
                     999     <ENTER>
                     35      <ENTER>.
           
           At this point the help box disappeared to make room for the third
           level discount information.
            
           	The price sheet said "for orders of one thousand and up, the
           discount is 45% off list."  The 1,000 appeared as the low number,
           but "and up" is not an exact number to enter for the high figure. 
           Where some programs make the user input some "very large number"
           such as 9,999,999 whenever an open-ended situation occurs,
           INVENTORY MASTER uses a special symbol:  the plus sign (+). 
           EVERY discount schedule ends with + in the final level's
           "Highest" number.  That is also the signal to the computer that
           there are no further discounts after the current one is entered. 
           This was the last level of quantity discount, so Jennifer typed:
           
                     +      <ENTER>
                     45     <ENTER>.
           
           The plus sign immediately changed to the message "(& UP)", so
           Jennifer knew she had done it correctly.
           
           	The question "Is this information correct? <Y/N/D> Yes"
           appeared at the bottom of the screen.  "Yes" is the default
           answer, which can be selected by pressing Y or <ENTER>.  Another
           choice is D for "Delete", meaning throw this vendor out of NDC's
           INVENTORY MASTER USER'S GUIDE-------------------------------- 13
           
           
           
           vendor list.  She pressed <ENTER> to accept the discount schedule
           as entered.
           
           	The screen cleared for the next vendor to be entered.  The
           question "Which vendor do you want to work with?" re-appeared. 
           Jennifer was ready to enter the schedule for Wunderbar Deutsch
           Valves, so she typed:
           
                     wunderbar     <ENTER>.
           
           Once again the vendor discount schedule entry screen appeared. 
           Jennifer entered all of Wunderbar's data confidently, starting
           with the Forecast Factor:
           
                     105       <ENTER>  
           (to show a projected 5% sales increase)
           
                     12        <ENTER>
           (for a twelve week period between ordering from Wunderbar and
           receiving the goods)
           
                     99        <ENTER>
                     14        <ENTER>
           (for the first discount level)
           
                     499       <ENTER>
                     17        <ENTER>
                     2499      <ENTER>
                     20        <ENTER>
           (for the second and third levels)
           
                     +         <ENTER>
                     23        <ENTER>
           (for the last level of the discount schedule).
           
           The screen looked like this:
           
           
                Vendor discount schedule for WUNDERBAR
                Forecast Factor:  105 %       Default Lead Time:   12 Weeks
           
                               Lowest        Highest        Discount
                               ------        -------        --------
                Level  1            1   to        99        14.000 %
                Level  2          100   to       499        17.000 %
                Level  3          500   to     2,499        20.000 %
                Level  4        2,500   to    (& UP)        23.000 %
           
                          Is this information correct? <Y/N/D> Yes
           
           
           It was all correct, so Jennifer typed:
           
                     <ENTER>
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 14
           
           
           
           and the screen cleared.  She was ready to move on to stock data,
           and knew she could come back and enter more vendors at any time. 
           At the "Which vendor do you want to work with?" question, she hit
           the escape key twice:
           
                     <ESC>
                     <ESC>
           
           to take herself back to the Main Menu.
           
           
           Step 5:  Entering Stock Data
           ----------------------------
           
           	From the Main Menu, Jennifer selected:
           
                     S
           
           to go to Stock Data Entry.   Immediately the familiar question
           displayed:  "Which vendor do you want to work with?" so the
           correct vendor schedule would be used.  She typed "Johnson". 
           INVENTORY MASTER showed her the schedule she had entered for
           Johnson Valves and asked if it was correct. 
           
           	"Look at this, Paul," she said.  "Not only does this program
           confirm my vendor choice, but it lets me make changes to the
           schedule as I go!"
           
           She typed <ENTER> to accept the schedule without changes, and the
           Stock Data screen appeared.  It asked for all of the information
           about a particular stocked item necessary to calculate its
           purchasing instructions.  Part Number is whatever NDC uses to
           identify its stock.  She typed:
           
                     1/2" ball valve   <ENTER>.
           
           The next prompt asked for the Prior 12 Months' Sales.  (INVENTORY
           MASTER takes that number and multiplies it by the Forecast Factor
           for Johnson Valves to project the sales for the coming year.) 
           Jennifer looked up the figure and typed it in:
           
                     260     <ENTER>.
           
           The cursor jumped down and also put in the calculated Projected
           Sales figure of 234 units.  Since that was as good an estimate as
           she had, Jennifer accepted the 234 with:
           
                     <ENTER>
           
           and then entered the List Price of:
           
                     7.95     <ENTER>.
           
           Johnson didn't care whether valves were ordered in multiples of a 
           INVENTORY MASTER USER'S GUIDE-------------------------------- 15
           
           
           
           box quantity or not.  Jennifer therefore didn't need to enter a
           Box Quantity for the ball valves.  The default answer is N/A for
           Not Applicable, so she accepted it with:
           
                     <ENTER>.
           
           For Lead Time, INVENTORY MASTER used the default of four weeks
           set during the vendor information phase.  Jennifer could accept
           it by hitting <ENTER> alone, but Paul had heard word that there
           would be an extra two week delay on the popular 1/2" ball valves. 
           
           	She overrode the default by typing:
           
                     6     <ENTER>
           
           to make the Lead Time be six weeks.  The question "Is this
           information correct? <Y/N>" appeared with the hopeful answer
           "Yes" ready to be accepted.  Jennifer typed:
           
                     <ENTER>.
           
           Immediately the screen changed to the Purchasing Instructions for
           JOHNSON 1/2" BALL VALVE.  The Purchasing Instructions showed 31
           for Order Point, or "Min" as the Max/Min systems call it, an
           Economic Order Quantity of 71, and a Max of 102.
           
           	"Well, slide my rule!" exclaimed Paul, who had been watching
           over Jennifer's shoulder with interest.  "That was even faster
           than guessing!"
           
           	"And a lot more accurate," said Jennifer.  "The Order Point
           shows when to order:  whenever our available supply of 1/2" ball
           valves falls to 31 units or less, it's time to buy.  Let's see,
           the EOQ is 71, so we'll order 71 valves at a time and let the
           savings show up on our bottom line.  The actual price we'll pay
           is shown as a Purchase Price of $5.96 per unit."
           
           	"What's this Safety Stock mean?"
           
           	"That's our `margin of error'," said Jennifer.  "If we know
           that the demand for 1/2" ball valves is erratic rather than
           constant, we can reduce our chance of stock-outs by increasing
           the Safety Stock.  It doesn't change our calculated EOQ, but ups
           our Order Point so we always have a little more on hand to cover
           unpredictable sales demands."  [See the Glossary/Index for a more
           complete discussion of Safety Stock.]
           
           	"Our sales of this valve are pretty regular, so let's keep
           the suggested Safety Stock as is," said Paul.  Jennifer nodded
           and hit:
           
                     <ENTER>
           
           to accept the numbers on the screen.  INVENTORY MASTER
           INVENTORY MASTER USER'S GUIDE-------------------------------- 16
           
           
           
           automatically added the information on Johnson 1/2" Ball Valves
           to the Inventory Order Report to be printed later.  The screen
           cleared, ready to receive new Stock Data for another Johnson
           item.
           
           	For Part Number, Prior Sales, and Projected Sales Jennifer
           typed:
           
                     2" butterfly valve   <ENTER>
                     411                  <ENTER>
           
           and
           
                     <ENTER>
           (to accept the estimated sales of 370 units).  
           
           For List Price and Box Quantity she typed:
           
                     25         <ENTER>
                     2          <ENTER>
           
           and:
           
                     <ENTER>
           
           to leave the default Lead Time at four weeks.  In answer to the
           "Is this correct?" question, she merely hit:
           
                     <ENTER>
           
           for Yes.  The Purchasing Instructions for JOHNSON 2" BUTTERFLY
           VALVE were Order Point 32, EOQ 50, Max 82, and Safety Stock 4,
           with Projected Sales of 370 units.  The program asked her if she
           wanted to modify the Safety Stock, and gave her the default
           answer of "No".  She hit:
           
                     Y
           
           for "Yes", modify the Safety Stock.  The 2" butterfly valves sold
           somewhat irregularly, so more than the standard Safety Stock was
           called for.  After a discussion, they decided to up the Safety
           Stock from 4 to 10 and monitor the results.  Jennifer typed:
           
                     10     <ENTER>
           
           and the Order Point was immediately changed to reflect the more
           cautious position.  At the question "Do you want to modify the
           Safety Stock?" the second time, Jennifer hit:
           
                     <ENTER>
           
           for the default "No".  INVENTORY MASTER automatically added the
           information on the screen to the Inventory Order Report.  There
           was no need to write down any of the numbers, because the Report
           would have all of the information in one handy printout.
           INVENTORY MASTER USER'S GUIDE-------------------------------- 17
           
           
           
           	After accepting the numbers the program went back to the
           Stock Data screen.  Jennifer decided that she wanted to see the
           printout, even though it only had two part numbers on it.  "Just
           to see if it works," she said to Paul.  The cursor was located at
           the first prompt, which said "Part Number (or <ESC> for new
           Vendor)".  She hit the escape key:
           
                     <ESC>
           
           and got the question "Which vendor do you want to work with? 
           (Press <ESC> to return to menu)".  Since she wanted to get back
           to the Main Menu, she hit:
           
                     <ESC>
           
           and there was the Main Menu.  
           
           
           Step 6:  Printing the Report
           ----------------------------
           
           At the Main Menu, Jennifer had already gone through Stock Data
           Entry, Vendor Menu, and In-House Information.  She pressed:
           
                     P
           
           for Print Menu.  It looked like this:
           
           
                                  P R I N T   M E N U
           
                               1  Print Current Report
                               2  Erase Current Report
                               3  Main Menu
           
                                 Enter your selection:
           
           
           Jennifer wanted to print the information she had just calculated
           under the Stock Data option.  She pressed:
           
                     P
           
           for the Print Current Report option.  But the printer did
           nothing.  Instead, there was a beep from the computer.  Paul and
           Jennifer both saw a Nasty-gram at the bottom of the screen that
           said "PRINTER NOT READY - Press any key when ready or <ESC> to
           abort".
           
           	Paul looked at the silent printer.  "The printer isn't
           turned on.  I bet it'll print a lot faster with electricity."
           INVENTORY MASTER USER'S GUIDE-------------------------------- 18
           
           
           
           	"Very funny," said Jennifer.  "And I guess if the printer
           were broken, we'd just hit the escape key to cancel the print
           command altogether.  Okay, is it on?  Let's try again."  Paul
           flipped the printer's power switch to "ON", and Jennifer hit:
           
                     <ENTER>.
           
           This time the printer began printing.  It was a short report
           since Jennifer had only entered two parts, and it looked like
           this:
           
           
           01-16-1989                NORTHERN DIST                     Page   1
           
                    I N V E N T O R Y   O R D E R   R E P O R T 
           ---------------------------------------------------------------------
           Vendor discount schedule for JOHNSON                           
           Forecast Factor:   90 %      Default Lead Time:    4 Weeks
           
                                 Lowest          Highest         Discount
               Level  1             1   to          99         25.000 % 
               Level  2           100   to         999         35.000 % 
               Level  3         1,000   to      (& UP)         45.000 % 
           ---------------------------------------------------------------------
                                                PRIOR   PROJ. SAFETY LEAD  LIST
           PART NUMBER        EOQ  MIN   MAX   SALES   SALES  STOCK TIME  PRICE
           -----------        ---- ---   ---- ------- ------- ----- --- --------
           1/2" BALL VALVE      71  31    102     260     234     4   6     7.95
           2" BUTTERFLY VALVE   50  32     82     411     370     4   4    25.00
           
           
           	While the report was printing, the message "PRINTING REPORT"
           flashed on the bottom of the screen, followed by "CLEARING FILE". 
           Once the report is on paper, the disk file is cleared for new
           input.  Just to see what would happen, Jennifer tried to print
           the report a second time, and a Nasty-gram appeared:  "THE REPORT
           FILE IS EMPTY".
           
           	"I guess this program knows when we've already got a hard
           copy," said Paul.  Jennifer nodded.  She was finished with
           printing, so she hit:
           
                     <ESC>.
           
           The Print Menu was replaced by the Main Menu.
           
           	"This is where I came in," said Paul.  "What do you think of
           INVENTORY MASTER now that you've run through its features?"
           
           	"It's great, Paul!" said Jennifer.  "It does everything I
           want, and in a straightforward way that'll make using it a
           breeze.  My time can be freed up for other matters, and we'll
           INVENTORY MASTER USER'S GUIDE-------------------------------- 19
           
           
           
           really save money.  In fact, I think I'll do all of our inventory
           now.  It was so difficult to evaluate our Max/Min's the old way
           that we're way overdue.  I wish we'd had INVENTORY MASTER years
           ago!"
           
           
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 20
           
           
           
                           G L O S S A R Y   /   I N D E X 
           
           
           	Listed here are the key terms used in this User's Guide. 
           They have been arranged in alphabetical order, with a page
           reference to the main text where the expressions are used. 
           Following that is a brief discussion of the term.  Every defined
           term in the Glossary is capitalized, so you can refer to another
           related term if it appears in an explanation.
           
           
           Cost of Capital                                   Pg. 2, 8
           	Assuming you finance your inventory, it is the interest you
                pay.  If you pay your own cash for stock, then it is the
                opportunity cost of tying that cash up in inventory.  Do not
                confuse Cost of Capital with the capital itself, which is
                the money spent on the physical inventory alone.
           
           Discount Schedule                                 Pg. 11
           	Normally a Vendor will offer you discounts if you purchase
                in larger and larger quantities.  A table of the amount of
                the discount off of List Price and the quantities you must
                order to qualify for each successive discount is known as a
                Discount Schedule.  You must decide if it is worth it to
                your company to order a larger amount at a lower price. 
                INVENTORY MASTER does that analysis for you automatically,
                and reflects the result in its purchase instructions.
           
           Economic Order Quantity (or "EOQ")                Pg. 2
           	For a given part, the EOQ is the mathematical quantity to
                order that results in the lowest Total Cost to the company
                over time.
           
           Forecast Factor                                   Pg. 11
           	This percent is the basis for creating the Projected Sales
                figure from the prior year's sales.  The Forecast Factor is
                set for the Vendor as a whole, rather than for each part. 
                If the expectation is that the next twelve months will see
                the same sales as the preceding twelve months, then the
                Forecast Factor should be set to 100 % (the default).  If a
                given Vendor's products are expected to undergo a five
                percent sales increase overall, then set the Forecast Factor
                to 105 %.  For an eleven percent decline, set the figure to 
                89 %.  The Forecast Factor is entered during the Vendor
                editing.  Note that the Projected Sales for any part
                generated from the Forecast Factor can be overridden during
                Stock Data Entry.
           
           Holding Cost                                      Pg. 2, 8
           	Holding Cost is the cost associated with holding inventory,
                usually expressed as a percent of the average value of the
                inventory over one year.  Holding Cost is composed of Cost
                of Capital, inventory tax, inventory insurance, and others. 
                (Warehouse rental can be included only if you consider it an
                expense that can vary closely with the total size of your
                company's inventory.  Otherwise, rent is a fixed cost.)
           INVENTORY MASTER USER'S GUIDE-------------------------------- 21
           
           
           
           	Note:  Care should be taken to estimate Holding Cost (as
                well as Ordering Cost), but a precisely accurate figure is
                not necessary to receive benefits from INVENTORY MASTER.  If
                your estimate is reasonable, then the EOQ generated will be
                effective.  The graph on page 2 shows that the Total Cost
                curve is virtually flat in the vicinity of the EOQ.  For
                that reason, a "close miss" will not appreciably raise the
                Total Cost.
           
           Lead Time                                         Pg. 11, 15
           	When a company places an order with one of its Vendors,
                there is an inevitable delay before the stock arrives in the
                company's warehouse and is available for re-sale.  That
                delay is called the Lead Time.  One of the purchasing
                agent's jobs is to see that an order is placed early enough
                that it is on hand when needed.  For each Vendor -- and
                sometimes for each part -- there is an average Lead Time
                which the purchaser has come to expect, generally expressed
                in weeks.  That figure is used within INVENTORY MASTER's
                Order Point calculation.
           
           List Price (or "List")                            Pg. 14
           	Come on, you know what this is!  It's the figure listed in
                the catalogues as the price charged to end users. 
                Distributors always buy for less than List, and with large
                orders will frequently pay substantially less (see Discount
                Schedule).
           
           Max/Min                                           Pg. 15
           	Many inventory control systems are based on Max/Min's.  They
                express in a different way virtually the same thing that
                INVENTORY MASTER does.  The Min is their Order Point.  The
                Max is the amount to order UP TO, that is, you order the
                DIFFERENCE between whatever you have on hand and the Max. 
                For us, the Max is simply the Order Point plus the EOQ.
           
           Order Point                                       Pg. 15, 16
           	The Order Point is a quantity of an item on hand; when the
                inventory of that part has been reduced to a number equal to
                or less than the Order Point, then the time has come to
                place a new order.  The quantity of the order is given by
                the EOQ.  The Order Point is determined by the rate of
                demand for the item (the expected or average unit sales per
                week), the weeks of Lead Time, and the amount of "cushion"
                provided by the Safety Stock.
           
           Ordering Cost                                     Pg. 2, 8
           	Ordering Cost is the sum of all expenses incurred each time
                a company places an order for an item.  Time to process the
                paperwork (times the appropriate salary), warehouse
                receiving time when the order arrives, and some portion of
                expediting effort are expended with each order placed.  For
                a manufacturer, Ordering Cost would be made up mostly of the
                set-up cost to produce one lot.  (See note under Holding
                Cost.)
           INVENTORY MASTER USER'S GUIDE-------------------------------- 22
           
           
           
           Projected Sales                                   Pg. 14, 16
           	This figure is the estimate of the sales of a given part
                over the coming year.  It is based on the prior sales which
                the company has made in the past year, multiplied by the
                Forecast Factor.  It can be overridden by the user if he has
                other criteria for making his projection.
           
           Safety Stock                                      Pg. 15, 16
           	If the exact timing of both customer sales and Vendor
                deliveries were known, then there would be no need for a
                Safety Stock.  You would never suffer a stock-out, and pigs
                would fly.  But here on Earth customer orders are only
                roughly predictable, so you never know exactly when you'll
                need more stock from the Vendor.  Even if you did, delivery
                times can vary widely for some Vendors.  So the amount kept
                on hand is augmented by an extra quantity called the Safety
                Stock.  
           
           	In the case of a "bread-and-butter" item that always sells
                about X units a month, supplied by a Vendor who always gets
                it there in about Y weeks, the Safety Stock can be kept low. 
                For other parts with either an erratic delivery schedule or
                big swings in demand:  if it's important to avoid stock-
                outs, keep a substantial Safety Stock.  
           
           	The exact amount to assign is difficult to say.  One
                approach is to monitor the so-called "service factor" of a
                stock item, which is the percent of orders received that
                were filled from stock, ie, not back ordered.  A typical
                target might be 93 - 96 % service.  If you are under 93 %,
                then increase your Safety Stock.  If you're over 96 %, then
                DECREASE your Safety Stock:  you're carrying too much
                inventory.  Over time, this monitoring process will yield
                numbers that will give you the service level you desire.
           
           Total Cost                                        Pg. 2
           	The sum of a year's worth of purchasing cost for a given
                stock item.  The components of Total Cost are Holding Cost
                and Ordering Cost.  Note that the actual capital tied up in
                inventory is NOT included.  Only the costs associated with
                the year's purchasing is included, not the price of the
                purchase itself.
           
           Vendor                                            Pg. 11
           	A Vendor is a manufacturer who sells stock to you.  This is
                the stock you hold in inventory for eventual resale to your
                customers (see Discount Schedule).
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 23
           
           
           
                             T E C H N I C A L   S T U F F
           
           
           	All of our filenames begin with "IM".  IM.EXE is the program
           file itself, and IM.DOC is a copy of this User's Guide.  When
           INVENTORY MASTER first runs, it will create three data files: 
           IMHOUSE.DAT, IMVENDOR.DAT, and IMREPORT.DAT.  You need not
           concern yourself with these files; INVENTORY MASTER will maintain
           them for you.  The first file has information about your company,
           the second holds a list of the vendors you buy from, and the last
           contains the Inventory Order Report.  IMREPORT.DAT grows longer
           as you add more stock data, but after printing the report the
           file is cleared; the length is then zero.
           
           	The location of two of these data files is chosen by you in
           the In-House Information screen.  The third, IMHOUSE.DAT, is
           always located in the same directory as the program file IM.EXE
           without giving you a choice.  That way, your company constants
           are always where INVENTORY MASTER can find them.
           
           	Other temporary files are created and deleted while the
           program is running.  They will all be located in the same
           directory as IM.EXE and IMHOUSE.DAT, and will all have an
           extension of "TMP".  An example is IMCD.TMP, and if all goes well
           you'll never see them.  If there is a power outage while you're
           using INVENTORY MASTER, some of these transient files may not be
           properly deleted.  No problem.  If for some reason they're not in
           the current directory next time you use the program, INVENTORY
           MASTER will coolly ignore them.  If they are (the more likely
           case), they will be deleted during the session without muss or
           fuss or inconvenience to those in surrounding offices.
           
           
           
                                  W A R R A N T I E S
           
           
           	Well, there aren't any.  Peery Data is not responsible for
           hardware or software problems and does not agree to compensate
           any user, registered or otherwise, for any damages whether or not
           they were caused by this product or any other used in conjunction
           with this product.  For registered users, our limit of liability
           is to replace defective diskettes if they came from Peery Data or
           to refund the total amount of the registration fee.
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 24
           
           
           
                                R E G I S T R A T I O N
           
           
           	When you register your shareware copy of INVENTORY MASTER,
           you will receive a printed and bound User's Guide, a copy of the
           latest shareware version on 5.25" diskette (the one you found may
           or may not be the latest), and our undying gratitude.  As an
           added incentive, this registered copy will not contain the
           shareware "reminder" message at the end of the program.  
           
           	In addition, your name will be placed on our list of
           registered users, entitling you to receive new product
           announcements and upgrade information.  Please use the form on
           the next page when registering.  As long as people like you
           support our efforts, we'll continue to develop high quality
           software at far lower than commercial prices.  
           
           	Our Technical Support is limited, but those who are
           registered are entitled to it.  If you have a problem, write to
           us at this address:
           
                   Peery Data, P.O. Box 12235, Charlotte, NC 28220.
           
           On the envelope put "Ref: INVENTORY MASTER".  Please include:  
           (1) your version number (this User's Guide is for shareware
           Version 1.0 SW), 
           (2) the type of computer system you're using, 
           (3) a DETAILED description of the problem, and 
           (4) your name and address so we can respond.
           
           	There's no guarantee we can solve your problem, but we'll
           sure give it a try!
           
           
           
           .---------------------------------------------------------------.
           |                                                               |
           |                  INVENTORY MASTER ORDER FORM                  |
           |                        Version 1.0 SW                         |
           |                                                               |
           |      This is a professional "shareware" product, supported    |
           | solely by your generosity.  Help keep down the cost of future |
           | software development by registering promptly!  Thank you.     |
           |                                                               |
           |      Mail with check made out to:    PEERY DATA               |
           |                                      P.O. Box 12235           |
           |                                      Charlotte, NC 28220      |
           | (Prices subject to change                                     |
           | without notice. Jan, 1989)     Number of             Extended |
           |                                  Copies     Price      Price  |
           |                                                               |
           | Registration alone............. ________ X  $84.95 = ________ |
           | Registration, Printed Manual,                                 |
           |    and latest version                                         |
           |    on 5.25" Diskette........... ________ X  $99.95 = ________ |
           |                                                               |
           | Subtotal............................................ ________ |
           |                                                               |
           | NC residents add 5% sales tax....................... ________ |
           |                                                               |
           | Shipping and Handling...........________ X   $3.00 = ________ |
           |                                                               |
           | Grand and Final Total...............................          |
           |                                                      ======== |
           |                                                               |
           |         Please print:                                         |
           |                                                               |
           | Name    ____________________________________ (Mr/Mrs/Miss/Ms) |
           |                                                               |
           | Title   ____________________________________                  |
           |                                                               |
           | Company ____________________________________                  |
           |                                                               |
           | Address ____________________________________                  |
           |                                                               |
           | City    ____________________________________                  |
           |                                                               |
           | State   _______________     Zip ____________                  |
           |                                                               |
           | Phone   (______) ___________________________                  |
           |                                                               |
           |                                                               |
           |    Say!  Where did you get your shareware copy of INVENTORY   |
           |                                                               |
           | MASTER anyway?_____________________________________________   |
           |                                                               |
           | What computer do you use?__________________________________   |
           |                                                               |
           | Thanks!                                                       |
           `---------------------------------------------------------------'
```
{% endraw %}

## IM.DOC

{% raw %}
```
           
           
           
           
           
           
           
           
           
           
           
           
           
                                                      INVENTORY MASTER
                                                      User's Guide
                                                      Version 1.0 SW
           
           
                                                  (C) Copyright 1988, 1989
                                                      by Blair D. Peery
                                                      All Rights Reserved
           
                                                      PEERY DATA
                                                      P.O. Box 12235
                                                      Charlotte, NC 28220
           
           
           
           
           
           
           
           
           
           
           INVENTORY MASTER is not a public domain program, nor is it free. 
           It is (C) Copyright 1988, 1989 by Blair Peery and Peery Data.  
           
           Non-registered users are granted a limited license to use
           INVENTORY MASTER for a trial period to see if the program is of
           interest.  Continued use beyond a reasonable trial period
           requires Registration.  Information on registering appears on
           page 24, followed by an order form.
           
           You may make distribution copies of INVENTORY MASTER for others
           to use for a trial period, provided that all documentation is
           included.  Tell those receiving a copy that it is a shareware
           product, not free or public domain.
           
           
           
           
           
                                    C O N T E N T S
           
           
           
           
                Introduction and System Requirements...................  1
                     What can INVENTORY MASTER do?
           
           
                Overview of the Economic Order Quantity................  2
                     What is EOQ, and how can it benefit my
                     company?
                        - The Concept..................................  2
                        - Real World Complications.....................  4
           
           
                Installation...........................................  5
                     How can I set up INVENTORY MASTER on my
                     computer?
                        - Using a Hard Disk............................  5
                        - Using Two Floppy Drives......................  6
           
           
                Tutorial...............................................  7
                     How do I run the program?
                        - Step 1:  Starting INVENTORY MASTER...........  7
                        - Step 2:  Identifying Your Company............  7
                        - Step 3:  Using The Menus..................... 10
                        - Step 4:  Describing The Vendors.............. 11
                        - Step 5:  Entering Stock Data................. 14
                        - Step 6:  Printing The Report................. 17
           
           
                Glossary / Index....................................... 20
                     Would you mind going over the terms for
                     me again?
           
           
                Technical Stuff........................................ 23
                     What files does INVENTORY MASTER use?
           
           
                Warranties............................................. 23
                     What is the limit of liability?
           
           
                Registration........................................... 24
                     How can I register my copy and receive a
                     printed manual, update notices, new product
                     information, and more?
           
           
                Order Form............................................. 25
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 1
           
           
           
                                I N T R O D U C T I O N
           
           
           	Welcome to Version 1.0 SW of INVENTORY MASTER!  
           
           	INVENTORY MASTER is a sophisticated program designed to
           reduce the cost of purchasing inventory.  The powerful EOQ
           (Economic Order Quantity) concept is the engine that drives
           INVENTORY MASTER:  it's the most advanced scientific method
           available for controlling warehouse expense.  But don't worry --
           throughout this program we've balanced the power of academic
           theory with a healthy dose of user friendliness.  You won't need
           an M.B.A. to start enjoying a stronger bottom line now.
           
           	The program's centerpiece is the "Inventory Order Report",
           containing restocking instructions on ALL of your company's in-
           stock inventory items.  For each item, the report tells you:
           
           		* HOW MANY to buy, and
           
           		* WHEN to buy it!
           
           What could be easier?  The format of the report makes it easy to
           maintain an existing Max/Min system or to start a new one.  
           
           	Different vendors with different discount schedules are no
           problem.  We'll even remember which vendors give what discounts. 
           You only enter it one time, and then forget about it.  The next
           time you power up the information will still be there.
           
           
           
                         S Y S T E M   R E Q U I R E M E N T S
           
           
           	INVENTORY MASTER requires the following hardware to run:  
           
           a computer --       IBM PC, XT, AT or compatible; 
           a monitor --        monochrome, CGA color, or EGA color;
           internal memory --  256 KB of RAM;
           disk drives --      at least one 5.25" or 3.5" drive;
           hard disk --        optional, but recommended;
           printer --          80 column printer.
           DOS --              2.1 or later version
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 2
           
           
           
                                    O V E R V I E W
                                      O F   T H E
                     E C O N O M I C   O R D E R   Q U A N T I T Y
           
           
           	The EOQ was not widely used originally because it was very
           calculation-intensive.  Before the age of computers, it wasn't
           practical to hand calculate all of the derivatives required for
           each part number.  Today, when virtually every business has a
           personal computer in its office, the age of the EOQ has arrived.
           
           
           The Concept
           -----------
           
           	The larger the order a firm places to stock an item, the
           greater the cost to the firm of holding the resulting larger
           inventory.  Expenses associated with holding stock include cost
           of capital, insurance, inventory taxes, warehouse rental, and
           others.  Inventory Holding Cost can be reduced by making smaller
           orders more frequently, because the average inventory amount will
           be smaller.  
           
           	However, there is a cost associated with the act of placing
           any order, and as the frequency of ordering increases that
           Ordering Cost (for the year) will increase.  These two basic
           costs vary inversely with each other.  Of vital importance to the
           competitive firm is the minimization of the TOTAL Cost:  Ordering
           and Holding Costs combined, as shown in Figure 1.  The EOQ is the
           mathematical quantity that balances the two components, yielding
           the lowest Total Cost.
           
           
                                     < FIGURE 1 >
           
                | TC                                          
                |  \                                           Total   
                |   \                                        __ Cost   
             D  |    -_                              ____----          
             O  | OC   -_                    ____----                    
             L  |  \     --__        ____----                  Holding 
             L  |   \        --*-----                     ___-- Cost  
             A  |    \         :                     ___--             
             R  |     \        :                ___--                  
             S  |      `.      :           ___--                       
                |        `.    :      ___--                            
                |          `._ : ___--                                 
                |           __-*-_                                      
                |      ___--   :  ----____                     Ordering   
                | HC---        :           -------_____________  Cost   
                +--------------:------------------------------------------
                              EOQ
           
                                  O R D E R   S I Z E
           INVENTORY MASTER USER'S GUIDE-------------------------------- 3
           
           
           
           	As an example, consider NDC, a distributor of valves.  They
           order from a manufacturer and store the stock in inventory,
           attempting to anticipate customer demand for the coming year. 
           For Valve X, listing at $5.00 each, they expect to sell a
           quantity of 1,000.  It costs NDC $3.00 every time they place an
           order for Valve X, and they estimate their inventory Holding Cost
           at 10% of the average dollar value in inventory.  (Average
           inventory is one half of the order quantity, multiplied by the
           $5.00 cost per item.)
           
           	Table 1 shows several ordering possibilities for Valve X. 
           The simplest method is to purchase an entire year's supply with
           one order.  The average inventory for the year would be $2,500,
           since there would be $5,000 worth at January 1st (1,000 pieces @
           $5.00) which in theory would decline steadily as sales were made
           to $0 by December 31st.
           
                                      < TABLE 1 >
           
                             Part Number:      Valve X
                             Projected Sales:  1,000 units
                             List Price:       $5.00
                             Ordering Cost:    $3.00
                             Holding Cost:     10.0 %
           
           
                Order     Average   Holding   Orders   Ordering    Total
               Quantity  Inventory   Cost    per Year    Cost       Cost
               --------  ---------  -------  --------   -------   -------
                  1,000     $2,500  $250.00         1     $3.00   $253.00
                    500      1,250   125.00         2      6.00    131.00
                    250        625    62.50         4     12.00     74.50
                    150        375    37.50         7     21.00     58.50 *
                     50        125    12.50        20     60.00     61.50
                     25         63     6.30        40    120.00    126.30
                      1          3      .30     1,000  3,000.00  3,000.30
           
           
           	From the average inventory, the holding 10% is applied to
           arrive at the Holding Cost of $250.00.  With only one order per
           year, the Ordering Cost is $3.00, giving a Total Cost of $253.00. 
           Obviously, this method is not the best.  If 500 Valve X's were
           ordered twice a year, then the Holding Cost savings of $125.00
           more than offsets the increase in Ordering cost of $3.00.  The
           Total Cost drops from $253.00 to $131.00.  As the order quantity
           continues to be lowered, the example is reached of ordering one
           Valve X at a time 1,000 times a year.  Table 1 shows that the
           Total Cost has risen to an unacceptable $3,000.30.
           INVENTORY MASTER USER'S GUIDE-------------------------------- 4
           
           
           
           	Somewhere between the extreme order quantities of 1,000 at a
           time and one at a time lies the Economic Order Quantity.  An
           order quantity of 150 on Table 1 corresponds to a $58.50 Total 
           Cost, the lowest of our guesses.  It is marked with an asterisk. 
           However, running the EOQ calculation on this problem gives an
           order quantity of 110, which is the lowest POSSIBLE solution: 
           the Total Cost becomes $54.50.  
           
           
           Real World Complications
           ------------------------
           
           	EOQ yields the biggest savings, and is much faster than
           setting up a trial-and-error table.  Unfortunately, in most real
           life situations purchasing is complicated by quantity discounts
           offered by the manufacturer.  In that case, EOQ's must be
           calculated using each new discounted price, and compared to the
           EOQ's found at the standard price.
           
           	But who's going to be performing all this math?  Using a
           personal computer to do the work cuts the time and eliminates the
           numerical errors inherent in the "paper and pencil" approach. 
           With INVENTORY MASTER, EOQ's are calculated for every part you
           enter, for every discount possible, and you end up with the
           discount which is the most advantageous.  All results are
           compiled in a handy Inventory Order Report.  
           
           	If you save only $10.00 per inventory item in your
           purchasing decisions, and you stock 500 different items, then
           you'll save $5,000.00 in the first year alone.  INVENTORY MASTER
           should recover its own registration fee within the first month --
           how's that for an aggressive payback period?
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 5
           
           
           
                                I N S T A L L A T I O N
           
           
           	After INVENTORY MASTER is installed you can experiment with
           the program.  It's meant to be self-explanatory, but to avoid
           confusion you may wish to read through the Tutorial.  It will
           guide you step by step as a fictitious company (much like yours)
           gets INVENTORY MASTER up and running.  
           
           	If you have a hard disk, read section one below and then go
           on to the Tutorial.  If you don't have a hard disk, skip down to
           section two now.
           
           
           1. Using A Hard Disk
           --------------------
           
           	Hard disk users will want to set up a subdirectory to hold
           INVENTORY MASTER and its data files.  The instructions use the
           suggested name of Imaster on drive C, but you can choose any
           subdirectory or disk drive.  At the DOS prompt, usually C>, type
           the following to create the subdirectory (end each line by
           pressing the <ENTER> key):
           
                     c:              <ENTER>
                     md \imaster     <ENTER>
           
           Not so difficult!  Now you must copy the program files from the
           floppy diskettes onto the hard disk.  Put the original diskette
           in drive A.  Type this command from the DOS prompt, followed by
           the <ENTER> key as before:
           
                     copy a:im*.*  c:\imaster     <ENTER>
           
           You'll see this response on the screen:
           
                     A:IM.EXE
                     A:IM.DOC
                       2 File(s) copied
           
           	To start the program, simply change the current directory to
           Imaster:
           
                     cd \imaster     <ENTER>
           
           and type the command that invokes INVENTORY MASTER:
           
                     im     <ENTER>.
           
           	Now skip over section two and read the Tutorial.  It should
           help you understand the nature of the program by watching as
           others get it up and running. 
           INVENTORY MASTER USER'S GUIDE-------------------------------- 6
           
           
           
           2. Using Two Floppy Drives
           --------------------------
           
           	The first task is to make a working copy of the INVENTORY
           MASTER diskette.  To do this, place your DOS system disk in drive
           A and a blank diskette in drive B.  At the A> prompt, type
           
                     format b: /s     <ENTER>
           
           You will be prompted to insert a new diskette in drive B.  Check
           to make sure it's ready and the door is closed, and press
           <ENTER>.  When the format is complete and the DOS system is
           transferred, you'll be asked if you want to format another. 
           Answer N for "No" and press <ENTER>.
           
           	Now replace the DOS diskette in drive A with the INVENTORY
           MASTER diskette.  The next command will copy the program files
           onto your newly formatted disk:
           
                     copy a:*.*  b:     <ENTER>
           
           With a felt tipped pen label the new disk in drive B "INVENTORY
           MASTER  Working Copy version 1.0 SW".  Take the original from
           drive A and store it in a safe place as a backup.  When you run
           INVENTORY MASTER, the Working Copy goes in drive A and a blank,
           formatted Data disk goes in B.  (NOTE:  When formatting the Data
           disk, leave off the "/s" from the format command above.)
           
           	You're now ready to run.  With disks in place, type the
           command to invoke INVENTORY MASTER from the A> prompt:
           
                     im     <ENTER>.
           
           	The chapter that follows is the Tutorial.  It should help
           you understand the nature of the program by watching as others
           get it up and running. 
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 7
           
           
           
                                    T U T O R I A L
           
           
           	You may find it helpful to have your PC on and INVENTORY
           MASTER running as you go through the Tutorial.  (If you have
           questions about how to install INVENTORY MASTER on your computer,
           refer to the preceding chapter called Installation.)  If you
           enter the data along with us you'll understand the ideas a lot
           faster.
           
           	We'll use a fictitious company in our examples.  It's called
           Northern Distribution Corporation, or NDC for short.  (Whenever
           you see that name, you can substitute the name of your company.) 
           NDC is a distributor, and warehouses several thousand different
           stock items from twenty manufacturers.  We call the manufacturers
           who sell to NDC "vendors".  
           
           	Jennifer Ryan is NDC's Purchasing Officer, and is testing
           their new INVENTORY MASTER.  She has an IBM-XT with a hard disk,
           and the program is already installed following the guidelines in
           the Installation chapter.
           
           
           Step 1:  Starting INVENTORY MASTER
           ----------------------------------
           
           	After booting up (turning on her computer), Jennifer changed
           directories to Imaster, where the program is located:
           
                     cd \imaster     <ENTER>
           
           and started the program:
           
                     im     <ENTER>.
           
           
           
           Step 2:  Identifying Your Company
           ---------------------------------
           
           	The title and copyright went by, then a screen titled "In-
           House Information" appeared.  This section records information
           about the user's company, NDC.  It automatically comes first if
           you've never run INVENTORY MASTER before.  At the Company Name
           prompt, Jennifer typed:
           
                     northern dist     <ENTER>
           
           and the name was displayed in the top of the screen, within the
           rectangle formed by double lines.  This area is called the
           "banner".  It has the program name and version number, the date,
           and now also the name of the company.  From now on when you start
           the program, INVENTORY MASTER will remember your company name
           plus everything else you enter in the In-House Information
           screen.  Capitalization doesn't matter, because everything ends
           up all caps anyway.
           INVENTORY MASTER USER'S GUIDE-------------------------------- 8
           
           
           
           	Next, the program asked for Inventory Holding Cost. 
           Jennifer's boss Paul had figured that NDC's cost of capital was
           the main component of the Holding Cost.  It was prime + 1.75%, or
           10.75% currently.  To that was added 5% to cover inventory
           insurance, taxes, etc.  That made a total of 15.75%, so Jennifer
           typed:
           
                     15.75     <ENTER>.
           
           (The "%" should not be typed; the computer adds it and lines the
           number up automatically.)
           
           	For Inventory Ordering Cost, Paul estimated the paperwork
           and employee time involved in placing a line item order.  From 
           that, he calculated that the Ordering Cost was roughly $10.00. 
           Fortunately, the Total Cost curve (see Figure 1) is fairly flat
           on either side of the EOQ.  That means that the estimates for
           Ordering and Holding Costs need not be exact.  If they are
           reasonable approximations, then INVENTORY MASTER will give a
           reasonable approximation of the EOQ.  Jennifer entered the
           estimate:
           
                     10     <ENTER>.
           
           (Don't type the dollar sign "$".  Also, there's no need to
           include the decimal point and the trailing zeros in a number like
           "$10.00".  If there were non-zero digits to the right of the
           decimal, then you'd have to type the decimal point and the
           digits.  The number will align itself properly.  Ain't science
           great?)
           
           	The cursor moved to "Disk drive for vendor file".  Since
           Jennifer wanted to keep all data on the hard disk, she tried to
           enter C, but her finger slipped and she typed V instead. 
           Immediately a Nasty-gram flashed "Invalid Response" in red at the
           lower left corner of the screen, and the V vanished.  Only A, B,
           C, or D are acceptable answers here.  She had another chance,
           thanks to the nice guys at Peery Data!  So she typed:
           
                     C
           
           without a colon and without pressing the <ENTER> key.  Whenever
           there's a one letter response called for, there is no need to
           press <ENTER>.  For instance, in Yes or No questions, a "Y" or an
           "N" will do the trick just fine.
           
           	Jennifer wanted to keep the list of vendors in a hard disk
           directory called Data, which was a subdirectory of Purchase.  The
           default answer for vendor data path was "(Current Path)", meaning
           the path that the program was in.  (When the program was started,
           the directory was Imaster, so that was the current path.)  She
           typed:
           
                     \purchase\data     <ENTER>.
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 9
           
           
           
           	The next two prompts referred to the location of the
           Inventory Order Report (sometimes called the Stock Report for
           short).  They were to stay on the hard disk too, so Jennifer
           typed:
           
                     C
           
           again.  For directory path, the current one (Imaster, remember?)
           would do, so the only thing needed to accept the default was:
           
                     <ENTER>.
           
           All the information was entered, and the question appeared at the
           bottom:
           
                     Is this information correct? <Y/N> Yes.
           
           Note that INVENTORY MASTER tried to anticipate the response by
           offering "Yes".  Whenever a default response is shown, then just
           hit the <ENTER> key to accept it, just like (Current Path) was
           accepted before.  
           
           The screen looked like this:
           
           
                IN-HOUSE INFORMATION
           
                Company Name.......................... NORTHERN DIST
                Inventory Holding Cost %..............   15.75 %
                Inventory Ordering Cost $.............  $10.00
           
                Where will the Vendor data be kept?
                    Disk drive for the vendor file..... C:
                    Path (Press <ESC> for current).....\PURCHASE\DATA
           
                Where will the Stock Report be kept?
                    Disk drive for EOQ data............ C:
                    Path (Press <ESC> for current).....(CURRENT PATH)
           
                        Is this information correct? <Y/N> Yes
           
            
           	Jennifer was about to press <ENTER> to answer "Yes" when
           Paul noticed that the paths for vendor data and the stock report
           were reversed from his plan.  So instead of <ENTER>, she pressed:
           
                     N
           
           for "No".  Immediately, the cursor jumped back up to the first
           entry, Company Name, so that the user could correct any mistakes. 
           For entries that have no errors, <ENTER> will keep them and move
           to the next entry.  So Jennifer pressed <ENTER> for Company Name,
           Holding Cost, Ordering Cost, and Vendor Drive.  When she got to
           Vendor Path, it said "\PURCHASE\DATA".  She wanted to change it
           to the same path as the main program, Imaster.  There were two
           choices.  Either to type:
           INVENTORY MASTER USER'S GUIDE-------------------------------- 10
           
           
           
                     \imaster     <ENTER>
           
           or use the automatic escape key feature.  She chose the easy way:
           
                     <ESC>
           
           and "\PURCHASE\DATA" was replaced with "(Current Path)".  
           
           	The cursor moved to Report Drive, and she pressed <ENTER> to
           keep it at C:.  Then she arrived at report Path, which said
           (Current Path).  She changed that to:
           
                     \purchase\data     <ENTER>.
           
           Arriving back at the "Is this information correct? <Y/N>",
           Jennifer noticed that INVENTORY MASTER had switched the answer
           from "No" back to "Yes".  A very optimistic program!  Since all
           was as it should be, she hit <ENTER>.
           
           
           Step 3:  Using the Menus
           ------------------------
           
           	Now that the preliminaries were taken care of, Jennifer saw
           the Main Menu appear.  
           
                                  M A I N   M E N U
           
                                1  Stock Data Entry
                                2  Vendor Menu
                                3  In-House Information
                                4  Print Menu
                                5  Quit
           
                               Enter your selection:
           
           
           INVENTORY MASTER will accept either the number or the first
           letter of the option, and no <ENTER> is necessary.  This being
           the first time the program was used, she wanted to enter some
           vendors that NDC used frequently.  The Vendor Menu was listed as
           number two, so she could either press "2" or "V", the first
           letter of the choice.  She pressed:
           
                     V
           
           (without the <ENTER> key) and the Vendor Menu appeared.  "That
           was fast!" she thought.  This is what she saw:
           
                                 V E N D O R   M E N U
           
                              1  List All Vendors
                              2  Edit or Add Vendor Data
                              3  Main Menu
           
                               Enter your selection:
           INVENTORY MASTER USER'S GUIDE-------------------------------- 11
           
           
           
           	"Hmm.  There aren't any vendors entered yet,"  thought
           Jennifer.  "I wonder what would happen..."  She decided to
           experiment and typed:
           
                     L
           
           for List All Vendors.  INVENTORY MASTER responded with a red
           "THERE ARE NO VENDORS ON FILE" Nasty-gram in the lower left
           corner.  After a second, the message disappeared.  
           
           
           Step 4:  Describing the Vendors
           -------------------------------
           
           	Next, Jennifer chose:
           
                     E
           
           to begin Edit or Add Vendor Data and start adding vendors to
           NDC's list.  The question "Which vendor do you want to work
           with?" appeared.  NDC's biggest manufacturer was Johnson Valves. 
           She shortened it to:
           
                     Johnson
           
           and saw this message:  "That vendor is not in the file.  Would
           you like to add it? <Y/N>".  The expected answer of "Yes" was
           supplied, so Jennifer only had to hit:
           
                     <ENTER>
           
           to add Johnson.  The next screen allowed Jennifer to tell about
           Johnson Valves.
           
           	Beneath the banner were the words "Vendor discount schedule
           for JOHNSON".  The cursor sprang to an entry called "Forecast
           Factor", which currently said "100%".  That 100% signified that
           the forecast for next year was the same as what was sold last
           year.  Jennifer looked at the Sales Manager's forecast for
           Johnson Valves products in the coming year:  a ten percent
           decline was expected overall.  That meant NDC could only expect
           to sell 90% of what it sold last year on the average.  She typed:
           
                     90     <ENTER>.
           
           	Johnson was pretty prompt about shipping.  Jennifer knew
           that equipment ordered from Johnson would arrive at NDC's
           warehouse in four weeks on the average.  So for "Default Lead
           Time" she typed:
           
                     4      <ENTER>.
           
           	Then a help box appeared below.  It explained about the
           terms used in describing Johnson's quantity purchase discounts. 
           Basically, "Lowest" means the smallest order quantity of an item
           that qualifies NDC for a discount.  "Highest" is the highest 
           INVENTORY MASTER USER'S GUIDE-------------------------------- 12
           
           
           
           number qualifying for the same discount.  "Lowest" and "Highest"
           are on the same line as the "Discount" NDC gets for ordering any
           quantity that falls between the two.
           
           	The cursor rested on the space for "Highest" for the first
           discount.  Jennifer looked at NDC's price sheet for Johnson
           orders.  They gave NDC a twenty-five percent discount off of list
           price for any order up to a quantity of ninety-nine pieces of the
           same item.  
           
           	The "1" was supplied by INVENTORY MASTER as the lower
           boundary for the first level discount.  Jennifer typed:
           
                     99     <ENTER>
           
           as the upper order quantity boundary at "Highest", and then
           entered the discount NDC would receive under "Discount":
           
                     25     <ENTER>.
           
           Consulting the price sheet again, Jennifer saw that an order
           quantity from 100 to 999 pieces entitled NDC to a thirty-five
           percent discount off list.  Once again the "Lowest" number
           appeared automatically, so she only had to enter the "Highest"
           and "Discount" figures:
           
                     999     <ENTER>
                     35      <ENTER>.
           
           At this point the help box disappeared to make room for the third
           level discount information.
            
           	The price sheet said "for orders of one thousand and up, the
           discount is 45% off list."  The 1,000 appeared as the low number,
           but "and up" is not an exact number to enter for the high figure. 
           Where some programs make the user input some "very large number"
           such as 9,999,999 whenever an open-ended situation occurs,
           INVENTORY MASTER uses a special symbol:  the plus sign (+). 
           EVERY discount schedule ends with + in the final level's
           "Highest" number.  That is also the signal to the computer that
           there are no further discounts after the current one is entered. 
           This was the last level of quantity discount, so Jennifer typed:
           
                     +      <ENTER>
                     45     <ENTER>.
           
           The plus sign immediately changed to the message "(& UP)", so
           Jennifer knew she had done it correctly.
           
           	The question "Is this information correct? <Y/N/D> Yes"
           appeared at the bottom of the screen.  "Yes" is the default
           answer, which can be selected by pressing Y or <ENTER>.  Another
           choice is D for "Delete", meaning throw this vendor out of NDC's
           INVENTORY MASTER USER'S GUIDE-------------------------------- 13
           
           
           
           vendor list.  She pressed <ENTER> to accept the discount schedule
           as entered.
           
           	The screen cleared for the next vendor to be entered.  The
           question "Which vendor do you want to work with?" re-appeared. 
           Jennifer was ready to enter the schedule for Wunderbar Deutsch
           Valves, so she typed:
           
                     wunderbar     <ENTER>.
           
           Once again the vendor discount schedule entry screen appeared. 
           Jennifer entered all of Wunderbar's data confidently, starting
           with the Forecast Factor:
           
                     105       <ENTER>  
           (to show a projected 5% sales increase)
           
                     12        <ENTER>
           (for a twelve week period between ordering from Wunderbar and
           receiving the goods)
           
                     99        <ENTER>
                     14        <ENTER>
           (for the first discount level)
           
                     499       <ENTER>
                     17        <ENTER>
                     2499      <ENTER>
                     20        <ENTER>
           (for the second and third levels)
           
                     +         <ENTER>
                     23        <ENTER>
           (for the last level of the discount schedule).
           
           The screen looked like this:
           
           
                Vendor discount schedule for WUNDERBAR
                Forecast Factor:  105 %       Default Lead Time:   12 Weeks
           
                               Lowest        Highest        Discount
                               ------        -------        --------
                Level  1            1   to        99        14.000 %
                Level  2          100   to       499        17.000 %
                Level  3          500   to     2,499        20.000 %
                Level  4        2,500   to    (& UP)        23.000 %
           
                          Is this information correct? <Y/N/D> Yes
           
           
           It was all correct, so Jennifer typed:
           
                     <ENTER>
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 14
           
           
           
           and the screen cleared.  She was ready to move on to stock data,
           and knew she could come back and enter more vendors at any time. 
           At the "Which vendor do you want to work with?" question, she hit
           the escape key twice:
           
                     <ESC>
                     <ESC>
           
           to take herself back to the Main Menu.
           
           
           Step 5:  Entering Stock Data
           ----------------------------
           
           	From the Main Menu, Jennifer selected:
           
                     S
           
           to go to Stock Data Entry.   Immediately the familiar question
           displayed:  "Which vendor do you want to work with?" so the
           correct vendor schedule would be used.  She typed "Johnson". 
           INVENTORY MASTER showed her the schedule she had entered for
           Johnson Valves and asked if it was correct. 
           
           	"Look at this, Paul," she said.  "Not only does this program
           confirm my vendor choice, but it lets me make changes to the
           schedule as I go!"
           
           She typed <ENTER> to accept the schedule without changes, and the
           Stock Data screen appeared.  It asked for all of the information
           about a particular stocked item necessary to calculate its
           purchasing instructions.  Part Number is whatever NDC uses to
           identify its stock.  She typed:
           
                     1/2" ball valve   <ENTER>.
           
           The next prompt asked for the Prior 12 Months' Sales.  (INVENTORY
           MASTER takes that number and multiplies it by the Forecast Factor
           for Johnson Valves to project the sales for the coming year.) 
           Jennifer looked up the figure and typed it in:
           
                     260     <ENTER>.
           
           The cursor jumped down and also put in the calculated Projected
           Sales figure of 234 units.  Since that was as good an estimate as
           she had, Jennifer accepted the 234 with:
           
                     <ENTER>
           
           and then entered the List Price of:
           
                     7.95     <ENTER>.
           
           Johnson didn't care whether valves were ordered in multiples of a 
           INVENTORY MASTER USER'S GUIDE-------------------------------- 15
           
           
           
           box quantity or not.  Jennifer therefore didn't need to enter a
           Box Quantity for the ball valves.  The default answer is N/A for
           Not Applicable, so she accepted it with:
           
                     <ENTER>.
           
           For Lead Time, INVENTORY MASTER used the default of four weeks
           set during the vendor information phase.  Jennifer could accept
           it by hitting <ENTER> alone, but Paul had heard word that there
           would be an extra two week delay on the popular 1/2" ball valves. 
           
           	She overrode the default by typing:
           
                     6     <ENTER>
           
           to make the Lead Time be six weeks.  The question "Is this
           information correct? <Y/N>" appeared with the hopeful answer
           "Yes" ready to be accepted.  Jennifer typed:
           
                     <ENTER>.
           
           Immediately the screen changed to the Purchasing Instructions for
           JOHNSON 1/2" BALL VALVE.  The Purchasing Instructions showed 31
           for Order Point, or "Min" as the Max/Min systems call it, an
           Economic Order Quantity of 71, and a Max of 102.
           
           	"Well, slide my rule!" exclaimed Paul, who had been watching
           over Jennifer's shoulder with interest.  "That was even faster
           than guessing!"
           
           	"And a lot more accurate," said Jennifer.  "The Order Point
           shows when to order:  whenever our available supply of 1/2" ball
           valves falls to 31 units or less, it's time to buy.  Let's see,
           the EOQ is 71, so we'll order 71 valves at a time and let the
           savings show up on our bottom line.  The actual price we'll pay
           is shown as a Purchase Price of $5.96 per unit."
           
           	"What's this Safety Stock mean?"
           
           	"That's our `margin of error'," said Jennifer.  "If we know
           that the demand for 1/2" ball valves is erratic rather than
           constant, we can reduce our chance of stock-outs by increasing
           the Safety Stock.  It doesn't change our calculated EOQ, but ups
           our Order Point so we always have a little more on hand to cover
           unpredictable sales demands."  [See the Glossary/Index for a more
           complete discussion of Safety Stock.]
           
           	"Our sales of this valve are pretty regular, so let's keep
           the suggested Safety Stock as is," said Paul.  Jennifer nodded
           and hit:
           
                     <ENTER>
           
           to accept the numbers on the screen.  INVENTORY MASTER
           INVENTORY MASTER USER'S GUIDE-------------------------------- 16
           
           
           
           automatically added the information on Johnson 1/2" Ball Valves
           to the Inventory Order Report to be printed later.  The screen
           cleared, ready to receive new Stock Data for another Johnson
           item.
           
           	For Part Number, Prior Sales, and Projected Sales Jennifer
           typed:
           
                     2" butterfly valve   <ENTER>
                     411                  <ENTER>
           
           and
           
                     <ENTER>
           (to accept the estimated sales of 370 units).  
           
           For List Price and Box Quantity she typed:
           
                     25         <ENTER>
                     2          <ENTER>
           
           and:
           
                     <ENTER>
           
           to leave the default Lead Time at four weeks.  In answer to the
           "Is this correct?" question, she merely hit:
           
                     <ENTER>
           
           for Yes.  The Purchasing Instructions for JOHNSON 2" BUTTERFLY
           VALVE were Order Point 32, EOQ 50, Max 82, and Safety Stock 4,
           with Projected Sales of 370 units.  The program asked her if she
           wanted to modify the Safety Stock, and gave her the default
           answer of "No".  She hit:
           
                     Y
           
           for "Yes", modify the Safety Stock.  The 2" butterfly valves sold
           somewhat irregularly, so more than the standard Safety Stock was
           called for.  After a discussion, they decided to up the Safety
           Stock from 4 to 10 and monitor the results.  Jennifer typed:
           
                     10     <ENTER>
           
           and the Order Point was immediately changed to reflect the more
           cautious position.  At the question "Do you want to modify the
           Safety Stock?" the second time, Jennifer hit:
           
                     <ENTER>
           
           for the default "No".  INVENTORY MASTER automatically added the
           information on the screen to the Inventory Order Report.  There
           was no need to write down any of the numbers, because the Report
           would have all of the information in one handy printout.
           INVENTORY MASTER USER'S GUIDE-------------------------------- 17
           
           
           
           	After accepting the numbers the program went back to the
           Stock Data screen.  Jennifer decided that she wanted to see the
           printout, even though it only had two part numbers on it.  "Just
           to see if it works," she said to Paul.  The cursor was located at
           the first prompt, which said "Part Number (or <ESC> for new
           Vendor)".  She hit the escape key:
           
                     <ESC>
           
           and got the question "Which vendor do you want to work with? 
           (Press <ESC> to return to menu)".  Since she wanted to get back
           to the Main Menu, she hit:
           
                     <ESC>
           
           and there was the Main Menu.  
           
           
           Step 6:  Printing the Report
           ----------------------------
           
           At the Main Menu, Jennifer had already gone through Stock Data
           Entry, Vendor Menu, and In-House Information.  She pressed:
           
                     P
           
           for Print Menu.  It looked like this:
           
           
                                  P R I N T   M E N U
           
                               1  Print Current Report
                               2  Erase Current Report
                               3  Main Menu
           
                                 Enter your selection:
           
           
           Jennifer wanted to print the information she had just calculated
           under the Stock Data option.  She pressed:
           
                     P
           
           for the Print Current Report option.  But the printer did
           nothing.  Instead, there was a beep from the computer.  Paul and
           Jennifer both saw a Nasty-gram at the bottom of the screen that
           said "PRINTER NOT READY - Press any key when ready or <ESC> to
           abort".
           
           	Paul looked at the silent printer.  "The printer isn't
           turned on.  I bet it'll print a lot faster with electricity."
           INVENTORY MASTER USER'S GUIDE-------------------------------- 18
           
           
           
           	"Very funny," said Jennifer.  "And I guess if the printer
           were broken, we'd just hit the escape key to cancel the print
           command altogether.  Okay, is it on?  Let's try again."  Paul
           flipped the printer's power switch to "ON", and Jennifer hit:
           
                     <ENTER>.
           
           This time the printer began printing.  It was a short report
           since Jennifer had only entered two parts, and it looked like
           this:
           
           
           01-16-1989                NORTHERN DIST                     Page   1
           
                    I N V E N T O R Y   O R D E R   R E P O R T 
           ---------------------------------------------------------------------
           Vendor discount schedule for JOHNSON                           
           Forecast Factor:   90 %      Default Lead Time:    4 Weeks
           
                                 Lowest          Highest         Discount
               Level  1             1   to          99         25.000 % 
               Level  2           100   to         999         35.000 % 
               Level  3         1,000   to      (& UP)         45.000 % 
           ---------------------------------------------------------------------
                                                PRIOR   PROJ. SAFETY LEAD  LIST
           PART NUMBER        EOQ  MIN   MAX   SALES   SALES  STOCK TIME  PRICE
           -----------        ---- ---   ---- ------- ------- ----- --- --------
           1/2" BALL VALVE      71  31    102     260     234     4   6     7.95
           2" BUTTERFLY VALVE   50  32     82     411     370     4   4    25.00
           
           
           	While the report was printing, the message "PRINTING REPORT"
           flashed on the bottom of the screen, followed by "CLEARING FILE". 
           Once the report is on paper, the disk file is cleared for new
           input.  Just to see what would happen, Jennifer tried to print
           the report a second time, and a Nasty-gram appeared:  "THE REPORT
           FILE IS EMPTY".
           
           	"I guess this program knows when we've already got a hard
           copy," said Paul.  Jennifer nodded.  She was finished with
           printing, so she hit:
           
                     <ESC>.
           
           The Print Menu was replaced by the Main Menu.
           
           	"This is where I came in," said Paul.  "What do you think of
           INVENTORY MASTER now that you've run through its features?"
           
           	"It's great, Paul!" said Jennifer.  "It does everything I
           want, and in a straightforward way that'll make using it a
           breeze.  My time can be freed up for other matters, and we'll
           INVENTORY MASTER USER'S GUIDE-------------------------------- 19
           
           
           
           really save money.  In fact, I think I'll do all of our inventory
           now.  It was so difficult to evaluate our Max/Min's the old way
           that we're way overdue.  I wish we'd had INVENTORY MASTER years
           ago!"
           
           
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 20
           
           
           
                           G L O S S A R Y   /   I N D E X 
           
           
           	Listed here are the key terms used in this User's Guide. 
           They have been arranged in alphabetical order, with a page
           reference to the main text where the expressions are used. 
           Following that is a brief discussion of the term.  Every defined
           term in the Glossary is capitalized, so you can refer to another
           related term if it appears in an explanation.
           
           
           Cost of Capital                                   Pg. 2, 8
           	Assuming you finance your inventory, it is the interest you
                pay.  If you pay your own cash for stock, then it is the
                opportunity cost of tying that cash up in inventory.  Do not
                confuse Cost of Capital with the capital itself, which is
                the money spent on the physical inventory alone.
           
           Discount Schedule                                 Pg. 11
           	Normally a Vendor will offer you discounts if you purchase
                in larger and larger quantities.  A table of the amount of
                the discount off of List Price and the quantities you must
                order to qualify for each successive discount is known as a
                Discount Schedule.  You must decide if it is worth it to
                your company to order a larger amount at a lower price. 
                INVENTORY MASTER does that analysis for you automatically,
                and reflects the result in its purchase instructions.
           
           Economic Order Quantity (or "EOQ")                Pg. 2
           	For a given part, the EOQ is the mathematical quantity to
                order that results in the lowest Total Cost to the company
                over time.
           
           Forecast Factor                                   Pg. 11
           	This percent is the basis for creating the Projected Sales
                figure from the prior year's sales.  The Forecast Factor is
                set for the Vendor as a whole, rather than for each part. 
                If the expectation is that the next twelve months will see
                the same sales as the preceding twelve months, then the
                Forecast Factor should be set to 100 % (the default).  If a
                given Vendor's products are expected to undergo a five
                percent sales increase overall, then set the Forecast Factor
                to 105 %.  For an eleven percent decline, set the figure to 
                89 %.  The Forecast Factor is entered during the Vendor
                editing.  Note that the Projected Sales for any part
                generated from the Forecast Factor can be overridden during
                Stock Data Entry.
           
           Holding Cost                                      Pg. 2, 8
           	Holding Cost is the cost associated with holding inventory,
                usually expressed as a percent of the average value of the
                inventory over one year.  Holding Cost is composed of Cost
                of Capital, inventory tax, inventory insurance, and others. 
                (Warehouse rental can be included only if you consider it an
                expense that can vary closely with the total size of your
                company's inventory.  Otherwise, rent is a fixed cost.)
           INVENTORY MASTER USER'S GUIDE-------------------------------- 21
           
           
           
           	Note:  Care should be taken to estimate Holding Cost (as
                well as Ordering Cost), but a precisely accurate figure is
                not necessary to receive benefits from INVENTORY MASTER.  If
                your estimate is reasonable, then the EOQ generated will be
                effective.  The graph on page 2 shows that the Total Cost
                curve is virtually flat in the vicinity of the EOQ.  For
                that reason, a "close miss" will not appreciably raise the
                Total Cost.
           
           Lead Time                                         Pg. 11, 15
           	When a company places an order with one of its Vendors,
                there is an inevitable delay before the stock arrives in the
                company's warehouse and is available for re-sale.  That
                delay is called the Lead Time.  One of the purchasing
                agent's jobs is to see that an order is placed early enough
                that it is on hand when needed.  For each Vendor -- and
                sometimes for each part -- there is an average Lead Time
                which the purchaser has come to expect, generally expressed
                in weeks.  That figure is used within INVENTORY MASTER's
                Order Point calculation.
           
           List Price (or "List")                            Pg. 14
           	Come on, you know what this is!  It's the figure listed in
                the catalogues as the price charged to end users. 
                Distributors always buy for less than List, and with large
                orders will frequently pay substantially less (see Discount
                Schedule).
           
           Max/Min                                           Pg. 15
           	Many inventory control systems are based on Max/Min's.  They
                express in a different way virtually the same thing that
                INVENTORY MASTER does.  The Min is their Order Point.  The
                Max is the amount to order UP TO, that is, you order the
                DIFFERENCE between whatever you have on hand and the Max. 
                For us, the Max is simply the Order Point plus the EOQ.
           
           Order Point                                       Pg. 15, 16
           	The Order Point is a quantity of an item on hand; when the
                inventory of that part has been reduced to a number equal to
                or less than the Order Point, then the time has come to
                place a new order.  The quantity of the order is given by
                the EOQ.  The Order Point is determined by the rate of
                demand for the item (the expected or average unit sales per
                week), the weeks of Lead Time, and the amount of "cushion"
                provided by the Safety Stock.
           
           Ordering Cost                                     Pg. 2, 8
           	Ordering Cost is the sum of all expenses incurred each time
                a company places an order for an item.  Time to process the
                paperwork (times the appropriate salary), warehouse
                receiving time when the order arrives, and some portion of
                expediting effort are expended with each order placed.  For
                a manufacturer, Ordering Cost would be made up mostly of the
                set-up cost to produce one lot.  (See note under Holding
                Cost.)
           INVENTORY MASTER USER'S GUIDE-------------------------------- 22
           
           
           
           Projected Sales                                   Pg. 14, 16
           	This figure is the estimate of the sales of a given part
                over the coming year.  It is based on the prior sales which
                the company has made in the past year, multiplied by the
                Forecast Factor.  It can be overridden by the user if he has
                other criteria for making his projection.
           
           Safety Stock                                      Pg. 15, 16
           	If the exact timing of both customer sales and Vendor
                deliveries were known, then there would be no need for a
                Safety Stock.  You would never suffer a stock-out, and pigs
                would fly.  But here on Earth customer orders are only
                roughly predictable, so you never know exactly when you'll
                need more stock from the Vendor.  Even if you did, delivery
                times can vary widely for some Vendors.  So the amount kept
                on hand is augmented by an extra quantity called the Safety
                Stock.  
           
           	In the case of a "bread-and-butter" item that always sells
                about X units a month, supplied by a Vendor who always gets
                it there in about Y weeks, the Safety Stock can be kept low. 
                For other parts with either an erratic delivery schedule or
                big swings in demand:  if it's important to avoid stock-
                outs, keep a substantial Safety Stock.  
           
           	The exact amount to assign is difficult to say.  One
                approach is to monitor the so-called "service factor" of a
                stock item, which is the percent of orders received that
                were filled from stock, ie, not back ordered.  A typical
                target might be 93 - 96 % service.  If you are under 93 %,
                then increase your Safety Stock.  If you're over 96 %, then
                DECREASE your Safety Stock:  you're carrying too much
                inventory.  Over time, this monitoring process will yield
                numbers that will give you the service level you desire.
           
           Total Cost                                        Pg. 2
           	The sum of a year's worth of purchasing cost for a given
                stock item.  The components of Total Cost are Holding Cost
                and Ordering Cost.  Note that the actual capital tied up in
                inventory is NOT included.  Only the costs associated with
                the year's purchasing is included, not the price of the
                purchase itself.
           
           Vendor                                            Pg. 11
           	A Vendor is a manufacturer who sells stock to you.  This is
                the stock you hold in inventory for eventual resale to your
                customers (see Discount Schedule).
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 23
           
           
           
                             T E C H N I C A L   S T U F F
           
           
           	All of our filenames begin with "IM".  IM.EXE is the program
           file itself, and IM.DOC is a copy of this User's Guide.  When
           INVENTORY MASTER first runs, it will create three data files: 
           IMHOUSE.DAT, IMVENDOR.DAT, and IMREPORT.DAT.  You need not
           concern yourself with these files; INVENTORY MASTER will maintain
           them for you.  The first file has information about your company,
           the second holds a list of the vendors you buy from, and the last
           contains the Inventory Order Report.  IMREPORT.DAT grows longer
           as you add more stock data, but after printing the report the
           file is cleared; the length is then zero.
           
           	The location of two of these data files is chosen by you in
           the In-House Information screen.  The third, IMHOUSE.DAT, is
           always located in the same directory as the program file IM.EXE
           without giving you a choice.  That way, your company constants
           are always where INVENTORY MASTER can find them.
           
           	Other temporary files are created and deleted while the
           program is running.  They will all be located in the same
           directory as IM.EXE and IMHOUSE.DAT, and will all have an
           extension of "TMP".  An example is IMCD.TMP, and if all goes well
           you'll never see them.  If there is a power outage while you're
           using INVENTORY MASTER, some of these transient files may not be
           properly deleted.  No problem.  If for some reason they're not in
           the current directory next time you use the program, INVENTORY
           MASTER will coolly ignore them.  If they are (the more likely
           case), they will be deleted during the session without muss or
           fuss or inconvenience to those in surrounding offices.
           
           
           
                                  W A R R A N T I E S
           
           
           	Well, there aren't any.  Peery Data is not responsible for
           hardware or software problems and does not agree to compensate
           any user, registered or otherwise, for any damages whether or not
           they were caused by this product or any other used in conjunction
           with this product.  For registered users, our limit of liability
           is to replace defective diskettes if they came from Peery Data or
           to refund the total amount of the registration fee.
           
           INVENTORY MASTER USER'S GUIDE-------------------------------- 24
           
           
           
                                R E G I S T R A T I O N
           
           
           	When you register your shareware copy of INVENTORY MASTER,
           you will receive a printed and bound User's Guide, a copy of the
           latest shareware version on 5.25" diskette (the one you found may
           or may not be the latest), and our undying gratitude.  As an
           added incentive, this registered copy will not contain the
           shareware "reminder" message at the end of the program.  
           
           	In addition, your name will be placed on our list of
           registered users, entitling you to receive new product
           announcements and upgrade information.  Please use the form on
           the next page when registering.  As long as people like you
           support our efforts, we'll continue to develop high quality
           software at far lower than commercial prices.  
           
           	Our Technical Support is limited, but those who are
           registered are entitled to it.  If you have a problem, write to
           us at this address:
           
                   Peery Data, P.O. Box 12235, Charlotte, NC 28220.
           
           On the envelope put "Ref: INVENTORY MASTER".  Please include:  
           (1) your version number (this User's Guide is for shareware
           Version 1.0 SW), 
           (2) the type of computer system you're using, 
           (3) a DETAILED description of the problem, and 
           (4) your name and address so we can respond.
           
           	There's no guarantee we can solve your problem, but we'll
           sure give it a try!
           
           
           
           .---------------------------------------------------------------.
           |                                                               |
           |                  INVENTORY MASTER ORDER FORM                  |
           |                        Version 1.0 SW                         |
           |                                                               |
           |      This is a professional "shareware" product, supported    |
           | solely by your generosity.  Help keep down the cost of future |
           | software development by registering promptly!  Thank you.     |
           |                                                               |
           |      Mail with check made out to:    PEERY DATA               |
           |                                      P.O. Box 12235           |
           |                                      Charlotte, NC 28220      |
           | (Prices subject to change                                     |
           | without notice. Jan, 1989)     Number of             Extended |
           |                                  Copies     Price      Price  |
           |                                                               |
           | Registration alone............. ________ X  $84.95 = ________ |
           | Registration, Printed Manual,                                 |
           |    and latest version                                         |
           |    on 5.25" Diskette........... ________ X  $99.95 = ________ |
           |                                                               |
           | Subtotal............................................ ________ |
           |                                                               |
           | NC residents add 5% sales tax....................... ________ |
           |                                                               |
           | Shipping and Handling...........________ X   $3.00 = ________ |
           |                                                               |
           | Grand and Final Total...............................          |
           |                                                      ======== |
           |                                                               |
           |         Please print:                                         |
           |                                                               |
           | Name    ____________________________________ (Mr/Mrs/Miss/Ms) |
           |                                                               |
           | Title   ____________________________________                  |
           |                                                               |
           | Company ____________________________________                  |
           |                                                               |
           | Address ____________________________________                  |
           |                                                               |
           | City    ____________________________________                  |
           |                                                               |
           | State   _______________     Zip ____________                  |
           |                                                               |
           | Phone   (______) ___________________________                  |
           |                                                               |
           |                                                               |
           |    Say!  Where did you get your shareware copy of INVENTORY   |
           |                                                               |
           | MASTER anyway?_____________________________________________   |
           |                                                               |
           | What computer do you use?__________________________________   |
           |                                                               |
           | Thanks!                                                       |
           `---------------------------------------------------------------'
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2054

     Volume in drive A has no label
     Directory of A:\

    FILE2054 TXT      2813   1-24-90  11:54a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-24-90   2:30p
    IM       DOC     71283   1-20-89  11:01a
    IM       EXE    125283   3-16-89   4:11p
    IM10SW   ARC    120408   6-02-89   3:55p
    READ     ME       1232   6-02-89  10:41a
            7 file(s)     321597 bytes
                           36864 bytes free
