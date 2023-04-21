---
layout: page
title: "PC-SIG Diskette Library (Disk #1383)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1383/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1383"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-ESTIMATOR 1 OF 2 (ALSO 1384)"

    PC-ESTIMATOR helps you estimate building costs for projects of all sizes
    and kinds, from skyscrapers to kitchen remodeling.  Developed by
    construction professionals, the program can be changed to be as large or
    small, as complex or simple as you want.  The bottom line is custom cost
    estimates with your markup and choice of detail included.
    
    You begin with pull-down menus, lots of help, documentation and sample
    files.  You will build material price lists and cost data that keeps
    accumulating.  The databases are unlimited, growing as your application
    grows.  They include markups, labor and equipment rates, standard cost
    codes and vendor tracking.  You can have different markups for
    individual estimates or multiple estimates carried out simultaneously.
    
    The program produces reports for several levels of detail in estimates
    including itemized and built-in markup applications, and allows for
    ``what if'' type analyses.  An on-screen takeoff calculator with memory
    is available at the touch of a function key.  The data files are 100%
    compatible with dBase III+ application programs and are
    translatable by Lotus and Symphony.  Lookup windows allow you to view
    any file at any time.
    
    Wage rates for a number of construction trades are included with the
    program.  They are tied to four-digit codes commonly used by the
    construction industry.  Based on union rates, they are the average of
    several major U.S. cities and can easily be customized to fit your area.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1383.TXT

{% raw %}
```
Disk No: 1383                                                           
Disk Title: PC-Estimator 1 of 2 (also 1384)  (Disk 1 of 2)              
PC-SIG Version: S2.95                                                   
                                                                        
Program Title: PC-Estimator                                             
Author Version: 2.95                                                    
Author Registration: $89.00.                                            
Special Requirements: 384K RAM, two floppy drive.                       
                                                                        
PC-ESTIMATOR helps you estimate building costs for projects of all sizes
and kinds, from skyscrapers to kitchen remodeling.  Developed by        
construction professionals, the program can be changed to be as large or
small, as complex or simple as you want.  The bottom line is custom cost
estimates with your markup and choice of detail included.               
                                                                        
You begin with pull-down menus, lots of help, documentation and sample  
files.  You will build material price lists and cost data that keeps    
accumulating.  The databases are unlimited, growing as your application 
grows.  They include markups, labor and equipment rates, standard cost  
codes and vendor tracking.  You can have different markups for          
individual estimates or multiple estimates carried out simultaneously.  
                                                                        
The program produces reports for several levels of detail in estimates  
including itemized and built-in markup applications, and allows for     
``what if'' type analyses.  An on-screen takeoff calculator with memory 
is available at the touch of a function key.  The data files are 100%   
compatible with dBase III+ application programs and are                 
translatable by Lotus and Symphony.  Lookup windows allow you to view   
any file at any time.                                                   
                                                                        
Wage rates for a number of construction trades are included with the    
program.  They are tied to four-digit codes commonly used by the        
construction industry.  Based on union rates, they are the average of   
several major U.S. cities and can easily be customized to fit your area.
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PCTUTOR.DOC

{% raw %}
```
                           PC-Estimator (tm) Tutorial
             Copyright 1988-1990 by CPR, Inc. All Rights Reserved.
                             Update:  09/17/1990
                              TABLE OF CONTENTS
                             -------------------

   NOTE:  (*) Denotes available with full registration version only.

1. GENERAL INFORMATION
      Welcome to PC-Estimator
      Shareware Notice
      Registration, User Manual and Support
      Disclaimer Notice

2. INTRODUCTION
      Minimum System Requirements
      Program Installation
      Contents of This Tutorial
      How to Make a Printed Copy of This Tutorial
      What PC-Estimator Offers You
      Who Can Benefit from PC-Estimator
      Overview of Database Functions
      Lookup Windows
      On-screen Takeoff Calculator with Memory
 (*)  Built-in Calendar/Appointment Tracker
      File Transfer to dBIII, Lotus, Symphony

3. ESTIMATE BASICS
      Introduction
      Estimate Identification
      Estimate Markup Rates
      Labor Wage Rates
      Construction Equipment Rates
      Standard Costcodes
      Assembly Costcodes
      Vendor Identification

4. ESTIMATE DEVELOPMENT
      Introduction
      Build Estimate Detail
      Append File
      Build Work Assembly

5. REPORTS
      Introduction
      Display/Print Estimate Identification
      Print Labor Wage Rates
      Print Construction Equipment Rates
      Print Standard Costcodes
      Print Assembly Costcodes
      Display/Print Vendor Identification
      Display/Print Estimate Summary
      Print Estimate Summary - by Phase
      Print Estimate Table Form
      Print Estimate Table Form - by Phase
 (*)  Print Estimate Bid Items
      Print Cost Item Listing
      Print Work Assembly Listing

6. UTILITIES
      Setup PC-Estimator Program
      Reindex Basic Files
  (*) Reindex Estimate Files
  (*) Reindex Work Assembly Files


7. APPENDIX
      Program File Structure
      Error Messages
      Cursor Controls

                          1. GENERAL INFORMATION
                         ------------------------

                       >> Welcome to PC-Estimator <<

Welcome to the fascinating and productive world of PC-Estimator.

PC-Estimator is a complete, stand-alone system that does not require the use
or assistance of any other software. All you need is your computer and your
MS-DOS operating system.

PC-Estimator is a high productivity software designed for use by general and
specialty contractors, engineers, architects, manufacturers, cost
estimators, consultants and other individuals who need to estimate costs for
projects of all sizes and kind. From high rise projects to tiny kitchen
remodels.

And, since we distribute this version of our system on a shareware basis,
you will be able to tap the productivity of PC-Estimator legally at no or
nominal cost.

                           >> Shareware Notice <<

With this notice you are granted permission to make, share and distribute
unmodified copies of PC-Estimator program disk and Tutorial. Shareware is a
low cost alternative to commercially available software programs. Please
support shareware by becoming a registered user.

              >> Registration, User Manual and User Support <<

The disk that you already own contains the full set of program files as well
as this on-disk tutorial in the form of an ASCII file. You can make a
printed copy of this tutorial as explained in Chapter 2 below.

If you use this program, and want to benefit even more from what it offers,
please consider a full PC-Estimator User Registration. User registration
will provide you with the following benefits.

    1. The latest update of PC-Estimator (with built-in calendar/appointment
       tracker and Bid Items Report) and a user registration number that
       entitles you to free, unlimited telephone support from our expert
       staff.
    2. A printed User Manual with screen reproductions, detailed
       instructions, special tips, program structure information and other
       data.
    3. Complete industry-standard costcode database file including built-in
       material prices, labor and equipment rates adjusted for the
       geographic area that you operate in. The database is set up in the
       standard CSI (or AIA) format used by contractors, architects,
       engineers and government offices in the USA and covers all 16
       construction cost categories.
    4. Periodic free newsletter and program update news and information.

       To register: Complete form below (or at the end of this tutorial),
                    include your user registration fee for $ 99.00
                    (VISA / MC, check, money order or C.O.D.) and send to:

          PC-Estimator, CPR, Inc., P.O. Box 3465, Berkeley, CA 94703

       California orders, add 7.25 % sales tax. Add $4.50 for Shipping &
       Handling (Overseas orders, add $12.50).  Add $5.00 for COD orders.
       Add $5.00 for rush orders.  Fill out the user registration form
       printed at the end of this tutorial or supply the following
       information.

       Payment:
       __ VISA    __MC , Card No:________________ Exp date:______
       __ Check enclosed, __ Money order enclosed, __ Send C.O.D.

       Name:_____________________________________________________
       Company:__________________________________________________
       Address:__________________________________________________
       City:__________________  State:________  Zip:_____________
       Telephone number:_________________________________________
       Signature:____________________
                 (Required for VISA/MC orders)


                              >> Disclaimer <<

This software product and tutorial was developed in the USA. Construction
Productivity Research, Inc. believes that the information contained within
the tutorial and the software program databases is correct. CPR, Inc.
reserves the right to make periodic changes in the contents of the tutorial
and the program without any direct or inferred obligation to notify any
person of such revision or changes.

We do not cover under warranty material that has been lost, stolen, or
damaged by accident, misuse, or unauthorized modifications. Furthermore, we
make no warranty, express or implied, to you or to any other person or
entity.  Specifically, we make no warranty that the software or the data
contained inside the databases or in this tutorial is fit for a particular
purpose.

                               2. INTRODUCTION
                              -----------------

                      >> Minimum System Requirements <<

The following are minimum system requirements to run PC-Estimator on your
computer.
     - IBM PC/XT, AT, PS-2 or 100 % compatible computer.
     - MS-DOS 2.0 or later
     - Hard disk drive system or double floppy disk drive system (*).
     - Minimum 384 K RAM memory.
     - Monochrome or color monitor.
     - Standard track or wide-track compatible printer.

(*) Because of higher access speed and superior storage capacity, we
    recommend to run PC-Estimator from a hard disk drive (any size).

                         >> Program Installation <<

Although you can use PC-Estimator from a double floppy disk drive system, it
works most efficiently from a hard disk.  When you receive a copy of PC-
Estimator, follow the following steps to install the system.

     QUICK AUTO INSTALLATION:
     ------------------------
     1. Insert PC-Estimator diskette in drive A
     2. At DOS prompt A> type:

           INSHARD    (press ENTER)     <-- for hard disk drive systems
           INSFLOP    (press ENTER)     <-- for double floppy drive systems

        Then follow screen instructions.
     3. To run PC-Estimator:

        For hard disk systems:
           At C:\pcest directory, type PCEST (press ENTER)

        For floppy disk systems:
           Insert Disk # 1 in drive A; disk # 2 in drive B. Then,
           At A:> prompt, type PCEST (press ENTER)

     ALTERNATE INSTALLATION:
     -----------------------
     For hard disk systems:
     ----------------------
     1. Open a new hard disk directory. (Suggest to name it PCEST)
     2. Copy all PC-Estimator files from disk #1 and #2 to the new
        directory.
     3. Copy PC-Estimator file called "Config.sys" into the root directory
        of your computer. Note: Make sure such a file does not already exist
        in your root directory. If it does, simply add the following two
        lines to the existing file (Use Edlin or any text editor).

                 Files=20
                 Buffers=24

     4. Reboot your computer by reset button or Ctrl-Alt-Del procedure.
     5. PC-Estimator is installed and ready to work for you. To start
        PC-Estimator, first go to your hard disk directory where the files
        reside, then type:

           PCEST

        Press ENTER, then follow screen prompts and instructions.

     Tip: If you have a hard disk manager, you can easily tie the PC-
     Estimator directory change and startup command to your disk manager
     menu.

     For double floppy disk systems:
     -------------------------------
     1. Insert PC-Estimator disk #1 in drive A
     2. Insert your MS-DOS bootup disk in drive B
     3. Copy file called "config.sys" from PC-Estimator disk #1 in drive A
        to your MS-DOS bootup disk in drive B. Note: Make sure such a file
        does not already exist in your bootup disk. If it does, simply add
        the following two lines to the existing file (Use Edlin or any text
        editor).

                 Files=20
                 Buffers=24

     4. PC-Estimator floppy system installation is complete. Now reboot your
        computer using your MS-DOS bootup diskette in drive A.

     To start system at any time, insert
        PC-Estimator disk #1 (Program Disk) in drive A
        PC-Estimator disk #2 (Data disk) in drive B

        at DOS prompt A:>, type

        PCEST  (press ENTER)

        Note: PC-Estimator runs considerably faster from a hard disk.

                       >> Contents of This Tutorial <<

This tutorial shows you step by step in narrative format how to use each of
PC-Estimator features. The best way to learn PC-Estimator would be to go
through the text while implementing the same functions on the computer.

Chapter 1 contains general information as well as various notices and user
registration and support information

Chapter 2 is a brief introduction to PC-Estimator, what it has to offer to
the user and who can benefit.

Chapter 3 deals with the section of the program entitled "Estimate basics".
This section includes identifying an estimate, company markup rates, labor
wage rates, equipment rates, standard and assembly costcodes and vendor
information database.

Chapter 4 deals with "Estimate Development" section. It includes building a
new estimate, creating a new estimate from existing (cloning), and building
work assemblies.

Chapter 5 deals with reporting functions of PC-Estimator.

Chapter 6 details the "Utilities" such as identifying user's name in addition
to a "reindex" routine to be used in case of unintentional reset or power
surge affecting the data files.

Chapter 7 is "Appendix" and deals with screen cursor controls and error
messages.

         >> How to Read or Make a Printed Copy of This Tutorial <<

This tutorial is supplied in a file called "PCTUTOR.DOC" in the ASCII
format.  You can read or print it by using DOS commands or text processor.

To read the contents of this tutorial file, insert PC-Estimator diskette in
your A: disk drive. Close door. At DOS A> prompt, type:

         TYPE PCTUTOR.DOC  (press ENTER)

The file will scroll down your screen. To stop scrolling, Press CTRL and
NUMLOCK keys simultaneously. Then continue reading.


To print the contents of this tutorial file, insert PC-Estimator diskette in
your A: disk drive. Close door. Make sure your printer is ready to print
approximately 16 pages.  At DOS A> prompt, type:

         COPY PCTUTOR.DOC PRN (press ENTER)

With your paid registration, you will receive the printed User Manual which
has more detailed instructions. To get the most benefit from this program,
we recommend a full user registration. Refer to Chapter 1 of this tutorial
on how to become a registered user.

                    >> What PC-Estimator Offers You <<

PC-Estimator is an easy-to-use program designed to increase efficiency and
productivity in cost estimating. It is developed by construction
professionals who are also experts in computers. It represents a powerful
cost estimating productivity tool in an easy to use package. Some benefits
to be gained are as follows:

     - A complete, stand-alone system. No other software necessary.
     - Immediate on-screen access to data thru "Lookup" windows.
     - Material price list and cost data accumulation.
     - Advanced "Pull-down" menu driven structure.
     - Powerful, time-saving "Work Assembly" feature.
     - Built-in digitizer interface.
     - Instant recap for "What-if" type analyses.
     - Unlimited size databases. They will grow as your applications grow.
     - Databases for markups, labor and equipment rates, standard costcodes,
       vendor tracking, etc.
     - Different markups applicable for each estimate.
     - Unit labor and unit cost entries to three decimal places for increased
       accuracy.
     - Multiple estimates can be carried out simultaneously.
     - Built-in comprehensive reporting.
     - Several different levels of detail in estimate reporting including
       itemized and built-in markup applications.
     - On-screen reporting for instant "Bottom-line" evaluation.
     - Bid item reporting for heavy and highway contractors.
     - Supports standard and wide-track printers.
     - On-screen takeoff calculator with memory

       And many many other advanced features...

                  >> Who Can Benefit from PC-Estimator <<

PC-Estimator is based on a user-definable costcode and unit cost structure.
Therefore it is suitable for a wide range of industries, trades and private
and public organizations ranging in size from one-person individuals to
medium to large size contracting companies, engineers and architects.

Thanks to PC-Estimator's optional industry-standard costcode database
(available upon User Registration - See Section 1), even people with little or
no cost estimating experience can come up with a detailed estimate of a
project in a short amount of time.

                    >> Overview of Database Functions <<

PC-Estimator's built-in database functions accommodate:
    - Data Add
    - Data Edit
    - Data Delete

PC-Estimator handles these database functions through a menu-driven
interface.  Move cursor by using arrow keys. then press (Enter) to select.
To back up or leave screen, use (Escape) key. All database entries,
modifications and deletions are accompanied by appropriate screen messages
such as:

     Enter corrections..
     Data OK (Y/N) ?
     Confirm deletion (Y/N) ?

Since the interface is so simple, there is hardly anything to memorize. No
elaborate shift and function keys. No templates. Few simple rules are:

     - Identify an estimate by assigning an estimate number
       (use Basics - Estimate Identification) before starting an estimate.
     - Identify a work assembly by assigning an assembly costcode
       (use Basics - Assembly Costcodes) before building a work assembly
       file.
     - Define your own costcodes and enter unit prices and unit rates
       against each. (Or use our industry-standard costcode database
       available upon registration, See Section 1)

                           >> Lookup Windows <<

PC-Estimator offers an easy and convenient way to view a database and select
a record during the estimating process. "Lookup Windows".

Function key F9 activates the context-sensitive Lookup window. The system
will indicate so at the command line (line 24)  of the screen.  Example:

                            Press F9 for Lookup

When F9 is pressed, PC-Estimator will display the relevant database lookup
window. Scroll by using direction keys, PgUp and PgDown, then select by
pressing (Enter) key. Exit without selection by pressing (Escape) key.

               >> On-screen Takeoff Calculator with Memory <<

PC-Estimator on-screen take-off calculator is available from all screens.
This is a full function memory calculator patterned after a desktop
calculator.  Just press function key F10, and it will appear. Use it for
takeoff calculations. To exit calculator, press (Escape). The calculator
will remember the last calculated result. To paste result to any field,
press (Ctrl-P).

                >> Built -in Calendar/Appointment Tracker <<
              (*) This utility is available with PC-Estimator
                      full registration version only.

By using this built-in feature which can be invoked from any screen by using
F8 - Function key, you can track your important appointments such as project
deadlines, bidding dates, or simply your secretary's birthday. No need to
use any other RAM-resident, memory consuming utility programs. There is no
limit on the size of your reminder notes.

                >> File Transfer to dBIII, Lotus, Symphony <<

PC-Estimator database files are 100% compatible with dBaseIII Plus program.
By using dBaseIII, one can tie PC-Estimator files to other dBaseIII
applications or simply design additional report formats.

PC-Estimator files can also be translated to Lotus and Symphony by using the
Translate functions from higher versions of these programs. The PC-Estimator
records will be rows and attributes will become column headings.

Detailed data structure of PC-Estimator which can be used in data
translations is available in the User Manual which is provided with User
registration (See section 1 above).

                            3. ESTIMATE BASICS
                           --------------------

                            >> Introduction <<

This section of PC-Estimator addresses the setting up and managing of basic
databases related to estimating functions. Unlike spreadsheet estimating
programs that are based on single file working templates, PC-Estimator is a
true database management system, which means that is entered into various
databases create a knowledge based system. databases are routinely scanned
by the program and relevant information is retrieved and displayed on the
screen.

PC-Estimator's database files can accommodate virtually unlimited records of
information. In fact, the only restriction on the amount of information is the
size of your hard disk storage system. Since floppy disks are limited in
storage capacity as well as slow access time, they are not suitable for
powerful data management systems like PC-Estimator.

                       >> Estimate Identification <<

Before starting to build a new estimate, it must be identified by assigning
a unique estimate number. An estimate number can be up to 6 digits long and
can be an alphanumeric. e.g. AB1988, NEW56, CO102a, AA1, X1988, etc.

Identify a new estimate by assigning a unique estimate number and entering
relevant information. To do this select (Basics - Estimate identification)
by moving highlight on Basics and pressing (Enter), then follow screen
prompts and instructions.

 Basics       Development       Reports       Utilities     Quit
  a  Estimate identification  <--
  b  Estimate markup rates
  c  Labor wage rates
  d  Construction equipment rates
  e  Standard costcodes
  f  Assembly costcodes
  f  Vendor identification

The screen will show existing estimate files and descriptions. If you have
several files, view them by the navigation keys. To do database management
functions such as add a new estimate number, edit existing information, or
delete existing information, select Add, Edit, Delete by typing the command
letter, which is the capitalized letter (generally the first letter) of the
command. Remember, (Escape) key will always back you out of the current
screen to the previous screen. Example:

                   Add    Edit   Delete   <Esc> to exit

To add a new estimate number, select (Add), then assign estimate number and
enter other information in the window. When finished, PC-Estimator will
store the information and open a new estimate file which will be used to
build the new estimate.

                        >> Estimate Markup Rates <<

PC-Estimator supports different markup rates for each estimate. To access
markup rates, select (Basics - Estimate markup rates).

If no markup rates are assigned to an estimate number, PC-Estimator will use
Standard Markup Rates automatically. These are the markup rates under
estimate number "0STD" which is already initiated in the program. The
markups are initiated at 0%. Therefore, after installing PC-Estimator, you
should modify the standard markup rates to reflect your most commonly used
(standard) markup rates.

                           >> Labor Wage Rates <<

Installed with this program, you will find wage rates for a number of
different construction trades. These entries are for basic trades only and
do not represent all available trades and professions. The entries are tied
to 4-digit codes commonly used by the construction industry. The wage rates
are based on union wage rates and are average for major US cities. The
actual wage rates in your area can be less or more. You can add new
classifications, modify to reflect more accurately wages in your area or
delete any that you do not use.  Since the wage rates entries are for an
average for all major US cities, they should be used with caution and should
be adjusted for geographic areas that differ considerably from average.

The "Base Rate" column represents the sum of the wage rate, employer-paid
fringe benefits (i.e. vacation pay, employer-paid health and welfare,
pension plan costs and training and advancement plan costs). The "Other
Costs" column is entered as 0.00. (Alternatively, the user may use the
"Other Costs" column to indicate any part of the total wage rate paid.)

Worker's compensation payments as well as fixed overheads (i.e.  FICA Taxes,
Contractor's Risk Insurance costs, Federal and State unemployment costs)
should be included with contractor's overhead application since such
overheads differ from state to state and should be adjusted as and where
necessary.  Contractors overhead and profit application can be entered by
using (Basics -markup rates) from the Main Menu.

The wage rates can be accessed and selected conveniently thru lookup windows
from the estimating worksheet.

                      >> Construction Equipment Rates <<

Similar to labor wage rates, we have supplied a representative number of
entries for construction equipment. The entries represent only a small
selection of all available construction equipment. Add, modify or delete
equipment classification and hourly rentals as necessary for your geographic
area.

The "Base Rate" represents hourly rental rate for the equipment. The figures
are an average for major US cities. Depending on the type of equipment, the
rental duration effects the hourly rate considerably. Therefore, the figures
are subject to differ from actual rates in your area and quoted rates for a
particular rental period.

The construction equipment rates can be accessed and selected
thru lookup windows from the estimating worksheet.

                          >> Standard Costcodes <<

By using this section of PC-Estimator, the user can identify Standard
costcodes and enter material, labor, subcontract equipment and other unit
costs against each costcode.

Each cost  item in an estimate is identified by a costcode, and the computer
uses the costcode to keep track of cost item entries. Developing a standard
costcode library will result in time savings in searching material prices
and labor rates as well as achieve uniformity between estimates and
estimators.

Standard costcodes have been developed and used by different institutions.
For example the 16 division cost breakdown developed by the Construction
Specifications Institute is commonly used by contractors, architects and
engineers in the USA.

PC-Estimator allows for easy development and use of standard costcodes. Once
set up, each time a user enters the costcode during an estimate, the
description and all other unit prices will be automatically transferred to
the current worksheet. The lookup window can be used to search the costcode
database and select appropriate costcode for transfer into worksheet.

A costcode can be maximum ten digits long and may consist of alphabetic
characters, numbers or combination of both (alphanumeric).
Examples: 0120000000, 0921821000, 14960, CO22912, ST234A0001, etc.

The first two digits is referred to as "Division".  For example, in the CSI
cost coding format, 03 is allocated to Concrete, and 15 is allocated to
Mechanical Systems.

PC-Estimator program as distributed includes a limited number of costcodes
initiated in the CSI format. The costcodes also contain unit prices and unit
rates which are typical for an average geographic area in the USA and they
should be considered accordingly. You can add, modify and delete any entry
or build your own cost coding system.

With full user registration, we provide a complete costcode database with
unit prices adjusted for your geographic area. This costcode database
represents most (if not all) activities typically used in general and
building type of construction. You can further customize the database to
your specific application by the addition of your job-specific activities.

                          >> Assembly Costcodes <<

By using this section of PC-Estimator, the user can identify Assembly
costcodes.

Work assemblies are a very efficient way of estimating composite work
activities. Assembly costcodes are similar to standard costcodes in format.
They are 6-digit long alphanumerics.  Assembly costcodes identify work
assemblies, which are, in effect just like individual estimates. They are
usually sub-systems of construction end produscts. For example, the
following work activities could be made into work assemblies:

         - Concrete-in-place, per cubic yard
         - Stud partition wall, per linear foot
         - Roofing, per square feet
         - Electrical work, per circuit
         - Plumbing, per foot run

Each one of the above work assemblies involve a number of individual cost
activities. To set up work assemblies, carry out the following steps:

        1. Assign a work assembly costcode. Use (Basics - Assembly
           costcodes) from the Main Menu.
        2. Build detail assembly by using (Development - Build work
           assembly)

During an estimate, you can recall a work assembly and incorporate it to
your current worksheet.

                         >> Vendor Identification <<

PC-Estimator includes an integrated Vendor Identification system. A vendor
is an individual or company that sells material or services or rents
equipment.

During the course of an estimate, a cost estimator usually contacts several
vendors offering different goods or services. The vendor identification
system of PC-Estimator keeps track of information related to vendors in an
efficient manner and offers immediate access to data thru vendor number as
well as database search for selected criteria such as vendor number,
keyword, etc.

A vendor is identified by a Vendor Number which is 6-digit alphanumeric. The
following are valid vendor numbers: 12600, AB323, ARTCO, etc.

To access vendor identification select (Basics - Vendor identification) from
the Main Menu. Then carry out database functions to add, edit or delete
vendor identification records.

                          4. ESTIMATE DEVELOPMENT
                         -------------------------

                            >> Introduction <<

This section of PC-Estimator addresses the procedure for building a detailed
estimate. Appending all or part of an estimate to another estimate file and
building work assemblies are also included in this chapter.

                           >> Build Estimate <<

Before starting to build an estimate, the estimate must be identified by
assigning an estimate number. This is done by using (Basics - Estimate
identification) from the Main Menu.

An estimate is built by entering the estimate of the costs to perform cost
items associated with a job or project. The cost for each item is further
broken down into cost categories which are Material, Labor, Subcontract,
Equipment and Other categories. One or more of the cost categories for a
cost item may be zero.

Each cost item is identified by a costcode. However, there may be more than
one entry for the same costcode.

During estimating, the Lookup screen is always available to search and
select records such as activity descriptions, material prices, labor and
equipment rates from other databases.

To build an estimate, select (Development - Build estimate). Then enter
estimate number.

 Basics       Development       Reports       Utilities       Quit
          -->  a  Build estimate
               b  Append file
               c  Build work assembly

If you do not remember the estimate number press F9 for Lookup. Then move
highlight and press (Enter). The estimate file will open on your screen.  If
it is a new estimate, no line items will show. You can now build your
estimate by adding line items and entering associated costs.  Our industry-
standard costcode database (available with user registration) contains over
600 activities and associated costs covering most general construction
activities.  The costcode database as well as labor and equipment databases
are available at all times thru Lookup windows.

Estimate Detail Worksheet: Each cost item occupies a line on the estimating
screen. However, there is more to it than that. Each cost item is stored in
the memory with manhour rates as well as unit dollars and totals. To see
this, select Edit from the command line menu.

Now enter a costcode number. When a costcode is entered, the costcode
database is searched for matching data records (If a record already existed,
it would automatically be retrieved). Now, the estimate worksheet window
will open on your screen.

Notice how cost categories are laid out as rows. Looks complicated but it is
not. You can enter figures for any highlighted figure and ignore the rest.
The system will do instant computations. You can always override computed
figures.

For Labor Class (Classification) use Lookup screen. If you had entered a
labor record for carpenter in your labor database, classified as, let's say,
CAR1, then you would lookup labor database and select the entry. The wage
rate would be exported right into the workscreen.

Continue estimating the cost item. Press (Enter) to skip any field. When
finished, PC-Estimator will figure out line item unit cost and total cost.

The line cost item will find its sorted place in the listing.  Remember, at
any time, you can go back to an estimate cost item, view it in detail and
make edit as necessary.  Typically, material supplier and subcontractor
quotes are frequently adjusted as an estimator searches for best price in
the market and receives favorable quotes.

By selecting (Totals) from the command line menu, you can get running totals
of your estimate at any time.


                          >> Append File <<

Often, a new job to be estimated will resemble in many ways another job for
which an estimate has already been developed. In such a situation, using the
"Old" estimate as the starting point and making modifications on it will
save a great deal of time in comparison to starting a new estimate from
scratch.  PC-Estimator offers a step by step feature to do this.

When a new estimate file is identified, select (Development - Build Estimate
Detail) to retrieve the file and make necessary modifications.

As a helpful tip, we can recommend building master estimate files to be used
as checklist for typical jobs.

                           >> Work Assemblies <<

By choosing this option from the submenu, you can retrieve an existing work
assembly file, modify if necessary and incorporate the totals into your
current worksheet.

For example, if you prepare a master work assembly file for installation of
concrete foundations, all you have to do is to measure the quantity of
concrete in your current estimate and use Work Assembly feature to figure
out totals and incorporate cost activities and material costs for
excavation, rebar, formwork, concrete and finishing labor.

To build a work assembly, first identify a work assembly costcode by
selecting (Basics - Assembly costcodes). Then select (Development - Build
assembly) and continue to set up the master work assembly just as you would
build a small estimate.

                                5. REPORTS
                               ------------

                            >> Introduction <<

Several printed reports may be generated by using the report printing
functions of PC-Estimator. Most reports are available on 11" X 15" wide-
track format as well as 8 1/2" X 11" standard size paper. PC-Estimator
automatically switches to 17 cpi (compressed print) standard size paper..

PC-Estimator offers an advanced reporting feature whereby reports are
generated based on database search on selective criteria. By using this
feature, a user can generate more informative, focused reports which will
address specific information requirements.

To cancel printing at any time, press Alt-C.

                >> Display/Print Estimate Identification <<

This printing function is used to generate screen or printed reports for the
Estimate identification section of PC-Estimator. To display and/or print an
estimate identification listing select (Reports - Estimate identification)
from the Main Menu.

 Basics       Development       Reports       Utilities       Quit
                            -->  a  Estimate identification
                                 b  Labor wage rates
                                 c  Equipment rates
                                 d  Standard costcodes
                                 e  Assembly costcodes
                                 f  Vendor Identification
                                 ---------------------------------
                                 g  Estimate summary
                                 h  Estimate summary - by phase
                                 i  Estimate table form
                                 j  Estimate table form - by phase
                            (*)     Bid item report
                                 k  Cost item listing
                                 ---------------------------------
                                 l  Wok assembly listing

              (*)  Available with PC-Estimator full registration
                   version only.

A 'Print options' screen will be displayed. Press return to skip over fields
if no selection is required. No selection means all existing records will be
included in the listing. before starting to print, check to make sure that
the printer is turned on and on-line.

You can also view the estimate identification records fitting selected
criteria on the computer screen.

                       >> Print Labor Wage Rates <<

To print a complete labor wage rate listing, select (Reports - Labor wage
rates) from the Main Menu.

                        >> Print Equipment Rates <<

To print a complete equipment rates listing, select (Reports - Construction
equipment rates) from the Main Menu.

                       >> Print Standard Costcodes <<

To print a complete or selective listing of Standard costcodes already
existing in the costcode database, select (Reports - Standard costcodes)
from the Main Menu. The selection window will appear on the screen.  Enter
selection criteria or press ENTER to skip.

Check to make sure the printer is on-line before starting to print.

                        >> Print Assembly Costcodes <<

Similar to printing standard costcodes above.

                 >> Display/Print Vendor Identification <<

To display on screen or print a vendor identification listing, select
(Reports - Vendor identification) from the Main Menu. Then enter selection
criteria or press (Enter) to skip.

You can view vendor information on the computer screen or send output to
printer. Make sure the printer is turned on and on-line.

                    >> Display/Print Estimate Summary <<

To display on screen or print estimate summary with markups itemized
separately, select (Reports - Estimate summary) from the Main Menu. Then
enter estimate number or select using the Lookup screen. The estimate will
be categorized by division ( i.e. the first two characters of the costcode).

The estimate summary can be viewed on screen with the "Bottom-line" figured
out. Use this for quick phone-in bidding.

                  >> Print Estimate Summary - by Phase <<

Similar to estimate summary report described above. Except that the report
will be categorized first by phase then by division.

                      >> Print Estimate Table Form <<

To print estimate detail report in a tabular format, select (Reports -
Estimate Table Form) from the Main Menu. This report will show unit cost as
well as total cost for each line item. Grand totals will be printed before
markup applications.

                  >> Print Estimate Table Form - by Phase <<

Similar to estimate table form report described above. Except that the
report will be categorized first by phase then by division.

                       >> Print Bid Items Report <<
              (*) This report is available with PC-Estimator
                      full registration version only.

By using this option, you can view on screen or print bid item reports
showing unit cost and extended total costs with markups built-in. Very
suitable for for formal bidders and heavy and highway construction bidders.

                       >> Print Cost Item Listing <<

By using this unique PC-Estimator feature it is possible to generate a
complete bill of material listing without having to make individual entries
for work assembly detail items.

For each estimate line item, this report lists the costcode, cost activity
description, quantity and unit. Furthermore, if a line item is an assembly,
the report will list the complete work assembly breakdown.

                     >> Print Work Assembly Listing <<

To generate a one-page tabular listing of an existing work assembly file,
select (Reports - Work assembly listing) from the Main Menu. Then select
thru Lookup screen.


                               6. UTILITIES
                               ------------

                      >> Setup PC-Estimator Program <<

To setup the program, select (Utilities - Setup program) from the Main Menu.

 Basics       Development       Reports       Utilities       Quit
                                          -->  1  Setup program
                                               2  Reindex files

If it is the first time that you are using PC-Estimator, the Setup screen
will appear by default.

Follow screen prompts and instructions to enter your name as it should
appear in report headings. Also enter a second line in report headers (if
required).  Identify the kind of data storage system used.

                        >> Reindex Database Files <<

During the course of data entry, a power cut, surge, spike or inadvertent
use of the Reset button may cause interruption of PC-Estimator database
management operations. As a result of this, a number of records may be left
unindexed.  this may cause error messages and other unpredictable results.
The Reindex utility will remedy such a situation by reorganizing all files.
The reindex feature may also be useful when data is imported from other
dBaseIII files.

To carry out reindexation, select (Utilities - Reindex files). The rest will
be done by PC-Estimator. Remember, running the Reindex utility will not
cause any harm on the database files even if no disorganization was present
in the first place.

                              7. APPENDIX
                             -------------

                      >> Program File Structure <<

The following are program database files:

         Es_ident.dbf         Estimate Identification
         Es_rates.dbf         Labor Wage Rates
         Es_vend.dbf          Vendor Identification
         Es_mark.dbf          Estimate Markups
         Es_sample.dbf        Structure estimate file
         Es_costh.dbf         Standard Costcodes
         Es_eqrt.dbf          Equipment Rates
         Es_assy.dbf          Assembly Costcodes

         Pcest.exe            Program file

When a new estimate ID is entered, PC-Estimator opens a new estimate file
and an index file as follows:

         ES(estimate number).dbf for estimate file
         ES(estimate number).ntx for index file

                          >> Error Messages <<

The error messages fall into 6 categories:

    1. Database error
    2. Expression error
    3. Miscellaneous error
    4. Open error
    5. Print error
    6. Undefined error

Whenever an error occurs, first check that the files originally supplied to
you are all present in the directory you are logged on. If files appear OK,
then run Reindex routine. Then test again. If error persists, you may have
to call for assistance.

                          >> Cursor Controls <<

           --------------------------------------------------
                   Key                    Action
           --------------------------------------------------
                Leftarrow             Character left
                Rightarrow            Character right
                Uparrow               Previous input field
                Downarrow             Next input field
           --------------------------------------------------
           Full screen editing keys

                Del                   Delete character at
                                      cursor position
                Backspace             Destructive backspace
           --------------------------------------------------

                       >> USER REGISTRATION FORM <<

       To register: Complete form below, include your user registration fee
                    (Check, money order or C.O.D.) and send to:

                    ----------------------------------
                              PC-Estimator
                              CPR, Inc.
                              P.O. Box 3465
                              Berkeley, CA 94703
                    ----------------------------------

******************************************************* Clip and Mail *****

                    PC-Estimator User Registration Form
                    -----------------------------------

       PC-Estimator User Registration Fee ............     $ 99.00
       Sales Tax (CA residents add 7.25% tax - $6.45)        .....
       Shipping & Handling charge (Overseas $12.50) ..        4.50
       C.O.D. orders (if applicable - $5.00) .........       .....
       Rush orders (if applicable - $5.00) ...........       .....
                                                         ---------
                                   Total ...........       $ _____

       Indicate payment:
          __ VISA  Card No:_________________________ Exp. date:__________
          __ MC    Card No:_________________________ Exp. date:__________
          __ Check enclosed
          __ Money order enclosed
          __ Send C.O.D.

       Name:_____________________________________________________
       Company:__________________________________________________
       Address:__________________________________________________
       City:__________________  State:________  Zip:_____________
       Telephone number:____________________
       Signature:___________________________
             (Required for VISA/MC orders)


***************************************************************************

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1383

     Volume in drive A has no label
     Directory of A:\

    INSHARD  BAT       901  10-18-88   9:46p
    PCTUTOR  DOC     45274   9-17-90   2:34p
    CONFIG   SYS        23  10-17-88   7:29a
    GO       BAT       512   4-04-90   1:08p
    READ     ME       2048   4-04-90   1:05p
    PCEST    EXE    267120   9-19-90   8:22a
    INSFLOP  BAT       966  10-18-88   5:25a
    FILE1383 TXT      2961  11-19-90   9:48a
            8 file(s)     319805 bytes
                               0 bytes free
