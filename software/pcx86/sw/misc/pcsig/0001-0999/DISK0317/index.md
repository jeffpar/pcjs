---
layout: page
title: "PC-SIG Library Disk #317"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0317/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsig0/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0317"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "DATABASE PROGRAMS"

    A collection of database management programs.  The mailing labels
    program allows sorting by four fields and keying printing of labels by
    any field.  PMB15.BAS provides a way of keeping track of events which
    occur periodically such as bills, preventive maintenence items, dental
    appointments, etc.  INDXCARD.BAS is intended to make it very easy to
    create and maintain 3" by 5" card files.  By itself, it forms an
    electronic typewriter with full editing facilities for the 3 by 5 card
    format.  It can be used with the program PC- FILE III.
    
    Features:
    
    ~ Forms an electronic typewriter with full editing facilities.
    ~ Uses PC-FILE to sort index cards prior to printing.
    ~ Sorts a mailing list by four fields.
    ~ Prints one across or two across labels.
    ~ Keeps track of bills, preventive maintenence items, dental
    appointments.
    ~ Writes your appointments  or  activities for the whole year.
    ~ Schedules your activities from 6 a.m. till 10 p.m.
    ~ Creates a computerized Rolodex.
    
    System Requirements:  Two disk drives, a Color/Graphics
    Adapter Card (color not used), Epson MX-80 (or compatible) printer.
    
    How to Start: Consult the .DOC files for documentation and
    directions.  To run the BASIC programs follow the GETTING STARTED
    instructions for your configuration.
    
    File Descriptions:
    
    ADDRESS1 FIL  Subroutine for the above program
    ADDRESS  BAS  Random address file and mailing label printing program
    FRM      BAS  BASIC program to generate blank 3" by 5"index cards
    FILECAB  BAS  BASIC program to create and maintain databases
    BOOKINV  BAS  Menu for book tracking in the library
    BARRGOLD FRM  Format of gold prices quotes
    INDXCARD BAS  BASIC program to generate index cards
    INDXCARD BAT  A DOS batch file to prepare a data disk
    INDXCARD CMP  A BASIC program to compress data
    INDXCARD DTA  Card data entered by INDXCARD.BAS
    INDXCARD DOC  Documentation for INDXCARD.BAS
    PC^3LOG  FRM  Format for meeting reminder and log for PC meetings
    MAIL1    DOC  Documentation for MAIL1.BAS
    MAIL1    BAS  Mailing list program
    INDXCARD RPT  Used by PC-FILE to clone sorted data
    INDXCARD KEY  Key definitions used by INDXCARD.BAS
    INDXCARD INX  Index file used by PC-FILE
    INDXCARD HDR  Field definitions used by PC-FILE
    INDXCARD FRM  Card format created by INDXCARD.BAS
    PMB15    DOC  Documentation for PMB15.BAS
    PMB15    BAS  A preventive maintenance, bills and message program
    WSJSTOCK FRM  Format for stock prices
    WEATHER  FRM  Format for weather report
    VWREPAIR FRM  Format for VW Rabbit service log
    TEST     FRM  Format for test pattern
    SCHEDU   DOC  Documentation for SCHEDU.BAS
    SCHEDU   BAS  A BASIC program to generate and maintain calendars
    ROLODEX  DOC  Documentation for Rolodex.bas
    ROLODEX  BAS  A computerized Rolodex
    ???      BAK  Backup or information files
    ITEMDATA DAT  Data file for PMB
    GRAPHICS      Graphics subdirectory

### Directory of PC-SIG Library Disk 0317

     Volume in drive A has no label
     Directory of A:\

    INDXCARD BAS     20608  11-21-83   2:55p
    INDXCARD CMP      1024   5-03-83  12:19p
    INDXCARD DOC     34540   5-02-83   6:47p
    INDXCARD HDR       384   4-12-83   8:54p
    INDXCARD BAT       105   4-29-83  10:49a
    INDXCARD DTA      9856   5-03-83  11:44a
    INDXCARD FRM      1024   5-03-83  11:13a
    INDXCARD INX       512   5-03-83  11:43a
    INDXCARD KEY      1536   5-03-83  11:37a
    INDXCARD RPT       128   4-14-83   9:30p
    WEATHER  FRM       384   8-17-82
    BARRGOLD FRM       384   8-07-82
    PC^3LOG  FRM       384   8-07-82
    WSJSTOCK FRM       256   8-07-82
    VWREPAIR FRM       384   8-21-82
    TEST     FRM       384   8-14-82
    FILECAB  BAS     13626   2-25-84   7:57p
    FRM      BAS      3730   2-25-84   7:51p
    BOOKINV  BAS      5253   2-25-84   9:05p
    MAIL1    BAS     20480   2-15-83   2:27p
    MAIL1    DOC      2816   1-02-83  11:59p
    PMB15    BAS     26304   1-11-87   4:27p
    SCHEDU   BAS     18739   5-31-84   7:51p
    SCHEDU   DOC     13230   6-30-84   6:48p
    ADDRESS  BAS     12672   3-25-84  10:06a
    ADDRESS1 FIL      2376   3-25-84  10:12a
    ROLODEX  BAS     10624   3-09-84   9:10p
    ROLODEX  DOC      4310   7-15-84   6:48p
    FILES317 TXT      2040   1-28-87   7:12p
    ITEMDATA BAK        38   1-11-87   4:00p
    PMB15    BAK      3651   1-11-87   4:30p
    ITEMDATA DAT       158   1-11-87   4:02p
    PMB15    DOC      3651   1-11-87   4:34p
    DEMOPLOT PAS      7829   9-19-86   8:32a
    HIPLOT2  EXE      3840  10-08-86   8:46p
    HIRESPLT PAS     34771   9-19-86   8:24a
    PLOTTER  DOC     19983   1-18-87  11:12a
    README   DOC      3326   1-18-87  11:06a
    HIRESPLT ARC     32858   1-18-87  11:12a
    README   NOW      1011   1-19-87   7:38a
    README   BAK       728   1-19-87   7:32a
           41 file(s)     319937 bytes
                           21504 bytes free
