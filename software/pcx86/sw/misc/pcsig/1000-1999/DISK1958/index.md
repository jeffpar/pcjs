---
layout: page
title: "PC-SIG Diskette Library (Disk #1958)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1958/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1958"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CAPBUF"

    CAPBUF is a memory resident program that lets you capture any text
    screen and save it for later processing or printing.  It is quite useful
    for programs that do not otherwise provide means of printing their
    results.  Use it for intermediate results of games, or collecting copies
    of messages while on a bulletin board.  Remember that many elaborate
    program screens are line graphics.  They too can be captured then
    brought into an ASCII editor.  CAPBUF can be removed from memory once
    you are finished capturing screens.  A second program, Filter, can be
    used to eliminate extra lines or line drawing characters (especially
    useful if your printer does not support these characters).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAPBUF.DOC

{% raw %}
```
CAPBUF is a memory resident (TSR) program that lets you capture any text 
screen and save it for later processing or printing.  It is quite useful for 
programs that do not otherwise provide means of printing their results.  Use 
it for intermediate results of games, or collecting copies of messages while 
on a bulletin board.  
 
To install the program, type:
 
      >CAPBUF
 
A file will be created in the root of your current directory.  It's named 
"captured.buf".  You can then run any programs you wish.  When you find a 
screen that you want to save, press Alt-J, and that screen will be appended 
to your collection.  When finished, you can print it out, or use any 
wordprocessor to edit it.  Note that if you enter the command

      >TYPE \CAPTURED.BUF

it may appear that there are extra lines.  These will not appear on 
printing, though.   When you are finished with a session, be sure to rename 
the 'captured.buf' file, since the next time the program starts, it will 
erase any previous file it finds.

To remove CAPBUF, just enter the program name again.  You will then be asked 
if you want to remove it.  Any captured material will still be available.
                                 
CAPBUF is a shareware program.  If you find it useful please send a 
contribution of $15 to: 
      Cascoly Software
      4528 36th NE
      Seattle, WA 98105


```
{% endraw %}

## FILE1958.TXT

{% raw %}
```
Disk No: 1958                                                           
Disk Title: Capbuf                                                      
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: CAPBUF                                                   
Author Version: 10/31                                                   
Author Registration: $15.00                                             
Special Requirements: CGA.                                              
                                                                        
CAPBUF is a memory resident program that lets you capture any text      
screen and save it for later processing or printing.  It is quite useful
for programs that do not otherwise provide means of printing their      
results.  Use it for intermediate results of games, or collecting copies
of messages while on a bulletin board.  Remember that many elaborate    
program screens are line graphics.  They too can be captured then       
brought into an ASCII editor.  CAPBUF can be removed from memory once   
you are finished capturing screens.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1958

     Volume in drive A has no label
     Directory of A:\

    CAPBUF   DOC      1403  10-31-89   8:38p
    CAPBUF   EXE     47136  12-20-89   2:50p
    FILE1958 TXT      1703   1-19-90   9:48a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-17-90  12:40p
    README   LST      4001  11-27-89   2:21p
            6 file(s)      54821 bytes
                          103424 bytes free
