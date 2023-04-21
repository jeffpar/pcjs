---
layout: page
title: "PC-SIG Diskette Library (Disk #1566)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1566/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1566"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NAMES & DATES (ALSO 1568)"

    Do you ever find yourself switching back and forth between
    your address manager and your calendar program?  Why not integrate both
    programs into one tidy application.  NAMES AND DATES keeps
    track of addresses and dates, and allows you to print mailing
    labels, envelopes, address books, and rolodex cards as well as wall
    calendars, and full page reports -- all from the same print menu.  With
    this one program you can set up a meeting, then generate a mailing label
    for a confirmation letter.
    
    The address records have extra large entry fields for a person's title,
    first name, last name or business name, address, two phone numbers,
    category, salutation, and eight lines of notes.  Data may be
    imported or exported from the program, and mail merge files can be
    created for letters.
    
    NAMES AND DATES also has a date reminder system, where you may
    enter the month, day and year of important events or appointments.  A
    monthly calendar will flash the important days that you have
    entered, or you can print these dates on a wall type calendar.
    Printing can be done on either conventional or laser printers.
    Complete documentation is included on the disk, as well as context
    sensitive help screens.
    
    NAMES AND DATES can handle an unlimited number of records.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1566.TXT

{% raw %}
```
Disk No: 1566                                                           
Disk Title: Names & Dates (also 1568)                                   
PC-SIG Version: S4.0                                                    
                                                                        
Program Title: Names & Dates                                            
Author Version: 4.0                                                     
Author Registration: $25.00                                             
Special Requirements: 512K RAM.                                         
                                                                        
Do you ever find yourself switching back and forth between              
your address manager and your calendar program?  Why not integrate both 
programs into one tidy application.  NAMES AND DATES keeps              
track of addresses and dates, and allows you to print mailing           
labels, envelopes, address books, and rolodex cards as well as wall     
calendars, and full page reports -- all from the same print menu.  With 
this one program you can set up a meeting, then generate a mailing label
for a confirmation letter.                                              
                                                                        
The address records have extra large entry fields for a person's title, 
first name, last name or business name, address, two phone numbers,     
category, salutation, and eight lines of notes.  Data may be            
imported or exported from the program, and mail merge files can be      
created for letters.                                                    
                                                                        
NAMES AND DATES also has a date reminder system, where you may          
enter the month, day and year of important events or appointments.  A   
monthly calendar will flash the important days that you have            
entered, or you can print these dates on a wall type calendar.          
Printing can be done on either conventional or laser printers.          
Complete documentation is included on the disk, as well as context      
sensitive help screens.                                                 
                                                                        
NAMES AND DATES can handle an unlimited number of records.              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```

     List of files on NAMES & DATES diskettes

READ.ME       Introduction, how to start using the program
INSTALL.BAT   Loads both diskettes to C: hard drive, creates \ND directory
OVERVIEW.DOC  Short summary of program features, requirements, etc.
MANUAL.DOC    Detailed documentation for the program
GO.BAT        Displays the READ.ME file on your monitor (type GO)
ORDER.FRM     An Order Form you can use to register the program
ORDER.BAT     Prints the Order Form on your printer (type ORDER)
ND.EXE        The NAMES & DATES program, type ND to start
*.OVL         Overlay programs needed by ND.EXE
NAMES.HLP     Help file while using the program, press F1 for Help messages
NAMES.*       Several files that hold your names and indexs to them
CATS.*        Several files that hold your "categories" and indexs to them
DATES.*       Several files that hold your "event dates" and their indexs
SETUP.DAT     Holds the setup data defining how to print reports, labels, etc.
TRAN.EXE      Transfers name & address data from NamePal software files
CONFIG.SYS    Needed on hard disk root or DOS diskette (FILES=20, BUFFERS=16)
    *Warning: see READ.ME about CONFIG.SYS (special installation required)
UPGRADE.BAT   Replaces prior version with new version on hard drives only
BACKUP.BAT    Copies data files to A: drive for backup purposes
FILES.TXT     Description of the files on the NAMES & DATES diskettes
```
{% endraw %}

## OVERVIEW.DOC

{% raw %}
```
         Program name: Names & Dates                      Date: 10/5/90
         Version number: 4.0

         Author:  WR Software
         Address: P.O. Box 4819
                  Walnut Creek, CA  94596 USA
         Telephone number: (415) 930-0369

         Requirements: any IBM/Compatible computer, DOS 2.1 or later,
               minimum 512K.

                                Program Description
         ******************************************************************
         Purpose: mailing list manager, date reminder system, and personal
                   address book

         Features: unlimited records (available disk space), automatic phone
                   dialing, prints wall type calendars with your date
                   reminder messages, prints mailing labels (7 formats,
                   including laser), prints rolodex cards, sequence by name
                   or zip, 8 report formats, prints envelope addresses
                   (including laser), 5 line address, 33 characters/line,
                   prints variable size address books, has repeat date add,
                   holds home and business phone plus extension, large notes
                   area that uses disk space only if filled in, mail merge
                   with several salutation options, export, import, group
                   names/dates by categories, extensive date support features,
                   duplicate name search, printing of individual labels or
                   envelopes, several mass date purging options, holds
                   unlimited number of date reminders, screen display of
                   monthly calendar with date reminders highlighted, context
                   sensitive help, documentation file on disk, text scan,
                   resume print at any point, date alarms.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1566

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        14   1-08-86   1:59p
    ORDER    BAT        21   2-26-89   7:22p
    INSTALL  BAT      1594   1-14-90  11:50a
    UPGRADE  BAT      1708   2-06-90   5:58p
    READ     ME       1328  10-13-90   9:21a
    CONFIG   SYS        22   7-28-89  11:14a
    FILES    TXT      1433   3-02-90   8:40a
    ND       EXE    326320  10-05-90   1:15p
    INTRO    OVL      1584  10-05-90   1:12p
    ORDER    FRM      1113  10-05-90   2:17p
    OVERVIEW DOC      1875  10-05-90   2:28p
    FILE1566 TXT      2887  11-14-90   9:28a
           12 file(s)     339899 bytes
                           15360 bytes free
