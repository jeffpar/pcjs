---
layout: page
title: "PC-SIG Diskette Library (Disk #2265)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2265/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2265"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMPLE PROJECT"

    Here 's a project management program that features Gantt charts,
    outline mode, risk analysis, pro-forma financial statements, ROI/ATO
    analysis and cash flow analysis.
    
    This is not a fancy-looking program -- there are no flashy screens or
    displays -- but it's a very workable one.  The program is run by
    command lines throughout its various different screens, each with a
    prompt line that explains the purpose of the highlighted item.
    
    SIMPLE PROJECT could prove to be an invaluable tool for a project
    manager or a student of the field.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EASYPROJ.DOC

{% raw %}
```









                      Easy Project

                      User's Manual






















Easy Project Version 1.0
December 13, 1989

Published by:
     William H. Roetzheim & Association
     13518 Jamul Drive
     Jamul, CA  92035
     (619) 669-6970Table of Contents

1.   Terms and Conditions
          Shareware Concept
          Other Software Available
          Copyright
          Limited Warranty
          License Agreement
          
2.   Introduction
          How to Use This Manual
          Easy Project Overview
          Hardware Requirements
          Installing Easy Project
          Comments, Suggestions, Bugs, Etc.

3.   Getting Started
          Running Easy Project
          Using the Menu
          Easy Project Functional Flow
          Easy Project Screen Oriented Data Entry

4.   Setup
          Organization
          Display
          Version
          Reproduce

5.   Plan/WBS
          Add
          Modify
          Delete
          Range
          View
          Goto

6.   Plan/Cost
          Project
          Standard Product
          Labor Intensive

7.   Plan/Dependencies
          Modify
          Designate

8.   Plan/Risk

9.   Plan/Schedule
          Modify
          Range
          Shift
          View

10.  Track
          Timesheets
          Expenses
          Report
          Post

11.  File

12.  Report
          Options
          WBS
          Cost
          Dependencies
          Risk
          Schedule
          Evaluate

13.  Reference

Terms and Conditions









Shareware Concept

     Shareware is software which is distributed free (or almost free) so that
you can try it.  If the software is useful to you, you are then asked to send a
small payment directly to the author of the software.  The entire concept of
shareware software will only work if people are honest in forwarding the
payments to the individual who worked to develop the software in the first
place.

     If you find this program useful, please send $25 along with your name
and address to William H. Roetzheim, 13518 Jamul Drive, Jamul, CA  92035. 
Registering your copy of the software entitles you to customer support and
a free subscription to our project management newsletter.  For an additional
$10 ($35 total) you will receive these benefits plus the complete source code
to Easy Project version.

Other Products

     William H. Roetzheim & Associates also offers an advanced project
management program that features:

     o    Graphical, iconic user interface with mouse support

     o    Up to 10,000 tasks.

     o    Outline Mode

     o    Full support for DOD-STD-2167A and C/SCSC cost accounting

     o    LAN Support

     o    Graphical reports, including histograms and PERT plots

     o    Much, much more

     For more information, call (619) 669-6970 for descriptive literature.

Copyright

     Copyright 1988 by William H. Roetzheim and Associates.  All rights
reserved worldwide.  This document, and the program material included with
it, are the exclusive property of William H. Roetzheim and Associates.  You
are granted the right to reproduce this document and the program disk with
the following constraints:

     o    No part of the program may be sold (although a nominal
          duplication fee is permissible).

     o    The files EASYPROJ.EXE, EASYPROJ.DOC, and XXXX0001
          must be included with any copy distributed, and no changes may
          be made to these files.

     o    Package distributions (i.e. bundling the software with hardware
          or other software) must pay a license fee of $5 per copy to
          William H. Roetzheim & Associates.

Limited Warranty

     This program is sold strictly "as is", with no warranties express or
implied.  We will not be liable for any damages, including consequential,
indirect, or special damages (including loss of profits or any other commercial
damage).Introduction









How to Use This Manual

     This manual assumes that you are familiar with the basics of your
computer's operating system, the keyboard layout of your computer, and basic
concepts of project management.  If necessary, begin by reviewing your
computers owner's manual for basics about your computer.  If you are not an
experienced project manager, you may want to refer to the book "Structured
Computer Project Management" (Prentice-Hall, 1988).

     Easy Project makes extensive use of command line menus.  When we
are describing a specific menu option, we will describe it using the complete
path from the top level menu.  For example, if a menu is reached by selecting
Plan from the top menu followed by WBS from the next menu level, we
would show this option as Plan/WBS.

     By all means, read this manual while sitting in front of your computer. 
Easy project displays hundreds of different screens.  When writing this
manual, we assume that you will be following along with the text by pressing
the appropriate options on your computer.

Easy Project Overview

     Easy project is a project management tool specifically designed to
assist computer professionals in the following areas:

     o    Evaluating projects to determine risk, financial attractiveness,
          and cash flow.

     o    Planning all aspects of a project, including task decomposition
          (work breakdown structure), labor and financial requirements,
          task inter-relationships (dependencies), risk, and the actual
          schedule.

     o    Tracking expenditures, including both hours and dollars, as they
          are incurred.  Predicting overruns or underruns as early as
          possible.

     To the greatest extent possible, we provide these capabilities in a user
friendly, flexible fashion which simplifies the process of entering and
maintaining project information.  Some of the more innovative Easy Project
features in this area are:

     o    Use of a hierarchical approach to entering and viewing project
          information.

     o    Project windowing support.

     o    Screen oriented data entry with field specific prompts displayed.

Hardware Requirements

     Easy Project supports the IBM-PC and fully compatible computers
equipped with at least one disk drive and 320 Kbytes of available RAM.  The
more memory you have installed the larger your project can be.  Remember
that memory resident programs subtract from available memory and reduce
the number of tasks you can have in your project.  The exact number of tasks
you may create on your system is displayed on the Plan/WBS screen, and will
be about 1,000 for a system with 640 Kbytes of RAM.

     Easy Project supports both monochrome and color displays.  Because
many users may switch between computers with monochrome and color
displays, the program senses the type of display and automatically displays
either colors or black and white as appropriate.  If you are using a
monochrome display which acts like a color display using shades of green (or
amber), you will want to use the DOS mode command to put your display in
the black and white mode (mode BW80 or mode mono) prior to running
Easy Project.

     Easy project supports any printer which is capable of displaying the
IBM enhanced character set.  This includes the IBM Pro-Printer and most
Epson printers.  If your printer does not support the IBM enhanced character
set, all reports should work except Report/WBS/Hierarchy and
Report/Schedule/Gantt.  The Setup/Organization menu options lets you
designate if reports should be sent to the parallel port (default) or the serial
port.  If you are using lpt2: or com2: rather than lpt1:/com1:, you must use
the DOS mode command to redirect printer output to the appropriate
communication port prior to running Easy Project.

Installing Easy Project

     Easy Project is distributed on a single disk, which is not copy
protected.  As with all software, begin by making a backup copy of the Easy
Project distribution disk and putting the original away in a save place
(diskcopy or copy *.* work fine).  If you have a hard disk, create a new
directory called \easyproj (mkdir c:\easyproj) and copy the Easy Project files
into this directory.

Comments, Suggestions, Bugs, Etc.

     If you would like to see improvements, tell us your ideas.  If you wish
that Easy Project interfaced with your favorite program, let us know exactly
what type of information you would like to transfer.  Of course, we are always
grateful for any information you can provide us which will help us find any
program defects (bugs).

     When writing to us, please include as much specific information as
possible.  For defects, try to isolate the program to the point where you can
consistently reproduce the symptoms.  Then give us specific instructions which
will allow us to see the problem ourselves.  You may want to send us a disk
with a sample data file on it if this is necessary to see the problem.

     When writing, our address is:

          William H. Roetzheim & Associates
          13518 Jamul Drive, Jamul, CA  92035
          (619) 669-6970Getting Started








Running Easy Project

     While it runs, Easy Project creates temporary files on the default drive. 
For this reason, you should ensure that your default drive is the
drive/directory containing the Easy Project program.  On floppy disk systems,
this can be accomplished by setting the drive to the appropriate floppy
designator (i.e. A:).  On hard disk systems, you would type in C: followed by
changing directories to the Easy Project directory (i.e. cd \EASYPROJ).

     Easy project uses your system date as set within DOS.  It is important
that your computer date is accurate.  If this is not automatically set for you,
use the DOS date command to set the correct date prior to running Easy
Project.

     If your computer has a color display card (EGA, VGA or CGA) but
a black and white monitor, you should use the DOS mode command to set
your display to black and white mode.

     To run Easy Project, type in EASYPROJ <cr>.

Using the Menu

     At this point, you may want to run Easy Project and follow along on
your computer as you read the manual.

     All top level choices in Easy Project are made using a command line
menu displayed at the top of your screen.  The current choice is the
highlighted item.  You may change the current choice using the arrow keys
or the space bar.  Line three on your screen displays a specific summary of
what that option is used for.  Use the arrow keys now to see how this works.

     You may select a menu item by highlighting it and pressing return, or
by pressing the keyboard key matching the first letter of your choice (i.e. to
choose Plan you would press 'P').

     Quit always brings you to the next higher level in the menu hierarchy. 
Pressing ESC (escape) is the same as pressing quit.

Easy Project Functional Flow

     The Easy Project top menu contains the following choices:

     o    Plan

     o    Track

     o    File

     o    Report

     o    Setup

     o    Quit

     Setup is used for operations which are normally performed only rarely,
including system initialization.  We will look at the Setup option in more
depth in the following chapter as part of our Easy Project system
initialization, but Setup is not part of the normal project management
functional flow.

     The normal project planning flow looks like this:

     Plan - Report - Track

     You plan a project, print reports based on your plan, then continuously
track the project during its life (printing periodic reports based on the
project's progress).  Obviously, you use File to save and retrieve your project
to disk during its life.

     When planning a project, we have found that it is best to perform the
work in five distinct steps, as follows:

     1.   Plan/WBS

     2.   Plan/Costs

     3.   Plan/Dependencies

     4.   Plan/Risk

     5.   Plan/Schedule

     Plan/WBS allows you to generate a hierarchical work breakdown
structure (WBS) describing all tasks to be performed and hardware to be
delivered.  This initial thinking process should not be clouded by cost
considerations.  After a WBS is roughed out, specific costs and resource
requirements can be estimated for each task using Plan/Costs.  Dependencies
and risks are specified using Plan/Dependencies and Plan/Risk respectively. 
Finally, all of this information serves as an input to preparation of a
reasonable project schedule using Plan/Schedule.

     With this general view of project mangement in mind, the Easy Project
menu hierarchy shown below should make sense.  Items followed by an
asterick (*) contain menu levels not shown.

     Plan
          WBS (*)
          Costs (*)
          Dependencies (*)
          Risk (*)
          Schedule (*)
     Track
          Timesheets
          Expenses
          Report
               Timesheets
                     Employee
                     Project
               Costs
                     Supplier
                     Project
          Post
     File
          Save
          Recall
          Purge
          Directory
     Report
          WBS
               Hierarchy
               Detail
          Cost
               Dollars
               Hours
               Loading
          Dependencies
          Risk
          Schedule
               Task
               Gantt
          Evaluate
               ROI/ATO
               Balance Sheet
               Income
          Options
               Print_Queue
                     Activate
                     Print
                     Deactivate
               Destination
                     Screen
                     Printer
                     Disk
     Setup
          Organization
          Display
          Version
          Reproduce

Easy Project Screen Oriented Data Entry

     Throughout the program, Easy Project uses a screen oriented data
entry approach.  Although we won't actually setup our organizational
parameters until the next chapter, let's use this screen as a sample of Easy
Project's general approach to data entry.  From the main menu, select
Setup/Organization.  Ignore the meaning behind the displayed fields for the
moment.

     A data entry screen consists of multiple data entry fields.  You can use
the up and down arrow keys on your keyboard to advance from field to field. 
Try this now.  Notice that at the bottom of the screen, down arrow takes you
to the top of the screen.  Similarly, an up arrow key from the first field will
take you to the bottom of the screen.  Return (<cr>) and TAB work the
same as down arrow.  Back TAB (shifted TAB) works like an up arrow.

     From all data entry screens, your keyboard's HOME key will take you
to the first valid field.  END takes you to the last valid field.  Try this.

     Some data entry field access an array of information.  On the
Setup/Organization screen, this applies to the fields associated with
employees, suppliers, and lease (at the bottom).  Move your cursor down to
the employee # field at this point (it should currently have a value of zero). 
Notice that if you leave the field value at zero and press down arrow, you
skip the fields for employee name and cost.  This is because employee zero
is not used.  Move back to the employee # field and change the zero to 1. 
Now, pressing down arrow allows you to enter a value for the Name and Cost
of employee number 1.  Moving back to the employee # field, you can enter
the number 2 to enter data for the second employee.  By entering a number
between 1 and 249 in the employee # field you can enter data for up to 249
different employees.

     Use the HOME key to move your cursor back to the first field on the
screen (Name).  Let's look at some of the editing features available to us
within a specific field:

     o    For fields which may not be obvious, the upper right corner of
          your screen displays a prompt window.  You may have noticed
          that as you moved your cursor around the form, the prompt
          displayed in this window matched the active field.

     o    The field length shows you how many characters you may type. 
          Your cursor will not advance past the end of the data entry
          field.

     o    By default, data is entered in the overwrite mode.  Pressing the
          INSERT key on your keyboard toggles between insert and
          overwrite mode.

     o    BACKSPACE deletes the character to the left of your cursor
          (like a typewriter).  DEL deletes the character under your
          cursor.

     o    Pressing <cr>, up arrow, down arrow, TAB, or backtab accepts
          the field and advances the cursor (active field).  When the field
          is accepted, the system automatically checks the field for validity
          and formats your entry if appropriate.

     When you are done entering data into a form, you can take two
possible actions.  If you changed your mind and would like to exit without
making any of your changes permanent, you can press ESC.  If you would like
to exit and save your changes, you must press the F10 key (function key 10). 
F10 is used throughout Easy Project as an 'accept screen' key.

     Press ESC at this point to exit Setup/Organization without making any
changes permanent.  In the following chapter we will actually enter the
proper values.Setup








     Setup contains options which are used relatively infrequently. 
Selecting Setup from the main menu displays the following sub-menu:

     o    Organization

     o    Display

     o    Version

     o    Reproduce

     o    Quit

     Each of these options will be discussed individually in the following
sections of this chapter.

Organization

     This option allows you to set system parameters which are used by
Easy Project for all projects.  The fields have the following meanings:

     o    Name/Addr:  These four free-form fields are used to enter your
          company name and address.  The last line may be used for the
          company phone number, if desired.  These four lines are
          printed at the top of all reports output by Easy Project.

     o    Optimum Constant 1 and 2:  Easy Project uses the total man-
          power requirements for each task to determine an optimum task
          duration in days.  For extremely small tasks, the optimum
          duration is based on one person working full time on the task. 
          For larger tasks, the optimum duration is calculated as follows:

               Optimum = constant_1 * mean ** constant_2

          You can think of constant 1 as a scaling factor, and constant 2
          as a number which determines what happens as tasks get bigger. 
          Raising or lowering constant 1 will raise or lower the optimum
          duration for all tasks.  Seting constant 2 to 1.0 will result in task
          durations being linearly related to manpower requirements.  A
          number less than 1.0 says that bigger tasks should have more
          people working on them and thus take less time per man-hour. 
          Our experience has shown that a value of 4.0 for constant 1 and
          0.60 for constant 2 works well for most companies.

     o    Penalty Constant 1 and 2:  If desired, Easy Project will predict
          cost penalties associated with completing a task in less than the
          optimal duration (crashing the project).  This option is discussed
          fully in the chapter of this manual covering Plan/Schedule.  The
          core of the calculation looks at the following ratio:

               Optimum duration ** constant_1
               -------------------------------
               Actual duration ** constant_2

          We have found that a value of 2.0 for constants 1 and 2
          matches observed project performance well for most companies.

     o    Discount Rate:  This number is entered to allow calculation of
          discounted cash flows, discounted ROI/ROA, etc.  You may use
          your estimate of the future inflation rate as an approximation.

     o    System Printer:  This field should normally be left at lpt1:.  If
          you use a serial printer (RS-232), set this field to com1:.  You
          must use the DOS mode command to redirect output if you
          wish to use lpt2: or com2:.

     o    Average AP and AR Delay:  Easy Project uses these values
          when preparing pro-forma financial statements and profit
          analysis.  AP delay is the average number of months you delay
          paying your bills for hardware (Easy Project assumes that your
          employees are paid in the month they work).  AR delay is the
          average number of months you expect your customer to delay
          paying your invoices sent to them (this applies to hardware and
          labor).  AR delay should include any acceptance periods
          required by the contract.

     o    Burden Rates:  When using Easy Project, you will enter direct
          costs for items (actual employee salaries, your cost for
          equipment, etc.)  All companies then add a burden (overhead)
          charge to the direct cost to determine their burdened cost. 
          Most companies have more than one burden rate.  For example,
          hardware might be burdened at a rate of 1.20, labor at a rate
          of 2.1, maintenance activities at 1.7, and inter-company work at
          1.05.  Burden category 0 (which is valid) is always 1.0, i.e no
          burden applied.  On this screen, you can modify the other five
          burden categories to match those in your company.  See your
          accountant for the actual values to use, if necessary.

     o    Markup Rates:  When using Easy Project, your price to the
          customer is determined by applying a markup to your burdened
          cost for an item.  As with burden rates, markup category 0 is
          1.0 (i.e. no markup).  The other five markup categories can be
          entered using this screen.  Once again, see your accountant for
          the actual values to use.

     o    Employees:  By entering various employee numbers, you can
          enter up to 249 different employees (names and hourly cost). 
          The hourly cost is entered as dollars and cents.  We recommend
          that you use the first 20 numbers for generic categories of
          employees (programmer, system analyst, etc.) and the remainder
          of the numbers for actual employees (Jane Doe).  In this way
          you can initially plan a project in generic terms, substituting
          individual names as you assign people to tasks.  Note that these
          employee reference numbers will normally be different than
          your company employee numbers used for accounting purposes.

     o    Suppliers:  You can enter up to 99 different supplier names. 
          These are used when recording expenses charged to your
          project.

     o    Lease:  If you will never deal with sales of hardware as part of
          your project, or all hardware is sold (not leased), you can skip
          this area completely.  If your project may include leasing some
          hardware to your customer, these fields are used to define the
          lease terms.  The month you deliver the hardware is month
          one.  For that month and all subsequent months of the lease,
          you will need to enter the percentage of the price which you bill
          as the monthly lease payment and the percentage of your cost
          which you depreciate as leasehold inventory depreciation.  For
          a five year lease, you do this for months 1 through 60.  Easy
          Project handles leases of up to 10 years.  Note that if you make
          multiple deliveries during the project, each will be analyzed for
          the entire lease term starting with the delivery date.

     Remember, press F10 to accept the screen and save the data, ESC to
exit without saving.

Display

     Easy Project automatically senses if you are using a color or
monochrome display.  If you are using a monochrome display which displays
shades of gray, you may need to use the DOS mode command to set your
display into black and white mode for optimum clarity.

     If you are using a color display, you may use this option to modify the
display colors used by Easy Project.  The colors modified apply to the
following:

     o    Screen:  Normal screen display

     o    Report:  Used when printing reports to the CRT

     o    Input:  Used for data input windows

     o    Prompt:  Used for prompt windows

     o    Error:  Used for error windows

     o    Level 0 - 9:  Used for WBS displays from various plan menus
          (Plan/WBS, Plan/Costs, etc.)  Level 0 would be the project,
          level 9 would be the most low level, detail sub-task in the
          hierarchy.

     The following table might be helpful when changing colors:

     ForegroundBackground Color
     0               0              Black
     1               16             Blue
     2               32             Green
     3               48             Cyan
     4               64             Red
     5               80             Magenta
     6               96             Brown
     7               112            White

     To use the table, simply pick a desired foreground and background
color, add the two values together, and enter this value in Easy Project.

     After you change each value, the foreground and background color
selected is displayed next to your entry on the screen.

Version

     This option displays your version number and an address to write with
comments, suggestions, etc.  This is also the address to use when registering
your copy of Easy Project ($25 to register, $35 to register and receive source
code).  Registration includes a free subscription to our newsletter.

Reproduce

     If this is a restricted (limited capability) version, this option allows you
to make a reproduction for use by a friend.  If this is a full version of Easy
Project, this option does not do anything.Plan/WBS








     The first step in planning a project is to quantify the specific tasks to
be performed (and items to be delivered).  This is done using the Plan/WBS
menu option from the main menu.  When selecting Plan/WBS, Easy Project
checks to see if a project is already in memory (already entered or loaded
with the File/Restore option).  If not, a new project is created and you are
asked to fill in a project definition screen.

     Select Plan/WBS and complete the project definition form (Name,
Short name, Manager, Priority, and Description).  Use the name "Project
Test" for the project name.  Remember to use the prompt window for
explanations of specific fields.  When you are done, press F10 to accept the
screen.

     Let's take a minute and examine the Plan/WBS screen.  The top three
lines are our familiar command line menu (although the options are new). 
The bottom line of the display is an informational line, and currently shows
us the maximum number of tasks we can enter (determined by our available
RAM) and the current display view (described later in this chapter).  The
center of our screen shows a WBS data entry/display area with the following
information displayed:

     o    #:  Sequential task number

     o    T:  Task type.  Limited to 'P' for project name, 'S' for standard
          products (non-labor related deliverables), or 'L' for labor
          intensive tasks.

     o    Name:  Task name.  We will see that the tasks at different
          levels in our project hierarchy are automatically indented
          appropriately.

     o    WBS Number:  Based on the WBS hierarchy, WBS numbers are
          automatically assigned.  As you delete, move, add, or copy tasks
          the WBS numbers are automatically kept up to date.

     o    CHRG:  Automatically assigned charge number.  Unlike the
          sequential number (which changes as tasks are inserted or
          deleted), the task charge number will stay matched to a given
          task throughout the life of the project.  When tracking expenses,
          this number will be used to record dollars spent.  Note that
          these Easy Project charge numbers will probably not be the
          same as the charge numbers your company uses for accounting
          purposes.

     o    Category:  We will see that Easy Project uses a sophisticated
          method of categorizing computer related tasks.  This column
          shows the category designation for each task.

     Notice that one task in the WBS is highlighted.  This is the current
WBS task, and we will refer to this as the WBS cursor in this document.  As
you enter tasks in your WBS, you will find the following keys useful:

     o    Right arrow, left arrow, space:  Continue to move the current
          command line menu choice.

     o    <cr>:  Continues to accept the highlighted command line menu
          choice.

     o    First letter of menu choice:  Continues to accept that specific
          command line menu choice.

     o    Up arrow and Down Arrow:  Move the WBS cursor up or down
          one task (as appropriate).

     o    HOME and END:  Move the WBS cursor to the first or last
          task in the hierarchy.

     o    PAGE UP and PAGE DOWNP:  Display the next or previous
          page of the hierarchy.

     o    Control PAGE UP (^PAGE UP) and Control PAGE DOWN
          (^PAGE DOWN):  Move the WBS cursor to the next or
          previous task at the same level as the current task.  This option
          is userful when moving down the hierarchy looking at top level
          tasks only.

     o    DEL and INS:  Works the same as selecting Delete and
          Add/Labor-Intensive from the menu.

     The command line menu for the Plan/WBS option of Easy Project
offers the following choices:

     o    Add

     o    Modify

     o    Delete

     o    Range

     o    View

     o    Goto

     o    Quit

     We will describe each of these options in detail in the sections which
follow.

Add

     A project consists of two basic types of tasks.  Standard Products are
items which you company purchases for a fixed cost, marks up, and sells to
the customer.  There is no chargeable labor associated with these items. 
Examples are computers, disks, some sub-contracted maintenance, off the
shelf software, etc.  Labor Intensive tasks include all tasks in which you
charge labor hours to the task/project.  Examples include installation,
software development, training, etc.

     Let's begin by entering a standard task called 'Mini-computer'.  use the
Add/Standard-Product menu choice to display the data entry form.

     Enter each field (Name, Short Name, Priority, Description, Milestone),
using the prompt window for assistance as needed.  Note that the category
field is automatically set to standard product, and that Easy Project attempts
to automatically come up with a reasonable abbreviation to be used in the
short name field.  When you have entered all fields, press F10.  Easy project
then assumes that we would like to enter another standard product task at
the same level.  Press ESC to terminate data entry.  Your task is now
displayed on the screen.

     HINT:  The description field can be used for part numbers,
government contract CDRL numbers, or externally defined WBS or task
numbers.

     Now let's try entering another standard product called 'Operating
System'.  Position the WBS cursor on 'Mini-Computer' and select
Add/Standard-Product.  The computer then asks you to show the proper level
for the new task.  The right and left arrow keys move the cursor in the small
display window.  Leaving the cursor in column 1 will place the new task at
the same level as the task 'Mini-computer'.  We want to put our new task at
the same level as 'Mini-computer', so we will leave the cursor to the left. 
Press <cr> or F10 when you have selected the proper location for your new
task.  Complete the data entry form, press F10 to accept the entry, and press
ESC to terminate data entry.

     Addint labor intensive tasks works exactly the same way except that
you are required to enter the task's category.  Cost reports will show the cost
(actual and percentage) for each category of work.  This information is useful
when checking the validity of cost estimates.  Labor intensive categories are
a bit tricky at first, because they must abide by the following four rules:

     1.   At the top of your hierarchy, categories consist of one or more
          levels of tasks falling into one of the following categories: 
          hardware;  software;  training;  installation;  support; 
          maintenance;  or other.

     2.   For all categories exept software, all lower levels are
          automatically set to the same category as the parent.

     3.   Under a software task, lower level tasks can be any of the
          following categories:  system design;  detail design;  code;  unit
          testing;  integration;  system test;  or user doc.

     4.   Under each of the softwrae specific categories (code, unit
          testing, etc.), you may use a free-form name.  For example,
          under code you may have tasks with categories of 'Report
          modules', 'Data entry modules', 'Inventory modules', etc.

     HINT:  The task categories have been defined as shown for a reason. 
Many project managers forget to properly plan tasks in one or more of these
areas.  Use the available categories list as a checklist to be sure that you are
not forgetting something.

     Enter the following short WBS into the system using Add/Standard-
Product and Add/Labor-intensive.

     Project Test                   P    system
          Mini-Computer                  S    Std. product
               Computer                  S    Std. Product
               Disk                      S    Std. Product
               Terminals                 S    Std. Product
          Operating System          S    Std. Product
          Develop Application       L    Software
               Design application   L    system design
               Code application     L    code
               Test application     L    system test
          Develope IO card          L    Hardware

     Note that, although the system will not prevent you from putting labor
intensive tasks as sub-tasks of standard products (or vice versa), this should
not be done.

     HINT:  When defining your WBS, it is normally best to begin by
defining all project tasks at level one first (i.e. start by thinking of the big
picture).  When you are comfortable that all areas have been covered, then
begin adding subtasks at ever increasing levels of detail.

Modify

     Selecting Modify allows you to change a task which you have already
entered.  Simply move your WBS cursor to the task you wish to modify and
select Modify from the command line menu.

Delete

     You may delete tasks by pressing Delete from the command line
menu, or by pressing the DEL key on your keyboard.  The task under the
WBS cursor is deleted and the WBS is automatically renumbered.  Note that
the system does not automatically delete sub-tasks when you delete a task.

Range

     The Range features of Easy Project allow you to perform various
actions on a range (contiguous set) of tasks.  Selecting Range from the
command line menu displays the following sub-menu:

     o    Flag

     o    Move

     o    Copy

     o    Delete

     o    Insert

     o    Extract

     o    Shift

     o    Unflag

     These options perform the following actions:

     o    Flag:  Flag is used to designate a range.  Flag is pressed once
          to indicate one end point of the range (at the current WBS
          cursor location), the WBS cursor is moved to the other end
          point, and flag is pressed again.  Note that the current range is
          shown in the 'T' column of the WBS screen.  The range remains
          flagged until you press Unflag.

     o    Move:  To move a range of tasks you should flag the range,
          move the WBS cursor to the task directly above the desired new
          location, and press Move.

     o    Copy:  Copy range works exactly like move range, except the
          tasks are copied to the new location.

     o    Delete:  The range of tasks is deleted.

     o    Insert:  You will be prompted for a file anem (optionally
          including a drive and path).  The file must be a task file which
          was created using the Range/Extract option (below).  The
          system will then attempt to load the file into the WBS directly
          under the WBS cursor.

     o    Extract:  After entering a file name, the flagged range of tasks
          is copied to the named file.

     o    Shift:  Shift allows you to change the level of indentation in the
          hierarchy for a range of tasks.

     o    Unflag:  Clears all range flags.

     HINT:  Range/Extract and Range/Insert can be used to move blocks
of tasks from one project to another.  These options may also be used to
build a library of project tasks which can be inserted and modified as
required.

View

     Options under View control the way the project information is
displayed on your screen.  Selecting View makes the following sub-menus
available:

     o    Increase

     o    Decrease

     o    All

     o    Window

          -    Split

          -    Clear

          -    Jump

     When describing these options, the word level will be used to describe
a task's level in the hierarchy.  Tasks are at levels zero (the project top)
through nine (the lowest, most detailed sub-task).

     o    Increase:  By default, Easy Project displays your entire task
          hierarchy.  This is often inconvenient when attempting to get
          an overview.  The current view displayed in the lower right
          corner of your screen is the lowest level task which will be
          displayed.  The default is 99 (i.e. display all tasks).  Increase is
          used to increase the level of detail displayed (after it has been
          decreased).  Use decrease to decrease the view all the way
          down to 1 to see how this works.

     o    Decrease:  This option decreases the level of task detail shown. 
          Continuing to press decrease will reduce the view to 1.

     o    All:  This option sets the display view to 99 (display all).

     o    Window:  The WBS screen may be split into two independent
          windows.  View/Window/Split splits the screen into two
          windows.  View/Window/Jump moves the WBS cursor from
          one window to the other.  View/Window/Clear clears the
          window and restores the screen to a single display.

     HINT:  Using the window feature and move or copy range, you can
jump back and forth in your hierarchy to easily perform cut and paste
operations.

Goto

     Goto is used to reposition the WBS cursor directly on a specific task. 
Simply enter the sequential number of the task of interest.Plan/Cost








     After you have defined the project tasks using Plan/WBS, you need to
allocate resources (dollars and man-hours) to the project tasks.  This is
accomplished using Plan/Costs.  Select Plan/Cost at this point.

     As you can see, the data entry/display screen is very similar to the
Plan/WBS screen.  The informational line on the bottom of the display no
longer displays the maximum number of tasks allowed (you can't enter new
tasks from this screen).  Instead, this line now displays the total project direct
cost, burdened cost, and price.  This is handy when estimating costs to ensure
that your total cost will make sense.

     Four new columns have been added to the main display:  Cost; B; M;
and Price.  Cost is your entered direct cost for this particular task.  B is the
burden category, and M is the markup category to be applied to this task.  A
value of 0 for B or M signified no burden/markup.  A value of 1 through 5
will apply the appropriate burden/markup rate as entered in the
Setup/Organization screen.  Price is the final price to the customer after
applying the burden and markup.

     The command line menu is also somewhat different, offering these
choices:

     o    Modify

     o    View

          -    Increase

          -    Decrease

          -    All

          -    Window

               *     Split

               *     Clear

               *     Jump

     View and Goto work exactly as described for Plan/WBS.  Modify is
used to enter resource estimates for each task in the project hierarchy.  The
specific data entered varies based on the task type ('T' column) for the
current WBS cursor position.  The three general categories are:

     o    P:   Project

     o    S:   Standard Product

     o    L:   Labor Intensive

     The following sections of this chapter address each of these three
possibilities individually.

Project

     Move your WBS cursor to the top task (pressing HOME will do this)
and press Modify.

     Customers typically pay for labor related work using one of the
following four methods:

     1.   Payment in full on delivery of the final product.

     2.   Monthly payments of cost plus profit during the project (based
          on actual expenditures).

     3.   Monthly payment of costs during the project, payment of profit
          on delivery (common on cost plus fixed fee government
          contracts).

     4.   Payment of the final price in periodic installments during the
          work.

     This data entry screen allows you to select which of these methods is
appropriate for your project.  If you select periodic installments, this option
also allows you to enter the number of installments agreed to in the contract
(1 - 9).  This information is used when preparing pro-forma financial
statements and for modeling project financial performance.  Press ESC or
F10 to exit this screen.

Standard Product

     Move your WBS cursor to a standard product WBS element and press
Modify.

     Let's start by explaining the cost box displayed in the upper left corner
of your screen.

     o    Line 1 tells you if the task being modified is a node or not.  A
          node simply means that the task has no sub-tasks defined.

     o    Line 2 tells you the cost for this task's parent in the hierarchy. 
          If the selected task is level 1 (i.e. the parent is the project), this
          line will tell you that the task is level one.

     o    Line 3 tells you the cost for siblings of this task.  This number
          can be used with the displayed parent cost when performing top
          down costing (or design to cost).  You basically modify the cost
          estimate for all siblings until they equal the already estimated
          cost for the parent.

     o    Line 4 tells you the cost for this task's children.  This number
          is used when performing bottom up cost estimating (you
          estimate the children first, then set this task equal to the total
          cost for the children).

     Now let's look at the bottom half of the screen, looking at the fields
in the data entry form.  The following fields are user fields (the others are
display only):

     o    Unit Cost:  This is the cost for one of the described items.

     o    Quantity:  This is the quantity to be sold.  This field multiplied
          by the unit cost (above) determines the net cost.  The quantity
          field can only be entered for nodes.

     o    B-cat and M-cat:  These fields show the burden and markup
          category to be applied to this task.  These fields can be changed
          only for level one tasks.  All lower level tasks automatically
          have the same burden and markup category as their level one
          parent.

     HINT:  If you have two markup categories with different profit rates
(7.5% and 10%, for example), you can easily perform what-if planning by
varying the markup rate field for level one tasks.

     o    Lease:  This field also applies only to level 1 tasks (sub-tasks
          are automatically set accordingly).  An 'n' in this field implies
          that the product is sold, a 'y' in this field implies that the
          product is leased to the customer.  Leased items are modeled
          (financially) using the lease terms defined in
          Setup/Organization.

     Press ESC or F10 to terminate entry for standard product cost
estimates.

Labor Intensive

     Move your WBS cursor to a labor intensive task which is also a node
(no children) and press Modify.

     The financial information displayed in the upper left corner of the
screen is identical, but the data entry form now includes a resource matrix.

     The fields for cost, B-cat, Burdened cost, M-cat, and price are identical
to those described for a standard product.  As before, the burden and markup
category can only be entered for level one tasks.  The field labeled "P:" is the
penalty factor applied to your cost.  This penalty factor is based on inefficient
scheduling, and is described fully in the Plan/Schedule chapter of this
manual.  The field labeled Crashed Cost is the basic cost times the penalty
factor, and it is this crashed cost which is used when applying markup and
burden rates.  For now, simply note that a value of 1.0 for penalty is no
penalty, so the crashed cost should equal the base cost.

     IMPORTANT NOTE:  Before going any further, we will want to have
information entered in Easy Project for at least one employee.  If you have
not completed the Setup/Organization procedure, go back now and enter
data for at least one employee.  Be sure to include the employee's hourly
wage.

     The resource matrix is only available for labor intensive nodes (non-
nodes have the array automatically filled in with the sum of their children's
resource requirements).  Use the down arrow key to move your cursor to the
first field in the resource array (#:).  This is where you would enter the
employee number (or labor category number).  Enter a number for which you
have entered some employee data already (probably 1).

     You are now asked to enter three manpower estimates (in hours) for
this employee (or labor category) working on this task.  The low estimate
should be a number which you are 95% sure will be the minimum hours
worked.  The expected estimate should be your most likely estimate.  The
high estimate should be a number which you are 95% sure will be the worst
case requirement.  These numbers are used to compute the mean
requirement (and also used for various probabilistic functions in other parts
of the program).

     mean = [low + (4 * expect) + high] / 6

     You can enter information for up to five different employees for each
task.  As you enter resource information, the field labeled "Expected
Resource Costs" displays the total dollars allocated in the resource array (for
each employee, the mean man-hour estimate times the employee's hourly
wage).  Note that if the resource number entered on the screen is a resource
which does not have a valid hourly wage entered (in Setup/Organization) the
resource cost will be zero.  If the task has a penalty factor attached, the field
for Penalized Costs is equal to the expected Resource Costs times the penalty
factor (this penalty stuff really is cleared up in Plan/Schedule, we promise!).

     HINT:  When doing bottom up costing, enter the labor estimates, then
use the Expected Resource Costs to enter a valid cost in the cost field. 
When doing top down costing (design to cost), adjust your resource array
until it matches the previously entered cost field.

     To save some effort when entering resource estimates, you may use the
following shorthand:

     2d = 2 days = 16 hours
     2w = 2 weeks = 80 hours
     2m = 2 months = 320 hours

In other words, enter an integer followed by the letter d, w, or m and the
system will convert the number to the appropriate number of man-hours.

     IMPORTANT NOTE:  When you are done, the cost field for each
task should exactly equal the sum of the cost fields for the task's children. 
You should ensure that this is true during your planning process.Plan/Dependencies








     Easy Project handles dependencies by defining predecessor tasks only
(successor links are implied by the predecessor links).  Easy Project allows
you to specify the percent which the predecessor must be complete prior to
beginning the successor.  For example, the detail design stage of software is
normally dependent on the system design state, and we would say that system
design is a predecessor of detail design.  If the system design does not need
to be 100% done before we start detail design, we might say that system
design is a predecessor of detail design, and that system design should be
50% complete prior to starting detail design.

     Select the Plan/Dependencies option.  The WBS display window now
displays a new column labeled Dependencies.

     For each task, this column will have an X for each predecessor link
defined.  Because you may define up to eight predecessors for each task, this
column may contain up to eight Xs.

     The command line menu should look relatively familiar at this point. 
The actual menu structure is as follows:

     o    Modify

     o    Designate

          -    Select

          -    Add-Link

          -    Remove-Link

          -    Disconnect

     o    View

          -    Increase

          -    Decrease

          -    All

          -    Window

               *     Split

               *     Clear

               *     Jump

     o    Goto

Modify

     Move your cursor to a task and press Modify.  From this screen you
can designate up to eight predecessors to this task using the sequential
number (not charge number) of each predecessor.  The Percent field is your
estimate of the percent the predecessor must be complete prior to this task
starting.  You can also enter the rigidity of the dependency link (1 - 9).

Designate

     You may designate most dependency links using Designate, if you
desire.  Move the WBS cursor to the successor task and press Select (the 'T'
column shows the task selected).  You may now move the WBS cursor to
each predecessor and press Add-Link.  If you make a mistake, move the WBS
cursor to the improper predecessor and press Remove-Link.  Moveing the
WBS cursor to a task and pressing Disconnect removes all predecessor links
defined for that task, and searches the WBS hierarchy to remove links
defined by other tasks to the now disconnected task (i.e. disconnects all links
to/from this task).

     All links defined using Add-Link assume a rigidity of 9 and a percent
complete required of 100%.  You can then use Modify to change these
numbers, if desired.Plan/Risk








     One vital area of project management which is often ignored (at your
own peril) is risk management.  Easy Project simplified the process of
estimating risk.

     Select the Plan/Risk option.  All risk estimates are numbers from 1
to 99, with 1 being extremely low risk and 99 being extremely high risk.  The
columns labeled NR, TR, SR, and OR have the following meanings:

     o    NR:  This number defines the network related risk for this task.

     o    TR:  This number defined the technical risk for this task.

     o    SR:  This number defines the schedule related risk for this task.

     o    OR:  This number is the average of the other three, and gives
          some indication of the task's overall risk.

     Now, move your WBS cursor to any task and press Modify.  We will
describe each field individually.

     o    Network LOF:  The network likelihood of failure is an
          indication of the likelihood of problems caused by this task's
          predecessor tasks not being completed on time.  This number
          is automatically calculated based on the number of predecessor
          links defined.

     o    Network COF:  The network consequence of failure is an
          indication of how many other tasks may be adversly affected by
          slips in this task.  This number is automatically calculated based
          on the number of other tasks which have this tasks as a
          predecessor.

     o    Network Overall:  This is the average of the Network LOF and
          Network COF, and is the number displayed on the main screen
          as NR.  This field is automatically calculated.

     o    Tech LOF - HM:  This is a user entered field for the technical
          likelihood of failure due to hardware maturity.  99 would be
          appropriate for development using experimental hardware which
          has not been adequately tested.  1 might be appropriate when
          using well established hardware you are extremely familiar with.

     o    Tech LOF - SM:  This user entered field is similar, but looks
          at the likelihood of failure due to softare maturity.  99 would
          be appropriate for state of the art development using innovative
          techniques, while 1 might be appropriate for routine
          modifications to a COBOL program.

     o    Tech LOF - HC:  This user entered field measures the
          likelihood of failure due to the complexity of the hardware you
          must work with.  Large network type applications are probably
          a 99, while simple, single user systems might be a 1.

     o    Tech LOF - SC:  This user entered field measures the
          likelihood of failure due to software complexity.  Large,
          complex tasks would clearly be 99.  Small modules with few
          outside interactions would be 1.

     o    Technical LOF:  This field is automatically computed, and is
          the average of the four Tech LOF factors just entered.

     o    Technical COF:  This user entered field describes the technical
          consequence of failure.  If this task is basically stand-alone and
          of relatively low importance, the technical consequence of
          failure will be quite low.  If the entire project will not work
          unless this task works, the technical consequences of failure for
          this module are quite high.

     o    Technical Risk (Overall):  This field is automatically computed
          and is the average of the Technical LOF and the Technical
          COF.  This is the number for TR displayed on the main screen.

     o    Cost/Schedule Risk:  This number is automatically computed
          based on the duration used for the task.  Tasks which are
          scheduled for their optimum duration will have a value of 50
          here.  Tasks which are scheduled to take longer than their
          optimum duration will have a number lower than 50.  Tasks
          which are crashed (scheduled duration shorter than optimum
          duration) will have a number over 50.Plan/Schedule








     From the main menu, select Plan/Schedule.  The main window now
displays a Gantt chart used for scheduling.  Let's begin by looking at the
Gantt (bar) chart in some detail.  The Gantt chart is divided into 8 columns. 
Each column represents one week, month, or one quarter.  The current scale
is shown in the lower left corner of your screen.  Standard product nodes are
shown on the Gantt chart as an asterick (*) corresponding to the product's
delivery date to the customer.  Labor intensive tasks are shown as a bar. 
You may notice that the Gantt bars are not all the same.  Various levels of
sub-tasks are shown by different bar types to differentiate between top level
tasks and their sub-tasks.

     You might notice one slightly subtle change in the "T" column of your
WBS.  If a task is scheduled to begin before its predecessor tasks are
sufficiently complete, the L or S label is replaced by a double arrow.

     In addition to your normal WBS cursor movement keys, the
Plan/Schedule option allows you to use control right arrow and control left
arrow to scroll the Gantt window in time.  Try this.  Notice that the column
labels at the top of the Gantt window show the month.

     With that overview complete, let's look at the menu options available
from Plan/Schedule:

     o    Modify

     o    Range

     o    Shift

     o    View

     o    Goto

Modify

     Modify performs differently for:  Projects (task 0); standard products;
or labor intensive tasks.

     Pressing Modify while your WBS cursor is on task 0 lets you enter the
following general schedule information:

     o    Start date:  The project's calendar start date is entered here. 
          All other dates entered are relative to this absolute start date. 
          This solves the problem of planning a project based on a 1
          January start date, actually starting the project on 15 February,
          and needing to change the dates for every task in the project. 
          With Easy Project, you would simply change the project start
          date and reprint all reports with the proper dates.  You can use
          shift to schedule tasks for specific calendar dates, because the
          shift option shows the actual dates scheduled in the upper left
          corner of the screen.

     o    Working hours/week:  This is obviously normally 40.  Reducing
          this number might allow for projects done on a part time or at
          low priority (internal projects).  All task durations will
          automatically increase in direct proportion to the reduced hours
          worked per week.  Increasing the number might allow for high
          priority projects in which overtime has been authorized.  All
          task durations will automatically decrease in direct proportion
          to the reduced hours worked per week.  Changing the working
          hours per week does not affect penalty, if applicable (See next
          paragraph).

     o    Estimate type:  There are two fundamentally different
          approaches to estimating software work, and many overruns are
          incurred by not recognizing which type you are using.  Fixed
          price estimating (f) is simple, and is normally appropriate for
          fixed price contracts, design to cost projects, and projects with
          ample time for completing the work.  On a fixed price contract,
          your cost and man-hour estimates for each task are fixed. 
          Crashing a project (scheduling the work in a non-optimal
          fashion) will reduce the probability of successfully meeting the
          schedule (the schedule risk), but will not affect the costs for
          individual tasks.

               Optimal scheduling is more complex, but also more
          realistic for many projects.  This technique says that all cost and
          man-hour estimates were made assuming the tasks would be
          performed with adequate time.  If the tasks are crashed, the
          cost for each task will increase.  Easy Project will automatically
          calculate the schedule related cost penalty for crashing tasks if
          the Estimate Type field is set to 'o'.  For reasonable schedule
          changes, you will notice that the schedule risk does not change,
          but the costs go up.  For drastic schedule changes, both the cost
          and schedule risk will increase (i.e. no matter how much money
          you spend, you can't develop 1 man-year of software in 1 day!)

               As an example, assume you plan out a project to develop
          a new accounting system.  Your plan shows that the project will
          require 18 months to complete.  The customer insists that you
          complete the work in 12 months.  You have three choices:

               1.    Your best bet is to reduce the scope of work to
                     a point where 12 months is the optimal delivery
                     time.  This is not always possible.

               2.    If the money available is fixed, you would used
                     fixed type estimating.  After reducing the
                     schedule, you could deliver the schedule to the
                     customer and explain that there is only a 14%
                     chance of meeting the deadlines.

               3.    If sufficient funds are available, you would use
                     optimal type estimating.  After reducing the
                     schedule, you could deliver the schedule to the
                     customer and explain that the schedule changes
                     have increased the cost from $155,000 to $315,000.

     o    Percent Complete:  This is your estimate of the project's current
          percent complete.  

     Pressing Modify while your WBS cursor is on a standard product node
allows you to enter the delivery date in days from project start.  Pressing
Modify while your WBS cursor is on a labor intensive task allows you to enter
the following two fields:

     o    Duration:  This is the task duration in calendar days.  Changing
          the duration will automatically change the schedule risk.  If the
          estimate type is 'o' (optimal) the penalty and net cost will also
          automatically change as you modify the duration.  Notice that
          setting the duration equal to the optimum duration (displayed)
          sets the schedule risk to 50 and the penalty to 1.0 (no penalty).

          Changing the duration of a task automatically changes the
          duration of the task's children by a proportional amount.

     o    Percent Complete:  This is your estimate of the percent this
          task is complete.  This number is used when predicting
          dollars/man-hours required to complete the work.  Setting this
          field to 100 marks a task as complete.

Range

     This option works similar to the Range option in Plan/WBS.  Flag is
used to mark the top and bottom of the range (the flagged range is shown in
the "T" column).  Unflag is used to clear the range markers.  Shift allows you
to shift the flagged range on the Gantt chart.  Shifting is accomplished using
the right and left arrow keys (control right and left arrow for faster
movement).  Shifting is terminated by pressing ESC, up arrow, or down
arrow.

Shift

     Shift is used to shift individual tasks.  As with shift range, the right and
left arrow keys are used to shift the task (control right and left arrow for
faster movement).

     As you shift a labor intensive task, all children of the task are
automatically shifted.  In the upper left corner of the screen, the task start
date, end date, schedule risk, and penalty is displayed.  In the information
line (bottom of display), the total man-power loading for the project is
displayed for each time period displayed on the Gantt chart.  Manpower
loading is shown in man-weeks/months/quarters.  In other words, this is the
total number of people you will need to have working on the project during
this period of time to meet your schedule.  As you shift tasks, dependency
links are automatically checked and a double arrow will be displayed in the
"T" column if the task is scheduled before at least one of its predecessor tasks
is sufficiently complete.

     Pressing HOME while shiftint a task allows you to enter the task start
date in terms of the number of days from project start.

     Because sub-tasks should be scheduled within the time period
scheduled for their parent task, tasks can not be shifted past the start/end
date of their parent task.  This restriction is also built into the use of the
HOME key (paragraph above).

     Shift is terminated by pressing ESC, up arrow, or down arrow.

     NOTE:  Shifting task zero shifts the Gantt window.

View

     In addition to the normal options available using View, you can select
View/Format to modify the Gantt scale.  The Gantt chart can be scaled so
that each column is one week, one month, or one quarter.

     HINT:  Scheduling should normally be accomplished in a top down
fashion.  Set the view to 1 and schedule all level 1 tasks (with the Gantt chart
set to an appropriate scale).  When this top level schedule looks OK, set the
view to 2 and schedule all level 2 tasks (changing the Gantt scale if
appropriate).  Repeat this process until all tasks have been scheduled.Track








     After a project has started, you need to record chanrges (labor and
materials), normally on a weekly basis.  The Track option is used for this. 
The Track top level menu looks like this:

     o    Timesheets

     o    Expenses

     o    Report

     o    Post

     o    Quit

     Timesheets is used to enter periodic (normally weekly) employee
timesheets for all projects.  Expenses is used to enter material charges
(invoices) for all projects.  Report is used to print timesheet and expense
related reports.  Post is used to transfer charges directly to appropriate
project tasks.  We will discuss each of these options individually in the
sections that follow.

Timesheets

     You will normally enter timesheets weekly (bi-weekly in some
companies).  Before beginning, you will need an appropriate timesheet filled
out for each employee.  For each project task the employee worked on during
the reporting period, the timesheet should specific the project name, the task
charge number, and the hours billed.  Optionally, you may also record the
actual hours worked if you want to track unpaid overtime, etc.

     Select Track/Timesheets to display the timesheet data entry form. 
This is a matrix type form, where entry number refers to the sequential
timesheet entry number (0 - 499).  If one employee charged to three different
tasks, these charges might be recorded as entry numbers 0, 1, and 2.

     Starting with entry number 0, enter the employee number (1 - 249),
the project name, the charge number, the hours worked on that task
(optional), and the hours billed to that task.  The field for project name will
contain the eight character file name in which the project is stored, not the
20 character name entered when you created the project.  When you have
completed all fields on this form, move your cursor to the first field and set
the entry number to 1.  This will allow you to make the second entry. 
Continue this process until you have entered all timesheet charges.

     Entries can be modified by selecting the appropriate entry number and
modifying the displayed field.

     When you are done entering timesheet information, press F10 to save
all entries to disk.  Pressing ESC will exit without saving any timesheet entries
made during this session.

Expenses

     Select Track/Expenses to enter expense reports (material charges) into
the system.  Expenses are entered exactly like timesheets, except the entries
are limited to 0 - 99.  The field for dollars charged refers to your cost, i.e. the
amount your supplier invoiced you for the item.

Report

     Reports accessed from this menu are expense and timesheet related
and may include information applicable to many projects (i.e. they would
cover all timesheet charges, not just those for a specific project).  Pressing
Timesheet/Report displays the following sub-menu:

     o    Timesheets

     o    Costs (expenses)

     o    Employees

     o    Suppliers

     Timesheets prints a sorted list of all timesheet entries made since the
last posting (Timesheet/Post).  Entries may be sorted by employee or project. 
Costs-(Expenses) prints a sorted list of all expense entries made since the last
posting.  Entries may be sorted by supplier or project.

     HINT:  Because these reports sort the actual timesheet/expense file,
these options can be used to re-order your entered data prior to viewing it
using Track/Timesheets or Track/Expenses.

     Employees prints a list of all valid employee numbers, names, and
hourly rates.  Suppliers prints a list of all valid supplier numbers and names.

     All of these reports are printed to the screen by default.  To change
the print destination, you must use the Report/Options/Destination capability
from the main menu.  This option allows you to print reports to the screen,
the printer, or to a disk file.  (See the Report chapter for details of using this
capability).

     Reports printed from this menu can not be queued (See the Report
chapter for an explanation of queueing reports).

     HINT:  Use these reports to double check all charges prior to posting.

Post

     After all expenses and timesheets have been entered, printed, and
checked for accuracy, they are posted to the appropriate project files on your
disk.  The project files should be on the default drive (and directory), and
should match the project name field in the individual timesheet/expense
entries.  Selecting Track/Post will post all entries automatically.

     If any invalid entries are detected during the posting (project name
does not match a valid file or charge number does not match a valid task in
the project), the entry is left in the timesheet/expense file.  All valid entries
are cleared from the file after posting to the projects.  If invalid entries were
detected, you should print out the appropriate file, correct the problems, and
perform the posting operation again to post the remaining entries.

     HINT:  Errors in timesheet or expense entries which are detected
prior to posting can be corrected by changing the appropriate entry.  After
posting, errors must be correcting by making an off-setting entry (negative
hours or dollars charged).File








     The File option is used to store/retrieve files to and from disk.  When
entering file names, it is permissible to specify a drive and/or path name if
you are not using the default drive/directory for storage.  Pressing File
displays the following sub-menu:

     o    Save

     o    Recall

     o    Purge

     o    Directory

     o    Quit

     Save is used to save the current project to disk.  Recall is used to
recall a project form disk.  Purge is used to delete a project from disk. 
Directory is used to display a directory of available projects.Report








     The Report option prints reports relating to a specific project. 
Pressing Report displays the following sub-menu:

     o    WBS

     o    Cost

     o    Dependencies

     o    Risk

     o    Schedule

     o    Evaluate

     o    Options

     o    Quit

     We will begin by discussing Options because this choice affects all
reports.  We will then talk about each available report individually.

Options

     Selecting Report/Options offers the following sub-menus:

     o    Print-Queue

          -    Activate

          -    Print

          -    Deactivate

     o    Destination

          -    Screen

          -    Printer

          -    Disk

     Most project managers find that they need to print a long series of
reports on a regular basis.  Print-Queue is used to simplify this process. 
When you select Activate, then select various reports to be printed, Easy
Project stores the list of reports requested but does not actually print any
reports.  Selecting Print causes all of the the reports in the print queue to be
output in the order you selected them.  Selecting Deactivate causes reports
to be printed immediately as they are selected.  Note that Deactivate does
not clear the print-queue (Easy Project still remembers the reports you want
to output).

     HINT:  If you output the same list of reports every week (or month),
you can place these reports in the print-queue one time, then deactivate the
print-queue.  Every time you want the series of reports output, simply select
Report/Options/Print-queue/Print.

     Destination is used to select the current report destination (including
those printed from the print-queue).  Reports may be directed to the screen,
the printer, or to a disk file called REPORT.ASC.  The default is the screen. 
Reports sent to report.asc are appended to the end of the file.  When you
select Report/Options/Destination/Disk you will be asked if you want the
existing report.asc file cleared.

     All reports will prompt you for the project name (i.e. the name of the
project you want the report for).  The project name is the name of the
project file, including the drive and path if necessary.

     Note that printing reports causes the project currently in memory to
be over-written.  For all operations in which the current project will be over-
written or deleted, Easy Project determines if you have made changes since
the last save.  If so, you are asked if you would like the current project saved
prior to continuing.

WBS

     Two WBS related reports are available, Hierarchy and Detail. 
Hierarchy displays the task hierarchy for the designated project.  Detail
displays each task's WBS number, Name, Category, Priority, Milestone status,
and charge number.

Cost

     Three cost (resource) related reports are available, Dollars, Hours, and
Loading.

     o    Dollars:  This report displays detailed financial information, in
          terms of dollars, for each task in the project hierarchy.  For
          each task, the report displays the task name, cost, penalized
          cost, burdened cost, price, WBS number, amount charged (and
          posted) to date, dollars available, and predicted dollars to
          complete.  Predicted dollars to complete is only displayed for
          labor intensive tasks for which you have entered a percent
          complete (see Plan/Schedule).

          This report also includes two summary pages.  One page
          displays summary information for each of the primary project
          categories (hardware, installation, trainging, support,
          maintenance, other, and software).  The second summary screen
          displays summary information for each of the software sub-
          categories (system design, detail design, code, unit testing,
          integration, system test, and user documentation).  The
          displayed percentages can be used to determine if your project
          plan includes sufficient funds for all required project activities.

     o    Hours:  This report displays detailed financial information in
          terms of man-hours for all labor intensive tasks.  For each task,
          the report displays the total hours planned, hours worked, hours
          billed, and hours remaining.  In addition, nodes will include the
          specific employee man-hour allocations.

     o    Loading:  This report displays the month by month man-power
          loading for each employee (or employee category) working on
          the project.  Each line of output shows the project year number
          followed by twelve numbers representing the monthly loading
          for that year.  Numbers shown are in man-months.

Dependencies

     The Dependency report shows all dependency links defined, including
the predecessor task number, the rigidity, and the percent complete required.

Risk

     The Risk report shows the detail risk factors for each project task. 
These factors are Network Likelihood of Failure, Network Consequence of
Failure, Overall Network Risk, Technical Likelihood of Failure, Technical
Risk, Cost/Schedule Risk, and Total Risk.

Schedule

     Two Schedule reports are available, Task and Gantt.  Task shows you
the start date, end date and duration for each task in your project hierarchy. 
Gantt displays the project Gantt chart in the same format used by
Plan/Schedule.  Note that the scale (weeks, months, or quarters) and the time
frame displayed in the Gantt window are set within Plan/Schedule prior to
saving the project.

Evaluate

     Three Evaluate reports are available, ROI/ATO, Balance-Sheet, and
Income.  ROI/ATO calculates and displays the monthly Net Income Before
Taxes (NIBT), average assets, monthly Return on Investment (ROI), and
monthly Asset Turnover (ATO) throughout the project life.  Balance-Sheet
calculates and displays the monthly cash balance, accounts receivable balance,
inventory balance, cumulative depreciation on leasehold inventory, and
accounts payable balance.  Negative numbers for cash indicate project
financing requirements (internal or through borrowing).  Income calculates
and displays the monthly sales, cost of sales, depreciation expense, and NIBT
throughout the project life.Reference








Activate

     Report/Options/Print-Queue/Activate.  All report commands are
queued for later execution.  The user is prompted if the existing report queue
should be cleared when this option is selected.


Add

     Plan/WBS/Add.  Add a new task to the project hierarchy.  Tasks can
be either standard product tasks or labor intensive tasks.


Add Link

     Plan/Dependencies/Designate/Add-Link.  Add a new dependency link
from the previously selected task to the current task.  The current task
becomes a predecessor of the previously selected task.  Links are added with
a rigidity of 9 and a required percent complete of 100, although these may
be changed using modify.  The screen will display an X in the dependency
column for each link added.


Addr

     Organization address field.  Accessed from Setup/Organization.  Free
form field for company address printed at the top of all reports.


All

     Set current view to display all levels of hierarchy.  Shown as view of
99 on hierarchyical displays.


Arrow Keys

     Right and left arrow keys select the current default menu choice from
command line menus, or move the cursor during screen oriented data entry. 
Up and down arrows move your WBS cursor on WBS hierarchy displays, or
advance to the next/previous field during screen oriented data entry.  Control
right and left arrow keys scroll the Gantt window on the Plan/Schedule
screen.


Average AP Delay

     Average accounts payable delay.  The average number of months you
expect to delay paying your bills after delivery of a component to you.


Average AR Delay

     Average accounts receivable delay.  The average number of months
you expect your customer to delay paying your invoices after completion of
the work.  This number should include any required acceptance periods.


B-Cat

     Burden category.  Burden category 0 is always 1.0 or no burden
applied.  Burden categories 1 through 5 are set by the user to yoru companies
burden rates from the Setup/Organization data entry screen.


Backspace

     Works like a correcting typewriter backspace during screen oriented
data entry.  Fills the right most element of the current field with a character
which is used to show a blank location.


Back tab

     Shifted TAB.  During screen oriented data entry, back tab works the
same as up arrow (goto previous field).


Balance Sheet

     Report/Evaluate/Balance-Sheet.  Print pro-forma (projected) balance
sheets for the desired project from project start until project completion.


Basic Cost

     Entered from Plan/Cost/Modify and displayed on several forms.  This
is your direct cost for this item prior to applying any burden or profit.


Burden Rate

     Your cost for all items is increased by an overhead charge called
burden rate.  This includes all indirect costs except profit (R&D costs,
handling costs, General and Administrative, overhead, etc.)  Easy Project
allows you to set up to five different burden rates/categories in
Setup/Organization.  A burden rate of 1.0 would be no burden at all.


Burdened Cost

     An item's basic cost times the appropriate burden rate.  Computed
automatically by Easy Project.


Carriage Return

     Used to check and accept the current field during screen oriented data
entry, and to accept the highlighted item from the command line menu.


Category

     Task category, entered from the Plan/WBS/Add or Plan/WBS/Modify
menu.  Automatically set for standard product tasks.  For labor intensive
tasks, category is used to ensure that appropriate funds are allocated to each
task required during development.


Charge Number

     A unique number assigned to each project task entered into Easy
Project.  This number is used to uniquely identify tasks to Easy Project when
entering dollars and hours chargted.  This number will normally not be the
same as your company designated charge number for accounting purposes.


Children Cost

     The total cost for all children of the current task in the WBS
hierarchy.


Clear

     Plan/*/View/Window/Clear.  Accessed from each of the plan menus. 
Closes one WBS window, leaving a single WBS on the display.


Control Page Down

     From any of the Plan screens, moves the WBS cursor down to the next
task at the same level in the hierarchy (skipping lower level tasks).


Copy

     Plan/WBS/Range/Copy.  After marking a range of tasks and moving
the WBS cursor to the desired location, pressing copy will copy the marked
range to the point just below the WBS cursor.


Cost

     Plan/Costs.  Used to enter cost and resource data for WBS elements.

     Track/Costs.  Used to enter dollars charged to a projects tasks.

     Report/Cost.  Used to print dollars, hours, and loading estimates for
the project, including predicted costs to complete each task.

     The cost field displayed during screen oriented data entry is the item's
basic cost times the quantity.


Crashed Cost

     For labor intensive items developed faster than their optimum
development time, the crashed cost is the basic cost times the Easy Project
calculated penalty factor.  The difference between the basic cost and the
crashed cost is the efficiency penalty you incur by rushing development.  This
number will be 1.0 (no penalty) if the estimate type variable is set to "f"
(fixed).


d

     When entering hour estimates on the resource matrix of
Plan/Costs/Modify, you may enter a number followed immediately by a "d"
(days).  The system will convert the number from days to hours.


Date

     Easy Project uses the system date extensively, so it is important that
you set the system date prior to running Easy Project.  This can be
accomplished automatically when you boot if your have a batter powered
clock (see the instruction manual with your add-in card), or manually using
the DOS date command.


Deactivate

     Report/Options/Print-Queue/Deactivate.  Turn off the print queue,
sending all reports to the printer as they are requested.  Reports currently in
the queue are retained and can be printed later using the Print option.


Decrease

     Plan/*/View/Decrease.  Decrease the current view by 1, down to a
minimum of 1.  The current view is the highest level in the WBS hierarchy
which Easy Project will display.


Delete

     Plan/WBS/Delete.  Delete the current WBS task.  The WBS hierarchy
is automatically renumbered.

     Plan/WBS/Range/Delete.  Delete the flagged range.  You are
prompted to confirm the deletion.  The WBS hierarchy is automatically
renumbered.

     
Delete Key (DEL)

     From the Plan/WBS display, the delete key works like the
Plan/WBS/Delete option and deletes the current task.


Delivery Date

     The delivery date for a standard product component, expressed in days
from project start.  The shift option can be used to see the actual calendar
delivery date, if desired.


Dependencies

     Plan/Dependencies.  Define task dependencies.


Description

     Task description.  Often used to store part numbers, externally defined
WBS numbers, and government contract CDRL numbers.


Destination

     Report/Options/Destination.  Used to determine if reports are output
to the screen, the printer, or to a disk file.


Detail

     Report/WBS/Detail.  Print a detailed listing of all tasks in the project
plan.


Directory

     File/Directory.  Print a listing of all Easy Project project files on the
designated device.


Disconnect

     Plan/Dependencies/Designate/Disconnect.  Disconnects the current
WBS task from the dependency network.  All defined predecessors are
cleared, and all tasks which reference this task as a predecessor are modified
to not reference this task.


Discount Rate

     Your companies discount rate.  May be used to calculate discounted
cash flow, discounted ROI, etc.  Entered from Setup/Organization.


Disk

     Report/Setup/Destination/Disk.  Output all reports to the disk file
report.asc.  New reports are appended to the end of the file.  The user is
asked if the existing file should be cleared when this option is selected.


Display

     Setup/Display.  Used to enter display colors used by Easy Project
when running on color systems (Easy Project always uses black and white
colors when using a monochrome text card).


Dollars

     Report/WBS/Cost/Dollars.  Print a report showing costs to date and
predicted costs to completion in terms of dollars.


Dollars Charged

     Entered on the Track/Expenses data entry screen.  The dollars
charged to a designated project and task.


Down Arrow

     See Arrow Keys


Duration

     Entered on Plan/Schedule data entry screens.  Task duration in terms
of calendar days.


Employee

     Track/timesheet/Employee.  Print a summary of all timesheet entries
entered but not posted, sorted by employee.

     Track/Report/Employees.  Print a list of all employees entered into
Easy Project.

     Employee #:  Employee number (1 - 250) used to index into Easy
Project employee file from Setup/Organization.  Note that some employees
may actually be classes of employees (e.g. Secretary, Programmer).

     Employee Cost:  Hourly cost (or average hourly cost for employee
classes).  Entered in dollars and cents from Setup/Organization.

     Employee Name:  Name of employee or employee class.  Entered
from Setup/Organization.


END Key

     Move cursor to last task in WBS hierarchy, or move cursor to last valid
field from a data entry screen.


End Date:

     Task end date in terms of days from project start.  Will equal start
date plus task duration.


Enter Key

     See Carriage Return.


Entry Number

     A sequential index number used from the Track/Timesheets and
Track/Expenses screens.


ESC (Escape) Key

     Used to abort a function.  Aborts a data entry screen without making
any changes permanent.  Aborts a menu level and displays the previous
command line menu (works like Quit in this respect).


Estimate Type

     Entered by modifying task one (the project) from Plan/Schedule.  Can
be "f" for fixed or "o" for optimal.  If optimal, allows Easy Project to increase
task costs if development is attempted in less than the optimal time for the
estimated labor.  If fixed, cost estimates will not change but schedule risk will
increase significantly faster as a schedule is crashed.


Evaluate

     Report/Evaluate.  Used to access reports which predict and evaluate
a projects financial performance.


Expected Resource Costs

     Computed by Easy Project and displayed on the data entry screen for
Plan/Costs/Modify.  Equal to the sum of the mean labor estimates (hours)
times the hourly wage for the designated employee number(s).


Expenses

     Track/Expenses.  Used to enter non-labor project expenses.  Entries
are entered into project files using the Post command.


Extract

     Plan/WBS/Range/Extract.  Write the marked range of tasks to a disk
file.  The tasks in the file can be inserted into this project or another project
using the Plan/WBS/Range/Insert option.


F10

     Special Function Key 10.  Used to accept a data entry screen.


File

     File.  Used to save, retrieve, and purge projects to/from disk.


Flag

     Plan/*/Range/Flag.  Used to designate a range.  Pressing flag once
marks one end of the range.  Pressing flag a second time marks the other end
of the range.  The flagged range is shown in the "T" (type) column on the
WBS display.  The range remains flagged until unflagged with the Unflag
option.


Gantt

     Report/Schedule/Gantt.  Print the project's current Gantt chart.  The
scale used (weeks, months, or quarters) and the gantt window starting and
ending date are those used from Plan/Schedule.


Goto

     Plan/*/Goto.  Goto a specific task number.  The display is recentered
with the designated task at the top.


Hierarchy

     Report/WBS/Hierarchy.  Print a hierarchy chart for a project.


HOME Key

     From a data entry screen, move the cursor to the first valid field. 
From a WBS hierarchical screen, move the WBS cursor to the first task.


Hours

     Report/Cost/Hours.  For a given project, print the hours expended to
date for each task.


Hours Billed

     Entered from Track/Timesheets.  The number of labor hours charged
to a specific task.


Hours Worked

     Entered from Track/Timesheets.  The number of labor hours worked
on a specific task.  May differ from hours billed because of unpaid overtime,
etc.


Income

     Report/Evaluate/Income.  Print pro-forma (projected) income
statements for a project from start through finish.k


Increase

     Plan/*/View/Increase.  Increase the view by one.  View can be 1 - 9
or 99 (all).  The current view is the maximu hierarchical level which will be
displayed.


Insert

     Insert Key:  From Plan/WBS works lie Plan/WBS/Add/Labor-
Intensive.

     Plan/WBS/Range/Insert.  Inserts a previously extracted disk file into
the WBS starting at the location immediately below the WBS cursor.


Installments

     Entered by modifying task zero from Plan/Costs WBS hierarchy. 
Applies only to payment type 4, periodic installments.  Tells Easy Project the
number of installments made for each payment.


Jump

     Plan/*/View/Window/Jump.  After the WBS is split into two
windows, Jump is used to move the WBS cursor from one window to the
other.


Labor Intensive

     Tasks in Easy Project are one of three types:  Project (task zero); 
Standard Product;  or Labor Intensive.  Standard Product tasks are
deliverables which do not require any chargeable labor, and normally consist
of hardware, pre-packaged software, etc.  Labor intensive tasks require
chargeable labor and includes software, training, etc.


Lease

     Level one standard product tasks can be sold to the customer (lease
= n) or leased to the customer (lease = y).  The entry is made for level one
standard product tasks from the Plan/Costs/Modify data entry screen.


Lease Depreciation

     The monthly depreciation applied to leasehold inventory.  Entered
from the Setup/Organization data entry screen.


Lease Month

     The month for which you plan to enter the leasehold depreciation or
payment.  A number from 1 through 120 (ten year lease).  Entered from
Setup/Organization.


Lease Payment

     The monthly payment invoiced to the customer for standard products
leased.  Entered from the Setup/Organization data entry screen.


Left Arrow

     See Arrow Keys


Level

     Task hierarchical level.  Task zero (project) is level zero.  All other
tasks are levels one through nine.  Tasks at higher level numbers are subtasks
of tasks with lower level numbers (e.g. level 2 tasks are subtasks of level 1
tasks).


Loading

     Report/Cost/Loading.  Print report showing resource loading during
project.


m

     When entering resource estimates, user may enter a number followed
immediately by an "m" (months).  Easy Project will convert the entered
number from months to hours automatically.


M-Cat

     Markup category.  Similar to B-Cat.  Designates a task's markup
category.  0 implies no markup (profit).  1 - 5 applies a markup rate as
defined in Setup/Organization.


Manager

     Project manager.  Entered from Plan/WBS/Modify for task zero.


Markup Rate

     Profit rate for a given markup category (1 - 5).  Entered from
Setup/Organization.  Similar to Burden Rate.


Milestone

     Entered when entering or modifying  tasks from Plan/WBS.  Tells if
entered task is a milestone task in the project.


Modify

     Plan/*/Modify.  Modify task, cost, risk, etc. for task highlighted in
WBS hierarchy.


Monochrome

     When using Easy Project with a color display card (EGA, CGA, or
VGTA) and a monochrome monitor, you should use the DOS mode
command to set the card's mode to black and white.  Alternatively, you may
use the Easy Project Setup/Display command to modify the display colors to
colors which are easier to see on a monochrome nonitor.


Move

     Plan/WBS/Range/Move.  Move the flagged range of tasks to the
location just under the WBS cursor.


Name

     Name of project or task.


Network

     COF (Consequences of Failure).  Impact on project from failure to
complete this task on time.  Number between 1 (minimal) and 99 (significant)
automnatically set by Easy Project based on defined dependencies.

     LOF (likelihood of Failure).  Same as COF above, but deals with
probability of not completing this task on time because of network related
problems (predecessors not complete on time).

     Risk.  Overall network risk.  Average of COF and LOF.


Node

     Task with no children.


NR

     Network Risk.


Optimum Constant

     Two constants used when determining the optimum task duration
based on man-hours of labor required.  Modified from Setup/Organization.


Optimum Duration

     The optimum duration, in calendar days, for a given task based on the
man-hours of labor involved.


Options

     Report/Options.  Used to control the print queue and print
destinations.


OR

     See Overall Risk


Organization

     Setup/Organization.  Used to initialize company wide variables which
apply to all projects.


Overall Risk

     Average of Network Risk, Technical Risk, and Schedule Risk.


Page Down

     Move down one screen page in the WBS hierarchy.


Page Up

     Move up one screen page in the WBS hierarchy.


Parent Cost

     Cost for this task's parent.  Applies to tasks level 2 and below only.


Payment Type

     Set by modifying task zero with Plan/Cost/Modify.  Can be one of the
following:  1.  Invoice on delivery;  2.  Invoice Monthly during work;  3. 
Invoice costs monthly during work, invoice for fee (profit) on delivery;  or 4. 
Periodic installments.


Penalized Costs

     Costs after application of the penalty factor.  The penalty factor is
calculated by Easy Project if the estimate type is 'o', and is a penalty for
trying to perform the work in less than the optimal number of calendar days.


Penalty Constant

     Used when calculating the penalty factor for tasks developed in less
than the optimal number of calendar days.  Set in Setup/Organization.


Penalty Factor

     A penalty applied to task costs which are crashed.  A penalty factor
of 1.0 is no penalty.


Percent Complete

     Your estimate of what percent complete this task is.  A number
between 0 and 100, with 100 signifying a completed task.  Used to mark tasks
as complete and by Easy Project to calculate estimated dollars required to
complete the work.


Plan

     Plan menu option, used to define a project.


Post

     Track/Post.  Used to enter timesheet and expense data into project
files.  Successful entries are deleted from the Easy Project timesheet and
expense files.  Invalid entries must be corrected and the Post operation
performed again.  Timesheet or expense errors discovered prior to executing
Post can be corrected by modifying the timesheet/expense entry.  Errors
discovered after executing Post must be corrected by entering an offsetting
entry.


Predecessor Tasks

     A task which must be complete (at least partially) prior to this task
starting.  Entered from Plan/Dependencies.


Price

     Your price to the customer for an item.  Equals your basic cost times
the quantity times the burden rate times the markup rate times the penalty
factor.


Print

     Report/Options/Print-Queue/Print.  Tells Easy Project to print all
reports in the print queue.  The queue is not cleared by the print option, so
the same series of reports can be printed on a regular basis.


Print Queue

     A list of reports ready to be printed by Easy Project.


Printer

     Easy Project can print reports to the screen, the printer, or the disk
(set by Report/Options/Destination).  The printer will be the printer set in
Setup/Organization.  If you are using LPT2: or COM2: you must use the
DOS mode command to redirect output from LPT1: to the apropriate port. 
The printer must support the IBM enhanced character set.


Priority

     Priority for a given task.  A number from 1 to 99 with 99 being the
highest priority.  Set within Plan/WBS/Modify and Plan/WBS/Add.


Project

     The project name and related information.  The project information
is stored in task zero of the WBS hierarchy.  When entering the project name
for timesheet and expense charges, the eight character (maximum) project file
name must be used.


Purge

     File/Purge.  Used to delete a project form the disk.


Quantity

     For standard product tasks, the quantity to be delivered.  Applies to
nodes only.  Entered from Plan/Costs/Add or Plan/Costs/Modify.


Range

     Plan/*/Range.  Used to designate and manipulate a range of WBS
elements.


Recall

     File/Recall.  Retrieve an Easy Project file from disk.


Remove-Link

     Plan/Dependencies/Designate/Remove-Line.  Remove a dependency
link from the previously selected task to the current WBS task.


Report

     Print Easy Project reports.


Reproduce

     Inactive for fully functioning versions of Easy Project.


Resource

     Entered from Plan/Costs data entry screen for labor intensive nodes
only.

     #:  Employee number as defined in Setup/Organization.

     Expected estimate:  The most likely number of man-hours required to
complete the task.

     High estimate:  Your worst case estimate (95%) of the number of
man-hours required to complete the task.

     Low estimate:  Your best case estimate (95%) of the number of man-
hours required to complete the task.


Return

     See Carriage Return.


Right Arrow

     See Arrow Keys.


Rigidity

     The rigitidy of a dependency link.  A number from 1 (slight
preference) to 9 (rigid requirement).  Entered from
Plan/Dependencies/Modify.


Risk

     Report/Risk.  Report showing risk factors for each task.

     Also, see individual types of risk (network, technical, schedule, overall).


ROI/ATO

     Return on Investment/Asset Turnover.  Report printed via
Report/Evaluate/ROI-ATO which shows the predicted return on investment
and asset turnover for the project.


Save

     File/Save.  Save the current project to disk.


Scale

     Displayed on the bottom of the Plan/Schedule WBS hierarchy.  Shows
the scale of the Gantt window (weeks, months, or quarters).


Schedule

     Plan/Schedule.  Used to enter start and stop dates and calendar
durations for tasks.


Schedule Risk

     The amount of schedule risk, with 1 being low risk (high probability
of on time completion) and 99 being high risk (low probability of on time
completion).  Automatically calculated by Easy Project based on man-power
requirements and calendar durations.


Screen

     Report/Options/Destination/Screen.  Print all Easy Project reports to
the screen.


Select

     Plan/Dependencies/Designate/Select.  Designate a task of interest. 
Add-link is then used to define predecessor tasks.


Setup

     Setup.  Setup Easy Project system wide variables.


Shift

     Plan/WBS/Range/Shift.  Shift the flagged range of tasks to a different
hierarchical level.

     Plan/Schedule/Shift.  Shift the highlighted task (and its children) on
the Gantt chart.

     Plan/Schedule/Range/Shift.  Shift the flagged range of tasks on the
Gantt chart.


Short Name

     An abbreviated name for the task.


Sibling Cost

     The total cost for this task and all of its siblings (i.e. the total cost for
all children of this task's parent).


Sname

     See short name.


Space Bar

     On command line menu, advances choice.  From data entry screen,
enters a space character.


Split

     Plan/*/View/Window/Split.  Split the WBS hierarchy into two
windows.


SR

     See Schedule Risk


Standard Product

     See Labor Intensive


Start Date

     Project start date in MM/DD/YY form, or task start date in calendar
days after project start date.


Successor Tasks

     All tasks which have this task as a predecessor.  Successor tasks are
not directly entered in Easy Project (i.e. they are implied by designating
predecessor links).


Supplier

     A company which supplies items charged to a project.  Entered in
Setup/Organization.

     Track/Report/Costs/Supplier.  Print all expenses entered into Easy
Project but not yet posted, sorted by supplier.

     Track/Report/Suppliers.  Print a list of all suppliers entered into Easy
Project.

     Supplier Name:  The name of the supplier.

     Supplier Number:  A sequential number for the supplier (1 - 99).


System Printer

     Easy Project printer address, set in Setup/Organization.  See also
printer.


Tab

     Advances one field during screen oriented data entry.


Task

     Report/Schedule/Task.  Print a detailed report showing the scheduled
start and end date for all tasks.


Task Name

     Name of task in Easy Project.


Technical Risk

     Technical risk for a given task.  Entered in Plan/Risk/Modify.

Timesheets

     Track/Timesheets.  Enter Employee Timesheets.


TR

     See Technical Risk.


Track

     Track.  Project tracking features of Easy Project.


Type

     WBS Task type.  Can be P (project, task zero only), L (labor intensive
task), or S (standard product task).


Unflag

     Plan/*/Range/Unflag.  Unflag a range.


Unit Cost

     Direct cost for one item.


Up Arrow

     See Arrow Keys.


Version

     Setup/Version.  Print current Easy Project version number and address
to send suggestions.


View

     Plan/*/View.  Change current display view.  The view is the lowest
hierarchical level (highest level number) task which will be displayed.  Ranges
from 1 (display little detail) to 9 (display much detail) and 99 (display all
detail).


w

     When entering resource man-hour estimates, user may enter a number
followed immediately by a "w" (weeks) and the system will convert the
number from weeks to hours.


WBS

     Easy Project calculated hierarchical position.  May not match
externally set WBS numbers.


Window

     Plan/*/View/Window.  Split WBS into two windows.


Work Hours Per Week

     Number of hours worked (per employee) on this project per week. 
Normally 40.  Would be higher if overtime was authorized.  Would be lower
if employees performed work part time.  When changed, automatically sets
all task durations to optimum duration for new work schedule.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2265

     Volume in drive A has no label
     Directory of A:\

    EASYPROJ DOC    105824  12-13-89   6:18p
    EASYPROJ EXE    245401  12-12-89   2:18p
    XXXX0001          9278  10-02-90   4:44a
            3 file(s)     360503 bytes
                               0 bytes free
