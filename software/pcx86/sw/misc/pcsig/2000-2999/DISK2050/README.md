---
layout: page
title: "PC-SIG Diskette Library (Disk #2050)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2050/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2050"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DIVER'S LOGBOOK"

    DIVER'S LOG is for the active scuba diver or scuba club to record
    information about each dive for future retrieval and analysis.  Keep
    track of dive number, location, date, weather, and surface conditions.
    
    Now you can back up your paper log in case of loss, theft or damage.
    It's an insurance policy for your dive log.  Or, simply use it to review
    locations for the name of that great dive spot you want to dive again.
    The program is completely menu driven.  You can store up to 1,024 dives
    in a single directory.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2050.TXT

{% raw %}
```
Disk No: 2050                                                           
Disk Title: Diver's Logbook                                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: Diver's Logbook                                          
Author Version: 3.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
DIVER'S LOG is for the active scuba diver or scuba club to record       
information about each dive for future retrieval and analysis.          
                                                                        
Now you can back up your paper log in case of loss, theft or damage.    
It's an insurance policy for your dive log.  Or, simply use it to review
locations for the name of that great dive spot you want to dive again.  
The program is completely menu driven.  You can store up to 1,024 dives 
in a single directory.                                                  
                                                                        
                                                                        
                                                                        
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
║               <<<<  Disk No 2050 DIVER'S LOGBOOK  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program Diver's Log, type: DIVE (press enter)              ║
║                                                                         ║
║ To print the manual, type:  COPY README.DOC PRN                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```
	 Divers Log Version 3.0                        January 2, 1990
	 
	 
	 1.0  INTRODUCTION
	 ____________________________________________________________
	 
	 Welcome to Divers Log 3.0 ! 
	 
	 The primary purpose of this program is to back up your paper
	 log in case of loss, theft or damage, and to allow you to
	 more easily recreate a new paper log.
	 
	 This package contains a number of important documents and
	 program files.
	 
	 The following is a list of additional disk files that you
	 should find on this disk.  The documentation files contain
	 all the information you need to use this package. 
	 
	 
	      ORDER   .FRM  Registered version order form. (The single
			    most important document on the entire 
			    disk !)
	 
	      README  .DOC  The fabulous file you are now looking at.

	      DIVEHELP.EXE  Small help screen, listing special use keys
			    available during use of Divers Log 3.0
			    This program is executed by DIVE.EXE
	 
	      DIVE    .EXE  The main program file.
	 
	 
	 If you find a bug in this program and report it to me, you
	 will get a registered copy of the next version at no cost.
	 
	 
	 
	 2.0  INSTALLING DIVERS LOG ON YOUR PC
	 _____________________________________________________________

	 The first thing you should do is make a backup of your existing
	 copy of Divers Log and keep it in a safe place.

	 The second thing you should do is copy DIVE.EXE and
	 DIVEHELP.EXE to the drive and directory you will use (or onto
	 a blank, formatted floppy.)

	 ! IMPORTANT !
	 YOU MUST LOAD THE ANSI.SYS DRIVER BEFORE USING THIS PROGRAM

	 Your CONFIG.SYS file must contain the following line

		  DEVICE = <drive:><\path\>ANSI.SYS

	 ANSI.SYS is supplied with DOS.  See your DOS manual for a
	 complete description of the CONFIG.SYS file and the ANSI.SYS
	 driver.



	 3.0  USING DIVERS LOG
	 _____________________________________________________________

	 There are several things you need to know about Divers log.
	 
	 1. Data files are created automatically during run time, if
	 not found at start-up.
	 
	 2. All files are created on the current drive and in the
	 current directory when DIVE.EXE is started.
	 
	 3. All menu commands are selected by using the ALT key plus
	 the first letter of the command name.
	 
	 5. If the Index or Data File is inadvertently erased, contact
	 RTD Software for technical assistance.
	 
	 6. Press F1 for help at any time to view the list of command
	 and hot keys.
	 
	 
	 
	 4.0  COMMANDS
	 _____________________________________________________________
	 
	 
	 ADD 
	 ____
	 
	 The add command allows dive log entries to be placed into
	 your electronic backup log.
	 
	 The following fields must contain strictly numeric data - the
	 characters (0-9).
	 
			   Depth
			   Air Consumption
			   Visibility
			   Water Temperature
			   Air Temperature
				
	 Entering any alpha characters into these fields will cause a
	 conversion error resulting in a zero value for that field.
	 
	 There are 2 input windows.  The left window is the primary
	 window.  The window on the right is called the TYPE window. 
	 The fields in the TYPE window can be either ON or OFF. 
	 Pressing any 'non hot key' while the cursor is in each
	 individual box will select or de-select the indicator.
	 
	 Press CTRL-END to move from the left window to the right
	 window, and then one more time to exit the right window. You
	 cannot go from the right window to the left window.
	 
	 
	 Modify
	 ______
	 
	 The Modify option allows you to (what else) modify a log
	 entry.
	 
	 It works exactly like the ADD command, with one small
	 exception.  You have to enter the Dive Number of the record
	 you wish to modify.  
	 
	 Pressing ESC aborts this command without modifying the
	 record.
	 
	 You will be asked for the dive number of the record you want
	 to modify. Pressing ESC or CTRL-END or entering 0 at the dive
	 number prompt will also terminate the command.
	 
	 
	 View
	 _____
	 
	 This command should be fairly self explanatory.  If you need
	 help, press F1.
	 
	 Use  PGUP  PGDOWN  HOME  END  to process the file, viewing
	 various records.  Press CTRL-END to return to the Main Menu
	 when you are done viewing the file.
	 
	 
	 
	 Print
	 _____
	 
	 This command is used to print out the ENTIRE log, 2 log
	 entries per page (8.5 X 11).
	 
	 This feature corresponds to the primary purpose of the
	 program.  To assist in recreating your paper log in case of
	 loss, theft or damage to your original paper log.
	 
	 
	 
	 Load
	 _____
	 
	 There is always the possibility of wanting to start
	 additional log files.
	 
	 This option allows you to do so.  Copy DIVE.EXE and
	 DIVEHELP.EXE to a new location and run DIVE.EXE before using
	 Load.
	 
	 IMPORTANT :  ALL LOG FILES ARE CREATED ON THE DEFAULT DRIVE
	 AND DIRECTORY WHERE DIVE.EXE IS EXECUTED FROM !
	 
	 
	 
	 5.0 WHAT HAPPENED TO THE DELETE COMMAND?
	 _____________________________________________________________
	
	 Tug of war of the mind is not a pretty site.  I finally
	 decided not to allow deletes from the file since you would
	 never delete a dive from your paper log.
	 
	 
	 
	 6.0 Further Information
	 _____________________________________________________________
	
	 All registered users may contact RTD Software Systems for
	 technical assistance.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2050

     Volume in drive A has no label
     Directory of A:\

    COMMAND  COM     25307   3-17-87  12:00p
    DIVE     EXE     25121  12-26-89  11:14p
    DIVEHELP EXE     40084  12-19-89  11:24p
    FILE2050 TXT      1851   1-16-90   2:42p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-16-90   2:46p
    ORDER    FRM      1976  12-27-89   8:29a
    README   DOC      5518  12-27-89   1:07p
            8 file(s)     100435 bytes
                           57344 bytes free
