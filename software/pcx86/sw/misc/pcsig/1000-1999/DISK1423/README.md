---
layout: page
title: "PC-SIG Diskette Library (Disk #1423)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1423/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1423"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MULTI ASSISTANT"

    MULTI ASSISTANT wants to be your personal executive assistant, and keep
    track of the myriad of necessary details in your hectic life! This PC
    whiz kid takes care of your finances, calculates lending figures,
    manages your telephone and mailing lists, inventories your investments,
    and keeps your calendar.
    
    MULTI ASSISTANT prints checks for you, confirms checks/deposits (which
    it disburses into budget areas you select), finds and lists checks by
    category, and computes your account balance.
    
    Track your personal investments, compute their investment value, and
    pull them up to view by name or number. Maintain multiple investment
    files with multiple categories per file. Track your debits, compute
    loan interest, and display and print payment schedules.
    
    MULTI ASSISTANT acts as your personal secretary, maintaining telephone
    and mailing lists, and multiple directories. It can print addresses
    from your keyboard input or from list files, onto labels or directly
    onto envelopes -- even inserting the return address. It ensures that
    you will never forget another appointment or important project deadline,
    by keeping your calendar for you. It displays daily and weekly events
    or the events between any two dates you choose.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1423.TXT

{% raw %}
```
Disk No: 1423                                                           
Disk Title: Multi Assistant                                             
PC-SIG Version: S2                                                      
                                                                        
Program Title: Multi Assistant                                          
Author Version: 2.0                                                     
Author Registration: $29.00 or $39.00.                                  
Special Requirements: 384K RAM.                                         
                                                                        
MULTI ASSISTANT wants to be your personal executive assistant, and keep 
track of the myriad of necessary details in your hectic life!  This PC  
whiz kid takes care of your finances, calculates lending figures,       
manages your telephone and mailing lists, inventories your investments, 
and keeps your calendar.                                                
                                                                        
Manage your checking and charge accounts.  MULTI ASSISTANT prints checks
for you, confirms checks/deposits (which it disburses into budget areas 
you select), finds and lists checks by category, and computes your      
account balance.                                                        
                                                                        
Track your personal investments, compute their investment value, and    
pull them up to view by name or number.  Maintain multiple investment   
files with multiple categories per file.  Track your debits, compute    
loan interest, and display and print payment schedules.                 
                                                                        
MULTI ASSISTANT acts as your personal secretary, maintaining telephone  
and mailing lists, and multiple directories.  It can print addresses    
from your keyboard input or from list files, onto labels or directly    
onto envelopes -- even inserting the return address.  It ensures that   
you will never forget another appointment or important project deadline,
by keeping your calendar for you.  It displays daily and weekly events  
or the events between any two dates you choose.                         
                                                                        
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
║                 <<<<  Disk #1423  MULTI ASSISTANT  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation and installation instructions, type:             ║
║                     COPY MAST.DOC PRN (press Enter)                     ║
║                                                                         ║
║ To start MULTI ASSISTANT, type:  MAST (press Enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## MAST.DOC

{% raw %}
```

                      MULTI ASSISTANT V2.00

 Installation
   Backup your program disks, archive the originals, and use the backups
   Type MINSTALL A C for the normal hard drive
   The backup program expects the C drive, and MAST directory
   Set up all default in the UTILITIES screens

 Normal use
   You may call MAST to find telephone numbers, and calendar events without
   screen interaction. Type MAST and find how.

 Main screen
   Press NUMERIC key to select following screens, press ESC to back out
   Pressing a NUMERIC "1" will take you to FINANCE, ESC will bring you back
   A search parameter of * will find all records in the search field.
   An ESC during operation will stop most command processing.

 Finance screen
   1.Sets from and too dates and account (1-9) or ALL
   2.Enters a check into the accessed account
   3.Lists records between dates in accessed account that match key word
   4.Finds & edit records between dates in accessed account that match key word
   5.Enter a deposit into the accessed account
   6.Plots all records between dates in accessed account that match key word
   7.Calculates accessed account balance between dates
   9.Finance utilities

 Calculate interest screen
   Calculates payments on a specified amount, interest, time

 Telephone screen
   1.Import ascii file - allows you to import a fixed format file to system
     The required format prints at the start
   2.Add a record to a selected telephone directory
   3.Lists records between dates in accessed directory with key word
   4.Find (and edit) records between dates in accessed directory with key word
   5.Prints a mail list (name, address, city, state, zip) matching key word
   6.Prints a phone list of all items in the database of matching key word
   7.Allow you to change the search field the key word will compare against
   8.Changes the database in use
   9.Utilities

 Investment screen
   1.Changes the dates you will search for records between
   2.Add a record to the selected investment database
   3.Lists records between dates in accessed database with key word
   4.Find (and edit) records between dates in accessed directory with key word
   5.Updates the sold price on an entry between dates that is not sold.
   6.Sums value of all records between the dates that match the key word
   7.Allow you to change the search field the key word will compare against
   8.Changes the investment database in use
   9.Utilities

 Inventory screen
   1.Changes the dates you will search for records between
   2.Add a record to the selected inventory database
   3.Lists records between dates in accessed database with key word
   4.Find (and edit) records between dates in accessed directory with key word
   5.Sets the search parm key word
   6.Changes the search class used in the list records (ALL selects everything)
   7.Allow you to change the search field the key word will compare against
   8.Changes the inventory database in use
   9.Utilities

 Calendar screen
   1.Changes the dates you will search for records between
   2.Add a record to the selected calendar database
   3.Lists records between dates in accessed database with key word
   4.Find (and edit) records between dates in accessed directory with key word
   5.Lists the selected calendar for today's events
   6.Lists the selected calendar for this weeks events
   7.Allow you to change the search field the key word will compare against
   8.Changes the calendar database in use
   9.Utilities

 Label screen
   1.Prints labels with specific data, may have a serial number
   2.Prints labels from a database, if search field matches a key word
   3.Rotates the program between envelope mode and label mode
   4.Moves SET pointer vertically between print characteristic items
   5.Moves SET pointer horizontally between parameters 1,2,and 3
   6.Rotates print characteristic the SET pointer is next to between all values
   7.Changes the field to search on, the key word is entered at 2
   8.Changes the TELEPHONE database in use
   9.Utilities

 Backup/restore screen
   1.Changes between backup and restore
   2.Backs up all of the MAST files, if installed with install.bat
   3.Backs up finance databases only
   4.Backs up telephone databases only
   5.Backs up investment databases only
   6.Backs up inventory databases only
   7.Backs up calendar databases only
   9.Changes the backup disk, usually disk A

 Utilities screen
   1.Sets database year in use, ie 90
   2.Sets screen colors, using DBASE standards
   3.Sets program drive, default is "C"
   4.Sets program directory, default is "\MAST"
   5.Sets backup drive, default is "A"
   6.Sets listing printer port, default is "LPT1"

 Registration fees
    You are granted a 60 day evaluation period for this program.
    If you like it and wish to continue using it, the fee's are as follows:

    This license fee authorizes one copy of MULTI ASSISTANT on one machine.

      $39 - Registration fee
      $49 - Registration fee and instruction manual

      Mail checks or money order to:   JONES CONSULTING
                                       619 N Dougherty Ave
                                       Morgan Hill, Ca  95037
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1423

     Volume in drive A has no label
     Directory of A:\

    MAST     DOC      5314   8-15-90   2:00a
    MAST     EXE    247137   8-15-90   2:00a
    MAST1    DBF       562   8-15-90   2:00a
    MAST2    DBF       161   8-15-90   2:00a
    MAST3    DBF       616   8-15-90   2:00a
    MAST31   DBF       616   8-15-90   2:00a
    MAST32   DBF       616   8-15-90   2:00a
    MAST4    DBF       485   8-15-90   2:00a
    MAST41   DBF       485   8-15-90   2:00a
    MAST42   DBF       485   8-15-90   2:00a
    MAST5    DBF       485   8-15-90   2:00a
    MAST51   DBF       485   8-15-90   2:00a
    MAST52   DBF       485   8-15-90   2:00a
    MAST6    DBF       878   8-15-90   2:00a
    MAST61   DBF       878   8-15-90   2:00a
    MAST62   DBF       878   8-15-90   2:00a
    MAST90   DBF       562   8-15-90   2:00a
    MAST91   DBF       562   8-15-90   2:00a
    MAST92   DBF       562   8-15-90   2:00a
    MAST93   DBF       562   8-15-90   2:00a
    MINSTALL BAT      6328   8-15-90   2:00a
    GO       BAT        38   4-24-89   4:39p
    FILE1423 TXT      2813   9-10-90   9:47a
    GO       TXT       648   1-01-80   1:49a
           24 file(s)     272641 bytes
                           37888 bytes free
