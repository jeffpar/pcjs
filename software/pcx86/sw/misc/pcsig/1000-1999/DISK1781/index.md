---
layout: page
title: "PC-SIG Diskette Library (Disk #1781)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1781/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1781"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CMOS-RAM/CHEKCMOS"

    Eventually the batteries in your AT will run out!  What happens then,
    you ask?  Well, your computer just won't boot up.  CMOS_RAM is the
    closest thing to having AT insurance.  It stores all battery maintained
    information on a disk file then allows you to easily restore it once
    you've replaced your battery.
    
    Not only the date and time depend on charged batteries, vital system
    configuration information is also held in CMOS RAM by battery power.
    Your computer is lost without it.  This program keeps a record of all
    that information.  It should be run, then stored away on floppy disk
    until the inevitable day comes when you need it.  On that day you won't
    have to panic or hire a technician.  You'll just slip this diskette in
    your A drive, boot your computer from floppy, type CMOS_RAM, press
    return, and after a short but delightful introductory screen the program
    will let you restore your CMOS RAM information from a disk file.
    
    This program also comes with a lookout utility that keeps an eye on your
    configuration file.  If you ever change your configuration, it will
    prompt you to update your CMOS RAM backup.  This lookout utility, called
    CHEKMOS, is also smart enough to watch your battery voltage and alert
    you if it starts to fade.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1781.TXT

{% raw %}
```
Disk No: 1781                                                           
Disk Title: CMOS-Ram/Chekcmos                                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: CMOS-RAM/CHEKCMOS                                        
Author Version: 08/21                                                   
Author Registration: $5.00                                              
Special Requirements: AT-Compatible or any computer that stores setup in
                                                                        
Eventually the batteries in your AT will run out!  What happens then you
ask?  Well, your computer just won't boot up.  CMOS_RAM.EXE is the      
closest thing to having AT insurance.  It stores all battery maintained 
information on a disk file then allows you to easily restore it once    
you've replaced your battery.                                           
                                                                        
Not only the date and time depend on charged batteries, vital system    
configuration information is also held in CMOS RAM by battery power.    
Your computer is lost without it.  This program keeps a record of all   
that information.  It should be run, then stored away on floppy disk    
until the inevitable day comes when you need it.  On that day you won't 
have to panic or hire a technician.  You'll just slip this diskette in  
your A drive, boot your computer from floppy, type CMOS_RAM, press      
return, and after a short but delightful introductory screen the program
will let you restore your CMOS RAM information from a disk file.        
                                                                        
This program also comes with a lookout utility that keeps an eye on your
configuration file.  If you ever change your configuration, it will     
prompt you to update your CMOS RAM backup.  This lookout utility called 
CHEKMOS is also smart enough to watch your battery voltage and alert you
if it starts to fade.                                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1781

     Volume in drive A has no label
     Directory of A:\

    CHEKCMOS EXE     38224   8-25-89  11:45a
    CMOS_RAM DOC     18666   8-31-89   7:31p
    CMOS_RAM EXE     55810   8-29-89  10:42a
    FILE1781 TXT      2665  12-19-89   4:02p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  12-20-89   1:13p
            6 file(s)     116020 bytes
                           41984 bytes free
