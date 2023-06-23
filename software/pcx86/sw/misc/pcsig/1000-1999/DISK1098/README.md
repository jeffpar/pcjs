---
layout: page
title: "PC-SIG Diskette Library (Disk #1098)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1098/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1098"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCHEDULE MAGIC"

    SCHEDULE MAGIC is designed to automatically calculate and optimize daily
    commercial vehicle schedules. The schedule optimizer finds vehicle
    routes that minimize the number of vehicles needed, thus
    reducing total fleet miles. Until now, the formidable mathematics of
    optimization needed mainframe computers for vehicle scheduling.
    However, this program uses a new method that allows the same
    calculations to be made on any IBM-PC or compatible.
    
    Four sample scheduling applications are included as tutorial example
    problems:
    
    ~ Service: plumbing, heating and air conditioning, appliance
    installation and repair, pest control, etc.
    
    ~ Delivery: wholesale delivery of groceries, drugs, hardware, fuel oil,
    commodities, etc.
    
    ~ Schools: bus routings
    
    ~ Banks: courier vehicles for branch bank pick-up operations
    
    SCHEDULE MAGIC offers a whole new approach and system design based on
    the concepts of grid coordinate locations of all points, automatically-
    calculated straight line distances and travel times, and getting started
    by use of a complete manually-calculated schedule.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1098.TXT

{% raw %}
```
Disk No  1098
Program Title: SCHEDULE MAGIC
PC-SIG version 1

    SCHEDULE MAGIC is a universal vehicle scheduling software system for
automatically calculating and optimizing daily vehicle schedules for a
number of industrial scheduling applications. The purpose of schedule
optimization is to find vehicle routes to minimize the number of vehicles
needed and reduce the total fleet miles of the schedule -- thus directly
improving profitability. Until now, the formidable mathematics of
optimization needed mainframe computers for vehicle scheduling. This
program is a new method -- so powerful that the same calculations can now
be made easily on any IBM Personal Computer.

    Four different scheduling applications are illustrated on the four
tutorial example problems included on the disk. These are: Service: Daily
vehicle schedules for service industries such as plumbing, heating and air
conditioning, appliance installation and repair, electrical contracting,
rug cleaning, pest control, and others; Delivery: Daily vehicle schedules
for wholesale delivery of groceries, drugs, hardware, fuel oil,
commodities, etc; Schools: Daily school bus routings; Banker: Schedules for
courier vehicles for branch bank pickup operations.

    SCHEDULE MAGIC offers a whole new approach and system design, based on
the concepts: using grid coordinate locations of all points, automatically
calculating straight line distances and travel times, and getting started
by use of a complete manually calculated schedule.

Usage: Vehicle Scheduling.

System Requirements: 256K memory, one floppy disk drive, any printer
for hard copy output. You will also need LOTUS or AS EASY AS.

How to Start: Follow the tutorial provided for LOTUS or AS EASY AS in the
file README.DOC. Type MANUAL (press enter) for a printout of it.

Suggested Registration: $49.00

File Descriptions:

MAGIC    EXE  The program.
SERVICE  WKS  The program extended to Service application.
SERVICE  PRN  The print file for Service.
DELIVERY WKS  The program extended to delivery application.
DELIVERY PRN  The print file for Delivery
SCHOOLS  WKS  The program extended to Schools application.
SCHOOLS  PRN  The print file for Schools.
BANKER   WKS  The program extended to Bank application.
BANKER   PRN  The print file for Banker.
SCHOOLSX WKS  The program extended to Schoolsx (larger) application.
SCHOOLSX PRN  The print file for Schoolsx.
README   DOC  Instructions and tutorials.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1098 SCHEDULE MAGIC  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: MANUAL (press enter)                  ║
║                                                                         ║
║ To run the program, type: MAGIC (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
  
                   SCHEDULE MAGIC
                 Copyright 1987, 1988
                 Murray Spitzer Associates
                 6115 Greentree Road
                 Bethesda, Maryland  20817

   I. OVERVIEW
  II. APPLICATIONS
 III. THE COMPUTER ART OF SCHEDULE-MAKING
  IV. THE SCHEDULE MAGIC SOFTWARE SYSTEM
   V. FAMILIARIZATION
  VI. DATA ELEMENTS FOR THE SCHEDULE
 VII. DATA ELEMENTS FOR LOCATIONS (STOPS)
VIII. PARAMETRIC CONTROL OF SCHEDULES
  IX. CREATING A LOTUS PRINT FILE
   X. CREATING A PRINT FILE USING "AS EASY AS"
  XI. POSTSCRIPT:  VERTICAL MARKET SOFTWARE SYSTEMS

I. OVERVIEW

     SCHEDULE MAGIC is a universal vehicle scheduling software system
that automatically calculates and optimizes daily vehicle schedules for
a wide variety of industrial scheduling applications, in businesses
large and small.

     The purpose of schedule optimization is to find new vehicle routes
that minimize the number of vehicles needed, or that reduce the total
fleet miles of the schedule.  Schedule optimization, then, is a manage-
ment technology for directly improving profitability.

     But until now, the formidable mathematics of optimization needed
use of main frame computers for vehicle scheduling.  Then the author of
SCHEDULE MAGIC, Murray Spitzer, invented a totally new solution method,
so powerful that the same calculations can now be made easily on any
IBM Personal Computer.  This invention makes our software system poss-
ible.  It is not available to any other system.

     Under the shareware concept, you now have the opportunity to try
out SCHEDULE MAGIC.  If you find that you can use this system profit-
ably in your business, please share your benefits with the author, by
sending your $49 registration fee to Murray Spitzer Associates, 
6115 Greentree Road, Bethesda, Maryland  20817.  You will receive full
documentation and information on updates.

II. APPLICATIONS

     Four different scheduling applications are illustrated on the four
tutorial example problems included on the disk.  These are:

     SERVICE:  Daily vehicle schedules for service industries such as
plumbing, heating and air conditioning, appliance installation and re-
pair, electrical contracting, rug cleaning, pest control, and others.

     DELIVERY:  Daily vehicle schedules for wholesale delivery of
groceries, drugs, hardware, fuel oil, commodities, etc.

     SCHOOLS:  Daily school bus routings.

     BANKER:  Schedules for courier vehicles for branch bank pickup
operations.

  
  
  
  
  
  
  
  
III. THE COMPUTER ART OF SCHEDULE-MAKING.

     Until now, the external work required for computerized scheduling
has been so burdensome and complex that even today most organizations
do their daily scheduling by hand.

     The designers of SCHEDULE MAGIC recognize the critical importance
of human factors in this computer application.  As a result, we offer
a wholly new approach and system design, based on these concepts:

     1.  We have eliminated use of a burdensome and expensive database
of roads, connections, mileages and travel times.  Instead, SCHEDULE
MAGIC is based on use of grid coordinate locations of all points, and
automatic calculation of straight line distances and travel times.

     2.  We recognize that some routes can be complex enough to defy
the most intricate programmed routines, yet can be readily worked out
by hand.  Accordingly, you begin the SCHEDULE MAGIC computer calcula-
tion with a complete, manually-calculated schedule!  It doesn't have
to be a good one, but it will contain your good solutions to those
route problems.  Mark them with "set-aside" codes.  SCHEDULE MAGIC
then optimizes the rest of your problem.

     3.  Enter your initial schedule on a LOTUS 1-2-3 (or equivalent)
worksheet.  The electronic spreadsheet program then creates an output
print file in readable ASCII format which becomes the automatic
interface to the SCHEDULE MAGIC optimization program.

     4.  Users who do not own LOTUS can use the shareware spreadsheet
program AS EASY AS.  Send your $30 registration fee to the copyright
owner, TRIUS, Inc., 15 Atkinson Street, Lynn, Mass.  01905 as you
request a copy of AS EASY AS.

IV.  THE SCHEDULE MAGIC SOFTWARE SYSTEM

    Delivered to you on disk is the single user program, MAGIC.EXE,
written in microcomputer FORTRAN; four tutorial example worksheets
with suffix .WKS; four corresponding print files with suffix
.PRN; and this documentation.

    SCHEDULE MAGIC should run on any IBM PC or compatible with enough
memory for your electronic spreadsheet; any configuration of floppy
and hard drives; MS/DOS Version 2.0 and higher; and any printer for
hard copy output.  (All output is written to screen; capture it
line by line using Ctrl/PrtScr keys as toggle switches.)  There is no
initialization and no copy protection in this system.

    As noted, you will also need LOTUS or AS EASY AS.  Preserve the
original tutorial worksheets zealously.  To make your own schedule
input, file retrieve a COPY of any ORIGINAL worksheet.  Never change
rows, columns, column-widths, and formats.  Overwrite your new data
into corresponding cells.  Save any new worksheet under its new name,
and save the corresponding output print file under the corresponding
new name.

  
  
  
  
  
  
  
  
  
  
  
V. FAMILIARIZATION.

     Familiarize yourself with SCHEDULE MAGIC in this manner:

     1.  Choose the tutorial print file closest to your own appli-
cation.

     2.  Look at it with EDLIN or a word processor.

     3.  Execute the user program MAGIC.EXE, entering the name of
your print file.  Follow user prompts.

     4.  Now choose the corresponding worksheet.  Use the File
Retrieve command to enter it into your spreadsheet program.  Look
at it again; try making some changes.

     5.  Follow the print file instructions (later in this docu-
mentation) to create a new output print file.  Use a different name
to avoid wiping out the tutorial file.

     6.  Recycle to Step 3, entering the new print file name.

     7.  When you are ready to try out your own schedule, remember
to start with a copy of an original tutorial worksheet, and simply
overwrite your new data.

VI.  DATA ELEMENTS FOR THE SCHEDULE.

     At the top of any worksheet you enter 7 data elements which
control that schedule.  They are:

     1.  Start time of run.  Use the 24-hour clock notation without
punctuation.  For example, 8:30 a.m. is 0830, and 8:30 p.m. is 2030.

     2.  Length of run.  Use the same time conventions.  For example,
a standard 9-hour workday (including 1 hour lunch) is entered as
0900.  SCHEDULE MAGIC does not enter lunch breaks as such.  Simply
add the time to wait time for the nearest stop.

     3.  Vehicle capacity is the maximum capacity of a vehicle in
consistent units such as cubic feet, pounds, or gallons.  For school
bus routing, capacity is the pupil count.

     4.  Enter average vehicle speed in mph.

     5.  The number of vehicles is a memorandum item only; the system
determines the number you will need for a schedule!

     6.  The number of stops in your schedule must be an exact count,
since the system matches this parameter against your input routes.

     7.  Scale of miles.  From your area map, enter the mileage
equivalent to 100 grid coordinate units.

  
  
  
  
  
  
  
  
  
VII. DATA ELEMENTS FOR LOCATIONS (STOPS).

     Location lines begin at Row 16, with an entry for the origination
point of vehicles.  Row 17 shows destination.  They are often the same.
Row 18 must be blank.  Rows 19 through 200 contain your initial sched-
ules as sequences of locations (vehicle stops) for each route, separ-
ated by blank lines between routes.

     Each location line contains these data elements in the correspond-
ing worksheet column:

     A.  Stop Number (a numeric value.)

     B.  Location Name (descriptive).

     C.  Grid Map X Coordinate for that location.

     D.  Grid Map Y Coordinate for that location.

     E.  Capacity at that location in consistent units.

     F.  Wait time at that location (follow time convention).

     G.  Set-aside code, if any, but only in first location of
any route.  (Set-aside code = 1).

     H.  Not Used.  Enter zero.

VIII. PARAMETRIC CONTROL OF SCHEDULES.

     The four tutorial example problems use common data elements, yet
they show how different types of industrial schedules are controlled
parametrically.

     In SERVICE.WKS, the number of stops in any route is limited by
total time.  Time includes time from origin to first stop; waiting
times at all stops; travel times between stops; and return time from
last stop to destination.  This cumulative elapsed time must be less
than the length of the run.  Note that capacity is not a factor here.
Accordingly, set capacity at each location to zero, with vehicle
capacity being some larger number.

     In DELIVERY.WKS, by contrast, capacity is important and may be
the controlling factor in calculating routes, although time limits
must also be observed.

     In SCHOOLS.WKS, capacity of the vehicle is school bus pupil
capacity, and capacity at locations is pupil count at stops.  Here,
capacity will control most routes, but time can also be a limitation.

     In BANKER.WKS, capacity is not a factor; total elapsed time for
any route is its limitation.

     Overall run limitations are:

     Maximum number of routes                          40
     Maximum number of stops per route                 18
     Maximum number of stops per schedule             147

  
  
  
  
  
  
  
  
  
IX.  CREATING A LOTUS PRINT FILE

     To create a LOTUS 1-2-3 print file, execute the following
LOTUS commands:

     /Print
     File
     Enter print file name: (full path name)
     Range:  A1.H200
     Options:
     Margin Top  0
     Margin Left  0
     Margin Bottom  0
     Margin Right  63
     Other Unformatted
     Quit (Options)
     Go
     Quit

X.  CREATING A PRINT FILE USING "AS EASY AS"

     Execute the following commands, then observe instruction below:

     /PrintTo
     File
     Print Name Is:  (full path name)
     Range:  A1.H200
     Options:
     Margin Top  0
     Margin Left  0
     Margin Bottom  0
     Margin Right  63
     P-Length  206
     Quit (Options)
     Go
     Quit

     This operation creates a print file with 3 initial blank lines,
which you do not want; the 200 correct print file lines; and 6
trailing blank lines, which are immaterial.

     You MUST now remove the 3 initial blank lines.  You can do this
easily with EDLIN or with a word processor.  The corrected print
file is now the correct interface file for SCHEDULE MAGIC.

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
XI. POSTSCRIPT:  VERTICAL MARKET SOFTWARE SYSTEMS

     Just as the shareware concept has pioneered a valuable new type
of activity in the software business--good, low-cost software on a
tryout basis--we think that SCHEDULE MAGIC is another pioneering
activity for business itself.

     The term "vertical market software" refers to systems used in
specific business to handle the specialized procedures of that
business.  Thus, vertical market software cannot expect the widespread
distribution of a spreadsheet or word processor, and accordingly can
be a very expensive product for a limited number of users.

     What we have done with SCHEDULE MAGIC is to identify the universal
elements of vehicle scheduling systems, for a great variety of business
applications, and standardize those elements so that a single software
package can be widely used, even though it remains as vertical market
software.  The second thing we have done, of course, is to offer this
unique product at shareware prices.

     So great is the leverage in schedule optimization, that ONE daily
optimized schedule can pay for your shareware registration fee of $49.
(If you use AS EASY AS, their fee is $30.)  So, please remember to
send the authors your check--and tell all your colleagues about
the SCHEDULE MAGIC vertical market software system!

    




ADDENDUM:  SCHOOLSX.WKS and its print file SCHOOLSX.PRN contain a
larger school bus routing problem of 88 bus stop locations.  Run
this print file to see how the behavior of SCHEDULE MAGIC changes
as problems increase in size, and to see how the system can find
a "minimum-route" solution.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1098

     Volume in drive A has no label
     Directory of A:\

    BANKER   PRN     12846   2-24-88   9:15p
    BANKER   WKS     21243   2-24-88   9:09p
    DELIVERY PRN     12846   2-25-88   6:56p
    DELIVERY WKS     21144   2-25-88   6:54p
    FILE1098 TXT      2606   6-20-88   3:34p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   6-08-88   4:50p
    MAGIC    EXE    137338   2-26-88   8:11p
    MANUAL   BAT       147   6-08-88   4:50p
    README   DOC     12708   3-01-88   3:48p
    SCHOOLS  PRN     12846   2-24-88   8:48p
    SCHOOLS  WKS     21776   1-20-88  12:58p
    SCHOOLSX PRN     12808  10-20-87   2:24p
    SCHOOLSX WKS     14262  10-20-87   2:26p
    SERVICE  PRN     12846   2-24-88  10:15p
    SERVICE  WKS     21144   2-24-88  10:13p
           16 file(s)     317138 bytes
                           36864 bytes free
