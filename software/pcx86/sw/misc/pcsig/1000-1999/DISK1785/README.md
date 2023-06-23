---
layout: page
title: "PC-SIG Diskette Library (Disk #1785)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1785/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1785"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VIRUS CHECKER"

    VIRUS CHECKER is designed to alert you to viruses that add themselves to
    command files.  You create and maintain a list of the .BAT, .COM, and
    .EXE files that are on your disk drive.  CHECKER takes notice of the
    size of those files and each time it is run, it lets you know if
    anything has been added to them, the first sign of a virus.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHECKER.DOC

{% raw %}
```

 Douglas Bell's VIRUS CHECKER V2.0.0 ---------------------

 CHECKER is distributed by the Honor system.
             -------
 PLEASE SEND  $25  to:  Doug Bell, Box 2435, Lompoc, California 93438-2435
             -------
 HELP others safeguard their PC's!  Give them a copy of CHECKER.* !


  CHECKER checks a list of files for viruses that add themselves to files.
Initially, it is set up to check itself, and CHK.BAT and CHK.COM (decoys)
for viruses aimed at *.EXE *.BAT or *.COM files.

  You should run CHECKER ADD (see below) and add a list of your *.EXE *.COM
*.BAT and any other files that you want checked.


TO SETUP THE CHECKER ON YOUR HARD DISK:
  Enter:        SETUP

TO CHECK FOR A VIRUS:
  Enter:        CHECKER
  Only files listed in the file CHECKER.CHK will be checked.

  If the size of one of these files is changed by a virus, CHECKER
  will display the filename.

TO ADD A FILE TO THE LIST THAT GETS CHECKED:
  Enter:         CHECKER ADD
  Then, when requested, enter the complete file's pathname, including
  its extension.  Enter nothing when you are done.

TO REMOVE A FILE FROM THE LIST THAT GETS CHECKED:
  Enter:         CHECKER REMOVE
  Then, when requested, enter the complete file's pathname, including
  its extension.  Enter nothing when you are done.

TO MAKE CHECKING AUTOMATIC:
  Put CHECKER.EXE and CHECKER.CHK in your root directory (\).
  Add CHECKER to the \AUTOEXEC.BAT file.
  Now, whenever your system restarts, all the files in CHECKER.CHK will be
  checked for a virus.

HELP OTHERS SAFEGUARD THEIR PC'S BY GIVING AWAY COPIES OF CHECKER.* !

Run the CHECKER after you start your system, and before you shut down!



        CHECKER.EXE     -       The virus checking program.

        CHECKER.CHK     -       A text file listing files to be checked,
                                and the normal size of each file.

        CHK.BAT         -       A "decoy" to check for .BAT viruses.

        CHK.COM         -       A "decoy" to check for .COM viruses.

----------------------------------------------------------------

  Now there's a PC QUOTATION TRACKING SYSTEM  for  PURCHASING !

    Reduce TIME & EFFORT tracking vendor prices & information!

       SAVE MONEY by increasing PRODUCTIVITY and ACCURACY!

  1.    Enter quotation request details, items, and vendors.
  2.    The QTS quickly prints-out quote requests... up to 8 PER MINUTE!
  3.    Enter the responses from the vendors.
  4.    Select the vendors to receive orders.  ACCURATE AUTOMATIC FIGURING!
  5.    The QTS quickly prints-out PO's... up to 8 PER MINUTE!

        EASY TO USE!         O N L Y   $ 9 5         MONEY BACK GUARANTEE

 To order QTS or brochure phone 805 / 735 - 6831 or write to:
        Douglas Bell, Box 2435, Lompoc, CA 93438-2435



```
{% endraw %}

## FILE1785.TXT

{% raw %}
```
Disk No: 1785                                                           
Disk Title: Virus Checker                                               
PC-SIG Version: S1                                                      
                                                                        
Program Title: Virus Checker                                            
Author Version: 2.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
CHECKER is designed to alert you to viruses that add themselves to      
command files.  You create and maintain a list of the .BAT, .COM, and   
.EXE files that are on your disk drive.  CHECKER takes notice of how big
those files are and lets you know if anything is ever added to them, the
first sign of a virus.                                                  
                                                                        
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
║               <<<<  Disk #1785  VIRUS CHECKER  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  CHECKER (press enter)                          ║
║                                                                         ║
║ To print documentation, type:  COPY CHECKER.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1785

     Volume in drive A has no label
     Directory of A:\

    CHECKER  CHK        49   3-14-89   4:32p
    CHECKER  DOC      2854   3-14-89   4:57p
    CHECKER  EXE     45364   3-14-89   4:12p
    CHK      BAT        19   3-09-89   2:51p
    CHK      COM        19   3-09-89   2:51p
    FILE1785 TXT      1481  12-19-89   4:27p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-20-89   2:54p
    SETUP    BAT       181   3-14-89   4:48p
            9 file(s)      50545 bytes
                          106496 bytes free
