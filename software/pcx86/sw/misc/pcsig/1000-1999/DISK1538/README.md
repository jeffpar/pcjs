---
layout: page
title: "PC-SIG Diskette Library (Disk #1538)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1538/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1538"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHURCH TREASURER"

    CHURCH TREASURER automates most of the heavy responsibilities of
    properly overseeing and managing the finances of a large church. It
    helps track your budget, income, and expenses listed under 500 budget
    categories of your choosing. Up to fifteen separate bank accounts are
    supported, including: checking, savings, and CDs. Balance your bank
    statements. You can even post to previous dates with an audit trail.
    
    Scores of standard and user-defined financial reports are provided to
    help you find exactly where funds are being expended. A handy utility
    allows you to translate budget item information into ASCII format for
    use with other programs such as your wordprocessor. This information
    can then be included in monthly church reports. A huge user manual is
    supplied on-disk along with an excellent tutorial.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESCRIP.DOC

{% raw %}
```
------------------------------------------------------------------------
VIANSOFT(R) CHURCH TREASURER
------------------------------------------------------------------------
THIS IS AN EASY TO USE PROGRAM TO KEEP TRACK OF BUDGET, INCOME AND 
EXPENSES FOR YOUR CHURCH.  YOU CAN PRINT OUT VARIOUS REPORTS FOR ANY 
COMBINATION OF ITEMS.  YOU MAY SET UP TO 500 BUDGET ITEMS, REPORT 
GROUPING OR FUND CATEGORIES.  IT WILL KEEP TRACK OF UP TO 15 DIFFERENT 
BANK ACCOUNTS (CHECKING, SAVINGS, CD, ETC.).  ASSISTS IN PROVING BANK 
STATEMENTS.  WILL ALLOW POSTING TO PREVIOUS DATE WITH AUDIT TRAIL.  WILL 
TRANSLATE BUDGET ITEM INFORMATION INTO ASCII FILE FOR USE WITH OTHER 
PROGRAMS.

README        NOTES ON HOW TO BEGIN
README   BAT  BATCH FILE TO DISPLAY README
CT1      ARC  VIANSOFT(R) CHURCH TREASURER MAIN PROGRAM
CT2      ARC  OVERLAY FOR CHURCH TREASURER
TUTOR    ARC  TUTORIAL FOR CHURCH TREASURER
TUTOR    BAT  BATCH FILE TO PRINT TUTORIAL
DATA     ARC  SAMPLE DATA FOR TUTORIAL
DATA2    ARC  SAMPLE DATA FOR TUTORIAL
SETUP    BAT  BATCH FILE TO SET UP TUTORIAL DISK
MANUAL   ARC  MANUAL FOR CHURCH TREASURER
MANUAL   BAT  BATCH FILE TO PRINT MANUAL
PROG     BAT  BATCH FILE TO SET UP PROGRAM DISK
PKXARC   EXE  PROGRAM TO UNARC FILES
DESCRIP  DOC  DESCRIPTION OF SOFTWARE AND FILES ON DISK
NOTES    ARC  UPDATE AND CHANGES TO USER'S MANUAL
NOTES    BAT  BATCH FILE TO PRINT NOTES
```
{% endraw %}

## FILE1538.TXT

{% raw %}
```
Disk No: 1538                                                           
Disk Title: Church Treasurer                                            
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Church Treasurer                                         
Author Version: 1.05                                                    
Author Registration: $85.00                                             
Special Requirements: 384K RAM, two floppy drives or hard drive, printer
                                                                        
CHURCH TREASURER helps to automate most of the heavy responsibilities of
properly overseeing and managing the finances of a large church.  It    
helps you track your budget, income, and expenses under 500 budget      
categories of your choosing.  The program supports up to fifteen        
separate bank accounts including checking, savings, and CDs.  It helps  
you balance your bank statements.  You can even post to previous dates  
with an audit trail.                                                    
                                                                        
Scores of standard and user-defined financial reports are provided to   
help you see exactly where funds are being expended.  A useful utility  
allows you to translate budget item information into ASCII format for   
use with other programs such as your wordprocessor.  This information   
can then be included in monthly church reports.  A huge user manual is  
on-disk along with an excellent tutorial.                               
                                                                        
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
║              <<<<  Disk #1538 CHURCH TREASURER  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To print documentation, type: TUTOR (press enter)                       ║
║                               MANUAL (press enter)                      ║
║                               NOTES  (press enter)                      ║
║                                                                         ║
║ To install the program, type: PROG [*]  (press enter)                   ║
║        "*" : DF installing to drive B                                   ║
║              UDDF updating to drive B                                   ║
║              HD installing to drive C                                   ║
║              UDHD updating to drive C                                   ║
║                                                                         ║
║ To install Tutorial Trial disk, make a copy of the disk and type:       ║
║                     SETUP (press enter)                                 ║
║                                                                         ║
║ To start the program, type: CT (press enter)                            ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1538

     Volume in drive A has no label
     Directory of A:\

    DATA2    ARC      3214   9-20-89   5:47p
    DATA     ARC      7038   9-20-89   5:45p
    MANUAL   ARC    100996   3-11-90   7:07p
    MANUAL   BAT        22   8-01-87   9:43p
    NOTES    BAT       398   8-19-89   2:12p
    NOTES    ARC      7099   3-12-90   1:50p
    README   BAT        44   5-19-89   6:17p
    TUTOR    BAT        21   8-01-87   9:50p
    PKXARC   COM     12242   4-27-87
    PROG     BAT      2666   3-13-90   4:03p
    SETUP    BAT      1490   3-13-90   3:51p
    README             787   3-19-90   6:40p
    DESCRIP  DOC      1412   9-24-89   5:14p
    TUTOR    ARC     24100   3-13-90   1:47p
    CT2      ARC     88128   3-19-90   7:52p
    CT1      ARC     65190   3-19-90   7:51p
    GO       BAT        38   4-21-88   9:08a
    GO       TXT      1541   3-21-90  12:29p
    FILE1538 TXT      2147   4-15-90   5:44p
           19 file(s)     318573 bytes
                           32768 bytes free
