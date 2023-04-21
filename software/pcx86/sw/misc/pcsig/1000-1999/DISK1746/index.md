---
layout: page
title: "PC-SIG Diskette Library (Disk #1746)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1746/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1746"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PIROUETTE"

    Take total control of your database entry screen and report formats
    without doing a lick of programming. This database lets you "paint"
    screens and reports, giving the user maximum control over the
    appearance of input screens and printed output.
    
    Create databases of unlimited size. Data is loaded into memory one
    record at a time, so any file limitations are imposed by your disk
    size, not your system's memory. Files are in standard dBase format so
    they are compatible with other database software.
    
    PIROUETTE even has "relational" power to help you work with
    multiple, interrelated databases simultaneously. In addition, all
    standard search and sort routines are fully implemented.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1746.TXT

{% raw %}
```
Disk No: 1746                                                           
Disk Title: Pirouette                                                   
PC-SIG Version: S1.11                                                   
                                                                        
Program Title: Pirouette                                                
Author Version: 1.11                                                    
Author Registration: $59.00                                             
Special Requirements: 512K RAM, and two floppy drives or a hard drive.  
                                                                        
Take total control of your database entry screen and report formats     
without doing a lick of programming.  This database lets you "paint"    
screens and reports, giving the user maximum control over the appearance
of input screens and printed output.                                    
                                                                        
Users can create databases of unlimited size.  Data is loaded into      
memory only one record at a time, so any file limitations are imposed by
your disk size, not your system's memory.  Files are in standard dBase  
format so they are compatible with other database software.             
                                                                        
This database even has "relational" power to let the user work with     
multiple, interrelated databases simultaneously.  In addition, all      
standard search and sort routines are fully implemented.                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.TXT

{% raw %}
```


          This disk should contain the following files:

              READ.ME        A brief description of Pirouette
              INSTALL.TXT    These installation instructions
              PIROZIP.EXE    The program and documentation in archived form
              FINSTALL.BAT   Installation batch file for dual-floppy systems
              HINSTALL.BAT   Installation batch file for hard-disk systems

          As soon as you have installed the program, you should read the
          file LICENSE.TXT.  This file contains information about your
          continuing use of the program.




          HARD DISK INSTALLATION
          ======================

          To install Pirouette on your hard disk, you should first create
          a new directory; say, C:\PIRO.  This can be done by typing:

               C:\>mkdir \piro

          When you've done this, insert the diskette containing
          PIROZIP.EXE into drive A and log onto that drive. Then type:

               A:\>hinstall c:\piro

          When the installation is completed, you can then run the program
          by typing:

               C:\PIRO>piro

          or run the sample application by typing:

               C:\PIRO>piro sample




          DUAL-FLOPPY INSTALLATION
          ========================

          To install Pirouette on a two-floppy system, format three floppy
          diskettes.  Label them "PROGRAM DISK", "SAMPLE DISK", and "DATA
          DISK".

          Insert the diskette containing PIROZIP.EXE into drive A and log
          onto that drive.  Then type:

               A:\>finstall b:

          During the installation process, you will be prompted to insert
          each disk.





          When the installation is complete, the sample disk will contain
          a copy of the Pirouette help files and the sample application.
          The Data Disk will contain only the help files, and can be used
          for developing your own new application.  Insert the Program Disk
          in drive A and either the Sample Disk or the Data Disk in drive
          B. You can run the program by logging on to drive B and typing:

               B:\>a:piro




          OTHER DETAILS
          =============

          Your CONFIG.SYS file MUST contain the following line:

               FILES=20

          Files may be set to greater than 20, if desired.

          CONFIG.SYS will be found in the root directory on your hard
          drive, or on your boot disk if you are using a two-floppy system.



          * end of file INSTALL.TXT

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1746

     Volume in drive A has no label
     Directory of A:\

    PIROZIP  EXE    261084   9-10-90   1:11p
    READ     ME        969   9-10-90   1:11p
    FINSTALL BAT      1179   9-10-90   1:11p
    HINSTALL BAT       490   9-10-90   1:11p
    INSTALL  TXT      2670   9-10-90   1:11p
    GO       BAT        38   1-01-80   1:37a
    FILE1746 TXT      2073   9-21-90  10:23a
    GO       TXT       575   1-01-80   6:56a
            8 file(s)     269078 bytes
                           49152 bytes free
