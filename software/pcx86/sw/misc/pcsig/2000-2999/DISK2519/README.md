---
layout: page
title: "PC-SIG Diskette Library (Disk #2519)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2519/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2519"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2519.TXT

{% raw %}
```
Disk No: 2519                                                           
Disk Title: Eventman                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: EVENTMAN Personal Event Manager                          
Author Version: 2.0                                                     
Author Registration: $17.00                                             
Special Requirements: A hard drive or high density floppy drive.        
                                                                        
EVENTMAN makes it easy to remember the important dates to remember in   
your life.  Whether it's birthdays, anniversaries, holidays, deadlines, 
business meetings or anything, EVENTMAN can search for upcoming events  
whenever you type "whatsup."  EVENTMAN will tell you what events are    
coming in 30, 60, or 90 days.                                           
                                                                        
You record your important dates in an easy-to-use "windows-like" event  
database.  You can also print lists of your events, and run the program 
from your autoexec.bat file to automatically see what important events  
are coming up.  EVENTMAN's on-line help makes it easy for anyone to use.
It includes a screen saver and supports a mouse.                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  DISK #2519 EVENTMAN  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To install EVENTMAN to your hard drive or high density disk, type:      ║
║ INSTALL X (where X is the letter of your hard drive)                    ║
║                                                                         ║
║ After installation, to start the program, type: EVENTMAN                ║
║                                                                         ║
║ To print the documentation, type: COPY README2.TXT PRN                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1991, PC-SIG Inc.
```
{% endraw %}

## INFO.TXT

{% raw %}
```
                    EVENTMAN Personal Event Manager
                              Version 2.0

                           by TASCS Company
                            P. O. Box 2326
                  Redondo Beach, California 90278-7826

                  Copyright 1990 - All Rights Reserved


  After installation is complete, you can start EVENTMAN by typing:

     C:> EVENTMAN

at the DOS prompt (the "C:>") and then pressing Enter.

  The WHATSUP capability is an important and integral part of using EVENTMAN.
This capability is provided by a pair of files - WHATSUP.BAT and EVENTCHK.EXE.
The WHATSUP.BAT file is created in the first directory listed in your PATH
statement or C:\ if no PATH statement could be found.  To use WHATSUP, type:

     C:> WHATSUP

To find all events in either EVENTCHK.VNT or CALENDAR.VNT for the next 90
days.  To search for a different period of time, simply enter the number of
days after WHATSUP:

     C:> WHATSUP 30

will report only for the next thirty days.  We highly recommend you add
WHATSUP to your AUTOEXEC.BAT file.  For more recent versions of DOS, add:

   CALL WHATSUP 45

to the autoexec.bat file for a 45-day search.  DOS versions earlier than
3.2 do not have the 'CALL' feature.  Simply drop 'CALL ' and add only
WHATSUP 60 for a 60-day search.  When WHATSUP.BAT runs, it actually runs
EVENTCHK.EXE installed in your installation directory.  WHATSUP.BAT can be
modified to search other than the default .VNT files. (Only two separate
files may be searched via EVENTCHK.EXE, using the format of WHATSUP.BAT.

Manual and Missing Features - While EVENTMAN is fully functional, a few
features and a manual text file are missing.  When requested, missing
features respond with a message "Feature Not Implemented".  These features
will be accompany the next release of EVENTMAN.  Please register today to
speed the next version to you with all features and a manual file.
All registered users (including preregistered users) will receive the
update by mail when available.

SHAREWARE NOTICE!  This EVENTMAN program may be distributed as shareware
subject to the license agreement in the file READ.ME2.  If you are a
registered user of EVENTMAN, THANK YOU!  If not, you must register (at a
very reasonable cost) to continue using EVENTMAN.  See the file READ.ME2
for more details.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2519

     Volume in drive A has no label
     Directory of A:\

    DEFAULT  PDV       131   8-26-90  12:45a
    EPSONLQ  PDV       294   8-31-90  12:12a
    EVENTMAN EXE    127874   9-21-90  11:36p
    HPLASER2 PDV       611   8-30-90   7:57a
    NECP2200 PDV       266   8-30-13  10:28p
    PAINTJET PDV       221   8-31-90   7:58a
    TASCS    LGO       829   6-21-90  11:00p
    EVENTCHK VNT        48   9-20-90  11:18p
    CALENDAR VNT      1267   9-23-90  12:12a
    EVENTCHK EXE     21320   9-23-90  12:06a
    INSTVNT  EXE     27180   9-22-90  11:43p
    PINFOSET DAT       109   7-02-90  10:29p
    INSTALL  BAT       240   9-20-90  11:58p
    EVENTMAN HLP      7785   9-22-90  11:01p
    READ     ME2     20413   9-22-90  11:01p
    INFO     TXT      2385   9-22-90  11:46p
    WHATSUP  BAT       214   9-23-90  11:41p
    EVENTMAN BAT        27   9-23-90  11:41p
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       957  10-04-90   3:35p
    FILE2519 TXT      1929  10-04-90   3:36p
           21 file(s)     214128 bytes
                           96256 bytes free
