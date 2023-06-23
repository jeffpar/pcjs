---
layout: page
title: "PC-SIG Diskette Library (Disk #1843)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1843/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1843"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EIMS"

    This program maintains an equipment inventory, user-defined maintenance
    costs, and scheduled maintenance for each equipment item.
    Maintenance can be scheduled for almost anything.  Although based on
    time schedules, this can still be used for periodic checks of other
    maintenance-based systems.
    
    With EIMS, a quick check can be made periodically to see what
    maintenance is due, or you can print scheduled maintenance reports on a
    timely basis to stay on top of things.  A date prompt is provided to
    enter a future date to plan a schedule for perhaps a week or month ahead
    of time.
    
    The program offers virtually unlimited record capacities.  It also uses
    auto lookup tables and scrolling record windows for ease of use.  It
    will even blank your monitor screen after 10 minutes of inactivity.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1843.TXT

{% raw %}
```
Disk No: 1843                                                           
Disk Title: EIMS                                                        
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: EIMS                                                     
Author Version: 1.2                                                     
Author Registration: $35.00                                             
Special Requirements: 512K RAM. A hard or high density drives are recomm
                                                                        
This program maintains an equipment inventory, user-defined maintenance 
costs, and scheduled maintenance for each equipment item.               
Maintenance can be scheduled for almost anything.  Although based on    
time schedules, this can still be used for periodic checks of other     
maintenance-based systems.                                              
                                                                        
With EIMS, a quick check can be made periodically to see what           
maintenance is due, or you can print scheduled maintenance reports on a 
timely basis to stay on top of things.  A date prompt is provided to    
enter a future date to plan a schedule for perhaps a week or month ahead
of time.                                                                
                                                                        
The program offers virtually unlimited record capacities.  It also uses 
auto lookup tables and scrolling record windows for ease of use.  It    
will even blank your monitor screen after 10 minutes of inactivity.     
                                                                        
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
║                    <<<<  Disk #1843 EIMS  >>>>                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To self-unarchive the program, type:  EIMS12 (drive:)   (press Enter)   ║
║                                                                         ║
║ After unarchiving, start program by typing: EIMS        (press enter)   ║
║                                                                         ║
║ To print documentation, type: COPY EIMS.DOC PRN         (press enter)   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1843

     Volume in drive A has no label
     Directory of A:\

    EIMS12   EXE    186017   8-09-90   3:09a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   8-09-90   3:13a
    FILE1843 TXT      2221   8-09-90   2:51p
            4 file(s)     188970 bytes
                          131072 bytes free
