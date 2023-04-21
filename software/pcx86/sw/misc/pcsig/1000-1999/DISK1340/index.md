---
layout: page
title: "PC-SIG Diskette Library (Disk #1340)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1340/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1340"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-PROJECT 1 OF 2 (ALSO 1341)"

    PC-PROJECT lets you organize and control complex projects.  It uses the
    critical path method to produce a project schedule displayed in the form
    of a Gantt chart.  It is designed to help you manage complex jobs so you
    can finish them on time and under budget.
    
    PC-PROJECT views a project as a group of tasks or activities.  When you
    supply the estimated duration of each task and the relationships between
    the tasks (the predecessor tasks and successor tasks), it automatically
    calculates a schedule for you and displays it as a Gantt chart.  With
    the chart, you can see when each task should begin and end, the current
    status of each task and whether or not the task is on the critical path.
    Like a spreadsheet, PC-Project can immediately show you how any change
    alters the project's finish date and cost.  This allows you to try
    repeated what-if scenarios until you have reached the optimal project
    schedule.
    
    PC-Project also has a resource worksheet to track payroll,supplies, and
    equipment costs.  The worksheet allows you to list your employees and
    equipment and assign them to tasks, so you can coordinate your resources
    efficiently.  The resource worksheet tracks costs to date, anticipated
    costs, final cost, and cashflow.
    
    The program is completely menu-driven and contains excellent on-line
    help, plus a detailed 75+ page on-disk manual.  If you are moderately
    familiar with project management and critical path method, you will be
    able to use this program with relative ease.  It is written in C for
    increased speed.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1340.TXT

{% raw %}
```
Disk No: 1340                                                           
Disk Title: PC-Project 1 of 2 (also 1341)  (Disk 1 of 2)                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PC-Project                                               
Author Version: V1.2                                                    
Author Registration: $25.00.                                            
Special Requirements: None.                                             
                                                                        
PC-PROJECT lets you organize and control complex projects.  It uses the 
critical path method to produce a project schedule displayed in the     
form of a Gantt chart.  It is designed to help you manage complex jobs  
so you can finish them on time and under budget.                        
                                                                        
PC-PROJECT views a project as a group of tasks or activities.  When you 
supply the estimated duration of each task and the relationships between
the tasks (the predecessor tasks and successor tasks), it automatically 
calculates a schedule for you and displays it as a Gantt chart.  With   
the chart, you can see when each task should begin and end, the current 
status of each task and whether or not the task is on the critical path.
Like a spreadsheet, PC-Project can immediately show you how any change  
alters the project's finish date and cost.  This allows you to try      
repeated what-if scenarios until you have reached the optimal project   
schedule.                                                               
                                                                        
PC-Project also has a resource worksheet to track payroll,supplies, and 
equipment costs.  The worksheet allows you to list your employees and   
equipment and assign them to tasks, so you can coordinate your resources
efficiently.  The resource worksheet tracks costs to date, anticipated  
costs, final cost, and cashflow.                                        
                                                                        
The program is completely menu-driven and contains excellent on-line    
help, plus a detailed 75+ page on-disk manual.  If you are moderately   
familiar with project management and critical path method, you will be  
able to use this program with relative ease.  It is written in C for    
increased speed.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FORM.DOC

{% raw %}
```






                                 ORDERING PC-PROJECT
          
          
          Registration of PC-Project entitles you to the following:
          
               The current release package.
               The bound printed manual.
               The right to use future releases of PC-Project.
               Notification of updates.
               
          Registration costs $25.00.  Please use the enclosed order form
          when placing an order.  You may order by phone as well.  Call
          (206) 783-6783.  
          
          An evaluation package is also available for $10.00.  Included is
          the current release of PC-Project, with documentation on disk.
          
          Thank you for supporting shareware.
                                           
                                           
                        QUANTITY DISCOUNTS AND SITE LICENSING
          
          
          Quantity discounts, site licenses, and educational licenses are
          available.   Please call or write for details.
          
          
          ALL PRICES AND DISCOUNTS ARE SUBJECT TO CHANGE WITHOUT NOTICE. 
          
                                                                           




































                                      ORDER FORM
          
          
          Remit to: BIG PICTURE
                    Greenwood PO Box 30851
                    Seattle, WA    98103
          
          Ship to:  Name:     _____________________________________________
                    
                    Company:  _____________________________________________
          
                    Address:  _____________________________________________
          
                              _____________________________________________
          
                              _____________________________________________
          
                    Phone:    (________) ________ - ______________
          
          Please send:
          
          _____     Full PC-Project Registration       @ $25.00 ea $______
          
          _____     PC-Project Evaluation Package      @ $10.00 ea $______
          
                    Purchase Order, COD, non-USA       add $5.00   $______
          
                    Subtotal                                       $______
          
                    WA residents add 8.1% sales tax                $______
          
                    Total                                          $______
          
          Payment By:    ( ) Check ( ) COD ( ) PO # _________
          
          Call for information on quantity orders and site licenses.
          
          Checks must be drawn in US dollars.  You may order by phone.
          Please have order information ready.  (206) 783-6783.



























                                           
          
          
          
          
          
          
          
          
          
          
          
          
                              FOLD AND STAPLE FOR MAILER
          -------------------------------------------------------
          
                                                                      PLACE
                                                                      STAMP
                                                                       HERE
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                                                           
                                             PC-PROJECT
                                             BIG PICTURE
                                             GREENWOOD PO BOX 30851
                                             SEATTLE, WA      98103
          
          
          
          
          
          
          
          -------------------------------------------------------






















```
{% endraw %}

## README.DOC

{% raw %}
```
PC-PROJECT 1.2  Released 8/1/90
(C) Copyright 1986, 1988, 1990 James Howey All rights reserved

THE PC-PROJECT RELEASE PACKAGE

PC-Project comes on two disks.  The system disk contains the files necessary to 
run PC-Project.  The documentation disk contains a complete manual for      
PC-Project.  The files on each of the disks should be as follows:

     THE SYSTEM DISK

       README   DOC          This file.
       PCPROJ   EXE          PC-Project main program.
       INSTALL  BAT          Batch procedure to install PC-Project.
       PCPROJ   HLP          Text of the PC-Project help screens.
       YESNO    EXE          A program used only during installation.
       SAMPLE                A sample project.
       MONO     DEF          Defaults for monochrome systems.
       BW       DEF          Defaults for black/white, COMPAQ systems.
       COLOR    DEF          Defaults for CGA, EGA, VGA.
       PCPROJ   DEF          Copy one of above three here before starting.
       FORM     DOC          Order form.

    THE DOCUMENTATION DISK

       README   DOC          This file again.
       FORM     DOC          Order form again.
       PCPROJ   DOC          The manual.

A description of the use of each of these files is found in the last appendix 
of the manual.  If you are missing any of these you do not have a valid 
PC-Project release package.  If you are unsure of your copy of PC-Project, you 
can order an evaluation package from BIG PICTURE.  It costs $10.00 and can be 
purchased by writing to PC-Project; BIG PICTURE; Greenwood P.O. Box 30851; 
Seattle, WA 98103.  Use the order form on this disk.  


INSTALLING PC-PROJECT

To install PC-Project on a hard disk, put the system disk in drive A and type:

        a:          (return)
        install c   (return) 

to create \pcp directory on your C disk and transfer software.  (Other drive 
letters will work as well.)  

To install PC-Project on a floppy disk type:

        a:          (return)
        install b   (return)

to create a floppy work disk with essential PC-Project files.  You will be 
required to insert a newly formatted disk in the B drive, so have one ready 
before starting.


RUNNING PC-PROJECT

After PC-Project is installed, it may be invoked on a floppy disk system by 
putting the work disk in drive A and typing the following:

        a:              (return)
        pcproj          (return)

On a hard disk system, type the following:

        c:              (return)
        cd \pcp         (return)
        pcproj          (return)

On a monochrome system, PC-Project can be run from the system disk without 
going through the installation process.  Put the system disk in drive A and 
type: 

        a:              (return)
        pcproj          (return)

It is recommended that you go ahead and use the installation process however.  
This is because you will require a backup disk in any event and this will serve 
quite well as a backup.  In addition, this being shareware, you are encouraged 
to share exact copies of the release package.  If you should modify information 
on the system disk, then you would be unable to pass the software on.  


ORDER INFORMATION

To print order information, put either disk in A and type:

        copy a:form.doc prn     (return)

Substitute any other device or filename for prn to change destination of form.


DOCUMENTATION

To print the manual, put the documentation disk in A, line the print head up on 
the very first line of the page, and type:

        copy a:pcproj.doc prn   (return)

This is going to take a large pile of continuous forms (about 90 pages). 


IF YOU RECEIVED PC-PROJECT IN AN ARCHIVED FORM

If you received PC-Project in an archived form, and have a hard disk, you can 
create the proper release package by the following procedure: 

Format two floppy disks, each with no operating system.  Label the first: 

        PC-Project 1.1 (C) 1986, 1988 James Howey All rights reserved
        SYSTEM DISK

Label the second:

        PC-Project 1.1 (C) 1986, 1988 James Howey All rights reserved
        DOCUMENTATION DISK

Create a temporary directory to hold PC-Project files:

        C:\>md temp             (return) 
        C:\>cd \temp            (return)

Now, use your archive program to extract all PC-Project files into the new 
temporary directory.  

Put the DOCUMENTATION DISK in drive A, and type: 

        C:\TEMP>copy *.doc a:   (return)
        
The documentation disk is done and should be set aside.  Put the SYSTEM DISK in 
drive A and type the following: 

        C:\TEMP>del pcproj.doc  (return)
        C:\TEMP>copy *.* a:     (return)

The system disk is done.  Set it aside and clean up your disk as follows:

        C:\TEMP>del *.*         (return)
        C:\TEMP>cd \            (return)
        C:\>rd \temp            (return)

You should be all set.

If you received PC-Project in an archived form and you have a two floppy 
system, format two disks without the operating system, label them as above, and 
extract the proper files to each of them as shown in the lists at the top of 
this file.  

You now have an official two disk release package to share with your friends 
and co-workers.  Install the software as instructed above.  


Thank you for supporting shareware, and good luck with PC-Project.


UPDATES since 1.11

Added fixed costs to each task, allowing for materials, contracted 
amounts, etc.

Added two new cash flow reports.

Modified printer driver to eliminate initial form feed, allow for 
variable top and bottom margins, and perform better on an HP Laser 
Jet. 






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1340

     Volume in drive A has no label
     Directory of A:\

    PCPROJ   EXE    123168   7-09-90   1:51p
    INSTALL  BAT      4052   4-07-88  12:32p
    README   DOC      5786   7-26-90   5:18p
    PCPROJ   HLP     36000   7-09-90   2:18p
    YESNO    EXE      7580   9-25-87   9:53a
    SAMPLE            2511   7-26-90   5:27p
    MONO     DEF       173   9-25-87   1:36p
    BW       DEF       173   9-25-87   1:37p
    COLOR    DEF       173   8-31-88  11:11a
    PCPROJ   DEF       173   9-25-87   1:36p
    FORM     DOC      4546   7-26-90   3:19p
    FILE1340 TXT      3109   8-30-90   2:19p
    GO       BAT        38  10-19-87   3:56p
    GO       BAK       925   1-01-80   6:59a
    GO       TXT       960   1-01-80   7:00a
           15 file(s)     189367 bytes
                          123904 bytes free
