---
layout: page
title: "PC-SIG Diskette Library (Disk #842)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0842/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0842"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOX (PROGRAMMERS UTILITY)"

    BOX is a screen-designing tool that lets you quickly create entry
    screens, help screens and menus.
    
    You start with a blank screen, and using simple commands, you can draw
    lines, boxes, enter text, and change foreground and background colors.
    You can repeat an entry, paint an area, copy or move portions of the
    screen and select special characters from an ASCII table.  Boxes are
    incredibly easy to design, and several different border lines are
    provided to create them.
    
    Any screen can be saved in any of three formats, (ASCII, memory, or
    packed), depending on the use of the screen.  ASCII format lets you save
    your screen so it can be edited by a word processor.
    
    Memory or packed format screens can be loaded directly and popped
    instantly on the monitor from a Pascal or C program.  This disk also
    contains all the source code routines that you need to incorporate BOX
    in your Turbo Pascal programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0842.TXT

{% raw %}
```
Disk No:  842                                                           
Disk Title: BOX (Programmers utility)                                   
PC-SIG Version: S1.5                                                    
                                                                        
Program Title: BOX                                                      
Author Version: 2.0                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
BOX is a screen-designing tool that lets you quickly create entry       
screens, help screens and menus.                                        
                                                                        
You start with a blank screen, and using simple commands, you can draw  
lines, boxes, enter text, and change foreground and background colors.  
You can repeat an entry, paint an area, copy or move portions of the    
screen and select special characters from an ASCII table.  Boxes are    
incredibly easy to design, and several different border lines are       
provided to create them.                                                
                                                                        
Any screen can be saved in any of three formats, (ASCII, memory, or     
packed), depending on the use of the screen.  ASCII format lets you save
your screen so it can be edited by a word processor.                    
                                                                        
Memory or packed format screens can be loaded directly and popped       
instantly on the monitor from a Pascal or C program.  This disk also    
contains all the source code routines that you need to incorporate BOX  
in your Turbo Pascal programs.                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GRAB.DOC

{% raw %}
```

                                    GRAB
                         A Screen Capturing Utility
                          Hit ALT-PrtSc to activate


       GRAB.COM is a TSR screen-capturing utility that saves a copy of
       the current screen image in a BOX Memory format file.  GRAB is
       quite useful for creating demonstrations and training programs
       by capturing screens from operating programs.

       To use GRAB first load the program into memory by typing GRAB
       at the DOS prompt.  The program will write a short message on
       the screen confirming that it has been loaded.  After GRAB has
       been loaded into memory it will go to sleep and return you to
       the DOS prompt so that you may run any other program you wish.

       When you see a screen image that you want to capture, GRAB may
       be activated by hitting:

                            CTRL + ALT + G

       simultaneously.  GRAB will wake up, take a snapshot of the
       screen, and then write the screen image to the current disk
       drive and directory in a BOX Memory format.  The first file
       created by GRAB will be assigned the name BOX000.MEM.
       Subsequent files will named BOX001.MEM, BOX002.MEM and so on.

       Later you can load the screen images which have been saved with
       GRAB into the BOX editor and further modified.  Although GRAB
       only writes files in a Memory format you can easily modify the
       format by loading the file into BOX with a Memory format and
       saving the file with a ASCII or Packed format.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0842

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  1        4000   1-01-80  12:50a
    ADDRESS  2        4000   1-01-80   1:00a
    ADDRESS  3        4000   1-01-80   1:21a
    ADDRESS  4        4000   1-01-80   1:20a
    ADDRESS  DAT       688   3-25-90  11:19a
    ADDRESS  LGO      4000   1-01-80  12:46a
    ADDRESS  PAS     13134   3-25-90  11:20a
    ADDRESS  SCR      4000   1-01-80  12:48a
    ADDRGET  PAS      5107   3-24-90   5:11p
    ADDRINFO WIN      6672   3-24-90   4:51p
    ADDRIO   PAS     16341   3-24-90   5:08p
    ADDRKEY2 PAS      3077   3-24-90   5:16p
    ADDRMENU PAS      4421   3-25-90  11:17a
    BOX      CFG       195   3-24-90  10:42p
    BOX      DOC     66416   3-24-90   9:40p
    BOX      EXE     62768   3-25-90  11:44a
    BOXHELP  1        4000   2-01-90   2:09p
    BOXHELP  2        4000   3-04-90   9:57p
    BOXHELP  3        4000   1-01-80  12:20a
    BOXHELP  4        4000   1-26-90   9:05a
    BOXHELP  5        4000   1-26-90   9:05a
    BOXHELP  6        4000   1-26-90   9:06a
    BOXHELP  7        4000   1-26-90   9:07a
    BOXHELP  8        4000   2-05-90   2:47p
    BOXLOGO           4000   3-04-90   4:37p
    EXAMPLE1 PAS       738   3-24-90  10:34p
    EXFILE   ASC      2050   3-24-90  10:29p
    EXFILE   MEM      4000   3-24-90  10:26p
    EXFILE   PAK       765   3-24-90  10:30p
    EXFILE   WIN      1128   3-24-90  10:33p
    GRAB     COM       828   3-24-90   6:55p
    GRAB     DOC      1604   3-24-90   5:40p
    LOADFILE PAS      6671   3-25-90  11:05a
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       617   5-16-90  11:56p
    FILE0842 TXT      2449   5-18-90   3:24p
           36 file(s)     259707 bytes
                           51200 bytes free
