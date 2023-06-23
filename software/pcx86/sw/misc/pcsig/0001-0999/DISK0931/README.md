---
layout: page
title: "PC-SIG Diskette Library (Disk #931)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0931/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0931"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPEEDY MAILER JR. MAILING LIST"

    SPEEDYMAILER lets you keep track of a list of people with their names
    and addresses, allowing you to get rid of that old address book you
    keep forgetting to update.
    
    This program can be useful for maintaining lists of clients, group
    members, magazine or newsletter subscribers, as well as numerous other
    applications.  Data within your list can be sorted in a number of ways:
    by name (either the person's last or first name), city, state, and
    zipcode.  In addition, SPEEDYMAILER provides for two "code" fields
    which you can use to further differentiate between entries in your
    database.  Additional fields are also available for title, company,
    entry date, edit date, and CarRt sort.
    
    Output from SPEEDYMAILER comes in a variety of different formats.  It
    prints out labels in two different sizes (4" x 1-7/16" and 3-1/2" x
    15/16").  It also prints your names list on two sizes of Rolodex cards
    (4" x 2-1/6" or 3" x 5").  The program performs well in all of its
    intended functions, and is a fine mailing list program which should
    serve well for smaller lists.
    
    One last note: the version of SPEEDYMAILER on this disk is an
    evaluation version only.  It holds a maximum of twenty names and no
    more.  In order to get more capacity, you must send the registration
    fee directly to the author for the full version of the program.
    
    System Requirements:  384K memory and a hard disk.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $40.00
    
    File Descriptions:
    
    READ-ME  DOC  Start-up information.
    SMAIL    EXE  Main program.
    CONFIG   SYS  Lines to be added to existing CONFIG.SYS file.
    ???????? NTX  Used by main program (9 files).
    ???????? DBF  Data files created by smail (3 files).
    ???????? LBL  Used by main program (12 files).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES931.TXT

{% raw %}
```
Disk No  931
Program Title: SPEEDYMAILER version 4.0
PC-SIG version 1
 
    SPEEDYMAILER keeps track of a list of names (and their associated
information--address, etc.). This is useful for maintaining lists of
clients, group members, magazine or newsletter subscribers, as well as
numerous other applications. Names within your list can be sorted in a
number of ways. You can sort by name (last or first), city, state, and
zipcode. In addition, the program provides for two "code" fields which you
can use to further differentiate between entries in your database.
Additional fields are also available for title, company, entry date, edit
date, and CarRt sort. Output from SPEEDYMAILER comes in a variety of
flavors. It prints out labels in two different sizes (4 x 1 7/16 inch and 3
1/2 x 15/16 inch). It also prints your names list on two sizes of Roladex
cards (4 x 2 1/6 or 3 x 5 inch). The program performs well in all of its
intended functions, however it does not necessarily live up to its name.
When sorting your names list, if you decide to sort on a different field
than you had previously been sorting, the resulting re-indexing of your
database could get quite time- consuming. This probably would not present
much of a problem for smaller lists (100 or so names), but for lists of
larger numbers (1000+) this task could take quite a while. All things
considered though, this is a fine mailing list program and should serve
well for smaller lists. One last note (and it's an important one) the
version of SPEEDYMAILER on this disk is an evaluation version only. It
holds a maximum of 20 names and no more. In order to get more capacity, you
must register the program.
 
Usage: Mailing List
 
System requirements: 384K memory and a hard disk drive.
 
How to start: Type: SMAIL (press enter).
 
Suggested Registration: $40.00
 
File descriptions:
 
READ-ME  DOC  Start up information.
SMAIL    EXE  Main program.
CONFIG   SYS  Lines to be added to existing CONFIG.SYS file.
???????? NTX  Used by main program (9 files).
???????? DBF  Data files created by smail (3 files).
???????? LBL  Used by main program (12 files).
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 931 SPEEDYMAILER  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, Type:                                       ║
║             COPY READ-ME.DOC LPT1: (press enter)                        ║
║                                                                         ║
║ To run the program, Type: SMAIL (press enter)                           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## READ-ME.DOC

{% raw %}
```
*****************************************************************************
                        Copyright Notice
*****************************************************************************

        This software is a user-supported software package and is
protected by a federal copyright.  The use of this software program 
is expressly prohibited, except as authorized herein.  If you have
received this software from another user and found this software 
useful the author would appreciate your sending a contribution of $1.
Without the written consent of the author, users of this software 
and documentation are granted a limited license to make an evaluation 
copy for trial use on a private, non-commercial basis.  This license 
does not include distribution of this software package:

        1. In connection with any other product or service
        2. For general use within a company or institution
        3. For any consideration or 'disk fee'
        4. Distribution in modified form

Please support the user-supported concept of software distribution
so quality software can be made available at reasonable prices.  Thank
you for your support.

*****************************************************************************
             SpeedyMailer PROGRAM INSTALLATION NOTES
*****************************************************************************

Hardware Requirements:
	384K Ram memory (minimum)
	Printer of almost any type compatible with your computer
	1 360K Floppy Disk Drive and 1 Hard Disk                    
Software Requirements:
	Configuration file CONFIG.SYS supplied on the program disk 
	to be merged with whatever configuration file you are presently
	using for your system.  If you are not using a CONFIG.SYS file
	at this time just copy the one supplied to your system boot
	disk, or to your boot directory.  Copy the contents of this
        diskette to your hard disk.  Program is ready for execution. 

*****************************************************************************
              SpeedyMailer PROGRAM APPLICATION NOTES
*****************************************************************************

The program is totally menu driven and as such requires almost no
written instructions to execute.  To execute the program type in:

                              SMAIL

Note: The junior version you have received under the user supported
      sytem of software distribution is limited to 20 entries.  Should
      you require a version with unlimited entries support, send $35
      plus $5 for shipping and handling to:

                LumBauer Software
                P.O. Box 700215
                San Jose, CA  95170
      
      You will receive a complete manual and a version of the program
      that will allow you to make an unlimited amount of entries, limited
      only by the capacity of your storage device.  The program does not
      use copy protection of any type for the convenience of the user.

The following information is provided for you to be able to use the 
fully functional junior version of the program.

        Return and Regular Mailing Labels use 4 x 1 7/16 inch labels.
        Carrier Presorted and Extra Code Labels use 3 1/2 x 15/16 inch
                labels.
        Rotary Cards can use either 4 x 2 1/6 or 3 x 5 cards

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0931

     Volume in drive A has no label
     Directory of A:\

    BFILE    DBF       891   5-20-87   8:31p
    BRTN     DBF       512   2-09-87  10:26a
    BTST     DBF      1204   1-19-87   3:43p
    READ-ME  DOC      3400   5-06-87   7:09p
    SMAIL    EXE    274912   6-01-87   3:40p
    DATBASE1 LBL      1034   1-27-87  11:03p
    PRESORT1 LBL      1034   1-15-87   6:59p
    PRESORT2 LBL      1034   1-15-87   6:58p
    PRESORT3 LBL      1034   1-15-87   6:58p
    REGULAR1 LBL      1034   1-03-87   1:24p
    REGULAR2 LBL      1034   1-03-87   1:25p
    REGULAR3 LBL      1034   1-03-87   1:27p
    ROT42    LBL      1034   1-26-87  10:37a
    ROT53    LBL      1034   1-26-87  10:41a
    SPECIAL1 LBL      1034   1-03-87   1:32p
    SPECIAL2 LBL      1034   1-03-87   1:32p
    SPECIAL3 LBL      1034   1-03-87   1:33p
    CONFIG   SYS        22   5-06-87   5:37a
    FILES931 TXT      2282  12-14-87   9:45a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-09-87   4:37p
           21 file(s)     296286 bytes
                            8192 bytes free
