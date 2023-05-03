---
layout: page
title: "PC-SIG Diskette Library (Disk #1884)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1884/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1884"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RESISPOP"

    RESISPOP is a simple resistor selection program that allows you
    to convert arbitrary resistance values between 1.0 ohm and 10 Mohm to
    standard values for 0.1, 0.2, 0.5, 1, 2, 5, and 10 percent tolerances.
    These standard values are the ones available from distributors. Both
    memory resident and non-memory resident versions are provided.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1884.TXT

{% raw %}
```
Disk No: 1884                                                           
Disk Title: ResisPop                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: ResisPop                                                 
Author Version: 1.01                                                    
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
ResisPop 1.0  is a simple resistor selection program that allows you    
to convert arbitrary resistance values between 1.0 ohm and 10 Mohm to   
standard values for 0.1, 0.2, 0.5, 1, 2, 5, and 10 percent tolerances.  
These standard values are the ones available from distributors.  Both   
Terminate-and-Stay-Resident (TSR) and non-TSR versions are provided.    
                                                                        
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
                Description of Files for BestGues 1.05
                     6/14/89  Rev (A)


Resistor.exe and ResisPop.exe enable the user to convert calculated resistor
values to standard values available from distributors. The programs are an aid
for engineers and technicians designing, manufacturing or repairing electronic
equipment. Students and teachers may find the programs valuable in designing
experiments. Hobbyists, including amateur radio (HAM) devotees, may also find
the programs useful.

ResisPop.doc   -   This is the one page manual for Resispop.

ResisPop.exe   -   This is the TSR (pop-up) version of the program.

Resistor.exe   -   This is a non-TSR version of the program.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1884  RESISPOP  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: RESISPOP     (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY RESISPOP.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## RESISPOP.DOC

{% raw %}
```
                       ResisPop 1.0 Documentation
                   revised for version 1.01, June 14, 1989


ResisPop 1.0  is a simple resistor selection program that allows
you to convert arbitrary resistance values between 1.0 ohm and 10 Mohm
to standard values for 0.1, 0.2, 0.5, 1, 2, 5, and 10 percent tolerances.
The standard values are not always commercially available values
(especially below 10 ohms and above 100k ohms) so you need to consult
manufacturers data before finalizing your selections.

ResisPop selects the nearest standard value to the value you enter.
When the value you enter is exactly between two standard values, Resispop
selects the smaller value.

Since ResisPop is a TSR (Terminate and Stay Resident) program, there are
certain restrictions to its use.

        1. If you use SideKick, SideKick must be loaded after ResisPop.
           If ResisPop senses that SideKick is installed, ResisPop will
           not install itself.

        2. ResisPop will not pop-up if your video display is in a
           graphics mode. This is to prevent garbling your screen on
           exit. If you are using a graphics oriented program and the
           program will allow you to go to DOS without exiting the program,
           ResisPop will be able to pop-up in that environment.

        3. ResisPop takes about 40k of memory in excess of the application
           you are running.

To load ResisPop, type 'Resispop' at the DOS prompt with a copy of the ResisPop
disk in the default drive for a floppy based system or a copy of ResisPop on
the default directory of your harddisk for a harddisk based system.

To start ResisPop, press Ctrl-Alt-R (the <Ctrl>, <Alt>, and the <R> keys
simultaneously).

If you want to remove ResisPop from memory, start Resispop, type 'q'
or 'Q' in the data entry window and then hit the <Enter> key and
ResisPop will deactivate itself if it is safe to do so (i.e. if no
system crash is likely to occur as a result).

Included with ResisPop is a non-TSR version, Resistor.exe, for those of
you who would rather not use memory for a TSR or are running DesqView or
other DOS compatible multitasking software and don't need the pop-up
capability.

ResisPop is Copyright (c) Notor Engineering Services  1989 all rights
reserved. You are free to use this program for your personal
work, or give a copy to a friend or colleague provided the original files
are not modified in any way whatsoever. This software may not be published
for commercial purposes as part of a collection or as a stand alone product
without the express written consent of Notor Engineering Services.

If you have any questions or comments about this software package you may
address them to

             John Notor
             Notor Engineering Services
             1548 Arata Court
             San Jose, CA 95125
             (408) 947-8848
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1884

     Volume in drive A has no label
     Directory of A:\

    FILE1884 TXT      1481  12-27-89  12:57p
    FILES    TXT       715   6-14-89   7:30a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   2:48p
    RESISPOP DOC      2938   6-14-89   7:38a
    RESISPOP EXE     37936   5-29-89   8:39a
    RESISTOR EXE     35184   6-03-89   7:06a
            7 file(s)      78832 bytes
                           79360 bytes free
