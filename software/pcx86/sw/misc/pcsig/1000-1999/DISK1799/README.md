---
layout: page
title: "PC-SIG Diskette Library (Disk #1799)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1799/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1799"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "A-FILTER"

    This program calculates the resistor and capacitor values for various
    operational amplifier based active filter circuits. A-FILTER is menu-
    driven and covers high and low pass, equal value Sallen-Key filters to
    the 4th order.
    
    Calculations will simultaneously include seven response curves for each
    filter (greater than 1st order); best delay, compromise, flattest,
    slight dips, 1db dips, 2db dips and 3db dips.
    
    The screens are laid out in a format similar to the illustrations in
    "The Active Filter Cookbook" by Don Lancaster. The screens refer to
    pages in the book which show the shape of each curve. Although it is
    not necessary to have this book to run A-FILTER, the book provides
    valuable additional information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1799.TXT

{% raw %}
```
Disk No: 1799                                                           
Disk Title: A-Filter                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: A-Filter                                                 
Author Version: 02/15                                                   
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
This program calculates the resistor and capacitor values for various   
operational amplifier based active filter circuits.  A-FILTER is menu   
driven and covers high and low pass, equal value Sallen-Key filters to  
the 4th order.                                                          
                                                                        
Calculations will simultaneously include 7 response curves for each filt
(greater than 1st order); Best delay, Compromise, Flattest, Slight dips,
1db dips, 2db dips and 3db dips.  These filter configurations can be cas
to make bandpass filters.                                               
                                                                        
The screens are laid out in a format similar to the illustrations in    
"The Active Filter Cookbook" by Don Lancaster.  The screens refer to    
pages in the book which show the shape of each curve.  Although it is   
not necessary to have this book to run A-FILTER, the book provides      
valuable additional information.                                        
                                                                        
                                                                        
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
║                 <<<<  Disk #1799  A-FILTER  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: A-FILTER                                        ║
║                                                                         ║
║ To print documentation, type: COPY A-FILTER.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1799

     Volume in drive A has no label
     Directory of A:\

    A-FILTER EXE     63232   2-15-89   9:34p
    A-FILTER DOC     10713   2-16-89   7:09p
    FILE1799 TXT      2295  12-20-89   4:08p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   7:36a
            5 file(s)      76818 bytes
                           81920 bytes free
